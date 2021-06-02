<script>
	import Icon from './Icon.svelte'
	import {parse, caption} from "../util.js"

	export let key
	export let value
  export let indent
	export let open
	export let cursor
	export let svg
	export let svgClose = `
	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 960 560" enable-background="new 0 0 960 560">
	<path d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937   c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937   c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z "/>
</svg>
	`

</script>

<div class="tree" style="text-indent: {indent}em; --cursor: {cursor}" on:click>
	{#if open && Object.keys(parse(value)).length > 0}
		<Icon svg={svgClose} />
	{:else if !open && Object.keys(parse(value)).length > 0}
		<Icon svg={svg}/>
	{/if}
	{caption(key, value)}
</div>

<style>
	.tree {
    cursor: var(--cursor, pointer);
    user-select: none;
		margin-bottom: 1em;
	}
</style>
