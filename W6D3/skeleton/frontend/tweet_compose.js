class TweetCompose {
  constructor($el) {
    this.$el = $el;

    this.$el.on("submit", (e) => submit(e));
  }

  submit(e) {
    e.preventDefault();
    let serialized = this.$el.serializeJSON();
    debugger

  }
}
