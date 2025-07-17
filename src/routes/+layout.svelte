<script lang="ts">
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	async function getClientes() {
		const res = await fetch("http://localhost:8000/clients");
		const clientes = await res.json()
		console.log(clientes)

	}

	onMount(() => {
		getClientes();
	})
</script>

<NavBar />
{#key page.url.pathname}
	<div in:fade class="p-3">
		{@render children()}
	</div>
	
{/key}

