<script lang="ts">
	import RadioInput from './RadioInput.svelte';
	type RadioInputData = {
		id: string;
		value: string;
		label: string;
	};
	export let inputDataArray: Array<RadioInputData>;
	export let label: string;
	export let name: string;
	export let checked: string;
	export let required: boolean = false;
</script>

<div class="py-3">
	<fieldset id="sex">
		<legend class="inline-block text-gray-800 text-xl font-m-plus mb-1">
			{#if required}
				<span class="text-red-500 text-lg">*</span>
			{/if}
			{label}
		</legend>
		<div class="flex mt-1">
			{#each inputDataArray as inputData}
				<RadioInput
					{name}
					id={inputData.id}
					{required}
					bind:group={checked}
					value={inputData.value}
					label={inputData.label}
				/>
			{/each}
		</div>
	</fieldset>
</div>
