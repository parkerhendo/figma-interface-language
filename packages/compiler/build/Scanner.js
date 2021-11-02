"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var tokens_1 = require("./tokens");
var Token_1 = __importStar(require("./Token"));
/**
 * Tokenizer Spec.
 */
var Spec = [
    // -----------------------------------------------
    // Whitespaces:
    [/^\s+/, null],
    // [/^\n/, "NEW_LINE"],
    // -----------------------------------------------
    // Comments:
    // Skip single-line comments:
    // [/^\/\/.*/, null],
    // Skip multi-line comments:
    // [/^\/\*[\s\S]*?\*\//, null],
    // -----------------------------------------------
    // Symbols, delimiters:
    [/^;/, tokens_1.TokenType.TOKEN_SEMICOLEN],
    [/^\{/, tokens_1.TokenType.TOKEN_LEFT_BRACE],
    [/^\}/, tokens_1.TokenType.TOKEN_RIGHT_BRACE],
    [/^\(/, tokens_1.TokenType.TOKEN_LEFT_PAREN],
    [/^\)/, tokens_1.TokenType.TOKEN_RIGHT_PAREN],
    [/^\,/, tokens_1.TokenType.TOKEN_COMMA],
    [/^\:/, tokens_1.TokenType.TOKEN_COLEN],
    // -----------------------------------------------
    // Keywords:
    [/^\bdeclare\b/, tokens_1.TokenType.TOKEN_DECLARE],
    [/^\bdescribe\b/, tokens_1.TokenType.TOKEN_DESCRIBE],
    [/^\bas\b/, tokens_1.TokenType.TOKEN_AS],
    // -----------------------------------------------
    // Type:
    [/^\bcomponent\b/, tokens_1.TokenType.TOKEN_COMPONENT],
    [/^\binterface\b/, tokens_1.TokenType.TOKEN_INTERFACE],
    [/^\bflow\b/, tokens_1.TokenType.TOKEN_FLOW],
    // -----------------------------------------------
    // Identifier:
    [/^\w+/, tokens_1.TokenType.TOKEN_IDENTIFIER],
    // -----------------------------------------------
    // Strings:
    [/"[^"]*"/, tokens_1.TokenType.TOKEN_STRING],
    [/'[^']*'/, tokens_1.TokenType.TOKEN_STRING],
];
var Scanner = /** @class */ (function () {
    function Scanner() {
        this.source = '';
        this.cursor = 0;
        this.line = 0;
    }
    Scanner.prototype.init = function (str) {
        // console.log(str);
        this.source = str;
        this.cursor = 0;
        this.line = 1;
    };
    Scanner.prototype.isAtEnd = function () {
        return this.cursor === this.source.length;
    };
    Scanner.prototype.hasMore = function () {
        return this.cursor < this.source.length;
    };
    Scanner.prototype.advance = function () {
        if (!this.hasMore())
            return new Token_1.default(tokens_1.TokenType.TOKEN_EOF, "\0");
        var string = this.source.slice(this.cursor);
        for (var _i = 0, Spec_1 = Spec; _i < Spec_1.length; _i++) {
            var _a = Spec_1[_i], regexp = _a[0], type = _a[1];
            var val = this.match(regexp, string);
            if (val == null)
                continue;
            if (type == null)
                return this.advance();
            var token = new Token_1.default(type, val);
            return token;
        }
        return new Token_1.ErrorToken("Unexpected token: \"" + string[0]);
    };
    Scanner.prototype.match = function (regexp, string) {
        if (string == null)
            return null;
        var matched = regexp.exec(string);
        if (matched == null)
            return null;
        this.cursor += matched[0].length;
        return matched[0];
    };
    return Scanner;
}());
exports.default = Scanner;
