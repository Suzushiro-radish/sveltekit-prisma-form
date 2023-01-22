import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const name: Writable<string> = writable('');
export const sex: Writable<string> = writable('');
export const date_of_birth: Writable<string> = writable('');
export const postal_code: Writable<string> = writable('');
export const address: Writable<string> = writable('');
export const tel: Writable<string> = writable('');
export const email: Writable<string> = writable('');
export const inquery_type: Writable<string> = writable('');
export const inquery_body: Writable<string> = writable('');

export const isFilled: Writable<boolean> = writable(false);
