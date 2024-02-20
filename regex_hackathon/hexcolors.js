const string = "The color #FFFFFF is white, and #00FF00 is green";

const pattern = /#([a-fA-F0-9]{6})/g;

const colors = string.match(pattern);

if (colors) {
    colors.forEach(color => {
        console.log("Hex Color Code:", color);
    });
}
