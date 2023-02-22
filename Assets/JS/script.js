var questionNum = 0;
var timer;
var time = 60;

function quizStart(event) {
  event.stopPropagation();
  document.getElementById("start").className = "hidden";
  document.getElementById("quiz").className = "show";
  getQuiz();
  // timerStart();
}

function getQuiz() {
  var quizValue = quiz[questionNum];
  document.getElementById("question").textContent = quizValue.title;
  document.getElementById("answers").innerHTML = "";
  for (var i = 0; i < quizValue.options.length; i++) {
    var button = document.createElement("button");
    button.textContent = quizValue.options[i];
    button.id="options";
    button.setAttribute("ans-button", i);
    document.querySelector("#answers").appendChild(button);
  }
}



document.querySelector("#start").addEventListener("click", quizStart);