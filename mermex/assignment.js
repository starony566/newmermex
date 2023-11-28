
 function fullName(firstName, lastName){
    return firstName+ " "+ lastName
} 
const fullNames = fullName('Elvis', 'Abel')
console.log(fullNames)
   
 
function genderAge(num1,num2,num3,num4,num5){
    const sumNum = (num1+num2+num3+num4+num5)
    return sumNum
}
const total = genderAge(5,10,20,30,40,)
console.log(total)   

function userData(firstName,lastName,age,gender){
    //const studentData = (firstName+ " "+ lastName+ " "+ age+ " "+gender)
    const studentData = `${firstName} ${lastName} ${age} ${gender}`
    return studentData
}
const studenData =  userData('Christian','Elvis',35, 'Male') 
console.log(studenData)


function userDatas(){
    let firstName = 'Christian'
    let lastName ='Elvis'
    let age = 35
    let gender = 'male'
    const studenData1 = `${firstName} ${lastName} ${age} ${gender}`
    return studenData1
}
const bed = userDatas() 
console.log(bed)


//20-11-2003, assignment
// assignment NO 1
function totalSum(item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,){
    const totalSumOfAll = item1 + item2 + item3 + item4 + item5 + item6 + item7 + item8 + item9 + item10
    return totalSumOfAll
}
const totalSumOfAlls = totalSum(10,20,30,40,50,60,70,80,90,100)
console.log(totalSumOfAlls)

//assignment No 2
function userdetail(firstName,lastName,age,gender,country){
    const userdetails = `${firstName} ${lastName} ${age} ${gender} ${country}`
    return userdetails
}
const fullUserDetails = userdetail('Okon', 'Emmanuel', 25, 'Male', 'Nigeria')
console.log(fullUserDetails)

//assignment No 3
function colors(color1,color2,color3,color4,favouriteColor){
    let mycolor = `${favouriteColor} na the color wen i like well well`
    //favouriteColor = 'yellow'
    return mycolor
}
const colors1 = colors('white', 'blue', 'red', 'yellow','orange')
console.log(colors1)

//assignment No 4
function buyFood(food,foodCost,amtGiven){
    return amtGiven-foodCost

}
const remainingAmt = buyFood('Rice', 670, 1200 )
console.log(remainingAmt)


//string method assignment

const text = "Apple, Banana, Pawpaw, Kiwi";
let lenght = text.length
let name = '  onyeisi  '
let nameTrim = name.trim()
let part = text.slice(7,14);
let part1 = text.slice(-12,-6)
let uppercase = text.toUpperCase()
let lowercase = uppercase.toLowerCase()



 const names = 'onyeisi'
let slice = names.slice(0, 1)
let sliceFirst = names.slice(1,names.length)
let sliceToUpper = slice.toUpperCase()
let convertedName = `${sliceToUpper}${sliceFirst}`
console.log(convertedName)


//const names = 'onyeisi'
//let slice = names.substring(0, 1)
// let sliceFirst = names.substring(1,names.length)
// let sliceToUpper = slice.toUpperCase()
// let convertedName = `${sliceToUpper}${sliceFirst}`
// console.log(convertedName)

// let toUpper = names.charAt(0).toUpperCase()
// let sliceFirst = names.substring(1,names.length)
// let convert = `${toUpper}${sliceFirst}`
// console.log(convert)
    






// Using the map function
// const originalArray = ["apple", "banana", "cherry"];
// let firstLetters = originalArray.map(w => w[0]);
// let firstLettersToArray = firstLetters.toString()
// let originalArrayToCapital = firstLettersToArray.toLocaleUpperCase()

// console.log(originalArrayToCapital)
// console.log(firstLettersToArray)
// console.log(firstLetters)

// Alternatively, using a for loop
// const firstLetters = [];
// for (let i = 0; i < originalArray.length; i++) {
//   firstLetters.push(originalArray[i][0]);
// }

// 27-11-2003 assignment
// create a string that takes six names 
const namesAll = 'christain, onyeisi, ekele, elvis, excel, solomon'
let toUpper1 = namesAll.charAt(0).toUpperCase()
let sliceFirst1 = namesAll.substring(1, 10)
let convert1 = `${toUpper1}${sliceFirst1}`
let toUpper2 = namesAll.charAt(11).toUpperCase()
let sliceFirst2 = namesAll.substring(12,19)
let convert2 = `${toUpper2}${sliceFirst2}`
let toUpper3 = namesAll.charAt(20).toUpperCase()
let sliceFirst3 = namesAll.substring(21,26)
let convert3 = `${toUpper3}${sliceFirst3}`
let toUpper4 = namesAll.charAt(27).toUpperCase()
let sliceFirst4 = namesAll.substring(28,33)
let convert4 = `${toUpper4}${sliceFirst4}`
let toUpper5 = namesAll.charAt(34).toUpperCase()
let sliceFirst5 = namesAll.substring(35,40)
let convert5 = `${toUpper5}${sliceFirst5}`
let toUpper6 = namesAll.charAt(41).toUpperCase()
let sliceFirst6 = namesAll.substring(42,48)
let convert6 = `${toUpper6}${sliceFirst6}`
let nameDisplay = `${convert1} ${convert2} ${convert3} ${convert4} ${convert5} ${convert6}`
console.log(nameDisplay)



    

