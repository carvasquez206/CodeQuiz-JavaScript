/*timer*/
var count = 600;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("Sorry! You're out of time!");
  }
}, 1000);

/*Quiz*/   
const quizData = [
{
    question: "Did Soulja Boy discover America?",
    a: "Of course!",
    b: "Big Facts!",
    c: "Drake stole his whole flow too",
    d: "All the above",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Helicopters Terminals Motorboats Lamborginis",
    d: "JSon Object Notation",
    correct: "a",
},
{
    question: "who?",
    a: "who",
    b: "who",
    c: "who",
    d: "Mike Jones",
    correct: "d"
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Helicopters Terminals Motorboats Lamborginis",
    d: "JSon Object Notation",
    correct: "a",
},


];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer');

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');   
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;


loadQuiz();
function loadQuiz() {

    deselectAnswers();
const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
        answer = answerEl.id;
        }
    });
return answer;
}

function deselectAnswers() {
answerEls.forEach((answerEl) => {
        answerEl.checked = false;
});
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
if (answer) {
        if (answer === quizData[currentQuiz].correct) {
        score++

    }

        currentQuiz++
    if (currentQuiz < quizData.length) {
            loadQuiz();
    } else {
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions correctly.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
