'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('strings', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isString(str)).toBeTruthy();
    expect(validator.isString(num)).toBeFalsy();
    expect(validator.isString(arr)).toBeFalsy();
    expect(validator.isString(obj)).toBeFalsy();
    expect(validator.isString(func)).toBeFalsy();
    expect(validator.isString(bool)).toBeFalsy();
  });

  it('numbers', () => {
    let num = 1;
    expect(validator.isString(num)).toBeFalsy();
  });

  it('arrays', () => {
    let arr = ['a'];
    expect(validator.isString(arr)).toBeFalsy();
  });

  it('objects', () => {
    let obj = {x:'y'};
    expect(validator.isString(obj)).toBeFalsy();
  });

  it('booleans', () => {
    let bool = false;
    expect(validator.isString(bool)).toBeFalsy();
  });

  it('functions', () => {
    let func = () => {};
    expect(validator.isString(func)).toBeFalsy();
  });

});

describe('validator module performs complex validations', () => {

    /******************************  My Cases *************************************/

    // TODO: Cover so, so many more cases
    it('validates if the input is object or not ', () => {
      const susan = {
        id:'123-45-6789',
        name:'Susan McDeveloperson',
        age: 37,
        children:[],
      }; 
      // let str = 'nawal';
      expect(validator.isObject(susan)).toBeTruthy();
    });
   
    it('If the object is an empty or not', () => {
      const susan = {
        id:'123-45-6789',
        name:'Susan McDeveloperson',
        age: 37,
        children:[],
      }; 
      expect(validator.emptyObject(susan)).toBeFalsy();
    });

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair\
    const susan = {
      id:'123-45-6789',
      name:'Susan McDeveloperson',
      age: 37,
      children:[],
    }; 
    expect(validator.objectLevels(susan)).toBeFalsy();
  });


  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    const susan = {
      id:'123-45-6789',
      name:'Susan McDeveloperson',
      age: 37,
      children:[],
    }; 
    expect(validator.inputKeys(susan)).toBeTruthy();
  });
  

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    const susan = {
      id:'123-45-6789',
      name:'Susan McDeveloperson',
      age: 37,
      children:[],
    }; 
    expect(validator.arrayValue(susan)).toBeFalsy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    const susan = {
      id:'123-45-6789',
      name:'Susan McDeveloperson',
      age: 37,
      children:[],
    }; 
    expect(validator.emptyArray(susan)).toBeFalsy();
  });
 
});
