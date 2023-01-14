<script lang="ts">
	import { redirect } from '@sveltejs/kit';

	let name: string = 'error';
	let sex: string = '1';
	let date_of_birth: string = '1997-12-10';
	let postal_code: string = '123-4567';
	let address: string = 'Tokyo';
	let tel: string | null;
	let email: string | null;
	let inquery_type: string = '1';
	let inquery_body: string = 'このデータはFetchで送信されました';

	async function postData() {
		const data = {
			name: name,
			sex: sex,
			date_of_birth: date_of_birth,
			postal_code: postal_code,
			address: address,
			tel: tel,
			email: email,
			inquery_type: inquery_type,
			inquery_body: inquery_body
		};

		const res = await fetch('/api/register', {
			method: 'POST',
			body: JSON.stringify(data)
		});
		const jsonRes = await res.json();
		console.log(jsonRes);
	}
</script>

<button type="button" on:click={postData}> Register Fetch! </button>
