const conversion = function (data) {
  const dataMap = {};
  if (!data.attributes) return {"message": "no 'attributes' array from provider"}
  data.attributes.forEach((attr) => {
    dataMap[attr['key']] = attr['value'];
  });
  return dataMap;
};

module.exports = conversion;
