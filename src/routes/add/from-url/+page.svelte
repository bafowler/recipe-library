<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	let url = $state('');

	function handleGo() {
		console.log(url);
	}
</script>

<div>
	<a class="link" href="/">Back to Recipes</a>
</div>

<div class="flex w-full max-w-sm flex-col gap-1.5">
	<Label for="url" class="semi-bold">Recipe URL</Label>
	<Input type="url" id="url" placeholder="https://" bind:value={url} />
	<Button variant="outline" disabled={!url} onclick={handleGo}>Go</Button>
</div>
