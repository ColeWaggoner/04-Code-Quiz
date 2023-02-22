function showLeaderboard() {
  var list = JSON.parse(localStorage.getItem("leaderboard"));
  list.sort(function (a, b) {
    return b.score - a.score;
  });
  for (var i = 0; i < list.length; i++) {
    var li = document.createElement("li");
    li.textContent = list[i].name + " - " + list[i].score;
    document.getElementById("scores").appendChild(li);
  }
}

function resetList() {
  localStorage.removeItem("leaderboard");
  window.location.reload();
}

document.querySelector("#clear").addEventListener("click", resetList);

showLeaderboard();
