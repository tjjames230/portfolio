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
  #skills-ctn .img-ctn {
    flex: 1;
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
}`, "",{"version":3,"sources":["webpack://./src/scss/globals/_general.scss","webpack://./src/scss/styles.scss","webpack://./src/scss/globals/_fonts.scss","webpack://./src/scss/globals/_colors.scss","webpack://./src/scss/globals/_reset.scss","webpack://./src/scss/globals/_typography.scss","webpack://./src/scss/globals/_container.scss","webpack://./src/scss/components/_header.scss","webpack://./src/scss/components/_about.scss","webpack://./src/scss/components/_buttons.scss","webpack://./src/scss/components/_portfolio.scss","webpack://./src/scss/components/_experience.scss","webpack://./src/scss/components/_skills.scss","webpack://./src/scss/components/_mobile-nav.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"../utilities/\" as *;\r\n@use \"colors\" as *;\r\n@use \"fonts\" as *;\r\n\r\nhtml {\r\n\tfont-size: 100%;\r\n}\r\n\r\nbody {\r\n\tfont-family: $font-primary;\r\n\tfont-size: rem(18);\r\n\tcolor: $clr-gray-dk;\r\n\tbackground-color: $clr-gray-lt;\r\n\tline-height: 1.5;\r\n}\r\n","html {\n  font-size: 100%;\n}\n\nbody {\n  font-family: \"Inter\", sans-serf;\n  font-size: 1.125rem;\n  color: hsl(0, 0%, 20%);\n  background-color: hsl(0, 0%, 85%);\n  line-height: 1.5;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n  line-height: 1.1;\n}\n\nh1 {\n  font-size: 2rem;\n  font-weight: 700;\n}\n\nh2 {\n  font-size: 1.625rem;\n  color: hsl(0, 0%, 100%);\n  font-weight: 700;\n}\n\nh3 {\n  font-size: 1.375rem;\n  font-weight: 700;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\n.container {\n  max-width: 99.375rem;\n}\n\nheader {\n  background-color: hsl(208, 88%, 3%);\n  color: hsl(0, 0%, 100%);\n  top: 0rem;\n  border-bottom: 1px solid hsl(0, 0%, 20%);\n  position: sticky;\n  z-index: 10;\n}\n\n#header-ctn {\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  padding: 1.5625rem 0;\n}\n#header-ctn #header-left,\n#header-ctn #header-right {\n  display: flex;\n  justify-content: space-between;\n  gap: 3.125rem;\n}\n#header-ctn nav,\n#header-ctn #socials {\n  display: flex;\n  justify-content: space-between;\n  gap: 1.875rem;\n  align-items: center;\n}\n\n.desktop-link {\n  color: hsl(0, 0%, 100%);\n  display: flex;\n  align-items: center;\n  border-bottom: 2px solid hsl(208, 88%, 3%);\n  font-size: 1rem;\n}\n\n.desktop-link:hover {\n  border-bottom: 2px solid hsl(47, 100%, 50%);\n}\n\ni {\n  color: hsl(0, 0%, 100%);\n  font-size: 1.75rem;\n}\n\ni:hover {\n  color: hsl(47, 100%, 50%);\n}\n\n@media screen and (max-width: 99.375rem) {\n  #header-ctn {\n    padding: 1.5625rem;\n  }\n}\n@media screen and (max-width: 59.375rem) {\n  #header-ctn #header-left > nav {\n    display: none;\n  }\n  #header-ctn #header-right {\n    display: none;\n  }\n}\n#about {\n  background-color: hsl(208, 88%, 3%);\n  color: hsl(0, 0%, 100%);\n  overflow: hidden;\n  display: flex;\n  align-items: end;\n  padding-top: 3.125rem;\n}\n#about #about-ctn {\n  display: flex;\n  align-items: center;\n  background: linear-gradient(0.35turn, hsl(189, 80%, 12%), hsl(198, 83%, 18%), hsl(202, 84%, 15%), hsl(211, 85%, 5%));\n  gap: 1.5625rem;\n  height: 90%;\n  margin: 0 auto;\n  width: 60%;\n  border-radius: 1.5625rem 1.5625rem 0 0;\n  padding: 2.5rem 5rem;\n  border: 0.3125rem solid hsl(198, 83%, 18%);\n  border-bottom: 0;\n}\n#about #about-ctn #about-content {\n  display: flex;\n  gap: 1.5625rem;\n  flex-direction: column;\n  width: 70%;\n}\n#about #img-ctn {\n  width: 30%;\n}\n#about #img-ctn img {\n  max-width: 100%;\n  border-radius: 50%;\n  filter: drop-shadow(0.4375rem 0.4375rem 0 hsl(208, 69%, 46%));\n}\n\n@media screen and (max-width: 64rem) {\n  #about #about-ctn {\n    width: 80%;\n  }\n}\n@media screen and (max-width: 48rem) {\n  #about #about-ctn {\n    flex-direction: column-reverse;\n  }\n  #about #about-ctn #about-content {\n    width: 100%;\n    align-items: center;\n  }\n  #about #img-ctn img {\n    filter: drop-shadow(0.3125rem 0.3125rem 0 hsl(208, 69%, 46%));\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #about #about-ctn {\n    padding: 1.25rem;\n    font-size: 1rem;\n  }\n}\n.resume-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: hsl(47, 100%, 50%);\n  color: hsl(0, 0%, 0%);\n  border-radius: 3.125rem;\n  padding: 0.3125rem 1.875rem;\n  font-size: 1rem;\n  max-width: 10.9375rem;\n}\n\n.resume-link:hover {\n  background-color: hsl(47, 100%, 68%);\n  color: hsl(0, 0%, 0%);\n}\n\n#portfolio {\n  background-color: hsl(0, 0%, 20%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2.1875rem;\n}\n#portfolio h2 {\n  color: hsl(47, 100%, 50%);\n}\n\n#portfolio-ctn {\n  padding-top: 2.1875rem;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5625rem;\n}\n#portfolio-ctn .portfolio-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: hsl(0, 0%, 100%);\n}\n#portfolio-ctn .img-ctn {\n  display: flex;\n  height: 70%;\n  overflow: hidden;\n}\n#portfolio-ctn img {\n  object-fit: cover;\n  width: 100%;\n}\n#portfolio-ctn h3 {\n  padding-bottom: 1.25rem;\n  text-align: center;\n}\n#portfolio-ctn .btn-ctn {\n  display: flex;\n  width: 100%;\n}\n#portfolio-ctn a {\n  text-align: center;\n  font-size: 1.125rem;\n  width: 100%;\n  border: none;\n  background-color: hsl(208, 88%, 3%);\n  color: hsl(0, 0%, 100%);\n  padding: 1.25rem;\n}\n#portfolio-ctn .code-btn {\n  background-color: hsl(208, 69%, 46%);\n}\n#portfolio-ctn a:hover {\n  background-color: hsl(47, 100%, 50%);\n  color: hsl(0, 0%, 0%);\n  cursor: pointer;\n}\n\n@media screen and (max-width: 87.5rem) {\n  #portfolio-ctn {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media screen and (max-width: 66.25rem) {\n  #portfolio-ctn {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media screen and (max-width: 43.75rem) {\n  #portfolio-ctn {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #portfolio-ctn a {\n    font-size: 1rem;\n  }\n}\n@media screen and (max-width: 20rem) {\n  #portfolio-ctn a {\n    font-size: 0.875rem;\n  }\n}\n#experience {\n  background-color: hsl(208, 88%, 3%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2.1875rem;\n}\n\n#experience-ctn {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  padding-top: 1.5625rem;\n  gap: 0.9375rem;\n  color: hsl(0, 0%, 100%);\n}\n#experience-ctn #experience-list-ctn {\n  width: 25%;\n  display: flex;\n  flex-direction: column;\n  border-left: 5px solid hsl(47, 100%, 50%);\n}\n#experience-ctn #experience-list-ctn .experience-list {\n  border-bottom: 2px solid hsl(208, 88%, 3%);\n  padding: 0.9375rem;\n}\n#experience-ctn #experience-list-ctn .experience-list h4 {\n  font-size: 1.125rem;\n  font-weight: 700;\n}\n#experience-ctn #experience-list-ctn .experience-list p {\n  font-size: 1rem;\n}\n#experience-ctn #experience-list-ctn .experience-list:hover {\n  cursor: pointer;\n}\n#experience-ctn #experience-list-ctn .active-list {\n  border-bottom: 2px solid hsl(47, 100%, 50%);\n}\n#experience-ctn #experience-list-ctn .active-header {\n  color: hsl(47, 100%, 50%);\n}\n#experience-ctn #experience-details-ctn {\n  width: 50%;\n  padding: 0.9375rem;\n}\n#experience-ctn #experience-details-ctn h3,\n#experience-ctn #experience-details-ctn h4 {\n  display: inline-block;\n}\n#experience-ctn #experience-details-ctn h3 {\n  color: hsl(47, 100%, 50%);\n}\n#experience-ctn #experience-details-ctn h4 {\n  font-weight: 700;\n}\n#experience-ctn #experience-details-ctn h5 {\n  font-size: 1.125rem;\n}\n#experience-ctn #experience-details-ctn ul {\n  padding-left: 1.25rem;\n  padding-top: 0.625rem;\n  font-size: 1rem;\n}\n#experience-ctn #experience-details-ctn li {\n  line-height: 2;\n}\n#experience-ctn #experience-details-ctn li::marker {\n  color: hsl(47, 100%, 50%);\n}\n\n.hidden-details {\n  display: none;\n}\n\n@media screen and (max-width: 62.5rem) {\n  #experience-ctn #experience-list-ctn {\n    width: 35%;\n  }\n  #experience-ctn #experience-details-ctn {\n    width: 65%;\n  }\n}\n@media screen and (max-width: 45.3125rem) {\n  #experience-ctn {\n    padding-top: 2.1875rem;\n  }\n  #experience-ctn #experience-list-ctn {\n    display: none;\n  }\n  #experience-ctn #experience-details-ctn {\n    padding: 0;\n    width: 100%;\n  }\n  #experience-ctn #experience-details-ctn h3 {\n    display: block;\n  }\n  #experience-ctn #experience-details-ctn h4 {\n    display: block;\n  }\n  #experience-ctn .hidden-details {\n    display: block;\n  }\n  #experience-ctn .hidden-details:nth-child(n+1) {\n    padding-top: 1.5625rem;\n  }\n}\n#skills {\n  background-color: hsl(0, 0%, 20%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2.1875rem;\n}\n#skills h2 {\n  color: hsl(47, 100%, 50%);\n}\n\n#skills-ctn {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  width: 100%;\n  gap: 1.5625rem;\n  color: hsl(0, 0%, 0%);\n  padding-top: 2.1875rem;\n}\n#skills-ctn .skill {\n  box-sizing: border-box;\n  background-color: hsl(0, 0%, 100%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  filter: drop-shadow(0 0 0.3125rem hsl(0, 0%, 0%));\n}\n#skills-ctn .skill div {\n  padding-top: 0.9375rem;\n}\n#skills-ctn .skill p {\n  padding: 0.9375rem;\n}\n#skills-ctn .skill img {\n  display: block;\n  object-fit: contain;\n  width: auto;\n  height: auto;\n  max-height: 3.75rem;\n}\n\n@media screen and (max-width: 75rem) {\n  #skills-ctn {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media screen and (max-width: 56.25rem) {\n  #skills-ctn {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media screen and (max-width: 40.625rem) {\n  #skills-ctn {\n    grid-template-columns: repeat(2, 1fr);\n    font-size: 1rem;\n  }\n}\n@media screen and (max-width: 26.5625rem) {\n  #skills-ctn img {\n    max-width: 6.25rem;\n  }\n  #skills-ctn .img-ctn {\n    flex: 1;\n  }\n}\n#mobile-btn {\n  display: none;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2.1875rem;\n}\n#mobile-btn .mobile-lines {\n  height: 0.1875rem;\n  width: 100%;\n  background-color: hsl(0, 0%, 100%);\n}\n\n#mobile-nav {\n  display: none;\n  text-align: right;\n  position: fixed;\n  top: 1.5625rem;\n  right: 1.5625rem;\n  padding: 2.1875rem;\n  font-size: 1.125rem;\n  background-color: hsl(208, 88%, 3%);\n  width: 80%;\n  flex-direction: column;\n  z-index: 4;\n}\n#mobile-nav ul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  padding-top: 1.5625rem;\n}\n#mobile-nav i {\n  font-size: 2.1875rem;\n}\n#mobile-nav .mobile-nav-link {\n  color: hsl(0, 0%, 100%);\n}\n#mobile-nav .resume-link {\n  padding: 0;\n  max-width: none;\n  display: block;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: hsl(47, 100%, 50%);\n  background: none;\n}\n\n#mobile-nav-overlay {\n  display: none;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: hsla(0, 0%, 100%, 0.25);\n  z-index: 3;\n}\n\n@media screen and (max-width: 59.375rem) {\n  #mobile-btn {\n    display: flex;\n  }\n}","$font-primary: \"Inter\", sans-serf;\r\n","// Primary Colors\r\n$clr-primary: hsl(208, 88%, 3%);\r\n$clr-secondary: hsl(47, 100%, 50%);\r\n$clr-secondary-hover: hsl(47, 100%, 68%);\r\n$clr-tertiary: hsl(208, 69%, 46%);\r\n$clr-gradient-one: hsl(189, 80%, 12%);\r\n$clr-gradient-two: hsl(198, 83%, 18%);\r\n$clr-gradient-three: hsl(202, 84%, 15%);\r\n$clr-gradient-four: hsl(211, 85%, 5%);\r\n\r\n// Neutral Colors\r\n$clr-white: hsl(0, 0%, 100%);\r\n$clr-gray-lt: hsl(0, 0%, 85%);\r\n$clr-gray: hsl(0, 0%, 50%);\r\n$clr-gray-dk: hsl(0, 0%, 20%);\r\n$clr-black: hsl(0, 0%, 0%);\r\n","*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont: inherit;\r\n}\r\n\r\nimg,\r\npicture,\r\nsvg {\r\n\tdisplay: block;\r\n}\r\n","@use \"../utilities/\" as *;\r\n@use \"colors\" as *;\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n\tmargin: 0;\r\n\tline-height: 1.1;\r\n}\r\n\r\nh1 {\r\n\tfont-size: rem(32);\r\n\tfont-weight: 700;\r\n}\r\n\r\nh2 {\r\n\tfont-size: rem(26);\r\n\tcolor: $clr-white;\r\n\tfont-weight: 700;\r\n}\r\n\r\nh3 {\r\n\tfont-size: rem(22);\r\n\tfont-weight: 700;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n\ttext-decoration: none;\r\n}\r\n","@use \"../utilities/\" as *;\r\n\r\n.container {\r\n\tmax-width: rem(1590);\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\nheader {\r\n\tbackground-color: $clr-primary;\r\n\tcolor: $clr-white;\r\n\ttop: rem(0);\r\n\tborder-bottom: 1px solid $clr-gray-dk;\r\n\tposition: sticky;\r\n\tz-index: 10;\r\n}\r\n\r\n#header-ctn {\r\n\tmargin: 0 auto;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tpadding: rem(25) 0;\r\n\r\n\t#header-left,\r\n\t#header-right {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\tgap: rem(50);\r\n\t}\r\n\r\n\tnav,\r\n\t#socials {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\tgap: rem(30);\r\n\t\talign-items: center;\r\n\t}\r\n}\r\n\r\n.desktop-link {\r\n\tcolor: $clr-white;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tborder-bottom: 2px solid $clr-primary;\r\n\tfont-size: rem(16);\r\n}\r\n\r\n.desktop-link:hover {\r\n\tborder-bottom: 2px solid $clr-secondary;\r\n}\r\n\r\ni {\r\n\tcolor: $clr-white;\r\n\tfont-size: rem(28);\r\n}\r\n\r\ni:hover {\r\n\tcolor: $clr-secondary;\r\n}\r\n\r\n@media screen and (max-width: rem(1590)) {\r\n\t#header-ctn {\r\n\t\tpadding: rem(25);\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(950)) {\r\n\t#header-ctn {\r\n\t\t#header-left > nav {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n\t\t#header-right {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n#about {\r\n\tbackground-color: $clr-primary;\r\n\tcolor: $clr-white;\r\n\toverflow: hidden;\r\n\tdisplay: flex;\r\n\talign-items: end;\r\n\tpadding-top: rem(50);\r\n\r\n\t#about-ctn {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tbackground: linear-gradient(\r\n\t\t\t0.35turn,\r\n\t\t\t$clr-gradient-one,\r\n\t\t\t$clr-gradient-two,\r\n\t\t\t$clr-gradient-three,\r\n\t\t\t$clr-gradient-four\r\n\t\t);\r\n\t\tgap: rem(25);\r\n\t\theight: 90%;\r\n\t\tmargin: 0 auto;\r\n\t\twidth: 60%;\r\n\t\tborder-radius: rem(25) rem(25) 0 0;\r\n\t\tpadding: rem(40) rem(80);\r\n\t\tborder: rem(5) solid $clr-gradient-two;\r\n\t\tborder-bottom: 0;\r\n\r\n\t\t#about-content {\r\n\t\t\tdisplay: flex;\r\n\t\t\tgap: rem(25);\r\n\t\t\tflex-direction: column;\r\n\t\t\twidth: 70%;\r\n\t\t}\r\n\t}\r\n\r\n\t#img-ctn {\r\n\t\twidth: 30%;\r\n\r\n\t\timg {\r\n\t\t\tmax-width: 100%;\r\n\t\t\tborder-radius: 50%;\r\n\t\t\tfilter: drop-shadow(rem(7) rem(7) 0 $clr-tertiary);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(1024)) {\r\n\t#about #about-ctn {\r\n\t\twidth: 80%;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(768)) {\r\n\t#about {\r\n\t\t#about-ctn {\r\n\t\t\tflex-direction: column-reverse;\r\n\r\n\t\t\t#about-content {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t#img-ctn {\r\n\t\t\timg {\r\n\t\t\t\tfilter: drop-shadow(rem(5) rem(5) 0 $clr-tertiary);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(425)) {\r\n\t#about {\r\n\t\t#about-ctn {\r\n\t\t\tpadding: rem(20);\r\n\t\t\tfont-size: rem(16);\r\n\t\t}\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n.resume-link {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tbackground-color: $clr-secondary;\r\n\tcolor: $clr-black;\r\n\tborder-radius: rem(50);\r\n\tpadding: rem(5) rem(30);\r\n\tfont-size: rem(16);\r\n\tmax-width: rem(175);\r\n}\r\n\r\n.resume-link:hover {\r\n\tbackground-color: $clr-secondary-hover;\r\n\tcolor: $clr-black;\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n#portfolio {\r\n\tbackground-color: $clr-gray-dk;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tpadding: rem(35);\r\n\r\n\th2 {\r\n\t\tcolor: $clr-secondary;\r\n\t}\r\n}\r\n\r\n#portfolio-ctn {\r\n\tpadding-top: rem(35);\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(4, 1fr);\r\n\tgap: rem(25);\r\n\r\n\t.portfolio-card {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tcolor: $clr-white;\r\n\t}\r\n\r\n\t.img-ctn {\r\n\t\tdisplay: flex;\r\n\t\theight: 70%;\r\n\t\toverflow: hidden;\r\n\t}\r\n\r\n\timg {\r\n\t\tobject-fit: cover;\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\th3 {\r\n\t\tpadding-bottom: rem(20);\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t.btn-ctn {\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\ta {\r\n\t\ttext-align: center;\r\n\t\tfont-size: rem(18);\r\n\t\twidth: 100%;\r\n\t\tborder: none;\r\n\t\tbackground-color: $clr-primary;\r\n\t\tcolor: $clr-white;\r\n\t\tpadding: rem(20);\r\n\t}\r\n\r\n\t.code-btn {\r\n\t\tbackground-color: $clr-tertiary;\r\n\t}\r\n\r\n\ta:hover {\r\n\t\tbackground-color: $clr-secondary;\r\n\t\tcolor: $clr-black;\r\n\t\tcursor: pointer;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(1400)) {\r\n\t#portfolio-ctn {\r\n\t\tgrid-template-columns: repeat(3, 1fr);\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(1060)) {\r\n\t#portfolio-ctn {\r\n\t\tgrid-template-columns: repeat(2, 1fr);\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(700)) {\r\n\t#portfolio-ctn {\r\n\t\tgrid-template-columns: repeat(1, 1fr);\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(425)) {\r\n\t#portfolio-ctn {\r\n\t\ta {\r\n\t\t\tfont-size: rem(16);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(320)) {\r\n\t#portfolio-ctn {\r\n\t\ta {\r\n\t\t\tfont-size: rem(14);\r\n\t\t}\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n#experience {\r\n\tbackground-color: $clr-primary;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tpadding: rem(35);\r\n}\r\n\r\n#experience-ctn {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\tjustify-content: center;\r\n\tpadding-top: rem(25);\r\n\tgap: rem(15);\r\n\tcolor: $clr-white;\r\n\r\n\t#experience-list-ctn {\r\n\t\twidth: 25%;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tborder-left: 5px solid $clr-secondary;\r\n\r\n\t\t.experience-list {\r\n\t\t\tborder-bottom: 2px solid $clr-primary;\r\n\t\t\tpadding: rem(15);\r\n\r\n\t\t\th4 {\r\n\t\t\t\tfont-size: rem(18);\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t}\r\n\r\n\t\t\tp {\r\n\t\t\t\tfont-size: rem(16);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.experience-list:hover {\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\r\n\t\t.active-list {\r\n\t\t\tborder-bottom: 2px solid $clr-secondary;\r\n\t\t}\r\n\r\n\t\t.active-header {\r\n\t\t\tcolor: $clr-secondary;\r\n\t\t}\r\n\t}\r\n\r\n\t#experience-details-ctn {\r\n\t\twidth: 50%;\r\n\t\tpadding: rem(15);\r\n\r\n\t\th3,\r\n\t\th4 {\r\n\t\t\tdisplay: inline-block;\r\n\t\t}\r\n\r\n\t\th3 {\r\n\t\t\tcolor: $clr-secondary;\r\n\t\t}\r\n\r\n\t\th4 {\r\n\t\t\tfont-weight: 700;\r\n\t\t}\r\n\r\n\t\th5 {\r\n\t\t\tfont-size: rem(18);\r\n\t\t}\r\n\r\n\t\tul {\r\n\t\t\tpadding-left: rem(20);\r\n\t\t\tpadding-top: rem(10);\r\n\t\t\tfont-size: rem(16);\r\n\t\t}\r\n\r\n\t\tli {\r\n\t\t\tline-height: 2;\r\n\t\t}\r\n\r\n\t\tli::marker {\r\n\t\t\tcolor: $clr-secondary;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.hidden-details {\r\n\tdisplay: none;\r\n}\r\n\r\n@media screen and (max-width: rem(1000)) {\r\n\t#experience-ctn {\r\n\t\t#experience-list-ctn {\r\n\t\t\twidth: 35%;\r\n\t\t}\r\n\r\n\t\t#experience-details-ctn {\r\n\t\t\twidth: 65%;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(725)) {\r\n\t#experience-ctn {\r\n\t\tpadding-top: rem(35);\r\n\r\n\t\t#experience-list-ctn {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n\t\t#experience-details-ctn {\r\n\t\t\tpadding: 0;\r\n\t\t\twidth: 100%;\r\n\r\n\t\t\th3 {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t}\r\n\r\n\t\t\th4 {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.hidden-details {\r\n\t\t\tdisplay: block;\r\n\t\t}\r\n\r\n\t\t.hidden-details:nth-child(n + 1) {\r\n\t\t\tpadding-top: rem(25);\r\n\t\t}\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n#skills {\r\n\tbackground-color: $clr-gray-dk;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tpadding: rem(35);\r\n\r\n\th2 {\r\n\t\tcolor: $clr-secondary;\r\n\t}\r\n}\r\n\r\n#skills-ctn {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(6, 1fr);\r\n\twidth: 100%;\r\n\tgap: rem(25);\r\n\tcolor: $clr-black;\r\n\tpadding-top: rem(35);\r\n\r\n\t.skill {\r\n\t\tbox-sizing: border-box;\r\n\t\tbackground-color: $clr-white;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: center;\r\n\t\tfilter: drop-shadow(0 0 rem(5) $clr-black);\r\n\r\n\t\tdiv {\r\n\t\t\tpadding-top: rem(15);\r\n\t\t}\r\n\r\n\t\tp {\r\n\t\t\tpadding: rem(15);\r\n\t\t}\r\n\r\n\t\timg {\r\n\t\t\tdisplay: block;\r\n\t\t\tobject-fit: contain;\r\n\t\t\twidth: auto;\r\n\t\t\theight: auto;\r\n\t\t\tmax-height: rem(60);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(1200)) {\r\n\t#skills-ctn {\r\n\t\tgrid-template-columns: repeat(4, 1fr);\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(900)) {\r\n\t#skills-ctn {\r\n\t\tgrid-template-columns: repeat(3, 1fr);\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(650)) {\r\n\t#skills-ctn {\r\n\t\tgrid-template-columns: repeat(2, 1fr);\r\n\t\tfont-size: rem(16);\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: rem(425)) {\r\n\t#skills-ctn {\r\n\t\timg {\r\n\t\t\tmax-width: rem(100);\r\n\t\t}\r\n\r\n\t\t.img-ctn {\r\n\t\t\tflex: 1;\r\n\t\t}\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n#mobile-btn {\r\n\tdisplay: none;\r\n\tflex-direction: column;\r\n\tjustify-content: space-around;\r\n\twidth: rem(35);\r\n\r\n\t.mobile-lines {\r\n\t\theight: rem(3);\r\n\t\twidth: 100%;\r\n\t\tbackground-color: $clr-white;\r\n\t}\r\n}\r\n\r\n#mobile-nav {\r\n\tdisplay: none;\r\n\ttext-align: right;\r\n\tposition: fixed;\r\n\ttop: rem(25);\r\n\tright: rem(25);\r\n\tpadding: rem(35);\r\n\tfont-size: rem(18);\r\n\tbackground-color: $clr-primary;\r\n\twidth: 80%;\r\n\tflex-direction: column;\r\n\tz-index: 4;\r\n\r\n\tul {\r\n\t\tlist-style: none;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: rem(20);\r\n\t\tpadding-top: rem(25);\r\n\t}\r\n\r\n\ti {\r\n\t\tfont-size: rem(35);\r\n\t}\r\n\r\n\t.mobile-nav-link {\r\n\t\tcolor: $clr-white;\r\n\t}\r\n\r\n\t.resume-link {\r\n\t\tpadding: 0;\r\n\t\tmax-width: none;\r\n\t\tdisplay: block;\r\n\t\tfont-size: rem(20);\r\n\t\tfont-weight: 700;\r\n\t\tcolor: $clr-secondary;\r\n\t\tbackground: none;\r\n\t}\r\n}\r\n\r\n#mobile-nav-overlay {\r\n\tdisplay: none;\r\n\tposition: fixed;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tbackground-color: hsla(0, 0%, 100%, 0.25);\r\n\tz-index: 3;\r\n}\r\n\r\n@media screen and (max-width: rem(950)) {\r\n\t#mobile-btn {\r\n\t\tdisplay: flex;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8seXJCQUF5ckIsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sVUFBVSxNQUFNLFFBQVEsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxRQUFRLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sT0FBTyxVQUFVLFdBQVcsVUFBVSxNQUFNLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLFlBQVksT0FBTyxNQUFNLFlBQVksUUFBUSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sWUFBWSxZQUFZLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFFBQVEsTUFBTSxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFFBQVEsTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFN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LENBQUMsOERBQVU7QUFDWDs7Ozs7OztVQ1BBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0M7QUFDUjtBQUNhO0FBQ3pDO0FBQ0EsaURBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMERBQU07QUFDckIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9yZXN1bWUucGRmIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzPzMyMWYiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvY29tcG9uZW50cy9leHBlcmllbmNlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9qcy9jb21wb25lbnRzL21vYmlsZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvaW5pdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJmO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBjb2xvcjogaHNsKDAsIDAlLCAyMCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDg1JSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmltZyxcbnBpY3R1cmUsXG5zdmcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDEsXG5oMixcbmgzIHtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuNjI1cmVtO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDEuMzc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5hLFxuYTp2aXNpdGVkLFxuYTphY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDk5LjM3NXJlbTtcbn1cblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOCwgODglLCAzJSk7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICB0b3A6IDByZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMCUsIDIwJSk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4jaGVhZGVyLWN0biB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEuNTYyNXJlbSAwO1xufVxuI2hlYWRlci1jdG4gI2hlYWRlci1sZWZ0LFxuI2hlYWRlci1jdG4gI2hlYWRlci1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAzLjEyNXJlbTtcbn1cbiNoZWFkZXItY3RuIG5hdixcbiNoZWFkZXItY3RuICNzb2NpYWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEuODc1cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGVza3RvcC1saW5rIHtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBoc2woMjA4LCA4OCUsIDMlKTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uZGVza3RvcC1saW5rOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGhzbCg0NywgMTAwJSwgNTAlKTtcbn1cblxuaSB7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICBmb250LXNpemU6IDEuNzVyZW07XG59XG5cbmk6aG92ZXIge1xuICBjb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OS4zNzVyZW0pIHtcbiAgI2hlYWRlci1jdG4ge1xuICAgIHBhZGRpbmc6IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTkuMzc1cmVtKSB7XG4gICNoZWFkZXItY3RuICNoZWFkZXItbGVmdCA+IG5hdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjaGVhZGVyLWN0biAjaGVhZGVyLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4jYWJvdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA4OCUsIDMlKTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG4gIHBhZGRpbmctdG9wOiAzLjEyNXJlbTtcbn1cbiNhYm91dCAjYWJvdXQtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDAuMzV0dXJuLCBoc2woMTg5LCA4MCUsIDEyJSksIGhzbCgxOTgsIDgzJSwgMTglKSwgaHNsKDIwMiwgODQlLCAxNSUpLCBoc2woMjExLCA4NSUsIDUlKSk7XG4gIGdhcDogMS41NjI1cmVtO1xuICBoZWlnaHQ6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA2MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEuNTYyNXJlbSAxLjU2MjVyZW0gMCAwO1xuICBwYWRkaW5nOiAyLjVyZW0gNXJlbTtcbiAgYm9yZGVyOiAwLjMxMjVyZW0gc29saWQgaHNsKDE5OCwgODMlLCAxOCUpO1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuI2Fib3V0ICNhYm91dC1jdG4gI2Fib3V0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuNTYyNXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDcwJTtcbn1cbiNhYm91dCAjaW1nLWN0biB7XG4gIHdpZHRoOiAzMCU7XG59XG4jYWJvdXQgI2ltZy1jdG4gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMC40Mzc1cmVtIDAuNDM3NXJlbSAwIGhzbCgyMDgsIDY5JSwgNDYlKSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XG4gICNhYm91dCAjYWJvdXQtY3RuIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAjYWJvdXQgI2Fib3V0LWN0biB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG4gICNhYm91dCAjYWJvdXQtY3RuICNhYm91dC1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gICNhYm91dCAjaW1nLWN0biBpbWcge1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMC4zMTI1cmVtIDAuMzEyNXJlbSAwIGhzbCgyMDgsIDY5JSwgNDYlKSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgI2Fib3V0ICNhYm91dC1jdG4ge1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG4ucmVzdW1lLWxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDMuMTI1cmVtO1xuICBwYWRkaW5nOiAwLjMxMjVyZW0gMS44NzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWF4LXdpZHRoOiAxMC45Mzc1cmVtO1xufVxuXG4ucmVzdW1lLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDcsIDEwMCUsIDY4JSk7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDAlKTtcbn1cblxuI3BvcnRmb2xpbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMjAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMi4xODc1cmVtO1xufVxuI3BvcnRmb2xpbyBoMiB7XG4gIGNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XG59XG5cbiNwb3J0Zm9saW8tY3RuIHtcbiAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiAxLjU2MjVyZW07XG59XG4jcG9ydGZvbGlvLWN0biAucG9ydGZvbGlvLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG59XG4jcG9ydGZvbGlvLWN0biAuaW1nLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNzAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI3BvcnRmb2xpby1jdG4gaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuI3BvcnRmb2xpby1jdG4gaDMge1xuICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3BvcnRmb2xpby1jdG4gLmJ0bi1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbiNwb3J0Zm9saW8tY3RuIGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDgsIDg4JSwgMyUpO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgcGFkZGluZzogMS4yNXJlbTtcbn1cbiNwb3J0Zm9saW8tY3RuIC5jb2RlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDgsIDY5JSwgNDYlKTtcbn1cbiNwb3J0Zm9saW8tY3RuIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDAlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4Ny41cmVtKSB7XG4gICNwb3J0Zm9saW8tY3RuIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2Ni4yNXJlbSkge1xuICAjcG9ydGZvbGlvLWN0biB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMuNzVyZW0pIHtcbiAgI3BvcnRmb2xpby1jdG4ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcbiAgI3BvcnRmb2xpby1jdG4gYSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMHJlbSkge1xuICAjcG9ydGZvbGlvLWN0biBhIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICB9XG59XG4jZXhwZXJpZW5jZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDgsIDg4JSwgMyUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyLjE4NzVyZW07XG59XG5cbiNleHBlcmllbmNlLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEuNTYyNXJlbTtcbiAgZ2FwOiAwLjkzNzVyZW07XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIHtcbiAgd2lkdGg6IDI1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBoc2woNDcsIDEwMCUsIDUwJSk7XG59XG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4gLmV4cGVyaWVuY2UtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBoc2woMjA4LCA4OCUsIDMlKTtcbiAgcGFkZGluZzogMC45Mzc1cmVtO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5leHBlcmllbmNlLWxpc3QgaDQge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5leHBlcmllbmNlLWxpc3QgcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biAuZXhwZXJpZW5jZS1saXN0OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5hY3RpdmUtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBoc2woNDcsIDEwMCUsIDUwJSk7XG59XG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4gLmFjdGl2ZS1oZWFkZXIge1xuICBjb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIHtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMC45Mzc1cmVtO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGgzLFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGg0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGgzIHtcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBoNCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gaDUge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICBwYWRkaW5nLXRvcDogMC42MjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBsaSB7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGxpOjptYXJrZXIge1xuICBjb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xufVxuXG4uaGlkZGVuLWRldGFpbHMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2Mi41cmVtKSB7XG4gICNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biB7XG4gICAgd2lkdGg6IDM1JTtcbiAgfVxuICAjZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4ge1xuICAgIHdpZHRoOiA2NSU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1LjMxMjVyZW0pIHtcbiAgI2V4cGVyaWVuY2UtY3RuIHtcbiAgICBwYWRkaW5nLXRvcDogMi4xODc1cmVtO1xuICB9XG4gICNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGgzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAjZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gaDQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICNleHBlcmllbmNlLWN0biAuaGlkZGVuLWRldGFpbHMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICNleHBlcmllbmNlLWN0biAuaGlkZGVuLWRldGFpbHM6bnRoLWNoaWxkKG4rMSkge1xuICAgIHBhZGRpbmctdG9wOiAxLjU2MjVyZW07XG4gIH1cbn1cbiNza2lsbHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDIwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIuMTg3NXJlbTtcbn1cbiNza2lsbHMgaDIge1xuICBjb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xufVxuXG4jc2tpbGxzLWN0biB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6IDEuNTYyNXJlbTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xuICBwYWRkaW5nLXRvcDogMi4xODc1cmVtO1xufVxuI3NraWxscy1jdG4gLnNraWxsIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC4zMTI1cmVtIGhzbCgwLCAwJSwgMCUpKTtcbn1cbiNza2lsbHMtY3RuIC5za2lsbCBkaXYge1xuICBwYWRkaW5nLXRvcDogMC45Mzc1cmVtO1xufVxuI3NraWxscy1jdG4gLnNraWxsIHAge1xuICBwYWRkaW5nOiAwLjkzNzVyZW07XG59XG4jc2tpbGxzLWN0biAuc2tpbGwgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDMuNzVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1cmVtKSB7XG4gICNza2lsbHMtY3RuIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNXJlbSkge1xuICAjc2tpbGxzLWN0biB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAuNjI1cmVtKSB7XG4gICNza2lsbHMtY3RuIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xuICAjc2tpbGxzLWN0biBpbWcge1xuICAgIG1heC13aWR0aDogNi4yNXJlbTtcbiAgfVxuICAjc2tpbGxzLWN0biAuaW1nLWN0biB7XG4gICAgZmxleDogMTtcbiAgfVxufVxuI21vYmlsZS1idG4ge1xuICBkaXNwbGF5OiBub25lO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDIuMTg3NXJlbTtcbn1cbiNtb2JpbGUtYnRuIC5tb2JpbGUtbGluZXMge1xuICBoZWlnaHQ6IDAuMTg3NXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG59XG5cbiNtb2JpbGUtbmF2IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxLjU2MjVyZW07XG4gIHJpZ2h0OiAxLjU2MjVyZW07XG4gIHBhZGRpbmc6IDIuMTg3NXJlbTtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOCwgODglLCAzJSk7XG4gIHdpZHRoOiA4MCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHotaW5kZXg6IDQ7XG59XG4jbW9iaWxlLW5hdiB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS4yNXJlbTtcbiAgcGFkZGluZy10b3A6IDEuNTYyNXJlbTtcbn1cbiNtb2JpbGUtbmF2IGkge1xuICBmb250LXNpemU6IDIuMTg3NXJlbTtcbn1cbiNtb2JpbGUtbmF2IC5tb2JpbGUtbmF2LWxpbmsge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbn1cbiNtb2JpbGUtbmF2IC5yZXN1bWUtbGluayB7XG4gIHBhZGRpbmc6IDA7XG4gIG1heC13aWR0aDogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuI21vYmlsZS1uYXYtb3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjI1KTtcbiAgei1pbmRleDogMztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTkuMzc1cmVtKSB7XG4gICNtb2JpbGUtYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19nZW5lcmFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19jb250YWluZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2Fib3V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fcG9ydGZvbGlvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2V4cGVyaWVuY2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fc2tpbGxzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX21vYmlsZS1uYXYuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNDLGVBQUE7QUNIRDs7QURNQTtFQUNDLCtCRVRjO0VGVWQsbUJBQUE7RUFDQSxzQkdHYTtFSEZiLGlD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QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ1Z2QmE7RVV3QmIsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBWnVjRDtBWXJjQztFQUNDLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FadWNGO0FZcGNDO0VBQ0Msb0JBQUE7QVpzY0Y7QVluY0M7RUFDQyx1QlYvQlU7QUZvZVo7QVlsY0M7RUFDQyxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJWakRjO0VVa0RkLGdCQUFBO0Fab2NGOztBWWhjQTtFQUNDLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHlDQUFBO0VBQ0EsVUFBQTtBWm1jRDs7QVloY0E7RUFDQztJQUNDLGFBQUE7RVptY0E7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcImNvbG9yc1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCJmb250c1xcXCIgYXMgKjtcXHJcXG5cXHJcXG5odG1sIHtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcblxcdGZvbnQtc2l6ZTogcmVtKDE4KTtcXHJcXG5cXHRjb2xvcjogJGNsci1ncmF5LWRrO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItZ3JheS1sdDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cIixcImh0bWwge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmY7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMjAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgODUlKTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbmltZyxcXG5waWN0dXJlLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjYyNXJlbTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAxLjM3NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkLFxcbmE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDk5LjM3NXJlbTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDgsIDg4JSwgMyUpO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICB0b3A6IDByZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsKDAsIDAlLCAyMCUpO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4jaGVhZGVyLWN0biB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxLjU2MjVyZW0gMDtcXG59XFxuI2hlYWRlci1jdG4gI2hlYWRlci1sZWZ0LFxcbiNoZWFkZXItY3RuICNoZWFkZXItcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMy4xMjVyZW07XFxufVxcbiNoZWFkZXItY3RuIG5hdixcXG4jaGVhZGVyLWN0biAjc29jaWFscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxLjg3NXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZXNrdG9wLWxpbmsge1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBoc2woMjA4LCA4OCUsIDMlKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmRlc2t0b3AtbGluazpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgaHNsKDQ3LCAxMDAlLCA1MCUpO1xcbn1cXG5cXG5pIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cXG5pOmhvdmVyIHtcXG4gIGNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5LjM3NXJlbSkge1xcbiAgI2hlYWRlci1jdG4ge1xcbiAgICBwYWRkaW5nOiAxLjU2MjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5LjM3NXJlbSkge1xcbiAgI2hlYWRlci1jdG4gI2hlYWRlci1sZWZ0ID4gbmF2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gICNoZWFkZXItY3RuICNoZWFkZXItcmlnaHQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4jYWJvdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOCwgODglLCAzJSk7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG4gIHBhZGRpbmctdG9wOiAzLjEyNXJlbTtcXG59XFxuI2Fib3V0ICNhYm91dC1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMC4zNXR1cm4sIGhzbCgxODksIDgwJSwgMTIlKSwgaHNsKDE5OCwgODMlLCAxOCUpLCBoc2woMjAyLCA4NCUsIDE1JSksIGhzbCgyMTEsIDg1JSwgNSUpKTtcXG4gIGdhcDogMS41NjI1cmVtO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA2MCU7XFxuICBib3JkZXItcmFkaXVzOiAxLjU2MjVyZW0gMS41NjI1cmVtIDAgMDtcXG4gIHBhZGRpbmc6IDIuNXJlbSA1cmVtO1xcbiAgYm9yZGVyOiAwLjMxMjVyZW0gc29saWQgaHNsKDE5OCwgODMlLCAxOCUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuI2Fib3V0ICNhYm91dC1jdG4gI2Fib3V0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS41NjI1cmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA3MCU7XFxufVxcbiNhYm91dCAjaW1nLWN0biB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG4jYWJvdXQgI2ltZy1jdG4gaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMC40Mzc1cmVtIDAuNDM3NXJlbSAwIGhzbCgyMDgsIDY5JSwgNDYlKSk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XFxuICAjYWJvdXQgI2Fib3V0LWN0biB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XFxuICAjYWJvdXQgI2Fib3V0LWN0biB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG4gICNhYm91dCAjYWJvdXQtY3RuICNhYm91dC1jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAjYWJvdXQgI2ltZy1jdG4gaW1nIHtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjMxMjVyZW0gMC4zMTI1cmVtIDAgaHNsKDIwOCwgNjklLCA0NiUpKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgI2Fib3V0ICNhYm91dC1jdG4ge1xcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcbi5yZXN1bWUtbGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xcbiAgYm9yZGVyLXJhZGl1czogMy4xMjVyZW07XFxuICBwYWRkaW5nOiAwLjMxMjVyZW0gMS44NzVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXgtd2lkdGg6IDEwLjkzNzVyZW07XFxufVxcblxcbi5yZXN1bWUtbGluazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDcsIDEwMCUsIDY4JSk7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxufVxcblxcbiNwb3J0Zm9saW8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAyMCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMi4xODc1cmVtO1xcbn1cXG4jcG9ydGZvbGlvIGgyIHtcXG4gIGNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XFxufVxcblxcbiNwb3J0Zm9saW8tY3RuIHtcXG4gIHBhZGRpbmctdG9wOiAyLjE4NzVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdhcDogMS41NjI1cmVtO1xcbn1cXG4jcG9ydGZvbGlvLWN0biAucG9ydGZvbGlvLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG59XFxuI3BvcnRmb2xpby1jdG4gLmltZy1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNzAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuI3BvcnRmb2xpby1jdG4gaW1nIHtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNwb3J0Zm9saW8tY3RuIGgzIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jcG9ydGZvbGlvLWN0biAuYnRuLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNwb3J0Zm9saW8tY3RuIGEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOCwgODglLCAzJSk7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIHBhZGRpbmc6IDEuMjVyZW07XFxufVxcbiNwb3J0Zm9saW8tY3RuIC5jb2RlLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA2OSUsIDQ2JSk7XFxufVxcbiNwb3J0Zm9saW8tY3RuIGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4Ny41cmVtKSB7XFxuICAjcG9ydGZvbGlvLWN0biB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2LjI1cmVtKSB7XFxuICAjcG9ydGZvbGlvLWN0biB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzLjc1cmVtKSB7XFxuICAjcG9ydGZvbGlvLWN0biB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVyZW0pIHtcXG4gICNwb3J0Zm9saW8tY3RuIGEge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIwcmVtKSB7XFxuICAjcG9ydGZvbGlvLWN0biBhIHtcXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIH1cXG59XFxuI2V4cGVyaWVuY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOCwgODglLCAzJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyLjE4NzVyZW07XFxufVxcblxcbiNleHBlcmllbmNlLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxLjU2MjVyZW07XFxuICBnYXA6IDAuOTM3NXJlbTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4ge1xcbiAgd2lkdGg6IDI1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBoc2woNDcsIDEwMCUsIDUwJSk7XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biAuZXhwZXJpZW5jZS1saXN0IHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBoc2woMjA4LCA4OCUsIDMlKTtcXG4gIHBhZGRpbmc6IDAuOTM3NXJlbTtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5leHBlcmllbmNlLWxpc3QgaDQge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biAuZXhwZXJpZW5jZS1saXN0IHAge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4gLmV4cGVyaWVuY2UtbGlzdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1saXN0LWN0biAuYWN0aXZlLWxpc3Qge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGhzbCg0NywgMTAwJSwgNTAlKTtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIC5hY3RpdmUtaGVhZGVyIHtcXG4gIGNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biB7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMC45Mzc1cmVtO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gaDMsXFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGg0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGgzIHtcXG4gIGNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XFxufVxcbiNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBoNCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gaDUge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIHVsIHtcXG4gIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjYyNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIGxpIHtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbn1cXG4jZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gbGk6Om1hcmtlciB7XFxuICBjb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xcbn1cXG5cXG4uaGlkZGVuLWRldGFpbHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIuNXJlbSkge1xcbiAgI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWxpc3QtY3RuIHtcXG4gICAgd2lkdGg6IDM1JTtcXG4gIH1cXG4gICNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biB7XFxuICAgIHdpZHRoOiA2NSU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1LjMxMjVyZW0pIHtcXG4gICNleHBlcmllbmNlLWN0biB7XFxuICAgIHBhZGRpbmctdG9wOiAyLjE4NzVyZW07XFxuICB9XFxuICAjZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtbGlzdC1jdG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgI2V4cGVyaWVuY2UtY3RuICNleHBlcmllbmNlLWRldGFpbHMtY3RuIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAjZXhwZXJpZW5jZS1jdG4gI2V4cGVyaWVuY2UtZGV0YWlscy1jdG4gaDMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gICNleHBlcmllbmNlLWN0biAjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biBoNCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgI2V4cGVyaWVuY2UtY3RuIC5oaWRkZW4tZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgI2V4cGVyaWVuY2UtY3RuIC5oaWRkZW4tZGV0YWlsczpudGgtY2hpbGQobisxKSB7XFxuICAgIHBhZGRpbmctdG9wOiAxLjU2MjVyZW07XFxuICB9XFxufVxcbiNza2lsbHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAyMCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMi4xODc1cmVtO1xcbn1cXG4jc2tpbGxzIGgyIHtcXG4gIGNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XFxufVxcblxcbiNza2lsbHMtY3RuIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDEuNTYyNXJlbTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDAlKTtcXG4gIHBhZGRpbmctdG9wOiAyLjE4NzVyZW07XFxufVxcbiNza2lsbHMtY3RuIC5za2lsbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuMzEyNXJlbSBoc2woMCwgMCUsIDAlKSk7XFxufVxcbiNza2lsbHMtY3RuIC5za2lsbCBkaXYge1xcbiAgcGFkZGluZy10b3A6IDAuOTM3NXJlbTtcXG59XFxuI3NraWxscy1jdG4gLnNraWxsIHAge1xcbiAgcGFkZGluZzogMC45Mzc1cmVtO1xcbn1cXG4jc2tpbGxzLWN0biAuc2tpbGwgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogMy43NXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzVyZW0pIHtcXG4gICNza2lsbHMtY3RuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVyZW0pIHtcXG4gICNza2lsbHMtY3RuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAuNjI1cmVtKSB7XFxuICAjc2tpbGxzLWN0biB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYuNTYyNXJlbSkge1xcbiAgI3NraWxscy1jdG4gaW1nIHtcXG4gICAgbWF4LXdpZHRoOiA2LjI1cmVtO1xcbiAgfVxcbiAgI3NraWxscy1jdG4gLmltZy1jdG4ge1xcbiAgICBmbGV4OiAxO1xcbiAgfVxcbn1cXG4jbW9iaWxlLWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDIuMTg3NXJlbTtcXG59XFxuI21vYmlsZS1idG4gLm1vYmlsZS1saW5lcyB7XFxuICBoZWlnaHQ6IDAuMTg3NXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG59XFxuXFxuI21vYmlsZS1uYXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAxLjU2MjVyZW07XFxuICByaWdodDogMS41NjI1cmVtO1xcbiAgcGFkZGluZzogMi4xODc1cmVtO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDgsIDg4JSwgMyUpO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB6LWluZGV4OiA0O1xcbn1cXG4jbW9iaWxlLW5hdiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuMjVyZW07XFxuICBwYWRkaW5nLXRvcDogMS41NjI1cmVtO1xcbn1cXG4jbW9iaWxlLW5hdiBpIHtcXG4gIGZvbnQtc2l6ZTogMi4xODc1cmVtO1xcbn1cXG4jbW9iaWxlLW5hdiAubW9iaWxlLW5hdi1saW5rIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbn1cXG4jbW9iaWxlLW5hdiAucmVzdW1lLWxpbmsge1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4jbW9iaWxlLW5hdi1vdmVybGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjI1KTtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5LjM3NXJlbSkge1xcbiAgI21vYmlsZS1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbn1cIixcIiRmb250LXByaW1hcnk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyZjtcXHJcXG5cIixcIi8vIFByaW1hcnkgQ29sb3JzXFxyXFxuJGNsci1wcmltYXJ5OiBoc2woMjA4LCA4OCUsIDMlKTtcXHJcXG4kY2xyLXNlY29uZGFyeTogaHNsKDQ3LCAxMDAlLCA1MCUpO1xcclxcbiRjbHItc2Vjb25kYXJ5LWhvdmVyOiBoc2woNDcsIDEwMCUsIDY4JSk7XFxyXFxuJGNsci10ZXJ0aWFyeTogaHNsKDIwOCwgNjklLCA0NiUpO1xcclxcbiRjbHItZ3JhZGllbnQtb25lOiBoc2woMTg5LCA4MCUsIDEyJSk7XFxyXFxuJGNsci1ncmFkaWVudC10d286IGhzbCgxOTgsIDgzJSwgMTglKTtcXHJcXG4kY2xyLWdyYWRpZW50LXRocmVlOiBoc2woMjAyLCA4NCUsIDE1JSk7XFxyXFxuJGNsci1ncmFkaWVudC1mb3VyOiBoc2woMjExLCA4NSUsIDUlKTtcXHJcXG5cXHJcXG4vLyBOZXV0cmFsIENvbG9yc1xcclxcbiRjbHItd2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XFxyXFxuJGNsci1ncmF5LWx0OiBoc2woMCwgMCUsIDg1JSk7XFxyXFxuJGNsci1ncmF5OiBoc2woMCwgMCUsIDUwJSk7XFxyXFxuJGNsci1ncmF5LWRrOiBoc2woMCwgMCUsIDIwJSk7XFxyXFxuJGNsci1ibGFjazogaHNsKDAsIDAlLCAwJSk7XFxyXFxuXCIsXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuaW1nLFxcclxcbnBpY3R1cmUsXFxyXFxuc3ZnIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcImNvbG9yc1xcXCIgYXMgKjtcXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjE7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG5cXHRmb250LXNpemU6IHJlbSgzMik7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcblxcdGZvbnQtc2l6ZTogcmVtKDI2KTtcXHJcXG5cXHRjb2xvcjogJGNsci13aGl0ZTtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuXFx0Zm9udC1zaXplOiByZW0oMjIpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbmEsXFxyXFxuYTp2aXNpdGVkLFxcclxcbmE6YWN0aXZlIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG5cXHRtYXgtd2lkdGg6IHJlbSgxNTkwKTtcXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1wcmltYXJ5O1xcclxcblxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcclxcblxcdHRvcDogcmVtKDApO1xcclxcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY2xyLWdyYXktZGs7XFxyXFxuXFx0cG9zaXRpb246IHN0aWNreTtcXHJcXG5cXHR6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlci1jdG4ge1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdHBhZGRpbmc6IHJlbSgyNSkgMDtcXHJcXG5cXHJcXG5cXHQjaGVhZGVyLWxlZnQsXFxyXFxuXFx0I2hlYWRlci1yaWdodCB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0Z2FwOiByZW0oNTApO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRuYXYsXFxyXFxuXFx0I3NvY2lhbHMge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdGdhcDogcmVtKDMwKTtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmRlc2t0b3AtbGluayB7XFxyXFxuXFx0Y29sb3I6ICRjbHItd2hpdGU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkY2xyLXByaW1hcnk7XFxyXFxuXFx0Zm9udC1zaXplOiByZW0oMTYpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVza3RvcC1saW5rOmhvdmVyIHtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgJGNsci1zZWNvbmRhcnk7XFxyXFxufVxcclxcblxcclxcbmkge1xcclxcblxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcclxcblxcdGZvbnQtc2l6ZTogcmVtKDI4KTtcXHJcXG59XFxyXFxuXFxyXFxuaTpob3ZlciB7XFxyXFxuXFx0Y29sb3I6ICRjbHItc2Vjb25kYXJ5O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTU5MCkpIHtcXHJcXG5cXHQjaGVhZGVyLWN0biB7XFxyXFxuXFx0XFx0cGFkZGluZzogcmVtKDI1KTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg5NTApKSB7XFxyXFxuXFx0I2hlYWRlci1jdG4ge1xcclxcblxcdFxcdCNoZWFkZXItbGVmdCA+IG5hdiB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0I2hlYWRlci1yaWdodCB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuXFxyXFxuI2Fib3V0IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLXByaW1hcnk7XFxyXFxuXFx0Y29sb3I6ICRjbHItd2hpdGU7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBlbmQ7XFxyXFxuXFx0cGFkZGluZy10b3A6IHJlbSg1MCk7XFxyXFxuXFxyXFxuXFx0I2Fib3V0LWN0biB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG5cXHRcXHRcXHQwLjM1dHVybixcXHJcXG5cXHRcXHRcXHQkY2xyLWdyYWRpZW50LW9uZSxcXHJcXG5cXHRcXHRcXHQkY2xyLWdyYWRpZW50LXR3byxcXHJcXG5cXHRcXHRcXHQkY2xyLWdyYWRpZW50LXRocmVlLFxcclxcblxcdFxcdFxcdCRjbHItZ3JhZGllbnQtZm91clxcclxcblxcdFxcdCk7XFxyXFxuXFx0XFx0Z2FwOiByZW0oMjUpO1xcclxcblxcdFxcdGhlaWdodDogOTAlO1xcclxcblxcdFxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdFxcdHdpZHRoOiA2MCU7XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogcmVtKDI1KSByZW0oMjUpIDAgMDtcXHJcXG5cXHRcXHRwYWRkaW5nOiByZW0oNDApIHJlbSg4MCk7XFxyXFxuXFx0XFx0Ym9yZGVyOiByZW0oNSkgc29saWQgJGNsci1ncmFkaWVudC10d287XFxyXFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogMDtcXHJcXG5cXHJcXG5cXHRcXHQjYWJvdXQtY29udGVudCB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRnYXA6IHJlbSgyNSk7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHR3aWR0aDogNzAlO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0I2ltZy1jdG4ge1xcclxcblxcdFxcdHdpZHRoOiAzMCU7XFxyXFxuXFxyXFxuXFx0XFx0aW1nIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdFxcdFxcdGZpbHRlcjogZHJvcC1zaGFkb3cocmVtKDcpIHJlbSg3KSAwICRjbHItdGVydGlhcnkpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxMDI0KSkge1xcclxcblxcdCNhYm91dCAjYWJvdXQtY3RuIHtcXHJcXG5cXHRcXHR3aWR0aDogODAlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDc2OCkpIHtcXHJcXG5cXHQjYWJvdXQge1xcclxcblxcdFxcdCNhYm91dC1jdG4ge1xcclxcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG5cXHJcXG5cXHRcXHRcXHQjYWJvdXQtY29udGVudCB7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCNpbWctY3RuIHtcXHJcXG5cXHRcXHRcXHRpbWcge1xcclxcblxcdFxcdFxcdFxcdGZpbHRlcjogZHJvcC1zaGFkb3cocmVtKDUpIHJlbSg1KSAwICRjbHItdGVydGlhcnkpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNDI1KSkge1xcclxcblxcdCNhYm91dCB7XFxyXFxuXFx0XFx0I2Fib3V0LWN0biB7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogcmVtKDIwKTtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgxNik7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcblxcclxcbi5yZXN1bWUtbGluayB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItc2Vjb25kYXJ5O1xcclxcblxcdGNvbG9yOiAkY2xyLWJsYWNrO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IHJlbSg1MCk7XFxyXFxuXFx0cGFkZGluZzogcmVtKDUpIHJlbSgzMCk7XFxyXFxuXFx0Zm9udC1zaXplOiByZW0oMTYpO1xcclxcblxcdG1heC13aWR0aDogcmVtKDE3NSk7XFxyXFxufVxcclxcblxcclxcbi5yZXN1bWUtbGluazpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1zZWNvbmRhcnktaG92ZXI7XFxyXFxuXFx0Y29sb3I6ICRjbHItYmxhY2s7XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5cXHJcXG4jcG9ydGZvbGlvIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWdyYXktZGs7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogcmVtKDM1KTtcXHJcXG5cXHJcXG5cXHRoMiB7XFxyXFxuXFx0XFx0Y29sb3I6ICRjbHItc2Vjb25kYXJ5O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuI3BvcnRmb2xpby1jdG4ge1xcclxcblxcdHBhZGRpbmctdG9wOiByZW0oMzUpO1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXHJcXG5cXHRnYXA6IHJlbSgyNSk7XFxyXFxuXFxyXFxuXFx0LnBvcnRmb2xpby1jYXJkIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRjb2xvcjogJGNsci13aGl0ZTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmltZy1jdG4ge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0aGVpZ2h0OiA3MCU7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0aW1nIHtcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0aDMge1xcclxcblxcdFxcdHBhZGRpbmctYm90dG9tOiByZW0oMjApO1xcclxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmJ0bi1jdG4ge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGEge1xcclxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHRmb250LXNpemU6IHJlbSgxOCk7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0Ym9yZGVyOiBub25lO1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItcHJpbWFyeTtcXHJcXG5cXHRcXHRjb2xvcjogJGNsci13aGl0ZTtcXHJcXG5cXHRcXHRwYWRkaW5nOiByZW0oMjApO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuY29kZS1idG4ge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItdGVydGlhcnk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGE6aG92ZXIge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItc2Vjb25kYXJ5O1xcclxcblxcdFxcdGNvbG9yOiAkY2xyLWJsYWNrO1xcclxcblxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxNDAwKSkge1xcclxcblxcdCNwb3J0Zm9saW8tY3RuIHtcXHJcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDEwNjApKSB7XFxyXFxuXFx0I3BvcnRmb2xpby1jdG4ge1xcclxcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzAwKSkge1xcclxcblxcdCNwb3J0Zm9saW8tY3RuIHtcXHJcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDQyNSkpIHtcXHJcXG5cXHQjcG9ydGZvbGlvLWN0biB7XFxyXFxuXFx0XFx0YSB7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTYpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgzMjApKSB7XFxyXFxuXFx0I3BvcnRmb2xpby1jdG4ge1xcclxcblxcdFxcdGEge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDE0KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuXFxyXFxuI2V4cGVyaWVuY2Uge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItcHJpbWFyeTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiByZW0oMzUpO1xcclxcbn1cXHJcXG5cXHJcXG4jZXhwZXJpZW5jZS1jdG4ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZy10b3A6IHJlbSgyNSk7XFxyXFxuXFx0Z2FwOiByZW0oMTUpO1xcclxcblxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcclxcblxcclxcblxcdCNleHBlcmllbmNlLWxpc3QtY3RuIHtcXHJcXG5cXHRcXHR3aWR0aDogMjUlO1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRib3JkZXItbGVmdDogNXB4IHNvbGlkICRjbHItc2Vjb25kYXJ5O1xcclxcblxcclxcblxcdFxcdC5leHBlcmllbmNlLWxpc3Qge1xcclxcblxcdFxcdFxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkY2xyLXByaW1hcnk7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogcmVtKDE1KTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRoNCB7XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTgpO1xcclxcblxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdHAge1xcclxcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5leHBlcmllbmNlLWxpc3Q6aG92ZXIge1xcclxcblxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmFjdGl2ZS1saXN0IHtcXHJcXG5cXHRcXHRcXHRib3JkZXItYm90dG9tOiAycHggc29saWQgJGNsci1zZWNvbmRhcnk7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5hY3RpdmUtaGVhZGVyIHtcXHJcXG5cXHRcXHRcXHRjb2xvcjogJGNsci1zZWNvbmRhcnk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biB7XFxyXFxuXFx0XFx0d2lkdGg6IDUwJTtcXHJcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTUpO1xcclxcblxcclxcblxcdFxcdGgzLFxcclxcblxcdFxcdGg0IHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdGgzIHtcXHJcXG5cXHRcXHRcXHRjb2xvcjogJGNsci1zZWNvbmRhcnk7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdGg0IHtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRoNSB7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTgpO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHR1bCB7XFxyXFxuXFx0XFx0XFx0cGFkZGluZy1sZWZ0OiByZW0oMjApO1xcclxcblxcdFxcdFxcdHBhZGRpbmctdG9wOiByZW0oMTApO1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0bGkge1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAyO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRsaTo6bWFya2VyIHtcXHJcXG5cXHRcXHRcXHRjb2xvcjogJGNsci1zZWNvbmRhcnk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbi1kZXRhaWxzIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTAwMCkpIHtcXHJcXG5cXHQjZXhwZXJpZW5jZS1jdG4ge1xcclxcblxcdFxcdCNleHBlcmllbmNlLWxpc3QtY3RuIHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMzUlO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQjZXhwZXJpZW5jZS1kZXRhaWxzLWN0biB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDY1JTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNzI1KSkge1xcclxcblxcdCNleHBlcmllbmNlLWN0biB7XFxyXFxuXFx0XFx0cGFkZGluZy10b3A6IHJlbSgzNSk7XFxyXFxuXFxyXFxuXFx0XFx0I2V4cGVyaWVuY2UtbGlzdC1jdG4ge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCNleHBlcmllbmNlLWRldGFpbHMtY3RuIHtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAwO1xcclxcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcclxcblxcdFxcdFxcdGgzIHtcXHJcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0aDQge1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmhpZGRlbi1kZXRhaWxzIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmhpZGRlbi1kZXRhaWxzOm50aC1jaGlsZChuICsgMSkge1xcclxcblxcdFxcdFxcdHBhZGRpbmctdG9wOiByZW0oMjUpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5cXHJcXG4jc2tpbGxzIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWdyYXktZGs7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogcmVtKDM1KTtcXHJcXG5cXHJcXG5cXHRoMiB7XFxyXFxuXFx0XFx0Y29sb3I6ICRjbHItc2Vjb25kYXJ5O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuI3NraWxscy1jdG4ge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRnYXA6IHJlbSgyNSk7XFxyXFxuXFx0Y29sb3I6ICRjbHItYmxhY2s7XFxyXFxuXFx0cGFkZGluZy10b3A6IHJlbSgzNSk7XFxyXFxuXFxyXFxuXFx0LnNraWxsIHtcXHJcXG5cXHRcXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItd2hpdGU7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgcmVtKDUpICRjbHItYmxhY2spO1xcclxcblxcclxcblxcdFxcdGRpdiB7XFxyXFxuXFx0XFx0XFx0cGFkZGluZy10b3A6IHJlbSgxNSk7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdHAge1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IHJlbSgxNSk7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdGltZyB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0XFx0b2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG5cXHRcXHRcXHR3aWR0aDogYXV0bztcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0XFx0XFx0bWF4LWhlaWdodDogcmVtKDYwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTIwMCkpIHtcXHJcXG5cXHQjc2tpbGxzLWN0biB7XFxyXFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg5MDApKSB7XFxyXFxuXFx0I3NraWxscy1jdG4ge1xcclxcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oNjUwKSkge1xcclxcblxcdCNza2lsbHMtY3RuIHtcXHJcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSg0MjUpKSB7XFxyXFxuXFx0I3NraWxscy1jdG4ge1xcclxcblxcdFxcdGltZyB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiByZW0oMTAwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmltZy1jdG4ge1xcclxcblxcdFxcdFxcdGZsZXg6IDE7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcblxcclxcbiNtb2JpbGUtYnRuIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuXFx0d2lkdGg6IHJlbSgzNSk7XFxyXFxuXFxyXFxuXFx0Lm1vYmlsZS1saW5lcyB7XFxyXFxuXFx0XFx0aGVpZ2h0OiByZW0oMyk7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci13aGl0ZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbiNtb2JpbGUtbmF2IHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHR0b3A6IHJlbSgyNSk7XFxyXFxuXFx0cmlnaHQ6IHJlbSgyNSk7XFxyXFxuXFx0cGFkZGluZzogcmVtKDM1KTtcXHJcXG5cXHRmb250LXNpemU6IHJlbSgxOCk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1wcmltYXJ5O1xcclxcblxcdHdpZHRoOiA4MCU7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHR6LWluZGV4OiA0O1xcclxcblxcclxcblxcdHVsIHtcXHJcXG5cXHRcXHRsaXN0LXN0eWxlOiBub25lO1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRnYXA6IHJlbSgyMCk7XFxyXFxuXFx0XFx0cGFkZGluZy10b3A6IHJlbSgyNSk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdGkge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDM1KTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm1vYmlsZS1uYXYtbGluayB7XFxyXFxuXFx0XFx0Y29sb3I6ICRjbHItd2hpdGU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5yZXN1bWUtbGluayB7XFxyXFxuXFx0XFx0cGFkZGluZzogMDtcXHJcXG5cXHRcXHRtYXgtd2lkdGg6IG5vbmU7XFxyXFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMjApO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0Y29sb3I6ICRjbHItc2Vjb25kYXJ5O1xcclxcblxcdFxcdGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4jbW9iaWxlLW5hdi1vdmVybGF5IHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC4yNSk7XFxyXFxuXFx0ei1pbmRleDogMztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogcmVtKDk1MCkpIHtcXHJcXG5cXHQjbW9iaWxlLWJ0biB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9wZGYvcmVzdW1lLnBkZlwiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHsgbG9hZEV4cGVyaWVuY2UgfTtcclxuXHJcbmNvbnN0IGV4cExpc3QgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhwZXJpZW5jZS1saXN0XCIpKTtcclxuY29uc3QgZXhwRGV0YWlscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leHBlcmllbmNlLWRldGFpbHNcIikpO1xyXG5cclxuZnVuY3Rpb24gbG9hZEV4cGVyaWVuY2UoKSB7XHJcblx0bG9hZEV4cGVyaWVuY2VFdmVudExpc3RlbmVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRFeHBlcmllbmNlRXZlbnRMaXN0ZW5lcigpIHtcclxuXHRleHBMaXN0Lm1hcCgoZXhwKSA9PiB7XHJcblx0XHRleHAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwZGF0ZUV4cGVyaWVuY2VMaXN0KTtcclxuXHRcdGV4cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXBkYXRlRXhwZXJpZW5jZURldGFpbHMpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVFeHBlcmllbmNlTGlzdCgpIHtcclxuXHQvLyBjaGVjayBjbGFzcyBsaXN0IGZvciBhY3RpdmUsIHRoZW4gdXBkYXRlIHN0eWxpbmdcclxuXHRjb25zdCBuZXdIZWFkZXIgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCJoNFwiKTtcclxuXHJcblx0aWYgKCF0aGlzLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1saXN0XCIpKSB7XHJcblx0XHQvLyByZW1vdmUgcHJldmlvdXMgZXhwZXJpZW5jZSBzdHlsaW5nXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGV4cExpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKGV4cExpc3RbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLWxpc3RcIikpIHtcclxuXHRcdFx0XHRjb25zdCBvbGRIZWFkZXIgPSBleHBMaXN0W2ldLnF1ZXJ5U2VsZWN0b3IoXCJoNFwiKTtcclxuXHRcdFx0XHRleHBMaXN0W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtbGlzdFwiKTtcclxuXHRcdFx0XHRvbGRIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1oZWFkZXJcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyB1cGRhdGUgY2xpY2tlZCBoZWFkZXIgc3R5bGluZ1xyXG5cdFx0dGhpcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWxpc3RcIik7XHJcblx0XHRuZXdIZWFkZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1oZWFkZXJcIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVFeHBlcmllbmNlRGV0YWlscygpIHtcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGV4cExpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChleHBMaXN0W2ldLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1saXN0XCIpKSB7XHJcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgZXhwRGV0YWlscy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGV4cERldGFpbHNbal0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1kZXRhaWxzXCIpO1xyXG5cdFx0XHRcdGV4cERldGFpbHNbal0uY2xhc3NMaXN0LmFkZChcImhpZGRlbi1kZXRhaWxzXCIpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRleHBEZXRhaWxzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW4tZGV0YWlsc1wiKTtcclxuXHRcdFx0ZXhwRGV0YWlsc1tpXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWRldGFpbHNcIik7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImV4cG9ydCB7IGxvYWRNb2JpbGUgfTtcclxuXHJcbmNvbnN0IG1vYmlsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWJ0blwiKTtcclxuY29uc3QgbW9iaWxlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbmF2XCIpO1xyXG5jb25zdCBtb2JpbGVOYXZPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGUtbmF2LW92ZXJsYXlcIik7XHJcbmNvbnN0IG1vYmlsZU5hdkV4aXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1uYXYtZXhpdFwiKTtcclxuY29uc3QgbW9iaWxlTmF2TGluayA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2JpbGUtbmF2LWxpbmtcIikpO1xyXG5cclxuZnVuY3Rpb24gbG9hZE1vYmlsZSgpIHtcclxuXHRsb2FkTW9iaWxlRXZlbnRMaXN0ZW5lcnMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE1vYmlsZUV2ZW50TGlzdGVuZXJzKCkge1xyXG5cdG1vYmlsZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheU1vYmlsZU5hdik7XHJcblx0bW9iaWxlTmF2RXhpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZU1vYmlsZU5hdik7XHJcblx0bW9iaWxlTmF2TGluay5tYXAoKGxpbmspID0+IHtcclxuXHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVNb2JpbGVOYXYpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5TW9iaWxlTmF2KCkge1xyXG5cdG1vYmlsZU5hdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcblx0bW9iaWxlTmF2T3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlTW9iaWxlTmF2KCkge1xyXG5cdG1vYmlsZU5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0bW9iaWxlTmF2T3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn1cclxuIiwiaW1wb3J0IHsgbG9hZEV4cGVyaWVuY2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL2V4cGVyaWVuY2VcIjtcclxuaW1wb3J0IHsgbG9hZE1vYmlsZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvbW9iaWxlXCI7XHJcbmV4cG9ydCB7IGluaXQgfTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcblx0bG9hZEV4cGVyaWVuY2UoKTtcclxuXHRsb2FkTW9iaWxlKCk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBpbml0IH0gZnJvbSBcIi4vanMvaW5pdC5qc1wiO1xyXG5pbXBvcnQgXCIuL3Njc3Mvc3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IHJlc3VtZSBmcm9tIFwiLi9hc3NldHMvcmVzdW1lLnBkZlwiO1xyXG5cclxuaW5pdCgpO1xyXG5cclxuY29uc3QgcmVzdW1lTGluayA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXN1bWUtbGlua1wiKSk7XHJcblxyXG5yZXN1bWVMaW5rLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG5cdGJ1dHRvbi5ocmVmID0gcmVzdW1lO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9