<script>
	import '../app.css';
</script>

<head>
	<title>お問い合わせ</title>
</head>

<div class="pb-6 sm:pb-8 lg:pb-12 bg-indigo-500">
	<!-- banner - start -->
	<div
		class="flex flex-wrap sm:flex-nowrap sm:justify-center sm:items-center  relative sm:gap-3 px-4 sm:pr-8 ms:px-8 py-3"
	>
		<div
			class="order-1 sm:order-none w-11/12 sm:w-auto max-w-screen-sm inline-block text-white text-sm md:text-base mb-2 sm:mb-0"
		>
			お問い合わせ
		</div>
	</div>
	<nav class="bg-indigo-500">
		<a href="/" class="bg-indigo-700 text-white px-3 py-2 text-sm font-medium">お問い合わせ</a>
		<a href="/inquery" class="bg-indigo-700 text-white px-3 py-2 text-sm font-medium"
			>お問い合わせ一覧</a
		>
	</nav>
</div>
<!-- banner - end -->

<slot />
