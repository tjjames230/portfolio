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
}`, "",{"version":3,"sources":["webpack://./src/scss/globals/_general.scss","webpack://./src/scss/styles.scss","webpack://./src/scss/globals/_fonts.scss","webpack://./src/scss/globals/_colors.scss","webpack://./src/scss/globals/_reset.scss","webpack://./src/scss/globals/_typography.scss","webpack://./src/scss/globals/_container.scss","webpack://./src/scss/components/_header.scss","webpack://./src/scss/components/_mainHome.scss","webpack://./src/scss/components/_toTopBtn.scss","webpack://./src/scss/components/_buttons.scss","webpack://./src/scss/components/_footer.scss","webpack://./src/scss/components/_mainBanner.scss","webpack://./src/scss/components/_portfolioPage.scss","webpack://./src/scss/components/_experiencePage.scss","webpack://./src/scss/components/_aboutPage.scss","webpack://./src/scss/components/_projectPages.scss","webpack://./src/scss/components/_mobileNav.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"../utilities/\" as *;\n@use \"colors\" as *;\n@use \"fonts\" as *;\n\nhtml {\n\tfont-size: 100%;\n\tscroll-behavior: smooth;\n}\n\nbody {\n\tfont-family: $font-primary;\n\tfont-size: rem(18);\n\tcolor: $clr-white;\n\tbackground-color: $clr-bg;\n\tline-height: 1.5;\n}\n","html {\n  font-size: 100%;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: \"Inter\", sans-serf;\n  font-size: 1.125rem;\n  color: hsl(0, 0%, 100%);\n  background-color: hsl(0, 0%, 4%);\n  line-height: 1.5;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n  line-height: 1.1;\n}\n\nh1,\nh2 {\n  font-size: 3.75rem;\n  font-weight: 700;\n  line-height: 1.3;\n}\n\nh3 {\n  font-size: 1.375rem;\n  font-weight: 700;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\n@media screen and (max-width: 48rem) {\n  h1,\n  h2 {\n    font-size: 3.125rem;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  h1,\n  h2 {\n    font-size: 2rem;\n  }\n}\n.container {\n  max-width: 99.375rem;\n  margin: 0 auto;\n}\n\nheader {\n  padding: 3rem 0;\n  border-bottom: 1px solid hsl(0, 0%, 33%);\n}\n\n#header-layout {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nul {\n  list-style: none;\n  display: flex;\n  gap: 3rem;\n}\nul a {\n  color: hsl(0, 0%, 65%);\n  transition: color 0.1s;\n}\nul a:hover {\n  color: hsl(0, 0%, 100%);\n}\nul .active-nav {\n  color: hsl(0, 0%, 100%);\n}\n\n#mobile-nav-btn {\n  display: none;\n  width: 2.5rem;\n  height: 3.125rem;\n  flex-direction: column;\n  gap: 0.5rem;\n  justify-content: center;\n}\n#mobile-nav-btn .mobile-line {\n  height: 0.25rem;\n  width: 100%;\n  background-color: hsl(0, 0%, 65%);\n  border-radius: 0.625rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  header {\n    padding: 3rem;\n  }\n}\n@media screen and (max-width: 56.875rem) {\n  #desktop-nav-ctn {\n    display: none;\n  }\n  #mobile-nav-btn {\n    display: flex;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  header {\n    padding: 1.5rem;\n  }\n  header img {\n    max-width: 15rem;\n  }\n}\n@media screen and (max-width: 21.875rem) {\n  header img {\n    max-width: 10rem;\n  }\n}\n#home {\n  display: flex;\n  flex-direction: column;\n  padding: 12.5rem 0;\n  gap: 12.5rem;\n  max-width: 75.375rem;\n  margin: 0 auto;\n  align-items: center;\n}\n#home #welcome {\n  display: flex;\n  align-items: center;\n  gap: 7.5rem;\n}\n#home #welcome div {\n  width: 60%;\n}\n#home #welcome p {\n  padding-top: 1.5rem;\n}\n#home #welcome img {\n  width: 40%;\n  max-width: 18.75rem;\n}\n#home #header-location {\n  color: hsl(0, 0%, 65%);\n  font-weight: 300;\n}\n#home #projects {\n  display: flex;\n  flex-direction: column;\n  max-width: 49.6875rem;\n  width: 100%;\n  gap: 7.5rem;\n}\n#home #projects #projects-one-liner {\n  text-align: center;\n}\n#home .project-ctn {\n  display: flex;\n  flex-direction: column;\n  gap: 2.5rem;\n}\n#home .project-ctn .project-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#home .project-ctn .project-heading p {\n  font-size: 5rem;\n  font-weight: 100;\n}\n#home #about-me,\n#home #skills-ctn {\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n}\n#home #about-me h2,\n#home #skills-ctn h2 {\n  text-align: center;\n}\n#home #about-me {\n  max-width: 41.0625rem;\n}\n#home #skills-ctn {\n  max-width: 61.9375rem;\n  width: 100%;\n}\n#home #skills-ctn #skills-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 4rem 0;\n}\n#home #skills-ctn .skill {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n  width: 20%;\n}\n#home #skills-ctn .skill h3 {\n  text-align: center;\n}\n#home #skills-ctn .skill-img-ctn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 6.5rem;\n  width: 6.5rem;\n  border: 1px solid hsl(0, 0%, 65%);\n  border-radius: 6.25rem;\n}\n#home #skills-ctn .skill-img-ctn img {\n  max-height: 2.5rem;\n  max-width: 2.5rem;\n}\n\n@media screen and (max-width: 64rem) {\n  #home {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  body {\n    font-size: 1rem;\n  }\n  #home #welcome {\n    flex-direction: column;\n    gap: 2.5rem;\n  }\n  #home #welcome div,\n  #home #welcome img {\n    width: 100%;\n  }\n  #home .project-ctn {\n    gap: 2rem;\n  }\n  #home .project-ctn .project-heading p {\n    font-size: 3.75rem;\n  }\n  #home #skills-ctn .skill {\n    width: 33%;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #home {\n    gap: 5rem;\n    padding: 5rem 1.5rem;\n  }\n  #home #projects {\n    gap: 3rem;\n  }\n  #home .project-ctn .project-heading p {\n    font-size: 2.5rem;\n  }\n  #home #skills-ctn .skill {\n    width: 50%;\n  }\n  #home #about-me,\n  #home #skills-ctn {\n    gap: 2.5rem;\n  }\n}\n@media screen and (max-width: 20rem) {\n  #home #skills-ctn .skill h3 {\n    font-size: 1.125rem;\n  }\n}\n#btn-top {\n  position: fixed;\n  right: 3.125rem;\n  bottom: 3.125rem;\n  z-index: 3;\n}\n\n#btn-top:hover {\n  cursor: pointer;\n}\n\n@media screen and (max-width: 26.5625rem) {\n  #btn-top {\n    right: 1.5625rem;\n    bottom: 1.5625rem;\n  }\n}\nbutton {\n  color: hsl(0, 0%, 100%);\n  font-size: 1.25rem;\n  padding: 0.75rem 3.75rem;\n  border-radius: 3.125rem;\n  background-color: hsl(235, 75%, 58%);\n  border: none;\n  transition: background-color 0.1s;\n}\n\nbutton:hover {\n  cursor: pointer;\n  background-color: hsl(235, 71%, 39%);\n}\n\n.btn-reset {\n  margin: 0 auto;\n}\n\n@media screen and (max-width: 26.5625rem) {\n  button {\n    font-size: 1rem;\n  }\n}\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n  font-size: 2rem;\n  height: 19.5rem;\n  border-top: 1px solid hsl(0, 0%, 33%);\n}\nfooter div {\n  display: flex;\n  gap: 3rem;\n}\nfooter a {\n  color: hsl(0, 0%, 100%);\n  transition: color 0.1s;\n}\nfooter a:hover {\n  color: hsl(0, 0%, 65%);\n}\n\n.main-banner {\n  position: relative;\n  text-align: center;\n}\n.main-banner h1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main-banner img {\n  width: 100%;\n}\n\n@media screen and (max-width: 26.5625rem) {\n  .main-banner h1 {\n    font-size: 1.5rem;\n  }\n}\n#project-list {\n  display: flex;\n  flex-direction: column;\n  padding: 7.5rem 0;\n  gap: 15rem;\n}\n#project-list .project {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1.875rem;\n}\n#project-list .project img {\n  width: 50%;\n  height: 100%;\n}\n#project-list .project-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3rem;\n  width: 50%;\n}\n#project-list .project-content p {\n  max-width: 32.5rem;\n  font-size: 1rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  #project-list {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 64rem) {\n  #project-list {\n    gap: 7.5rem;\n  }\n  #project-list .project-content {\n    gap: 1.5rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #project-list .project {\n    flex-direction: column;\n  }\n  #project-list .project img {\n    width: 100%;\n  }\n  #project-list .project .project-content {\n    width: 100%;\n  }\n  #project-list .project .project-content p {\n    max-width: none;\n  }\n  #project-list #coffee-time-project {\n    flex-direction: column-reverse;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #project-list {\n    gap: 5rem;\n    padding: 5rem 1.5rem;\n  }\n}\n#experience-page {\n  display: flex;\n}\n#experience-page aside {\n  padding: 7.5rem 0;\n  border-right: 1px solid hsl(0, 0%, 33%);\n  width: 25%;\n}\n#experience-page aside ul {\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 5rem;\n  gap: 1.5rem;\n}\n#experience-page aside h4 {\n  font-weight: 700;\n}\n#experience-page section {\n  padding: 7.5rem 0 7.5rem 5rem;\n  width: 75%;\n  display: flex;\n  flex-direction: column;\n  gap: 7.5rem;\n}\n#experience-page .experience-content {\n  font-size: 1rem;\n}\n#experience-page .experience-content ul {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  list-style: disc;\n  list-style-position: outside;\n}\n#experience-page .experience-content .dates {\n  font-size: 1.25rem;\n  font-style: italic;\n  font-weight: 400;\n  display: inline-block;\n}\n#experience-page .experience-content .title {\n  font-size: 2.5rem;\n  font-weight: 300;\n  font-style: normal;\n}\n#experience-page .experience-content p {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin-bottom: 1.5rem;\n  margin-top: 0.5rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  #experience-page aside,\n  #experience-page section {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 64rem) {\n  #experience-page .experience-content .dates {\n    font-size: 1rem;\n  }\n  #experience-page .experience-content .title {\n    font-size: 1.5rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #experience-page aside {\n    display: none;\n  }\n  #experience-page section {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #experience-page {\n    padding: 0 1.5rem;\n  }\n  #experience-page section {\n    padding: 5rem 0;\n    gap: 5rem;\n  }\n}\n#about-content {\n  display: flex;\n  padding: 7.5rem 0;\n  justify-content: space-between;\n  align-items: center;\n  gap: 3rem;\n}\n#about-content img {\n  width: 50%;\n  max-width: 49.6875rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  #about-content {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 64rem) {\n  p {\n    font-size: 1rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #about-content {\n    flex-direction: column;\n  }\n  #about-content img {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #about-content {\n    padding: 5rem 1.5rem;\n  }\n}\n.project-page {\n  display: flex;\n}\n.project-page aside {\n  padding: 7.5rem 0;\n  border-right: 1px solid hsl(0, 0%, 33%);\n  width: 25%;\n}\n.project-page aside ul {\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 5rem;\n  gap: 1.5rem;\n}\n.project-page section {\n  padding: 7.5rem 0;\n  width: 75%;\n  display: flex;\n  flex-direction: column;\n  gap: 7.5rem;\n}\n.project-page section .project-section {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n  align-items: center;\n}\n.project-page section h2 {\n  font-size: 2.5rem;\n  font-weight: 300;\n}\n.project-page section p {\n  max-width: 49.6875rem;\n}\n.project-page section img {\n  width: 100%;\n  height: auto;\n  max-height: 28.125rem;\n  max-width: 50rem;\n}\n.project-page #version-one img {\n  max-height: 43.75rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  .project-page aside,\n  .project-page section {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  .project-page aside {\n    display: none;\n  }\n  .project-page section {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  .project-page section {\n    padding: 5rem 1.5rem;\n    gap: 5rem;\n  }\n  .project-page section h2 {\n    font-size: 1.5rem;\n  }\n  .project-page section .project-section {\n    gap: 1.5rem;\n  }\n}\n.mobile-nav {\n  display: flex;\n  visibility: hidden;\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.2);\n  transition: background-color 0.2s ease-out;\n  position: fixed;\n  z-index: 10;\n}\n.mobile-nav .mobile-nav-bg {\n  width: 0%;\n  transition: width 0.2s ease-in;\n  background-color: hsl(0, 0%, 4%);\n  overflow: hidden;\n}\n.mobile-nav .active-ctn {\n  width: 80%;\n}\n.mobile-nav .nav-links {\n  white-space: nowrap;\n}\n.mobile-nav #btn-ctn {\n  width: 20%;\n}\n.mobile-nav button {\n  background: none;\n  color: hsl(0, 0%, 0%);\n  font-size: 2rem;\n  padding-left: 1rem;\n  position: relative;\n  top: 1rem;\n}\n.mobile-nav #mobile-nav-ctn {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  font-size: 1.25rem;\n  padding: 2rem;\n}\n\n.active-bg {\n  background-color: rgba(255, 255, 255, 0.8);\n  visibility: visible;\n  opacity: 1;\n}","$font-primary: \"Inter\", sans-serf;\n","// Primary Colors\n$clr-bg: hsl(0, 0%, 4%);\n$clr-btn: hsl(235, 75%, 58%);\n$clr-btn-hover: hsl(235, 71%, 39%);\n\n// Neutral Colors\n$clr-white: hsl(0, 0%, 100%);\n$clr-gray: hsl(0, 0%, 65%);\n$clr-gray-dark: hsl(0, 0%, 33%);\n$clr-black: hsl(0, 0%, 0%);\n","*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont: inherit;\n}\n\nimg,\npicture,\nsvg {\n\tdisplay: block;\n}\n","@use \"../utilities/\" as *;\n@use \"colors\" as *;\n\nh1,\nh2,\nh3 {\n\tmargin: 0;\n\tline-height: 1.1;\n}\n\nh1,\nh2 {\n\tfont-size: rem(60);\n\tfont-weight: 700;\n\tline-height: 1.3;\n}\n\nh3 {\n\tfont-size: rem(22);\n\tfont-weight: 700;\n}\n\na,\na:visited,\na:active {\n\ttext-decoration: none;\n}\n\n@media screen and (max-width: rem(768)) {\n\th1,\n\th2 {\n\t\tfont-size: rem(50);\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\th1,\n\th2 {\n\t\tfont-size: rem(32);\n\t}\n}\n","@use \"../utilities/\" as *;\n\n.container {\n\tmax-width: rem(1590);\n\tmargin: 0 auto;\n}\n","@use \"../utilities/\" as *;\n@use \"../globals/\" as *;\n\nheader {\n\tpadding: rem(48) 0;\n\tborder-bottom: 1px solid $clr-gray-dark;\n}\n\n#header-layout {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\nul {\n\tlist-style: none;\n\tdisplay: flex;\n\tgap: rem(48);\n\n\ta {\n\t\tcolor: $clr-gray;\n\t\ttransition: color 0.1s;\n\t}\n\n\ta:hover {\n\t\tcolor: $clr-white;\n\t}\n\n\t.active-nav {\n\t\tcolor: $clr-white;\n\t}\n}\n\n#mobile-nav-btn {\n\tdisplay: none;\n\twidth: rem(40);\n\theight: rem(50);\n\tflex-direction: column;\n\tgap: rem(8);\n\tjustify-content: center;\n\n\t.mobile-line {\n\t\theight: rem(4);\n\t\twidth: 100%;\n\t\tbackground-color: $clr-gray;\n\t\tborder-radius: rem(10);\n\t}\n}\n\n@media screen and (max-width: rem(1620)) {\n\theader {\n\t\tpadding: rem(48);\n\t}\n}\n\n@media screen and (max-width: rem(910)) {\n\t#desktop-nav-ctn {\n\t\tdisplay: none;\n\t}\n\n\t#mobile-nav-btn {\n\t\tdisplay: flex;\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\theader {\n\t\tpadding: rem(24);\n\n\t\timg {\n\t\t\tmax-width: rem(240);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(350)) {\n\theader {\n\t\timg {\n\t\t\tmax-width: rem(160);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#home {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: rem(200) 0;\n\tgap: rem(200);\n\tmax-width: rem(1206);\n\tmargin: 0 auto;\n\talign-items: center;\n\n\t#welcome {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: rem(120);\n\n\t\tdiv {\n\t\t\twidth: 60%;\n\t\t}\n\n\t\tp {\n\t\t\tpadding-top: rem(24);\n\t\t}\n\n\t\timg {\n\t\t\twidth: 40%;\n\t\t\tmax-width: rem(300);\n\t\t}\n\t}\n\n\t#header-location {\n\t\tcolor: $clr-gray;\n\t\tfont-weight: 300;\n\t}\n\n\t#projects {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmax-width: rem(795);\n\t\twidth: 100%;\n\t\tgap: rem(120);\n\n\t\t#projects-one-liner {\n\t\t\ttext-align: center;\n\t\t}\n\t}\n\n\t.project-ctn {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(40);\n\n\t\t.project-heading {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\talign-items: center;\n\n\t\t\tp {\n\t\t\t\tfont-size: rem(80);\n\t\t\t\tfont-weight: 100;\n\t\t\t}\n\t\t}\n\t}\n\n\t#about-me,\n\t#skills-ctn {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(80);\n\n\t\th2 {\n\t\t\ttext-align: center;\n\t\t}\n\t}\n\n\t#about-me {\n\t\tmax-width: rem(657);\n\t}\n\n\t#skills-ctn {\n\t\tmax-width: rem(991);\n\t\twidth: 100%;\n\n\t\t#skills-list {\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tjustify-content: center;\n\t\t\tgap: rem(64) 0;\n\t\t}\n\n\t\t.skill {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-items: center;\n\t\t\tgap: rem(24);\n\t\t\twidth: 20%;\n\n\t\t\th3 {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t}\n\n\t\t.skill-img-ctn {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\theight: rem(104);\n\t\t\twidth: rem(104);\n\t\t\tborder: 1px solid $clr-gray;\n\t\t\tborder-radius: rem(100);\n\n\t\t\timg {\n\t\t\t\tmax-height: rem(40);\n\t\t\t\tmax-width: rem(40);\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1024)) {\n\t#home {\n\t\tpadding: rem(120) rem(48);\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\tbody {\n\t\tfont-size: rem(16);\n\t}\n\n\t#home {\n\t\t#welcome {\n\t\t\tflex-direction: column;\n\t\t\tgap: rem(40);\n\n\t\t\tdiv,\n\t\t\timg {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\n\t\t.project-ctn {\n\t\t\tgap: rem(32);\n\n\t\t\t.project-heading {\n\t\t\t\tp {\n\t\t\t\t\tfont-size: rem(60);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t#skills-ctn {\n\t\t\t.skill {\n\t\t\t\twidth: 33%;\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t#home {\n\t\tgap: rem(80);\n\t\tpadding: rem(80) rem(24);\n\n\t\t#projects {\n\t\t\tgap: rem(48);\n\t\t}\n\n\t\t.project-ctn {\n\t\t\t.project-heading {\n\t\t\t\tp {\n\t\t\t\t\tfont-size: rem(40);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t#skills-ctn {\n\t\t\t.skill {\n\t\t\t\twidth: 50%;\n\t\t\t}\n\t\t}\n\n\t\t#about-me,\n\t\t#skills-ctn {\n\t\t\tgap: rem(40);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(320)) {\n\t#home {\n\t\t#skills-ctn {\n\t\t\t.skill {\n\t\t\t\th3 {\n\t\t\t\t\tfont-size: rem(18);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#btn-top {\n\tposition: fixed;\n\tright: rem(50);\n\tbottom: rem(50);\n\tz-index: 3;\n}\n\n#btn-top:hover {\n\tcursor: pointer;\n}\n\n@media screen and (max-width: rem(425)) {\n\t#btn-top {\n\t\tright: rem(25);\n\t\tbottom: rem(25);\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\nbutton {\n\tcolor: $clr-white;\n\tfont-size: rem(20);\n\tpadding: rem(12) rem(60);\n\tborder-radius: rem(50);\n\tbackground-color: $clr-btn;\n\tborder: none;\n\ttransition: background-color 0.1s;\n}\n\nbutton:hover {\n\tcursor: pointer;\n\tbackground-color: $clr-btn-hover;\n}\n\n.btn-reset {\n\tmargin: 0 auto;\n}\n\n@media screen and (max-width: rem(425)) {\n\tbutton {\n\t\tfont-size: rem(16);\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\nfooter {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: rem(48);\n\tfont-size: rem(32);\n\theight: rem(312);\n\tborder-top: 1px solid $clr-gray-dark;\n\n\tdiv {\n\t\tdisplay: flex;\n\t\tgap: rem(48);\n\t}\n\n\ta {\n\t\tcolor: $clr-white;\n\t\ttransition: color 0.1s;\n\t}\n\n\ta:hover {\n\t\tcolor: $clr-gray;\n\t}\n}\n","@use \"../utilities/\" as *;\n\n.main-banner {\n\tposition: relative;\n\ttext-align: center;\n\n\th1 {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t}\n\n\timg {\n\t\twidth: 100%;\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t.main-banner {\n\t\th1 {\n\t\t\tfont-size: rem(24);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#project-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: rem(120) 0;\n\tgap: rem(240);\n\n\t.project {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tgap: rem(30);\n\n\t\timg {\n\t\t\twidth: 50%;\n\t\t\theight: 100%;\n\t\t}\n\t}\n\n\t.project-content {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tgap: rem(48);\n\t\twidth: 50%;\n\n\t\tp {\n\t\t\tmax-width: rem(520);\n\t\t\tfont-size: rem(16);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1620)) {\n\t#project-list {\n\t\tpadding: rem(120) rem(48);\n\t}\n}\n\n@media screen and (max-width: rem(1024)) {\n\t#project-list {\n\t\tgap: rem(120);\n\n\t\t.project-content {\n\t\t\tgap: rem(24);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t#project-list {\n\t\t.project {\n\t\t\tflex-direction: column;\n\n\t\t\timg {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\n\t\t\t.project-content {\n\t\t\t\twidth: 100%;\n\n\t\t\t\tp {\n\t\t\t\t\tmax-width: none;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t#coffee-time-project {\n\t\t\tflex-direction: column-reverse;\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t#project-list {\n\t\tgap: rem(80);\n\t\tpadding: rem(80) rem(24);\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#experience-page {\n\tdisplay: flex;\n\n\taside {\n\t\tpadding: rem(120) 0;\n\t\tborder-right: 1px solid $clr-gray-dark;\n\t\twidth: 25%;\n\n\t\tul {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tposition: sticky;\n\t\t\ttop: rem(80);\n\t\t\tgap: rem(24);\n\t\t}\n\n\t\th4 {\n\t\t\tfont-weight: 700;\n\t\t}\n\t}\n\n\tsection {\n\t\tpadding: rem(120) 0 rem(120) rem(80);\n\t\twidth: 75%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(120);\n\t}\n\n\t.experience-content {\n\t\tfont-size: rem(16);\n\n\t\tul {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: rem(8);\n\t\t\tlist-style: disc;\n\t\t\tlist-style-position: outside;\n\t\t}\n\n\t\t.dates {\n\t\t\tfont-size: rem(20);\n\t\t\tfont-style: italic;\n\t\t\tfont-weight: 400;\n\t\t\tdisplay: inline-block;\n\t\t}\n\n\t\t.title {\n\t\t\tfont-size: rem(40);\n\t\t\tfont-weight: 300;\n\t\t\tfont-style: normal;\n\t\t}\n\n\t\tp {\n\t\t\tfont-size: rem(20);\n\t\t\tfont-weight: 700;\n\t\t\tmargin-bottom: rem(24);\n\t\t\tmargin-top: rem(8);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1620)) {\n\t#experience-page {\n\t\taside,\n\t\tsection {\n\t\t\tpadding: rem(120) rem(48);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1024)) {\n\t#experience-page {\n\t\t.experience-content {\n\t\t\t.dates {\n\t\t\t\tfont-size: rem(16);\n\t\t\t}\n\n\t\t\t.title {\n\t\t\t\tfont-size: rem(24);\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t#experience-page {\n\t\taside {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\tsection {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t#experience-page {\n\t\tpadding: 0 rem(24);\n\n\t\tsection {\n\t\t\tpadding: rem(80) 0;\n\t\t\tgap: rem(80);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#about-content {\n\tdisplay: flex;\n\tpadding: rem(120) 0;\n\tjustify-content: space-between;\n\talign-items: center;\n\tgap: rem(48);\n\n\timg {\n\t\twidth: 50%;\n\t\tmax-width: rem(795);\n\t}\n}\n\n@media screen and (max-width: rem(1620)) {\n\t#about-content {\n\t\tpadding: rem(120) rem(48);\n\t}\n}\n\n@media screen and (max-width: rem(1024)) {\n\tp {\n\t\tfont-size: rem(16);\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t#about-content {\n\t\tflex-direction: column;\n\n\t\timg {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t#about-content {\n\t\tpadding: rem(80) rem(24);\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n.project-page {\n\tdisplay: flex;\n\n\taside {\n\t\tpadding: rem(120) 0;\n\t\tborder-right: 1px solid $clr-gray-dark;\n\t\twidth: 25%;\n\n\t\tul {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tposition: sticky;\n\t\t\ttop: rem(80);\n\t\t\tgap: rem(24);\n\t\t}\n\t}\n\n\tsection {\n\t\tpadding: rem(120) 0;\n\t\twidth: 75%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(120);\n\n\t\t.project-section {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: rem(48);\n\t\t\talign-items: center;\n\t\t}\n\n\t\th2 {\n\t\t\tfont-size: rem(40);\n\t\t\tfont-weight: 300;\n\t\t}\n\n\t\tp {\n\t\t\tmax-width: rem(795);\n\t\t}\n\n\t\timg {\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t\tmax-height: rem(450);\n\t\t\tmax-width: rem(800);\n\t\t}\n\t}\n\n\t// this is for the portfolio project\n\t#version-one {\n\t\timg {\n\t\t\tmax-height: rem(700);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1620)) {\n\t.project-page {\n\t\taside,\n\t\tsection {\n\t\t\tpadding: rem(120) rem(48);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t.project-page {\n\t\taside {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\tsection {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t.project-page {\n\t\tsection {\n\t\t\tpadding: rem(80) rem(24);\n\t\t\tgap: rem(80);\n\n\t\t\th2 {\n\t\t\t\tfont-size: rem(24);\n\t\t\t}\n\n\t\t\t.project-section {\n\t\t\t\tgap: rem(24);\n\t\t\t}\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n.mobile-nav {\n\tdisplay: flex;\n\tvisibility: hidden;\n\topacity: 0;\n\theight: 100%;\n\twidth: 100%;\n\tbackground-color: rgba(255, 255, 255, 0.2);\n\ttransition: background-color 0.2s ease-out;\n\tposition: fixed;\n\tz-index: 10;\n\n\t.mobile-nav-bg {\n\t\twidth: 0%;\n\t\ttransition: width 0.2s ease-in;\n\t\tbackground-color: $clr-bg;\n\t\toverflow: hidden;\n\t}\n\n\t.active-ctn {\n\t\twidth: 80%;\n\t}\n\n\t.nav-links {\n\t\twhite-space: nowrap;\n\t}\n\n\t#btn-ctn {\n\t\twidth: 20%;\n\t}\n\n\tbutton {\n\t\tbackground: none;\n\t\tcolor: $clr-black;\n\t\tfont-size: rem(32);\n\t\tpadding-left: rem(16);\n\t\tposition: relative;\n\t\ttop: rem(16);\n\t}\n\n\t#mobile-nav-ctn {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(32);\n\t\tfont-size: rem(20);\n\t\tpadding: rem(32);\n\t}\n}\n\n.active-bg {\n\tbackground-color: rgba(255, 255, 255, 0.8);\n\tvisibility: visible;\n\topacity: 1;\n}\n"],"sourceRoot":""}]);
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
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ "./src/js/init.js");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/styles.scss */ "./src/scss/styles.scss");



(0,_init_js__WEBPACK_IMPORTED_MODULE_0__.init)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDg0QkFBODRCLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sVUFBVSxNQUFNLFFBQVEsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sUUFBUSxXQUFXLE9BQU8sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFlBQVksT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxPQUFPLFVBQVUsV0FBVyxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxPQUFPLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxRQUFRLE1BQU0sVUFBVSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxRQUFRLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxVQUFVLE9BQU8sT0FBTyxX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cmMvc2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzPzMyMWYiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2pzL2NvbXBvbmVudHMvdG9Ub3BCdG4uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2pzL2luaXQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyZjtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNCUpO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250OiBpbmhlcml0O1xufVxuXG5pbWcsXG5waWN0dXJlLFxuc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmgxLFxuaDIsXG5oMyB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cblxuaDEsXG5oMiB7XG4gIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cblxuaDMge1xuICBmb250LXNpemU6IDEuMzc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5hLFxuYTp2aXNpdGVkLFxuYTphY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gIGgxLFxuICBoMiB7XG4gICAgZm9udC1zaXplOiAzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICBoMSxcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTkuMzc1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuaGVhZGVyIHtcbiAgcGFkZGluZzogM3JlbSAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xufVxuXG4jaGVhZGVyLWxheW91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDNyZW07XG59XG51bCBhIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcbn1cbnVsIGE6aG92ZXIge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbn1cbnVsIC5hY3RpdmUtbmF2IHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG59XG5cbiNtb2JpbGUtbmF2LWJ0biB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAyLjVyZW07XG4gIGhlaWdodDogMy4xMjVyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNtb2JpbGUtbmF2LWJ0biAubW9iaWxlLWxpbmUge1xuICBoZWlnaHQ6IDAuMjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcbiAgaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni44NzVyZW0pIHtcbiAgI2Rlc2t0b3AtbmF2LWN0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjbW9iaWxlLW5hdi1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cbiAgaGVhZGVyIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjEuODc1cmVtKSB7XG4gIGhlYWRlciBpbWcge1xuICAgIG1heC13aWR0aDogMTByZW07XG4gIH1cbn1cbiNob21lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTIuNXJlbSAwO1xuICBnYXA6IDEyLjVyZW07XG4gIG1heC13aWR0aDogNzUuMzc1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNob21lICN3ZWxjb21lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3LjVyZW07XG59XG4jaG9tZSAjd2VsY29tZSBkaXYge1xuICB3aWR0aDogNjAlO1xufVxuI2hvbWUgI3dlbGNvbWUgcCB7XG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XG59XG4jaG9tZSAjd2VsY29tZSBpbWcge1xuICB3aWR0aDogNDAlO1xuICBtYXgtd2lkdGg6IDE4Ljc1cmVtO1xufVxuI2hvbWUgI2hlYWRlci1sb2NhdGlvbiB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4jaG9tZSAjcHJvamVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDQ5LjY4NzVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6IDcuNXJlbTtcbn1cbiNob21lICNwcm9qZWN0cyAjcHJvamVjdHMtb25lLWxpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2hvbWUgLnByb2plY3QtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyLjVyZW07XG59XG4jaG9tZSAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNob21lIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHAge1xuICBmb250LXNpemU6IDVyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4jaG9tZSAjYWJvdXQtbWUsXG4jaG9tZSAjc2tpbGxzLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXJlbTtcbn1cbiNob21lICNhYm91dC1tZSBoMixcbiNob21lICNza2lsbHMtY3RuIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2hvbWUgI2Fib3V0LW1lIHtcbiAgbWF4LXdpZHRoOiA0MS4wNjI1cmVtO1xufVxuI2hvbWUgI3NraWxscy1jdG4ge1xuICBtYXgtd2lkdGg6IDYxLjkzNzVyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuI2hvbWUgI3NraWxscy1jdG4gI3NraWxscy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA0cmVtIDA7XG59XG4jaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEuNXJlbTtcbiAgd2lkdGg6IDIwJTtcbn1cbiNob21lICNza2lsbHMtY3RuIC5za2lsbCBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNob21lICNza2lsbHMtY3RuIC5za2lsbC1pbWctY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNi41cmVtO1xuICB3aWR0aDogNi41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMCwgMCUsIDY1JSk7XG4gIGJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG59XG4jaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwtaW1nLWN0biBpbWcge1xuICBtYXgtaGVpZ2h0OiAyLjVyZW07XG4gIG1heC13aWR0aDogMi41cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NHJlbSkge1xuICAjaG9tZSB7XG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gIGJvZHkge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICAjaG9tZSAjd2VsY29tZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIuNXJlbTtcbiAgfVxuICAjaG9tZSAjd2VsY29tZSBkaXYsXG4gICNob21lICN3ZWxjb21lIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI2hvbWUgLnByb2plY3QtY3RuIHtcbiAgICBnYXA6IDJyZW07XG4gIH1cbiAgI2hvbWUgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcgcCB7XG4gICAgZm9udC1zaXplOiAzLjc1cmVtO1xuICB9XG4gICNob21lICNza2lsbHMtY3RuIC5za2lsbCB7XG4gICAgd2lkdGg6IDMzJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICAjaG9tZSB7XG4gICAgZ2FwOiA1cmVtO1xuICAgIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xuICB9XG4gICNob21lICNwcm9qZWN0cyB7XG4gICAgZ2FwOiAzcmVtO1xuICB9XG4gICNob21lIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHAge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gICNob21lICNza2lsbHMtY3RuIC5za2lsbCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAjaG9tZSAjYWJvdXQtbWUsXG4gICNob21lICNza2lsbHMtY3RuIHtcbiAgICBnYXA6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjByZW0pIHtcbiAgI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIGgzIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICB9XG59XG4jYnRuLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDMuMTI1cmVtO1xuICBib3R0b206IDMuMTI1cmVtO1xuICB6LWluZGV4OiAzO1xufVxuXG4jYnRuLXRvcDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICAjYnRuLXRvcCB7XG4gICAgcmlnaHQ6IDEuNTYyNXJlbTtcbiAgICBib3R0b206IDEuNTYyNXJlbTtcbiAgfVxufVxuYnV0dG9uIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgcGFkZGluZzogMC43NXJlbSAzLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNSwgNzUlLCA1OCUpO1xuICBib3JkZXI6IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1LCA3MSUsIDM5JSk7XG59XG5cbi5idG4tcmVzZXQge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogM3JlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBoZWlnaHQ6IDE5LjVyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XG59XG5mb290ZXIgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAzcmVtO1xufVxuZm9vdGVyIGEge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcbn1cbmZvb3RlciBhOmhvdmVyIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcbn1cblxuLm1haW4tYmFubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbi1iYW5uZXIgaDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm1haW4tYmFubmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gIC5tYWluLWJhbm5lciBoMSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbiNwcm9qZWN0LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAgZ2FwOiAxNXJlbTtcbn1cbiNwcm9qZWN0LWxpc3QgLnByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS44NzVyZW07XG59XG4jcHJvamVjdC1saXN0IC5wcm9qZWN0IGltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDNyZW07XG4gIHdpZHRoOiA1MCU7XG59XG4jcHJvamVjdC1saXN0IC5wcm9qZWN0LWNvbnRlbnQgcCB7XG4gIG1heC13aWR0aDogMzIuNXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcbiAgI3Byb2plY3QtbGlzdCB7XG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XG4gICNwcm9qZWN0LWxpc3Qge1xuICAgIGdhcDogNy41cmVtO1xuICB9XG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCB7XG4gICAgZ2FwOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1jb250ZW50IHAge1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgfVxuICAjcHJvamVjdC1saXN0ICNjb2ZmZWUtdGltZS1wcm9qZWN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgI3Byb2plY3QtbGlzdCB7XG4gICAgZ2FwOiA1cmVtO1xuICAgIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xuICB9XG59XG4jZXhwZXJpZW5jZS1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiNleHBlcmllbmNlLXBhZ2UgYXNpZGUge1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xuICB3aWR0aDogMjUlO1xufVxuI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogNXJlbTtcbiAgZ2FwOiAxLjVyZW07XG59XG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIGg0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDcuNXJlbSAwIDcuNXJlbSA1cmVtO1xuICB3aWR0aDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDcuNXJlbTtcbn1cbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuICBsaXN0LXN0eWxlOiBkaXNjO1xuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBvdXRzaWRlO1xufVxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IC5kYXRlcyB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxLjI1cmVtKSB7XG4gICNleHBlcmllbmNlLXBhZ2UgYXNpZGUsXG4gICNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XG4gICNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCAuZGF0ZXMge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICAjZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjZXhwZXJpZW5jZS1wYWdlIHNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gICNleHBlcmllbmNlLXBhZ2Uge1xuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICB9XG4gICNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNXJlbSAwO1xuICAgIGdhcDogNXJlbTtcbiAgfVxufVxuI2Fib3V0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDNyZW07XG59XG4jYWJvdXQtY29udGVudCBpbWcge1xuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDQ5LjY4NzVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xuICAjYWJvdXQtY29udGVudCB7XG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgI2Fib3V0LWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgI2Fib3V0LWNvbnRlbnQgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgI2Fib3V0LWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xuICB9XG59XG4ucHJvamVjdC1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wcm9qZWN0LXBhZ2UgYXNpZGUge1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xuICB3aWR0aDogMjUlO1xufVxuLnByb2plY3QtcGFnZSBhc2lkZSB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogNXJlbTtcbiAgZ2FwOiAxLjVyZW07XG59XG4ucHJvamVjdC1wYWdlIHNlY3Rpb24ge1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAgd2lkdGg6IDc1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA3LjVyZW07XG59XG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gLnByb2plY3Qtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogM3JlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBoMiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnByb2plY3QtcGFnZSBzZWN0aW9uIHAge1xuICBtYXgtd2lkdGg6IDQ5LjY4NzVyZW07XG59XG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMjguMTI1cmVtO1xuICBtYXgtd2lkdGg6IDUwcmVtO1xufVxuLnByb2plY3QtcGFnZSAjdmVyc2lvbi1vbmUgaW1nIHtcbiAgbWF4LWhlaWdodDogNDMuNzVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xuICAucHJvamVjdC1wYWdlIGFzaWRlLFxuICAucHJvamVjdC1wYWdlIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDcuNXJlbSAzcmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAucHJvamVjdC1wYWdlIGFzaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgLnByb2plY3QtcGFnZSBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA1cmVtIDEuNXJlbTtcbiAgICBnYXA6IDVyZW07XG4gIH1cbiAgLnByb2plY3QtcGFnZSBzZWN0aW9uIGgyIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAucHJvamVjdC1wYWdlIHNlY3Rpb24gLnByb2plY3Qtc2VjdGlvbiB7XG4gICAgZ2FwOiAxLjVyZW07XG4gIH1cbn1cbi5tb2JpbGUtbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDtcbn1cbi5tb2JpbGUtbmF2IC5tb2JpbGUtbmF2LWJnIHtcbiAgd2lkdGg6IDAlO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzIGVhc2UtaW47XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNCUpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1vYmlsZS1uYXYgLmFjdGl2ZS1jdG4ge1xuICB3aWR0aDogODAlO1xufVxuLm1vYmlsZS1uYXYgLm5hdi1saW5rcyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ubW9iaWxlLW5hdiAjYnRuLWN0biB7XG4gIHdpZHRoOiAyMCU7XG59XG4ubW9iaWxlLW5hdiBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXJlbTtcbn1cbi5tb2JpbGUtbmF2ICNtb2JpbGUtbmF2LWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4uYWN0aXZlLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fZ2VuZXJhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fY29udGFpbmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19tYWluSG9tZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL190b1RvcEJ0bi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19idXR0b25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19tYWluQmFubmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX3BvcnRmb2xpb1BhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fZXhwZXJpZW5jZVBhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fYWJvdXRQYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX3Byb2plY3RQYWdlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19tb2JpbGVOYXYuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNDLGVBQUE7RUFDQSx1QkFBQTtBQ0hEOztBRE1BO0VBQ0MsK0JFVmM7RUZXZCxtQkFBQTtFQUNBLHVCR05XO0VIT1gsZ0NHWlE7RUhhUixnQkFBQTtBQ0hEOztBR1hBOzs7RUFHQyxzQkFBQTtBSGNEOztBR1hBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FIY0Q7O0FHWEE7OztFQUdDLGNBQUE7QUhjRDs7QUkxQkE7OztFQUdDLFNBQUE7RUFDQSxnQkFBQTtBSjZCRDs7QUkxQkE7O0VBRUMsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FKNkJEOztBSTFCQTtFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7QUo2QkQ7O0FJMUJBOzs7RUFHQyxxQkFBQTtBSjZCRDs7QUkxQkE7RUFDQzs7SUFFQyxtQkFBQTtFSjZCQTtBQUNGO0FJMUJBO0VBQ0M7O0lBRUMsZUFBQTtFSjRCQTtBQUNGO0FLakVBO0VBQ0Msb0JBQUE7RUFDQSxjQUFBO0FMbUVEOztBTXBFQTtFQUNDLGVBQUE7RUFDQSx3Q0FBQTtBTnVFRDs7QU1wRUE7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBTnVFRDs7QU1wRUE7RUFDQyxnQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FOdUVEO0FNckVDO0VBQ0Msc0JKYlM7RUljVCxzQkFBQTtBTnVFRjtBTXBFQztFQUNDLHVCSm5CVTtBRnlGWjtBTW5FQztFQUNDLHVCSnZCVTtBRjRGWjs7QU1qRUE7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c0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FoQjZtQkY7O0FnQnptQkE7RUFDQywwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBaEI0bUJEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiY29sb3JzXFxcIiBhcyAqO1xcbkB1c2UgXFxcImZvbnRzXFxcIiBhcyAqO1xcblxcbmh0bWwge1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSB7XFxuXFx0Zm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxuXFx0Zm9udC1zaXplOiByZW0oMTgpO1xcblxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItYmc7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXCIsXCJodG1sIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmY7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDQlKTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbmltZyxcXG5waWN0dXJlLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgZm9udC1zaXplOiAzLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XFxuICBoMSxcXG4gIGgyIHtcXG4gICAgZm9udC1zaXplOiAzLjEyNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgaDEsXFxuICBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG59XFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDk5LjM3NXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogM3JlbSAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzMlKTtcXG59XFxuXFxuI2hlYWRlci1sYXlvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG51bCBhIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xcbn1cXG51bCBhOmhvdmVyIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbn1cXG51bCAuYWN0aXZlLW5hdiB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG59XFxuXFxuI21vYmlsZS1uYXYtYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jbW9iaWxlLW5hdi1idG4gLm1vYmlsZS1saW5lIHtcXG4gIGhlaWdodDogMC4yNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xcbiAgaGVhZGVyIHtcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuODc1cmVtKSB7XFxuICAjZGVza3RvcC1uYXYtY3RuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gICNtb2JpbGUtbmF2LWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gIGhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gIH1cXG4gIGhlYWRlciBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDE1cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMS44NzVyZW0pIHtcXG4gIGhlYWRlciBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwcmVtO1xcbiAgfVxcbn1cXG4jaG9tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEyLjVyZW0gMDtcXG4gIGdhcDogMTIuNXJlbTtcXG4gIG1heC13aWR0aDogNzUuMzc1cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jaG9tZSAjd2VsY29tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNy41cmVtO1xcbn1cXG4jaG9tZSAjd2VsY29tZSBkaXYge1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuI2hvbWUgI3dlbGNvbWUgcCB7XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbn1cXG4jaG9tZSAjd2VsY29tZSBpbWcge1xcbiAgd2lkdGg6IDQwJTtcXG4gIG1heC13aWR0aDogMTguNzVyZW07XFxufVxcbiNob21lICNoZWFkZXItbG9jYXRpb24ge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbiNob21lICNwcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogNDkuNjg3NXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiA3LjVyZW07XFxufVxcbiNob21lICNwcm9qZWN0cyAjcHJvamVjdHMtb25lLWxpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2hvbWUgLnByb2plY3QtY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyLjVyZW07XFxufVxcbiNob21lIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jaG9tZSAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyBwIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbiNob21lICNhYm91dC1tZSxcXG4jaG9tZSAjc2tpbGxzLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXJlbTtcXG59XFxuI2hvbWUgI2Fib3V0LW1lIGgyLFxcbiNob21lICNza2lsbHMtY3RuIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2hvbWUgI2Fib3V0LW1lIHtcXG4gIG1heC13aWR0aDogNDEuMDYyNXJlbTtcXG59XFxuI2hvbWUgI3NraWxscy1jdG4ge1xcbiAgbWF4LXdpZHRoOiA2MS45Mzc1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNob21lICNza2lsbHMtY3RuICNza2lsbHMtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDRyZW0gMDtcXG59XFxuI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS41cmVtO1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIGgzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2hvbWUgI3NraWxscy1jdG4gLnNraWxsLWltZy1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNi41cmVtO1xcbiAgd2lkdGg6IDYuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgwLCAwJSwgNjUlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDYuMjVyZW07XFxufVxcbiNob21lICNza2lsbHMtY3RuIC5za2lsbC1pbWctY3RuIGltZyB7XFxuICBtYXgtaGVpZ2h0OiAyLjVyZW07XFxuICBtYXgtd2lkdGg6IDIuNXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcXG4gICNob21lIHtcXG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XFxuICBib2R5IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgI2hvbWUgI3dlbGNvbWUge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIuNXJlbTtcXG4gIH1cXG4gICNob21lICN3ZWxjb21lIGRpdixcXG4gICNob21lICN3ZWxjb21lIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgI2hvbWUgLnByb2plY3QtY3RuIHtcXG4gICAgZ2FwOiAycmVtO1xcbiAgfVxcbiAgI2hvbWUgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcgcCB7XFxuICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcXG4gIH1cXG4gICNob21lICNza2lsbHMtY3RuIC5za2lsbCB7XFxuICAgIHdpZHRoOiAzMyU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gICNob21lIHtcXG4gICAgZ2FwOiA1cmVtO1xcbiAgICBwYWRkaW5nOiA1cmVtIDEuNXJlbTtcXG4gIH1cXG4gICNob21lICNwcm9qZWN0cyB7XFxuICAgIGdhcDogM3JlbTtcXG4gIH1cXG4gICNob21lIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHAge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG4gICNob21lICNza2lsbHMtY3RuIC5za2lsbCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuICAjaG9tZSAjYWJvdXQtbWUsXFxuICAjaG9tZSAjc2tpbGxzLWN0biB7XFxuICAgIGdhcDogMi41cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMHJlbSkge1xcbiAgI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIGgzIHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIH1cXG59XFxuI2J0bi10b3Age1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDMuMTI1cmVtO1xcbiAgYm90dG9tOiAzLjEyNXJlbTtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbiNidG4tdG9wOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgI2J0bi10b3Age1xcbiAgICByaWdodDogMS41NjI1cmVtO1xcbiAgICBib3R0b206IDEuNTYyNXJlbTtcXG4gIH1cXG59XFxuYnV0dG9uIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgcGFkZGluZzogMC43NXJlbSAzLjc1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMy4xMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1LCA3NSUsIDU4JSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1LCA3MSUsIDM5JSk7XFxufVxcblxcbi5idG4tcmVzZXQge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgaGVpZ2h0OiAxOS41cmVtO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzMlKTtcXG59XFxuZm9vdGVyIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5mb290ZXIgYSB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XFxufVxcbmZvb3RlciBhOmhvdmVyIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XFxufVxcblxcbi5tYWluLWJhbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tYWluLWJhbm5lciBoMSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4ubWFpbi1iYW5uZXIgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICAubWFpbi1iYW5uZXIgaDEge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG59XFxuI3Byb2plY3QtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xcbiAgZ2FwOiAxNXJlbTtcXG59XFxuI3Byb2plY3QtbGlzdCAucHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS44NzVyZW07XFxufVxcbiNwcm9qZWN0LWxpc3QgLnByb2plY3QgaW1nIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG4gIHdpZHRoOiA1MCU7XFxufVxcbiNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCBwIHtcXG4gIG1heC13aWR0aDogMzIuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxLjI1cmVtKSB7XFxuICAjcHJvamVjdC1saXN0IHtcXG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XFxuICAjcHJvamVjdC1saXN0IHtcXG4gICAgZ2FwOiA3LjVyZW07XFxuICB9XFxuICAjcHJvamVjdC1saXN0IC5wcm9qZWN0LWNvbnRlbnQge1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcXG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3Qge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1jb250ZW50IHAge1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7XFxuICB9XFxuICAjcHJvamVjdC1saXN0ICNjb2ZmZWUtdGltZS1wcm9qZWN0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICAjcHJvamVjdC1saXN0IHtcXG4gICAgZ2FwOiA1cmVtO1xcbiAgICBwYWRkaW5nOiA1cmVtIDEuNXJlbTtcXG4gIH1cXG59XFxuI2V4cGVyaWVuY2UtcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIHtcXG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDVyZW07XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSBoNCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIHNlY3Rpb24ge1xcbiAgcGFkZGluZzogNy41cmVtIDAgNy41cmVtIDVyZW07XFxuICB3aWR0aDogNzUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDcuNXJlbTtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBsaXN0LXN0eWxlOiBkaXNjO1xcbiAgbGlzdC1zdHlsZS1wb3NpdGlvbjogb3V0c2lkZTtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IC5kYXRlcyB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHAge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxLjI1cmVtKSB7XFxuICAjZXhwZXJpZW5jZS1wYWdlIGFzaWRlLFxcbiAgI2V4cGVyaWVuY2UtcGFnZSBzZWN0aW9uIHtcXG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XFxuICAjZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLmRhdGVzIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xcbiAgI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAjZXhwZXJpZW5jZS1wYWdlIHNlY3Rpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgI2V4cGVyaWVuY2UtcGFnZSB7XFxuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgfVxcbiAgI2V4cGVyaWVuY2UtcGFnZSBzZWN0aW9uIHtcXG4gICAgcGFkZGluZzogNXJlbSAwO1xcbiAgICBnYXA6IDVyZW07XFxuICB9XFxufVxcbiNhYm91dC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiA3LjVyZW0gMDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxufVxcbiNhYm91dC1jb250ZW50IGltZyB7XFxuICB3aWR0aDogNTAlO1xcbiAgbWF4LXdpZHRoOiA0OS42ODc1cmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcXG4gICNhYm91dC1jb250ZW50IHtcXG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XFxuICBwIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xcbiAgI2Fib3V0LWNvbnRlbnQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgI2Fib3V0LWNvbnRlbnQgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XFxuICAjYWJvdXQtY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xcbiAgfVxcbn1cXG4ucHJvamVjdC1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wcm9qZWN0LXBhZ2UgYXNpZGUge1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XFxuICB3aWR0aDogMjUlO1xcbn1cXG4ucHJvamVjdC1wYWdlIGFzaWRlIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogNXJlbTtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG4ucHJvamVjdC1wYWdlIHNlY3Rpb24ge1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICB3aWR0aDogNzUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDcuNXJlbTtcXG59XFxuLnByb2plY3QtcGFnZSBzZWN0aW9uIC5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gaDIge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gcCB7XFxuICBtYXgtd2lkdGg6IDQ5LjY4NzVyZW07XFxufVxcbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiAyOC4xMjVyZW07XFxuICBtYXgtd2lkdGg6IDUwcmVtO1xcbn1cXG4ucHJvamVjdC1wYWdlICN2ZXJzaW9uLW9uZSBpbWcge1xcbiAgbWF4LWhlaWdodDogNDMuNzVyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xcbiAgLnByb2plY3QtcGFnZSBhc2lkZSxcXG4gIC5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDcuNXJlbSAzcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xcbiAgLnByb2plY3QtcGFnZSBhc2lkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAucHJvamVjdC1wYWdlIHNlY3Rpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgLnByb2plY3QtcGFnZSBzZWN0aW9uIHtcXG4gICAgcGFkZGluZzogNXJlbSAxLjVyZW07XFxuICAgIGdhcDogNXJlbTtcXG4gIH1cXG4gIC5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgLnByb2plY3QtcGFnZSBzZWN0aW9uIC5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gIH1cXG59XFxuLm1vYmlsZS1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG4ubW9iaWxlLW5hdiAubW9iaWxlLW5hdi1iZyB7XFxuICB3aWR0aDogMCU7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzIGVhc2UtaW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDQlKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5tb2JpbGUtbmF2IC5hY3RpdmUtY3RuIHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbi5tb2JpbGUtbmF2IC5uYXYtbGlua3Mge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLm1vYmlsZS1uYXYgI2J0bi1jdG4ge1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuLm1vYmlsZS1uYXYgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDFyZW07XFxufVxcbi5tb2JpbGUtbmF2ICNtb2JpbGUtbmF2LWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5hY3RpdmUtYmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxufVwiLFwiJGZvbnQtcHJpbWFyeTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJmO1xcblwiLFwiLy8gUHJpbWFyeSBDb2xvcnNcXG4kY2xyLWJnOiBoc2woMCwgMCUsIDQlKTtcXG4kY2xyLWJ0bjogaHNsKDIzNSwgNzUlLCA1OCUpO1xcbiRjbHItYnRuLWhvdmVyOiBoc2woMjM1LCA3MSUsIDM5JSk7XFxuXFxuLy8gTmV1dHJhbCBDb2xvcnNcXG4kY2xyLXdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xcbiRjbHItZ3JheTogaHNsKDAsIDAlLCA2NSUpO1xcbiRjbHItZ3JheS1kYXJrOiBoc2woMCwgMCUsIDMzJSk7XFxuJGNsci1ibGFjazogaHNsKDAsIDAlLCAwJSk7XFxuXCIsXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUsXFxuc3ZnIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcImNvbG9yc1xcXCIgYXMgKjtcXG5cXG5oMSxcXG5oMixcXG5oMyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE7XFxufVxcblxcbmgxLFxcbmgyIHtcXG5cXHRmb250LXNpemU6IHJlbSg2MCk7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRsaW5lLWhlaWdodDogMS4zO1xcbn1cXG5cXG5oMyB7XFxuXFx0Zm9udC1zaXplOiByZW0oMjIpO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkLFxcbmE6YWN0aXZlIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg3NjgpKSB7XFxuXFx0aDEsXFxuXFx0aDIge1xcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDUwKTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg0MjUpKSB7XFxuXFx0aDEsXFxuXFx0aDIge1xcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDMyKTtcXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4uY29udGFpbmVyIHtcXG5cXHRtYXgtd2lkdGg6IHJlbSgxNTkwKTtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG59XFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcblxcbmhlYWRlciB7XFxuXFx0cGFkZGluZzogcmVtKDQ4KSAwO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY2xyLWdyYXktZGFyaztcXG59XFxuXFxuI2hlYWRlci1sYXlvdXQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiByZW0oNDgpO1xcblxcblxcdGEge1xcblxcdFxcdGNvbG9yOiAkY2xyLWdyYXk7XFxuXFx0XFx0dHJhbnNpdGlvbjogY29sb3IgMC4xcztcXG5cXHR9XFxuXFxuXFx0YTpob3ZlciB7XFxuXFx0XFx0Y29sb3I6ICRjbHItd2hpdGU7XFxuXFx0fVxcblxcblxcdC5hY3RpdmUtbmF2IHtcXG5cXHRcXHRjb2xvcjogJGNsci13aGl0ZTtcXG5cXHR9XFxufVxcblxcbiNtb2JpbGUtbmF2LWJ0biB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHR3aWR0aDogcmVtKDQwKTtcXG5cXHRoZWlnaHQ6IHJlbSg1MCk7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IHJlbSg4KTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXHQubW9iaWxlLWxpbmUge1xcblxcdFxcdGhlaWdodDogcmVtKDQpO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItZ3JheTtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiByZW0oMTApO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDE2MjApKSB7XFxuXFx0aGVhZGVyIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oNDgpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDkxMCkpIHtcXG5cXHQjZGVza3RvcC1uYXYtY3RuIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXG5cXHQjbW9iaWxlLW5hdi1idG4ge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcblxcdGhlYWRlciB7XFxuXFx0XFx0cGFkZGluZzogcmVtKDI0KTtcXG5cXG5cXHRcXHRpbWcge1xcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDI0MCk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDM1MCkpIHtcXG5cXHRoZWFkZXIge1xcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oMTYwKTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuI2hvbWUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRwYWRkaW5nOiByZW0oMjAwKSAwO1xcblxcdGdhcDogcmVtKDIwMCk7XFxuXFx0bWF4LXdpZHRoOiByZW0oMTIwNik7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHQjd2VsY29tZSB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGdhcDogcmVtKDEyMCk7XFxuXFxuXFx0XFx0ZGl2IHtcXG5cXHRcXHRcXHR3aWR0aDogNjAlO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRwIHtcXG5cXHRcXHRcXHRwYWRkaW5nLXRvcDogcmVtKDI0KTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0aW1nIHtcXG5cXHRcXHRcXHR3aWR0aDogNDAlO1xcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDMwMCk7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQjaGVhZGVyLWxvY2F0aW9uIHtcXG5cXHRcXHRjb2xvcjogJGNsci1ncmF5O1xcblxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0fVxcblxcblxcdCNwcm9qZWN0cyB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdG1heC13aWR0aDogcmVtKDc5NSk7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0Z2FwOiByZW0oMTIwKTtcXG5cXG5cXHRcXHQjcHJvamVjdHMtb25lLWxpbmVyIHtcXG5cXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQucHJvamVjdC1jdG4ge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRnYXA6IHJlbSg0MCk7XFxuXFxuXFx0XFx0LnByb2plY3QtaGVhZGluZyB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRcXHRcXHRwIHtcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSg4MCk7XFxuXFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDEwMDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQjYWJvdXQtbWUsXFxuXFx0I3NraWxscy1jdG4ge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRnYXA6IHJlbSg4MCk7XFxuXFxuXFx0XFx0aDIge1xcblxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdCNhYm91dC1tZSB7XFxuXFx0XFx0bWF4LXdpZHRoOiByZW0oNjU3KTtcXG5cXHR9XFxuXFxuXFx0I3NraWxscy1jdG4ge1xcblxcdFxcdG1heC13aWR0aDogcmVtKDk5MSk7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFxuXFx0XFx0I3NraWxscy1saXN0IHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRcXHRnYXA6IHJlbSg2NCkgMDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0LnNraWxsIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRcXHRnYXA6IHJlbSgyNCk7XFxuXFx0XFx0XFx0d2lkdGg6IDIwJTtcXG5cXG5cXHRcXHRcXHRoMyB7XFxuXFx0XFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0LnNraWxsLWltZy1jdG4ge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRcXHRoZWlnaHQ6IHJlbSgxMDQpO1xcblxcdFxcdFxcdHdpZHRoOiByZW0oMTA0KTtcXG5cXHRcXHRcXHRib3JkZXI6IDFweCBzb2xpZCAkY2xyLWdyYXk7XFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogcmVtKDEwMCk7XFxuXFxuXFx0XFx0XFx0aW1nIHtcXG5cXHRcXHRcXHRcXHRtYXgtaGVpZ2h0OiByZW0oNDApO1xcblxcdFxcdFxcdFxcdG1heC13aWR0aDogcmVtKDQwKTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDEwMjQpKSB7XFxuXFx0I2hvbWUge1xcblxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIHJlbSg0OCk7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzY4KSkge1xcblxcdGJvZHkge1xcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXG5cXHR9XFxuXFxuXFx0I2hvbWUge1xcblxcdFxcdCN3ZWxjb21lIHtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdGdhcDogcmVtKDQwKTtcXG5cXG5cXHRcXHRcXHRkaXYsXFxuXFx0XFx0XFx0aW1nIHtcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdC5wcm9qZWN0LWN0biB7XFxuXFx0XFx0XFx0Z2FwOiByZW0oMzIpO1xcblxcblxcdFxcdFxcdC5wcm9qZWN0LWhlYWRpbmcge1xcblxcdFxcdFxcdFxcdHAge1xcblxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDYwKTtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQjc2tpbGxzLWN0biB7XFxuXFx0XFx0XFx0LnNraWxsIHtcXG5cXHRcXHRcXHRcXHR3aWR0aDogMzMlO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcblxcdCNob21lIHtcXG5cXHRcXHRnYXA6IHJlbSg4MCk7XFxuXFx0XFx0cGFkZGluZzogcmVtKDgwKSByZW0oMjQpO1xcblxcblxcdFxcdCNwcm9qZWN0cyB7XFxuXFx0XFx0XFx0Z2FwOiByZW0oNDgpO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQucHJvamVjdC1jdG4ge1xcblxcdFxcdFxcdC5wcm9qZWN0LWhlYWRpbmcge1xcblxcdFxcdFxcdFxcdHAge1xcblxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDQwKTtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQjc2tpbGxzLWN0biB7XFxuXFx0XFx0XFx0LnNraWxsIHtcXG5cXHRcXHRcXHRcXHR3aWR0aDogNTAlO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0I2Fib3V0LW1lLFxcblxcdFxcdCNza2lsbHMtY3RuIHtcXG5cXHRcXHRcXHRnYXA6IHJlbSg0MCk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDMyMCkpIHtcXG5cXHQjaG9tZSB7XFxuXFx0XFx0I3NraWxscy1jdG4ge1xcblxcdFxcdFxcdC5za2lsbCB7XFxuXFx0XFx0XFx0XFx0aDMge1xcblxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDE4KTtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jYnRuLXRvcCB7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHJpZ2h0OiByZW0oNTApO1xcblxcdGJvdHRvbTogcmVtKDUwKTtcXG5cXHR6LWluZGV4OiAzO1xcbn1cXG5cXG4jYnRuLXRvcDpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcblxcdCNidG4tdG9wIHtcXG5cXHRcXHRyaWdodDogcmVtKDI1KTtcXG5cXHRcXHRib3R0b206IHJlbSgyNSk7XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuYnV0dG9uIHtcXG5cXHRjb2xvcjogJGNsci13aGl0ZTtcXG5cXHRmb250LXNpemU6IHJlbSgyMCk7XFxuXFx0cGFkZGluZzogcmVtKDEyKSByZW0oNjApO1xcblxcdGJvcmRlci1yYWRpdXM6IHJlbSg1MCk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1idG47XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1idG4taG92ZXI7XFxufVxcblxcbi5idG4tcmVzZXQge1xcblxcdG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcblxcdGJ1dHRvbiB7XFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbmZvb3RlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiByZW0oNDgpO1xcblxcdGZvbnQtc2l6ZTogcmVtKDMyKTtcXG5cXHRoZWlnaHQ6IHJlbSgzMTIpO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAkY2xyLWdyYXktZGFyaztcXG5cXG5cXHRkaXYge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0Z2FwOiByZW0oNDgpO1xcblxcdH1cXG5cXG5cXHRhIHtcXG5cXHRcXHRjb2xvcjogJGNsci13aGl0ZTtcXG5cXHRcXHR0cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xcblxcdH1cXG5cXG5cXHRhOmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogJGNsci1ncmF5O1xcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbi5tYWluLWJhbm5lciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG5cXHRoMSB7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdHRvcDogNTAlO1xcblxcdFxcdGxlZnQ6IDUwJTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHR9XFxuXFxuXFx0aW1nIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg0MjUpKSB7XFxuXFx0Lm1haW4tYmFubmVyIHtcXG5cXHRcXHRoMSB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMjQpO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jcHJvamVjdC1saXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogcmVtKDEyMCkgMDtcXG5cXHRnYXA6IHJlbSgyNDApO1xcblxcblxcdC5wcm9qZWN0IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGdhcDogcmVtKDMwKTtcXG5cXG5cXHRcXHRpbWcge1xcblxcdFxcdFxcdHdpZHRoOiA1MCU7XFxuXFx0XFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtY29udGVudCB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0Z2FwOiByZW0oNDgpO1xcblxcdFxcdHdpZHRoOiA1MCU7XFxuXFxuXFx0XFx0cCB7XFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oNTIwKTtcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDE2MjApKSB7XFxuXFx0I3Byb2plY3QtbGlzdCB7XFxuXFx0XFx0cGFkZGluZzogcmVtKDEyMCkgcmVtKDQ4KTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxMDI0KSkge1xcblxcdCNwcm9qZWN0LWxpc3Qge1xcblxcdFxcdGdhcDogcmVtKDEyMCk7XFxuXFxuXFx0XFx0LnByb2plY3QtY29udGVudCB7XFxuXFx0XFx0XFx0Z2FwOiByZW0oMjQpO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg3NjgpKSB7XFxuXFx0I3Byb2plY3QtbGlzdCB7XFxuXFx0XFx0LnByb2plY3Qge1xcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuXFx0XFx0XFx0aW1nIHtcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0LnByb2plY3QtY29udGVudCB7XFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFxuXFx0XFx0XFx0XFx0cCB7XFxuXFx0XFx0XFx0XFx0XFx0bWF4LXdpZHRoOiBub25lO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdCNjb2ZmZWUtdGltZS1wcm9qZWN0IHtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXG5cXHQjcHJvamVjdC1saXN0IHtcXG5cXHRcXHRnYXA6IHJlbSg4MCk7XFxuXFx0XFx0cGFkZGluZzogcmVtKDgwKSByZW0oMjQpO1xcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNleHBlcmllbmNlLXBhZ2Uge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFxuXFx0YXNpZGUge1xcblxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIDA7XFxuXFx0XFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGNsci1ncmF5LWRhcms7XFxuXFx0XFx0d2lkdGg6IDI1JTtcXG5cXG5cXHRcXHR1bCB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdHBvc2l0aW9uOiBzdGlja3k7XFxuXFx0XFx0XFx0dG9wOiByZW0oODApO1xcblxcdFxcdFxcdGdhcDogcmVtKDI0KTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0aDQge1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHRzZWN0aW9uIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSAwIHJlbSgxMjApIHJlbSg4MCk7XFxuXFx0XFx0d2lkdGg6IDc1JTtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0Z2FwOiByZW0oMTIwKTtcXG5cXHR9XFxuXFxuXFx0LmV4cGVyaWVuY2UtY29udGVudCB7XFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcblxcblxcdFxcdHVsIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0XFx0Z2FwOiByZW0oOCk7XFxuXFx0XFx0XFx0bGlzdC1zdHlsZTogZGlzYztcXG5cXHRcXHRcXHRsaXN0LXN0eWxlLXBvc2l0aW9uOiBvdXRzaWRlO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQuZGF0ZXMge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDIwKTtcXG5cXHRcXHRcXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRcXHRcXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0XFx0fVxcblxcblxcdFxcdC50aXRsZSB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oNDApO1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0XFx0XFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRwIHtcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgyMCk7XFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiByZW0oMjQpO1xcblxcdFxcdFxcdG1hcmdpbi10b3A6IHJlbSg4KTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTYyMCkpIHtcXG5cXHQjZXhwZXJpZW5jZS1wYWdlIHtcXG5cXHRcXHRhc2lkZSxcXG5cXHRcXHRzZWN0aW9uIHtcXG5cXHRcXHRcXHRwYWRkaW5nOiByZW0oMTIwKSByZW0oNDgpO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxMDI0KSkge1xcblxcdCNleHBlcmllbmNlLXBhZ2Uge1xcblxcdFxcdC5leHBlcmllbmNlLWNvbnRlbnQge1xcblxcdFxcdFxcdC5kYXRlcyB7XFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHQudGl0bGUge1xcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDI0KTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDc2OCkpIHtcXG5cXHQjZXhwZXJpZW5jZS1wYWdlIHtcXG5cXHRcXHRhc2lkZSB7XFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0c2VjdGlvbiB7XFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXG5cXHQjZXhwZXJpZW5jZS1wYWdlIHtcXG5cXHRcXHRwYWRkaW5nOiAwIHJlbSgyNCk7XFxuXFxuXFx0XFx0c2VjdGlvbiB7XFxuXFx0XFx0XFx0cGFkZGluZzogcmVtKDgwKSAwO1xcblxcdFxcdFxcdGdhcDogcmVtKDgwKTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuI2Fib3V0LWNvbnRlbnQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0cGFkZGluZzogcmVtKDEyMCkgMDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IHJlbSg0OCk7XFxuXFxuXFx0aW1nIHtcXG5cXHRcXHR3aWR0aDogNTAlO1xcblxcdFxcdG1heC13aWR0aDogcmVtKDc5NSk7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTYyMCkpIHtcXG5cXHQjYWJvdXQtY29udGVudCB7XFxuXFx0XFx0cGFkZGluZzogcmVtKDEyMCkgcmVtKDQ4KTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxMDI0KSkge1xcblxcdHAge1xcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg3NjgpKSB7XFxuXFx0I2Fib3V0LWNvbnRlbnQge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuXFx0XFx0aW1nIHtcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzY4KSkge1xcblxcdCNhYm91dC1jb250ZW50IHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oODApIHJlbSgyNCk7XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuLnByb2plY3QtcGFnZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXG5cXHRhc2lkZSB7XFxuXFx0XFx0cGFkZGluZzogcmVtKDEyMCkgMDtcXG5cXHRcXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkY2xyLWdyYXktZGFyaztcXG5cXHRcXHR3aWR0aDogMjUlO1xcblxcblxcdFxcdHVsIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0XFx0cG9zaXRpb246IHN0aWNreTtcXG5cXHRcXHRcXHR0b3A6IHJlbSg4MCk7XFxuXFx0XFx0XFx0Z2FwOiByZW0oMjQpO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0c2VjdGlvbiB7XFxuXFx0XFx0cGFkZGluZzogcmVtKDEyMCkgMDtcXG5cXHRcXHR3aWR0aDogNzUlO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRnYXA6IHJlbSgxMjApO1xcblxcblxcdFxcdC5wcm9qZWN0LXNlY3Rpb24ge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRnYXA6IHJlbSg0OCk7XFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0aDIge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDQwKTtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogMzAwO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRwIHtcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSg3OTUpO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRpbWcge1xcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdFxcdGhlaWdodDogYXV0bztcXG5cXHRcXHRcXHRtYXgtaGVpZ2h0OiByZW0oNDUwKTtcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSg4MDApO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0Ly8gdGhpcyBpcyBmb3IgdGhlIHBvcnRmb2xpbyBwcm9qZWN0XFxuXFx0I3ZlcnNpb24tb25lIHtcXG5cXHRcXHRpbWcge1xcblxcdFxcdFxcdG1heC1oZWlnaHQ6IHJlbSg3MDApO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNjIwKSkge1xcblxcdC5wcm9qZWN0LXBhZ2Uge1xcblxcdFxcdGFzaWRlLFxcblxcdFxcdHNlY3Rpb24ge1xcblxcdFxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIHJlbSg0OCk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDc2OCkpIHtcXG5cXHQucHJvamVjdC1wYWdlIHtcXG5cXHRcXHRhc2lkZSB7XFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0c2VjdGlvbiB7XFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXG5cXHQucHJvamVjdC1wYWdlIHtcXG5cXHRcXHRzZWN0aW9uIHtcXG5cXHRcXHRcXHRwYWRkaW5nOiByZW0oODApIHJlbSgyNCk7XFxuXFx0XFx0XFx0Z2FwOiByZW0oODApO1xcblxcblxcdFxcdFxcdGgyIHtcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSgyNCk7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdC5wcm9qZWN0LXNlY3Rpb24ge1xcblxcdFxcdFxcdFxcdGdhcDogcmVtKDI0KTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbi5tb2JpbGUtbmF2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR6LWluZGV4OiAxMDtcXG5cXG5cXHQubW9iaWxlLW5hdi1iZyB7XFxuXFx0XFx0d2lkdGg6IDAlO1xcblxcdFxcdHRyYW5zaXRpb246IHdpZHRoIDAuMnMgZWFzZS1pbjtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWJnO1xcblxcdFxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0fVxcblxcblxcdC5hY3RpdmUtY3RuIHtcXG5cXHRcXHR3aWR0aDogODAlO1xcblxcdH1cXG5cXG5cXHQubmF2LWxpbmtzIHtcXG5cXHRcXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdH1cXG5cXG5cXHQjYnRuLWN0biB7XFxuXFx0XFx0d2lkdGg6IDIwJTtcXG5cXHR9XFxuXFxuXFx0YnV0dG9uIHtcXG5cXHRcXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdFxcdGNvbG9yOiAkY2xyLWJsYWNrO1xcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDMyKTtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IHJlbSgxNik7XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdHRvcDogcmVtKDE2KTtcXG5cXHR9XFxuXFxuXFx0I21vYmlsZS1uYXYtY3RuIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0Z2FwOiByZW0oMzIpO1xcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDIwKTtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMzIpO1xcblxcdH1cXG59XFxuXFxuLmFjdGl2ZS1iZyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcblxcdHZpc2liaWxpdHk6IHZpc2libGU7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7IHVwZGF0ZUhlYWRlckFjdGl2ZUxpbmssIHJlbW92ZUhlYWRlclN0eWxlcywgbW9iaWxlTmF2SW5pdCB9O1xuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1saW5rc1wiKTtcbmNvbnN0IG1vYmlsZU5hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLW5hdi1idG5cIik7XG5jb25zdCBtb2JpbGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1uYXZcIik7XG5jb25zdCBtb2JpbGVOYXZFeGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbmF2LWV4aXRcIik7XG5jb25zdCBtb2JpbGVOYXZDdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1uYXYtYmdcIik7XG5cbmZ1bmN0aW9uIHVwZGF0ZUhlYWRlckFjdGl2ZUxpbmsoKSB7XG5cdG5hdi5mb3JFYWNoKChsaW5rKSA9PiB7XG5cdFx0bGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0dXBkYXRlSGVhZGVyU3R5bGVzKGxpbmspO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSGVhZGVyU3R5bGVzKGxpbmspIHtcblx0cmVtb3ZlSGVhZGVyU3R5bGVzKCk7XG5cdGFkZEhlYWRlclN0eWxlcyhsaW5rKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGVhZGVyU3R5bGVzKCkge1xuXHRuYXYuZm9yRWFjaCgoY2hpbGQpID0+IHtcblx0XHRjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLW5hdlwiKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZEhlYWRlclN0eWxlcyhsaW5rKSB7XG5cdGxpbmsuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1uYXZcIik7XG59XG5cbmZ1bmN0aW9uIG1vYmlsZU5hdkluaXQoKSB7XG5cdG1vYmlsZU5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdG1vYmlsZU5hdi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWJnXCIpO1xuXHRcdG1vYmlsZU5hdkN0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWN0blwiKTtcblx0fSk7XG5cblx0bW9iaWxlTmF2RXhpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdG1vYmlsZU5hdi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWJnXCIpO1xuXHRcdG1vYmlsZU5hdkN0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWN0blwiKTtcblx0fSk7XG59XG4iLCJleHBvcnQgeyBzY3JvbGxUb1RvcCB9O1xuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi10b3BcIik7XG5cbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2Nyb2xsVG9Ub3ApO1xuXG5mdW5jdGlvbiBzY3JvbGxUb1RvcCgpIHtcblx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbn1cbiIsImV4cG9ydCB7IGluaXQgfTtcbmltcG9ydCB7IHVwZGF0ZUhlYWRlckFjdGl2ZUxpbmssIG1vYmlsZU5hdkluaXQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IHsgc2Nyb2xsVG9Ub3AgfSBmcm9tIFwiLi9jb21wb25lbnRzL3RvVG9wQnRuXCI7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG5cdHVwZGF0ZUhlYWRlckFjdGl2ZUxpbmsoKTtcblx0c2Nyb2xsVG9Ub3AoKTtcblx0bW9iaWxlTmF2SW5pdCgpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaW5pdCB9IGZyb20gXCIuL2luaXQuanNcIjtcbmltcG9ydCBcIi4uL3Njc3Mvc3R5bGVzLnNjc3NcIjtcblxuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9