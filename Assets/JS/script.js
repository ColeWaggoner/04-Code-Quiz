var questionNum = 0;
var timer;
var time = 60;

function quizStart(event) {
  event.stopPropagation();
  document.getElementById("start").className = "hidden";
  document.getElementById("help").className = "hidden";
  document.getElementById("quiz").className = "show";
  getQuiz();
  timerStart();
}

function timerStart() {
  // update time
  timer = setInterval(function () {
    time--;
    document.getElementById("secs").textContent = time;
    if (time <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

function getQuiz() {
  var quizValue = quiz[questionNum];
  document.getElementById("question").textContent = quizValue.title;
  document.getElementById("answers").innerHTML = "";
  for (var i = 0; i < quizValue.options.length; i++) {
    var button = document.createElement("button");
    button.textContent = quizValue.options[i];
    button.id = "options";
    button.setAttribute("ans", i);
    document.querySelector("#answers").appendChild(button);
  }
}

function answerAttempt(event) {
  var element = event.target;
  if (element.matches("button") !== true) {
  } else {
    var quizValue = quiz[questionNum];
    if (quizValue.answer !== quizValue.options[element.getAttribute("ans")]) {
      if (time > 5) {
        time -= 5;
        document.getElementById("secs").textContent = time;
      } else {
        time -= time;
        document.getElementById("secs").textContent = time;
        endQuiz();
      }
      document.getElementById("help").textContent = "Try Again!";
      document.getElementById("help").className = "show";
    } else {
      console.log("Correct Answer");
      document.getElementById("help").textContent = "Right!";
      document.getElementById("help").className = "show";
      questionNum++;
      if (questionNum > 3) {
        endQuiz();
      } else {
        getQuiz();
      }
    }
  }
}

function endQuiz() {
  clearInterval(timer);
  if (time <= 0) {
    document.getElementById("reply").textContent = ("Out of Time!");}
    else{document.getElementById("reply").textContent = "Well Done!"};
  document.getElementById("final").className = "show";
  document.getElementById("finalScore").textContent = time;
  document.getElementById("quiz").className = "hidden";
  document.getElementById("help").className = "hidden";
}

document.querySelector("#start").addEventListener("click", quizStart);
document.querySelector("#answers").addEventListener("click", answerAttempt);
