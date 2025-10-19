import ee from "react";
const le = (i, c) => i + c;
var w = { exports: {} }, h = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B;
function re() {
  if (B) return h;
  B = 1;
  var i = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function u(x, o, a) {
    var m = null;
    if (a !== void 0 && (m = "" + a), o.key !== void 0 && (m = "" + o.key), "key" in o) {
      a = {};
      for (var f in o)
        f !== "key" && (a[f] = o[f]);
    } else a = o;
    return o = a.ref, {
      $$typeof: i,
      type: x,
      key: m,
      ref: o !== void 0 ? o : null,
      props: a
    };
  }
  return h.Fragment = c, h.jsx = u, h.jsxs = u, h;
}
var p = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Y;
function te() {
  return Y || (Y = 1, process.env.NODE_ENV !== "production" && (function() {
    function i(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === Z ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case b:
          return "Fragment";
        case U:
          return "Profiler";
        case D:
          return "StrictMode";
        case z:
          return "Suspense";
        case G:
          return "SuspenseList";
        case X:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case V:
            return "Portal";
          case q:
            return r.displayName || "Context";
          case W:
            return (r._context.displayName || "Context") + ".Consumer";
          case J:
            var t = r.render;
            return r = r.displayName, r || (r = t.displayName || t.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case H:
            return t = r.displayName || null, t !== null ? t : i(r.type) || "Memo";
          case k:
            t = r._payload, r = r._init;
            try {
              return i(r(t));
            } catch {
            }
        }
      return null;
    }
    function c(r) {
      return "" + r;
    }
    function u(r) {
      try {
        c(r);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var n = t.error, s = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return n.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          s
        ), c(r);
      }
    }
    function x(r) {
      if (r === b) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === k)
        return "<...>";
      try {
        var t = i(r);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var r = v.A;
      return r === null ? null : r.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function m(r) {
      if (A.call(r, "key")) {
        var t = Object.getOwnPropertyDescriptor(r, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function f(r, t) {
      function n() {
        O || (O = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: n,
        configurable: !0
      });
    }
    function I() {
      var r = i(this.type);
      return P[r] || (P[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function F(r, t, n, s, g, N) {
      var l = n.ref;
      return r = {
        $$typeof: C,
        type: r,
        key: t,
        props: n,
        _owner: s
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: I
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: g
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: N
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function _(r, t, n, s, g, N) {
      var l = t.children;
      if (l !== void 0)
        if (s)
          if (Q(l)) {
            for (s = 0; s < l.length; s++)
              R(l[s]);
            Object.freeze && Object.freeze(l);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else R(l);
      if (A.call(t, "key")) {
        l = i(r);
        var d = Object.keys(t).filter(function(K) {
          return K !== "key";
        });
        s = 0 < d.length ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}", L[l + s] || (d = 0 < d.length ? "{" + d.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          s,
          l,
          d,
          l
        ), L[l + s] = !0);
      }
      if (l = null, n !== void 0 && (u(n), l = "" + n), m(t) && (u(t.key), l = "" + t.key), "key" in t) {
        n = {};
        for (var E in t)
          E !== "key" && (n[E] = t[E]);
      } else n = t;
      return l && f(
        n,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), F(
        r,
        l,
        n,
        o(),
        g,
        N
      );
    }
    function R(r) {
      T(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === k && (r._payload.status === "fulfilled" ? T(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function T(r) {
      return typeof r == "object" && r !== null && r.$$typeof === C;
    }
    var j = ee, C = Symbol.for("react.transitional.element"), V = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), W = Symbol.for("react.consumer"), q = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), v = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, Q = Array.isArray, y = console.createTask ? console.createTask : function() {
      return null;
    };
    j = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var O, P = {}, S = j.react_stack_bottom_frame.bind(
      j,
      a
    )(), M = y(x(a)), L = {};
    p.Fragment = b, p.jsx = function(r, t, n) {
      var s = 1e4 > v.recentlyCreatedOwnerStacks++;
      return _(
        r,
        t,
        n,
        !1,
        s ? Error("react-stack-top-frame") : S,
        s ? y(x(r)) : M
      );
    }, p.jsxs = function(r, t, n) {
      var s = 1e4 > v.recentlyCreatedOwnerStacks++;
      return _(
        r,
        t,
        n,
        !0,
        s ? Error("react-stack-top-frame") : S,
        s ? y(x(r)) : M
      );
    };
  })()), p;
}
var $;
function ne() {
  return $ || ($ = 1, process.env.NODE_ENV === "production" ? w.exports = re() : w.exports = te()), w.exports;
}
var e = ne();
const oe = () => /* @__PURE__ */ e.jsx("section", { className: "text-gray-600 body-font overflow-hidden", children: /* @__PURE__ */ e.jsxs("div", { className: "container px-5 py-24 mx-auto", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col text-center w-full mb-20", children: [
    /* @__PURE__ */ e.jsx("h1", { className: "sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900", children: "Pricing" }),
    /* @__PURE__ */ e.jsx("p", { className: "lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500", children: "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical." }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6", children: [
      /* @__PURE__ */ e.jsx("button", { className: "py-1 px-4 bg-indigo-500 text-white focus:outline-none", children: "Monthly" }),
      /* @__PURE__ */ e.jsx("button", { className: "py-1 px-4 focus:outline-none", children: "Annually" })
    ] })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap -m-4", children: [
    /* @__PURE__ */ e.jsx("div", { className: "p-4 xl:w-1/4 md:w-1/2 w-full", children: /* @__PURE__ */ e.jsxs("div", { className: "h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-sm tracking-widest title-font mb-1 font-medium", children: "START" }),
      /* @__PURE__ */ e.jsx("h1", { className: "text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none", children: "Free" }),
      /* @__PURE__ */ e.jsxs("p", { className: "flex items-center text-gray-600 mb-2", children: [
        /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0", children: /* @__PURE__ */ e.jsx(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2.5",
            className: "w-3 h-3",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e.jsx("path", { d: "M20 6L9 17l-5-5" })
          }
        ) }),
        "Vexillologist pitchfork"
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "flex items-center text-gray-600 mb-2", children: [
        /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0", children: /* @__PURE__ */ e.jsx(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2.5",
            className: "w-3 h-3",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e.jsx("path", { d: "M20 6L9 17l-5-5" })
          }
        ) }),
        "Tumeric plaid portland"
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "flex items-center text-gray-600 mb-6", children: [
        /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0", children: /* @__PURE__ */ e.jsx(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2.5",
            className: "w-3 h-3",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e.jsx("path", { d: "M20 6L9 17l-5-5" })
          }
        ) }),
        "Mixtape chillwave tumeric"
      ] }),
      /* @__PURE__ */ e.jsxs("button", { className: "flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded", children: [
        "Button",
        /* @__PURE__ */ e.jsx(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            className: "w-4 h-4 ml-auto",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e.jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500 mt-3", children: "Literally you probably haven't heard of them jean shorts." })
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "p-4 xl:w-1/4 md:w-1/2 w-full", children: /* @__PURE__ */ e.jsxs("div", { className: "h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden", children: [
      /* @__PURE__ */ e.jsx("span", { className: "bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl", children: "POPULAR" }),
      /* @__PURE__ */ e.jsx("h2", { className: "text-sm tracking-widest title-font mb-1 font-medium", children: "PRO" }),
      /* @__PURE__ */ e.jsxs("h1", { className: "text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200", children: [
        /* @__PURE__ */ e.jsx("span", { children: "$38" }),
        /* @__PURE__ */ e.jsx("span", { className: "text-lg ml-1 font-normal text-gray-500", children: "/mo" })
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "flex items-center text-gray-600 mb-2", children: [
        /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0", children: /* @__PURE__ */ e.jsx(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2.5",
            className: "w-3 h-3",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e.jsx("path", { d: "M20 6L9 17l-5-5" })
          }
        ) }),
        "Vexillologist pitchfork"
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "flex items-center text-gray-600 mb-2", children: [
        /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0", children: /* @__PURE__ */ e.jsx(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2.5",
            className: "w-3 h-3",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e.jsx("path", { d: "M20 6L9 17l-5-5" })
          }
        ) }),
        "Tumeric plaid portland"
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "flex items-center text-gray-600 mb-2", children: [
        /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0", children: /* @__PURE__ */ e.jsx(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2.5",
            className: "w-3 h-3",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e.jsx("path", { d: "M20 6L9 17l-5-5" })
          }
        ) }),
        "Hexagon neutra unicorn"
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "flex items-center text-gray-600 mb-6", children: [
        /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0", children: /* @__PURE__ */ e.jsx(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2.5",
            className: "w-3 h-3",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e.jsx("path", { d: "M20 6L9 17l-5-5" })
          }
        ) }),
        "Mixtape chillwave tumeric"
      ] }),
      /* @__PURE__ */ e.jsxs("button", { className: "flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded", children: [
        "Button",
        /* @__PURE__ */ e.jsx(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            className: "w-4 h-4 ml-auto",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e.jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500 mt-3", children: "Literally you probably haven't heard of them jean shorts." })
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "p-4 xl:w-1/4 md:w-1/2 w-full", children: /* @__PURE__ */ e.jsxs("div", { className: "h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-sm tracking-widest title-font mb-1 font-medium", children: "BUSINESS" }),
      /* @__PURE__ */ e.jsxs("h1", { className: "text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200", children: [
        /* @__PURE__ */ e.jsx("span", { children: "$56" }),
        /* @__PURE__ */ e.jsx("span", { className: "text-lg ml-1 font-normal text-gray-500", children: "/mo" })
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "flex items-center text-gray-600 mb-2", children: [
        /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0", children: /* @__PURE__ */ e.jsx(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2.5",
            className: "w-3 h-3",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e.jsx("path", { d: "M20 6L9 17l-5-5" })
          }
        ) }),
        "Vexillologist pitchfork"
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "flex items-center text-gray-600 mb-2", children: [
        /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0", children: /* @__PURE__ */ e.jsx(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2.5",
            className: "w-3 h-3",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e.jsx("path", { d: "M20 6L9 17l-5-5" })
          }
        ) }),
        "Tumeric plaid portland"
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "flex items-center text-gray-600 mb-2", children: [
        /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0", children: /* @__PURE__ */ e.jsx(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2.5",
            className: "w-3 h-3",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e.jsx("path", { d: "M20 6L9 17l-5-5" })
          }
        ) }),
        "Hexagon neutra unicorn"
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "flex items-center text-gray-600 mb-2", children: [
        /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0", children: /* @__PURE__ */ e.jsx(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2.5",
            className: "w-3 h-3",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e.jsx("path", { d: "M20 6L9 17l-5-5" })
          }
        ) }),
        "Vexillologist pitchfork"
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "flex items-center text-gray-600 mb-6", children: [
        /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0", children: /* @__PURE__ */ e.jsx(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2.5",
            className: "w-3 h-3",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e.jsx("path", { d: "M20 6L9 17l-5-5" })
          }
        ) }),
        "Mixtape chillwave tumeric"
      ] }),
      /* @__PURE__ */ e.jsxs("button", { className: "flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded", children: [
        "Button",
        /* @__PURE__ */ e.jsx(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            className: "w-4 h-4 ml-auto",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e.jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500 mt-3", children: "Literally you probably haven't heard of them jean shorts." })
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "p-4 xl:w-1/4 md:w-1/2 w-full", children: /* @__PURE__ */ e.jsxs("div", { className: "h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-sm tracking-widest title-font mb-1 font-medium", children: "SPECIAL" }),
      /* @__PURE__ */ e.jsxs("h1", { className: "text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200", children: [
        /* @__PURE__ */ e.jsx("span", { children: "$72" }),
        /* @__PURE__ */ e.jsx("span", { className: "text-lg ml-1 font-normal text-gray-500", children: "/mo" })
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "flex items-center text-gray-600 mb-2", children: [
        /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0", children: /* @__PURE__ */ e.jsx(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2.5",
            className: "w-3 h-3",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e.jsx("path", { d: "M20 6L9 17l-5-5" })
          }
        ) }),
        "Vexillologist pitchfork"
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "flex items-center text-gray-600 mb-2", children: [
        /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0", children: /* @__PURE__ */ e.jsx(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2.5",
            className: "w-3 h-3",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e.jsx("path", { d: "M20 6L9 17l-5-5" })
          }
        ) }),
        "Tumeric plaid portland"
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "flex items-center text-gray-600 mb-2", children: [
        /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0", children: /* @__PURE__ */ e.jsx(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2.5",
            className: "w-3 h-3",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e.jsx("path", { d: "M20 6L9 17l-5-5" })
          }
        ) }),
        "Hexagon neutra unicorn"
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "flex items-center text-gray-600 mb-2", children: [
        /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0", children: /* @__PURE__ */ e.jsx(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2.5",
            className: "w-3 h-3",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e.jsx("path", { d: "M20 6L9 17l-5-5" })
          }
        ) }),
        "Vexillologist pitchfork"
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "flex items-center text-gray-600 mb-6", children: [
        /* @__PURE__ */ e.jsx("span", { className: "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0", children: /* @__PURE__ */ e.jsx(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2.5",
            className: "w-3 h-3",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e.jsx("path", { d: "M20 6L9 17l-5-5" })
          }
        ) }),
        "Mixtape chillwave tumeric"
      ] }),
      /* @__PURE__ */ e.jsxs("button", { className: "flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded", children: [
        "Button",
        /* @__PURE__ */ e.jsx(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            className: "w-4 h-4 ml-auto",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ e.jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500 mt-3", children: "Literally you probably haven't heard of them jean shorts." })
    ] }) })
  ] })
] }) });
export {
  oe as Pricing,
  le as sum
};
