<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Field from '$lib/components/ui/field/index.js';
	import Input from './ui/input/input.svelte';
	import TrashIcon from '@lucide/svelte/icons/trash';
	import SaveRecipeButton from './SaveRecipeButton.svelte';

	let { recipe } = $props();
	let ingredients = $state(recipe.ingredients);
	let instructions = $state(recipe.instructions);

	function handleAddIngredient() {
		ingredients.push('');
	}

	function handleRemoveIngredient(ingredient: string) {
		ingredients = ingredients.filter((i: string) => i !== ingredient);
	}

	function handleAddInstruction() {
		instructions.push('');
	}

	function handleRemoveInstruction(index: number) {
		instructions = instructions.filter((_: string, i: number) => i !== index);
	}
</script>

<div class="flex w-full flex-col items-center">
	<h2>{recipe.name}</h2>

	<div class="flex w-full flex-col gap-4 pl-8">
		<div>
			<h4 class="mb-2">Ingredients</h4>
			<div class="flex flex-col gap-4">
				<ul class="flex flex-col gap-4 pl-8">
					{#each ingredients as ingredient}
						<Field.Field orientation="horizontal">
							<Input id={ingredient} value={ingredient} class="flex-grow-1" />
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
			<h4 class="mb-2">Instructions</h4>
			<div class="flex flex-col gap-4">
				<ol class="flex flex-col gap-4 pl-8">
					{#each instructions as instruction, index}
						<Field.Field orientation="horizontal">
							<span class="font-semibold">{index + 1}.</span>
							<Input id={instruction} value={instruction} />
							<Button
								variant="secondary"
								size="icon"
								class="size-8"
								onclick={() => handleRemoveInstruction(index)}
							>
								<TrashIcon />
							</Button>
						</Field.Field>
					{/each}
				</ol>
				<div class="pl-8">
					<Button variant="outline" onclick={handleAddInstruction}>Add Instruction</Button>
				</div>
			</div>
		</div>
	</div>
</div>

<SaveRecipeButton recipe={{ ...recipe, ingredients, instructions }} />
