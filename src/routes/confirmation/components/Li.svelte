<script lang="ts">
	export let text: string;
	export let label: string;
</script>

<div class="flex flex-col pb-3">
	<dt class="mb-1 text-gray-500 text-lg">{label}</dt>
	<dd class="text-xl text-gray-800">{text}</dd>
</div>
