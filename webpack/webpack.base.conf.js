const HtmlWebpackPlugin = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
module.exports = {
    entry: './src/main.js',  //指定打包的入口文件
    output: {
        path: __dirname + '/dist',  // 注意：__dirname表示webpack.config.js所在目录的绝对路径
        filename: 'build.js'		   //输出文件
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 12000,
                      name: 'img/[name].[hash:8].[ext]'
                    }
                  }
                ]
            },
            {
                test: /\.css$/,
                use: [ 
                    'style-loader',
                    'css-loader',
                    {
                        loader:require.resolve('px2rem-loader'),
                        options: {
                            importLoaders:1,
                                remUnit:75, //一般750手机设计图单位设置为75
                                min:2
                        },
                    },
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: '首页',
            filename: 'index.html', // dist目录下生成的文件名
            template: './src/index.html'
        })
    ],
}