<script>
	let { data } = $props();
	let recipes = data.recipes;
</script>

<svelte:head>
	<title>Hello World - Recipes UI</title>
	<meta name="description" content="A simple SvelteKit application" />
</svelte:head>

<ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
	{#each recipes as recipe}
		<li class="border rounded-lg p-4 shadow hover:shadow-lg transition">
			{#if recipe.image}
				<img src={recipe.image} alt={recipe.name} class="rounded w-full h-40 object-cover mb-2" />
			{/if}
			<h2 class="text-xl font-semibold">{recipe.name}</h2>
			{#if recipe.author}
				<p class="text-sm text-gray-600">By {recipe.author}</p>
			{/if}
			{#if recipe.tags?.length}
				<p class="mt-2 text-sm">
					{#each recipe.tags as tag}
						<span class="bg-gray-200 rounded px-2 py-1 mr-1">{tag}</span>
					{/each}
				</p>
			{/if}
			{#if recipe.url}
				<a href={recipe.url} target="_blank" class="text-blue-600 underline mt-2 block"
					>View Original</a
				>
			{/if}
		</li>
	{/each}
</ul>
