console.log("this is an eidetic memory game");



//hides gameboard until start game function is called by clicking start button
$(".tile-front").hide();
$(".tile-back").hide();

const createBoard = (num) => {
  for (let i = 0; i < 8; i++) {
      const $tile = $('<div>');
      $tile.addClass('tile-back')
      $tile.appendTo($("#game-container"))
      $tile.on('click', () => {
        console.log("click");
        $tile.removeClass('tile-back').addClass('tile-front');
      })
    }
//add event listener to the tile
//event.currentTarget will 'grab' the tile we clicked
//make square switch classes
//need to remove start game button once clicked
  $('button').remove()
}

//start game button
const $start = $('#start')
$start.on('click', createBoard);


If clicked, the tile will flip, displaying a character.
The player will then select second tile.
If the tiles are a match, they will remain face up.
If they are not a match, the tiles will flip back over.



















//need to add "back" of tiles to the game-container
// const addTile = (num) => {
//   const $tile = $('<div>');
//
//   $('.tile-back').on('click', (e) => {
//     console.log("square clicked");
//     $(e.currentTarget).addClass('tile-front')
  // });
//now we need to add event listener to the tiles so they display
//tile-back class (like flipping the card)
// }
//
// const createBoard = (numberOfTiles) => {
//   for (let i = 0; i < numberOfTiles; i++) {
//     addTile(i);
//
//   }
// }








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
