/* eslint-disable strict */

const reqObject = {
  foo: 1,
  bar: 2,
  fum: 3,
  quux: 'four',
  spam: "fiveeeee"
};


for (let key in reqObject) {
console.log(key + ' : ' + reqObject[key]);
}