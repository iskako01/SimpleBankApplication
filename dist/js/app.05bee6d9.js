(function (e) {
  function t(t) {
    for (
      var r, o, s = t[0], u = t[1], i = t[2], l = 0, b = [];
      l < s.length;
      l++
    )
      (o = s[l]),
        Object.prototype.hasOwnProperty.call(a, o) && a[o] && b.push(a[o][0]),
        (a[o] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    p && p(t);
    while (b.length) b.shift()();
    return c.push.apply(c, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], r = !0, o = 1; o < n.length; o++) {
        var u = n[o];
        0 !== a[u] && (r = !1);
      }
      r && (c.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = { app: 0 },
    c = [];
  function o(e) {
    return (
      s.p +
      "js/" +
      ({}[e] || e) +
      "." +
      {
        "chunk-2d0b215a": "364c68dd",
        "chunk-38b82198": "f078bb4b",
        "chunk-6000e56e": "6a92b20c",
        "chunk-0191fd4e": "4a98727f",
        "chunk-2d0be70b": "fde059c0",
        "chunk-96411e36": "4854012d",
      }[e] +
      ".js"
    );
  }
  function s(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.e = function (e) {
    var t = [],
      n = a[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var r = new Promise(function (t, r) {
          n = a[e] = [t, r];
        });
        t.push((n[2] = r));
        var c,
          u = document.createElement("script");
        (u.charset = "utf-8"),
          (u.timeout = 120),
          s.nc && u.setAttribute("nonce", s.nc),
          (u.src = o(e));
        var i = new Error();
        c = function (t) {
          (u.onerror = u.onload = null), clearTimeout(l);
          var n = a[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                c = t && t.target && t.target.src;
              (i.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + c + ")"),
                (i.name = "ChunkLoadError"),
                (i.type = r),
                (i.request = c),
                n[1](i);
            }
            a[e] = void 0;
          }
        };
        var l = setTimeout(function () {
          c({ type: "timeout", target: u });
        }, 12e4);
        (u.onerror = u.onload = c), document.head.appendChild(u);
      }
    return Promise.all(t);
  }),
    (s.m = e),
    (s.c = r),
    (s.d = function (e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          s.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "/SimpleBankApplication/"),
    (s.oe = function (e) {
      throw (console.error(e), e);
    });
  var u = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    i = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var l = 0; l < u.length; l++) t(u[l]);
  var p = i;
  c.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("cd49");
  },
  "441a": function (e, t, n) {},
  "7cfa": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    var r = {
      EMAIL_NOT_FOUND: "No user with this email was found",
      INVALID_PASSWORD: "Incorrect email address or password",
      auth: "Please log in.",
    };
    function a(e) {
      return r[e] ? r[e] : "unknown error";
    }
  },
  cd49: function (e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var r = n("7a23");
    function a(e, t, n, a, c, o) {
      return e.layout
        ? (Object(r["y"])(),
          Object(r["e"])(Object(r["G"])(e.layout + "-layout"), { key: 0 }))
        : Object(r["f"])("", !0);
    }
    var c = n("6c02"),
      o = { class: "container with-nav" };
    function s(e, t, n, a, c, s) {
      var u = Object(r["F"])("Navbar"),
        i = Object(r["F"])("Sidebar"),
        l = Object(r["F"])("AppMessages"),
        p = Object(r["F"])("router-view");
      return (
        Object(r["y"])(),
        Object(r["g"])(
          r["a"],
          null,
          [
            Object(r["k"])(u),
            Object(r["k"])(i),
            Object(r["h"])("div", o, [Object(r["k"])(l), Object(r["k"])(p)]),
          ],
          64
        )
      );
    }
    var u = { class: "navbar" },
      i = Object(r["j"])("Online Bank"),
      l = { class: "navbar-menu" },
      p = Object(r["j"])("Requests"),
      b = Object(r["j"])("Help");
    function d(e, t, n, a, c, o) {
      var s = Object(r["F"])("router-link");
      return (
        Object(r["y"])(),
        Object(r["g"])("nav", u, [
          Object(r["k"])(
            s,
            { to: { name: "Home" } },
            {
              default: Object(r["Q"])(function () {
                return [i];
              }),
              _: 1,
            }
          ),
          Object(r["h"])("ul", l, [
            Object(r["h"])("li", null, [
              Object(r["k"])(
                s,
                { to: { name: "Home" } },
                {
                  default: Object(r["Q"])(function () {
                    return [p];
                  }),
                  _: 1,
                }
              ),
            ]),
            Object(r["h"])("li", null, [
              Object(r["k"])(
                s,
                { to: { name: "Help" } },
                {
                  default: Object(r["Q"])(function () {
                    return [b];
                  }),
                  _: 1,
                }
              ),
            ]),
            Object(r["h"])("li", null, [
              Object(r["h"])(
                "a",
                {
                  onClick:
                    t[0] ||
                    (t[0] = Object(r["S"])(
                      function () {
                        return (
                          e.openSidebar && e.openSidebar.apply(e, arguments)
                        );
                      },
                      ["prevent"]
                    )),
                  href: "#",
                },
                "Messages"
              ),
            ]),
            Object(r["h"])("li", null, [
              Object(r["h"])(
                "a",
                {
                  href: "#",
                  onClick:
                    t[1] ||
                    (t[1] = Object(r["S"])(
                      function () {
                        return e.logout && e.logout.apply(e, arguments);
                      },
                      ["prevent"]
                    )),
                },
                "Logout"
              ),
            ]),
          ]),
        ])
      );
    }
    var f = n("5502"),
      h = Object(r["l"])({
        setup: function () {
          var e = Object(f["b"])(),
            t = Object(c["d"])(),
            n = function () {
              e.commit("openSidebar");
            },
            r = function () {
              e.commit("logout"), t.push({ name: "Auth" });
            };
          return { logout: r, openSidebar: n };
        },
      }),
      m = n("6b0d"),
      j = n.n(m);
    const g = j()(h, [["render", d]]);
    var v = g,
      O = { key: 0, class: "sidebar" },
      k = Object(r["h"])(
        "div",
        { class: "sidebar-content" },
        [
          Object(r["h"])(
            "p",
            null,
            " Welcome to the application accounting system at our bank.You will find complete information about the system and requests here. "
          ),
        ],
        -1
      );
    function y(e, t, n, a, c, o) {
      return e.sidebar
        ? (Object(r["y"])(),
          Object(r["g"])("div", O, [
            Object(r["h"])(
              "span",
              {
                class: "sidebar-close",
                onClick:
                  t[0] ||
                  (t[0] = function () {
                    return e.closeSidebar && e.closeSidebar.apply(e, arguments);
                  }),
              },
              "×"
            ),
            k,
          ]))
        : Object(r["f"])("", !0);
    }
    var w = Object(r["l"])({
      setup: function () {
        var e = Object(f["b"])(),
          t = Object(r["c"])(function () {
            return e.state.sidebar;
          }),
          n = function () {
            e.commit("closeSidebar");
          };
        return { closeSidebar: n, sidebar: t };
      },
    });
    const M = j()(w, [["render", y]]);
    var S = M,
      q = { class: "alert-title" };
    function x(e, t, n, a, c, o) {
      return e.message
        ? (Object(r["y"])(),
          Object(r["g"])(
            "div",
            { key: 0, class: Object(r["s"])(["alert", e.message.type]) },
            [
              Object(r["h"])("p", q, Object(r["I"])(e.useTitle), 1),
              Object(r["h"])("p", null, Object(r["I"])(e.message.value), 1),
              Object(r["h"])(
                "span",
                {
                  class: "alert-close",
                  onClick:
                    t[0] ||
                    (t[0] = function () {
                      return e.close && e.close.apply(e, arguments);
                    }),
                },
                "×"
              ),
            ],
            2
          ))
        : Object(r["f"])("", !0);
    }
    var R = Object(r["l"])({
      name: "AppMessage",
      setup: function () {
        var e = Object(f["b"])(),
          t = { primary: "Success!", danger: "Error!", warning: "Warning!" },
          n = Object(r["c"])(function () {
            return t[a.value.type];
          }),
          a = Object(r["c"])(function () {
            return e.state.message;
          }),
          c = function () {
            e.commit("clearMessage");
          };
        return { message: a, useTitle: n, close: c };
      },
    });
    const A = j()(R, [["render", x]]);
    var P = A,
      T = Object(r["l"])({
        components: { Navbar: v, AppMessages: P, Sidebar: S },
        setup: function () {
          return {};
        },
      });
    const I = j()(T, [["render", s]]);
    var _ = I,
      C = { class: "container" };
    function E(e, t, n, a, c, o) {
      var s = Object(r["F"])("AppMessages"),
        u = Object(r["F"])("router-view");
      return (
        Object(r["y"])(),
        Object(r["g"])("div", C, [Object(r["k"])(s), Object(r["k"])(u)])
      );
    }
    var F = Object(r["l"])({
      components: { AppMessages: P },
      setup: function () {
        return {};
      },
    });
    const L = j()(F, [["render", E]]);
    var H = L,
      N = Object(r["l"])({
        components: { MainLayout: _, AuthLayout: H },
        setup: function () {
          var e = Object(c["c"])(),
            t = Object(r["c"])(function () {
              return e.meta.layout;
            });
          return console.log(t), { layout: t };
        },
      });
    const D = j()(N, [["render", a]]);
    var B = D,
      Q = (n("d3b7"), n("3ca3"), n("ddb0"), n("1da1")),
      W = (n("96cf"), n("5530")),
      J = (n("d9e2"), n("bc3a")),
      z = n.n(J),
      G = n("7cfa"),
      U = "jwt-token",
      V = {
        namespace: !1,
        state: function () {
          return { token: localStorage.getItem(U) };
        },
        getters: {
          token: function (e) {
            return e.token;
          },
          isAuthenticated: function (e, t) {
            return !!t.token;
          },
        },
        mutations: {
          setToken: function (e, t) {
            (e.token = t), localStorage.setItem(U, t);
          },
          logout: function (e) {
            (e.token = null), localStorage.removeItem(U);
          },
        },
        actions: {
          login: function (e, t) {
            return Object(Q["a"])(
              regeneratorRuntime.mark(function n() {
                var r, a, c, o, s;
                return regeneratorRuntime.wrap(
                  function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (r = e.commit),
                            (a = e.dispatch),
                            (n.prev = 1),
                            (c =
                              "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(
                                "AIzaSyDIxPQsmJPjnZofjwGzHT7CigT7VMsx1Eg"
                              )),
                            (n.next = 5),
                            z.a.post(
                              c,
                              Object(W["a"])(
                                Object(W["a"])({}, t),
                                {},
                                { returnSecureToken: !0 }
                              )
                            )
                          );
                        case 5:
                          (o = n.sent),
                            (s = o.data),
                            r("setToken", s.idToken),
                            r("clearMessage", null, { root: !0 }),
                            (n.next = 15);
                          break;
                        case 11:
                          throw (
                            ((n.prev = 11),
                            (n.t0 = n["catch"](1)),
                            a(
                              "setMessage",
                              {
                                value: Object(G["a"])(
                                  n.t0.response.data.error.message
                                ),
                                type: "danger",
                              },
                              { root: !0 }
                            ),
                            new Error())
                          );
                        case 15:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 11]]
                );
              })
            )();
          },
        },
      },
      Y =
        (n("b0c0"),
        n("d81d"),
        n("b64b"),
        n("99af"),
        z.a.create({
          baseURL: "https://simplebankapplication-default-rtdb.firebaseio.com/",
        }));
    Y.interceptors.response.use(void 0, function (e) {
      return (
        (e.response.status = 401) && te.push("/auth?message=auth"),
        Promise.reject(e)
      );
    });
    var Z = Y,
      K = {
        namespace: !1,
        state: function () {
          return { requests: [] };
        },
        getters: {
          requests: function (e) {
            return e.requests;
          },
        },
        mutations: {
          setRequests: function (e, t) {
            e.requests = t;
          },
          addRequest: function (e, t) {
            console.log(t), console.log(e.requests), e.requests.push(t);
          },
          setRequest: function (e, t) {
            e.requests = t;
          },
        },
        actions: {
          create: function (e, t) {
            return Object(Q["a"])(
              regeneratorRuntime.mark(function n() {
                var r, a, c, o, s;
                return regeneratorRuntime.wrap(
                  function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (r = e.commit),
                            (a = e.dispatch),
                            (n.prev = 1),
                            (c = X.getters.token),
                            (n.next = 5),
                            Z.post("/requests.json?auth=".concat(c), t)
                          );
                        case 5:
                          (o = n.sent),
                            (s = o.data),
                            r(
                              "addRequest",
                              Object(W["a"])(
                                Object(W["a"])({}, t),
                                {},
                                { id: s.name }
                              )
                            ),
                            a(
                              "setMessage",
                              {
                                value:
                                  "The request has been successfully created!",
                                type: "primary",
                              },
                              { root: !0 }
                            ),
                            (n.next = 14);
                          break;
                        case 11:
                          (n.prev = 11),
                            (n.t0 = n["catch"](1)),
                            a(
                              "setMessage",
                              { value: n.t0, type: "danger" },
                              { root: !0 }
                            );
                        case 14:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 11]]
                );
              })
            )();
          },
          load: function (e) {
            return Object(Q["a"])(
              regeneratorRuntime.mark(function t() {
                var n, r, a, c, o, s;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = e.commit),
                            (r = e.dispatch),
                            (t.prev = 1),
                            (a = X.getters.token),
                            (t.next = 5),
                            Z.get("/requests.json?auth=".concat(a))
                          );
                        case 5:
                          (c = t.sent),
                            (o = c.data),
                            (s = Object.keys(o).map(function (e) {
                              return Object(W["a"])(
                                Object(W["a"])({}, o[e]),
                                {},
                                { id: e }
                              );
                            })),
                            n("setRequest", s),
                            (t.next = 14);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t["catch"](1)),
                            r(
                              "setMessage",
                              { value: t.t0, type: "danger" },
                              { root: !0 }
                            );
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 11]]
                );
              })
            )();
          },
          loadByID: function (e, t) {
            return Object(Q["a"])(
              regeneratorRuntime.mark(function n() {
                var r, a, c, o;
                return regeneratorRuntime.wrap(
                  function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (r = e.dispatch),
                            (n.prev = 1),
                            (a = X.getters.token),
                            (n.next = 5),
                            Z.get(
                              "/requests/".concat(t, ".json?auth=").concat(a)
                            )
                          );
                        case 5:
                          return (
                            (c = n.sent), (o = c.data), n.abrupt("return", o)
                          );
                        case 10:
                          (n.prev = 10),
                            (n.t0 = n["catch"](1)),
                            r(
                              "setMessage",
                              { value: n.t0, type: "danger" },
                              { root: !0 }
                            );
                        case 13:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 10]]
                );
              })
            )();
          },
          remove: function (e, t) {
            return Object(Q["a"])(
              regeneratorRuntime.mark(function n() {
                var r, a;
                return regeneratorRuntime.wrap(
                  function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (r = e.dispatch),
                            (n.prev = 1),
                            (a = X.getters.token),
                            (n.next = 5),
                            Z.delete(
                              "/requests/".concat(t, ".json?auth=").concat(a)
                            )
                          );
                        case 5:
                          r(
                            "setMessage",
                            {
                              value: "The request was successfully removed",
                              type: "primary",
                            },
                            { root: !0 }
                          ),
                            (n.next = 11);
                          break;
                        case 8:
                          (n.prev = 8),
                            (n.t0 = n["catch"](1)),
                            r(
                              "setMessage",
                              { value: n.t0, type: "danger" },
                              { root: !0 }
                            );
                        case 11:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 8]]
                );
              })
            )();
          },
          update: function (e, t) {
            return Object(Q["a"])(
              regeneratorRuntime.mark(function n() {
                var r, a;
                return regeneratorRuntime.wrap(
                  function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (r = e.dispatch),
                            (n.prev = 1),
                            console.log(t),
                            (a = X.getters.token),
                            (n.next = 6),
                            Z.put(
                              "/requests/"
                                .concat(t.id, ".json?auth=")
                                .concat(a),
                              t
                            )
                          );
                        case 6:
                          r(
                            "setMessage",
                            {
                              value: "The request was successfully updated",
                              type: "primary",
                            },
                            { root: !0 }
                          ),
                            (n.next = 12);
                          break;
                        case 9:
                          (n.prev = 9),
                            (n.t0 = n["catch"](1)),
                            r(
                              "setMessage",
                              { value: n.t0, type: "danger" },
                              { root: !0 }
                            );
                        case 12:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 9]]
                );
              })
            )();
          },
        },
      };
    var X = Object(f["a"])({
        state: { message: "", sidebar: !1 },
        getters: {},
        mutations: {
          setMessage: function (e, t) {
            e.message = t;
          },
          clearMessage: function (e) {
            e.message = "";
          },
          openSidebar: function (e) {
            e.sidebar = !0;
          },
          closeSidebar: function (e) {
            e.sidebar = !1;
          },
        },
        actions: {
          setMessage: function (e, t) {
            return Object(Q["a"])(
              regeneratorRuntime.mark(function n() {
                var r;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        (r = e.commit),
                          r("setMessage", t),
                          setInterval(function () {
                            r("clearMessage");
                          }, 5e3);
                      case 3:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
        },
        modules: { auth: V, request: K },
      }),
      $ = [
        {
          path: "/",
          name: "Home",
          component: function () {
            return Promise.all([
              n.e("chunk-6000e56e"),
              n.e("chunk-0191fd4e"),
            ]).then(n.bind(null, "bb51"));
          },
          meta: { layout: "main", auth: !0 },
        },
        {
          path: "/auth",
          name: "Auth",
          component: function () {
            return Promise.all([
              n.e("chunk-6000e56e"),
              n.e("chunk-2d0be70b"),
            ]).then(n.bind(null, "2fef"));
          },
          meta: { layout: "auth", auth: !1 },
        },
        {
          path: "/requests",
          name: "Requests",
          component: function () {
            return n.e("chunk-2d0b215a").then(n.bind(null, "2336"));
          },
          meta: { layout: "main", auth: !0 },
        },
        {
          path: "/request/:id",
          name: "Request",
          component: function () {
            return n.e("chunk-96411e36").then(n.bind(null, "0728"));
          },
          meta: { layout: "main", auth: !0 },
        },
        {
          path: "/help",
          name: "Help",
          component: function () {
            return n.e("chunk-38b82198").then(n.bind(null, "c3ef"));
          },
          meta: { layout: "main", auth: !0 },
        },
      ],
      ee = Object(c["a"])({
        history: Object(c["b"])("/SimpleBankApplication/"),
        linkActiveClass: "active",
        linkExactActiveClass: "active",
        routes: $,
      });
    ee.beforeEach(function (e, t, n) {
      var r = e.meta.auth;
      r && X.getters["isAuthenticated"]
        ? n()
        : r && !X.getters["isAuthenticated"]
        ? n("/auth?message=auth")
        : n();
    });
    var te = ee;
    n("441a");
    Object(r["d"])(B).use(X).use(te).mount("#app");
  },
});
//# sourceMappingURL=app.05bee6d9.js.map
