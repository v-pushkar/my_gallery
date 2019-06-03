import classesGalleryBox from "/app/scripts/modules/galleryClasses.js";
import itemBorder from "/app/scripts/modules/itemBorder.js";
import itemsWrapper from "/app/scripts/modules/itemsWrapper.js";
import preViewer from "/app/scripts/modules/itemPreviewer.js";
import animationCorrect from "/app/scripts/modules/animationCorrect.js";

export default function galleryCreator(el, o) {
  // -----
  Element.prototype.createGallery = function(a) {
    // a - array with psrameters for slider:
    var galleryBox = document.querySelector('[data-name="gallery-box"]'); // get main box with items
    let galleryWidth = galleryBox.offsetWidth;
    console.log("gallert width :" + galleryWidth);
    galleryBox.setAttribute("class", `gallery-box ${classesGalleryBox(a)}`); // add class to main box
    // let gallitems = galleryBox.getElementsByTagName('*'); // select ol child/items
    let gallitems = galleryBox.children; // select oll child/items
    galleryBox.appendChild(itemsWrapper(gallitems, o, galleryWidth));
    animationCorrect(gallitems, a.structure, galleryWidth);
    itemBorder(g_options.item_border);
    // ---------------- preVieuer start
    let preVieuerBtn = document.getElementsByClassName("preVieuBtn");

    let openViewer = function() {
      preViewer(this, galleryBox);
    };

    for (var i = 0; i < preVieuerBtn.length; i++) {
      preVieuerBtn[i].addEventListener("click", openViewer, false);
    }

    // ---------------- preVieuer
  };
  el.createGallery(o);
}
