/**
 * expect
 * the essential JavaScript test library
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

var expect = exports;

/**
 * deep_equal
 * Expect `value` to be deeply equal to `expected`
 * 
 * @param value
 * @param expected
 * @param {String} message
 * @api public
 */

expect.deep_equal = function (value, expected, message) {
  if (value === expected) return;
  throw new Error(message);
};

/**
 * equal
 * Expect `value` to be equal to `expected`
 * 
 * @param value
 * @param expected
 * @param {String} message
 * @api public
 */

expect.equal = function (value, expected, message) {
  if (value == expected) return;
  throw new Error(message);
};

/**
 * false
 * Expect `value` to be `false`
 * 
 * @param value
 * @param {String} message
 * @api public
 */

expect.false = function (value, message) {
  if (!!!value) return;
  throw new Error(message);
};


/**
 * true
 * Expect `value` to be `true`
 * 
 * @param value
 * @param {String} message
 * @api public
 */

expect.ok = 
expect.true = function (value, message) {
  if (!!value) return;
  throw new Error(message);
};
