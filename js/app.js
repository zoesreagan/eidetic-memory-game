console.log("this is an eidetic memory game");
//DISPLAY 16 CARDS, each with a different value.
// If clicked, the tile will flip, displaying an image.
// The player will then select second tile.
// If the tiles are a match, they will remain face up.
// If they are not a match, the tiles will flip back over.

const tilesArray = [{
  'name' : 'bees',
  'img' : 'img/bees.jpg',
},
{
  'name': 'butterfly',
  'img' : 'img/butterfly.jpeg',
},
{
  'name' : 'caterpillar',
  'img' : 'img/caterpillar.jpeg',
},
{
  'name' : 'elephant',
  'img' : 'img/elephant.jpg',
},
{
  'name' : 'heron',
  'img' : 'img/heron.jpg',
},
{
  'name' : 'horse',
  'img' : 'img/horse.jpg',
},
{
  'name' : 'ladybug',
  'img' : 'img/ladybug.jpg',
},
{
  'name' : 'loon',
  'img' : 'img/loon.jpg',
},
{
  'name' : 'praying-mantis',
  'img' : 'img/prayingmantis.jpg',
},
{
  'name' : 'seal',
  'img' : 'img/seal.jpg',
},
{
  'name' : 'snails',
  'img' : 'img/snails.jpg',
},
{
  'name' : 'swan',
  'img' : 'img/swan.jpg',
},
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
let delay = 1200;

//CREATING THE BOARD

// display all twelve tiles
const game = document.getElementById('game');


//create a section with a class of 'grid'
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

//append the 'grid' section to the game div;
game.appendChild(grid);


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



//create a function for matching elements.
const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(tile => {
    tile.classList.add('match');
  });
};


//creat a function to reset guesses after two, even if no match
const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null

  var selected = document.querySelectorAll('.selected');
  selected.forEach(tile => {
    tile.classList.remove('selected')
  });
};



//SELECTING CARDS
//add an event listener to each div on the gameGrid

grid.addEventListener('click', event => {

  //the event target is our clicked tile
  const clicked = event.target;
  if (clicked.nodeName === 'SECTION' ||
      clicked === previousTarget ||
      clicked.parentNode.classList.contains('selected')
  ) {
    return;
  }

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
      //and the frist guess matches the second match...
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay)
    }
    previousTarget = clicked;
  }

});

  //but we don't want the grid itself to be selected, only the divs


   //add class to divs clicked



//ONLY ALLOW TWO CARDS TO BE SELECTED




//need to modify the event listener to have if statement that counts to TWO
//and adds the 'seclected' class to two cards











//need to create a modal that appears after start button is clicked
//tie it to event listener
//needs to time out after 3 seconds and call the getRound1 function

//get the modal
// const modal = document.getElemenByID("modal")
// //get the close button on modal
// const span = document.getElementByClass("close")[0];
//
// //when user clicks start button, open Modal
// modal.onclick = function () {
//   modal.style.display = "block";
// }
// span.onclick = function () {
//   modal.style.display = "none";
// }
