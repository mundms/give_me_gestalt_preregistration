
/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here



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
    question: "How much do you like this painting?",
    optionLeft:  'not at all',
    optionRight: 'very much',
    picture: file01,
    fileID: randomArray01[i],
  });

  b2_trails.push({
    question: "How well can you identify patterns in this painting?",
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
