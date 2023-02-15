const conversion = function (data) {
  const dataMap = {};
  data.attributes.forEach((attr) => {
    dataMap[attr['key']] = attr['value'];
  });
  return dataMap;
};

module.exports = conversion;
