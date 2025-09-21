<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import BackHomeButton from '@/components/BackHomeButton.svelte';

	let url = $state('');

	function handleGo() {
		console.log(url);
	}
</script>

<BackHomeButton />

<div class="flex flex-col items-center">
	<div class="flex w-full max-w-sm flex-col gap-1.5">
		<Label for="url" class="semi-bold">Recipe URL</Label>
		<Input type="url" id="url" placeholder="https://" bind:value={url} />
		<Button variant="outline" disabled={!url} onclick={handleGo}>Go</Button>
	</div>
</div>
