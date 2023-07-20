import en from 'src/langs/en.json';
import fa from 'src/langs/fa.json';

import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const langs: Language[] = [
	{
		name: 'English (United States)',
		code: 'en-US',
		translations: en,
		dir: 'ltr',
		flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAA2dJREFUOE+NlH9MzGEcx9/f+16XKN0d31rpEldZK5vkx4pmGpqQOsWlLCLWP5gfWzWGDWtkwkyTRF27lq1Tu1quIkkxbYxD9JOozvW7Lqvue1/73indurOeP5/P53nt8zzv9/MmYG1Fl1HZiV6B4XxddO+aPVsAEIKKbJWScS48mNVUj0dhWktHiRmbEQo+OGQhwAlJjxOT8e4T6F0VbWwTPn2A3AE+TsmaDQBRBd2oFE92901nmAE1mt7Qk/mtxbJajS3blB4nhmVgi5Eh8ZkzfrYoI9L/s7JsEjoFVIs2hvJjw8rnnU5AUk4zCuq0/wVG+jvieuNjkJQAZOrhDa5OTjUs1ASMUPBj/Oy7LzeW2Np4uoM4fgCnZC0IWDrf4oQvP/bgQs1DCHw9MC/1CI7K2sdkVRoXlG7vNwElShWAzdLVApwpvwt+oB/mnjyAtr4JuA9rzd7wm8NCUBmZxsm4qUlIkbfiwXMNwDC1UOwIJhBdRoE2dAEgWbbU3wFp6iJwl7jBPjkRE83fzYB69VfQrR3GyU7I2/GwRgOGMY5lALhuRLaqKbx/RF88XakNIi4W1dfBdmswDIMjZkBS5AySEqJd+xuVHwbMTOJox9tFaF+/k4HkxFqzI/29EwOSY8ayY14auD5iq9YFTcuJRiz7BYCy3jX7CgNoWSDr+IWzP/bfzh5CU/EinyC5e61e+Wc3BvclG8vzM8+B673EOlGvL7AoykZfPsTOdqC1fRZFGVNWoztoHZ7+NMwUBZFFTiBsugCCw1YjVy/A/cPe0N2UgcN3gE3wKjOVeSt9MJKWZbRTSoAUBW/6TVAGDGjabdLYFQA2sbAb+73AyczHxPsv6E8+BhE5ZgbsFHlgsZAH3dX7GKhX4+KmBBS8HWaBL6HYvt4EDC0URoUs7so65MljJxtUvcKV8CQsX0ZZ/HoNrUO4FicGk5EDfdsPnPDcMV70acgVCknvVDh0dP0KIzLlpexk59dIkdswhKux1tMmJojC7XgxRq/loEdRHbLiS+mzf+Hw92nZxLkUn1os/zQ2q/iKWkuN30rwDnWhBNUz4mtKrm1KAXhMCQgiKD1OzLGYh3kt7O+tA8Z3stecLvXMxJ6sSspdshK9AiOEQ1E9a6Wb2Uah6l5lMe36KPGO+hVKdnZaMuQfPT2FaxExLcUAAAAASUVORK5CYII='
	},
	{
		name: 'فارسی (ایران)',
		code: 'fa-IR',
		translations: fa,
		dir: 'rtl',
		flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAA2dJREFUOE+NlH9MzGEcx9/f+16XKN0d31rpEldZK5vkx4pmGpqQOsWlLCLWP5gfWzWGDWtkwkyTRF27lq1Tu1quIkkxbYxD9JOozvW7Lqvue1/73indurOeP5/P53nt8zzv9/MmYG1Fl1HZiV6B4XxddO+aPVsAEIKKbJWScS48mNVUj0dhWktHiRmbEQo+OGQhwAlJjxOT8e4T6F0VbWwTPn2A3AE+TsmaDQBRBd2oFE92901nmAE1mt7Qk/mtxbJajS3blB4nhmVgi5Eh8ZkzfrYoI9L/s7JsEjoFVIs2hvJjw8rnnU5AUk4zCuq0/wVG+jvieuNjkJQAZOrhDa5OTjUs1ASMUPBj/Oy7LzeW2Np4uoM4fgCnZC0IWDrf4oQvP/bgQs1DCHw9MC/1CI7K2sdkVRoXlG7vNwElShWAzdLVApwpvwt+oB/mnjyAtr4JuA9rzd7wm8NCUBmZxsm4qUlIkbfiwXMNwDC1UOwIJhBdRoE2dAEgWbbU3wFp6iJwl7jBPjkRE83fzYB69VfQrR3GyU7I2/GwRgOGMY5lALhuRLaqKbx/RF88XakNIi4W1dfBdmswDIMjZkBS5AySEqJd+xuVHwbMTOJox9tFaF+/k4HkxFqzI/29EwOSY8ayY14auD5iq9YFTcuJRiz7BYCy3jX7CgNoWSDr+IWzP/bfzh5CU/EinyC5e61e+Wc3BvclG8vzM8+B673EOlGvL7AoykZfPsTOdqC1fRZFGVNWoztoHZ7+NMwUBZFFTiBsugCCw1YjVy/A/cPe0N2UgcN3gE3wKjOVeSt9MJKWZbRTSoAUBW/6TVAGDGjabdLYFQA2sbAb+73AyczHxPsv6E8+BhE5ZgbsFHlgsZAH3dX7GKhX4+KmBBS8HWaBL6HYvt4EDC0URoUs7so65MljJxtUvcKV8CQsX0ZZ/HoNrUO4FicGk5EDfdsPnPDcMV70acgVCknvVDh0dP0KIzLlpexk59dIkdswhKux1tMmJojC7XgxRq/loEdRHbLiS+mzf+Hw92nZxLkUn1os/zQ2q/iKWkuN30rwDnWhBNUz4mtKrm1KAXhMCQgiKD1OzLGYh3kt7O+tA8Z3stecLvXMxJ6sSspdshK9AiOEQ1E9a6Wb2Uah6l5lMe36KPGO+hVKdnZaMuQfPT2FaxExLcUAAAAASUVORK5CYII='
	}
];
export const locale = writable<Language>(getLang('en-US'));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const locales = writable<any>(en);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
locale.subscribe((x) => {
	locales.set(x.translations);
	if (browser) document.getElementsByTagName('html')[0].dir = x.dir;
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
	flag: string;
}
