export function parse(value = false) {
	value = value ?? false
	if (typeof value === 'object') {
		return Object.entries(value)
	}
	return false
}

export function word(total, singular, plural) {
	const choose = total > 1 ? plural : singular
	return `${total} ${choose}`
}
