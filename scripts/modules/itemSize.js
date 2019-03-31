export default function itemBoxSize(el, pr) { // calculation of actual size for item box (adaptive)
    const itemForm = pr.item_form;
    const itemSize = pr.struct_cols;
    const itemMargin = pr.item_margin;

    const xlScrenn = 1920;
    const lScreen = 1024;
    const mScreen = 800;
    const sScreen = 400;
    const scrennStandarts = [xlScrenn, lScreen, mScreen, sScreen];
    const defPosition = [8, 6, 3, 2];


    let a = (itemSize == "default" ? defPosition : itemSize ? itemSize.split('-') : defPosition);

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

    el.setAttribute('style', `${widthCompensator(a[screenAdaptation(scrennStandarts)])};${itemForm == "circle" ? "border-radius:50%" : ""}`);

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
        // return `flex-basis: ${100 / c * 1}%; ${itemForm == "rectangle" ? "max-" : ""}height: calc(100vw / ${c} - ${s}px)`;
        // return `${itemWidth(itemMargin, c)} ${itemForm == "rectangle" ? "max-" : ""}height: calc(100vw / ${c} - ${itemMargin ? itemMargin*2 : s}px)`;
        return `${itemWidth(itemMargin, c)} height: calc(100vw / ${c} - ${itemMargin ? itemMargin*2 : s}px)`;
    }

    function itemWidth(a, b) {
        let mrg;
        mrg = (a ? `margin:${a}px;` : "");
        let width;
        width = `${pr.structure == "oneRow" ? 'width:' : 'flex-basis:' } calc( ${100 / b}${pr.structure == "oneRow" ? "vw" : "%"}${a ? ` - ${a*2}px`: ""} );`;
        let stl = mrg + " " + width;
        return stl;
    }
}

function itemWidth(a) {

}