import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const showSidebar = writable<boolean>(true);
export const dark = writable<boolean>(false);

dark.subscribe((x) => {
	if (browser) {
		const html = document.getElementsByTagName('html')[0];
		if (!x && html.classList.contains('dark')) html.classList.remove('dark');
		else if (x && !html.classList.contains('dark')) html.classList.add('dark');
	}
});
