<script lang="ts">
	export let name: string;
	export let id: string;
	export let label: string;
	export let patternLabel: string | null = null;
	export let required: boolean = false;
	export let cols: number | null = null;
	export let rows: number | null = null;
	export let maxlength: number | null = null;
	export let placeholder: string | null = null;
	export let value: string | null = null;
</script>

<div class="py-3">
	{#if required}
		<span class="text-red-500">*</span>
	{/if}
	<label for={id} class="inline-block text-gray-800 text-sm sm:text-base mb-2">
		{label}
		{#if patternLabel}
			<span>{patternLabel}</span>
		{/if}
	</label>
	<textarea
		{name}
		{id}
		{cols}
		{rows}
		{maxlength}
		{required}
		{placeholder}
		bind:value
		class="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
	/>
</div>
