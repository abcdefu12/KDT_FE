// ESM (ECMA Script Module) -> commonJS
// import autoprefixer from 'autoprefixer' -> require
// export { plugins: [autoprefixer]} -> module.exports

// CommonJS
// const autoprefixer = require('autoprefixer')
// module.exports = {
//     plugins: [
//         autoprefixer
//     ]
// }

// simplify
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}