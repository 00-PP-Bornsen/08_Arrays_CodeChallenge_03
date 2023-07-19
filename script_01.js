
/*** Mini-Challenge  
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));

function getSentence(arr,op) {
   
   
   
     return "toDo";
}



// Modul: Ausgabe in Konsole : Test
// output("hi"); 
// function output(outputData) {
//     console.log(outputData);
// }*/

// Modul: Ausgabe in Konsole : Test
// Modul: Ausgabe in Konsole : Test
// Modul: Ausgabe in Konsole : Test
function output(outputData) {
    console.log(outputData);
}

function getSentence(arr, op) {
    let sentence = arr.join(" "); // Die Array-Elemente zu einem Satz mit Leerzeichen verbinden.
    let punctuation;

    // Die Satzzeichen basierend auf der gewählten Operation (op) bestimmen.
    switch (op) {
        case "S":
            punctuation = ".";
            break;
        case "Q":
            punctuation = "?";
            break;
        case "E":
            punctuation = "!";
            break;
        default:
            punctuation = "."; // Standardmäßig einen Punkt verwenden, wenn die Operation nicht erkannt wird.
            break;
    }

    return sentence + punctuation; // Den Satz mit dem entsprechenden Satzzeichen kombinieren.
}

