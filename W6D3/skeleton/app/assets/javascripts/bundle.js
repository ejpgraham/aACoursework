/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const followToggle = __webpack_require__(2);
const UsersSearch = __webpack_require__(4);

$( () => {
  $('.follow-toggle').each( function (index, el) {
    new followToggle($(el));
  });

  $('nav.users-search').each( function (index, el) {
    new UsersSearch($(el));
  });
});


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(3);

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


/***/ }),
/* 3 */
/***/ (function(module, exports) {

const APIUtil = {
  followUser: id => {
    return $.ajax({
      method: 'POST',
      url: `/users/${id}/follow`,
      dataType: 'JSON',

      error: () => console.log("error")
    });
  },

  unfollowUser: id => {
    return $.ajax({
      method: 'DELETE',
      url: `/users/${id}/follow`,
      dataType: 'JSON',

      error: () => console.log("error")
    });
  },

  searchUsers: (queryVal, success) => {
    return $.ajax({
      method: 'GET',
      url: '/users/search',
      dataType: 'JSON',
      data: {query: queryVal} ,
      success: success
    });
  }
};

module.exports = APIUtil;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(3);
const followToggle = __webpack_require__(2);


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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map