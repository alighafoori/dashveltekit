<script lang="ts">
	import { langs, setLanguage, locales, locale } from 'src/stores/i18n';
	import Hamburger from './hamburger.svelte';
	import ImageMenu from './imageMenu.svelte';
	import Menu from '../sidebar/menu.svelte';
	import IconMenu from './iconMenu.svelte';
	import Notification from './notification.svelte';
	import ChangeThemeButton from './changeThemeButton.svelte';
	import ProfileMenu from './profileMenu.svelte';
</script>

<header class="flex bg-sides dark:bg-sides-dark basis-12">
	<div>
		<Hamburger />
	</div>
	<div class="grow"></div>
	<div class="flex">
		<div class="relative inline-block pt-2 m-2">
			<ImageMenu image={$locale.flag} alt="language">
				{#each langs as lang}
					<Menu text={lang.name} href={null} on:click={() => setLanguage(lang.code)} dir={lang.dir}>
						<img class="w-6 h-6 rounded-full" src={lang.flag} alt={lang.name} />
					</Menu>
				{/each}
			</ImageMenu>
		</div>
		<div class="relative inline-block m-2">
			<IconMenu>
				<svg
					slot="icon"
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 h-5 m-auto text-gray-600"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
					></path>
				</svg>
				<Notification />
				<Notification />
				<Notification />
				<Notification />
			</IconMenu>
		</div>
		<div class="relative inline-block m-2">
			<ChangeThemeButton />
		</div>
		<div class="relative inline-block h-12 m-2">
			<ProfileMenu />
		</div>
	</div>
</header>
