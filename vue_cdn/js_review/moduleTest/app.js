// import * as mymodule from './module.js'
// console.log(mymodule.moduleA);

import { moduleA as msg} from './module.js'
console.log(msg);

import defaultfunction from "./module.js"; //=moduleC
defaultfunction();
