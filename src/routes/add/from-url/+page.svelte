<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
</script>

<div>
	<a class="link" href="/">Back to Recipes</a>
</div>

<div class="flex w-full max-w-sm flex-col gap-1.5">
	<Label for="url" class="semi-bold">Recipe URL</Label>
	<Input type="url" id="url" placeholder="https://" />
</div>
