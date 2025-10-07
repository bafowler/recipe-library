<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { goto } from '$app/navigation';
	import Loader2Icon from '@lucide/svelte/icons/loader-2';

	let { recipe } = $props();
	let createLoading = $state(false);

	async function handleAddRecipe() {
		createLoading = true;

		await fetch('/create', {
			method: 'POST',
			body: JSON.stringify({ recipe }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		createLoading = false;

		goto('/');
	}
</script>

<Button onclick={handleAddRecipe} disabled={createLoading}>
	{#if createLoading}
		<Loader2Icon class="animate-spin" />
	{/if}
	Add Recipe
</Button>
