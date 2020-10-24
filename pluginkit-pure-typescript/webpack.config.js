
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/index.ts',
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
  devtool: false,

  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    // webpackで利用するときの設定
    alias: {
      // エイリアスを失敗したら地獄を見る
    },
    extensions: [
      '.ts', '.js', '.json',
    ],
  },

  // ランタイムで使用するXDパッケージ
  externals: {
    // webpack に実行時モジュールだと認識させる必要がある
    uxp: 'uxp',
    scenegraph: 'scenegraph',
    commands: 'commands',
  }
};
