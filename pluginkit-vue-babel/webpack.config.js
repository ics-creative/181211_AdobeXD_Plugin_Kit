const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/main.js',
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: 'main.js',
    // CommonJS として出力しなければならない
    libraryTarget: 'commonjs2',
  },

  // ソースマップはXD側で使えないので、無効にする
  devtool: 'none',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          // CSSをバンドルするための機能
          {
            loader: 'css-loader',
            options: {
              // オプションでCSS内のurl(画像)メソッドを取り込む
              url: true,
            },
          },

        ],
      },
      // .vue ファイルを取り込む
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // Babel のオプションを指定する
        options: {
          presets: [
            // プリセットを指定することで、ES2018 を ES5 に変換
            [
              '@babel/preset-env', {
              'targets': {
                'node': 'current',
              },
              // ES Modules は CommonJS に変換する
              modules: 'commonjs',
            },
            ],
          ],
        },
      },

      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        // 画像をBase64として取り込む
        loader: 'url-loader',
      },

    ],
  },
  // ランタイムで使用するXDパッケージ
  externals: {
    // webpack に実行時モジュールだと認識させる必要がある
    uxp: 'uxp',
    scenegraph: 'scenegraph',
    commands: 'commands',
  },
  plugins: [
    // Vueを読み込めるようにするため
    new VueLoaderPlugin(),
  ],
};
