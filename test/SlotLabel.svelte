<script>
	import {JsonTree} from '../src/tree.js'
	import data from "./data.js"
</script>

<JsonTree
	key='payload'
	data={data}
	open={true}
	indent={1}
	tabSize={1}
	--fill="gray"
	--width="12px"
	--heigth="12px" />
