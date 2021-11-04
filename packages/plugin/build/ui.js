(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp.call(b3, prop))
        __defNormalProp(a3, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a3, prop, b3[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b3) => __defProps(a3, __getOwnPropDescs(b3));
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[Object.keys(fn2)[0]])(fn2 = 0)), res;
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

  // node_modules/preact/dist/preact.module.js
  function a(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function h(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function v(l3, u3, i3) {
    var t3, r3, o3, f3 = {};
    for (o3 in u3)
      o3 == "key" ? t3 = u3[o3] : o3 == "ref" ? r3 = u3[o3] : f3[o3] = u3[o3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), typeof l3 == "function" && l3.defaultProps != null)
      for (o3 in l3.defaultProps)
        f3[o3] === void 0 && (f3[o3] = l3.defaultProps[o3]);
    return y(l3, f3, t3, r3, null);
  }
  function y(n2, i3, t3, r3, o3) {
    var f3 = { type: n2, props: i3, key: t3, ref: r3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o3 == null ? ++u : o3 };
    return o3 == null && l.vnode != null && l.vnode(f3), f3;
  }
  function p() {
    return { current: null };
  }
  function d(n2) {
    return n2.children;
  }
  function _(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function k(n2, l3) {
    if (l3 == null)
      return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if ((u3 = n2.__k[l3]) != null && u3.__e != null)
        return u3.__e;
    return typeof n2.type == "function" ? k(n2) : null;
  }
  function b(n2) {
    var l3, u3;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if ((u3 = n2.__k[l3]) != null && u3.__e != null) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return b(n2);
    }
  }
  function m(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l3) {
        return n3.__v.__b - l3.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l3, u3, i3, t3, r3, o3;
        n3.__d && (r3 = (t3 = (l3 = n3).__v).__e, (o3 = l3.__P) && (u3 = [], (i3 = a({}, t3)).__v = t3.__v + 1, j(o3, t3, i3, l3.__n, o3.ownerSVGElement !== void 0, t3.__h != null ? [r3] : null, u3, r3 == null ? k(t3) : r3, t3.__h), z(u3, t3), t3.__e != r3 && b(t3)));
      });
  }
  function w(n2, l3, u3, i3, t3, r3, o3, f3, s3, a3) {
    var h3, v3, p3, _3, b3, m3, g4, w4 = i3 && i3.__k || c, A4 = w4.length;
    for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
      if ((_3 = u3.__k[h3] = (_3 = l3[h3]) == null || typeof _3 == "boolean" ? null : typeof _3 == "string" || typeof _3 == "number" || typeof _3 == "bigint" ? y(null, _3, null, null, _3) : Array.isArray(_3) ? y(d, { children: _3 }, null, null, null) : _3.__b > 0 ? y(_3.type, _3.props, _3.key, null, _3.__v) : _3) != null) {
        if (_3.__ = u3, _3.__b = u3.__b + 1, (p3 = w4[h3]) === null || p3 && _3.key == p3.key && _3.type === p3.type)
          w4[h3] = void 0;
        else
          for (v3 = 0; v3 < A4; v3++) {
            if ((p3 = w4[v3]) && _3.key == p3.key && _3.type === p3.type) {
              w4[v3] = void 0;
              break;
            }
            p3 = null;
          }
        j(n2, _3, p3 = p3 || e, t3, r3, o3, f3, s3, a3), b3 = _3.__e, (v3 = _3.ref) && p3.ref != v3 && (g4 || (g4 = []), p3.ref && g4.push(p3.ref, null, _3), g4.push(v3, _3.__c || b3, _3)), b3 != null ? (m3 == null && (m3 = b3), typeof _3.type == "function" && _3.__k === p3.__k ? _3.__d = s3 = x(_3, s3, n2) : s3 = P(n2, _3, p3, w4, b3, s3), typeof u3.type == "function" && (u3.__d = s3)) : s3 && p3.__e == s3 && s3.parentNode != n2 && (s3 = k(p3));
      }
    for (u3.__e = m3, h3 = A4; h3--; )
      w4[h3] != null && (typeof u3.type == "function" && w4[h3].__e != null && w4[h3].__e == u3.__d && (u3.__d = k(i3, h3 + 1)), N(w4[h3], w4[h3]));
    if (g4)
      for (h3 = 0; h3 < g4.length; h3++)
        M(g4[h3], g4[++h3], g4[++h3]);
  }
  function x(n2, l3, u3) {
    for (var i3, t3 = n2.__k, r3 = 0; t3 && r3 < t3.length; r3++)
      (i3 = t3[r3]) && (i3.__ = n2, l3 = typeof i3.type == "function" ? x(i3, l3, u3) : P(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function A(n2, l3) {
    return l3 = l3 || [], n2 == null || typeof n2 == "boolean" || (Array.isArray(n2) ? n2.some(function(n3) {
      A(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function P(n2, l3, u3, i3, t3, r3) {
    var o3, f3, e3;
    if (l3.__d !== void 0)
      o3 = l3.__d, l3.__d = void 0;
    else if (u3 == null || t3 != r3 || t3.parentNode == null)
      n:
        if (r3 == null || r3.parentNode !== n2)
          n2.appendChild(t3), o3 = null;
        else {
          for (f3 = r3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, r3), o3 = r3;
        }
    return o3 !== void 0 ? o3 : t3.nextSibling;
  }
  function C(n2, l3, u3, i3, t3) {
    var r3;
    for (r3 in u3)
      r3 === "children" || r3 === "key" || r3 in l3 || H(n2, r3, null, u3[r3], i3);
    for (r3 in l3)
      t3 && typeof l3[r3] != "function" || r3 === "children" || r3 === "key" || r3 === "value" || r3 === "checked" || u3[r3] === l3[r3] || H(n2, r3, l3[r3], u3[r3], i3);
  }
  function $(n2, l3, u3) {
    l3[0] === "-" ? n2.setProperty(l3, u3) : n2[l3] = u3 == null ? "" : typeof u3 != "number" || s.test(l3) ? u3 : u3 + "px";
  }
  function H(n2, l3, u3, i3, t3) {
    var r3;
    n:
      if (l3 === "style")
        if (typeof u3 == "string")
          n2.style.cssText = u3;
        else {
          if (typeof i3 == "string" && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || $(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
        }
      else if (l3[0] === "o" && l3[1] === "n")
        r3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u3, u3 ? i3 || n2.addEventListener(l3, r3 ? T : I, r3) : n2.removeEventListener(l3, r3 ? T : I, r3);
      else if (l3 !== "dangerouslySetInnerHTML") {
        if (t3)
          l3 = l3.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (l3 !== "href" && l3 !== "list" && l3 !== "form" && l3 !== "tabIndex" && l3 !== "download" && l3 in n2)
          try {
            n2[l3] = u3 == null ? "" : u3;
            break n;
          } catch (n3) {
          }
        typeof u3 == "function" || (u3 != null && (u3 !== false || l3[0] === "a" && l3[1] === "r") ? n2.setAttribute(l3, u3) : n2.removeAttribute(l3));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u3, i3, t3, r3, o3, f3, e3, c3) {
    var s3, h3, v3, y3, p3, k4, b3, m3, g4, x4, A4, P3 = u3.type;
    if (u3.constructor !== void 0)
      return null;
    i3.__h != null && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, o3 = [e3]), (s3 = l.__b) && s3(u3);
    try {
      n:
        if (typeof P3 == "function") {
          if (m3 = u3.props, g4 = (s3 = P3.contextType) && t3[s3.__c], x4 = s3 ? g4 ? g4.props.value : s3.__ : t3, i3.__c ? b3 = (h3 = u3.__c = i3.__c).__ = h3.__E : ("prototype" in P3 && P3.prototype.render ? u3.__c = h3 = new P3(m3, x4) : (u3.__c = h3 = new _(m3, x4), h3.constructor = P3, h3.render = O), g4 && g4.sub(h3), h3.props = m3, h3.state || (h3.state = {}), h3.context = x4, h3.__n = t3, v3 = h3.__d = true, h3.__h = []), h3.__s == null && (h3.__s = h3.state), P3.getDerivedStateFromProps != null && (h3.__s == h3.state && (h3.__s = a({}, h3.__s)), a(h3.__s, P3.getDerivedStateFromProps(m3, h3.__s))), y3 = h3.props, p3 = h3.state, v3)
            P3.getDerivedStateFromProps == null && h3.componentWillMount != null && h3.componentWillMount(), h3.componentDidMount != null && h3.__h.push(h3.componentDidMount);
          else {
            if (P3.getDerivedStateFromProps == null && m3 !== y3 && h3.componentWillReceiveProps != null && h3.componentWillReceiveProps(m3, x4), !h3.__e && h3.shouldComponentUpdate != null && h3.shouldComponentUpdate(m3, h3.__s, x4) === false || u3.__v === i3.__v) {
              h3.props = m3, h3.state = h3.__s, u3.__v !== i3.__v && (h3.__d = false), h3.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), h3.__h.length && f3.push(h3);
              break n;
            }
            h3.componentWillUpdate != null && h3.componentWillUpdate(m3, h3.__s, x4), h3.componentDidUpdate != null && h3.__h.push(function() {
              h3.componentDidUpdate(y3, p3, k4);
            });
          }
          h3.context = x4, h3.props = m3, h3.state = h3.__s, (s3 = l.__r) && s3(u3), h3.__d = false, h3.__v = u3, h3.__P = n2, s3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s, h3.getChildContext != null && (t3 = a(a({}, t3), h3.getChildContext())), v3 || h3.getSnapshotBeforeUpdate == null || (k4 = h3.getSnapshotBeforeUpdate(y3, p3)), A4 = s3 != null && s3.type === d && s3.key == null ? s3.props.children : s3, w(n2, Array.isArray(A4) ? A4 : [A4], u3, i3, t3, r3, o3, f3, e3, c3), h3.base = u3.__e, u3.__h = null, h3.__h.length && f3.push(h3), b3 && (h3.__E = h3.__ = null), h3.__e = false;
        } else
          o3 == null && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, r3, o3, f3, c3);
      (s3 = l.diffed) && s3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || o3 != null) && (u3.__e = e3, u3.__h = !!c3, o3[o3.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function z(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function L(l3, u3, i3, t3, r3, o3, f3, c3) {
    var s3, a3, v3, y3 = i3.props, p3 = u3.props, d3 = u3.type, _3 = 0;
    if (d3 === "svg" && (r3 = true), o3 != null) {
      for (; _3 < o3.length; _3++)
        if ((s3 = o3[_3]) && (s3 === l3 || (d3 ? s3.localName == d3 : s3.nodeType == 3))) {
          l3 = s3, o3[_3] = null;
          break;
        }
    }
    if (l3 == null) {
      if (d3 === null)
        return document.createTextNode(p3);
      l3 = r3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), o3 = null, c3 = false;
    }
    if (d3 === null)
      y3 === p3 || c3 && l3.data === p3 || (l3.data = p3);
    else {
      if (o3 = o3 && n.call(l3.childNodes), a3 = (y3 = i3.props || e).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c3) {
        if (o3 != null)
          for (y3 = {}, _3 = 0; _3 < l3.attributes.length; _3++)
            y3[l3.attributes[_3].name] = l3.attributes[_3].value;
        (v3 || a3) && (v3 && (a3 && v3.__html == a3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l3, p3, y3, r3, c3), v3)
        u3.__k = [];
      else if (_3 = u3.props.children, w(l3, Array.isArray(_3) ? _3 : [_3], u3, i3, t3, r3 && d3 !== "foreignObject", o3, f3, o3 ? o3[0] : i3.__k && k(i3, 0), c3), o3 != null)
        for (_3 = o3.length; _3--; )
          o3[_3] != null && h(o3[_3]);
      c3 || ("value" in p3 && (_3 = p3.value) !== void 0 && (_3 !== l3.value || d3 === "progress" && !_3) && H(l3, "value", _3, y3.value, false), "checked" in p3 && (_3 = p3.checked) !== void 0 && _3 !== l3.checked && H(l3, "checked", _3, y3.checked, false));
    }
    return l3;
  }
  function M(n2, u3, i3) {
    try {
      typeof n2 == "function" ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function N(n2, u3, i3) {
    var t3, r3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u3)), (t3 = n2.__c) != null) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null;
    }
    if (t3 = n2.__k)
      for (r3 = 0; r3 < t3.length; r3++)
        t3[r3] && N(t3[r3], u3, typeof n2.type != "function");
    i3 || n2.__e == null || h(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function S(u3, i3, t3) {
    var r3, o3, f3;
    l.__ && l.__(u3, i3), o3 = (r3 = typeof t3 == "function") ? null : t3 && t3.__k || i3.__k, f3 = [], j(i3, u3 = (!r3 && t3 || i3).__k = v(d, null, [u3]), o3 || e, e, i3.ownerSVGElement !== void 0, !r3 && t3 ? [t3] : o3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !r3 && t3 ? t3 : o3 ? o3.__e : i3.firstChild, r3), z(f3, u3);
  }
  function q(n2, l3) {
    S(n2, l3, q);
  }
  function B(l3, u3, i3) {
    var t3, r3, o3, f3 = a({}, l3.props);
    for (o3 in u3)
      o3 == "key" ? t3 = u3[o3] : o3 == "ref" ? r3 = u3[o3] : f3[o3] = u3[o3];
    return arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), y(l3.type, f3, t3 || l3.key, r3 || l3.ref, null);
  }
  function D(n2, l3) {
    var u3 = { __c: l3 = "__cC" + f++, __: n2, Consumer: function(n3, l4) {
      return n3.children(l4);
    }, Provider: function(n3) {
      var u4, i3;
      return this.getChildContext || (u4 = [], (i3 = {})[l3] = this, this.getChildContext = function() {
        return i3;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u4.some(m);
      }, this.sub = function(n4) {
        u4.push(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
        };
      }), n3.children;
    } };
    return u3.Provider.__ = u3.Consumer.contextType = u3;
  }
  var n, l, u, i, t, r, o, f, e, c, s;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      e = {};
      c = [];
      s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      n = c.slice, l = { __e: function(n2, l3) {
        for (var u3, i3, t3; l3 = l3.__; )
          if ((u3 = l3.__c) && !u3.__)
            try {
              if ((i3 = u3.constructor) && i3.getDerivedStateFromError != null && (u3.setState(i3.getDerivedStateFromError(n2)), t3 = u3.__d), u3.componentDidCatch != null && (u3.componentDidCatch(n2), t3 = u3.__d), t3)
                return u3.__E = u3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, i = function(n2) {
        return n2 != null && n2.constructor === void 0;
      }, _.prototype.setState = function(n2, l3) {
        var u3;
        u3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n2 == "function" && (n2 = n2(a({}, u3), this.props)), n2 && a(u3, n2), n2 != null && this.__v && (l3 && this.__h.push(l3), m(this));
      }, _.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
      }, _.prototype.render = d, t = [], r = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js
  function createClassName(classNames) {
    return classNames.filter(function(className) {
      return className !== null;
    }).join(" ");
  }
  var init_create_class_name = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js"() {
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function m2(t3, r3) {
    l.__h && l.__h(u2, t3, o2 || r3), o2 = 0;
    var i3 = u2.__H || (u2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({}), i3.__[t3];
  }
  function l2(n2) {
    return o2 = 1, p2(w2, n2);
  }
  function p2(n2, r3, o3) {
    var i3 = m2(t2++, 2);
    return i3.t = n2, i3.__c || (i3.__ = [o3 ? o3(r3) : w2(void 0, r3), function(n3) {
      var t3 = i3.t(i3.__[0], n3);
      i3.__[0] !== t3 && (i3.__ = [t3, i3.__[1]], i3.__c.setState({}));
    }], i3.__c = u2), i3.__;
  }
  function y2(r3, o3) {
    var i3 = m2(t2++, 3);
    !l.__s && k2(i3.__H, o3) && (i3.__ = r3, i3.__H = o3, u2.__H.__h.push(i3));
  }
  function h2(r3, o3) {
    var i3 = m2(t2++, 4);
    !l.__s && k2(i3.__H, o3) && (i3.__ = r3, i3.__H = o3, u2.__h.push(i3));
  }
  function s2(n2) {
    return o2 = 5, A2(function() {
      return { current: n2 };
    }, []);
  }
  function _2(n2, t3, u3) {
    o2 = 6, h2(function() {
      typeof n2 == "function" ? n2(t3()) : n2 && (n2.current = t3());
    }, u3 == null ? u3 : u3.concat(n2));
  }
  function A2(n2, u3) {
    var r3 = m2(t2++, 7);
    return k2(r3.__H, u3) && (r3.__ = n2(), r3.__H = u3, r3.__h = n2), r3.__;
  }
  function F(n2, t3) {
    return o2 = 8, A2(function() {
      return n2;
    }, t3);
  }
  function T2(n2) {
    var r3 = u2.context[n2.__c], o3 = m2(t2++, 9);
    return o3.c = n2, r3 ? (o3.__ == null && (o3.__ = true, r3.sub(u2)), r3.props.value) : n2.__;
  }
  function d2(t3, u3) {
    l.useDebugValue && l.useDebugValue(u3 ? u3(t3) : t3);
  }
  function q2(n2) {
    var r3 = m2(t2++, 10), o3 = l2();
    return r3.__ = n2, u2.componentDidCatch || (u2.componentDidCatch = function(n3) {
      r3.__ && r3.__(n3), o3[1](n3);
    }), [o3[0], function() {
      o3[1](void 0);
    }];
  }
  function x2() {
    i2.forEach(function(t3) {
      if (t3.__P)
        try {
          t3.__H.__h.forEach(g2), t3.__H.__h.forEach(j2), t3.__H.__h = [];
        } catch (u3) {
          t3.__H.__h = [], l.__e(u3, t3.__v);
        }
    }), i2 = [];
  }
  function g2(n2) {
    var t3 = u2;
    typeof n2.__c == "function" && n2.__c(), u2 = t3;
  }
  function j2(n2) {
    var t3 = u2;
    n2.__c = n2.__(), u2 = t3;
  }
  function k2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, u3) {
      return t4 !== n2[u3];
    });
  }
  function w2(n2, t3) {
    return typeof t3 == "function" ? t3(n2) : t3;
  }
  var t2, u2, r2, o2, i2, c2, f2, e2, a2, v2, b2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      i2 = [];
      c2 = l.__b;
      f2 = l.__r;
      e2 = l.diffed;
      a2 = l.__c;
      v2 = l.unmount;
      l.__b = function(n2) {
        u2 = null, c2 && c2(n2);
      }, l.__r = function(n2) {
        f2 && f2(n2), t2 = 0;
        var r3 = (u2 = n2.__c).__H;
        r3 && (r3.__h.forEach(g2), r3.__h.forEach(j2), r3.__h = []);
      }, l.diffed = function(t3) {
        e2 && e2(t3);
        var o3 = t3.__c;
        o3 && o3.__H && o3.__H.__h.length && (i2.push(o3) !== 1 && r2 === l.requestAnimationFrame || ((r2 = l.requestAnimationFrame) || function(n2) {
          var t4, u3 = function() {
            clearTimeout(r3), b2 && cancelAnimationFrame(t4), setTimeout(n2);
          }, r3 = setTimeout(u3, 100);
          b2 && (t4 = requestAnimationFrame(u3));
        })(x2)), u2 = null;
      }, l.__c = function(t3, u3) {
        u3.some(function(t4) {
          try {
            t4.__h.forEach(g2), t4.__h = t4.__h.filter(function(n2) {
              return !n2.__ || j2(n2);
            });
          } catch (r3) {
            u3.some(function(n2) {
              n2.__h && (n2.__h = []);
            }), u3 = [], l.__e(r3, t4.__v);
          }
        }), a2 && a2(t3, u3);
      }, l.unmount = function(t3) {
        v2 && v2(t3);
        var u3 = t3.__c;
        if (u3 && u3.__H)
          try {
            u3.__H.__.forEach(g2);
          } catch (t4) {
            l.__e(t4, u3.__v);
          }
      };
      b2 = typeof requestAnimationFrame == "function";
    }
  });

  // ../../../../../../private/var/folders/ts/zryjz1lx11gcydvz5pfmn9x00000gn/T/49e13a0c-3c79-4700-aa6e-bfc814939e7e/loading-indicator.js
  var loading_indicator_default;
  var init_loading_indicator = __esm({
    "../../../../../../private/var/folders/ts/zryjz1lx11gcydvz5pfmn9x00000gn/T/49e13a0c-3c79-4700-aa6e-bfc814939e7e/loading-indicator.js"() {
      if (document.getElementById("2766cebe48") === null) {
        const element = document.createElement("style");
        element.id = "2766cebe48";
        element.textContent = `._loadingIndicator_12ibq_1 {
  position: relative;
  width: 16px;
  height: 16px;
  margin: 0 auto;
}

._svg_12ibq_8 {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  animation: _rotating_12ibq_1 0.5s linear infinite;
  fill: currentColor;
}
._accent_12ibq_17 {
  fill: var(--color-accent);
}
._black-30_12ibq_20 {
  fill: var(--color-black-30);
}
._black-80_12ibq_23 {
  fill: var(--color-black-80);
}
._blue_12ibq_26 {
  fill: var(--color-blue);
}
._white_12ibq_29 {
  fill: var(--color-white);
}
._white-20_12ibq_32 {
  fill: var(--color-white-20-translucent);
}
._white-40_12ibq_35 {
  fill: var(--color-white-40-translucent);
}

@keyframes _rotating_12ibq_1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sb2FkaW5nLWluZGljYXRvci9sb2FkaW5nLWluZGljYXRvci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixpREFBd0M7RUFDeEMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2xvYWRpbmctaW5kaWNhdG9yL2xvYWRpbmctaW5kaWNhdG9yLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBhbmltYXRpb246IHJvdGF0aW5nIDAuNXMgbGluZWFyIGluZmluaXRlO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG4uYWNjZW50IHtcbiAgZmlsbDogdmFyKC0tY29sb3ItYWNjZW50KTtcbn1cbi5ibGFjay0zMCB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLWJsYWNrLTMwKTtcbn1cbi5ibGFjay04MCB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLWJsYWNrLTgwKTtcbn1cbi5ibHVlIHtcbiAgZmlsbDogdmFyKC0tY29sb3ItYmx1ZSk7XG59XG4ud2hpdGUge1xuICBmaWxsOiB2YXIoLS1jb2xvci13aGl0ZSk7XG59XG4ud2hpdGUtMjAge1xuICBmaWxsOiB2YXIoLS1jb2xvci13aGl0ZS0yMC10cmFuc2x1Y2VudCk7XG59XG4ud2hpdGUtNDAge1xuICBmaWxsOiB2YXIoLS1jb2xvci13aGl0ZS00MC10cmFuc2x1Y2VudCk7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRpbmcge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */`;
        document.head.append(element);
      }
      loading_indicator_default = { "loadingIndicator": "_loadingIndicator_12ibq_1", "svg": "_svg_12ibq_8", "rotating": "_rotating_12ibq_1", "accent": "_accent_12ibq_17", "black-30": "_black-30_12ibq_20", "black-80": "_black-80_12ibq_23", "blue": "_blue_12ibq_26", "white": "_white_12ibq_29", "white-20": "_white-20_12ibq_32", "white-40": "_white-40_12ibq_35" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js
  function LoadingIndicator(_a) {
    var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
    return v("div", __spreadProps(__spreadValues({}, rest), { class: loading_indicator_default.loadingIndicator }), v("svg", { class: createClassName([
      loading_indicator_default.svg,
      typeof color === "undefined" ? null : loading_indicator_default[color]
    ]) }, v("path", { d: "M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z" })));
  }
  var init_loading_indicator2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js"() {
      init_preact_module();
      init_create_class_name();
      init_loading_indicator();
    }
  });

  // ../../../../../../private/var/folders/ts/zryjz1lx11gcydvz5pfmn9x00000gn/T/c3b095cb-353f-42d8-b964-89fde774ba23/button.js
  var button_default;
  var init_button = __esm({
    "../../../../../../private/var/folders/ts/zryjz1lx11gcydvz5pfmn9x00000gn/T/c3b095cb-353f-42d8-b964-89fde774ba23/button.js"() {
      if (document.getElementById("032c6fd9e6") === null) {
        const element = document.createElement("style");
        element.id = "032c6fd9e6";
        element.textContent = `._button_12lb8_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: inline-block;
}
._button_12lb8_1 button {
  display: inline-block;
  height: 32px;
  color: currentColor;
  border-radius: var(--border-radius-6);
}

._disabled_12lb8_13 {
  opacity: var(--opacity-30);
}
._disabled_12lb8_13 button {
  cursor: not-allowed;
}

._primary_12lb8_20 {
  color: var(
    --color-white
  ); /* Set the color of the \`button\` element and \`LoadingIndicator\` */
}
._primary_12lb8_20 button {
  padding: 0 14px;
  line-height: 28px;
  background-color: var(--color-accent);
  border: 2px solid transparent;
}
._primary_12lb8_20:not(._disabled_12lb8_13) button:focus {
  border-color: var(--color-black-30-translucent);
}
._primary_12lb8_20._destructive_12lb8_34 {
  color: var(--color-white);
}
._primary_12lb8_20._destructive_12lb8_34 button {
  background-color: var(--color-red);
}
._primary_12lb8_20._disabled_12lb8_13 button {
  background-color: var(--color-black);
}

._secondary_12lb8_44 {
  color: var(--color-black-80);
}
._secondary_12lb8_44 button {
  padding: 0 15px;
  line-height: 30px;
  background-color: transparent;
  border: 1px solid var(--color-black-80);
}
._secondary_12lb8_44:not(._disabled_12lb8_13) button:focus {
  padding: 0 14px;
  line-height: 28px;
  border-color: var(--color-accent);
  border-width: 2px;
}
._secondary_12lb8_44._destructive_12lb8_34 {
  color: var(--color-red);
}
._secondary_12lb8_44._destructive_12lb8_34 button {
  border-color: var(--color-red);
}
._secondary_12lb8_44._destructive_12lb8_34:not(._disabled_12lb8_13) button:focus {
  border-color: var(--color-red);
}

._fullWidth_12lb8_69 {
  display: block;
}
._fullWidth_12lb8_69 button {
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

._loading_12lb8_80 button {
  color: rgba(0, 0, 0, 0); /* Hide the button text */
}
._loadingIndicator_12lb8_83 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFOztHQUVDLEVBQUUsaUVBQWlFO0FBQ3RFO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFDQUFxQztFQUNyQyw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCLEVBQUUseUJBQXlCO0FBQ3BEO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5idXR0b24gYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDMycHg7XG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtNik7XG59XG5cbi5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMzApO1xufVxuLmRpc2FibGVkIGJ1dHRvbiB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5wcmltYXJ5IHtcbiAgY29sb3I6IHZhcihcbiAgICAtLWNvbG9yLXdoaXRlXG4gICk7IC8qIFNldCB0aGUgY29sb3Igb2YgdGhlIGBidXR0b25gIGVsZW1lbnQgYW5kIGBMb2FkaW5nSW5kaWNhdG9yYCAqL1xufVxuLnByaW1hcnkgYnV0dG9uIHtcbiAgcGFkZGluZzogMCAxNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ucHJpbWFyeTpub3QoLmRpc2FibGVkKSBidXR0b246Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrLTMwLXRyYW5zbHVjZW50KTtcbn1cbi5wcmltYXJ5LmRlc3RydWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbn1cbi5wcmltYXJ5LmRlc3RydWN0aXZlIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XG59XG4ucHJpbWFyeS5kaXNhYmxlZCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XG59XG5cbi5zZWNvbmRhcnkge1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2stODApO1xufVxuLnNlY29uZGFyeSBidXR0b24ge1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYmxhY2stODApO1xufVxuLnNlY29uZGFyeTpub3QoLmRpc2FibGVkKSBidXR0b246Zm9jdXMge1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG4gIGJvcmRlci13aWR0aDogMnB4O1xufVxuLnNlY29uZGFyeS5kZXN0cnVjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xufVxuLnNlY29uZGFyeS5kZXN0cnVjdGl2ZSBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XG59XG4uc2Vjb25kYXJ5LmRlc3RydWN0aXZlOm5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcbn1cblxuLmZ1bGxXaWR0aCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZ1bGxXaWR0aCBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ubG9hZGluZyBidXR0b24ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTsgLyogSGlkZSB0aGUgYnV0dG9uIHRleHQgKi9cbn1cbi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      button_default = { "button": "_button_12lb8_1", "disabled": "_disabled_12lb8_13", "primary": "_primary_12lb8_20", "destructive": "_destructive_12lb8_34", "secondary": "_secondary_12lb8_44", "fullWidth": "_fullWidth_12lb8_69", "loading": "_loading_12lb8_80", "loadingIndicator": "_loadingIndicator_12lb8_83" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/button/button.js
  function Button(_a) {
    var _b = _a, { children, destructive = false, disabled = false, fullWidth = false, loading = false, onClick, propagateEscapeKeyDown = true, secondary = false } = _b, rest = __objRest(_b, ["children", "destructive", "disabled", "fullWidth", "loading", "onClick", "propagateEscapeKeyDown", "secondary"]);
    const handleKeyDown = F(function(event) {
      if (event.key === "Escape") {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation();
        }
        event.currentTarget.blur();
        return;
      }
      if (event.key === "Enter") {
        event.stopPropagation();
      }
    }, [propagateEscapeKeyDown]);
    return v("div", { class: createClassName([
      button_default.button,
      secondary === true ? button_default.secondary : button_default.primary,
      destructive === true ? button_default.destructive : null,
      fullWidth === true ? button_default.fullWidth : null,
      disabled === true ? button_default.disabled : null,
      loading === true ? button_default.loading : null
    ]) }, loading === true ? v("div", { class: button_default.loadingIndicator }, v(LoadingIndicator, null)) : null, v("button", __spreadProps(__spreadValues({}, rest), { disabled: disabled === true, onClick: disabled === true || loading === true ? void 0 : onClick, onKeyDown: disabled === true || loading === true ? void 0 : handleKeyDown, tabIndex: disabled === true ? -1 : 0 }), children));
  }
  var init_button2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/button/button.js"() {
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_loading_indicator2();
      init_button();
    }
  });

  // ../../../../../../private/var/folders/ts/zryjz1lx11gcydvz5pfmn9x00000gn/T/9d338cd0-551f-4600-8ef2-3d48fc65be9e/container.js
  var container_default;
  var init_container = __esm({
    "../../../../../../private/var/folders/ts/zryjz1lx11gcydvz5pfmn9x00000gn/T/9d338cd0-551f-4600-8ef2-3d48fc65be9e/container.js"() {
      if (document.getElementById("473e313664") === null) {
        const element = document.createElement("style");
        element.id = "473e313664";
        element.textContent = `._extraSmall_kslv9_1 {
  padding: 0 var(--space-extra-small);
}

._small_kslv9_5 {
  padding: 0 var(--space-small);
}

._medium_kslv9_9 {
  padding: 0 var(--space-medium);
}

._large_kslv9_13 {
  padding: 0 var(--space-large);
}

._extraLarge_kslv9_17 {
  padding: 0 var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sYXlvdXQvY29udGFpbmVyL2NvbnRhaW5lci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2xheW91dC9jb250YWluZXIvY29udGFpbmVyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHRyYVNtYWxsIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG5cbi5zbWFsbCB7XG4gIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuXG4ubWVkaXVtIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1tZWRpdW0pO1xufVxuXG4ubGFyZ2Uge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cblxuLmV4dHJhTGFyZ2Uge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      container_default = { "extraSmall": "_extraSmall_kslv9_1", "small": "_small_kslv9_5", "medium": "_medium_kslv9_9", "large": "_large_kslv9_13", "extraLarge": "_extraLarge_kslv9_17" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/layout/container/container.js
  function Container(_a) {
    var _b = _a, { space = "small" } = _b, rest = __objRest(_b, ["space"]);
    return v("div", __spreadProps(__spreadValues({}, rest), { class: container_default[space] }));
  }
  var init_container2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/layout/container/container.js"() {
      init_preact_module();
      init_container();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function invokeEventHandler(name, args) {
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
      }
    }
  }
  var eventHandlers, emit;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      emit = typeof window === "undefined" ? function(name, ...args) {
        figma.ui.postMessage([name, ...args]);
      } : function(name, ...args) {
        window.parent.postMessage({
          pluginMessage: [name, ...args]
        }, "*");
      };
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

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
    }
  });

  // ../../../../../../private/var/folders/ts/zryjz1lx11gcydvz5pfmn9x00000gn/T/26c26783-0d47-42ce-9194-17208eb92321/base.js
  var init_base = __esm({
    "../../../../../../private/var/folders/ts/zryjz1lx11gcydvz5pfmn9x00000gn/T/26c26783-0d47-42ce-9194-17208eb92321/base.js"() {
      if (document.getElementById("c24b8a19d2") === null) {
        const element = document.createElement("style");
        element.id = "c24b8a19d2";
        element.textContent = `@import url('https://fonts.googleapis.com/css?family=Inter:400,600&display=swap');

:root {
  /* border-radius */
  --border-radius-2: 2px;
  --border-radius-6: 6px;
  /* box-shadow */
  --box-shadow: var(--box-shadow-menu);
  --box-shadow-menu: 0 5px 17px rgba(0, 0, 0, 0.2),
    0 2px 7px rgba(0, 0, 0, 0.15), inset 0 0 0 0.5px #000000,
    0 0 0 0.5px rgba(0, 0, 0, 0.1);
  --box-shadow-modal: 0 2px 14px rgba(0, 0, 0, 0.15),
    0 0 0 0.5px rgba(0, 0, 0, 0.2);
  /* color */
  --color-black: #000000;
  --color-black-3-translucent: rgba(0, 0, 0, 0.03);
  --color-black-6-translucent: rgba(0, 0, 0, 0.06);
  --color-black-30: #b3b3b3;
  --color-black-30-translucent: rgba(0, 0, 0, 0.3);
  --color-black-80: #333333;
  --color-black-80-translucent: rgba(0, 0, 0, 0.8);
  --color-blue: #18a0fb;
  --color-blue-30-translucent: rgba(24, 160, 251, 0.3);
  --color-figjam-purple: #974bff;
  --color-figjam-purple-20-translucent: rgba(151, 71, 255, 0.2);
  --color-green: #1bc47d;
  --color-hud: #222222;
  --color-purple: #7b61ff;
  --color-red: #f24822;
  --color-selection-a: #daebf7;
  --color-selection-b: #edf5fa;
  --color-silver: #e5e5e5;
  --color-white: #ffffff;
  --color-white-20-translucent: rgba(255, 255, 255, 0.2);
  --color-white-40-translucent: rgba(255, 255, 255, 0.4);
  --color-yellow: #ffeb00;
  /* font */
  --font-family: 'Inter', 'Helvetica', sans-serif;
  --font-family-code: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  --font-size-11: 11px;
  --font-size-12: 12px;
  --font-weight-regular: 400;
  --font-weight-bold: 600;
  --line-height-16: 16px;
  /* opacity */
  --opacity-30: 0.3;
  /* space */
  --space-extra-small: 8px;
  --space-small: 12px;
  --space-medium: 16px;
  --space-large: 20px;
  --space-extra-large: 24px;
  /* z-index */
  --z-index-1: 1;
  --z-index-2: 2;
}

* {
  box-sizing: border-box;
  border-color: currentColor;
  border-style: solid;
  border-width: 0;
}

body {
  margin: 0;
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-11);
  font-family: var(--font-family);
  line-height: var(--line-height-16);
}

div,
span {
  cursor: default;
  user-select: none;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: inherit;
}

button {
  padding: 0;
  font: inherit;
  background-color: transparent;
  border: 0;
  outline: 0;
  -webkit-appearance: none;
}

hr {
  margin: 0;
  border: 0;
}

label {
  display: block;
}

input,
textarea {
  margin: 0;
  padding: 0;
  font: inherit;
  border: 0;
  outline: 0;
  cursor: default;
  -webkit-appearance: none;
}

svg {
  display: block;
}

.theme-figjam {
  --color-accent: var(--color-figjam-purple);
}
.theme-figjam ::selection {
  background-color: var(--color-figjam-purple-20-translucent);
}

.theme-figma {
  --color-accent: var(--color-blue);
}
.theme-figma ::selection {
  background-color: var(--color-blue-30-translucent);
}
`;
        document.head.prepend(element);
      }
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/render.js
  function render(Plugin2) {
    return function(rootNode2, props) {
      S(v(Plugin2, __spreadValues({}, props)), rootNode2);
    };
  }
  var init_render = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/render.js"() {
      init_base();
      init_preact_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/index.js
  var init_lib2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/index.js"() {
      init_button2();
      init_container2();
      init_render();
    }
  });

  // node_modules/prismjs/prism.js
  var require_prism = __commonJS({
    "node_modules/prismjs/prism.js"(exports, module) {
      var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
      var Prism2 = function(_self2) {
        var lang = /\blang(?:uage)?-([\w-]+)\b/i;
        var uniqueId = 0;
        var plainTextGrammar = {};
        var _3 = {
          manual: _self2.Prism && _self2.Prism.manual,
          disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
          util: {
            encode: function encode(tokens) {
              if (tokens instanceof Token) {
                return new Token(tokens.type, encode(tokens.content), tokens.alias);
              } else if (Array.isArray(tokens)) {
                return tokens.map(encode);
              } else {
                return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
              }
            },
            type: function(o3) {
              return Object.prototype.toString.call(o3).slice(8, -1);
            },
            objId: function(obj) {
              if (!obj["__id"]) {
                Object.defineProperty(obj, "__id", { value: ++uniqueId });
              }
              return obj["__id"];
            },
            clone: function deepClone(o3, visited) {
              visited = visited || {};
              var clone;
              var id;
              switch (_3.util.type(o3)) {
                case "Object":
                  id = _3.util.objId(o3);
                  if (visited[id]) {
                    return visited[id];
                  }
                  clone = {};
                  visited[id] = clone;
                  for (var key in o3) {
                    if (o3.hasOwnProperty(key)) {
                      clone[key] = deepClone(o3[key], visited);
                    }
                  }
                  return clone;
                case "Array":
                  id = _3.util.objId(o3);
                  if (visited[id]) {
                    return visited[id];
                  }
                  clone = [];
                  visited[id] = clone;
                  o3.forEach(function(v3, i3) {
                    clone[i3] = deepClone(v3, visited);
                  });
                  return clone;
                default:
                  return o3;
              }
            },
            getLanguage: function(element) {
              while (element && !lang.test(element.className)) {
                element = element.parentElement;
              }
              if (element) {
                return (element.className.match(lang) || [, "none"])[1].toLowerCase();
              }
              return "none";
            },
            currentScript: function() {
              if (typeof document === "undefined") {
                return null;
              }
              if ("currentScript" in document && 1 < 2) {
                return document.currentScript;
              }
              try {
                throw new Error();
              } catch (err) {
                var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
                if (src) {
                  var scripts = document.getElementsByTagName("script");
                  for (var i3 in scripts) {
                    if (scripts[i3].src == src) {
                      return scripts[i3];
                    }
                  }
                }
                return null;
              }
            },
            isActive: function(element, className, defaultActivation) {
              var no = "no-" + className;
              while (element) {
                var classList = element.classList;
                if (classList.contains(className)) {
                  return true;
                }
                if (classList.contains(no)) {
                  return false;
                }
                element = element.parentElement;
              }
              return !!defaultActivation;
            }
          },
          languages: {
            plain: plainTextGrammar,
            plaintext: plainTextGrammar,
            text: plainTextGrammar,
            txt: plainTextGrammar,
            extend: function(id, redef) {
              var lang2 = _3.util.clone(_3.languages[id]);
              for (var key in redef) {
                lang2[key] = redef[key];
              }
              return lang2;
            },
            insertBefore: function(inside, before, insert, root) {
              root = root || _3.languages;
              var grammar = root[inside];
              var ret = {};
              for (var token in grammar) {
                if (grammar.hasOwnProperty(token)) {
                  if (token == before) {
                    for (var newToken in insert) {
                      if (insert.hasOwnProperty(newToken)) {
                        ret[newToken] = insert[newToken];
                      }
                    }
                  }
                  if (!insert.hasOwnProperty(token)) {
                    ret[token] = grammar[token];
                  }
                }
              }
              var old = root[inside];
              root[inside] = ret;
              _3.languages.DFS(_3.languages, function(key, value) {
                if (value === old && key != inside) {
                  this[key] = ret;
                }
              });
              return ret;
            },
            DFS: function DFS(o3, callback, type, visited) {
              visited = visited || {};
              var objId = _3.util.objId;
              for (var i3 in o3) {
                if (o3.hasOwnProperty(i3)) {
                  callback.call(o3, i3, o3[i3], type || i3);
                  var property = o3[i3];
                  var propertyType = _3.util.type(property);
                  if (propertyType === "Object" && !visited[objId(property)]) {
                    visited[objId(property)] = true;
                    DFS(property, callback, null, visited);
                  } else if (propertyType === "Array" && !visited[objId(property)]) {
                    visited[objId(property)] = true;
                    DFS(property, callback, i3, visited);
                  }
                }
              }
            }
          },
          plugins: {},
          highlightAll: function(async, callback) {
            _3.highlightAllUnder(document, async, callback);
          },
          highlightAllUnder: function(container, async, callback) {
            var env = {
              callback,
              container,
              selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            _3.hooks.run("before-highlightall", env);
            env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
            _3.hooks.run("before-all-elements-highlight", env);
            for (var i3 = 0, element; element = env.elements[i3++]; ) {
              _3.highlightElement(element, async === true, env.callback);
            }
          },
          highlightElement: function(element, async, callback) {
            var language = _3.util.getLanguage(element);
            var grammar = _3.languages[language];
            element.className = element.className.replace(lang, "").replace(/\s+/g, " ") + " language-" + language;
            var parent = element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === "pre") {
              parent.className = parent.className.replace(lang, "").replace(/\s+/g, " ") + " language-" + language;
            }
            var code = element.textContent;
            var env = {
              element,
              language,
              grammar,
              code
            };
            function insertHighlightedCode(highlightedCode) {
              env.highlightedCode = highlightedCode;
              _3.hooks.run("before-insert", env);
              env.element.innerHTML = env.highlightedCode;
              _3.hooks.run("after-highlight", env);
              _3.hooks.run("complete", env);
              callback && callback.call(env.element);
            }
            _3.hooks.run("before-sanity-check", env);
            parent = env.element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
              parent.setAttribute("tabindex", "0");
            }
            if (!env.code) {
              _3.hooks.run("complete", env);
              callback && callback.call(env.element);
              return;
            }
            _3.hooks.run("before-highlight", env);
            if (!env.grammar) {
              insertHighlightedCode(_3.util.encode(env.code));
              return;
            }
            if (async && _self2.Worker) {
              var worker = new Worker(_3.filename);
              worker.onmessage = function(evt) {
                insertHighlightedCode(evt.data);
              };
              worker.postMessage(JSON.stringify({
                language: env.language,
                code: env.code,
                immediateClose: true
              }));
            } else {
              insertHighlightedCode(_3.highlight(env.code, env.grammar, env.language));
            }
          },
          highlight: function(text, grammar, language) {
            var env = {
              code: text,
              grammar,
              language
            };
            _3.hooks.run("before-tokenize", env);
            env.tokens = _3.tokenize(env.code, env.grammar);
            _3.hooks.run("after-tokenize", env);
            return Token.stringify(_3.util.encode(env.tokens), env.language);
          },
          tokenize: function(text, grammar) {
            var rest = grammar.rest;
            if (rest) {
              for (var token in rest) {
                grammar[token] = rest[token];
              }
              delete grammar.rest;
            }
            var tokenList = new LinkedList();
            addAfter(tokenList, tokenList.head, text);
            matchGrammar(text, tokenList, grammar, tokenList.head, 0);
            return toArray(tokenList);
          },
          hooks: {
            all: {},
            add: function(name, callback) {
              var hooks = _3.hooks.all;
              hooks[name] = hooks[name] || [];
              hooks[name].push(callback);
            },
            run: function(name, env) {
              var callbacks = _3.hooks.all[name];
              if (!callbacks || !callbacks.length) {
                return;
              }
              for (var i3 = 0, callback; callback = callbacks[i3++]; ) {
                callback(env);
              }
            }
          },
          Token
        };
        _self2.Prism = _3;
        function Token(type, content, alias, matchedStr) {
          this.type = type;
          this.content = content;
          this.alias = alias;
          this.length = (matchedStr || "").length | 0;
        }
        Token.stringify = function stringify(o3, language) {
          if (typeof o3 == "string") {
            return o3;
          }
          if (Array.isArray(o3)) {
            var s3 = "";
            o3.forEach(function(e3) {
              s3 += stringify(e3, language);
            });
            return s3;
          }
          var env = {
            type: o3.type,
            content: stringify(o3.content, language),
            tag: "span",
            classes: ["token", o3.type],
            attributes: {},
            language
          };
          var aliases = o3.alias;
          if (aliases) {
            if (Array.isArray(aliases)) {
              Array.prototype.push.apply(env.classes, aliases);
            } else {
              env.classes.push(aliases);
            }
          }
          _3.hooks.run("wrap", env);
          var attributes = "";
          for (var name in env.attributes) {
            attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
          }
          return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
        };
        function matchPattern(pattern, pos, text, lookbehind) {
          pattern.lastIndex = pos;
          var match = pattern.exec(text);
          if (match && lookbehind && match[1]) {
            var lookbehindLength = match[1].length;
            match.index += lookbehindLength;
            match[0] = match[0].slice(lookbehindLength);
          }
          return match;
        }
        function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
          for (var token in grammar) {
            if (!grammar.hasOwnProperty(token) || !grammar[token]) {
              continue;
            }
            var patterns = grammar[token];
            patterns = Array.isArray(patterns) ? patterns : [patterns];
            for (var j4 = 0; j4 < patterns.length; ++j4) {
              if (rematch && rematch.cause == token + "," + j4) {
                return;
              }
              var patternObj = patterns[j4];
              var inside = patternObj.inside;
              var lookbehind = !!patternObj.lookbehind;
              var greedy = !!patternObj.greedy;
              var alias = patternObj.alias;
              if (greedy && !patternObj.pattern.global) {
                var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
                patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
              }
              var pattern = patternObj.pattern || patternObj;
              for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
                if (rematch && pos >= rematch.reach) {
                  break;
                }
                var str = currentNode.value;
                if (tokenList.length > text.length) {
                  return;
                }
                if (str instanceof Token) {
                  continue;
                }
                var removeCount = 1;
                var match;
                if (greedy) {
                  match = matchPattern(pattern, pos, text, lookbehind);
                  if (!match) {
                    break;
                  }
                  var from = match.index;
                  var to = match.index + match[0].length;
                  var p3 = pos;
                  p3 += currentNode.value.length;
                  while (from >= p3) {
                    currentNode = currentNode.next;
                    p3 += currentNode.value.length;
                  }
                  p3 -= currentNode.value.length;
                  pos = p3;
                  if (currentNode.value instanceof Token) {
                    continue;
                  }
                  for (var k4 = currentNode; k4 !== tokenList.tail && (p3 < to || typeof k4.value === "string"); k4 = k4.next) {
                    removeCount++;
                    p3 += k4.value.length;
                  }
                  removeCount--;
                  str = text.slice(pos, p3);
                  match.index -= pos;
                } else {
                  match = matchPattern(pattern, 0, str, lookbehind);
                  if (!match) {
                    continue;
                  }
                }
                var from = match.index;
                var matchStr = match[0];
                var before = str.slice(0, from);
                var after = str.slice(from + matchStr.length);
                var reach = pos + str.length;
                if (rematch && reach > rematch.reach) {
                  rematch.reach = reach;
                }
                var removeFrom = currentNode.prev;
                if (before) {
                  removeFrom = addAfter(tokenList, removeFrom, before);
                  pos += before.length;
                }
                removeRange(tokenList, removeFrom, removeCount);
                var wrapped = new Token(token, inside ? _3.tokenize(matchStr, inside) : matchStr, alias, matchStr);
                currentNode = addAfter(tokenList, removeFrom, wrapped);
                if (after) {
                  addAfter(tokenList, currentNode, after);
                }
                if (removeCount > 1) {
                  var nestedRematch = {
                    cause: token + "," + j4,
                    reach
                  };
                  matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                  if (rematch && nestedRematch.reach > rematch.reach) {
                    rematch.reach = nestedRematch.reach;
                  }
                }
              }
            }
          }
        }
        function LinkedList() {
          var head = { value: null, prev: null, next: null };
          var tail = { value: null, prev: head, next: null };
          head.next = tail;
          this.head = head;
          this.tail = tail;
          this.length = 0;
        }
        function addAfter(list, node, value) {
          var next = node.next;
          var newNode = { value, prev: node, next };
          node.next = newNode;
          next.prev = newNode;
          list.length++;
          return newNode;
        }
        function removeRange(list, node, count) {
          var next = node.next;
          for (var i3 = 0; i3 < count && next !== list.tail; i3++) {
            next = next.next;
          }
          node.next = next;
          next.prev = node;
          list.length -= i3;
        }
        function toArray(list) {
          var array = [];
          var node = list.head.next;
          while (node !== list.tail) {
            array.push(node.value);
            node = node.next;
          }
          return array;
        }
        if (!_self2.document) {
          if (!_self2.addEventListener) {
            return _3;
          }
          if (!_3.disableWorkerMessageHandler) {
            _self2.addEventListener("message", function(evt) {
              var message = JSON.parse(evt.data);
              var lang2 = message.language;
              var code = message.code;
              var immediateClose = message.immediateClose;
              _self2.postMessage(_3.highlight(code, _3.languages[lang2], lang2));
              if (immediateClose) {
                _self2.close();
              }
            }, false);
          }
          return _3;
        }
        var script = _3.util.currentScript();
        if (script) {
          _3.filename = script.src;
          if (script.hasAttribute("data-manual")) {
            _3.manual = true;
          }
        }
        function highlightAutomaticallyCallback() {
          if (!_3.manual) {
            _3.highlightAll();
          }
        }
        if (!_3.manual) {
          var readyState = document.readyState;
          if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
            document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
          } else {
            if (window.requestAnimationFrame) {
              window.requestAnimationFrame(highlightAutomaticallyCallback);
            } else {
              window.setTimeout(highlightAutomaticallyCallback, 16);
            }
          }
        }
        return _3;
      }(_self);
      if (typeof module !== "undefined" && module.exports) {
        module.exports = Prism2;
      }
      if (typeof window !== "undefined") {
        window.Prism = Prism2;
      }
      Prism2.languages.markup = {
        "comment": {
          pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
          greedy: true
        },
        "prolog": {
          pattern: /<\?[\s\S]+?\?>/,
          greedy: true
        },
        "doctype": {
          pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: true,
          inside: {
            "internal-subset": {
              pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
              lookbehind: true,
              greedy: true,
              inside: null
            },
            "string": {
              pattern: /"[^"]*"|'[^']*'/,
              greedy: true
            },
            "punctuation": /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            "name": /[^\s<>'"]+/
          }
        },
        "cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          greedy: true
        },
        "tag": {
          pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: true,
          inside: {
            "tag": {
              pattern: /^<\/?[^\s>\/]+/,
              inside: {
                "punctuation": /^<\/?/,
                "namespace": /^[^\s>\/:]+:/
              }
            },
            "special-attr": [],
            "attr-value": {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                "punctuation": [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  /"|'/
                ]
              }
            },
            "punctuation": /\/?>/,
            "attr-name": {
              pattern: /[^\s>\/]+/,
              inside: {
                "namespace": /^[^\s>\/:]+:/
              }
            }
          }
        },
        "entity": [
          {
            pattern: /&[\da-z]{1,8};/i,
            alias: "named-entity"
          },
          /&#x?[\da-f]{1,8};/i
        ]
      };
      Prism2.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism2.languages.markup["entity"];
      Prism2.languages.markup["doctype"].inside["internal-subset"].inside = Prism2.languages.markup;
      Prism2.hooks.add("wrap", function(env) {
        if (env.type === "entity") {
          env.attributes["title"] = env.content.replace(/&amp;/, "&");
        }
      });
      Object.defineProperty(Prism2.languages.markup.tag, "addInlined", {
        value: function addInlined(tagName, lang) {
          var includedCdataInside = {};
          includedCdataInside["language-" + lang] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: true,
            inside: Prism2.languages[lang]
          };
          includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
          var inside = {
            "included-cdata": {
              pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
              inside: includedCdataInside
            }
          };
          inside["language-" + lang] = {
            pattern: /[\s\S]+/,
            inside: Prism2.languages[lang]
          };
          var def = {};
          def[tagName] = {
            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
              return tagName;
            }), "i"),
            lookbehind: true,
            greedy: true,
            inside
          };
          Prism2.languages.insertBefore("markup", "cdata", def);
        }
      });
      Object.defineProperty(Prism2.languages.markup.tag, "addAttribute", {
        value: function(attrName, lang) {
          Prism2.languages.markup.tag.inside["special-attr"].push({
            pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
            lookbehind: true,
            inside: {
              "attr-name": /^[^\s=]+/,
              "attr-value": {
                pattern: /=[\s\S]+/,
                inside: {
                  "value": {
                    pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                    lookbehind: true,
                    alias: [lang, "language-" + lang],
                    inside: Prism2.languages[lang]
                  },
                  "punctuation": [
                    {
                      pattern: /^=/,
                      alias: "attr-equals"
                    },
                    /"|'/
                  ]
                }
              }
            }
          });
        }
      });
      Prism2.languages.html = Prism2.languages.markup;
      Prism2.languages.mathml = Prism2.languages.markup;
      Prism2.languages.svg = Prism2.languages.markup;
      Prism2.languages.xml = Prism2.languages.extend("markup", {});
      Prism2.languages.ssml = Prism2.languages.xml;
      Prism2.languages.atom = Prism2.languages.xml;
      Prism2.languages.rss = Prism2.languages.xml;
      (function(Prism3) {
        var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        Prism3.languages.css = {
          "comment": /\/\*[\s\S]*?\*\//,
          "atrule": {
            pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
            inside: {
              "rule": /^@[\w-]+/,
              "selector-function-argument": {
                pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                lookbehind: true,
                alias: "selector"
              },
              "keyword": {
                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                lookbehind: true
              }
            }
          },
          "url": {
            pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
            greedy: true,
            inside: {
              "function": /^url/i,
              "punctuation": /^\(|\)$/,
              "string": {
                pattern: RegExp("^" + string.source + "$"),
                alias: "url"
              }
            }
          },
          "selector": {
            pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
            lookbehind: true
          },
          "string": {
            pattern: string,
            greedy: true
          },
          "property": {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: true
          },
          "important": /!important\b/i,
          "function": {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: true
          },
          "punctuation": /[(){};:,]/
        };
        Prism3.languages.css["atrule"].inside.rest = Prism3.languages.css;
        var markup = Prism3.languages.markup;
        if (markup) {
          markup.tag.addInlined("style", "css");
          markup.tag.addAttribute("style", "css");
        }
      })(Prism2);
      Prism2.languages.clike = {
        "comment": [
          {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true,
            greedy: true
          },
          {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true
          }
        ],
        "string": {
          pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        },
        "class-name": {
          pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
          lookbehind: true,
          inside: {
            "punctuation": /[.\\]/
          }
        },
        "keyword": /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        "boolean": /\b(?:true|false)\b/,
        "function": /\b\w+(?=\()/,
        "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        "punctuation": /[{}[\];(),.:]/
      };
      Prism2.languages.javascript = Prism2.languages.extend("clike", {
        "class-name": [
          Prism2.languages.clike["class-name"],
          {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
            lookbehind: true
          }
        ],
        "keyword": [
          {
            pattern: /((?:^|\})\s*)catch\b/,
            lookbehind: true
          },
          {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: true
          }
        ],
        "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        "number": /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
        "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
      });
      Prism2.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
      Prism2.languages.insertBefore("javascript", "keyword", {
        "regex": {
          pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
          lookbehind: true,
          greedy: true,
          inside: {
            "regex-source": {
              pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
              lookbehind: true,
              alias: "language-regex",
              inside: Prism2.languages.regex
            },
            "regex-delimiter": /^\/|\/$/,
            "regex-flags": /^[a-z]+$/
          }
        },
        "function-variable": {
          pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
          alias: "function"
        },
        "parameter": [
          {
            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: true,
            inside: Prism2.languages.javascript
          }
        ],
        "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
      });
      Prism2.languages.insertBefore("javascript", "string", {
        "hashbang": {
          pattern: /^#!.*/,
          greedy: true,
          alias: "comment"
        },
        "template-string": {
          pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
          greedy: true,
          inside: {
            "template-punctuation": {
              pattern: /^`|`$/,
              alias: "string"
            },
            "interpolation": {
              pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
              lookbehind: true,
              inside: {
                "interpolation-punctuation": {
                  pattern: /^\$\{|\}$/,
                  alias: "punctuation"
                },
                rest: Prism2.languages.javascript
              }
            },
            "string": /[\s\S]+/
          }
        }
      });
      if (Prism2.languages.markup) {
        Prism2.languages.markup.tag.addInlined("script", "javascript");
        Prism2.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
      }
      Prism2.languages.js = Prism2.languages.javascript;
      (function() {
        if (typeof Prism2 === "undefined" || typeof document === "undefined") {
          return;
        }
        if (!Element.prototype.matches) {
          Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        }
        var LOADING_MESSAGE = "Loading\u2026";
        var FAILURE_MESSAGE = function(status, message) {
          return "\u2716 Error " + status + " while fetching file: " + message;
        };
        var FAILURE_EMPTY_MESSAGE = "\u2716 Error: File does not exist or is empty";
        var EXTENSIONS = {
          "js": "javascript",
          "py": "python",
          "rb": "ruby",
          "ps1": "powershell",
          "psm1": "powershell",
          "sh": "bash",
          "bat": "batch",
          "h": "c",
          "tex": "latex"
        };
        var STATUS_ATTR = "data-src-status";
        var STATUS_LOADING = "loading";
        var STATUS_LOADED = "loaded";
        var STATUS_FAILED = "failed";
        var SELECTOR = "pre[data-src]:not([" + STATUS_ATTR + '="' + STATUS_LOADED + '"]):not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
        var lang = /\blang(?:uage)?-([\w-]+)\b/i;
        function setLanguageClass(element, language) {
          var className = element.className;
          className = className.replace(lang, " ") + " language-" + language;
          element.className = className.replace(/\s+/g, " ").trim();
        }
        Prism2.hooks.add("before-highlightall", function(env) {
          env.selector += ", " + SELECTOR;
        });
        Prism2.hooks.add("before-sanity-check", function(env) {
          var pre = env.element;
          if (pre.matches(SELECTOR)) {
            env.code = "";
            pre.setAttribute(STATUS_ATTR, STATUS_LOADING);
            var code = pre.appendChild(document.createElement("CODE"));
            code.textContent = LOADING_MESSAGE;
            var src = pre.getAttribute("data-src");
            var language = env.language;
            if (language === "none") {
              var extension = (/\.(\w+)$/.exec(src) || [, "none"])[1];
              language = EXTENSIONS[extension] || extension;
            }
            setLanguageClass(code, language);
            setLanguageClass(pre, language);
            var autoloader = Prism2.plugins.autoloader;
            if (autoloader) {
              autoloader.loadLanguages(language);
            }
            var xhr = new XMLHttpRequest();
            xhr.open("GET", src, true);
            xhr.onreadystatechange = function() {
              if (xhr.readyState == 4) {
                if (xhr.status < 400 && xhr.responseText) {
                  pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
                  code.textContent = xhr.responseText;
                  Prism2.highlightElement(code);
                } else {
                  pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
                  if (xhr.status >= 400) {
                    code.textContent = FAILURE_MESSAGE(xhr.status, xhr.statusText);
                  } else {
                    code.textContent = FAILURE_EMPTY_MESSAGE;
                  }
                }
              }
            };
            xhr.send(null);
          }
        });
        Prism2.plugins.fileHighlight = {
          highlight: function highlight2(container) {
            var elements = (container || document).querySelectorAll(SELECTOR);
            for (var i3 = 0, element; element = elements[i3++]; ) {
              Prism2.highlightElement(element);
            }
          }
        };
        var logged = false;
        Prism2.fileHighlight = function() {
          if (!logged) {
            console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
            logged = true;
          }
          Prism2.plugins.fileHighlight.highlight.apply(this, arguments);
        };
      })();
    }
  });

  // node_modules/preact/compat/dist/compat.module.js
  var compat_module_exports = {};
  __export(compat_module_exports, {
    Children: () => k3,
    Component: () => _,
    Fragment: () => d,
    PureComponent: () => E,
    StrictMode: () => fn,
    Suspense: () => L2,
    SuspenseList: () => M2,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => X,
    cloneElement: () => rn,
    createContext: () => D,
    createElement: () => v,
    createFactory: () => tn,
    createPortal: () => W,
    createRef: () => p,
    default: () => compat_module_default,
    findDOMNode: () => on2,
    flushSync: () => cn,
    forwardRef: () => x3,
    hydrate: () => H2,
    isValidElement: () => en,
    lazy: () => F2,
    memo: () => g3,
    render: () => B2,
    unmountComponentAtNode: () => un,
    unstable_batchedUpdates: () => ln,
    useCallback: () => F,
    useContext: () => T2,
    useDebugValue: () => d2,
    useEffect: () => y2,
    useErrorBoundary: () => q2,
    useImperativeHandle: () => _2,
    useLayoutEffect: () => h2,
    useMemo: () => A2,
    useReducer: () => p2,
    useRef: () => s2,
    useState: () => l2,
    version: () => nn
  });
  function S2(n2, t3) {
    for (var e3 in t3)
      n2[e3] = t3[e3];
    return n2;
  }
  function C2(n2, t3) {
    for (var e3 in n2)
      if (e3 !== "__source" && !(e3 in t3))
        return true;
    for (var r3 in t3)
      if (r3 !== "__source" && n2[r3] !== t3[r3])
        return true;
    return false;
  }
  function E(n2) {
    this.props = n2;
  }
  function g3(n2, t3) {
    function e3(n3) {
      var e4 = this.props.ref, r4 = e4 == n3.ref;
      return !r4 && e4 && (e4.call ? e4(null) : e4.current = null), t3 ? !t3(this.props, n3) || !r4 : C2(this.props, n3);
    }
    function r3(t4) {
      return this.shouldComponentUpdate = e3, v(n2, t4);
    }
    return r3.displayName = "Memo(" + (n2.displayName || n2.name) + ")", r3.prototype.isReactComponent = true, r3.__f = true, r3;
  }
  function x3(n2) {
    function t3(t4, e3) {
      var r3 = S2({}, t4);
      return delete r3.ref, n2(r3, (e3 = t4.ref || e3) && (typeof e3 != "object" || "current" in e3) ? e3 : null);
    }
    return t3.$$typeof = R, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
  }
  function L2() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function U(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__e && t3.__e(n2);
  }
  function F2(n2) {
    var t3, e3, r3;
    function u3(u4) {
      if (t3 || (t3 = n2()).then(function(n3) {
        e3 = n3.default || n3;
      }, function(n3) {
        r3 = n3;
      }), r3)
        throw r3;
      if (!e3)
        throw t3;
      return v(e3, u4);
    }
    return u3.displayName = "Lazy", u3.__f = true, u3;
  }
  function M2() {
    this.u = null, this.o = null;
  }
  function D2(n2) {
    return this.getChildContext = function() {
      return n2.context;
    }, n2.children;
  }
  function I2(n2) {
    var t3 = this, e3 = n2.i;
    t3.componentWillUnmount = function() {
      S(null, t3.l), t3.l = null, t3.i = null;
    }, t3.i && t3.i !== e3 && t3.componentWillUnmount(), n2.__v ? (t3.l || (t3.i = e3, t3.l = { nodeType: 1, parentNode: e3, childNodes: [], appendChild: function(n3) {
      this.childNodes.push(n3), t3.i.appendChild(n3);
    }, insertBefore: function(n3, e4) {
      this.childNodes.push(n3), t3.i.appendChild(n3);
    }, removeChild: function(n3) {
      this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), t3.i.removeChild(n3);
    } }), S(v(D2, { context: t3.context }, n2.__v), t3.l)) : t3.l && t3.componentWillUnmount();
  }
  function W(n2, t3) {
    return v(I2, { __v: n2, i: t3 });
  }
  function B2(n2, t3, e3) {
    return t3.__k == null && (t3.textContent = ""), S(n2, t3), typeof e3 == "function" && e3(), n2 ? n2.__c : null;
  }
  function H2(n2, t3, e3) {
    return q(n2, t3), typeof e3 == "function" && e3(), n2 ? n2.__c : null;
  }
  function Y() {
  }
  function $2() {
    return this.cancelBubble;
  }
  function q3() {
    return this.defaultPrevented;
  }
  function tn(n2) {
    return v.bind(null, n2);
  }
  function en(n2) {
    return !!n2 && n2.$$typeof === j3;
  }
  function rn(n2) {
    return en(n2) ? B.apply(null, arguments) : n2;
  }
  function un(n2) {
    return !!n2.__k && (S(null, n2), true);
  }
  function on2(n2) {
    return n2 && (n2.base || n2.nodeType === 1 && n2) || null;
  }
  var w3, R, N2, k3, A3, O2, T3, j3, P2, V, z2, Z, G, J, K, Q, X, nn, ln, cn, fn, compat_module_default;
  var init_compat_module = __esm({
    "node_modules/preact/compat/dist/compat.module.js"() {
      init_hooks_module();
      init_hooks_module();
      init_preact_module();
      init_preact_module();
      (E.prototype = new _()).isPureReactComponent = true, E.prototype.shouldComponentUpdate = function(n2, t3) {
        return C2(this.props, n2) || C2(this.state, t3);
      };
      w3 = l.__b;
      l.__b = function(n2) {
        n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), w3 && w3(n2);
      };
      R = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
      N2 = function(n2, t3) {
        return n2 == null ? null : A(A(n2).map(t3));
      };
      k3 = { map: N2, forEach: N2, count: function(n2) {
        return n2 ? A(n2).length : 0;
      }, only: function(n2) {
        var t3 = A(n2);
        if (t3.length !== 1)
          throw "Children.only";
        return t3[0];
      }, toArray: A };
      A3 = l.__e;
      l.__e = function(n2, t3, e3) {
        if (n2.then) {
          for (var r3, u3 = t3; u3 = u3.__; )
            if ((r3 = u3.__c) && r3.__c)
              return t3.__e == null && (t3.__e = e3.__e, t3.__k = e3.__k), r3.__c(n2, t3);
        }
        A3(n2, t3, e3);
      };
      O2 = l.unmount;
      l.unmount = function(n2) {
        var t3 = n2.__c;
        t3 && t3.__R && t3.__R(), t3 && n2.__h === true && (n2.type = null), O2 && O2(n2);
      }, (L2.prototype = new _()).__c = function(n2, t3) {
        var e3 = t3.__c, r3 = this;
        r3.t == null && (r3.t = []), r3.t.push(e3);
        var u3 = U(r3.__v), o3 = false, i3 = function() {
          o3 || (o3 = true, e3.__R = null, u3 ? u3(l3) : l3());
        };
        e3.__R = i3;
        var l3 = function() {
          if (!--r3.__u) {
            if (r3.state.__e) {
              var n3 = r3.state.__e;
              r3.__v.__k[0] = function n4(t5, e4, r4) {
                return t5 && (t5.__v = null, t5.__k = t5.__k && t5.__k.map(function(t6) {
                  return n4(t6, e4, r4);
                }), t5.__c && t5.__c.__P === e4 && (t5.__e && r4.insertBefore(t5.__e, t5.__d), t5.__c.__e = true, t5.__c.__P = r4)), t5;
              }(n3, n3.__c.__P, n3.__c.__O);
            }
            var t4;
            for (r3.setState({ __e: r3.__b = null }); t4 = r3.t.pop(); )
              t4.forceUpdate();
          }
        }, c3 = t3.__h === true;
        r3.__u++ || c3 || r3.setState({ __e: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
      }, L2.prototype.componentWillUnmount = function() {
        this.t = [];
      }, L2.prototype.render = function(n2, t3) {
        if (this.__b) {
          if (this.__v.__k) {
            var e3 = document.createElement("div"), r3 = this.__v.__k[0].__c;
            this.__v.__k[0] = function n3(t4, e4, r4) {
              return t4 && (t4.__c && t4.__c.__H && (t4.__c.__H.__.forEach(function(n4) {
                typeof n4.__c == "function" && n4.__c();
              }), t4.__c.__H = null), (t4 = S2({}, t4)).__c != null && (t4.__c.__P === r4 && (t4.__c.__P = e4), t4.__c = null), t4.__k = t4.__k && t4.__k.map(function(t5) {
                return n3(t5, e4, r4);
              })), t4;
            }(this.__b, e3, r3.__O = r3.__P);
          }
          this.__b = null;
        }
        var u3 = t3.__e && v(d, null, n2.fallback);
        return u3 && (u3.__h = null), [v(d, null, t3.__e ? null : n2.children), u3];
      };
      T3 = function(n2, t3, e3) {
        if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && (n2.props.revealOrder[0] !== "t" || !n2.o.size))
          for (e3 = n2.u; e3; ) {
            for (; e3.length > 3; )
              e3.pop()();
            if (e3[1] < e3[0])
              break;
            n2.u = e3 = e3[2];
          }
      };
      (M2.prototype = new _()).__e = function(n2) {
        var t3 = this, e3 = U(t3.__v), r3 = t3.o.get(n2);
        return r3[0]++, function(u3) {
          var o3 = function() {
            t3.props.revealOrder ? (r3.push(u3), T3(t3, n2, r3)) : u3();
          };
          e3 ? e3(o3) : o3();
        };
      }, M2.prototype.render = function(n2) {
        this.u = null, this.o = new Map();
        var t3 = A(n2.children);
        n2.revealOrder && n2.revealOrder[0] === "b" && t3.reverse();
        for (var e3 = t3.length; e3--; )
          this.o.set(t3[e3], this.u = [1, 0, this.u]);
        return n2.children;
      }, M2.prototype.componentDidUpdate = M2.prototype.componentDidMount = function() {
        var n2 = this;
        this.o.forEach(function(t3, e3) {
          T3(n2, e3, t3);
        });
      };
      j3 = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103;
      P2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      V = typeof document != "undefined";
      z2 = function(n2) {
        return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(n2);
      };
      _.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(n2) {
        Object.defineProperty(_.prototype, n2, { configurable: true, get: function() {
          return this["UNSAFE_" + n2];
        }, set: function(t3) {
          Object.defineProperty(this, n2, { configurable: true, writable: true, value: t3 });
        } });
      });
      Z = l.event;
      l.event = function(n2) {
        return Z && (n2 = Z(n2)), n2.persist = Y, n2.isPropagationStopped = $2, n2.isDefaultPrevented = q3, n2.nativeEvent = n2;
      };
      J = { configurable: true, get: function() {
        return this.class;
      } };
      K = l.vnode;
      l.vnode = function(n2) {
        var t3 = n2.type, e3 = n2.props, r3 = e3;
        if (typeof t3 == "string") {
          var u3 = t3.indexOf("-") === -1;
          for (var o3 in r3 = {}, e3) {
            var i3 = e3[o3];
            V && o3 === "children" && t3 === "noscript" || o3 === "value" && "defaultValue" in e3 && i3 == null || (o3 === "defaultValue" && "value" in e3 && e3.value == null ? o3 = "value" : o3 === "download" && i3 === true ? i3 = "" : /ondoubleclick/i.test(o3) ? o3 = "ondblclick" : /^onchange(textarea|input)/i.test(o3 + t3) && !z2(e3.type) ? o3 = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o3) ? o3 = o3.toLowerCase() : u3 && P2.test(o3) ? o3 = o3.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i3 === null && (i3 = void 0), r3[o3] = i3);
          }
          t3 == "select" && r3.multiple && Array.isArray(r3.value) && (r3.value = A(e3.children).forEach(function(n3) {
            n3.props.selected = r3.value.indexOf(n3.props.value) != -1;
          })), t3 == "select" && r3.defaultValue != null && (r3.value = A(e3.children).forEach(function(n3) {
            n3.props.selected = r3.multiple ? r3.defaultValue.indexOf(n3.props.value) != -1 : r3.defaultValue == n3.props.value;
          })), n2.props = r3;
        }
        t3 && e3.class != e3.className && (J.enumerable = "className" in e3, e3.className != null && (r3.class = e3.className), Object.defineProperty(r3, "className", J)), n2.$$typeof = j3, K && K(n2);
      };
      Q = l.__r;
      l.__r = function(n2) {
        Q && Q(n2), G = n2.__c;
      };
      X = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
        return G.__n[n2.__c].props.value;
      } } } };
      nn = "17.0.2";
      ln = function(n2, t3) {
        return n2(t3);
      };
      cn = function(n2, t3) {
        return n2(t3);
      };
      fn = d;
      compat_module_default = { useState: l2, useReducer: p2, useEffect: y2, useLayoutEffect: h2, useRef: s2, useImperativeHandle: _2, useMemo: A2, useCallback: F, useContext: T2, useDebugValue: d2, version: "17.0.2", Children: k3, render: B2, hydrate: H2, unmountComponentAtNode: un, createPortal: W, createElement: v, createContext: D, createFactory: tn, cloneElement: rn, createRef: p, Fragment: d, isValidElement: en, findDOMNode: on2, Component: _, PureComponent: E, memo: g3, forwardRef: x3, flushSync: cn, unstable_batchedUpdates: ln, StrictMode: d, Suspense: L2, SuspenseList: M2, lazy: F2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: X };
    }
  });

  // node_modules/react-simple-code-editor/lib/index.js
  var require_lib = __commonJS({
    "node_modules/react-simple-code-editor/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _extends = Object.assign || function(target) {
        for (var i3 = 1; i3 < arguments.length; i3++) {
          var source = arguments[i3];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i3 = 0; i3 < props.length; i3++) {
            var descriptor = props[i3];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _react = (init_compat_module(), compat_module_exports);
      var React = _interopRequireWildcard(_react);
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i3 in obj) {
          if (keys.indexOf(i3) >= 0)
            continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i3))
            continue;
          target[i3] = obj[i3];
        }
        return target;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var KEYCODE_ENTER = 13;
      var KEYCODE_TAB = 9;
      var KEYCODE_BACKSPACE = 8;
      var KEYCODE_Y = 89;
      var KEYCODE_Z = 90;
      var KEYCODE_M = 77;
      var KEYCODE_PARENS = 57;
      var KEYCODE_BRACKETS = 219;
      var KEYCODE_QUOTE = 222;
      var KEYCODE_BACK_QUOTE = 192;
      var KEYCODE_ESCAPE = 27;
      var HISTORY_LIMIT = 100;
      var HISTORY_TIME_GAP = 3e3;
      var isWindows = "navigator" in window && /Win/i.test(navigator.platform);
      var isMacLike = "navigator" in window && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
      var className = "npm__react-simple-code-editor__textarea";
      var cssText = "\n/**\n * Reset the text fill color so that placeholder is visible\n */\n." + className + ":empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  ." + className + " {\n    color: transparent !important;\n  }\n\n  ." + className + "::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n";
      var Editor2 = function(_React$Component) {
        _inherits(Editor3, _React$Component);
        function Editor3() {
          var _ref;
          var _temp, _this, _ret;
          _classCallCheck(this, Editor3);
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Editor3.__proto__ || Object.getPrototypeOf(Editor3)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            capture: true
          }, _this._recordCurrentState = function() {
            var input = _this._input;
            if (!input)
              return;
            var value = input.value, selectionStart = input.selectionStart, selectionEnd = input.selectionEnd;
            _this._recordChange({
              value,
              selectionStart,
              selectionEnd
            });
          }, _this._getLines = function(text, position) {
            return text.substring(0, position).split("\n");
          }, _this._recordChange = function(record) {
            var overwrite = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            var _this$_history = _this._history, stack = _this$_history.stack, offset = _this$_history.offset;
            if (stack.length && offset > -1) {
              _this._history.stack = stack.slice(0, offset + 1);
              var count = _this._history.stack.length;
              if (count > HISTORY_LIMIT) {
                var extras = count - HISTORY_LIMIT;
                _this._history.stack = stack.slice(extras, count);
                _this._history.offset = Math.max(_this._history.offset - extras, 0);
              }
            }
            var timestamp = Date.now();
            if (overwrite) {
              var last = _this._history.stack[_this._history.offset];
              if (last && timestamp - last.timestamp < HISTORY_TIME_GAP) {
                var re = /[^a-z0-9]([a-z0-9]+)$/i;
                var previous = _this._getLines(last.value, last.selectionStart).pop().match(re);
                var current = _this._getLines(record.value, record.selectionStart).pop().match(re);
                if (previous && current && current[1].startsWith(previous[1])) {
                  _this._history.stack[_this._history.offset] = _extends({}, record, { timestamp });
                  return;
                }
              }
            }
            _this._history.stack.push(_extends({}, record, { timestamp }));
            _this._history.offset++;
          }, _this._updateInput = function(record) {
            var input = _this._input;
            if (!input)
              return;
            input.value = record.value;
            input.selectionStart = record.selectionStart;
            input.selectionEnd = record.selectionEnd;
            _this.props.onValueChange(record.value);
          }, _this._applyEdits = function(record) {
            var input = _this._input;
            var last = _this._history.stack[_this._history.offset];
            if (last && input) {
              _this._history.stack[_this._history.offset] = _extends({}, last, {
                selectionStart: input.selectionStart,
                selectionEnd: input.selectionEnd
              });
            }
            _this._recordChange(record);
            _this._updateInput(record);
          }, _this._undoEdit = function() {
            var _this$_history2 = _this._history, stack = _this$_history2.stack, offset = _this$_history2.offset;
            var record = stack[offset - 1];
            if (record) {
              _this._updateInput(record);
              _this._history.offset = Math.max(offset - 1, 0);
            }
          }, _this._redoEdit = function() {
            var _this$_history3 = _this._history, stack = _this$_history3.stack, offset = _this$_history3.offset;
            var record = stack[offset + 1];
            if (record) {
              _this._updateInput(record);
              _this._history.offset = Math.min(offset + 1, stack.length - 1);
            }
          }, _this._handleKeyDown = function(e3) {
            var _this$props = _this.props, tabSize = _this$props.tabSize, insertSpaces = _this$props.insertSpaces, ignoreTabKey = _this$props.ignoreTabKey, onKeyDown = _this$props.onKeyDown;
            if (onKeyDown) {
              onKeyDown(e3);
              if (e3.defaultPrevented) {
                return;
              }
            }
            if (e3.keyCode === KEYCODE_ESCAPE) {
              e3.target.blur();
            }
            var _e$target = e3.target, value = _e$target.value, selectionStart = _e$target.selectionStart, selectionEnd = _e$target.selectionEnd;
            var tabCharacter = (insertSpaces ? " " : "	").repeat(tabSize);
            if (e3.keyCode === KEYCODE_TAB && !ignoreTabKey && _this.state.capture) {
              e3.preventDefault();
              if (e3.shiftKey) {
                var linesBeforeCaret = _this._getLines(value, selectionStart);
                var startLine = linesBeforeCaret.length - 1;
                var endLine = _this._getLines(value, selectionEnd).length - 1;
                var nextValue = value.split("\n").map(function(line2, i3) {
                  if (i3 >= startLine && i3 <= endLine && line2.startsWith(tabCharacter)) {
                    return line2.substring(tabCharacter.length);
                  }
                  return line2;
                }).join("\n");
                if (value !== nextValue) {
                  var startLineText = linesBeforeCaret[startLine];
                  _this._applyEdits({
                    value: nextValue,
                    selectionStart: startLineText.startsWith(tabCharacter) ? selectionStart - tabCharacter.length : selectionStart,
                    selectionEnd: selectionEnd - (value.length - nextValue.length)
                  });
                }
              } else if (selectionStart !== selectionEnd) {
                var _linesBeforeCaret = _this._getLines(value, selectionStart);
                var _startLine = _linesBeforeCaret.length - 1;
                var _endLine = _this._getLines(value, selectionEnd).length - 1;
                var _startLineText = _linesBeforeCaret[_startLine];
                _this._applyEdits({
                  value: value.split("\n").map(function(line2, i3) {
                    if (i3 >= _startLine && i3 <= _endLine) {
                      return tabCharacter + line2;
                    }
                    return line2;
                  }).join("\n"),
                  selectionStart: /\S/.test(_startLineText) ? selectionStart + tabCharacter.length : selectionStart,
                  selectionEnd: selectionEnd + tabCharacter.length * (_endLine - _startLine + 1)
                });
              } else {
                var updatedSelection = selectionStart + tabCharacter.length;
                _this._applyEdits({
                  value: value.substring(0, selectionStart) + tabCharacter + value.substring(selectionEnd),
                  selectionStart: updatedSelection,
                  selectionEnd: updatedSelection
                });
              }
            } else if (e3.keyCode === KEYCODE_BACKSPACE) {
              var hasSelection = selectionStart !== selectionEnd;
              var textBeforeCaret = value.substring(0, selectionStart);
              if (textBeforeCaret.endsWith(tabCharacter) && !hasSelection) {
                e3.preventDefault();
                var _updatedSelection = selectionStart - tabCharacter.length;
                _this._applyEdits({
                  value: value.substring(0, selectionStart - tabCharacter.length) + value.substring(selectionEnd),
                  selectionStart: _updatedSelection,
                  selectionEnd: _updatedSelection
                });
              }
            } else if (e3.keyCode === KEYCODE_ENTER) {
              if (selectionStart === selectionEnd) {
                var line = _this._getLines(value, selectionStart).pop();
                var matches = line.match(/^\s+/);
                if (matches && matches[0]) {
                  e3.preventDefault();
                  var indent = "\n" + matches[0];
                  var _updatedSelection2 = selectionStart + indent.length;
                  _this._applyEdits({
                    value: value.substring(0, selectionStart) + indent + value.substring(selectionEnd),
                    selectionStart: _updatedSelection2,
                    selectionEnd: _updatedSelection2
                  });
                }
              }
            } else if (e3.keyCode === KEYCODE_PARENS || e3.keyCode === KEYCODE_BRACKETS || e3.keyCode === KEYCODE_QUOTE || e3.keyCode === KEYCODE_BACK_QUOTE) {
              var chars = void 0;
              if (e3.keyCode === KEYCODE_PARENS && e3.shiftKey) {
                chars = ["(", ")"];
              } else if (e3.keyCode === KEYCODE_BRACKETS) {
                if (e3.shiftKey) {
                  chars = ["{", "}"];
                } else {
                  chars = ["[", "]"];
                }
              } else if (e3.keyCode === KEYCODE_QUOTE) {
                if (e3.shiftKey) {
                  chars = ['"', '"'];
                } else {
                  chars = ["'", "'"];
                }
              } else if (e3.keyCode === KEYCODE_BACK_QUOTE && !e3.shiftKey) {
                chars = ["`", "`"];
              }
              if (selectionStart !== selectionEnd && chars) {
                e3.preventDefault();
                _this._applyEdits({
                  value: value.substring(0, selectionStart) + chars[0] + value.substring(selectionStart, selectionEnd) + chars[1] + value.substring(selectionEnd),
                  selectionStart,
                  selectionEnd: selectionEnd + 2
                });
              }
            } else if ((isMacLike ? e3.metaKey && e3.keyCode === KEYCODE_Z : e3.ctrlKey && e3.keyCode === KEYCODE_Z) && !e3.shiftKey && !e3.altKey) {
              e3.preventDefault();
              _this._undoEdit();
            } else if ((isMacLike ? e3.metaKey && e3.keyCode === KEYCODE_Z && e3.shiftKey : isWindows ? e3.ctrlKey && e3.keyCode === KEYCODE_Y : e3.ctrlKey && e3.keyCode === KEYCODE_Z && e3.shiftKey) && !e3.altKey) {
              e3.preventDefault();
              _this._redoEdit();
            } else if (e3.keyCode === KEYCODE_M && e3.ctrlKey && (isMacLike ? e3.shiftKey : true)) {
              e3.preventDefault();
              _this.setState(function(state) {
                return {
                  capture: !state.capture
                };
              });
            }
          }, _this._handleChange = function(e3) {
            var _e$target2 = e3.target, value = _e$target2.value, selectionStart = _e$target2.selectionStart, selectionEnd = _e$target2.selectionEnd;
            _this._recordChange({
              value,
              selectionStart,
              selectionEnd
            }, true);
            _this.props.onValueChange(value);
          }, _this._history = {
            stack: [],
            offset: -1
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }
        _createClass(Editor3, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            this._recordCurrentState();
          }
        }, {
          key: "render",
          value: function render2() {
            var _this2 = this;
            var _props = this.props, value = _props.value, style = _props.style, padding = _props.padding, highlight2 = _props.highlight, textareaId = _props.textareaId, textareaClassName = _props.textareaClassName, autoFocus = _props.autoFocus, disabled = _props.disabled, form = _props.form, maxLength = _props.maxLength, minLength = _props.minLength, name = _props.name, placeholder = _props.placeholder, readOnly = _props.readOnly, required = _props.required, onClick = _props.onClick, onFocus = _props.onFocus, onBlur = _props.onBlur, onKeyUp = _props.onKeyUp, onKeyDown = _props.onKeyDown, onValueChange = _props.onValueChange, tabSize = _props.tabSize, insertSpaces = _props.insertSpaces, ignoreTabKey = _props.ignoreTabKey, preClassName = _props.preClassName, rest = _objectWithoutProperties(_props, ["value", "style", "padding", "highlight", "textareaId", "textareaClassName", "autoFocus", "disabled", "form", "maxLength", "minLength", "name", "placeholder", "readOnly", "required", "onClick", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onValueChange", "tabSize", "insertSpaces", "ignoreTabKey", "preClassName"]);
            var contentStyle = {
              paddingTop: padding,
              paddingRight: padding,
              paddingBottom: padding,
              paddingLeft: padding
            };
            var highlighted = highlight2(value);
            return React.createElement("div", _extends({}, rest, { style: _extends({}, styles.container, style) }), React.createElement("textarea", {
              ref: function ref(c3) {
                return _this2._input = c3;
              },
              style: _extends({}, styles.editor, styles.textarea, contentStyle),
              className: className + (textareaClassName ? " " + textareaClassName : ""),
              id: textareaId,
              value,
              onChange: this._handleChange,
              onKeyDown: this._handleKeyDown,
              onClick,
              onKeyUp,
              onFocus,
              onBlur,
              disabled,
              form,
              maxLength,
              minLength,
              name,
              placeholder,
              readOnly,
              required,
              autoFocus,
              autoCapitalize: "off",
              autoComplete: "off",
              autoCorrect: "off",
              spellCheck: false,
              "data-gramm": false
            }), React.createElement("pre", _extends({
              className: preClassName,
              "aria-hidden": "true",
              style: _extends({}, styles.editor, styles.highlight, contentStyle)
            }, typeof highlighted === "string" ? { dangerouslySetInnerHTML: { __html: highlighted + "<br />" } } : { children: highlighted })), React.createElement("style", { type: "text/css", dangerouslySetInnerHTML: { __html: cssText } }));
          }
        }, {
          key: "session",
          get: function get() {
            return {
              history: this._history
            };
          },
          set: function set(session) {
            this._history = session.history;
          }
        }]);
        return Editor3;
      }(React.Component);
      Editor2.defaultProps = {
        tabSize: 2,
        insertSpaces: true,
        ignoreTabKey: false,
        padding: 0
      };
      exports.default = Editor2;
      var styles = {
        container: {
          position: "relative",
          textAlign: "left",
          boxSizing: "border-box",
          padding: 0,
          overflow: "hidden"
        },
        textarea: {
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          resize: "none",
          color: "inherit",
          overflow: "hidden",
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          WebkitTextFillColor: "transparent"
        },
        highlight: {
          position: "relative",
          pointerEvents: "none"
        },
        editor: {
          margin: 0,
          border: 0,
          background: "none",
          boxSizing: "inherit",
          display: "inherit",
          fontFamily: "inherit",
          fontSize: "inherit",
          fontStyle: "inherit",
          fontVariantLigatures: "inherit",
          fontWeight: "inherit",
          letterSpacing: "inherit",
          lineHeight: "inherit",
          tabSize: "inherit",
          textIndent: "inherit",
          textRendering: "inherit",
          textTransform: "inherit",
          whiteSpace: "pre-wrap",
          wordBreak: "keep-all",
          overflowWrap: "break-word"
        }
      };
    }
  });

  // ../../../../../../private/var/folders/ts/zryjz1lx11gcydvz5pfmn9x00000gn/T/82ccb01e-1619-4d1e-8ac2-507f9b10adb1/styles.js
  var styles_default;
  var init_styles = __esm({
    "../../../../../../private/var/folders/ts/zryjz1lx11gcydvz5pfmn9x00000gn/T/82ccb01e-1619-4d1e-8ac2-507f9b10adb1/styles.js"() {
      if (document.getElementById("e318750a65") === null) {
        const element = document.createElement("style");
        element.id = "e318750a65";
        element.textContent = `._container_1itdc_1 {
  height: 164px;
  overflow: auto;
}

._editor_1itdc_6 {
  min-height: 100%;
  font-size: var(--font-size-16);
  font-family: var(--font-family-code);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0QyIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBoZWlnaHQ6IDE2NHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmVkaXRvciB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTE2KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWNvZGUpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      styles_default = { "container": "_container_1itdc_1", "editor": "_editor_1itdc_6" };
    }
  });

  // node_modules/prismjs/components/prism-clike.js
  var init_prism_clike = __esm({
    "node_modules/prismjs/components/prism-clike.js"() {
      Prism.languages.clike = {
        "comment": [
          {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true,
            greedy: true
          },
          {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true
          }
        ],
        "string": {
          pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        },
        "class-name": {
          pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
          lookbehind: true,
          inside: {
            "punctuation": /[.\\]/
          }
        },
        "keyword": /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        "boolean": /\b(?:true|false)\b/,
        "function": /\b\w+(?=\()/,
        "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        "punctuation": /[{}[\];(),.:]/
      };
    }
  });

  // node_modules/prismjs/components/prism-javascript.js
  var init_prism_javascript = __esm({
    "node_modules/prismjs/components/prism-javascript.js"() {
      Prism.languages.javascript = Prism.languages.extend("clike", {
        "class-name": [
          Prism.languages.clike["class-name"],
          {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
            lookbehind: true
          }
        ],
        "keyword": [
          {
            pattern: /((?:^|\})\s*)catch\b/,
            lookbehind: true
          },
          {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: true
          }
        ],
        "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        "number": /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
        "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
      });
      Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
      Prism.languages.insertBefore("javascript", "keyword", {
        "regex": {
          pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
          lookbehind: true,
          greedy: true,
          inside: {
            "regex-source": {
              pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
              lookbehind: true,
              alias: "language-regex",
              inside: Prism.languages.regex
            },
            "regex-delimiter": /^\/|\/$/,
            "regex-flags": /^[a-z]+$/
          }
        },
        "function-variable": {
          pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
          alias: "function"
        },
        "parameter": [
          {
            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: true,
            inside: Prism.languages.javascript
          },
          {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: true,
            inside: Prism.languages.javascript
          },
          {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: true,
            inside: Prism.languages.javascript
          },
          {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: true,
            inside: Prism.languages.javascript
          }
        ],
        "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
      });
      Prism.languages.insertBefore("javascript", "string", {
        "hashbang": {
          pattern: /^#!.*/,
          greedy: true,
          alias: "comment"
        },
        "template-string": {
          pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
          greedy: true,
          inside: {
            "template-punctuation": {
              pattern: /^`|`$/,
              alias: "string"
            },
            "interpolation": {
              pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
              lookbehind: true,
              inside: {
                "interpolation-punctuation": {
                  pattern: /^\$\{|\}$/,
                  alias: "punctuation"
                },
                rest: Prism.languages.javascript
              }
            },
            "string": /[\s\S]+/
          }
        }
      });
      if (Prism.languages.markup) {
        Prism.languages.markup.tag.addInlined("script", "javascript");
        Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
      }
      Prism.languages.js = Prism.languages.javascript;
    }
  });

  // ../../../../../../private/var/folders/ts/zryjz1lx11gcydvz5pfmn9x00000gn/T/4c8f6da5-ae60-4d92-9c28-b1487bf46d49/prism.js
  var init_prism = __esm({
    "../../../../../../private/var/folders/ts/zryjz1lx11gcydvz5pfmn9x00000gn/T/4c8f6da5-ae60-4d92-9c28-b1487bf46d49/prism.js"() {
      if (document.getElementById("0f53578318") === null) {
        const element = document.createElement("style");
        element.id = "0f53578318";
        element.textContent = `/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

code[class*="language-"],
pre[class*="language-"] {
	color: black;
	background: none;
	text-shadow: 0 1px white;
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
	text-shadow: none;
	background: #b3d4fc;
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
	text-shadow: none;
	background: #b3d4fc;
}

@media print {
	code[class*="language-"],
	pre[class*="language-"] {
		text-shadow: none;
	}
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #f5f2f0;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: slategray;
}

.token.punctuation {
	color: #999;
}

.token.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
	color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
	color: #9a6e3a;
	/* This background color was intended by the author of this theme. */
	background: hsla(0, 0%, 100%, .5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
	color: #07a;
}

.token.function,
.token.class-name {
	color: #DD4A68;
}

.token.regex,
.token.important,
.token.variable {
	color: #e90;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}
`;
        document.head.append(element);
      }
    }
  });

  // src/ui.tsx
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  function Plugin() {
    const [code, setCode] = l2(`describe interface as "Sign up" {
  "Hello world"
}`);
    const handleInsertCodeButtonClick = F(function() {
      emit("INSERT_CODE", code);
    }, [code]);
    return /* @__PURE__ */ v(Container, null, /* @__PURE__ */ v("div", {
      class: styles_default.container
    }, /* @__PURE__ */ v(import_react_simple_code_editor.default, {
      highlight: function(code2) {
        return (0, import_prismjs.highlight)(code2, import_prismjs.languages.js, "js");
      },
      onValueChange: setCode,
      preClassName: styles_default.editor,
      textareaClassName: styles_default.editor,
      value: code
    })), /* @__PURE__ */ v(Button, {
      onClick: handleInsertCodeButtonClick
    }, "Insert Code"));
  }
  var import_prismjs, import_react_simple_code_editor, ui_default;
  var init_ui = __esm({
    "src/ui.tsx"() {
      init_lib2();
      init_lib();
      init_preact_module();
      init_hooks_module();
      import_prismjs = __toModule(require_prism());
      import_react_simple_code_editor = __toModule(require_lib());
      init_styles();
      init_prism_clike();
      init_prism_javascript();
      init_prism();
      ui_default = render(Plugin);
    }
  });

  // <stdin>
  var rootNode = document.getElementById("create-figma-plugin");
  var modules = { "src/main.ts--default": (init_ui(), ui_exports)["default"] };
  var commandId = __FIGMA_COMMAND__ === "" ? "src/main.ts--default" : __FIGMA_COMMAND__;
  if (typeof modules[commandId] === "undefined") {
    throw new Error("No UI defined for command `" + commandId + "`");
  }
  modules[commandId](rootNode, __SHOW_UI_DATA__);
})();
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
