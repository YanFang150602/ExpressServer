const fs = require('fs');
const path = require('path');

const getFilename = (url) => {
    return url.replace(new RegExp('/','g'), '')
              .replace(/:/g, '') + '.json';
}

const readFileSync = (file) => {
    console.log('readFileSync:' + file);
    const data = fs.readFileSync(file);
    return JSON.parse(data.toString());
}

const getJSONData = (url) => {
    let filename = getFilename(url);
    let file = path.join(process.cwd(), 'data', filename);
    return readFileSync(file);
}

module.exports = {
    readData: getJSONData
}
