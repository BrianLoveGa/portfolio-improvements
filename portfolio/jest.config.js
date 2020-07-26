module.exports = {
  testRegex: ".*\\.spec\\.js$",
  moduleFileExtensions: ["js", "jsx", "json"],
  moduleDirectories: ["node_modules", "src", "assets"],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/filmMock.js",
  },
  verbose: true,
  bail: true,
};
