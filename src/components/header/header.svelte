<script lang="ts">
	import { langs, setLanguage, locales } from 'src/stores/i18n';
import Hamburger from './hamburger.svelte';
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

<div class="bg-sides dark:bg-sides-dark basis-12 flex">
	<div>
		<Hamburger />
		{$locales.header_header}
	</div>
	<div class="grow"></div>
	<div>
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
</div>
