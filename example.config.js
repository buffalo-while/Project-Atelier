require('dotenv').config();

// Instructions
// 1) Rename "example.config.js" to "config.js"
// 2) Replace the gitToken with your own GitHub Token in string form in the .env file.

module.exports = {
  GITHUB_APIKEY: process.env.GITHUB_APIKEY,
};
