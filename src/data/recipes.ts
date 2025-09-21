import { MongoClient } from 'mongodb';
import { transformRecipeRecordToRecipe } from './transforms.js';
import type { RecipeRecord } from '../models.js';

export async function getRecipes() {
	const client = await connectToDatabase();
	const db = client.db('recipes');
	const collection = db.collection<RecipeRecord>('recipes');

	const recipes = await collection.find({}).toArray();

	return recipes.map((r) => transformRecipeRecordToRecipe(r));
}

async function connectToDatabase() {
	const client = new MongoClient('mongodb://localhost:27017');
	await client.connect();
	return client;
}
