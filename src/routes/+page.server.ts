import { getRecipes } from '../data/routes/recipes.js';

export async function load() {
	const recipes = await getRecipes();

	return { recipes };
}
