<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Field from '$lib/components/ui/field/index.js';
	import Input from './ui/input/input.svelte';
	import TrashIcon from '@lucide/svelte/icons/trash';
	let { recipe } = $props();
	let ingredients = $state(recipe.ingredients);

	function handleAddIngredient() {
		ingredients.push('');
	}

	function handleRemoveIngredient(ingredient: string) {
		ingredients = ingredients.filter((i: string) => i !== ingredient);
	}
</script>

<div class="flex flex-col items-center">
	<h2>{recipe.name}</h2>

	<div class="flex flex-col gap-4 pl-8">
		<div>
			<h4 class="mb-2">Ingredients</h4>
			<div class="flex flex-col gap-4">
				<ul class="flex flex-col gap-4 pl-8">
					{#each ingredients as ingredient}
						<Field.Field orientation="horizontal">
							<Input id={ingredient} value={ingredient} />
							<Button
								variant="secondary"
								size="icon"
								class="size-8"
								onclick={() => handleRemoveIngredient(ingredient)}
							>
								<TrashIcon />
							</Button>
						</Field.Field>
					{/each}
				</ul>
				<div class="pl-8">
					<Button variant="outline" onclick={handleAddIngredient}>Add Ingredient</Button>
				</div>
			</div>
		</div>

		<div>
			<h4>Instructions</h4>
			<div class="flex flex-col gap-4">
				<ol class="pl-8">
					{#each recipe.instructions as instruction, index}
						<li><span class="font-semibold">{index + 1}.</span> {instruction}</li>
					{/each}
				</ol>
				<div class="pl-8">
					<Button variant="outline">Add Instruction</Button>
				</div>
			</div>
		</div>
	</div>
</div>
