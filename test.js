"user strict"

// function reverseString(strings){
//     let splitString = strings.split("");
//     let reversArray =  splitString.reverse();
//     let joinArray = reversArray.join("");
//     return joinArray;
// }

function reversString(str){
    let string = "";
    for (let i = str.length - 1; i >= 0; i--){
string += str[i];
    }
    return string;
}

console.log(reversString("hello"));