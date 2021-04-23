let helpers = {};

helpers.capitalize = input => input.charAt(0).toUpperCase() + input.slice(1);

helpers.listEnums = (enumList) => {
  let listString = '';
  enumList.forEach((elem, i) => {
    if (i === 0) {
      listString = `${elem}`;
    }
    else if ((i + 1) === enumList.length) {
      listString = `${listString} or ${elem}`;
    }
    else {
      listString = `${listString}, ${elem}`;
    };
  });
  return listString;
};

module.exports = helpers;