function sortArray(array) {
    const odds = array.filter(n=>n%2).sort((a,b) => a - b)
    return array.map(n=>n%2 ? odds.shift():n)
}

module.exports = sortArray