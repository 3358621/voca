import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  //sourceMap: true,
  plugins: [babel({
    presets: ['es2015-rollup'],
    babelrc: false
  })]
};