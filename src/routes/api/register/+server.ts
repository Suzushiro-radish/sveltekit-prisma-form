import { json, error } from '@sveltejs/kit';

import * as db from '$lib/server/database';
import { validateInquery, type InqueryRequest } from '$lib/server/validation';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: { request: Request }) {
	const data = await request.json();

	const name = data.name ?? null;
	const sex = data.sex ?? null;
	const date_of_birth = data.date_of_birth ?? null;
	const postal_code = data.postal_code ?? null;
	const address = data.address ?? null;
	const tel = data.tel ?? null;
	const email = data.email ?? null;
	const inquery_type = data.inquery_type ?? null;
	const inquery_body = data.inquery_body ?? null;

	const requestData: InqueryRequest = {
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

	const formattedSex = Number(sex);
	const formattedPostalCode = postal_code.replaceAll('-', '');
	const formattedInquery: db.Inquery = {
		name: name,
		sex: formattedSex,
		date_of_birth: date_of_birth,
		postal_code: formattedPostalCode,
		address: address,
		tel: tel,
		email: email,
		inquery_type: inquery_type,
		inquery_body: inquery_body
	};

	try {
		db.insertRecord(formattedInquery);
	} catch {
		throw error(500, { message: 'database error' });
	}
	return json({ message: 'Congrats! Successfully registered!' });
}
