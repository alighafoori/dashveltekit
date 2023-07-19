<script lang="ts">
	export let text: string;
	export let href: string | null = null;
</script>

<li class="px-2">
	<a {href} class="pl-2 rtl:pr-2 flex">
        <slot/>		
		<span class="grow"> {text}</span>
	</a>
</li>
