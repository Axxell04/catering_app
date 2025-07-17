<script lang="ts">
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';

	let { children } = $props();
</script>

<NavBar />
{#key page.url.pathname}
	<div in:fade class="p-3">
		{@render children()}
	</div>
	
{/key}

