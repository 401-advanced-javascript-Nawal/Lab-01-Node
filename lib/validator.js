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
 * Is this an Object for every Input ?
 * @param input
 * @returns {boolean}
 */
validator.inputType = function (input) {
  if (Object.isObject(input)) { return true };
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
  if (Object.keys(input) === null) { return 'empty object' };
  return false;
};

/**
 * This is Function 
 * Is Object have a values and what its type string,Number,Array[object]?
 * @param input
 * @returns {boolean}
 */
validator.inputValues = function (input) {
  if (!Object.values(input)) { return false };
  return input.every(value => typeof value === 'string' || typeof value === 'number' || typeof value === 'object')
};

/**
 * 
 */

