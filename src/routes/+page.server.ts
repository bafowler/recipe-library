import { getRecipes } from '../data/recipes.js';

export async function load() {
	const recipes = await getRecipes();

	return { recipes };
}
