console.log("script is run");
const paramGall = {
    hover_animation: "scale",
    structure: "oneRow", // "twoRow", "table"
    struct_cols: 7, // from 1 - 12
    box_order: "equally", // "mix" "equally"
    box_margin: "yes" // "no";
};
document.onload = createGallery(paramGall);

function createGallery(a) {

    console.log("createGallery is run");
    // a - array with psrameters for slider:
    // {animation_scale: "true", - animation for hover-efect 
    //  structure: "row"/"table", 
    // }
    const param = a;
    // ------ function - returne classes for gallery box 
    function classesGalleryBox(param) {

    }
    // ------ function - returne classes for item- box of gallery
    function checkParam(param) {
        console.log("checkParam is run");
        console.log("param.hover_animation : " + param.hover_animation);
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
        // ----------------------------------------------
        if (param.box_order) {
            switch (param.box_order) {
                case "equally":
                    classesForBox = classesForBox + 'box-order-equally ';
                    break;
                case "mix":
                    classesForBox = classesForBox + 'box-order-mix ';
                    break;
                default:
                    classesForBox = classesForBox + 'box-order-def ';
            }
        }
        // ----------------------------------------------
        if (param.box_margin) {
            switch (param.box_margin) {
                case "yes":
                    classesForBox = classesForBox + 'box-margin ';
                    break;
                case "no":
                    classesForBox = classesForBox + 'box-margin-no ';
                    break;
                default:

            }
        }
        // ----------------------------------------------
        if (param.struct_cols && param.struct_cols <= 12) {
            galleryBox.classList.add(`cols-${param.struct_cols}`);
        }

        // ------------- return result ------------------
        return classesForBox
    }

    console.log("createGallery is run");
    var galleryBox = document.querySelector('[data-name="gallery-box"]'); // get main box with items
    galleryBox.classList.add("gallery-box"); // add clas to main box
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
        itemWrapp.setAttribute('class', `item-Wrapp item-id-${i} img-position-${i} img-box ${param ? checkParam(param) : ''}`);

        itemWrapp.appendChild(gallitems[0])
        galleryBox.appendChild(itemWrapp)
    }
    console.log("param.animation_scal : " + param.hover_animation);
}