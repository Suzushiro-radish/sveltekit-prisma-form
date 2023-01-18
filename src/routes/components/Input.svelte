<script lang="ts">
	export let type: string;
	export let label: string;
	export let id: string;
	export let name: string;
	export let required: boolean = false;
	export let maxlength: number | null = null;
	export let minlength: number | null = null;
	export let pattern: string | null = null;
	export let autocomplete: string | null = null;
	export let value: string | null = null;
</script>

<div class="py-3">
	<label for={id} class="inline-block text-gray-800 text-sm sm:text-base mb-2">{label}</label>
	{#if type === 'text'}
		<input
			type="text"
			{name}
			{id}
			{minlength}
			{maxlength}
			{pattern}
			{required}
			{autocomplete}
			bind:value
			class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
		/>
	{:else if type === 'date'}
		<input
			type="date"
			{name}
			{id}
			{minlength}
			{maxlength}
			{pattern}
			{required}
			{autocomplete}
			bind:value
			class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
		/>
	{:else if type === 'email'}
		<input
			type="email"
			{name}
			{id}
			{minlength}
			{maxlength}
			{pattern}
			{required}
			{autocomplete}
			bind:value
			class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
		/>
	{:else}
		<input
			type="text"
			{name}
			{id}
			{minlength}
			{maxlength}
			{pattern}
			{required}
			{autocomplete}
			bind:value
			class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
		/>
	{/if}
</div>
