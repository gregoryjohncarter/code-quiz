
// questions and answers arrays
var questionSource = ["What is the difference between a do-while and a while loop?", "Which of these is NOT a correct way to define a function?", "Which of these is a difference between a function declaration and expression?", "What does dot notation allow the programmer to achieve?", "Which of these aren't true concerning bracket notation?", "What is the purpose of the javascript function JSON.stringify()?", "What is the purpose of the % operator?", "What does event.target signify?", "What would typically be used to include a button on the page?", "Where would an event.preventDefault() typically be used?", "How do you access the index of an array?", "What is console.dir used for?", "Which of these is not true concerning a switch statement?"];
var btn0 = ["while loops are susceptible to infinte loops", "while loops only return if the variable is true", "do-while will always be executed at least once, even if the condition is false", "while loops have an extra variable that gets compared"];
var btn1 = ["function codeQuizAnswers() { };", "var function() = codeQuizAnswers { };", "var codeQuizAnswers = () => { };", "const codeQuizAnswers = function() { };"];
var btn2 = ["a function declaration has the ability to call an array as an argument", "a function expression cannot be hoisted (ran before reaching it in the code)", "a function expression can be used to call two or more variables as arguments", "a declaration has the word function typed later than in an expression"];
var btn3 = ["borrow the value of a relative expression", "access an object's values or methods", "check the value of more than one consecutive arguments", "compare two variables in a logical assessment as an 'or' operator"];
var btn4 = ["define a object key and value with single quotations", "define a method inside an object", "access properties inside an object", "setting values inside an array with single quotations"];
var btn5 = ["combines an array into a string with certain criteria", "parse a string into integers", "parse a string into a value or object", "convert an object to a string"];
var btn6 = ["to return the remainder left over when one is divided by another", "to round out the effect of Math.floor", "to convert a division equation to a numerical percentage", "to signify 'or' as a logical operator"];
var btn7 = ["the outcome of operating on an array", "the target of an action such as a form submit or button click", "sets the target attribute of an element on the page", "define a variable as an element of the DOM"];
var btn8 = ["an if-then statement", "a Math.random operator", "an addEventListener('click', 'function');", "a document.querySelector"];
var btn9 = ["to prevent a submit form from refreshing the page", "to prevent a for loop from an infinite return", "to allow a button to be clicked only once", "to make a textarea prompt read-only"];
var btn10 = ["arr.index[3]", "arr[3]", "arr{3}", "arr('3')"];
var btn11 = ["to read out the indicies of an array", "to render a text area on the page via CSS", "to read out the text contents of the argument in the console", "to see properties of a specified javascript object"];
var btn12 = ["a break; needs to be called to prompt the next case", "the syntax relies on brackets to separate cases", "there must be an expression to evaluate", "the last case is always 'default'"];

var finalScore = 0;


// reset scores function for the ending page
function resetScore() {
    localStorage.clear();
    
    document.getElementById('container').innerHTML = "<h2>High scores:</h2><button onclick='resetScore()' class='quiz-btn'>Reset Scores</button><button onclick='createQuizPage()' class='quiz-btn'>Return</button>";
}

function countShell() {

// create timer on page, count and counter defined globally

window.count=210;

//1000 will  run it every 1 second

    window.counter=setInterval(timer, 1000); 

    function timer() {
        window.count=window.count-1;
        // reset counter if it runs out
        if (window.count <= 0) {
        clearInterval(window.counter);
        // go to beginning if the timer runs out
        createQuizPage();
    
        return;
        }
        document.getElementById("timer").innerHTML=window.count + " secs"; 
    }
}

function resetTimer() {
    clearInterval(window.counter);
}

// run this whenever an incorrect answer is clicked
function minusTime() {
    window.count -= 5;
}


// question 1 index 0
function startQuiz() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[0] + "</p><button class='quiz-btn' id='btn1' onclick='inc0()'>" + btn0[0] + "</button><button class='quiz-btn' id='btn1' onclick='inc0()'>" + btn0[1] + "</button><button class='quiz-btn' id='btn2' onclick='cor0()'>" + btn0[2] + "</button><button class='quiz-btn' id='btn1' onclick='inc0()'>" + btn0[3] + "</button>";
    
}

// questions 2 index 1
function inc0() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[1] + "</p><button class='quiz-btn' id='btn1' onclick='inc1()'>" + btn1[0] + "</button><button class='quiz-btn' id='btn2' onclick='cor1()'>" + btn1[1] + "</button><button class='quiz-btn' id='btn1' onclick='inc1()'>" + btn1[2] + "</button><button class='quiz-btn' id='btn1' onclick='inc1()'>" + btn1[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Incorrect! </p>";
    countShell();
    minusTime()
}

function cor0() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[1] + "</p><button class='quiz-btn' id='btn1' onclick='inc1()'>" + btn1[0] + "</button><button class='quiz-btn' id='btn2' onclick='cor1()'>" + btn1[1] + "</button><button class='quiz-btn' id='btn1' onclick='inc1()'>" + btn1[2] + "</button><button class='quiz-btn' id='btn1' onclick='inc1()'>" + btn1[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Correct! </p>";
    finalScore += 4;
    countShell();
}

// questions 3 index 2
function inc1() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[2] + "</p><button class='quiz-btn' id='btn1' onclick='inc2()'>" + btn2[0] + "</button><button class='quiz-btn' id='btn2' onclick='cor2()'>" + btn2[1] + "</button><button class='quiz-btn' id='btn1' onclick='inc2()'>" + btn2[2] + "</button><button class='quiz-btn' id='btn1' onclick='inc2()'>" + btn2[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Incorrect! </p>";
    minusTime()

    
}

function cor1() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[2] + "</p><button class='quiz-btn' id='btn1' onclick='inc2()'>" + btn2[0] + "</button><button class='quiz-btn' id='btn2' onclick='cor2()'>" + btn2[1] + "</button><button class='quiz-btn' id='btn1' onclick='inc2()'>" + btn2[2] + "</button><button class='quiz-btn' id='btn23' onclick='inc2()'>" + btn2[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Correct! </p>";
    finalScore += 4;
}

// questions 4 index 3
function inc2() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[3] + "</p><button class='quiz-btn' id='btn30' onclick='inc3()'>" + btn3[0] + "</button><button class='quiz-btn' id='btn31' onclick='cor3()'>" + btn3[1] + "</button><button class='quiz-btn' id='btn32' onclick='inc3()'>" + btn3[2] + "</button><button class='quiz-btn' id='btn33' onclick='inc3()'>" + btn3[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Incorrect! </p>";
    minusTime()
}

function cor2() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[3] + "</p><button class='quiz-btn' id='btn30' onclick='inc3()'>" + btn3[0] + "</button><button class='quiz-btn' id='btn31' onclick='cor3()'>" + btn3[1] + "</button><button class='quiz-btn' id='btn32' onclick='inc3()'>" + btn3[2] + "</button><button class='quiz-btn' id='btn33' onclick='inc3()'>" + btn3[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Correct! </p>";
    finalScore += 4;
}

// questions 5 index 4
function inc3() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[4] + "</p><button class='quiz-btn' id='btn40' onclick='inc4()'>" + btn4[0] + "</button><button class='quiz-btn' id='btn41' onclick='cor4()'>" + btn4[1] + "</button><button class='quiz-btn' id='btn42' onclick='inc4()'>" + btn4[2] + "</button><button class='quiz-btn' id='btn43' onclick='inc4()'>" + btn4[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Incorrect! </p>";
    minusTime()
}

function cor3() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[4] + "</p><button class='quiz-btn' id='btn40' onclick='inc4()'>" + btn4[0] + "</button><button class='quiz-btn' id='btn41' onclick='cor4()'>" + btn4[1] + "</button><button class='quiz-btn' id='btn42' onclick='inc4()'>" + btn4[2] + "</button><button class='quiz-btn' id='btn43' onclick='inc4()'>" + btn4[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Correct! </p>";
    finalScore += 4;
}

// questions 6 index 5
function inc4() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[5] + "</p><button class='quiz-btn' id='btn50' onclick='inc5()'>" + btn5[0] + "</button><button class='quiz-btn' id='btn51' onclick='inc5()'>" + btn5[1] + "</button><button class='quiz-btn' id='btn52' onclick='inc5()'>" + btn5[2] + "</button><button class='quiz-btn' id='btn53' onclick='cor5()'>" + btn5[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Incorrect! </p>";
    minusTime()
}

function cor4() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[5] + "</p><button class='quiz-btn' id='btn50' onclick='inc5()'>" + btn5[0] + "</button><button class='quiz-btn' id='btn51' onclick='inc5()'>" + btn5[1] + "</button><button class='quiz-btn' id='btn52' onclick='inc5()'>" + btn5[2] + "</button><button class='quiz-btn' id='btn53' onclick='cor5()'>" + btn5[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Correct! </p>";
    finalScore += 4;
}

// questions 7 index 6
function inc5() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[6] + "</p><button class='quiz-btn' id='btn60' onclick='cor6()'>" + btn6[0] + "</button><button class='quiz-btn' id='btn61' onclick='inc6()'>" + btn6[1] + "</button><button class='quiz-btn' id='btn62' onclick='inc6()'>" + btn6[2] + "</button><button class='quiz-btn' id='btn63' onclick='inc6()'>" + btn6[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Incorrect! </p>";
    minusTime()
}

function cor5() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[6] + "</p><button class='quiz-btn' id='btn60' onclick='cor6()'>" + btn6[0] + "</button><button class='quiz-btn' id='btn61' onclick='inc6()'>" + btn6[1] + "</button><button class='quiz-btn' id='btn62' onclick='inc6()'>" + btn6[2] + "</button><button class='quiz-btn' id='btn63' onclick='inc6()'>" + btn6[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Correct! </p>";
    finalScore += 4;
}

// questions 8 index 7
function inc6() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[7] + "</p><button class='quiz-btn' id='btn70' onclick='inc7()'>" + btn7[0] + "</button><button class='quiz-btn' id='btn71' onclick='cor7()'>" + btn7[1] + "</button><button class='quiz-btn' id='btn72' onclick='inc7()'>" + btn7[2] + "</button><button class='quiz-btn' id='btn73' onclick='inc7()'>" + btn7[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Incorrect! </p>";
    minusTime()
}

function cor6() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[7] + "</p><button class='quiz-btn' id='btn70' onclick='inc7()'>" + btn7[0] + "</button><button class='quiz-btn' id='btn71' onclick='cor7()'>" + btn7[1] + "</button><button class='quiz-btn' id='btn72' onclick='inc7()'>" + btn7[2] + "</button><button class='quiz-btn' id='btn73' onclick='inc7()'>" + btn7[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Correct! </p>";
    finalScore += 4;
}


// questions 9 index 8
function inc7() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[8] + "</p><button class='quiz-btn' id='btn80' onclick='inc8()'>" + btn8[0] + "</button><button class='quiz-btn' id='btn81' onclick='inc8()'>" + btn8[1] + "</button><button class='quiz-btn' id='btn82' onclick='cor8()'>" + btn8[2] + "</button><button class='quiz-btn' id='btn83' onclick='inc8()'>" + btn8[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Incorrect! </p>";
    minusTime()
}

function cor7() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[8] + "</p><button class='quiz-btn' id='btn80' onclick='inc8()'>" + btn8[0] + "</button><button class='quiz-btn' id='btn81' onclick='inc8()'>" + btn8[1] + "</button><button class='quiz-btn' id='btn82' onclick='cor8()'>" + btn8[2] + "</button><button class='quiz-btn' id='btn83' onclick='inc8()'>" + btn8[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Correct! </p>";
    finalScore += 4;
}

// questions 10 index 9
function inc8() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[9] + "</p><button class='quiz-btn' id='btn90' onclick='cor9()'>" + btn9[0] + "</button><button class='quiz-btn' id='btn91' onclick='inc9()'>" + btn9[1] + "</button><button class='quiz-btn' id='btn92' onclick='inc9()'>" + btn9[2] + "</button><button class='quiz-btn' id='btn93' onclick='inc9()'>" + btn9[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Incorrect! </p>";
    minusTime()
}

function cor8() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[9] + "</p><button class='quiz-btn' id='btn90' onclick='cor9()'>" + btn9[0] + "</button><button class='quiz-btn' id='btn91' onclick='inc9()'>" + btn9[1] + "</button><button class='quiz-btn' id='btn92' onclick='inc9()'>" + btn9[2] + "</button><button class='quiz-btn' id='btn93' onclick='inc9()'>" + btn9[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Correct! </p>";
    finalScore += 4;
}

// questions 11 index 10
function inc9() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[10] + "</p><button class='quiz-btn' id='btn100' onclick='inc10()'>" + btn10[0] + "</button><button class='quiz-btn' id='btn101' onclick='cor10()'>" + btn10[1] + "</button><button class='quiz-btn' id='btn102' onclick='inc10()'>" + btn10[2] + "</button><button class='quiz-btn' id='btn103' onclick='inc10()'>" + btn10[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Incorrect! </p>";
    minusTime()
}

function cor9() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[10] + "</p><button class='quiz-btn' id='btn100' onclick='inc10()'>" + btn10[0] + "</button><button class='quiz-btn' id='btn101' onclick='cor10()'>" + btn10[1] + "</button><button class='quiz-btn' id='btn102' onclick='inc10()'>" + btn10[2] + "</button><button class='quiz-btn' id='btn103' onclick='inc10()'>" + btn10[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Correct! </p>";
    finalScore += 4;
}

// questions 12 index 11
function inc10() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[11] + "</p><button class='quiz-btn' id='btn110' onclick='inc11()'>" + btn11[0] + "</button><button class='quiz-btn' id='btn111' onclick='inc11()'>" + btn11[1] + "</button><button class='quiz-btn' id='btn112' onclick='inc11()'>" + btn11[2] + "</button><button class='quiz-btn' id='btn113' onclick='cor11()'>" + btn11[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Incorrect! </p>";
    minusTime()

}

function cor10() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[11] + "</p><button class='quiz-btn' id='btn110' onclick='inc11()'>" + btn11[0] + "</button><button class='quiz-btn' id='btn111' onclick='inc11()'>" + btn11[1] + "</button><button class='quiz-btn' id='btn112' onclick='inc11()'>" + btn11[2] + "</button><button class='quiz-btn' id='btn113' onclick='cor11()'>" + btn11[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Correct! </p>";
    finalScore += 4;

}

// questions 13 index 12
function inc11() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[12] + "</p><button class='quiz-btn' id='btn120' onclick='inc12()'>" + btn12[0] + "</button><button class='quiz-btn' id='btn121' onclick='cor12()'>" + btn12[1] + "</button><button class='quiz-btn' id='btn122' onclick='inc12()'>" + btn12[2] + "</button><button class='quiz-btn' id='btn123' onclick='inc12()'>" + btn12[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Incorrect! </p>";
   
}

function cor11() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[12] + "</p><button class='quiz-btn' id='btn120' onclick='inc12()'>" + btn12[0] + "</button><button class='quiz-btn' id='btn121' onclick='cor12()'>" + btn12[1] + "</button><button class='quiz-btn' id='btn122' onclick='inc12()'>" + btn12[2] + "</button><button class='quiz-btn' id='btn123' onclick='inc12()'>" + btn12[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Correct! </p>";
    finalScore += 4;

}

function inc12() {

    document.getElementById('container').innerHTML = "<h2>All done!<h2><p class='content-p'>Your final score is " + finalScore + ". <label for='finalScoreInput'>Enter initials:</label><input type='text' id='finalScoreInput' name='finalScoreInput' required minlength='2' maxlength='3'><input type='submit' class='quiz-btn' id='submit-btn' name='initials' onClick='scorePage()'></input>";

    document.getElementById('content').innerHTML = "<p> Incorrect! </p>";
    resetTimer();
    
}

function cor12() {
    finalScore += 4;
    document.getElementById('container').innerHTML = "<h2>All done!<h2><p class='content-p'>Your final score is " + finalScore + ". <label for='finalScoreInput'>Enter initials: </label><input type='text' id='finalScoreInput' name='finalScoreInput' minlength='2' maxlength='3'><input type='submit' class='quiz-btn' onClick='scorePage()'></input>";

    document.getElementById('content').innerHTML = "<p> Correct! </p>";
    resetTimer();
    
}

function scorePage() {
    // get the final score added up
    var x = document.getElementById("finalScoreInput").value; 

    // create the high score initial object
    var playerInfo = {
        name: x,
        score: finalScore 
    }

    var newScores = [];
       
        // load scores function has been deleted to change scope ??
       
        if (localStorage.getItem("playerInfo") === null) {
            var playerInfos = [];
    
        } else { 
            var playerInfos = localStorage.getItem("playerInfo")
            var playerInfos = JSON.parse(playerInfos);
            
                // loop through array of previous scores and push to new 
                for (var i = 0; i <= playerInfos.length - 1; i++) {
                newScores.push(playerInfos[i]);
                }
            }

    // push the current info to a new array      
    newScores.push(playerInfo);

    // hide timer 
    document.getElementById('timer').innerHTML = "<p></p>";


   // sort scores
    newScores.sort((a, b) => (a.score < b.score) ? 1 : -1);
    

    // append content as an UL and LI, and buttons
    var container = document.getElementById('container');
    document.getElementById('container').innerHTML = "<h2>High scores: " + playerInfo.score + " " + playerInfo.name + "</h2>";
    var ul = document.createElement('ul');
    ul.className = 'ul-style';
    container.appendChild(ul);
    
    for (var i=0; i <= newScores.length - 1; i++) {
       
        var li = document.createElement('li');
        li.className = 'li-style';
        li.textContent = newScores[i].name + ": " + newScores[i].score;
        ul.appendChild(li);
    }

    document.getElementById('container').innerHTML += "<button onclick='resetScore()' class='quiz-btn'>Reset Scores</button><button onclick='createQuizPage()' class='quiz-btn'>Return</button>";
    document.getElementById('content').innerHTML = "<p></p>";
    
    // last thing is setting scores
    function setScores() {
        localStorage.setItem("playerInfo", JSON.stringify(newScores));
    }    

    setScores();
}

    //   create quiz page
    var createQuizPage = function() {
        finalScore = 0;
        let div = document.querySelector('.container');
        div.innerHTML = "<H1 class='container-h1'>Code Quiz</h1><p class='content-p'>Try to answer questions correctly within the alloted time limit. Incorrect answers will deduct from your time and final score.</p> <button class='quiz-btn' onclick='startQuiz()'>Start Quiz</button>";
        document.getElementById('content').innerHTML = "<p></p>";

        const span = document.querySelector('.span-style');
        span.innerHTML = "<button class='quiz-btn2' onclick='inc12()'>View high scores</button>";
        span.className = 'span-style';

    }

createQuizPage();
