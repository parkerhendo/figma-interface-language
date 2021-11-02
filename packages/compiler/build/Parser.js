"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Scanner_1 = __importDefault(require("./Scanner"));
var tokens_1 = require("./tokens");
var Parser = /** @class */ (function () {
    function Parser() {
        this.source = '';
        this.scanner = new Scanner_1.default();
        this.advance = null;
    }
    Parser.prototype.parse = function (str) {
        this.source = str;
        this.scanner.init(str);
        this.advance = this.scanner.advance();
        return this.Document();
    };
    Parser.prototype.Document = function () {
        return {
            type: 'Document',
            body: this.DeclarationList()
        };
    };
    Parser.prototype.DeclarationList = function (stopAdvance) {
        if (stopAdvance === void 0) { stopAdvance = null; }
        var declarationList = [this.Declaration()];
        // while (this.advance != null && this.advance.type !== stopAdvance) {
        // declarationList.push(this.Declaration() as Declaration)
        // }
        return declarationList;
    };
    Parser.prototype.Declaration = function () {
        var _a;
        // console.log(this.advance?.type);
        switch ((_a = this.advance) === null || _a === void 0 ? void 0 : _a.type) {
            case tokens_1.TokenType.TOKEN_DESCRIBE: {
                this.eat(tokens_1.TokenType.TOKEN_DESCRIBE, "Expected descriptor before type.");
                var descriptor = this.advance.type;
                this.eat(tokens_1.TokenType.TOKEN_INTERFACE, "Expected type after descriptor");
                this.eat(tokens_1.TokenType.TOKEN_AS, "Expected 'as' before name.");
                var name_1 = this.eat(tokens_1.TokenType.TOKEN_STRING, "Expected STRING after 'as'");
                var body = this.advance.value !== tokens_1.TokenType.TOKEN_RIGHT_BRACE ? this.DeclarationBody() : [];
                return {
                    type: tokens_1.TokenType.TOKEN_DESCRIBE,
                    descriptor: descriptor,
                    params: { name: name_1.value.slice(1, -1) },
                    body: body
                };
            }
        }
    };
    Parser.prototype.DeclarationBody = function () {
        var _a, _b;
        // console.log("======= Declaration Body ========");
        this.eat(tokens_1.TokenType.TOKEN_LEFT_BRACE, "Expected '{' before block");
        var body = ((_a = this.advance) === null || _a === void 0 ? void 0 : _a.type) === tokens_1.TokenType.TOKEN_RIGHT_BRACE ? null : (_b = this.advance) === null || _b === void 0 ? void 0 : _b.value.slice(1, -1);
        this.eat(tokens_1.TokenType.TOKEN_STRING, "Value should be a string.");
        this.eat(tokens_1.TokenType.TOKEN_RIGHT_BRACE, "Expected '}' after block.");
        return body;
    };
    Parser.prototype.eat = function (type, message) {
        var token = this.advance;
        if ((token === null || token === void 0 ? void 0 : token.type) == null) {
            this.advance = this.scanner.advance();
        }
        if ((token === null || token === void 0 ? void 0 : token.type) != type) {
            throw new SyntaxError(message);
        }
        this.advance = this.scanner.advance();
        return token;
    };
    return Parser;
}());
exports.default = Parser;
