export default function multiAttr(attrs) {
  // --- function for add multiattributes
  for (let idx in attrs) {
    if ((idx == "styles" || idx == "style") && typeof attrs[idx] == "object") {
      for (let prop in attrs[idx]) {
        this.style[prop] = attrs[idx][prop];
      }
    } else if (idx == "html") {
      this.innerHTML = attrs[idx];
    } else {
      this.setAttribute(idx, attrs[idx]);
    }
  }
}
