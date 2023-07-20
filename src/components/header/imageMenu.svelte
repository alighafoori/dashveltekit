<script lang="ts">
    import { clickOutside } from "src/tools/clickOutside";
    import { locale } from "src/stores/i18n";
    export let image:string
export let alt:string
let show=false
</script>
<div class="m-3 relative inline-block" use:clickOutside on:outsideclick={()=>show=false}>
    <button on:click={()=>show=!show} class="text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
        <span class="sr-only">Open {alt} menu</span>
        <img class="w-6 h-6 rounded-full" src={image} {alt}>
    </button>
    {#if show}
    <div class="absolute rtl:left-0 ltr:right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div class="py-1" role="none">
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <ul on:click={()=>show=false} on:keydown={()=>show=false}>
                <slot />
            </ul>
        </div>
      </div>
      {/if}
</div>