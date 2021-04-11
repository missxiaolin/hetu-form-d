
module.exports = {
    lintOnSave: false,
    configureWebpack: {
        externals: {
            'ace': 'ace'
        },
    }
}


// vue.config.js
// const path = require('path')
// const webpack = require('webpack')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// function resolve (dir) {
//   return path.join(__dirname, dir)
// }
// module.exports = {
//   // type :string  defalut :"/"
//   // 把开发服务器架设在根路径
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/'
//     : '/',

//   // type :string  defalut :"dist"
//   // 打包后的文件夹名字
//   outputDir: 'dist',

//   // type :string  defalut :""
//   // 静态资源目录
//   assetsDir: 'assets',

//   // type :string  defalut :"index.html"
//   // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
//   indexPath: 'index.html',

//   // type :boolean  defalut :"true"
//   // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存,如果是vue cli创建的index.html，则为true，无法使用 Vue CLI 生成的 index HTML，为false
//   filenameHashing: true,

//   // type :boolean| error defalut :"true"
//   lintOnSave: true,

//   // type :Array<string | RegExp> defalut :"[]" (RegExp) ==> 正则
//   // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
//   transpileDependencies: [],

//   // type :boolean  defalut :"true"
//   // SourceMap 一个存储源代码与编译代码对应位置映射的信息文件
//   // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
//   productionSourceMap: false,

//   // 配置别名，在项目中可缩减引用路径
//   // 还可以结合ProvidePlugin 使用
//   // 文档：https://github.com/neutrinojs/webpack-chain
//   // 中文介绍：https://segmentfault.com/a/1190000017547171?utm_source=tag-newest
//   chainWebpack: config => {
//     // 修复HMR，热更新
//     config.resolve.symlinks(true)
//     // 快捷访问目录
//     config.resolve.alias
//       .set('@comps', resolve('src/components'))
//       .set('@views', resolve('src/view'))
//     config.output
//       .filename('[name].[hash].js') // 打包文件name.hash.js
//       .end()
//   },
//   // type: object | function
//   // 调整 webpack 配置
//   // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
//   // 如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
//   // 细节查看 https://cli.vuejs.org/zh/guide/webpack.html#简单的配置方式
//   configureWebpack: {
//     externals: {
//       'ace': 'ace'
//     },
//     plugins: [
//       // Ignore all locale files of moment.js
//       new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
//       // 1. 服务器压缩
//       // 2. 前端压缩
//       // 服务端响应时压缩，肯定不如应用构建时压缩更合适。因为压缩也是要有时间开销的
//       new CompressionWebpackPlugin({
//         filename: '[path].gz[query]', // 目标资产文件名，默认：[path].gz[query]
//         algorithm: 'gzip', // 压缩算法：默认gzip
//         test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i, // 匹配规则
//         threshold: 10240, // 仅处理大于此大小的资产
//         minRatio: 0.8, // 压缩比率，默认0.8
//         deleteOriginalAssets: false // 是否删除原始资产，默认：false
//       }),
//       // 开发环境，代码分析
//       // if (process.env.NODE_ENV === 'production') {
//       // new BundleAnalyzerPlugin({
//       //   analyzerHost: '127.0.0.1',
//       //   analyzerPort: 9099
//       // })
//     // }
//     ],
//     optimization: {
//       removeAvailableModules: process.env.NODE_ENV !== 'development',
//       minimizer: [
//         // UglifyJS中文文档：https://segmentfault.com/a/1190000008995453
//         new UglifyJsPlugin({
//           uglifyOptions: {
//             warnings: false,
//             compress: {
//               dead_code: true, // 移除没被引用的代码
//               drop_console: true, // console
//               drop_debugger: false, // 移除 debugger
//               pure_funcs: ['console.log']// 移除console
//             }
//           }
//         })
//       ]
//     }
//   },

//   // type:function
//   // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
//   // 具体细节查看 https://cli.vuejs.org/zh/guide/webpack.html#链式操作(高级)
//   // 你需要熟悉 webpack-chain 的 API 并阅读一些源码以便了解如何最大程度利用好这个选项，但是比起直接修改 webpack 配置，它的表达能力更强，也更为安全。
//   // chainWebpack

//   css: {
//     // type:object defalut:{}
//     // 向 CSS 相关的 loader 传递选项。css预设器配置项
//     // loader 可以通过 loaderOptions 配置，包括：css-loader postcss-loader sass-loader less-loader stylus-loader
//     // 具体细节查看 https://cli.vuejs.org/zh/guide/css.html#向预处理器Loader传递选项
//     loaderOptions: {
//       css: {
//         // 这里的选项会传递给 css-loader
//       },
//       postcss: {
//         // 这里的选项会传递给 postcss-loader
//       },
//       less: {
//         modifyVars: {
//           /* less 变量覆盖，用于自定义 组件库（element-ui 或者and-design-vue）主题 */
//         },
//         javascriptEnabled: true
//       }
//     }
//   },
//   // type:boolean defalut:require('os').cpus().length > 1
//   // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建
//   // 构建时开启多进程处理babel编译
//   parallel: require('os').cpus().length > 1,

//   // type:object
//   // 开发配置
//   // 细节查看 https://webpack.js.org/configuration/dev-server/#devserver
//   devServer: {
//     // open: true,
//     hot: true,
//     port: 9999, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
//     proxy: {
//       // 权限
//       '/api/authcenter': {
//         target: 'http://www.xxx.com/api',
//         ws: false,
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api/authcenter': '/authcenter'
//         }
//       },
//       // xxx
//       '/api': {
//         target: 'https://xx.xxx.com',
//         ws: false,
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api': '/api'
//         }
//       }
//     }
//   }
// }
