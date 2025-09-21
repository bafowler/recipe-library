<script>
	let { data } = $props();
	let recipes = data.recipes;
</script>

<svelte:head>
	<title>Hello World - Recipes UI</title>
	<meta name="description" content="A simple SvelteKit application" />
</svelte:head>

<ul class="recipes grid grid-cols-1 md:grid-cols-2 gap-4">
	{#each recipes as recipe}
		<li class="border rounded-lg p-4 shadow hover:shadow-lg transition">
			<h2 class="text-xl font-semibold">{recipe.name}</h2>
			<h4 class="text-sm font-semibold">Ingredients</h4>
			<ul>
				{#each recipe.ingredients as ingredient}
					<li>{ingredient}</li>
				{/each}
			</ul>
			<h4 class="text-sm font-semibold">Instructions</h4>
			<ul>
				{#each recipe.instructions as instruction}
					<li>{instruction}</li>
				{/each}
			</ul>
		</li>
	{/each}
</ul>

<style>
	.recipes {
		list-style-type: none;
		height: 100%;
		overflow-y: auto;
	}
</style>
