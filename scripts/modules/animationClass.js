export default function animationClass(a) {

    var classesForBox = "";
    // ----------------------------------------------
    if (a) {
        switch (a) {
            case "scale":
                classesForBox = classesForBox + 'animation-scale ';
                break;
            default:
                classesForBox = classesForBox + 'animation-def ';
        }
    }

    // ------------- return result ------------------
    return classesForBox
}