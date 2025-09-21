import { transformRecipeRecordToRecipe } from '../transforms.js';
import type { RecipeRecord } from '../../models.js';
import { connectToDatabase } from '../connect.js';

export async function getRecipes() {
	const client = await connectToDatabase();
	const db = client.db('recipes');
	const collection = db.collection<RecipeRecord>('recipes');

	const recipes = await collection.find({}).toArray();

	return recipes.map((r) => transformRecipeRecordToRecipe(r));
}
