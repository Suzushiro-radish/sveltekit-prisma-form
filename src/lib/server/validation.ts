import type { Inquery } from './database';

export function validateInquery(request: Inquery): Array<string> {
	const messages: Array<string> = [];

	if (!isValid(request.name, { type: 'string', required: true, max_length: 50 })) {
		messages.push('名前が正しい形式ではありません');
	}
	if (!isValid(request.sex, { type: 'number', required: true })) {
		messages.push('性別が正しい形式ではありません');
	}
	if (
		!isValid(request.postal_code, {
			type: 'string',
			required: true,
			pattern: /^\d{3}-?\d{4}$/
		})
	) {
		messages.push('郵便番号が正しい形式ではありません');
	}
	if (!isValid(request.date_of_birth, { type: 'date', required: true })) {
		messages.push('生年月日が正しい形式ではありません');
	}
	if (!isValid(request.address, { type: 'string', required: true, max_length: 200 })) {
		messages.push('住所が正しい形式ではありません');
	}
	if (!isValid(request.tel, { type: 'string', pattern: /^0[-\d]{9,12}$/ })) {
		messages.push('電話番号が正しい形式ではありません');
	}
	if (!isValid(request.email, { type: 'email', max_length: 200 })) {
		messages.push('メールアドレスが正しい形式ではありません');
	}
	if (!isValid(request.inquery_type, { type: 'string', required: true })) {
		messages.push('お問い合わせの種類が正しい形式ではありません');
	}
	if (
		!isValid(request.inquery_body, {
			type: 'string',
			required: true,
			max_length: 1000
		})
	) {
		messages.push('お問い合わせ内容が正しい形式ではありません');
	}

	return messages;
}

type ValidationRule = {
	required?: boolean;
	type: 'email' | 'date' | 'string' | 'number';
	max_length?: number;
	pattern?: RegExp;
};

function isValid(value: string | number | null, rule: ValidationRule): boolean {
	// required
	if (!rule.required && (value === '' || value === 0 || value === null)) {
		return true;
	} else if (rule.required && (value === '' || value === 0 || value === null)) {
		return false;
	}
	// type
	switch (rule.type) {
		case 'string': {
			if (typeof value !== 'string') return false;
			break;
		}
		case 'number': {
			if (typeof value !== 'number') return false;
			break;
		}
		case 'email': {
			const emailPattern =
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
			const isValidEmail = emailPattern.test(String(value));
			if (!isValidEmail) return false;
			break;
		}
		case 'date': {
			const isValidDate: boolean = isDate(String(value));
			if (!isValidDate) return false;
			break;
		}
	}
	if (rule.max_length) {
		if (String(value).length > rule.max_length) return false;
	}
	if (rule.pattern) {
		const pattern = new RegExp(rule.pattern);
		if (!pattern.test(String(value))) return false;
	}
	return true;
}

function isDate(dateString: string): boolean {
	const datePattern = /^\d{4}-\d{2}-\d{2}$/;
	const isDateFormat = datePattern.test(dateString);
	if (!isDateFormat) return false;
	const date = new Date(dateString);
	const isInvalidDate = isNaN(date.getDate());
	if (isInvalidDate) return false;
	return true;
}
