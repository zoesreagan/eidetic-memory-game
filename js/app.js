console.log("this is an eidetic memory game");

//start button that begins the round after player has read the instructions
//start button will ultimately trigger the modal and display the board.

//create a modal that appears after start button is clicked
//tie it to event listener
//needs to time out after 3 seconds and call the gameGrid function

// get the first modal
const modalOne = document.querySelector(".modalOne");

//create function to call the MODAL
const toggleModalOne = () => {
  modalOne.classList.toggle("show-modalOne");
};

//need to add random word to Modal for player to remember

//create an object? two sets of words...
const wordArray1 = [
  "breathe",
  "shoulder",
  "revoke",
  "application",
  "copper",
  "arrest",
  "singer",
  "history",
  "urgency"
];

const wordArray2 = [
  "toast",
  "affinity",
  "replace",
  "delicate",
  "intention",
  "speech",
  "fluctuation",
  "congress"
];

const wordArray3 = [
  "thesis",
  "faint",
  "tent",
  "unite",
  "explain",
  "fold",
  "extract",
  "theater",
  "apology",
  "cottage"
];

//choose random word from above wordArray (need to figure out how not to repeat words)
const randomWord1 = wordArray1[Math.floor(Math.random()*wordArray1.length)];


//card game functionality
//create an array of tiles with name and img attached

const tilesArray = [{
  'name' : 'hf1',
  'img' : 'img/hf_1.jpg',
},
{
  'name': 'hf2',
  'img' : 'img/hf_2.jpg',
},
{
  'name' : 'hf3',
  'img' : 'img/hf_3.jpg',
},
{
  'name' : 'hf4',
  'img' : 'img/hf_4.jpg',
},
{
  'name' : 'hf5',
  'img' : 'img/hf_5.jpg',
},
{
  'name' : 'hf6',
  'img' : 'img/hf_6.jpg',
},
{
  'name' : 'hf7',
  'img' : 'img/hf_7.jpg',
},
{
  'name' : 'hf8',
  'img' : 'img/hf_8.jpg',
},
];

//duplicate the first tilesArray so that the array has an available match
//this will require a loop
const gameGrid = tilesArray.concat(tilesArray);

//dont forget to randomize the array upon each refresh of the page
gameGrid.sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 500;
let score = 0;
let guesses = 0;

// display all twelve tiles
const game = document.getElementById('game');

//create a section with a class of 'grid'
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

//append the 'grid' section to the game div;
game.appendChild(grid);


//CREATING THE BOARD
//Now we create a div for each item in the 'tiles' array:

  const createBoard = () => {

    gameGrid.forEach(item => {
      const { name, img } = item;
      const tile = document.createElement('div');

      //apply card class to that div
      tile.classList.add('card');

      //set the data-name attribute of the div to the tilesArray
      tile.dataset.name = name;

      const front = document.createElement('div');
      front.classList.add('front');

      //apply the background immage of the div to the back of tilesArray image
      const back = document.createElement('div');
      back.classList.add('back');
      back.style.backgroundImage = `url(${item.img})`;

      //finally, append the div to the grid section
      grid.appendChild(tile);
      tile.appendChild(front);
      tile.appendChild(back);
    });
  };


//create a function for matching elements
// include a function that checks number of matched pairs
//and if the length of matched pairs equals total pairs available, trigger modal
const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(tile => {
    tile.classList.add('match');
    if($('div.card.match').length === 16) {
      toggleModalTwo();
    }
  });
}

//creat a function to reset guesses after two, even if no match
const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null

//create function to remove a match once found
  const selected = document.querySelectorAll('.selected');
    selected.forEach(tile => {
    tile.classList.remove('selected')
      console.log(tile);
  });
};


//SELECTING CARDS
//add an event listener to each div on the gameGrid
const gameGridListener = () => {

grid.addEventListener('click', event => {

//the event target is our clicked tile
//but we don't want the grid itself to be selected, only the divs
  const clicked = event.target;

  if (
    clicked.parentNode.classList.contains('grid') ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

//We need to modify the event listener to have if statement that counts to TWO
//and adds the 'selected' class to two cards
  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
        } else {
          //assign secondGuess
          secondGuess = clicked.parentNode.dataset.name;
          console.log(secondGuess);
          clicked.parentNode.classList.add('selected')
        }

    //if both guesses are not empty...
    if (firstGuess && secondGuess) {

      //and the first guess matches the second guess...
        if (firstGuess === secondGuess) {

        //run a setTimeout with the match function and designated delay
          setTimeout(match, delay);
          score++;
          $('.score').text('Points: ' + score);
        }
      setTimeout(resetGuesses, delay);
    } guesses++;
      $('.guess').text('Guesses: ' + guesses)
    previousTarget = clicked;
    }
  })
};

// $('.grid').click(function() => {
//   $('.selected').off('click');
// });

//trigger the modal upon click
//setTimeout to make modal disappear after set time
//remove "start game" button so the player cannot add another modal/board
//all methods called upon .start click
  $('.start').on('click', () => {
    toggleModalOne();
    setTimeout(toggleModalOne, 1000);
    createBoard();
    match();
    resetGuesses();
    gameGridListener();
    $('.memoryWord').append(randomWord1);
    $('.start').remove();
  });


//second modal called once all matches are found

const modalTwo = document.querySelector(".modalTwo")

const toggleModalTwo = () => {
  modalTwo.classList.toggle("show-modalTwo")
};


//print random word and two others to modal buttons
$('.wordOne').append(wordArray2[Math.floor(Math.random()*wordArray2.length)]);
$('.wordTwo').append(randomWord1);
$('.wordThree').append(wordArray3[Math.floor(Math.random()*wordArray3.length)]);

const modalFour = document.querySelector(".modalFour")
const toggleModalFour = () => {
  modalFour.classList.toggle("show-modalFour")
}

$('.wordOne').on('click', () => {
  toggleModalFour();
  toggleModalTwo();
})

$('.wordThree').on('click', () => {
  toggleModalFour();
  toggleModalTwo();
})

$('.try-again').on('click', () => {
  toggleModalTwo();
  toggleModalFour();
})

//create congrats modal if player choses correct word
const modalThree = document.querySelector(".modalThree")
const toggleModalThree = () => {
  modalThree.classList.toggle("show-modalThree")
};


//Modal Three
//create click event for correct button selection
//create a final congrats modal with score and guesses appended
$('.wordTwo').on('click', () => {
  $('div.card.match').detach();
  score++;
  $('.round-score').text('Your final score: ' + score);
  $('.guesses').text('How many guesses you made: ' + guesses);
  if(guesses <= 25) {
    $('.todo').text("Congratulations! You have a great memory. Keep working on your speed and accuracy.")
  } else if (guesses > 25) {
    $('.todo').text("Next time, try to reduce your guesses. Focusing on specific elements such as contrast or patterns can be helpful. Keep up your practice!")
  } else {
  };
  toggleModalThree();
});


$('.restart').on('click', () => {
  location.reload();
});
