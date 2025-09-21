<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button/index.js';
	import PlusIcon from '@lucide/svelte/icons/plus';

	let { data } = $props();
	let recipes = data.recipes;

	function handleAddRecipe() {
		goto('/add/from-url');
	}
</script>

<svelte:head>
	<title>Recipe Library</title>
	<meta name="description" content="A simple SvelteKit application" />
</svelte:head>

<div class="flex flex-col items-center">
	<Button variant="outline" size="sm" onclick={handleAddRecipe}>
		<PlusIcon />
		Add Recipe
	</Button>

	<ul class="recipe-list flex flex-col gap-12">
		{#each recipes as recipe}
			<li class="flex flex-col gap-4">
				<div>
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
						{#each recipe.instructions as instruction, index}
							<li><span>{index + 1}.</span> {instruction}</li>
						{/each}
					</ol>
				</div>
			</li>
		{/each}
	</ul>
</div>
