function preventSyntheticEvent<T>(e: React.FormEvent<T>) {
    e.preventDefault()
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    return false
}

export {
    preventSyntheticEvent
}