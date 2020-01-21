'use strict';

const validator = require('./lib/validator.js');


const susan = {
    id:'123-45-6789',
    name:'Susan McDeveloperson',
    age: 37,
    children:[],
  };

validator.isValid();
validator.isObject(susan);