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
}

#header-ctn {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1.5625rem;
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
  display: flex;
  align-items: center;
}

i {
  color: hsl(0, 0%, 100%);
  font-size: 1.75rem;
}

i:hover {
  color: hsl(47, 100%, 50%);
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
  text-align: center;
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
}`, "",{"version":3,"sources":["webpack://./src/scss/globals/_general.scss","webpack://./src/scss/styles.scss","webpack://./src/scss/globals/_fonts.scss","webpack://./src/scss/globals/_colors.scss","webpack://./src/scss/globals/_reset.scss","webpack://./src/scss/globals/_typography.scss","webpack://./src/scss/globals/_container.scss","webpack://./src/scss/components/_header.scss","webpack://./src/scss/components/_about.scss","webpack://./src/scss/components/_buttons.scss","webpack://./src/scss/components/_portfolio.scss"],"names":[],"mappings":"AAIA;EACC,eAAA;ACHD;;ADMA;EACC,+BETc;EFUd,mBAAA;EACA,sBGGa;EHFb,iCAAA;EACA,gBAAA;ACHD;;AGVA;;;EAGC,sBAAA;AHaD;;AGVA;EACC,SAAA;EACA,UAAA;EACA,aAAA;AHaD;;AGVA;;;EAGC,cAAA;AHaD;;AIzBA;;;EAGC,SAAA;EACA,gBAAA;AJ4BD;;AIzBA;EACC,eAAA;EACA,gBAAA;AJ4BD;;AIzBA;EACC,mBAAA;EACA,uBFNW;EEOX,gBAAA;AJ4BD;;AIzBA;EACC,mBAAA;EACA,gBAAA;AJ4BD;;AIzBA;;;EAGC,qBAAA;AJ4BD;;AKvDA;EACC,oBAAA;AL0DD;;AM1DA;EACC,mCJHa;EIIb,uBJMW;AFuDZ;;AM1DA;EACC,cAAA;EACA,aAAA;EACA,8BAAA;EACA,kBAAA;AN6DD;AM3DC;;EAEC,aAAA;EACA,8BAAA;EACA,aAAA;AN6DF;AM1DC;;EAEC,aAAA;EACA,8BAAA;EACA,aAAA;EACA,mBAAA;AN4DF;;AMxDA;EACC,aAAA;EACA,mBAAA;AN2DD;;AMxDA;EACC,uBJzBW;EI0BX,kBAAA;AN2DD;;AMxDA;EACC,yBJvCe;AFkGhB;;AOjGA;EACC,mCLHa;EKIb,uBLMW;EKLX,aAAA;EACA,gBAAA;EACA,aAAA;EACA,gBAAA;APoGD;AOlGC;EACC,aAAA;EACA,mBAAA;EACA,oHAAA;EAOA,cAAA;EACA,WAAA;EACA,cAAA;EACA,UAAA;EACA,sCAAA;EACA,oBAAA;EACA,0CAAA;EACA,gBAAA;AP8FF;AO5FE;EACC,aAAA;EACA,cAAA;EACA,sBAAA;EACA,UAAA;AP8FH;AO1FC;EACC,UAAA;AP4FF;AO1FE;EACC,eAAA;EACA,kBAAA;EACA,6DAAA;AP4FH;;AQrIA;EACC,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,oCNLe;EMMf,qBNOW;EMNX,uBAAA;EACA,2BAAA;EACA,eAAA;EACA,qBAAA;ARwID;;AQrIA;EACC,oCNbqB;EMcrB,qBNFW;AF0IZ;;AStJA;EACC,iCPUa;EOTb,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;ATyJD;ASvJC;EACC,kBAAA;ATyJF;;ASrJA;EACC,sBAAA;EACA,aAAA;EACA,qCAAA;EACA,cAAA;ATwJD;AStJC;EACC,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,uBPfU;AFuKZ;ASrJC;EACC,aAAA;EACA,WAAA;EACA,gBAAA;ATuJF;ASpJC;EACC,iBAAA;EACA,WAAA;ATsJF;ASnJC;EACC,uBAAA;ATqJF;ASlJC;EACC,gBAAA;AToJF;ASjJC;EACC,aAAA;EACA,WAAA;ATmJF;AShJC;EACC,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,mCPzDY;EO0DZ,uBPhDU;AFkMZ;AS/IC;EACC,oCP3Da;AF4Mf;AS9IC;EACC,oCPjEc;EOkEd,qBPrDU;EOsDV,eAAA;ATgJF;;AS5IA;EACC;IACC,qCAAA;ET+IA;AACF;AS5IA;EACC;IACC,qCAAA;ET8IA;AACF","sourcesContent":["@use \"../utilities/\" as *;\n@use \"colors\" as *;\n@use \"fonts\" as *;\n\nhtml {\n\tfont-size: 100%;\n}\n\nbody {\n\tfont-family: $font-primary;\n\tfont-size: rem(18);\n\tcolor: $clr-gray-dk;\n\tbackground-color: $clr-gray-lt;\n\tline-height: 1.5;\n}\n","html {\n  font-size: 100%;\n}\n\nbody {\n  font-family: \"Inter\", sans-serf;\n  font-size: 1.125rem;\n  color: hsl(0, 0%, 20%);\n  background-color: hsl(0, 0%, 85%);\n  line-height: 1.5;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n  line-height: 1.1;\n}\n\nh1 {\n  font-size: 2rem;\n  font-weight: 700;\n}\n\nh2 {\n  font-size: 1.625rem;\n  color: hsl(0, 0%, 100%);\n  font-weight: 700;\n}\n\nh3 {\n  font-size: 1.375rem;\n  font-weight: 700;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\n.container {\n  max-width: 99.375rem;\n}\n\nheader {\n  background-color: hsl(208, 88%, 3%);\n  color: hsl(0, 0%, 100%);\n}\n\n#header-ctn {\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  padding: 1.5625rem;\n}\n#header-ctn #header-left,\n#header-ctn #header-right {\n  display: flex;\n  justify-content: space-between;\n  gap: 3.125rem;\n}\n#header-ctn nav,\n#header-ctn #socials {\n  display: flex;\n  justify-content: space-between;\n  gap: 1.875rem;\n  align-items: center;\n}\n\na {\n  display: flex;\n  align-items: center;\n}\n\ni {\n  color: hsl(0, 0%, 100%);\n  font-size: 1.75rem;\n}\n\ni:hover {\n  color: hsl(47, 100%, 50%);\n}\n\n#about {\n  background-color: hsl(208, 88%, 3%);\n  color: hsl(0, 0%, 100%);\n  height: 25rem;\n  overflow: hidden;\n  display: flex;\n  align-items: end;\n}\n#about #about-ctn {\n  display: flex;\n  align-items: center;\n  background: linear-gradient(0.35turn, hsl(189, 80%, 12%), hsl(198, 83%, 18%), hsl(202, 84%, 15%), hsl(211, 85%, 5%));\n  gap: 1.5625rem;\n  height: 90%;\n  margin: 0 auto;\n  width: 60%;\n  border-radius: 1.5625rem 1.5625rem 0 0;\n  padding: 2.5rem 5rem;\n  border: 0.3125rem solid hsl(198, 83%, 18%);\n  border-bottom: 0;\n}\n#about #about-ctn #about-content {\n  display: flex;\n  gap: 1.5625rem;\n  flex-direction: column;\n  width: 70%;\n}\n#about #img-ctn {\n  width: 30%;\n}\n#about #img-ctn img {\n  max-width: 100%;\n  border-radius: 50%;\n  filter: drop-shadow(0.4375rem 0.4375rem 0 hsl(208, 69%, 46%));\n}\n\n.resume-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: hsl(47, 100%, 50%);\n  color: hsl(0, 0%, 0%);\n  border-radius: 3.125rem;\n  padding: 0.3125rem 1.875rem;\n  font-size: 1rem;\n  max-width: 10.9375rem;\n}\n\n.resume-link:hover {\n  background-color: hsl(47, 100%, 68%);\n  color: hsl(0, 0%, 0%);\n}\n\n#portfolio {\n  background-color: hsl(0, 0%, 20%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2.1875rem;\n}\n#portfolio h2 {\n  text-align: center;\n}\n\n#portfolio-ctn {\n  padding-top: 2.1875rem;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5625rem;\n}\n#portfolio-ctn .portfolio-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: hsl(0, 0%, 100%);\n}\n#portfolio-ctn .img-ctn {\n  display: flex;\n  height: 70%;\n  overflow: hidden;\n}\n#portfolio-ctn img {\n  object-fit: cover;\n  width: 100%;\n}\n#portfolio-ctn h3 {\n  padding-bottom: 1.25rem;\n}\n#portfolio-ctn a {\n  padding: 1.25rem;\n}\n#portfolio-ctn .btn-ctn {\n  display: flex;\n  width: 100%;\n}\n#portfolio-ctn a {\n  justify-content: center;\n  font-size: 1.125rem;\n  width: 100%;\n  border: none;\n  background-color: hsl(208, 88%, 3%);\n  color: hsl(0, 0%, 100%);\n}\n#portfolio-ctn .code-btn {\n  background-color: hsl(208, 69%, 46%);\n}\n#portfolio-ctn a:hover {\n  background-color: hsl(47, 100%, 50%);\n  color: hsl(0, 0%, 0%);\n  cursor: pointer;\n}\n\n@media screen and (max-width: 87.5rem) {\n  #portfolio-ctn {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media screen and (max-width: 66.25rem) {\n  #portfolio-ctn {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}","$font-primary: \"Inter\", sans-serf;\n","// Primary Colors\n$clr-primary: hsl(208, 88%, 3%);\n$clr-secondary: hsl(47, 100%, 50%);\n$clr-secondary-hover: hsl(47, 100%, 68%);\n$clr-tertiary: hsl(208, 69%, 46%);\n$clr-gradient-one: hsl(189, 80%, 12%);\n$clr-gradient-two: hsl(198, 83%, 18%);\n$clr-gradient-three: hsl(202, 84%, 15%);\n$clr-gradient-four: hsl(211, 85%, 5%);\n\n// Neutral Colors\n$clr-white: hsl(0, 0%, 100%);\n$clr-gray-lt: hsl(0, 0%, 85%);\n$clr-gray: hsl(0, 0%, 50%);\n$clr-gray-dk: hsl(0, 0%, 20%);\n$clr-black: hsl(0, 0%, 0%);\n","*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont: inherit;\n}\n\nimg,\npicture,\nsvg {\n\tdisplay: block;\n}\n","@use \"../utilities/\" as *;\n@use \"colors\" as *;\n\nh1,\nh2,\nh3 {\n\tmargin: 0;\n\tline-height: 1.1;\n}\n\nh1 {\n\tfont-size: rem(32);\n\tfont-weight: 700;\n}\n\nh2 {\n\tfont-size: rem(26);\n\tcolor: $clr-white;\n\tfont-weight: 700;\n}\n\nh3 {\n\tfont-size: rem(22);\n\tfont-weight: 700;\n}\n\na,\na:visited,\na:active {\n\ttext-decoration: none;\n}\n","@use \"../utilities/\" as *;\n\n.container {\n\tmax-width: rem(1590);\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\nheader {\n\tbackground-color: $clr-primary;\n\tcolor: $clr-white;\n}\n\n#header-ctn {\n\tmargin: 0 auto;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tpadding: rem(25);\n\n\t#header-left,\n\t#header-right {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tgap: rem(50);\n\t}\n\n\tnav,\n\t#socials {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tgap: rem(30);\n\t\talign-items: center;\n\t}\n}\n\na {\n\tdisplay: flex;\n\talign-items: center;\n}\n\ni {\n\tcolor: $clr-white;\n\tfont-size: rem(28);\n}\n\ni:hover {\n\tcolor: $clr-secondary;\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#about {\n\tbackground-color: $clr-primary;\n\tcolor: $clr-white;\n\theight: rem(400);\n\toverflow: hidden;\n\tdisplay: flex;\n\talign-items: end;\n\n\t#about-ctn {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tbackground: linear-gradient(\n\t\t\t0.35turn,\n\t\t\t$clr-gradient-one,\n\t\t\t$clr-gradient-two,\n\t\t\t$clr-gradient-three,\n\t\t\t$clr-gradient-four\n\t\t);\n\t\tgap: rem(25);\n\t\theight: 90%;\n\t\tmargin: 0 auto;\n\t\twidth: 60%;\n\t\tborder-radius: rem(25) rem(25) 0 0;\n\t\tpadding: rem(40) rem(80);\n\t\tborder: rem(5) solid $clr-gradient-two;\n\t\tborder-bottom: 0;\n\n\t\t#about-content {\n\t\t\tdisplay: flex;\n\t\t\tgap: rem(25);\n\t\t\tflex-direction: column;\n\t\t\twidth: 70%;\n\t\t}\n\t}\n\n\t#img-ctn {\n\t\twidth: 30%;\n\n\t\timg {\n\t\t\tmax-width: 100%;\n\t\t\tborder-radius: 50%;\n\t\t\tfilter: drop-shadow(rem(7) rem(7) 0 $clr-tertiary);\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n.resume-link {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: $clr-secondary;\n\tcolor: $clr-black;\n\tborder-radius: rem(50);\n\tpadding: rem(5) rem(30);\n\tfont-size: rem(16);\n\tmax-width: rem(175);\n}\n\n.resume-link:hover {\n\tbackground-color: $clr-secondary-hover;\n\tcolor: $clr-black;\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#portfolio {\n\tbackground-color: $clr-gray-dk;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: rem(35);\n\n\th2 {\n\t\ttext-align: center;\n\t}\n}\n\n#portfolio-ctn {\n\tpadding-top: rem(35);\n\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr);\n\tgap: rem(25);\n\n\t.portfolio-card {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tcolor: $clr-white;\n\t}\n\n\t.img-ctn {\n\t\tdisplay: flex;\n\t\theight: 70%;\n\t\toverflow: hidden;\n\t}\n\n\timg {\n\t\tobject-fit: cover;\n\t\twidth: 100%;\n\t}\n\n\th3 {\n\t\tpadding-bottom: rem(20);\n\t}\n\n\ta {\n\t\tpadding: rem(20);\n\t}\n\n\t.btn-ctn {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t}\n\n\ta {\n\t\tjustify-content: center;\n\t\tfont-size: rem(18);\n\t\twidth: 100%;\n\t\tborder: none;\n\t\tbackground-color: $clr-primary;\n\t\tcolor: $clr-white;\n\t}\n\n\t.code-btn {\n\t\tbackground-color: $clr-tertiary;\n\t}\n\n\ta:hover {\n\t\tbackground-color: $clr-secondary;\n\t\tcolor: $clr-black;\n\t\tcursor: pointer;\n\t}\n}\n\n@media screen and (max-width: rem(1400)) {\n\t#portfolio-ctn {\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t}\n}\n\n@media screen and (max-width: rem(1060)) {\n\t#portfolio-ctn {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t}\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });


function init() {
	console.log("hi");
}


/***/ }),

/***/ "./src/assets/coffee.png":
/*!*******************************!*\
  !*** ./src/assets/coffee.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e753193b334630a8bddf.png";

/***/ }),

/***/ "./src/assets/headshot.jpg":
/*!*********************************!*\
  !*** ./src/assets/headshot.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8601b2e7154da84414a.jpg";

/***/ }),

/***/ "./src/assets/library.png":
/*!********************************!*\
  !*** ./src/assets/library.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76559d6a002c1a4691ec.png";

/***/ }),

/***/ "./src/assets/todo.png":
/*!*****************************!*\
  !*** ./src/assets/todo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "287745710ff4ddbc5587.png";

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
/* harmony import */ var _assets_headshot_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/headshot.jpg */ "./src/assets/headshot.jpg");
/* harmony import */ var _assets_library_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/library.png */ "./src/assets/library.png");
/* harmony import */ var _assets_coffee_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/coffee.png */ "./src/assets/coffee.png");
/* harmony import */ var _assets_todo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/todo.png */ "./src/assets/todo.png");








(0,_js_init_js__WEBPACK_IMPORTED_MODULE_0__.init)();

const resumeLink = Array.from(document.querySelectorAll(".resume-link"));

resumeLink.forEach((button) => {
	button.href = _assets_resume_pdf__WEBPACK_IMPORTED_MODULE_2__["default"];
});

const heroImg = document.querySelector("#hero-img");
heroImg.src = _assets_headshot_jpg__WEBPACK_IMPORTED_MODULE_3__;

const libraryImg = document.querySelector("#library-img");
libraryImg.src = _assets_library_png__WEBPACK_IMPORTED_MODULE_4__;

const coffeeImg = document.querySelector("#coffee-img");
coffeeImg.src = _assets_coffee_png__WEBPACK_IMPORTED_MODULE_5__;

const todoImg = document.querySelector("#to-do-img");
todoImg.src = _assets_todo_png__WEBPACK_IMPORTED_MODULE_6__;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sb2lCQUFvaUIsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sVUFBVSxNQUFNLFFBQVEsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxRQUFRLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE9BQU8sVUFBVSxXQUFXLFVBQVUsTUFBTSxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sWUFBWSxZQUFZLE9BQU8sTUFBTSxZQUFZLFFBQVEsTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQztBQUNSO0FBQ2E7QUFDSTtBQUNGO0FBQ0Y7QUFDSjs7QUFFckMsaURBQUk7O0FBRUo7O0FBRUE7QUFDQSxlQUFlLDBEQUFNO0FBQ3JCLENBQUM7O0FBRUQ7QUFDQSxjQUFjLGlEQUFROztBQUV0QjtBQUNBLGlCQUFpQixnREFBTzs7QUFFeEI7QUFDQSxnQkFBZ0IsK0NBQU07O0FBRXRCO0FBQ0EsY0FBYyw2Q0FBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hc3NldHMvcmVzdW1lLnBkZiIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Njc3Mvc3R5bGVzLnNjc3M/MzIxZiIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvaW5pdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJmO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBjb2xvcjogaHNsKDAsIDAlLCAyMCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDg1JSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmltZyxcbnBpY3R1cmUsXG5zdmcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDEsXG5oMixcbmgzIHtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuNjI1cmVtO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDEuMzc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5hLFxuYTp2aXNpdGVkLFxuYTphY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDk5LjM3NXJlbTtcbn1cblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOCwgODglLCAzJSk7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xufVxuXG4jaGVhZGVyLWN0biB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEuNTYyNXJlbTtcbn1cbiNoZWFkZXItY3RuICNoZWFkZXItbGVmdCxcbiNoZWFkZXItY3RuICNoZWFkZXItcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMy4xMjVyZW07XG59XG4jaGVhZGVyLWN0biBuYXYsXG4jaGVhZGVyLWN0biAjc29jaWFscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxLjg3NXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmkge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuXG5pOmhvdmVyIHtcbiAgY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcbn1cblxuI2Fib3V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOCwgODglLCAzJSk7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICBoZWlnaHQ6IDI1cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZW5kO1xufVxuI2Fib3V0ICNhYm91dC1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMC4zNXR1cm4sIGhzbCgxODksIDgwJSwgMTIlKSwgaHNsKDE5OCwgODMlLCAxOCUpLCBoc2woMjAyLCA4NCUsIDE1JSksIGhzbCgyMTEsIDg1JSwgNSUpKTtcbiAgZ2FwOiAxLjU2MjVyZW07XG4gIGhlaWdodDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDYwJTtcbiAgYm9yZGVyLXJhZGl1czogMS41NjI1cmVtIDEuNTYyNXJlbSAwIDA7XG4gIHBhZGRpbmc6IDIuNXJlbSA1cmVtO1xuICBib3JkZXI6IDAuMzEyNXJlbSBzb2xpZCBoc2woMTk4LCA4MyUsIDE4JSk7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG4jYWJvdXQgI2Fib3V0LWN0biAjYWJvdXQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMS41NjI1cmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNzAlO1xufVxuI2Fib3V0ICNpbWctY3RuIHtcbiAgd2lkdGg6IDMwJTtcbn1cbiNhYm91dCAjaW1nLWN0biBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjQzNzVyZW0gMC40Mzc1cmVtIDAgaHNsKDIwOCwgNjklLCA0NiUpKTtcbn1cblxuLnJlc3VtZS1saW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xuICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcbiAgcGFkZGluZzogMC4zMTI1cmVtIDEuODc1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1heC13aWR0aDogMTAuOTM3NXJlbTtcbn1cblxuLnJlc3VtZS1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQ3LCAxMDAlLCA2OCUpO1xuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XG59XG5cbiNwb3J0Zm9saW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDIwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIuMTg3NXJlbTtcbn1cbiNwb3J0Zm9saW8gaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNwb3J0Zm9saW8tY3RuIHtcbiAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiAxLjU2MjVyZW07XG59XG4jcG9ydGZvbGlvLWN0biAucG9ydGZvbGlvLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG59XG4jcG9ydGZvbGlvLWN0biAuaW1nLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNzAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI3BvcnRmb2xpby1jdG4gaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuI3BvcnRmb2xpby1jdG4gaDMge1xuICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbn1cbiNwb3J0Zm9saW8tY3RuIGEge1xuICBwYWRkaW5nOiAxLjI1cmVtO1xufVxuI3BvcnRmb2xpby1jdG4gLmJ0bi1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbiNwb3J0Zm9saW8tY3RuIGEge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOCwgODglLCAzJSk7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xufVxuI3BvcnRmb2xpby1jdG4gLmNvZGUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOCwgNjklLCA0NiUpO1xufVxuI3BvcnRmb2xpby1jdG4gYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0NywgMTAwJSwgNTAlKTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg3LjVyZW0pIHtcbiAgI3BvcnRmb2xpby1jdG4ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2LjI1cmVtKSB7XG4gICNwb3J0Zm9saW8tY3RuIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19nZW5lcmFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19jb250YWluZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2Fib3V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fcG9ydGZvbGlvLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDQyxlQUFBO0FDSEQ7O0FETUE7RUFDQywrQkVUYztFRlVkLG1CQUFBO0VBQ0Esc0JHR2E7RUhGYixpQ0FBQTtFQUNBLGdCQUFBO0FDSEQ7O0FHVkE7OztFQUdDLHNCQUFBO0FIYUQ7O0FHVkE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUhhRDs7QUdWQTs7O0VBR0MsY0FBQTtBSGFEOztBSXpCQTs7O0VBR0MsU0FBQTtFQUNBLGdCQUFBO0FKNEJEOztBSXpCQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBSjRCRDs7QUl6QkE7RUFDQyxtQkFBQTtFQUNBLHVCRk5XO0VFT1gsZ0JBQUE7QUo0QkQ7O0FJekJBO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtBSjRCRDs7QUl6QkE7OztFQUdDLHFCQUFBO0FKNEJEOztBS3ZEQTtFQUNDLG9CQUFBO0FMMEREOztBTTFEQTtFQUNDLG1DSkhhO0VJSWIsdUJKTVc7QUZ1RFo7O0FNMURBO0VBQ0MsY0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FONkREO0FNM0RDOztFQUVDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QU42REY7QU0xREM7O0VBRUMsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FONERGOztBTXhEQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtBTjJERDs7QU14REE7RUFDQyx1Qkp6Qlc7RUkwQlgsa0JBQUE7QU4yREQ7O0FNeERBO0VBQ0MseUJKdkNlO0FGa0doQjs7QU9qR0E7RUFDQyxtQ0xIYTtFS0liLHVCTE1XO0VLTFgsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FQb0dEO0FPbEdDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0hBQUE7RUFPQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QVA4RkY7QU81RkU7RUFDQyxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBUDhGSDtBTzFGQztFQUNDLFVBQUE7QVA0RkY7QU8xRkU7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2REFBQTtBUDRGSDs7QVFySUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9DTkxlO0VNTWYscUJOT1c7RU1OWCx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FSd0lEOztBUXJJQTtFQUNDLG9DTmJxQjtFTWNyQixxQk5GVztBRjBJWjs7QVN0SkE7RUFDQyxpQ1BVYTtFT1RiLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QVR5SkQ7QVN2SkM7RUFDQyxrQkFBQTtBVHlKRjs7QVNySkE7RUFDQyxzQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7QVR3SkQ7QVN0SkM7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJQZlU7QUZ1S1o7QVNySkM7RUFDQyxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FUdUpGO0FTcEpDO0VBQ0MsaUJBQUE7RUFDQSxXQUFBO0FUc0pGO0FTbkpDO0VBQ0MsdUJBQUE7QVRxSkY7QVNsSkM7RUFDQyxnQkFBQTtBVG9KRjtBU2pKQztFQUNDLGFBQUE7RUFDQSxXQUFBO0FUbUpGO0FTaEpDO0VBQ0MsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNQekRZO0VPMERaLHVCUGhEVTtBRmtNWjtBUy9JQztFQUNDLG9DUDNEYTtBRjRNZjtBUzlJQztFQUNDLG9DUGpFYztFT2tFZCxxQlByRFU7RU9zRFYsZUFBQTtBVGdKRjs7QVM1SUE7RUFDQztJQUNDLHFDQUFBO0VUK0lBO0FBQ0Y7QVM1SUE7RUFDQztJQUNDLHFDQUFBO0VUOElBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCJjb2xvcnNcXFwiIGFzICo7XFxuQHVzZSBcXFwiZm9udHNcXFwiIGFzICo7XFxuXFxuaHRtbCB7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXG5cXHRmb250LXNpemU6IHJlbSgxOCk7XFxuXFx0Y29sb3I6ICRjbHItZ3JheS1kaztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWdyYXktbHQ7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXCIsXCJodG1sIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJmO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDIwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDg1JSk7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG4gIG1hcmdpbjogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS42MjVyZW07XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA5OS4zNzVyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA4OCUsIDMlKTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbn1cXG5cXG4jaGVhZGVyLWN0biB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxLjU2MjVyZW07XFxufVxcbiNoZWFkZXItY3RuICNoZWFkZXItbGVmdCxcXG4jaGVhZGVyLWN0biAjaGVhZGVyLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDMuMTI1cmVtO1xcbn1cXG4jaGVhZGVyLWN0biBuYXYsXFxuI2hlYWRlci1jdG4gI3NvY2lhbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMS44NzVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5hIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5pIHtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cXG5pOmhvdmVyIHtcXG4gIGNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XFxufVxcblxcbiNhYm91dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA4LCA4OCUsIDMlKTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG59XFxuI2Fib3V0ICNhYm91dC1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMC4zNXR1cm4sIGhzbCgxODksIDgwJSwgMTIlKSwgaHNsKDE5OCwgODMlLCAxOCUpLCBoc2woMjAyLCA4NCUsIDE1JSksIGhzbCgyMTEsIDg1JSwgNSUpKTtcXG4gIGdhcDogMS41NjI1cmVtO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA2MCU7XFxuICBib3JkZXItcmFkaXVzOiAxLjU2MjVyZW0gMS41NjI1cmVtIDAgMDtcXG4gIHBhZGRpbmc6IDIuNXJlbSA1cmVtO1xcbiAgYm9yZGVyOiAwLjMxMjVyZW0gc29saWQgaHNsKDE5OCwgODMlLCAxOCUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuI2Fib3V0ICNhYm91dC1jdG4gI2Fib3V0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS41NjI1cmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA3MCU7XFxufVxcbiNhYm91dCAjaW1nLWN0biB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG4jYWJvdXQgI2ltZy1jdG4gaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMC40Mzc1cmVtIDAuNDM3NXJlbSAwIGhzbCgyMDgsIDY5JSwgNDYlKSk7XFxufVxcblxcbi5yZXN1bWUtbGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQ3LCAxMDAlLCA1MCUpO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xcbiAgYm9yZGVyLXJhZGl1czogMy4xMjVyZW07XFxuICBwYWRkaW5nOiAwLjMxMjVyZW0gMS44NzVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXgtd2lkdGg6IDEwLjkzNzVyZW07XFxufVxcblxcbi5yZXN1bWUtbGluazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDcsIDEwMCUsIDY4JSk7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxufVxcblxcbiNwb3J0Zm9saW8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAyMCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMi4xODc1cmVtO1xcbn1cXG4jcG9ydGZvbGlvIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3BvcnRmb2xpby1jdG4ge1xcbiAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ2FwOiAxLjU2MjVyZW07XFxufVxcbiNwb3J0Zm9saW8tY3RuIC5wb3J0Zm9saW8tY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xcbn1cXG4jcG9ydGZvbGlvLWN0biAuaW1nLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4jcG9ydGZvbGlvLWN0biBpbWcge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuI3BvcnRmb2xpby1jdG4gaDMge1xcbiAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XFxufVxcbiNwb3J0Zm9saW8tY3RuIGEge1xcbiAgcGFkZGluZzogMS4yNXJlbTtcXG59XFxuI3BvcnRmb2xpby1jdG4gLmJ0bi1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4jcG9ydGZvbGlvLWN0biBhIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOCwgODglLCAzJSk7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG59XFxuI3BvcnRmb2xpby1jdG4gLmNvZGUtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDgsIDY5JSwgNDYlKTtcXG59XFxuI3BvcnRmb2xpby1jdG4gYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNDcsIDEwMCUsIDUwJSk7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg3LjVyZW0pIHtcXG4gICNwb3J0Zm9saW8tY3RuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjYuMjVyZW0pIHtcXG4gICNwb3J0Zm9saW8tY3RuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XCIsXCIkZm9udC1wcmltYXJ5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmY7XFxuXCIsXCIvLyBQcmltYXJ5IENvbG9yc1xcbiRjbHItcHJpbWFyeTogaHNsKDIwOCwgODglLCAzJSk7XFxuJGNsci1zZWNvbmRhcnk6IGhzbCg0NywgMTAwJSwgNTAlKTtcXG4kY2xyLXNlY29uZGFyeS1ob3ZlcjogaHNsKDQ3LCAxMDAlLCA2OCUpO1xcbiRjbHItdGVydGlhcnk6IGhzbCgyMDgsIDY5JSwgNDYlKTtcXG4kY2xyLWdyYWRpZW50LW9uZTogaHNsKDE4OSwgODAlLCAxMiUpO1xcbiRjbHItZ3JhZGllbnQtdHdvOiBoc2woMTk4LCA4MyUsIDE4JSk7XFxuJGNsci1ncmFkaWVudC10aHJlZTogaHNsKDIwMiwgODQlLCAxNSUpO1xcbiRjbHItZ3JhZGllbnQtZm91cjogaHNsKDIxMSwgODUlLCA1JSk7XFxuXFxuLy8gTmV1dHJhbCBDb2xvcnNcXG4kY2xyLXdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xcbiRjbHItZ3JheS1sdDogaHNsKDAsIDAlLCA4NSUpO1xcbiRjbHItZ3JheTogaHNsKDAsIDAlLCA1MCUpO1xcbiRjbHItZ3JheS1kazogaHNsKDAsIDAlLCAyMCUpO1xcbiRjbHItYmxhY2s6IGhzbCgwLCAwJSwgMCUpO1xcblwiLFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbmltZyxcXG5waWN0dXJlLFxcbnN2ZyB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCJjb2xvcnNcXFwiIGFzICo7XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcblxcdG1hcmdpbjogMDtcXG5cXHRsaW5lLWhlaWdodDogMS4xO1xcbn1cXG5cXG5oMSB7XFxuXFx0Zm9udC1zaXplOiByZW0oMzIpO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmgyIHtcXG5cXHRmb250LXNpemU6IHJlbSgyNik7XFxuXFx0Y29sb3I6ICRjbHItd2hpdGU7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaDMge1xcblxcdGZvbnQtc2l6ZTogcmVtKDIyKTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmFjdGl2ZSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuLmNvbnRhaW5lciB7XFxuXFx0bWF4LXdpZHRoOiByZW0oMTU5MCk7XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG5oZWFkZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItcHJpbWFyeTtcXG5cXHRjb2xvcjogJGNsci13aGl0ZTtcXG59XFxuXFxuI2hlYWRlci1jdG4ge1xcblxcdG1hcmdpbjogMCBhdXRvO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdHBhZGRpbmc6IHJlbSgyNSk7XFxuXFxuXFx0I2hlYWRlci1sZWZ0LFxcblxcdCNoZWFkZXItcmlnaHQge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdGdhcDogcmVtKDUwKTtcXG5cXHR9XFxuXFxuXFx0bmF2LFxcblxcdCNzb2NpYWxzIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRnYXA6IHJlbSgzMCk7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR9XFxufVxcblxcbmEge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaSB7XFxuXFx0Y29sb3I6ICRjbHItd2hpdGU7XFxuXFx0Zm9udC1zaXplOiByZW0oMjgpO1xcbn1cXG5cXG5pOmhvdmVyIHtcXG5cXHRjb2xvcjogJGNsci1zZWNvbmRhcnk7XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jYWJvdXQge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItcHJpbWFyeTtcXG5cXHRjb2xvcjogJGNsci13aGl0ZTtcXG5cXHRoZWlnaHQ6IHJlbSg0MDApO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogZW5kO1xcblxcblxcdCNhYm91dC1jdG4ge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0XFx0MC4zNXR1cm4sXFxuXFx0XFx0XFx0JGNsci1ncmFkaWVudC1vbmUsXFxuXFx0XFx0XFx0JGNsci1ncmFkaWVudC10d28sXFxuXFx0XFx0XFx0JGNsci1ncmFkaWVudC10aHJlZSxcXG5cXHRcXHRcXHQkY2xyLWdyYWRpZW50LWZvdXJcXG5cXHRcXHQpO1xcblxcdFxcdGdhcDogcmVtKDI1KTtcXG5cXHRcXHRoZWlnaHQ6IDkwJTtcXG5cXHRcXHRtYXJnaW46IDAgYXV0bztcXG5cXHRcXHR3aWR0aDogNjAlO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IHJlbSgyNSkgcmVtKDI1KSAwIDA7XFxuXFx0XFx0cGFkZGluZzogcmVtKDQwKSByZW0oODApO1xcblxcdFxcdGJvcmRlcjogcmVtKDUpIHNvbGlkICRjbHItZ3JhZGllbnQtdHdvO1xcblxcdFxcdGJvcmRlci1ib3R0b206IDA7XFxuXFxuXFx0XFx0I2Fib3V0LWNvbnRlbnQge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0Z2FwOiByZW0oMjUpO1xcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0XFx0d2lkdGg6IDcwJTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdCNpbWctY3RuIHtcXG5cXHRcXHR3aWR0aDogMzAlO1xcblxcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0bWF4LXdpZHRoOiAxMDAlO1xcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRcXHRcXHRmaWx0ZXI6IGRyb3Atc2hhZG93KHJlbSg3KSByZW0oNykgMCAkY2xyLXRlcnRpYXJ5KTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuLnJlc3VtZS1saW5rIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1zZWNvbmRhcnk7XFxuXFx0Y29sb3I6ICRjbHItYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogcmVtKDUwKTtcXG5cXHRwYWRkaW5nOiByZW0oNSkgcmVtKDMwKTtcXG5cXHRmb250LXNpemU6IHJlbSgxNik7XFxuXFx0bWF4LXdpZHRoOiByZW0oMTc1KTtcXG59XFxuXFxuLnJlc3VtZS1saW5rOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLXNlY29uZGFyeS1ob3ZlcjtcXG5cXHRjb2xvcjogJGNsci1ibGFjaztcXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNwb3J0Zm9saW8ge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItZ3JheS1kaztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiByZW0oMzUpO1xcblxcblxcdGgyIHtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcbn1cXG5cXG4jcG9ydGZvbGlvLWN0biB7XFxuXFx0cGFkZGluZy10b3A6IHJlbSgzNSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcblxcdGdhcDogcmVtKDI1KTtcXG5cXG5cXHQucG9ydGZvbGlvLWNhcmQge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGNvbG9yOiAkY2xyLXdoaXRlO1xcblxcdH1cXG5cXG5cXHQuaW1nLWN0biB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRoZWlnaHQ6IDcwJTtcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdH1cXG5cXG5cXHRpbWcge1xcblxcdFxcdG9iamVjdC1maXQ6IGNvdmVyO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG5cXG5cXHRoMyB7XFxuXFx0XFx0cGFkZGluZy1ib3R0b206IHJlbSgyMCk7XFxuXFx0fVxcblxcblxcdGEge1xcblxcdFxcdHBhZGRpbmc6IHJlbSgyMCk7XFxuXFx0fVxcblxcblxcdC5idG4tY3RuIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG5cXG5cXHRhIHtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRmb250LXNpemU6IHJlbSgxOCk7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0Ym9yZGVyOiBub25lO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItcHJpbWFyeTtcXG5cXHRcXHRjb2xvcjogJGNsci13aGl0ZTtcXG5cXHR9XFxuXFxuXFx0LmNvZGUtYnRuIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLXRlcnRpYXJ5O1xcblxcdH1cXG5cXG5cXHRhOmhvdmVyIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLXNlY29uZGFyeTtcXG5cXHRcXHRjb2xvcjogJGNsci1ibGFjaztcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiByZW0oMTQwMCkpIHtcXG5cXHQjcG9ydGZvbGlvLWN0biB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHJlbSgxMDYwKSkge1xcblxcdCNwb3J0Zm9saW8tY3RuIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3BkZi9yZXN1bWUucGRmXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgeyBpbml0IH07XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG5cdGNvbnNvbGUubG9nKFwiaGlcIik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGluaXQgfSBmcm9tIFwiLi9qcy9pbml0LmpzXCI7XG5pbXBvcnQgXCIuL3Njc3Mvc3R5bGVzLnNjc3NcIjtcbmltcG9ydCByZXN1bWUgZnJvbSBcIi4vYXNzZXRzL3Jlc3VtZS5wZGZcIjtcbmltcG9ydCBoZWFkc2hvdCBmcm9tIFwiLi9hc3NldHMvaGVhZHNob3QuanBnXCI7XG5pbXBvcnQgbGlicmFyeSBmcm9tIFwiLi9hc3NldHMvbGlicmFyeS5wbmdcIjtcbmltcG9ydCBjb2ZmZWUgZnJvbSBcIi4vYXNzZXRzL2NvZmZlZS5wbmdcIjtcbmltcG9ydCB0b2RvIGZyb20gXCIuL2Fzc2V0cy90b2RvLnBuZ1wiO1xuXG5pbml0KCk7XG5cbmNvbnN0IHJlc3VtZUxpbmsgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVzdW1lLWxpbmtcIikpO1xuXG5yZXN1bWVMaW5rLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuXHRidXR0b24uaHJlZiA9IHJlc3VtZTtcbn0pO1xuXG5jb25zdCBoZXJvSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZXJvLWltZ1wiKTtcbmhlcm9JbWcuc3JjID0gaGVhZHNob3Q7XG5cbmNvbnN0IGxpYnJhcnlJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpYnJhcnktaW1nXCIpO1xubGlicmFyeUltZy5zcmMgPSBsaWJyYXJ5O1xuXG5jb25zdCBjb2ZmZWVJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvZmZlZS1pbWdcIik7XG5jb2ZmZWVJbWcuc3JjID0gY29mZmVlO1xuXG5jb25zdCB0b2RvSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0by1kby1pbWdcIik7XG50b2RvSW1nLnNyYyA9IHRvZG87XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=