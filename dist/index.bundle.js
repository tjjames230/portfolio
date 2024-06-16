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

@media screen and (max-width: 99.375rem) {
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
main {
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  gap: 12.5rem;
  max-width: 75.375rem;
  margin: 0 auto;
  align-items: center;
}
main #welcome {
  display: flex;
  align-items: center;
  gap: 7.5rem;
}
main #welcome div {
  width: 60%;
}
main #welcome p {
  padding-top: 1.5rem;
}
main #welcome img {
  width: 40%;
  max-width: 18.75rem;
}
main #header-location {
  color: hsl(0, 0%, 65%);
  font-weight: 300;
}
main #projects {
  display: flex;
  flex-direction: column;
  max-width: 49.6875rem;
  width: 100%;
  gap: 7.5rem;
}
main #projects #projects-one-liner {
  text-align: center;
}
main .project-ctn {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
main .project-ctn .project-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
main .project-ctn .project-heading p {
  font-size: 5rem;
  font-weight: 100;
}
main #about-me,
main #skills-ctn {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}
main #about-me h2,
main #skills-ctn h2 {
  text-align: center;
}
main #about-me {
  max-width: 41.0625rem;
}
main #skills-ctn {
  max-width: 61.9375rem;
  width: 100%;
}
main #skills-ctn #skills-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem 0;
}
main #skills-ctn .skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 20%;
}
main #skills-ctn .skill h3 {
  text-align: center;
}
main #skills-ctn .skill-img-ctn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6.5rem;
  width: 6.5rem;
  border: 1px solid hsl(0, 0%, 65%);
  border-radius: 6.25rem;
}
main #skills-ctn .skill-img-ctn img {
  max-height: 2.5rem;
  max-width: 2.5rem;
}

@media screen and (max-width: 64rem) {
  main {
    padding: 7.5rem 3rem;
  }
}
@media screen and (max-width: 48rem) {
  body {
    font-size: 1rem;
  }
  main #welcome {
    flex-direction: column;
    gap: 2.5rem;
  }
  main #welcome div,
  main #welcome img {
    width: 100%;
  }
  main h1,
  main h2 {
    font-size: 3.125rem;
  }
  main .project-ctn {
    gap: 2rem;
  }
  main .project-ctn .project-heading p {
    font-size: 3.75rem;
  }
  main #skills-ctn .skill {
    width: 33%;
  }
}
@media screen and (max-width: 26.5625rem) {
  main {
    gap: 5rem;
    padding: 5rem 1.5rem;
  }
  main h1,
  main h2 {
    font-size: 2rem;
  }
  main #projects {
    gap: 3rem;
  }
  main .project-ctn .project-heading p {
    font-size: 2.5rem;
  }
  main #skills-ctn .skill {
    width: 50%;
  }
  main #about-me,
  main #skills-ctn {
    gap: 2.5rem;
  }
}
@media screen and (max-width: 20rem) {
  main #skills-ctn .skill h3 {
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
  gap: 1.875rem;
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
  width: 32.5rem;
  font-size: 1rem;
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
#experience-page .experience-content h3 {
  font-size: 1.25rem;
  font-style: italic;
  font-weight: 400;
}
#experience-page .experience-content span {
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

#about-content {
  display: flex;
  padding: 7.5rem 0;
  justify-content: space-between;
  align-items: center;
}
#about-content p {
  padding: 0 7.5rem;
}
#about-content img {
  width: auto;
  max-height: 34.6875rem;
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
}`, "",{"version":3,"sources":["webpack://./src/scss/globals/_general.scss","webpack://./src/scss/styles.scss","webpack://./src/scss/globals/_fonts.scss","webpack://./src/scss/globals/_colors.scss","webpack://./src/scss/globals/_reset.scss","webpack://./src/scss/globals/_typography.scss","webpack://./src/scss/globals/_container.scss","webpack://./src/scss/components/_header.scss","webpack://./src/scss/components/_mainHome.scss","webpack://./src/scss/components/_toTopBtn.scss","webpack://./src/scss/components/_buttons.scss","webpack://./src/scss/components/_footer.scss","webpack://./src/scss/components/_mainBanner.scss","webpack://./src/scss/components/_portfolioPage.scss","webpack://./src/scss/components/_experiencePage.scss","webpack://./src/scss/components/_aboutPage.scss","webpack://./src/scss/components/_projectPages.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"../utilities/\" as *;\n@use \"colors\" as *;\n@use \"fonts\" as *;\n\nhtml {\n\tfont-size: 100%;\n\t//scroll-behavior: smooth;\n}\n\nbody {\n\tfont-family: $font-primary;\n\tfont-size: rem(18);\n\tcolor: $clr-white;\n\tbackground-color: $clr-bg;\n\tline-height: 1.5;\n}\n","html {\n  font-size: 100%;\n}\n\nbody {\n  font-family: \"Inter\", sans-serf;\n  font-size: 1.125rem;\n  color: hsl(0, 0%, 100%);\n  background-color: hsl(0, 0%, 4%);\n  line-height: 1.5;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n  line-height: 1.1;\n}\n\nh1,\nh2 {\n  font-size: 3.75rem;\n  font-weight: 700;\n  line-height: 1.3;\n}\n\nh3 {\n  font-size: 1.375rem;\n  font-weight: 700;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\n.container {\n  max-width: 99.375rem;\n  margin: 0 auto;\n}\n\nheader {\n  padding: 3rem 0;\n  border-bottom: 1px solid hsl(0, 0%, 33%);\n}\n\n#header-layout {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nul {\n  list-style: none;\n  display: flex;\n  gap: 3rem;\n}\nul a {\n  color: hsl(0, 0%, 65%);\n  transition: color 0.1s;\n}\nul a:hover {\n  color: hsl(0, 0%, 100%);\n}\nul .active-nav {\n  color: hsl(0, 0%, 100%);\n}\n\n#mobile-nav-ctn {\n  display: none;\n  width: 2.5rem;\n  height: 3.125rem;\n  flex-direction: column;\n  gap: 0.5rem;\n  justify-content: center;\n}\n#mobile-nav-ctn .mobile-line {\n  height: 0.25rem;\n  width: 100%;\n  background-color: hsl(0, 0%, 65%);\n  border-radius: 0.625rem;\n}\n\n@media screen and (max-width: 99.375rem) {\n  header {\n    padding: 3rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #desktop-nav-ctn {\n    display: none;\n  }\n  #mobile-nav-ctn {\n    display: flex;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  header {\n    padding: 1.5rem;\n  }\n  header img {\n    max-width: 15rem;\n  }\n}\n@media screen and (max-width: 20rem) {\n  header img {\n    max-width: 10rem;\n  }\n}\nmain {\n  display: flex;\n  flex-direction: column;\n  padding: 12.5rem 0;\n  gap: 12.5rem;\n  max-width: 75.375rem;\n  margin: 0 auto;\n  align-items: center;\n}\nmain #welcome {\n  display: flex;\n  align-items: center;\n  gap: 7.5rem;\n}\nmain #welcome div {\n  width: 60%;\n}\nmain #welcome p {\n  padding-top: 1.5rem;\n}\nmain #welcome img {\n  width: 40%;\n  max-width: 18.75rem;\n}\nmain #header-location {\n  color: hsl(0, 0%, 65%);\n  font-weight: 300;\n}\nmain #projects {\n  display: flex;\n  flex-direction: column;\n  max-width: 49.6875rem;\n  width: 100%;\n  gap: 7.5rem;\n}\nmain #projects #projects-one-liner {\n  text-align: center;\n}\nmain .project-ctn {\n  display: flex;\n  flex-direction: column;\n  gap: 2.5rem;\n}\nmain .project-ctn .project-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nmain .project-ctn .project-heading p {\n  font-size: 5rem;\n  font-weight: 100;\n}\nmain #about-me,\nmain #skills-ctn {\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n}\nmain #about-me h2,\nmain #skills-ctn h2 {\n  text-align: center;\n}\nmain #about-me {\n  max-width: 41.0625rem;\n}\nmain #skills-ctn {\n  max-width: 61.9375rem;\n  width: 100%;\n}\nmain #skills-ctn #skills-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 4rem 0;\n}\nmain #skills-ctn .skill {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n  width: 20%;\n}\nmain #skills-ctn .skill h3 {\n  text-align: center;\n}\nmain #skills-ctn .skill-img-ctn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 6.5rem;\n  width: 6.5rem;\n  border: 1px solid hsl(0, 0%, 65%);\n  border-radius: 6.25rem;\n}\nmain #skills-ctn .skill-img-ctn img {\n  max-height: 2.5rem;\n  max-width: 2.5rem;\n}\n\n@media screen and (max-width: 64rem) {\n  main {\n    padding: 7.5rem 3rem;\n  }\n}\n@media screen and (max-width: 48rem) {\n  body {\n    font-size: 1rem;\n  }\n  main #welcome {\n    flex-direction: column;\n    gap: 2.5rem;\n  }\n  main #welcome div,\n  main #welcome img {\n    width: 100%;\n  }\n  main h1,\n  main h2 {\n    font-size: 3.125rem;\n  }\n  main .project-ctn {\n    gap: 2rem;\n  }\n  main .project-ctn .project-heading p {\n    font-size: 3.75rem;\n  }\n  main #skills-ctn .skill {\n    width: 33%;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  main {\n    gap: 5rem;\n    padding: 5rem 1.5rem;\n  }\n  main h1,\n  main h2 {\n    font-size: 2rem;\n  }\n  main #projects {\n    gap: 3rem;\n  }\n  main .project-ctn .project-heading p {\n    font-size: 2.5rem;\n  }\n  main #skills-ctn .skill {\n    width: 50%;\n  }\n  main #about-me,\n  main #skills-ctn {\n    gap: 2.5rem;\n  }\n}\n@media screen and (max-width: 20rem) {\n  main #skills-ctn .skill h3 {\n    font-size: 1.125rem;\n  }\n}\n#btn-top {\n  position: fixed;\n  right: 3.125rem;\n  bottom: 3.125rem;\n}\n\n#btn-top:hover {\n  cursor: pointer;\n}\n\nbutton {\n  color: hsl(0, 0%, 100%);\n  font-size: 1.25rem;\n  padding: 0.75rem 3.75rem;\n  border-radius: 3.125rem;\n  background-color: hsl(235, 75%, 58%);\n  border: none;\n  transition: background-color 0.1s;\n}\n\nbutton:hover {\n  cursor: pointer;\n  background-color: hsl(235, 71%, 39%);\n}\n\n.btn-reset {\n  margin: 0 auto;\n}\n\n@media screen and (max-width: 26.5625rem) {\n  button {\n    font-size: 1rem;\n  }\n}\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n  font-size: 2rem;\n  height: 19.5rem;\n  border-top: 1px solid hsl(0, 0%, 33%);\n}\nfooter div {\n  display: flex;\n  gap: 3rem;\n}\nfooter a {\n  color: hsl(0, 0%, 100%);\n  transition: color 0.1s;\n}\nfooter a:hover {\n  color: hsl(0, 0%, 65%);\n}\n\n.main-banner {\n  position: relative;\n  text-align: center;\n}\n.main-banner h1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main-banner img {\n  width: 100%;\n}\n\n#project-list {\n  display: flex;\n  flex-direction: column;\n  padding: 7.5rem 0;\n  gap: 15rem;\n}\n#project-list .project {\n  display: flex;\n  justify-content: space-between;\n  gap: 1.875rem;\n}\n#project-list .project-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3rem;\n  width: 50%;\n}\n#project-list .project-content p {\n  width: 32.5rem;\n  font-size: 1rem;\n}\n\n#experience-page {\n  display: flex;\n}\n#experience-page aside {\n  padding: 7.5rem 0;\n  border-right: 1px solid hsl(0, 0%, 33%);\n  width: 25%;\n}\n#experience-page aside ul {\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 5rem;\n  gap: 1.5rem;\n}\n#experience-page aside h4 {\n  font-weight: 700;\n}\n#experience-page section {\n  padding: 7.5rem 0;\n  width: 75%;\n  display: flex;\n  flex-direction: column;\n  gap: 7.5rem;\n}\n#experience-page .experience-content {\n  font-size: 1rem;\n  padding-left: 5rem;\n}\n#experience-page .experience-content ul {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  list-style: disc;\n  list-style-position: outside;\n}\n#experience-page .experience-content h3 {\n  font-size: 1.25rem;\n  font-style: italic;\n  font-weight: 400;\n}\n#experience-page .experience-content span {\n  font-size: 2.5rem;\n  font-weight: 300;\n  font-style: normal;\n}\n#experience-page .experience-content p {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin-bottom: 1.5rem;\n  margin-top: 0.5rem;\n}\n\n#about-content {\n  display: flex;\n  padding: 7.5rem 0;\n  justify-content: space-between;\n  align-items: center;\n}\n#about-content p {\n  padding: 0 7.5rem;\n}\n#about-content img {\n  width: auto;\n  max-height: 34.6875rem;\n}\n\n.project-page {\n  display: flex;\n}\n.project-page aside {\n  padding: 7.5rem 0;\n  border-right: 1px solid hsl(0, 0%, 33%);\n  width: 25%;\n}\n.project-page aside ul {\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 5rem;\n  gap: 1.5rem;\n}\n.project-page section {\n  padding: 7.5rem 0;\n  width: 75%;\n  display: flex;\n  flex-direction: column;\n  gap: 7.5rem;\n  padding-left: 5rem;\n}\n.project-page section .project-section {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n  align-items: center;\n}\n.project-page section h2 {\n  font-size: 2.5rem;\n  font-weight: 300;\n}\n.project-page section p {\n  max-width: 49.6875rem;\n}\n.project-page section img {\n  width: 100%;\n  height: auto;\n  max-height: 28.125rem;\n  max-width: 50rem;\n}\n.project-page #version-one img {\n  max-height: 43.75rem;\n}","$font-primary: \"Inter\", sans-serf;\n","// Primary Colors\n$clr-bg: hsl(0, 0%, 4%);\n$clr-btn: hsl(235, 75%, 58%);\n$clr-btn-hover: hsl(235, 71%, 39%);\n\n// Neutral Colors\n$clr-white: hsl(0, 0%, 100%);\n$clr-gray: hsl(0, 0%, 65%);\n$clr-gray-dark: hsl(0, 0%, 33%);\n$clr-black: hsl(0, 0%, 0%);\n","*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont: inherit;\n}\n\nimg,\npicture,\nsvg {\n\tdisplay: block;\n}\n","@use \"../utilities/\" as *;\n@use \"colors\" as *;\n\nh1,\nh2,\nh3 {\n\tmargin: 0;\n\tline-height: 1.1;\n}\n\nh1,\nh2 {\n\tfont-size: rem(60);\n\tfont-weight: 700;\n\tline-height: 1.3;\n}\n\nh3 {\n\tfont-size: rem(22);\n\tfont-weight: 700;\n}\n\na,\na:visited,\na:active {\n\ttext-decoration: none;\n}\n","@use \"../utilities/\" as *;\n\n.container {\n\tmax-width: rem(1590);\n\tmargin: 0 auto;\n}\n","@use \"../utilities/\" as *;\n@use \"../globals/\" as *;\n\nheader {\n\tpadding: rem(48) 0;\n\tborder-bottom: 1px solid $clr-gray-dark;\n}\n\n#header-layout {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\nul {\n\tlist-style: none;\n\tdisplay: flex;\n\tgap: rem(48);\n\n\ta {\n\t\tcolor: $clr-gray;\n\t\ttransition: color 0.1s;\n\t}\n\n\ta:hover {\n\t\tcolor: $clr-white;\n\t}\n\n\t.active-nav {\n\t\tcolor: $clr-white;\n\t}\n}\n\n#mobile-nav-ctn {\n\tdisplay: none;\n\twidth: rem(40);\n\theight: rem(50);\n\tflex-direction: column;\n\tgap: rem(8);\n\tjustify-content: center;\n\n\t.mobile-line {\n\t\theight: rem(4);\n\t\twidth: 100%;\n\t\tbackground-color: $clr-gray;\n\t\tborder-radius: rem(10);\n\t}\n}\n\n@media screen and (max-width: rem(1590)) {\n\theader {\n\t\tpadding: rem(48);\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t#desktop-nav-ctn {\n\t\tdisplay: none;\n\t}\n\n\t#mobile-nav-ctn {\n\t\tdisplay: flex;\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\theader {\n\t\tpadding: rem(24);\n\n\t\timg {\n\t\t\tmax-width: rem(240);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(320)) {\n\theader {\n\t\timg {\n\t\t\tmax-width: rem(160);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\nmain {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: rem(200) 0;\n\tgap: rem(200);\n\tmax-width: rem(1206);\n\tmargin: 0 auto;\n\talign-items: center;\n\n\t#welcome {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: rem(120);\n\n\t\tdiv {\n\t\t\twidth: 60%;\n\t\t}\n\n\t\tp {\n\t\t\tpadding-top: rem(24);\n\t\t}\n\n\t\timg {\n\t\t\twidth: 40%;\n\t\t\tmax-width: rem(300);\n\t\t}\n\t}\n\n\t#header-location {\n\t\tcolor: $clr-gray;\n\t\tfont-weight: 300;\n\t}\n\n\t#projects {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmax-width: rem(795);\n\t\twidth: 100%;\n\t\tgap: rem(120);\n\n\t\t#projects-one-liner {\n\t\t\ttext-align: center;\n\t\t}\n\t}\n\n\t.project-ctn {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(40);\n\n\t\t.project-heading {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\talign-items: center;\n\n\t\t\tp {\n\t\t\t\tfont-size: rem(80);\n\t\t\t\tfont-weight: 100;\n\t\t\t}\n\t\t}\n\t}\n\n\t#about-me,\n\t#skills-ctn {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(80);\n\n\t\th2 {\n\t\t\ttext-align: center;\n\t\t}\n\t}\n\n\t#about-me {\n\t\tmax-width: rem(657);\n\t}\n\n\t#skills-ctn {\n\t\tmax-width: rem(991);\n\t\twidth: 100%;\n\n\t\t#skills-list {\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tjustify-content: center;\n\t\t\tgap: rem(64) 0;\n\t\t}\n\n\t\t.skill {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-items: center;\n\t\t\tgap: rem(24);\n\t\t\twidth: 20%;\n\n\t\t\th3 {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t}\n\n\t\t.skill-img-ctn {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\theight: rem(104);\n\t\t\twidth: rem(104);\n\t\t\tborder: 1px solid $clr-gray;\n\t\t\tborder-radius: rem(100);\n\n\t\t\timg {\n\t\t\t\tmax-height: rem(40);\n\t\t\t\tmax-width: rem(40);\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1024)) {\n\tmain {\n\t\tpadding: rem(120) rem(48);\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\tbody {\n\t\tfont-size: rem(16);\n\t}\n\n\tmain {\n\t\t#welcome {\n\t\t\tflex-direction: column;\n\t\t\tgap: rem(40);\n\n\t\t\tdiv,\n\t\t\timg {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\n\t\th1,\n\t\th2 {\n\t\t\tfont-size: rem(50);\n\t\t}\n\n\t\t.project-ctn {\n\t\t\tgap: rem(32);\n\n\t\t\t.project-heading {\n\t\t\t\tp {\n\t\t\t\t\tfont-size: rem(60);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t#skills-ctn {\n\t\t\t.skill {\n\t\t\t\twidth: 33%;\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\tmain {\n\t\tgap: rem(80);\n\t\tpadding: rem(80) rem(24);\n\n\t\th1,\n\t\th2 {\n\t\t\tfont-size: rem(32);\n\t\t}\n\n\t\t#projects {\n\t\t\tgap: rem(48);\n\t\t}\n\n\t\t.project-ctn {\n\t\t\t.project-heading {\n\t\t\t\tp {\n\t\t\t\t\tfont-size: rem(40);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t#skills-ctn {\n\t\t\t.skill {\n\t\t\t\twidth: 50%;\n\t\t\t}\n\t\t}\n\n\t\t#about-me,\n\t\t#skills-ctn {\n\t\t\tgap: rem(40);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(320)) {\n\tmain {\n\t\t#skills-ctn {\n\t\t\t.skill {\n\t\t\t\th3 {\n\t\t\t\t\tfont-size: rem(18);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#btn-top {\n\tposition: fixed;\n\tright: rem(50);\n\tbottom: rem(50);\n}\n\n#btn-top:hover {\n\tcursor: pointer;\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\nbutton {\n\tcolor: $clr-white;\n\tfont-size: rem(20);\n\tpadding: rem(12) rem(60);\n\tborder-radius: rem(50);\n\tbackground-color: $clr-btn;\n\tborder: none;\n\ttransition: background-color 0.1s;\n}\n\nbutton:hover {\n\tcursor: pointer;\n\tbackground-color: $clr-btn-hover;\n}\n\n.btn-reset {\n\tmargin: 0 auto;\n}\n\n@media screen and (max-width: rem(425)) {\n\tbutton {\n\t\tfont-size: rem(16);\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\nfooter {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: rem(48);\n\tfont-size: rem(32);\n\theight: rem(312);\n\tborder-top: 1px solid $clr-gray-dark;\n\n\tdiv {\n\t\tdisplay: flex;\n\t\tgap: rem(48);\n\t}\n\n\ta {\n\t\tcolor: $clr-white;\n\t\ttransition: color 0.1s;\n\t}\n\n\ta:hover {\n\t\tcolor: $clr-gray;\n\t}\n}\n",".main-banner {\n\tposition: relative;\n\ttext-align: center;\n\n\th1 {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t}\n\n\timg {\n\t\twidth: 100%;\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#project-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: rem(120) 0;\n\tgap: rem(240);\n\n\t.project {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tgap: rem(30);\n\t}\n\n\t.project-content {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tgap: rem(48);\n\t\twidth: 50%;\n\n\t\tp {\n\t\t\twidth: rem(520);\n\t\t\tfont-size: rem(16);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#experience-page {\n\tdisplay: flex;\n\n\taside {\n\t\tpadding: rem(120) 0;\n\t\tborder-right: 1px solid $clr-gray-dark;\n\t\twidth: 25%;\n\n\t\tul {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tposition: sticky;\n\t\t\ttop: rem(80);\n\t\t\tgap: rem(24);\n\t\t}\n\n\t\th4 {\n\t\t\tfont-weight: 700;\n\t\t}\n\t}\n\n\tsection {\n\t\tpadding: rem(120) 0;\n\t\twidth: 75%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(120);\n\t}\n\n\t.experience-content {\n\t\tfont-size: rem(16);\n\t\tpadding-left: rem(80);\n\n\t\tul {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: rem(8);\n\t\t\tlist-style: disc;\n\t\t\tlist-style-position: outside;\n\t\t}\n\n\t\th3 {\n\t\t\tfont-size: rem(20);\n\t\t\tfont-style: italic;\n\t\t\tfont-weight: 400;\n\t\t}\n\n\t\tspan {\n\t\t\tfont-size: rem(40);\n\t\t\tfont-weight: 300;\n\t\t\tfont-style: normal;\n\t\t}\n\n\t\tp {\n\t\t\tfont-size: rem(20);\n\t\t\tfont-weight: 700;\n\t\t\tmargin-bottom: rem(24);\n\t\t\tmargin-top: rem(8);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#about-content {\n\tdisplay: flex;\n\tpadding: rem(120) 0;\n\tjustify-content: space-between;\n\talign-items: center;\n\n\tp {\n\t\tpadding: 0 rem(120);\n\t}\n\n\timg {\n\t\twidth: auto;\n\t\tmax-height: rem(555);\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n.project-page {\n\tdisplay: flex;\n\n\taside {\n\t\tpadding: rem(120) 0;\n\t\tborder-right: 1px solid $clr-gray-dark;\n\t\twidth: 25%;\n\n\t\tul {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tposition: sticky;\n\t\t\ttop: rem(80);\n\t\t\tgap: rem(24);\n\t\t}\n\t}\n\n\tsection {\n\t\tpadding: rem(120) 0;\n\t\twidth: 75%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(120);\n\t\tpadding-left: rem(80);\n\n\t\t.project-section {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: rem(48);\n\t\t\talign-items: center;\n\t\t}\n\n\t\th2 {\n\t\t\tfont-size: rem(40);\n\t\t\tfont-weight: 300;\n\t\t}\n\n\t\tp {\n\t\t\tmax-width: rem(795);\n\t\t}\n\n\t\timg {\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t\tmax-height: rem(450);\n\t\t\tmax-width: rem(800);\n\t\t}\n\t}\n\n\t// this is for the portfolio project\n\t#version-one {\n\t\timg {\n\t\t\tmax-height: rem(700);\n\t\t}\n\t}\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNDFCQUE0MUIsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sVUFBVSxNQUFNLFFBQVEsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sUUFBUSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxZQUFZLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sT0FBTyxVQUFVLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sT0FBTyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFFBQVEsTUFBTSxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFB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QUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FpQztBQUNKOztBQUU3Qiw4Q0FBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3M/MzIxZiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9qcy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvY29tcG9uZW50cy90b1RvcEJ0bi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvaW5pdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBmb250LXNpemU6IDEwMCU7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmY7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDQlKTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuaW1nLFxucGljdHVyZSxcbnN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMSxcbmgyLFxuaDMge1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5cbmgxLFxuaDIge1xuICBmb250LXNpemU6IDMuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxLjM3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYSxcbmE6dmlzaXRlZCxcbmE6YWN0aXZlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5OS4zNzVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5oZWFkZXIge1xuICBwYWRkaW5nOiAzcmVtIDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XG59XG5cbiNoZWFkZXItbGF5b3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogM3JlbTtcbn1cbnVsIGEge1xuICBjb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xufVxudWwgYTpob3ZlciB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xufVxudWwgLmFjdGl2ZS1uYXYge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbn1cblxuI21vYmlsZS1uYXYtY3RuIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI21vYmlsZS1uYXYtY3RuIC5tb2JpbGUtbGluZSB7XG4gIGhlaWdodDogMC4yNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5LjM3NXJlbSkge1xuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDNyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gICNkZXNrdG9wLW5hdi1jdG4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI21vYmlsZS1uYXYtY3RuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gIGhlYWRlciB7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICB9XG4gIGhlYWRlciBpbWcge1xuICAgIG1heC13aWR0aDogMTVyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIwcmVtKSB7XG4gIGhlYWRlciBpbWcge1xuICAgIG1heC13aWR0aDogMTByZW07XG4gIH1cbn1cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMi41cmVtIDA7XG4gIGdhcDogMTIuNXJlbTtcbiAgbWF4LXdpZHRoOiA3NS4zNzVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubWFpbiAjd2VsY29tZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNy41cmVtO1xufVxubWFpbiAjd2VsY29tZSBkaXYge1xuICB3aWR0aDogNjAlO1xufVxubWFpbiAjd2VsY29tZSBwIHtcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcbn1cbm1haW4gI3dlbGNvbWUgaW1nIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWF4LXdpZHRoOiAxOC43NXJlbTtcbn1cbm1haW4gI2hlYWRlci1sb2NhdGlvbiB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5tYWluICNwcm9qZWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogNDkuNjg3NXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGdhcDogNy41cmVtO1xufVxubWFpbiAjcHJvamVjdHMgI3Byb2plY3RzLW9uZS1saW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbm1haW4gLnByb2plY3QtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyLjVyZW07XG59XG5tYWluIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubWFpbiAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyBwIHtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBmb250LXdlaWdodDogMTAwO1xufVxubWFpbiAjYWJvdXQtbWUsXG5tYWluICNza2lsbHMtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cmVtO1xufVxubWFpbiAjYWJvdXQtbWUgaDIsXG5tYWluICNza2lsbHMtY3RuIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxubWFpbiAjYWJvdXQtbWUge1xuICBtYXgtd2lkdGg6IDQxLjA2MjVyZW07XG59XG5tYWluICNza2lsbHMtY3RuIHtcbiAgbWF4LXdpZHRoOiA2MS45Mzc1cmVtO1xuICB3aWR0aDogMTAwJTtcbn1cbm1haW4gI3NraWxscy1jdG4gI3NraWxscy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA0cmVtIDA7XG59XG5tYWluICNza2lsbHMtY3RuIC5za2lsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS41cmVtO1xuICB3aWR0aDogMjAlO1xufVxubWFpbiAjc2tpbGxzLWN0biAuc2tpbGwgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5tYWluICNza2lsbHMtY3RuIC5za2lsbC1pbWctY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNi41cmVtO1xuICB3aWR0aDogNi41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMCwgMCUsIDY1JSk7XG4gIGJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG59XG5tYWluICNza2lsbHMtY3RuIC5za2lsbC1pbWctY3RuIGltZyB7XG4gIG1heC1oZWlnaHQ6IDIuNXJlbTtcbiAgbWF4LXdpZHRoOiAyLjVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XG4gIG1haW4ge1xuICAgIHBhZGRpbmc6IDcuNXJlbSAzcmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xuICBib2R5IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgbWFpbiAjd2VsY29tZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIuNXJlbTtcbiAgfVxuICBtYWluICN3ZWxjb21lIGRpdixcbiAgbWFpbiAjd2VsY29tZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIG1haW4gaDEsXG4gIG1haW4gaDIge1xuICAgIGZvbnQtc2l6ZTogMy4xMjVyZW07XG4gIH1cbiAgbWFpbiAucHJvamVjdC1jdG4ge1xuICAgIGdhcDogMnJlbTtcbiAgfVxuICBtYWluIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHAge1xuICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgfVxuICBtYWluICNza2lsbHMtY3RuIC5za2lsbCB7XG4gICAgd2lkdGg6IDMzJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICBtYWluIHtcbiAgICBnYXA6IDVyZW07XG4gICAgcGFkZGluZzogNXJlbSAxLjVyZW07XG4gIH1cbiAgbWFpbiBoMSxcbiAgbWFpbiBoMiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIG1haW4gI3Byb2plY3RzIHtcbiAgICBnYXA6IDNyZW07XG4gIH1cbiAgbWFpbiAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyBwIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICBtYWluICNza2lsbHMtY3RuIC5za2lsbCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICBtYWluICNhYm91dC1tZSxcbiAgbWFpbiAjc2tpbGxzLWN0biB7XG4gICAgZ2FwOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIwcmVtKSB7XG4gIG1haW4gI3NraWxscy1jdG4gLnNraWxsIGgzIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICB9XG59XG4jYnRuLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDMuMTI1cmVtO1xuICBib3R0b206IDMuMTI1cmVtO1xufVxuXG4jYnRuLXRvcDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgcGFkZGluZzogMC43NXJlbSAzLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNSwgNzUlLCA1OCUpO1xuICBib3JkZXI6IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1LCA3MSUsIDM5JSk7XG59XG5cbi5idG4tcmVzZXQge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogM3JlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBoZWlnaHQ6IDE5LjVyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XG59XG5mb290ZXIgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAzcmVtO1xufVxuZm9vdGVyIGEge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcbn1cbmZvb3RlciBhOmhvdmVyIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcbn1cblxuLm1haW4tYmFubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbi1iYW5uZXIgaDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm1haW4tYmFubmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jcHJvamVjdC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogNy41cmVtIDA7XG4gIGdhcDogMTVyZW07XG59XG4jcHJvamVjdC1saXN0IC5wcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEuODc1cmVtO1xufVxuI3Byb2plY3QtbGlzdCAucHJvamVjdC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogM3JlbTtcbiAgd2lkdGg6IDUwJTtcbn1cbiNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCBwIHtcbiAgd2lkdGg6IDMyLjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuI2V4cGVyaWVuY2UtcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIHtcbiAgcGFkZGluZzogNy41cmVtIDA7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzMlKTtcbiAgd2lkdGg6IDI1JTtcbn1cbiNleHBlcmllbmNlLXBhZ2UgYXNpZGUgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDVyZW07XG4gIGdhcDogMS41cmVtO1xufVxuI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSBoNCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4jZXhwZXJpZW5jZS1wYWdlIHNlY3Rpb24ge1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAgd2lkdGg6IDc1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA3LjVyZW07XG59XG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQge1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmctbGVmdDogNXJlbTtcbn1cbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuICBsaXN0LXN0eWxlOiBkaXNjO1xuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBvdXRzaWRlO1xufVxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IGgzIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbiNhYm91dC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogNy41cmVtIDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNhYm91dC1jb250ZW50IHAge1xuICBwYWRkaW5nOiAwIDcuNXJlbTtcbn1cbiNhYm91dC1jb250ZW50IGltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAzNC42ODc1cmVtO1xufVxuXG4ucHJvamVjdC1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wcm9qZWN0LXBhZ2UgYXNpZGUge1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xuICB3aWR0aDogMjUlO1xufVxuLnByb2plY3QtcGFnZSBhc2lkZSB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogNXJlbTtcbiAgZ2FwOiAxLjVyZW07XG59XG4ucHJvamVjdC1wYWdlIHNlY3Rpb24ge1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAgd2lkdGg6IDc1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA3LjVyZW07XG4gIHBhZGRpbmctbGVmdDogNXJlbTtcbn1cbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiAucHJvamVjdC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2plY3QtcGFnZSBzZWN0aW9uIGgyIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gcCB7XG4gIG1heC13aWR0aDogNDkuNjg3NXJlbTtcbn1cbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAyOC4xMjVyZW07XG4gIG1heC13aWR0aDogNTByZW07XG59XG4ucHJvamVjdC1wYWdlICN2ZXJzaW9uLW9uZSBpbWcge1xuICBtYXgtaGVpZ2h0OiA0My43NXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX2dlbmVyYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL190eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX2NvbnRhaW5lci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fbWFpbkhvbWUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fdG9Ub3BCdG4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fbWFpbkJhbm5lci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19wb3J0Zm9saW9QYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2V4cGVyaWVuY2VQYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2Fib3V0UGFnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19wcm9qZWN0UGFnZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNDLGVBQUE7QUNIRDs7QURPQTtFQUNDLCtCRVZjO0VGV2QsbUJBQUE7RUFDQSx1QkdOVztFSE9YLGdDR1pRO0VIYVIsZ0JBQUE7QUNKRDs7QUdWQTs7O0VBR0Msc0JBQUE7QUhhRDs7QUdWQTtFQUNDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBSGFEOztBR1ZBOzs7RUFHQyxjQUFBO0FIYUQ7O0FJekJBOzs7RUFHQyxTQUFBO0VBQ0EsZ0JBQUE7QUo0QkQ7O0FJekJBOztFQUVDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBSjRCRDs7QUl6QkE7RUFDQyxtQkFBQTtFQUNBLGdCQUFBO0FKNEJEOztBSXpCQTs7O0VBR0MscUJBQUE7QUo0QkQ7O0FLbkRBO0VBQ0Msb0JBQUE7RUFDQSxjQUFBO0FMc0REOztBTXZEQTtFQUNDLGVBQUE7RUFDQSx3Q0FBQTtBTjBERDs7QU12REE7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBTjBERDs7QU12REE7RUFDQyxnQkFBQTtFQUNBLGFBQUE7RUFDQSxT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YW5YRTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBYnFYSDtBYWxYRTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBYm9YSDtBYWpYRTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FibVhIOztBYzVhQTtFQUNDLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QWQrYUQ7QWM3YUM7RUFDQyxpQkFBQTtBZCthRjtBYzVhQztFQUNDLFdBQUE7RUFDQSxzQkFBQTtBZDhhRjs7QWUxYkE7RUFDQyxhQUFBO0FmNmJEO0FlM2JDO0VBQ0MsaUJBQUE7RUFDQSx1Q0FBQTtFQUNBLFVBQUE7QWY2YkY7QWUzYkU7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FmNmJIO0FlemJDO0VBQ0MsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FmMmJGO0FlemJFO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FmMmJIO0FleGJFO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtBZjBiSDtBZXZiRTtFQUNDLHFCQUFBO0FmeWJIO0FldGJFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0Fmd2JIO0FlbGJFO0VBQ0Msb0JBQUE7QWZvYkhcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCJjb2xvcnNcXFwiIGFzICo7XFxuQHVzZSBcXFwiZm9udHNcXFwiIGFzICo7XFxuXFxuaHRtbCB7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdC8vc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcblxcdGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcblxcdGZvbnQtc2l6ZTogcmVtKDE4KTtcXG5cXHRjb2xvcjogJGNsci13aGl0ZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWJnO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblwiLFwiaHRtbCB7XFxuICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyZjtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNCUpO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyB7XFxuICBtYXJnaW46IDA7XFxuICBsaW5lLWhlaWdodDogMS4xO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBmb250LXNpemU6IDMuNzVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAxLjM3NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkLFxcbmE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDk5LjM3NXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogM3JlbSAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzMlKTtcXG59XFxuXFxuI2hlYWRlci1sYXlvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG51bCBhIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xcbn1cXG51bCBhOmhvdmVyIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbn1cXG51bCAuYWN0aXZlLW5hdiB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG59XFxuXFxuI21vYmlsZS1uYXYtY3RuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jbW9iaWxlLW5hdi1jdG4gLm1vYmlsZS1saW5lIHtcXG4gIGhlaWdodDogMC4yNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5LjM3NXJlbSkge1xcbiAgaGVhZGVyIHtcXG4gICAgcGFkZGluZzogM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcXG4gICNkZXNrdG9wLW5hdi1jdG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgI21vYmlsZS1uYXYtY3RuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgfVxcbiAgaGVhZGVyIGltZyB7XFxuICAgIG1heC13aWR0aDogMTVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIwcmVtKSB7XFxuICBoZWFkZXIgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMHJlbTtcXG4gIH1cXG59XFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEyLjVyZW0gMDtcXG4gIGdhcDogMTIuNXJlbTtcXG4gIG1heC13aWR0aDogNzUuMzc1cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluICN3ZWxjb21lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA3LjVyZW07XFxufVxcbm1haW4gI3dlbGNvbWUgZGl2IHtcXG4gIHdpZHRoOiA2MCU7XFxufVxcbm1haW4gI3dlbGNvbWUgcCB7XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbn1cXG5tYWluICN3ZWxjb21lIGltZyB7XFxuICB3aWR0aDogNDAlO1xcbiAgbWF4LXdpZHRoOiAxOC43NXJlbTtcXG59XFxubWFpbiAjaGVhZGVyLWxvY2F0aW9uIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5tYWluICNwcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogNDkuNjg3NXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiA3LjVyZW07XFxufVxcbm1haW4gI3Byb2plY3RzICNwcm9qZWN0cy1vbmUtbGluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5tYWluIC5wcm9qZWN0LWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMi41cmVtO1xcbn1cXG5tYWluIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHAge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxubWFpbiAjYWJvdXQtbWUsXFxubWFpbiAjc2tpbGxzLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXJlbTtcXG59XFxubWFpbiAjYWJvdXQtbWUgaDIsXFxubWFpbiAjc2tpbGxzLWN0biBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbm1haW4gI2Fib3V0LW1lIHtcXG4gIG1heC13aWR0aDogNDEuMDYyNXJlbTtcXG59XFxubWFpbiAjc2tpbGxzLWN0biB7XFxuICBtYXgtd2lkdGg6IDYxLjkzNzVyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxubWFpbiAjc2tpbGxzLWN0biAjc2tpbGxzLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA0cmVtIDA7XFxufVxcbm1haW4gI3NraWxscy1jdG4gLnNraWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS41cmVtO1xcbiAgd2lkdGg6IDIwJTtcXG59XFxubWFpbiAjc2tpbGxzLWN0biAuc2tpbGwgaDMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5tYWluICNza2lsbHMtY3RuIC5za2lsbC1pbWctY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDYuNXJlbTtcXG4gIHdpZHRoOiA2LjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMCwgMCUsIDY1JSk7XFxuICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xcbn1cXG5tYWluICNza2lsbHMtY3RuIC5za2lsbC1pbWctY3RuIGltZyB7XFxuICBtYXgtaGVpZ2h0OiAyLjVyZW07XFxuICBtYXgtd2lkdGg6IDIuNXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcXG4gIG1haW4ge1xcbiAgICBwYWRkaW5nOiA3LjVyZW0gM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcXG4gIGJvZHkge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICBtYWluICN3ZWxjb21lIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyLjVyZW07XFxuICB9XFxuICBtYWluICN3ZWxjb21lIGRpdixcXG4gIG1haW4gI3dlbGNvbWUgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICBtYWluIGgxLFxcbiAgbWFpbiBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMy4xMjVyZW07XFxuICB9XFxuICBtYWluIC5wcm9qZWN0LWN0biB7XFxuICAgIGdhcDogMnJlbTtcXG4gIH1cXG4gIG1haW4gLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcgcCB7XFxuICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcXG4gIH1cXG4gIG1haW4gI3NraWxscy1jdG4gLnNraWxsIHtcXG4gICAgd2lkdGg6IDMzJTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgbWFpbiB7XFxuICAgIGdhcDogNXJlbTtcXG4gICAgcGFkZGluZzogNXJlbSAxLjVyZW07XFxuICB9XFxuICBtYWluIGgxLFxcbiAgbWFpbiBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG4gIG1haW4gI3Byb2plY3RzIHtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgfVxcbiAgbWFpbiAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyBwIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICB9XFxuICBtYWluICNza2lsbHMtY3RuIC5za2lsbCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuICBtYWluICNhYm91dC1tZSxcXG4gIG1haW4gI3NraWxscy1jdG4ge1xcbiAgICBnYXA6IDIuNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjByZW0pIHtcXG4gIG1haW4gI3NraWxscy1jdG4gLnNraWxsIGgzIHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIH1cXG59XFxuI2J0bi10b3Age1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDMuMTI1cmVtO1xcbiAgYm90dG9tOiAzLjEyNXJlbTtcXG59XFxuXFxuI2J0bi10b3A6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBwYWRkaW5nOiAwLjc1cmVtIDMuNzVyZW07XFxuICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzUsIDc1JSwgNTglKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzUsIDcxJSwgMzklKTtcXG59XFxuXFxuLmJ0bi1yZXNldCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBoZWlnaHQ6IDE5LjVyZW07XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xcbn1cXG5mb290ZXIgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDNyZW07XFxufVxcbmZvb3RlciBhIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcXG59XFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcXG59XFxuXFxuLm1haW4tYmFubmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1haW4tYmFubmVyIGgxIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5tYWluLWJhbm5lciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNwcm9qZWN0LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiA3LjVyZW0gMDtcXG4gIGdhcDogMTVyZW07XFxufVxcbiNwcm9qZWN0LWxpc3QgLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMS44NzVyZW07XFxufVxcbiNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG4gIHdpZHRoOiA1MCU7XFxufVxcbiNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCBwIHtcXG4gIHdpZHRoOiAzMi41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jZXhwZXJpZW5jZS1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNleHBlcmllbmNlLXBhZ2UgYXNpZGUge1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XFxuICB3aWR0aDogMjUlO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogNXJlbTtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIGg0IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbiNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XFxuICBwYWRkaW5nOiA3LjVyZW0gMDtcXG4gIHdpZHRoOiA3NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNy41cmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiA1cmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIGxpc3Qtc3R5bGU6IGRpc2M7XFxuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBvdXRzaWRlO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgaDMge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHNwYW4ge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgcCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4jYWJvdXQtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jYWJvdXQtY29udGVudCBwIHtcXG4gIHBhZGRpbmc6IDAgNy41cmVtO1xcbn1cXG4jYWJvdXQtY29udGVudCBpbWcge1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiAzNC42ODc1cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wcm9qZWN0LXBhZ2UgYXNpZGUge1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XFxuICB3aWR0aDogMjUlO1xcbn1cXG4ucHJvamVjdC1wYWdlIGFzaWRlIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogNXJlbTtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG4ucHJvamVjdC1wYWdlIHNlY3Rpb24ge1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICB3aWR0aDogNzUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDcuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogNXJlbTtcXG59XFxuLnByb2plY3QtcGFnZSBzZWN0aW9uIC5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gaDIge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gcCB7XFxuICBtYXgtd2lkdGg6IDQ5LjY4NzVyZW07XFxufVxcbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiAyOC4xMjVyZW07XFxuICBtYXgtd2lkdGg6IDUwcmVtO1xcbn1cXG4ucHJvamVjdC1wYWdlICN2ZXJzaW9uLW9uZSBpbWcge1xcbiAgbWF4LWhlaWdodDogNDMuNzVyZW07XFxufVwiLFwiJGZvbnQtcHJpbWFyeTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJmO1xcblwiLFwiLy8gUHJpbWFyeSBDb2xvcnNcXG4kY2xyLWJnOiBoc2woMCwgMCUsIDQlKTtcXG4kY2xyLWJ0bjogaHNsKDIzNSwgNzUlLCA1OCUpO1xcbiRjbHItYnRuLWhvdmVyOiBoc2woMjM1LCA3MSUsIDM5JSk7XFxuXFxuLy8gTmV1dHJhbCBDb2xvcnNcXG4kY2xyLXdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xcbiRjbHItZ3JheTogaHNsKDAsIDAlLCA2NSUpO1xcbiRjbHItZ3JheS1kYXJrOiBoc2woMCwgMCUsIDMzJSk7XFxuJGNsci1ibGFjazogaHNsKDAsIDAlLCAwJSk7XFxuXCIsXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUsXFxuc3ZnIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcImNvbG9yc1xcXCIgYXMgKjtcXG5cXG5oMSxcXG5oMixcXG5oMyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE7XFxufVxcblxcbmgxLFxcbmgyIHtcXG5cXHRmb250LXNpemU6IHJlbSg2MCk7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRsaW5lLWhlaWdodDogMS4zO1xcbn1cXG5cXG5oMyB7XFxuXFx0Zm9udC1zaXplOiByZW0oMjIpO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkLFxcbmE6YWN0aXZlIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4uY29udGFpbmVyIHtcXG5cXHRtYXgtd2lkdGg6IHJlbSgxNTkwKTtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG59XFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcblxcbmhlYWRlciB7XFxuXFx0cGFkZGluZzogcmVtKDQ4KSAwO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY2xyLWdyYXktZGFyaztcXG59XFxuXFxuI2hlYWRlci1sYXlvdXQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiByZW0oNDgpO1xcblxcblxcdGEge1xcblxcdFxcdGNvbG9yOiAkY2xyLWdyYXk7XFxuXFx0XFx0dHJhbnNpdGlvbjogY29sb3IgMC4xcztcXG5cXHR9XFxuXFxuXFx0YTpob3ZlciB7XFxuXFx0XFx0Y29sb3I6ICRjbHItd2hpdGU7XFxuXFx0fVxcblxcblxcdC5hY3RpdmUtbmF2IHtcXG5cXHRcXHRjb2xvcjogJGNsci13aGl0ZTtcXG5cXHR9XFxufVxcblxcbiNtb2JpbGUtbmF2LWN0biB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHR3aWR0aDogcmVtKDQwKTtcXG5cXHRoZWlnaHQ6IHJlbSg1MCk7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IHJlbSg4KTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXHQubW9iaWxlLWxpbmUge1xcblxcdFxcdGhlaWdodDogcmVtKDQpO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItZ3JheTtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiByZW0oMTApO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDE1OTApKSB7XFxuXFx0aGVhZGVyIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oNDgpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDc2OCkpIHtcXG5cXHQjZGVza3RvcC1uYXYtY3RuIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXG5cXHQjbW9iaWxlLW5hdi1jdG4ge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcblxcdGhlYWRlciB7XFxuXFx0XFx0cGFkZGluZzogcmVtKDI0KTtcXG5cXG5cXHRcXHRpbWcge1xcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDI0MCk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDMyMCkpIHtcXG5cXHRoZWFkZXIge1xcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oMTYwKTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxubWFpbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmc6IHJlbSgyMDApIDA7XFxuXFx0Z2FwOiByZW0oMjAwKTtcXG5cXHRtYXgtd2lkdGg6IHJlbSgxMjA2KTtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdCN3ZWxjb21lIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0Z2FwOiByZW0oMTIwKTtcXG5cXG5cXHRcXHRkaXYge1xcblxcdFxcdFxcdHdpZHRoOiA2MCU7XFxuXFx0XFx0fVxcblxcblxcdFxcdHAge1xcblxcdFxcdFxcdHBhZGRpbmctdG9wOiByZW0oMjQpO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRpbWcge1xcblxcdFxcdFxcdHdpZHRoOiA0MCU7XFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oMzAwKTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdCNoZWFkZXItbG9jYXRpb24ge1xcblxcdFxcdGNvbG9yOiAkY2xyLWdyYXk7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG5cXHR9XFxuXFxuXFx0I3Byb2plY3RzIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0bWF4LXdpZHRoOiByZW0oNzk1KTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRnYXA6IHJlbSgxMjApO1xcblxcblxcdFxcdCNwcm9qZWN0cy1vbmUtbGluZXIge1xcblxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdC5wcm9qZWN0LWN0biB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGdhcDogcmVtKDQwKTtcXG5cXG5cXHRcXHQucHJvamVjdC1oZWFkaW5nIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdFxcdFxcdHAge1xcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDgwKTtcXG5cXHRcXHRcXHRcXHRmb250LXdlaWdodDogMTAwO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdCNhYm91dC1tZSxcXG5cXHQjc2tpbGxzLWN0biB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGdhcDogcmVtKDgwKTtcXG5cXG5cXHRcXHRoMiB7XFxuXFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0I2Fib3V0LW1lIHtcXG5cXHRcXHRtYXgtd2lkdGg6IHJlbSg2NTcpO1xcblxcdH1cXG5cXG5cXHQjc2tpbGxzLWN0biB7XFxuXFx0XFx0bWF4LXdpZHRoOiByZW0oOTkxKTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXG5cXHRcXHQjc2tpbGxzLWxpc3Qge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdFxcdGdhcDogcmVtKDY0KSAwO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQuc2tpbGwge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdFxcdGdhcDogcmVtKDI0KTtcXG5cXHRcXHRcXHR3aWR0aDogMjAlO1xcblxcblxcdFxcdFxcdGgzIHtcXG5cXHRcXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQuc2tpbGwtaW1nLWN0biB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdFxcdGhlaWdodDogcmVtKDEwNCk7XFxuXFx0XFx0XFx0d2lkdGg6IHJlbSgxMDQpO1xcblxcdFxcdFxcdGJvcmRlcjogMXB4IHNvbGlkICRjbHItZ3JheTtcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiByZW0oMTAwKTtcXG5cXG5cXHRcXHRcXHRpbWcge1xcblxcdFxcdFxcdFxcdG1heC1oZWlnaHQ6IHJlbSg0MCk7XFxuXFx0XFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oNDApO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTAyNCkpIHtcXG5cXHRtYWluIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSByZW0oNDgpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDc2OCkpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxuXFx0fVxcblxcblxcdG1haW4ge1xcblxcdFxcdCN3ZWxjb21lIHtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdGdhcDogcmVtKDQwKTtcXG5cXG5cXHRcXHRcXHRkaXYsXFxuXFx0XFx0XFx0aW1nIHtcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdGgxLFxcblxcdFxcdGgyIHtcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSg1MCk7XFxuXFx0XFx0fVxcblxcblxcdFxcdC5wcm9qZWN0LWN0biB7XFxuXFx0XFx0XFx0Z2FwOiByZW0oMzIpO1xcblxcblxcdFxcdFxcdC5wcm9qZWN0LWhlYWRpbmcge1xcblxcdFxcdFxcdFxcdHAge1xcblxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDYwKTtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQjc2tpbGxzLWN0biB7XFxuXFx0XFx0XFx0LnNraWxsIHtcXG5cXHRcXHRcXHRcXHR3aWR0aDogMzMlO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcblxcdG1haW4ge1xcblxcdFxcdGdhcDogcmVtKDgwKTtcXG5cXHRcXHRwYWRkaW5nOiByZW0oODApIHJlbSgyNCk7XFxuXFxuXFx0XFx0aDEsXFxuXFx0XFx0aDIge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDMyKTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0I3Byb2plY3RzIHtcXG5cXHRcXHRcXHRnYXA6IHJlbSg0OCk7XFxuXFx0XFx0fVxcblxcblxcdFxcdC5wcm9qZWN0LWN0biB7XFxuXFx0XFx0XFx0LnByb2plY3QtaGVhZGluZyB7XFxuXFx0XFx0XFx0XFx0cCB7XFxuXFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oNDApO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdCNza2lsbHMtY3RuIHtcXG5cXHRcXHRcXHQuc2tpbGwge1xcblxcdFxcdFxcdFxcdHdpZHRoOiA1MCU7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQjYWJvdXQtbWUsXFxuXFx0XFx0I3NraWxscy1jdG4ge1xcblxcdFxcdFxcdGdhcDogcmVtKDQwKTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMzIwKSkge1xcblxcdG1haW4ge1xcblxcdFxcdCNza2lsbHMtY3RuIHtcXG5cXHRcXHRcXHQuc2tpbGwge1xcblxcdFxcdFxcdFxcdGgzIHtcXG5cXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSgxOCk7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuI2J0bi10b3Age1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRyaWdodDogcmVtKDUwKTtcXG5cXHRib3R0b206IHJlbSg1MCk7XFxufVxcblxcbiNidG4tdG9wOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG5idXR0b24ge1xcblxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdGZvbnQtc2l6ZTogcmVtKDIwKTtcXG5cXHRwYWRkaW5nOiByZW0oMTIpIHJlbSg2MCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogcmVtKDUwKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWJ0bjtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWJ0bi1ob3ZlcjtcXG59XFxuXFxuLmJ0bi1yZXNldCB7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg0MjUpKSB7XFxuXFx0YnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuZm9vdGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IHJlbSg0OCk7XFxuXFx0Zm9udC1zaXplOiByZW0oMzIpO1xcblxcdGhlaWdodDogcmVtKDMxMik7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICRjbHItZ3JheS1kYXJrO1xcblxcblxcdGRpdiB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRnYXA6IHJlbSg0OCk7XFxuXFx0fVxcblxcblxcdGEge1xcblxcdFxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdFxcdHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XFxuXFx0fVxcblxcblxcdGE6aG92ZXIge1xcblxcdFxcdGNvbG9yOiAkY2xyLWdyYXk7XFxuXFx0fVxcbn1cXG5cIixcIi5tYWluLWJhbm5lciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG5cXHRoMSB7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdHRvcDogNTAlO1xcblxcdFxcdGxlZnQ6IDUwJTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHR9XFxuXFxuXFx0aW1nIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jcHJvamVjdC1saXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogcmVtKDEyMCkgMDtcXG5cXHRnYXA6IHJlbSgyNDApO1xcblxcblxcdC5wcm9qZWN0IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRnYXA6IHJlbSgzMCk7XFxuXFx0fVxcblxcblxcdC5wcm9qZWN0LWNvbnRlbnQge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGdhcDogcmVtKDQ4KTtcXG5cXHRcXHR3aWR0aDogNTAlO1xcblxcblxcdFxcdHAge1xcblxcdFxcdFxcdHdpZHRoOiByZW0oNTIwKTtcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNleHBlcmllbmNlLXBhZ2Uge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFxuXFx0YXNpZGUge1xcblxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIDA7XFxuXFx0XFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGNsci1ncmF5LWRhcms7XFxuXFx0XFx0d2lkdGg6IDI1JTtcXG5cXG5cXHRcXHR1bCB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdHBvc2l0aW9uOiBzdGlja3k7XFxuXFx0XFx0XFx0dG9wOiByZW0oODApO1xcblxcdFxcdFxcdGdhcDogcmVtKDI0KTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0aDQge1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHRzZWN0aW9uIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcblxcdFxcdHdpZHRoOiA3NSU7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGdhcDogcmVtKDEyMCk7XFxuXFx0fVxcblxcblxcdC5leHBlcmllbmNlLWNvbnRlbnQge1xcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IHJlbSg4MCk7XFxuXFxuXFx0XFx0dWwge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRnYXA6IHJlbSg4KTtcXG5cXHRcXHRcXHRsaXN0LXN0eWxlOiBkaXNjO1xcblxcdFxcdFxcdGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGU7XFxuXFx0XFx0fVxcblxcblxcdFxcdGgzIHtcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgyMCk7XFxuXFx0XFx0XFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0XFx0fVxcblxcblxcdFxcdHNwYW4ge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDQwKTtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogMzAwO1xcblxcdFxcdFxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0cCB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMjApO1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogcmVtKDI0KTtcXG5cXHRcXHRcXHRtYXJnaW4tdG9wOiByZW0oOCk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNhYm91dC1jb250ZW50IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBhZGRpbmc6IHJlbSgxMjApIDA7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0cCB7XFxuXFx0XFx0cGFkZGluZzogMCByZW0oMTIwKTtcXG5cXHR9XFxuXFxuXFx0aW1nIHtcXG5cXHRcXHR3aWR0aDogYXV0bztcXG5cXHRcXHRtYXgtaGVpZ2h0OiByZW0oNTU1KTtcXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4ucHJvamVjdC1wYWdlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcblxcdGFzaWRlIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcblxcdFxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRjbHItZ3JheS1kYXJrO1xcblxcdFxcdHdpZHRoOiAyNSU7XFxuXFxuXFx0XFx0dWwge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRwb3NpdGlvbjogc3RpY2t5O1xcblxcdFxcdFxcdHRvcDogcmVtKDgwKTtcXG5cXHRcXHRcXHRnYXA6IHJlbSgyNCk7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHRzZWN0aW9uIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcblxcdFxcdHdpZHRoOiA3NSU7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGdhcDogcmVtKDEyMCk7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiByZW0oODApO1xcblxcblxcdFxcdC5wcm9qZWN0LXNlY3Rpb24ge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRnYXA6IHJlbSg0OCk7XFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0aDIge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDQwKTtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogMzAwO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRwIHtcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSg3OTUpO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRpbWcge1xcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdFxcdGhlaWdodDogYXV0bztcXG5cXHRcXHRcXHRtYXgtaGVpZ2h0OiByZW0oNDUwKTtcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSg4MDApO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0Ly8gdGhpcyBpcyBmb3IgdGhlIHBvcnRmb2xpbyBwcm9qZWN0XFxuXFx0I3ZlcnNpb24tb25lIHtcXG5cXHRcXHRpbWcge1xcblxcdFxcdFxcdG1heC1oZWlnaHQ6IHJlbSg3MDApO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgeyB1cGRhdGVIZWFkZXJBY3RpdmVMaW5rLCByZW1vdmVIZWFkZXJTdHlsZXMsIG1vYmlsZU5hdkluaXQgfTtcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtbGlua3NcIik7XG5cbmZ1bmN0aW9uIHVwZGF0ZUhlYWRlckFjdGl2ZUxpbmsoKSB7XG5cdG5hdi5mb3JFYWNoKChsaW5rKSA9PiB7XG5cdFx0bGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0dXBkYXRlSGVhZGVyU3R5bGVzKGxpbmspO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSGVhZGVyU3R5bGVzKGxpbmspIHtcblx0cmVtb3ZlSGVhZGVyU3R5bGVzKCk7XG5cdGFkZEhlYWRlclN0eWxlcyhsaW5rKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGVhZGVyU3R5bGVzKCkge1xuXHRuYXYuZm9yRWFjaCgoY2hpbGQpID0+IHtcblx0XHRjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLW5hdlwiKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZEhlYWRlclN0eWxlcyhsaW5rKSB7XG5cdGxpbmsuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1uYXZcIik7XG59XG5cbmZ1bmN0aW9uIG1vYmlsZU5hdkluaXQoKSB7XG5cdGNvbnNvbGUubG9nKFxuXHRcdFwidGhpcyBpcyB3aGVyZSBJIHdpbGwgYWRkIGxvZ2ljIGZvciBvcGVuaW5nIGFuZCBjbG9zaW5nIHRoZSBuYXYgb24gY2xpY2sgZm9yIG1vYmlsZVwiXG5cdCk7XG59XG4iLCJleHBvcnQgeyBzY3JvbGxUb1RvcCB9O1xuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi10b3BcIik7XG5cbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2Nyb2xsVG9Ub3ApO1xuXG5mdW5jdGlvbiBzY3JvbGxUb1RvcCgpIHtcblx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbn1cbiIsImV4cG9ydCB7IGluaXQgfTtcbmltcG9ydCB7IHVwZGF0ZUhlYWRlckFjdGl2ZUxpbmssIG1vYmlsZU5hdkluaXQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IHsgc2Nyb2xsVG9Ub3AgfSBmcm9tIFwiLi9jb21wb25lbnRzL3RvVG9wQnRuXCI7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG5cdHVwZGF0ZUhlYWRlckFjdGl2ZUxpbmsoKTtcblx0c2Nyb2xsVG9Ub3AoKTtcblx0bW9iaWxlTmF2SW5pdCgpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaW5pdCB9IGZyb20gXCIuL2luaXQuanNcIjtcbmltcG9ydCBcIi4uL3Njc3Mvc3R5bGVzLnNjc3NcIjtcblxuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9