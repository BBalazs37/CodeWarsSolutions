//https://www.codewars.com/kata/51e056fe544cf36c410000fb

function topThreeWords(text) {
  let words = text.toLowerCase().split(' ').map(a => a.replace(/[^A-z']/g, ''))
  .filter(a => a !== '').filter(a => a !== "\'")
  let counts = []
  words.forEach(a => {
    counts[a] === undefined ? counts[a] = 1 : counts[a]++
  })
  let sortableCounts = []
  for (var word in counts) {
    sortableCounts.push([word, counts[word]]);
}
  sortableCounts.sort((a,b) => b[1] - a[1])
  return sortableCounts.slice(0,3).map(a => a[0])
}