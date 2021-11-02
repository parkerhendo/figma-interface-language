(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function on(name, handler) {
    const id = `${currentId}`;
    currentId += 1;
    eventHandlers[id] = { handler, name };
    return function() {
      delete eventHandlers[id];
    };
  }
  function once(name, handler) {
    let done = false;
    return on(name, function(...args) {
      if (done === true) {
        return;
      }
      done = true;
      handler(...args);
    });
  }
  function invokeEventHandler(name, args) {
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
      }
    }
  }
  var eventHandlers, currentId;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      currentId = 0;
      if (typeof window === "undefined") {
        figma.ui.onmessage = function([name, ...args]) {
          invokeEventHandler(name, args);
        };
      } else {
        window.onmessage = function(event) {
          const [name, ...args] = event.data.pluginMessage;
          invokeEventHandler(name, args);
        };
      }
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/node/load-fonts-async.js
  async function loadFontsAsync(nodes) {
    const result = {};
    for (const node of nodes) {
      switch (node.type) {
        case "CONNECTOR":
        case "SHAPE_WITH_TEXT":
        case "STICKY": {
          collectFontsUsedInNode(node.text, result);
          break;
        }
        case "TEXT": {
          collectFontsUsedInNode(node, result);
          break;
        }
      }
    }
    await Promise.all(Object.values(result).map(function(font) {
      return figma.loadFontAsync(font);
    }));
  }
  function collectFontsUsedInNode(node, result) {
    const length = node.characters.length;
    if (length === 0) {
      const fontName = node.fontName;
      const key = createKey(fontName);
      if (key in result) {
        return;
      }
      result[key] = fontName;
      return;
    }
    let i = -1;
    while (++i < length) {
      const fontName = node.getRangeFontName(i, i + 1);
      const key = createKey(fontName);
      if (key in result) {
        continue;
      }
      result[key] = fontName;
    }
  }
  function createKey(fontName) {
    return `${fontName.family}-${fontName.style}`;
  }
  var init_load_fonts_async = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/node/load-fonts-async.js"() {
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/ui.js
  function showUI(options, data) {
    if (typeof __html__ === "undefined") {
      throw new Error("No UI defined");
    }
    const html = `<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command === "undefined" ? "" : figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof data === "undefined" ? {} : data)};${__html__}<\/script>`;
    figma.showUI(html, options);
  }
  var init_ui = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/ui.js"() {
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
      init_load_fonts_async();
      init_ui();
    }
  });

  // ../compiler/build/tokens.js
  var require_tokens = __commonJS({
    "../compiler/build/tokens.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TokenType = void 0;
      var TokenType;
      (function(TokenType2) {
        TokenType2["TOKEN_EOF"] = "\0";
        TokenType2["TOKEN_ERROR"] = "TOKEN_ERROR";
        TokenType2["TOKEN_IDENTIFIER"] = "TOKEN_IDENTIFIER";
        TokenType2["TOKEN_DESCRIBE"] = "TOKEN_DESCRIBE";
        TokenType2["TOKEN_DECLARE"] = "TOKEN_DECLARE";
        TokenType2["TOKEN_AS"] = "TOKEN_AS";
        TokenType2["TOKEN_COMPONENT"] = "TOKEN_COMPONENT";
        TokenType2["TOKEN_INTERFACE"] = "TOKEN_INTERFACE";
        TokenType2["TOKEN_FLOW"] = "TOKEN_FLOW";
        TokenType2["TOKEN_STRING"] = "TOKEN_STRING";
        TokenType2["TOKEN_LEFT_BRACE"] = "TOKEN_LEFT_BRACE";
        TokenType2["TOKEN_RIGHT_BRACE"] = "TOKEN_RIGHT_BRACE";
        TokenType2["TOKEN_LEFT_PAREN"] = "TOKEN_LEFT_PAREN";
        TokenType2["TOKEN_RIGHT_PAREN"] = "TOKEN_RIGHT_PAREN";
        TokenType2["TOKEN_LEFT_BRACKET"] = "TOKEN_LEFT_BRACKET";
        TokenType2["TOKEN_RIGHT_BRACKET"] = "TOKEN_RIGHT_BRACKET";
        TokenType2["TOKEN_SEMICOLEN"] = "TOKEN_SEMICOLEN";
        TokenType2["TOKEN_COLEN"] = "TOKEN_COLEN";
        TokenType2["TOKEN_COMMA"] = "TOKEN_COMMA";
      })(TokenType = exports.TokenType || (exports.TokenType = {}));
    }
  });

  // ../compiler/build/Token.js
  var require_Token = __commonJS({
    "../compiler/build/Token.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ErrorToken = void 0;
      var tokens_1 = require_tokens();
      var Token = function() {
        function Token2(type, value) {
          this.type = type;
          this.value = value;
        }
        return Token2;
      }();
      exports.default = Token;
      var ErrorToken = function(_super) {
        __extends(ErrorToken2, _super);
        function ErrorToken2(message) {
          return _super.call(this, tokens_1.TokenType.TOKEN_ERROR, message) || this;
        }
        return ErrorToken2;
      }(Token);
      exports.ErrorToken = ErrorToken;
    }
  });

  // ../compiler/build/Scanner.js
  var require_Scanner = __commonJS({
    "../compiler/build/Scanner.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var tokens_1 = require_tokens();
      var Token_1 = __importStar(require_Token());
      var Spec = [
        [/^\s+/, null],
        [/^;/, tokens_1.TokenType.TOKEN_SEMICOLEN],
        [/^\{/, tokens_1.TokenType.TOKEN_LEFT_BRACE],
        [/^\}/, tokens_1.TokenType.TOKEN_RIGHT_BRACE],
        [/^\(/, tokens_1.TokenType.TOKEN_LEFT_PAREN],
        [/^\)/, tokens_1.TokenType.TOKEN_RIGHT_PAREN],
        [/^\,/, tokens_1.TokenType.TOKEN_COMMA],
        [/^\:/, tokens_1.TokenType.TOKEN_COLEN],
        [/^\bdeclare\b/, tokens_1.TokenType.TOKEN_DECLARE],
        [/^\bdescribe\b/, tokens_1.TokenType.TOKEN_DESCRIBE],
        [/^\bas\b/, tokens_1.TokenType.TOKEN_AS],
        [/^\bcomponent\b/, tokens_1.TokenType.TOKEN_COMPONENT],
        [/^\binterface\b/, tokens_1.TokenType.TOKEN_INTERFACE],
        [/^\bflow\b/, tokens_1.TokenType.TOKEN_FLOW],
        [/^\w+/, tokens_1.TokenType.TOKEN_IDENTIFIER],
        [/"[^"]*"/, tokens_1.TokenType.TOKEN_STRING],
        [/'[^']*'/, tokens_1.TokenType.TOKEN_STRING]
      ];
      var Scanner = function() {
        function Scanner2() {
          this.source = "";
          this.cursor = 0;
          this.line = 0;
        }
        Scanner2.prototype.init = function(str) {
          this.source = str;
          this.cursor = 0;
          this.line = 1;
        };
        Scanner2.prototype.isAtEnd = function() {
          return this.cursor === this.source.length;
        };
        Scanner2.prototype.hasMore = function() {
          return this.cursor < this.source.length;
        };
        Scanner2.prototype.advance = function() {
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
          return new Token_1.ErrorToken('Unexpected token: "' + string[0]);
        };
        Scanner2.prototype.match = function(regexp, string) {
          if (string == null)
            return null;
          var matched = regexp.exec(string);
          if (matched == null)
            return null;
          this.cursor += matched[0].length;
          return matched[0];
        };
        return Scanner2;
      }();
      exports.default = Scanner;
    }
  });

  // ../compiler/build/Parser.js
  var require_Parser = __commonJS({
    "../compiler/build/Parser.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Scanner_1 = __importDefault(require_Scanner());
      var tokens_1 = require_tokens();
      var Parser = function() {
        function Parser2() {
          this.source = "";
          this.scanner = new Scanner_1.default();
          this.advance = null;
        }
        Parser2.prototype.parse = function(str) {
          this.source = str;
          this.scanner.init(str);
          this.advance = this.scanner.advance();
          return this.Document();
        };
        Parser2.prototype.Document = function() {
          return {
            type: "Document",
            body: this.DeclarationList()
          };
        };
        Parser2.prototype.DeclarationList = function(stopAdvance) {
          if (stopAdvance === void 0) {
            stopAdvance = null;
          }
          var declarationList = [this.Declaration()];
          return declarationList;
        };
        Parser2.prototype.Declaration = function() {
          var _a;
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
                descriptor,
                params: { name: name_1.value.slice(1, -1) },
                body
              };
            }
          }
        };
        Parser2.prototype.DeclarationBody = function() {
          var _a, _b;
          this.eat(tokens_1.TokenType.TOKEN_LEFT_BRACE, "Expected '{' before block");
          var body = ((_a = this.advance) === null || _a === void 0 ? void 0 : _a.type) === tokens_1.TokenType.TOKEN_RIGHT_BRACE ? null : (_b = this.advance) === null || _b === void 0 ? void 0 : _b.value.slice(1, -1);
          this.eat(tokens_1.TokenType.TOKEN_STRING, "Value should be a string.");
          this.eat(tokens_1.TokenType.TOKEN_RIGHT_BRACE, "Expected '}' after block.");
          return body;
        };
        Parser2.prototype.eat = function(type, message) {
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
        return Parser2;
      }();
      exports.default = Parser;
    }
  });

  // ../compiler/build/index.js
  var require_build = __commonJS({
    "../compiler/build/index.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.interpret = void 0;
      var Parser_1 = __importDefault(require_Parser());
      function exec() {
        var parser = new Parser_1.default();
        var program = '\n\n    describe interface as "Sign Up" { "hello" }\n\n  ';
        var prog = parser.parse(program);
        console.log(JSON.stringify(prog, null, 2));
      }
      exec();
      function interpret2(source) {
        var parser = new Parser_1.default();
        return parser.parse(source);
      }
      exports.interpret = interpret2;
    }
  });

  // src/main.ts
  var main_exports = {};
  __export(main_exports, {
    default: () => main_default
  });
  async function buildInterface(json) {
    const type = json.body[0].type;
    const descriptor = json.body[0].descriptor;
    const params = json.body[0].params;
    const content = json.body[0].body;
    console.log(typeof content);
    let frame;
    if (descriptor == "TOKEN_INTERFACE") {
      frame = figma.createFrame();
      frame.name = params.name;
      frame.layoutMode = "VERTICAL";
      frame.primaryAxisAlignItems = "CENTER";
      frame.counterAxisAlignItems = "CENTER";
      frame.resize(128, 128);
    }
    if (typeof content === "string") {
      const text = figma.createText();
      await loadFontsAsync([text]);
      text.characters = content;
      text.fontSize = 16;
      frame.appendChild(text);
    }
    return frame;
  }
  function main_default() {
    once("INSERT_CODE", async function(code) {
      const parsedCode = (0, import_compiler.interpret)(code);
      const result = await buildInterface(parsedCode);
      figma.viewport.scrollAndZoomIntoView(figma.setSelection(result));
      figma.closePlugin();
    });
    showUI({ width: 400, height: 720 });
  }
  var import_compiler;
  var init_main = __esm({
    "src/main.ts"() {
      init_lib();
      import_compiler = __toModule(require_build());
    }
  });

  // <stdin>
  var modules = { "src/main.ts--default": (init_main(), main_exports)["default"] };
  var commandId = true ? "src/main.ts--default" : figma.command;
  modules[commandId]();
})();
