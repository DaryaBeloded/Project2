var config = {
entry: './js/main.js',
output: {
filename: './bundle.js', 
libraryname: 'Kino'
},
module: {
loaders: [
{
test: /\.js$/,
exclude: /(node_modules|bower_components)/,
loader: 'babel-loader',
query: {
presets: ['es2015']
}
}
]
}
}

module.exports = config;
