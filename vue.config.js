publicPath: process.env.MODE_ENV === 'production'
module.exports = {
    publicPath: process.env.MODE_ENV === 'production'?'/Helloworld/':'/'
}