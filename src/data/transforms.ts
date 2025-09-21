import type { Recipe, RecipeRecord } from '../models.js';

export function transformRecipeRecordToRecipe(recipeRecord: RecipeRecord): Recipe {
	const { _id, ...recipe } = recipeRecord;
	return recipe;
}
