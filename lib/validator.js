'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {
  return true;
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

/**
 * Is this an Object?
 * @param input
 * @returns {boolean}
 */
validator.isObject = (input) => {
  return typeof input === 'object';
};

/** 
 * This is Function 
 * Is this an Object empty or not ?
 * @param input
 * @returns {boolean}
 */
validator.emptyObject = function (input) {
  if (Object.keys(input) === null) { return true };
  return false;
};

/** 
 * This is Function 
 * Is this an Object has properties at any level  ?
 * @param input
 * @returns {boolean}
 */
validator.objectLevels = function (input) {
  let mainObj = Object.keys(input);
  if (mainObj)
  {
    mainObj.every(value =>
      {
        return this.isObject(value);
      })
  }
  return false;
};

/**
 * This is Function 
 * Is Object have A keys or Null?
 * @param input
 * @returns {boolean}
 */
validator.inputKeys = function (input) {
  if (Object.keys(input)) { return true };
  return false;
};

/**
 * This is Function 
 * Is Object have a values and what its type string,Number,Array[object]?
 * @param input
 * @returns value
 */
validator.inputValues = function (input) {
  if (!Object.values(input)) { return false };
  return input.every(value => typeof value === 'string' || typeof value === 'number' || typeof value === 'object')
};

/**
 * This is Function to check the array 
 * @param input
 * @returns value
 */
validator.inputValueArray = function (input) {
  if (!(this.inputValues(input) === 'object'));
  return input.every(item => (typeof item === 'string' || typeof item === 'number' || typeof item === 'object' ) &&  item !== 0)
};





