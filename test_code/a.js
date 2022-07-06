(function () {
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML =
    ".shz-frame-error{height:400px;min-height:400px}.shz-frame-error .error-page p{margin:10px auto;line-height:1.7}.shz-frame-error .error-page a{font-size:22px}.shz-frame-error .error-page svg{height:60px;width:60px;margin-bottom:30px;fill:#08f;vertical-align:middle}.shz-frame-error .panel-landing{border-bottom:0;border-top:0;padding-bottom:0}@media (max-width:649px){.shz-frame-error .error-page{padding-top:30px}}";
  document.getElementsByTagName("head")[0].appendChild(style);
})();
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.Handlebars = t())
    : (e.Handlebars = t());
})(this, function () {
  return (function (e) {
    var t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      var o = (t[n] = { exports: {}, id: n, loaded: !1 });
      return e[n].call(o.exports, o, o.exports, r), (o.loaded = !0), o.exports;
    }
    return (r.m = e), (r.c = t), (r.p = ""), r(0);
  })([
    function (e, t, r) {
      "use strict";
      var n = r(1).default,
        o = r(2).default;
      t.__esModule = !0;
      var a = n(r(3)),
        i = o(r(36)),
        u = o(r(5)),
        l = n(r(4)),
        s = n(r(37)),
        c = o(r(43));
      function f() {
        var e = new a.HandlebarsEnvironment();
        return (
          l.extend(e, a),
          (e.SafeString = i.default),
          (e.Exception = u.default),
          (e.Utils = l),
          (e.escapeExpression = l.escapeExpression),
          (e.VM = s),
          (e.template = function (t) {
            return s.template(t, e);
          }),
          e
        );
      }
      var p = f();
      (p.create = f),
        c.default(p),
        (p.default = p),
        (t.default = p),
        (e.exports = t.default);
    },
    function (e, t) {
      "use strict";
      (t.default = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }),
        (t.__esModule = !0);
    },
    function (e, t) {
      "use strict";
      (t.default = function (e) {
        return e && e.__esModule ? e : { default: e };
      }),
        (t.__esModule = !0);
    },
    function (e, t, r) {
      "use strict";
      var n = r(2).default;
      (t.__esModule = !0), (t.HandlebarsEnvironment = c);
      var o = r(4),
        a = n(r(5)),
        i = r(9),
        u = r(29),
        l = n(r(31)),
        s = r(32);
      function c(e, t, r) {
        (this.helpers = e || {}),
          (this.partials = t || {}),
          (this.decorators = r || {}),
          i.registerDefaultHelpers(this),
          u.registerDefaultDecorators(this);
      }
      (t.VERSION = "4.7.6"),
        (t.COMPILER_REVISION = 8),
        (t.LAST_COMPATIBLE_COMPILER_REVISION = 7),
        (t.REVISION_CHANGES = {
          1: "<= 1.0.rc.2",
          2: "== 1.0.0-rc.3",
          3: "== 1.0.0-rc.4",
          4: "== 1.x.x",
          5: "== 2.0.0-alpha.x",
          6: ">= 2.0.0-beta.1",
          7: ">= 4.0.0 <4.3.0",
          8: ">= 4.3.0",
        }),
        (c.prototype = {
          constructor: c,
          logger: l.default,
          log: l.default.log,
          registerHelper: function (e, t) {
            if ("[object Object]" === o.toString.call(e)) {
              if (t)
                throw new a.default("Arg not supported with multiple helpers");
              o.extend(this.helpers, e);
            } else this.helpers[e] = t;
          },
          unregisterHelper: function (e) {
            delete this.helpers[e];
          },
          registerPartial: function (e, t) {
            if ("[object Object]" === o.toString.call(e))
              o.extend(this.partials, e);
            else {
              if (void 0 === t)
                throw new a.default(
                  'Attempting to register a partial called "' +
                    e +
                    '" as undefined'
                );
              this.partials[e] = t;
            }
          },
          unregisterPartial: function (e) {
            delete this.partials[e];
          },
          registerDecorator: function (e, t) {
            if ("[object Object]" === o.toString.call(e)) {
              if (t)
                throw new a.default(
                  "Arg not supported with multiple decorators"
                );
              o.extend(this.decorators, e);
            } else this.decorators[e] = t;
          },
          unregisterDecorator: function (e) {
            delete this.decorators[e];
          },
          resetLoggedPropertyAccesses: function () {
            s.resetLoggedProperties();
          },
        });
      var f = l.default.log;
      (t.log = f), (t.createFrame = o.createFrame), (t.logger = l.default);
    },
    function (e, t) {
      "use strict";
      (t.__esModule = !0),
        (t.extend = i),
        (t.indexOf = function (e, t) {
          for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
          return -1;
        }),
        (t.escapeExpression = function (e) {
          if ("string" != typeof e) {
            if (e && e.toHTML) return e.toHTML();
            if (null == e) return "";
            if (!e) return e + "";
            e = "" + e;
          }
          return o.test(e) ? e.replace(n, a) : e;
        }),
        (t.isEmpty = function (e) {
          return (!e && 0 !== e) || !(!s(e) || 0 !== e.length);
        }),
        (t.createFrame = function (e) {
          var t = i({}, e);
          return (t._parent = e), t;
        }),
        (t.blockParams = function (e, t) {
          return (e.path = t), e;
        }),
        (t.appendContextPath = function (e, t) {
          return (e ? e + "." : "") + t;
        });
      var r = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;",
          "=": "&#x3D;",
        },
        n = /[&<>"'`=]/g,
        o = /[&<>"'`=]/;
      function a(e) {
        return r[e];
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++)
          for (var r in arguments[t])
            Object.prototype.hasOwnProperty.call(arguments[t], r) &&
              (e[r] = arguments[t][r]);
        return e;
      }
      var u = Object.prototype.toString;
      t.toString = u;
      var l = function (e) {
        return "function" == typeof e;
      };
      l(/x/) &&
        (t.isFunction = l =
          function (e) {
            return "function" == typeof e && "[object Function]" === u.call(e);
          }),
        (t.isFunction = l);
      var s =
        Array.isArray ||
        function (e) {
          return (
            !(!e || "object" != typeof e) && "[object Array]" === u.call(e)
          );
        };
      t.isArray = s;
    },
    function (e, t, r) {
      "use strict";
      var n = r(6).default;
      t.__esModule = !0;
      var o = [
        "description",
        "fileName",
        "lineNumber",
        "endLineNumber",
        "message",
        "name",
        "number",
        "stack",
      ];
      function a(e, t) {
        var r = t && t.loc,
          i = void 0,
          u = void 0,
          l = void 0,
          s = void 0;
        r &&
          ((i = r.start.line),
          (u = r.end.line),
          (l = r.start.column),
          (s = r.end.column),
          (e += " - " + i + ":" + l));
        for (
          var c = Error.prototype.constructor.call(this, e), f = 0;
          f < o.length;
          f++
        )
          this[o[f]] = c[o[f]];
        Error.captureStackTrace && Error.captureStackTrace(this, a);
        try {
          r &&
            ((this.lineNumber = i),
            (this.endLineNumber = u),
            n
              ? (Object.defineProperty(this, "column", {
                  value: l,
                  enumerable: !0,
                }),
                Object.defineProperty(this, "endColumn", {
                  value: s,
                  enumerable: !0,
                }))
              : ((this.column = l), (this.endColumn = s)));
        } catch (e) {}
      }
      (a.prototype = new Error()), (t.default = a), (e.exports = t.default);
    },
    function (e, t, r) {
      e.exports = { default: r(7), __esModule: !0 };
    },
    function (e, t, r) {
      var n = r(8);
      e.exports = function (e, t, r) {
        return n.setDesc(e, t, r);
      };
    },
    function (e, t) {
      var r = Object;
      e.exports = {
        create: r.create,
        getProto: r.getPrototypeOf,
        isEnum: {}.propertyIsEnumerable,
        getDesc: r.getOwnPropertyDescriptor,
        setDesc: r.defineProperty,
        setDescs: r.defineProperties,
        getKeys: r.keys,
        getNames: r.getOwnPropertyNames,
        getSymbols: r.getOwnPropertySymbols,
        each: [].forEach,
      };
    },
    function (e, t, r) {
      "use strict";
      var n = r(2).default;
      (t.__esModule = !0),
        (t.registerDefaultHelpers = function (e) {
          o.default(e),
            a.default(e),
            i.default(e),
            u.default(e),
            l.default(e),
            s.default(e),
            c.default(e);
        }),
        (t.moveHelperToHooks = function (e, t, r) {
          e.helpers[t] &&
            ((e.hooks[t] = e.helpers[t]), r || delete e.helpers[t]);
        });
      var o = n(r(10)),
        a = n(r(11)),
        i = n(r(24)),
        u = n(r(25)),
        l = n(r(26)),
        s = n(r(27)),
        c = n(r(28));
    },
    function (e, t, r) {
      "use strict";
      t.__esModule = !0;
      var n = r(4);
      (t.default = function (e) {
        e.registerHelper("blockHelperMissing", function (t, r) {
          var o = r.inverse,
            a = r.fn;
          if (!0 === t) return a(this);
          if (!1 === t || null == t) return o(this);
          if (n.isArray(t))
            return t.length > 0
              ? (r.ids && (r.ids = [r.name]), e.helpers.each(t, r))
              : o(this);
          if (r.data && r.ids) {
            var i = n.createFrame(r.data);
            (i.contextPath = n.appendContextPath(r.data.contextPath, r.name)),
              (r = { data: i });
          }
          return a(t, r);
        });
      }),
        (e.exports = t.default);
    },
    function (e, t, r) {
      (function (n) {
        "use strict";
        var o = r(12).default,
          a = r(2).default;
        t.__esModule = !0;
        var i = r(4),
          u = a(r(5));
        (t.default = function (e) {
          e.registerHelper("each", function (e, t) {
            if (!t) throw new u.default("Must pass iterator to #each");
            var r,
              a = t.fn,
              l = t.inverse,
              s = 0,
              c = "",
              f = void 0,
              p = void 0;
            function d(t, r, n) {
              f &&
                ((f.key = t),
                (f.index = r),
                (f.first = 0 === r),
                (f.last = !!n),
                p && (f.contextPath = p + t)),
                (c += a(e[t], {
                  data: f,
                  blockParams: i.blockParams([e[t], t], [p + t, null]),
                }));
            }
            if (
              (t.data &&
                t.ids &&
                (p = i.appendContextPath(t.data.contextPath, t.ids[0]) + "."),
              i.isFunction(e) && (e = e.call(this)),
              t.data && (f = i.createFrame(t.data)),
              e && "object" == typeof e)
            )
              if (i.isArray(e))
                for (var h = e.length; s < h; s++)
                  s in e && d(s, s, s === e.length - 1);
              else if (n.Symbol && e[n.Symbol.iterator]) {
                for (
                  var v = [], m = e[n.Symbol.iterator](), g = m.next();
                  !g.done;
                  g = m.next()
                )
                  v.push(g.value);
                for (h = (e = v).length; s < h; s++)
                  d(s, s, s === e.length - 1);
              } else
                (r = void 0),
                  o(e).forEach(function (e) {
                    void 0 !== r && d(r, s - 1), (r = e), s++;
                  }),
                  void 0 !== r && d(r, s - 1, !0);
            return 0 === s && (c = l(this)), c;
          });
        }),
          (e.exports = t.default);
      }.call(
        t,
        (function () {
          return this;
        })()
      ));
    },
    function (e, t, r) {
      e.exports = { default: r(13), __esModule: !0 };
    },
    function (e, t, r) {
      r(14), (e.exports = r(20).Object.keys);
    },
    function (e, t, r) {
      var n = r(15);
      r(17)("keys", function (e) {
        return function (t) {
          return e(n(t));
        };
      });
    },
    function (e, t, r) {
      var n = r(16);
      e.exports = function (e) {
        return Object(n(e));
      };
    },
    function (e, t) {
      e.exports = function (e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e;
      };
    },
    function (e, t, r) {
      var n = r(18),
        o = r(20),
        a = r(23);
      e.exports = function (e, t) {
        var r = (o.Object || {})[e] || Object[e],
          i = {};
        (i[e] = t(r)),
          n(
            n.S +
              n.F *
                a(function () {
                  r(1);
                }),
            "Object",
            i
          );
      };
    },
    function (e, t, r) {
      var n = r(19),
        o = r(20),
        a = r(21),
        i = function (e, t, r) {
          var u,
            l,
            s,
            c = e & i.F,
            f = e & i.G,
            p = e & i.S,
            d = e & i.P,
            h = e & i.B,
            v = e & i.W,
            m = f ? o : o[t] || (o[t] = {}),
            g = f ? n : p ? n[t] : (n[t] || {}).prototype;
          for (u in (f && (r = t), r))
            ((l = !c && g && u in g) && u in m) ||
              ((s = l ? g[u] : r[u]),
              (m[u] =
                f && "function" != typeof g[u]
                  ? r[u]
                  : h && l
                  ? a(s, n)
                  : v && g[u] == s
                  ? (function (e) {
                      var t = function (t) {
                        return this instanceof e ? new e(t) : e(t);
                      };
                      return (t.prototype = e.prototype), t;
                    })(s)
                  : d && "function" == typeof s
                  ? a(Function.call, s)
                  : s),
              d && ((m.prototype || (m.prototype = {}))[u] = s));
        };
      (i.F = 1),
        (i.G = 2),
        (i.S = 4),
        (i.P = 8),
        (i.B = 16),
        (i.W = 32),
        (e.exports = i);
    },
    function (e, t) {
      var r = (e.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")());
      "number" == typeof __g && (__g = r);
    },
    function (e, t) {
      var r = (e.exports = { version: "1.2.6" });
      "number" == typeof __e && (__e = r);
    },
    function (e, t, r) {
      var n = r(22);
      e.exports = function (e, t, r) {
        if ((n(e), void 0 === t)) return e;
        switch (r) {
          case 1:
            return function (r) {
              return e.call(t, r);
            };
          case 2:
            return function (r, n) {
              return e.call(t, r, n);
            };
          case 3:
            return function (r, n, o) {
              return e.call(t, r, n, o);
            };
        }
        return function () {
          return e.apply(t, arguments);
        };
      };
    },
    function (e, t) {
      e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e;
      };
    },
    function (e, t) {
      e.exports = function (e) {
        try {
          return !!e();
        } catch (e) {
          return !0;
        }
      };
    },
    function (e, t, r) {
      "use strict";
      var n = r(2).default;
      t.__esModule = !0;
      var o = n(r(5));
      (t.default = function (e) {
        e.registerHelper("helperMissing", function () {
          if (1 !== arguments.length)
            throw new o.default(
              'Missing helper: "' + arguments[arguments.length - 1].name + '"'
            );
        });
      }),
        (e.exports = t.default);
    },
    function (e, t, r) {
      "use strict";
      var n = r(2).default;
      t.__esModule = !0;
      var o = r(4),
        a = n(r(5));
      (t.default = function (e) {
        e.registerHelper("if", function (e, t) {
          if (2 != arguments.length)
            throw new a.default("#if requires exactly one argument");
          return (
            o.isFunction(e) && (e = e.call(this)),
            (!t.hash.includeZero && !e) || o.isEmpty(e)
              ? t.inverse(this)
              : t.fn(this)
          );
        }),
          e.registerHelper("unless", function (t, r) {
            if (2 != arguments.length)
              throw new a.default("#unless requires exactly one argument");
            return e.helpers.if.call(this, t, {
              fn: r.inverse,
              inverse: r.fn,
              hash: r.hash,
            });
          });
      }),
        (e.exports = t.default);
    },
    function (e, t) {
      "use strict";
      (t.__esModule = !0),
        (t.default = function (e) {
          e.registerHelper("log", function () {
            for (
              var t = [void 0], r = arguments[arguments.length - 1], n = 0;
              n < arguments.length - 1;
              n++
            )
              t.push(arguments[n]);
            var o = 1;
            null != r.hash.level
              ? (o = r.hash.level)
              : r.data && null != r.data.level && (o = r.data.level),
              (t[0] = o),
              e.log.apply(e, t);
          });
        }),
        (e.exports = t.default);
    },
    function (e, t) {
      "use strict";
      (t.__esModule = !0),
        (t.default = function (e) {
          e.registerHelper("lookup", function (e, t, r) {
            return e ? r.lookupProperty(e, t) : e;
          });
        }),
        (e.exports = t.default);
    },
    function (e, t, r) {
      "use strict";
      var n = r(2).default;
      t.__esModule = !0;
      var o = r(4),
        a = n(r(5));
      (t.default = function (e) {
        e.registerHelper("with", function (e, t) {
          if (2 != arguments.length)
            throw new a.default("#with requires exactly one argument");
          o.isFunction(e) && (e = e.call(this));
          var r = t.fn;
          if (o.isEmpty(e)) return t.inverse(this);
          var n = t.data;
          return (
            t.data &&
              t.ids &&
              ((n = o.createFrame(t.data)).contextPath = o.appendContextPath(
                t.data.contextPath,
                t.ids[0]
              )),
            r(e, {
              data: n,
              blockParams: o.blockParams([e], [n && n.contextPath]),
            })
          );
        });
      }),
        (e.exports = t.default);
    },
    function (e, t, r) {
      "use strict";
      var n = r(2).default;
      (t.__esModule = !0),
        (t.registerDefaultDecorators = function (e) {
          o.default(e);
        });
      var o = n(r(30));
    },
    function (e, t, r) {
      "use strict";
      t.__esModule = !0;
      var n = r(4);
      (t.default = function (e) {
        e.registerDecorator("inline", function (e, t, r, o) {
          var a = e;
          return (
            t.partials ||
              ((t.partials = {}),
              (a = function (o, a) {
                var i = r.partials;
                r.partials = n.extend({}, i, t.partials);
                var u = e(o, a);
                return (r.partials = i), u;
              })),
            (t.partials[o.args[0]] = o.fn),
            a
          );
        });
      }),
        (e.exports = t.default);
    },
    function (e, t, r) {
      "use strict";
      t.__esModule = !0;
      var n = r(4),
        o = {
          methodMap: ["debug", "info", "warn", "error"],
          level: "info",
          lookupLevel: function (e) {
            if ("string" == typeof e) {
              var t = n.indexOf(o.methodMap, e.toLowerCase());
              e = t >= 0 ? t : parseInt(e, 10);
            }
            return e;
          },
          log: function (e) {
            if (
              ((e = o.lookupLevel(e)),
              "undefined" != typeof console && o.lookupLevel(o.level) <= e)
            ) {
              var t = o.methodMap[e];
              console[t] || (t = "log");
              for (
                var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1;
                a < r;
                a++
              )
                n[a - 1] = arguments[a];
              console[t].apply(console, n);
            }
          },
        };
      (t.default = o), (e.exports = t.default);
    },
    function (e, t, r) {
      "use strict";
      var n = r(33).default,
        o = r(12).default,
        a = r(1).default;
      (t.__esModule = !0),
        (t.createProtoAccessControl = function (e) {
          var t = n(null);
          (t.constructor = !1),
            (t.__defineGetter__ = !1),
            (t.__defineSetter__ = !1),
            (t.__lookupGetter__ = !1);
          var r = n(null);
          return (
            (r.__proto__ = !1),
            {
              properties: {
                whitelist: i.createNewLookupObject(r, e.allowedProtoProperties),
                defaultValue: e.allowProtoPropertiesByDefault,
              },
              methods: {
                whitelist: i.createNewLookupObject(t, e.allowedProtoMethods),
                defaultValue: e.allowProtoMethodsByDefault,
              },
            }
          );
        }),
        (t.resultIsAllowed = function (e, t, r) {
          return (function (e, t) {
            return void 0 !== e.whitelist[t]
              ? !0 === e.whitelist[t]
              : void 0 !== e.defaultValue
              ? e.defaultValue
              : ((function (e) {
                  !0 !== l[e] &&
                    ((l[e] = !0),
                    u.log(
                      "error",
                      'Handlebars: Access has been denied to resolve the property "' +
                        e +
                        '" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'
                    ));
                })(t),
                !1);
          })("function" == typeof e ? t.methods : t.properties, r);
        }),
        (t.resetLoggedProperties = function () {
          o(l).forEach(function (e) {
            delete l[e];
          });
        });
      var i = r(35),
        u = a(r(31)),
        l = n(null);
    },
    function (e, t, r) {
      e.exports = { default: r(34), __esModule: !0 };
    },
    function (e, t, r) {
      var n = r(8);
      e.exports = function (e, t) {
        return n.create(e, t);
      };
    },
    function (e, t, r) {
      "use strict";
      var n = r(33).default;
      (t.__esModule = !0),
        (t.createNewLookupObject = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return o.extend.apply(void 0, [n(null)].concat(t));
        });
      var o = r(4);
    },
    function (e, t) {
      "use strict";
      function r(e) {
        this.string = e;
      }
      (t.__esModule = !0),
        (r.prototype.toString = r.prototype.toHTML =
          function () {
            return "" + this.string;
          }),
        (t.default = r),
        (e.exports = t.default);
    },
    function (e, t, r) {
      "use strict";
      var n = r(38).default,
        o = r(12).default,
        a = r(1).default,
        i = r(2).default;
      (t.__esModule = !0),
        (t.checkRevision = function (e) {
          var t = (e && e[0]) || 1,
            r = s.COMPILER_REVISION;
          if (
            !(
              t >= s.LAST_COMPATIBLE_COMPILER_REVISION &&
              t <= s.COMPILER_REVISION
            )
          ) {
            if (t < s.LAST_COMPATIBLE_COMPILER_REVISION) {
              var n = s.REVISION_CHANGES[r],
                o = s.REVISION_CHANGES[t];
              throw new l.default(
                "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" +
                  n +
                  ") or downgrade your runtime to an older version (" +
                  o +
                  ")."
              );
            }
            throw new l.default(
              "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" +
                e[1] +
                ")."
            );
          }
        }),
        (t.template = function (e, t) {
          if (!t) throw new l.default("No environment passed to template");
          if (!e || !e.main)
            throw new l.default("Unknown template object: " + typeof e);
          (e.main.decorator = e.main_d), t.VM.checkRevision(e.compiler);
          var r = e.compiler && 7 === e.compiler[0],
            a = {
              strict: function (e, t, r) {
                if (!e || !(t in e))
                  throw new l.default('"' + t + '" not defined in ' + e, {
                    loc: r,
                  });
                return e[t];
              },
              lookupProperty: function (e, t) {
                var r = e[t];
                return null == r ||
                  Object.prototype.hasOwnProperty.call(e, t) ||
                  p.resultIsAllowed(r, a.protoAccessControl, t)
                  ? r
                  : void 0;
              },
              lookup: function (e, t) {
                for (var r = e.length, n = 0; n < r; n++)
                  if (null != (e[n] && a.lookupProperty(e[n], t)))
                    return e[n][t];
              },
              lambda: function (e, t) {
                return "function" == typeof e ? e.call(t) : e;
              },
              escapeExpression: u.escapeExpression,
              invokePartial: function (r, n, o) {
                o.hash &&
                  ((n = u.extend({}, n, o.hash)), o.ids && (o.ids[0] = !0)),
                  (r = t.VM.resolvePartial.call(this, r, n, o));
                var a = u.extend({}, o, {
                    hooks: this.hooks,
                    protoAccessControl: this.protoAccessControl,
                  }),
                  i = t.VM.invokePartial.call(this, r, n, a);
                if (
                  (null == i &&
                    t.compile &&
                    ((o.partials[o.name] = t.compile(r, e.compilerOptions, t)),
                    (i = o.partials[o.name](n, a))),
                  null != i)
                ) {
                  if (o.indent) {
                    for (
                      var s = i.split("\n"), c = 0, f = s.length;
                      c < f && (s[c] || c + 1 !== f);
                      c++
                    )
                      s[c] = o.indent + s[c];
                    i = s.join("\n");
                  }
                  return i;
                }
                throw new l.default(
                  "The partial " +
                    o.name +
                    " could not be compiled when running in runtime-only mode"
                );
              },
              fn: function (t) {
                var r = e[t];
                return (r.decorator = e[t + "_d"]), r;
              },
              programs: [],
              program: function (e, t, r, n, o) {
                var a = this.programs[e],
                  i = this.fn(e);
                return (
                  t || o || n || r
                    ? (a = d(this, e, i, t, r, n, o))
                    : a || (a = this.programs[e] = d(this, e, i)),
                  a
                );
              },
              data: function (e, t) {
                for (; e && t--; ) e = e._parent;
                return e;
              },
              mergeIfNeeded: function (e, t) {
                var r = e || t;
                return e && t && e !== t && (r = u.extend({}, t, e)), r;
              },
              nullContext: n({}),
              noop: t.VM.noop,
              compilerInfo: e.compiler,
            };
          function i(t) {
            var r =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? {}
                  : arguments[1],
              n = r.data;
            i._setup(r), !r.partial && e.useData && (n = v(t, n));
            var o = void 0,
              u = e.useBlockParams ? [] : void 0;
            function l(t) {
              return "" + e.main(a, t, a.helpers, a.partials, n, u, o);
            }
            return (
              e.useDepths &&
                (o = r.depths
                  ? t != r.depths[0]
                    ? [t].concat(r.depths)
                    : r.depths
                  : [t]),
              (l = m(e.main, l, a, r.depths || [], n, u))(t, r)
            );
          }
          return (
            (i.isTop = !0),
            (i._setup = function (n) {
              if (n.partial)
                (a.protoAccessControl = n.protoAccessControl),
                  (a.helpers = n.helpers),
                  (a.partials = n.partials),
                  (a.decorators = n.decorators),
                  (a.hooks = n.hooks);
              else {
                var i = u.extend({}, t.helpers, n.helpers);
                !(function (e, t) {
                  o(e).forEach(function (r) {
                    var n = e[r];
                    e[r] = (function (e, t) {
                      var r = t.lookupProperty;
                      return f.wrapHelper(e, function (e) {
                        return u.extend({ lookupProperty: r }, e);
                      });
                    })(n, t);
                  });
                })(i, a),
                  (a.helpers = i),
                  e.usePartial &&
                    (a.partials = a.mergeIfNeeded(n.partials, t.partials)),
                  (e.usePartial || e.useDecorators) &&
                    (a.decorators = u.extend({}, t.decorators, n.decorators)),
                  (a.hooks = {}),
                  (a.protoAccessControl = p.createProtoAccessControl(n));
                var l = n.allowCallsToHelperMissing || r;
                c.moveHelperToHooks(a, "helperMissing", l),
                  c.moveHelperToHooks(a, "blockHelperMissing", l);
              }
            }),
            (i._child = function (t, r, n, o) {
              if (e.useBlockParams && !n)
                throw new l.default("must pass block params");
              if (e.useDepths && !o)
                throw new l.default("must pass parent depths");
              return d(a, t, e[t], r, 0, n, o);
            }),
            i
          );
        }),
        (t.wrapProgram = d),
        (t.resolvePartial = function (e, t, r) {
          return (
            e
              ? e.call || r.name || ((r.name = e), (e = r.partials[e]))
              : (e =
                  "@partial-block" === r.name
                    ? r.data["partial-block"]
                    : r.partials[r.name]),
            e
          );
        }),
        (t.invokePartial = function (e, t, r) {
          var n = r.data && r.data["partial-block"];
          (r.partial = !0),
            r.ids && (r.data.contextPath = r.ids[0] || r.data.contextPath);
          var o = void 0;
          if (
            (r.fn &&
              r.fn !== h &&
              (function () {
                r.data = s.createFrame(r.data);
                var e = r.fn;
                (o = r.data["partial-block"] =
                  function (t) {
                    var r =
                      arguments.length <= 1 || void 0 === arguments[1]
                        ? {}
                        : arguments[1];
                    return (
                      (r.data = s.createFrame(r.data)),
                      (r.data["partial-block"] = n),
                      e(t, r)
                    );
                  }),
                  e.partials &&
                    (r.partials = u.extend({}, r.partials, e.partials));
              })(),
            void 0 === e && o && (e = o),
            void 0 === e)
          )
            throw new l.default(
              "The partial " + r.name + " could not be found"
            );
          if (e instanceof Function) return e(t, r);
        }),
        (t.noop = h);
      var u = a(r(4)),
        l = i(r(5)),
        s = r(3),
        c = r(9),
        f = r(42),
        p = r(32);
      function d(e, t, r, n, o, a, i) {
        function u(t) {
          var o =
              arguments.length <= 1 || void 0 === arguments[1]
                ? {}
                : arguments[1],
            u = i;
          return (
            !i ||
              t == i[0] ||
              (t === e.nullContext && null === i[0]) ||
              (u = [t].concat(i)),
            r(
              e,
              t,
              e.helpers,
              e.partials,
              o.data || n,
              a && [o.blockParams].concat(a),
              u
            )
          );
        }
        return (
          ((u = m(r, u, e, i, n, a)).program = t),
          (u.depth = i ? i.length : 0),
          (u.blockParams = o || 0),
          u
        );
      }
      function h() {
        return "";
      }
      function v(e, t) {
        return (
          (t && "root" in t) || ((t = t ? s.createFrame(t) : {}).root = e), t
        );
      }
      function m(e, t, r, n, o, a) {
        if (e.decorator) {
          var i = {};
          (t = e.decorator(t, i, r, n && n[0], o, a, n)), u.extend(t, i);
        }
        return t;
      }
    },
    function (e, t, r) {
      e.exports = { default: r(39), __esModule: !0 };
    },
    function (e, t, r) {
      r(40), (e.exports = r(20).Object.seal);
    },
    function (e, t, r) {
      var n = r(41);
      r(17)("seal", function (e) {
        return function (t) {
          return e && n(t) ? e(t) : t;
        };
      });
    },
    function (e, t) {
      e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
      };
    },
    function (e, t) {
      "use strict";
      (t.__esModule = !0),
        (t.wrapHelper = function (e, t) {
          return "function" != typeof e
            ? e
            : function () {
                var r = arguments[arguments.length - 1];
                return (
                  (arguments[arguments.length - 1] = t(r)),
                  e.apply(this, arguments)
                );
              };
        });
    },
    function (e, t) {
      (function (r) {
        "use strict";
        (t.__esModule = !0),
          (t.default = function (e) {
            var t = void 0 !== r ? r : window,
              n = t.Handlebars;
            e.noConflict = function () {
              return t.Handlebars === e && (t.Handlebars = n), e;
            };
          }),
          (e.exports = t.default);
      }.call(
        t,
        (function () {
          return this;
        })()
      ));
    },
  ]);
});
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
!(function () {
  var e = "undefined" != typeof window,
    t = e ? window : global,
    n = (t.shz = t.shz || {}),
    o = t.console.log;
  function r(e, t) {
    var o,
      r,
      a = t || n;
    function i(e, t) {
      var n, o;
      return (
        (n = e.split("[")),
        (o = parseInt(n[1])),
        (t[n[0]] = t[n[0]] || []),
        o >= 0 && (t[n[0]][o] = t[n[0]][o] || {}),
        t[n[0]][o]
      );
    }
    if (e.indexOf(".") > -1)
      for (r = e.split("."), o = 0; o < r.length; o++)
        r[o].indexOf("[") > -1
          ? (a = i(r[o], a))
          : ((a[r[o]] = a[r[o]] || {}), (a = a[r[o]]));
    else
      e.indexOf("[") > -1 ? (a = i(e, a)) : ((a[e] = a[e] || {}), (a = a[e]));
    return a;
  }
  function a(e, t) {
    var n,
      o,
      r = t;
    for (
      e = e.split("."), o = 0;
      o < e.length && (n = r && "object" === _typeof(r) && e[o] in r);
      o++
    )
      r = r[e[o]];
    return (n && r) || null;
  }
  function i(e) {
    var t = e.responseHeaders,
      n = {};
    try {
      e.getAllResponseHeaders &&
        ((t = (t = e.getAllResponseHeaders()).split(/\n/g)).forEach(function (
          e
        ) {
          var t = e.split(": ");
          t[0] &&
            (n[t[0].toLowerCase()] =
              t[1]
                .replace(/\s+$/g, "")
                .replace(/\r+$/g, "")
                .replace(/\n+$/g, "") || "");
        }),
        (t = n));
    } catch (e) {
      t = {};
    }
    return t || {};
  }
  function s(e) {
    var t,
      n,
      o = new XMLHttpRequest(),
      r = "object" == _typeof(e) ? e : { url: e },
      a = r.method || "GET",
      s = r.headers,
      c = r.params,
      l = void 0 === e.async || e.async,
      u = shz.common.Error,
      f = {},
      p = r.url.replace(/^[\w\W]+.shazam.com[:\d{4}]*/, ""),
      h = 0,
      m = void 0 === o.onloadend;
    for (t in (o.open(a, p, l), s)) o.setRequestHeader(t, s[t]);
    (o.then = function (e, t, n) {
      f = { ok: e, fail: t || e, progress: n };
    }),
      e.timeout && (o.timeout = e.timeout),
      (o.ontimeout = function () {
        n = new u({ type: v.TIMEOUT, message: p + " timed out" });
      }),
      (o.onerror = function (e) {
        (n = new u({ type: v.NETWORK, message: p + " network" })),
          m && o.onloadend();
      }),
      (o.onabort = function (e) {
        (n = new u({ type: v.ABORTED, message: p + " network" })),
          m && o.onloadend();
      }),
      "POST" == a &&
        o.upload.addEventListener(
          "progress",
          function (e) {
            if (e.lengthComputable) {
              var t = e.loaded / e.total;
              f && f.progress && f.progress(t, e);
            }
          },
          !1
        ),
      (o.onloadend = function () {
        var t,
          s,
          c = !n && o.status > 199 && o.status < 400,
          l = c ? f.ok : f.fail;
        if ((h && clearTimeout(h), (h = 0), l)) {
          if (c)
            if ("HEAD" == a) t = i(o);
            else
              try {
                t = r.responseType
                  ? o.response
                  : "" == o.responseText &&
                    -1 !== [200, 204, 304, 201, 202].indexOf(o.status)
                  ? ""
                  : (r.noparse && o.response) || JSON.parse(o.responseText);
              } catch (e) {
                (t = null),
                  (n = new u({
                    type: v.SERVICE,
                    message: p + "_" + e.message,
                  }));
              }
          else
            (s = 401 == o.status ? v.UNAUTHORIZED : v.SERVICE),
              (n = new u({
                type: s,
                message: p + " status " + o.status,
                args: {
                  status: o.status,
                  response: !r.responseType && o.responseText,
                },
              }));
          l(t, {
            xhr: o,
            responseHeaders: "HEAD" == a ? t : i(o),
            error: n,
            params: e,
          });
        }
      }),
      m &&
        ((o.onload = o.onloadend),
        (h =
          e.timeout &&
          setTimeout(function () {
            o.abort();
          }, e.timeout))),
      r.responseType && (o.responseType = r.responseType);
    try {
      o.send(c && ("string" == typeof c || e.encoded ? c : JSON.stringify(c)));
    } catch (e) {
      setTimeout(function () {
        f.fail(null, {
          xhr: o,
          error: new u({ type: v.JSERROR, message: e.message }),
        });
      }, 0);
    }
    return o;
  }
  function c(e, t, n, o) {
    for (var r in t)
      (void 0 === e[r] || n || (o && "object" == _typeof(e[r]))) &&
        (o && Array.isArray(t[r])
          ? (e[r] = (!n && Array.isArray(e[r]) ? e[r] : []).concat(t[r]))
          : o && "object" == _typeof(t[r])
          ? ((e[r] = e[r] || {}), c(e[r], t[r], n, o))
          : (e[r] = t[r]));
    return e;
  }
  function l(e, t) {
    return e.webkitMatchesSelector
      ? e.webkitMatchesSelector(t)
      : e.mozMatchesSelector
      ? e.mozMatchesSelector(t)
      : e.msMatchesSelector
      ? e.msMatchesSelector(t)
      : e.matchesSelector
      ? e.matchesSelector(t)
      : 0;
  }
  function u(e, t, n) {
    var o, r;
    if (
      ((n = n || document.body),
      (r = (t = Array.isArray(t) ? t : [t]).length),
      e != document)
    )
      for (; e && e != n; ) {
        try {
          for (o = 0; o < r; o++)
            if (l(e, t[o])) return { node: e, selector: t[o] };
        } catch (e) {}
        e = e.parentNode;
      }
    return {};
  }
  function f(e, t) {
    if (!e) return {};
    var n,
      o,
      r,
      a,
      i = "object" == _typeof(e) ? e.search : e,
      s = i && (a = i.match(/\?[^#]*/)) && a[0],
      l = {};
    if ((s = s && s.substr(1)))
      for (s = s.split("&"), n = 0; n < s.length; n++)
        (r = (o = s[n].split("=")).shift()), (a = o.join("=")), (l[r] = a);
    return !t && e.hash && c(l, p(e)), l;
  }
  function p(e) {
    if (!e) return {};
    var t =
        ("object" == _typeof(e) ? e.hash.substring(1) : e.split("#")[1]) || "",
      n = {};
    return (
      ((t && t.split(";")) || []).forEach(function (e) {
        var t = e && e.split("=");
        2 == t.length && (n[t[0]] = t[1]);
      }),
      n
    );
  }
  t.location &&
    -1 !== t.location.search.search(/(&)*netlog=1/) &&
    ((n.debugmode = 1),
    (t.console.log = function () {
      if (arguments[0].toString().match(/^(netlog$)|(netlog\:)/)) {
        var e,
          t = Date.now() + " ",
          n = arguments[0].split(":");
        for (e = 1; e < arguments.length; e++)
          t +=
            ("object" == _typeof(arguments[e])
              ? JSON.stringify(arguments[e])
              : arguments[e]) + " ";
        shz.common.getJSON({
          url: "/services/log" + (n[1] ? "/" + n[1] : ""),
          method: "POST",
          params: t,
        });
      }
      o(t || [].slice.call(arguments));
    })),
    (t.console.warn = t.console.warn || t.console.log),
    t.NodeList &&
      !NodeList.prototype.forEach &&
      (NodeList.prototype.forEach = function (e, t) {
        t = t || window;
        for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this);
      }),
    t.NodeList &&
      !NodeList.prototype.some &&
      (NodeList.prototype.some = function (e, t) {
        var n, o;
        for (
          t = t || window, n = 0;
          n < this.length && !(o = e.call(t, this[n], n, this));
          n++
        );
        return o;
      }),
    t.HTMLOptionsCollection &&
      !HTMLOptionsCollection.prototype.forEach &&
      (HTMLOptionsCollection.prototype.forEach = function (e, t) {
        t = t || window;
        for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this);
      });
  var h =
      /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$/,
    m = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;",
      "=": "&#x3D;",
    },
    d = /[&<>"'`]/g,
    g = /[&<>"'`]/;
  function y(e) {
    return m[e] || "&amp;";
  }
  function v(e) {
    (this.type = e.type || "unknown"),
      (this.message = e.message || ""),
      (this.forceshow = e.forceshow),
      (this.args = e.args),
      b.includes(this.type) || console.log("Created Error ", JSON.stringify(e));
  }
  (v.INVALID_PARAM = "invalidparam"),
    (v.JSERROR = "jserror"),
    (v.NOTFOUND = "notfound"),
    (v.TIMEOUT = "timeout"),
    (v.NETWORK = "network"),
    (v.LIMITEXCEEDED = "limitexceeded"),
    (v.ABORTED = "abort"),
    (v.SERVICE = "serviceerror"),
    (v.REDIRECT = "redirect"),
    (v.IMAGE_MISSING = "image_missing"),
    (v.PLAYAUDIO_CODE = "playaudio_code"),
    (v.UNSUPPORTED = "unsupported"),
    (v.DATAERROR = "baddata"),
    (v.OUTOFSYNC = "outofsync"),
    (v.LIMITERROR = "limitnotmet"),
    (v.UNAUTHORIZED = "unauthorized");
  var b = [v.INVALID_PARAM, v.DATAERROR];
  c(r("common"), {
    namespace: r,
    namespaceExists: a,
    setWithNamespace: function (e, t, n, o) {
      var a, i;
      (a = (e = e.split(".")).pop()),
        ((i = e.length ? r(e.join("."), t) : t)[a] = o ? c(i[a], n, !0) : n);
    },
    clearNamespace: function (e, t) {
      var n, o;
      (n = (e = e.split(".")).pop()),
        (o = e.length ? a(e.join("."), t) : t) && delete o[n];
    },
    getJSON: s,
    request: function e(t, n) {
      if (Array.isArray(t)) {
        var o = 0,
          r = t.length,
          a = {};
        !(function i(s, c) {
          s && (a[s] = c),
            o < r
              ? (e(t[o], {
                  success: i.bind(this, t[o]),
                  failure: i.bind(this, t[o]),
                }),
                o++)
              : n && n(a);
        })();
      } else s(t).then(n.success, n.failure);
    },
    Datasync: function () {
      var e = {};
      return {
        all: function () {
          return e;
        },
        clear: function (t) {
          t ? delete e[t] : (e = {});
        },
        get: function (t, n) {
          arguments.length > 2 && console.log("bad get call", t, arguments[2]),
            "function" == typeof n && (n = { cb: n });
          var o,
            r = (e[t] = e[t] || {}),
            a = r.data;
          return (
            null != a && n.cb.call(n.scope, a),
            (null != a && n.listenOnce) ||
              ((r.callbacks = r.callbacks || []),
              r.callbacks.some(function (e) {
                if (e.cb == n.cb && e.scope == n.scope) return !0;
              }) ||
                ((o = r.callbacks.length) > 50 &&
                  console.log("Large datasync callback length: " + t + " " + o),
                r.callbacks.push({
                  cb: n.cb,
                  keepAlive: !n.listenOnce,
                  scope: n.scope,
                }))),
            !a
          );
        },
        set: function (t, n, o, r, a) {
          var i = function () {
            var a,
              i = (e[t] = e[t] || {}),
              s = i.callbacks || [],
              c = s.length;
            for (
              r
                ? (null != i.data &&
                    console.log(
                      "!!!!!  ds.fire and ds.set call intermixed for token",
                      t
                    ),
                  delete i.data)
                : (i.data = n);
              c;

            ) {
              (a = s[c - 1]).keepAlive || s.splice(c - 1, 1);
              try {
                a.cb.call(a.scope, n);
              } catch (e) {
                var l;
                try {
                  l = (e.stack && e.stack.substr(0, 200)) || "n/a";
                } catch (e) {
                  l = "n/a";
                }
                shz.app &&
                  shz.stats &&
                  shz.stats.stat({
                    beaconType: "error",
                    providerdesc: "web_err",
                    code: ["Datasync_cb[" + t + "]", l].join(" "),
                    errordesc: [
                      "Datasync_cb[" + t + "]",
                      e.message,
                      e.lineNumber,
                      e.fileName,
                    ].join(" "),
                    path:
                      "undefined" != typeof document &&
                      document.location &&
                      document.location.pathname,
                  });
              }
              c--;
            }
            o && o();
          };
          a ? i() : setTimeout(i, 0);
        },
        fire: function (e, t, n, o) {
          this.set(e, t, n, !0, o);
        },
        find: function (t) {
          return e[t] ? e[t].data : void 0;
        },
        remove: function (t, n, o) {
          if (e[t] && e[t].callbacks)
            return e[t].callbacks.some(function (r, a) {
              if (r.cb === n && r.keepAlive && r.scope == o)
                return e[t].callbacks.splice(a, 1), !0;
            });
        },
      };
    },
    merge: c,
    reconcile: function e(t, n, o) {
      for (var r in ((t = t || {}), n))
        "object" == _typeof(n[r])
          ? ((t[r] = t[r] || {}), e(t[r], n[r], o), o(t, n, r))
          : o(t, n, r);
      return t;
    },
    isEmpty: function (e) {
      for (var t in e) if (e.hasOwnProperty(t)) return 0;
      return 1;
    },
    isEqualValues: function e(t, n) {
      var o;
      if (!t || !n) return t == n;
      for (o in t) {
        if (!(o in n)) return !1;
        if ("object" === _typeof(t[o])) {
          if (!e(t[o], n[o])) return !1;
        } else if (t[o] !== n[o]) return !1;
      }
      return !0;
    },
    fragment: function (e) {
      var t,
        n = document.createElement("div");
      return (
        (n.innerHTML = e), (t = n.children[0]).parentNode.removeChild(t), t
      );
    },
    isFrameSecure: function (e, t, n) {
      if (!e) return !1;
      var o,
        r = e.split("/"),
        a = shz.frames,
        i = (t && t.frames) || {};
      return r.some(function (e, t) {
        if (
          e &&
          a[e] &&
          ((a = a[e]),
          (o = r.slice(0, t + 1).join("/")),
          i[o] && i[o][n ? "sso" : "login"])
        )
          return !0;
      });
    },
    getFrameInfo: function (e, t) {
      var n,
        o,
        r,
        a,
        i,
        s = shz.frames,
        c = [],
        l = e.split("#"),
        u = {};
      return (
        (n = e),
        (e = l[0]),
        (l = l[1]) &&
          (l = l.split("&")).forEach(function (e) {
            var t = e.split("=");
            t[1] && (u[t[0]] = t[1]);
          }),
        (o = e.split("/")).some(function (e, t) {
          if (e) {
            if (!s[e]) return !0;
            (s = s[e]), (i = t + 1);
          }
        }),
        i &&
          ((a = o.slice(0, i).join("/")),
          (c = o.length != i ? o.slice(i) : [])),
        (r = (t && t.frames[a]) || {}),
        {
          origPath: n,
          path: e,
          type: a,
          params: c,
          hashparams: u,
          scope: s,
          config: r || {},
        }
      );
    },
    ancestor: u,
    hasAncestor: function (e, t, n) {
      var o = u(e, t, n);
      return 0 !== Object.keys(o).length;
    },
    matchesSelector: l,
    supplant: function (e, t) {
      return e.replace(/{([^{}]*)}/g, function (e, n) {
        var o = t;
        return (
          n.split(".").forEach(function (e) {
            o = o[e];
          }),
          "string" == typeof o || "number" == typeof o ? o : e
        );
      });
    },
    getLocationParts: function (e) {
      try {
        var t = {},
          n = document.createElement("a");
        (n.href = e),
          (t.protocol = n.protocol),
          (t.host = n.host),
          (t.hostname = n.hostname),
          (t.port = n.port),
          (t.pathname = n.pathname),
          (t.hash = n.hash),
          (t.search = n.search),
          (t.origin =
            t.protocol +
            "//" +
            t.hostname +
            (80 != t.port ? ":" + t.port : ""));
      } catch (n) {
        try {
          t = new URL(e);
        } catch (e) {
          (t.protocol = ""),
            (t.host = ""),
            (t.hostname = "unknowndomain.shazam.com"),
            (t.port = ""),
            (t.pathname = ""),
            (t.hash = ""),
            (t.search = ""),
            (t.origin = "");
        }
      }
      return t;
    },
    copy: function e(t) {
      var n,
        o = {};
      if (Array.isArray(t))
        (o = []),
          t.forEach(function (t) {
            o.push(e(t));
          });
      else if ("object" === _typeof(t) && t) for (n in t) o[n] = e(t[n]);
      else o = t;
      return o;
    },
    create: function e(t) {
      var n,
        o = {};
      if (Array.isArray(t))
        (o = []),
          t.forEach(function (t) {
            o.push(e(t));
          });
      else if ("object" === _typeof(t) && t)
        for (n in ((o = Object.create(t)), t))
          "object" == _typeof(o[n]) && (o[n] = e(t[n]));
      else o = t;
      return o;
    },
    urlParams: f,
    hashParams: p,
    setQueryParams: function (e, t) {
      var n,
        o = [];
      for (n in (t = c(f(e, !0), t, !0))) o.push(n + "=" + t[n]);
      return (
        o.length &&
          -1 == e.search(/\?/) &&
          (((e = e.split("#"))[0] += "?"), (e = e.join("#"))),
        e.replace(/\?[^#]*/, "?" + o.join("&"))
      );
    },
    getId: function (e) {
      return (
        e.id || (e.id = "_a" + Date.now() + Math.floor(1e3 * Math.random())),
        e.id
      );
    },
    getBundlePath: function (e) {
      return "src" == shz.version
        ? "/combo/" + shz.version + "?" + shz.app.appname + e
        : "/builds/" + shz.version + shz.app.appname + e + "/bundle.js";
    },
    getResourceBase: function () {
      return "src" === shz.version
        ? "/combo/" + shz.version + "?"
        : "/builds/" + shz.version;
    },
    guid: function () {
      function e() {
        return Math.floor(65536 * (1 + Math.random()))
          .toString(16)
          .substring(1);
      }
      return (
        e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
      );
    },
    isGuid: function (e) {
      return !!e.match(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
      );
    },
    origin: function (e) {
      if (e && e.hostname)
        return "".concat(e.protocol || "https:", "//").concat(e.hostname);
      if (t.location) {
        if (window.location.origin) return window.location.origin;
        var n = window.location.port ? ":" + window.location.port : "";
        return window.location.protocol + "//" + window.location.hostname + n;
      }
    },
    animScroll: function (e) {
      var t = Date.now(),
        n = t + 1e3,
        o = e.el,
        r = e.from,
        a = e.to,
        i = r - a;
      requestAnimationFrame(function a() {
        var s,
          c = Date.now(),
          l = 1 * ((s = (s = c - t) / 1e3 - 1) * s * s * s * s + 1) + 0,
          u = i * l;
        if (c <= n) {
          var f = Math.max(0, r - u),
            p = {
              top: e.top ? f : o.scrollTop,
              left: e.left ? f : o.scrollLeft,
            };
          o.scrollTo(p), requestAnimationFrame(a);
        }
      });
    },
    animate: function (e) {
      var t = e.duration || 1e3,
        n = Date.now(),
        o = n + t,
        r = e.el,
        a = void 0 === e.from ? 0 : e.from,
        i = void 0 === e.to ? 1 : e.to,
        s = a - i,
        c = e.attribute || "opacity",
        l = r.style,
        u = e.setStyle,
        f =
          "inout" == e.easing
            ? function (e, t, n, o, r) {
                return (t /= r / 2) < 1
                  ? (o / 2) * t * t * t * t * t + n
                  : (o / 2) * ((t -= 2) * t * t * t * t + 2) + n;
              }
            : function (e, t, n, o, r) {
                return o * ((t = t / r - 1) * t * t * t * t + 1) + n;
              };
      0 == c.indexOf("scroll") && (l = r),
        (function r() {
          var p,
            h = Date.now(),
            m = h - n,
            d = f(m / t, m, 0, 1, t);
          h <= o
            ? ((p = a - s * d), u ? u(p) : (l[c] = p), requestAnimationFrame(r))
            : (u ? u(i) : (l[c] = i), e.onEnd && e.onEnd());
        })();
    },
    Error: v,
    dispatchCustom: function (e, t, n, o) {
      if (e && e.dispatchEvent) {
        var r = document.createEvent("HTMLEvents");
        (o = o || {}),
          r.initEvent(
            t,
            isNaN(o.bubble) ? 1 : o.bubble,
            isNaN(o.cancelable) ? 1 : o.cancelable
          ),
          (r.detail = n),
          e.dispatchEvent(r);
      }
    },
    deepLinkUrl: function (e) {
      var t = new RegExp(
        "^http(s)?://(www|cisd|dev).shazam.com(:)?([0-9]{4})?/([a-z]{2}/)?"
      );
      return (e && e.replace(t, "shazam://")) || "";
    },
    shazamURL: function (e, t) {
      return n && n.bridge && n.bridge.isNative
        ? "shazam://launchurl?url=" +
            encodeURIComponent(e) +
            (t ? "&external=true" : "")
        : e;
    },
    isDevServer: function () {
      return !!(
        "undefined" != typeof document &&
        document.location &&
        document.location.hostname &&
        document.location.hostname.match(
          /^((cisd|betasd|dev).shazam.(apple.)?com|localhost)/
        )
      );
    },
    flattenCSS: function e(t) {
      if (t) {
        var n, o, r, a;
        for (n in t) {
          if (((r = t[n]), Array.isArray(r)))
            r.forEach(function (t) {
              e(t);
            });
          else if ("css" === n && "string" != typeof r) {
            for (o in ((a = ""), r)) a += o + ":" + r[o] + ";";
            t[n] = a;
          }
          "object" === _typeof(r) && e(r);
        }
        return t;
      }
    },
    htmlEncode: function (e) {
      return g.test(e) ? e.replace(d, y) : e;
    },
    htmlUnEncode: function (e) {
      if ("undefined" == typeof document)
        return (
          Object.keys(m).forEach(function (t) {
            var n = new RegExp(m[t], "g");
            e = e.replace(n, t);
          }),
          e
        );
      var t = document.createElement("a");
      return (t.innerHTML = e), t.textContent;
    },
    stripHTML: function (t) {
      if (e) {
        var n = document.createElement("DIV");
        return (n.innerHTML = t), n.textContent || n.innerText || "";
      }
      return t && t.replace(/<[^>]*>?/g, "");
    },
    validateEmail: function (e) {
      if (e.length > 254) return !1;
      if (!h.test(e)) return !1;
      var t = e.split("@");
      return !(
        t[0].length > 64 ||
        t[1].split(".").some(function (e) {
          return e.length > 63;
        })
      );
    },
    isJSCached: function () {
      try {
        var e = window.performance.getEntriesByType("resource") || [],
          t = !1;
        e.some(function (e) {
          if (!("name" in e) || !("transferSize" in e)) throw "unsupported";
          if (e.name.match(/main\.js/)) return (t = 0 === e.transferSize), !0;
        }) || (t = void 0);
      } catch (e) {
        t = void 0;
      }
      return t;
    },
    readableDate: function (e) {
      var t = isNaN(1 * e),
        n = !t && new Date(1 * e);
      return t
        ? "invalid"
        : [n.getMonth() + 1, n.getDate(), n.getFullYear()].join("/") +
            " " +
            [n.getHours(), n.getMinutes(), n.getSeconds()].join(":");
    },
    convertToHashParams: function (e) {
      var t,
        n,
        o = "";
      for (t in e)
        -1 == o.search(t)
          ? (o +=
              (o.length && ";" != o[o.length - 1] ? ";" : "") + t + "=" + e[t])
          : ((n = new RegExp("(" + t + "=([^;]+))")),
            (o = o.replace(n, t + "=" + e[t])));
      return o;
    },
    Uint8ToBase64: function (e) {
      for (var t, n = 0, o = e.length, r = ""; n < o; )
        (t = e.subarray(n, Math.min(n + 32768, o))),
          (r += String.fromCharCode.apply(null, t)),
          (n += 32768);
      return btoa(r);
    },
    base64ToArrayBuffer: function (e) {
      for (
        var t = atob(e), n = t.length, o = new Uint8Array(n), r = 0;
        r < n;
        r++
      )
        o[r] = t.charCodeAt(r);
      return o.buffer;
    },
    navigate: function (e) {
      if (window.self !== window.top)
        try {
          window.parent.postMessage({ deeplinkURL: e }, window.location.origin);
        } catch (e) {
          console.log(e);
        }
      else document.location.href = e;
    },
    versionCompare: function (e, t) {
      (e = e.split(".").map(Number)), (t = t.split(".").map(Number));
      var n =
          e[0] * Math.pow(10, 6) +
          (e[1] || 0) * Math.pow(10, 3) +
          1 * (e[2] || 0),
        o =
          t[0] * Math.pow(10, 6) +
          (t[1] || 0) * Math.pow(10, 3) +
          1 * (t[2] || 0);
      return n == o ? 0 : n < o ? 1 : -1;
    },
    numPad: function (e, t) {
      var n,
        o = "";
      return (
        "number" == typeof e && ((o = e < 0 ? "-" : ""), (e = Math.abs(e))),
        o + (n = "000000000" + e).substr(n.length - t)
      );
    },
  });
})();
function ownKeys(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function _objectSpread(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? ownKeys(Object(n), !0).forEach(function (t) {
          _defineProperty(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ownKeys(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function _defineProperty(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
!(function () {
  "use strict";
  function e(e = {}, t) {
    let n = {};
    return (
      Object.keys(e).forEach((r) => {
        void 0 === e[r] || "" === e[r] || (t && t(r)) || (n[r] = e[r]);
      }),
      n
    );
  }
  class t {
    static getParams(e, n, r = {}) {
      let s = {},
        o = t.getDatasetValue(e, n);
      if (
        ((o = (o && o.split(",")) || []),
        o.forEach((e) => {
          (e = e.split("=")),
            (s[e[0]] = (function (e, t = {}) {
              let { preserveCase: n, ignoreLength: r } = t;
              return (
                e &&
                  ("string" != typeof e && (e = e.toString()),
                  (e = e
                    .replace(/(%20|\s)/g, "_")
                    .replace(/[^a-zA-Z0-9\-_,]/g, "")),
                  r || (e = e.substr(0, 20))),
                e && !n ? e.toLowerCase() : e
              );
            })(e[1], r));
        }),
        r.inherit)
      ) {
        let o = r.inherit.stop || document.body,
          i = e.parentNode || r.parentFrame;
        e != o && i && (s = Object.assign({}, t.getParams(i, n, r), s));
      }
      return s;
    }
    static getValue(e, n, r, s = {}) {
      let o;
      if (r) {
        let s = t.getDatasetValue(e, r);
        (s = s.split(",")),
          s.some((e) => {
            if ((e = e.split("="))[0] == n) return (o = e[1]), !0;
          });
      } else o = t.getDatasetValue(e, n);
      return (
        s.inherit && (s.inherit.stop = s.inherit.stop || document.body),
        !o &&
          s.inherit &&
          e != s.inherit.stop &&
          (o = t.getValue(e.parentNode || e.parentFrame, n, r, s)),
        o
      );
    }
    static getDatasetName(e) {
      return "shz".concat(e.replace(/^./, e[0].toUpperCase()));
    }
    static getDatasetValue(e, n) {
      return e.dataset[t.getDatasetName(n)] || "";
    }
  }
  class n {
    static getBeaconConfig(t = "", r) {
      let s = t.split("."),
        o = s.pop(),
        i = s.join("."),
        a = (r =
          (i &&
            (function (e, t) {
              var n,
                r,
                s = t;
              for (
                e = e.split("."), r = 0;
                r < e.length && (n = s && "object" == typeof s && e[r] in s);
                r++
              )
                s = s[e[r]];
              return (n && s) || null;
            })(i, r)) ||
          r)[o];
      if (!a)
        throw {
          type: "invalidparam",
          code: t,
          message: "spec missing ".concat(t),
        };
      return {
        dynamic: a && Object.keys(a._dynamic || []),
        params: e(a, n.isReserved),
      };
    }
    static isReserved(e) {
      return e.match(/^_./);
    }
  }
  var r = Object.freeze({
    __proto__: null,
    BeaconsUrl: class {
      constructor(e, t = {}, n = {}) {
        if (!e) throw "Require beacon url";
        (this.template = e),
          (this.options = n),
          (this.pathParams = {}),
          this._parseTokens(e).forEach((e) => {
            this.pathParams[e] = void 0 !== t[e] ? t[e] : n.defaultValue || "-";
          });
      }
      send(e = {}, t, n = {}) {
        let r = this._getUrl(e),
          s = [],
          o = Object.keys(this.pathParams);
        return (
          Object.keys(e).forEach((t) => {
            o.includes(t) || s.push("".concat(t, "=").concat(e[t]));
          }),
          n.sort && s.sort(),
          (s = s.join("&")),
          s && (-1 == r.search(/\?/) && (r += "?"), (r += s)),
          "image" == (t = this._setMode(t))
            ? this._sendImage(r)
            : "function" == typeof t
            ? t(r)
            : "bridge" == t
            ? this._sendBridge(e, (e, t) => {
                t && this._sendImage(r);
              })
            : "xhr" == t && this._sendXHR(r),
          r
        );
      }
      _setMode(e) {
        return (
          e ||
            (e =
              "undefined" != typeof Image
                ? "image"
                : "undefined" != typeof window && void 0 !== window.shz
                ? "bridge"
                : "xhr"),
          e
        );
      }
      _sendImage(e) {
        if (!this.onDone) {
          let e = this;
          this.onDone = function (t) {
            this.removeEventListener("load", e.onDone),
              this.removeEventListener("error", e.onDone);
          };
        }
        if ("undefined" != typeof Image) {
          let t = new Image();
          t.addEventListener("load", this.onDone),
            t.addEventListener("error", this.onDone),
            (t.src = e);
        }
      }
      _sendXHR(e) {
        (e = e.replace(/^https:\/\/([^\/]+)/, "")),
          fetch(e)
            .then((e) => console.log(e))
            .catch((t) => {
              console.log("_sendXHR error:", t, e);
            });
      }
      _sendBridge(e, t) {
        if ("undefined" != typeof window && void 0 !== window.shz) {
          if (window.shz.bridge) {
            let n = Object.assign({}, e);
            delete n.beaconType,
              window.shz.bridge.request(
                {
                  type: "sendBeacon",
                  data: { event: e.beaconType, parameters: n },
                },
                t
              );
          }
        } else console.error("shz global not available");
      }
      _parseTokens(e) {
        let t = [];
        return (
          e.replace(/\{([^\}]+)\}/g, (e, n) => {
            t.push(n);
          }),
          t
        );
      }
      _getUrl(e) {
        let t = Object.assign({}, this.pathParams, e);
        return (function (e, t) {
          return e.replace(/{([^{}]*)}/g, function (e, n) {
            var r = t;
            return (
              n.split(".").forEach(function (e) {
                r = r[e];
              }),
              "string" == typeof r || "number" == typeof r ? r : e
            );
          });
        })(this.template, t);
      }
    },
    Dom: t,
    Manifest: n,
    PathConfigs: class {
      static _findConfig(e = "", t = []) {
        let n = {};
        return (
          e &&
            t.forEach((t) => {
              e.match(t.path) && Object.assign(n, t);
            }),
          n || {}
        );
      }
      static getConfig(e, t) {
        return Object.assign(
          { _location: t },
          (t && this._findConfig(t, e)) || {}
        );
      }
      static getStaticParams(t = {}, n = "") {
        return e((n ? this._findConfig(n, t.framepaths) : t).staticKeys);
      }
      static getPathParams(t = {}, n = "") {
        return e((n ? this._findConfig(n, t) : t).pathParams);
      }
      static getHashParams(e = {}) {
        let t = {},
          n = (function (e) {
            if (!e) return {};
            var t =
                ("object" == typeof e
                  ? e.hash.substring(1)
                  : e.split("#")[1]) || "",
              n = {};
            return (
              ((t && t.split(";")) || []).forEach(function (e) {
                var t = e && e.split("=");
                2 == t.length && (n[t[0]] = t[1]);
              }),
              n
            );
          })(e._location);
        return (
          (e.hashParamsToInclude || []).forEach((e) => {
            n[e] && (t[e] = n[e]);
          }),
          t
        );
      }
      static getRestrictedProps(e = {}) {
        return e.removeParams || [];
      }
      static getDeeplinkParams(e = {}, t = "") {
        let n,
          r = e.deeplinkparams || {};
        return (
          Object.keys(r).some((e) => ((n = t.match(e) && r[e]), n)), n || {}
        );
      }
      static getBeaconUrl(e = {}) {
        return e.beaconUrl;
      }
    },
  });
  const s = [
      {
        name: "chromebook",
        regex: "[^a-zA-Z]CrOS|Chromebook",
        type: "desktop",
      },
      { name: "iphone", regex: "iPhone", type: "phone" },
      { name: "ipad", regex: "iPad", type: "tablet" },
      {
        name: "ipad",
        test: function (e) {
          return (
            "undefined" != typeof navigator &&
            "MacIntel" === navigator.platform &&
            navigator.maxTouchPoints > 1
          );
        },
        type: "tablet",
      },
      { name: "ipod", regex: "iPod", type: "phone" },
      {
        name: "windowsPhone",
        regex: "Windows Phone|Windows Mobile",
        type: "phone",
      },
      {
        name: "windowsTablet",
        regex: "Windows(.*)?(Touch|Tablet)",
        type: "tablet",
      },
      { name: "androidPhone", regex: "Android(.*)?Mobile", type: "phone" },
      { name: "androidTablet", regex: "Android", type: "tablet" },
      { name: "tablet", regex: "Tablet", type: "tablet" },
    ],
    o = [
      {
        name: "chromeos",
        regex: "[^a-zA-Z]CrOS|Chromebook",
        regexVer: "x86_64|armv7l|aarch64",
      },
      { name: "ios", regex: "iPhone|iPad|iPod", regexVer: "OS" },
      {
        name: "win",
        regex: "Win|Windows Phone",
        regexVer: "NT|OS|Windows Phone|Windows Mobile",
      },
      { name: "android", regex: "Android", regexVer: "Android" },
      { name: "mac", regex: "Macintosh|Apple Mac", regexVer: "OS X|OS_X" },
      { name: "linux", regex: "Linux", regexVer: "rv|Linux|armv7l" },
      { name: "amazon", regex: "Silk", regexVer: "Silk" },
    ],
    i = [
      { name: "ie", regex: "MSIE|Trident", regexVer: "rv|MSIE|IEMobile" },
      {
        name: "edge",
        regex: "Edg|Edge",
        regexVer: "MSIE|rv|IEMobile|Edg|Edge|EdgiOS|EdgA",
      },
      { name: "opera", regex: "OPR|Opera", regexVer: "OPR|Version" },
      {
        name: "miuibrowser",
        regex: "XiaoMi/MiuiBrowser",
        regexVer: "MiuiBrowser",
      },
      {
        name: "samsungbrowser",
        regex: "SamsungBrowser",
        regexVer: "SamsungBrowser",
      },
      {
        name: "chrome",
        regex: "Chrome|CrMo|CriOS",
        regexVer: "Chrome|CrMo|CriOS",
      },
      { name: "firefox", regex: "Firefox|FxiOS", regexVer: "Firefox|FxiOS" },
      { name: "safari", regex: "Safari", regexVer: "Version|Safari" },
      { name: "BlackBerry", regex: "CLDC", regexVer: "CLDC" },
    ];
  function a(e, t) {
    let n;
    return (
      t.some((t) => {
        let r = Object.assign({}, t);
        if (
          r.regex &&
          new RegExp(r.regex, "i").test(e) &&
          ((n = r), r.regexVer)
        ) {
          let t = new RegExp(
              "(".concat(r.regexVer, ")[- /:;_]([\\d._]+)"),
              "i"
            ),
            s = e.match(t),
            o = ((s && s[2]) || "").replace(/_/g, "."),
            i = "";
          o
            ? ((s = o.split(".")),
              s.forEach((e, t) => {
                i += 0 === t ? e + "." : e;
              }))
            : (i = "0"),
            (n = Object.assign(n, { fullversion: o, version: parseFloat(i) }));
        }
        return r.test && (n = r.test(e) ? n || r : null), n;
      }),
      n || { name: "" }
    );
  }
  function l(e) {
    let { name: t, fullversion: n, version: r } = a(e, o),
      s = {};
    return (
      o.forEach((e) => {
        s[e.name] = e.name == t;
      }),
      Object.assign(s, {
        platform: ["ios", "win", "android"].includes(t) ? t : "desktop",
        ampPlatform: (s.ios ? "iphone" : s.android && "android") || "web",
        osName: t,
        osVerNum: r,
        osVer: n,
        ["".concat(t, "_ver")]: r,
      }),
      s
    );
  }
  function d(e = "") {
    return (
      !e ||
      -1 !==
        e.search(
          /googlebot|Mediapartners|AdsBot-Google|Viber|Pinterestbot|WhatsApp|yahoo|bingbot|BingPreview|Applebot|baiduspider|yandex|yeti|yodaobot|viber|gigabot|Amazon-Route53-Health-Check-Service|Slackbot-LinkExpanding|ia_archiver|facebookexternalhit|rogerbot|twitterbot|LinkedInBot|developers\.google\.com|googleweblight/i
        )
    );
  }
  function c(e) {
    let { name: t, fullversion: n, version: r } = a(e, i),
      s = {
        browserName: t,
        browserVerNum: r,
        browserVer: n,
        ["".concat(t, "_ver")]: r,
      };
    return (
      i.forEach((e) => {
        s[e.name] = e.name == t;
      }),
      s
    );
  }
  function h(e) {
    let { name: t = "", type: n = "desktop" } = a(e, s),
      r = {};
    return (
      s.forEach((e) => {
        r[e.name] = e.name == t;
      }),
      Object.assign(r, {
        deviceType: n,
        deviceName: t,
        isTablet: "tablet" == n,
        isPhone: "phone" == n,
        isMobile: "desktop" != n,
        isDesktop: "desktop" == n,
      })
    );
  }
  function p(e) {
    let t = e.match(/(nightwatch);port=(\d+)/);
    return t
      ? { testtype: t[1], testdomain: "http://localhost:".concat(t[2]) }
      : {};
  }
  var u = Object.freeze({
      __proto__: null,
      getBrowser: c,
      getDevice: h,
      getEmulationUserAgent: function (e) {
        let t = e.match(/([^,]*)([^&$]*)/),
          n = t && t[1],
          r = (t && t[2]) || "",
          s = "";
        return (
          -1 !== n.search(/iphone/)
            ? (s =
                "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1")
            : -1 !== n.search(/android.nexus/) &&
              (s =
                "Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36"),
          "".concat(s, " ").concat(r)
        );
      },
      getEnvironment: p,
      getOS: l,
      getPlatformInfo: function (e, t) {
        let n = Object.assign({ bot: d(e) }, h(e), l(e), c(e), p(e));
        if (
          ((function (e) {
            let t = "unknown",
              { osName: n, deviceType: r, osVerNum: s } = e;
            n && (t = "".concat(r, "_").concat(n)), (e.deviceplatform = t);
          })(n),
          t)
        ) {
          let e = {};
          Object.keys(n).forEach((t) => {
            n[t] && (e[t] = n[t]);
          }),
            (n = e);
        }
        return n;
      },
      isBot: d,
    }),
    g = Object.freeze({
      __proto__: null,
      arrayBufferToString: function (e) {
        return String.fromCharCode.apply(null, new Uint8Array(e));
      },
      asyncForEachSimul: async function (e, t) {
        return new Promise((n, r) => {
          let s = [];
          for (let n = 0; n < e.length; n++)
            s.push(
              new Promise(async (r, s) => {
                await t(e[n], n, e), r(n);
              })
            );
          return Promise.all(s).then(() => {
            n();
          });
        });
      },
      base64Encode: function (e) {
        if (e && 0 != e.length)
          return btoa(String.fromCharCode.apply(null, new Uint8Array(e)));
      },
      filterProps: function (e = {}, t) {
        let n = {};
        return (
          Object.keys(e).forEach((r) => {
            void 0 === e[r] || "" === e[r] || (t && t(r)) || (n[r] = e[r]);
          }),
          n
        );
      },
      hashParams: function (e) {
        if (!e) return {};
        var t =
            ("object" == typeof e ? e.hash.substring(1) : e.split("#")[1]) ||
            "",
          n = {};
        return (
          ((t && t.split(";")) || []).forEach(function (e) {
            var t = e && e.split("=");
            2 == t.length && (n[t[0]] = t[1]);
          }),
          n
        );
      },
      namespaceExists: function (e, t) {
        var n,
          r,
          s = t;
        for (
          e = e.split("."), r = 0;
          r < e.length && (n = s && "object" == typeof s && e[r] in s);
          r++
        )
          s = s[e[r]];
        return (n && s) || null;
      },
      restGet: function (e) {
        return fetch(e, { method: "GET", credentials: "same-origin" }).then(
          (e) => e.json()
        );
      },
      restPut: function (e, t) {
        return fetch(e, {
          method: "PUT",
          credentials: "same-origin",
          body: JSON.stringify(t),
          headers: { "content-type": "application/json" },
        }).then((e) => e.json());
      },
      sanitize: function (e, t = {}) {
        let { preserveCase: n, ignoreLength: r } = t;
        return (
          e &&
            ("string" != typeof e && (e = e.toString()),
            (e = e.replace(/(%20|\s)/g, "_").replace(/[^a-zA-Z0-9\-_,]/g, "")),
            r || (e = e.substr(0, 20))),
          e && !n ? e.toLowerCase() : e
        );
      },
      stall: function (e = 500) {
        return new Promise((t, n) => {
          setTimeout((e) => t(), e);
        });
      },
      stringToArrayBuffer: function (e) {
        return Uint8Array.from(e, (e) => e.charCodeAt(0)).buffer;
      },
      supplant: function (e, t) {
        return e.replace(/{([^{}]*)}/g, function (e, n) {
          var r = t;
          return (
            n.split(".").forEach(function (e) {
              r = r[e];
            }),
            "string" == typeof r || "number" == typeof r ? r : e
          );
        });
      },
    });
  const m = x([
      "INIT",
      "EMPTY",
      "HIDDEN",
      "LOADING",
      "NO_RESULTS",
      "SUCCESS",
      "SUCCESS_ARIA_LIVE_REGION",
    ]),
    f = x([
      "ACTION_BUTTON",
      "GROUP_ITEMS",
      "GROUP_FOOTER",
      "GROUP_TITLE",
      "LIST",
      "LIST_ITEM",
      "PORTAL",
      "PORTAL_OVERLAY",
      "SPINNER",
    ]);
  function y(e, t) {
    e.dataset.type = t;
  }
  function b(e, t) {
    let n = t.querySelectorAll(
        "[data-type="
          .concat(f.LIST_ITEM, "]:not([data-is-placeholder=true]), [data-type=")
          .concat(f.ACTION_BUTTON, "]")
      ),
      r = Array.from(n).findIndex((t) => t === e);
    return { prev: n[r - 1], next: n[r + 1], all: n };
  }
  function x(e) {
    return e.reduce((e, t) => ((e[t] = t), e), {});
  }
  function v(e) {
    if (e.tagName) return e;
    let t = document.createElement("div");
    return (t.innerHTML = e), t.firstChild || e;
  }
  function _(e = 8) {
    for (
      var t = "",
        n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        r = n.length,
        s = 0;
      s < e;
      s++
    )
      t += n.charAt(Math.floor(Math.random() * r));
    return t;
  }
  function S(e = "div") {
    let t = document.createElement(e),
      n = _();
    return (t.id = n), (t.dataset.id = n), t.classList.add(n), t;
  }
  function E(e) {
    e && ((e.style.display = "none"), (e.style.visibility = "hidden"));
  }
  function P(e) {
    e && ((e.style.display = null), (e.style.visibility = "visible"));
  }
  function k(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }
  class w {
    constructor(e, t) {
      (this.stateMap = e), (this.currentState = t);
    }
    transitionTo(e, t) {
      if (this.currentState === e) return;
      let n = this.stateMap[this.currentState];
      n ||
        console.error(
          "Potential states not defined for current state of ".concat(
            this.currentState
          )
        );
      let r = n[e];
      r ||
        console.error(
          "Invalid transition state from "
            .concat(this.currentState, " to ")
            .concat(e)
        ),
        r(t),
        (this.currentState = e);
    }
  }
  const {
    INIT: A,
    EMPTY: O,
    SUCCESS: T,
    LOADING: I,
    HIDDEN: C,
    NO_RESULTS: L,
  } = m;
  function N(e, t) {
    null !== e
      ? Object.entries(t.nodes.states).forEach(([t, n]) => {
          t === e ? P(n) : E(n);
        })
      : Object.values(t.nodes.states).forEach((e) => {
          E(e);
        });
  }
  function D([e]) {
    if (e !== m.SUCCESS_ARIA_LIVE_REGION) return !0;
  }
  function M(
    e,
    { onSearchNext: t, startSearch: n, listbox: r, useDistinctListboxGroups: s }
  ) {
    let o = r.addGroup(e.key);
    e.nodes = { container: o, states: {} };
    for (let [t, n] of Object.entries(e.states).filter(D)) {
      let r = n();
      r || (r = document.createElement("div")),
        (r = v(r)),
        (r.dataset.state = t),
        (r.dataset.groupKey = e.key),
        (r.dataset.testid = "group:".concat(e.key, ":").concat(t)),
        (e.nodes.states[t] = r),
        o.appendChild(r);
    }
    N(null, e);
    let i = R({
      group: e,
      groupNode: o,
      onSearchNext: t,
      startSearch: n,
      useDistinctListboxGroups: s,
    });
    return new w(i, A);
  }
  const R = ({
    group: e,
    groupNode: t,
    onSearchNext: n,
    startSearch: r,
    useDistinctListboxGroups: s,
  }) => {
    function o() {
      N(T, e), P(e.nodes.spinner), P(e.nodes.primaryActionButton);
    }
    function i() {
      e.nodes.success && e.nodes.success.remove();
    }
    function a() {
      i(), N(C, e);
    }
    const l = () =>
      (({
        group: e,
        groupNode: t,
        onSearchNext: n,
        startSearch: r,
        useDistinctListboxGroups: s,
      }) => {
        let o,
          i,
          a,
          l = document.createElement("div");
        (l.dataset.state = m.SUCCESS),
          (l.dataset.testid = "group:".concat(e.key, ":").concat(m.SUCCESS)),
          (o = (function () {
            let e = S();
            return (
              y(e, f.GROUP_TITLE),
              (e.dataset.type = f.GROUP_TITLE),
              e.setAttribute("role", "heading"),
              e.setAttribute("aria-level", "2"),
              e
            );
          })()),
          (o.innerHTML = k(e.title) ? e.title() : e.title || ""),
          l.appendChild(o);
        let d = S();
        y(d, f.GROUP_ITEMS),
          s && d.setAttribute("role", "listbox"),
          l.appendChild(d);
        let c = S();
        return (
          y(c, f.GROUP_FOOTER),
          (c.dataset.testid = "group:"
            .concat(e.key, ":")
            .concat(m.SUCCESS, ":")
            .concat(f.GROUP_FOOTER)),
          l.appendChild(c),
          (i = document.createElement("span")),
          (i.innerHTML =
            '<svg><use xlink:href="#search-combo-spinner" /><svg>'),
          y(i, f.SPINNER),
          o.appendChild(i),
          e.onRenderActionButton
            ? (a = e.onRenderActionButton(e.data, { startSearch: r }))
            : ((a = document.createElement("button")),
              (a.innerHTML = k(e.primaryActionButtonLabel)
                ? e.primaryActionButtonLabel()
                : e.primaryActionButtonLabel || "Show More"),
              a.addEventListener("click", n),
              a.addEventListener("keydown", n)),
          (a.dataset.groupKey = e.key),
          (a.dataset.type = f.ACTION_BUTTON),
          (a.tabIndex = "-1"),
          (a.id = _()),
          (a.type = "button"),
          e.primaryActionButtonAriaLabel &&
            (a.ariaLabel = e.primaryActionButtonAriaLabel()),
          c.appendChild(a),
          t.appendChild(l),
          (e.nodes.success = l),
          (e.nodes.title = o),
          (e.nodes.spinner = i),
          (e.nodes.items = d),
          (e.nodes.primaryActionButton = a),
          (e.nodes.footer = c),
          (e.nodes.states[m.SUCCESS] = l),
          (l.style.display = "none"),
          { title: o, spinner: i, primaryActionButton: a, success: l, items: d }
        );
      })({
        group: e,
        groupNode: t,
        onSearchNext: n,
        startSearch: r,
        useDistinctListboxGroups: s,
      });
    return {
      INIT: {
        LOADING: () => {
          l(), o();
        },
        HIDDEN: a,
      },
      LOADING: {
        EMPTY: () => {
          i(), N(O, e);
        },
        SUCCESS: (t) => {
          e && !1 === e.nextParams && E(e.nodes.footer), E(e.nodes.spinner);
        },
        HIDDEN: a,
        NO_RESULTS: (t) => {
          let n = e.nodes.states.NO_RESULTS.parentNode,
            r = e.nodes.states.NO_RESULTS,
            s = _objectSpread({}, r.dataset),
            o = window.getComputedStyle(r),
            i = v(e.states.NO_RESULTS(t));
          (i.style.cssText = o),
            Object.assign(i.dataset, s),
            n.replaceChild(i, r),
            (e.nodes.states.NO_RESULTS = i),
            N(L, e);
        },
      },
      SUCCESS: { LOADING: o, HIDDEN: a },
      EMPTY: {
        HIDDEN: a,
        LOADING: () => {
          l(), o();
        },
      },
      HIDDEN: {
        LOADING: () => {
          l(), o();
        },
      },
      NO_RESULTS: { LOADING: o },
    };
  };
  class j {
    constructor({ showOverlay: e } = {}) {
      _defineProperty(this, "addNode", (e) => {
        this.node.appendChild(e);
      }),
        _defineProperty(this, "hide", () => {
          this.node.style.opacity = 0;
        }),
        _defineProperty(this, "show", () => {
          this.node.style.opacity = 1;
        }),
        _defineProperty(this, "destroy", () => {
          this.node.removeEventListener("click", this.portalClick),
            this.node.remove();
        }),
        (this.node =
          document.querySelector("[data-type=".concat(f.PORTAL, "]")) ||
          (function () {
            let e = S();
            return (
              (e.id = e.dataset.id),
              y(e, f.PORTAL),
              document.body.appendChild(e),
              e
            );
          })()),
        (this.id = this.node.id);
      let t = S();
      y(t, f.PORTAL_OVERLAY),
        e && this.node.appendChild(t),
        (this.nodes = { node: this.node, overlay: t });
    }
  }
  class V {
    constructor(e, t = {}) {
      _defineProperty(this, "addGroup", (e) => {
        let t = document.createElement("div");
        return (
          (t.dataset.groupKey = e),
          (t.dataset.testid = "group:".concat(e)),
          this.nodes.list.appendChild(t),
          t
        );
      }),
        _defineProperty(this, "hide", () => {
          var e;
          (this.nodes.list.style.transform = null),
            (e = this.nodes.list) &&
              ((e.style.opacity = 0),
              (e.style.pointerEvents = "none"),
              e.setAttribute("aria-hidden", !0)),
            this.nodes.portal.hide();
        }),
        _defineProperty(this, "show", () => {
          var e;
          (e = this.nodes.list) &&
            ((e.style.opacity = 1),
            (e.style.pointerEvents = "auto"),
            e.setAttribute("aria-hidden", !1)),
            this.nodes.portal.show(),
            (this.nodes.list.style.transform = "scale(1)");
        }),
        _defineProperty(this, "scrollToTop", () => {
          this.nodes.list.scrollTop = 0;
        }),
        _defineProperty(this, "scrollToItem", (e, t) => {
          e &&
            e.scrollIntoView &&
            e.scrollIntoView(t || { block: "nearest", behavoir: "smooth" });
        }),
        _defineProperty(this, "positionRelativeToNode", (e) => {
          let { top: t, left: n, height: r } = e.getBoundingClientRect();
          this.options.disablePortal
            ? ((t = r + 2), (n = 0))
            : ((t = t + r + 2), (n = n)),
            (this.nodes.list.style.top = t + "px"),
            (this.nodes.list.style.left = n + "px"),
            (this.nodes.list.style.maxHeight = "calc(100vh - ".concat(
              this.nodes.list.style.top,
              " - 50px)"
            )),
            this.options.onPosition &&
              this.options.onPosition(this.nodes, { top: t, left: n });
        }),
        _defineProperty(this, "getAllItems", () =>
          this.nodes.list.querySelectorAll(
            '[data-type="'.concat(f.LIST_ITEM, '"]')
          )
        ),
        _defineProperty(this, "destroy", () => {
          this.nodes.portal && this.nodes.portal.destroy(),
            this.resizeObserver && this.resizeObserver.disconnect();
        }),
        (this.nodes = {}),
        (this.options = t);
      let { disablePortal: n, useDistinctListboxGroups: r } = t,
        s = new j({ showOverlay: !0 });
      this.nodes.portal = s;
      let o = S();
      (o.id = _()),
        r || o.setAttribute("role", "listbox"),
        y(o, f.LIST),
        (this.nodes.list = o),
        n
          ? (o.classList.add("disabledPortal"),
            (this.nodes.portal.node.style.zIndex = 2))
          : (s.addNode(this.nodes.list), s.hide()),
        (this.id = o.id),
        (this.resizeObserver = new ResizeObserver(() => {
          this.positionRelativeToNode(e);
        })),
        this.resizeObserver.observe(document.body);
    }
  }
  const B = m,
    z = f;
  class G {
    constructor(e, t) {
      _defineProperty(this, "showListbox", () => {
        this.options.onShow && this.options.onShow(),
          this.listbox.positionRelativeToNode(this.nodes.input),
          this.nodes.input.setAttribute("aria-expanded", "true"),
          requestAnimationFrame(() => {
            this.listbox.show(), this.nodes.input.focus();
          });
      }),
        _defineProperty(this, "hideListbox", () => {
          this.nodes.input.setAttribute("aria-expanded", "false"),
            this.listbox.hide(),
            this.options.onHide && this.options.onHide();
        }),
        _defineProperty(this, "getGroupByKey", (e) =>
          this.groups.find((t) => t.key === e)
        ),
        _defineProperty(this, "handleDocumentClick", (e) => {
          e.target !== this.nodes.input &&
            (this.listbox.nodes.list.contains(e.target) ||
              (this.options.ignoreOutsideClickNodeList &&
                this.options.ignoreOutsideClickNodeList.find(
                  (t) => t === e.target
                )) ||
              this.hideListbox());
        }),
        _defineProperty(this, "handleInputFocus", () => {
          this.listbox.scrollToTop(), this.showListbox();
        }),
        _defineProperty(this, "reset", () => {
          this.setActiveDescendant(null),
            (this.nodes.input.value = null),
            this.startSearch("", { isSilent: !0 }),
            this.hideListbox();
        }),
        _defineProperty(this, "handleNodeKeyDown", (e) => {
          let t = "ArrowDown" === e.key,
            n = "ArrowUp" === e.key;
          if (t || n) {
            let {
                prev: e,
                next: r,
                all: s,
              } = b(this.activeDescendant, this.listbox.nodes.list),
              o = t ? r : e;
            if (!e && n)
              return (
                this.showListbox(),
                void this.setActiveDescendant(s[s.length - 1])
              );
            o ? this.setActiveDescendant(o) : this.setActiveDescendant(s[0]),
              this.showListbox();
          }
          if ("Tab" !== e.key && "Escape" !== e.key) {
            if ("Enter" === e.key) {
              let t = this.groups
                  .map((e) => e.nodes.primaryActionButton)
                  .filter(Boolean)
                  .find((e) => e === this.activeDescendant),
                n = new KeyboardEvent("keydown", { key: "Enter" });
              if (t) return t.dispatchEvent(n), void e.preventDefault();
              let r = Array.from(this.listbox.getAllItems()).find(
                (e) => e === this.activeDescendant
              );
              if (r)
                return (
                  "A" === r.tagName ? r.click() : r.dispatchEvent(n),
                  void e.preventDefault()
                );
            }
          } else this.hideListbox();
        }),
        _defineProperty(this, "handleInputInputEvent", (e) => {
          let t = e.target.value;
          this.options.onQuery && this.options.onQuery(t),
            this.showListbox(),
            this.startSearch(t);
        }),
        _defineProperty(this, "startSearch", (e, t = {}) => {
          let n = [];
          for (let t of this.groups)
            t &&
              t.onSearchAsync &&
              (n.push(this.startSearchAsyncAndRenderGroup(t, e)),
              e &&
                e.length > 0 &&
                this.nodes.input.value !== e &&
                (this.nodes.input.value = e || ""));
          t.isSilent || this.nodes.input.focus();
        }),
        _defineProperty(
          this,
          "startSearchAsyncAndRenderGroup",
          (e, t, n = {}) => {
            let { isNextRequest: r, isKeyboardEvent: s } = n;
            t == e.query ||
              r ||
              ((e.nextParams = null),
              (e.query = t),
              this.setActiveDescendant(null)),
              e.state.transitionTo(B.LOADING);
            let o = e.onParseMenuData(e.data || [], { query: t });
            if (
              (this.renderMenuItems(
                e,
                [...(r ? o : []), { key: _() }, { key: _() }, { key: _() }],
                { isPlaceholder: !0, isNextRequest: !1 }
              ),
              this.options.useDistinctListboxGroups)
            ) {
              let e =
                  this.listbox.nodes.list.querySelectorAll('[role="listbox"]'),
                t = [];
              e.forEach((e) => t.push(e.id)),
                (t = t.join(" ")),
                this.nodes.input.setAttribute("aria-owns", t);
            }
            return e
              .onSearchAsync(t, e.nextParams, e)
              .then((n) => {
                let o = n;
                r && (o = e.onParseNextData(o, e.data)), (e.data = o);
                let i = e.onParseMenuData(e.data, { query: t }),
                  a = Object.keys(B).includes(i) ? i : B.SUCCESS;
                e.nextParams = e.onParseNextParams
                  ? e.onParseNextParams(n)
                  : null;
                let l = { requestData: o, data: i, query: t, group: e };
                if (
                  (e.state.transitionTo(a, l),
                  this.renderMenuItems(e, i, {
                    isNextRequest: r,
                    isKeyboardEvent: s,
                  }),
                  e.states.SUCCESS_ARIA_LIVE_REGION)
                ) {
                  let t = v(
                    e.states.SUCCESS_ARIA_LIVE_REGION(
                      _objectSpread(
                        _objectSpread({}, l),
                        {},
                        {
                          ariaTotalResultCount: e.nodes.items.childElementCount,
                        }
                      )
                    )
                  );
                  this.nodes.ariaLiveRegion.appendChild(t),
                    setTimeout(() => {
                      t && t.remove();
                    }, 3e3);
                }
              })
              .catch((e) => {
                console.error(e);
              });
          }
        ),
        _defineProperty(this, "handleSearchNext", (e) => {
          e.preventDefault(), e.stopPropagation();
          let t = !!e.key && this.activeDescendant;
          if (e.key && "Enter" != e.key) return;
          let n = e.target.dataset.groupKey,
            r = this.getGroupByKey(n);
          return (
            this.nodes.input.focus(),
            this.startSearchAsyncAndRenderGroup(r, "", {
              isNextRequest: !0,
              isKeyboardEvent: t,
            }),
            !1
          );
        }),
        _defineProperty(this, "renderMenuItem", (e, t, n) => {
          let r,
            s = this.getGroupByKey(t),
            o = s.onGetDataKey(e);
          return (
            s.onRenderMenuItem
              ? ((r = s.onRenderMenuItem(e, {
                  groupKey: t,
                  group: s,
                  startSearch: this.startSearch,
                  reset: this.reset,
                })),
                (r = v(r)))
              : ((r = document.createElement("li")),
                (r.style.display = "block"),
                (r.style["--webkit-appearance"] = "none"),
                (r.innerText = e.toString())),
            (r.id = _()),
            (r.tabIndex = -1),
            y(r, z.LIST_ITEM),
            (r.dataset.key = o),
            (r.dataset.groupKey = t),
            r.setAttribute("role", "option"),
            r.setAttribute("aria-selected", "false"),
            (r.dataset.isPlaceholder = n.isPlaceholder ? "true" : "false"),
            (r.dataset.testid = n.isPlaceholder ? "placeholder" : ""),
            r.addEventListener("click", (e) => {
              "A" === e.currentTarget.tagName && this.reset();
            }),
            r
          );
        }),
        _defineProperty(this, "insertMenuItemIntoGroup", (e, t) => {
          this.getGroupByKey(t).nodes.items.appendChild(e);
        }),
        _defineProperty(this, "renderMenuItems", (e, t, n) => {
          let r =
            ((s = e.key),
            this.listbox.nodes.list.querySelectorAll(
              "[data-type="
                .concat(f.LIST_ITEM, "][data-group-key=")
                .concat(s, "]")
            ));
          var s;
          const o = Array.isArray(t)
            ? t.reduce((t, n, r) => {
                const s = e.onGetDataKey(n);
                return (
                  -1 === t.findIndex((t) => e.onGetDataKey(t) === s) &&
                    t.push(n),
                  t
                );
              }, [])
            : [];
          if (o.length > 0 && 0 === r.length)
            for (const t of o)
              this.insertMenuItemIntoGroup(
                this.renderMenuItem(t, e.key, n),
                e.key
              );
          else if (o.length > 0 && r.length > 0) {
            let t, s;
            for (t = 0; t <= r.length - 1; t++) {
              const i = r[t],
                a = o[t];
              if (i && a && i.getAttribute("data-key") != e.onGetDataKey(a)) {
                let t = this.renderMenuItem(a, e.key, n);
                s || (s = t), i.replaceWith(t);
              } else i && !a && i.remove();
            }
            if (o.length > t)
              for (t = t; t <= o.length - 1; t++) {
                let r = this.renderMenuItem(o[t], e.key, n);
                s || (s = r), this.insertMenuItemIntoGroup(r, e.key);
              }
            s &&
              n.isNextRequest &&
              (n.isKeyboardEvent
                ? this.setActiveDescendant(s)
                : (this.setActiveDescendant(null),
                  this.listbox.scrollToItem(s)));
          }
        }),
        _defineProperty(this, "destroy", () => {
          this.nodes.node.removeEventListener(
            "keydown",
            this.handleNodeKeyDown
          ),
            this.nodes.input.removeEventListener(
              "input",
              this.handleInputInputEventDebounced
            ),
            this.nodes.input.removeEventListener(
              "focus",
              this.handleInputFocus
            ),
            document.removeEventListener("click", this.handleDocumentClick),
            this.nodes.spinner.remove(),
            this.nodes.style.remove(),
            this.listbox.destroy();
        });
      let {
        groups: n,
        disablePortal: r,
        useDistinctListboxGroups: s,
        onPosition: o,
      } = t;
      (this.options = t),
        (this.nodes = {}),
        (this.listbox = new V(e, {
          disablePortal: r,
          useDistinctListboxGroups: s,
          onPosition: o,
        })),
        this.listbox.hide(),
        r && e.appendChild(this.listbox.nodes.list),
        (this.groups = Array.isArray(n) ? n.filter((e) => !e.isDisabled) : []),
        (this.nodes.style = (function (e) {
          const t = document.createElement("style");
          return (
            t.setAttribute("type", "text/css"),
            (t.innerHTML =
              "[data-type='PORTAL'] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 9999;\n    width: 100%;\n    height: 100%;\n    transition: opacity 0.2s ease-out;\n    opacity: 0;\n    pointer-events: none;\n}\n\n[data-type='PORTAL_OVERLAY'] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n    opacity: 1;\n}\n\n[data-type='LIST'] {\n    position: absolute;\n    display: block;\n    width: 300px;\n    min-height: 0px;\n    max-height: 618px;\n    overflow-y: auto;\n    padding: 0;\n    border-radius: 8px;\n    box-shadow: 0 40px 40px 0 rgb(0 0 0 / 10%);\n    border: solid 1px #e4e4e4;\n    background-color: #fff;\n    color: #242424;\n    font-weight: 500;\n    opacity: 1;\n    transform: scale(0.95);\n    transform-origin: top;\n    transition: scale 0.3s cubic-bezier(0.4, 0.2, 0, 1);\n    scroll-padding-top: 45.6px;\n    /* TODO Bottom should be height of last item height? */\n    scroll-padding-bottom: 45.6px;\n}\n\n[data-type='LIST'].disabledPortal {\n    position: absolute;\n    z-index: 9999;\n}\n\n[data-type='ACTION_BUTTON'],\n[data-type='LIST_ITEM'] {\n    position: relative;\n}\n\n[data-type='ACTION_BUTTON'] {\n    background: #fafafa;\n    border-radius: 33px;\n    text-transform: uppercase;\n    color: #0088ff;\n    text-align: center;\n    padding: 6px 12px;\n    border: none;\n    overflow: hidden;\n    font-weight: bold;\n    font-size: 12px;\n    transform: translate3d(0, 0, 0);\n    cursor: pointer;\n}\n\n[data-type='LIST_ITEM']:hover {\n    text-decoration: none !important;\n}\n\n[data-type='LIST_ITEM'] {\n    color: black;\n    padding: 10px;\n    cursor: pointer;\n    min-height: 45px;\n    overflow: hidden;\n    border-bottom: 1px solid #f4f4f4;\n}\n\n[data-type='ACTION_BUTTON']:after {\n    z-index: 0 !important;\n}\n\n[data-type='ACTION_BUTTON']:after,\n[data-type='LIST_ITEM']:after {\n    content: '';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: rgba(0, 136, 255, 0.1);\n    top: 0;\n    left: 0;\n    opacity: 0;\n    transition: opacity 150ms ease-out;\n    z-index: -1;\n    will-change: opacity;\n    cursor: pointer;\n}\n[data-type='ACTION_BUTTON'][aria-selected='true']:after,\n[data-type='ACTION_BUTTON']:hover:after,\n[data-type='LIST_ITEM'][aria-selected='true']:after,\n[data-type='LIST_ITEM']:hover:after {\n    opacity: 1;\n}\n\n[data-type='GROUP_TITLE'] {\n    color: #000;\n    font-size: 12px;\n    font-weight: bold;\n    text-transform: uppercase;\n\n    padding: 15px 10px 10px 10px;\n    position: sticky;\n    top: 0;\n    background: white;\n    /* border-bottom: 1px solid rgba(0,0,0,.2);*/\n    z-index: 9999;\n}\n\n@-webkit-keyframes rotating /* Safari and Chrome */ {\n    from {\n        -webkit-transform: rotate(0deg);\n        -o-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    to {\n        -webkit-transform: rotate(360deg);\n        -o-transform: rotate(360deg);\n        transform: rotate(360deg);\n    }\n}\n@keyframes rotating {\n    from {\n        -ms-transform: rotate(0deg);\n        -moz-transform: rotate(0deg);\n        -webkit-transform: rotate(0deg);\n        -o-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    to {\n        -ms-transform: rotate(360deg);\n        -moz-transform: rotate(360deg);\n        -webkit-transform: rotate(360deg);\n        -o-transform: rotate(360deg);\n        transform: rotate(360deg);\n    }\n}\n\n[data-type='SPINNER'] {\n    animation: rotating 1.2s linear infinite;\n    will-change: transform;\n    width: 14px;\n    height: 14px;\n    position: absolute;\n    display: inline;\n    margin-left: 12px;\n}\n\n[data-type='SPINNER'] svg {\n    display: inline;\n    width: 14px;\n    height: 14px;\n}\n\n[data-type='GROUP_FOOTER'] {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    padding: 15px 10px 15px;\n}\n\n.shz-web-visually-hidden {\n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n    height: 1px;\n    overflow: hidden;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n"),
            document.getElementsByTagName("head")[0].appendChild(t),
            t
          );
        })()),
        (this.nodes.spinner = (function () {
          let e = document.createElement("div");
          return (
            (e.innerHTML =
              '<svg\n    id="search-combo-spinner"\n    width="14"\n    height="14"\n    viewBox="0 0 14 14"\n    fill="none"\n    xmlns="http://www.w3.org/2000/svg"\n>\n    <path\n        d="M7 1.16669V3.50002"\n        stroke="#0088FF"\n        stroke-width="2"\n        stroke-linecap="round"\n        stroke-linejoin="round"\n    />\n    <path\n        d="M7 10.5V12.8333"\n        stroke="#0088FF"\n        stroke-width="2"\n        stroke-linecap="round"\n        stroke-linejoin="round"\n    />\n    <path\n        d="M2.87585 2.87585L4.52669 4.52669"\n        stroke="#0088FF"\n        stroke-width="2"\n        stroke-linecap="round"\n        stroke-linejoin="round"\n    />\n    <path\n        d="M9.47333 9.47333L11.1242 11.1242"\n        stroke="#0088FF"\n        stroke-width="2"\n        stroke-linecap="round"\n        stroke-linejoin="round"\n    />\n    <path\n        d="M1.16669 7H3.50002"\n        stroke="#0088FF"\n        stroke-width="2"\n        stroke-linecap="round"\n        stroke-linejoin="round"\n    />\n    <path\n        d="M10.5 7H12.8333"\n        stroke="#0088FF"\n        stroke-width="2"\n        stroke-linecap="round"\n        stroke-linejoin="round"\n    />\n    <path\n        d="M2.87585 11.1242L4.52669 9.47333"\n        stroke="#0088FF"\n        stroke-width="2"\n        stroke-linecap="round"\n        stroke-linejoin="round"\n    />\n    <path\n        d="M9.47333 4.52669L11.1242 2.87585"\n        stroke="#0088FF"\n        stroke-width="2"\n        stroke-linecap="round"\n        stroke-linejoin="round"\n    />\n</svg>\n'),
            (e.style.display = "none"),
            document.getElementsByTagName("body")[0].appendChild(e),
            e
          );
        })());
      let i = e.querySelector("input");
      (i.id = _()),
        i.setAttribute("autocomplete", "off"),
        i.setAttribute("aria-autocomplete", "list"),
        i.setAttribute("aria-expanded", "false"),
        i.setAttribute("role", "combobox"),
        (this.nodes.node = e),
        (this.nodes.input = i);
      for (let e of this.groups)
        e.state = M(e, {
          startSearch: this.startSearch,
          onSearchNext: this.handleSearchNext,
          listbox: this.listbox,
          useDistinctListboxGroups: s,
        });
      var a, l, d;
      s || i.setAttribute("aria-owns", this.listbox.id),
        this.nodes.node.addEventListener("keydown", this.handleNodeKeyDown),
        (this.handleInputInputEventDebounced =
          ((a = this.handleInputInputEvent),
          500,
          function () {
            var e = this,
              t = arguments,
              n = function () {
                (d = null), a.apply(e, t);
              },
              r = l;
            clearTimeout(d), (d = setTimeout(n, 500)), r && a.apply(e, t);
          })),
        this.nodes.input.addEventListener(
          "input",
          this.handleInputInputEventDebounced
        ),
        this.nodes.input.addEventListener("focus", this.handleInputFocus),
        document.addEventListener("click", this.handleDocumentClick);
      let c = S();
      y(c, B.SUCCESS_ARIA_LIVE_REGION),
        c.setAttribute("role", "region"),
        c.setAttribute("aria-live", "polite"),
        c.classList.add("shz-web-visually-hidden"),
        (this.nodes.ariaLiveRegion = c),
        this.listbox.nodes.list.appendChild(c);
      let h = [];
      for (let e of this.groups.filter((e) => e.immediate))
        h.push(
          this.startSearchAsyncAndRenderGroup(
            e,
            "string" == typeof e.immediate
              ? e.immediate
              : this.nodes.input.value
          )
        );
    }
    setActiveDescendant(e) {
      this.activeDescendant &&
        (this.activeDescendant.setAttribute("aria-selected", !1),
        (this.activeDescendant = null));
      let { all: t } = b(e, this.listbox.nodes.list);
      t.forEach((e) => e.setAttribute("aria-selected", !1)),
        e
          ? (this.nodes.input.setAttribute("aria-activedescendant", e.id),
            (this.activeDescendant = e),
            this.listbox.scrollToItem(e),
            e.setAttribute("aria-selected", !0))
          : this.nodes.input.setAttribute("aria-activedescendant", null);
    }
  }
  function U(e, t) {
    return new Promise((n, r) => {
      shz.app
        .getService("search")
        .request(
          "search",
          t ? { next: t } : { query: e, pageSize: 3, page: 0 },
          (e) => {
            n(e);
          }
        );
    });
  }
  function F(e, t = {}) {
    let n = shz.common.merge(
        t,
        {
          strings: shz.app.strings,
          langpath: shz.app.langpath,
          location: shz.common.getFrameInfo(location.pathname, shz.app.config),
          mobilemode: !!shz.app.mobilemode,
        },
        !0
      ),
      r = Handlebars.partials[e];
    return r ? r(n) : (console.error("Partial not found", e), "");
  }
  function H(e) {
    return (shz && shz.app && shz.app.strings && shz.app.strings[e]) || "";
  }
  var K = {
      key: "artists",
      title: () => H("website_artists"),
      primaryActionButtonLabel: () => H("website_showmore"),
      primaryActionButtonAriaLabel: () => H("website_showmore_artists"),
      onSearchAsync: (e, t) => U(e, t),
      onGetDataKey: (e) => e.id || e.key,
      onParseMenuData: (e) =>
        e && e.artists && e.artists.hits && Array.isArray(e.artists.hits)
          ? e.artists.hits
          : B.EMPTY,
      onParseNextParams: (e) =>
        !!(e && e.artists && e.artists.next) && e.artists.next,
      onParseNextData: (e, t) => {
        const n =
          e && e.artists && e.artists.hits && Array.isArray(e.artists.hits)
            ? e.artists.hits
            : [];
        return _objectSpread(
          _objectSpread({}, t),
          {},
          {
            artists: _objectSpread(
              _objectSpread({}, t.artists),
              {},
              { hits: [...t.artists.hits, ...n] }
            ),
          }
        );
      },
      onRenderMenuItem: (e) =>
        Handlebars.partials["partials.search.artist-menu-item"](e),
      states: {
        [B.EMPTY]: () => {},
        [B.NO_RESULTS]: () => {},
        [B.SUCCESS_ARIA_LIVE_REGION]: (e) =>
          F("partials.search.artist-success-aria-live-region-state", e),
      },
    },
    q = {
      key: "songs",
      title: () => H("website_songs"),
      primaryActionButtonLabel: () => H("website_showmore"),
      primaryActionButtonAriaLabel: () => H("website_showmore_songs"),
      onSearchAsync: (e, t) => U(e, t),
      onGetDataKey: (e) => e.key,
      onParseNextParams: (e) =>
        !!(e && e.tracks && e.tracks.next) && e.tracks.next,
      onParseMenuData: (e, { query: t }) => {
        const n =
            e && e.tracks && e.tracks.hits && Array.isArray(e.tracks.hits)
              ? e.tracks.hits
              : [],
          r =
            e && e.artists && e.artists.hits && Array.isArray(e.artists.hits)
              ? e.artists.hits
              : [];
        return 0 === n.length && 0 === r.length && 0 === t.length
          ? B.EMPTY
          : 0 === n.length && 0 === r.length && t.length > 0
          ? B.NO_RESULTS
          : 0 === n.length && t.length > 0
          ? B.EMPTY
          : n;
      },
      onParseNextData: (e, t) => {
        const n =
          e && e.tracks && e.tracks.hits && Array.isArray(e.tracks.hits)
            ? e.tracks.hits
            : [];
        return _objectSpread(
          _objectSpread({}, t),
          {},
          {
            tracks: _objectSpread(
              _objectSpread({}, t.tracks),
              {},
              { hits: [...t.tracks.hits, ...n] }
            ),
          }
        );
      },
      onRenderMenuItem: (e) => F("partials.search.track-menu-item", e),
      states: {
        [B.EMPTY]: () => {},
        [B.NO_RESULTS]: (e) => {
          let t = e || {};
          return (
            (t.query = t.query ? '"'.concat(t.query, '"') : ""),
            F("partials.search.no-results-state", t)
          );
        },
        [B.SUCCESS_ARIA_LIVE_REGION]: (e) =>
          F("partials.search.track-success-aria-live-region-state", e),
      },
    },
    W = {
      key: "recent",
      title: () => H("website_search_recent"),
      immediate: !0,
      onSearchAsync: (e, t, n) =>
        "string" == typeof e && e.length > 0
          ? Promise.resolve(B.HIDDEN)
          : (function () {
              try {
                let e = shz.app.storage.local.get("search.recents");
                return (e = JSON.parse(e || "[]")), Promise.resolve(e);
              } catch (e) {
                return console.error(e), Promise.reject(null);
              }
            })(),
      onParseMenuData: (e) => {
        if (e === B.HIDDEN) return e;
        const t = e.reduce((e, t, n) => (e.push({ key: n, value: t }), e), []);
        return 0 === t.length ? B.EMPTY : t;
      },
      onGetDataKey: (e) => e.key,
      onRenderMenuItem: (e, { startSearch: t }) => {
        const n = document.createElement("a"),
          r = Handlebars.partials["partials.search.recent-menu-item"](e);
        (n.innerHTML = r),
          (n.style.cssText =
            "\n            display:flex;\n            align-items: center;\n        ");
        const s = (n) => {
          n.stopImmediatePropagation(),
            (n.key && "Enter" != n.key) || t(e.value);
        };
        return (
          n.addEventListener("click", s), n.addEventListener("keydown", s), n
        );
      },
      onMenuItemClick: (e) => {
        console.log(e);
      },
      onRenderActionButton: (e, { startSearch: t }) => {
        const n = document.createElement("button");
        (n.type = "button"), (n.innerHTML = "Clear Recent Searches");
        let r = (e) => {
          e.stopImmediatePropagation(),
            (e.key && "Enter" != e.key) ||
              (shz.storage.local.remove("search.recents"),
              shz.ux.fire("remove-search-recents", !0),
              t(""));
        };
        return (
          n.addEventListener("click", r), n.addEventListener("keydown", r), n
        );
      },
      states: {
        [B.EMPTY]: (e) => {
          let t = shz.app.strings.website_search_no_searches;
          return (
            (t = t.toLowerCase().replace(/^\w/, (e) => e.toUpperCase())),
            F(
              "partials.search.recent-empty-state",
              _objectSpread(_objectSpread({}, e), {}, { title: t })
            )
          );
        },
      },
    };
  const Y = {
      start: (e) => {
        let t = shz.common.namespace("frames.search.results"),
          n = new G(e, {
            groups: [W, q, K],
            onQuery: t.Model.addToPreviousSearchCookie,
            disablePortal: !0,
            useDistinctListboxGroups: !0,
            onPosition: (e, t) => {
              let n = [
                ".footerstatic .active-promo .shz-frame-promotionbanner",
                ".footerstatic .shz-frame-ux-playerbar.show",
                ".shz-frame-webrec-floatingbutton .callout-container",
              ].reduce((e, t) => {
                let n = document.querySelector(t);
                return e + (n ? n.clientHeight : 0);
              }, 0);
              (n += 30),
                (e.list.style.maxHeight = "calc(100vh - "
                  .concat(t.top, "px - ")
                  .concat(n, "px)"));
            },
          });
        n.listbox.nodes.portal.nodes.overlay.style.top = "var(--header-height)";
        let r = e.querySelector('button[type="submit"]');
        return (
          r &&
            ((r.type = "button"),
            r.addEventListener("click", (e) => {
              e.preventDefault(),
                e.stopImmediatePropagation(),
                n.startSearch(n.nodes.input.value);
            })),
          n
        );
      },
      featureFlagStart: (e, t) => new G(e, { groups: t }),
    },
    X = [
      {
        name: "chromebook",
        regex: "[^a-zA-Z]CrOS|Chromebook",
        type: "desktop",
      },
      { name: "iphone", regex: "iPhone", type: "phone" },
      { name: "ipad", regex: "iPad", type: "tablet" },
      {
        name: "ipad",
        test: function (e) {
          return (
            "undefined" != typeof navigator &&
            "MacIntel" === navigator.platform &&
            navigator.maxTouchPoints > 1
          );
        },
        type: "tablet",
      },
      { name: "ipod", regex: "iPod", type: "phone" },
      {
        name: "windowsPhone",
        regex: "Windows Phone|Windows Mobile",
        type: "phone",
      },
      {
        name: "windowsTablet",
        regex: "Windows(.*)?(Touch|Tablet)",
        type: "tablet",
      },
      { name: "androidPhone", regex: "Android(.*)?Mobile", type: "phone" },
      { name: "androidTablet", regex: "Android", type: "tablet" },
      { name: "tablet", regex: "Tablet", type: "tablet" },
    ],
    Z = [
      {
        name: "chromeos",
        regex: "[^a-zA-Z]CrOS|Chromebook",
        regexVer: "x86_64|armv7l|aarch64",
      },
      { name: "ios", regex: "iPhone|iPad|iPod", regexVer: "OS" },
      {
        name: "win",
        regex: "Win|Windows Phone",
        regexVer: "NT|OS|Windows Phone|Windows Mobile",
      },
      { name: "android", regex: "Android", regexVer: "Android" },
      { name: "mac", regex: "Macintosh|Apple Mac", regexVer: "OS X|OS_X" },
      { name: "linux", regex: "Linux", regexVer: "rv|Linux|armv7l" },
      { name: "amazon", regex: "Silk", regexVer: "Silk" },
    ],
    Q = [
      { name: "ie", regex: "MSIE|Trident", regexVer: "rv|MSIE|IEMobile" },
      {
        name: "edge",
        regex: "Edg|Edge",
        regexVer: "MSIE|rv|IEMobile|Edg|Edge|EdgiOS|EdgA",
      },
      { name: "opera", regex: "OPR|Opera", regexVer: "OPR|Version" },
      {
        name: "miuibrowser",
        regex: "XiaoMi/MiuiBrowser",
        regexVer: "MiuiBrowser",
      },
      {
        name: "samsungbrowser",
        regex: "SamsungBrowser",
        regexVer: "SamsungBrowser",
      },
      {
        name: "chrome",
        regex: "Chrome|CrMo|CriOS",
        regexVer: "Chrome|CrMo|CriOS",
      },
      { name: "firefox", regex: "Firefox|FxiOS", regexVer: "Firefox|FxiOS" },
      { name: "safari", regex: "Safari", regexVer: "Version|Safari" },
      { name: "BlackBerry", regex: "CLDC", regexVer: "CLDC" },
    ];
  function J(e, t) {
    let n;
    return (
      t.some((t) => {
        let r = Object.assign({}, t);
        if (
          r.regex &&
          new RegExp(r.regex, "i").test(e) &&
          ((n = r), r.regexVer)
        ) {
          let t = new RegExp(
              "(".concat(r.regexVer, ")[- /:;_]([\\d._]+)"),
              "i"
            ),
            s = e.match(t),
            o = ((s && s[2]) || "").replace(/_/g, "."),
            i = "";
          o
            ? ((s = o.split(".")),
              s.forEach((e, t) => {
                i += 0 === t ? e + "." : e;
              }))
            : (i = "0"),
            (n = Object.assign(n, { fullversion: o, version: parseFloat(i) }));
        }
        return r.test && (n = r.test(e) ? n || r : null), n;
      }),
      n || { name: "" }
    );
  }
  function $(e = "") {
    return (
      !e ||
      -1 !==
        e.search(
          /googlebot|Mediapartners|AdsBot-Google|Viber|Pinterestbot|WhatsApp|yahoo|bingbot|Applebot|baiduspider|yandex|yeti|yodaobot|viber|gigabot|Amazon-Route53-Health-Check-Service|Slackbot-LinkExpanding|ia_archiver|facebookexternalhit|rogerbot|twitterbot|LinkedInBot|developers\.google\.com|googleweblight/i
        )
    );
  }
  function ee(e, t) {
    var n,
      r,
      s = t;
    for (
      e = e.split("."), r = 0;
      r < e.length && (n = s && "object" == typeof s && e[r] in s);
      r++
    )
      s = s[e[r]];
    return (n && s) || null;
  }
  class te extends class {
    constructor(e) {
      _defineProperty(this, "_controlTypes", {
        urloverride(e, t) {
          let n = e.urloverride || t,
            r = this.urlparams[n];
          return void 0 !== r ? "true" == r || "1" == r : null;
        },
        enabled: (e) => !1 !== e,
        platform(e) {
          let t,
            n = this.platformProps;
          return (
            (t = Object.keys(e).every((t) => {
              let r;
              if (void 0 !== n[t]) {
                let s,
                  o = e[t],
                  i = parseFloat(o);
                r =
                  !isNaN(i) &&
                  (s = (function (e) {
                    let t;
                    return (
                      -1 !== e.search(/(VerNum|_ver)$/)
                        ? (t = n[e])
                        : "boolean" == typeof n[e] &&
                          (t = n["".concat(e, "_ver")]),
                      !isNaN(t) && t
                    );
                  })(t))
                    ? s >= parseFloat(o)
                    : n[t] == (isNaN(i) ? o : i);
              }
              return !!r;
            })),
            t
          );
        },
        countrylist(e) {
          let t;
          return (
            Array.isArray(e)
              ? (t = e.includes(this.country))
              : (e.enable && (t = e.enable.includes(this.country)),
                e.disable && (t = !e.disable.includes(this.country))),
            t
          );
        },
        phasedrolloutpc(e = 100) {
          const { inid: t } = this.inid;
          return (t ? murmurhash3_32_gc(t) % 100 : 0) < e;
        },
        environment(e) {
          let t = this.environment;
          return Array.isArray(e)
            ? e.includes(t)
            : Object.keys(e).every((n) => n == t && e[n]);
        },
        duration(e) {
          let t = Date.now(),
            n = !e.startdate || e.startdate < t;
          return (n = n && (!e.enddate || e.enddate > t)), n;
        },
        dependent(e) {
          let t;
          return (
            (t = Array.isArray(e)
              ? e.some((e) => this.isEnabled(e))
              : "object" == typeof e
              ? Object.keys(e).every((t) => this.isEnabled(t) == e[t])
              : this.isEnabled(e)),
            t
          );
        },
        loginstate(e) {
          return e == !!this.getLoginState();
        },
        custom(e, t) {
          if (/comment\d{0,2}$/.test(t)) return !0;
          let n = this._isCustomControl(t);
          return "function" == typeof n && n(e);
        },
      });
      let { controlConfigs: t = {}, controlStates: n = {} } = e,
        {
          environments: r = [],
          customModules: s = {},
          getLoginState: o = () => !1,
        } = t,
        {
          useragent: i,
          platformProps: a = {},
          urlparams: l = {},
          country: d = "",
          environment: c = "",
          inid: h = "",
        } = n;
      (a = _objectSpread(
        _objectSpread(
          {},
          (i &&
            (function (e, t) {
              let n = Object.assign(
                { bot: $(e) },
                (function (e) {
                  let { name: t = "", type: n = "desktop" } = J(e, X),
                    r = {};
                  return (
                    X.forEach((e) => {
                      r[e.name] = e.name == t;
                    }),
                    Object.assign(r, {
                      deviceType: n,
                      deviceName: t,
                      isTablet: "tablet" == n,
                      isPhone: "phone" == n,
                      isMobile: "desktop" != n,
                      isDesktop: "desktop" == n,
                    })
                  );
                })(e),
                (function (e) {
                  let { name: t, fullversion: n, version: r } = J(e, Z),
                    s = {};
                  return (
                    Z.forEach((e) => {
                      s[e.name] = e.name == t;
                    }),
                    Object.assign(s, {
                      platform: ["ios", "win", "android"].includes(t)
                        ? t
                        : "desktop",
                      ampPlatform:
                        (s.ios ? "iphone" : s.android && "android") || "web",
                      osName: t,
                      osVerNum: r,
                      osVer: n,
                      ["".concat(t, "_ver")]: r,
                    }),
                    s
                  );
                })(e),
                (function (e) {
                  let { name: t, fullversion: n, version: r } = J(e, Q),
                    s = {
                      browserName: t,
                      browserVerNum: r,
                      browserVer: n,
                      ["".concat(t, "_ver")]: r,
                    };
                  return (
                    Q.forEach((e) => {
                      s[e.name] = e.name == t;
                    }),
                    s
                  );
                })(e),
                (function (e) {
                  let t = e.match(/(nightwatch);port=(\d+)/);
                  return t
                    ? {
                        testtype: t[1],
                        testdomain: "http://localhost:".concat(t[2]),
                      }
                    : {};
                })(e)
              );
              if (
                ((function (e) {
                  let t = "unknown",
                    { osName: n, deviceType: r, osVerNum: s } = e;
                  n && (t = "".concat(r, "_").concat(n)),
                    (e.deviceplatform = t);
                })(n),
                t)
              ) {
                let e = {};
                Object.keys(n).forEach((t) => {
                  n[t] && (e[t] = n[t]);
                }),
                  (n = e);
              }
              return n;
            })(i)) ||
            {}
        ),
        a
      )),
        Object.assign(this, {
          environments: r,
          customModules: s,
          getLoginState: o,
          platformProps: a,
          environment: c,
          country: d,
          inid: h,
          urlparams: l,
        });
    }
    addCustomModules(e = {}) {
      Object.keys(e).forEach((t) => {
        this.customModules[t] = e[t];
      });
    }
    _isSimpleControl(e) {
      return [
        "phasedrolloutpc",
        "duration",
        "loginstate",
        "countrylist",
        "custom",
        "dependent",
        "enabled",
        "loginstate",
      ].includes(e);
    }
    _getControlType(e) {
      return this._isSimpleControl(e)
        ? e
        : Object.keys(this.platformProps).includes(e)
        ? "platform"
        : this.environments.includes(e)
        ? "environment"
        : !!this._isCustomControl(e) && "custom";
    }
    _isCustomControl(e) {
      let t = e.split("."),
        n = ee(t[0], this.customModules);
      return t[1] && n ? n[t[1]] : n;
    }
    _getDependents(e = "") {
      return "string" == typeof e ? [e] : Array.isArray(e) ? e : Object.keys(e);
    }
  } {
    constructor(e = {}, t) {
      super(t),
        _defineProperty(this, "_cached", {}),
        _defineProperty(this, "_canChange", ["loginstate", "custom"]),
        _defineProperty(this, "_reserved", [
          "urloverride",
          "data",
          "_disableCache",
        ]),
        (this.config = e.featureflags || {});
    }
    isEnabled(e) {
      if (this._cached[e]) return this._cached[e].enabled;
      let t = ee(e, this.config);
      if (
        !t ||
        (function (e) {
          for (var t in e) if (e.hasOwnProperty(t)) return 0;
          return 1;
        })(t)
      )
        return !1;
      let n = this._controlTypes.urloverride.call(this, t, e);
      return null !== n
        ? ((this._cached[e] = { enabled: n }), n)
        : ((n = this._isEnabled(t, e)),
          this._isCachable(e) && (this._cached[e] = { enabled: n }),
          n);
    }
    getFlag(e) {
      let t = this.isEnabled(e),
        n = (ee(e, this.config) || {}).data;
      return (
        n && !this._isDataOnlyNode(n) && (n = this._getData(n, e)),
        { enabled: t, data: n }
      );
    }
    setState(e, t) {
      this._cached[e] = { enabled: t };
    }
    getControlTypes() {
      return Object.keys(this._controlTypes);
    }
    getReport(e, t = {}, n = {}) {
      let r = e ? ee(e, this.config) : this.config;
      return (
        Object.keys(r)
          .sort((e, t) => (e.toLowerCase() < t.toLowerCase() ? -1 : 1))
          .reduce((n, r) => {
            let s = e ? e + "." + r : r,
              o = this._hasControlProperties(s);
            if (o) {
              let { enabled: e, data: r } = this.getFlag(s);
              if (t.minimal) n[s] = { summary: e };
              else {
                let t = this._getPropReport(o, s);
                (t.summary = e), r && (t.data = r), (n[s] = t);
              }
            } else this.getReport(s, t, n);
            return n;
          }, n),
        console.log(n),
        n
      );
    }
    _evalControl(e, t, n) {
      if (this._reserved.includes(e)) return !0;
      let r = this._controlTypes[e];
      return r
        ? r.call(this, t, n)
        : this._controlTypes.custom.call(this, t, e, n);
    }
    _isEnabled(e, t) {
      let n;
      if (Array.isArray(e)) n = e.some((e) => this._isEnabled(e, t));
      else {
        if ("object" != typeof e) return this._isEnabledProp(e, !0, t);
        n = Object.keys(e).every((n) => this._isEnabledProp(n, e[n], t));
      }
      return n;
    }
    _getData(e, t) {
      let n;
      if (Array.isArray(e)) e.some((e) => ((n = this._getData(e, t)), n));
      else {
        let r = Object.keys(e).every((r) => {
          let s;
          return (
            (s = "data" == r)
              ? (n = e[r])
              : ((s = this._isEnabledProp(r, e[r], t)),
                (n = s && this._getData(e[r], t))),
            s
          );
        });
        n = r && n;
      }
      return n;
    }
    _isDataOnlyNode(e) {
      let t = e.data;
      return (
        t ||
          Array.isArray(e) ||
          "object" != typeof e ||
          (t = Object.keys(e).every((e) => !this._getControlType(e))),
        t
      );
    }
    _isEnabledProp(e, t, n) {
      let r,
        s = "!" === e[0];
      if ((s && (e = e.slice(1)), this._isReserved(e))) return !0;
      let o = this._getControlType(e);
      return (
        this._isSimpleControl(o)
          ? (r = this._evalControl(e, t, n))
          : "object" == typeof t
          ? ((r = !o || this._evalControl(o, { [e]: !0 }, n)),
            (r = r && this._isEnabled(t, n)))
          : (r = !o || this._evalControl(o, { [e]: t }, n)),
        s ? !r : r
      );
    }
    _isReserved(e) {
      return this._reserved.includes(e) || "_" == e[0];
    }
    _isCachable(e) {
      if (this._cached[e]) return !0;
      let t = ee(e, this.config);
      return (
        !t._disableCache &&
        !Object.keys(t).some((e) => {
          let n;
          return (
            (n =
              "dependent" == e
                ? this._getDependents(t[e]).some((e) => !this._isCachable(e))
                : this._canChange.includes(this._getControlType(e))),
            n
          );
        })
      );
    }
    _hasControlProperties(e) {
      let t = ee(e, this.config);
      return Object.keys(t).some(
        (e) =>
          this._reserved.includes(e) ||
          this._getControlType(e) ||
          Array.isArray(t[e])
      )
        ? t
        : null;
    }
    _clearCache() {
      this._cached = {};
    }
    _getPropReport(e, t) {
      let n = {};
      if (Array.isArray(e))
        return (
          (n.OR = { config: [] }),
          e.forEach((e) => {
            let r = this._getPropReport(e, t);
            (n.OR.enabled = n.OR.enabled || !!r.enabled), n.OR.config.push(r);
          }),
          n.OR
        );
      if ("object" == typeof e) {
        let r = !0;
        return (
          Object.keys(e).forEach((s) => {
            if (this._isReserved(s)) return;
            if (!this._getControlType(s))
              return void (n[s] = this._getPropReport(e[s], t));
            let o = this._isEnabledProp(s, e[s], t);
            (r = r && o), (n[s] = { enabled: !!o, config: e[s] });
          }),
          (n.enabled = r),
          n
        );
      }
      return (n[e] = this._isEnabledProp(e, !0, t)), n;
    }
    _testModifyApp(e) {
      Object.assign(this.app, e), (this.config = e.config.featureflags || {});
    }
  }
  let ne = "undefined" != typeof fetch ? fetch : require("node-fetch");
  var re = Object.freeze({
    __proto__: null,
    configureFeatures: function (e, t, n) {
      let { url: r, config: s = { featureflags: {} } } = e;
      function o(e) {
        let r = new te(s, t);
        n({ featureflags: r, config: s, error: e });
      }
      if (r)
        try {
          ne(r)
            .then((e) => e.json())
            .then((e) => {
              let r = new te(e, t);
              n({ featureflags: r, config: e });
            })
            .catch((e) => {
              o(e);
            });
        } catch (e) {
          o(e);
        }
      else o();
    },
  });
  shz.common.setWithNamespace("npmBridge", shz, {
    Stats: r,
    Utils: g,
    UserAgent: u,
    Search: Y,
    FeatureFlags: re,
  });
})();
function _classCallCheck(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, n) {
  for (var t = 0; t < n.length; t++) {
    var i = n[t];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(e, i.key, i);
  }
}
function _createClass(e, n, t) {
  return (
    n && _defineProperties(e.prototype, n), t && _defineProperties(e, t), e
  );
}
var Cookies = (function () {
  function e() {
    _classCallCheck(this, e);
  }
  return (
    _createClass(e, [
      {
        key: "set",
        value: function (e, n, t) {
          var i;
          (i = [
            e + "=" + n,
            "expires=" +
              (
                (t = t || {}).expires ||
                new Date(Date.now() + (t.maxAge || 15552e6))
              ).toGMTString(),
            "path=/",
            "samesite=" + (t.samesite ? t.samesite : "Strict"),
          ]),
            t.domain && i.push("domain=" + t.domain),
            (document.cookie = i.join(";"));
        },
      },
      {
        key: "get",
        value: function (e) {
          var n, t;
          return (
            (n = e + "="),
            document.cookie.split(";").some(function (e) {
              if (-1 != (e = e.trim()).indexOf(n))
                return (t = e.substring(n.length, e.length)), !0;
            }),
            t || ""
          );
        },
      },
      {
        key: "remove",
        value: function (e) {
          document.cookie = e + '=;  expires=Thu, 01 Jan 1970 00:00:00 GMT";';
        },
      },
    ]),
    e
  );
})();
shz.Cookies = Cookies;
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
function _get(e, t, r) {
  return (_get =
    "undefined" != typeof Reflect && Reflect.get
      ? Reflect.get
      : function (e, t, r) {
          var o = _superPropBase(e, t);
          if (o) {
            var n = Object.getOwnPropertyDescriptor(o, t);
            return n.get ? n.get.call(r) : n.value;
          }
        })(e, t, r || e);
}
function _superPropBase(e, t) {
  for (
    ;
    !Object.prototype.hasOwnProperty.call(e, t) &&
    null !== (e = _getPrototypeOf(e));

  );
  return e;
}
function _inherits(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && _setPrototypeOf(e, t);
}
function _setPrototypeOf(e, t) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function _createSuper(e) {
  var t = _isNativeReflectConstruct();
  return function () {
    var r,
      o = _getPrototypeOf(e);
    if (t) {
      var n = _getPrototypeOf(this).constructor;
      r = Reflect.construct(o, arguments, n);
    } else r = o.apply(this, arguments);
    return _possibleConstructorReturn(this, r);
  };
}
function _possibleConstructorReturn(e, t) {
  return !t || ("object" !== _typeof(t) && "function" != typeof t)
    ? _assertThisInitialized(e)
    : t;
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function _isNativeReflectConstruct() {
  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ("function" == typeof Proxy) return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch (e) {
    return !1;
  }
}
function _getPrototypeOf(e) {
  return (_getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
  for (var r = 0; r < t.length; r++) {
    var o = t[r];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      "value" in o && (o.writable = !0),
      Object.defineProperty(e, o.key, o);
  }
}
function _createClass(e, t, r) {
  return (
    t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
  );
}
function _defineProperty(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var shzError = shz.common.Error,
  BaseStorage = (function () {
    function e(t) {
      _classCallCheck(this, e),
        _defineProperty(this, "version", 2),
        (this.storage = t);
    }
    return (
      _createClass(e, [
        {
          key: "parseKey",
          value: function (e) {
            if (!e)
              throw new shzError({
                type: Error.INVALID_PARAM,
                message: "Missing key",
              });
            var t = e.split(".");
            return { key: t.shift(), subkey: t.join(".") };
          },
        },
        {
          key: "get",
          value: function (e, t) {
            var r,
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = this.parseKey(e),
              i = n.key,
              s = n.subkey,
              a = this.storage.getItem(i);
            if (a) {
              try {
                a = JSON.parse(a);
              } catch (e) {}
              this.isExpired(a)
                ? this.remove(i)
                : ((r = s
                    ? shz.common.namespaceExists(s, a.data || a)
                    : void 0 !== a.data
                    ? a.data
                    : a),
                  o.includeExpiry && (r = { value: r, expiry: a.expiry }));
            }
            return r || t;
          },
        },
        {
          key: "set",
          value: function (e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null,
              o = this.parseKey(e),
              n = o.key,
              i = o.subkey;
            try {
              var s = JSON.parse(this.storage.getItem(n) || "{}");
              r && (s.expires = r),
                i
                  ? ((s.data = s.data || {}),
                    shz.common.setWithNamespace(i, s.data, t))
                  : (s.data = t),
                this.storage.setItem(n, JSON.stringify(s));
            } catch (e) {}
          },
        },
        {
          key: "remove",
          value: function (e) {
            var t = this.parseKey(e),
              r = t.key,
              o = t.subkey;
            if (o) {
              var n = this.get(r);
              if (n) {
                var i = o.split(".");
                if (1 == i.length) delete n[o];
                else {
                  var s = i.pop();
                  delete shz.common.namespaceExists(i.join("."), n)[s];
                }
              }
              this.set(r, n);
            } else this.storage.removeItem(r);
          },
        },
        {
          key: "clear",
          value: function () {
            this.storage.clear();
          },
        },
        {
          key: "isExpired",
          value: function (e) {
            return !1;
          },
        },
        {
          key: "_forEach",
          value: function (e) {
            for (var t = 0; t < this.storage.length; t++)
              e(this.storage.key(t));
          },
        },
      ]),
      e
    );
  })(),
  LocalStorage = (function (e) {
    _inherits(r, BaseStorage);
    var t = _createSuper(r);
    function r() {
      var e;
      return (
        _classCallCheck(this, r),
        (e = t.call(this, window.localStorage)).checkState(),
        e
      );
    }
    return (
      _createClass(r, [
        {
          key: "checkState",
          value: function () {
            var e = this;
            if (this.get("_checkstate"))
              this._forEach(function (t) {
                e.get(t);
              });
            else {
              var t = ["amconnect"],
                r = {};
              ["am-cxn", "inid", "webId", "inapp"].forEach(function (o, n) {
                var i = e.get(o, null, { version: 1 });
                null !== i && (r[t[n] || o] = i);
              }),
                this.clear(),
                Object.keys(r).forEach(function (t) {
                  e.set(t, r[t]);
                });
            }
            this.set("_checkstate", 1);
          },
        },
        {
          key: "isExpired",
          value: function (e) {
            return e.expires && e.expires < Date.now();
          },
        },
        {
          key: "set",
          value: function (e, t) {
            var o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 15552e6;
            _get(_getPrototypeOf(r.prototype), "set", this).call(
              this,
              e,
              t,
              Date.now() + o
            );
          },
        },
      ]),
      r
    );
  })(),
  SessionStorage = (function (e) {
    _inherits(r, BaseStorage);
    var t = _createSuper(r);
    function r() {
      return _classCallCheck(this, r), t.call(this, window.sessionStorage);
    }
    return (
      _createClass(r, [
        {
          key: "set",
          value: function (e, t) {
            _get(_getPrototypeOf(r.prototype), "set", this).call(this, e, t);
          },
        },
      ]),
      r
    );
  })(),
  ServerStorage = (function (e) {
    _inherits(r, BaseStorage);
    var t = _createSuper(r);
    function r() {
      var e;
      return (
        _classCallCheck(this, r),
        _defineProperty(
          _assertThisInitialized((e = t.call(this))),
          "_cache",
          {}
        ),
        (e.storage = _assertThisInitialized(e)),
        e
      );
    }
    return (
      _createClass(r, [
        {
          key: "getItem",
          value: function (e) {
            return this._cache[e];
          },
        },
        {
          key: "setItem",
          value: function (e, t) {
            this._cache[e] = t;
          },
        },
        {
          key: "clear",
          value: function () {
            this._cache = {};
          },
        },
        {
          key: "removeItem",
          value: function (e) {
            delete _cache[e];
          },
        },
      ]),
      r
    );
  })(),
  Storage = function e() {
    _classCallCheck(this, e),
      "undefined" == typeof window
        ? (this.local = this.session = new ServerStorage())
        : ((this.local = new LocalStorage()),
          (this.session = new SessionStorage()));
  };
(shz.Storage = Storage), (shz.storage = new Storage());
function _extends() {
  return (_extends =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var o in n)
          Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      }
      return e;
    }).apply(this, arguments);
}
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      "value" in o && (o.writable = !0),
      Object.defineProperty(e, o.key, o);
  }
}
function _createClass(e, t, n) {
  return (
    t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
  );
}
function _defineProperty(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
!(function () {
  var e = shz.npmBridge.UserAgent,
    t = (function () {
      function t(e) {
        _classCallCheck(this, t),
          _defineProperty(this, "osNative", {}),
          (e = e || ""),
          (this.platformProps = this._evaluatePlatform(e)),
          this._evaluateEvents(this.platformProps),
          shz.bridge.on("aboutBridge", {
            cb: this._setVersion,
            scope: this,
            listenOnce: !0,
          }),
          _extends(this, this.platformProps);
      }
      return (
        _createClass(t, [
          {
            key: "_evaluatePlatform",
            value: function (n) {
              var o,
                r,
                i = !1,
                s = !1,
                a = "server",
                p = "development";
              if ("undefined" != typeof window && void 0 !== window.document) {
                var u = shz.common.urlParams(document.location.href, !0),
                  d = u.device,
                  c = u.preview;
                (i = !!(i = t.isInApp())),
                  d && (n = e.getEmulationUserAgent(d) || n),
                  (o =
                    !c &&
                    shz.common.isDevServer() &&
                    "undefined" != typeof navigator &&
                    "MacIntel" == navigator.platform &&
                    this._getClientWidth() < 600);
                var v = document.location.hostname.match(
                  /^((cisd|betasd|dev|www).shazam.(apple.)?com|localhost)/
                );
                (p =
                  "cisd" == (a = (v && v[2]) || "dev") || "betasd" == a
                    ? "ci"
                    : "www" == a
                    ? "prod"
                    : p),
                  (r = this._supportsPassive()),
                  (s = !!window.PublicKeyCredential);
              }
              return (
                (this.useragent = n),
                _extends(
                  {
                    inApp: i,
                    desktopEmulator: o,
                    supportsPassiveListening: r,
                    webauthn: s,
                    hostEnv: a,
                    storageEnv: p,
                  },
                  e.getPlatformInfo(n)
                )
              );
            },
          },
          {
            key: "_evaluateEvents",
            value: function (e) {
              var t = e.ios,
                n = e.ios_ver,
                o = void 0 === n ? 0 : n,
                r = e.android,
                i = e.android_ver,
                s = void 0 === i ? 0 : i,
                a = e.isMobile,
                p = e.desktopEmulator;
              (this.overflowScroll = o >= 6 || s >= 4.3 || !a || 0),
                "undefined" == typeof window ||
                  r ||
                  p ||
                  (t && !(o < 13)) ||
                  (this.pointerEvents = "onpointerdown" in window);
            },
          },
          {
            key: "_getClientWidth",
            value: function () {
              var e = window,
                t = "inner";
              return (
                "innerWidth" in window ||
                  ((t = "client"),
                  (e = document.documentElement || document.body)),
                e[t + "Width"]
              );
            },
          },
          {
            key: "_setVersion",
            value: function (e) {
              var t,
                n = e.data || {};
              (this.osNative = this.platformProps.osNative = n.os || {}),
                (this.appVer = this.platformProps.appVer =
                  n.client &&
                  ((t = n.client.version || "")
                    ? (t = (t = (t = t.replace(/[;_]/g, ".")).replace(
                        /[a-zA-Z]/g,
                        ""
                      )).replace(/\.$/, ""))
                    : t));
            },
          },
          {
            key: "_supportsPassive",
            value: function () {
              var e = !1;
              if ("undefined" != typeof window)
                try {
                  var t = Object.defineProperty({}, "passive", {
                    get: function () {
                      e = !0;
                    },
                  });
                  window.addEventListener("testPassive", null, t),
                    window.removeEventListener("testPassive", null, t);
                } catch (e) {}
              return e;
            },
          },
          {
            key: "getEventsOfType",
            value: function (e, t) {
              var n,
                o = this.ios,
                r = this.android,
                i = this.pointerEvents;
              switch (e) {
                case "pointerdown":
                  n = i
                    ? { events: ["pointerdown"] }
                    : {
                        events:
                          o || r
                            ? ["touchstart"]
                            : ["touchstart", "pointerdown", "mousedown"],
                      };
                  break;
                case "pointermove":
                  n = i
                    ? { events: ["pointermove"] }
                    : {
                        events:
                          o || r
                            ? ["touchmove"]
                            : ["touchmove", "pointermove", "mousemove"],
                      };
                  break;
                case "pointerup":
                  n = i
                    ? { events: ["pointerup"] }
                    : {
                        events:
                          o || r
                            ? ["touchend"]
                            : ["touchend", "pointerup", "mouseup"],
                      };
                  break;
                case "pointercancel":
                  n = i ? { events: ["pointercancel"] } : { events: [] };
              }
              return (
                t &&
                  t.forEach(function (e) {
                    n.events.push(e);
                  }),
                n
              );
            },
          },
          {
            key: "isWebPSupported",
            value: function () {
              if (void 0 === this.canUseWebP) {
                var e = this.browserName,
                  t = this.browserVerNum,
                  n = this.osName,
                  o = this.osVerNum;
                this.canUseWebP =
                  ("chrome" === e && t > 32) ||
                  ("safari" === e && t >= 14 && o >= 14 && "ios" === n) ||
                  ("safari" === e && t >= 14 && o >= 11 && "mac" === n) ||
                  ("edge" === e && t > 18) ||
                  ("opera" === e && t > 19);
              }
              return this.canUseWebP;
            },
          },
          {
            key: "appverCompare",
            value: function (e, t) {
              var n = this.appVer;
              return n && t && this.platformProps[e]
                ? shz.common.versionCompare(t, n)
                : 1;
            },
          },
          {
            key: "isInvalidEnv",
            value: function (e) {
              e = e || {};
              var t = this.platformProps,
                n = e.device || {},
                o = n.allowIPad,
                r = n.androidMinApiLevel || 21,
                i = n.iosMinVer || 10,
                s = n.appMinVer || { android: "7.3.0" },
                a = t.ipad && !o,
                p =
                  !a &&
                  ((t.android &&
                    -1 == this.appverCompare("android", s.android)) ||
                    (t.ios && -1 == this.appverCompare("ios", s.ios))),
                u =
                  !a &&
                  ((t.android && t.osNative.APILevel < r) ||
                    (t.ios && i && t.osVerNum < i));
              return (
                (a || p || u) && {
                  type: a ? "unsupported" : u ? "osupgrade" : "appupgrade",
                }
              );
            },
          },
        ]),
        t
      );
    })();
  (t.isInApp = function () {
    return (
      window.localStorage.getItem("inapp") ||
      -1 !== document.referrer.search(/app.shazam.com/)
    );
  }),
    (shz.Supports = t);
})();
!(function () {
  var e,
    t = new shz.common.Datasync(),
    a = new (function () {
      var a = this,
        n = {
          aboutBridge: function (e) {
            var t,
              s = [];
            for (t in n) s.push(t);
            a.message({ type: e.type, data: { supportedCommands: s } }),
              a.command({ cmd: { type: "context", data: {} } });
          },
          sharesheet: function (e, t) {
            if ((t = t || {}).punt) t.punt(e.data, t);
            else {
              var a = "/share";
              t && t.screenname && (a += "/" + t.screenname),
                shz.ux.popup({
                  href: a,
                  takeover: !0,
                  mvargs: { share: e.data, viber: t.viber },
                });
            }
          },
          newWebView: function (e) {
            try {
              var t = e.data.url;
              window.open(e.data.url, "_blank").focus();
            } catch (e) {
              window.parent.location.href = t;
            }
          },
          trackResult: function (e, t) {
            var a = (t && t.path) || "/track/" + e.data.id,
              n = shz.app.langpath + a;
            shz.frames && shz.frames.track
              ? shz.app.navigate({ href: n, pushHistory: !0 })
              : (window.parent.location.href = n);
          },
          context: function (e) {
            a.message({ type: e.type, data: {} });
          },
          isSchemeSupported: function (e) {
            var t = e.data.scheme,
              n = 0 == t.indexOf("http") ? "supported" : "unsupported";
            a.message({ type: e.type, data: { supported: n, scheme: t } });
          },
          startIntents: function (e) {
            (e.data.intents || []).some(function (e) {
              if (0 == e.indexOf("http")) return window.open(e), !0;
            });
          },
        };
      (a.command = function (t) {
        !e && n[t.cmd.type] && n[t.cmd.type](t.cmd, t.extraparams);
      }),
        (a.message = function (a) {
          e || t.set("NativeBridge:message", a);
        }),
        t.get("NativeBridge:command", { cb: a.command, scope: a }),
        shz.Supports.isInApp() ||
          setTimeout(function () {
            !e && a.command({ cmd: { type: "aboutBridge", data: {} } });
          }, 0);
    })();
  (shz.stubBridge = a),
    (shz.NativeBridge = function () {
      var n,
        s = this;
      shz.common.merge(s, t),
        t.get("NativeBridge:command", function (t) {
          if (e)
            if (
              shz.app.location.pathname.indexOf("/abtest/") >= 0 ||
              "sendBeacon" != t.cmd.type ||
              !shz.app.supports.android ||
              n
            )
              try {
                WebViewJavascriptBridge.sendMessage(JSON.stringify(t.cmd));
              } catch (e) {
                console.log(e);
              }
            else
              s.onMessage({
                type: t.cmd.type,
                error: shz.common.Error.UNSUPPORTED,
                data: t,
              });
        }),
        (s.onMessage = function (s) {
          var r = s;
          try {
            "string" == typeof s && (r = JSON.parse(s)),
              "aboutBridge" == r.type
                ? ((e = shz.bridge.isNative = !0),
                  t.remove("NativeBridge:command", a.command, a),
                  WebViewJavascriptBridge.sendMessage(
                    JSON.stringify({ type: "context", data: {} })
                  ))
                : "context" == r.type && (n = r);
          } catch (e) {
            console.log("NB parse exception:", s, e),
              (r = { error: shz.common.Error.SERVICE, data: s, type: "" });
          }
          t && t.set("NativeBridge:message", r);
        }),
        (s.onBridgeReady = function () {
          if (!s.ready) {
            s.ready = !0;
            try {
              WebViewJavascriptBridge.setMessageHandler(s.onMessage);
            } catch (e) {}
            WebViewJavascriptBridge &&
              WebViewJavascriptBridge.sendMessage(
                JSON.stringify({ type: "aboutBridge", data: {} })
              );
          }
        }),
        document.addEventListener(
          "WebViewJavascriptBridgeReady",
          s.onBridgeReady
        );
    });
})();
!(function () {
  var e,
    o,
    r = shz.common.namespace("bridge"),
    t = {},
    n = [],
    c = new shz.common.Datasync();
  function s(r, t) {
    o && -1 !== o.supportedCommands.indexOf(r.type)
      ? e.set("NativeBridge:command", { cmd: r, extraparams: t })
      : o
      ? setTimeout(function () {
          a(
            shz.common.merge(
              { data: null, error: shz.common.Error.UNSUPPORTED },
              r
            )
          );
        }, 0)
      : n.push(r);
  }
  function a(e) {
    e.error || c.set(e.type, e);
    var r = e.responseType || e.type,
      a = t[r] || [],
      m = a.length;
    if ("aboutBridge" == e.type) for (o = e.data; n.length; ) s(n.shift());
    (t[r] || []).forEach(function (o) {
      for (; m; ) {
        (o = a[m - 1]), a.keepAlive || a.splice(m - 1, 1);
        try {
          o.cb.call(o.scope, e, e.error);
        } catch (e) {}
        m--;
      }
    });
  }
  (e = new shz.NativeBridge()).get("NativeBridge:message", a),
    shz.common.merge(r, {
      request: function (e, o, r) {
        var n = e.responseType || e.type,
          c = (t[n] = t[n] || []);
        "function" == typeof o && (o = { cb: o }),
          !o ||
            c.some(function (e) {
              return e.cb == o.cb && e.scope == o.scope;
            }) ||
            c.push(o),
          s(e, r);
      },
      on: c.get,
      remove: c.remove,
    });
})();
!(function (e) {
  var n = "undefined" == typeof window ? global : window,
    t = ((n.shz = n.shz || {}), n.document),
    s = {},
    c = {},
    o = {};
  function i(e, n, s) {
    var o = this,
      i = t.head || t.getElementsByTagName("head")[0] || t.documentElement,
      l = shz.app.supports.ie ? /complete/ : /loaded|complete/;
    (o.readyState && !l.test(o.readyState)) ||
      ((o.onload = o.onreadystatechange = null),
      i && o.parentNode && i.removeChild(o),
      (o = void 0),
      (function (e, n) {
        var t,
          s,
          o,
          i = window[e.replace(/[^a-z,A-Z,0-9]/g, "")],
          a = i && i.depends,
          l = [];
        if (a) {
          for (o = (t = a.files || []).length; o--; )
            0 == (s = t[o]).indexOf("/") && (t[o] = r(s)),
              c[t[o]] && t.splice(o, 1);
          t.length
            ? (t.forEach(function (e) {
                e.match(/\.css$/)
                  ? (function (e) {
                      var n = document.createElement("link");
                      n.setAttribute("rel", "stylesheet"),
                        n.setAttribute("type", "text/css"),
                        n.setAttribute("href", e),
                        n.addEventListener("load", function t() {
                          (c[e] = 1), n.removeEventListener("load", t);
                        }),
                        document.getElementsByTagName("head")[0].appendChild(n);
                    })(e)
                  : l.push(e);
              }),
              f(l, {
                success: function (e) {
                  e.forEach(function (e) {
                    c[e] = 1;
                  }),
                    a.cb && a.cb(),
                    n();
                }.bind(null, l),
                failure: function () {
                  n();
                },
              }))
            : (a.cb && a.cb(), n());
        } else n();
      })(n, a.bind(o, s, e)));
  }
  function r(e) {
    var n = "src" == shz.version;
    return (
      -1 == e.indexOf(".") &&
        (e = (e = n ? e : e + "/bundle.js").replace(/\/\//g, "/")),
      n ? "/combo/" + shz.version + "?" + e : "/builds/" + shz.version + e
    );
  }
  function a(e, n) {
    o[e] &&
      o[e].forEach(function (t) {
        try {
          t && t.success(),
            n.forEach(function (e) {
              s[e] = 1;
            });
        } catch (n) {
          try {
            t && t.failure();
          } catch (e) {}
          console.log("service call exception " + e), console.log(n);
        }
      }),
      delete o[e];
  }
  function l(e) {
    o[e] &&
      o[e].forEach(function (e) {
        try {
          e && e.failure();
        } catch (e) {}
      }),
      delete o[e];
  }
  function u(e, n) {
    var c,
      r,
      a = (function (e) {
        var n,
          t = [];
        if (0 == e.indexOf("combo/")) {
          for (n = (t = e.split("?").pop().split("&")).length; n--; )
            s[t[n]] && t.splice(n, 1);
          e = "/combo/" + shz.version + "/?" + t.join("&");
        } else e && t.push(e);
        return { files: t, url: e };
      })(e),
      u = a.files,
      f = t.head || t.getElementsByTagName("head")[0] || t.documentElement;
    if (u.length)
      (c = e.replace(/^\/secure/, "")),
        (e = a.url),
        o[e]
          ? n && -1 == o[e].indexOf(n) && o[e].push(n)
          : ((o[e] = []),
            n && o[e].push(n),
            ((r = (function () {
              var e = t.createElement("script");
              return (e.async = "async"), (e.type = "text/javascript"), e;
            })()).onload = r.onreadystatechange =
              i.bind(r, u, c, e)),
            (r.onerror = l.bind(r, e)),
            (r.src = e),
            f.insertBefore(r, f.firstChild));
    else
      try {
        n && n.success && n.success();
      } catch (n) {
        console.log("service call exception " + e), console.log(n);
      }
  }
  function f(e, n) {
    if ("string" == typeof e) u(e, n);
    else {
      var t = 0,
        s = e.length;
      !(function c() {
        t < s
          ? f(e[t++], {
              success: c,
              failure: function () {
                n && n.failure && n.failure();
              },
            })
          : n && n.success && n.success();
      })();
    }
  }
  var d = shz.common.namespace("script");
  shz.common.merge(d, {
    load: f,
    loadjs: function (e, n) {
      f(
        [
          "src" == shz.version
            ? "/combo/" + shz.version + "?" + e
            : "/builds/" + shz.version + "/" + e,
        ],
        n
      );
    },
    getDepUrl: r,
  });
})();
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
Handlebars.registerHelper("ifequal", function () {
  var e, r, n, t, a;
  if (arguments.length < 3)
    throw new Error("Handlebars Helper equal needs 2 parameters");
  for (
    r = arguments[0],
      t = (n = arguments[arguments.length - 1]).hash && "not" == n.hash.op,
      e = 1;
    e < arguments.length - 1 && !(a = r == arguments[e]);
    e++
  );
  return (a && !t) || (!a && t)
    ? !n.fn || n.fn(this)
    : !!n.inverse && n.inverse(this);
}),
  Handlebars.registerHelper({
    eq: function (e, r) {
      return e === r;
    },
    ne: function (e, r) {
      return e !== r;
    },
    lt: function (e, r) {
      return e < r;
    },
    gt: function (e, r) {
      return e > r;
    },
    lte: function (e, r) {
      return e <= r;
    },
    gte: function (e, r) {
      return e >= r;
    },
    and: function () {
      var e,
        r = arguments[arguments.length - 1];
      for (e = 0; e < arguments.length - 1; e++)
        if (!arguments[e]) return !!r.inverse && r.inverse(this);
      return !r.fn || r.fn(this);
    },
    not: function (e) {
      var r = arguments[arguments.length - 1];
      return e ? !!r.inverse && r.inverse(this) : !r.fn || r.fn(this);
    },
    or: function () {
      var e,
        r = arguments[arguments.length - 1];
      for (e = 0; e < arguments.length - 1; e++)
        if (arguments[e]) return !r.fn || r.fn(this);
      return !!r.inverse && r.inverse(this);
    },
    exists: function (e) {
      return !!e;
    },
    concat: function () {
      var e = Array.prototype.slice.call(arguments, 0);
      return e.pop(), e.join("");
    },
  }),
  Handlebars.registerHelper("firstValue", function () {
    var e,
      r = arguments[arguments.length - 1];
    for (e = 0; e < arguments.length - 1; e++)
      if (arguments[e]) return arguments[e];
    return !!r.inverse && r.inverse(this);
  }),
  Handlebars.registerHelper("atindex", function (e) {
    if (arguments.length < 3)
      throw new Error("Handlebars Helper eachindex needs 2 parameters");
    var r = arguments[0],
      n = arguments[arguments.length - 1],
      t = arguments[1],
      a = arguments[2],
      s = r && r[t] ? r[t] : void 0 === a ? {} : a;
    return "object" == _typeof(s) && n.fn ? n.fn(s) : s;
  }),
  Handlebars.registerHelper("tostring", function () {
    if (arguments.length < 1)
      throw new Error("Handlebars Helper eachindex needs 2 parameters");
    var e = arguments[0];
    return JSON.stringify(e);
  }),
  Handlebars.registerHelper("encodeURIComponent", function () {
    return encodeURIComponent(arguments[0]);
  }),
  Handlebars.registerHelper("lowercase", function () {
    return arguments[0] ? arguments[0].toLowerCase() : arguments[0];
  }),
  Handlebars.registerHelper("uppercase", function () {
    return arguments[0] ? arguments[0].toUpperCase() : arguments[0];
  }),
  Handlebars.registerHelper("csskey", function () {
    return arguments[0].replace(/\./g, "_");
  }),
  Handlebars.registerHelper("formatdate", function () {
    if (arguments.length < 2)
      throw new Error("Handlebars Helper dateformat needs 2 parameters");
    var e = arguments[0],
      r = new Date(e);
    return e ? r.toLocaleString() : "";
  }),
  Handlebars.registerHelper("replace", function () {
    var e = Array.prototype.slice.call(arguments),
      r = e.splice(0, 1)[0],
      n = e.splice(0, 1)[0],
      t = (e.splice(e.length - 1, 1)[0], e.join("")),
      a = new RegExp(n, "g");
    return (r || "").replace(a, t);
  }),
  Handlebars.registerHelper("supplant", function () {
    var e = Array.prototype.slice.call(arguments),
      r = e.splice(0, 1)[0] || "",
      n = e.splice(0, 1)[0] || {};
    return shz.common.supplant(r, n);
  }),
  Handlebars.registerHelper("replaceInt", function () {
    if (arguments.length < 2)
      throw new Error("Handlebars Helper replaceInt needs 3 parameters");
    var e = arguments[0] || "",
      r = parseInt(arguments[1]) || 0,
      n = arguments[arguments.length - 1],
      t = n.hash && n.hash.format;
    return (
      "short" == t
        ? r > 1e3 &&
          (r / 1e6 > 1
            ? (r =
                '<span><em class="num">' +
                Math.round(r / 1e5) / 10 +
                "</em>M</span>")
            : r / 1e3 > 1 &&
              (r =
                '<span><em class="num">' +
                Math.round(r / 100) / 10 +
                "</em>K</span>"))
        : (r = '<span><em class="num">' + r.toLocaleString() + "</em></span>"),
      e.replace("{count}", r)
    );
  }),
  Handlebars.registerHelper("getValue", function (e, r, n) {
    try {
      return "object" != _typeof(n) ? e[r][n] : e[r];
    } catch (e) {
      return "";
    }
  }),
  Handlebars.registerHelper("compare", function () {
    var e, r, n, t, a;
    if (arguments.length < 3)
      throw new Error("Handlebars Helper compare needs 2 parameters");
    return (
      (r = arguments[0]),
      (n = arguments[1]),
      "eq" == (e = (t = arguments[arguments.length - 1]).hash && t.hash.op)
        ? (a = r == n)
        : "gt" == e
        ? (a = r > n)
        : "ge" == e
        ? (a = r >= n)
        : "lt" == e
        ? (a = r < n)
        : "le" == e
        ? (a = r <= n)
        : "neq" == e && (a = r != n),
      a ? t.fn(this) : t.inverse(this)
    );
  }),
  Handlebars.registerHelper("indexplusone", function (e) {
    return (e += 1) > 9 || "noleadingdigits" == arguments[1] ? e : "0" + e;
  }),
  Handlebars.registerHelper("increment", function (e) {
    return 1 * e + 1;
  }),
  Handlebars.registerHelper("contains", function () {
    var e, r, n, t, a, s, i;
    if (arguments.length < 2)
      throw new Error(
        "Handlebars Helper contains needs 2 parameters - array and key to find"
      );
    return (
      (e = arguments[0] || []),
      Array.isArray(e) || (e = [e]),
      (r = arguments[1]),
      (a = (s = arguments.length > 2) && arguments[2]),
      (t = (n = arguments[arguments.length - 1]).hash && n.hash.op),
      e.some(function (e) {
        return (i =
          "object" === _typeof(e)
            ? s
              ? "substr" == t
                ? -1 !== e[r].search(a)
                : e[r] == a
              : e[r]
            : "substr" == t
            ? -1 !== e.search(r)
            : e == r);
      }),
      "not" == t && (i = !i),
      i ? n.fn(this) : n.inverse(this)
    );
  }),
  Handlebars.registerHelper("math", function (e, r, n, t) {
    return {
      "+": (e = parseFloat(e)) + (n = parseFloat(n)),
      "-": e - n,
      "*": e * n,
      "/": e / n,
      "%": e % n,
    }[r];
  }),
  Handlebars.registerHelper("isPath", function (e) {
    var r = arguments[arguments.length - 1],
      n = r.data.root || {},
      t = n.location || {};
    return e && t.origPath.includes(e)
      ? !r.fn || r.fn(this)
      : !!r.inverse && r.inverse(this);
  }),
  Handlebars.registerHelper("islocationurl", function (e, r) {
    var n = arguments[arguments.length - 1],
      t = n.data.root || {},
      a = t.location || {};
    return a.type == e && -1 !== a.params.indexOf(r)
      ? !n.fn || n.fn(this)
      : !!n.inverse && n.inverse(this);
  }),
  Handlebars.registerHelper("pad", function (e, r) {
    return (r = 3 == arguments.length ? r : 2), shz.common.numPad(e, r);
  }),
  Handlebars.registerHelper("formattime", function (e) {
    if (e >= 0) {
      var r = Math.round(e / 1e3),
        n = Math.floor((r % 86400) / 3600),
        t = Math.floor(((r % 86400) % 3600) / 60),
        a = timePad(((r % 86400) % 3600) % 60, 2);
      return (n ? [n, timePad(t, 2), a] : [t, a]).join(":");
    }
    return "";
  }),
  Handlebars.registerHelper("widow", function (e) {
    return e.replace(/ ([^ ]*)$/, "&nbsp;$1");
  }),
  Handlebars.registerHelper("length", function (e) {
    return e.length;
  }),
  Handlebars.registerHelper("eachProperty", function (e, r) {
    var n,
      t = "";
    for (n in e) t += r.fn({ property: n, value: e[n] });
    return t;
  }),
  Handlebars.registerHelper("isempty", function (e, r) {
    var n = !0;
    for (var t in e) e.hasOwnProperty(t) && (n = !1);
    return n ? r.fn(this) : r.inverse(this);
  }),
  Handlebars.registerHelper("test", function (e, r) {});
function _extends() {
  return (_extends =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var n in a)
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
      }
      return e;
    }).apply(this, arguments);
}
function ownKeys(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      a.push.apply(a, n);
  }
  return a;
}
function _objectSpread(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? ownKeys(Object(a), !0).forEach(function (t) {
          _defineProperty(e, t, a[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
      : ownKeys(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
  }
  return e;
}
function _defineProperty(e, t, a) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = a),
    e
  );
}
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass(e, t, a) {
  return (
    t && _defineProperties(e.prototype, t), a && _defineProperties(e, a), e
  );
}
!(function () {
  var e = "undefined" != typeof window ? window : global,
    t =
      "https://beacon.shazam.com/beacons/api/v1/beacon/{appname}/{appver}/{lang}/{country}/{platform}/{devicemodel}/beacon/{inid}/{beaconType}?",
    a = shz.npmBridge.Stats.BeaconsUrl,
    n = shz.npmBridge.Stats.Manifest,
    r = shz.npmBridge.Stats.Dom,
    o = shz.npmBridge.Stats.PathConfigs,
    s = shz.npmBridge.Utils,
    i = (function () {
      function i(e) {
        if ((_classCallCheck(this, i), !e)) throw "please pass in app";
        (this.app = e),
          (this.mode = e.supports.inApp ? "bridge" : "image"),
          this._broadcast("stats:ready", { app: e });
      }
      return (
        _createClass(i, [
          {
            key: "stat",
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if (!this._suppress(t))
                try {
                  e.beaconData ||
                    ((e = { beaconData: e }),
                    (t = { cb: arguments[2], force: arguments[4] }));
                  var a = this._collect(e),
                    n = this._getTargetUrl().send(
                      a,
                      t.cb || t.mode || this.mode
                    );
                  this._broadcast("stats:beacon", {
                    url: n,
                    urlparams: a,
                    params: e,
                  });
                } catch (a) {
                  console.log("stat FAILED", a),
                    this.stat(
                      {
                        beaconData: _objectSpread(
                          _objectSpread({}, e.beaconData),
                          {
                            beaconId: "global.ue-exception",
                            errorcode: a.code || a.type,
                            errordesc: a.message,
                          }
                        ),
                      },
                      t
                    );
                }
            },
          },
          {
            key: "nodeStat",
            value: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                a = e.beaconId || r.getValue(e.node, "beaconId");
              (e.beaconData = e.beaconData || {}),
                a && (e.beaconData.beaconId = a),
                this.stat(e, t);
            },
          },
          {
            key: "getScreenName",
            value: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                a = e && e.dataset.shzScreenname;
              if (!a) {
                var n = this.app.resolvePath(this.app.location.pathname),
                  r = n.path,
                  o = 0 == r.indexOf("/") ? r : "/" + r;
                a = o.match(/\/([^\/$]*)/)[1] || "home";
              }
              return a || t;
            },
          },
          {
            key: "sanitize",
            value: function (e, t, a) {
              s.sanitize(e, { preserveCase: t, ignoreLength: a });
            },
          },
          {
            key: "getDynamicValue",
            value: function (e, t) {
              var a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : { ignoreLength: !0 };
              return r.getValue(e, t, "dynamicBeacon", a);
            },
          },
          {
            key: "getDeeplinkParams",
            value: function (e, t) {
              var a = this._getPathConfig(e);
              return o.getDeeplinkParams(a, t);
            },
          },
          {
            key: "_collect",
            value: function (e) {
              var t = e.beaconData,
                a = e.node,
                o = e.parentFrame,
                i = t.beaconId || (a && a.dataset.shzBeaconId);
              if (!t.beaconType && !i) throw "missing beaconType or beaconId";
              var c = s.filterProps(t, this.isReserved);
              if (i) {
                var p = n.getBeaconConfig(i, shz.beacons),
                  u = p.dynamic,
                  l = p.params;
                if (((c = shz.common.merge(l, c, !0)), a)) {
                  var h = { ignoreLength: !0 };
                  u.forEach(function (e) {
                    var t =
                      r.getValue(a, e, "", h) ||
                      c[e] ||
                      r.getValue(a, e, "beacon", h) ||
                      r.getValue(a, e, "dynamicBeacon", {
                        inherit: { stop: document.body },
                        parentFrame: o,
                        ignoreLength: !0,
                      });
                    t
                      ? (c[e] = t)
                      : console.log(
                          ""
                            .concat(i, ":")
                            .concat(
                              e,
                              " dynamic value not resolved in dom walk."
                            )
                        );
                  });
                }
              } else if (a) {
                var g = r.getParams(a, "beacon", {
                    inherit: !0,
                    ignoreLength: !0,
                  }),
                  d = r.getParams(a, "targetBeacon", { ignoreLength: !0 });
                c = _extends({}, g, d, c);
              }
              return (
                this.addDefaultParams(c, e), this._applyPathConfigParams(c), c
              );
            },
          },
          {
            key: "_getTargetUrl",
            value: function () {
              if (!this.target) {
                var e = this._getPathConfig(),
                  n =
                    o.getBeaconUrl(e) ||
                    (this.app.supports.testdomain
                      ? t.replace(
                          "https://beacon.shazam.com",
                          this.app.supports.testdomain
                        )
                      : t),
                  r = this.app.supports.inApp,
                  s = _extends(
                    {
                      appname: r ? "shazam" : "website",
                      appver: this.app.supports.appVer || "1.0",
                      lang: this.app.localeLanguage,
                      country: this.app.country,
                      platform: r
                        ? this.app.supports.ios
                          ? "ios"
                          : "android"
                        : "web",
                      inid: this.app.inid,
                    },
                    o.getPathParams(e)
                  );
                this.target = new a(n, s, { defaultValue: "-" });
              }
              return this.target;
            },
          },
          {
            key: "_broadcast",
            value: function (e, t) {
              i.events.fire(e, t, null, !0);
            },
          },
          {
            key: "_suppress",
            value: function (e) {
              var t = this.app.bot || this.app.ampproject ? 1 : 0;
              return (
                e &&
                !e.force &&
                ((t && !e.cb) || "unknown" == this.app.supports.deviceplatform)
              );
            },
          },
          {
            key: "isReserved",
            value: function (e) {
              return e.match(/(^beaconId$)|(^_.)/);
            },
          },
          {
            key: "addDefaultParams",
            value: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                a = "__purge__",
                n = this.app.supports || {},
                r = {
                  amc: this.app.config.applemusic.isConnected ? 1 : 0,
                  bot: this.app.bot ? 1 : 0,
                  buildnum: e.buildnum || shz.version || a,
                  browsername: n.browserName || "-",
                  browserver: n.browserVer || "-",
                  deviceplatform: n.deviceplatform,
                  inapp: n.inApp ? 1 : 0,
                  inid: this.app.inid || "-",
                  lang: this.app.localeLanguage,
                  newuser: this.app.newuser ? 1 : 0,
                  osver: n.osVer || "-",
                  path:
                    e.path ||
                    (this.app.location && this.app.location.pathname) ||
                    a,
                  refid: this.app.config.urlparams.refid || a,
                  screenname: e.screenname || this.getScreenName(t.node),
                  ua: n.useragent && n.useragent.replace(/(%20|%3A|\s)/g, "_"),
                  webId: shz.storage.local.get("webId"),
                };
              r.path &&
                0 == r.path.indexOf("/campaign/") &&
                (r.exp_name = r.path.replace("/campaign/", ""));
              var o = shz.ux.auth || {};
              _extends(r, {
                aa: "icloud" == o.method ? 1 : 0,
                ea: "email" == o.method ? 1 : 0,
                ga: "google" == o.method ? 1 : 0,
              }),
                Object.keys(r).forEach(function (e) {
                  r[e] == a && delete r[e];
                }),
                _extends(e, r, e);
            },
          },
          {
            key: "_getPathConfig",
            value: function (t) {
              return o.getConfig(
                this.app.config.stats,
                t || (e.document && document.location.href) || ""
              );
            },
          },
          {
            key: "_applyPathConfigParams",
            value: function (e) {
              var t = this._getPathConfig();
              _extends(
                e,
                o.getStaticParams(t),
                o.getHashParams(t),
                o.getStaticParams(t, e.path)
              ),
                o.getRestrictedProps(t).forEach(function (t) {
                  delete e[t];
                });
            },
          },
        ]),
        i
      );
    })();
  (i.events = new shz.common.Datasync()), (shz.Stats = i);
  var c = {},
    p = [];
  i.events.get("stats:beacon", function (e) {
    var t,
      r = e.url,
      o = e.urlparams,
      s = e.params.beaconData.beaconId,
      i = o.beaconType;
    if ("error" == i) {
      if (c[r]) return;
      var p = o.bot ? ".bot" : "";
      t = { route: "web.error".concat(p), time: 0 };
    } else if (shz.metrics && "pageview" == i && s)
      try {
        (t = n.getBeaconConfig(s, shz.metrics).params).time = o.time;
      } catch (e) {
        t = null;
      }
    t && new a("/services/metrics/{route}/{time}", t).send({}, "image");
  }),
    i.events.get("stats:ready", {
      cb: function (t) {
        var a = t.app.config.urlparams["stats-window-listener"];
        a &&
          e &&
          e.parent &&
          e.parent[a] &&
          i.events.get("stats:beacon", function (t) {
            try {
              e.parent[a](t);
            } catch (e) {}
          });
      },
      listenOnce: !0,
    }),
    i.events.get("stats:beacondebug", function (e) {
      var t = e.diff,
        a = e.params;
      p.push(
        "missing : "
          .concat(JSON.stringify(t), ", beacon : ")
          .concat(JSON.stringify(a))
      ),
        shz.ux.set("ux:infobar:show", {
          msg: "".concat(p.join("<p/><p/>")),
          keepOpen: !0,
          classList: { infobar: "debug" },
        }),
        console.log(t, a);
    });
})();
Array.prototype.find ||
  (Array.prototype.find = function (r) {
    if (null == this)
      throw new TypeError("Array.prototype.find called on null or undefined");
    if ("function" != typeof r)
      throw new TypeError("predicate must be a function");
    var t,
      e,
      n = Object(this),
      o = n.length >>> 0,
      i = arguments[1];
    for (e = 0; e < o; e++) if (((t = n[e]), r.call(i, t, e, n))) return t;
  }),
  Array.prototype.findIndex ||
    (Array.prototype.findIndex = function (r) {
      if (null == this) throw new TypeError('"this" is null or not defined');
      var t = Object(this),
        e = t.length >>> 0;
      if ("function" != typeof r)
        throw new TypeError("predicate must be a function");
      for (var n = arguments[1], o = 0; o < e; ) {
        var i = t[o];
        if (r.call(n, i, o, t)) return o;
        o++;
      }
      return -1;
    }),
  String.prototype.includes ||
    (String.prototype.includes = function (r, t) {
      if (r instanceof RegExp)
        throw TypeError("first argument must not be a RegExp");
      return void 0 === t && (t = 0), -1 !== this.indexOf(r, t);
    }),
  Array.prototype.includes ||
    (Array.prototype.includes = function (r, t) {
      if (r instanceof RegExp)
        throw TypeError("first argument must not be a RegExp");
      return void 0 === t && (t = 0), -1 !== this.indexOf(r, t);
    }),
  Object.entries ||
    (Object.entries = function (r) {
      for (var t = Object.keys(r), e = t.length, n = new Array(e); e--; )
        n[e] = [t[e], r[t[e]]];
      return n;
    }),
  Object.values ||
    (Object.values = function (r) {
      for (var t = Object.keys(r), e = t.length, n = new Array(e); e--; )
        n[e] = r[t[e]];
      return n;
    }),
  "function" != typeof Object.assign &&
    (Object.assign = function (r, t) {
      if (null == r)
        throw new TypeError("Cannot convert undefined or null to object");
      for (var e = Object(r), n = 1; n < arguments.length; n++) {
        var o = arguments[n];
        if (null != o)
          for (var i in o)
            Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
      }
      return e;
    });
function _extends() {
  return (_extends =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var a in n)
          Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
      }
      return e;
    }).apply(this, arguments);
}
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a);
  }
}
function _createClass(e, t, n) {
  return (
    t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
  );
}
function _defineProperty(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
!(function () {
  var e = (function () {
    function e() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      _classCallCheck(this, e),
        _defineProperty(this, "_sections", {}),
        (this._cbOnReady = t.cb),
        this._initialize(t),
        this._setup();
    }
    return (
      _createClass(e, [
        {
          key: "_initialize",
          value: function (e) {
            if (!e.cookies) throw "app:no cookie params";
            var t = e.cookies,
              n = e.location,
              a = e.country,
              o = void 0 === a ? "" : a,
              s = e.browserLanguage,
              r = void 0 === s ? "" : s,
              i = e.origin,
              c = void 0 === i ? "https://www.shazam.com" : i,
              u = e.ga,
              h = e.ua,
              l = e.serverMode,
              p = e.version;
            _extends(
              this,
              {
                supports: new shz.Supports(h),
                storage: shz.storage,
                cookies: t,
              },
              new shz.common.Datasync()
            );
            var f = _extends(
                { urlparams: shz.common.urlParams(n) },
                e.config || {}
              ),
              g = /^\/amp\//.test(n.pathname);
            g && (n.pathname = n.pathname.replace(/^\/amp\//, "/"));
            var m = l || this.supports.bot;
            _extends(this, {
              appname:
                f.products && this.getProductName({ config: f, location: n }),
              ampPlatform: this.supports.ampPlatform,
              ampproject: g,
              browserLanguage: r,
              bot: !g && m,
              config: f,
              countryGeoIP: (o || "").toUpperCase(),
              ga: u,
              location: n,
              origin: c,
              _embedLaunch: !e.config,
              serverMode: l,
              version: p,
              entryURL: null,
              artistAdamIdEnabled: !0,
            });
          },
        },
        {
          key: "_setup",
          value: function () {
            var e = this;
            shz.bridge.on("aboutBridge", {
              cb: function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                (e.bridgeData = t.data || {}),
                  (e.config.frames = e.config.frames || {}),
                  Promise.all([
                    e._setupLocale(),
                    e._setupUser(),
                    e._loadFeaturesConfig(),
                    e._loadProductConfig(),
                  ])
                    .then(function (t) {
                      console.log("_setup", t), e._notifyReady(!0);
                    })
                    .catch(function (t) {
                      console.log("_setup failed", t), e._notifyReady(!1);
                    });
              },
              listenOnce: !0,
            });
          },
        },
        {
          key: "_notifyReady",
          value: function (t) {
            var n = this;
            e.set("app:beforeReady", this, function () {
              n.set("app:beforeReady", n, function () {
                e.set("app:ready", n, function () {
                  n.set("app:ready", n, function () {
                    n._statPreloadEvent(), n._cbOnReady(n, t);
                  });
                });
              });
            });
          },
        },
        {
          key: "_setAmpLanguage",
          value: function (e) {
            this.localeLanguage =
              "gb" == this.language
                ? "en"
                : "en" == this.language
                ? "en-US"
                : this.language;
          },
        },
        {
          key: "_setupLocale",
          value: function () {
            return (
              this._setupLanguage(),
              this._setupCountry(),
              this.fire("_app:localeReady", 1),
              this._loadLocaleStrings()
            );
          },
        },
        {
          key: "_loadLocaleStrings",
          value: function (e) {
            var t = this;
            return new Promise(function (e) {
              var n = function () {
                t._setAmpLanguage(t.language), e("locale");
              }.bind(t);
              t.strings = "";
              var a = t.language,
                o = t.version;
              if ("en" == a || shz[t.langs[a]])
                (t.strings = shz[t.langs[a]]), n();
              else {
                var s = "src" == o ? "/src" : "/builds/" + o;
                shz.common
                  .getJSON(
                    "".concat(s, "/intl/strings/").concat(t.langs[a], ".json")
                  )
                  .then(
                    function (e) {
                      (t.strings = e), n();
                    },
                    function () {
                      console.log(
                        "FAILED *********************************************************************"
                      ),
                        (t.language = "en"),
                        (t.strings = shz[t.langs.en]),
                        n();
                    }
                  );
              }
            });
          },
        },
        {
          key: "_loadFeaturesConfig",
          value: function () {
            var e = this;
            return new Promise(function (t, n) {
              var a = e,
                o = e.serverMode
                  ? { config: e.config }
                  : {
                      url: ""
                        .concat(e.origin, "/config/features")
                        .concat(e.appname, ".json"),
                    };
              shz.npmBridge.FeatureFlags.configureFeatures(
                o,
                {
                  controlConfigs: {
                    environments: ["www", "cisd", "betasd", "dev"],
                    getLoginState: function () {
                      return a.storage.local.get("loggedin");
                    },
                  },
                  controlStates: {
                    country: e.country,
                    environment: e.supports.hostEnv,
                    inid: e.inid,
                    platformProps: e.supports,
                    urlparams: e.config.urlparams,
                  },
                },
                function (n) {
                  var a = n.featureflags,
                    o = n.config,
                    s = void 0 === o ? {} : o,
                    r = n.error;
                  (e.featureflags = a),
                    _extends(
                      e.config,
                      { validReferrers: [], stats: [], featureflags: {} },
                      s
                    ),
                    r && console.log("_loadFeaturesConfig", r),
                    t();
                }
              );
            });
          },
        },
        {
          key: "_loadProductConfig",
          value: function () {
            var e = this;
            return new Promise(function (t) {
              e.get("_app:setupComplete", function () {
                t("productconfig");
              }),
                e._embedLaunch
                  ? e._fetchBaseConfig(function () {
                      e.fire("_app:setup", 1);
                    })
                  : e.fire("_app:setup", 1);
            });
          },
        },
        {
          key: "_fetchBaseConfig",
          value: function (e) {
            var t = this,
              n = this.config,
              a =
                "src" == shz.version
                  ? "/config/initbase.json"
                  : "/builds/" + shz.version + "/config/initbase.json";
            shz.common.getJSON(a).then(
              function (a) {
                (a.sections = a.sections || {}),
                  shz.common.merge(n, a, !0),
                  (t.appname = t.getProductName(t)),
                  e();
              },
              function (e, t) {
                console.log("App:_fetchConfig failed", e, t);
              }
            );
          },
        },
        {
          key: "_statPreloadEvent",
          value: function () {
            var e = this;
            try {
              (shz.stats = new shz.Stats(this)),
                (this.config.stats || []).some(function (t) {
                  e.location.href.match(t.path) &&
                    t.preload &&
                    -1 == e.location.href.indexOf("?refid") &&
                    shz.stats.stat(
                      {
                        beaconType: t.preload.beaconType,
                        screenname: t.preload.screenname,
                        path: (e.location && e.location.pathname) || "",
                      },
                      e
                    );
                }),
                [
                  {
                    key: "deviceplatform",
                    value: "unknown",
                    code: "deviceplatform_unknown",
                  },
                  { key: "bot", value: !0, code: "deviceplatform_bot" },
                ].forEach(function (t) {
                  e.supports[t.key] == t.value &&
                    shz.stats.stat(
                      {
                        beaconData: {
                          beaconType: "exceptions",
                          type: "error",
                          errordomain:
                            (e.location && e.location.pathname) || "",
                          errorcode: t.code,
                          errordesc: e.supports.useragent,
                        },
                      },
                      { force: !e.serverMode }
                    );
                });
            } catch (e) {}
          },
        },
        {
          key: "_verifiedLang",
          value: function (e) {
            e = "en-gb" == e ? "gb" : e;
            var t = this.langs[e] && e;
            if (!t) {
              var n = e.split("-")[0];
              t = n && this.langs[n] && n;
            }
            return t || "en";
          },
        },
        {
          key: "_setupLanguage",
          value: function () {
            var e = this.config,
              t = this.browserLanguage,
              n = (
                e.urlparams.lang ||
                this.cookies.get("language") ||
                t ||
                "en"
              ).toLowerCase();
            (this.langs = shz.langs),
              (this.language = this._verifiedLang(n)),
              this._setAmpLanguage(this.language);
          },
        },
        {
          key: "_setupCountry",
          value: function () {
            var e = this.config,
              t = this.countryGeoIP,
              n = this.bridgeData,
              a = "",
              o = shz.country[t] && t,
              s = (e.urlparams.co || "").toUpperCase();
            if (
              ((this.countryQuery = s),
              !(s = shz.country[s] && s) && n.webConfig)
            )
              try {
                var r = JSON.parse(n.webConfig);
                (a = this.countryNative = (r.country || "").toUpperCase()),
                  (a = shz.country[a] && a);
              } catch (e) {}
            this.country = s || a || o || "GB";
          },
        },
        {
          key: "_setupUser",
          value: function () {
            var e = this.config,
              t =
                (this.bridgeData.client || {}).installationID ||
                e.urlparams.inid ||
                shz.storage.local.get("inid"),
              n = shz.storage.local.get("webId");
            return (
              n ||
                ((this.newuser = !0),
                (n = shz.common.guid()),
                this.storage.local.set("webId", n, 31536e6)),
              (this.inid = t || n),
              this.set("_app:userReady", t),
              "user"
            );
          },
        },
        {
          key: "_setPath",
          value: function (e) {
            var t = this;
            this.get("app:ready", function () {
              var n,
                a,
                o,
                s = e.path,
                r = e.params,
                i = {},
                c = e.section || "main",
                u = e.preserveOverlay;
              for (o in ((n =
                (s = "/" == s ? "/home" : s) &&
                shz.common.getFrameInfo(s, t.config)),
              "main" == c &&
                (t.ampproject &&
                  t.config.ampproject &&
                  (i = shz.common.copy(t.config.ampproject.sections)),
                n &&
                  (n.config.sectionSet &&
                    (i = shz.common.merge(
                      i,
                      t.config.sectionSets[n.config.sectionSet],
                      !0
                    )),
                  (i = shz.common.merge(i, n.config.sections, !0)),
                  t.config.urlparams.nohf &&
                    (delete i.header, delete i.footer))),
              (i[c] = {
                path: s,
                href: e.href,
                params: r,
                referrer: t._sections[e.section || "main"],
                pushHistory: e.pushHistory,
              }),
              "main" == c &&
                !u &&
                t._sections.overlay &&
                (i.overlay = i.overlay || { path: null }),
              i))
                (a = i[o].path) === t._sections[o]
                  ? delete i[o]
                  : a
                  ? (t._sections[o] = a)
                  : delete t._sections[o];
              shz.common.isEmpty(i)
                ? t.set("app:pathunchanged", !0)
                : t._loadFrameStrings(i, function () {
                    t._checkSSO(i, function () {
                      t.set("app:path", i);
                    });
                  });
            });
          },
        },
        {
          key: "_checkSSO",
          value: function (e, t) {
            var n,
              a = e && e.main && e.main.path,
              o = this.config;
            (n = a && shz.common.getFrameInfo(a, o)) &&
            shz.common.isFrameSecure(n.type, o)
              ? this.getService("sso").request("checkLogin", null, function () {
                  t();
                })
              : t();
          },
        },
        {
          key: "_loadFrameStrings",
          value: function (e, t) {
            var n = this,
              a = e && e.main && e.main.path,
              o = a && shz.common.getFrameInfo(a, this.config),
              s = this.config.frames,
              r = o && s[o.type],
              i = r && r.strings;
            if (i && !r.stringsLoaded) {
              var c = this.language,
                u = Object.keys(i),
                h = u
                  .map(function (e) {
                    var t = i[e],
                      a = "src" == n.version ? "/src" : "/builds/" + n.version;
                    return shz["strings-".concat(e)] &&
                      shz["strings-".concat(e)][n.langs[c]]
                      ? null
                      : a + t + n.langs[c] + ".json";
                  })
                  .filter(function (e) {
                    return e;
                  });
              h && h.length
                ? shz.common.request(h, function (e) {
                    Object.keys(e).forEach(function (t) {
                      u.some(function (a) {
                        var o = new RegExp("".concat(i[a]));
                        if (t.match(o))
                          return e[t] && (n.strings[a] = e[t]), !0;
                      });
                    }),
                      (r.stringsLoaded = !0),
                      t();
                  })
                : t();
            } else t();
          },
        },
        {
          key: "navigate",
          value: function (e) {
            var t;
            "string" == typeof e && (e = { href: e });
            try {
              e.href.match("embed") &&
                document &&
                shz.stats.stat(
                  {
                    type: "navinfo",
                    beaconType: "userevent",
                    path:
                      (document.location && document.location.pathname) ||
                      "unknown",
                    providerdesc: e.href,
                    providername:
                      e.anchor &&
                      e.anchor.hash &&
                      e.anchor.hash.replace("#", ""),
                    referrer: document.referrer,
                  },
                  this
                );
            } catch (e) {}
            e.href
              ? (this.entryURL || (this.entryURL = e.href),
                this.ampproject && (e.href = e.href.replace(/^\/amp\//, "/")),
                (t = this.resolvePath(e.href)),
                e.href == t.href ||
                (e.section && "main" != e.section) ||
                this.config.urlparams.lang ||
                this.config.urlparams.fb_locale
                  ? (shz.common.merge(e, t, 1),
                    (this.langpath = t.langpath),
                    this._setPath(e))
                  : (this.ampproject && (t.href = "/amp" + t.href),
                    this.set("app:_redirect", {
                      path: t.href,
                      status: 302,
                      params: e.params,
                      pushHistory: e.pushHistory,
                    })))
              : this._setPath(e);
          },
        },
        {
          key: "resolvePath",
          value: function (e) {
            var t,
              n = e.split("?")[0],
              a = e,
              o = /^\/([^\/]+)(\/)*/;
            return (
              (t = (n.split("/")[1] || "").toLowerCase()),
              (n = (t = shz.langs[t] && t) ? n.replace(o, "/") : n),
              "en" == this.language
                ? ((a = t ? a.replace(o, "/") : a), (t = ""))
                : t != this.language &&
                  ((a = t
                    ? a.replace(o, "/" + this.language + "$2")
                    : "/" + this.language + ("/" == a ? "" : a)),
                  (t = this.language)),
              { href: a, path: n, langpath: t && "/" + t }
            );
          },
        },
        {
          key: "getService",
          value: function (e) {
            var t = (this.services = this.services || {});
            return t[e] || (t[e] = new shz.Service[e](this)), t[e];
          },
        },
        {
          key: "getProductName",
          value: function (e) {
            var t = e.config,
              n = e.location,
              a = n.pathname,
              o = t.urlparams.referrer,
              s = t.referrerRedirects[o];
            if (s && n.pathname != s.pathDestination) {
              var r = shz.common.urlParams(n.href);
              (s.paramsToRemove || []).forEach(function (e) {
                delete r[e];
              }),
                (a = n.pathname.replace(s.pathToReplace, s.pathDestination)),
                (this.redirectedPath = a = shz.common.setQueryParams(a, r));
            }
            var i = t.products || [],
              c = this.resolvePath(a).path,
              u = "/website";
            return (
              (c = c.split("/")),
              i.some(function (e) {
                if (c[1] == e.split("/")[1]) return (u = e), !0;
              }),
              u
            );
          },
        },
      ]),
      e
    );
  })();
  (shz.App = e), _extends(shz.App, new shz.common.Datasync());
})();
shz.AppClient = function (e) {
  var s = e.version,
    n = new shz.App(e);
  new shz.FrameClient(n),
    n.get("_app:setup", function () {
      var e, i;
      t(),
        (e = n.appname),
        (i =
          "src" == s
            ? [e + "/init.json", e + "/frames/frames.json"].join("&")
            : e.replace(/^\//, "") + "/init.js"),
        shz.script.loadjs(i, {
          success: function () {
            var e = shz.init;
            if (
              (e.ga && (n.ga = e.ga),
              e.config && shz.common.merge(n.config, e.config, !1, !0),
              e.jscombo.length)
            ) {
              var s = "bundledeps=true&" + e.jscombo.join("&");
              shz.script.loadjs(s, {
                success: function () {
                  n.set("_app:setupComplete", 1);
                },
                failure: function () {},
              });
            } else n.set("_app:setupComplete", 1);
          },
          failure: function () {},
        }),
        shz.debugmode && shz.script.loadjs("/js/ux/console.js");
    });
  var t = function () {
    n.redirectedPath &&
      (window.history.replaceState(null, null, n.redirectedPath),
      delete n.redirectedPath);
  };
  return n;
};
shz.AppView = function (e) {
  var r = this,
    t = e.app,
    o = new shz.common.Datasync(),
    a = {},
    n = {},
    s = {},
    i = {},
    c = {},
    m = {};
  function p(e) {
    var o,
      f,
      h,
      d = e.pathOrFrame,
      g = e.config,
      u = e.section,
      l = e.root,
      v = e.mvargs,
      y = e.statFirstShow,
      z = e.referrer;
    "string" == typeof d
      ? ((o = shz.common.getFrameInfo(d, g)),
        (h = o.path),
        (f = i[u][h]) ||
          (((f = shz.common.create(shz.Frame)).frameInfo = o),
          (f.frameInfo.mvargs = v),
          (f.frameInfo.statFirstShow = y),
          (f.path = h),
          (f.app = t),
          z && (f.referrer = z),
          (f.dirty = !0),
          (l = l || f),
          (f.reRender = p.bind(this, {
            pathOrFrame: f,
            config: g,
            section: u,
            root: l,
            mvargs: v,
            statFirstShow: y,
          })),
          (i[u][h] = f),
          c[u].unshift(f)))
      : (h = (f = d).path),
      (m[h] = f),
      (n[u][h] = f),
      (s[u][h] = !1),
      f.render(function (e) {
        if (m[h]) {
          var o,
            d,
            v = e.children,
            y = e.ready,
            z = t.config.errorframe || "/error";
          if (((s[u][h] = y), e.error))
            return (
              console.log(
                "***appview: frame render exception: ",
                e.error.type,
                e.error.message
              ),
              void (e.error.type == shz.common.Error.REDIRECT
                ? ((d = e.error.args.path),
                  t.ampproject && !/\/amp\/$/.test(d) && (d = "/amp" + d),
                  d
                    ? (d =
                        d +
                        ((t.location.search &&
                          -1 == d.search(/\?/) &&
                          t.location.search) ||
                          "") +
                        ((t.location.hash &&
                          -1 == d.search(/\#/) &&
                          t.location.hash) ||
                          ""))
                    : "404" == e.error.args.status && (d = z + "/notfound"),
                  t.set("app:_redirect", {
                    path: d,
                    status: e.error.args.status,
                  }))
                : (shz.stats.stat(
                    {
                      beaconType: "error",
                      providerdesc: "web_err",
                      code: e.error.type,
                      path:
                        ("undefined" != typeof document &&
                          document.location &&
                          document.location.pathname) ||
                        "",
                      errordesc: encodeURIComponent(
                        e.error.message.replace(/(%20|%3A|\s|\/)/g, "_")
                      ),
                    },
                    t
                  ),
                  e.error.forceshow || (f == l && "main" == u)
                    ? (t.set("app:" + e.error.type, h),
                      t.navigate(z + "/" + e.error.type))
                    : (delete n[u][h],
                      delete i[u][h],
                      c[u].splice(
                        c[u].findIndex(function (e) {
                          return e.path == f.path;
                        }),
                        1
                      ))))
            );
          if (
            (v.forEach(function (e) {
              var r = e.path,
                t = e.mvargs,
                a = e.statFirstShow;
              ((o = i[u][shz.common.getFrameInfo(r).path]) && !o.dirty) ||
                p({
                  pathOrFrame: r,
                  config: g,
                  section: u,
                  root: l,
                  mvargs: t,
                  statFirstShow: a,
                });
            }),
            delete n[u][h],
            shz.common.isEmpty(n[u]))
          ) {
            c[u].forEach(function (e) {
              e.dirty && (e.attachChildren(i[u]), (e.dirty = !1));
            }),
              (a[u] = l);
            var w =
              a.main &&
              !Object.keys(s || {}).some(function (e) {
                return Object.keys(s[e] || {}).some(function (r) {
                  return !s[e][r];
                });
              });
            r.set("appview:update", {
              sections: a,
              section: u,
              frames: i[u],
              pageComplete: w,
            });
          }
        }
      });
  }
  (shz.AppView.frames = m),
    t.get("frame:data", function (e) {
      var r;
      for (var o in e)
        (t.config.frames[o] = shz.common.merge(
          t.config.frames[o] || {},
          shz.common.flattenCSS(e[o]),
          !0
        )),
          (r = m[o]) &&
            r.model &&
            (e[r.model.type] &&
              shz.common.merge(r.model, e[r.model.type], !0, !0),
            (r.model = shz.common.merge(r.model, e[o], !0, !0)),
            r.model.update());
    }),
    t.get("frame:detach", function (e) {
      var r,
        t,
        o = [i, n, s],
        p = m[e];
      for (t in (p && p.detach(),
      o.forEach(function (r) {
        for (var t in a) r[t][e] && delete r[t][e];
      }),
      c))
        ((r = c[t]) || []).some(function (t, o) {
          e == t.path && r.splice(o, 1);
        });
    }),
    t.get("app:path", function (e) {
      t.get("app:ready", {
        cb: function () {
          var o;
          for (var f in ("main" in e && ((m = {}), (shz.AppView.frames = m)),
          e)) {
            if ((delete a[f], i[f])) for (var h in i[f]) i[f][h].detach();
            (n[f] = {}), (s[f] = {}), (i[f] = {}), (c[f] = []);
          }
          for (var f in e)
            e[f].path
              ? ((o = !0),
                p({
                  pathOrFrame: e[f].path,
                  config: t.config,
                  section: f,
                  mvargs: e[f].params && e[f].params.mvargs,
                  referrer: e[f].referrer,
                }))
              : (a[f] = null);
          o || r.set("appview:update", { sections: a });
        },
        listenOnce: !0,
      });
    }),
    (r = shz.common.merge(r, o));
};
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
shz.AppViewClient = function (e) {
  var t,
    a,
    n,
    o,
    s,
    i,
    r,
    c,
    d,
    p,
    h,
    m,
    l,
    u,
    f,
    w,
    y = this,
    z = e.app,
    g = new shz.common.Datasync(),
    b = new shz.AppView(e),
    v = shz.common.ancestor,
    L = {},
    E = window._starttime || Date.now();
  function k(e) {
    var t,
      a,
      n = ["a", "[data-href]", "[data-shz-cmd]"];
    if ((a = v(e, n)).node) {
      for (t in L)
        if (shz.common.matchesSelector(a.node, t)) {
          a = { node: a.node, selector: t };
          break;
        }
    } else {
      for (t in ((n = []), L)) n.push(t);
      a = v(e, n);
    }
    return a;
  }
  function x() {
    var e = window,
      t = "inner";
    return (
      "innerWidth" in window ||
        ((t = "client"), (e = document.documentElement || document.body)),
      e[t + "Width"]
    );
  }
  function S(e) {
    var t = shz.common.ancestor(e, ".shz-frame"),
      a = e.dataset.shzBeaconPathOverride;
    try {
      shz.stats.nodeStat({
        node: e,
        beaconData: { beaconType: "userevent", path: a || r.main.path || "" },
        parentFrame: t && t.node,
        firstCall: !0,
      });
    } catch (e) {}
  }
  function T(e, t) {
    var a,
      n,
      o = e.href,
      s = e.classList,
      i = e.dataset;
    if (
      (!o &&
        (o = e.getAttribute("data-href")) &&
        ((e = document.createElement("a")).setAttribute("href", o),
        Object.keys(i).forEach(function (t) {
          e.dataset[t] = i[t];
        }),
        [].forEach.call(s, function (t) {
          e.classList.add(t);
        })),
      e.dataset.shzExternal ||
        ("www.shazam.com" !== e.hostname &&
          e.hostname != window.location.hostname))
    )
      (p = !1),
        shz.ux.set("audio:stop"),
        e.dataset.shzExternal && (o = shz.common.shazamURL(o, 1)),
        (n = function () {
          clearTimeout(a),
            shz.ux.remove("imgbeaconfired", n),
            e.dataset.shzNewWindow ||
            (!z.supports.isMobile && !e.dataset.shzSameWindow)
              ? window.open(o)
              : shz.common.navigate(o);
        }),
        shz.ux.get("imgbeaconfired", { cb: n, listenOncez: !0 }),
        (a = setTimeout(n, 500));
    else {
      (e.host = window.location.host),
        (p =
          z.location.host == e.host &&
          z.location.pathname == e.pathname &&
          z.location.hash != e.hash),
        y.fire("appview:pagestart", !0),
        z.navigate({ href: e.pathname, anchor: e });
      try {
        window.history.pushState(null, null, e.href);
      } catch (t) {}
      shz.ux.set("app:path", e.pathname);
      try {
        f && (clearTimeout(f), (f = null)),
          (f = setTimeout(function () {
            shz.stats.stat(
              {
                beaconType: "error",
                errordesc: "pagetimeout",
                path: e.pathname,
              },
              z
            );
          }, 2500));
      } catch (t) {}
    }
  }
  function D() {
    var e,
      t = x();
    switch (!0) {
      case t <= s:
        e = "mobile";
        break;
      case t > s && t <= i:
        e = "tablet";
        break;
      default:
        e = "desktop";
    }
    return e;
  }
  function O() {
    switch (window.orientation) {
      case 0:
        return "shz-portrait";
      case 90:
        return "shz-landscape-left";
      case -90:
        return "shz-landscape-right";
      case 180:
        return "shz-portrait-reverse";
    }
  }
  function C() {
    try {
      f && (clearTimeout(f), (f = null));
    } catch (e) {}
  }
  function A(e) {
    var t = e.model,
      a = e.path;
    try {
      var n = { meta: shz.meta.create(t.data.meta, a, z) },
        o = shz.partials.launch.meta(n),
        s = document.createElement("div");
      s.innerHTML = o;
      var i = s.querySelectorAll("*"),
        r = document.head;
      i.forEach(function (e) {
        return r.appendChild(e);
      });
    } catch (e) {
      console.log("Failed to inject meta tags");
    }
  }
  function H(e, t) {
    var a,
      n,
      o = Date.now(),
      s = t || (r && r.main) || {},
      i = (s && s.frameInfo && s.frameInfo.config) || {};
    e ||
      ((n = Math.max(0, o - E)),
      i.pageviewwithtimespent
        ? ((a = { beaconType: "pageview", path: s.path || "" }),
          n && (a.timespent = n),
          shz.stats.nodeStat({ node: s.node, beaconData: a }, !0))
        : z.config.stats.some(function (e) {
            if (z.location.href.match(e.path) && e.timespent)
              return (
                n &&
                  shz.stats.stat(
                    {
                      beaconId: "global.ue-timespent",
                      timespent: n,
                      path: s.path || "",
                    },
                    z
                  ),
                !0
              );
          })),
      (E = o);
  }
  (z.view = b),
    z.get("app:_redirect", function (e) {
      var t = document.createElement("a");
      (t.href = e.path),
        t.host == window.location.host
          ? z.navigate({
              href: t.pathname,
              params: e.params,
              pushHistory: e.pushHistory,
            })
          : window.location.replace(e.path);
    }),
    shz.app.country,
    z.get("app:path", function (e) {
      var t,
        a,
        n = window.location,
        s = (shz.app.config.errorframe || "/error") + "/";
      if (e.main) {
        (o = !0),
          (t = e.main.href),
          (s = s.substring(1)),
          (a = new RegExp("^/(\\w\\w/)?" + s)),
          t != n.pathname + n.hash &&
            -1 === t.search(a) &&
            ((t =
              t +
              ((z.location.search &&
                -1 == t.search(/\?/) &&
                z.location.search) ||
                "") +
              ((z.location.hash && -1 == t.search(/\#/) && z.location.hash) ||
                "")),
            window.history[e.main.pushHistory ? "pushState" : "replaceState"](
              null,
              null,
              t
            ));
        try {
          var i = document.body.classList;
          m && i.remove.apply(i, m);
          var r = shz.common.getFrameInfo(e.main.path, z.config);
          (m = r.config.bodyStyles || []).length && i.add.apply(i, m);
        } catch (e) {}
      }
    }),
    z.get("app:pathunchanged", function () {
      C();
    }),
    b.get("appview:update", function (e) {
      var t,
        a,
        n,
        s,
        i,
        p,
        m,
        l,
        u,
        f,
        g,
        b,
        v = e.sections,
        L = e.section,
        E = e.frames,
        k = e.pageComplete;
      for (a in ((r = v), v)) {
        if (
          ((t = document.body.querySelector("." + a)),
          v[a]
            ? t.firstElementChild && t.firstElementChild != v[a].node
              ? t.replaceChild(v[a].node, t.firstElementChild)
              : t.firstElementChild || t.appendChild(v[a].node)
            : (t.innerHTML = ""),
          "main" === a && o && w)
        )
          try {
            (document.documentElement.scrollTop = 0), (w = !1);
          } catch (e) {}
        if ("main" === a && o && k) {
          (w = !0), C(), (o = !1), y.fire("appview:pagecomplete", !0);
          try {
            h && document.body.classList.remove(h),
              (h = "shz-page" + v.main.frameInfo.type.replace(/\//g, "-")),
              document.body.classList.add(h);
          } catch (e) {}
          if (
            (c &&
              c.frameInfo &&
              (u = z.config.frames[c.frameInfo.type]) &&
              u.pageviewwithtimespent &&
              H(!1, c),
            (c = v.main),
            !(u = z.config.frames[v.main.frameInfo.type]) ||
              !u.pageviewwithtimespent)
          )
            if (
              ((i = { beaconType: "pageview", path: v.main.path || "" }),
              d ||
                ((f = void 0),
                void 0,
                void 0,
                (g = Date.now() - shz.clienttime),
                (b = shz.servertime || 0),
                d || ((d = !0), (f = g + b)),
                (p = f) && (i.time = p),
                void 0 !== (m = shz.common.isJSCached()) && (i.cached = m),
                A(v.main),
                (d = !0)),
              u && u.delaypageview)
            )
              (u.delaypageview = !1),
                z.get("appviewclient:firepageview", {
                  listenOnce: !0,
                  cb: function () {
                    shz.stats.nodeStat({
                      node: v.main.node,
                      beaconData: i,
                      firstCall: !0,
                      beaconOnVisible: !0,
                    });
                  },
                });
            else {
              shz.stats.nodeStat({
                node: v.main.node,
                beaconData: i,
                firstCall: !0,
                beaconOnVisible: !0,
              });
              try {
                if ("IE" == z.country) {
                  var x =
                      "https://beacon.shazam.com/beacons/api/v1/beacon/website/1.0/{lang}/{country}/web/-/beacon/959af3ad-c2fa-2cc3-94f0-4ea2789beb1d/impression?"
                        .replace("{lang}", (z && z.localeLanguage) || "-")
                        .replace("{country}", (z && z.country) || "-"),
                    S = {
                      timezone: "".concat(
                        Intl.DateTimeFormat().resolvedOptions().timeZone
                      ),
                      screenname: shz.stats.getScreenName(),
                    };
                  if (
                    (shz.stats.addDefaultParams(S, z),
                    delete S.webId,
                    z.config.urlparams.co && (S.urlco = z.config.urlparams.co),
                    S)
                  )
                    for (var T in S) x += T + "=" + S[T] + "&";
                  new Image().src = x;
                }
              } catch (e) {}
            }
          if (
            (l = document.referrer || shz.app.config.urlparams.referrer) &&
            -1 == l.indexOf("shazam.com") &&
            -1 == l.indexOf("shz.am")
          ) {
            var D,
              O = {
                deeplinkreferrer: (D = z.config.validReferrers.includes(l)
                  ? l
                  : shz.common.getLocationParts(l).hostname ||
                    shz.common.getLocationParts(l).host),
                providername: D,
              };
            shz.stats.nodeStat({
              beaconId: "global.framework.deeplink",
              node: v.main.node,
              beaconData: O,
            });
          }
        }
        "main" === a &&
          (n = v[a].path.match(/\/([^\/$]*)/)[1]) &&
          v[a].model.dataReady &&
          (s =
            v[a].model.data.meta &&
            (v[a].model.data.meta.pageTitle || v[a].model.data.meta.subject)
              ? v[a].model.data.meta.pageTitle || v[a].model.data.meta.subject
              : z.strings["website_meta_title_" + n]) &&
          (document.title == s ||
            s.match(/({.*?})/g) ||
            ((document.title = shz.common.stripHTML(s)),
            (document.querySelector(".aria-page-title").innerHTML = s)));
      }
      v[L] && (v[L].inDom(E), shz.ux.set("app:update:" + L));
    }),
    z.get("app:ready", function () {
      try {
        var e = O(),
          t = z.supports.osVerNum;
        e && document.body.classList.add(O()),
          document.body.classList.add("shz-" + z.supports.platform),
          document.body.classList.add("shz-os-" + z.supports.osName),
          document.body.classList.add("shz-device-" + z.supports.deviceName),
          document.body.classList.add("shz-" + shz.ux.supports.getScreenSize()),
          shz.ux.supports.isNotched() &&
            document.body.classList.add("shz-notched"),
          t &&
            document.body.classList.add(
              "shz-" + z.supports.platform + "-" + (t + "").replace(/\./g, "-")
            ),
          window.webkit &&
            window.webkit.messageHandlers &&
            document.body.classList.add("shz-wkwebview"),
          shz.app.country &&
            document.body.classList.add(
              "shz-co-" + shz.app.country.toLowerCase()
            ),
          shz.app.supports.inApp && document.body.classList.add("shz-inapp");
      } catch (e) {}
      (s = z.config.MOBILE_THRESHOLD),
        (i = z.config.TABLET_MAX_THRESHOLD),
        (u = window.innerHeight),
        (l = D()),
        z.set("app:screenmodechange", l),
        (shz.app.mobilemode = x() <= s) || a.resize(),
        (!window.shz.config ||
          (window.shz.config && shz.common.isEmpty(window.shz.config))) &&
          ((window.shz.config = z.config),
          window.updateWindow && window.updateWindow()),
        shz.ux.get("ux:visibility", function (e) {
          H(e, r && r.main),
            document.body.setAttribute("aria-hidden", e ? "false" : "true");
        }),
        shz.ux.get("ux:pageview", H.bind(y, !1, null)),
        shz.ux.set("app:ready", z),
        z.get("appview:navigate", T);
    }),
    (y.registerAction = function (e, t) {
      var a = t;
      (e in L && !t.force) ||
        ("function" == typeof t && (a = { action: t }), (L[e] = a));
    }),
    (y.unregisterAction = function (e, t) {
      "object" == _typeof(t) && t.action,
        e in L && L[e].action === t && delete L[e];
    }),
    document.addEventListener("window:resize", function () {
      ["shz-phone", "shz-tablet", "shz-desktop"].forEach(function (e) {
        document.body.classList.remove(e);
      }),
        document.body.classList.add("shz-" + shz.ux.supports.getScreenSize());
    }),
    (y = shz.common.merge(y, g)),
    (function () {
      (a = {
        orientationchange: function (e) {
          var t = O(),
            a = D();
          document.body.classList.remove(
            "shz-portrait",
            "shz-landscape-left",
            "shz-landscape-right",
            "shz-portrait-reverse"
          ),
            document.body.classList.add(t),
            z.set("app:screenmodechange", a);
        },
        handleEvent: function (e) {
          this[e.type] && this[e.type].call(this, e);
        },
        resize: function (e) {
          if (
            (z.supports.inApp ||
              ((
                90 === Math.abs(window.orientation)
                  ? window.innerHeight !== window.screen.width
                  : window.innerHeight === u
              )
                ? document.body.classList.remove(
                    "shz-browser-addressbar-hidden"
                  )
                : document.body.classList.add("shz-browser-addressbar-hidden")),
            !z.supports.isMobile)
          ) {
            var t,
              a = x(),
              n = shz.app.mobilemode,
              o = shz.app.tabletmode,
              i = D(),
              r = l !== i;
            (t = a <= s && !n) ? (n = !0) : (t = a > s && n) && (n = !1),
              t &&
                (console.log("Entering", n ? "Mobile" : "Desktop", "mode."),
                z.set("app:mobilemode", (shz.app.mobilemode = n)),
                z.set("app:tabletmode", (shz.app.tabletmode = o))),
              r && ((l = i), z.set("app:screenmodechange", l));
          }
        },
        popstate: function (e) {
          shz.app.get("_app:setupComplete", {
            cb: function () {
              shz.app.navigate(window.location.pathname);
            },
            listenOnce: 1,
          });
        },
      }),
        ((t = {
          handleEvent: function (e) {
            this[e.type] && this[e.type].call(this, e);
          },
          pointerdown: function (e) {
            var t,
              a,
              o = k(e.target),
              s = o.node;
            if (
              (e.key,
              e.keyCode &&
                [" ", "Enter"].includes(e.key) &&
                ["A", "BUTTON"].includes(e.target.tagName))
            )
              return e.target.click(), void e.preventDefault();
            n && n.pressed && n.pressed.classList.remove("pressed"),
              (n = { target: e.target, anchor: o }),
              s &&
                null == e.key &&
                ((a = (t = (s.dataset || {}).pressed)
                  ? v(s, t).node
                  : s).classList.add("pressed"),
                (n.pressed = a));
          },
          pointermove: function (e) {
            e.ext &&
              e.ext.dirLock &&
              (e.ext.dirLock.y || e.ext.dirLock.x) &&
              n &&
              n.pressed &&
              (n.pressed.classList.remove("pressed"), (n.pressed = null));
          },
          click: function (e) {
            if (!e.keyCode || -1 != [13, 32].indexOf(e.keyCode)) {
              var t,
                a = k(e.target),
                o = a.node,
                s = a.selector,
                i = o && (o.href || o.getAttribute("data-href")),
                r = (e.ext && e.ext.dirLock) || {};
              r.y ||
                r.x ||
                (s in L
                  ? (L[s].preventBeacon ||
                      (!o.dataset.shzBeaconPreventDefault && S(o)),
                    L[s].action({ node: o, target: e.target }),
                    e.preventDefault())
                  : i
                  ? ((t = shz.ux.linkTracking(i, o)),
                    "[data-href]" == a.selector
                      ? (o.dataset.href = t)
                      : (o.href = t),
                    1 == !o.dataset.shzBeaconPreventDefault && S(o),
                    !e.handled && T(o),
                    p ||
                      o.hasAttribute("data-shz-allow-default") ||
                      e.preventDefault())
                  : o &&
                    o.dataset &&
                    (o.dataset.shzBeacon || o.dataset.shzBeaconId) &&
                    (1 == !o.dataset.shzBeaconPreventDefault && S(o),
                    e.preventDefault())),
                n &&
                  n.pressed &&
                  (n.pressed.classList.remove("pressed"), (n.pressed = null));
            }
          },
        }).touchstart = t.pointerdown),
        (t.touchmove = t.pointermove),
        (t.touchend = t.pointerup),
        (t.mousedown = t.pointerdown),
        (t.mousemove = t.pointermove),
        (t.mouseup = t.pointerup),
        (t.keydown = t.pointerdown),
        (t.keyup = t.pointerup);
      var e = {
        onPointerDown: z.supports.getEventsOfType("pointerdown"),
        onPointerMove: z.supports.getEventsOfType("pointermove"),
        onPointerUp: { events: ["click"] },
        onKeyUp: { events: ["keyup"] },
        onKeyDown: { events: ["keydown"] },
      };
      Object.keys(e).forEach(function (a) {
        e[a].events.forEach(function (e) {
          document.addEventListener(e, t);
        });
      }),
        Object.keys(a).forEach(function (e) {
          "handleEvent" != e && window.addEventListener(e, a);
        });
    })();
};
shz.Frame = {
  frameInfo: null,
  children: [],
  node: null,
  _timers: [],
  _setTimeout: function (e, a) {
    var t = setTimeout(e, a);
    return this._timers.push(t), t;
  },
  _clearTimers: function () {
    this._timers.forEach(function (e) {
      clearTimeout(e);
    }),
      (this._timers = []);
  },
  _appEvent: function (e, a, t, m) {
    var o = { data: a, source: this.path || (this.model && this.model.path) };
    (this.app || this.model.app).set(e, o, null, m, t);
  },
  _createModel: function () {
    var e,
      a = this,
      t = a.model,
      m = a.frameInfo;
    t ||
      (m.scope.Model
        ? (((t = a.model = shz.common.create(m.scope.Model)).hashparams =
            m.hashparams),
          (t.params = m.params),
          (t.app = a.app),
          (t.config = m.config),
          (t.mvargs = m.mvargs),
          (t.path = m.path),
          (t.type = m.type),
          (t.appEvent = a._appEvent.bind(t)),
          (e = shz.common.flattenCSS(a.app.config.frames[m.type])) &&
            (t = shz.common.merge(t, e, !0, !0)),
          (e = shz.common.flattenCSS(a.app.config.frames[t.path])) &&
            (t = shz.common.merge(t, e, !0, !0)),
          (t.data = t.data || {}),
          Object.keys(t.refFrame || {}).forEach(function (e) {
            var a = {};
            (a[e] = shz.app.config.frames[t.refFrame[e]]),
              shz.common.merge(t.data, a, !1, !0);
          }))
        : (a.model = { data: {}, app: a.app, params: m.params }),
      (a.model.update = function () {
        a.reRender &&
          setTimeout(function () {
            a.reRender && ((a.dirty = !0), a.reRender());
          }, 0);
      }));
  },
};
shz.FrameClient = function (e) {
  var t,
    n,
    o = shz.common.Error,
    i = document.querySelector(".root"),
    a = e.supports,
    s = shz.common.dispatchCustom,
    r = {},
    c = {
      onPointerDown: a.getEventsOfType("pointerdown"),
      onPointerMove: a.getEventsOfType("pointermove"),
      onPointerUp: a.getEventsOfType("pointerup"),
      onPointerCancel: a.getEventsOfType("pointercancel"),
      onScroll: { events: ["scroll", "proxyscroll"] },
      onDocumentScroll: { events: ["scroll"], attach: document },
      onVisibilityChange: { events: ["visibilitychange"] },
      onChange: { events: ["change"] },
      onKeyDown: { events: ["keydown"] },
      onDocumentKeyDown: { events: ["keydown"], attach: i },
      onKeyUp: { events: ["keyup"] },
      onDocumentKeyUp: { events: ["keyup"], attach: i },
      onInput: { events: ["input"], capture: !0 },
      onFocus: { events: ["focus"], capture: !0 },
      onBlur: { events: ["blur"], capture: !0 },
      onSubmit: { events: ["submit"], capture: !0 },
      onResize: { events: ["window:resize"], attach: document },
      onBeforeUnload: { events: ["beforeunload"], attach: window },
      onMouseOver: { events: ["mouseover"] },
      onMouseOut: { events: ["mouseout"] },
      onContextMenu: { events: ["contextmenu"] },
      onAppStateChange: {
        events: ["applicationBackgrounded", "viewAppeared"],
        native: !0,
      },
      onDragStart: { events: ["dragstart"] },
      onDragOver: { events: ["dragover"] },
      onDrop: { events: ["drop"] },
      cmds: { events: ["click"] },
    },
    h = {
      click: function (e) {
        var t,
          n,
          o = e.target,
          i = e.keyCode,
          a = (e.ext && e.ext.dirLock) || {};
        if (i) {
          if (
            this.view.onDocumentKeyUp &&
            this.view.onDocumentKeyUp(e.keyCode, o)
          )
            return !0;
          if (this.view.onKeyUp && this.view.onKeyUp(e.keyCode, o)) return !0;
          if (-1 == [13, 32].indexOf(i)) return;
        }
        if (a.y || a.x) this.view.onDragEnd && this.view.onDragEnd(e);
        else {
          n =
            (t =
              (this.view.cmds && e.cmdEl) ||
              shz.common.ancestor(
                o,
                ["a[href]", "[data-href]", "[data-shz-cmd]"],
                this.node.parentNode
              ).node) && t.dataset.shzCmd;
          try {
            (e.cmdEl = t),
              t && this.view.cmds && this.view.cmds[n] && !e.handled
                ? this.view.cmds[n].call(this.view, t, e) && (e.handled = !0)
                : this.view.onPointerUp &&
                  this.view.onPointerUp(e) &&
                  (e.stopPropagation(), e.preventDefault());
          } catch (e) {}
        }
      },
      keydown: function (e) {
        var t = e.target;
        if (e.keyCode) {
          if (this.view.onDocumentKeyDown && this.view.onDocumentKeyDown(e, t))
            return !0;
          if (this.view.onKeyDown && this.view.onKeyDown(e, t)) return !0;
        }
      },
      keyup: function (e) {
        var t = e.target;
        if (e.keyCode) {
          if (this.view.onDocumentKeyUp && this.view.onDocumentKeyUp(e, t))
            return !0;
          if (this.view.onKeyUp && this.view.onKeyUp(e, t)) return !0;
        }
      },
      pointerup: function (e) {
        this.view.onPointerUp && this.view.onPointerUp(e);
      },
      pointerdown: function (e) {
        this.view.onPointerDown && this.view.onPointerDown(e);
      },
      pointermove: function (e) {
        this.view.onPointerMove && this.view.onPointerMove(e);
      },
      pointercancel: function (e) {
        this.view.onPointerCancel && this.view.onPointerCancel(e);
      },
      scroll: function (e) {
        var t;
        this.view._scrollTm ||
          (this.view._scrollTm = setTimeout(
            function () {
              (this.view._scrollTm = 0),
                e.target == document
                  ? this.view.onDocumentScroll && this.view.onDocumentScroll(e)
                  : this.view.onScroll && this.view.onScroll(e),
                this.frameInfo.config.statScroll &&
                  !r[this.frameInfo.path] &&
                  ((r[this.frameInfo.path] = !0),
                  (t = {
                    beaconId: this.frameInfo.config.statScroll,
                    path: this.frameInfo.path,
                  }),
                  shz.stats.stat(t));
            }.bind(this),
            50
          ));
      },
      proxyscroll: function (e) {
        h.scroll.call(this, e);
      },
      change: function (e) {
        this.view.onChange(e) || (e.stopPropagation(), e.preventDefault());
      },
      input: function (e) {
        this.view.onInput(e) || (e.stopPropagation(), e.preventDefault());
      },
      focus: function (e) {
        try {
          a.firefox;
        } catch (t) {
          e.stopPropagation();
        }
        e.preventDefault(), this.view.onFocus(e);
      },
      blur: function (e) {
        e.stopPropagation(), e.preventDefault(), this.view.onBlur(e);
      },
      submit: function (e) {
        e.stopPropagation(), e.preventDefault(), this.view.onSubmit(e);
      },
      beforeunload: function (e) {
        e.stopPropagation(), e.preventDefault(), this.view.onBeforeUnload();
      },
      mouseover: function (e) {
        e.stopPropagation(), e.preventDefault(), this.view.onMouseOver(e);
      },
      mouseout: function (e) {
        e.stopPropagation(), e.preventDefault(), this.view.onMouseOut(e);
      },
      dragstart: function (e) {
        e.stopPropagation(), this.view.onDragStart(e);
      },
      dragover: function (e) {
        return (
          e.stopPropagation(), e.preventDefault(), this.view.onDragOver(e), !1
        );
      },
      drop: function (e) {
        e.stopPropagation(), e.preventDefault(), this.view.onDrop(e);
      },
      visibilitychange: function (e) {
        var t, n, o, i, a, s;
        if (
          this.view.onVisibilityChange &&
          (t = window.innerHeight) &&
          (n = window.innerWidth) &&
          (a =
            e.detail && "state" in e.detail
              ? e.detail.state
              : (((o = this.view.node.getBoundingClientRect()).top >= 0 &&
                  o.top < t) ||
                  (o.bottom >= 0 && o.bottom < t)) &&
                ((o.left >= 0 && o.left < n) ||
                  (o.right >= 0 && o.right < n))) !== this._visible
        ) {
          if (((this._visible = a), (i = a && !this._viewed))) {
            this._viewed = !0;
            var r =
              this.frameInfo.statFirstShow ||
              this.frameInfo.config.statFirstShow;
            r &&
              ((s =
                "string" == typeof r
                  ? {
                      beaconData: { beaconId: r, path: this.frameInfo.path },
                      node: this.node,
                    }
                  : {
                      beaconType: "impression",
                      providerdesc: "firstshow",
                      path: this.frameInfo.path,
                    }),
              shz.stats.stat(s));
          }
          this.view.onVisibilityChange(e, { visible: a, firstshow: i });
        }
      },
      "window:resize": function (e) {
        this.view.onResize && this.view.onResize(e);
      },
      contextmenu: function (e) {
        this.view.onContextMenu && this.view.onContextMenu(e);
      },
      applicationBackgrounded: function (e) {
        (this._backgrounded = !0),
          this.view.onAppStateChange &&
            this.view.onAppStateChange({ backgrounded: !0 });
      },
      viewAppeared: function (e) {
        this.view.onAppStateChange &&
          (this.view.onAppStateChange({
            firstview: !this._backgrounded,
            backgrounded: !1,
          }),
          (this._backgrounded = !1));
      },
    },
    d = {
      "frame:visibilityCheck": function (e) {
        setTimeout(function () {
          p({ target: e.node });
        }, e.delay || 0);
      },
    };
  function p(e) {
    e.target &&
      !n &&
      (n = setTimeout(function () {
        n = 0;
        var t,
          o = e.target.querySelectorAll(".shz-frame");
        Array.prototype.forEach.call(o, function (e) {
          s(e, "visibilitychange", null, { bubble: 0 });
        }),
          e.target != i &&
            ((t = shz.common.ancestor(e.target, ".shz-frame").node) ==
              e.target && (t = null),
            t && s(t, "proxyscroll", { target: e.target }));
      }, 50));
  }
  function v(e, t) {
    var n,
      i = this;
    e.type
      ? (n = function (a) {
          if (!i.fetching) {
            i.fetching = !0;
            var s = shz.common.getBundlePath("/frames" + e.type);
            shz.common.isFrameSecure(e.type, i.app.config) &&
              (s = "/secure" + s),
              shz.script.load(s, {
                success: function () {
                  delete i.fetching,
                    e.scope.tmpl
                      ? i.render.call(i, t)
                      : t({
                          error: new o({
                            type: o.NOTFOUND,
                            message: e.path + "tmpl not found",
                          }),
                        });
                },
                failure: function () {
                  delete i.fetching,
                    (i.attempts = i.attempts ? i.attempts + 1 : 1),
                    i.attempts < 3
                      ? setTimeout(n, 0)
                      : t({
                          error: new o({
                            type: o.NOTFOUND,
                            message: e.path + " script load failed",
                          }),
                        });
                },
              });
          }
        })()
      : t({
          error: new o({ type: o.NOTFOUND, message: e.path + " not found" }),
        });
  }
  (h.mousedown = h.pointerdown),
    (h.mousemove = h.pointermove),
    (h.mouseup = h.pointerup),
    (h.touchstart = h.pointerdown),
    (h.touchmove = h.pointermove),
    (h.touchend = h.pointerup),
    (h.keyup = h.click),
    document.addEventListener(
      "scroll",
      function (e) {
        p(e);
      },
      !0
    ),
    shz.common.merge(shz.Frame, {
      render: function (n) {
        var i,
          a,
          s,
          r,
          c,
          h,
          d,
          l,
          f,
          u,
          m,
          g = this,
          w = [],
          y = g.frameInfo;
        if (y.scope.tmpl) {
          if (
            (g.model ||
              ((a = document.body.querySelector(
                '[data-shz-frame="' + y.origPath + '"]'
              )) &&
                a.dataset.shzParentFrame &&
                ((d = a), a.removeAttribute("shz-parent-frame"))),
            g._createModel(),
            (s = g.model),
            shz.common.merge(
              g.model.data,
              {
                strings: e.strings,
                langpath: e.langpath,
                location: shz.common.getFrameInfo(
                  location.pathname,
                  g.app.config
                ),
                mobilemode: !!e.mobilemode,
              },
              !0
            ),
            d)
          )
            r = !0;
          else
            try {
              (g._inPrepare = !0),
                (r = s.dataReady = !s.prepare || s.prepare()),
                delete this._inPrepare;
            } catch (e) {
              return (
                (e.message = y.path + " prepare exception:" + e.message),
                (e.type = e.type || o.JSERROR),
                void n({ error: e })
              );
            }
          g.template || (g.template = y.scope.tmpl),
            d || (i = g.template(g.model.data || {})),
            (g._inDom = !1),
            (g._contentChanged = !0),
            (h = "shz-frame" + y.type.replace(/\//g, "-")),
            (u = "video-" + h),
            g.node
              ? ((a = g.node),
                g.app.supports.ie_ver >= 11 &&
                  ((c = d
                    ? a.querySelectorAll(
                        '[data-shz-frame][data-shz-parent-frame="' +
                          g.path +
                          '"]'
                      )
                    : a.querySelectorAll("[data-shz-frame]")),
                  [].forEach.call(c, function (e) {
                    e && e.parentNode && e.parentNode.removeChild(e);
                  })),
                g.view && g.view.update
                  ? (g.view.update(shz.common.fragment(i)), (l = !0))
                  : (g.cleanUpVideos(g.videos),
                    (i = i.substring(i.indexOf(">") + 1, i.lastIndexOf("<"))),
                    (g.node.innerHTML = i),
                    g.view && g.view.render && g.view.render(g.node)))
              : ((g.node = a = d || shz.common.fragment(i)),
                (a.id = g.frameInfo.path),
                g.node.setAttribute("data-shz-frame", y.path),
                g.node.setAttribute("data-shz-frame-rendered", "1"),
                g.node.classList.add(h),
                g.node.classList.add("shz-frame"),
                d || g.node.classList.add("notready"),
                g._createView(),
                g._attachEvents(),
                g.view &&
                  ((g.view.isSSR = !!d),
                  g.view.render && g.view.render(g.node),
                  (g.view.rendered = !0))),
            l ||
              ((f = g.node.querySelectorAll("video")).forEach(function (e) {
                e.classList.add(u);
              }),
              (g.videos = f)),
            r &&
              setTimeout(function () {
                g.node.classList.remove("notready");
              }, 200),
            g.model.hidden &&
              a.parentNode &&
              ((m = a.parentNode),
              a.parentNode.removeChild(a),
              p({
                target:
                  shz.common.ancestor(
                    m,
                    '[data-shz-frame="' + document.location.pathname + '"]'
                  ).node ||
                  shz.common.ancestor(m, ".overlay > .shz-frame").node,
              })),
            shz.ux.ImageLoader.load(a),
            shz.ux.ImageSrcSetLoader.load(a),
            shz.ux.VideoLoader.load(a),
            shz.ux.Ripple.load(a),
            (c = d
              ? a.querySelectorAll(
                  '[data-shz-frame][data-shz-parent-frame="' + g.path + '"]'
                )
              : a.querySelectorAll("[data-shz-frame]")),
            [].forEach.call(c, function (e) {
              var t = {
                path: e.dataset.shzFrame,
                statFirstShow: e.dataset.shzBeaconFirstshow,
              };
              try {
                e.dataset.shzMvargs &&
                  (t.mvargs = JSON.parse(e.dataset.shzMvargs));
              } catch (e) {}
              w.push(t);
            }),
            (g.children = w),
            g.attachChildren(g.childFrames, !0),
            g &&
              (t && clearTimeout(t),
              (t = setTimeout(function () {
                var e;
                for (var n in ((t = 0), shz.AppView.frames))
                  (e = shz.AppView.frames[n]).view &&
                    e.view.rendered &&
                    (e.view.node.parentNode ||
                      e._detachedEvents ||
                      (e._detachEvents(), b(e.children || [])));
              }, 100))),
            n({ children: w, ready: !!r });
        } else v.call(g, y, n);
        function b(e) {
          e.forEach(function (e) {
            var t = e.path,
              n = shz.AppView.frames[t];
            n._detachEvents(), b(n.children || []);
          });
        }
      },
      cleanUpVideos: function (e) {
        e &&
          e.forEach(function (e) {
            try {
              e.pause(), (e.src = ""), e.load();
            } catch (e) {}
          });
      },
      attachChildren: function (e, t) {
        var n = this,
          o = n.node;
        e &&
          !shz.common.isEmpty(e) &&
          n.children.forEach(function (i) {
            var a,
              s = i.path,
              r = e[shz.common.getFrameInfo(s).path];
            (n.childFrames = n.childFrames || {}),
              (a = o.querySelector(
                '[data-shz-frame="' + s + '"]:not([data-shz-frame-rendered])'
              )) &&
                (r && !r.model.hidden
                  ? (a.classList &&
                      a.classList.length &&
                      Array.prototype.forEach.call(a.classList, function (e) {
                        r.node.classList.add(e);
                      }),
                    a.dataset.shzMvargs &&
                      (r.node.dataset.shzMvargs = a.dataset.shzMvargs),
                    a.parentNode.replaceChild(r.node, a),
                    (n.childFrames[s] = r),
                    n.view &&
                      n.view.onAttachChildren &&
                      n.view.onAttachChildren(r.node))
                  : t || (a.parentNode && a.parentNode.removeChild(a)));
          });
      },
      detach: function () {
        s(this.node, "visibilitychange", { state: !1 }),
          delete this.reRender,
          this._detachEvents();
        try {
          this.model && this.model.detach && this.model.detach();
        } catch (e) {}
        try {
          this.cleanUpVideos(this.videos),
            (this.videos = null),
            this.view && this.view.detach && this.view.detach();
        } catch (e) {}
      },
      inDom: function (e) {
        if (this.node && this.node.parentNode) {
          if (
            (this._detachedEvents &&
              (console.log("reattaching events on " + this.frameInfo.path),
              this._attachEvents()),
            !this._inDom)
          ) {
            this.children.forEach(function (t) {
              var n = t.path,
                o = shz.common.getFrameInfo(n).path;
              e[o] && (e[o]._inDom = !1);
            });
            try {
              this.view &&
                this.view.inDom &&
                this.view.inDom(this._contentChanged);
            } catch (e) {
              console.log(e);
            }
            (this._inDom = !0),
              (this._contentChanged = !1),
              s(this.node, "visibilitychange");
          }
          this.children.forEach(function (t) {
            var n = t.path,
              o = shz.common.getFrameInfo(n).path;
            e[o] && e[o].inDom(e);
          });
        }
      },
      _createView: function () {
        var e = this.view,
          t = this.frameInfo,
          n = this.node;
        e ||
          (n &&
            t.scope.View &&
            (((e = this.view = shz.common.create(t.scope.View)).model =
              this.model),
            (e.node = n),
            (e.appEvent = this._appEvent.bind(e))));
      },
      _attachEvents: function () {
        var e,
          t = this,
          n = t.model,
          o = t.view;
        t._detachEvents(), (t.handlers = t.handlers || []);
        var i = t.frameInfo.statFirstShow || t.frameInfo.config.statFirstShow;
        if (
          (o &&
            (o.onVisibilityChange =
              o.onVisibilityChange || (i && function () {})),
          o &&
            (o.onScroll =
              o.onScroll || (t.frameInfo.config.statScroll && function () {})),
          o &&
            Object.keys(c).forEach(function (e) {
              if (o[e]) {
                var n = c[e];
                (n = n && !Array.isArray(n) ? [n] : n) &&
                  n.forEach(function (e) {
                    e.events.forEach(function (n) {
                      var o, i;
                      (function (e, n) {
                        return t.handlers.some(function (t) {
                          return (
                            t.ev == e &&
                            t.attach == n.attach &&
                            t.capture == n.capture
                          );
                        });
                      })(n, e) ||
                        ((o = { ev: n, evscope: e, cb: h[n].bind(t) }),
                        t.handlers.push(o),
                        e.native
                          ? shz.bridge.on(n, o.cb)
                          : (t.app.supports.supportsPassiveListening
                              ? ((i = {}),
                                e.capture && (i = e.capture),
                                0 == n.indexOf("touch") && (i.passive = !0))
                              : (i = e.capture),
                            (e.attach || t.node).addEventListener(n, o.cb, i)));
                    });
                  });
              }
            }),
          o && o.uxEvents)
        )
          for (e in o.uxEvents) shz.ux.get(e, { cb: o.uxEvents[e], scope: o });
        if (o && o.appEvents)
          for (e in o.appEvents) t.app.get(e, { cb: o.appEvents[e], scope: o });
        if (n && n.appEvents)
          for (e in n.appEvents) t.app.get(e, { cb: n.appEvents[e], scope: n });
        if (o && o.bridgeEvents)
          for (e in o.bridgeEvents)
            shz.bridge.on(e, { cb: o.bridgeEvents[e], scope: o });
        if (n && n.bridgeEvents)
          for (e in n.bridgeEvents)
            shz.bridge.on(e, { cb: n.bridgeEvents[e], scope: n });
        for (e in d) t.app.get(e, d[e]);
        t._detachedEvents = !1;
      },
      _detachEvents: function () {
        var e,
          t = this,
          n = t.view,
          o = t.model,
          i = t.handlers;
        if (void 0 !== t._detachedEvents && 0 == t._detachedEvents) {
          if (
            (i &&
              i.forEach(function (e) {
                var n = e.evscope;
                n.native
                  ? shz.bridge.remove(e.ev, e.cb)
                  : (n.attach || t.node).removeEventListener(
                      e.ev,
                      e.cb,
                      n.capture
                    );
              }),
            (t.handlers = null),
            n && n.uxEvents)
          )
            for (e in n.uxEvents) shz.ux.remove(e, n.uxEvents[e], n);
          if (n && n.appEvents)
            for (e in n.appEvents) t.app.remove(e, n.appEvents[e], n);
          if (o && o.appEvents)
            for (e in o.appEvents) t.app.remove(e, o.appEvents[e], o);
          if (n && n.bridgeEvents)
            for (e in n.bridgeEvents)
              shz.bridge.remove(e, n.bridgeEvents[e], n);
          if (o && o.bridgeEvents)
            for (e in o.bridgeEvents)
              shz.bridge.remove(e, o.bridgeEvents[e], o);
          for (e in d) t.app.remove(e, d[e]);
        }
        t._detachedEvents = !0;
      },
    });
};
function _defineProperty(e, n, t) {
  return (
    n in e
      ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[n] = t),
    e
  );
}
function _extends() {
  return (_extends =
    Object.assign ||
    function (e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];
        for (var s in t)
          Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
      }
      return e;
    }).apply(this, arguments);
}
!(function () {
  var e = "amconnect";
  function n(n) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      s = t.access_token,
      c = !!s,
      o = "added";
    s
      ? shz.storage.local.set(e, { access_token: s })
      : (shz.storage.local.remove(e), (o = "removed"));
    var a = _defineProperty({}, "".concat(e), shz.storage.local.get(e)),
      i = new CustomEvent("contentscript_host:storageChange", {
        detail: { eventType: o, key: e, data: a },
      });
    document.dispatchEvent(i),
      _extends(n.config.applemusic, { access_token: s, isConnected: c }),
      shz.ux.fire("musickit:connection", { isConnected: c }),
      (n.user.appleMusicMembership.member = c);
  }
  shz.App.get("app:ready", function (t) {
    !(function (e) {
      shz.bridge.on("aboutBridge", {
        cb: function () {
          var n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          n.data = n.data || {};
          var t = (e.user = e.user || {}),
            s = e.supports.inApp,
            c = n.data,
            o = c.appleMusicMembership,
            a = void 0 === o ? "" : o,
            i = c.appleMusicSubscription,
            r = void 0 === i ? {} : i;
          if (
            ((t.appleMusicMembership = { member: !1 }),
            (t.connected = s && r.enabled),
            "member" == a)
          )
            t.appleMusicMembership.member = !0;
          else {
            var u = a.match(/nonmember_(.+)/);
            u && u[1] && (t.appleMusicMembership[u[1]] = !0);
          }
          t.showUpsell = s && !(t.connected || t.appleMusicMembership.member);
        },
        listenOnce: !0,
      });
    })(t),
      (function (e) {
        e.featureflags.addCustomModules({
          applemusic: {
            memberState: function (n) {
              return Object.keys(n).every(function (t) {
                return e.user.appleMusicMembership[t] === n[t];
              });
            },
          },
        });
      })(t),
      (function (t) {
        var s = t.featureflags.isEnabled("applemusic.connect");
        if (
          ((t.config.applemusic = _extends(t.config.applemusic || {}, {
            isConnectEnabled: s,
            setConnectedState: n.bind(null, t),
          })),
          s)
        )
          try {
            var c = shz.storage.local.get(e, {}).access_token;
            n(t, { access_token: c });
          } catch (n) {
            shz.storage.local.remove(e);
          }
        "undefined" != typeof document &&
          (document.addEventListener(
            "contentscript:storageChange",
            function (n) {
              var s = n.detail;
              "removed" == s.eventType &&
                s.key == e &&
                (_extends(t.config.applemusic, {
                  access_token: "",
                  isConnected: !1,
                }),
                shz.ux.fire("musickit:connection", { isConnected: !1 }));
            }
          ),
          window.addEventListener("storage", function (n) {
            if (n.key == e && n.newValue != n.oldValue) {
              var s = shz.storage.local.get(e),
                c = s && s.access_token,
                o = !!c;
              _extends(t.config.applemusic, {
                access_token: c,
                isConnected: o,
              }),
                shz.ux.fire("musickit:connection", { isConnected: o });
            }
          }));
      })(t);
  });
})();
function _extends() {
  return (_extends =
    Object.assign ||
    function (a) {
      for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var c in e)
          Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c]);
      }
      return a;
    }).apply(this, arguments);
}
shz.common.namespace("meta").create = function () {
  var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
    e = arguments.length > 2 ? arguments[2] : void 0,
    c = e.strings,
    n = e.langs,
    s = e.langpath,
    m = e.language,
    o = e.origin,
    r = t.match(/\/([^\/$]*)/)[1];
  a = _extends(
    {
      title: c["website_meta_title_".concat(r)],
      subject: c["website_meta_title_".concat(r)],
      text: c["website_meta_desc_".concat(r)],
      href: "https://www.shazam.com".concat(s, "/").concat(r),
      image:
        c["website_meta_image_".concat(r)] ||
        "/resources/c47e76ada091c1b47c0e8cb0f726d0320c47375a/shazambrand.jpg",
      twitter: c["website_meta_desc_".concat(r)],
    },
    a
  );
  try {
    (a.canonicalurl = a.url || a.href || "https://www.shazam.com/".concat(t)),
      (a.alternatepath = a.canonicalurl
        .replace("https://www.shazam.com".concat(s), "")
        .replace("https://www.shazam.com", "")),
      (a.canonicalurl = a.canonicalurl.replace(
        /^https:\/\/www\.shazam\.com/,
        o
      )),
      a.image &&
        "/" === a.image.charAt(0) &&
        (a.image = "https://www.shazam.com".concat(a.image)),
      a.hasamphtml &&
        ((a.amphtml = a.canonicalurl.replace(
          /^https:\/\/([a-z]*)\.shazam\.com/,
          "https://$1.shazam.com/amp"
        )),
        a.amphtml.match(/\/amp$/) && (a.amphtml += "/"));
  } catch (e) {
    console.error(e),
      (a.canonicalurl = "https://www.shazam.com/".concat(t)),
      (a.alternatepath = a.canonicalurl
        .replace("https://www.shazam.com".concat(s), "")
        .replace("https://www.shazam.com", ""));
  }
  try {
    a.subject = shz.common.stripHTML(a.subject);
  } catch (a) {}
  return _extends(a, { langs: n, language: m, langCountry: n[m] }), a;
};
var ns = shz.common.namespace("langs");
shz.common.merge(ns, {
  cs: "cs-CZ",
  de: "de-DE",
  el: "el-GR",
  en: "en-US",
  gb: "en-GB",
  es: "es-ES",
  fr: "fr-FR",
  hi: "hi-IN",
  id: "id-ID",
  it: "it-IT",
  ja: "ja-JP",
  ko: "ko-KR",
  nl: "nl-NL",
  pl: "pl-PL",
  pt: "pt-PT",
  "pt-br": "pt-BR",
  ru: "ru-RU",
  tr: "tr-TR",
  zh: "zh-CN",
  "zh-tw": "zh-TW",
});
var ns = shz.common.namespace("country");
shz.common.merge(ns, {
  WORLD: "World",
  GLOBAL: "Global",
  AF: "Afghanistan",
  AX: "Aland Islands",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
  AG: "Antigua and Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia",
  BQ: "Bonaire, Sint Eustatius and Saba",
  BA: "Bosnia and Herzegovina",
  BW: "Botswana",
  BV: "Bouvet Island",
  BR: "Brazil",
  BAT: "British Antarctic Territory",
  IO: "British Indian Ocean Territory",
  BN: "Brunei Darussalam",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BU: "Burma",
  BI: "Burundi",
  BYL: "Byelorussian",
  CV: "Cabo Verde",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  CT: "Canton and Enderbury Islands",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CX: "Christmas Island",
  CC: "Cocos (Keeling) Islands",
  CO: "Colombia",
  KM: "Comoros",
  CD: "Congo",
  CG: "Congo",
  CK: "Cook Islands",
  CR: "Costa Rica",
  CI: "C�te d'Ivoire",
  HR: "Croatia",
  CU: "Cuba",
  CW: "Cura�ao",
  CY: "Cyprus",
  CZ: "Czech Republic",
  CS: "Czechoslovakia",
  DY: "Dahomey",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  NQ: "Dronning Maud Land",
  TP: "East Timor",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  ET: "Ethiopia",
  FK: "Falkland Islands",
  FO: "Faroe Islands",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  FX: "France, Metropolitan",
  FAI: "French Afars and Issas",
  GF: "French Guiana",
  PF: "French Polynesia",
  FQ: "French Southern and Antarctic Territories",
  TF: "French Southern Territories",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  DD: "German Democratic Republic",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GEI: "Gilbert and Ellice Islands",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard Island and McDonald Islands",
  VA: "Holy See",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle of Man",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JE: "Jersey",
  JT: "Johnston Island",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KP: "Korea (the Democratic People's Republic of)",
  XK: "Kosovo",
  KR: "South Korea",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Lao People's Democratic Republic",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MK: "Macedonia",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  FM: "Micronesia (Federated States of)",
  MI: "Midway Islands",
  MD: "Moldova (the Republic of)",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  AN: "Netherlands Antilles",
  NT: "Neutral Zone",
  NC: "New Caledonia",
  NH: "New Hebrides",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  MP: "Northern Mariana Islands",
  NO: "Norway",
  OM: "Oman",
  PC: "Pacific Islands (Trust Territory)",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestine, State of",
  PA: "Panama",
  PZ: "Panama Canal Zone",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  RE: "R�union",
  RO: "Romania",
  RU: "Russia",
  RW: "Rwanda",
  BL: "Saint Barth�lemy",
  SH: "Saint Helena, Ascension and Tristan da Cunha",
  KN: "Saint Kitts and Nevis",
  LC: "Saint Lucia",
  MF: "Saint Martin (French part)",
  PM: "Saint Pierre and Miquelon",
  VC: "Saint Vincent and the Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome and Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  CSM: "Serbia and Montenegro",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SK: "Sikkim",
  SG: "Singapore",
  SX: "Sint Maarten (Dutch part)",
  SLK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  GS: "South Georgia and the South Sandwich Islands",
  SS: "South Sudan",
  RH: "Southern Rhodesia",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SJ: "Svalbard and Jan Mayen",
  SZ: "Swaziland",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syrian Arab Republic",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "Tanzania",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad and Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks and Caicos Islands",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: "United Kingdom",
  UM: "United States Minor Outlying Islands",
  PU: "United States Miscellaneous Pacific Islands",
  US: "United States",
  HV: "Upper Volta",
  UY: "Uruguay",
  SU: "USSR",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Viet Nam",
  VD: "Viet-Nam, Democratic Republic of",
  VG: "Virgin Islands (British)",
  VI: "Virgin Islands (U.S.)",
  WK: "Wake Island",
  WF: "Wallis and Futuna",
  EH: "Western Sahara*",
  YE: "Yemen",
  YD: "Yemen, Democratic",
  YU: "Yugoslavia",
  ZR: "Zaire",
  ZM: "Zambia",
  ZW: "Zimbabwe",
});
var ns = shz.common.namespace("en-US");
shz.common.merge(ns, {
  smartling: {
    string_format: "NONE",
    download_format: "ESCAPE_UNICODE",
    placeholder_format_custom: ["(\\{.*?\\}|<.*?>)"],
  },
  website_share: "Share",
  website_copy_link: "Copy Link",
  website_copy_link_successful: "Successfully copied!",
  website_copy_link_unsuccessful: "Could not copy the link.",
  website_play: "Play",
  website_pause: "Pause",
  website_showmore: "Show More",
  website_showmore_songs: "Show more songs",
  website_showmore_artists: "Show more artists",
  website_showless: "Show Less",
  website_backtotop: "Back To Top",
  website_seemore: "See More",
  website_goto_song: "Go to Song",
  website_goto_artist: "Go to Artist",
  website_back: "Back",
  website_applemusic: "Apple Music",
  website_facebook: "Facebook",
  website_twitter: "Twitter",
  website_viber: "Viber",
  website_error_ops: "Something went wrong :(",
  website_error_feed:
    "Sorry, something is not working right now. Please try again later.",
  website_error_adblock:
    "If you have ad block on, it may be causing a problem.",
  website_error_sorry: "Oops! We're sorry.",
  website_error_notfound: "The page you requested was not found.",
  website_error_invalidparam:
    "Seems like we're missing data needed to load this page.",
  website_error_catchall:
    "We encountered a problem. We hope to have it fixed soon.",
  website_error_notsupported:
    "This feature is currently not supported on our website. Please open this link on a mobile device with the newest version of the Shazam app.",
  website_alreadyhave: "Already have Shazam?",
  website_apps: "Apps",
  website_amoffer: "Apple Music Offer",
  website_charts: "Charts",
  website_download: "Download Shazam",
  website_open: "Open Shazam",
  website_search: "Search",
  website_close: "Close",
  website_myshazam: "My Library",
  website_myshazam_shazams: "Shazams",
  website_footer: "Shazam Footer",
  website_footer_company: "Company",
  website_footer_legal: "Legal",
  website_footer_aboutshazam: "About Us",
  website_footer_careers: "Careers",
  website_footer_policy: "Manage Your Data",
  website_footer_help: "Help",
  website_footer_help_apple: "Help for Apple Devices",
  website_footer_help_android: "Help for Android Devices",
  website_footer_play_full: "Play full songs in Shazam",
  website_header_menu_expand: "Expand Menu",
  website_header_menu_collapse: "Collapse Menu",
  website_download_app: "Download App",
  website_download_the_app: "Download the app",
  website_download_identify: "Identify songs around you on the go",
  website_download_free_app: "Download the free Shazam app",
  website_download_identify_save:
    "Identify and save all your songs in one place",
  website_download_scan_code: "Scan the code with your phone",
  website_download_scan_code_desc:
    "Use your phone's camera to scan and download the free Shazam app",
  website_download_available:
    "Available on <a href='{ios_url}'>iOS</a>, <a href='{android_url}'>Android</a> and <a href='{more_url}'>more devices</a>",
  website_download_redirect_ios: "Redirecting to App Store",
  website_download_redirect_android: "Redirecting to Google Play",
  website_cookiepolicy_message:
    "We use cookies - by using this site you agree to our",
  website_cookiepolicy_link: "Apple Privacy Policy",
  website_footer_terms: "Terms",
  website_footer_privacy: "Privacy",
  website_footer_followus: "Follow Us",
  website_footer_copyrightPt1:
    "© Copyright {current_year} Apple Inc. and its affiliates",
  website_footer_copyrightPt2: "All rights reserved.",
  website_footer_supplier_respons: "Supplier Responsibility",
  website_language_cs: "Čeština",
  website_language_de: "Deutsch",
  website_language_el: "Eλληνικά",
  website_language_en: "English",
  website_language_gb: "English (UK)",
  website_language_es: "Español",
  website_language_fr: "Français",
  website_language_hi: "हिन्दी",
  website_language_id: "Bahasa Indonesia",
  website_language_it: "Italiano",
  website_language_ja: "日本語",
  website_language_ko: "한국어",
  website_language_nl: "Nederlands",
  website_language_pl: "Polski",
  website_language_pt: "Português",
  "website_language_pt-br": "Português (BR)",
  website_language_ru: "Русский язык",
  website_language_tr: "Türkçe",
  website_language_zh: "中文",
  "website_language_zh-tw": "繁體中文",
  website_lyrics: "Lyrics",
  website_lyrics_writers: "Writers",
  website_lyrics_copyright: "Copyright",
  website_lyrics_provider: "Lyrics Licenced & Provided by LyricFind",
  website_videos: "Music Video",
  website_artist_topsongs: "Top Songs By {artist_name}",
  website_similarsongs: "Similar Songs",
  website_charts_global: "Global",
  website_charts_cities: "Cities",
  website_charts_genres: "Genres",
  website_charts_search_country: "Search Country",
  website_charts_search_city: "Search City",
  website_charts_description: "The most Shazamed tracks in the past 7 days",
  website_charts_description_global:
    "The most Shazamed tracks in the world this week",
  website_charts_description_top200:
    "The most Shazamed tracks in {country} this week",
  website_charts_description_top50:
    "The most Shazamed tracks in {city} this week",
  website_charts_description_discovery:
    "Artists on the move and their trending tracks this week",
  website_charts_position_on_chart:
    "<strong>#{position}</strong> {chart_title}",
  website_charts_download_csv: "Download CSV",
  website_shazam: "{count} Shazam",
  website_shazams: "{count} Shazams",
  website_video_views: "{count} views",
  website_search_topResult: "Top Result",
  website_search_searching: "Searching...",
  website_search_no_searches: "No Searches just yet",
  website_search_suggestion: "Search for your favorite artists or songs",
  website_search_recent: "Recent Searches",
  website_search_clear_recent: "Clear Recent Searches",
  website_search_artist_results: "Number of artist results: {count}",
  website_search_track_results: "Number of song results: {count}",
  website_artists: "Artists",
  website_artist: "Artist",
  website_songs: "Songs",
  website_search_input: "Search for music",
  website_search_notFound: "We couldn't find any results matching {query}",
  website_search_results: "Search results",
  website_search_retry:
    "Please make sure your words are spelled correctly, or try using different keywords",
  website_search_skiptoinput: "Skip to Search Input",
  website_search_skiptoresults: "Skip to Search Results",
  website_get: "Get",
  website_login: "Log in",
  website_logout: "Sign Out",
  website_login_info:
    "Sign in with the same account you use on your mobile app. You can check this on the apps Settings page.",
  website_fb_pic: "Facebook Profile Picture",
  website_fb_comments: "Comments",
  website_offline: "It appears you're offline. Please try again later.",
  website_auth_retry: "Retry",
  website_auth_cancel: "Cancel",
  website_auth_offline_state: "Something isn't working here. Try again?",
  website_auth_offline_state_noretry:
    "Something isn't working here. Please try again later.",
  website_authenticate_facebook: "Sign in with Facebook",
  website_authenticate_facebook_title:
    "We’re changing the way your Shazams are saved.",
  website_authenticate_facebook_desc:
    "Shazam accounts created with Facebook will soon no longer be supported. Create a new account on the latest version of the Shazam app to back up your music.",
  website_authenticate_facebook_continue: "Or continue with Facebook for now",
  website_authenticate_google: "Sign in with Google",
  website_authenticate_apple: "Sign in with Apple",
  website_authenticate_popupblocker:
    "Login failed. Please ensure popups are not blocked and try again.",
  website_error_reenteremail: "Please re-enter your email address.",
  website_myshazam_dip: "Download in progress...",
  website_myshazam_pw: "Please wait",
  website_myshazam_info_tooltip:
    "Only supported on desktop, Safari on iOS devices and Chrome on Android devices",
  website_myshazam_nologged_title: "All your Shazams saved in one place",
  website_myshazam_notags_title: "No Shazams yet",
  website_myshazam_notags:
    "Start discovering songs on the Shazam app and make sure you’re signed in with the same app account here.",
  website_privacy_nologged_link:
    "<span>Learn more about</span> Shazam & Privacy",
  website_privacy_header: "Shazam protects your data and puts you in control",
  website_privacy_header_1: "Shazam & Privacy",
  website_privacy_header_2:
    "Shazam is designed to protect your information and enable you to choose what you share.",
  website_privacy_header_3:
    "We built this page to answer the questions you may have regarding your Shazam data—and show you how to easily manage your data.",
  website_privacy_body_title: "What data do we collect and how do we use it?",
  website_privacy_body_1_update:
    "Shazam collects information about you when you interact with our sites or apps. Whether your Shazam data is associated with you depends on whether you use Shazam with an account. If you use Shazam with an account, your Shazam data will be associated with your account credentials (for example, your email address or Apple ID). If you use Shazam without an account, your Shazam data will only be associated with a Shazam ID which is non-personally identifying.",
  website_privacy_body_1:
    "Shazam collects information about you when you interact with our sites or apps. ",
  website_privacy_body_3: "Shazam collects the following:",
  website_privacy_body_4:
    "Information you provide us when you register for an account, including your email address.",
  website_privacy_body_5:
    "If you create a Shazam account using a social network to log in, or connect with Facebook or another social network via the Shazam app, we may receive some information about you from that network (e.g. your Facebook ID)",
  website_privacy_body_5_update:
    "If you create a Shazam account using a third-party service, we may receive some information about you from that network (for example, your Google ID).",
  website_privacy_body_6:
    "Information about the songs you identify using Shazam, to display the list of your discoveries in My Shazam and to provide you with recommended Music in various pages within the Shazam app.",
  website_privacy_body_6_update:
    "Information about the songs you identify using Shazam, to display the list of your discoveries and to provide you with recommended music in various pages within the Shazam app.",
  website_privacy_body_7:
    "Information about your activity in Shazam to improve the app, such as the pages you view and buttons you select, device information such as make and model, operating system version, and IP address.",
  website_privacy_body_7_update:
    "Information about your activity in Shazam to improve the app, such as the pages you view and buttons you select, device information such as make and model, operating system version, and IP address. We may also use this information to detect fraud or misuse of the service and may approximate your location to offer Shazam charts of trending songs.",
  website_privacy_body_8:
    "You may choose to provide Shazam with permission to collect your location while you are using the app. We use location data to improve the quality of the service and to compile lists of trending songs in different countries and cities.",
  website_privacy_body_8_update:
    "You may choose to provide Shazam with permission to collect your location while you are using the app. We use location data to show you where your songs are Shazamed and improve the quality of the service.",
  website_privacy_body_9:
    "If you turn on Notifications for Shazam, we may send you push notifications that are personalized based on your Shazam activity.",
  website_privacy_body_10:
    "For more detailed information on what information we collect and how it is collected, please visit",
  website_privacy_body_11: "Shazam Terms and Conditions.",
  website_privacy_empty_account_title: "No Data Available Yet",
  website_privacy_manage_title: "Managing your data",
  website_privacy_manage_body:
    "If you have a Shazam account, you can request to download your Shazam data, or request that your account and associated data are deleted. ",
  website_privacy_download_title: "How do you download your data?",
  website_privacy_download_subtitle:
    "To download your data, please follow this process:",
  website_privacy_download_1: "Select Download Your Data (below).",
  website_privacy_download_2:
    "This can also be known as a request to access your personal data. You will be asked to authenticate yourself by signing in to your Shazam account.",
  website_privacy_download_3:
    "You will be asked for a correspondence email address where we will send your data and confirmation.",
  website_privacy_download_4:
    "On receipt of an authenticated request, you will receive your data by email within 30 days.",
  website_privacy_download_action: "DOWNLOAD YOUR DATA",
  website_privacy_who_title: "Who do we share your data with?",
  website_privacy_who_subtitle:
    "We share de-identified, aggregate information with our partners, including the songs identified using Shazam and the city and country of each Shazam.",
  website_privacy_who_1: "We may also share your information:",
  website_privacy_who_2:
    "With service providers who perform services and functions on our behalf to help deliver the services and communicate with you.",
  website_privacy_who_3:
    "In order to comply with laws or valid legal requests for information such as a subpoena or search warrant.",
  website_privacy_who_4:
    "For more detailed information on when and how we share your information, please visit",
  website_privacy_who_5: "Shazam Terms and Conditions.",
  website_privacy_delete_title: "How do you delete your data?",
  website_privacy_delete_subtitle:
    "If you want to delete your account, please follow these steps:",
  website_privacy_delete_1:
    "First, sign out of your account on all devices (phone, tablet, desktop) before deleting your account through this portal.",
  website_privacy_delete_1_update:
    "First, sign out of your account on all devices, or on Apple devices disable iCloud syncing, before deleting your account through this portal. This can also be known as a request to erase, delete, or anonymize your personal data, which will be processed by Shazam as an account-deletion request.",
  website_privacy_delete_2: "Select Delete Your Account (below).",
  website_privacy_delete_3:
    "You will be asked to authenticate yourself by signing in to your Shazam account.",
  website_privacy_delete_3_update:
    "You will be asked to authenticate yourself by signing in with your account credentials.",
  website_privacy_delete_4:
    "On receipt of an authenticated deletion request, Shazam will delete your account and will delete the data we hold that is associated with you—including your email address and, if you signed in with Facebook, our records of your Facebook ID and any personal data shared with us via the Facebook platform.",
  website_privacy_delete_4_update:
    "On receipt of an authenticated deletion request, Shazam will delete your account and will delete the data we hold that is associated with you. If you use Shazam with iCloud, deleting your account will delete your Shazams from iCloud, but will not delete your associated Apple ID. The deletion process will be completed within 30 days.",
  website_privacy_delete_5:
    "Shazam may retain data that has been deidentified and is no longer associated with you.",
  website_privacy_who: "Who do we share your data with?",
  website_privacy_manage: "Managing your data",
  website_privacy_managedetails:
    "To give you control of your data, and in support of the EU General Data Protection Regulation (GDPR), we offer you the ability to download your personal Shazam data that we have collected and erase your personal data.<br/><p/><p/>In order for us to authenticate you, you must have a Shazam account to be able to request data download or erasure.",
  website_privacy_how: "How do you download your data?",
  website_privacy_howdetails:
    "To download your data, please follow this process:<p/>•  On each Shazam device for which you want to request your data, sign in via email or Facebook:<p/>•  Select ‘download your data’ (below):<p/>•  You will be asked to authenticate yourself; sign in with the same credentials that you provided when signing in to your Shazam app(s):<p/>•  You will be asked for a correspondence email address where we will send your data and confirmation:<p/>•  On receipt of an authenticated request, you will receive your data by email within 30 days:<p/>",
  website_privacy_download: "DOWNLOAD YOUR DATA",
  website_privacy_how2: "How do you delete your account?",
  website_privacy_howdetails2:
    "If you wish to delete your account, please follow these steps:<p/>• First, sign out of your account on all devices (phone, tablet, desktop) before deleting your account through this portal<p/>•  Select ‘delete your account’ (below)<p/>•  You will be asked to authenticate yourself; sign in with the account you wish to delete<p/>•  On receipt of an authenticated deletion request, we will remove your account and erase your personal data associated with Shazam—including your email address and, if you signed in with Facebook, our records of your Facebook ID and any personal data shared with us via the Facebook platform. Depending on your Facebook privacy settings this may include your Public Profile, Email Address, Birthday, Friends List and Current City<p/>•  Analytics logs about how you used Shazam will not be erased, but once your account is deleted, these logs will no longer be personally identifiable<p/>•  The deletion process will be completed within 30 days<p/>",
  website_privacy_delete: "DELETE YOUR ACCOUNT",
  website_privacy_deletetitle: "Delete Your Account",
  website_privacy_deletedetails:
    "Remove all your personal data from Shazam and delete your Shazam account.",
  website_privacy_deletewhat: "What’s deleted?",
  website_privacy_deletewhatdetails_update:
    "Your Shazam account, your Shazam history and any associated personal information. If you sign in via email, your email address; if you sign in via Google, your Google ID, email address and link to your Google profile photo.",
  website_privacy_deletewhatnot: "What’s not deleted?",
  website_privacy_deletewhatnotdetails:
    "Analytics logs about how you used Shazam will not be erased, but once your account is deleted, these logs will no longer be personally identifiable.",
  website_privacy_deletewhatnotdetails_update:
    "Analytics logs about how you used Shazam will not be erased, but once your account is deleted, these logs will no longer be personally identifiable. If you use Shazam with iCloud, deleting your account will not delete your associated Apple ID.",
  website_privacy_deletehow: "How do I delete my account?",
  website_privacy_deletehowdetails:
    "First, sign out of your Shazam account on all devices (phone, tablet, desktop) before deleting your account through this portal. Second, click “Delete account,” below. Shazam will process your request within 30 days.",
  website_privacy_delete_confirm: "Good News!",
  website_privacy_delete_confirmdetails:
    " We have successfully received your request to delete your account.",
  website_privacy_delete_confirmnext: "What happens next?",
  website_privacy_delete_confirmnextdetails_unrecoverable:
    "If we delete your personal information, we will both render certain personal information about you permanently unrecoverable and also deidentify certain personal information.",
  website_privacy_delete_confirmnextdetails:
    "This request may take up to 30 days.<br><br>Please sign out of your Shazam apps; otherwise, you will be signed out automatically once your account is deleted.<br><br>If you have any further questions, please <a data-shz-beacon='providerdesc=privacyapple,type=nav' href='https://www.apple.com/legal/privacy/contact/'>Contact Privacy</a>  ",
  website_privacy_delete_encrypted:
    "Your Shazam data is end-to-end encrypted so it cannot be accessed by Shazam or Apple.",
  website_privacy_delete_goto_apple_privacy:
    "If you want to permanently delete your Apple account and associated data from all Apple apps and services, please visit <a href='https://privacy.apple.com'>Apple Privacy </a>.",
  website_privacy_gohome: "GO HOME",
  website_privacy_processing: "PROCESSING",
  website_privacy_ccpa_title: "Learn about your data categories",
  website_privacy_ccpa_subtitle:
    "To download your Data Categories, please follow these steps:",
  website_privacy_ccpa_details_1:
    "Select Download Your Data Categories (below).",
  website_privacy_ccpa_details_2:
    "You will be asked to authenticate yourself by signing in to your Shazam Account.",
  website_privacy_ccpa_details_3:
    "You will be asked for a correspondence email address where we will send a link to access your Data Categories.",
  website_privacy_ccpa_details_4:
    "On receipt of an authentication request, you will receive your Data Categories email within 30 days.",
  website_privacy_ccpa_details_submit_1:
    "Receive an email with a link to access your Shazam Data Categories.",
  website_privacy_ccpa_details_submit_2: "What data is included?",
  website_privacy_ccpa_details_submit_3:
    "A pdf summary of the categories of personal information that Shazam collects.",
  website_privacy_ccpa_details_submit_4:
    "How do I get my Data Categories sent to me?",
  website_privacy_ccpa_details_submit_5:
    "Enter the email address where you would like your information sent, and click “Send My Data Categories” below.",
  website_privacy_ccpa_details_submit_6:
    "Please note: If you have made a request to download your Data Categories, please ensure that you have received it before making a request to delete your account. If you make an account deletion request before your Data Categories have been received, the deletion will take precedence, canceling any pending download requests.",
  website_privacy_ccpa_details_submit_action: "SEND MY DATA CATEGORIES",
  website_privacy_ccpa_action: "DOWNLOAD YOUR DATA CATEGORIES",
  website_privacy_ccpa_details_submit_title: "Download Your Data Categories",
  website_privacy_ccpa_confirmwhatdetails:
    "Within 30 days, you will receive an email (sent to <span>{email}</span>) containing your Data Categories as a downloadable attachment.<br><br>If you don’t receive an email with your Data Categories or you have further questions, please <a data-shz-beacon='providerdesc=privacyapple,type=nav' href='https://www.apple.com/legal/privacy/contact/'>Contact Privacy</a>",
  website_privacy_ccpa_confirmdetails:
    "We have received the request to download your Shazam Data Categories.",
  website_privacy_ccpa_encrypted:
    "Any end-to-end encrypted data will not be returned as Apple cannot access it.",
  website_privacy_login_download: "Download your data",
  website_privacy_login_delete: "Delete your account",
  website_privacy_downloadtitle: "Get a Copy of Your Data",
  website_privacy_downloaddetails:
    "Receive an email containing your Shazam data that has been collected.",
  website_privacy_downloadwhat: "What data is included in the report?",
  website_privacy_downloadwhatdetails_update:
    "Your Shazam history, your activity logs and personal information depending on your sign-in method: If you sign in via email, we store your email address; if you sign in via Google, we store your Google ID, email address and a link to your Google profile photo.",
  website_privacy_downloadhow: "How do I get my Shazam data sent to me?",
  website_privacy_downloadhowdetails:
    "Enter the email address where you would like your information sent, and click “Send my data,” below.",
  website_privacy_downloadsend: "SEND MY DATA",
  website_privacy_download_confirm: "Almost there!",
  website_privacy_download_confirmdetails:
    "We have received the request to download your data from Shazam.",
  website_privacy_download_confirmwhat: "What happens next?",
  website_privacy_download_confirmwhatdetails:
    "Within 30 days, you will receive an email (sent to <span>{email}</span>) containing your Shazam data as a downloadable attachment.<br><br>If you don’t receive an email with your Shazam data or you have further questions, please <a data-shz-beacon='providerdesc=privacyapple,type=nav' href='https://www.apple.com/legal/privacy/contact/'>Contact Privacy</a>",
  website_privacy_download_view_instr:
    "If your download does not start automatically in a few seconds, please <a data-shz-cmd='retry' aria-label='retry download' tabindex='0' role='button'>click here.</a>",
  website_privacy_warning:
    "Please note: If you have made a request to download your data, please ensure that you have received it before making a request to delete your account. If you make an account deletion request before your data has been received, the deletion will take precedence, canceling any pending download requests.",
  website_privacy_failed: "Oops",
  website_privacy_failedbody:
    "We’re sorry, but something went wrong.<br/><br/>We were unable to process your request at this time. Please try again or if you encounter any issue, <a data-shz-beacon='providerdesc=privacyapple,type=nav' href='https://www.apple.com/legal/privacy/contact/'>Contact Privacy</a>",
  website_privacy_failedretry: "TRY AGAIN",
  website_privacy_loginretry: "LOGIN",
  website_privacy_goprivacy: "GO TO PRIVACY PAGE",
  website_privacy_downloadretry:
    "Attempting to download your data. Please wait ...",
  website_privacy_undowarning:
    "Note: This action is permanent and cannot be undone.",
  website_privacy_warning_a11y: "Warning",
  website_privacy_transfer_title: "Shazam is joining Apple",
  website_privacy_transfer_body:
    "Your Shazam data will be moved to Apple and aligned with Apple’s privacy practices.",
  website_privacy_transfer_body2:
    'If you want to delete your Shazam account, you can do so by tapping "Delete account".',
  website_privacy_transfer_body3:
    "Once the request is authenticated, we will remove your account and erase your personal data associated with Shazam—including your email address and, if you signed in with Facebook, our records of your Facebook ID and any personal data shared with us via the Facebook platform. Your Shazams in the app will remain. However, they won’t sync between devices and you won’t be able to access them if you reinstall Shazam. If you continue to use Shazam without an account, your Shazam data won’t be associated with you.",
  website_privacy_transfer_body4:
    "Analytics logs about how you used Shazam will not be erased, but once your account is deleted, these logs will no longer be personally identifiable.",
  website_privacy_transfer_delete: "DELETE ACCOUNT",
  website_privacy_transfer_ok: "OK, GOT IT",
  website_privacy_transfer_deleteconfirm:
    "Are you sure you want to delete your Shazam data?",
  website_privacy_transfer_delete_ok: "YES, DELETE",
  website_privacy_transfer_delete_cancel: "CANCEL",
  website_privacy_transfer_delete_success:
    "Thank you. Your data will be deleted within 60 days.",
  website_privacy_wrongaccount:
    "It seems that you are using an incorrect account to access your data. If you have another account, please log in with that one and try again. If your problem persists, please contact us at ",
  website_privacy_download_expired:
    "It seems your download data file has expired. Please visit http://www.shazam.com/privacy and request your data again. If you encounter any issue, contact us at ",
  website_privacy_request_in_process:
    "You have already requested a copy of your Shazam data. The data is currently being processed to download. Within 30 days, you will receive an email (sent to  <span>{email}</span>) containing your Shazam data as a downloadable attachment. <br><br>If you don’t receive an email with your Shazam data or you have further questions, please <a data-shz-beacon='providerdesc=privacyapple,type=nav' href='https://www.apple.com/legal/privacy/contact/'>Contact Privacy</a>",
  website_privacy_summary_v2_header_1: "Shazam & Privacy",
  website_privacy_summary_v2_header_2: "Using Shazam Without an Account",
  website_privacy_summary_v2_header_3: "Using Shazam with an Account",
  website_privacy_summary_v2_header_4: "Information Collected About You",
  website_privacy_summary_v2_header_5: "Apple Music and Spotify",
  website_privacy_summary_v2_header_5_1: "Shazam Web Browser Extension",
  website_privacy_summary_v2_header_6: "Push Notifications",
  website_privacy_summary_v2_header_6_1: "Diagnostics",
  website_privacy_summary_v2_header_7: "Sharing with Third Parties",
  website_privacy_summary_v2_header_8: "Managing Your Data",
  website_privacy_summary_v2_paragraph_1a:
    "Shazam is designed to protect your information and enable you to choose what you share.",
  website_privacy_summary_v2_paragraph_1a_bullet_I:
    "•   You can use Shazam with or without an account. When you use Shazam with an account, your Shazams are saved to the account and your Shazam data will be associated with you. If you use Shazam without an account, your Shazam data will be associated with a Shazam ID that is not associated with you.",
  website_privacy_summary_v2_paragraph_1a_bullet_II:
    "•   On Apple devices, when you are signed in to your Apple ID, your Shazams use iCloud and are associated with you.",
  website_privacy_summary_v2_paragraph_1a_bullet_II_ios:
    "•   When you are signed in to your Apple ID, your Shazams use iCloud and are associated with you.",
  website_privacy_summary_v2_paragraph_1a_bullet_II_android:
    "•   You can create an account using an email address or third-party service.",
  website_privacy_summary_v2_paragraph_1a_bullet_III:
    "•   On Android devices, you can create an account using an email address or third-party service.",
  website_privacy_summary_v2_paragraph_1a_bullet_IV:
    "•   We collect information about your Shazam activity, such as the songs you identify using the service, to display the list of your discoveries in your Library, and to provide you with recommended music.",
  website_privacy_summary_v2_paragraph_1a_bullet_V:
    "•   We also collect information about how you use the app, such as which pages you view and buttons you tap, to improve the service and user experience for all users.",
  website_privacy_summary_v2_paragraph_1b:
    "Protecting the privacy and security of your information is a priority for everyone at Apple and Shazam. We work hard to collect only the data we need to make your experience better, and when we do collect data we believe it’s important for you to know what we’re collecting and why we need it, so you can make informed choices.",
  website_privacy_summary_v2_paragraph_2:
    "If you use Shazam without creating an account, the information collected is not associated with you. Instead, your data is stored against a Shazam ID that is not linked to any of your personal information. You can reset your Shazam ID by going to Shazam Settings > About > Reset Installation ID. When using Shazam without an account, if you uninstall and reinstall the app, the list of songs you previously identified will be removed. If you want to retain that history or sync it across devices, you can choose to use Shazam with an account.",
  website_privacy_summary_v2_paragraph_3a:
    "If you choose to use Shazam with an account, the information collected will be associated with you.",
  website_privacy_summary_v2_paragraph_3b:
    "On Apple devices, when you are signed in, your Shazams will use iCloud and be associated with your Apple ID. You can delete your Shazams from iCloud by deleting them within the Shazam app while signed in. On iOS and iPadOS, you can disable iCloud syncing by going to Settings > [your name] > iCloud and tapping to turn off Shazam in the list of Apps Using iCloud. When you disable iCloud syncing, the Shazams saved to iCloud will remain in your iCloud account, but new Shazams will not be added.",
  website_privacy_summary_v2_paragraph_3b_ios:
    "When you are signed in, your Shazams will use iCloud and be associated with your Apple ID. You can delete your Shazams from iCloud by deleting them within the Shazam app while signed in. On iOS and iPadOS, you can disable iCloud syncing by going to Settings > [your name] > iCloud and tapping to turn off Shazam in the list of Apps Using iCloud. When you disable iCloud syncing, the Shazams saved to iCloud will remain in your iCloud account, but new Shazams will not be added. You can reset your Shazam ID by turning off iCloud syncing, then going to Shazam Settings > About > Reset Installation ID.",
  website_privacy_summary_v2_paragraph_3c:
    "On iOS and iPadOS, you can turn off iCloud syncing by going to Settings > [your name] > iCloud and tapping to turn off Shazam in the list of apps and services. When you disable iCloud syncing, the Shazams saved to iCloud will remain in your iCloud account, but new Shazams will not be added. You can reset your Shazam ID by turning off iCloud syncing, then going to Shazam Settings > About > Reset Installation ID.",
  website_privacy_summary_v2_paragraph_3d:
    "On Android devices, you can create an account using an email address or third-party service. If you sign out of your account, your Shazam data will remain in your account, but new Shazams will not be added. You can reset your Shazam ID by signing out of Shazam, then going to Shazam Settings > About > Reset Installation ID.",
  website_privacy_summary_v2_paragraph_3d_android:
    "You can create an account using an email address or third-party service. If you sign out of your account, your Shazam data will remain in your account, but new Shazams will not be added. You can reset your Shazam ID by signing out of Shazam, then going to Shazam Settings > About > Reset Installation ID.",
  website_privacy_summary_v2_paragraph_4a:
    "We collect data about which songs you identify in Shazam to display them on your Library page and to recommend songs you may like on the Library page and the Result page within the app.",
  website_privacy_summary_v2_paragraph_4b:
    "We also collect information about your activity in Shazam to improve the app, including the pages you view and buttons you tap, device information such as make and model, operating system version, and IP address. This information can help us identify places in the app where users are encountering problems or popular features to make more prominent. We may also use this information to detect fraud or misuse of the service and may approximate your location to offer Shazam charts of trending songs.",
  website_privacy_summary_v2_paragraph_4b_2:
    "We may use deidentified, aggregate information, such as the songs identified using Shazam and the city and country of each Shazam, to support related Apple products and services.",
  website_privacy_summary_v2_paragraph_4c:
    "You may choose to provide Shazam with access to your device’s location while you are using the app. We use location data to show you where your songs were Shazamed, display upcoming events in your area, and improve the quality of the service. You can turn off Location Services for Shazam at any time by going to Settings > Privacy > Location Services, and setting location access for Shazam to Never.",
  website_privacy_summary_v2_paragraph_4c_android:
    "You may choose to provide Shazam with access to your device’s location while you are using the app. We use location data to show you where your songs were Shazamed, display upcoming events in your area, and improve the quality of the service. You can turn off Location Services for Shazam at any time by going to Settings > Apps > Shazam > App Settings > Permissions > Location , and setting location access for Shazam to off",
  website_privacy_summary_v2_paragraph_5a:
    "If you use an account and link Shazam with Apple Music or Spotify, we keep a record that your accounts are linked. Information about your Apple Music or Spotify account is used by Shazam to provide features such as allowing you to add songs you Shazam to your Apple Music or Spotify playlists. If you use Shazam without an account, linking Apple Music or Spotify does not result in the provision of identifiable information to us.",
  website_privacy_summary_v2_paragraph_5b:
    "On Apple devices, Apple Music is automatically linked to Shazam while you have an Apple Music subscription. To manage how Shazam is linked with Apple Music or Spotify, open Shazam and go to Settings.",
  website_privacy_summary_v2_paragraph_5b_ios:
    "Apple Music is automatically linked to Shazam while you have an Apple Music subscription. To manage how Shazam is linked with Apple Music or Spotify, open Shazam and go to Settings.",
  website_privacy_summary_v2_paragraph_5b_android:
    "To manage how Shazam is linked with Apple Music or Spotify, open Shazam and go to Settings.",
  website_privacy_summary_v2_paragraph_5_1a:
    "When you download and install the Shazam extension to your web browser, we collect information about how you use the extension, such as your Shazams, to improve the service and user experience for all users. The information collected is not associated with you.",
  website_privacy_summary_v2_paragraph_6:
    "If you turn on Notifications for Shazam, we may send you push notifications related to your Shazam activity.",
  website_privacy_summary_v2_paragraph_6_1:
    "Diagnostic information, such as crash reports, is collected and delivered to Shazam by Crashlytics. Diagnostic information may include details about hardware and operating system specifications, performance statistics, and data about how you use Shazam. For more information about Crashlytics, visit {crashlyticsAnchorElement}.",
  website_privacy_summary_v2_paragraph_7:
    "We share deidentified, aggregate information, such as the songs identified using Shazam and the city and country of each Shazam, with our partners, including music labels and artists. This information allows our partners to understand which tracks are encountering success in the market.",
  website_privacy_summary_v2_paragraph_8a:
    "You can manage your data at {shazamPrivacyAnchorElement}.",
  website_privacy_summary_v2_paragraph_8b:
    "At all times, information collected by Apple will be treated in accordance with Apple’s Privacy Policy, which can be found at {applePrivacyAnchorElement}.",
  website_emailvalidation_redirecting: "We're redirecting you,",
  website_emailvalidation_pleasewait: "please wait...",
  website_emailvalidation_waiting: "Still waiting?",
  website_emailvalidation_clickformanualreload: "Reload the page",
  website_emailvalidation_wrongdevice_title: "Oops, sorry it didn't work.",
  website_emailvalidation_wrongdevice_subtitle:
    "You need to open this link in the same device and browser you tried to log in from.",
  website_emailvalidation_wrongdevice_subtext:
    "Please note that this link is only valid once and for a limited time.",
  website_emailvalidation_wrongdevice_help_label: "Need Help?",
  website_emailvalidation_wrongdevice_help_click: "Click here",
  website_emailvalidation_startagain: "Start again",
  website_emailvalidation_trylater:
    "Please try again or come back a little bit later.",
  website_apps_iosandroid_title: "Shazam for iOS & Android",
  website_apps_iosandroid_paragraph:
    "Find the name of any song and artist in seconds. Listen and add to Apple Music or Spotify playlists. Follow along with time-synced lyrics. Watch music videos from Apple Music or YouTube. Discover the most Shazamed tracks of the week around the world with Shazam charts.",
  website_apps_watch_title: "Shazam for Apple Watch & Android Wear",
  website_apps_watch_subtitle:
    "Now you can always Shazam on time. Tap to see what song is playing and watch the lyrics unfold, right on your wrist.",
  website_apps_watch_paragraph:
    "Download Shazam for iPhone or Android and connect your watch.",
  website_apps_mac_title: "Shazam for macOS",
  website_apps_mac_subtitle: "Teach your Mac a few new tricks.",
  website_apps_mac_paragraph:
    "Discover, buy and share your favourite music right on your computer, with a personalised playlist created as you go.",
  website_apps_download_subtitle: "Get it for free in the App Store.",
  website_apps2_download_title:
    "Identify, listen and discover songs with the Shazam app",
  website_apps2_download_subtitle:
    "Listen and add songs you discover to your Apple Music or Spotify playlists. Sing along with time-synced lyrics. Watch your favorite music videos with Apple Music or YouTube.",
  website_apps2_download_qr_title: "Download the free App",
  website_apps2_download_qr_subtitle:
    "Scan the code with your smart phone camera to download the free app",
  website_apps2_download_button: "Download the app",
  website_apps2_download_more_ways: "More ways to identify and discover music",
  website_apps2_card_cc_title: "Shazam on iOS Control Center",
  website_apps2_card_cc_subtitle:
    "Identify songs directly from Control Center on your iPhone or on your iPad.",
  website_apps2_card_popup_title: "Pop Up Shazam on Android",
  website_apps2_card_popup_subtitle:
    "Bring Shazam to your favorite Android apps with Pop Up Shazam",
  website_apps2_card_notification_title: "Shazam on Android Notification",
  website_apps2_card_notification_subtitle:
    "Use Android Notification to identify music with a swipe and tap.",
  website_apps2_card_snapchat_title: "Shazam on Snapchat",
  website_apps2_card_snapchat_subtitle:
    "Identify songs playing around you while on Snapchat",
  website_apps2_card_watch_title: "Shazam from your wrist",
  website_apps2_card_watch_subtitle:
    "Shazam is available for both Apple Watch and Android Wear",
  website_apps2_card_extension_title_A: "Shazam Browser Add-on",
  website_apps2_card_extension_title_B: "Shazam Browser Extension",
  website_apps2_card_extension_subtitle_A:
    "Identify songs in seconds from your web browser",
  website_apps2_card_extension_subtitle_B_chrome_only:
    "Identify songs from the web with the Shazam Browser extension. Available for Desktop on Google Chrome",
  website_apps2_learn_more: "Learn more",
  website_apps2_download_available_on: "Available on",
  website_apps2_download_also_available: "Also available for",
  website_apps2_install: "Install",
  website_careers_title: "Help create magic for over 100 million users",
  website_company_headline_title:
    '"Our mission is to help people recognize and engage with the world around them"',
  website_company_headline_text:
    "Shazam is a mobile app that recognises music around you. It is the best way to discover, explore and share the music you love. Shazam connects more than <strong>1 billion</strong> people. It took us 10 years to reach 1 billion Shazams and now we deliver 1 billion song results every month! It's an amazing app, available now in the Apple and Android stores. And we're always looking for new and innovative ways to delight our users.",
  website_company_history_title: "How did we get here?",
  website_company_history_2002_text:
    "Dialling “2580” on your phone and holding it up to the music was all you had to do to use Shazam. Users were sent an SMS message telling them the song title and the name of the artist.",
  website_company_history_2008_text:
    "Shazam was one of the first apps in the brand new Apple App Store.",
  website_company_history_2011_text:
    "In addition to music, the app was extended to let you Shazam TV programs and ads to get special offers and more information on what you were watching.",
  website_company_history_today_title: "Today",
  website_company_history_today_text:
    "Shazam joins the Apple family and continues to improve the music discovery journey for all of its users.",
  website_company_insight_title: "How does Shazam work?",
  website_company_insight_subtitle:
    "This is a question we get often asked. Here is a quick summary of the three main steps involved from the moment you Shazam until the magic happens.",
  website_company_insight_step1:
    "Let's say you are in a shop and you like the music you're hearing. Start the app and tap the Shazam button.",
  website_company_insight_step2:
    "A digital fingerprint of the audio is created and, within seconds, matched against Shazam's database of millions of tracks.",
  website_company_insight_step3:
    "You are then given the name of the track and the artist and information such as lyrics, video, artist biography, concert tickets and recommended tracks.",
  website_meta_title_home: "Shazam - Music Discovery, Charts & Song Lyrics",
  website_meta_desc_home:
    "Identify the music playing around you. Explore the music you love. Discover songs, lyrics, and artists on Shazam.",
  website_meta_title_track: "{track} {lyrics}- {artist} | Shazam",
  website_meta_title_track_wps7157:
    "{artist} - {track} {lyrics} | Shazam {lyrics2}",
  website_meta_track_keywords: "{track} lyrics, {artist} lyrics, lyrics",
  website_meta_desc_track_lyrics:
    "Lyrics to '{track}' by {artist}. Discover song lyrics from your favourite artists and albums on Shazam!",
  website_meta_desc_track_lyrics_wps7156:
    "Lyrics to '{track}' by {artist}. {lyrics}",
  website_meta_desc_track:
    "Listen to '{track}' by {artist}. Discover song lyrics from your favorite artists and albums on Shazam!",
  website_meta_desc_track_base:
    "Listen to {track} by {artist}, {shazamcount} Shazams",
  website_meta_desc_track_newrelease: "new release from {album} ",
  website_meta_desc_track_2playlists:
    "featuring on {playlist1}, and {playlist2} Apple Music playlists.",
  website_meta_desc_track_1playlist:
    "featuring on {playlist1} Apple Music playlist.",
  website_meta_share_track: "{track} - {artist}",
  website_meta_share2_track:
    "Discovered using Shazam, the music discovery app.",
  website_meta_title_artist: "{artist} - Lyrics, Playlists & Videos | Shazam",
  website_meta_desc_artist:
    "Find the song lyrics for {artist} - Top Tracks. Discover top playlists and videos from your favorite artists on Shazam!",
  website_meta_share_artist: "{artist} on Shazam",
  website_meta_share2_artist:
    "Discover lyrics and videos from {artist} on Shazam.",
  website_meta_title_chartsview: "{chart} Popular Songs - Shazam Music Charts",
  website_meta_desc_charts_global:
    "The most Shazamed tracks in the world this week. Featuring: {track1} - {artist1}, {track2} - {artist2}, {track3} - {artist3}.",
  website_meta_desc_charts_country:
    "The most Shazamed tracks in {country} this week. Featuring: {track1} - {artist1}, {track2} - {artist2}, {track3} - {artist3}.",
  website_meta_desc_charts_city:
    "The most Shazamed tracks in {city} this week. Featuring: {track1} - {artist1}, {track2} - {artist2}, {track3} - {artist3}.",
  website_meta_desc_charts_discovery:
    "Artists on the move and their trending track this week in {country}. Featuring: {track1} - {artist1}, {track2} - {artist2}, {track3} - {artist3}.",
  website_meta_desc_charts_genre:
    "The most popular {genre} tracks this week in {country}. Featuring: {track1} - {artist1}, {track2} - {artist2}, {track3} - {artist3}.",
  website_meta_fb1_chartsview: "'{chart}' Chart on Shazam",
  website_meta_fb2_chartsview:
    "Listen to new and upcoming popular songs right now with the Shazam Music Charts.",
  website_meta_twitter_track: "I used @Shazam to discover {track} by {artist}.",
  website_meta_twitter_chartsview: "'{chart}' Chart on Shazam",
  website_meta_twitter2_chartsview:
    "Listen to new and upcoming popular songs right now with the Shazam Music Charts.",
  website_meta_title_myshazam: "My Shazam - Shazam",
  website_meta_desc_myshazam:
    "See your Shazams and Follow artists. Log in with Facebook or Email.",
  website_meta_title_search: "Search - Shazam",
  website_meta_desc_search:
    "Find the lyrics to your favourite songs with Shazam's song lyric search!",
  website_meta_title_apps: "Apps - Shazam",
  website_meta_desc_apps:
    "Identify the music playing around you. Explore the music you love. Discover songs, lyrics, and artists on Shazam.",
  website_meta_title_company: "Company - Shazam",
  website_meta_desc_company: "Find out more about our company and our team.",
  website_meta_title_verify: "Artists - Shazam",
  website_meta_desc_verify: "Get an official artist account on Shazam.",
  website_meta_title_careers: "Careers - Shazam",
  website_meta_desc_careers:
    "Find out more about the roles we're currently recruiting for.",
  website_meta_title_terms: "Terms - Shazam",
  website_meta_desc_terms: "Terms",
  website_meta_title_privacy: "Privacy",
  website_meta_desc_privacy: "Privacy - Shazam",
  website_dialog_ok: "OK",
  website_dialog_cancel: "Cancel",
  website_loading: "Loading",
  website_explicit: "Explicit",
  website_playback_error:
    "There's trouble in paradise! We couldn't play this song.",
  website_track_tab_overview: "Overview",
  website_track_tab_lyrics: "Lyrics",
  website_tracklist_track: "Track",
  website_tracklist_artist: "Artist",
  website_tracklist_shazams: "Shazams",
  website_track_featuredin: "Featured In",
  website_track_album: "Album",
  website_track_new: "New",
  website_track_playlist: "Playlist",
  website_login_sign_in: "Sign in using your Shazam app account",
  website_login_placeholder: "Email Address",
  website_login_reenter_email: "Please enter a valid email address",
  website_login_captcha_error: "Please make sure you are not a robot! :)",
  website_login_continue: "Continue",
  website_login_sending_email: "Sending email...",
  website_login_check_email: "Check your email",
  website_login_check_complete_status: "Open email, tap confirm. That's it!",
  website_login_no_email: "No email?",
  website_login_send_again: "Send again",
  website_login_failed: "There was a problem sending the email.",
  website_login_failed_404:
    "We could not find an account with that email. It is either invalid or closed.",
  website_login_failed_404_try_again:
    "Please try again with a different account.",
  website_login_failed_try_again: "Try again",
  website_login_validating: "Validating email...",
  website_login_webemail_failed:
    "Please make sure that you open this link in the same browser (chrome/safari etc) that you tried to log in from.",
  website_login_or: "Or sign in with Email",
  website_login_no_account: "Don’t have an account?",
  website_login_app_signup: "Sign up using the Shazam app",
  website_updateshazam_app_heading: "UPDATE YOUR APP",
  website_updateshazam_please_update: "App Unsupported",
  website_updateshazam_supported_body:
    "This version of Shazam is no longer supported. Update now for new features and important bug fixes.",
  website_updateshazam_app_body:
    "This version of Shazam will stop working from this date.",
  website_updateshazam_app_button: "UPDATE NOW",
  website_updateshazam_device_heading: "DEVICE UNSUPPORTED",
  website_updateshazam_device_body:
    "Shazam is no longer supported on this device. Please upgrade.",
  website_updateshazam_windows:
    "Shazam is no longer supported on Windows devices, and will stop working soon. To continue using Shazam, please download the app on an iOS or an Android device.",
  website_open_in_partner: "Open in {partner}",
  emailshare_found: "Found this with {shazam}, have a listen...",
  emailshare_desc: "Discover, explore and share music you love",
  emailshare_get: "Get Shazam now",
  sc_video: "Video",
  sc_lyrics: "Lyrics",
  sc_recommended: "Recommended Songs",
  sc_see_all: "See All",
  sc_copyright_text: "© Copyright {year} Apple Inc. and its affiliates",
  sc_terms_text: "Terms",
  sc_privacy_text: "Privacy",
  sc_writers: "Writers",
  sc_copyright: "Copyright",
  website_home_shazam_name_song: "Shazam will name your song in seconds",
  website_home_featured_top_artists: "Featured Top Artists",
  website_home_featured_discovery_artists: "Featured Discovery Artists",
  website_home_global_heading_title:
    "Top songs being discovered around the world right now",
  website_home_global_heading_description:
    "See who made it on the list of the most Shazamed songs worldwide",
  website_home_global_top_200: "Global Top 200",
  website_home_global_top_200_chart: "Global Top 200 Chart",
  website_home_discovery_heading_title:
    "Rising tracks from new and upcoming artists",
  website_home_discovery_heading_subtitle: "Discovery {country}",
  website_home_discovery_tracks: "Discovery {country} Tracks",
  website_home_discovery_heading_description:
    "Be the first to listen to these future hit songs",
  website_home_featuring_artists:
    "Featuring songs from {artist1}, {artist2}, {artist3} and more",
  website_home_view_chart: "View Chart",
  website_home_view: "View",
  sc_artisthighlights: "Artist Highlights",
  sc_related_artisthighlights: "Related Highlights",
  wutang_buy: "Buy",
  wutang_open: "Open",
  wutang_open_in: "Open in",
  wutang_open_in_partner: "Open in {partner}",
  wutang_buy_on: "Buy on {partner}",
  wutang_video: "Video",
  wutang_lyrics: "Lyrics",
  wutang_tap_full_lyrics: "See Full Lyrics",
  wutang_views: "{count} views",
  wutang_recommended: "Recommended Songs",
  wutang_top_songs: "Top Songs",
  nps_recommend: "Would you recommend Shazam to friends?",
  nps_thanks: "Thank you for your time!",
  nps_thanks_new: "Thank you for your time! 😊",
  nps_done: "Done",
  nps_submit: "Submit",
  nps_screen_A_question: "How happy are you with Shazam?",
  nps_screen_A1_question: "We noticed you didn't give a great score. Why?",
  nps_screen_A1_response_1: "Shazam is generally OK",
  nps_screen_A1_response_2: "Wrong song result",
  nps_screen_A1_response_3: "No song results",
  nps_screen_A1_response_4: "Not working with background noise",
  nps_screen_A1_response_5: "Not finding genres I like",
  nps_screen_A1_response_6: "Offline or connection issues",
  nps_screen_A1_response_7: "App crashes",
  nps_screen_A1_response_8: "Something else",
  nps_meta_title: "Shazam Survey",
  website_orientation_1: "This experience does not support landscape mode.",
  website_orientation_2: "Please rotate your device.",
  website_meta_title_survey: "Shazam Survey",
  abtest_listen: "Listen",
  abtest_player_listen_on: "Listen on",
  abtest_player_watch_on: "Watch on",
  abtest_video_morecontent_upsell_1: "Watch full video on Apple Music.",
  abtest_video_morecontent_upsell_2: "Three months free.",
  abtest_video_morecontent_upsell_2_1mo: "One month free.",
  abtest_video_morecontent_related: "Related Highlights",
  promotion_1free_month: "Get 1 month free of Apple Music",
  promotion_2free_month: "Get 2 months free of Apple Music",
  promotion_3free_month: "Get up to 3 months free of Apple Music",
  promotion_4free_months: "Get up to 4 months free of Apple Music",
  promotion_5free_months: "Get up to 5 months free of Apple Music",
  promotion_6free_months: "Get up to 6 months free of Apple Music",
  promotion_limited_time: "Limited Time Only.",
  "promotion_limited_time-experimental": "Limited time only",
  promotion_try_free: "Try it free",
  promotion_already_member: "Already a member?",
  promotion_already_member_2: "Looking for the track?",
  "promotion_already_member-experimental": "Already subscribed?",
  "promotion_already_member-experimental-2": "Already a subscriber?",
  promotion_open: "Open {provider}",
  promotion_opening: "Opening",
  promotion_terms_of_service: "Terms of Service",
  promotion_error: "Something’s gone wrong.",
  promotion_error_wanna_try_again: "Wanna try that again?",
  promotion_error_clock_skew: "Please update your device Date & Time settings",
  promotion_error_try_again: "Try again",
  promotion_error_still_problems: "Still experiencing problems?",
  promotion_ended: "Offer has ended",
  promotion_ended_subtitle:
    "Keep your eyes and ears open for more exclusive offers from Shazam",
  promotion_waiting: "Still waiting?",
  promotion_tos:
    'Individual memberships only. Renews automatically after trial.<br><br>Codes will expire on 31 December 2019. Promotional codes are not for resale, have no cash value and will not be replaced if lost or stolen. Valid only for Apple Music in {country}. Compatible products, services and a valid Apple ID are required. Terms apply; see the applicable terms for your country at <a href="https://www.apple.com/legal/internet-services/itunes/">https://www.apple.com/legal/internet-services/itunes/</a>. Must be in the country that matches the store front on which you are redeeming the code. Apple Music is a registered trademark of Apple Inc. Apple is not a participant or sponsor of this promotion.',
  promotion_tos_share_jul_15_2023_us:
    'New subscribers only. Individual memberships only.<br>$9.99/month after free trial. Plan automatically renews until cancelled. Codes will expire on 15 July 2023. Promotional codes are not for resale, have no cash value and will not be replaced if lost or stolen. Service availability varies by region. Compatible products, services and a valid Apple ID with payment method on file are required. Terms and Apple Privacy Policy apply; see the applicable terms for your country at <a href="https://www.apple.com/legal/internet-services/itunes/">https://www.apple.com/legal/internet-services/itunes/</a>. Must be in the country that matches the store front on which you are redeeming the code. Offer cannot be combined with other free trials or offers for Apple Music or with Apple One and is in lieu of any standard introductory offer. Apple Music is a registered trademark of Apple Inc.',
  promotion_tos_share_jul_15_2023_world:
    'New subscribers only. Individual memberships only.<br><br>Plan automatically renews at your region’s price per month until cancelled. Codes will expire on 15 July 2023. Promotional codes are not for resale, have no cash value and will not be replaced if lost or stolen. Service availability varies by region. Compatible products, services and a valid Apple ID with payment method on file are required. Terms and Apple Privacy Policy apply; see the applicable terms for your country at <a href="https://www.apple.com/legal/internet-services/itunes/">https://www.apple.com/legal/internet-services/itunes/</a>. Must be in the country that matches the store front on which you are redeeming the code. Offer cannot be combined with other free trials or offers for Apple Music or with Apple One and is in lieu of any standard introductory offer. Apple Music is a registered trademark of Apple Inc.',
  promotion_tos_oct_15_2022:
    'New subscribers only. Individual memberships only.<br><br>Plan automatically renews at your region’s price per month until cancelled. Codes will expire on 15 October 2022. Promotional codes are not for resale, have no cash value and will not be replaced if lost or stolen. Service availability varies by region. Compatible products, services and a valid Apple ID with payment method on file are required. Terms apply; see the applicable terms for your country at <a href="https://www.apple.com/legal/internet-services/itunes/">https://www.apple.com/legal/internet-services/itunes/</a>. Must be in the country that matches the store front on which you are redeeming the code. Apple Music is a registered trademark of Apple Inc.',
  promotion_tos_feb_15_2022:
    'New subscribers only. Individual memberships only.<br><br>Plan automatically renews at your region’s price per month until cancelled. Codes will expire on 15 February 2022. Promotional codes are not for resale, have no cash value and will not be replaced if lost or stolen. Service availability varies by region. Compatible products, services and a valid Apple ID with payment method on file are required. Terms apply; see the applicable terms for your country at <a href="https://www.apple.com/legal/internet-services/itunes/">https://www.apple.com/legal/internet-services/itunes/</a>. Must be in the country that matches the store front on which you are redeeming the code. Apple Music is a registered trademark of Apple Inc.',
  promotion_tos_nov_30_2021:
    'Individual memberships only. Renews automatically after trial.<br><br>Codes will expire on 30 November 2021. Promotional codes are not for resale, have no cash value and will not be replaced if lost or stolen. Valid only for Apple Music in {country}. Compatible products, services and a valid Apple ID are required. Terms apply; see the applicable terms for your country at <a href="https://www.apple.com/legal/internet-services/itunes/">https://www.apple.com/legal/internet-services/itunes/</a>. Must be in the country that matches the store front on which you are redeeming the code. Apple Music is a registered trademark of Apple Inc. Apple is not a participant or sponsor of this promotion.',
  promotion_tos_aug_12_2021:
    'Individual memberships only. Renews automatically after trial.<br><br>Codes will expire on 12 August 2021. Promotional codes are not for resale, have no cash value and will not be replaced if lost or stolen. Valid only for Apple Music in {country}. Compatible products, services and a valid Apple ID are required. Terms apply; see the applicable terms for your country at <a href="https://www.apple.com/legal/internet-services/itunes/">https://www.apple.com/legal/internet-services/itunes/</a>. Must be in the country that matches the store front on which you are redeeming the code. Apple Music is a registered trademark of Apple Inc. Apple is not a participant or sponsor of this promotion.',
  promotion_tos_oct_15_2021:
    'Individual memberships only. Renews automatically after trial.<br><br>Codes will expire on 15 October 2021. Promotional codes are not for resale, have no cash value and will not be replaced if lost or stolen. Valid only for Apple Music in {country}. Compatible products, services and a valid Apple ID are required. Terms apply; see the applicable terms for your country at <a href="https://www.apple.com/legal/internet-services/itunes/">https://www.apple.com/legal/internet-services/itunes/</a>. Must be in the country that matches the store front on which you are redeeming the code. Apple Music is a registered trademark of Apple Inc. Apple is not a participant or sponsor of this promotion.',
  web_promotion_heading_single_month: "Get up to 1 month free of Apple Music",
  web_promotion_heading_multiple_months:
    "Get up to 4 months free of Apple Music",
  web_promotion_subheading: "Limited time only",
  web_promotion_button: "Redeem",
  web_promotion_button_view_offer: "View offer",
  web_promotion_button_verify_identity: "Verify Your Identity",
  web_promotion_button_description:
    "Face ID or Touch ID is required to redeem offer",
  web_promotion_button_description_v2:
    "Face ID or Touch ID is required to review the offer terms before redemption",
  web_promotion_button_description_v3:
    "Face recognition, fingerprints, or PIN is required to review the offer terms before redemption",
  web_promotion_fallback_heading:
    'Face ID or Touch ID is required <span class="subheading">to securely authenticate and redeem up to 4 months free of Apple Music</span>',
  web_promotion_fallback_heading_v2:
    'Face ID or Touch ID is required <span class="subheading">to review the offer terms before redemption</span>',
  web_promotion_fallback_button: "Ok, Got it",
  web_promotion_track_cta_button: "play full song",
  web_promotion_track_cta_button_subtitle_multiple_months:
    "Up to 4 months free offer",
  web_promotion_more_content_multiple_months: "Up to 4 months free offer",
  web_promotion_upsell_button: "Try Now",
  web_promotion_not_available: "Oops! The offer can't be accessed from here",
  web_promotion_not_available__country:
    "This offer is not available in your country.",
  web_promotion_not_available__platform:
    "This offer is not available on your platform.",
  web_promotion_not_available__platform_in_app:
    "To redeem the code offer, copy the link below and paste into the Safari app browser.",
  web_promotion_not_available__platform_in_app_chrome:
    "To redeem the code offer, copy the link below and paste into the Chrome app browser.",
  web_promotion_not_available__platform_in_app_copy: "Copy",
  web_promotion_not_available__platform_in_app_copied: "Copied",
  web_promotion_not_available_currently:
    "There is currently no offer available.",
  web_promotion_use_camera:
    "Use your phone's camera or QR scanner to scan the code and redeem the offer",
  web_promotion_new_users_only: "New Users Only",
  web_promotion_click_to_redeem: "Click to redeem offer or open in Shazam",
  web_promotion_redeem_offer: "Redeem Offer",
  web_promotion_open_in_shazam: "Open in Shazam",
  apple_music_listen_on: "Listen on {provider}",
  apple_music_watch_on: "Watch on {provider}",
  co_AE: "United Arab Emirates",
  co_AM: "Armenia",
  co_AR: "Argentina",
  co_AT: "Austria",
  co_AU: "Australia",
  co_AZ: "Azerbaijan",
  co_BE: "Belgium",
  co_BG: "Bulgaria",
  co_BO: "Bolivia",
  co_BR: "Brazil",
  co_BY: "Belarus",
  co_CA: "Canada",
  co_CH: "Switzerland",
  co_CL: "Chile",
  co_CN: "China",
  co_CO: "Colombia",
  co_CR: "Costa Rica",
  co_CZ: "Czech Republic",
  co_DO: "Dominican Republic",
  co_DE: "Germany",
  co_DK: "Denmark",
  co_EC: "Ecuador",
  co_EG: "Egypt",
  co_ES: "Spain",
  co_FI: "Finland",
  co_FR: "France",
  co_GB: "United Kingdom",
  co_GR: "Greece",
  co_HR: "Croatia",
  co_HK: "Hong Kong",
  co_HU: "Hungary",
  co_ID: "Indonesia",
  co_IE: "Ireland",
  co_IL: "Israel",
  co_IN: "India",
  co_IR: "Iran",
  co_IT: "Italy",
  co_JP: "Japan",
  co_JO: "Jordan",
  co_KR: "South Korea",
  co_KZ: "Kazakhstan",
  co_LB: "Lebanon",
  co_LK: "Sri Lanka",
  co_MA: "Morocco",
  co_MD: "Moldova",
  co_MX: "Mexico",
  co_MY: "Malaysia",
  co_NG: "Nigeria",
  co_NL: "Netherlands",
  co_NO: "Norway",
  co_NZ: "New Zealand",
  co_PA: "Panama",
  co_PY: "Paraguay",
  co_PE: "Peru",
  co_PH: "Philippines",
  co_PL: "Poland",
  co_PT: "Portugal",
  co_RO: "Romania",
  co_RU: "Russia",
  co_SA: "Saudi Arabia",
  co_SE: "Sweden",
  co_SG: "Singapore",
  co_SI: "Slovenia",
  co_SK: "Slovakia",
  co_TH: "Thailand",
  co_TR: "Turkey",
  co_TW: "Taiwan",
  co_UA: "Ukraine",
  co_US: "United States",
  co_UY: "Uruguay",
  co_UZ: "Uzbekistan",
  co_VE: "Venezuela",
  co_ZA: "South Africa",
  co_CM: "Cameroon",
  co_GH: "Ghana",
  co_MZ: "Mozambique",
  co_UG: "Uganda",
  co_KE: "Kenya",
  co_TZ: "Tanzania",
  co_ZM: "Zambia",
  co_BW: "Botswana",
  co_VN: "Vietnam",
  co_AI: "Anguilla",
  co_AG: "Antiqua and Barbuda",
  co_BH: "Bahrain",
  co_BB: "Barbados",
  co_BZ: "Belize",
  co_BM: "Bermuda",
  co_VG: "British Virgin Islands",
  co_KH: "Cambodia",
  co_CV: "Cape Verde",
  co_KY: "Cayman Islands",
  co_CY: "Cypress",
  co_DM: "Dominica",
  co_SV: "El Salvador",
  co_EE: "Estonia",
  co_FJ: "Fiji",
  co_GM: "Gambia",
  co_GD: "Grenada",
  co_GT: "Guatemala",
  co_GW: "Guinea-Bissau",
  co_HN: "Honduras",
  co_LA: "Lao People's Democratic Republic",
  co_LV: "Latvia",
  co_LT: "Lithuania",
  co_LU: "Luxembourg",
  co_MO: "Macau",
  co_MT: "Malta",
  co_MU: "Mauritius",
  co_FM: "Micronesia",
  co_MN: "Mongola",
  co_NP: "Nepal",
  co_NI: "Nicaragua",
  co_NE: "Niger",
  co_OM: "Oman",
  co_PG: "Papua New Guinea",
  co_KN: "Saint Kitts and Nevis",
  co_SZ: "Swaziland",
  co_TT: "Trinidad and Tobago",
  co_VD: "Vietnam",
  co_ZW: "Zimbabwe",
  co_SLK: "Slovakia",
  website_am_connect: "Connect",
  website_am_disconnect: "Disconnect",
  website_am_status_connected_menu_line1: "You're connected.",
  website_am_status_connected_menu_line2: "Play songs in full within Shazam.",
  website_am_cta_subtitle_variant_a:
    "Connect with Apple Music. Sign-in or Try it free for 3 months.",
  website_am_cta_title_variant_b: "PLAY FULL SONG",
  website_am_cta_subtitle_variant_b:
    "Connect with Apple Music. Sign-in or Try it free for 3 months.",
  website_am_status_connected_dialog_line1:
    "You're connected. Songs now play full in Shazam.",
  website_am_status_connected_dialog_line2:
    "Get Apple Music to enjoy 90 million more. Download and stream your favourites offline.",
  website_am_status_unconnected_dialog_line1: "Don't miss out",
  website_am_authentication_reconnect:
    "Your sign in has expired. Please <a href='#' class='auth-expiry deeplink-am-signupflow'>connect again</a> to play full songs in Shazam",
  website_am_install: "Install",
  website_am_download: "Download iTunes",
  website_am_maybe_later: "Maybe Later",
  website_am_status_unconnected:
    "Connect to Apple Music to play songs in full within Shazam.",
  website_am_error_line1: "Something went wrong",
  website_am_error_line2: "We couldn't connect you to Apple Music",
  website_am_tryagain: "Try Again",
  website_am_cancel: "Cancel",
  website_am_gotit: "Got it",
  website_unavailable_notfound: "Not Found",
  website_unavailable_description: "This content is no longer available",
  apple_cc_listen_am: "Listen on Apple Music",
  apple_cc_1mo_free: "Get up to 1 month free",
  apple_cc_3mo_free: "Get up to 3 months free",
  apple_cc_lyrics: "Lyrics",
  apple_cc_synced_lyrics: "Synced Lyrics",
  apple_cc_see_more: "See Full Lyrics",
  apple_cc_highlights_upsell_1mo:
    "Watch the full video on Apple Music. One month free.",
  apple_cc_highlights_upsell:
    "Watch the full video on Apple Music. Three months free.",
  apple_cc_featured_in: "Featured in",
  apple_cc_album: "Album",
  apple_cc_playlist: "Playlist",
  apple_cc_you_might_like: "You Might Like",
  apple_cc_track_info: "Track Information",
  apple_cc_track_info_shazams: "Shazams",
  apple_cc_track_info_artist: "Artist",
  apple_cc_track_info_genres: "Genres",
  apple_cc_download: "Download Shazam",
  apple_cc_download_desc: "All your music discoveries in one app",
  apple_cc_listen_full_song: "Listen to the full song by {artist}",
  apple_cc_try_am_free: "Try Apple Music free",
  apple_cc_play_track: "Play {track} by {artist}",
  apple_cc_play_full_song: "Play the full song",
  apple_cc_listen_more:
    "Listen to more from {artist} with Apple Music. Try free for up to 3 months.",
  apple_cc_try_now: "Try now",
  website_webrec_shazamidentifies: "Shazam identifies songs playing around you",
  website_webrec_clicktoshazam: "Click to Shazam",
  website_webrec_taptoshazam: "Tap to Shazam",
  website_webrec_betatag: "Beta",
  website_webrec_went_wrong: "Ooops... something went wrong!",
  website_webrec_refresh_text: "Refresh the page and try again.",
  website_webrec_refresh_button: "Refresh",
  website_webrec_turn_mic_on: "Turn the mic on",
  website_webrec_needs_mic_subtitle:
    "Shazam needs access to your microphone to identify music.",
  website_webrec_needs_mic_instructions_mobile:
    "Enable access from your settings or get quicker access with the <a href='{appLink}'> Shazam App </a>",
  website_webrec_needs_mic_instructions:
    "Click the microphone icon in your browser's navigation bar and enable access. Or go to your browser’s setting page.",
  website_webrec_got_it: "GOT IT",
  website_webrec_listening_headline_1: "Listening",
  website_webrec_listening_subtitle_1:
    "Please don’t refresh or close this page",
  website_webrec_listening_headline_2: "Searching for a match",
  website_webrec_listening_subtitle_2: "Please wait",
  website_webrec_listening_headline_3: "Expanding search",
  website_webrec_listening_subtitle_3: "Hang tight",
  website_webrec_listening_headline_4: "This is a tough one",
  website_webrec_listening_subtitle_4: "Last try",
  website_webrec_nomatch_headline: "That was a hard one",
  website_webrec_nomatch_content:
    "Couldn’t find your song right now. Shazam again or see what others are discovering on the <a href='/charts'>charts</a>.",
  website_webrec_home_nomatch_headline: "Couldn’t quite catch that",
  website_webrec_home_nomatch_content:
    "Make sure your computer can clearly hear the song and try again",
  website_webrec_home_nomatch_content_mobile:
    "Make sure your device can clearly hear the song and try again",
  website_webrec_fab_nomatch_headline: "Couldn’t quite catch that",
  website_webrec_fab_nomatch_content:
    "Try increasing the volume or reduce the background noise and Shazam again",
  website_webrec_fab_identify_songs: "Identify songs playing around you",
  website_webrec_beta_message_library:
    "Library only displays songs you discover on the Shazam app",
  website_webrec_beta_message_track:
    "Shazaming on web is in beta. Songs you Shazam on your desktop are not saved in Library",
  website_webrec_beta_message_track_mobile:
    "This song will not be saved in your Shazam Library",
  website_webrec_new_message_headline: "NEW! Shazam on web",
  website_webrec_new_message_subtitle:
    "Hear music you like? Identify the song with Shazam",
  website_webrec_new_message_tips: "MORE TIPS",
  website_webrec_tips_headline: "Shazam on web tips",
  website_webrec_tips_subtitle:
    "Get more out of your Shazams. Check out these tips to get the best results",
  website_webrec_tips_hear: "Make sure you device can hear the song clearly",
  website_webrec_tips_outside:
    "Shazam on web only identifies music playing outside your device",
  website_webrec_tips_headphones:
    "Avoid using headphones when trying to identify a song",
  website_webrec_tips_more_features:
    "More features available on the <a href='{appLink}'> Shazam App </a>",
  website_artist__view_artist: "View Artist",
  website_artist__full_albums: "Albums by {artistName}",
  website_artist__top_tracks: "Top Songs By {artistName}",
  website_artist__latest_release: "Latest Release",
  website_artist__playlists: "Artist Playlists",
  website_artist__similar_artists: "Discover similar artists on Apple Music",
  website_artist_about__title: "Artist Biography",
  website_artist_about__hometown: "Hometown",
  website_artist_about__born: "Born",
  website_artist_about__genre: "Genre",
  website_artist_video__subtitle: "Video Highlights",
  website_artist_video__title: "Popular Music Videos by {artistName}",
  website_artist_share: "I discovered {artist} using Shazam.",
  website_social_code_offer_eligible_countries: "Eligible countries",
  website_social_code_offer_ios_body:
    "Open or download Shazam to claim your offer.",
  website_social_code_offer_only_ios_msg:
    "This offer is only available on your smartphone",
  website_social_code_offer_android:
    "Get up to 3 months free on an Android device. Open or download Shazam to claim your offer.",
  website_social_code_offer_fallback_body_v1:
    "To get up to 4 months free, please open or download Shazam on your smartphone.",
  website_social_code_offer_fallback_body_v2:
    "Get up to 3 months free on an Android device. Or to get up to 5 months free, please open or download Shazam on an iOS device to claim your offer. Limited time only.",
  website_playerbar__now_previewing: "Now Previewing",
  website_playerbar_upsell__title_1: "Play full songs with Apple Music",
  website_playerbar_upsell__title_2: "Play full song on Apple Music",
  website_playerbar_upsell__subtitle_1_1mo: "1 month free · Cancel Anytime",
  website_playerbar_upsell__subtitle_2_1mo: "Free for 1 month",
  website_playerbar_upsell__subtitle_1: "3 months free · Cancel Anytime",
  website_playerbar_upsell__subtitle_2: "Free for 3 months",
  website_playerbar_upsell__button: "Try it Free",
  website_banner_3_months:
    "<span>Play full songs with Apple Music.</span> Get up to 3 months free",
  website_banner_4_months:
    "<span>Play full songs with Apple Music.</span> Get up to 4 months free",
  website_banner_five_months:
    "<span>Play full songs with Apple Music.</span> Get up to 5 months free",
  website_banner_content_3_months:
    "<span>Listen to {content} on Apple Music.</span> Get up to 3 months free",
  website_banner_content_4_months:
    "<span>Listen to {content} on Apple Music.</span> Get up to 4 months free",
  website_banner_content_five_months:
    "<span>Listen to {content} on Apple Music.</span> Get up to 5 months free",
  website_see_all: "See All",
  website_more_charts: "More Charts",
  website_shazamkit_page_desc:
    "Integrate the magic of Shazam into your apps. Develop powerful audio-based experiences across Apple platforms and Android.",
  website_shazamkit_beta: "Beta",
  website_shazamkit_learn_more: "Learn more",
  website_shazamkit_feature1: "Bring music recognition to your apps",
  website_shazamkit_feature1_sub1:
    "Tap into Shazam’s extensive music catalog and delight your users with music-based experiences.",
  website_shazamkit_feature1_sub2:
    "Sync discoveries with the Shazam App or Music Recognition History in Control Center.",
  website_shazamkit_feature2: "Do more with ShazamKit",
  website_shazamkit_feature2_sub1:
    "Build and manage your own catalog of audio content, like audio from videos, podcasts, and even audio you record from scratch.",
  website_shazamkit_feature2_sub2:
    "Sync or trigger user experiences with the content from your audio catalog.",
  website_shazamkit_upsell:
    "Create new audio recognition experiences for your users",
  website_shazamkit_upsell_sub: "Start developing now.",
  website_shazamkit_get_started: "Get Started",
  website_shazamkit_pagedesc:
    "Enable audio and music recognition in your app with the ShazamKit framework. Return metadata from Shazam’s vast music database, or create your own audio catalog.",
  website_shazamkit_footer: "ShazamKit for Developers",
  website_shazamkit_prayoga_subtitle: "Guided AR yoga app for mind and body.",
  website_shazamkit_prayoga_desc:
    "Smart alerts on your Apple Watch automatically sync to any asana played on your Apple TV, iPad or iPhone. Start a workout and never miss a step with what is being displayed.",
  website_shazamkit_dslr_subtitle: "The complete photo and video app",
  website_shazamkit_dslr_desc:
    "Automatically recognize music playing in the background while taking pictures to suggest predictive filters for your photos based on genre or album artwork color.",
  website_shazamkit_djay_subtitle: "DJ app and AI mixer",
  website_shazamkit_djay_desc:
    "Capture music everywhere; whether at an event, listening to the radio, or playing a back-to-back set with another DJ. Instantly load your discoveries into virtual decks and play audio in sync with the external music source. ",
  website_shazamkit_fmradio_subtitle: "On-demand radio app",
  website_shazamkit_fmradio_desc:
    "Discover and save songs from your favorite radio stations. You can even share music discoveries with your friends or add them to Apple Music.",
  website_shazamkit_haptik_subtitle:
    "Silent, beautiful, mesmerising yet simple metronome app.",
  website_shazamkit_haptik_desc:
    "Identify music and instantly return a song’s tempo to sing or play along with. Finding a song’s tempo has never been easier.",
  website_shazamkit_letras_subtitle:
    "Lyrics discovery and language learning app.",
  website_shazamkit_letras_desc:
    "Discover music and deliver a synced lyrics experience. Enhance your language skills by connecting to teachers based on the genre of song discovered.",
  website_shazamkit_vinyls_subtitle: "Beautiful Apple Music player.",
  website_shazamkit_vinyls_desc:
    "Discover music playing around you and instantly start listening to tracks you pass by on your commute, hear on the radio, or vibe to at your friend’s party.",
  website_shazamkit_built: "Built with ShazamKit",
  website_shazamkit_built_sub:
    "Get inspired by our launch partners who have integrated ShazamKit.",
  website_library_removal:
    "Soon, you won't be able to access My Library on Shazam.com. Please go to the Shazam app to view your Shazam history.",
  website_manatee_encrypted_body:
    "We are not able to return any end-to-end encrypted content.",
  website_manatee_no_data_header: "No data available",
  website_manatee_contact_privacy:
    "If you have any further questions, please <a data-shz-beacon='providerdesc=privacyapple,type=nav' href='https://www.apple.com/legal/privacy/contact/'>Contact Privacy</a>  ",
  website_manatee_data_request_body:
    "No data is associated with your account or your data could not be retrieved as it is end-to-end encrypted.",
  website_manatee_library_access_tags:
    "You can access your previous Shazams in the Shazam app.",
  website_manatee_deleted_headline: "What’s deleted?",
  website_manatee_deleted_body:
    "Your Shazam account, your Shazam history and any associated personal information, unless the data is end-to-end encrypted, in which case Shazam cannot access the data to delete it. If you sign in via email, your email address. If you sign in via Google, your Google ID email address and link to your Google profile photo.",
  website_manatee_not_deleted_headline: "What’s not deleted?",
  website_manatee_not_deleted_body:
    "Analytics logs about how you used Shazam will not be erased, but once your account is deleted, these logs will no longer be personally identifiable. Additionally, if you use Shazam with iCloud, any data that is end-to-end encrypted will not be deleted, and deleting your account will not delete your associated Apple ID. If you want to permanently delete your Apple ID, please visit {applePrivacyAnchor}.",
  website_manatee_delete_no_data:
    "Your Shazam account uses your Apple ID and your Shazam data is end-to-end encrypted so it cannot be accessed by Shazam or Apple, or no data is associated with your account. If you want to permanently delete your Apple account and associated data from all Apple apps and services, please visit {applePrivacyAnchor}.",
  event_upcoming_event: "Upcoming Concert",
  event_past_event: "Past Concert",
  event_next_event: "Next Concert",
  event_view_event: "View Concert",
  event_latest_release: "Latest Release",
  event_albums: "Albums",
  event_upcoming_events: "Upcoming Concerts",
  event_upcoming_in_country: "Concerts in {country}",
  event_upcoming_nearby: "Concerts Nearby",
  event_all_events: "All Concerts",
  event_get_tickets_from: "Get tickets from:",
  event_get_tickets_more_info: "More info from {provider}",
  event_more_info: "MORE INFO",
  event_concert_unavailable: "concert unavailable",
  event_concert_unavailable_desc: "Sorry, this concert is no longer available",
  event_guide: "Concert Guide",
  event_starts_at: "Starts at {hourmin}",
  event_add_to_cal: "Add to calendar",
  event_view_location: "View Location",
  event_listen_to: "Listen to {artist}",
  event_get_ready:
    "Get ready for the show with the latest release and top tracks",
  event_play_album: "Play Album",
  event_share_date: "{time}, {date}",
  event_powered_by: "Powered by {provider}",
  event_all_countries: "All Countries",
  event_see_all: "See All Concerts",
  event_no_upcoming_events: "There are no upcoming concerts",
  event_get_tickets: "Get Tickets",
  event_redirect_to_seller:
    "You will be redirected to the ticket seller's website",
  event_more_info_bit: "More info from Bandsintown",
  event_all_events_meta_title: "{artist} Upcoming Concerts & Tickets | Shazam",
  event_all_events_meta_description:
    "See all {artist} upcoming concerts nearby, tour dates, get tickets, venue details and more.",
});
!(function () {
  var n,
    o = new shz.Cookies(),
    a = o.get("geoip_country");
  (n =
    navigator && navigator.languages
      ? navigator.languages[0]
      : navigator.language || navigator.userLanguage),
    o.remove("geoip_lat"),
    o.remove("geoip_long"),
    (shz.app = new shz.AppClient({
      cookies: o,
      version: shz.version,
      location: window.location,
      ua: navigator.userAgent,
      country: a,
      config: shz.config,
      browserLanguage: n,
      origin: window.location.origin,
      cb: function (n) {
        n.navigate(window.location.pathname + window.location.hash);
      },
    })),
    (shz.appView = new shz.AppViewClient({ app: shz.app }));
})();
!(function () {
  var r = function (r, t, n) {
      var a = [r, t, n].map(function (r) {
        return (r /= 255) <= 0.03928
          ? r / 12.92
          : Math.pow((r + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
    },
    t = function (t) {
      var n, a, e, o, i;
      return (
        Array.isArray(t) ||
          (t = (n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t))
            ? {
                r: parseInt(n[1], 16),
                g: parseInt(n[2], 16),
                b: parseInt(n[3], 16),
              }
            : null),
        (e = t),
        (o = r((a = { r: 255, g: 255, b: 255 }).r, a.g, a.b)),
        (i = r(e.r, e.g, e.b)),
        (Math.max(o, i) + 0.05) / (Math.min(o, i) + 0.05)
      );
    },
    n = function (r, t) {
      (r = String(r).replace(/[^0-9a-f]/gi, "")).length < 6 &&
        (r = r[0] + r[0] + r[1] + r[1] + r[2] + r[2]),
        (t = t || 0);
      var n,
        a,
        e = "#";
      for (a = 0; a < 3; a++)
        (n = parseInt(r.substr(2 * a, 2), 16)),
          (e += (
            "00" +
            (n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16))
          ).substr(n.length));
      return e;
    };
  shz.common.namespace("ux").color = {
    adjustLuminance: n,
    darkenUntilWhiteContrastReached: function (r) {
      var a =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4.5,
        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
      try {
        for (var o = 0, i = r, u = t(i); u < a && o <= e; )
          (i = n(i, -0.1)), (u = t(i)), o++;
        return i;
      } catch (t) {
        return console.error(t), r;
      }
    },
    getWhiteContrast: t,
    isDark: function (r) {
      return (r = r
        .slice(1)
        .toLowerCase()
        .match(/.{1,2}/g)).some(function (r) {
        return r < "c0";
      });
    },
    isBlack: function (r) {
      return !(r = r
        .slice(1)
        .toLowerCase()
        .match(/.{1,2}/g)).some(function (r) {
        return r > "22";
      });
    },
  };
})();
function _extends() {
  return (_extends =
    Object.assign ||
    function (e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
      return e;
    }).apply(this, arguments);
}
!(function () {
  shz.common.namespace("Service");
  var e = shz.common.Error;
  (shz.Service.APIs = {
    authorize: !1,
    request: function (r, t, n) {
      var s = this;
      function c(c, i, h, f) {
        var l = (function () {
            try {
              return c.requestParams(i, t, n);
            } catch (n) {
              return {
                error: new e({
                  type: e.JSERROR,
                  message: [
                    "service:requestParams_" + r,
                    JSON.stringify(t),
                  ].join("_"),
                }),
              };
            }
          })(),
          p = shz.common.merge(l, {
            timeout: s.app.config.services.amp.timeout,
          }),
          m = function (n, s, c) {
            try {
              l.process ? l.process(n, s, t, c) : s(n, n && n.error);
            } catch (c) {
              s(
                n,
                new e({
                  type: e.JSERROR,
                  message: [
                    "service:process",
                    c.message,
                    r,
                    JSON.stringify(t),
                  ].join("_"),
                  args: c.args || {},
                })
              );
            }
          },
          g = function (n, s) {
            try {
              l.onerror ? l.onerror(n, s) : s(i, n);
            } catch (n) {
              s(
                i,
                new e({
                  type: e.JSERROR,
                  message: [
                    "service:onerror",
                    n.message,
                    r,
                    JSON.stringify(t),
                  ].join("_"),
                })
              );
            }
          },
          v = l.nocache || "POST" == l.method || "PUT" == l.method,
          y = l && l.url,
          d = !v && y && u[y] && u[y].tries > 2;
        if (y) {
          if (v) {
            var A = y.replace(/\?$/, "").split("?"),
              S = "r=" + Date.now();
            y = A.length > 1 ? y + "&" + S : y + "?" + S;
          }
          if (o[y] || d)
            return d && (u[y].tries++, u[y].tries > 100)
              ? void console.log(new e({ type: e.LIMITEXCEEDED, message: y }))
              : void setTimeout(function () {
                  h(o[y], d && u[y].error);
                }, 0);
          a[y]
            ? !a[y].some(function (e) {
                return e.context.cbk == f.cbk && e.context.caller == f.caller;
              }) && a[y].push({ context: f, next: h })
            : ((a[y] = [{ context: f, next: h }]),
              (function r() {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                shz.common.getJSON(p).then(function (n, c) {
                  var h = c && c.error,
                    f = h ? g : m,
                    l = h || n;
                  s.authorize &&
                    s.authorize(h && h.type == shz.common.Error.UNAUTHORIZED),
                    h && i && i.retry && t < 2
                      ? r(++t)
                      : f(
                          l,
                          function (r, t) {
                            for (
                              v || t
                                ? t &&
                                  t.type != e.INVALID_PARAM &&
                                  ((u[y] = u[y] || { error: t, tries: 0 }),
                                  u[y].tries++)
                                : ((o[y] = r), delete u[y]);
                              a[y].length;

                            )
                              a[y].shift().next(r, t);
                            delete a[y];
                          },
                          c
                        );
                });
              })());
        } else
          (l.error ? g : m)(
            l.error || null,
            function (n, s) {
              h(
                n,
                s ||
                  (!n &&
                    new e({
                      type: e.INVALID_PARAM,
                      message: ["service:noUrl", r, JSON.stringify(t)].join(
                        "_"
                      ),
                    }))
              );
            },
            t
          );
      }
      function i(e) {
        return (function e(r) {
          return Array.isArray(r)
            ? r.reduce(function (r, t) {
                return r.concat(Array.isArray(t) ? e(t) : t);
              }, [])
            : r;
        })(
          (function e(r) {
            var t =
              "string" == typeof r ? _extends(s.cmds[r], { _name: r }) : r;
            return (
              Array.isArray(t) &&
                t.forEach(function (r, n) {
                  if ("string" == typeof r) {
                    var c = r.split("."),
                      i = c[0],
                      o = c[1];
                    t[n] = e(s.app.getService(i).cmds[o]);
                  }
                }),
              t
            );
          })(e)
        );
      }
      var o = s.app.getService("cache").cache,
        a = s.app.getService("cache").queue,
        u = s.app.getService("cache").failed,
        h = t,
        f = { caller: arguments.callee.caller, cbk: n },
        l = i(r);
      function p(e, r) {
        !l.length || r ? n(e, r) : ((h = e), c(l.shift(), h, p, f));
      }
      l
        ? c((l = Array.isArray(l) ? l.slice() : [l]).shift(), h, p, f)
        : n(
            null,
            new e({ type: e.INVALID_PARAM, message: "service cmd: " + r })
          );
    },
    requestMulti: function (e, r, t) {
      var n = e.slice(),
        s = this,
        c = {};
      function i(e, r, s) {
        (c[e] = { data: r, error: s }),
          (n = n.filter(function (r) {
            return r != e;
          })).length || t(c);
      }
      e.forEach(function (e) {
        s.request(e, r[e] || r, i.bind(s, e));
      });
    },
    requestBatch: function (e, r) {
      var t = this,
        n = 0,
        s = [];
      function c(t, c, i, o) {
        n++,
          (s[c] = t.cmds.length
            ? { request: t, response: i, error: o }
            : { request: t, response: { data: i, error: o } }),
          n == e.length && r(s);
      }
      e.forEach(function (e, r) {
        var n = t;
        e.service && (n = t.app.getService(e.service)),
          Array.isArray(e.cmds)
            ? n.requestMulti(e.cmds, e.params, c.bind(t, e, r))
            : n.request(e.cmds, e.params, c.bind(t, e, r));
      }),
        e.length || r([]);
    },
  }),
    (shz.Service.cache = function (e) {
      (this.cache = {}),
        (this.queue = {}),
        (this.failed = {}),
        (this.seedFile = function (e, r) {
          var t = this;
          shz.common
            .getJSON({
              url: e,
              headers: { "Content-Type": "application/json" },
            })
            .then(function (e, n) {
              e && t.seedJson(e), r && r(!e);
            });
        }),
        (this.seedJson = function (e) {
          var r = this;
          Object.keys(e).forEach(function (t) {
            r.cache[t] = e[t];
          });
        });
    });
})();
!(function () {
  var n = shz.common.namespace("serviceutils.image"),
    t = function (n, t) {
      return ""
        .concat(n.replace("{w}x{h}", "".concat(t, "x").concat(t)), " ")
        .concat(t, "w");
    },
    e = function (n, t) {
      return "".concat(n.replace("s400", "s".concat(t)), " ").concat(t, "w");
    },
    c = function (n) {
      return n && n.includes(".mzstatic.com");
    };
  shz.common.merge(n, {
    buildArtworkSourceSet: function (n, r) {
      var o =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : [[200, 800, 200]];
      if (!r) return "";
      var i = [],
        a = c(r),
        u = a ? t : e,
        s = r;
      n.supports.isWebPSupported() &&
        a &&
        (((s = s.split("."))[s.length - 1] = "webp"), (s = s.join(".")));
      for (var p = 0; p <= o.length - 1; p++)
        for (var l = o[p][0]; l <= o[p][1]; l += o[p][2]) i.push(u(s, l));
      return i.join(",");
    },
    isMusickitUrl: c,
    getSize: function (n) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "375";
      return n && "".concat(n.replace("{w}x{h}", "".concat(t, "x").concat(t)));
    },
    getWebPImage: function (n, t) {
      return (function () {
        var n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = arguments.length > 1 ? arguments[1] : void 0;
        return n.replace(/\.[^/.]+$/, "." + t);
      })(t, n.supports.isWebPSupported() ? "webp" : "jpg");
    },
  });
})();
shz.common.namespace("Service").charts = function (e) {
  var t = this,
    r = e.config,
    c = shz.common.supplant(r.services.amp.charts.genreurl, e),
    a = shz.common.supplant(r.services.amp.charts.cityurl, e),
    s = shz.common.supplant(r.services.amp.charts.countryurl, e),
    i = shz.common.supplant(r.services.amp.charts.discoveryurl, e),
    o = shz.common.supplant(r.services.amp.charts.globalurl, e),
    n = shz.common.namespace("common.country"),
    l = this;
  shz.common.merge(l, shz.common.create(shz.Service.APIs)),
    (l.app = e),
    (l.TYPES = {
      discovery: "discovery",
      top200: "top-200",
      top50: "top-50",
      genre: "genre",
    }),
    (l.WORLD = "world");
  var p = function (t) {
      var r = { city: null, world: null },
        c = t[0],
        a = t[1],
        s = t[2],
        i = c === l.TYPES.genre,
        o = a == l.WORLD;
      return (
        (r.type = c),
        (r.country = n.findCountry({ urlPath: a, app: e })),
        (r.isWorld = o),
        (r.locName = r.country && r.country.locName),
        r.country && s
          ? i
            ? ((r.genre = n.findGenre({
                urlGenre: s,
                countryId: r.country.id,
                app: e,
              })),
              (r.locName = r.country.locName))
            : ((r.city = n.findCity({
                urlCity: s,
                country_code: r.country.id,
                app: e,
              })),
              (r.locName = r.city.locName))
          : o &&
            ((r.count = c.split("-")[1] || 200),
            (r.world = { id: l.WORLD, name: "World" }),
            (r.locName = e.strings.website_charts_global)),
        (r.path = t.join("/")),
        r
      );
    },
    u = function (r) {
      var c = { title: "", shareTitle: "" },
        a = r.type,
        s = r.country,
        i = r.city,
        o = r.world,
        n = r.genre;
      switch (a) {
        case t.TYPES.top200:
          (c.description = o
            ? e.strings.website_charts_description_global
            : e.strings.website_charts_description_top200.replace(
                "{country}",
                s.locName
              )),
            (c.title = "Top 200"),
            (c.shareTitle = "Top 200 ".concat(s.locName));
          break;
        case t.TYPES.top50:
          (c.title = "Top 50"),
            (c.shareTitle = "Top 50 "
              .concat(i.locName, ", ")
              .concat(s.locName)),
            (c.description = e.strings.website_charts_description_top50.replace(
              "{city}",
              i.locName
            ));
          break;
        case t.TYPES.discovery:
          (c.title = "Discovery"),
            (c.shareTitle = "Discovery ".concat(s.locName)),
            (c.description = e.strings.website_charts_description_discovery);
          break;
        case t.TYPES.genre:
          (c.title = n.name), (c.shareTitle = n.name);
      }
      return c;
    };
  (l.cmds = {
    chartGlobal: [
      {
        requestParams: function (e) {
          var t = e.pageSize,
            r = void 0 === t ? 200 : t;
          return { url: o.replace(/{pageSize}/, r) };
        },
      },
    ],
    chart: [
      {
        requestParams: function (e) {
          var r,
            n = (e || "").split("/"),
            m = p(n),
            h = m.type,
            d = m.country,
            y = m.city,
            _ = m.world,
            w = m.genre;
          h == l.TYPES.discovery
            ? (r = i.replace(/{listid}/, d.momentum_listid || ""))
            : h == l.TYPES.genre
            ? (r = c
                .replace(/{listid}/, w.listid || "")
                .replace(/{pageSize}/, w.count))
            : y
            ? (r = a.replace(/{listid}/, y.listid || ""))
            : _
            ? (r = o.replace(/{pageSize}/, m.count))
            : d && (r = s.replace(/{listid}/, d.listid || ""));
          var v = l.app.config.urlparams.itsct;
          return (
            v && r && (r = shz.common.setQueryParams(r, { itsct: v })),
            {
              url: r,
              process: function (e, c) {
                var a = (e && e.tracks) || [];
                (e.url = r),
                  (e.share = (function (e, r, c) {
                    var a,
                      s = r.type,
                      i = r.country,
                      o = r.city,
                      n = r.world,
                      l = r.path,
                      p = e.strings,
                      m = u(r);
                    a =
                      "discovery" == s && i && i.id
                        ? "https://www.shazam.com/ugc/discovery-charts/discovery-chart_" +
                          e.language +
                          "_" +
                          i.id.toLowerCase() +
                          ".jpg"
                        : "https://www.shazam.com/resources/c47e76ada091c1b47c0e8cb0f726d0320c47375a/charts/social/" +
                          s +
                          ".jpg";
                    var h = "";
                    switch (s) {
                      case t.TYPES.top200:
                        h = n
                          ? p.website_meta_desc_charts_global
                          : p.website_meta_desc_charts_country;
                        break;
                      case t.TYPES.top50:
                        h = p.website_meta_desc_charts_city;
                        break;
                      case t.TYPES.discovery:
                        h = p.website_meta_desc_charts_discovery;
                        break;
                      case t.TYPES.genre:
                        h = p.website_meta_desc_charts_genre || "";
                    }
                    return (
                      (h = h
                        .replace(/{country}/, i.locName)
                        .replace(/{city}/, (o && o.locName) || "")
                        .replace(/{track1}/, c[0].title)
                        .replace(/{artist1}/, c[0].subtitle)
                        .replace(/{track2}/, (c[1] && c[1].title) || "")
                        .replace(/{artist2}/, (c[1] && c[1].subtitle) || "")
                        .replace(/{track3}/, (c[2] && c[2].title) || "")
                        .replace(/{artist3}/, (c[2] && c[2].subtitle) || "")),
                      {
                        titles: m,
                        href:
                          "https://www.shazam.com" +
                          e.langpath +
                          "/charts/" +
                          l,
                        image: a,
                        subject: p.website_meta_title_chartsview.replace(
                          /{chart}/,
                          m.shareTitle.toUpperCase()
                        ),
                        text: h,
                        fbtext1: p.website_meta_fb1_chartsview.replace(
                          /{chart}/,
                          m.shareTitle
                        ),
                        fbtext2: p.website_meta_fb2_chartsview,
                        twitter: p.website_meta_twitter_chartsview.replace(
                          /{chart}/,
                          m.shareTitle
                        ),
                        twitter2: p.website_meta_twitter2_chartsview,
                      }
                    );
                  })(l.app, m, a)),
                  (e.info = e.share.titles),
                  c(e);
              },
            }
          );
        },
      },
      "track.normalizeChart",
    ],
    topmycountry: [
      {
        requestParams: function (e, t, r) {
          return {
            process: function (e, t) {
              t(["top-200", n.getAppCountryUrl(l.app) || this.WORLD].join("/"));
            },
          };
        },
      },
      "charts.chart",
    ],
  }),
    (l.utils = {
      getTitles: u,
      parseChartParams: p,
      getVideoInfo: function (e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          c = {},
          a = r.actions,
          s = r.openin && r.openin.actions;
        a &&
          a.some(function (e) {
            "applemusicvideoplay" === e.type &&
              ((c.uri = e.uri), (c.hlsuri = e.hlsuri));
          }),
          s &&
            s.some(function (e) {
              "applemusicvideoopen" === e.type && (c.am_videolink = e.uri);
            });
        var i = r.image || {},
          o = i.dimensions,
          n = i.url;
        return (
          n &&
            o &&
            (c.poster = n.replace("{w}", o.width).replace("{h}", o.height)),
          (c.position =
            e.findIndex(function (e) {
              return t.key == e.key;
            }) + 1),
          (c.title = t.title),
          (c.subtitle = t.subtitle),
          (c.key = t.key),
          c
        );
      },
    });
};
!(function () {
  var e = shz.common.namespace("serviceutils.lyrics"),
    n = {
      musixmatch: {
        snippet: { providername: "musixmatchsnippet", snippet: "1" },
        static: { providername: "musixmatchstatic", snippet: "0" },
        synced: { providername: "musixmatchsync", snippet: "0" },
        userevent: { type: "addonselected", beaconType: "userevent" },
        impression: { beaconType: "impression" },
      },
      lyrics: {
        snippet: { providername: "lyricfindsnippet", snippet: "1" },
        static: { providername: "lyricfind", snippet: "0" },
        synced: { providername: "lyricplay", snippet: "0" },
        userevent: { type: "addonselected", beaconType: "userevent" },
        impression: { beaconType: "impression" },
      },
    };
  function t(e, n, t) {
    var a,
      s = t ? "static" : "snippet";
    return (
      e &&
        ((a = shz.common.copy(e[s] || {})),
        shz.common.merge(a, e[n] || { beaconType: n }),
        "undefined" != typeof document &&
          document.location &&
          document.location.pathname &&
          (a.path = document.location.pathname),
        this.beacondata && shz.common.merge(a, this.beacondata)),
      !shz.common.isEmpty(a) && a
    );
  }
  function a(e, a) {
    var s,
      r,
      c,
      o,
      i,
      p,
      l,
      m,
      d = (e && e.feed) || [];
    return (
      (a = a && a.toLowerCase()),
      d.find(function (e) {
        return (
          (o = (e.beacondata && e.beacondata.providername) || ""),
          (c = !a || a.toLowerCase() == o.toLowerCase()),
          (r =
            c &&
            -1 !== e.type.search(/^lyrics$/i) &&
            e.content &&
            e.content.lyrics),
          (s = r && { lyrics: r, beacondata: e.beacondata, provider: o }),
          !!r
        );
      }),
      s ||
        ((o = shz.common.namespaceExists("content.lyrics.provider", e) || ""),
        (c = !a || a.toLowerCase() == o.toLowerCase()),
        (r = c && shz.common.namespaceExists("content.lyrics", e)),
        (s = r && { lyrics: r, provider: o, beacondata: { providername: o } })),
      s && (s.getBeacons = t.bind(s, n[o.toLowerCase()])),
      s
        ? shz.common.merge(
            s,
            ((l = (p = i = r.text)
              .replace(/^\n+/, "")
              .split("\n")
              .slice(0, 2)
              .join("\n")),
            (m = (m = i.substr(0, 101)).split("\n")).pop(),
            {
              under100: (m = (m = (m = m.join("\n")).replace(
                /\n\n/g,
                '<span class="versespace"></span>'
              )).replace(/\n/g, '<span class="linespace"></span>')),
              shorttext: (l = (l = l.replace(
                /\n\n/g,
                '<span class="versespace"></span>'
              )).replace(/\n/g, '<span class="linespace"></span>')),
              fulltext: (p = (p = p.replace(
                /\n\n/g,
                '<span class="versespace"></span>'
              )).replace(/\n/g, '<span class="linespace"></span>')),
            })
          )
        : { notfound: !0 }
    );
  }
  var s = function (e) {
    var n = e.config.urlparams,
      t = n.trackLength,
      a = n.offsetInMilliseconds,
      s = n.startDate,
      r = n.overrideStartDate,
      c = n.timeSkew,
      o = Date.now(),
      i = "true" === r ? o : new Date(s).valueOf();
    return {
      trackLengthInMillseconds: 1 * t,
      trackStartDateInMilliseconds: i - a,
      sampleStartDateInMillseconds: i,
      offsetInMilliseconds: parseInt(a),
      timeSkew: parseFloat(c),
    };
  };
  shz.common.merge(e, {
    getLyricsData: a,
    getSampleText: function (e, n) {
      var t = a(e, n),
        s = (t && t.lyrics && t.lyrics.text) || "";
      return (
        (s = (s = s.substr(0, 150)).split("\n")).pop(),
        (s = (s = s.join("/")).replace(/\r?\n|\r/g, " ")).replace(/\/+/g, " / ")
      );
    },
    getCurrentLyric: function (e, n) {
      var t = n.trackStartDateInMilliseconds,
        a = n.timeSkew,
        s = void 0 === a ? 0 : a;
      isNaN(s) && (s = 0), (s += 1);
      var r,
        c,
        o,
        i,
        p = Date.now(),
        l = s * (p - t);
      return (
        e.some(function (e, n, t) {
          var a = s * e.offset,
            p = l - a;
          if (p < 0)
            return (
              (o = t[n - 2]),
              (c = t[n - 1]),
              (r = t[n]) && (i = Math.abs(p)),
              !0
            );
          n == t.length - 1 && p >= 0 && ((o = t[n - 1]), (c = t[n]));
        }),
        {
          atStart: !(c || !r),
          atEnd: !r,
          previous: o,
          current: c,
          next: r,
          timeToNext: i,
        }
      );
    },
    getSyncedLyricTimeParams: s,
    canShowSyncedLyric: function (e) {
      var n = Date.now(),
        t = s(e),
        a = t.trackLengthInMillseconds,
        r = t.trackStartDateInMilliseconds,
        c = t.offsetInMilliseconds;
      return n >= r && n - r < a && c > 0 && c < a;
    },
  });
})();
!(function () {
  var t = shz.common.namespace("serviceutils.socialmeta");
  shz.common.merge(t, {
    getTrackMeta: function (t, e) {
      !(function (t, e, a) {
        var i,
          s,
          c,
          r = t.app,
          n = r.strings,
          o = t.track,
          m = t.tagcount,
          l = t.album,
          h = t.playlist1,
          p = t.playlist2,
          g = "",
          u = "";
        (e.pageDesc = shz.common.supplant(n.website_meta_desc_track_base, {
          track: o.heading.title,
          artist: o.heading.subtitle,
          shazamcount: m.total && m.total.toLocaleString(),
        })),
          o.dateInfo &&
            o.dateInfo.isNewRelease &&
            (u = shz.common.supplant(n.website_meta_desc_track_newrelease, {
              album: l,
            })),
          h && p
            ? ((g = shz.common.supplant(n.website_meta_desc_track_2playlists, {
                playlist1: h,
                playlist2: p,
              })),
              (e.pageDesc = "".concat(e.pageDesc, ",")))
            : h && !p
            ? ((g = shz.common.supplant(n.website_meta_desc_track_1playlist, {
                playlist1: h,
              })),
              (e.pageDesc = "".concat(e.pageDesc, ",")))
            : ((e.pageDesc = "".concat(e.pageDesc, ".")),
              u &&
                (u = ""
                  .concat(u.charAt(0).toUpperCase())
                  .concat(u.slice(1).trim(), "."))),
          (e.pageDesc = "".concat(e.pageDesc, " ").concat(u).concat(g)),
          (i = r.config.urlparams.stm) &&
            ((e.image =
              "https://www.shazam.com/ugc/sharethemoment/" + i + ".jpg"),
            (e.url =
              "https://www.shazam.com" + r.location.pathname + "?stm=" + i),
            (e.twittercardtype = "summary_large_image")),
          (i = r.config.urlparams.trend)
            ? shz.common
                .getJSON("/ugc/trendsetter/" + i + ".json")
                .then(function (t, i) {
                  (i && i.error) ||
                    ((e.url =
                      "https://www.shazam.com" +
                      r.location.pathname +
                      "?trend=" +
                      t.gifid),
                    (e.image = t.image),
                    (e.twitter2 = e.fbtext2 = e.subject = t.subject),
                    (e.twitter = e.fbtext1 = e.text = t.text),
                    (function (t, e) {
                      e.video &&
                        ((t.image = e.image),
                        (t.type = "video.other"),
                        (t.ogurl = e.image),
                        (t.twittercardtype = "player"),
                        (t.video = {
                          url: e.video,
                          secure_url: e.video,
                          type: "video/mp4",
                          width: e.width,
                          height: e.height,
                          twitter: {
                            player: e.gifid
                              ? [
                                  "https://www.shazam.com/social/twitter/gif?",
                                  "id=",
                                  e.gifid,
                                  "&width=",
                                  e.width,
                                  "&height=",
                                  e.height,
                                ].join("")
                              : e.video,
                            image: e.image,
                          },
                        }),
                        e.gif &&
                          ((t.image = e.gif),
                          (t.ogurl = e.gif),
                          (t.video.image = {
                            type: "image/gif",
                            width: e.width,
                            height: e.height,
                          })));
                    })(e, t)),
                    a(e);
                })
            : r.config.urlparams.share
            ? ((s = r.config.urlparams.share),
              (c = function (t) {
                a(shz.common.merge(e, t, !0, !0));
              }),
              shz.common
                .getJSON("/ugc/share/" + s + ".json")
                .then(function (t, e) {
                  if (e && e.error) c({});
                  else {
                    var a = t;
                    console.log("_getSharedExperienceMeta"),
                      (a.fbtext1 = a.pageTitle = a.twitter = t.subject),
                      (a.fbtext2 = a.pageDesc = a.twitter2 = t.text),
                      (a.url = t.href || a.url),
                      c(a);
                  }
                }))
            : a(e);
      })(
        t,
        (function (t) {
          var e,
            a = t.app,
            i = t.track,
            s = t.tagcount,
            c = a.strings;
          return (
            (e = i.share)
              ? (e.href = "https://www.shazam.com" + a.location.pathname)
              : (e = {
                  subject: shz.common.supplant(c.website_meta_title_track, {
                    artist: i.heading.subtitle || " ",
                    lyrics:
                      i.content && i.content.lyrics
                        ? c.website_lyrics.toUpperCase() + " "
                        : "",
                    track: i.heading.title,
                  }),
                  text: shz.common.supplant(c.website_meta_desc_track, {
                    track: i.heading.title,
                    artist: i.heading.subtitle || "",
                  }),
                  href: "https://www.shazam.com" + a.location.pathname,
                  twitter: shz.common.supplant(c.website_meta_share_track, {
                    track: i.heading.title,
                    artist: i.heading.subtitle || "",
                  }),
                }),
            ((e = shz.common.merge(e, {
              hasamphtml: !0,
              pageTitle: shz.common.supplant(c.website_meta_title_track, {
                artist: i.heading.subtitle || "",
                lyrics:
                  i.content && i.content.lyrics
                    ? c.website_lyrics.toUpperCase() + " "
                    : "",
                track: i.heading.title,
              }),
              pageDesc: shz.common.supplant(
                c[
                  "website_meta_desc_track" +
                    (i.content && i.content.lyrics ? "_lyrics" : "")
                ],
                { track: i.heading.title, artist: i.heading.subtitle || "" }
              ),
              appPath: "track/" + i.key,
              fbtext1: shz.common.supplant(c.website_meta_share_track, {
                artist: i.heading.subtitle || "",
                track: i.heading.title,
              }),
              fbtext2: shz.common.supplant(c.website_meta_share2_track, {
                count:
                  s &&
                  s.total &&
                  (s.total.toLocaleString ? s.total.toLocaleString() : s.total),
              }),
              twitter: shz.common.supplant(c.website_meta_share_track, {
                artist: i.heading.subtitle || "",
                track: i.heading.title,
              }),
              twitter2: shz.common.supplant(c.website_meta_share2_track, {
                count: s && s.total,
              }),
              twitterfull: shz.common.supplant(c.website_meta_twitter_track, {
                track: i.heading.title,
                artist: i.heading.subtitle || "",
              }),
            })).url = "https://www.shazam.com" + a.location.pathname),
            (e.twitter = shz.common.supplant(c.website_meta_share_track, {
              track: i.heading.title,
              artist: i.heading.subtitle || "",
            })),
            (e.twittercardtype = "summary"),
            e.image &&
              "/" == e.image.charAt(0) &&
              (e.image = "https://www.shazam.com" + e.image),
            (e.keywords = shz.common.supplant(c.website_meta_track_keywords, {
              track: i.heading.title,
              artist: i.heading.subtitle || "",
            })),
            e
          );
        })(t),
        e
      );
    },
  });
})();
!(function () {
  var t = shz.common.namespace("serviceutils.v5"),
    e = shz.common.namespace("serviceutils.image"),
    a = e.buildArtworkSourceSet,
    i = e.isMusickitUrl;
  function r(t, e, a) {
    return ((t && t.sections) || []).filter(function (t) {
      return t.type == e && (!a || t.id == a);
    })[0];
  }
  shz.common.merge(t, {
    normalizeTrack: function (t, e) {
      var s,
        o = r(t, "SONG"),
        n = r(t, "ARTIST"),
        c = r(t, "LYRICS"),
        u = r(t, "RELATED"),
        l = r(t, "VIDEO"),
        p = e.supports.ios ? "2x" : "xhdpi",
        m = e.supports.android ? ["SPOTIFY", "GOOGLEALLACCESS"] : ["SPOTIFY"];
      (t.heading = t.heading || { title: t.title, subtitle: t.subtitle }),
        (t.properties = t.properties || {});
      try {
        t.alias = t.alias || t.url.match(/\/\d+\/([\w|\W]+)/)[1];
      } catch (t) {}
      if (t.images) {
        (t.images.default = t.images.default || t.images.coverart),
          (t.artistImage = t.images.background);
        var g = t.images.joecolor;
        g &&
          (g = g.match(/^b:(\w{6})p:(\w{6})s:(\w{6})t:(\w{6})q:(\w{6})$/)) &&
          (g.shift(),
          (t.properties.colors = g.map(function (t) {
            return "#".concat(t);
          })),
          (t.properties.bkgcolor = t.properties.colors[0]));
      }
      if (
        ((t.images && t.images.default) ||
          ((t.images = t.images || {}),
          (t.images.default = e.config.services.amp.track.noartimage)),
        (s = t.feed = []),
        n &&
          ((t.artistId = n.id),
          (t.artistImage = t.artistImage || n.avatar),
          n.name &&
            n.name.match(/^<font/g) &&
            (n.name = n.name.replace(/<[^>]*>/g, "")),
          (t.artistName = n.name),
          s.push(n),
          n.toptracks &&
            n.toptracks.url &&
            s.push({
              type: "rail",
              id: "toptracks",
              content: { url: n.toptracks.url },
            })),
        c &&
          s.push(
            shz.common.merge(c, {
              content: {
                lyrics: { text: c.text.join("\n"), footer: c.footer },
              },
            })
          ),
        l &&
          (l.title &&
            l.title.match(/<font/g) &&
            (l.title = l.title.replace(/<[^>]*>/g, "")),
          s.push(
            shz.common.merge(
              { type: "general", id: "generalvideos", content: l },
              l
            )
          )),
        u &&
          s.push({
            type: "rail",
            id: "recommendations",
            content: { url: u.url },
          }),
        o)
      ) {
        try {
          o.metadata &&
            o.metadata.forEach(function (t) {
              t.text &&
                t.text.match(/<font/g) &&
                (t.text = t.text.replace(/<[^>]*>/g, ""));
            });
        } catch (t) {}
        t.footnotes = o.metadata;
        var d = o && o.metadata[2];
        if (d) {
          var h = d.text.split("-"),
            f = h[0],
            b = h[1];
          (h[0] = b), (h[1] = f), (h = h.join("-"));
          var v = Date.now(),
            y = new Date(h).getTime(),
            S = Math.round((v - y) / 864e5);
          S <= 90 && (t.isNewRelease = !0),
            (t.dateInfo = {
              isNewRelease: S <= 90,
              trackReleased: new Date(h).toLocaleDateString(),
            });
        }
      }
      var I,
        k = (t._huboptions = {}),
        w = (t._providers = {});
      t.hub &&
        "APPLEMUSIC" == t.hub.type &&
        ((t.hub.actions || []).forEach(function (e) {
          return (
            "applemusicplay" == e.type && (t.applemusicplay = e.id),
            (t.previewurl = "uri" == e.type && e.uri)
          );
        }),
        (t.hub.options || []).forEach(function (a) {
          var i,
            r = a.beacondata && a.beacondata.type;
          r && (i = k[r] = a) && ((i.type = r), (i._scalefactor = p));
          try {
            if (e.supports.android) {
              var s = i && i.actions;
              s &&
                (i.actions = s.filter(function (t) {
                  return !(
                    "applemusicconnect" == t.type &&
                    "https://unsupported.shazam.com" == t.uri
                  );
                }));
            }
          } catch (t) {}
          var o = i && i.actions;
          o &&
            o.some(function (e) {
              "uri" === e.type && (t.amuri = e.uri);
            });
        }),
        k.APPLEMUSIC &&
          e.supports.ios &&
          (k.APPLEMUSIC.actions || []).forEach(function (e) {
            "hub:applemusic:subscribe" == e.name &&
              (t._huboptions.am_subscribe = {
                actions: [e],
                beacondata: { providername: "applemusic", type: "upsell" },
              });
          }),
        (t.hub.providers || []).forEach(function (t) {
          t.actions &&
            t.actions.length &&
            -1 != m.indexOf(t.type) &&
            ((w[t.type] = t), (w[t.type]._scalefactor = p));
        }),
        t.hub.explicit && (t.explicit = t.hub.explicit));
      try {
        var x = t.artists && t.artists[0];
        I = e.getService("artist").utils.getArtistUrl(x);
      } catch (t) {}
      var E = t.images.default,
        A = "/track/".concat(t.key, "/").concat(t.alias);
      return (
        (t._template = {
          artistSrcSet: i(t.artistImage) ? a(e, t.artistImage) : null,
          srcSet: a(e, E, [[75, 300, 75]]),
          originalImage: E,
          internalArtistPath: I,
          internalTrackPath: A,
        }),
        t
      );
    },
    normalizeOverrides: function (t) {
      return (
        (t.title || t.subtitle) &&
          ((t.heading = t.heading || {}),
          t.title && (t.heading.title = t.title),
          t.subtitle && (t.heading.subtitle = t.subtitle)),
        t.images &&
          (t.images.default || t.images.coverart) &&
          (t.images.default = t.images.default || t.images.coverart),
        t
      );
    },
  });
})();
function _extends() {
  return (_extends =
    Object.assign ||
    function (r) {
      for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var a in e)
          Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
      }
      return r;
    }).apply(this, arguments);
}
function _typeof(r) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (r) {
          return typeof r;
        }
      : function (r) {
          return r &&
            "function" == typeof Symbol &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        })(r);
}
!(function () {
  var r = shz.common.Error;
  function t(r) {
    var t = (r += "").match(/^\/?([\d]+)(;|\/|$)/);
    return t && t.length && t[1];
  }
  function e(r, t, e) {
    return (
      ((r && r.feed) || []).filter(function (r) {
        return r.type.toUpperCase() == t.toUpperCase() && (!e || r.id == e);
      }) || []
    );
  }
  function a(r, t, a, c) {
    var s = (c && c.track && c.track.stores) || {};
    if ("5" == r.layout) r = shz.serviceutils.v5.normalizeTrack(r, t);
    else if (!r._stores) {
      var i,
        o = function (r, t, e, a) {
          var c;
          return (
            u[r] &&
              (u[r].actions || []).some(function (r) {
                if (r.type == t) return (c = r[e]), 1;
              }),
            c || a
          );
        },
        n = (r._stores = (function (r, t, e) {
          var a,
            c = r.stores,
            s = r.streams,
            i = { prioritized: [] };
          if (!c && !s) return i;
          function o(r, t) {
            var e = {};
            return (
              (e.key = r),
              (e.explicit = t.explicit),
              (t.actions || []).some(function (r) {
                return "uri" == r.type && (e.buyurl = r.uri), e.url;
              }),
              e
            );
          }
          var n = t.supports.android
            ? e.android || [
                "google",
                "spotify",
                "amazon",
                "apple",
                "itunes",
                "xboxmusic",
              ]
            : e.ios || [
                "apple",
                "spotify",
                "itunes",
                "google",
                "amazon",
                "xboxmusic",
              ];
          return (
            (a = new Array(n.length)),
            Object.keys(c).forEach(function (r) {
              var t = o(r, c[r]),
                e = n.indexOf(r);
              e >= 0 && (a[e] = t);
            }),
            Object.keys(s).forEach(function (r) {
              var t = o(r, s[r]),
                e = n.indexOf(r);
              e >= 0 && (a[e] = t);
            }),
            (i.prioritized = a.filter(function (r) {
              return r;
            })),
            i
          );
        })(r, t, s)),
        u = r.stores || {};
      n.prioritized.some(function (t) {
        var e = r.stores[t.key];
        return (i = e && ((e.images && e.images.default) || e.coverarturl));
      }),
        (n.prioritized || []).some(function (t) {
          var e = (r.previewurl =
            r.stores[t.key] && r.stores[t.key].previewurl);
          return e && (r.explicit = r.stores[t.key].explicit), e;
        }),
        (n.itunes = {
          buyurl: o("itunes", "uri", "uri", ""),
          playurl: (u.itunes && u.itunes.previewurl) || "",
        }),
        (n.apple = {
          buyurl: o("apple", "uri", "uri", ""),
          playurl: (u.apple && u.apple.previewurl) || "",
          trackid: u.apple && u.apple.trackid,
          albumid: u.apple && u.apple.productid,
        }),
        (r.amuri = n.apple.buyurl),
        (r.applemusicplay = n.apple.trackid),
        (n.google = {
          buyurl: o("google", "uri", "uri", ""),
          playurl: (u.google && u.google.previewurl) || "",
        }),
        (n.amz = {
          buyurl: o("amazon", "uri", "uri", ""),
          playurl: (u.amazon && u.amazon.previewurl) || "",
        }),
        (n.xbox = {
          buyurl: o("xboxmusic", "uri", "uri", ""),
          playurl: (u.xboxmusic && u.xboxmusic.previewurl) || "",
        }),
        (r.images = r.images || {}),
        (r.images.default =
          i || r.images.default || t.config.services.amp.track.noartimage);
      var l = e(r, "follow");
      if (l && l.length)
        try {
          (r.artistImage = l[0].artist.avatar.default),
            (r.artistId = l[0].artist.id),
            (r.artistName = l[0].artist.name);
        } catch (r) {}
      !r.artistId &&
        r.artists &&
        r.artists.length &&
        (r.artistId = r.artists[0].id),
        r.url &&
          (t.langpath &&
            (r.url = r.url.replace(/\/track\//, t.langpath + "/track/")),
          (r.url = r.url.replace("http:", t.location.protocol)));
    }
    r.share &&
      ((r.share.trackkey = r.key),
      (r.share.title = r.title),
      (r.share.subtitle = r.subtitle)),
      a && (r[a] = t.getService(a).utils.normalizeTrack(r, t));
  }
  function c(r) {
    var t = (r.highlightsurls || {}).trackhighlighturl;
    return {
      url: t,
      process: function (e, a) {
        e && (e.key = r.key), a(e, !t);
      },
    };
  }
  function s(r) {
    return {
      url: (r.highlightsurls || {}).trackhighlighturl,
      process: function (t, e) {
        t && (t.key = r.key), e(t || r, !1);
      },
    };
  }
  function i(r) {
    var t = e(r, "general", "generalvideos"),
      a = Array.isArray(t)
        ? t.find(function (r) {
            return r.youtubeurl;
          })
        : null;
    return (a && a.youtubeurl && { url: a.youtubeurl }) || {};
  }
  var o = shz.common.namespace("serviceutils.lyrics");
  shz.common.namespace("Service").track = function (n) {
    var u = n.config.services.amp,
      l = shz.common.supplant(u.track.url, n),
      p = shz.common.supplant(u.tagcounttrack.url, n),
      m = shz.common.supplant(u.tagcounttracklist.url, n),
      k = this,
      f = shz.common.supplant(u.song.adamidurl, n);
    function h(r) {
      var e,
        a,
        c = l,
        s = u;
      "object" == _typeof(r)
        ? (r.service && (c = (s = n.config.services[r.service]).track.url),
          (e = r.trackId = t(r.trackId)),
          (c = shz.common.supplant(c, r)))
        : (c = c.replace(/{trackId}/, (e = t(r)))),
        (c = shz.common.supplant(c, n)),
        (a = k.app.config.urlparams.itsct) &&
          (c = shz.common.setQueryParams(c, { itsct: a }));
      var i = parseInt(k.app.config.urlparams.trackLength);
      return (
        i && (c = shz.common.setQueryParams(c, { trackLength: i })),
        { trackurl: c, tid: e, localconfig: s }
      );
    }
    shz.common.merge(k, shz.common.create(shz.Service.APIs)),
      (k.app = n),
      (k.setConfig = function (r) {
        var t = n.config.services[r];
        t &&
          (t.track && t.track.url && (l = t.track.url),
          t.tagcounttrack && t.tagcounttrack.url && (p = t.tagcounttrack.url),
          t.tagcounttracklist &&
            t.tagcounttracklist.url &&
            (m = t.tagcounttracklist.url));
      });
    var g = {},
      y = ["MUSIC", "CAMPAIGN", "VIDEO", "CONTEXT", "OVERRIDE", "TELEVISION"];
    (k.cmds = {
      trackPreload: {
        requestParams: function (t) {
          var e = h(t),
            a = e.trackurl;
          return e.tid
            ? { url: a }
            : {
                error: new r({
                  type: r.INVALID_PARAM,
                  message: "Track service No id",
                }),
              };
        },
      },
      track: [
        "track.trackPreload",
        {
          requestParams: function (t, e, c) {
            var s = h(e),
              i = s.tid,
              o = s.localconfig;
            return i
              ? {
                  process: function (c, s) {
                    var u = g[i];
                    u
                      ? s(u)
                      : y.indexOf(t.type) > -1
                      ? (("MUSIC" != t.type &&
                          "CAMPAIGN" != t.type &&
                          "CONTEXT" != t.type) ||
                          (a(t, n, e.format, o), (t = _extends({}, t))),
                        (g[i] = t),
                        s(t))
                      : s(
                          t,
                          new r({
                            type: r.INVALID_PARAM,
                            message: "Track data type not valid",
                          })
                        );
                  },
                }
              : {
                  error: new r({
                    type: r.INVALID_PARAM,
                    message: "Track service No id",
                  }),
                };
          },
        },
      ],
      track_bkgcolor: ["track.track", "track.backcolor"],
      lyrics: [
        "track.track",
        {
          requestParams: function (r) {
            return {
              process: function (t, e, a) {
                e(shz.serviceutils.lyrics.getLyricsData(r, a && a.provider));
              },
            };
          },
        },
      ],
      syncedlyrics: [
        "track.track",
        {
          requestParams: function (t) {
            var a = e(t, "lyrics"),
              c = a && a[0] && a[0].url;
            return o.canShowSyncedLyric(n) && c
              ? {
                  url: c,
                  process: function (t, e, a) {
                    t
                      ? ((t.syncedtext = t.syncedtext.filter(function (r) {
                          return r.text;
                        })),
                        e(t))
                      : e(
                          t,
                          new r({
                            type: r.NOTFOUND,
                            message: "No Synced Lyrics",
                          })
                        );
                  },
                }
              : {};
          },
        },
      ],
      videos: ["track.track", { requestParams: i }],
      artisthighlights: [
        "track.track",
        {
          requestParams: function (r) {
            return {
              url: (r.highlightsurls || {}).artisthighlightsurl,
              process: function (r, t) {
                t(r);
              },
            };
          },
        },
      ],
      trackhighlight: ["track.track", { requestParams: c }],
      trackhighlight_or_video_fallback: [
        "track.track",
        { requestParams: s },
        {
          requestParams: function (r) {
            return r &&
              r.actions &&
              r.actions.some(function (r) {
                return "applemusicvideoplay" === r.type;
              })
              ? {
                  process: function (t, e) {
                    e({ trackhighlight: r, videos: null });
                  },
                }
              : i.call(this, r);
          },
        },
        {
          requestParams: function (r) {
            return {
              process: function (t, e) {
                e(
                  r.trackhighlight
                    ? { trackhighlight: r.trackhighlight, videos: null }
                    : { trackhighlight: null, videos: r },
                  null
                );
              },
            };
          },
        },
      ],
      charttrackhighlight: [{ requestParams: c }],
      trackNonWeb: {
        requestParams: function (e, c, s) {
          var i,
            o = l,
            p = u;
          return (
            "object" == _typeof(e)
              ? (e.service && (p = n.config.services[e.service]),
                (i = e.trackId = t(e.trackId)),
                (o = shz.common.supplant(p.track.url, e)),
                (o = shz.common.supplant(o, n)))
              : (o = o.replace(/{trackId}/, (i = t(e)))),
            (o = o.replace("/web/", "/iphone/")),
            i
              ? {
                  url: o,
                  process: function (t, e) {
                    [
                      "MUSIC",
                      "CAMPAIGN",
                      "VIDEO",
                      "CONTEXT",
                      "OVERRIDE",
                      "TELEVISION",
                    ].indexOf(t.type) > -1
                      ? ("MUSIC" == t.type &&
                          (a(t, n, c.format, p), (t = _extends({}, t))),
                        e(t))
                      : e(
                          t,
                          new r({
                            type: r.INVALID_PARAM,
                            message: "Track data type not valid",
                          })
                        );
                  },
                }
              : {
                  error: new r({
                    type: r.INVALID_PARAM,
                    message: "Track service No id",
                  }),
                }
          );
        },
      },
      trackhighlightNonWeb: [
        "track.trackNonWeb",
        {
          requestParams: function (r) {
            return {
              url: (r.highlightsurls || {}).trackhighlighturl,
              process: function (r, t) {
                t(r);
              },
            };
          },
        },
      ],
      tagcounttrack: [
        "track.track",
        {
          requestParams: function (e) {
            var a = t(e.key),
              c = e.type;
            return a && ["MUSIC"].indexOf(c) > -1
              ? { url: p.replace(/{trackId}/, a) }
              : {
                  error: new r({
                    type: r.INVALID_PARAM,
                    message: "TrackTagCount service No id",
                  }),
                };
          },
        },
      ],
      mergetagcounttracklist: {
        requestParams: function (r) {
          var t = [],
            e = (r && (r.chart || r.tracks)) || [];
          function a(t, a) {
            var c = {};
            (t = t || []).forEach(function (r) {
              c[r.id] = r.total;
            }),
              t.length &&
                e.forEach(function (r) {
                  var t;
                  (t = c[r.key]) &&
                    ((r.properties = r.properties || {}).numberOfShazams = t);
                }),
              a(r);
          }
          return (
            e.forEach(function (r) {
              (!r.properties || null == r.properties.numberOfShazams) &&
                t.push("id=".concat(r.key));
            }),
            t.length
              ? {
                  url: m + "?".concat(t.join("&")),
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  process: a,
                }
              : { process: a }
          );
        },
      },
      recommendations: [
        "track.track",
        {
          requestParams: function (r) {
            var t, a, c;
            return (
              (t =
                (a = e(r, "rail", "recommendations"))[0] && a[0].content.url),
              (c = k.app.config.urlparams.itsct) &&
                t &&
                (t = shz.common.setQueryParams(t, { itsct: c })),
              { url: t }
            );
          },
        },
        "track.normalizeChart",
      ],
      recommendations_tagcount: [
        "track.recommendations",
        "track.mergetagcounttracklist",
      ],
      toptracks: [
        "track.track",
        {
          requestParams: function (t) {
            var e;
            try {
              e = t.artists[0].adamid;
            } catch (r) {}
            return e
              ? {
                  process: function (r, e) {
                    e({ adamId: t.artists[0].adamid });
                  },
                }
              : {
                  error: new r({
                    type: r.INVALID_PARAM,
                    message: "Track top tracks service No adam id",
                  }),
                };
          },
        },
        "musickit.toptracks",
      ],
      artist: ["track.track", "artist.artist"],
      artist2: ["track.track", "artist.artist2"],
      normalize: {
        requestParams: function (r) {
          return {
            process: function (t, e) {
              a(r), e(r);
            },
          };
        },
      },
      normalizeChart: {
        requestParams: function (r, t) {
          var e = r.chart || r.tracks || [],
            c = n.config.services.amp;
          return (
            (r.tracks = r.chart = e),
            (t = t || {}).service && (c = n.config.services[t.service]),
            {
              process: function (s, i) {
                e.forEach(function (r) {
                  a(r, n, t.format, c);
                }),
                  i(r);
              },
            }
          );
        },
      },
      backcolor: {
        requestParams: function (r) {
          var t = (r.properties = r.properties || {});
          return {
            process: function (e, a) {
              (t.bkgcolor = t.bkgcolor || "#1b1b1b"),
                (t.bkglight = !shz.ux.color.isDark(t.bkgcolor)),
                (t.bkgblack = shz.ux.color.isBlack(t.bkgcolor)),
                (t.whiteContrast = shz.ux.color.getWhiteContrast(t.bkgcolor)),
                a(r);
            },
          };
        },
      },
      album: ["musickit.album"],
      albumfeaturedin: ["musickit.albumfeaturedin"],
      playlist: ["musickit.playlist"],
      amplaylisttracks: [
        "musickit.playlistshazamtracks",
        "track.normalizeChart",
      ],
      amalbumtracks: ["musickit.albumshazamtracks", "track.normalizeChart"],
      mkvideos: ["musickit.videosbytrack"],
      promoPayload: {
        requestParams: function (r, t) {
          var e = n.supports.storageEnv;
          return {
            url: "/connect/storage/"
              .concat(e, "/published")
              .concat(t.promo.path, "/")
              .concat(t.promo.id, ".json"),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          };
        },
      },
      trackByAdamId: {
        requestParams: function (t) {
          var e = f.replace(/{adamId}/, t);
          return t
            ? { url: e }
            : {
                error: new r({
                  type: r.INVALID_PARAM,
                  message: "Track service No adam id",
                }),
              };
        },
      },
      upcomingEvents: [
        "track.track",
        {
          requestParams: function (r) {
            var t = r.artists && r.artists[0].adamid;
            return {
              process: function (r, e, a) {
                e({ adamId: t });
              },
            };
          },
        },
        "event.upcomingEvents",
      ],
    }),
      (k.utils = {
        validateTrackId: t,
        normalizeTrack: a,
        feedItems: e,
        lyrics: shz.serviceutils.lyrics,
        socialmeta: shz.serviceutils.socialmeta,
      });
  };
})();
function _defineProperty(t, a, r) {
  return (
    a in t
      ? Object.defineProperty(t, a, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[a] = r),
    t
  );
}
shz.common.namespace("Service").musickit = function (t) {
  var a,
    r = this,
    e = shz.common.Error,
    s = shz.common.namespace("serviceutils.image"),
    n = s.buildArtworkSourceSet,
    i = s.getSize;
  function o(t) {
    var a;
    return t.albumadamid
      ? t.albumadamid
      : (t._huboptions &&
          t._huboptions.open &&
          t._huboptions.open.actions &&
          t._huboptions.open.actions.some(function (t) {
            return (
              "hub:applemusic:deeplink" == t.name &&
                0 === (a = t.uri.match(/([\w]+)(\?)/)[1]).indexOf("id") &&
                (a = a.substr(2)),
              a
            );
          }),
        a);
  }
  shz.common.merge(r, shz.common.create(shz.Service.APIs)), (r.app = t);
  var u,
    c = [
      "full-albums",
      "featured-albums",
      "latest-release",
      "top-music-videos",
      "similar-artists",
      "top-songs",
      "playlists",
    ],
    l =
      ((u = {
        extend: "artistBio,bornOrFormed,editorialArtwork,origin",
        views: c.join(","),
      }),
      Object.keys(u)
        .map(function (t) {
          return encodeURIComponent(t) + "=" + encodeURIComponent(u[t]);
        })
        .join("&")),
    m = function () {
      var a =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        e = a.artwork && a.artwork.url,
        s = shz.common.getLocationParts(a.url),
        o = s.pathname.split("/"),
        u = o.indexOf("artist"),
        c = o[u + 1],
        l = i(e),
        m = t.strings.website_artist_share.replace(/{artist}/, a.name),
        p = { image: l, subject: m, text: m, twitter: m };
      return {
        originalImage: e,
        artworkURL: l,
        srcSet: n(t, e, r.dim),
        alias: c,
        previewUrl: a.previews && a.previews[0] && a.previews[0].url,
        releaseYear: a.releaseDate && new Date(a.releaseDate).getFullYear(),
        internalArtistPath: r.artistPath,
        share: p,
      };
    };
  (r.cmds =
    (_defineProperty(
      (a = {
        song: [
          {
            requestParams: function (t) {
              var a = t.adamId;
              return a
                ? {
                    url: shz.common.supplant(
                      "/services/amapi/v1/catalog/{country}/songs/".concat(a),
                      r.app
                    ),
                    process: function (t, a) {
                      var r = t.data[0];
                      (r._template = m(r.attributes)), a(r);
                    },
                  }
                : {};
            },
          },
        ],
        upcomingEvents: ["event.upcomingEvents"],
        album: [
          "track.track",
          {
            requestParams: function (a) {
              var s = o(a);
              return {
                url:
                  s &&
                  shz.common.supplant(
                    "/services/amapi/custom/{country}/albums/{id}".replace(
                      /{id}/,
                      s
                    ),
                    r.app
                  ),
                process: function (t, a) {
                  var r,
                    s,
                    n = [];
                  try {
                    ((r = t.data[0])._artwork = r.attributes.artwork.url
                      .replace(/{w}/, 400)
                      .replace(/{h}/, 400)),
                      (n = t.data[0].relationships.tracks.data);
                  } catch (t) {
                    s = new e({
                      type: e.DATAERROR,
                      message: "musickit album data",
                    });
                  }
                  a(!s && { tracks: n, meta: r }, s);
                },
                onerror: function (a, r) {
                  shz.stats.stat(
                    { beaconId: "error-mk-album", trackkey: s },
                    t
                  ),
                    r(null, a);
                },
              };
            },
          },
        ],
        artist_views_attributes: [
          {
            requestParams: function (a) {
              var s = a.adamId;
              return s
                ? {
                    url:
                      shz.common.supplant(
                        "/services/amapi/v1/catalog/{country}/artists/".concat(
                          s
                        ),
                        r.app
                      ) + "?".concat(l),
                    process: function (a, r) {
                      var s = (a || {}).data,
                        n = (Array.isArray(s) && s[0]) || {},
                        i = n.attributes,
                        o = n.views;
                      if (!i)
                        throw new e({
                          type: e.NOTFOUND,
                          args: { redirect: 404 },
                        });
                      var u = t.getService("artist").utils.getArtistUrl(n);
                      (i._template = m(i, { artistPath: u })),
                        c.forEach(function (t) {
                          ((o[t] && o[t].data) || []).forEach(function (t) {
                            if (t)
                              try {
                                t._template = m(t.attributes, {
                                  artistPath: u,
                                });
                              } catch (t) {
                                console.log("Failed to normalize");
                              }
                          });
                        }),
                        r({ attributes: i, views: o });
                    },
                  }
                : {};
            },
          },
        ],
        songtoptracks: [
          "musickit.song",
          {
            requestParams: function (t) {
              return {
                process: function (a, r) {
                  try {
                    r({ adamId: t.relationships.artists.data[0].id });
                  } catch (t) {
                    throw new e({ type: e.NOTFOUND, args: { redirect: 404 } });
                  }
                },
              };
            },
          },
          "musickit.toptracks",
        ],
        toptracks: [
          "musickit.artist_views_attributes",
          {
            requestParams: function (t) {
              return {
                process: function (a, r) {
                  r(t.views["top-songs"]);
                },
              };
            },
          },
        ],
        playlist: [
          "track.track",
          {
            requestParams: function (a) {
              var s = o(a);
              return {
                url:
                  s &&
                  shz.common.supplant(
                    "/services/amapi/custom/{country}/playlistalbum/{id}".replace(
                      /{id}/,
                      s
                    ),
                    r.app
                  ),
                process: function (t, a) {
                  var r,
                    s,
                    n = [];
                  try {
                    ((r = t.data[0])._artwork = r.attributes.artwork.url
                      .replace(/{w}/, 400)
                      .replace(/{h}/, 400)),
                      (n = t.data[0].relationships.tracks.data);
                  } catch (t) {
                    s = new e({
                      type: e.DATAERROR,
                      message: "musickit playlist data " + t.message,
                    });
                  }
                  a(!s && { tracks: n, meta: r }, s);
                },
                onerror: function (a, r) {
                  shz.stats.stat(
                    { beaconId: "error-mk-playlist", trackkey: s },
                    t
                  ),
                    r(null, a);
                },
              };
            },
          },
        ],
        playlistshazamtracks: [
          {
            requestParams: function (a) {
              return {
                url:
                  a &&
                  shz.common.supplant(
                    "/services/amapi/custom/{language}/{country}/playlist/shazamtracks/{id}/full".replace(
                      /{id}/,
                      a
                    ),
                    r.app
                  ),
                onerror: function (r, e) {
                  shz.stats.stat(
                    { beaconId: "error-mk-playlist", trackid: a },
                    t
                  ),
                    e(null, r);
                },
              };
            },
          },
        ],
        albumshazamtracks: [
          "track.track",
          {
            requestParams: function (a) {
              var e = o(a);
              return {
                url:
                  e &&
                  shz.common.supplant(
                    "/services/amapi/custom/{language}/{country}/album/shazamtracks/{id}/full".replace(
                      /{id}/,
                      e
                    ),
                    r.app
                  ),
                onerror: function (a, r) {
                  shz.stats.stat({ beaconId: "error-mk-album", trackid: e }, t),
                    r(null, a);
                },
              };
            },
          },
        ],
        albumplaylists: [
          "track.track",
          {
            requestParams: function (a) {
              var e = o(a);
              return {
                url:
                  e &&
                  shz.common.supplant(
                    "/services/amapi/custom/{language}/{country}/playlistsbyalbum/{id}".replace(
                      /{id}/,
                      e
                    ),
                    r.app
                  ),
                onerror: function (a, r) {
                  shz.stats.stat({ beaconId: "error-mk-album", trackid: e }, t),
                    r(null, a);
                },
              };
            },
          },
        ],
        albumfeaturedin: [
          "track.track",
          {
            requestParams: function (a) {
              var e = o(a);
              return {
                url:
                  e &&
                  shz.common.supplant(
                    "/services/amapi/custom/{language}/{country}/albumfeaturedin/{id}".replace(
                      /{id}/,
                      e
                    ),
                    r.app
                  ),
                onerror: function (a, r) {
                  shz.stats.stat({ beaconId: "error-mk-album", trackid: e }, t),
                    r(null, a);
                },
              };
            },
          },
        ],
      }),
      "playlistshazamtracks",
      [
        {
          requestParams: function (t) {
            return {
              url:
                t &&
                shz.common.supplant(
                  "/services/amapi/custom/{language}/{country}/playlist/shazamtracks/{id}/full".replace(
                    /{id}/,
                    t
                  ),
                  r.app
                ),
              onerror: function (a, r) {
                shz.stats.stat({ beaconId: "error-mk-playlist", trackid: t }),
                  r(null, a);
              },
            };
          },
        },
      ]
    ),
    _defineProperty(a, "albumshazamtracks", [
      "track.track",
      {
        requestParams: function (t) {
          var a = o(t);
          return {
            url:
              a &&
              shz.common.supplant(
                "/services/amapi/custom/{language}/{country}/album/shazamtracks/{id}/full".replace(
                  /{id}/,
                  a
                ),
                r.app
              ),
            onerror: function (t, r) {
              shz.stats.stat({ beaconId: "error-mk-album", trackid: a }),
                r(null, t);
            },
          };
        },
      },
    ]),
    _defineProperty(a, "albumplaylists", [
      "track.track",
      {
        requestParams: function (t) {
          var a = o(t);
          return {
            url:
              a &&
              shz.common.supplant(
                "/services/amapi/custom/{language}/{country}/playlistsbyalbum/{id}".replace(
                  /{id}/,
                  a
                ),
                r.app
              ),
            onerror: function (t, r) {
              shz.stats.stat({ beaconId: "error-mk-album", trackid: a }),
                r(null, t);
            },
          };
        },
      },
    ]),
    _defineProperty(a, "albumfeaturedin", [
      "track.track",
      {
        requestParams: function (t) {
          var a = o(t);
          return {
            url:
              a &&
              shz.common.supplant(
                "/services/amapi/custom/{language}/{country}/albumfeaturedin/{id}".replace(
                  /{id}/,
                  a
                ),
                r.app
              ),
            onerror: function (t, r) {
              shz.stats.stat({ beaconId: "error-mk-album", trackid: a }),
                r(null, t);
            },
          };
        },
      },
    ]),
    _defineProperty(a, "videosbyalbum", {
      requestParams: function (a) {
        var s = a.albumId;
        return {
          url:
            s &&
            shz.common.supplant(
              "/services/amapi/custom/{country}/musicvideosbyalbum/{id}".replace(
                /{id}/,
                s
              ),
              r.app
            ),
          process: function (t, r) {
            var s,
              n,
              i,
              o = [],
              u = -1;
            try {
              (s = t.data[0]),
                (o = t.data[0].relationships["music-videos"].data),
                a.artistOnly &&
                  a.artistName &&
                  (o = o.filter(function (t) {
                    return (
                      -1 !==
                      t.attributes.artistName
                        .toLowerCase()
                        .search(a.artistName.toLowerCase())
                    );
                  })),
                a.sort &&
                  a.artistName &&
                  a.name &&
                  -1 !==
                    (u = o.findIndex(function (t) {
                      return (
                        -1 !=
                        t.attributes.name
                          .toLowerCase()
                          .indexOf(a.name.toLowerCase())
                      );
                    })) &&
                  ((i = o[u]), o.splice(u, 1), o.unshift(i));
            } catch (t) {
              n = new e({
                type: e.DATAERROR,
                message: "musickit video data " + t.message,
              });
            }
            r(!n && { tracks: o, meta: s, sorted: -1 !== u }, n);
          },
          onerror: function (a, r) {
            shz.stats.stat({ beaconId: "error-mk-videos", albumid: s }, t),
              r(null, a);
          },
        };
      },
    }),
    _defineProperty(a, "videosbytrack", [
      "track.track",
      {
        requestParams: function (t, a) {
          var r;
          return {
            url: null,
            process: function (e, s) {
              ((r = a.videos || {}).albumId = o(t)),
                (r.sort || r.artistOnly) &&
                  ((r.artistName = t.subtitle), (r.name = t.title)),
                s(r);
            },
          };
        },
      },
      "musickit.videosbyalbum",
    ]),
    a)),
    (r.utils = {
      normalize: m,
      normalizeTrack: function (t, a) {
        var r,
          s,
          n,
          i = {};
        try {
          "5" == t.layout
            ? ((r = t.previewurl),
              t._huboptions.open && (s = t._huboptions.open.actions))
            : ((r = (n = t._stores.apple) && n.playurl),
              (s = (n = t.stores.apple) && n.actions)),
            (i = {
              attributes: {
                name: t.heading.title,
                artistName: t.heading.subtitle,
                artwork: { url: t.images && t.images.default },
              },
            }),
            r && (i.attributes.previews = [{ url: r }]),
            s && (i.attributes.url = s);
        } catch (t) {
          i.error = new e({
            type: e.DATAERROR,
            message: "musickit normalizeTrack " + t.message,
          });
        }
        return i;
      },
      getMKVideoUrl: function (t) {
        var a;
        try {
          t.meta.relationships["music-videos"].data.some(function (t) {
            try {
              return t.attributes.previews.some(function (t) {
                return (a = t.url), t.url;
              });
            } catch (t) {}
          });
        } catch (t) {}
        return a;
      },
    });
};
function _slicedToArray(t, r) {
  return (
    _arrayWithHoles(t) ||
    _iterableToArrayLimit(t, r) ||
    _unsupportedIterableToArray(t, r) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(t, r) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray(t, r);
    var a = Object.prototype.toString.call(t).slice(8, -1);
    return (
      "Object" === a && t.constructor && (a = t.constructor.name),
      "Map" === a || "Set" === a
        ? Array.from(t)
        : "Arguments" === a ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
        ? _arrayLikeToArray(t, r)
        : void 0
    );
  }
}
function _arrayLikeToArray(t, r) {
  (null == r || r > t.length) && (r = t.length);
  for (var a = 0, e = new Array(r); a < r; a++) e[a] = t[a];
  return e;
}
function _iterableToArrayLimit(t, r) {
  var a =
    t &&
    (("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"]);
  if (null != a) {
    var e,
      i,
      n = [],
      s = !0,
      o = !1;
    try {
      for (
        a = a.call(t);
        !(s = (e = a.next()).done) && (n.push(e.value), !r || n.length !== r);
        s = !0
      );
    } catch (t) {
      (o = !0), (i = t);
    } finally {
      try {
        s || null == a.return || a.return();
      } finally {
        if (o) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles(t) {
  if (Array.isArray(t)) return t;
}
!(function () {
  function t(t, r, a) {
    return (
      ((t && t.feed) || []).filter(function (t) {
        return t.type == r && (!a || -1 !== t.id.search(a));
      }) || []
    );
  }
  var r = shz.common.namespace("serviceutils.image"),
    a = r.buildArtworkSourceSet,
    e = r.getWebPImage;
  function i(t, r) {
    !(function (t, r) {
      3 == t.layout &&
        (t.avatar && (t.avatar = { default: t.avatar }),
        (t.postrurl = t.url),
        (t.url = ""
          .concat("https://www.shazam.com/artist/")
          .concat(t.id, "/")
          .concat(t.alias)));
    })(t);
    var i = t && t.avatar && t.avatar.default,
      n = "string" == typeof t.avatar ? t.avatar : null;
    n && (t.avatar = void 0),
      shz.common.merge(t, {
        avatar: { default: n || r.config.services.amp.artist.noartimage },
      }),
      (function (t) {
        var r = t.weburl;
        if (r && r.match(/^https:\/\/music\.apple\.com/)) {
          var a = r.match(/\/artist\/([^\/]*)\/?([0-9]*)?$/);
          if (a) {
            var e = a[1],
              i = a[2];
            i || parseInt(e) != e || ((i = e), (e = "-")),
              (t.weburl = ""
                .concat("https://www.shazam.com/artist/")
                .concat(e, "/")
                .concat(i));
          }
        }
      })(t),
      (t.url = !t.url && t.weburl ? t.weburl : t.url),
      t.url &&
        (r.langpath &&
          (t.url = t.url.replace(/\/artist\//, r.langpath + "/artist/")),
        t.androidUrl || (t.androidUrl = t.url.replace("http://", "http/")),
        (t.url = t.url.replace("http:", r.location.protocol)));
    try {
      t.share &&
        t.share.href &&
        (t.share.href = t.share.href.replace(/^http:\/\//, "https://"));
    } catch (t) {}
    t.name &&
      t.name.match(/<font/g) &&
      (t.name = t.name.replace(/<[^>]*>/g, ""));
    var s =
      (t.avatar &&
        t.avatar.default &&
        t.avatar.default.replace(/800x800/, "375x375")) ||
      "";
    i && (s = e(r, s)),
      (t._template = { artworkURL: s, srcSet: a(r, s), alias: t.alias });
  }
  shz.common.namespace("Service").artist = function (r) {
    var a,
      e = r.config.services.amp,
      n = this,
      s = shz.common.Error,
      o = shz.common.supplant(e.artist.url, r);
    shz.common.merge(n, shz.common.create(shz.Service.APIs));
    var c = function () {
      try {
        void 0 === a && (a = r.artistAdamIdEnabled);
      } catch (t) {}
      return a;
    };
    (n.app = r),
      (n.cmds = {
        artist: [
          {
            requestParams: function (t) {
              var a,
                e,
                c,
                u =
                  "string" == typeof t
                    ? (c = t.match(/^\/?([\d]+)(\/|$)/)) && c.length && c[1]
                    : t.artistId ||
                      (t.artists && t.artists.length && t.artists[0].id);
              return u
                ? ((e = o.replace(/{artistId}/, u)),
                  (a = n.app.config.urlparams.itsct) &&
                    e &&
                    (e = shz.common.setQueryParams(e, { itsct: a })),
                  {
                    url: e,
                    process: function (t, a) {
                      if (!t)
                        throw (
                          ((t = {}),
                          new s({ type: s.NOTFOUND, args: { redirect: 404 } }))
                        );
                      i(t, r), a(t);
                    },
                  })
                : {};
            },
          },
          "track.backcolor",
        ],
        artist2: [
          {
            requestParams: function (t) {
              var a =
                t.artists &&
                t.artists.length &&
                t.artists[1] &&
                t.artists[1].id;
              return a
                ? {
                    url: o.replace(/{artistId}/, a),
                    process: function (t, a) {
                      if (!t)
                        throw (
                          ((t = {}),
                          new s({ type: s.NOTFOUND, args: { redirect: 404 } }))
                        );
                      i(t, r), a(t);
                    },
                  }
                : {};
            },
          },
        ],
        artist_views_attributes: [
          "artist.artist",
          {
            requestParams: function (t) {
              var r = t.adamid;
              return {
                process: function (t, a) {
                  a({ adamId: r });
                },
              };
            },
          },
          "musickit.artist_views_attributes",
        ],
        videos: [
          "artist.artist",
          {
            requestParams: function (r) {
              var a,
                e = t(r, "general", "-artist-videos");
              return (
                e[0] &&
                  (e[0].actions || []).some(function (t) {
                    return (a = "youtubeplay" == t.type && t.href);
                  }),
                {
                  url: a,
                  process: function (t, r) {
                    var a = (t && t.youtube) || {};
                    (a.videos || [])
                      .concat(a.related || [])
                      .forEach(function (t) {
                        (t.id =
                          t.id ||
                          (t.href && t.href.match(/videoid\/([^$]*)/)[1])),
                          (t.url = t.actions.length && t.actions[0].href);
                      }),
                      r(t);
                  },
                }
              );
            },
          },
        ],
        shazams: [
          "artist.artist",
          {
            requestParams: function (r) {
              var a;
              return (
                t(r, "rail").some(function (t) {
                  return (
                    t.id == r.id + "-artist-shazams" && (a = t.content.url), a
                  );
                }),
                { url: a }
              );
            },
          },
          "track.normalizeChart",
        ],
      }),
      (n.utils = {
        normalizeArtist: i,
        getPathParams: function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            r = _slicedToArray(t, 2),
            a = r[0],
            e = r[1],
            i = parseInt(a),
            n = parseInt(e);
          if ((i != a ? (i = a) : n != e && (n = e), c())) {
            if ((isNaN(i) && !isNaN(n)) || (!isNaN(i) && !isNaN(n)))
              return { adamId: n, alias: a };
            if (!isNaN(i) && isNaN(n)) return { artistId: i, alias: e };
          } else {
            if ((!isNaN(i) && isNaN(n)) || (!isNaN(i) && !isNaN(n)))
              return { artistId: i, alias: e };
            if (isNaN(i) && !isNaN(n)) return { adamId: n, alias: a };
          }
          return {};
        },
        getArtistUrl: function (t) {
          if (t) {
            var r = c();
            return t.attributes
              ? r && t.id
                ? "/artist/-/".concat(t.id)
                : null
              : r && t.adamid
              ? "/artist/".concat(t.alias || "-", "/").concat(t.adamid)
              : "/artist/".concat(t.id, "/").concat(t.alias);
          }
        },
      });
  };
})();
shz.common.namespace("Service").search = function (r) {
  var e,
    t = r.config,
    a = shz.common.supplant(t.services.amp.search.url, r),
    s = shz.common.supplant(t.services.amp.search.track.url, r),
    c = {},
    i = this,
    n = function (r) {
      var e = r;
      return (
        r.match("/services/search/") ||
          (e = r.replace("/search/", "/services/search/")),
        e
      );
    };
  for (e in shz.country)
    c[shz.country[e].toLowerCase().replace(/\s/g, "-")] = e.toLowerCase();
  shz.common.merge(i, shz.common.create(shz.Service.APIs)),
    (i.app = r),
    (i.cmds = {
      search: [
        {
          requestParams: function (e) {
            var t,
              s = a;
            return (
              e.next && (s = n(e.next)),
              (s = s
                .replace(/{query}/, encodeURIComponent(e.query))
                .replace(/{pageSize}/, e.pageSize || 3)
                .replace(/{page}/, e.page || 0)
                .replace(/{limit}/, e.limit || 3)),
              (t = i.app.config.urlparams.itsct) &&
                s &&
                (s = shz.common.setQueryParams(s, { itsct: t })),
              {
                url: s,
                process: function (e, t) {
                  var a = r.getService("track").utils,
                    s = r.getService("artist").utils;
                  e &&
                    e.tracks &&
                    e.tracks.hits &&
                    Array.isArray(e.tracks.hits) &&
                    (e.tracks.hits = e.tracks.hits.map(function (e) {
                      var t = e.track;
                      return a.normalizeTrack(t, r), t;
                    })),
                    e &&
                      e.artists &&
                      e.artists.hits &&
                      Array.isArray(e.artists.hits) &&
                      (e.artists.hits = e.artists.hits.map(function (e) {
                        var t = e.artist;
                        return s.normalizeArtist(t, r), t;
                      })),
                    e.topresult && e.topresult.artist
                      ? s.normalizeArtist(e.topresult.artist, r)
                      : e.topresult &&
                        e.topresult.track &&
                        a.normalizeTrack(e.topresult.track, r),
                    t(e);
                },
              }
            );
          },
        },
      ],
      searchTrack: [
        {
          requestParams: function (e) {
            var t = s;
            return (
              e.next && (t = n(e.next)),
              {
                url: t
                  .replace(/{query}/, encodeURIComponent(e.query))
                  .replace(/{pageSize}/, e.pageSize || 10)
                  .replace(/{page}/, e.page || 0),
                process: function (e, t) {
                  var a = r.getService("track").utils;
                  e.tracks &&
                    e.tracks.hits &&
                    e.tracks.hits.forEach(function (e) {
                      a.normalizeTrack(e, r);
                    }),
                    t(e);
                },
              }
            );
          },
        },
      ],
    });
};
function _extends() {
  return (_extends =
    Object.assign ||
    function (t) {
      for (var a = 1; a < arguments.length; a++) {
        var r = arguments[a];
        for (var e in r)
          Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
      }
      return t;
    }).apply(this, arguments);
}
shz.common.namespace("Service").myshazam = function (t) {
  var a = t.config.services.amp,
    r = [],
    e = this;
  shz.common.merge(e, shz.common.create(shz.Service.APIs)), (e.app = t);
  var n = t.getService("track");
  function s(t, a) {
    456 == t.args.status && shz.ux.auth.logout(), a(null, t);
  }
  e.cmds = {
    tags: {
      requestParams: function (t) {
        return (
          (t.source = "tags_" + (shz.ux.auth.storage ? "cloud" : "amp")),
          {
            process: function (a, r) {
              e.request(t.source, t, r);
            },
          }
        );
      },
    },
    tags_amp: {
      requestParams: function (r) {
        var e = [];
        return (
          e.push("limit=".concat(r.count || 20)),
          r.nextParam && e.push("token=" + r.nextParam),
          {
            url: shz.common
              .supplant(a.tags.list.v2.url, t)
              .replace(/:queryString/, e.length ? "?" + e.join("&") : ""),
            process: function (a, r) {
              a.tags.forEach(function (a) {
                n.utils.normalizeTrack(a.track, t);
              }),
                r({ data: a.tags, nextParam: a.token });
            },
            onerror: s,
          }
        );
      },
    },
    tags_cloud: {
      requestParams: function (a) {
        return {
          process: function (e, s) {
            var o = a.nextParam || {},
              c = o.start,
              u = void 0 === c ? 0 : c,
              i = o.count,
              m = void 0 === i ? 20 : i;
            if (-1 != u) {
              var l = ""
                  .concat(shz.ux.auth.storage, "-")
                  .concat(u, "-")
                  .concat(m),
                p = (r[l] = r[l] || []);
              p.push(s),
                p.length > 1 ||
                  shz.ux[shz.ux.auth.storage.toLowerCase()].getTags(
                    { start: u, count: m },
                    function (a, e) {
                      if (e)
                        p.forEach(function (t) {
                          t(null, e);
                        }),
                          delete r[l];
                      else {
                        a.length < m ? ((u = -1), (m = 0)) : (u += m);
                        var s = a.map(function (t) {
                          return {
                            cmds: "track",
                            params: {
                              trackId:
                                t.trackKey || (t.fields && t.fields.ShazamKey),
                              tagdata: t,
                              retry: !0,
                            },
                          };
                        });
                        n.requestBatch(s, function (a, e) {
                          var s = a
                            .map(function (a) {
                              try {
                                if (!a.error)
                                  return (
                                    n.utils.normalizeTrack(a.response, t),
                                    _extends(a.request.params.tagdata, {
                                      track: a.response,
                                      key: a.request.params.trackId,
                                    })
                                  );
                              } catch (t) {}
                            })
                            .filter(function (t) {
                              return (
                                t && "HIDDEN" != t.track.type.toUpperCase()
                              );
                            });
                          p.forEach(function (t) {
                            t(
                              { data: s, nextParam: { start: u, count: m } },
                              e
                            );
                          }),
                            delete r[l];
                        });
                      }
                    }
                  );
            } else s({ data: [], nextParam: a.nextParams });
          },
        };
      },
    },
    tags_icloud: {},
    tagcount: {
      requestParams: function () {
        return {
          url: shz.common.supplant(a.tags.count.url, t),
          process: function (t, a) {
            e.app.set("user:shazamcount", t.count), a(t);
          },
          onerror: s,
        };
      },
    },
  };
};
shz.common.namespace("Service").sso = function (e) {
  var r = this;
  shz.common.merge(r, shz.common.create(shz.Service.APIs)), (r.app = e);
  var c = function (e) {
    var c;
    try {
      var o = e.args.status,
        t = JSON.parse(e.args.response);
      if (401 == o)
        return (
          (c = t.error.redirectUrl),
          console.log(
            c.replace(
              "{path}",
              document.location.pathname + document.location.search
            )
          ),
          document.location.replace(
            c.replace(
              "{path}",
              document.location.pathname + document.location.search
            )
          ),
          !0
        );
    } catch (e) {
      if (c) return r.app.set("app:_redirect", { path: c, status: 302 }), !0;
    }
  };
  r.cmds = {
    checkLogin: {
      requestParams: function (e) {
        return (
          e && e.noredirect,
          {
            url: "/secure/status",
            nocache: !0,
            process: function (e, r) {
              c(e) || r();
            },
            onerror: function (e, r) {
              c(e) || r();
            },
          }
        );
      },
    },
  };
};
shz.common.namespace("Service").trackoverride = function (e) {
  var a = {};
  function r(e, a, r) {
    var t = e.cb,
      o = e.frameData && e.frameData.data;
    r
      ? t(null, r)
      : (o &&
          (a = (function (e, a) {
            var r, t, o, c;
            return (
              a &&
                a.key == e.key &&
                ((r = Object.getPrototypeOf(e)),
                (e = shz.common.create(r.key ? r : e)),
                shz.app.supports.android
                  ? a.google &&
                    (a.google.stream &&
                      ((t = {
                        name: "hub:googleallaccess:androiddeeplink",
                        type: "uri",
                        uri: a.google.stream,
                      }),
                      (c = shz.common.namespace(
                        "_huboptions.open.actions[0]",
                        e
                      )),
                      shz.common.merge(c, t, !0, !0)),
                    a.google.buy &&
                      ((o = { type: "uri", uri: a.google.buy }),
                      (c = shz.common.namespace(
                        "_huboptions.buy.actions[0]",
                        e
                      )),
                      shz.common.merge(c, o, !0, !0)))
                  : a.apple &&
                    (a.apple.stream &&
                      ((t = {
                        name: "hub:applemusic:deeplink",
                        type: "applemusicopen",
                        uri: a.apple.stream,
                      }),
                      (c = shz.common.namespace(
                        "_huboptions.open.actions[0]",
                        e
                      )),
                      shz.common.merge(c, t, !0, !0)),
                    a.apple.buy &&
                      ((o = { type: "itunesbuy", uri: a.apple.buy }),
                      (c = shz.common.namespace(
                        "_huboptions.buy.actions[0]",
                        e
                      )),
                      shz.common.merge(c, o, !0, !0))),
                shz.common.merge(e, a, !0, !0)),
              e
            );
          })(a, o)),
        (e.frameData = e.frameData || {}),
        (e.frameData.data = a),
        t(e.frameData));
  }
  (this.publish = function (r) {
    if (r.id) {
      var t = r.data,
        o = t.data;
      o && o.key && shz.serviceutils.v5.normalizeOverrides(o),
        (a[r.id] = t),
        !r.silent && e.fire("services:trackoverride:update", { id: r.id });
    }
  }),
    (this.request = function (t, o) {
      var c,
        m,
        n,
        i = {};
      (c = t.id),
        t.service && (i.service = t.service),
        t.ampPlatform && (i.ampPlatform = t.ampPlatform),
        (m = a[c])
          ? !(n = m.data.key) || t.cacheOnly
            ? r({ cb: o, frameData: m }, m.data)
            : ((i.trackId = n),
              e
                .getService("track")
                .request("track", i, r.bind(null, { frameData: m, cb: o })))
          : t.trackId
          ? ((i.trackId = t.trackId),
            e.getService("track").request("track", i, r.bind(null, { cb: o })))
          : o();
    });
};
shz.common.namespace("Service").blob = function (e) {
  var i = this,
    n = new shz.common.Datasync();
  ((i = shz.common.merge(i, n)).publish = function (i) {
    i.id &&
      n.set(i.id, i.data, function () {
        !i.silent && e.fire("services:blob:update", { id: i.id, data: i.data });
      });
  }),
    (i.request = n.get);
};
(function () {
  shz.common.namespace("partials.launch.meta");
  shz["partials"]["launch"]["meta"] = Handlebars.template({
    1: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        ' <meta http-equiv="Content-Language" content="' +
        ((stack1 = (
          lookupProperty(helpers, "ifequal") ||
          (depth0 && lookupProperty(depth0, "ifequal")) ||
          container.hooks.helperMissing
        ).call(
          depth0 != null ? depth0 : container.nullContext || {},
          depth0 != null ? lookupProperty(depth0, "language") : depth0,
          "gb",
          {
            name: "ifequal",
            hash: {},
            fn: container.program(2, data, 0),
            inverse: container.program(4, data, 0),
            data: data,
            loc: {
              start: { line: 1, column: 509 },
              end: { line: 1, column: 572 },
            },
          }
        )) != null
          ? stack1
          : "") +
        '"> '
      );
    },
    2: function (container, depth0, helpers, partials, data) {
      return "en-GB";
    },
    4: function (container, depth0, helpers, partials, data) {
      var helper,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return container.escapeExpression(
        ((helper =
          (helper =
            lookupProperty(helpers, "language") ||
            (depth0 != null ? lookupProperty(depth0, "language") : depth0)) !=
          null
            ? helper
            : container.hooks.helperMissing),
        typeof helper === "function"
          ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
              name: "language",
              hash: {},
              data: data,
              loc: {
                start: { line: 1, column: 548 },
                end: { line: 1, column: 560 },
              },
            })
          : helper)
      );
    },
    6: function (container, depth0, helpers, partials, data) {
      return ' <meta property="og:type" content="website"> ';
    },
    8: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        " app-argument=shazam://v5/" +
        ((stack1 = container.lambda(
          (stack1 = depth0 != null ? lookupProperty(depth0, "meta") : depth0) !=
            null
            ? lookupProperty(stack1, "appPath")
            : stack1,
          depth0
        )) != null
          ? stack1
          : "")
      );
    },
    10: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        " " +
        ((stack1 = lookupProperty(helpers, "if").call(
          depth0 != null ? depth0 : container.nullContext || {},
          depth0 != null ? lookupProperty(depth0, "noindex") : depth0,
          {
            name: "if",
            hash: {},
            fn: container.program(11, data, 0),
            inverse: container.program(14, data, 0),
            data: data,
            loc: {
              start: { line: 1, column: 1314 },
              end: { line: 1, column: 4050 },
            },
          }
        )) != null
          ? stack1
          : "") +
        "  "
      );
    },
    11: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        ' <meta name="robots" content="noindex,nofollow"> ' +
        ((stack1 = lookupProperty(helpers, "if").call(
          depth0 != null ? depth0 : container.nullContext || {},
          depth0 != null
            ? lookupProperty(depth0, "noindexIncludeMeta")
            : depth0,
          {
            name: "if",
            hash: {},
            fn: container.program(12, data, 0),
            inverse: container.noop,
            data: data,
            loc: {
              start: { line: 1, column: 1378 },
              end: { line: 1, column: 1458 },
            },
          }
        )) != null
          ? stack1
          : "") +
        " "
      );
    },
    12: function (container, depth0, helpers, partials, data) {
      var stack1,
        helper,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        ' <meta property="og:url" content="' +
        ((stack1 =
          ((helper =
            (helper =
              lookupProperty(helpers, "href") ||
              (depth0 != null ? lookupProperty(depth0, "href") : depth0)) !=
            null
              ? helper
              : container.hooks.helperMissing),
          typeof helper === "function"
            ? helper.call(
                depth0 != null ? depth0 : container.nullContext || {},
                {
                  name: "href",
                  hash: {},
                  data: data,
                  loc: {
                    start: { line: 1, column: 1438 },
                    end: { line: 1, column: 1448 },
                  },
                }
              )
            : helper)) != null
          ? stack1
          : "") +
        '"> '
      );
    },
    14: function (container, depth0, helpers, partials, data) {
      var stack1,
        helper,
        options,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        alias2 = container.hooks.helperMissing,
        alias3 = "function",
        alias4 = container.hooks.blockHelperMissing,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          },
        buffer =
          " " +
          ((stack1 = lookupProperty(helpers, "if").call(
            alias1,
            depth0 != null ? lookupProperty(depth0, "ogurl") : depth0,
            {
              name: "if",
              hash: {},
              fn: container.program(15, data, 0),
              inverse: container.program(17, data, 0),
              data: data,
              loc: {
                start: { line: 1, column: 1468 },
                end: { line: 1, column: 1599 },
              },
            }
          )) != null
            ? stack1
            : "") +
          ' <meta property="og:title" content="' +
          ((stack1 = (
            lookupProperty(helpers, "firstValue") ||
            (depth0 && lookupProperty(depth0, "firstValue")) ||
            alias2
          ).call(
            alias1,
            depth0 != null ? lookupProperty(depth0, "fbtext1") : depth0,
            depth0 != null ? lookupProperty(depth0, "pageTitle") : depth0,
            depth0 != null ? lookupProperty(depth0, "subject") : depth0,
            "Shazam",
            {
              name: "firstValue",
              hash: {},
              fn: container.program(19, data, 0),
              inverse: container.noop,
              data: data,
              loc: {
                start: { line: 1, column: 1635 },
                end: { line: 1, column: 1701 },
              },
            }
          )) != null
            ? stack1
            : "") +
          '"> ' +
          ((stack1 = lookupProperty(helpers, "if").call(
            alias1,
            depth0 != null ? lookupProperty(depth0, "type") : depth0,
            {
              name: "if",
              hash: {},
              fn: container.program(21, data, 0),
              inverse: container.noop,
              data: data,
              loc: {
                start: { line: 1, column: 1704 },
                end: { line: 1, column: 1771 },
              },
            }
          )) != null
            ? stack1
            : "") +
          ' <meta property="og:description" content="' +
          ((stack1 = (
            lookupProperty(helpers, "firstValue") ||
            (depth0 && lookupProperty(depth0, "firstValue")) ||
            alias2
          ).call(
            alias1,
            depth0 != null ? lookupProperty(depth0, "fbtext2") : depth0,
            depth0 != null ? lookupProperty(depth0, "pageDesc") : depth0,
            depth0 != null ? lookupProperty(depth0, "text") : depth0,
            "Shazam",
            {
              name: "firstValue",
              hash: {},
              fn: container.program(19, data, 0),
              inverse: container.noop,
              data: data,
              loc: {
                start: { line: 1, column: 1813 },
                end: { line: 1, column: 1875 },
              },
            }
          )) != null
            ? stack1
            : "") +
          '"><meta property="og:image" content="' +
          ((stack1 =
            ((helper =
              (helper =
                lookupProperty(helpers, "image") ||
                (depth0 != null ? lookupProperty(depth0, "image") : depth0)) !=
              null
                ? helper
                : alias2),
            typeof helper === alias3
              ? helper.call(alias1, {
                  name: "image",
                  hash: {},
                  data: data,
                  loc: {
                    start: { line: 1, column: 1912 },
                    end: { line: 1, column: 1923 },
                  },
                })
              : helper)) != null
            ? stack1
            : "") +
          '"> ' +
          ((stack1 = alias4.call(
            depth0,
            container.lambda(
              (stack1 =
                depth0 != null ? lookupProperty(depth0, "video") : depth0) !=
                null
                ? lookupProperty(stack1, "image")
                : stack1,
              depth0
            ),
            {
              name: "video.image",
              hash: {},
              fn: container.program(23, data, 0),
              inverse: container.noop,
              data: data,
              loc: {
                start: { line: 1, column: 1926 },
                end: { line: 1, column: 2066 },
              },
            }
          )) != null
            ? stack1
            : "") +
          " " +
          ((stack1 = lookupProperty(helpers, "if").call(
            alias1,
            depth0 != null ? lookupProperty(depth0, "appPath") : depth0,
            {
              name: "if",
              hash: {},
              fn: container.program(25, data, 0),
              inverse: container.noop,
              data: data,
              loc: {
                start: { line: 1, column: 2067 },
                end: { line: 1, column: 2155 },
              },
            }
          )) != null
            ? stack1
            : "") +
          ' <meta property="al:ios:app_store_id" content="284993459"><meta property="al:ios:app_name" content="Shazam"> ' +
          ((stack1 = lookupProperty(helpers, "if").call(
            alias1,
            depth0 != null ? lookupProperty(depth0, "appPath") : depth0,
            {
              name: "if",
              hash: {},
              fn: container.program(27, data, 0),
              inverse: container.noop,
              data: data,
              loc: {
                start: { line: 1, column: 2264 },
                end: { line: 1, column: 2353 },
              },
            }
          )) != null
            ? stack1
            : "") +
          ' <meta property="al:android:app_name" content="Shazam"><meta property="al:android:package" content="com.shazam.android"><meta property="al:web:url" content="' +
          ((stack1 =
            ((helper =
              (helper =
                lookupProperty(helpers, "canonicalurl") ||
                (depth0 != null
                  ? lookupProperty(depth0, "canonicalurl")
                  : depth0)) != null
                ? helper
                : alias2),
            typeof helper === alias3
              ? helper.call(alias1, {
                  name: "canonicalurl",
                  hash: {},
                  data: data,
                  loc: {
                    start: { line: 1, column: 2510 },
                    end: { line: 1, column: 2528 },
                  },
                })
              : helper)) != null
            ? stack1
            : "") +
          '"><meta name="description" content="' +
          ((stack1 = (
            lookupProperty(helpers, "firstValue") ||
            (depth0 && lookupProperty(depth0, "firstValue")) ||
            alias2
          ).call(
            alias1,
            depth0 != null ? lookupProperty(depth0, "pageDesc") : depth0,
            depth0 != null ? lookupProperty(depth0, "text") : depth0,
            {
              name: "firstValue",
              hash: {},
              fn: container.program(19, data, 0),
              inverse: container.noop,
              data: data,
              loc: {
                start: { line: 1, column: 2564 },
                end: { line: 1, column: 2608 },
              },
            }
          )) != null
            ? stack1
            : "") +
          '"><meta name="keywords" content="' +
          container.escapeExpression(
            ((helper =
              (helper =
                lookupProperty(helpers, "keywords") ||
                (depth0 != null
                  ? lookupProperty(depth0, "keywords")
                  : depth0)) != null
                ? helper
                : alias2),
            typeof helper === alias3
              ? helper.call(alias1, {
                  name: "keywords",
                  hash: {},
                  data: data,
                  loc: {
                    start: { line: 1, column: 2641 },
                    end: { line: 1, column: 2653 },
                  },
                })
              : helper)
          ) +
          '"><meta name="twitter:title" content="' +
          ((stack1 = (
            lookupProperty(helpers, "firstValue") ||
            (depth0 && lookupProperty(depth0, "firstValue")) ||
            alias2
          ).call(
            alias1,
            depth0 != null ? lookupProperty(depth0, "twitter") : depth0,
            depth0 != null ? lookupProperty(depth0, "pageTitle") : depth0,
            depth0 != null ? lookupProperty(depth0, "subject") : depth0,
            {
              name: "firstValue",
              hash: {},
              fn: container.program(19, data, 0),
              inverse: container.noop,
              data: data,
              loc: {
                start: { line: 1, column: 2691 },
                end: { line: 1, column: 2747 },
              },
            }
          )) != null
            ? stack1
            : "") +
          '"><meta name="twitter:description" content="' +
          ((stack1 = (
            lookupProperty(helpers, "firstValue") ||
            (depth0 && lookupProperty(depth0, "firstValue")) ||
            alias2
          ).call(
            alias1,
            depth0 != null ? lookupProperty(depth0, "twitter2") : depth0,
            depth0 != null ? lookupProperty(depth0, "pageDesc") : depth0,
            depth0 != null ? lookupProperty(depth0, "text") : depth0,
            "Shazam",
            {
              name: "firstValue",
              hash: {},
              fn: container.program(19, data, 0),
              inverse: container.noop,
              data: data,
              loc: {
                start: { line: 1, column: 2791 },
                end: { line: 1, column: 2854 },
              },
            }
          )) != null
            ? stack1
            : "") +
          '"><meta name="twitter:app:name:googleplay" content="Shazam"><meta name="twitter:app:name:iphone" content="Shazam"><meta name="twitter:app:name:ipad" content="Shazam"><meta name="twitter:app:id:iphone" content="284993459"><meta name="twitter:app:id:ipad" content="284993459"><meta name="twitter:app:id:googleplay" content="com.shazam.android"><meta name="twitter:site" content="@Shazam"><meta name="twitter:card" content="';
      stack1 =
        ((helper =
          (helper =
            lookupProperty(helpers, "twittercardtype") ||
            (depth0 != null
              ? lookupProperty(depth0, "twittercardtype")
              : depth0)) != null
            ? helper
            : alias2),
        (options = {
          name: "twittercardtype",
          hash: {},
          fn: container.program(29, data, 0),
          inverse: container.program(31, data, 0),
          data: data,
          loc: {
            start: { line: 1, column: 3275 },
            end: { line: 1, column: 3335 },
          },
        }),
        typeof helper === alias3 ? helper.call(alias1, options) : helper);
      if (!lookupProperty(helpers, "twittercardtype")) {
        stack1 = alias4.call(depth0, stack1, options);
      }
      if (stack1 != null) {
        buffer += stack1;
      }
      return (
        buffer +
        '"> ' +
        ((stack1 = lookupProperty(helpers, "if").call(
          alias1,
          depth0 != null ? lookupProperty(depth0, "video") : depth0,
          {
            name: "if",
            hash: {},
            fn: container.program(33, data, 0),
            inverse: container.program(36, data, 0),
            data: data,
            loc: {
              start: { line: 1, column: 3338 },
              end: { line: 1, column: 3751 },
            },
          }
        )) != null
          ? stack1
          : "") +
        " " +
        ((stack1 = lookupProperty(helpers, "if").call(
          alias1,
          depth0 != null ? lookupProperty(depth0, "appPath") : depth0,
          {
            name: "if",
            hash: {},
            fn: container.program(38, data, 0),
            inverse: container.noop,
            data: data,
            loc: {
              start: { line: 1, column: 3752 },
              end: { line: 1, column: 4042 },
            },
          }
        )) != null
          ? stack1
          : "") +
        " "
      );
    },
    15: function (container, depth0, helpers, partials, data) {
      var stack1,
        helper,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        ' <meta property="og:url" content="' +
        ((stack1 =
          ((helper =
            (helper =
              lookupProperty(helpers, "ogurl") ||
              (depth0 != null ? lookupProperty(depth0, "ogurl") : depth0)) !=
            null
              ? helper
              : container.hooks.helperMissing),
          typeof helper === "function"
            ? helper.call(
                depth0 != null ? depth0 : container.nullContext || {},
                {
                  name: "ogurl",
                  hash: {},
                  data: data,
                  loc: {
                    start: { line: 1, column: 1515 },
                    end: { line: 1, column: 1526 },
                  },
                }
              )
            : helper)) != null
          ? stack1
          : "") +
        '"> '
      );
    },
    17: function (container, depth0, helpers, partials, data) {
      var stack1,
        helper,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        ' <meta property="og:url" content="' +
        ((stack1 =
          ((helper =
            (helper =
              lookupProperty(helpers, "canonicalurl") ||
              (depth0 != null
                ? lookupProperty(depth0, "canonicalurl")
                : depth0)) != null
              ? helper
              : container.hooks.helperMissing),
          typeof helper === "function"
            ? helper.call(
                depth0 != null ? depth0 : container.nullContext || {},
                {
                  name: "canonicalurl",
                  hash: {},
                  data: data,
                  loc: {
                    start: { line: 1, column: 1571 },
                    end: { line: 1, column: 1589 },
                  },
                }
              )
            : helper)) != null
          ? stack1
          : "") +
        '"> '
      );
    },
    19: function (container, depth0, helpers, partials, data) {
      return "";
    },
    21: function (container, depth0, helpers, partials, data) {
      var stack1,
        helper,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        ' <meta property="og:type" content="' +
        ((stack1 =
          ((helper =
            (helper =
              lookupProperty(helpers, "type") ||
              (depth0 != null ? lookupProperty(depth0, "type") : depth0)) !=
            null
              ? helper
              : container.hooks.helperMissing),
          typeof helper === "function"
            ? helper.call(
                depth0 != null ? depth0 : container.nullContext || {},
                {
                  name: "type",
                  hash: {},
                  data: data,
                  loc: {
                    start: { line: 1, column: 1751 },
                    end: { line: 1, column: 1761 },
                  },
                }
              )
            : helper)) != null
          ? stack1
          : "") +
        '"> '
      );
    },
    23: function (container, depth0, helpers, partials, data) {
      var helper,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        alias2 = container.hooks.helperMissing,
        alias3 = "function",
        alias4 = container.escapeExpression,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        ' <meta property="og:image:width" content="' +
        alias4(
          ((helper =
            (helper =
              lookupProperty(helpers, "width") ||
              (depth0 != null ? lookupProperty(depth0, "width") : depth0)) !=
            null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "width",
                hash: {},
                data: data,
                loc: {
                  start: { line: 1, column: 1984 },
                  end: { line: 1, column: 1993 },
                },
              })
            : helper)
        ) +
        '"><meta property="og:image:height" content="' +
        alias4(
          ((helper =
            (helper =
              lookupProperty(helpers, "height") ||
              (depth0 != null ? lookupProperty(depth0, "height") : depth0)) !=
            null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "height",
                hash: {},
                data: data,
                loc: {
                  start: { line: 1, column: 2037 },
                  end: { line: 1, column: 2047 },
                },
              })
            : helper)
        ) +
        '"> '
      );
    },
    25: function (container, depth0, helpers, partials, data) {
      var stack1,
        helper,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        ' <meta property="al:ios:url" content="shazam://v5/' +
        ((stack1 =
          ((helper =
            (helper =
              lookupProperty(helpers, "appPath") ||
              (depth0 != null ? lookupProperty(depth0, "appPath") : depth0)) !=
            null
              ? helper
              : container.hooks.helperMissing),
          typeof helper === "function"
            ? helper.call(
                depth0 != null ? depth0 : container.nullContext || {},
                {
                  name: "appPath",
                  hash: {},
                  data: data,
                  loc: {
                    start: { line: 1, column: 2132 },
                    end: { line: 1, column: 2145 },
                  },
                }
              )
            : helper)) != null
          ? stack1
          : "") +
        '"> '
      );
    },
    27: function (container, depth0, helpers, partials, data) {
      var stack1,
        helper,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        ' <meta property="al:android:url" content="shazam://' +
        ((stack1 =
          ((helper =
            (helper =
              lookupProperty(helpers, "appPath") ||
              (depth0 != null ? lookupProperty(depth0, "appPath") : depth0)) !=
            null
              ? helper
              : container.hooks.helperMissing),
          typeof helper === "function"
            ? helper.call(
                depth0 != null ? depth0 : container.nullContext || {},
                {
                  name: "appPath",
                  hash: {},
                  data: data,
                  loc: {
                    start: { line: 1, column: 2330 },
                    end: { line: 1, column: 2343 },
                  },
                }
              )
            : helper)) != null
          ? stack1
          : "") +
        '"> '
      );
    },
    29: function (container, depth0, helpers, partials, data) {
      return container.escapeExpression(container.lambda(depth0, depth0));
    },
    31: function (container, depth0, helpers, partials, data) {
      return "summary";
    },
    33: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        " " +
        ((stack1 = lookupProperty(helpers, "if").call(
          depth0 != null ? depth0 : container.nullContext || {},
          depth0 != null ? lookupProperty(depth0, "twitter") : depth0,
          {
            name: "if",
            hash: {},
            fn: container.program(34, data, 0),
            inverse: container.program(36, data, 0),
            data: data,
            loc: {
              start: { line: 1, column: 3352 },
              end: { line: 1, column: 3683 },
            },
          }
        )) != null
          ? stack1
          : "") +
        " "
      );
    },
    34: function (container, depth0, helpers, partials, data) {
      var stack1,
        alias1 = container.lambda,
        alias2 = container.escapeExpression,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        ' <meta name="twitter:player" content="' +
        alias2(
          alias1(
            (stack1 =
              (stack1 =
                depth0 != null ? lookupProperty(depth0, "video") : depth0) !=
              null
                ? lookupProperty(stack1, "twitter")
                : stack1) != null
              ? lookupProperty(stack1, "player")
              : stack1,
            depth0
          )
        ) +
        '"><meta name="twitter:player:width" content="' +
        alias2(
          alias1(
            (stack1 =
              depth0 != null ? lookupProperty(depth0, "video") : depth0) != null
              ? lookupProperty(stack1, "width")
              : stack1,
            depth0
          )
        ) +
        '"><meta name="twitter:player:height" content="' +
        alias2(
          alias1(
            (stack1 =
              depth0 != null ? lookupProperty(depth0, "video") : depth0) != null
              ? lookupProperty(stack1, "height")
              : stack1,
            depth0
          )
        ) +
        '"><meta name="twitter:image" content="' +
        ((stack1 = alias1(
          (stack1 =
            (stack1 =
              depth0 != null ? lookupProperty(depth0, "video") : depth0) != null
              ? lookupProperty(stack1, "twitter")
              : stack1) != null
            ? lookupProperty(stack1, "image")
            : stack1,
          depth0
        )) != null
          ? stack1
          : "") +
        '"> '
      );
    },
    36: function (container, depth0, helpers, partials, data) {
      var stack1,
        helper,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        ' <meta name="twitter:image" content="' +
        ((stack1 =
          ((helper =
            (helper =
              lookupProperty(helpers, "image") ||
              (depth0 != null ? lookupProperty(depth0, "image") : depth0)) !=
            null
              ? helper
              : container.hooks.helperMissing),
          typeof helper === "function"
            ? helper.call(
                depth0 != null ? depth0 : container.nullContext || {},
                {
                  name: "image",
                  hash: {},
                  data: data,
                  loc: {
                    start: { line: 1, column: 3662 },
                    end: { line: 1, column: 3673 },
                  },
                }
              )
            : helper)) != null
          ? stack1
          : "") +
        '"> '
      );
    },
    38: function (container, depth0, helpers, partials, data) {
      var stack1,
        helper,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        alias2 = container.hooks.helperMissing,
        alias3 = "function",
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        ' <meta name="shazam:page-type" content="Tag Result"><meta name="twitter:app:url:ipad" content="shazam://v5/' +
        ((stack1 =
          ((helper =
            (helper =
              lookupProperty(helpers, "appPath") ||
              (depth0 != null ? lookupProperty(depth0, "appPath") : depth0)) !=
            null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "appPath",
                hash: {},
                data: data,
                loc: {
                  start: { line: 1, column: 3874 },
                  end: { line: 1, column: 3887 },
                },
              })
            : helper)) != null
          ? stack1
          : "") +
        '"><meta name="twitter:app:url:iphone" content="shazam://v5/' +
        ((stack1 =
          ((helper =
            (helper =
              lookupProperty(helpers, "appPath") ||
              (depth0 != null ? lookupProperty(depth0, "appPath") : depth0)) !=
            null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "appPath",
                hash: {},
                data: data,
                loc: {
                  start: { line: 1, column: 3946 },
                  end: { line: 1, column: 3959 },
                },
              })
            : helper)) != null
          ? stack1
          : "") +
        '"><meta name="twitter:app:url:googleplay" content="shazam://' +
        ((stack1 =
          ((helper =
            (helper =
              lookupProperty(helpers, "appPath") ||
              (depth0 != null ? lookupProperty(depth0, "appPath") : depth0)) !=
            null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "appPath",
                hash: {},
                data: data,
                loc: {
                  start: { line: 1, column: 4019 },
                  end: { line: 1, column: 4032 },
                },
              })
            : helper)) != null
          ? stack1
          : "") +
        '"> '
      );
    },
    40: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        ' <link rel="canonical" href="' +
        ((stack1 = container.lambda(
          (stack1 = depth0 != null ? lookupProperty(depth0, "meta") : depth0) !=
            null
            ? lookupProperty(stack1, "canonicalurl")
            : stack1,
          depth0
        )) != null
          ? stack1
          : "") +
        ((stack1 = lookupProperty(helpers, "if").call(
          depth0 != null ? depth0 : container.nullContext || {},
          (stack1 = depth0 != null ? lookupProperty(depth0, "meta") : depth0) !=
            null
            ? lookupProperty(stack1, "alternateSuffix")
            : stack1,
          {
            name: "if",
            hash: {},
            fn: container.program(41, data, 0),
            inverse: container.noop,
            data: data,
            loc: {
              start: { line: 1, column: 4301 },
              end: { line: 1, column: 4377 },
            },
          }
        )) != null
          ? stack1
          : "") +
        '"> '
      );
    },
    41: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        "/" +
        container.escapeExpression(
          lookupProperty(helpers, "lookup").call(
            depth0 != null ? depth0 : container.nullContext || {},
            (stack1 =
              depth0 != null ? lookupProperty(depth0, "meta") : depth0) != null
              ? lookupProperty(stack1, "alternateSuffix")
              : stack1,
            depth0 != null ? lookupProperty(depth0, "language") : depth0,
            {
              name: "lookup",
              hash: {},
              data: data,
              loc: {
                start: { line: 1, column: 4330 },
                end: { line: 1, column: 4370 },
              },
            }
          )
        )
      );
    },
    43: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        ' <link rel="amphtml" href="' +
        ((stack1 = container.lambda(
          (stack1 = depth0 != null ? lookupProperty(depth0, "meta") : depth0) !=
            null
            ? lookupProperty(stack1, "amphtml")
            : stack1,
          depth0
        )) != null
          ? stack1
          : "") +
        '"> '
      );
    },
    45: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        " " +
        ((stack1 = (
          lookupProperty(helpers, "ifequal") ||
          (depth0 && lookupProperty(depth0, "ifequal")) ||
          container.hooks.helperMissing
        ).call(
          depth0 != null ? depth0 : container.nullContext || {},
          data && lookupProperty(data, "key"),
          "gb",
          {
            name: "ifequal",
            hash: {},
            fn: container.program(46, data, 0),
            inverse: container.program(49, data, 0),
            data: data,
            loc: {
              start: { line: 1, column: 4554 },
              end: { line: 1, column: 5223 },
            },
          }
        )) != null
          ? stack1
          : "") +
        " "
      );
    },
    46: function (container, depth0, helpers, partials, data) {
      var stack1,
        helper,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        ' <link rel="alternate" hreflang="en-GB" href="https://www.shazam.com/' +
        ((stack1 =
          ((helper =
            (helper =
              lookupProperty(helpers, "key") ||
              (data && lookupProperty(data, "key"))) != null
              ? helper
              : container.hooks.helperMissing),
          typeof helper === "function"
            ? helper.call(alias1, {
                name: "key",
                hash: {},
                data: data,
                loc: {
                  start: { line: 1, column: 4645 },
                  end: { line: 1, column: 4655 },
                },
              })
            : helper)) != null
          ? stack1
          : "") +
        ((stack1 = container.lambda(
          (stack1 =
            (stack1 = data && lookupProperty(data, "root")) &&
            lookupProperty(stack1, "meta")) &&
            lookupProperty(stack1, "alternatepath"),
          depth0
        )) != null
          ? stack1
          : "") +
        ((stack1 = lookupProperty(helpers, "if").call(
          alias1,
          (stack1 =
            (stack1 = data && lookupProperty(data, "root")) &&
            lookupProperty(stack1, "meta")) &&
            lookupProperty(stack1, "alternateSuffix"),
          {
            name: "if",
            hash: {},
            fn: container.program(47, data, 0),
            inverse: container.noop,
            data: data,
            loc: {
              start: { line: 1, column: 4685 },
              end: { line: 1, column: 4769 },
            },
          }
        )) != null
          ? stack1
          : "") +
        '"> '
      );
    },
    47: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        "/" +
        container.escapeExpression(
          lookupProperty(helpers, "lookup").call(
            depth0 != null ? depth0 : container.nullContext || {},
            (stack1 =
              (stack1 = data && lookupProperty(data, "root")) &&
              lookupProperty(stack1, "meta")) &&
              lookupProperty(stack1, "alternateSuffix"),
            data && lookupProperty(data, "key"),
            {
              name: "lookup",
              hash: {},
              data: data,
              loc: {
                start: { line: 1, column: 4720 },
                end: { line: 1, column: 4762 },
              },
            }
          )
        )
      );
    },
    49: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        " " +
        ((stack1 = (
          lookupProperty(helpers, "ifequal") ||
          (depth0 && lookupProperty(depth0, "ifequal")) ||
          container.hooks.helperMissing
        ).call(
          depth0 != null ? depth0 : container.nullContext || {},
          data && lookupProperty(data, "key"),
          "en",
          {
            name: "ifequal",
            hash: {},
            fn: container.program(50, data, 0),
            inverse: container.program(52, data, 0),
            data: data,
            loc: {
              start: { line: 1, column: 4781 },
              end: { line: 1, column: 5210 },
            },
          }
        )) != null
          ? stack1
          : "") +
        " "
      );
    },
    50: function (container, depth0, helpers, partials, data) {
      var stack1,
        helper,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        ' <link rel="alternate" hreflang="' +
        container.escapeExpression(
          ((helper =
            (helper =
              lookupProperty(helpers, "key") ||
              (data && lookupProperty(data, "key"))) != null
              ? helper
              : container.hooks.helperMissing),
          typeof helper === "function"
            ? helper.call(alias1, {
                name: "key",
                hash: {},
                data: data,
                loc: {
                  start: { line: 1, column: 4836 },
                  end: { line: 1, column: 4844 },
                },
              })
            : helper)
        ) +
        '" href="https://www.shazam.com' +
        ((stack1 = container.lambda(
          (stack1 =
            (stack1 = data && lookupProperty(data, "root")) &&
            lookupProperty(stack1, "meta")) &&
            lookupProperty(stack1, "alternatepath"),
          depth0
        )) != null
          ? stack1
          : "") +
        ((stack1 = lookupProperty(helpers, "if").call(
          alias1,
          (stack1 =
            (stack1 = data && lookupProperty(data, "root")) &&
            lookupProperty(stack1, "meta")) &&
            lookupProperty(stack1, "alternateSuffix"),
          {
            name: "if",
            hash: {},
            fn: container.program(47, data, 0),
            inverse: container.noop,
            data: data,
            loc: {
              start: { line: 1, column: 4904 },
              end: { line: 1, column: 4988 },
            },
          }
        )) != null
          ? stack1
          : "") +
        '"> '
      );
    },
    52: function (container, depth0, helpers, partials, data) {
      var stack1,
        helper,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        alias2 = container.hooks.helperMissing,
        alias3 = "function",
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        ' <link rel="alternate" hreflang="' +
        container.escapeExpression(
          ((helper =
            (helper =
              lookupProperty(helpers, "key") ||
              (data && lookupProperty(data, "key"))) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "key",
                hash: {},
                data: data,
                loc: {
                  start: { line: 1, column: 5032 },
                  end: { line: 1, column: 5040 },
                },
              })
            : helper)
        ) +
        '" href="https://www.shazam.com/' +
        ((stack1 =
          ((helper =
            (helper =
              lookupProperty(helpers, "key") ||
              (data && lookupProperty(data, "key"))) != null
              ? helper
              : alias2),
          typeof helper === alias3
            ? helper.call(alias1, {
                name: "key",
                hash: {},
                data: data,
                loc: {
                  start: { line: 1, column: 5071 },
                  end: { line: 1, column: 5081 },
                },
              })
            : helper)) != null
          ? stack1
          : "") +
        ((stack1 = container.lambda(
          (stack1 =
            (stack1 = data && lookupProperty(data, "root")) &&
            lookupProperty(stack1, "meta")) &&
            lookupProperty(stack1, "alternatepath"),
          depth0
        )) != null
          ? stack1
          : "") +
        ((stack1 = lookupProperty(helpers, "if").call(
          alias1,
          (stack1 =
            (stack1 = data && lookupProperty(data, "root")) &&
            lookupProperty(stack1, "meta")) &&
            lookupProperty(stack1, "alternateSuffix"),
          {
            name: "if",
            hash: {},
            fn: container.program(47, data, 0),
            inverse: container.noop,
            data: data,
            loc: {
              start: { line: 1, column: 5111 },
              end: { line: 1, column: 5195 },
            },
          }
        )) != null
          ? stack1
          : "") +
        '"> '
      );
    },
    54: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        ' <link rel="alternate" hreflang="x-default" href="https://www.shazam.com' +
        ((stack1 = container.lambda(
          (stack1 =
            (stack1 = data && lookupProperty(data, "root")) &&
            lookupProperty(stack1, "meta")) &&
            lookupProperty(stack1, "alternatepath"),
          depth0
        )) != null
          ? stack1
          : "") +
        ((stack1 = lookupProperty(helpers, "if").call(
          depth0 != null ? depth0 : container.nullContext || {},
          (stack1 =
            (stack1 = data && lookupProperty(data, "root")) &&
            lookupProperty(stack1, "meta")) &&
            lookupProperty(stack1, "alternateSuffix"),
          {
            name: "if",
            hash: {},
            fn: container.program(55, data, 0),
            inverse: container.noop,
            data: data,
            loc: {
              start: { line: 1, column: 5354 },
              end: { line: 1, column: 5438 },
            },
          }
        )) != null
          ? stack1
          : "") +
        '"> '
      );
    },
    55: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        "/" +
        container.escapeExpression(
          lookupProperty(helpers, "lookup").call(
            depth0 != null ? depth0 : container.nullContext || {},
            (stack1 =
              (stack1 = data && lookupProperty(data, "root")) &&
              lookupProperty(stack1, "meta")) &&
              lookupProperty(stack1, "alternateSuffix"),
            "en",
            {
              name: "lookup",
              hash: {},
              data: data,
              loc: {
                start: { line: 1, column: 5389 },
                end: { line: 1, column: 5431 },
              },
            }
          )
        )
      );
    },
    57: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        ' <meta property="og:locale" content="' +
        ((stack1 = (
          lookupProperty(helpers, "replace") ||
          (depth0 && lookupProperty(depth0, "replace")) ||
          container.hooks.helperMissing
        ).call(
          depth0 != null ? depth0 : container.nullContext || {},
          (stack1 = depth0 != null ? lookupProperty(depth0, "meta") : depth0) !=
            null
            ? lookupProperty(stack1, "langCountry")
            : stack1,
          "-",
          "_",
          {
            name: "replace",
            hash: {},
            fn: container.program(19, data, 0),
            inverse: container.noop,
            data: data,
            loc: {
              start: { line: 1, column: 5527 },
              end: { line: 1, column: 5576 },
            },
          }
        )) != null
          ? stack1
          : "") +
        '"> '
      );
    },
    59: function (
      container,
      depth0,
      helpers,
      partials,
      data,
      blockParams,
      depths
    ) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        " " +
        ((stack1 = (
          lookupProperty(helpers, "compare") ||
          (depth0 && lookupProperty(depth0, "compare")) ||
          container.hooks.helperMissing
        ).call(
          depth0 != null ? depth0 : container.nullContext || {},
          depth0,
          (stack1 =
            depths[1] != null
              ? lookupProperty(depths[1], "meta")
              : depths[1]) != null
            ? lookupProperty(stack1, "langCountry")
            : stack1,
          {
            name: "compare",
            hash: { op: "neq" },
            fn: container.program(60, data, 0, blockParams, depths),
            inverse: container.noop,
            data: data,
            loc: {
              start: { line: 1, column: 5608 },
              end: { line: 1, column: 5747 },
            },
          }
        )) != null
          ? stack1
          : "") +
        " "
      );
    },
    60: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        ' <meta property="og:locale:alternate" content="' +
        ((stack1 = (
          lookupProperty(helpers, "replace") ||
          (depth0 && lookupProperty(depth0, "replace")) ||
          container.hooks.helperMissing
        ).call(
          depth0 != null ? depth0 : container.nullContext || {},
          depth0,
          "-",
          "_",
          {
            name: "replace",
            hash: {},
            fn: container.program(19, data, 0),
            inverse: container.noop,
            data: data,
            loc: {
              start: { line: 1, column: 5698 },
              end: { line: 1, column: 5732 },
            },
          }
        )) != null
          ? stack1
          : "") +
        '"> '
      );
    },
    compiler: [8, ">= 4.3.0"],
    main: function (
      container,
      depth0,
      helpers,
      partials,
      data,
      blockParams,
      depths
    ) {
      var stack1,
        helper,
        options,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        alias2 = container.hooks.helperMissing,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          },
        buffer =
          '<meta charset="utf-8"><meta name="viewport" content="viewport-fit=cover,width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1"><meta name="apple-mobile-web-app-status-bar-style" content="black">   <meta name="format-detection" content="telephone=no"> ' +
          ((stack1 = lookupProperty(helpers, "if").call(
            alias1,
            depth0 != null ? lookupProperty(depth0, "language") : depth0,
            {
              name: "if",
              hash: {},
              fn: container.program(1, data, 0, blockParams, depths),
              inverse: container.noop,
              data: data,
              loc: {
                start: { line: 1, column: 447 },
                end: { line: 1, column: 582 },
              },
            }
          )) != null
            ? stack1
            : "") +
          ' <meta name="msapplication-tap-highlight" content="no">  <meta name="google-site-verification" content="nGAcqx7roWuHRJqnmLtrdGHpwj5pIcjech0Kx-Yeuog"><meta property="og:site_name" content="Shazam"> ' +
          ((stack1 = lookupProperty(helpers, "unless").call(
            alias1,
            (stack1 =
              depth0 != null ? lookupProperty(depth0, "meta") : depth0) != null
              ? lookupProperty(stack1, "type")
              : stack1,
            {
              name: "unless",
              hash: {},
              fn: container.program(6, data, 0, blockParams, depths),
              inverse: container.noop,
              data: data,
              loc: {
                start: { line: 1, column: 840 },
                end: { line: 1, column: 917 },
              },
            }
          )) != null
            ? stack1
            : "") +
          ' <meta name="apple-itunes-app" content="app-id=284993459, affiliate-data=partnerId=30&amp;siteID=uuRxNR5XS20&amp;at=11l3eE&amp;ct=5348615A-616D-3235-3830-44754D6D5973,' +
          ((stack1 = lookupProperty(helpers, "if").call(
            alias1,
            (stack1 =
              depth0 != null ? lookupProperty(depth0, "meta") : depth0) != null
              ? lookupProperty(stack1, "appPath")
              : stack1,
            {
              name: "if",
              hash: {},
              fn: container.program(8, data, 0, blockParams, depths),
              inverse: container.noop,
              data: data,
              loc: {
                start: { line: 1, column: 1230 },
                end: { line: 1, column: 1301 },
              },
            }
          )) != null
            ? stack1
            : "") +
          '"> ';
      stack1 =
        ((helper =
          (helper =
            lookupProperty(helpers, "meta") ||
            (depth0 != null ? lookupProperty(depth0, "meta") : depth0)) != null
            ? helper
            : alias2),
        (options = {
          name: "meta",
          hash: {},
          fn: container.program(10, data, 0, blockParams, depths),
          inverse: container.noop,
          data: data,
          loc: {
            start: { line: 1, column: 1304 },
            end: { line: 1, column: 4081 },
          },
        }),
        typeof helper === "function" ? helper.call(alias1, options) : helper);
      if (!lookupProperty(helpers, "meta")) {
        stack1 = container.hooks.blockHelperMissing.call(
          depth0,
          stack1,
          options
        );
      }
      if (stack1 != null) {
        buffer += stack1;
      }
      return (
        buffer +
        " <title>" +
        ((stack1 = (
          lookupProperty(helpers, "firstValue") ||
          (depth0 && lookupProperty(depth0, "firstValue")) ||
          alias2
        ).call(
          alias1,
          (stack1 = depth0 != null ? lookupProperty(depth0, "meta") : depth0) !=
            null
            ? lookupProperty(stack1, "pageTitle")
            : stack1,
          (stack1 = depth0 != null ? lookupProperty(depth0, "meta") : depth0) !=
            null
            ? lookupProperty(stack1, "subject")
            : stack1,
          "Shazam",
          {
            name: "firstValue",
            hash: {},
            fn: container.program(19, data, 0, blockParams, depths),
            inverse: container.noop,
            data: data,
            loc: {
              start: { line: 1, column: 4089 },
              end: { line: 1, column: 4156 },
            },
          }
        )) != null
          ? stack1
          : "") +
        '</title><link rel="help" href="https://support.apple.com/HT210331"> ' +
        ((stack1 = lookupProperty(helpers, "if").call(
          alias1,
          (stack1 = depth0 != null ? lookupProperty(depth0, "meta") : depth0) !=
            null
            ? lookupProperty(stack1, "canonicalurl")
            : stack1,
          {
            name: "if",
            hash: {},
            fn: container.program(40, data, 0, blockParams, depths),
            inverse: container.noop,
            data: data,
            loc: {
              start: { line: 1, column: 4224 },
              end: { line: 1, column: 4387 },
            },
          }
        )) != null
          ? stack1
          : "") +
        " " +
        ((stack1 = lookupProperty(helpers, "if").call(
          alias1,
          (stack1 = depth0 != null ? lookupProperty(depth0, "meta") : depth0) !=
            null
            ? lookupProperty(stack1, "amphtml")
            : stack1,
          {
            name: "if",
            hash: {},
            fn: container.program(43, data, 0, blockParams, depths),
            inverse: container.noop,
            data: data,
            loc: {
              start: { line: 1, column: 4388 },
              end: { line: 1, column: 4463 },
            },
          }
        )) != null
          ? stack1
          : "") +
        ' <link rel="shortcut icon" href="/resources/c47e76ada091c1b47c0e8cb0f726d0320c47375a/favicon.ico"> ' +
        ((stack1 = lookupProperty(helpers, "each").call(
          alias1,
          (stack1 = depth0 != null ? lookupProperty(depth0, "meta") : depth0) !=
            null
            ? lookupProperty(stack1, "langs")
            : stack1,
          {
            name: "each",
            hash: {},
            fn: container.program(45, data, 0, blockParams, depths),
            inverse: container.noop,
            data: data,
            loc: {
              start: { line: 1, column: 4533 },
              end: { line: 1, column: 5233 },
            },
          }
        )) != null
          ? stack1
          : "") +
        " " +
        ((stack1 = lookupProperty(helpers, "if").call(
          alias1,
          (stack1 = depth0 != null ? lookupProperty(depth0, "meta") : depth0) !=
            null
            ? lookupProperty(stack1, "langs")
            : stack1,
          {
            name: "if",
            hash: {},
            fn: container.program(54, data, 0, blockParams, depths),
            inverse: container.noop,
            data: data,
            loc: {
              start: { line: 1, column: 5234 },
              end: { line: 1, column: 5448 },
            },
          }
        )) != null
          ? stack1
          : "") +
        " " +
        ((stack1 = lookupProperty(helpers, "if").call(
          alias1,
          (
            lookupProperty(helpers, "and") ||
            (depth0 && lookupProperty(depth0, "and")) ||
            alias2
          ).call(
            alias1,
            (stack1 =
              depth0 != null ? lookupProperty(depth0, "meta") : depth0) != null
              ? lookupProperty(stack1, "langs")
              : stack1,
            (stack1 =
              depth0 != null ? lookupProperty(depth0, "meta") : depth0) != null
              ? lookupProperty(stack1, "langCountry")
              : stack1,
            {
              name: "and",
              hash: {},
              data: data,
              loc: {
                start: { line: 1, column: 5455 },
                end: { line: 1, column: 5488 },
              },
            }
          ),
          {
            name: "if",
            hash: {},
            fn: container.program(57, data, 0, blockParams, depths),
            inverse: container.noop,
            data: data,
            loc: {
              start: { line: 1, column: 5449 },
              end: { line: 1, column: 5586 },
            },
          }
        )) != null
          ? stack1
          : "") +
        " " +
        ((stack1 = lookupProperty(helpers, "each").call(
          alias1,
          (stack1 = depth0 != null ? lookupProperty(depth0, "meta") : depth0) !=
            null
            ? lookupProperty(stack1, "langs")
            : stack1,
          {
            name: "each",
            hash: {},
            fn: container.program(59, data, 0, blockParams, depths),
            inverse: container.noop,
            data: data,
            loc: {
              start: { line: 1, column: 5587 },
              end: { line: 1, column: 5757 },
            },
          }
        )) != null
          ? stack1
          : "")
      );
    },
    useData: true,
    useDepths: true,
  });
})();
shz.common.namespace("frames.error").Model = {
  prepare: function (r) {
    var e = this.app.strings;
    return (
      (this.data.error =
        e["website_error_" + this.params] || e.website_error_catchall),
      !0
    );
  },
};
shz.common.namespace("frames.error.tmpl"),
  (shz.frames.error.tmpl = Handlebars.template({
    1: function (r, e, o, l, n) {
      var a,
        s = r.lambda,
        t = r.escapeExpression,
        c =
          r.lookupProperty ||
          function (r, e) {
            if (Object.prototype.hasOwnProperty.call(r, e)) return r[e];
          };
      return (
        " <h1>" +
        t(
          s(
            null != (a = null != e ? c(e, "strings") : e)
              ? c(a, "website_error_sorry")
              : a,
            e
          )
        ) +
        " " +
        t(s(e, e)) +
        "</h1> "
      );
    },
    compiler: [8, ">= 4.3.0"],
    main: function (r, e, o, l, n) {
      var a,
        s,
        t,
        c =
          r.lookupProperty ||
          function (r, e) {
            if (Object.prototype.hasOwnProperty.call(r, e)) return r[e];
          },
        i =
          '<div class="color-dark-grey"><article class="error-page panel-landing" role="alert"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-shazam_logo"></use></svg> ';
      return (
        (s =
          null != (s = c(o, "error") || (null != e ? c(e, "error") : e))
            ? s
            : r.hooks.helperMissing),
        (t = {
          name: "error",
          hash: {},
          fn: r.program(1, n, 0),
          inverse: r.noop,
          data: n,
          loc: {
            start: { line: 1, column: 181 },
            end: { line: 1, column: 249 },
          },
        }),
        (a =
          "function" == typeof s
            ? s.call(null != e ? e : r.nullContext || {}, t)
            : s),
        c(o, "error") || (a = r.hooks.blockHelperMissing.call(e, a, t)),
        null != a && (i += a),
        i +
          ' <p><a class="color-shazam" data-shz-beacon="type=nav,providerdesc=home" href="/">shazam.com</a></p></article></div>'
      );
    },
    useData: !0,
  }));
!(function () {
  var t = "undefined" != typeof window && window;
  t &&
    shz.app.get("_app:localeReady", function () {
      var i =
        t && t.location && t.location.pathname
          ? window.location.pathname.split("/")
          : [];
      shz.app.langs[i[1]] && i.splice(1, 1);
      var r = i[1];
      if (null != r && "artist" === r) {
        var s = shz.app.getService("artist").utils.getPathParams(i.slice(2)),
          n = s.adamId,
          p = s.artistId;
        n
          ? shz.app
              .getService("musickit")
              .request("artist_views_attributes", { adamId: n }, e)
          : p &&
            shz.app.getService("artist").request("artist", { artistId: p }, a);
      }
    });
  var e = function (t) {
      return i(t.attributes);
    },
    a = function (t) {
      return i(t);
    };
  function i() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = t._template;
    try {
      var a = e.artworkURL,
        i = e.srcSet,
        r = document.createElement("link");
      (r.rel = "preload"),
        (r.as = "image"),
        (r.href = a),
        r.setAttribute("imagesrcset", i),
        r.setAttribute("imagesizes", "(max-width: 650px) 100vw, 248px"),
        document.head.appendChild(r);
    } catch (t) {}
  }
})();
!(function () {
  var e = "undefined" != typeof window && window,
    a = shz.common.namespace("serviceutils.image").buildArtworkSourceSet;
  function t(e, t) {
    try {
      if (t) return;
      var n = e.images.coverart,
        i = a(shz.app, n, [[75, 300, 75]]);
      if (n && i) {
        var o = document.createElement("link");
        (o.rel = "preload"),
          (o.as = "image"),
          (o.href = n),
          o.setAttribute("imagesrcset", i),
          o.setAttribute("imagesizes", "(max-width: 650px) 100vw, 248px"),
          document.head.appendChild(o);
      }
    } catch (e) {}
  }
  e &&
    shz.app.get("_app:localeReady", function () {
      var a =
        e && e.location && e.location.pathname
          ? window.location.pathname.split("/")
          : [];
      shz.app.langs[a[1]] && a.splice(1, 1);
      var n = a[1],
        i = a[2];
      null != n &&
        null != i &&
        "track" === n &&
        (console.log(performance.now()),
        shz.app.getService("track").request("trackPreload", "/".concat(i), t));
    });
})();
(shz.ux = shz.ux || {}),
  shz.common.merge(shz.ux, new shz.common.Datasync(), !0);
shz.ux.Importer = function (e) {
  var r = this,
    n = e.filepath,
    o = e.shortDelay,
    t = e.longDelay,
    s = e.failure,
    i = "string" == typeof n ? [n] : n;
  (o =
    o ||
    function () {
      shz.ux.set("ux:infobar:show", { msg: shz.app.strings.website_loading });
    }),
    (t =
      t ||
      function () {
        shz.ux.set("ux:infobar:show", {
          msg: "This is taking longer than expected",
        });
      }),
    (s =
      s ||
      function () {
        var e = window.navigator.onLine
          ? shz.app.strings.website_error_ops
          : shz.app.strings.website_offline;
        shz.ux.set("ux:infobar:show", { msg: e });
      });
  var u = function () {
      clearTimeout(r.shortDelayTm), clearTimeout(r.longDelayTm);
    },
    a = !1,
    l = !1;
  return function () {
    if (a || l) return u(), Promise.resolve({ err: "already fetched" });
    (r.shortDelayTm = setTimeout(o, 500)), (r.longDelayTm = setTimeout(t, 5e3));
    var e = i.reduce(function (e, r) {
      var n;
      return (
        e.push(
          ((n = r),
          console.log("loading...", n),
          new Promise(function (e, r) {
            shz.script.loadjs(n, {
              success: function () {
                return e({ filePath: n, err: null });
              },
              failure: function () {
                return r({ filePath: n, err: "Unable to load." });
              },
            });
          }))
        ),
        e
      );
    }, []);
    return (
      (l = !0),
      Promise.all(e)
        .then(function (e) {
          return (a = !0), (l = !1), Promise.resolve(e);
        })
        .catch(function (e) {
          return console.log({ errors: e }), Promise.resolve({ err: e });
        })
        .finally(function () {
          u(), shz.ux.set("ux:infobar:hide");
        })
    );
  };
};
!(function () {
  if ("undefined" != typeof window) {
    var t,
      e,
      n,
      s = shz.common.namespace("tag"),
      a = shz.common.Error,
      r = shz.common.readableDate;
    shz.bridge.on("context", function (t) {
      n ||
        (function (t) {
          if (!n) {
            n = {};
            var e = shz.app.config.urlparams,
              s = parseInt(e.tagtimestamp),
              a = parseInt(e.offset);
            (isNaN(a) && isNaN(s)) || ((s = s || Date.now()), (a = a || 0));
            var p = o(t.data || {}),
              g = p.trackid,
              m = void 0 === g ? e.trackid : g,
              u = p.timestamp,
              d = p.timeskew,
              f = void 0 === d ? 0 : d,
              h = p.frequencyskew,
              l = p.offset,
              k = l || a || 0,
              z = u || s,
              y = z ? z - (k + 150) : Date.now();
            shz.common.merge(n, {
              timestamp: z,
              tagtimestamp: u,
              qparamtimestamp: s,
              offset: k,
              tagoffset: l,
              qparamoffset: a,
              sessionStart: y,
              timestamp2: z && r(z),
              sessionStart2: r(y),
              isNative: shz.bridge.isNative,
              trackid: m,
              timeskew: f,
              frequencyskew: h,
            }),
              console.log("*** sessionStart", n.sessionStart, n.sessionStart2),
              shz.app.get("tag:foregroundsync", i),
              shz.app.get("tag:resynced", { scope: shz.tag, cb: c }),
              shz.app.set("tag:context", n);
          }
        })(t);
    }),
      shz.bridge.on("aboutBridge", function (e) {
        console.log("aboutBridge " + e.data.supportedCommands),
          (t = -1 !== e.data.supportedCommands.indexOf("signatureRequest"));
      }),
      shz.bridge.on("applicationBackgrounded", function () {
        e &&
          s._tracking &&
          ((s._interrupted = !0),
          s.stopTracking(),
          console.log("applicationBackgrounded tracking interrupted"));
      }),
      shz.bridge.on("viewAppeared", function () {
        e &&
          s._interrupted &&
          ((s._interrupted = !1),
          s.startTracking(),
          console.log("viewAppeared tracking resumed"));
      }),
      shz.common.merge(s, {
        _mode: null,
        init: function (t, r) {
          var o = this;
          t
            ? s.isSupported()
              ? o.initialized ||
                ((o.initialized = !0),
                (e = t),
                shz.app.get("tag:context", function (e) {
                  var s = shz.common.copy(n);
                  "server" == t.mode
                    ? (o._mode = shz.tag.server)
                    : ((t.mode = "client"),
                      (o._mode = shz.tag.client),
                      (s.sessionStart += 150)),
                    o._mode.init(s, t, function (t) {
                      t || (shz.app.set("tag:ready", s), o.startTracking()),
                        r(t);
                    });
                }))
              : r(new a({ type: a.UNSUPPORTED, message: "No bridge support" }))
            : r(
                new a({ type: a.INVALID_PARAM, message: "Invalid partner id" })
              );
        },
        getMode: function () {
          return e.mode;
        },
        calcSessionStart: function (t, e) {
          return t - (e + 150);
        },
        calcOffset: function (t) {
          return t ? Math.round(1e3 * t) : 0;
        },
        requestSig: function (t, e) {
          if (!this.initialized)
            throw new a({
              type: a.SERVICE,
              message: "init unsuccessful or not called",
            });
          var n = shz.app.config.services.beatsz,
            s = {
              type: "signatureRequest",
              responseType: "signatureResponse",
              data: { samplems: t.samplems || n.samplems || 5e3 },
            };
          shz.bridge.request(s, function (t) {
            t && t.data
              ? e(t)
              : e(
                  null,
                  (t && t.error) ||
                    new a({ type: a.SERVICE, message: "invalid response" })
                );
          });
        },
        getTrackContext: o,
        isSupported: function () {
          return t;
        },
        startTracking: function () {
          this._tracking ||
            (console.log("Tracking starting ..."),
            (this._tracking = !0),
            shz.app.fire("tag:tracking", { state: !0 }),
            this._track());
        },
        stopTracking: function (t) {
          this._tracking &&
            (console.log("Tracking stopping ..."),
            (this._tracking = !1),
            shz.app.fire("tag:tracking", { state: !1, reason: t }),
            this._track(null, !0)),
            this._mode && t && "done" == t.type && this._mode.cleanup();
        },
        checkSynced: function (t) {
          this._mode.checkSynced(t);
        },
        _onSyncError: function (t) {
          console.log("netlog:onSyncError", t), shz.app.set("tag:syncError", t);
        },
        _track: function (t, n) {
          var s,
            a = this;
          clearTimeout(a.tmSync),
            n ||
              shz.common.isEmpty(e) ||
              ((s = (t = t || {}).results || []),
              (a.tmSync = setTimeout(function () {
                a.tmSync = null;
                var t = Date.now();
                a.checkSynced(function (n, r) {
                  var o;
                  if (a._tracking)
                    if (
                      ((o = r && r.type == shz.common.Error.OUTOFSYNC)
                        ? a._onSyncError(r)
                        : (s.push(r),
                          s.length == (e[e.mode].errorThreshold || 3) &&
                            ((o = !s.some(function (t) {
                              return !t;
                            }))
                              ? a._onSyncError(r)
                              : s.shift())),
                      shz.app.fire("tag:progress", {
                        interval: a._mode._interval,
                        error: r,
                      }),
                      o)
                    )
                      a.stopTracking(r);
                    else {
                      var i = a._mode.getInterval(t);
                      a._track({ nextcheck: i, results: s });
                    }
                  else console.log("_track aborting!!");
                });
              }, t.nextcheck || 0)));
        },
        getSyncData: function (t, s) {
          var r = this;
          (s = isNaN(s) ? 1 : s),
            console.log("getSyncData attempt ", s),
            shz.tag.server.init(shz.common.copy(n), e, function (e) {
              e
                ? t(null, e)
                : shz.tag.server.checkSynced(function (e, n) {
                    n.type == a.NOTFOUND && s
                      ? setTimeout(function () {
                          r.getSyncData(t, --s);
                        }, 1e3)
                      : t(e, n);
                  });
            });
        },
        fastTrack: function (t) {
          this._mode.fastTrack(t);
        },
      });
  }
  function o(t, e) {
    var n,
      s,
      a = {};
    if (t.results) {
      if (
        ((n = t.results.matches || []),
        (s = e
          ? n.filter(function (t) {
              return t.id == e;
            })[0]
          : n[0]))
      ) {
        var r = t.resources["shazam-songs"][s.id].meta,
          o = r.timeSkew,
          i = r.frequencySkew,
          c = r.matchOffset;
        a = {
          trackid: s.id,
          timestamp: t.meta.timestamp,
          timeskew: o,
          frequencyskew: i,
          offset: c ? Math.round(1e3 * c) : 0,
        };
      }
    } else if (
      ((n = t.matches || []),
      (s = e
        ? n.filter(function (t) {
            return t.id == e;
          })[0]
        : n[0]))
    ) {
      var p = s,
        g = p.timeskew,
        m = p.frequencyskew,
        u = p.offset;
      a = {
        trackid: s.id,
        timestamp: t.timestamp,
        timeskew: g,
        frequencyskew: m,
        offset: u ? Math.round(1e3 * u) : 0,
      };
    }
    return a;
  }
  function i() {
    console.log("netlog1", "foreground syncing");
    var t,
      e = shz.app,
      n = e.campaign.retag || {
        android: "shazam://starttagging",
        ios: "shazam://v5/tagging/tag",
      };
    e.supports.android
      ? (t = n.android)
      : e.supports.ios &&
        -1 != e.supports.appverCompare("ios", "11.0.3") &&
        (t = n.ios),
      t && (document.location.href = t);
  }
  function c() {
    this.startTracking();
  }
})();
!(function () {
  var t,
    e,
    a = shz.common.namespace("tag.server"),
    r = shz.common.Error;
  function n(t, e, a) {
    (e = e || ""), (a = a || 512);
    for (var r = atob(t), n = [], s = 0; s < r.length; s += a) {
      for (
        var i = r.slice(s, s + a), o = new Array(i.length), c = 0;
        c < i.length;
        c++
      )
        o[c] = i.charCodeAt(c);
      var m = new Uint8Array(o);
      n.push(m);
    }
    return new Blob(n, { type: e });
  }
  shz.common.merge(
    a,
    {
      init: function (a, r, n) {
        ((e = r).server = e.server || {
          driftLimit: 500,
          interval: 6e3,
          partnerid: "beatshz",
        }),
          (t = a),
          (this._interval = e.server.interval),
          n();
      },
      matchSig: function (a, s) {
        if (a && a.data) {
          var i = a.data.signature.uri.split(","),
            o = e.server.partnerid,
            c = shz.app.config.services[o],
            m = shz.common.supplant(c.url, shz.app);
          shz.common
            .getJSON({
              url: m,
              method: "POST",
              headers: {
                "Content-type": "audio/vnd.shazam.sig",
                "X-Shazam-Api-Key": "09db95d0-d0f0-11e7-881d-9fa285a7c94f",
                "Content-Transfer-Encoding": "base64",
              },
              params: n(i[1], "audio/vnd.shazam.sig"),
              encoded: !0,
            })
            .then(function (e, n) {
              var i = shz.tag.getTrackContext(e, t.trackId),
                o = i && {
                  track: { key: t.trackId },
                  timestamp: a.data.timestamp,
                  offset: 1e3 * i.offset,
                  _raw: e,
                };
              o &&
                (o.sessionStart = shz.tag.calcSessionStart(
                  o.timestamp,
                  o.offset
                )),
                s(
                  o,
                  !o &&
                    (n.error ||
                      new r({ type: r.NOTFOUND, message: "No match" }))
                );
            });
        } else
          s(
            null,
            a.error || new r({ type: r.SERVICE, message: "invalid response" })
          );
      },
      tag: function (t, a) {
        var r = this;
        shz.tag.requestSig(t || e, function (t, e) {
          t && !e
            ? r.matchSig(t, a)
            : (console.log("server:tag **** error"), a(null, e));
        });
      },
      checkSynced: function (a) {
        this.tag(e, function (n, s) {
          var i;
          n && !s
            ? (((i = shz.common.copy(n || {})).synced =
                Math.abs(i.sessionStart - t.sessionStart) <
                (e.server.driftLimit || 500)),
              (i.syncparams = {
                tagtimestamp: i.timestamp,
                offset: i.offset,
                trackid: t.trackid,
              }),
              a(
                i,
                !i.synced && new r({ type: r.OUTOFSYNC, args: i.syncparams })
              ))
            : a(null, s);
        });
      },
      fastTrack: function (t) {
        (this._interval = t ? 0 : e.server.interval),
          console.log("tagserver interval", this._interval);
      },
      getInterval: function (t) {
        return 0 == this._interval
          ? 0
          : Math.max(this._interval - (Date.now() - t), 0);
      },
      cleanup: function () {},
    },
    !0
  );
})();
!(function () {
  var t,
    e,
    s = shz.common.namespace("tag.client"),
    a = shz.common.Error,
    i = 1;
  function r(s) {
    var a = this.apiCbks[s.data.type];
    switch (s.data.type) {
      case "loaded":
        this.worker.postMessage({
          type: "init",
          libver: i,
          context: t,
          tagparams: e,
          version: shz.version,
        });
        break;
      case "init":
        a && a(s.data.error);
        break;
      case "matchSig":
        s.data.error &&
          ("jserror" == s.data.error.type && shz.tag.stopTracking(s.data.error),
          shz.stats.stat(
            {
              beaconType: "error",
              providerdesc: "tagclient",
              errordesc: s.data.error.type + " " + s.data.error.message,
            },
            shz.app
          )),
          !s.data.error &&
            console.log(
              i + " sig_match (" + s.data.match.skew + ")",
              s.data.match.peaks
            ),
          a && a(s.data.match.peaks, s.data.error);
        break;
      case "log":
        console.log("worker: " + s.data.message);
    }
    delete this.apiCbks[s.data.type];
  }
  shz.common.merge(
    s,
    {
      _matchskew: 1,
      _refSig: null,
      _interval: 0,
      matchSig: function (t, e) {
        (this.apiCbks.matchSig = e),
          this.worker.postMessage({
            type: "matchSig",
            data: t,
            sessionStart: this.sessionStart,
          });
      },
      init: function (s, n, o) {
        var c,
          l = shz.app.supports.platform;
        if (e) o();
        else {
          try {
            n.client || n.client.sigpath
              ? (((e = n).samplems = e.client.samplems || e.samplems),
                e.client[l] && shz.common.merge(e.client, e.client[l], !0),
                (this._interval = e.client.interval =
                  isNaN(e.client.interval) ? 200 : e.client.interval),
                (this._fastinterval = e.client.fastinterval =
                  isNaN(e.client.fastinterval) ? 200 : e.client.fastinterval),
                (t = s),
                (this.sessionStart = t.sessionStart),
                window.Worker
                  ? ((this.apiCbks = {}),
                    (this.apiCbks.init = o),
                    (i = e.client.libver || i),
                    e.client.bgtest &&
                      (e.client.bgtest.tagvers || [])
                        .sort(function (t, e) {
                          return t.mins < e.mins ? -1 : 1;
                        })
                        .some(function (t) {
                          if (s.tagoffset < 60 * t.mins * 1e3)
                            return (i = t.ver), !0;
                        }),
                    (this.worker = new Worker(
                      "/" +
                        ("src" == shz.version
                          ? "src"
                          : "builds/" + shz.version) +
                        "/js/tagclientworker" +
                        (1 == i ? "1" : "") +
                        ".js"
                    )),
                    this.worker.addEventListener("message", r.bind(this)))
                  : (c = new a({
                      type: a.UNSUPPORTED,
                      message: "window.worker",
                    })))
              : (c = new a({
                  type: a.INVALID_PARAM,
                  message: "missing client/sigpath",
                }));
          } catch (t) {
            c = new a({
              type: a.DATAERROR,
              message: (t.message || "") + " tagclient init failed",
            });
          }
          c && o(c);
        }
      },
      tag: function (t, s) {
        var a = this;
        shz.tag.requestSig(t || e, function (t, e) {
          t && !e ? a.matchSig(t, s) : s(null, e);
        });
      },
      checkSynced: function (t) {
        this.tag(e, function (s) {
          s <= (e.client.peakThreshold || 0)
            ? t(null, new a({ type: a.NOTFOUND, message: "No match" }))
            : t({ synced: !0 });
        });
      },
      fastTrack: function (t) {
        this._interval = t ? this._fastinterval : this._interval;
      },
      getInterval: function (t) {
        return this._interval;
      },
      cleanup: function () {
        this.worker &&
          (console.log("Terminating worker thread"), this.worker.terminate());
      },
    },
    !0
  );
})();
!(function () {
  if ("undefined" != typeof window) {
    var t,
      e = 0,
      n = new (function () {
        var a,
          s,
          i = shz.common.readableDate;
        return {
          getSessionStart: function (t) {
            return t ? i(s) : s;
          },
          getOffset: function () {
            return Date.now() - s + e;
          },
          getTagtime: function (t) {
            return n.timestamp ? (t ? i(n.timestamp) : n.timestamp) : "";
          },
          setOffset: function (t) {
            s = Date.now() - t;
          },
          isRevisit: function () {
            if (!a) return !1;
            var t = shz.storage.local.get("first_visit.".concat(a));
            return t || shz.storage.local.set("first_visit.".concat(a), s), t;
          },
          _setTagData: function (e, i) {
            (a = e.tagtimestamp),
              (s = e.sessionStart || 0),
              !e.timestamp && t
                ? (s = t)
                : a &&
                  (s = shz.storage.local.get("first_visit.".concat(a)) || s),
              shz.common.merge(n, e, !0),
              !i && shz.app.set("timeline:ready", n);
          },
        };
      })();
    shz.app.get("timeline:syncdata", function (n) {
      (e = (!isNaN(n.startoffset) && n.startoffset) || 0),
        (t = n.starttime),
        n.showlen,
        n.timeline
          ? shz.app.get("tag:context", function (t) {
              a(t);
            })
          : a({ data: {} });
    });
  }
  function a(t) {
    n.timestamp || n._setTagData(t);
  }
})();
!(function () {
  function t(t) {
    return (
      t.targetTouches && (t = t.targetTouches[0]),
      { x: t && t.pageX, y: t && t.pageY, tm: Date.now() }
    );
  }
  function e(t) {
    return t < 0 ? -1 : t > 0 ? 1 : 0;
  }
  "undefined" != typeof window &&
    shz.ux.get("app:ready", function () {
      new (function () {
        var o,
          n,
          d,
          c,
          r,
          a,
          i,
          u = shz.app.supports,
          y = u.getEventsOfType("pointerdown").events,
          x = u.getEventsOfType("pointermove").events,
          m = ["click"],
          s = {
            handleEvent: function (t) {
              this[t.type].call(this, t);
            },
            touchstart: function (e) {
              (d = n = o = c = t(e)),
                (r = a = 0),
                (i = {
                  deltaStart: { x: 0, y: 0, z: 0 },
                  deltaPrev: { x: 0, y: 0, z: 0 },
                  dir: { x: 0, y: 0, z: 0 },
                  lastXY: { x: o.x, y: o.y },
                }),
                (e.ext = i),
                x.forEach(function (t) {
                  document.body && document.body.addEventListener(t, s, !0);
                }),
                m.forEach(function (t) {
                  document.body && document.body.addEventListener(t, s, !0);
                });
            },
            touchmove: function (u) {
              n = d;
              var y,
                x,
                m = (d = t(u)).x - n.x,
                s = d.y - n.y,
                v = (d.tm, n.tm, i.dirLock);
              (x = (y = d).tm - c.tm) > 100 &&
                ((r = (y.x - c.x) / x), (a = (y.y - c.y) / x), (c = y)),
                (i = {
                  deltaStart: { x: d.x - o.x, y: d.y - o.y, z: 0 },
                  deltaPrev: { x: m, y: s, z: 0 },
                  vel: { x: r, y: a, z: 0 },
                  dir: { x: e(m) || i.dir.x, y: e(s) || i.dir.y, z: 0 },
                  lastXY: { x: d.x, y: d.y },
                  dirLock: v,
                }),
                v ||
                  (Math.abs(i.deltaStart.x) > 5
                    ? (i.dirLock = { x: 1 })
                    : Math.abs(i.deltaStart.y) > 5 && (i.dirLock = { y: 1 })),
                (u.ext = i);
            },
            click: function (t) {
              var e = Date.now();
              x.forEach(function (t) {
                document.body && document.body.removeEventListener(t, s, !0);
              }),
                m.forEach(function (t) {
                  document.body && document.body.removeEventListener(t, s, !0);
                }),
                (o = 0),
                (t.ext = i),
                e - d.tm > 100 && (t.ext.vel = { x: 0, y: 0 });
            },
          };
        (s.pointerdown = s.touchstart),
          (s.pointermove = s.touchmove),
          (s.mousedown = s.pointerdown),
          (s.mousemove = s.touchmove),
          y.forEach(function (t) {
            document.body && document.body.addEventListener(t, s, !0);
          });
      })();
    });
})();
!(function () {
  var e = shz.common.namespace("ux.tag"),
    a = shz.common.Error;
  function t(e, a, t) {
    (a = a || ""), (t = t || 512);
    for (var n = atob(e), r = [], s = 0; s < n.length; s += t) {
      for (
        var o = n.slice(s, s + t), m = new Array(o.length), c = 0;
        c < o.length;
        c++
      )
        m[c] = o.charCodeAt(c);
      var h = new Uint8Array(m);
      r.push(h);
    }
    return new Blob(r, { type: a });
  }
  shz.common.merge(e, {
    perform: function (e, n) {
      shz.bridge.request(
        {
          type: "signatureRequest",
          responseType: "signatureResponse",
          data: { samplems: e.sample || 7e3 },
        },
        function (e) {
          var r = e.data.signature.uri.split(",");
          shz.common
            .getJSON({
              url: "/rec/partner/beatshz/en/US/beatshz/sync/recognise/02af3f8a-83c2-45f1-92dc-c5e1e74d310f/F92AEE17-9FFB-4B43-9093-9EAC1705C04B",
              method: "POST",
              headers: {
                "Content-type": "audio/vnd.shazam.sig",
                "X-Shazam-Api-Key": "09db95d0-d0f0-11e7-881d-9fa285a7c94f",
                "Content-Transfer-Encoding": "base64",
              },
              params: t(r[1], "audio/vnd.shazam.sig"),
              encoded: !0,
            })
            .then(function (t, r) {
              var s = t.matches.length && {
                timestamp: e.data.timestamp,
                offset: 1e3 * t.matches[0].offset,
                _raw: t,
              };
              n(
                s,
                !s &&
                  (r.error || new a({ type: a.NOTFOUND, message: "No match" }))
              );
            });
        }
      );
    },
  });
})();
function _typeof(t) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(t);
}
!(function (t) {
  var e = "loading" in HTMLImageElement.prototype;
  shz.ux.ImageLoader = (function () {
    var t = {},
      a = {},
      n = shz.app.supports.ie ? "animationend" : "webkitAnimationEnd";
    function s(e, a, s) {
      var o,
        r,
        d = (a && shz.common.getId(a)) || "",
        l = function t() {
          this.classList.add("animEnd"), this.removeEventListener(n, t);
        };
      function m(a, s, m, c, g) {
        var h = this.dataset.shzImg,
          u = this.dataset.shzImgError,
          f = this.dataset.shzImgAdditionalBgStyle,
          z = g || e.src,
          y = i(a, h) || [];
        c && !g && (y = []),
          y.forEach(function (t) {
            "string" != typeof t &&
              (function (t, e, a, s) {
                "img" === t.tagName.toLowerCase()
                  ? (t.src = e)
                  : (t.style.backgroundImage =
                      'url("' + e + '")' + (s ? ", " + s : "")),
                  a.noFade && t.classList.add("animEnd"),
                  t.dataset.shzImgFadejs
                    ? shz.common.animate({
                        el: t,
                        duration: 1 * t.dataset.shzImgFadejs || 1e3,
                        onEnd: function () {
                          t.classList.add("animEnd");
                        },
                      })
                    : t.classList.add("img-on"),
                  a.forceFade && t.classList.add("img-on-force"),
                  a.noFade || t.addEventListener(n, l),
                  t.removeAttribute("data-shz-img");
              })(t, z, s.options, f);
          }),
          s.checkDone(h, c, y.length),
          delete t[d + h],
          e.removeEventListener("load", o),
          u && e.removeEventListener("error", r),
          (o = r = a = y = s = null);
      }
      return (
        (o = m.bind(e, a, s)),
        e.addEventListener("load", o),
        (r = function (t, a, n) {
          var s = this.dataset.shzImgError;
          m.call(e, t, a, n, !0, s);
        }.bind(e, a, s)),
        e.addEventListener("error", r),
        o
      );
    }
    function o(e, a, n, o) {
      var i = "string" == typeof e,
        r = i ? e : e.dataset.shzImg,
        d = i ? null : e.dataset.shzImgAdditionalBgStyle,
        l = i ? null : e.dataset.shzImgError,
        m = n + r;
      t[m] ||
        null == r ||
        ((t[m] = 1),
        (e = new Image()).setAttribute("data-shz-img", r),
        d && e.setAttribute("data-shz-img-additional-bg-style", d),
        l && e.setAttribute("data-shz-img-error", l),
        s(e, a, o),
        (e.src = r));
    }
    function i(t, a) {
      var n = a
          ? '[data-shz-img="' + a + '"]'
          : shz && shz.app && shz.app.mobilemode
          ? "[data-shz-img]:not(.no-mobile-load):not(.loadonscroll)"
          : "[data-shz-img]",
        s = [];
      switch (_typeof(t)) {
        case "object":
          if (Array.isArray(t))
            a
              ? t.forEach(function (t) {
                  var e = "string" == typeof t;
                  ((e && a == t) || (!e && a == t.dataset.shzImg)) && s.push(t);
                })
              : (s = t);
          else if (
            ((s = (t && t.querySelectorAll(n)) || []),
            (s = [].slice.call(s, 0)),
            t && t.dataset.shzImg && s.push(t),
            e)
          ) {
            var o = s.reduce(
              function (t, e) {
                return "IMG" === e.tagName ? t.img.push(e) : t.bg.push(e), t;
              },
              { bg: [], img: [] }
            );
            o.img.length &&
              (function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "lazy";
                function a(t) {
                  t.currentTarget.classList.remove("lazy-image-loading");
                }
                t.forEach(function (t) {
                  (t.loading = e),
                    (t.src = t.dataset.shzImg),
                    t.complete ||
                      t.dataset.shzImgNoFade ||
                      (t.classList.add("lazy-image"),
                      t.classList.add("lazy-image-loading"),
                      t.addEventListener("load", a, { options: !0 })),
                    delete t.dataset.shzImg;
                });
              })(o.img),
              (s = o.bg);
          }
          break;
        case "string":
          s = [t];
      }
      return s;
    }
    return {
      load: function (t, e) {
        e = e || {};
        var n,
          s = (t && shz.common.getId(t)) || "",
          r = i(t),
          d = e.force,
          l = {};
        r.length &&
          ((n = {
            options: e,
            doneCt: 0,
            total: r.length,
            checkDone: function (t, e, a) {
              var n = this.options;
              n &&
                ((this.doneCt += a),
                n.cb && n.cb(t, e),
                this.doneCt == this.total && n.cbAll && n.cbAll());
            },
          }),
          r.forEach(function (e) {
            var i = "string" == typeof e,
              r = i ? e : e.dataset.shzImg,
              m = !i && e.dataset.shzImgAdditionalBgStyle,
              c = !i && parseInt(e.dataset.shzImgDelay, 10);
            (e.dataset && e.dataset.shzImgStall && !d) ||
              (!a[r + s] || l[r + s]
                ? ((a[r + s] = 1),
                  (l[r + s] = 1),
                  c
                    ? setTimeout(function () {
                        o(e, t, s, n);
                      }, c)
                    : o(e, t, s, n))
                : i ||
                  ("img" === e.tagName.toLowerCase()
                    ? (e.src = r)
                    : (e.style.backgroundImage =
                        'url("' + r + '")' + (m ? ", " + m : "")),
                  e.removeAttribute("data-shz-img")));
          }));
      },
    };
  })();
})();
!(function () {
  var e =
    "undefined" != typeof HTMLImageElement &&
    "loading" in HTMLImageElement.prototype;
  (shz.ux.VideoLoader = (function () {
    function e() {
      this.style.visibility = "visible";
    }
    return {
      load: function (t) {
        t &&
          t.querySelectorAll("[data-shz-video]").forEach(function (t) {
            (t.style.visibility = "hidden"),
              t.addEventListener("canplaythrough", e, { once: !0 });
          });
      },
    };
  })()),
    (shz.ux.ImageSrcSetLoader = (function () {
      function t(t) {
        var i = this.imageNode,
          a = this.parentNode;
        "load" === t.type &&
          (a.classList.remove("img-src-set-loading"),
          a.classList.add("img-src-set-loaded"),
          a.removeAttribute("data-shz-srcset"),
          a.removeAttribute("data-shz-sizes"),
          a.removeAttribute("data-shz-src"),
          (i.style.visibility = "visible"),
          e ||
            "hidden" != i.style.visibility ||
            requestAnimationFrame(function () {
              i.animate
                ? i.animate([{ opacity: 0 }, { opacity: 1 }], {
                    duration: 1e3,
                    iterations: 1,
                    easing: "ease-out",
                  })
                : (i.style.opacity = 1);
            }));
      }
      return {
        load: function (i) {
          i &&
            i.querySelectorAll("[data-shz-srcset]").forEach(function (i) {
              var a = i.dataset,
                s = a.shzSrcset,
                n = a.shzSrc,
                o = a.shzSizes;
              i.classList.add("img-src-set-loading");
              var r = document.createElement("img");
              e && r.setAttribute("loading", "lazy"),
                (r.style.visibility = "hidden"),
                n && s && ((r.srcset = s), (r.src = n), (r.sizes = o)),
                (i.innerHTML = ""),
                i.appendChild(r);
              var d = { imageNode: r, parentNode: i, handleEvent: t };
              r.addEventListener("load", d, { once: !0 });
            });
        },
      };
    })());
})();
!(function () {
  function e(e) {
    if (!e.ignoreRipple) {
      e.stopImmediatePropagation(), e.preventDefault();
      var t = document.getElementById("ShzRipplePortal"),
        n = e.currentTarget,
        i = n.getBoundingClientRect(),
        o = window.getComputedStyle(n),
        p = n.cloneNode();
      (p.style.cssText = "\n            position: fixed;\n            top: "
        .concat(i.y, "px;\n            left: ")
        .concat(i.x, "px;\n            width: ")
        .concat(i.width, "px;\n            height: ")
        .concat(
          i.height,
          "px;\n            z-index: 99999;\n            border-radius: "
        )
        .concat(
          o.borderRadius,
          ";\n            overflow: hidden;\n            pointer-events: none;\n            background: none;\n        "
        )),
        t.appendChild(p);
      var a = document.createElement("span"),
        d = Math.max(n.clientWidth, n.clientHeight),
        c = d / 2;
      (a.style.width = a.style.height = "".concat(d, "px")),
        (a.style.left = "".concat(e.clientX - i.x - c, "px")),
        (a.style.top = "".concat(e.clientY - i.y - c, "px")),
        a.classList.add("ripple"),
        p.appendChild(a),
        setTimeout(function () {
          requestAnimationFrame(function () {
            p && p.remove && p.remove();
          });
        }, 600),
        (e.isRipple = !0),
        (e.rippleAnimationEndPromise = new Promise(function (t, n) {
          a.addEventListener("animationend", function () {
            (e.ignoreRipple = !0), e.target.dispatchEvent(e), t();
          });
        }));
    }
  }
  shz.ux.Ripple = {
    load: function (t) {
      if (shz.app.supports.android && shz.app.supports.inApp) {
        if (!t) return;
        var n = t.querySelectorAll("[data-shz-ripple=true]");
        if (n.length && !document.getElementById("ShzRipplePortal")) {
          var i = document.createElement("div");
          (i.id = "ShzRipplePortal"), document.body.appendChild(i);
        }
        n.forEach(function (t) {
          t.addEventListener("click", e);
        });
      }
    },
  };
})();
!(function () {
  var e = shz.common.namespace("ux.social");
  (e.twitter = {
    _loadScript: function (e) {
      var t = document.createElement("script");
      (t.onload = function () {
        e();
      }),
        (t.onerror = function () {
          document.body.removeChild(t), e({ error: !0 });
        }),
        (t.src = "https://platform.twitter.com/widgets.js"),
        document.body.appendChild(t);
    },
    load: function (e) {
      var t = this,
        o = (t.cbks = t.cbks || []);
      function r(e) {
        for (var t; o.length; ) {
          t = o.splice(o.length - 1, 1)[0];
          try {
            e ? t.ok && t.ok.call(t.scope) : t.fail && t.fail.call(t.scope);
          } catch (e) {
            console.log("social load error ", e);
          }
        }
      }
      e && o.push("function" == typeof e ? { ok: e } : e),
        t._loaded
          ? r(t._loaded)
          : t._loading ||
            ((t._loading = !0),
            t._loadScript(function (e) {
              (t._loading = !1), (t._loaded = !(e && e.error)), r(t._loaded);
            }));
    },
  }),
    (e.loadAll = function () {
      "undefined" != typeof shz &&
        (this.loadedExternals ||
          shz.app.supports.inApp ||
          shz.bridge.isNative ||
          ((this.loadedExternals = !0), this.twitter.load()));
    }),
    (e.share = function (e, t, o) {
      if (navigator.share) {
        var r = { url: e.href, text: e.text, title: e.subject };
        navigator
          .share(r)
          .then(function () {
            shz.stats.stat(
              {
                beaconType: "userevent",
                type: "share",
                screenname: o ? o.screenname : null,
              },
              shz.app
            );
          })
          .catch(function (e) {
            return console.log("Error sharing", e);
          });
      } else {
        e.text = e.text || e.twitter;
        var a = {
            twitter: "shazam://v5/twitter/post?status={status}&url={url}",
            email: "shazam://v5/mailto?subject={subject}&body={email}",
          },
          s = { twitter: "TwitterOAuth", email: "Email" },
          n = {
            subject: e.subject,
            text: e.text + " \r\n" + (e.url || e.href),
            href: e.href,
            url: e.url || e.href,
            image: e.image,
            twitter: e.twitter,
            status: e.status || e.text,
            shareOptions: [],
          };
        shz.app.supports.inApp && (n = shz.common.merge(n, e)),
          shz.app.supports.ios &&
            shz.app.supports.osVerNum >= 9.4 &&
            (n.text = e.text),
          Object.keys(a).forEach(function (t) {
            n.shareOptions.push({
              providerName: s[t],
              url: a[t]
                .replace(/{text}/, encodeURIComponent(n.text))
                .replace(/{url}/, encodeURIComponent(n.url))
                .replace(/{status}/, encodeURIComponent(e.text))
                .replace(/{&picture=imageurl}/, n.imageurl)
                .replace(/{subject}/, encodeURIComponent(n.subject))
                .replace(
                  /{email}/,
                  encodeURIComponent(e.text) + "%20" + encodeURIComponent(e.url)
                ),
              shareId: t,
            });
          }),
          shz.bridge.request({ type: "sharesheet", data: n }, t, o);
      }
    });
})();
!(function () {
  if ("undefined" != typeof window) {
    var e,
      i,
      t,
      n,
      s,
      o,
      a = [];
    (o = document.createElement("div")).classList.add("shz-infobar"),
      (o.innerHTML =
        '<div class="pill" aria-hidden="true"><div class="msg" aria-live="off">_</div><span class="dismiss"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cross"></use></svg></span></div>'),
      (n = o.querySelector(".pill")),
      (s = o.querySelector(".msg")),
      o.addEventListener("click", function (e) {
        e.preventDefault(), e.stopPropagation(), u();
      }),
      document.body.appendChild(o),
      shz.ux.get("ux:infobar:hide", function () {
        r();
      }),
      shz.ux.get("ux:infobar:show", function (e) {
        r(e);
      });
  }
  function r(o) {
    var r = a.length,
      l = a[r - 1];
    r && !l && a.pop(),
      a.push(o),
      t ||
        (function o(r) {
          r && r.msg
            ? ((i = r.keepOpen),
              (function (t) {
                t &&
                  t.msg &&
                  (n.removeAttribute("aria-hidden"),
                  s.setAttribute("aria-live", "polite"),
                  (s.innerHTML = t.msg),
                  n.classList.add("on"),
                  clearTimeout(e),
                  i ||
                    (e = setTimeout(function () {
                      u();
                    }, 5e3)));
              })(r))
            : u(),
            (t = setTimeout(function () {
              (t = 0), a.length && o(a.shift());
            }, 2e3));
        })(a.shift());
  }
  function u() {
    clearTimeout(e),
      clearTimeout(t),
      n.classList.remove("on"),
      n.setAttribute("aria-hidden", !0),
      s.setAttribute("aria-live", "off"),
      (i = 0);
  }
})();
!(function () {
  var e = new shz.ux.Importer({ filepath: "js/ux/menu.js" });
  shz.common.namespace("ux.Menu").create = function (n, r) {
    return e().then(function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        u = e.err;
      return !u && shz.ux.Menu.create(n, r);
    });
  };
})();
!(function () {
  var e, t, o;
  function a() {
    e && !e.takeover && s(e);
  }
  function r() {
    var e = document.querySelector(".overlay");
    e &&
      ((t = !1),
      e.classList.remove(
        "above",
        "below",
        "left",
        "right",
        "overlay-takeover",
        "overlay-fade",
        "overlay-bottomup",
        "overlay-modal",
        "overlay-forcemask"
      ),
      e.setAttribute("aria-hidden", "true"),
      e.classList.contains("overlay-growout") &&
        (e.classList.remove("overlay-growout", "overlay-growout-delay"),
        e.removeAttribute("style")));
  }
  function s(t) {
    var o,
      a,
      s,
      i = t.node,
      l = t.growParams,
      n = document.querySelector(".overlay"),
      d = document.body,
      c = d.clientWidth,
      v = d.clientHeight,
      m = d.scrollTop,
      y = { left: 0, top: 0 },
      u = 0,
      h = t.transition && "bottomup" == t.transition ? "100%" : 0;
    if (((e = t), i)) {
      if (!shz.ux.supports.isPhone())
        switch (
          ((y = i.getBoundingClientRect()),
          "right" == (o = i.dataset.popupPosition || "below") &&
            c - y.right < 300 &&
            (o = "left"),
          (t.fixed = !0),
          t.fixed && (m = 0),
          (u = y.left),
          o)
        ) {
          case "above":
            (h = y.top + m - 10), (u += y.width / 2);
            break;
          case "below-center":
            (h = y.top + (y.height || 0) + m + 10), (u += y.width / 2);
            break;
          case "below":
            (h = y.top + (y.height || 0) + m + 10), (u += y.width);
            break;
          case "left-center":
          case "left":
            (h = y.top + (y.height || 0) / 2 + m), (u += -10);
            break;
          case "right-center":
          case "right":
            (h = y.top + (y.height || 0) / 2 + m), (u += y.width + 10);
        }
    } else
      l &&
        ((h = (y = l.growFromNode.getBoundingClientRect()).top),
        (a = v - (y.top + y.height)),
        (u = y.left),
        (s = c - y.width - y.left),
        (n.style.top = h + "px"),
        (n.style.bottom = a + "px"),
        (n.style.right = s + "px"),
        (n.style.left = u + "px"),
        l.borderRadius && (n.style.borderRadius = l.borderRadius));
    r(),
      l &&
        (l.delayGrowout
          ? n.classList.add("overlay-growout-delay")
          : n.classList.add("overlay-growout")),
      t.transition &&
        "bottomup" == t.transition &&
        n.classList.add("overlay-bottomup"),
      (n.style.left = u + "px"),
      (n.style.top = (h + "").indexOf("%") > -1 ? h : h + "px"),
      n.classList.add("overlay-fade"),
      o && n.classList.add(o),
      d.classList.remove("overlay-takeover"),
      t.takeover &&
        (n.classList.add("overlay-takeover"),
        d.classList.add("overlay-on"),
        n.classList.add("grid-vert-center"),
        n.classList.remove("grid-vert-bottom"),
        t.alignBottom &&
          (n.classList.remove("grid-vert-center"),
          n.classList.add("grid-vert-bottom"))),
      t.modal && n.classList.add("overlay-modal"),
      n.setAttribute("aria-hidden", "false");
  }
  shz.ux.get("app:ready", {
    cb: function () {
      shz.app.get("app:path", function (t) {
        var o,
          i = t.overlay,
          l = t.overlay2;
        i
          ? (o = i.params)
            ? (o.takeover
                ? s({
                    takeover: !0,
                    modal: o.modal,
                    alignBottom: o.alignBottom,
                    transition: o.transition,
                    growParams: o.growParams,
                  })
                : o.position && s(o.position),
              o.shouldMask && document.body.classList.add("overlay-forcemask"),
              document.addEventListener("window:resize", a))
            : i.path ||
              (r(),
              document.body.classList.remove("overlay-on"),
              document.body.classList.remove("shim-on"),
              document.body.classList.remove("overlay-forcemask"),
              document.removeEventListener("window:resize", a),
              (e = null))
          : l &&
            (l.path
              ? document.body.classList.add("overlay2-on")
              : document.body.classList.remove("overlay2-on"));
      });
    },
    listenOnce: 1,
  }),
    shz.common.merge(shz.ux, {
      overlay: function (e, a) {
        var r,
          s = document.body.querySelector(".overlay"),
          i = s && s.querySelector("[data-shz-frame]"),
          l = s && s.classList.contains("overlay-modal"),
          n = "overlay";
        if (
          ((i = i && i.dataset.shzFrame),
          e.href
            ? t
              ? ((n = "overlay2"), (o = !0))
              : (t = !0)
            : o
            ? ((n = "overlay2"), (o = !1))
            : (t = !1),
          l && e.href)
        )
          return (
            (r = (i || "") + " Modal takeover in play. Can't dismiss"),
            a &&
              a(
                new shz.common.Error({
                  type: shz.common.Error.ABORTED,
                  message: r,
                })
              ),
            void console.log(r)
          );
        console.log("overlay calling navigate ", e.href),
          shz.ux.set("overlay:change", {
            last: i,
            current: e.href,
            section: n,
          }),
          shz.app.navigate({ href: e.href, section: n, params: e.params }),
          a && a();
      },
    });
})();
!(function () {
  if ("undefined" != typeof window) {
    var e,
      o = function (o, n) {
        var t,
          s,
          a,
          i,
          r,
          c,
          p = this,
          u = this,
          l =
            (shz.app.supports,
            {
              onPointerUp: { events: ["click"] },
              onKeyUp: { events: ["keyup"] },
            });
        function d(e) {
          var o = e.expanded;
          u.btn &&
            void 0 !== u.btn.getAttribute("aria-expanded") &&
            u.btn.setAttribute("aria-expanded", o);
        }
        if (
          ((n = n || {}),
          (u.btn = o),
          (u.node = o),
          o.classList.contains("popup") ||
            ((i = shz.common.ancestor(o, ".popup").node) && (u.node = o = i),
            (i = null)),
          (u.close = function (s) {
            var a,
              i,
              r = s && s.target,
              c =
                r &&
                shz.common.ancestor(r, [
                  ".shz-frame",
                  ".popup-btn",
                  ".overlay",
                ]),
              p = c && c.selector,
              m = function (s) {
                var a = n.href || o.pathname || o.dataset.href;
                clearTimeout(t),
                  (t = null),
                  u.node.classList.remove("on"),
                  !r ||
                    r.href ||
                    r.dataset.href ||
                    r.dataset.shzCmd ||
                    shz.common.ancestor(r, "[shz-cmd]").node ||
                    (s && s.stopPropagation && s.stopPropagation()),
                  setTimeout(function () {
                    document.body.classList.remove("overlay-on");
                  }, 0),
                  Object.keys(l).forEach(function (e) {
                    l[e].events.forEach(function (e) {
                      document.removeEventListener(e, u.close, !0);
                    });
                  }),
                  a &&
                    (document
                      .querySelector(".overlay")
                      .classList.remove("overlay-fade"),
                    shz.ux.overlay({ href: null })),
                  o.classList.remove("popup-on"),
                  d({ expanded: !1, ancestor: c }),
                  (e = u.node = o = null);
              };
            if (!s || "keyup" != s.type || 27 == s.keyCode)
              if (
                ((a = shz.common.ancestor(r, ".shz-menu").node),
                (i = shz.common.ancestor(r, ".shz-menu-item").node) &&
                  a &&
                  a.classList.contains("shz-menu-dismiss-on-click"))
              )
                m(s);
              else if (
                i &&
                i.classList.contains("shz-menu-item-dismiss-on-click")
              )
                m(s);
              else {
                if (
                  ".shz-frame" == p &&
                  (c.node.classList.contains("popup-keepalive") ||
                    shz.common.ancestor(c.node, ".overlay").node)
                )
                  return;
                if (
                  ".overlay" == p &&
                  !c.node.classList.contains("overlay-takeover")
                )
                  return;
                if (".popup-btn" == p) return;
                m(s);
              }
          }),
          Object.keys(l).forEach(function (e) {
            l[e].events.forEach(function (e) {
              document.addEventListener(e, u.close, !0);
            });
          }),
          (r = n.href || o.pathname || o.dataset.href))
        ) {
          if (r.indexOf("ux/youtube/") >= 0 && shz.app.supports.isMobile) {
            var m = shz.common.getFrameInfo(r, shz.app.config);
            return void (document.location.href =
              "http://www.youtube.com/embed/" + m.params[0] + "?autoplay=1");
          }
          (s = o.classList.contains("popup-inline") || n.popupInline),
            (a =
              o.classList.contains("popup-takeover") ||
              n.takeover ||
              (s && shz.ux.supports.isPhone()));
          try {
            c = JSON.parse(o.dataset.shzMvargs);
          } catch (e) {}
          shz.ux.overlay({
            href: r,
            params: {
              mvargs: n.mvargs || c,
              alignBottom: s,
              takeover: a,
              modal: n.modal,
              position: { node: o, fixed: n.fixed },
            },
          });
        } else {
          o.classList.add("popup-on");
          var h = o.querySelector(".shz-menu");
          shz.ux.Menu.create(h).then(function (e) {
            (p.menu = e), p.menu.toggle(o), d({ expanded: !0 });
          });
        }
      };
    shz.common.merge(shz.ux, {
      popup: n,
      dialog: function (e) {
        var o = (e = e || {}).defCallback,
          n = [
            {
              label: e.buttontext || shz.app.strings.website_dialog_ok,
              callback: function (e) {
                e ? e() : o && o();
              },
            },
          ];
        shz.ux.overlay({
          href: "/ux/dialog",
          params: {
            takeover: !0,
            modal: e.modal,
            mvargs: {
              title: e.title || "",
              body: e.body || "",
              buttons: e.buttons ? e.buttons.concat(n) : n,
            },
          },
        });
      },
    }),
      shz.ux.get("app:ready", {
        cb: function () {
          shz.appView.registerAction(".popup-btn", n),
            shz.app.get("app:path", {
              cb: function (o) {
                e && o.main && e.close();
              },
            });
        },
        listenOnce: 1,
      });
  }
  function n(n, t) {
    var s = (n && n.node) || document.body,
      a = e && e.btn;
    e && e.close(),
      ((!t && a != s) || s.dataset.shzAlwaysPopup) && (e = new o(s, n));
  }
})();
!(function () {
  shz.ux.get("app:ready", function () {
    shz.appView.registerAction(".shz-partial-showmoreless a.shz-text-btn", t);
  });
  var e = {
    count: {
      belowLimit: function (e, o) {
        return o >= e.children.length;
      },
      setState: function (e, o, t) {
        [].forEach.call(e.children, function (e, s) {
          o - 1 == s && e.classList[t ? "remove" : "add"]("last-visible"),
            o <= s && e.classList[t ? "remove" : "add"]("hide");
        });
      },
    },
    height: {
      belowLimit: function (e, o) {
        return e.offsetHeight < parseInt(o);
      },
      setState: function (e, o, t) {
        (e.style.height = t ? "auto" : o),
          (e.style.overflow = t ? "none" : "hidden");
      },
    },
    selector: {
      belowLimit: function (e, o) {
        return !1;
      },
      setState: function (e, o, t) {
        e.classList[t ? "remove" : "add"](o);
      },
    },
  };
  function o(o, t, s) {
    var r,
      l,
      a,
      n,
      c = o && o.querySelector(".shz-partial-showmoreless");
    c &&
      ((r = c.dataset.limitType),
      (l = c.dataset.value),
      (a =
        o &&
        (o.querySelector(".shz-ux-showmoreless") ||
          o.classList.contains("shz-ux-showmoreless"))) &&
        r &&
        (!s && e[r].belowLimit(a, l)
          ? c.classList.add("hide")
          : e[r].setState(a, l, t)),
      t && void 0 === o.dataset.shzScrollTo
        ? (o.dataset.shzScrollTo = document.querySelector(".root").scrollTop
            ? document.querySelector(".root").scrollTop
            : document.querySelector("body").scrollTop)
        : t ||
          void 0 === o.dataset.shzScrollTo ||
          ((n = document.querySelector(".root").scrollTop
            ? document.querySelector(".root")
            : document.querySelector("body")),
          shz.common.animScroll({
            el: n,
            top: !0,
            from: n.scrollTop,
            to: 1 * o.dataset.shzScrollTo,
          }),
          delete o.dataset.shzScrollTo),
      o.classList[t ? "add" : "remove"]("ux-expanded"),
      t && shz.ux.ImageLoader.load(o, { force: !0 }));
  }
  function t(e) {
    var t = e.node,
      s =
        shz.common.ancestor(t, ".shz-showmoreless-node").node ||
        shz.common.ancestor(t, ".shz-frame").node;
    o(s, !s.classList.contains("ux-expanded"));
  }
  shz.ux.showmoreless = {
    update: function (e, t, s) {
      return (
        e.classList.contains("ux-showmore") || e.classList.add("ux-showmore"),
        o(e, t || e.classList.contains("ux-expanded"), s)
      );
    },
  };
})();
function _toConsumableArray(r) {
  return (
    _arrayWithoutHoles(r) ||
    _iterableToArray(r) ||
    _unsupportedIterableToArray(r) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(r, t) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, t);
    var e = Object.prototype.toString.call(r).slice(8, -1);
    return (
      "Object" === e && r.constructor && (e = r.constructor.name),
      "Map" === e || "Set" === e
        ? Array.from(r)
        : "Arguments" === e ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
        ? _arrayLikeToArray(r, t)
        : void 0
    );
  }
}
function _iterableToArray(r) {
  if (
    ("undefined" != typeof Symbol && null != r[Symbol.iterator]) ||
    null != r["@@iterator"]
  )
    return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, t) {
  (null == t || t > r.length) && (t = r.length);
  for (var e = 0, a = new Array(t); e < t; e++) a[e] = r[e];
  return a;
}
!(function () {
  var r = new shz.ux.Importer({ filepath: "js/ux/playaudio.js" }),
    t = shz.ux;
  t.get("audio:play", {
    cb: function (e) {
      r().then(function () {
        var r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          a = r.err;
        !a && t.set("audio:play", e);
      });
    },
    listenOnce: !0,
  });
  var e = function t() {
    var e = arguments;
    shz.appView.unregisterAction(".audio-play", t),
      r().then(function () {
        var r,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          a = t.err;
        return !a && (r = shz.ux.audio).play.apply(r, _toConsumableArray(e));
      });
  };
  t.get("app:ready", function () {
    shz.appView.registerAction(".audio-play", { action: e, preventBeacon: !0 });
  }),
    (t.audio = {
      play: function () {
        var e = arguments;
        r().then(function () {
          var r,
            a =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = a.err;
          return !n && (r = t.audio).play.apply(r, _toConsumableArray(e));
        });
      },
      hostVideo: function () {
        var e = arguments;
        r().then(function () {
          var r,
            a =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = a.err;
          return !n && (r = t.audio).hostVideo.apply(r, _toConsumableArray(e));
        });
      },
    });
})();
function _toConsumableArray(r) {
  return (
    _arrayWithoutHoles(r) ||
    _iterableToArray(r) ||
    _unsupportedIterableToArray(r) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(r, t) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, t);
    var e = Object.prototype.toString.call(r).slice(8, -1);
    return (
      "Object" === e && r.constructor && (e = r.constructor.name),
      "Map" === e || "Set" === e
        ? Array.from(r)
        : "Arguments" === e ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
        ? _arrayLikeToArray(r, t)
        : void 0
    );
  }
}
function _iterableToArray(r) {
  if (
    ("undefined" != typeof Symbol && null != r[Symbol.iterator]) ||
    null != r["@@iterator"]
  )
    return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, t) {
  (null == t || t > r.length) && (t = r.length);
  for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
  return n;
}
!(function () {
  var r = new shz.ux.Importer({
      filepath: ["js/ux/musickit.js", "3rdparty/musickit/musickit-v1.js"],
    }),
    t = shz.ux,
    e = function t() {
      var e = arguments;
      shz.appView.unregisterAction(".audio-play-musickit", t),
        r().then(function () {
          var r,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.err;
          !n && (r = shz.ux.musickit).play.apply(r, _toConsumableArray(e));
        });
    };
  t.get("musickit:setupCodeChallenge", {
    cb: function () {
      r().then(function () {
        var r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = r.err;
        return !e && t.set("musickit:setupCodeChallenge", !0);
      });
    },
    listenOnce: !0,
  }),
    t.get("app:ready", function () {
      shz.appView.registerAction(".audio-play-musickit", {
        action: e,
        preventBeacon: !0,
      });
    }),
    (t.musickit = {
      play: function () {
        var e = arguments;
        r().then(function () {
          var r,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            a = n.err;
          return !a && (r = t.musickit).play.apply(r, _toConsumableArray(e));
        });
      },
      pause: function () {
        var e = arguments;
        r().then(function () {
          var r,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            a = n.err;
          return !a && (r = t.musickit).pause.apply(r, _toConsumableArray(e));
        });
      },
      hasMultipleTracks: function () {},
      next: function () {},
      previous: function () {},
    });
})();
!(function () {
  var e,
    t,
    i,
    s = 0;
  function a(e) {
    for (var t, i = e.parentElement; i; )
      (t = i),
        (i =
          i.parentElement &&
          shz.common.ancestor(i.parentElement, ".shz-frame").node);
    return t;
  }
  function n(i) {
    var n = i && i.index,
      l = i && i.playnode,
      u = i && i.seek,
      r = i && i.isVideoClick;
    if (
      (e ||
        ((e = getPlayNodes(document.querySelector("main"))),
        (s = 0),
        (t = l && a(l).dataset.shzFrame)),
      l)
    )
      o(void 0, l),
        shz.ux.audio.play({
          node: l,
          seek: u,
          sectionOverwrite: i.sectionOverwrite,
          isVideoClick: r,
        });
    else if ((n = isNaN(n) ? s : n) >= 0 && n < e.length) {
      var c = s < n ? "next" : "prev";
      (s = n), o(n);
      var d = e[s].dataset;
      d.href || d.shzAudioUrl || d.isVideo
        ? shz.ux.audio.play({
            node: e[s],
            seek: u,
            type: "playlistaction",
            sectionOverwrite: i.sectionOverwrite,
            isVideoClick: r,
          })
        : d.shzApplemusicplayId
        ? (shz.ux.audio.stop(), shz.ux.musickit.play({ node: e[s] }))
        : "next" === c
        ? shz.ux.fire("playlist:next", i)
        : shz.ux.fire("playlist:prev", i);
    }
  }
  function o(e, t) {
    var i,
      s = getPlayNodes(document.querySelector("main"));
    t && (e = Array.prototype.slice.call(s).indexOf(t)),
      (i = shz.ux.musickit.hasMultipleTracks(t)
        ? e
        : 0 === e
        ? "top"
        : e === s.length - 1
        ? "bottom"
        : e),
      shz.ux.set("playlist:currentposition", i);
  }
  (getPlayNodes = function (e) {
    return Array.from(e.querySelectorAll(".audio-play"));
  }),
    shz.appView.get("appview:pagecomplete", function () {
      var i = document.querySelector("main > .shz-frame");
      i.dataset.shzFrame == t &&
        ((e = getPlayNodes(i)) && e.length && shz.ux.audio.updateNode(e[s]),
        shz.ux.set("playlist:queueReadyState", s),
        console.log("app:update:main current track set ", s));
    }),
    shz.ux.get("audio:started", function (n) {
      var o, l;
      (i = n.node) &&
        !i.classList.contains("no-playerbar") &&
        ((e && i == e[s]) ||
          ((o = (l = a(i)) && l.dataset.shzFrame) &&
            t != o &&
            ((e = getPlayNodes(document.querySelector("main"))), (t = o)),
          [].some.call(e, function (e, t) {
            return (s = e == i && t), !isNaN(parseInt(s));
          })),
        shz.ux.set("playlist:queueReadyState", !isNaN(s)),
        console.log("audio:started", s));
    }),
    shz.ux.get("audio:ended", function (t) {
      i && !i.classList.contains("playlist-break")
        ? shz.ux.get("playlist:queueReadyState", {
            cb: function () {
              console.log("audio:end queue is valid. proceeding ...");
              var t = s;
              ++s == e.length && (s = 0),
                s != t && e[s] && shz.ux.set("audio:play", { node: e[s] }),
                (i = null);
            },
            listenOnce: 1,
          })
        : (i = null);
    }),
    shz.ux.get("playlist:play", function (e) {
      n(e);
    }),
    shz.ux.get("playlist:pause", function (e) {
      shz.ux.fire("audio:stop");
    }),
    shz.ux.get("playlist:prev", function (e) {
      shz.ux.musickit.previous() ||
        n({ index: s - 1, sectionOverwrite: e.sectionOverwrite });
    }),
    shz.ux.get("playlist:next", function (e) {
      shz.ux.musickit.next() ||
        n({ index: s + 1, sectionOverwrite: e.sectionOverwrite });
    }),
    (shz.ux.playlist = { play: n, handleTrackPosition: o });
})();
!(function () {
  var e,
    t,
    i,
    n,
    o =
      ((i = function () {
        var i = window,
          n = "inner";
        "innerWidth" in window ||
          ((n = "client"), (i = document.documentElement || document.body)),
          (e = i[n + "Width"]),
          (t = i[n + "Height"]);
      }),
      document.addEventListener("window:resize", i),
      function () {
        return (e && t) || i(), { width: e, height: t };
      });
  function h(e, t) {
    var i,
      n = o();
    switch (window.orientation) {
      case 90:
      case -90:
        i = n.height;
        break;
      case 0:
      case 180:
      default:
        i = n.width;
    }
    return i >= e && i < t;
  }
  function d() {
    return h(650, 800);
  }
  function s() {
    return shz.app.supports.isMobile && h(0, 650);
  }
  window.addEventListener("resize", function () {
    n ||
      ((n = !0),
      setTimeout(function () {
        var e = document.createEvent("HTMLEvents");
        e.initEvent("window:resize", 1, 1), document.dispatchEvent(e), (n = !1);
      }, 100));
  }),
    window.addEventListener("keydown", function e(t) {
      9 === t.keyCode &&
        (document.body.classList.add("is-tabbing"),
        window.removeEventListener("keydown", e));
    }),
    shz.common.namespace("ux.supports"),
    shz.common.merge(shz.ux.supports, {
      isDesktop: function () {
        return h(800, 1e4);
      },
      isDesktopWidth: function () {
        return o().width >= 800;
      },
      isTablet: d,
      isPhone: s,
      getScreenSize: function () {
        return (s() ? "phone" : d() && "tablet") || "desktop";
      },
      viewportDimensions: o,
      isNotched: function () {
        var e;
        if (shz.app.supports.ios) {
          var t = window.devicePixelRatio || 1,
            i = {
              width: window.screen.width * t,
              height: window.screen.height * t,
            };
          ((1125 == i.width && 2436 === i.height) ||
            (1242 == i.width && 2688 === i.height) ||
            (828 == i.width && 1792 === i.height)) &&
            (e = !0),
            ((1125 == i.height && 2436 === i.width) ||
              (1242 == i.height && 2688 === i.width) ||
              (828 == i.height && 1792 === i.width)) &&
              (e = !0),
            ((1668 == i.width && 2388 === i.height) ||
              (2048 == i.width && 2732 === i.height)) &&
              (e = !0),
            ((1668 == i.height && 2388 === i.width) ||
              (2048 == i.height && 2732 === i.width)) &&
              (e = !0);
        }
        return e;
      },
    });
})();
"undefined" != typeof window &&
  new (function () {
    var t;
    document.addEventListener("click", function (a) {
      var e = shz.common.ancestor(a.target, ".shz-partial-track").node;
      t && t.classList.remove("active"),
        e &&
          !a.target.classList.contains("popup") &&
          (e.classList.add("active"), (t = e));
    });
  })();
!(function () {
  shz.ux.VideoPlayer = function (t) {
    if (t) {
      var o,
        n,
        a,
        s = this,
        i = 1,
        u = t.node,
        r = (t.sources, t.offset),
        d =
          (t.width || u.offsetWidth,
          t.height || u.offsetHeight,
          (t.playerVars || {}).autoplay),
        l =
          (t.loop,
          void 0 !== t.playsInBackground
            ? t.playsInBackground
            : "desktop" == shz.app.supports.platform),
        p = t.events || {},
        c = {
          handleEvent: function (e, t) {
            c[e] && c[e].call(s, t), p[e] && p[e].call(s, t);
          },
          ready: function () {
            t.muted && o.mute(),
              d &&
                (!n && r >= 0
                  ? (console.log("video: play"), h())
                  : r < 0 &&
                    !n &&
                    !a &&
                    (console.log("video: delay play " + r),
                    (a = setTimeout(h, -1 * r))));
          },
          start: function () {
            t.muted && o.mute(), shz.ux.set("video:started");
          },
          playing: function (e) {
            n || shz.ux.set("video:started"),
              (n = !0),
              i && ((i = 0), c.handleEvent("start", e));
          },
          ended: function () {
            (n = !1), (i = 1), shz.ux.set("video:ended");
          },
          paused: function () {
            n = !1;
          },
        };
      (t.events = t.events || {}),
        shz.common.merge(t.events, { handleEvent: c.handleEvent }, !0),
        t.youtubeid
          ? (o = new shz.ux.YTPlayer(t))
          : t.sources && (o = new e(t)),
        shz.ux.get("ux:visibility", y),
        shz.ux.get("app:path", y),
        shz.ux.get("audio:started", f),
        shz.common.merge(s, {
          play: h,
          pause: f,
          seekTo: function (e) {
            o.seekTo && o.seekTo(e);
          },
          mute: function () {
            o && o.mute && o.mute();
          },
          unMute: function () {
            o && o.unMute && o.unMute();
          },
          destroy: function () {
            clearTimeout(a),
              (n = a = null),
              (i = 1),
              o && o.destroy(),
              (o = null),
              shz.ux.remove("ux:visibility", y),
              shz.ux.remove("app:path", y);
          },
          getDuration: function () {
            return o && o.getDuration && o.getDuration();
          },
          stopVideo: function () {
            return o && o.stopVideo && o.stopVideo();
          },
          loadVideoById: function (e) {
            o && o._loadVideoById && o._loadVideoById(e);
          },
        });
    }
    function h() {
      n || (console.log("playing"), o.play());
    }
    function f() {
      o && o.pause && o.pause();
    }
    function y(e) {
      e || !n || l || f();
    }
  };
  var e = function (e) {
    if (e && e.node) {
      var t = document.createElement("video"),
        o = e.node,
        n = e.sources,
        a = e.offset && e.offset > 0 ? "#t=" + e.offset / 1e3 : "",
        s = (e.width || o.offsetWidth) + "",
        i = (e.height || o.offsetHeight) + "",
        u = e.playerVars || {},
        r = e.events || {},
        d = { 0: 1, 1: 0, 2: 0, 3: 0, 4: 0 },
        l = {};
      u.autoplay && e.offset >= 0 && t.setAttribute("autoplay", ""),
        (e.controls || shz.app.supports.android) &&
          t.setAttribute("controls", "");
      try {
        t.setAttribute("preload", "auto");
      } catch (e) {}
      e.inline && t.setAttribute("webkit-playsinline", ""),
        e.poster && t.setAttribute("poster", e.poster);
      try {
        e.loop && t.setAttribute("loop", "");
      } catch (e) {}
      (t.style.width = -1 != s.indexOf("%") ? s : s + "px"),
        (t.style.height = -1 != i.indexOf("%") ? i : i + "px"),
        Array.isArray(n) || (n = [n]),
        n.forEach(function (e) {
          var o = document.createElement("source");
          e.src && o.setAttribute("src", e.src + a),
            e.type && o.setAttribute("type", e.type),
            t.appendChild(o);
        }),
        [
          "loadstart",
          "loadeddata",
          "loadedmetadata",
          "durationchange",
          "canplaythrough",
          "pause",
          "playing",
          "ended",
          "error",
          "timeupdate",
        ].forEach(function (e) {
          t.addEventListener(e, p);
        }),
        (t.className = o.className),
        o.parentNode.replaceChild(t, o),
        shz.ux.get("app:resize", function () {
          var e = t.parentNode;
          e &&
            ((t.style.width = e.offsetWidth + "px"),
            (t.style.height = e.offsetHeight + "px"));
        }),
        shz.ux.get("audio:started", c),
        shz.common.merge(this, {
          play: function () {
            t.play();
          },
          pause: c,
          mute: function () {
            t.setAttribute("muted", !0);
          },
          unmute: function () {
            t.removeAttribute("muted");
          },
          destroy: function () {
            t.parentNode && t.parentNode.removeChild(t);
          },
          getDuration: function () {
            return (t && t.getDuration && t.getDuration()) || 0;
          },
          stopVideo: function () {
            t && t.stop && t.stop();
          },
        });
    }
    function p(e) {
      var o = e.type;
      switch (
        (DEVMODE && VERBOSE && console.log(o), (l.timeStamp = e.timeStamp), o)
      ) {
        case "loadstart":
          r.handleEvent && r.handleEvent("init");
          break;
        case "loadedmetadata":
          r.handleEvent && r.handleEvent("ready", l);
          break;
        case "durationchange":
          l.duration = t.duration;
          break;
        case "timeupdate":
          var n = Math.floor((4 * t.currentTime) / t.duration);
          d[n] ||
            ((d[n] = 1),
            shz.stats.stat({
              beaconType: "userevent",
              type: "info",
              providerdesc: "video_progress_" + 25 * n,
            }));
          break;
        default:
          r.handleEvent && r.handleEvent(o, l);
      }
    }
    function c() {
      t.pause();
    }
  };
})();
!(function () {
  var e,
    n,
    o =
      ("undefined" != typeof document &&
        document.location &&
        "dev.shazam.com" == document.location.hostname) ||
      !1;
  (shz.ux.YTPlayer = function (t) {
    var a,
      l,
      i,
      r,
      d = (t = t || {}).suppressStats ? null : {},
      s = t.youtubeid,
      u = t.playerVars && t.playerVars.autoplay,
      c = t.events || {},
      y = t.node,
      p = y && y.parentNode;
    function f() {
      var e,
        n = {
          width: t.width,
          height: t.height,
          videoId: s,
          playerVars: {
            start: Math.max(e || 0, 0),
            autoplay: u || !1,
            controls: t.playerVars.controls || 0,
            html5: 1,
            modestbranding: 1,
            showinfo: 0,
            preload: 1,
            rel: 0,
            origin: shz.common.origin(),
          },
          events: {
            onReady: v,
            onStateChange: E,
            onError: function (e) {
              c.handleEvent && c.handleEvent("error", e);
            },
          },
        };
      o && console.log("#### YT: creating player"),
        a ||
          (o && console.log("offset initially: " + t.offset),
          t.playerVars.playsinline && (n.playerVars.playsinline = 1),
          (e = (t && t.offset) || 0),
          (a = new YT.Player(y, n)));
    }
    function h(e) {
      var n = !0;
      o && console.log("#### YT: playVideo"),
        e && s != e && ((s = e), (n = !1)),
        l
          ? n
            ? (o && console.log("#### YT: video_id exists, let's play! " + r),
              !r && a.playVideo(),
              (r = 1))
            : (o &&
                console.log("#### YT: video_id does not exist, trying to load"),
              a.loadVideoById(s))
          : (o && console.log("#### YT: not ready, trying to create"),
            (u = !0),
            f());
    }
    function v(e) {
      o && console.log("#### YT: onPlayerReady"),
        (l = !0),
        c.handleEvent && c.handleEvent("ready"),
        u && ((u = !1), h());
    }
    function g() {
      var e,
        n = a.getDuration(),
        o = a.getCurrentTime();
      o &&
        n &&
        ((e = (o / n) * 100) >= 75
          ? T(75)
          : e >= 50
          ? T(50)
          : e >= 25 && T(25));
    }
    function m(e) {
      (e = e || { play: 1, pause: 0 }).play
        ? (i = setInterval(g, 15e3))
        : e.pause && i && (clearInterval(i), (i = null), g());
    }
    function E(e) {
      var n = e.data;
      switch ((o && console.log("#### YT onPlayerStateChange " + n), n)) {
        case 0:
          (r = 0),
            c.handleEvent && c.handleEvent("ended"),
            d &&
              (m({ pause: 1 }),
              [25, 50, 75, 100].forEach(function (e) {
                T(e);
              }),
              (d[s] = null));
          break;
        case 1:
          c.handleEvent && c.handleEvent("playing"), m({ play: 1 });
          break;
        case 2:
          (r = 0), c.handleEvent && c.handleEvent("paused"), m({ pause: 1 });
          break;
        case 3:
          c.handleEvent && c.handleEvent("buffering"), m({ pause: 1 });
      }
    }
    function T(e) {
      d &&
        (d[s] || (d[s] = { 25: 0, 50: 0, 75: 0, 100: 0 }),
        d[s][e] ||
          (shz.stats.nodeStat({
            node: p,
            beaconData: {
              type: "video",
              providerdesc: "view_" + e,
              videoid: s,
            },
            firstCall: !0,
          }),
          (d[s][e] = 1)));
    }
    return (
      n
        ? f()
        : (shz.ux.get("youtube:ready", {
            cb: function () {
              f();
            },
            listenOnce: !0,
          }),
          e ||
            ((e = 1),
            (function () {
              o && console.log("#### YT: initializing");
              var e = document.createElement("script"),
                n = document.getElementsByTagName("script")[0];
              (e.src = "https://www.youtube.com/iframe_api"),
                n.parentNode.insertBefore(e, n),
                c.handleEvent && c.handleEvent("init");
            })())),
      {
        play: h,
        pause: function () {
          a && a.pauseVideo && a.pauseVideo();
        },
        seekTo: function (e) {
          a && a.seekTo && a.seekTo(e);
        },
        mute: function () {
          a && a.mute && a.mute();
        },
        unMute: function () {
          a && a.unMute && a.unMute();
        },
        destroy: function () {
          clearInterval(i),
            (i = null),
            a && a.destroy && a.destroy(),
            (a = null);
        },
        getDuration: function () {
          return a && a.getDuration && a.getDuration();
        },
        stopVideo: function () {
          a && a.stopVideo && a.stopVideo();
        },
        loadVideoById: function (e) {
          a && a.loadVideoById && (a.loadVideoById(e), (s = e));
        },
      }
    );
  }),
    (window.onYouTubeIframeAPIReady = function () {
      o && console.log("#### YT: onYouTubeIframeAPIReady"),
        (e = 0),
        (n = 1),
        shz.ux.set("youtube:ready");
    });
})();
shz.ux.icloud = new (function () {
  var e,
    t,
    o,
    n,
    a,
    c = [],
    i = shz.storage.local.get("icloud.token"),
    s = !0,
    r =
      "https://api.apple-cloudkit.com/database/1/com.apple.shazam/production/public/users/current?ckAPIToken=4984bd7492e2813b6b227b815a262f1a632601eec4c8c6e8f6bc4cf86c2e22fd",
    u = {
      loggedin: !0,
      method: "icloud",
      authenticationType: "ICLOUD",
      storage: "ICLOUD",
      hasLibraryZone: !1,
    },
    l = 0,
    d = 0;
  function h() {
    var o =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : function () {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    n && a
      ? o()
      : ((a = !0),
        shz.common
          .getJSON({
            url: r + "&ckWebAuthToken=" + (n ? 1 : i),
            headers: { "Content-Type": "application/json" },
          })
          .then(
            function (t, n) {
              (a = !1),
                p(function () {
                  (e = !0), o(u);
                });
            },
            function (c, i) {
              try {
                var s = JSON.parse(i.error.args.response);
                (t = s.redirectURL),
                  (a = !1),
                  n || (e = !1),
                  o({ loggedin: e });
              } catch (e) {}
            }
          ));
  }
  function p(e) {
    try {
      shz.common
        .getJSON({
          url:
            "https://api.apple-cloudkit.com/database/1/com.apple.shazam/Production/private/zones/list?ckAPIToken=4984bd7492e2813b6b227b815a262f1a632601eec4c8c6e8f6bc4cf86c2e22fd&ckWebAuthToken=" +
            i,
          method: "GET",
          timeout: 45e3,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then(function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            o = t.zones || [];
          o.forEach(function (e) {
            if (e.zoneID && "shazam-library" == e.zoneID.zoneName)
              return (n = !0), (u.hasLibraryZone = !0), !0;
          }),
            e && e({ success: !0 });
        });
    } catch (t) {
      e && e({ success: !1 });
    }
  }
  return {
    init: h,
    logout: function (t) {
      "ICLOUD" == shz.ux.auth.authenticationType &&
        (shz.storage.local.remove("icloud"),
        (i = null),
        shz.storage.local.remove("eat"),
        (s = !0),
        (n = !1),
        (c = []),
        (e = !1),
        (o = null)),
        t && t({ success: !0 });
    },
    login: function (e) {
      var o = window.open(
        t,
        "login",
        "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=500,left=100,top=100"
      );
      function n() {
        var e;
        !i && (e = shz.storage.local.get("icloud.token")) && c(e);
      }
      function a(e) {
        e.data.ckWebAuthToken && c(e.data.ckWebAuthToken);
      }
      function c(t) {
        window.removeEventListener("storage", n),
          window.removeEventListener("message", a),
          (i = t),
          shz.storage.local.set("icloud", { token: i }),
          (shz.ux.auth.token = i),
          shz.storage.local.set("eat", i),
          p(function () {
            e.cb(u);
          });
      }
      (o && !o.closed && void 0 !== o.closed) || alert("popup blocked"),
        window.addEventListener("storage", n),
        window.addEventListener("message", a);
    },
    isLoggedIn: function (t) {
      t({ loggedin: e });
    },
    getTags: function (e, t) {
      function a() {
        var o = c.slice(e.start, e.start + e.count);
        t(o);
      }
      s && e.start + e.count > c.length
        ? (function e(t, a) {
            try {
              if (!n) return void (a && a());
              var r = {
                resultsLimit: 250,
                zoneID: {
                  zoneName: "shazam-library",
                  zoneType: "REGULAR_CUSTOM_ZONE",
                },
                numbersAsStrings: !0,
                zoneWide: !1,
                query: {
                  recordType: "Track",
                  filterBy: [],
                  sortBy: [{ ascending: !1, fieldName: "Date" }],
                },
                continuationMarker: o,
              };
              shz.common
                .getJSON({
                  url:
                    "https://api.apple-cloudkit.com/database/1/com.apple.shazam/production/private/records/query?ckAPIToken=4984bd7492e2813b6b227b815a262f1a632601eec4c8c6e8f6bc4cf86c2e22fd&ckWebAuthToken=" +
                    i,
                  method: "POST",
                  timeout: 45e3,
                  params: r,
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                })
                .then(function (n, i) {
                  n
                    ? ((o = n.continuationMarker),
                      (s = o),
                      n.records.forEach(function (e) {
                        c.push({
                          trackKey: e.fields.ShazamKey.value,
                          tagTime: e.fields.Date.value,
                        });
                      }))
                    : (s = !1),
                    !s || t.start + t.count <= c.length ? a && a() : e(t, a);
                });
            } catch (e) {
              a();
            }
          })(e, a)
        : a();
    },
    attach: function () {
      d ||
        ((l = 0),
        (d = setTimeout(function e() {
          ++l < 20 && (h(null, !0), (d = setTimeout(e, 3e4)));
        }, 3e4)));
    },
    detach: function () {
      clearTimeout(d), (d = 0);
    },
  };
})();
shz.ux.firebase = new (function () {
  if (!shz.app.supports.inApp) {
    var e,
      t,
      a,
      n = [],
      s = [],
      o = {},
      i = [],
      c = {
        loggedin: !0,
        method: "google",
        authenticationType: "FIREBASE",
        storage: "FIREBASE",
      };
    return {
      init: function n() {
        var r,
          u =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : function () {};
        a
          ? e
            ? u({ loggedin: !!firebase.auth().currentUser })
            : ((e = !0),
              (c.method = shz.storage.local.get("ec") ? "email" : "google"),
              (o = { cb: u, name: "init" }),
              (r = shz.app.featureflags.isEnabled("firebase.testlogin")
                ? {
                    apiKey: "AIzaSyA76coqiWerWvGnzLD9L04WlPz18vPyR5s",
                    authDomain: "signin-test.shazam.com",
                    databaseURL: "https://auth-test-180410.firebaseio.com",
                    projectId: "auth-test-180410",
                    storageBucket: "auth-test-180410.appspot.com",
                    messagingSenderId: "1022983536663",
                    appId: "1:1022983536663:web:d476e2a4c4a6927bdc5c52",
                    measurementId: "G-9YVYLH2ZLN",
                  }
                : {
                    apiKey: "AIzaSyCyLYwyWBmSKLkMPPbBMkE7CPejfOKhsiU",
                    authDomain: "signin.shazam.com",
                    databaseURL:
                      "https://api-project-1020531999467.firebaseio.com",
                    projectId: "api-project-1020531999467",
                    storageBucket: "api-project-1020531999467.appspot.com",
                    messagingSenderId: "1020531999467",
                    appId: "1:1020531999467:web:f28d6396964efac09274ae",
                  }),
              firebase.initializeApp(r),
              firebase.auth().onAuthStateChanged(function (e) {
                var t = o,
                  a = t.name,
                  n = t.cb,
                  i = void 0 === n ? function () {} : n;
                console.log("fbauthStateChanged", a, e),
                  (o = {}),
                  e
                    ? e
                        .getIdToken(!0)
                        .then(function (e) {
                          (shz.ux.auth.token = e),
                            shz.storage.local.set("eat", e),
                            "email" == a && shz.storage.local.set("ec", 1),
                            i(c);
                        })
                        .catch(function (e) {
                          i({ failure: e });
                        })
                    : (delete shz.ux.auth.token,
                      shz.storage.local.remove("eat"),
                      shz.storage.local.remove("ec"),
                      (s = []),
                      i({ success: !0 }));
              }),
              (t = new firebase.auth.GoogleAuthProvider()),
              i.forEach(function (e) {
                e();
              }),
              (i = []))
          : shz.script.loadjs("3rdparty/firebase/firebase-all.js", {
              success: function () {
                (a = !0), !e && n(u);
              },
              failure: function (e) {
                u({ failure: e || !0 });
              },
            });
      },
      logout: function (e) {
        var t = firebase.auth().currentUser;
        "FIREBASE" == shz.ux.auth.authenticationType
          ? firebase
              .auth()
              .signOut()
              .then(
                function () {
                  t ? (o = { cb: e, name: "logout" }) : e({ success: !0 });
                },
                function (t) {
                  e && e({ success: !1 });
                }
              )
          : e && e({ success: !1 });
      },
      login: function (e) {
        a
          ? "google" == e.type
            ? (function (e) {
                var a = firebase.auth().currentUser;
                firebase
                  .auth()
                  .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                  .then(function () {
                    firebase
                      .auth()
                      .signInWithPopup(t)
                      .then(function (t) {
                        (c.method = "google"),
                          a ? e.cb(c) : (o = { cb: e.cb, name: "google" });
                      })
                      .catch(function (t) {
                        console.log("_loginGoogle error", t),
                          e.cb({ success: !1 });
                      });
                  });
              })(e)
            : "email" == e.type &&
              (function (e) {
                var t = firebase.auth().currentUser;
                firebase
                  .auth()
                  .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                  .then(function () {
                    firebase
                      .auth()
                      .signInWithCustomToken(e.customtoken)
                      .then(function () {
                        (c.method = "email"),
                          t ? e.cb(c) : (o = { cb: e.cb, name: "email" });
                      })
                      .catch(function (t) {
                        console.log("_loginEmail error", t),
                          e.cb({ success: !1 });
                      });
                  });
              })(e)
          : i.push(this.login.bind(this, e));
      },
      isLoggedIn: function (e) {
        a
          ? e({ loggedin: !!firebase.auth().currentUser })
          : i.push(this.isLoggedIn.bind(this, e));
      },
      getTags: function (e, t) {
        function o() {
          var a = s.slice(e.start, e.start + e.count);
          t(a);
        }
        a
          ? s.length
            ? o()
            : (function (e) {
                try {
                  var t = firebase.auth().currentUser.uid,
                    a = firebase
                      .firestore()
                      .collection("users")
                      .doc(t)
                      .collection("tags")
                      .orderBy("tagTime", "desc");
                  if ((n.push(e), n.length > 1)) return;
                  var o = a.onSnapshot(function (e) {
                    e.docChanges().forEach(function (e) {
                      var t = e.doc.data();
                      s.push({
                        trackKey: t.trackKey,
                        location: t.location,
                        tagTime: t.tagTime ? 1e3 * t.tagTime.seconds : null,
                      });
                    }),
                      n.forEach(function (e) {
                        return e();
                      }),
                      (n = []),
                      o();
                  });
                } catch (e) {
                  n = [];
                }
              })(o)
          : i.push(this.getTags.bind(this, e, t));
      },
      attach: function () {},
      detach: function () {},
    };
  }
})();
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
  for (var s = 0; s < t.length; s++) {
    var a = t[s];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a);
  }
}
function _createClass(e, t, s) {
  return (
    t && _defineProperties(e.prototype, t), s && _defineProperties(e, s), e
  );
}
function _defineProperty(e, t, s) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: s,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = s),
    e
  );
}
var AuthEmail = (function () {
  function e(t) {
    _classCallCheck(this, e), _defineProperty(this, "MAX_LOGIN_ATTEMPTS", 3);
    var s =
      t.supports.ios || t.supports.ipad || t.supports.android ? "_mobile" : "";
    (this.app = t),
      (this.requestUrl = shz.common.supplant(
        t.config.services.amp.user.login.email.url,
        t
      )),
      (this.responseUrl = "https://www.shazam.com/validate-email/web".concat(
        s,
        "?key={key}&customtoken={customtoken}"
      ));
  }
  return (
    _createClass(e, [
      {
        key: "requestValidation",
        value: function (e, t) {
          var s = this,
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            n = e.email,
            o = e.config,
            i = {
              url: this.requestUrl,
              method: "POST",
              noParse: !0,
              headers: { "Content-Type": "application/json" },
              params: {
                email: n,
                callback:
                  this.responseUrl +
                  (o.redirect ? "&redirect=" + o.redirect : "") +
                  (o.temp ? "&temp=1" : ""),
                locale: this.app.language,
                userAgent: this.app.supports.useragent,
                inid: shz.common.guid(),
              },
            };
          shz.common.getJSON(i).then(
            function () {
              shz.stats.stat({
                beaconType: "userevent",
                type: "info",
                providerdesc: "accountlogin",
                providername: "email",
                action: "emailsentsuccess",
              }),
                t && t({ success: !0 });
            },
            function (n, o) {
              var i = o.xhr.status;
              404 == i
                ? t && t({ success: !1, status: i })
                : ++a > s.MAX_LOGIN_ATTEMPTS
                ? (shz.stats.stat({
                    beaconType: "error",
                    action: "emailsentfailure",
                  }),
                  t && t({ success: !1, status: i }))
                : s.requestValidation(e, t, a);
            }
          );
        },
      },
      {
        key: "login",
        value: function (e, t) {
          var s = e.config,
            a = void 0 === s ? {} : s;
          a.customtoken
            ? shz.ux.firebase.login({
                type: "email",
                cb: function (e) {
                  e.loggedin ||
                    shz.stats.stat({
                      beaconType: "error",
                      action: "emailvalidation",
                      code: "loginfailed",
                    }),
                    t(e);
                },
                customtoken: a.customtoken,
              })
            : (console.log("email login - missing params"),
              shz.stats.stat({
                beaconType: "error",
                action: "emailvalidation",
                code: "nocustomtoken",
              }),
              t({ success: !1 }));
        },
      },
    ]),
    e
  );
})();
function _extends() {
  return (_extends =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];
        for (var n in i)
          Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
      }
      return e;
    }).apply(this, arguments);
}
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
  for (var i = 0; i < t.length; i++) {
    var n = t[i];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass(e, t, i) {
  return (
    t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e
  );
}
function _defineProperty(e, t, i) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = i),
    e
  );
}
var Auth = (function () {
  function e(t) {
    _classCallCheck(this, e),
      _defineProperty(this, "_initState", void 0),
      _defineProperty(this, "_services", ["icloud", "firebase"]),
      (this.app = t);
  }
  return (
    _createClass(e, [
      {
        key: "init",
        value: function () {
          var e = this;
          if (!this._initState) {
            this._initState = "initializing";
            var t = this;
            (this.authEmail = new AuthEmail(this.app)),
              Promise.all(
                this._services.map(function (e) {
                  return new Promise(function (t, i) {
                    shz.ux[e]
                      ? shz.ux[e].init(function (e) {
                          t(e);
                        })
                      : t();
                  });
                })
              )
                .then(function (i) {
                  console.log("login:initialized ".concat(JSON.stringify(i)));
                  var n = i.filter(function (e) {
                    return e && e.loggedin;
                  })[0];
                  t._setLoginState(n),
                    (e._initState = "initialized"),
                    shz.ux.set("auth:initialized", !0);
                })
                .catch(function (e) {
                  console.log("login:initialization failed ".concat(e)),
                    t._setLoginState(),
                    shz.ux.set("auth:initialized", !1);
                });
          }
        },
      },
      {
        key: "login",
        value: function (e, t) {
          var i = this;
          this.init(),
            shz.ux.get("auth:initialized", {
              cb: function (n) {
                if (n) {
                  var a = e.type,
                    o = e.config;
                  shz.ux.set("auth:request", e);
                  var s = function (e) {
                    i._setLoginState(e), t && t({ success: e.loggedin });
                  }.bind(i);
                  i._trimHeaders(),
                    i._prepareLogin(o.reauth, function (n) {
                      "email" == a
                        ? i.authEmail.requestValidation(e, t)
                        : "email_validated" == a
                        ? i.authEmail.login(e, s)
                        : "google" == a
                        ? shz.ux.firebase.login({ cb: s, type: a })
                        : "icloud" == a &&
                          shz.ux.icloud.login({ cb: s, type: a });
                    });
                } else t && t({ success: n });
              },
              listenOnce: !0,
            });
        },
      },
      {
        key: "logout",
        value: function () {
          var e = this;
          this._clear(function () {
            e._setLoginState(!1);
          });
        },
      },
      {
        key: "attach",
        value: function () {
          var e = this;
          this.init(),
            shz.ux.get("auth:initialized", {
              cb: function (t) {
                t
                  ? e._services.forEach(function (e) {
                      return shz.ux[e].attach();
                    })
                  : console.log("initialization failed - cant attach");
              },
              listenOnce: !0,
            });
        },
      },
      {
        key: "detach",
        value: function () {
          this._services.forEach(function (e) {
            return shz.ux[e].detach();
          });
        },
      },
      {
        key: "_setLoginState",
        value: function () {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            i = t.storage,
            n = void 0 === i ? "" : i,
            a = t.authenticationType,
            o = void 0 === a ? "" : a,
            s = t.method,
            r = void 0 === s ? "" : s,
            u = t.loggedin,
            c = t.hasLibraryZone,
            l = void 0 === c ? "" : c;
          console.log("setLoginState", t),
            u
              ? (this.app.storage.local.set("loggedin", !0),
                (e = shz.ux.find("auth:request")) &&
                  shz.ux.set("auth:response", {
                    request: e,
                    profile: { name: "My Library" },
                  }))
              : this.app.storage.local.remove("loggedin"),
            _extends(this, {
              storage: n,
              authenticationType: o,
              method: r,
              hasLibraryZone: l,
            }),
            shz.ux.set("auth:loginState", u);
        },
      },
      {
        key: "_prepareLogin",
        value: function (e, t) {
          e ? this._clear(t) : t({ success: !0 });
        },
      },
      {
        key: "_clear",
        value: function (e) {
          "FIREBASE" == this.authenticationType
            ? shz.ux.firebase.logout(e)
            : "ICLOUD" == this.authenticationType
            ? shz.ux.icloud.logout(e)
            : e({ success: !0 });
        },
      },
      {
        key: "_trimHeaders",
        value: function () {
          this.app.cookies.remove("amupaee");
        },
      },
    ]),
    e
  );
})();
shz.ux.get("app:ready", function (e) {
  shz.ux.auth = new Auth(e);
});
!(function () {
  function i() {
    var i = ["webkit", "moz", "ms", "o"];
    if ("hidden" in document) return "hidden";
    for (var n = 0; n < i.length; n++)
      if (i[n] + "Hidden" in document) return i[n] + "Hidden";
    return null;
  }
  var n,
    e = i();
  if (e) {
    var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
    document.addEventListener(t, d);
  }
  function d() {
    var e,
      t = !((e = i()) && document[e]),
      d = !t;
    n != t && ((n = t), shz.ux.set("ux:visibility", n, null, null, d));
  }
  d(),
    shz.bridge.on("applicationBackgrounded", function () {
      n && ((n = !1), shz.ux.set("ux:visibility", n));
    }),
    shz.bridge.on("viewAppeared", function () {
      n || ((n = !0), shz.ux.set("ux:visibility", n));
    }),
    (window.onpageshow = function (i) {
      i.persisted && d(document);
    }),
    (window.onpagehide = function (i) {
      d();
    });
})();
!(function () {
  for (
    var n = 0, i = ["ms", "moz", "webkit", "o"], e = 0;
    e < i.length && !window.requestAnimationFrame;
    ++e
  )
    (window.requestAnimationFrame = window[i[e] + "RequestAnimationFrame"]),
      (window.cancelAnimationFrame =
        window[i[e] + "CancelAnimationFrame"] ||
        window[i[e] + "CancelRequestAnimationFrame"]);
  window.requestAnimationFrame ||
    (window.requestAnimationFrame = function (i, e) {
      var a = new Date().getTime(),
        o = Math.max(0, 16 - (a - n)),
        t = window.setTimeout(function () {
          i(a + o);
        }, o);
      return (n = a + o), t;
    }),
    window.cancelAnimationFrame ||
      (window.cancelAnimationFrame = function (n) {
        clearTimeout(n);
      });
})();
!(function () {
  function e(e) {
    var t = e.node,
      n = (t && (t.href || t.dataset.href)) || e.url,
      i = (t && t.dataset.title) || e.title;
    n && i
      ? shz.bridge.request({
          type: "newWebView",
          data: { url: n, pageTitle: i },
        })
      : (!i && console.log("openWebView: no title"),
        !n && console.log("openWebView: no url"));
  }
  shz.common.merge(shz.ux, { newWebView: e }),
    shz.ux.get("app:ready", {
      cb: function () {
        shz.appView.registerAction(".new-web-view", e);
      },
      listenOnce: 1,
    });
})();
!(function () {
  function t(t) {
    var e = t.node,
      a = e.dataset.trackid || t.trackid;
    a &&
      shz.bridge.request({ type: "trackResult", data: { id: a } }, null, {
        path: e.dataset.trackPath || e.pathname,
      });
  }
  shz.common.merge(shz.ux, { openTrackResult: t }),
    shz.ux.get("app:ready", {
      cb: function () {
        shz.appView.registerAction(".open-track-result", t);
      },
      listenOnce: 1,
    });
})();
!(function () {
  var e,
    t,
    n,
    a,
    s,
    i = this,
    o = "trial";
  function p(e) {
    if (0 == e.indexOf("http"))
      return shz.ux.newWebView({ url: e, title: "Link" }), !0;
  }
  function c(e, t, n, a) {
    var i,
      o = shz.common.getLocationParts(e),
      p = shz.common.urlParams(e),
      r = p.referrer;
    return (
      (n = n || shz.common.guid()),
      o.host.match("play.google.com") &&
        r &&
        (2 == (r = r.split("=")).length &&
          (r[1] = encodeURIComponent(c(decodeURIComponent(r[1]), t, n))),
        (p.referrer = r.join("=")),
        (e = shz.common.setQueryParams(e, p))),
      (o.host.match("itunes.apple.com") || o.host.match("music.apple.com")) &&
        ((i = t && t.dataset.shzClientbeaconuuid),
        (e = shz.ux.deeplink_am.getUrlParts(e, i, n, null, a).urls[0].uri)),
      (function (e, t, n) {
        if (s) return e;
        var a,
          i =
            "undefined" != typeof document
              ? document.location.pathname
              : n && n.location.pathname,
          o =
            (t &&
              (t.classList.contains("apple") ||
                t.classList.contains("apple-listen"))) ||
            e.match(/&app=music/i)
              ? "AM"
              : "iTunes";
        return (
          ((shz.app || n).config.linkReplacements || []).some(function (t) {
            if (i.match(t.path)) {
              if (e.match(t.urlMatch)) {
                for (a in t.pathReplacementParams)
                  (n = e),
                    (s = a),
                    (p = t.pathReplacementParams[a]),
                    void 0,
                    (c = new RegExp("([&?]){1}(" + s + "=)[^&]+", "g")),
                    (e = n.replace(c, "$1$2" + p));
                o && (e = shz.common.supplant(e, { store: o }));
              }
              return !0;
            }
            var n, s, p, c;
          }),
          e
        );
      })(e, t, a)
    );
  }
  function r(e, t, n, a) {
    var s = n || shz.common.guid();
    return (
      e.forEach(function (n, i) {
        e[i] = c(n, t, s, a);
      }),
      e
    );
  }
  var u = function (e) {
    e.data.deeplinkURL &&
      (shz.ux.setDeeplinkAMUpsell({
        type: "redemption",
        path: e.data.deeplinkURL,
      }),
      shz.ux.deeplink(
        { actions: [{ uri: e.data.deeplinkURL }], notracking: !0 },
        i.node
      ));
  };
  shz.common.merge(shz.ux, {
    fixupItunes: r,
    setDeeplinkAMUpsell: function (e) {
      (o = e.type || "trial"),
        (n = e.path),
        "redemption" != o || n || (o = "trial"),
        (a = e.newWebView);
    },
    suppressLinkReplacements: function (e) {
      s = e;
    },
    deeplink: function (s, i) {
      var c = s.actions || [],
        u = [],
        m = (i && i.dataset && i.dataset.upsellType) || o,
        h = shz.app.user;
      (c = Array.isArray(c) ? c : [{ uri: c }]).forEach(function (e) {
        e.uri && u.push(e.uri);
      });
      try {
        h &&
          h.showUpsell &&
          u.forEach(function (e, t) {
            if (
              (e.match("itunes.apple.com") || e.match("music.apple.com")) &&
              !e.match("app=itunes")
            )
              switch (m) {
                case "redemption":
                  u[t] = n;
                  break;
                case "trial":
                  u[t] = "https://itunes.apple.com/subscribe";
              }
          });
      } catch (e) {}
      s.notracking || r(u, i, s.clientbeaconuuid),
        e
          ? a
            ? u.some(function (e) {
                return p(e);
              })
            : shz.bridge.request({ type: "startIntents", data: { intents: u } })
          : t
          ? (function e(t, n) {
              void 0 === n && (n = 0);
              var a = t[n];
              shz.bridge.request(
                { type: "isSchemeSupported", data: { scheme: a } },
                function (s) {
                  var i;
                  s.data && "supported" == s.data.supported
                    ? (a.match(/^https:\/\/(\w*\.)?itunes\.apple\.com/i) ||
                        a.match(/^https:\/\/(\w*\.)?music\.apple\.com/i) ||
                        !p(a)) &&
                      ((a.match(
                        /^https:\/\/(\w*\.)?geo\.itunes\.apple\.com/i
                      ) ||
                        a.match(/^https:\/\/(\w*\.)?music\.apple\.com/i)) &&
                        (a = shz.common.shazamURL(a, !0)),
                      console.log("########", a),
                      setTimeout(function () {
                        shz.common.navigate(a);
                      }, 500))
                    : t[(i = n + 1)] && e(t, i);
                }
              );
            })(u)
          : u.some(p);
    },
    linkTracking: c,
  }),
    shz.ux.get("app:ready", {
      cb: function () {
        (e = shz.app.supports.android),
          (t = shz.app.supports.ios || shz.app.supports.ipad),
          window.addEventListener("message", u);
      },
      listenOnce: 1,
    });
})();
function ownKeys(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function _objectSpread(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? ownKeys(Object(t), !0).forEach(function (e) {
          _defineProperty(r, e, t[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
        });
  }
  return r;
}
function _defineProperty(r, e, t) {
  return (
    e in r
      ? Object.defineProperty(r, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[e] = t),
    r
  );
}
function _slicedToArray(r, e) {
  return (
    _arrayWithHoles(r) ||
    _iterableToArrayLimit(r, e) ||
    _unsupportedIterableToArray(r, e) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(r, e) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    return (
      "Object" === t && r.constructor && (t = r.constructor.name),
      "Map" === t || "Set" === t
        ? Array.from(r)
        : "Arguments" === t ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? _arrayLikeToArray(r, e)
        : void 0
    );
  }
}
function _arrayLikeToArray(r, e) {
  (null == e || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
  return n;
}
function _iterableToArrayLimit(r, e) {
  var t =
    r &&
    (("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"]);
  if (null != t) {
    var n,
      a,
      o = [],
      i = !0,
      c = !1;
    try {
      for (
        t = t.call(r);
        !(i = (n = t.next()).done) && (o.push(n.value), !e || o.length !== e);
        i = !0
      );
    } catch (r) {
      (c = !0), (a = r);
    } finally {
      try {
        i || null == t.return || t.return();
      } finally {
        if (c) throw a;
      }
    }
    return o;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
shz.common.merge(shz.ux, {
  deeplink_am_to_campaign: {
    start: function (r) {
      var e = r.node,
        t = shz.app.featureflags.getFlag(
          "applemusic.signUpRedirectTo.campaign"
        ),
        n = t.enabled,
        a = t.data;
      if (!n) return !1;
      if (e && e.dataset && "true" == e.dataset.shzDisableToCampaign) return !1;
      var o = a.campaignURL,
        i =
          (function (r) {
            return (function (r, e) {
              var t =
                r && r.dataset && r.dataset.shzDynamicBeacon
                  ? r.dataset.shzDynamicBeacon
                  : null;
              return t
                ? t.split(",").reduce(function (r, e, t) {
                    var n = _slicedToArray(e.split("="), 2),
                      a = n[0],
                      o = n[1];
                    return "trackkey" === a && (r = o), r;
                  }, null)
                : null;
            })(r);
          })(e) ||
          e.dataset.shzTrackid ||
          e.dataset.shzTrackId;
      i && (o += "/track/".concat(i));
      var c = shz.common.setQueryParams(
        o,
        _objectSpread(
          {},
          shz.app.countryQuery ? { co: shz.app.countryQuery } : null
        )
      );
      return shz.app.navigate({ href: c, pushHistory: !0 }), !0;
    },
  },
});
function _slicedToArray(e, n) {
  return (
    _arrayWithHoles(e) ||
    _iterableToArrayLimit(e, n) ||
    _unsupportedIterableToArray(e, n) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(e, n) {
  if (e) {
    if ("string" == typeof e) return _arrayLikeToArray(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    return (
      "Object" === t && e.constructor && (t = e.constructor.name),
      "Map" === t || "Set" === t
        ? Array.from(e)
        : "Arguments" === t ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? _arrayLikeToArray(e, n)
        : void 0
    );
  }
}
function _arrayLikeToArray(e, n) {
  (null == n || n > e.length) && (n = e.length);
  for (var t = 0, i = new Array(n); t < n; t++) i[t] = e[t];
  return i;
}
function _iterableToArrayLimit(e, n) {
  var t =
    e &&
    (("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"]);
  if (null != t) {
    var i,
      o,
      a = [],
      c = !0,
      r = !1;
    try {
      for (
        t = t.call(e);
        !(c = (i = t.next()).done) && (a.push(i.value), !n || a.length !== n);
        c = !0
      );
    } catch (e) {
      (r = !0), (o = e);
    } finally {
      try {
        c || null == t.return || t.return();
      } finally {
        if (r) throw o;
      }
    }
    return a;
  }
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
function _extends() {
  return (_extends =
    Object.assign ||
    function (e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      }
      return e;
    }).apply(this, arguments);
}
!(function () {
  var e = "5348615A-616D-3235-3830-44754D6D5973",
    n = {};
  function t() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      o = arguments.length > 1 ? arguments[1] : void 0,
      a = arguments.length > 2 ? arguments[2] : void 0,
      c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
      r = arguments.length > 4 ? arguments[4] : void 0;
    a = a || shz.common.guid();
    var s = shz && shz.app && shz.app.supports;
    "string" == typeof t && (t = [t]);
    try {
      t = t
        .map(function (t) {
          if (t) {
            var u = i(t, r),
              l = shz.common.urlParams(t),
              d = _extends({}, n, l, u, c);
            return (
              (d.mttnsub1 = d.mttnsub1 || d.itsct),
              (d.mttnsub2 = d.mttnsub2 || d.ct),
              (t = shz.common.setQueryParams(t, d)),
              (o && t.match(o)) || t.match(e)
                ? (t = (t =
                    o && o != a ? t.replace(new RegExp(o, "g"), a) : t).replace(
                    new RegExp(e, "g"),
                    a
                  ))
                : (a = d.ct),
              s &&
                s.testdomain &&
                (t = t.replace(
                  /^https:\/\/([^\/]+)/,
                  "".concat(s.testdomain, "/deeplinks/$1")
                )),
              { uri: t }
            );
          }
        })
        .filter(function (e) {
          return e;
        });
    } catch (e) {
      if (!s || s.osVerNum > 9) throw e;
    }
    return { urls: t, clientbeaconuuid: a };
  }
  function i(e, n) {
    return (
      (n = n || shz.app), shz.stats.getDeeplinkParams(n.location.pathname, e)
    );
  }
  function o() {
    var e =
      arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : "redirectToSubscribe";
    return shz.app.featureflags.isEnabled("applemusic.".concat(e));
  }
  function a() {
    return o("signUpRedirectTo.subscribe");
  }
  function c(e) {
    var n,
      i,
      a = e.node,
      c = a && (a.href || a.dataset.href),
      r = a.dataset.shzBeaconId,
      s = a.dataset.shzTrackid,
      u = o() || e.subscribe || a.dataset.shzAmSubscribe,
      d =
        (e.signupflow || a.dataset.shzAmSignupFlow,
        function (n, i, o, c) {
          var r = t(n, null, e.clientbeaconuuid, c);
          !(function (e, n, t) {
            var i = {
              node: e,
              beaconId: n,
              beaconData: { beaconType: "userevent" },
            };
            shz.common.merge(i.beaconData, t), shz.stats.nodeStat(i);
          })(a, i, { clientbeaconuuid: r.clientbeaconuuid }),
            (r.urls.length || o) &&
              shz.ux.deeplink(
                {
                  actions: r.urls.length ? r.urls : o,
                  clientbeaconuuid: r.clientbeaconuuid,
                },
                a
              );
        }),
      p = shz.app;
    ((!(!p.config.applemusic || !p.config.applemusic.isConnected) &&
      r &&
      r.match(/-signupflow$/i)) ||
      u) &&
      (r = (r || "").replace(/-signupflow$/i, "")),
      u && "true" != a.dataset.shzDisableSubscribe
        ? d("https://itunes.apple.com/subscribe", r, null, l())
        : s
        ? ((n = s),
          (i = function (e) {
            try {
              var n = e.musickit && e.musickit.attributes.url,
                t = e._huboptions.open.actions;
              d(n, r, t);
            } catch (e) {}
          }),
          shz.app
            .getService("track")
            .request("track", { trackId: n }, function (e, n) {
              n || (i && i(e));
            }))
        : c && d(c, r);
  }
  function r() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (e.subscribe = !0), c(e);
  }
  function s(e) {
    if (shz.ux.deeplink_am_to_campaign.start(e)) {
      var n = e.node;
      n && shz.stats.nodeStat({ node: n });
    } else
      shz.ux.get("musickit:codeChallenge", function (n) {
        var i = n.codeVerifier;
        !(function (e) {
          var n = this,
            i = shz.app,
            o = i.config.urlparams.mockactivate,
            s = !(!i.config.applemusic || !i.config.applemusic.isConnected),
            d =
              (i.config.applemusic && i.config.applemusic.isConnectEnabled) ||
              a(),
            p = o
              ? "/applemusic/signin/mockactivate?"
              : "https://activate.apple.com/oauth2?",
            h = shz.common.origin() + "/applemusic/signin/complete",
            m = e.codeVerifier,
            g = e.codeChallenge,
            b =
              (e.node && e.node.dataset.shzClientbeaconuuid) ||
              shz.common.guid(),
            f = shz.stats.getScreenName(),
            z = "".concat(f, "_").concat(b),
            v = e.node.dataset.shzLoginorigin || "amattribution",
            _ = {
              client_id: "xFmm2RMz",
              response_type: "code",
              scope: "music",
              redirect_uri: h,
              code_challenge_method: "S256",
              code_challenge: g,
              state: z,
              itscg: "30201",
              itsct: "Shazam_web",
            },
            y =
              p +
              Object.entries(_)
                .map(function (e) {
                  var n = _slicedToArray(e, 2),
                    t = n[0],
                    i = n[1];
                  return "".concat(t, "=").concat(encodeURIComponent(i));
                })
                .join("&");
          if (s || !d) c({ node: e.node, clientbeaconuuid: b });
          else {
            if (a()) {
              var k = _extends({}, _, l());
              return (
                shz.stats.stat({
                  beaconId: "applemusic.signin.ue-connect--start",
                  loginorigin: v,
                  providerdesc: e.node.dataset.shzProviderDesc || "",
                  clientbeaconuuid: b,
                  itsct: k.itsct,
                  itscg: k.itscg,
                }),
                void r({ node: e.node, clientbeaconuuid: b })
              );
            }
            (y = t(y, null, b, l()).urls[0].uri),
              (window.AM_SIGNUP_CALLBACK = function (t) {
                try {
                  setTimeout(function () {
                    n.signupWindow && n.signupWindow.close();
                  }, 2e3);
                } catch (e) {}
                console.log("AM_SIGNUP_CALLBACK PARAMS: "), console.log(t);
                var i = t.state != z ? "invalid_state" : t.error;
                i
                  ? ("access_denied" != i &&
                      shz.stats.stat({
                        beaconId: "applemusic.signin.err-connect--error",
                        providerdesc: i,
                        loginorigin: v,
                        clientbeaconuuid: b,
                      }),
                    u(
                      shz.common.merge(
                        t,
                        { error: i, loginorigin: v, clientbeaconuuid: b },
                        !0
                      )
                    ))
                  : (shz.stats.stat({
                      beaconId: "applemusic.signin.ue-handshake--start",
                      clientbeaconuuid: b,
                    }),
                    (function (e) {
                      var n = e.loginorigin,
                        t = e.clientbeaconuuid;
                      if (e.mock)
                        e.cb(
                          shz.common.merge(
                            { access_token: "mock_accesstoken" },
                            { loginorigin: n, clientbeaconuuid: t },
                            !0
                          )
                        );
                      else {
                        var i = {
                            grant_type: "authorization_code",
                            code: e.code,
                            code_verifier: e.code_verifier,
                          },
                          o = Object.keys(i)
                            .map(function (e) {
                              return e + "=" + i[e];
                            })
                            .join("&");
                        shz.common
                          .getJSON({
                            url: "/services/partner/oauth/commerce/oauth2/token",
                            method: "POST",
                            headers: {
                              Accept: "application/json",
                              "Content-Type":
                                "application/x-www-form-urlencoded",
                              "Cache-Control": "no-cache",
                            },
                            params: o,
                          })
                          .then(function (n, t) {
                            var i = e.loginorigin,
                              o = e.clientbeaconuuid;
                            200 == t.xhr.status
                              ? e.cb(
                                  shz.common.merge(
                                    n,
                                    { loginorigin: i, clientbeaconuuid: o },
                                    !0
                                  )
                                )
                              : (shz.stats.stat({
                                  beaconId:
                                    "applemusic.signin.err-handshake--error",
                                  clientbeaconuuid: o,
                                  code:
                                    t.xhr.status +
                                    "_" +
                                    (n && n.error ? n.error : "unknown"),
                                }),
                                e.cb({
                                  error: n && n.error ? n.error : "unknown",
                                  loginorigin: i,
                                  clientbeaconuuid: o,
                                }));
                          });
                      }
                    })({
                      code: t.code,
                      code_verifier: m,
                      node: e.node,
                      loginorigin: v,
                      clientbeaconuuid: b,
                      cb: u,
                      mock: o,
                    }));
              }),
              e.node.dataset.shzBeaconId &&
                shz.stats.stat({
                  beaconId: e.node.dataset.shzBeaconId,
                  clientbeaconuuid: b,
                  trackkey:
                    e.node.dataset.trackid ||
                    shz.stats.getDynamicValue(e.node, "trackkey", {
                      inherit: { stop: e.node },
                    }),
                  section: shz.stats.getDynamicValue(e.node, "section", {
                    inherit: { stop: e.node },
                  }),
                });
            var w = shz.common.urlParams(y);
            shz.stats.stat({
              beaconId: "applemusic.signin.ue-connect--start",
              loginorigin: v,
              providerdesc: e.node.dataset.shzProviderDesc || "",
              screenname: f,
              clientbeaconuuid: b,
              itsct: w.itsct,
              itscg: w.itscg,
            }),
              (n.signupWindow = window.open(
                y,
                "AMSignup",
                "width=500,height=600,100,status=0,"
              ));
          }
        })({ codeChallenge: n.codeChallenge, codeVerifier: i, node: e.node });
      }),
        shz.ux.fire("musickit:setupCodeChallenge", !0);
  }
  function u(e) {
    var n = !!e.access_token;
    e.error ||
      shz.stats.stat({
        beaconId: "applemusic.signin.ue-handshake--complete",
        clientbeaconuuid: e.clientbeaconuuid,
      }),
      n
        ? (shz.stats.stat(
            {
              beaconData: {
                beaconId: "applemusic.signin.ue-connection--success",
                loginorigin: e.loginorigin,
                clientbeaconuuid: e.clientbeaconuuid,
              },
            },
            { force: !0 }
          ),
          shz.app.config.applemusic.setConnectedState(e))
        : ("access_denied" == e.error &&
            shz.stats.stat({
              beaconId: "applemusic.signin.ue-connection--denied",
              providerdesc: e.error,
              clientbeaconuuid: e.clientbeaconuuid,
            }),
          shz.app.config.applemusic.setConnectedState()),
      shz.ux.overlay({
        href: "/applemusic/signin/complete/confirm",
        params: {
          takeover: !0,
          modal: !0,
          shouldMask: !0,
          mvargs: {
            isAccessAllowed: n,
            token: e && e.access_token,
            error: e && e.error,
            loginorigin: e.loginorigin,
            screenname: shz.stats.getScreenName(),
            clientbeaconuuid: e.clientbeaconuuid,
          },
        },
      });
  }
  function l() {
    return { itsct: "Shazam_web_".concat(shz.app.supports.deviceplatform) };
  }
  shz.common.merge(shz.ux, { deeplink_am: { getUrlParts: t, subscribe: r } }),
    shz.ux.get("app:ready", {
      cb: function () {
        shz.appView.registerAction(".deeplink-am", {
          preventBeacon: !0,
          action: c,
        }),
          shz.appView.registerAction(".deeplink-am-sub", {
            preventBeacon: !0,
            action: r,
          }),
          shz.appView.registerAction(".deeplink-am-signupflow", {
            preventBeacon: !0,
            action: s,
          }),
          (n = {
            ct: e,
            at: shz.app.supports.android ? "1000l8NV" : "1001l4DI",
            itsct: "Shazam_web",
            itscg: "30201",
            mttnagencyid: "769459046716559743",
            mttnsiteid: "125115",
            mttn3pid: "a_custom_779816081798873874",
            app: "music",
          });
      },
      listenOnce: 1,
    });
})();
shz.ux.get("app:ready", {
  cb: function () {
    document.addEventListener(
      "touchstart",
      function (e) {
        var t = e.touches;
        t &&
          4 == t.length &&
          (shz.ux.overlay({ href: "/ux/debugtap", params: { takeover: !0 } }),
          e.preventDefault(),
          e.stopPropagation());
      },
      !0
    );
  },
  listenOnce: 1,
});
!(function () {
  var e,
    t,
    r,
    a,
    n = window.AudioContext || window.webkitAudioContext,
    o = null,
    s = null,
    c = (Date.now(), !1),
    i = !1,
    l = null,
    u = shz.common.namespace("ux.rec"),
    h = (blob4s = blob6s = blob8s = blob9s = blob12s = null),
    g = 0,
    m = [];
  (u.accessRecorder = function (e) {
    return (
      (frameOrigin = e),
      !i && (b(), console.log("recording started from rec.js!"), !0)
    );
  }),
    (u.stopRecorder = function (e) {
      var t = Date.now() - r;
      shz.stats.stat({
        beaconId: "webrec.ue-listening-cancel",
        origin: e,
        timespent: t,
      }),
        U(!1),
        shz.ux.overlay({ href: null });
    }),
    (u.micAccessStatus = function () {
      return navigator.mediaDevices.enumerateDevices().then(function (e) {
        return e.some(function (e) {
          return "audioinput" === e.kind && "" !== e.label;
        });
      });
    }),
    (u.askForMicrophone = function () {
      return navigator.mediaDevices.getUserMedia({ audio: !0 });
    });
  var b = function () {
      r = Date.now();
      var a = new URLSearchParams(shz.app.location.search),
        c = a.get("ec"),
        u = a.get("ns");
      stream = null;
      var h = {
        audio: {
          echoCancellation: "true" === c,
          noiseSupression: "true" === u,
        },
        video: !1,
      };
      shz.ux.fire("webrec:started"),
        o || (o = new n()),
        navigator.mediaDevices
          .getUserMedia(h)
          .then(function (r) {
            try {
              (s = r),
                (e = o.createMediaStreamSource(r)),
                (t = o.createScriptProcessor(4096, 1, 1)),
                (i = !0),
                (l = shz.common.guid()),
                e.connect(t),
                t.connect(o.destination),
                (t.onaudioprocess = function (e) {
                  if (i)
                    for (
                      var t, r = e.inputBuffer, a = 0;
                      a < r.numberOfChannels;
                      a++
                    ) {
                      var n = r.getChannelData(a);
                      (g += r.length),
                        (t = new Float32Array(r.length)).set(n),
                        m.push(t);
                    }
                }),
                shz.app.supports.isMobile ? d() : f();
            } catch (e) {
              x(e.name);
            }
          })
          .catch(function (e) {
            x(e.name);
          });
    },
    f = function () {
      (h = setTimeout(function () {
        p();
      }, 3e3)),
        (blob6s = setTimeout(function () {
          p();
        }, 6e3)),
        (blob9s = setTimeout(function () {
          p();
        }, 9e3)),
        (blob12s = setTimeout(function () {
          (c = !0), p();
        }, 12e3));
    },
    d = function () {
      (h = setTimeout(function () {
        p();
      }, 3e3)),
        (blob6s = setTimeout(function () {
          p();
        }, 6e3)),
        (blob9s = setTimeout(function () {
          p();
        }, 9e3)),
        (blob12s = setTimeout(function () {
          (c = !0), p();
        }, 12e3));
    },
    p = function () {
      var e,
        t,
        r,
        a,
        n = (function (e, t) {
          for (var r = new Float32Array(t), a = 0, n = 0; n < e.length; n++)
            r.set(e[n], a), (a += e[n].length);
          return r;
        })(m, g),
        s =
          ((e = n),
          (t = new ArrayBuffer(44 + 2 * e.length)),
          (r = new DataView(t)),
          (a = o.sampleRate),
          z(r, 0, "RIFF"),
          r.setUint32(4, 36 + 2 * e.length, !0),
          z(r, 8, "WAVE"),
          z(r, 12, "fmt "),
          r.setUint32(16, 16, !0),
          r.setUint16(20, 1, !0),
          r.setUint16(22, 1, !0),
          r.setUint32(24, a, !0),
          r.setUint32(28, 4 * a, !0),
          r.setUint16(32, 2, !0),
          r.setUint16(34, 16, !0),
          z(r, 36, "data"),
          r.setUint32(40, 2 * e.length, !0),
          (function (e, t, r) {
            for (var a = 0; a < r.length; a++, t += 2) {
              var n = Math.max(-1, Math.min(1, r[a]));
              e.setInt16(t, n < 0 ? 32768 * n : 32767 * n, !0);
            }
          })(r, 44, e),
          r),
        i = new Blob([s], { type: "audio/wav" });
      if (
        (console.log(i),
        "1" ===
          new URLSearchParams(shz.app.location.search).get("audiocapture") && c)
      ) {
        var l = (window.URL || window.webkitURL).createObjectURL(i);
        shz.ux.fire("webrec:wavtest", { url: l, type: "wav" });
      }
      v(n);
    },
    v = function (e) {
      var t = o.sampleRate;
      try {
        var r = "src" == shz.version ? "dev" : "remote",
          a = shz.common.getResourceBase();
        w({
          type: "getSigX",
          audioF32: e,
          index: 0,
          sampleRate: t,
          env: r,
          base: a,
        });
      } catch (e) {
        console.log("could not invoke worker", e), x(e.msg);
      }
    },
    w = function (e) {
      var t = shz.common.getResourceBase(),
        r = "js/ux/rec/sigx/sigx-worker.js",
        n =
          "src" === shz.version
            ? "/src/".concat(r)
            : "".concat(t, "/").concat(r);
      (a = new Worker(n)).addEventListener(
        "message",
        function (e) {
          switch (e.data.type) {
            case "sigready":
              y(e.data.index, e.data.signatureArray);
              break;
            case "error":
              k({ msg: e.data.msg });
              break;
            default:
              k({ msg: e.data.msg });
          }
        },
        !1
      );
      try {
        a.postMessage(e);
      } catch (e) {
        console.log(e), x(e.msg);
      }
    };
  function z(e, t, r) {
    for (var a = 0; a < r.length; a++) e.setUint8(t + a, r.charCodeAt(a));
  }
  var k = function (e) {
      console.log("worker error:", e.msg),
        U(!1),
        shz.ux.overlay({ href: null });
    },
    y = function (e, t) {
      console.log("signature ready..."), a.terminate();
      var n = new Uint8Array(t.buffer),
        o = shz.common.Uint8ToBase64(n),
        s =
          "1" ===
          new URLSearchParams(shz.app.location.search).get("audiocapture");
      s &&
        shz.common
          .getJSON({
            url: "/services/webrec/returnSig",
            method: "POST",
            params: {
              data: o,
              sessionId: l,
              lang: shz.app.language,
              country: shz.app.country,
            },
            headers: { "Content-Type": "application/json" },
          })
          .then(function (e, t) {
            var r = Object.values(e.signature),
              a = new Uint8Array();
            a = Uint8Array.from(r);
            var n = new Blob([a.buffer], { type: "audio/vnd.shazam.sig" }),
              o = (window.URL || window.webkitURL).createObjectURL(n);
            shz.ux.fire("webrec:wavtest", { url: o, type: "sig" });
          }),
        shz.common
          .getJSON({
            url: "/services/webrec/match",
            method: "POST",
            params: {
              data: o,
              sessionId: l,
              lang: shz.app.language,
              country: shz.app.country,
            },
            headers: { "Content-Type": "application/json" },
          })
          .then(function (e, t) {
            if ((console.log(e), e && e.matches.length > 0)) {
              var a = e.matches[0].weburl;
              console.log("matchurl", a);
            } else console.log("no matches yet...");
            if (
              (console.log("error: ", t.error), l === t.params.params.sessionId)
            )
              if (t.error || s) {
                c &&
                  (shz.ux.fire("webrec:nomatch"),
                  shz.ux.overlay({ href: null }),
                  U(!1));
                var n = "",
                  o = t.error.args && t.error.args.response;
                (n = o ? JSON.parse(o).error.message : t.error.message),
                  x("service-error:".concat(n));
              } else if (e.matches.length) {
                U(!0), T();
                var i = e.matches[0];
                shz.app
                  .getService("track")
                  .request(
                    "track_bkgcolor",
                    { trackId: i.trackId },
                    function (e, t) {
                      if (!t) {
                        var a = e.alias,
                          n = e.key,
                          o = e.properties,
                          s = e.title,
                          c = e.subtitle,
                          i = shz.app.location.pathname,
                          l = ""
                            .concat(shz.app.langpath, "/track/")
                            .concat(n, "/")
                            .concat(a);
                        shz.ux.fire("webrec:match"),
                          "floatingbutton" === frameOrigin &&
                            shz.storage.local.set("webrec.fab_match", !0),
                          shz.stats.stat({
                            beaconId: "webrec.ue-tag-success",
                            recordtime: Date.now() - r,
                            trackkey: n,
                          }),
                          i.includes(l)
                            ? (shz.ux.overlay({ href: null }),
                              shz.stats.stat({
                                beaconId: "webrec.ue-listening-end",
                                origin: frameOrigin,
                                trackid: n,
                                outcome: "match",
                              }),
                              shz.ux.overlay({
                                href: "/track/webrec/interstitial",
                                overlay: !0,
                                params: {
                                  takeover: !0,
                                  mvargs: {
                                    tracktitle: s,
                                    trackartist: c,
                                    bkgcolor: o.bkgcolor,
                                    bkglight: o.bkglight,
                                  },
                                },
                              }))
                            : shz.app.navigate({
                                href: l,
                                params: {
                                  mvargs: {
                                    origin: "webrec",
                                    buttonSource: frameOrigin,
                                    id: n,
                                    bkgcolor: o.bkgcolor,
                                    bkglight: o.bkglight,
                                    tracktitle: s,
                                    trackartist: c,
                                  },
                                },
                                preserveOverlay: !0,
                                pushHistory: !0,
                              });
                      }
                    }
                  );
              } else
                c &&
                  (shz.ux.fire("webrec:nomatch"),
                  shz.ux.overlay({ href: null }),
                  U(!1));
          });
    },
    U = function (r) {
      e &&
        t &&
        s &&
        (e.disconnect(t),
        t.disconnect(o.destination),
        s.getAudioTracks()[0].stop()),
        shz.app.supports.isMobile,
        clearTimeout(h),
        clearTimeout(blob6s),
        clearTimeout(blob9s),
        clearTimeout(blob12s),
        (i = !1),
        (c = !1),
        (g = 0),
        (m = []),
        (s = null),
        (t = null),
        (e = null),
        (h = blob6s = blob9s = blob12s = null),
        r || shz.ux.fire("webrec:ended");
    },
    x = function (e) {
      var t = e.replace(/ /g, "").toLowerCase();
      shz.stats.stat({
        beaconId: "webrec.ue-listening-end",
        origin: frameOrigin,
        outcome: "error",
        errordesc: t,
      });
    },
    T = function () {
      shz.storage.local.get("webrec.prev_match") ||
        shz.storage.local.set("webrec.prev_match", !0);
    };
})();
