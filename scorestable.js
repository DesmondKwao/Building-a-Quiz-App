const maxscoresList = document.getElementById("maxscoresList");
const maxscores = JSON.parse(localStorage.getItem("maxscores")) || [];

maxscoresList.innerHTML = maxscores
       .map(score => {
    //help display the name and score of the user
    return `<li class="maxscores">${score.name} - ${score.score}</li>`;
  })
  //joins both the name and marks of user and display it
.join("");
