<script lang="ts">
	export let type: string;
	export let label: string;
	export let patternLabel: string | null = null;
	export let id: string;
	export let name: string;
	export let required: boolean = false;
	export let maxlength: number | null = null;
	export let minlength: number | null = null;
	export let max: string | number | null = null;
	export let pattern: string | null = null;
	export let autocomplete: string | null = null;
	export let value: string | null = null;
	export let placeholder: string | null = null;
</script>

<div class="py-3 text-xl">
	<div class="font-m-plus mb-1">
		{#if required}
			<span class="text-red-500 text-xl">*</span>
		{/if}
		<label for={id} class="inline-block text-gray-800">
			{label}
			{#if patternLabel}
				<span class="text-pink-500 ml-5 text-base">{patternLabel}</span>
			{/if}
		</label>
	</div>
	{#if type === 'text'}
		<input
			type="text"
			{name}
			{id}
			{minlength}
			{maxlength}
			{pattern}
			{required}
			{placeholder}
			{autocomplete}
			bind:value
			class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2 focus:invalid:ring-pink-500"
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
			{max}
			{autocomplete}
			{placeholder}
			bind:value
			class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2 focus:invalid:ring-pink-500"
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
			{placeholder}
			bind:value
			class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2 focus:invalid:ring-pink-500"
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
			{placeholder}
			bind:value
			class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2 focus:invalid:ring-pink-500"
		/>
	{/if}
</div>
