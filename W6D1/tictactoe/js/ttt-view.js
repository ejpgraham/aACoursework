class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {
    $("li").on("click", (e) => this.makeMove($(e.currentTarget)));
  }



  makeMove($square) {
    const position = $square.data("pos");
    if(!this.game.board.isEmptyPos(position)) {
      alert("Not empty!");
    } else {
      this.game.playMove(position);
      $square.append(`<p class='${this.game.currentPlayer}'>${this.game.currentPlayer}</p>`);
      $square.addClass("white");

      if(this.game.board.isOver()) {
        const $winMessage = $("<h1 id='winBanner'>");
        $("p.x, p.o").addClass('lost');
        $(`p.${this.game.currentPlayer}`).removeClass('lost').addClass('won');
        $winMessage.text(`${this.game.currentPlayer} has won!`);
        $winMessage.insertAfter($("ul.board"));
        $("li").off("click");
      }

    }


  }

  setupBoard() {
    const $ul = $('<ul class="board"></ul>');
    for(let i = 0; i < 9; i++){
      let $li = $('<li class="tile">');
      if (i < 3) {
        $li.data({pos: [0,i%3]});
      } else if (i < 6) {
        $li.data({pos: [1,i%3]});
      } else {
        $li.data({pos: [2,i%3]});
      }
      $ul.append($li);
    }
    this.$el.append($ul);
  }
}

module.exports = View;
