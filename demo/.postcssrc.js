/*
 * @Date: 2020-11-26 16:54:49
 * @LastEditors: sam
 * @LastEditTime: 2020-11-27 17:48:44
 * @FilePath: /chart-demo/demo/.postcssrc.js
 */
module.exports = {
  plugins: {
    autoprefixer: {},
    '@njleonzhang/postcss-px-to-rem': {
      unitToConvert: 'px',
      widthOfDesignLayout: 1920, // (Number) The width of the viewport.
      unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
      selectorBlackList: [
        // '.ignore',
        // '.hairlines',
        // '.home',
        // '.about',
        // '.hello',
        // '#nav',
        // '#app',
        // '.test-container',
      ], // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
      mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
    },
  },
}
