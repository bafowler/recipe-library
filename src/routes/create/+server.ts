import { json } from '@sveltejs/kit';
import { createRecipe } from '../../data/routes/createRecipe.js';

export async function POST({ request }): Promise<Response> {
	const { recipe } = await request.json();

	await createRecipe(recipe);

	return json({}, { status: 200 });
}
