parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    PSZY: [
      function (require, module, exports) {},
      {
        "./files/barlow-semi-condensed-vietnamese-700-italic.woff2": [
          [
            "barlow-semi-condensed-vietnamese-700-italic.7f02a52d.woff2",
            "y1Nw",
          ],
          "y1Nw",
        ],
        "./files/barlow-semi-condensed-all-700-italic.woff": [
          ["barlow-semi-condensed-all-700-italic.7c845709.woff", "r1Dq"],
          "r1Dq",
        ],
        "./files/barlow-semi-condensed-latin-ext-700-italic.woff2": [
          ["barlow-semi-condensed-latin-ext-700-italic.bd13e4ef.woff2", "ZkGL"],
          "ZkGL",
        ],
        "./files/barlow-semi-condensed-latin-700-italic.woff2": [
          ["barlow-semi-condensed-latin-700-italic.775a10fb.woff2", "R51I"],
          "R51I",
        ],
        "./files/barlow-semi-condensed-vietnamese-700-normal.woff2": [
          [
            "barlow-semi-condensed-vietnamese-700-normal.91033286.woff2",
            "SrUs",
          ],
          "SrUs",
        ],
        "./files/barlow-semi-condensed-all-700-normal.woff": [
          ["barlow-semi-condensed-all-700-normal.ede08bd5.woff", "AAgp"],
          "AAgp",
        ],
        "./files/barlow-semi-condensed-latin-ext-700-normal.woff2": [
          ["barlow-semi-condensed-latin-ext-700-normal.28c6b2a2.woff2", "J1Bn"],
          "J1Bn",
        ],
        "./files/barlow-semi-condensed-latin-700-normal.woff2": [
          ["barlow-semi-condensed-latin-700-normal.d346f0b2.woff2", "SqdK"],
          "SqdK",
        ],
      },
    ],
    ugTm: [
      function (require, module, exports) {},
      {
        "./files/barlow-semi-condensed-vietnamese-600-italic.woff2": [
          [
            "barlow-semi-condensed-vietnamese-600-italic.6f8a95ba.woff2",
            "yRZa",
          ],
          "yRZa",
        ],
        "./files/barlow-semi-condensed-all-600-italic.woff": [
          ["barlow-semi-condensed-all-600-italic.5104e8c9.woff", "Bs8P"],
          "Bs8P",
        ],
        "./files/barlow-semi-condensed-latin-ext-600-italic.woff2": [
          ["barlow-semi-condensed-latin-ext-600-italic.85829008.woff2", "BPk4"],
          "BPk4",
        ],
        "./files/barlow-semi-condensed-latin-600-italic.woff2": [
          ["barlow-semi-condensed-latin-600-italic.383a4cbb.woff2", "kguh"],
          "kguh",
        ],
        "./files/barlow-semi-condensed-vietnamese-600-normal.woff2": [
          [
            "barlow-semi-condensed-vietnamese-600-normal.0a22a863.woff2",
            "zNLZ",
          ],
          "zNLZ",
        ],
        "./files/barlow-semi-condensed-all-600-normal.woff": [
          ["barlow-semi-condensed-all-600-normal.8d19f3f8.woff", "fghB"],
          "fghB",
        ],
        "./files/barlow-semi-condensed-latin-ext-600-normal.woff2": [
          ["barlow-semi-condensed-latin-ext-600-normal.658fd262.woff2", "wgJG"],
          "wgJG",
        ],
        "./files/barlow-semi-condensed-latin-600-normal.woff2": [
          ["barlow-semi-condensed-latin-600-normal.a7ce2c7c.woff2", "yNby"],
          "yNby",
        ],
      },
    ],
    TvkS: [
      function (require, module, exports) {},
      {
        "./files/barlow-semi-condensed-vietnamese-500-italic.woff2": [
          [
            "barlow-semi-condensed-vietnamese-500-italic.6e72764a.woff2",
            "FGDw",
          ],
          "FGDw",
        ],
        "./files/barlow-semi-condensed-all-500-italic.woff": [
          ["barlow-semi-condensed-all-500-italic.bc2d3d3d.woff", "MYkQ"],
          "MYkQ",
        ],
        "./files/barlow-semi-condensed-latin-ext-500-italic.woff2": [
          ["barlow-semi-condensed-latin-ext-500-italic.182b0bc6.woff2", "wBTi"],
          "wBTi",
        ],
        "./files/barlow-semi-condensed-latin-500-italic.woff2": [
          ["barlow-semi-condensed-latin-500-italic.3f26c22c.woff2", "aIzO"],
          "aIzO",
        ],
        "./files/barlow-semi-condensed-vietnamese-500-normal.woff2": [
          [
            "barlow-semi-condensed-vietnamese-500-normal.135e9a1a.woff2",
            "m4sK",
          ],
          "m4sK",
        ],
        "./files/barlow-semi-condensed-all-500-normal.woff": [
          ["barlow-semi-condensed-all-500-normal.190a8d5e.woff", "G6FD"],
          "G6FD",
        ],
        "./files/barlow-semi-condensed-latin-ext-500-normal.woff2": [
          ["barlow-semi-condensed-latin-ext-500-normal.d46e669a.woff2", "Q1sf"],
          "Q1sf",
        ],
        "./files/barlow-semi-condensed-latin-500-normal.woff2": [
          ["barlow-semi-condensed-latin-500-normal.8c32c099.woff2", "rVjc"],
          "rVjc",
        ],
      },
    ],
    Ck5A: [
      function (require, module, exports) {},
      {
        "./../images/bg-triangle.svg": [
          ["bg-triangle.5da1a726.svg", "AtKU"],
          "AtKU",
        ],
      },
    ],
    l8LS: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.setupRulesModal = void 0);
        var e = function () {
          document.querySelector(".rules").onclick = function (e) {
            e.stopPropagation();
            var o = document.querySelector(".modal-container");
            (o.style.display = "flex"),
              document.addEventListener(
                "click",
                function () {
                  o.style.display = "none";
                },
                { once: !0 }
              );
          };
        };
        exports.setupRulesModal = e;
      },
      {},
    ],
    RL65: [
      function (require, module, exports) {
        module.exports = "icon-paper.71b1d690.svg";
      },
      {},
    ],
    hH90: [
      function (require, module, exports) {
        module.exports = "icon-scissors.2701a1e0.svg";
      },
      {},
    ],
    MsJy: [
      function (require, module, exports) {
        module.exports = "icon-rock.974e564c.svg";
      },
      {},
    ],
    H99C: [
      function (require, module, exports) {
        "use strict";
        require("fontsource-barlow-semi-condensed/700.css"),
          require("fontsource-barlow-semi-condensed/600.css"),
          require("fontsource-barlow-semi-condensed/500.css"),
          require("./stylesheets/index.scss");
        var e = require("./modal-setup"),
          r = o(require("./images/icon-paper.svg")),
          s = o(require("./images/icon-scissors.svg")),
          c = o(require("./images/icon-rock.svg"));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (0, e.setupRulesModal)();
        var n = [
            '<div class="chip blue-ring picked"><img src='.concat(
              r.default,
              ' alt="Paper" class="large" /></div>'
            ),
            '<div class="chip yellow-ring picked"><img src='.concat(
              s.default,
              ' alt="Scissors" class="large" /></div>'
            ),
            '<div class="chip pink-ring picked"><img src='.concat(
              c.default,
              ' alt="Rock" class="large" /></div>'
            ),
          ],
          t = {
            score: document.querySelector(".score"),
            playground: document.querySelector(".playground"),
            loadingBot: document.querySelector(".loading-bot"),
            chips: document.querySelectorAll(".chip.choice"),
            selectionScreen: document.querySelector(".selection-screen"),
            result: document.querySelector(".result"),
            resultText: document.querySelector(".result-text"),
            playAgainBtn: document.querySelector(".play-again-btn"),
          },
          i = { "-1": "YOU LOSE", 0: "DRAW", 1: "YOU WON" },
          l = function (e) {
            var r = t.score.innerHTML;
            t.score.innerHTML = "".concat(Number(r) + e);
          },
          a = ["paper", "scissors", "rock"],
          u = ["paper-rock", "rock-scissors", "scissors-paper"],
          d = function (e, r) {
            return e === r
              ? 0
              : -1 !== u.indexOf("".concat(a[e], "-").concat(a[r]))
              ? 1
              : -1;
          },
          p = function (e) {
            var r = Number(e.target.id || e.target.closest("div").id),
              s = Math.floor(3 * Math.random());
            (t.playground.style.display = "none"),
              (t.selectionScreen.style.display = "flex"),
              (document.querySelector(".selected.player").innerHTML = n[r]),
              setTimeout(function () {
                document.querySelector(".selected.house").innerHTML = n[s];
                var e = d(r, s);
                l(e),
                  (t.result.style.display = "flex"),
                  (t.resultText.innerHTML = i[e]);
              }, 3e3);
          },
          y = function () {
            (t.result.style.display = "none"),
              (document.querySelector(".selected.house").innerHTML =
                '<div class="loading-bot"><div class="loader"></div></div>'),
              (t.selectionScreen.style.display = "none"),
              (t.playground.style.display = "flex");
          };
        t.chips.forEach(function (e) {
          e.onclick = p;
        }),
          (t.playAgainBtn.onclick = y);
      },
      {
        "fontsource-barlow-semi-condensed/700.css": "PSZY",
        "fontsource-barlow-semi-condensed/600.css": "ugTm",
        "fontsource-barlow-semi-condensed/500.css": "TvkS",
        "./stylesheets/index.scss": "Ck5A",
        "./modal-setup": "l8LS",
        "./images/icon-paper.svg": "RL65",
        "./images/icon-scissors.svg": "hH90",
        "./images/icon-rock.svg": "MsJy",
      },
    ],
  },
  {},
  ["H99C"],
  null
);
//# sourceMappingURL=/src.be836c43.js.map
