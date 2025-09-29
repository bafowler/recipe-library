import { json } from '@sveltejs/kit';
import { generateRecipeFromUrl } from '../../../data/routes/generateRecipeFromUrl.js';

export async function POST({ request }): Promise<Response> {
	const { url } = await request.json();

	const recipe = await generateRecipeFromUrl(url);

	return json({ recipe }, { status: 200 });
}
