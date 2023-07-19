<script lang="ts">
    import Sidebar from "../components/sidebar/sidebar.svelte";
	import Header from "../components/header/header.svelte";
    import Footer from "src/components/footer/footer.svelte";
    import Main from "src/components/main/main.svelte";
</script>

<div class="flex h-screen rtt:flex-row-reverse">
	<Sidebar />
	<div class="bg-neutral-400 grow flex flex-col">
		<Header />
        <Main />
        <Footer />
	</div>
</div>
