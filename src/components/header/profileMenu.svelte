<script lang="ts">
	import { clickOutside } from 'src/tools/clickOutside';
	import { user } from 'src/stores/userStore';
	import Menu from '../sidebar/menu.svelte';
	let show = false;
</script>

<div use:clickOutside on:outsideclick={() => (show = false)}>
	<a class="grid h-10 grid-flow-col gap-1 cursor-pointer" href={null} on:click={() => (show = !show)}>
		<img src={$user.image} alt="" class="object-cover w-10 h-10 m-auto rounded-full" />
		<span class="pt-2">{$user.name}</span>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="w-4 h-4 mt-4 text-gray-800 duration-500 ease-in-out transform rotate-90 stroke-current stroke-2"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
		</svg>
	</a>
	{#if show}
		<div
			class="absolute z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg rtl:left-0 ltr:right-0 w-80 ring-1 ring-black ring-opacity-5 focus:outline-none"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabindex="-1"
		>
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<div class="flex flex-col py-1" role="none" on:click={() => (show = false)} on:keydown={() => (show = false)}>
				<ul>
					<Menu text="menu1" href="/chat">
						<svg class="mx-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
							><path
								d="M18,2H6A3,3,0,0,0,3,5V16a3,3,0,0,0,3,3H8.59l2.7,2.71A1,1,0,0,0,12,22a1,1,0,0,0,.65-.24L15.87,19H18a3,3,0,0,0,3-3V5A3,3,0,0,0,18,2Zm1,14a1,1,0,0,1-1,1H15.5a1,1,0,0,0-.65.24l-2.8,2.4L9.71,17.29A1,1,0,0,0,9,17H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4H18a1,1,0,0,1,1,1Z"
							/></svg
						>
					</Menu>
					<Menu text="menu2" href="/chat" badge="Pro">
						<svg class="mx-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
							><path
								d="M18,2H6A3,3,0,0,0,3,5V16a3,3,0,0,0,3,3H8.59l2.7,2.71A1,1,0,0,0,12,22a1,1,0,0,0,.65-.24L15.87,19H18a3,3,0,0,0,3-3V5A3,3,0,0,0,18,2Zm1,14a1,1,0,0,1-1,1H15.5a1,1,0,0,0-.65.24l-2.8,2.4L9.71,17.29A1,1,0,0,0,9,17H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4H18a1,1,0,0,1,1,1Z"
							/></svg
						>
					</Menu><Menu text="menu1" href="/chat">
						<svg class="mx-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
							><path
								d="M18,2H6A3,3,0,0,0,3,5V16a3,3,0,0,0,3,3H8.59l2.7,2.71A1,1,0,0,0,12,22a1,1,0,0,0,.65-.24L15.87,19H18a3,3,0,0,0,3-3V5A3,3,0,0,0,18,2Zm1,14a1,1,0,0,1-1,1H15.5a1,1,0,0,0-.65.24l-2.8,2.4L9.71,17.29A1,1,0,0,0,9,17H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4H18a1,1,0,0,1,1,1Z"
							/></svg
						>
					</Menu>
					<Menu text="menu2" href="/chat" badge="Pro">
						<svg class="mx-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
							><path
								d="M18,2H6A3,3,0,0,0,3,5V16a3,3,0,0,0,3,3H8.59l2.7,2.71A1,1,0,0,0,12,22a1,1,0,0,0,.65-.24L15.87,19H18a3,3,0,0,0,3-3V5A3,3,0,0,0,18,2Zm1,14a1,1,0,0,1-1,1H15.5a1,1,0,0,0-.65.24l-2.8,2.4L9.71,17.29A1,1,0,0,0,9,17H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4H18a1,1,0,0,1,1,1Z"
							/></svg
						>
					</Menu>
				</ul>
				<div class="flex items-center justify-between px-4 pt-4 border-t">
					<button class="flex items-center px-4 py-3 space-x-4 text-gray-600 rounded-md group">
						<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
							></path>
						</svg>
						<span class="group-hover:text-gray-700">Logout</span>
					</button>
				</div>
			</div>
		</div>
	{/if}
</div>
