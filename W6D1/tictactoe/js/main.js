const View = require('./ttt-view.js');
const Game = require('./game.js');

$( () => {
  const g = new Game();
  const $view = $('figure.ttt');
  const view = new View(g, $view);
  view.setupBoard();
  view.bindEvents();
});
