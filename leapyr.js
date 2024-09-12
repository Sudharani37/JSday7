//.........Task1..........
function isLeapYear(year){
   return (year%400==0||(year%100!=0 && year%4==0))
   }
console.log(isLeapYear(2020))

//.........Task2..........
function isPositive(number){
    return ((number>=0))
}
console.log(isPositive(-12))

//........Task3..........
function isDivisibleBy3And5(number){
    return (number%3==0 && number%5==0)
}
console.log(isDivisibleBy3And5(15))

//.......Task4.........
function isVowel(character){
return (character=="A"||character=="a"||character=="E"||character=="e"
        ||character=="I"||character=="i"||character=="O"||character=="o"
        ||character=="U"||character=="u")
}
console.log(isVowel("w"))

//........Task5........
function isUppercase(character){
    return ((character>="A" && character<="Z"))
}
console.log(isUppercase("W"))


