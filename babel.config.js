/**
 * https://babeljs.io/docs/en/config-files#root-babelconfigjson-file
 */

module.exports = {
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-react",
    "@babel/preset-env"
  ],
  plugins: [
    ["@babel/transform-runtime"]
  ]
};
