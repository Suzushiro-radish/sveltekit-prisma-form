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
		class="h-5 w-5 ml-3 mr-1 accent-pink-500"
	/>
	<label for={id} class="block text-m font-m-plus text-gray-700">{label}</label>
</div>
