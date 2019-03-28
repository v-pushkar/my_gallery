console.log("script is run");
const paramGall = {
    hover_animation: "scale", // - animation for hover-efect 
    structure: "oneRow", // "twoRow", "table"
    struct_cols: "10-6-4-2", // from 1 - 12, "auto"
    box_order: "equally", // "mix" "equally"
    box_margin: "yes" // "no";
};
document.onload = createGallery(paramGall);

function createGallery(a) {

    // a - array with psrameters for slider:

    // ------ function - returne classes for gallery box 
    function classesGalleryBox(param) {
        var classesGallBox = "";
        // ----------------------------------------------
        if (param.box_order) {
            switch (param.box_order) {
                case "equally":
                    classesGallBox = classesGallBox + 'box-order-equally ';
                    break;
                case "mix":
                    classesGallBox = classesGallBox + 'box-order-mix ';
                    break;
                default:
                    classesGallBox = classesGallBox + 'box-order-def ';
            }

        }
        // ----------------------------------------------
        if (param.box_margin) {
            switch (param.box_margin) {
                case "yes":
                    classesGallBox = classesGallBox + 'box-margin ';
                    break;
                case "no":
                    classesGallBox = classesGallBox + 'box-margin-no ';
                    break;
                default:

            }
        }
        // ----------------------------------------------
        // if (param.struct_cols && param.struct_cols <= 12) {
        //     classesGallBox = classesGallBox + `cols-${param.struct_cols}`;
        // }
        return classesGallBox;

    }
    // ------ function - returne classes for item- box of gallery
    function checkParam(param) {
        // console.log("checkParam is run");
        // console.log("param.hover_animation : " + param.hover_animation);
        var classesForBox = "";
        // ----------------------------------------------
        if (param.hover_animation) {
            console.log("animation - true");
            switch (param.hover_animation) {
                case "scale":
                    classesForBox = classesForBox + 'animation-scale ';
                    break;
                default:
                    classesForBox = classesForBox + 'animation-def ';
            }
        }

        // ------------- return result ------------------
        return classesForBox
    }

    console.log("createGallery is run");
    var galleryBox = document.querySelector('[data-name="gallery-box"]'); // get main box with items
    galleryBox.setAttribute('class', `gallery-box ${classesGalleryBox(a)}`); // add clas to main box
    let gallitems = galleryBox.getElementsByTagName('*'); // select ol child/items 
    //    gallitems[...].setAttribute('class', `fordel`);
    let gallItemsLeng = gallitems.length; // get number, how mach item elements

    console.log("gallitems: " + gallitems.length);
    console.log("gall items 4: " + gallitems[4]);

    // const animation1 = 'animation-scale';
    for (var i = 0; i < gallItemsLeng; i++) {

        // console.log(`lenght of divs ${i}`);
        // console.log('gallitems[i] :'+gallitems[i]);
        let itemWrapp = document.createElement("div");
        itemWrapp.setAttribute('class', `item-Wrapp item-id-${i} img-position-${i} img-box ${a ? checkParam(a) : ''}`); // add classes for new element - item of gallery
        itemBoxSize(itemWrapp, a.struct_cols);
        // itemWrapp.setAttribute('style', `${widthCompensator(a.struct_cols)}`)
        itemWrapp.appendChild(gallitems[0]);
        galleryBox.appendChild(itemWrapp);
    }
    animationCorrect(gallitems)

}

function animationCorrect(el) {
    let xx = document.getElementsByClassName("item-Wrapp");
    // xx.forEach(function (item, i, xx) {
    //     if (item.scrollLeft < item.offsetWidth / 3) {
    //         item.classList.add("mystyle")
    //     }
    // });
    for (i = 0; i < xx.length; ++i) {
        // console.log("xx[i].innerWidth : " + xx[i].offsetWidth)
        let ofsetElLeft = xx[i].offsetLeft;
        let windWidth = window.innerWidth;
        let elWidth = xx[i].offsetWidth;

        if (ofsetElLeft < (xx[i].offsetWidth / 3)) {
            xx[i].classList.add("transl-to-right")
        } else if (((elWidth + ofsetElLeft) <= innerWidth) && ((elWidth + ofsetElLeft) > (innerWidth - elWidth / 3))) {
            xx[i].classList.add(`transl-to-left`);
            // console.log("-------------------")
            // console.log("ofsetElLeft : " + ofsetElLeft);
            // console.log("window.innerWidth : " + window.innerWidth);
            // console.log("xx[i].offsetWidth : " + i + " ; " + xx[i].offsetWidth);
        }
    }

};


function itemBoxSize(el, pr) { // calculation of actual size for item box (adaptive)
    const xlScrenn = 1920;
    const lScreen = 1024;
    const mScreen = 800;
    const sScreen = 400;

    const scrennStandarts = [xlScrenn, lScreen, mScreen, sScreen];

    // console.log("scrennStandarts : " + scrennStandarts);

    let a = pr == "auto" ? [8, 6, 3, 2] : pr.split('-');
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
        // return `width: calc(100vw / ${c} - ${s}px); height: calc(100vw / ${c} - ${s}px)`;
        return `flex-basis: ${100 / c}%; max-height: calc(100vw / ${c} - ${s}px)`;
    }
}