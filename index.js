const electron = require('electron');
const remote = electron.remote;

document.getElementById('close-button').addEventListener('click', () => {
    const window = remote.getCurrentWindow();
    window.close()
});
