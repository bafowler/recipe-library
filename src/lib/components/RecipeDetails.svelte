<script lang="ts">
	let { recipe } = $props();
</script>

<div class="flex flex-col items-center">
	<h2>{recipe.name}</h2>

	<div class="flex flex-col gap-4 pl-8">
		<div>
			<h4>Ingredients</h4>
			<ul class="pl-8">
				{#each recipe.ingredients as ingredient}
					<li>{ingredient}</li>
				{/each}
			</ul>
		</div>
		<div>
			<h4>Instructions</h4>
			<ol class="pl-8">
				{#each recipe.instructions as instruction, index}
					<li><span class="font-semibold">{index + 1}.</span> {instruction}</li>
				{/each}
			</ol>
		</div>
	</div>
</div>
