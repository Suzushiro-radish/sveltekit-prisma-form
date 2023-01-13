import { getAllRecords } from '$lib/server/database.js';

export function load() {
	const records = getAllRecords();
	return { records: records };
}
