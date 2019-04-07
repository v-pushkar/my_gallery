export default function animationCorrect(el) {

    let xx = document.getElementsByClassName("item-Wrapp");

    for (let i = 0; i < xx.length; ++i) {
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