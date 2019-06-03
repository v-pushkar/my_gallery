import TagCreator from "/app/scripts/helpFunctions/tagCreator.js";

export default function fog() {
  let fog = TagCreator({
    tagName: "div",
    attributes: [
      {
        class: "fog"
      }
    ]
  });
  let teg2 = TagCreator({
    tagName: "div",
    attributes: [{ class: "fog__cotainer" }]
  });
  let teg3 = TagCreator({
    tagName: "div",
    attributes: [{ class: "fog__img fog__img--first" }]
  });

  let teg4 = TagCreator({
    tagName: "div",
    attributes: [{ class: "fog__img fog__img--second" }]
  });

  teg2.appendChild(teg3);
  teg2.appendChild(teg4);
  fog.appendChild(teg2);

  return fog;
}
