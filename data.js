//To translate into whale language
let input = "I see you, captain Ahab!";

//Vowels
let vowels = ["a", "e", "i", "o", "u"];

//Result array
let resultArray = [];
let whaleIsh = [];

//Double the vowels
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
            //console.log(input[i])
        }
    }
    if (input[i]=== "e"){
        resultArray.push("ee");
    } if (input[i] === "u"){
        resultArray.push("uu");
        console.log(resultArray)
    }
}

console.log(resultArray)