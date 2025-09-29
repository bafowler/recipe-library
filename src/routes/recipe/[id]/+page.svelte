<script>
	import BackHomeButton from '@/components/BackHomeButton.svelte';
	import RecipeDetails from '@/components/RecipeDetails.svelte';

	let { data } = $props();
	let recipe = data.recipe;
</script>

<svelte:head>
	<title>{recipe.name}</title>
	<meta name="description" content="Recipe: {recipe.name}" />
</svelte:head>

<div class="flex flex-col gap-8">
	<BackHomeButton />
	<RecipeDetails {recipe} />
</div>
