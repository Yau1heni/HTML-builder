const fs = require('fs');
const path = require('path');
const { stdout } = require('process');

const filePath = path.join(__dirname, 'text.txt');
const stream = fs.createReadStream(filePath, {encoding: 'utf-8'});

stream.on('data', (chunk) => stdout.write(chunk));

