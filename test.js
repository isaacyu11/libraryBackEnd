"use strict";

const isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let reverse = "";
  let temp = x;

  //   console.log(temp % 10);
  //   temp = Math.floor(temp / 10);
  //   console.log(temp);
  while (temp) {
    reverse = `${reverse}${temp % 10}`;
    console.log(reverse);
    temp = Math.floor(temp / 10);
    console.log(temp);
  }

  console.log(reverse);
  reverse = Number(reverse);

  if (reverse === x) {
    return true;
  }
  return false;
};

console.log(isPalindrome(121));
