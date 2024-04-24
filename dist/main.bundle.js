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
  color: hsl(0, 0%, 20%);
  background-color: hsl(0, 0%, 85%);
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

h1 {
  font-size: 2rem;
  font-weight: 700;
}

h2 {
  font-size: 1.625rem;
  color: hsl(0, 0%, 100%);
  font-weight: 700;
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
}

header {
  background-color: hsl(208, 88%, 3%);
  color: hsl(0, 0%, 100%);
  top: 0rem;
}

#header-ctn {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1.5625rem 0;
}
#header-ctn #header-left,
#header-ctn #header-right {
  display: flex;
  justify-content: space-between;
  gap: 3.125rem;
}
#header-ctn nav,
#header-ctn #socials {
  display: flex;
  justify-content: space-between;
  gap: 1.875rem;
  align-items: center;
}

a {
  color: hsl(0, 0%, 100%);
  display: flex;
  align-items: center;
  border-bottom: 2px solid hsl(208, 88%, 3%);
}

nav > a {
  border-bottom: 2px solid hsl(208, 88%, 3%);
}

nav > a:hover {
  border-bottom: 2px solid hsl(47, 100%, 50%);
}

i {
  color: hsl(0, 0%, 100%);
  font-size: 1.75rem;
}

i:hover {
  color: hsl(47, 100%, 50%);
}

@media screen and (max-width: 99.375rem) {
  #header-ctn {
    padding: 1.5625rem;
  }
}
#about {
  background-color: hsl(208, 88%, 3%);
  color: hsl(0, 0%, 100%);
  height: 25rem;
  overflow: hidden;
  display: flex;
  align-items: end;
}
#about #about-ctn {
  display: flex;
  align-items: center;
  background: linear-gradient(0.35turn, hsl(189, 80%, 12%), hsl(198, 83%, 18%), hsl(202, 84%, 15%), hsl(211, 85%, 5%));
  gap: 1.5625rem;
  height: 90%;
  margin: 0 auto;
  width: 60%;
  border-radius: 1.5625rem 1.5625rem 0 0;
  padding: 2.5rem 5rem;
  border: 0.3125rem solid hsl(198, 83%, 18%);
  border-bottom: 0;
}
#about #about-ctn #about-content {
  display: flex;
  gap: 1.5625rem;
  flex-direction: column;
  width: 70%;
}
#about #img-ctn {
  width: 30%;
}
#about #img-ctn img {
  max-width: 100%;
  border-radius: 50%;
  filter: drop-shadow(0.4375rem 0.4375rem 0 hsl(208, 69%, 46%));
}

.resume-link {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(47, 100%, 50%);
  color: hsl(0, 0%, 0%);
  border-radius: 3.125rem;
  padding: 0.3125rem 1.875rem;
  font-size: 1rem;
  max-width: 10.9375rem;
}

.resume-link:hover {
  background-color: hsl(47, 100%, 68%);
  color: hsl(0, 0%, 0%);
}

#portfolio {
  background-color: hsl(0, 0%, 20%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.1875rem;
}
#portfolio h2 {
  color: hsl(47, 100%, 50%);
}

#portfolio-ctn {
  padding-top: 2.1875rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5625rem;
}
#portfolio-ctn .portfolio-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: hsl(0, 0%, 100%);
}
#portfolio-ctn .img-ctn {
  display: flex;
  height: 70%;
  overflow: hidden;
}
#portfolio-ctn img {
  object-fit: cover;
  width: 100%;
}
#portfolio-ctn h3 {
  padding-bottom: 1.25rem;
}
#portfolio-ctn a {
  padding: 1.25rem;
}
#portfolio-ctn .btn-ctn {
  display: flex;
  width: 100%;
}
#portfolio-ctn a {
  justify-content: center;
  font-size: 1.125rem;
  width: 100%;
  border: none;
  background-color: hsl(208, 88%, 3%);
  color: hsl(0, 0%, 100%);
}
#portfolio-ctn .code-btn {
  background-color: hsl(208, 69%, 46%);
}
#portfolio-ctn a:hover {
  background-color: hsl(47, 100%, 50%);
  color: hsl(0, 0%, 0%);
  cursor: pointer;
}

@media screen and (max-width: 87.5rem) {
  #portfolio-ctn {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 66.25rem) {
  #portfolio-ctn {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 43.75rem) {
  #portfolio-ctn {
    grid-template-columns: repeat(1, 1fr);
  }
}
#experience {
  background-color: hsl(208, 88%, 3%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.1875rem;
}

#experience-ctn {
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 1.5625rem;
  gap: 0.9375rem;
  color: hsl(0, 0%, 100%);
}
#experience-ctn #experience-list-ctn {
  width: 25%;
  display: flex;
  flex-direction: column;
  border-left: 5px solid hsl(47, 100%, 50%);
}
#experience-ctn #experience-list-ctn .experience-list {
  border-bottom: 2px solid hsl(208, 88%, 3%);
  padding: 0.9375rem;
}
#experience-ctn #experience-list-ctn .experience-list h4 {
  font-size: 1.125rem;
  font-weight: 700;
}
#experience-ctn #experience-list-ctn .experience-list p {
  font-size: 1rem;
}
#experience-ctn #experience-list-ctn .experience-list:hover {
  cursor: pointer;
}
#experience-ctn #experience-list-ctn .active-list {
  border-bottom: 2px solid hsl(47, 100%, 50%);
}
#experience-ctn #experience-list-ctn .active-header {
  color: hsl(47, 100%, 50%);
}
#experience-ctn #experience-details-ctn {
  width: 50%;
  padding: 0.9375rem;
}
#experience-ctn #experience-details-ctn h3,
#experience-ctn #experience-details-ctn h4 {
  display: inline-block;
}
#experience-ctn #experience-details-ctn h3 {
  color: hsl(47, 100%, 50%);
}
#experience-ctn #experience-details-ctn h4 {
  font-weight: 700;
}
#experience-ctn #experience-details-ctn h5 {
  font-size: 1.125rem;
}
#experience-ctn #experience-details-ctn ul {
  padding-left: 1.25rem;
  padding-top: 0.625rem;
  font-size: 1rem;
}
#experience-ctn #experience-details-ctn li {
  line-height: 2;
}
#experience-ctn #experience-details-ctn li::marker {
  color: hsl(47, 100%, 50%);
}

.hidden-details {
  display: none;
}

@media screen and (max-width: 62.5rem) {
  #experience-ctn #experience-list-ctn {
    width: 35%;
  }
  #experience-ctn #experience-details-ctn {
    width: 65%;
  }
}
@media screen and (max-width: 45.3125rem) {
  #experience-ctn #experience-list-ctn {
    display: none;
  }
  #experience-ctn #experience-details-ctn {
    width: 100%;
  }
}
#skills {
  background-color: hsl(0, 0%, 20%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.1875rem;
}
#skills h2 {
  color: hsl(47, 100%, 50%);
}

#skills-ctn {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  gap: 1.5625rem;
  color: hsl(0, 0%, 0%);
  padding-top: 2.1875rem;
}
#skills-ctn .skill {
  box-sizing: border-box;
  background-color: hsl(0, 0%, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(0 0 0.3125rem hsl(0, 0%, 0%));
}
#skills-ctn .skill div {
  padding-top: 0.9375rem;
}
#skills-ctn .skill p {
  padding: 0.9375rem;
}
#skills-ctn .skill img {
  display: block;
  object-fit: contain;
  width: auto;
  height: auto;
  max-height: 3.75rem;
}

@media screen and (max-width: 75rem) {
  #skills-ctn {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media screen and (max-width: 56.25rem) {
  #skills-ctn {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 40.625rem) {
  #skills-ctn {
    grid-template-columns: repeat(2, 1fr);
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/globals/_general.scss","webpack://./src/scss/styles.scss","webpack://./src/scss/globals/_fonts.scss","webpack://./src/scss/globals/_colors.scss","webpack://./src/scss/globals/_reset.scss","webpack://./src/scss/globals/_typography.scss","webpack://./src/scss/globals/_container.scss","webpack://./src/scss/components/_header.scss","webpack://./src/scss/components/_about.scss","webpack://./src/scss/components/_buttons.scss","webpack://./src/scss/components/_portfolio.scss","webpack://./src/scss/components/_experience.scss","webpack://./src/scss/components/_skills.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"../utilities/\" as *;\r\n@use \"colors\" as *;\r\n@use \"fonts\" as *;\r\n\r\nhtml {\r\n\tfont-size: 100%;\r\n}\r\n\r\nbody {\r\n\tfont-family: $font-primary;\r\n\tfont-size: rem(18);\r\n\tcolor: $clr-gray-dk;\r\n\tbackground-color: $clr-gray-lt;\r\n\tline-height: 1.5;\r\n}\r\n","html {\n  font-size: 100%;\n}\n\nbody {\n  font-family: \"Inter\", sans-serf;\n  font-size: 1.125rem;\n  color: hsl(0, 0%, 20%);\n  background-color: hsl(0, 0%, 85%);\n  line-height: 1.5;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n  line-height: 1.1;\n}\n\nh1 {\n  font-size: 2rem;\n  font-weight: 700;\n}\n\nh2 {\n  font-size: 1.625rem;\n  color: hsl(0, 0%, 100%);\n  font-weight: 700;\n}\n\nh3 {\n  font-size: 1.375rem;\n  font-weight: 700;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\n.container {\n  max-width: 99.375rem;\n}\n\nheader {\n  background-color: hsl(208, 88%, 3%);\n  color: hsl(0, 0%, 100%);\n  top: 0rem;\n}\n\n#header-ctn {\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  padding: 1.5625rem 0;\n}\n#header-ctn #header-left,\n#header-ctn #header-right {\n  display: flex;\n  justify-content: space-between;\n  gap: 3.125rem;\n}\n#header-ctn nav,\n#header-ctn #socials {\n  display: flex;\n  justify-content: space-between;\n  gap: 1.875rem;\n  align-items: center;\n}\n\na {\n  color: hsl(0, 0%, 100%);\n  display: flex;\n  align-items: center;\n  border-bottom: 2px solid hsl(208, 88%, 3%);\n}\n\nnav > a {\n  border-bottom: 2px solid hsl(208, 88%, 3%);\n}\n\nnav > a:hover {\n  border-bottom: 2px solid hsl(47, 100%, 50%);\n}\n\ni {\n  color: hsl(0, 0%, 100%);\n  font-size: 1.75rem;\n}\n\ni:hover {\n  color: hsl(47, 100%, 50%);\n}\n\n@media screen and (max-width: 99.375rem) {\n  #header-ctn {\n    padding: 1.5625rem;\n  }\n}\n#about {\n  background-color: hsl(208, 88%, 3%);\n  color: hsl(0, 0%, 100%);\n  height: 25rem;\n  overflow: hidden;\n  display: flex;\n  align-items: end;\n}\n#about #about-ctn {\n  display: flex;\n  align-items: center;\n  background: linear-gradient(0.35turn, hsl(189, 80%, 12%), hsl(198, 83%, 18%), hsl(202, 84%, 15%), hsl(211, 85%, 5%));\n  gap: 1.5625rem;\n  height: 90%;\n  margin: 0 auto;\n  width: 60%;\n  border-radius: 1.5625rem 1.5625rem 0 0;\n  padding: 2.5rem 5rem;\n  border: 0.3125rem solid hsl(198, 83%, 18%);\n  border-bottom: 0;\n}\n#about #about-ctn #about-content {\n  display: flex;\n  gap: 1.5625rem;\n  flex-direction: column;\n  width: 70%;\n}\n#about #img-ctn {\n  width: 30%;\n}\n#about #img-ctn img {\n  max-width: 100%;\n  border-radius: 50%;\n  filter: drop-shadow(0.4375rem 0.4375rem 0 hsl(208, 69%, 46%));\n}\n\n.resume-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: hsl(47, 100%, 50%);\n  color: hsl(0, 0%, 0%);\n  border-radius: 3.125rem;\n  padding: 0.3125rem 1.875rem;\n  font-size: 1rem;\n  max-width: 10.9375rem;\n}\n\n.resume-link:hover {\n  background-color: hsl(47, 100%, 68%);\n  color: hsl(0, 0%, 0%);\n}\n\n#portfolio {\n  background-color: hsl(0, 0%, 20%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2.1875rem;\n}\n#portfolio h2 {\n  color: hsl(47, 100%, 50%);\n}\n\n#portfolio-ctn {\n  padding-top: 2.1875rem;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5625rem;\n}\n#portfolio-ctn .portfolio-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: hsl(0, 0%, 100%);\n}\n#portfolio-ctn .img-ctn {\n  display: flex;\n  height: 70%;\n  overflow: hidden;\n}\n#portfolio-ctn img {\n  object-fit: cover;\n  width: 100%;\n}\n#portfolio-ctn h3 {\n  padding-bottom: 1.25rem;\n}\n#portfolio-ctn a {\n  padding: 1.25rem;\n}\n#portfolio-ctn .btn-ctn {\n  display: flex;\n  width: 100%;\n}\n#portfolio-ctn a {\n  justify-content: center;\n  font-size: 1.125rem;\n  width: 100%;\n  border: none;\n  background-color: hsl(208, 88%, 3%);\n  color: hsl(0, 0%, 100%);\n}\n#portfolio-ctn .code-btn {\n  background-color: hsl(208, 69%, 46%);\n}\n#portfolio-ctn a:hover {\n  background-color: hsl(47, 100%, 50%);\n  color: hsl(0, 0%, 0%);\n  cursor: pointer;\n}\n\n@media screen and (max-width: 87.5rem) {\n  #portfolio-ctn {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media screen and (max-width: 66.25rem) {\n  #portfolio-ctn {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media screen and (max-width: 43.75rem) {\n  #portfolio-ctn {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n#experience {\n  background-color: hsl(208, 88%, 3%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2.1875rem;\n}\n\n#experience-ctn {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  padding-top: 1.5625rem;\n  gap: 0.9375rem;\n  color: hsl(0, 0%, 100%);\n}\n#experience-ctn #experience-list-ctn {\n  width: 25%;\n  display: flex;\n  flex-direction: column;\n  border-left: 5px solid hsl(47, 100%, 50%);\n}\n#experience-ctn #experience-list-ctn .experience-list {\n  border-bottom: 2px solid hsl(208, 88%, 3%);\n  padding: 0.9375rem;\n}\n#experience-ctn #experience-list-ctn .experience-list h4 {\n  font-size: 1.125rem;\n  font-weight: 700;\n}\n#experience-ctn #experience-list-ctn .experience-list p {\n  font-size: 1rem;\n}\n#experience-ctn #experience-list-ctn .experience-list:hover {\n  cursor: pointer;\n}\n#experience-ctn #experience-list-ctn .active-list {\n  border-bottom: 2px solid hsl(47, 100%, 50%);\n}\n#experience-ctn #experience-list-ctn .active-header {\n  color: hsl(47, 100%, 50%);\n}\n#experience-ctn #experience-details-ctn {\n  width: 50%;\n  padding: 0.9375rem;\n}\n#experience-ctn #experience-details-ctn h3,\n#experience-ctn #experience-details-ctn h4 {\n  display: inline-block;\n}\n#experience-ctn #experience-details-ctn h3 {\n  color: hsl(47, 100%, 50%);\n}\n#experience-ctn #experience-details-ctn h4 {\n  font-weight: 700;\n}\n#experience-ctn #experience-details-ctn h5 {\n  font-size: 1.125rem;\n}\n#experience-ctn #experience-details-ctn ul {\n  padding-left: 1.25rem;\n  padding-top: 0.625rem;\n  font-size: 1rem;\n}\n#experience-ctn #experience-details-ctn li {\n  line-height: 2;\n}\n#experience-ctn #experience-details-ctn li::marker {\n  color: hsl(47, 100%, 50%);\n}\n\n.hidden-details {\n  display: none;\n}\n\n@media screen and (max-width: 62.5rem) {\n  #experience-ctn #experience-list-ctn {\n    width: 35%;\n  }\n  #experience-ctn #experience-details-ctn {\n    width: 65%;\n  }\n}\n@media screen and (max-width: 45.3125rem) {\n  #experience-ctn #experience-list-ctn {\n    display: none;\n  }\n  #experience-ctn #experience-details-ctn {\n    width: 100%;\n  }\n}\n#skills {\n  background-color: hsl(0, 0%, 20%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2.1875rem;\n}\n#skills h2 {\n  color: hsl(47, 100%, 50%);\n}\n\n#skills-ctn {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  width: 100%;\n  gap: 1.5625rem;\n  color: hsl(0, 0%, 0%);\n  padding-top: 2.1875rem;\n}\n#skills-ctn .skill {\n  box-sizing: border-box;\n  background-color: hsl(0, 0%, 100%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  filter: drop-shadow(0 0 0.3125rem hsl(0, 0%, 0%));\n}\n#skills-ctn .skill div {\n  padding-top: 0.9375rem;\n}\n#skills-ctn .skill p {\n  padding: 0.9375rem;\n}\n#skills-ctn .skill img {\n  display: block;\n  object-fit: contain;\n  width: auto;\n  height: auto;\n  max-height: 3.75rem;\n}\n\n@media screen and (max-width: 75rem) {\n  #skills-ctn {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media screen and (max-width: 56.25rem) {\n  #skills-ctn {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media screen and (max-width: 40.625rem) {\n  #skills-ctn {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}","$font-primary: \"Inter\", sans-serf;\r\n","// Primary Colors\r\n$clr-primary: hsl(208, 88%, 3%);\r\n$clr-secondary: hsl(47, 100%, 50%);\r\n$clr-secondary-hover: hsl(47, 100%, 68%);\r\n$clr-tertiary: hsl(208, 69%, 46%);\r\n$clr-gradient-one: hsl(189, 80%, 12%);\r\n$clr-gradient-two: hsl(198, 83%, 18%);\r\n$clr-gradient-three: hsl(202, 84%, 15%);\r\n$clr-gradient-four: hsl(211, 85%, 5%);\r\n\r\n// Neutral Colors\r\n$clr-white: hsl(0, 0%, 100%);\r\n$clr-gray-lt: hsl(0, 0%, 85%);\r\n$clr-gray: hsl(0, 0%, 50%);\r\n$clr-gray-dk: hsl(0, 0%, 20%);\r\n$clr-black: hsl(0, 0%, 0%);\r\n","*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont: inherit;\r\n}\r\n\r\nimg,\r\npicture,\r\nsvg {\r\n\tdisplay: block;\r\n}\r\n","@use \"../utilities/\" as *;\r\n@use \"colors\" as *;\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n\tmargin: 0;\r\n\tline-height: 1.1;\r\n}\r\n\r\nh1 {\r\n\tfont-size: rem(32);\r\n\tfont-weight: 700;\r\n}\r\n\r\nh2 {\r\n\tfont-size: rem(26);\r\n\tcolor: $clr-white;\r\n\tfont-weight: 700;\r\n}\r\n\r\nh3 {\r\n\tfont-size: rem(22);\r\n\tfont-weight: 700;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n\ttext-decoration: none;\r\n}\r\n","@use \"../utilities/\" as *;\r\n\r\n.container {\r\n\tmax-width: rem(1590);\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\nheader {\r\n\tbackground-color: $clr-primary;\r\n\tcolor: $clr-white;\r\n\ttop: rem(0);\r\n}\r\n\r\n#header-ctn {\r\n\tmargin: 0 auto;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tpadding: rem(25) 0;\r\n\r\n\t#header-left,\r\n\t#header-right {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\tgap: rem(50);\r\n\t}\r\n\r\n\tnav,\r\n\t#socials {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\tgap: rem(30);\r\n\t\talign-items: center;\r\n\t}\r\n}\r\n\r\na {\r\n\tcolor: $clr-white;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tborder-bottom: 2px solid $clr-primary;\r\n}\r\n\r\nnav > a {\r\n\tborder-bottom: 2px solid $clr-primary;\r\n}\r\n\r\nnav > a:hover {\r\n\tborder-bottom: 2px solid $clr-secondary;\r\n}\r\n\r\ni {\r\n\tcolor: $clr-white;\r\n\tfont-size: rem(28);\r\n}\r\n\r\ni:hover {\r\n\tcolor: $clr-secondary;\r\n}\r\n\r\n@media screen and (max-width: rem(1590)) {\r\n\t#header-ctn {\r\n\t\tpadding: rem(25);\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n#about {\r\n\tbackground-color: $clr-primary;\r\n\tcolor: $clr-white;\r\n\theight: rem(400);\r\n\toverflow: hidden;\r\n\tdisplay: flex;\r\n\talign-items: end;\r\n\r\n\t#about-ctn {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tbackground: linear-gradient(\r\n\t\t\t0.35turn,\r\n\t\t\t$clr-gradient-one,\r\n\t\t\t$clr-gradient-two,\r\n\t\t\t$clr-gradient-three,\r\n\t\t\t$clr-gradient-four\r\n\t\t);\r\n\t\tgap: rem(25);\r\n\t\theight: 90%;\r\n\t\tmargin: 0 auto;\r\n\t\twidth: 60%;\r\n\t\tborder-radius: rem(25) rem(25) 0 0;\r\n\t\tpadding: rem(40) rem(80);\r\n\t\tborder: rem(5) solid $clr-gradient-two;\r\n\t\tborder-bottom: 0;\r\n\r\n\t\t#about-content {\r\n\t\t\tdisplay: flex;\r\n\t\t\tgap: rem(25);\r\n\t\t\tflex-direction: column;\r\n\t\t\twidth: 70%;\r\n\t\t}\r\n\t}\r\n\r\n\t#img-ctn {\r\n\t\twidth: 30%;\r\n\r\n\t\timg {\r\n\t\t\tmax-width: 100%;\r\n\t\t\tborder-radius: 50%;\r\n\t\t\tfilter: drop-shadow(rem(7) rem(7) 0 $clr-tertiary);\r\n\t\t}\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n.resume-link {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tbackground-color: $clr-secondary;\r\n\tcolor: $clr-black;\r\n\tborder-radius: rem(50);\r\n\tpadding: rem(5) rem(30);\r\n\tfont-size: rem(16);\r\n\tmax-width: rem(175);\r\n}\r\n\r\n.resume-link:hover {\r\n\tbackground-color: $clr-secondary-hover;\r\n\tcolor: $clr-black;\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n#portfolio {\r\n\tbackground-color: $clr-gray-dk;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tpadding: rem(35);\r\n\r\n\th2 {\r\n\t\tcolor: $clr-secondary;\r\n\t}\r\n}\r\n\r\n#portfolio-ctn {\r\n\tpadding-top: rem(35);\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(4, 1fr);\r\n\tgap: rem(25);\r\n\r\n\t.portfolio-card {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tcolor: $clr-white;\r\n\t}\r\n\r\n\t.img-ctn {\r\n\t\tdisplay: flex;\r\n\t\theight: 70%;\r\n\t\toverflow: hidden;\r\n\t}\r\n\r\n\timg {\r\n\t\tobject-fit: cover;\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\th3 {\r\n\t\tpadding-bottom: rem(20);\r\n\t}\r\n\r\n\ta {\r\n\t\tpadding: rem(20);\r\n\t}\r\n\r\n\t.btn-ctn {\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\ta {\r\n\t\tjustify-content: center;\r\n\t\tfont-size: rem(18);\r\n\t\twidth: 100%;\r\n\t\tborder: none;\r\n\t\tbackground-color: $clr-primary;\r\n\t\tcolor: $clr-white;\r\n\t}\r\n\r\n\t.code-btn {\r\n\t\tbackground-color: $clr-tertiary;\r\n\t}\r\n\r\n\ta:hover {\r\n\t\tbackground-color: $clr-secondary;\r\n\t\tcolor: $clr-black;\r\n\t\tcursor: pointer;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(1400)) {\r\n\t#portfolio-ctn {\r\n\t\tgrid-template-columns: repeat(3, 1fr);\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(1060)) {\r\n\t#portfolio-ctn {\r\n\t\tgrid-template-columns: repeat(2, 1fr);\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(700)) {\r\n\t#portfolio-ctn {\r\n\t\tgrid-template-columns: repeat(1, 1fr);\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n#experience {\r\n\tbackground-color: $clr-primary;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tpadding: rem(35);\r\n}\r\n\r\n#experience-ctn {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tjustify-content: center;\r\n\tpadding-top: rem(25);\r\n\tgap: rem(15);\r\n\tcolor: $clr-white;\r\n\r\n\t#experience-list-ctn {\r\n\t\twidth: 25%;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tborder-left: 5px solid $clr-secondary;\r\n\r\n\t\t.experience-list {\r\n\t\t\tborder-bottom: 2px solid $clr-primary;\r\n\t\t\tpadding: rem(15);\r\n\r\n\t\t\th4 {\r\n\t\t\t\tfont-size: rem(18);\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t}\r\n\r\n\t\t\tp {\r\n\t\t\t\tfont-size: rem(16);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.experience-list:hover {\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\r\n\t\t.active-list {\r\n\t\t\tborder-bottom: 2px solid $clr-secondary;\r\n\t\t}\r\n\r\n\t\t.active-header {\r\n\t\t\tcolor: $clr-secondary;\r\n\t\t}\r\n\t}\r\n\r\n\t#experience-details-ctn {\r\n\t\twidth: 50%;\r\n\t\tpadding: rem(15);\r\n\r\n\t\th3,\r\n\t\th4 {\r\n\t\t\tdisplay: inline-block;\r\n\t\t}\r\n\r\n\t\th3 {\r\n\t\t\tcolor: $clr-secondary;\r\n\t\t}\r\n\r\n\t\th4 {\r\n\t\t\tfont-weight: 700;\r\n\t\t}\r\n\r\n\t\th5 {\r\n\t\t\tfont-size: rem(18);\r\n\t\t}\r\n\r\n\t\tul {\r\n\t\t\tpadding-left: rem(20);\r\n\t\t\tpadding-top: rem(10);\r\n\t\t\tfont-size: rem(16);\r\n\t\t}\r\n\r\n\t\tli {\r\n\t\t\tline-height: 2;\r\n\t\t}\r\n\r\n\t\tli::marker {\r\n\t\t\tcolor: $clr-secondary;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.hidden-details {\r\n\tdisplay: none;\r\n}\r\n\r\n@media screen and (max-width: rem(1000)) {\r\n\t#experience-ctn {\r\n\t\t#experience-list-ctn {\r\n\t\t\twidth: 35%;\r\n\t\t}\r\n\r\n\t\t#experience-details-ctn {\r\n\t\t\twidth: 65%;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(725)) {\r\n\t#experience-ctn {\r\n\t\t#experience-list-ctn {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n\t\t#experience-details-ctn {\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#skills {\n\tbackground-color: $clr-gray-dk;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: rem(35);\n\n\th2 {\n\t\tcolor: $clr-secondary;\n\t}\n}\n\n#skills-ctn {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(6, 1fr);\n\twidth: 100%;\n\tgap: rem(25);\n\tcolor: $clr-black;\n\tpadding-top: rem(35);\n\n\t.skill {\n\t\tbox-sizing: border-box;\n\t\tbackground-color: $clr-white;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tfilter: drop-shadow(0 0 rem(5) $clr-black);\n\n\t\tdiv {\n\t\t\tpadding-top: rem(15);\n\t\t}\n\n\t\tp {\n\t\t\tpadding: rem(15);\n\t\t}\n\n\t\timg {\n\t\t\tdisplay: block;\n\t\t\tobject-fit: contain;\n\t\t\twidth: auto;\n\t\t\theight: auto;\n\t\t\tmax-height: rem(60);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1200)) {\n\t#skills-ctn {\n\t\tgrid-template-columns: repeat(4, 1fr);\n\t}\n}\n\n@media screen and (max-width: rem(900)) {\n\t#skills-ctn {\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t}\n}\n\n@media screen and (max-width: rem(650)) {\n\t#skills-ctn {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t}\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/resume.pdf":
/*!*******************************!*\
  !*** ./src/assets/resume.pdf ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/pdf/resume.pdf");

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

/***/ "./src/js/components/experience.js":
/*!*****************************************!*\
  !*** ./src/js/components/experience.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadExperience: () => (/* binding */ loadExperience)
/* harmony export */ });


const expList = Array.from(document.querySelectorAll(".experience-list"));

function loadExperience() {
	loadExperienceEventListener();
	console.log(expList[1]);
}

function loadExperienceEventListener() {
	expList.map((exp) => {
		exp.addEventListener("click", experienceClickEvent);
	});
}

function experienceClickEvent() {
	console.log(this);
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
/* harmony import */ var _components_experience__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/experience */ "./src/js/components/experience.js");



function init() {
	(0,_components_experience__WEBPACK_IMPORTED_MODULE_0__.loadExperience)();
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/init.js */ "./src/js/init.js");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");
/* harmony import */ var _assets_resume_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/resume.pdf */ "./src/assets/resume.pdf");




(0,_js_init_js__WEBPACK_IMPORTED_MODULE_0__.init)();

const resumeLink = Array.from(document.querySelectorAll(".resume-link"));

resumeLink.forEach((button) => {
	button.href = _assets_resume_pdf__WEBPACK_IMPORTED_MODULE_2__["default"];
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxzb0JBQXNvQixVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sUUFBUSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLFFBQVEsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxPQUFPLFVBQVUsV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksT0FBTyxNQUFNLFlBQVksUUFBUSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxRQUFRLE1BQU0sVUFBVSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsUUFBUSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxX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QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiMEI7O0FBRTFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQnlEO0FBQ3pDO0FBQ2hCO0FBQ0E7QUFDQSxDQUFDLHNFQUFjO0FBQ2Y7Ozs7Ozs7VUNMQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ1I7QUFDYTtBQUN6QztBQUNBLGlEQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDBEQUFNO0FBQ3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXNzZXRzL3Jlc3VtZS5wZGYiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzPzMyMWYiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvZXhwZXJpZW5jZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2luaXQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyZjtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMjAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA4NSUpO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250OiBpbmhlcml0O1xufVxuXG5pbWcsXG5waWN0dXJlLFxuc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmgxLFxuaDIsXG5oMyB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjYyNXJlbTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxLjM3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYSxcbmE6dmlzaXRlZCxcbmE6YWN0aXZlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5OS4zNzVyZW07XG59XG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDgsIDg4JSwgMyUpO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgdG9wOiAwcmVtO1xufVxuXG4jaGVhZGVyLWN0biB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEuNTYyNXJlbSAwO1xufVxuI2hlYWRlci1jdG4gI2hlYWRlci1sZWZ0LFxuI2hlYWRlci1jdG4gI2hlYWRlci1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAzLjEyNXJlbTtcbn1cbiNoZWFkZXItY3RuIG5hdixcbiNoZWFkZXItY3RuICNzb2NpYWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEuODc1cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5hIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBoc2woMjA4LCA4OCUsIDMlKTtcbn1cblxubmF2ID4gYSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBoc2woMjA4LCA4OCUsIDMlKTtcbn1cblxubmF2ID4gYTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBoc2woNDcsIDEwMCUsIDUwJSk7XG59XG5cbmkge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuXG5pOmhvdmVyIHtcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkuMzc1cmVtKSB7XG4gICNoZWFkZXItY3RuIHtcbiAgICBwYWRkaW5nOiAxLjU2MjVyZW07XG4gIH1cbn1cbiNhYm91dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDgsIDg4JSwgMyUpO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgaGVpZ2h0OiAyNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbn1cbiNhYm91dCAjYWJvdXQtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDAuMzV0dXJuLCBoc2woMTg5LCA4MCUsIDEyJSksIGhzbCgxOTgsIDgzJSwgMTglKSwgaHNsKDIwMiwgODQlLCAxNSUpLCBoc2woMjExLCA4NSUsIDUlKSk7XG4gIGdhcDogMS41NjI1cmVtO1xuICBoZWlnaHQ6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA2MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEuNTYyNXJlbSAxLjU2MjVyZW0gMCAwO1xuICBwYWRkaW5nOiAyLjVyZW0gNXJlbTtcbiAgYm9yZGVyOiAwLjMxMjVyZW0gc29saWQgaHNsKDE5OCwgODMlLCAxOCUpO1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuI2Fib3V0ICNhYm91dC1jdG4gI2Fib3V0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuNTYyNXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDcwJTtcbn1cbiNhYm91dCAjaW1nLWN0biB7XG4gIHdpZHRoOiAzMCU7XG59XG4jYWJvdXQgI2ltZy1jdG4gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMC40Mzc1cmVtIDAuNDM3NXJlbSAwIGhzbCgyMDgsIDY5JSwgNDYlKSk7XG59XG5cbi5yZXN1bWUtbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMy4xMjVyZW07XG4gIHBhZGRpbmc6IDAuMzEyNXJlbSAxLjg3NXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXgtd2lkdGg6IDEwLjkzNzVyZW07XG59XG5cbi5yZXN1bWUtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0NywgMTAwJSwgNjglKTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xufVxuXG4jcG9ydGZvbGlvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAyMCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyLjE4NzVyZW07XG59XG4jcG9ydGZvbGlvIGgyIHtcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcbn1cblxuI3BvcnRmb2xpby1jdG4ge1xuICBwYWRkaW5nLXRvcDogMi4xODc1cmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBnYXA6IDEuNTYyNXJlbTtcbn1cbiNwb3J0Zm9saW8tY3RuIC5wb3J0Zm9saW8tY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbn1cbiNwb3J0Zm9saW8tY3RuIC5pbWctY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA3MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jcG9ydGZvbGlvLWN0biBpbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4jcG9ydGZvbGlvLWN0biBoMyB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xufVxuI3BvcnRmb2xpby1jdG4gYSB7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG59XG4jcG9ydGZvbGlvLWN0biAuYnRuLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuI3BvcnRmb2xpby1jdG4gYSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA4OCUsIDMlKTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG59XG4jcG9ydGZvbGlvLWN0biAuY29kZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA2OSUsIDQ2JSk7XG59XG4jcG9ydGZvbGlvLWN0biBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODcuNXJlbSkge1xuICAjcG9ydGZvbGlvLWN0biB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjYuMjVyZW0pIHtcbiAgI3BvcnRmb2xpby1jdG4ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzLjc1cmVtKSB7XG4gICNwb3J0Zm9saW8tY3RuIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICB9XG59XG4jZXhwZXJpZW5jZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDgsIDg4JSwgMyUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyLjE4NzVyZW07XG59XG5cbiNleHBlcmllbmNlLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEuNTYyNXJlbTtcbiAgZ2FwOiAwLjkzNzVyZW07XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIHtcbiAgd2lkdGg6IDI1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBoc2woNDcsIDEwMCUsIDUwJSk7XG59XG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4gLmV4cGVyaWVuY2UtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBoc2woMjA4LCA4OCUsIDMlKTtcbiAgcGFkZGluZzogMC45Mzc1cmVtO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5leHBlcmllbmNlLWxpc3QgaDQge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5leHBlcmllbmNlLWxpc3QgcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biAuZXhwZXJpZW5jZS1saXN0OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5hY3RpdmUtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBoc2woNDcsIDEwMCUsIDUwJSk7XG59XG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4gLmFjdGl2ZS1oZWFkZXIge1xuICBjb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIHtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMC45Mzc1cmVtO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGgzLFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGg0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGgzIHtcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBoNCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gaDUge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICBwYWRkaW5nLXRvcDogMC42MjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBsaSB7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGxpOjptYXJrZXIge1xuICBjb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xufVxuXG4uaGlkZGVuLWRldGFpbHMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2Mi41cmVtKSB7XG4gICNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biB7XG4gICAgd2lkdGg6IDM1JTtcbiAgfVxuICAjZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4ge1xuICAgIHdpZHRoOiA2NSU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1LjMxMjVyZW0pIHtcbiAgI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiNza2lsbHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDIwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIuMTg3NXJlbTtcbn1cbiNza2lsbHMgaDIge1xuICBjb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xufVxuXG4jc2tpbGxzLWN0biB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6IDEuNTYyNXJlbTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xuICBwYWRkaW5nLXRvcDogMi4xODc1cmVtO1xufVxuI3NraWxscy1jdG4gLnNraWxsIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC4zMTI1cmVtIGhzbCgwLCAwJSwgMCUpKTtcbn1cbiNza2lsbHMtY3RuIC5za2lsbCBkaXYge1xuICBwYWRkaW5nLXRvcDogMC45Mzc1cmVtO1xufVxuI3NraWxscy1jdG4gLnNraWxsIHAge1xuICBwYWRkaW5nOiAwLjkzNzVyZW07XG59XG4jc2tpbGxzLWN0biAuc2tpbGwgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDMuNzVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1cmVtKSB7XG4gICNza2lsbHMtY3RuIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNXJlbSkge1xuICAjc2tpbGxzLWN0biB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAuNjI1cmVtKSB7XG4gICNza2lsbHMtY3RuIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19nZW5lcmFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19jb250YWluZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2Fib3V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fcG9ydGZvbGlvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2V4cGVyaWVuY2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fc2tpbGxzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDQyxlQUFBO0FDSEQ7O0FETUE7RUFDQywrQkVUYztFRlVkLG1CQUFBO0VBQ0Esc0JHR2E7RUhGYixpQ0FBQTtFQUNBLGdCQUFBO0FDSEQ7O0FHVkE7OztFQUdDLHNCQUFBO0FIYUQ7O0FHVkE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUhhRDs7QUdWQTs7O0VBR0MsY0FBQTtBSGFEOztBSXpCQTs7O0VBR0MsU0FBQTtFQUNBLGdCQUFBO0FKNEJEOztBSXpCQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBSjRCRDs7QUl6QkE7RUFDQyxtQkFBQTtFQUNBLHVCRk5XO0VFT1gsZ0JBQUE7QUo0QkQ7O0FJekJBO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtBSjRCRDs7QUl6QkE7OztFQUdDLHFCQUFBO0FKNEJEOztBS3ZEQTtFQUNDLG9CQUFBO0FMMEREOztBTTFEQTtFQUNDLG1DSkhhO0VJSWIsdUJKTVc7RUlMWCxTQUFBO0FONkREOztBTTFEQTtFQUNDLGNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBTjZERDtBTTNEQzs7RUFFQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FONkRGO0FNMURDOztFQUVDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBTjRERjs7QU14REE7RUFDQyx1QkpyQlc7RUlzQlgsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QU4yREQ7O0FNeERBO0VBQ0MsMENBQUE7QU4yREQ7O0FNeERBO0VBQ0MsMkNBQUE7QU4yREQ7O0FNeERBO0VBQ0MsdUJKcENXO0VJcUNYLGtCQUFBO0FOMkREOztBTXhEQTtFQUNDLHlCSmxEZTtBRjZHaEI7O0FNeERBO0VBQ0M7SUFDQyxrQkFBQTtFTjJEQTtBQUNGO0FPbEhBO0VB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VWE7RVNUYixhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FYK1VEO0FXN1VDO0VBQ0MseUJUVGM7QUZ3VmhCOztBVzNVQTtFQUNDLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EscUJUTFc7RVNNWCxzQkFBQTtBWDhVRDtBVzVVQztFQUNDLHNCQUFBO0VBQ0Esa0NUZFU7RVNlVixhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0FYOFVGO0FXNVVFO0VBQ0Msc0JBQUE7QVg4VUg7QVczVUU7RUFDQyxrQkFBQTtBWDZVSDtBVzFVRTtFQUNDLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QVg0VUg7O0FXdlVBO0VBQ0M7SUFDQyxxQ0FBQTtFWDBVQTtBQUNGO0FXdlVBO0VBQ0M7SUFDQyxxQ0FBQTtFWHlVQTtBQUNGO0FXdFVBO0VBQ0M7SUFDQyxxQ0FBQTtFWHdVQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiY29sb3JzXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcImZvbnRzXFxcIiBhcyAqO1xcclxcblxcclxcbmh0bWwge1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuXFx0Zm9udC1zaXplOiByZW0oMTgpO1xcclxcblxcdGNvbG9yOiAkY2xyLWdyYXktZGs7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1ncmF5LWx0O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxufVxcclxcblwiLFwiaHRtbCB7XFxuICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyZjtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBjb2xvcjogaHNsKDAsIDAlLCAyMCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA4NSUpO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyB7XFxuICBtYXJnaW46IDA7XFxuICBsaW5lLWhlaWdodDogMS4xO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuNjI1cmVtO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDEuMzc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogOTkuMzc1cmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOCwgODglLCAzJSk7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIHRvcDogMHJlbTtcXG59XFxuXFxuI2hlYWRlci1jdG4ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMS41NjI1cmVtIDA7XFxufVxcbiNoZWFkZXItY3RuICNoZWFkZXItbGVmdCxcXG4jaGVhZGVyLWN0biAjaGVhZGVyLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDMuMTI1cmVtO1xcbn1cXG4jaGVhZGVyLWN0biBuYXYsXFxuI2hlYWRlci1jdG4gI3NvY2lhbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMS44NzVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgaHNsKDIwOCwgODglLCAzJSk7XFxufVxcblxcbm5hdiA+IGEge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGhzbCgyMDgsIDg4JSwgMyUpO1xcbn1cXG5cXG5uYXYgPiBhOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBoc2woNDcsIDEwMCUsIDUwJSk7XFxufVxcblxcbmkge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBmb250LXNpemU6IDEuNzVyZW07XFxufVxcblxcbmk6aG92ZXIge1xcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkuMzc1cmVtKSB7XFxuICAjaGVhZGVyLWN0biB7XFxuICAgIHBhZGRpbmc6IDEuNTYyNXJlbTtcXG4gIH1cXG59XFxuI2Fib3V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDgsIDg4JSwgMyUpO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBoZWlnaHQ6IDI1cmVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbn1cXG4jYWJvdXQgI2Fib3V0LWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwLjM1dHVybiwgaHNsKDE4OSwgODAlLCAxMiUpLCBoc2woMTk4LCA4MyUsIDE4JSksIGhzbCgyMDIsIDg0JSwgMTUlKSwgaHNsKDIxMSwgODUlLCA1JSkpO1xcbiAgZ2FwOiAxLjU2MjVyZW07XFxuICBoZWlnaHQ6IDkwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNTYyNXJlbSAxLjU2MjVyZW0gMCAwO1xcbiAgcGFkZGluZzogMi41cmVtIDVyZW07XFxuICBib3JkZXI6IDAuMzEyNXJlbSBzb2xpZCBoc2woMTk4LCA4MyUsIDE4JSk7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG4jYWJvdXQgI2Fib3V0LWN0biAjYWJvdXQtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjU2MjVyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuI2Fib3V0ICNpbWctY3RuIHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcbiNhYm91dCAjaW1nLWN0biBpbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjQzNzVyZW0gMC40Mzc1cmVtIDAgaHNsKDIwOCwgNjklLCA0NiUpKTtcXG59XFxuXFxuLnJlc3VtZS1saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxuICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcXG4gIHBhZGRpbmc6IDAuMzEyNXJlbSAxLjg3NXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1heC13aWR0aDogMTAuOTM3NXJlbTtcXG59XFxuXFxuLnJlc3VtZS1saW5rOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0NywgMTAwJSwgNjglKTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDAlKTtcXG59XFxuXFxuI3BvcnRmb2xpbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDIwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyLjE4NzVyZW07XFxufVxcbiNwb3J0Zm9saW8gaDIge1xcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcXG59XFxuXFxuI3BvcnRmb2xpby1jdG4ge1xcbiAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ2FwOiAxLjU2MjVyZW07XFxufVxcbiNwb3J0Zm9saW8tY3RuIC5wb3J0Zm9saW8tY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbn1cXG4jcG9ydGZvbGlvLWN0biAuaW1nLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4jcG9ydGZvbGlvLWN0biBpbWcge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuI3BvcnRmb2xpby1jdG4gaDMge1xcbiAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XFxufVxcbiNwb3J0Zm9saW8tY3RuIGEge1xcbiAgcGFkZGluZzogMS4yNXJlbTtcXG59XFxuI3BvcnRmb2xpby1jdG4gLmJ0bi1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4jcG9ydGZvbGlvLWN0biBhIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOCwgODglLCAzJSk7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG59XFxuI3BvcnRmb2xpby1jdG4gLmNvZGUtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDgsIDY5JSwgNDYlKTtcXG59XFxuI3BvcnRmb2xpby1jdG4gYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg3LjVyZW0pIHtcXG4gICNwb3J0Zm9saW8tY3RuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjYuMjVyZW0pIHtcXG4gICNwb3J0Zm9saW8tY3RuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMuNzVyZW0pIHtcXG4gICNwb3J0Zm9saW8tY3RuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXG4gIH1cXG59XFxuI2V4cGVyaWVuY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOCwgODglLCAzJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyLjE4NzVyZW07XFxufVxcblxcbiNleHBlcmllbmNlLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxLjU2MjVyZW07XFxuICBnYXA6IDAuOTM3NXJlbTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4ge1xcbiAgd2lkdGg6IDI1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBoc2woNDcsIDEwMCUsIDUwJSk7XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biAuZXhwZXJpZW5jZS1saXN0IHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBoc2woMjA4LCA4OCUsIDMlKTtcXG4gIHBhZGRpbmc6IDAuOTM3NXJlbTtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5leHBlcmllbmNlLWxpc3QgaDQge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biAuZXhwZXJpZW5jZS1saXN0IHAge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4gLmV4cGVyaWVuY2UtbGlzdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biAuYWN0aXZlLWxpc3Qge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGhzbCg0NywgMTAwJSwgNTAlKTtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5hY3RpdmUtaGVhZGVyIHtcXG4gIGNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biB7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMC45Mzc1cmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gaDMsXFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGg0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGgzIHtcXG4gIGNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBoNCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gaDUge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIHVsIHtcXG4gIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjYyNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGxpIHtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gbGk6Om1hcmtlciB7XFxuICBjb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xcbn1cXG5cXG4uaGlkZGVuLWRldGFpbHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIuNXJlbSkge1xcbiAgI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIHtcXG4gICAgd2lkdGg6IDM1JTtcXG4gIH1cXG4gICNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biB7XFxuICAgIHdpZHRoOiA2NSU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1LjMxMjVyZW0pIHtcXG4gICNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAjZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuI3NraWxscyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDIwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyLjE4NzVyZW07XFxufVxcbiNza2lsbHMgaDIge1xcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcXG59XFxuXFxuI3NraWxscy1jdG4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogMS41NjI1cmVtO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xcbiAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcXG59XFxuI3NraWxscy1jdG4gLnNraWxsIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC4zMTI1cmVtIGhzbCgwLCAwJSwgMCUpKTtcXG59XFxuI3NraWxscy1jdG4gLnNraWxsIGRpdiB7XFxuICBwYWRkaW5nLXRvcDogMC45Mzc1cmVtO1xcbn1cXG4jc2tpbGxzLWN0biAuc2tpbGwgcCB7XFxuICBwYWRkaW5nOiAwLjkzNzVyZW07XFxufVxcbiNza2lsbHMtY3RuIC5za2lsbCBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiAzLjc1cmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NXJlbSkge1xcbiAgI3NraWxscy1jdG4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNXJlbSkge1xcbiAgI3NraWxscy1jdG4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MC42MjVyZW0pIHtcXG4gICNza2lsbHMtY3RuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XCIsXCIkZm9udC1wcmltYXJ5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmY7XFxyXFxuXCIsXCIvLyBQcmltYXJ5IENvbG9yc1xcclxcbiRjbHItcHJpbWFyeTogaHNsKDIwOCwgODglLCAzJSk7XFxyXFxuJGNsci1zZWNvbmRhcnk6IGhzbCg0NywgMTAwJSwgNTAlKTtcXHJcXG4kY2xyLXNlY29uZGFyeS1ob3ZlcjogaHNsKDQ3LCAxMDAlLCA2OCUpO1xcclxcbiRjbHItdGVydGlhcnk6IGhzbCgyMDgsIDY5JSwgNDYlKTtcXHJcXG4kY2xyLWdyYWRpZW50LW9uZTogaHNsKDE4OSwgODAlLCAxMiUpO1xcclxcbiRjbHItZ3JhZGllbnQtdHdvOiBoc2woMTk4LCA4MyUsIDE4JSk7XFxyXFxuJGNsci1ncmFkaWVudC10aHJlZTogaHNsKDIwMiwgODQlLCAxNSUpO1xcclxcbiRjbHItZ3JhZGllbnQtZm91cjogaHNsKDIxMSwgODUlLCA1JSk7XFxyXFxuXFxyXFxuLy8gTmV1dHJhbCBDb2xvcnNcXHJcXG4kY2xyLXdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xcclxcbiRjbHItZ3JheS1sdDogaHNsKDAsIDAlLCA4NSUpO1xcclxcbiRjbHItZ3JheTogaHNsKDAsIDAlLCA1MCUpO1xcclxcbiRjbHItZ3JheS1kazogaHNsKDAsIDAlLCAyMCUpO1xcclxcbiRjbHItYmxhY2s6IGhzbCgwLCAwJSwgMCUpO1xcclxcblwiLFwiKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmltZyxcXHJcXG5waWN0dXJlLFxcclxcbnN2ZyB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCJjb2xvcnNcXFwiIGFzICo7XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS4xO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuXFx0Zm9udC1zaXplOiByZW0oMzIpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG5cXHRmb250LXNpemU6IHJlbSgyNik7XFxyXFxuXFx0Y29sb3I6ICRjbHItd2hpdGU7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcblxcdGZvbnQtc2l6ZTogcmVtKDIyKTtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6dmlzaXRlZCxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuXFx0bWF4LXdpZHRoOiByZW0oMTU5MCk7XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItcHJpbWFyeTtcXHJcXG5cXHRjb2xvcjogJGNsci13aGl0ZTtcXHJcXG5cXHR0b3A6IHJlbSgwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlci1jdG4ge1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdHBhZGRpbmc6IHJlbSgyNSkgMDtcXHJcXG5cXHJcXG5cXHQjaGVhZGVyLWxlZnQsXFxyXFxuXFx0I2hlYWRlci1yaWdodCB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0Z2FwOiByZW0oNTApO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRuYXYsXFxyXFxuXFx0I3NvY2lhbHMge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdGdhcDogcmVtKDMwKTtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuXFx0Y29sb3I6ICRjbHItd2hpdGU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkY2xyLXByaW1hcnk7XFxyXFxufVxcclxcblxcclxcbm5hdiA+IGEge1xcclxcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkY2xyLXByaW1hcnk7XFxyXFxufVxcclxcblxcclxcbm5hdiA+IGE6aG92ZXIge1xcclxcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkY2xyLXNlY29uZGFyeTtcXHJcXG59XFxyXFxuXFxyXFxuaSB7XFxyXFxuXFx0Y29sb3I6ICRjbHItd2hpdGU7XFxyXFxuXFx0Zm9udC1zaXplOiByZW0oMjgpO1xcclxcbn1cXHJcXG5cXHJcXG5pOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogJGNsci1zZWNvbmRhcnk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNTkwKSkge1xcclxcblxcdCNoZWFkZXItY3RuIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiByZW0oMjUpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcblxcclxcbiNhYm91dCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1wcmltYXJ5O1xcclxcblxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcclxcblxcdGhlaWdodDogcmVtKDQwMCk7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBlbmQ7XFxyXFxuXFxyXFxuXFx0I2Fib3V0LWN0biB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG5cXHRcXHRcXHQwLjM1dHVybixcXHJcXG5cXHRcXHRcXHQkY2xyLWdyYWRpZW50LW9uZSxcXHJcXG5cXHRcXHRcXHQkY2xyLWdyYWRpZW50LXR3byxcXHJcXG5cXHRcXHRcXHQkY2xyLWdyYWRpZW50LXRocmVlLFxcclxcblxcdFxcdFxcdCRjbHItZ3JhZGllbnQtZm91clxcclxcblxcdFxcdCk7XFxyXFxuXFx0XFx0Z2FwOiByZW0oMjUpO1xcclxcblxcdFxcdGhlaWdodDogOTAlO1xcclxcblxcdFxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdFxcdHdpZHRoOiA2MCU7XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogcmVtKDI1KSByZW0oMjUpIDAgMDtcXHJcXG5cXHRcXHRwYWRkaW5nOiByZW0oNDApIHJlbSg4MCk7XFxyXFxuXFx0XFx0Ym9yZGVyOiByZW0oNSkgc29saWQgJGNsci1ncmFkaWVudC10d287XFxyXFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogMDtcXHJcXG5cXHJcXG5cXHRcXHQjYWJvdXQtY29udGVudCB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRnYXA6IHJlbSgyNSk7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHR3aWR0aDogNzAlO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I2ltZy1jdG4ge1xcclxcblxcdFxcdHdpZHRoOiAzMCU7XFxyXFxuXFxyXFxuXFx0XFx0aW1nIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdFxcdFxcdGZpbHRlcjogZHJvcC1zaGFkb3cocmVtKDcpIHJlbSg3KSAwICRjbHItdGVydGlhcnkpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5cXHJcXG4ucmVzdW1lLWxpbmsge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLXNlY29uZGFyeTtcXHJcXG5cXHRjb2xvcjogJGNsci1ibGFjaztcXHJcXG5cXHRib3JkZXItcmFkaXVzOiByZW0oNTApO1xcclxcblxcdHBhZGRpbmc6IHJlbSg1KSByZW0oMzApO1xcclxcblxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXHJcXG5cXHRtYXgtd2lkdGg6IHJlbSgxNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdW1lLWxpbms6aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItc2Vjb25kYXJ5LWhvdmVyO1xcclxcblxcdGNvbG9yOiAkY2xyLWJsYWNrO1xcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuXFxyXFxuI3BvcnRmb2xpbyB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1ncmF5LWRrO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IHJlbSgzNSk7XFxyXFxuXFxyXFxuXFx0aDIge1xcclxcblxcdFxcdGNvbG9yOiAkY2xyLXNlY29uZGFyeTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbiNwb3J0Zm9saW8tY3RuIHtcXHJcXG5cXHRwYWRkaW5nLXRvcDogcmVtKDM1KTtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxyXFxuXFx0Z2FwOiByZW0oMjUpO1xcclxcblxcclxcblxcdC5wb3J0Zm9saW8tY2FyZCB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0Y29sb3I6ICRjbHItd2hpdGU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5pbWctY3RuIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGhlaWdodDogNzAlO1xcclxcblxcdFxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGltZyB7XFxyXFxuXFx0XFx0b2JqZWN0LWZpdDogY292ZXI7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGgzIHtcXHJcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogcmVtKDIwKTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0YSB7XFxyXFxuXFx0XFx0cGFkZGluZzogcmVtKDIwKTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmJ0bi1jdG4ge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGEge1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDE4KTtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1wcmltYXJ5O1xcclxcblxcdFxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuY29kZS1idG4ge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItdGVydGlhcnk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGE6aG92ZXIge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItc2Vjb25kYXJ5O1xcclxcblxcdFxcdGNvbG9yOiAkY2xyLWJsYWNrO1xcclxcblxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNDAwKSkge1xcclxcblxcdCNwb3J0Zm9saW8tY3RuIHtcXHJcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDEwNjApKSB7XFxyXFxuXFx0I3BvcnRmb2xpby1jdG4ge1xcclxcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzAwKSkge1xcclxcblxcdCNwb3J0Zm9saW8tY3RuIHtcXHJcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcblxcclxcbiNleHBlcmllbmNlIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLXByaW1hcnk7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogcmVtKDM1KTtcXHJcXG59XFxyXFxuXFxyXFxuI2V4cGVyaWVuY2UtY3RuIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdHBhZGRpbmctdG9wOiByZW0oMjUpO1xcclxcblxcdGdhcDogcmVtKDE1KTtcXHJcXG5cXHRjb2xvcjogJGNsci13aGl0ZTtcXHJcXG5cXHJcXG5cXHQjZXhwZXJpZW5jZS1saXN0LWN0biB7XFxyXFxuXFx0XFx0d2lkdGg6IDI1JTtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0Ym9yZGVyLWxlZnQ6IDVweCBzb2xpZCAkY2xyLXNlY29uZGFyeTtcXHJcXG5cXHJcXG5cXHRcXHQuZXhwZXJpZW5jZS1saXN0IHtcXHJcXG5cXHRcXHRcXHRib3JkZXItYm90dG9tOiAycHggc29saWQgJGNsci1wcmltYXJ5O1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IHJlbSgxNSk7XFxyXFxuXFxyXFxuXFx0XFx0XFx0aDQge1xcclxcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDE4KTtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRwIHtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQuZXhwZXJpZW5jZS1saXN0OmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5hY3RpdmUtbGlzdCB7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRjbHItc2Vjb25kYXJ5O1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQuYWN0aXZlLWhlYWRlciB7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICRjbHItc2Vjb25kYXJ5O1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I2V4cGVyaWVuY2UtZGV0YWlscy1jdG4ge1xcclxcblxcdFxcdHdpZHRoOiA1MCU7XFxyXFxuXFx0XFx0cGFkZGluZzogcmVtKDE1KTtcXHJcXG5cXHJcXG5cXHRcXHRoMyxcXHJcXG5cXHRcXHRoNCB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRoMyB7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICRjbHItc2Vjb25kYXJ5O1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRoNCB7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0aDUge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDE4KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0dWwge1xcclxcblxcdFxcdFxcdHBhZGRpbmctbGVmdDogcmVtKDIwKTtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nLXRvcDogcmVtKDEwKTtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdGxpIHtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogMjtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0bGk6Om1hcmtlciB7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICRjbHItc2Vjb25kYXJ5O1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4tZGV0YWlscyB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDEwMDApKSB7XFxyXFxuXFx0I2V4cGVyaWVuY2UtY3RuIHtcXHJcXG5cXHRcXHQjZXhwZXJpZW5jZS1saXN0LWN0biB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDM1JTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0I2V4cGVyaWVuY2UtZGV0YWlscy1jdG4ge1xcclxcblxcdFxcdFxcdHdpZHRoOiA2NSU7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDcyNSkpIHtcXHJcXG5cXHQjZXhwZXJpZW5jZS1jdG4ge1xcclxcblxcdFxcdCNleHBlcmllbmNlLWxpc3QtY3RuIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNza2lsbHMge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItZ3JheS1kaztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiByZW0oMzUpO1xcblxcblxcdGgyIHtcXG5cXHRcXHRjb2xvcjogJGNsci1zZWNvbmRhcnk7XFxuXFx0fVxcbn1cXG5cXG4jc2tpbGxzLWN0biB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGdhcDogcmVtKDI1KTtcXG5cXHRjb2xvcjogJGNsci1ibGFjaztcXG5cXHRwYWRkaW5nLXRvcDogcmVtKDM1KTtcXG5cXG5cXHQuc2tpbGwge1xcblxcdFxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci13aGl0ZTtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCByZW0oNSkgJGNsci1ibGFjayk7XFxuXFxuXFx0XFx0ZGl2IHtcXG5cXHRcXHRcXHRwYWRkaW5nLXRvcDogcmVtKDE1KTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0cCB7XFxuXFx0XFx0XFx0cGFkZGluZzogcmVtKDE1KTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0aW1nIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRcXHRvYmplY3QtZml0OiBjb250YWluO1xcblxcdFxcdFxcdHdpZHRoOiBhdXRvO1xcblxcdFxcdFxcdGhlaWdodDogYXV0bztcXG5cXHRcXHRcXHRtYXgtaGVpZ2h0OiByZW0oNjApO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxMjAwKSkge1xcblxcdCNza2lsbHMtY3RuIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDkwMCkpIHtcXG5cXHQjc2tpbGxzLWN0biB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg2NTApKSB7XFxuXFx0I3NraWxscy1jdG4ge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvcGRmL3Jlc3VtZS5wZGZcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7IGxvYWRFeHBlcmllbmNlIH07XG5cbmNvbnN0IGV4cExpc3QgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhwZXJpZW5jZS1saXN0XCIpKTtcblxuZnVuY3Rpb24gbG9hZEV4cGVyaWVuY2UoKSB7XG5cdGxvYWRFeHBlcmllbmNlRXZlbnRMaXN0ZW5lcigpO1xuXHRjb25zb2xlLmxvZyhleHBMaXN0WzFdKTtcbn1cblxuZnVuY3Rpb24gbG9hZEV4cGVyaWVuY2VFdmVudExpc3RlbmVyKCkge1xuXHRleHBMaXN0Lm1hcCgoZXhwKSA9PiB7XG5cdFx0ZXhwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBleHBlcmllbmNlQ2xpY2tFdmVudCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBleHBlcmllbmNlQ2xpY2tFdmVudCgpIHtcblx0Y29uc29sZS5sb2codGhpcyk7XG59XG4iLCJpbXBvcnQgeyBsb2FkRXhwZXJpZW5jZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvZXhwZXJpZW5jZVwiO1xyXG5leHBvcnQgeyBpbml0IH07XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG5cdGxvYWRFeHBlcmllbmNlKCk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBpbml0IH0gZnJvbSBcIi4vanMvaW5pdC5qc1wiO1xyXG5pbXBvcnQgXCIuL3Njc3Mvc3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IHJlc3VtZSBmcm9tIFwiLi9hc3NldHMvcmVzdW1lLnBkZlwiO1xyXG5cclxuaW5pdCgpO1xyXG5cclxuY29uc3QgcmVzdW1lTGluayA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXN1bWUtbGlua1wiKSk7XHJcblxyXG5yZXN1bWVMaW5rLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG5cdGJ1dHRvbi5ocmVmID0gcmVzdW1lO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9