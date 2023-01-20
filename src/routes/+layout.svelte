<script>
	import '../app.css';
</script>

<head>
	<title>お問い合わせ</title>
</head>

<div class="bg-pink-500">
	<!-- banner - start -->
	<div class="flex justify-between px-4 py-3">
		<div class="flex-none ml-8 text-white text-2xl font-m-plus py-2">
			<span class="text-yellow-200">★</span>
			<a href="/">お問い合わせ</a>
		</div>
		<div class="justify-end rounded-md h-10 bg-pink-500 text-white px-3 py-2 hover:bg-pink-600">
			<a href="/inquery">お問い合わせ一覧</a>
		</div>
	</div>
</div>
<!-- banner - end -->
<div class="bg-pink-100 py-6">
	<slot />
</div>
