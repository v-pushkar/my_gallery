export default function TagCreator(atr) {
  Element.prototype.setAttributes = function(attrs) {
    for (let idx in attrs) {
      if (
        (idx == "styles" || idx == "style") &&
        typeof attrs[idx] == "object"
      ) {
        for (let prop in attrs[idx]) {
          this.style[prop] = attrs[idx][prop];
        }
      } else if (idx == "html") {
        this.innerHTML = attrs[idx];
      } else {
        this.setAttribute(idx, attrs[idx]);
      }
    }
  };

  let tag = document.createElement(atr.tagName);
  tag.setAttributes(atr.attributes[0]);

  return tag;
}
