const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

require('path')
module.exports = {
    //파일을 읽어들이기 시작하는 진입점설정
    entry: './bundler/webpack/main.js', 
    // 결과물(번들)을 반환하는 설정
    output:{ 
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.js',
        clean: true
    },
    //번들링이후 결과물의 처리방식등 다양한 플러그인들을 설정
    plugins:[ 
        new HtmlPlugin({
            template: './bundler/webpack/index.html'
        }),
        new CopyPlugin({
            patterns: [
                {from: './bundler/webpack/static'}
            ]
        })
    ],
    // devServer:{
    //     host: 'localhost'
    // }
}
