# Eidetic Memory Game

## About
This is a simple color matching memory game with an added word recall challenge.

Eidetic memory is the ability to recall information from memory after only a few moments of exposure without using an mnemonic device.

Visuospatial processing diminishes with age and the loss of this skill is a major component of cognitive decline.
Perhaps training this "memory" can help ward off the loss of visuospatial processing we experience with aging.

## User stories
This game will test the player's ability to recall a word after a color matching game.

Upon starting the game, the screen will display a word for a few seconds.

The word will then disappear and the game board with 16 tiles will appear.

If clicked, the tile will flip, displaying a character. The player will then select  second tile. If the tiles are a match, they will remain face up. If they are not a match, the tiles will flip back over.

The player must match all eight pairs of characters.

Once all eight pairs are matched, the board will disappear and will be replaced with a menu of words.

The player must select the word that appeared initially in order to "win" the round. If the incorrect word is chosen, the game will indicate this to the player. If the correct word is chosen, the game will then ask if the player wants to play again.


## Describe the tech
The tech behind this game is primarily vanilla Javascript with some jQuery used to navigate the DOM. Essentially, there are 16 selectable divs; logic checks if the cards a match; if so, they are a assigned a 'match' class and are then removed from view.

The game also employs a number of modals, which asks the player to remember, and then recall the word from three available options.

## Wireframes
### Initial Modal
(/Users/zoeskye/turtles/wdi-11-project-1/wdi-11-project-1/edetic-memory-game/eidetic-memory-game/img/wireframe_1.png)

### Gameboard
(/Users/zoeskye/turtles/wdi-11-project-1/wdi-11-project-1/edetic-memory-game/eidetic-memory-game/img/wireframe_2.png)

### Recall modal
(/Users/zoeskye/turtles/wdi-11-project-1/wdi-11-project-1/edetic-memory-game/eidetic-memory-game/img/wireframe_3.png)

### Congratulations modal
(/Users/zoeskye/turtles/wdi-11-project-1/wdi-11-project-1/edetic-memory-game/eidetic-memory-game/img/wireframe_4.png)

## Problem and solution
A major bug throughout was the ability to "select" the parent grid element as well as the "tile". This was fixed using the Node.contains() method, which returns a Boolean value indicating whether or not a node is a descendant of a given node.

In the game functionality, the class "selected" should NOT be added to the "grid" element, so the Node.contains() method returns nothing, thus ensuring the grid element cannot be clicked as a player selection.

## Future functionality
In the future, it would be nice to build in additional rounds and create logic that added more words to remember and more tiles to the board.
