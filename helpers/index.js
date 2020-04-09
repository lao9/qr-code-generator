const fetch = require("node-fetch");
const fs = require("fs");

const generateFetchUrl = data => {
  return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
};

const getQRCode = async url => {
  return fetch(generateFetchUrl(url)).then(response => {
    const dest = fs.createWriteStream("./tmpCodeImage.png");
    response.body.pipe(dest);
  });
};

module.exports = { generateFetchUrl, getQRCode };
