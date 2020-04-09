const { generateFetchUrl, getQRCode } = require("../helpers");
const fs = require("fs");

const create = async (request, response) => {
  const { url } = request.body;
  const { accept } = request.headers;
  if (accept === "text/html") {
    response.set("Content-Type", accept);
    return response.send(`<img src="${generateFetchUrl(url)}"/>`);
  } else {
    await getQRCode(url);
    fs.readFile("./tmpCodeImage.png", (err, data) => {
      response.set("Content-Type", "image/png");
      return response.send(data);
    });
  }
  // URL validation (regex) (http|https)
  // invalid input: 422 (unprocessable entity)

  // adding a check here to see if we have the image first
  // before making the request
};

module.exports = { create };
