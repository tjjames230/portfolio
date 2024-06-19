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
/*!*****************************!*\
  !*** ./src/js/portfolio.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ "./src/js/init.js");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/styles.scss */ "./src/scss/styles.scss");



(0,_init_js__WEBPACK_IMPORTED_MODULE_0__.init)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGZvbGlvLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw4NEJBQTg0QixVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsTUFBTSxRQUFRLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLFFBQVEsV0FBVyxPQUFPLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxZQUFZLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sT0FBTyxVQUFVLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsUUFBUSxNQUFNLFVBQVUsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsUUFBUSxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsVUFBVSxPQUFPLE9B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Ly4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcz8zMjFmIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9qcy9jb21wb25lbnRzL3RvVG9wQnRuLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9qcy9pbml0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9qcy9wb3J0Zm9saW8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBmb250LXNpemU6IDEwMCU7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJmO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA0JSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmltZyxcbnBpY3R1cmUsXG5zdmcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDEsXG5oMixcbmgzIHtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuXG5oMSxcbmgyIHtcbiAgZm9udC1zaXplOiAzLjc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmEsXG5hOnZpc2l0ZWQsXG5hOmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgaDEsXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gIGgxLFxuICBoMiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5OS4zNzVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5oZWFkZXIge1xuICBwYWRkaW5nOiAzcmVtIDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XG59XG5cbiNoZWFkZXItbGF5b3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogM3JlbTtcbn1cbnVsIGEge1xuICBjb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xufVxudWwgYTpob3ZlciB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xufVxudWwgLmFjdGl2ZS1uYXYge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbn1cblxuI21vYmlsZS1uYXYtYnRuIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI21vYmlsZS1uYXYtYnRuIC5tb2JpbGUtbGluZSB7XG4gIGhlaWdodDogMC4yNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDNyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2Ljg3NXJlbSkge1xuICAjZGVza3RvcC1uYXYtY3RuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNtb2JpbGUtbmF2LWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgfVxuICBoZWFkZXIgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDE1cmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMS44NzVyZW0pIHtcbiAgaGVhZGVyIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMHJlbTtcbiAgfVxufVxuI2hvbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMi41cmVtIDA7XG4gIGdhcDogMTIuNXJlbTtcbiAgbWF4LXdpZHRoOiA3NS4zNzVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2hvbWUgI3dlbGNvbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDcuNXJlbTtcbn1cbiNob21lICN3ZWxjb21lIGRpdiB7XG4gIHdpZHRoOiA2MCU7XG59XG4jaG9tZSAjd2VsY29tZSBwIHtcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcbn1cbiNob21lICN3ZWxjb21lIGltZyB7XG4gIHdpZHRoOiA0MCU7XG4gIG1heC13aWR0aDogMTguNzVyZW07XG59XG4jaG9tZSAjaGVhZGVyLWxvY2F0aW9uIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbiNob21lICNwcm9qZWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogNDkuNjg3NXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGdhcDogNy41cmVtO1xufVxuI2hvbWUgI3Byb2plY3RzICNwcm9qZWN0cy1vbmUtbGluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jaG9tZSAucHJvamVjdC1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIuNXJlbTtcbn1cbiNob21lIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2hvbWUgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcgcCB7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbiNob21lICNhYm91dC1tZSxcbiNob21lICNza2lsbHMtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cmVtO1xufVxuI2hvbWUgI2Fib3V0LW1lIGgyLFxuI2hvbWUgI3NraWxscy1jdG4gaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jaG9tZSAjYWJvdXQtbWUge1xuICBtYXgtd2lkdGg6IDQxLjA2MjVyZW07XG59XG4jaG9tZSAjc2tpbGxzLWN0biB7XG4gIG1heC13aWR0aDogNjEuOTM3NXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4jaG9tZSAjc2tpbGxzLWN0biAjc2tpbGxzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDRyZW0gMDtcbn1cbiNob21lICNza2lsbHMtY3RuIC5za2lsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS41cmVtO1xuICB3aWR0aDogMjAlO1xufVxuI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2hvbWUgI3NraWxscy1jdG4gLnNraWxsLWltZy1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2LjVyZW07XG4gIHdpZHRoOiA2LjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgwLCAwJSwgNjUlKTtcbiAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbn1cbiNob21lICNza2lsbHMtY3RuIC5za2lsbC1pbWctY3RuIGltZyB7XG4gIG1heC1oZWlnaHQ6IDIuNXJlbTtcbiAgbWF4LXdpZHRoOiAyLjVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XG4gICNob21lIHtcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgYm9keSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gICNob21lICN3ZWxjb21lIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMi41cmVtO1xuICB9XG4gICNob21lICN3ZWxjb21lIGRpdixcbiAgI2hvbWUgI3dlbGNvbWUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAjaG9tZSAucHJvamVjdC1jdG4ge1xuICAgIGdhcDogMnJlbTtcbiAgfVxuICAjaG9tZSAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyBwIHtcbiAgICBmb250LXNpemU6IDMuNzVyZW07XG4gIH1cbiAgI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIHtcbiAgICB3aWR0aDogMzMlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gICNob21lIHtcbiAgICBnYXA6IDVyZW07XG4gICAgcGFkZGluZzogNXJlbSAxLjVyZW07XG4gIH1cbiAgI2hvbWUgI3Byb2plY3RzIHtcbiAgICBnYXA6IDNyZW07XG4gIH1cbiAgI2hvbWUgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcgcCB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gICNob21lICNhYm91dC1tZSxcbiAgI2hvbWUgI3NraWxscy1jdG4ge1xuICAgIGdhcDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMHJlbSkge1xuICAjaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwgaDMge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIH1cbn1cbiNidG4tdG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMy4xMjVyZW07XG4gIGJvdHRvbTogMy4xMjVyZW07XG4gIHotaW5kZXg6IDM7XG59XG5cbiNidG4tdG9wOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gICNidG4tdG9wIHtcbiAgICByaWdodDogMS41NjI1cmVtO1xuICAgIGJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5idXR0b24ge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBwYWRkaW5nOiAwLjc1cmVtIDMuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDMuMTI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1LCA3NSUsIDU4JSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzO1xufVxuXG5idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzUsIDcxJSwgMzklKTtcbn1cblxuLmJ0bi1yZXNldCB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzcmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGhlaWdodDogMTkuNXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzMlKTtcbn1cbmZvb3RlciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDNyZW07XG59XG5mb290ZXIgYSB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xufVxuZm9vdGVyIGE6aG92ZXIge1xuICBjb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xufVxuXG4ubWFpbi1iYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluLWJhbm5lciBoMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubWFpbi1iYW5uZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgLm1haW4tYmFubmVyIGgxIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuI3Byb2plY3QtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xuICBnYXA6IDE1cmVtO1xufVxuI3Byb2plY3QtbGlzdCAucHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxLjg3NXJlbTtcbn1cbiNwcm9qZWN0LWxpc3QgLnByb2plY3QgaW1nIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuI3Byb2plY3QtbGlzdCAucHJvamVjdC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogM3JlbTtcbiAgd2lkdGg6IDUwJTtcbn1cbiNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCBwIHtcbiAgbWF4LXdpZHRoOiAzMi41cmVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xuICAjcHJvamVjdC1saXN0IHtcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcbiAgI3Byb2plY3QtbGlzdCB7XG4gICAgZ2FwOiA3LjVyZW07XG4gIH1cbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdC1jb250ZW50IHtcbiAgICBnYXA6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAjcHJvamVjdC1saXN0IC5wcm9qZWN0IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LWNvbnRlbnQgcCB7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICB9XG4gICNwcm9qZWN0LWxpc3QgI2NvZmZlZS10aW1lLXByb2plY3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICAjcHJvamVjdC1saXN0IHtcbiAgICBnYXA6IDVyZW07XG4gICAgcGFkZGluZzogNXJlbSAxLjVyZW07XG4gIH1cbn1cbiNleHBlcmllbmNlLXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSB7XG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XG4gIHdpZHRoOiAyNSU7XG59XG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA1cmVtO1xuICBnYXA6IDEuNXJlbTtcbn1cbiNleHBlcmllbmNlLXBhZ2UgYXNpZGUgaDQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuI2V4cGVyaWVuY2UtcGFnZSBzZWN0aW9uIHtcbiAgcGFkZGluZzogNy41cmVtIDAgNy41cmVtIDVyZW07XG4gIHdpZHRoOiA3NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNy41cmVtO1xufVxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIGxpc3Qtc3R5bGU6IGRpc2M7XG4gIGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGU7XG59XG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLmRhdGVzIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCAudGl0bGUge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHAge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcbiAgI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSxcbiAgI2V4cGVyaWVuY2UtcGFnZSBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcbiAgI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IC5kYXRlcyB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gICNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAjZXhwZXJpZW5jZS1wYWdlIGFzaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgI2V4cGVyaWVuY2UtcGFnZSB7XG4gICAgcGFkZGluZzogMCAxLjVyZW07XG4gIH1cbiAgI2V4cGVyaWVuY2UtcGFnZSBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgZ2FwOiA1cmVtO1xuICB9XG59XG4jYWJvdXQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogM3JlbTtcbn1cbiNhYm91dC1jb250ZW50IGltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogNDkuNjg3NXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxLjI1cmVtKSB7XG4gICNhYm91dC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAjYWJvdXQtY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAjYWJvdXQtY29udGVudCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAjYWJvdXQtY29udGVudCB7XG4gICAgcGFkZGluZzogNXJlbSAxLjVyZW07XG4gIH1cbn1cbi5wcm9qZWN0LXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnByb2plY3QtcGFnZSBhc2lkZSB7XG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XG4gIHdpZHRoOiAyNSU7XG59XG4ucHJvamVjdC1wYWdlIGFzaWRlIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA1cmVtO1xuICBnYXA6IDEuNXJlbTtcbn1cbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xuICB3aWR0aDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDcuNXJlbTtcbn1cbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiAucHJvamVjdC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2plY3QtcGFnZSBzZWN0aW9uIGgyIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gcCB7XG4gIG1heC13aWR0aDogNDkuNjg3NXJlbTtcbn1cbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAyOC4xMjVyZW07XG4gIG1heC13aWR0aDogNTByZW07XG59XG4ucHJvamVjdC1wYWdlICN2ZXJzaW9uLW9uZSBpbWcge1xuICBtYXgtaGVpZ2h0OiA0My43NXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxLjI1cmVtKSB7XG4gIC5wcm9qZWN0LXBhZ2UgYXNpZGUsXG4gIC5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gIC5wcm9qZWN0LXBhZ2UgYXNpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnByb2plY3QtcGFnZSBzZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICAucHJvamVjdC1wYWdlIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xuICAgIGdhcDogNXJlbTtcbiAgfVxuICAucHJvamVjdC1wYWdlIHNlY3Rpb24gaDIge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiAucHJvamVjdC1zZWN0aW9uIHtcbiAgICBnYXA6IDEuNXJlbTtcbiAgfVxufVxuLm1vYmlsZS1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwO1xufVxuLm1vYmlsZS1uYXYgLm1vYmlsZS1uYXYtYmcge1xuICB3aWR0aDogMCU7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMnMgZWFzZS1pbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA0JSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubW9iaWxlLW5hdiAuYWN0aXZlLWN0biB7XG4gIHdpZHRoOiA4MCU7XG59XG4ubW9iaWxlLW5hdiAubmF2LWxpbmtzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5tb2JpbGUtbmF2ICNidG4tY3RuIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi5tb2JpbGUtbmF2IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDAlKTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxcmVtO1xufVxuLm1vYmlsZS1uYXYgI21vYmlsZS1uYXYtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5hY3RpdmUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19nZW5lcmFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19jb250YWluZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX21haW5Ib21lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX3RvVG9wQnRuLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX21haW5CYW5uZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fcG9ydGZvbGlvUGFnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19leHBlcmllbmNlUGFnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19hYm91dFBhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fcHJvamVjdFBhZ2VzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX21vYmlsZU5hdi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0MsZUFBQTtFQUNBLHVCQUFBO0FDSEQ7O0FETUE7RUFDQywrQkVWYztFRldkLG1CQUFBO0VBQ0EsdUJHTlc7RUhPWCxnQ0daUTtFSGFSLGdCQUFBO0FDSEQ7O0FHWEE7OztFQUdDLHNCQUFBO0FIY0Q7O0FHWEE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUhjRDs7QUdYQTs7O0VBR0MsY0FBQTtBSGNEOztBSTFCQTs7O0VBR0MsU0FBQTtFQUNBLGdCQUFBO0FKNkJEOztBSTFCQTs7RUFFQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUo2QkQ7O0FJMUJBO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtBSjZCRDs7QUkxQkE7OztFQUdDLHFCQUFBO0FKNkJEOztBSTFCQTtFQUNDOztJQUVDLG1CQUFBO0VKNkJBO0FBQ0Y7QUkxQkE7RUFDQzs7SUFFQyxlQUFBO0VKNEJBO0FBQ0Y7QUtqRUE7RUFDQyxvQkFBQTtFQUNBLGNBQUE7QUxtRUQ7O0FNcEVBO0VBQ0MsZUFBQTtFQUNBLHdDQUFBO0FOdUVEOztBTXBFQTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FOdUVEOztBTXBFQTtFQUNDLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QU51RUQ7QU1yRUM7RUFDQyxzQkpiUztFSWNULHNCQUFBO0FOdUVGO0FNcEVDO0VBQ0MsdUJKbkJVO0FGeUZaO0FNbkVDO0VBQ0MsdUJKdkJVO0FGNEZa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QUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QWhCNm1CRjs7QWdCem1CQTtFQUNDLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FoQjRtQkRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCJjb2xvcnNcXFwiIGFzICo7XFxuQHVzZSBcXFwiZm9udHNcXFwiIGFzICo7XFxuXFxuaHRtbCB7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXG5cXHRmb250LXNpemU6IHJlbSgxOCk7XFxuXFx0Y29sb3I6ICRjbHItd2hpdGU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1iZztcXG5cXHRsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cIixcImh0bWwge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyZjtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNCUpO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyB7XFxuICBtYXJnaW46IDA7XFxuICBsaW5lLWhlaWdodDogMS4xO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBmb250LXNpemU6IDMuNzVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAxLjM3NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkLFxcbmE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcXG4gIGgxLFxcbiAgaDIge1xcbiAgICBmb250LXNpemU6IDMuMTI1cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICBoMSxcXG4gIGgyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbn1cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogOTkuMzc1cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICBwYWRkaW5nOiAzcmVtIDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xcbn1cXG5cXG4jaGVhZGVyLWxheW91dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDNyZW07XFxufVxcbnVsIGEge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XFxufVxcbnVsIGE6aG92ZXIge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxufVxcbnVsIC5hY3RpdmUtbmF2IHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbn1cXG5cXG4jbW9iaWxlLW5hdi1idG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBoZWlnaHQ6IDMuMTI1cmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNtb2JpbGUtbmF2LWJ0biAubW9iaWxlLWxpbmUge1xcbiAgaGVpZ2h0OiAwLjI1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxLjI1cmVtKSB7XFxuICBoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni44NzVyZW0pIHtcXG4gICNkZXNrdG9wLW5hdi1jdG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgI21vYmlsZS1uYXYtYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgfVxcbiAgaGVhZGVyIGltZyB7XFxuICAgIG1heC13aWR0aDogMTVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIxLjg3NXJlbSkge1xcbiAgaGVhZGVyIGltZyB7XFxuICAgIG1heC13aWR0aDogMTByZW07XFxuICB9XFxufVxcbiNob21lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTIuNXJlbSAwO1xcbiAgZ2FwOiAxMi41cmVtO1xcbiAgbWF4LXdpZHRoOiA3NS4zNzVyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNob21lICN3ZWxjb21lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA3LjVyZW07XFxufVxcbiNob21lICN3ZWxjb21lIGRpdiB7XFxuICB3aWR0aDogNjAlO1xcbn1cXG4jaG9tZSAjd2VsY29tZSBwIHtcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxufVxcbiNob21lICN3ZWxjb21lIGltZyB7XFxuICB3aWR0aDogNDAlO1xcbiAgbWF4LXdpZHRoOiAxOC43NXJlbTtcXG59XFxuI2hvbWUgI2hlYWRlci1sb2NhdGlvbiB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuI2hvbWUgI3Byb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiA0OS42ODc1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDcuNXJlbTtcXG59XFxuI2hvbWUgI3Byb2plY3RzICNwcm9qZWN0cy1vbmUtbGluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jaG9tZSAucHJvamVjdC1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIuNXJlbTtcXG59XFxuI2hvbWUgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNob21lIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHAge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuI2hvbWUgI2Fib3V0LW1lLFxcbiNob21lICNza2lsbHMtY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cmVtO1xcbn1cXG4jaG9tZSAjYWJvdXQtbWUgaDIsXFxuI2hvbWUgI3NraWxscy1jdG4gaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jaG9tZSAjYWJvdXQtbWUge1xcbiAgbWF4LXdpZHRoOiA0MS4wNjI1cmVtO1xcbn1cXG4jaG9tZSAjc2tpbGxzLWN0biB7XFxuICBtYXgtd2lkdGg6IDYxLjkzNzVyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuI2hvbWUgI3NraWxscy1jdG4gI3NraWxscy1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNHJlbSAwO1xcbn1cXG4jaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxLjVyZW07XFxuICB3aWR0aDogMjAlO1xcbn1cXG4jaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwgaDMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwtaW1nLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA2LjVyZW07XFxuICB3aWR0aDogNi41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDAsIDAlLCA2NSUpO1xcbiAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcXG59XFxuI2hvbWUgI3NraWxscy1jdG4gLnNraWxsLWltZy1jdG4gaW1nIHtcXG4gIG1heC1oZWlnaHQ6IDIuNXJlbTtcXG4gIG1heC13aWR0aDogMi41cmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NHJlbSkge1xcbiAgI2hvbWUge1xcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcXG4gIGJvZHkge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAjaG9tZSAjd2VsY29tZSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMi41cmVtO1xcbiAgfVxcbiAgI2hvbWUgI3dlbGNvbWUgZGl2LFxcbiAgI2hvbWUgI3dlbGNvbWUgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAjaG9tZSAucHJvamVjdC1jdG4ge1xcbiAgICBnYXA6IDJyZW07XFxuICB9XFxuICAjaG9tZSAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyBwIHtcXG4gICAgZm9udC1zaXplOiAzLjc1cmVtO1xcbiAgfVxcbiAgI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIHtcXG4gICAgd2lkdGg6IDMzJTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgI2hvbWUge1xcbiAgICBnYXA6IDVyZW07XFxuICAgIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xcbiAgfVxcbiAgI2hvbWUgI3Byb2plY3RzIHtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgfVxcbiAgI2hvbWUgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcgcCB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgfVxcbiAgI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG4gICNob21lICNhYm91dC1tZSxcXG4gICNob21lICNza2lsbHMtY3RuIHtcXG4gICAgZ2FwOiAyLjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIwcmVtKSB7XFxuICAjaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwgaDMge1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgfVxcbn1cXG4jYnRuLXRvcCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMy4xMjVyZW07XFxuICBib3R0b206IDMuMTI1cmVtO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuI2J0bi10b3A6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICAjYnRuLXRvcCB7XFxuICAgIHJpZ2h0OiAxLjU2MjVyZW07XFxuICAgIGJvdHRvbTogMS41NjI1cmVtO1xcbiAgfVxcbn1cXG5idXR0b24ge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBwYWRkaW5nOiAwLjc1cmVtIDMuNzVyZW07XFxuICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzUsIDc1JSwgNTglKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzUsIDcxJSwgMzklKTtcXG59XFxuXFxuLmJ0bi1yZXNldCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBoZWlnaHQ6IDE5LjVyZW07XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xcbn1cXG5mb290ZXIgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDNyZW07XFxufVxcbmZvb3RlciBhIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcXG59XFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcXG59XFxuXFxuLm1haW4tYmFubmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1haW4tYmFubmVyIGgxIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5tYWluLWJhbm5lciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gIC5tYWluLWJhbm5lciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbn1cXG4jcHJvamVjdC1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICBnYXA6IDE1cmVtO1xcbn1cXG4jcHJvamVjdC1saXN0IC5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxLjg3NXJlbTtcXG59XFxuI3Byb2plY3QtbGlzdCAucHJvamVjdCBpbWcge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuI3Byb2plY3QtbGlzdCAucHJvamVjdC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuI3Byb2plY3QtbGlzdCAucHJvamVjdC1jb250ZW50IHAge1xcbiAgbWF4LXdpZHRoOiAzMi41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcXG4gICNwcm9qZWN0LWxpc3Qge1xcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcXG4gICNwcm9qZWN0LWxpc3Qge1xcbiAgICBnYXA6IDcuNXJlbTtcXG4gIH1cXG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCB7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xcbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAjcHJvamVjdC1saXN0IC5wcm9qZWN0IGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LWNvbnRlbnQgcCB7XFxuICAgIG1heC13aWR0aDogbm9uZTtcXG4gIH1cXG4gICNwcm9qZWN0LWxpc3QgI2NvZmZlZS10aW1lLXByb2plY3Qge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gICNwcm9qZWN0LWxpc3Qge1xcbiAgICBnYXA6IDVyZW07XFxuICAgIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xcbiAgfVxcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNleHBlcmllbmNlLXBhZ2UgYXNpZGUge1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XFxuICB3aWR0aDogMjUlO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogNXJlbTtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIGg0IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbiNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XFxuICBwYWRkaW5nOiA3LjVyZW0gMCA3LjVyZW0gNXJlbTtcXG4gIHdpZHRoOiA3NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNy41cmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIGxpc3Qtc3R5bGU6IGRpc2M7XFxuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBvdXRzaWRlO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLmRhdGVzIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCAudGl0bGUge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgcCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcXG4gICNleHBlcmllbmNlLXBhZ2UgYXNpZGUsXFxuICAjZXhwZXJpZW5jZS1wYWdlIHNlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcXG4gICNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCAuZGF0ZXMge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAjZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XFxuICAjZXhwZXJpZW5jZS1wYWdlIGFzaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gICNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICAjZXhwZXJpZW5jZS1wYWdlIHtcXG4gICAgcGFkZGluZzogMCAxLjVyZW07XFxuICB9XFxuICAjZXhwZXJpZW5jZS1wYWdlIHNlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiA1cmVtIDA7XFxuICAgIGdhcDogNXJlbTtcXG4gIH1cXG59XFxuI2Fib3V0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuI2Fib3V0LWNvbnRlbnQgaW1nIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXgtd2lkdGg6IDQ5LjY4NzVyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xcbiAgI2Fib3V0LWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcXG4gIHAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XFxuICAjYWJvdXQtY29udGVudCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAjYWJvdXQtY29udGVudCBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcXG4gICNhYm91dC1jb250ZW50IHtcXG4gICAgcGFkZGluZzogNXJlbSAxLjVyZW07XFxuICB9XFxufVxcbi5wcm9qZWN0LXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnByb2plY3QtcGFnZSBhc2lkZSB7XFxuICBwYWRkaW5nOiA3LjVyZW0gMDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzMlKTtcXG4gIHdpZHRoOiAyNSU7XFxufVxcbi5wcm9qZWN0LXBhZ2UgYXNpZGUgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiA1cmVtO1xcbiAgZ2FwOiAxLjVyZW07XFxufVxcbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiB7XFxuICBwYWRkaW5nOiA3LjVyZW0gMDtcXG4gIHdpZHRoOiA3NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNy41cmVtO1xcbn1cXG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gLnByb2plY3Qtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogM3JlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBoMiB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBwIHtcXG4gIG1heC13aWR0aDogNDkuNjg3NXJlbTtcXG59XFxuLnByb2plY3QtcGFnZSBzZWN0aW9uIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDI4LjEyNXJlbTtcXG4gIG1heC13aWR0aDogNTByZW07XFxufVxcbi5wcm9qZWN0LXBhZ2UgI3ZlcnNpb24tb25lIGltZyB7XFxuICBtYXgtaGVpZ2h0OiA0My43NXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxLjI1cmVtKSB7XFxuICAucHJvamVjdC1wYWdlIGFzaWRlLFxcbiAgLnByb2plY3QtcGFnZSBzZWN0aW9uIHtcXG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XFxuICAucHJvamVjdC1wYWdlIGFzaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICAucHJvamVjdC1wYWdlIHNlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiA1cmVtIDEuNXJlbTtcXG4gICAgZ2FwOiA1cmVtO1xcbiAgfVxcbiAgLnByb2plY3QtcGFnZSBzZWN0aW9uIGgyIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICAucHJvamVjdC1wYWdlIHNlY3Rpb24gLnByb2plY3Qtc2VjdGlvbiB7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgfVxcbn1cXG4ubW9iaWxlLW5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTA7XFxufVxcbi5tb2JpbGUtbmF2IC5tb2JpbGUtbmF2LWJnIHtcXG4gIHdpZHRoOiAwJTtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMnMgZWFzZS1pbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNCUpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm1vYmlsZS1uYXYgLmFjdGl2ZS1jdG4ge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuLm1vYmlsZS1uYXYgLm5hdi1saW5rcyB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ubW9iaWxlLW5hdiAjYnRuLWN0biB7XFxuICB3aWR0aDogMjAlO1xcbn1cXG4ubW9iaWxlLW5hdiBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDAlKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMXJlbTtcXG59XFxuLm1vYmlsZS1uYXYgI21vYmlsZS1uYXYtY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLmFjdGl2ZS1iZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG59XCIsXCIkZm9udC1wcmltYXJ5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmY7XFxuXCIsXCIvLyBQcmltYXJ5IENvbG9yc1xcbiRjbHItYmc6IGhzbCgwLCAwJSwgNCUpO1xcbiRjbHItYnRuOiBoc2woMjM1LCA3NSUsIDU4JSk7XFxuJGNsci1idG4taG92ZXI6IGhzbCgyMzUsIDcxJSwgMzklKTtcXG5cXG4vLyBOZXV0cmFsIENvbG9yc1xcbiRjbHItd2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XFxuJGNsci1ncmF5OiBoc2woMCwgMCUsIDY1JSk7XFxuJGNsci1ncmF5LWRhcms6IGhzbCgwLCAwJSwgMzMlKTtcXG4kY2xyLWJsYWNrOiBoc2woMCwgMCUsIDAlKTtcXG5cIixcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250OiBpbmhlcml0O1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSxcXG5zdmcge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiY29sb3JzXFxcIiBhcyAqO1xcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0bGluZS1oZWlnaHQ6IDEuMTtcXG59XFxuXFxuaDEsXFxuaDIge1xcblxcdGZvbnQtc2l6ZTogcmVtKDYwKTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjM7XFxufVxcblxcbmgzIHtcXG5cXHRmb250LXNpemU6IHJlbSgyMik7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTphY3RpdmUge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDc2OCkpIHtcXG5cXHRoMSxcXG5cXHRoMiB7XFxuXFx0XFx0Zm9udC1zaXplOiByZW0oNTApO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXG5cXHRoMSxcXG5cXHRoMiB7XFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMzIpO1xcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbi5jb250YWluZXIge1xcblxcdG1heC13aWR0aDogcmVtKDE1OTApO1xcblxcdG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuXFxuaGVhZGVyIHtcXG5cXHRwYWRkaW5nOiByZW0oNDgpIDA7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjbHItZ3JheS1kYXJrO1xcbn1cXG5cXG4jaGVhZGVyLWxheW91dCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxudWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IHJlbSg0OCk7XFxuXFxuXFx0YSB7XFxuXFx0XFx0Y29sb3I6ICRjbHItZ3JheTtcXG5cXHRcXHR0cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xcblxcdH1cXG5cXG5cXHRhOmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogJGNsci13aGl0ZTtcXG5cXHR9XFxuXFxuXFx0LmFjdGl2ZS1uYXYge1xcblxcdFxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdH1cXG59XFxuXFxuI21vYmlsZS1uYXYtYnRuIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHdpZHRoOiByZW0oNDApO1xcblxcdGhlaWdodDogcmVtKDUwKTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogcmVtKDgpO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcdC5tb2JpbGUtbGluZSB7XFxuXFx0XFx0aGVpZ2h0OiByZW0oNCk7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1ncmF5O1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IHJlbSgxMCk7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTYyMCkpIHtcXG5cXHRoZWFkZXIge1xcblxcdFxcdHBhZGRpbmc6IHJlbSg0OCk7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oOTEwKSkge1xcblxcdCNkZXNrdG9wLW5hdi1jdG4ge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcblxcdCNtb2JpbGUtbmF2LWJ0biB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg0MjUpKSB7XFxuXFx0aGVhZGVyIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMjQpO1xcblxcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oMjQwKTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMzUwKSkge1xcblxcdGhlYWRlciB7XFxuXFx0XFx0aW1nIHtcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSgxNjApO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jaG9tZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmc6IHJlbSgyMDApIDA7XFxuXFx0Z2FwOiByZW0oMjAwKTtcXG5cXHRtYXgtd2lkdGg6IHJlbSgxMjA2KTtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdCN3ZWxjb21lIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0Z2FwOiByZW0oMTIwKTtcXG5cXG5cXHRcXHRkaXYge1xcblxcdFxcdFxcdHdpZHRoOiA2MCU7XFxuXFx0XFx0fVxcblxcblxcdFxcdHAge1xcblxcdFxcdFxcdHBhZGRpbmctdG9wOiByZW0oMjQpO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRpbWcge1xcblxcdFxcdFxcdHdpZHRoOiA0MCU7XFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oMzAwKTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdCNoZWFkZXItbG9jYXRpb24ge1xcblxcdFxcdGNvbG9yOiAkY2xyLWdyYXk7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG5cXHR9XFxuXFxuXFx0I3Byb2plY3RzIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0bWF4LXdpZHRoOiByZW0oNzk1KTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRnYXA6IHJlbSgxMjApO1xcblxcblxcdFxcdCNwcm9qZWN0cy1vbmUtbGluZXIge1xcblxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdC5wcm9qZWN0LWN0biB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGdhcDogcmVtKDQwKTtcXG5cXG5cXHRcXHQucHJvamVjdC1oZWFkaW5nIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdFxcdFxcdHAge1xcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDgwKTtcXG5cXHRcXHRcXHRcXHRmb250LXdlaWdodDogMTAwO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdCNhYm91dC1tZSxcXG5cXHQjc2tpbGxzLWN0biB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGdhcDogcmVtKDgwKTtcXG5cXG5cXHRcXHRoMiB7XFxuXFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0I2Fib3V0LW1lIHtcXG5cXHRcXHRtYXgtd2lkdGg6IHJlbSg2NTcpO1xcblxcdH1cXG5cXG5cXHQjc2tpbGxzLWN0biB7XFxuXFx0XFx0bWF4LXdpZHRoOiByZW0oOTkxKTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXG5cXHRcXHQjc2tpbGxzLWxpc3Qge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdFxcdGdhcDogcmVtKDY0KSAwO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQuc2tpbGwge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdFxcdGdhcDogcmVtKDI0KTtcXG5cXHRcXHRcXHR3aWR0aDogMjAlO1xcblxcblxcdFxcdFxcdGgzIHtcXG5cXHRcXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQuc2tpbGwtaW1nLWN0biB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdFxcdGhlaWdodDogcmVtKDEwNCk7XFxuXFx0XFx0XFx0d2lkdGg6IHJlbSgxMDQpO1xcblxcdFxcdFxcdGJvcmRlcjogMXB4IHNvbGlkICRjbHItZ3JheTtcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiByZW0oMTAwKTtcXG5cXG5cXHRcXHRcXHRpbWcge1xcblxcdFxcdFxcdFxcdG1heC1oZWlnaHQ6IHJlbSg0MCk7XFxuXFx0XFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oNDApO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTAyNCkpIHtcXG5cXHQjaG9tZSB7XFxuXFx0XFx0cGFkZGluZzogcmVtKDEyMCkgcmVtKDQ4KTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg3NjgpKSB7XFxuXFx0Ym9keSB7XFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcblxcdH1cXG5cXG5cXHQjaG9tZSB7XFxuXFx0XFx0I3dlbGNvbWUge1xcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0XFx0Z2FwOiByZW0oNDApO1xcblxcblxcdFxcdFxcdGRpdixcXG5cXHRcXHRcXHRpbWcge1xcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0LnByb2plY3QtY3RuIHtcXG5cXHRcXHRcXHRnYXA6IHJlbSgzMik7XFxuXFxuXFx0XFx0XFx0LnByb2plY3QtaGVhZGluZyB7XFxuXFx0XFx0XFx0XFx0cCB7XFxuXFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oNjApO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdCNza2lsbHMtY3RuIHtcXG5cXHRcXHRcXHQuc2tpbGwge1xcblxcdFxcdFxcdFxcdHdpZHRoOiAzMyU7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg0MjUpKSB7XFxuXFx0I2hvbWUge1xcblxcdFxcdGdhcDogcmVtKDgwKTtcXG5cXHRcXHRwYWRkaW5nOiByZW0oODApIHJlbSgyNCk7XFxuXFxuXFx0XFx0I3Byb2plY3RzIHtcXG5cXHRcXHRcXHRnYXA6IHJlbSg0OCk7XFxuXFx0XFx0fVxcblxcblxcdFxcdC5wcm9qZWN0LWN0biB7XFxuXFx0XFx0XFx0LnByb2plY3QtaGVhZGluZyB7XFxuXFx0XFx0XFx0XFx0cCB7XFxuXFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oNDApO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdCNza2lsbHMtY3RuIHtcXG5cXHRcXHRcXHQuc2tpbGwge1xcblxcdFxcdFxcdFxcdHdpZHRoOiA1MCU7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQjYWJvdXQtbWUsXFxuXFx0XFx0I3NraWxscy1jdG4ge1xcblxcdFxcdFxcdGdhcDogcmVtKDQwKTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMzIwKSkge1xcblxcdCNob21lIHtcXG5cXHRcXHQjc2tpbGxzLWN0biB7XFxuXFx0XFx0XFx0LnNraWxsIHtcXG5cXHRcXHRcXHRcXHRoMyB7XFxuXFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTgpO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNidG4tdG9wIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0cmlnaHQ6IHJlbSg1MCk7XFxuXFx0Ym90dG9tOiByZW0oNTApO1xcblxcdHotaW5kZXg6IDM7XFxufVxcblxcbiNidG4tdG9wOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg0MjUpKSB7XFxuXFx0I2J0bi10b3Age1xcblxcdFxcdHJpZ2h0OiByZW0oMjUpO1xcblxcdFxcdGJvdHRvbTogcmVtKDI1KTtcXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG5idXR0b24ge1xcblxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdGZvbnQtc2l6ZTogcmVtKDIwKTtcXG5cXHRwYWRkaW5nOiByZW0oMTIpIHJlbSg2MCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogcmVtKDUwKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWJ0bjtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWJ0bi1ob3ZlcjtcXG59XFxuXFxuLmJ0bi1yZXNldCB7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg0MjUpKSB7XFxuXFx0YnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuZm9vdGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IHJlbSg0OCk7XFxuXFx0Zm9udC1zaXplOiByZW0oMzIpO1xcblxcdGhlaWdodDogcmVtKDMxMik7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICRjbHItZ3JheS1kYXJrO1xcblxcblxcdGRpdiB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRnYXA6IHJlbSg0OCk7XFxuXFx0fVxcblxcblxcdGEge1xcblxcdFxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdFxcdHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XFxuXFx0fVxcblxcblxcdGE6aG92ZXIge1xcblxcdFxcdGNvbG9yOiAkY2xyLWdyYXk7XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuLm1haW4tYmFubmVyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcblxcdGgxIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0dG9wOiA1MCU7XFxuXFx0XFx0bGVmdDogNTAlO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcdH1cXG5cXG5cXHRpbWcge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXG5cXHQubWFpbi1iYW5uZXIge1xcblxcdFxcdGgxIHtcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgyNCk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNwcm9qZWN0LWxpc3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcblxcdGdhcDogcmVtKDI0MCk7XFxuXFxuXFx0LnByb2plY3Qge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0Z2FwOiByZW0oMzApO1xcblxcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0d2lkdGg6IDUwJTtcXG5cXHRcXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQucHJvamVjdC1jb250ZW50IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRnYXA6IHJlbSg0OCk7XFxuXFx0XFx0d2lkdGg6IDUwJTtcXG5cXG5cXHRcXHRwIHtcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSg1MjApO1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTYyMCkpIHtcXG5cXHQjcHJvamVjdC1saXN0IHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSByZW0oNDgpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDEwMjQpKSB7XFxuXFx0I3Byb2plY3QtbGlzdCB7XFxuXFx0XFx0Z2FwOiByZW0oMTIwKTtcXG5cXG5cXHRcXHQucHJvamVjdC1jb250ZW50IHtcXG5cXHRcXHRcXHRnYXA6IHJlbSgyNCk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDc2OCkpIHtcXG5cXHQjcHJvamVjdC1saXN0IHtcXG5cXHRcXHQucHJvamVjdCB7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG5cXHRcXHRcXHRpbWcge1xcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHQucHJvamVjdC1jb250ZW50IHtcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXG5cXHRcXHRcXHRcXHRwIHtcXG5cXHRcXHRcXHRcXHRcXHRtYXgtd2lkdGg6IG5vbmU7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0I2NvZmZlZS10aW1lLXByb2plY3Qge1xcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcblxcdCNwcm9qZWN0LWxpc3Qge1xcblxcdFxcdGdhcDogcmVtKDgwKTtcXG5cXHRcXHRwYWRkaW5nOiByZW0oODApIHJlbSgyNCk7XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuI2V4cGVyaWVuY2UtcGFnZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXG5cXHRhc2lkZSB7XFxuXFx0XFx0cGFkZGluZzogcmVtKDEyMCkgMDtcXG5cXHRcXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkY2xyLWdyYXktZGFyaztcXG5cXHRcXHR3aWR0aDogMjUlO1xcblxcblxcdFxcdHVsIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0XFx0cG9zaXRpb246IHN0aWNreTtcXG5cXHRcXHRcXHR0b3A6IHJlbSg4MCk7XFxuXFx0XFx0XFx0Z2FwOiByZW0oMjQpO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRoNCB7XFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdHNlY3Rpb24ge1xcblxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIDAgcmVtKDEyMCkgcmVtKDgwKTtcXG5cXHRcXHR3aWR0aDogNzUlO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRnYXA6IHJlbSgxMjApO1xcblxcdH1cXG5cXG5cXHQuZXhwZXJpZW5jZS1jb250ZW50IHtcXG5cXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxuXFxuXFx0XFx0dWwge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRnYXA6IHJlbSg4KTtcXG5cXHRcXHRcXHRsaXN0LXN0eWxlOiBkaXNjO1xcblxcdFxcdFxcdGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGU7XFxuXFx0XFx0fVxcblxcblxcdFxcdC5kYXRlcyB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMjApO1xcblxcdFxcdFxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNDAwO1xcblxcdFxcdFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRcXHR9XFxuXFxuXFx0XFx0LnRpdGxlIHtcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSg0MCk7XFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG5cXHRcXHRcXHRmb250LXN0eWxlOiBub3JtYWw7XFxuXFx0XFx0fVxcblxcblxcdFxcdHAge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDIwKTtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IHJlbSgyNCk7XFxuXFx0XFx0XFx0bWFyZ2luLXRvcDogcmVtKDgpO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNjIwKSkge1xcblxcdCNleHBlcmllbmNlLXBhZ2Uge1xcblxcdFxcdGFzaWRlLFxcblxcdFxcdHNlY3Rpb24ge1xcblxcdFxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIHJlbSg0OCk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDEwMjQpKSB7XFxuXFx0I2V4cGVyaWVuY2UtcGFnZSB7XFxuXFx0XFx0LmV4cGVyaWVuY2UtY29udGVudCB7XFxuXFx0XFx0XFx0LmRhdGVzIHtcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdC50aXRsZSB7XFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMjQpO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzY4KSkge1xcblxcdCNleHBlcmllbmNlLXBhZ2Uge1xcblxcdFxcdGFzaWRlIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRzZWN0aW9uIHtcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcblxcdCNleHBlcmllbmNlLXBhZ2Uge1xcblxcdFxcdHBhZGRpbmc6IDAgcmVtKDI0KTtcXG5cXG5cXHRcXHRzZWN0aW9uIHtcXG5cXHRcXHRcXHRwYWRkaW5nOiByZW0oODApIDA7XFxuXFx0XFx0XFx0Z2FwOiByZW0oODApO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jYWJvdXQtY29udGVudCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogcmVtKDQ4KTtcXG5cXG5cXHRpbWcge1xcblxcdFxcdHdpZHRoOiA1MCU7XFxuXFx0XFx0bWF4LXdpZHRoOiByZW0oNzk1KTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNjIwKSkge1xcblxcdCNhYm91dC1jb250ZW50IHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSByZW0oNDgpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDEwMjQpKSB7XFxuXFx0cCB7XFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDc2OCkpIHtcXG5cXHQjYWJvdXQtY29udGVudCB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG5cXHRcXHRpbWcge1xcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg3NjgpKSB7XFxuXFx0I2Fib3V0LWNvbnRlbnQge1xcblxcdFxcdHBhZGRpbmc6IHJlbSg4MCkgcmVtKDI0KTtcXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4ucHJvamVjdC1wYWdlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcblxcdGFzaWRlIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcblxcdFxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRjbHItZ3JheS1kYXJrO1xcblxcdFxcdHdpZHRoOiAyNSU7XFxuXFxuXFx0XFx0dWwge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRwb3NpdGlvbjogc3RpY2t5O1xcblxcdFxcdFxcdHRvcDogcmVtKDgwKTtcXG5cXHRcXHRcXHRnYXA6IHJlbSgyNCk7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHRzZWN0aW9uIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcblxcdFxcdHdpZHRoOiA3NSU7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGdhcDogcmVtKDEyMCk7XFxuXFxuXFx0XFx0LnByb2plY3Qtc2VjdGlvbiB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdGdhcDogcmVtKDQ4KTtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRoMiB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oNDApO1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0XFx0fVxcblxcblxcdFxcdHAge1xcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDc5NSk7XFxuXFx0XFx0fVxcblxcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcblxcdFxcdFxcdG1heC1oZWlnaHQ6IHJlbSg0NTApO1xcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDgwMCk7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQvLyB0aGlzIGlzIGZvciB0aGUgcG9ydGZvbGlvIHByb2plY3RcXG5cXHQjdmVyc2lvbi1vbmUge1xcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0bWF4LWhlaWdodDogcmVtKDcwMCk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDE2MjApKSB7XFxuXFx0LnByb2plY3QtcGFnZSB7XFxuXFx0XFx0YXNpZGUsXFxuXFx0XFx0c2VjdGlvbiB7XFxuXFx0XFx0XFx0cGFkZGluZzogcmVtKDEyMCkgcmVtKDQ4KTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzY4KSkge1xcblxcdC5wcm9qZWN0LXBhZ2Uge1xcblxcdFxcdGFzaWRlIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRzZWN0aW9uIHtcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcblxcdC5wcm9qZWN0LXBhZ2Uge1xcblxcdFxcdHNlY3Rpb24ge1xcblxcdFxcdFxcdHBhZGRpbmc6IHJlbSg4MCkgcmVtKDI0KTtcXG5cXHRcXHRcXHRnYXA6IHJlbSg4MCk7XFxuXFxuXFx0XFx0XFx0aDIge1xcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDI0KTtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0LnByb2plY3Qtc2VjdGlvbiB7XFxuXFx0XFx0XFx0XFx0Z2FwOiByZW0oMjQpO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuLm1vYmlsZS1uYXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHotaW5kZXg6IDEwO1xcblxcblxcdC5tb2JpbGUtbmF2LWJnIHtcXG5cXHRcXHR3aWR0aDogMCU7XFxuXFx0XFx0dHJhbnNpdGlvbjogd2lkdGggMC4ycyBlYXNlLWluO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItYmc7XFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR9XFxuXFxuXFx0LmFjdGl2ZS1jdG4ge1xcblxcdFxcdHdpZHRoOiA4MCU7XFxuXFx0fVxcblxcblxcdC5uYXYtbGlua3Mge1xcblxcdFxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0fVxcblxcblxcdCNidG4tY3RuIHtcXG5cXHRcXHR3aWR0aDogMjAlO1xcblxcdH1cXG5cXG5cXHRidXR0b24ge1xcblxcdFxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0XFx0Y29sb3I6ICRjbHItYmxhY2s7XFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMzIpO1xcblxcdFxcdHBhZGRpbmctbGVmdDogcmVtKDE2KTtcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0dG9wOiByZW0oMTYpO1xcblxcdH1cXG5cXG5cXHQjbW9iaWxlLW5hdi1jdG4ge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRnYXA6IHJlbSgzMik7XFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMjApO1xcblxcdFxcdHBhZGRpbmc6IHJlbSgzMik7XFxuXFx0fVxcbn1cXG5cXG4uYWN0aXZlLWJnIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuXFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHsgdXBkYXRlSGVhZGVyQWN0aXZlTGluaywgcmVtb3ZlSGVhZGVyU3R5bGVzLCBtb2JpbGVOYXZJbml0IH07XG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpbmtzXCIpO1xuY29uc3QgbW9iaWxlTmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbmF2LWJ0blwiKTtcbmNvbnN0IG1vYmlsZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW5hdlwiKTtcbmNvbnN0IG1vYmlsZU5hdkV4aXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1uYXYtZXhpdFwiKTtcbmNvbnN0IG1vYmlsZU5hdkN0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW5hdi1iZ1wiKTtcblxuZnVuY3Rpb24gdXBkYXRlSGVhZGVyQWN0aXZlTGluaygpIHtcblx0bmF2LmZvckVhY2goKGxpbmspID0+IHtcblx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHR1cGRhdGVIZWFkZXJTdHlsZXMobGluayk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVIZWFkZXJTdHlsZXMobGluaykge1xuXHRyZW1vdmVIZWFkZXJTdHlsZXMoKTtcblx0YWRkSGVhZGVyU3R5bGVzKGxpbmspO1xufVxuXG5mdW5jdGlvbiByZW1vdmVIZWFkZXJTdHlsZXMoKSB7XG5cdG5hdi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuXHRcdGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtbmF2XCIpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkSGVhZGVyU3R5bGVzKGxpbmspIHtcblx0bGluay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLW5hdlwiKTtcbn1cblxuZnVuY3Rpb24gbW9iaWxlTmF2SW5pdCgpIHtcblx0bW9iaWxlTmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0bW9iaWxlTmF2LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtYmdcIik7XG5cdFx0bW9iaWxlTmF2Q3RuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtY3RuXCIpO1xuXHR9KTtcblxuXHRtb2JpbGVOYXZFeGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0bW9iaWxlTmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtYmdcIik7XG5cdFx0bW9iaWxlTmF2Q3RuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtY3RuXCIpO1xuXHR9KTtcbn1cbiIsImV4cG9ydCB7IHNjcm9sbFRvVG9wIH07XG5cbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXRvcFwiKTtcblxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzY3JvbGxUb1RvcCk7XG5cbmZ1bmN0aW9uIHNjcm9sbFRvVG9wKCkge1xuXHRkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xufVxuIiwiZXhwb3J0IHsgaW5pdCB9O1xuaW1wb3J0IHsgdXBkYXRlSGVhZGVyQWN0aXZlTGluaywgbW9iaWxlTmF2SW5pdCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgeyBzY3JvbGxUb1RvcCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdG9Ub3BCdG5cIjtcblxuZnVuY3Rpb24gaW5pdCgpIHtcblx0dXBkYXRlSGVhZGVyQWN0aXZlTGluaygpO1xuXHRzY3JvbGxUb1RvcCgpO1xuXHRtb2JpbGVOYXZJbml0KCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBpbml0IH0gZnJvbSBcIi4vaW5pdC5qc1wiO1xuaW1wb3J0IFwiLi4vc2Nzcy9zdHlsZXMuc2Nzc1wiO1xuXG5pbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=