//entry page text change
var text = ["Explore", "Search", "Seek"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 4000);

function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
        // clearInterval(inst);
    }
}
