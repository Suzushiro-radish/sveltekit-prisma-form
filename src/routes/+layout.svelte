<script>
	import '../app.css';
</script>

<head>
	<title>お問い合わせ</title>
</head>

<div class="bg-pink-500">
	<!-- banner - start -->
	<div class="flex flex-wrap justify-between px-4 sm:pr-8 ms:px-8 py-3">
		<div
			class="flex-none order-1 sm:order-none w-11/12 sm:w-auto max-w-screen-sm inline-block text-white text-xl font-semibold mb-2 sm:mb-0"
		>
			<a href="/">お問い合わせ</a>
		</div>
		<div class="justify-end">
			<a href="/inquery" class="bg-pink-700 text-white px-3 py-2 text-sm font-medium"
				>お問い合わせ一覧</a
			>
		</div>
	</div>
</div>
<!-- banner - end -->
<div class="bg-pink-200 py-6">
	<slot />
</div>
