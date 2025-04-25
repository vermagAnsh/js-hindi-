
const accounId = 1001100
let acc_holder = "RituVerma"
var spouce = "ArunVerma"

gender = "Female"

// accounId = 11001100    will show error bcz "accounId" is declared as a constant 

// the variable "acc_holder" can be updated
acc_holder = "AnshVerma"  
console.log(acc_holder);
acc_holder = "RituVerma"

// console.table can be used if we have to print multiple values, 
// it save time & repitision of console statement
console.table([accounId, acc_holder, spouce, gender]);