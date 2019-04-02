import classesGalleryBox from '/scripts/modules/galleryClasses.js';
import animationClass from '/scripts/modules/animationClass.js';
import itemBoxSize from '/scripts/modules/itemSize.js';
import itemBorder from '/scripts/modules/itemBorder.js';
import oneRow from '/scripts/modules/oneRow.js';

// options for view gallery 
const paramGall = {
    hover_animation: "scale", // - animation for hover-efect 
    structure: "otable", // "oneRow", "table"
    struct_cols: "14-6-4-2", // from 1 - 12, "default" - numbers of items in one row foe diferent screens (fron big screens to mobile). If "default" - 8, 6, 3, 2.
    item_order: "equally", // "mix" "equally"
    item_margin: 20, // "no" - parameter for margins bettwen items
    item_form: "square", // "rectangle", "circle", "square" - parameter for item form
    item_border: [{
        color: "white",
        windth: 5, // just number
        radius: 20, // just number
    }],
};

document.onload = createGallery(paramGall);

itemBorder(paramGall.item_border);

function createGallery(a) {
    // a - array with psrameters for slider:
    var galleryBox = document.querySelector('[data-name="gallery-box"]'); // get main box with items
    galleryBox.setAttribute('class', `gallery-box ${classesGalleryBox(a)}`); // add clas to main box
    let gallitems = galleryBox.getElementsByTagName('*'); // select ol child/items 
    //    gallitems[...].setAttribute('class', `fordel`);
    let gallItemsLeng = gallitems.length; // get number, how mach item elements;
    let trackBox = document.createElement("div");
    trackBox.setAttribute('class', `track-box`);
    trackBox.setAttribute('id', 'track-box');

    for (var i = 0; i < gallItemsLeng; i++) {
        let itemWrapp = document.createElement("div");
        itemWrapp.setAttribute('class', `item-Wrapp item-id-${i} img-position-${i} img-box ${a ? animationClass(a) : ''}`); // add classes for new element - item of gallery
        itemBoxSize(itemWrapp, a);
        itemWrapp.appendChild(gallitems[0]);
        trackBox.appendChild(itemWrapp);
    }
    galleryBox.appendChild(trackBox);

    animationCorrect(gallitems, a.structure);
};

function animationCorrect(el, b) {
    let xx = document.getElementsByClassName("item-Wrapp");
    let rowWidth = 0;
    let i;
    for (i = 0; i < xx.length; ++i) {
        let ofsetElLeft = xx[i].offsetLeft;
        let windWidth = window.innerWidth;
        let elWidth = xx[i].offsetWidth;
        rowWidth = rowWidth + elWidth;
        if (ofsetElLeft < (xx[i].offsetWidth / 3)) {
            xx[i].classList.add("transl-to-right")
        } else if (((elWidth + ofsetElLeft) <= innerWidth) && ((elWidth + ofsetElLeft) > (innerWidth - elWidth / 3))) {
            xx[i].classList.add(`transl-to-left`);
        }
    }
    if (b.structure == "oneRow") {
        oneRow(rowWidth);
    }
};