"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenType = void 0;
var TokenType;
(function (TokenType) {
    TokenType["TOKEN_EOF"] = "\0";
    TokenType["TOKEN_ERROR"] = "TOKEN_ERROR";
    TokenType["TOKEN_IDENTIFIER"] = "TOKEN_IDENTIFIER";
    // Keywords
    TokenType["TOKEN_DESCRIBE"] = "TOKEN_DESCRIBE";
    TokenType["TOKEN_DECLARE"] = "TOKEN_DECLARE";
    TokenType["TOKEN_AS"] = "TOKEN_AS";
    // TYPES
    TokenType["TOKEN_COMPONENT"] = "TOKEN_COMPONENT";
    TokenType["TOKEN_INTERFACE"] = "TOKEN_INTERFACE";
    TokenType["TOKEN_FLOW"] = "TOKEN_FLOW";
    // Single character
    TokenType["TOKEN_STRING"] = "TOKEN_STRING";
    TokenType["TOKEN_LEFT_BRACE"] = "TOKEN_LEFT_BRACE";
    TokenType["TOKEN_RIGHT_BRACE"] = "TOKEN_RIGHT_BRACE";
    TokenType["TOKEN_LEFT_PAREN"] = "TOKEN_LEFT_PAREN";
    TokenType["TOKEN_RIGHT_PAREN"] = "TOKEN_RIGHT_PAREN";
    TokenType["TOKEN_LEFT_BRACKET"] = "TOKEN_LEFT_BRACKET";
    TokenType["TOKEN_RIGHT_BRACKET"] = "TOKEN_RIGHT_BRACKET";
    TokenType["TOKEN_SEMICOLEN"] = "TOKEN_SEMICOLEN";
    TokenType["TOKEN_COLEN"] = "TOKEN_COLEN";
    TokenType["TOKEN_COMMA"] = "TOKEN_COMMA"; // ''
})(TokenType = exports.TokenType || (exports.TokenType = {}));
