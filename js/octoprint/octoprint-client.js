let SERVER_URL = 'http://10.0.2.19/api';
let API_KEY = '';

//Octopi API
async function getVersion() {
    var data = await octGet('version');
    return JSON.parse(data);
}

async function getCurrentJob() {
    var data = await octGet('job');
    return JSON.parse(data);
}

async function getPrinterState() {
    var data = await octGet('printer');
    return JSON.parse(data);
}

//helpers
async function octGet(path) {
    var response = await fetch(SERVER_URL + '/' + path, {
        method: 'GET',
        headers: {
            'X-Api-Key': API_KEY
        }
    });
    var data = await response.text();
    return data;
}
