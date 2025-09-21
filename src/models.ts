export interface RawRecipe {
	'@type': ['Recipe'];
	name: string;
	recipeIngredient: string[];
	recipeInstructions: { text: string }[];
}

export interface Recipe {
	id: string;
	name: string;
	source: string;
	ingredients: string[];
	instructions: string[];
}

export interface RecipeRecord extends Recipe {
	_id: string;
}
