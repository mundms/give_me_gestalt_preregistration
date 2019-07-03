// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here

/*

01 Alter*, Geschlecht View ändern
02 Snellentest auf EINGABE VON INT BESCHRÄNKEN und feld kleiner machen
04 Dateien umbennen nach Tabelle
04 Filename, Künstler, Bilttitel, Year, Liking, Detectablity, NrOfVision,
08 Keine Correlationsanalyse (nicht even spaced) sondern bms regressionsanalyse (family cumulative)

*/



let b1_trails = [];
let b2_trails = [];
let path = 'images/stimuli/';
let totalFiles = 60;

var randomArray01 = createRandomArray();
var randomArray02 = createRandomArray();

for(let i = 0; i<totalFiles; i++) {
  file01 = createFilename(randomArray01, i);
  file02 = createFilename(randomArray02, i);
  console.log(file01 + "  vs  " + file02);

  b1_trails.push({
    question: "How much do you like this picture?",
    optionLeft:  'very bad',
    optionRight: 'very good',
    picture: file01,
    fileID: randomArray01[i],
  });

  b2_trails.push({
    question: "How well can you identify patterns in this picture?",
    optionLeft:  'not at all',
    optionRight: 'very much',
    picture: file02,
    fileID: randomArray02[i],
  });
};

function createRandomArray() {
  var randomArray = [];
  while(randomArray.length < totalFiles){
      var r = Math.floor(Math.random()*totalFiles) + 1;
      if(randomArray.indexOf(r) === -1) randomArray.push(r);
  }
  return randomArray;
}

function createFilename(array, index) {
  let file = (path+array[index]+'.jpg');
  return file;
}









// images so mitgeben ohne es anzuzeigen und ohne führende 0 (email oder als frage im report)
// einfach reinschreiben
// sehtest
// bitte nicht mit dem handy benutzen hinweis
// mit str + in most browsern ranzoomen
// bild in instruction view einfügen

// armlänge abstand, welche reihe problemlos erkennen
// was ausschließen
// gründe im report

// html direkt rein

// css layout wegen hochkant bildern

// Sehtest
// 60 Bilder pro Paritipant, alle SW
// regression
// für jedes Bild Mittelwert für Liking und Detektability

// Termin Do

// keine correlationsanalyse weil nicht even spaced


// gleiche anzahl an sw und bunten bildern pro gruppe

// package bms random effects
// schauen ob farbgebung Unterschied macht

// Auswertung:
// bms regressionsanalyse, daten sind ordinal wegen ratings (sind eigentlich keine intervalldaten)
// bei family cumulative statt causion
// paper per mail



// analyse und coding, hypothesenanylse

// unterschiedliche gruppengröße ist in ordnung
// weil arbeit mit mittelwert und co also nicht participants rauswerfen

/*

1. unterscheiden sich gruppen systematisch? 20 participants pro gruppe20
möglich nur 2 gruppen und stimulus zahl reduzieren
Weil im original paper kein effekt zwischen sw und nicht
2. falls nicht als eine gruppe behandeln

snellen test:
letzten linien
komplette reihe eingeben

bessere lösung

ishihara eine plakette prom
schwierigkeiten aus unterschiedlichen Bereich
5 aus 6??

simpler machen und farbsehtest ausschließe konzentrationsspanne erhöhen





*/






























/* Helper functions
*
*
*/


/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here



/* Hooks
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Your answer is correct! Yey!');
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
        }
        next();
    })
}

// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/
