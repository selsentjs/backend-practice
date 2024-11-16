// name and age are public properties of the class

class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  getPrivate() {
    return this.#name + " " + this.#age;
  }
}
const obj = new Person("Selvi", 42);
console.log(obj.getPrivate());

//=====================================================

// Array.fromAsync({
//   0:Promise.resolve(1)
// }).then((a) => console.log(a))

//==================================================

let assert = require("assert");
let a = 10;
let b = 20;
assert.notDeepEqual(a, b);
console.log("yes");
// output: yes

// ========================================

class Calculator {
  constructor() {
    this.value = 0;
  }

  add(num) {
    this.value = this.value + num;
    return this; // Return the instance for chaining
  }
  sub(num) {
    this.value = this.value - num;
    return this; // Return the instance for chaining
  }

  multiply(num) {
    this.value *= num;
    return this; // Return the instance for chaining
  }

  getResult() {
    return this.value;
  }
}

// Example of chaining
let result = new Calculator()
  .add(5) // 0 + 5 = 5
  .sub(3) // 5 - 3 = 2
  .multiply(10) // 2 * 10 = 20
  .getResult(); // Returns 20

console.log(result); // Output: 20
// ========================================

// chaining with promise
// const promise = new Promise((resolve,reject) => {
//   let success = true
//   if(success){
//     resolve("Task completed")
    
//   }
//   else {
//     reject("Task not completed")
//   }
// })
// promise.then((result) => {
//   console.log(result); 
//   return "task 1 completed"
// })
// .then((result) => {
//   console.log(result)
//   return "task 2 completed"
// })
// .then((result) => {
//   console.log(result)
//   return "all the tasks are completed"
// })
// .then((result) => {
//   console.log(result)
//  })
// .catch((err) => console.log(err))
//=============================================

// chaining in middleware
// const express = require('express')
// const app = express()

// app.use(express.json())

// app.use((req,res,next) => {
//   console.log('first task completed')
//   next()
// })
// app.use((req,res,next) => {
//   console.log('second task completed')
//   next()
// })
// app.use((req,res,next) => {
//   console.log('full task completed')
//   next()
// })
// app.get('/', (req,res) => {
//   res.send('hi')
// })

// app.listen(3000, () => {
//   console.log('server is running on port 3000')
// })

// output:
/*
server is running on port 3000
first task completed
second task completed
full task completed
*/

// ====================================
(function(){
  console.log('I invoke myself')
})()
//==================================
const http = require('http');
const fs = require('fs');

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Read the first file
  fs.readFile('file1.txt', (err, data1) => {
    if (err) return res.end(`Error reading file1: ${err.message}`);
    
    // Read the second file
    fs.readFile('file2.txt', (err, data2) => {
      if (err) return res.end(`Error reading file2: ${err.message}`);
      
      // Read the third file
      fs.readFile('file3.txt', (err, data3) => {
        if (err) return res.end(`Error reading file3: ${err.message}`);
        
        // Send the contents of all three files as the HTTP response
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`${data1}\n\n${data2}\n\n${data3}`);
      });
    });
  });
});

// Start the server
server.listen(8000, () => {
  console.log('Server is running on port 8000');
});
