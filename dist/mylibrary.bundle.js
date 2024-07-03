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
/*!***************************************!*\
  !*** ./src/js/portfolio/mylibrary.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../init.js */ "./src/js/init.js");
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header.js */ "./src/js/components/header.js");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scss/styles.scss */ "./src/scss/styles.scss");




(0,_init_js__WEBPACK_IMPORTED_MODULE_0__.init)();
(0,_components_header_js__WEBPACK_IMPORTED_MODULE_1__.removeHeaderStyles)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlsaWJyYXJ5LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw4NEJBQTg0QixVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsTUFBTSxRQUFRLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLFFBQVEsV0FBVyxPQUFPLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxZQUFZLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sT0FBTyxVQUFVLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsUUFBUSxNQUFNLFVBQVUsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsUUFBUSxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsVUFBVSxPQUFPLE9B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V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBa0M7QUFDMkI7QUFDN0I7QUFDaEM7QUFDQSw4Q0FBSTtBQUNKLHlFQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3M/MzIxZiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9qcy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvY29tcG9uZW50cy90b1RvcEJ0bi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvaW5pdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvcG9ydGZvbGlvL215bGlicmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA0JSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmltZyxcbnBpY3R1cmUsXG5zdmcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDEsXG5oMixcbmgzIHtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuXG5oMSxcbmgyIHtcbiAgZm9udC1zaXplOiAzLjc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmEsXG5hOnZpc2l0ZWQsXG5hOmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgaDEsXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gIGgxLFxuICBoMiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5OS4zNzVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5oZWFkZXIge1xuICBwYWRkaW5nOiAzcmVtIDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XG59XG5cbiNoZWFkZXItbGF5b3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogM3JlbTtcbn1cbnVsIGEge1xuICBjb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xufVxudWwgYTpob3ZlciB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xufVxudWwgLmFjdGl2ZS1uYXYge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbn1cblxuI21vYmlsZS1uYXYtYnRuIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI21vYmlsZS1uYXYtYnRuIC5tb2JpbGUtbGluZSB7XG4gIGhlaWdodDogMC4yNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDNyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2Ljg3NXJlbSkge1xuICAjZGVza3RvcC1uYXYtY3RuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNtb2JpbGUtbmF2LWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgfVxuICBoZWFkZXIgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDE1cmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMS44NzVyZW0pIHtcbiAgaGVhZGVyIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMHJlbTtcbiAgfVxufVxuI2hvbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMi41cmVtIDA7XG4gIGdhcDogMTIuNXJlbTtcbiAgbWF4LXdpZHRoOiA3NS4zNzVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2hvbWUgI3dlbGNvbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDcuNXJlbTtcbn1cbiNob21lICN3ZWxjb21lIGRpdiB7XG4gIHdpZHRoOiA2MCU7XG59XG4jaG9tZSAjd2VsY29tZSBwIHtcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcbn1cbiNob21lICN3ZWxjb21lIGltZyB7XG4gIHdpZHRoOiA0MCU7XG4gIG1heC13aWR0aDogMTguNzVyZW07XG59XG4jaG9tZSAjaGVhZGVyLWxvY2F0aW9uIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbiNob21lICNwcm9qZWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogNDkuNjg3NXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGdhcDogNy41cmVtO1xufVxuI2hvbWUgI3Byb2plY3RzICNwcm9qZWN0cy1vbmUtbGluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jaG9tZSAucHJvamVjdC1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIuNXJlbTtcbn1cbiNob21lIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2hvbWUgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcgcCB7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbiNob21lICNhYm91dC1tZSxcbiNob21lICNza2lsbHMtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cmVtO1xufVxuI2hvbWUgI2Fib3V0LW1lIGgyLFxuI2hvbWUgI3NraWxscy1jdG4gaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jaG9tZSAjYWJvdXQtbWUge1xuICBtYXgtd2lkdGg6IDQxLjA2MjVyZW07XG59XG4jaG9tZSAjc2tpbGxzLWN0biB7XG4gIG1heC13aWR0aDogNjEuOTM3NXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4jaG9tZSAjc2tpbGxzLWN0biAjc2tpbGxzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDRyZW0gMDtcbn1cbiNob21lICNza2lsbHMtY3RuIC5za2lsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS41cmVtO1xuICB3aWR0aDogMjAlO1xufVxuI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2hvbWUgI3NraWxscy1jdG4gLnNraWxsLWltZy1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2LjVyZW07XG4gIHdpZHRoOiA2LjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgwLCAwJSwgNjUlKTtcbiAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbn1cbiNob21lICNza2lsbHMtY3RuIC5za2lsbC1pbWctY3RuIGltZyB7XG4gIG1heC1oZWlnaHQ6IDIuNXJlbTtcbiAgbWF4LXdpZHRoOiAyLjVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XG4gICNob21lIHtcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgYm9keSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gICNob21lICN3ZWxjb21lIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMi41cmVtO1xuICB9XG4gICNob21lICN3ZWxjb21lIGRpdixcbiAgI2hvbWUgI3dlbGNvbWUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAjaG9tZSAucHJvamVjdC1jdG4ge1xuICAgIGdhcDogMnJlbTtcbiAgfVxuICAjaG9tZSAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyBwIHtcbiAgICBmb250LXNpemU6IDMuNzVyZW07XG4gIH1cbiAgI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIHtcbiAgICB3aWR0aDogMzMlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gICNob21lIHtcbiAgICBnYXA6IDVyZW07XG4gICAgcGFkZGluZzogNXJlbSAxLjVyZW07XG4gIH1cbiAgI2hvbWUgI3Byb2plY3RzIHtcbiAgICBnYXA6IDNyZW07XG4gIH1cbiAgI2hvbWUgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcgcCB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gICNob21lICNhYm91dC1tZSxcbiAgI2hvbWUgI3NraWxscy1jdG4ge1xuICAgIGdhcDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMHJlbSkge1xuICAjaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwgaDMge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIH1cbn1cbiNidG4tdG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMy4xMjVyZW07XG4gIGJvdHRvbTogMy4xMjVyZW07XG4gIHotaW5kZXg6IDM7XG59XG5cbiNidG4tdG9wOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gICNidG4tdG9wIHtcbiAgICByaWdodDogMS41NjI1cmVtO1xuICAgIGJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5idXR0b24ge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBwYWRkaW5nOiAwLjc1cmVtIDMuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDMuMTI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1LCA3NSUsIDU4JSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzO1xufVxuXG5idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzUsIDcxJSwgMzklKTtcbn1cblxuLmJ0bi1yZXNldCB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzcmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGhlaWdodDogMTkuNXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzMlKTtcbn1cbmZvb3RlciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDNyZW07XG59XG5mb290ZXIgYSB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xufVxuZm9vdGVyIGE6aG92ZXIge1xuICBjb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xufVxuXG4ubWFpbi1iYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluLWJhbm5lciBoMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubWFpbi1iYW5uZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgLm1haW4tYmFubmVyIGgxIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuI3Byb2plY3QtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xuICBnYXA6IDE1cmVtO1xufVxuI3Byb2plY3QtbGlzdCAucHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxLjg3NXJlbTtcbn1cbiNwcm9qZWN0LWxpc3QgLnByb2plY3QgaW1nIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuI3Byb2plY3QtbGlzdCAucHJvamVjdC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogM3JlbTtcbiAgd2lkdGg6IDUwJTtcbn1cbiNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCBwIHtcbiAgbWF4LXdpZHRoOiAzMi41cmVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xuICAjcHJvamVjdC1saXN0IHtcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcbiAgI3Byb2plY3QtbGlzdCB7XG4gICAgZ2FwOiA3LjVyZW07XG4gIH1cbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdC1jb250ZW50IHtcbiAgICBnYXA6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAjcHJvamVjdC1saXN0IC5wcm9qZWN0IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LWNvbnRlbnQgcCB7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICB9XG4gICNwcm9qZWN0LWxpc3QgI2NvZmZlZS10aW1lLXByb2plY3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICAjcHJvamVjdC1saXN0IHtcbiAgICBnYXA6IDVyZW07XG4gICAgcGFkZGluZzogNXJlbSAxLjVyZW07XG4gIH1cbn1cbiNleHBlcmllbmNlLXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSB7XG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XG4gIHdpZHRoOiAyNSU7XG59XG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA1cmVtO1xuICBnYXA6IDEuNXJlbTtcbn1cbiNleHBlcmllbmNlLXBhZ2UgYXNpZGUgaDQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuI2V4cGVyaWVuY2UtcGFnZSBzZWN0aW9uIHtcbiAgcGFkZGluZzogNy41cmVtIDAgNy41cmVtIDVyZW07XG4gIHdpZHRoOiA3NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNy41cmVtO1xufVxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIGxpc3Qtc3R5bGU6IGRpc2M7XG4gIGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGU7XG59XG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLmRhdGVzIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCAudGl0bGUge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHAge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcbiAgI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSxcbiAgI2V4cGVyaWVuY2UtcGFnZSBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcbiAgI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IC5kYXRlcyB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gICNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAjZXhwZXJpZW5jZS1wYWdlIGFzaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgI2V4cGVyaWVuY2UtcGFnZSB7XG4gICAgcGFkZGluZzogMCAxLjVyZW07XG4gIH1cbiAgI2V4cGVyaWVuY2UtcGFnZSBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgZ2FwOiA1cmVtO1xuICB9XG59XG4jYWJvdXQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogM3JlbTtcbn1cbiNhYm91dC1jb250ZW50IGltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogNDkuNjg3NXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxLjI1cmVtKSB7XG4gICNhYm91dC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAjYWJvdXQtY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAjYWJvdXQtY29udGVudCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAjYWJvdXQtY29udGVudCB7XG4gICAgcGFkZGluZzogNXJlbSAxLjVyZW07XG4gIH1cbn1cbi5wcm9qZWN0LXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnByb2plY3QtcGFnZSBhc2lkZSB7XG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XG4gIHdpZHRoOiAyNSU7XG59XG4ucHJvamVjdC1wYWdlIGFzaWRlIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA1cmVtO1xuICBnYXA6IDEuNXJlbTtcbn1cbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xuICB3aWR0aDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDcuNXJlbTtcbn1cbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiAucHJvamVjdC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2plY3QtcGFnZSBzZWN0aW9uIGgyIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gcCB7XG4gIG1heC13aWR0aDogNDkuNjg3NXJlbTtcbn1cbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAyOC4xMjVyZW07XG4gIG1heC13aWR0aDogNTByZW07XG59XG4ucHJvamVjdC1wYWdlICN2ZXJzaW9uLW9uZSBpbWcge1xuICBtYXgtaGVpZ2h0OiA0My43NXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxLjI1cmVtKSB7XG4gIC5wcm9qZWN0LXBhZ2UgYXNpZGUsXG4gIC5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gIC5wcm9qZWN0LXBhZ2UgYXNpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnByb2plY3QtcGFnZSBzZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICAucHJvamVjdC1wYWdlIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xuICAgIGdhcDogNXJlbTtcbiAgfVxuICAucHJvamVjdC1wYWdlIHNlY3Rpb24gaDIge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiAucHJvamVjdC1zZWN0aW9uIHtcbiAgICBnYXA6IDEuNXJlbTtcbiAgfVxufVxuLm1vYmlsZS1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwO1xufVxuLm1vYmlsZS1uYXYgLm1vYmlsZS1uYXYtYmcge1xuICB3aWR0aDogMCU7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMnMgZWFzZS1pbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA0JSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubW9iaWxlLW5hdiAuYWN0aXZlLWN0biB7XG4gIHdpZHRoOiA4MCU7XG59XG4ubW9iaWxlLW5hdiAubmF2LWxpbmtzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5tb2JpbGUtbmF2ICNidG4tY3RuIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi5tb2JpbGUtbmF2IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDAlKTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxcmVtO1xufVxuLm1vYmlsZS1uYXYgI21vYmlsZS1uYXYtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5hY3RpdmUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19nZW5lcmFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19jb250YWluZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX21haW5Ib21lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX3RvVG9wQnRuLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX21haW5CYW5uZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fcG9ydGZvbGlvUGFnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19leHBlcmllbmNlUGFnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19hYm91dFBhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fcHJvamVjdFBhZ2VzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX21vYmlsZU5hdi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0MsZUFBQTtFQUNBLHVCQUFBO0FDSEQ7O0FETUE7RUFDQyxnQ0VWYztFRldkLG1CQUFBO0VBQ0EsdUJHTlc7RUhPWCxnQ0daUTtFSGFSLGdCQUFBO0FDSEQ7O0FHWEE7OztFQUdDLHNCQUFBO0FIY0Q7O0FHWEE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUhjRDs7QUdYQTs7O0VBR0MsY0FBQTtBSGNEOztBSTFCQTs7O0VBR0MsU0FBQTtFQUNBLGdCQUFBO0FKNkJEOztBSTFCQTs7RUFFQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUo2QkQ7O0FJMUJBO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtBSjZCRDs7QUkxQkE7OztFQUdDLHFCQUFBO0FKNkJEOztBSTFCQTtFQUNDOztJQUVDLG1CQUFBO0VKNkJBO0FBQ0Y7QUkxQkE7RUFDQzs7SUFFQyxlQUFBO0VKNEJBO0FBQ0Y7QUtqRUE7RUFDQyxvQkFBQTtFQUNBLGNBQUE7QUxtRUQ7O0FNcEVBO0VBQ0MsZUFBQTtFQUNBLHdDQUFBO0FOdUVEOztBTXBF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QyxVQUFBO0FoQmluQkY7QWdCOW1CQztFQUNDLG1CQUFBO0FoQmduQkY7QWdCN21CQztFQUNDLFVBQUE7QWhCK21CRjtBZ0I1bUJDO0VBQ0MsZ0JBQUE7RUFDQSxxQmQxQlU7RWMyQlYsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FoQjhtQkY7QWdCM21CQztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QWhCNm1CRjs7QWdCem1CQTtFQUNDLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FoQjRtQkRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCJjb2xvcnNcXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiZm9udHNcXFwiIGFzICo7XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG5cXHRmb250LXNpemU6IHJlbSgxOCk7XFxyXFxuXFx0Y29sb3I6ICRjbHItd2hpdGU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1iZztcXHJcXG5cXHRsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cIixcImh0bWwge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDQlKTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbmltZyxcXG5waWN0dXJlLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgZm9udC1zaXplOiAzLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XFxuICBoMSxcXG4gIGgyIHtcXG4gICAgZm9udC1zaXplOiAzLjEyNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgaDEsXFxuICBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG59XFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDk5LjM3NXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogM3JlbSAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzMlKTtcXG59XFxuXFxuI2hlYWRlci1sYXlvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG51bCBhIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xcbn1cXG51bCBhOmhvdmVyIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbn1cXG51bCAuYWN0aXZlLW5hdiB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG59XFxuXFxuI21vYmlsZS1uYXYtYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jbW9iaWxlLW5hdi1idG4gLm1vYmlsZS1saW5lIHtcXG4gIGhlaWdodDogMC4yNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xcbiAgaGVhZGVyIHtcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuODc1cmVtKSB7XFxuICAjZGVza3RvcC1uYXYtY3RuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gICNtb2JpbGUtbmF2LWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gIGhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gIH1cXG4gIGhlYWRlciBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDE1cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMS44NzVyZW0pIHtcXG4gIGhlYWRlciBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwcmVtO1xcbiAgfVxcbn1cXG4jaG9tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEyLjVyZW0gMDtcXG4gIGdhcDogMTIuNXJlbTtcXG4gIG1heC13aWR0aDogNzUuMzc1cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jaG9tZSAjd2VsY29tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNy41cmVtO1xcbn1cXG4jaG9tZSAjd2VsY29tZSBkaXYge1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuI2hvbWUgI3dlbGNvbWUgcCB7XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbn1cXG4jaG9tZSAjd2VsY29tZSBpbWcge1xcbiAgd2lkdGg6IDQwJTtcXG4gIG1heC13aWR0aDogMTguNzVyZW07XFxufVxcbiNob21lICNoZWFkZXItbG9jYXRpb24ge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbiNob21lICNwcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogNDkuNjg3NXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiA3LjVyZW07XFxufVxcbiNob21lICNwcm9qZWN0cyAjcHJvamVjdHMtb25lLWxpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2hvbWUgLnByb2plY3QtY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyLjVyZW07XFxufVxcbiNob21lIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jaG9tZSAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyBwIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbiNob21lICNhYm91dC1tZSxcXG4jaG9tZSAjc2tpbGxzLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXJlbTtcXG59XFxuI2hvbWUgI2Fib3V0LW1lIGgyLFxcbiNob21lICNza2lsbHMtY3RuIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2hvbWUgI2Fib3V0LW1lIHtcXG4gIG1heC13aWR0aDogNDEuMDYyNXJlbTtcXG59XFxuI2hvbWUgI3NraWxscy1jdG4ge1xcbiAgbWF4LXdpZHRoOiA2MS45Mzc1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNob21lICNza2lsbHMtY3RuICNza2lsbHMtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDRyZW0gMDtcXG59XFxuI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS41cmVtO1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIGgzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2hvbWUgI3NraWxscy1jdG4gLnNraWxsLWltZy1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNi41cmVtO1xcbiAgd2lkdGg6IDYuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgwLCAwJSwgNjUlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDYuMjVyZW07XFxufVxcbiNob21lICNza2lsbHMtY3RuIC5za2lsbC1pbWctY3RuIGltZyB7XFxuICBtYXgtaGVpZ2h0OiAyLjVyZW07XFxuICBtYXgtd2lkdGg6IDIuNXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcXG4gICNob21lIHtcXG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XFxuICBib2R5IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgI2hvbWUgI3dlbGNvbWUge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIuNXJlbTtcXG4gIH1cXG4gICNob21lICN3ZWxjb21lIGRpdixcXG4gICNob21lICN3ZWxjb21lIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgI2hvbWUgLnByb2plY3QtY3RuIHtcXG4gICAgZ2FwOiAycmVtO1xcbiAgfVxcbiAgI2hvbWUgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcgcCB7XFxuICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcXG4gIH1cXG4gICNob21lICNza2lsbHMtY3RuIC5za2lsbCB7XFxuICAgIHdpZHRoOiAzMyU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gICNob21lIHtcXG4gICAgZ2FwOiA1cmVtO1xcbiAgICBwYWRkaW5nOiA1cmVtIDEuNXJlbTtcXG4gIH1cXG4gICNob21lICNwcm9qZWN0cyB7XFxuICAgIGdhcDogM3JlbTtcXG4gIH1cXG4gICNob21lIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHAge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG4gICNob21lICNza2lsbHMtY3RuIC5za2lsbCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuICAjaG9tZSAjYWJvdXQtbWUsXFxuICAjaG9tZSAjc2tpbGxzLWN0biB7XFxuICAgIGdhcDogMi41cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMHJlbSkge1xcbiAgI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIGgzIHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIH1cXG59XFxuI2J0bi10b3Age1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDMuMTI1cmVtO1xcbiAgYm90dG9tOiAzLjEyNXJlbTtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbiNidG4tdG9wOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgI2J0bi10b3Age1xcbiAgICByaWdodDogMS41NjI1cmVtO1xcbiAgICBib3R0b206IDEuNTYyNXJlbTtcXG4gIH1cXG59XFxuYnV0dG9uIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgcGFkZGluZzogMC43NXJlbSAzLjc1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMy4xMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1LCA3NSUsIDU4JSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1LCA3MSUsIDM5JSk7XFxufVxcblxcbi5idG4tcmVzZXQge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgaGVpZ2h0OiAxOS41cmVtO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzMlKTtcXG59XFxuZm9vdGVyIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5mb290ZXIgYSB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XFxufVxcbmZvb3RlciBhOmhvdmVyIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XFxufVxcblxcbi5tYWluLWJhbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tYWluLWJhbm5lciBoMSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4ubWFpbi1iYW5uZXIgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICAubWFpbi1iYW5uZXIgaDEge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG59XFxuI3Byb2plY3QtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xcbiAgZ2FwOiAxNXJlbTtcXG59XFxuI3Byb2plY3QtbGlzdCAucHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS44NzVyZW07XFxufVxcbiNwcm9qZWN0LWxpc3QgLnByb2plY3QgaW1nIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG4gIHdpZHRoOiA1MCU7XFxufVxcbiNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCBwIHtcXG4gIG1heC13aWR0aDogMzIuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxLjI1cmVtKSB7XFxuICAjcHJvamVjdC1saXN0IHtcXG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XFxuICAjcHJvamVjdC1saXN0IHtcXG4gICAgZ2FwOiA3LjVyZW07XFxuICB9XFxuICAjcHJvamVjdC1saXN0IC5wcm9qZWN0LWNvbnRlbnQge1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcXG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3Qge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1jb250ZW50IHAge1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7XFxuICB9XFxuICAjcHJvamVjdC1saXN0ICNjb2ZmZWUtdGltZS1wcm9qZWN0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICAjcHJvamVjdC1saXN0IHtcXG4gICAgZ2FwOiA1cmVtO1xcbiAgICBwYWRkaW5nOiA1cmVtIDEuNXJlbTtcXG4gIH1cXG59XFxuI2V4cGVyaWVuY2UtcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIHtcXG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDVyZW07XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSBoNCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIHNlY3Rpb24ge1xcbiAgcGFkZGluZzogNy41cmVtIDAgNy41cmVtIDVyZW07XFxuICB3aWR0aDogNzUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDcuNXJlbTtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBsaXN0LXN0eWxlOiBkaXNjO1xcbiAgbGlzdC1zdHlsZS1wb3NpdGlvbjogb3V0c2lkZTtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IC5kYXRlcyB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHAge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxLjI1cmVtKSB7XFxuICAjZXhwZXJpZW5jZS1wYWdlIGFzaWRlLFxcbiAgI2V4cGVyaWVuY2UtcGFnZSBzZWN0aW9uIHtcXG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XFxuICAjZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLmRhdGVzIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xcbiAgI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAjZXhwZXJpZW5jZS1wYWdlIHNlY3Rpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgI2V4cGVyaWVuY2UtcGFnZSB7XFxuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgfVxcbiAgI2V4cGVyaWVuY2UtcGFnZSBzZWN0aW9uIHtcXG4gICAgcGFkZGluZzogNXJlbSAwO1xcbiAgICBnYXA6IDVyZW07XFxuICB9XFxufVxcbiNhYm91dC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiA3LjVyZW0gMDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxufVxcbiNhYm91dC1jb250ZW50IGltZyB7XFxuICB3aWR0aDogNTAlO1xcbiAgbWF4LXdpZHRoOiA0OS42ODc1cmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcXG4gICNhYm91dC1jb250ZW50IHtcXG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XFxuICBwIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xcbiAgI2Fib3V0LWNvbnRlbnQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgI2Fib3V0LWNvbnRlbnQgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XFxuICAjYWJvdXQtY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xcbiAgfVxcbn1cXG4ucHJvamVjdC1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wcm9qZWN0LXBhZ2UgYXNpZGUge1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XFxuICB3aWR0aDogMjUlO1xcbn1cXG4ucHJvamVjdC1wYWdlIGFzaWRlIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogNXJlbTtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG4ucHJvamVjdC1wYWdlIHNlY3Rpb24ge1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICB3aWR0aDogNzUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDcuNXJlbTtcXG59XFxuLnByb2plY3QtcGFnZSBzZWN0aW9uIC5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gaDIge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gcCB7XFxuICBtYXgtd2lkdGg6IDQ5LjY4NzVyZW07XFxufVxcbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiAyOC4xMjVyZW07XFxuICBtYXgtd2lkdGg6IDUwcmVtO1xcbn1cXG4ucHJvamVjdC1wYWdlICN2ZXJzaW9uLW9uZSBpbWcge1xcbiAgbWF4LWhlaWdodDogNDMuNzVyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xcbiAgLnByb2plY3QtcGFnZSBhc2lkZSxcXG4gIC5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDcuNXJlbSAzcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xcbiAgLnByb2plY3QtcGFnZSBhc2lkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAucHJvamVjdC1wYWdlIHNlY3Rpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgLnByb2plY3QtcGFnZSBzZWN0aW9uIHtcXG4gICAgcGFkZGluZzogNXJlbSAxLjVyZW07XFxuICAgIGdhcDogNXJlbTtcXG4gIH1cXG4gIC5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgLnByb2plY3QtcGFnZSBzZWN0aW9uIC5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gIH1cXG59XFxuLm1vYmlsZS1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG4ubW9iaWxlLW5hdiAubW9iaWxlLW5hdi1iZyB7XFxuICB3aWR0aDogMCU7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzIGVhc2UtaW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDQlKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5tb2JpbGUtbmF2IC5hY3RpdmUtY3RuIHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbi5tb2JpbGUtbmF2IC5uYXYtbGlua3Mge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLm1vYmlsZS1uYXYgI2J0bi1jdG4ge1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuLm1vYmlsZS1uYXYgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDFyZW07XFxufVxcbi5tb2JpbGUtbmF2ICNtb2JpbGUtbmF2LWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5hY3RpdmUtYmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxufVwiLFwiJGZvbnQtcHJpbWFyeTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cIixcIi8vIFByaW1hcnkgQ29sb3JzXFxyXFxuJGNsci1iZzogaHNsKDAsIDAlLCA0JSk7XFxyXFxuJGNsci1idG46IGhzbCgyMzUsIDc1JSwgNTglKTtcXHJcXG4kY2xyLWJ0bi1ob3ZlcjogaHNsKDIzNSwgNzElLCAzOSUpO1xcclxcblxcclxcbi8vIE5ldXRyYWwgQ29sb3JzXFxyXFxuJGNsci13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXHJcXG4kY2xyLWdyYXk6IGhzbCgwLCAwJSwgNjUlKTtcXHJcXG4kY2xyLWdyYXktZGFyazogaHNsKDAsIDAlLCAzMyUpO1xcclxcbiRjbHItYmxhY2s6IGhzbCgwLCAwJSwgMCUpO1xcclxcblwiLFwiKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmltZyxcXHJcXG5waWN0dXJlLFxcclxcbnN2ZyB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCJjb2xvcnNcXFwiIGFzICo7XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS4xO1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMiB7XFxyXFxuXFx0Zm9udC1zaXplOiByZW0oNjApO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuMztcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcblxcdGZvbnQtc2l6ZTogcmVtKDIyKTtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6dmlzaXRlZCxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzY4KSkge1xcclxcblxcdGgxLFxcclxcblxcdGgyIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IHJlbSg1MCk7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcclxcblxcdGgxLFxcclxcblxcdGgyIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IHJlbSgzMik7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuXFx0bWF4LXdpZHRoOiByZW0oMTU5MCk7XFxyXFxuXFx0bWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcblxcdHBhZGRpbmc6IHJlbSg0OCkgMDtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNsci1ncmF5LWRhcms7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXItbGF5b3V0IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogcmVtKDQ4KTtcXHJcXG5cXHJcXG5cXHRhIHtcXHJcXG5cXHRcXHRjb2xvcjogJGNsci1ncmF5O1xcclxcblxcdFxcdHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGE6aG92ZXIge1xcclxcblxcdFxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuYWN0aXZlLW5hdiB7XFxyXFxuXFx0XFx0Y29sb3I6ICRjbHItd2hpdGU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4jbW9iaWxlLW5hdi1idG4ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0d2lkdGg6IHJlbSg0MCk7XFxyXFxuXFx0aGVpZ2h0OiByZW0oNTApO1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiByZW0oOCk7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuXFx0Lm1vYmlsZS1saW5lIHtcXHJcXG5cXHRcXHRoZWlnaHQ6IHJlbSg0KTtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWdyYXk7XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogcmVtKDEwKTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNjIwKSkge1xcclxcblxcdGhlYWRlciB7XFxyXFxuXFx0XFx0cGFkZGluZzogcmVtKDQ4KTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg5MTApKSB7XFxyXFxuXFx0I2Rlc2t0b3AtbmF2LWN0biB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I21vYmlsZS1uYXYtYnRuIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXHJcXG5cXHRoZWFkZXIge1xcclxcblxcdFxcdHBhZGRpbmc6IHJlbSgyNCk7XFxyXFxuXFxyXFxuXFx0XFx0aW1nIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSgyNDApO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgzNTApKSB7XFxyXFxuXFx0aGVhZGVyIHtcXHJcXG5cXHRcXHRpbWcge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDE2MCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcblxcclxcbiNob21lIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0cGFkZGluZzogcmVtKDIwMCkgMDtcXHJcXG5cXHRnYXA6IHJlbSgyMDApO1xcclxcblxcdG1heC13aWR0aDogcmVtKDEyMDYpO1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuXFx0I3dlbGNvbWUge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRnYXA6IHJlbSgxMjApO1xcclxcblxcclxcblxcdFxcdGRpdiB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDYwJTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0cCB7XFxyXFxuXFx0XFx0XFx0cGFkZGluZy10b3A6IHJlbSgyNCk7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdGltZyB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDQwJTtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSgzMDApO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I2hlYWRlci1sb2NhdGlvbiB7XFxyXFxuXFx0XFx0Y29sb3I6ICRjbHItZ3JheTtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjcHJvamVjdHMge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRtYXgtd2lkdGg6IHJlbSg3OTUpO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGdhcDogcmVtKDEyMCk7XFxyXFxuXFxyXFxuXFx0XFx0I3Byb2plY3RzLW9uZS1saW5lciB7XFxyXFxuXFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnByb2plY3QtY3RuIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0Z2FwOiByZW0oNDApO1xcclxcblxcclxcblxcdFxcdC5wcm9qZWN0LWhlYWRpbmcge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuXFx0XFx0XFx0cCB7XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oODApO1xcclxcblxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I2Fib3V0LW1lLFxcclxcblxcdCNza2lsbHMtY3RuIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0Z2FwOiByZW0oODApO1xcclxcblxcclxcblxcdFxcdGgyIHtcXHJcXG5cXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjYWJvdXQtbWUge1xcclxcblxcdFxcdG1heC13aWR0aDogcmVtKDY1Nyk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNza2lsbHMtY3RuIHtcXHJcXG5cXHRcXHRtYXgtd2lkdGg6IHJlbSg5OTEpO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcclxcblxcdFxcdCNza2lsbHMtbGlzdCB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0Z2FwOiByZW0oNjQpIDA7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5za2lsbCB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0Z2FwOiByZW0oMjQpO1xcclxcblxcdFxcdFxcdHdpZHRoOiAyMCU7XFxyXFxuXFxyXFxuXFx0XFx0XFx0aDMge1xcclxcblxcdFxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5za2lsbC1pbWctY3RuIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiByZW0oMTA0KTtcXHJcXG5cXHRcXHRcXHR3aWR0aDogcmVtKDEwNCk7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgJGNsci1ncmF5O1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHJlbSgxMDApO1xcclxcblxcclxcblxcdFxcdFxcdGltZyB7XFxyXFxuXFx0XFx0XFx0XFx0bWF4LWhlaWdodDogcmVtKDQwKTtcXHJcXG5cXHRcXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSg0MCk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxMDI0KSkge1xcclxcblxcdCNob21lIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSByZW0oNDgpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDc2OCkpIHtcXHJcXG5cXHRib2R5IHtcXHJcXG5cXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNob21lIHtcXHJcXG5cXHRcXHQjd2VsY29tZSB7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRnYXA6IHJlbSg0MCk7XFxyXFxuXFxyXFxuXFx0XFx0XFx0ZGl2LFxcclxcblxcdFxcdFxcdGltZyB7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQucHJvamVjdC1jdG4ge1xcclxcblxcdFxcdFxcdGdhcDogcmVtKDMyKTtcXHJcXG5cXHJcXG5cXHRcXHRcXHQucHJvamVjdC1oZWFkaW5nIHtcXHJcXG5cXHRcXHRcXHRcXHRwIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSg2MCk7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0I3NraWxscy1jdG4ge1xcclxcblxcdFxcdFxcdC5za2lsbCB7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDMzJTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXHJcXG5cXHQjaG9tZSB7XFxyXFxuXFx0XFx0Z2FwOiByZW0oODApO1xcclxcblxcdFxcdHBhZGRpbmc6IHJlbSg4MCkgcmVtKDI0KTtcXHJcXG5cXHJcXG5cXHRcXHQjcHJvamVjdHMge1xcclxcblxcdFxcdFxcdGdhcDogcmVtKDQ4KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LnByb2plY3QtY3RuIHtcXHJcXG5cXHRcXHRcXHQucHJvamVjdC1oZWFkaW5nIHtcXHJcXG5cXHRcXHRcXHRcXHRwIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSg0MCk7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0I3NraWxscy1jdG4ge1xcclxcblxcdFxcdFxcdC5za2lsbCB7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDUwJTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCNhYm91dC1tZSxcXHJcXG5cXHRcXHQjc2tpbGxzLWN0biB7XFxyXFxuXFx0XFx0XFx0Z2FwOiByZW0oNDApO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgzMjApKSB7XFxyXFxuXFx0I2hvbWUge1xcclxcblxcdFxcdCNza2lsbHMtY3RuIHtcXHJcXG5cXHRcXHRcXHQuc2tpbGwge1xcclxcblxcdFxcdFxcdFxcdGgzIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSgxOCk7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuXFxyXFxuI2J0bi10b3Age1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRyaWdodDogcmVtKDUwKTtcXHJcXG5cXHRib3R0b206IHJlbSg1MCk7XFxyXFxuXFx0ei1pbmRleDogMztcXHJcXG59XFxyXFxuXFxyXFxuI2J0bi10b3A6aG92ZXIge1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXHJcXG5cXHQjYnRuLXRvcCB7XFxyXFxuXFx0XFx0cmlnaHQ6IHJlbSgyNSk7XFxyXFxuXFx0XFx0Ym90dG9tOiByZW0oMjUpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuXFx0Y29sb3I6ICRjbHItd2hpdGU7XFxyXFxuXFx0Zm9udC1zaXplOiByZW0oMjApO1xcclxcblxcdHBhZGRpbmc6IHJlbSgxMikgcmVtKDYwKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiByZW0oNTApO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItYnRuO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItYnRuLWhvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXJlc2V0IHtcXHJcXG5cXHRtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXHJcXG5cXHRidXR0b24ge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5cXHJcXG5mb290ZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogcmVtKDQ4KTtcXHJcXG5cXHRmb250LXNpemU6IHJlbSgzMik7XFxyXFxuXFx0aGVpZ2h0OiByZW0oMzEyKTtcXHJcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgJGNsci1ncmF5LWRhcms7XFxyXFxuXFxyXFxuXFx0ZGl2IHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGdhcDogcmVtKDQ4KTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0YSB7XFxyXFxuXFx0XFx0Y29sb3I6ICRjbHItd2hpdGU7XFxyXFxuXFx0XFx0dHJhbnNpdGlvbjogY29sb3IgMC4xcztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0YTpob3ZlciB7XFxyXFxuXFx0XFx0Y29sb3I6ICRjbHItZ3JheTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5cXHJcXG4ubWFpbi1iYW5uZXIge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuXFx0aDEge1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR0b3A6IDUwJTtcXHJcXG5cXHRcXHRsZWZ0OiA1MCU7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGltZyB7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcclxcblxcdC5tYWluLWJhbm5lciB7XFxyXFxuXFx0XFx0aDEge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDI0KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuXFxyXFxuI3Byb2plY3QtbGlzdCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdHBhZGRpbmc6IHJlbSgxMjApIDA7XFxyXFxuXFx0Z2FwOiByZW0oMjQwKTtcXHJcXG5cXHJcXG5cXHQucHJvamVjdCB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRnYXA6IHJlbSgzMCk7XFxyXFxuXFxyXFxuXFx0XFx0aW1nIHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogNTAlO1xcclxcblxcdFxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5wcm9qZWN0LWNvbnRlbnQge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdGdhcDogcmVtKDQ4KTtcXHJcXG5cXHRcXHR3aWR0aDogNTAlO1xcclxcblxcclxcblxcdFxcdHAge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDUyMCk7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNjIwKSkge1xcclxcblxcdCNwcm9qZWN0LWxpc3Qge1xcclxcblxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIHJlbSg0OCk7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTAyNCkpIHtcXHJcXG5cXHQjcHJvamVjdC1saXN0IHtcXHJcXG5cXHRcXHRnYXA6IHJlbSgxMjApO1xcclxcblxcclxcblxcdFxcdC5wcm9qZWN0LWNvbnRlbnQge1xcclxcblxcdFxcdFxcdGdhcDogcmVtKDI0KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzY4KSkge1xcclxcblxcdCNwcm9qZWN0LWxpc3Qge1xcclxcblxcdFxcdC5wcm9qZWN0IHtcXHJcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcblxcdFxcdFxcdGltZyB7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC5wcm9qZWN0LWNvbnRlbnQge1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcclxcblxcdFxcdFxcdFxcdHAge1xcclxcblxcdFxcdFxcdFxcdFxcdG1heC13aWR0aDogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQjY29mZmVlLXRpbWUtcHJvamVjdCB7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg0MjUpKSB7XFxyXFxuXFx0I3Byb2plY3QtbGlzdCB7XFxyXFxuXFx0XFx0Z2FwOiByZW0oODApO1xcclxcblxcdFxcdHBhZGRpbmc6IHJlbSg4MCkgcmVtKDI0KTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5cXHJcXG4jZXhwZXJpZW5jZS1wYWdlIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcblxcdGFzaWRlIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcclxcblxcdFxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRjbHItZ3JheS1kYXJrO1xcclxcblxcdFxcdHdpZHRoOiAyNSU7XFxyXFxuXFxyXFxuXFx0XFx0dWwge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogc3RpY2t5O1xcclxcblxcdFxcdFxcdHRvcDogcmVtKDgwKTtcXHJcXG5cXHRcXHRcXHRnYXA6IHJlbSgyNCk7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdGg0IHtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0c2VjdGlvbiB7XFxyXFxuXFx0XFx0cGFkZGluZzogcmVtKDEyMCkgMCByZW0oMTIwKSByZW0oODApO1xcclxcblxcdFxcdHdpZHRoOiA3NSU7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdGdhcDogcmVtKDEyMCk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5leHBlcmllbmNlLWNvbnRlbnQge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXHJcXG5cXHJcXG5cXHRcXHR1bCB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdGdhcDogcmVtKDgpO1xcclxcblxcdFxcdFxcdGxpc3Qtc3R5bGU6IGRpc2M7XFxyXFxuXFx0XFx0XFx0bGlzdC1zdHlsZS1wb3NpdGlvbjogb3V0c2lkZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmRhdGVzIHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgyMCk7XFxyXFxuXFx0XFx0XFx0Zm9udC1zdHlsZTogaXRhbGljO1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQudGl0bGUge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDQwKTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdFxcdFxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0cCB7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMjApO1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogcmVtKDI0KTtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tdG9wOiByZW0oOCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDE2MjApKSB7XFxyXFxuXFx0I2V4cGVyaWVuY2UtcGFnZSB7XFxyXFxuXFx0XFx0YXNpZGUsXFxyXFxuXFx0XFx0c2VjdGlvbiB7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogcmVtKDEyMCkgcmVtKDQ4KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTAyNCkpIHtcXHJcXG5cXHQjZXhwZXJpZW5jZS1wYWdlIHtcXHJcXG5cXHRcXHQuZXhwZXJpZW5jZS1jb250ZW50IHtcXHJcXG5cXHRcXHRcXHQuZGF0ZXMge1xcclxcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0LnRpdGxlIHtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSgyNCk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg3NjgpKSB7XFxyXFxuXFx0I2V4cGVyaWVuY2UtcGFnZSB7XFxyXFxuXFx0XFx0YXNpZGUge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdHNlY3Rpb24ge1xcclxcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg0MjUpKSB7XFxyXFxuXFx0I2V4cGVyaWVuY2UtcGFnZSB7XFxyXFxuXFx0XFx0cGFkZGluZzogMCByZW0oMjQpO1xcclxcblxcclxcblxcdFxcdHNlY3Rpb24ge1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IHJlbSg4MCkgMDtcXHJcXG5cXHRcXHRcXHRnYXA6IHJlbSg4MCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcblxcclxcbiNhYm91dC1jb250ZW50IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdHBhZGRpbmc6IHJlbSgxMjApIDA7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiByZW0oNDgpO1xcclxcblxcclxcblxcdGltZyB7XFxyXFxuXFx0XFx0d2lkdGg6IDUwJTtcXHJcXG5cXHRcXHRtYXgtd2lkdGg6IHJlbSg3OTUpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDE2MjApKSB7XFxyXFxuXFx0I2Fib3V0LWNvbnRlbnQge1xcclxcblxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIHJlbSg0OCk7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTAyNCkpIHtcXHJcXG5cXHRwIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzY4KSkge1xcclxcblxcdCNhYm91dC1jb250ZW50IHtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcblxcdFxcdGltZyB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDc2OCkpIHtcXHJcXG5cXHQjYWJvdXQtY29udGVudCB7XFxyXFxuXFx0XFx0cGFkZGluZzogcmVtKDgwKSByZW0oMjQpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcblxcclxcbi5wcm9qZWN0LXBhZ2Uge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuXFx0YXNpZGUge1xcclxcblxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIDA7XFxyXFxuXFx0XFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGNsci1ncmF5LWRhcms7XFxyXFxuXFx0XFx0d2lkdGg6IDI1JTtcXHJcXG5cXHJcXG5cXHRcXHR1bCB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuXFx0XFx0XFx0dG9wOiByZW0oODApO1xcclxcblxcdFxcdFxcdGdhcDogcmVtKDI0KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdHNlY3Rpb24ge1xcclxcblxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIDA7XFxyXFxuXFx0XFx0d2lkdGg6IDc1JTtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0Z2FwOiByZW0oMTIwKTtcXHJcXG5cXHJcXG5cXHRcXHQucHJvamVjdC1zZWN0aW9uIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0XFx0Z2FwOiByZW0oNDgpO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdGgyIHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSg0MCk7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0cCB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oNzk1KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0aW1nIHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0XFx0XFx0bWF4LWhlaWdodDogcmVtKDQ1MCk7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oODAwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vIHRoaXMgaXMgZm9yIHRoZSBwb3J0Zm9saW8gcHJvamVjdFxcclxcblxcdCN2ZXJzaW9uLW9uZSB7XFxyXFxuXFx0XFx0aW1nIHtcXHJcXG5cXHRcXHRcXHRtYXgtaGVpZ2h0OiByZW0oNzAwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTYyMCkpIHtcXHJcXG5cXHQucHJvamVjdC1wYWdlIHtcXHJcXG5cXHRcXHRhc2lkZSxcXHJcXG5cXHRcXHRzZWN0aW9uIHtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiByZW0oMTIwKSByZW0oNDgpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg3NjgpKSB7XFxyXFxuXFx0LnByb2plY3QtcGFnZSB7XFxyXFxuXFx0XFx0YXNpZGUge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdHNlY3Rpb24ge1xcclxcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg0MjUpKSB7XFxyXFxuXFx0LnByb2plY3QtcGFnZSB7XFxyXFxuXFx0XFx0c2VjdGlvbiB7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogcmVtKDgwKSByZW0oMjQpO1xcclxcblxcdFxcdFxcdGdhcDogcmVtKDgwKTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRoMiB7XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMjQpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQucHJvamVjdC1zZWN0aW9uIHtcXHJcXG5cXHRcXHRcXHRcXHRnYXA6IHJlbSgyNCk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5cXHJcXG4ubW9iaWxlLW5hdiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcclxcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0ei1pbmRleDogMTA7XFxyXFxuXFxyXFxuXFx0Lm1vYmlsZS1uYXYtYmcge1xcclxcblxcdFxcdHdpZHRoOiAwJTtcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiB3aWR0aCAwLjJzIGVhc2UtaW47XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1iZztcXHJcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuYWN0aXZlLWN0biB7XFxyXFxuXFx0XFx0d2lkdGg6IDgwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm5hdi1saW5rcyB7XFxyXFxuXFx0XFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I2J0bi1jdG4ge1xcclxcblxcdFxcdHdpZHRoOiAyMCU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGJ1dHRvbiB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZDogbm9uZTtcXHJcXG5cXHRcXHRjb2xvcjogJGNsci1ibGFjaztcXHJcXG5cXHRcXHRmb250LXNpemU6IHJlbSgzMik7XFxyXFxuXFx0XFx0cGFkZGluZy1sZWZ0OiByZW0oMTYpO1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHR0b3A6IHJlbSgxNik7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNtb2JpbGUtbmF2LWN0biB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdGdhcDogcmVtKDMyKTtcXHJcXG5cXHRcXHRmb250LXNpemU6IHJlbSgyMCk7XFxyXFxuXFx0XFx0cGFkZGluZzogcmVtKDMyKTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtYmcge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG5cXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcblxcdG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgeyB1cGRhdGVIZWFkZXJBY3RpdmVMaW5rLCByZW1vdmVIZWFkZXJTdHlsZXMsIG1vYmlsZU5hdkluaXQgfTtcclxuXHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpbmtzXCIpO1xyXG5jb25zdCBtb2JpbGVOYXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1uYXYtYnRuXCIpO1xyXG5jb25zdCBtb2JpbGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1uYXZcIik7XHJcbmNvbnN0IG1vYmlsZU5hdkV4aXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1uYXYtZXhpdFwiKTtcclxuY29uc3QgbW9iaWxlTmF2Q3RuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbmF2LWJnXCIpO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlSGVhZGVyQWN0aXZlTGluaygpIHtcclxuXHRuYXYuZm9yRWFjaCgobGluaykgPT4ge1xyXG5cdFx0bGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHR1cGRhdGVIZWFkZXJTdHlsZXMobGluayk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlSGVhZGVyU3R5bGVzKGxpbmspIHtcclxuXHRyZW1vdmVIZWFkZXJTdHlsZXMoKTtcclxuXHRhZGRIZWFkZXJTdHlsZXMobGluayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUhlYWRlclN0eWxlcygpIHtcclxuXHRuYXYuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuXHRcdGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtbmF2XCIpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRIZWFkZXJTdHlsZXMobGluaykge1xyXG5cdGxpbmsuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1uYXZcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vYmlsZU5hdkluaXQoKSB7XHJcblx0bW9iaWxlTmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRtb2JpbGVOYXYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1iZ1wiKTtcclxuXHRcdG1vYmlsZU5hdkN0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWN0blwiKTtcclxuXHR9KTtcclxuXHJcblx0bW9iaWxlTmF2RXhpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0bW9iaWxlTmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtYmdcIik7XHJcblx0XHRtb2JpbGVOYXZDdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1jdG5cIik7XHJcblx0fSk7XHJcbn1cclxuIiwiZXhwb3J0IHsgc2Nyb2xsVG9Ub3AgfTtcclxuXHJcbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXRvcFwiKTtcclxuXHJcbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2Nyb2xsVG9Ub3ApO1xyXG5cclxuZnVuY3Rpb24gc2Nyb2xsVG9Ub3AoKSB7XHJcblx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xyXG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xyXG59XHJcbiIsImV4cG9ydCB7IGluaXQgfTtcclxuaW1wb3J0IHsgdXBkYXRlSGVhZGVyQWN0aXZlTGluaywgbW9iaWxlTmF2SW5pdCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCB7IHNjcm9sbFRvVG9wIH0gZnJvbSBcIi4vY29tcG9uZW50cy90b1RvcEJ0blwiO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuXHR1cGRhdGVIZWFkZXJBY3RpdmVMaW5rKCk7XHJcblx0c2Nyb2xsVG9Ub3AoKTtcclxuXHRtb2JpbGVOYXZJbml0KCk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaW5pdCB9IGZyb20gXCIuLi9pbml0LmpzXCI7XHJcbmltcG9ydCB7IHJlbW92ZUhlYWRlclN0eWxlcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlci5qc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9zY3NzL3N0eWxlcy5zY3NzXCI7XHJcblxyXG5pbml0KCk7XHJcbnJlbW92ZUhlYWRlclN0eWxlcygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=