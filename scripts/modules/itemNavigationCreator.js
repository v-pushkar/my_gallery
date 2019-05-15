// crate abd returne navigation block for gallery items

export default function itemNavCreator() {
  function createTag(a, b) {
    // get tag name and class for new element
    let newTag = document.createElement(a);
    if (b) {
      newTag.setAttribute("class", b);
    }
    return newTag;
  }
  let navWrap = createTag("div", "itemNav-wrap"); // send to function tagname and classname for new element
  let nawTag = createTag("div", "itemNaw"); // send to function tagname and classname for new element
  let navButton = createTag("button", "icon-enlarge preVieuBtn"); // send to function tagname and classname for new element
  navButton.setAttribute("data-role", "preVieuerRun");
  nawTag.appendChild(navButton);
  navWrap.appendChild(nawTag);

  return navWrap;
}
