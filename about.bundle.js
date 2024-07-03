/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  font-size: 100%;
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  color: hsl(0, 0%, 100%);
  background-color: hsl(0, 0%, 4%);
  line-height: 1.5;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
}

img,
picture,
svg {
  display: block;
}

h1,
h2,
h3 {
  margin: 0;
  line-height: 1.1;
}

h1,
h2 {
  font-size: 3.75rem;
  font-weight: 700;
  line-height: 1.3;
}

h3 {
  font-size: 1.375rem;
  font-weight: 700;
}

a,
a:visited,
a:active {
  text-decoration: none;
}

@media screen and (max-width: 48rem) {
  h1,
  h2 {
    font-size: 3.125rem;
  }
}
@media screen and (max-width: 26.5625rem) {
  h1,
  h2 {
    font-size: 2rem;
  }
}
.container {
  max-width: 99.375rem;
  margin: 0 auto;
}

header {
  padding: 3rem 0;
  border-bottom: 1px solid hsl(0, 0%, 33%);
}

#header-layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  display: flex;
  gap: 3rem;
}
ul a {
  color: hsl(0, 0%, 65%);
  transition: color 0.1s;
}
ul a:hover {
  color: hsl(0, 0%, 100%);
}
ul .active-nav {
  color: hsl(0, 0%, 100%);
}

#mobile-nav-btn {
  display: none;
  width: 2.5rem;
  height: 3.125rem;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
}
#mobile-nav-btn .mobile-line {
  height: 0.25rem;
  width: 100%;
  background-color: hsl(0, 0%, 65%);
  border-radius: 0.625rem;
}

@media screen and (max-width: 101.25rem) {
  header {
    padding: 3rem;
  }
}
@media screen and (max-width: 56.875rem) {
  #desktop-nav-ctn {
    display: none;
  }
  #mobile-nav-btn {
    display: flex;
  }
}
@media screen and (max-width: 26.5625rem) {
  header {
    padding: 1.5rem;
  }
  header img {
    max-width: 15rem;
  }
}
@media screen and (max-width: 21.875rem) {
  header img {
    max-width: 10rem;
  }
}
#home {
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  gap: 12.5rem;
  max-width: 75.375rem;
  margin: 0 auto;
  align-items: center;
}
#home #welcome {
  display: flex;
  align-items: center;
  gap: 7.5rem;
}
#home #welcome div {
  width: 60%;
}
#home #welcome p {
  padding-top: 1.5rem;
}
#home #welcome img {
  width: 40%;
  max-width: 18.75rem;
}
#home #header-location {
  color: hsl(0, 0%, 65%);
  font-weight: 300;
}
#home #projects {
  display: flex;
  flex-direction: column;
  max-width: 49.6875rem;
  width: 100%;
  gap: 7.5rem;
}
#home #projects #projects-one-liner {
  text-align: center;
}
#home .project-ctn {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
#home .project-ctn .project-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#home .project-ctn .project-heading p {
  font-size: 5rem;
  font-weight: 100;
}
#home #about-me,
#home #skills-ctn {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}
#home #about-me h2,
#home #skills-ctn h2 {
  text-align: center;
}
#home #about-me {
  max-width: 41.0625rem;
}
#home #skills-ctn {
  max-width: 61.9375rem;
  width: 100%;
}
#home #skills-ctn #skills-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem 0;
}
#home #skills-ctn .skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 20%;
}
#home #skills-ctn .skill h3 {
  text-align: center;
}
#home #skills-ctn .skill-img-ctn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6.5rem;
  width: 6.5rem;
  border: 1px solid hsl(0, 0%, 65%);
  border-radius: 6.25rem;
}
#home #skills-ctn .skill-img-ctn img {
  max-height: 2.5rem;
  max-width: 2.5rem;
}

@media screen and (max-width: 64rem) {
  #home {
    padding: 7.5rem 3rem;
  }
}
@media screen and (max-width: 48rem) {
  body {
    font-size: 1rem;
  }
  #home #welcome {
    flex-direction: column;
    gap: 2.5rem;
  }
  #home #welcome div,
  #home #welcome img {
    width: 100%;
  }
  #home .project-ctn {
    gap: 2rem;
  }
  #home .project-ctn .project-heading p {
    font-size: 3.75rem;
  }
  #home #skills-ctn .skill {
    width: 33%;
  }
}
@media screen and (max-width: 26.5625rem) {
  #home {
    gap: 5rem;
    padding: 5rem 1.5rem;
  }
  #home #projects {
    gap: 3rem;
  }
  #home .project-ctn .project-heading p {
    font-size: 2.5rem;
  }
  #home #skills-ctn .skill {
    width: 50%;
  }
  #home #about-me,
  #home #skills-ctn {
    gap: 2.5rem;
  }
}
@media screen and (max-width: 20rem) {
  #home #skills-ctn .skill h3 {
    font-size: 1.125rem;
  }
}
#btn-top {
  position: fixed;
  right: 3.125rem;
  bottom: 3.125rem;
  z-index: 3;
}

#btn-top:hover {
  cursor: pointer;
}

@media screen and (max-width: 26.5625rem) {
  #btn-top {
    right: 1.5625rem;
    bottom: 1.5625rem;
  }
}
button {
  color: hsl(0, 0%, 100%);
  font-size: 1.25rem;
  padding: 0.75rem 3.75rem;
  border-radius: 3.125rem;
  background-color: hsl(235, 75%, 58%);
  border: none;
  transition: background-color 0.1s;
}

button:hover {
  cursor: pointer;
  background-color: hsl(235, 71%, 39%);
}

.btn-reset {
  margin: 0 auto;
}

@media screen and (max-width: 26.5625rem) {
  button {
    font-size: 1rem;
  }
}
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  font-size: 2rem;
  height: 19.5rem;
  border-top: 1px solid hsl(0, 0%, 33%);
}
footer div {
  display: flex;
  gap: 3rem;
}
footer a {
  color: hsl(0, 0%, 100%);
  transition: color 0.1s;
}
footer a:hover {
  color: hsl(0, 0%, 65%);
}

.main-banner {
  position: relative;
  text-align: center;
}
.main-banner h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.main-banner img {
  width: 100%;
}

@media screen and (max-width: 26.5625rem) {
  .main-banner h1 {
    font-size: 1.5rem;
  }
}
#project-list {
  display: flex;
  flex-direction: column;
  padding: 7.5rem 0;
  gap: 15rem;
}
#project-list .project {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.875rem;
}
#project-list .project img {
  width: 50%;
  height: 100%;
}
#project-list .project-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 50%;
}
#project-list .project-content p {
  max-width: 32.5rem;
  font-size: 1rem;
}

@media screen and (max-width: 101.25rem) {
  #project-list {
    padding: 7.5rem 3rem;
  }
}
@media screen and (max-width: 64rem) {
  #project-list {
    gap: 7.5rem;
  }
  #project-list .project-content {
    gap: 1.5rem;
  }
}
@media screen and (max-width: 48rem) {
  #project-list .project {
    flex-direction: column;
  }
  #project-list .project img {
    width: 100%;
  }
  #project-list .project .project-content {
    width: 100%;
  }
  #project-list .project .project-content p {
    max-width: none;
  }
  #project-list #coffee-time-project {
    flex-direction: column-reverse;
  }
}
@media screen and (max-width: 26.5625rem) {
  #project-list {
    gap: 5rem;
    padding: 5rem 1.5rem;
  }
}
#experience-page {
  display: flex;
}
#experience-page aside {
  padding: 7.5rem 0;
  border-right: 1px solid hsl(0, 0%, 33%);
  width: 25%;
}
#experience-page aside ul {
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 5rem;
  gap: 1.5rem;
}
#experience-page aside h4 {
  font-weight: 700;
}
#experience-page section {
  padding: 7.5rem 0 7.5rem 5rem;
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
}
#experience-page .experience-content {
  font-size: 1rem;
}
#experience-page .experience-content ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: disc;
  list-style-position: outside;
}
#experience-page .experience-content .dates {
  font-size: 1.25rem;
  font-style: italic;
  font-weight: 400;
  display: inline-block;
}
#experience-page .experience-content .title {
  font-size: 2.5rem;
  font-weight: 300;
  font-style: normal;
}
#experience-page .experience-content p {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
}

@media screen and (max-width: 101.25rem) {
  #experience-page aside,
  #experience-page section {
    padding: 7.5rem 3rem;
  }
}
@media screen and (max-width: 64rem) {
  #experience-page .experience-content .dates {
    font-size: 1rem;
  }
  #experience-page .experience-content .title {
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 48rem) {
  #experience-page aside {
    display: none;
  }
  #experience-page section {
    width: 100%;
  }
}
@media screen and (max-width: 26.5625rem) {
  #experience-page {
    padding: 0 1.5rem;
  }
  #experience-page section {
    padding: 5rem 0;
    gap: 5rem;
  }
}
#about-content {
  display: flex;
  padding: 7.5rem 0;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
}
#about-content img {
  width: 50%;
  max-width: 49.6875rem;
}

@media screen and (max-width: 101.25rem) {
  #about-content {
    padding: 7.5rem 3rem;
  }
}
@media screen and (max-width: 64rem) {
  p {
    font-size: 1rem;
  }
}
@media screen and (max-width: 48rem) {
  #about-content {
    flex-direction: column;
  }
  #about-content img {
    width: 100%;
  }
}
@media screen and (max-width: 48rem) {
  #about-content {
    padding: 5rem 1.5rem;
  }
}
.project-page {
  display: flex;
}
.project-page aside {
  padding: 7.5rem 0;
  border-right: 1px solid hsl(0, 0%, 33%);
  width: 25%;
}
.project-page aside ul {
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 5rem;
  gap: 1.5rem;
}
.project-page section {
  padding: 7.5rem 0;
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
}
.project-page section .project-section {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
}
.project-page section h2 {
  font-size: 2.5rem;
  font-weight: 300;
}
.project-page section p {
  max-width: 49.6875rem;
}
.project-page section img {
  width: 100%;
  height: auto;
  max-height: 28.125rem;
  max-width: 50rem;
}
.project-page #version-one img {
  max-height: 43.75rem;
}

@media screen and (max-width: 101.25rem) {
  .project-page aside,
  .project-page section {
    padding: 7.5rem 3rem;
  }
}
@media screen and (max-width: 48rem) {
  .project-page aside {
    display: none;
  }
  .project-page section {
    width: 100%;
  }
}
@media screen and (max-width: 26.5625rem) {
  .project-page section {
    padding: 5rem 1.5rem;
    gap: 5rem;
  }
  .project-page section h2 {
    font-size: 1.5rem;
  }
  .project-page section .project-section {
    gap: 1.5rem;
  }
}
.mobile-nav {
  display: flex;
  visibility: hidden;
  opacity: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  transition: background-color 0.2s ease-out;
  position: fixed;
  z-index: 10;
}
.mobile-nav .mobile-nav-bg {
  width: 0%;
  transition: width 0.2s ease-in;
  background-color: hsl(0, 0%, 4%);
  overflow: hidden;
}
.mobile-nav .active-ctn {
  width: 80%;
}
.mobile-nav .nav-links {
  white-space: nowrap;
}
.mobile-nav #btn-ctn {
  width: 20%;
}
.mobile-nav button {
  background: none;
  color: hsl(0, 0%, 0%);
  font-size: 2rem;
  padding-left: 1rem;
  position: relative;
  top: 1rem;
}
.mobile-nav #mobile-nav-ctn {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.25rem;
  padding: 2rem;
}

.active-bg {
  background-color: rgba(255, 255, 255, 0.8);
  visibility: visible;
  opacity: 1;
}`, "",{"version":3,"sources":["webpack://./src/scss/globals/_general.scss","webpack://./src/scss/styles.scss","webpack://./src/scss/globals/_fonts.scss","webpack://./src/scss/globals/_colors.scss","webpack://./src/scss/globals/_reset.scss","webpack://./src/scss/globals/_typography.scss","webpack://./src/scss/globals/_container.scss","webpack://./src/scss/components/_header.scss","webpack://./src/scss/components/_mainHome.scss","webpack://./src/scss/components/_toTopBtn.scss","webpack://./src/scss/components/_buttons.scss","webpack://./src/scss/components/_footer.scss","webpack://./src/scss/components/_mainBanner.scss","webpack://./src/scss/components/_portfolioPage.scss","webpack://./src/scss/components/_experiencePage.scss","webpack://./src/scss/components/_aboutPage.scss","webpack://./src/scss/components/_projectPages.scss","webpack://./src/scss/components/_mobileNav.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"../utilities/\" as *;\r\n@use \"colors\" as *;\r\n@use \"fonts\" as *;\r\n\r\nhtml {\r\n\tfont-size: 100%;\r\n\tscroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n\tfont-family: $font-primary;\r\n\tfont-size: rem(18);\r\n\tcolor: $clr-white;\r\n\tbackground-color: $clr-bg;\r\n\tline-height: 1.5;\r\n}\r\n","html {\n  font-size: 100%;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: \"Inter\", sans-serif;\n  font-size: 1.125rem;\n  color: hsl(0, 0%, 100%);\n  background-color: hsl(0, 0%, 4%);\n  line-height: 1.5;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n  line-height: 1.1;\n}\n\nh1,\nh2 {\n  font-size: 3.75rem;\n  font-weight: 700;\n  line-height: 1.3;\n}\n\nh3 {\n  font-size: 1.375rem;\n  font-weight: 700;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\n@media screen and (max-width: 48rem) {\n  h1,\n  h2 {\n    font-size: 3.125rem;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  h1,\n  h2 {\n    font-size: 2rem;\n  }\n}\n.container {\n  max-width: 99.375rem;\n  margin: 0 auto;\n}\n\nheader {\n  padding: 3rem 0;\n  border-bottom: 1px solid hsl(0, 0%, 33%);\n}\n\n#header-layout {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nul {\n  list-style: none;\n  display: flex;\n  gap: 3rem;\n}\nul a {\n  color: hsl(0, 0%, 65%);\n  transition: color 0.1s;\n}\nul a:hover {\n  color: hsl(0, 0%, 100%);\n}\nul .active-nav {\n  color: hsl(0, 0%, 100%);\n}\n\n#mobile-nav-btn {\n  display: none;\n  width: 2.5rem;\n  height: 3.125rem;\n  flex-direction: column;\n  gap: 0.5rem;\n  justify-content: center;\n}\n#mobile-nav-btn .mobile-line {\n  height: 0.25rem;\n  width: 100%;\n  background-color: hsl(0, 0%, 65%);\n  border-radius: 0.625rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  header {\n    padding: 3rem;\n  }\n}\n@media screen and (max-width: 56.875rem) {\n  #desktop-nav-ctn {\n    display: none;\n  }\n  #mobile-nav-btn {\n    display: flex;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  header {\n    padding: 1.5rem;\n  }\n  header img {\n    max-width: 15rem;\n  }\n}\n@media screen and (max-width: 21.875rem) {\n  header img {\n    max-width: 10rem;\n  }\n}\n#home {\n  display: flex;\n  flex-direction: column;\n  padding: 12.5rem 0;\n  gap: 12.5rem;\n  max-width: 75.375rem;\n  margin: 0 auto;\n  align-items: center;\n}\n#home #welcome {\n  display: flex;\n  align-items: center;\n  gap: 7.5rem;\n}\n#home #welcome div {\n  width: 60%;\n}\n#home #welcome p {\n  padding-top: 1.5rem;\n}\n#home #welcome img {\n  width: 40%;\n  max-width: 18.75rem;\n}\n#home #header-location {\n  color: hsl(0, 0%, 65%);\n  font-weight: 300;\n}\n#home #projects {\n  display: flex;\n  flex-direction: column;\n  max-width: 49.6875rem;\n  width: 100%;\n  gap: 7.5rem;\n}\n#home #projects #projects-one-liner {\n  text-align: center;\n}\n#home .project-ctn {\n  display: flex;\n  flex-direction: column;\n  gap: 2.5rem;\n}\n#home .project-ctn .project-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#home .project-ctn .project-heading p {\n  font-size: 5rem;\n  font-weight: 100;\n}\n#home #about-me,\n#home #skills-ctn {\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n}\n#home #about-me h2,\n#home #skills-ctn h2 {\n  text-align: center;\n}\n#home #about-me {\n  max-width: 41.0625rem;\n}\n#home #skills-ctn {\n  max-width: 61.9375rem;\n  width: 100%;\n}\n#home #skills-ctn #skills-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 4rem 0;\n}\n#home #skills-ctn .skill {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n  width: 20%;\n}\n#home #skills-ctn .skill h3 {\n  text-align: center;\n}\n#home #skills-ctn .skill-img-ctn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 6.5rem;\n  width: 6.5rem;\n  border: 1px solid hsl(0, 0%, 65%);\n  border-radius: 6.25rem;\n}\n#home #skills-ctn .skill-img-ctn img {\n  max-height: 2.5rem;\n  max-width: 2.5rem;\n}\n\n@media screen and (max-width: 64rem) {\n  #home {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  body {\n    font-size: 1rem;\n  }\n  #home #welcome {\n    flex-direction: column;\n    gap: 2.5rem;\n  }\n  #home #welcome div,\n  #home #welcome img {\n    width: 100%;\n  }\n  #home .project-ctn {\n    gap: 2rem;\n  }\n  #home .project-ctn .project-heading p {\n    font-size: 3.75rem;\n  }\n  #home #skills-ctn .skill {\n    width: 33%;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #home {\n    gap: 5rem;\n    padding: 5rem 1.5rem;\n  }\n  #home #projects {\n    gap: 3rem;\n  }\n  #home .project-ctn .project-heading p {\n    font-size: 2.5rem;\n  }\n  #home #skills-ctn .skill {\n    width: 50%;\n  }\n  #home #about-me,\n  #home #skills-ctn {\n    gap: 2.5rem;\n  }\n}\n@media screen and (max-width: 20rem) {\n  #home #skills-ctn .skill h3 {\n    font-size: 1.125rem;\n  }\n}\n#btn-top {\n  position: fixed;\n  right: 3.125rem;\n  bottom: 3.125rem;\n  z-index: 3;\n}\n\n#btn-top:hover {\n  cursor: pointer;\n}\n\n@media screen and (max-width: 26.5625rem) {\n  #btn-top {\n    right: 1.5625rem;\n    bottom: 1.5625rem;\n  }\n}\nbutton {\n  color: hsl(0, 0%, 100%);\n  font-size: 1.25rem;\n  padding: 0.75rem 3.75rem;\n  border-radius: 3.125rem;\n  background-color: hsl(235, 75%, 58%);\n  border: none;\n  transition: background-color 0.1s;\n}\n\nbutton:hover {\n  cursor: pointer;\n  background-color: hsl(235, 71%, 39%);\n}\n\n.btn-reset {\n  margin: 0 auto;\n}\n\n@media screen and (max-width: 26.5625rem) {\n  button {\n    font-size: 1rem;\n  }\n}\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n  font-size: 2rem;\n  height: 19.5rem;\n  border-top: 1px solid hsl(0, 0%, 33%);\n}\nfooter div {\n  display: flex;\n  gap: 3rem;\n}\nfooter a {\n  color: hsl(0, 0%, 100%);\n  transition: color 0.1s;\n}\nfooter a:hover {\n  color: hsl(0, 0%, 65%);\n}\n\n.main-banner {\n  position: relative;\n  text-align: center;\n}\n.main-banner h1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main-banner img {\n  width: 100%;\n}\n\n@media screen and (max-width: 26.5625rem) {\n  .main-banner h1 {\n    font-size: 1.5rem;\n  }\n}\n#project-list {\n  display: flex;\n  flex-direction: column;\n  padding: 7.5rem 0;\n  gap: 15rem;\n}\n#project-list .project {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1.875rem;\n}\n#project-list .project img {\n  width: 50%;\n  height: 100%;\n}\n#project-list .project-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3rem;\n  width: 50%;\n}\n#project-list .project-content p {\n  max-width: 32.5rem;\n  font-size: 1rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  #project-list {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 64rem) {\n  #project-list {\n    gap: 7.5rem;\n  }\n  #project-list .project-content {\n    gap: 1.5rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #project-list .project {\n    flex-direction: column;\n  }\n  #project-list .project img {\n    width: 100%;\n  }\n  #project-list .project .project-content {\n    width: 100%;\n  }\n  #project-list .project .project-content p {\n    max-width: none;\n  }\n  #project-list #coffee-time-project {\n    flex-direction: column-reverse;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #project-list {\n    gap: 5rem;\n    padding: 5rem 1.5rem;\n  }\n}\n#experience-page {\n  display: flex;\n}\n#experience-page aside {\n  padding: 7.5rem 0;\n  border-right: 1px solid hsl(0, 0%, 33%);\n  width: 25%;\n}\n#experience-page aside ul {\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 5rem;\n  gap: 1.5rem;\n}\n#experience-page aside h4 {\n  font-weight: 700;\n}\n#experience-page section {\n  padding: 7.5rem 0 7.5rem 5rem;\n  width: 75%;\n  display: flex;\n  flex-direction: column;\n  gap: 7.5rem;\n}\n#experience-page .experience-content {\n  font-size: 1rem;\n}\n#experience-page .experience-content ul {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  list-style: disc;\n  list-style-position: outside;\n}\n#experience-page .experience-content .dates {\n  font-size: 1.25rem;\n  font-style: italic;\n  font-weight: 400;\n  display: inline-block;\n}\n#experience-page .experience-content .title {\n  font-size: 2.5rem;\n  font-weight: 300;\n  font-style: normal;\n}\n#experience-page .experience-content p {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin-bottom: 1.5rem;\n  margin-top: 0.5rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  #experience-page aside,\n  #experience-page section {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 64rem) {\n  #experience-page .experience-content .dates {\n    font-size: 1rem;\n  }\n  #experience-page .experience-content .title {\n    font-size: 1.5rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #experience-page aside {\n    display: none;\n  }\n  #experience-page section {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #experience-page {\n    padding: 0 1.5rem;\n  }\n  #experience-page section {\n    padding: 5rem 0;\n    gap: 5rem;\n  }\n}\n#about-content {\n  display: flex;\n  padding: 7.5rem 0;\n  justify-content: space-between;\n  align-items: center;\n  gap: 3rem;\n}\n#about-content img {\n  width: 50%;\n  max-width: 49.6875rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  #about-content {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 64rem) {\n  p {\n    font-size: 1rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #about-content {\n    flex-direction: column;\n  }\n  #about-content img {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #about-content {\n    padding: 5rem 1.5rem;\n  }\n}\n.project-page {\n  display: flex;\n}\n.project-page aside {\n  padding: 7.5rem 0;\n  border-right: 1px solid hsl(0, 0%, 33%);\n  width: 25%;\n}\n.project-page aside ul {\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 5rem;\n  gap: 1.5rem;\n}\n.project-page section {\n  padding: 7.5rem 0;\n  width: 75%;\n  display: flex;\n  flex-direction: column;\n  gap: 7.5rem;\n}\n.project-page section .project-section {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n  align-items: center;\n}\n.project-page section h2 {\n  font-size: 2.5rem;\n  font-weight: 300;\n}\n.project-page section p {\n  max-width: 49.6875rem;\n}\n.project-page section img {\n  width: 100%;\n  height: auto;\n  max-height: 28.125rem;\n  max-width: 50rem;\n}\n.project-page #version-one img {\n  max-height: 43.75rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  .project-page aside,\n  .project-page section {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  .project-page aside {\n    display: none;\n  }\n  .project-page section {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  .project-page section {\n    padding: 5rem 1.5rem;\n    gap: 5rem;\n  }\n  .project-page section h2 {\n    font-size: 1.5rem;\n  }\n  .project-page section .project-section {\n    gap: 1.5rem;\n  }\n}\n.mobile-nav {\n  display: flex;\n  visibility: hidden;\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.2);\n  transition: background-color 0.2s ease-out;\n  position: fixed;\n  z-index: 10;\n}\n.mobile-nav .mobile-nav-bg {\n  width: 0%;\n  transition: width 0.2s ease-in;\n  background-color: hsl(0, 0%, 4%);\n  overflow: hidden;\n}\n.mobile-nav .active-ctn {\n  width: 80%;\n}\n.mobile-nav .nav-links {\n  white-space: nowrap;\n}\n.mobile-nav #btn-ctn {\n  width: 20%;\n}\n.mobile-nav button {\n  background: none;\n  color: hsl(0, 0%, 0%);\n  font-size: 2rem;\n  padding-left: 1rem;\n  position: relative;\n  top: 1rem;\n}\n.mobile-nav #mobile-nav-ctn {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  font-size: 1.25rem;\n  padding: 2rem;\n}\n\n.active-bg {\n  background-color: rgba(255, 255, 255, 0.8);\n  visibility: visible;\n  opacity: 1;\n}","$font-primary: \"Inter\", sans-serif;\r\n","// Primary Colors\r\n$clr-bg: hsl(0, 0%, 4%);\r\n$clr-btn: hsl(235, 75%, 58%);\r\n$clr-btn-hover: hsl(235, 71%, 39%);\r\n\r\n// Neutral Colors\r\n$clr-white: hsl(0, 0%, 100%);\r\n$clr-gray: hsl(0, 0%, 65%);\r\n$clr-gray-dark: hsl(0, 0%, 33%);\r\n$clr-black: hsl(0, 0%, 0%);\r\n","*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont: inherit;\r\n}\r\n\r\nimg,\r\npicture,\r\nsvg {\r\n\tdisplay: block;\r\n}\r\n","@use \"../utilities/\" as *;\r\n@use \"colors\" as *;\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n\tmargin: 0;\r\n\tline-height: 1.1;\r\n}\r\n\r\nh1,\r\nh2 {\r\n\tfont-size: rem(60);\r\n\tfont-weight: 700;\r\n\tline-height: 1.3;\r\n}\r\n\r\nh3 {\r\n\tfont-size: rem(22);\r\n\tfont-weight: 700;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n\ttext-decoration: none;\r\n}\r\n\r\n@media screen and (max-width: rem(768)) {\r\n\th1,\r\n\th2 {\r\n\t\tfont-size: rem(50);\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(425)) {\r\n\th1,\r\n\th2 {\r\n\t\tfont-size: rem(32);\r\n\t}\r\n}\r\n","@use \"../utilities/\" as *;\r\n\r\n.container {\r\n\tmax-width: rem(1590);\r\n\tmargin: 0 auto;\r\n}\r\n","@use \"../utilities/\" as *;\r\n@use \"../globals/\" as *;\r\n\r\nheader {\r\n\tpadding: rem(48) 0;\r\n\tborder-bottom: 1px solid $clr-gray-dark;\r\n}\r\n\r\n#header-layout {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n}\r\n\r\nul {\r\n\tlist-style: none;\r\n\tdisplay: flex;\r\n\tgap: rem(48);\r\n\r\n\ta {\r\n\t\tcolor: $clr-gray;\r\n\t\ttransition: color 0.1s;\r\n\t}\r\n\r\n\ta:hover {\r\n\t\tcolor: $clr-white;\r\n\t}\r\n\r\n\t.active-nav {\r\n\t\tcolor: $clr-white;\r\n\t}\r\n}\r\n\r\n#mobile-nav-btn {\r\n\tdisplay: none;\r\n\twidth: rem(40);\r\n\theight: rem(50);\r\n\tflex-direction: column;\r\n\tgap: rem(8);\r\n\tjustify-content: center;\r\n\r\n\t.mobile-line {\r\n\t\theight: rem(4);\r\n\t\twidth: 100%;\r\n\t\tbackground-color: $clr-gray;\r\n\t\tborder-radius: rem(10);\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(1620)) {\r\n\theader {\r\n\t\tpadding: rem(48);\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(910)) {\r\n\t#desktop-nav-ctn {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t#mobile-nav-btn {\r\n\t\tdisplay: flex;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(425)) {\r\n\theader {\r\n\t\tpadding: rem(24);\r\n\r\n\t\timg {\r\n\t\t\tmax-width: rem(240);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(350)) {\r\n\theader {\r\n\t\timg {\r\n\t\t\tmax-width: rem(160);\r\n\t\t}\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n#home {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding: rem(200) 0;\r\n\tgap: rem(200);\r\n\tmax-width: rem(1206);\r\n\tmargin: 0 auto;\r\n\talign-items: center;\r\n\r\n\t#welcome {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: rem(120);\r\n\r\n\t\tdiv {\r\n\t\t\twidth: 60%;\r\n\t\t}\r\n\r\n\t\tp {\r\n\t\t\tpadding-top: rem(24);\r\n\t\t}\r\n\r\n\t\timg {\r\n\t\t\twidth: 40%;\r\n\t\t\tmax-width: rem(300);\r\n\t\t}\r\n\t}\r\n\r\n\t#header-location {\r\n\t\tcolor: $clr-gray;\r\n\t\tfont-weight: 300;\r\n\t}\r\n\r\n\t#projects {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tmax-width: rem(795);\r\n\t\twidth: 100%;\r\n\t\tgap: rem(120);\r\n\r\n\t\t#projects-one-liner {\r\n\t\t\ttext-align: center;\r\n\t\t}\r\n\t}\r\n\r\n\t.project-ctn {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: rem(40);\r\n\r\n\t\t.project-heading {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\talign-items: center;\r\n\r\n\t\t\tp {\r\n\t\t\t\tfont-size: rem(80);\r\n\t\t\t\tfont-weight: 100;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t#about-me,\r\n\t#skills-ctn {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: rem(80);\r\n\r\n\t\th2 {\r\n\t\t\ttext-align: center;\r\n\t\t}\r\n\t}\r\n\r\n\t#about-me {\r\n\t\tmax-width: rem(657);\r\n\t}\r\n\r\n\t#skills-ctn {\r\n\t\tmax-width: rem(991);\r\n\t\twidth: 100%;\r\n\r\n\t\t#skills-list {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\tjustify-content: center;\r\n\t\t\tgap: rem(64) 0;\r\n\t\t}\r\n\r\n\t\t.skill {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\talign-items: center;\r\n\t\t\tgap: rem(24);\r\n\t\t\twidth: 20%;\r\n\r\n\t\t\th3 {\r\n\t\t\t\ttext-align: center;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.skill-img-ctn {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: center;\r\n\t\t\talign-items: center;\r\n\t\t\theight: rem(104);\r\n\t\t\twidth: rem(104);\r\n\t\t\tborder: 1px solid $clr-gray;\r\n\t\t\tborder-radius: rem(100);\r\n\r\n\t\t\timg {\r\n\t\t\t\tmax-height: rem(40);\r\n\t\t\t\tmax-width: rem(40);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(1024)) {\r\n\t#home {\r\n\t\tpadding: rem(120) rem(48);\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(768)) {\r\n\tbody {\r\n\t\tfont-size: rem(16);\r\n\t}\r\n\r\n\t#home {\r\n\t\t#welcome {\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: rem(40);\r\n\r\n\t\t\tdiv,\r\n\t\t\timg {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.project-ctn {\r\n\t\t\tgap: rem(32);\r\n\r\n\t\t\t.project-heading {\r\n\t\t\t\tp {\r\n\t\t\t\t\tfont-size: rem(60);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t#skills-ctn {\r\n\t\t\t.skill {\r\n\t\t\t\twidth: 33%;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(425)) {\r\n\t#home {\r\n\t\tgap: rem(80);\r\n\t\tpadding: rem(80) rem(24);\r\n\r\n\t\t#projects {\r\n\t\t\tgap: rem(48);\r\n\t\t}\r\n\r\n\t\t.project-ctn {\r\n\t\t\t.project-heading {\r\n\t\t\t\tp {\r\n\t\t\t\t\tfont-size: rem(40);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t#skills-ctn {\r\n\t\t\t.skill {\r\n\t\t\t\twidth: 50%;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t#about-me,\r\n\t\t#skills-ctn {\r\n\t\t\tgap: rem(40);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(320)) {\r\n\t#home {\r\n\t\t#skills-ctn {\r\n\t\t\t.skill {\r\n\t\t\t\th3 {\r\n\t\t\t\t\tfont-size: rem(18);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n#btn-top {\r\n\tposition: fixed;\r\n\tright: rem(50);\r\n\tbottom: rem(50);\r\n\tz-index: 3;\r\n}\r\n\r\n#btn-top:hover {\r\n\tcursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: rem(425)) {\r\n\t#btn-top {\r\n\t\tright: rem(25);\r\n\t\tbottom: rem(25);\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\nbutton {\r\n\tcolor: $clr-white;\r\n\tfont-size: rem(20);\r\n\tpadding: rem(12) rem(60);\r\n\tborder-radius: rem(50);\r\n\tbackground-color: $clr-btn;\r\n\tborder: none;\r\n\ttransition: background-color 0.1s;\r\n}\r\n\r\nbutton:hover {\r\n\tcursor: pointer;\r\n\tbackground-color: $clr-btn-hover;\r\n}\r\n\r\n.btn-reset {\r\n\tmargin: 0 auto;\r\n}\r\n\r\n@media screen and (max-width: rem(425)) {\r\n\tbutton {\r\n\t\tfont-size: rem(16);\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\nfooter {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tgap: rem(48);\r\n\tfont-size: rem(32);\r\n\theight: rem(312);\r\n\tborder-top: 1px solid $clr-gray-dark;\r\n\r\n\tdiv {\r\n\t\tdisplay: flex;\r\n\t\tgap: rem(48);\r\n\t}\r\n\r\n\ta {\r\n\t\tcolor: $clr-white;\r\n\t\ttransition: color 0.1s;\r\n\t}\r\n\r\n\ta:hover {\r\n\t\tcolor: $clr-gray;\r\n\t}\r\n}\r\n","@use \"../utilities/\" as *;\r\n\r\n.main-banner {\r\n\tposition: relative;\r\n\ttext-align: center;\r\n\r\n\th1 {\r\n\t\tposition: absolute;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\ttransform: translate(-50%, -50%);\r\n\t}\r\n\r\n\timg {\r\n\t\twidth: 100%;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(425)) {\r\n\t.main-banner {\r\n\t\th1 {\r\n\t\t\tfont-size: rem(24);\r\n\t\t}\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n#project-list {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding: rem(120) 0;\r\n\tgap: rem(240);\r\n\r\n\t.project {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: center;\r\n\t\tgap: rem(30);\r\n\r\n\t\timg {\r\n\t\t\twidth: 50%;\r\n\t\t\theight: 100%;\r\n\t\t}\r\n\t}\r\n\r\n\t.project-content {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tgap: rem(48);\r\n\t\twidth: 50%;\r\n\r\n\t\tp {\r\n\t\t\tmax-width: rem(520);\r\n\t\t\tfont-size: rem(16);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(1620)) {\r\n\t#project-list {\r\n\t\tpadding: rem(120) rem(48);\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(1024)) {\r\n\t#project-list {\r\n\t\tgap: rem(120);\r\n\r\n\t\t.project-content {\r\n\t\t\tgap: rem(24);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(768)) {\r\n\t#project-list {\r\n\t\t.project {\r\n\t\t\tflex-direction: column;\r\n\r\n\t\t\timg {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\r\n\t\t\t.project-content {\r\n\t\t\t\twidth: 100%;\r\n\r\n\t\t\t\tp {\r\n\t\t\t\t\tmax-width: none;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t#coffee-time-project {\r\n\t\t\tflex-direction: column-reverse;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(425)) {\r\n\t#project-list {\r\n\t\tgap: rem(80);\r\n\t\tpadding: rem(80) rem(24);\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n#experience-page {\r\n\tdisplay: flex;\r\n\r\n\taside {\r\n\t\tpadding: rem(120) 0;\r\n\t\tborder-right: 1px solid $clr-gray-dark;\r\n\t\twidth: 25%;\r\n\r\n\t\tul {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tposition: sticky;\r\n\t\t\ttop: rem(80);\r\n\t\t\tgap: rem(24);\r\n\t\t}\r\n\r\n\t\th4 {\r\n\t\t\tfont-weight: 700;\r\n\t\t}\r\n\t}\r\n\r\n\tsection {\r\n\t\tpadding: rem(120) 0 rem(120) rem(80);\r\n\t\twidth: 75%;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: rem(120);\r\n\t}\r\n\r\n\t.experience-content {\r\n\t\tfont-size: rem(16);\r\n\r\n\t\tul {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: rem(8);\r\n\t\t\tlist-style: disc;\r\n\t\t\tlist-style-position: outside;\r\n\t\t}\r\n\r\n\t\t.dates {\r\n\t\t\tfont-size: rem(20);\r\n\t\t\tfont-style: italic;\r\n\t\t\tfont-weight: 400;\r\n\t\t\tdisplay: inline-block;\r\n\t\t}\r\n\r\n\t\t.title {\r\n\t\t\tfont-size: rem(40);\r\n\t\t\tfont-weight: 300;\r\n\t\t\tfont-style: normal;\r\n\t\t}\r\n\r\n\t\tp {\r\n\t\t\tfont-size: rem(20);\r\n\t\t\tfont-weight: 700;\r\n\t\t\tmargin-bottom: rem(24);\r\n\t\t\tmargin-top: rem(8);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(1620)) {\r\n\t#experience-page {\r\n\t\taside,\r\n\t\tsection {\r\n\t\t\tpadding: rem(120) rem(48);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(1024)) {\r\n\t#experience-page {\r\n\t\t.experience-content {\r\n\t\t\t.dates {\r\n\t\t\t\tfont-size: rem(16);\r\n\t\t\t}\r\n\r\n\t\t\t.title {\r\n\t\t\t\tfont-size: rem(24);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(768)) {\r\n\t#experience-page {\r\n\t\taside {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n\t\tsection {\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(425)) {\r\n\t#experience-page {\r\n\t\tpadding: 0 rem(24);\r\n\r\n\t\tsection {\r\n\t\t\tpadding: rem(80) 0;\r\n\t\t\tgap: rem(80);\r\n\t\t}\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n#about-content {\r\n\tdisplay: flex;\r\n\tpadding: rem(120) 0;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tgap: rem(48);\r\n\r\n\timg {\r\n\t\twidth: 50%;\r\n\t\tmax-width: rem(795);\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(1620)) {\r\n\t#about-content {\r\n\t\tpadding: rem(120) rem(48);\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(1024)) {\r\n\tp {\r\n\t\tfont-size: rem(16);\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(768)) {\r\n\t#about-content {\r\n\t\tflex-direction: column;\r\n\r\n\t\timg {\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(768)) {\r\n\t#about-content {\r\n\t\tpadding: rem(80) rem(24);\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n.project-page {\r\n\tdisplay: flex;\r\n\r\n\taside {\r\n\t\tpadding: rem(120) 0;\r\n\t\tborder-right: 1px solid $clr-gray-dark;\r\n\t\twidth: 25%;\r\n\r\n\t\tul {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tposition: sticky;\r\n\t\t\ttop: rem(80);\r\n\t\t\tgap: rem(24);\r\n\t\t}\r\n\t}\r\n\r\n\tsection {\r\n\t\tpadding: rem(120) 0;\r\n\t\twidth: 75%;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: rem(120);\r\n\r\n\t\t.project-section {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: rem(48);\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\r\n\t\th2 {\r\n\t\t\tfont-size: rem(40);\r\n\t\t\tfont-weight: 300;\r\n\t\t}\r\n\r\n\t\tp {\r\n\t\t\tmax-width: rem(795);\r\n\t\t}\r\n\r\n\t\timg {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: auto;\r\n\t\t\tmax-height: rem(450);\r\n\t\t\tmax-width: rem(800);\r\n\t\t}\r\n\t}\r\n\r\n\t// this is for the portfolio project\r\n\t#version-one {\r\n\t\timg {\r\n\t\t\tmax-height: rem(700);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(1620)) {\r\n\t.project-page {\r\n\t\taside,\r\n\t\tsection {\r\n\t\t\tpadding: rem(120) rem(48);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(768)) {\r\n\t.project-page {\r\n\t\taside {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n\t\tsection {\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(425)) {\r\n\t.project-page {\r\n\t\tsection {\r\n\t\t\tpadding: rem(80) rem(24);\r\n\t\t\tgap: rem(80);\r\n\r\n\t\t\th2 {\r\n\t\t\t\tfont-size: rem(24);\r\n\t\t\t}\r\n\r\n\t\t\t.project-section {\r\n\t\t\t\tgap: rem(24);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n.mobile-nav {\r\n\tdisplay: flex;\r\n\tvisibility: hidden;\r\n\topacity: 0;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tbackground-color: rgba(255, 255, 255, 0.2);\r\n\ttransition: background-color 0.2s ease-out;\r\n\tposition: fixed;\r\n\tz-index: 10;\r\n\r\n\t.mobile-nav-bg {\r\n\t\twidth: 0%;\r\n\t\ttransition: width 0.2s ease-in;\r\n\t\tbackground-color: $clr-bg;\r\n\t\toverflow: hidden;\r\n\t}\r\n\r\n\t.active-ctn {\r\n\t\twidth: 80%;\r\n\t}\r\n\r\n\t.nav-links {\r\n\t\twhite-space: nowrap;\r\n\t}\r\n\r\n\t#btn-ctn {\r\n\t\twidth: 20%;\r\n\t}\r\n\r\n\tbutton {\r\n\t\tbackground: none;\r\n\t\tcolor: $clr-black;\r\n\t\tfont-size: rem(32);\r\n\t\tpadding-left: rem(16);\r\n\t\tposition: relative;\r\n\t\ttop: rem(16);\r\n\t}\r\n\r\n\t#mobile-nav-ctn {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: rem(32);\r\n\t\tfont-size: rem(20);\r\n\t\tpadding: rem(32);\r\n\t}\r\n}\r\n\r\n.active-bg {\r\n\tbackground-color: rgba(255, 255, 255, 0.8);\r\n\tvisibility: visible;\r\n\topacity: 1;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mobileNavInit: () => (/* binding */ mobileNavInit),
/* harmony export */   removeHeaderStyles: () => (/* binding */ removeHeaderStyles),
/* harmony export */   updateHeaderActiveLink: () => (/* binding */ updateHeaderActiveLink)
/* harmony export */ });


const nav = document.querySelectorAll(".nav-links");
const mobileNavBtn = document.querySelector("#mobile-nav-btn");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavExit = document.querySelector("#mobile-nav-exit");
const mobileNavCtn = document.querySelector(".mobile-nav-bg");

function updateHeaderActiveLink() {
	nav.forEach((link) => {
		link.addEventListener("click", () => {
			updateHeaderStyles(link);
		});
	});
}

function updateHeaderStyles(link) {
	removeHeaderStyles();
	addHeaderStyles(link);
}

function removeHeaderStyles() {
	nav.forEach((child) => {
		child.classList.remove("active-nav");
	});
}

function addHeaderStyles(link) {
	link.classList.add("active-nav");
}

function mobileNavInit() {
	mobileNavBtn.addEventListener("click", () => {
		mobileNav.classList.add("active-bg");
		mobileNavCtn.classList.add("active-ctn");
	});

	mobileNavExit.addEventListener("click", () => {
		mobileNav.classList.remove("active-bg");
		mobileNavCtn.classList.remove("active-ctn");
	});
}


/***/ }),

/***/ "./src/js/components/toTopBtn.js":
/*!***************************************!*\
  !*** ./src/js/components/toTopBtn.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrollToTop: () => (/* binding */ scrollToTop)
/* harmony export */ });


const btn = document.querySelector("#btn-top");

btn.addEventListener("click", scrollToTop);

function scrollToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}


/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _components_toTopBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/toTopBtn */ "./src/js/components/toTopBtn.js");




function init() {
	(0,_components_header__WEBPACK_IMPORTED_MODULE_0__.updateHeaderActiveLink)();
	(0,_components_toTopBtn__WEBPACK_IMPORTED_MODULE_1__.scrollToTop)();
	(0,_components_header__WEBPACK_IMPORTED_MODULE_0__.mobileNavInit)();
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ "./src/js/init.js");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/styles.scss */ "./src/scss/styles.scss");



(0,_init_js__WEBPACK_IMPORTED_MODULE_0__.init)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDg0QkFBODRCLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sVUFBVSxNQUFNLFFBQVEsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sUUFBUSxXQUFXLE9BQU8sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFlBQVksT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxPQUFPLFVBQVUsV0FBVyxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxPQUFPLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxRQUFRLE1BQU0sVUFBVSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxRQUFRLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxVQUFVLE9BQU8sT0FBTyxX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O1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQWlDO0FBQ0o7QUFDN0I7QUFDQSw4Q0FBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3M/MzIxZiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9qcy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvY29tcG9uZW50cy90b1RvcEJ0bi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvaW5pdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvYWJvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBmb250LXNpemU6IDEwMCU7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNCUpO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250OiBpbmhlcml0O1xufVxuXG5pbWcsXG5waWN0dXJlLFxuc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmgxLFxuaDIsXG5oMyB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cblxuaDEsXG5oMiB7XG4gIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cblxuaDMge1xuICBmb250LXNpemU6IDEuMzc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5hLFxuYTp2aXNpdGVkLFxuYTphY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gIGgxLFxuICBoMiB7XG4gICAgZm9udC1zaXplOiAzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICBoMSxcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTkuMzc1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuaGVhZGVyIHtcbiAgcGFkZGluZzogM3JlbSAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xufVxuXG4jaGVhZGVyLWxheW91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDNyZW07XG59XG51bCBhIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcbn1cbnVsIGE6aG92ZXIge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbn1cbnVsIC5hY3RpdmUtbmF2IHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG59XG5cbiNtb2JpbGUtbmF2LWJ0biB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAyLjVyZW07XG4gIGhlaWdodDogMy4xMjVyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNtb2JpbGUtbmF2LWJ0biAubW9iaWxlLWxpbmUge1xuICBoZWlnaHQ6IDAuMjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcbiAgaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni44NzVyZW0pIHtcbiAgI2Rlc2t0b3AtbmF2LWN0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjbW9iaWxlLW5hdi1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cbiAgaGVhZGVyIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjEuODc1cmVtKSB7XG4gIGhlYWRlciBpbWcge1xuICAgIG1heC13aWR0aDogMTByZW07XG4gIH1cbn1cbiNob21lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTIuNXJlbSAwO1xuICBnYXA6IDEyLjVyZW07XG4gIG1heC13aWR0aDogNzUuMzc1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNob21lICN3ZWxjb21lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3LjVyZW07XG59XG4jaG9tZSAjd2VsY29tZSBkaXYge1xuICB3aWR0aDogNjAlO1xufVxuI2hvbWUgI3dlbGNvbWUgcCB7XG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XG59XG4jaG9tZSAjd2VsY29tZSBpbWcge1xuICB3aWR0aDogNDAlO1xuICBtYXgtd2lkdGg6IDE4Ljc1cmVtO1xufVxuI2hvbWUgI2hlYWRlci1sb2NhdGlvbiB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4jaG9tZSAjcHJvamVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDQ5LjY4NzVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6IDcuNXJlbTtcbn1cbiNob21lICNwcm9qZWN0cyAjcHJvamVjdHMtb25lLWxpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2hvbWUgLnByb2plY3QtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyLjVyZW07XG59XG4jaG9tZSAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNob21lIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHAge1xuICBmb250LXNpemU6IDVyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4jaG9tZSAjYWJvdXQtbWUsXG4jaG9tZSAjc2tpbGxzLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXJlbTtcbn1cbiNob21lICNhYm91dC1tZSBoMixcbiNob21lICNza2lsbHMtY3RuIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2hvbWUgI2Fib3V0LW1lIHtcbiAgbWF4LXdpZHRoOiA0MS4wNjI1cmVtO1xufVxuI2hvbWUgI3NraWxscy1jdG4ge1xuICBtYXgtd2lkdGg6IDYxLjkzNzVyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuI2hvbWUgI3NraWxscy1jdG4gI3NraWxscy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA0cmVtIDA7XG59XG4jaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEuNXJlbTtcbiAgd2lkdGg6IDIwJTtcbn1cbiNob21lICNza2lsbHMtY3RuIC5za2lsbCBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNob21lICNza2lsbHMtY3RuIC5za2lsbC1pbWctY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNi41cmVtO1xuICB3aWR0aDogNi41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMCwgMCUsIDY1JSk7XG4gIGJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG59XG4jaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwtaW1nLWN0biBpbWcge1xuICBtYXgtaGVpZ2h0OiAyLjVyZW07XG4gIG1heC13aWR0aDogMi41cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NHJlbSkge1xuICAjaG9tZSB7XG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gIGJvZHkge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICAjaG9tZSAjd2VsY29tZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIuNXJlbTtcbiAgfVxuICAjaG9tZSAjd2VsY29tZSBkaXYsXG4gICNob21lICN3ZWxjb21lIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI2hvbWUgLnByb2plY3QtY3RuIHtcbiAgICBnYXA6IDJyZW07XG4gIH1cbiAgI2hvbWUgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcgcCB7XG4gICAgZm9udC1zaXplOiAzLjc1cmVtO1xuICB9XG4gICNob21lICNza2lsbHMtY3RuIC5za2lsbCB7XG4gICAgd2lkdGg6IDMzJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICAjaG9tZSB7XG4gICAgZ2FwOiA1cmVtO1xuICAgIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xuICB9XG4gICNob21lICNwcm9qZWN0cyB7XG4gICAgZ2FwOiAzcmVtO1xuICB9XG4gICNob21lIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHAge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gICNob21lICNza2lsbHMtY3RuIC5za2lsbCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAjaG9tZSAjYWJvdXQtbWUsXG4gICNob21lICNza2lsbHMtY3RuIHtcbiAgICBnYXA6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjByZW0pIHtcbiAgI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIGgzIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICB9XG59XG4jYnRuLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDMuMTI1cmVtO1xuICBib3R0b206IDMuMTI1cmVtO1xuICB6LWluZGV4OiAzO1xufVxuXG4jYnRuLXRvcDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICAjYnRuLXRvcCB7XG4gICAgcmlnaHQ6IDEuNTYyNXJlbTtcbiAgICBib3R0b206IDEuNTYyNXJlbTtcbiAgfVxufVxuYnV0dG9uIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgcGFkZGluZzogMC43NXJlbSAzLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNSwgNzUlLCA1OCUpO1xuICBib3JkZXI6IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1LCA3MSUsIDM5JSk7XG59XG5cbi5idG4tcmVzZXQge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogM3JlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBoZWlnaHQ6IDE5LjVyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XG59XG5mb290ZXIgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAzcmVtO1xufVxuZm9vdGVyIGEge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcbn1cbmZvb3RlciBhOmhvdmVyIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcbn1cblxuLm1haW4tYmFubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbi1iYW5uZXIgaDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm1haW4tYmFubmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gIC5tYWluLWJhbm5lciBoMSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbiNwcm9qZWN0LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAgZ2FwOiAxNXJlbTtcbn1cbiNwcm9qZWN0LWxpc3QgLnByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS44NzVyZW07XG59XG4jcHJvamVjdC1saXN0IC5wcm9qZWN0IGltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDNyZW07XG4gIHdpZHRoOiA1MCU7XG59XG4jcHJvamVjdC1saXN0IC5wcm9qZWN0LWNvbnRlbnQgcCB7XG4gIG1heC13aWR0aDogMzIuNXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcbiAgI3Byb2plY3QtbGlzdCB7XG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XG4gICNwcm9qZWN0LWxpc3Qge1xuICAgIGdhcDogNy41cmVtO1xuICB9XG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCB7XG4gICAgZ2FwOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1jb250ZW50IHAge1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgfVxuICAjcHJvamVjdC1saXN0ICNjb2ZmZWUtdGltZS1wcm9qZWN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgI3Byb2plY3QtbGlzdCB7XG4gICAgZ2FwOiA1cmVtO1xuICAgIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xuICB9XG59XG4jZXhwZXJpZW5jZS1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiNleHBlcmllbmNlLXBhZ2UgYXNpZGUge1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xuICB3aWR0aDogMjUlO1xufVxuI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogNXJlbTtcbiAgZ2FwOiAxLjVyZW07XG59XG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIGg0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDcuNXJlbSAwIDcuNXJlbSA1cmVtO1xuICB3aWR0aDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDcuNXJlbTtcbn1cbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuICBsaXN0LXN0eWxlOiBkaXNjO1xuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBvdXRzaWRlO1xufVxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IC5kYXRlcyB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxLjI1cmVtKSB7XG4gICNleHBlcmllbmNlLXBhZ2UgYXNpZGUsXG4gICNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XG4gICNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCAuZGF0ZXMge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICAjZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjZXhwZXJpZW5jZS1wYWdlIHNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gICNleHBlcmllbmNlLXBhZ2Uge1xuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICB9XG4gICNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNXJlbSAwO1xuICAgIGdhcDogNXJlbTtcbiAgfVxufVxuI2Fib3V0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDNyZW07XG59XG4jYWJvdXQtY29udGVudCBpbWcge1xuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDQ5LjY4NzVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xuICAjYWJvdXQtY29udGVudCB7XG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgI2Fib3V0LWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgI2Fib3V0LWNvbnRlbnQgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgI2Fib3V0LWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xuICB9XG59XG4ucHJvamVjdC1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wcm9qZWN0LXBhZ2UgYXNpZGUge1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xuICB3aWR0aDogMjUlO1xufVxuLnByb2plY3QtcGFnZSBhc2lkZSB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogNXJlbTtcbiAgZ2FwOiAxLjVyZW07XG59XG4ucHJvamVjdC1wYWdlIHNlY3Rpb24ge1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAgd2lkdGg6IDc1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA3LjVyZW07XG59XG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gLnByb2plY3Qtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogM3JlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBoMiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnByb2plY3QtcGFnZSBzZWN0aW9uIHAge1xuICBtYXgtd2lkdGg6IDQ5LjY4NzVyZW07XG59XG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMjguMTI1cmVtO1xuICBtYXgtd2lkdGg6IDUwcmVtO1xufVxuLnByb2plY3QtcGFnZSAjdmVyc2lvbi1vbmUgaW1nIHtcbiAgbWF4LWhlaWdodDogNDMuNzVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xuICAucHJvamVjdC1wYWdlIGFzaWRlLFxuICAucHJvamVjdC1wYWdlIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDcuNXJlbSAzcmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAucHJvamVjdC1wYWdlIGFzaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgLnByb2plY3QtcGFnZSBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA1cmVtIDEuNXJlbTtcbiAgICBnYXA6IDVyZW07XG4gIH1cbiAgLnByb2plY3QtcGFnZSBzZWN0aW9uIGgyIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAucHJvamVjdC1wYWdlIHNlY3Rpb24gLnByb2plY3Qtc2VjdGlvbiB7XG4gICAgZ2FwOiAxLjVyZW07XG4gIH1cbn1cbi5tb2JpbGUtbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDtcbn1cbi5tb2JpbGUtbmF2IC5tb2JpbGUtbmF2LWJnIHtcbiAgd2lkdGg6IDAlO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzIGVhc2UtaW47XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNCUpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1vYmlsZS1uYXYgLmFjdGl2ZS1jdG4ge1xuICB3aWR0aDogODAlO1xufVxuLm1vYmlsZS1uYXYgLm5hdi1saW5rcyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ubW9iaWxlLW5hdiAjYnRuLWN0biB7XG4gIHdpZHRoOiAyMCU7XG59XG4ubW9iaWxlLW5hdiBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXJlbTtcbn1cbi5tb2JpbGUtbmF2ICNtb2JpbGUtbmF2LWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4uYWN0aXZlLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fZ2VuZXJhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fY29udGFpbmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19tYWluSG9tZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL190b1RvcEJ0bi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19idXR0b25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19tYWluQmFubmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX3BvcnRmb2xpb1BhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fZXhwZXJpZW5jZVBhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fYWJvdXRQYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX3Byb2plY3RQYWdlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19tb2JpbGVOYXYuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNDLGVBQUE7RUFDQSx1QkFBQTtBQ0hEOztBRE1BO0VBQ0MsZ0NFVmM7RUZXZCxtQkFBQTtFQUNBLHVCR05XO0VIT1gsZ0NHWlE7RUhhUixnQkFBQTtBQ0hEOztBR1hBOzs7RUFHQyxzQkFBQTtBSGNEOztBR1hBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FIY0Q7O0FHWEE7OztFQUdDLGNBQUE7QUhjRDs7QUkxQkE7OztFQUdDLFNBQUE7RUFDQSxnQkFBQTtBSjZCRDs7QUkxQkE7O0VBRUMsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FKNkJEOztBSTFCQTtFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7QUo2QkQ7O0FJMUJBOzs7RUFHQyxxQkFBQTtBSjZCRDs7QUkxQkE7RUFDQzs7SUFFQyxtQkFBQTtFSjZCQTtBQUNGO0FJMUJBO0VBQ0M7O0lBRUMsZUFBQTtFSjRCQTtBQUNGO0FLakVBO0VBQ0Msb0JBQUE7RUFDQSxjQUFBO0FMbUVEOztBTXBFQTtFQUNDLGVBQUE7RUFDQSx3Q0FBQTtBTnVFRDs7QU1wRUE7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBTnVF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bkJGO0FnQjdtQkM7RUFDQyxVQUFBO0FoQittQkY7QWdCNW1CQztFQUNDLGdCQUFBO0VBQ0EscUJkMUJVO0VjMkJWLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBaEI4bUJGO0FnQjNtQkM7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FoQjZtQkY7O0FnQnptQkE7RUFDQywwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBaEI0bUJEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiY29sb3JzXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcImZvbnRzXFxcIiBhcyAqO1xcclxcblxcclxcbmh0bWwge1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuXFx0Zm9udC1zaXplOiByZW0oMTgpO1xcclxcblxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItYmc7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXHJcXG59XFxyXFxuXCIsXCJodG1sIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA0JSk7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG4gIG1hcmdpbjogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMy43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDEuMzc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xcbiAgaDEsXFxuICBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMy4xMjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gIGgxLFxcbiAgaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxufVxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA5OS4zNzVyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDNyZW0gMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XFxufVxcblxcbiNoZWFkZXItbGF5b3V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogM3JlbTtcXG59XFxudWwgYSB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcXG59XFxudWwgYTpob3ZlciB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG59XFxudWwgLmFjdGl2ZS1uYXYge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxufVxcblxcbiNtb2JpbGUtbmF2LWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMy4xMjVyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI21vYmlsZS1uYXYtYnRuIC5tb2JpbGUtbGluZSB7XFxuICBoZWlnaHQ6IDAuMjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcXG4gIGhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2Ljg3NXJlbSkge1xcbiAgI2Rlc2t0b3AtbmF2LWN0biB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAjbW9iaWxlLW5hdi1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICBoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICB9XFxuICBoZWFkZXIgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjEuODc1cmVtKSB7XFxuICBoZWFkZXIgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMHJlbTtcXG4gIH1cXG59XFxuI2hvbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMi41cmVtIDA7XFxuICBnYXA6IDEyLjVyZW07XFxuICBtYXgtd2lkdGg6IDc1LjM3NXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2hvbWUgI3dlbGNvbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDcuNXJlbTtcXG59XFxuI2hvbWUgI3dlbGNvbWUgZGl2IHtcXG4gIHdpZHRoOiA2MCU7XFxufVxcbiNob21lICN3ZWxjb21lIHAge1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG59XFxuI2hvbWUgI3dlbGNvbWUgaW1nIHtcXG4gIHdpZHRoOiA0MCU7XFxuICBtYXgtd2lkdGg6IDE4Ljc1cmVtO1xcbn1cXG4jaG9tZSAjaGVhZGVyLWxvY2F0aW9uIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG4jaG9tZSAjcHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IDQ5LjY4NzVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogNy41cmVtO1xcbn1cXG4jaG9tZSAjcHJvamVjdHMgI3Byb2plY3RzLW9uZS1saW5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNob21lIC5wcm9qZWN0LWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMi41cmVtO1xcbn1cXG4jaG9tZSAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2hvbWUgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcgcCB7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG4jaG9tZSAjYWJvdXQtbWUsXFxuI2hvbWUgI3NraWxscy1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVyZW07XFxufVxcbiNob21lICNhYm91dC1tZSBoMixcXG4jaG9tZSAjc2tpbGxzLWN0biBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNob21lICNhYm91dC1tZSB7XFxuICBtYXgtd2lkdGg6IDQxLjA2MjVyZW07XFxufVxcbiNob21lICNza2lsbHMtY3RuIHtcXG4gIG1heC13aWR0aDogNjEuOTM3NXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4jaG9tZSAjc2tpbGxzLWN0biAjc2tpbGxzLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA0cmVtIDA7XFxufVxcbiNob21lICNza2lsbHMtY3RuIC5za2lsbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEuNXJlbTtcXG4gIHdpZHRoOiAyMCU7XFxufVxcbiNob21lICNza2lsbHMtY3RuIC5za2lsbCBoMyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNob21lICNza2lsbHMtY3RuIC5za2lsbC1pbWctY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDYuNXJlbTtcXG4gIHdpZHRoOiA2LjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMCwgMCUsIDY1JSk7XFxuICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xcbn1cXG4jaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwtaW1nLWN0biBpbWcge1xcbiAgbWF4LWhlaWdodDogMi41cmVtO1xcbiAgbWF4LXdpZHRoOiAyLjVyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XFxuICAjaG9tZSB7XFxuICAgIHBhZGRpbmc6IDcuNXJlbSAzcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xcbiAgYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gICNob21lICN3ZWxjb21lIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyLjVyZW07XFxuICB9XFxuICAjaG9tZSAjd2VsY29tZSBkaXYsXFxuICAjaG9tZSAjd2VsY29tZSBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gICNob21lIC5wcm9qZWN0LWN0biB7XFxuICAgIGdhcDogMnJlbTtcXG4gIH1cXG4gICNob21lIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHAge1xcbiAgICBmb250LXNpemU6IDMuNzVyZW07XFxuICB9XFxuICAjaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwge1xcbiAgICB3aWR0aDogMzMlO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICAjaG9tZSB7XFxuICAgIGdhcDogNXJlbTtcXG4gICAgcGFkZGluZzogNXJlbSAxLjVyZW07XFxuICB9XFxuICAjaG9tZSAjcHJvamVjdHMge1xcbiAgICBnYXA6IDNyZW07XFxuICB9XFxuICAjaG9tZSAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyBwIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICB9XFxuICAjaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbiAgI2hvbWUgI2Fib3V0LW1lLFxcbiAgI2hvbWUgI3NraWxscy1jdG4ge1xcbiAgICBnYXA6IDIuNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjByZW0pIHtcXG4gICNob21lICNza2lsbHMtY3RuIC5za2lsbCBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICB9XFxufVxcbiNidG4tdG9wIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAzLjEyNXJlbTtcXG4gIGJvdHRvbTogMy4xMjVyZW07XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4jYnRuLXRvcDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gICNidG4tdG9wIHtcXG4gICAgcmlnaHQ6IDEuNTYyNXJlbTtcXG4gICAgYm90dG9tOiAxLjU2MjVyZW07XFxuICB9XFxufVxcbmJ1dHRvbiB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHBhZGRpbmc6IDAuNzVyZW0gMy43NXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDMuMTI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNSwgNzUlLCA1OCUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNSwgNzElLCAzOSUpO1xcbn1cXG5cXG4uYnRuLXJlc2V0IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGhlaWdodDogMTkuNXJlbTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XFxufVxcbmZvb3RlciBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogM3JlbTtcXG59XFxuZm9vdGVyIGEge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xcbn1cXG5mb290ZXIgYTpob3ZlciB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xcbn1cXG5cXG4ubWFpbi1iYW5uZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubWFpbi1iYW5uZXIgaDEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuLm1haW4tYmFubmVyIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgLm1haW4tYmFubmVyIGgxIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxufVxcbiNwcm9qZWN0LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiA3LjVyZW0gMDtcXG4gIGdhcDogMTVyZW07XFxufVxcbiNwcm9qZWN0LWxpc3QgLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEuODc1cmVtO1xcbn1cXG4jcHJvamVjdC1saXN0IC5wcm9qZWN0IGltZyB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jcHJvamVjdC1saXN0IC5wcm9qZWN0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxuICB3aWR0aDogNTAlO1xcbn1cXG4jcHJvamVjdC1saXN0IC5wcm9qZWN0LWNvbnRlbnQgcCB7XFxuICBtYXgtd2lkdGg6IDMyLjVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xcbiAgI3Byb2plY3QtbGlzdCB7XFxuICAgIHBhZGRpbmc6IDcuNXJlbSAzcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NHJlbSkge1xcbiAgI3Byb2plY3QtbGlzdCB7XFxuICAgIGdhcDogNy41cmVtO1xcbiAgfVxcbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdC1jb250ZW50IHtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XFxuICAjcHJvamVjdC1saXN0IC5wcm9qZWN0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3QgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LWNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtY29udGVudCBwIHtcXG4gICAgbWF4LXdpZHRoOiBub25lO1xcbiAgfVxcbiAgI3Byb2plY3QtbGlzdCAjY29mZmVlLXRpbWUtcHJvamVjdCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgI3Byb2plY3QtbGlzdCB7XFxuICAgIGdhcDogNXJlbTtcXG4gICAgcGFkZGluZzogNXJlbSAxLjVyZW07XFxuICB9XFxufVxcbiNleHBlcmllbmNlLXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSB7XFxuICBwYWRkaW5nOiA3LjVyZW0gMDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzMlKTtcXG4gIHdpZHRoOiAyNSU7XFxufVxcbiNleHBlcmllbmNlLXBhZ2UgYXNpZGUgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiA1cmVtO1xcbiAgZ2FwOiAxLjVyZW07XFxufVxcbiNleHBlcmllbmNlLXBhZ2UgYXNpZGUgaDQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSBzZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDcuNXJlbSAwIDcuNXJlbSA1cmVtO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA3LjVyZW07XFxufVxcbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAgbGlzdC1zdHlsZTogZGlzYztcXG4gIGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGU7XFxufVxcbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCAuZGF0ZXMge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IC50aXRsZSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCBwIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xcbiAgI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSxcXG4gICNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDcuNXJlbSAzcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NHJlbSkge1xcbiAgI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IC5kYXRlcyB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gICNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcXG4gICNleHBlcmllbmNlLXBhZ2UgYXNpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgI2V4cGVyaWVuY2UtcGFnZSBzZWN0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gICNleHBlcmllbmNlLXBhZ2Uge1xcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gIH1cXG4gICNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDVyZW0gMDtcXG4gICAgZ2FwOiA1cmVtO1xcbiAgfVxcbn1cXG4jYWJvdXQtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG4jYWJvdXQtY29udGVudCBpbWcge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1heC13aWR0aDogNDkuNjg3NXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxLjI1cmVtKSB7XFxuICAjYWJvdXQtY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDcuNXJlbSAzcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NHJlbSkge1xcbiAgcCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcXG4gICNhYm91dC1jb250ZW50IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gICNhYm91dC1jb250ZW50IGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xcbiAgI2Fib3V0LWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiA1cmVtIDEuNXJlbTtcXG4gIH1cXG59XFxuLnByb2plY3QtcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ucHJvamVjdC1wYWdlIGFzaWRlIHtcXG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuLnByb2plY3QtcGFnZSBhc2lkZSB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDVyZW07XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuLnByb2plY3QtcGFnZSBzZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA3LjVyZW07XFxufVxcbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiAucHJvamVjdC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByb2plY3QtcGFnZSBzZWN0aW9uIGgyIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuLnByb2plY3QtcGFnZSBzZWN0aW9uIHAge1xcbiAgbWF4LXdpZHRoOiA0OS42ODc1cmVtO1xcbn1cXG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogMjguMTI1cmVtO1xcbiAgbWF4LXdpZHRoOiA1MHJlbTtcXG59XFxuLnByb2plY3QtcGFnZSAjdmVyc2lvbi1vbmUgaW1nIHtcXG4gIG1heC1oZWlnaHQ6IDQzLjc1cmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcXG4gIC5wcm9qZWN0LXBhZ2UgYXNpZGUsXFxuICAucHJvamVjdC1wYWdlIHNlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcXG4gIC5wcm9qZWN0LXBhZ2UgYXNpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLnByb2plY3QtcGFnZSBzZWN0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gIC5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xcbiAgICBnYXA6IDVyZW07XFxuICB9XFxuICAucHJvamVjdC1wYWdlIHNlY3Rpb24gaDIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIC5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiAucHJvamVjdC1zZWN0aW9uIHtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICB9XFxufVxcbi5tb2JpbGUtbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuLm1vYmlsZS1uYXYgLm1vYmlsZS1uYXYtYmcge1xcbiAgd2lkdGg6IDAlO1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4ycyBlYXNlLWluO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA0JSk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ubW9iaWxlLW5hdiAuYWN0aXZlLWN0biB7XFxuICB3aWR0aDogODAlO1xcbn1cXG4ubW9iaWxlLW5hdiAubmF2LWxpbmtzIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5tb2JpbGUtbmF2ICNidG4tY3RuIHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcbi5tb2JpbGUtbmF2IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAxcmVtO1xcbn1cXG4ubW9iaWxlLW5hdiAjbW9iaWxlLW5hdi1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4uYWN0aXZlLWJnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cIixcIiRmb250LXByaW1hcnk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXCIsXCIvLyBQcmltYXJ5IENvbG9yc1xcclxcbiRjbHItYmc6IGhzbCgwLCAwJSwgNCUpO1xcclxcbiRjbHItYnRuOiBoc2woMjM1LCA3NSUsIDU4JSk7XFxyXFxuJGNsci1idG4taG92ZXI6IGhzbCgyMzUsIDcxJSwgMzklKTtcXHJcXG5cXHJcXG4vLyBOZXV0cmFsIENvbG9yc1xcclxcbiRjbHItd2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XFxyXFxuJGNsci1ncmF5OiBoc2woMCwgMCUsIDY1JSk7XFxyXFxuJGNsci1ncmF5LWRhcms6IGhzbCgwLCAwJSwgMzMlKTtcXHJcXG4kY2xyLWJsYWNrOiBoc2woMCwgMCUsIDAlKTtcXHJcXG5cIixcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5pbWcsXFxyXFxucGljdHVyZSxcXHJcXG5zdmcge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiY29sb3JzXFxcIiBhcyAqO1xcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuMTtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIge1xcclxcblxcdGZvbnQtc2l6ZTogcmVtKDYwKTtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG5cXHRmb250LXNpemU6IHJlbSgyMik7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuYSxcXHJcXG5hOnZpc2l0ZWQsXFxyXFxuYTphY3RpdmUge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDc2OCkpIHtcXHJcXG5cXHRoMSxcXHJcXG5cXHRoMiB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiByZW0oNTApO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXHJcXG5cXHRoMSxcXHJcXG5cXHRoMiB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMzIpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcblxcdG1heC13aWR0aDogcmVtKDE1OTApO1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG5cXHRwYWRkaW5nOiByZW0oNDgpIDA7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjbHItZ3JheS1kYXJrO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyLWxheW91dCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRnYXA6IHJlbSg0OCk7XFxyXFxuXFxyXFxuXFx0YSB7XFxyXFxuXFx0XFx0Y29sb3I6ICRjbHItZ3JheTtcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRhOmhvdmVyIHtcXHJcXG5cXHRcXHRjb2xvcjogJGNsci13aGl0ZTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmFjdGl2ZS1uYXYge1xcclxcblxcdFxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuI21vYmlsZS1uYXYtYnRuIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdHdpZHRoOiByZW0oNDApO1xcclxcblxcdGhlaWdodDogcmVtKDUwKTtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogcmVtKDgpO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcblxcdC5tb2JpbGUtbGluZSB7XFxyXFxuXFx0XFx0aGVpZ2h0OiByZW0oNCk7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1ncmF5O1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IHJlbSgxMCk7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTYyMCkpIHtcXHJcXG5cXHRoZWFkZXIge1xcclxcblxcdFxcdHBhZGRpbmc6IHJlbSg0OCk7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oOTEwKSkge1xcclxcblxcdCNkZXNrdG9wLW5hdi1jdG4ge1xcclxcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNtb2JpbGUtbmF2LWJ0biB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg0MjUpKSB7XFxyXFxuXFx0aGVhZGVyIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiByZW0oMjQpO1xcclxcblxcclxcblxcdFxcdGltZyB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oMjQwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMzUwKSkge1xcclxcblxcdGhlYWRlciB7XFxyXFxuXFx0XFx0aW1nIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSgxNjApO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5cXHJcXG4jaG9tZSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdHBhZGRpbmc6IHJlbSgyMDApIDA7XFxyXFxuXFx0Z2FwOiByZW0oMjAwKTtcXHJcXG5cXHRtYXgtd2lkdGg6IHJlbSgxMjA2KTtcXHJcXG5cXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcblxcdCN3ZWxjb21lIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0Z2FwOiByZW0oMTIwKTtcXHJcXG5cXHJcXG5cXHRcXHRkaXYge1xcclxcblxcdFxcdFxcdHdpZHRoOiA2MCU7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdHAge1xcclxcblxcdFxcdFxcdHBhZGRpbmctdG9wOiByZW0oMjQpO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRpbWcge1xcclxcblxcdFxcdFxcdHdpZHRoOiA0MCU7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oMzAwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNoZWFkZXItbG9jYXRpb24ge1xcclxcblxcdFxcdGNvbG9yOiAkY2xyLWdyYXk7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I3Byb2plY3RzIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0bWF4LXdpZHRoOiByZW0oNzk1KTtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRnYXA6IHJlbSgxMjApO1xcclxcblxcclxcblxcdFxcdCNwcm9qZWN0cy1vbmUtbGluZXIge1xcclxcblxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5wcm9qZWN0LWN0biB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdGdhcDogcmVtKDQwKTtcXHJcXG5cXHJcXG5cXHRcXHQucHJvamVjdC1oZWFkaW5nIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcblxcdFxcdFxcdHAge1xcclxcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDgwKTtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXdlaWdodDogMTAwO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNhYm91dC1tZSxcXHJcXG5cXHQjc2tpbGxzLWN0biB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdGdhcDogcmVtKDgwKTtcXHJcXG5cXHJcXG5cXHRcXHRoMiB7XFxyXFxuXFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I2Fib3V0LW1lIHtcXHJcXG5cXHRcXHRtYXgtd2lkdGg6IHJlbSg2NTcpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjc2tpbGxzLWN0biB7XFxyXFxuXFx0XFx0bWF4LXdpZHRoOiByZW0oOTkxKTtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG5cXHRcXHQjc2tpbGxzLWxpc3Qge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdFxcdGdhcDogcmVtKDY0KSAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQuc2tpbGwge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdGdhcDogcmVtKDI0KTtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMjAlO1xcclxcblxcclxcblxcdFxcdFxcdGgzIHtcXHJcXG5cXHRcXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQuc2tpbGwtaW1nLWN0biB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdGhlaWdodDogcmVtKDEwNCk7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IHJlbSgxMDQpO1xcclxcblxcdFxcdFxcdGJvcmRlcjogMXB4IHNvbGlkICRjbHItZ3JheTtcXHJcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiByZW0oMTAwKTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRpbWcge1xcclxcblxcdFxcdFxcdFxcdG1heC1oZWlnaHQ6IHJlbSg0MCk7XFxyXFxuXFx0XFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oNDApO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTAyNCkpIHtcXHJcXG5cXHQjaG9tZSB7XFxyXFxuXFx0XFx0cGFkZGluZzogcmVtKDEyMCkgcmVtKDQ4KTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg3NjgpKSB7XFxyXFxuXFx0Ym9keSB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjaG9tZSB7XFxyXFxuXFx0XFx0I3dlbGNvbWUge1xcclxcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0XFx0Z2FwOiByZW0oNDApO1xcclxcblxcclxcblxcdFxcdFxcdGRpdixcXHJcXG5cXHRcXHRcXHRpbWcge1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LnByb2plY3QtY3RuIHtcXHJcXG5cXHRcXHRcXHRnYXA6IHJlbSgzMik7XFxyXFxuXFxyXFxuXFx0XFx0XFx0LnByb2plY3QtaGVhZGluZyB7XFxyXFxuXFx0XFx0XFx0XFx0cCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oNjApO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCNza2lsbHMtY3RuIHtcXHJcXG5cXHRcXHRcXHQuc2tpbGwge1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAzMyU7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg0MjUpKSB7XFxyXFxuXFx0I2hvbWUge1xcclxcblxcdFxcdGdhcDogcmVtKDgwKTtcXHJcXG5cXHRcXHRwYWRkaW5nOiByZW0oODApIHJlbSgyNCk7XFxyXFxuXFxyXFxuXFx0XFx0I3Byb2plY3RzIHtcXHJcXG5cXHRcXHRcXHRnYXA6IHJlbSg0OCk7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5wcm9qZWN0LWN0biB7XFxyXFxuXFx0XFx0XFx0LnByb2plY3QtaGVhZGluZyB7XFxyXFxuXFx0XFx0XFx0XFx0cCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oNDApO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCNza2lsbHMtY3RuIHtcXHJcXG5cXHRcXHRcXHQuc2tpbGwge1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiA1MCU7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQjYWJvdXQtbWUsXFxyXFxuXFx0XFx0I3NraWxscy1jdG4ge1xcclxcblxcdFxcdFxcdGdhcDogcmVtKDQwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMzIwKSkge1xcclxcblxcdCNob21lIHtcXHJcXG5cXHRcXHQjc2tpbGxzLWN0biB7XFxyXFxuXFx0XFx0XFx0LnNraWxsIHtcXHJcXG5cXHRcXHRcXHRcXHRoMyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTgpO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcblxcclxcbiNidG4tdG9wIHtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0cmlnaHQ6IHJlbSg1MCk7XFxyXFxuXFx0Ym90dG9tOiByZW0oNTApO1xcclxcblxcdHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbiNidG4tdG9wOmhvdmVyIHtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg0MjUpKSB7XFxyXFxuXFx0I2J0bi10b3Age1xcclxcblxcdFxcdHJpZ2h0OiByZW0oMjUpO1xcclxcblxcdFxcdGJvdHRvbTogcmVtKDI1KTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5cXHJcXG5idXR0b24ge1xcclxcblxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcclxcblxcdGZvbnQtc2l6ZTogcmVtKDIwKTtcXHJcXG5cXHRwYWRkaW5nOiByZW0oMTIpIHJlbSg2MCk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogcmVtKDUwKTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWJ0bjtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWJ0bi1ob3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1yZXNldCB7XFxyXFxuXFx0bWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg0MjUpKSB7XFxyXFxuXFx0YnV0dG9uIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IHJlbSg0OCk7XFxyXFxuXFx0Zm9udC1zaXplOiByZW0oMzIpO1xcclxcblxcdGhlaWdodDogcmVtKDMxMik7XFxyXFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICRjbHItZ3JheS1kYXJrO1xcclxcblxcclxcblxcdGRpdiB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRnYXA6IHJlbSg0OCk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGEge1xcclxcblxcdFxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcclxcblxcdFxcdHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGE6aG92ZXIge1xcclxcblxcdFxcdGNvbG9yOiAkY2xyLWdyYXk7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuXFxyXFxuLm1haW4tYmFubmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcblxcdGgxIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0dG9wOiA1MCU7XFxyXFxuXFx0XFx0bGVmdDogNTAlO1xcclxcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRpbWcge1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXHJcXG5cXHQubWFpbi1iYW5uZXIge1xcclxcblxcdFxcdGgxIHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgyNCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcblxcclxcbiNwcm9qZWN0LWxpc3Qge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcclxcblxcdGdhcDogcmVtKDI0MCk7XFxyXFxuXFxyXFxuXFx0LnByb2plY3Qge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0Z2FwOiByZW0oMzApO1xcclxcblxcclxcblxcdFxcdGltZyB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDUwJTtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQucHJvamVjdC1jb250ZW50IHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRnYXA6IHJlbSg0OCk7XFxyXFxuXFx0XFx0d2lkdGg6IDUwJTtcXHJcXG5cXHJcXG5cXHRcXHRwIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSg1MjApO1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTYyMCkpIHtcXHJcXG5cXHQjcHJvamVjdC1saXN0IHtcXHJcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSByZW0oNDgpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDEwMjQpKSB7XFxyXFxuXFx0I3Byb2plY3QtbGlzdCB7XFxyXFxuXFx0XFx0Z2FwOiByZW0oMTIwKTtcXHJcXG5cXHJcXG5cXHRcXHQucHJvamVjdC1jb250ZW50IHtcXHJcXG5cXHRcXHRcXHRnYXA6IHJlbSgyNCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDc2OCkpIHtcXHJcXG5cXHQjcHJvamVjdC1saXN0IHtcXHJcXG5cXHRcXHQucHJvamVjdCB7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG5cXHRcXHRcXHRpbWcge1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQucHJvamVjdC1jb250ZW50IHtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRwIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRtYXgtd2lkdGg6IG5vbmU7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0I2NvZmZlZS10aW1lLXByb2plY3Qge1xcclxcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcclxcblxcdCNwcm9qZWN0LWxpc3Qge1xcclxcblxcdFxcdGdhcDogcmVtKDgwKTtcXHJcXG5cXHRcXHRwYWRkaW5nOiByZW0oODApIHJlbSgyNCk7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuXFxyXFxuI2V4cGVyaWVuY2UtcGFnZSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG5cXHRhc2lkZSB7XFxyXFxuXFx0XFx0cGFkZGluZzogcmVtKDEyMCkgMDtcXHJcXG5cXHRcXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkY2xyLWdyYXktZGFyaztcXHJcXG5cXHRcXHR3aWR0aDogMjUlO1xcclxcblxcclxcblxcdFxcdHVsIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IHN0aWNreTtcXHJcXG5cXHRcXHRcXHR0b3A6IHJlbSg4MCk7XFxyXFxuXFx0XFx0XFx0Z2FwOiByZW0oMjQpO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRoNCB7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdHNlY3Rpb24ge1xcclxcblxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIDAgcmVtKDEyMCkgcmVtKDgwKTtcXHJcXG5cXHRcXHR3aWR0aDogNzUlO1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRnYXA6IHJlbSgxMjApO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuZXhwZXJpZW5jZS1jb250ZW50IHtcXHJcXG5cXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxyXFxuXFxyXFxuXFx0XFx0dWwge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRnYXA6IHJlbSg4KTtcXHJcXG5cXHRcXHRcXHRsaXN0LXN0eWxlOiBkaXNjO1xcclxcblxcdFxcdFxcdGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGU7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5kYXRlcyB7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMjApO1xcclxcblxcdFxcdFxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LnRpdGxlIHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSg0MCk7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRcXHRcXHRmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdHAge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDIwKTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IHJlbSgyNCk7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLXRvcDogcmVtKDgpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNjIwKSkge1xcclxcblxcdCNleHBlcmllbmNlLXBhZ2Uge1xcclxcblxcdFxcdGFzaWRlLFxcclxcblxcdFxcdHNlY3Rpb24ge1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIHJlbSg0OCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDEwMjQpKSB7XFxyXFxuXFx0I2V4cGVyaWVuY2UtcGFnZSB7XFxyXFxuXFx0XFx0LmV4cGVyaWVuY2UtY29udGVudCB7XFxyXFxuXFx0XFx0XFx0LmRhdGVzIHtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC50aXRsZSB7XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMjQpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzY4KSkge1xcclxcblxcdCNleHBlcmllbmNlLXBhZ2Uge1xcclxcblxcdFxcdGFzaWRlIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRzZWN0aW9uIHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcclxcblxcdCNleHBlcmllbmNlLXBhZ2Uge1xcclxcblxcdFxcdHBhZGRpbmc6IDAgcmVtKDI0KTtcXHJcXG5cXHJcXG5cXHRcXHRzZWN0aW9uIHtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiByZW0oODApIDA7XFxyXFxuXFx0XFx0XFx0Z2FwOiByZW0oODApO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5cXHJcXG4jYWJvdXQtY29udGVudCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogcmVtKDQ4KTtcXHJcXG5cXHJcXG5cXHRpbWcge1xcclxcblxcdFxcdHdpZHRoOiA1MCU7XFxyXFxuXFx0XFx0bWF4LXdpZHRoOiByZW0oNzk1KTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNjIwKSkge1xcclxcblxcdCNhYm91dC1jb250ZW50IHtcXHJcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSByZW0oNDgpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDEwMjQpKSB7XFxyXFxuXFx0cCB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDc2OCkpIHtcXHJcXG5cXHQjYWJvdXQtY29udGVudCB7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG5cXHRcXHRpbWcge1xcclxcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg3NjgpKSB7XFxyXFxuXFx0I2Fib3V0LWNvbnRlbnQge1xcclxcblxcdFxcdHBhZGRpbmc6IHJlbSg4MCkgcmVtKDI0KTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5cXHJcXG4ucHJvamVjdC1wYWdlIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcblxcdGFzaWRlIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcclxcblxcdFxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRjbHItZ3JheS1kYXJrO1xcclxcblxcdFxcdHdpZHRoOiAyNSU7XFxyXFxuXFxyXFxuXFx0XFx0dWwge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogc3RpY2t5O1xcclxcblxcdFxcdFxcdHRvcDogcmVtKDgwKTtcXHJcXG5cXHRcXHRcXHRnYXA6IHJlbSgyNCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRzZWN0aW9uIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcclxcblxcdFxcdHdpZHRoOiA3NSU7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdGdhcDogcmVtKDEyMCk7XFxyXFxuXFxyXFxuXFx0XFx0LnByb2plY3Qtc2VjdGlvbiB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdGdhcDogcmVtKDQ4KTtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRoMiB7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oNDApO1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdHAge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDc5NSk7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdGltZyB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdFxcdFxcdG1heC1oZWlnaHQ6IHJlbSg0NTApO1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDgwMCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyB0aGlzIGlzIGZvciB0aGUgcG9ydGZvbGlvIHByb2plY3RcXHJcXG5cXHQjdmVyc2lvbi1vbmUge1xcclxcblxcdFxcdGltZyB7XFxyXFxuXFx0XFx0XFx0bWF4LWhlaWdodDogcmVtKDcwMCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDE2MjApKSB7XFxyXFxuXFx0LnByb2plY3QtcGFnZSB7XFxyXFxuXFx0XFx0YXNpZGUsXFxyXFxuXFx0XFx0c2VjdGlvbiB7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogcmVtKDEyMCkgcmVtKDQ4KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzY4KSkge1xcclxcblxcdC5wcm9qZWN0LXBhZ2Uge1xcclxcblxcdFxcdGFzaWRlIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRzZWN0aW9uIHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcclxcblxcdC5wcm9qZWN0LXBhZ2Uge1xcclxcblxcdFxcdHNlY3Rpb24ge1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IHJlbSg4MCkgcmVtKDI0KTtcXHJcXG5cXHRcXHRcXHRnYXA6IHJlbSg4MCk7XFxyXFxuXFxyXFxuXFx0XFx0XFx0aDIge1xcclxcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDI0KTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0LnByb2plY3Qtc2VjdGlvbiB7XFxyXFxuXFx0XFx0XFx0XFx0Z2FwOiByZW0oMjQpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuXFxyXFxuLm1vYmlsZS1uYXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XFxyXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdHotaW5kZXg6IDEwO1xcclxcblxcclxcblxcdC5tb2JpbGUtbmF2LWJnIHtcXHJcXG5cXHRcXHR3aWR0aDogMCU7XFxyXFxuXFx0XFx0dHJhbnNpdGlvbjogd2lkdGggMC4ycyBlYXNlLWluO1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItYmc7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmFjdGl2ZS1jdG4ge1xcclxcblxcdFxcdHdpZHRoOiA4MCU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5uYXYtbGlua3Mge1xcclxcblxcdFxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNidG4tY3RuIHtcXHJcXG5cXHRcXHR3aWR0aDogMjAlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRidXR0b24ge1xcclxcblxcdFxcdGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuXFx0XFx0Y29sb3I6ICRjbHItYmxhY2s7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMzIpO1xcclxcblxcdFxcdHBhZGRpbmctbGVmdDogcmVtKDE2KTtcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0dG9wOiByZW0oMTYpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjbW9iaWxlLW5hdi1jdG4ge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRnYXA6IHJlbSgzMik7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMjApO1xcclxcblxcdFxcdHBhZGRpbmc6IHJlbSgzMik7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLWJnIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxyXFxuXFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG5cXHRvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHsgdXBkYXRlSGVhZGVyQWN0aXZlTGluaywgcmVtb3ZlSGVhZGVyU3R5bGVzLCBtb2JpbGVOYXZJbml0IH07XHJcblxyXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1saW5rc1wiKTtcclxuY29uc3QgbW9iaWxlTmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbmF2LWJ0blwiKTtcclxuY29uc3QgbW9iaWxlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbmF2XCIpO1xyXG5jb25zdCBtb2JpbGVOYXZFeGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbmF2LWV4aXRcIik7XHJcbmNvbnN0IG1vYmlsZU5hdkN0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW5hdi1iZ1wiKTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUhlYWRlckFjdGl2ZUxpbmsoKSB7XHJcblx0bmF2LmZvckVhY2goKGxpbmspID0+IHtcclxuXHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdFx0dXBkYXRlSGVhZGVyU3R5bGVzKGxpbmspO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUhlYWRlclN0eWxlcyhsaW5rKSB7XHJcblx0cmVtb3ZlSGVhZGVyU3R5bGVzKCk7XHJcblx0YWRkSGVhZGVyU3R5bGVzKGxpbmspO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVIZWFkZXJTdHlsZXMoKSB7XHJcblx0bmF2LmZvckVhY2goKGNoaWxkKSA9PiB7XHJcblx0XHRjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLW5hdlwiKTtcclxuXHR9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkSGVhZGVyU3R5bGVzKGxpbmspIHtcclxuXHRsaW5rLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtbmF2XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2JpbGVOYXZJbml0KCkge1xyXG5cdG1vYmlsZU5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0bW9iaWxlTmF2LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtYmdcIik7XHJcblx0XHRtb2JpbGVOYXZDdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1jdG5cIik7XHJcblx0fSk7XHJcblxyXG5cdG1vYmlsZU5hdkV4aXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdG1vYmlsZU5hdi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWJnXCIpO1xyXG5cdFx0bW9iaWxlTmF2Q3RuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtY3RuXCIpO1xyXG5cdH0pO1xyXG59XHJcbiIsImV4cG9ydCB7IHNjcm9sbFRvVG9wIH07XHJcblxyXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi10b3BcIik7XHJcblxyXG5idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNjcm9sbFRvVG9wKTtcclxuXHJcbmZ1bmN0aW9uIHNjcm9sbFRvVG9wKCkge1xyXG5cdGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcclxuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcclxufVxyXG4iLCJleHBvcnQgeyBpbml0IH07XHJcbmltcG9ydCB7IHVwZGF0ZUhlYWRlckFjdGl2ZUxpbmssIG1vYmlsZU5hdkluaXQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlclwiO1xyXG5pbXBvcnQgeyBzY3JvbGxUb1RvcCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdG9Ub3BCdG5cIjtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcblx0dXBkYXRlSGVhZGVyQWN0aXZlTGluaygpO1xyXG5cdHNjcm9sbFRvVG9wKCk7XHJcblx0bW9iaWxlTmF2SW5pdCgpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGluaXQgfSBmcm9tIFwiLi9pbml0LmpzXCI7XHJcbmltcG9ydCBcIi4uL3Njc3Mvc3R5bGVzLnNjc3NcIjtcclxuXHJcbmluaXQoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9