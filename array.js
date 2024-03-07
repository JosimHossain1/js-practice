// // Declare an array
const arr = [10, 20, 30, 40, 50]

console.log(arr.length) // Check an array lenght


// --------------------------------

// Check a particular item index
const arr = [10, 20, 30, 40, 50]
console.log(arr.indexOf(30))


// Add a new element in last of the array
const arr = [10, 20, 30, 40, 50]

arr.push("Josim")
console.log(arr)

// Remove the last element from an array

const arr = [10, 20, 30, 40, 50]

arr.pop()
console.log(arr)


// Add a element as a first item of array
const arr = [10, 20, 30, 40, 50]
arr.unshift("Josim")
console.log(arr)


// Remove the first element from an array
const arr = [10, 20, 30, 40, 50]
arr.shift()
console.log(arr)

// Check the element is available or not
const arr = [10, 20, 30, 40, 50]
console.log(arr.includes(50))


// Get the from by index
const arr = [10, 20, 30, 40, 50]
console.log(arr.at(3))

// Delete Item
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
console.log(fruits)



// check max number in an array

const arr = [100, 20, 30, 40, 50]
let max = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i]
    }
}
console.log(max)



// Get total sum
const arr = [100, 0, 0, 0, 50]
let res = 0
for (let i = 0; i < arr.length; i++) {
    res += arr[i]
}
console.log(res)


// Array concat
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];

const arr3 = arr1.concat(arr2)

const arr4 = ["Habib", "Josim", "Jibon"]
const arr5 = arr3.concat(arr4)
console.log(arr5)