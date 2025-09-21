import { getRecipe } from '../../../data/routes/recipe.js';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async ({ params }) => {
	const recipe = await getRecipe(params.id);
	return { recipe };
};
