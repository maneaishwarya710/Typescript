var names = ["Abhay", "Bandhan", "Chinmay", "Dinesh", "Eisha"];
console.log(names);
var nums = [12, 11, 222, 333, 44, 4444, 55, 23];
console.log(nums);
//nums.push(90); error
//Type inference
var rollNo = [144, 13, 143, 115];
rollNo.push(67); //no error
console.log(nums);
//rollNo.push('a');       Argument of type 'string' is not assignable to parameter of type 'number'
//Multi-type array
var randomArr = [89, "Arya", 666, 89, "Kavya"];
console.log(randomArr);
randomArr.pop();
console.log(randomArr);
var newRollNo = rollNo.sort();
console.log(newRollNo);
