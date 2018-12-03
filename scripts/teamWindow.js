const electron = require('electron');
const { ipcRenderer } = electron;

ipcRenderer.on('team:submit', function(e, teamData) {
    // Team 1
    document.getElementById('teamOneName').innerHTML = teamData.teamOneName;
    document.getElementById('teamOne').style.background = teamData.teamOneColour;
    // Team 2
    document.getElementById('teamTwoName').innerHTML = teamData.teamTwoName;
    document.getElementById('teamTwo').style.backgroundColor = teamData.teamTwoColour;
    // Team 3
    document.getElementById('teamThreeName').innerHTML = teamData.teamThreeName;
    document.getElementById('teamThree').style.backgroundColor = teamData.teamThreeColour;
    // Team 4
    document.getElementById('teamFourName').innerHTML = teamData.teamFourName;
    document.getElementById('teamFour').style.backgroundColor = teamData.teamFourColour;
});
