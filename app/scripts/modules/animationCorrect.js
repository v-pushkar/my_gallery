export default function animationCorrect(el, b, w) {
  // el - arrey items of gallery, b -  type of gallery structure, w - width of gallery box
  let xx = document.getElementsByClassName("item-Wrapp");
  let rowWidth = 0;
  for (let i = 0; i < xx.length; ++i) {
    let ofsetElLeft = xx[i].offsetLeft;
    // console.log(`ofsetleft of item : ${ofsetElLeft}`)
    // let windWidth = window.innerWidth;
    let docWidth = window.innerWidth;
    let windWidth = w;
    let elWidth = xx[i].offsetWidth;
    rowWidth = rowWidth + elWidth;
    // console.log(`distans of items : ${(elWidth + ofsetElLeft + (docWidth - windWidth)*0.5 )} ; ${(docWidth - (docWidth - windWidth)*0.5  - elWidth / 3)}`)
    if (ofsetElLeft < xx[i].offsetWidth / 3) {
      xx[i].classList.add("transl-to-right");
      // } else if (((elWidth + ofsetElLeft) <= innerWidth) && ((elWidth + ofsetElLeft) > (innerWidth - elWidth / 3))) {
    } else if (
      elWidth + ofsetElLeft + (docWidth - windWidth) * 0.5 >
      docWidth - (docWidth - windWidth) * 0.5 - elWidth / 3
    ) {
      xx[i].classList.add(`transl-to-left`);
    }
  }
  if (b.structure == "oneRow") {
    oneRow(rowWidth);
  }
}
