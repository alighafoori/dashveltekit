<script lang="ts">
	import { langs, setLanguage, locale } from 'src/stores/i18n';
	import Menu from '../sidebar/menu.svelte';

	import IconMenu from './iconMenu.svelte';
</script>

<IconMenu>
	<img slot="icon" class="w-6 h-6 mx-auto rounded-full" src={$locale.flag} alt="language" />
	{#each langs as lang}
		<Menu text={lang.name} href={null} on:click={() => setLanguage(lang.code)} dir={lang.dir}>
			<img class="w-6 h-6 rounded-full" src={lang.flag} alt={lang.name} />
		</Menu>
	{/each}
</IconMenu>
