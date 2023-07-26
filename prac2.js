var array = [10,20,30,40,50];

console.log("Lngth of the array : ", array.length);
console.log("access element 30 at index 2 : ",array[2]);

var push = array.push(60)
console.log("Push Method : ",array);

var pop = array.pop(60)
console.log("Pop Method : ", pop);
console.log("Pop Method : ", array);

var shift = array.shift()
console.log("shift : ", shift)
console.log("shifted array : ",array)

var unshift = array.unshift(10)
console.log("unshift : ",unshift)
console.log("unshifted array : ", array)

var join = array.join(":, ");
console.log("Joined array:", join);

var del = delete array[3]
console.log("Deleted element : ",del)
console.log("array after deletion : ",array)

var concatenation = array.concat([70,80])
console.log("Concatenate two arrays : ", concatenation);

const array1 = [10, [20, 30], [40, 50, 60]];
const flat = array1.flat();
console.log("Flattened array:", flat);

array[3] = 40;
console.log(array)

array.splice(3,0,90,100);
console.log(array)

array.splice(3,2)
console.log(array)

array.splice(2,2,90,100)
console.log(array)

var array2 = array.slice(1, 4);
console.log("Sliced array:", array2);

var properties = {
    name : "Mahee Gadhiya",
    age : 19,
    gender : "Female"
}

console.log("Details of person : ",properties)