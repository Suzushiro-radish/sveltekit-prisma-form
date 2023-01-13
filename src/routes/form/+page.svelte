<script lang="ts">
	import Input from '../components/form/Input.svelte';
	import Select from '../components/form/Select.svelte';
	import Option from '../components/form/Option.svelte';
	import RadioField from '../components/form/RadioField.svelte';
	import Textarea from '../components/form/Textarea.svelte';

	let name: string = 'Daiki';
	let sex: string = '1';
	let date_of_birth: string = '1997-12-10';
	let postal_code: string = '123-4567';
	let address: string = 'Tokyo';
	let tel: string | null;
	let email: string | null;
	let inquery_type: string = '1';
	let inquery_body: string = '色々困ってます。';

	const postalCodePattern = '^\\d{3}-?\\d{4}$';
	const telPattern = '^0[-\\d]{9,12}$';
</script>

<form id="form" method="post" autocomplete="on" class="max-w-screen-md gap-4 mx-auto">
	<!-- 名前（必須）-->
	<Input label="名前" name="name" id="name" type="text" autocomplete="name" required />
	<!-- 性別（選択式・必須）-->
	<RadioField
		name="sex"
		label="性別"
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
		required
		autocomplete="bday"
	/>
	<!-- 郵便番号（必須） -->
	<Input
		type="text"
		label="郵便番号"
		id="postal-code"
		name="postal-code"
		required
		pattern={postalCodePattern}
		autocomplete="postal-code"
	/>

	<!-- 住所（必須・200文字以内） -->
	<Input type="text" label="住所" id="address" name="address" required maxlength={200} />
	<!-- 電話番号（任意） -->
	<Input
		type="tel"
		label="電話番号"
		name="tel"
		id="tel"
		pattern={telPattern}
		autocomplete="tel-national"
	/>
	<!-- メールアドレス(任意・200文字以内) -->
	<Input
		type="email"
		label="メールアドレス"
		name="email"
		id="email"
		maxlength={200}
		autocomplete="email"
	/>
	<!-- 問い合わせの種類(選択式・必須) -->
	<Select id="inquery-type" name="inquery-type" label="お問い合わせの種類" required>
		<Option label="未選択" value="" />
		<Option label="ホームページに関して" value="1" />
		<Option label="製品に関して" value="2" />
		<Option label="会社に関して" value="3" />
		<Option label="その他" value="4" />
	</Select>
	<!-- 相談内容(必須・1000文字以内) -->
	<Textarea
		name="inquery-body"
		id="inquery-body"
		label="お問い合わせ内容"
		rows={10}
		cols={50}
		maxlength={1000}
		placeholder="お問い合わせ内容を入力してください"
		required
	/>
	<button
		type="submit"
		class="sm:col-span-2 inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
	>
		確認
	</button>
</form>
