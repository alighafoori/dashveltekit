import en from 'src/langs/en.json';
import fa from 'src/langs/fa.json';

import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const langs: Language[] = [
	{ name: 'English (United States)', code: 'en-US', translations: en, dir: 'ltr' },
	{ name: 'فارسی (ایران)', code: 'fa-IR', translations: fa, dir: 'rtl' }
];
export const locale = writable<Language>(getLang('en-US'));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const locales = writable<any>(en);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
locale.subscribe((x) => {
	locales.set(x.translations);
	if(browser)document.getElementsByTagName('html')[0].dir = x.dir;
});
function getLang(code: string): Language {
	let r = langs.find((x) => x.code === code);
	if (!r) r = langs[0];
	return r;
}
export function setLanguage(code: string) {
	const lang = getLang(code);
	locale.set(lang);
}
export interface Language {
	name: string;
	code: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	translations: any;
	dir: 'rtl' | 'ltr';
	flag?: string;
}
