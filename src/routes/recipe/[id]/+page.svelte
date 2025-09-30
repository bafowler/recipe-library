<script>
	import BackHomeButton from '@/components/BackHomeButton.svelte';
	import CentrePane from '@/components/CentrePane.svelte';
	import RecipeDetails from '@/components/RecipeDetails.svelte';

	let { data } = $props();
	let recipe = data.recipe;
</script>

<svelte:head>
	<title>{recipe.name}</title>
	<meta name="description" content="Recipe: {recipe.name}" />
</svelte:head>

<BackHomeButton />
<CentrePane>
	<RecipeDetails {recipe} />
</CentrePane>
