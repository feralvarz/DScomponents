module.exports = {
  moduleDirectories: [
    'node_modules'
  ],
  transform: {
    "\\.tsx?$": "ts-jest",
    "\\.jsx?$": "babel-jest", // if you have jsx tests too
  },
  globals: {
    "ts-jest": {
      "tsconfig": '<rootDir>/tsconfig.json'
    }
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\](?!lodash-es/).+\\.js$"
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
}
