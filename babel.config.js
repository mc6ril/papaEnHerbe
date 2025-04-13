module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@core": "./src/core",
          "@data": "./src/data",
          "@domain": "./src/domain",
          "@infrastructure": "./src/infrastructure",
          "@presentation": "./src/presentation",
          "@design-system": "./src/design-system",
        },
      },
    ],
  ],
};
