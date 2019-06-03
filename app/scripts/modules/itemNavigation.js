export default function itemNavi() {
  let el;
  el.onclick = function() {
    let elnew = el.cloneNode(true);
    let preview = document.createElement("div");
    preview.setAttribute("class", "item-view");
    preview.appendChild(elnew);
  };
}
