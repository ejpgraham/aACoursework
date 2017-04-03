class HanoiView {
  constructor(game, $rootEl) {
    this.game = game;
    this.$rootEl = $rootEl;
    this.setupTowers();
    this.render();
  }

  bindEvents() {
  }

  render() {
    // for(let i = 0; i < 3; i++){
    //   for(let j = 0; j<3; j++){
    //     $(towers[i]).append($("<li class='disc' id='blank'></li>"));
    //   }
    // }
  }


  setupTowers() {
    const $tower1 = $("<ul class='tower' id='tower1'></ul>");
    const $tower2 = $("<ul class='tower' id='tower2'></ul>");
    const $tower3 = $("<ul class='tower' id='tower3'></ul>");

    this.$rootEl.append($tower1);
    this.$rootEl.append($tower2);
    this.$rootEl.append($tower3);

    const towers = $('.tower');

    for(let i = 0; i < 3; i++){
      for(let j = 0; j<3; j++){
        $(towers[i]).append($("<li class='disc' id='blank'></li>"));
      }
    }

    // $tower1.append($disc1);
    // $tower1.append($disc2);
    // $tower1.append($disc3);

  }
}
module.exports = HanoiView;
