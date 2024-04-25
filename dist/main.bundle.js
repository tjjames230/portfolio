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
}

function loadExperienceEventListener() {
	expList.map((exp) => {
		exp.addEventListener("click", experienceClickEvent);
	});
}

function experienceClickEvent() {
	// check class list for active, then update styling
	const newHeader = this.querySelector("h4");

	if (!this.classList.contains("active-list")) {
		// remove previous experience styling
		for (let i = 0; i < expList.length; i++) {
			if (expList[i].classList.contains("active-list")) {
				const oldHeader = expList[i].querySelector("h4");
				expList[i].classList.remove("active-list");
				oldHeader.classList.remove("active-header");
			}
		}

		// update clicked header styling
		this.classList.add("active-list");
		newHeader.classList.add("active-header");
	}

	// update content based on what is clicked
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxzb0JBQXNvQixVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sUUFBUSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLFFBQVEsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxPQUFPLFVBQVUsV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksT0FBTyxNQUFNLFlBQVksUUFBUSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFFBQVEsTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxRQUFRLE1BQU0sVUFBVSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsUUFBUSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxX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L3NyYy9zY3NzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Fzc2V0cy9yZXN1bWUucGRmIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcz8zMjFmIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL2V4cGVyaWVuY2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9pbml0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBmb250LXNpemU6IDEwMCU7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmY7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGNvbG9yOiBoc2woMCwgMCUsIDIwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgODUlKTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuaW1nLFxucGljdHVyZSxcbnN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMSxcbmgyLFxuaDMge1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS42MjVyZW07XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmEsXG5hOnZpc2l0ZWQsXG5hOmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTkuMzc1cmVtO1xufVxuXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA4OCUsIDMlKTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIHRvcDogMHJlbTtcbn1cblxuI2hlYWRlci1jdG4ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxLjU2MjVyZW0gMDtcbn1cbiNoZWFkZXItY3RuICNoZWFkZXItbGVmdCxcbiNoZWFkZXItY3RuICNoZWFkZXItcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMy4xMjVyZW07XG59XG4jaGVhZGVyLWN0biBuYXYsXG4jaGVhZGVyLWN0biAjc29jaWFscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxLjg3NXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYSB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgaHNsKDIwOCwgODglLCAzJSk7XG59XG5cbm5hdiA+IGEge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgaHNsKDIwOCwgODglLCAzJSk7XG59XG5cbm5hdiA+IGE6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgaHNsKDQ3LCAxMDAlLCA1MCUpO1xufVxuXG5pIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuaTpob3ZlciB7XG4gIGNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5LjM3NXJlbSkge1xuICAjaGVhZGVyLWN0biB7XG4gICAgcGFkZGluZzogMS41NjI1cmVtO1xuICB9XG59XG4jYWJvdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA4OCUsIDMlKTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIGhlaWdodDogMjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG59XG4jYWJvdXQgI2Fib3V0LWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwLjM1dHVybiwgaHNsKDE4OSwgODAlLCAxMiUpLCBoc2woMTk4LCA4MyUsIDE4JSksIGhzbCgyMDIsIDg0JSwgMTUlKSwgaHNsKDIxMSwgODUlLCA1JSkpO1xuICBnYXA6IDEuNTYyNXJlbTtcbiAgaGVpZ2h0OiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogNjAlO1xuICBib3JkZXItcmFkaXVzOiAxLjU2MjVyZW0gMS41NjI1cmVtIDAgMDtcbiAgcGFkZGluZzogMi41cmVtIDVyZW07XG4gIGJvcmRlcjogMC4zMTI1cmVtIHNvbGlkIGhzbCgxOTgsIDgzJSwgMTglKTtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbiNhYm91dCAjYWJvdXQtY3RuICNhYm91dC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjU2MjVyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA3MCU7XG59XG4jYWJvdXQgI2ltZy1jdG4ge1xuICB3aWR0aDogMzAlO1xufVxuI2Fib3V0ICNpbWctY3RuIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuNDM3NXJlbSAwLjQzNzVyZW0gMCBoc2woMjA4LCA2OSUsIDQ2JSkpO1xufVxuXG4ucmVzdW1lLWxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDMuMTI1cmVtO1xuICBwYWRkaW5nOiAwLjMxMjVyZW0gMS44NzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWF4LXdpZHRoOiAxMC45Mzc1cmVtO1xufVxuXG4ucmVzdW1lLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDcsIDEwMCUsIDY4JSk7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDAlKTtcbn1cblxuI3BvcnRmb2xpbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMjAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMi4xODc1cmVtO1xufVxuI3BvcnRmb2xpbyBoMiB7XG4gIGNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XG59XG5cbiNwb3J0Zm9saW8tY3RuIHtcbiAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiAxLjU2MjVyZW07XG59XG4jcG9ydGZvbGlvLWN0biAucG9ydGZvbGlvLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG59XG4jcG9ydGZvbGlvLWN0biAuaW1nLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNzAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI3BvcnRmb2xpby1jdG4gaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuI3BvcnRmb2xpby1jdG4gaDMge1xuICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbn1cbiNwb3J0Zm9saW8tY3RuIGEge1xuICBwYWRkaW5nOiAxLjI1cmVtO1xufVxuI3BvcnRmb2xpby1jdG4gLmJ0bi1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbiNwb3J0Zm9saW8tY3RuIGEge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOCwgODglLCAzJSk7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xufVxuI3BvcnRmb2xpby1jdG4gLmNvZGUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOCwgNjklLCA0NiUpO1xufVxuI3BvcnRmb2xpby1jdG4gYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg3LjVyZW0pIHtcbiAgI3BvcnRmb2xpby1jdG4ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2LjI1cmVtKSB7XG4gICNwb3J0Zm9saW8tY3RuIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0My43NXJlbSkge1xuICAjcG9ydGZvbGlvLWN0biB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcbiAgfVxufVxuI2V4cGVyaWVuY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA4OCUsIDMlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMi4xODc1cmVtO1xufVxuXG4jZXhwZXJpZW5jZS1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxLjU2MjVyZW07XG4gIGdhcDogMC45Mzc1cmVtO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biB7XG4gIHdpZHRoOiAyNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgaHNsKDQ3LCAxMDAlLCA1MCUpO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5leHBlcmllbmNlLWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgaHNsKDIwOCwgODglLCAzJSk7XG4gIHBhZGRpbmc6IDAuOTM3NXJlbTtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biAuZXhwZXJpZW5jZS1saXN0IGg0IHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biAuZXhwZXJpZW5jZS1saXN0IHAge1xuICBmb250LXNpemU6IDFyZW07XG59XG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4gLmV4cGVyaWVuY2UtbGlzdDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biAuYWN0aXZlLWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgaHNsKDQ3LCAxMDAlLCA1MCUpO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5hY3RpdmUtaGVhZGVyIHtcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDAuOTM3NXJlbTtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBoMyxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBoNCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBoMyB7XG4gIGNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XG59XG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gaDQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGg1IHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biB1bCB7XG4gIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgcGFkZGluZy10b3A6IDAuNjI1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gbGkge1xuICBsaW5lLWhlaWdodDogMjtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBsaTo6bWFya2VyIHtcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcbn1cblxuLmhpZGRlbi1kZXRhaWxzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIuNXJlbSkge1xuICAjZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4ge1xuICAgIHdpZHRoOiAzNSU7XG4gIH1cbiAgI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIHtcbiAgICB3aWR0aDogNjUlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NS4zMTI1cmVtKSB7XG4gICNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4jc2tpbGxzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAyMCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyLjE4NzVyZW07XG59XG4jc2tpbGxzIGgyIHtcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcbn1cblxuI3NraWxscy1jdG4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xuICB3aWR0aDogMTAwJTtcbiAgZ2FwOiAxLjU2MjVyZW07XG4gIGNvbG9yOiBoc2woMCwgMCUsIDAlKTtcbiAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcbn1cbiNza2lsbHMtY3RuIC5za2lsbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuMzEyNXJlbSBoc2woMCwgMCUsIDAlKSk7XG59XG4jc2tpbGxzLWN0biAuc2tpbGwgZGl2IHtcbiAgcGFkZGluZy10b3A6IDAuOTM3NXJlbTtcbn1cbiNza2lsbHMtY3RuIC5za2lsbCBwIHtcbiAgcGFkZGluZzogMC45Mzc1cmVtO1xufVxuI3NraWxscy1jdG4gLnNraWxsIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAzLjc1cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NXJlbSkge1xuICAjc2tpbGxzLWN0biB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVyZW0pIHtcbiAgI3NraWxscy1jdG4ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwLjYyNXJlbSkge1xuICAjc2tpbGxzLWN0biB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fZ2VuZXJhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fY29udGFpbmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19hYm91dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19idXR0b25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX3BvcnRmb2xpby5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19leHBlcmllbmNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX3NraWxscy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0MsZUFBQTtBQ0hEOztBRE1BO0VBQ0MsK0JFVGM7RUZVZCxtQkFBQTtFQUNBLHNCR0dhO0VIRmIsaUNBQUE7RUFDQSxnQkFBQTtBQ0hEOztBR1ZBOzs7RUFHQyxzQkFBQTtBSGFEOztBR1ZBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FIYUQ7O0FHVkE7OztFQUdDLGNBQUE7QUhhRDs7QUl6QkE7OztFQUdDLFNBQUE7RUFDQSxnQkFBQTtBSjRCRDs7QUl6QkE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUo0QkQ7O0FJekJBO0VBQ0MsbUJBQUE7RUFDQSx1QkZOVztFRU9YLGdCQUFBO0FKNEJEOztBSXpCQTtFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7QUo0QkQ7O0FJekJBOzs7RUFHQyxxQkFBQTtBSjRCRDs7QUt2REE7RUFDQyxvQkFBQTtBTDBERDs7QU0xREE7RUFDQyxtQ0pIYTtFSUliLHVCSk1XO0VJTFgsU0FBQTtBTjZERDs7QU0xREE7RUFDQyxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QU42REQ7QU0zREM7O0VBRUMsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBTjZERjtBTTFEQzs7RUFFQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QU40REY7O0FNeERBO0VBQ0MsdUJKckJXO0VJc0JYLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FOMkREOztBTXhEQTtFQUNDLDBDQUFBO0FOMkREOztBTXhEQTtFQUNDLDJDQUFBO0FOMkREOztBTXhEQTtFQUNDLHVCSnBD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QUNDLFVBQUE7RVZtT0Q7QUFDRjtBVS9OQTtFQUVFO0lBQ0MsYUFBQTtFVmdPRDtFVTdOQTtJQUNDLFdBQUE7RVYrTkQ7QUFDRjtBVzdVQTtFQUNDLGlDVFVhO0VTVGIsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBWCtVRDtBVzdVQztFQUNDLHlCVFRjO0FGd1ZoQjs7QVczVUE7RUFDQyxhQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHFCVExXO0VTTVgsc0JBQUE7QVg4VUQ7QVc1VUM7RUFDQyxzQkFBQTtFQUNBLGtDVGRVO0VTZVYsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpREFBQTtBWDhVRjtBVzVVRTtFQUNDLHNCQUFBO0FYOFVIO0FXM1VFO0VBQ0Msa0JBQUE7QVg2VUg7QVcxVUU7RUFDQyxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FYNFVIOztBV3ZVQTtFQUNDO0lBQ0MscUNBQUE7RVgwVUE7QUFDRjtBV3ZVQTtFQUNDO0lBQ0MscUNBQUE7RVh5VUE7QUFDRjtBV3RVQTtFQUNDO0lBQ0MscUNBQUE7RVh3VUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcImNvbG9yc1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCJmb250c1xcXCIgYXMgKjtcXHJcXG5cXHJcXG5odG1sIHtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcblxcdGZvbnQtc2l6ZTogcmVtKDE4KTtcXHJcXG5cXHRjb2xvcjogJGNsci1ncmF5LWRrO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItZ3JheS1sdDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cIixcImh0bWwge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmY7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMjAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgODUlKTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbmltZyxcXG5waWN0dXJlLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjYyNXJlbTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAxLjM3NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkLFxcbmE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDk5LjM3NXJlbTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDgsIDg4JSwgMyUpO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICB0b3A6IDByZW07XFxufVxcblxcbiNoZWFkZXItY3RuIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDEuNTYyNXJlbSAwO1xcbn1cXG4jaGVhZGVyLWN0biAjaGVhZGVyLWxlZnQsXFxuI2hlYWRlci1jdG4gI2hlYWRlci1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAzLjEyNXJlbTtcXG59XFxuI2hlYWRlci1jdG4gbmF2LFxcbiNoZWFkZXItY3RuICNzb2NpYWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDEuODc1cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGhzbCgyMDgsIDg4JSwgMyUpO1xcbn1cXG5cXG5uYXYgPiBhIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBoc2woMjA4LCA4OCUsIDMlKTtcXG59XFxuXFxubmF2ID4gYTpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgaHNsKDQ3LCAxMDAlLCA1MCUpO1xcbn1cXG5cXG5pIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cXG5pOmhvdmVyIHtcXG4gIGNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5LjM3NXJlbSkge1xcbiAgI2hlYWRlci1jdG4ge1xcbiAgICBwYWRkaW5nOiAxLjU2MjVyZW07XFxuICB9XFxufVxcbiNhYm91dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA4OCUsIDMlKTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG59XFxuI2Fib3V0ICNhYm91dC1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMC4zNXR1cm4sIGhzbCgxODksIDgwJSwgMTIlKSwgaHNsKDE5OCwgODMlLCAxOCUpLCBoc2woMjAyLCA4NCUsIDE1JSksIGhzbCgyMTEsIDg1JSwgNSUpKTtcXG4gIGdhcDogMS41NjI1cmVtO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA2MCU7XFxuICBib3JkZXItcmFkaXVzOiAxLjU2MjVyZW0gMS41NjI1cmVtIDAgMDtcXG4gIHBhZGRpbmc6IDIuNXJlbSA1cmVtO1xcbiAgYm9yZGVyOiAwLjMxMjVyZW0gc29saWQgaHNsKDE5OCwgODMlLCAxOCUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuI2Fib3V0ICNhYm91dC1jdG4gI2Fib3V0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS41NjI1cmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA3MCU7XFxufVxcbiNhYm91dCAjaW1nLWN0biB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG4jYWJvdXQgI2ltZy1jdG4gaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMC40Mzc1cmVtIDAuNDM3NXJlbSAwIGhzbCgyMDgsIDY5JSwgNDYlKSk7XFxufVxcblxcbi5yZXN1bWUtbGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xcbiAgYm9yZGVyLXJhZGl1czogMy4xMjVyZW07XFxuICBwYWRkaW5nOiAwLjMxMjVyZW0gMS44NzVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXgtd2lkdGg6IDEwLjkzNzVyZW07XFxufVxcblxcbi5yZXN1bWUtbGluazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDcsIDEwMCUsIDY4JSk7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxufVxcblxcbiNwb3J0Zm9saW8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAyMCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMi4xODc1cmVtO1xcbn1cXG4jcG9ydGZvbGlvIGgyIHtcXG4gIGNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XFxufVxcblxcbiNwb3J0Zm9saW8tY3RuIHtcXG4gIHBhZGRpbmctdG9wOiAyLjE4NzVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdhcDogMS41NjI1cmVtO1xcbn1cXG4jcG9ydGZvbGlvLWN0biAucG9ydGZvbGlvLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG59XFxuI3BvcnRmb2xpby1jdG4gLmltZy1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNzAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuI3BvcnRmb2xpby1jdG4gaW1nIHtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNwb3J0Zm9saW8tY3RuIGgzIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xcbn1cXG4jcG9ydGZvbGlvLWN0biBhIHtcXG4gIHBhZGRpbmc6IDEuMjVyZW07XFxufVxcbiNwb3J0Zm9saW8tY3RuIC5idG4tY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuI3BvcnRmb2xpby1jdG4gYSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDgsIDg4JSwgMyUpO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxufVxcbiNwb3J0Zm9saW8tY3RuIC5jb2RlLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA2OSUsIDQ2JSk7XFxufVxcbiNwb3J0Zm9saW8tY3RuIGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4Ny41cmVtKSB7XFxuICAjcG9ydGZvbGlvLWN0biB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2LjI1cmVtKSB7XFxuICAjcG9ydGZvbGlvLWN0biB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzLjc1cmVtKSB7XFxuICAjcG9ydGZvbGlvLWN0biB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XFxuICB9XFxufVxcbiNleHBlcmllbmNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDgsIDg4JSwgMyUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMi4xODc1cmVtO1xcbn1cXG5cXG4jZXhwZXJpZW5jZS1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMS41NjI1cmVtO1xcbiAgZ2FwOiAwLjkzNzVyZW07XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIHtcXG4gIHdpZHRoOiAyNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgaHNsKDQ3LCAxMDAlLCA1MCUpO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4gLmV4cGVyaWVuY2UtbGlzdCB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgaHNsKDIwOCwgODglLCAzJSk7XFxuICBwYWRkaW5nOiAwLjkzNzVyZW07XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biAuZXhwZXJpZW5jZS1saXN0IGg0IHtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4gLmV4cGVyaWVuY2UtbGlzdCBwIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5leHBlcmllbmNlLWxpc3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4gLmFjdGl2ZS1saXN0IHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBoc2woNDcsIDEwMCUsIDUwJSk7XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biAuYWN0aXZlLWhlYWRlciB7XFxuICBjb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDAuOTM3NXJlbTtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGgzLFxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBoNCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBoMyB7XFxuICBjb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gaDQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGg1IHtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biB1bCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XFxuICBwYWRkaW5nLXRvcDogMC42MjVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBsaSB7XFxuICBsaW5lLWhlaWdodDogMjtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGxpOjptYXJrZXIge1xcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcXG59XFxuXFxuLmhpZGRlbi1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyLjVyZW0pIHtcXG4gICNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biB7XFxuICAgIHdpZHRoOiAzNSU7XFxuICB9XFxuICAjZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4ge1xcbiAgICB3aWR0aDogNjUlO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NS4zMTI1cmVtKSB7XFxuICAjZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbiNza2lsbHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAyMCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMi4xODc1cmVtO1xcbn1cXG4jc2tpbGxzIGgyIHtcXG4gIGNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XFxufVxcblxcbiNza2lsbHMtY3RuIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDEuNTYyNXJlbTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDAlKTtcXG4gIHBhZGRpbmctdG9wOiAyLjE4NzVyZW07XFxufVxcbiNza2lsbHMtY3RuIC5za2lsbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuMzEyNXJlbSBoc2woMCwgMCUsIDAlKSk7XFxufVxcbiNza2lsbHMtY3RuIC5za2lsbCBkaXYge1xcbiAgcGFkZGluZy10b3A6IDAuOTM3NXJlbTtcXG59XFxuI3NraWxscy1jdG4gLnNraWxsIHAge1xcbiAgcGFkZGluZzogMC45Mzc1cmVtO1xcbn1cXG4jc2tpbGxzLWN0biAuc2tpbGwgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogMy43NXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzVyZW0pIHtcXG4gICNza2lsbHMtY3RuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVyZW0pIHtcXG4gICNza2lsbHMtY3RuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAuNjI1cmVtKSB7XFxuICAjc2tpbGxzLWN0biB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVwiLFwiJGZvbnQtcHJpbWFyeTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJmO1xcclxcblwiLFwiLy8gUHJpbWFyeSBDb2xvcnNcXHJcXG4kY2xyLXByaW1hcnk6IGhzbCgyMDgsIDg4JSwgMyUpO1xcclxcbiRjbHItc2Vjb25kYXJ5OiBoc2woNDcsIDEwMCUsIDUwJSk7XFxyXFxuJGNsci1zZWNvbmRhcnktaG92ZXI6IGhzbCg0NywgMTAwJSwgNjglKTtcXHJcXG4kY2xyLXRlcnRpYXJ5OiBoc2woMjA4LCA2OSUsIDQ2JSk7XFxyXFxuJGNsci1ncmFkaWVudC1vbmU6IGhzbCgxODksIDgwJSwgMTIlKTtcXHJcXG4kY2xyLWdyYWRpZW50LXR3bzogaHNsKDE5OCwgODMlLCAxOCUpO1xcclxcbiRjbHItZ3JhZGllbnQtdGhyZWU6IGhzbCgyMDIsIDg0JSwgMTUlKTtcXHJcXG4kY2xyLWdyYWRpZW50LWZvdXI6IGhzbCgyMTEsIDg1JSwgNSUpO1xcclxcblxcclxcbi8vIE5ldXRyYWwgQ29sb3JzXFxyXFxuJGNsci13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXHJcXG4kY2xyLWdyYXktbHQ6IGhzbCgwLCAwJSwgODUlKTtcXHJcXG4kY2xyLWdyYXk6IGhzbCgwLCAwJSwgNTAlKTtcXHJcXG4kY2xyLWdyYXktZGs6IGhzbCgwLCAwJSwgMjAlKTtcXHJcXG4kY2xyLWJsYWNrOiBoc2woMCwgMCUsIDAlKTtcXHJcXG5cIixcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5pbWcsXFxyXFxucGljdHVyZSxcXHJcXG5zdmcge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiY29sb3JzXFxcIiBhcyAqO1xcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuMTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcblxcdGZvbnQtc2l6ZTogcmVtKDMyKTtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuXFx0Zm9udC1zaXplOiByZW0oMjYpO1xcclxcblxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG5cXHRmb250LXNpemU6IHJlbSgyMik7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuYSxcXHJcXG5hOnZpc2l0ZWQsXFxyXFxuYTphY3RpdmUge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcblxcdG1heC13aWR0aDogcmVtKDE1OTApO1xcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLXByaW1hcnk7XFxyXFxuXFx0Y29sb3I6ICRjbHItd2hpdGU7XFxyXFxuXFx0dG9wOiByZW0oMCk7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXItY3RuIHtcXHJcXG5cXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRwYWRkaW5nOiByZW0oMjUpIDA7XFxyXFxuXFxyXFxuXFx0I2hlYWRlci1sZWZ0LFxcclxcblxcdCNoZWFkZXItcmlnaHQge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdGdhcDogcmVtKDUwKTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0bmF2LFxcclxcblxcdCNzb2NpYWxzIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRnYXA6IHJlbSgzMCk7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcblxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgJGNsci1wcmltYXJ5O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgPiBhIHtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgJGNsci1wcmltYXJ5O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgPiBhOmhvdmVyIHtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgJGNsci1zZWNvbmRhcnk7XFxyXFxufVxcclxcblxcclxcbmkge1xcclxcblxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcclxcblxcdGZvbnQtc2l6ZTogcmVtKDI4KTtcXHJcXG59XFxyXFxuXFxyXFxuaTpob3ZlciB7XFxyXFxuXFx0Y29sb3I6ICRjbHItc2Vjb25kYXJ5O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTU5MCkpIHtcXHJcXG5cXHQjaGVhZGVyLWN0biB7XFxyXFxuXFx0XFx0cGFkZGluZzogcmVtKDI1KTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5cXHJcXG4jYWJvdXQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItcHJpbWFyeTtcXHJcXG5cXHRjb2xvcjogJGNsci13aGl0ZTtcXHJcXG5cXHRoZWlnaHQ6IHJlbSg0MDApO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogZW5kO1xcclxcblxcclxcblxcdCNhYm91dC1jdG4ge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuXFx0XFx0XFx0MC4zNXR1cm4sXFxyXFxuXFx0XFx0XFx0JGNsci1ncmFkaWVudC1vbmUsXFxyXFxuXFx0XFx0XFx0JGNsci1ncmFkaWVudC10d28sXFxyXFxuXFx0XFx0XFx0JGNsci1ncmFkaWVudC10aHJlZSxcXHJcXG5cXHRcXHRcXHQkY2xyLWdyYWRpZW50LWZvdXJcXHJcXG5cXHRcXHQpO1xcclxcblxcdFxcdGdhcDogcmVtKDI1KTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDkwJTtcXHJcXG5cXHRcXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRcXHR3aWR0aDogNjAlO1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IHJlbSgyNSkgcmVtKDI1KSAwIDA7XFxyXFxuXFx0XFx0cGFkZGluZzogcmVtKDQwKSByZW0oODApO1xcclxcblxcdFxcdGJvcmRlcjogcmVtKDUpIHNvbGlkICRjbHItZ3JhZGllbnQtdHdvO1xcclxcblxcdFxcdGJvcmRlci1ib3R0b206IDA7XFxyXFxuXFxyXFxuXFx0XFx0I2Fib3V0LWNvbnRlbnQge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0Z2FwOiByZW0oMjUpO1xcclxcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDcwJTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNpbWctY3RuIHtcXHJcXG5cXHRcXHR3aWR0aDogMzAlO1xcclxcblxcclxcblxcdFxcdGltZyB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRcXHRcXHRmaWx0ZXI6IGRyb3Atc2hhZG93KHJlbSg3KSByZW0oNykgMCAkY2xyLXRlcnRpYXJ5KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuXFxyXFxuLnJlc3VtZS1saW5rIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1zZWNvbmRhcnk7XFxyXFxuXFx0Y29sb3I6ICRjbHItYmxhY2s7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogcmVtKDUwKTtcXHJcXG5cXHRwYWRkaW5nOiByZW0oNSkgcmVtKDMwKTtcXHJcXG5cXHRmb250LXNpemU6IHJlbSgxNik7XFxyXFxuXFx0bWF4LXdpZHRoOiByZW0oMTc1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VtZS1saW5rOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLXNlY29uZGFyeS1ob3ZlcjtcXHJcXG5cXHRjb2xvcjogJGNsci1ibGFjaztcXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcblxcclxcbiNwb3J0Zm9saW8ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItZ3JheS1kaztcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiByZW0oMzUpO1xcclxcblxcclxcblxcdGgyIHtcXHJcXG5cXHRcXHRjb2xvcjogJGNsci1zZWNvbmRhcnk7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4jcG9ydGZvbGlvLWN0biB7XFxyXFxuXFx0cGFkZGluZy10b3A6IHJlbSgzNSk7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcblxcdGdhcDogcmVtKDI1KTtcXHJcXG5cXHJcXG5cXHQucG9ydGZvbGlvLWNhcmQge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuaW1nLWN0biB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRoZWlnaHQ6IDcwJTtcXHJcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRpbWcge1xcclxcblxcdFxcdG9iamVjdC1maXQ6IGNvdmVyO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRoMyB7XFxyXFxuXFx0XFx0cGFkZGluZy1ib3R0b206IHJlbSgyMCk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGEge1xcclxcblxcdFxcdHBhZGRpbmc6IHJlbSgyMCk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5idG4tY3RuIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRhIHtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRmb250LXNpemU6IHJlbSgxOCk7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0Ym9yZGVyOiBub25lO1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItcHJpbWFyeTtcXHJcXG5cXHRcXHRjb2xvcjogJGNsci13aGl0ZTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmNvZGUtYnRuIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLXRlcnRpYXJ5O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRhOmhvdmVyIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLXNlY29uZGFyeTtcXHJcXG5cXHRcXHRjb2xvcjogJGNsci1ibGFjaztcXHJcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTQwMCkpIHtcXHJcXG5cXHQjcG9ydGZvbGlvLWN0biB7XFxyXFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxMDYwKSkge1xcclxcblxcdCNwb3J0Zm9saW8tY3RuIHtcXHJcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDcwMCkpIHtcXHJcXG5cXHQjcG9ydGZvbGlvLWN0biB7XFxyXFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5cXHJcXG4jZXhwZXJpZW5jZSB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1wcmltYXJ5O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IHJlbSgzNSk7XFxyXFxufVxcclxcblxcclxcbiNleHBlcmllbmNlLWN0biB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nLXRvcDogcmVtKDI1KTtcXHJcXG5cXHRnYXA6IHJlbSgxNSk7XFxyXFxuXFx0Y29sb3I6ICRjbHItd2hpdGU7XFxyXFxuXFxyXFxuXFx0I2V4cGVyaWVuY2UtbGlzdC1jdG4ge1xcclxcblxcdFxcdHdpZHRoOiAyNSU7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdGJvcmRlci1sZWZ0OiA1cHggc29saWQgJGNsci1zZWNvbmRhcnk7XFxyXFxuXFxyXFxuXFx0XFx0LmV4cGVyaWVuY2UtbGlzdCB7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRjbHItcHJpbWFyeTtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiByZW0oMTUpO1xcclxcblxcclxcblxcdFxcdFxcdGg0IHtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSgxOCk7XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0cCB7XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmV4cGVyaWVuY2UtbGlzdDpob3ZlciB7XFxyXFxuXFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQuYWN0aXZlLWxpc3Qge1xcclxcblxcdFxcdFxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkY2xyLXNlY29uZGFyeTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmFjdGl2ZS1oZWFkZXIge1xcclxcblxcdFxcdFxcdGNvbG9yOiAkY2xyLXNlY29uZGFyeTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNleHBlcmllbmNlLWRldGFpbHMtY3RuIHtcXHJcXG5cXHRcXHR3aWR0aDogNTAlO1xcclxcblxcdFxcdHBhZGRpbmc6IHJlbSgxNSk7XFxyXFxuXFxyXFxuXFx0XFx0aDMsXFxyXFxuXFx0XFx0aDQge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0aDMge1xcclxcblxcdFxcdFxcdGNvbG9yOiAkY2xyLXNlY29uZGFyeTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0aDQge1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdGg1IHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgxOCk7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdHVsIHtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nLWxlZnQ6IHJlbSgyMCk7XFxyXFxuXFx0XFx0XFx0cGFkZGluZy10b3A6IHJlbSgxMCk7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRsaSB7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDI7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdGxpOjptYXJrZXIge1xcclxcblxcdFxcdFxcdGNvbG9yOiAkY2xyLXNlY29uZGFyeTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuLWRldGFpbHMge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxMDAwKSkge1xcclxcblxcdCNleHBlcmllbmNlLWN0biB7XFxyXFxuXFx0XFx0I2V4cGVyaWVuY2UtbGlzdC1jdG4ge1xcclxcblxcdFxcdFxcdHdpZHRoOiAzNSU7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCNleHBlcmllbmNlLWRldGFpbHMtY3RuIHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogNjUlO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg3MjUpKSB7XFxyXFxuXFx0I2V4cGVyaWVuY2UtY3RuIHtcXHJcXG5cXHRcXHQjZXhwZXJpZW5jZS1saXN0LWN0biB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0I2V4cGVyaWVuY2UtZGV0YWlscy1jdG4ge1xcclxcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jc2tpbGxzIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWdyYXktZGs7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogcmVtKDM1KTtcXG5cXG5cXHRoMiB7XFxuXFx0XFx0Y29sb3I6ICRjbHItc2Vjb25kYXJ5O1xcblxcdH1cXG59XFxuXFxuI3NraWxscy1jdG4ge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRnYXA6IHJlbSgyNSk7XFxuXFx0Y29sb3I6ICRjbHItYmxhY2s7XFxuXFx0cGFkZGluZy10b3A6IHJlbSgzNSk7XFxuXFxuXFx0LnNraWxsIHtcXG5cXHRcXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItd2hpdGU7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgcmVtKDUpICRjbHItYmxhY2spO1xcblxcblxcdFxcdGRpdiB7XFxuXFx0XFx0XFx0cGFkZGluZy10b3A6IHJlbSgxNSk7XFxuXFx0XFx0fVxcblxcblxcdFxcdHAge1xcblxcdFxcdFxcdHBhZGRpbmc6IHJlbSgxNSk7XFxuXFx0XFx0fVxcblxcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0XFx0b2JqZWN0LWZpdDogY29udGFpbjtcXG5cXHRcXHRcXHR3aWR0aDogYXV0bztcXG5cXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxuXFx0XFx0XFx0bWF4LWhlaWdodDogcmVtKDYwKTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTIwMCkpIHtcXG5cXHQjc2tpbGxzLWN0biB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg5MDApKSB7XFxuXFx0I3NraWxscy1jdG4ge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNjUwKSkge1xcblxcdCNza2lsbHMtY3RuIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3BkZi9yZXN1bWUucGRmXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgeyBsb2FkRXhwZXJpZW5jZSB9O1xuXG5jb25zdCBleHBMaXN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4cGVyaWVuY2UtbGlzdFwiKSk7XG5cbmZ1bmN0aW9uIGxvYWRFeHBlcmllbmNlKCkge1xuXHRsb2FkRXhwZXJpZW5jZUV2ZW50TGlzdGVuZXIoKTtcbn1cblxuZnVuY3Rpb24gbG9hZEV4cGVyaWVuY2VFdmVudExpc3RlbmVyKCkge1xuXHRleHBMaXN0Lm1hcCgoZXhwKSA9PiB7XG5cdFx0ZXhwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBleHBlcmllbmNlQ2xpY2tFdmVudCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBleHBlcmllbmNlQ2xpY2tFdmVudCgpIHtcblx0Ly8gY2hlY2sgY2xhc3MgbGlzdCBmb3IgYWN0aXZlLCB0aGVuIHVwZGF0ZSBzdHlsaW5nXG5cdGNvbnN0IG5ld0hlYWRlciA9IHRoaXMucXVlcnlTZWxlY3RvcihcImg0XCIpO1xuXG5cdGlmICghdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtbGlzdFwiKSkge1xuXHRcdC8vIHJlbW92ZSBwcmV2aW91cyBleHBlcmllbmNlIHN0eWxpbmdcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGV4cExpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChleHBMaXN0W2ldLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1saXN0XCIpKSB7XG5cdFx0XHRcdGNvbnN0IG9sZEhlYWRlciA9IGV4cExpc3RbaV0ucXVlcnlTZWxlY3RvcihcImg0XCIpO1xuXHRcdFx0XHRleHBMaXN0W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtbGlzdFwiKTtcblx0XHRcdFx0b2xkSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtaGVhZGVyXCIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIHVwZGF0ZSBjbGlja2VkIGhlYWRlciBzdHlsaW5nXG5cdFx0dGhpcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWxpc3RcIik7XG5cdFx0bmV3SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtaGVhZGVyXCIpO1xuXHR9XG5cblx0Ly8gdXBkYXRlIGNvbnRlbnQgYmFzZWQgb24gd2hhdCBpcyBjbGlja2VkXG59XG4iLCJpbXBvcnQgeyBsb2FkRXhwZXJpZW5jZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvZXhwZXJpZW5jZVwiO1xyXG5leHBvcnQgeyBpbml0IH07XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG5cdGxvYWRFeHBlcmllbmNlKCk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBpbml0IH0gZnJvbSBcIi4vanMvaW5pdC5qc1wiO1xyXG5pbXBvcnQgXCIuL3Njc3Mvc3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IHJlc3VtZSBmcm9tIFwiLi9hc3NldHMvcmVzdW1lLnBkZlwiO1xyXG5cclxuaW5pdCgpO1xyXG5cclxuY29uc3QgcmVzdW1lTGluayA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXN1bWUtbGlua1wiKSk7XHJcblxyXG5yZXN1bWVMaW5rLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG5cdGJ1dHRvbi5ocmVmID0gcmVzdW1lO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9