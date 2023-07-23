<script lang="ts">
    import { showSidebar } from "src/stores/dashboardStore";
    function click(){
        showSidebar.update(x=>!x)
    }
</script>
<button id="toggleSidebarMobile" on:click={click} class="p-2 mr-2 text-gray-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100">
    
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10.8" viewBox="0 0 18 10.8">
        <path id="align-center-alt" d="M4.7,7.8H17.3a.9.9,0,1,0,0-1.8H4.7a.9.9,0,1,0,0,1.8Zm14.4,2.7H2.9a.9.9,0,1,0,0,1.8H19.1a.9.9,0,1,0,0-1.8ZM17.3,15H4.7a.9.9,0,0,0,0,1.8H17.3a.9.9,0,1,0,0-1.8Z" transform="translate(-2 -6)" fill="#525768"/>
      </svg>
 </button>