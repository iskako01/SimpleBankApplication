(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-38b82198"],
  {
    c3ef: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n("7a23");
      function s(e, t, n, s, i, r) {
        var u = Object(c["F"])("QuestionItem"),
          a = Object(c["F"])("AppPage");
        return (
          Object(c["y"])(),
          Object(c["e"])(
            a,
            { back: "", title: "Help" },
            {
              default: Object(c["Q"])(function () {
                return [
                  (Object(c["y"])(!0),
                  Object(c["g"])(
                    c["a"],
                    null,
                    Object(c["D"])(e.questions, function (e) {
                      return (
                        Object(c["y"])(),
                        Object(c["e"])(
                          u,
                          { key: e.title, questions: e },
                          null,
                          8,
                          ["questions"]
                        )
                      );
                    }),
                    128
                  )),
                ];
              }),
              _: 1,
            }
          )
        );
      }
      var i = n("d97b"),
        r = { class: "question-title" },
        u = { key: 0, class: "question-body" };
      function a(e, t, n, s, i, a) {
        return (
          Object(c["y"])(),
          Object(c["g"])(
            "div",
            {
              class: "question",
              onClick:
                t[0] ||
                (t[0] = function (t) {
                  return (e.isOpen = !e.isOpen);
                }),
            },
            [
              Object(c["h"])("div", r, Object(c["I"])(e.questions.title), 1),
              e.isOpen
                ? (Object(c["y"])(),
                Object(c["g"])("div", u, Object(c["I"])(e.questions.text), 1))
                : Object(c["f"])("", !0),
            ]
          )
        );
      }
      var o = Object(c["l"])({
          name: "QuestionItem",
          props: { questions: { type: Object, required: !0 } },
          setup: function () {
            var e = Object(c["C"])(!1);
            return { isOpen: e };
          },
        }),
        b = n("6b0d"),
        l = n.n(b);
      const O = l()(o, [["render", a]]);
      var j = O,
        d = Object(c["l"])({
          name: "Help",
          components: { AppPage: i["a"], QuestionItem: j },
          setup: function () {
            var e = [
              {
                title: "What is in this system ?",
                text: "There is everything to see what requests a person has added ",
              },
              {
                title: "How does authorization work here? ",
                text: "All implamented through Firebase ",
              },
            ];
            return { questions: e };
          },
        });
      const p = l()(d, [["render", s]]);
      t["default"] = p;
    },
    d97b: function (e, t, n) {
      "use strict";
      var c = n("7a23"),
        s = { key: 0, class: "breadcrumbs" },
        i = Object(c["j"])("Back"),
        r = { class: "card" },
        u = { class: "card-title" };
      function a(e, t, n, a, o, b) {
        var l = Object(c["F"])("router-link");
        return (
          Object(c["y"])(),
          Object(c["g"])(
            c["a"],
            null,
            [
              e.back
                ? (Object(c["y"])(),
                Object(c["g"])("div", s, [
                  Object(c["k"])(
                    l,
                    { class: "btn", to: { name: "Home" } },
                    {
                      default: Object(c["Q"])(function () {
                        return [i];
                      }),
                      _: 1,
                    }
                  ),
                ]))
                : Object(c["f"])("", !0),
              Object(c["h"])("div", r, [
                Object(c["h"])("h1", u, [
                  Object(c["j"])(Object(c["I"])(e.title) + " ", 1),
                  Object(c["E"])(e.$slots, "header"),
                ]),
                Object(c["E"])(e.$slots, "default"),
              ]),
            ],
            64
          )
        );
      }
      var o = Object(c["l"])({
          props: {
            title: { type: String, required: !0 },
            back: { type: Boolean, required: !1, default: !1 },
          },
          setup: function (e) {
            return (document.title = "".concat(e.title, " | Online Bank")), {};
          },
        }),
        b = n("6b0d"),
        l = n.n(b);
      const O = l()(o, [["render", a]]);
      t["a"] = O;
    },
  },
]);
//# sourceMappingURL=chunk-38b82198.f078bb4b.js.map
