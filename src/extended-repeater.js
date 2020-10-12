const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof(str) !== 'string') {
    toString(str);
  }
  let separator = options.separator || "+";
  let additionSeparator = options.additionSeparator || "|";

  const addition = options.addition;
  let additionStr = addition !== undefined ? options.addition : "";

  let preStr = "";

  for (let i = 1; i < options.additionRepeatTimes; i++) {
      preStr = `${preStr}${additionStr}${additionSeparator}`;
  }

  preStr += additionStr;

  let result = "";

  for (let i = 1; i < options.repeatTimes; i++) {
      result = `${result}${str}${preStr}${separator}`;
  }
  result += `${str}${preStr}`;

  return result;
};
  