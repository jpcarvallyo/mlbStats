module.exports = {
  // ...other Jest configuration options
  globals: {
    MONGODB_URI: "mongodb://localhost:27017/local",
    NODE_ENV: "local",
  },
};
