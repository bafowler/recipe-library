<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import Loader2Icon from '@lucide/svelte/icons/loader-2';
	import BackHomeButton from '@/components/BackHomeButton.svelte';
	import type { Recipe } from '../../models.js';
	import CentrePane from '@/components/CentrePane.svelte';
	import EditRecipe from '@/components/EditRecipe.svelte';

	let generateLoading = $state(false);
	let url = $state('');
	let recipe = $state<Recipe | null>(null);

	async function handleGo(e: MouseEvent) {
		generateLoading = true;

		const response = await fetch('/from-url/generate', {
			method: 'POST',
			body: JSON.stringify({ url }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		recipe = (await response.json()).recipe;

		generateLoading = false;
	}
</script>

<BackHomeButton />

<CentrePane>
	<div class="flex w-full flex-col items-center gap-8">
		<div class="flex w-full max-w-sm flex-col gap-1.5">
			<Label for="url" class="semi-bold">Recipe URL</Label>
			<Input type="url" id="url" placeholder="https://" bind:value={url} />
			<Button variant="outline" disabled={!url || generateLoading} onclick={handleGo}>
				{#if generateLoading}
					<Loader2Icon class="animate-spin" />
				{/if}
				Go
			</Button>
		</div>

		{#if recipe}
			<EditRecipe {recipe} />
		{/if}
	</div>
</CentrePane>
