<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { page } from '$app/stores';
	export let text: string;
	export let href: string | null = null;
	export let badge: string | null = null;
	export let notifications: number = 0;
	export let dir: 'ltr' | 'rtl' = 'ltr';
	let currentPage = '/';
	const selected = 'bg-gray-500 bg-opacity-30';
	const notSelected = 'hover:bg-gray-100 dark:hover:bg-gray-700';
	const dispatch = createEventDispatcher();
	function click() {
		dispatch('click');
	}
	page.subscribe((x) => {
		currentPage = x.url.pathname;
	});
</script>

<li class="px-2" {dir}>
	<a
		{href}
		target="_blank"
		on:click={click}
		class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white {currentPage == href
			? selected
			: notSelected} {href ? '' : 'cursor-pointer'}"
	>
		<slot />
		{#if dir === 'ltr'}
			<span class="flex-1 ml-3 whitespace-nowrap">{text}</span>
		{:else}
			<span class="flex-1 mr-3 text-right whitespace-nowrap">{text}</span>
		{/if}
		{#if badge}
			<span
				class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
				>{badge}</span
			>
		{/if}
		{#if notifications > 0}
			<span
				class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
				>{notifications}</span
			>
		{/if}
	</a>
	<!-- <a {href} class="pl-2 rtl:pr-2 flex hover:text-[#8231D3] dark:text-[#6D6F77] dark:hover:text-[#FFFFFF]">
        <slot/>		
		<span class="grow"> {text}</span>
	</a> -->
</li>
