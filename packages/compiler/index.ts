import * as fs from 'fs';

import Scanner from './Scanner';
import Parser from './Parser';

(function() {
  const file = process.argv.slice(2)[0];
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err; 
    const parser = new Parser();

    console.log(parser.parse(data));
  });
})();