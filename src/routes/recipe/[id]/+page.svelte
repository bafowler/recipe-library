<script>
	let { data } = $props();
	let recipe = data.recipe;
</script>

<svelte:head>
	<title>{recipe.name}</title>
	<meta name="description" content="Recipe: {recipe.name}" />
</svelte:head>

<div>
	<a class="link" href="/">Back to Recipes</a>

	<h2>{recipe.name}</h2>

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
</div>
