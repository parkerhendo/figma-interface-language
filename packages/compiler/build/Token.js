"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorToken = void 0;
var tokens_1 = require("./tokens");
var Token = /** @class */ (function () {
    // line       :number; 
    function Token(type, value) {
        this.type = type;
        this.value = value;
    }
    return Token;
}());
exports.default = Token;
var ErrorToken = /** @class */ (function (_super) {
    __extends(ErrorToken, _super);
    function ErrorToken(message) {
        return _super.call(this, tokens_1.TokenType.TOKEN_ERROR, message) || this;
    }
    return ErrorToken;
}(Token));
exports.ErrorToken = ErrorToken;
