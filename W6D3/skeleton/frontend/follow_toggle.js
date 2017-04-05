const APIUtil = require('./api_util.js');

class FollowToggle{
  constructor($el, options){
    this.$el = $el;
    this.userId = this.$el.data("user-id") || options.userId;
    this.followState = (this.$el.data("initial-follow-state") ||
                        options.followState);

    this.render();

    this.$el.on("click", (e) => this.handleClick(e) );
  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.prop("disabled", false);
      this.$el.text("Follow!");
    } else if (this.followState === "followed"){
      this.$el.prop("disabled", false);
      this.$el.text("Unfollow!");
    } else {
      this.$el.text(`${this.followState}`);
    }
  }

  handleClick(e) {
    e.preventDefault();
    const follow = this.followState;

    if (follow === "followed"){
      this.$el.prop("disabled", true);
      APIUtil.unfollowUser(this.userId).then( () =>{

        this.followState = "unfollowed";
        this.render();
      });
      this.followState = "unfollowing";
    } else{
      this.$el.prop("disabled", true);
      APIUtil.followUser(this.userId).then( () => {
        this.followState = "followed";
        this.render();
      } );
      this.followState = "following";
    }
    this.render();
  }
}


module.exports = FollowToggle;
