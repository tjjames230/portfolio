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
}

body {
  font-family: "Inter", sans-serf;
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
@media screen and (max-width: 48rem) {
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
@media screen and (max-width: 20rem) {
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
  padding: 7.5rem 0;
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
#mobile-nav {
  display: none;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  background: hsla(0, 0%, 100%, 0);
  transition: background 3s ease-in;
  position: fixed;
  z-index: 10;
}
#mobile-nav #mobile-nav-bg {
  width: 75%;
  background-color: hsl(0, 0%, 4%);
}
#mobile-nav #btn-ctn {
  width: 25%;
  text-align: center;
}
#mobile-nav button {
  background: none;
  color: hsl(0, 0%, 0%);
  font-size: 2.5rem;
  padding: 0;
  position: relative;
  top: 1.5rem;
}
#mobile-nav #mobile-nav-ctn {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.25rem;
  padding: 2rem;
}

.mobile-nav-end {
  background: hsla(0, 0%, 100%, 0.9);
}`, "",{"version":3,"sources":["webpack://./src/scss/globals/_general.scss","webpack://./src/scss/styles.scss","webpack://./src/scss/globals/_fonts.scss","webpack://./src/scss/globals/_colors.scss","webpack://./src/scss/globals/_reset.scss","webpack://./src/scss/globals/_typography.scss","webpack://./src/scss/globals/_container.scss","webpack://./src/scss/components/_header.scss","webpack://./src/scss/components/_mainHome.scss","webpack://./src/scss/components/_toTopBtn.scss","webpack://./src/scss/components/_buttons.scss","webpack://./src/scss/components/_footer.scss","webpack://./src/scss/components/_mainBanner.scss","webpack://./src/scss/components/_portfolioPage.scss","webpack://./src/scss/components/_experiencePage.scss","webpack://./src/scss/components/_aboutPage.scss","webpack://./src/scss/components/_projectPages.scss","webpack://./src/scss/components/_mobileNav.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"../utilities/\" as *;\n@use \"colors\" as *;\n@use \"fonts\" as *;\n\nhtml {\n\tfont-size: 100%;\n\t//scroll-behavior: smooth;\n}\n\nbody {\n\tfont-family: $font-primary;\n\tfont-size: rem(18);\n\tcolor: $clr-white;\n\tbackground-color: $clr-bg;\n\tline-height: 1.5;\n}\n","html {\n  font-size: 100%;\n}\n\nbody {\n  font-family: \"Inter\", sans-serf;\n  font-size: 1.125rem;\n  color: hsl(0, 0%, 100%);\n  background-color: hsl(0, 0%, 4%);\n  line-height: 1.5;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n  line-height: 1.1;\n}\n\nh1,\nh2 {\n  font-size: 3.75rem;\n  font-weight: 700;\n  line-height: 1.3;\n}\n\nh3 {\n  font-size: 1.375rem;\n  font-weight: 700;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\n@media screen and (max-width: 48rem) {\n  h1,\n  h2 {\n    font-size: 3.125rem;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  h1,\n  h2 {\n    font-size: 2rem;\n  }\n}\n.container {\n  max-width: 99.375rem;\n  margin: 0 auto;\n}\n\nheader {\n  padding: 3rem 0;\n  border-bottom: 1px solid hsl(0, 0%, 33%);\n}\n\n#header-layout {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nul {\n  list-style: none;\n  display: flex;\n  gap: 3rem;\n}\nul a {\n  color: hsl(0, 0%, 65%);\n  transition: color 0.1s;\n}\nul a:hover {\n  color: hsl(0, 0%, 100%);\n}\nul .active-nav {\n  color: hsl(0, 0%, 100%);\n}\n\n#mobile-nav-btn {\n  display: none;\n  width: 2.5rem;\n  height: 3.125rem;\n  flex-direction: column;\n  gap: 0.5rem;\n  justify-content: center;\n}\n#mobile-nav-btn .mobile-line {\n  height: 0.25rem;\n  width: 100%;\n  background-color: hsl(0, 0%, 65%);\n  border-radius: 0.625rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  header {\n    padding: 3rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #desktop-nav-ctn {\n    display: none;\n  }\n  #mobile-nav-btn {\n    display: flex;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  header {\n    padding: 1.5rem;\n  }\n  header img {\n    max-width: 15rem;\n  }\n}\n@media screen and (max-width: 20rem) {\n  header img {\n    max-width: 10rem;\n  }\n}\n#home {\n  display: flex;\n  flex-direction: column;\n  padding: 12.5rem 0;\n  gap: 12.5rem;\n  max-width: 75.375rem;\n  margin: 0 auto;\n  align-items: center;\n}\n#home #welcome {\n  display: flex;\n  align-items: center;\n  gap: 7.5rem;\n}\n#home #welcome div {\n  width: 60%;\n}\n#home #welcome p {\n  padding-top: 1.5rem;\n}\n#home #welcome img {\n  width: 40%;\n  max-width: 18.75rem;\n}\n#home #header-location {\n  color: hsl(0, 0%, 65%);\n  font-weight: 300;\n}\n#home #projects {\n  display: flex;\n  flex-direction: column;\n  max-width: 49.6875rem;\n  width: 100%;\n  gap: 7.5rem;\n}\n#home #projects #projects-one-liner {\n  text-align: center;\n}\n#home .project-ctn {\n  display: flex;\n  flex-direction: column;\n  gap: 2.5rem;\n}\n#home .project-ctn .project-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#home .project-ctn .project-heading p {\n  font-size: 5rem;\n  font-weight: 100;\n}\n#home #about-me,\n#home #skills-ctn {\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n}\n#home #about-me h2,\n#home #skills-ctn h2 {\n  text-align: center;\n}\n#home #about-me {\n  max-width: 41.0625rem;\n}\n#home #skills-ctn {\n  max-width: 61.9375rem;\n  width: 100%;\n}\n#home #skills-ctn #skills-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 4rem 0;\n}\n#home #skills-ctn .skill {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n  width: 20%;\n}\n#home #skills-ctn .skill h3 {\n  text-align: center;\n}\n#home #skills-ctn .skill-img-ctn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 6.5rem;\n  width: 6.5rem;\n  border: 1px solid hsl(0, 0%, 65%);\n  border-radius: 6.25rem;\n}\n#home #skills-ctn .skill-img-ctn img {\n  max-height: 2.5rem;\n  max-width: 2.5rem;\n}\n\n@media screen and (max-width: 64rem) {\n  #home {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  body {\n    font-size: 1rem;\n  }\n  #home #welcome {\n    flex-direction: column;\n    gap: 2.5rem;\n  }\n  #home #welcome div,\n  #home #welcome img {\n    width: 100%;\n  }\n  #home .project-ctn {\n    gap: 2rem;\n  }\n  #home .project-ctn .project-heading p {\n    font-size: 3.75rem;\n  }\n  #home #skills-ctn .skill {\n    width: 33%;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #home {\n    gap: 5rem;\n    padding: 5rem 1.5rem;\n  }\n  #home #projects {\n    gap: 3rem;\n  }\n  #home .project-ctn .project-heading p {\n    font-size: 2.5rem;\n  }\n  #home #skills-ctn .skill {\n    width: 50%;\n  }\n  #home #about-me,\n  #home #skills-ctn {\n    gap: 2.5rem;\n  }\n}\n@media screen and (max-width: 20rem) {\n  #home #skills-ctn .skill h3 {\n    font-size: 1.125rem;\n  }\n}\n#btn-top {\n  position: fixed;\n  right: 3.125rem;\n  bottom: 3.125rem;\n  z-index: 3;\n}\n\n#btn-top:hover {\n  cursor: pointer;\n}\n\n@media screen and (max-width: 26.5625rem) {\n  #btn-top {\n    right: 1.5625rem;\n    bottom: 1.5625rem;\n  }\n}\nbutton {\n  color: hsl(0, 0%, 100%);\n  font-size: 1.25rem;\n  padding: 0.75rem 3.75rem;\n  border-radius: 3.125rem;\n  background-color: hsl(235, 75%, 58%);\n  border: none;\n  transition: background-color 0.1s;\n}\n\nbutton:hover {\n  cursor: pointer;\n  background-color: hsl(235, 71%, 39%);\n}\n\n.btn-reset {\n  margin: 0 auto;\n}\n\n@media screen and (max-width: 26.5625rem) {\n  button {\n    font-size: 1rem;\n  }\n}\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n  font-size: 2rem;\n  height: 19.5rem;\n  border-top: 1px solid hsl(0, 0%, 33%);\n}\nfooter div {\n  display: flex;\n  gap: 3rem;\n}\nfooter a {\n  color: hsl(0, 0%, 100%);\n  transition: color 0.1s;\n}\nfooter a:hover {\n  color: hsl(0, 0%, 65%);\n}\n\n.main-banner {\n  position: relative;\n  text-align: center;\n}\n.main-banner h1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main-banner img {\n  width: 100%;\n}\n\n@media screen and (max-width: 26.5625rem) {\n  .main-banner h1 {\n    font-size: 1.5rem;\n  }\n}\n#project-list {\n  display: flex;\n  flex-direction: column;\n  padding: 7.5rem 0;\n  gap: 15rem;\n}\n#project-list .project {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1.875rem;\n}\n#project-list .project img {\n  width: 50%;\n  height: 100%;\n}\n#project-list .project-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3rem;\n  width: 50%;\n}\n#project-list .project-content p {\n  max-width: 32.5rem;\n  font-size: 1rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  #project-list {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 64rem) {\n  #project-list {\n    gap: 7.5rem;\n  }\n  #project-list .project-content {\n    gap: 1.5rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #project-list .project {\n    flex-direction: column;\n  }\n  #project-list .project img {\n    width: 100%;\n  }\n  #project-list .project .project-content {\n    width: 100%;\n  }\n  #project-list .project .project-content p {\n    max-width: none;\n  }\n  #project-list #coffee-time-project {\n    flex-direction: column-reverse;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #project-list {\n    gap: 5rem;\n    padding: 5rem 1.5rem;\n  }\n}\n#experience-page {\n  display: flex;\n}\n#experience-page aside {\n  padding: 7.5rem 0;\n  border-right: 1px solid hsl(0, 0%, 33%);\n  width: 25%;\n}\n#experience-page aside ul {\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 5rem;\n  gap: 1.5rem;\n}\n#experience-page aside h4 {\n  font-weight: 700;\n}\n#experience-page section {\n  padding: 7.5rem 0;\n  width: 75%;\n  display: flex;\n  flex-direction: column;\n  gap: 7.5rem;\n}\n#experience-page .experience-content {\n  font-size: 1rem;\n}\n#experience-page .experience-content ul {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  list-style: disc;\n  list-style-position: outside;\n}\n#experience-page .experience-content .dates {\n  font-size: 1.25rem;\n  font-style: italic;\n  font-weight: 400;\n  display: inline-block;\n}\n#experience-page .experience-content .title {\n  font-size: 2.5rem;\n  font-weight: 300;\n  font-style: normal;\n}\n#experience-page .experience-content p {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin-bottom: 1.5rem;\n  margin-top: 0.5rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  #experience-page aside,\n  #experience-page section {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 64rem) {\n  #experience-page .experience-content .dates {\n    font-size: 1rem;\n  }\n  #experience-page .experience-content .title {\n    font-size: 1.5rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #experience-page aside {\n    display: none;\n  }\n  #experience-page section {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #experience-page {\n    padding: 0 1.5rem;\n  }\n  #experience-page section {\n    padding: 5rem 0;\n    gap: 5rem;\n  }\n}\n#about-content {\n  display: flex;\n  padding: 7.5rem 0;\n  justify-content: space-between;\n  align-items: center;\n  gap: 3rem;\n}\n#about-content img {\n  width: 50%;\n  max-width: 49.6875rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  #about-content {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 64rem) {\n  p {\n    font-size: 1rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #about-content {\n    flex-direction: column;\n  }\n  #about-content img {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #about-content {\n    padding: 5rem 1.5rem;\n  }\n}\n.project-page {\n  display: flex;\n}\n.project-page aside {\n  padding: 7.5rem 0;\n  border-right: 1px solid hsl(0, 0%, 33%);\n  width: 25%;\n}\n.project-page aside ul {\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 5rem;\n  gap: 1.5rem;\n}\n.project-page section {\n  padding: 7.5rem 0;\n  width: 75%;\n  display: flex;\n  flex-direction: column;\n  gap: 7.5rem;\n}\n.project-page section .project-section {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n  align-items: center;\n}\n.project-page section h2 {\n  font-size: 2.5rem;\n  font-weight: 300;\n}\n.project-page section p {\n  max-width: 49.6875rem;\n}\n.project-page section img {\n  width: 100%;\n  height: auto;\n  max-height: 28.125rem;\n  max-width: 50rem;\n}\n.project-page #version-one img {\n  max-height: 43.75rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  .project-page aside,\n  .project-page section {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  .project-page aside {\n    display: none;\n  }\n  .project-page section {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  .project-page section {\n    padding: 5rem 1.5rem;\n    gap: 5rem;\n  }\n  .project-page section h2 {\n    font-size: 1.5rem;\n  }\n  .project-page section .project-section {\n    gap: 1.5rem;\n  }\n}\n#mobile-nav {\n  display: none;\n  height: 100%;\n  width: 100%;\n  justify-content: space-between;\n  background: hsla(0, 0%, 100%, 0);\n  transition: background 3s ease-in;\n  position: fixed;\n  z-index: 10;\n}\n#mobile-nav #mobile-nav-bg {\n  width: 75%;\n  background-color: hsl(0, 0%, 4%);\n}\n#mobile-nav #btn-ctn {\n  width: 25%;\n  text-align: center;\n}\n#mobile-nav button {\n  background: none;\n  color: hsl(0, 0%, 0%);\n  font-size: 2.5rem;\n  padding: 0;\n  position: relative;\n  top: 1.5rem;\n}\n#mobile-nav #mobile-nav-ctn {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  font-size: 1.25rem;\n  padding: 2rem;\n}\n\n.mobile-nav-end {\n  background: hsla(0, 0%, 100%, 0.9);\n}","$font-primary: \"Inter\", sans-serf;\n","// Primary Colors\n$clr-bg: hsl(0, 0%, 4%);\n$clr-btn: hsl(235, 75%, 58%);\n$clr-btn-hover: hsl(235, 71%, 39%);\n\n// Neutral Colors\n$clr-white: hsl(0, 0%, 100%);\n$clr-white-transparent-end: hsla(0, 0%, 100%, 0.9);\n$clr-white-transparent-start: hsla(0, 0%, 100%, 0);\n$clr-gray: hsl(0, 0%, 65%);\n$clr-gray-dark: hsl(0, 0%, 33%);\n$clr-black: hsl(0, 0%, 0%);\n","*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont: inherit;\n}\n\nimg,\npicture,\nsvg {\n\tdisplay: block;\n}\n","@use \"../utilities/\" as *;\n@use \"colors\" as *;\n\nh1,\nh2,\nh3 {\n\tmargin: 0;\n\tline-height: 1.1;\n}\n\nh1,\nh2 {\n\tfont-size: rem(60);\n\tfont-weight: 700;\n\tline-height: 1.3;\n}\n\nh3 {\n\tfont-size: rem(22);\n\tfont-weight: 700;\n}\n\na,\na:visited,\na:active {\n\ttext-decoration: none;\n}\n\n@media screen and (max-width: rem(768)) {\n\th1,\n\th2 {\n\t\tfont-size: rem(50);\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\th1,\n\th2 {\n\t\tfont-size: rem(32);\n\t}\n}\n","@use \"../utilities/\" as *;\n\n.container {\n\tmax-width: rem(1590);\n\tmargin: 0 auto;\n}\n","@use \"../utilities/\" as *;\n@use \"../globals/\" as *;\n\nheader {\n\tpadding: rem(48) 0;\n\tborder-bottom: 1px solid $clr-gray-dark;\n}\n\n#header-layout {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\nul {\n\tlist-style: none;\n\tdisplay: flex;\n\tgap: rem(48);\n\n\ta {\n\t\tcolor: $clr-gray;\n\t\ttransition: color 0.1s;\n\t}\n\n\ta:hover {\n\t\tcolor: $clr-white;\n\t}\n\n\t.active-nav {\n\t\tcolor: $clr-white;\n\t}\n}\n\n#mobile-nav-btn {\n\tdisplay: none;\n\twidth: rem(40);\n\theight: rem(50);\n\tflex-direction: column;\n\tgap: rem(8);\n\tjustify-content: center;\n\n\t.mobile-line {\n\t\theight: rem(4);\n\t\twidth: 100%;\n\t\tbackground-color: $clr-gray;\n\t\tborder-radius: rem(10);\n\t}\n}\n\n@media screen and (max-width: rem(1620)) {\n\theader {\n\t\tpadding: rem(48);\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t#desktop-nav-ctn {\n\t\tdisplay: none;\n\t}\n\n\t#mobile-nav-btn {\n\t\tdisplay: flex;\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\theader {\n\t\tpadding: rem(24);\n\n\t\timg {\n\t\t\tmax-width: rem(240);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(320)) {\n\theader {\n\t\timg {\n\t\t\tmax-width: rem(160);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#home {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: rem(200) 0;\n\tgap: rem(200);\n\tmax-width: rem(1206);\n\tmargin: 0 auto;\n\talign-items: center;\n\n\t#welcome {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: rem(120);\n\n\t\tdiv {\n\t\t\twidth: 60%;\n\t\t}\n\n\t\tp {\n\t\t\tpadding-top: rem(24);\n\t\t}\n\n\t\timg {\n\t\t\twidth: 40%;\n\t\t\tmax-width: rem(300);\n\t\t}\n\t}\n\n\t#header-location {\n\t\tcolor: $clr-gray;\n\t\tfont-weight: 300;\n\t}\n\n\t#projects {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmax-width: rem(795);\n\t\twidth: 100%;\n\t\tgap: rem(120);\n\n\t\t#projects-one-liner {\n\t\t\ttext-align: center;\n\t\t}\n\t}\n\n\t.project-ctn {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(40);\n\n\t\t.project-heading {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\talign-items: center;\n\n\t\t\tp {\n\t\t\t\tfont-size: rem(80);\n\t\t\t\tfont-weight: 100;\n\t\t\t}\n\t\t}\n\t}\n\n\t#about-me,\n\t#skills-ctn {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(80);\n\n\t\th2 {\n\t\t\ttext-align: center;\n\t\t}\n\t}\n\n\t#about-me {\n\t\tmax-width: rem(657);\n\t}\n\n\t#skills-ctn {\n\t\tmax-width: rem(991);\n\t\twidth: 100%;\n\n\t\t#skills-list {\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tjustify-content: center;\n\t\t\tgap: rem(64) 0;\n\t\t}\n\n\t\t.skill {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-items: center;\n\t\t\tgap: rem(24);\n\t\t\twidth: 20%;\n\n\t\t\th3 {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t}\n\n\t\t.skill-img-ctn {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\theight: rem(104);\n\t\t\twidth: rem(104);\n\t\t\tborder: 1px solid $clr-gray;\n\t\t\tborder-radius: rem(100);\n\n\t\t\timg {\n\t\t\t\tmax-height: rem(40);\n\t\t\t\tmax-width: rem(40);\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1024)) {\n\t#home {\n\t\tpadding: rem(120) rem(48);\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\tbody {\n\t\tfont-size: rem(16);\n\t}\n\n\t#home {\n\t\t#welcome {\n\t\t\tflex-direction: column;\n\t\t\tgap: rem(40);\n\n\t\t\tdiv,\n\t\t\timg {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\n\t\t.project-ctn {\n\t\t\tgap: rem(32);\n\n\t\t\t.project-heading {\n\t\t\t\tp {\n\t\t\t\t\tfont-size: rem(60);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t#skills-ctn {\n\t\t\t.skill {\n\t\t\t\twidth: 33%;\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t#home {\n\t\tgap: rem(80);\n\t\tpadding: rem(80) rem(24);\n\n\t\t#projects {\n\t\t\tgap: rem(48);\n\t\t}\n\n\t\t.project-ctn {\n\t\t\t.project-heading {\n\t\t\t\tp {\n\t\t\t\t\tfont-size: rem(40);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t#skills-ctn {\n\t\t\t.skill {\n\t\t\t\twidth: 50%;\n\t\t\t}\n\t\t}\n\n\t\t#about-me,\n\t\t#skills-ctn {\n\t\t\tgap: rem(40);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(320)) {\n\t#home {\n\t\t#skills-ctn {\n\t\t\t.skill {\n\t\t\t\th3 {\n\t\t\t\t\tfont-size: rem(18);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#btn-top {\n\tposition: fixed;\n\tright: rem(50);\n\tbottom: rem(50);\n\tz-index: 3;\n}\n\n#btn-top:hover {\n\tcursor: pointer;\n}\n\n@media screen and (max-width: rem(425)) {\n\t#btn-top {\n\t\tright: rem(25);\n\t\tbottom: rem(25);\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\nbutton {\n\tcolor: $clr-white;\n\tfont-size: rem(20);\n\tpadding: rem(12) rem(60);\n\tborder-radius: rem(50);\n\tbackground-color: $clr-btn;\n\tborder: none;\n\ttransition: background-color 0.1s;\n}\n\nbutton:hover {\n\tcursor: pointer;\n\tbackground-color: $clr-btn-hover;\n}\n\n.btn-reset {\n\tmargin: 0 auto;\n}\n\n@media screen and (max-width: rem(425)) {\n\tbutton {\n\t\tfont-size: rem(16);\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\nfooter {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: rem(48);\n\tfont-size: rem(32);\n\theight: rem(312);\n\tborder-top: 1px solid $clr-gray-dark;\n\n\tdiv {\n\t\tdisplay: flex;\n\t\tgap: rem(48);\n\t}\n\n\ta {\n\t\tcolor: $clr-white;\n\t\ttransition: color 0.1s;\n\t}\n\n\ta:hover {\n\t\tcolor: $clr-gray;\n\t}\n}\n","@use \"../utilities/\" as *;\n\n.main-banner {\n\tposition: relative;\n\ttext-align: center;\n\n\th1 {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t}\n\n\timg {\n\t\twidth: 100%;\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t.main-banner {\n\t\th1 {\n\t\t\tfont-size: rem(24);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#project-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: rem(120) 0;\n\tgap: rem(240);\n\n\t.project {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tgap: rem(30);\n\n\t\timg {\n\t\t\twidth: 50%;\n\t\t\theight: 100%;\n\t\t}\n\t}\n\n\t.project-content {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tgap: rem(48);\n\t\twidth: 50%;\n\n\t\tp {\n\t\t\tmax-width: rem(520);\n\t\t\tfont-size: rem(16);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1620)) {\n\t#project-list {\n\t\tpadding: rem(120) rem(48);\n\t}\n}\n\n@media screen and (max-width: rem(1024)) {\n\t#project-list {\n\t\tgap: rem(120);\n\n\t\t.project-content {\n\t\t\tgap: rem(24);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t#project-list {\n\t\t.project {\n\t\t\tflex-direction: column;\n\n\t\t\timg {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\n\t\t\t.project-content {\n\t\t\t\twidth: 100%;\n\n\t\t\t\tp {\n\t\t\t\t\tmax-width: none;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t#coffee-time-project {\n\t\t\tflex-direction: column-reverse;\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t#project-list {\n\t\tgap: rem(80);\n\t\tpadding: rem(80) rem(24);\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#experience-page {\n\tdisplay: flex;\n\n\taside {\n\t\tpadding: rem(120) 0;\n\t\tborder-right: 1px solid $clr-gray-dark;\n\t\twidth: 25%;\n\n\t\tul {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tposition: sticky;\n\t\t\ttop: rem(80);\n\t\t\tgap: rem(24);\n\t\t}\n\n\t\th4 {\n\t\t\tfont-weight: 700;\n\t\t}\n\t}\n\n\tsection {\n\t\tpadding: rem(120) 0;\n\t\twidth: 75%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(120);\n\t}\n\n\t.experience-content {\n\t\tfont-size: rem(16);\n\n\t\tul {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: rem(8);\n\t\t\tlist-style: disc;\n\t\t\tlist-style-position: outside;\n\t\t}\n\n\t\t.dates {\n\t\t\tfont-size: rem(20);\n\t\t\tfont-style: italic;\n\t\t\tfont-weight: 400;\n\t\t\tdisplay: inline-block;\n\t\t}\n\n\t\t.title {\n\t\t\tfont-size: rem(40);\n\t\t\tfont-weight: 300;\n\t\t\tfont-style: normal;\n\t\t}\n\n\t\tp {\n\t\t\tfont-size: rem(20);\n\t\t\tfont-weight: 700;\n\t\t\tmargin-bottom: rem(24);\n\t\t\tmargin-top: rem(8);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1620)) {\n\t#experience-page {\n\t\taside,\n\t\tsection {\n\t\t\tpadding: rem(120) rem(48);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1024)) {\n\t#experience-page {\n\t\t.experience-content {\n\t\t\t.dates {\n\t\t\t\tfont-size: rem(16);\n\t\t\t}\n\n\t\t\t.title {\n\t\t\t\tfont-size: rem(24);\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t#experience-page {\n\t\taside {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\tsection {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t#experience-page {\n\t\tpadding: 0 rem(24);\n\n\t\tsection {\n\t\t\tpadding: rem(80) 0;\n\t\t\tgap: rem(80);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#about-content {\n\tdisplay: flex;\n\tpadding: rem(120) 0;\n\tjustify-content: space-between;\n\talign-items: center;\n\tgap: rem(48);\n\n\timg {\n\t\twidth: 50%;\n\t\tmax-width: rem(795);\n\t}\n}\n\n@media screen and (max-width: rem(1620)) {\n\t#about-content {\n\t\tpadding: rem(120) rem(48);\n\t}\n}\n\n@media screen and (max-width: rem(1024)) {\n\tp {\n\t\tfont-size: rem(16);\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t#about-content {\n\t\tflex-direction: column;\n\n\t\timg {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t#about-content {\n\t\tpadding: rem(80) rem(24);\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n.project-page {\n\tdisplay: flex;\n\n\taside {\n\t\tpadding: rem(120) 0;\n\t\tborder-right: 1px solid $clr-gray-dark;\n\t\twidth: 25%;\n\n\t\tul {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tposition: sticky;\n\t\t\ttop: rem(80);\n\t\t\tgap: rem(24);\n\t\t}\n\t}\n\n\tsection {\n\t\tpadding: rem(120) 0;\n\t\twidth: 75%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(120);\n\n\t\t.project-section {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: rem(48);\n\t\t\talign-items: center;\n\t\t}\n\n\t\th2 {\n\t\t\tfont-size: rem(40);\n\t\t\tfont-weight: 300;\n\t\t}\n\n\t\tp {\n\t\t\tmax-width: rem(795);\n\t\t}\n\n\t\timg {\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t\tmax-height: rem(450);\n\t\t\tmax-width: rem(800);\n\t\t}\n\t}\n\n\t// this is for the portfolio project\n\t#version-one {\n\t\timg {\n\t\t\tmax-height: rem(700);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1620)) {\n\t.project-page {\n\t\taside,\n\t\tsection {\n\t\t\tpadding: rem(120) rem(48);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t.project-page {\n\t\taside {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\tsection {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t.project-page {\n\t\tsection {\n\t\t\tpadding: rem(80) rem(24);\n\t\t\tgap: rem(80);\n\n\t\t\th2 {\n\t\t\t\tfont-size: rem(24);\n\t\t\t}\n\n\t\t\t.project-section {\n\t\t\t\tgap: rem(24);\n\t\t\t}\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#mobile-nav {\n\tdisplay: none;\n\theight: 100%;\n\twidth: 100%;\n\tjustify-content: space-between;\n\tbackground: $clr-white-transparent-start;\n\ttransition: background 3s ease-in;\n\tposition: fixed;\n\tz-index: 10;\n\n\t#mobile-nav-bg {\n\t\twidth: 75%;\n\t\tbackground-color: $clr-bg;\n\t}\n\n\t#btn-ctn {\n\t\twidth: 25%;\n\t\ttext-align: center;\n\t}\n\n\tbutton {\n\t\tbackground: none;\n\t\tcolor: $clr-black;\n\t\tfont-size: rem(40);\n\t\tpadding: 0;\n\t\tposition: relative;\n\t\ttop: rem(24);\n\t}\n\n\t#mobile-nav-ctn {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(32);\n\t\tfont-size: rem(20);\n\t\tpadding: rem(32);\n\t}\n}\n\n.mobile-nav-end {\n\tbackground: $clr-white-transparent-end;\n}\n"],"sourceRoot":""}]);
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
const mobileNavCtn = document.querySelector("#mobile-nav");
const mobileNavExit = document.querySelector("#mobile-nav-exit");

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
		mobileNavCtn.classList.toggle("mobile-nav-end");
		mobileNavCtn.style.display = "flex";
	});

	mobileNavExit.addEventListener("click", () => {
		mobileNavCtn.style.display = "none";
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
/*!******************************!*\
  !*** ./src/js/experience.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ "./src/js/init.js");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/styles.scss */ "./src/scss/styles.scss");



(0,_init_js__WEBPACK_IMPORTED_MODULE_0__.init)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZXJpZW5jZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyw4NEJBQTg0QixVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sUUFBUSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxRQUFRLFdBQVcsT0FBTyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksWUFBWSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE9BQU8sVUFBVSxXQUFXLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE9BQU8sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFFBQVEsTUFBTSxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFFBQVEsT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLFFBQVEsVUFBVSxVQUFVLFVBQVUsV0FBVyxX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LEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q3VCOztBQUV2Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUZ0I7QUFDNEQ7QUFDeEI7O0FBRXBEO0FBQ0EsQ0FBQywwRUFBc0I7QUFDdkIsQ0FBQyxpRUFBVztBQUNaLENBQUMsaUVBQWE7QUFDZDs7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQWlDO0FBQ0o7O0FBRTdCLDhDQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcz8zMjFmIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9qcy9jb21wb25lbnRzL3RvVG9wQnRuLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9qcy9pbml0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9qcy9leHBlcmllbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJmO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA0JSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmltZyxcbnBpY3R1cmUsXG5zdmcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDEsXG5oMixcbmgzIHtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuXG5oMSxcbmgyIHtcbiAgZm9udC1zaXplOiAzLjc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmEsXG5hOnZpc2l0ZWQsXG5hOmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgaDEsXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gIGgxLFxuICBoMiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5OS4zNzVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5oZWFkZXIge1xuICBwYWRkaW5nOiAzcmVtIDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XG59XG5cbiNoZWFkZXItbGF5b3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogM3JlbTtcbn1cbnVsIGEge1xuICBjb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xufVxudWwgYTpob3ZlciB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xufVxudWwgLmFjdGl2ZS1uYXYge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbn1cblxuI21vYmlsZS1uYXYtYnRuIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI21vYmlsZS1uYXYtYnRuIC5tb2JpbGUtbGluZSB7XG4gIGhlaWdodDogMC4yNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDNyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gICNkZXNrdG9wLW5hdi1jdG4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI21vYmlsZS1uYXYtYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gIGhlYWRlciB7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICB9XG4gIGhlYWRlciBpbWcge1xuICAgIG1heC13aWR0aDogMTVyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIwcmVtKSB7XG4gIGhlYWRlciBpbWcge1xuICAgIG1heC13aWR0aDogMTByZW07XG4gIH1cbn1cbiNob21lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTIuNXJlbSAwO1xuICBnYXA6IDEyLjVyZW07XG4gIG1heC13aWR0aDogNzUuMzc1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNob21lICN3ZWxjb21lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3LjVyZW07XG59XG4jaG9tZSAjd2VsY29tZSBkaXYge1xuICB3aWR0aDogNjAlO1xufVxuI2hvbWUgI3dlbGNvbWUgcCB7XG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XG59XG4jaG9tZSAjd2VsY29tZSBpbWcge1xuICB3aWR0aDogNDAlO1xuICBtYXgtd2lkdGg6IDE4Ljc1cmVtO1xufVxuI2hvbWUgI2hlYWRlci1sb2NhdGlvbiB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4jaG9tZSAjcHJvamVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDQ5LjY4NzVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6IDcuNXJlbTtcbn1cbiNob21lICNwcm9qZWN0cyAjcHJvamVjdHMtb25lLWxpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2hvbWUgLnByb2plY3QtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyLjVyZW07XG59XG4jaG9tZSAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNob21lIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHAge1xuICBmb250LXNpemU6IDVyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4jaG9tZSAjYWJvdXQtbWUsXG4jaG9tZSAjc2tpbGxzLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXJlbTtcbn1cbiNob21lICNhYm91dC1tZSBoMixcbiNob21lICNza2lsbHMtY3RuIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2hvbWUgI2Fib3V0LW1lIHtcbiAgbWF4LXdpZHRoOiA0MS4wNjI1cmVtO1xufVxuI2hvbWUgI3NraWxscy1jdG4ge1xuICBtYXgtd2lkdGg6IDYxLjkzNzVyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuI2hvbWUgI3NraWxscy1jdG4gI3NraWxscy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA0cmVtIDA7XG59XG4jaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEuNXJlbTtcbiAgd2lkdGg6IDIwJTtcbn1cbiNob21lICNza2lsbHMtY3RuIC5za2lsbCBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNob21lICNza2lsbHMtY3RuIC5za2lsbC1pbWctY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNi41cmVtO1xuICB3aWR0aDogNi41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMCwgMCUsIDY1JSk7XG4gIGJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG59XG4jaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwtaW1nLWN0biBpbWcge1xuICBtYXgtaGVpZ2h0OiAyLjVyZW07XG4gIG1heC13aWR0aDogMi41cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NHJlbSkge1xuICAjaG9tZSB7XG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gIGJvZHkge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICAjaG9tZSAjd2VsY29tZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIuNXJlbTtcbiAgfVxuICAjaG9tZSAjd2VsY29tZSBkaXYsXG4gICNob21lICN3ZWxjb21lIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI2hvbWUgLnByb2plY3QtY3RuIHtcbiAgICBnYXA6IDJyZW07XG4gIH1cbiAgI2hvbWUgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcgcCB7XG4gICAgZm9udC1zaXplOiAzLjc1cmVtO1xuICB9XG4gICNob21lICNza2lsbHMtY3RuIC5za2lsbCB7XG4gICAgd2lkdGg6IDMzJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICAjaG9tZSB7XG4gICAgZ2FwOiA1cmVtO1xuICAgIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xuICB9XG4gICNob21lICNwcm9qZWN0cyB7XG4gICAgZ2FwOiAzcmVtO1xuICB9XG4gICNob21lIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHAge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gICNob21lICNza2lsbHMtY3RuIC5za2lsbCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAjaG9tZSAjYWJvdXQtbWUsXG4gICNob21lICNza2lsbHMtY3RuIHtcbiAgICBnYXA6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjByZW0pIHtcbiAgI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIGgzIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICB9XG59XG4jYnRuLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDMuMTI1cmVtO1xuICBib3R0b206IDMuMTI1cmVtO1xuICB6LWluZGV4OiAzO1xufVxuXG4jYnRuLXRvcDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICAjYnRuLXRvcCB7XG4gICAgcmlnaHQ6IDEuNTYyNXJlbTtcbiAgICBib3R0b206IDEuNTYyNXJlbTtcbiAgfVxufVxuYnV0dG9uIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgcGFkZGluZzogMC43NXJlbSAzLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNSwgNzUlLCA1OCUpO1xuICBib3JkZXI6IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1LCA3MSUsIDM5JSk7XG59XG5cbi5idG4tcmVzZXQge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogM3JlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBoZWlnaHQ6IDE5LjVyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XG59XG5mb290ZXIgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAzcmVtO1xufVxuZm9vdGVyIGEge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcbn1cbmZvb3RlciBhOmhvdmVyIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcbn1cblxuLm1haW4tYmFubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbi1iYW5uZXIgaDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm1haW4tYmFubmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gIC5tYWluLWJhbm5lciBoMSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbiNwcm9qZWN0LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAgZ2FwOiAxNXJlbTtcbn1cbiNwcm9qZWN0LWxpc3QgLnByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS44NzVyZW07XG59XG4jcHJvamVjdC1saXN0IC5wcm9qZWN0IGltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDNyZW07XG4gIHdpZHRoOiA1MCU7XG59XG4jcHJvamVjdC1saXN0IC5wcm9qZWN0LWNvbnRlbnQgcCB7XG4gIG1heC13aWR0aDogMzIuNXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcbiAgI3Byb2plY3QtbGlzdCB7XG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XG4gICNwcm9qZWN0LWxpc3Qge1xuICAgIGdhcDogNy41cmVtO1xuICB9XG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCB7XG4gICAgZ2FwOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1jb250ZW50IHAge1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgfVxuICAjcHJvamVjdC1saXN0ICNjb2ZmZWUtdGltZS1wcm9qZWN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgI3Byb2plY3QtbGlzdCB7XG4gICAgZ2FwOiA1cmVtO1xuICAgIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xuICB9XG59XG4jZXhwZXJpZW5jZS1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiNleHBlcmllbmNlLXBhZ2UgYXNpZGUge1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xuICB3aWR0aDogMjUlO1xufVxuI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogNXJlbTtcbiAgZ2FwOiAxLjVyZW07XG59XG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIGg0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xuICB3aWR0aDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDcuNXJlbTtcbn1cbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuICBsaXN0LXN0eWxlOiBkaXNjO1xuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBvdXRzaWRlO1xufVxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IC5kYXRlcyB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxLjI1cmVtKSB7XG4gICNleHBlcmllbmNlLXBhZ2UgYXNpZGUsXG4gICNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XG4gICNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCAuZGF0ZXMge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICAjZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjZXhwZXJpZW5jZS1wYWdlIHNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gICNleHBlcmllbmNlLXBhZ2Uge1xuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICB9XG4gICNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNXJlbSAwO1xuICAgIGdhcDogNXJlbTtcbiAgfVxufVxuI2Fib3V0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDNyZW07XG59XG4jYWJvdXQtY29udGVudCBpbWcge1xuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDQ5LjY4NzVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xuICAjYWJvdXQtY29udGVudCB7XG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgI2Fib3V0LWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgI2Fib3V0LWNvbnRlbnQgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgI2Fib3V0LWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xuICB9XG59XG4ucHJvamVjdC1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wcm9qZWN0LXBhZ2UgYXNpZGUge1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xuICB3aWR0aDogMjUlO1xufVxuLnByb2plY3QtcGFnZSBhc2lkZSB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogNXJlbTtcbiAgZ2FwOiAxLjVyZW07XG59XG4ucHJvamVjdC1wYWdlIHNlY3Rpb24ge1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAgd2lkdGg6IDc1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA3LjVyZW07XG59XG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gLnByb2plY3Qtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogM3JlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBoMiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnByb2plY3QtcGFnZSBzZWN0aW9uIHAge1xuICBtYXgtd2lkdGg6IDQ5LjY4NzVyZW07XG59XG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMjguMTI1cmVtO1xuICBtYXgtd2lkdGg6IDUwcmVtO1xufVxuLnByb2plY3QtcGFnZSAjdmVyc2lvbi1vbmUgaW1nIHtcbiAgbWF4LWhlaWdodDogNDMuNzVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xuICAucHJvamVjdC1wYWdlIGFzaWRlLFxuICAucHJvamVjdC1wYWdlIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDcuNXJlbSAzcmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAucHJvamVjdC1wYWdlIGFzaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgLnByb2plY3QtcGFnZSBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA1cmVtIDEuNXJlbTtcbiAgICBnYXA6IDVyZW07XG4gIH1cbiAgLnByb2plY3QtcGFnZSBzZWN0aW9uIGgyIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAucHJvamVjdC1wYWdlIHNlY3Rpb24gLnByb2plY3Qtc2VjdGlvbiB7XG4gICAgZ2FwOiAxLjVyZW07XG4gIH1cbn1cbiNtb2JpbGUtbmF2IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAxMDAlLCAwKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAzcyBlYXNlLWluO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwO1xufVxuI21vYmlsZS1uYXYgI21vYmlsZS1uYXYtYmcge1xuICB3aWR0aDogNzUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDQlKTtcbn1cbiNtb2JpbGUtbmF2ICNidG4tY3RuIHtcbiAgd2lkdGg6IDI1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI21vYmlsZS1uYXYgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEuNXJlbTtcbn1cbiNtb2JpbGUtbmF2ICNtb2JpbGUtbmF2LWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4ubW9iaWxlLW5hdi1lbmQge1xuICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fZ2VuZXJhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fY29udGFpbmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19tYWluSG9tZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL190b1RvcEJ0bi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19idXR0b25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19tYWluQmFubmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX3BvcnRmb2xpb1BhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fZXhwZXJpZW5jZVBhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fYWJvdXRQYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX3Byb2plY3RQYWdlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19tb2JpbGVOYXYuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNDLGVBQUE7QUNIRDs7QURPQTtFQUNDLCtCRVZjO0VGV2QsbUJBQUE7RUFDQSx1QkdOVztFSE9YLGdDR1pRO0VIYVIsZ0JBQUE7QUNKRDs7QUdWQTs7O0VBR0Msc0JBQUE7QUhhRDs7QUdWQTtFQUNDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBSGFEOztBR1ZBOzs7RUFHQyxjQUFBO0FIYUQ7O0FJekJBOzs7RUFHQyxTQUFBO0VBQ0EsZ0JBQUE7QUo0QkQ7O0FJ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QTtFZnVoQkQ7RWVyaEJDO0lBQ0MsaUJBQUE7RWZ1aEJGO0VlcGhCQztJQUNDLFdBQUE7RWZzaEJGO0FBQ0Y7QWdCL21CQTtFQUNDLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FoQmluQkQ7QWdCL21CQztFQUNDLFVBQUE7RUFDQSxnQ2RkTztBRituQlQ7QWdCOW1CQztFQUNDLFVBQUE7RUFDQSxrQkFBQTtBaEJnbkJGO0FnQjdtQkM7RUFDQyxnQkFBQTtFQUNBLHFCZGRVO0VjZVYsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FoQittQkY7QWdCNW1CQztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QWhCOG1CRjs7QWdCMW1CQTtFQUNDLGtDZG5DMkI7QUZncEI1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcImNvbG9yc1xcXCIgYXMgKjtcXG5AdXNlIFxcXCJmb250c1xcXCIgYXMgKjtcXG5cXG5odG1sIHtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Ly9zY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSB7XFxuXFx0Zm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxuXFx0Zm9udC1zaXplOiByZW0oMTgpO1xcblxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItYmc7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXCIsXCJodG1sIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJmO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA0JSk7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG4gIG1hcmdpbjogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMy43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDEuMzc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xcbiAgaDEsXFxuICBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMy4xMjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gIGgxLFxcbiAgaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxufVxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA5OS4zNzVyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDNyZW0gMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XFxufVxcblxcbiNoZWFkZXItbGF5b3V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogM3JlbTtcXG59XFxudWwgYSB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcXG59XFxudWwgYTpob3ZlciB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG59XFxudWwgLmFjdGl2ZS1uYXYge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxufVxcblxcbiNtb2JpbGUtbmF2LWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMy4xMjVyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI21vYmlsZS1uYXYtYnRuIC5tb2JpbGUtbGluZSB7XFxuICBoZWlnaHQ6IDAuMjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcXG4gIGhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XFxuICAjZGVza3RvcC1uYXYtY3RuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gICNtb2JpbGUtbmF2LWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gIGhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gIH1cXG4gIGhlYWRlciBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDE1cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMHJlbSkge1xcbiAgaGVhZGVyIGltZyB7XFxuICAgIG1heC13aWR0aDogMTByZW07XFxuICB9XFxufVxcbiNob21lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTIuNXJlbSAwO1xcbiAgZ2FwOiAxMi41cmVtO1xcbiAgbWF4LXdpZHRoOiA3NS4zNzVyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNob21lICN3ZWxjb21lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA3LjVyZW07XFxufVxcbiNob21lICN3ZWxjb21lIGRpdiB7XFxuICB3aWR0aDogNjAlO1xcbn1cXG4jaG9tZSAjd2VsY29tZSBwIHtcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxufVxcbiNob21lICN3ZWxjb21lIGltZyB7XFxuICB3aWR0aDogNDAlO1xcbiAgbWF4LXdpZHRoOiAxOC43NXJlbTtcXG59XFxuI2hvbWUgI2hlYWRlci1sb2NhdGlvbiB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuI2hvbWUgI3Byb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiA0OS42ODc1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDcuNXJlbTtcXG59XFxuI2hvbWUgI3Byb2plY3RzICNwcm9qZWN0cy1vbmUtbGluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jaG9tZSAucHJvamVjdC1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIuNXJlbTtcXG59XFxuI2hvbWUgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNob21lIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHAge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuI2hvbWUgI2Fib3V0LW1lLFxcbiNob21lICNza2lsbHMtY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cmVtO1xcbn1cXG4jaG9tZSAjYWJvdXQtbWUgaDIsXFxuI2hvbWUgI3NraWxscy1jdG4gaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jaG9tZSAjYWJvdXQtbWUge1xcbiAgbWF4LXdpZHRoOiA0MS4wNjI1cmVtO1xcbn1cXG4jaG9tZSAjc2tpbGxzLWN0biB7XFxuICBtYXgtd2lkdGg6IDYxLjkzNzVyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuI2hvbWUgI3NraWxscy1jdG4gI3NraWxscy1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNHJlbSAwO1xcbn1cXG4jaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxLjVyZW07XFxuICB3aWR0aDogMjAlO1xcbn1cXG4jaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwgaDMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwtaW1nLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA2LjVyZW07XFxuICB3aWR0aDogNi41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDAsIDAlLCA2NSUpO1xcbiAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcXG59XFxuI2hvbWUgI3NraWxscy1jdG4gLnNraWxsLWltZy1jdG4gaW1nIHtcXG4gIG1heC1oZWlnaHQ6IDIuNXJlbTtcXG4gIG1heC13aWR0aDogMi41cmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NHJlbSkge1xcbiAgI2hvbWUge1xcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcXG4gIGJvZHkge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAjaG9tZSAjd2VsY29tZSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMi41cmVtO1xcbiAgfVxcbiAgI2hvbWUgI3dlbGNvbWUgZGl2LFxcbiAgI2hvbWUgI3dlbGNvbWUgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAjaG9tZSAucHJvamVjdC1jdG4ge1xcbiAgICBnYXA6IDJyZW07XFxuICB9XFxuICAjaG9tZSAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyBwIHtcXG4gICAgZm9udC1zaXplOiAzLjc1cmVtO1xcbiAgfVxcbiAgI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIHtcXG4gICAgd2lkdGg6IDMzJTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgI2hvbWUge1xcbiAgICBnYXA6IDVyZW07XFxuICAgIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xcbiAgfVxcbiAgI2hvbWUgI3Byb2plY3RzIHtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgfVxcbiAgI2hvbWUgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcgcCB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgfVxcbiAgI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG4gICNob21lICNhYm91dC1tZSxcXG4gICNob21lICNza2lsbHMtY3RuIHtcXG4gICAgZ2FwOiAyLjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIwcmVtKSB7XFxuICAjaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwgaDMge1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgfVxcbn1cXG4jYnRuLXRvcCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMy4xMjVyZW07XFxuICBib3R0b206IDMuMTI1cmVtO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuI2J0bi10b3A6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICAjYnRuLXRvcCB7XFxuICAgIHJpZ2h0OiAxLjU2MjVyZW07XFxuICAgIGJvdHRvbTogMS41NjI1cmVtO1xcbiAgfVxcbn1cXG5idXR0b24ge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBwYWRkaW5nOiAwLjc1cmVtIDMuNzVyZW07XFxuICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzUsIDc1JSwgNTglKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzUsIDcxJSwgMzklKTtcXG59XFxuXFxuLmJ0bi1yZXNldCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBoZWlnaHQ6IDE5LjVyZW07XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xcbn1cXG5mb290ZXIgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDNyZW07XFxufVxcbmZvb3RlciBhIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcXG59XFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcXG59XFxuXFxuLm1haW4tYmFubmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1haW4tYmFubmVyIGgxIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5tYWluLWJhbm5lciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gIC5tYWluLWJhbm5lciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbn1cXG4jcHJvamVjdC1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICBnYXA6IDE1cmVtO1xcbn1cXG4jcHJvamVjdC1saXN0IC5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxLjg3NXJlbTtcXG59XFxuI3Byb2plY3QtbGlzdCAucHJvamVjdCBpbWcge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuI3Byb2plY3QtbGlzdCAucHJvamVjdC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuI3Byb2plY3QtbGlzdCAucHJvamVjdC1jb250ZW50IHAge1xcbiAgbWF4LXdpZHRoOiAzMi41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcXG4gICNwcm9qZWN0LWxpc3Qge1xcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcXG4gICNwcm9qZWN0LWxpc3Qge1xcbiAgICBnYXA6IDcuNXJlbTtcXG4gIH1cXG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCB7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xcbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAjcHJvamVjdC1saXN0IC5wcm9qZWN0IGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LWNvbnRlbnQgcCB7XFxuICAgIG1heC13aWR0aDogbm9uZTtcXG4gIH1cXG4gICNwcm9qZWN0LWxpc3QgI2NvZmZlZS10aW1lLXByb2plY3Qge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gICNwcm9qZWN0LWxpc3Qge1xcbiAgICBnYXA6IDVyZW07XFxuICAgIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xcbiAgfVxcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNleHBlcmllbmNlLXBhZ2UgYXNpZGUge1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XFxuICB3aWR0aDogMjUlO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogNXJlbTtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIGg0IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbiNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XFxuICBwYWRkaW5nOiA3LjVyZW0gMDtcXG4gIHdpZHRoOiA3NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNy41cmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIGxpc3Qtc3R5bGU6IGRpc2M7XFxuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBvdXRzaWRlO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLmRhdGVzIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCAudGl0bGUge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgcCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcXG4gICNleHBlcmllbmNlLXBhZ2UgYXNpZGUsXFxuICAjZXhwZXJpZW5jZS1wYWdlIHNlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcXG4gICNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCAuZGF0ZXMge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAjZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XFxuICAjZXhwZXJpZW5jZS1wYWdlIGFzaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gICNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICAjZXhwZXJpZW5jZS1wYWdlIHtcXG4gICAgcGFkZGluZzogMCAxLjVyZW07XFxuICB9XFxuICAjZXhwZXJpZW5jZS1wYWdlIHNlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiA1cmVtIDA7XFxuICAgIGdhcDogNXJlbTtcXG4gIH1cXG59XFxuI2Fib3V0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuI2Fib3V0LWNvbnRlbnQgaW1nIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXgtd2lkdGg6IDQ5LjY4NzVyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xcbiAgI2Fib3V0LWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcXG4gIHAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XFxuICAjYWJvdXQtY29udGVudCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAjYWJvdXQtY29udGVudCBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcXG4gICNhYm91dC1jb250ZW50IHtcXG4gICAgcGFkZGluZzogNXJlbSAxLjVyZW07XFxuICB9XFxufVxcbi5wcm9qZWN0LXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnByb2plY3QtcGFnZSBhc2lkZSB7XFxuICBwYWRkaW5nOiA3LjVyZW0gMDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzMlKTtcXG4gIHdpZHRoOiAyNSU7XFxufVxcbi5wcm9qZWN0LXBhZ2UgYXNpZGUgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiA1cmVtO1xcbiAgZ2FwOiAxLjVyZW07XFxufVxcbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiB7XFxuICBwYWRkaW5nOiA3LjVyZW0gMDtcXG4gIHdpZHRoOiA3NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNy41cmVtO1xcbn1cXG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gLnByb2plY3Qtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogM3JlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBoMiB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBwIHtcXG4gIG1heC13aWR0aDogNDkuNjg3NXJlbTtcXG59XFxuLnByb2plY3QtcGFnZSBzZWN0aW9uIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDI4LjEyNXJlbTtcXG4gIG1heC13aWR0aDogNTByZW07XFxufVxcbi5wcm9qZWN0LXBhZ2UgI3ZlcnNpb24tb25lIGltZyB7XFxuICBtYXgtaGVpZ2h0OiA0My43NXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxLjI1cmVtKSB7XFxuICAucHJvamVjdC1wYWdlIGFzaWRlLFxcbiAgLnByb2plY3QtcGFnZSBzZWN0aW9uIHtcXG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XFxuICAucHJvamVjdC1wYWdlIGFzaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICAucHJvamVjdC1wYWdlIHNlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiA1cmVtIDEuNXJlbTtcXG4gICAgZ2FwOiA1cmVtO1xcbiAgfVxcbiAgLnByb2plY3QtcGFnZSBzZWN0aW9uIGgyIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICAucHJvamVjdC1wYWdlIHNlY3Rpb24gLnByb2plY3Qtc2VjdGlvbiB7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgfVxcbn1cXG4jbW9iaWxlLW5hdiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAxMDAlLCAwKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgM3MgZWFzZS1pbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG4jbW9iaWxlLW5hdiAjbW9iaWxlLW5hdi1iZyB7XFxuICB3aWR0aDogNzUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA0JSk7XFxufVxcbiNtb2JpbGUtbmF2ICNidG4tY3RuIHtcXG4gIHdpZHRoOiAyNSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNtb2JpbGUtbmF2IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAxLjVyZW07XFxufVxcbiNtb2JpbGUtbmF2ICNtb2JpbGUtbmF2LWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5tb2JpbGUtbmF2LWVuZCB7XFxuICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpO1xcbn1cIixcIiRmb250LXByaW1hcnk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyZjtcXG5cIixcIi8vIFByaW1hcnkgQ29sb3JzXFxuJGNsci1iZzogaHNsKDAsIDAlLCA0JSk7XFxuJGNsci1idG46IGhzbCgyMzUsIDc1JSwgNTglKTtcXG4kY2xyLWJ0bi1ob3ZlcjogaHNsKDIzNSwgNzElLCAzOSUpO1xcblxcbi8vIE5ldXRyYWwgQ29sb3JzXFxuJGNsci13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXG4kY2xyLXdoaXRlLXRyYW5zcGFyZW50LWVuZDogaHNsYSgwLCAwJSwgMTAwJSwgMC45KTtcXG4kY2xyLXdoaXRlLXRyYW5zcGFyZW50LXN0YXJ0OiBoc2xhKDAsIDAlLCAxMDAlLCAwKTtcXG4kY2xyLWdyYXk6IGhzbCgwLCAwJSwgNjUlKTtcXG4kY2xyLWdyYXktZGFyazogaHNsKDAsIDAlLCAzMyUpO1xcbiRjbHItYmxhY2s6IGhzbCgwLCAwJSwgMCUpO1xcblwiLFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbmltZyxcXG5waWN0dXJlLFxcbnN2ZyB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCJjb2xvcnNcXFwiIGFzICo7XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcblxcdG1hcmdpbjogMDtcXG5cXHRsaW5lLWhlaWdodDogMS4xO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuXFx0Zm9udC1zaXplOiByZW0oNjApO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0bGluZS1oZWlnaHQ6IDEuMztcXG59XFxuXFxuaDMge1xcblxcdGZvbnQtc2l6ZTogcmVtKDIyKTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmFjdGl2ZSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzY4KSkge1xcblxcdGgxLFxcblxcdGgyIHtcXG5cXHRcXHRmb250LXNpemU6IHJlbSg1MCk7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcblxcdGgxLFxcblxcdGgyIHtcXG5cXHRcXHRmb250LXNpemU6IHJlbSgzMik7XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuLmNvbnRhaW5lciB7XFxuXFx0bWF4LXdpZHRoOiByZW0oMTU5MCk7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5cXG5oZWFkZXIge1xcblxcdHBhZGRpbmc6IHJlbSg0OCkgMDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNsci1ncmF5LWRhcms7XFxufVxcblxcbiNoZWFkZXItbGF5b3V0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG51bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogcmVtKDQ4KTtcXG5cXG5cXHRhIHtcXG5cXHRcXHRjb2xvcjogJGNsci1ncmF5O1xcblxcdFxcdHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XFxuXFx0fVxcblxcblxcdGE6aG92ZXIge1xcblxcdFxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdH1cXG5cXG5cXHQuYWN0aXZlLW5hdiB7XFxuXFx0XFx0Y29sb3I6ICRjbHItd2hpdGU7XFxuXFx0fVxcbn1cXG5cXG4jbW9iaWxlLW5hdi1idG4ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0d2lkdGg6IHJlbSg0MCk7XFxuXFx0aGVpZ2h0OiByZW0oNTApO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiByZW0oOCk7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFx0Lm1vYmlsZS1saW5lIHtcXG5cXHRcXHRoZWlnaHQ6IHJlbSg0KTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWdyYXk7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogcmVtKDEwKTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNjIwKSkge1xcblxcdGhlYWRlciB7XFxuXFx0XFx0cGFkZGluZzogcmVtKDQ4KTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg3NjgpKSB7XFxuXFx0I2Rlc2t0b3AtbmF2LWN0biB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFxuXFx0I21vYmlsZS1uYXYtYnRuIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXG5cXHRoZWFkZXIge1xcblxcdFxcdHBhZGRpbmc6IHJlbSgyNCk7XFxuXFxuXFx0XFx0aW1nIHtcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSgyNDApO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgzMjApKSB7XFxuXFx0aGVhZGVyIHtcXG5cXHRcXHRpbWcge1xcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDE2MCk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNob21lIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogcmVtKDIwMCkgMDtcXG5cXHRnYXA6IHJlbSgyMDApO1xcblxcdG1heC13aWR0aDogcmVtKDEyMDYpO1xcblxcdG1hcmdpbjogMCBhdXRvO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0I3dlbGNvbWUge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRnYXA6IHJlbSgxMjApO1xcblxcblxcdFxcdGRpdiB7XFxuXFx0XFx0XFx0d2lkdGg6IDYwJTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0cCB7XFxuXFx0XFx0XFx0cGFkZGluZy10b3A6IHJlbSgyNCk7XFxuXFx0XFx0fVxcblxcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0d2lkdGg6IDQwJTtcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSgzMDApO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0I2hlYWRlci1sb2NhdGlvbiB7XFxuXFx0XFx0Y29sb3I6ICRjbHItZ3JheTtcXG5cXHRcXHRmb250LXdlaWdodDogMzAwO1xcblxcdH1cXG5cXG5cXHQjcHJvamVjdHMge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRtYXgtd2lkdGg6IHJlbSg3OTUpO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdGdhcDogcmVtKDEyMCk7XFxuXFxuXFx0XFx0I3Byb2plY3RzLW9uZS1saW5lciB7XFxuXFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtY3RuIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0Z2FwOiByZW0oNDApO1xcblxcblxcdFxcdC5wcm9qZWN0LWhlYWRpbmcge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0XFx0XFx0cCB7XFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oODApO1xcblxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0I2Fib3V0LW1lLFxcblxcdCNza2lsbHMtY3RuIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0Z2FwOiByZW0oODApO1xcblxcblxcdFxcdGgyIHtcXG5cXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQjYWJvdXQtbWUge1xcblxcdFxcdG1heC13aWR0aDogcmVtKDY1Nyk7XFxuXFx0fVxcblxcblxcdCNza2lsbHMtY3RuIHtcXG5cXHRcXHRtYXgtd2lkdGg6IHJlbSg5OTEpO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcblxcdFxcdCNza2lsbHMtbGlzdCB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0XFx0Z2FwOiByZW0oNjQpIDA7XFxuXFx0XFx0fVxcblxcblxcdFxcdC5za2lsbCB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0XFx0Z2FwOiByZW0oMjQpO1xcblxcdFxcdFxcdHdpZHRoOiAyMCU7XFxuXFxuXFx0XFx0XFx0aDMge1xcblxcdFxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdC5za2lsbC1pbWctY3RuIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0XFx0aGVpZ2h0OiByZW0oMTA0KTtcXG5cXHRcXHRcXHR3aWR0aDogcmVtKDEwNCk7XFxuXFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgJGNsci1ncmF5O1xcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHJlbSgxMDApO1xcblxcblxcdFxcdFxcdGltZyB7XFxuXFx0XFx0XFx0XFx0bWF4LWhlaWdodDogcmVtKDQwKTtcXG5cXHRcXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSg0MCk7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxMDI0KSkge1xcblxcdCNob21lIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSByZW0oNDgpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDc2OCkpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxuXFx0fVxcblxcblxcdCNob21lIHtcXG5cXHRcXHQjd2VsY29tZSB7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRnYXA6IHJlbSg0MCk7XFxuXFxuXFx0XFx0XFx0ZGl2LFxcblxcdFxcdFxcdGltZyB7XFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQucHJvamVjdC1jdG4ge1xcblxcdFxcdFxcdGdhcDogcmVtKDMyKTtcXG5cXG5cXHRcXHRcXHQucHJvamVjdC1oZWFkaW5nIHtcXG5cXHRcXHRcXHRcXHRwIHtcXG5cXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSg2MCk7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0I3NraWxscy1jdG4ge1xcblxcdFxcdFxcdC5za2lsbCB7XFxuXFx0XFx0XFx0XFx0d2lkdGg6IDMzJTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXG5cXHQjaG9tZSB7XFxuXFx0XFx0Z2FwOiByZW0oODApO1xcblxcdFxcdHBhZGRpbmc6IHJlbSg4MCkgcmVtKDI0KTtcXG5cXG5cXHRcXHQjcHJvamVjdHMge1xcblxcdFxcdFxcdGdhcDogcmVtKDQ4KTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0LnByb2plY3QtY3RuIHtcXG5cXHRcXHRcXHQucHJvamVjdC1oZWFkaW5nIHtcXG5cXHRcXHRcXHRcXHRwIHtcXG5cXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSg0MCk7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0I3NraWxscy1jdG4ge1xcblxcdFxcdFxcdC5za2lsbCB7XFxuXFx0XFx0XFx0XFx0d2lkdGg6IDUwJTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdCNhYm91dC1tZSxcXG5cXHRcXHQjc2tpbGxzLWN0biB7XFxuXFx0XFx0XFx0Z2FwOiByZW0oNDApO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgzMjApKSB7XFxuXFx0I2hvbWUge1xcblxcdFxcdCNza2lsbHMtY3RuIHtcXG5cXHRcXHRcXHQuc2tpbGwge1xcblxcdFxcdFxcdFxcdGgzIHtcXG5cXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSgxOCk7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuI2J0bi10b3Age1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRyaWdodDogcmVtKDUwKTtcXG5cXHRib3R0b206IHJlbSg1MCk7XFxuXFx0ei1pbmRleDogMztcXG59XFxuXFxuI2J0bi10b3A6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXG5cXHQjYnRuLXRvcCB7XFxuXFx0XFx0cmlnaHQ6IHJlbSgyNSk7XFxuXFx0XFx0Ym90dG9tOiByZW0oMjUpO1xcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbmJ1dHRvbiB7XFxuXFx0Y29sb3I6ICRjbHItd2hpdGU7XFxuXFx0Zm9udC1zaXplOiByZW0oMjApO1xcblxcdHBhZGRpbmc6IHJlbSgxMikgcmVtKDYwKTtcXG5cXHRib3JkZXItcmFkaXVzOiByZW0oNTApO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItYnRuO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItYnRuLWhvdmVyO1xcbn1cXG5cXG4uYnRuLXJlc2V0IHtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXG5cXHRidXR0b24ge1xcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG5mb290ZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogcmVtKDQ4KTtcXG5cXHRmb250LXNpemU6IHJlbSgzMik7XFxuXFx0aGVpZ2h0OiByZW0oMzEyKTtcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgJGNsci1ncmF5LWRhcms7XFxuXFxuXFx0ZGl2IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGdhcDogcmVtKDQ4KTtcXG5cXHR9XFxuXFxuXFx0YSB7XFxuXFx0XFx0Y29sb3I6ICRjbHItd2hpdGU7XFxuXFx0XFx0dHJhbnNpdGlvbjogY29sb3IgMC4xcztcXG5cXHR9XFxuXFxuXFx0YTpob3ZlciB7XFxuXFx0XFx0Y29sb3I6ICRjbHItZ3JheTtcXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4ubWFpbi1iYW5uZXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuXFx0aDEge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHR0b3A6IDUwJTtcXG5cXHRcXHRsZWZ0OiA1MCU7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0fVxcblxcblxcdGltZyB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcblxcdC5tYWluLWJhbm5lciB7XFxuXFx0XFx0aDEge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDI0KTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuI3Byb2plY3QtbGlzdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmc6IHJlbSgxMjApIDA7XFxuXFx0Z2FwOiByZW0oMjQwKTtcXG5cXG5cXHQucHJvamVjdCB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRnYXA6IHJlbSgzMCk7XFxuXFxuXFx0XFx0aW1nIHtcXG5cXHRcXHRcXHR3aWR0aDogNTAlO1xcblxcdFxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdC5wcm9qZWN0LWNvbnRlbnQge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGdhcDogcmVtKDQ4KTtcXG5cXHRcXHR3aWR0aDogNTAlO1xcblxcblxcdFxcdHAge1xcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDUyMCk7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNjIwKSkge1xcblxcdCNwcm9qZWN0LWxpc3Qge1xcblxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIHJlbSg0OCk7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTAyNCkpIHtcXG5cXHQjcHJvamVjdC1saXN0IHtcXG5cXHRcXHRnYXA6IHJlbSgxMjApO1xcblxcblxcdFxcdC5wcm9qZWN0LWNvbnRlbnQge1xcblxcdFxcdFxcdGdhcDogcmVtKDI0KTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzY4KSkge1xcblxcdCNwcm9qZWN0LWxpc3Qge1xcblxcdFxcdC5wcm9qZWN0IHtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcblxcdFxcdFxcdGltZyB7XFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdC5wcm9qZWN0LWNvbnRlbnQge1xcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcblxcdFxcdFxcdFxcdHAge1xcblxcdFxcdFxcdFxcdFxcdG1heC13aWR0aDogbm9uZTtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQjY29mZmVlLXRpbWUtcHJvamVjdCB7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg0MjUpKSB7XFxuXFx0I3Byb2plY3QtbGlzdCB7XFxuXFx0XFx0Z2FwOiByZW0oODApO1xcblxcdFxcdHBhZGRpbmc6IHJlbSg4MCkgcmVtKDI0KTtcXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jZXhwZXJpZW5jZS1wYWdlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcblxcdGFzaWRlIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcblxcdFxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRjbHItZ3JheS1kYXJrO1xcblxcdFxcdHdpZHRoOiAyNSU7XFxuXFxuXFx0XFx0dWwge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRwb3NpdGlvbjogc3RpY2t5O1xcblxcdFxcdFxcdHRvcDogcmVtKDgwKTtcXG5cXHRcXHRcXHRnYXA6IHJlbSgyNCk7XFxuXFx0XFx0fVxcblxcblxcdFxcdGg0IHtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0c2VjdGlvbiB7XFxuXFx0XFx0cGFkZGluZzogcmVtKDEyMCkgMDtcXG5cXHRcXHR3aWR0aDogNzUlO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRnYXA6IHJlbSgxMjApO1xcblxcdH1cXG5cXG5cXHQuZXhwZXJpZW5jZS1jb250ZW50IHtcXG5cXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxuXFxuXFx0XFx0dWwge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRnYXA6IHJlbSg4KTtcXG5cXHRcXHRcXHRsaXN0LXN0eWxlOiBkaXNjO1xcblxcdFxcdFxcdGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGU7XFxuXFx0XFx0fVxcblxcblxcdFxcdC5kYXRlcyB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMjApO1xcblxcdFxcdFxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNDAwO1xcblxcdFxcdFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRcXHR9XFxuXFxuXFx0XFx0LnRpdGxlIHtcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSg0MCk7XFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG5cXHRcXHRcXHRmb250LXN0eWxlOiBub3JtYWw7XFxuXFx0XFx0fVxcblxcblxcdFxcdHAge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDIwKTtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IHJlbSgyNCk7XFxuXFx0XFx0XFx0bWFyZ2luLXRvcDogcmVtKDgpO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNjIwKSkge1xcblxcdCNleHBlcmllbmNlLXBhZ2Uge1xcblxcdFxcdGFzaWRlLFxcblxcdFxcdHNlY3Rpb24ge1xcblxcdFxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIHJlbSg0OCk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDEwMjQpKSB7XFxuXFx0I2V4cGVyaWVuY2UtcGFnZSB7XFxuXFx0XFx0LmV4cGVyaWVuY2UtY29udGVudCB7XFxuXFx0XFx0XFx0LmRhdGVzIHtcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdC50aXRsZSB7XFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMjQpO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzY4KSkge1xcblxcdCNleHBlcmllbmNlLXBhZ2Uge1xcblxcdFxcdGFzaWRlIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRzZWN0aW9uIHtcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcblxcdCNleHBlcmllbmNlLXBhZ2Uge1xcblxcdFxcdHBhZGRpbmc6IDAgcmVtKDI0KTtcXG5cXG5cXHRcXHRzZWN0aW9uIHtcXG5cXHRcXHRcXHRwYWRkaW5nOiByZW0oODApIDA7XFxuXFx0XFx0XFx0Z2FwOiByZW0oODApO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jYWJvdXQtY29udGVudCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogcmVtKDQ4KTtcXG5cXG5cXHRpbWcge1xcblxcdFxcdHdpZHRoOiA1MCU7XFxuXFx0XFx0bWF4LXdpZHRoOiByZW0oNzk1KTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNjIwKSkge1xcblxcdCNhYm91dC1jb250ZW50IHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSByZW0oNDgpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDEwMjQpKSB7XFxuXFx0cCB7XFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDc2OCkpIHtcXG5cXHQjYWJvdXQtY29udGVudCB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG5cXHRcXHRpbWcge1xcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg3NjgpKSB7XFxuXFx0I2Fib3V0LWNvbnRlbnQge1xcblxcdFxcdHBhZGRpbmc6IHJlbSg4MCkgcmVtKDI0KTtcXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4ucHJvamVjdC1wYWdlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcblxcdGFzaWRlIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcblxcdFxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRjbHItZ3JheS1kYXJrO1xcblxcdFxcdHdpZHRoOiAyNSU7XFxuXFxuXFx0XFx0dWwge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRwb3NpdGlvbjogc3RpY2t5O1xcblxcdFxcdFxcdHRvcDogcmVtKDgwKTtcXG5cXHRcXHRcXHRnYXA6IHJlbSgyNCk7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHRzZWN0aW9uIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcblxcdFxcdHdpZHRoOiA3NSU7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGdhcDogcmVtKDEyMCk7XFxuXFxuXFx0XFx0LnByb2plY3Qtc2VjdGlvbiB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdGdhcDogcmVtKDQ4KTtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRoMiB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oNDApO1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0XFx0fVxcblxcblxcdFxcdHAge1xcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDc5NSk7XFxuXFx0XFx0fVxcblxcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcblxcdFxcdFxcdG1heC1oZWlnaHQ6IHJlbSg0NTApO1xcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDgwMCk7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQvLyB0aGlzIGlzIGZvciB0aGUgcG9ydGZvbGlvIHByb2plY3RcXG5cXHQjdmVyc2lvbi1vbmUge1xcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0bWF4LWhlaWdodDogcmVtKDcwMCk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDE2MjApKSB7XFxuXFx0LnByb2plY3QtcGFnZSB7XFxuXFx0XFx0YXNpZGUsXFxuXFx0XFx0c2VjdGlvbiB7XFxuXFx0XFx0XFx0cGFkZGluZzogcmVtKDEyMCkgcmVtKDQ4KTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzY4KSkge1xcblxcdC5wcm9qZWN0LXBhZ2Uge1xcblxcdFxcdGFzaWRlIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRzZWN0aW9uIHtcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcblxcdC5wcm9qZWN0LXBhZ2Uge1xcblxcdFxcdHNlY3Rpb24ge1xcblxcdFxcdFxcdHBhZGRpbmc6IHJlbSg4MCkgcmVtKDI0KTtcXG5cXHRcXHRcXHRnYXA6IHJlbSg4MCk7XFxuXFxuXFx0XFx0XFx0aDIge1xcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDI0KTtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0LnByb2plY3Qtc2VjdGlvbiB7XFxuXFx0XFx0XFx0XFx0Z2FwOiByZW0oMjQpO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuI21vYmlsZS1uYXYge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRiYWNrZ3JvdW5kOiAkY2xyLXdoaXRlLXRyYW5zcGFyZW50LXN0YXJ0O1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQgM3MgZWFzZS1pbjtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0ei1pbmRleDogMTA7XFxuXFxuXFx0I21vYmlsZS1uYXYtYmcge1xcblxcdFxcdHdpZHRoOiA3NSU7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1iZztcXG5cXHR9XFxuXFxuXFx0I2J0bi1jdG4ge1xcblxcdFxcdHdpZHRoOiAyNSU7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXG5cXHRidXR0b24ge1xcblxcdFxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0XFx0Y29sb3I6ICRjbHItYmxhY2s7XFxuXFx0XFx0Zm9udC1zaXplOiByZW0oNDApO1xcblxcdFxcdHBhZGRpbmc6IDA7XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdHRvcDogcmVtKDI0KTtcXG5cXHR9XFxuXFxuXFx0I21vYmlsZS1uYXYtY3RuIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0Z2FwOiByZW0oMzIpO1xcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDIwKTtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMzIpO1xcblxcdH1cXG59XFxuXFxuLm1vYmlsZS1uYXYtZW5kIHtcXG5cXHRiYWNrZ3JvdW5kOiAkY2xyLXdoaXRlLXRyYW5zcGFyZW50LWVuZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7IHVwZGF0ZUhlYWRlckFjdGl2ZUxpbmssIHJlbW92ZUhlYWRlclN0eWxlcywgbW9iaWxlTmF2SW5pdCB9O1xuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1saW5rc1wiKTtcbmNvbnN0IG1vYmlsZU5hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLW5hdi1idG5cIik7XG5jb25zdCBtb2JpbGVOYXZDdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1uYXZcIik7XG5jb25zdCBtb2JpbGVOYXZFeGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbmF2LWV4aXRcIik7XG5cbmZ1bmN0aW9uIHVwZGF0ZUhlYWRlckFjdGl2ZUxpbmsoKSB7XG5cdG5hdi5mb3JFYWNoKChsaW5rKSA9PiB7XG5cdFx0bGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0dXBkYXRlSGVhZGVyU3R5bGVzKGxpbmspO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSGVhZGVyU3R5bGVzKGxpbmspIHtcblx0cmVtb3ZlSGVhZGVyU3R5bGVzKCk7XG5cdGFkZEhlYWRlclN0eWxlcyhsaW5rKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGVhZGVyU3R5bGVzKCkge1xuXHRuYXYuZm9yRWFjaCgoY2hpbGQpID0+IHtcblx0XHRjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLW5hdlwiKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZEhlYWRlclN0eWxlcyhsaW5rKSB7XG5cdGxpbmsuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1uYXZcIik7XG59XG5cbmZ1bmN0aW9uIG1vYmlsZU5hdkluaXQoKSB7XG5cdG1vYmlsZU5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdG1vYmlsZU5hdkN0bi5jbGFzc0xpc3QudG9nZ2xlKFwibW9iaWxlLW5hdi1lbmRcIik7XG5cdFx0bW9iaWxlTmF2Q3RuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblx0fSk7XG5cblx0bW9iaWxlTmF2RXhpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdG1vYmlsZU5hdkN0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdH0pO1xufVxuIiwiZXhwb3J0IHsgc2Nyb2xsVG9Ub3AgfTtcblxuY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tdG9wXCIpO1xuXG5idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNjcm9sbFRvVG9wKTtcblxuZnVuY3Rpb24gc2Nyb2xsVG9Ub3AoKSB7XG5cdGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG59XG4iLCJleHBvcnQgeyBpbml0IH07XG5pbXBvcnQgeyB1cGRhdGVIZWFkZXJBY3RpdmVMaW5rLCBtb2JpbGVOYXZJbml0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCB7IHNjcm9sbFRvVG9wIH0gZnJvbSBcIi4vY29tcG9uZW50cy90b1RvcEJ0blwiO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuXHR1cGRhdGVIZWFkZXJBY3RpdmVMaW5rKCk7XG5cdHNjcm9sbFRvVG9wKCk7XG5cdG1vYmlsZU5hdkluaXQoKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGluaXQgfSBmcm9tIFwiLi9pbml0LmpzXCI7XG5pbXBvcnQgXCIuLi9zY3NzL3N0eWxlcy5zY3NzXCI7XG5cbmluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==