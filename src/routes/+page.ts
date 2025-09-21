export async function load() {
	let recipes: any[] = [];
	let loading = true;
	let error: string | null = null;

	try {
		const res = await fetch('http://localhost:7000/recipes');
		if (!res.ok) throw new Error(`Failed to fetch recipes: ${res.status}`);
		const data = await res.json();
		console.log(data.recipes);
		recipes = data.recipes;
	} catch (err: any) {
		error = err.message;
	} finally {
		loading = false;
	}

	return { recipes, loading, error };
}
