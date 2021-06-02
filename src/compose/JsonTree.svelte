<script>
	import {parse} from "../util.js"

	import Entry from "../base/Entry.svelte"

	export let key = 'root'
	export let data
  export let indent = 1
	export let tabSize = 1
	export let open = false
	export let svg = undefined
	export let svgClose = undefined

	let entries = parse(data)
	let cursor

	$: (entries) ? cursor = 'pointer' : cursor = 'default'

	function toggle() {
		open = !open
	}
</script>

<Entry {key} value={data} {open} {indent} {cursor} {svg} {svgClose} on:click={toggle} />

{#if entries}
	{#each entries as [k, v]}
		{#if open}
			<svelte:self key={k} data={v} indent={indent + tabSize} {tabSize} {svg} {svgClose} />
		{/if}
	{/each}
{/if}
