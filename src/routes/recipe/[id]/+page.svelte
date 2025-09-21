<script>
	let { data } = $props();
	let recipe = data.recipe;
</script>

<svelte:head>
	<title>{recipe.name}</title>
	<meta name="description" content="Recipe: {recipe.name}" />
</svelte:head>

<div>
	<div>
		<a href="/">Back to Recipes</a>
	</div>

	<div>
		<h1>{recipe.name}</h1>

		<div>
			<div>
				<h2>Ingredients</h2>
				<ul>
					{#each recipe.ingredients as ingredient}
						<li>
							{ingredient}
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h2>Instructions</h2>
				<ol>
					{#each recipe.instructions as instruction}
						<li>
							{instruction}
						</li>
					{/each}
				</ol>
			</div>
		</div>
	</div>
</div>
