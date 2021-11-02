"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenType = void 0;
var TokenType;
(function (TokenType) {
    TokenType[TokenType["TOKEN_EOF"] = 0] = "TOKEN_EOF";
    TokenType[TokenType["TOKEN_ERROR"] = 1] = "TOKEN_ERROR";
    TokenType[TokenType["TOKEN_IDENTIFIER"] = 2] = "TOKEN_IDENTIFIER";
    // Keywords
    TokenType[TokenType["TOKEN_DEFINE"] = 3] = "TOKEN_DEFINE";
    TokenType[TokenType["TOKEN_DESCRIBE"] = 4] = "TOKEN_DESCRIBE";
    TokenType[TokenType["TOKEN_DECLARE"] = 5] = "TOKEN_DECLARE";
    // TYPES
    TokenType[TokenType["TOKEN_COMPONENT"] = 6] = "TOKEN_COMPONENT";
    TokenType[TokenType["TOKEN_INTERFACE"] = 7] = "TOKEN_INTERFACE";
    TokenType[TokenType["TOKEN_FLOW"] = 8] = "TOKEN_FLOW";
    // Single character
    TokenType[TokenType["TOKEN_LEFT_BRACE"] = 9] = "TOKEN_LEFT_BRACE";
    TokenType[TokenType["TOKEN_RIGHT_BRACE"] = 10] = "TOKEN_RIGHT_BRACE";
    TokenType[TokenType["TOKEN_LEFT_PAREN"] = 11] = "TOKEN_LEFT_PAREN";
    TokenType[TokenType["TOKEN_RIGHT_PARENT"] = 12] = "TOKEN_RIGHT_PARENT";
    TokenType[TokenType["TOKEN_LEFT_BRACKET"] = 13] = "TOKEN_LEFT_BRACKET";
    TokenType[TokenType["TOKEN_RIGHT_BRACKET"] = 14] = "TOKEN_RIGHT_BRACKET";
    TokenType[TokenType["TOKEN_DOUBLE_QUOTE"] = 15] = "TOKEN_DOUBLE_QUOTE";
    TokenType[TokenType["TOKEN_SINGLE_QUOTE"] = 16] = "TOKEN_SINGLE_QUOTE"; // '"' and '''
})(TokenType = exports.TokenType || (exports.TokenType = {}));
