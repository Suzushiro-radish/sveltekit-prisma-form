<script lang="ts">
	export let text: string;
	export let label: string;
</script>

<div class="flex flex-col pb-3">
	<dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">{label}</dt>
	<dd class="text-lg font-semibold">{text}</dd>
</div>
