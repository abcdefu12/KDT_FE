const str = `
010-1234-5678
theabcdefg@gmail.com
https://www.omdbapi.com/?apikey=7035c60&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`

// const regexp = new RegExp('the', 'gi')
//const regexp = /the/gi
//console.log(str.match(regexp))

// const regexp = /fox/gi
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)


// console.log(str.match(/the/gi))
// console.log(str.match(/\.$/gim))

// console.log(str.match(/\.$/gim))
// console.log(str.match(/d$/gm))
// console.log(str.match(/^t/gim))

// console.log(str.match(/\./gim))
// console.log(str.match(/./g))
// console.log(str.match(/h..p/g))
// console.log(str.match(/fox|dog/g))
// console.log(str.match(/https?/gim))

// console.log(str.match(/d{2}/g))
// console.log(str.match(/d{2,}/g))
// console.log(str.match(/\b\w{2,3}\b/g))

// console.log(str.match(/[the]/g))
// console.log(str.match(/[0-9]{1,}/g))

// console.log(str.match(/\w/g))
// console.log(str.match(/\bf\w{1,}\b/g))
// console.log(str.match(/\d{1,}/g))
// console.log(str.match(/\s/g))

// const h = ` the hello world !
// `
// console.log(h.replace(/\s/g, ''))

console.log(str.match(/.{1,}(?=\@)/g))
console.log(str.match(/(?<=\@).{1,}/g))