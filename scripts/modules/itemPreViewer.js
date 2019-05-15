import TagCreator from "/scripts/helpFunctions/TagCreator.js";

export default function preViewer(el, a) {
  //el - clickeded element (vieuver on button); a - gallery parent element

  let btn = TagCreator({
    tagName: "button",
    attributes: [
      {
        class: "icon-cross close-viewuer",
        "data-role": "close-viewuer",
        "data-name": "btn-cross"
      }
    ]
  });
  btn.addEventListener("click", closeViewer);
  el.setAttribute("data-click", "true");
  let parEl = el.closest(".item-Wrapp");
  let newParEl = parEl.cloneNode(true);
  newParEl.setAttribute("class", "viewer");
  newParEl.removeAttribute("style");
  newParEl.appendChild(btn);

  let viewerWrap = TagCreator({
    tagName: "div",
    attributes: [
      {
        class: "viewer-wrapp",
        id: "viewer-wrapp"
      }
    ]
  });
  viewerWrap.setAttribute("class", "viewer-wrapp");
  viewerWrap.appendChild(newParEl);
  document.body.appendChild(viewerWrap);

  function closeViewer() {
    let el = document.getElementById("viewer-wrapp");
    el.remove();
  }

  return;
}
