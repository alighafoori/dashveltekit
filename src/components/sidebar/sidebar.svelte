<script lang="ts">
    import Menus from "./menus.svelte";
    import {showSidebar} from 'src/stores/dashboardStore'
</script>
<div class="bg-sides dark:bg-sides-dark basis-1/4 max-w-xs max-sm:hidden {$showSidebar?'':'hidden'}">
	<Menus />
</div>
