!(function () {
  var t = {
      8552: function (t, n, r) {
        var e = r(852)(r(5639), "DataView");
        t.exports = e;
      },
      7071: function (t, n, r) {
        var e = r(852)(r(5639), "Map");
        t.exports = e;
      },
      3818: function (t, n, r) {
        var e = r(852)(r(5639), "Promise");
        t.exports = e;
      },
      8525: function (t, n, r) {
        var e = r(852)(r(5639), "Set");
        t.exports = e;
      },
      2705: function (t, n, r) {
        var e = r(5639).Symbol;
        t.exports = e;
      },
      577: function (t, n, r) {
        var e = r(852)(r(5639), "WeakMap");
        t.exports = e;
      },
      6874: function (t) {
        t.exports = function (t, n, r) {
          switch (r.length) {
            case 0:
              return t.call(n);
            case 1:
              return t.call(n, r[0]);
            case 2:
              return t.call(n, r[0], r[1]);
            case 3:
              return t.call(n, r[0], r[1], r[2]);
          }
          return t.apply(n, r);
        };
      },
      4636: function (t, n, r) {
        var e = r(2545),
          o = r(5694),
          i = r(1469),
          c = r(4144),
          u = r(5776),
          s = r(6719),
          a = Object.prototype.hasOwnProperty;
        t.exports = function (t, n) {
          var r = i(t),
            f = !r && o(t),
            l = !r && !f && c(t),
            p = !r && !f && !l && s(t),
            v = r || f || l || p,
            b = v ? e(t.length, String) : [],
            y = b.length;
          for (var d in t)
            (!n && !a.call(t, d)) ||
              (v &&
                ("length" == d ||
                  (l && ("offset" == d || "parent" == d)) ||
                  (p &&
                    ("buffer" == d ||
                      "byteLength" == d ||
                      "byteOffset" == d)) ||
                  u(d, y))) ||
              b.push(d);
          return b;
        };
      },
      4865: function (t, n, r) {
        var e = r(9465),
          o = r(7813),
          i = Object.prototype.hasOwnProperty;
        t.exports = function (t, n, r) {
          var c = t[n];
          (i.call(t, n) && o(c, r) && (void 0 !== r || n in t)) || e(t, n, r);
        };
      },
      9465: function (t, n, r) {
        var e = r(8777);
        t.exports = function (t, n, r) {
          "__proto__" == n && e
            ? e(t, n, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0,
              })
            : (t[n] = r);
        };
      },
      4239: function (t, n, r) {
        var e = r(2705),
          o = r(9607),
          i = r(2333),
          c = e ? e.toStringTag : void 0;
        t.exports = function (t) {
          return null == t
            ? void 0 === t
              ? "[object Undefined]"
              : "[object Null]"
            : c && c in Object(t)
            ? o(t)
            : i(t);
        };
      },
      9454: function (t, n, r) {
        var e = r(4239),
          o = r(7005);
        t.exports = function (t) {
          return o(t) && "[object Arguments]" == e(t);
        };
      },
      8458: function (t, n, r) {
        var e = r(3560),
          o = r(5346),
          i = r(3218),
          c = r(346),
          u = /^\[object .+?Constructor\]$/,
          s = Function.prototype,
          a = Object.prototype,
          f = s.toString,
          l = a.hasOwnProperty,
          p = RegExp(
            "^" +
              f
                .call(l)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          );
        t.exports = function (t) {
          return !(!i(t) || o(t)) && (e(t) ? p : u).test(c(t));
        };
      },
      8749: function (t, n, r) {
        var e = r(4239),
          o = r(1780),
          i = r(7005),
          c = {};
        (c["[object Float32Array]"] =
          c["[object Float64Array]"] =
          c["[object Int8Array]"] =
          c["[object Int16Array]"] =
          c["[object Int32Array]"] =
          c["[object Uint8Array]"] =
          c["[object Uint8ClampedArray]"] =
          c["[object Uint16Array]"] =
          c["[object Uint32Array]"] =
            !0),
          (c["[object Arguments]"] =
            c["[object Array]"] =
            c["[object ArrayBuffer]"] =
            c["[object Boolean]"] =
            c["[object DataView]"] =
            c["[object Date]"] =
            c["[object Error]"] =
            c["[object Function]"] =
            c["[object Map]"] =
            c["[object Number]"] =
            c["[object Object]"] =
            c["[object RegExp]"] =
            c["[object Set]"] =
            c["[object String]"] =
            c["[object WeakMap]"] =
              !1),
          (t.exports = function (t) {
            return i(t) && o(t.length) && !!c[e(t)];
          });
      },
      280: function (t, n, r) {
        var e = r(5726),
          o = r(6916),
          i = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
          if (!e(t)) return o(t);
          var n = [];
          for (var r in Object(t))
            i.call(t, r) && "constructor" != r && n.push(r);
          return n;
        };
      },
      5976: function (t, n, r) {
        var e = r(6557),
          o = r(5357),
          i = r(61);
        t.exports = function (t, n) {
          return i(o(t, n, e), t + "");
        };
      },
      6560: function (t, n, r) {
        var e = r(5703),
          o = r(8777),
          i = r(6557),
          c = o
            ? function (t, n) {
                return o(t, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: e(n),
                  writable: !0,
                });
              }
            : i;
        t.exports = c;
      },
      2545: function (t) {
        t.exports = function (t, n) {
          for (var r = -1, e = Array(t); ++r < t; ) e[r] = n(r);
          return e;
        };
      },
      7561: function (t, n, r) {
        var e = r(7990),
          o = /^\s+/;
        t.exports = function (t) {
          return t ? t.slice(0, e(t) + 1).replace(o, "") : t;
        };
      },
      7518: function (t) {
        t.exports = function (t) {
          return function (n) {
            return t(n);
          };
        };
      },
      8363: function (t, n, r) {
        var e = r(4865),
          o = r(9465);
        t.exports = function (t, n, r, i) {
          var c = !r;
          r || (r = {});
          for (var u = -1, s = n.length; ++u < s; ) {
            var a = n[u],
              f = i ? i(r[a], t[a], a, r, t) : void 0;
            void 0 === f && (f = t[a]), c ? o(r, a, f) : e(r, a, f);
          }
          return r;
        };
      },
      4429: function (t, n, r) {
        var e = r(5639)["__core-js_shared__"];
        t.exports = e;
      },
      1463: function (t, n, r) {
        var e = r(5976),
          o = r(6612);
        t.exports = function (t) {
          return e(function (n, r) {
            var e = -1,
              i = r.length,
              c = i > 1 ? r[i - 1] : void 0,
              u = i > 2 ? r[2] : void 0;
            for (
              c = t.length > 3 && "function" == typeof c ? (i--, c) : void 0,
                u && o(r[0], r[1], u) && ((c = i < 3 ? void 0 : c), (i = 1)),
                n = Object(n);
              ++e < i;

            ) {
              var s = r[e];
              s && t(n, s, e, c);
            }
            return n;
          });
        };
      },
      8777: function (t, n, r) {
        var e = r(852),
          o = (function () {
            try {
              var t = e(Object, "defineProperty");
              return t({}, "", {}), t;
            } catch (t) {}
          })();
        t.exports = o;
      },
      1957: function (t, n, r) {
        var e = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
        t.exports = e;
      },
      852: function (t, n, r) {
        var e = r(8458),
          o = r(7801);
        t.exports = function (t, n) {
          var r = o(t, n);
          return e(r) ? r : void 0;
        };
      },
      9607: function (t, n, r) {
        var e = r(2705),
          o = Object.prototype,
          i = o.hasOwnProperty,
          c = o.toString,
          u = e ? e.toStringTag : void 0;
        t.exports = function (t) {
          var n = i.call(t, u),
            r = t[u];
          try {
            t[u] = void 0;
            var e = !0;
          } catch (t) {}
          var o = c.call(t);
          return e && (n ? (t[u] = r) : delete t[u]), o;
        };
      },
      4160: function (t, n, r) {
        var e = r(8552),
          o = r(7071),
          i = r(3818),
          c = r(8525),
          u = r(577),
          s = r(4239),
          a = r(346),
          f = "[object Map]",
          l = "[object Promise]",
          p = "[object Set]",
          v = "[object WeakMap]",
          b = "[object DataView]",
          y = a(e),
          d = a(o),
          h = a(i),
          x = a(c),
          g = a(u),
          j = s;
        ((e && j(new e(new ArrayBuffer(1))) != b) ||
          (o && j(new o()) != f) ||
          (i && j(i.resolve()) != l) ||
          (c && j(new c()) != p) ||
          (u && j(new u()) != v)) &&
          (j = function (t) {
            var n = s(t),
              r = "[object Object]" == n ? t.constructor : void 0,
              e = r ? a(r) : "";
            if (e)
              switch (e) {
                case y:
                  return b;
                case d:
                  return f;
                case h:
                  return l;
                case x:
                  return p;
                case g:
                  return v;
              }
            return n;
          }),
          (t.exports = j);
      },
      7801: function (t) {
        t.exports = function (t, n) {
          return null == t ? void 0 : t[n];
        };
      },
      5776: function (t) {
        var n = /^(?:0|[1-9]\d*)$/;
        t.exports = function (t, r) {
          var e = typeof t;
          return (
            !!(r = null == r ? 9007199254740991 : r) &&
            ("number" == e || ("symbol" != e && n.test(t))) &&
            t > -1 &&
            t % 1 == 0 &&
            t < r
          );
        };
      },
      6612: function (t, n, r) {
        var e = r(7813),
          o = r(8612),
          i = r(5776),
          c = r(3218);
        t.exports = function (t, n, r) {
          if (!c(r)) return !1;
          var u = typeof n;
          return (
            !!("number" == u
              ? o(r) && i(n, r.length)
              : "string" == u && n in r) && e(r[n], t)
          );
        };
      },
      5346: function (t, n, r) {
        var e,
          o = r(4429),
          i = (e = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + e
            : "";
        t.exports = function (t) {
          return !!i && i in t;
        };
      },
      5726: function (t) {
        var n = Object.prototype;
        t.exports = function (t) {
          var r = t && t.constructor;
          return t === (("function" == typeof r && r.prototype) || n);
        };
      },
      6916: function (t, n, r) {
        var e = r(5569)(Object.keys, Object);
        t.exports = e;
      },
      1167: function (t, n, r) {
        t = r.nmd(t);
        var e = r(1957),
          o = n && !n.nodeType && n,
          i = o && t && !t.nodeType && t,
          c = i && i.exports === o && e.process,
          u = (function () {
            try {
              return (
                (i && i.require && i.require("util").types) ||
                (c && c.binding && c.binding("util"))
              );
            } catch (t) {}
          })();
        t.exports = u;
      },
      2333: function (t) {
        var n = Object.prototype.toString;
        t.exports = function (t) {
          return n.call(t);
        };
      },
      5569: function (t) {
        t.exports = function (t, n) {
          return function (r) {
            return t(n(r));
          };
        };
      },
      5357: function (t, n, r) {
        var e = r(6874),
          o = Math.max;
        t.exports = function (t, n, r) {
          return (
            (n = o(void 0 === n ? t.length - 1 : n, 0)),
            function () {
              for (
                var i = arguments, c = -1, u = o(i.length - n, 0), s = Array(u);
                ++c < u;

              )
                s[c] = i[n + c];
              c = -1;
              for (var a = Array(n + 1); ++c < n; ) a[c] = i[c];
              return (a[n] = r(s)), e(t, this, a);
            }
          );
        };
      },
      5639: function (t, n, r) {
        var e = r(1957),
          o = "object" == typeof self && self && self.Object === Object && self,
          i = e || o || Function("return this")();
        t.exports = i;
      },
      61: function (t, n, r) {
        var e = r(6560),
          o = r(1275)(e);
        t.exports = o;
      },
      1275: function (t) {
        var n = Date.now;
        t.exports = function (t) {
          var r = 0,
            e = 0;
          return function () {
            var o = n(),
              i = 16 - (o - e);
            if (((e = o), i > 0)) {
              if (++r >= 800) return arguments[0];
            } else r = 0;
            return t.apply(void 0, arguments);
          };
        };
      },
      346: function (t) {
        var n = Function.prototype.toString;
        t.exports = function (t) {
          if (null != t) {
            try {
              return n.call(t);
            } catch (t) {}
            try {
              return t + "";
            } catch (t) {}
          }
          return "";
        };
      },
      7990: function (t) {
        var n = /\s/;
        t.exports = function (t) {
          for (var r = t.length; r-- && n.test(t.charAt(r)); );
          return r;
        };
      },
      8583: function (t, n, r) {
        var e = r(4865),
          o = r(8363),
          i = r(1463),
          c = r(8612),
          u = r(5726),
          s = r(3674),
          a = Object.prototype.hasOwnProperty,
          f = i(function (t, n) {
            if (u(n) || c(n)) o(n, s(n), t);
            else for (var r in n) a.call(n, r) && e(t, r, n[r]);
          });
        t.exports = f;
      },
      5703: function (t) {
        t.exports = function (t) {
          return function () {
            return t;
          };
        };
      },
      3279: function (t, n, r) {
        var e = r(3218),
          o = r(7771),
          i = r(4841),
          c = Math.max,
          u = Math.min;
        t.exports = function (t, n, r) {
          var s,
            a,
            f,
            l,
            p,
            v,
            b = 0,
            y = !1,
            d = !1,
            h = !0;
          if ("function" != typeof t)
            throw new TypeError("Expected a function");
          function x(n) {
            var r = s,
              e = a;
            return (s = a = void 0), (b = n), (l = t.apply(e, r));
          }
          function g(t) {
            var r = t - v;
            return void 0 === v || r >= n || r < 0 || (d && t - b >= f);
          }
          function j() {
            var t = o();
            if (g(t)) return m(t);
            p = setTimeout(
              j,
              (function (t) {
                var r = n - (t - v);
                return d ? u(r, f - (t - b)) : r;
              })(t)
            );
          }
          function m(t) {
            return (p = void 0), h && s ? x(t) : ((s = a = void 0), l);
          }
          function k() {
            var t = o(),
              r = g(t);
            if (((s = arguments), (a = this), (v = t), r)) {
              if (void 0 === p)
                return (function (t) {
                  return (b = t), (p = setTimeout(j, n)), y ? x(t) : l;
                })(v);
              if (d) return clearTimeout(p), (p = setTimeout(j, n)), x(v);
            }
            return void 0 === p && (p = setTimeout(j, n)), l;
          }
          return (
            (n = i(n) || 0),
            e(r) &&
              ((y = !!r.leading),
              (f = (d = "maxWait" in r) ? c(i(r.maxWait) || 0, n) : f),
              (h = "trailing" in r ? !!r.trailing : h)),
            (k.cancel = function () {
              void 0 !== p && clearTimeout(p),
                (b = 0),
                (s = v = a = p = void 0);
            }),
            (k.flush = function () {
              return void 0 === p ? l : m(o());
            }),
            k
          );
        };
      },
      7813: function (t) {
        t.exports = function (t, n) {
          return t === n || (t != t && n != n);
        };
      },
      6557: function (t) {
        t.exports = function (t) {
          return t;
        };
      },
      5694: function (t, n, r) {
        var e = r(9454),
          o = r(7005),
          i = Object.prototype,
          c = i.hasOwnProperty,
          u = i.propertyIsEnumerable,
          s = e(
            (function () {
              return arguments;
            })()
          )
            ? e
            : function (t) {
                return o(t) && c.call(t, "callee") && !u.call(t, "callee");
              };
        t.exports = s;
      },
      1469: function (t) {
        var n = Array.isArray;
        t.exports = n;
      },
      8612: function (t, n, r) {
        var e = r(3560),
          o = r(1780);
        t.exports = function (t) {
          return null != t && o(t.length) && !e(t);
        };
      },
      4144: function (t, n, r) {
        t = r.nmd(t);
        var e = r(5639),
          o = r(5062),
          i = n && !n.nodeType && n,
          c = i && t && !t.nodeType && t,
          u = c && c.exports === i ? e.Buffer : void 0,
          s = (u ? u.isBuffer : void 0) || o;
        t.exports = s;
      },
      1609: function (t, n, r) {
        var e = r(280),
          o = r(4160),
          i = r(5694),
          c = r(1469),
          u = r(8612),
          s = r(4144),
          a = r(5726),
          f = r(6719),
          l = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
          if (null == t) return !0;
          if (
            u(t) &&
            (c(t) ||
              "string" == typeof t ||
              "function" == typeof t.splice ||
              s(t) ||
              f(t) ||
              i(t))
          )
            return !t.length;
          var n = o(t);
          if ("[object Map]" == n || "[object Set]" == n) return !t.size;
          if (a(t)) return !e(t).length;
          for (var r in t) if (l.call(t, r)) return !1;
          return !0;
        };
      },
      3560: function (t, n, r) {
        var e = r(4239),
          o = r(3218);
        t.exports = function (t) {
          if (!o(t)) return !1;
          var n = e(t);
          return (
            "[object Function]" == n ||
            "[object GeneratorFunction]" == n ||
            "[object AsyncFunction]" == n ||
            "[object Proxy]" == n
          );
        };
      },
      1780: function (t) {
        t.exports = function (t) {
          return (
            "number" == typeof t &&
            t > -1 &&
            t % 1 == 0 &&
            t <= 9007199254740991
          );
        };
      },
      3218: function (t) {
        t.exports = function (t) {
          var n = typeof t;
          return null != t && ("object" == n || "function" == n);
        };
      },
      7005: function (t) {
        t.exports = function (t) {
          return null != t && "object" == typeof t;
        };
      },
      3448: function (t, n, r) {
        var e = r(4239),
          o = r(7005);
        t.exports = function (t) {
          return "symbol" == typeof t || (o(t) && "[object Symbol]" == e(t));
        };
      },
      6719: function (t, n, r) {
        var e = r(8749),
          o = r(7518),
          i = r(1167),
          c = i && i.isTypedArray,
          u = c ? o(c) : e;
        t.exports = u;
      },
      3674: function (t, n, r) {
        var e = r(4636),
          o = r(280),
          i = r(8612);
        t.exports = function (t) {
          return i(t) ? e(t) : o(t);
        };
      },
      7771: function (t, n, r) {
        var e = r(5639);
        t.exports = function () {
          return e.Date.now();
        };
      },
      5062: function (t) {
        t.exports = function () {
          return !1;
        };
      },
      3493: function (t, n, r) {
        var e = r(3279),
          o = r(3218);
        t.exports = function (t, n, r) {
          var i = !0,
            c = !0;
          if ("function" != typeof t)
            throw new TypeError("Expected a function");
          return (
            o(r) &&
              ((i = "leading" in r ? !!r.leading : i),
              (c = "trailing" in r ? !!r.trailing : c)),
            e(t, n, { leading: i, maxWait: n, trailing: c })
          );
        };
      },
      4841: function (t, n, r) {
        var e = r(7561),
          o = r(3218),
          i = r(3448),
          c = /^[-+]0x[0-9a-f]+$/i,
          u = /^0b[01]+$/i,
          s = /^0o[0-7]+$/i,
          a = parseInt;
        t.exports = function (t) {
          if ("number" == typeof t) return t;
          if (i(t)) return NaN;
          if (o(t)) {
            var n = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = o(n) ? n + "" : n;
          }
          if ("string" != typeof t) return 0 === t ? t : +t;
          t = e(t);
          var r = u.test(t);
          return r || s.test(t)
            ? a(t.slice(2), r ? 2 : 8)
            : c.test(t)
            ? NaN
            : +t;
        };
      },
    },
    n = {};
  function r(e) {
    var o = n[e];
    if (void 0 !== o) return o.exports;
    var i = (n[e] = { id: e, loaded: !1, exports: {} });
    return t[e](i, i.exports, r), (i.loaded = !0), i.exports;
  }
  (r.n = function (t) {
    var n =
      t && t.__esModule
        ? function () {
            return t.default;
          }
        : function () {
            return t;
          };
    return r.d(n, { a: n }), n;
  }),
    (r.d = function (t, n) {
      for (var e in n)
        r.o(n, e) &&
          !r.o(t, e) &&
          Object.defineProperty(t, e, { enumerable: !0, get: n[e] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (r.nmd = function (t) {
      return (t.paths = []), t.children || (t.children = []), t;
    }),
    (function () {
      "use strict";
      var t = r(3493),
        n = r.n(t),
        e = r(1609),
        o = r.n(e),
        i = r(8583),
        c = r.n(i);
      class u {
        constructor() {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ".bsb-tpl-navbar-sticky",
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          (this.defaults = {
            preStuckClass: "pre-stuck",
            stuckClass: "stuck",
            stickyTarget: null,
            stickyNode: null,
            stuckClassTimeout: null,
            stuckBg: null,
            stuckTheme: null,
            bsTheme: null,
          }),
            (this.options = c()(this.defaults, n)),
            (this.selector = t),
            this.init();
        }
        init() {
          const t = document.querySelector(this.selector);
          if (null != t) {
            if (
              (this.dataAtts(t),
              (this.options.stickyNode = t),
              null !== this.options.stickyTarget)
            ) {
              const t = document.querySelector(this.options.stickyTarget);
              null != t && (this.options.stickyNode = t);
            }
            window.addEventListener(
              "scroll",
              n()(() => this.scrollEvent(t, this.options.stickyNode), 1e3)
            );
          }
        }
        dataAtts(t) {
          o()(t.dataset.bsbStickyTarget) ||
            (this.options.stickyTarget = t.dataset.bsbStickyTarget),
            o()(t.dataset.bsbStuckBg) ||
              (this.options.stuckBg = t.dataset.bsbStuckBg),
            o()(t.dataset.bsbStuckTheme) ||
              (this.options.stuckTheme = t.dataset.bsbStuckTheme),
            o()(t.dataset.bsTheme) ||
              (this.options.bsTheme = t.dataset.bsTheme);
        }
        scrollEvent(t, n) {
          const r = window.scrollY;
          r >= 250 &&
            (n.classList.contains(this.options.preStuckClass) ||
              (n.classList.add(this.options.preStuckClass),
              (this.options.stuckClassTimeout = setTimeout(() => {
                n.classList.add(this.options.stuckClass),
                  null !== this.options.stuckBg &&
                    t.classList.add(this.options.stuckBg),
                  null !== this.options.stuckTheme &&
                    t.setAttribute("data-bs-theme", this.options.stuckTheme);
              }, 250))),
            n.classList.contains(this.options.stuckClass) &&
              clearTimeout(this.options.stuckClassTimeout)),
            r <= 25 &&
              (n.classList.contains(this.options.preStuckClass) ||
                n.classList.contains(this.options.stuckClass)) &&
              (n.classList.remove(this.options.preStuckClass),
              n.classList.remove(this.options.stuckClass),
              null !== this.options.stuckBg &&
                t.classList.remove(this.options.stuckBg),
              null !== this.options.bsTheme &&
                t.setAttribute("data-bs-theme", this.options.bsTheme));
        }
      }
      !(function () {
        function t() {
          new u();
        }
        "loading" === document.readyState
          ? document.addEventListener("DOMContentLoaded", t)
          : t();
      })();
    })();
})();
