const tinify = require('tinify');
const config = require('./compress.config');
const fs = require('fs');

tinify.key = config.key;
fileNames = [];

try {
  var data = fs.readFileSync('temp.txt', 'utf-8');
  fileNames = data.split('\n');
  console.log('data: ', data.split('\n'));
} catch (error) {
  throw error;
}

console.log('compressing.......');

fileNames.forEach((item) => {
  if (item) {
    const source = tinify.fromFile(item);
    nameArr = item.split('.');
    source.toFile(`${nameArr[0]}_${config.outputName}.${nameArr[1]}`);
  }
});

console.log('compression completed.......');
