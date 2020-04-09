const generateFetchUrl = data => {
  return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
};

const getQRCode = async url => {
  return fetch(generateFetchUrl(url));
};

module.exports = { getQRCode };
