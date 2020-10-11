const username = document.getElementById('username');
const saveScoreButton = document.getElementById('saveScoreButton');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore'); //mostRecentScore and allow it to be displayed
const maxscores = JSON.parse(localStorage.getItem('maxscores')) || []; //saving score in localStorage as an intrger not a string using Json

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreButton.disabled = !username.value;
});
saveHighScore = (s) => {
    s.preventDefault();
    const score ={
      score:mostRecentScore,
      name: username.value,
    };
    maxscores.push(score);
    maxscores.sort((a,b)=>b.score - a.score); //this is ti sort scorestable
    maxscores.splice(5); //to hold and display only 5 hightest users Scores
    localStorage.setItem('maxscores', JSON.stringify(maxscores));
    window.location.assign('index.html');
};
