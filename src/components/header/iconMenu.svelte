<script lang="ts">
	import { clickOutside } from 'src/tools/clickOutside';
	let show = false;
</script>

<div use:clickOutside on:outsideclick={() => (show = false)}>
	<button on:click={() => (show = !show)} class="w-10 h-10 bg-gray-100 border rounded-xl focus:bg-gray-100 active:bg-gray-200">
		<slot name="icon" />
	</button>
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
