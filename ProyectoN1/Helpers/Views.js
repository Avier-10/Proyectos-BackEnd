const path = require("path");

function view(htmlFileName, res) {
  return res.sendFile(path.join(__dirname, "..", "view", htmlFileName));
}

module.exports = view