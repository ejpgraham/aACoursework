const APIUtil = require('./api_util.js');
const followToggle = require("./follow_toggle.js");


class UsersSearch {
  constructor($el) {
    this.$el = $el;
    this.$input = $el.find("input");
    this.$ul = $el.find("ul");
    this.$input.on("input", (e) => this.handleInput(e));
  }

  handleInput(e) {
    APIUtil.searchUsers(this.$input.val(), (users) => {
      this.renderResults(users);
    });
  }

  renderResults(users) {
    this.$ul.empty();
    users.forEach( (user) => {
      let $li = $('<li>');
      let $a = $(`<a href='/users/${user.id}'>`);
      $a.text(user.username);
      let $button = $('<button style="margin: 0px 20px">');
      let follow = user.followed ? "followed" : "unfollowed";
      let options = {userId: user.id , followState: follow};
      new followToggle($button, options);
      $li.append($a);
      $li.append($button);
      this.$ul.append($li);
    });
  }

}

module.exports = UsersSearch;
