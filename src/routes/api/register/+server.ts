import { json, error } from '@sveltejs/kit';

import * as db from '$lib/server/database';
import { validateInquery } from '$lib/server/validation';

type InqueryRequest = {
	request: Request;
};

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: InqueryRequest) {
	const data = await request.json();

	const name = data.name ? String(data.name) : '';
	const sex = data.sex ? Number(data.sex) : 0;
	const date_of_birth = data.date_of_birth ? String(data.date_of_birth) : '';
	const postal_code = data.postal_code ? String(data.postal_code) : '';
	const address = data.address ? String(data.address) : '';
	const tel = data.tel ? String(data.tel) : null;
	const email = data.email ? String(data.email) : null;
	const inquery_type = data.inquery_type ? String(data.inquery_type) : '';
	const inquery_body = data.inquery_body ? String(data.inquery_body) : '';

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

	const validationErrorMessages = validateInquery(requestData);
	if (validationErrorMessages.length > 0) {
		const errorMessage = JSON.stringify(validationErrorMessages);
		throw error(422, errorMessage);
	}

	try {
		db.insertRecord(requestData);
	} catch {
		throw error(500, { message: 'database error' });
	}
	return json({ message: 'Congrats! Successfully registered!' });
}
