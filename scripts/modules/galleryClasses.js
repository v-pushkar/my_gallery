export default function classesGalleryBox(param) {
    var classesGallBox = "";
    // ----------------------------------------------
    if (param.item_order) {
        switch (param.item_order) {
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
    return classesGallBox;
}