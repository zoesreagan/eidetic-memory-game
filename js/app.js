console.log("this is an eidetic memory game");


//start button that begins the round after player has read the instructions
//start button will ultimately trigger the modal and display the board.

//need to create a modal that appears after start button is clicked
//tie it to event listener
//needs to time out after 3 seconds and call the getRound1 function

// get the first modal
const modalOne = document.querySelector(".modalOne");

//create function to call the MODAL
const toggleModalOne = () => {
  modalOne.classList.toggle("show-modalOne");
};

//do the same for second modal
const modalTwo = document.querySelector(".modalTwo")

const toggleModalTwo = () => {
  modalTwo.classList.toggle("show-modalTwo")
}



//add event listener to 'listen' for player click
//trigger the modal upon click
//setTimeout to make modal disappear after set time
//remove "start game" button so the player cannot add another modal/board

$('.start').on('click', () => {
    toggleModalOne();
    setTimeout(toggleModalOne, 1000);
    $('.start').remove();
  });


//need to add random word to Modal for player to remember
const wordArray = [
    "breathe",
    "shoulder",
    "revoke",
    "application",
    "toast",
    "affinity",
    "replace",
    "delicate",
];

//choose random word from above wordArray (need to figure out how not to repeat words)
const randomWord = wordArray[Math.floor(Math.random()*wordArray.length)];

const randomWord2 = wordArray[Math.floor(Math.random()*wordArray.length)];

const randomWord3 = wordArray[Math.floor(Math.random()*wordArray.length)];

//print random word to Modal using append
$('.modal-contentOne').append(randomWord);

//card game functionality
//DISPLAY 16 CARDS, each with a different value.
// If clicked, the tile will flip, displaying an image.
// The player will then select second tile.
// If the tiles are a match, they will remain face up.
// If they are not a match, the tiles will flip back over.

//create an array of tiles with name and img attached
const tilesArray = [{
  'name' : 'bees',
  'img' : 'img/bees.jpg',
},
{
  'name': 'butterfly',
  'img' : 'img/butterfly.jpeg',
},
// {
//   'name' : 'caterpillar',
//   'img' : 'img/caterpillar.jpeg',
// },
// {
//   'name' : 'elephant',
//   'img' : 'img/elephant.jpg',
// },
// {
//   'name' : 'heron',
//   'img' : 'img/heron.jpg',
// },
// {
//   'name' : 'horse',
//   'img' : 'img/horse.jpg',
// },
// {
//   'name' : 'ladybug',
//   'img' : 'img/ladybug.jpg',
// },
// {
//   'name' : 'loon',
//   'img' : 'img/loon.jpg',
// },
// {
//   'name' : 'praying-mantis',
//   'img' : 'img/prayingmantis.jpg',
// },
// {
//   'name' : 'seal',
//   'img' : 'img/seal.jpg',
// },
// {
//   'name' : 'snails',
//   'img' : 'img/snails.jpg',
// },
// {
//   'name' : 'swan',
//   'img' : 'img/swan.jpg',
// },
];


//now we need to duplicate the first tilesArray so that the can find a match
//this will require a loop as well.
const gameGrid = tilesArray.concat(tilesArray);

//dont forget to randomize the array upon each refresh
gameGrid.sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1000;

// display all twelve tiles
const game = document.getElementById('game');

//create a section with a class of 'grid'
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

//append the 'grid' section to the game div;
game.appendChild(grid);



//CREATING THE BOARD
//when player clicks the start button, it will launch the board
//when user clicks start button, open modal
$('.start').on('click', () => {
  // console.log("buttonworks");
    //Now we create a div for each item in the 'tiles' array:
    //first create a div
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
});


//create a function for matching elements// include a function that checks number of matched pairs
//and if the length of matched pairs equals total pairs available, trigger modal
const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(tile => {
    tile.classList.add('match');
    if($('div.card.match').length === 4) {
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
grid.addEventListener('click', event => {

//the event target is our clicked tile
//but we don't want the grid itself to be selected, only the divs
  const clicked = event.target;
  if (clicked.nodeName === ('section') ||
      clicked === previousTarget ||
      clicked.parentNode.classList.contains('selected')
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
      }
        setTimeout(resetGuesses, delay);
      }
        previousTarget = clicked;
    }

});



//need to write logic to find if card.match divs equal 24 (all matched pairs)
//once all matches have been found, need to call toggleModal function





//modal needs to display text and call word from array

//how do we find if all matches have been found?
