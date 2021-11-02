import * as fs from 'fs';
import {strict as assert} from 'assert';

import Scanner from './Scanner';
import Parser from './Parser';

// (function() {
//   const file = process.argv.slice(2)[0];
//   fs.readFile(file, 'utf8', (err, data) => {
//     if (err) throw err; 
//     const parser = new Parser();

//     console.log(parser.parse(data));
//   });
// })();

const tests = [
  "../tests/define-interface.test.js"
]

const parser = new Parser();

function exec() {
  const program = `

    describe interface as "Sign Up" { "hello" }

  `;

  const prog = parser.parse(program);

  // console.log("hello world")
  console.log(JSON.stringify(prog, null, 2));
}

// manual text
exec();
