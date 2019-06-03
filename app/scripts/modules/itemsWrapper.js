import animationClass from "/app/scripts/modules/animationClass.js";
import itemBoxSize from "/app/scripts/modules/itemSize.js";
import itemNavCrator from "/app/scripts/modules/itemNavigationCreator.js";
import multiAttr from "/app/scripts/helpFunctions/multiAttributes.js";

export default function itemsWrapper(a, f, w) {
  let gallitems = a;
  const itemsWrapTeg = f.item_wrappteg ? f.item_wrappteg : "DIV"; // teg name for item wrapper
  const trackTag = f.trackBox_teg ? f.trackBox_teg : "DIV"; // teg name for trackbox wrapper
  let gallItemsLeng = a.length; // get number, how mach item elements;
  let trackBox = document.createElement(trackTag);

  multiAttr(trackBox, {
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
