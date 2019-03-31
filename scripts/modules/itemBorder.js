export default function itemBorder(a) {

    let color = a[0].color;
    let windth = a[0].windth;
    let radius = a.radius;
    let classStyle = `border: ${windth}px solid ${color};`;
    var node = document.createElement("style"); // Create a <li> node
    var textnode = document.createTextNode(`.img-box {${classStyle}}`); // Create a text node
    node.appendChild(textnode); // Append the text to <li>
    document.body.appendChild(node);

    return;
}