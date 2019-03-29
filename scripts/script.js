import classesGalleryBox from '/scripts/modules/galleryClasses.js';
import animationClass from '/scripts/modules/animationClass.js';

const paramGall = {
    hover_animation: "scale", // - animation for hover-efect 
    structure: "oneRow", // "twoRow", "table"
    struct_cols: "12-10-8-2", // from 1 - 12, "default" - numbers of items in one row foe diferent screens (fron big screens to mobile). If "default" - 8, 6, 3, 2.
    item_order: "equally", // "mix" "equally"
    item_margin: "yes", // "no" - parameter for margins bettwen items
    item_form: "square" // "rectangle", "circle" - parameter for item form
};
document.onload = createGallery(paramGall);

function createGallery(a) {
    // a - array with psrameters for slider:
    // ------ function - returne classes for gallery box 

    // ------ function - returne classes for item- box of gallery


    console.log("createGallery is run");
    var galleryBox = document.querySelector('[data-name="gallery-box"]'); // get main box with items
    galleryBox.setAttribute('class', `gallery-box ${classesGalleryBox(a)}`); // add clas to main box
    let gallitems = galleryBox.getElementsByTagName('*'); // select ol child/items 
    //    gallitems[...].setAttribute('class', `fordel`);
    let gallItemsLeng = gallitems.length; // get number, how mach item elements

    // console.log("gallitems: " + gallitems.length);
    // console.log("gall items 4: " + gallitems[4]);

    // const animation1 = 'animation-scale';
    for (var i = 0; i < gallItemsLeng; i++) {

        // console.log(`lenght of divs ${i}`);
        // console.log('gallitems[i] :'+gallitems[i]);
        let itemWrapp = document.createElement("div");
        itemWrapp.setAttribute('class', `item-Wrapp item-id-${i} img-position-${i} img-box ${a ? animationClass(a) : ''}`); // add classes for new element - item of gallery
        itemBoxSize(itemWrapp, a.struct_cols);
        // itemWrapp.setAttribute('style', `${widthCompensator(a.struct_cols)}`)
        itemWrapp.appendChild(gallitems[0]);
        galleryBox.appendChild(itemWrapp);
    }
    animationCorrect(gallitems)

}

function animationCorrect(el) {
    // setTimeout(function () {

    // }, 300);
    let xx = document.getElementsByClassName("item-Wrapp");
    let i;
    for (i = 0; i < xx.length; ++i) {
        let ofsetElLeft = xx[i].offsetLeft;
        let windWidth = window.innerWidth;
        let elWidth = xx[i].offsetWidth;

        if (ofsetElLeft < (xx[i].offsetWidth / 3)) {
            xx[i].classList.add("transl-to-right")
        } else if (((elWidth + ofsetElLeft) <= innerWidth) && ((elWidth + ofsetElLeft) > (innerWidth - elWidth / 3))) {
            xx[i].classList.add(`transl-to-left`);
        }
    }
};


function itemBoxSize(el, pr) { // calculation of actual size for item box (adaptive)
    const xlScrenn = 1920;
    const lScreen = 1024;
    const mScreen = 800;
    const sScreen = 400;

    const scrennStandarts = [xlScrenn, lScreen, mScreen, sScreen];
    const defPosition = [8, 6, 3, 2];

    // console.log("scrennStandarts : " + scrennStandarts);

    let a = (pr == "default" ? defPosition : pr ? pr.split('-') : defPosition);
    // console.log(`lenght of a: ${a.length}`);

    // if (a.length == 3) {
    //     const screenWidth = window.innerWidth;
    //     console.log("screenWidth : " + screenWidth);
    //     for (i = 0; scrennStandarts[i] < screenWidth; ++i) {
    //         el.setAttribute('style', `${widthCompensator(a[i])}`)
    //     }
    // }
    console.log("screenWidth : " + window.innerWidth);

    function screenAdaptation(q) { // check screen width and select actual number of elements in row
        const screenWidth = window.innerWidth;
        let s;
        if (screenWidth > q[0]) {
            s = 0;
        } else if (screenWidth < q[0] && screenWidth > q[1]) {
            s = 1;
        } else if (screenWidth < q[1] && screenWidth > q[2]) {
            s = 2;
        } else if (screenWidth < q[2] && screenWidth > q[3]) {
            s = 3;
        }
        return s
    }

    el.setAttribute('style', `${widthCompensator(a[screenAdaptation(scrennStandarts)])}`);

    function widthCompensator(c) { // - create string with styles (width/height) for gallery item
        let s;
        if (c) {
            switch (c) {
                case 2:
                    s = 10;
                    break;
                case 3:
                    s = 7;
                    break;
                case 4:
                    s = 5;
                    break;
                case 6:
                    s = 4;
                    break;
                default:
                    s = 3;
            }
        } else {
            s = 0;
        }

        return `flex-basis: ${100 / c * 1.4}%; max-height: calc(100vw / ${c} - ${s}px)`;
    }
}