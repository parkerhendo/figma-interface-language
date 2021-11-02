"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.interpret = void 0;
var Parser_1 = __importDefault(require("./Parser"));
function exec() {
    var parser = new Parser_1.default();
    var program = "\n\n    describe interface as \"Sign Up\" { \"hello\" }\n\n  ";
    var prog = parser.parse(program);
    console.log(JSON.stringify(prog, null, 2));
}
// manual text
exec();
function interpret(source) {
    var parser = new Parser_1.default();
    return parser.parse(source);
}
exports.interpret = interpret;
