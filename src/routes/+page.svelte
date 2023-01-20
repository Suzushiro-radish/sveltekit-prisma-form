<script lang="ts">
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
	import Input from './components/Input.svelte';
	import Select from './components/Select.svelte';
	import Option from './components/Option.svelte';
	import RadioField from './components/RadioField.svelte';
	import Textarea from './components/Textarea.svelte';
	import { goto } from '$app/navigation';
	import { InqueryTypes } from '$lib/constant';

	const postalCodePattern = '^\\d{3}-?\\d{4}$';
	const telPattern = '^0[-\\d]{9,12}$';
	const nowYmd = getNowYmd();

	function getNowYmd() {
		const now = new Date().toISOString();
		const ymd = now.split('T')[0];
		return ymd;
	}

	function onSubmit() {
		console.log('Hello');
		goto('/confirmation');
	}
</script>

<div class="container max-w-screen-md gap-4 mx-auto font-m-plus">
	<div class="text-left text-3xl font-m-plus mx-5">入力フォーム</div>
	<hr class="bg-pink-500 h-1 mb-5 mt-1 mx-3" />
	<div class="bg-white p-5 rounded-xl">
		<div class="text-black"><span class="text-red-500">*</span>がついているものは必須項目です</div>
		<form id="form" method="post" on:submit|preventDefault={onSubmit}>
			<!-- 名前（必須・50字以内）-->
			<Input
				label="名前"
				patternLabel="50字以内で入力してください"
				name="name"
				id="name"
				type="text"
				autocomplete="name"
				required
				placeholder="例) 山田 太郎"
				maxlength={50}
				bind:value={$name}
			/>
			<!-- 性別（選択式・必須）-->
			<RadioField
				name="sex"
				label="性別"
				bind:checked={$sex}
				required
				inputDataArray={[
					{ id: 'male', value: '1', label: '男性' },
					{ id: 'female', value: '2', label: '女性' },
					{ id: 'other', value: '9', label: 'その他' }
				]}
			/>
			<!-- 生年月日 （必須）-->
			<Input
				label="生年月日"
				id="date-of-birth"
				name="date-of-birth"
				type="date"
				max={nowYmd}
				required
				autocomplete="bday"
				bind:value={$date_of_birth}
			/>
			<!-- 郵便番号（必須） -->
			<Input
				type="text"
				label="郵便番号"
				id="postal-code"
				name="postal-code"
				required
				patternLabel="半角数字とハイフン(-)のみで入力してください"
				pattern={postalCodePattern}
				autocomplete="postal-code"
				placeholder="例) 000-0000"
				bind:value={$postal_code}
			/>

			<!-- 住所（必須・200文字以内） -->
			<Input
				type="text"
				label="住所"
				patternLabel="200字以内で入力してください"
				id="address"
				name="address"
				required
				maxlength={200}
				bind:value={$address}
			/>
			<!-- 電話番号（任意） -->
			<Input
				type="tel"
				label="電話番号"
				patternLabel="半角数字とハイフン(-)のみで入力してください"
				name="tel"
				id="tel"
				pattern={telPattern}
				autocomplete="tel-national"
				placeholder="例) 000-0000-0000"
				bind:value={$tel}
			/>
			<!-- メールアドレス(任意・200文字以内) -->
			<Input
				type="email"
				label="メールアドレス"
				name="email"
				id="email"
				maxlength={200}
				autocomplete="email"
				placeholder="例) example@example.com"
				bind:value={$email}
			/>
			<!-- 問い合わせの種類(選択式・必須) -->
			<Select
				id="inquery-type"
				name="inquery-type"
				label="お問い合わせの種類"
				bind:value={$inquery_type}
				required
			>
				<Option label="未選択" value="" />
				{#each InqueryTypes as type}
					<Option label={type.name} value={String(type.id)} />
				{/each}
			</Select>
			<!-- 相談内容(必須・1000文字以内) -->
			<Textarea
				name="inquery-body"
				id="inquery-body"
				label="お問い合わせ内容"
				patternLabel="1000字以内で入力してください"
				rows={10}
				cols={50}
				maxlength={1000}
				placeholder="お問い合わせ内容を入力してください"
				bind:value={$inquery_body}
				required
			/>
			<div class="flex flex-row-reverse">
				<button
					type="submit"
					class="bg-pink-500 hover:bg-pink-600 active:bg-pink-700 focus-visible:ring ring-indigo-300 text-white text-xl text-center rounded-lg outline-none transition duration-100 px-8 py-3 mr-10"
				>
					確認
				</button>
			</div>
		</form>
	</div>
</div>
