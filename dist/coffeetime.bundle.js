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
/*!****************************************!*\
  !*** ./src/js/portfolio/coffeetime.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../init.js */ "./src/js/init.js");
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header.js */ "./src/js/components/header.js");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scss/styles.scss */ "./src/scss/styles.scss");




(0,_init_js__WEBPACK_IMPORTED_MODULE_0__.init)();
(0,_components_header_js__WEBPACK_IMPORTED_MODULE_1__.removeHeaderStyles)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29mZmVldGltZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw0MUJBQTQxQixVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sUUFBUSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxRQUFRLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sT0FBTyxVQUFVLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFFBQVEsTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFV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QUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCdUI7O0FBRXZCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RnQjtBQUM2QztBQUNUOztBQUVwRDtBQUNBLENBQUMsMEVBQXNCO0FBQ3ZCLENBQUMsaUVBQVc7QUFDWjs7Ozs7OztVQ1BBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FrQztBQUMyQjtBQUM3Qjs7QUFFaEMsOENBQUk7QUFDSix5RUFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzPzMyMWYiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2pzL2NvbXBvbmVudHMvdG9Ub3BCdG4uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2pzL2luaXQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2pzL3BvcnRmb2xpby9jb2ZmZWV0aW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJmO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA0JSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmltZyxcbnBpY3R1cmUsXG5zdmcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDEsXG5oMixcbmgzIHtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuXG5oMSxcbmgyIHtcbiAgZm9udC1zaXplOiAzLjc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmEsXG5hOnZpc2l0ZWQsXG5hOmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTkuMzc1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuaGVhZGVyIHtcbiAgcGFkZGluZzogM3JlbSAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xufVxuXG4jaGVhZGVyLWxheW91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDNyZW07XG59XG51bCBhIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcbn1cbnVsIGE6aG92ZXIge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbn1cbnVsIC5hY3RpdmUtbmF2IHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5LjM3NXJlbSkge1xuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDNyZW0gM3JlbTtcbiAgfVxufVxuI2hvbWUtbWFpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTIuNXJlbSAwO1xuICBnYXA6IDEyLjVyZW07XG4gIG1heC13aWR0aDogNzUuMzc1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNob21lLW1haW4tY29udGVudCAjd2VsY29tZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNy41cmVtO1xufVxuI2hvbWUtbWFpbi1jb250ZW50ICN3ZWxjb21lIHAge1xuICBwYWRkaW5nLXRvcDogMS41cmVtO1xufVxuI2hvbWUtbWFpbi1jb250ZW50ICNoZWFkZXItbG9jYXRpb24ge1xuICBjb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuI2hvbWUtbWFpbi1jb250ZW50ICNwcm9qZWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA0OS42ODc1cmVtO1xuICBnYXA6IDcuNXJlbTtcbn1cbiNob21lLW1haW4tY29udGVudCAjcHJvamVjdHMgI3Byb2plY3RzLW9uZS1saW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNob21lLW1haW4tY29udGVudCAucHJvamVjdC1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIuNXJlbTtcbn1cbiNob21lLW1haW4tY29udGVudCAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNob21lLW1haW4tY29udGVudCAucHJvamVjdC1jdG4gLnByb2plY3QtaGVhZGluZyBwIHtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuI2hvbWUtbWFpbi1jb250ZW50ICNhYm91dC1tZSxcbiNob21lLW1haW4tY29udGVudCAjc2tpbGxzLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXJlbTtcbn1cbiNob21lLW1haW4tY29udGVudCAjYWJvdXQtbWUgaDIsXG4jaG9tZS1tYWluLWNvbnRlbnQgI3NraWxscy1jdG4gaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jaG9tZS1tYWluLWNvbnRlbnQgI2Fib3V0LW1lIHtcbiAgd2lkdGg6IDQxLjA2MjVyZW07XG59XG4jaG9tZS1tYWluLWNvbnRlbnQgI3NraWxscy1jdG4ge1xuICB3aWR0aDogNjEuOTM3NXJlbTtcbn1cbiNob21lLW1haW4tY29udGVudCAjc2tpbGxzLWN0biAjc2tpbGxzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI2hvbWUtbWFpbi1jb250ZW50ICNza2lsbHMtY3RuIC5za2lsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS41cmVtO1xuICB3aWR0aDogMjAlO1xufVxuI2hvbWUtbWFpbi1jb250ZW50ICNza2lsbHMtY3RuIC5za2lsbCBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNob21lLW1haW4tY29udGVudCAjc2tpbGxzLWN0biAuc2tpbGwtZ2FwIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cbiNob21lLW1haW4tY29udGVudCAjc2tpbGxzLWN0biAuc2tpbGwtaW1nLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYuNXJlbTtcbiAgd2lkdGg6IDYuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDAsIDAlLCA2NSUpO1xuICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xufVxuI2hvbWUtbWFpbi1jb250ZW50ICNza2lsbHMtY3RuIC5za2lsbC1pbWctY3RuIGltZyB7XG4gIG1heC1oZWlnaHQ6IDIuNXJlbTtcbiAgbWF4LXdpZHRoOiAyLjVyZW07XG59XG5cbiNidG4tdG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMy4xMjVyZW07XG4gIGJvdHRvbTogMy4xMjVyZW07XG59XG5cbiNidG4tdG9wOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b24ge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBwYWRkaW5nOiAwLjc1cmVtIDMuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDMuMTI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM1LCA3NSUsIDU4JSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzO1xufVxuXG5idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzUsIDcxJSwgMzklKTtcbn1cblxuLmJ0bi1yZXNldCB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzcmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGhlaWdodDogMTkuNXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzMlKTtcbn1cbmZvb3RlciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDNyZW07XG59XG5mb290ZXIgYSB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xufVxuZm9vdGVyIGE6aG92ZXIge1xuICBjb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xufVxuXG4ubWFpbi1iYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluLWJhbm5lciBoMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubWFpbi1iYW5uZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNwcm9qZWN0LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAgZ2FwOiAxNXJlbTtcbn1cbiNwcm9qZWN0LWxpc3QgLnByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMS44NzVyZW07XG59XG4jcHJvamVjdC1saXN0IC5wcm9qZWN0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAzcmVtO1xuICB3aWR0aDogNTAlO1xufVxuI3Byb2plY3QtbGlzdCAucHJvamVjdC1jb250ZW50IHAge1xuICB3aWR0aDogMzIuNXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4jZXhwZXJpZW5jZS1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiNleHBlcmllbmNlLXBhZ2UgYXNpZGUge1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xuICB3aWR0aDogMjUlO1xufVxuI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogNXJlbTtcbiAgZ2FwOiAxLjVyZW07XG59XG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIGg0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiNleHBlcmllbmNlLXBhZ2Ugc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xuICB3aWR0aDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDcuNXJlbTtcbn1cbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiA1cmVtO1xufVxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIGxpc3Qtc3R5bGU6IGRpc2M7XG4gIGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGU7XG59XG4jZXhwZXJpZW5jZS1wYWdlIC5leHBlcmllbmNlLWNvbnRlbnQgaDMge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCBzcGFuIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuI2Fib3V0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA3LjVyZW0gMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2Fib3V0LWNvbnRlbnQgcCB7XG4gIHBhZGRpbmc6IDAgNy41cmVtO1xufVxuI2Fib3V0LWNvbnRlbnQgaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDM0LjY4NzVyZW07XG59XG5cbi5wcm9qZWN0LXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnByb2plY3QtcGFnZSBhc2lkZSB7XG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBoc2woMCwgMCUsIDMzJSk7XG4gIHdpZHRoOiAyNSU7XG59XG4ucHJvamVjdC1wYWdlIGFzaWRlIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA1cmVtO1xuICBnYXA6IDEuNXJlbTtcbn1cbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xuICB3aWR0aDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDcuNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiA1cmVtO1xufVxuLnByb2plY3QtcGFnZSBzZWN0aW9uIC5wcm9qZWN0LXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDNyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gaDIge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiBwIHtcbiAgbWF4LXdpZHRoOiA0OS42ODc1cmVtO1xufVxuLnByb2plY3QtcGFnZSBzZWN0aW9uIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDI4LjEyNXJlbTtcbiAgbWF4LXdpZHRoOiA1MHJlbTtcbn1cbi5wcm9qZWN0LXBhZ2UgI3ZlcnNpb24tb25lIGltZyB7XG4gIG1heC1oZWlnaHQ6IDQzLjc1cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fZ2VuZXJhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fY29udGFpbmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19tYWluSG9tZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL190b1RvcEJ0bi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19idXR0b25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19tYWluQmFubmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX3BvcnRmb2xpb1BhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fZXhwZXJpZW5jZVBhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fYWJvdXRQYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9z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QTtFQUNBLHNCQUFBO0FkbVVGOztBZS9VQTtFQUNDLGFBQUE7QWZrVkQ7QWVoVkM7RUFDQyxpQkFBQTtFQUNBLHVDQUFBO0VBQ0EsVUFBQTtBZmtWRjtBZWhWRTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QWZrVkg7QWU5VUM7RUFDQyxpQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QWZnVkY7QWU5VUU7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QWZnVkg7QWU3VUU7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0FmK1VIO0FlNVVFO0VBQ0MscUJBQUE7QWY4VUg7QWUzVUU7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QWY2VUg7QWV2VUU7RUFDQyxvQkFBQTtBZnlVSFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcImNvbG9yc1xcXCIgYXMgKjtcXG5AdXNlIFxcXCJmb250c1xcXCIgYXMgKjtcXG5cXG5odG1sIHtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Ly9zY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSB7XFxuXFx0Zm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxuXFx0Zm9udC1zaXplOiByZW0oMTgpO1xcblxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItYmc7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXCIsXCJodG1sIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJmO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA0JSk7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG4gIG1hcmdpbjogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMy43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDEuMzc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogOTkuMzc1cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICBwYWRkaW5nOiAzcmVtIDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xcbn1cXG5cXG4jaGVhZGVyLWxheW91dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDNyZW07XFxufVxcbnVsIGEge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgNjUlKTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XFxufVxcbnVsIGE6aG92ZXIge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxufVxcbnVsIC5hY3RpdmUtbmF2IHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OS4zNzVyZW0pIHtcXG4gIGhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDNyZW0gM3JlbTtcXG4gIH1cXG59XFxuI2hvbWUtbWFpbi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTIuNXJlbSAwO1xcbiAgZ2FwOiAxMi41cmVtO1xcbiAgbWF4LXdpZHRoOiA3NS4zNzVyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNob21lLW1haW4tY29udGVudCAjd2VsY29tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNy41cmVtO1xcbn1cXG4jaG9tZS1tYWluLWNvbnRlbnQgI3dlbGNvbWUgcCB7XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbn1cXG4jaG9tZS1tYWluLWNvbnRlbnQgI2hlYWRlci1sb2NhdGlvbiB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCA2NSUpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuI2hvbWUtbWFpbi1jb250ZW50ICNwcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA0OS42ODc1cmVtO1xcbiAgZ2FwOiA3LjVyZW07XFxufVxcbiNob21lLW1haW4tY29udGVudCAjcHJvamVjdHMgI3Byb2plY3RzLW9uZS1saW5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNob21lLW1haW4tY29udGVudCAucHJvamVjdC1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIuNXJlbTtcXG59XFxuI2hvbWUtbWFpbi1jb250ZW50IC5wcm9qZWN0LWN0biAucHJvamVjdC1oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jaG9tZS1tYWluLWNvbnRlbnQgLnByb2plY3QtY3RuIC5wcm9qZWN0LWhlYWRpbmcgcCB7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG4jaG9tZS1tYWluLWNvbnRlbnQgI2Fib3V0LW1lLFxcbiNob21lLW1haW4tY29udGVudCAjc2tpbGxzLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXJlbTtcXG59XFxuI2hvbWUtbWFpbi1jb250ZW50ICNhYm91dC1tZSBoMixcXG4jaG9tZS1tYWluLWNvbnRlbnQgI3NraWxscy1jdG4gaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jaG9tZS1tYWluLWNvbnRlbnQgI2Fib3V0LW1lIHtcXG4gIHdpZHRoOiA0MS4wNjI1cmVtO1xcbn1cXG4jaG9tZS1tYWluLWNvbnRlbnQgI3NraWxscy1jdG4ge1xcbiAgd2lkdGg6IDYxLjkzNzVyZW07XFxufVxcbiNob21lLW1haW4tY29udGVudCAjc2tpbGxzLWN0biAjc2tpbGxzLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jaG9tZS1tYWluLWNvbnRlbnQgI3NraWxscy1jdG4gLnNraWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMS41cmVtO1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuI2hvbWUtbWFpbi1jb250ZW50ICNza2lsbHMtY3RuIC5za2lsbCBoMyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNob21lLW1haW4tY29udGVudCAjc2tpbGxzLWN0biAuc2tpbGwtZ2FwIHtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcbiNob21lLW1haW4tY29udGVudCAjc2tpbGxzLWN0biAuc2tpbGwtaW1nLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA2LjVyZW07XFxuICB3aWR0aDogNi41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDAsIDAlLCA2NSUpO1xcbiAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcXG59XFxuI2hvbWUtbWFpbi1jb250ZW50ICNza2lsbHMtY3RuIC5za2lsbC1pbWctY3RuIGltZyB7XFxuICBtYXgtaGVpZ2h0OiAyLjVyZW07XFxuICBtYXgtd2lkdGg6IDIuNXJlbTtcXG59XFxuXFxuI2J0bi10b3Age1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDMuMTI1cmVtO1xcbiAgYm90dG9tOiAzLjEyNXJlbTtcXG59XFxuXFxuI2J0bi10b3A6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBwYWRkaW5nOiAwLjc1cmVtIDMuNzVyZW07XFxuICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzUsIDc1JSwgNTglKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMzUsIDcxJSwgMzklKTtcXG59XFxuXFxuLmJ0bi1yZXNldCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgaGVpZ2h0OiAxOS41cmVtO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMzMlKTtcXG59XFxuZm9vdGVyIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5mb290ZXIgYSB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XFxufVxcbmZvb3RlciBhOmhvdmVyIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDY1JSk7XFxufVxcblxcbi5tYWluLWJhbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tYWluLWJhbm5lciBoMSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4ubWFpbi1iYW5uZXIgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICBnYXA6IDE1cmVtO1xcbn1cXG4jcHJvamVjdC1saXN0IC5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDEuODc1cmVtO1xcbn1cXG4jcHJvamVjdC1saXN0IC5wcm9qZWN0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxuICB3aWR0aDogNTAlO1xcbn1cXG4jcHJvamVjdC1saXN0IC5wcm9qZWN0LWNvbnRlbnQgcCB7XFxuICB3aWR0aDogMzIuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI2V4cGVyaWVuY2UtcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIGFzaWRlIHtcXG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDVyZW07XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSBhc2lkZSBoNCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4jZXhwZXJpZW5jZS1wYWdlIHNlY3Rpb24ge1xcbiAgcGFkZGluZzogNy41cmVtIDA7XFxuICB3aWR0aDogNzUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDcuNXJlbTtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogNXJlbTtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBsaXN0LXN0eWxlOiBkaXNjO1xcbiAgbGlzdC1zdHlsZS1wb3NpdGlvbjogb3V0c2lkZTtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IGgzIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbiNleHBlcmllbmNlLXBhZ2UgLmV4cGVyaWVuY2UtY29udGVudCBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuI2V4cGVyaWVuY2UtcGFnZSAuZXhwZXJpZW5jZS1jb250ZW50IHAge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuI2Fib3V0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2Fib3V0LWNvbnRlbnQgcCB7XFxuICBwYWRkaW5nOiAwIDcuNXJlbTtcXG59XFxuI2Fib3V0LWNvbnRlbnQgaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWF4LWhlaWdodDogMzQuNjg3NXJlbTtcXG59XFxuXFxuLnByb2plY3QtcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ucHJvamVjdC1wYWdlIGFzaWRlIHtcXG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaHNsKDAsIDAlLCAzMyUpO1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuLnByb2plY3QtcGFnZSBhc2lkZSB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDVyZW07XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuLnByb2plY3QtcGFnZSBzZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDcuNXJlbSAwO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA3LjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDVyZW07XFxufVxcbi5wcm9qZWN0LXBhZ2Ugc2VjdGlvbiAucHJvamVjdC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByb2plY3QtcGFnZSBzZWN0aW9uIGgyIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuLnByb2plY3QtcGFnZSBzZWN0aW9uIHAge1xcbiAgbWF4LXdpZHRoOiA0OS42ODc1cmVtO1xcbn1cXG4ucHJvamVjdC1wYWdlIHNlY3Rpb24gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogMjguMTI1cmVtO1xcbiAgbWF4LXdpZHRoOiA1MHJlbTtcXG59XFxuLnByb2plY3QtcGFnZSAjdmVyc2lvbi1vbmUgaW1nIHtcXG4gIG1heC1oZWlnaHQ6IDQzLjc1cmVtO1xcbn1cIixcIiRmb250LXByaW1hcnk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyZjtcXG5cIixcIi8vIFByaW1hcnkgQ29sb3JzXFxuJGNsci1iZzogaHNsKDAsIDAlLCA0JSk7XFxuJGNsci1idG46IGhzbCgyMzUsIDc1JSwgNTglKTtcXG4kY2xyLWJ0bi1ob3ZlcjogaHNsKDIzNSwgNzElLCAzOSUpO1xcblxcbi8vIE5ldXRyYWwgQ29sb3JzXFxuJGNsci13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXG4kY2xyLWdyYXk6IGhzbCgwLCAwJSwgNjUlKTtcXG4kY2xyLWdyYXktZGFyazogaHNsKDAsIDAlLCAzMyUpO1xcbiRjbHItYmxhY2s6IGhzbCgwLCAwJSwgMCUpO1xcblwiLFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbmltZyxcXG5waWN0dXJlLFxcbnN2ZyB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCJjb2xvcnNcXFwiIGFzICo7XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcblxcdG1hcmdpbjogMDtcXG5cXHRsaW5lLWhlaWdodDogMS4xO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuXFx0Zm9udC1zaXplOiByZW0oNjApO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0bGluZS1oZWlnaHQ6IDEuMztcXG59XFxuXFxuaDMge1xcblxcdGZvbnQtc2l6ZTogcmVtKDIyKTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmFjdGl2ZSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuLmNvbnRhaW5lciB7XFxuXFx0bWF4LXdpZHRoOiByZW0oMTU5MCk7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5cXG5oZWFkZXIge1xcblxcdHBhZGRpbmc6IHJlbSg0OCkgMDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNsci1ncmF5LWRhcms7XFxufVxcblxcbiNoZWFkZXItbGF5b3V0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG51bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogcmVtKDQ4KTtcXG5cXG5cXHRhIHtcXG5cXHRcXHRjb2xvcjogJGNsci1ncmF5O1xcblxcdFxcdHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XFxuXFx0fVxcblxcblxcdGE6aG92ZXIge1xcblxcdFxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdH1cXG5cXG5cXHQuYWN0aXZlLW5hdiB7XFxuXFx0XFx0Y29sb3I6ICRjbHItd2hpdGU7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTU5MCkpIHtcXG5cXHRoZWFkZXIge1xcblxcdFxcdHBhZGRpbmc6IHJlbSg0OCkgcmVtKDQ4KTtcXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jaG9tZS1tYWluLWNvbnRlbnQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRwYWRkaW5nOiByZW0oMjAwKSAwO1xcblxcdGdhcDogcmVtKDIwMCk7XFxuXFx0bWF4LXdpZHRoOiByZW0oMTIwNik7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHQjd2VsY29tZSB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGdhcDogcmVtKDEyMCk7XFxuXFxuXFx0XFx0cCB7XFxuXFx0XFx0XFx0cGFkZGluZy10b3A6IHJlbSgyNCk7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQjaGVhZGVyLWxvY2F0aW9uIHtcXG5cXHRcXHRjb2xvcjogJGNsci1ncmF5O1xcblxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0fVxcblxcblxcdCNwcm9qZWN0cyB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdHdpZHRoOiByZW0oNzk1KTtcXG5cXHRcXHRnYXA6IHJlbSgxMjApO1xcblxcblxcdFxcdCNwcm9qZWN0cy1vbmUtbGluZXIge1xcblxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdC5wcm9qZWN0LWN0biB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGdhcDogcmVtKDQwKTtcXG5cXG5cXHRcXHQucHJvamVjdC1oZWFkaW5nIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdFxcdFxcdHAge1xcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDgwKTtcXG5cXHRcXHRcXHRcXHRmb250LXdlaWdodDogMTAwO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdCNhYm91dC1tZSxcXG5cXHQjc2tpbGxzLWN0biB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGdhcDogcmVtKDgwKTtcXG5cXG5cXHRcXHRoMiB7XFxuXFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0I2Fib3V0LW1lIHtcXG5cXHRcXHR3aWR0aDogcmVtKDY1Nyk7XFxuXFx0fVxcblxcblxcdCNza2lsbHMtY3RuIHtcXG5cXHRcXHR3aWR0aDogcmVtKDk5MSk7XFxuXFxuXFx0XFx0I3NraWxscy1saXN0IHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0LnNraWxsIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRcXHRnYXA6IHJlbSgyNCk7XFxuXFx0XFx0XFx0d2lkdGg6IDIwJTtcXG5cXG5cXHRcXHRcXHRoMyB7XFxuXFx0XFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0LnNraWxsLWdhcCB7XFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogcmVtKDQ4KTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0LnNraWxsLWltZy1jdG4ge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRcXHRoZWlnaHQ6IHJlbSgxMDQpO1xcblxcdFxcdFxcdHdpZHRoOiByZW0oMTA0KTtcXG5cXHRcXHRcXHRib3JkZXI6IDFweCBzb2xpZCAkY2xyLWdyYXk7XFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogcmVtKDEwMCk7XFxuXFxuXFx0XFx0XFx0aW1nIHtcXG5cXHRcXHRcXHRcXHRtYXgtaGVpZ2h0OiByZW0oNDApO1xcblxcdFxcdFxcdFxcdG1heC13aWR0aDogcmVtKDQwKTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNidG4tdG9wIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0cmlnaHQ6IHJlbSg1MCk7XFxuXFx0Ym90dG9tOiByZW0oNTApO1xcbn1cXG5cXG4jYnRuLXRvcDpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuYnV0dG9uIHtcXG5cXHRjb2xvcjogJGNsci13aGl0ZTtcXG5cXHRmb250LXNpemU6IHJlbSgyMCk7XFxuXFx0cGFkZGluZzogcmVtKDEyKSByZW0oNjApO1xcblxcdGJvcmRlci1yYWRpdXM6IHJlbSg1MCk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1idG47XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1idG4taG92ZXI7XFxufVxcblxcbi5idG4tcmVzZXQge1xcblxcdG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuZm9vdGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IHJlbSg0OCk7XFxuXFx0Zm9udC1zaXplOiByZW0oMzIpO1xcblxcdGhlaWdodDogcmVtKDMxMik7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICRjbHItZ3JheS1kYXJrO1xcblxcblxcdGRpdiB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRnYXA6IHJlbSg0OCk7XFxuXFx0fVxcblxcblxcdGEge1xcblxcdFxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdFxcdHRyYW5zaXRpb246IGNvbG9yIDAuMXM7XFxuXFx0fVxcblxcblxcdGE6aG92ZXIge1xcblxcdFxcdGNvbG9yOiAkY2xyLWdyYXk7XFxuXFx0fVxcbn1cXG5cIixcIi5tYWluLWJhbm5lciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG5cXHRoMSB7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdHRvcDogNTAlO1xcblxcdFxcdGxlZnQ6IDUwJTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHR9XFxuXFxuXFx0aW1nIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jcHJvamVjdC1saXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogcmVtKDEyMCkgMDtcXG5cXHRnYXA6IHJlbSgyNDApO1xcblxcblxcdC5wcm9qZWN0IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRnYXA6IHJlbSgzMCk7XFxuXFx0fVxcblxcblxcdC5wcm9qZWN0LWNvbnRlbnQge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGdhcDogcmVtKDQ4KTtcXG5cXHRcXHR3aWR0aDogNTAlO1xcblxcblxcdFxcdHAge1xcblxcdFxcdFxcdHdpZHRoOiByZW0oNTIwKTtcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNleHBlcmllbmNlLXBhZ2Uge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFxuXFx0YXNpZGUge1xcblxcdFxcdHBhZGRpbmc6IHJlbSgxMjApIDA7XFxuXFx0XFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGNsci1ncmF5LWRhcms7XFxuXFx0XFx0d2lkdGg6IDI1JTtcXG5cXG5cXHRcXHR1bCB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdHBvc2l0aW9uOiBzdGlja3k7XFxuXFx0XFx0XFx0dG9wOiByZW0oODApO1xcblxcdFxcdFxcdGdhcDogcmVtKDI0KTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0aDQge1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHRzZWN0aW9uIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcblxcdFxcdHdpZHRoOiA3NSU7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGdhcDogcmVtKDEyMCk7XFxuXFx0fVxcblxcblxcdC5leHBlcmllbmNlLWNvbnRlbnQge1xcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IHJlbSg4MCk7XFxuXFxuXFx0XFx0dWwge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRnYXA6IHJlbSg4KTtcXG5cXHRcXHRcXHRsaXN0LXN0eWxlOiBkaXNjO1xcblxcdFxcdFxcdGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGU7XFxuXFx0XFx0fVxcblxcblxcdFxcdGgzIHtcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgyMCk7XFxuXFx0XFx0XFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0XFx0fVxcblxcblxcdFxcdHNwYW4ge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDQwKTtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogMzAwO1xcblxcdFxcdFxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0cCB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMjApO1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogcmVtKDI0KTtcXG5cXHRcXHRcXHRtYXJnaW4tdG9wOiByZW0oOCk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNhYm91dC1jb250ZW50IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBhZGRpbmc6IHJlbSgxMjApIDA7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0cCB7XFxuXFx0XFx0cGFkZGluZzogMCByZW0oMTIwKTtcXG5cXHR9XFxuXFxuXFx0aW1nIHtcXG5cXHRcXHR3aWR0aDogYXV0bztcXG5cXHRcXHRtYXgtaGVpZ2h0OiByZW0oNTU1KTtcXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4ucHJvamVjdC1wYWdlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcblxcdGFzaWRlIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcblxcdFxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRjbHItZ3JheS1kYXJrO1xcblxcdFxcdHdpZHRoOiAyNSU7XFxuXFxuXFx0XFx0dWwge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRwb3NpdGlvbjogc3RpY2t5O1xcblxcdFxcdFxcdHRvcDogcmVtKDgwKTtcXG5cXHRcXHRcXHRnYXA6IHJlbSgyNCk7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHRzZWN0aW9uIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTIwKSAwO1xcblxcdFxcdHdpZHRoOiA3NSU7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGdhcDogcmVtKDEyMCk7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiByZW0oODApO1xcblxcblxcdFxcdC5wcm9qZWN0LXNlY3Rpb24ge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRnYXA6IHJlbSg0OCk7XFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0aDIge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDQwKTtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogMzAwO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRwIHtcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSg3OTUpO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRpbWcge1xcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdFxcdGhlaWdodDogYXV0bztcXG5cXHRcXHRcXHRtYXgtaGVpZ2h0OiByZW0oNDUwKTtcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSg4MDApO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0Ly8gdGhpcyBpcyBmb3IgdGhlIHBvcnRmb2xpbyBwcm9qZWN0XFxuXFx0I3ZlcnNpb24tb25lIHtcXG5cXHRcXHRpbWcge1xcblxcdFxcdFxcdG1heC1oZWlnaHQ6IHJlbSg3MDApO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgeyB1cGRhdGVIZWFkZXJBY3RpdmVMaW5rLCByZW1vdmVIZWFkZXJTdHlsZXMgfTtcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtbGlua3NcIik7XG5cbmZ1bmN0aW9uIHVwZGF0ZUhlYWRlckFjdGl2ZUxpbmsoKSB7XG5cdG5hdi5mb3JFYWNoKChsaW5rKSA9PiB7XG5cdFx0bGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0dXBkYXRlSGVhZGVyU3R5bGVzKGxpbmspO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSGVhZGVyU3R5bGVzKGxpbmspIHtcblx0cmVtb3ZlSGVhZGVyU3R5bGVzKCk7XG5cdGFkZEhlYWRlclN0eWxlcyhsaW5rKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGVhZGVyU3R5bGVzKCkge1xuXHRuYXYuZm9yRWFjaCgoY2hpbGQpID0+IHtcblx0XHRjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLW5hdlwiKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZEhlYWRlclN0eWxlcyhsaW5rKSB7XG5cdGxpbmsuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1uYXZcIik7XG59XG4iLCJleHBvcnQgeyBzY3JvbGxUb1RvcCB9O1xuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi10b3BcIik7XG5cbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2Nyb2xsVG9Ub3ApO1xuXG5mdW5jdGlvbiBzY3JvbGxUb1RvcCgpIHtcblx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbn1cbiIsImV4cG9ydCB7IGluaXQgfTtcbmltcG9ydCB7IHVwZGF0ZUhlYWRlckFjdGl2ZUxpbmsgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IHsgc2Nyb2xsVG9Ub3AgfSBmcm9tIFwiLi9jb21wb25lbnRzL3RvVG9wQnRuXCI7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG5cdHVwZGF0ZUhlYWRlckFjdGl2ZUxpbmsoKTtcblx0c2Nyb2xsVG9Ub3AoKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGluaXQgfSBmcm9tIFwiLi4vaW5pdC5qc1wiO1xuaW1wb3J0IHsgcmVtb3ZlSGVhZGVyU3R5bGVzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyLmpzXCI7XG5pbXBvcnQgXCIuLi8uLi9zY3NzL3N0eWxlcy5zY3NzXCI7XG5cbmluaXQoKTtcbnJlbW92ZUhlYWRlclN0eWxlcygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9