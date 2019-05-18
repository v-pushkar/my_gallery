import TagCreator from "/scripts/helpFunctions/TagCreator.js";

export default function preViewer(el, a) {
  //el - clickeded element (vieuver on button); a - gallery parent element

  Element.prototype.appendChilds = function(elements) {
    // --- append multielements
    for (let idx in elements) {
      this.appendChild(elements[idx]);
    }
  };

  const btnClose = TagCreator({
    tagName: "button",
    attributes: [
      {
        class: "icon-cross close-viewuer btnInViewuer",
        "data-role": "close-viewuer",
        "data-name": "btn-cross"
      }
    ]
  });
  const btnRight = TagCreator({
    tagName: "button",
    attributes: [
      {
        class: "icon-arrow-right btnInViewuer next-item",
        "data-role": "next-viewuer",
        "data-name": "arrow-right"
      }
    ]
  });
  const btnPrevious = TagCreator({
    tagName: "button",
    attributes: [
      {
        class: "icon-arrow-left btnInViewuer previous-item",
        "data-role": "previous-viewuer",
        "data-name": "arrow-left"
      }
    ]
  });
  btnClose.addEventListener("click", closeViewer);
  el.setAttribute("data-click", "true");
  let parEl = el.closest(".item-Wrapp");
  let newParEl = parEl.cloneNode(true);
  newParEl.setAttribute("class", "viewer");
  newParEl.removeAttribute("style");
  newParEl.appendChilds({ btnClose, btnRight, btnPrevious });

  let viewerWrap = TagCreator({
    tagName: "div",
    attributes: [
      {
        class: "viewer-wrapp",
        id: "viewer-wrapp",
        "data-opacity": "opacityOn"
      }
    ]
  });
  viewerWrap.setAttribute("class", "viewer-wrapp");
  viewerWrap.appendChild(newParEl);
  document.body.appendChild(viewerWrap);

  // ------------
  function closeViewer() {
    //--- function for close viewer
    let el = document.getElementById("viewer-wrapp");
    el.setAttribute("data-opacity", "opacityOff");
    setTimeout(function() {
      el.remove();
    }, 600);
  }
  //------------

  return;
}
