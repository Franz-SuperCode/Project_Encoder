let textElement = document.querySelector("#text");
let keyElement = document.querySelector("#key");
let button = document.querySelector("#code");
let output = document.querySelector("#output");
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

button.addEventListener("click", (event) => {
    event.preventDefault();
    reset();
    let valueText = textElement.value.toUpperCase();
    //Von String zum Array
    let textArray = Array.from(valueText);
    console.log(Array.from(textArray));

    // Jeden einzelnen Buchstaben holen
    textArray.forEach(character => {
        // Von Index 0 bis Länge des Alphabet-Arrays
        for (i = 0; i < alphabet.length - 1; i++) {
            //Prüfe ob jeder Buchstabe vom Input mit den Buchstaben aus dem Array übereinstimmt
            if (character === alphabet[i]) {

                //Zahl vom Input
                let keyValue = Number(keyElement.value);
                //Gib die Stelle Stelle vom Alphabet so weit verschoben aus, wie die Zahl vom Input ist
                console.log(alphabet[i + keyValue]);
                output.textContent += alphabet[i + keyValue];



            }
        }


    })
});

function reset() {
    output.textContent = "";
}