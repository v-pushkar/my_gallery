export default function oneRow(a) {
    console.log("hi from onerow :" + a);
    let track = document.getElementById("track-box");
    track.setAttribute('style', `width: ${a}px`);
}