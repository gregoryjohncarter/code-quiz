
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


function startQuiz() {

// create timer on page

    var count=120;

//1000 will  run it every 1 second

    var counter=setInterval(timer, 1000); 

    function timer() {
        count=count-1;
        if (count <= 0) {
        clearInterval(counter);

        //counter ended, do something here
        return;
        }
    document.getElementById("timer").innerHTML=count + " secs"; 
    }
   
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[0] + "</p><button class='quiz-btn' id='btn00' onclick='inc0()'>" + btn0[0] + "</button><button class='quiz-btn' id='btn01' onclick='inc0()'>" + btn0[1] + "</button><button class='quiz-btn' id='btn02' onclick='cor0()'>" + btn0[2] + "</button><button class='quiz-btn' id='btn03' onclick='inc0()'>" + btn0[3] + "</button>";
    
}

// questions 2 index 1
function inc0() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[1] + "</p><button class='quiz-btn' id='btn10' onclick='inc1()'>" + btn1[0] + "</button><button class='quiz-btn' id='btn11' onclick='cor1()'>" + btn1[1] + "</button><button class='quiz-btn' id='btn12' onclick='inc1()'>" + btn1[2] + "</button><button class='quiz-btn' id='btn13' onclick='inc1()'>" + btn1[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Incorrect! </p>"
}

function cor0() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[1] + "</p><button class='quiz-btn' id='btn10' onclick='inc1()'>" + btn1[0] + "</button><button class='quiz-btn' id='btn11' onclick='cor1()'>" + btn1[1] + "</button><button class='quiz-btn' id='btn12' onclick='inc1()'>" + btn1[2] + "</button><button class='quiz-btn' id='btn13' onclick='inc1()'>" + btn1[3] + "</button>";

    document.getElementById('content').innerHTML = "<p> Correct! </p>"
}

// questions 3 index 2
function inc1() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[2] + "</p><button class='quiz-btn' id='btn20' onclick='inc2()'>" + btn2[0] + "</button><button class='quiz-btn' id='btn21' onclick='cor2()'>" + btn2[1] + "</button><button class='quiz-btn' id='btn22' onclick='inc2()'>" + btn2[2] + "</button><button class='quiz-btn' id='btn23' onclick='inc2()'>" + btn2[3] + "</button>";
}

function cor1() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[2] + "</p><button class='quiz-btn' id='btn20' onclick='inc2()'>" + btn2[0] + "</button><button class='quiz-btn' id='btn21' onclick='cor2()'>" + btn2[1] + "</button><button class='quiz-btn' id='btn22' onclick='inc2()'>" + btn2[2] + "</button><button class='quiz-btn' id='btn23' onclick='inc2()'>" + btn2[3] + "</button>";
}

// questions 4 index 3
function inc2() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[3] + "</p><button class='quiz-btn' id='btn30' onclick='inc3()'>" + btn3[0] + "</button><button class='quiz-btn' id='btn31' onclick='cor3()'>" + btn3[1] + "</button><button class='quiz-btn' id='btn32' onclick='inc3()'>" + btn3[2] + "</button><button class='quiz-btn' id='btn33' onclick='inc3()'>" + btn3[3] + "</button>";
}

function cor2() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[3] + "</p><button class='quiz-btn' id='btn30' onclick='inc3()'>" + btn3[0] + "</button><button class='quiz-btn' id='btn31' onclick='cor3()'>" + btn3[1] + "</button><button class='quiz-btn' id='btn32' onclick='inc3()'>" + btn3[2] + "</button><button class='quiz-btn' id='btn33' onclick='inc3()'>" + btn3[3] + "</button>";
}

// questions 5 index 4
function inc3() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[4] + "</p><button class='quiz-btn' id='btn40' onclick='inc4()'>" + btn4[0] + "</button><button class='quiz-btn' id='btn41' onclick='cor4()'>" + btn4[1] + "</button><button class='quiz-btn' id='btn42' onclick='inc4()'>" + btn4[2] + "</button><button class='quiz-btn' id='btn43' onclick='inc4()'>" + btn4[3] + "</button>";
}

function cor3() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[4] + "</p><button class='quiz-btn' id='btn40' onclick='inc4()'>" + btn4[0] + "</button><button class='quiz-btn' id='btn41' onclick='cor4()'>" + btn4[1] + "</button><button class='quiz-btn' id='btn42' onclick='inc4()'>" + btn4[2] + "</button><button class='quiz-btn' id='btn43' onclick='inc4()'>" + btn4[3] + "</button>";
}

// questions 6 index 5
function inc4() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[5] + "</p><button class='quiz-btn' id='btn50' onclick='inc5()'>" + btn5[0] + "</button><button class='quiz-btn' id='btn51' onclick='inc5()'>" + btn5[1] + "</button><button class='quiz-btn' id='btn52' onclick='inc5()'>" + btn5[2] + "</button><button class='quiz-btn' id='btn53' onclick='cor5()'>" + btn5[3] + "</button>";
}

function cor4() {
    document.getElementById('container').innerHTML = "<p class='content-p'>" + questionSource[5] + "</p><button class='quiz-btn' id='btn50' onclick='inc5()'>" + btn5[0] + "</button><button class='quiz-btn' id='btn51' onclick='inc5()'>" + btn5[1] + "</button><button class='quiz-btn' id='btn52' onclick='inc5()'>" + btn5[2] + "</button><button class='quiz-btn' id='btn53' onclick='cor5()'>" + btn5[3] + "</button>";
}




//   create quiz page
var createQuizPage = function() {
    let div = document.querySelector('.container');
    div.innerHTML += "<H1 class='container-h1'>Code Quiz</h1><p class='content-p'>Try to answer questions correctly within the alloted time limit. Incorrect answers will deduct from your time and final score.</p> <button class='quiz-btn' onclick='startQuiz()'>Start Quiz</button>";
   
    
}

createQuizPage();
