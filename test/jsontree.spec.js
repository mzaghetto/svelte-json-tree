/* globals describe, afterEach, test, expect */

import {cleanup, render} from '@testing-library/svelte'
import {JsonTree} from '../src/tree.js'
import data from './data.js'

describe('JsonTree', () => {
	afterEach(cleanup)

	test('should match snapshot default', () => {
		const {container} = render(JsonTree)
		expect(container).toMatchSnapshot()
	})

	test('should match snapshot props', () => {
		const {container} = render(JsonTree, {
			props: {
				open: true,
				'--fill': 'gray',
				data
			}
		})
		expect(container).toMatchSnapshot()
	})
})
