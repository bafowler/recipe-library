<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import BackHomeButton from '@/components/BackHomeButton.svelte';
	import type { Recipe } from '../../../models.js';
	import RecipeDetails from '@/components/RecipeDetails.svelte';

	let url = $state('');
	let recipe = $state<Recipe | null>(null);

	async function handleGo(e: any) {
		const response = await fetch('/add/from-url', {
			method: 'POST',
			body: JSON.stringify({ url }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		recipe = (await response.json()).recipe;
	}
</script>

<BackHomeButton />

<div class="flex flex-col items-center">
	<div class="flex w-full flex-col items-center gap-8">
		<div class="flex w-full max-w-sm flex-col gap-1.5">
			<Label for="url" class="semi-bold">Recipe URL</Label>
			<Input type="url" id="url" placeholder="https://" bind:value={url} />
			<Button variant="outline" disabled={!url} onclick={handleGo}>Go</Button>
		</div>

		{#if recipe}
			<RecipeDetails {recipe} />
		{/if}
	</div>
</div>
