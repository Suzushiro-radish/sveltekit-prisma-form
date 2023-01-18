<script lang="ts">
	import Li from '../../components/confirm/Li.svelte';
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

	$: inqueryType = InqueryTypes.find((e) => e.id === Number($inquery_type)) || {
		id: 0,
		name: '未選択'
	};

	async function postData() {
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
			goto('./completed');
		} else if (res.status === 422) {
			const jsonRes = await res.json();
			const messages = JSON.parse(jsonRes.message);
			const parsedMessage = messages.join('\n');
			window.alert(parsedMessage);
		} else {
			window.alert(
				'サーバーに問題が発生しているようです。\n しばらく待ってから再度送信するか、管理者に連絡してください。'
			);
		}
	}
</script>

<div class="container mx-auto">
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
	<button type="button" on:click={postData}> Register Fetch! </button>
</div>
