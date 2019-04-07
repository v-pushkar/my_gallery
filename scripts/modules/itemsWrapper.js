import animationClass from '/scripts/modules/animationClass.js';
import itemBoxSize from '/scripts/modules/itemSize.js';

export default function itemsWrapper(a, b, c) {

    // --- function for add multiattributes 
    Element.prototype.setAttributes = function (attrs) {
        for (let idx in attrs) {
            if ((idx == 'styles' || idx == 'style') && typeof attrs[idx] == 'object') {
                for (let prop in attrs[idx]) {
                    this.style[prop] = attrs[idx][prop]
                }
            } else if (idx == 'html') {
                this.innerHTML = attrs[idx]
            } else {
                this.setAttribute(idx, attrs[idx]);
            }
        }
    };
    // -----------------------------------------------
    const itemsWrapTeg = b ? b : "DIV"; // teg name for item wrapper
    const trackTag = c ? c : "DIV"; // teg name for trackbox wrapper
    let gallItemsLeng = a.length; // get number, how mach item elements;
    let trackBox = document.createElement(trackTag);
    trackBox.setAttributes({
        'class': `track-box`,
        'id': 'track-box',
        'data-name': 'track-box'
    });

    for (let i = 0; i < gallItemsLeng; i++) {
        let itemWrapp = document.createElement(itemsWrapTeg);
        itemWrapp.setAttribute('class', `item-Wrapp item-id-${i} img-position-${i} img-box ${a ? animationClass(a) : ''}`); // add classes for new element - item of gallery
        itemBoxSize(itemWrapp, a);
        itemWrapp.appendChild(gallitems[0]);
        trackBox.appendChild(itemWrapp);
    }
    return;
}