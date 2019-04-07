export default function itemBoxSize(pr) { // calculation of actual size for item box (adaptive)
    const itemForm = pr.item_form;
    const itemSize = pr.struct_cols;
    const itemMargin = pr.item_margin;
    // screen sizes for big mindl and smsll screens
    const xlScrenn = 1920;
    const lScreen = 1024;
    const mScreen = 800;
    const sScreen = 400;
    const scrennStandarts = [xlScrenn, lScreen, mScreen, sScreen];
    const defSize = [8, 6, 3, 2]; // number of items per line for default


    let a = (itemSize == "default" ? defSize : itemSize ? itemSize.split('-') : defSize); // determine the number of items per line
    let itemWidth;

    function screenAdaptation(q) { // check screen width and select actual number of items per line from arrey 
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

    return `${widthCompensator(a[screenAdaptation(scrennStandarts)])};${itemForm == "circle" ? "border-radius:50%" : ""}`;

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
        return `${itemsMargin(itemMargin)} ${itemsWidth(itemMargin, c)} ${itemsHeigth(itemMargin, itemWidth, s)}`;
    }

    function itemsMargin(a) {
        let mrg;
        mrg = (a ? `margin:${a}px;` : "");
        return mrg;
    }

    function itemsWidth(a, b) { // returne style with item width. a - margin of item, number of items per row

        let width;
        let styleW;
        width = (100 / b).toFixed(4);
        itemWidth = width;
        styleW = `${pr.structure == "oneRow" ? 'width:' : 'flex-basis:' } calc( ${width}${pr.structure == "oneRow" ? "vw" : "%"}${a ? ` - ${a*2}px`: ""} );`;
        // console.log("**** :" + styleW);
        return styleW;
    }

    function itemsHeigth(a, b, c) { // returne style with item height. a - margin of item, number of items per row
        let itemHeigth;
        if (itemForm == "rectangle") {
            itemHeigth = `height: ${b * 0.7}vw`;
        } else {
            itemHeigth = `height: calc(${b}vw - ${a ? a*2:c}px)`;
        }
        return itemHeigth;
    }
}