import { transformRecipeRecordToRecipe } from '../transforms.js';
import type { Recipe, RecipeRecord } from '../../models.js';
import { connectToDatabase } from '../connect.js';

export async function createRecipe(recipe: Recipe) {
	const client = await connectToDatabase();
	const db = client.db('recipes');
	const collection = db.collection<Recipe>('recipes');
	await collection.insertOne(recipe);
}
