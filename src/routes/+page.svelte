<script>
	import { Button } from '$lib/components/ui/button/index.js';

	let { data } = $props();
	let recipes = data.recipes;
</script>

<svelte:head>
	<title>Recipe Library</title>
	<meta name="description" content="A simple SvelteKit application" />
</svelte:head>

<Button class="btn">Click me</Button>
<ul class="recipe-list flex flex-col gap-12">
	{#each recipes as recipe}
		<li class="flex flex-col gap-4">
			<div class="flex items-center gap-4">
				<h2>{recipe.name}</h2>
				<a class="link" href="/recipe/{recipe.id}">View Recipe</a>
			</div>
			<div class="pl-8">
				<h4>Ingredients</h4>
				<ul class="pl-8">
					{#each recipe.ingredients as ingredient}
						<li>{ingredient}</li>
					{/each}
				</ul>
				<h4>Instructions</h4>
				<ol class="pl-8">
					{#each recipe.instructions as instruction}
						<li>{instruction}</li>
					{/each}
				</ol>
			</div>
		</li>
	{/each}
</ul>

<style>
	.recipe-list {
		height: 100%;
		overflow-y: auto;
	}
</style>
