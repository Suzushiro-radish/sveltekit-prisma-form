<script lang="ts">
	export let label: string;
	export let id: string;
	export let name: string;
	export let required: boolean = false;
	export let value: string;
	export let group: string;
</script>

<div class="flex items-center">
	<input
		type="radio"
		{name}
		{id}
		{required}
		bind:group
		{value}
		class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
	/>
	<label for={id} class="ml-3 block text-sm font-medium text-gray-700">{label}</label>
</div>
