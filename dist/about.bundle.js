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

@media screen and (max-width: 99.375rem) {
  header {
    padding: 3rem 3rem;
  }
}
#home-main-content {
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  gap: 12.5rem;
  max-width: 75.375rem;
  margin: 0 auto;
  align-items: center;
}
#home-main-content #welcome {
  display: flex;
  align-items: center;
  gap: 7.5rem;
}
#home-main-content #welcome p {
  padding-top: 1.5rem;
}
#home-main-content #header-location {
  color: hsl(0, 0%, 65%);
  font-weight: 300;
}
#home-main-content #projects {
  display: flex;
  flex-direction: column;
  width: 49.6875rem;
  gap: 7.5rem;
}
#home-main-content #projects #projects-one-liner {
  text-align: center;
}
#home-main-content .project-ctn {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
#home-main-content .project-ctn .project-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#home-main-content .project-ctn .project-heading p {
  font-size: 5rem;
  font-weight: 100;
}
#home-main-content #about-me,
#home-main-content #skills-ctn {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}
#home-main-content #about-me h2,
#home-main-content #skills-ctn h2 {
  text-align: center;
}
#home-main-content #about-me {
  width: 41.0625rem;
}
#home-main-content #skills-ctn {
  width: 61.9375rem;
}
#home-main-content #skills-ctn #skills-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#home-main-content #skills-ctn .skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 20%;
}
#home-main-content #skills-ctn .skill h3 {
  text-align: center;
}
#home-main-content #skills-ctn .skill-gap {
  margin-bottom: 3rem;
}
#home-main-content #skills-ctn .skill-img-ctn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6.5rem;
  width: 6.5rem;
  border: 1px solid hsl(0, 0%, 65%);
  border-radius: 6.25rem;
}
#home-main-content #skills-ctn .skill-img-ctn img {
  max-height: 2.5rem;
  max-width: 2.5rem;
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
}`, "",{"version":3,"sources":["webpack://./src/scss/globals/_general.scss","webpack://./src/scss/styles.scss","webpack://./src/scss/globals/_fonts.scss","webpack://./src/scss/globals/_colors.scss","webpack://./src/scss/globals/_reset.scss","webpack://./src/scss/globals/_typography.scss","webpack://./src/scss/globals/_container.scss","webpack://./src/scss/components/_header.scss","webpack://./src/scss/components/_mainHome.scss","webpack://./src/scss/components/_toTopBtn.scss","webpack://./src/scss/components/_buttons.scss","webpack://./src/scss/components/_footer.scss","webpack://./src/scss/components/_mainBanner.scss","webpack://./src/scss/components/_portfolioPage.scss","webpack://./src/scss/components/_experiencePage.scss","webpack://./src/scss/components/_aboutPage.scss","webpack://./src/scss/components/_projectPages.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"../utilities/\" as *;\n@use \"colors\" as *;\n@use \"fonts\" as *;\n\nhtml {\n\tfont-size: 100%;\n\t//scroll-behavior: smooth;\n}\n\nbody {\n\tfont-family: $font-primary;\n\tfont-size: rem(18);\n\tcolor: $clr-white;\n\tbackground-color: $clr-bg;\n\tline-height: 1.5;\n}\n","html {\n  font-size: 100%;\n}\n\nbody {\n  font-family: \"Inter\", sans-serf;\n  font-size: 1.125rem;\n  color: hsl(0, 0%, 100%);\n  background-color: hsl(0, 0%, 4%);\n  line-height: 1.5;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n  line-height: 1.1;\n}\n\nh1,\nh2 {\n  font-size: 3.75rem;\n  font-weight: 700;\n  line-height: 1.3;\n}\n\nh3 {\n  font-size: 1.375rem;\n  font-weight: 700;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\n.container {\n  max-width: 99.375rem;\n  margin: 0 auto;\n}\n\nheader {\n  padding: 3rem 0;\n  border-bottom: 1px solid hsl(0, 0%, 33%);\n}\n\n#header-layout {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nul {\n  list-style: none;\n  display: flex;\n  gap: 3rem;\n}\nul a {\n  color: hsl(0, 0%, 65%);\n  transition: color 0.1s;\n}\nul a:hover {\n  color: hsl(0, 0%, 100%);\n}\nul .active-nav {\n  color: hsl(0, 0%, 100%);\n}\n\n@media screen and (max-width: 99.375rem) {\n  header {\n    padding: 3rem 3rem;\n  }\n}\n#home-main-content {\n  display: flex;\n  flex-direction: column;\n  padding: 12.5rem 0;\n  gap: 12.5rem;\n  max-width: 75.375rem;\n  margin: 0 auto;\n  align-items: center;\n}\n#home-main-content #welcome {\n  display: flex;\n  align-items: center;\n  gap: 7.5rem;\n}\n#home-main-content #welcome p {\n  padding-top: 1.5rem;\n}\n#home-main-content #header-location {\n  color: hsl(0, 0%, 65%);\n  font-weight: 300;\n}\n#home-main-content #projects {\n  display: flex;\n  flex-direction: column;\n  width: 49.6875rem;\n  gap: 7.5rem;\n}\n#home-main-content #projects #projects-one-liner {\n  text-align: center;\n}\n#home-main-content .project-ctn {\n  display: flex;\n  flex-direction: column;\n  gap: 2.5rem;\n}\n#home-main-content .project-ctn .project-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#home-main-content .project-ctn .project-heading p {\n  font-size: 5rem;\n  font-weight: 100;\n}\n#home-main-content #about-me,\n#home-main-content #skills-ctn {\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n}\n#home-main-content #about-me h2,\n#home-main-content #skills-ctn h2 {\n  text-align: center;\n}\n#home-main-content #about-me {\n  width: 41.0625rem;\n}\n#home-main-content #skills-ctn {\n  width: 61.9375rem;\n}\n#home-main-content #skills-ctn #skills-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n#home-main-content #skills-ctn .skill {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n  width: 20%;\n}\n#home-main-content #skills-ctn .skill h3 {\n  text-align: center;\n}\n#home-main-content #skills-ctn .skill-gap {\n  margin-bottom: 3rem;\n}\n#home-main-content #skills-ctn .skill-img-ctn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 6.5rem;\n  width: 6.5rem;\n  border: 1px solid hsl(0, 0%, 65%);\n  border-radius: 6.25rem;\n}\n#home-main-content #skills-ctn .skill-img-ctn img {\n  max-height: 2.5rem;\n  max-width: 2.5rem;\n}\n\n#btn-top {\n  position: fixed;\n  right: 3.125rem;\n  bottom: 3.125rem;\n}\n\n#btn-top:hover {\n  cursor: pointer;\n}\n\nbutton {\n  color: hsl(0, 0%, 100%);\n  font-size: 1.25rem;\n  padding: 0.75rem 3.75rem;\n  border-radius: 3.125rem;\n  background-color: hsl(235, 75%, 58%);\n  border: none;\n  transition: background-color 0.1s;\n}\n\nbutton:hover {\n  cursor: pointer;\n  background-color: hsl(235, 71%, 39%);\n}\n\n.btn-reset {\n  margin: 0 auto;\n}\n\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n  font-size: 2rem;\n  height: 19.5rem;\n  border-top: 1px solid hsl(0, 0%, 33%);\n}\nfooter div {\n  display: flex;\n  gap: 3rem;\n}\nfooter a {\n  color: hsl(0, 0%, 100%);\n  transition: color 0.1s;\n}\nfooter a:hover {\n  color: hsl(0, 0%, 65%);\n}\n\n.main-banner {\n  position: relative;\n  text-align: center;\n}\n.main-banner h1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main-banner img {\n  width: 100%;\n}\n\n#project-list {\n  display: flex;\n  flex-direction: column;\n  padding: 7.5rem 0;\n  gap: 15rem;\n}\n#project-list .project {\n  display: flex;\n  justify-content: space-between;\n  gap: 1.875rem;\n}\n#project-list .project-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3rem;\n  width: 50%;\n}\n#project-list .project-content p {\n  width: 32.5rem;\n  font-size: 1rem;\n}\n\n#experience-page {\n  display: flex;\n}\n#experience-page aside {\n  padding: 7.5rem 0;\n  border-right: 1px solid hsl(0, 0%, 33%);\n  width: 25%;\n}\n#experience-page aside ul {\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 5rem;\n  gap: 1.5rem;\n}\n#experience-page aside h4 {\n  font-weight: 700;\n}\n#experience-page section {\n  padding: 7.5rem 0;\n  width: 75%;\n  display: flex;\n  flex-direction: column;\n  gap: 7.5rem;\n}\n#experience-page .experience-content {\n  font-size: 1rem;\n  padding-left: 5rem;\n}\n#experience-page .experience-content ul {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  list-style: disc;\n  list-style-position: outside;\n}\n#experience-page .experience-content h3 {\n  font-size: 1.25rem;\n  font-style: italic;\n  font-weight: 400;\n}\n#experience-page .experience-content span {\n  font-size: 2.5rem;\n  font-weight: 300;\n  font-style: normal;\n}\n#experience-page .experience-content p {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin-bottom: 1.5rem;\n  margin-top: 0.5rem;\n}\n\n#about-content {\n  display: flex;\n  padding: 7.5rem 0;\n  justify-content: space-between;\n  align-items: center;\n}\n#about-content p {\n  padding: 0 7.5rem;\n}\n#about-content img {\n  width: auto;\n  max-height: 34.6875rem;\n}\n\n.project-page {\n  display: flex;\n}\n.project-page aside {\n  padding: 7.5rem 0;\n  border-right: 1px solid hsl(0, 0%, 33%);\n  width: 25%;\n}\n.project-page aside ul {\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 5rem;\n  gap: 1.5rem;\n}\n.project-page section {\n  padding: 7.5rem 0;\n  width: 75%;\n  display: flex;\n  flex-direction: column;\n  gap: 7.5rem;\n  padding-left: 5rem;\n}\n.project-page section .project-section {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n  align-items: center;\n}\n.project-page section h2 {\n  font-size: 2.5rem;\n  font-weight: 300;\n}\n.project-page section p {\n  max-width: 49.6875rem;\n}\n.project-page section img {\n  width: 100%;\n  height: auto;\n  max-height: 28.125rem;\n  max-width: 50rem;\n}\n.project-page #version-one img {\n  max-height: 43.75rem;\n}","$font-primary: \"Inter\", sans-serf;\n","// Primary Colors\n$clr-bg: hsl(0, 0%, 4%);\n$clr-btn: hsl(235, 75%, 58%);\n$clr-btn-hover: hsl(235, 71%, 39%);\n\n// Neutral Colors\n$clr-white: hsl(0, 0%, 100%);\n$clr-gray: hsl(0, 0%, 65%);\n$clr-gray-dark: hsl(0, 0%, 33%);\n$clr-black: hsl(0, 0%, 0%);\n","*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont: inherit;\n}\n\nimg,\npicture,\nsvg {\n\tdisplay: block;\n}\n","@use \"../utilities/\" as *;\n@use \"colors\" as *;\n\nh1,\nh2,\nh3 {\n\tmargin: 0;\n\tline-height: 1.1;\n}\n\nh1,\nh2 {\n\tfont-size: rem(60);\n\tfont-weight: 700;\n\tline-height: 1.3;\n}\n\nh3 {\n\tfont-size: rem(22);\n\tfont-weight: 700;\n}\n\na,\na:visited,\na:active {\n\ttext-decoration: none;\n}\n","@use \"../utilities/\" as *;\n\n.container {\n\tmax-width: rem(1590);\n\tmargin: 0 auto;\n}\n","@use \"../utilities/\" as *;\n@use \"../globals/\" as *;\n\nheader {\n\tpadding: rem(48) 0;\n\tborder-bottom: 1px solid $clr-gray-dark;\n}\n\n#header-layout {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\nul {\n\tlist-style: none;\n\tdisplay: flex;\n\tgap: rem(48);\n\n\ta {\n\t\tcolor: $clr-gray;\n\t\ttransition: color 0.1s;\n\t}\n\n\ta:hover {\n\t\tcolor: $clr-white;\n\t}\n\n\t.active-nav {\n\t\tcolor: $clr-white;\n\t}\n}\n\n@media screen and (max-width: rem(1590)) {\n\theader {\n\t\tpadding: rem(48) rem(48);\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#home-main-content {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: rem(200) 0;\n\tgap: rem(200);\n\tmax-width: rem(1206);\n\tmargin: 0 auto;\n\talign-items: center;\n\n\t#welcome {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: rem(120);\n\n\t\tp {\n\t\t\tpadding-top: rem(24);\n\t\t}\n\t}\n\n\t#header-location {\n\t\tcolor: $clr-gray;\n\t\tfont-weight: 300;\n\t}\n\n\t#projects {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\twidth: rem(795);\n\t\tgap: rem(120);\n\n\t\t#projects-one-liner {\n\t\t\ttext-align: center;\n\t\t}\n\t}\n\n\t.project-ctn {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(40);\n\n\t\t.project-heading {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\talign-items: center;\n\n\t\t\tp {\n\t\t\t\tfont-size: rem(80);\n\t\t\t\tfont-weight: 100;\n\t\t\t}\n\t\t}\n\t}\n\n\t#about-me,\n\t#skills-ctn {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(80);\n\n\t\th2 {\n\t\t\ttext-align: center;\n\t\t}\n\t}\n\n\t#about-me {\n\t\twidth: rem(657);\n\t}\n\n\t#skills-ctn {\n\t\twidth: rem(991);\n\n\t\t#skills-list {\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tjustify-content: center;\n\t\t}\n\n\t\t.skill {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-items: center;\n\t\t\tgap: rem(24);\n\t\t\twidth: 20%;\n\n\t\t\th3 {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t}\n\n\t\t.skill-gap {\n\t\t\tmargin-bottom: rem(48);\n\t\t}\n\n\t\t.skill-img-ctn {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\theight: rem(104);\n\t\t\twidth: rem(104);\n\t\t\tborder: 1px solid $clr-gray;\n\t\t\tborder-radius: rem(100);\n\n\t\t\timg {\n\t\t\t\tmax-height: rem(40);\n\t\t\t\tmax-width: rem(40);\n\t\t\t}\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#btn-top {\n\tposition: fixed;\n\tright: rem(50);\n\tbottom: rem(50);\n}\n\n#btn-top:hover {\n\tcursor: pointer;\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\nbutton {\n\tcolor: $clr-white;\n\tfont-size: rem(20);\n\tpadding: rem(12) rem(60);\n\tborder-radius: rem(50);\n\tbackground-color: $clr-btn;\n\tborder: none;\n\ttransition: background-color 0.1s;\n}\n\nbutton:hover {\n\tcursor: pointer;\n\tbackground-color: $clr-btn-hover;\n}\n\n.btn-reset {\n\tmargin: 0 auto;\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\nfooter {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: rem(48);\n\tfont-size: rem(32);\n\theight: rem(312);\n\tborder-top: 1px solid $clr-gray-dark;\n\n\tdiv {\n\t\tdisplay: flex;\n\t\tgap: rem(48);\n\t}\n\n\ta {\n\t\tcolor: $clr-white;\n\t\ttransition: color 0.1s;\n\t}\n\n\ta:hover {\n\t\tcolor: $clr-gray;\n\t}\n}\n",".main-banner {\n\tposition: relative;\n\ttext-align: center;\n\n\th1 {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t}\n\n\timg {\n\t\twidth: 100%;\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#project-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: rem(120) 0;\n\tgap: rem(240);\n\n\t.project {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tgap: rem(30);\n\t}\n\n\t.project-content {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tgap: rem(48);\n\t\twidth: 50%;\n\n\t\tp {\n\t\t\twidth: rem(520);\n\t\t\tfont-size: rem(16);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#experience-page {\n\tdisplay: flex;\n\n\taside {\n\t\tpadding: rem(120) 0;\n\t\tborder-right: 1px solid $clr-gray-dark;\n\t\twidth: 25%;\n\n\t\tul {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tposition: sticky;\n\t\t\ttop: rem(80);\n\t\t\tgap: rem(24);\n\t\t}\n\n\t\th4 {\n\t\t\tfont-weight: 700;\n\t\t}\n\t}\n\n\tsection {\n\t\tpadding: rem(120) 0;\n\t\twidth: 75%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(120);\n\t}\n\n\t.experience-content {\n\t\tfont-size: rem(16);\n\t\tpadding-left: rem(80);\n\n\t\tul {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: rem(8);\n\t\t\tlist-style: disc;\n\t\t\tlist-style-position: outside;\n\t\t}\n\n\t\th3 {\n\t\t\tfont-size: rem(20);\n\t\t\tfont-style: italic;\n\t\t\tfont-weight: 400;\n\t\t}\n\n\t\tspan {\n\t\t\tfont-size: rem(40);\n\t\t\tfont-weight: 300;\n\t\t\tfont-style: normal;\n\t\t}\n\n\t\tp {\n\t\t\tfont-size: rem(20);\n\t\t\tfont-weight: 700;\n\t\t\tmargin-bottom: rem(24);\n\t\t\tmargin-top: rem(8);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#about-content {\n\tdisplay: flex;\n\tpadding: rem(120) 0;\n\tjustify-content: space-between;\n\talign-items: center;\n\n\tp {\n\t\tpadding: 0 rem(120);\n\t}\n\n\timg {\n\t\twidth: auto;\n\t\tmax-height: rem(555);\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n.project-page {\n\tdisplay: flex;\n\n\taside {\n\t\tpadding: rem(120) 0;\n\t\tborder-right: 1px solid $clr-gray-dark;\n\t\twidth: 25%;\n\n\t\tul {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tposition: sticky;\n\t\t\ttop: rem(80);\n\t\t\tgap: rem(24);\n\t\t}\n\t}\n\n\tsection {\n\t\tpadding: rem(120) 0;\n\t\twidth: 75%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(120);\n\t\tpadding-left: rem(80);\n\n\t\t.project-section {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: rem(48);\n\t\t\talign-items: center;\n\t\t}\n\n\t\th2 {\n\t\t\tfont-size: rem(40);\n\t\t\tfont-weight: 300;\n\t\t}\n\n\t\tp {\n\t\t\tmax-width: rem(795);\n\t\t}\n\n\t\timg {\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t\tmax-height: rem(450);\n\t\t\tmax-width: rem(800);\n\t\t}\n\t}\n\n\t// this is for the portfolio project\n\t#version-one {\n\t\timg {\n\t\t\tmax-height: rem(700);\n\t\t}\n\t}\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNDFCQUE0MUIsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sVUFBVSxNQUFNLFFBQVEsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sUUFBUSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE9BQU8sVUFBVSxXQUFXLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxRQUFRLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFX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QUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QnVCOztBQUV2Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUZ0I7QUFDNkM7QUFDVDs7QUFFcEQ7QUFDQSxDQUFDLDBFQUFzQjtBQUN2QixDQUFDLGlFQUFXO0FBQ1o7Ozs7Ozs7VUNQQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FpQztBQUNKOztBQUU3Qiw4Q0FBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3M/MzIxZiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9qcy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvY29tcG9uZW50cy90b1RvcEJ0bi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvaW5pdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvYWJvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBmb250LXNpemU6IDEwMCU7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmY7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDQlKTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuaW1nLFxucGljdHVyZSxcbnN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMSxcbmgyLFxuaDMge1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5cbmgxLFxuaDIge1xuICBmb250LXNpemU6IDMuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxLjM3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYSxcbmE6dmlzaXRlZCxcbmE6YWN0aXZlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5OS4zNzVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5oZWFkZXIge1xuICBwYWRkaW5nOiAzcmVtIDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XG59XG5cbiNoZWFkZXItbGF5b3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogM3JlbTtcbn1cbnVsIGEge1xuICBjb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xufVxudWwgYTpob3ZlciB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xufVxudWwgLmFjdGl2ZS1uYXYge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkuMzc1cmVtKSB7XG4gIGhlYWRlciB7XG4gICAgcGFkZGluZzogM3JlbSAzcmVtO1xuICB9XG59XG4jaG9tZS1tYWluLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMi41cmVtIDA7XG4gIGdhcDogMTIuNXJlbTtcbiAgbWF4LXdpZHRoOiA3NS4zNzVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2hvbWUtbWFpbi1jb250ZW50ICN3ZWxjb21lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3LjVyZW07XG59XG4jaG9tZS1tYWluLWNvbnRlbnQgI3dlbGNvbWUgcCB7XG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XG59XG4jaG9tZS1tYWluLWNvbnRlbnQgI2hlYWRlci1sb2NhdGlvbiB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4jaG9tZS1tYWluLWNvbnRlbnQgI3Byb2plY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDQ5LjY4NzVyZW07XG4gIGdhcDogNy41cmVtO1xufVxuI2hvbWUtbWFpbi1jb250ZW50ICNwcm9qZWN0cyAjcHJvamVjdHMtb25lLWxpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2hvbWUtbWFpbi1jb250ZW50IC5wcm9qZWN0LWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMi41cmVtO1xufVxuI2hvbWUtbWFpbi1jb250ZW50IC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2hvbWUtbWFpbi1jb250ZW50IC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHAge1xuICBmb250LXNpemU6IDVyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4jaG9tZS1tYWluLWNvbnRlbnQgI2Fib3V0LW1lLFxuI2hvbWUtbWFpbi1jb250ZW50ICNza2lsbHMtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cmVtO1xufVxuI2hvbWUtbWFpbi1jb250ZW50ICNhYm91dC1tZSBoMixcbiNob21lLW1haW4tY29udGVudCAjc2tpbGxzLWN0biBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNob21lLW1haW4tY29udGVudCAjYWJvdXQtbWUge1xuICB3aWR0aDogNDEuMDYyNXJlbTtcbn1cbiNob21lLW1haW4tY29udGVudCAjc2tpbGxzLWN0biB7XG4gIHdpZHRoOiA2MS45Mzc1cmVtO1xufVxuI2hvbWUtbWFpbi1jb250ZW50ICNza2lsbHMtY3RuICNza2lsbHMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jaG9tZS1tYWluLWNvbnRlbnQgI3NraWxscy1jdG4gLnNraWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxLjVyZW07XG4gIHdpZHRoOiAyMCU7XG59XG4jaG9tZS1tYWluLWNvbnRlbnQgI3NraWxscy1jdG4gLnNraWxsIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2hvbWUtbWFpbi1jb250ZW50ICNza2lsbHMtY3RuIC5za2lsbC1nYXAge1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuI2hvbWUtbWFpbi1jb250ZW50ICNza2lsbHMtY3RuIC5za2lsbC1pbWctY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNi41cmVtO1xuICB3aWR0aDogNi41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMCwgMCUsIDY1JSk7XG4gIGJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG59XG4jaG9tZS1tYWluLWNvbnRlbnQgI3NraWxscy1jdG4gLnNraWxsLWltZy1jdG4gaW1nIHtcbiAgbWF4LWhlaWdodDogMi41cmVtO1xuICBtYXgtd2lkdGg6IDIuNXJlbTtcbn1cblxuI2J0bi10b3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAzLjEyNXJlbTtcbiAgYm90dG9tOiAzLjEyNXJlbTtcbn1cblxuI2J0bi10b3A6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW0gMy43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMy4xMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzUsIDc1JSwgNTglKTtcbiAgYm9yZGVyOiBub25lO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNSwgNzElLCAzOSUpO1xufVxuXG4uYnRuLXJlc2V0IHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDNyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgaGVpZ2h0OiAxOS41cmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xufVxuZm9vdGVyIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogM3JlbTtcbn1cbmZvb3RlciBhIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XG59XG5mb290ZXIgYTpob3ZlciB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XG59XG5cbi5tYWluLWJhbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW4tYmFubmVyIGgxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5tYWluLWJhbm5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3Byb2plY3QtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xuICBnYXA6IDE1cmVtO1xufVxuI3Byb2plY3QtbGlzdCAucHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxLjg3NXJlbTtcbn1cbiNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDNyZW07XG4gIHdpZHRoOiA1MCU7XG59XG4jcHJvamVjdC1saXN0IC5wcm9qZWN0LWNvbnRlbnQgcCB7XG4gIHdpZHRoOiAzMi41cmVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbiNleHBlcmllbmNlLXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSB7XG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XG4gIHdpZHRoOiAyNSU7XG59XG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA1cmVtO1xuICBnYXA6IDEuNXJlbTtcbn1cbiNleHBlcmllbmNlLXBhZ2UgYXNpZGUgaDQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuI2V4cGVyaWVuY2UtcGFnZSBzZWN0aW9uIHtcbiAgcGFkZGluZzogNy41cmVtIDA7XG4gIHdpZHRoOiA3NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNy41cmVtO1xufVxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDVyZW07XG59XG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcbiAgbGlzdC1zdHlsZTogZGlzYztcbiAgbGlzdC1zdHlsZS1wb3NpdGlvbjogb3V0c2lkZTtcbn1cbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCBoMyB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHNwYW4ge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHAge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4jYWJvdXQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jYWJvdXQtY29udGVudCBwIHtcbiAgcGFkZGluZzogMCA3LjVyZW07XG59XG4jYWJvdXQtY29udGVudCBpbWcge1xuICB3aWR0aDogYXV0bztcbiAgbWF4LWhlaWdodDogMzQuNjg3NXJlbTtcbn1cblxuLnByb2plY3QtcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJvamVjdC1wYWdlIGFzaWRlIHtcbiAgcGFkZGluZzogNy41cmVtIDA7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzMlKTtcbiAgd2lkdGg6IDI1JTtcbn1cbi5wcm9qZWN0LXBhZ2UgYXNpZGUgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDVyZW07XG4gIGdhcDogMS41cmVtO1xufVxuLnByb2plY3QtcGFnZSBzZWN0aW9uIHtcbiAgcGFkZGluZzogNy41cmVtIDA7XG4gIHdpZHRoOiA3NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNy41cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDVyZW07XG59XG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gLnByb2plY3Qtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogM3JlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBoMiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnByb2plY3QtcGFnZSBzZWN0aW9uIHAge1xuICBtYXgtd2lkdGg6IDQ5LjY4NzVyZW07XG59XG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMjguMTI1cmVtO1xuICBtYXgtd2lkdGg6IDUwcmVtO1xufVxuLnByb2plY3QtcGFnZSAjdmVyc2lvbi1vbmUgaW1nIHtcbiAgbWF4LWhlaWdodDogNDMuNzVyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19nZW5lcmFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19jb250YWluZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX21haW5Ib21lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX3RvVG9wQnRuLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX21haW5CYW5uZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fcG9ydGZvbGlvUGFnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19leHBlcmllbmNlUGFnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19hYm91dFBhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fcHJvamVjdFBhZ2VzLnNjc3NcIl0sXCJu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RDtBZWhWQztFQUNDLGlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxVQUFBO0Fma1ZGO0FlaFZFO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBZmtWSDtBZTlVQztFQUNDLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBZmdWRjtBZTlVRTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBZmdWSDtBZTdVRTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7QWYrVUg7QWU1VUU7RUFDQyxxQkFBQTtBZjhVSDtBZTNVRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBZjZVSDtBZXZVRTtFQUNDLG9CQUFBO0FmeVVIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiY29sb3JzXFxcIiBhcyAqO1xcbkB1c2UgXFxcImZvbnRzXFxcIiBhcyAqO1xcblxcbmh0bWwge1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHQvL3Njcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXG5cXHRmb250LXNpemU6IHJlbSgxOCk7XFxuXFx0Y29sb3I6ICRjbHItd2hpdGU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1iZztcXG5cXHRsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cIixcImh0bWwge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmY7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDQlKTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbmltZyxcXG5waWN0dXJlLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgZm9udC1zaXplOiAzLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA5OS4zNzVyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDNyZW0gMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XFxufVxcblxcbiNoZWFkZXItbGF5b3V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogM3JlbTtcXG59XFxudWwgYSB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcXG59XFxudWwgYTpob3ZlciB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG59XFxudWwgLmFjdGl2ZS1uYXYge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5LjM3NXJlbSkge1xcbiAgaGVhZGVyIHtcXG4gICAgcGFkZGluZzogM3JlbSAzcmVtO1xcbiAgfVxcbn1cXG4jaG9tZS1tYWluLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMi41cmVtIDA7XFxuICBnYXA6IDEyLjVyZW07XFxuICBtYXgtd2lkdGg6IDc1LjM3NXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2hvbWUtbWFpbi1jb250ZW50ICN3ZWxjb21lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA3LjVyZW07XFxufVxcbiNob21lLW1haW4tY29udGVudCAjd2VsY29tZSBwIHtcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxufVxcbiNob21lLW1haW4tY29udGVudCAjaGVhZGVyLWxvY2F0aW9uIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG4jaG9tZS1tYWluLWNvbnRlbnQgI3Byb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDQ5LjY4NzVyZW07XFxuICBnYXA6IDcuNXJlbTtcXG59XFxuI2hvbWUtbWFpbi1jb250ZW50ICNwcm9qZWN0cyAjcHJvamVjdHMtb25lLWxpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2hvbWUtbWFpbi1jb250ZW50IC5wcm9qZWN0LWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMi41cmVtO1xcbn1cXG4jaG9tZS1tYWluLWNvbnRlbnQgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNob21lLW1haW4tY29udGVudCAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyBwIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbiNob21lLW1haW4tY29udGVudCAjYWJvdXQtbWUsXFxuI2hvbWUtbWFpbi1jb250ZW50ICNza2lsbHMtY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cmVtO1xcbn1cXG4jaG9tZS1tYWluLWNvbnRlbnQgI2Fib3V0LW1lIGgyLFxcbiNob21lLW1haW4tY29udGVudCAjc2tpbGxzLWN0biBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNob21lLW1haW4tY29udGVudCAjYWJvdXQtbWUge1xcbiAgd2lkdGg6IDQxLjA2MjVyZW07XFxufVxcbiNob21lLW1haW4tY29udGVudCAjc2tpbGxzLWN0biB7XFxuICB3aWR0aDogNjEuOTM3NXJlbTtcXG59XFxuI2hvbWUtbWFpbi1jb250ZW50ICNza2lsbHMtY3RuICNza2lsbHMtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNob21lLW1haW4tY29udGVudCAjc2tpbGxzLWN0biAuc2tpbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxLjVyZW07XFxuICB3aWR0aDogMjAlO1xcbn1cXG4jaG9tZS1tYWluLWNvbnRlbnQgI3NraWxscy1jdG4gLnNraWxsIGgzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2hvbWUtbWFpbi1jb250ZW50ICNza2lsbHMtY3RuIC5za2lsbC1nYXAge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuI2hvbWUtbWFpbi1jb250ZW50ICNza2lsbHMtY3RuIC5za2lsbC1pbWctY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDYuNXJlbTtcXG4gIHdpZHRoOiA2LjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMCwgMCUsIDY1JSk7XFxuICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xcbn1cXG4jaG9tZS1tYWluLWNvbnRlbnQgI3NraWxscy1jdG4gLnNraWxsLWltZy1jdG4gaW1nIHtcXG4gIG1heC1oZWlnaHQ6IDIuNXJlbTtcXG4gIG1heC13aWR0aDogMi41cmVtO1xcbn1cXG5cXG4jYnRuLXRvcCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMy4xMjVyZW07XFxuICBib3R0b206IDMuMTI1cmVtO1xcbn1cXG5cXG4jYnRuLXRvcDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHBhZGRpbmc6IDAuNzVyZW0gMy43NXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDMuMTI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNSwgNzUlLCA1OCUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNSwgNzElLCAzOSUpO1xcbn1cXG5cXG4uYnRuLXJlc2V0IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBoZWlnaHQ6IDE5LjVyZW07XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xcbn1cXG5mb290ZXIgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDNyZW07XFxufVxcbmZvb3RlciBhIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcXG59XFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcXG59XFxuXFxuLm1haW4tYmFubmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1haW4tYmFubmVyIGgxIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5tYWluLWJhbm5lciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNwcm9qZWN0LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiA3LjVyZW0gMDtcXG4gIGdhcDogMTVyZW07XFxufVxcbiNwcm9qZWN0LWxpc3QgLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMS44NzVyZW07XFxufVxcbiNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG4gIHdpZHRoOiA1MCU7XFxufVxcbiNwcm9qZWN0LWxpc3QgLnByb2plY3QtY29udGVudCBwIHtcXG4gIHdpZHRoOiAzMi41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jZXhwZXJpZW5jZS1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNleHBlcmllbmNlLXBhZ2UgYXNpZGUge1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XFxuICB3aWR0aDogMjUlO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogNXJlbTtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIGg0IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbiNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XFxuICBwYWRkaW5nOiA3LjVyZW0gMDtcXG4gIHdpZHRoOiA3NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNy41cmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiA1cmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIGxpc3Qtc3R5bGU6IGRpc2M7XFxuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBvdXRzaWRlO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgaDMge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHNwYW4ge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgcCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4jYWJvdXQtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jYWJvdXQtY29udGVudCBwIHtcXG4gIHBhZGRpbmc6IDAgNy41cmVtO1xcbn1cXG4jYWJvdXQtY29udGVudCBpbWcge1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiAzNC42ODc1cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wcm9qZWN0LXBhZ2UgYXNpZGUge1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XFxuICB3aWR0aDogMjUlO1xcbn1cXG4ucHJvamVjdC1wYWdlIGFzaWRlIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogNXJlbTtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG4ucHJvamVjdC1wYWdlIHNlY3Rpb24ge1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICB3aWR0aDogNzUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDcuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogNXJlbTtcXG59XFxuLnByb2plY3QtcGFnZSBzZWN0aW9uIC5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gaDIge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gcCB7XFxuICBtYXgtd2lkdGg6IDQ5LjY4NzVyZW07XFxufVxcbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiAyOC4xMjVyZW07XFxuICBtYXgtd2lkdGg6IDUwcmVtO1xcbn1cXG4ucHJvamVjdC1wYWdlICN2ZXJzaW9uLW9uZSBpbWcge1xcbiAgbWF4LWhlaWdodDogNDMuNzVyZW07XFxufVwiLFwiJGZvbnQtcHJpbWFyeTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJmO1xcblwiLFwiLy8gUHJpbWFyeSBDb2xvcnNcXG4kY2xyLWJnOiBoc2woMCwgMCUsIDQlKTtcXG4kY2xyLWJ0bjogaHNsKDIzNSwgNzUlLCA1OCUpO1xcbiRjbHItYnRuLWhvdmVyOiBoc2woMjM1LCA3MSUsIDM5JSk7XFxuXFxuLy8gTmV1dHJhbCBDb2xvcnNcXG4kY2xyLXdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xcbiRjbHItZ3JheTogaHNsKDAsIDAlLCA2NSUpO1xcbiRjbHItZ3JheS1kYXJrOiBoc2woMCwgMCUsIDMzJSk7XFxuJGNsci1ibGFjazogaHNsKDAsIDAlLCAwJSk7XFxuXCIsXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUsXFxuc3ZnIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcImNvbG9yc1xcXCIgYXMgKjtcXG5cXG5oMSxcXG5oMixcXG5oMyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE7XFxufVxcblxcbmgxLFxcbmgyIHtcXG5cXHRmb250LXNpemU6IHJlbSg2MCk7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRsaW5lLWhlaWdodDogMS4zO1xcbn1cXG5cXG5oMyB7XFxuXFx0Zm9udC1zaXplOiByZW0oMjIpO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkLFxcbmE6YWN0aXZlIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4uY29udGFpbmVyIHtcXG5cXHRtYXgtd2lkdGg6IHJlbSgxNTkwKTtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG59XFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcblxcbmhlYWRlciB7XFxuXFx0cGFkZGluZzogcmVtKDQ4KSAwO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY2xyLWdyYXktZGFyaztcXG59XFxuXFxuI2hlYWRlci1sYXlvdXQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiByZW0oNDgpO1xcblxcblxcdGEge1xcblxcdFxcdGNvbG9yOiAkY2xyLWdyYXk7XFxuXFx0XFx0dHJhbnNpdGlvbjogY29sb3IgMC4xcztcXG5cXHR9XFxuXFxuXFx0YTpob3ZlciB7XFxuXFx0XFx0Y29sb3I6ICRjbHItd2hpdGU7XFxuXFx0fVxcblxcblxcdC5hY3RpdmUtbmF2IHtcXG5cXHRcXHRjb2xvcjogJGNsci13aGl0ZTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNTkwKSkge1xcblxcdGhlYWRlciB7XFxuXFx0XFx0cGFkZGluZzogcmVtKDQ4KSByZW0oNDgpO1xcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNob21lLW1haW4tY29udGVudCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmc6IHJlbSgyMDApIDA7XFxuXFx0Z2FwOiByZW0oMjAwKTtcXG5cXHRtYXgtd2lkdGg6IHJlbSgxMjA2KTtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdCN3ZWxjb21lIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0Z2FwOiByZW0oMTIwKTtcXG5cXG5cXHRcXHRwIHtcXG5cXHRcXHRcXHRwYWRkaW5nLXRvcDogcmVtKDI0KTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdCNoZWFkZXItbG9jYXRpb24ge1xcblxcdFxcdGNvbG9yOiAkY2xyLWdyYXk7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG5cXHR9XFxuXFxuXFx0I3Byb2plY3RzIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0d2lkdGg6IHJlbSg3OTUpO1xcblxcdFxcdGdhcDogcmVtKDEyMCk7XFxuXFxuXFx0XFx0I3Byb2plY3RzLW9uZS1saW5lciB7XFxuXFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtY3RuIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0Z2FwOiByZW0oNDApO1xcblxcblxcdFxcdC5wcm9qZWN0LWhlYWRpbmcge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0XFx0XFx0cCB7XFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oODApO1xcblxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0I2Fib3V0LW1lLFxcblxcdCNza2lsbHMtY3RuIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0Z2FwOiByZW0oODApO1xcblxcblxcdFxcdGgyIHtcXG5cXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQjYWJvdXQtbWUge1xcblxcdFxcdHdpZHRoOiByZW0oNjU3KTtcXG5cXHR9XFxuXFxuXFx0I3NraWxscy1jdG4ge1xcblxcdFxcdHdpZHRoOiByZW0oOTkxKTtcXG5cXG5cXHRcXHQjc2tpbGxzLWxpc3Qge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQuc2tpbGwge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdFxcdGdhcDogcmVtKDI0KTtcXG5cXHRcXHRcXHR3aWR0aDogMjAlO1xcblxcblxcdFxcdFxcdGgzIHtcXG5cXHRcXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQuc2tpbGwtZ2FwIHtcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiByZW0oNDgpO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQuc2tpbGwtaW1nLWN0biB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdFxcdGhlaWdodDogcmVtKDEwNCk7XFxuXFx0XFx0XFx0d2lkdGg6IHJlbSgxMDQpO1xcblxcdFxcdFxcdGJvcmRlcjogMXB4IHNvbGlkICRjbHItZ3JheTtcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiByZW0oMTAwKTtcXG5cXG5cXHRcXHRcXHRpbWcge1xcblxcdFxcdFxcdFxcdG1heC1oZWlnaHQ6IHJlbSg0MCk7XFxuXFx0XFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oNDApO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuI2J0bi10b3Age1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRyaWdodDogcmVtKDUwKTtcXG5cXHRib3R0b206IHJlbSg1MCk7XFxufVxcblxcbiNidG4tdG9wOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG5idXR0b24ge1xcblxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdGZvbnQtc2l6ZTogcmVtKDIwKTtcXG5cXHRwYWRkaW5nOiByZW0oMTIpIHJlbSg2MCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogcmVtKDUwKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWJ0bjtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWJ0bi1ob3ZlcjtcXG59XFxuXFxuLmJ0bi1yZXNldCB7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG5mb290ZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogcmVtKDQ4KTtcXG5cXHRmb250LXNpemU6IHJlbSgzMik7XFxuXFx0aGVpZ2h0OiByZW0oMzEyKTtcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgJGNsci1ncmF5LWRhcms7XFxuXFxuXFx0ZGl2IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGdhcDogcmVtKDQ4KTtcXG5cXHR9XFxuXFxuXFx0YSB7XFxuXFx0XFx0Y29sb3I6ICRjbHItd2hpdGU7XFxuXFx0XFx0dHJhbnNpdGlvbjogY29sb3IgMC4xcztcXG5cXHR9XFxuXFxuXFx0YTpob3ZlciB7XFxuXFx0XFx0Y29sb3I6ICRjbHItZ3JheTtcXG5cXHR9XFxufVxcblwiLFwiLm1haW4tYmFubmVyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcblxcdGgxIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0dG9wOiA1MCU7XFxuXFx0XFx0bGVmdDogNTAlO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcdH1cXG5cXG5cXHRpbWcge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNwcm9qZWN0LWxpc3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcblxcdGdhcDogcmVtKDI0MCk7XFxuXFxuXFx0LnByb2plY3Qge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdGdhcDogcmVtKDMwKTtcXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtY29udGVudCB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0Z2FwOiByZW0oNDgpO1xcblxcdFxcdHdpZHRoOiA1MCU7XFxuXFxuXFx0XFx0cCB7XFxuXFx0XFx0XFx0d2lkdGg6IHJlbSg1MjApO1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuI2V4cGVyaWVuY2UtcGFnZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXG5cXHRhc2lkZSB7XFxuXFx0XFx0cGFkZGluZzogcmVtKDEyMCkgMDtcXG5cXHRcXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkY2xyLWdyYXktZGFyaztcXG5cXHRcXHR3aWR0aDogMjUlO1xcblxcblxcdFxcdHVsIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0XFx0cG9zaXRpb246IHN0aWNreTtcXG5cXHRcXHRcXHR0b3A6IHJlbSg4MCk7XFxuXFx0XFx0XFx0Z2FwOiByZW0oMjQpO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRoNCB7XFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdHNlY3Rpb24ge1xcblxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIDA7XFxuXFx0XFx0d2lkdGg6IDc1JTtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0Z2FwOiByZW0oMTIwKTtcXG5cXHR9XFxuXFxuXFx0LmV4cGVyaWVuY2UtY29udGVudCB7XFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcblxcdFxcdHBhZGRpbmctbGVmdDogcmVtKDgwKTtcXG5cXG5cXHRcXHR1bCB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdGdhcDogcmVtKDgpO1xcblxcdFxcdFxcdGxpc3Qtc3R5bGU6IGRpc2M7XFxuXFx0XFx0XFx0bGlzdC1zdHlsZS1wb3NpdGlvbjogb3V0c2lkZTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0aDMge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDIwKTtcXG5cXHRcXHRcXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0c3BhbiB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oNDApO1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0XFx0XFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRwIHtcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgyMCk7XFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiByZW0oMjQpO1xcblxcdFxcdFxcdG1hcmdpbi10b3A6IHJlbSg4KTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuI2Fib3V0LWNvbnRlbnQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0cGFkZGluZzogcmVtKDEyMCkgMDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRwIHtcXG5cXHRcXHRwYWRkaW5nOiAwIHJlbSgxMjApO1xcblxcdH1cXG5cXG5cXHRpbWcge1xcblxcdFxcdHdpZHRoOiBhdXRvO1xcblxcdFxcdG1heC1oZWlnaHQ6IHJlbSg1NTUpO1xcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbi5wcm9qZWN0LXBhZ2Uge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFxuXFx0YXNpZGUge1xcblxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIDA7XFxuXFx0XFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGNsci1ncmF5LWRhcms7XFxuXFx0XFx0d2lkdGg6IDI1JTtcXG5cXG5cXHRcXHR1bCB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdHBvc2l0aW9uOiBzdGlja3k7XFxuXFx0XFx0XFx0dG9wOiByZW0oODApO1xcblxcdFxcdFxcdGdhcDogcmVtKDI0KTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdHNlY3Rpb24ge1xcblxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIDA7XFxuXFx0XFx0d2lkdGg6IDc1JTtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0Z2FwOiByZW0oMTIwKTtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IHJlbSg4MCk7XFxuXFxuXFx0XFx0LnByb2plY3Qtc2VjdGlvbiB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdGdhcDogcmVtKDQ4KTtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRoMiB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oNDApO1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0XFx0fVxcblxcblxcdFxcdHAge1xcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDc5NSk7XFxuXFx0XFx0fVxcblxcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcblxcdFxcdFxcdG1heC1oZWlnaHQ6IHJlbSg0NTApO1xcblxcdFxcdFxcdG1heC13aWR0aDogcmVtKDgwMCk7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQvLyB0aGlzIGlzIGZvciB0aGUgcG9ydGZvbGlvIHByb2plY3RcXG5cXHQjdmVyc2lvbi1vbmUge1xcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0bWF4LWhlaWdodDogcmVtKDcwMCk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7IHVwZGF0ZUhlYWRlckFjdGl2ZUxpbmssIHJlbW92ZUhlYWRlclN0eWxlcyB9O1xuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1saW5rc1wiKTtcblxuZnVuY3Rpb24gdXBkYXRlSGVhZGVyQWN0aXZlTGluaygpIHtcblx0bmF2LmZvckVhY2goKGxpbmspID0+IHtcblx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHR1cGRhdGVIZWFkZXJTdHlsZXMobGluayk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVIZWFkZXJTdHlsZXMobGluaykge1xuXHRyZW1vdmVIZWFkZXJTdHlsZXMoKTtcblx0YWRkSGVhZGVyU3R5bGVzKGxpbmspO1xufVxuXG5mdW5jdGlvbiByZW1vdmVIZWFkZXJTdHlsZXMoKSB7XG5cdG5hdi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuXHRcdGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtbmF2XCIpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkSGVhZGVyU3R5bGVzKGxpbmspIHtcblx0bGluay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLW5hdlwiKTtcbn1cbiIsImV4cG9ydCB7IHNjcm9sbFRvVG9wIH07XG5cbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXRvcFwiKTtcblxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzY3JvbGxUb1RvcCk7XG5cbmZ1bmN0aW9uIHNjcm9sbFRvVG9wKCkge1xuXHRkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xufVxuIiwiZXhwb3J0IHsgaW5pdCB9O1xuaW1wb3J0IHsgdXBkYXRlSGVhZGVyQWN0aXZlTGluayB9IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgeyBzY3JvbGxUb1RvcCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdG9Ub3BCdG5cIjtcblxuZnVuY3Rpb24gaW5pdCgpIHtcblx0dXBkYXRlSGVhZGVyQWN0aXZlTGluaygpO1xuXHRzY3JvbGxUb1RvcCgpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaW5pdCB9IGZyb20gXCIuL2luaXQuanNcIjtcbmltcG9ydCBcIi4uL3Njc3Mvc3R5bGVzLnNjc3NcIjtcblxuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9