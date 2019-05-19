import animationClass from "/scripts/modules/animationClass.js";
import itemBoxSize from "/scripts/modules/itemSize.js";
import itemNavCrator from "/scripts/modules/itemNavigationCreator.js";

export default function itemsWrapper(a, f, w) {
  // --- function for add multiattributes
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
  // -----------------------------------------------
  let gallitems = a;
  const itemsWrapTeg = f.item_wrappteg ? f.item_wrappteg : "DIV"; // teg name for item wrapper
  const trackTag = f.trackBox_teg ? f.trackBox_teg : "DIV"; // teg name for trackbox wrapper
  let gallItemsLeng = a.length; // get number, how mach item elements;
  let trackBox = document.createElement(trackTag);
  trackBox.setAttributes({
    class: `track-box`,
    id: "track-box",
    "data-name": "track-box"
  });
  let itemSizeStyle = itemBoxSize(f, w);
  console.log(`itemSizeStyle ${itemSizeStyle}`);
  for (let i = 0; i < gallItemsLeng; i++) {
    let itemWrapp = document.createElement(itemsWrapTeg);
    itemWrapp.setAttribute(
      "class",
      `item-Wrapp item-id-${i} img-position-${i} img-box ${
        f.hover_animation ? animationClass(f.hover_animation) : ""
      }`
    ); // add classes for new element - item of gallery
    itemWrapp.setAttribute("style", itemSizeStyle);
    itemWrapp.setAttribute("item-id", i);
    itemWrapp.appendChild(gallitems[0]);
    itemWrapp.appendChild(itemNavCrator());
    trackBox.appendChild(itemWrapp);
  }
  return trackBox;
}
