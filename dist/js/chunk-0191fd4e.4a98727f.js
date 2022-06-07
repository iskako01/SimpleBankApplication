(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-0191fd4e"],
  {
    2532: function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        c = n("e330"),
        a = n("5a34"),
        u = n("1d80"),
        o = n("577e"),
        l = n("ab13"),
        i = c("".indexOf);
      r(
        { target: "String", proto: !0, forced: !l("includes") },
        {
          includes: function (e) {
            return !!~i(
              o(u(this)),
              o(a(e)),
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
        }
      );
    },
    3206: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var r = new Intl.NumberFormat("en-En", {
        currency: "USD",
        style: "currency",
      });
      function c(e) {
        return r.format(e);
      }
    },
    "3a5e": function (e, t, n) {
      "use strict";
      var r = n("7a23"),
        c = { class: "loader" };
      function a(e, t, n, a, u, o) {
        return Object(r["y"])(), Object(r["g"])("div", c);
      }
      var u = Object(r["l"])({}),
        o = n("6b0d"),
        l = n.n(o);
      const i = l()(u, [["render", a]]);
      t["a"] = i;
    },
    "44e7": function (e, t, n) {
      var r = n("861d"),
        c = n("c6b6"),
        a = n("b622"),
        u = a("match");
      e.exports = function (e) {
        var t;
        return r(e) && (void 0 !== (t = e[u]) ? !!t : "RegExp" == c(e));
      };
    },
    "490b": function (e, t, n) {
      "use strict";
      var r = n("7a23");
      function c(e, t, n, c, a, u) {
        return (
          Object(r["y"])(),
          Object(r["g"])(
            "span",
            { class: Object(r["s"])(["badge", e.className]) },
            Object(r["I"])(e.text),
            3
          )
        );
      }
      var a = Object(r["l"])({
          name: "AppStatus",
          props: { type: { type: String, required: !0 } },
          setup: function (e) {
            var t = {
                active: "primary",
                cancelled: "danger",
                done: "primary",
                pending: "warning",
              },
              n = {
                active: "Active",
                cancelled: "Cancelled",
                done: "Done",
                pending: "Warning",
              },
              c = Object(r["C"])(t[e.type]),
              a = Object(r["C"])(n[e.type]);
            return (
              Object(r["O"])(e, function (e) {
                (c.value = t[e.type]), (a.value = n[e.type]);
              }),
              { className: c, text: a }
            );
          },
        }),
        u = n("6b0d"),
        o = n.n(u);
      const l = o()(a, [["render", c]]);
      t["a"] = l;
    },
    "5a34": function (e, t, n) {
      var r = n("da84"),
        c = n("44e7"),
        a = r.TypeError;
      e.exports = function (e) {
        if (c(e)) throw a("The method doesn't accept regular expressions");
        return e;
      };
    },
    ab13: function (e, t, n) {
      var r = n("b622"),
        c = r("match");
      e.exports = function (e) {
        var t = /./;
        try {
          "/./"[e](t);
        } catch (n) {
          try {
            return (t[c] = !1), "/./"[e](t);
          } catch (r) {}
        }
        return !1;
      };
    },
    bb51: function (e, t, n) {
      "use strict";
      n.r(t);
      n("4de4"), n("d3b7");
      var r = n("7a23");
      function c(e, t, n, c, a, u) {
        var o = Object(r["F"])("Loading"),
          l = Object(r["F"])("RequestFilter"),
          i = Object(r["F"])("RequestTable"),
          s = Object(r["F"])("RequestModal"),
          b = Object(r["F"])("AppModal"),
          O = Object(r["F"])("AppPage");
        return e.loading
          ? (Object(r["y"])(), Object(r["e"])(o, { key: 0 }))
          : (Object(r["y"])(),
          Object(r["e"])(
            O,
            { key: 1, title: "List of requests" },
            {
              header: Object(r["Q"])(function () {
                return [
                  Object(r["h"])(
                    "button",
                    {
                      class: "btn primary",
                      onClick:
                          t[0] ||
                          (t[0] = function (t) {
                            return (e.modal = !0);
                          }),
                    },
                    "Create"
                  ),
                ];
              }),
              default: Object(r["Q"])(function () {
                return [
                  Object(r["k"])(
                    l,
                    {
                      modelValue: e.filter,
                      "onUpdate:modelValue":
                          t[1] ||
                          (t[1] = function (t) {
                            return (e.filter = t);
                          }),
                    },
                    null,
                    8,
                    ["modelValue"]
                  ),
                  Object(r["k"])(i, { requests: e.requests }, null, 8, [
                    "requests",
                  ]),
                  (Object(r["y"])(),
                  Object(r["e"])(r["b"], { to: "body" }, [
                    e.modal
                      ? (Object(r["y"])(),
                      Object(r["e"])(
                        b,
                        {
                          key: 0,
                          title: "Create the request",
                          onClose: e.close,
                        },
                        {
                          default: Object(r["Q"])(function () {
                            return [
                              Object(r["k"])(s, {
                                onCreated:
                                      t[2] ||
                                      (t[2] = function (t) {
                                        return (e.modal = !1);
                                      }),
                              }),
                            ];
                          }),
                          _: 1,
                        },
                        8,
                        ["onClose"]
                      ))
                      : Object(r["f"])("", !0),
                  ])),
                ];
              }),
              _: 1,
            }
          ));
      }
      var a = n("1da1"),
        u = (n("96cf"), n("b0c0"), n("caad"), n("2532"), n("5502")),
        o = n("d97b"),
        l = { key: 0, class: "text-center" },
        i = { key: 1, class: "table" },
        s = Object(r["h"])(
          "thead",
          null,
          [
            Object(r["h"])("tr", null, [
              Object(r["h"])("th", null, "#"),
              Object(r["h"])("th", null, "Name"),
              Object(r["h"])("th", null, "Phone"),
              Object(r["h"])("th", null, "Amount"),
              Object(r["h"])("th", null, "Status"),
              Object(r["h"])("th", null, "Action"),
            ]),
          ],
          -1
        ),
        b = ["onClick"];
      function O(e, t, n, c, a, u) {
        var o = Object(r["F"])("AppStatus"),
          O = Object(r["F"])("router-link");
        return e.requests.length
          ? (Object(r["y"])(),
          Object(r["g"])("table", i, [
            s,
            Object(r["h"])("tbody", null, [
              (Object(r["y"])(!0),
              Object(r["g"])(
                r["a"],
                null,
                Object(r["D"])(e.requests, function (t, n) {
                  return (
                    Object(r["y"])(),
                    Object(r["g"])("tr", { key: n }, [
                      Object(r["h"])("td", null, Object(r["I"])(n + 1), 1),
                      Object(r["h"])("td", null, Object(r["I"])(t.name), 1),
                      Object(r["h"])("td", null, Object(r["I"])(t.phone), 1),
                      Object(r["h"])(
                        "td",
                        null,
                        Object(r["I"])(e.currency(t.amount)),
                        1
                      ),
                      Object(r["h"])("td", null, [
                        Object(r["k"])(o, { type: t.status }, null, 8, [
                          "type",
                        ]),
                      ]),
                      Object(r["h"])("td", null, [
                        Object(r["k"])(
                          O,
                          {
                            custom: "",
                            to: { name: "Request", params: { id: t.id } },
                          },
                          {
                            default: Object(r["Q"])(function (e) {
                              var t = e.navigate;
                              return [
                                Object(r["h"])(
                                  "button",
                                  { class: "btn", onClick: t },
                                  "Open",
                                  8,
                                  b
                                ),
                              ];
                            }),
                            _: 2,
                          },
                          1032,
                          ["to"]
                        ),
                      ]),
                    ])
                  );
                }),
                128
              )),
            ]),
          ]))
          : (Object(r["y"])(),
          Object(r["g"])("h4", l, " There are no requests yet. "));
      }
      var d = n("3206"),
        j = n("490b"),
        p = Object(r["l"])({
          components: { AppStatus: j["a"] },
          props: { requests: { type: Object, required: !0 } },
          setup: function () {
            return { currency: d["a"] };
          },
        }),
        m = n("6b0d"),
        f = n.n(m);
      const h = f()(p, [["render", O]]);
      var v = h,
        y = Object(r["h"])("label", { for: "name" }, "Name", -1),
        g = { key: 0 },
        k = Object(r["h"])("label", { for: "phone" }, "Phone", -1),
        q = { key: 0 },
        S = Object(r["h"])("label", { for: "cost" }, "Amount", -1),
        B = { key: 0 },
        E = { class: "form-control" },
        C = Object(r["h"])("label", { for: "status" }, "Status", -1),
        R = Object(r["h"])("option", { value: "done" }, "Done", -1),
        A = Object(r["h"])("option", { value: "cancelled" }, "Cancelled", -1),
        w = Object(r["h"])("option", { value: "active" }, "Active", -1),
        x = Object(r["h"])("option", { value: "pending" }, "Pending", -1),
        F = [R, A, w, x],
        M = ["disabled"];
      function V(e, t, n, c, a, u) {
        return (
          Object(r["y"])(),
          Object(r["g"])(
            "form",
            {
              onSubmit:
                t[7] ||
                (t[7] = Object(r["S"])(
                  function () {
                    return (
                      e.requestFormSubmit &&
                      e.requestFormSubmit.apply(e, arguments)
                    );
                  },
                  ["prevent"]
                )),
            },
            [
              Object(r["h"])(
                "div",
                {
                  class: Object(r["s"])([
                    "form-control",
                    { invalid: e.nError },
                  ]),
                },
                [
                  y,
                  Object(r["R"])(
                    Object(r["h"])(
                      "input",
                      {
                        type: "text",
                        id: "name",
                        "onUpdate:modelValue":
                          t[0] ||
                          (t[0] = function (t) {
                            return (e.name = t);
                          }),
                        onBlur:
                          t[1] ||
                          (t[1] = function () {
                            return e.nBlur && e.nBlur.apply(e, arguments);
                          }),
                      },
                      null,
                      544
                    ),
                    [[r["M"], e.name]]
                  ),
                  e.nError
                    ? (Object(r["y"])(),
                    Object(r["g"])("small", g, Object(r["I"])(e.nError), 1))
                    : Object(r["f"])("", !0),
                ],
                2
              ),
              Object(r["h"])(
                "div",
                {
                  class: Object(r["s"])([
                    "form-control",
                    { invalid: e.pError },
                  ]),
                },
                [
                  k,
                  Object(r["R"])(
                    Object(r["h"])(
                      "input",
                      {
                        type: "text",
                        id: "phone",
                        "onUpdate:modelValue":
                          t[2] ||
                          (t[2] = function (t) {
                            return (e.phone = t);
                          }),
                        onBlur:
                          t[3] ||
                          (t[3] = function () {
                            return e.pBlur && e.pBlur.apply(e, arguments);
                          }),
                      },
                      null,
                      544
                    ),
                    [[r["M"], e.phone]]
                  ),
                  e.pError
                    ? (Object(r["y"])(),
                    Object(r["g"])("small", q, Object(r["I"])(e.pError), 1))
                    : Object(r["f"])("", !0),
                ],
                2
              ),
              Object(r["h"])(
                "div",
                {
                  class: Object(r["s"])([
                    "form-control",
                    { invalid: e.aError },
                  ]),
                },
                [
                  S,
                  Object(r["R"])(
                    Object(r["h"])(
                      "input",
                      {
                        type: "text",
                        id: "cost",
                        "onUpdate:modelValue":
                          t[4] ||
                          (t[4] = function (t) {
                            return (e.amount = t);
                          }),
                        onBlur:
                          t[5] ||
                          (t[5] = function () {
                            return e.aBlur && e.aBlur.apply(e, arguments);
                          }),
                      },
                      null,
                      544
                    ),
                    [[r["M"], e.amount]]
                  ),
                  e.aError
                    ? (Object(r["y"])(),
                    Object(r["g"])("small", B, Object(r["I"])(e.aError), 1))
                    : Object(r["f"])("", !0),
                ],
                2
              ),
              Object(r["h"])("div", E, [
                C,
                Object(r["R"])(
                  Object(r["h"])(
                    "select",
                    {
                      id: "status",
                      "onUpdate:modelValue":
                        t[6] ||
                        (t[6] = function (t) {
                          return (e.status = t);
                        }),
                    },
                    F,
                    512
                  ),
                  [[r["L"], e.status]]
                ),
              ]),
              Object(r["h"])(
                "button",
                { class: "btn primary", disabled: e.isSubmitting },
                "Create",
                8,
                M
              ),
            ],
            32
          )
        );
      }
      n("498a");
      var I = n("7bb1"),
        U = n("506a");
      function P(e) {
        var t = Object(I["b"])({ initialValues: { status: "active" } }),
          n = t.isSubmitting,
          r = t.handleSubmit,
          c = Object(I["a"])("name", U["b"]().trim().required()),
          a = c.value,
          u = c.errorMessage,
          o = c.handleBlur,
          l = Object(I["a"])("phone", U["b"]().trim().required()),
          i = l.value,
          s = l.errorMessage,
          b = l.handleBlur,
          O = Object(I["a"])(
            "amount",
            U["a"]().required().min(0, "The amount can't be less then 0")
          ),
          d = O.value,
          j = O.errorMessage,
          p = O.handleBlur,
          m = Object(I["a"])("status"),
          f = m.value,
          h = r(e);
        return {
          status: f,
          isSubmitting: n,
          requestFormSubmit: h,
          name: a,
          nBlur: o,
          nError: u,
          phone: i,
          pBlur: b,
          pError: s,
          amount: d,
          aBlur: p,
          aError: j,
        };
      }
      var T = Object(r["l"])({
        name: "RequestModal",
        emits: ["created"],
        setup: function (e, t) {
          var n = t.emit,
            r = Object(u["b"])(),
            c = (function () {
              var e = Object(a["a"])(
                regeneratorRuntime.mark(function e(t) {
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            console.log(t),
                            (e.next = 3),
                            r.dispatch("create", t)
                          );
                        case 3:
                          n("created");
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            o = P(c),
            l = o.status,
            i = o.isSubmitting,
            s = o.requestFormSubmit,
            b = o.name,
            O = o.nBlur,
            d = o.nError,
            j = o.phone,
            p = o.pBlur,
            m = o.pError,
            f = o.amount,
            h = o.aBlur,
            v = o.aError;
          return {
            status: l,
            isSubmitting: i,
            requestFormSubmit: s,
            name: b,
            nBlur: O,
            nError: d,
            phone: j,
            pBlur: p,
            pError: m,
            amount: f,
            aBlur: h,
            aError: v,
          };
        },
      });
      const D = f()(T, [["render", V]]);
      var L = D,
        N = { class: "filter" },
        Q = { class: "form-control" },
        $ = { class: "form-control" },
        _ = Object(r["i"])(
          '<option disabled selected>Select status</option><option value="done">Done</option><option value="cancelled">Cancelled</option><option value="active">Active</option><option value="pending">Pending</option>',
          5
        ),
        J = [_];
      function H(e, t, n, c, a, u) {
        return (
          Object(r["y"])(),
          Object(r["g"])("div", N, [
            Object(r["h"])("div", Q, [
              Object(r["R"])(
                Object(r["h"])(
                  "input",
                  {
                    type: "text",
                    placeholder: "Search...",
                    "onUpdate:modelValue":
                      t[0] ||
                      (t[0] = function (t) {
                        return (e.name = t);
                      }),
                  },
                  null,
                  512
                ),
                [[r["M"], e.name]]
              ),
            ]),
            Object(r["h"])("div", $, [
              Object(r["R"])(
                Object(r["h"])(
                  "select",
                  {
                    id: "status",
                    "onUpdate:modelValue":
                      t[1] ||
                      (t[1] = function (t) {
                        return (e.status = t);
                      }),
                  },
                  J,
                  512
                ),
                [[r["L"], e.status]]
              ),
            ]),
            e.isActive
              ? (Object(r["y"])(),
              Object(r["g"])(
                "button",
                {
                  key: 0,
                  class: "btn warning",
                  onClick:
                      t[2] ||
                      (t[2] = function () {
                        return e.reset && e.reset.apply(e, arguments);
                      }),
                },
                "Clear"
              ))
              : Object(r["f"])("", !0),
          ])
        );
      }
      var W = Object(r["l"])({
        name: "AppStatus",
        props: ["modelValue"],
        emits: ["update:modelValue"],
        setup: function (e, t) {
          var n = t.emit,
            c = Object(r["C"])(""),
            a = Object(r["C"])("");
          Object(r["O"])([c, a], function (e) {
            n("update:modelValue", { name: e[0], status: e[1] });
          });
          var u = Object(r["c"])(function () {
              return c.value || a.value;
            }),
            o = function () {
              (c.value = ""), (a.value = null);
            };
          return { name: c, status: a, isActive: u, reset: o };
        },
      });
      const z = f()(W, [["render", H]]);
      var G = z,
        K = n("3a5e"),
        X = { class: "modal" },
        Y = { key: 0 };
      function Z(e, t, n, c, a, u) {
        return (
          Object(r["y"])(),
          Object(r["g"])(
            r["a"],
            null,
            [
              Object(r["h"])("div", {
                class: "modal-backdrop",
                onClick:
                  t[0] ||
                  (t[0] = function (t) {
                    return e.$emit("close");
                  }),
              }),
              Object(r["h"])("div", X, [
                e.title
                  ? (Object(r["y"])(),
                  Object(r["g"])("h3", Y, Object(r["I"])(e.title), 1))
                  : Object(r["f"])("", !0),
                Object(r["E"])(e.$slots, "default"),
              ]),
            ],
            64
          )
        );
      }
      var ee = Object(r["l"])({
        name: "AppModal",
        emits: ["close"],
        props: { title: { type: String } },
      });
      const te = f()(ee, [["render", Z]]);
      var ne = te,
        re = Object(r["l"])({
          components: {
            AppPage: o["a"],
            RequestTable: v,
            AppModal: ne,
            RequestModal: L,
            Loading: K["a"],
            RequestFilter: G,
          },
          setup: function () {
            var e = Object(r["C"])(!1),
              t = Object(r["C"])(!1),
              n = Object(u["b"])(),
              c = Object(r["C"])({ name: "", status: "" }),
              o = Object(r["c"])(function () {
                return n.getters.requests
                  .filter(function (e) {
                    return c.value.name ? e.name.includes(c.value.name) : e;
                  })
                  .filter(function (e) {
                    return c.value.status ? c.value.status === e.status : e;
                  });
              }),
              l = function () {
                e.value = !1;
              };
            return (
              Object(r["w"])(
                Object(a["a"])(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t.value = !0), (e.next = 3), n.dispatch("load")
                            );
                          case 3:
                            t.value = !1;
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )
              ),
              { requests: o, modal: e, close: l, loading: t, filter: c }
            );
          },
        });
      const ce = f()(re, [["render", c]]);
      t["default"] = ce;
    },
    caad: function (e, t, n) {
      "use strict";
      var r = n("23e7"),
        c = n("4d64").includes,
        a = n("44d2");
      r(
        { target: "Array", proto: !0 },
        {
          includes: function (e) {
            return c(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
      a("includes");
    },
    d97b: function (e, t, n) {
      "use strict";
      var r = n("7a23"),
        c = { key: 0, class: "breadcrumbs" },
        a = Object(r["j"])("Back"),
        u = { class: "card" },
        o = { class: "card-title" };
      function l(e, t, n, l, i, s) {
        var b = Object(r["F"])("router-link");
        return (
          Object(r["y"])(),
          Object(r["g"])(
            r["a"],
            null,
            [
              e.back
                ? (Object(r["y"])(),
                Object(r["g"])("div", c, [
                  Object(r["k"])(
                    b,
                    { class: "btn", to: { name: "Home" } },
                    {
                      default: Object(r["Q"])(function () {
                        return [a];
                      }),
                      _: 1,
                    }
                  ),
                ]))
                : Object(r["f"])("", !0),
              Object(r["h"])("div", u, [
                Object(r["h"])("h1", o, [
                  Object(r["j"])(Object(r["I"])(e.title) + " ", 1),
                  Object(r["E"])(e.$slots, "header"),
                ]),
                Object(r["E"])(e.$slots, "default"),
              ]),
            ],
            64
          )
        );
      }
      var i = Object(r["l"])({
          props: {
            title: { type: String, required: !0 },
            back: { type: Boolean, required: !1, default: !1 },
          },
          setup: function (e) {
            return (document.title = "".concat(e.title, " | Online Bank")), {};
          },
        }),
        s = n("6b0d"),
        b = n.n(s);
      const O = b()(i, [["render", l]]);
      t["a"] = O;
    },
  },
]);
//# sourceMappingURL=chunk-0191fd4e.4a98727f.js.map
