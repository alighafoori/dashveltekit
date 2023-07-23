<script lang="ts">
    import Sidebar from "../components/sidebar/sidebar.svelte";
	import Header from "../components/header/header.svelte";
    import Footer from "src/components/footer/footer.svelte";
    import Main from "src/components/main/main.svelte";
</script>
<!--  -->
<div class="flex flex-col h-screen">
    <Header />
    <div class="flex rtt:flex-row-reverse grow">
        <Sidebar />
        <div class="flex flex-col bg-neutral-400 grow">
            <Main />
            <Footer />
        </div>
    </div>
</div>
