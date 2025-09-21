<script>
	import { Button } from '$lib/components/ui/button/index.js';

	let { data } = $props();
	let recipes = data.recipes;
</script>

<svelte:head>
	<title>Recipe Library</title>
	<meta name="description" content="A simple SvelteKit application" />
</svelte:head>

<Button>Click me</Button>
<ul class="recipe-list">
	{#each recipes as recipe}
		<li>
			<div class="recipe-card-header">
				<h2>{recipe.name}</h2>
				<a href="/recipe/{recipe.id}">View Recipe</a>
			</div>
			<h4>Ingredients</h4>
			<ul>
				{#each recipe.ingredients as ingredient}
					<li>{ingredient}</li>
				{/each}
			</ul>
			<h4>Instructions</h4>
			<ol>
				{#each recipe.instructions as instruction}
					<li>{instruction}</li>
				{/each}
			</ol>
		</li>
	{/each}
</ul>

<style>
	.recipe-card-header {
		display: flex;
		gap: 16px;
		align-items: center;
	}

	.recipe-list {
		list-style-type: none;
		height: 100%;
		overflow-y: auto;
	}
</style>
