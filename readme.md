# Script for create blocks

[demo:][http://pushthe.space/push-gallery/]

## with tis script you can create gallery, jast add parameters, what do you want.

---

### options for gallery:

g_options = {
hover_animation: "scale", // - animation for hover-efect
structure: "table", // "oneRow", "table"
struct_cols: "14-6-8-6", // from 1 - 12, "default" - numbers of items in one row foe diferent screens (fron big screens to mobile). If "default" - 8, 6, 3, 2.
trackBox_teg: "div",
item_wrappteg: "div",
item_order: "equally", // "mix" "equally"
item_margin: 3, // "no" - parameter for margins bettwen items
item_form: "circle", // "rectangle", "circle", "square" - parameter for item form
item_border: [
{
// can be "none" if border is not need;
color: "#D45801",
windth: 3, // just number
radius: 20 // just number
}
]
};

---

### functions:

- createGallery - main function of gallery
- TagCreator - get parametrs (tag-name, stiles, attributes) for new DOM-element (tag) end returne new element;
- animationClass - add actual class for css styles.
- animationCorrect - add corection of scale effect, for thet block whot stand left or right edge.
- animationClass - add classes for gallery, for css styles - build struckture of gallery.
- itemBorder - add border to items
- itemNavi - not use
- itemNavCreator - crate abd returne navigation block for gallery items.
- preViewer - creat new DOMelement, for view big screen
- itemBoxSize - calculate size of items
- itemsWrapper - create new item element of gallery
