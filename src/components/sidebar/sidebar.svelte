<script lang="ts">
	import Menus from './menus.svelte';
	import { showSidebar } from 'src/stores/dashboardStore';
	import { user } from 'src/stores/userStore';
</script>

{#if $showSidebar}
	<aside class="max-w-xs overflow-auto bg-sides dark:bg-sides-dark basis-1/4 max-sm:absolute max-sm:w-3/4 {$showSidebar ? '' : 'max-sm:hidden'}">
		<div class="">
			<div class="mt-8 mb-8 text-center">
				<img src={$user.image} alt="" class="object-cover w-10 h-10 m-auto rounded-full lg:w-28 lg:h-28" />
				<h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{$user.name}</h5>
			</div>
			<Menus />
		</div>
	</aside>
{:else}
	<aside class="w-24 p-4 max-sm:hidden">
		<div class="px-2 py-4 text-center text-gray-900 bg-white rounded shadow-lg">
			<img
				src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
				alt="alt placeholder"
				class="w-8 h-8 mx-auto mb-5"
			/>
			<span class="block px-2 mb-5 cursor-pointer hover:text-gray-500">
				<i class="fas fa-stream"> </i>
			</span>
			<span class="block px-2 mb-5 cursor-pointer hover:text-gray-500">
				<i class="p-2 bg-gray-200 rounded-full fas fa-search"> </i>
			</span>
			<span class="relative block px-2 mb-5 cursor-pointer hover:text-gray-500">
				<i class="fas fa-bell"> </i>
				<span
					class="absolute top-0 right-0 px-2 -mt-2 text-xs font-medium text-white bg-red-500 border-2 border-white rounded-full shadow-lg"
					>3</span
				>
			</span>
			<span class="relative block px-2 mb-5 cursor-pointer hover:text-gray-500">
				<img
					src="https://lh3.googleusercontent.com/-U0lTbxzh0bE/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdJubMZweMDYD49ddsxq1wXai_9Cg/s48-c/photo.jpg"
					alt="alt placeholder"
					class="w-8 h-8 mx-auto mb-5 rounded-full"
				/>
				<span
					class="absolute top-0 right-0 px-2 -mt-2 text-xs font-medium text-white bg-red-500 border-2 border-white rounded-full shadow-lg"
					>3</span
				>
			</span>
		</div>
	</aside>
{/if}
