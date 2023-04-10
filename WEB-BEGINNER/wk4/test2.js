/*
I declare that this test is my own work in accordance with Seneca Academic Policy. No part of this
assignment has been copied manually or electronically from anybody else or distributed to other
students.
Name: Duc Minh Pham Student ID: 103055224
 */

/*
Write a JavaScript function, name it isPalindrome(str). This function takes one string parameter and
returns Boolean values. If the parameter str is a Palindrome, this function returns true; otherwise,
returns false.
Read the following notes carefully.
Notes:
(1) A palindrome is a word or phrase where the letters read backwards giving the same word or
phrase. E.g., Eve, race car, Madam.
(2) the parameter string (str) will be “case insensitive”, e,g, lowercase letter ‘a’ is considered equal
to uppercase letter ‘A’ when determining whether it’s palindrome.
(3) only alphabet lowercase and uppercase letters are considered. All other characters, such as
spaces, *, -, and more will be ignored.
 */

function isPalindrome(str) {
  var tempStr = /[^A-Za-z0-9]/g; // it will match for every word.
  var isMatch = true;
  str = str.toUpperCase().replace(tempStr,"");

  for (var i = 0; i < str.length; i++) {
    if (str[i] != str[str.length - 1 - i]) {
      isMatch = false;
    }
  }
  if (isMatch == false) {
    console.log(`${str} is not a Plindrome.`);
  } else {
    console.log(`${str} is a Plindrome.`);
  }
  return isMatch;
}
var test_str1 = "Eve";
var test_str2 = "Madam 'm Adam";
var test_str3 = "A man, a plan, a canal - Panama";
var test_str4 = "race car";
var test_str5 = "good";
var test_str6 = "How are you!";

console.log(isPalindrome(test_str1));
console.log(isPalindrome(test_str2));
console.log(isPalindrome(test_str3));
console.log(isPalindrome(test_str4));
console.log(isPalindrome(test_str5));
console.log(isPalindrome(test_str6));
