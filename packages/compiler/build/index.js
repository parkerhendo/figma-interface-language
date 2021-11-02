"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Parser_1 = __importDefault(require("./Parser"));
// (function() {
//   const file = process.argv.slice(2)[0];
//   fs.readFile(file, 'utf8', (err, data) => {
//     if (err) throw err; 
//     const parser = new Parser();
//     console.log(parser.parse(data));
//   });
// })();
var tests = [
    "../tests/define-interface.test.js"
];
var parser = new Parser_1.default();
function exec() {
    var program = "\n\n    describe interface as \"Sign Up\" { \"hello\" }\n\n  ";
    var prog = parser.parse(program);
    // console.log("hello world")
    console.log(JSON.stringify(prog, null, 2));
}
// manual text
exec();
