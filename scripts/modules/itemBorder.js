export default function itemBorder(a) {

    let color = a[0].color;
    let windth = a[0].windth;
    let radius = a.radius;
    let classStyle = `border: ${windth}px solid ${color};`;
    console.log("classStyle : " + classStyle);
    var node = document.createElement("style");
    var textnode = document.createTextNode(`.img-box {${classStyle}}`); // Create a text node
    node.appendChild(textnode);
    document.body.appendChild(node);


}