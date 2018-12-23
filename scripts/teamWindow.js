const electron = require('electron');
const { ipcRenderer } = electron;

ipcRenderer.on('team-submit', function(e, teamData) {

    // Check length of team name and resize accordingly
    // Team 1
    if (teamData.teamOneName.length > 15) {
        document.getElementById('teamOneName').style.fontSize = "6vh";
    } else {
        document.getElementById('teamOneName').style.fontSize = "8vh";
    }
    // Team 2
    if (teamData.teamTwoName.length > 15) {
        document.getElementById('teamTwoName').style.fontSize = "6vh";
    } else {
        document.getElementById('teamTwoName').style.fontSize = "8vh";
    }
    // Team 3
    if (teamData.teamThreeName.length > 15) {
        document.getElementById('teamThreeName').style.fontSize = "6vh";
    } else {
        document.getElementById('teamThreeName').style.fontSize = "8vh";
    }
    // Team 4
    if (teamData.teamFourName.length > 15) {
        document.getElementById('teamFourName').style.fontSize = "6vh";
    } else {
        document.getElementById('teamFourName').style.fontSize = "8vh";
    }

    // Team 1
    document.getElementById('teamOneName').innerHTML = teamData.teamOneName.toUpperCase();
    document.getElementById('teamOneScore').style.background = teamData.teamOneColour;
    document.getElementById('teamOneName').style.color = teamData.teamOneColour;
    // Team 2
    document.getElementById('teamTwoName').innerHTML = teamData.teamTwoName.toUpperCase();
    document.getElementById('teamTwoScore').style.background = teamData.teamTwoColour;
    document.getElementById('teamTwoName').style.color = teamData.teamTwoColour;
    // Team 3
    document.getElementById('teamThreeName').innerHTML = teamData.teamThreeName.toUpperCase();
    document.getElementById('teamThreeScore').style.background = teamData.teamThreeColour;
    document.getElementById('teamThreeName').style.color = teamData.teamThreeColour;
    // Team 4
    document.getElementById('teamFourName').innerHTML = teamData.teamFourName.toUpperCase();
    document.getElementById('teamFourScore').style.background = teamData.teamFourColour;
    document.getElementById('teamFourName').style.color = teamData.teamFourColour;
});

function addScoreToTeam(teamScoreElement, amount) {
    var scoreElement = document.getElementById(teamScoreElement);
    var currentScore = scoreElement.innerHTML;
    var newScore = parseInt(currentScore) + parseInt(amount);
    scoreElement.innerHTML = newScore;
}
