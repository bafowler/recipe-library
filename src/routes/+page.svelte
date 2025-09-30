<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button/index.js';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import CentrePane from '$lib/components/CentrePane.svelte';

	let { data } = $props();
	let recipes = data.recipes.sort((a, b) => a.name.localeCompare(b.name));

	function handleAddRecipe() {
		goto('/from-url');
	}
</script>

<svelte:head>
	<title>Recipe Library</title>
	<meta name="description" content="A simple SvelteKit application" />
</svelte:head>

<CentrePane>
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
			</li>
		{/each}
	</ul>
</CentrePane>
