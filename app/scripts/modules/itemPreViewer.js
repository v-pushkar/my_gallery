import TagCreator from "/app/scripts/helpFunctions/tagCreator.js";

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
  const btnNext = TagCreator({
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
  btnNext.addEventListener("click", nextSlide);
  btnPrevious.addEventListener("click", previousSlide);

  el.setAttribute("data-click", "true");
  let parEl = el.closest(".item-Wrapp");
  let newParEl = parEl.cloneNode(true);
  newParEl.setAttribute("class", "viewer");
  newParEl.removeAttribute("style");
  newParEl.appendChilds({ btnClose, btnNext, btnPrevious });

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

  function nextSlide() {
    let slids = document.getElementsByClassName("item-Wrapp");
    let itVieuver = this.closest(".viewer");
    let itId = parseInt(itVieuver.getAttribute("item-id"));
    itVieuver.setAttribute("item-id", itId == slids.length - 1 ? 0 : itId + 1);
    itVieuver
      .getElementsByClassName("img-item")[0]
      .setAttribute("src", nextSc(slids, itId));

    function nextSc(a, b) {
      let len = a.length - 1;
      let newId = b !== len ? b + 1 : 0;
      console.log(`a.length : ${a.length}`);
      console.log(`newId : ${newId}`);
      let newEl = a[newId].getElementsByClassName("img-item");
      console.log(`newEl : ${newEl}`);
      let newSrc = newEl[0].getAttribute("src");
      return newSrc;
    }
  }

  function previousSlide() {
    let slids = document.getElementsByClassName("item-Wrapp");
    let itVieuver = this.closest(".viewer");
    let itId = parseInt(itVieuver.getAttribute("item-id"));
    console.log(`itId : ${itId}`);
    itVieuver.setAttribute("item-id", itId == 0 ? slids.length - 1 : itId - 1);
    itVieuver
      .getElementsByClassName("img-item")[0]
      .setAttribute("src", previousSc(slids, itId));

    function previousSc(a, b) {
      let len = a.length - 1;
      let newId = b == 0 ? len : b - 1;
      // console.log(`a.length : ${a.length}`);
      console.log(`newId : ${newId}`);
      let newEl = a[newId].getElementsByClassName("img-item");
      // console.log(`newEl : ${newEl}`);
      let newSrc = newEl[0].getAttribute("src");
      return newSrc;
    }
  }

  return;
}
