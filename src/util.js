export function parse(value = false) {
	value = value ?? false
	if (typeof value === 'object') {
		return Object.entries(value)
	}
	return false
}

function word(total, singular, plural) {
	const choose = total > 1 ? plural : singular
	return `${total} ${choose}`
}

export function caption(k, v) {
	return `${k}: ${typeof v === 'object' && v ? word(Object.keys(v).length, 'property', 'properties') : v}`
}
