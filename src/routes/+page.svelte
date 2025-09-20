<script>
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Hello World - Recipes UI</title>
	<meta name="description" content="A simple SvelteKit application" />
</svelte:head>

<div class="container">
	<h1>Hello World!</h1>
	<p>Welcome to your SvelteKit application running on port 3000.</p>
	{#if mounted}
		<p class="status">✅ Application is running successfully!</p>
	{/if}
</div>

<style>
	.container {
		text-align: center;
		max-width: 600px;
		margin: 0 auto;
	}

	h1 {
		color: #646cff;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.2em;
		margin-bottom: 1rem;
		color: rgba(255, 255, 255, 0.87);
	}

	.status {
		color: #4ade80;
		font-weight: 500;
	}
</style>
