let answerLine = document.querySelector(".answer-line");

let listOfWords = document.querySelector("#listOfWords");

let newWords = document.querySelectorAll(".word");


/*
let checker = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

for (let i=0; i <newWords.length; i++) {
    newWords[i].addEventListener("click", function() {
        
        checker[i] +=1;
        if (checker[i] % 2 != 0) {answerLine.append(newWords[i]);} else 

        {listOfWords.append(newWords[i]);}
        


    });
};

if (newWords[0].parentNode === answerLine) {console.log("v liste");} else {console.log("v otvete");};
*/
for (let i=0; i <newWords.length; i++) {
    newWords[i].addEventListener("click", function() {
        
        if (newWords[i].parentNode === listOfWords) {answerLine.append(newWords[i]);} else 

        {listOfWords.append(newWords[i]);}
        

    });
};


let calculateAnswer = function () {
    let answer = "";
    for (let j=0; j <answerLine.children.length; j++) {
         answer += answerLine.children[j].id;
    };
    return answer;
};


let checkAnswer = function () {
    if (calculateAnswer() === answerLine.id) {return "Правильно!"} else {return "Попробовать еще раз"};
};