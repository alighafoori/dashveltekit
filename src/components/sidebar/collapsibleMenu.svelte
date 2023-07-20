<script lang="ts">
	export let text: string;
	let show = false;
</script>

<li class="px-2">
	<a
		class="dark:hover:text-[#FFFFFF] flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
		on:click={() => {
			show = !show;
		}}
		href={null}
	>
		<slot name="icon" />
		<span class="pl-2 rtl:pr-2 grow"> {text}</span>
		{#if show}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-4 h-4 stroke-current stroke-2 text-gray-800 transform duration-500 ease-in-out rotate-90"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
			</svg>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-4 h-4 stroke-current stroke-2 text-gray-800 transform duration-500 ease-in-out"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
			</svg>
		{/if}
	</a>
	{#if show}
		<ul>
			<slot />
		</ul>
	{/if}
</li>
