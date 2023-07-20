<script lang="ts">
	import { langs, setLanguage, locales,locale } from 'src/stores/i18n';
import Hamburger from './hamburger.svelte';
import ImageMenu from './imageMenu.svelte';
import Menu from '../sidebar/menu.svelte';
	function darkmode() {
		const html = document.getElementsByTagName('html')[0];
		if (html.classList.contains('dark')) html.classList.remove('dark');
		else html.classList.add('dark');
	}

	function changeLanguage(x: Event & { currentTarget: EventTarget & HTMLSelectElement }) {
		console.log(x.currentTarget.value);
		setLanguage(x.currentTarget.value);
	}
</script>

<header class="bg-sides dark:bg-sides-dark basis-12 flex">
	<div>
		<Hamburger />
		{$locales.header_header}
	</div>
	<div class="grow"></div>
	<div>
		<ImageMenu image={$locale.flag} alt="language">
{#each langs as lang}
<Menu text={lang.name} />
{/each}
		</ImageMenu>
		
		<button on:click={darkmode} class="justify-self-end">dark</button>
		<select
			on:change={(x) => {
				changeLanguage(x);
			}}
		>
			{#each langs as lang}
				<option value={lang.code}>{lang.name}</option>
			{/each}
		</select>
	</div>
</header>
