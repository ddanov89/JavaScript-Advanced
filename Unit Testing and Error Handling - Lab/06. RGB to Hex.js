function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)) {
        return undefined;
    }

    if (!Number.isInteger(green) || (green < 0) || (green > 255)) {
        return undefined;
    }

    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)) {
        return undefined;
    }

    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

console.log(rgbToHexColor(13, 14, 15));
console.log(rgbToHexColor());
//console.log(rgbToHexColor(0, 0, 0));
//console.log(rgbToHexColor("13", 14, 15));
//console.log(rgbToHexColor(-13, 14, 15));
//console.log(rgbToHexColor(266, 14, 15));
module.exports = { rgbToHexColor };