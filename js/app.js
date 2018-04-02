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

// //now need to display all twelve tiles
// const game = document.getElementById('game');


//create a section with a class of 'grid'
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');


//now we need to duplicate the first tilesArray so that the can find a match
//this will require a loop as well.

let gameGrid = tilesArray.concat(tilesArray);

//dont forget to randomize the array upon each refresh

gameGrid.sort(() => 0.5 - Math.random());

//append the 'grid' section to the game div;
game.appendChild(grid);

//Now we create a div for each item in the 'tiles' array:
  //first create a div
gameGrid.forEach(item => {
  const tile = document.createElement('div');

  //apply card class to that div
  tile.classList.add('card');

  //set the data-name attribute of the div to the tilesArray
  tile.dataset.name = item.name

  //apply the background immage of the div to the tilesArray image
  tile.style.backgroundImage = `url(${item.img})`;

  //finally, append the div to the grid section
  grid.appendChild(tile);

});


//SELECTING CARDS
//add an event listener to each div on the gameGrid

grid.addEventListener('click', function (event){
  //the event target is our clicked tile
  let clicked = event.target;

  //but we don't want the grid itsels to be selected, only the divs
  if (clicked.nodName === 'SECTION') {return;}

   //add class to divs clicked
  clicked.classList.add('selected');
});





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
