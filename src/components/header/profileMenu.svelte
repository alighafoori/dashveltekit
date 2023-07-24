<script lang="ts">
	import { clickOutside } from 'src/tools/clickOutside';
	import { user } from 'src/stores/userStore';
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
			<div class="py-1" role="none" on:click={() => (show = false)} on:keydown={() => (show = false)}>
				<slot />
			</div>
		</div>
	{/if}
</div>
