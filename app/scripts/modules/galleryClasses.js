export default function classesGalleryBox(a) {
    let classesGallBox = "";
    let viewCalss = (a.structure == "oneRow" ? "one-row" : "view-table");
    // ----------------------------------------------
    if (a.item_order) {
        switch (a.item_order) {
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
    return (classesGallBox + viewCalss);
}