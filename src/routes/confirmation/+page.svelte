<script lang="ts">
	import Li from './components/Li.svelte';
	import {
		name,
		sex,
		date_of_birth,
		postal_code,
		address,
		tel,
		email,
		inquery_type,
		inquery_body
	} from '$lib/store/formstore';
	import { InqueryTypes } from '$lib/constant';
	import { goto } from '$app/navigation';

	let isSending: boolean = false;

	$: inqueryType = InqueryTypes.find((e) => e.id === Number($inquery_type)) || {
		id: 0,
		name: '未選択'
	};

	function correctInput() {
		goto('/');
	}

	async function postData() {
		isSending = true;

		const data = {
			name: $name,
			sex: $sex,
			date_of_birth: $date_of_birth,
			postal_code: $postal_code,
			address: $address,
			tel: $tel,
			email: $email,
			inquery_type: inqueryType.name,
			inquery_body: $inquery_body
		};

		const res = await fetch('/api/register', {
			method: 'POST',
			body: JSON.stringify(data)
		});
		if (res.ok) {
			goto('/completed');
		} else if (res.status === 422) {
			const jsonRes = await res.json();
			const messages = JSON.parse(jsonRes.message);
			const parsedMessage = messages.join('\n');
			window.alert(parsedMessage);
			goto('/');
		} else {
			window.alert(
				'サーバーに問題が発生しているようです。\n しばらく待ってから再度送信するか、管理者に連絡してください。'
			);
		}
		isSending = false;
	}
</script>

<div class="container max-w-screen-md gap-4 mx-auto font-m-plus ">
	<div class="text-left text-3xl mx-5 text-gray-700">入力内容をご確認ください</div>
	<hr class="bg-pink-500 h-1 mb-5 mt-1 mx-3" />
	<div class="bg-white p-5 rounded-xl">
		<div class="mx-5">
			<dl class="list-none">
				<Li text={$name} label="氏名" />
				{#if $sex === '1'}
					<Li text="男性" label="性別" />
				{:else if $sex === '2'}
					<Li text="女性" label="性別" />
				{:else}
					<Li text="その他" label="性別" />
				{/if}
				<Li text={$date_of_birth} label="生年月日" />
				<Li text={$postal_code} label="郵便番号" />
				<Li text={$address} label="住所" />
				{#if $tel}
					<Li text={$tel} label="電話番号" />
				{/if}
				{#if $email}
					<Li text={$email} label="メールアドレス" />
				{/if}
				<Li text={inqueryType.name} label="お問い合わせの種類" />
				<Li text={$inquery_body} label="お問い合わせ内容" />
			</dl>
		</div>

		<hr class="h-0.5 my-5 bg-pink-400" />
		<div class="text-right text-lg mr-5">上記の内容でよろしければ、送信してください</div>

		<div class="flex flex-row justify-end space-x-5 mt-3">
			{#if !isSending}
				<button
					type="button"
					on:click={correctInput}
					class="inline-block h-12 w-24 rounded-lg px-4 py-1.5 text-xl leading-7 text-pink-500 ring-1 ring-transparent hover:bg-pink-50 hover:ring-pink-100 transition duration-300"
				>
					修正
				</button>
				<button
					type="button"
					on:click={postData}
					class="inline-block h-12 w-24 rounded-lg bg-pink-500 px-4 py-1.5 text-xl leading-7 text-yellow-50 shadow-sm ring-1 ring-pink-500 hover:bg-pink-600 hover:ring-pink-600 hover:text-white transition duration-300"
				>
					送信
				</button>
			{:else}
				<div class="text-pink-400 text-lg h-12 px-4 py-1.5">送信中…</div>
			{/if}
		</div>
	</div>
</div>
