/**
 * easytimer.js
 * Generated: 2020-06-20
 * Version: 4.3.0
 */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).easytimer = {}));
})(this, function (t) {
  "use strict";
  function C(t) {
    return (C =
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
  function e(e, t) {
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
  function R(o) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? e(Object(i), !0).forEach(function (t) {
            var e, n, r;
            (e = o),
              (r = i[(n = t)]),
              n in e
                ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[n] = r);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
        : e(Object(i)).forEach(function (t) {
            Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(i, t));
          });
    }
    return o;
  }
  function i(t, e, n) {
    var r,
      o = "";
    if ((t = "number" == typeof t ? String(t) : t).length > e) return t;
    for (r = 0; r < e; r += 1) o += String(n);
    return (o + t).slice(-o.length);
  }
  function q() {
    this.reset();
  }
  function B() {
    this.events = {};
  }
  (q.prototype.toString = function () {
    var t =
        0 < arguments.length && void 0 !== arguments[0]
          ? arguments[0]
          : ["hours", "minutes", "seconds"],
      e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : ":",
      n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 2;
    (t = t || ["hours", "minutes", "seconds"]), (e = e || ":"), (n = n || 2);
    var r,
      o = [];
    for (r = 0; r < t.length; r += 1)
      void 0 !== this[t[r]] &&
        ("secondTenths" === t[r]
          ? o.push(this[t[r]])
          : o.push(i(this[t[r]], n, "0")));
    return o.join(e);
  }),
    (q.prototype.reset = function () {
      (this.secondTenths = 0),
        (this.seconds = 0),
        (this.minutes = 0),
        (this.hours = 0),
        (this.days = 0);
    }),
    (B.prototype.on = function (t, e) {
      var n = this;
      return (
        Array.isArray(this.events[t]) || (this.events[t] = []),
        this.events[t].push(e),
        function () {
          return n.removeListener(t, e);
        }
      );
    }),
    (B.prototype.removeListener = function (t, e) {
      if (Array.isArray(this.events[t])) {
        var n = this.events[t].indexOf(e);
        -1 < n && this.events[t].splice(n, 1);
      }
    }),
    (B.prototype.emit = function (t) {
      for (
        var e = this,
          n = arguments.length,
          r = new Array(1 < n ? n - 1 : 0),
          o = 1;
        o < n;
        o++
      )
        r[o - 1] = arguments[o];
      Array.isArray(this.events[t]) &&
        this.events[t].forEach(function (t) {
          return t.apply(e, r);
        });
    });
  var F = "secondTenths",
    G = "seconds",
    H = "minutes",
    J = "hours",
    K = "days",
    N = [F, G, H, J, K],
    Q = {
      secondTenths: 100,
      seconds: 1e3,
      minutes: 6e4,
      hours: 36e5,
      days: 864e5,
    },
    W = { secondTenths: 10, seconds: 60, minutes: 60, hours: 24 };
  function X(t, e) {
    return ((t % e) + e) % e;
  }
  function n() {
    var e,
      n,
      o,
      r,
      i,
      s,
      u,
      c,
      a,
      f,
      h = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
      d = new q(),
      l = new q(),
      p = new B(),
      v = !1,
      y = !1,
      m = {},
      g = { detail: { timer: this } };
    function b(t, e) {
      var n,
        r,
        o = l[e];
      return (
        (r = x(t, Q[(n = e)])),
        (l[n] = r),
        (d[n] = n === K ? r : 0 <= r ? X(r, W[n]) : W[n] - X(r, W[n])),
        l[e] !== o
      );
    }
    function t() {
      w(), d.reset(), l.reset();
    }
    function w() {
      clearInterval(e), (e = void 0), (y = v = !1);
    }
    function O(t) {
      z() ? ((a = j()), (s = V(i.target))) : S(t),
        (function () {
          var t = Q[n];
          if (E(P(Date.now()))) return;
          (e = setInterval(T, t)), (v = !0), (y = !1);
        })();
    }
    function j() {
      return P(Date.now()) - l.secondTenths * Q[F] * o;
    }
    function T() {
      var t = P(Date.now());
      !(function (t) {
        t[F] && I("secondTenthsUpdated", g);
        t[G] && I("secondsUpdated", g);
        t[H] && I("minutesUpdated", g);
        t[J] && I("hoursUpdated", g);
        t[K] && I("daysUpdated", g);
      })(A()),
        r(g.detail.timer),
        E(t) && (U(), I("targetAchieved", g));
    }
    function A(t) {
      var e = 0 < arguments.length && void 0 !== t ? t : P(Date.now()),
        n = 0 < o ? e - a : a - e,
        r = {};
      return (
        (r[F] = b(n, F)),
        (r[G] = b(n, G)),
        (r[H] = b(n, H)),
        (r[J] = b(n, J)),
        (r[K] = b(n, K)),
        r
      );
    }
    function P(t) {
      return Math.floor(t / Q[n]) * Q[n];
    }
    function E(t) {
      return s instanceof Array && f <= t;
    }
    function S(t) {
      var e;
      (n = (function (t) {
        if (
          (function (t) {
            return 0 <= N.indexOf(t);
          })((t = typeof t === "string" ? t : G))
        )
          return t;
        throw new Error(
          "Error in precision parameter: ".concat(t, " is not a valid value")
        );
      })((t = t || {}).precision)),
        (r = "function" == typeof t.callback ? t.callback : function () {}),
        (c = !0 === t.countdown),
        (o = !0 == c ? -1 : 1),
        "object" === C(t.startValues)
          ? ((e = t.startValues),
            (u = D(e)),
            (d.secondTenths = u[0]),
            (d.seconds = u[1]),
            (d.minutes = u[2]),
            (d.hours = u[3]),
            (d.days = u[4]),
            (l = L(u, l)))
          : (u = null),
        (a = j()),
        A(),
        (s =
          "object" === C(t.target)
            ? V(t.target)
            : c
            ? ((t.target = { seconds: 0 }), V(t.target))
            : null),
        (m = {
          precision: n,
          callback: r,
          countdown: "object" === C(t) && !0 === t.countdown,
          target: s,
          startValues: u,
        }),
        (i = t);
    }
    function D(t) {
      var e;
      if ("object" === C(t))
        if (t instanceof Array) {
          if (5 !== t.length) throw new Error("Array size not valid");
          e = t;
        } else {
          for (var n in t)
            if (N.indexOf(n) < 0)
              throw new Error(
                "Error in startValues or target parameter: ".concat(
                  n,
                  " is not a valid input value"
                )
              );
          e = [
            t.secondTenths || 0,
            t.seconds || 0,
            t.minutes || 0,
            t.hours || 0,
            t.days || 0,
          ];
        }
      var r = e[0],
        o = e[1] + x(r, 10),
        i = e[2] + x(o, 60),
        s = e[3] + x(i, 60),
        u = e[4] + x(s, 24);
      return (
        (e[0] = r % 10),
        (e[1] = o % 60),
        (e[2] = i % 60),
        (e[3] = s % 24),
        (e[4] = u),
        e
      );
    }
    function x(t, e) {
      var n = t / e;
      return n < 0 ? Math.ceil(n) : Math.floor(n);
    }
    function V(t) {
      if (t) {
        var e = L((s = D(t)));
        return (f = a + e.secondTenths * Q[F] * o), s;
      }
    }
    function L(t, e) {
      var n = e || {};
      return (
        (n.days = t[4]),
        (n.hours = 24 * n.days + t[3]),
        (n.minutes = 60 * n.hours + t[2]),
        (n.seconds = 60 * n.minutes + t[1]),
        (n.secondTenths = 10 * n.seconds + t[[0]]),
        n
      );
    }
    function U() {
      t(), I("stopped", g);
    }
    function k(t, e) {
      p.on(t, e);
    }
    function M(t, e) {
      p.removeListener(t, e);
    }
    function I(t, e) {
      p.emit(t, e);
    }
    function _() {
      return v;
    }
    function z() {
      return y;
    }
    S(h),
      void 0 !== this &&
        ((this.start = function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          (t = R(R({}, h), t)), _() || (O(t), I("started", g));
        }),
        (this.pause = function () {
          w(), (y = !0), I("paused", g);
        }),
        (this.stop = U),
        (this.reset = function () {
          t(), O(i), I("reset", g);
        }),
        (this.isRunning = _),
        (this.isPaused = z),
        (this.getTimeValues = function () {
          return d;
        }),
        (this.getTotalTimeValues = function () {
          return l;
        }),
        (this.getConfig = function () {
          return m;
        }),
        (this.addEventListener = k),
        (this.on = k),
        (this.removeEventListener = M),
        (this.off = M));
  }
  (t.Timer = n),
    (t.default = n),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
