console.log("this is an eidetic memory game");

$(".tile-front").hide();
$(".tile-back").hide();

//need to add tiles to the page
const addTile = (num) => {
  const $tile = $('<div>');
  $tile.addClass('tile-front')
  $tile.appendTo($("#game-container"))
}

const getRound1 = () => {
  for (let i = 0; i < 16; i++) {
    addTile(i);
    $('start').on('click')
  }
}

const $start = $('#start')

$start.on('click', getRound1)
