import type { User } from 'src/types/user';
import { writable } from 'svelte/store';

export const user = writable<User>({
	name: 'Cynthia J. Watts',
	image: 'https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp'
});
