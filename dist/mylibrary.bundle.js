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
.mobile-nav #mobile-nav-bg {
  width: 80%;
  background-color: hsl(0, 0%, 4%);
}
.mobile-nav #btn-ctn {
  width: 20%;
}
.mobile-nav button {
  background: none;
  color: hsl(0, 0%, 0%);
  font-size: 2.5rem;
  padding-left: 1rem;
  position: relative;
  top: 1.5rem;
}
.mobile-nav #mobile-nav-ctn {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.25rem;
  padding: 2rem;
}

.active {
  background-color: rgba(255, 255, 255, 0.8);
  visibility: visible;
  opacity: 1;
}`, "",{"version":3,"sources":["webpack://./src/scss/globals/_general.scss","webpack://./src/scss/styles.scss","webpack://./src/scss/globals/_fonts.scss","webpack://./src/scss/globals/_colors.scss","webpack://./src/scss/globals/_reset.scss","webpack://./src/scss/globals/_typography.scss","webpack://./src/scss/globals/_container.scss","webpack://./src/scss/components/_header.scss","webpack://./src/scss/components/_mainHome.scss","webpack://./src/scss/components/_toTopBtn.scss","webpack://./src/scss/components/_buttons.scss","webpack://./src/scss/components/_footer.scss","webpack://./src/scss/components/_mainBanner.scss","webpack://./src/scss/components/_portfolioPage.scss","webpack://./src/scss/components/_experiencePage.scss","webpack://./src/scss/components/_aboutPage.scss","webpack://./src/scss/components/_projectPages.scss","webpack://./src/scss/components/_mobileNav.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"../utilities/\" as *;\n@use \"colors\" as *;\n@use \"fonts\" as *;\n\nhtml {\n\tfont-size: 100%;\n\t//scroll-behavior: smooth;\n}\n\nbody {\n\tfont-family: $font-primary;\n\tfont-size: rem(18);\n\tcolor: $clr-white;\n\tbackground-color: $clr-bg;\n\tline-height: 1.5;\n}\n","html {\n  font-size: 100%;\n}\n\nbody {\n  font-family: \"Inter\", sans-serf;\n  font-size: 1.125rem;\n  color: hsl(0, 0%, 100%);\n  background-color: hsl(0, 0%, 4%);\n  line-height: 1.5;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n  line-height: 1.1;\n}\n\nh1,\nh2 {\n  font-size: 3.75rem;\n  font-weight: 700;\n  line-height: 1.3;\n}\n\nh3 {\n  font-size: 1.375rem;\n  font-weight: 700;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\n@media screen and (max-width: 48rem) {\n  h1,\n  h2 {\n    font-size: 3.125rem;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  h1,\n  h2 {\n    font-size: 2rem;\n  }\n}\n.container {\n  max-width: 99.375rem;\n  margin: 0 auto;\n}\n\nheader {\n  padding: 3rem 0;\n  border-bottom: 1px solid hsl(0, 0%, 33%);\n}\n\n#header-layout {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nul {\n  list-style: none;\n  display: flex;\n  gap: 3rem;\n}\nul a {\n  color: hsl(0, 0%, 65%);\n  transition: color 0.1s;\n}\nul a:hover {\n  color: hsl(0, 0%, 100%);\n}\nul .active-nav {\n  color: hsl(0, 0%, 100%);\n}\n\n#mobile-nav-btn {\n  display: none;\n  width: 2.5rem;\n  height: 3.125rem;\n  flex-direction: column;\n  gap: 0.5rem;\n  justify-content: center;\n}\n#mobile-nav-btn .mobile-line {\n  height: 0.25rem;\n  width: 100%;\n  background-color: hsl(0, 0%, 65%);\n  border-radius: 0.625rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  header {\n    padding: 3rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #desktop-nav-ctn {\n    display: none;\n  }\n  #mobile-nav-btn {\n    display: flex;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  header {\n    padding: 1.5rem;\n  }\n  header img {\n    max-width: 15rem;\n  }\n}\n@media screen and (max-width: 20rem) {\n  header img {\n    max-width: 10rem;\n  }\n}\n#home {\n  display: flex;\n  flex-direction: column;\n  padding: 12.5rem 0;\n  gap: 12.5rem;\n  max-width: 75.375rem;\n  margin: 0 auto;\n  align-items: center;\n}\n#home #welcome {\n  display: flex;\n  align-items: center;\n  gap: 7.5rem;\n}\n#home #welcome div {\n  width: 60%;\n}\n#home #welcome p {\n  padding-top: 1.5rem;\n}\n#home #welcome img {\n  width: 40%;\n  max-width: 18.75rem;\n}\n#home #header-location {\n  color: hsl(0, 0%, 65%);\n  font-weight: 300;\n}\n#home #projects {\n  display: flex;\n  flex-direction: column;\n  max-width: 49.6875rem;\n  width: 100%;\n  gap: 7.5rem;\n}\n#home #projects #projects-one-liner {\n  text-align: center;\n}\n#home .project-ctn {\n  display: flex;\n  flex-direction: column;\n  gap: 2.5rem;\n}\n#home .project-ctn .project-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#home .project-ctn .project-heading p {\n  font-size: 5rem;\n  font-weight: 100;\n}\n#home #about-me,\n#home #skills-ctn {\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n}\n#home #about-me h2,\n#home #skills-ctn h2 {\n  text-align: center;\n}\n#home #about-me {\n  max-width: 41.0625rem;\n}\n#home #skills-ctn {\n  max-width: 61.9375rem;\n  width: 100%;\n}\n#home #skills-ctn #skills-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 4rem 0;\n}\n#home #skills-ctn .skill {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n  width: 20%;\n}\n#home #skills-ctn .skill h3 {\n  text-align: center;\n}\n#home #skills-ctn .skill-img-ctn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 6.5rem;\n  width: 6.5rem;\n  border: 1px solid hsl(0, 0%, 65%);\n  border-radius: 6.25rem;\n}\n#home #skills-ctn .skill-img-ctn img {\n  max-height: 2.5rem;\n  max-width: 2.5rem;\n}\n\n@media screen and (max-width: 64rem) {\n  #home {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  body {\n    font-size: 1rem;\n  }\n  #home #welcome {\n    flex-direction: column;\n    gap: 2.5rem;\n  }\n  #home #welcome div,\n  #home #welcome img {\n    width: 100%;\n  }\n  #home .project-ctn {\n    gap: 2rem;\n  }\n  #home .project-ctn .project-heading p {\n    font-size: 3.75rem;\n  }\n  #home #skills-ctn .skill {\n    width: 33%;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #home {\n    gap: 5rem;\n    padding: 5rem 1.5rem;\n  }\n  #home #projects {\n    gap: 3rem;\n  }\n  #home .project-ctn .project-heading p {\n    font-size: 2.5rem;\n  }\n  #home #skills-ctn .skill {\n    width: 50%;\n  }\n  #home #about-me,\n  #home #skills-ctn {\n    gap: 2.5rem;\n  }\n}\n@media screen and (max-width: 20rem) {\n  #home #skills-ctn .skill h3 {\n    font-size: 1.125rem;\n  }\n}\n#btn-top {\n  position: fixed;\n  right: 3.125rem;\n  bottom: 3.125rem;\n  z-index: 3;\n}\n\n#btn-top:hover {\n  cursor: pointer;\n}\n\n@media screen and (max-width: 26.5625rem) {\n  #btn-top {\n    right: 1.5625rem;\n    bottom: 1.5625rem;\n  }\n}\nbutton {\n  color: hsl(0, 0%, 100%);\n  font-size: 1.25rem;\n  padding: 0.75rem 3.75rem;\n  border-radius: 3.125rem;\n  background-color: hsl(235, 75%, 58%);\n  border: none;\n  transition: background-color 0.1s;\n}\n\nbutton:hover {\n  cursor: pointer;\n  background-color: hsl(235, 71%, 39%);\n}\n\n.btn-reset {\n  margin: 0 auto;\n}\n\n@media screen and (max-width: 26.5625rem) {\n  button {\n    font-size: 1rem;\n  }\n}\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n  font-size: 2rem;\n  height: 19.5rem;\n  border-top: 1px solid hsl(0, 0%, 33%);\n}\nfooter div {\n  display: flex;\n  gap: 3rem;\n}\nfooter a {\n  color: hsl(0, 0%, 100%);\n  transition: color 0.1s;\n}\nfooter a:hover {\n  color: hsl(0, 0%, 65%);\n}\n\n.main-banner {\n  position: relative;\n  text-align: center;\n}\n.main-banner h1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main-banner img {\n  width: 100%;\n}\n\n@media screen and (max-width: 26.5625rem) {\n  .main-banner h1 {\n    font-size: 1.5rem;\n  }\n}\n#project-list {\n  display: flex;\n  flex-direction: column;\n  padding: 7.5rem 0;\n  gap: 15rem;\n}\n#project-list .project {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1.875rem;\n}\n#project-list .project img {\n  width: 50%;\n  height: 100%;\n}\n#project-list .project-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3rem;\n  width: 50%;\n}\n#project-list .project-content p {\n  max-width: 32.5rem;\n  font-size: 1rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  #project-list {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 64rem) {\n  #project-list {\n    gap: 7.5rem;\n  }\n  #project-list .project-content {\n    gap: 1.5rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #project-list .project {\n    flex-direction: column;\n  }\n  #project-list .project img {\n    width: 100%;\n  }\n  #project-list .project .project-content {\n    width: 100%;\n  }\n  #project-list .project .project-content p {\n    max-width: none;\n  }\n  #project-list #coffee-time-project {\n    flex-direction: column-reverse;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #project-list {\n    gap: 5rem;\n    padding: 5rem 1.5rem;\n  }\n}\n#experience-page {\n  display: flex;\n}\n#experience-page aside {\n  padding: 7.5rem 0;\n  border-right: 1px solid hsl(0, 0%, 33%);\n  width: 25%;\n}\n#experience-page aside ul {\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 5rem;\n  gap: 1.5rem;\n}\n#experience-page aside h4 {\n  font-weight: 700;\n}\n#experience-page section {\n  padding: 7.5rem 0;\n  width: 75%;\n  display: flex;\n  flex-direction: column;\n  gap: 7.5rem;\n}\n#experience-page .experience-content {\n  font-size: 1rem;\n}\n#experience-page .experience-content ul {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  list-style: disc;\n  list-style-position: outside;\n}\n#experience-page .experience-content .dates {\n  font-size: 1.25rem;\n  font-style: italic;\n  font-weight: 400;\n  display: inline-block;\n}\n#experience-page .experience-content .title {\n  font-size: 2.5rem;\n  font-weight: 300;\n  font-style: normal;\n}\n#experience-page .experience-content p {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin-bottom: 1.5rem;\n  margin-top: 0.5rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  #experience-page aside,\n  #experience-page section {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 64rem) {\n  #experience-page .experience-content .dates {\n    font-size: 1rem;\n  }\n  #experience-page .experience-content .title {\n    font-size: 1.5rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #experience-page aside {\n    display: none;\n  }\n  #experience-page section {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #experience-page {\n    padding: 0 1.5rem;\n  }\n  #experience-page section {\n    padding: 5rem 0;\n    gap: 5rem;\n  }\n}\n#about-content {\n  display: flex;\n  padding: 7.5rem 0;\n  justify-content: space-between;\n  align-items: center;\n  gap: 3rem;\n}\n#about-content img {\n  width: 50%;\n  max-width: 49.6875rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  #about-content {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 64rem) {\n  p {\n    font-size: 1rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #about-content {\n    flex-direction: column;\n  }\n  #about-content img {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #about-content {\n    padding: 5rem 1.5rem;\n  }\n}\n.project-page {\n  display: flex;\n}\n.project-page aside {\n  padding: 7.5rem 0;\n  border-right: 1px solid hsl(0, 0%, 33%);\n  width: 25%;\n}\n.project-page aside ul {\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 5rem;\n  gap: 1.5rem;\n}\n.project-page section {\n  padding: 7.5rem 0;\n  width: 75%;\n  display: flex;\n  flex-direction: column;\n  gap: 7.5rem;\n}\n.project-page section .project-section {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n  align-items: center;\n}\n.project-page section h2 {\n  font-size: 2.5rem;\n  font-weight: 300;\n}\n.project-page section p {\n  max-width: 49.6875rem;\n}\n.project-page section img {\n  width: 100%;\n  height: auto;\n  max-height: 28.125rem;\n  max-width: 50rem;\n}\n.project-page #version-one img {\n  max-height: 43.75rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  .project-page aside,\n  .project-page section {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  .project-page aside {\n    display: none;\n  }\n  .project-page section {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  .project-page section {\n    padding: 5rem 1.5rem;\n    gap: 5rem;\n  }\n  .project-page section h2 {\n    font-size: 1.5rem;\n  }\n  .project-page section .project-section {\n    gap: 1.5rem;\n  }\n}\n.mobile-nav {\n  display: flex;\n  visibility: hidden;\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.2);\n  transition: background-color 0.2s ease-out;\n  position: fixed;\n  z-index: 10;\n}\n.mobile-nav #mobile-nav-bg {\n  width: 80%;\n  background-color: hsl(0, 0%, 4%);\n}\n.mobile-nav #btn-ctn {\n  width: 20%;\n}\n.mobile-nav button {\n  background: none;\n  color: hsl(0, 0%, 0%);\n  font-size: 2.5rem;\n  padding-left: 1rem;\n  position: relative;\n  top: 1.5rem;\n}\n.mobile-nav #mobile-nav-ctn {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  font-size: 1.25rem;\n  padding: 2rem;\n}\n\n.active {\n  background-color: rgba(255, 255, 255, 0.8);\n  visibility: visible;\n  opacity: 1;\n}","$font-primary: \"Inter\", sans-serf;\n","// Primary Colors\n$clr-bg: hsl(0, 0%, 4%);\n$clr-btn: hsl(235, 75%, 58%);\n$clr-btn-hover: hsl(235, 71%, 39%);\n\n// Neutral Colors\n$clr-white: hsl(0, 0%, 100%);\n$clr-white-transparent-end: hsla(0, 0%, 100%, 0.5);\n$clr-white-transparent-start: hsla(0, 0%, 100%, 0);\n$clr-gray: hsl(0, 0%, 65%);\n$clr-gray-dark: hsl(0, 0%, 33%);\n$clr-black: hsl(0, 0%, 0%);\n","*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont: inherit;\n}\n\nimg,\npicture,\nsvg {\n\tdisplay: block;\n}\n","@use \"../utilities/\" as *;\n@use \"colors\" as *;\n\nh1,\nh2,\nh3 {\n\tmargin: 0;\n\tline-height: 1.1;\n}\n\nh1,\nh2 {\n\tfont-size: rem(60);\n\tfont-weight: 700;\n\tline-height: 1.3;\n}\n\nh3 {\n\tfont-size: rem(22);\n\tfont-weight: 700;\n}\n\na,\na:visited,\na:active {\n\ttext-decoration: none;\n}\n\n@media screen and (max-width: rem(768)) {\n\th1,\n\th2 {\n\t\tfont-size: rem(50);\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\th1,\n\th2 {\n\t\tfont-size: rem(32);\n\t}\n}\n","@use \"../utilities/\" as *;\n\n.container {\n\tmax-width: rem(1590);\n\tmargin: 0 auto;\n}\n","@use \"../utilities/\" as *;\n@use \"../globals/\" as *;\n\nheader {\n\tpadding: rem(48) 0;\n\tborder-bottom: 1px solid $clr-gray-dark;\n}\n\n#header-layout {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\nul {\n\tlist-style: none;\n\tdisplay: flex;\n\tgap: rem(48);\n\n\ta {\n\t\tcolor: $clr-gray;\n\t\ttransition: color 0.1s;\n\t}\n\n\ta:hover {\n\t\tcolor: $clr-white;\n\t}\n\n\t.active-nav {\n\t\tcolor: $clr-white;\n\t}\n}\n\n#mobile-nav-btn {\n\tdisplay: none;\n\twidth: rem(40);\n\theight: rem(50);\n\tflex-direction: column;\n\tgap: rem(8);\n\tjustify-content: center;\n\n\t.mobile-line {\n\t\theight: rem(4);\n\t\twidth: 100%;\n\t\tbackground-color: $clr-gray;\n\t\tborder-radius: rem(10);\n\t}\n}\n\n@media screen and (max-width: rem(1620)) {\n\theader {\n\t\tpadding: rem(48);\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t#desktop-nav-ctn {\n\t\tdisplay: none;\n\t}\n\n\t#mobile-nav-btn {\n\t\tdisplay: flex;\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\theader {\n\t\tpadding: rem(24);\n\n\t\timg {\n\t\t\tmax-width: rem(240);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(320)) {\n\theader {\n\t\timg {\n\t\t\tmax-width: rem(160);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#home {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: rem(200) 0;\n\tgap: rem(200);\n\tmax-width: rem(1206);\n\tmargin: 0 auto;\n\talign-items: center;\n\n\t#welcome {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: rem(120);\n\n\t\tdiv {\n\t\t\twidth: 60%;\n\t\t}\n\n\t\tp {\n\t\t\tpadding-top: rem(24);\n\t\t}\n\n\t\timg {\n\t\t\twidth: 40%;\n\t\t\tmax-width: rem(300);\n\t\t}\n\t}\n\n\t#header-location {\n\t\tcolor: $clr-gray;\n\t\tfont-weight: 300;\n\t}\n\n\t#projects {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmax-width: rem(795);\n\t\twidth: 100%;\n\t\tgap: rem(120);\n\n\t\t#projects-one-liner {\n\t\t\ttext-align: center;\n\t\t}\n\t}\n\n\t.project-ctn {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(40);\n\n\t\t.project-heading {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\talign-items: center;\n\n\t\t\tp {\n\t\t\t\tfont-size: rem(80);\n\t\t\t\tfont-weight: 100;\n\t\t\t}\n\t\t}\n\t}\n\n\t#about-me,\n\t#skills-ctn {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(80);\n\n\t\th2 {\n\t\t\ttext-align: center;\n\t\t}\n\t}\n\n\t#about-me {\n\t\tmax-width: rem(657);\n\t}\n\n\t#skills-ctn {\n\t\tmax-width: rem(991);\n\t\twidth: 100%;\n\n\t\t#skills-list {\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tjustify-content: center;\n\t\t\tgap: rem(64) 0;\n\t\t}\n\n\t\t.skill {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-items: center;\n\t\t\tgap: rem(24);\n\t\t\twidth: 20%;\n\n\t\t\th3 {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t}\n\n\t\t.skill-img-ctn {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\theight: rem(104);\n\t\t\twidth: rem(104);\n\t\t\tborder: 1px solid $clr-gray;\n\t\t\tborder-radius: rem(100);\n\n\t\t\timg {\n\t\t\t\tmax-height: rem(40);\n\t\t\t\tmax-width: rem(40);\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1024)) {\n\t#home {\n\t\tpadding: rem(120) rem(48);\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\tbody {\n\t\tfont-size: rem(16);\n\t}\n\n\t#home {\n\t\t#welcome {\n\t\t\tflex-direction: column;\n\t\t\tgap: rem(40);\n\n\t\t\tdiv,\n\t\t\timg {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\n\t\t.project-ctn {\n\t\t\tgap: rem(32);\n\n\t\t\t.project-heading {\n\t\t\t\tp {\n\t\t\t\t\tfont-size: rem(60);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t#skills-ctn {\n\t\t\t.skill {\n\t\t\t\twidth: 33%;\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t#home {\n\t\tgap: rem(80);\n\t\tpadding: rem(80) rem(24);\n\n\t\t#projects {\n\t\t\tgap: rem(48);\n\t\t}\n\n\t\t.project-ctn {\n\t\t\t.project-heading {\n\t\t\t\tp {\n\t\t\t\t\tfont-size: rem(40);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t#skills-ctn {\n\t\t\t.skill {\n\t\t\t\twidth: 50%;\n\t\t\t}\n\t\t}\n\n\t\t#about-me,\n\t\t#skills-ctn {\n\t\t\tgap: rem(40);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(320)) {\n\t#home {\n\t\t#skills-ctn {\n\t\t\t.skill {\n\t\t\t\th3 {\n\t\t\t\t\tfont-size: rem(18);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#btn-top {\n\tposition: fixed;\n\tright: rem(50);\n\tbottom: rem(50);\n\tz-index: 3;\n}\n\n#btn-top:hover {\n\tcursor: pointer;\n}\n\n@media screen and (max-width: rem(425)) {\n\t#btn-top {\n\t\tright: rem(25);\n\t\tbottom: rem(25);\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\nbutton {\n\tcolor: $clr-white;\n\tfont-size: rem(20);\n\tpadding: rem(12) rem(60);\n\tborder-radius: rem(50);\n\tbackground-color: $clr-btn;\n\tborder: none;\n\ttransition: background-color 0.1s;\n}\n\nbutton:hover {\n\tcursor: pointer;\n\tbackground-color: $clr-btn-hover;\n}\n\n.btn-reset {\n\tmargin: 0 auto;\n}\n\n@media screen and (max-width: rem(425)) {\n\tbutton {\n\t\tfont-size: rem(16);\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\nfooter {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: rem(48);\n\tfont-size: rem(32);\n\theight: rem(312);\n\tborder-top: 1px solid $clr-gray-dark;\n\n\tdiv {\n\t\tdisplay: flex;\n\t\tgap: rem(48);\n\t}\n\n\ta {\n\t\tcolor: $clr-white;\n\t\ttransition: color 0.1s;\n\t}\n\n\ta:hover {\n\t\tcolor: $clr-gray;\n\t}\n}\n","@use \"../utilities/\" as *;\n\n.main-banner {\n\tposition: relative;\n\ttext-align: center;\n\n\th1 {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t}\n\n\timg {\n\t\twidth: 100%;\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t.main-banner {\n\t\th1 {\n\t\t\tfont-size: rem(24);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#project-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: rem(120) 0;\n\tgap: rem(240);\n\n\t.project {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tgap: rem(30);\n\n\t\timg {\n\t\t\twidth: 50%;\n\t\t\theight: 100%;\n\t\t}\n\t}\n\n\t.project-content {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tgap: rem(48);\n\t\twidth: 50%;\n\n\t\tp {\n\t\t\tmax-width: rem(520);\n\t\t\tfont-size: rem(16);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1620)) {\n\t#project-list {\n\t\tpadding: rem(120) rem(48);\n\t}\n}\n\n@media screen and (max-width: rem(1024)) {\n\t#project-list {\n\t\tgap: rem(120);\n\n\t\t.project-content {\n\t\t\tgap: rem(24);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t#project-list {\n\t\t.project {\n\t\t\tflex-direction: column;\n\n\t\t\timg {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\n\t\t\t.project-content {\n\t\t\t\twidth: 100%;\n\n\t\t\t\tp {\n\t\t\t\t\tmax-width: none;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t#coffee-time-project {\n\t\t\tflex-direction: column-reverse;\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t#project-list {\n\t\tgap: rem(80);\n\t\tpadding: rem(80) rem(24);\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#experience-page {\n\tdisplay: flex;\n\n\taside {\n\t\tpadding: rem(120) 0;\n\t\tborder-right: 1px solid $clr-gray-dark;\n\t\twidth: 25%;\n\n\t\tul {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tposition: sticky;\n\t\t\ttop: rem(80);\n\t\t\tgap: rem(24);\n\t\t}\n\n\t\th4 {\n\t\t\tfont-weight: 700;\n\t\t}\n\t}\n\n\tsection {\n\t\tpadding: rem(120) 0;\n\t\twidth: 75%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(120);\n\t}\n\n\t.experience-content {\n\t\tfont-size: rem(16);\n\n\t\tul {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: rem(8);\n\t\t\tlist-style: disc;\n\t\t\tlist-style-position: outside;\n\t\t}\n\n\t\t.dates {\n\t\t\tfont-size: rem(20);\n\t\t\tfont-style: italic;\n\t\t\tfont-weight: 400;\n\t\t\tdisplay: inline-block;\n\t\t}\n\n\t\t.title {\n\t\t\tfont-size: rem(40);\n\t\t\tfont-weight: 300;\n\t\t\tfont-style: normal;\n\t\t}\n\n\t\tp {\n\t\t\tfont-size: rem(20);\n\t\t\tfont-weight: 700;\n\t\t\tmargin-bottom: rem(24);\n\t\t\tmargin-top: rem(8);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1620)) {\n\t#experience-page {\n\t\taside,\n\t\tsection {\n\t\t\tpadding: rem(120) rem(48);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1024)) {\n\t#experience-page {\n\t\t.experience-content {\n\t\t\t.dates {\n\t\t\t\tfont-size: rem(16);\n\t\t\t}\n\n\t\t\t.title {\n\t\t\t\tfont-size: rem(24);\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t#experience-page {\n\t\taside {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\tsection {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t#experience-page {\n\t\tpadding: 0 rem(24);\n\n\t\tsection {\n\t\t\tpadding: rem(80) 0;\n\t\t\tgap: rem(80);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#about-content {\n\tdisplay: flex;\n\tpadding: rem(120) 0;\n\tjustify-content: space-between;\n\talign-items: center;\n\tgap: rem(48);\n\n\timg {\n\t\twidth: 50%;\n\t\tmax-width: rem(795);\n\t}\n}\n\n@media screen and (max-width: rem(1620)) {\n\t#about-content {\n\t\tpadding: rem(120) rem(48);\n\t}\n}\n\n@media screen and (max-width: rem(1024)) {\n\tp {\n\t\tfont-size: rem(16);\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t#about-content {\n\t\tflex-direction: column;\n\n\t\timg {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t#about-content {\n\t\tpadding: rem(80) rem(24);\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n.project-page {\n\tdisplay: flex;\n\n\taside {\n\t\tpadding: rem(120) 0;\n\t\tborder-right: 1px solid $clr-gray-dark;\n\t\twidth: 25%;\n\n\t\tul {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tposition: sticky;\n\t\t\ttop: rem(80);\n\t\t\tgap: rem(24);\n\t\t}\n\t}\n\n\tsection {\n\t\tpadding: rem(120) 0;\n\t\twidth: 75%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(120);\n\n\t\t.project-section {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: rem(48);\n\t\t\talign-items: center;\n\t\t}\n\n\t\th2 {\n\t\t\tfont-size: rem(40);\n\t\t\tfont-weight: 300;\n\t\t}\n\n\t\tp {\n\t\t\tmax-width: rem(795);\n\t\t}\n\n\t\timg {\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t\tmax-height: rem(450);\n\t\t\tmax-width: rem(800);\n\t\t}\n\t}\n\n\t// this is for the portfolio project\n\t#version-one {\n\t\timg {\n\t\t\tmax-height: rem(700);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1620)) {\n\t.project-page {\n\t\taside,\n\t\tsection {\n\t\t\tpadding: rem(120) rem(48);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t.project-page {\n\t\taside {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\tsection {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t.project-page {\n\t\tsection {\n\t\t\tpadding: rem(80) rem(24);\n\t\t\tgap: rem(80);\n\n\t\t\th2 {\n\t\t\t\tfont-size: rem(24);\n\t\t\t}\n\n\t\t\t.project-section {\n\t\t\t\tgap: rem(24);\n\t\t\t}\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n.mobile-nav {\n\tdisplay: flex;\n\tvisibility: hidden;\n\topacity: 0;\n\theight: 100%;\n\twidth: 100%;\n\tbackground-color: rgba(255, 255, 255, 0.2);\n\ttransition: background-color 0.2s ease-out;\n\tposition: fixed;\n\tz-index: 10;\n\n\t#mobile-nav-bg {\n\t\twidth: 80%;\n\t\tbackground-color: $clr-bg;\n\t}\n\n\t#btn-ctn {\n\t\twidth: 20%;\n\t}\n\n\tbutton {\n\t\tbackground: none;\n\t\tcolor: $clr-black;\n\t\tfont-size: rem(40);\n\t\tpadding-left: rem(16);\n\t\tposition: relative;\n\t\ttop: rem(24);\n\t}\n\n\t#mobile-nav-ctn {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(32);\n\t\tfont-size: rem(20);\n\t\tpadding: rem(32);\n\t}\n}\n\n.active {\n\tbackground-color: rgba(255, 255, 255, 0.8);\n\tvisibility: visible;\n\topacity: 1;\n}\n"],"sourceRoot":""}]);
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
const mobileNavCtn = document.querySelector(".mobile-nav");
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
		mobileNavCtn.classList.add("active");
	});

	mobileNavExit.addEventListener("click", () => {
		mobileNavCtn.classList.remove("active");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlsaWJyYXJ5LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw4NEJBQTg0QixVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sUUFBUSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxRQUFRLFdBQVcsT0FBTyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksWUFBWSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE9BQU8sVUFBVSxXQUFXLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE9BQU8sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFFBQVEsTUFBTSxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFFBQVEsT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLFFBQVEsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsUUFBUSxRQUFRLFVBQVUsV0FBVyxPQUFPLFFBQVEsVUFBVSxRQUFRLFFBQVEsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsUUFBUSxRQUFRLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxTQUFTLFFBQVEsV0FBVyxXQUFXLFVBQVUsd0RBQXdELHVCQUF1QixzQkFBc0IsVUFBVSxvQkFBb0IsOEJBQThCLEdBQUcsVUFBVSwrQkFBK0IsdUJBQXVCLHNCQUFzQiw4QkFBOEIscUJBQXFCLEdBQUcsV0FBVyxvQkFBb0IsR0FBRyxVQUFVLHNDQUFzQyx3QkFBd0IsNEJBQTRCLHFDQUFxQyxxQkFBcUIsR0FBRyw4QkFBOEIsMkJBQTJCLEdBQUcsT0FBTyxjQUFjLGVBQWUsa0JBQWtCLEdBQUcseUJBQXlCLG1CQUFtQixHQUFHLGtCQUFrQixjQUFjLHFCQUFxQixHQUFHLGFBQWEsdUJBQXVCLHFCQUFxQixxQkFBcUIsR0FBRyxRQUFRLHdCQUF3QixxQkFBcUIsR0FBRyw4QkFBOEIsMEJBQTBCLEdBQUcsMENBQTBDLGVBQWUsMEJBQTBCLEtBQUssR0FBRyw2Q0FBNkMsZUFBZSxzQkFBc0IsS0FBSyxHQUFHLGNBQWMseUJBQXlCLG1CQUFtQixHQUFHLFlBQVksb0JBQW9CLDZDQUE2QyxHQUFHLG9CQUFvQixrQkFBa0IsbUNBQW1DLHdCQUF3QixHQUFHLFFBQVEscUJBQXFCLGtCQUFrQixjQUFjLEdBQUcsUUFBUSwyQkFBMkIsMkJBQTJCLEdBQUcsY0FBYyw0QkFBNEIsR0FBRyxrQkFBa0IsNEJBQTRCLEdBQUcscUJBQXFCLGtCQUFrQixrQkFBa0IscUJBQXFCLDJCQUEyQixnQkFBZ0IsNEJBQTRCLEdBQUcsZ0NBQWdDLG9CQUFvQixnQkFBZ0Isc0NBQXNDLDRCQUE0QixHQUFHLDhDQUE4QyxZQUFZLG9CQUFvQixLQUFLLEdBQUcsd0NBQXdDLHNCQUFzQixvQkFBb0IsS0FBSyxxQkFBcUIsb0JBQW9CLEtBQUssR0FBRyw2Q0FBNkMsWUFBWSxzQkFBc0IsS0FBSyxnQkFBZ0IsdUJBQXVCLEtBQUssR0FBRyx3Q0FBd0MsZ0JBQWdCLHVCQUF1QixLQUFLLEdBQUcsU0FBUyxrQkFBa0IsMkJBQTJCLHVCQUF1QixpQkFBaUIseUJBQXlCLG1CQUFtQix3QkFBd0IsR0FBRyxrQkFBa0Isa0JBQWtCLHdCQUF3QixnQkFBZ0IsR0FBRyxzQkFBc0IsZUFBZSxHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxzQkFBc0IsZUFBZSx3QkFBd0IsR0FBRywwQkFBMEIsMkJBQTJCLHFCQUFxQixHQUFHLG1CQUFtQixrQkFBa0IsMkJBQTJCLDBCQUEwQixnQkFBZ0IsZ0JBQWdCLEdBQUcsdUNBQXVDLHVCQUF1QixHQUFHLHNCQUFzQixrQkFBa0IsMkJBQTJCLGdCQUFnQixHQUFHLHVDQUF1QyxrQkFBa0IsbUNBQW1DLHdCQUF3QixHQUFHLHlDQUF5QyxvQkFBb0IscUJBQXFCLEdBQUcsdUNBQXVDLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLDZDQUE2Qyx1QkFBdUIsR0FBRyxtQkFBbUIsMEJBQTBCLEdBQUcscUJBQXFCLDBCQUEwQixnQkFBZ0IsR0FBRyxrQ0FBa0Msa0JBQWtCLG9CQUFvQiw0QkFBNEIsZ0JBQWdCLEdBQUcsNEJBQTRCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGdCQUFnQixlQUFlLEdBQUcsK0JBQStCLHVCQUF1QixHQUFHLG9DQUFvQyxrQkFBa0IsNEJBQTRCLHdCQUF3QixtQkFBbUIsa0JBQWtCLHNDQUFzQywyQkFBMkIsR0FBRyx3Q0FBd0MsdUJBQXVCLHNCQUFzQixHQUFHLDBDQUEwQyxXQUFXLDJCQUEyQixLQUFLLEdBQUcsd0NBQXdDLFVBQVUsc0JBQXNCLEtBQUssb0JBQW9CLDZCQUE2QixrQkFBa0IsS0FBSywrQ0FBK0Msa0JBQWtCLEtBQUssd0JBQXdCLGdCQUFnQixLQUFLLDJDQUEyQyx5QkFBeUIsS0FBSyw4QkFBOEIsaUJBQWlCLEtBQUssR0FBRyw2Q0FBNkMsV0FBVyxnQkFBZ0IsMkJBQTJCLEtBQUsscUJBQXFCLGdCQUFnQixLQUFLLDJDQUEyQyx3QkFBd0IsS0FBSyw4QkFBOEIsaUJBQWlCLEtBQUssMkNBQTJDLGtCQUFrQixLQUFLLEdBQUcsd0NBQXdDLGlDQUFpQywwQkFBMEIsS0FBSyxHQUFHLFlBQVksb0JBQW9CLG9CQUFvQixxQkFBcUIsZUFBZSxHQUFHLG9CQUFvQixvQkFBb0IsR0FBRywrQ0FBK0MsY0FBYyx1QkFBdUIsd0JBQXdCLEtBQUssR0FBRyxVQUFVLDRCQUE0Qix1QkFBdUIsNkJBQTZCLDRCQUE0Qix5Q0FBeUMsaUJBQWlCLHNDQUFzQyxHQUFHLGtCQUFrQixvQkFBb0IseUNBQXlDLEdBQUcsZ0JBQWdCLG1CQUFtQixHQUFHLCtDQUErQyxZQUFZLHNCQUFzQixLQUFLLEdBQUcsVUFBVSxrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsY0FBYyxvQkFBb0Isb0JBQW9CLDBDQUEwQyxHQUFHLGNBQWMsa0JBQWtCLGNBQWMsR0FBRyxZQUFZLDRCQUE0QiwyQkFBMkIsR0FBRyxrQkFBa0IsMkJBQTJCLEdBQUcsa0JBQWtCLHVCQUF1Qix1QkFBdUIsR0FBRyxtQkFBbUIsdUJBQXVCLGFBQWEsY0FBYyxxQ0FBcUMsR0FBRyxvQkFBb0IsZ0JBQWdCLEdBQUcsK0NBQStDLHFCQUFxQix3QkFBd0IsS0FBSyxHQUFHLGlCQUFpQixrQkFBa0IsMkJBQTJCLHNCQUFzQixlQUFlLEdBQUcsMEJBQTBCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLGtCQUFrQixHQUFHLDhCQUE4QixlQUFlLGlCQUFpQixHQUFHLGtDQUFrQyxrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsY0FBYyxlQUFlLEdBQUcsb0NBQW9DLHVCQUF1QixvQkFBb0IsR0FBRyw4Q0FBOEMsbUJBQW1CLDJCQUEyQixLQUFLLEdBQUcsd0NBQXdDLG1CQUFtQixrQkFBa0IsS0FBSyxvQ0FBb0Msa0JBQWtCLEtBQUssR0FBRyx3Q0FBd0MsNEJBQTRCLDZCQUE2QixLQUFLLGdDQUFnQyxrQkFBa0IsS0FBSyw2Q0FBNkMsa0JBQWtCLEtBQUssK0NBQStDLHNCQUFzQixLQUFLLHdDQUF3QyxxQ0FBcUMsS0FBSyxHQUFHLDZDQUE2QyxtQkFBbUIsZ0JBQWdCLDJCQUEyQixLQUFLLEdBQUcsb0JBQW9CLGtCQUFrQixHQUFHLDBCQUEwQixzQkFBc0IsNENBQTRDLGVBQWUsR0FBRyw2QkFBNkIsa0JBQWtCLDJCQUEyQixxQkFBcUIsY0FBYyxnQkFBZ0IsR0FBRyw2QkFBNkIscUJBQXFCLEdBQUcsNEJBQTRCLHNCQUFzQixlQUFlLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLEdBQUcsd0NBQXdDLG9CQUFvQixHQUFHLDJDQUEyQyxrQkFBa0IsMkJBQTJCLGdCQUFnQixxQkFBcUIsaUNBQWlDLEdBQUcsK0NBQStDLHVCQUF1Qix1QkFBdUIscUJBQXFCLDBCQUEwQixHQUFHLCtDQUErQyxzQkFBc0IscUJBQXFCLHVCQUF1QixHQUFHLDBDQUEwQyx1QkFBdUIscUJBQXFCLDBCQUEwQix1QkFBdUIsR0FBRyw4Q0FBOEMseURBQXlELDJCQUEyQixLQUFLLEdBQUcsd0NBQXdDLGlEQUFpRCxzQkFBc0IsS0FBSyxpREFBaUQsd0JBQXdCLEtBQUssR0FBRyx3Q0FBd0MsNEJBQTRCLG9CQUFvQixLQUFLLDhCQUE4QixrQkFBa0IsS0FBSyxHQUFHLDZDQUE2QyxzQkFBc0Isd0JBQXdCLEtBQUssOEJBQThCLHNCQUFzQixnQkFBZ0IsS0FBSyxHQUFHLGtCQUFrQixrQkFBa0Isc0JBQXNCLG1DQUFtQyx3QkFBd0IsY0FBYyxHQUFHLHNCQUFzQixlQUFlLDBCQUEwQixHQUFHLDhDQUE4QyxvQkFBb0IsMkJBQTJCLEtBQUssR0FBRyx3Q0FBd0MsT0FBTyxzQkFBc0IsS0FBSyxHQUFHLHdDQUF3QyxvQkFBb0IsNkJBQTZCLEtBQUssd0JBQXdCLGtCQUFrQixLQUFLLEdBQUcsd0NBQXdDLG9CQUFvQiwyQkFBMkIsS0FBSyxHQUFHLGlCQUFpQixrQkFBa0IsR0FBRyx1QkFBdUIsc0JBQXNCLDRDQUE0QyxlQUFlLEdBQUcsMEJBQTBCLGtCQUFrQiwyQkFBMkIscUJBQXFCLGNBQWMsZ0JBQWdCLEdBQUcseUJBQXlCLHNCQUFzQixlQUFlLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLEdBQUcsMENBQTBDLGtCQUFrQiwyQkFBMkIsY0FBYyx3QkFBd0IsR0FBRyw0QkFBNEIsc0JBQXNCLHFCQUFxQixHQUFHLDJCQUEyQiwwQkFBMEIsR0FBRyw2QkFBNkIsZ0JBQWdCLGlCQUFpQiwwQkFBMEIscUJBQXFCLEdBQUcsa0NBQWtDLHlCQUF5QixHQUFHLDhDQUE4QyxtREFBbUQsMkJBQTJCLEtBQUssR0FBRyx3Q0FBd0MseUJBQXlCLG9CQUFvQixLQUFLLDJCQUEyQixrQkFBa0IsS0FBSyxHQUFHLDZDQUE2QywyQkFBMkIsMkJBQTJCLGdCQUFnQixLQUFLLDhCQUE4Qix3QkFBd0IsS0FBSyw0Q0FBNEMsa0JBQWtCLEtBQUssR0FBRyxlQUFlLGtCQUFrQix1QkFBdUIsZUFBZSxpQkFBaUIsZ0JBQWdCLCtDQUErQywrQ0FBK0Msb0JBQW9CLGdCQUFnQixHQUFHLDhCQUE4QixlQUFlLHFDQUFxQyxHQUFHLHdCQUF3QixlQUFlLEdBQUcsc0JBQXNCLHFCQUFxQiwwQkFBMEIsc0JBQXNCLHVCQUF1Qix1QkFBdUIsZ0JBQWdCLEdBQUcsK0JBQStCLGtCQUFrQiwyQkFBMkIsY0FBYyx1QkFBdUIsa0JBQWtCLEdBQUcsYUFBYSwrQ0FBK0Msd0JBQXdCLGVBQWUsR0FBRyx1Q0FBdUMsZ0RBQWdELCtCQUErQixxQ0FBcUMsb0RBQW9ELHFEQUFxRCxxREFBcUQsNkJBQTZCLGtDQUFrQyw2QkFBNkIsK0JBQStCLDJCQUEyQixHQUFHLE9BQU8sY0FBYyxlQUFlLGtCQUFrQixHQUFHLHlCQUF5QixtQkFBbUIsR0FBRyxpQ0FBaUMsdUJBQXVCLGtCQUFrQixjQUFjLHFCQUFxQixHQUFHLGFBQWEsdUJBQXVCLHFCQUFxQixxQkFBcUIsR0FBRyxRQUFRLHVCQUF1QixxQkFBcUIsR0FBRyw4QkFBOEIsMEJBQTBCLEdBQUcsNkNBQTZDLGVBQWUseUJBQXlCLEtBQUssR0FBRyw2Q0FBNkMsZUFBZSx5QkFBeUIsS0FBSyxHQUFHLGlDQUFpQyxnQkFBZ0IseUJBQXlCLG1CQUFtQixHQUFHLGlDQUFpQyw0QkFBNEIsWUFBWSx1QkFBdUIsNENBQTRDLEdBQUcsb0JBQW9CLGtCQUFrQixtQ0FBbUMsd0JBQXdCLEdBQUcsUUFBUSxxQkFBcUIsa0JBQWtCLGlCQUFpQixTQUFTLHVCQUF1Qiw2QkFBNkIsS0FBSyxlQUFlLHdCQUF3QixLQUFLLG1CQUFtQix3QkFBd0IsS0FBSyxHQUFHLHFCQUFxQixrQkFBa0IsbUJBQW1CLG9CQUFvQiwyQkFBMkIsZ0JBQWdCLDRCQUE0QixvQkFBb0IscUJBQXFCLGtCQUFrQixrQ0FBa0MsNkJBQTZCLEtBQUssR0FBRyw4Q0FBOEMsWUFBWSx1QkFBdUIsS0FBSyxHQUFHLDZDQUE2QyxzQkFBc0Isb0JBQW9CLEtBQUssdUJBQXVCLG9CQUFvQixLQUFLLEdBQUcsNkNBQTZDLFlBQVksdUJBQXVCLGFBQWEsNEJBQTRCLE9BQU8sS0FBSyxHQUFHLDZDQUE2QyxZQUFZLFdBQVcsNEJBQTRCLE9BQU8sS0FBSyxHQUFHLCtCQUErQiw4QkFBOEIsV0FBVyxrQkFBa0IsMkJBQTJCLHdCQUF3QixrQkFBa0IseUJBQXlCLG1CQUFtQix3QkFBd0IsZ0JBQWdCLG9CQUFvQiwwQkFBMEIsb0JBQW9CLGFBQWEsbUJBQW1CLE9BQU8sV0FBVyw2QkFBNkIsT0FBTyxhQUFhLG1CQUFtQiw0QkFBNEIsT0FBTyxLQUFLLHdCQUF3Qix1QkFBdUIsdUJBQXVCLEtBQUssaUJBQWlCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGtCQUFrQixvQkFBb0IsNkJBQTZCLDJCQUEyQixPQUFPLEtBQUssb0JBQW9CLG9CQUFvQiw2QkFBNkIsbUJBQW1CLDBCQUEwQixzQkFBc0IsdUNBQXVDLDRCQUE0QixhQUFhLDZCQUE2QiwyQkFBMkIsU0FBUyxPQUFPLEtBQUssaUNBQWlDLG9CQUFvQiw2QkFBNkIsbUJBQW1CLFlBQVksMkJBQTJCLE9BQU8sS0FBSyxpQkFBaUIsMEJBQTBCLEtBQUssbUJBQW1CLDBCQUEwQixrQkFBa0Isc0JBQXNCLHNCQUFzQix3QkFBd0IsZ0NBQWdDLHVCQUF1QixPQUFPLGdCQUFnQixzQkFBc0IsK0JBQStCLDRCQUE0QixxQkFBcUIsbUJBQW1CLGNBQWMsNkJBQTZCLFNBQVMsT0FBTyx3QkFBd0Isc0JBQXNCLGdDQUFnQyw0QkFBNEIseUJBQXlCLHdCQUF3QixvQ0FBb0MsZ0NBQWdDLGVBQWUsOEJBQThCLDZCQUE2QixTQUFTLE9BQU8sS0FBSyxHQUFHLDhDQUE4QyxXQUFXLGdDQUFnQyxLQUFLLEdBQUcsNkNBQTZDLFVBQVUseUJBQXlCLEtBQUssYUFBYSxnQkFBZ0IsK0JBQStCLHFCQUFxQiwyQkFBMkIsc0JBQXNCLFNBQVMsT0FBTyxzQkFBc0IscUJBQXFCLDRCQUE0QixhQUFhLCtCQUErQixXQUFXLFNBQVMsT0FBTyxxQkFBcUIsZ0JBQWdCLHFCQUFxQixTQUFTLE9BQU8sS0FBSyxHQUFHLDZDQUE2QyxXQUFXLG1CQUFtQiwrQkFBK0IsbUJBQW1CLHFCQUFxQixPQUFPLHNCQUFzQiwwQkFBMEIsYUFBYSwrQkFBK0IsV0FBVyxTQUFTLE9BQU8scUJBQXFCLGdCQUFnQixxQkFBcUIsU0FBUyxPQUFPLHFDQUFxQyxxQkFBcUIsT0FBTyxLQUFLLEdBQUcsNkNBQTZDLFdBQVcsbUJBQW1CLGdCQUFnQixjQUFjLCtCQUErQixXQUFXLFNBQVMsT0FBTyxLQUFLLEdBQUcsK0JBQStCLDhCQUE4QixjQUFjLG9CQUFvQixtQkFBbUIsb0JBQW9CLGVBQWUsR0FBRyxvQkFBb0Isb0JBQW9CLEdBQUcsNkNBQTZDLGNBQWMscUJBQXFCLHNCQUFzQixLQUFLLEdBQUcsK0JBQStCLDhCQUE4QixZQUFZLHNCQUFzQix1QkFBdUIsNkJBQTZCLDJCQUEyQiwrQkFBK0IsaUJBQWlCLHNDQUFzQyxHQUFHLGtCQUFrQixvQkFBb0IscUNBQXFDLEdBQUcsZ0JBQWdCLG1CQUFtQixHQUFHLDZDQUE2QyxZQUFZLHlCQUF5QixLQUFLLEdBQUcsK0JBQStCLDhCQUE4QixZQUFZLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixpQkFBaUIsdUJBQXVCLHFCQUFxQix5Q0FBeUMsV0FBVyxvQkFBb0IsbUJBQW1CLEtBQUssU0FBUyx3QkFBd0IsNkJBQTZCLEtBQUssZUFBZSx1QkFBdUIsS0FBSyxHQUFHLGlDQUFpQyxrQkFBa0IsdUJBQXVCLHVCQUF1QixVQUFVLHlCQUF5QixlQUFlLGdCQUFnQix1Q0FBdUMsS0FBSyxXQUFXLGtCQUFrQixLQUFLLEdBQUcsNkNBQTZDLGtCQUFrQixVQUFVLDJCQUEyQixPQUFPLEtBQUssR0FBRywrQkFBK0IsOEJBQThCLG1CQUFtQixrQkFBa0IsMkJBQTJCLHdCQUF3QixrQkFBa0IsZ0JBQWdCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLG1CQUFtQixhQUFhLG1CQUFtQixxQkFBcUIsT0FBTyxLQUFLLHdCQUF3QixvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsbUJBQW1CLGlCQUFpQixXQUFXLDRCQUE0QiwyQkFBMkIsT0FBTyxLQUFLLEdBQUcsOENBQThDLG1CQUFtQixnQ0FBZ0MsS0FBSyxHQUFHLDhDQUE4QyxtQkFBbUIsb0JBQW9CLDBCQUEwQixxQkFBcUIsT0FBTyxLQUFLLEdBQUcsNkNBQTZDLG1CQUFtQixnQkFBZ0IsK0JBQStCLGVBQWUsc0JBQXNCLFNBQVMsNEJBQTRCLHNCQUFzQixlQUFlLDRCQUE0QixXQUFXLFNBQVMsT0FBTyw4QkFBOEIsdUNBQXVDLE9BQU8sS0FBSyxHQUFHLDZDQUE2QyxtQkFBbUIsbUJBQW1CLCtCQUErQixLQUFLLEdBQUcsK0JBQStCLDhCQUE4QixzQkFBc0Isa0JBQWtCLGFBQWEsMEJBQTBCLDZDQUE2QyxpQkFBaUIsWUFBWSxzQkFBc0IsK0JBQStCLHlCQUF5QixxQkFBcUIscUJBQXFCLE9BQU8sWUFBWSx5QkFBeUIsT0FBTyxLQUFLLGVBQWUsMEJBQTBCLGlCQUFpQixvQkFBb0IsNkJBQTZCLG9CQUFvQixLQUFLLDJCQUEyQix5QkFBeUIsWUFBWSxzQkFBc0IsK0JBQStCLG9CQUFvQix5QkFBeUIscUNBQXFDLE9BQU8sZ0JBQWdCLDJCQUEyQiwyQkFBMkIseUJBQXlCLDhCQUE4QixPQUFPLGdCQUFnQiwyQkFBMkIseUJBQXlCLDJCQUEyQixPQUFPLFdBQVcsMkJBQTJCLHlCQUF5QiwrQkFBK0IsMkJBQTJCLE9BQU8sS0FBSyxHQUFHLDhDQUE4QyxzQkFBc0IsMkJBQTJCLGtDQUFrQyxPQUFPLEtBQUssR0FBRyw4Q0FBOEMsc0JBQXNCLDJCQUEyQixnQkFBZ0IsNkJBQTZCLFNBQVMsa0JBQWtCLDZCQUE2QixTQUFTLE9BQU8sS0FBSyxHQUFHLDZDQUE2QyxzQkFBc0IsYUFBYSxzQkFBc0IsT0FBTyxpQkFBaUIsb0JBQW9CLE9BQU8sS0FBSyxHQUFHLDZDQUE2QyxzQkFBc0IseUJBQXlCLGlCQUFpQiwyQkFBMkIscUJBQXFCLE9BQU8sS0FBSyxHQUFHLCtCQUErQiw4QkFBOEIsb0JBQW9CLGtCQUFrQix3QkFBd0IsbUNBQW1DLHdCQUF3QixpQkFBaUIsV0FBVyxpQkFBaUIsMEJBQTBCLEtBQUssR0FBRyw4Q0FBOEMsb0JBQW9CLGdDQUFnQyxLQUFLLEdBQUcsOENBQThDLE9BQU8seUJBQXlCLEtBQUssR0FBRyw2Q0FBNkMsb0JBQW9CLDZCQUE2QixhQUFhLG9CQUFvQixPQUFPLEtBQUssR0FBRyw2Q0FBNkMsb0JBQW9CLCtCQUErQixLQUFLLEdBQUcsK0JBQStCLDhCQUE4QixtQkFBbUIsa0JBQWtCLGFBQWEsMEJBQTBCLDZDQUE2QyxpQkFBaUIsWUFBWSxzQkFBc0IsK0JBQStCLHlCQUF5QixxQkFBcUIscUJBQXFCLE9BQU8sS0FBSyxlQUFlLDBCQUEwQixpQkFBaUIsb0JBQW9CLDZCQUE2QixvQkFBb0IsMEJBQTBCLHNCQUFzQiwrQkFBK0IscUJBQXFCLDRCQUE0QixPQUFPLFlBQVksMkJBQTJCLHlCQUF5QixPQUFPLFdBQVcsNEJBQTRCLE9BQU8sYUFBYSxvQkFBb0IscUJBQXFCLDZCQUE2Qiw0QkFBNEIsT0FBTyxLQUFLLDREQUE0RCxXQUFXLDZCQUE2QixPQUFPLEtBQUssR0FBRyw4Q0FBOEMsbUJBQW1CLDJCQUEyQixrQ0FBa0MsT0FBTyxLQUFLLEdBQUcsNkNBQTZDLG1CQUFtQixhQUFhLHNCQUFzQixPQUFPLGlCQUFpQixvQkFBb0IsT0FBTyxLQUFLLEdBQUcsNkNBQTZDLG1CQUFtQixlQUFlLGlDQUFpQyxxQkFBcUIsY0FBYyw2QkFBNkIsU0FBUyw0QkFBNEIsdUJBQXVCLFNBQVMsT0FBTyxLQUFLLEdBQUcsK0JBQStCLDhCQUE4QixpQkFBaUIsa0JBQWtCLHVCQUF1QixlQUFlLGlCQUFpQixnQkFBZ0IsK0NBQStDLCtDQUErQyxvQkFBb0IsZ0JBQWdCLHNCQUFzQixpQkFBaUIsZ0NBQWdDLEtBQUssZ0JBQWdCLGlCQUFpQixLQUFLLGNBQWMsdUJBQXVCLHdCQUF3Qix5QkFBeUIsNEJBQTRCLHlCQUF5QixtQkFBbUIsS0FBSyx1QkFBdUIsb0JBQW9CLDZCQUE2QixtQkFBbUIseUJBQXlCLHVCQUF1QixLQUFLLEdBQUcsYUFBYSwrQ0FBK0Msd0JBQXdCLGVBQWUsR0FBRyxxQkFBcUI7QUFDdHQ5QjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2hxQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFtSjtBQUNuSjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDZIQUFPOzs7O0FBSTZGO0FBQ3JILE9BQU8saUVBQWUsNkhBQU8sSUFBSSw2SEFBTyxVQUFVLDZIQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYnFFOztBQUVyRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7OztBQ3RDdUI7O0FBRXZCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RnQjtBQUM0RDtBQUN4Qjs7QUFFcEQ7QUFDQSxDQUFDLDBFQUFzQjtBQUN2QixDQUFDLGlFQUFXO0FBQ1osQ0FBQyxpRUFBYTtBQUNkOzs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQWtDO0FBQzJCO0FBQzdCOztBQUVoQyw4Q0FBSTtBQUNKLHlFQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3M/MzIxZiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9qcy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvY29tcG9uZW50cy90b1RvcEJ0bi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvaW5pdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvcG9ydGZvbGlvL215bGlicmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyZjtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNCUpO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250OiBpbmhlcml0O1xufVxuXG5pbWcsXG5waWN0dXJlLFxuc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmgxLFxuaDIsXG5oMyB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cblxuaDEsXG5oMiB7XG4gIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cblxuaDMge1xuICBmb250LXNpemU6IDEuMzc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5hLFxuYTp2aXNpdGVkLFxuYTphY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gIGgxLFxuICBoMiB7XG4gICAgZm9udC1zaXplOiAzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICBoMSxcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTkuMzc1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuaGVhZGVyIHtcbiAgcGFkZGluZzogM3JlbSAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xufVxuXG4jaGVhZGVyLWxheW91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDNyZW07XG59XG51bCBhIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcbn1cbnVsIGE6aG92ZXIge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbn1cbnVsIC5hY3RpdmUtbmF2IHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG59XG5cbiNtb2JpbGUtbmF2LWJ0biB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAyLjVyZW07XG4gIGhlaWdodDogMy4xMjVyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNtb2JpbGUtbmF2LWJ0biAubW9iaWxlLWxpbmUge1xuICBoZWlnaHQ6IDAuMjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcbiAgaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAjZGVza3RvcC1uYXYtY3RuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNtb2JpbGUtbmF2LWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgfVxuICBoZWFkZXIgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDE1cmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMHJlbSkge1xuICBoZWFkZXIgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwcmVtO1xuICB9XG59XG4jaG9tZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEyLjVyZW0gMDtcbiAgZ2FwOiAxMi41cmVtO1xuICBtYXgtd2lkdGg6IDc1LjM3NXJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jaG9tZSAjd2VsY29tZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNy41cmVtO1xufVxuI2hvbWUgI3dlbGNvbWUgZGl2IHtcbiAgd2lkdGg6IDYwJTtcbn1cbiNob21lICN3ZWxjb21lIHAge1xuICBwYWRkaW5nLXRvcDogMS41cmVtO1xufVxuI2hvbWUgI3dlbGNvbWUgaW1nIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWF4LXdpZHRoOiAxOC43NXJlbTtcbn1cbiNob21lICNoZWFkZXItbG9jYXRpb24ge1xuICBjb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuI2hvbWUgI3Byb2plY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiA0OS42ODc1cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgZ2FwOiA3LjVyZW07XG59XG4jaG9tZSAjcHJvamVjdHMgI3Byb2plY3RzLW9uZS1saW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNob21lIC5wcm9qZWN0LWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMi41cmVtO1xufVxuI2hvbWUgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jaG9tZSAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyBwIHtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuI2hvbWUgI2Fib3V0LW1lLFxuI2hvbWUgI3NraWxscy1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVyZW07XG59XG4jaG9tZSAjYWJvdXQtbWUgaDIsXG4jaG9tZSAjc2tpbGxzLWN0biBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNob21lICNhYm91dC1tZSB7XG4gIG1heC13aWR0aDogNDEuMDYyNXJlbTtcbn1cbiNob21lICNza2lsbHMtY3RuIHtcbiAgbWF4LXdpZHRoOiA2MS45Mzc1cmVtO1xuICB3aWR0aDogMTAwJTtcbn1cbiNob21lICNza2lsbHMtY3RuICNza2lsbHMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNHJlbSAwO1xufVxuI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxLjVyZW07XG4gIHdpZHRoOiAyMCU7XG59XG4jaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwtaW1nLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYuNXJlbTtcbiAgd2lkdGg6IDYuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDAsIDAlLCA2NSUpO1xuICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xufVxuI2hvbWUgI3NraWxscy1jdG4gLnNraWxsLWltZy1jdG4gaW1nIHtcbiAgbWF4LWhlaWdodDogMi41cmVtO1xuICBtYXgtd2lkdGg6IDIuNXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcbiAgI2hvbWUge1xuICAgIHBhZGRpbmc6IDcuNXJlbSAzcmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xuICBib2R5IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgI2hvbWUgI3dlbGNvbWUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyLjVyZW07XG4gIH1cbiAgI2hvbWUgI3dlbGNvbWUgZGl2LFxuICAjaG9tZSAjd2VsY29tZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICNob21lIC5wcm9qZWN0LWN0biB7XG4gICAgZ2FwOiAycmVtO1xuICB9XG4gICNob21lIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHAge1xuICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgfVxuICAjaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwge1xuICAgIHdpZHRoOiAzMyU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgI2hvbWUge1xuICAgIGdhcDogNXJlbTtcbiAgICBwYWRkaW5nOiA1cmVtIDEuNXJlbTtcbiAgfVxuICAjaG9tZSAjcHJvamVjdHMge1xuICAgIGdhcDogM3JlbTtcbiAgfVxuICAjaG9tZSAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyBwIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICAjaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgI2hvbWUgI2Fib3V0LW1lLFxuICAjaG9tZSAjc2tpbGxzLWN0biB7XG4gICAgZ2FwOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIwcmVtKSB7XG4gICNob21lICNza2lsbHMtY3RuIC5za2lsbCBoMyB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgfVxufVxuI2J0bi10b3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAzLjEyNXJlbTtcbiAgYm90dG9tOiAzLjEyNXJlbTtcbiAgei1pbmRleDogMztcbn1cblxuI2J0bi10b3A6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgI2J0bi10b3Age1xuICAgIHJpZ2h0OiAxLjU2MjVyZW07XG4gICAgYm90dG9tOiAxLjU2MjVyZW07XG4gIH1cbn1cbmJ1dHRvbiB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW0gMy43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMy4xMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzUsIDc1JSwgNTglKTtcbiAgYm9yZGVyOiBub25lO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNSwgNzElLCAzOSUpO1xufVxuXG4uYnRuLXJlc2V0IHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDNyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgaGVpZ2h0OiAxOS41cmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xufVxuZm9vdGVyIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogM3JlbTtcbn1cbmZvb3RlciBhIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XG59XG5mb290ZXIgYTpob3ZlciB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XG59XG5cbi5tYWluLWJhbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW4tYmFubmVyIGgxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5tYWluLWJhbm5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICAubWFpbi1iYW5uZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG4jcHJvamVjdC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogNy41cmVtIDA7XG4gIGdhcDogMTVyZW07XG59XG4jcHJvamVjdC1saXN0IC5wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEuODc1cmVtO1xufVxuI3Byb2plY3QtbGlzdCAucHJvamVjdCBpbWcge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jcHJvamVjdC1saXN0IC5wcm9qZWN0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAzcmVtO1xuICB3aWR0aDogNTAlO1xufVxuI3Byb2plY3QtbGlzdCAucHJvamVjdC1jb250ZW50IHAge1xuICBtYXgtd2lkdGg6IDMyLjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxLjI1cmVtKSB7XG4gICNwcm9qZWN0LWxpc3Qge1xuICAgIHBhZGRpbmc6IDcuNXJlbSAzcmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NHJlbSkge1xuICAjcHJvamVjdC1saXN0IHtcbiAgICBnYXA6IDcuNXJlbTtcbiAgfVxuICAjcHJvamVjdC1saXN0IC5wcm9qZWN0LWNvbnRlbnQge1xuICAgIGdhcDogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAjcHJvamVjdC1saXN0IC5wcm9qZWN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3QgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtY29udGVudCBwIHtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gIH1cbiAgI3Byb2plY3QtbGlzdCAjY29mZmVlLXRpbWUtcHJvamVjdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gICNwcm9qZWN0LWxpc3Qge1xuICAgIGdhcDogNXJlbTtcbiAgICBwYWRkaW5nOiA1cmVtIDEuNXJlbTtcbiAgfVxufVxuI2V4cGVyaWVuY2UtcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIHtcbiAgcGFkZGluZzogNy41cmVtIDA7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzMlKTtcbiAgd2lkdGg6IDI1JTtcbn1cbiNleHBlcmllbmNlLXBhZ2UgYXNpZGUgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDVyZW07XG4gIGdhcDogMS41cmVtO1xufVxuI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSBoNCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4jZXhwZXJpZW5jZS1wYWdlIHNlY3Rpb24ge1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAgd2lkdGg6IDc1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA3LjVyZW07XG59XG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQge1xuICBmb250LXNpemU6IDFyZW07XG59XG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcbiAgbGlzdC1zdHlsZTogZGlzYztcbiAgbGlzdC1zdHlsZS1wb3NpdGlvbjogb3V0c2lkZTtcbn1cbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCAuZGF0ZXMge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xuICAjZXhwZXJpZW5jZS1wYWdlIGFzaWRlLFxuICAjZXhwZXJpZW5jZS1wYWdlIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDcuNXJlbSAzcmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NHJlbSkge1xuICAjZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLmRhdGVzIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gICNleHBlcmllbmNlLXBhZ2UgYXNpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI2V4cGVyaWVuY2UtcGFnZSBzZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICAjZXhwZXJpZW5jZS1wYWdlIHtcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgfVxuICAjZXhwZXJpZW5jZS1wYWdlIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDVyZW0gMDtcbiAgICBnYXA6IDVyZW07XG4gIH1cbn1cbiNhYm91dC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogNy41cmVtIDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzcmVtO1xufVxuI2Fib3V0LWNvbnRlbnQgaW1nIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWF4LXdpZHRoOiA0OS42ODc1cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcbiAgI2Fib3V0LWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDcuNXJlbSAzcmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NHJlbSkge1xuICBwIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gICNhYm91dC1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gICNhYm91dC1jb250ZW50IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gICNhYm91dC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiA1cmVtIDEuNXJlbTtcbiAgfVxufVxuLnByb2plY3QtcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJvamVjdC1wYWdlIGFzaWRlIHtcbiAgcGFkZGluZzogNy41cmVtIDA7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzMlKTtcbiAgd2lkdGg6IDI1JTtcbn1cbi5wcm9qZWN0LXBhZ2UgYXNpZGUgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDVyZW07XG4gIGdhcDogMS41cmVtO1xufVxuLnByb2plY3QtcGFnZSBzZWN0aW9uIHtcbiAgcGFkZGluZzogNy41cmVtIDA7XG4gIHdpZHRoOiA3NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNy41cmVtO1xufVxuLnByb2plY3QtcGFnZSBzZWN0aW9uIC5wcm9qZWN0LXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDNyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gaDIge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBwIHtcbiAgbWF4LXdpZHRoOiA0OS42ODc1cmVtO1xufVxuLnByb2plY3QtcGFnZSBzZWN0aW9uIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDI4LjEyNXJlbTtcbiAgbWF4LXdpZHRoOiA1MHJlbTtcbn1cbi5wcm9qZWN0LXBhZ2UgI3ZlcnNpb24tb25lIGltZyB7XG4gIG1heC1oZWlnaHQ6IDQzLjc1cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcbiAgLnByb2plY3QtcGFnZSBhc2lkZSxcbiAgLnByb2plY3QtcGFnZSBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgLnByb2plY3QtcGFnZSBhc2lkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucHJvamVjdC1wYWdlIHNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gIC5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNXJlbSAxLjVyZW07XG4gICAgZ2FwOiA1cmVtO1xuICB9XG4gIC5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBoMiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLnByb2plY3QtcGFnZSBzZWN0aW9uIC5wcm9qZWN0LXNlY3Rpb24ge1xuICAgIGdhcDogMS41cmVtO1xuICB9XG59XG4ubW9iaWxlLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTA7XG59XG4ubW9iaWxlLW5hdiAjbW9iaWxlLW5hdi1iZyB7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNCUpO1xufVxuLm1vYmlsZS1uYXYgI2J0bi1jdG4ge1xuICB3aWR0aDogMjAlO1xufVxuLm1vYmlsZS1uYXYgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMS41cmVtO1xufVxuLm1vYmlsZS1uYXYgI21vYmlsZS1uYXYtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19nZW5lcmFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19jb250YWluZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX21haW5Ib21lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX3RvVG9wQnRuLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX21haW5CYW5uZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fcG9ydGZvbGlvUGFnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19leHBlcmllbmNlUGFnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19hYm91dFBhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fcHJvamVjdFBhZ2VzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX21vYmlsZU5hdi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0MsZUFBQTtBQ0hEOztBRE9BO0VBQ0MsK0JFVmM7RUZXZCxtQkFBQTtFQUNBLHVCR05XO0VIT1gsZ0NHWlE7RUhhUixnQkFBQTtBQ0pEOztBR1ZBOzs7RUFHQyxzQkFBQTtBSGFEOztBR1ZBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FIYUQ7O0FHVkE7OztFQUdDLGNBQUE7QUhhRDs7QUl6QkE7OztFQUdDLFNBQUE7RUFDQSxnQkFBQTtBSjRCRDs7QUl6QkE7O0VBRUMsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FKNEJEOztBSXpCQTtFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7QUo0QkQ7O0FJekJBOzs7RUFHQyxxQkFBQTtBSjRCRDs7QUl6QkE7RUFDQzs7SUFFQyxtQkFBQTtFSjRCQTtBQUNGO0FJekJBO0VBQ0M7O0lBRUMsZUFBQTtFSjJCQTtBQUNGO0FLaEVBO0VBQ0Msb0JBQUE7RUFDQSxjQUFBO0FMa0VEOztBTW5FQTtFQUNDLGVBQUE7RUFDQSx3Q0FBQTtBTnNFRDs7QU1uRUE7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBTnNFRDs7QU1uRUE7RUFDQyxnQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FOc0VEO0FNcEVDO0VBQ0Msc0JKWFM7RUlZVCxzQkFBQTtBTnNFRjtBTW5FQztFQUNDLHVCSm5CVTtBRndGWjtBTWxFQztFQUNDLHVCSnZCVTtBRjJGWjs7QU1oRUE7RUFDQyxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QU5tRUQ7QU1qRUM7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlDSm5DUztFSW9DVCx1QkFBQTtBTm1FRjs7QU0vREE7RUFDQztJQUNDLGFBQUE7RU5rRUE7QUFDRjtBTS9EQTtFQUNDO0lBQ0MsYUFBQTtFTmlFQTtFTTlERDtJQUNDLGFBQUE7RU5nRUE7QUFDRjtBTTdEQTtFQUNDO0lBQ0MsZUFBQTtFTitEQTtFTTdEQTtJQUNDLGdCQUFBO0VOK0REO0FBQ0Y7QU0zREE7RUFFRTtJQUNDLGdCQUFBO0VONEREO0FBQ0Y7QU94SUE7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBUDBJRDtBT3hJQztFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QVAwSUY7QU94SUU7RUFDQyxVQUFBO0FQMElIO0FPdklFO0VBQ0MsbUJBQUE7QVB5SUg7QU90SUU7RUFDQyxVQUFBO0VBQ0EsbUJBQUE7QVB3SUg7QU9wSUM7RUFDQyxzQkx2QlM7RUt3QlQsZ0JBQUE7QVBzSUY7QU9uSUM7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FQcUlGO0FPbklFO0VBQ0Msa0JBQUE7QVBxSUg7QU9qSUM7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FQbUlGO0FPaklFO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QVBtSUg7QU9qSUc7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QVBtSUo7QU85SEM7O0VBRUMsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBUGdJRjtBTzlIRTs7RUFDQyxrQkFBQTtBUGlJSDtBTzdIQztFQUNDLHFCQUFBO0FQK0hGO0FPNUhDO0VBQ0MscUJBQUE7RUFDQSxXQUFBO0FQOEhGO0FPNUhFO0VBQ0MsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QVA4SEg7QU8zSEU7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FQNkhIO0FPM0hHO0VBQ0Msa0JBQUE7QVA2SEo7QU96SEU7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtBUDJISDtBT3pIRztFQUNDLGtCQUFBO0VBQ0EsaUJBQUE7QVAySEo7O0FPckhBO0VBQ0M7SUFDQyxvQkFBQTtFUHdIQTtBQUNGO0FPckhBO0VBQ0M7SUFDQyxlQUFBO0VQdUhBO0VPbkhBO0lBQ0Msc0JBQUE7SUFDQSxXQUFBO0VQcUhEO0VPbkhDOztJQUVDLFdBQUE7RVBxSEY7RU9qSEE7SUFDQyxTQUFBO0VQbUhEO0VPaEhFO0lBQ0Msa0JBQUE7RVBrSEg7RU81R0M7SUFDQyxVQUFBO0VQOEdGO0FBQ0Y7QU96R0E7RUFDQztJQUNDLFNBQUE7SUFDQSxvQkFBQTtFUDJHQTtFT3pHQTtJQUNDLFNBQUE7RVAyR0Q7RU90R0U7SUFDQyxpQkFBQTtFUHdHSDtFT2xHQztJQUNDLFVBQUE7RVBvR0Y7RU9oR0E7O0lBRUMsV0FBQTtFUGtHRDtBQUNGO0FPOUZBO0VBSUk7SUFDQyxtQkFBQTtFUDZGSDtBQUNGO0FROVJBO0VBQ0MsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QVJnU0Q7O0FRN1JBO0VBQ0MsZUFBQTtBUmdTRDs7QVE3UkE7RUFDQztJQUNDLGdCQUFBO0lBQ0EsaUJBQUE7RVJnU0E7QUFDRjtBUy9TQTtFQUNDLHVCUEVXO0VPRFgsa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NQTlM7RU9PVCxZQUFBO0VBQ0EsaUNBQUE7QVRpVEQ7O0FTOVNBO0VBQ0MsZUFBQTtFQUNBLG9DUFplO0FGNlRoQjs7QVM5U0E7RUFDQyxjQUFBO0FUaVREOztBUzlTQTtFQUNDO0lBQ0MsZUFBQTtFVGlUQTtBQUNGO0FVdlVBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0FWeVVEO0FVdlVDO0VBQ0MsYUFBQTtFQUNBLFNBQUE7QVZ5VUY7QVV0VUM7RUFDQyx1QlJiVTtFUWNWLHNCQUFBO0FWd1VGO0FVclVDO0VBQ0Msc0JSZlM7QUZzVlg7O0FXN1ZBO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtBWGdXRDtBVzlWQztFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBWGdXRjtBVzdWQztFQUNDLFdBQUE7QVgrVkY7O0FXM1ZBO0VBRUU7SUFDQyxpQkFBQTtFWDZWRDtBQUNGO0FZaFhBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0Faa1hEO0FZaFhDO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0Faa1hGO0FZaFhFO0VBQ0MsVUFBQTtFQUNBLFlBQUE7QVprWEg7QVk5V0M7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QVpnWEY7QVk5V0U7RUFDQyxrQkFBQTtFQUNBLGVBQUE7QVpnWEg7O0FZM1dBO0VBQ0M7SUFDQyxvQkFBQTtFWjhXQTtBQUNGO0FZM1dBO0VBQ0M7SUFDQyxXQUFBO0VaNldBO0VZM1dBO0lBQ0MsV0FBQTtFWjZXRDtBQUNGO0FZeldBO0VBRUU7SUFDQyxzQkFBQTtFWjBXRDtFWXhXQztJQUNDLFdBQUE7RVowV0Y7RVl2V0M7SUFDQyxXQUFBO0VaeVdGO0VZdldFO0lBQ0MsZUFBQTtFWnlXSDtFWXBXQTtJQUNDLDhCQUFBO0Vac1dEO0FBQ0Y7QVlsV0E7RUFDQztJQUNDLFNBQUE7SUFDQSxvQkFBQTtFWm9XQTtBQUNGO0FhamJBO0VBQ0MsYUFBQTtBYm1iRDtBYWpiQztFQUNDLGlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxVQUFBO0FibWJGO0FhamJFO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBYm1iSDtBYWhiRTtFQUNDLGdCQUFBO0Fia2JIO0FhOWFDO0VBQ0MsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBYmdiRjtBYTdhQztFQUNDLGVBQUE7QWIrYUY7QWE3YUU7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBYithSDtBYTVhRTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FiOGFIO0FhM2FFO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FiNmFIO0FhMWFFO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QWI0YUg7O0FhdmFBO0VBRUU7O0lBRUMsb0JBQUE7RWJ5YUQ7QUFDRjtBYXJhQTtFQUdHO0lBQ0MsZUFBQTtFYnFhRjtFYWxhQztJQUNDLGlCQUFBO0Vib2FGO0FBQ0Y7QWEvWkE7RUFFRTtJQUNDLGFBQUE7RWJnYUQ7RWE3WkE7SUFDQyxXQUFBO0ViK1pEO0FBQ0Y7QWEzWkE7RUFDQztJQUNDLGlCQUFBO0ViNlpBO0VhM1pBO0lBQ0MsZUFBQTtJQUNBLFNBQUE7RWI2WkQ7QUFDRjtBY3JnQkE7RUFDQyxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBZHVnQkQ7QWNyZ0JDO0VBQ0MsVUFBQTtFQUNBLHFCQUFBO0FkdWdCRjs7QWNuZ0JBO0VBQ0M7SUFDQyxvQkFBQTtFZHNnQkE7QUFDRjtBY25nQkE7RUFDQztJQUNDLGVBQUE7RWRxZ0JBO0FBQ0Y7QWNsZ0JBO0VBQ0M7SUFDQyxzQkFBQTtFZG9nQkE7RWNsZ0JBO0lBQ0MsV0FBQTtFZG9nQkQ7QUFDRjtBY2hnQkE7RUFDQztJQUNDLG9CQUFBO0Vka2dCQTtBQUNGO0FleGlCQTtFQUNDLGFBQUE7QWYwaUJEO0FleGlCQztFQUNDLGlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxVQUFBO0FmMGlCRjtBZXhpQkU7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FmMGlCSDtBZXRpQkM7RUFDQyxpQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0Fmd2lCRjtBZXRpQkU7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QWZ3aUJIO0FlcmlCRTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7QWZ1aUJIO0FlcGlCRTtFQUNDLHFCQUFBO0Fmc2lCSDtBZW5pQkU7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QWZxaUJIO0FlL2hCRTtFQUNDLG9CQUFBO0FmaWlCSDs7QWU1aEJBO0VBRUU7O0lBRUMsb0JBQUE7RWY4aEJEO0FBQ0Y7QWUxaEJBO0VBRUU7SUFDQyxhQUFBO0VmMmhCRDtFZXhoQkE7SUFDQyxXQUFBO0VmMGhCRDtBQUNGO0FldGhCQTtFQUVFO0lBQ0Msb0JBQUE7SUFDQSxTQUFBO0VmdWhCRDtFZXJoQkM7SUFDQyxpQkFBQTtFZnVoQkY7RWVwaEJDO0lBQ0MsV0FBQTtFZnNoQkY7QUFDRjtBZ0IvbUJBO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FoQmluQkQ7QWdCL21CQztFQUNDLFVBQUE7RUFDQSxnQ2RmTztBRmdvQlQ7QWdCOW1CQztFQUNDLFVBQUE7QWhCZ25CRjtBZ0I3bUJDO0VBQ0MsZ0JBQUE7RUFDQSxxQmRkVTtFY2VWLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QWhCK21CRjtBZ0I1bUJDO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBaEI4bUJGOztBZ0IxbUJBO0VBQ0MsMENBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QWhCNm1CRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcImNvbG9yc1xcXCIgYXMgKjtcXG5AdXNlIFxcXCJmb250c1xcXCIgYXMgKjtcXG5cXG5odG1sIHtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Ly9zY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSB7XFxuXFx0Zm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxuXFx0Zm9udC1zaXplOiByZW0oMTgpO1xcblxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItYmc7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXCIsXCJodG1sIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJmO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA0JSk7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG4gIG1hcmdpbjogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMy43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDEuMzc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xcbiAgaDEsXFxuICBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMy4xMjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gIGgxLFxcbiAgaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxufVxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA5OS4zNzVyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDNyZW0gMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XFxufVxcblxcbiNoZWFkZXItbGF5b3V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogM3JlbTtcXG59XFxudWwgYSB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcXG59XFxudWwgYTpob3ZlciB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG59XFxudWwgLmFjdGl2ZS1uYXYge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxufVxcblxcbiNtb2JpbGUtbmF2LWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMy4xMjVyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI21vYmlsZS1uYXYtYnRuIC5tb2JpbGUtbGluZSB7XFxuICBoZWlnaHQ6IDAuMjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcXG4gIGhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XFxuICAjZGVza3RvcC1uYXYtY3RuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gICNtb2JpbGUtbmF2LWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gIGhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gIH1cXG4gIGhlYWRlciBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDE1cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMHJlbSkge1xcbiAgaGVhZGVyIGltZyB7XFxuICAgIG1heC13aWR0aDogMTByZW07XFxuICB9XFxufVxcbiNob21lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTIuNXJlbSAwO1xcbiAgZ2FwOiAxMi41cmVtO1xcbiAgbWF4LXdpZHRoOiA3NS4zNzVyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNob21lICN3ZWxjb21lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA3LjVyZW07XFxufVxcbiNob21lICN3ZWxjb21lIGRpdiB7XFxuICB3aWR0aDogNjAlO1xcbn1cXG4jaG9tZSAjd2VsY29tZSBwIHtcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxufVxcbiNob21lICN3ZWxjb21lIGltZyB7XFxuICB3aWR0aDogNDAlO1xcbiAgbWF4LXdpZHRoOiAxOC43NXJlbTtcXG59XFxuI2hvbWUgI2hlYWRlci1sb2NhdGlvbiB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuI2hvbWUgI3Byb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiA0OS42ODc1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDcuNXJlbTtcXG59XFxuI2hvbWUgI3Byb2plY3RzICNwcm9qZWN0cy1vbmUtbGluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jaG9tZSAucHJvamVjdC1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIuNXJlbTtcXG59XFxuI2hvbWUgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNob21lIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHAge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuI2hvbWUgI2Fib3V0LW1lLFxcbiNob21lICNza2lsbHMtY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cmVtO1xcbn1cXG4jaG9tZSAjYWJvdXQtbWUgaDIsXFxuI2hvbWUgI3NraWxscy1jdG4gaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jaG9tZSAjYWJvdXQtbWUge1xcbiAgbWF4LXdpZHRoOiA0MS4wNjI1cmVtO1xcbn1cXG4jaG9tZSAjc2tpbGxzLWN0biB7XFxuICBtYXgtd2lkdGg6IDYxLjkzNzVyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuI2hvbWUgI3NraWxscy1jdG4gI3NraWxscy1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNHJlbSAwO1xcbn1cXG4jaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxLjVyZW07XFxuICB3aWR0aDogMjAlO1xcbn1cXG4jaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwgaDMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwtaW1nLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA2LjVyZW07XFxuICB3aWR0aDogNi41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDAsIDAlLCA2NSUpO1xcbiAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcXG59XFxuI2hvbWUgI3NraWxscy1jdG4gLnNraWxsLWltZy1jdG4gaW1nIHtcXG4gIG1heC1oZWlnaHQ6IDIuNXJlbTtcXG4gIG1heC13aWR0aDogMi41cmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NHJlbSkge1xcbiAgI2hvbWUge1xcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcXG4gIGJvZHkge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAjaG9tZSAjd2VsY29tZSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMi41cmVtO1xcbiAgfVxcbiAgI2hvbWUgI3dlbGNvbWUgZGl2LFxcbiAgI2hvbWUgI3dlbGNvbWUgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAjaG9tZSAucHJvamVjdC1jdG4ge1xcbiAgICBnYXA6IDJyZW07XFxuICB9XFxuICAjaG9tZSAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyBwIHtcXG4gICAgZm9udC1zaXplOiAzLjc1cmVtO1xcbiAgfVxcbiAgI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIHtcXG4gICAgd2lkdGg6IDMzJTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgI2hvbWUge1xcbiAgICBnYXA6IDVyZW07XFxuICAgIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xcbiAgfVxcbiAgI2hvbWUgI3Byb2plY3RzIHtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgfVxcbiAgI2hvbWUgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcgcCB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgfVxcbiAgI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG4gICNob21lICNhYm91dC1tZSxcXG4gICNob21lICNza2lsbHMtY3RuIHtcXG4gICAgZ2FwOiAyLjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIwcmVtKSB7XFxuICAjaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwgaDMge1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgfVxcbn1cXG4jYnRuLXRvcCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMy4xMjVyZW07XFxuICBib3R0b206IDMuMTI1cmVtO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuI2J0bi10b3A6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICAjYnRuLXRvcCB7XFxuICAgIHJpZ2h0OiAxLjU2MjVyZW07XFxuICAgIGJvdHRvbTogMS41NjI1cmVtO1xcbiAgfVxcbn1cXG5idXR0b24ge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBwYWRkaW5nOiAwLjc1cmVtIDMuNzVyZW07XFxuICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzUsIDc1JSwgNTglKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzUsIDcxJSwgMzklKTtcXG59XFxuXFxuLmJ0bi1yZXNldCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBoZWlnaHQ6IDE5LjVyZW07XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xcbn1cXG5mb290ZXIgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDNyZW07XFxufVxcbmZvb3RlciBhIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcXG59XFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcXG59XFxuXFxuLm1haW4tYmFubmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1haW4tYmFubmVyIGgxIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5tYWluLWJhbm5lciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gIC5tYWluLWJhbm5lciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbn1cXG4jcHJvamVjdC1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICBnYXA6IDE1cmVtO1xcbn1cXG4jcHJvamVjdC1saXN0IC5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxLjg3NXJlbTtcXG59XFxuI3Byb2plY3QtbGlzdCAucHJvamVjdCBpbWcge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuI3Byb2plY3QtbGlzdCAucHJvamVjdC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuI3Byb2plY3QtbGlzdCAucHJvamVjdC1jb250ZW50IHAge1xcbiAgbWF4LXdpZHRoOiAzMi41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcXG4gICNwcm9qZWN0LWxpc3Qge1xcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcXG4gICNwcm9qZWN0LWxpc3Qge1xcbiAgICBnYXA6IDcuNXJlbTtcXG4gIH1cXG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCB7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xcbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAjcHJvamVjdC1saXN0IC5wcm9qZWN0IGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LWNvbnRlbnQgcCB7XFxuICAgIG1heC13aWR0aDogbm9uZTtcXG4gIH1cXG4gICNwcm9qZWN0LWxpc3QgI2NvZmZlZS10aW1lLXByb2plY3Qge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gICNwcm9qZWN0LWxpc3Qge1xcbiAgICBnYXA6IDVyZW07XFxuICAgIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xcbiAgfVxcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNleHBlcmllbmNlLXBhZ2UgYXNpZGUge1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XFxuICB3aWR0aDogMjUlO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogNXJlbTtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIGg0IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbiNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XFxuICBwYWRkaW5nOiA3LjVyZW0gMDtcXG4gIHdpZHRoOiA3NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNy41cmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIGxpc3Qtc3R5bGU6IGRpc2M7XFxuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBvdXRzaWRlO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLmRhdGVzIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCAudGl0bGUge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgcCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcXG4gICNleHBlcmllbmNlLXBhZ2UgYXNpZGUsXFxuICAjZXhwZXJpZW5jZS1wYWdlIHNlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcXG4gICNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCAuZGF0ZXMge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAjZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XFxuICAjZXhwZXJpZW5jZS1wYWdlIGFzaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gICNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICAjZXhwZXJpZW5jZS1wYWdlIHtcXG4gICAgcGFkZGluZzogMCAxLjVyZW07XFxuICB9XFxuICAjZXhwZXJpZW5jZS1wYWdlIHNlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiA1cmVtIDA7XFxuICAgIGdhcDogNXJlbTtcXG4gIH1cXG59XFxuI2Fib3V0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuI2Fib3V0LWNvbnRlbnQgaW1nIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXgtd2lkdGg6IDQ5LjY4NzVyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xcbiAgI2Fib3V0LWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcXG4gIHAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XFxuICAjYWJvdXQtY29udGVudCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAjYWJvdXQtY29udGVudCBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcXG4gICNhYm91dC1jb250ZW50IHtcXG4gICAgcGFkZGluZzogNXJlbSAxLjVyZW07XFxuICB9XFxufVxcbi5wcm9qZWN0LXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnByb2plY3QtcGFnZSBhc2lkZSB7XFxuICBwYWRkaW5nOiA3LjVyZW0gMDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzMlKTtcXG4gIHdpZHRoOiAyNSU7XFxufVxcbi5wcm9qZWN0LXBhZ2UgYXNpZGUgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiA1cmVtO1xcbiAgZ2FwOiAxLjVyZW07XFxufVxcbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiB7XFxuICBwYWRkaW5nOiA3LjVyZW0gMDtcXG4gIHdpZHRoOiA3NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNy41cmVtO1xcbn1cXG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gLnByb2plY3Qtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogM3JlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBoMiB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBwIHtcXG4gIG1heC13aWR0aDogNDkuNjg3NXJlbTtcXG59XFxuLnByb2plY3QtcGFnZSBzZWN0aW9uIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDI4LjEyNXJlbTtcXG4gIG1heC13aWR0aDogNTByZW07XFxufVxcbi5wcm9qZWN0LXBhZ2UgI3ZlcnNpb24tb25lIGltZyB7XFxuICBtYXgtaGVpZ2h0OiA0My43NXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxLjI1cmVtKSB7XFxuICAucHJvamVjdC1wYWdlIGFzaWRlLFxcbiAgLnByb2plY3QtcGFnZSBzZWN0aW9uIHtcXG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XFxuICAucHJvamVjdC1wYWdlIGFzaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICAucHJvamVjdC1wYWdlIHNlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiA1cmVtIDEuNXJlbTtcXG4gICAgZ2FwOiA1cmVtO1xcbiAgfVxcbiAgLnByb2plY3QtcGFnZSBzZWN0aW9uIGgyIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICAucHJvamVjdC1wYWdlIHNlY3Rpb24gLnByb2plY3Qtc2VjdGlvbiB7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgfVxcbn1cXG4ubW9iaWxlLW5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTA7XFxufVxcbi5tb2JpbGUtbmF2ICNtb2JpbGUtbmF2LWJnIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDQlKTtcXG59XFxuLm1vYmlsZS1uYXYgI2J0bi1jdG4ge1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuLm1vYmlsZS1uYXYgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMS41cmVtO1xcbn1cXG4ubW9iaWxlLW5hdiAjbW9iaWxlLW5hdi1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cIixcIiRmb250LXByaW1hcnk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyZjtcXG5cIixcIi8vIFByaW1hcnkgQ29sb3JzXFxuJGNsci1iZzogaHNsKDAsIDAlLCA0JSk7XFxuJGNsci1idG46IGhzbCgyMzUsIDc1JSwgNTglKTtcXG4kY2xyLWJ0bi1ob3ZlcjogaHNsKDIzNSwgNzElLCAzOSUpO1xcblxcbi8vIE5ldXRyYWwgQ29sb3JzXFxuJGNsci13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXG4kY2xyLXdoaXRlLXRyYW5zcGFyZW50LWVuZDogaHNsYSgwLCAwJSwgMTAwJSwgMC41KTtcXG4kY2xyLXdoaXRlLXRyYW5zcGFyZW50LXN0YXJ0OiBoc2xhKDAsIDAlLCAxMDAlLCAwKTtcXG4kY2xyLWdyYXk6IGhzbCgwLCAwJSwgNjUlKTtcXG4kY2xyLWdyYXktZGFyazogaHNsKDAsIDAlLCAzMyUpO1xcbiRjbHItYmxhY2s6IGhzbCgwLCAwJSwgMCUpO1xcblwiLFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbmltZyxcXG5waWN0dXJlLFxcbnN2ZyB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCJjb2xvcnNcXFwiIGFzICo7XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcblxcdG1hcmdpbjogMDtcXG5cXHRsaW5lLWhlaWdodDogMS4xO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuXFx0Zm9udC1zaXplOiByZW0oNjApO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0bGluZS1oZWlnaHQ6IDEuMztcXG59XFxuXFxuaDMge1xcblxcdGZvbnQtc2l6ZTogcmVtKDIyKTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmFjdGl2ZSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzY4KSkge1xcblxcdGgxLFxcblxcdGgyIHtcXG5cXHRcXHRmb250LXNpemU6IHJlbSg1MCk7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcblxcdGgxLFxcblxcdGgyIHtcXG5cXHRcXHRmb250LXNpemU6IHJlbSgzMik7XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuLmNvbnRhaW5lciB7XFxuXFx0bWF4LXdpZHRoOiByZW0oMTU5MCk7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5cXG5oZWFkZXIge1xcblxcdHBhZGRpbmc6IHJlbSg0OCkgMDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNsci1ncmF5LWRhcms7XFxufVxcblxcbiNoZWFkZXItbGF5b3V0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG51bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogcmVtKDQ4KTtcXG5cXG5cXHRhIHtcXG5cXHRcXHRjb2xvcjogJGNsci1ncmF5O1xcblxcdFxcdHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XFxuXFx0fVxcblxcblxcdGE6aG92ZXIge1xcblxcdFxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdH1cXG5cXG5cXHQuYWN0aXZlLW5hdiB7XFxuXFx0XFx0Y29sb3I6ICRjbHItd2hpdGU7XFxuXFx0fVxcbn1cXG5cXG4jbW9iaWxlLW5hdi1idG4ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0d2lkdGg6IHJlbSg0MCk7XFxuXFx0aGVpZ2h0OiByZW0oNTApO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiByZW0oOCk7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFx0Lm1vYmlsZS1saW5lIHtcXG5cXHRcXHRoZWlnaHQ6IHJlbSg0KTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWdyYXk7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogcmVtKDEwKTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNjIwKSkge1xcblxcdGhlYWRlciB7XFxuXFx0XFx0cGFkZGluZzogcmVtKDQ4KTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg3NjgpKSB7XFxuXFx0I2Rlc2t0b3AtbmF2LWN0biB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFxuXFx0I21vYmlsZS1uYXYtYnRuIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXG5cXHRoZWFkZXIge1xcblxcdFxcdHBhZGRpbmc6IHJlbSgyNCk7XFxuXFxuXFx0XFx0aW1nIHtcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSgyNDApO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgzMjApKSB7XFxuXFx0aGVhZGVyIHtcXG5cXHRcXHRpbWcge1xcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDE2MCk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNob21lIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogcmVtKDIwMCkgMDtcXG5cXHRnYXA6IHJlbSgyMDApO1xcblxcdG1heC13aWR0aDogcmVtKDEyMDYpO1xcblxcdG1hcmdpbjogMCBhdXRvO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0I3dlbGNvbWUge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRnYXA6IHJlbSgxMjApO1xcblxcblxcdFxcdGRpdiB7XFxuXFx0XFx0XFx0d2lkdGg6IDYwJTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0cCB7XFxuXFx0XFx0XFx0cGFkZGluZy10b3A6IHJlbSgyNCk7XFxuXFx0XFx0fVxcblxcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0d2lkdGg6IDQwJTtcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSgzMDApO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0I2hlYWRlci1sb2NhdGlvbiB7XFxuXFx0XFx0Y29sb3I6ICRjbHItZ3JheTtcXG5cXHRcXHRmb250LXdlaWdodDogMzAwO1xcblxcdH1cXG5cXG5cXHQjcHJvamVjdHMge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRtYXgtd2lkdGg6IHJlbSg3OTUpO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdGdhcDogcmVtKDEyMCk7XFxuXFxuXFx0XFx0I3Byb2plY3RzLW9uZS1saW5lciB7XFxuXFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtY3RuIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0Z2FwOiByZW0oNDApO1xcblxcblxcdFxcdC5wcm9qZWN0LWhlYWRpbmcge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0XFx0XFx0cCB7XFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oODApO1xcblxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0I2Fib3V0LW1lLFxcblxcdCNza2lsbHMtY3RuIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0Z2FwOiByZW0oODApO1xcblxcblxcdFxcdGgyIHtcXG5cXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQjYWJvdXQtbWUge1xcblxcdFxcdG1heC13aWR0aDogcmVtKDY1Nyk7XFxuXFx0fVxcblxcblxcdCNza2lsbHMtY3RuIHtcXG5cXHRcXHRtYXgtd2lkdGg6IHJlbSg5OTEpO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcblxcdFxcdCNza2lsbHMtbGlzdCB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0XFx0Z2FwOiByZW0oNjQpIDA7XFxuXFx0XFx0fVxcblxcblxcdFxcdC5za2lsbCB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0XFx0Z2FwOiByZW0oMjQpO1xcblxcdFxcdFxcdHdpZHRoOiAyMCU7XFxuXFxuXFx0XFx0XFx0aDMge1xcblxcdFxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdC5za2lsbC1pbWctY3RuIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0XFx0aGVpZ2h0OiByZW0oMTA0KTtcXG5cXHRcXHRcXHR3aWR0aDogcmVtKDEwNCk7XFxuXFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgJGNsci1ncmF5O1xcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHJlbSgxMDApO1xcblxcblxcdFxcdFxcdGltZyB7XFxuXFx0XFx0XFx0XFx0bWF4LWhlaWdodDogcmVtKDQwKTtcXG5cXHRcXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSg0MCk7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxMDI0KSkge1xcblxcdCNob21lIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSByZW0oNDgpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDc2OCkpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxuXFx0fVxcblxcblxcdCNob21lIHtcXG5cXHRcXHQjd2VsY29tZSB7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRnYXA6IHJlbSg0MCk7XFxuXFxuXFx0XFx0XFx0ZGl2LFxcblxcdFxcdFxcdGltZyB7XFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQucHJvamVjdC1jdG4ge1xcblxcdFxcdFxcdGdhcDogcmVtKDMyKTtcXG5cXG5cXHRcXHRcXHQucHJvamVjdC1oZWFkaW5nIHtcXG5cXHRcXHRcXHRcXHRwIHtcXG5cXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSg2MCk7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0I3NraWxscy1jdG4ge1xcblxcdFxcdFxcdC5za2lsbCB7XFxuXFx0XFx0XFx0XFx0d2lkdGg6IDMzJTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXG5cXHQjaG9tZSB7XFxuXFx0XFx0Z2FwOiByZW0oODApO1xcblxcdFxcdHBhZGRpbmc6IHJlbSg4MCkgcmVtKDI0KTtcXG5cXG5cXHRcXHQjcHJvamVjdHMge1xcblxcdFxcdFxcdGdhcDogcmVtKDQ4KTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0LnByb2plY3QtY3RuIHtcXG5cXHRcXHRcXHQucHJvamVjdC1oZWFkaW5nIHtcXG5cXHRcXHRcXHRcXHRwIHtcXG5cXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSg0MCk7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0I3NraWxscy1jdG4ge1xcblxcdFxcdFxcdC5za2lsbCB7XFxuXFx0XFx0XFx0XFx0d2lkdGg6IDUwJTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdCNhYm91dC1tZSxcXG5cXHRcXHQjc2tpbGxzLWN0biB7XFxuXFx0XFx0XFx0Z2FwOiByZW0oNDApO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgzMjApKSB7XFxuXFx0I2hvbWUge1xcblxcdFxcdCNza2lsbHMtY3RuIHtcXG5cXHRcXHRcXHQuc2tpbGwge1xcblxcdFxcdFxcdFxcdGgzIHtcXG5cXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSgxOCk7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuI2J0bi10b3Age1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRyaWdodDogcmVtKDUwKTtcXG5cXHRib3R0b206IHJlbSg1MCk7XFxuXFx0ei1pbmRleDogMztcXG59XFxuXFxuI2J0bi10b3A6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXG5cXHQjYnRuLXRvcCB7XFxuXFx0XFx0cmlnaHQ6IHJlbSgyNSk7XFxuXFx0XFx0Ym90dG9tOiByZW0oMjUpO1xcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbmJ1dHRvbiB7XFxuXFx0Y29sb3I6ICRjbHItd2hpdGU7XFxuXFx0Zm9udC1zaXplOiByZW0oMjApO1xcblxcdHBhZGRpbmc6IHJlbSgxMikgcmVtKDYwKTtcXG5cXHRib3JkZXItcmFkaXVzOiByZW0oNTApO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItYnRuO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItYnRuLWhvdmVyO1xcbn1cXG5cXG4uYnRuLXJlc2V0IHtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXG5cXHRidXR0b24ge1xcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG5mb290ZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogcmVtKDQ4KTtcXG5cXHRmb250LXNpemU6IHJlbSgzMik7XFxuXFx0aGVpZ2h0OiByZW0oMzEyKTtcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgJGNsci1ncmF5LWRhcms7XFxuXFxuXFx0ZGl2IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGdhcDogcmVtKDQ4KTtcXG5cXHR9XFxuXFxuXFx0YSB7XFxuXFx0XFx0Y29sb3I6ICRjbHItd2hpdGU7XFxuXFx0XFx0dHJhbnNpdGlvbjogY29sb3IgMC4xcztcXG5cXHR9XFxuXFxuXFx0YTpob3ZlciB7XFxuXFx0XFx0Y29sb3I6ICRjbHItZ3JheTtcXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4ubWFpbi1iYW5uZXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuXFx0aDEge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHR0b3A6IDUwJTtcXG5cXHRcXHRsZWZ0OiA1MCU7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0fVxcblxcblxcdGltZyB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcblxcdC5tYWluLWJhbm5lciB7XFxuXFx0XFx0aDEge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDI0KTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuI3Byb2plY3QtbGlzdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmc6IHJlbSgxMjApIDA7XFxuXFx0Z2FwOiByZW0oMjQwKTtcXG5cXG5cXHQucHJvamVjdCB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRnYXA6IHJlbSgzMCk7XFxuXFxuXFx0XFx0aW1nIHtcXG5cXHRcXHRcXHR3aWR0aDogNTAlO1xcblxcdFxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdC5wcm9qZWN0LWNvbnRlbnQge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGdhcDogcmVtKDQ4KTtcXG5cXHRcXHR3aWR0aDogNTAlO1xcblxcblxcdFxcdHAge1xcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDUyMCk7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNjIwKSkge1xcblxcdCNwcm9qZWN0LWxpc3Qge1xcblxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIHJlbSg0OCk7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTAyNCkpIHtcXG5cXHQjcHJvamVjdC1saXN0IHtcXG5cXHRcXHRnYXA6IHJlbSgxMjApO1xcblxcblxcdFxcdC5wcm9qZWN0LWNvbnRlbnQge1xcblxcdFxcdFxcdGdhcDogcmVtKDI0KTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzY4KSkge1xcblxcdCNwcm9qZWN0LWxpc3Qge1xcblxcdFxcdC5wcm9qZWN0IHtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcblxcdFxcdFxcdGltZyB7XFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdC5wcm9qZWN0LWNvbnRlbnQge1xcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcblxcdFxcdFxcdFxcdHAge1xcblxcdFxcdFxcdFxcdFxcdG1heC13aWR0aDogbm9uZTtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQjY29mZmVlLXRpbWUtcHJvamVjdCB7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg0MjUpKSB7XFxuXFx0I3Byb2plY3QtbGlzdCB7XFxuXFx0XFx0Z2FwOiByZW0oODApO1xcblxcdFxcdHBhZGRpbmc6IHJlbSg4MCkgcmVtKDI0KTtcXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jZXhwZXJpZW5jZS1wYWdlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcblxcdGFzaWRlIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcblxcdFxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRjbHItZ3JheS1kYXJrO1xcblxcdFxcdHdpZHRoOiAyNSU7XFxuXFxuXFx0XFx0dWwge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRwb3NpdGlvbjogc3RpY2t5O1xcblxcdFxcdFxcdHRvcDogcmVtKDgwKTtcXG5cXHRcXHRcXHRnYXA6IHJlbSgyNCk7XFxuXFx0XFx0fVxcblxcblxcdFxcdGg0IHtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0c2VjdGlvbiB7XFxuXFx0XFx0cGFkZGluZzogcmVtKDEyMCkgMDtcXG5cXHRcXHR3aWR0aDogNzUlO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRnYXA6IHJlbSgxMjApO1xcblxcdH1cXG5cXG5cXHQuZXhwZXJpZW5jZS1jb250ZW50IHtcXG5cXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxuXFxuXFx0XFx0dWwge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRnYXA6IHJlbSg4KTtcXG5cXHRcXHRcXHRsaXN0LXN0eWxlOiBkaXNjO1xcblxcdFxcdFxcdGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGU7XFxuXFx0XFx0fVxcblxcblxcdFxcdC5kYXRlcyB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMjApO1xcblxcdFxcdFxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNDAwO1xcblxcdFxcdFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRcXHR9XFxuXFxuXFx0XFx0LnRpdGxlIHtcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSg0MCk7XFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG5cXHRcXHRcXHRmb250LXN0eWxlOiBub3JtYWw7XFxuXFx0XFx0fVxcblxcblxcdFxcdHAge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDIwKTtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IHJlbSgyNCk7XFxuXFx0XFx0XFx0bWFyZ2luLXRvcDogcmVtKDgpO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNjIwKSkge1xcblxcdCNleHBlcmllbmNlLXBhZ2Uge1xcblxcdFxcdGFzaWRlLFxcblxcdFxcdHNlY3Rpb24ge1xcblxcdFxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIHJlbSg0OCk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDEwMjQpKSB7XFxuXFx0I2V4cGVyaWVuY2UtcGFnZSB7XFxuXFx0XFx0LmV4cGVyaWVuY2UtY29udGVudCB7XFxuXFx0XFx0XFx0LmRhdGVzIHtcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdC50aXRsZSB7XFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMjQpO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzY4KSkge1xcblxcdCNleHBlcmllbmNlLXBhZ2Uge1xcblxcdFxcdGFzaWRlIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRzZWN0aW9uIHtcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcblxcdCNleHBlcmllbmNlLXBhZ2Uge1xcblxcdFxcdHBhZGRpbmc6IDAgcmVtKDI0KTtcXG5cXG5cXHRcXHRzZWN0aW9uIHtcXG5cXHRcXHRcXHRwYWRkaW5nOiByZW0oODApIDA7XFxuXFx0XFx0XFx0Z2FwOiByZW0oODApO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jYWJvdXQtY29udGVudCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogcmVtKDQ4KTtcXG5cXG5cXHRpbWcge1xcblxcdFxcdHdpZHRoOiA1MCU7XFxuXFx0XFx0bWF4LXdpZHRoOiByZW0oNzk1KTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNjIwKSkge1xcblxcdCNhYm91dC1jb250ZW50IHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSByZW0oNDgpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDEwMjQpKSB7XFxuXFx0cCB7XFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDc2OCkpIHtcXG5cXHQjYWJvdXQtY29udGVudCB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG5cXHRcXHRpbWcge1xcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg3NjgpKSB7XFxuXFx0I2Fib3V0LWNvbnRlbnQge1xcblxcdFxcdHBhZGRpbmc6IHJlbSg4MCkgcmVtKDI0KTtcXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4ucHJvamVjdC1wYWdlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcblxcdGFzaWRlIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcblxcdFxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRjbHItZ3JheS1kYXJrO1xcblxcdFxcdHdpZHRoOiAyNSU7XFxuXFxuXFx0XFx0dWwge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRwb3NpdGlvbjogc3RpY2t5O1xcblxcdFxcdFxcdHRvcDogcmVtKDgwKTtcXG5cXHRcXHRcXHRnYXA6IHJlbSgyNCk7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHRzZWN0aW9uIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcblxcdFxcdHdpZHRoOiA3NSU7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGdhcDogcmVtKDEyMCk7XFxuXFxuXFx0XFx0LnByb2plY3Qtc2VjdGlvbiB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdGdhcDogcmVtKDQ4KTtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRoMiB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oNDApO1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0XFx0fVxcblxcblxcdFxcdHAge1xcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDc5NSk7XFxuXFx0XFx0fVxcblxcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcblxcdFxcdFxcdG1heC1oZWlnaHQ6IHJlbSg0NTApO1xcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDgwMCk7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQvLyB0aGlzIGlzIGZvciB0aGUgcG9ydGZvbGlvIHByb2plY3RcXG5cXHQjdmVyc2lvbi1vbmUge1xcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0bWF4LWhlaWdodDogcmVtKDcwMCk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDE2MjApKSB7XFxuXFx0LnByb2plY3QtcGFnZSB7XFxuXFx0XFx0YXNpZGUsXFxuXFx0XFx0c2VjdGlvbiB7XFxuXFx0XFx0XFx0cGFkZGluZzogcmVtKDEyMCkgcmVtKDQ4KTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzY4KSkge1xcblxcdC5wcm9qZWN0LXBhZ2Uge1xcblxcdFxcdGFzaWRlIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRzZWN0aW9uIHtcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcblxcdC5wcm9qZWN0LXBhZ2Uge1xcblxcdFxcdHNlY3Rpb24ge1xcblxcdFxcdFxcdHBhZGRpbmc6IHJlbSg4MCkgcmVtKDI0KTtcXG5cXHRcXHRcXHRnYXA6IHJlbSg4MCk7XFxuXFxuXFx0XFx0XFx0aDIge1xcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDI0KTtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0LnByb2plY3Qtc2VjdGlvbiB7XFxuXFx0XFx0XFx0XFx0Z2FwOiByZW0oMjQpO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuLm1vYmlsZS1uYXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHotaW5kZXg6IDEwO1xcblxcblxcdCNtb2JpbGUtbmF2LWJnIHtcXG5cXHRcXHR3aWR0aDogODAlO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItYmc7XFxuXFx0fVxcblxcblxcdCNidG4tY3RuIHtcXG5cXHRcXHR3aWR0aDogMjAlO1xcblxcdH1cXG5cXG5cXHRidXR0b24ge1xcblxcdFxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0XFx0Y29sb3I6ICRjbHItYmxhY2s7XFxuXFx0XFx0Zm9udC1zaXplOiByZW0oNDApO1xcblxcdFxcdHBhZGRpbmctbGVmdDogcmVtKDE2KTtcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0dG9wOiByZW0oMjQpO1xcblxcdH1cXG5cXG5cXHQjbW9iaWxlLW5hdi1jdG4ge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRnYXA6IHJlbSgzMik7XFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMjApO1xcblxcdFxcdHBhZGRpbmc6IHJlbSgzMik7XFxuXFx0fVxcbn1cXG5cXG4uYWN0aXZlIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuXFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHsgdXBkYXRlSGVhZGVyQWN0aXZlTGluaywgcmVtb3ZlSGVhZGVyU3R5bGVzLCBtb2JpbGVOYXZJbml0IH07XG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpbmtzXCIpO1xuY29uc3QgbW9iaWxlTmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbmF2LWJ0blwiKTtcbmNvbnN0IG1vYmlsZU5hdkN0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW5hdlwiKTtcbmNvbnN0IG1vYmlsZU5hdkV4aXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1uYXYtZXhpdFwiKTtcblxuZnVuY3Rpb24gdXBkYXRlSGVhZGVyQWN0aXZlTGluaygpIHtcblx0bmF2LmZvckVhY2goKGxpbmspID0+IHtcblx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHR1cGRhdGVIZWFkZXJTdHlsZXMobGluayk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVIZWFkZXJTdHlsZXMobGluaykge1xuXHRyZW1vdmVIZWFkZXJTdHlsZXMoKTtcblx0YWRkSGVhZGVyU3R5bGVzKGxpbmspO1xufVxuXG5mdW5jdGlvbiByZW1vdmVIZWFkZXJTdHlsZXMoKSB7XG5cdG5hdi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuXHRcdGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtbmF2XCIpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkSGVhZGVyU3R5bGVzKGxpbmspIHtcblx0bGluay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLW5hdlwiKTtcbn1cblxuZnVuY3Rpb24gbW9iaWxlTmF2SW5pdCgpIHtcblx0bW9iaWxlTmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0bW9iaWxlTmF2Q3RuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdH0pO1xuXG5cdG1vYmlsZU5hdkV4aXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRtb2JpbGVOYXZDdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0fSk7XG59XG4iLCJleHBvcnQgeyBzY3JvbGxUb1RvcCB9O1xuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi10b3BcIik7XG5cbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2Nyb2xsVG9Ub3ApO1xuXG5mdW5jdGlvbiBzY3JvbGxUb1RvcCgpIHtcblx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbn1cbiIsImV4cG9ydCB7IGluaXQgfTtcbmltcG9ydCB7IHVwZGF0ZUhlYWRlckFjdGl2ZUxpbmssIG1vYmlsZU5hdkluaXQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IHsgc2Nyb2xsVG9Ub3AgfSBmcm9tIFwiLi9jb21wb25lbnRzL3RvVG9wQnRuXCI7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG5cdHVwZGF0ZUhlYWRlckFjdGl2ZUxpbmsoKTtcblx0c2Nyb2xsVG9Ub3AoKTtcblx0bW9iaWxlTmF2SW5pdCgpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaW5pdCB9IGZyb20gXCIuLi9pbml0LmpzXCI7XG5pbXBvcnQgeyByZW1vdmVIZWFkZXJTdHlsZXMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXIuanNcIjtcbmltcG9ydCBcIi4uLy4uL3Njc3Mvc3R5bGVzLnNjc3NcIjtcblxuaW5pdCgpO1xucmVtb3ZlSGVhZGVyU3R5bGVzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=