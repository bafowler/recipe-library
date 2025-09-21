import { transformRecipeRecordToRecipe } from '../transforms.js';
import type { RecipeRecord } from '../../models.js';
import { connectToDatabase } from '../connect.js';

export async function getRecipe(id: string) {
	const client = await connectToDatabase();
	const db = client.db('recipes');
	const collection = db.collection<RecipeRecord>('recipes');

	const recipe = await collection.findOne({ id });

	if (recipe === null) {
		throw new Error('Recipe not found');
	}

	return transformRecipeRecordToRecipe(recipe);
}
