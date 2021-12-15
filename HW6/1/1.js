function ConstructorCharacters(string) {
    for (let i of string) {
        let count = 0
        for (let j of string) {
            if (i === j) {
                count++
            }
        }
        this[i] = count
    }
}

function findCommon (s1, s2) {
    let commonCahrs = 0
    s1Chars = new ConstructorCharacters(s1)
    s2Chars = new ConstructorCharacters(s2)
    for (let i in s1Chars) {
        i in s2Chars ? commonCahrs += Math.min(s1Chars[i], s2Chars[i]) : commonCahrs = commonCahrs
    }
    return commonCahrs
}
console.log(findCommon("aabbc", "abcda"))
