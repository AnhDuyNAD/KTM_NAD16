const path = require('path');

module.exports = {
  entry: './src/index.js',  // điểm vào của ứng dụng
  output: {
    filename: 'bundle.js',  // tên file đầu ra
    path: path.resolve(__dirname, 'dist')  // thư mục đầu ra
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Các file JS
        exclude: /node_modules/,
        use: 'babel-loader'  // sử dụng Babel để biên dịch JS
      },
      {
        test: /\.css$/,  // Các file CSS
        use: ['style-loader', 'css-loader']  // sử dụng loader để xử lý CSS
      }
    ]
  },
  devServer: {
    contentBase: './dist',  // Thư mục để phục vụ
    port: 9000  // Cổng của server
  }
};
