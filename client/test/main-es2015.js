(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\r\n<router-outlet></router-outlet>\r\n<!-- <app-footer></app-footer> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div id=\"footer\">\r\n<footer>\r\n  <p>Copy &copy; 2020 All right reserved.</p>\r\n</footer>\r\n</div> -->\r\n\r\n<footer id=\"footer\" class=\" bg-dark text-white\">\r\n  <div class=\"container text-center\">\r\n    <small>Copy &copy; 2020 All Right Reserved.</small>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav id=\"navBarLandingPg\">\r\n  <div class=\"nav-wrapper\">\r\n    <!-- ////// IN CASE NOT LOGGED IN ////// -->\r\n\r\n    <a *ngIf=\"!token\" href=\"\" class=\"logo brand-logo center\" (click)=\"routing()\"\r\n      routerLinkActive=\"router-link-active\">UNIT</a>\r\n    <ul id=\"ul\">\r\n      <ul *ngIf=\"!token\" id=\"nav-left\" class=\"left hide-on-med-and-down\">\r\n        <li><a href=\"#team\">Team</a></li>\r\n        <li><a href=\"#about\">About</a></li>\r\n      </ul>\r\n\r\n      <ul *ngIf=\"!token\" id=\"nav-right\" class=\"right hide-on-med-and-down\">\r\n        <li>\r\n          <a href=\"\" [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\">Login</a>\r\n        </li>\r\n        <li>\r\n          <a href=\"\" [routerLink]=\"['/signUp']\" routerLinkActive=\"router-link-active\">SignUp</a>\r\n        </li>\r\n      </ul>\r\n\r\n      <!-- ////// IN CASE NOT LOGGED IN ////// -->\r\n\r\n      <!-- ////// IN CASE LOGGED IN ////// -->\r\n\r\n      <a *ngIf=\"token\" href=\"\" id=\"logo\" class=\"logo brand-logo left\" (click)=\"routing()\"\r\n        routerLinkActive=\"router-link-active\">UNIT</a>\r\n\r\n      <div id=\"searchBar\">\r\n        <a style=\"width: 65%; text-decoration: underline;\" *ngIf=\"token\" (click)=\"lookUp()\">\r\n          <mat-icon>search</mat-icon>\r\n          search\r\n        </a>\r\n      </div>\r\n\r\n      <div id=\"profile\" *ngIf=\"token\" ngbDropdown class=\"d-inline-block\">\r\n        <a [routerLink]=\"['/profile']\" routerLinkActive=\"router-link-active\">\r\n          <img [src]=\"env + '/uploads/' + photo\" alt=\"\"\r\n            style=\"border-radius: 100%; width: 40px; margin-bottom: 11px;\" />\r\n        </a>\r\n        <!-- <div id=\"list\" ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n          <a\r\n            class=\"pro\"\r\n            href=\"\"\r\n            ngbDropdownItem\r\n            [routerLink]=\"['/profile']\"\r\n            routerLinkActive=\"router-link-active\"\r\n            >profile</a\r\n          >\r\n          <a class=\"pro\" routerLink=\"/chat\" ngbDropdownItem>chat</a>\r\n          <a class=\"pro\" href=\"\" ngbDropdownItem (click)=\"logout()\">logout</a>\r\n        </div> -->\r\n      </div>\r\n\r\n      <!-- ////// IN CASE LOGGED IN ////// -->\r\n    </ul>\r\n  </div>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/chat/chat.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/chat/chat.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"body\">\r\n  <app-main-side></app-main-side>\r\n  <div id=\"contacts\" class=\"container\">\r\n    <div id=\"contact\" class=\"row animated fadeInUp\" *ngFor=\"let user of Users\" routerLink=\"/chatroom\"\r\n      [queryParams]=\"{ name: user.username, email: user.email }\">\r\n      <div class=\"col-2\" id=\"pp\">\r\n        <img [src]=\" env +'/uploads/' + user.photo\" alt=\"\" />\r\n      </div>\r\n      <div id=\"username\" class=\"col-10\">\r\n        <b>{{ user.name }}</b>\r\n        <br />\r\n        <small>{{ user.username }}</small>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/chatroom/chatroom.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/chatroom/chatroom.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"mario-chat\">\r\n    <h2>{{ username }}</h2>\r\n    <div id=\"chat-window\">\r\n        <div *ngFor=\"let item of messageArray\">\r\n            <h6 style=\"color:#ec1026\"><i> {{ item.user}}</i></h6>\r\n            <p [class.userMessage]=\"item.user == userService.getLoggedInUser().username\"\r\n                [class.secUserMessage]=\"item.user != userService.getLoggedInUser().username\">\r\n                {{ item.message}} </p> {{item.Date | dateAgo}}\r\n            <hr>\r\n        </div>\r\n\r\n        <!-- <div id=\"feedback\"></div> -->\r\n    </div>\r\n    <span><strong><i *ngIf=\"isTyping\" class=\"isTyping\">Your Friend is Typing...</i></strong></span>\r\n    <input (keypress)=\"Enter($event)\" (keypress)=\"typing()\" [(ngModel)]=\"message\" name=\"message\" type=\"text\"\r\n        placeholder=\"Message\" />\r\n    <button id=\"send\" (click)=\"sendMessage()\">Send</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/following-side/following-side.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/following-side/following-side.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"following.length > 0\" class=\"sidebar animated fadeInRight\" id=\"side\">\r\n  <h5>Following</h5>\r\n  <ul>\r\n    <li [routerLink]=\"['/users', user.id]\" routerLinkActive=\"router-link-active\" *ngFor=\"let user of following\">\r\n      <div class=\"row\">\r\n        <div class=\"col-4\">\r\n          <img [src]=\"env + '/uploads/' + user.photo\" alt=\"\" />\r\n        </div>\r\n        <div id=\"info\" class=\"col-8\">\r\n          {{ user.name }}\r\n          <br />\r\n          <small>@{{ user.username }}</small>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/main-side/main-side.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/main-side/main-side.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar\" id=\"side\">\r\n  <ul>\r\n    <li [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\">\r\n      <div class=\"row\">\r\n        <div class=\"col-2\">\r\n          <mat-icon>home</mat-icon>\r\n        </div>\r\n        <div class=\"col-10\">\r\n          home\r\n        </div>\r\n      </div>\r\n    </li>\r\n    <li [routerLink]=\"['/chat']\" routerLinkActive=\"router-link-active\">\r\n      <div class=\"row\">\r\n        <div class=\"col-2\">\r\n          <mat-icon> chat</mat-icon>\r\n        </div>\r\n        <div class=\"col-10\">\r\n          chat\r\n        </div>\r\n      </div>\r\n    </li>\r\n    <hr />\r\n    <li [routerLink]=\"['/profile']\" routerLinkActive=\"router-link-active\">\r\n      <div class=\"row\">\r\n        <div class=\"col-2\">\r\n          <mat-icon>person</mat-icon>\r\n        </div>\r\n        <div class=\"col-10\">\r\n          profile\r\n        </div>\r\n      </div>\r\n    </li>\r\n    <!-- <li>\r\n      <div class=\"row\">\r\n        <div class=\"col-2\">\r\n          <mat-icon>people_outline</mat-icon>\r\n        </div>\r\n        <div class=\"col-10\">\r\n          following\r\n        </div>\r\n      </div>\r\n    </li> -->\r\n    <!-- <li>\r\n      <div class=\"row\">\r\n        <div class=\"col-2\">\r\n          <mat-icon>people</mat-icon>\r\n        </div>\r\n        <div class=\"col-10\">\r\n          followers\r\n        </div>\r\n      </div>\r\n    </li>\r\n    <br /> -->\r\n\r\n    <li id=\"log\">\r\n      <a href=\"\" (click)=\"logout()\">\r\n        <div class=\"row\">\r\n          <div class=\"col-2\">\r\n            <mat-icon>exit_to_app</mat-icon>\r\n          </div>\r\n          <div class=\"col-10\">\r\n            logout\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/post-card-component/post-card-component.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/post-card-component/post-card-component.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"animated fadeInUp example-card\" *ngFor=\"let post of posts | reverse\">\r\n  <mat-card-header id=\"cardHeader\" [routerLink]=\"['/users', post.id]\">\r\n    <img mat-card-avatar class=\"example-header-image\" [src]=\"env + '/uploads/' + post.photo\" />\r\n    <mat-card-title>{{ post.name }}</mat-card-title>\r\n    <mat-card-subtitle style=\"color: white;\">@{{ post.username }}</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <div id=\"content\" *ngIf=\"post.type === 'image'\" (click)=\"widePost(post.link)\">\r\n    <img mat-card-image [src]=\"env + '/uploads/' + post.link\" alt=\"\" />\r\n  </div>\r\n  <div id=\"content\" *ngIf=\"post.type === 'video'\" (click)=\"widePost(post.link)\">\r\n    <iframe class=\"card-img-top\" [src]=\"env + '/uploads/' + post.link | safe\" alt=\"Card image cap\" allowfullscreen>\r\n    </iframe>\r\n  </div>\r\n  <div id=\"content\" *ngIf=\"post.type === 'audio'\">\r\n    <audio class=\"card-img-top\" [src]=\"env + '/uploads/' + post.link | safe\" alt=\"Card image cap\" controls></audio>\r\n  </div>\r\n\r\n  <mat-card-footer id=\"footer\">\r\n    <h6>{{ post.post }}</h6>\r\n    <small>{{ post.created_at | dateAgo }}</small>\r\n  </mat-card-footer>\r\n</mat-card>\r\n<!-- https://instagram.ftun4-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/81079470_180885033032053_8283358069387268417_n.jpg?_nc_ht=instagram.ftun4-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=O9wM-DGEdbAAX-ZYvmP&oh=041a0636bb14ceee374061fda31ba877&oe=5EC8D020 -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/post/post.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/post/post.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"uploadContainer\" class=\"animated fadeInDown\">\r\n  <div id=\"text\" class=\"form-group\">\r\n    <textarea rows=\"10\" cols=\"50\" #pRef placeholder=\"what would you like to say !!\" type=\"text\" name=\"text\"\r\n      (change)=\"postText($event)\"></textarea>\r\n    <br />\r\n    <hr />\r\n\r\n    <div id=\"upload\">\r\n      <div class=\"row\">\r\n        <div class=\"col-8\">\r\n          <div class=\"image-upload\">\r\n            <label for=\"file-input\">\r\n              <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                  <mat-icon id=\"uploadIcon\">add_photo_alternate</mat-icon>\r\n                </div>\r\n                <div class=\"col-8\">\r\n                  <p>Photo/Video/audio</p>\r\n                </div>\r\n              </div>\r\n            </label>\r\n            <input id=\"file-input\" type=\"file\" name=\"image\" (change)=\"fileProgress($event)\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <div class=\"form-group\">\r\n            <button (click)=\"onSubmit()\">share</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div style=\"margin-left: 100%; position: absolute; top: 3%;\" id=\"image-preview\" class=\"image-preview mb-3\"\r\n        *ngIf=\"previewUrl\">\r\n        <img style=\" border-radius: 20px;\" [src]=\"previewUrl\" max-height=\"500\" width=\"300\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-nav-home></app-nav-home> -->\r\n<div id=\"body\">\r\n  <div id=\"mainContainer\" class=\"container\">\r\n    <app-main-side></app-main-side>\r\n    <app-post></app-post>\r\n    <app-following-side></app-following-side>\r\n    <!-- <app-users-list [users]=\"users\"></app-users-list> -->\r\n    <div id=\"posts\">\r\n      <app-post-card-component [posts]=\"posts\"></app-post-card-component>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landingPage/landing-page/landing-page.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landingPage/landing-page/landing-page.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"header\">\r\n  <img src=\"https://cdn.dribbble.com/users/3119724/screenshots/6528316/greens-offbeat_estudio-1.jpg\" />\r\n</div>\r\n\r\n<div id=\"intro\" class=\"container\">\r\n  <h2 class=\" animated fadeInDown\">Welcome To Unit Website</h2>\r\n  <h6 class=\" animated fadeInDown\">\r\n    enjoy the social media without being bothered of likes or comments\r\n  </h6>\r\n  <div class=\" animated zoomInUp\">\r\n    <a href=\"#about\">\r\n      <mat-icon id=\"arrowDown\" aria-hidden=\"false\" aria-label=\"Example expand_more icon\">expand_more</mat-icon>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<!-- ////////////////////////////////////////////////// -->\r\n\r\n<section id=\"about\">\r\n  <h2>About The Website</h2>\r\n  <div id=\"functionallity\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <div class=\"row\" style=\"margin-bottom: 20%;\">\r\n          <div class=\"col-2\">\r\n            <img src=\"../../../../assets/picture1.jpg\" width=\"100%\" />\r\n            <!-- <mat-icon>search</mat-icon> -->\r\n          </div>\r\n          <div>\r\n            <p> <strong>Get To Contact Millions of People.</strong> </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-2\">\r\n            <img src=\"../../../../assets/picture1.jpg\" width=\"100%\" />\r\n            <!-- <mat-icon>search</mat-icon> -->\r\n          </div>\r\n          <div>\r\n            <p>\r\n              <strong>Its Free and It will Always be. LowKey - like Facebook</strong>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\" style=\"margin-bottom: 20%;\">\r\n          <div class=\"col-2\">\r\n            <img src=\"../../../../assets/picture1.jpg\" width=\"100%\" />\r\n            <!-- <mat-icon>search</mat-icon> -->\r\n          </div>\r\n          <div>\r\n            <p>\r\n              <strong>Upload Your Media , and Share Your Thoughts</strong>\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-2\">\r\n            <img src=\"../../../../assets/picture1.jpg\" width=\"100%\" />\r\n            <!-- <mat-icon>search</mat-icon> -->\r\n          </div>\r\n          <div>\r\n            <strong>Chat With Your Friends , No one is Watching :)</strong>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- ////////////////////////////////////////////////// -->\r\n\r\n<section id=\"team\">\r\n  <div class=\"container\">\r\n    <div class=\"section-header\">\r\n      <h3>Team</h3>\r\n    </div>\r\n\r\n    <div class=\"row\" id=\"row\">\r\n      <div class=\"col-lg-3 animated bounceInLeft\">\r\n        <div class=\"member\">\r\n          <img\r\n            src=\"https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/p960x960/82570142_1598346823640215_8774288190505746432_o.jpg?_nc_cat=105&_nc_oc=AQk3CUkB-z4lOeMGe00KPKS_tycSR9fvgdJVjKYq8GPc3ZMMu2Bi3RRE8gUKHrd7Oio&_nc_ht=scontent.ftun4-1.fna&_nc_tp=6&oh=4191aa1ec8cb3be5d65a5c83bc06c829&oe=5E95FC71\"\r\n            class=\"img-fluid\" alt=\"\" />\r\n          <div class=\"member-info\">\r\n            <div class=\"member-info-content\">\r\n              <h6>Buzer</h6>\r\n              <span>Product Owner</span>\r\n              <div class=\"social\">\r\n                <a href=\"https://github.com/Hashem-Buzer\" target=\"_blank\"><img\r\n                    src=\"https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png\" alt=\"\" /></a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-3 animated bounceInUp\">\r\n        <div class=\"member\">\r\n          <img\r\n            src=\"https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/75233676_2468039866847641_4680078330324582400_n.jpg?_nc_cat=108&_nc_oc=AQlDmhcukOSJANd6dYiBTxC2h0yulgZDwLRm-fD4t5qzhs0Buzim0X0Q-s8xik9haM8&_nc_ht=scontent.ftun4-1.fna&oh=275c650f3e5b115c143c34d1beaeda09&oe=5ECFB6DE\"\r\n            class=\"img-fluid\" alt=\"\" />\r\n          <div class=\"member-info\">\r\n            <div class=\"member-info-content\">\r\n              <h6>Altawati</h6>\r\n              <span>Scrum Master</span>\r\n              <div class=\"social\">\r\n                <a href=\"https://github.com/Malik-Altawati\" target=\"_blank\"><img\r\n                    src=\"https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png\" alt=\"\" /></a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-3 animated bounceInUp\">\r\n        <div class=\"member\">\r\n          <img\r\n            src=\"https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-1/c162.0.972.972a/49899912_985414711846843_2915905176164368384_o.jpg?_nc_cat=102&_nc_oc=AQlmrqKUE1JOXQKN0M5m4GB58ib5naJ9fc3APo2pXvXQuK1aV2eOwGq56GqjOKrbI7I&_nc_ht=scontent.ftun4-1.fna&oh=c77ab10a9ebf3224ea79a6e03e9e1f03&oe=5EC4C406\"\r\n            class=\"img-fluid\" alt=\"\" />\r\n          <div class=\"member-info\">\r\n            <div class=\"member-info-content\">\r\n              <h6>Shibani</h6>\r\n              <span>Team Member</span>\r\n              <div class=\"social\">\r\n                <a href=\"https://github.com/Abdlrrahman\" target=\"_blank\"><img\r\n                    src=\"https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png\" alt=\"\" /></a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-3 animated bounceInRight\">\r\n        <div class=\"member\">\r\n          <img src=\"https://i.ibb.co/njnhb67/Capture.jpg\" class=\"img-fluid\" alt=\"\" />\r\n          <div class=\"member-info\">\r\n            <div class=\"member-info-content\">\r\n              <h6>Barhoumi</h6>\r\n              <span>Team Member</span>\r\n              <div class=\"social\">\r\n                <a href=\"https://github.com/ziedbarhoumi1989\" target=\"_blank\"><img\r\n                    src=\"https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png\" alt=\"\" /></a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"goUpDiv\">\r\n    <a href=\"#header\">\r\n      <mat-icon id=\"goUp\">keyboard_arrow_up</mat-icon>\r\n    </a>\r\n  </div>\r\n</section>\r\n<!-- </div> -->\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/edit/edit.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/edit/edit.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n  <div class=\"form-group row\">\r\n    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Email</label>\r\n    <div class=\"col-sm-10\">\r\n      <input\r\n        type=\"text\"\r\n        readonly\r\n        class=\"form-control-plaintext\"\r\n        id=\"staticEmail\"\r\n        placeholder=\"{{ Email }}\"\r\n      />\r\n    </div>\r\n    <label for=\"inputUsername\" class=\"col-sm-2 col-form-label\">Username</label>\r\n    <div class=\"col-sm-10\">\r\n      <input\r\n        (change)=\"UpdateUsername($event)\"\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        id=\"inputUsername\"\r\n        placeholder=\"New Username\"\r\n        value=\"{{ Username }}\"\r\n      />\r\n    </div>\r\n    <label for=\"inputDisplayName\" class=\"col-sm-2 col-form-label\"\r\n      >DisplayName</label\r\n    >\r\n    <div class=\"col-sm-10\">\r\n      <input\r\n        (change)=\"UpdateName($event)\"\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        id=\"inputDisplayName\"\r\n        placeholder=\"New DisplayName\"\r\n        value=\"{{ Name }}\"\r\n      />\r\n    </div>\r\n    <label for=\"inputUsername\" class=\"col-sm-2 col-form-label\">Age</label>\r\n    <div class=\"col-sm-10\">\r\n      <input\r\n        (change)=\"UpdateAge($event)\"\r\n        type=\"number\"\r\n        class=\"form-control\"\r\n        id=\"inputUsername\"\r\n        placeholder=\"How old Are You?\"\r\n        onkeydown=\"javascript: return event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key))\"\r\n      />\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"exampleFormControlTextarea1\">Edit Bio:</label>\r\n    <textarea\r\n      (change)=\"UpdateBio($event)\"\r\n      class=\"form-control\"\r\n      id=\"exampleFormControlTextarea1\"\r\n      rows=\"3\"\r\n    ></textarea>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"exampleFormControlSelect1\">Set Gender:</label>\r\n    <select\r\n      (change)=\"UpdateGender($event)\"\r\n      class=\"form-control\"\r\n      id=\"exampleFormControlSelect1\"\r\n    >\r\n      <option> - </option>\r\n      <option>Male</option>\r\n      <option>Female</option>\r\n    </select>\r\n  </div>\r\n  <button\r\n    (click)=\"onUpdateProfile()\"\r\n    width=\"100%\"\r\n    type=\"button\"\r\n    class=\"btn btn-primary\"\r\n  >\r\n    Save Info Set\r\n  </button>\r\n  <hr />\r\n  <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Password</label>\r\n  <div class=\"col-sm-10\">\r\n    <input\r\n      (change)=\"UpdatePass($event)\"\r\n      type=\"password\"\r\n      class=\"form-control\"\r\n      id=\"inputPassword\"\r\n      placeholder=\"New Password\"\r\n    />\r\n    <input\r\n      (change)=\"UpdateConfirmPassword($event)\"\r\n      type=\"password\"\r\n      class=\"form-control\"\r\n      id=\"inputPassword\"\r\n      placeholder=\"Confirm Password\"\r\n    />\r\n  </div>\r\n  <button\r\n    (click)=\"onUpdatePassword()\"\r\n    width=\"100%\"\r\n    type=\"button\"\r\n    class=\"btn btn-primary\"\r\n  >\r\n    Save New Password\r\n  </button>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/info-section/followers/followers.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/info-section/followers/followers.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"body\">\r\n  <app-main-side></app-main-side>\r\n  <div id=\"contacts\" class=\"container\">\r\n    <h4>followers</h4>\r\n    <hr />\r\n    <div id=\"con\">\r\n      <div id=\"contact\" class=\"animated fadeInUp\" *ngFor=\"let user of followers\" [routerLink]=\"['/users', user.id]\">\r\n        <div id=\"pp\">\r\n          <img [src]=\"env +'/uploads/' + user.photo\" alt=\"\" />\r\n        </div>\r\n        <div id=\"username\">\r\n          <b>{{ user.name }}</b>\r\n          <br />\r\n          <small>{{ user.username }}</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/info-section/following/following.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/info-section/following/following.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"body\">\r\n  <app-main-side></app-main-side>\r\n  <div id=\"contacts\" class=\"container\">\r\n    <h4>following</h4>\r\n    <hr />\r\n    <div id=\"con\">\r\n      <div id=\"contact\" class=\"animated fadeInUp\" *ngFor=\"let user of following\" [routerLink]=\"['/users', user.id]\">\r\n        <div id=\"pp\">\r\n          <img [src]=\"env +'/uploads/' + user.photo\" alt=\"\" />\r\n        </div>\r\n        <div id=\"username\">\r\n          <b>{{ user.name }}</b>\r\n          <br />\r\n          <small>{{ user.username }}</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/info-section/info-section.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/info-section/info-section.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>info-section works!</p> -->\r\n<div id=\"body\">\r\n  <div id=\"pp\" class=\"container\">\r\n    <div id=\"addIcon\">\r\n      <label for=\"file-input\">\r\n        <mat-icon id=\"icon\">add</mat-icon>\r\n      </label>\r\n    </div>\r\n    <input id=\"file-input\" type=\"file\" name=\"image\" (change)=\"onUploadPhoto($event)\" />\r\n    <img [src]=\"env +'/uploads/'+ photo\" alt=\"...\" />\r\n  </div>\r\n\r\n  <div id=\"infos\" class=\"container\">\r\n    <div id=\"name\">\r\n      <h5>{{ name }}</h5>\r\n      <h6>@{{ username }}</h6>\r\n    </div>\r\n    <div id=\"bio\">\r\n      {{ bio }}\r\n    </div>\r\n  </div>\r\n  <hr />\r\n  <div id=\"btns\" class=\"container\">\r\n    <div class=\"row\">\r\n      <div id=\"followers\" class=\"col-4\">\r\n        <button id=\"followersBtn\" class=\"btn\" [routerLink]=\"['/followers']\" routerLinkActive=\"router-link-active\">\r\n          {{ followersLength }}\r\n          followers\r\n        </button>\r\n        <!-- <button\r\n          *ngIf=\"followersLength === 1\"\r\n          id=\"followersBtn\"\r\n          class=\"btn\"\r\n          (click)=\"followersInfo()\"\r\n          routerLinkActive=\"router-link-active\"\r\n        >\r\n          {{ followersLength }}\r\n          follower\r\n        </button> -->\r\n      </div>\r\n      <div id=\"editProfileDiv\" class=\"col-4\">\r\n        <button id=\"editProfile\" class=\"btn\" [routerLink]=\"['/edit']\" routerLinkActive=\"router-link-active\">\r\n          <mat-icon style=\"float: left; margin-top: 5px;\">create</mat-icon>\r\n          edit profile\r\n        </button>\r\n      </div>\r\n      <div id=\"following\" class=\"col-4\">\r\n        <button id=\"followingBtn\" class=\"btn\" [routerLink]=\"['/following']\" routerLinkActive=\"router-link-active\">\r\n          {{ followingLength }}\r\n          following\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div class=\"row\">\r\n    <div class=\"col-4\"> -->\r\n  <app-posts-section></app-posts-section>\r\n  <!-- </div> -->\r\n  <!-- </div> -->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/posts-section/posts-section.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/posts-section/posts-section.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <mat-tab-group (selectedTabChange)=\"filter($event)\">\r\n    <mat-tab label=\"All\"></mat-tab>\r\n    <mat-tab label=\"Photos\"></mat-tab>\r\n    <mat-tab label=\"Videos\"></mat-tab>\r\n    <mat-tab label=\"Audios\"></mat-tab>\r\n  </mat-tab-group>\r\n  <mat-card id=\"card\" class=\"animated fadeInUp example-card\" *ngFor=\"let item of Filtered | reverse\">\r\n    <div id=\"content\" *ngIf=\"item.type === 'image'\" (click)=\"widePost(item.link)\">\r\n      <img mat-card-image [src]=\"env +'/uploads/' + item.link\" alt=\"\" />\r\n    </div>\r\n    <div id=\"content\" *ngIf=\"item.type === 'video'\" (click)=\"widePost(item.link)\">\r\n      <iframe class=\"card-img-top\" [src]=\"env +'/uploads/' + item.link | safe\" alt=\"Card image cap\" allowfullscreen>\r\n      </iframe>\r\n    </div>\r\n    <div id=\"content\" *ngIf=\"item.type === 'audio'\">\r\n      <audio class=\"card-img-top\" [src]=\"env +'/uploads/' + item.link | safe\" alt=\"Card image cap\" controls></audio>\r\n    </div>\r\n\r\n    <mat-card-footer class=\"footer\" id=\"footer\">\r\n      <h6>{{ item.post }}</h6>\r\n      <small>{{ item.created_at | dateAgo }}</small>\r\n      <br /><br />\r\n      <button (click)=\"delete(item.id)\" class=\"btn\">delete</button>\r\n    </mat-card-footer>\r\n  </mat-card>\r\n  <!-- <div id=\"card\" class=\"row\" *ngFor=\"let item of Data\">\r\n    <div *ngIf=\"item.type == 'image'\" style=\"width: 400px;\">\r\n      <img\r\n        class=\"card-img-top\"\r\n        [src]=\"env +'/uploads/' + item.link\"\r\n        alt=\"Card image cap\"\r\n      />\r\n\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{ item.created_at | dateAgo }}</h5>\r\n        <p class=\"card-text\">{{ item.post }}</p>\r\n        <a (click)=\"delete(item.id)\" class=\"btn btn-primary\">Delete</a>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"item.type == 'video'\" class=\"card\" style=\"width: 400px;\">\r\n      <iframe\r\n        class=\"card-img-top\"\r\n        [src]=\"env +'/uploads/' + item.link | safe\"\r\n        alt=\"Card image cap\"\r\n        allowfullscreen\r\n      >\r\n      </iframe>\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{ item.created_at | dateAgo }}</h5>\r\n        <p class=\"card-text\">{{ item.post }}</p>\r\n        <a (click)=\"delete(item.id)\" class=\"btn btn-primary\">Delete</a>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"item.type == 'audio'\" class=\"card\" style=\"width: 18rem;\">\r\n      <audio\r\n        class=\"card-img-top\"\r\n        [src]=\"env +'/uploads/' + item.link | safe\"\r\n        alt=\"Card image cap\"\r\n        controls\r\n      ></audio>\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{ item.created_at | dateAgo }}</h5>\r\n        <p class=\"card-text\">{{ item.post }}</p>\r\n        <a (click)=\"delete(item.id)\" class=\"btn btn-primary\">Delete</a>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n</div>\r\n\r\n<!-- <div id=\"posts\">\r\n  <app-post-card-component></app-post-card-component>\r\n</div> -->\r\n\r\n<!-- https://instagram.ftun4-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/81079470_180885033032053_8283358069387268417_n.jpg?_nc_ht=instagram.ftun4-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=O9wM-DGEdbAAX-ZYvmP&oh=041a0636bb14ceee374061fda31ba877&oe=5EC8D020 -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>profile works!</p> -->\r\n<app-main-side></app-main-side>\r\n\r\n<app-info-section></app-info-section>\r\n<!-- <app-posts-section></app-posts-section> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile-posts-section/user-profile-posts-section.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile-posts-section/user-profile-posts-section.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <mat-tab-group (selectedTabChange)=filter($event)>\r\n    <mat-tab label=\"All\"></mat-tab>\r\n    <mat-tab label=\"Photos\"></mat-tab>\r\n    <mat-tab label=\"Videos\"></mat-tab>\r\n    <mat-tab label=\"Audios\"></mat-tab>\r\n  </mat-tab-group>\r\n  <mat-card id=\"card\" class=\"animated fadeInUp example-card\" *ngFor=\"let item of Filtered\">\r\n    <div id=\"content\" *ngIf=\"item.type === 'image'\" (click)=\"widePost(item.link)\">\r\n      <img mat-card-image [src]=\"env +'/uploads/' + item.link\" alt=\"\" />\r\n    </div>\r\n    <div id=\"content\" *ngIf=\"item.type === 'video'\" (click)=\"widePost(item.link)\">\r\n      <iframe class=\"card-img-top\" [src]=\"env +'/uploads/' + item.link | safe\" alt=\"Card image cap\" allowfullscreen>\r\n      </iframe>\r\n    </div>\r\n    <div id=\"content\" *ngIf=\"item.type === 'audio'\">\r\n      <audio class=\"card-img-top\" [src]=\"env +'/uploads/' + item.link | safe\" alt=\"Card image cap\" controls></audio>\r\n    </div>\r\n\r\n    <mat-card-footer class=\"footer\" id=\"footer\">\r\n      <h6>{{ item.post }}</h6>\r\n      <small>{{ item.created_at | dateAgo }}</small>\r\n    </mat-card-footer>\r\n  </mat-card>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"body\" *ngFor=\"let userDatum of userData\">\r\n  <app-main-side></app-main-side>\r\n\r\n  <div id=\"pp\" class=\"container\">\r\n    <img [src]=\"env +'/uploads/' + userDatum.photo\" alt=\"...\" />\r\n  </div>\r\n\r\n  <div id=\"infos\" class=\"container\">\r\n    <div id=\"name\">\r\n      <h5>{{ userDatum.name }}</h5>\r\n      <h6>@{{ userDatum.username }}</h6>\r\n    </div>\r\n    <div id=\"bio\">\r\n      {{ userDatum.bio }}\r\n    </div>\r\n  </div>\r\n  <hr />\r\n\r\n  <div id=\"btns\" class=\"container\">\r\n    <div class=\"row\">\r\n      <div id=\"followers\" class=\"col-4\">\r\n        <button id=\"followersBtn\" class=\"btn\" [routerLink]=\"['followers']\" routerLinkActive=\"router-link-active\">\r\n          {{ followersLength }}\r\n          followers\r\n        </button>\r\n        <!-- <button\r\n          *ngIf=\"followersLength === 1\"\r\n          id=\"followersBtn\"\r\n          class=\"btn\"\r\n          (click)=\"followersInfo()\"\r\n          routerLinkActive=\"router-link-active\"\r\n        >\r\n          {{ followersLength }}\r\n          follower\r\n        </button> -->\r\n      </div>\r\n      <div id=\"editProfileDiv\" class=\"col-4\">\r\n        <button class=\"btn editProfile\" (click)=\"follow(userDatum.id)\" *ngIf=\"!followed\">\r\n          follow\r\n        </button>\r\n        <button class=\"btn editProfile\" (click)=\"unFollow(userDatum.id)\" *ngIf=\"followed\">\r\n          unfollow\r\n        </button>\r\n        <!-- <button\r\n          id=\"editProfile\"\r\n          class=\"btn\"\r\n          [routerLink]=\"['/edit']\"\r\n          routerLinkActive=\"router-link-active\"\r\n        >\r\n          <mat-icon style=\"float: left; margin-top: 5px;\">create</mat-icon>\r\n          edit profile\r\n        </button> -->\r\n      </div>\r\n      <div id=\"following\" class=\"col-4\">\r\n        <button id=\"followingBtn\" class=\"btn\" [routerLink]=\"['following']\" routerLinkActive=\"router-link-active\">\r\n          {{ followingLength }}\r\n          following\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--   \r\n  <button class=\"btn follow\" (click)=\"follow(userDatum.id)\" *ngIf=\"!followed\">\r\n    follow\r\n  </button>\r\n  <button class=\"btn follow\" (click)=\"unFollow(userDatum.id)\" *ngIf=\"followed\">\r\n    unfollow\r\n  </button> -->\r\n  <app-user-profile-posts-section [userData]=\"userData\"></app-user-profile-posts-section>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert alert-success\" *ngIf=\"notifyMessage\">{{ notifyMessage }}</div>\r\n<div id=\"body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-8\" id=\"bgImg\">\r\n      <img src=\"https://mir-s3-cdn-cf.behance.net/project_modules/fs/beb84f63616517.5ab8e5806b1c2.gif\" alt=\"\" />\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <h2>Login</h2>\r\n      <form id=\"formLogin\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"email\" formControlName=\"email\"\r\n            placeholder=\"example@example.com\" [(ngModel)]=\"email\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"********\" formControlName=\"password\"\r\n            [(ngModel)]=\"password\" />\r\n        </div>\r\n        <button [disabled]=\"!loginForm.valid\" type=\"submit\" class=\"btn btn-primary\">\r\n          login\r\n        </button>\r\n      </form>\r\n      <div *ngIf=\"errors.length > 0\" class=\"alert alert-danger\">\r\n        <p *ngFor=\"let error of errors\">\r\n          {{ error.detail }}\r\n        </p>\r\n      </div>\r\n      <!-- </div> -->\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/signup/signup.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/signup/signup.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert alert-success\" *ngIf=\"notifyMessage\">{{ notifyMessage }}</div>\r\n<div id=\"body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-5\">\r\n      <h2>Sign Up</h2>\r\n      <form id=\"formSignup\" [formGroup]=\"signupForm\" (ngSubmit)=\"signup()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Full Name*</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"name\" aria-describedby=\"name\" formControlName=\"name\"\r\n            [(ngModel)]=\"name\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"username\">User Name*</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"username\" aria-describedby=\"username\" formControlName=\"username\"\r\n            [(ngModel)]=\"username\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email*</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"email\" formControlName=\"email\"\r\n            [(ngModel)]=\"email\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password*</label>\r\n          <input #password type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"********\"\r\n            aria-describedby=\"password\" formControlName=\"password\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"confirmPassword\">Confirm Password*</label>\r\n          <input #confirmPassword type=\"password\" class=\"form-control\" id=\"confirmPassword\" placeholder=\"********\"\r\n            formControlName=\"confirmPassword\" aria-describedby=\"confirmPassword\" />\r\n        </div>\r\n\r\n        <div *ngIf=\"\r\n            confirmPassword.value !== password.value &&\r\n            signupForm.controls.password.touched &&\r\n            signupForm.controls.confirmPassword.touched\r\n          \" class=\"alert alert-danger\">\r\n          <!-- <div *ngIf=\"confirmPassword.errors.required\"> -->\r\n          Password should be the same!!.\r\n          <!-- </div> -->\r\n        </div>\r\n\r\n        <button [disabled]=\"!signupForm.valid\" type=\"submit\" class=\"btn btn-primary\">\r\n          signUp\r\n        </button>\r\n      </form>\r\n      <div *ngIf=\"errors.length > 0\" class=\"alert alert-danger\">\r\n        <p *ngFor=\"let error of errors\">\r\n          {{ error.detail }}\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-7\" id=\"bgImg\">\r\n      <img src=\"https://mir-s3-cdn-cf.behance.net/project_modules/fs/8378b263616517.5ab8e58069f97.gif\" alt=\"\" />\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/HttpRequestInterceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/HttpRequestInterceptor.ts ***!
  \*******************************************/
/*! exports provided: HttpRequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestInterceptor", function() { return HttpRequestInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/** Inject With Credentials into the request */
let HttpRequestInterceptor = class HttpRequestInterceptor {
    intercept(req, next) {
        console.log("interceptor: " + req.url);
        req = req.clone({
            withCredentials: true
        });
        return next.handle(req);
    }
};
HttpRequestInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], HttpRequestInterceptor);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/user/login/login.component */ "./src/app/pages/user/login/login.component.ts");
/* harmony import */ var _pages_landingPage_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/landingPage/landing-page/landing-page.component */ "./src/app/pages/landingPage/landing-page/landing-page.component.ts");
/* harmony import */ var _pages_user_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/user/signup/signup.component */ "./src/app/pages/user/signup/signup.component.ts");
/* harmony import */ var _pages_home_components_post_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/components/post/post.component */ "./src/app/pages/home/components/post/post.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _pages_profile_edit_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/profile/edit/edit.component */ "./src/app/pages/profile/edit/edit.component.ts");
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/user-profile/user-profile.component */ "./src/app/pages/user-profile/user-profile.component.ts");
/* harmony import */ var _pages_home_chat_chat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/home/chat/chat.component */ "./src/app/pages/home/chat/chat.component.ts");
/* harmony import */ var _pages_home_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/home/chatroom/chatroom.component */ "./src/app/pages/home/chatroom/chatroom.component.ts");
/* harmony import */ var _pages_profile_info_section_followers_followers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/profile/info-section/followers/followers.component */ "./src/app/pages/profile/info-section/followers/followers.component.ts");
/* harmony import */ var _pages_profile_info_section_following_following_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/profile/info-section/following/following.component */ "./src/app/pages/profile/info-section/following/following.component.ts");
















const routes = [
    {
        path: "",
        component: localStorage.token ? _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] : _pages_landingPage_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"]
    },
    { path: "login", component: _pages_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "signUp", component: _pages_user_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: "home", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: "post", component: _pages_home_components_post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: "profile", component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    {
        path: "users/:id",
        component: _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__["UserProfileComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    },
    { path: "edit", component: _pages_profile_edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: "chat", component: _pages_home_chat_chat_component__WEBPACK_IMPORTED_MODULE_12__["ChatComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: "chatroom", component: _pages_home_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_13__["ChatroomComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    {
        path: "followers",
        component: _pages_profile_info_section_followers_followers_component__WEBPACK_IMPORTED_MODULE_14__["FollowersComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    },
    {
        path: "following",
        component: _pages_profile_info_section_following_following_component__WEBPACK_IMPORTED_MODULE_15__["FollowingComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    },
    {
        path: "users/:id/followers",
        component: _pages_profile_info_section_followers_followers_component__WEBPACK_IMPORTED_MODULE_14__["FollowersComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    },
    {
        path: "users/:id/following",
        component: _pages_profile_info_section_following_following_component__WEBPACK_IMPORTED_MODULE_15__["FollowingComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    },
    { path: "**", component: _pages_landingPage_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#intro {\n  top: 0;\n  bottom: 0;\n  opacity: 0.8;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n}\n#intro img {\n  width: 100%;\n  height: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcMTMtMlxcVW5pdFxcY2xpZW50L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE1BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbnRybyB7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gIH1cclxufVxyXG4iLCIjaW50cm8ge1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgb3BhY2l0eTogMC44O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbn1cbiNpbnRybyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let AppComponent = class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = "Unit";
        this.refreshValue = "";
        this.counter = 0;
    }
    ngOnInit() {
        this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]["url"]}/refreshtoken`).subscribe(data => {
            console.log("we got a new token");
            console.log(data);
            console.log("localSrtorage");
            localStorage.setItem("user_id", data["payload"]["id"]);
            localStorage.setItem("email", data["payload"]["email"]);
            localStorage.setItem("token", data["token"]);
            localStorage.setItem("refreshtoken", data["refreshToken"]);
            console.log("localSrtorage", localStorage);
        });
        setInterval(() => {
            if (localStorage.getItem("refreshtoken")) {
                this.refreshValue = localStorage.getItem("refreshtoken");
            }
            this.counter++;
            console.log(this.counter, "counter from client");
            return this.http
                .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]["url"]}/refreshtoken`)
                .subscribe(data => {
                console.log("we got a new token");
                console.log(data);
                console.log("localSrtorage");
                localStorage.setItem("user_id", data["payload"]["id"]);
                localStorage.setItem("email", data["payload"]["email"]);
                localStorage.setItem("token", data["token"]);
                localStorage.setItem("refreshtoken", data["refreshToken"]);
                console.log("localSrtorage", localStorage);
            });
        }, 240000); // keep it  30 * 60 * 1000
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_user_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/user/login/login.component */ "./src/app/pages/user/login/login.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pages_home_components_post_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/home/components/post/post.component */ "./src/app/pages/home/components/post/post.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _pages_user_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/user/signup/signup.component */ "./src/app/pages/user/signup/signup.component.ts");
/* harmony import */ var _pages_landingPage_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/landingPage/landing-page/landing-page.component */ "./src/app/pages/landingPage/landing-page/landing-page.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _pages_profile_edit_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/profile/edit/edit.component */ "./src/app/pages/profile/edit/edit.component.ts");
/* harmony import */ var _pages_profile_info_section_info_section_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/profile/info-section/info-section.component */ "./src/app/pages/profile/info-section/info-section.component.ts");
/* harmony import */ var _pages_profile_posts_section_posts_section_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/profile/posts-section/posts-section.component */ "./src/app/pages/profile/posts-section/posts-section.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _pages_home_components_post_card_component_post_card_component_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/home/components/post-card-component/post-card-component.component */ "./src/app/pages/home/components/post-card-component/post-card-component.component.ts");
/* harmony import */ var _HttpRequestInterceptor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./HttpRequestInterceptor */ "./src/app/HttpRequestInterceptor.ts");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pipes/safe.pipe */ "./src/app/pipes/safe.pipe.ts");
/* harmony import */ var _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pipes/reverse.pipe */ "./src/app/pipes/reverse.pipe.ts");
/* harmony import */ var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pipes/date-ago.pipe */ "./src/app/pipes/date-ago.pipe.ts");
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/user-profile/user-profile.component */ "./src/app/pages/user-profile/user-profile.component.ts");
/* harmony import */ var _pages_user_profile_user_profile_posts_section_user_profile_posts_section_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/user-profile/user-profile-posts-section/user-profile-posts-section.component */ "./src/app/pages/user-profile/user-profile-posts-section/user-profile-posts-section.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _pages_home_chat_chat_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/home/chat/chat.component */ "./src/app/pages/home/chat/chat.component.ts");
/* harmony import */ var _pages_home_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/home/chatroom/chatroom.component */ "./src/app/pages/home/chatroom/chatroom.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var angular2_flash_messages_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! angular2-flash-messages/module */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages_module__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages_module__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _pages_home_components_main_side_main_side_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/home/components/main-side/main-side.component */ "./src/app/pages/home/components/main-side/main-side.component.ts");
/* harmony import */ var _pages_home_components_following_side_following_side_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/home/components/following-side/following-side.component */ "./src/app/pages/home/components/following-side/following-side.component.ts");
/* harmony import */ var _pages_profile_info_section_followers_followers_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/profile/info-section/followers/followers.component */ "./src/app/pages/profile/info-section/followers/followers.component.ts");
/* harmony import */ var _pages_profile_info_section_following_following_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/profile/info-section/following/following.component */ "./src/app/pages/profile/info-section/following/following.component.ts");

 // use this













































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _pages_user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _pages_home_components_post_post_component__WEBPACK_IMPORTED_MODULE_10__["PostComponent"],
            _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
            _pages_user_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
            _pages_landingPage_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_16__["LandingPageComponent"],
            _pages_profile_edit_edit_component__WEBPACK_IMPORTED_MODULE_23__["EditComponent"],
            _pages_profile_info_section_info_section_component__WEBPACK_IMPORTED_MODULE_24__["InfoSectionComponent"],
            _pages_profile_posts_section_posts_section_component__WEBPACK_IMPORTED_MODULE_25__["PostsSectionComponent"],
            _pages_home_components_post_card_component_post_card_component_component__WEBPACK_IMPORTED_MODULE_27__["PostCardComponentComponent"],
            _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_30__["SafePipe"],
            _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_31__["ReversePipe"],
            _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_32__["DateAgoPipe"],
            _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_33__["UserProfileComponent"],
            _pages_user_profile_user_profile_posts_section_user_profile_posts_section_component__WEBPACK_IMPORTED_MODULE_34__["UserProfilePostsSectionComponent"],
            _pages_home_chat_chat_component__WEBPACK_IMPORTED_MODULE_36__["ChatComponent"],
            _pages_home_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_37__["ChatroomComponent"],
            _pages_home_components_main_side_main_side_component__WEBPACK_IMPORTED_MODULE_42__["MainSideComponent"],
            _pages_home_components_following_side_following_side_component__WEBPACK_IMPORTED_MODULE_43__["FollowingSideComponent"],
            _pages_profile_info_section_followers_followers_component__WEBPACK_IMPORTED_MODULE_44__["FollowersComponent"],
            _pages_profile_info_section_following_following_component__WEBPACK_IMPORTED_MODULE_45__["FollowingComponent"]
        ],
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_35__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_29__["SweetAlert2Module"],
            _angular_http__WEBPACK_IMPORTED_MODULE_41__["HttpModule"]
        ],
        providers: [
            _pages_user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"],
            angular2_flash_messages_module__WEBPACK_IMPORTED_MODULE_40__["FlashMessagesService"],
            _user_service__WEBPACK_IMPORTED_MODULE_38__["UserService"],
            _auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"],
            _websocket_service__WEBPACK_IMPORTED_MODULE_39__["WebsocketService"],
            [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                    useClass: _HttpRequestInterceptor__WEBPACK_IMPORTED_MODULE_28__["HttpRequestInterceptor"],
                    multi: true
                }
            ]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



// import { LoginComponent } from "./user/login/login.component";




let AuthGuard = class AuthGuard {
    constructor(
    // private _authService: LoginComponent,
    _router, http, userService) {
        this._router = _router;
        this.http = http;
        this.userService = userService;
        // static canActivate() {
        //   throw new Error("Method not implemented.");
        // }
        this.tokenValue = "";
    }
    canActivate() {
        // if (localStorage.getItem("token")) {
        //   this.tokenValue = localStorage.getItem("token").slice(7);
        // }
        console.log(this.tokenValue, "token from client");
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"]["url"]}/auth`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            console.log(data["message"]);
            if (data["message"] === "all good") {
                if (this.userService.loggedIn()) {
                    return true;
                }
                else {
                    this._router.navigate(["/login"]);
                    return false;
                }
            }
            localStorage.clear();
            this._router.navigate(["/login"]);
            return false;
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#footer {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 100vh;\n  flex-shrink: none;\n  background: -webkit-gradient(linear, left top, right top, from(#ba4555), to(#ba4555));\n  background: linear-gradient(to right, #ba4555, #ba4555);\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcMTMtMlxcVW5pdFxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUVBLHFGQUFBO0VBQUEsdURBQUE7RUFDQSxZQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vdGVyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMTAwdmg7XHJcbiAgZmxleC1zaHJpbms6IG5vbmU7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2JhNDU1NTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNiYTQ1NTUsICNiYTQ1NTUpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4iLCIjZm9vdGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxMDB2aDtcbiAgZmxleC1zaHJpbms6IG5vbmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2JhNDU1NSwgI2JhNDU1NSk7XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/nav/nav.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#navBarLandingPg {\n  z-index: 1;\n  background-color: #ba4555;\n}\n#navBarLandingPg a {\n  text-decoration: none;\n  color: white;\n}\n#navBarLandingPg .checkbtn {\n  font-size: 30px;\n  color: white;\n  float: right;\n  margin-right: 40px;\n  cursor: pointer;\n  display: none;\n}\n#navBarLandingPg .nav-wrapper #logo {\n  margin-left: 100px;\n}\n#navBarLandingPg .nav-wrapper #logo:hover {\n  background: transparent;\n}\n#navBarLandingPg .nav-wrapper #nav-left {\n  margin-left: 150px;\n}\n#navBarLandingPg .nav-wrapper #nav-left li:hover {\n  border-top-right-radius: 20%;\n  border-top-left-radius: 20%;\n  background: -webkit-gradient(linear, left top, left bottom, from(#dbc602), to(#b6b301));\n  background: linear-gradient(to bottom, #dbc602, #b6b301);\n}\n#navBarLandingPg .nav-wrapper #nav-left li {\n  margin-right: 50px;\n}\n#navBarLandingPg .nav-wrapper #searchBar {\n  position: absolute;\n  top: 0;\n  margin-left: 43%;\n  text-align: center;\n  width: 20%;\n}\n#navBarLandingPg .nav-wrapper #searchBar form {\n  color: white;\n}\n#navBarLandingPg .nav-wrapper #nav-right {\n  margin-right: 150px;\n}\n#navBarLandingPg .nav-wrapper #nav-right li:hover {\n  border-top-right-radius: 20%;\n  border-top-left-radius: 20%;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#0c2a4e), to(#1f518d));\n  background-image: linear-gradient(to top, #0c2a4e 0%, #1f518d 100%);\n}\n#navBarLandingPg .nav-wrapper #nav-right li {\n  margin-right: 50px;\n}\n#profile {\n  text-align: center;\n  float: right;\n  margin-right: 100px;\n  padding-top: 3px;\n  height: 64px;\n}\n#profile:hover {\n  border-top-right-radius: 20%;\n  border-top-left-radius: 20%;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#0c2a4e), to(#1f518d));\n  background-image: linear-gradient(to top, #0c2a4e 0%, #1f518d 100%);\n}\n#profile #list {\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#0c2a4e), to(#1f518d));\n  background-image: linear-gradient(to top, #0c2a4e 0%, #1f518d 100%);\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n#profile #list .pro {\n  border-radius: 10px;\n  color: white;\n  text-decoration: none;\n  text-align: center;\n}\n#profile #list .pro:hover {\n  color: white;\n  background-color: rgba(0, 0, 0, 0.418);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYvQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcMTMtMlxcVW5pdFxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQWVBLHlCQUFBO0FDYkY7QURERTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQ0dKO0FEREU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDR0o7QURLSTtFQUNFLGtCQUFBO0FDSE47QURJTTtFQUNFLHVCQUFBO0FDRlI7QURLSTtFQUNFLGtCQUFBO0FDSE47QURJTTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1RkFBQTtFQUFBLHdEQUFBO0FDRlI7QURJTTtFQUNFLGtCQUFBO0FDRlI7QURNSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDSk47QURNTTtFQUNFLFlBQUE7QUNKUjtBRFFJO0VBQ0UsbUJBQUE7QUNOTjtBRE9NO0VBQ0UsNEJBQUE7RUFDQSwyQkFBQTtFQUVBLDZGQUFBO0VBQUEsbUVBQUE7QUNOUjtBRFFNO0VBQ0Usa0JBQUE7QUNOUjtBRDhDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDM0NGO0FENENFO0VBQ0UsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDZGQUFBO0VBQUEsbUVBQUE7QUMxQ0o7QUQ2Q0U7RUFDRSw2RkFBQTtFQUFBLG1FQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQzNDSjtBRDRDSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUMxQ047QUQyQ007RUFDRSxZQUFBO0VBQ0Esc0NBQUE7QUN6Q1IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2QmFyTGFuZGluZ1BnIHtcclxuICB6LWluZGV4OiAxO1xyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuY2hlY2tidG4ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYTQ1NTU7XHJcblxyXG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwYjRkYiwgIzAwODNiMCk7XHJcbiAgLm5hdi13cmFwcGVyIHtcclxuICAgICNsb2dvIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgI25hdi1sZWZ0IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG4gICAgICBsaTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2RiYzYwMiwgI2I2YjMwMSk7XHJcbiAgICAgIH1cclxuICAgICAgbGkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNzZWFyY2hCYXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQzJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG5cclxuICAgICAgZm9ybSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI25hdi1yaWdodCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTUwcHg7XHJcbiAgICAgIGxpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjAlO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwJTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmYwMDk5LCAjNDkzMjQwKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMGMyYTRlIDAlLCAjMWY1MThkIDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIHJlc3BvbnNpdmUgbmF2IGJhclxyXG4vLyBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuLy8gICAjbmF2QmFyTGFuZGluZ1BnIC5jaGVja2J0biB7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICB9XHJcbi8vICAgI25hdkJhckxhbmRpbmdQZyAjdWwge1xyXG4vLyAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4vLyAgICAgYmFja2dyb3VuZDogIzJjM2U1MDtcclxuLy8gICAgIHRvcDogNjNweDtcclxuLy8gICAgIHJpZ2h0OiAtMTAwJTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4vLyAgIH1cclxuLy8gICAjbmF2QmFyTGFuZGluZ1BnICN1bCBsaSBhIHtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgbWFyZ2luOiA1MHB4IDA7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuLy8gICB9XHJcbi8vICAgI25hdkJhckxhbmRpbmdQZyAjdWwgbGkgYSB7XHJcbi8vICAgICBmb250LXNpemU6IDIwcHg7XHJcbi8vICAgfVxyXG4vLyAgICNuYXZCYXJMYW5kaW5nUGcgI3VsIGxpIGE6aG92ZXIsXHJcbi8vICAgI25hdkJhckxhbmRpbmdQZyAjdWwgbGkgYS5hY3RpdmUge1xyXG4vLyAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuLy8gICAgIGNvbG9yOiAjMDA4MmU2O1xyXG4vLyAgIH1cclxuLy8gICAjY2hlY2s6Y2hlY2tlZCB+ICN1bCB7XHJcbi8vICAgICByaWdodDogMDtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbiNwcm9maWxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDNweDtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjAlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzBjMmE0ZSAwJSwgIzFmNTE4ZCAxMDAlKTtcclxuICB9XHJcblxyXG4gICNsaXN0IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwYzJhNGUgMCUsICMxZjUxOGQgMTAwJSk7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICAucHJvIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40MTgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiNuYXZCYXJMYW5kaW5nUGcge1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmE0NTU1O1xufVxuI25hdkJhckxhbmRpbmdQZyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG4jbmF2QmFyTGFuZGluZ1BnIC5jaGVja2J0biB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBub25lO1xufVxuI25hdkJhckxhbmRpbmdQZyAubmF2LXdyYXBwZXIgI2xvZ28ge1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG4jbmF2QmFyTGFuZGluZ1BnIC5uYXYtd3JhcHBlciAjbG9nbzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuI25hdkJhckxhbmRpbmdQZyAubmF2LXdyYXBwZXIgI25hdi1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xufVxuI25hdkJhckxhbmRpbmdQZyAubmF2LXdyYXBwZXIgI25hdi1sZWZ0IGxpOmhvdmVyIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZGJjNjAyLCAjYjZiMzAxKTtcbn1cbiNuYXZCYXJMYW5kaW5nUGcgLm5hdi13cmFwcGVyICNuYXYtbGVmdCBsaSB7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cbiNuYXZCYXJMYW5kaW5nUGcgLm5hdi13cmFwcGVyICNzZWFyY2hCYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbWFyZ2luLWxlZnQ6IDQzJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjAlO1xufVxuI25hdkJhckxhbmRpbmdQZyAubmF2LXdyYXBwZXIgI3NlYXJjaEJhciBmb3JtIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuI25hdkJhckxhbmRpbmdQZyAubmF2LXdyYXBwZXIgI25hdi1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogMTUwcHg7XG59XG4jbmF2QmFyTGFuZGluZ1BnIC5uYXYtd3JhcHBlciAjbmF2LXJpZ2h0IGxpOmhvdmVyIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMGMyYTRlIDAlLCAjMWY1MThkIDEwMCUpO1xufVxuI25hdkJhckxhbmRpbmdQZyAubmF2LXdyYXBwZXIgI25hdi1yaWdodCBsaSB7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuI3Byb2ZpbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuI3Byb2ZpbGU6aG92ZXIge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwYzJhNGUgMCUsICMxZjUxOGQgMTAwJSk7XG59XG4jcHJvZmlsZSAjbGlzdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwYzJhNGUgMCUsICMxZjUxOGQgMTAwJSk7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xufVxuI3Byb2ZpbGUgI2xpc3QgLnBybyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jcHJvZmlsZSAjbGlzdCAucHJvOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDE4KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let NavComponent = class NavComponent {
    constructor(http, router, _http) {
        this.http = http;
        this.router = router;
        this._http = _http;
        this.user_id = localStorage.getItem("user_id");
    }
    ngOnInit() {
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
        this._http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"]["url"]}/findById`, { user_id: this.user_id })
            .subscribe(data => {
            console.log(data);
            this.photo = data[0]["photo"];
        });
        var check = setInterval(() => {
            this.token = localStorage.token;
            if (this.token) {
                // document.getElementById("navBarLandingPg").style.backgroundColor =
                //   "#00b0ff";
                document.getElementById("navBarLandingPg").style.position =
                    "webkit-sticky";
                document.getElementById("navBarLandingPg").style.position = "fixed";
                clearInterval(check);
            }
        }, 200);
    }
    logout() {
        localStorage.removeItem("token");
        const id = Number(localStorage.getItem("user_id"));
        console.log("idddd", id);
        this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"]["url"]}/logout`, { id }).subscribe(data => {
            console.log(data);
            localStorage.clear();
        });
    }
    routing() {
        if (localStorage.token) {
            this.router.navigate(["/home"]);
        }
        else {
            this.router.navigate(["/"]);
        }
    }
    lookUp() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "Search by Username",
            showClass: {
                popup: "animated fadeInDownBig"
            },
            hideClass: {
                popup: "animated fadeOutUpBig"
            },
            input: "text",
            inputAttributes: {
                autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Search",
            showLoaderOnConfirm: true,
            preConfirm: username => {
                return this.http
                    .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"]["url"]}/findUser`, { username: username })
                    .subscribe(response => {
                    console.log(response, "ressssponnnnnse");
                    if (response["length"] < 1) {
                        return sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                            icon: "info",
                            text: "This user is not there !!"
                        });
                    }
                    else {
                        console.log(response);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                            title: `${response[0].username}`,
                            imageUrl: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"]["url"]}/uploads/${response[0].photo}`,
                            showCancelButton: true,
                            cancelButtonText: "close",
                            confirmButtonText: "view profile"
                        }).then(result => {
                            // console.log();
                            if (result.value)
                                this.router.navigate([`users/${response[0].id}`]);
                        });
                    }
                });
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.isLoading()
        });
    }
};
NavComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-nav",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.scss */ "./src/app/components/nav/nav.component.scss")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let HttpService = class HttpService {
    // profile: Subject<object> = new Subject();
    constructor(_http) {
        this._http = _http;
        this.newPost = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.newUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    getAllPosts() {
        return this._http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/getAllPosts`);
    }
    getAllUsers() {
        return this._http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/getAllUsers`);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], HttpService);



/***/ }),

/***/ "./src/app/pages/home/chat/chat.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/home/chat/chat.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#body {\n  background-color: #201d2f;\n  bottom: 0;\n  padding-bottom: 15px;\n  min-height: 100vh;\n}\n#body #contacts {\n  padding-top: 8%;\n  color: white;\n}\n#body #contacts #pp img {\n  box-shadow: 1px -1px 31px -7px rgba(0, 0, 0, 0.75);\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 100%;\n  width: 60px;\n  max-height: 60px;\n  min-height: 60px;\n}\n#body #contacts #contact {\n  width: 50%;\n  padding: 1%;\n  border-radius: 20px;\n  box-shadow: 1px -1px 31px -7px rgba(0, 0, 0, 0.75);\n}\n#body #contacts #contact:hover {\n  cursor: pointer;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  background-color: #00b0ff;\n}\n#body #contacts #contact:focus {\n  outline: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jaGF0L0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXDEzLTJcXFVuaXRcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGNoYXRcXGNoYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0NKO0FER007RUFDRSxrREFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDRFI7QURLSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrREFBQTtBQ0hOO0FESU07RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLHlCQUFBO0FDRlI7QURLTTtFQUNFLFVBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDFkMmY7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIG1pbi1oZWlnaHQgOjEwMHZoO1xyXG5cclxuICAjY29udGFjdHMge1xyXG4gICAgcGFkZGluZy10b3A6IDglO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICNwcCB7XHJcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMzFweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjY29udGFjdCB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIHBhZGRpbmc6IDElO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggLTFweCAzMXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjBmZjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIjYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDFkMmY7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuI2JvZHkgI2NvbnRhY3RzIHtcbiAgcGFkZGluZy10b3A6IDglO1xuICBjb2xvcjogd2hpdGU7XG59XG4jYm9keSAjY29udGFjdHMgI3BwIGltZyB7XG4gIGJveC1zaGFkb3c6IDFweCAtMXB4IDMxcHggLTdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDYwcHg7XG4gIG1heC1oZWlnaHQ6IDYwcHg7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG59XG4jYm9keSAjY29udGFjdHMgI2NvbnRhY3Qge1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAxJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMXB4IC0xcHggMzFweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG4jYm9keSAjY29udGFjdHMgI2NvbnRhY3Q6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGIwZmY7XG59XG4jYm9keSAjY29udGFjdHMgI2NvbnRhY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ChatComponent = class ChatComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]["url"];
        this.userService.getUsers().subscribe(users => {
            // console.log(users.json(), "u");
            var toShow = users.json();
            var result = [];
            for (var i = 0; i < toShow.length; i++) {
                if (toShow[i]["follower_id"] == localStorage.getItem("user_id")) {
                    result.push(toShow[i]);
                }
            }
            this.Users = result;
        });
    }
    getUser() {
        return this.userService.getLoggedInUser().username;
    }
};
ChatComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
];
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-chat",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/chat/chat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.component.scss */ "./src/app/pages/home/chat/chat.component.scss")).default]
    })
], ChatComponent);



/***/ }),

/***/ "./src/app/pages/home/chatroom/chatroom.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/home/chatroom/chatroom.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  font-size: 18px;\n  padding: 10px 20px;\n  color: black;\n  font-weight: bold;\n}\n\n#mario-chat {\n  padding-top: 70px;\n  max-width: 900px;\n  min-width: 500px;\n  margin: 30px auto;\n  border: 1px solid #ddd;\n  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.05);\n  border-radius: 2px;\n  border-radius: 10px;\n}\n\n#chat-window {\n  height: 400px;\n  overflow: auto;\n  background: #e2e2e2;\n}\n\n#output p {\n  padding: 14px 0px;\n  margin: 0 20px;\n  border-bottom: 1px solid #e9e9e9;\n  color: #555;\n}\n\n#output {\n  height: 500px;\n}\n\n#feedback p {\n  color: #aaa;\n  padding: 14px 0px;\n  margin: 0 20px;\n}\n\n.chat-output {\n  height: 500px;\n}\n\nlabel {\n  box-sizing: border-box;\n  display: block;\n  padding: 10px 20px;\n}\n\ninput {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  background: #eee;\n  border: 0;\n  display: block;\n  width: 100%;\n  background: #fff;\n  border-bottom: 1px solid #eee;\n  font-family: Nunito;\n  font-size: 16px;\n}\n\n#send {\n  background: #dc3545;\n  color: #fff;\n  font-size: 18px;\n  border: 0;\n  padding: 12px 0;\n  width: 100%;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n#leave {\n  background: skyblue;\n  color: #fff;\n  font-size: 18px;\n  border: 0;\n  padding: 12px 0;\n  width: 100%;\n  border-radius: 0 0 2px 2px;\n}\n\n.userMessage {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 70%;\n  background-color: #dc3545;\n  padding: 10px;\n  border-radius: 5px;\n  margin-top: 1px;\n  color: white;\n}\n\n.secUserMessage {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 70%;\n  background-color: #91474e;\n  padding: 10px;\n  border-radius: 5px;\n  margin-top: 1px;\n  color: white;\n}\n\n.isTyping {\n  color: #888787;\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jaGF0cm9vbS9DOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFwxMy0yXFxVbml0XFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxjaGF0cm9vbVxcY2hhdHJvb20uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvY2hhdHJvb20vY2hhdHJvb20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvY2hhdHJvb20vY2hhdHJvb20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNtYXJpby1jaGF0IHtcclxuICBwYWRkaW5nLXRvcDogNzBweDtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBib3gtc2hhZG93OiAxcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4jY2hhdC13aW5kb3cge1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2UyZTJlMjtcclxufVxyXG5cclxuI291dHB1dCBwIHtcclxuICBwYWRkaW5nOiAxNHB4IDBweDtcclxuICBtYXJnaW46IDAgMjBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcclxuICBjb2xvcjogIzU1NTtcclxufVxyXG5cclxuI291dHB1dCB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuI2ZlZWRiYWNrIHAge1xyXG4gIGNvbG9yOiAjYWFhO1xyXG4gIHBhZGRpbmc6IDE0cHggMHB4O1xyXG4gIG1hcmdpbjogMCAyMHB4O1xyXG59XHJcblxyXG4uY2hhdC1vdXRwdXQge1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbiNzZW5kIHtcclxuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMTJweCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jbGVhdmUge1xyXG4gIGJhY2tncm91bmQ6IHNreWJsdWU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDJweCAycHg7XHJcbn1cclxuXHJcbi51c2VyTWVzc2FnZSB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIG1heC13aWR0aDogNzAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlY1VzZXJNZXNzYWdlIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxNDc0ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaXNUeXBpbmcge1xyXG4gIGNvbG9yOiAjODg4Nzg3O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbiIsImgyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNtYXJpby1jaGF0IHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIG1pbi13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3gtc2hhZG93OiAxcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNjaGF0LXdpbmRvdyB7XG4gIGhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZTJlMmUyO1xufVxuXG4jb3V0cHV0IHAge1xuICBwYWRkaW5nOiAxNHB4IDBweDtcbiAgbWFyZ2luOiAwIDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xuICBjb2xvcjogIzU1NTtcbn1cblxuI291dHB1dCB7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbiNmZWVkYmFjayBwIHtcbiAgY29sb3I6ICNhYWE7XG4gIHBhZGRpbmc6IDE0cHggMHB4O1xuICBtYXJnaW46IDAgMjBweDtcbn1cblxuLmNoYXQtb3V0cHV0IHtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxubGFiZWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG5pbnB1dCB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgYm9yZGVyOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICBmb250LWZhbWlseTogTnVuaXRvO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbiNzZW5kIHtcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAxMnB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNsZWF2ZSB7XG4gIGJhY2tncm91bmQ6IHNreWJsdWU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMTJweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDJweCAycHg7XG59XG5cbi51c2VyTWVzc2FnZSB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LXdpZHRoOiA3MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZWNVc2VyTWVzc2FnZSB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LXdpZHRoOiA3MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MTQ3NGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pc1R5cGluZyB7XG4gIGNvbG9yOiAjODg4Nzg3O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/chatroom/chatroom.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/home/chatroom/chatroom.component.ts ***!
  \***********************************************************/
/*! exports provided: ChatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomComponent", function() { return ChatroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let ChatroomComponent = class ChatroomComponent {
    constructor(route, webSocketService, userService, router) {
        this.route = route;
        this.webSocketService = webSocketService;
        this.userService = userService;
        this.router = router;
        this.messageArray = [];
        this.isTyping = false;
        this.webSocketService.newMessageReceived().subscribe(data => {
            this.messageArray.push(data);
            this.isTyping = false;
        });
        this.webSocketService.receivedTyping().subscribe(bool => {
            this.isTyping = bool.isTyping;
        });
    }
    ngOnInit() {
        this.username = this.route.snapshot.queryParamMap.get("name");
        this.email = this.route.snapshot.queryParamMap.get("email");
        const currentUser = this.userService.getLoggedInUser();
        if (currentUser.username < this.username) {
            this.chatroom = currentUser.username.concat(this.username);
        }
        else {
            this.chatroom = this.username.concat(currentUser.username);
        }
        this.webSocketService.joinRoom({
            user: this.userService.getLoggedInUser().username,
            room: this.chatroom
        });
        this.userService.getChatRoomsChat(this.chatroom).subscribe(messages => {
            this.messageArray = messages.json();
            console.log(this.messageArray);
        });
    }
    Enter(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            this.sendMessage();
        }
    }
    sendMessage() {
        this.webSocketService.sendMessage({
            room: this.chatroom,
            user: this.userService.getLoggedInUser().username,
            message: this.message
        });
        this.message = "";
    }
    typing() {
        this.webSocketService.typing({
            room: this.chatroom,
            user: this.userService.getLoggedInUser().username
        });
    }
};
ChatroomComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
ChatroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-chatroom",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chatroom.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/chatroom/chatroom.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chatroom.component.scss */ "./src/app/pages/home/chatroom/chatroom.component.scss")).default]
    })
], ChatroomComponent);



/***/ }),

/***/ "./src/app/pages/home/components/following-side/following-side.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/home/components/following-side/following-side.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#side {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n  box-shadow: 0px 0px 8px -5px #007bff;\n  padding: 20px;\n  text-align: center;\n  position: -webkit-sticky;\n  position: fixed;\n  background-color: transparent;\n  width: 15%;\n  height: 100%;\n  right: 0;\n  top: 30%;\n  overflow: scroll;\n}\n#side h5 {\n  font-weight: bold;\n  text-align: left;\n  color: white;\n  padding-bottom: 15px;\n}\n#side hr {\n  width: 80%;\n  background-color: #2a263d;\n}\n#side li {\n  box-shadow: 1px -1px 15px -7px rgba(0, 0, 0, 0.75);\n  color: white;\n  margin-bottom: 10px;\n  padding-top: 10px;\n  height: 60px;\n  border-top-left-radius: 30px;\n  border-bottom-left-radius: 30px;\n}\n#side li img {\n  box-shadow: 1px -1px 31px -7px rgba(0, 0, 0, 0.75);\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 100%;\n  width: 40px;\n  max-height: 40px;\n  min-height: 40px;\n}\n#side li #info {\n  text-align: left;\n}\n#side li:focus {\n  outline: 0px;\n}\n#side li:hover {\n  box-shadow: -7px 7px 5px 0px rgba(0, 0, 0, 0.75);\n  cursor: pointer;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  background-color: #ba4555;\n}\n#side li a {\n  text-decoration: none;\n  color: white;\n}\n#side #log:hover {\n  color: white !important;\n  background-color: #b80505 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL2ZvbGxvd2luZy1zaWRlL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXDEzLTJcXFVuaXRcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGNvbXBvbmVudHNcXGZvbGxvd2luZy1zaWRlXFxmb2xsb3dpbmctc2lkZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL2ZvbGxvd2luZy1zaWRlL2ZvbGxvd2luZy1zaWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBRUEsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0FKO0FERUU7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUNBSjtBREdFO0VBQ0Usa0RBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FDREo7QURHSTtFQUNFLGtEQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNETjtBRElJO0VBQ0UsZ0JBQUE7QUNGTjtBREtJO0VBQ0UsWUFBQTtBQ0hOO0FETUk7RUFDRSxnREFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EseUJBQUE7QUNKTjtBRE1JO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDSk47QURRSTtFQUNFLHVCQUFBO0VBQ0Esb0NBQUE7QUNOTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9mb2xsb3dpbmctc2lkZS9mb2xsb3dpbmctc2lkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWRlIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IC01cHgjMDA3YmZmO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2JhNDU1NTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogMTUlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDMwJTtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG5cclxuICBoNSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgaHIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTI2M2Q7XHJcbiAgfVxyXG5cclxuICBsaSB7XHJcbiAgICBib3gtc2hhZG93OiAxcHggLTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDMxcHggLTdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2luZm8ge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IC03cHggN3B4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmE0NTU1O1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuICAjbG9nIHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NCwgNSwgNSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiI3NpZGUge1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAtNXB4ICMwMDdiZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDMwJTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbiNzaWRlIGg1IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4jc2lkZSBociB7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTI2M2Q7XG59XG4jc2lkZSBsaSB7XG4gIGJveC1zaGFkb3c6IDFweCAtMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMwcHg7XG59XG4jc2lkZSBsaSBpbWcge1xuICBib3gtc2hhZG93OiAxcHggLTFweCAzMXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHdpZHRoOiA0MHB4O1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuI3NpZGUgbGkgI2luZm8ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuI3NpZGUgbGk6Zm9jdXMge1xuICBvdXRsaW5lOiAwcHg7XG59XG4jc2lkZSBsaTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IC03cHggN3B4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmE0NTU1O1xufVxuI3NpZGUgbGkgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuI3NpZGUgI2xvZzpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjgwNTA1ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/components/following-side/following-side.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/home/components/following-side/following-side.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FollowingSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingSideComponent", function() { return FollowingSideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let FollowingSideComponent = class FollowingSideComponent {
    constructor(_http) {
        this._http = _http;
        this.followData = [];
        this.following = [];
    }
    ngOnInit() {
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]["url"];
        this.getFollowing();
    }
    getFollowing() {
        this._http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]["url"]}/follow/getfollowersinfo`)
            .subscribe((data) => {
            data.forEach((element, i) => {
                this.name = data[i]["name"];
                this.username = data[i]["username"];
                this.photo = data[i]["photo"];
                this.followData.push(element);
            });
            for (var i = 0; i < this.followData.length; i++) {
                if (this.followData[i]["follower_id"] == localStorage.getItem("user_id")) {
                    this.following.push(this.followData[i]);
                }
            }
        });
        console.log("people u follow", this.following);
    }
};
FollowingSideComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FollowingSideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-following-side",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./following-side.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/following-side/following-side.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./following-side.component.scss */ "./src/app/pages/home/components/following-side/following-side.component.scss")).default]
    })
], FollowingSideComponent);



/***/ }),

/***/ "./src/app/pages/home/components/main-side/main-side.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/home/components/main-side/main-side.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#side {\n  box-shadow: 0px 0px 8px -5px #007bff;\n  padding: 20px;\n  text-align: center;\n  position: -webkit-sticky;\n  position: fixed;\n  background-color: transparent;\n  width: 15%;\n  height: 35%;\n  left: 0;\n  top: 10%;\n  min-width: 300px;\n}\n#side hr {\n  width: 80%;\n  background-color: #2a263d;\n}\n#side li {\n  color: white;\n  margin-bottom: 10px;\n  height: 25px;\n}\n#side li:focus {\n  outline: 0px;\n}\n#side li:hover {\n  box-shadow: -7px 7px 5px 0px rgba(0, 0, 0, 0.75);\n  cursor: pointer;\n  color: #201d2f;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  background-color: #ffb500;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n#side li a {\n  text-decoration: none;\n  color: white;\n}\n#side #log:hover {\n  color: white !important;\n  background-color: #b80505 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL21haW4tc2lkZS9DOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFwxMy0yXFxVbml0XFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxjb21wb25lbnRzXFxtYWluLXNpZGVcXG1haW4tc2lkZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL21haW4tc2lkZS9tYWluLXNpZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUVBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FDREY7QURHRTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQ0RKO0FESUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRko7QURJSTtFQUNFLFlBQUE7QUNGTjtBREtJO0VBQ0UsZ0RBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUNITjtBREtJO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDSE47QURPSTtFQUNFLHVCQUFBO0VBQ0Esb0NBQUE7QUNMTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9tYWluLXNpZGUvbWFpbi1zaWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NpZGUge1xyXG4gIC8vIGJveC1zaGFkb3c6IDFweCAtMXB4IDEwcHggLTdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IC01cHggIzAwN2JmZjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNiYTQ1NTU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDE1JTtcclxuICBoZWlnaHQ6IDM1JTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMTAlO1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcblxyXG4gIGhyIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyNjNkO1xyXG4gIH1cclxuXHJcbiAgbGkge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAtN3B4IDdweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgY29sb3I6ICMyMDFkMmY7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmI1MDA7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgI2xvZyB7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODQsIDUsIDUpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiNzaWRlIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggLTVweCAjMDA3YmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAzNSU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTAlO1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuI3NpZGUgaHIge1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyNjNkO1xufVxuI3NpZGUgbGkge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGhlaWdodDogMjVweDtcbn1cbiNzaWRlIGxpOmZvY3VzIHtcbiAgb3V0bGluZTogMHB4O1xufVxuI3NpZGUgbGk6aG92ZXIge1xuICBib3gtc2hhZG93OiAtN3B4IDdweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMyMDFkMmY7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI1MDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbn1cbiNzaWRlIGxpIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNzaWRlICNsb2c6aG92ZXIge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4MDUwNSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/components/main-side/main-side.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/home/components/main-side/main-side.component.ts ***!
  \************************************************************************/
/*! exports provided: MainSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSideComponent", function() { return MainSideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let MainSideComponent = class MainSideComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        var check = setInterval(() => {
            this.token = localStorage.token;
            if (this.token) {
                clearInterval(check);
            }
        }, 200);
    }
    logout() {
        console.log("hi");
        localStorage.removeItem("token");
        const id = Number(localStorage.getItem("user_id"));
        this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]["url"]}/logout`, { id }).subscribe(data => {
            localStorage.clear();
        });
    }
};
MainSideComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MainSideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-main-side",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-side.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/main-side/main-side.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-side.component.scss */ "./src/app/pages/home/components/main-side/main-side.component.scss")).default]
    })
], MainSideComponent);



/***/ }),

/***/ "./src/app/pages/home/components/post-card-component/post-card-component.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/home/components/post-card-component/post-card-component.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#cardHeader {\n  width: 50%;\n}\n#cardHeader:hover {\n  cursor: pointer;\n}\n.example-card {\n  box-shadow: 1px -1px 31px -7px rgba(0, 0, 0, 0.75);\n  border-radius: 10px;\n  color: white;\n  background-color: #2a263d;\n  margin-top: 30px;\n  max-width: 500px;\n  max-height: 1400px;\n}\n.example-card #content {\n  padding-top: 2%;\n}\n.example-card #footer {\n  text-align: center;\n  padding-bottom: 2%;\n}\n.example-header-image {\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL3Bvc3QtY2FyZC1jb21wb25lbnQvQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcMTMtMlxcVW5pdFxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcY29tcG9uZW50c1xccG9zdC1jYXJkLWNvbXBvbmVudFxccG9zdC1jYXJkLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL3Bvc3QtY2FyZC1jb21wb25lbnQvcG9zdC1jYXJkLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFVBQUE7QUNBRjtBRENFO0VBQ0UsZUFBQTtBQ0NKO0FER0E7RUFDRSxrREFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURDRTtFQUNFLGVBQUE7QUNDSjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FER0E7RUFFRSxzQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL3Bvc3QtY2FyZC1jb21wb25lbnQvcG9zdC1jYXJkLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYXJkSGVhZGVyIHtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDFweCAtMXB4IDMxcHggLTdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTI2M2Q7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDE0MDBweDtcclxuICAjY29udGVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgfVxyXG4gICNmb290ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gIH1cclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuIiwiI2NhcmRIZWFkZXIge1xuICB3aWR0aDogNTAlO1xufVxuI2NhcmRIZWFkZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5leGFtcGxlLWNhcmQge1xuICBib3gtc2hhZG93OiAxcHggLTFweCAzMXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyNjNkO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXgtaGVpZ2h0OiAxNDAwcHg7XG59XG4uZXhhbXBsZS1jYXJkICNjb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDIlO1xufVxuLmV4YW1wbGUtY2FyZCAjZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/components/post-card-component/post-card-component.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/home/components/post-card-component/post-card-component.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PostCardComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCardComponentComponent", function() { return PostCardComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let PostCardComponentComponent = class PostCardComponentComponent {
    constructor(_http) {
        this._http = _http;
    }
    ngOnInit() {
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"];
        this._http.newPost.subscribe(data => {
            this.posts = data;
        });
    }
    widePost(link) {
        console.log(link);
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            showClass: {
                popup: "animated bounceIn"
            },
            hideClass: {
                popup: "animated bounceOut"
            },
            background: "transparent",
            heightAuto: true,
            width: 700,
            showConfirmButton: false,
            imageUrl: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/uploads/${link}`
        });
    }
};
PostCardComponentComponent.ctorParameters = () => [
    { type: src_app_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostCardComponentComponent.prototype, "posts", void 0);
PostCardComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-post-card-component",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-card-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/post-card-component/post-card-component.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-card-component.component.scss */ "./src/app/pages/home/components/post-card-component/post-card-component.component.scss")).default]
    })
], PostCardComponentComponent);



/***/ }),

/***/ "./src/app/pages/home/components/post/post.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/home/components/post/post.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#uploadContainer {\n  box-shadow: 1px -1px 31px -7px rgba(0, 0, 0, 0.75);\n  height: 200px;\n  width: 500px;\n  margin-top: 2%;\n  margin-left: 23%;\n  text-align: center;\n  color: white;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  padding-top: 1%;\n  background-color: #2a263d;\n}\n#uploadContainer textarea {\n  -webkit-padding-start: 10px;\n          padding-inline-start: 10px;\n  -webkit-padding-before: 10px;\n          padding-block-start: 10px;\n  color: white;\n  height: 60px;\n  border: none;\n  width: 95%;\n  text-decoration: none;\n  resize: none;\n}\n#uploadContainer textarea:focus {\n  outline: 0px;\n}\n#uploadContainer hr {\n  width: 90%;\n  background-color: #2a263d;\n}\n#uploadContainer .image-upload {\n  float: left;\n  width: 25px;\n  height: 25px;\n}\n#uploadContainer .image-upload p {\n  color: #f6f6f6;\n}\n#uploadContainer .image-upload #uploadIcon {\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  color: #00b0ff;\n}\n#uploadContainer .image-upload #uploadIcon:hover {\n  color: rgba(255, 255, 255, 0.76);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n#uploadContainer .image-upload input {\n  display: none;\n}\n#uploadContainer .image-upload img {\n  width: 80px;\n}\n#uploadContainer button {\n  border: none;\n  border-radius: 10px;\n  color: white;\n  font-size: 13px;\n  height: 25px;\n  width: 50%;\n  background-color: #00b0ff;\n}\n#uploadContainer button:hover {\n  background-color: #038ece;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL3Bvc3QvQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcMTMtMlxcVW5pdFxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcY29tcG9uZW50c1xccG9zdFxccG9zdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtEQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDQ0Y7QURDRTtFQUNFLDJCQUFBO1VBQUEsMEJBQUE7RUFDQSw0QkFBQTtVQUFBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBRUUsWUFBQTtBQ0FOO0FERUk7RUFDRSxZQUFBO0FDQU47QURHRTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQ0RKO0FESUU7RUFDRSxXQUFBO0VBY0EsV0FBQTtFQUNBLFlBQUE7QUNmSjtBRENJO0VBQ0UsY0FBQTtBQ0NOO0FEQ0k7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ047QURBTTtFQUNFLGdDQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0VSO0FESUk7RUFDRSxhQUFBO0FDRk47QURJSTtFQUNFLFdBQUE7QUNGTjtBREtFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FDSEo7QURLSTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN1cGxvYWRDb250YWluZXIge1xyXG4gIGJveC1zaGFkb3c6IDFweCAtMXB4IDMxcHggLTdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMyU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyNjNkO1xyXG5cclxuICB0ZXh0YXJlYSB7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMTBweDtcclxuICAgIHBhZGRpbmctYmxvY2stc3RhcnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICBcclxuICAgICAgcmVzaXplOiBub25lO1xyXG4gICBcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyNjNkO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlLXVwbG9hZCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogcmdiKDI0NiwgMjQ2LCAyNDYpO1xyXG4gICAgfVxyXG4gICAgI3VwbG9hZEljb24ge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgY29sb3I6ICMwMGIwZmY7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzYpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMGZmO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM4ZWNlO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gI2ltYWdlLXByZXZpZXcge1xyXG4gIC8vICAgei1pbmRleDogMTtcclxuICAvLyB9XHJcbn1cclxuIiwiI3VwbG9hZENvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDFweCAtMXB4IDMxcHggLTdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tbGVmdDogMjMlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMjYzZDtcbn1cbiN1cGxvYWRDb250YWluZXIgdGV4dGFyZWEge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMTBweDtcbiAgcGFkZGluZy1ibG9jay1zdGFydDogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDk1JTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICByZXNpemU6IG5vbmU7XG59XG4jdXBsb2FkQ29udGFpbmVyIHRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogMHB4O1xufVxuI3VwbG9hZENvbnRhaW5lciBociB7XG4gIHdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTI2M2Q7XG59XG4jdXBsb2FkQ29udGFpbmVyIC5pbWFnZS11cGxvYWQge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cbiN1cGxvYWRDb250YWluZXIgLmltYWdlLXVwbG9hZCBwIHtcbiAgY29sb3I6ICNmNmY2ZjY7XG59XG4jdXBsb2FkQ29udGFpbmVyIC5pbWFnZS11cGxvYWQgI3VwbG9hZEljb24ge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMwMGIwZmY7XG59XG4jdXBsb2FkQ29udGFpbmVyIC5pbWFnZS11cGxvYWQgI3VwbG9hZEljb246aG92ZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc2KTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbiN1cGxvYWRDb250YWluZXIgLmltYWdlLXVwbG9hZCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jdXBsb2FkQ29udGFpbmVyIC5pbWFnZS11cGxvYWQgaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG59XG4jdXBsb2FkQ29udGFpbmVyIGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjBmZjtcbn1cbiN1cGxvYWRDb250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzOGVjZTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/components/post/post.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/home/components/post/post.component.ts ***!
  \**************************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let PostComponent = class PostComponent {
    constructor(http, _http) {
        this.http = http;
        this._http = _http;
        // @Output() renderPosts: any = new EventEmitter();
        // childPost() {
        //   console.log("i am the useless method");
        //   this.renderPosts.emit(this.renderPosts);
        // }
        this.fileData = null;
        this.post = "";
        this.previewUrl = null;
        this.fileUploadProgress = null;
        this.uploadedFilePath = null;
    }
    ngOnInit() { }
    fileProgress(fileInput) {
        this.fileData = fileInput.target.files[0];
        this.preview();
    }
    postText(event) {
        this.post = event.target.value;
    }
    preview() {
        if (this.fileData == null) {
            this.previewUrl = "";
            return;
        }
        // Show preview
        var mimeType = this.fileData.type.split("/")[0];
        var reader = new FileReader();
        reader.readAsDataURL(this.fileData);
        if (mimeType == "video") {
            reader.onload = _event => {
                this.previewUrl =
                    "https://cdn4.iconfinder.com/data/icons/social-messaging-productivity-1/128/play-icon-2-512.png";
            };
        }
        else if (mimeType == "image") {
            reader.onload = _event => {
                this.previewUrl = reader.result;
            };
        }
        else if (mimeType == "audio") {
            reader.onload = _event => {
                this.previewUrl =
                    "https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/volume-24-512.png";
            };
        }
    }
    onSubmit() {
        const formData = new FormData();
        console.log(this.fileData);
        if (!this.fileData) {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Empty?", "You Have Got To Upload Something", "error");
        }
        var type = this.fileData.type.split("/")[0];
        var size = this.fileData.size;
        if (size > 10000000 && type === "video") {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("So Large !!", ` Your ${type} Can't be larger than 10MB`, "warning");
        }
        if (size > 30000000 && type === "audio") {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("So Large For an audio..", ` Your ${type} Can't be larger than 3MB`, "warning");
        }
        if (size > 5000000 && type === "image") {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("So Large For an Image..", ` Your ${type} Can't be larger than 5MB`, "warning");
        }
        if (type !== "image" && type !== "video" && type !== "audio") {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("You only can post Images / Videos and Audios", "warning");
        }
        formData.append("files", this.fileData); // here we pass the file
        formData.append("user_id", localStorage.user_id); // here we pass user id
        formData.append("post_text", this.post); // here we pass post text
        formData.append("type", this.fileData.type); // here we pass data type
        // let headers = new HttpHeaders({
        //   "Content-Type": "application/json",
        //   authentication: localStorage.getItem("token")
        // });
        this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"]["url"]}/posts/post`, formData)
            .subscribe(data => {
            this.post = "";
            let timerInterval;
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                position: "top",
                title: `Posting your ${type}`,
                html: "Uploading..",
                timer: 2000,
                timerProgressBar: true,
                onBeforeOpen: () => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.showLoading();
                },
                onClose: () => {
                    clearInterval(timerInterval);
                }
            })
                .then(result => {
                /* Read more about handling dismissals below */
                if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.timer) {
                    console.log("I was closed by the timer");
                }
            })
                .then(() => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    position: "top",
                    icon: "success",
                    title: "Posted !!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
                .then(() => {
                console.log(data, "from post component");
                this._http.newPost.next(data);
                this.fileData = null;
                this.preview();
            });
        });
    }
};
PostComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }
];
PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-post",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/post/post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post.component.scss */ "./src/app/pages/home/components/post/post.component.scss")).default]
    })
], PostComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#body {\n  display: -webkit-box;\n  display: flex;\n  background-color: #201d2f;\n  min-height: 100%;\n}\n#body #mainContainer {\n  margin-top: 3%;\n  border-radius: 20px;\n  width: 100%;\n  padding: 1%;\n  margin-bottom: 1%;\n}\n#body #mainContainer #posts {\n  padding: 1%;\n  margin-left: 23%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFwxMy0yXFxVbml0XFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURBRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNFSjtBRERJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAxZDJmO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgI21haW5Db250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gICAgI3Bvc3RzIHtcclxuICAgICAgcGFkZGluZzogMSU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMyU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiNib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMWQyZjtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbiNib2R5ICNtYWluQ29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG59XG4jYm9keSAjbWFpbkNvbnRhaW5lciAjcG9zdHMge1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luLWxlZnQ6IDIzJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let HomeComponent = class HomeComponent {
    constructor(router, _http, http) {
        this.router = router;
        this._http = _http;
        this.http = http;
    }
    ngOnInit() {
        // setInterval(() => {
        //   if (!localStorage.token) {
        //     console.log("no tokeeeeeeeeeeen");
        //     this.router.navigate(["/"]);
        //   }
        // }, 60000); //about 4 minsS
        this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"]["url"]}/refreshtoken`).subscribe(data => {
            console.log("we got a new token home component");
            console.log(data);
            console.log("localSrtorage");
            localStorage.setItem("user_id", data["payload"]["id"]);
            localStorage.setItem("email", data["payload"]["email"]);
            localStorage.setItem("token", data["token"]);
            localStorage.setItem("refreshtoken", data["refreshToken"]);
            console.log("localSrtorage", localStorage);
        });
        console.log("we are in the home component");
        setInterval(() => {
            //this.counter++;
            //console.log(this.counter, "counter from client");
            return this.http
                .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"]["url"]}/refreshtoken`)
                .subscribe(data => {
                console.log("we got a new token home component");
                console.log(data);
                console.log("localSrtorage");
                localStorage.setItem("user_id", data["payload"]["id"]);
                localStorage.setItem("email", data["payload"]["email"]);
                localStorage.setItem("token", data["token"]);
                localStorage.setItem("refreshtoken", data["refreshToken"]);
                console.log("localSrtorage", localStorage);
            });
        }, 240000); // keep it  30 * 60 * 1000
        this._http.getAllPosts().subscribe((data) => {
            this.posts = data;
            console.log(this.posts, "heeeeey these are the posts from home");
        });
        this._http.getAllUsers().subscribe((data) => {
            this.users = data;
            console.log(this.users, "heeeeey these are all users from post card");
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/landingPage/landing-page/landing-page.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/landingPage/landing-page/landing-page.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#header {\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  background-color: black;\n}\n#header img {\n  opacity: 0.5;\n  width: 100%;\n  height: 100%;\n}\n#intro {\n  border-radius: 100px;\n  margin-left: 30%;\n  text-align: center;\n  width: 40%;\n  margin-top: 19%;\n  color: white;\n}\n#intro h2 {\n  color: white;\n  font-weight: bold;\n  padding-top: 2%;\n}\n#intro #arrowDown {\n  color: white;\n  padding-top: 2%;\n  margin-top: 10%;\n  font-weight: bolder;\n}\n#intro #arrowDown:hover {\n  cursor: pointer;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  -webkit-transform: scale(3);\n          transform: scale(3);\n  color: orange;\n}\n#about {\n  color: white;\n  background: -webkit-gradient(linear, left top, left bottom, from(#020024), color-stop(31%, #0f2027), color-stop(52%, #0e303a), color-stop(70%, #0d414f), color-stop(94%, #087891), color-stop(100%, #0787a3), to(#00d4ff));\n  background: linear-gradient(to bottom, #020024 0%, #0f2027 31%, #0e303a 52%, #0d414f 70%, #087891 94%, #0787a3 100%, #00d4ff 100%);\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  margin-top: 14.8%;\n  padding: 10%;\n}\n#about #functionallity {\n  padding-top: 10%;\n  margin-left: 10%;\n}\n/* Team Section\n--------------------------------*/\n#team {\n  background: -webkit-gradient(linear, left bottom, left top, from(#020024), color-stop(31%, #0f2027), color-stop(52%, #0e303a), color-stop(70%, #0d414f), color-stop(94%, #087891), color-stop(100%, #0787a3), to(#00d4ff));\n  background: linear-gradient(to top, #020024 0%, #0f2027 31%, #0e303a 52%, #0d414f 70%, #087891 94%, #0787a3 100%, #00d4ff 100%);\n  color: white;\n  padding: 5px 0 60px 0;\n  text-align: center;\n}\n#team #row {\n  margin-top: 5%;\n}\n#team .member {\n  margin-left: 20%;\n  min-height: 80%;\n  width: 55%;\n  cursor: pointer;\n  text-align: center;\n  margin-bottom: 20px;\n  position: relative;\n  border-radius: 50%;\n  overflow: hidden;\n  -webkit-transition: -webkit-transform 0.4s ease-in-out;\n  transition: -webkit-transform 0.4s ease-in-out;\n  transition: transform 0.4s ease-in-out;\n  transition: transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out;\n}\n#team .member img {\n  min-width: 70%;\n  max-height: 55%;\n  min-height: 80%;\n}\n#team .member .member-info {\n  opacity: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n#team .member .member-info-content {\n  margin-top: 50px;\n  -webkit-transition: margin 0.2s;\n  transition: margin 0.2s;\n}\n#team .member:hover .member-info {\n  padding: 0 40px;\n  background: rgba(153, 156, 1, 0.74);\n  opacity: 1;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n#team .member:hover .member-info-content {\n  margin-top: 0;\n}\n#team .member h6 {\n  font-weight: 200;\n  margin-bottom: 2px;\n  font-size: 18px;\n  color: #fff;\n}\n#team .member span {\n  font-style: italic;\n  display: block;\n  font-size: 10px;\n  color: #fff;\n}\n#team .member .social {\n  margin-top: 15px;\n}\n#team .member .social a img {\n  width: 0.7% !important;\n}\n#team .member .social a img:hover {\n  background-color: rgba(255, 255, 255, 0.63);\n  border-radius: 100%;\n}\n#goUpDiv {\n  background-color: #ba4555;\n  width: 30px;\n  height: 65px;\n  right: 0;\n  float: right;\n  padding-top: 10px;\n  border-top-left-radius: 30px;\n}\n#goUpDiv #goUp {\n  margin-top: 10px;\n  color: white;\n}\n#goUpDiv #goUp:hover {\n  -webkit-transition: ease-in-out 0.3s;\n  transition: ease-in-out 0.3s;\n  margin-top: 5px;\n}\n.tranisition-slow {\n  -webkit-transition: ease-in 0.5s;\n  transition: ease-in 0.5s;\n}\n.ml15 {\n  font-weight: 800;\n  font-size: 3.8em;\n  text-transform: uppercase;\n  letter-spacing: 0.5em;\n}\n.ml15 .word {\n  display: inline-block;\n  line-height: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZ1BhZ2UvbGFuZGluZy1wYWdlL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXDEzLTJcXFVuaXRcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdQYWdlXFxsYW5kaW5nLXBhZ2VcXGxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZ1BhZ2UvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE1BQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VKO0FERUE7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQUk7RUFDRSxlQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxhQUFBO0FDRU47QURHQTtFQUNFLFlBQUE7RUFFQSwwTkFBQTtFQUFBLGtJQUFBO0VBV0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ1hGO0FEYUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDWEo7QURlQTtpQ0FBQTtBQUdBO0VBRUUsME5BQUE7RUFBQSwrSEFBQTtFQVVBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDdkJGO0FEeUJFO0VBQ0UsY0FBQTtBQ3ZCSjtBRDBCRTtFQUNFLGdCQUFBO0VBTUEsZUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNEQUFBO0VBQ0EsOENBQUE7RUFBQSxzQ0FBQTtFQUFBLDBFQUFBO0FDN0JKO0FEZUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNiTjtBRDBCSTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUdBLGFBQUE7RUFDQSx3QkFBQTtFQUdBLHVCQUFBO0VBQ0EseUJBQUE7RUFHQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUN4Qk47QUQwQkk7RUFDRSxnQkFBQTtFQUNBLCtCQUFBO0VBQUEsdUJBQUE7QUN4Qk47QUQyQkk7RUFDRSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ3pCTjtBRDJCSTtFQUNFLGFBQUE7QUN6Qk47QUQ0Qkk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUMxQk47QUQ0Qkk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQzFCTjtBRDRCSTtFQUNFLGdCQUFBO0FDMUJOO0FENEJNO0VBQ0Usc0JBQUE7QUMxQlI7QUQ4QlE7RUFDRSwyQ0FBQTtFQUNBLG1CQUFBO0FDNUJWO0FEbUNBO0VBRUUseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQ2pDRjtBRG1DRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ2pDSjtBRG1DSTtFQUNFLG9DQUFBO0VBQUEsNEJBQUE7RUFDQSxlQUFBO0FDakNOO0FEc0NBO0VBQ0UsZ0NBQUE7RUFBQSx3QkFBQTtBQ25DRjtBRHNDQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDbkNGO0FEc0NBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQ25DRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmdQYWdlL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyIHtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBpbWcge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4jaW50cm8ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbWFyZ2luLXRvcDogMTklO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgaDIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgfVxyXG4gICNhcnJvd0Rvd24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuI2Fib3V0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGJvdHRvbSxcclxuICAgIHJnYmEoMiwgMCwgMzYsIDEpIDAlLFxyXG4gICAgcmdiYSgxNSwgMzIsIDM5LCAxKSAzMSUsXHJcbiAgICByZ2JhKDE0LCA0OCwgNTgsIDEpIDUyJSxcclxuICAgIHJnYmEoMTMsIDY1LCA3OSwgMSkgNzAlLFxyXG4gICAgcmdiYSg4LCAxMjAsIDE0NSwgMSkgOTQlLFxyXG4gICAgcmdiYSg3LCAxMzUsIDE2MywgMSkgMTAwJSxcclxuICAgIHJnYmEoMCwgMjEyLCAyNTUsIDEpIDEwMCVcclxuICApO1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDE0LjglO1xyXG4gIHBhZGRpbmc6IDEwJTtcclxuXHJcbiAgI2Z1bmN0aW9uYWxsaXR5IHtcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIH1cclxufVxyXG5cclxuLyogVGVhbSBTZWN0aW9uXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiN0ZWFtIHtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gdG9wLFxyXG4gICAgcmdiYSgyLCAwLCAzNiwgMSkgMCUsXHJcbiAgICByZ2JhKDE1LCAzMiwgMzksIDEpIDMxJSxcclxuICAgIHJnYmEoMTQsIDQ4LCA1OCwgMSkgNTIlLFxyXG4gICAgcmdiYSgxMywgNjUsIDc5LCAxKSA3MCUsXHJcbiAgICByZ2JhKDgsIDEyMCwgMTQ1LCAxKSA5NCUsXHJcbiAgICByZ2JhKDcsIDEzNSwgMTYzLCAxKSAxMDAlLFxyXG4gICAgcmdiYSgwLCAyMTIsIDI1NSwgMSkgMTAwJVxyXG4gICk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDVweCAwIDYwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICNyb3cge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIH1cclxuICAubWVtYmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBpbWcge1xyXG4gICAgICBtaW4td2lkdGg6IDcwJTtcclxuICAgICAgbWF4LWhlaWdodDogNTUlO1xyXG4gICAgICBtaW4taGVpZ2h0OiA4MCU7XHJcbiAgICB9XHJcbiAgICBtaW4taGVpZ2h0OiA4MCU7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAubWVtYmVyLWluZm8ge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgfVxyXG4gICAgLm1lbWJlci1pbmZvLWNvbnRlbnQge1xyXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMC4ycztcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIC5tZW1iZXItaW5mbyB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgxNTMsIDE1NiwgMSwgMC43NCk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIC5tZW1iZXItaW5mby1jb250ZW50IHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgLy8gdHJhbnNpdGlvbjogbWFyZ2luIDAuNHM7XHJcbiAgICB9XHJcbiAgICBoNiB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLnNvY2lhbCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gICAgICBhIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDAuNyUgIWltcG9ydGFudDtcclxuICAgICAgICAvLyBtYXgtd2lkdGg6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Myk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSAvL3NvY2lhbFxyXG4gIH0gLy9tZW1iZXJcclxufSAvL3RlYW1cclxuXHJcbiNnb1VwRGl2IHtcclxuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwODNiMCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhNDU1NTtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcblxyXG4gICNnb1VwIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRyYW5pc2l0aW9uLXNsb3cge1xyXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC41cztcclxufVxyXG5cclxuLm1sMTUge1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAzLjhlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVlbTtcclxufVxyXG5cclxuLm1sMTUgLndvcmQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG59XHJcbiIsIiNoZWFkZXIge1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuI2hlYWRlciBpbWcge1xuICBvcGFjaXR5OiAwLjU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNpbnRybyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbi10b3A6IDE5JTtcbiAgY29sb3I6IHdoaXRlO1xufVxuI2ludHJvIGgyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDIlO1xufVxuI2ludHJvICNhcnJvd0Rvd24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuI2ludHJvICNhcnJvd0Rvd246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4jYWJvdXQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMjAwMjQgMCUsICMwZjIwMjcgMzElLCAjMGUzMDNhIDUyJSwgIzBkNDE0ZiA3MCUsICMwODc4OTEgOTQlLCAjMDc4N2EzIDEwMCUsICMwMGQ0ZmYgMTAwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTQuOCU7XG4gIHBhZGRpbmc6IDEwJTtcbn1cbiNhYm91dCAjZnVuY3Rpb25hbGxpdHkge1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4vKiBUZWFtIFNlY3Rpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiN0ZWFtIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAyMDAyNCAwJSwgIzBmMjAyNyAzMSUsICMwZTMwM2EgNTIlLCAjMGQ0MTRmIDcwJSwgIzA4Nzg5MSA5NCUsICMwNzg3YTMgMTAwJSwgIzAwZDRmZiAxMDAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHggMCA2MHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiN0ZWFtICNyb3cge1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbiN0ZWFtIC5tZW1iZXIge1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBtaW4taGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiA1NSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLWluLW91dDtcbn1cbiN0ZWFtIC5tZW1iZXIgaW1nIHtcbiAgbWluLXdpZHRoOiA3MCU7XG4gIG1heC1oZWlnaHQ6IDU1JTtcbiAgbWluLWhlaWdodDogODAlO1xufVxuI3RlYW0gLm1lbWJlciAubWVtYmVyLWluZm8ge1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuI3RlYW0gLm1lbWJlciAubWVtYmVyLWluZm8tY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRyYW5zaXRpb246IG1hcmdpbiAwLjJzO1xufVxuI3RlYW0gLm1lbWJlcjpob3ZlciAubWVtYmVyLWluZm8ge1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTUzLCAxNTYsIDEsIDAuNzQpO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuI3RlYW0gLm1lbWJlcjpob3ZlciAubWVtYmVyLWluZm8tY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4jdGVhbSAubWVtYmVyIGg2IHtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuI3RlYW0gLm1lbWJlciBzcGFuIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbiN0ZWFtIC5tZW1iZXIgLnNvY2lhbCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4jdGVhbSAubWVtYmVyIC5zb2NpYWwgYSBpbWcge1xuICB3aWR0aDogMC43JSAhaW1wb3J0YW50O1xufVxuI3RlYW0gLm1lbWJlciAuc29jaWFsIGEgaW1nOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYzKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuI2dvVXBEaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmE0NTU1O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICByaWdodDogMDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbn1cbiNnb1VwRGl2ICNnb1VwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuI2dvVXBEaXYgI2dvVXA6aG92ZXIge1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi50cmFuaXNpdGlvbi1zbG93IHtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjVzO1xufVxuXG4ubWwxNSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMy44ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVlbTtcbn1cblxuLm1sMTUgLndvcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/landingPage/landing-page/landing-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/landingPage/landing-page/landing-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingPageComponent = class LandingPageComponent {
    constructor() { }
    ngOnInit() { }
};
LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-landing-page",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landingPage/landing-page/landing-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing-page.component.scss */ "./src/app/pages/landingPage/landing-page/landing-page.component.scss")).default]
    })
], LandingPageComponent);



/***/ }),

/***/ "./src/app/pages/profile/edit/edit.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/profile/edit/edit.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9lZGl0L0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXDEzLTJcXFVuaXRcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXHByb2ZpbGVcXGVkaXRcXGVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gICAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuIiwiZm9ybSB7XG4gIHBhZGRpbmc6IDMwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/profile/edit/edit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/edit/edit.component.ts ***!
  \******************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let EditComponent = class EditComponent {
    constructor(http) {
        this.http = http;
        this.Email = "";
        this.Username = "";
        this.Name = "";
        this.Age = "";
        this.Gender = "";
        this.Bio = "";
        this.Pass = "";
        this.ConfirmPass = "";
    }
    ngOnInit() {
        var user_id = localStorage.getItem("user_id");
        this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/findById`, { user_id })
            .subscribe(data => {
            console.log(data);
            this.Email = data[0]["email"];
            this.Name = data[0]["name"];
            this.Username = data[0]["username"];
            this.Age = data[0]["age"];
            this.Gender = data[0]["gender"];
            this.Bio = data[0]["bio"];
        });
    }
    //////////////////////////////////////// Event Listeners
    UpdateUsername(event) {
        this.Username = event.target.value;
        console.log("new username", this.Username);
    }
    UpdateName(event) {
        this.Name = event.target.value;
        console.log("new Name", this.Name);
    }
    UpdateAge(event) {
        this.Age = event.target.value;
        if (this.Age.length > 2) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                icon: "error",
                titleText: "You can't be over 100 years old."
            });
        }
        console.log("new Age", this.Age);
    }
    UpdateGender(event) {
        this.Gender = event.target.value;
        console.log("new Gender", this.Gender);
    }
    UpdateBio(event) {
        this.Bio = event.target.value;
        console.log("new Bio", this.Bio);
    }
    UpdatePass(event) {
        this.Pass = event.target.value;
        console.log("new Pass", this.Pass);
    }
    UpdateConfirmPassword(event) {
        this.ConfirmPass = event.target.value;
        console.log("new conf Pass", this.ConfirmPass);
    }
    //////////////////////////////////
    onUpdatePassword() {
        var user_id = localStorage.getItem("user_id");
        if (this.Pass.length >= 6 && this.Pass === this.ConfirmPass) {
            this.http
                .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/updatepassword`, {
                user_id,
                password: this.Pass
            })
                .subscribe(data => {
                if (data === "Password Was Updated") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        position: "top",
                        icon: "success",
                        title: "password was updated !!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                position: "top",
                icon: "error",
                title: "passwords mismatch or less than 6 characters !!",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    onUpdateProfile() {
        var user_id = localStorage.getItem("user_id");
        var obj = {
            user_id,
            name: this.Name,
            username: this.Username,
            age: this.Age,
            gender: this.Gender,
            bio: this.Bio
        };
        this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/updateprofile`, obj)
            .subscribe(data => {
            if ((data = "Profile Updated !!")) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    position: "top",
                    icon: "success",
                    title: "Profile Info updated !!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    position: "top",
                    icon: "error",
                    title: "Server Error !!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    }
};
EditComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-edit",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/edit/edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit.component.scss */ "./src/app/pages/profile/edit/edit.component.scss")).default]
    })
], EditComponent);



/***/ }),

/***/ "./src/app/pages/profile/info-section/followers/followers.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/profile/info-section/followers/followers.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#body {\n  background-color: #201d2f;\n  height: 100vh;\n}\n#body #con {\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n}\n#body #contacts {\n  text-align: center;\n  padding-top: 8%;\n  color: white;\n}\n#body #contacts h4 {\n  text-align: center;\n}\n#body #contacts hr {\n  width: 70%;\n  padding: 2%;\n}\n#body #contacts #pp img {\n  box-shadow: 1px -1px 31px -7px rgba(0, 0, 0, 0.75);\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 100%;\n  width: 60px;\n  max-height: 60px;\n  min-height: 60px;\n}\n#body #contacts #contact {\n  margin-left: 2%;\n  width: 20%;\n  padding: 1%;\n  border-radius: 100px;\n  box-shadow: 1px -1px 31px -7px rgba(0, 0, 0, 0.75);\n}\n#body #contacts #contact:hover {\n  cursor: pointer;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  background-color: #00b0ff;\n}\n#body #contacts #contact:focus {\n  outline: 0;\n}\n#body #contacts #contact img:hover {\n  box-shadow: 1px -1px 31px -7px rgba(0, 0, 0, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9pbmZvLXNlY3Rpb24vZm9sbG93ZXJzL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXDEzLTJcXFVuaXRcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXHByb2ZpbGVcXGluZm8tc2VjdGlvblxcZm9sbG93ZXJzXFxmb2xsb3dlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvaW5mby1zZWN0aW9uL2ZvbGxvd2Vycy9mb2xsb3dlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNDSjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERUk7RUFDRSxrQkFBQTtBQ0FOO0FER0k7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ0ROO0FETU07RUFDRSxrREFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSlI7QURRSTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0RBQUE7QUNOTjtBRE9NO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSx5QkFBQTtBQ0xSO0FEUU07RUFDRSxVQUFBO0FDTlI7QURVUTtFQUNFLGtEQUFBO0FDUlYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL2luZm8tc2VjdGlvbi9mb2xsb3dlcnMvZm9sbG93ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDFkMmY7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgI2NvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhY3RzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA4JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBociB7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgfVxyXG5cclxuICAgICNwcCB7XHJcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMzFweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjY29udGFjdCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgcGFkZGluZzogMSU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggLTFweCAzMXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjBmZjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDMxcHggLTdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIjYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDFkMmY7XG4gIGhlaWdodDogMTAwdmg7XG59XG4jYm9keSAjY29uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI2JvZHkgI2NvbnRhY3RzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogOCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNib2R5ICNjb250YWN0cyBoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNib2R5ICNjb250YWN0cyBociB7XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmc6IDIlO1xufVxuI2JvZHkgI2NvbnRhY3RzICNwcCBpbWcge1xuICBib3gtc2hhZG93OiAxcHggLTFweCAzMXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHdpZHRoOiA2MHB4O1xuICBtYXgtaGVpZ2h0OiA2MHB4O1xuICBtaW4taGVpZ2h0OiA2MHB4O1xufVxuI2JvZHkgI2NvbnRhY3RzICNjb250YWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICB3aWR0aDogMjAlO1xuICBwYWRkaW5nOiAxJTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAtMXB4IDMxcHggLTdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuI2JvZHkgI2NvbnRhY3RzICNjb250YWN0OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMGZmO1xufVxuI2JvZHkgI2NvbnRhY3RzICNjb250YWN0OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbiNib2R5ICNjb250YWN0cyAjY29udGFjdCBpbWc6aG92ZXIge1xuICBib3gtc2hhZG93OiAxcHggLTFweCAzMXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/profile/info-section/followers/followers.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profile/info-section/followers/followers.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FollowersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersComponent", function() { return FollowersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let FollowersComponent = class FollowersComponent {
    constructor(_http, activatedRoute) {
        this._http = _http;
        this.activatedRoute = activatedRoute;
        this.followData_sec = [];
        this.followers = [];
        this.followersNames = "";
        this.followersPhoto = "";
        this.followersUserNames = "";
        this.followingLength = 0;
        this.followData = [];
        this.following = [];
    }
    ngOnInit() {
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"];
        this.getPeopleFollowingYou();
    }
    getPeopleFollowingYou() {
        this.activatedRoute.params.subscribe(params => {
            // console.log(params, "@@@@@@@@@@kkkekekekekekekrkrkr");
            this.id = params["id"] || localStorage.getItem("user_id");
            this._http
                .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/follow/getfollowinglist`)
                .subscribe((data) => {
                data.forEach(element => {
                    this.followData_sec.push(element);
                });
                for (var i = 0; i < this.followData_sec.length; i++) {
                    if (this.followData_sec[i]["followed_id"] == this.id) {
                        this.followers.push(this.followData_sec[i]);
                        this.followersLength = this.followers["length"];
                        this.followers.forEach(element => {
                            this.followersNames += element.name;
                            this.followersUserNames += element.username;
                        });
                    }
                }
                console.log("************* people that follow u", this.followers);
            });
        });
    }
};
FollowersComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
FollowersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-followers",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./followers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/info-section/followers/followers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./followers.component.scss */ "./src/app/pages/profile/info-section/followers/followers.component.scss")).default]
    })
], FollowersComponent);



/***/ }),

/***/ "./src/app/pages/profile/info-section/following/following.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/profile/info-section/following/following.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#body {\n  background-color: #201d2f;\n  height: 100vh;\n}\n#body #con {\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n}\n#body #contacts {\n  text-align: center;\n  padding-top: 8%;\n  color: white;\n}\n#body #contacts h4 {\n  text-align: center;\n}\n#body #contacts hr {\n  width: 70%;\n  padding: 2%;\n}\n#body #contacts #pp img {\n  box-shadow: 1px -1px 31px -7px rgba(0, 0, 0, 0.75);\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 100%;\n  width: 60px;\n  max-height: 60px;\n  min-height: 60px;\n}\n#body #contacts #contact {\n  margin-left: 2%;\n  width: 20%;\n  padding: 1%;\n  border-radius: 100px;\n  box-shadow: 1px -1px 31px -7px rgba(0, 0, 0, 0.75);\n}\n#body #contacts #contact:hover {\n  cursor: pointer;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  background-color: #00b0ff;\n}\n#body #contacts #contact:focus {\n  outline: 0;\n}\n#body #contacts #contact img:hover {\n  box-shadow: 1px -1px 31px -7px rgba(0, 0, 0, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9pbmZvLXNlY3Rpb24vZm9sbG93aW5nL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXDEzLTJcXFVuaXRcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXHByb2ZpbGVcXGluZm8tc2VjdGlvblxcZm9sbG93aW5nXFxmb2xsb3dpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvaW5mby1zZWN0aW9uL2ZvbGxvd2luZy9mb2xsb3dpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNDSjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERUk7RUFDRSxrQkFBQTtBQ0FOO0FER0k7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ0ROO0FETU07RUFDRSxrREFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSlI7QURRSTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0RBQUE7QUNOTjtBRE9NO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSx5QkFBQTtBQ0xSO0FEUU07RUFDRSxVQUFBO0FDTlI7QURVUTtFQUNFLGtEQUFBO0FDUlYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL2luZm8tc2VjdGlvbi9mb2xsb3dpbmcvZm9sbG93aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDFkMmY7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgI2NvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhY3RzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA4JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBociB7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgfVxyXG5cclxuICAgICNwcCB7XHJcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggMzFweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjY29udGFjdCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgcGFkZGluZzogMSU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggLTFweCAzMXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjBmZjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDMxcHggLTdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIjYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDFkMmY7XG4gIGhlaWdodDogMTAwdmg7XG59XG4jYm9keSAjY29uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI2JvZHkgI2NvbnRhY3RzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogOCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNib2R5ICNjb250YWN0cyBoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNib2R5ICNjb250YWN0cyBociB7XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmc6IDIlO1xufVxuI2JvZHkgI2NvbnRhY3RzICNwcCBpbWcge1xuICBib3gtc2hhZG93OiAxcHggLTFweCAzMXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHdpZHRoOiA2MHB4O1xuICBtYXgtaGVpZ2h0OiA2MHB4O1xuICBtaW4taGVpZ2h0OiA2MHB4O1xufVxuI2JvZHkgI2NvbnRhY3RzICNjb250YWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICB3aWR0aDogMjAlO1xuICBwYWRkaW5nOiAxJTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAtMXB4IDMxcHggLTdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuI2JvZHkgI2NvbnRhY3RzICNjb250YWN0OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMGZmO1xufVxuI2JvZHkgI2NvbnRhY3RzICNjb250YWN0OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbiNib2R5ICNjb250YWN0cyAjY29udGFjdCBpbWc6aG92ZXIge1xuICBib3gtc2hhZG93OiAxcHggLTFweCAzMXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/profile/info-section/following/following.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profile/info-section/following/following.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FollowingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingComponent", function() { return FollowingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let FollowingComponent = class FollowingComponent {
    constructor(_http, activatedRoute) {
        this._http = _http;
        this.activatedRoute = activatedRoute;
        this.followData = [];
        this.following = [];
        this.followingLength = 0;
    }
    ngOnInit() {
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"];
        this.getFollowing();
    }
    getFollowing() {
        this.activatedRoute.params.subscribe(params => {
            // console.log(params, "########################kkkekekekekekekrkrkr");
            this.id = params["id"] || localStorage.getItem("user_id");
            this._http
                .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/follow/getfollowersinfo`)
                .subscribe((data) => {
                data.forEach(element => {
                    this.followData.push(element);
                });
                for (var i = 0; i < this.followData.length; i++) {
                    if (this.followData[i]["follower_id"] == this.id) {
                        this.following.push(this.followData[i]);
                        this.followingLength = this.following["length"];
                    }
                }
                // this.followingLength = this.followData["length"];
            });
            console.log("people u follow", this.following);
        });
    }
};
FollowingComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
FollowingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-following",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./following.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/info-section/following/following.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./following.component.scss */ "./src/app/pages/profile/info-section/following/following.component.scss")).default]
    })
], FollowingComponent);



/***/ }),

/***/ "./src/app/pages/profile/info-section/info-section.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/profile/info-section/info-section.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#body {\n  padding-top: 5%;\n  background-color: #201d2f;\n  min-height: 100vh;\n  z-index: -1;\n  color: white;\n  text-align: center;\n}\n#body #pp {\n  padding: 1%;\n  border-radius: 100%;\n  width: 20%;\n  max-height: 300px;\n}\n#body #pp img {\n  z-index: -1;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 100%;\n  width: 200px;\n  max-height: 200px;\n}\n#body #pp img:hover {\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  -webkit-filter: blur(3px);\n          filter: blur(3px);\n}\n#body #pp #addIcon {\n  z-index: 1;\n  background-color: rgba(223, 223, 2, 0.829);\n  border-top-left-radius: 15%;\n  border-top-right-radius: 15%;\n  border-bottom-left-radius: 100%;\n  border-bottom-right-radius: 100%;\n  right: 48.8%;\n  top: 11.8%;\n  padding-top: 3px;\n  height: 30px;\n  width: 40px;\n  position: absolute;\n}\n#body #pp #addIcon #icon {\n  color: white;\n  cursor: pointer !important;\n}\n#body #pp #addIcon:hover {\n  background-color: rgba(243, 243, 4, 0.829);\n  cursor: pointer !important;\n}\n#body #pp input {\n  display: none;\n}\n#body #infos {\n  text-align: center;\n}\n#body #infos #name {\n  margin-top: 1%;\n}\n#body #infos #bio {\n  margin-top: 3%;\n  padding: 1% 5%;\n  margin-left: 15%;\n  width: 70%;\n  text-align: center;\n}\n#body hr {\n  z-index: -1;\n  background-color: #161420;\n  width: 60%;\n}\n#body #btns {\n  margin-top: -35px;\n  z-index: 1;\n  height: 50px;\n}\n#body #btns #editProfileDiv {\n  width: 10%;\n}\n#body #btns #editProfileDiv #editProfile {\n  background-color: #ffb500;\n  border-radius: 30px;\n}\n#body #btns #editProfileDiv #editProfile:hover {\n  color: white;\n  background-color: #db9e04;\n}\n#body #btns #followers {\n  width: 10%;\n}\n#body #btns #followers #followersBtn {\n  background-color: #ffb500;\n  border-radius: 30px;\n}\n#body #btns #followers #followersBtn:hover {\n  color: white;\n  background-color: #db9e04;\n}\n#body #btns #following {\n  width: 10%;\n}\n#body #btns #following #followingBtn {\n  background-color: #ffb500;\n  border-radius: 30px;\n}\n#body #btns #following #followingBtn:hover {\n  color: white;\n  background-color: #db9e04;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9pbmZvLXNlY3Rpb24vQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcMTMtMlxcVW5pdFxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xccHJvZmlsZVxcaW5mby1zZWN0aW9uXFxpbmZvLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvaW5mby1zZWN0aW9uL2luZm8tc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBRUEsaUJBQUE7QUNBSjtBRENJO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NOO0FEQ007RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0NSO0FER0k7RUFDRSxVQUFBO0VBQ0EsMENBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRE47QURFTTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtBQ0FSO0FERU07RUFDRSwwQ0FBQTtFQUNBLDBCQUFBO0FDQVI7QURHSTtFQUNFLGFBQUE7QUNETjtBREtFO0VBQ0Usa0JBQUE7QUNISjtBRElJO0VBQ0UsY0FBQTtBQ0ZOO0FESUk7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDRk47QURPRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUNMSjtBRE9FO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0xKO0FET0k7RUFDRSxVQUFBO0FDTE47QURPTTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNMUjtBRE1RO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDSlY7QURRSTtFQUNFLFVBQUE7QUNOTjtBRE9NO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQ0xSO0FETVE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNKVjtBRFNJO0VBQ0UsVUFBQTtBQ1BOO0FEUU07RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDTlI7QURPUTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0xWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9pbmZvLXNlY3Rpb24vaW5mby1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JvZHkge1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAxZDJmO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICNwcCB7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBpbWcge1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgbWF4LWhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIGZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI2FkZEljb24ge1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywgMjIzLCAyLCAwLjgyOSk7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1JTtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1JTtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAwJTtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMCU7XHJcbiAgICAgIHJpZ2h0OiA0OC44JTtcclxuICAgICAgdG9wOiAxMS44JTtcclxuICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAjaWNvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDMsIDQsIDAuODI5KTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5wdXQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI2luZm9zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICNuYW1lIHtcclxuICAgICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICB9XHJcbiAgICAjYmlvIHtcclxuICAgICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICAgIHBhZGRpbmc6IDElIDUlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIC8vICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMyOSk7XHJcbiAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gIH1cclxuICBociB7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjE0MjA7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuICAjYnRucyB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzVweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAjZWRpdFByb2ZpbGVEaXYge1xyXG4gICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNTAwO1xyXG4gICAgICAjZWRpdFByb2ZpbGUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmI1MDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjllMDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAjZm9sbG93ZXJzIHtcclxuICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgI2ZvbGxvd2Vyc0J0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjUwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RiOWUwNDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjZm9sbG93aW5nIHtcclxuICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgI2ZvbGxvd2luZ0J0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjUwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RiOWUwNDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiI2JvZHkge1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDFkMmY7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiAtMTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jYm9keSAjcHAge1xuICBwYWRkaW5nOiAxJTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDIwJTtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG59XG4jYm9keSAjcHAgaW1nIHtcbiAgei1pbmRleDogLTE7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB3aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuI2JvZHkgI3BwIGltZzpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGZpbHRlcjogYmx1cigzcHgpO1xufVxuI2JvZHkgI3BwICNhZGRJY29uIHtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDIyMywgMiwgMC44MjkpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNSU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNSU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMDAlO1xuICByaWdodDogNDguOCU7XG4gIHRvcDogMTEuOCU7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbiNib2R5ICNwcCAjYWRkSWNvbiAjaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG4jYm9keSAjcHAgI2FkZEljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MywgMjQzLCA0LCAwLjgyOSk7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuI2JvZHkgI3BwIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiNib2R5ICNpbmZvcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNib2R5ICNpbmZvcyAjbmFtZSB7XG4gIG1hcmdpbi10b3A6IDElO1xufVxuI2JvZHkgI2luZm9zICNiaW8ge1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgcGFkZGluZzogMSUgNSU7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIHdpZHRoOiA3MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNib2R5IGhyIHtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE0MjA7XG4gIHdpZHRoOiA2MCU7XG59XG4jYm9keSAjYnRucyB7XG4gIG1hcmdpbi10b3A6IC0zNXB4O1xuICB6LWluZGV4OiAxO1xuICBoZWlnaHQ6IDUwcHg7XG59XG4jYm9keSAjYnRucyAjZWRpdFByb2ZpbGVEaXYge1xuICB3aWR0aDogMTAlO1xufVxuI2JvZHkgI2J0bnMgI2VkaXRQcm9maWxlRGl2ICNlZGl0UHJvZmlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4jYm9keSAjYnRucyAjZWRpdFByb2ZpbGVEaXYgI2VkaXRQcm9maWxlOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI5ZTA0O1xufVxuI2JvZHkgI2J0bnMgI2ZvbGxvd2VycyB7XG4gIHdpZHRoOiAxMCU7XG59XG4jYm9keSAjYnRucyAjZm9sbG93ZXJzICNmb2xsb3dlcnNCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNTAwO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuI2JvZHkgI2J0bnMgI2ZvbGxvd2VycyAjZm9sbG93ZXJzQnRuOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI5ZTA0O1xufVxuI2JvZHkgI2J0bnMgI2ZvbGxvd2luZyB7XG4gIHdpZHRoOiAxMCU7XG59XG4jYm9keSAjYnRucyAjZm9sbG93aW5nICNmb2xsb3dpbmdCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNTAwO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuI2JvZHkgI2J0bnMgI2ZvbGxvd2luZyAjZm9sbG93aW5nQnRuOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI5ZTA0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/profile/info-section/info-section.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/profile/info-section/info-section.component.ts ***!
  \**********************************************************************/
/*! exports provided: InfoSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoSectionComponent", function() { return InfoSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let InfoSectionComponent = class InfoSectionComponent {
    constructor(_http) {
        this._http = _http;
        this.fileData = null;
        this.followingLength = 0;
        this.followData = [];
        this.followData_sec = [];
        this.following = [];
        this.followers = [];
        //
        this.followersLength = 0;
        this.followersNames = "";
        this.followersPhoto = "";
        this.followersUserNames = "";
        this.user_id = localStorage.getItem("user_id");
    }
    ngOnInit() {
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"];
        // this.getFollow();
        this.getFollowing();
        this.getPeopleFollowingYou();
        this._http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/findById`, { user_id: this.user_id })
            .subscribe(data => {
            console.log(data);
            this.name = data[0]["name"];
            this.username = data[0]["username"];
            this.age = data[0]["age"];
            this.email = data[0]["email"];
            this.bio = data[0]["bio"];
            this.gender = data[0]["gender"];
            this.photo = data[0]["photo"];
        });
        this._http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/follow/getfollowers`, {
            followed_id: this.user_id
        })
            .subscribe(data => {
            console.log(data, "followerrrrrrrrrrrrrs");
        });
    }
    onUploadPhoto(fileInput) {
        this.fileData = fileInput.target.files[0];
        if (this.fileData["type"].split("/")[0] === "video" ||
            this.fileData["type"].split("/")[0] === "audio") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                titleText: "You can't upload non image files",
                icon: "error"
            });
            return false;
        }
        // console.log(this.fileData, "type");
        const formData = new FormData();
        const user_id = localStorage.getItem("user_id");
        formData.append("files", this.fileData); // here we pass the file
        formData.append("user_id", localStorage.user_id); // here we pass user id
        this._http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/updatePhoto`, formData)
            .subscribe(data => {
            console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                position: "top",
                icon: "success",
                title: "Profile Photo Updated !!",
                showConfirmButton: false,
                timer: 1500
            });
            this._http
                .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/findById`, { user_id })
                .subscribe(data => {
                console.log(data);
                this.photo = data[0]["photo"];
            });
        });
        //
    }
    // getFollow() {
    //   this._http
    //     .get("http://localhost:5000/follow/getfollowersInfo")
    //     .subscribe((data: Array<any>) => {
    //       // console.log(data, "data");
    //       data.forEach(element => {
    //         if (element["followed_id"] == this.user_id) {
    //           this.followers.push(element);
    //         }
    //       });
    //       this.followersLength = this.followers["length"];
    //       this.followers.forEach(element => {
    //         console.log(element, "elem");
    //         this.followersNames += element.name + "<br>";
    //         this.followersUserNames += element.username + "<br>";
    //         this.followersPhoto +=
    //           `http://127.0.0.1:5000/uploads/${element.photo}` + "<br>";
    //       });
    //       // console.log(this.followers, "ff");
    //     });
    // }
    getFollowing() {
        this._http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/follow/getfollowersinfo`)
            .subscribe((data) => {
            data.forEach(element => {
                this.followData.push(element);
            });
            for (var i = 0; i < this.followData.length; i++) {
                if (this.followData[i]["follower_id"] == localStorage.getItem("user_id")) {
                    this.following.push(this.followData[i]);
                    this.followingLength = this.following["length"];
                }
            }
            // this.followingLength = this.followData["length"];
        });
        console.log("people u follow", this.following);
    }
    getPeopleFollowingYou() {
        this._http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/follow/getfollowinglist`)
            .subscribe((data) => {
            data.forEach(element => {
                this.followData_sec.push(element);
            });
            for (var i = 0; i < this.followData_sec.length; i++) {
                if (this.followData_sec[i]["followed_id"] ==
                    localStorage.getItem("user_id")) {
                    this.followers.push(this.followData_sec[i]);
                    this.followersLength = this.followers["length"];
                    console.log("ayy", this.followersLength);
                    this.followers.forEach(element => {
                        this.followersNames += element.name;
                        this.followersUserNames += element.username;
                        // this.followersUserNames += element.username + "<br>";
                        // this.followersPhoto +=
                        //   `http://127.0.0.1:5000/uploads/${element.photo}` + "<br>";
                    });
                }
            }
            console.log("************* people that follow u", this.followers);
        });
    }
};
InfoSectionComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
InfoSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-info-section",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/info-section/info-section.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info-section.component.scss */ "./src/app/pages/profile/info-section/info-section.component.scss")).default]
    })
], InfoSectionComponent);



/***/ }),

/***/ "./src/app/pages/profile/posts-section/posts-section.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/profile/posts-section/posts-section.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  margin-top: 5%;\n  padding-left: 17.5%;\n  color: white;\n}\n.container .example-card {\n  border-radius: 20px;\n  color: white;\n  background-color: #2a263d;\n  margin-top: 2%;\n  max-width: 600px;\n  max-height: 1500px;\n}\n.container .example-card img {\n  border-radius: 20px;\n}\n.container .example-card #footer {\n  text-align: center;\n  padding-bottom: 3%;\n}\n.container .example-card #footer button {\n  border-radius: 30px;\n  background-color: #af0101;\n  width: 80%;\n  text-decoration: none;\n}\n.container .example-card #footer button:hover {\n  color: white;\n}\n.container .example-header-image {\n  background-size: cover;\n}\n::ng-deep .mat-tab-list .mat-tab-labels .mat-tab-label {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wb3N0cy1zZWN0aW9uL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXDEzLTJcXFVuaXRcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXHByb2ZpbGVcXHBvc3RzLXNlY3Rpb25cXHBvc3RzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcG9zdHMtc2VjdGlvbi9wb3N0cy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUNFLG1CQUFBO0FDRU47QURBSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNFTjtBRERNO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQ0dSO0FERlE7RUFDRSxZQUFBO0FDSVY7QURFRTtFQUVFLHNCQUFBO0FDREo7QURNRTtFQUNFLFlBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcG9zdHMtc2VjdGlvbi9wb3N0cy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNy41JTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiBcclxuICAuZXhhbXBsZS1jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyNjNkO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMTUwMHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIH1cclxuICAgICNmb290ZXIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzUsIDEsIDEpO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtdGFiLWxpc3QgLm1hdC10YWItbGFiZWxzIC5tYXQtdGFiLWxhYmVsIHtcclxuICAgIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTt9IiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBwYWRkaW5nLWxlZnQ6IDE3LjUlO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5leGFtcGxlLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTI2M2Q7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXgtaGVpZ2h0OiAxNTAwcHg7XG59XG4uY29udGFpbmVyIC5leGFtcGxlLWNhcmQgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5jb250YWluZXIgLmV4YW1wbGUtY2FyZCAjZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMyU7XG59XG4uY29udGFpbmVyIC5leGFtcGxlLWNhcmQgI2Zvb3RlciBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWYwMTAxO1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY29udGFpbmVyIC5leGFtcGxlLWNhcmQgI2Zvb3RlciBidXR0b246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbjo6bmctZGVlcCAubWF0LXRhYi1saXN0IC5tYXQtdGFiLWxhYmVscyAubWF0LXRhYi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/profile/posts-section/posts-section.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/profile/posts-section/posts-section.component.ts ***!
  \************************************************************************/
/*! exports provided: PostsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsSectionComponent", function() { return PostsSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let PostsSectionComponent = class PostsSectionComponent {
    constructor(http) {
        this.http = http;
        this.user_id = localStorage.getItem("user_id");
        this.Filtered = [];
    }
    getData() {
        return this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/posts/get`, { user_id: this.user_id })
            .subscribe(data => {
            this.Data = data;
            this.Filtered = data;
            console.log(this.Data, "brrrrrrrrrrrrrrr");
        });
    }
    ngOnInit() {
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"];
        this.getData();
    }
    filter(event) {
        this.Filtered = [];
        console.log(event["index"]);
        if (event["index"] == 1) {
            for (var i = 0; i < this.Data.length; i++) {
                if (this.Data[i]["type"] == "image") {
                    this.Filtered.push(this.Data[i]);
                }
            }
        }
        else if (event["index"] == 2) {
            for (var i = 0; i < this.Data.length; i++) {
                if (this.Data[i]["type"] == "video") {
                    this.Filtered.push(this.Data[i]);
                }
            }
        }
        else if (event["index"] == 3) {
            for (var i = 0; i < this.Data.length; i++) {
                if (this.Data[i]["type"] == "audio") {
                    this.Filtered.push(this.Data[i]);
                }
            }
        }
        else {
            this.Filtered = this.Data;
        }
        console.log(this.Filtered);
    }
    delete(item) {
        console.log(item, "delete this item");
        var resultOp = false;
        var footage = item;
        // shaking animation//
        var card = document.getElementById("card");
        card.classList.add("animated");
        card.classList.add("shake");
        // shaking animation//
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then(result => {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Deleted!", "Your file has been deleted.", "success");
                resultOp = true;
            }
        })
            .then(() => {
            if (resultOp) {
                this.http
                    .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/posts/delete`, {
                    user_id: this.user_id,
                    id: footage
                })
                    .subscribe(data => {
                    if ((data = "Deleted")) {
                        this.getData();
                    }
                });
            }
        });
    }
    widePost(link) {
        console.log(link);
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            showClass: {
                popup: "animated bounceIn"
            },
            hideClass: {
                popup: "animated bounceOut"
            },
            background: "transparent",
            heightAuto: true,
            width: 700,
            showConfirmButton: false,
            imageUrl: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/uploads/${link}`
        });
    }
};
PostsSectionComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostsSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-posts-section",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/posts-section/posts-section.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts-section.component.scss */ "./src/app/pages/profile/posts-section/posts-section.component.scss")).default]
    })
], PostsSectionComponent);



/***/ }),

/***/ "./src/app/pages/profile/profile.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() { }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/pages/user-profile/user-profile-posts-section/user-profile-posts-section.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile-posts-section/user-profile-posts-section.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  margin-top: 5%;\n  padding-left: 17.5%;\n}\n.container .example-card {\n  border-radius: 20px;\n  color: white;\n  background-color: #2a263d;\n  margin-top: 2%;\n  max-width: 600px;\n  max-height: 1500px;\n}\n.container .example-card img {\n  border-radius: 20px;\n}\n.container .example-card #footer {\n  text-align: center;\n  padding-bottom: 3%;\n}\n.container .example-card #footer button {\n  border-radius: 30px;\n  background-color: #af0101;\n  width: 80%;\n  text-decoration: none;\n}\n.container .example-card #footer button:hover {\n  color: white;\n}\n.container .example-header-image {\n  background-size: cover;\n}\n::ng-deep .mat-tab-list .mat-tab-labels .mat-tab-label {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS1wb3N0cy1zZWN0aW9uL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXDEzLTJcXFVuaXRcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXHVzZXItcHJvZmlsZVxcdXNlci1wcm9maWxlLXBvc3RzLXNlY3Rpb25cXHVzZXItcHJvZmlsZS1wb3N0cy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLXBvc3RzLXNlY3Rpb24vdXNlci1wcm9maWxlLXBvc3RzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREFFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEREk7RUFDRSxtQkFBQTtBQ0dOO0FEREk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDR047QURGTTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUNJUjtBREhRO0VBQ0UsWUFBQTtBQ0tWO0FEQ0U7RUFFRSxzQkFBQTtBQ0FKO0FESUE7RUFDRSxZQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLXBvc3RzLXNlY3Rpb24vdXNlci1wcm9maWxlLXBvc3RzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBwYWRkaW5nLWxlZnQ6IDE3LjUlO1xyXG4gIC5leGFtcGxlLWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTI2M2Q7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTAwcHg7XHJcbiAgICBpbWcge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgI2Zvb3RlciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDMlO1xyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NSwgMSwgMSk7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItbGlzdCAubWF0LXRhYi1sYWJlbHMgLm1hdC10YWItbGFiZWwge1xyXG4gIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTt9IiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBwYWRkaW5nLWxlZnQ6IDE3LjUlO1xufVxuLmNvbnRhaW5lciAuZXhhbXBsZS1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyNjNkO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWF4LWhlaWdodDogMTUwMHB4O1xufVxuLmNvbnRhaW5lciAuZXhhbXBsZS1jYXJkIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uY29udGFpbmVyIC5leGFtcGxlLWNhcmQgI2Zvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDMlO1xufVxuLmNvbnRhaW5lciAuZXhhbXBsZS1jYXJkICNmb290ZXIgYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmMDEwMTtcbiAgd2lkdGg6IDgwJTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNvbnRhaW5lciAuZXhhbXBsZS1jYXJkICNmb290ZXIgYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG46Om5nLWRlZXAgLm1hdC10YWItbGlzdCAubWF0LXRhYi1sYWJlbHMgLm1hdC10YWItbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/user-profile/user-profile-posts-section/user-profile-posts-section.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile-posts-section/user-profile-posts-section.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: UserProfilePostsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePostsSectionComponent", function() { return UserProfilePostsSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let UserProfilePostsSectionComponent = class UserProfilePostsSectionComponent {
    constructor(http) {
        this.http = http;
    }
    filter(event) {
        console.log(this.Filtered);
        this.Filtered = [];
        console.log(event["index"]);
        if (event["index"] == 1) {
            for (var i = 0; i < this.userData.length; i++) {
                if (this.userData[i]["type"] == "image") {
                    this.Filtered.push(this.userData[i]);
                }
            }
        }
        else if (event["index"] == 2) {
            for (var i = 0; i < this.userData.length; i++) {
                if (this.userData[i]["type"] == "video") {
                    this.Filtered.push(this.userData[i]);
                }
            }
        }
        else if (event["index"] == 3) {
            for (var i = 0; i < this.userData.length; i++) {
                if (this.userData[i]["type"] == "audio") {
                    this.Filtered.push(this.userData[i]);
                }
            }
        }
        else {
            this.Filtered = this.userData;
        }
        console.log(this.Filtered);
    }
    getData() {
        console.log(this.userData, "tesssssssssst");
        return this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/posts/get`, { user_id: this.userData[0].id })
            .subscribe(data => {
            console.log(data, "brr");
            this.userData = data;
        });
    }
    ngOnInit() {
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"];
        this.getData();
        setTimeout(() => {
            this.Filtered = this.userData;
        }, 1000);
    }
    widePost(link) {
        console.log(link);
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            showClass: {
                popup: "animated bounceIn"
            },
            hideClass: {
                popup: "animated bounceOut"
            },
            background: "transparent",
            heightAuto: true,
            width: 700,
            showConfirmButton: false,
            imageUrl: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/uploads/${link}`
        });
    }
};
UserProfilePostsSectionComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserProfilePostsSectionComponent.prototype, "userData", void 0);
UserProfilePostsSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-user-profile-posts-section",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile-posts-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile-posts-section/user-profile-posts-section.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-profile-posts-section.component.scss */ "./src/app/pages/user-profile/user-profile-posts-section/user-profile-posts-section.component.scss")).default]
    })
], UserProfilePostsSectionComponent);



/***/ }),

/***/ "./src/app/pages/user-profile/user-profile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#body {\n  padding-top: 5%;\n  background-color: #201d2f;\n  min-height: 100vh;\n  z-index: -1;\n  color: white;\n  text-align: center;\n}\n#body #pp {\n  padding: 1%;\n  border-radius: 100%;\n  width: 20%;\n  max-height: 300px;\n}\n#body #pp img {\n  z-index: -1;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 100%;\n  width: 200px;\n  max-height: 200px;\n}\n#body #pp #addIcon {\n  z-index: 1;\n  background-color: rgba(223, 223, 2, 0.829);\n  border-top-left-radius: 15%;\n  border-top-right-radius: 15%;\n  border-bottom-left-radius: 100%;\n  border-bottom-right-radius: 100%;\n  right: 48.8%;\n  top: 9.2%;\n  padding-top: 3px;\n  height: 30px;\n  width: 40px;\n  position: absolute;\n}\n#body #pp #addIcon #icon {\n  color: white;\n  cursor: pointer !important;\n}\n#body #pp #addIcon:hover {\n  background-color: rgba(243, 243, 4, 0.829);\n  cursor: pointer !important;\n}\n#body #pp input {\n  display: none;\n}\n#body #infos {\n  text-align: center;\n}\n#body #infos #name {\n  margin-top: 1%;\n}\n#body #infos #bio {\n  margin-top: 3%;\n  padding: 1% 5%;\n  margin-left: 15%;\n  width: 70%;\n  text-align: center;\n}\n#body hr {\n  z-index: -1;\n  background-color: #161420;\n  width: 60%;\n}\n#body #btns {\n  margin-top: -35px;\n  z-index: 1;\n  height: 50px;\n}\n#body #btns #editProfileDiv {\n  width: 10%;\n}\n#body #btns #editProfileDiv .editProfile {\n  background-color: #ffb500;\n  border-radius: 30px;\n}\n#body #btns #editProfileDiv .editProfile:hover {\n  color: white;\n  background-color: #db9e04;\n}\n#body #btns #followers {\n  width: 10%;\n}\n#body #btns #followers #followersBtn {\n  background-color: #ffb500;\n  border-radius: 30px;\n}\n#body #btns #followers #followersBtn:hover {\n  color: white;\n  background-color: #db9e04;\n}\n#body #btns #following {\n  width: 10%;\n}\n#body #btns #following #followingBtn {\n  background-color: #ffb500;\n  border-radius: 30px;\n}\n#body #btns #following #followingBtn:hover {\n  color: white;\n  background-color: #db9e04;\n}\n#body .follow {\n  width: 10%;\n  border-radius: 30px;\n  z-index: 1;\n  margin-top: -57px;\n  background-color: #ffb500;\n}\n#body .follow:hover {\n  color: white;\n  background-color: #db9e04;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1wcm9maWxlL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXDEzLTJcXFVuaXRcXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXHVzZXItcHJvZmlsZVxcdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFFQSxpQkFBQTtBQ0FKO0FEQ0k7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ047QURFSTtFQUNFLFVBQUE7RUFDQSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNBTjtBRENNO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0FDQ1I7QURDTTtFQUNFLDBDQUFBO0VBQ0EsMEJBQUE7QUNDUjtBREVJO0VBQ0UsYUFBQTtBQ0FOO0FESUU7RUFDRSxrQkFBQTtBQ0ZKO0FER0k7RUFDRSxjQUFBO0FDRE47QURHSTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNETjtBRE1FO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ0pKO0FET0U7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDTEo7QURPSTtFQUNFLFVBQUE7QUNMTjtBRE9NO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQ0xSO0FETVE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNKVjtBRFFJO0VBQ0UsVUFBQTtBQ05OO0FET007RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDTFI7QURNUTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0pWO0FEU0k7RUFDRSxVQUFBO0FDUE47QURRTTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNOUjtBRE9RO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDTFY7QURXRTtFQUVFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDVko7QURXSTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ1ROIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib2R5IHtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMWQyZjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB6LWluZGV4OiAtMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAjcHAge1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhZGRJY29uIHtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDIyMywgMiwgMC44MjkpO1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNSU7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNSU7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMDAlO1xyXG4gICAgICByaWdodDogNDguOCU7XHJcbiAgICAgIHRvcDogOS4yJTtcclxuICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAjaWNvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDMsIDQsIDAuODI5KTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5wdXQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI2luZm9zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICNuYW1lIHtcclxuICAgICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICB9XHJcbiAgICAjYmlvIHtcclxuICAgICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICAgIHBhZGRpbmc6IDElIDUlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIC8vICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMyOSk7XHJcbiAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gIH1cclxuICBociB7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjE0MjA7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuXHJcbiAgI2J0bnMge1xyXG4gICAgbWFyZ2luLXRvcDogLTM1cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgI2VkaXRQcm9maWxlRGl2IHtcclxuICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmYjUwMDtcclxuICAgICAgLmVkaXRQcm9maWxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNTAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI5ZTA0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgI2ZvbGxvd2VycyB7XHJcbiAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICNmb2xsb3dlcnNCdG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmI1MDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjllMDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI2ZvbGxvd2luZyB7XHJcbiAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICNmb2xsb3dpbmdCdG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmI1MDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjllMDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9sbG93IHtcclxuICAgIC8vIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luLXRvcDogLTU3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNTAwO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RiOWUwNDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiI2JvZHkge1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDFkMmY7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiAtMTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jYm9keSAjcHAge1xuICBwYWRkaW5nOiAxJTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDIwJTtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG59XG4jYm9keSAjcHAgaW1nIHtcbiAgei1pbmRleDogLTE7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB3aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuI2JvZHkgI3BwICNhZGRJY29uIHtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDIyMywgMiwgMC44MjkpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNSU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNSU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMDAlO1xuICByaWdodDogNDguOCU7XG4gIHRvcDogOS4yJTtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuI2JvZHkgI3BwICNhZGRJY29uICNpY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cbiNib2R5ICNwcCAjYWRkSWNvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDMsIDQsIDAuODI5KTtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG4jYm9keSAjcHAgaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuI2JvZHkgI2luZm9zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2JvZHkgI2luZm9zICNuYW1lIHtcbiAgbWFyZ2luLXRvcDogMSU7XG59XG4jYm9keSAjaW5mb3MgI2JpbyB7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBwYWRkaW5nOiAxJSA1JTtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgd2lkdGg6IDcwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2JvZHkgaHIge1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTQyMDtcbiAgd2lkdGg6IDYwJTtcbn1cbiNib2R5ICNidG5zIHtcbiAgbWFyZ2luLXRvcDogLTM1cHg7XG4gIHotaW5kZXg6IDE7XG4gIGhlaWdodDogNTBweDtcbn1cbiNib2R5ICNidG5zICNlZGl0UHJvZmlsZURpdiB7XG4gIHdpZHRoOiAxMCU7XG59XG4jYm9keSAjYnRucyAjZWRpdFByb2ZpbGVEaXYgLmVkaXRQcm9maWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjUwMDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbiNib2R5ICNidG5zICNlZGl0UHJvZmlsZURpdiAuZWRpdFByb2ZpbGU6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjllMDQ7XG59XG4jYm9keSAjYnRucyAjZm9sbG93ZXJzIHtcbiAgd2lkdGg6IDEwJTtcbn1cbiNib2R5ICNidG5zICNmb2xsb3dlcnMgI2ZvbGxvd2Vyc0J0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4jYm9keSAjYnRucyAjZm9sbG93ZXJzICNmb2xsb3dlcnNCdG46aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjllMDQ7XG59XG4jYm9keSAjYnRucyAjZm9sbG93aW5nIHtcbiAgd2lkdGg6IDEwJTtcbn1cbiNib2R5ICNidG5zICNmb2xsb3dpbmcgI2ZvbGxvd2luZ0J0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4jYm9keSAjYnRucyAjZm9sbG93aW5nICNmb2xsb3dpbmdCdG46aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjllMDQ7XG59XG4jYm9keSAuZm9sbG93IHtcbiAgd2lkdGg6IDEwJTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLXRvcDogLTU3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI1MDA7XG59XG4jYm9keSAuZm9sbG93OmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI5ZTA0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/user-profile/user-profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let UserProfileComponent = class UserProfileComponent {
    constructor(_http, http, activatedRoute, router) {
        this._http = _http;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.followed = false;
        this.followingLength = 0;
        this.followData = [];
        this.following = [];
        this.followData_sec = [];
        this.followers = [];
        this.followersLength = 0;
        this.followersNames = "";
        this.followersUserNames = "";
    }
    ngOnInit() {
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"];
        this.activatedRoute.params.subscribe(params => {
            var id = params["id"];
            this.check = params["id"];
            var myId = localStorage.getItem("user_id");
            if (myId === id) {
                this.router.navigate(["/profile"]);
            }
            else {
                this.getFollowing();
                this.getPeopleFollowingYou();
                this.http
                    .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/findById`, { user_id: id })
                    .subscribe(data => {
                    this.userData = data;
                    console.log(this.userData, "FROM USER PROF");
                });
            }
            this.http
                .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/follow/getfollowers`, {
                followed_id: id
            })
                .subscribe(data => {
                for (var i = 0; i < data["length"]; i++) {
                    if (data[i]["follower_id"].myId === data[i]["followed_id"].id) {
                        console.log("YOU ARE FOLLOWING HIM");
                        this.followed = true;
                        return this.followed;
                    }
                    else {
                        console.log("YOU ARE NOT FOLLOWING HIM");
                        return this.followed;
                    }
                }
                // console.log(data, "data");
                console.log(data, "ppl followed ");
            });
        });
    }
    follow(id) {
        var follower = localStorage.getItem("user_id");
        this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/follow/create`, {
            follower_id: follower,
            followed_id: id
        })
            .subscribe(data => {
            this.followed = true;
            console.log(data, "user profile res follow");
        });
    }
    unFollow(id) {
        var follower = localStorage.getItem("user_id");
        this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/follow/delete`, {
            follower_id: follower,
            followed_id: id
        })
            .subscribe(data => {
            this.followed = false;
            console.log(data, "user profile res UNFOLLOW");
        });
    }
    getFollowing() {
        console.log("invoked 1");
        this._http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/follow/getfollowersinfo`)
            .subscribe((data) => {
            data.forEach(element => {
                this.followData.push(element);
            });
            for (var i = 0; i < this.followData.length; i++) {
                if (this.followData[i]["follower_id"] == this.check) {
                    this.following.push(this.followData[i]);
                    this.followingLength = this.following["length"];
                }
            }
            // this.followingLength = this.followData["length"];
        });
        console.log("people u follow", this.following);
    }
    getPeopleFollowingYou() {
        console.log("invoked 2");
        this._http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}/follow/getfollowinglist`)
            .subscribe((data) => {
            data.forEach(element => {
                this.followData_sec.push(element);
            });
            for (var i = 0; i < this.followData_sec.length; i++) {
                if (this.followData_sec[i]["followed_id"] ==
                    this.check) {
                    this.followers.push(this.followData_sec[i]);
                    this.followersLength = this.followers["length"];
                    console.log("ayy", this.followersLength);
                    this.followers.forEach(element => {
                        this.followersNames += element.name;
                        this.followersUserNames += element.username;
                        // this.followersUserNames += element.username + "<br>";
                        // this.followersPhoto +=
                        //   `http://127.0.0.1:5000/uploads/${element.photo}` + "<br>";
                    });
                }
            }
            console.log("************* people that follow u", this.followers);
        });
    }
};
UserProfileComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-user-profile",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/pages/user-profile/user-profile.component.scss")).default]
    })
], UserProfileComponent);



/***/ }),

/***/ "./src/app/pages/user/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/user/login/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#body {\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  bottom: 0;\n}\n#body #bgImg {\n  background-color: #ba4555;\n  height: 100vh;\n  bottom: 0;\n}\n#body #bgImg img {\n  float: left;\n  width: 100%;\n}\n#body h2 {\n  text-align: center;\n  color: #ba4555;\n  margin-top: 20%;\n}\n#formLogin {\n  padding: 20% 20% 0;\n  border-radius: 10%;\n  font-weight: bold;\n  margin: auto;\n  width: 100%;\n  display: grid;\n}\n#formLogin label {\n  color: #863055;\n}\n#formLogin input {\n  border-bottom: 1px solid #6e6e6e;\n  border-radius: 10px;\n  -webkit-padding-start: 10px;\n          padding-inline-start: 10px;\n  height: 35px;\n}\n#formLogin button {\n  width: 100%;\n  background-color: #3d3d3d;\n}\n#formLogin button:hover {\n  background: -webkit-gradient(linear, left top, right top, from(#863055), to(#811b29));\n  background: linear-gradient(to right, #863055, #811b29);\n}\n.example-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.example-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci9sb2dpbi9DOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFwxMy0yXFxVbml0XFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFx1c2VyXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FDQ0Y7QURDRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUNDSjtBREFJO0VBQ0UsV0FBQTtFQUVBLFdBQUE7QUNDTjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0RKO0FES0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNGRjtBRElFO0VBQ0UsY0FBQTtBQ0ZKO0FES0U7RUFDRSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7VUFBQSwwQkFBQTtFQUNBLFlBQUE7QUNISjtBRE1FO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FDSko7QURLSTtFQUVFLHFGQUFBO0VBQUEsdURBQUE7QUNKTjtBRFNBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDTkY7QURTQTtFQUNFLFdBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm9keSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG5cclxuICAjYmdJbWcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JhNDU1NTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBpbWcge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgLy8gei1pbmRleDogLTE7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNiYTQ1NTU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgfVxyXG59XHJcblxyXG4jZm9ybUxvZ2luIHtcclxuICBwYWRkaW5nOiAyMCUgMjAlIDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG5cclxuICBsYWJlbCB7XHJcbiAgICBjb2xvcjogIzg2MzA1NTtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTEwLCAxMTAsIDExMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDYxLCA2MSk7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmU4YzAwLCAjZjgzNjAwKTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjODYzMDU1LCByZ2IoMTI5LCAyNywgNDEpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCIjYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn1cbiNib2R5ICNiZ0ltZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYTQ1NTU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJvdHRvbTogMDtcbn1cbiNib2R5ICNiZ0ltZyBpbWcge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG4jYm9keSBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNiYTQ1NTU7XG4gIG1hcmdpbi10b3A6IDIwJTtcbn1cblxuI2Zvcm1Mb2dpbiB7XG4gIHBhZGRpbmc6IDIwJSAyMCUgMDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbn1cbiNmb3JtTG9naW4gbGFiZWwge1xuICBjb2xvcjogIzg2MzA1NTtcbn1cbiNmb3JtTG9naW4gaW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzZlNmU2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEwcHg7XG4gIGhlaWdodDogMzVweDtcbn1cbiNmb3JtTG9naW4gYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDNkM2Q7XG59XG4jZm9ybUxvZ2luIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzg2MzA1NSwgIzgxMWIyOSk7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/user/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let LoginComponent = class LoginComponent {
    // x = "";
    constructor(fb, route, http, router, httpService) {
        this.fb = fb;
        this.route = route;
        this.http = http;
        this.router = router;
        this.httpService = httpService;
        this.errors = [];
        this.notifyMessage = "";
        this.token = "";
        this.email = "";
        this.password = "";
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.loginForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    isInvalidForm(fieldName) {
        return (this.loginForm.controls[fieldName].invalid &&
            (this.loginForm.controls[fieldName].dirty ||
                this.loginForm.controls[fieldName].touched));
    }
    isRequired(fieldName) {
        return this.loginForm.controls[fieldName].errors.required;
    }
    // This should be in a service and is called like this await this.authService.login().subscribe()
    // The login inside the service should be async login(){}
    login() {
        let options = {
            withCredentials: true
        };
        this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"]["url"]}/login`, this.loginForm.value, options)
            .subscribe(data => {
            if (data["success"]) {
                localStorage.setItem("user", JSON.stringify(data["payload"]));
                localStorage.setItem("user_id", data["payload"]["id"]);
                localStorage.setItem("email", data["payload"]["email"]);
                localStorage.setItem("token", data["token"]);
                localStorage.setItem("refreshtoken", data["refreshToken"]);
                this.token = data["token"];
                this.router.navigate(["home"]);
            }
            else {
                this.email = "";
                this.password = "";
                alert("invalid Credintials");
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/user/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/pages/user/signup/signup.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/user/signup/signup.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#body {\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  bottom: 0;\n}\n#body #bgImg {\n  background-color: #c7a793;\n  height: 100vh;\n  bottom: 0;\n}\n#body #bgImg img {\n  float: right;\n  width: 100%;\n}\n#body h2 {\n  text-align: center;\n  color: #ba4555;\n  margin-top: 15%;\n}\n#formSignup {\n  padding: 10% 20% 0;\n  border-radius: 10%;\n  font-weight: bold;\n  width: 100%;\n  display: grid;\n}\n#formSignup label {\n  color: #863055;\n}\n#formSignup input {\n  border-bottom: 1px solid #6e6e6e;\n  border-radius: 10px;\n  -webkit-padding-start: 10px;\n          padding-inline-start: 10px;\n  height: 35px;\n}\n#formSignup button {\n  width: 100%;\n  background-color: #3d3d3d;\n}\n#formSignup button:hover {\n  background: -webkit-gradient(linear, left top, right top, from(#ba4555), to(#9c2131));\n  background: linear-gradient(to right, #ba4555, #9c2131);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci9zaWdudXAvQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcMTMtMlxcVW5pdFxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcdXNlclxcc2lnbnVwXFxzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7QUNDRjtBRENFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQ0NKO0FEQUk7RUFDRSxZQUFBO0VBRUEsV0FBQTtBQ0NOO0FER0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDREo7QURLQTtFQUVFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDSEY7QURLRTtFQUNFLGNBQUE7QUNISjtBRE1FO0VBQ0UsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO1VBQUEsMEJBQUE7RUFDQSxZQUFBO0FDSko7QURPRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQ0xKO0FETUk7RUFDRSxxRkFBQTtFQUFBLHVEQUFBO0FDSk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm9keSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG5cclxuICAjYmdJbWcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M3YTc5MztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBpbWcge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIC8vIHotaW5kZXg6IC0xO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjYmE0NTU1O1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gIH1cclxufVxyXG5cclxuI2Zvcm1TaWdudXAge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBwYWRkaW5nOiAxMCUgMjAlIDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGNvbG9yOiAjODYzMDU1O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxMTAsIDExMCwgMTEwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMTBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgNjEsIDYxKTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNiYTQ1NTUsICM5YzIxMzEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIjYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn1cbiNib2R5ICNiZ0ltZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjN2E3OTM7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJvdHRvbTogMDtcbn1cbiNib2R5ICNiZ0ltZyBpbWcge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2JvZHkgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjYmE0NTU1O1xuICBtYXJnaW4tdG9wOiAxNSU7XG59XG5cbiNmb3JtU2lnbnVwIHtcbiAgcGFkZGluZzogMTAlIDIwJSAwO1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbn1cbiNmb3JtU2lnbnVwIGxhYmVsIHtcbiAgY29sb3I6ICM4NjMwNTU7XG59XG4jZm9ybVNpZ251cCBpbnB1dCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNmU2ZTZlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMTBweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuI2Zvcm1TaWdudXAgYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDNkM2Q7XG59XG4jZm9ybVNpZ251cCBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNiYTQ1NTUsICM5YzIxMzEpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/user/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/user/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let SignupComponent = class SignupComponent {
    constructor(fb, route, http, _router) {
        this.fb = fb;
        this.route = route;
        this.http = http;
        this._router = _router;
        this.errors = [];
        this.notifyMessage = "";
        this.name = "";
        this.email = "";
        this.username = "";
    }
    ngOnInit() {
        this.createForm();
        this.route.params.subscribe(params => {
            if (params.registered === "success") {
                this.notifyMessage = "You have been successfully registered";
            }
        });
    }
    createForm() {
        this.signupForm = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    isInvalidForm(fieldName) {
        return (this.signupForm.controls[fieldName].invalid &&
            (this.signupForm.controls[fieldName].dirty ||
                this.signupForm.controls[fieldName].touched));
    }
    isRequired(fieldName) {
        return this.signupForm.controls[fieldName].errors.required;
    }
    signup() {
        this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"]["url"]}/signup`, this.signupForm.value)
            .subscribe(data => {
            console.log(data);
            if (data["success"]) {
                localStorage.setItem("user", JSON.stringify(data["payload"]));
                localStorage.setItem("user_id", data["payload"]["id"]);
                localStorage.setItem("email", data["payload"]["email"]);
                localStorage.setItem("token", data["token"]);
                localStorage.setItem("refreshtoken", data["refreshtoken"]);
                this._router.navigate(["edit"]);
            }
            else {
                this.name = "";
                this.email = "";
                this.username = "";
                alert(data["message"] || data["email"] || data["password"] || data["confirmPassword"]);
            }
        });
        // console.log(this.signupForm.value);
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-signup",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/pages/user/signup/signup.component.scss")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/pipes/date-ago.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/date-ago.pipe.ts ***!
  \****************************************/
/*! exports provided: DateAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAgoPipe", function() { return DateAgoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DateAgoPipe = class DateAgoPipe {
    transform(value, args) {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29)
                // less than 30 seconds ago will show as 'Just now'
                return "Just now";
            const intervals = {
                year: 31536000,
                month: 2592000,
                week: 604800,
                day: 86400,
                hour: 3600,
                minute: 60,
                second: 1
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + " " + i + " ago"; // singular (1 day ago)
                    }
                    else {
                        return counter + " " + i + "s ago"; // plural (2 days ago)
                    }
            }
        }
        return value;
    }
};
DateAgoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "dateAgo",
        pure: true
    })
], DateAgoPipe);



/***/ }),

/***/ "./src/app/pipes/reverse.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/reverse.pipe.ts ***!
  \***************************************/
/*! exports provided: ReversePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReversePipe = class ReversePipe {
    transform(value) {
        if (value)
            return value.slice().reverse();
    }
};
ReversePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "reverse"
    })
], ReversePipe);



/***/ }),

/***/ "./src/app/pipes/safe.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/safe.pipe.ts ***!
  \************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, ...args) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
    })
], SafePipe);



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    loggedIn() {
        const user = JSON.parse(localStorage.getItem("user"));
        return user != null ? true : false;
    }
    getLoggedInUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
    getUsers() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]["url"]}/follow/getfollowersInfo`);
    }
    getChatRoomsChat(chatRoom) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]["url"]}/chatroom/` + chatRoom);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], UserService);



/***/ }),

/***/ "./src/app/websocket.service.ts":
/*!**************************************!*\
  !*** ./src/app/websocket.service.ts ***!
  \**************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





let WebsocketService = class WebsocketService {
    constructor() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["url"]}`);
    }
    joinRoom(data) {
        console.log(data);
        this.socket.emit("join", data);
    }
    sendMessage(data) {
        this.socket.emit("message", data);
    }
    newMessageReceived() {
        const observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on("new message", data => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }
    typing(data) {
        this.socket.emit("typing", data);
    }
    receivedTyping() {
        const observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on("typing", data => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }
};
WebsocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], WebsocketService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    url: 'http://localhost:5000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hp\Desktop\13-2\Unit\client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map