const ElementCreator = (type) => {
  return document.createElement(type);
};

export const NewTextNode = (el) => {
  return document.createTextNode(el);
};

export default ElementCreator;
