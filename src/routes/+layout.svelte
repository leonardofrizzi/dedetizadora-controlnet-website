<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/d.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Control Net Dedetização | Rio de Janeiro</title>
</svelte:head>

{@render children()}
