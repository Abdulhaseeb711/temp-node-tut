//npm global command comes with node
//npm -- version

//local dependency-- use it only in this particular project
// npm install <pkgname>

//global dependency - use it in any project 
// npm install -g <pkgname>

//Pakage.json - manifest files ( stores important info about project/pakage)
// manual approach == ( create pakage.json file in the root , create properties etc)
// nmp init ( step by step, press enter to skip)
// npm init -y (everything default)

const _ = require(`lodash`)
const items = [1,[2,[3,[4]]]]
const newitems=_.flattenDeep(items)
console.log(newitems);