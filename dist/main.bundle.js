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
  #about #img-ctn img {
    filter: drop-shadow(0.3125rem 0.3125rem 0 hsl(208, 69%, 46%));
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
}`, "",{"version":3,"sources":["webpack://./src/scss/globals/_general.scss","webpack://./src/scss/styles.scss","webpack://./src/scss/globals/_fonts.scss","webpack://./src/scss/globals/_colors.scss","webpack://./src/scss/globals/_reset.scss","webpack://./src/scss/globals/_typography.scss","webpack://./src/scss/globals/_container.scss","webpack://./src/scss/components/_header.scss","webpack://./src/scss/components/_about.scss","webpack://./src/scss/components/_buttons.scss","webpack://./src/scss/components/_portfolio.scss","webpack://./src/scss/components/_experience.scss","webpack://./src/scss/components/_skills.scss","webpack://./src/scss/components/_mobile-nav.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"../utilities/\" as *;\n@use \"colors\" as *;\n@use \"fonts\" as *;\n\nhtml {\n\tfont-size: 100%;\n}\n\nbody {\n\tfont-family: $font-primary;\n\tfont-size: rem(18);\n\tcolor: $clr-gray-dk;\n\tbackground-color: $clr-gray-lt;\n\tline-height: 1.5;\n}\n","html {\n  font-size: 100%;\n}\n\nbody {\n  font-family: \"Inter\", sans-serf;\n  font-size: 1.125rem;\n  color: hsl(0, 0%, 20%);\n  background-color: hsl(0, 0%, 85%);\n  line-height: 1.5;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n  line-height: 1.1;\n}\n\nh1 {\n  font-size: 2rem;\n  font-weight: 700;\n}\n\nh2 {\n  font-size: 1.625rem;\n  color: hsl(0, 0%, 100%);\n  font-weight: 700;\n}\n\nh3 {\n  font-size: 1.375rem;\n  font-weight: 700;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\n.container {\n  max-width: 99.375rem;\n}\n\nheader {\n  background-color: hsl(208, 88%, 3%);\n  color: hsl(0, 0%, 100%);\n  top: 0rem;\n  border-bottom: 1px solid hsl(0, 0%, 20%);\n  position: sticky;\n  z-index: 10;\n}\n\n#header-ctn {\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  padding: 1.5625rem 0;\n}\n#header-ctn #header-left,\n#header-ctn #header-right {\n  display: flex;\n  justify-content: space-between;\n  gap: 3.125rem;\n}\n#header-ctn nav,\n#header-ctn #socials {\n  display: flex;\n  justify-content: space-between;\n  gap: 1.875rem;\n  align-items: center;\n}\n\n.desktop-link {\n  color: hsl(0, 0%, 100%);\n  display: flex;\n  align-items: center;\n  border-bottom: 2px solid hsl(208, 88%, 3%);\n  font-size: 1rem;\n}\n\n.desktop-link:hover {\n  border-bottom: 2px solid hsl(47, 100%, 50%);\n}\n\ni {\n  color: hsl(0, 0%, 100%);\n  font-size: 1.75rem;\n}\n\ni:hover {\n  color: hsl(47, 100%, 50%);\n}\n\n@media screen and (max-width: 99.375rem) {\n  #header-ctn {\n    padding: 1.5625rem;\n  }\n}\n@media screen and (max-width: 59.375rem) {\n  #header-ctn #header-left > nav {\n    display: none;\n  }\n  #header-ctn #header-right {\n    display: none;\n  }\n}\n#about {\n  background-color: hsl(208, 88%, 3%);\n  color: hsl(0, 0%, 100%);\n  overflow: hidden;\n  display: flex;\n  align-items: end;\n  padding-top: 3.125rem;\n}\n#about #about-ctn {\n  display: flex;\n  align-items: center;\n  background: linear-gradient(0.35turn, hsl(189, 80%, 12%), hsl(198, 83%, 18%), hsl(202, 84%, 15%), hsl(211, 85%, 5%));\n  gap: 1.5625rem;\n  height: 90%;\n  margin: 0 auto;\n  width: 60%;\n  border-radius: 1.5625rem 1.5625rem 0 0;\n  padding: 2.5rem 5rem;\n  border: 0.3125rem solid hsl(198, 83%, 18%);\n  border-bottom: 0;\n}\n#about #about-ctn #about-content {\n  display: flex;\n  gap: 1.5625rem;\n  flex-direction: column;\n  width: 70%;\n}\n#about #img-ctn {\n  width: 30%;\n}\n#about #img-ctn img {\n  max-width: 100%;\n  border-radius: 50%;\n  filter: drop-shadow(0.4375rem 0.4375rem 0 hsl(208, 69%, 46%));\n}\n\n@media screen and (max-width: 64rem) {\n  #about #about-ctn {\n    width: 80%;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #about #about-ctn {\n    flex-direction: column-reverse;\n  }\n  #about #about-ctn #about-content {\n    width: 100%;\n    align-items: center;\n  }\n  #about #img-ctn img {\n    filter: drop-shadow(0.3125rem 0.3125rem 0 hsl(208, 69%, 46%));\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #about #about-ctn {\n    padding: 1.25rem;\n    font-size: 1rem;\n  }\n}\n.resume-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: hsl(47, 100%, 50%);\n  color: hsl(0, 0%, 0%);\n  border-radius: 3.125rem;\n  padding: 0.3125rem 1.875rem;\n  font-size: 1rem;\n  max-width: 10.9375rem;\n}\n\n.resume-link:hover {\n  background-color: hsl(47, 100%, 68%);\n  color: hsl(0, 0%, 0%);\n}\n\n#portfolio {\n  background-color: hsl(0, 0%, 20%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2.1875rem;\n}\n#portfolio h2 {\n  color: hsl(47, 100%, 50%);\n}\n\n#portfolio-ctn {\n  padding-top: 2.1875rem;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5625rem;\n}\n#portfolio-ctn .portfolio-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: hsl(0, 0%, 100%);\n}\n#portfolio-ctn .img-ctn {\n  display: flex;\n  height: 70%;\n  overflow: hidden;\n}\n#portfolio-ctn img {\n  object-fit: cover;\n  width: 100%;\n}\n#portfolio-ctn h3 {\n  padding-bottom: 1.25rem;\n  text-align: center;\n}\n#portfolio-ctn .btn-ctn {\n  display: flex;\n  width: 100%;\n}\n#portfolio-ctn a {\n  text-align: center;\n  font-size: 1.125rem;\n  width: 100%;\n  border: none;\n  background-color: hsl(208, 88%, 3%);\n  color: hsl(0, 0%, 100%);\n  padding: 1.25rem;\n}\n#portfolio-ctn .code-btn {\n  background-color: hsl(208, 69%, 46%);\n}\n#portfolio-ctn a:hover {\n  background-color: hsl(47, 100%, 50%);\n  color: hsl(0, 0%, 0%);\n  cursor: pointer;\n}\n\n@media screen and (max-width: 87.5rem) {\n  #portfolio-ctn {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media screen and (max-width: 66.25rem) {\n  #portfolio-ctn {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media screen and (max-width: 43.75rem) {\n  #portfolio-ctn {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #portfolio-ctn a {\n    font-size: 1rem;\n  }\n}\n@media screen and (max-width: 20rem) {\n  #portfolio-ctn a {\n    font-size: 0.875rem;\n  }\n}\n#experience {\n  background-color: hsl(208, 88%, 3%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2.1875rem;\n}\n\n#experience-ctn {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  padding-top: 1.5625rem;\n  gap: 0.9375rem;\n  color: hsl(0, 0%, 100%);\n}\n#experience-ctn #experience-list-ctn {\n  width: 25%;\n  display: flex;\n  flex-direction: column;\n  border-left: 5px solid hsl(47, 100%, 50%);\n}\n#experience-ctn #experience-list-ctn .experience-list {\n  border-bottom: 2px solid hsl(208, 88%, 3%);\n  padding: 0.9375rem;\n}\n#experience-ctn #experience-list-ctn .experience-list h4 {\n  font-size: 1.125rem;\n  font-weight: 700;\n}\n#experience-ctn #experience-list-ctn .experience-list p {\n  font-size: 1rem;\n}\n#experience-ctn #experience-list-ctn .experience-list:hover {\n  cursor: pointer;\n}\n#experience-ctn #experience-list-ctn .active-list {\n  border-bottom: 2px solid hsl(47, 100%, 50%);\n}\n#experience-ctn #experience-list-ctn .active-header {\n  color: hsl(47, 100%, 50%);\n}\n#experience-ctn #experience-details-ctn {\n  width: 50%;\n  padding: 0.9375rem;\n}\n#experience-ctn #experience-details-ctn h3,\n#experience-ctn #experience-details-ctn h4 {\n  display: inline-block;\n}\n#experience-ctn #experience-details-ctn h3 {\n  color: hsl(47, 100%, 50%);\n}\n#experience-ctn #experience-details-ctn h4 {\n  font-weight: 700;\n}\n#experience-ctn #experience-details-ctn h5 {\n  font-size: 1.125rem;\n}\n#experience-ctn #experience-details-ctn ul {\n  padding-left: 1.25rem;\n  padding-top: 0.625rem;\n  font-size: 1rem;\n}\n#experience-ctn #experience-details-ctn li {\n  line-height: 2;\n}\n#experience-ctn #experience-details-ctn li::marker {\n  color: hsl(47, 100%, 50%);\n}\n\n.hidden-details {\n  display: none;\n}\n\n@media screen and (max-width: 62.5rem) {\n  #experience-ctn #experience-list-ctn {\n    width: 35%;\n  }\n  #experience-ctn #experience-details-ctn {\n    width: 65%;\n  }\n}\n@media screen and (max-width: 45.3125rem) {\n  #experience-ctn {\n    padding-top: 2.1875rem;\n  }\n  #experience-ctn #experience-list-ctn {\n    display: none;\n  }\n  #experience-ctn #experience-details-ctn {\n    padding: 0;\n    width: 100%;\n  }\n  #experience-ctn #experience-details-ctn h3 {\n    display: block;\n  }\n  #experience-ctn #experience-details-ctn h4 {\n    display: block;\n  }\n  #experience-ctn .hidden-details {\n    display: block;\n  }\n  #experience-ctn .hidden-details:nth-child(n+1) {\n    padding-top: 1.5625rem;\n  }\n}\n#skills {\n  background-color: hsl(0, 0%, 20%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2.1875rem;\n}\n#skills h2 {\n  color: hsl(47, 100%, 50%);\n}\n\n#skills-ctn {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  width: 100%;\n  gap: 1.5625rem;\n  color: hsl(0, 0%, 0%);\n  padding-top: 2.1875rem;\n}\n#skills-ctn .skill {\n  box-sizing: border-box;\n  background-color: hsl(0, 0%, 100%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  filter: drop-shadow(0 0 0.3125rem hsl(0, 0%, 0%));\n}\n#skills-ctn .skill div {\n  padding-top: 0.9375rem;\n}\n#skills-ctn .skill p {\n  padding: 0.9375rem;\n}\n#skills-ctn .skill img {\n  display: block;\n  object-fit: contain;\n  width: auto;\n  height: auto;\n  max-height: 3.75rem;\n}\n\n@media screen and (max-width: 75rem) {\n  #skills-ctn {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media screen and (max-width: 56.25rem) {\n  #skills-ctn {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media screen and (max-width: 40.625rem) {\n  #skills-ctn {\n    grid-template-columns: repeat(2, 1fr);\n    font-size: 1rem;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #skills-ctn img {\n    max-width: 6.25rem;\n  }\n}\n#mobile-btn {\n  display: none;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2.1875rem;\n}\n#mobile-btn .mobile-lines {\n  height: 0.1875rem;\n  width: 100%;\n  background-color: hsl(0, 0%, 100%);\n}\n\n#mobile-nav {\n  display: none;\n  text-align: right;\n  position: fixed;\n  top: 1.5625rem;\n  right: 1.5625rem;\n  padding: 2.1875rem;\n  font-size: 1.125rem;\n  background-color: hsl(208, 88%, 3%);\n  width: 80%;\n  flex-direction: column;\n  z-index: 4;\n}\n#mobile-nav ul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  padding-top: 1.5625rem;\n}\n#mobile-nav i {\n  font-size: 2.1875rem;\n}\n#mobile-nav .mobile-nav-link {\n  color: hsl(0, 0%, 100%);\n}\n#mobile-nav .resume-link {\n  padding: 0;\n  max-width: none;\n  display: block;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: hsl(47, 100%, 50%);\n  background: none;\n}\n\n#mobile-nav-overlay {\n  display: none;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: hsla(0, 0%, 100%, 0.25);\n  z-index: 3;\n}\n\n@media screen and (max-width: 59.375rem) {\n  #mobile-btn {\n    display: flex;\n  }\n}","$font-primary: \"Inter\", sans-serf;\n","// Primary Colors\n$clr-primary: hsl(208, 88%, 3%);\n$clr-secondary: hsl(47, 100%, 50%);\n$clr-secondary-hover: hsl(47, 100%, 68%);\n$clr-tertiary: hsl(208, 69%, 46%);\n$clr-gradient-one: hsl(189, 80%, 12%);\n$clr-gradient-two: hsl(198, 83%, 18%);\n$clr-gradient-three: hsl(202, 84%, 15%);\n$clr-gradient-four: hsl(211, 85%, 5%);\n\n// Neutral Colors\n$clr-white: hsl(0, 0%, 100%);\n$clr-gray-lt: hsl(0, 0%, 85%);\n$clr-gray: hsl(0, 0%, 50%);\n$clr-gray-dk: hsl(0, 0%, 20%);\n$clr-black: hsl(0, 0%, 0%);\n","*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont: inherit;\n}\n\nimg,\npicture,\nsvg {\n\tdisplay: block;\n}\n","@use \"../utilities/\" as *;\n@use \"colors\" as *;\n\nh1,\nh2,\nh3 {\n\tmargin: 0;\n\tline-height: 1.1;\n}\n\nh1 {\n\tfont-size: rem(32);\n\tfont-weight: 700;\n}\n\nh2 {\n\tfont-size: rem(26);\n\tcolor: $clr-white;\n\tfont-weight: 700;\n}\n\nh3 {\n\tfont-size: rem(22);\n\tfont-weight: 700;\n}\n\na,\na:visited,\na:active {\n\ttext-decoration: none;\n}\n","@use \"../utilities/\" as *;\n\n.container {\n\tmax-width: rem(1590);\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\nheader {\n\tbackground-color: $clr-primary;\n\tcolor: $clr-white;\n\ttop: rem(0);\n\tborder-bottom: 1px solid $clr-gray-dk;\n\tposition: sticky;\n\tz-index: 10;\n}\n\n#header-ctn {\n\tmargin: 0 auto;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tpadding: rem(25) 0;\n\n\t#header-left,\n\t#header-right {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tgap: rem(50);\n\t}\n\n\tnav,\n\t#socials {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tgap: rem(30);\n\t\talign-items: center;\n\t}\n}\n\n.desktop-link {\n\tcolor: $clr-white;\n\tdisplay: flex;\n\talign-items: center;\n\tborder-bottom: 2px solid $clr-primary;\n\tfont-size: rem(16);\n}\n\n.desktop-link:hover {\n\tborder-bottom: 2px solid $clr-secondary;\n}\n\ni {\n\tcolor: $clr-white;\n\tfont-size: rem(28);\n}\n\ni:hover {\n\tcolor: $clr-secondary;\n}\n\n@media screen and (max-width: rem(1590)) {\n\t#header-ctn {\n\t\tpadding: rem(25);\n\t}\n}\n\n@media screen and (max-width: rem(950)) {\n\t#header-ctn {\n\t\t#header-left > nav {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t#header-right {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#about {\n\tbackground-color: $clr-primary;\n\tcolor: $clr-white;\n\toverflow: hidden;\n\tdisplay: flex;\n\talign-items: end;\n\tpadding-top: rem(50);\n\n\t#about-ctn {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tbackground: linear-gradient(\n\t\t\t0.35turn,\n\t\t\t$clr-gradient-one,\n\t\t\t$clr-gradient-two,\n\t\t\t$clr-gradient-three,\n\t\t\t$clr-gradient-four\n\t\t);\n\t\tgap: rem(25);\n\t\theight: 90%;\n\t\tmargin: 0 auto;\n\t\twidth: 60%;\n\t\tborder-radius: rem(25) rem(25) 0 0;\n\t\tpadding: rem(40) rem(80);\n\t\tborder: rem(5) solid $clr-gradient-two;\n\t\tborder-bottom: 0;\n\n\t\t#about-content {\n\t\t\tdisplay: flex;\n\t\t\tgap: rem(25);\n\t\t\tflex-direction: column;\n\t\t\twidth: 70%;\n\t\t}\n\t}\n\n\t#img-ctn {\n\t\twidth: 30%;\n\n\t\timg {\n\t\t\tmax-width: 100%;\n\t\t\tborder-radius: 50%;\n\t\t\tfilter: drop-shadow(rem(7) rem(7) 0 $clr-tertiary);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1024)) {\n\t#about #about-ctn {\n\t\twidth: 80%;\n\t}\n}\n\n@media screen and (max-width: rem(768)) {\n\t#about {\n\t\t#about-ctn {\n\t\t\tflex-direction: column-reverse;\n\n\t\t\t#about-content {\n\t\t\t\twidth: 100%;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t}\n\n\t\t#img-ctn {\n\t\t\timg {\n\t\t\t\tfilter: drop-shadow(rem(5) rem(5) 0 $clr-tertiary);\n\t\t\t}\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t#about {\n\t\t#about-ctn {\n\t\t\tpadding: rem(20);\n\t\t\tfont-size: rem(16);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n.resume-link {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: $clr-secondary;\n\tcolor: $clr-black;\n\tborder-radius: rem(50);\n\tpadding: rem(5) rem(30);\n\tfont-size: rem(16);\n\tmax-width: rem(175);\n}\n\n.resume-link:hover {\n\tbackground-color: $clr-secondary-hover;\n\tcolor: $clr-black;\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#portfolio {\n\tbackground-color: $clr-gray-dk;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: rem(35);\n\n\th2 {\n\t\tcolor: $clr-secondary;\n\t}\n}\n\n#portfolio-ctn {\n\tpadding-top: rem(35);\n\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr);\n\tgap: rem(25);\n\n\t.portfolio-card {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tcolor: $clr-white;\n\t}\n\n\t.img-ctn {\n\t\tdisplay: flex;\n\t\theight: 70%;\n\t\toverflow: hidden;\n\t}\n\n\timg {\n\t\tobject-fit: cover;\n\t\twidth: 100%;\n\t}\n\n\th3 {\n\t\tpadding-bottom: rem(20);\n\t\ttext-align: center;\n\t}\n\n\t.btn-ctn {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t}\n\n\ta {\n\t\ttext-align: center;\n\t\tfont-size: rem(18);\n\t\twidth: 100%;\n\t\tborder: none;\n\t\tbackground-color: $clr-primary;\n\t\tcolor: $clr-white;\n\t\tpadding: rem(20);\n\t}\n\n\t.code-btn {\n\t\tbackground-color: $clr-tertiary;\n\t}\n\n\ta:hover {\n\t\tbackground-color: $clr-secondary;\n\t\tcolor: $clr-black;\n\t\tcursor: pointer;\n\t}\n}\n\n@media screen and (max-width: rem(1400)) {\n\t#portfolio-ctn {\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t}\n}\n\n@media screen and (max-width: rem(1060)) {\n\t#portfolio-ctn {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t}\n}\n\n@media screen and (max-width: rem(700)) {\n\t#portfolio-ctn {\n\t\tgrid-template-columns: repeat(1, 1fr);\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t#portfolio-ctn {\n\t\ta {\n\t\t\tfont-size: rem(16);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(320)) {\n\t#portfolio-ctn {\n\t\ta {\n\t\t\tfont-size: rem(14);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#experience {\n\tbackground-color: $clr-primary;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: rem(35);\n}\n\n#experience-ctn {\n\tdisplay: flex;\n\twidth: 100%;\n\tjustify-content: center;\n\tpadding-top: rem(25);\n\tgap: rem(15);\n\tcolor: $clr-white;\n\n\t#experience-list-ctn {\n\t\twidth: 25%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tborder-left: 5px solid $clr-secondary;\n\n\t\t.experience-list {\n\t\t\tborder-bottom: 2px solid $clr-primary;\n\t\t\tpadding: rem(15);\n\n\t\t\th4 {\n\t\t\t\tfont-size: rem(18);\n\t\t\t\tfont-weight: 700;\n\t\t\t}\n\n\t\t\tp {\n\t\t\t\tfont-size: rem(16);\n\t\t\t}\n\t\t}\n\n\t\t.experience-list:hover {\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t.active-list {\n\t\t\tborder-bottom: 2px solid $clr-secondary;\n\t\t}\n\n\t\t.active-header {\n\t\t\tcolor: $clr-secondary;\n\t\t}\n\t}\n\n\t#experience-details-ctn {\n\t\twidth: 50%;\n\t\tpadding: rem(15);\n\n\t\th3,\n\t\th4 {\n\t\t\tdisplay: inline-block;\n\t\t}\n\n\t\th3 {\n\t\t\tcolor: $clr-secondary;\n\t\t}\n\n\t\th4 {\n\t\t\tfont-weight: 700;\n\t\t}\n\n\t\th5 {\n\t\t\tfont-size: rem(18);\n\t\t}\n\n\t\tul {\n\t\t\tpadding-left: rem(20);\n\t\t\tpadding-top: rem(10);\n\t\t\tfont-size: rem(16);\n\t\t}\n\n\t\tli {\n\t\t\tline-height: 2;\n\t\t}\n\n\t\tli::marker {\n\t\t\tcolor: $clr-secondary;\n\t\t}\n\t}\n}\n\n.hidden-details {\n\tdisplay: none;\n}\n\n@media screen and (max-width: rem(1000)) {\n\t#experience-ctn {\n\t\t#experience-list-ctn {\n\t\t\twidth: 35%;\n\t\t}\n\n\t\t#experience-details-ctn {\n\t\t\twidth: 65%;\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(725)) {\n\t#experience-ctn {\n\t\tpadding-top: rem(35);\n\n\t\t#experience-list-ctn {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t#experience-details-ctn {\n\t\t\tpadding: 0;\n\t\t\twidth: 100%;\n\n\t\t\th3 {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\n\t\t\th4 {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\n\t\t.hidden-details {\n\t\t\tdisplay: block;\n\t\t}\n\n\t\t.hidden-details:nth-child(n + 1) {\n\t\t\tpadding-top: rem(25);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#skills {\n\tbackground-color: $clr-gray-dk;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: rem(35);\n\n\th2 {\n\t\tcolor: $clr-secondary;\n\t}\n}\n\n#skills-ctn {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(6, 1fr);\n\twidth: 100%;\n\tgap: rem(25);\n\tcolor: $clr-black;\n\tpadding-top: rem(35);\n\n\t.skill {\n\t\tbox-sizing: border-box;\n\t\tbackground-color: $clr-white;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tfilter: drop-shadow(0 0 rem(5) $clr-black);\n\n\t\tdiv {\n\t\t\tpadding-top: rem(15);\n\t\t}\n\n\t\tp {\n\t\t\tpadding: rem(15);\n\t\t}\n\n\t\timg {\n\t\t\tdisplay: block;\n\t\t\tobject-fit: contain;\n\t\t\twidth: auto;\n\t\t\theight: auto;\n\t\t\tmax-height: rem(60);\n\t\t}\n\t}\n}\n\n@media screen and (max-width: rem(1200)) {\n\t#skills-ctn {\n\t\tgrid-template-columns: repeat(4, 1fr);\n\t}\n}\n\n@media screen and (max-width: rem(900)) {\n\t#skills-ctn {\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t}\n}\n\n@media screen and (max-width: rem(650)) {\n\t#skills-ctn {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t\tfont-size: rem(16);\n\t}\n}\n\n@media screen and (max-width: rem(425)) {\n\t#skills-ctn {\n\t\timg {\n\t\t\tmax-width: rem(100);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#mobile-btn {\n\tdisplay: none;\n\tflex-direction: column;\n\tjustify-content: space-around;\n\twidth: rem(35);\n\n\t.mobile-lines {\n\t\theight: rem(3);\n\t\twidth: 100%;\n\t\tbackground-color: $clr-white;\n\t}\n}\n\n#mobile-nav {\n\tdisplay: none;\n\ttext-align: right;\n\tposition: fixed;\n\ttop: rem(25);\n\tright: rem(25);\n\tpadding: rem(35);\n\tfont-size: rem(18);\n\tbackground-color: $clr-primary;\n\twidth: 80%;\n\tflex-direction: column;\n\tz-index: 4;\n\n\tul {\n\t\tlist-style: none;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: rem(20);\n\t\tpadding-top: rem(25);\n\t}\n\n\ti {\n\t\tfont-size: rem(35);\n\t}\n\n\t.mobile-nav-link {\n\t\tcolor: $clr-white;\n\t}\n\n\t.resume-link {\n\t\tpadding: 0;\n\t\tmax-width: none;\n\t\tdisplay: block;\n\t\tfont-size: rem(20);\n\t\tfont-weight: 700;\n\t\tcolor: $clr-secondary;\n\t\tbackground: none;\n\t}\n}\n\n#mobile-nav-overlay {\n\tdisplay: none;\n\tposition: fixed;\n\theight: 100%;\n\twidth: 100%;\n\ttop: 0;\n\tleft: 0;\n\tbackground-color: hsla(0, 0%, 100%, 0.25);\n\tz-index: 3;\n}\n\n@media screen and (max-width: rem(950)) {\n\t#mobile-btn {\n\t\tdisplay: flex;\n\t}\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8seXJCQUF5ckIsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sVUFBVSxNQUFNLFFBQVEsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxRQUFRLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sT0FBTyxVQUFVLFdBQVcsVUFBVSxNQUFNLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksT0FBTyxNQUFNLFlBQVksUUFBUSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sWUFBWSxZQUFZLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFFBQVEsTUFBTSxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFFBQVEsTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFX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QVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ1I7QUFDYTs7QUFFekMsaURBQUk7O0FBRUo7O0FBRUE7QUFDQSxlQUFlLDBEQUFNO0FBQ3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXNzZXRzL3Jlc3VtZS5wZGYiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzPzMyMWYiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvZXhwZXJpZW5jZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvbW9iaWxlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvaW5pdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJmO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBjb2xvcjogaHNsKDAsIDAlLCAyMCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDg1JSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmltZyxcbnBpY3R1cmUsXG5zdmcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDEsXG5oMixcbmgzIHtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuNjI1cmVtO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDEuMzc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5hLFxuYTp2aXNpdGVkLFxuYTphY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDk5LjM3NXJlbTtcbn1cblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOCwgODglLCAzJSk7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICB0b3A6IDByZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMCUsIDIwJSk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4jaGVhZGVyLWN0biB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEuNTYyNXJlbSAwO1xufVxuI2hlYWRlci1jdG4gI2hlYWRlci1sZWZ0LFxuI2hlYWRlci1jdG4gI2hlYWRlci1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAzLjEyNXJlbTtcbn1cbiNoZWFkZXItY3RuIG5hdixcbiNoZWFkZXItY3RuICNzb2NpYWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEuODc1cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGVza3RvcC1saW5rIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBoc2woMjA4LCA4OCUsIDMlKTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uZGVza3RvcC1saW5rOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGhzbCg0NywgMTAwJSwgNTAlKTtcbn1cblxuaSB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICBmb250LXNpemU6IDEuNzVyZW07XG59XG5cbmk6aG92ZXIge1xuICBjb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OS4zNzVyZW0pIHtcbiAgI2hlYWRlci1jdG4ge1xuICAgIHBhZGRpbmc6IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTkuMzc1cmVtKSB7XG4gICNoZWFkZXItY3RuICNoZWFkZXItbGVmdCA+IG5hdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjaGVhZGVyLWN0biAjaGVhZGVyLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4jYWJvdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA4OCUsIDMlKTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG4gIHBhZGRpbmctdG9wOiAzLjEyNXJlbTtcbn1cbiNhYm91dCAjYWJvdXQtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDAuMzV0dXJuLCBoc2woMTg5LCA4MCUsIDEyJSksIGhzbCgxOTgsIDgzJSwgMTglKSwgaHNsKDIwMiwgODQlLCAxNSUpLCBoc2woMjExLCA4NSUsIDUlKSk7XG4gIGdhcDogMS41NjI1cmVtO1xuICBoZWlnaHQ6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA2MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEuNTYyNXJlbSAxLjU2MjVyZW0gMCAwO1xuICBwYWRkaW5nOiAyLjVyZW0gNXJlbTtcbiAgYm9yZGVyOiAwLjMxMjVyZW0gc29saWQgaHNsKDE5OCwgODMlLCAxOCUpO1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuI2Fib3V0ICNhYm91dC1jdG4gI2Fib3V0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuNTYyNXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDcwJTtcbn1cbiNhYm91dCAjaW1nLWN0biB7XG4gIHdpZHRoOiAzMCU7XG59XG4jYWJvdXQgI2ltZy1jdG4gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMC40Mzc1cmVtIDAuNDM3NXJlbSAwIGhzbCgyMDgsIDY5JSwgNDYlKSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XG4gICNhYm91dCAjYWJvdXQtY3RuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAjYWJvdXQgI2Fib3V0LWN0biB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG4gICNhYm91dCAjYWJvdXQtY3RuICNhYm91dC1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gICNhYm91dCAjaW1nLWN0biBpbWcge1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMC4zMTI1cmVtIDAuMzEyNXJlbSAwIGhzbCgyMDgsIDY5JSwgNDYlKSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgI2Fib3V0ICNhYm91dC1jdG4ge1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG4ucmVzdW1lLWxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDMuMTI1cmVtO1xuICBwYWRkaW5nOiAwLjMxMjVyZW0gMS44NzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWF4LXdpZHRoOiAxMC45Mzc1cmVtO1xufVxuXG4ucmVzdW1lLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDcsIDEwMCUsIDY4JSk7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDAlKTtcbn1cblxuI3BvcnRmb2xpbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMjAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMi4xODc1cmVtO1xufVxuI3BvcnRmb2xpbyBoMiB7XG4gIGNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XG59XG5cbiNwb3J0Zm9saW8tY3RuIHtcbiAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiAxLjU2MjVyZW07XG59XG4jcG9ydGZvbGlvLWN0biAucG9ydGZvbGlvLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG59XG4jcG9ydGZvbGlvLWN0biAuaW1nLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNzAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI3BvcnRmb2xpby1jdG4gaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuI3BvcnRmb2xpby1jdG4gaDMge1xuICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3BvcnRmb2xpby1jdG4gLmJ0bi1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbiNwb3J0Zm9saW8tY3RuIGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDgsIDg4JSwgMyUpO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgcGFkZGluZzogMS4yNXJlbTtcbn1cbiNwb3J0Zm9saW8tY3RuIC5jb2RlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDgsIDY5JSwgNDYlKTtcbn1cbiNwb3J0Zm9saW8tY3RuIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDAlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4Ny41cmVtKSB7XG4gICNwb3J0Zm9saW8tY3RuIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2Ni4yNXJlbSkge1xuICAjcG9ydGZvbGlvLWN0biB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMuNzVyZW0pIHtcbiAgI3BvcnRmb2xpby1jdG4ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgI3BvcnRmb2xpby1jdG4gYSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMHJlbSkge1xuICAjcG9ydGZvbGlvLWN0biBhIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICB9XG59XG4jZXhwZXJpZW5jZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDgsIDg4JSwgMyUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyLjE4NzVyZW07XG59XG5cbiNleHBlcmllbmNlLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEuNTYyNXJlbTtcbiAgZ2FwOiAwLjkzNzVyZW07XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIHtcbiAgd2lkdGg6IDI1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBoc2woNDcsIDEwMCUsIDUwJSk7XG59XG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4gLmV4cGVyaWVuY2UtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBoc2woMjA4LCA4OCUsIDMlKTtcbiAgcGFkZGluZzogMC45Mzc1cmVtO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5leHBlcmllbmNlLWxpc3QgaDQge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5leHBlcmllbmNlLWxpc3QgcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biAuZXhwZXJpZW5jZS1saXN0OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5hY3RpdmUtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBoc2woNDcsIDEwMCUsIDUwJSk7XG59XG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4gLmFjdGl2ZS1oZWFkZXIge1xuICBjb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIHtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMC45Mzc1cmVtO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGgzLFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGg0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGgzIHtcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBoNCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gaDUge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICBwYWRkaW5nLXRvcDogMC42MjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBsaSB7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGxpOjptYXJrZXIge1xuICBjb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xufVxuXG4uaGlkZGVuLWRldGFpbHMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2Mi41cmVtKSB7XG4gICNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biB7XG4gICAgd2lkdGg6IDM1JTtcbiAgfVxuICAjZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4ge1xuICAgIHdpZHRoOiA2NSU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1LjMxMjVyZW0pIHtcbiAgI2V4cGVyaWVuY2UtY3RuIHtcbiAgICBwYWRkaW5nLXRvcDogMi4xODc1cmVtO1xuICB9XG4gICNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGgzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAjZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gaDQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICNleHBlcmllbmNlLWN0biAuaGlkZGVuLWRldGFpbHMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICNleHBlcmllbmNlLWN0biAuaGlkZGVuLWRldGFpbHM6bnRoLWNoaWxkKG4rMSkge1xuICAgIHBhZGRpbmctdG9wOiAxLjU2MjVyZW07XG4gIH1cbn1cbiNza2lsbHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDIwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIuMTg3NXJlbTtcbn1cbiNza2lsbHMgaDIge1xuICBjb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xufVxuXG4jc2tpbGxzLWN0biB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6IDEuNTYyNXJlbTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xuICBwYWRkaW5nLXRvcDogMi4xODc1cmVtO1xufVxuI3NraWxscy1jdG4gLnNraWxsIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC4zMTI1cmVtIGhzbCgwLCAwJSwgMCUpKTtcbn1cbiNza2lsbHMtY3RuIC5za2lsbCBkaXYge1xuICBwYWRkaW5nLXRvcDogMC45Mzc1cmVtO1xufVxuI3NraWxscy1jdG4gLnNraWxsIHAge1xuICBwYWRkaW5nOiAwLjkzNzVyZW07XG59XG4jc2tpbGxzLWN0biAuc2tpbGwgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDMuNzVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1cmVtKSB7XG4gICNza2lsbHMtY3RuIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNXJlbSkge1xuICAjc2tpbGxzLWN0biB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAuNjI1cmVtKSB7XG4gICNza2lsbHMtY3RuIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICAjc2tpbGxzLWN0biBpbWcge1xuICAgIG1heC13aWR0aDogNi4yNXJlbTtcbiAgfVxufVxuI21vYmlsZS1idG4ge1xuICBkaXNwbGF5OiBub25lO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDIuMTg3NXJlbTtcbn1cbiNtb2JpbGUtYnRuIC5tb2JpbGUtbGluZXMge1xuICBoZWlnaHQ6IDAuMTg3NXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG59XG5cbiNtb2JpbGUtbmF2IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxLjU2MjVyZW07XG4gIHJpZ2h0OiAxLjU2MjVyZW07XG4gIHBhZGRpbmc6IDIuMTg3NXJlbTtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOCwgODglLCAzJSk7XG4gIHdpZHRoOiA4MCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHotaW5kZXg6IDQ7XG59XG4jbW9iaWxlLW5hdiB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS4yNXJlbTtcbiAgcGFkZGluZy10b3A6IDEuNTYyNXJlbTtcbn1cbiNtb2JpbGUtbmF2IGkge1xuICBmb250LXNpemU6IDIuMTg3NXJlbTtcbn1cbiNtb2JpbGUtbmF2IC5tb2JpbGUtbmF2LWxpbmsge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbn1cbiNtb2JpbGUtbmF2IC5yZXN1bWUtbGluayB7XG4gIHBhZGRpbmc6IDA7XG4gIG1heC13aWR0aDogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuI21vYmlsZS1uYXYtb3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjI1KTtcbiAgei1pbmRleDogMztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTkuMzc1cmVtKSB7XG4gICNtb2JpbGUtYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19nZW5lcmFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19jb250YWluZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2Fib3V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fcG9ydGZvbGlvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2V4cGVyaWVuY2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fc2tpbGxzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX21vYmlsZS1uYXYuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNDLGVBQUE7QUNIRDs7QURNQTtFQUNDLCtCRVRjO0VGVWQsbUJBQUE7RUFDQSxzQkdHYTtFSEZiLGlDQUFBO0VBQ0EsZ0JBQUE7QUNIRDs7QUdWQTs7O0VBR0Msc0JBQUE7QUhhRDs7QUdWQTtFQUNDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBSGFEOztBR1ZBOzs7RUFHQyxjQUFBO0FIYUQ7O0FJekJBOzs7RUFHQyxTQUFBO0VBQ0EsZ0JBQUE7QUo0QkQ7O0FJekJBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FKNEJEOztBSXpCQTtFQUNDLG1CQUFBO0VBQ0EsdUJG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QUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QlZqRGM7RVVrRGQsZ0JBQUE7QVppY0Y7O0FZN2JBO0VBQ0MsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EseUNBQUE7RUFDQSxVQUFBO0FaZ2NEOztBWTdiQTtFQUNDO0lBQ0MsYUFBQTtFWmdjQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiY29sb3JzXFxcIiBhcyAqO1xcbkB1c2UgXFxcImZvbnRzXFxcIiBhcyAqO1xcblxcbmh0bWwge1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuXFx0Zm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxuXFx0Zm9udC1zaXplOiByZW0oMTgpO1xcblxcdGNvbG9yOiAkY2xyLWdyYXktZGs7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1ncmF5LWx0O1xcblxcdGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblwiLFwiaHRtbCB7XFxuICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyZjtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBjb2xvcjogaHNsKDAsIDAlLCAyMCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA4NSUpO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyB7XFxuICBtYXJnaW46IDA7XFxuICBsaW5lLWhlaWdodDogMS4xO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuNjI1cmVtO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDEuMzc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogOTkuMzc1cmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOCwgODglLCAzJSk7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIHRvcDogMHJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMCUsIDIwJSk7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbiNoZWFkZXItY3RuIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDEuNTYyNXJlbSAwO1xcbn1cXG4jaGVhZGVyLWN0biAjaGVhZGVyLWxlZnQsXFxuI2hlYWRlci1jdG4gI2hlYWRlci1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAzLjEyNXJlbTtcXG59XFxuI2hlYWRlci1jdG4gbmF2LFxcbiNoZWFkZXItY3RuICNzb2NpYWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDEuODc1cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRlc2t0b3AtbGluayB7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGhzbCgyMDgsIDg4JSwgMyUpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZGVza3RvcC1saW5rOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBoc2woNDcsIDEwMCUsIDUwJSk7XFxufVxcblxcbmkge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBmb250LXNpemU6IDEuNzVyZW07XFxufVxcblxcbmk6aG92ZXIge1xcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkuMzc1cmVtKSB7XFxuICAjaGVhZGVyLWN0biB7XFxuICAgIHBhZGRpbmc6IDEuNTYyNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTkuMzc1cmVtKSB7XFxuICAjaGVhZGVyLWN0biAjaGVhZGVyLWxlZnQgPiBuYXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgI2hlYWRlci1jdG4gI2hlYWRlci1yaWdodCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbiNhYm91dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA4OCUsIDMlKTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbiAgcGFkZGluZy10b3A6IDMuMTI1cmVtO1xcbn1cXG4jYWJvdXQgI2Fib3V0LWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwLjM1dHVybiwgaHNsKDE4OSwgODAlLCAxMiUpLCBoc2woMTk4LCA4MyUsIDE4JSksIGhzbCgyMDIsIDg0JSwgMTUlKSwgaHNsKDIxMSwgODUlLCA1JSkpO1xcbiAgZ2FwOiAxLjU2MjVyZW07XFxuICBoZWlnaHQ6IDkwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNTYyNXJlbSAxLjU2MjVyZW0gMCAwO1xcbiAgcGFkZGluZzogMi41cmVtIDVyZW07XFxuICBib3JkZXI6IDAuMzEyNXJlbSBzb2xpZCBoc2woMTk4LCA4MyUsIDE4JSk7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG4jYWJvdXQgI2Fib3V0LWN0biAjYWJvdXQtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjU2MjVyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuI2Fib3V0ICNpbWctY3RuIHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcbiNhYm91dCAjaW1nLWN0biBpbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjQzNzVyZW0gMC40Mzc1cmVtIDAgaHNsKDIwOCwgNjklLCA0NiUpKTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjRyZW0pIHtcXG4gICNhYm91dCAjYWJvdXQtY3RuIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcXG4gICNhYm91dCAjYWJvdXQtY3RuIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcbiAgI2Fib3V0ICNhYm91dC1jdG4gI2Fib3V0LWNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gICNhYm91dCAjaW1nLWN0biBpbWcge1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuMzEyNXJlbSAwLjMxMjVyZW0gMCBoc2woMjA4LCA2OSUsIDQ2JSkpO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICAjYWJvdXQgI2Fib3V0LWN0biB7XFxuICAgIHBhZGRpbmc6IDEuMjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuLnJlc3VtZS1saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxuICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcXG4gIHBhZGRpbmc6IDAuMzEyNXJlbSAxLjg3NXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1heC13aWR0aDogMTAuOTM3NXJlbTtcXG59XFxuXFxuLnJlc3VtZS1saW5rOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0NywgMTAwJSwgNjglKTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDAlKTtcXG59XFxuXFxuI3BvcnRmb2xpbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDIwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyLjE4NzVyZW07XFxufVxcbiNwb3J0Zm9saW8gaDIge1xcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcXG59XFxuXFxuI3BvcnRmb2xpby1jdG4ge1xcbiAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ2FwOiAxLjU2MjVyZW07XFxufVxcbiNwb3J0Zm9saW8tY3RuIC5wb3J0Zm9saW8tY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbn1cXG4jcG9ydGZvbGlvLWN0biAuaW1nLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4jcG9ydGZvbGlvLWN0biBpbWcge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuI3BvcnRmb2xpby1jdG4gaDMge1xcbiAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNwb3J0Zm9saW8tY3RuIC5idG4tY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuI3BvcnRmb2xpby1jdG4gYSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA4OCUsIDMlKTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgcGFkZGluZzogMS4yNXJlbTtcXG59XFxuI3BvcnRmb2xpby1jdG4gLmNvZGUtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDgsIDY5JSwgNDYlKTtcXG59XFxuI3BvcnRmb2xpby1jdG4gYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg3LjVyZW0pIHtcXG4gICNwb3J0Zm9saW8tY3RuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjYuMjVyZW0pIHtcXG4gICNwb3J0Zm9saW8tY3RuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMuNzVyZW0pIHtcXG4gICNwb3J0Zm9saW8tY3RuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgI3BvcnRmb2xpby1jdG4gYSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjByZW0pIHtcXG4gICNwb3J0Zm9saW8tY3RuIGEge1xcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgfVxcbn1cXG4jZXhwZXJpZW5jZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA4OCUsIDMlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIuMTg3NXJlbTtcXG59XFxuXFxuI2V4cGVyaWVuY2UtY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDEuNTYyNXJlbTtcXG4gIGdhcDogMC45Mzc1cmVtO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biB7XFxuICB3aWR0aDogMjUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGhzbCg0NywgMTAwJSwgNTAlKTtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5leHBlcmllbmNlLWxpc3Qge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGhzbCgyMDgsIDg4JSwgMyUpO1xcbiAgcGFkZGluZzogMC45Mzc1cmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4gLmV4cGVyaWVuY2UtbGlzdCBoNCB7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5leHBlcmllbmNlLWxpc3QgcCB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biAuZXhwZXJpZW5jZS1saXN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5hY3RpdmUtbGlzdCB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgaHNsKDQ3LCAxMDAlLCA1MCUpO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4gLmFjdGl2ZS1oZWFkZXIge1xcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAwLjkzNzVyZW07XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBoMyxcXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gaDQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gaDMge1xcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGg0IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBoNSB7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gdWwge1xcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xcbiAgcGFkZGluZy10b3A6IDAuNjI1cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gbGkge1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBsaTo6bWFya2VyIHtcXG4gIGNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XFxufVxcblxcbi5oaWRkZW4tZGV0YWlscyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2Mi41cmVtKSB7XFxuICAjZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4ge1xcbiAgICB3aWR0aDogMzUlO1xcbiAgfVxcbiAgI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIHtcXG4gICAgd2lkdGg6IDY1JTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUuMzEyNXJlbSkge1xcbiAgI2V4cGVyaWVuY2UtY3RuIHtcXG4gICAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcXG4gIH1cXG4gICNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAjZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gICNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBoMyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGg0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAjZXhwZXJpZW5jZS1jdG4gLmhpZGRlbi1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAjZXhwZXJpZW5jZS1jdG4gLmhpZGRlbi1kZXRhaWxzOm50aC1jaGlsZChuKzEpIHtcXG4gICAgcGFkZGluZy10b3A6IDEuNTYyNXJlbTtcXG4gIH1cXG59XFxuI3NraWxscyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDIwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyLjE4NzVyZW07XFxufVxcbiNza2lsbHMgaDIge1xcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcXG59XFxuXFxuI3NraWxscy1jdG4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogMS41NjI1cmVtO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xcbiAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcXG59XFxuI3NraWxscy1jdG4gLnNraWxsIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC4zMTI1cmVtIGhzbCgwLCAwJSwgMCUpKTtcXG59XFxuI3NraWxscy1jdG4gLnNraWxsIGRpdiB7XFxuICBwYWRkaW5nLXRvcDogMC45Mzc1cmVtO1xcbn1cXG4jc2tpbGxzLWN0biAuc2tpbGwgcCB7XFxuICBwYWRkaW5nOiAwLjkzNzVyZW07XFxufVxcbiNza2lsbHMtY3RuIC5za2lsbCBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiAzLjc1cmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NXJlbSkge1xcbiAgI3NraWxscy1jdG4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNXJlbSkge1xcbiAgI3NraWxscy1jdG4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MC42MjVyZW0pIHtcXG4gICNza2lsbHMtY3RuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1cmVtKSB7XFxuICAjc2tpbGxzLWN0biBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDYuMjVyZW07XFxuICB9XFxufVxcbiNtb2JpbGUtYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMi4xODc1cmVtO1xcbn1cXG4jbW9iaWxlLWJ0biAubW9iaWxlLWxpbmVzIHtcXG4gIGhlaWdodDogMC4xODc1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbn1cXG5cXG4jbW9iaWxlLW5hdiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDEuNTYyNXJlbTtcXG4gIHJpZ2h0OiAxLjU2MjVyZW07XFxuICBwYWRkaW5nOiAyLjE4NzVyZW07XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOCwgODglLCAzJSk7XFxuICB3aWR0aDogODAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHotaW5kZXg6IDQ7XFxufVxcbiNtb2JpbGUtbmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS4yNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAxLjU2MjVyZW07XFxufVxcbiNtb2JpbGUtbmF2IGkge1xcbiAgZm9udC1zaXplOiAyLjE4NzVyZW07XFxufVxcbiNtb2JpbGUtbmF2IC5tb2JpbGUtbmF2LWxpbmsge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxufVxcbiNtb2JpbGUtbmF2IC5yZXN1bWUtbGluayB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbiNtb2JpbGUtbmF2LW92ZXJsYXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDAuMjUpO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTkuMzc1cmVtKSB7XFxuICAjbW9iaWxlLWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxufVwiLFwiJGZvbnQtcHJpbWFyeTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJmO1xcblwiLFwiLy8gUHJpbWFyeSBDb2xvcnNcXG4kY2xyLXByaW1hcnk6IGhzbCgyMDgsIDg4JSwgMyUpO1xcbiRjbHItc2Vjb25kYXJ5OiBoc2woNDcsIDEwMCUsIDUwJSk7XFxuJGNsci1zZWNvbmRhcnktaG92ZXI6IGhzbCg0NywgMTAwJSwgNjglKTtcXG4kY2xyLXRlcnRpYXJ5OiBoc2woMjA4LCA2OSUsIDQ2JSk7XFxuJGNsci1ncmFkaWVudC1vbmU6IGhzbCgxODksIDgwJSwgMTIlKTtcXG4kY2xyLWdyYWRpZW50LXR3bzogaHNsKDE5OCwgODMlLCAxOCUpO1xcbiRjbHItZ3JhZGllbnQtdGhyZWU6IGhzbCgyMDIsIDg0JSwgMTUlKTtcXG4kY2xyLWdyYWRpZW50LWZvdXI6IGhzbCgyMTEsIDg1JSwgNSUpO1xcblxcbi8vIE5ldXRyYWwgQ29sb3JzXFxuJGNsci13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXG4kY2xyLWdyYXktbHQ6IGhzbCgwLCAwJSwgODUlKTtcXG4kY2xyLWdyYXk6IGhzbCgwLCAwJSwgNTAlKTtcXG4kY2xyLWdyYXktZGs6IGhzbCgwLCAwJSwgMjAlKTtcXG4kY2xyLWJsYWNrOiBoc2woMCwgMCUsIDAlKTtcXG5cIixcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250OiBpbmhlcml0O1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSxcXG5zdmcge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiY29sb3JzXFxcIiBhcyAqO1xcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0bGluZS1oZWlnaHQ6IDEuMTtcXG59XFxuXFxuaDEge1xcblxcdGZvbnQtc2l6ZTogcmVtKDMyKTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5oMiB7XFxuXFx0Zm9udC1zaXplOiByZW0oMjYpO1xcblxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmgzIHtcXG5cXHRmb250LXNpemU6IHJlbSgyMik7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTphY3RpdmUge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbi5jb250YWluZXIge1xcblxcdG1heC13aWR0aDogcmVtKDE1OTApO1xcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuaGVhZGVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLXByaW1hcnk7XFxuXFx0Y29sb3I6ICRjbHItd2hpdGU7XFxuXFx0dG9wOiByZW0oMCk7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjbHItZ3JheS1kaztcXG5cXHRwb3NpdGlvbjogc3RpY2t5O1xcblxcdHotaW5kZXg6IDEwO1xcbn1cXG5cXG4jaGVhZGVyLWN0biB7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0cGFkZGluZzogcmVtKDI1KSAwO1xcblxcblxcdCNoZWFkZXItbGVmdCxcXG5cXHQjaGVhZGVyLXJpZ2h0IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRnYXA6IHJlbSg1MCk7XFxuXFx0fVxcblxcblxcdG5hdixcXG5cXHQjc29jaWFscyB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0XFx0Z2FwOiByZW0oMzApO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0fVxcbn1cXG5cXG4uZGVza3RvcC1saW5rIHtcXG5cXHRjb2xvcjogJGNsci13aGl0ZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRjbHItcHJpbWFyeTtcXG5cXHRmb250LXNpemU6IHJlbSgxNik7XFxufVxcblxcbi5kZXNrdG9wLWxpbms6aG92ZXIge1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkY2xyLXNlY29uZGFyeTtcXG59XFxuXFxuaSB7XFxuXFx0Y29sb3I6ICRjbHItd2hpdGU7XFxuXFx0Zm9udC1zaXplOiByZW0oMjgpO1xcbn1cXG5cXG5pOmhvdmVyIHtcXG5cXHRjb2xvcjogJGNsci1zZWNvbmRhcnk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNTkwKSkge1xcblxcdCNoZWFkZXItY3RuIHtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMjUpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDk1MCkpIHtcXG5cXHQjaGVhZGVyLWN0biB7XFxuXFx0XFx0I2hlYWRlci1sZWZ0ID4gbmF2IHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQjaGVhZGVyLXJpZ2h0IHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jYWJvdXQge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItcHJpbWFyeTtcXG5cXHRjb2xvcjogJGNsci13aGl0ZTtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGVuZDtcXG5cXHRwYWRkaW5nLXRvcDogcmVtKDUwKTtcXG5cXG5cXHQjYWJvdXQtY3RuIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdFxcdDAuMzV0dXJuLFxcblxcdFxcdFxcdCRjbHItZ3JhZGllbnQtb25lLFxcblxcdFxcdFxcdCRjbHItZ3JhZGllbnQtdHdvLFxcblxcdFxcdFxcdCRjbHItZ3JhZGllbnQtdGhyZWUsXFxuXFx0XFx0XFx0JGNsci1ncmFkaWVudC1mb3VyXFxuXFx0XFx0KTtcXG5cXHRcXHRnYXA6IHJlbSgyNSk7XFxuXFx0XFx0aGVpZ2h0OiA5MCU7XFxuXFx0XFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0XFx0d2lkdGg6IDYwJTtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiByZW0oMjUpIHJlbSgyNSkgMCAwO1xcblxcdFxcdHBhZGRpbmc6IHJlbSg0MCkgcmVtKDgwKTtcXG5cXHRcXHRib3JkZXI6IHJlbSg1KSBzb2xpZCAkY2xyLWdyYWRpZW50LXR3bztcXG5cXHRcXHRib3JkZXItYm90dG9tOiAwO1xcblxcblxcdFxcdCNhYm91dC1jb250ZW50IHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGdhcDogcmVtKDI1KTtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdHdpZHRoOiA3MCU7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQjaW1nLWN0biB7XFxuXFx0XFx0d2lkdGg6IDMwJTtcXG5cXG5cXHRcXHRpbWcge1xcblxcdFxcdFxcdG1heC13aWR0aDogMTAwJTtcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0XFx0XFx0ZmlsdGVyOiBkcm9wLXNoYWRvdyhyZW0oNykgcmVtKDcpIDAgJGNsci10ZXJ0aWFyeSk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDEwMjQpKSB7XFxuXFx0I2Fib3V0ICNhYm91dC1jdG4ge1xcblxcdFxcdHdpZHRoOiA4MCU7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzY4KSkge1xcblxcdCNhYm91dCB7XFxuXFx0XFx0I2Fib3V0LWN0biB7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcblxcblxcdFxcdFxcdCNhYm91dC1jb250ZW50IHtcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0I2ltZy1jdG4ge1xcblxcdFxcdFxcdGltZyB7XFxuXFx0XFx0XFx0XFx0ZmlsdGVyOiBkcm9wLXNoYWRvdyhyZW0oNSkgcmVtKDUpIDAgJGNsci10ZXJ0aWFyeSk7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg0MjUpKSB7XFxuXFx0I2Fib3V0IHtcXG5cXHRcXHQjYWJvdXQtY3RuIHtcXG5cXHRcXHRcXHRwYWRkaW5nOiByZW0oMjApO1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuLnJlc3VtZS1saW5rIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1zZWNvbmRhcnk7XFxuXFx0Y29sb3I6ICRjbHItYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogcmVtKDUwKTtcXG5cXHRwYWRkaW5nOiByZW0oNSkgcmVtKDMwKTtcXG5cXHRmb250LXNpemU6IHJlbSgxNik7XFxuXFx0bWF4LXdpZHRoOiByZW0oMTc1KTtcXG59XFxuXFxuLnJlc3VtZS1saW5rOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLXNlY29uZGFyeS1ob3ZlcjtcXG5cXHRjb2xvcjogJGNsci1ibGFjaztcXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNwb3J0Zm9saW8ge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItZ3JheS1kaztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiByZW0oMzUpO1xcblxcblxcdGgyIHtcXG5cXHRcXHRjb2xvcjogJGNsci1zZWNvbmRhcnk7XFxuXFx0fVxcbn1cXG5cXG4jcG9ydGZvbGlvLWN0biB7XFxuXFx0cGFkZGluZy10b3A6IHJlbSgzNSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcblxcdGdhcDogcmVtKDI1KTtcXG5cXG5cXHQucG9ydGZvbGlvLWNhcmQge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdH1cXG5cXG5cXHQuaW1nLWN0biB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRoZWlnaHQ6IDcwJTtcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdH1cXG5cXG5cXHRpbWcge1xcblxcdFxcdG9iamVjdC1maXQ6IGNvdmVyO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG5cXG5cXHRoMyB7XFxuXFx0XFx0cGFkZGluZy1ib3R0b206IHJlbSgyMCk7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXG5cXHQuYnRuLWN0biB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxuXFxuXFx0YSB7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDE4KTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRib3JkZXI6IG5vbmU7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1wcmltYXJ5O1xcblxcdFxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdFxcdHBhZGRpbmc6IHJlbSgyMCk7XFxuXFx0fVxcblxcblxcdC5jb2RlLWJ0biB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci10ZXJ0aWFyeTtcXG5cXHR9XFxuXFxuXFx0YTpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1zZWNvbmRhcnk7XFxuXFx0XFx0Y29sb3I6ICRjbHItYmxhY2s7XFxuXFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDE0MDApKSB7XFxuXFx0I3BvcnRmb2xpby1jdG4ge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTA2MCkpIHtcXG5cXHQjcG9ydGZvbGlvLWN0biB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg3MDApKSB7XFxuXFx0I3BvcnRmb2xpby1jdG4ge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcblxcdCNwb3J0Zm9saW8tY3RuIHtcXG5cXHRcXHRhIHtcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDMyMCkpIHtcXG5cXHQjcG9ydGZvbGlvLWN0biB7XFxuXFx0XFx0YSB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTQpO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jZXhwZXJpZW5jZSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1wcmltYXJ5O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IHJlbSgzNSk7XFxufVxcblxcbiNleHBlcmllbmNlLWN0biB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRwYWRkaW5nLXRvcDogcmVtKDI1KTtcXG5cXHRnYXA6IHJlbSgxNSk7XFxuXFx0Y29sb3I6ICRjbHItd2hpdGU7XFxuXFxuXFx0I2V4cGVyaWVuY2UtbGlzdC1jdG4ge1xcblxcdFxcdHdpZHRoOiAyNSU7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGJvcmRlci1sZWZ0OiA1cHggc29saWQgJGNsci1zZWNvbmRhcnk7XFxuXFxuXFx0XFx0LmV4cGVyaWVuY2UtbGlzdCB7XFxuXFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRjbHItcHJpbWFyeTtcXG5cXHRcXHRcXHRwYWRkaW5nOiByZW0oMTUpO1xcblxcblxcdFxcdFxcdGg0IHtcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IHJlbSgxOCk7XFxuXFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0cCB7XFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0LmV4cGVyaWVuY2UtbGlzdDpob3ZlciB7XFxuXFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQuYWN0aXZlLWxpc3Qge1xcblxcdFxcdFxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkY2xyLXNlY29uZGFyeTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0LmFjdGl2ZS1oZWFkZXIge1xcblxcdFxcdFxcdGNvbG9yOiAkY2xyLXNlY29uZGFyeTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdCNleHBlcmllbmNlLWRldGFpbHMtY3RuIHtcXG5cXHRcXHR3aWR0aDogNTAlO1xcblxcdFxcdHBhZGRpbmc6IHJlbSgxNSk7XFxuXFxuXFx0XFx0aDMsXFxuXFx0XFx0aDQge1xcblxcdFxcdFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRcXHR9XFxuXFxuXFx0XFx0aDMge1xcblxcdFxcdFxcdGNvbG9yOiAkY2xyLXNlY29uZGFyeTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0aDQge1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0XFx0fVxcblxcblxcdFxcdGg1IHtcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgxOCk7XFxuXFx0XFx0fVxcblxcblxcdFxcdHVsIHtcXG5cXHRcXHRcXHRwYWRkaW5nLWxlZnQ6IHJlbSgyMCk7XFxuXFx0XFx0XFx0cGFkZGluZy10b3A6IHJlbSgxMCk7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRsaSB7XFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDI7XFxuXFx0XFx0fVxcblxcblxcdFxcdGxpOjptYXJrZXIge1xcblxcdFxcdFxcdGNvbG9yOiAkY2xyLXNlY29uZGFyeTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG4uaGlkZGVuLWRldGFpbHMge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxMDAwKSkge1xcblxcdCNleHBlcmllbmNlLWN0biB7XFxuXFx0XFx0I2V4cGVyaWVuY2UtbGlzdC1jdG4ge1xcblxcdFxcdFxcdHdpZHRoOiAzNSU7XFxuXFx0XFx0fVxcblxcblxcdFxcdCNleHBlcmllbmNlLWRldGFpbHMtY3RuIHtcXG5cXHRcXHRcXHR3aWR0aDogNjUlO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg3MjUpKSB7XFxuXFx0I2V4cGVyaWVuY2UtY3RuIHtcXG5cXHRcXHRwYWRkaW5nLXRvcDogcmVtKDM1KTtcXG5cXG5cXHRcXHQjZXhwZXJpZW5jZS1saXN0LWN0biB7XFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0I2V4cGVyaWVuY2UtZGV0YWlscy1jdG4ge1xcblxcdFxcdFxcdHBhZGRpbmc6IDA7XFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFxuXFx0XFx0XFx0aDMge1xcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHRoNCB7XFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQuaGlkZGVuLWRldGFpbHMge1xcblxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQuaGlkZGVuLWRldGFpbHM6bnRoLWNoaWxkKG4gKyAxKSB7XFxuXFx0XFx0XFx0cGFkZGluZy10b3A6IHJlbSgyNSk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNza2lsbHMge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItZ3JheS1kaztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiByZW0oMzUpO1xcblxcblxcdGgyIHtcXG5cXHRcXHRjb2xvcjogJGNsci1zZWNvbmRhcnk7XFxuXFx0fVxcbn1cXG5cXG4jc2tpbGxzLWN0biB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGdhcDogcmVtKDI1KTtcXG5cXHRjb2xvcjogJGNsci1ibGFjaztcXG5cXHRwYWRkaW5nLXRvcDogcmVtKDM1KTtcXG5cXG5cXHQuc2tpbGwge1xcblxcdFxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci13aGl0ZTtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCByZW0oNSkgJGNsci1ibGFjayk7XFxuXFxuXFx0XFx0ZGl2IHtcXG5cXHRcXHRcXHRwYWRkaW5nLXRvcDogcmVtKDE1KTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0cCB7XFxuXFx0XFx0XFx0cGFkZGluZzogcmVtKDE1KTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0aW1nIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRcXHRvYmplY3QtZml0OiBjb250YWluO1xcblxcdFxcdFxcdHdpZHRoOiBhdXRvO1xcblxcdFxcdFxcdGhlaWdodDogYXV0bztcXG5cXHRcXHRcXHRtYXgtaGVpZ2h0OiByZW0oNjApO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxMjAwKSkge1xcblxcdCNza2lsbHMtY3RuIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDkwMCkpIHtcXG5cXHQjc2tpbGxzLWN0biB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg2NTApKSB7XFxuXFx0I3NraWxscy1jdG4ge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXG5cXHQjc2tpbGxzLWN0biB7XFxuXFx0XFx0aW1nIHtcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHJlbSgxMDApO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jbW9iaWxlLWJ0biB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdHdpZHRoOiByZW0oMzUpO1xcblxcblxcdC5tb2JpbGUtbGluZXMge1xcblxcdFxcdGhlaWdodDogcmVtKDMpO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItd2hpdGU7XFxuXFx0fVxcbn1cXG5cXG4jbW9iaWxlLW5hdiB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHR0ZXh0LWFsaWduOiByaWdodDtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiByZW0oMjUpO1xcblxcdHJpZ2h0OiByZW0oMjUpO1xcblxcdHBhZGRpbmc6IHJlbSgzNSk7XFxuXFx0Zm9udC1zaXplOiByZW0oMTgpO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItcHJpbWFyeTtcXG5cXHR3aWR0aDogODAlO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0ei1pbmRleDogNDtcXG5cXG5cXHR1bCB7XFxuXFx0XFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0Z2FwOiByZW0oMjApO1xcblxcdFxcdHBhZGRpbmctdG9wOiByZW0oMjUpO1xcblxcdH1cXG5cXG5cXHRpIHtcXG5cXHRcXHRmb250LXNpemU6IHJlbSgzNSk7XFxuXFx0fVxcblxcblxcdC5tb2JpbGUtbmF2LWxpbmsge1xcblxcdFxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdH1cXG5cXG5cXHQucmVzdW1lLWxpbmsge1xcblxcdFxcdHBhZGRpbmc6IDA7XFxuXFx0XFx0bWF4LXdpZHRoOiBub25lO1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDIwKTtcXG5cXHRcXHRmb250LXdlaWdodDogNzAwO1xcblxcdFxcdGNvbG9yOiAkY2xyLXNlY29uZGFyeTtcXG5cXHRcXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdH1cXG59XFxuXFxuI21vYmlsZS1uYXYtb3ZlcmxheSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDAuMjUpO1xcblxcdHotaW5kZXg6IDM7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg5NTApKSB7XFxuXFx0I21vYmlsZS1idG4ge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvcGRmL3Jlc3VtZS5wZGZcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7IGxvYWRFeHBlcmllbmNlIH07XG5cbmNvbnN0IGV4cExpc3QgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhwZXJpZW5jZS1saXN0XCIpKTtcbmNvbnN0IGV4cERldGFpbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhwZXJpZW5jZS1kZXRhaWxzXCIpKTtcblxuZnVuY3Rpb24gbG9hZEV4cGVyaWVuY2UoKSB7XG5cdGxvYWRFeHBlcmllbmNlRXZlbnRMaXN0ZW5lcigpO1xufVxuXG5mdW5jdGlvbiBsb2FkRXhwZXJpZW5jZUV2ZW50TGlzdGVuZXIoKSB7XG5cdGV4cExpc3QubWFwKChleHApID0+IHtcblx0XHRleHAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwZGF0ZUV4cGVyaWVuY2VMaXN0KTtcblx0XHRleHAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwZGF0ZUV4cGVyaWVuY2VEZXRhaWxzKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUV4cGVyaWVuY2VMaXN0KCkge1xuXHQvLyBjaGVjayBjbGFzcyBsaXN0IGZvciBhY3RpdmUsIHRoZW4gdXBkYXRlIHN0eWxpbmdcblx0Y29uc3QgbmV3SGVhZGVyID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiaDRcIik7XG5cblx0aWYgKCF0aGlzLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1saXN0XCIpKSB7XG5cdFx0Ly8gcmVtb3ZlIHByZXZpb3VzIGV4cGVyaWVuY2Ugc3R5bGluZ1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZXhwTGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGV4cExpc3RbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLWxpc3RcIikpIHtcblx0XHRcdFx0Y29uc3Qgb2xkSGVhZGVyID0gZXhwTGlzdFtpXS5xdWVyeVNlbGVjdG9yKFwiaDRcIik7XG5cdFx0XHRcdGV4cExpc3RbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1saXN0XCIpO1xuXHRcdFx0XHRvbGRIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1oZWFkZXJcIik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gdXBkYXRlIGNsaWNrZWQgaGVhZGVyIHN0eWxpbmdcblx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtbGlzdFwiKTtcblx0XHRuZXdIZWFkZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1oZWFkZXJcIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlRXhwZXJpZW5jZURldGFpbHMoKSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZXhwTGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChleHBMaXN0W2ldLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1saXN0XCIpKSB7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGV4cERldGFpbHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZXhwRGV0YWlsc1tqXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWRldGFpbHNcIik7XG5cdFx0XHRcdGV4cERldGFpbHNbal0uY2xhc3NMaXN0LmFkZChcImhpZGRlbi1kZXRhaWxzXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRleHBEZXRhaWxzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW4tZGV0YWlsc1wiKTtcblx0XHRcdGV4cERldGFpbHNbaV0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1kZXRhaWxzXCIpO1xuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IHsgbG9hZE1vYmlsZSB9O1xuXG5jb25zdCBtb2JpbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1idG5cIik7XG5jb25zdCBtb2JpbGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1uYXZcIik7XG5jb25zdCBtb2JpbGVOYXZPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbmF2LW92ZXJsYXlcIik7XG5jb25zdCBtb2JpbGVOYXZFeGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbmF2LWV4aXRcIik7XG5jb25zdCBtb2JpbGVOYXZMaW5rID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vYmlsZS1uYXYtbGlua1wiKSk7XG5cbmZ1bmN0aW9uIGxvYWRNb2JpbGUoKSB7XG5cdGxvYWRNb2JpbGVFdmVudExpc3RlbmVycygpO1xufVxuXG5mdW5jdGlvbiBsb2FkTW9iaWxlRXZlbnRMaXN0ZW5lcnMoKSB7XG5cdG1vYmlsZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheU1vYmlsZU5hdik7XG5cdG1vYmlsZU5hdkV4aXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVNb2JpbGVOYXYpO1xuXHRtb2JpbGVOYXZMaW5rLm1hcCgobGluaykgPT4ge1xuXHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVNb2JpbGVOYXYpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheU1vYmlsZU5hdigpIHtcblx0bW9iaWxlTmF2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblx0bW9iaWxlTmF2T3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5mdW5jdGlvbiBoaWRlTW9iaWxlTmF2KCkge1xuXHRtb2JpbGVOYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRtb2JpbGVOYXZPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cbiIsImltcG9ydCB7IGxvYWRFeHBlcmllbmNlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9leHBlcmllbmNlXCI7XG5pbXBvcnQgeyBsb2FkTW9iaWxlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9tb2JpbGVcIjtcbmV4cG9ydCB7IGluaXQgfTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcblx0bG9hZEV4cGVyaWVuY2UoKTtcblx0bG9hZE1vYmlsZSgpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBpbml0IH0gZnJvbSBcIi4vanMvaW5pdC5qc1wiO1xuaW1wb3J0IFwiLi9zY3NzL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQgcmVzdW1lIGZyb20gXCIuL2Fzc2V0cy9yZXN1bWUucGRmXCI7XG5cbmluaXQoKTtcblxuY29uc3QgcmVzdW1lTGluayA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXN1bWUtbGlua1wiKSk7XG5cbnJlc3VtZUxpbmsuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cdGJ1dHRvbi5ocmVmID0gcmVzdW1lO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=