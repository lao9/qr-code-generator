var { getQRCode } = require("../helpers");

const create = async (request, response) => {
  const { url } = request.body;
  const qrCode = await getQRCode(url);
  return response.json({ qrCode });
};

module.exports = { create };
