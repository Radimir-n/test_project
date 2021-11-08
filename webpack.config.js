var path = require('path');
  
module.exports = {

    target: 'web',
    mode: 'development',
    entry: "./src/index.js",
    output:{
      path: path.join(__dirname, 'src/build'),
      filename: 'bundle.js',
      publicPath: '/build/'
    },

    devServer: {
     contentBase: path.join(__dirname,'src'),
     port: 3001,
     host: 'localhost',
   },
    module:{
        rules:[ 
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options:{
                  presets: [
                    [
                      require.resolve('@babel/preset-react'),
                      {
                        runtime: 'automatic',
                      },
                    ],
                  ],  
                }
            },
            {
              test: /\.css$/i,
              use:  ["style-loader", "css-loader"],
            }
        ]
    }
      
}