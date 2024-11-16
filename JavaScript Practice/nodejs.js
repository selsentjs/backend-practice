// const http = require('http');
// const server = http.createServer((req,res) => {
//     res.writeHead(200,{'Content-type':'application/json'})
//     let person = {
//         "name":"Selvi",
//         "age":43
//     }
//     res.end(JSON.stringify(person))
//     console.log(person)
// })

// server.listen(8080,(err) => {
//     if(err){
//         console.log(err)
//     }
//     console.log('server is running on port 8080')
// })

//======================================================

// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-type": "text/plain" });
//   fs.writeFile('JavaScript Practice/demo.txt',"write this content", (err) => {
//       if(err){console.log(err)}
//       console.log('written')

//   })
//   fs.readFile("JavaScript Practice/demo.txt", (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     res.end(data);
//   });
//   fs.appendFile("JavaScript Practice/demo.txt", "upend the text", (err)=> {
//     if(err){
//         console.log(err)
//     }

//   })
// //   fs.unlink("JavaScript Practice/demo.txt", (err)=> {
// //     if(err){
// //         console.log(err)
// //     }
// //   })
// });
// server.listen(8080, () => {
//   console.log("server is running on port 8080");
// });

// ========================================================

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res) => {
//     fs.stat("JavaScript Practice", ((err,stats) => {
//         if(err) throw err
//         console.log(stats.isDirectory())
//     }))
// })
// server.listen(8080)

// ============================================

// const fs = require('fs');
// const zlib = require('zlib');

// // Create a readable stream (input file)
// const readableStream = fs.createReadStream('JavaScript Practice/file.txt');

// // Create a writable stream (output file)
// const writableStream = fs.createWriteStream('JavaScript Practice/file.txt.gz');

// // Create a transform stream (Gzip compression)
// const gzip = zlib.createGzip();

// // Pipe data through the transform stream
// readableStream.pipe(gzip).pipe(writableStream);

// writableStream.on('finish', () => {
//   console.log('File successfully compressed.');
// });

// const fs = require('fs')
// const http = require('http')
// const server = http.createServer((req,res) => {
//     // const stream = fs.createWriteStream('stream.txt')
//     // stream.write('I am a stream file')
//     const stream = fs.createReadStream('stream.txt')
//     stream.on('data', (chunkdata) => {
//         res.write(chunkdata)
//     })
//     stream.on('end',() => {
//         res.end()
//     })
// })
// server.listen(8080, () => {
//     console.log('server is running on port 8080')
// })

// const buffer = Buffer.from('This is some binary data')
// console.log(buffer.length) // 24

// // event emitter
// const EventEmitter = require('events')
// const evenEmitter = new EventEmitter()

// evenEmitter.on('start', (start,end) => {
//     console.log(`The event start at ${start} and ends with ${end}`)
// })
// evenEmitter.emit('start',"3 a.m","5 p.m")
// output: The event start at 3 a.m and ends with 5 p.m

//====================================================================
// const express = require("express");
// const { v4: uuidv4 } = require("uuid");

// const app = express();

// let data = [{
//     name: "Sujatha",
//     age: 35,
//     qualification: "MBA"
// }]
// app.use(express.json())
// // get data
// app.get("/", (req, res) => {
//   res.status(200).json(data)
// });

// // post data
// app.post('/new', (req,res)=>{
//     const {name,age,qualification} = req.body;
//     console.log(name,age,qualification)
//     if(!name || !age || !qualification){
//         res.status(404).json({msg:'Enter all the data'})
//     }
//     const newData = {
//         id:uuidv4(),
//         name,
//         age,
//         qualification
//     }
//     data.push(newData)
//        res.status(200).json(data)
// })

// // update data
// app.patch('/update/:id', (req,res)=>{
//     const {id} = req.params;
//     const{name,age,qualification}= req.body;
//     data = data.map((item)=> {
//         if(item.id === id){
//             return {...item,name,age,qualification}
//         }
//         return item
//     })
//     res.status(200).json({msg:"updated"})
// })

// app.delete('/delete/:id', (req,res)=>{
//     const {id} = req.params;
//     if(!id){
//         res.status(404).json({msg:"please provide id"})
//     }
//     data = data.filter((item)=> {
//         return item.id !== item
//     })
//     res.status(200).json({msg:"data deleted"})
// })

// app.listen(3000, () => {
//   console.log("server is running on port 3000");
// });

// ==========================================================

const str = "hi this is selva";
const pattern = /hi/gim;
console.log(str.match(pattern));

// ============================================================

// array methods
let arr = ["Muskan", "Deepa", "Sarika"];
// push
arr.push("Vaishnavi");
console.log(arr); //[ 'Muskan', 'Deepa', 'Sarika', 'Vaishnavi' ]
// pop
arr.pop();
console.log(arr); // [ 'Muskan', 'Deepa', 'Sarika' ]
// unshift
arr.unshift("Vaishnavi");
console.log(arr); // [ 'Vaishnavi', 'Muskan', 'Deepa', 'Sarika' ]
// shift
arr.shift();
console.log(arr); // [ 'Muskan', 'Deepa', 'Sarika' ]
// length
console.log(arr.length); // 3
// slice
let res = arr.slice(1, 2);
console.log(res); // [ 'Deepa' ]
console.log(arr); // [ 'Muskan', 'Deepa', 'Sarika' ]
// splice

arr.splice(1, 0, "Likitha", "Vaishnavi");
console.log(arr); // [ 'Muskan', 'Likitha', 'Vaishnavi', 'Deepa', 'Sarika' ]

let output = arr.splice(1, 2);
console.log(output); // [ 'Likitha', 'Vaishnavi' ]
console.log(arr); // [ 'Muskan', 'Deepa', 'Sarika' ]

// map
let Person = [
  { name: "Vaishnavi", class: "8B", marks: 50 },
  { name: "Muskan", class: "8B", marks: 62 },
  { name: "Deepa", class: "8B", marks: 80 },
  { name: "Sarika", class: "8B", marks: 73 },
  { name: "Likitha", class: "8B", marks: 55 },
];
let maps = Person.map((item) => {
  return item.name;
});
console.log(maps);

// filter - who got more than 70
let filters = Person.filter((item) => {
  return item.marks > 70; //{ name: 'Deepa', class: '8B', marks: 80 },{ name: 'Sarika', class: '8B', marks: 73 }
  // return item.name.includes("Deepa") // [ { name: 'Deepa', class: '8B', marks: 80 } ]
});
console.log(filters);
// find
let finds = Person.find((item) => {
  //return item.marks > 70
  return item.marks > 70; // { name: 'Deepa', class: '8B', marks: 80 }
});
console.log(finds);
// forEach
Person.forEach((item) => {
  console.log(item.marks > 70);
});
/*
false
false
true
true
false
*/

// for..in
for(let i in Person){
    console.log(Person[i])
}
// for..of
for(let i of Person){
    console.log(i)
}

// reduce - find missing number
let num = [1,2,3,5,6]
for(let i=1; i<num.length+1;i++){
    if(num.indexOf(i) === -1){
       console.log(i) // 4
    }   
}

// map
let out = num.map((a) => {
    return Math.pow(a,2)
},[])
console.log(out) // [ 1, 4, 9, 25, 36 ]

// reverse
let name = "Selvarani"
let reverse = name.split('').reverse().join('')
console.log(reverse) // inaravleS

let number = [23,42,34,31,29]
let sorting = number.sort()
console.log(sorting)// [ 23, 29, 31, 34, 42 ]

let arr1 = [5,2,8,5,6]
let out1 = arr1.slice(-4,-2)
console.log(out1)

// ================================================
const str1 = Buffer.from('she is a ');
 const str2 = Buffer.from('good girl');
 const output1 = Buffer.concat([str1,str2]);
 console.log('concat:', output1.toString());

 // copy
 const text1 = Buffer.from('original text');
 const text2 = Buffer.alloc(40);
 text2.copy(text1);
 console.log('copy:',text1);
