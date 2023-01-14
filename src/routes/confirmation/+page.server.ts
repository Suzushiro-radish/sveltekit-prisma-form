import * as db from '$lib/server/database.js';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async (request: Request) => {
		const data = await request.formData();

		const name = String(data.get('name'));
		const sex = Number(data.get('sex'));
		const date_of_birth = String(data.get('date-of-birth'));
		const postal_code = String(data.get('postal-code'));
		const address = String(data.get('address'));
		const tel = data.get('tel') ? String(data.get('tel')) : null;
		const email = data.get('email') ? String(data.get('email')) : null;
		const inquery_type = String(data.get('inquery-type'));
		const inquery_body = String(data.get('inquery-body'));

		const requestData: db.Inquery = {
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
		db.insertRecord(requestData);
	}
};
