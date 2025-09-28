import { load } from 'cheerio';
import { v4 as uuidv4 } from 'uuid';
import type { RawRecipe, Recipe } from '../../models.js';

export async function generateRecipeFromUrl(url: string): Promise<Recipe> {
	const response = await fetch(url);
	const html: string = await response.text();

	const jsonLds: any[] = findJsonLds(html);
	const rawRecipe: RawRecipe = findRawRecipe(jsonLds);

	return transformRawRecipeToRecipe(rawRecipe, url);
}

function findJsonLds(html: string): any[] {
	const $ = load(html);

	const jsonLdElements = $('script[type="application/ld+json"]');
	if (jsonLdElements.length === 0) {
		throw new Error('No JSON-LD found');
	}

	const jsonLds = Array.from(jsonLdElements)
		.map((el: any) => {
			try {
				return JSON.parse($(el).text());
			} catch (error) {
				return null;
			}
		})
		.filter((ld: any) => ld !== null);

	if (jsonLds.length === 0) {
		throw new Error('Invalid JSON in JSON-LD tags');
	}

	return jsonLds;
}

function isRawRecipe(potentialRecipe: { [key: string]: any }): potentialRecipe is RawRecipe {
	return (
		potentialRecipe?.['@type'] === 'Recipe' || potentialRecipe?.['@type']?.includes?.('Recipe')
	);
}

function findRawRecipe(jsonLds: any): RawRecipe {
	const formats = [
		(ld: any) => ld['@graph']?.find?.(isRawRecipe),
		(ld: any) => ld?.find?.(isRawRecipe),
		(ld: any) => isRawRecipe(ld)
	];

	for (const jsonLd of jsonLds) {
		for (const format of formats) {
			const recipe = format(jsonLd);
			if (recipe) {
				return recipe;
			}
		}
	}

	throw new Error('Could not find a matching recipe format in any JSON-LD tags');
}

function transformRawRecipeToRecipe(rawRecipe: RawRecipe, source: string): Recipe {
	return {
		id: uuidv4(),
		name: rawRecipe.name,
		source,
		ingredients: rawRecipe.recipeIngredient,
		instructions: rawRecipe.recipeInstructions.flatMap((rawInstruction: any) => {
			if (rawInstruction.text) {
				return rawInstruction.text;
			}

			if (rawInstruction.itemListElement) {
				return rawInstruction.itemListElement.map((item: any) => item.text);
			}

			throw new Error('Invalid instruction format');
		})
	};
}
