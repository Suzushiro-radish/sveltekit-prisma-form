import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type Inquery = {
	name: string;
	sex: number;
	date_of_birth: string;
	postal_code: string;
	address: string;
	tel: string | null;
	email: string | null;
	inquery_type: string;
	inquery_body: string;
};

export async function insertRecord(data: Inquery) {
	if (data.postal_code) {
		data.postal_code = data.postal_code.replace('-', '');
	}
	const inquery = await prisma.inquery.create({
		data: data
	});
	console.log(inquery);
}

export async function getAllRecords() {
	const records = await prisma.inquery.findMany();
	return records;
}
