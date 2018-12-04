const electron = require('electron');
const { ipcRenderer } = electron;

ipcRenderer.on('team:submit', function(e, teamData) {
    // Team 1
    document.getElementById('teamOneName').innerHTML = teamData.teamOneName;
    //document.getElementById('teamOne').style.background = teamData.teamOneColour;
    document.getElementById('teamOneName').style.color = teamData.teamOneColour;
    // Team 2
    document.getElementById('teamTwoName').innerHTML = teamData.teamTwoName;
    //document.getElementById('teamTwo').style.background = teamData.teamTwoColour;
    document.getElementById('teamTwoName').style.color = teamData.teamTwoColour;
    // Team 3
    document.getElementById('teamThreeName').innerHTML = teamData.teamThreeName;
    //document.getElementById('teamThree').style.background = teamData.teamThreeColour;
    document.getElementById('teamThreeName').style.color = teamData.teamThreeColour;
    // Team 4
    document.getElementById('teamFourName').innerHTML = teamData.teamFourName;
    //document.getElementById('teamFour').style.background = teamData.teamFourColour;
    document.getElementById('teamFourName').style.color = teamData.teamFourColour;
});

function addScoreToTeam(teamScoreElement, amount) {
    var scoreElement = document.getElementById(teamScoreElement);
    var currentScore = scoreElement.innerHTML;
    var newScore = parseInt(currentScore) + parseInt(amount);
    scoreElement.innerHTML = newScore;
}
