const electron = require('electron');
const { ipcRenderer } = electron;

function submitTeamData() {
    // Team 1
    var teamOneName = document.getElementById('teamOneName').value;
    var teamOneColour = document.getElementById('teamOneColour').value;
    // Team 2
    var teamTwoName = document.getElementById('teamTwoName').value;
    var teamTwoColour = document.getElementById('teamTwoColour').value;
    // Team 3
    var teamThreeName = document.getElementById('teamThreeName').value;
    var teamThreeColour = document.getElementById('teamThreeColour').value;
    // Team 4
    var teamFourName = document.getElementById('teamFourName').value;
    var teamFourColour = document.getElementById('teamFourColour').value;

    const teamData = {
        // Team 1
        teamOneName: teamOneName,
        teamOneColour: teamOneColour,
        // Team 2
        teamTwoName: teamTwoName,
        teamTwoColour: teamTwoColour,
        // Team 3
        teamThreeName: teamThreeName,
        teamThreeColour: teamThreeColour,
        // Team 4
        teamFourName: teamFourName,
        teamFourColour: teamFourColour
    };

    ipcRenderer.send('team:submit', teamData);
}
