"use strict";
var userName = "Jack";
var hasLoggedIn = true;
userName += " Shivers";
console.log(hasLoggedIn);
var nyNumber = 10;
var myRegex = /foo/;
var names = userName.split(" ");
var myValues = [1, 2, 3];
var myPerson = {
    first: "Paul",
    last: "Shivers",
};
//objects as maps
//Utility type "Record"
var ids = {
    10: "a",
    20: "b",
};
ids[30] = "c";
if (ids[30] === "D") {
}
;
for (var i = 0; i < 10; i++) {
    console.log(i);
}
;
[1, 2, 3].forEach(function (v) { console.log(v); });
var out = [4, 5, 6].map(function (v) { return "".concat(v * 10); });
