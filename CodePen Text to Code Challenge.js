function numObj(s) {
    const arr = []
    for (i = 0; i < s.length; i++) {
        const obj = {}
        obj[s[i]] = String.fromCharCode(s[i])
        arr.push(obj)
    }
    return arr
}