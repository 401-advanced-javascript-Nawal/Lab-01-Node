'use strict';

const validator = require('./lib/validator.js');


const susan = {
    id:'123-45-6789',
    name:'Susan McDeveloperson',
    age: 37,
    children:[],
  };

 let out = validator.isObject('mai');

console.log('out : ', out);
 console.log(' typeOf susan : ',  typeof susan.children);


 let arr = [];
 console.log(' typeof arr : ',  typeof arr);
 