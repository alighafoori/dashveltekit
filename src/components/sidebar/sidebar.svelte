<script lang="ts">
    import Menus from "./menus.svelte";
    import {showSidebar} from 'src/stores/dashboardStore'
    import {user} from 'src/stores/userStore'
</script>
<aside class="bg-sides dark:bg-sides-dark basis-1/4 max-w-xs max-sm:hidden overflow-auto {$showSidebar?'':'hidden'}">
    <div class="mt-8 mb-8 text-center">
        <img src={$user.image} alt="" class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28">
        <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{$user.name}</h5>
    </div>
	<Menus />
</aside>
