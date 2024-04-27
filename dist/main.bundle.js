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
  border-bottom: 1px solid hsl(0, 0%, 20%);
  position: sticky;
  z-index: 10;
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

.desktop-link {
  color: hsl(0, 0%, 100%);
  display: flex;
  align-items: center;
  border-bottom: 2px solid hsl(208, 88%, 3%);
  font-size: 1rem;
}

.desktop-link:hover {
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
@media screen and (max-width: 59.375rem) {
  #header-ctn #header-left > nav {
    display: none;
  }
  #header-ctn #header-right {
    display: none;
  }
}
#about {
  background-color: hsl(208, 88%, 3%);
  color: hsl(0, 0%, 100%);
  overflow: hidden;
  display: flex;
  align-items: end;
  padding-top: 3.125rem;
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

@media screen and (max-width: 64rem) {
  #about #about-ctn {
    width: 80%;
  }
}
@media screen and (max-width: 48rem) {
  #about #about-ctn {
    flex-direction: column-reverse;
  }
  #about #about-ctn #about-content {
    width: 100%;
    align-items: center;
  }
}
@media screen and (max-width: 26.5625rem) {
  #about #about-ctn {
    padding: 1.25rem;
    font-size: 1rem;
  }
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
  text-align: center;
}
#portfolio-ctn .btn-ctn {
  display: flex;
  width: 100%;
}
#portfolio-ctn a {
  text-align: center;
  font-size: 1.125rem;
  width: 100%;
  border: none;
  background-color: hsl(208, 88%, 3%);
  color: hsl(0, 0%, 100%);
  padding: 1.25rem;
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
@media screen and (max-width: 26.5625rem) {
  #portfolio-ctn a {
    font-size: 1rem;
  }
}
@media screen and (max-width: 20rem) {
  #portfolio-ctn a {
    font-size: 0.875rem;
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
  #experience-ctn {
    padding-top: 2.1875rem;
  }
  #experience-ctn #experience-list-ctn {
    display: none;
  }
  #experience-ctn #experience-details-ctn {
    padding: 0;
    width: 100%;
  }
  #experience-ctn #experience-details-ctn h3 {
    display: block;
  }
  #experience-ctn #experience-details-ctn h4 {
    display: block;
  }
  #experience-ctn .hidden-details {
    display: block;
  }
  #experience-ctn .hidden-details:nth-child(n+1) {
    padding-top: 1.5625rem;
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
    font-size: 1rem;
  }
}
@media screen and (max-width: 26.5625rem) {
  #skills-ctn img {
    max-width: 6.25rem;
  }
}
#mobile-btn {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2.1875rem;
}
#mobile-btn .mobile-lines {
  height: 0.1875rem;
  width: 100%;
  background-color: hsl(0, 0%, 100%);
}

#mobile-nav {
  display: none;
  text-align: right;
  position: fixed;
  top: 1.5625rem;
  right: 1.5625rem;
  padding: 2.1875rem;
  font-size: 1.125rem;
  background-color: hsl(208, 88%, 3%);
  width: 80%;
  flex-direction: column;
  z-index: 4;
}
#mobile-nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-top: 1.5625rem;
}
#mobile-nav i {
  font-size: 2.1875rem;
}
#mobile-nav .mobile-nav-link {
  color: hsl(0, 0%, 100%);
}
#mobile-nav .resume-link {
  padding: 0;
  max-width: none;
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  color: hsl(47, 100%, 50%);
  background: none;
}

#mobile-nav-overlay {
  display: none;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: hsla(0, 0%, 100%, 0.25);
  z-index: 3;
}

@media screen and (max-width: 59.375rem) {
  #mobile-btn {
    display: flex;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/globals/_general.scss","webpack://./src/scss/styles.scss","webpack://./src/scss/globals/_fonts.scss","webpack://./src/scss/globals/_colors.scss","webpack://./src/scss/globals/_reset.scss","webpack://./src/scss/globals/_typography.scss","webpack://./src/scss/globals/_container.scss","webpack://./src/scss/components/_header.scss","webpack://./src/scss/components/_about.scss","webpack://./src/scss/components/_buttons.scss","webpack://./src/scss/components/_portfolio.scss","webpack://./src/scss/components/_experience.scss","webpack://./src/scss/components/_skills.scss","webpack://./src/scss/components/_mobile-nav.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"../utilities/\" as *;\n@use \"colors\" as *;\n@use \"fonts\" as *;\n\nhtml {\n\tfont-size: 100%;\n}\n\nbody {\n\tfont-family: $font-primary;\n\tfont-size: rem(18);\n\tcolor: $clr-gray-dk;\n\tbackground-color: $clr-gray-lt;\n\tline-height: 1.5;\n}\n","html {\n  font-size: 100%;\n}\n\nbody {\n  font-family: \"Inter\", sans-serf;\n  font-size: 1.125rem;\n  color: hsl(0, 0%, 20%);\n  background-color: hsl(0, 0%, 85%);\n  line-height: 1.5;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n  line-height: 1.1;\n}\n\nh1 {\n  font-size: 2rem;\n  font-weight: 700;\n}\n\nh2 {\n  font-size: 1.625rem;\n  color: hsl(0, 0%, 100%);\n  font-weight: 700;\n}\n\nh3 {\n  font-size: 1.375rem;\n  font-weight: 700;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\n.container {\n  max-width: 99.375rem;\n}\n\nheader {\n  background-color: hsl(208, 88%, 3%);\n  color: hsl(0, 0%, 100%);\n  top: 0rem;\n  border-bottom: 1px solid hsl(0, 0%, 20%);\n  position: sticky;\n  z-index: 10;\n}\n\n#header-ctn {\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  padding: 1.5625rem 0;\n}\n#header-ctn #header-left,\n#header-ctn #header-right {\n  display: flex;\n  justify-content: space-between;\n  gap: 3.125rem;\n}\n#header-ctn nav,\n#header-ctn #socials {\n  display: flex;\n  justify-content: space-between;\n  gap: 1.875rem;\n  align-items: center;\n}\n\n.desktop-link {\n  color: hsl(0, 0%, 100%);\n  display: flex;\n  align-items: center;\n  border-bottom: 2px solid hsl(208, 88%, 3%);\n  font-size: 1rem;\n}\n\n.desktop-link:hover {\n  border-bottom: 2px solid hsl(47, 100%, 50%);\n}\n\ni {\n  color: hsl(0, 0%, 100%);\n  font-size: 1.75rem;\n}\n\ni:hover {\n  color: hsl(47, 100%, 50%);\n}\n\n@media screen and (max-width: 99.375rem) {\n  #header-ctn {\n    padding: 1.5625rem;\n  }\n}\n@media screen and (max-width: 59.375rem) {\n  #header-ctn #header-left > nav {\n    display: none;\n  }\n  #header-ctn #header-right {\n    display: none;\n  }\n}\n#about {\n  background-color: hsl(208, 88%, 3%);\n  color: hsl(0, 0%, 100%);\n  overflow: hidden;\n  display: flex;\n  align-items: end;\n  padding-top: 3.125rem;\n}\n#about #about-ctn {\n  display: flex;\n  align-items: center;\n  background: linear-gradient(0.35turn, hsl(189, 80%, 12%), hsl(198, 83%, 18%), hsl(202, 84%, 15%), hsl(211, 85%, 5%));\n  gap: 1.5625rem;\n  height: 90%;\n  margin: 0 auto;\n  width: 60%;\n  border-radius: 1.5625rem 1.5625rem 0 0;\n  padding: 2.5rem 5rem;\n  border: 0.3125rem solid hsl(198, 83%, 18%);\n  border-bottom: 0;\n}\n#about #about-ctn #about-content {\n  display: flex;\n  gap: 1.5625rem;\n  flex-direction: column;\n  width: 70%;\n}\n#about #img-ctn {\n  width: 30%;\n}\n#about #img-ctn img {\n  max-width: 100%;\n  border-radius: 50%;\n  filter: drop-shadow(0.4375rem 0.4375rem 0 hsl(208, 69%, 46%));\n}\n\n@media screen and (max-width: 64rem) {\n  #about #about-ctn {\n    width: 80%;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #about #about-ctn {\n    flex-direction: column-reverse;\n  }\n  #about #about-ctn #about-content {\n    width: 100%;\n    align-items: center;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #about #about-ctn {\n    padding: 1.25rem;\n    font-size: 1rem;\n  }\n}\n.resume-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: hsl(47, 100%, 50%);\n  color: hsl(0, 0%, 0%);\n  border-radius: 3.125rem;\n  padding: 0.3125rem 1.875rem;\n  font-size: 1rem;\n  max-width: 10.9375rem;\n}\n\n.resume-link:hover {\n  background-color: hsl(47, 100%, 68%);\n  color: hsl(0, 0%, 0%);\n}\n\n#portfolio {\n  background-color: hsl(0, 0%, 20%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2.1875rem;\n}\n#portfolio h2 {\n  color: hsl(47, 100%, 50%);\n}\n\n#portfolio-ctn {\n  padding-top: 2.1875rem;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5625rem;\n}\n#portfolio-ctn .portfolio-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: hsl(0, 0%, 100%);\n}\n#portfolio-ctn .img-ctn {\n  display: flex;\n  height: 70%;\n  overflow: hidden;\n}\n#portfolio-ctn img {\n  object-fit: cover;\n  width: 100%;\n}\n#portfolio-ctn h3 {\n  padding-bottom: 1.25rem;\n  text-align: center;\n}\n#portfolio-ctn .btn-ctn {\n  display: flex;\n  width: 100%;\n}\n#portfolio-ctn a {\n  text-align: center;\n  font-size: 1.125rem;\n  width: 100%;\n  border: none;\n  background-color: hsl(208, 88%, 3%);\n  color: hsl(0, 0%, 100%);\n  padding: 1.25rem;\n}\n#portfolio-ctn .code-btn {\n  background-color: hsl(208, 69%, 46%);\n}\n#portfolio-ctn a:hover {\n  background-color: hsl(47, 100%, 50%);\n  color: hsl(0, 0%, 0%);\n  cursor: pointer;\n}\n\n@media screen and (max-width: 87.5rem) {\n  #portfolio-ctn {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media screen and (max-width: 66.25rem) {\n  #portfolio-ctn {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media screen and (max-width: 43.75rem) {\n  #portfolio-ctn {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #portfolio-ctn a {\n    font-size: 1rem;\n  }\n}\n@media screen and (max-width: 20rem) {\n  #portfolio-ctn a {\n    font-size: 0.875rem;\n  }\n}\n#experience {\n  background-color: hsl(208, 88%, 3%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2.1875rem;\n}\n\n#experience-ctn {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  padding-top: 1.5625rem;\n  gap: 0.9375rem;\n  color: hsl(0, 0%, 100%);\n}\n#experience-ctn #experience-list-ctn {\n  width: 25%;\n  display: flex;\n  flex-direction: column;\n  border-left: 5px solid hsl(47, 100%, 50%);\n}\n#experience-ctn #experience-list-ctn .experience-list {\n  border-bottom: 2px solid hsl(208, 88%, 3%);\n  padding: 0.9375rem;\n}\n#experience-ctn #experience-list-ctn .experience-list h4 {\n  font-size: 1.125rem;\n  font-weight: 700;\n}\n#experience-ctn #experience-list-ctn .experience-list p {\n  font-size: 1rem;\n}\n#experience-ctn #experience-list-ctn .experience-list:hover {\n  cursor: pointer;\n}\n#experience-ctn #experience-list-ctn .active-list {\n  border-bottom: 2px solid hsl(47, 100%, 50%);\n}\n#experience-ctn #experience-list-ctn .active-header {\n  color: hsl(47, 100%, 50%);\n}\n#experience-ctn #experience-details-ctn {\n  width: 50%;\n  padding: 0.9375rem;\n}\n#experience-ctn #experience-details-ctn h3,\n#experience-ctn #experience-details-ctn h4 {\n  display: inline-block;\n}\n#experience-ctn #experience-details-ctn h3 {\n  color: hsl(47, 100%, 50%);\n}\n#experience-ctn #experience-details-ctn h4 {\n  font-weight: 700;\n}\n#experience-ctn #experience-details-ctn h5 {\n  font-size: 1.125rem;\n}\n#experience-ctn #experience-details-ctn ul {\n  padding-left: 1.25rem;\n  padding-top: 0.625rem;\n  font-size: 1rem;\n}\n#experience-ctn #experience-details-ctn li {\n  line-height: 2;\n}\n#experience-ctn #experience-details-ctn li::marker {\n  color: hsl(47, 100%, 50%);\n}\n\n.hidden-details {\n  display: none;\n}\n\n@media screen and (max-width: 62.5rem) {\n  #experience-ctn #experience-list-ctn {\n    width: 35%;\n  }\n  #experience-ctn #experience-details-ctn {\n    width: 65%;\n  }\n}\n@media screen and (max-width: 45.3125rem) {\n  #experience-ctn {\n    padding-top: 2.1875rem;\n  }\n  #experience-ctn #experience-list-ctn {\n    display: none;\n  }\n  #experience-ctn #experience-details-ctn {\n    padding: 0;\n    width: 100%;\n  }\n  #experience-ctn #experience-details-ctn h3 {\n    display: block;\n  }\n  #experience-ctn #experience-details-ctn h4 {\n    display: block;\n  }\n  #experience-ctn .hidden-details {\n    display: block;\n  }\n  #experience-ctn .hidden-details:nth-child(n+1) {\n    padding-top: 1.5625rem;\n  }\n}\n#skills {\n  background-color: hsl(0, 0%, 20%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2.1875rem;\n}\n#skills h2 {\n  color: hsl(47, 100%, 50%);\n}\n\n#skills-ctn {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  width: 100%;\n  gap: 1.5625rem;\n  color: hsl(0, 0%, 0%);\n  padding-top: 2.1875rem;\n}\n#skills-ctn .skill {\n  box-sizing: border-box;\n  background-color: hsl(0, 0%, 100%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  filter: drop-shadow(0 0 0.3125rem hsl(0, 0%, 0%));\n}\n#skills-ctn .skill div {\n  padding-top: 0.9375rem;\n}\n#skills-ctn .skill p {\n  padding: 0.9375rem;\n}\n#skills-ctn .skill img {\n  display: block;\n  object-fit: contain;\n  width: auto;\n  height: auto;\n  max-height: 3.75rem;\n}\n\n@media screen and (max-width: 75rem) {\n  #skills-ctn {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media screen and (max-width: 56.25rem) {\n  #skills-ctn {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media screen and (max-width: 40.625rem) {\n  #skills-ctn {\n    grid-template-columns: repeat(2, 1fr);\n    font-size: 1rem;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #skills-ctn img {\n    max-width: 6.25rem;\n  }\n}\n#mobile-btn {\n  display: none;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2.1875rem;\n}\n#mobile-btn .mobile-lines {\n  height: 0.1875rem;\n  width: 100%;\n  background-color: hsl(0, 0%, 100%);\n}\n\n#mobile-nav {\n  display: none;\n  text-align: right;\n  position: fixed;\n  top: 1.5625rem;\n  right: 1.5625rem;\n  padding: 2.1875rem;\n  font-size: 1.125rem;\n  background-color: hsl(208, 88%, 3%);\n  width: 80%;\n  flex-direction: column;\n  z-index: 4;\n}\n#mobile-nav ul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  padding-top: 1.5625rem;\n}\n#mobile-nav i {\n  font-size: 2.1875rem;\n}\n#mobile-nav .mobile-nav-link {\n  color: hsl(0, 0%, 100%);\n}\n#mobile-nav .resume-link {\n  padding: 0;\n  max-width: none;\n  display: block;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: hsl(47, 100%, 50%);\n  background: none;\n}\n\n#mobile-nav-overlay {\n  display: none;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: hsla(0, 0%, 100%, 0.25);\n  z-index: 3;\n}\n\n@media screen and (max-width: 59.375rem) {\n  #mobile-btn {\n    display: flex;\n  }\n}","$font-primary: \"Inter\", sans-serf;\n","// Primary Colors\n$clr-primary: hsl(208, 88%, 3%);\n$clr-secondary: hsl(47, 100%, 50%);\n$clr-secondary-hover: hsl(47, 100%, 68%);\n$clr-tertiary: hsl(208, 69%, 46%);\n$clr-gradient-one: hsl(189, 80%, 12%);\n$clr-gradient-two: hsl(198, 83%, 18%);\n$clr-gradient-three: hsl(202, 84%, 15%);\n$clr-gradient-four: hsl(211, 85%, 5%);\n\n// Neutral Colors\n$clr-white: hsl(0, 0%, 100%);\n$clr-gray-lt: hsl(0, 0%, 85%);\n$clr-gray: hsl(0, 0%, 50%);\n$clr-gray-dk: hsl(0, 0%, 20%);\n$clr-black: hsl(0, 0%, 0%);\n","*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont: inherit;\n}\n\nimg,\npicture,\nsvg {\n\tdisplay: block;\n}\n","@use \"../utilities/\" as *;\n@use \"colors\" as *;\n\nh1,\nh2,\nh3 {\n\tmargin: 0;\n\tline-height: 1.1;\n}\n\nh1 {\n\tfont-size: rem(32);\n\tfont-weight: 700;\n}\n\nh2 {\n\tfont-size: rem(26);\n\tcolor: $clr-white;\n\tfont-weight: 700;\n}\n\nh3 {\n\tfont-size: rem(22);\n\tfont-weight: 700;\n}\n\na,\na:visited,\na:active {\n\ttext-decoration: none;\n}\n","@use \"../utilities/\" as *;\n\n.container {\n\tmax-width: rem(1590);\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\nheader {\n\tbackground-color: $clr-primary;\n\tcolor: $clr-white;\n\ttop: rem(0);\n\tborder-bottom: 1px solid $clr-gray-dk;\n\tposition: sticky;\n\tz-index: 10;\n}\n\n#header-ctn {\n\tmargin: 0 auto;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tpadding: rem(25) 0;\n\n\t#header-left,\n\t#header-right {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tgap: rem(50);\n\t}\n\n\tnav,\n\t#socials {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tgap: rem(30);\n\t\talign-items: center;\n\t}\n}\n\n.desktop-link {\n\tcolor: $clr-white;\n\tdisplay: flex;\n\talign-items: center;\n\tborder-bottom: 2px solid $clr-primary;\n\tfont-size: rem(16);\n}\n\n.desktop-link:hover {\n\tborder-bottom: 2px solid $clr-secondary;\n}\n\ni {\n\tcolor: $clr-white;\n\tfont-size: rem(28);\n}\n\ni:hover {\n\tcolor: $clr-secondary;\n}\n\n@media screen and (max-width: rem(1590)) {\n\t#header-ctn {\n\t\tpadding: rem(25);\n\t}\n}\n\n@media screen and (max-width: rem(950)) {\n\t#header-ctn {\n\t\t#header-left > nav {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t#header-right {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#about {\n\tbackground-color: $clr-primary;\n\tcolor: $clr-white;\n\toverflow: hidden;\n\tdisplay: flex;\n\talign-items: end;\n\tpadding-top: rem(50);\n\n\t#about-ctn {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tbackground: linear-gradient(\n\t\t\t0.35turn,\n\t\t\t$clr-gradient-one,\n\t\t\t$clr-gradient-two,\n\t\t\t$clr-gradient-three,\n\t\t\t$clr-gradient-four\n\t\t);\n\t\tgap: rem(25);\n\t\theight: 90%;\n\t\tmargin: 0 auto;\n\t\twidth: 60%;\n\t\tborder-radius: rem(25) rem(25) 0 0;\n\t\tpadding: rem(40) rem(80);\n\t\tborder: rem(5) solid $clr-gradient-two;\n\t\tborder-bottom: 0;\n\n\t\t#about-content {\n\t\t\tdisplay: flex;\n\t\t\tgap: rem(25);\n\t\t\tflex-direction: column;\n\t\t\twidth: 70%;\n\t\t}\n\t}\n\n\t#img-ctn {\n\t\twidth: 30%;\n\n\t\timg {\n\t\t\tmax-width: 100%;\n\t\t\tborder-radius: 50%;\n\t\t\tfilter: drop-shadow(rem(7) rem(7) 0 $clr-tertiary);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1024)) {\n\t#about #about-ctn {\n\t\twidth: 80%;\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t#about {\n\t\t#about-ctn {\n\t\t\tflex-direction: column-reverse;\n\n\t\t\t#about-content {\n\t\t\t\twidth: 100%;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t#about {\n\t\t#about-ctn {\n\t\t\tpadding: rem(20);\n\t\t\tfont-size: rem(16);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n.resume-link {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: $clr-secondary;\n\tcolor: $clr-black;\n\tborder-radius: rem(50);\n\tpadding: rem(5) rem(30);\n\tfont-size: rem(16);\n\tmax-width: rem(175);\n}\n\n.resume-link:hover {\n\tbackground-color: $clr-secondary-hover;\n\tcolor: $clr-black;\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#portfolio {\n\tbackground-color: $clr-gray-dk;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: rem(35);\n\n\th2 {\n\t\tcolor: $clr-secondary;\n\t}\n}\n\n#portfolio-ctn {\n\tpadding-top: rem(35);\n\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr);\n\tgap: rem(25);\n\n\t.portfolio-card {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tcolor: $clr-white;\n\t}\n\n\t.img-ctn {\n\t\tdisplay: flex;\n\t\theight: 70%;\n\t\toverflow: hidden;\n\t}\n\n\timg {\n\t\tobject-fit: cover;\n\t\twidth: 100%;\n\t}\n\n\th3 {\n\t\tpadding-bottom: rem(20);\n\t\ttext-align: center;\n\t}\n\n\t.btn-ctn {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t}\n\n\ta {\n\t\ttext-align: center;\n\t\tfont-size: rem(18);\n\t\twidth: 100%;\n\t\tborder: none;\n\t\tbackground-color: $clr-primary;\n\t\tcolor: $clr-white;\n\t\tpadding: rem(20);\n\t}\n\n\t.code-btn {\n\t\tbackground-color: $clr-tertiary;\n\t}\n\n\ta:hover {\n\t\tbackground-color: $clr-secondary;\n\t\tcolor: $clr-black;\n\t\tcursor: pointer;\n\t}\n}\n\n@media screen and (max-width: rem(1400)) {\n\t#portfolio-ctn {\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t}\n}\n\n@media screen and (max-width: rem(1060)) {\n\t#portfolio-ctn {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t}\n}\n\n@media screen and (max-width: rem(700)) {\n\t#portfolio-ctn {\n\t\tgrid-template-columns: repeat(1, 1fr);\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t#portfolio-ctn {\n\t\ta {\n\t\t\tfont-size: rem(16);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(320)) {\n\t#portfolio-ctn {\n\t\ta {\n\t\t\tfont-size: rem(14);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#experience {\n\tbackground-color: $clr-primary;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: rem(35);\n}\n\n#experience-ctn {\n\tdisplay: flex;\n\twidth: 100%;\n\tjustify-content: center;\n\tpadding-top: rem(25);\n\tgap: rem(15);\n\tcolor: $clr-white;\n\n\t#experience-list-ctn {\n\t\twidth: 25%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tborder-left: 5px solid $clr-secondary;\n\n\t\t.experience-list {\n\t\t\tborder-bottom: 2px solid $clr-primary;\n\t\t\tpadding: rem(15);\n\n\t\t\th4 {\n\t\t\t\tfont-size: rem(18);\n\t\t\t\tfont-weight: 700;\n\t\t\t}\n\n\t\t\tp {\n\t\t\t\tfont-size: rem(16);\n\t\t\t}\n\t\t}\n\n\t\t.experience-list:hover {\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t.active-list {\n\t\t\tborder-bottom: 2px solid $clr-secondary;\n\t\t}\n\n\t\t.active-header {\n\t\t\tcolor: $clr-secondary;\n\t\t}\n\t}\n\n\t#experience-details-ctn {\n\t\twidth: 50%;\n\t\tpadding: rem(15);\n\n\t\th3,\n\t\th4 {\n\t\t\tdisplay: inline-block;\n\t\t}\n\n\t\th3 {\n\t\t\tcolor: $clr-secondary;\n\t\t}\n\n\t\th4 {\n\t\t\tfont-weight: 700;\n\t\t}\n\n\t\th5 {\n\t\t\tfont-size: rem(18);\n\t\t}\n\n\t\tul {\n\t\t\tpadding-left: rem(20);\n\t\t\tpadding-top: rem(10);\n\t\t\tfont-size: rem(16);\n\t\t}\n\n\t\tli {\n\t\t\tline-height: 2;\n\t\t}\n\n\t\tli::marker {\n\t\t\tcolor: $clr-secondary;\n\t\t}\n\t}\n}\n\n.hidden-details {\n\tdisplay: none;\n}\n\n@media screen and (max-width: rem(1000)) {\n\t#experience-ctn {\n\t\t#experience-list-ctn {\n\t\t\twidth: 35%;\n\t\t}\n\n\t\t#experience-details-ctn {\n\t\t\twidth: 65%;\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(725)) {\n\t#experience-ctn {\n\t\tpadding-top: rem(35);\n\n\t\t#experience-list-ctn {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t#experience-details-ctn {\n\t\t\tpadding: 0;\n\t\t\twidth: 100%;\n\n\t\t\th3 {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\n\t\t\th4 {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\n\t\t.hidden-details {\n\t\t\tdisplay: block;\n\t\t}\n\n\t\t.hidden-details:nth-child(n + 1) {\n\t\t\tpadding-top: rem(25);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#skills {\n\tbackground-color: $clr-gray-dk;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: rem(35);\n\n\th2 {\n\t\tcolor: $clr-secondary;\n\t}\n}\n\n#skills-ctn {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(6, 1fr);\n\twidth: 100%;\n\tgap: rem(25);\n\tcolor: $clr-black;\n\tpadding-top: rem(35);\n\n\t.skill {\n\t\tbox-sizing: border-box;\n\t\tbackground-color: $clr-white;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tfilter: drop-shadow(0 0 rem(5) $clr-black);\n\n\t\tdiv {\n\t\t\tpadding-top: rem(15);\n\t\t}\n\n\t\tp {\n\t\t\tpadding: rem(15);\n\t\t}\n\n\t\timg {\n\t\t\tdisplay: block;\n\t\t\tobject-fit: contain;\n\t\t\twidth: auto;\n\t\t\theight: auto;\n\t\t\tmax-height: rem(60);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1200)) {\n\t#skills-ctn {\n\t\tgrid-template-columns: repeat(4, 1fr);\n\t}\n}\n\n@media screen and (max-width: rem(900)) {\n\t#skills-ctn {\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t}\n}\n\n@media screen and (max-width: rem(650)) {\n\t#skills-ctn {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t\tfont-size: rem(16);\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t#skills-ctn {\n\t\timg {\n\t\t\tmax-width: rem(100);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#mobile-btn {\n\tdisplay: none;\n\tflex-direction: column;\n\tjustify-content: space-around;\n\twidth: rem(35);\n\n\t.mobile-lines {\n\t\theight: rem(3);\n\t\twidth: 100%;\n\t\tbackground-color: $clr-white;\n\t}\n}\n\n#mobile-nav {\n\tdisplay: none;\n\ttext-align: right;\n\tposition: fixed;\n\ttop: rem(25);\n\tright: rem(25);\n\tpadding: rem(35);\n\tfont-size: rem(18);\n\tbackground-color: $clr-primary;\n\twidth: 80%;\n\tflex-direction: column;\n\tz-index: 4;\n\n\tul {\n\t\tlist-style: none;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(20);\n\t\tpadding-top: rem(25);\n\t}\n\n\ti {\n\t\tfont-size: rem(35);\n\t}\n\n\t.mobile-nav-link {\n\t\tcolor: $clr-white;\n\t}\n\n\t.resume-link {\n\t\tpadding: 0;\n\t\tmax-width: none;\n\t\tdisplay: block;\n\t\tfont-size: rem(20);\n\t\tfont-weight: 700;\n\t\tcolor: $clr-secondary;\n\t\tbackground: none;\n\t}\n}\n\n#mobile-nav-overlay {\n\tdisplay: none;\n\tposition: fixed;\n\theight: 100%;\n\twidth: 100%;\n\ttop: 0;\n\tleft: 0;\n\tbackground-color: hsla(0, 0%, 100%, 0.25);\n\tz-index: 3;\n}\n\n@media screen and (max-width: rem(950)) {\n\t#mobile-btn {\n\t\tdisplay: flex;\n\t}\n}\n"],"sourceRoot":""}]);
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
const expDetails = Array.from(document.querySelectorAll(".experience-details"));

function loadExperience() {
	loadExperienceEventListener();
}

function loadExperienceEventListener() {
	expList.map((exp) => {
		exp.addEventListener("click", updateExperienceList);
		exp.addEventListener("click", updateExperienceDetails);
	});
}

function updateExperienceList() {
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
}

function updateExperienceDetails() {
	for (let i = 0; i < expList.length; i++) {
		if (expList[i].classList.contains("active-list")) {
			for (let j = 0; j < expDetails.length; j++) {
				expDetails[j].classList.remove("active-details");
				expDetails[j].classList.add("hidden-details");
			}

			expDetails[i].classList.remove("hidden-details");
			expDetails[i].classList.add("active-details");
		}
	}
}


/***/ }),

/***/ "./src/js/components/mobile.js":
/*!*************************************!*\
  !*** ./src/js/components/mobile.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMobile: () => (/* binding */ loadMobile)
/* harmony export */ });


const mobileBtn = document.querySelector("#mobile-btn");
const mobileNav = document.querySelector("#mobile-nav");
const mobileNavOverlay = document.querySelector("#mobile-nav-overlay");
const mobileNavExit = document.querySelector("#mobile-nav-exit");
const mobileNavLink = Array.from(document.querySelectorAll(".mobile-nav-link"));

function loadMobile() {
	loadMobileEventListeners();
}

function loadMobileEventListeners() {
	mobileBtn.addEventListener("click", displayMobileNav);
	mobileNavExit.addEventListener("click", hideMobileNav);
	mobileNavLink.map((link) => {
		link.addEventListener("click", hideMobileNav);
	});
}

function displayMobileNav() {
	mobileNav.style.display = "flex";
	mobileNavOverlay.style.display = "block";
}

function hideMobileNav() {
	mobileNav.style.display = "none";
	mobileNavOverlay.style.display = "none";
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
/* harmony import */ var _components_mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mobile */ "./src/js/components/mobile.js");




function init() {
	(0,_components_experience__WEBPACK_IMPORTED_MODULE_0__.loadExperience)();
	(0,_components_mobile__WEBPACK_IMPORTED_MODULE_1__.loadMobile)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8seXJCQUF5ckIsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sVUFBVSxNQUFNLFFBQVEsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxRQUFRLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sT0FBTyxVQUFVLFdBQVcsVUFBVSxNQUFNLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksT0FBTyxNQUFNLFlBQVksUUFBUSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sWUFBWSxZQUFZLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFFBQVEsTUFBTSxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFFBQVEsTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFN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Q1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ1I7QUFDYTs7QUFFekMsaURBQUk7O0FBRUo7O0FBRUE7QUFDQSxlQUFlLDBEQUFNO0FBQ3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXNzZXRzL3Jlc3VtZS5wZGYiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzPzMyMWYiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvZXhwZXJpZW5jZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvbW9iaWxlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvaW5pdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJmO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBjb2xvcjogaHNsKDAsIDAlLCAyMCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDg1JSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmltZyxcbnBpY3R1cmUsXG5zdmcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDEsXG5oMixcbmgzIHtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuNjI1cmVtO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDEuMzc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5hLFxuYTp2aXNpdGVkLFxuYTphY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDk5LjM3NXJlbTtcbn1cblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOCwgODglLCAzJSk7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICB0b3A6IDByZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMCUsIDIwJSk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4jaGVhZGVyLWN0biB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEuNTYyNXJlbSAwO1xufVxuI2hlYWRlci1jdG4gI2hlYWRlci1sZWZ0LFxuI2hlYWRlci1jdG4gI2hlYWRlci1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAzLjEyNXJlbTtcbn1cbiNoZWFkZXItY3RuIG5hdixcbiNoZWFkZXItY3RuICNzb2NpYWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEuODc1cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGVza3RvcC1saW5rIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBoc2woMjA4LCA4OCUsIDMlKTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uZGVza3RvcC1saW5rOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGhzbCg0NywgMTAwJSwgNTAlKTtcbn1cblxuaSB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICBmb250LXNpemU6IDEuNzVyZW07XG59XG5cbmk6aG92ZXIge1xuICBjb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OS4zNzVyZW0pIHtcbiAgI2hlYWRlci1jdG4ge1xuICAgIHBhZGRpbmc6IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTkuMzc1cmVtKSB7XG4gICNoZWFkZXItY3RuICNoZWFkZXItbGVmdCA+IG5hdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjaGVhZGVyLWN0biAjaGVhZGVyLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4jYWJvdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA4OCUsIDMlKTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG4gIHBhZGRpbmctdG9wOiAzLjEyNXJlbTtcbn1cbiNhYm91dCAjYWJvdXQtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDAuMzV0dXJuLCBoc2woMTg5LCA4MCUsIDEyJSksIGhzbCgxOTgsIDgzJSwgMTglKSwgaHNsKDIwMiwgODQlLCAxNSUpLCBoc2woMjExLCA4NSUsIDUlKSk7XG4gIGdhcDogMS41NjI1cmVtO1xuICBoZWlnaHQ6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA2MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEuNTYyNXJlbSAxLjU2MjVyZW0gMCAwO1xuICBwYWRkaW5nOiAyLjVyZW0gNXJlbTtcbiAgYm9yZGVyOiAwLjMxMjVyZW0gc29saWQgaHNsKDE5OCwgODMlLCAxOCUpO1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuI2Fib3V0ICNhYm91dC1jdG4gI2Fib3V0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuNTYyNXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDcwJTtcbn1cbiNhYm91dCAjaW1nLWN0biB7XG4gIHdpZHRoOiAzMCU7XG59XG4jYWJvdXQgI2ltZy1jdG4gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMC40Mzc1cmVtIDAuNDM3NXJlbSAwIGhzbCgyMDgsIDY5JSwgNDYlKSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XG4gICNhYm91dCAjYWJvdXQtY3RuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAjYWJvdXQgI2Fib3V0LWN0biB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG4gICNhYm91dCAjYWJvdXQtY3RuICNhYm91dC1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gICNhYm91dCAjYWJvdXQtY3RuIHtcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuLnJlc3VtZS1saW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xuICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcbiAgcGFkZGluZzogMC4zMTI1cmVtIDEuODc1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1heC13aWR0aDogMTAuOTM3NXJlbTtcbn1cblxuLnJlc3VtZS1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQ3LCAxMDAlLCA2OCUpO1xuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XG59XG5cbiNwb3J0Zm9saW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDIwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIuMTg3NXJlbTtcbn1cbiNwb3J0Zm9saW8gaDIge1xuICBjb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xufVxuXG4jcG9ydGZvbGlvLWN0biB7XG4gIHBhZGRpbmctdG9wOiAyLjE4NzVyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogMS41NjI1cmVtO1xufVxuI3BvcnRmb2xpby1jdG4gLnBvcnRmb2xpby1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xufVxuI3BvcnRmb2xpby1jdG4gLmltZy1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDcwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNwb3J0Zm9saW8tY3RuIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbn1cbiNwb3J0Zm9saW8tY3RuIGgzIHtcbiAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNwb3J0Zm9saW8tY3RuIC5idG4tY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG4jcG9ydGZvbGlvLWN0biBhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA4OCUsIDMlKTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG59XG4jcG9ydGZvbGlvLWN0biAuY29kZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA2OSUsIDQ2JSk7XG59XG4jcG9ydGZvbGlvLWN0biBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODcuNXJlbSkge1xuICAjcG9ydGZvbGlvLWN0biB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjYuMjVyZW0pIHtcbiAgI3BvcnRmb2xpby1jdG4ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzLjc1cmVtKSB7XG4gICNwb3J0Zm9saW8tY3RuIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XG4gICNwb3J0Zm9saW8tY3RuIGEge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjByZW0pIHtcbiAgI3BvcnRmb2xpby1jdG4gYSB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgfVxufVxuI2V4cGVyaWVuY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA4OCUsIDMlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMi4xODc1cmVtO1xufVxuXG4jZXhwZXJpZW5jZS1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxLjU2MjVyZW07XG4gIGdhcDogMC45Mzc1cmVtO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biB7XG4gIHdpZHRoOiAyNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgaHNsKDQ3LCAxMDAlLCA1MCUpO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5leHBlcmllbmNlLWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgaHNsKDIwOCwgODglLCAzJSk7XG4gIHBhZGRpbmc6IDAuOTM3NXJlbTtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biAuZXhwZXJpZW5jZS1saXN0IGg0IHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biAuZXhwZXJpZW5jZS1saXN0IHAge1xuICBmb250LXNpemU6IDFyZW07XG59XG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4gLmV4cGVyaWVuY2UtbGlzdDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biAuYWN0aXZlLWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgaHNsKDQ3LCAxMDAlLCA1MCUpO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5hY3RpdmUtaGVhZGVyIHtcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDAuOTM3NXJlbTtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBoMyxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBoNCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBoMyB7XG4gIGNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XG59XG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gaDQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGg1IHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biB1bCB7XG4gIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgcGFkZGluZy10b3A6IDAuNjI1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gbGkge1xuICBsaW5lLWhlaWdodDogMjtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBsaTo6bWFya2VyIHtcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcbn1cblxuLmhpZGRlbi1kZXRhaWxzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIuNXJlbSkge1xuICAjZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4ge1xuICAgIHdpZHRoOiAzNSU7XG4gIH1cbiAgI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIHtcbiAgICB3aWR0aDogNjUlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NS4zMTI1cmVtKSB7XG4gICNleHBlcmllbmNlLWN0biB7XG4gICAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcbiAgfVxuICAjZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBoMyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGg0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAjZXhwZXJpZW5jZS1jdG4gLmhpZGRlbi1kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAjZXhwZXJpZW5jZS1jdG4gLmhpZGRlbi1kZXRhaWxzOm50aC1jaGlsZChuKzEpIHtcbiAgICBwYWRkaW5nLXRvcDogMS41NjI1cmVtO1xuICB9XG59XG4jc2tpbGxzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAyMCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyLjE4NzVyZW07XG59XG4jc2tpbGxzIGgyIHtcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcbn1cblxuI3NraWxscy1jdG4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xuICB3aWR0aDogMTAwJTtcbiAgZ2FwOiAxLjU2MjVyZW07XG4gIGNvbG9yOiBoc2woMCwgMCUsIDAlKTtcbiAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcbn1cbiNza2lsbHMtY3RuIC5za2lsbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuMzEyNXJlbSBoc2woMCwgMCUsIDAlKSk7XG59XG4jc2tpbGxzLWN0biAuc2tpbGwgZGl2IHtcbiAgcGFkZGluZy10b3A6IDAuOTM3NXJlbTtcbn1cbiNza2lsbHMtY3RuIC5za2lsbCBwIHtcbiAgcGFkZGluZzogMC45Mzc1cmVtO1xufVxuI3NraWxscy1jdG4gLnNraWxsIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAzLjc1cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NXJlbSkge1xuICAjc2tpbGxzLWN0biB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVyZW0pIHtcbiAgI3NraWxscy1jdG4ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwLjYyNXJlbSkge1xuICAjc2tpbGxzLWN0biB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgI3NraWxscy1jdG4gaW1nIHtcbiAgICBtYXgtd2lkdGg6IDYuMjVyZW07XG4gIH1cbn1cbiNtb2JpbGUtYnRuIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAyLjE4NzVyZW07XG59XG4jbW9iaWxlLWJ0biAubW9iaWxlLWxpbmVzIHtcbiAgaGVpZ2h0OiAwLjE4NzVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xufVxuXG4jbW9iaWxlLW5hdiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMS41NjI1cmVtO1xuICByaWdodDogMS41NjI1cmVtO1xuICBwYWRkaW5nOiAyLjE4NzVyZW07XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDgsIDg4JSwgMyUpO1xuICB3aWR0aDogODAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB6LWluZGV4OiA0O1xufVxuI21vYmlsZS1uYXYgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuMjVyZW07XG4gIHBhZGRpbmctdG9wOiAxLjU2MjVyZW07XG59XG4jbW9iaWxlLW5hdiBpIHtcbiAgZm9udC1zaXplOiAyLjE4NzVyZW07XG59XG4jbW9iaWxlLW5hdiAubW9iaWxlLW5hdi1saW5rIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG59XG4jbW9iaWxlLW5hdiAucmVzdW1lLWxpbmsge1xuICBwYWRkaW5nOiAwO1xuICBtYXgtd2lkdGg6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbiNtb2JpbGUtbmF2LW92ZXJsYXkge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC4yNSk7XG4gIHotaW5kZXg6IDM7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5LjM3NXJlbSkge1xuICAjbW9iaWxlLWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fZ2VuZXJhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fY29udGFpbmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19hYm91dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19idXR0b25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX3BvcnRmb2xpby5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19leHBlcmllbmNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX3NraWxscy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19tb2JpbGUtbmF2LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDQyxlQUFBO0FDSEQ7O0FETUE7RUFDQywrQkVUYztFRlVkLG1CQUFBO0VBQ0Esc0JHR2E7RUhGYixpQ0FBQTtFQUNBLGdCQUFBO0FDSEQ7O0FHVkE7OztFQUdDLHNCQUFBO0FIYUQ7O0FHVkE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUhhRDs7QUdWQTs7O0VBR0MsY0FBQTtBSGFEOztBSXpCQTs7O0VBR0MsU0FBQTtFQUNBLGdCQUFBO0FKNEJEOztBSXpCQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBSjRCRDs7QUl6QkE7RUFDQyxtQkFBQTtFQUNBLHVCRk5XO0VFT1gsZ0JBQUE7QUo0QkQ7O0FJekJBO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtBSjRCRDs7QUl6QkE7OztFQUdDLHFCQUFBO0FKNEJEOztBS3ZEQTtFQUNDLG9CQUFBO0FMMEREOztBTTFEQTtFQUNDLG1DSkhhO0VJSWIsdUJKTVc7RUlMWCxTQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QU42REQ7O0FNMURBO0VBQ0MsY0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FONkREO0FNM0RDOztFQUVDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QU42REY7QU0xREM7O0VBRUMsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FONERGOztBTXhEQTtFQUNDLHVCSnhCVztFSXlCWCxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7QU4yREQ7O0FNeERBO0VBQ0MsMkNBQUE7QU4yREQ7O0FNeERBO0VBQ0MsdUJKcENXO0VJcUNYLGtCQUFBO0FOMkREOztBTXhEQTtFQUNDLHlCSmxEZTtBRjZHaEI7O0FNeERBO0VBQ0M7SUFDQyxrQkFBQTtFTjJEQTtBQUNGO0FNeERBO0VBRUU7SUFDQyxhQUFBO0VOeUREO0VNdERBO0lBQ0MsYUFBQTtFTndERDtBQUNGO0FPMUhBO0VBQ0MsbUNMSGE7RUtJYix1QkxNVztFS0xYLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QVA0SEQ7QU8xSEM7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvSEFBQTtFQU9BLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxzQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBUHNIRjtBT3BIRTtFQUNDLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FQc0hIO0FPbEhDO0VBQ0MsVUFBQTtBUG9IRjtBT2xIRTtFQUNDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZEQUFBO0FQb0hIOztBTy9HQTtFQUNDO0lBQ0MsVUFBQTtFUGtIQTtBQUNGO0FPL0dBO0VBRUU7SUFDQyw4QkFBQTtFUGdIRDtFTzlHQztJQUNDLFdBQUE7SUFDQSxtQkFBQTtFUGdIRjtBQUNGO0FPM0dBO0VBRUU7SUFDQyxnQkFBQTtJQUNBLGVBQUE7RVA0R0Q7QUFDRjtBUWxMQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NOTGU7RU1NZixxQk5PVztFTU5YLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QVJvTEQ7O0FRakxBO0VBQ0Msb0NOYnFCO0VNY3JCLHFCTkZXO0FGc0xaOztBU2xNQTtFQUNDLGlDUFVhO0VPVGIsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBVHFNRDtBU25NQztFQUNDLHlCUFRjO0FGOE1oQjs7QVNqTUE7RUFDQyxzQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7QVRvTUQ7QVNsTUM7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJQZlU7QUZtTlo7QVNqTUM7RUFDQyxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FUbU1GO0FTaE1DO0VBQ0MsaUJBQUE7RUFDQSxXQUFBO0FUa01GO0FTL0xDO0VBQ0MsdUJBQUE7RUFDQSxrQkFBQTtBVGlNRjtBUzlMQztFQUNDLGFBQUE7RUFDQSxXQUFBO0FUZ01GO0FTN0xDO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNQdERZO0VPdURaLHVCUDdDVTtFTzhDVixnQkFBQTtBVCtMRjtBUzVMQztFQUNDLG9DUHpEYTtBRnVQZjtBUzNMQztFQUNDLG9DUC9EYztFT2dFZCxxQlBuRFU7RU9vRFYsZUFBQTtBVDZMRjs7QVN6TEE7RUFDQztJQUNDLHFDQUFBO0VUNExBO0FBQ0Y7QVN6TEE7RUFDQztJQUNDLHFDQUFBO0VUMkxBO0FBQ0Y7QVN4TEE7RUFDQztJQUNDLHFDQUFBO0VUMExBO0FBQ0Y7QVN2TEE7RUFFRTtJQUNDLGVBQUE7RVR3TEQ7QUFDRjtBU3BMQTtFQUVFO0lBQ0MsbUJBQUE7RVRxTEQ7QUFDRjtBVXZSQTtFQUNDLG1DUkhhO0VRSWIsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBVnlSRDs7QVV0UkE7RUFDQyxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJSTlc7QUYrUlo7QVV2UkM7RUFDQyxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUNBQUE7QVZ5UkY7QVV2UkU7RUFDQywwQ0FBQTtFQUNBLGtCQUFBO0FWeVJIO0FVdlJHO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtBVnlSSjtBVXRSRztFQUNDLGVBQUE7QVZ3Uko7QVVwUkU7RUFDQyxlQUFBO0FWc1JIO0FVblJFO0VBQ0MsMkNBQUE7QVZxUkg7QVVsUkU7RUFDQyx5QlI5Q2E7QUZrVWhCO0FVaFJDO0VBQ0MsVUFBQTtFQUNBLGtCQUFBO0FWa1JGO0FVaFJFOztFQUVDLHFCQUFBO0FWa1JIO0FVL1FFO0VBQ0MseUJSNURhO0FGNlVoQjtBVTlRRTtFQUNDLGdCQUFBO0FWZ1JIO0FVN1FFO0VBQ0MsbUJBQUE7QVYrUUg7QVU1UUU7RUFDQyxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBVjhRSDtBVTNRRTtFQUNDLGNBQUE7QVY2UUg7QVUxUUU7RUFDQyx5QlJsRmE7QUY4VmhCOztBVXZRQTtFQUNDLGFBQUE7QVYwUUQ7O0FVdlFBO0VBRUU7SUFDQyxVQUFBO0VWeVFEO0VVdFFBO0lBQ0MsVUFBQTtFVndRRDtBQUNGO0FVcFFBO0VBQ0M7SUFDQyxzQkFBQTtFVnNRQTtFVXBRQTtJQUNDLGFBQUE7RVZzUUQ7RVVuUUE7SUFDQyxVQUFBO0lBQ0EsV0FBQTtFVnFRRDtFVW5RQztJQUNDLGNBQUE7RVZxUUY7RVVsUUM7SUFDQyxjQUFBO0VWb1FGO0VVaFFBO0lBQ0MsY0FBQTtFVmtRRDtFVS9QQTtJQUNDLHNCQUFBO0VWaVFEO0FBQ0Y7QVdsWUE7RUFDQyxpQ1RVYTtFU1RiLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QVhvWUQ7QVdsWUM7RUFDQyx5QlRUYztBRjZZaEI7O0FXaFlBO0VBQ0MsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxxQlRMVztFU01YLHNCQUFBO0FYbVlEO0FXallDO0VBQ0Msc0JBQUE7RUFDQSxrQ1RkVTtFU2VWLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7QVhtWUY7QVdqWUU7RUFDQyxzQkFBQTtBWG1ZSDtBV2hZRTtFQUNDLGtCQUFBO0FYa1lIO0FXL1hFO0VBQ0MsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBWGlZSDs7QVc1WEE7RUFDQztJQUNDLHFDQUFBO0VYK1hBO0FBQ0Y7QVc1WEE7RUFDQztJQUNDLHFDQUFBO0VYOFhBO0FBQ0Y7QVczWEE7RUFDQztJQUNDLHFDQUFBO0lBQ0EsZUFBQTtFWDZYQTtBQUNGO0FXMVhBO0VBRUU7SUFDQyxrQkFBQTtFWDJYRDtBQUNGO0FZaGNBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBWmtjRDtBWWhjQztFQUNDLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtDVkRVO0FGbWNaOztBWTliQTtFQUNDLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNWdkJhO0VVd0JiLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QVppY0Q7QVkvYkM7RUFDQyxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBWmljRjtBWTliQztFQUNDLG9CQUFBO0FaZ2NGO0FZN2JDO0VBQ0MsdUJWL0JVO0FGOGRaO0FZNWJDO0VBQ0MsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCVmpEYztFVWtEZCxnQkFBQTtBWjhiRjs7QVkxYkE7RUFDQyxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx5Q0FBQTtFQUNBLFVBQUE7QVo2YkQ7O0FZMWJBO0VBQ0M7SUFDQyxhQUFBO0VaNmJBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCJjb2xvcnNcXFwiIGFzICo7XFxuQHVzZSBcXFwiZm9udHNcXFwiIGFzICo7XFxuXFxuaHRtbCB7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXG5cXHRmb250LXNpemU6IHJlbSgxOCk7XFxuXFx0Y29sb3I6ICRjbHItZ3JheS1kaztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWdyYXktbHQ7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXCIsXCJodG1sIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJmO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDIwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDg1JSk7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG4gIG1hcmdpbjogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS42MjVyZW07XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA5OS4zNzVyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA4OCUsIDMlKTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgdG9wOiAwcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbCgwLCAwJSwgMjAlKTtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuI2hlYWRlci1jdG4ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMS41NjI1cmVtIDA7XFxufVxcbiNoZWFkZXItY3RuICNoZWFkZXItbGVmdCxcXG4jaGVhZGVyLWN0biAjaGVhZGVyLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDMuMTI1cmVtO1xcbn1cXG4jaGVhZGVyLWN0biBuYXYsXFxuI2hlYWRlci1jdG4gI3NvY2lhbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMS44NzVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGVza3RvcC1saW5rIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgaHNsKDIwOCwgODglLCAzJSk7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5kZXNrdG9wLWxpbms6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGhzbCg0NywgMTAwJSwgNTAlKTtcXG59XFxuXFxuaSB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcXG59XFxuXFxuaTpob3ZlciB7XFxuICBjb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OS4zNzVyZW0pIHtcXG4gICNoZWFkZXItY3RuIHtcXG4gICAgcGFkZGluZzogMS41NjI1cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OS4zNzVyZW0pIHtcXG4gICNoZWFkZXItY3RuICNoZWFkZXItbGVmdCA+IG5hdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAjaGVhZGVyLWN0biAjaGVhZGVyLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuI2Fib3V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDgsIDg4JSwgMyUpO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICBwYWRkaW5nLXRvcDogMy4xMjVyZW07XFxufVxcbiNhYm91dCAjYWJvdXQtY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDAuMzV0dXJuLCBoc2woMTg5LCA4MCUsIDEyJSksIGhzbCgxOTgsIDgzJSwgMTglKSwgaHNsKDIwMiwgODQlLCAxNSUpLCBoc2woMjExLCA4NSUsIDUlKSk7XFxuICBnYXA6IDEuNTYyNXJlbTtcXG4gIGhlaWdodDogOTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogNjAlO1xcbiAgYm9yZGVyLXJhZGl1czogMS41NjI1cmVtIDEuNTYyNXJlbSAwIDA7XFxuICBwYWRkaW5nOiAyLjVyZW0gNXJlbTtcXG4gIGJvcmRlcjogMC4zMTI1cmVtIHNvbGlkIGhzbCgxOTgsIDgzJSwgMTglKTtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVxcbiNhYm91dCAjYWJvdXQtY3RuICNhYm91dC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuNTYyNXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNzAlO1xcbn1cXG4jYWJvdXQgI2ltZy1jdG4ge1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuI2Fib3V0ICNpbWctY3RuIGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuNDM3NXJlbSAwLjQzNzVyZW0gMCBoc2woMjA4LCA2OSUsIDQ2JSkpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NHJlbSkge1xcbiAgI2Fib3V0ICNhYm91dC1jdG4ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xcbiAgI2Fib3V0ICNhYm91dC1jdG4ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICB9XFxuICAjYWJvdXQgI2Fib3V0LWN0biAjYWJvdXQtY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICAjYWJvdXQgI2Fib3V0LWN0biB7XFxuICAgIHBhZGRpbmc6IDEuMjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuLnJlc3VtZS1saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxuICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcXG4gIHBhZGRpbmc6IDAuMzEyNXJlbSAxLjg3NXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1heC13aWR0aDogMTAuOTM3NXJlbTtcXG59XFxuXFxuLnJlc3VtZS1saW5rOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0NywgMTAwJSwgNjglKTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDAlKTtcXG59XFxuXFxuI3BvcnRmb2xpbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDIwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyLjE4NzVyZW07XFxufVxcbiNwb3J0Zm9saW8gaDIge1xcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcXG59XFxuXFxuI3BvcnRmb2xpby1jdG4ge1xcbiAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ2FwOiAxLjU2MjVyZW07XFxufVxcbiNwb3J0Zm9saW8tY3RuIC5wb3J0Zm9saW8tY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbn1cXG4jcG9ydGZvbGlvLWN0biAuaW1nLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4jcG9ydGZvbGlvLWN0biBpbWcge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuI3BvcnRmb2xpby1jdG4gaDMge1xcbiAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNwb3J0Zm9saW8tY3RuIC5idG4tY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuI3BvcnRmb2xpby1jdG4gYSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA4OCUsIDMlKTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgcGFkZGluZzogMS4yNXJlbTtcXG59XFxuI3BvcnRmb2xpby1jdG4gLmNvZGUtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDgsIDY5JSwgNDYlKTtcXG59XFxuI3BvcnRmb2xpby1jdG4gYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg3LjVyZW0pIHtcXG4gICNwb3J0Zm9saW8tY3RuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjYuMjVyZW0pIHtcXG4gICNwb3J0Zm9saW8tY3RuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMuNzVyZW0pIHtcXG4gICNwb3J0Zm9saW8tY3RuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgI3BvcnRmb2xpby1jdG4gYSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjByZW0pIHtcXG4gICNwb3J0Zm9saW8tY3RuIGEge1xcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgfVxcbn1cXG4jZXhwZXJpZW5jZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA4OCUsIDMlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIuMTg3NXJlbTtcXG59XFxuXFxuI2V4cGVyaWVuY2UtY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDEuNTYyNXJlbTtcXG4gIGdhcDogMC45Mzc1cmVtO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biB7XFxuICB3aWR0aDogMjUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGhzbCg0NywgMTAwJSwgNTAlKTtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5leHBlcmllbmNlLWxpc3Qge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGhzbCgyMDgsIDg4JSwgMyUpO1xcbiAgcGFkZGluZzogMC45Mzc1cmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4gLmV4cGVyaWVuY2UtbGlzdCBoNCB7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5leHBlcmllbmNlLWxpc3QgcCB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biAuZXhwZXJpZW5jZS1saXN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5hY3RpdmUtbGlzdCB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgaHNsKDQ3LCAxMDAlLCA1MCUpO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4gLmFjdGl2ZS1oZWFkZXIge1xcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAwLjkzNzVyZW07XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBoMyxcXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gaDQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gaDMge1xcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGg0IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBoNSB7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gdWwge1xcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xcbiAgcGFkZGluZy10b3A6IDAuNjI1cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gbGkge1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBsaTo6bWFya2VyIHtcXG4gIGNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XFxufVxcblxcbi5oaWRkZW4tZGV0YWlscyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2Mi41cmVtKSB7XFxuICAjZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4ge1xcbiAgICB3aWR0aDogMzUlO1xcbiAgfVxcbiAgI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIHtcXG4gICAgd2lkdGg6IDY1JTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUuMzEyNXJlbSkge1xcbiAgI2V4cGVyaWVuY2UtY3RuIHtcXG4gICAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcXG4gIH1cXG4gICNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAjZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gICNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBoMyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGg0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAjZXhwZXJpZW5jZS1jdG4gLmhpZGRlbi1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAjZXhwZXJpZW5jZS1jdG4gLmhpZGRlbi1kZXRhaWxzOm50aC1jaGlsZChuKzEpIHtcXG4gICAgcGFkZGluZy10b3A6IDEuNTYyNXJlbTtcXG4gIH1cXG59XFxuI3NraWxscyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDIwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyLjE4NzVyZW07XFxufVxcbiNza2lsbHMgaDIge1xcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcXG59XFxuXFxuI3NraWxscy1jdG4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogMS41NjI1cmVtO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xcbiAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcXG59XFxuI3NraWxscy1jdG4gLnNraWxsIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC4zMTI1cmVtIGhzbCgwLCAwJSwgMCUpKTtcXG59XFxuI3NraWxscy1jdG4gLnNraWxsIGRpdiB7XFxuICBwYWRkaW5nLXRvcDogMC45Mzc1cmVtO1xcbn1cXG4jc2tpbGxzLWN0biAuc2tpbGwgcCB7XFxuICBwYWRkaW5nOiAwLjkzNzVyZW07XFxufVxcbiNza2lsbHMtY3RuIC5za2lsbCBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiAzLjc1cmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NXJlbSkge1xcbiAgI3NraWxscy1jdG4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNXJlbSkge1xcbiAgI3NraWxscy1jdG4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MC42MjVyZW0pIHtcXG4gICNza2lsbHMtY3RuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICAjc2tpbGxzLWN0biBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDYuMjVyZW07XFxuICB9XFxufVxcbiNtb2JpbGUtYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMi4xODc1cmVtO1xcbn1cXG4jbW9iaWxlLWJ0biAubW9iaWxlLWxpbmVzIHtcXG4gIGhlaWdodDogMC4xODc1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbn1cXG5cXG4jbW9iaWxlLW5hdiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDEuNTYyNXJlbTtcXG4gIHJpZ2h0OiAxLjU2MjVyZW07XFxuICBwYWRkaW5nOiAyLjE4NzVyZW07XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOCwgODglLCAzJSk7XFxuICB3aWR0aDogODAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHotaW5kZXg6IDQ7XFxufVxcbiNtb2JpbGUtbmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS4yNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAxLjU2MjVyZW07XFxufVxcbiNtb2JpbGUtbmF2IGkge1xcbiAgZm9udC1zaXplOiAyLjE4NzVyZW07XFxufVxcbiNtb2JpbGUtbmF2IC5tb2JpbGUtbmF2LWxpbmsge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxufVxcbiNtb2JpbGUtbmF2IC5yZXN1bWUtbGluayB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbiNtb2JpbGUtbmF2LW92ZXJsYXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDAuMjUpO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTkuMzc1cmVtKSB7XFxuICAjbW9iaWxlLWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxufVwiLFwiJGZvbnQtcHJpbWFyeTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJmO1xcblwiLFwiLy8gUHJpbWFyeSBDb2xvcnNcXG4kY2xyLXByaW1hcnk6IGhzbCgyMDgsIDg4JSwgMyUpO1xcbiRjbHItc2Vjb25kYXJ5OiBoc2woNDcsIDEwMCUsIDUwJSk7XFxuJGNsci1zZWNvbmRhcnktaG92ZXI6IGhzbCg0NywgMTAwJSwgNjglKTtcXG4kY2xyLXRlcnRpYXJ5OiBoc2woMjA4LCA2OSUsIDQ2JSk7XFxuJGNsci1ncmFkaWVudC1vbmU6IGhzbCgxODksIDgwJSwgMTIlKTtcXG4kY2xyLWdyYWRpZW50LXR3bzogaHNsKDE5OCwgODMlLCAxOCUpO1xcbiRjbHItZ3JhZGllbnQtdGhyZWU6IGhzbCgyMDIsIDg0JSwgMTUlKTtcXG4kY2xyLWdyYWRpZW50LWZvdXI6IGhzbCgyMTEsIDg1JSwgNSUpO1xcblxcbi8vIE5ldXRyYWwgQ29sb3JzXFxuJGNsci13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXG4kY2xyLWdyYXktbHQ6IGhzbCgwLCAwJSwgODUlKTtcXG4kY2xyLWdyYXk6IGhzbCgwLCAwJSwgNTAlKTtcXG4kY2xyLWdyYXktZGs6IGhzbCgwLCAwJSwgMjAlKTtcXG4kY2xyLWJsYWNrOiBoc2woMCwgMCUsIDAlKTtcXG5cIixcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250OiBpbmhlcml0O1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSxcXG5zdmcge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiY29sb3JzXFxcIiBhcyAqO1xcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0bGluZS1oZWlnaHQ6IDEuMTtcXG59XFxuXFxuaDEge1xcblxcdGZvbnQtc2l6ZTogcmVtKDMyKTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5oMiB7XFxuXFx0Zm9udC1zaXplOiByZW0oMjYpO1xcblxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmgzIHtcXG5cXHRmb250LXNpemU6IHJlbSgyMik7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTphY3RpdmUge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbi5jb250YWluZXIge1xcblxcdG1heC13aWR0aDogcmVtKDE1OTApO1xcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuaGVhZGVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLXByaW1hcnk7XFxuXFx0Y29sb3I6ICRjbHItd2hpdGU7XFxuXFx0dG9wOiByZW0oMCk7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjbHItZ3JheS1kaztcXG5cXHRwb3NpdGlvbjogc3RpY2t5O1xcblxcdHotaW5kZXg6IDEwO1xcbn1cXG5cXG4jaGVhZGVyLWN0biB7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0cGFkZGluZzogcmVtKDI1KSAwO1xcblxcblxcdCNoZWFkZXItbGVmdCxcXG5cXHQjaGVhZGVyLXJpZ2h0IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRnYXA6IHJlbSg1MCk7XFxuXFx0fVxcblxcblxcdG5hdixcXG5cXHQjc29jaWFscyB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0XFx0Z2FwOiByZW0oMzApO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0fVxcbn1cXG5cXG4uZGVza3RvcC1saW5rIHtcXG5cXHRjb2xvcjogJGNsci13aGl0ZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRjbHItcHJpbWFyeTtcXG5cXHRmb250LXNpemU6IHJlbSgxNik7XFxufVxcblxcbi5kZXNrdG9wLWxpbms6aG92ZXIge1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkY2xyLXNlY29uZGFyeTtcXG59XFxuXFxuaSB7XFxuXFx0Y29sb3I6ICRjbHItd2hpdGU7XFxuXFx0Zm9udC1zaXplOiByZW0oMjgpO1xcbn1cXG5cXG5pOmhvdmVyIHtcXG5cXHRjb2xvcjogJGNsci1zZWNvbmRhcnk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNTkwKSkge1xcblxcdCNoZWFkZXItY3RuIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMjUpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDk1MCkpIHtcXG5cXHQjaGVhZGVyLWN0biB7XFxuXFx0XFx0I2hlYWRlci1sZWZ0ID4gbmF2IHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQjaGVhZGVyLXJpZ2h0IHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jYWJvdXQge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItcHJpbWFyeTtcXG5cXHRjb2xvcjogJGNsci13aGl0ZTtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGVuZDtcXG5cXHRwYWRkaW5nLXRvcDogcmVtKDUwKTtcXG5cXG5cXHQjYWJvdXQtY3RuIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdFxcdDAuMzV0dXJuLFxcblxcdFxcdFxcdCRjbHItZ3JhZGllbnQtb25lLFxcblxcdFxcdFxcdCRjbHItZ3JhZGllbnQtdHdvLFxcblxcdFxcdFxcdCRjbHItZ3JhZGllbnQtdGhyZWUsXFxuXFx0XFx0XFx0JGNsci1ncmFkaWVudC1mb3VyXFxuXFx0XFx0KTtcXG5cXHRcXHRnYXA6IHJlbSgyNSk7XFxuXFx0XFx0aGVpZ2h0OiA5MCU7XFxuXFx0XFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0XFx0d2lkdGg6IDYwJTtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiByZW0oMjUpIHJlbSgyNSkgMCAwO1xcblxcdFxcdHBhZGRpbmc6IHJlbSg0MCkgcmVtKDgwKTtcXG5cXHRcXHRib3JkZXI6IHJlbSg1KSBzb2xpZCAkY2xyLWdyYWRpZW50LXR3bztcXG5cXHRcXHRib3JkZXItYm90dG9tOiAwO1xcblxcblxcdFxcdCNhYm91dC1jb250ZW50IHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGdhcDogcmVtKDI1KTtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdHdpZHRoOiA3MCU7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQjaW1nLWN0biB7XFxuXFx0XFx0d2lkdGg6IDMwJTtcXG5cXG5cXHRcXHRpbWcge1xcblxcdFxcdFxcdG1heC13aWR0aDogMTAwJTtcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0XFx0XFx0ZmlsdGVyOiBkcm9wLXNoYWRvdyhyZW0oNykgcmVtKDcpIDAgJGNsci10ZXJ0aWFyeSk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDEwMjQpKSB7XFxuXFx0I2Fib3V0ICNhYm91dC1jdG4ge1xcblxcdFxcdHdpZHRoOiA4MCU7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzY4KSkge1xcblxcdCNhYm91dCB7XFxuXFx0XFx0I2Fib3V0LWN0biB7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcblxcblxcdFxcdFxcdCNhYm91dC1jb250ZW50IHtcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcblxcdCNhYm91dCB7XFxuXFx0XFx0I2Fib3V0LWN0biB7XFxuXFx0XFx0XFx0cGFkZGluZzogcmVtKDIwKTtcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbi5yZXN1bWUtbGluayB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItc2Vjb25kYXJ5O1xcblxcdGNvbG9yOiAkY2xyLWJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IHJlbSg1MCk7XFxuXFx0cGFkZGluZzogcmVtKDUpIHJlbSgzMCk7XFxuXFx0Zm9udC1zaXplOiByZW0oMTYpO1xcblxcdG1heC13aWR0aDogcmVtKDE3NSk7XFxufVxcblxcbi5yZXN1bWUtbGluazpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1zZWNvbmRhcnktaG92ZXI7XFxuXFx0Y29sb3I6ICRjbHItYmxhY2s7XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jcG9ydGZvbGlvIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWdyYXktZGs7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogcmVtKDM1KTtcXG5cXG5cXHRoMiB7XFxuXFx0XFx0Y29sb3I6ICRjbHItc2Vjb25kYXJ5O1xcblxcdH1cXG59XFxuXFxuI3BvcnRmb2xpby1jdG4ge1xcblxcdHBhZGRpbmctdG9wOiByZW0oMzUpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG5cXHRnYXA6IHJlbSgyNSk7XFxuXFxuXFx0LnBvcnRmb2xpby1jYXJkIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRjb2xvcjogJGNsci13aGl0ZTtcXG5cXHR9XFxuXFxuXFx0LmltZy1jdG4ge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0aGVpZ2h0OiA3MCU7XFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR9XFxuXFxuXFx0aW1nIHtcXG5cXHRcXHRvYmplY3QtZml0OiBjb3ZlcjtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxuXFxuXFx0aDMge1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiByZW0oMjApO1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFxuXFx0LmJ0bi1jdG4ge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcblxcblxcdGEge1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRcXHRmb250LXNpemU6IHJlbSgxOCk7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0Ym9yZGVyOiBub25lO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItcHJpbWFyeTtcXG5cXHRcXHRjb2xvcjogJGNsci13aGl0ZTtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMjApO1xcblxcdH1cXG5cXG5cXHQuY29kZS1idG4ge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItdGVydGlhcnk7XFxuXFx0fVxcblxcblxcdGE6aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItc2Vjb25kYXJ5O1xcblxcdFxcdGNvbG9yOiAkY2xyLWJsYWNrO1xcblxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNDAwKSkge1xcblxcdCNwb3J0Zm9saW8tY3RuIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDEwNjApKSB7XFxuXFx0I3BvcnRmb2xpby1jdG4ge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzAwKSkge1xcblxcdCNwb3J0Zm9saW8tY3RuIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXG5cXHQjcG9ydGZvbGlvLWN0biB7XFxuXFx0XFx0YSB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgzMjApKSB7XFxuXFx0I3BvcnRmb2xpby1jdG4ge1xcblxcdFxcdGEge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDE0KTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuI2V4cGVyaWVuY2Uge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItcHJpbWFyeTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiByZW0oMzUpO1xcbn1cXG5cXG4jZXhwZXJpZW5jZS1jdG4ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0cGFkZGluZy10b3A6IHJlbSgyNSk7XFxuXFx0Z2FwOiByZW0oMTUpO1xcblxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcblxcdCNleHBlcmllbmNlLWxpc3QtY3RuIHtcXG5cXHRcXHR3aWR0aDogMjUlO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRib3JkZXItbGVmdDogNXB4IHNvbGlkICRjbHItc2Vjb25kYXJ5O1xcblxcblxcdFxcdC5leHBlcmllbmNlLWxpc3Qge1xcblxcdFxcdFxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkY2xyLXByaW1hcnk7XFxuXFx0XFx0XFx0cGFkZGluZzogcmVtKDE1KTtcXG5cXG5cXHRcXHRcXHRoNCB7XFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTgpO1xcblxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdHAge1xcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdC5leHBlcmllbmNlLWxpc3Q6aG92ZXIge1xcblxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0LmFjdGl2ZS1saXN0IHtcXG5cXHRcXHRcXHRib3JkZXItYm90dG9tOiAycHggc29saWQgJGNsci1zZWNvbmRhcnk7XFxuXFx0XFx0fVxcblxcblxcdFxcdC5hY3RpdmUtaGVhZGVyIHtcXG5cXHRcXHRcXHRjb2xvcjogJGNsci1zZWNvbmRhcnk7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biB7XFxuXFx0XFx0d2lkdGg6IDUwJTtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTUpO1xcblxcblxcdFxcdGgzLFxcblxcdFxcdGg0IHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0XFx0fVxcblxcblxcdFxcdGgzIHtcXG5cXHRcXHRcXHRjb2xvcjogJGNsci1zZWNvbmRhcnk7XFxuXFx0XFx0fVxcblxcblxcdFxcdGg0IHtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRoNSB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTgpO1xcblxcdFxcdH1cXG5cXG5cXHRcXHR1bCB7XFxuXFx0XFx0XFx0cGFkZGluZy1sZWZ0OiByZW0oMjApO1xcblxcdFxcdFxcdHBhZGRpbmctdG9wOiByZW0oMTApO1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0bGkge1xcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAyO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRsaTo6bWFya2VyIHtcXG5cXHRcXHRcXHRjb2xvcjogJGNsci1zZWNvbmRhcnk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuLmhpZGRlbi1kZXRhaWxzIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTAwMCkpIHtcXG5cXHQjZXhwZXJpZW5jZS1jdG4ge1xcblxcdFxcdCNleHBlcmllbmNlLWxpc3QtY3RuIHtcXG5cXHRcXHRcXHR3aWR0aDogMzUlO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biB7XFxuXFx0XFx0XFx0d2lkdGg6IDY1JTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzI1KSkge1xcblxcdCNleHBlcmllbmNlLWN0biB7XFxuXFx0XFx0cGFkZGluZy10b3A6IHJlbSgzNSk7XFxuXFxuXFx0XFx0I2V4cGVyaWVuY2UtbGlzdC1jdG4ge1xcblxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0XFx0fVxcblxcblxcdFxcdCNleHBlcmllbmNlLWRldGFpbHMtY3RuIHtcXG5cXHRcXHRcXHRwYWRkaW5nOiAwO1xcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcblxcdFxcdFxcdGgzIHtcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0aDQge1xcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0LmhpZGRlbi1kZXRhaWxzIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHR9XFxuXFxuXFx0XFx0LmhpZGRlbi1kZXRhaWxzOm50aC1jaGlsZChuICsgMSkge1xcblxcdFxcdFxcdHBhZGRpbmctdG9wOiByZW0oMjUpO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jc2tpbGxzIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWdyYXktZGs7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogcmVtKDM1KTtcXG5cXG5cXHRoMiB7XFxuXFx0XFx0Y29sb3I6ICRjbHItc2Vjb25kYXJ5O1xcblxcdH1cXG59XFxuXFxuI3NraWxscy1jdG4ge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRnYXA6IHJlbSgyNSk7XFxuXFx0Y29sb3I6ICRjbHItYmxhY2s7XFxuXFx0cGFkZGluZy10b3A6IHJlbSgzNSk7XFxuXFxuXFx0LnNraWxsIHtcXG5cXHRcXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItd2hpdGU7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgcmVtKDUpICRjbHItYmxhY2spO1xcblxcblxcdFxcdGRpdiB7XFxuXFx0XFx0XFx0cGFkZGluZy10b3A6IHJlbSgxNSk7XFxuXFx0XFx0fVxcblxcblxcdFxcdHAge1xcblxcdFxcdFxcdHBhZGRpbmc6IHJlbSgxNSk7XFxuXFx0XFx0fVxcblxcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0XFx0b2JqZWN0LWZpdDogY29udGFpbjtcXG5cXHRcXHRcXHR3aWR0aDogYXV0bztcXG5cXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxuXFx0XFx0XFx0bWF4LWhlaWdodDogcmVtKDYwKTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTIwMCkpIHtcXG5cXHQjc2tpbGxzLWN0biB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg5MDApKSB7XFxuXFx0I3NraWxscy1jdG4ge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNjUwKSkge1xcblxcdCNza2lsbHMtY3RuIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg0MjUpKSB7XFxuXFx0I3NraWxscy1jdG4ge1xcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oMTAwKTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuI21vYmlsZS1idG4ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXHR3aWR0aDogcmVtKDM1KTtcXG5cXG5cXHQubW9iaWxlLWxpbmVzIHtcXG5cXHRcXHRoZWlnaHQ6IHJlbSgzKTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdH1cXG59XFxuXFxuI21vYmlsZS1uYXYge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogcmVtKDI1KTtcXG5cXHRyaWdodDogcmVtKDI1KTtcXG5cXHRwYWRkaW5nOiByZW0oMzUpO1xcblxcdGZvbnQtc2l6ZTogcmVtKDE4KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLXByaW1hcnk7XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHotaW5kZXg6IDQ7XFxuXFxuXFx0dWwge1xcblxcdFxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGdhcDogcmVtKDIwKTtcXG5cXHRcXHRwYWRkaW5nLXRvcDogcmVtKDI1KTtcXG5cXHR9XFxuXFxuXFx0aSB7XFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMzUpO1xcblxcdH1cXG5cXG5cXHQubW9iaWxlLW5hdi1saW5rIHtcXG5cXHRcXHRjb2xvcjogJGNsci13aGl0ZTtcXG5cXHR9XFxuXFxuXFx0LnJlc3VtZS1saW5rIHtcXG5cXHRcXHRwYWRkaW5nOiAwO1xcblxcdFxcdG1heC13aWR0aDogbm9uZTtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRmb250LXNpemU6IHJlbSgyMCk7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRcXHRjb2xvcjogJGNsci1zZWNvbmRhcnk7XFxuXFx0XFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHR9XFxufVxcblxcbiNtb2JpbGUtbmF2LW92ZXJsYXkge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjI1KTtcXG5cXHR6LWluZGV4OiAzO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oOTUwKSkge1xcblxcdCNtb2JpbGUtYnRuIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3BkZi9yZXN1bWUucGRmXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgeyBsb2FkRXhwZXJpZW5jZSB9O1xuXG5jb25zdCBleHBMaXN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4cGVyaWVuY2UtbGlzdFwiKSk7XG5jb25zdCBleHBEZXRhaWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4cGVyaWVuY2UtZGV0YWlsc1wiKSk7XG5cbmZ1bmN0aW9uIGxvYWRFeHBlcmllbmNlKCkge1xuXHRsb2FkRXhwZXJpZW5jZUV2ZW50TGlzdGVuZXIoKTtcbn1cblxuZnVuY3Rpb24gbG9hZEV4cGVyaWVuY2VFdmVudExpc3RlbmVyKCkge1xuXHRleHBMaXN0Lm1hcCgoZXhwKSA9PiB7XG5cdFx0ZXhwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1cGRhdGVFeHBlcmllbmNlTGlzdCk7XG5cdFx0ZXhwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1cGRhdGVFeHBlcmllbmNlRGV0YWlscyk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVFeHBlcmllbmNlTGlzdCgpIHtcblx0Ly8gY2hlY2sgY2xhc3MgbGlzdCBmb3IgYWN0aXZlLCB0aGVuIHVwZGF0ZSBzdHlsaW5nXG5cdGNvbnN0IG5ld0hlYWRlciA9IHRoaXMucXVlcnlTZWxlY3RvcihcImg0XCIpO1xuXG5cdGlmICghdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtbGlzdFwiKSkge1xuXHRcdC8vIHJlbW92ZSBwcmV2aW91cyBleHBlcmllbmNlIHN0eWxpbmdcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGV4cExpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChleHBMaXN0W2ldLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1saXN0XCIpKSB7XG5cdFx0XHRcdGNvbnN0IG9sZEhlYWRlciA9IGV4cExpc3RbaV0ucXVlcnlTZWxlY3RvcihcImg0XCIpO1xuXHRcdFx0XHRleHBMaXN0W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtbGlzdFwiKTtcblx0XHRcdFx0b2xkSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtaGVhZGVyXCIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIHVwZGF0ZSBjbGlja2VkIGhlYWRlciBzdHlsaW5nXG5cdFx0dGhpcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWxpc3RcIik7XG5cdFx0bmV3SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtaGVhZGVyXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUV4cGVyaWVuY2VEZXRhaWxzKCkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGV4cExpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoZXhwTGlzdFtpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtbGlzdFwiKSkge1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBleHBEZXRhaWxzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGV4cERldGFpbHNbal0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1kZXRhaWxzXCIpO1xuXHRcdFx0XHRleHBEZXRhaWxzW2pdLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW4tZGV0YWlsc1wiKTtcblx0XHRcdH1cblxuXHRcdFx0ZXhwRGV0YWlsc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuLWRldGFpbHNcIik7XG5cdFx0XHRleHBEZXRhaWxzW2ldLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtZGV0YWlsc1wiKTtcblx0XHR9XG5cdH1cbn1cbiIsImV4cG9ydCB7IGxvYWRNb2JpbGUgfTtcblxuY29uc3QgbW9iaWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtYnRuXCIpO1xuY29uc3QgbW9iaWxlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbmF2XCIpO1xuY29uc3QgbW9iaWxlTmF2T3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLW5hdi1vdmVybGF5XCIpO1xuY29uc3QgbW9iaWxlTmF2RXhpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLW5hdi1leGl0XCIpO1xuY29uc3QgbW9iaWxlTmF2TGluayA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2JpbGUtbmF2LWxpbmtcIikpO1xuXG5mdW5jdGlvbiBsb2FkTW9iaWxlKCkge1xuXHRsb2FkTW9iaWxlRXZlbnRMaXN0ZW5lcnMoKTtcbn1cblxuZnVuY3Rpb24gbG9hZE1vYmlsZUV2ZW50TGlzdGVuZXJzKCkge1xuXHRtb2JpbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlNb2JpbGVOYXYpO1xuXHRtb2JpbGVOYXZFeGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlTW9iaWxlTmF2KTtcblx0bW9iaWxlTmF2TGluay5tYXAoKGxpbmspID0+IHtcblx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlTW9iaWxlTmF2KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlNb2JpbGVOYXYoKSB7XG5cdG1vYmlsZU5hdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cdG1vYmlsZU5hdk92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuZnVuY3Rpb24gaGlkZU1vYmlsZU5hdigpIHtcblx0bW9iaWxlTmF2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0bW9iaWxlTmF2T3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG4iLCJpbXBvcnQgeyBsb2FkRXhwZXJpZW5jZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvZXhwZXJpZW5jZVwiO1xuaW1wb3J0IHsgbG9hZE1vYmlsZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvbW9iaWxlXCI7XG5leHBvcnQgeyBpbml0IH07XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG5cdGxvYWRFeHBlcmllbmNlKCk7XG5cdGxvYWRNb2JpbGUoKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaW5pdCB9IGZyb20gXCIuL2pzL2luaXQuanNcIjtcbmltcG9ydCBcIi4vc2Nzcy9zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IHJlc3VtZSBmcm9tIFwiLi9hc3NldHMvcmVzdW1lLnBkZlwiO1xuXG5pbml0KCk7XG5cbmNvbnN0IHJlc3VtZUxpbmsgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVzdW1lLWxpbmtcIikpO1xuXG5yZXN1bWVMaW5rLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuXHRidXR0b24uaHJlZiA9IHJlc3VtZTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9