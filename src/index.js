import _ from 'lodash';
import pixi from 'pixi.js';

window.$ = window.jQuery = require("jquery");
require('./../semantic/assets/semantic/semantic.js');


function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());

let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}

PIXI.utils.sayHello(type)