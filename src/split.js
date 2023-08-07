// // function splitAndMerge(string, separator) {
// //     return string
// //         .split(' ')
// //         .map(word => word.split('').join(separator))
// //         .join(' ');
// // }
// //
// //
// // console.log(splitAndMerge('Hello world','-'))
// // // function Foo(){}
// // // const a = 2
// // // // console.log(Foo.prototype === Object.prototype.__proto__ );
// // // console.log(a.__proto__  === Number.prototype );
//
//
// function removeEveryOther(arr) {
//     for (let i = 1; i < arr.length; i += 2) {
//         arr.splice(i, 1);
//     }
//     return arr
// }
//
// console.log(removeEveryOther([1, 3, 4, 6, 7, 9, 10]))
//
// // function removeEveryOther(arr) {
// //     const newArr = [];
// //     for (let i = 0; i < arr.length; i += 2) {
// //         newArr.push(arr[i]);
// //     }
// //     return newArr
// // }
//
// // const removeEveryOther = arr => arr.filter((_, i) => !(i % 2));