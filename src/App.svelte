<svelte:options tag="my-app" />

<script lang="ts">
	export let name: string;
	let url:string;
	import {AppHelper} from './AppHelper';

</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href={AppHelper.SvelteUrl}>Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<p>Learn <a href={AppHelper.TypescriptUrl}>Typescript</a>.</p>
</main>

<style type="text/scss">
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	
		h1 {
			color: green;
			text-transform: uppercase;
			font-size: 4em;
			font-weight: 100;
		}
	}

	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>