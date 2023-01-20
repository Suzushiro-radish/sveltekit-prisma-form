<script lang="ts">
	export let name: string;
	export let id: string;
	export let required: boolean = false;
	export let label: string;
	export let value: string;
</script>

<div class="py-3 font-m-plus text-xl">
	{#if required}
		<span class="text-red-500">*</span>
	{/if}
	<label for={id} class="inline-block text-gray-800 mb-1">{label}</label>
	<select
		{name}
		{id}
		{required}
		bind:value
		class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
	>
		<slot />
	</select>
</div>
