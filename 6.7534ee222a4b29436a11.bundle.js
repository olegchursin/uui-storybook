(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{641:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"uu_button",(function(){return AonButtonDefault}));__webpack_require__(48);var _index_1ff73d41_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(157);function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}var AonButtonDefault=function(){function AonButtonDefault(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,AonButtonDefault),Object(_index_1ff73d41_js__WEBPACK_IMPORTED_MODULE_1__.f)(this,hostRef),this.width="100%",this.disabled=!1,this.onclick=Object(_index_1ff73d41_js__WEBPACK_IMPORTED_MODULE_1__.d)(this,"onclick",7)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(AonButtonDefault,[{key:"onButtonClick",value:function onButtonClick(event){this.onclick.emit(event)}},{key:"handleKeyPress",value:function handleKeyPress(ev){"Enter"===ev.key&&this.onButtonClick(ev)}},{key:"render",value:function render(){var _this=this,style={width:this.width};return this.disabled?Object(_index_1ff73d41_js__WEBPACK_IMPORTED_MODULE_1__.e)(_index_1ff73d41_js__WEBPACK_IMPORTED_MODULE_1__.a,{role:"button",tabindex:"0"},Object(_index_1ff73d41_js__WEBPACK_IMPORTED_MODULE_1__.e)("div",{class:"aon-button-default disabled",style:style},Object(_index_1ff73d41_js__WEBPACK_IMPORTED_MODULE_1__.e)("div",{class:"aon-button-default-content"},Object(_index_1ff73d41_js__WEBPACK_IMPORTED_MODULE_1__.e)("slot",null)))):Object(_index_1ff73d41_js__WEBPACK_IMPORTED_MODULE_1__.e)(_index_1ff73d41_js__WEBPACK_IMPORTED_MODULE_1__.a,{role:"button",tabindex:"0"},Object(_index_1ff73d41_js__WEBPACK_IMPORTED_MODULE_1__.e)("div",{class:"aon-button-default",onClick:function onClick(event){return _this.onButtonClick(event)},style:style},Object(_index_1ff73d41_js__WEBPACK_IMPORTED_MODULE_1__.e)("div",{class:"aon-button-default-content"},Object(_index_1ff73d41_js__WEBPACK_IMPORTED_MODULE_1__.e)("slot",null))))}}]),AonButtonDefault}();AonButtonDefault.style=".aon-button-default{font-family:'Roboto', sans-serif;font-weight:400;font-size:16px;line-height:20px;color:white;background-color:var(--app-color-teal);min-width:130px;height:44px;margin:0px 0px 20px 0px;border-radius:var(--app-border-radius);border:0;display:inline-block;text-align:center;cursor:pointer}.aon-button-default-content{padding:12px;position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.aon-button-default:hover:not(.disabled){background-color:var(--app-color-teal-lighter)}.aon-button-default:active:not(.disabled){background-color:var(--app-color-teal-darker)}.aon-button-default.disabled{opacity:0.5;cursor:not-allowed}"}}]);
//# sourceMappingURL=6.7534ee222a4b29436a11.bundle.js.map