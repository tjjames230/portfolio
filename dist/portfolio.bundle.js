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

#mobile-nav-ctn {
  display: none;
  width: 2.5rem;
  height: 3.125rem;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
}
#mobile-nav-ctn .mobile-line {
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
  #mobile-nav-ctn {
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
  padding-left: 5rem;
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
  #experience-page {
    padding: 0 3rem;
  }
}
@media screen and (max-width: 64rem) {
  #experience-page .experience-content .dates {
    font-size: 1rem;
  }
  #experience-page .experience-content .title {
    font-size: 1.5rem;
  }
  #experience-page aside {
    padding: 7.5rem 1.5rem;
  }
}
@media screen and (max-width: 48rem) {
  #experience-page aside {
    display: none;
  }
  #experience-page section {
    width: 100%;
  }
  #experience-page .experience-content {
    padding-left: 0;
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
}
#about-content p {
  padding: 0 3rem;
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
  padding-left: 5rem;
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
}`, "",{"version":3,"sources":["webpack://./src/scss/globals/_general.scss","webpack://./src/scss/styles.scss","webpack://./src/scss/globals/_fonts.scss","webpack://./src/scss/globals/_colors.scss","webpack://./src/scss/globals/_reset.scss","webpack://./src/scss/globals/_typography.scss","webpack://./src/scss/globals/_container.scss","webpack://./src/scss/components/_header.scss","webpack://./src/scss/components/_mainHome.scss","webpack://./src/scss/components/_toTopBtn.scss","webpack://./src/scss/components/_buttons.scss","webpack://./src/scss/components/_footer.scss","webpack://./src/scss/components/_mainBanner.scss","webpack://./src/scss/components/_portfolioPage.scss","webpack://./src/scss/components/_experiencePage.scss","webpack://./src/scss/components/_aboutPage.scss","webpack://./src/scss/components/_projectPages.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"../utilities/\" as *;\n@use \"colors\" as *;\n@use \"fonts\" as *;\n\nhtml {\n\tfont-size: 100%;\n\t//scroll-behavior: smooth;\n}\n\nbody {\n\tfont-family: $font-primary;\n\tfont-size: rem(18);\n\tcolor: $clr-white;\n\tbackground-color: $clr-bg;\n\tline-height: 1.5;\n}\n","html {\n  font-size: 100%;\n}\n\nbody {\n  font-family: \"Inter\", sans-serf;\n  font-size: 1.125rem;\n  color: hsl(0, 0%, 100%);\n  background-color: hsl(0, 0%, 4%);\n  line-height: 1.5;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n  line-height: 1.1;\n}\n\nh1,\nh2 {\n  font-size: 3.75rem;\n  font-weight: 700;\n  line-height: 1.3;\n}\n\nh3 {\n  font-size: 1.375rem;\n  font-weight: 700;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\n@media screen and (max-width: 48rem) {\n  h1,\n  h2 {\n    font-size: 3.125rem;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  h1,\n  h2 {\n    font-size: 2rem;\n  }\n}\n.container {\n  max-width: 99.375rem;\n  margin: 0 auto;\n}\n\nheader {\n  padding: 3rem 0;\n  border-bottom: 1px solid hsl(0, 0%, 33%);\n}\n\n#header-layout {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nul {\n  list-style: none;\n  display: flex;\n  gap: 3rem;\n}\nul a {\n  color: hsl(0, 0%, 65%);\n  transition: color 0.1s;\n}\nul a:hover {\n  color: hsl(0, 0%, 100%);\n}\nul .active-nav {\n  color: hsl(0, 0%, 100%);\n}\n\n#mobile-nav-ctn {\n  display: none;\n  width: 2.5rem;\n  height: 3.125rem;\n  flex-direction: column;\n  gap: 0.5rem;\n  justify-content: center;\n}\n#mobile-nav-ctn .mobile-line {\n  height: 0.25rem;\n  width: 100%;\n  background-color: hsl(0, 0%, 65%);\n  border-radius: 0.625rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  header {\n    padding: 3rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #desktop-nav-ctn {\n    display: none;\n  }\n  #mobile-nav-ctn {\n    display: flex;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  header {\n    padding: 1.5rem;\n  }\n  header img {\n    max-width: 15rem;\n  }\n}\n@media screen and (max-width: 20rem) {\n  header img {\n    max-width: 10rem;\n  }\n}\n#home {\n  display: flex;\n  flex-direction: column;\n  padding: 12.5rem 0;\n  gap: 12.5rem;\n  max-width: 75.375rem;\n  margin: 0 auto;\n  align-items: center;\n}\n#home #welcome {\n  display: flex;\n  align-items: center;\n  gap: 7.5rem;\n}\n#home #welcome div {\n  width: 60%;\n}\n#home #welcome p {\n  padding-top: 1.5rem;\n}\n#home #welcome img {\n  width: 40%;\n  max-width: 18.75rem;\n}\n#home #header-location {\n  color: hsl(0, 0%, 65%);\n  font-weight: 300;\n}\n#home #projects {\n  display: flex;\n  flex-direction: column;\n  max-width: 49.6875rem;\n  width: 100%;\n  gap: 7.5rem;\n}\n#home #projects #projects-one-liner {\n  text-align: center;\n}\n#home .project-ctn {\n  display: flex;\n  flex-direction: column;\n  gap: 2.5rem;\n}\n#home .project-ctn .project-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#home .project-ctn .project-heading p {\n  font-size: 5rem;\n  font-weight: 100;\n}\n#home #about-me,\n#home #skills-ctn {\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n}\n#home #about-me h2,\n#home #skills-ctn h2 {\n  text-align: center;\n}\n#home #about-me {\n  max-width: 41.0625rem;\n}\n#home #skills-ctn {\n  max-width: 61.9375rem;\n  width: 100%;\n}\n#home #skills-ctn #skills-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 4rem 0;\n}\n#home #skills-ctn .skill {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n  width: 20%;\n}\n#home #skills-ctn .skill h3 {\n  text-align: center;\n}\n#home #skills-ctn .skill-img-ctn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 6.5rem;\n  width: 6.5rem;\n  border: 1px solid hsl(0, 0%, 65%);\n  border-radius: 6.25rem;\n}\n#home #skills-ctn .skill-img-ctn img {\n  max-height: 2.5rem;\n  max-width: 2.5rem;\n}\n\n@media screen and (max-width: 64rem) {\n  #home {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  body {\n    font-size: 1rem;\n  }\n  #home #welcome {\n    flex-direction: column;\n    gap: 2.5rem;\n  }\n  #home #welcome div,\n  #home #welcome img {\n    width: 100%;\n  }\n  #home .project-ctn {\n    gap: 2rem;\n  }\n  #home .project-ctn .project-heading p {\n    font-size: 3.75rem;\n  }\n  #home #skills-ctn .skill {\n    width: 33%;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #home {\n    gap: 5rem;\n    padding: 5rem 1.5rem;\n  }\n  #home #projects {\n    gap: 3rem;\n  }\n  #home .project-ctn .project-heading p {\n    font-size: 2.5rem;\n  }\n  #home #skills-ctn .skill {\n    width: 50%;\n  }\n  #home #about-me,\n  #home #skills-ctn {\n    gap: 2.5rem;\n  }\n}\n@media screen and (max-width: 20rem) {\n  #home #skills-ctn .skill h3 {\n    font-size: 1.125rem;\n  }\n}\n#btn-top {\n  position: fixed;\n  right: 3.125rem;\n  bottom: 3.125rem;\n}\n\n#btn-top:hover {\n  cursor: pointer;\n}\n\n@media screen and (max-width: 26.5625rem) {\n  #btn-top {\n    right: 1.5625rem;\n    bottom: 1.5625rem;\n  }\n}\nbutton {\n  color: hsl(0, 0%, 100%);\n  font-size: 1.25rem;\n  padding: 0.75rem 3.75rem;\n  border-radius: 3.125rem;\n  background-color: hsl(235, 75%, 58%);\n  border: none;\n  transition: background-color 0.1s;\n}\n\nbutton:hover {\n  cursor: pointer;\n  background-color: hsl(235, 71%, 39%);\n}\n\n.btn-reset {\n  margin: 0 auto;\n}\n\n@media screen and (max-width: 26.5625rem) {\n  button {\n    font-size: 1rem;\n  }\n}\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n  font-size: 2rem;\n  height: 19.5rem;\n  border-top: 1px solid hsl(0, 0%, 33%);\n}\nfooter div {\n  display: flex;\n  gap: 3rem;\n}\nfooter a {\n  color: hsl(0, 0%, 100%);\n  transition: color 0.1s;\n}\nfooter a:hover {\n  color: hsl(0, 0%, 65%);\n}\n\n.main-banner {\n  position: relative;\n  text-align: center;\n}\n.main-banner h1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main-banner img {\n  width: 100%;\n}\n\n#project-list {\n  display: flex;\n  flex-direction: column;\n  padding: 7.5rem 0;\n  gap: 15rem;\n}\n#project-list .project {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1.875rem;\n}\n#project-list .project img {\n  width: 50%;\n  height: 100%;\n}\n#project-list .project-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3rem;\n  width: 50%;\n}\n#project-list .project-content p {\n  max-width: 32.5rem;\n  font-size: 1rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  #project-list {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 64rem) {\n  #project-list {\n    gap: 7.5rem;\n  }\n  #project-list .project-content {\n    gap: 1.5rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #project-list .project {\n    flex-direction: column;\n  }\n  #project-list .project img {\n    width: 100%;\n  }\n  #project-list .project .project-content {\n    width: 100%;\n  }\n  #project-list .project .project-content p {\n    max-width: none;\n  }\n  #project-list #coffee-time-project {\n    flex-direction: column-reverse;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #project-list {\n    gap: 5rem;\n    padding: 5rem 1.5rem;\n  }\n}\n#experience-page {\n  display: flex;\n}\n#experience-page aside {\n  padding: 7.5rem 0;\n  border-right: 1px solid hsl(0, 0%, 33%);\n  width: 25%;\n}\n#experience-page aside ul {\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 5rem;\n  gap: 1.5rem;\n}\n#experience-page aside h4 {\n  font-weight: 700;\n}\n#experience-page section {\n  padding: 7.5rem 0;\n  width: 75%;\n  display: flex;\n  flex-direction: column;\n  gap: 7.5rem;\n}\n#experience-page .experience-content {\n  font-size: 1rem;\n  padding-left: 5rem;\n}\n#experience-page .experience-content ul {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  list-style: disc;\n  list-style-position: outside;\n}\n#experience-page .experience-content .dates {\n  font-size: 1.25rem;\n  font-style: italic;\n  font-weight: 400;\n  display: inline-block;\n}\n#experience-page .experience-content .title {\n  font-size: 2.5rem;\n  font-weight: 300;\n  font-style: normal;\n}\n#experience-page .experience-content p {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin-bottom: 1.5rem;\n  margin-top: 0.5rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  #experience-page {\n    padding: 0 3rem;\n  }\n}\n@media screen and (max-width: 64rem) {\n  #experience-page .experience-content .dates {\n    font-size: 1rem;\n  }\n  #experience-page .experience-content .title {\n    font-size: 1.5rem;\n  }\n  #experience-page aside {\n    padding: 7.5rem 1.5rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #experience-page aside {\n    display: none;\n  }\n  #experience-page section {\n    width: 100%;\n  }\n  #experience-page .experience-content {\n    padding-left: 0;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #experience-page {\n    padding: 0 1.5rem;\n  }\n  #experience-page section {\n    padding: 5rem 0;\n    gap: 5rem;\n  }\n}\n#about-content {\n  display: flex;\n  padding: 7.5rem 0;\n  justify-content: space-between;\n  align-items: center;\n}\n#about-content p {\n  padding: 0 3rem;\n}\n#about-content img {\n  width: 50%;\n  max-width: 49.6875rem;\n}\n\n@media screen and (max-width: 101.25rem) {\n  #about-content {\n    padding: 7.5rem 3rem;\n  }\n}\n.project-page {\n  display: flex;\n}\n.project-page aside {\n  padding: 7.5rem 0;\n  border-right: 1px solid hsl(0, 0%, 33%);\n  width: 25%;\n}\n.project-page aside ul {\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 5rem;\n  gap: 1.5rem;\n}\n.project-page section {\n  padding: 7.5rem 0;\n  width: 75%;\n  display: flex;\n  flex-direction: column;\n  gap: 7.5rem;\n  padding-left: 5rem;\n}\n.project-page section .project-section {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n  align-items: center;\n}\n.project-page section h2 {\n  font-size: 2.5rem;\n  font-weight: 300;\n}\n.project-page section p {\n  max-width: 49.6875rem;\n}\n.project-page section img {\n  width: 100%;\n  height: auto;\n  max-height: 28.125rem;\n  max-width: 50rem;\n}\n.project-page #version-one img {\n  max-height: 43.75rem;\n}","$font-primary: \"Inter\", sans-serf;\n","// Primary Colors\n$clr-bg: hsl(0, 0%, 4%);\n$clr-btn: hsl(235, 75%, 58%);\n$clr-btn-hover: hsl(235, 71%, 39%);\n\n// Neutral Colors\n$clr-white: hsl(0, 0%, 100%);\n$clr-gray: hsl(0, 0%, 65%);\n$clr-gray-dark: hsl(0, 0%, 33%);\n$clr-black: hsl(0, 0%, 0%);\n","*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont: inherit;\n}\n\nimg,\npicture,\nsvg {\n\tdisplay: block;\n}\n","@use \"../utilities/\" as *;\n@use \"colors\" as *;\n\nh1,\nh2,\nh3 {\n\tmargin: 0;\n\tline-height: 1.1;\n}\n\nh1,\nh2 {\n\tfont-size: rem(60);\n\tfont-weight: 700;\n\tline-height: 1.3;\n}\n\nh3 {\n\tfont-size: rem(22);\n\tfont-weight: 700;\n}\n\na,\na:visited,\na:active {\n\ttext-decoration: none;\n}\n\n@media screen and (max-width: rem(768)) {\n\th1,\n\th2 {\n\t\tfont-size: rem(50);\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\th1,\n\th2 {\n\t\tfont-size: rem(32);\n\t}\n}\n","@use \"../utilities/\" as *;\n\n.container {\n\tmax-width: rem(1590);\n\tmargin: 0 auto;\n}\n","@use \"../utilities/\" as *;\n@use \"../globals/\" as *;\n\nheader {\n\tpadding: rem(48) 0;\n\tborder-bottom: 1px solid $clr-gray-dark;\n}\n\n#header-layout {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\nul {\n\tlist-style: none;\n\tdisplay: flex;\n\tgap: rem(48);\n\n\ta {\n\t\tcolor: $clr-gray;\n\t\ttransition: color 0.1s;\n\t}\n\n\ta:hover {\n\t\tcolor: $clr-white;\n\t}\n\n\t.active-nav {\n\t\tcolor: $clr-white;\n\t}\n}\n\n#mobile-nav-ctn {\n\tdisplay: none;\n\twidth: rem(40);\n\theight: rem(50);\n\tflex-direction: column;\n\tgap: rem(8);\n\tjustify-content: center;\n\n\t.mobile-line {\n\t\theight: rem(4);\n\t\twidth: 100%;\n\t\tbackground-color: $clr-gray;\n\t\tborder-radius: rem(10);\n\t}\n}\n\n@media screen and (max-width: rem(1620)) {\n\theader {\n\t\tpadding: rem(48);\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t#desktop-nav-ctn {\n\t\tdisplay: none;\n\t}\n\n\t#mobile-nav-ctn {\n\t\tdisplay: flex;\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\theader {\n\t\tpadding: rem(24);\n\n\t\timg {\n\t\t\tmax-width: rem(240);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(320)) {\n\theader {\n\t\timg {\n\t\t\tmax-width: rem(160);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#home {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: rem(200) 0;\n\tgap: rem(200);\n\tmax-width: rem(1206);\n\tmargin: 0 auto;\n\talign-items: center;\n\n\t#welcome {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: rem(120);\n\n\t\tdiv {\n\t\t\twidth: 60%;\n\t\t}\n\n\t\tp {\n\t\t\tpadding-top: rem(24);\n\t\t}\n\n\t\timg {\n\t\t\twidth: 40%;\n\t\t\tmax-width: rem(300);\n\t\t}\n\t}\n\n\t#header-location {\n\t\tcolor: $clr-gray;\n\t\tfont-weight: 300;\n\t}\n\n\t#projects {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmax-width: rem(795);\n\t\twidth: 100%;\n\t\tgap: rem(120);\n\n\t\t#projects-one-liner {\n\t\t\ttext-align: center;\n\t\t}\n\t}\n\n\t.project-ctn {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(40);\n\n\t\t.project-heading {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\talign-items: center;\n\n\t\t\tp {\n\t\t\t\tfont-size: rem(80);\n\t\t\t\tfont-weight: 100;\n\t\t\t}\n\t\t}\n\t}\n\n\t#about-me,\n\t#skills-ctn {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(80);\n\n\t\th2 {\n\t\t\ttext-align: center;\n\t\t}\n\t}\n\n\t#about-me {\n\t\tmax-width: rem(657);\n\t}\n\n\t#skills-ctn {\n\t\tmax-width: rem(991);\n\t\twidth: 100%;\n\n\t\t#skills-list {\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tjustify-content: center;\n\t\t\tgap: rem(64) 0;\n\t\t}\n\n\t\t.skill {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-items: center;\n\t\t\tgap: rem(24);\n\t\t\twidth: 20%;\n\n\t\t\th3 {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t}\n\n\t\t.skill-img-ctn {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\theight: rem(104);\n\t\t\twidth: rem(104);\n\t\t\tborder: 1px solid $clr-gray;\n\t\t\tborder-radius: rem(100);\n\n\t\t\timg {\n\t\t\t\tmax-height: rem(40);\n\t\t\t\tmax-width: rem(40);\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1024)) {\n\t#home {\n\t\tpadding: rem(120) rem(48);\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\tbody {\n\t\tfont-size: rem(16);\n\t}\n\n\t#home {\n\t\t#welcome {\n\t\t\tflex-direction: column;\n\t\t\tgap: rem(40);\n\n\t\t\tdiv,\n\t\t\timg {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\n\t\t.project-ctn {\n\t\t\tgap: rem(32);\n\n\t\t\t.project-heading {\n\t\t\t\tp {\n\t\t\t\t\tfont-size: rem(60);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t#skills-ctn {\n\t\t\t.skill {\n\t\t\t\twidth: 33%;\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t#home {\n\t\tgap: rem(80);\n\t\tpadding: rem(80) rem(24);\n\n\t\t#projects {\n\t\t\tgap: rem(48);\n\t\t}\n\n\t\t.project-ctn {\n\t\t\t.project-heading {\n\t\t\t\tp {\n\t\t\t\t\tfont-size: rem(40);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t#skills-ctn {\n\t\t\t.skill {\n\t\t\t\twidth: 50%;\n\t\t\t}\n\t\t}\n\n\t\t#about-me,\n\t\t#skills-ctn {\n\t\t\tgap: rem(40);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(320)) {\n\t#home {\n\t\t#skills-ctn {\n\t\t\t.skill {\n\t\t\t\th3 {\n\t\t\t\t\tfont-size: rem(18);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#btn-top {\n\tposition: fixed;\n\tright: rem(50);\n\tbottom: rem(50);\n}\n\n#btn-top:hover {\n\tcursor: pointer;\n}\n\n@media screen and (max-width: rem(425)) {\n\t#btn-top {\n\t\tright: rem(25);\n\t\tbottom: rem(25);\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\nbutton {\n\tcolor: $clr-white;\n\tfont-size: rem(20);\n\tpadding: rem(12) rem(60);\n\tborder-radius: rem(50);\n\tbackground-color: $clr-btn;\n\tborder: none;\n\ttransition: background-color 0.1s;\n}\n\nbutton:hover {\n\tcursor: pointer;\n\tbackground-color: $clr-btn-hover;\n}\n\n.btn-reset {\n\tmargin: 0 auto;\n}\n\n@media screen and (max-width: rem(425)) {\n\tbutton {\n\t\tfont-size: rem(16);\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\nfooter {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: rem(48);\n\tfont-size: rem(32);\n\theight: rem(312);\n\tborder-top: 1px solid $clr-gray-dark;\n\n\tdiv {\n\t\tdisplay: flex;\n\t\tgap: rem(48);\n\t}\n\n\ta {\n\t\tcolor: $clr-white;\n\t\ttransition: color 0.1s;\n\t}\n\n\ta:hover {\n\t\tcolor: $clr-gray;\n\t}\n}\n",".main-banner {\n\tposition: relative;\n\ttext-align: center;\n\n\th1 {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t}\n\n\timg {\n\t\twidth: 100%;\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#project-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: rem(120) 0;\n\tgap: rem(240);\n\n\t.project {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tgap: rem(30);\n\n\t\timg {\n\t\t\twidth: 50%;\n\t\t\theight: 100%;\n\t\t}\n\t}\n\n\t.project-content {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tgap: rem(48);\n\t\twidth: 50%;\n\n\t\tp {\n\t\t\tmax-width: rem(520);\n\t\t\tfont-size: rem(16);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1620)) {\n\t#project-list {\n\t\tpadding: rem(120) rem(48);\n\t}\n}\n\n@media screen and (max-width: rem(1024)) {\n\t#project-list {\n\t\tgap: rem(120);\n\n\t\t.project-content {\n\t\t\tgap: rem(24);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t#project-list {\n\t\t.project {\n\t\t\tflex-direction: column;\n\n\t\t\timg {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\n\t\t\t.project-content {\n\t\t\t\twidth: 100%;\n\n\t\t\t\tp {\n\t\t\t\t\tmax-width: none;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t#coffee-time-project {\n\t\t\tflex-direction: column-reverse;\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t#project-list {\n\t\tgap: rem(80);\n\t\tpadding: rem(80) rem(24);\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#experience-page {\n\tdisplay: flex;\n\n\taside {\n\t\tpadding: rem(120) 0;\n\t\tborder-right: 1px solid $clr-gray-dark;\n\t\twidth: 25%;\n\n\t\tul {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tposition: sticky;\n\t\t\ttop: rem(80);\n\t\t\tgap: rem(24);\n\t\t}\n\n\t\th4 {\n\t\t\tfont-weight: 700;\n\t\t}\n\t}\n\n\tsection {\n\t\tpadding: rem(120) 0;\n\t\twidth: 75%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(120);\n\t}\n\n\t.experience-content {\n\t\tfont-size: rem(16);\n\t\tpadding-left: rem(80);\n\n\t\tul {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: rem(8);\n\t\t\tlist-style: disc;\n\t\t\tlist-style-position: outside;\n\t\t}\n\n\t\t.dates {\n\t\t\tfont-size: rem(20);\n\t\t\tfont-style: italic;\n\t\t\tfont-weight: 400;\n\t\t\tdisplay: inline-block;\n\t\t}\n\n\t\t.title {\n\t\t\tfont-size: rem(40);\n\t\t\tfont-weight: 300;\n\t\t\tfont-style: normal;\n\t\t}\n\n\t\tp {\n\t\t\tfont-size: rem(20);\n\t\t\tfont-weight: 700;\n\t\t\tmargin-bottom: rem(24);\n\t\t\tmargin-top: rem(8);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1620)) {\n\t#experience-page {\n\t\tpadding: 0 rem(48);\n\t}\n}\n\n@media screen and (max-width: rem(1024)) {\n\t#experience-page {\n\t\t.experience-content {\n\t\t\t.dates {\n\t\t\t\tfont-size: rem(16);\n\t\t\t}\n\n\t\t\t.title {\n\t\t\t\tfont-size: rem(24);\n\t\t\t}\n\t\t}\n\n\t\taside {\n\t\t\tpadding: rem(120) rem(24);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t#experience-page {\n\t\taside {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\tsection {\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t.experience-content {\n\t\t\tpadding-left: 0;\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t#experience-page {\n\t\tpadding: 0 rem(24);\n\n\t\tsection {\n\t\t\tpadding: rem(80) 0;\n\t\t\tgap: rem(80);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#about-content {\n\tdisplay: flex;\n\tpadding: rem(120) 0;\n\tjustify-content: space-between;\n\talign-items: center;\n\n\tp {\n\t\tpadding: 0 rem(48);\n\t}\n\n\timg {\n\t\twidth: 50%;\n\t\tmax-width: rem(795);\n\t}\n}\n\n@media screen and (max-width: rem(1620)) {\n\t#about-content {\n\t\tpadding: rem(120) rem(48);\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n.project-page {\n\tdisplay: flex;\n\n\taside {\n\t\tpadding: rem(120) 0;\n\t\tborder-right: 1px solid $clr-gray-dark;\n\t\twidth: 25%;\n\n\t\tul {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tposition: sticky;\n\t\t\ttop: rem(80);\n\t\t\tgap: rem(24);\n\t\t}\n\t}\n\n\tsection {\n\t\tpadding: rem(120) 0;\n\t\twidth: 75%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(120);\n\t\tpadding-left: rem(80);\n\n\t\t.project-section {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: rem(48);\n\t\t\talign-items: center;\n\t\t}\n\n\t\th2 {\n\t\t\tfont-size: rem(40);\n\t\t\tfont-weight: 300;\n\t\t}\n\n\t\tp {\n\t\t\tmax-width: rem(795);\n\t\t}\n\n\t\timg {\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t\tmax-height: rem(450);\n\t\t\tmax-width: rem(800);\n\t\t}\n\t}\n\n\t// this is for the portfolio project\n\t#version-one {\n\t\timg {\n\t\t\tmax-height: rem(700);\n\t\t}\n\t}\n}\n"],"sourceRoot":""}]);
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
	console.log(
		"this is where I will add logic for opening and closing the nav on click for mobile"
	);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGZvbGlvLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDQxQkFBNDFCLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsTUFBTSxRQUFRLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLFFBQVEsV0FBVyxPQUFPLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxZQUFZLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sT0FBTyxVQUFVLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFFBQVEsTUFBTSxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFX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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvQnVCOztBQUV2Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUZ0I7QUFDNEQ7QUFDeEI7O0FBRXBEO0FBQ0EsQ0FBQywwRUFBc0I7QUFDdkIsQ0FBQyxpRUFBVztBQUNaLENBQUMsaUVBQWE7QUFDZDs7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQWlDO0FBQ0o7O0FBRTdCLDhDQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcz8zMjFmIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9qcy9jb21wb25lbnRzL3RvVG9wQnRuLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9qcy9pbml0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9qcy9wb3J0Zm9saW8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBmb250LXNpemU6IDEwMCU7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmY7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDQlKTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuaW1nLFxucGljdHVyZSxcbnN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMSxcbmgyLFxuaDMge1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5cbmgxLFxuaDIge1xuICBmb250LXNpemU6IDMuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxLjM3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYSxcbmE6dmlzaXRlZCxcbmE6YWN0aXZlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xuICBoMSxcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgaDEsXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDk5LjM3NXJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmhlYWRlciB7XG4gIHBhZGRpbmc6IDNyZW0gMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzMlKTtcbn1cblxuI2hlYWRlci1sYXlvdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAzcmVtO1xufVxudWwgYSB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XG59XG51bCBhOmhvdmVyIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG59XG51bCAuYWN0aXZlLW5hdiB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xufVxuXG4jbW9iaWxlLW5hdi1jdG4ge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMi41cmVtO1xuICBoZWlnaHQ6IDMuMTI1cmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jbW9iaWxlLW5hdi1jdG4gLm1vYmlsZS1saW5lIHtcbiAgaGVpZ2h0OiAwLjI1cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxLjI1cmVtKSB7XG4gIGhlYWRlciB7XG4gICAgcGFkZGluZzogM3JlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgI2Rlc2t0b3AtbmF2LWN0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjbW9iaWxlLW5hdi1jdG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cbiAgaGVhZGVyIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjByZW0pIHtcbiAgaGVhZGVyIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMHJlbTtcbiAgfVxufVxuI2hvbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMi41cmVtIDA7XG4gIGdhcDogMTIuNXJlbTtcbiAgbWF4LXdpZHRoOiA3NS4zNzVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2hvbWUgI3dlbGNvbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDcuNXJlbTtcbn1cbiNob21lICN3ZWxjb21lIGRpdiB7XG4gIHdpZHRoOiA2MCU7XG59XG4jaG9tZSAjd2VsY29tZSBwIHtcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcbn1cbiNob21lICN3ZWxjb21lIGltZyB7XG4gIHdpZHRoOiA0MCU7XG4gIG1heC13aWR0aDogMTguNzVyZW07XG59XG4jaG9tZSAjaGVhZGVyLWxvY2F0aW9uIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbiNob21lICNwcm9qZWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogNDkuNjg3NXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGdhcDogNy41cmVtO1xufVxuI2hvbWUgI3Byb2plY3RzICNwcm9qZWN0cy1vbmUtbGluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jaG9tZSAucHJvamVjdC1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIuNXJlbTtcbn1cbiNob21lIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2hvbWUgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcgcCB7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbiNob21lICNhYm91dC1tZSxcbiNob21lICNza2lsbHMtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cmVtO1xufVxuI2hvbWUgI2Fib3V0LW1lIGgyLFxuI2hvbWUgI3NraWxscy1jdG4gaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jaG9tZSAjYWJvdXQtbWUge1xuICBtYXgtd2lkdGg6IDQxLjA2MjVyZW07XG59XG4jaG9tZSAjc2tpbGxzLWN0biB7XG4gIG1heC13aWR0aDogNjEuOTM3NXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4jaG9tZSAjc2tpbGxzLWN0biAjc2tpbGxzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDRyZW0gMDtcbn1cbiNob21lICNza2lsbHMtY3RuIC5za2lsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS41cmVtO1xuICB3aWR0aDogMjAlO1xufVxuI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2hvbWUgI3NraWxscy1jdG4gLnNraWxsLWltZy1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2LjVyZW07XG4gIHdpZHRoOiA2LjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgwLCAwJSwgNjUlKTtcbiAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbn1cbiNob21lICNza2lsbHMtY3RuIC5za2lsbC1pbWctY3RuIGltZyB7XG4gIG1heC1oZWlnaHQ6IDIuNXJlbTtcbiAgbWF4LXdpZHRoOiAyLjVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XG4gICNob21lIHtcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgYm9keSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gICNob21lICN3ZWxjb21lIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMi41cmVtO1xuICB9XG4gICNob21lICN3ZWxjb21lIGRpdixcbiAgI2hvbWUgI3dlbGNvbWUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAjaG9tZSAucHJvamVjdC1jdG4ge1xuICAgIGdhcDogMnJlbTtcbiAgfVxuICAjaG9tZSAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyBwIHtcbiAgICBmb250LXNpemU6IDMuNzVyZW07XG4gIH1cbiAgI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIHtcbiAgICB3aWR0aDogMzMlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gICNob21lIHtcbiAgICBnYXA6IDVyZW07XG4gICAgcGFkZGluZzogNXJlbSAxLjVyZW07XG4gIH1cbiAgI2hvbWUgI3Byb2plY3RzIHtcbiAgICBnYXA6IDNyZW07XG4gIH1cbiAgI2hvbWUgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcgcCB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gICNob21lICNhYm91dC1tZSxcbiAgI2hvbWUgI3NraWxscy1jdG4ge1xuICAgIGdhcDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMHJlbSkge1xuICAjaG9tZSAjc2tpbGxzLWN0biAuc2tpbGwgaDMge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIH1cbn1cbiNidG4tdG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMy4xMjVyZW07XG4gIGJvdHRvbTogMy4xMjVyZW07XG59XG5cbiNidG4tdG9wOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gICNidG4tdG9wIHtcbiAgICByaWdodDogMS41NjI1cmVtO1xuICAgIGJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5idXR0b24ge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBwYWRkaW5nOiAwLjc1cmVtIDMuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDMuMTI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1LCA3NSUsIDU4JSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzO1xufVxuXG5idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzUsIDcxJSwgMzklKTtcbn1cblxuLmJ0bi1yZXNldCB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzcmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGhlaWdodDogMTkuNXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzMlKTtcbn1cbmZvb3RlciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDNyZW07XG59XG5mb290ZXIgYSB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xufVxuZm9vdGVyIGE6aG92ZXIge1xuICBjb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xufVxuXG4ubWFpbi1iYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluLWJhbm5lciBoMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubWFpbi1iYW5uZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNwcm9qZWN0LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAgZ2FwOiAxNXJlbTtcbn1cbiNwcm9qZWN0LWxpc3QgLnByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS44NzVyZW07XG59XG4jcHJvamVjdC1saXN0IC5wcm9qZWN0IGltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDNyZW07XG4gIHdpZHRoOiA1MCU7XG59XG4jcHJvamVjdC1saXN0IC5wcm9qZWN0LWNvbnRlbnQgcCB7XG4gIG1heC13aWR0aDogMzIuNXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcbiAgI3Byb2plY3QtbGlzdCB7XG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XG4gICNwcm9qZWN0LWxpc3Qge1xuICAgIGdhcDogNy41cmVtO1xuICB9XG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCB7XG4gICAgZ2FwOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1jb250ZW50IHAge1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgfVxuICAjcHJvamVjdC1saXN0ICNjb2ZmZWUtdGltZS1wcm9qZWN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgI3Byb2plY3QtbGlzdCB7XG4gICAgZ2FwOiA1cmVtO1xuICAgIHBhZGRpbmc6IDVyZW0gMS41cmVtO1xuICB9XG59XG4jZXhwZXJpZW5jZS1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiNleHBlcmllbmNlLXBhZ2UgYXNpZGUge1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xuICB3aWR0aDogMjUlO1xufVxuI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogNXJlbTtcbiAgZ2FwOiAxLjVyZW07XG59XG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIGg0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xuICB3aWR0aDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDcuNXJlbTtcbn1cbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiA1cmVtO1xufVxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIGxpc3Qtc3R5bGU6IGRpc2M7XG4gIGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGU7XG59XG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLmRhdGVzIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCAudGl0bGUge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHAge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDEuMjVyZW0pIHtcbiAgI2V4cGVyaWVuY2UtcGFnZSB7XG4gICAgcGFkZGluZzogMCAzcmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NHJlbSkge1xuICAjZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLmRhdGVzIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSB7XG4gICAgcGFkZGluZzogNy41cmVtIDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjZXhwZXJpZW5jZS1wYWdlIHNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gICNleHBlcmllbmNlLXBhZ2Uge1xuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICB9XG4gICNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNXJlbSAwO1xuICAgIGdhcDogNXJlbTtcbiAgfVxufVxuI2Fib3V0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2Fib3V0LWNvbnRlbnQgcCB7XG4gIHBhZGRpbmc6IDAgM3JlbTtcbn1cbiNhYm91dC1jb250ZW50IGltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogNDkuNjg3NXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxLjI1cmVtKSB7XG4gICNhYm91dC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcbiAgfVxufVxuLnByb2plY3QtcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJvamVjdC1wYWdlIGFzaWRlIHtcbiAgcGFkZGluZzogNy41cmVtIDA7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzMlKTtcbiAgd2lkdGg6IDI1JTtcbn1cbi5wcm9qZWN0LXBhZ2UgYXNpZGUgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDVyZW07XG4gIGdhcDogMS41cmVtO1xufVxuLnByb2plY3QtcGFnZSBzZWN0aW9uIHtcbiAgcGFkZGluZzogNy41cmVtIDA7XG4gIHdpZHRoOiA3NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNy41cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDVyZW07XG59XG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gLnByb2plY3Qtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogM3JlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBoMiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnByb2plY3QtcGFnZSBzZWN0aW9uIHAge1xuICBtYXgtd2lkdGg6IDQ5LjY4NzVyZW07XG59XG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMjguMTI1cmVtO1xuICBtYXgtd2lkdGg6IDUwcmVtO1xufVxuLnByb2plY3QtcGFnZSAjdmVyc2lvbi1vbmUgaW1nIHtcbiAgbWF4LWhlaWdodDogNDMuNzVyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19nZW5lcmFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19jb250YWluZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX21haW5Ib21lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX3RvVG9wQnRuLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX21haW5CYW5uZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fcG9ydGZvbGlvUGFnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19leHBlcmllbmNlUGFnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19hYm91dFBhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fcHJvamVjdFBhZ2VzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7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ZXNDb250ZW50XCI6W1wiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCJjb2xvcnNcXFwiIGFzICo7XFxuQHVzZSBcXFwiZm9udHNcXFwiIGFzICo7XFxuXFxuaHRtbCB7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdC8vc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcblxcdGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcblxcdGZvbnQtc2l6ZTogcmVtKDE4KTtcXG5cXHRjb2xvcjogJGNsci13aGl0ZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWJnO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblwiLFwiaHRtbCB7XFxuICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyZjtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNCUpO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyB7XFxuICBtYXJnaW46IDA7XFxuICBsaW5lLWhlaWdodDogMS4xO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBmb250LXNpemU6IDMuNzVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAxLjM3NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkLFxcbmE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcXG4gIGgxLFxcbiAgaDIge1xcbiAgICBmb250LXNpemU6IDMuMTI1cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICBoMSxcXG4gIGgyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbn1cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogOTkuMzc1cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICBwYWRkaW5nOiAzcmVtIDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xcbn1cXG5cXG4jaGVhZGVyLWxheW91dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDNyZW07XFxufVxcbnVsIGEge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XFxufVxcbnVsIGE6aG92ZXIge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxufVxcbnVsIC5hY3RpdmUtbmF2IHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbn1cXG5cXG4jbW9iaWxlLW5hdi1jdG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBoZWlnaHQ6IDMuMTI1cmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNtb2JpbGUtbmF2LWN0biAubW9iaWxlLWxpbmUge1xcbiAgaGVpZ2h0OiAwLjI1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxLjI1cmVtKSB7XFxuICBoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xcbiAgI2Rlc2t0b3AtbmF2LWN0biB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAjbW9iaWxlLW5hdi1jdG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICBoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICB9XFxuICBoZWFkZXIgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjByZW0pIHtcXG4gIGhlYWRlciBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwcmVtO1xcbiAgfVxcbn1cXG4jaG9tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEyLjVyZW0gMDtcXG4gIGdhcDogMTIuNXJlbTtcXG4gIG1heC13aWR0aDogNzUuMzc1cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jaG9tZSAjd2VsY29tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNy41cmVtO1xcbn1cXG4jaG9tZSAjd2VsY29tZSBkaXYge1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuI2hvbWUgI3dlbGNvbWUgcCB7XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbn1cXG4jaG9tZSAjd2VsY29tZSBpbWcge1xcbiAgd2lkdGg6IDQwJTtcXG4gIG1heC13aWR0aDogMTguNzVyZW07XFxufVxcbiNob21lICNoZWFkZXItbG9jYXRpb24ge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbiNob21lICNwcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogNDkuNjg3NXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiA3LjVyZW07XFxufVxcbiNob21lICNwcm9qZWN0cyAjcHJvamVjdHMtb25lLWxpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2hvbWUgLnByb2plY3QtY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyLjVyZW07XFxufVxcbiNob21lIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jaG9tZSAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyBwIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbiNob21lICNhYm91dC1tZSxcXG4jaG9tZSAjc2tpbGxzLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXJlbTtcXG59XFxuI2hvbWUgI2Fib3V0LW1lIGgyLFxcbiNob21lICNza2lsbHMtY3RuIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2hvbWUgI2Fib3V0LW1lIHtcXG4gIG1heC13aWR0aDogNDEuMDYyNXJlbTtcXG59XFxuI2hvbWUgI3NraWxscy1jdG4ge1xcbiAgbWF4LXdpZHRoOiA2MS45Mzc1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNob21lICNza2lsbHMtY3RuICNza2lsbHMtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDRyZW0gMDtcXG59XFxuI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS41cmVtO1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIGgzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2hvbWUgI3NraWxscy1jdG4gLnNraWxsLWltZy1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNi41cmVtO1xcbiAgd2lkdGg6IDYuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgwLCAwJSwgNjUlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDYuMjVyZW07XFxufVxcbiNob21lICNza2lsbHMtY3RuIC5za2lsbC1pbWctY3RuIGltZyB7XFxuICBtYXgtaGVpZ2h0OiAyLjVyZW07XFxuICBtYXgtd2lkdGg6IDIuNXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcXG4gICNob21lIHtcXG4gICAgcGFkZGluZzogNy41cmVtIDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XFxuICBib2R5IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgI2hvbWUgI3dlbGNvbWUge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIuNXJlbTtcXG4gIH1cXG4gICNob21lICN3ZWxjb21lIGRpdixcXG4gICNob21lICN3ZWxjb21lIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgI2hvbWUgLnByb2plY3QtY3RuIHtcXG4gICAgZ2FwOiAycmVtO1xcbiAgfVxcbiAgI2hvbWUgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcgcCB7XFxuICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcXG4gIH1cXG4gICNob21lICNza2lsbHMtY3RuIC5za2lsbCB7XFxuICAgIHdpZHRoOiAzMyU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gICNob21lIHtcXG4gICAgZ2FwOiA1cmVtO1xcbiAgICBwYWRkaW5nOiA1cmVtIDEuNXJlbTtcXG4gIH1cXG4gICNob21lICNwcm9qZWN0cyB7XFxuICAgIGdhcDogM3JlbTtcXG4gIH1cXG4gICNob21lIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHAge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG4gICNob21lICNza2lsbHMtY3RuIC5za2lsbCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuICAjaG9tZSAjYWJvdXQtbWUsXFxuICAjaG9tZSAjc2tpbGxzLWN0biB7XFxuICAgIGdhcDogMi41cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMHJlbSkge1xcbiAgI2hvbWUgI3NraWxscy1jdG4gLnNraWxsIGgzIHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIH1cXG59XFxuI2J0bi10b3Age1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDMuMTI1cmVtO1xcbiAgYm90dG9tOiAzLjEyNXJlbTtcXG59XFxuXFxuI2J0bi10b3A6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICAjYnRuLXRvcCB7XFxuICAgIHJpZ2h0OiAxLjU2MjVyZW07XFxuICAgIGJvdHRvbTogMS41NjI1cmVtO1xcbiAgfVxcbn1cXG5idXR0b24ge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBwYWRkaW5nOiAwLjc1cmVtIDMuNzVyZW07XFxuICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzUsIDc1JSwgNTglKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzUsIDcxJSwgMzklKTtcXG59XFxuXFxuLmJ0bi1yZXNldCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBoZWlnaHQ6IDE5LjVyZW07XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xcbn1cXG5mb290ZXIgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDNyZW07XFxufVxcbmZvb3RlciBhIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcXG59XFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcXG59XFxuXFxuLm1haW4tYmFubmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1haW4tYmFubmVyIGgxIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5tYWluLWJhbm5lciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNwcm9qZWN0LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiA3LjVyZW0gMDtcXG4gIGdhcDogMTVyZW07XFxufVxcbiNwcm9qZWN0LWxpc3QgLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEuODc1cmVtO1xcbn1cXG4jcHJvamVjdC1saXN0IC5wcm9qZWN0IGltZyB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jcHJvamVjdC1saXN0IC5wcm9qZWN0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxuICB3aWR0aDogNTAlO1xcbn1cXG4jcHJvamVjdC1saXN0IC5wcm9qZWN0LWNvbnRlbnQgcCB7XFxuICBtYXgtd2lkdGg6IDMyLjVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xcbiAgI3Byb2plY3QtbGlzdCB7XFxuICAgIHBhZGRpbmc6IDcuNXJlbSAzcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NHJlbSkge1xcbiAgI3Byb2plY3QtbGlzdCB7XFxuICAgIGdhcDogNy41cmVtO1xcbiAgfVxcbiAgI3Byb2plY3QtbGlzdCAucHJvamVjdC1jb250ZW50IHtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XFxuICAjcHJvamVjdC1saXN0IC5wcm9qZWN0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3QgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LWNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtY29udGVudCBwIHtcXG4gICAgbWF4LXdpZHRoOiBub25lO1xcbiAgfVxcbiAgI3Byb2plY3QtbGlzdCAjY29mZmVlLXRpbWUtcHJvamVjdCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgI3Byb2plY3QtbGlzdCB7XFxuICAgIGdhcDogNXJlbTtcXG4gICAgcGFkZGluZzogNXJlbSAxLjVyZW07XFxuICB9XFxufVxcbiNleHBlcmllbmNlLXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSB7XFxuICBwYWRkaW5nOiA3LjVyZW0gMDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzMlKTtcXG4gIHdpZHRoOiAyNSU7XFxufVxcbiNleHBlcmllbmNlLXBhZ2UgYXNpZGUgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiA1cmVtO1xcbiAgZ2FwOiAxLjVyZW07XFxufVxcbiNleHBlcmllbmNlLXBhZ2UgYXNpZGUgaDQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSBzZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA3LjVyZW07XFxufVxcbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDVyZW07XFxufVxcbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAgbGlzdC1zdHlsZTogZGlzYztcXG4gIGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGU7XFxufVxcbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCAuZGF0ZXMge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IC50aXRsZSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCBwIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xcbiAgI2V4cGVyaWVuY2UtcGFnZSB7XFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcXG4gICNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCAuZGF0ZXMge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAjZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICAjZXhwZXJpZW5jZS1wYWdlIGFzaWRlIHtcXG4gICAgcGFkZGluZzogNy41cmVtIDEuNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcXG4gICNleHBlcmllbmNlLXBhZ2UgYXNpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgI2V4cGVyaWVuY2UtcGFnZSBzZWN0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAjZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gICNleHBlcmllbmNlLXBhZ2Uge1xcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gIH1cXG4gICNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDVyZW0gMDtcXG4gICAgZ2FwOiA1cmVtO1xcbiAgfVxcbn1cXG4jYWJvdXQtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jYWJvdXQtY29udGVudCBwIHtcXG4gIHBhZGRpbmc6IDAgM3JlbTtcXG59XFxuI2Fib3V0LWNvbnRlbnQgaW1nIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXgtd2lkdGg6IDQ5LjY4NzVyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMS4yNXJlbSkge1xcbiAgI2Fib3V0LWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcXG4gIH1cXG59XFxuLnByb2plY3QtcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ucHJvamVjdC1wYWdlIGFzaWRlIHtcXG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuLnByb2plY3QtcGFnZSBhc2lkZSB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDVyZW07XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuLnByb2plY3QtcGFnZSBzZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA3LjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDVyZW07XFxufVxcbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiAucHJvamVjdC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByb2plY3QtcGFnZSBzZWN0aW9uIGgyIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuLnByb2plY3QtcGFnZSBzZWN0aW9uIHAge1xcbiAgbWF4LXdpZHRoOiA0OS42ODc1cmVtO1xcbn1cXG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogMjguMTI1cmVtO1xcbiAgbWF4LXdpZHRoOiA1MHJlbTtcXG59XFxuLnByb2plY3QtcGFnZSAjdmVyc2lvbi1vbmUgaW1nIHtcXG4gIG1heC1oZWlnaHQ6IDQzLjc1cmVtO1xcbn1cIixcIiRmb250LXByaW1hcnk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyZjtcXG5cIixcIi8vIFByaW1hcnkgQ29sb3JzXFxuJGNsci1iZzogaHNsKDAsIDAlLCA0JSk7XFxuJGNsci1idG46IGhzbCgyMzUsIDc1JSwgNTglKTtcXG4kY2xyLWJ0bi1ob3ZlcjogaHNsKDIzNSwgNzElLCAzOSUpO1xcblxcbi8vIE5ldXRyYWwgQ29sb3JzXFxuJGNsci13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXG4kY2xyLWdyYXk6IGhzbCgwLCAwJSwgNjUlKTtcXG4kY2xyLWdyYXktZGFyazogaHNsKDAsIDAlLCAzMyUpO1xcbiRjbHItYmxhY2s6IGhzbCgwLCAwJSwgMCUpO1xcblwiLFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbmltZyxcXG5waWN0dXJlLFxcbnN2ZyB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCJjb2xvcnNcXFwiIGFzICo7XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcblxcdG1hcmdpbjogMDtcXG5cXHRsaW5lLWhlaWdodDogMS4xO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuXFx0Zm9udC1zaXplOiByZW0oNjApO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0bGluZS1oZWlnaHQ6IDEuMztcXG59XFxuXFxuaDMge1xcblxcdGZvbnQtc2l6ZTogcmVtKDIyKTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmFjdGl2ZSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzY4KSkge1xcblxcdGgxLFxcblxcdGgyIHtcXG5cXHRcXHRmb250LXNpemU6IHJlbSg1MCk7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcblxcdGgxLFxcblxcdGgyIHtcXG5cXHRcXHRmb250LXNpemU6IHJlbSgzMik7XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuLmNvbnRhaW5lciB7XFxuXFx0bWF4LXdpZHRoOiByZW0oMTU5MCk7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5cXG5oZWFkZXIge1xcblxcdHBhZGRpbmc6IHJlbSg0OCkgMDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNsci1ncmF5LWRhcms7XFxufVxcblxcbiNoZWFkZXItbGF5b3V0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG51bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogcmVtKDQ4KTtcXG5cXG5cXHRhIHtcXG5cXHRcXHRjb2xvcjogJGNsci1ncmF5O1xcblxcdFxcdHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XFxuXFx0fVxcblxcblxcdGE6aG92ZXIge1xcblxcdFxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdH1cXG5cXG5cXHQuYWN0aXZlLW5hdiB7XFxuXFx0XFx0Y29sb3I6ICRjbHItd2hpdGU7XFxuXFx0fVxcbn1cXG5cXG4jbW9iaWxlLW5hdi1jdG4ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0d2lkdGg6IHJlbSg0MCk7XFxuXFx0aGVpZ2h0OiByZW0oNTApO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiByZW0oOCk7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuXFx0Lm1vYmlsZS1saW5lIHtcXG5cXHRcXHRoZWlnaHQ6IHJlbSg0KTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWdyYXk7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogcmVtKDEwKTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNjIwKSkge1xcblxcdGhlYWRlciB7XFxuXFx0XFx0cGFkZGluZzogcmVtKDQ4KTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg3NjgpKSB7XFxuXFx0I2Rlc2t0b3AtbmF2LWN0biB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFxuXFx0I21vYmlsZS1uYXYtY3RuIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXG5cXHRoZWFkZXIge1xcblxcdFxcdHBhZGRpbmc6IHJlbSgyNCk7XFxuXFxuXFx0XFx0aW1nIHtcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSgyNDApO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgzMjApKSB7XFxuXFx0aGVhZGVyIHtcXG5cXHRcXHRpbWcge1xcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDE2MCk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNob21lIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogcmVtKDIwMCkgMDtcXG5cXHRnYXA6IHJlbSgyMDApO1xcblxcdG1heC13aWR0aDogcmVtKDEyMDYpO1xcblxcdG1hcmdpbjogMCBhdXRvO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0I3dlbGNvbWUge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRnYXA6IHJlbSgxMjApO1xcblxcblxcdFxcdGRpdiB7XFxuXFx0XFx0XFx0d2lkdGg6IDYwJTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0cCB7XFxuXFx0XFx0XFx0cGFkZGluZy10b3A6IHJlbSgyNCk7XFxuXFx0XFx0fVxcblxcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0d2lkdGg6IDQwJTtcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSgzMDApO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0I2hlYWRlci1sb2NhdGlvbiB7XFxuXFx0XFx0Y29sb3I6ICRjbHItZ3JheTtcXG5cXHRcXHRmb250LXdlaWdodDogMzAwO1xcblxcdH1cXG5cXG5cXHQjcHJvamVjdHMge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRtYXgtd2lkdGg6IHJlbSg3OTUpO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdGdhcDogcmVtKDEyMCk7XFxuXFxuXFx0XFx0I3Byb2plY3RzLW9uZS1saW5lciB7XFxuXFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtY3RuIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0Z2FwOiByZW0oNDApO1xcblxcblxcdFxcdC5wcm9qZWN0LWhlYWRpbmcge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0XFx0XFx0cCB7XFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oODApO1xcblxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0I2Fib3V0LW1lLFxcblxcdCNza2lsbHMtY3RuIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0Z2FwOiByZW0oODApO1xcblxcblxcdFxcdGgyIHtcXG5cXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQjYWJvdXQtbWUge1xcblxcdFxcdG1heC13aWR0aDogcmVtKDY1Nyk7XFxuXFx0fVxcblxcblxcdCNza2lsbHMtY3RuIHtcXG5cXHRcXHRtYXgtd2lkdGg6IHJlbSg5OTEpO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcblxcdFxcdCNza2lsbHMtbGlzdCB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0XFx0Z2FwOiByZW0oNjQpIDA7XFxuXFx0XFx0fVxcblxcblxcdFxcdC5za2lsbCB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0XFx0Z2FwOiByZW0oMjQpO1xcblxcdFxcdFxcdHdpZHRoOiAyMCU7XFxuXFxuXFx0XFx0XFx0aDMge1xcblxcdFxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdC5za2lsbC1pbWctY3RuIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0XFx0aGVpZ2h0OiByZW0oMTA0KTtcXG5cXHRcXHRcXHR3aWR0aDogcmVtKDEwNCk7XFxuXFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgJGNsci1ncmF5O1xcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHJlbSgxMDApO1xcblxcblxcdFxcdFxcdGltZyB7XFxuXFx0XFx0XFx0XFx0bWF4LWhlaWdodDogcmVtKDQwKTtcXG5cXHRcXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSg0MCk7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxMDI0KSkge1xcblxcdCNob21lIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSByZW0oNDgpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDc2OCkpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxuXFx0fVxcblxcblxcdCNob21lIHtcXG5cXHRcXHQjd2VsY29tZSB7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRnYXA6IHJlbSg0MCk7XFxuXFxuXFx0XFx0XFx0ZGl2LFxcblxcdFxcdFxcdGltZyB7XFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQucHJvamVjdC1jdG4ge1xcblxcdFxcdFxcdGdhcDogcmVtKDMyKTtcXG5cXG5cXHRcXHRcXHQucHJvamVjdC1oZWFkaW5nIHtcXG5cXHRcXHRcXHRcXHRwIHtcXG5cXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSg2MCk7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0I3NraWxscy1jdG4ge1xcblxcdFxcdFxcdC5za2lsbCB7XFxuXFx0XFx0XFx0XFx0d2lkdGg6IDMzJTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXG5cXHQjaG9tZSB7XFxuXFx0XFx0Z2FwOiByZW0oODApO1xcblxcdFxcdHBhZGRpbmc6IHJlbSg4MCkgcmVtKDI0KTtcXG5cXG5cXHRcXHQjcHJvamVjdHMge1xcblxcdFxcdFxcdGdhcDogcmVtKDQ4KTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0LnByb2plY3QtY3RuIHtcXG5cXHRcXHRcXHQucHJvamVjdC1oZWFkaW5nIHtcXG5cXHRcXHRcXHRcXHRwIHtcXG5cXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSg0MCk7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0I3NraWxscy1jdG4ge1xcblxcdFxcdFxcdC5za2lsbCB7XFxuXFx0XFx0XFx0XFx0d2lkdGg6IDUwJTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdCNhYm91dC1tZSxcXG5cXHRcXHQjc2tpbGxzLWN0biB7XFxuXFx0XFx0XFx0Z2FwOiByZW0oNDApO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgzMjApKSB7XFxuXFx0I2hvbWUge1xcblxcdFxcdCNza2lsbHMtY3RuIHtcXG5cXHRcXHRcXHQuc2tpbGwge1xcblxcdFxcdFxcdFxcdGgzIHtcXG5cXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSgxOCk7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuI2J0bi10b3Age1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRyaWdodDogcmVtKDUwKTtcXG5cXHRib3R0b206IHJlbSg1MCk7XFxufVxcblxcbiNidG4tdG9wOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg0MjUpKSB7XFxuXFx0I2J0bi10b3Age1xcblxcdFxcdHJpZ2h0OiByZW0oMjUpO1xcblxcdFxcdGJvdHRvbTogcmVtKDI1KTtcXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG5idXR0b24ge1xcblxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdGZvbnQtc2l6ZTogcmVtKDIwKTtcXG5cXHRwYWRkaW5nOiByZW0oMTIpIHJlbSg2MCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogcmVtKDUwKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWJ0bjtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWJ0bi1ob3ZlcjtcXG59XFxuXFxuLmJ0bi1yZXNldCB7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg0MjUpKSB7XFxuXFx0YnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuZm9vdGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IHJlbSg0OCk7XFxuXFx0Zm9udC1zaXplOiByZW0oMzIpO1xcblxcdGhlaWdodDogcmVtKDMxMik7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICRjbHItZ3JheS1kYXJrO1xcblxcblxcdGRpdiB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRnYXA6IHJlbSg0OCk7XFxuXFx0fVxcblxcblxcdGEge1xcblxcdFxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdFxcdHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XFxuXFx0fVxcblxcblxcdGE6aG92ZXIge1xcblxcdFxcdGNvbG9yOiAkY2xyLWdyYXk7XFxuXFx0fVxcbn1cXG5cIixcIi5tYWluLWJhbm5lciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG5cXHRoMSB7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdHRvcDogNTAlO1xcblxcdFxcdGxlZnQ6IDUwJTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHR9XFxuXFxuXFx0aW1nIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jcHJvamVjdC1saXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogcmVtKDEyMCkgMDtcXG5cXHRnYXA6IHJlbSgyNDApO1xcblxcblxcdC5wcm9qZWN0IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGdhcDogcmVtKDMwKTtcXG5cXG5cXHRcXHRpbWcge1xcblxcdFxcdFxcdHdpZHRoOiA1MCU7XFxuXFx0XFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtY29udGVudCB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0Z2FwOiByZW0oNDgpO1xcblxcdFxcdHdpZHRoOiA1MCU7XFxuXFxuXFx0XFx0cCB7XFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oNTIwKTtcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDE2MjApKSB7XFxuXFx0I3Byb2plY3QtbGlzdCB7XFxuXFx0XFx0cGFkZGluZzogcmVtKDEyMCkgcmVtKDQ4KTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxMDI0KSkge1xcblxcdCNwcm9qZWN0LWxpc3Qge1xcblxcdFxcdGdhcDogcmVtKDEyMCk7XFxuXFxuXFx0XFx0LnByb2plY3QtY29udGVudCB7XFxuXFx0XFx0XFx0Z2FwOiByZW0oMjQpO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg3NjgpKSB7XFxuXFx0I3Byb2plY3QtbGlzdCB7XFxuXFx0XFx0LnByb2plY3Qge1xcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuXFx0XFx0XFx0aW1nIHtcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0LnByb2plY3QtY29udGVudCB7XFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFxuXFx0XFx0XFx0XFx0cCB7XFxuXFx0XFx0XFx0XFx0XFx0bWF4LXdpZHRoOiBub25lO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdCNjb2ZmZWUtdGltZS1wcm9qZWN0IHtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXG5cXHQjcHJvamVjdC1saXN0IHtcXG5cXHRcXHRnYXA6IHJlbSg4MCk7XFxuXFx0XFx0cGFkZGluZzogcmVtKDgwKSByZW0oMjQpO1xcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNleHBlcmllbmNlLXBhZ2Uge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFxuXFx0YXNpZGUge1xcblxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIDA7XFxuXFx0XFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGNsci1ncmF5LWRhcms7XFxuXFx0XFx0d2lkdGg6IDI1JTtcXG5cXG5cXHRcXHR1bCB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdHBvc2l0aW9uOiBzdGlja3k7XFxuXFx0XFx0XFx0dG9wOiByZW0oODApO1xcblxcdFxcdFxcdGdhcDogcmVtKDI0KTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0aDQge1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHRzZWN0aW9uIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcblxcdFxcdHdpZHRoOiA3NSU7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGdhcDogcmVtKDEyMCk7XFxuXFx0fVxcblxcblxcdC5leHBlcmllbmNlLWNvbnRlbnQge1xcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IHJlbSg4MCk7XFxuXFxuXFx0XFx0dWwge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRnYXA6IHJlbSg4KTtcXG5cXHRcXHRcXHRsaXN0LXN0eWxlOiBkaXNjO1xcblxcdFxcdFxcdGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGU7XFxuXFx0XFx0fVxcblxcblxcdFxcdC5kYXRlcyB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMjApO1xcblxcdFxcdFxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNDAwO1xcblxcdFxcdFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRcXHR9XFxuXFxuXFx0XFx0LnRpdGxlIHtcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSg0MCk7XFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG5cXHRcXHRcXHRmb250LXN0eWxlOiBub3JtYWw7XFxuXFx0XFx0fVxcblxcblxcdFxcdHAge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDIwKTtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IHJlbSgyNCk7XFxuXFx0XFx0XFx0bWFyZ2luLXRvcDogcmVtKDgpO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNjIwKSkge1xcblxcdCNleHBlcmllbmNlLXBhZ2Uge1xcblxcdFxcdHBhZGRpbmc6IDAgcmVtKDQ4KTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxMDI0KSkge1xcblxcdCNleHBlcmllbmNlLXBhZ2Uge1xcblxcdFxcdC5leHBlcmllbmNlLWNvbnRlbnQge1xcblxcdFxcdFxcdC5kYXRlcyB7XFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHQudGl0bGUge1xcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDI0KTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdGFzaWRlIHtcXG5cXHRcXHRcXHRwYWRkaW5nOiByZW0oMTIwKSByZW0oMjQpO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg3NjgpKSB7XFxuXFx0I2V4cGVyaWVuY2UtcGFnZSB7XFxuXFx0XFx0YXNpZGUge1xcblxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0XFx0fVxcblxcblxcdFxcdHNlY3Rpb24ge1xcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQuZXhwZXJpZW5jZS1jb250ZW50IHtcXG5cXHRcXHRcXHRwYWRkaW5nLWxlZnQ6IDA7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXG5cXHQjZXhwZXJpZW5jZS1wYWdlIHtcXG5cXHRcXHRwYWRkaW5nOiAwIHJlbSgyNCk7XFxuXFxuXFx0XFx0c2VjdGlvbiB7XFxuXFx0XFx0XFx0cGFkZGluZzogcmVtKDgwKSAwO1xcblxcdFxcdFxcdGdhcDogcmVtKDgwKTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuI2Fib3V0LWNvbnRlbnQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0cGFkZGluZzogcmVtKDEyMCkgMDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRwIHtcXG5cXHRcXHRwYWRkaW5nOiAwIHJlbSg0OCk7XFxuXFx0fVxcblxcblxcdGltZyB7XFxuXFx0XFx0d2lkdGg6IDUwJTtcXG5cXHRcXHRtYXgtd2lkdGg6IHJlbSg3OTUpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDE2MjApKSB7XFxuXFx0I2Fib3V0LWNvbnRlbnQge1xcblxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIHJlbSg0OCk7XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuLnByb2plY3QtcGFnZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXG5cXHRhc2lkZSB7XFxuXFx0XFx0cGFkZGluZzogcmVtKDEyMCkgMDtcXG5cXHRcXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkY2xyLWdyYXktZGFyaztcXG5cXHRcXHR3aWR0aDogMjUlO1xcblxcblxcdFxcdHVsIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0XFx0cG9zaXRpb246IHN0aWNreTtcXG5cXHRcXHRcXHR0b3A6IHJlbSg4MCk7XFxuXFx0XFx0XFx0Z2FwOiByZW0oMjQpO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0c2VjdGlvbiB7XFxuXFx0XFx0cGFkZGluZzogcmVtKDEyMCkgMDtcXG5cXHRcXHR3aWR0aDogNzUlO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRnYXA6IHJlbSgxMjApO1xcblxcdFxcdHBhZGRpbmctbGVmdDogcmVtKDgwKTtcXG5cXG5cXHRcXHQucHJvamVjdC1zZWN0aW9uIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0XFx0Z2FwOiByZW0oNDgpO1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0fVxcblxcblxcdFxcdGgyIHtcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSg0MCk7XFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0cCB7XFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oNzk1KTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0aW1nIHtcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxuXFx0XFx0XFx0bWF4LWhlaWdodDogcmVtKDQ1MCk7XFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oODAwKTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdC8vIHRoaXMgaXMgZm9yIHRoZSBwb3J0Zm9saW8gcHJvamVjdFxcblxcdCN2ZXJzaW9uLW9uZSB7XFxuXFx0XFx0aW1nIHtcXG5cXHRcXHRcXHRtYXgtaGVpZ2h0OiByZW0oNzAwKTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHsgdXBkYXRlSGVhZGVyQWN0aXZlTGluaywgcmVtb3ZlSGVhZGVyU3R5bGVzLCBtb2JpbGVOYXZJbml0IH07XG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpbmtzXCIpO1xuXG5mdW5jdGlvbiB1cGRhdGVIZWFkZXJBY3RpdmVMaW5rKCkge1xuXHRuYXYuZm9yRWFjaCgobGluaykgPT4ge1xuXHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdHVwZGF0ZUhlYWRlclN0eWxlcyhsaW5rKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUhlYWRlclN0eWxlcyhsaW5rKSB7XG5cdHJlbW92ZUhlYWRlclN0eWxlcygpO1xuXHRhZGRIZWFkZXJTdHlsZXMobGluayk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhlYWRlclN0eWxlcygpIHtcblx0bmF2LmZvckVhY2goKGNoaWxkKSA9PiB7XG5cdFx0Y2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1uYXZcIik7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRIZWFkZXJTdHlsZXMobGluaykge1xuXHRsaW5rLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtbmF2XCIpO1xufVxuXG5mdW5jdGlvbiBtb2JpbGVOYXZJbml0KCkge1xuXHRjb25zb2xlLmxvZyhcblx0XHRcInRoaXMgaXMgd2hlcmUgSSB3aWxsIGFkZCBsb2dpYyBmb3Igb3BlbmluZyBhbmQgY2xvc2luZyB0aGUgbmF2IG9uIGNsaWNrIGZvciBtb2JpbGVcIlxuXHQpO1xufVxuIiwiZXhwb3J0IHsgc2Nyb2xsVG9Ub3AgfTtcblxuY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tdG9wXCIpO1xuXG5idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNjcm9sbFRvVG9wKTtcblxuZnVuY3Rpb24gc2Nyb2xsVG9Ub3AoKSB7XG5cdGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG59XG4iLCJleHBvcnQgeyBpbml0IH07XG5pbXBvcnQgeyB1cGRhdGVIZWFkZXJBY3RpdmVMaW5rLCBtb2JpbGVOYXZJbml0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCB7IHNjcm9sbFRvVG9wIH0gZnJvbSBcIi4vY29tcG9uZW50cy90b1RvcEJ0blwiO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuXHR1cGRhdGVIZWFkZXJBY3RpdmVMaW5rKCk7XG5cdHNjcm9sbFRvVG9wKCk7XG5cdG1vYmlsZU5hdkluaXQoKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGluaXQgfSBmcm9tIFwiLi9pbml0LmpzXCI7XG5pbXBvcnQgXCIuLi9zY3NzL3N0eWxlcy5zY3NzXCI7XG5cbmluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==