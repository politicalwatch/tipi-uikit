import { openBlock as q, createElementBlock as Z, createElementVNode as K, createStaticVNode as Xf, normalizeClass as _t, createBlock as Je, resolveDynamicComponent as jf, resolveComponent as je, createVNode as Xe, createCommentVNode as Ee, createTextVNode as We, toDisplayString as ve, withCtx as yt, Fragment as $t, renderList as Ut, withModifiers as Yf, renderSlot as Ha, defineComponent as f1, ref as c1, normalizeStyle as Bt, withDirectives as Eo, vShow as So, pushScopeId as u1, popScopeId as h1, defineAsyncComponent as d1, TransitionGroup as p1 } from "vue";
function m1(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const a = Object.getOwnPropertyDescriptor(n, i);
          a && Object.defineProperty(e, i, a.get ? a : {
            enumerable: !0,
            get: () => n[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
const g1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, v1 = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M0 12.445v1.78h5.335v-1.78H0zm0-10.67v1.78h8.89v-1.78H0zM8.89 16v-1.78H16v-1.781H8.89v-1.78H7.11V16h1.78zM3.555 5.335v1.781H0v1.78h3.555v1.781h1.78V5.335h-1.78zM16 8.89V7.11H7.11v1.78H16zm-5.335-3.555h1.78v-1.78H16v-1.78h-3.555V0h-1.78v5.335z"
}, null, -1), x1 = [
  v1
];
function _1(e, t) {
  return q(), Z("svg", g1, x1);
}
const y1 = { render: _1 }, w1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "16",
  fill: "none",
  viewBox: "0 0 12 16"
}, E1 = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M3.907 14.557C4.262 15.406 5.067 16 6 16c.934 0 1.738-.594 2.093-1.443H3.907zM6 1.529c.616 0 1.208.115 1.757.325v-.072C7.757.8 7 0 6.07 0h-.14C5 0 4.244.8 4.244 1.782v.07A4.907 4.907 0 0 1 6 1.53zm5.544 12.089H.456a.457.457 0 0 1-.446-.367.463.463 0 0 1 .238-.518c.044-.03.38-.279.716-1.029.617-1.377.746-3.318.746-4.703 0-2.5 1.925-4.533 4.29-4.533 2.36 0 4.28 2.023 4.29 4.515V7c0 1.385.13 3.326.746 4.703.336.75.672.998.716 1.029.188.092.28.303.237.518a.457.457 0 0 1-.445.367zm.213-.882z"
}, null, -1), S1 = [
  E1
];
function T1(e, t) {
  return q(), Z("svg", w1, S1);
}
const A1 = { render: T1 }, C1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, F1 = /* @__PURE__ */ Xf('<path fill="#5F69E2" d="M8 4.87a.476.476 0 0 1-.469-.483v-.96c0-.267.21-.484.469-.484s.469.217.469.484v.96c0 .267-.21.484-.469.484z"></path><path fill="#FFE377" d="M14.252 8.938H1.748a.476.476 0 0 0-.468.484v5.664c0 .267.21.484.468.484h12.504a.476.476 0 0 0 .468-.484V9.422a.477.477 0 0 0-.468-.484z"></path><path fill="#FC0" d="M14.252 8.938H8v6.632h6.252a.476.476 0 0 0 .468-.484V9.422a.477.477 0 0 0-.468-.484z"></path><path fill="#5F69E2" d="M4.224 4.87a.476.476 0 0 1-.469-.483v-.96c0-.267.21-.484.47-.484.258 0 .468.217.468.484v.96c0 .267-.21.484-.469.484z"></path><path fill="#3440DA" d="M11.776 4.87a.476.476 0 0 1-.469-.483v-.96c0-.267.21-.484.469-.484s.469.217.469.484v.96c0 .267-.21.484-.47.484z"></path><path fill="#FC0" d="M12.558.97c-.214-.411-.425-.757-.433-.771a.411.411 0 0 0-.35-.199.41.41 0 0 0-.348.199c-.009.014-.22.36-.433.77-.415.797-.468 1.116-.468 1.305 0 .712.56 1.291 1.25 1.291s1.25-.579 1.25-1.29c0-.19-.053-.509-.468-1.306z"></path><path fill="#3440DA" d="M8 2.943v1.928a.477.477 0 0 0 .469-.484v-.96A.477.477 0 0 0 8 2.943z"></path><path fill="#FFE377" d="M8.349.199C8.273.075 8.142 0 8 0s-.273.075-.349.199c-.009.014-.22.36-.433.77-.415.797-.468 1.116-.468 1.305 0 .712.56 1.291 1.25 1.291s1.25-.579 1.25-1.29c0-.19-.053-.509-.468-1.306A15.473 15.473 0 0 0 8.35.2z"></path><path fill="#FC0" d="M8.782.97C8.568.558 8.358.212 8.35.198A.414.414 0 0 0 8 0v3.565c.69 0 1.25-.579 1.25-1.29 0-.19-.053-.509-.468-1.306z"></path><path fill="#E5E5E5" d="M15.531 16H.47c-.261 0-.47-.217-.47-.484s.21-.484.469-.484H15.53c.26 0 .469.217.469.484s-.21.484-.469.484z"></path><path fill="#D6D6D6" d="M15.531 15.032H8V16h7.531c.26 0 .469-.217.469-.484s-.21-.484-.469-.484z"></path><path fill="#989EEC" d="M8.679 4.349H7.32a.58.58 0 0 0-.571.59v3.737c0 .326.256.59.571.59h1.36a.58.58 0 0 0 .571-.59V4.94a.58.58 0 0 0-.571-.59zm-3.776 0H3.546a.581.581 0 0 0-.572.59v3.737c0 .326.256.59.572.59h1.357a.58.58 0 0 0 .571-.59V4.94a.58.58 0 0 0-.571-.59z"></path><path fill="#7C83E7" d="M12.454 4.349h-1.357a.58.58 0 0 0-.571.59v3.737c0 .326.256.59.571.59h1.357a.581.581 0 0 0 .572-.59V4.94a.581.581 0 0 0-.572-.59zm-3.775 0H8v4.917h.679a.58.58 0 0 0 .571-.59V4.94a.58.58 0 0 0-.571-.59z"></path><path fill="#FFA1C0" d="M13.803 8.01H2.197c-.72 0-1.308.554-1.308 1.233v1.248c0 .34.159.656.435.869.312.24.728.314 1.111.197l1.184-.362a3.68 3.68 0 0 1 2.12 0l.934.286a4.575 4.575 0 0 0 2.653 0l.934-.286a3.674 3.674 0 0 1 2.121 0l1.183.362c.384.117.8.044 1.112-.197.276-.213.434-.53.434-.87V9.244c0-.68-.586-1.232-1.307-1.232z"></path><path fill="#FF80A9" d="M13.803 8.01H8v3.667c.45 0 .899-.065 1.326-.196l.934-.286a3.666 3.666 0 0 1 2.121 0l1.184.362c.383.117.799.044 1.11-.197.277-.213.435-.53.435-.87V9.244c0-.68-.586-1.232-1.307-1.232z"></path><path fill="#FFE377" d="M4.573.199A.41.41 0 0 0 4.224 0a.41.41 0 0 0-.349.199c-.008.014-.22.36-.433.77-.415.797-.468 1.116-.468 1.305 0 .712.56 1.291 1.25 1.291s1.25-.579 1.25-1.29c0-.19-.053-.509-.468-1.306A14.202 14.202 0 0 0 4.573.2z"></path>', 16), O1 = [
  F1
];
function b1(e, t) {
  return q(), Z("svg", C1, O1);
}
const k1 = { render: b1 }, M1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, D1 = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M8 0 0 3.96v1.696h16V3.96L8 0zm.469 3.781H7.53v-.937h.938v.937zm-7.5 2.813H15.03v.937H.97v-.937zm10.312 1.875h2.813v4.687H11.28V8.47zM.761 14.125 0 16h16l-.761-1.875H.761zm5.833-5.656h2.812v4.687H6.594V8.47zm-4.688 0H4.72v4.687H1.906V8.47z"
}, null, -1), I1 = [
  D1
];
function P1(e, t) {
  return q(), Z("svg", M1, I1);
}
const R1 = { render: P1 }, N1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, L1 = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M14.222 1.6h-.889V0h-1.777v1.6H4.444V0H2.667v1.6h-.89C.8 1.6 0 2.32 0 3.2v11.2c0 .88.8 1.6 1.778 1.6h12.444C15.2 16 16 15.28 16 14.4V3.2c0-.88-.8-1.6-1.778-1.6zm-.16 12.431H2V5.016h12.063v9.015z"
}, null, -1), B1 = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M7.024 6h-4v4h4V6z"
}, null, -1), $1 = [
  L1,
  B1
];
function U1(e, t) {
  return q(), Z("svg", N1, $1);
}
const H1 = { render: U1 }, W1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "10",
  fill: "none",
  viewBox: "0 0 16 10"
}, z1 = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M14.113 0 8 6.183 1.887 0 0 1.908 8 10l8-8.092L14.113 0z"
}, null, -1), V1 = [
  z1
];
function G1(e, t) {
  return q(), Z("svg", W1, V1);
}
const X1 = { render: G1 }, j1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "16",
  fill: "none",
  viewBox: "0 0 10 16"
}, Y1 = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M10 14.113 3.817 8 10 1.887 8.092 0 0 8l8.092 8L10 14.113z"
}, null, -1), q1 = [
  Y1
];
function K1(e, t) {
  return q(), Z("svg", j1, q1);
}
const J1 = { render: K1 }, Q1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "16",
  fill: "none",
  viewBox: "0 0 10 16"
}, Z1 = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M0 1.887 6.183 8 0 14.113 1.908 16 10 8 1.908 0 0 1.887z"
}, null, -1), ed = [
  Z1
];
function td(e, t) {
  return q(), Z("svg", Q1, ed);
}
const rd = { render: td }, nd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "10",
  fill: "none",
  viewBox: "0 0 16 10"
}, id = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M1.887 10 8 3.817 14.113 10 16 8.092 8 0 0 8.092 1.887 10z"
}, null, -1), ad = [
  id
];
function sd(e, t) {
  return q(), Z("svg", nd, ad);
}
const od = { render: sd }, ld = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, fd = /* @__PURE__ */ K("path", {
  fill: "#9CB0BF",
  "fill-rule": "evenodd",
  d: "M8 1.6A6.37 6.37 0 0 0 1.6 8 6.37 6.37 0 0 0 8 14.4 6.37 6.37 0 0 0 14.4 8 6.37 6.37 0 0 0 8 1.6ZM0 8c0-4.442 3.558-8 8-8s8 3.558 8 8-3.558 8-8 8a7.97 7.97 0 0 1-8-8Z",
  "clip-rule": "evenodd"
}, null, -1), cd = /* @__PURE__ */ K("path", {
  fill: "#9CB0BF",
  "fill-rule": "evenodd",
  d: "M7.2 4h1.6v3.669l2.166 2.165-1.131 1.132L7.2 8.33V4Z",
  "clip-rule": "evenodd"
}, null, -1), ud = [
  fd,
  cd
];
function hd(e, t) {
  return q(), Z("svg", ld, ud);
}
const dd = { render: hd }, pd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, md = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M16 .727 15.273 0 8 7.273.727 0 0 .727 7.273 8 0 15.273.727 16 8 8.727 15.273 16l.727-.727L8.727 8 16 .727z"
}, null, -1), gd = [
  md
];
function vd(e, t) {
  return q(), Z("svg", pd, gd);
}
const xd = { render: vd }, _d = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, yd = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 10.88L10.88 12 8 9.12 5.12 12 4 10.88 6.88 8 4 5.12 5.12 4 8 6.88 10.88 4 12 5.12 9.12 8 12 10.88z"
}, null, -1), wd = [
  yd
];
function Ed(e, t) {
  return q(), Z("svg", _d, wd);
}
const Sd = { render: Ed }, Td = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, Ad = /* @__PURE__ */ K("path", {
  fill: "#1D1D1B",
  d: "M14.4 3.2h-.8v6.4c0 .44-.36.8-.8.8H3.2v.8c0 .88.72 1.6 1.6 1.6h8L16 16V4.8c0-.88-.72-1.6-1.6-1.6Zm-2.4 4V1.6c0-.88-.72-1.6-1.6-1.6H1.6C.72 0 0 .72 0 1.6V12l3.2-3.2h7.2c.88 0 1.6-.72 1.6-1.6Z"
}, null, -1), Cd = [
  Ad
];
function Fd(e, t) {
  return q(), Z("svg", Td, Cd);
}
const Od = { render: Fd }, bd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, kd = /* @__PURE__ */ K("path", {
  fill: "#E81C1C",
  d: "M10.406 8 16 2.406 13.594 0 8 5.594 2.406 0 0 2.406 5.594 8 0 13.594 2.406 16 8 10.406 13.594 16 16 13.594 10.406 8Z"
}, null, -1), Md = [
  kd
];
function Dd(e, t) {
  return q(), Z("svg", bd, Md);
}
const Id = { render: Dd }, Pd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "16",
  fill: "none",
  viewBox: "0 0 12 16"
}, Rd = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M8.71 9.8H3.097a.59.59 0 0 0-.58.6c0 .331.26.6.58.6H8.71a.59.59 0 0 0 .58-.6.59.59 0 0 0-.58-.6zM3.097 7.4h3.29c.32 0 .58.269.58.6 0 .331-.26.6-.58.6h-3.29a.59.59 0 0 1-.58-.6c0-.331.26-.6.58-.6zm5.613 4.8H3.097a.59.59 0 0 0-.58.6c0 .331.26.6.58.6H8.71a.59.59 0 0 0 .58-.6.59.59 0 0 0-.58-.6z"
}, null, -1), Nd = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  "fill-rule": "evenodd",
  d: "M11.818 4.604 7.27.164A.572.572 0 0 0 6.87 0H.581A.59.59 0 0 0 0 .6v14.8c0 .331.26.6.58.6h10.84a.59.59 0 0 0 .58-.6V5.04a.61.61 0 0 0-.182-.436zm-.98 10.196H1.162V1.2h5.033v4c0 .331.26.6.58.6h4.065v9zm-.715-10.2L7.355 1.898V4.6h2.768z",
  "clip-rule": "evenodd"
}, null, -1), Ld = [
  Rd,
  Nd
];
function Bd(e, t) {
  return q(), Z("svg", Pd, Ld);
}
const $d = { render: Bd }, Ud = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "16",
  fill: "none",
  viewBox: "0 0 12 16"
}, Hd = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M12 5.647H8.571V0H3.43v5.647H0l6 6.588 6-6.588zm-12 8.47V16h12v-1.882H0z"
}, null, -1), Wd = [
  Hd
];
function zd(e, t) {
  return q(), Z("svg", Ud, Wd);
}
const Vd = { render: zd }, Gd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, Xd = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8zm.8 12H7.2v-1.6h1.6V12zm0-3.2H7.2V4h1.6v4.8z"
}, null, -1), jd = [
  Xd
];
function Yd(e, t) {
  return q(), Z("svg", Gd, jd);
}
const qd = { render: Yd }, Kd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16"
}, Jd = /* @__PURE__ */ K("path", {
  fill: "#000",
  "fill-rule": "nonzero",
  d: "M8 .02c-4.42 0-8 3.52-8 7.862 0 3.474 2.292 6.42 5.47 7.459.4.074.547-.17.547-.378 0-.187-.007-.681-.01-1.337-2.226.474-2.695-1.054-2.695-1.054-.364-.908-.89-1.15-.89-1.15-.725-.488.056-.478.056-.478.803.055 1.225.81 1.225.81.714 1.202 1.873.855 2.33.654.072-.508.278-.854.507-1.051-1.777-.197-3.644-.873-3.644-3.885 0-.858.31-1.56.823-2.11-.09-.198-.36-.997.07-2.08 0 0 .67-.21 2.2.806a7.81 7.81 0 0 1 2-.265c.68.004 1.36.09 2 .265 1.52-1.017 2.19-.806 2.19-.806.43 1.083.16 1.882.08 2.08.51.55.82 1.252.82 2.11 0 3.02-1.87 3.685-3.65 3.878.28.236.54.718.54 1.455 0 1.052-.01 1.897-.01 2.152 0 .207.14.452.55.374C13.71 14.299 16 11.35 16 7.882 16 3.541 12.418.021 8 .021Z"
}, null, -1), Qd = [
  Jd
];
function Zd(e, t) {
  return q(), Z("svg", Kd, Qd);
}
const ep = { render: Zd }, tp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "11",
  fill: "none",
  viewBox: "0 0 16 11"
}, rp = /* @__PURE__ */ K("path", {
  fill: "#000",
  d: "M16 0H0v1h16zm0 5H0v1h16zm0 5H0v1h16z"
}, null, -1), np = [
  rp
];
function ip(e, t) {
  return q(), Z("svg", tp, np);
}
const ap = { render: ip }, sp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, op = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M7.2 12h1.6V7.2H7.2V12zM8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.4c-3.52 0-6.4-2.88-6.4-6.4 0-3.52 2.88-6.4 6.4-6.4 3.52 0 6.4 2.88 6.4 6.4 0 3.52-2.88 6.4-6.4 6.4zm-.8-8.8h1.6V4H7.2v1.6z"
}, null, -1), lp = [
  op
];
function fp(e, t) {
  return q(), Z("svg", sp, lp);
}
const cp = { render: fp }, up = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "2",
  fill: "none",
  viewBox: "0 0 12 2"
}, hp = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M11.727 0H.273C.123 0 0 .078 0 .174v1.652C0 1.922.122 2 .273 2h11.454c.15 0 .273-.078.273-.174V.174C12 .078 11.878 0 11.727 0z"
}, null, -1), dp = [
  hp
];
function pp(e, t) {
  return q(), Z("svg", up, dp);
}
const mp = { render: pp }, gp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "16",
  fill: "none",
  viewBox: "0 0 14 16"
}, vp = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M11.95 1.965C10.628.698 8.87 0 7 0S3.372.698 2.05 1.965C.728 3.232 0 4.916 0 6.708 0 8.5.728 10.184 2.05 11.45l4.604 4.412a.502.502 0 0 0 .692 0l4.604-4.412C13.272 10.184 14 8.5 14 6.708c0-1.792-.728-3.476-2.05-4.743zm-2.752 6.85A3.158 3.158 0 0 1 7 9.687c-.83 0-1.611-.31-2.198-.873a2.896 2.896 0 0 1-.91-2.106 2.9 2.9 0 0 1 .91-2.107A3.164 3.164 0 0 1 7 3.73c.83 0 1.611.31 2.198.872.588.563.911 1.311.911 2.107 0 .796-.323 1.544-.91 2.106z"
}, null, -1), xp = [
  vp
];
function _p(e, t) {
  return q(), Z("svg", gp, xp);
}
const yp = { render: _p }, wp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "12",
  fill: "none",
  viewBox: "0 0 16 12"
}, Ep = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M0 0v.6l8 6.41L16 .6V0H0z"
}, null, -1), Sp = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M8 8.288 3.288 4.475 0 1.84V12h16V1.84l-3.288 2.635L8 8.288z"
}, null, -1), Tp = [
  Ep,
  Sp
];
function Ap(e, t) {
  return q(), Z("svg", wp, Tp);
}
const Cp = { render: Ap }, Fp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "4",
  fill: "none",
  viewBox: "0 0 16 4"
}, Op = /* @__PURE__ */ K("path", {
  fill: "#9CB0BF",
  d: "M0 0h4v4H0zM6 0h4v4H6zM12 0h4v4h-4z"
}, null, -1), bp = [
  Op
];
function kp(e, t) {
  return q(), Z("svg", Fp, bp);
}
const Mp = { render: kp }, Dp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, Ip = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M14.222 14.222H1.778V1.778H8V0H1.778C.8 0 0 .8 0 1.778v12.444C0 15.2.8 16 1.778 16h12.444C15.2 16 16 15.2 16 14.222V8h-1.778v6.222zM9.778 0v1.778h3.2l-8.711 8.71 1.244 1.245 8.711-8.71v3.2H16V0H9.778z"
}, null, -1), Pp = [
  Ip
];
function Rp(e, t) {
  return q(), Z("svg", Dp, Pp);
}
const Np = { render: Rp }, Lp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  fill: "none",
  viewBox: "0 0 12 12"
}, Bp = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M7.286 4.929a.215.215 0 0 1-.215-.215V0H4.93v4.714a.215.215 0 0 1-.215.215H0V7.07h4.714c.119 0 .215.096.215.215V12H7.07V7.286c0-.119.096-.215.215-.215H12V4.93H7.286z"
}, null, -1), $p = [
  Bp
];
function Up(e, t) {
  return q(), Z("svg", Lp, $p);
}
const Hp = { render: Up }, Wp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, zp = /* @__PURE__ */ K("path", {
  fill: "#1D1D1B",
  d: "M3.52 6.232C3.542 2.77 6.35-.021 9.798 0 13.243.021 16.021 2.843 16 6.306c-.02 3.447-2.808 6.231-6.24 6.231-3.454-.014-6.244-2.835-6.24-6.305Zm2.47 0A3.782 3.782 0 0 0 9.8 9.986c2.083-.019 3.756-1.732 3.737-3.825A3.781 3.781 0 0 0 9.76 2.406a3.803 3.803 0 0 0-3.774 3.826h.005Z"
}, null, -1), Vp = /* @__PURE__ */ K("path", {
  fill: "#1D1D1B",
  d: "M5.326 8.913 0 14.242 1.743 16l5.326-5.328-1.743-1.759Z"
}, null, -1), Gp = [
  zp,
  Vp
];
function Xp(e, t) {
  return q(), Z("svg", Wp, Gp);
}
const jp = { render: Xp }, Yp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "14",
  fill: "none",
  viewBox: "0 0 16 14"
}, qp = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "m13.555 0-8 8.688-3.11-3.377L0 7.967 5.555 14 16 2.656 13.555 0z"
}, null, -1), Kp = [
  qp
];
function Jp(e, t) {
  return q(), Z("svg", Yp, Kp);
}
const Qp = { render: Jp }, Zp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "12",
  fill: "none",
  viewBox: "0 0 16 12"
}, em = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M5.032 12c6.038 0 9.34-4.616 9.34-8.62 0-.13-.003-.261-.01-.39A6.419 6.419 0 0 0 16 1.42a6.982 6.982 0 0 1-1.885.477c.678-.375 1.198-.968 1.443-1.675a6.914 6.914 0 0 1-2.084.735A3.412 3.412 0 0 0 11.078 0C9.265 0 7.795 1.357 7.795 3.029c0 .238.029.469.085.69-2.728-.125-5.148-1.33-6.767-3.163A2.846 2.846 0 0 0 .67 2.077c0 1.051.58 1.98 1.46 2.522A3.467 3.467 0 0 1 .644 4.22v.039c0 1.467 1.131 2.692 2.633 2.97a3.554 3.554 0 0 1-1.482.051c.418 1.204 1.63 2.08 3.066 2.104a6.943 6.943 0 0 1-4.077 1.297A7.23 7.23 0 0 1 0 10.64 9.864 9.864 0 0 0 5.032 12"
}, null, -1), tm = [
  em
];
function rm(e, t) {
  return q(), Z("svg", Zp, tm);
}
const nm = { render: rm }, im = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "16",
  fill: "none",
  viewBox: "0 0 12 16"
}, am = /* @__PURE__ */ K("path", {
  fill: "#2D4252",
  d: "M3.429 12.235H8.57V6.588H12L6 0 0 6.588h3.429v5.647zM12 14.118H0V16h12v-1.882z"
}, null, -1), sm = [
  am
];
function om(e, t) {
  return q(), Z("svg", im, sm);
}
const lm = { render: om }, Le = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, fm = {
  name: "TipiIcon",
  components: {
    icon_advanced: y1,
    icon_bell: A1,
    icon_birthday: k1,
    icon_building: R1,
    icon_calendar: H1,
    icon_chevron_down: X1,
    icon_chevron_left: J1,
    icon_chevron_right: rd,
    icon_chevron_up: od,
    icon_clock: dd,
    icon_close_menu: xd,
    icon_close: Sd,
    icon_conversation: Od,
    icon_denied: Id,
    icon_document: $d,
    icon_download: Vd,
    icon_error: qd,
    icon_github: ep,
    icon_hamburger: ap,
    icon_info: cp,
    icon_less: mp,
    icon_location: yp,
    icon_mail: Cp,
    icon_more: Mp,
    icon_open_blank: Np,
    icon_plus: Hp,
    icon_search: jp,
    icon_success: Qp,
    icon_twitter: nm,
    icon_upload: lm
  },
  props: {
    icon: String,
    color: String
  },
  updated() {
    this.color && this.$el.querySelector("svg path") && (this.$el.querySelector("svg path").style.fill = this.color);
  }
};
function cm(e, t, r, n, i, a) {
  return q(), Z("span", {
    class: _t(["c-icon", `c-icon--type-${r.icon}`])
  }, [
    (q(), Je(jf(`icon_${r.icon}`)))
  ], 2);
}
const Wr = /* @__PURE__ */ Le(fm, [["render", cm]]), Wa = function(e, t) {
  let r, n, i, a, s = 0, o, l = /(\d+)|(\D+)/g, f = /\d/;
  if (isFinite(e) && isFinite(t))
    return e - t;
  if (r = String(e).toLowerCase(), n = String(t).toLowerCase(), r === n)
    return 0;
  if (!(f.test(r) && f.test(n)))
    return r > n ? 1 : -1;
  for (r = r.match(l), n = n.match(l), o = r.length > n.length ? n.length : r.length; s < o; )
    if (i = r[s], a = n[s++], i !== a)
      return isFinite(i) && isFinite(a) ? (i.charAt(0) === "0" && (i = "." + i), a.charAt(0) === "0" && (a = "." + a), i - a) : i > a ? 1 : -1;
  return r.length - n.length;
}, um = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  naturalSort: Wa
}, Symbol.toStringTag, { value: "Module" })), hm = {
  name: "TipiTopicPill",
  components: {
    TipiIcon: Wr
  },
  props: {
    topics: Array,
    topicsStyles: Object,
    withLinks: Boolean,
    limit: Number,
    order: {
      type: Boolean,
      default: !0
    }
  },
  methods: {
    getTopics: function() {
      let e = this.topics;
      return this.limit && (e = e.slice(0, this.limit)), this.topicsStyles && e.length ? (this.order ? e.slice().sort(Wa) : e.slice()).map((r, n) => this.withLinks ? `
              <a href="#topic-${n}" class="c-topics__topic c-topics__topic__small" style="background-color:${this.topicsStyles[r].color}">
                ${this.topicsStyles[r].shortname}
              </a>
            ` : `
              <div class="c-topics__topic c-topics__topic__small" style="background-color:${this.topicsStyles[r].color}">
                ${this.topicsStyles[r].shortname}
              </div>
            `).join("") : e.length ? e.join("<br/>") : `<div class="c-topics__topic c-topics__topic__small" style="background-color: #ccc; color: #444;">
          ${this.topicsStyles["no-topic"] ? this.topicsStyles["no-topic"].shortname : "Sin temática"}
        </div>`;
    }
  }
}, dm = { class: "c-topics" }, pm = ["innerHTML"], mm = {
  key: 0,
  class: "c-topics__topic c-topics__topic__small",
  style: { "background-color": "#2d4252" }
};
function gm(e, t, r, n, i, a) {
  const s = je("tipi-icon");
  return q(), Z("div", dm, [
    K("span", {
      innerHTML: a.getTopics()
    }, null, 8, pm),
    r.limit && r.limit < r.topics.length ? (q(), Z("div", mm, [
      Xe(s, { icon: "more" })
    ])) : Ee("", !0)
  ]);
}
const qf = /* @__PURE__ */ Le(hm, [["render", gm]]);
var vm = {};
function xm() {
  return vm;
}
function To(e) {
  "@babel/helpers - typeof";
  return To = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, To(e);
}
function qt(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function ut(e) {
  qt(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || To(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function na(e, t) {
  qt(2, arguments);
  var r = ut(e), n = ut(t), i = r.getTime() - n.getTime();
  return i < 0 ? -1 : i > 0 ? 1 : i;
}
function _m(e, t) {
  qt(2, arguments);
  var r = ut(e), n = ut(t), i = r.getFullYear() - n.getFullYear(), a = r.getMonth() - n.getMonth();
  return i * 12 + a;
}
function ym(e) {
  qt(1, arguments);
  var t = ut(e);
  return t.setHours(23, 59, 59, 999), t;
}
function wm(e) {
  qt(1, arguments);
  var t = ut(e), r = t.getMonth();
  return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Em(e) {
  qt(1, arguments);
  var t = ut(e);
  return ym(t).getTime() === wm(t).getTime();
}
function Sm(e, t) {
  qt(2, arguments);
  var r = ut(e), n = ut(t), i = na(r, n), a = Math.abs(_m(r, n)), s;
  if (a < 1)
    s = 0;
  else {
    r.getMonth() === 1 && r.getDate() > 27 && r.setDate(30), r.setMonth(r.getMonth() - i * a);
    var o = na(r, n) === -i;
    Em(ut(e)) && a === 1 && na(e, n) === 1 && (o = !1), s = i * (a - Number(o));
  }
  return s === 0 ? 0 : s;
}
function Tm(e, t) {
  return qt(2, arguments), ut(e).getTime() - ut(t).getTime();
}
var tl = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function(t) {
    return t < 0 ? Math.ceil(t) : Math.floor(t);
  }
  // Math.trunc is not supported by IE
}, Am = "trunc";
function Cm(e) {
  return e ? tl[e] : tl[Am];
}
function Fm(e, t, r) {
  qt(2, arguments);
  var n = Tm(e, t) / 1e3;
  return Cm(r == null ? void 0 : r.roundingMethod)(n);
}
var Om = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, bm = function(t, r, n) {
  var i, a = Om[t];
  return typeof a == "string" ? i = a : r === 1 ? i = a.one : i = a.other.replace("{{count}}", r.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + i : i + " ago" : i;
};
const km = bm;
function On(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.width ? String(t.width) : e.defaultWidth, n = e.formats[r] || e.formats[e.defaultWidth];
    return n;
  };
}
var Mm = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Dm = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Im = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Pm = {
  date: On({
    formats: Mm,
    defaultWidth: "full"
  }),
  time: On({
    formats: Dm,
    defaultWidth: "full"
  }),
  dateTime: On({
    formats: Im,
    defaultWidth: "full"
  })
};
const Rm = Pm;
var Nm = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Lm = function(t, r, n, i) {
  return Nm[t];
};
const Bm = Lm;
function nr(e) {
  return function(t, r) {
    var n = r != null && r.context ? String(r.context) : "standalone", i;
    if (n === "formatting" && e.formattingValues) {
      var a = e.defaultFormattingWidth || e.defaultWidth, s = r != null && r.width ? String(r.width) : a;
      i = e.formattingValues[s] || e.formattingValues[a];
    } else {
      var o = e.defaultWidth, l = r != null && r.width ? String(r.width) : e.defaultWidth;
      i = e.values[l] || e.values[o];
    }
    var f = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[f];
  };
}
var $m = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Um = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Hm = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Wm = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, zm = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Vm = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Gm = function(t, r) {
  var n = Number(t), i = n % 100;
  if (i > 20 || i < 10)
    switch (i % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Xm = {
  ordinalNumber: Gm,
  era: nr({
    values: $m,
    defaultWidth: "wide"
  }),
  quarter: nr({
    values: Um,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: nr({
    values: Hm,
    defaultWidth: "wide"
  }),
  day: nr({
    values: Wm,
    defaultWidth: "wide"
  }),
  dayPeriod: nr({
    values: zm,
    defaultWidth: "wide",
    formattingValues: Vm,
    defaultFormattingWidth: "wide"
  })
};
const jm = Xm;
function ir(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.width, i = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    var s = a[0], o = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(o) ? qm(o, function(u) {
      return u.test(s);
    }) : Ym(o, function(u) {
      return u.test(s);
    }), f;
    f = e.valueCallback ? e.valueCallback(l) : l, f = r.valueCallback ? r.valueCallback(f) : f;
    var c = t.slice(s.length);
    return {
      value: f,
      rest: c
    };
  };
}
function Ym(e, t) {
  for (var r in e)
    if (e.hasOwnProperty(r) && t(e[r]))
      return r;
}
function qm(e, t) {
  for (var r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function Kf(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.match(e.matchPattern);
    if (!n)
      return null;
    var i = n[0], a = t.match(e.parsePattern);
    if (!a)
      return null;
    var s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = r.valueCallback ? r.valueCallback(s) : s;
    var o = t.slice(i.length);
    return {
      value: s,
      rest: o
    };
  };
}
var Km = /^(\d+)(th|st|nd|rd)?/i, Jm = /\d+/i, Qm = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Zm = {
  any: [/^b/i, /^(a|c)/i]
}, eg = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, tg = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, rg = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, ng = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, ig = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ag = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, sg = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, og = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, lg = {
  ordinalNumber: Kf({
    matchPattern: Km,
    parsePattern: Jm,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: ir({
    matchPatterns: Qm,
    defaultMatchWidth: "wide",
    parsePatterns: Zm,
    defaultParseWidth: "any"
  }),
  quarter: ir({
    matchPatterns: eg,
    defaultMatchWidth: "wide",
    parsePatterns: tg,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: ir({
    matchPatterns: rg,
    defaultMatchWidth: "wide",
    parsePatterns: ng,
    defaultParseWidth: "any"
  }),
  day: ir({
    matchPatterns: ig,
    defaultMatchWidth: "wide",
    parsePatterns: ag,
    defaultParseWidth: "any"
  }),
  dayPeriod: ir({
    matchPatterns: sg,
    defaultMatchWidth: "any",
    parsePatterns: og,
    defaultParseWidth: "any"
  })
};
const fg = lg;
var cg = {
  code: "en-US",
  formatDistance: km,
  formatLong: Rm,
  formatRelative: Bm,
  localize: jm,
  match: fg,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const ug = cg;
function Jf(e, t) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e;
}
function hg(e) {
  return Jf({}, e);
}
function rl(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var nl = 1440, dg = 2520, $s = 43200, pg = 86400;
function mg(e, t, r) {
  var n, i;
  qt(2, arguments);
  var a = xm(), s = (n = (i = r == null ? void 0 : r.locale) !== null && i !== void 0 ? i : a.locale) !== null && n !== void 0 ? n : ug;
  if (!s.formatDistance)
    throw new RangeError("locale must contain formatDistance property");
  var o = na(e, t);
  if (isNaN(o))
    throw new RangeError("Invalid time value");
  var l = Jf(hg(r), {
    addSuffix: !!(r != null && r.addSuffix),
    comparison: o
  }), f, c;
  o > 0 ? (f = ut(t), c = ut(e)) : (f = ut(e), c = ut(t));
  var u = Fm(c, f), h = (rl(c) - rl(f)) / 1e3, d = Math.round((u - h) / 60), v;
  if (d < 2)
    return r != null && r.includeSeconds ? u < 5 ? s.formatDistance("lessThanXSeconds", 5, l) : u < 10 ? s.formatDistance("lessThanXSeconds", 10, l) : u < 20 ? s.formatDistance("lessThanXSeconds", 20, l) : u < 40 ? s.formatDistance("halfAMinute", 0, l) : u < 60 ? s.formatDistance("lessThanXMinutes", 1, l) : s.formatDistance("xMinutes", 1, l) : d === 0 ? s.formatDistance("lessThanXMinutes", 1, l) : s.formatDistance("xMinutes", d, l);
  if (d < 45)
    return s.formatDistance("xMinutes", d, l);
  if (d < 90)
    return s.formatDistance("aboutXHours", 1, l);
  if (d < nl) {
    var p = Math.round(d / 60);
    return s.formatDistance("aboutXHours", p, l);
  } else {
    if (d < dg)
      return s.formatDistance("xDays", 1, l);
    if (d < $s) {
      var m = Math.round(d / nl);
      return s.formatDistance("xDays", m, l);
    } else if (d < pg)
      return v = Math.round(d / $s), s.formatDistance("aboutXMonths", v, l);
  }
  if (v = Sm(c, f), v < 12) {
    var g = Math.round(d / $s);
    return s.formatDistance("xMonths", g, l);
  } else {
    var x = v % 12, _ = Math.floor(v / 12);
    return x < 3 ? s.formatDistance("aboutXYears", _, l) : x < 9 ? s.formatDistance("overXYears", _, l) : s.formatDistance("almostXYears", _ + 1, l);
  }
}
function gg(e, t) {
  return qt(1, arguments), mg(e, Date.now(), t);
}
var vg = {
  lessThanXSeconds: {
    one: "menos de un segundo",
    other: "menos de {{count}} segundos"
  },
  xSeconds: {
    one: "1 segundo",
    other: "{{count}} segundos"
  },
  halfAMinute: "medio minuto",
  lessThanXMinutes: {
    one: "menos de un minuto",
    other: "menos de {{count}} minutos"
  },
  xMinutes: {
    one: "1 minuto",
    other: "{{count}} minutos"
  },
  aboutXHours: {
    one: "alrededor de 1 hora",
    other: "alrededor de {{count}} horas"
  },
  xHours: {
    one: "1 hora",
    other: "{{count}} horas"
  },
  xDays: {
    one: "1 día",
    other: "{{count}} días"
  },
  aboutXWeeks: {
    one: "alrededor de 1 semana",
    other: "alrededor de {{count}} semanas"
  },
  xWeeks: {
    one: "1 semana",
    other: "{{count}} semanas"
  },
  aboutXMonths: {
    one: "alrededor de 1 mes",
    other: "alrededor de {{count}} meses"
  },
  xMonths: {
    one: "1 mes",
    other: "{{count}} meses"
  },
  aboutXYears: {
    one: "alrededor de 1 año",
    other: "alrededor de {{count}} años"
  },
  xYears: {
    one: "1 año",
    other: "{{count}} años"
  },
  overXYears: {
    one: "más de 1 año",
    other: "más de {{count}} años"
  },
  almostXYears: {
    one: "casi 1 año",
    other: "casi {{count}} años"
  }
}, xg = function(t, r, n) {
  var i, a = vg[t];
  return typeof a == "string" ? i = a : r === 1 ? i = a.one : i = a.other.replace("{{count}}", r.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "en " + i : "hace " + i : i;
};
const _g = xg;
var yg = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, wg = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Eg = {
  full: "{{date}} 'a las' {{time}}",
  long: "{{date}} 'a las' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Sg = {
  date: On({
    formats: yg,
    defaultWidth: "full"
  }),
  time: On({
    formats: wg,
    defaultWidth: "full"
  }),
  dateTime: On({
    formats: Eg,
    defaultWidth: "full"
  })
};
const Tg = Sg;
var Ag = {
  lastWeek: "'el' eeee 'pasado a la' p",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'mañana a la' p",
  nextWeek: "eeee 'a la' p",
  other: "P"
}, Cg = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'mañana a las' p",
  nextWeek: "eeee 'a las' p",
  other: "P"
}, Fg = function(t, r, n, i) {
  return r.getUTCHours() !== 1 ? Cg[t] : Ag[t];
};
const Og = Fg;
var bg = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "después de cristo"]
}, kg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, Mg = {
  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
}, Dg = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
  abbreviated: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  wide: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
}, Ig = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "mañana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "mañana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "mañana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  }
}, Pg = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "de la mañana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "de la mañana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "de la mañana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  }
}, Rg = function(t, r) {
  var n = Number(t);
  return n + "º";
}, Ng = {
  ordinalNumber: Rg,
  era: nr({
    values: bg,
    defaultWidth: "wide"
  }),
  quarter: nr({
    values: kg,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return Number(t) - 1;
    }
  }),
  month: nr({
    values: Mg,
    defaultWidth: "wide"
  }),
  day: nr({
    values: Dg,
    defaultWidth: "wide"
  }),
  dayPeriod: nr({
    values: Ig,
    defaultWidth: "wide",
    formattingValues: Pg,
    defaultFormattingWidth: "wide"
  })
};
const Lg = Ng;
var Bg = /^(\d+)(º)?/i, $g = /\d+/i, Ug = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
}, Hg = {
  any: [/^ac/i, /^dc/i],
  wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
}, Wg = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, zg = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Vg = {
  narrow: /^[efmajsond]/i,
  abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
  wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
}, Gg = {
  narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
}, Xg = {
  narrow: /^[dlmjvs]/i,
  short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
  abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
  wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
}, jg = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
}, Yg = {
  narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
  any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
}, qg = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn/i,
    noon: /^md/i,
    morning: /mañana/i,
    afternoon: /tarde/i,
    evening: /tarde/i,
    night: /noche/i
  }
}, Kg = {
  ordinalNumber: Kf({
    matchPattern: Bg,
    parsePattern: $g,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: ir({
    matchPatterns: Ug,
    defaultMatchWidth: "wide",
    parsePatterns: Hg,
    defaultParseWidth: "any"
  }),
  quarter: ir({
    matchPatterns: Wg,
    defaultMatchWidth: "wide",
    parsePatterns: zg,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: ir({
    matchPatterns: Vg,
    defaultMatchWidth: "wide",
    parsePatterns: Gg,
    defaultParseWidth: "any"
  }),
  day: ir({
    matchPatterns: Xg,
    defaultMatchWidth: "wide",
    parsePatterns: jg,
    defaultParseWidth: "any"
  }),
  dayPeriod: ir({
    matchPatterns: Yg,
    defaultMatchWidth: "any",
    parsePatterns: qg,
    defaultParseWidth: "any"
  })
};
const Jg = Kg;
var Qg = {
  code: "es",
  formatDistance: _g,
  formatLong: Tg,
  formatRelative: Og,
  localize: Lg,
  match: Jg,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
const Zg = Qg, ev = {
  name: "TipiInitiativeMeta",
  components: {
    TipiIcon: Wr
  },
  props: {
    initiative: Object,
    metaColors: {
      type: Object,
      default: function() {
        return {
          completed: [
            "Aprobada",
            "Respondida",
            "Celebrada",
            "Convertida en otra",
            "Acumulada en otra"
          ],
          neutral: ["En tramitación", "Desconocida"],
          error: [
            "No admitida a trámite",
            "No debatida",
            "Rechazada",
            "Retirada",
            "Derogada",
            "No celebrada"
          ]
        };
      }
    }
  },
  methods: {
    getColorByStatus: function(e) {
      for (let t in this.metaColors)
        if (this.metaColors[t].indexOf(e) != -1)
          return t;
      return "neutral";
    },
    getIcon: function(e) {
      const t = this.getColorByStatus(e.status);
      return { completed: "success", neutral: "clock", error: "denied" }[t];
    },
    getStateMessage: function(e) {
      if (e.status == "Desconocida")
        return `${e.status}`;
      const t = this.getColorByStatus(e.status);
      let r = e.updated;
      t == "neutral" && (r = e.created);
      const n = gg(new Date(r), {
        locale: Zg,
        addSuffix: !0
      });
      return `${e.status} ${n}`;
    }
  }
}, tv = { class: "c-initiative-meta" };
function rv(e, t, r, n, i, a) {
  const s = je("tipi-icon");
  return q(), Z("div", tv, [
    K("div", {
      class: _t(
        `c-initiative-meta__status c-initiative-meta__status--${a.getColorByStatus(
          r.initiative.status
        )}`
      )
    }, [
      K("strong", null, [
        Xe(s, {
          icon: a.getIcon(r.initiative)
        }, null, 8, ["icon"]),
        We(" " + ve(a.getStateMessage(r.initiative)), 1)
      ])
    ], 2)
  ]);
}
const Qf = /* @__PURE__ */ Le(ev, [["render", rv]]), nv = {
  name: "TipiInitiativeCard",
  components: {
    TipiIcon: Wr,
    TipiTopicPill: qf,
    TipiInitiativeMeta: Qf
  },
  props: {
    initiative: Object,
    topicsStyles: Object,
    extendedLayout: Boolean,
    metaDeputies: String,
    metaGroupsOthers: String,
    metaColors: { type: Object, default: void 0 }
  },
  methods: {
    getAuthors: function(e) {
      return e.authors.length ? e.authors.join("<br/>") : "";
    },
    getTopics: function(e) {
      let t = [];
      for (const r of e.tagged)
        t = t.concat(r.topics);
      return t;
    },
    getDeputies: function(e) {
      if (e.deputies.length == 0)
        return "";
      let t = /\[.*\]/;
      return e.deputies.map((r) => {
        var n = t.exec(r);
        return n ? r.replace(n[0], "").trim() : r;
      }).join("<br/>");
    }
  }
}, iv = ["id"], av = { class: "c-initiative-card__title" }, sv = { key: 1 }, ov = {
  key: 0,
  class: "c-initiative-card__authors"
}, lv = { class: "c-initiative-card__label" }, fv = ["innerHTML"], cv = {
  key: 1,
  class: "c-initiative-card__authors"
}, uv = { class: "c-initiative-card__label" }, hv = ["innerHTML"], dv = ["href"], pv = { class: "o-grid" }, mv = { class: "o-grid__col" }, gv = { class: "o-grid__col o-grid__col--right" }, vv = ["href"];
function xv(e, t, r, n, i, a) {
  const s = je("router-link"), o = je("tipi-topic-pill"), l = je("tipi-initiative-meta"), f = je("tipi-icon");
  return q(), Z("div", null, [
    K("article", {
      class: "c-initiative-card",
      id: `initiative-card-${r.initiative.id}`
    }, [
      K("h2", av, [
        r.initiative.id ? (q(), Je(s, {
          key: 0,
          to: { name: "initiative", params: { id: r.initiative.id } }
        }, {
          default: yt(() => [
            We(ve(r.initiative.title), 1)
          ]),
          _: 1
        }, 8, ["to"])) : (q(), Z("span", sv, ve(r.initiative.title), 1))
      ]),
      a.getDeputies(r.initiative) && r.extendedLayout ? (q(), Z("div", ov, [
        K("h3", lv, ve(r.metaDeputies), 1),
        K("p", {
          innerHTML: a.getDeputies(r.initiative)
        }, null, 8, fv)
      ])) : Ee("", !0),
      a.getAuthors(r.initiative) && r.extendedLayout ? (q(), Z("div", cv, [
        K("h3", uv, ve(r.metaGroupsOthers), 1),
        K("p", {
          innerHTML: a.getAuthors(r.initiative)
        }, null, 8, hv)
      ])) : Ee("", !0),
      r.initiative.id ? (q(), Je(s, {
        key: 2,
        to: { name: "initiative", params: { id: r.initiative.id } }
      }, {
        default: yt(({ href: c }) => [
          K("a", {
            href: c,
            target: "_blank"
          }, [
            Xe(o, {
              class: "c-initiative-card__topics",
              topicsStyles: r.topicsStyles,
              topics: a.getTopics(r.initiative),
              limit: 3
            }, null, 8, ["topicsStyles", "topics"])
          ], 8, dv)
        ]),
        _: 1
      }, 8, ["to"])) : Ee("", !0),
      K("div", pv, [
        K("div", mv, [
          Xe(l, {
            initiative: r.initiative,
            metaColors: r.metaColors
          }, null, 8, ["initiative", "metaColors"])
        ]),
        K("div", gv, [
          r.initiative.id ? (q(), Je(s, {
            key: 0,
            to: { name: "initiative", params: { id: r.initiative.id } }
          }, {
            default: yt(({ href: c }) => [
              K("a", {
                href: c,
                target: "_blank"
              }, [
                Xe(f, {
                  icon: "open-blank",
                  class: "c-icon--secondary"
                })
              ], 8, vv)
            ]),
            _: 1
          }, 8, ["to"])) : Ee("", !0)
        ])
      ])
    ], 8, iv)
  ]);
}
const Zf = /* @__PURE__ */ Le(nv, [["render", xv]]), _v = {
  name: "TipiLoader",
  props: {
    title: String,
    subtitle: String
  }
}, yv = { class: "c-loader" }, wv = /* @__PURE__ */ Xf('<div class="c-loader__spinner"><div class="c-loader__spinner-dot"></div><div class="c-loader__spinner-dot"></div><div class="c-loader__spinner-dot"></div><div class="c-loader__spinner-dot"></div><div class="c-loader__spinner-dot"></div><div class="c-loader__spinner-dot"></div></div>', 1), Ev = {
  key: 0,
  class: "c-loader__text"
}, Sv = {
  key: 0,
  class: "c-loader__title"
};
function Tv(e, t, r, n, i, a) {
  return q(), Z("div", yv, [
    wv,
    r.title || r.subtitle ? (q(), Z("div", Ev, [
      r.title ? (q(), Z("h4", Sv, ve(r.title), 1)) : Ee("", !0),
      We(" " + ve(r.subtitle), 1)
    ])) : Ee("", !0)
  ]);
}
const ec = /* @__PURE__ */ Le(_v, [["render", Tv]]);
var tc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function za(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function rc(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var nc = { exports: {} }, Us = { exports: {} }, Hs = { exports: {} }, il;
function ic() {
  return il || (il = 1, function(e) {
    (function(t, r) {
      e.exports ? e.exports = r() : t.EvEmitter = r();
    })(typeof window < "u" ? window : tc, function() {
      function t() {
      }
      var r = t.prototype;
      return r.on = function(n, i) {
        if (!(!n || !i)) {
          var a = this._events = this._events || {}, s = a[n] = a[n] || [];
          return s.indexOf(i) == -1 && s.push(i), this;
        }
      }, r.once = function(n, i) {
        if (!(!n || !i)) {
          this.on(n, i);
          var a = this._onceEvents = this._onceEvents || {}, s = a[n] = a[n] || {};
          return s[i] = !0, this;
        }
      }, r.off = function(n, i) {
        var a = this._events && this._events[n];
        if (!(!a || !a.length)) {
          var s = a.indexOf(i);
          return s != -1 && a.splice(s, 1), this;
        }
      }, r.emitEvent = function(n, i) {
        var a = this._events && this._events[n];
        if (!(!a || !a.length)) {
          a = a.slice(0), i = i || [];
          for (var s = this._onceEvents && this._onceEvents[n], o = 0; o < a.length; o++) {
            var l = a[o], f = s && s[l];
            f && (this.off(n, l), delete s[l]), l.apply(this, i);
          }
          return this;
        }
      }, r.allOff = function() {
        delete this._events, delete this._onceEvents;
      }, t;
    });
  }(Hs)), Hs.exports;
}
var Ws = { exports: {} };
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
var al;
function Zo() {
  return al || (al = 1, function(e) {
    (function(t, r) {
      e.exports ? e.exports = r() : t.getSize = r();
    })(window, function() {
      function r(d) {
        var v = parseFloat(d), p = d.indexOf("%") == -1 && !isNaN(v);
        return p && v;
      }
      function n() {
      }
      var i = typeof console > "u" ? n : function(d) {
        console.error(d);
      }, a = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth"
      ], s = a.length;
      function o() {
        for (var d = {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0,
          outerWidth: 0,
          outerHeight: 0
        }, v = 0; v < s; v++) {
          var p = a[v];
          d[p] = 0;
        }
        return d;
      }
      function l(d) {
        var v = getComputedStyle(d);
        return v || i("Style returned " + v + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), v;
      }
      var f = !1, c;
      function u() {
        if (!f) {
          f = !0;
          var d = document.createElement("div");
          d.style.width = "200px", d.style.padding = "1px 2px 3px 4px", d.style.borderStyle = "solid", d.style.borderWidth = "1px 2px 3px 4px", d.style.boxSizing = "border-box";
          var v = document.body || document.documentElement;
          v.appendChild(d);
          var p = l(d);
          c = Math.round(r(p.width)) == 200, h.isBoxSizeOuter = c, v.removeChild(d);
        }
      }
      function h(d) {
        if (u(), typeof d == "string" && (d = document.querySelector(d)), !(!d || typeof d != "object" || !d.nodeType)) {
          var v = l(d);
          if (v.display == "none")
            return o();
          var p = {};
          p.width = d.offsetWidth, p.height = d.offsetHeight;
          for (var m = p.isBorderBox = v.boxSizing == "border-box", g = 0; g < s; g++) {
            var x = a[g], _ = v[x], C = parseFloat(_);
            p[x] = isNaN(C) ? 0 : C;
          }
          var R = p.paddingLeft + p.paddingRight, G = p.paddingTop + p.paddingBottom, b = p.marginLeft + p.marginRight, L = p.marginTop + p.marginBottom, P = p.borderLeftWidth + p.borderRightWidth, N = p.borderTopWidth + p.borderBottomWidth, F = m && c, O = r(v.width);
          O !== !1 && (p.width = O + // add padding and border unless it's already including it
          (F ? 0 : R + P));
          var M = r(v.height);
          return M !== !1 && (p.height = M + // add padding and border unless it's already including it
          (F ? 0 : G + N)), p.innerWidth = p.width - (R + P), p.innerHeight = p.height - (G + N), p.outerWidth = p.width + b, p.outerHeight = p.height + L, p;
        }
      }
      return h;
    });
  }(Ws)), Ws.exports;
}
var zs = { exports: {} }, Vs = { exports: {} }, sl;
function Av() {
  return sl || (sl = 1, function(e) {
    (function(t, r) {
      e.exports ? e.exports = r() : t.matchesSelector = r();
    })(window, function() {
      var r = function() {
        var n = window.Element.prototype;
        if (n.matches)
          return "matches";
        if (n.matchesSelector)
          return "matchesSelector";
        for (var i = ["webkit", "moz", "ms", "o"], a = 0; a < i.length; a++) {
          var s = i[a], o = s + "MatchesSelector";
          if (n[o])
            return o;
        }
      }();
      return function(i, a) {
        return i[r](a);
      };
    });
  }(Vs)), Vs.exports;
}
var ol;
function Cv() {
  return ol || (ol = 1, function(e) {
    (function(t, r) {
      e.exports ? e.exports = r(
        t,
        Av()
      ) : t.fizzyUIUtils = r(
        t,
        t.matchesSelector
      );
    })(window, function(r, n) {
      var i = {};
      i.extend = function(o, l) {
        for (var f in l)
          o[f] = l[f];
        return o;
      }, i.modulo = function(o, l) {
        return (o % l + l) % l;
      };
      var a = Array.prototype.slice;
      i.makeArray = function(o) {
        if (Array.isArray(o))
          return o;
        if (o == null)
          return [];
        var l = typeof o == "object" && typeof o.length == "number";
        return l ? a.call(o) : [o];
      }, i.removeFrom = function(o, l) {
        var f = o.indexOf(l);
        f != -1 && o.splice(f, 1);
      }, i.getParent = function(o, l) {
        for (; o.parentNode && o != document.body; )
          if (o = o.parentNode, n(o, l))
            return o;
      }, i.getQueryElement = function(o) {
        return typeof o == "string" ? document.querySelector(o) : o;
      }, i.handleEvent = function(o) {
        var l = "on" + o.type;
        this[l] && this[l](o);
      }, i.filterFindElements = function(o, l) {
        o = i.makeArray(o);
        var f = [];
        return o.forEach(function(c) {
          if (c instanceof HTMLElement) {
            if (!l) {
              f.push(c);
              return;
            }
            n(c, l) && f.push(c);
            for (var u = c.querySelectorAll(l), h = 0; h < u.length; h++)
              f.push(u[h]);
          }
        }), f;
      }, i.debounceMethod = function(o, l, f) {
        f = f || 100;
        var c = o.prototype[l], u = l + "Timeout";
        o.prototype[l] = function() {
          var h = this[u];
          clearTimeout(h);
          var d = arguments, v = this;
          this[u] = setTimeout(function() {
            c.apply(v, d), delete v[u];
          }, f);
        };
      }, i.docReady = function(o) {
        var l = document.readyState;
        l == "complete" || l == "interactive" ? setTimeout(o) : document.addEventListener("DOMContentLoaded", o);
      }, i.toDashed = function(o) {
        return o.replace(/(.)([A-Z])/g, function(l, f, c) {
          return f + "-" + c;
        }).toLowerCase();
      };
      var s = r.console;
      return i.htmlInit = function(o, l) {
        i.docReady(function() {
          var f = i.toDashed(l), c = "data-" + f, u = document.querySelectorAll("[" + c + "]"), h = document.querySelectorAll(".js-" + f), d = i.makeArray(u).concat(i.makeArray(h)), v = c + "-options", p = r.jQuery;
          d.forEach(function(m) {
            var g = m.getAttribute(c) || m.getAttribute(v), x;
            try {
              x = g && JSON.parse(g);
            } catch (C) {
              s && s.error("Error parsing " + c + " on " + m.className + ": " + C);
              return;
            }
            var _ = new o(m, x);
            p && p.data(m, l, _);
          });
        });
      }, i;
    });
  }(zs)), zs.exports;
}
var Gs = { exports: {} }, ll;
function Fv() {
  return ll || (ll = 1, function(e) {
    (function(t, r) {
      e.exports ? e.exports = r(
        ic(),
        Zo()
      ) : (t.Outlayer = {}, t.Outlayer.Item = r(
        t.EvEmitter,
        t.getSize
      ));
    })(window, function(r, n) {
      function i(m) {
        for (var g in m)
          return !1;
        return g = null, !0;
      }
      var a = document.documentElement.style, s = typeof a.transition == "string" ? "transition" : "WebkitTransition", o = typeof a.transform == "string" ? "transform" : "WebkitTransform", l = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
      }[s], f = {
        transform: o,
        transition: s,
        transitionDuration: s + "Duration",
        transitionProperty: s + "Property",
        transitionDelay: s + "Delay"
      };
      function c(m, g) {
        m && (this.element = m, this.layout = g, this.position = {
          x: 0,
          y: 0
        }, this._create());
      }
      var u = c.prototype = Object.create(r.prototype);
      u.constructor = c, u._create = function() {
        this._transn = {
          ingProperties: {},
          clean: {},
          onEnd: {}
        }, this.css({
          position: "absolute"
        });
      }, u.handleEvent = function(m) {
        var g = "on" + m.type;
        this[g] && this[g](m);
      }, u.getSize = function() {
        this.size = n(this.element);
      }, u.css = function(m) {
        var g = this.element.style;
        for (var x in m) {
          var _ = f[x] || x;
          g[_] = m[x];
        }
      }, u.getPosition = function() {
        var m = getComputedStyle(this.element), g = this.layout._getOption("originLeft"), x = this.layout._getOption("originTop"), _ = m[g ? "left" : "right"], C = m[x ? "top" : "bottom"], R = parseFloat(_), G = parseFloat(C), b = this.layout.size;
        _.indexOf("%") != -1 && (R = R / 100 * b.width), C.indexOf("%") != -1 && (G = G / 100 * b.height), R = isNaN(R) ? 0 : R, G = isNaN(G) ? 0 : G, R -= g ? b.paddingLeft : b.paddingRight, G -= x ? b.paddingTop : b.paddingBottom, this.position.x = R, this.position.y = G;
      }, u.layoutPosition = function() {
        var m = this.layout.size, g = {}, x = this.layout._getOption("originLeft"), _ = this.layout._getOption("originTop"), C = x ? "paddingLeft" : "paddingRight", R = x ? "left" : "right", G = x ? "right" : "left", b = this.position.x + m[C];
        g[R] = this.getXValue(b), g[G] = "";
        var L = _ ? "paddingTop" : "paddingBottom", P = _ ? "top" : "bottom", N = _ ? "bottom" : "top", F = this.position.y + m[L];
        g[P] = this.getYValue(F), g[N] = "", this.css(g), this.emitEvent("layout", [this]);
      }, u.getXValue = function(m) {
        var g = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !g ? m / this.layout.size.width * 100 + "%" : m + "px";
      }, u.getYValue = function(m) {
        var g = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && g ? m / this.layout.size.height * 100 + "%" : m + "px";
      }, u._transitionTo = function(m, g) {
        this.getPosition();
        var x = this.position.x, _ = this.position.y, C = m == this.position.x && g == this.position.y;
        if (this.setPosition(m, g), C && !this.isTransitioning) {
          this.layoutPosition();
          return;
        }
        var R = m - x, G = g - _, b = {};
        b.transform = this.getTranslate(R, G), this.transition({
          to: b,
          onTransitionEnd: {
            transform: this.layoutPosition
          },
          isCleaning: !0
        });
      }, u.getTranslate = function(m, g) {
        var x = this.layout._getOption("originLeft"), _ = this.layout._getOption("originTop");
        return m = x ? m : -m, g = _ ? g : -g, "translate3d(" + m + "px, " + g + "px, 0)";
      }, u.goTo = function(m, g) {
        this.setPosition(m, g), this.layoutPosition();
      }, u.moveTo = u._transitionTo, u.setPosition = function(m, g) {
        this.position.x = parseFloat(m), this.position.y = parseFloat(g);
      }, u._nonTransition = function(m) {
        this.css(m.to), m.isCleaning && this._removeStyles(m.to);
        for (var g in m.onTransitionEnd)
          m.onTransitionEnd[g].call(this);
      }, u.transition = function(m) {
        if (!parseFloat(this.layout.options.transitionDuration)) {
          this._nonTransition(m);
          return;
        }
        var g = this._transn;
        for (var x in m.onTransitionEnd)
          g.onEnd[x] = m.onTransitionEnd[x];
        for (x in m.to)
          g.ingProperties[x] = !0, m.isCleaning && (g.clean[x] = !0);
        m.from && (this.css(m.from), this.element.offsetHeight), this.enableTransition(m.to), this.css(m.to), this.isTransitioning = !0;
      };
      function h(m) {
        return m.replace(/([A-Z])/g, function(g) {
          return "-" + g.toLowerCase();
        });
      }
      var d = "opacity," + h(o);
      u.enableTransition = function() {
        if (!this.isTransitioning) {
          var m = this.layout.options.transitionDuration;
          m = typeof m == "number" ? m + "ms" : m, this.css({
            transitionProperty: d,
            transitionDuration: m,
            transitionDelay: this.staggerDelay || 0
          }), this.element.addEventListener(l, this, !1);
        }
      }, u.onwebkitTransitionEnd = function(m) {
        this.ontransitionend(m);
      }, u.onotransitionend = function(m) {
        this.ontransitionend(m);
      };
      var v = {
        "-webkit-transform": "transform"
      };
      u.ontransitionend = function(m) {
        if (m.target === this.element) {
          var g = this._transn, x = v[m.propertyName] || m.propertyName;
          if (delete g.ingProperties[x], i(g.ingProperties) && this.disableTransition(), x in g.clean && (this.element.style[m.propertyName] = "", delete g.clean[x]), x in g.onEnd) {
            var _ = g.onEnd[x];
            _.call(this), delete g.onEnd[x];
          }
          this.emitEvent("transitionEnd", [this]);
        }
      }, u.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1;
      }, u._removeStyles = function(m) {
        var g = {};
        for (var x in m)
          g[x] = "";
        this.css(g);
      };
      var p = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
      };
      return u.removeTransitionStyles = function() {
        this.css(p);
      }, u.stagger = function(m) {
        m = isNaN(m) ? 0 : m, this.staggerDelay = m + "ms";
      }, u.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
      }, u.remove = function() {
        if (!s || !parseFloat(this.layout.options.transitionDuration)) {
          this.removeElem();
          return;
        }
        this.once("transitionEnd", function() {
          this.removeElem();
        }), this.hide();
      }, u.reveal = function() {
        delete this.isHidden, this.css({ display: "" });
        var m = this.layout.options, g = {}, x = this.getHideRevealTransitionEndProperty("visibleStyle");
        g[x] = this.onRevealTransitionEnd, this.transition({
          from: m.hiddenStyle,
          to: m.visibleStyle,
          isCleaning: !0,
          onTransitionEnd: g
        });
      }, u.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal");
      }, u.getHideRevealTransitionEndProperty = function(m) {
        var g = this.layout.options[m];
        if (g.opacity)
          return "opacity";
        for (var x in g)
          return x;
      }, u.hide = function() {
        this.isHidden = !0, this.css({ display: "" });
        var m = this.layout.options, g = {}, x = this.getHideRevealTransitionEndProperty("hiddenStyle");
        g[x] = this.onHideTransitionEnd, this.transition({
          from: m.visibleStyle,
          to: m.hiddenStyle,
          // keep hidden stuff hidden
          isCleaning: !0,
          onTransitionEnd: g
        });
      }, u.onHideTransitionEnd = function() {
        this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
      }, u.destroy = function() {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: ""
        });
      }, c;
    });
  }(Gs)), Gs.exports;
}
/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */
var fl;
function Ov() {
  return fl || (fl = 1, function(e) {
    (function(t, r) {
      e.exports ? e.exports = r(
        t,
        ic(),
        Zo(),
        Cv(),
        Fv()
      ) : t.Outlayer = r(
        t,
        t.EvEmitter,
        t.getSize,
        t.fizzyUIUtils,
        t.Outlayer.Item
      );
    })(window, function(r, n, i, a, s) {
      var o = r.console, l = r.jQuery, f = function() {
      }, c = 0, u = {};
      function h(g, x) {
        var _ = a.getQueryElement(g);
        if (!_) {
          o && o.error("Bad element for " + this.constructor.namespace + ": " + (_ || g));
          return;
        }
        this.element = _, l && (this.$element = l(this.element)), this.options = a.extend({}, this.constructor.defaults), this.option(x);
        var C = ++c;
        this.element.outlayerGUID = C, u[C] = this, this._create();
        var R = this._getOption("initLayout");
        R && this.layout();
      }
      h.namespace = "outlayer", h.Item = s, h.defaults = {
        containerStyle: {
          position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        // item options
        transitionDuration: "0.4s",
        hiddenStyle: {
          opacity: 0,
          transform: "scale(0.001)"
        },
        visibleStyle: {
          opacity: 1,
          transform: "scale(1)"
        }
      };
      var d = h.prototype;
      a.extend(d, n.prototype), d.option = function(g) {
        a.extend(this.options, g);
      }, d._getOption = function(g) {
        var x = this.constructor.compatOptions[g];
        return x && this.options[x] !== void 0 ? this.options[x] : this.options[g];
      }, h.compatOptions = {
        // currentName: oldName
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
      }, d._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), a.extend(this.element.style, this.options.containerStyle);
        var g = this._getOption("resize");
        g && this.bindResize();
      }, d.reloadItems = function() {
        this.items = this._itemize(this.element.children);
      }, d._itemize = function(g) {
        for (var x = this._filterFindItemElements(g), _ = this.constructor.Item, C = [], R = 0; R < x.length; R++) {
          var G = x[R], b = new _(G, this);
          C.push(b);
        }
        return C;
      }, d._filterFindItemElements = function(g) {
        return a.filterFindElements(g, this.options.itemSelector);
      }, d.getItemElements = function() {
        return this.items.map(function(g) {
          return g.element;
        });
      }, d.layout = function() {
        this._resetLayout(), this._manageStamps();
        var g = this._getOption("layoutInstant"), x = g !== void 0 ? g : !this._isLayoutInited;
        this.layoutItems(this.items, x), this._isLayoutInited = !0;
      }, d._init = d.layout, d._resetLayout = function() {
        this.getSize();
      }, d.getSize = function() {
        this.size = i(this.element);
      }, d._getMeasurement = function(g, x) {
        var _ = this.options[g], C;
        _ ? (typeof _ == "string" ? C = this.element.querySelector(_) : _ instanceof HTMLElement && (C = _), this[g] = C ? i(C)[x] : _) : this[g] = 0;
      }, d.layoutItems = function(g, x) {
        g = this._getItemsForLayout(g), this._layoutItems(g, x), this._postLayout();
      }, d._getItemsForLayout = function(g) {
        return g.filter(function(x) {
          return !x.isIgnored;
        });
      }, d._layoutItems = function(g, x) {
        if (this._emitCompleteOnItems("layout", g), !(!g || !g.length)) {
          var _ = [];
          g.forEach(function(C) {
            var R = this._getItemLayoutPosition(C);
            R.item = C, R.isInstant = x || C.isLayoutInstant, _.push(R);
          }, this), this._processLayoutQueue(_);
        }
      }, d._getItemLayoutPosition = function() {
        return {
          x: 0,
          y: 0
        };
      }, d._processLayoutQueue = function(g) {
        this.updateStagger(), g.forEach(function(x, _) {
          this._positionItem(x.item, x.x, x.y, x.isInstant, _);
        }, this);
      }, d.updateStagger = function() {
        var g = this.options.stagger;
        if (g == null) {
          this.stagger = 0;
          return;
        }
        return this.stagger = m(g), this.stagger;
      }, d._positionItem = function(g, x, _, C, R) {
        C ? g.goTo(x, _) : (g.stagger(R * this.stagger), g.moveTo(x, _));
      }, d._postLayout = function() {
        this.resizeContainer();
      }, d.resizeContainer = function() {
        var g = this._getOption("resizeContainer");
        if (g) {
          var x = this._getContainerSize();
          x && (this._setContainerMeasure(x.width, !0), this._setContainerMeasure(x.height, !1));
        }
      }, d._getContainerSize = f, d._setContainerMeasure = function(g, x) {
        if (g !== void 0) {
          var _ = this.size;
          _.isBorderBox && (g += x ? _.paddingLeft + _.paddingRight + _.borderLeftWidth + _.borderRightWidth : _.paddingBottom + _.paddingTop + _.borderTopWidth + _.borderBottomWidth), g = Math.max(g, 0), this.element.style[x ? "width" : "height"] = g + "px";
        }
      }, d._emitCompleteOnItems = function(g, x) {
        var _ = this;
        function C() {
          _.dispatchEvent(g + "Complete", null, [x]);
        }
        var R = x.length;
        if (!x || !R) {
          C();
          return;
        }
        var G = 0;
        function b() {
          G++, G == R && C();
        }
        x.forEach(function(L) {
          L.once(g, b);
        });
      }, d.dispatchEvent = function(g, x, _) {
        var C = x ? [x].concat(_) : _;
        if (this.emitEvent(g, C), l)
          if (this.$element = this.$element || l(this.element), x) {
            var R = l.Event(x);
            R.type = g, this.$element.trigger(R, _);
          } else
            this.$element.trigger(g, _);
      }, d.ignore = function(g) {
        var x = this.getItem(g);
        x && (x.isIgnored = !0);
      }, d.unignore = function(g) {
        var x = this.getItem(g);
        x && delete x.isIgnored;
      }, d.stamp = function(g) {
        g = this._find(g), g && (this.stamps = this.stamps.concat(g), g.forEach(this.ignore, this));
      }, d.unstamp = function(g) {
        g = this._find(g), g && g.forEach(function(x) {
          a.removeFrom(this.stamps, x), this.unignore(x);
        }, this);
      }, d._find = function(g) {
        if (g)
          return typeof g == "string" && (g = this.element.querySelectorAll(g)), g = a.makeArray(g), g;
      }, d._manageStamps = function() {
        !this.stamps || !this.stamps.length || (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
      }, d._getBoundingRect = function() {
        var g = this.element.getBoundingClientRect(), x = this.size;
        this._boundingRect = {
          left: g.left + x.paddingLeft + x.borderLeftWidth,
          top: g.top + x.paddingTop + x.borderTopWidth,
          right: g.right - (x.paddingRight + x.borderRightWidth),
          bottom: g.bottom - (x.paddingBottom + x.borderBottomWidth)
        };
      }, d._manageStamp = f, d._getElementOffset = function(g) {
        var x = g.getBoundingClientRect(), _ = this._boundingRect, C = i(g), R = {
          left: x.left - _.left - C.marginLeft,
          top: x.top - _.top - C.marginTop,
          right: _.right - x.right - C.marginRight,
          bottom: _.bottom - x.bottom - C.marginBottom
        };
        return R;
      }, d.handleEvent = a.handleEvent, d.bindResize = function() {
        r.addEventListener("resize", this), this.isResizeBound = !0;
      }, d.unbindResize = function() {
        r.removeEventListener("resize", this), this.isResizeBound = !1;
      }, d.onresize = function() {
        this.resize();
      }, a.debounceMethod(h, "onresize", 100), d.resize = function() {
        !this.isResizeBound || !this.needsResizeLayout() || this.layout();
      }, d.needsResizeLayout = function() {
        var g = i(this.element), x = this.size && g;
        return x && g.innerWidth !== this.size.innerWidth;
      }, d.addItems = function(g) {
        var x = this._itemize(g);
        return x.length && (this.items = this.items.concat(x)), x;
      }, d.appended = function(g) {
        var x = this.addItems(g);
        x.length && (this.layoutItems(x, !0), this.reveal(x));
      }, d.prepended = function(g) {
        var x = this._itemize(g);
        if (x.length) {
          var _ = this.items.slice(0);
          this.items = x.concat(_), this._resetLayout(), this._manageStamps(), this.layoutItems(x, !0), this.reveal(x), this.layoutItems(_);
        }
      }, d.reveal = function(g) {
        if (this._emitCompleteOnItems("reveal", g), !(!g || !g.length)) {
          var x = this.updateStagger();
          g.forEach(function(_, C) {
            _.stagger(C * x), _.reveal();
          });
        }
      }, d.hide = function(g) {
        if (this._emitCompleteOnItems("hide", g), !(!g || !g.length)) {
          var x = this.updateStagger();
          g.forEach(function(_, C) {
            _.stagger(C * x), _.hide();
          });
        }
      }, d.revealItemElements = function(g) {
        var x = this.getItems(g);
        this.reveal(x);
      }, d.hideItemElements = function(g) {
        var x = this.getItems(g);
        this.hide(x);
      }, d.getItem = function(g) {
        for (var x = 0; x < this.items.length; x++) {
          var _ = this.items[x];
          if (_.element == g)
            return _;
        }
      }, d.getItems = function(g) {
        g = a.makeArray(g);
        var x = [];
        return g.forEach(function(_) {
          var C = this.getItem(_);
          C && x.push(C);
        }, this), x;
      }, d.remove = function(g) {
        var x = this.getItems(g);
        this._emitCompleteOnItems("remove", x), !(!x || !x.length) && x.forEach(function(_) {
          _.remove(), a.removeFrom(this.items, _);
        }, this);
      }, d.destroy = function() {
        var g = this.element.style;
        g.height = "", g.position = "", g.width = "", this.items.forEach(function(_) {
          _.destroy();
        }), this.unbindResize();
        var x = this.element.outlayerGUID;
        delete u[x], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace);
      }, h.data = function(g) {
        g = a.getQueryElement(g);
        var x = g && g.outlayerGUID;
        return x && u[x];
      }, h.create = function(g, x) {
        var _ = v(h);
        return _.defaults = a.extend({}, h.defaults), a.extend(_.defaults, x), _.compatOptions = a.extend({}, h.compatOptions), _.namespace = g, _.data = h.data, _.Item = v(s), a.htmlInit(_, g), l && l.bridget && l.bridget(g, _), _;
      };
      function v(g) {
        function x() {
          g.apply(this, arguments);
        }
        return x.prototype = Object.create(g.prototype), x.prototype.constructor = x, x;
      }
      var p = {
        ms: 1,
        s: 1e3
      };
      function m(g) {
        if (typeof g == "number")
          return g;
        var x = g.match(/(^\d*\.?\d*)(\w*)/), _ = x && x[1], C = x && x[2];
        if (!_.length)
          return 0;
        _ = parseFloat(_);
        var R = p[C] || 1;
        return _ * R;
      }
      return h.Item = s, h;
    });
  }(Us)), Us.exports;
}
/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
(function(e) {
  (function(t, r) {
    e.exports ? e.exports = r(
      Ov(),
      Zo()
    ) : t.Masonry = r(
      t.Outlayer,
      t.getSize
    );
  })(window, function(r, n) {
    var i = r.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var a = i.prototype;
    return a._resetLayout = function() {
      this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
      for (var s = 0; s < this.cols; s++)
        this.colYs.push(0);
      this.maxY = 0, this.horizontalColIndex = 0;
    }, a.measureColumns = function() {
      if (this.getContainerWidth(), !this.columnWidth) {
        var s = this.items[0], o = s && s.element;
        this.columnWidth = o && n(o).outerWidth || // if first elem has no width, default to size of container
        this.containerWidth;
      }
      var l = this.columnWidth += this.gutter, f = this.containerWidth + this.gutter, c = f / l, u = l - f % l, h = u && u < 1 ? "round" : "floor";
      c = Math[h](c), this.cols = Math.max(c, 1);
    }, a.getContainerWidth = function() {
      var s = this._getOption("fitWidth"), o = s ? this.element.parentNode : this.element, l = n(o);
      this.containerWidth = l && l.innerWidth;
    }, a._getItemLayoutPosition = function(s) {
      s.getSize();
      var o = s.size.outerWidth % this.columnWidth, l = o && o < 1 ? "round" : "ceil", f = Math[l](s.size.outerWidth / this.columnWidth);
      f = Math.min(f, this.cols);
      for (var c = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", u = this[c](f, s), h = {
        x: this.columnWidth * u.col,
        y: u.y
      }, d = u.y + s.size.outerHeight, v = f + u.col, p = u.col; p < v; p++)
        this.colYs[p] = d;
      return h;
    }, a._getTopColPosition = function(s) {
      var o = this._getTopColGroup(s), l = Math.min.apply(Math, o);
      return {
        col: o.indexOf(l),
        y: l
      };
    }, a._getTopColGroup = function(s) {
      if (s < 2)
        return this.colYs;
      for (var o = [], l = this.cols + 1 - s, f = 0; f < l; f++)
        o[f] = this._getColGroupY(f, s);
      return o;
    }, a._getColGroupY = function(s, o) {
      if (o < 2)
        return this.colYs[s];
      var l = this.colYs.slice(s, s + o);
      return Math.max.apply(Math, l);
    }, a._getHorizontalColPosition = function(s, o) {
      var l = this.horizontalColIndex % this.cols, f = s > 1 && l + s > this.cols;
      l = f ? 0 : l;
      var c = o.size.outerWidth && o.size.outerHeight;
      return this.horizontalColIndex = c ? l + s : this.horizontalColIndex, {
        col: l,
        y: this._getColGroupY(l, s)
      };
    }, a._manageStamp = function(s) {
      var o = n(s), l = this._getElementOffset(s), f = this._getOption("originLeft"), c = f ? l.left : l.right, u = c + o.outerWidth, h = Math.floor(c / this.columnWidth);
      h = Math.max(0, h);
      var d = Math.floor(u / this.columnWidth);
      d -= u % this.columnWidth ? 0 : 1, d = Math.min(this.cols - 1, d);
      for (var v = this._getOption("originTop"), p = (v ? l.top : l.bottom) + o.outerHeight, m = h; m <= d; m++)
        this.colYs[m] = Math.max(p, this.colYs[m]);
    }, a._getContainerSize = function() {
      this.maxY = Math.max.apply(Math, this.colYs);
      var s = {
        height: this.maxY
      };
      return this._getOption("fitWidth") && (s.width = this._getContainerFitWidth()), s;
    }, a._getContainerFitWidth = function() {
      for (var s = 0, o = this.cols; --o && this.colYs[o] === 0; )
        s++;
      return (this.cols - s) * this.columnWidth - this.gutter;
    }, a.needsResizeLayout = function() {
      var s = this.containerWidth;
      return this.getContainerWidth(), s != this.containerWidth;
    }, i;
  });
})(nc);
var bv = nc.exports;
const kv = /* @__PURE__ */ za(bv), Mv = {
  name: "TipiResults",
  components: {
    TipiInitiativeCard: Zf,
    TipiLoader: ec
  },
  props: {
    loadingResults: Boolean,
    initiatives: {
      type: Array,
      default: function() {
        return [];
      }
    },
    queryMeta: Object,
    layout: String,
    topicsStyles: Object,
    metaDeputies: { type: String, default: "Diputada/o" },
    metaGroupsOthers: { type: String, default: "Autor" },
    metaColors: { type: Object, default: void 0 }
  },
  computed: {
    isMoreResults: function() {
      var e, t;
      return !this.loadingResults && ((e = this.queryMeta) == null ? void 0 : e.page) < ((t = this.queryMeta) == null ? void 0 : t.pages);
    },
    nextResultsLabel: function() {
      var r, n, i;
      let e = ((r = this.queryMeta) == null ? void 0 : r.page) * ((n = this.queryMeta) == null ? void 0 : n.per_page) + 1, t = e + ((i = this.queryMeta) == null ? void 0 : i.per_page) - 1;
      return `(${e}-${t})`;
    },
    extendedLayout: function() {
      return this.layout != "tiny";
    }
  },
  methods: {
    loadMore: function() {
      this.$emit("loadMore");
    },
    setupMasonry: function() {
      let e = document.querySelector(".o-masonry");
      e && new kv(e, {
        columnWidth: ".o-masonry__item",
        percentPosition: !0,
        itemSelector: ".o-masonry__item"
      }).layout();
    }
  },
  watch: {
    initiatives: function() {
      this.initiatives && this.initiatives.length && !this.loadingResults && this.setupMasonry();
    }
  },
  mounted: function() {
    this.setupMasonry(), window.addEventListener(
      "resize",
      (function() {
        this.setupMasonry();
      }).bind(this)
    );
  }
}, Dv = {
  key: 1,
  class: "o-masonry o-grid"
}, Iv = {
  key: 2,
  class: "o-grid o-grid--center"
}, Pv = { class: "o-grid__col" };
function Rv(e, t, r, n, i, a) {
  const s = je("tipi-loader"), o = je("tipi-initiative-card");
  return q(), Z("div", null, [
    this.loadingResults ? (q(), Je(s, {
      key: 0,
      title: "Cargando resultados",
      subtitle: "Puede llevar algun tiempo"
    })) : Ee("", !0),
    this.initiatives && this.initiatives.length && !this.loadingResults ? (q(), Z("section", Dv, [
      (q(!0), Z($t, null, Ut(this.initiatives, (l, f) => (q(), Z("div", {
        class: "o-grid__col u-12 u-4@sm o-masonry__item",
        key: f
      }, [
        Xe(o, {
          initiative: l,
          extendedLayout: a.extendedLayout,
          topicsStyles: r.topicsStyles,
          metaDeputies: r.metaDeputies,
          metaGroupsOthers: r.metaGroupsOthers,
          metaColors: r.metaColors
        }, null, 8, ["initiative", "extendedLayout", "topicsStyles", "metaDeputies", "metaGroupsOthers", "metaColors"])
      ]))), 128))
    ])) : Ee("", !0),
    a.isMoreResults ? (q(), Z("div", Iv, [
      K("div", Pv, [
        K("a", {
          href: "#",
          class: "c-button c-button--secondary",
          onClick: t[0] || (t[0] = Yf((...l) => a.loadMore && a.loadMore(...l), ["prevent"]))
        }, " Cargar más " + ve(a.nextResultsLabel), 1)
      ])
    ])) : Ee("", !0)
  ]);
}
const Nv = /* @__PURE__ */ Le(Mv, [["render", Rv]]), Lv = {
  name: "TipiMessage",
  components: {
    TipiIcon: Wr
  },
  props: {
    type: {
      type: String,
      default: "success",
      validator: function(e) {
        return ["success", "error", "info"].includes(e);
      }
    },
    icon: Boolean
  }
}, Bv = { class: "c-message__wrapper" };
function $v(e, t, r, n, i, a) {
  const s = je("tipi-icon");
  return q(), Z("div", {
    class: _t(`c-message c-message--${r.type} ${r.icon ? "c-message--icon" : ""}`)
  }, [
    K("div", Bv, [
      r.icon ? (q(), Je(s, {
        key: 0,
        class: "c-message__icon",
        icon: r.type
      }, null, 8, ["icon"])) : Ee("", !0),
      Ha(e.$slots, "default")
    ])
  ], 2);
}
const Uv = /* @__PURE__ */ Le(Lv, [["render", $v]]);
var Sn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ac(e, t) {
  return t = { exports: {} }, e(t, t.exports), t.exports;
}
var Hv = ac(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(Sn, function() {
    return function r(n, i, a) {
      var s = window, o = "application/octet-stream", l = a || o, f = n, c = !i && !a && f, u = document.createElement("a"), h = function(b) {
        return String(b);
      }, d = s.Blob || s.MozBlob || s.WebKitBlob || h, v = i || "download", p, m;
      if (d = d.call ? d.bind(s) : Blob, String(this) === "true" && (f = [f, l], l = f[0], f = f[1]), c && c.length < 2048 && (v = c.split("/").pop().split("?")[0], u.href = c, u.href.indexOf(c) !== -1)) {
        var g = new XMLHttpRequest();
        return g.open("GET", c, !0), g.responseType = "blob", g.onload = function(b) {
          r(b.target.response, v, o);
        }, setTimeout(function() {
          g.send();
        }, 0), g;
      }
      if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(f))
        if (f.length > 1024 * 1024 * 1.999 && d !== h)
          f = R(f), l = f.type || o;
        else
          return navigator.msSaveBlob ? (
            // IE10 can't do a[download], only Blobs:
            navigator.msSaveBlob(R(f), v)
          ) : G(f);
      else if (/([\x80-\xff])/.test(f)) {
        var x = 0, _ = new Uint8Array(f.length), C = _.length;
        for (x; x < C; ++x)
          _[x] = f.charCodeAt(x);
        f = new d([_], { type: l });
      }
      p = f instanceof d ? f : new d([f], { type: l });
      function R(b) {
        var L = b.split(/[:;,]/), P = L[1], N = L[2] == "base64" ? atob : decodeURIComponent, F = N(L.pop()), O = F.length, M = 0, V = new Uint8Array(O);
        for (M; M < O; ++M)
          V[M] = F.charCodeAt(M);
        return new d([V], { type: P });
      }
      function G(b, L) {
        if ("download" in u)
          return u.href = b, u.setAttribute("download", v), u.className = "download-js-link", u.innerHTML = "downloading...", u.style.display = "none", document.body.appendChild(u), setTimeout(function() {
            u.click(), document.body.removeChild(u), L === !0 && setTimeout(function() {
              s.URL.revokeObjectURL(u.href);
            }, 250);
          }, 66), !0;
        if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))
          return /^data:/.test(b) && (b = "data:" + b.replace(/^data:([\w\/\-\+]+)/, o)), window.open(b) || confirm(`Displaying New Document

Use Save As... to download, then click back to return to this page.`) && (location.href = b), !0;
        var P = document.createElement("iframe");
        document.body.appendChild(P), !L && /^data:/.test(b) && (b = "data:" + b.replace(/^data:([\w\/\-\+]+)/, o)), P.src = b, setTimeout(function() {
          document.body.removeChild(P);
        }, 333);
      }
      if (navigator.msSaveBlob)
        return navigator.msSaveBlob(p, v);
      if (s.URL)
        G(s.URL.createObjectURL(p), !0);
      else {
        if (typeof p == "string" || p.constructor === h)
          try {
            return G("data:" + l + ";base64," + s.btoa(p));
          } catch {
            return G("data:" + l + "," + encodeURIComponent(p));
          }
        m = new FileReader(), m.onload = function(b) {
          G(this.result);
        }, m.readAsDataURL(p);
      }
      return !0;
    };
  });
});
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
var ua = {};
ua.version = "0.18.5";
var sc = 1252, Wv = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4], oc = function(e) {
  Wv.indexOf(e) != -1 && (sc = e);
};
function zv() {
  oc(1252);
}
var xi = function(e) {
  oc(e);
};
function Vv() {
  xi(1200), zv();
}
function Gv(e) {
  for (var t = [], r = 0; r < e.length >> 1; ++r)
    t[r] = String.fromCharCode(e.charCodeAt(2 * r + 1) + (e.charCodeAt(2 * r) << 8));
  return t.join("");
}
var Hi = function(t) {
  return String.fromCharCode(t);
}, cl = function(t) {
  return String.fromCharCode(t);
}, Jr, Or = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function _i(e) {
  for (var t = "", r = 0, n = 0, i = 0, a = 0, s = 0, o = 0, l = 0, f = 0; f < e.length; )
    r = e.charCodeAt(f++), a = r >> 2, n = e.charCodeAt(f++), s = (r & 3) << 4 | n >> 4, i = e.charCodeAt(f++), o = (n & 15) << 2 | i >> 6, l = i & 63, isNaN(n) ? o = l = 64 : isNaN(i) && (l = 64), t += Or.charAt(a) + Or.charAt(s) + Or.charAt(o) + Or.charAt(l);
  return t;
}
function xr(e) {
  var t = "", r = 0, n = 0, i = 0, a = 0, s = 0, o = 0, l = 0;
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var f = 0; f < e.length; )
    a = Or.indexOf(e.charAt(f++)), s = Or.indexOf(e.charAt(f++)), r = a << 2 | s >> 4, t += String.fromCharCode(r), o = Or.indexOf(e.charAt(f++)), n = (s & 15) << 4 | o >> 2, o !== 64 && (t += String.fromCharCode(n)), l = Or.indexOf(e.charAt(f++)), i = (o & 3) << 6 | l, l !== 64 && (t += String.fromCharCode(i));
  return t;
}
var Ae = /* @__PURE__ */ function() {
  return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node;
}(), Er = /* @__PURE__ */ function() {
  if (typeof Buffer < "u") {
    var e = !Buffer.from;
    if (!e)
      try {
        Buffer.from("foo", "utf8");
      } catch {
        e = !0;
      }
    return e ? function(t, r) {
      return r ? new Buffer(t, r) : new Buffer(t);
    } : Buffer.from.bind(Buffer);
  }
  return function() {
  };
}();
function an(e) {
  return Ae ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
function ul(e) {
  return Ae ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
var Gt = function(t) {
  return Ae ? Er(t, "binary") : t.split("").map(function(r) {
    return r.charCodeAt(0) & 255;
  });
};
function Va(e) {
  if (typeof ArrayBuffer > "u")
    return Gt(e);
  for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0; n != e.length; ++n)
    r[n] = e.charCodeAt(n) & 255;
  return t;
}
function Oi(e) {
  if (Array.isArray(e))
    return e.map(function(n) {
      return String.fromCharCode(n);
    }).join("");
  for (var t = [], r = 0; r < e.length; ++r)
    t[r] = String.fromCharCode(e[r]);
  return t.join("");
}
function Xv(e) {
  if (typeof Uint8Array > "u")
    throw new Error("Unsupported");
  return new Uint8Array(e);
}
var nt = Ae ? function(e) {
  return Buffer.concat(e.map(function(t) {
    return Buffer.isBuffer(t) ? t : Er(t);
  }));
} : function(e) {
  if (typeof Uint8Array < "u") {
    var t = 0, r = 0;
    for (t = 0; t < e.length; ++t)
      r += e[t].length;
    var n = new Uint8Array(r), i = 0;
    for (t = 0, r = 0; t < e.length; r += i, ++t)
      if (i = e[t].length, e[t] instanceof Uint8Array)
        n.set(e[t], r);
      else {
        if (typeof e[t] == "string")
          throw "wtf";
        n.set(new Uint8Array(e[t]), r);
      }
    return n;
  }
  return [].concat.apply([], e.map(function(a) {
    return Array.isArray(a) ? a : [].slice.call(a);
  }));
};
function jv(e) {
  for (var t = [], r = 0, n = e.length + 250, i = an(e.length + 255), a = 0; a < e.length; ++a) {
    var s = e.charCodeAt(a);
    if (s < 128)
      i[r++] = s;
    else if (s < 2048)
      i[r++] = 192 | s >> 6 & 31, i[r++] = 128 | s & 63;
    else if (s >= 55296 && s < 57344) {
      s = (s & 1023) + 64;
      var o = e.charCodeAt(++a) & 1023;
      i[r++] = 240 | s >> 8 & 7, i[r++] = 128 | s >> 2 & 63, i[r++] = 128 | o >> 6 & 15 | (s & 3) << 4, i[r++] = 128 | o & 63;
    } else
      i[r++] = 224 | s >> 12 & 15, i[r++] = 128 | s >> 6 & 63, i[r++] = 128 | s & 63;
    r > n && (t.push(i.slice(0, r)), r = 0, i = an(65535), n = 65530);
  }
  return t.push(i.slice(0, r)), nt(t);
}
var fi = /\u0000/g, Wi = /[\u0001-\u0006]/g;
function bn(e) {
  for (var t = "", r = e.length - 1; r >= 0; )
    t += e.charAt(r--);
  return t;
}
function Xt(e, t) {
  var r = "" + e;
  return r.length >= t ? r : $e("0", t - r.length) + r;
}
function e0(e, t) {
  var r = "" + e;
  return r.length >= t ? r : $e(" ", t - r.length) + r;
}
function ha(e, t) {
  var r = "" + e;
  return r.length >= t ? r : r + $e(" ", t - r.length);
}
function Yv(e, t) {
  var r = "" + Math.round(e);
  return r.length >= t ? r : $e("0", t - r.length) + r;
}
function qv(e, t) {
  var r = "" + e;
  return r.length >= t ? r : $e("0", t - r.length) + r;
}
var hl = /* @__PURE__ */ Math.pow(2, 32);
function vn(e, t) {
  if (e > hl || e < -hl)
    return Yv(e, t);
  var r = Math.round(e);
  return qv(r, t);
}
function da(e, t) {
  return t = t || 0, e.length >= 7 + t && (e.charCodeAt(t) | 32) === 103 && (e.charCodeAt(t + 1) | 32) === 101 && (e.charCodeAt(t + 2) | 32) === 110 && (e.charCodeAt(t + 3) | 32) === 101 && (e.charCodeAt(t + 4) | 32) === 114 && (e.charCodeAt(t + 5) | 32) === 97 && (e.charCodeAt(t + 6) | 32) === 108;
}
var dl = [
  ["Sun", "Sunday"],
  ["Mon", "Monday"],
  ["Tue", "Tuesday"],
  ["Wed", "Wednesday"],
  ["Thu", "Thursday"],
  ["Fri", "Friday"],
  ["Sat", "Saturday"]
], Xs = [
  ["J", "Jan", "January"],
  ["F", "Feb", "February"],
  ["M", "Mar", "March"],
  ["A", "Apr", "April"],
  ["M", "May", "May"],
  ["J", "Jun", "June"],
  ["J", "Jul", "July"],
  ["A", "Aug", "August"],
  ["S", "Sep", "September"],
  ["O", "Oct", "October"],
  ["N", "Nov", "November"],
  ["D", "Dec", "December"]
];
function Kv(e) {
  return e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "', e;
}
var Ue = {
  0: "General",
  1: "0",
  2: "0.00",
  3: "#,##0",
  4: "#,##0.00",
  9: "0%",
  10: "0.00%",
  11: "0.00E+00",
  12: "# ?/?",
  13: "# ??/??",
  14: "m/d/yy",
  15: "d-mmm-yy",
  16: "d-mmm",
  17: "mmm-yy",
  18: "h:mm AM/PM",
  19: "h:mm:ss AM/PM",
  20: "h:mm",
  21: "h:mm:ss",
  22: "m/d/yy h:mm",
  37: "#,##0 ;(#,##0)",
  38: "#,##0 ;[Red](#,##0)",
  39: "#,##0.00;(#,##0.00)",
  40: "#,##0.00;[Red](#,##0.00)",
  45: "mm:ss",
  46: "[h]:mm:ss",
  47: "mmss.0",
  48: "##0.0E+0",
  49: "@",
  56: '"上午/下午 "hh"時"mm"分"ss"秒 "'
}, pl = {
  5: 37,
  6: 38,
  7: 39,
  8: 40,
  //  5 -> 37 ...  8 -> 40
  23: 0,
  24: 0,
  25: 0,
  26: 0,
  // 23 ->  0 ... 26 ->  0
  27: 14,
  28: 14,
  29: 14,
  30: 14,
  31: 14,
  // 27 -> 14 ... 31 -> 14
  50: 14,
  51: 14,
  52: 14,
  53: 14,
  54: 14,
  // 50 -> 14 ... 58 -> 14
  55: 14,
  56: 14,
  57: 14,
  58: 14,
  59: 1,
  60: 2,
  61: 3,
  62: 4,
  // 59 ->  1 ... 62 ->  4
  67: 9,
  68: 10,
  // 67 ->  9 ... 68 -> 10
  69: 12,
  70: 13,
  71: 14,
  // 69 -> 12 ... 71 -> 14
  72: 14,
  73: 15,
  74: 16,
  75: 17,
  // 72 -> 14 ... 75 -> 17
  76: 20,
  77: 21,
  78: 22,
  // 76 -> 20 ... 78 -> 22
  79: 45,
  80: 46,
  81: 47,
  // 79 -> 45 ... 81 -> 47
  82: 0
  // 82 ->  0 ... 65536 -> 0 (omitted)
}, Jv = {
  //  5 -- Currency,   0 decimal, black negative
  5: '"$"#,##0_);\\("$"#,##0\\)',
  63: '"$"#,##0_);\\("$"#,##0\\)',
  //  6 -- Currency,   0 decimal, red   negative
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  //  7 -- Currency,   2 decimal, black negative
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  //  8 -- Currency,   2 decimal, red   negative
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  // 41 -- Accounting, 0 decimal, No Symbol
  41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
  // 42 -- Accounting, 0 decimal, $  Symbol
  42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
  // 43 -- Accounting, 2 decimal, No Symbol
  43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
  // 44 -- Accounting, 2 decimal, $  Symbol
  44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'
};
function pa(e, t, r) {
  for (var n = e < 0 ? -1 : 1, i = e * n, a = 0, s = 1, o = 0, l = 1, f = 0, c = 0, u = Math.floor(i); f < t && (u = Math.floor(i), o = u * s + a, c = u * f + l, !(i - u < 5e-8)); )
    i = 1 / (i - u), a = s, s = o, l = f, f = c;
  if (c > t && (f > t ? (c = l, o = a) : (c = f, o = s)), !r)
    return [0, n * o, c];
  var h = Math.floor(n * o / c);
  return [h, n * o - h * c, c];
}
function zi(e, t, r) {
  if (e > 2958465 || e < 0)
    return null;
  var n = e | 0, i = Math.floor(86400 * (e - n)), a = 0, s = [], o = { D: n, T: i, u: 86400 * (e - n) - i, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if (Math.abs(o.u) < 1e-6 && (o.u = 0), t && t.date1904 && (n += 1462), o.u > 0.9999 && (o.u = 0, ++i == 86400 && (o.T = i = 0, ++n, ++o.D)), n === 60)
    s = r ? [1317, 10, 29] : [1900, 2, 29], a = 3;
  else if (n === 0)
    s = r ? [1317, 8, 29] : [1900, 1, 0], a = 6;
  else {
    n > 60 && --n;
    var l = new Date(1900, 0, 1);
    l.setDate(l.getDate() + n - 1), s = [l.getFullYear(), l.getMonth() + 1, l.getDate()], a = l.getDay(), n < 60 && (a = (a + 6) % 7), r && (a = ix(l, s));
  }
  return o.y = s[0], o.m = s[1], o.d = s[2], o.S = i % 60, i = Math.floor(i / 60), o.M = i % 60, i = Math.floor(i / 60), o.H = i, o.q = a, o;
}
var lc = /* @__PURE__ */ new Date(1899, 11, 31, 0, 0, 0), Qv = /* @__PURE__ */ lc.getTime(), Zv = /* @__PURE__ */ new Date(1900, 2, 1, 0, 0, 0);
function fc(e, t) {
  var r = /* @__PURE__ */ e.getTime();
  return t ? r -= 1461 * 24 * 60 * 60 * 1e3 : e >= Zv && (r += 24 * 60 * 60 * 1e3), (r - (Qv + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ lc.getTimezoneOffset()) * 6e4)) / (24 * 60 * 60 * 1e3);
}
function t0(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function ex(e) {
  return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function tx(e) {
  var t = e < 0 ? 12 : 11, r = t0(e.toFixed(12));
  return r.length <= t || (r = e.toPrecision(10), r.length <= t) ? r : e.toExponential(5);
}
function rx(e) {
  var t = t0(e.toFixed(11));
  return t.length > (e < 0 ? 12 : 11) || t === "0" || t === "-0" ? e.toPrecision(6) : t;
}
function nx(e) {
  var t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E), r;
  return t >= -4 && t <= -1 ? r = e.toPrecision(10 + t) : Math.abs(t) <= 9 ? r = tx(e) : t === 10 ? r = e.toFixed(10).substr(0, 12) : r = rx(e), t0(ex(r.toUpperCase()));
}
function Ao(e, t) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : nx(e);
    case "undefined":
      return "";
    case "object":
      if (e == null)
        return "";
      if (e instanceof Date)
        return Mr(14, fc(e, t && t.date1904), t);
  }
  throw new Error("unsupported value in General format: " + e);
}
function ix(e, t) {
  t[0] -= 581;
  var r = e.getDay();
  return e < 60 && (r = (r + 6) % 7), r;
}
function ax(e, t, r, n) {
  var i = "", a = 0, s = 0, o = r.y, l, f = 0;
  switch (e) {
    case 98:
      o = r.y + 543;
    case 121:
      switch (t.length) {
        case 1:
        case 2:
          l = o % 100, f = 2;
          break;
        default:
          l = o % 1e4, f = 4;
          break;
      }
      break;
    case 109:
      switch (t.length) {
        case 1:
        case 2:
          l = r.m, f = t.length;
          break;
        case 3:
          return Xs[r.m - 1][1];
        case 5:
          return Xs[r.m - 1][0];
        default:
          return Xs[r.m - 1][2];
      }
      break;
    case 100:
      switch (t.length) {
        case 1:
        case 2:
          l = r.d, f = t.length;
          break;
        case 3:
          return dl[r.q][0];
        default:
          return dl[r.q][1];
      }
      break;
    case 104:
      switch (t.length) {
        case 1:
        case 2:
          l = 1 + (r.H + 11) % 12, f = t.length;
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 72:
      switch (t.length) {
        case 1:
        case 2:
          l = r.H, f = t.length;
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 77:
      switch (t.length) {
        case 1:
        case 2:
          l = r.M, f = t.length;
          break;
        default:
          throw "bad minute format: " + t;
      }
      break;
    case 115:
      if (t != "s" && t != "ss" && t != ".0" && t != ".00" && t != ".000")
        throw "bad second format: " + t;
      return r.u === 0 && (t == "s" || t == "ss") ? Xt(r.S, t.length) : (n >= 2 ? s = n === 3 ? 1e3 : 100 : s = n === 1 ? 10 : 1, a = Math.round(s * (r.S + r.u)), a >= 60 * s && (a = 0), t === "s" ? a === 0 ? "0" : "" + a / s : (i = Xt(a, 2 + n), t === "ss" ? i.substr(0, 2) : "." + i.substr(2, t.length - 1)));
    case 90:
      switch (t) {
        case "[h]":
        case "[hh]":
          l = r.D * 24 + r.H;
          break;
        case "[m]":
        case "[mm]":
          l = (r.D * 24 + r.H) * 60 + r.M;
          break;
        case "[s]":
        case "[ss]":
          l = ((r.D * 24 + r.H) * 60 + r.M) * 60 + Math.round(r.S + r.u);
          break;
        default:
          throw "bad abstime format: " + t;
      }
      f = t.length === 3 ? 1 : 2;
      break;
    case 101:
      l = o, f = 1;
      break;
  }
  var c = f > 0 ? Xt(l, f) : "";
  return c;
}
function br(e) {
  var t = 3;
  if (e.length <= t)
    return e;
  for (var r = e.length % t, n = e.substr(0, r); r != e.length; r += t)
    n += (n.length > 0 ? "," : "") + e.substr(r, t);
  return n;
}
var cc = /%/g;
function sx(e, t, r) {
  var n = t.replace(cc, ""), i = t.length - n.length;
  return mr(e, n, r * Math.pow(10, 2 * i)) + $e("%", i);
}
function ox(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; )
    --n;
  return mr(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)));
}
function uc(e, t) {
  var r, n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0)
      return "0.0E+0";
    if (t < 0)
      return "-" + uc(e, -t);
    var i = e.indexOf(".");
    i === -1 && (i = e.indexOf("E"));
    var a = Math.floor(Math.log(t) * Math.LOG10E) % i;
    if (a < 0 && (a += i), r = (t / Math.pow(10, a)).toPrecision(n + 1 + (i + a) % i), r.indexOf("e") === -1) {
      var s = Math.floor(Math.log(t) * Math.LOG10E);
      for (r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (s - r.length + a) : r += "E+" + (s - a); r.substr(0, 2) === "0."; )
        r = r.charAt(0) + r.substr(2, i) + "." + r.substr(2 + i), r = r.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
      r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(o, l, f, c) {
      return l + f + c.substr(0, (i + a) % i) + "." + c.substr(a) + "E";
    });
  } else
    r = t.toExponential(n);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
var hc = /# (\?+)( ?)\/( ?)(\d+)/;
function lx(e, t, r) {
  var n = parseInt(e[4], 10), i = Math.round(t * n), a = Math.floor(i / n), s = i - a * n, o = n;
  return r + (a === 0 ? "" : "" + a) + " " + (s === 0 ? $e(" ", e[1].length + 1 + e[4].length) : e0(s, e[1].length) + e[2] + "/" + e[3] + Xt(o, e[4].length));
}
function fx(e, t, r) {
  return r + (t === 0 ? "" : "" + t) + $e(" ", e[1].length + 2 + e[4].length);
}
var dc = /^#*0*\.([0#]+)/, pc = /\).*[0#]/, mc = /\(###\) ###\\?-####/;
function gt(e) {
  for (var t = "", r, n = 0; n != e.length; ++n)
    switch (r = e.charCodeAt(n)) {
      case 35:
        break;
      case 63:
        t += " ";
        break;
      case 48:
        t += "0";
        break;
      default:
        t += String.fromCharCode(r);
    }
  return t;
}
function ml(e, t) {
  var r = Math.pow(10, t);
  return "" + Math.round(e * r) / r;
}
function gl(e, t) {
  var r = e - Math.floor(e), n = Math.pow(10, t);
  return t < ("" + Math.round(r * n)).length ? 0 : Math.round(r * n);
}
function cx(e, t) {
  return t < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length ? 1 : 0;
}
function ux(e) {
  return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : e - 1 | 0) : "" + Math.floor(e);
}
function Rt(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(pc)) {
    var n = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? Rt("n", n, r) : "(" + Rt("n", n, -r) + ")";
  }
  if (t.charCodeAt(t.length - 1) === 44)
    return ox(e, t, r);
  if (t.indexOf("%") !== -1)
    return sx(e, t, r);
  if (t.indexOf("E") !== -1)
    return uc(t, r);
  if (t.charCodeAt(0) === 36)
    return "$" + Rt(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  var i, a, s, o, l = Math.abs(r), f = r < 0 ? "-" : "";
  if (t.match(/^00+$/))
    return f + vn(l, t.length);
  if (t.match(/^[#?]+$/))
    return i = vn(r, 0), i === "0" && (i = ""), i.length > t.length ? i : gt(t.substr(0, t.length - i.length)) + i;
  if (a = t.match(hc))
    return lx(a, l, f);
  if (t.match(/^#+0+$/))
    return f + vn(l, t.length - t.indexOf("0"));
  if (a = t.match(dc))
    return i = ml(r, a[1].length).replace(/^([^\.]+)$/, "$1." + gt(a[1])).replace(/\.$/, "." + gt(a[1])).replace(/\.(\d*)$/, function(v, p) {
      return "." + p + $e("0", gt(
        /*::(*/
        a[1]
      ).length - p.length);
    }), t.indexOf("0.") !== -1 ? i : i.replace(/^0\./, ".");
  if (t = t.replace(/^#+([0.])/, "$1"), a = t.match(/^(0*)\.(#*)$/))
    return f + ml(l, a[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, a[1].length ? "0." : ".");
  if (a = t.match(/^#{1,3},##0(\.?)$/))
    return f + br(vn(l, 0));
  if (a = t.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + Rt(e, t, -r) : br("" + (Math.floor(r) + cx(r, a[1].length))) + "." + Xt(gl(r, a[1].length), a[1].length);
  if (a = t.match(/^#,#*,#0/))
    return Rt(e, t.replace(/^#,#*,/, ""), r);
  if (a = t.match(/^([0#]+)(\\?-([0#]+))+$/))
    return i = bn(Rt(e, t.replace(/[\\-]/g, ""), r)), s = 0, bn(bn(t.replace(/\\/g, "")).replace(/[0#]/g, function(v) {
      return s < i.length ? i.charAt(s++) : v === "0" ? "0" : "";
    }));
  if (t.match(mc))
    return i = Rt(e, "##########", r), "(" + i.substr(0, 3) + ") " + i.substr(3, 3) + "-" + i.substr(6);
  var c = "";
  if (a = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(
      /*::String(*/
      a[4].length,
      7
    ), o = pa(l, Math.pow(10, s) - 1, !1), i = "" + f, c = mr(
      "n",
      /*::String(*/
      a[1],
      o[1]
    ), c.charAt(c.length - 1) == " " && (c = c.substr(0, c.length - 1) + "0"), i += c + /*::String(*/
    a[2] + "/" + /*::String(*/
    a[3], c = ha(o[2], s), c.length < a[4].length && (c = gt(a[4].substr(a[4].length - c.length)) + c), i += c, i;
  if (a = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(Math.max(a[1].length, a[4].length), 7), o = pa(l, Math.pow(10, s) - 1, !0), f + (o[0] || (o[1] ? "" : "0")) + " " + (o[1] ? e0(o[1], s) + a[2] + "/" + a[3] + ha(o[2], s) : $e(" ", 2 * s + 1 + a[2].length + a[3].length));
  if (a = t.match(/^[#0?]+$/))
    return i = vn(r, 0), t.length <= i.length ? i : gt(t.substr(0, t.length - i.length)) + i;
  if (a = t.match(/^([#0?]+)\.([#0]+)$/)) {
    i = "" + r.toFixed(Math.min(a[2].length, 10)).replace(/([^0])0+$/, "$1"), s = i.indexOf(".");
    var u = t.indexOf(".") - s, h = t.length - i.length - u;
    return gt(t.substr(0, u) + i + t.substr(t.length - h));
  }
  if (a = t.match(/^00,000\.([#0]*0)$/))
    return s = gl(r, a[1].length), r < 0 ? "-" + Rt(e, t, -r) : br(ux(r)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(v) {
      return "00," + (v.length < 3 ? Xt(0, 3 - v.length) : "") + v;
    }) + "." + Xt(s, a[1].length);
  switch (t) {
    case "###,##0.00":
      return Rt(e, "#,##0.00", r);
    case "###,###":
    case "##,###":
    case "#,###":
      var d = br(vn(l, 0));
      return d !== "0" ? f + d : "";
    case "###,###.00":
      return Rt(e, "###,##0.00", r).replace(/^0\./, ".");
    case "#,###.00":
      return Rt(e, "#,##0.00", r).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + t + "|");
}
function hx(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; )
    --n;
  return mr(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)));
}
function dx(e, t, r) {
  var n = t.replace(cc, ""), i = t.length - n.length;
  return mr(e, n, r * Math.pow(10, 2 * i)) + $e("%", i);
}
function gc(e, t) {
  var r, n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0)
      return "0.0E+0";
    if (t < 0)
      return "-" + gc(e, -t);
    var i = e.indexOf(".");
    i === -1 && (i = e.indexOf("E"));
    var a = Math.floor(Math.log(t) * Math.LOG10E) % i;
    if (a < 0 && (a += i), r = (t / Math.pow(10, a)).toPrecision(n + 1 + (i + a) % i), !r.match(/[Ee]/)) {
      var s = Math.floor(Math.log(t) * Math.LOG10E);
      r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (s - r.length + a) : r += "E+" + (s - a), r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(o, l, f, c) {
      return l + f + c.substr(0, (i + a) % i) + "." + c.substr(a) + "E";
    });
  } else
    r = t.toExponential(n);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
function er(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(pc)) {
    var n = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? er("n", n, r) : "(" + er("n", n, -r) + ")";
  }
  if (t.charCodeAt(t.length - 1) === 44)
    return hx(e, t, r);
  if (t.indexOf("%") !== -1)
    return dx(e, t, r);
  if (t.indexOf("E") !== -1)
    return gc(t, r);
  if (t.charCodeAt(0) === 36)
    return "$" + er(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  var i, a, s, o, l = Math.abs(r), f = r < 0 ? "-" : "";
  if (t.match(/^00+$/))
    return f + Xt(l, t.length);
  if (t.match(/^[#?]+$/))
    return i = "" + r, r === 0 && (i = ""), i.length > t.length ? i : gt(t.substr(0, t.length - i.length)) + i;
  if (a = t.match(hc))
    return fx(a, l, f);
  if (t.match(/^#+0+$/))
    return f + Xt(l, t.length - t.indexOf("0"));
  if (a = t.match(dc))
    return i = ("" + r).replace(/^([^\.]+)$/, "$1." + gt(a[1])).replace(/\.$/, "." + gt(a[1])), i = i.replace(/\.(\d*)$/, function(v, p) {
      return "." + p + $e("0", gt(a[1]).length - p.length);
    }), t.indexOf("0.") !== -1 ? i : i.replace(/^0\./, ".");
  if (t = t.replace(/^#+([0.])/, "$1"), a = t.match(/^(0*)\.(#*)$/))
    return f + ("" + l).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, a[1].length ? "0." : ".");
  if (a = t.match(/^#{1,3},##0(\.?)$/))
    return f + br("" + l);
  if (a = t.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + er(e, t, -r) : br("" + r) + "." + $e("0", a[1].length);
  if (a = t.match(/^#,#*,#0/))
    return er(e, t.replace(/^#,#*,/, ""), r);
  if (a = t.match(/^([0#]+)(\\?-([0#]+))+$/))
    return i = bn(er(e, t.replace(/[\\-]/g, ""), r)), s = 0, bn(bn(t.replace(/\\/g, "")).replace(/[0#]/g, function(v) {
      return s < i.length ? i.charAt(s++) : v === "0" ? "0" : "";
    }));
  if (t.match(mc))
    return i = er(e, "##########", r), "(" + i.substr(0, 3) + ") " + i.substr(3, 3) + "-" + i.substr(6);
  var c = "";
  if (a = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(
      /*::String(*/
      a[4].length,
      7
    ), o = pa(l, Math.pow(10, s) - 1, !1), i = "" + f, c = mr(
      "n",
      /*::String(*/
      a[1],
      o[1]
    ), c.charAt(c.length - 1) == " " && (c = c.substr(0, c.length - 1) + "0"), i += c + /*::String(*/
    a[2] + "/" + /*::String(*/
    a[3], c = ha(o[2], s), c.length < a[4].length && (c = gt(a[4].substr(a[4].length - c.length)) + c), i += c, i;
  if (a = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(Math.max(a[1].length, a[4].length), 7), o = pa(l, Math.pow(10, s) - 1, !0), f + (o[0] || (o[1] ? "" : "0")) + " " + (o[1] ? e0(o[1], s) + a[2] + "/" + a[3] + ha(o[2], s) : $e(" ", 2 * s + 1 + a[2].length + a[3].length));
  if (a = t.match(/^[#0?]+$/))
    return i = "" + r, t.length <= i.length ? i : gt(t.substr(0, t.length - i.length)) + i;
  if (a = t.match(/^([#0]+)\.([#0]+)$/)) {
    i = "" + r.toFixed(Math.min(a[2].length, 10)).replace(/([^0])0+$/, "$1"), s = i.indexOf(".");
    var u = t.indexOf(".") - s, h = t.length - i.length - u;
    return gt(t.substr(0, u) + i + t.substr(t.length - h));
  }
  if (a = t.match(/^00,000\.([#0]*0)$/))
    return r < 0 ? "-" + er(e, t, -r) : br("" + r).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(v) {
      return "00," + (v.length < 3 ? Xt(0, 3 - v.length) : "") + v;
    }) + "." + Xt(0, a[1].length);
  switch (t) {
    case "###,###":
    case "##,###":
    case "#,###":
      var d = br("" + l);
      return d !== "0" ? f + d : "";
    default:
      if (t.match(/\.[0#?]*$/))
        return er(e, t.slice(0, t.lastIndexOf(".")), r) + gt(t.slice(t.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + t + "|");
}
function mr(e, t, r) {
  return (r | 0) === r ? er(e, t, r) : Rt(e, t, r);
}
function px(e) {
  for (var t = [], r = !1, n = 0, i = 0; n < e.length; ++n)
    switch (
      /*cc=*/
      e.charCodeAt(n)
    ) {
      case 34:
        r = !r;
        break;
      case 95:
      case 42:
      case 92:
        ++n;
        break;
      case 59:
        t[t.length] = e.substr(i, n - i), i = n + 1;
    }
  if (t[t.length] = e.substr(i), r === !0)
    throw new Error("Format |" + e + "| unterminated string ");
  return t;
}
var vc = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function xc(e) {
  for (var t = 0, r = "", n = ""; t < e.length; )
    switch (r = e.charAt(t)) {
      case "G":
        da(e, t) && (t += 6), t++;
        break;
      case '"':
        for (
          ;
          /*cc=*/
          e.charCodeAt(++t) !== 34 && t < e.length;
        )
          ;
        ++t;
        break;
      case "\\":
        t += 2;
        break;
      case "_":
        t += 2;
        break;
      case "@":
        ++t;
        break;
      case "B":
      case "b":
        if (e.charAt(t + 1) === "1" || e.charAt(t + 1) === "2")
          return !0;
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        return !0;
      case "A":
      case "a":
      case "上":
        if (e.substr(t, 3).toUpperCase() === "A/P" || e.substr(t, 5).toUpperCase() === "AM/PM" || e.substr(t, 5).toUpperCase() === "上午/下午")
          return !0;
        ++t;
        break;
      case "[":
        for (n = r; e.charAt(t++) !== "]" && t < e.length; )
          n += e.charAt(t);
        if (n.match(vc))
          return !0;
        break;
      case ".":
      case "0":
      case "#":
        for (; t < e.length && ("0#?.,E+-%".indexOf(r = e.charAt(++t)) > -1 || r == "\\" && e.charAt(t + 1) == "-" && "0#".indexOf(e.charAt(t + 2)) > -1); )
          ;
        break;
      case "?":
        for (; e.charAt(++t) === r; )
          ;
        break;
      case "*":
        ++t, (e.charAt(t) == " " || e.charAt(t) == "*") && ++t;
        break;
      case "(":
      case ")":
        ++t;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (; t < e.length && "0123456789".indexOf(e.charAt(++t)) > -1; )
          ;
        break;
      case " ":
        ++t;
        break;
      default:
        ++t;
        break;
    }
  return !1;
}
function mx(e, t, r, n) {
  for (var i = [], a = "", s = 0, o = "", l = "t", f, c, u, h = "H"; s < e.length; )
    switch (o = e.charAt(s)) {
      case "G":
        if (!da(e, s))
          throw new Error("unrecognized character " + o + " in " + e);
        i[i.length] = { t: "G", v: "General" }, s += 7;
        break;
      case '"':
        for (a = ""; (u = e.charCodeAt(++s)) !== 34 && s < e.length; )
          a += String.fromCharCode(u);
        i[i.length] = { t: "t", v: a }, ++s;
        break;
      case "\\":
        var d = e.charAt(++s), v = d === "(" || d === ")" ? d : "t";
        i[i.length] = { t: v, v: d }, ++s;
        break;
      case "_":
        i[i.length] = { t: "t", v: " " }, s += 2;
        break;
      case "@":
        i[i.length] = { t: "T", v: t }, ++s;
        break;
      case "B":
      case "b":
        if (e.charAt(s + 1) === "1" || e.charAt(s + 1) === "2") {
          if (f == null && (f = zi(t, r, e.charAt(s + 1) === "2"), f == null))
            return "";
          i[i.length] = { t: "X", v: e.substr(s, 2) }, l = o, s += 2;
          break;
        }
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
        o = o.toLowerCase();
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        if (t < 0 || f == null && (f = zi(t, r), f == null))
          return "";
        for (a = o; ++s < e.length && e.charAt(s).toLowerCase() === o; )
          a += o;
        o === "m" && l.toLowerCase() === "h" && (o = "M"), o === "h" && (o = h), i[i.length] = { t: o, v: a }, l = o;
        break;
      case "A":
      case "a":
      case "上":
        var p = { t: o, v: o };
        if (f == null && (f = zi(t, r)), e.substr(s, 3).toUpperCase() === "A/P" ? (f != null && (p.v = f.H >= 12 ? "P" : "A"), p.t = "T", h = "h", s += 3) : e.substr(s, 5).toUpperCase() === "AM/PM" ? (f != null && (p.v = f.H >= 12 ? "PM" : "AM"), p.t = "T", s += 5, h = "h") : e.substr(s, 5).toUpperCase() === "上午/下午" ? (f != null && (p.v = f.H >= 12 ? "下午" : "上午"), p.t = "T", s += 5, h = "h") : (p.t = "t", ++s), f == null && p.t === "T")
          return "";
        i[i.length] = p, l = o;
        break;
      case "[":
        for (a = o; e.charAt(s++) !== "]" && s < e.length; )
          a += e.charAt(s);
        if (a.slice(-1) !== "]")
          throw 'unterminated "[" block: |' + a + "|";
        if (a.match(vc)) {
          if (f == null && (f = zi(t, r), f == null))
            return "";
          i[i.length] = { t: "Z", v: a.toLowerCase() }, l = a.charAt(1);
        } else
          a.indexOf("$") > -1 && (a = (a.match(/\$([^-\[\]]*)/) || [])[1] || "$", xc(e) || (i[i.length] = { t: "t", v: a }));
        break;
      case ".":
        if (f != null) {
          for (a = o; ++s < e.length && (o = e.charAt(s)) === "0"; )
            a += o;
          i[i.length] = { t: "s", v: a };
          break;
        }
      case "0":
      case "#":
        for (a = o; ++s < e.length && "0#?.,E+-%".indexOf(o = e.charAt(s)) > -1; )
          a += o;
        i[i.length] = { t: "n", v: a };
        break;
      case "?":
        for (a = o; e.charAt(++s) === o; )
          a += o;
        i[i.length] = { t: o, v: a }, l = o;
        break;
      case "*":
        ++s, (e.charAt(s) == " " || e.charAt(s) == "*") && ++s;
        break;
      case "(":
      case ")":
        i[i.length] = { t: n === 1 ? "t" : o, v: o }, ++s;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (a = o; s < e.length && "0123456789".indexOf(e.charAt(++s)) > -1; )
          a += e.charAt(s);
        i[i.length] = { t: "D", v: a };
        break;
      case " ":
        i[i.length] = { t: o, v: o }, ++s;
        break;
      case "$":
        i[i.length] = { t: "t", v: "$" }, ++s;
        break;
      default:
        if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(o) === -1)
          throw new Error("unrecognized character " + o + " in " + e);
        i[i.length] = { t: "t", v: o }, ++s;
        break;
    }
  var m = 0, g = 0, x;
  for (s = i.length - 1, l = "t"; s >= 0; --s)
    switch (i[s].t) {
      case "h":
      case "H":
        i[s].t = h, l = "h", m < 1 && (m = 1);
        break;
      case "s":
        (x = i[s].v.match(/\.0+$/)) && (g = Math.max(g, x[0].length - 1)), m < 3 && (m = 3);
      case "d":
      case "y":
      case "M":
      case "e":
        l = i[s].t;
        break;
      case "m":
        l === "s" && (i[s].t = "M", m < 2 && (m = 2));
        break;
      case "X":
        break;
      case "Z":
        m < 1 && i[s].v.match(/[Hh]/) && (m = 1), m < 2 && i[s].v.match(/[Mm]/) && (m = 2), m < 3 && i[s].v.match(/[Ss]/) && (m = 3);
    }
  switch (m) {
    case 0:
      break;
    case 1:
      f.u >= 0.5 && (f.u = 0, ++f.S), f.S >= 60 && (f.S = 0, ++f.M), f.M >= 60 && (f.M = 0, ++f.H);
      break;
    case 2:
      f.u >= 0.5 && (f.u = 0, ++f.S), f.S >= 60 && (f.S = 0, ++f.M);
      break;
  }
  var _ = "", C;
  for (s = 0; s < i.length; ++s)
    switch (i[s].t) {
      case "t":
      case "T":
      case " ":
      case "D":
        break;
      case "X":
        i[s].v = "", i[s].t = ";";
        break;
      case "d":
      case "m":
      case "y":
      case "h":
      case "H":
      case "M":
      case "s":
      case "e":
      case "b":
      case "Z":
        i[s].v = ax(i[s].t.charCodeAt(0), i[s].v, f, g), i[s].t = "t";
        break;
      case "n":
      case "?":
        for (C = s + 1; i[C] != null && ((o = i[C].t) === "?" || o === "D" || (o === " " || o === "t") && i[C + 1] != null && (i[C + 1].t === "?" || i[C + 1].t === "t" && i[C + 1].v === "/") || i[s].t === "(" && (o === " " || o === "n" || o === ")") || o === "t" && (i[C].v === "/" || i[C].v === " " && i[C + 1] != null && i[C + 1].t == "?")); )
          i[s].v += i[C].v, i[C] = { v: "", t: ";" }, ++C;
        _ += i[s].v, s = C - 1;
        break;
      case "G":
        i[s].t = "t", i[s].v = Ao(t, r);
        break;
    }
  var R = "", G, b;
  if (_.length > 0) {
    _.charCodeAt(0) == 40 ? (G = t < 0 && _.charCodeAt(0) === 45 ? -t : t, b = mr("n", _, G)) : (G = t < 0 && n > 1 ? -t : t, b = mr("n", _, G), G < 0 && i[0] && i[0].t == "t" && (b = b.substr(1), i[0].v = "-" + i[0].v)), C = b.length - 1;
    var L = i.length;
    for (s = 0; s < i.length; ++s)
      if (i[s] != null && i[s].t != "t" && i[s].v.indexOf(".") > -1) {
        L = s;
        break;
      }
    var P = i.length;
    if (L === i.length && b.indexOf("E") === -1) {
      for (s = i.length - 1; s >= 0; --s)
        i[s] == null || "n?".indexOf(i[s].t) === -1 || (C >= i[s].v.length - 1 ? (C -= i[s].v.length, i[s].v = b.substr(C + 1, i[s].v.length)) : C < 0 ? i[s].v = "" : (i[s].v = b.substr(0, C + 1), C = -1), i[s].t = "t", P = s);
      C >= 0 && P < i.length && (i[P].v = b.substr(0, C + 1) + i[P].v);
    } else if (L !== i.length && b.indexOf("E") === -1) {
      for (C = b.indexOf(".") - 1, s = L; s >= 0; --s)
        if (!(i[s] == null || "n?".indexOf(i[s].t) === -1)) {
          for (c = i[s].v.indexOf(".") > -1 && s === L ? i[s].v.indexOf(".") - 1 : i[s].v.length - 1, R = i[s].v.substr(c + 1); c >= 0; --c)
            C >= 0 && (i[s].v.charAt(c) === "0" || i[s].v.charAt(c) === "#") && (R = b.charAt(C--) + R);
          i[s].v = R, i[s].t = "t", P = s;
        }
      for (C >= 0 && P < i.length && (i[P].v = b.substr(0, C + 1) + i[P].v), C = b.indexOf(".") + 1, s = L; s < i.length; ++s)
        if (!(i[s] == null || "n?(".indexOf(i[s].t) === -1 && s !== L)) {
          for (c = i[s].v.indexOf(".") > -1 && s === L ? i[s].v.indexOf(".") + 1 : 0, R = i[s].v.substr(0, c); c < i[s].v.length; ++c)
            C < b.length && (R += b.charAt(C++));
          i[s].v = R, i[s].t = "t", P = s;
        }
    }
  }
  for (s = 0; s < i.length; ++s)
    i[s] != null && "n?".indexOf(i[s].t) > -1 && (G = n > 1 && t < 0 && s > 0 && i[s - 1].v === "-" ? -t : t, i[s].v = mr(i[s].t, i[s].v, G), i[s].t = "t");
  var N = "";
  for (s = 0; s !== i.length; ++s)
    i[s] != null && (N += i[s].v);
  return N;
}
var vl = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function xl(e, t) {
  if (t == null)
    return !1;
  var r = parseFloat(t[2]);
  switch (t[1]) {
    case "=":
      if (e == r)
        return !0;
      break;
    case ">":
      if (e > r)
        return !0;
      break;
    case "<":
      if (e < r)
        return !0;
      break;
    case "<>":
      if (e != r)
        return !0;
      break;
    case ">=":
      if (e >= r)
        return !0;
      break;
    case "<=":
      if (e <= r)
        return !0;
      break;
  }
  return !1;
}
function gx(e, t) {
  var r = px(e), n = r.length, i = r[n - 1].indexOf("@");
  if (n < 4 && i > -1 && --n, r.length > 4)
    throw new Error("cannot find right format for |" + r.join("|") + "|");
  if (typeof t != "number")
    return [4, r.length === 4 || i > -1 ? r[r.length - 1] : "@"];
  switch (r.length) {
    case 1:
      r = i > -1 ? ["General", "General", "General", r[0]] : [r[0], r[0], r[0], "@"];
      break;
    case 2:
      r = i > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], "@"];
      break;
    case 3:
      r = i > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], "@"];
      break;
  }
  var a = t > 0 ? r[0] : t < 0 ? r[1] : r[2];
  if (r[0].indexOf("[") === -1 && r[1].indexOf("[") === -1)
    return [n, a];
  if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) {
    var s = r[0].match(vl), o = r[1].match(vl);
    return xl(t, s) ? [n, r[0]] : xl(t, o) ? [n, r[1]] : [n, r[s != null && o != null ? 2 : 1]];
  }
  return [n, a];
}
function Mr(e, t, r) {
  r == null && (r = {});
  var n = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && r.dateNF ? n = r.dateNF : n = e;
      break;
    case "number":
      e == 14 && r.dateNF ? n = r.dateNF : n = (r.table != null ? r.table : Ue)[e], n == null && (n = r.table && r.table[pl[e]] || Ue[pl[e]]), n == null && (n = Jv[e] || "General");
      break;
  }
  if (da(n, 0))
    return Ao(t, r);
  t instanceof Date && (t = fc(t, r.date1904));
  var i = gx(n, t);
  if (da(i[1]))
    return Ao(t, r);
  if (t === !0)
    t = "TRUE";
  else if (t === !1)
    t = "FALSE";
  else if (t === "" || t == null)
    return "";
  return mx(i[1], t, r, i[0]);
}
function _c(e, t) {
  if (typeof t != "number") {
    t = +t || -1;
    for (var r = 0; r < 392; ++r) {
      if (Ue[r] == null) {
        t < 0 && (t = r);
        continue;
      }
      if (Ue[r] == e) {
        t = r;
        break;
      }
    }
    t < 0 && (t = 391);
  }
  return Ue[t] = e, t;
}
function Ga(e) {
  for (var t = 0; t != 392; ++t)
    e[t] !== void 0 && _c(e[t], t);
}
function Xa() {
  Ue = Kv();
}
var yc = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function vx(e) {
  var t = typeof e == "number" ? Ue[e] : e;
  return t = t.replace(yc, "(\\d+)"), new RegExp("^" + t + "$");
}
function xx(e, t, r) {
  var n = -1, i = -1, a = -1, s = -1, o = -1, l = -1;
  (t.match(yc) || []).forEach(function(u, h) {
    var d = parseInt(r[h + 1], 10);
    switch (u.toLowerCase().charAt(0)) {
      case "y":
        n = d;
        break;
      case "d":
        a = d;
        break;
      case "h":
        s = d;
        break;
      case "s":
        l = d;
        break;
      case "m":
        s >= 0 ? o = d : i = d;
        break;
    }
  }), l >= 0 && o == -1 && i >= 0 && (o = i, i = -1);
  var f = ("" + (n >= 0 ? n : (/* @__PURE__ */ new Date()).getFullYear())).slice(-4) + "-" + ("00" + (i >= 1 ? i : 1)).slice(-2) + "-" + ("00" + (a >= 1 ? a : 1)).slice(-2);
  f.length == 7 && (f = "0" + f), f.length == 8 && (f = "20" + f);
  var c = ("00" + (s >= 0 ? s : 0)).slice(-2) + ":" + ("00" + (o >= 0 ? o : 0)).slice(-2) + ":" + ("00" + (l >= 0 ? l : 0)).slice(-2);
  return s == -1 && o == -1 && l == -1 ? f : n == -1 && i == -1 && a == -1 ? c : f + "T" + c;
}
var _x = /* @__PURE__ */ function() {
  var e = {};
  e.version = "1.2.0";
  function t() {
    for (var b = 0, L = new Array(256), P = 0; P != 256; ++P)
      b = P, b = b & 1 ? -306674912 ^ b >>> 1 : b >>> 1, b = b & 1 ? -306674912 ^ b >>> 1 : b >>> 1, b = b & 1 ? -306674912 ^ b >>> 1 : b >>> 1, b = b & 1 ? -306674912 ^ b >>> 1 : b >>> 1, b = b & 1 ? -306674912 ^ b >>> 1 : b >>> 1, b = b & 1 ? -306674912 ^ b >>> 1 : b >>> 1, b = b & 1 ? -306674912 ^ b >>> 1 : b >>> 1, b = b & 1 ? -306674912 ^ b >>> 1 : b >>> 1, L[P] = b;
    return typeof Int32Array < "u" ? new Int32Array(L) : L;
  }
  var r = t();
  function n(b) {
    var L = 0, P = 0, N = 0, F = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
    for (N = 0; N != 256; ++N)
      F[N] = b[N];
    for (N = 0; N != 256; ++N)
      for (P = b[N], L = 256 + N; L < 4096; L += 256)
        P = F[L] = P >>> 8 ^ b[P & 255];
    var O = [];
    for (N = 1; N != 16; ++N)
      O[N - 1] = typeof Int32Array < "u" ? F.subarray(N * 256, N * 256 + 256) : F.slice(N * 256, N * 256 + 256);
    return O;
  }
  var i = n(r), a = i[0], s = i[1], o = i[2], l = i[3], f = i[4], c = i[5], u = i[6], h = i[7], d = i[8], v = i[9], p = i[10], m = i[11], g = i[12], x = i[13], _ = i[14];
  function C(b, L) {
    for (var P = L ^ -1, N = 0, F = b.length; N < F; )
      P = P >>> 8 ^ r[(P ^ b.charCodeAt(N++)) & 255];
    return ~P;
  }
  function R(b, L) {
    for (var P = L ^ -1, N = b.length - 15, F = 0; F < N; )
      P = _[b[F++] ^ P & 255] ^ x[b[F++] ^ P >> 8 & 255] ^ g[b[F++] ^ P >> 16 & 255] ^ m[b[F++] ^ P >>> 24] ^ p[b[F++]] ^ v[b[F++]] ^ d[b[F++]] ^ h[b[F++]] ^ u[b[F++]] ^ c[b[F++]] ^ f[b[F++]] ^ l[b[F++]] ^ o[b[F++]] ^ s[b[F++]] ^ a[b[F++]] ^ r[b[F++]];
    for (N += 15; F < N; )
      P = P >>> 8 ^ r[(P ^ b[F++]) & 255];
    return ~P;
  }
  function G(b, L) {
    for (var P = L ^ -1, N = 0, F = b.length, O = 0, M = 0; N < F; )
      O = b.charCodeAt(N++), O < 128 ? P = P >>> 8 ^ r[(P ^ O) & 255] : O < 2048 ? (P = P >>> 8 ^ r[(P ^ (192 | O >> 6 & 31)) & 255], P = P >>> 8 ^ r[(P ^ (128 | O & 63)) & 255]) : O >= 55296 && O < 57344 ? (O = (O & 1023) + 64, M = b.charCodeAt(N++) & 1023, P = P >>> 8 ^ r[(P ^ (240 | O >> 8 & 7)) & 255], P = P >>> 8 ^ r[(P ^ (128 | O >> 2 & 63)) & 255], P = P >>> 8 ^ r[(P ^ (128 | M >> 6 & 15 | (O & 3) << 4)) & 255], P = P >>> 8 ^ r[(P ^ (128 | M & 63)) & 255]) : (P = P >>> 8 ^ r[(P ^ (224 | O >> 12 & 15)) & 255], P = P >>> 8 ^ r[(P ^ (128 | O >> 6 & 63)) & 255], P = P >>> 8 ^ r[(P ^ (128 | O & 63)) & 255]);
    return ~P;
  }
  return e.table = r, e.bstr = C, e.buf = R, e.str = G, e;
}(), De = /* @__PURE__ */ function() {
  var t = {};
  t.version = "1.2.1";
  function r(y, S) {
    for (var w = y.split("/"), E = S.split("/"), T = 0, A = 0, H = Math.min(w.length, E.length); T < H; ++T) {
      if (A = w[T].length - E[T].length)
        return A;
      if (w[T] != E[T])
        return w[T] < E[T] ? -1 : 1;
    }
    return w.length - E.length;
  }
  function n(y) {
    if (y.charAt(y.length - 1) == "/")
      return y.slice(0, -1).indexOf("/") === -1 ? y : n(y.slice(0, -1));
    var S = y.lastIndexOf("/");
    return S === -1 ? y : y.slice(0, S + 1);
  }
  function i(y) {
    if (y.charAt(y.length - 1) == "/")
      return i(y.slice(0, -1));
    var S = y.lastIndexOf("/");
    return S === -1 ? y : y.slice(S + 1);
  }
  function a(y, S) {
    typeof S == "string" && (S = new Date(S));
    var w = S.getHours();
    w = w << 6 | S.getMinutes(), w = w << 5 | S.getSeconds() >>> 1, y.write_shift(2, w);
    var E = S.getFullYear() - 1980;
    E = E << 4 | S.getMonth() + 1, E = E << 5 | S.getDate(), y.write_shift(2, E);
  }
  function s(y) {
    var S = y.read_shift(2) & 65535, w = y.read_shift(2) & 65535, E = /* @__PURE__ */ new Date(), T = w & 31;
    w >>>= 5;
    var A = w & 15;
    w >>>= 4, E.setMilliseconds(0), E.setFullYear(w + 1980), E.setMonth(A - 1), E.setDate(T);
    var H = S & 31;
    S >>>= 5;
    var Y = S & 63;
    return S >>>= 6, E.setHours(S), E.setMinutes(Y), E.setSeconds(H << 1), E;
  }
  function o(y) {
    bt(y, 0);
    for (var S = (
      /*::(*/
      {}
    ), w = 0; y.l <= y.length - 4; ) {
      var E = y.read_shift(2), T = y.read_shift(2), A = y.l + T, H = {};
      switch (E) {
        case 21589:
          w = y.read_shift(1), w & 1 && (H.mtime = y.read_shift(4)), T > 5 && (w & 2 && (H.atime = y.read_shift(4)), w & 4 && (H.ctime = y.read_shift(4))), H.mtime && (H.mt = new Date(H.mtime * 1e3));
          break;
      }
      y.l = A, S[E] = H;
    }
    return S;
  }
  var l;
  function f() {
    return l || (l = {});
  }
  function c(y, S) {
    if (y[0] == 80 && y[1] == 75)
      return el(y, S);
    if ((y[0] | 32) == 109 && (y[1] | 32) == 105)
      return n1(y, S);
    if (y.length < 512)
      throw new Error("CFB file size " + y.length + " < 512");
    var w = 3, E = 512, T = 0, A = 0, H = 0, Y = 0, U = 0, W = [], z = (
      /*::(*/
      y.slice(0, 512)
    );
    bt(z, 0);
    var te = u(z);
    switch (w = te[0], w) {
      case 3:
        E = 512;
        break;
      case 4:
        E = 4096;
        break;
      case 0:
        if (te[1] == 0)
          return el(y, S);
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + w);
    }
    E !== 512 && (z = /*::(*/
    y.slice(0, E), bt(
      z,
      28
      /* blob.l */
    ));
    var se = y.slice(0, E);
    h(z, w);
    var ue = z.read_shift(4, "i");
    if (w === 3 && ue !== 0)
      throw new Error("# Directory Sectors: Expected 0 saw " + ue);
    z.l += 4, H = z.read_shift(4, "i"), z.l += 4, z.chk("00100000", "Mini Stream Cutoff Size: "), Y = z.read_shift(4, "i"), T = z.read_shift(4, "i"), U = z.read_shift(4, "i"), A = z.read_shift(4, "i");
    for (var ne = -1, ce = 0; ce < 109 && (ne = z.read_shift(4, "i"), !(ne < 0)); ++ce)
      W[ce] = ne;
    var ge = d(y, E);
    m(U, A, ge, E, W);
    var Re = x(ge, H, W, E);
    Re[H].name = "!Directory", T > 0 && Y !== M && (Re[Y].name = "!MiniFAT"), Re[W[0]].name = "!FAT", Re.fat_addrs = W, Re.ssz = E;
    var Ne = {}, ot = [], Jn = [], Qn = [];
    _(H, Re, ge, ot, T, Ne, Jn, Y), v(Jn, Qn, ot), ot.shift();
    var Zn = {
      FileIndex: Jn,
      FullPaths: Qn
    };
    return S && S.raw && (Zn.raw = { header: se, sectors: ge }), Zn;
  }
  function u(y) {
    if (y[y.l] == 80 && y[y.l + 1] == 75)
      return [0, 0];
    y.chk(V, "Header Signature: "), y.l += 16;
    var S = y.read_shift(2, "u");
    return [y.read_shift(2, "u"), S];
  }
  function h(y, S) {
    var w = 9;
    switch (y.l += 2, w = y.read_shift(2)) {
      case 9:
        if (S != 3)
          throw new Error("Sector Shift: Expected 9 saw " + w);
        break;
      case 12:
        if (S != 4)
          throw new Error("Sector Shift: Expected 12 saw " + w);
        break;
      default:
        throw new Error("Sector Shift: Expected 9 or 12 saw " + w);
    }
    y.chk("0600", "Mini Sector Shift: "), y.chk("000000000000", "Reserved: ");
  }
  function d(y, S) {
    for (var w = Math.ceil(y.length / S) - 1, E = [], T = 1; T < w; ++T)
      E[T - 1] = y.slice(T * S, (T + 1) * S);
    return E[w - 1] = y.slice(w * S), E;
  }
  function v(y, S, w) {
    for (var E = 0, T = 0, A = 0, H = 0, Y = 0, U = w.length, W = [], z = []; E < U; ++E)
      W[E] = z[E] = E, S[E] = w[E];
    for (; Y < z.length; ++Y)
      E = z[Y], T = y[E].L, A = y[E].R, H = y[E].C, W[E] === E && (T !== -1 && W[T] !== T && (W[E] = W[T]), A !== -1 && W[A] !== A && (W[E] = W[A])), H !== -1 && (W[H] = E), T !== -1 && E != W[E] && (W[T] = W[E], z.lastIndexOf(T) < Y && z.push(T)), A !== -1 && E != W[E] && (W[A] = W[E], z.lastIndexOf(A) < Y && z.push(A));
    for (E = 1; E < U; ++E)
      W[E] === E && (A !== -1 && W[A] !== A ? W[E] = W[A] : T !== -1 && W[T] !== T && (W[E] = W[T]));
    for (E = 1; E < U; ++E)
      if (y[E].type !== 0) {
        if (Y = E, Y != W[Y])
          do
            Y = W[Y], S[E] = S[Y] + "/" + S[E];
          while (Y !== 0 && W[Y] !== -1 && Y != W[Y]);
        W[E] = -1;
      }
    for (S[0] += "/", E = 1; E < U; ++E)
      y[E].type !== 2 && (S[E] += "/");
  }
  function p(y, S, w) {
    for (var E = y.start, T = y.size, A = [], H = E; w && T > 0 && H >= 0; )
      A.push(S.slice(H * O, H * O + O)), T -= O, H = Qr(w, H * 4);
    return A.length === 0 ? X(0) : nt(A).slice(0, y.size);
  }
  function m(y, S, w, E, T) {
    var A = M;
    if (y === M) {
      if (S !== 0)
        throw new Error("DIFAT chain shorter than expected");
    } else if (y !== -1) {
      var H = w[y], Y = (E >>> 2) - 1;
      if (!H)
        return;
      for (var U = 0; U < Y && (A = Qr(H, U * 4)) !== M; ++U)
        T.push(A);
      m(Qr(H, E - 4), S - 1, w, E, T);
    }
  }
  function g(y, S, w, E, T) {
    var A = [], H = [];
    T || (T = []);
    var Y = E - 1, U = 0, W = 0;
    for (U = S; U >= 0; ) {
      T[U] = !0, A[A.length] = U, H.push(y[U]);
      var z = w[Math.floor(U * 4 / E)];
      if (W = U * 4 & Y, E < 4 + W)
        throw new Error("FAT boundary crossed: " + U + " 4 " + E);
      if (!y[z])
        break;
      U = Qr(y[z], W);
    }
    return { nodes: A, data: Cl([H]) };
  }
  function x(y, S, w, E) {
    var T = y.length, A = [], H = [], Y = [], U = [], W = E - 1, z = 0, te = 0, se = 0, ue = 0;
    for (z = 0; z < T; ++z)
      if (Y = [], se = z + S, se >= T && (se -= T), !H[se]) {
        U = [];
        var ne = [];
        for (te = se; te >= 0; ) {
          ne[te] = !0, H[te] = !0, Y[Y.length] = te, U.push(y[te]);
          var ce = w[Math.floor(te * 4 / E)];
          if (ue = te * 4 & W, E < 4 + ue)
            throw new Error("FAT boundary crossed: " + te + " 4 " + E);
          if (!y[ce] || (te = Qr(y[ce], ue), ne[te]))
            break;
        }
        A[se] = { nodes: Y, data: Cl([U]) };
      }
    return A;
  }
  function _(y, S, w, E, T, A, H, Y) {
    for (var U = 0, W = E.length ? 2 : 0, z = S[y].data, te = 0, se = 0, ue; te < z.length; te += 128) {
      var ne = (
        /*::(*/
        z.slice(te, te + 128)
      );
      bt(ne, 64), se = ne.read_shift(2), ue = s0(ne, 0, se - W), E.push(ue);
      var ce = {
        name: ue,
        type: ne.read_shift(1),
        color: ne.read_shift(1),
        L: ne.read_shift(4, "i"),
        R: ne.read_shift(4, "i"),
        C: ne.read_shift(4, "i"),
        clsid: ne.read_shift(16),
        state: ne.read_shift(4, "i"),
        start: 0,
        size: 0
      }, ge = ne.read_shift(2) + ne.read_shift(2) + ne.read_shift(2) + ne.read_shift(2);
      ge !== 0 && (ce.ct = C(ne, ne.l - 8));
      var Re = ne.read_shift(2) + ne.read_shift(2) + ne.read_shift(2) + ne.read_shift(2);
      Re !== 0 && (ce.mt = C(ne, ne.l - 8)), ce.start = ne.read_shift(4, "i"), ce.size = ne.read_shift(4, "i"), ce.size < 0 && ce.start < 0 && (ce.size = ce.type = 0, ce.start = M, ce.name = ""), ce.type === 5 ? (U = ce.start, T > 0 && U !== M && (S[U].name = "!StreamData")) : ce.size >= 4096 ? (ce.storage = "fat", S[ce.start] === void 0 && (S[ce.start] = g(w, ce.start, S.fat_addrs, S.ssz)), S[ce.start].name = ce.name, ce.content = S[ce.start].data.slice(0, ce.size)) : (ce.storage = "minifat", ce.size < 0 ? ce.size = 0 : U !== M && ce.start !== M && S[U] && (ce.content = p(ce, S[U].data, (S[Y] || {}).data))), ce.content && bt(ce.content, 0), A[ue] = ce, H.push(ce);
    }
  }
  function C(y, S) {
    return new Date((Mt(y, S + 4) / 1e7 * Math.pow(2, 32) + Mt(y, S) / 1e7 - 11644473600) * 1e3);
  }
  function R(y, S) {
    return f(), c(l.readFileSync(y), S);
  }
  function G(y, S) {
    var w = S && S.type;
    switch (w || Ae && Buffer.isBuffer(y) && (w = "buffer"), w || "base64") {
      case "file":
        return R(y, S);
      case "base64":
        return c(Gt(xr(y)), S);
      case "binary":
        return c(Gt(y), S);
    }
    return c(
      /*::typeof blob == 'string' ? new Buffer(blob, 'utf-8') : */
      y,
      S
    );
  }
  function b(y, S) {
    var w = S || {}, E = w.root || "Root Entry";
    if (y.FullPaths || (y.FullPaths = []), y.FileIndex || (y.FileIndex = []), y.FullPaths.length !== y.FileIndex.length)
      throw new Error("inconsistent CFB structure");
    y.FullPaths.length === 0 && (y.FullPaths[0] = E + "/", y.FileIndex[0] = { name: E, type: 5 }), w.CLSID && (y.FileIndex[0].clsid = w.CLSID), L(y);
  }
  function L(y) {
    var S = "Sh33tJ5";
    if (!De.find(y, "/" + S)) {
      var w = X(4);
      w[0] = 55, w[1] = w[3] = 50, w[2] = 54, y.FileIndex.push({ name: S, type: 2, content: w, size: 4, L: 69, R: 69, C: 69 }), y.FullPaths.push(y.FullPaths[0] + S), P(y);
    }
  }
  function P(y, S) {
    b(y);
    for (var w = !1, E = !1, T = y.FullPaths.length - 1; T >= 0; --T) {
      var A = y.FileIndex[T];
      switch (A.type) {
        case 0:
          E ? w = !0 : (y.FileIndex.pop(), y.FullPaths.pop());
          break;
        case 1:
        case 2:
        case 5:
          E = !0, isNaN(A.R * A.L * A.C) && (w = !0), A.R > -1 && A.L > -1 && A.R == A.L && (w = !0);
          break;
        default:
          w = !0;
          break;
      }
    }
    if (!(!w && !S)) {
      var H = new Date(1987, 1, 19), Y = 0, U = Object.create ? /* @__PURE__ */ Object.create(null) : {}, W = [];
      for (T = 0; T < y.FullPaths.length; ++T)
        U[y.FullPaths[T]] = !0, y.FileIndex[T].type !== 0 && W.push([y.FullPaths[T], y.FileIndex[T]]);
      for (T = 0; T < W.length; ++T) {
        var z = n(W[T][0]);
        E = U[z], E || (W.push([z, {
          name: i(z).replace("/", ""),
          type: 1,
          clsid: le,
          ct: H,
          mt: H,
          content: null
        }]), U[z] = !0);
      }
      for (W.sort(function(ue, ne) {
        return r(ue[0], ne[0]);
      }), y.FullPaths = [], y.FileIndex = [], T = 0; T < W.length; ++T)
        y.FullPaths[T] = W[T][0], y.FileIndex[T] = W[T][1];
      for (T = 0; T < W.length; ++T) {
        var te = y.FileIndex[T], se = y.FullPaths[T];
        if (te.name = i(se).replace("/", ""), te.L = te.R = te.C = -(te.color = 1), te.size = te.content ? te.content.length : 0, te.start = 0, te.clsid = te.clsid || le, T === 0)
          te.C = W.length > 1 ? 1 : -1, te.size = 0, te.type = 5;
        else if (se.slice(-1) == "/") {
          for (Y = T + 1; Y < W.length && n(y.FullPaths[Y]) != se; ++Y)
            ;
          for (te.C = Y >= W.length ? -1 : Y, Y = T + 1; Y < W.length && n(y.FullPaths[Y]) != n(se); ++Y)
            ;
          te.R = Y >= W.length ? -1 : Y, te.type = 1;
        } else
          n(y.FullPaths[T + 1] || "") == n(se) && (te.R = T + 1), te.type = 2;
      }
    }
  }
  function N(y, S) {
    var w = S || {};
    if (w.fileType == "mad")
      return i1(y, w);
    switch (P(y), w.fileType) {
      case "zip":
        return Jh(y, w);
    }
    var E = function(ue) {
      for (var ne = 0, ce = 0, ge = 0; ge < ue.FileIndex.length; ++ge) {
        var Re = ue.FileIndex[ge];
        if (Re.content) {
          var Ne = Re.content.length;
          Ne > 0 && (Ne < 4096 ? ne += Ne + 63 >> 6 : ce += Ne + 511 >> 9);
        }
      }
      for (var ot = ue.FullPaths.length + 3 >> 2, Jn = ne + 7 >> 3, Qn = ne + 127 >> 7, Zn = Jn + ce + ot + Qn, jr = Zn + 127 >> 7, Bs = jr <= 109 ? 0 : Math.ceil((jr - 109) / 127); Zn + jr + Bs + 127 >> 7 > jr; )
        Bs = ++jr <= 109 ? 0 : Math.ceil((jr - 109) / 127);
      var ur = [1, Bs, jr, Qn, ot, ce, ne, 0];
      return ue.FileIndex[0].size = ne << 6, ur[7] = (ue.FileIndex[0].start = ur[0] + ur[1] + ur[2] + ur[3] + ur[4] + ur[5]) + (ur[6] + 7 >> 3), ur;
    }(y), T = X(E[7] << 9), A = 0, H = 0;
    {
      for (A = 0; A < 8; ++A)
        T.write_shift(1, J[A]);
      for (A = 0; A < 8; ++A)
        T.write_shift(2, 0);
      for (T.write_shift(2, 62), T.write_shift(2, 3), T.write_shift(2, 65534), T.write_shift(2, 9), T.write_shift(2, 6), A = 0; A < 3; ++A)
        T.write_shift(2, 0);
      for (T.write_shift(4, 0), T.write_shift(4, E[2]), T.write_shift(4, E[0] + E[1] + E[2] + E[3] - 1), T.write_shift(4, 0), T.write_shift(4, 4096), T.write_shift(4, E[3] ? E[0] + E[1] + E[2] - 1 : M), T.write_shift(4, E[3]), T.write_shift(-4, E[1] ? E[0] - 1 : M), T.write_shift(4, E[1]), A = 0; A < 109; ++A)
        T.write_shift(-4, A < E[2] ? E[1] + A : -1);
    }
    if (E[1])
      for (H = 0; H < E[1]; ++H) {
        for (; A < 236 + H * 127; ++A)
          T.write_shift(-4, A < E[2] ? E[1] + A : -1);
        T.write_shift(-4, H === E[1] - 1 ? M : H + 1);
      }
    var Y = function(ue) {
      for (H += ue; A < H - 1; ++A)
        T.write_shift(-4, A + 1);
      ue && (++A, T.write_shift(-4, M));
    };
    for (H = A = 0, H += E[1]; A < H; ++A)
      T.write_shift(-4, he.DIFSECT);
    for (H += E[2]; A < H; ++A)
      T.write_shift(-4, he.FATSECT);
    Y(E[3]), Y(E[4]);
    for (var U = 0, W = 0, z = y.FileIndex[0]; U < y.FileIndex.length; ++U)
      z = y.FileIndex[U], z.content && (W = z.content.length, !(W < 4096) && (z.start = H, Y(W + 511 >> 9)));
    for (Y(E[6] + 7 >> 3); T.l & 511; )
      T.write_shift(-4, he.ENDOFCHAIN);
    for (H = A = 0, U = 0; U < y.FileIndex.length; ++U)
      z = y.FileIndex[U], z.content && (W = z.content.length, !(!W || W >= 4096) && (z.start = H, Y(W + 63 >> 6)));
    for (; T.l & 511; )
      T.write_shift(-4, he.ENDOFCHAIN);
    for (A = 0; A < E[4] << 2; ++A) {
      var te = y.FullPaths[A];
      if (!te || te.length === 0) {
        for (U = 0; U < 17; ++U)
          T.write_shift(4, 0);
        for (U = 0; U < 3; ++U)
          T.write_shift(4, -1);
        for (U = 0; U < 12; ++U)
          T.write_shift(4, 0);
        continue;
      }
      z = y.FileIndex[A], A === 0 && (z.start = z.size ? z.start - 1 : M);
      var se = A === 0 && w.root || z.name;
      if (W = 2 * (se.length + 1), T.write_shift(64, se, "utf16le"), T.write_shift(2, W), T.write_shift(1, z.type), T.write_shift(1, z.color), T.write_shift(-4, z.L), T.write_shift(-4, z.R), T.write_shift(-4, z.C), z.clsid)
        T.write_shift(16, z.clsid, "hex");
      else
        for (U = 0; U < 4; ++U)
          T.write_shift(4, 0);
      T.write_shift(4, z.state || 0), T.write_shift(4, 0), T.write_shift(4, 0), T.write_shift(4, 0), T.write_shift(4, 0), T.write_shift(4, z.start), T.write_shift(4, z.size), T.write_shift(4, 0);
    }
    for (A = 1; A < y.FileIndex.length; ++A)
      if (z = y.FileIndex[A], z.size >= 4096)
        if (T.l = z.start + 1 << 9, Ae && Buffer.isBuffer(z.content))
          z.content.copy(T, T.l, 0, z.size), T.l += z.size + 511 & -512;
        else {
          for (U = 0; U < z.size; ++U)
            T.write_shift(1, z.content[U]);
          for (; U & 511; ++U)
            T.write_shift(1, 0);
        }
    for (A = 1; A < y.FileIndex.length; ++A)
      if (z = y.FileIndex[A], z.size > 0 && z.size < 4096)
        if (Ae && Buffer.isBuffer(z.content))
          z.content.copy(T, T.l, 0, z.size), T.l += z.size + 63 & -64;
        else {
          for (U = 0; U < z.size; ++U)
            T.write_shift(1, z.content[U]);
          for (; U & 63; ++U)
            T.write_shift(1, 0);
        }
    if (Ae)
      T.l = T.length;
    else
      for (; T.l < T.length; )
        T.write_shift(1, 0);
    return T;
  }
  function F(y, S) {
    var w = y.FullPaths.map(function(U) {
      return U.toUpperCase();
    }), E = w.map(function(U) {
      var W = U.split("/");
      return W[W.length - (U.slice(-1) == "/" ? 2 : 1)];
    }), T = !1;
    S.charCodeAt(0) === 47 ? (T = !0, S = w[0].slice(0, -1) + S) : T = S.indexOf("/") !== -1;
    var A = S.toUpperCase(), H = T === !0 ? w.indexOf(A) : E.indexOf(A);
    if (H !== -1)
      return y.FileIndex[H];
    var Y = !A.match(Wi);
    for (A = A.replace(fi, ""), Y && (A = A.replace(Wi, "!")), H = 0; H < w.length; ++H)
      if ((Y ? w[H].replace(Wi, "!") : w[H]).replace(fi, "") == A || (Y ? E[H].replace(Wi, "!") : E[H]).replace(fi, "") == A)
        return y.FileIndex[H];
    return null;
  }
  var O = 64, M = -2, V = "d0cf11e0a1b11ae1", J = [208, 207, 17, 224, 161, 177, 26, 225], le = "00000000000000000000000000000000", he = {
    /* 2.1 Compund File Sector Numbers and Types */
    MAXREGSECT: -6,
    DIFSECT: -4,
    FATSECT: -3,
    ENDOFCHAIN: M,
    FREESECT: -1,
    /* 2.2 Compound File Header */
    HEADER_SIGNATURE: V,
    HEADER_MINOR_VERSION: "3e00",
    MAXREGSID: -6,
    NOSTREAM: -1,
    HEADER_CLSID: le,
    /* 2.6.1 Compound File Directory Entry */
    EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
  };
  function pe(y, S, w) {
    f();
    var E = N(y, w);
    l.writeFileSync(S, E);
  }
  function me(y) {
    for (var S = new Array(y.length), w = 0; w < y.length; ++w)
      S[w] = String.fromCharCode(y[w]);
    return S.join("");
  }
  function Me(y, S) {
    var w = N(y, S);
    switch (S && S.type || "buffer") {
      case "file":
        return f(), l.writeFileSync(S.filename, w), w;
      case "binary":
        return typeof w == "string" ? w : me(w);
      case "base64":
        return _i(typeof w == "string" ? w : me(w));
      case "buffer":
        if (Ae)
          return Buffer.isBuffer(w) ? w : Er(w);
      case "array":
        return typeof w == "string" ? Gt(w) : w;
    }
    return w;
  }
  var Se;
  function k(y) {
    try {
      var S = y.InflateRaw, w = new S();
      if (w._processChunk(new Uint8Array([3, 0]), w._finishFlushFlag), w.bytesRead)
        Se = y;
      else
        throw new Error("zlib does not expose bytesRead");
    } catch (E) {
      console.error("cannot use native zlib: " + (E.message || E));
    }
  }
  function B(y, S) {
    if (!Se)
      return Q0(y, S);
    var w = Se.InflateRaw, E = new w(), T = E._processChunk(y.slice(y.l), E._finishFlushFlag);
    return y.l += E.bytesRead, T;
  }
  function D(y) {
    return Se ? Se.deflateRawSync(y) : X0(y);
  }
  var I = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], j = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], ee = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function fe(y) {
    var S = (y << 1 | y << 11) & 139536 | (y << 5 | y << 15) & 558144;
    return (S >> 16 | S >> 8 | S) & 255;
  }
  for (var oe = typeof Uint8Array < "u", re = oe ? new Uint8Array(256) : [], Ce = 0; Ce < 256; ++Ce)
    re[Ce] = fe(Ce);
  function _e(y, S) {
    var w = re[y & 255];
    return S <= 8 ? w >>> 8 - S : (w = w << 8 | re[y >> 8 & 255], S <= 16 ? w >>> 16 - S : (w = w << 8 | re[y >> 16 & 255], w >>> 24 - S));
  }
  function Ye(y, S) {
    var w = S & 7, E = S >>> 3;
    return (y[E] | (w <= 6 ? 0 : y[E + 1] << 8)) >>> w & 3;
  }
  function we(y, S) {
    var w = S & 7, E = S >>> 3;
    return (y[E] | (w <= 5 ? 0 : y[E + 1] << 8)) >>> w & 7;
  }
  function Ft(y, S) {
    var w = S & 7, E = S >>> 3;
    return (y[E] | (w <= 4 ? 0 : y[E + 1] << 8)) >>> w & 15;
  }
  function Ie(y, S) {
    var w = S & 7, E = S >>> 3;
    return (y[E] | (w <= 3 ? 0 : y[E + 1] << 8)) >>> w & 31;
  }
  function de(y, S) {
    var w = S & 7, E = S >>> 3;
    return (y[E] | (w <= 1 ? 0 : y[E + 1] << 8)) >>> w & 127;
  }
  function mt(y, S, w) {
    var E = S & 7, T = S >>> 3, A = (1 << w) - 1, H = y[T] >>> E;
    return w < 8 - E || (H |= y[T + 1] << 8 - E, w < 16 - E) || (H |= y[T + 2] << 16 - E, w < 24 - E) || (H |= y[T + 3] << 24 - E), H & A;
  }
  function cr(y, S, w) {
    var E = S & 7, T = S >>> 3;
    return E <= 5 ? y[T] |= (w & 7) << E : (y[T] |= w << E & 255, y[T + 1] = (w & 7) >> 8 - E), S + 3;
  }
  function Gr(y, S, w) {
    var E = S & 7, T = S >>> 3;
    return w = (w & 1) << E, y[T] |= w, S + 1;
  }
  function gn(y, S, w) {
    var E = S & 7, T = S >>> 3;
    return w <<= E, y[T] |= w & 255, w >>>= 8, y[T + 1] = w, S + 8;
  }
  function G0(y, S, w) {
    var E = S & 7, T = S >>> 3;
    return w <<= E, y[T] |= w & 255, w >>>= 8, y[T + 1] = w & 255, y[T + 2] = w >>> 8, S + 16;
  }
  function Ps(y, S) {
    var w = y.length, E = 2 * w > S ? 2 * w : S + 5, T = 0;
    if (w >= S)
      return y;
    if (Ae) {
      var A = ul(E);
      if (y.copy)
        y.copy(A);
      else
        for (; T < y.length; ++T)
          A[T] = y[T];
      return A;
    } else if (oe) {
      var H = new Uint8Array(E);
      if (H.set)
        H.set(y);
      else
        for (; T < w; ++T)
          H[T] = y[T];
      return H;
    }
    return y.length = E, y;
  }
  function Jt(y) {
    for (var S = new Array(y), w = 0; w < y; ++w)
      S[w] = 0;
    return S;
  }
  function $i(y, S, w) {
    var E = 1, T = 0, A = 0, H = 0, Y = 0, U = y.length, W = oe ? new Uint16Array(32) : Jt(32);
    for (A = 0; A < 32; ++A)
      W[A] = 0;
    for (A = U; A < w; ++A)
      y[A] = 0;
    U = y.length;
    var z = oe ? new Uint16Array(U) : Jt(U);
    for (A = 0; A < U; ++A)
      W[T = y[A]]++, E < T && (E = T), z[A] = 0;
    for (W[0] = 0, A = 1; A <= E; ++A)
      W[A + 16] = Y = Y + W[A - 1] << 1;
    for (A = 0; A < U; ++A)
      Y = y[A], Y != 0 && (z[A] = W[Y + 16]++);
    var te = 0;
    for (A = 0; A < U; ++A)
      if (te = y[A], te != 0)
        for (Y = _e(z[A], E) >> E - te, H = (1 << E + 4 - te) - 1; H >= 0; --H)
          S[Y | H << te] = te & 15 | A << 4;
    return E;
  }
  var Rs = oe ? new Uint16Array(512) : Jt(512), Ns = oe ? new Uint16Array(32) : Jt(32);
  if (!oe) {
    for (var Xr = 0; Xr < 512; ++Xr)
      Rs[Xr] = 0;
    for (Xr = 0; Xr < 32; ++Xr)
      Ns[Xr] = 0;
  }
  (function() {
    for (var y = [], S = 0; S < 32; S++)
      y.push(5);
    $i(y, Ns, 32);
    var w = [];
    for (S = 0; S <= 143; S++)
      w.push(8);
    for (; S <= 255; S++)
      w.push(9);
    for (; S <= 279; S++)
      w.push(7);
    for (; S <= 287; S++)
      w.push(8);
    $i(w, Rs, 288);
  })();
  var jh = /* @__PURE__ */ function() {
    for (var S = oe ? new Uint8Array(32768) : [], w = 0, E = 0; w < ee.length - 1; ++w)
      for (; E < ee[w + 1]; ++E)
        S[E] = w;
    for (; E < 32768; ++E)
      S[E] = 29;
    var T = oe ? new Uint8Array(259) : [];
    for (w = 0, E = 0; w < j.length - 1; ++w)
      for (; E < j[w + 1]; ++E)
        T[E] = w;
    function A(Y, U) {
      for (var W = 0; W < Y.length; ) {
        var z = Math.min(65535, Y.length - W), te = W + z == Y.length;
        for (U.write_shift(1, +te), U.write_shift(2, z), U.write_shift(2, ~z & 65535); z-- > 0; )
          U[U.l++] = Y[W++];
      }
      return U.l;
    }
    function H(Y, U) {
      for (var W = 0, z = 0, te = oe ? new Uint16Array(32768) : []; z < Y.length; ) {
        var se = (
          /* data.length - boff; */
          Math.min(65535, Y.length - z)
        );
        if (se < 10) {
          for (W = cr(U, W, +(z + se == Y.length)), W & 7 && (W += 8 - (W & 7)), U.l = W / 8 | 0, U.write_shift(2, se), U.write_shift(2, ~se & 65535); se-- > 0; )
            U[U.l++] = Y[z++];
          W = U.l * 8;
          continue;
        }
        W = cr(U, W, +(z + se == Y.length) + 2);
        for (var ue = 0; se-- > 0; ) {
          var ne = Y[z];
          ue = (ue << 5 ^ ne) & 32767;
          var ce = -1, ge = 0;
          if ((ce = te[ue]) && (ce |= z & -32768, ce > z && (ce -= 32768), ce < z))
            for (; Y[ce + ge] == Y[z + ge] && ge < 250; )
              ++ge;
          if (ge > 2) {
            ne = T[ge], ne <= 22 ? W = gn(U, W, re[ne + 1] >> 1) - 1 : (gn(U, W, 3), W += 5, gn(U, W, re[ne - 23] >> 5), W += 3);
            var Re = ne < 8 ? 0 : ne - 4 >> 2;
            Re > 0 && (G0(U, W, ge - j[ne]), W += Re), ne = S[z - ce], W = gn(U, W, re[ne] >> 3), W -= 3;
            var Ne = ne < 4 ? 0 : ne - 2 >> 1;
            Ne > 0 && (G0(U, W, z - ce - ee[ne]), W += Ne);
            for (var ot = 0; ot < ge; ++ot)
              te[ue] = z & 32767, ue = (ue << 5 ^ Y[z]) & 32767, ++z;
            se -= ge - 1;
          } else
            ne <= 143 ? ne = ne + 48 : W = Gr(U, W, 1), W = gn(U, W, re[ne]), te[ue] = z & 32767, ++z;
        }
        W = gn(U, W, 0) - 1;
      }
      return U.l = (W + 7) / 8 | 0, U.l;
    }
    return function(U, W) {
      return U.length < 8 ? A(U, W) : H(U, W);
    };
  }();
  function X0(y) {
    var S = X(50 + Math.floor(y.length * 1.1)), w = jh(y, S);
    return S.slice(0, w);
  }
  var j0 = oe ? new Uint16Array(32768) : Jt(32768), Y0 = oe ? new Uint16Array(32768) : Jt(32768), q0 = oe ? new Uint16Array(128) : Jt(128), K0 = 1, J0 = 1;
  function Yh(y, S) {
    var w = Ie(y, S) + 257;
    S += 5;
    var E = Ie(y, S) + 1;
    S += 5;
    var T = Ft(y, S) + 4;
    S += 4;
    for (var A = 0, H = oe ? new Uint8Array(19) : Jt(19), Y = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], U = 1, W = oe ? new Uint8Array(8) : Jt(8), z = oe ? new Uint8Array(8) : Jt(8), te = H.length, se = 0; se < T; ++se)
      H[I[se]] = A = we(y, S), U < A && (U = A), W[A]++, S += 3;
    var ue = 0;
    for (W[0] = 0, se = 1; se <= U; ++se)
      z[se] = ue = ue + W[se - 1] << 1;
    for (se = 0; se < te; ++se)
      (ue = H[se]) != 0 && (Y[se] = z[ue]++);
    var ne = 0;
    for (se = 0; se < te; ++se)
      if (ne = H[se], ne != 0) {
        ue = re[Y[se]] >> 8 - ne;
        for (var ce = (1 << 7 - ne) - 1; ce >= 0; --ce)
          q0[ue | ce << ne] = ne & 7 | se << 3;
      }
    var ge = [];
    for (U = 1; ge.length < w + E; )
      switch (ue = q0[de(y, S)], S += ue & 7, ue >>>= 3) {
        case 16:
          for (A = 3 + Ye(y, S), S += 2, ue = ge[ge.length - 1]; A-- > 0; )
            ge.push(ue);
          break;
        case 17:
          for (A = 3 + we(y, S), S += 3; A-- > 0; )
            ge.push(0);
          break;
        case 18:
          for (A = 11 + de(y, S), S += 7; A-- > 0; )
            ge.push(0);
          break;
        default:
          ge.push(ue), U < ue && (U = ue);
          break;
      }
    var Re = ge.slice(0, w), Ne = ge.slice(w);
    for (se = w; se < 286; ++se)
      Re[se] = 0;
    for (se = E; se < 30; ++se)
      Ne[se] = 0;
    return K0 = $i(Re, j0, 286), J0 = $i(Ne, Y0, 30), S;
  }
  function qh(y, S) {
    if (y[0] == 3 && !(y[1] & 3))
      return [an(S), 2];
    for (var w = 0, E = 0, T = ul(S || 1 << 18), A = 0, H = T.length >>> 0, Y = 0, U = 0; !(E & 1); ) {
      if (E = we(y, w), w += 3, E >>> 1)
        E >> 1 == 1 ? (Y = 9, U = 5) : (w = Yh(y, w), Y = K0, U = J0);
      else {
        w & 7 && (w += 8 - (w & 7));
        var W = y[w >>> 3] | y[(w >>> 3) + 1] << 8;
        if (w += 32, W > 0)
          for (!S && H < A + W && (T = Ps(T, A + W), H = T.length); W-- > 0; )
            T[A++] = y[w >>> 3], w += 8;
        continue;
      }
      for (; ; ) {
        !S && H < A + 32767 && (T = Ps(T, A + 32767), H = T.length);
        var z = mt(y, w, Y), te = E >>> 1 == 1 ? Rs[z] : j0[z];
        if (w += te & 15, te >>>= 4, !(te >>> 8 & 255))
          T[A++] = te;
        else {
          if (te == 256)
            break;
          te -= 257;
          var se = te < 8 ? 0 : te - 4 >> 2;
          se > 5 && (se = 0);
          var ue = A + j[te];
          se > 0 && (ue += mt(y, w, se), w += se), z = mt(y, w, U), te = E >>> 1 == 1 ? Ns[z] : Y0[z], w += te & 15, te >>>= 4;
          var ne = te < 4 ? 0 : te - 2 >> 1, ce = ee[te];
          for (ne > 0 && (ce += mt(y, w, ne), w += ne), !S && H < ue && (T = Ps(T, ue + 100), H = T.length); A < ue; )
            T[A] = T[A - ce], ++A;
        }
      }
    }
    return S ? [T, w + 7 >>> 3] : [T.slice(0, A), w + 7 >>> 3];
  }
  function Q0(y, S) {
    var w = y.slice(y.l || 0), E = qh(w, S);
    return y.l += E[1], E[0];
  }
  function Z0(y, S) {
    if (y)
      typeof console < "u" && console.error(S);
    else
      throw new Error(S);
  }
  function el(y, S) {
    var w = (
      /*::(*/
      y
    );
    bt(w, 0);
    var E = [], T = [], A = {
      FileIndex: E,
      FullPaths: T
    };
    b(A, { root: S.root });
    for (var H = w.length - 4; (w[H] != 80 || w[H + 1] != 75 || w[H + 2] != 5 || w[H + 3] != 6) && H >= 0; )
      --H;
    w.l = H + 4, w.l += 4;
    var Y = w.read_shift(2);
    w.l += 6;
    var U = w.read_shift(4);
    for (w.l = U, H = 0; H < Y; ++H) {
      w.l += 20;
      var W = w.read_shift(4), z = w.read_shift(4), te = w.read_shift(2), se = w.read_shift(2), ue = w.read_shift(2);
      w.l += 8;
      var ne = w.read_shift(4), ce = o(
        /*::(*/
        w.slice(w.l + te, w.l + te + se)
        /*:: :any)*/
      );
      w.l += te + se + ue;
      var ge = w.l;
      w.l = ne + 4, Kh(w, W, z, A, ce), w.l = ge;
    }
    return A;
  }
  function Kh(y, S, w, E, T) {
    y.l += 2;
    var A = y.read_shift(2), H = y.read_shift(2), Y = s(y);
    if (A & 8257)
      throw new Error("Unsupported ZIP encryption");
    for (var U = y.read_shift(4), W = y.read_shift(4), z = y.read_shift(4), te = y.read_shift(2), se = y.read_shift(2), ue = "", ne = 0; ne < te; ++ne)
      ue += String.fromCharCode(y[y.l++]);
    if (se) {
      var ce = o(
        /*::(*/
        y.slice(y.l, y.l + se)
        /*:: :any)*/
      );
      (ce[21589] || {}).mt && (Y = ce[21589].mt), ((T || {})[21589] || {}).mt && (Y = T[21589].mt);
    }
    y.l += se;
    var ge = y.slice(y.l, y.l + W);
    switch (H) {
      case 8:
        ge = B(y, z);
        break;
      case 0:
        break;
      default:
        throw new Error("Unsupported ZIP Compression method " + H);
    }
    var Re = !1;
    A & 8 && (U = y.read_shift(4), U == 134695760 && (U = y.read_shift(4), Re = !0), W = y.read_shift(4), z = y.read_shift(4)), W != S && Z0(Re, "Bad compressed size: " + S + " != " + W), z != w && Z0(Re, "Bad uncompressed size: " + w + " != " + z), Ls(E, ue, ge, { unsafe: !0, mt: Y });
  }
  function Jh(y, S) {
    var w = S || {}, E = [], T = [], A = X(1), H = w.compression ? 8 : 0, Y = 0, U = 0, W = 0, z = 0, te = 0, se = y.FullPaths[0], ue = se, ne = y.FileIndex[0], ce = [], ge = 0;
    for (U = 1; U < y.FullPaths.length; ++U)
      if (ue = y.FullPaths[U].slice(se.length), ne = y.FileIndex[U], !(!ne.size || !ne.content || ue == "Sh33tJ5")) {
        var Re = z, Ne = X(ue.length);
        for (W = 0; W < ue.length; ++W)
          Ne.write_shift(1, ue.charCodeAt(W) & 127);
        Ne = Ne.slice(0, Ne.l), ce[te] = _x.buf(
          /*::((*/
          ne.content,
          0
        );
        var ot = ne.content;
        H == 8 && (ot = D(ot)), A = X(30), A.write_shift(4, 67324752), A.write_shift(2, 20), A.write_shift(2, Y), A.write_shift(2, H), ne.mt ? a(A, ne.mt) : A.write_shift(4, 0), A.write_shift(-4, ce[te]), A.write_shift(4, ot.length), A.write_shift(
          4,
          /*::(*/
          ne.content.length
        ), A.write_shift(2, Ne.length), A.write_shift(2, 0), z += A.length, E.push(A), z += Ne.length, E.push(Ne), z += ot.length, E.push(ot), A = X(46), A.write_shift(4, 33639248), A.write_shift(2, 0), A.write_shift(2, 20), A.write_shift(2, Y), A.write_shift(2, H), A.write_shift(4, 0), A.write_shift(-4, ce[te]), A.write_shift(4, ot.length), A.write_shift(
          4,
          /*::(*/
          ne.content.length
        ), A.write_shift(2, Ne.length), A.write_shift(2, 0), A.write_shift(2, 0), A.write_shift(2, 0), A.write_shift(2, 0), A.write_shift(4, 0), A.write_shift(4, Re), ge += A.l, T.push(A), ge += Ne.length, T.push(Ne), ++te;
      }
    return A = X(22), A.write_shift(4, 101010256), A.write_shift(2, 0), A.write_shift(2, 0), A.write_shift(2, te), A.write_shift(2, te), A.write_shift(4, ge), A.write_shift(4, z), A.write_shift(2, 0), nt([nt(E), nt(T), A]);
  }
  var Ui = {
    htm: "text/html",
    xml: "text/xml",
    gif: "image/gif",
    jpg: "image/jpeg",
    png: "image/png",
    mso: "application/x-mso",
    thmx: "application/vnd.ms-officetheme",
    sh33tj5: "application/octet-stream"
  };
  function Qh(y, S) {
    if (y.ctype)
      return y.ctype;
    var w = y.name || "", E = w.match(/\.([^\.]+)$/);
    return E && Ui[E[1]] || S && (E = (w = S).match(/[\.\\]([^\.\\])+$/), E && Ui[E[1]]) ? Ui[E[1]] : "application/octet-stream";
  }
  function Zh(y) {
    for (var S = _i(y), w = [], E = 0; E < S.length; E += 76)
      w.push(S.slice(E, E + 76));
    return w.join(`\r
`) + `\r
`;
  }
  function e1(y) {
    var S = y.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(W) {
      var z = W.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (z.length == 1 ? "0" + z : z);
    });
    S = S.replace(/ $/mg, "=20").replace(/\t$/mg, "=09"), S.charAt(0) == `
` && (S = "=0D" + S.slice(1)), S = S.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A");
    for (var w = [], E = S.split(`\r
`), T = 0; T < E.length; ++T) {
      var A = E[T];
      if (A.length == 0) {
        w.push("");
        continue;
      }
      for (var H = 0; H < A.length; ) {
        var Y = 76, U = A.slice(H, H + Y);
        U.charAt(Y - 1) == "=" ? Y-- : U.charAt(Y - 2) == "=" ? Y -= 2 : U.charAt(Y - 3) == "=" && (Y -= 3), U = A.slice(H, H + Y), H += Y, H < A.length && (U += "="), w.push(U);
      }
    }
    return w.join(`\r
`);
  }
  function t1(y) {
    for (var S = [], w = 0; w < y.length; ++w) {
      for (var E = y[w]; w <= y.length && E.charAt(E.length - 1) == "="; )
        E = E.slice(0, E.length - 1) + y[++w];
      S.push(E);
    }
    for (var T = 0; T < S.length; ++T)
      S[T] = S[T].replace(/[=][0-9A-Fa-f]{2}/g, function(A) {
        return String.fromCharCode(parseInt(A.slice(1), 16));
      });
    return Gt(S.join(`\r
`));
  }
  function r1(y, S, w) {
    for (var E = "", T = "", A = "", H, Y = 0; Y < 10; ++Y) {
      var U = S[Y];
      if (!U || U.match(/^\s*$/))
        break;
      var W = U.match(/^(.*?):\s*([^\s].*)$/);
      if (W)
        switch (W[1].toLowerCase()) {
          case "content-location":
            E = W[2].trim();
            break;
          case "content-type":
            A = W[2].trim();
            break;
          case "content-transfer-encoding":
            T = W[2].trim();
            break;
        }
    }
    switch (++Y, T.toLowerCase()) {
      case "base64":
        H = Gt(xr(S.slice(Y).join("")));
        break;
      case "quoted-printable":
        H = t1(S.slice(Y));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + T);
    }
    var z = Ls(y, E.slice(w.length), H, { unsafe: !0 });
    A && (z.ctype = A);
  }
  function n1(y, S) {
    if (me(y.slice(0, 13)).toLowerCase() != "mime-version:")
      throw new Error("Unsupported MAD header");
    var w = S && S.root || "", E = (Ae && Buffer.isBuffer(y) ? y.toString("binary") : me(y)).split(`\r
`), T = 0, A = "";
    for (T = 0; T < E.length; ++T)
      if (A = E[T], !!/^Content-Location:/i.test(A) && (A = A.slice(A.indexOf("file")), w || (w = A.slice(0, A.lastIndexOf("/") + 1)), A.slice(0, w.length) != w))
        for (; w.length > 0 && (w = w.slice(0, w.length - 1), w = w.slice(0, w.lastIndexOf("/") + 1), A.slice(0, w.length) != w); )
          ;
    var H = (E[1] || "").match(/boundary="(.*?)"/);
    if (!H)
      throw new Error("MAD cannot find boundary");
    var Y = "--" + (H[1] || ""), U = [], W = [], z = {
      FileIndex: U,
      FullPaths: W
    };
    b(z);
    var te, se = 0;
    for (T = 0; T < E.length; ++T) {
      var ue = E[T];
      ue !== Y && ue !== Y + "--" || (se++ && r1(z, E.slice(te, T), w), te = T);
    }
    return z;
  }
  function i1(y, S) {
    var w = S || {}, E = w.boundary || "SheetJS";
    E = "------=" + E;
    for (var T = [
      "MIME-Version: 1.0",
      'Content-Type: multipart/related; boundary="' + E.slice(2) + '"',
      "",
      "",
      ""
    ], A = y.FullPaths[0], H = A, Y = y.FileIndex[0], U = 1; U < y.FullPaths.length; ++U)
      if (H = y.FullPaths[U].slice(A.length), Y = y.FileIndex[U], !(!Y.size || !Y.content || H == "Sh33tJ5")) {
        H = H.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(ge) {
          return "_x" + ge.charCodeAt(0).toString(16) + "_";
        }).replace(/[\u0080-\uFFFF]/g, function(ge) {
          return "_u" + ge.charCodeAt(0).toString(16) + "_";
        });
        for (var W = Y.content, z = Ae && Buffer.isBuffer(W) ? W.toString("binary") : me(W), te = 0, se = Math.min(1024, z.length), ue = 0, ne = 0; ne <= se; ++ne)
          (ue = z.charCodeAt(ne)) >= 32 && ue < 128 && ++te;
        var ce = te >= se * 4 / 5;
        T.push(E), T.push("Content-Location: " + (w.root || "file:///C:/SheetJS/") + H), T.push("Content-Transfer-Encoding: " + (ce ? "quoted-printable" : "base64")), T.push("Content-Type: " + Qh(Y, H)), T.push(""), T.push(ce ? e1(z) : Zh(z));
      }
    return T.push(E + `--\r
`), T.join(`\r
`);
  }
  function a1(y) {
    var S = {};
    return b(S, y), S;
  }
  function Ls(y, S, w, E) {
    var T = E && E.unsafe;
    T || b(y);
    var A = !T && De.find(y, S);
    if (!A) {
      var H = y.FullPaths[0];
      S.slice(0, H.length) == H ? H = S : (H.slice(-1) != "/" && (H += "/"), H = (H + S).replace("//", "/")), A = { name: i(S), type: 2 }, y.FileIndex.push(A), y.FullPaths.push(H), T || De.utils.cfb_gc(y);
    }
    return A.content = w, A.size = w ? w.length : 0, E && (E.CLSID && (A.clsid = E.CLSID), E.mt && (A.mt = E.mt), E.ct && (A.ct = E.ct)), A;
  }
  function s1(y, S) {
    b(y);
    var w = De.find(y, S);
    if (w) {
      for (var E = 0; E < y.FileIndex.length; ++E)
        if (y.FileIndex[E] == w)
          return y.FileIndex.splice(E, 1), y.FullPaths.splice(E, 1), !0;
    }
    return !1;
  }
  function o1(y, S, w) {
    b(y);
    var E = De.find(y, S);
    if (E) {
      for (var T = 0; T < y.FileIndex.length; ++T)
        if (y.FileIndex[T] == E)
          return y.FileIndex[T].name = i(w), y.FullPaths[T] = w, !0;
    }
    return !1;
  }
  function l1(y) {
    P(y, !0);
  }
  return t.find = F, t.read = G, t.parse = c, t.write = Me, t.writeFile = pe, t.utils = {
    cfb_new: a1,
    cfb_add: Ls,
    cfb_del: s1,
    cfb_mov: o1,
    cfb_gc: l1,
    ReadShift: ui,
    CheckField: Bc,
    prep_blob: bt,
    bconcat: nt,
    use_zlib: k,
    _deflateRaw: X0,
    _inflateRaw: Q0,
    consts: he
  }, t;
}();
function yx(e) {
  return typeof e == "string" ? Va(e) : Array.isArray(e) ? Xv(e) : e;
}
function bi(e, t, r) {
  if (typeof Deno < "u") {
    if (r && typeof t == "string")
      switch (r) {
        case "utf8":
          t = new TextEncoder(r).encode(t);
          break;
        case "binary":
          t = Va(t);
          break;
        default:
          throw new Error("Unsupported encoding " + r);
      }
    return Deno.writeFileSync(e, t);
  }
  var n = r == "utf8" ? pr(t) : t;
  if (typeof IE_SaveFile < "u")
    return IE_SaveFile(n, e);
  if (typeof Blob < "u") {
    var i = new Blob([yx(n)], { type: "application/octet-stream" });
    if (typeof navigator < "u" && navigator.msSaveBlob)
      return navigator.msSaveBlob(i, e);
    if (typeof saveAs < "u")
      return saveAs(i, e);
    if (typeof URL < "u" && typeof document < "u" && document.createElement && URL.createObjectURL) {
      var a = URL.createObjectURL(i);
      if (typeof chrome == "object" && typeof (chrome.downloads || {}).download == "function")
        return URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
          URL.revokeObjectURL(a);
        }, 6e4), chrome.downloads.download({ url: a, filename: e, saveAs: !0 });
      var s = document.createElement("a");
      if (s.download != null)
        return s.download = e, s.href = a, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
          URL.revokeObjectURL(a);
        }, 6e4), a;
    }
  }
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u")
    try {
      var o = File(e);
      return o.open("w"), o.encoding = "binary", Array.isArray(t) && (t = Oi(t)), o.write(t), o.close(), t;
    } catch (l) {
      if (!l.message || !l.message.match(/onstruct/))
        throw l;
    }
  throw new Error("cannot save file " + e);
}
function st(e) {
  for (var t = Object.keys(e), r = [], n = 0; n < t.length; ++n)
    Object.prototype.hasOwnProperty.call(e, t[n]) && r.push(t[n]);
  return r;
}
function _l(e, t) {
  for (var r = [], n = st(e), i = 0; i !== n.length; ++i)
    r[e[n[i]][t]] == null && (r[e[n[i]][t]] = n[i]);
  return r;
}
function r0(e) {
  for (var t = [], r = st(e), n = 0; n !== r.length; ++n)
    t[e[r[n]]] = r[n];
  return t;
}
function ja(e) {
  for (var t = [], r = st(e), n = 0; n !== r.length; ++n)
    t[e[r[n]]] = parseInt(r[n], 10);
  return t;
}
function wx(e) {
  for (var t = [], r = st(e), n = 0; n !== r.length; ++n)
    t[e[r[n]]] == null && (t[e[r[n]]] = []), t[e[r[n]]].push(r[n]);
  return t;
}
var ma = /* @__PURE__ */ new Date(1899, 11, 30, 0, 0, 0);
function At(e, t) {
  var r = /* @__PURE__ */ e.getTime();
  t && (r -= 1462 * 24 * 60 * 60 * 1e3);
  var n = /* @__PURE__ */ ma.getTime() + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ ma.getTimezoneOffset()) * 6e4;
  return (r - n) / (24 * 60 * 60 * 1e3);
}
var wc = /* @__PURE__ */ new Date(), Ex = /* @__PURE__ */ ma.getTime() + (/* @__PURE__ */ wc.getTimezoneOffset() - /* @__PURE__ */ ma.getTimezoneOffset()) * 6e4, yl = /* @__PURE__ */ wc.getTimezoneOffset();
function Ec(e) {
  var t = /* @__PURE__ */ new Date();
  return t.setTime(e * 24 * 60 * 60 * 1e3 + Ex), t.getTimezoneOffset() !== yl && t.setTime(t.getTime() + (t.getTimezoneOffset() - yl) * 6e4), t;
}
var wl = /* @__PURE__ */ new Date("2017-02-19T19:06:09.000Z"), Sc = /* @__PURE__ */ isNaN(/* @__PURE__ */ wl.getFullYear()) ? /* @__PURE__ */ new Date("2/19/17") : wl, Sx = /* @__PURE__ */ Sc.getFullYear() == 2017;
function wt(e, t) {
  var r = new Date(e);
  if (Sx)
    return t > 0 ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3) : t < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3), r;
  if (e instanceof Date)
    return e;
  if (Sc.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
    var n = r.getFullYear();
    return e.indexOf("" + n) > -1 || r.setFullYear(r.getFullYear() + 100), r;
  }
  var i = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"], a = new Date(+i[0], +i[1] - 1, +i[2], +i[3] || 0, +i[4] || 0, +i[5] || 0);
  return e.indexOf("Z") > -1 && (a = new Date(a.getTime() - a.getTimezoneOffset() * 60 * 1e3)), a;
}
function Ya(e, t) {
  if (Ae && Buffer.isBuffer(e)) {
    if (t) {
      if (e[0] == 255 && e[1] == 254)
        return pr(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255)
        return pr(Gv(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u")
    try {
      if (t) {
        if (e[0] == 255 && e[1] == 254)
          return pr(new TextDecoder("utf-16le").decode(e.slice(2)));
        if (e[0] == 254 && e[1] == 255)
          return pr(new TextDecoder("utf-16be").decode(e.slice(2)));
      }
      var r = {
        "€": "",
        "‚": "",
        ƒ: "",
        "„": "",
        "…": "",
        "†": "",
        "‡": "",
        "ˆ": "",
        "‰": "",
        Š: "",
        "‹": "",
        Œ: "",
        Ž: "",
        "‘": "",
        "’": "",
        "“": "",
        "”": "",
        "•": "",
        "–": "",
        "—": "",
        "˜": "",
        "™": "",
        š: "",
        "›": "",
        œ: "",
        ž: "",
        Ÿ: ""
      };
      return Array.isArray(e) && (e = new Uint8Array(e)), new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function(a) {
        return r[a] || a;
      });
    } catch {
    }
  for (var n = [], i = 0; i != e.length; ++i)
    n.push(String.fromCharCode(e[i]));
  return n.join("");
}
function Ct(e) {
  if (typeof JSON < "u" && !Array.isArray(e))
    return JSON.parse(JSON.stringify(e));
  if (typeof e != "object" || e == null)
    return e;
  if (e instanceof Date)
    return new Date(e.getTime());
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = Ct(e[r]));
  return t;
}
function $e(e, t) {
  for (var r = ""; r.length < t; )
    r += e;
  return r;
}
function gr(e) {
  var t = Number(e);
  if (!isNaN(t))
    return isFinite(t) ? t : NaN;
  if (!/\d/.test(e))
    return t;
  var r = 1, n = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() {
    return r *= 100, "";
  });
  return !isNaN(t = Number(n)) || (n = n.replace(/[(](.*)[)]/, function(i, a) {
    return r = -r, a;
  }), !isNaN(t = Number(n))) ? t / r : t;
}
var Tx = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function yi(e) {
  var t = new Date(e), r = /* @__PURE__ */ new Date(NaN), n = t.getYear(), i = t.getMonth(), a = t.getDate();
  if (isNaN(a))
    return r;
  var s = e.toLowerCase();
  if (s.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (s = s.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, ""), s.length > 3 && Tx.indexOf(s) == -1)
      return r;
  } else if (s.match(/[a-z]/))
    return r;
  return n < 0 || n > 8099 ? r : (i > 0 || a > 1) && n != 101 ? t : e.match(/[^-0-9:,\/\\]/) ? r : t;
}
function xe(e, t, r) {
  if (e.FullPaths) {
    if (typeof r == "string") {
      var n;
      return Ae ? n = Er(r) : n = jv(r), De.utils.cfb_add(e, t, n);
    }
    De.utils.cfb_add(e, t, r);
  } else
    e.file(t, r);
}
function n0() {
  return De.utils.cfb_new();
}
var Ve = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`, Ax = {
  "&quot;": '"',
  "&apos;": "'",
  "&gt;": ">",
  "&lt;": "<",
  "&amp;": "&"
}, i0 = /* @__PURE__ */ r0(Ax), a0 = /[&<>'"]/g, Cx = /[\u0000-\u0008\u000b-\u001f]/g;
function be(e) {
  var t = e + "";
  return t.replace(a0, function(r) {
    return i0[r];
  }).replace(Cx, function(r) {
    return "_x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + "_";
  });
}
function El(e) {
  return be(e).replace(/ /g, "_x0020_");
}
var Tc = /[\u0000-\u001f]/g;
function Fx(e) {
  var t = e + "";
  return t.replace(a0, function(r) {
    return i0[r];
  }).replace(/\n/g, "<br/>").replace(Tc, function(r) {
    return "&#x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
function Ox(e) {
  var t = e + "";
  return t.replace(a0, function(r) {
    return i0[r];
  }).replace(Tc, function(r) {
    return "&#x" + r.charCodeAt(0).toString(16).toUpperCase() + ";";
  });
}
function bx(e) {
  return e.replace(/(\r\n|[\r\n])/g, "&#10;");
}
function kx(e) {
  switch (e) {
    case 1:
    case !0:
    case "1":
    case "true":
    case "TRUE":
      return !0;
    default:
      return !1;
  }
}
function js(e) {
  for (var t = "", r = 0, n = 0, i = 0, a = 0, s = 0, o = 0; r < e.length; ) {
    if (n = e.charCodeAt(r++), n < 128) {
      t += String.fromCharCode(n);
      continue;
    }
    if (i = e.charCodeAt(r++), n > 191 && n < 224) {
      s = (n & 31) << 6, s |= i & 63, t += String.fromCharCode(s);
      continue;
    }
    if (a = e.charCodeAt(r++), n < 240) {
      t += String.fromCharCode((n & 15) << 12 | (i & 63) << 6 | a & 63);
      continue;
    }
    s = e.charCodeAt(r++), o = ((n & 7) << 18 | (i & 63) << 12 | (a & 63) << 6 | s & 63) - 65536, t += String.fromCharCode(55296 + (o >>> 10 & 1023)), t += String.fromCharCode(56320 + (o & 1023));
  }
  return t;
}
function Sl(e) {
  var t = an(2 * e.length), r, n, i = 1, a = 0, s = 0, o;
  for (n = 0; n < e.length; n += i)
    i = 1, (o = e.charCodeAt(n)) < 128 ? r = o : o < 224 ? (r = (o & 31) * 64 + (e.charCodeAt(n + 1) & 63), i = 2) : o < 240 ? (r = (o & 15) * 4096 + (e.charCodeAt(n + 1) & 63) * 64 + (e.charCodeAt(n + 2) & 63), i = 3) : (i = 4, r = (o & 7) * 262144 + (e.charCodeAt(n + 1) & 63) * 4096 + (e.charCodeAt(n + 2) & 63) * 64 + (e.charCodeAt(n + 3) & 63), r -= 65536, s = 55296 + (r >>> 10 & 1023), r = 56320 + (r & 1023)), s !== 0 && (t[a++] = s & 255, t[a++] = s >>> 8, s = 0), t[a++] = r % 256, t[a++] = r >>> 8;
  return t.slice(0, a).toString("ucs2");
}
function Tl(e) {
  return Er(e, "binary").toString("utf8");
}
var Vi = "foo bar bazâð£", ci = Ae && (/* @__PURE__ */ Tl(Vi) == /* @__PURE__ */ js(Vi) && Tl || /* @__PURE__ */ Sl(Vi) == /* @__PURE__ */ js(Vi) && Sl) || js, pr = Ae ? function(e) {
  return Er(e, "utf8").toString("binary");
} : function(e) {
  for (var t = [], r = 0, n = 0, i = 0; r < e.length; )
    switch (n = e.charCodeAt(r++), !0) {
      case n < 128:
        t.push(String.fromCharCode(n));
        break;
      case n < 2048:
        t.push(String.fromCharCode(192 + (n >> 6))), t.push(String.fromCharCode(128 + (n & 63)));
        break;
      case (n >= 55296 && n < 57344):
        n -= 55296, i = e.charCodeAt(r++) - 56320 + (n << 10), t.push(String.fromCharCode(240 + (i >> 18 & 7))), t.push(String.fromCharCode(144 + (i >> 12 & 63))), t.push(String.fromCharCode(128 + (i >> 6 & 63))), t.push(String.fromCharCode(128 + (i & 63)));
        break;
      default:
        t.push(String.fromCharCode(224 + (n >> 12))), t.push(String.fromCharCode(128 + (n >> 6 & 63))), t.push(String.fromCharCode(128 + (n & 63)));
    }
  return t.join("");
}, Mx = /* @__PURE__ */ function() {
  var e = [
    ["nbsp", " "],
    ["middot", "·"],
    ["quot", '"'],
    ["apos", "'"],
    ["gt", ">"],
    ["lt", "<"],
    ["amp", "&"]
  ].map(function(t) {
    return [new RegExp("&" + t[0] + ";", "ig"), t[1]];
  });
  return function(r) {
    for (var n = r.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^>]*>/g, ""), i = 0; i < e.length; ++i)
      n = n.replace(e[i][0], e[i][1]);
    return n;
  };
}(), Ac = /(^\s|\s$|\n)/;
function it(e, t) {
  return "<" + e + (t.match(Ac) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e + ">";
}
function wi(e) {
  return st(e).map(function(t) {
    return " " + t + '="' + e[t] + '"';
  }).join("");
}
function ie(e, t, r) {
  return "<" + e + (r != null ? wi(r) : "") + (t != null ? (t.match(Ac) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e : "/") + ">";
}
function Co(e, t) {
  try {
    return e.toISOString().replace(/\.\d*/, "");
  } catch (r) {
    if (t)
      throw r;
  }
  return "";
}
function Dx(e, t) {
  switch (typeof e) {
    case "string":
      var r = ie("vt:lpwstr", be(e));
      return t && (r = r.replace(/&quot;/g, "_x0022_")), r;
    case "number":
      return ie((e | 0) == e ? "vt:i4" : "vt:r8", be(String(e)));
    case "boolean":
      return ie("vt:bool", e ? "true" : "false");
  }
  if (e instanceof Date)
    return ie("vt:filetime", Co(e));
  throw new Error("Unable to serialize " + e);
}
var Qe = {
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
  CT: "http://schemas.openxmlformats.org/package/2006/content-types",
  RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
  TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
  dc: "http://purl.org/dc/elements/1.1/",
  dcterms: "http://purl.org/dc/terms/",
  dcmitype: "http://purl.org/dc/dcmitype/",
  mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
  r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
  sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
  vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
  xsi: "http://www.w3.org/2001/XMLSchema-instance",
  xsd: "http://www.w3.org/2001/XMLSchema"
}, Vn = [
  "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
  "http://purl.oclc.org/ooxml/spreadsheetml/main",
  "http://schemas.microsoft.com/office/excel/2006/main",
  "http://schemas.microsoft.com/office/excel/2006/2"
], kt = {
  o: "urn:schemas-microsoft-com:office:office",
  x: "urn:schemas-microsoft-com:office:excel",
  ss: "urn:schemas-microsoft-com:office:spreadsheet",
  dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
  mv: "http://macVmlSchemaUri",
  v: "urn:schemas-microsoft-com:vml",
  html: "http://www.w3.org/TR/REC-html40"
};
function Ix(e, t) {
  for (var r = 1 - 2 * (e[t + 7] >>> 7), n = ((e[t + 7] & 127) << 4) + (e[t + 6] >>> 4 & 15), i = e[t + 6] & 15, a = 5; a >= 0; --a)
    i = i * 256 + e[t + a];
  return n == 2047 ? i == 0 ? r * (1 / 0) : NaN : (n == 0 ? n = -1022 : (n -= 1023, i += Math.pow(2, 52)), r * Math.pow(2, n - 52) * i);
}
function Px(e, t, r) {
  var n = (t < 0 || 1 / t == -1 / 0 ? 1 : 0) << 7, i = 0, a = 0, s = n ? -t : t;
  isFinite(s) ? s == 0 ? i = a = 0 : (i = Math.floor(Math.log(s) / Math.LN2), a = s * Math.pow(2, 52 - i), i <= -1023 && (!isFinite(a) || a < Math.pow(2, 52)) ? i = -1022 : (a -= Math.pow(2, 52), i += 1023)) : (i = 2047, a = isNaN(t) ? 26985 : 0);
  for (var o = 0; o <= 5; ++o, a /= 256)
    e[r + o] = a & 255;
  e[r + 6] = (i & 15) << 4 | a & 15, e[r + 7] = i >> 4 | n;
}
var Al = function(e) {
  for (var t = [], r = 10240, n = 0; n < e[0].length; ++n)
    if (e[0][n])
      for (var i = 0, a = e[0][n].length; i < a; i += r)
        t.push.apply(t, e[0][n].slice(i, i + r));
  return t;
}, Cl = Ae ? function(e) {
  return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(t) {
    return Buffer.isBuffer(t) ? t : Er(t);
  })) : Al(e);
} : Al, Fl = function(e, t, r) {
  for (var n = [], i = t; i < r; i += 2)
    n.push(String.fromCharCode(ii(e, i)));
  return n.join("").replace(fi, "");
}, s0 = Ae ? function(e, t, r) {
  return Buffer.isBuffer(e) ? e.toString("utf16le", t, r).replace(fi, "") : Fl(e, t, r);
} : Fl, Ol = function(e, t, r) {
  for (var n = [], i = t; i < t + r; ++i)
    n.push(("0" + e[i].toString(16)).slice(-2));
  return n.join("");
}, Cc = Ae ? function(e, t, r) {
  return Buffer.isBuffer(e) ? e.toString("hex", t, t + r) : Ol(e, t, r);
} : Ol, bl = function(e, t, r) {
  for (var n = [], i = t; i < r; i++)
    n.push(String.fromCharCode(Tn(e, i)));
  return n.join("");
}, ki = Ae ? function(t, r, n) {
  return Buffer.isBuffer(t) ? t.toString("utf8", r, n) : bl(t, r, n);
} : bl, Fc = function(e, t) {
  var r = Mt(e, t);
  return r > 0 ? ki(e, t + 4, t + 4 + r - 1) : "";
}, Oc = Fc, bc = function(e, t) {
  var r = Mt(e, t);
  return r > 0 ? ki(e, t + 4, t + 4 + r - 1) : "";
}, kc = bc, Mc = function(e, t) {
  var r = 2 * Mt(e, t);
  return r > 0 ? ki(e, t + 4, t + 4 + r - 1) : "";
}, Dc = Mc, Ic = function(t, r) {
  var n = Mt(t, r);
  return n > 0 ? s0(t, r + 4, r + 4 + n) : "";
}, Pc = Ic, Rc = function(e, t) {
  var r = Mt(e, t);
  return r > 0 ? ki(e, t + 4, t + 4 + r) : "";
}, Nc = Rc, Lc = function(e, t) {
  return Ix(e, t);
}, ga = Lc, o0 = function(t) {
  return Array.isArray(t) || typeof Uint8Array < "u" && t instanceof Uint8Array;
};
Ae && (Oc = function(t, r) {
  if (!Buffer.isBuffer(t))
    return Fc(t, r);
  var n = t.readUInt32LE(r);
  return n > 0 ? t.toString("utf8", r + 4, r + 4 + n - 1) : "";
}, kc = function(t, r) {
  if (!Buffer.isBuffer(t))
    return bc(t, r);
  var n = t.readUInt32LE(r);
  return n > 0 ? t.toString("utf8", r + 4, r + 4 + n - 1) : "";
}, Dc = function(t, r) {
  if (!Buffer.isBuffer(t))
    return Mc(t, r);
  var n = 2 * t.readUInt32LE(r);
  return t.toString("utf16le", r + 4, r + 4 + n - 1);
}, Pc = function(t, r) {
  if (!Buffer.isBuffer(t))
    return Ic(t, r);
  var n = t.readUInt32LE(r);
  return t.toString("utf16le", r + 4, r + 4 + n);
}, Nc = function(t, r) {
  if (!Buffer.isBuffer(t))
    return Rc(t, r);
  var n = t.readUInt32LE(r);
  return t.toString("utf8", r + 4, r + 4 + n);
}, ga = function(t, r) {
  return Buffer.isBuffer(t) ? t.readDoubleLE(r) : Lc(t, r);
}, o0 = function(t) {
  return Buffer.isBuffer(t) || Array.isArray(t) || typeof Uint8Array < "u" && t instanceof Uint8Array;
});
var Tn = function(e, t) {
  return e[t];
}, ii = function(e, t) {
  return e[t + 1] * 256 + e[t];
}, Rx = function(e, t) {
  var r = e[t + 1] * 256 + e[t];
  return r < 32768 ? r : (65535 - r + 1) * -1;
}, Mt = function(e, t) {
  return e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t];
}, Qr = function(e, t) {
  return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}, Nx = function(e, t) {
  return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
};
function ui(e, t) {
  var r = "", n, i, a = [], s, o, l, f;
  switch (t) {
    case "dbcs":
      if (f = this.l, Ae && Buffer.isBuffer(this))
        r = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else
        for (l = 0; l < e; ++l)
          r += String.fromCharCode(ii(this, f)), f += 2;
      e *= 2;
      break;
    case "utf8":
      r = ki(this, this.l, this.l + e);
      break;
    case "utf16le":
      e *= 2, r = s0(this, this.l, this.l + e);
      break;
    case "wstr":
      return ui.call(this, e, "dbcs");
    case "lpstr-ansi":
      r = Oc(this, this.l), e = 4 + Mt(this, this.l);
      break;
    case "lpstr-cp":
      r = kc(this, this.l), e = 4 + Mt(this, this.l);
      break;
    case "lpwstr":
      r = Dc(this, this.l), e = 4 + 2 * Mt(this, this.l);
      break;
    case "lpp4":
      e = 4 + Mt(this, this.l), r = Pc(this, this.l), e & 2 && (e += 2);
      break;
    case "8lpp4":
      e = 4 + Mt(this, this.l), r = Nc(this, this.l), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, r = ""; (s = Tn(this, this.l + e++)) !== 0; )
        a.push(Hi(s));
      r = a.join("");
      break;
    case "_wstr":
      for (e = 0, r = ""; (s = ii(this, this.l + e)) !== 0; )
        a.push(Hi(s)), e += 2;
      e += 2, r = a.join("");
      break;
    case "dbcs-cont":
      for (r = "", f = this.l, l = 0; l < e; ++l) {
        if (this.lens && this.lens.indexOf(f) !== -1)
          return s = Tn(this, f), this.l = f + 1, o = ui.call(this, e - l, s ? "dbcs-cont" : "sbcs-cont"), a.join("") + o;
        a.push(Hi(ii(this, f))), f += 2;
      }
      r = a.join(""), e *= 2;
      break;
    case "cpstr":
    case "sbcs-cont":
      for (r = "", f = this.l, l = 0; l != e; ++l) {
        if (this.lens && this.lens.indexOf(f) !== -1)
          return s = Tn(this, f), this.l = f + 1, o = ui.call(this, e - l, s ? "dbcs-cont" : "sbcs-cont"), a.join("") + o;
        a.push(Hi(Tn(this, f))), f += 1;
      }
      r = a.join("");
      break;
    default:
      switch (e) {
        case 1:
          return n = Tn(this, this.l), this.l++, n;
        case 2:
          return n = (t === "i" ? Rx : ii)(this, this.l), this.l += 2, n;
        case 4:
        case -4:
          return t === "i" || !(this[this.l + 3] & 128) ? (n = (e > 0 ? Qr : Nx)(this, this.l), this.l += 4, n) : (i = Mt(this, this.l), this.l += 4, i);
        case 8:
        case -8:
          if (t === "f")
            return e == 8 ? i = ga(this, this.l) : i = ga([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, i;
          e = 8;
        case 16:
          r = Cc(this, this.l, e);
          break;
      }
  }
  return this.l += e, r;
}
var Lx = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24 & 255;
}, Bx = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >> 8 & 255, e[r + 2] = t >> 16 & 255, e[r + 3] = t >> 24 & 255;
}, $x = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >>> 8 & 255;
};
function Ux(e, t, r) {
  var n = 0, i = 0;
  if (r === "dbcs") {
    for (i = 0; i != t.length; ++i)
      $x(this, t.charCodeAt(i), this.l + 2 * i);
    n = 2 * t.length;
  } else if (r === "sbcs") {
    for (t = t.replace(/[^\x00-\x7F]/g, "_"), i = 0; i != t.length; ++i)
      this[this.l + i] = t.charCodeAt(i) & 255;
    n = t.length;
  } else if (r === "hex") {
    for (; i < e; ++i)
      this[this.l++] = parseInt(t.slice(2 * i, 2 * i + 2), 16) || 0;
    return this;
  } else if (r === "utf16le") {
    var a = Math.min(this.l + e, this.length);
    for (i = 0; i < Math.min(t.length, e); ++i) {
      var s = t.charCodeAt(i);
      this[this.l++] = s & 255, this[this.l++] = s >> 8;
    }
    for (; this.l < a; )
      this[this.l++] = 0;
    return this;
  } else
    switch (e) {
      case 1:
        n = 1, this[this.l] = t & 255;
        break;
      case 2:
        n = 2, this[this.l] = t & 255, t >>>= 8, this[this.l + 1] = t & 255;
        break;
      case 3:
        n = 3, this[this.l] = t & 255, t >>>= 8, this[this.l + 1] = t & 255, t >>>= 8, this[this.l + 2] = t & 255;
        break;
      case 4:
        n = 4, Lx(this, t, this.l);
        break;
      case 8:
        if (n = 8, r === "f") {
          Px(this, t, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        n = 4, Bx(this, t, this.l);
        break;
    }
  return this.l += n, this;
}
function Bc(e, t) {
  var r = Cc(this, this.l, e.length >> 1);
  if (r !== e)
    throw new Error(t + "Expected " + e + " saw " + r);
  this.l += e.length >> 1;
}
function bt(e, t) {
  e.l = t, e.read_shift = /*::(*/
  ui, e.chk = Bc, e.write_shift = Ux;
}
function lr(e, t) {
  e.l += t;
}
function X(e) {
  var t = an(e);
  return bt(t, 0), t;
}
function Tt() {
  var e = [], t = Ae ? 256 : 2048, r = function(f) {
    var c = X(f);
    return bt(c, 0), c;
  }, n = r(t), i = function() {
    n && (n.length > n.l && (n = n.slice(0, n.l), n.l = n.length), n.length > 0 && e.push(n), n = null);
  }, a = function(f) {
    return n && f < n.length - n.l ? n : (i(), n = r(Math.max(f + 1, t)));
  }, s = function() {
    return i(), nt(e);
  }, o = function(f) {
    i(), n = f, n.l == null && (n.l = n.length), a(t);
  };
  return { next: a, push: o, end: s, _bufs: e };
}
function Q(e, t, r, n) {
  var i = +t, a;
  if (!isNaN(i)) {
    n || (n = IE[i].p || (r || []).length || 0), a = 1 + (i >= 128 ? 1 : 0) + 1, n >= 128 && ++a, n >= 16384 && ++a, n >= 2097152 && ++a;
    var s = e.next(a);
    i <= 127 ? s.write_shift(1, i) : (s.write_shift(1, (i & 127) + 128), s.write_shift(1, i >> 7));
    for (var o = 0; o != 4; ++o)
      if (n >= 128)
        s.write_shift(1, (n & 127) + 128), n >>= 7;
      else {
        s.write_shift(1, n);
        break;
      }
    /*:: length != null &&*/
    n > 0 && o0(r) && e.push(r);
  }
}
function hi(e, t, r) {
  var n = Ct(e);
  if (t.s ? (n.cRel && (n.c += t.s.c), n.rRel && (n.r += t.s.r)) : (n.cRel && (n.c += t.c), n.rRel && (n.r += t.r)), !r || r.biff < 12) {
    for (; n.c >= 256; )
      n.c -= 256;
    for (; n.r >= 65536; )
      n.r -= 65536;
  }
  return n;
}
function kl(e, t, r) {
  var n = Ct(e);
  return n.s = hi(n.s, t.s, r), n.e = hi(n.e, t.s, r), n;
}
function di(e, t) {
  if (e.cRel && e.c < 0)
    for (e = Ct(e); e.c < 0; )
      e.c += t > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = Ct(e); e.r < 0; )
      e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384;
  var r = ke(e);
  return !e.cRel && e.cRel != null && (r = zx(r)), !e.rRel && e.rRel != null && (r = Hx(r)), r;
}
function Ys(e, t) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + ht(e.s.c) + ":" + (e.e.cRel ? "" : "$") + ht(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (t.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + at(e.s.r) + ":" + (e.e.rRel ? "" : "$") + at(e.e.r) : di(e.s, t.biff) + ":" + di(e.e, t.biff);
}
function l0(e) {
  return parseInt(Wx(e), 10) - 1;
}
function at(e) {
  return "" + (e + 1);
}
function Hx(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function Wx(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function f0(e) {
  for (var t = Vx(e), r = 0, n = 0; n !== t.length; ++n)
    r = 26 * r + t.charCodeAt(n) - 64;
  return r - 1;
}
function ht(e) {
  if (e < 0)
    throw new Error("invalid column " + e);
  var t = "";
  for (++e; e; e = Math.floor((e - 1) / 26))
    t = String.fromCharCode((e - 1) % 26 + 65) + t;
  return t;
}
function zx(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function Vx(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function Gx(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function Ze(e) {
  for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
    var i = e.charCodeAt(n);
    i >= 48 && i <= 57 ? t = 10 * t + (i - 48) : i >= 65 && i <= 90 && (r = 26 * r + (i - 64));
  }
  return { c: r - 1, r: t - 1 };
}
function ke(e) {
  for (var t = e.c + 1, r = ""; t; t = (t - 1) / 26 | 0)
    r = String.fromCharCode((t - 1) % 26 + 65) + r;
  return r + (e.r + 1);
}
function It(e) {
  var t = e.indexOf(":");
  return t == -1 ? { s: Ze(e), e: Ze(e) } : { s: Ze(e.slice(0, t)), e: Ze(e.slice(t + 1)) };
}
function ze(e, t) {
  return typeof t > "u" || typeof t == "number" ? ze(e.s, e.e) : (typeof e != "string" && (e = ke(e)), typeof t != "string" && (t = ke(t)), e == t ? e : e + ":" + t);
}
function Pe(e) {
  var t = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }, r = 0, n = 0, i = 0, a = e.length;
  for (r = 0; n < a && !((i = e.charCodeAt(n) - 64) < 1 || i > 26); ++n)
    r = 26 * r + i;
  for (t.s.c = --r, r = 0; n < a && !((i = e.charCodeAt(n) - 48) < 0 || i > 9); ++n)
    r = 10 * r + i;
  if (t.s.r = --r, n === a || i != 10)
    return t.e.c = t.s.c, t.e.r = t.s.r, t;
  for (++n, r = 0; n != a && !((i = e.charCodeAt(n) - 64) < 1 || i > 26); ++n)
    r = 26 * r + i;
  for (t.e.c = --r, r = 0; n != a && !((i = e.charCodeAt(n) - 48) < 0 || i > 9); ++n)
    r = 10 * r + i;
  return t.e.r = --r, t;
}
function Ml(e, t) {
  var r = e.t == "d" && t instanceof Date;
  if (e.z != null)
    try {
      return e.w = Mr(e.z, r ? At(t) : t);
    } catch {
    }
  try {
    return e.w = Mr((e.XF || {}).numFmtId || (r ? 14 : 0), r ? At(t) : t);
  } catch {
    return "" + t;
  }
}
function _r(e, t, r) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && r && r.dateNF && (e.z = r.dateNF), e.t == "e" ? Mi[e.v] || e.v : t == null ? Ml(e, e.v) : Ml(e, t));
}
function cn(e, t) {
  var r = t && t.sheet ? t.sheet : "Sheet1", n = {};
  return n[r] = e, { SheetNames: [r], Sheets: n };
}
function $c(e, t, r) {
  var n = r || {}, i = e ? Array.isArray(e) : n.dense, a = e || (i ? [] : {}), s = 0, o = 0;
  if (a && n.origin != null) {
    if (typeof n.origin == "number")
      s = n.origin;
    else {
      var l = typeof n.origin == "string" ? Ze(n.origin) : n.origin;
      s = l.r, o = l.c;
    }
    a["!ref"] || (a["!ref"] = "A1:A1");
  }
  var f = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (a["!ref"]) {
    var c = Pe(a["!ref"]);
    f.s.c = c.s.c, f.s.r = c.s.r, f.e.c = Math.max(f.e.c, c.e.c), f.e.r = Math.max(f.e.r, c.e.r), s == -1 && (f.e.r = s = c.e.r + 1);
  }
  for (var u = 0; u != t.length; ++u)
    if (t[u]) {
      if (!Array.isArray(t[u]))
        throw new Error("aoa_to_sheet expects an array of arrays");
      for (var h = 0; h != t[u].length; ++h)
        if (!(typeof t[u][h] > "u")) {
          var d = { v: t[u][h] }, v = s + u, p = o + h;
          if (f.s.r > v && (f.s.r = v), f.s.c > p && (f.s.c = p), f.e.r < v && (f.e.r = v), f.e.c < p && (f.e.c = p), t[u][h] && typeof t[u][h] == "object" && !Array.isArray(t[u][h]) && !(t[u][h] instanceof Date))
            d = t[u][h];
          else if (Array.isArray(d.v) && (d.f = t[u][h][1], d.v = d.v[0]), d.v === null)
            if (d.f)
              d.t = "n";
            else if (n.nullError)
              d.t = "e", d.v = 0;
            else if (n.sheetStubs)
              d.t = "z";
            else
              continue;
          else
            typeof d.v == "number" ? d.t = "n" : typeof d.v == "boolean" ? d.t = "b" : d.v instanceof Date ? (d.z = n.dateNF || Ue[14], n.cellDates ? (d.t = "d", d.w = Mr(d.z, At(d.v))) : (d.t = "n", d.v = At(d.v), d.w = Mr(d.z, d.v))) : d.t = "s";
          if (i)
            a[v] || (a[v] = []), a[v][p] && a[v][p].z && (d.z = a[v][p].z), a[v][p] = d;
          else {
            var m = ke({ c: p, r: v });
            a[m] && a[m].z && (d.z = a[m].z), a[m] = d;
          }
        }
    }
  return f.s.c < 1e7 && (a["!ref"] = ze(f)), a;
}
function Gn(e, t) {
  return $c(null, e, t);
}
function Xx(e) {
  return e.read_shift(4, "i");
}
function jt(e, t) {
  return t || (t = X(4)), t.write_shift(4, e), t;
}
function dt(e) {
  var t = e.read_shift(4);
  return t === 0 ? "" : e.read_shift(t, "dbcs");
}
function et(e, t) {
  var r = !1;
  return t == null && (r = !0, t = X(4 + 2 * e.length)), t.write_shift(4, e.length), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t;
}
function jx(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function Yx(e, t) {
  return t || (t = X(4)), t.write_shift(2, e.ich || 0), t.write_shift(2, e.ifnt || 0), t;
}
function c0(e, t) {
  var r = e.l, n = e.read_shift(1), i = dt(e), a = [], s = { t: i, h: i };
  if (n & 1) {
    for (var o = e.read_shift(4), l = 0; l != o; ++l)
      a.push(jx(e));
    s.r = a;
  } else
    s.r = [{ ich: 0, ifnt: 0 }];
  return e.l = r + t, s;
}
function qx(e, t) {
  var r = !1;
  return t == null && (r = !0, t = X(15 + 4 * e.t.length)), t.write_shift(1, 0), et(e.t, t), r ? t.slice(0, t.l) : t;
}
var Kx = c0;
function Jx(e, t) {
  var r = !1;
  return t == null && (r = !0, t = X(23 + 4 * e.t.length)), t.write_shift(1, 1), et(e.t, t), t.write_shift(4, 1), Yx({ ich: 0, ifnt: 0 }, t), r ? t.slice(0, t.l) : t;
}
function Ht(e) {
  var t = e.read_shift(4), r = e.read_shift(2);
  return r += e.read_shift(1) << 16, e.l++, { c: t, iStyleRef: r };
}
function un(e, t) {
  return t == null && (t = X(8)), t.write_shift(-4, e.c), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t;
}
function hn(e) {
  var t = e.read_shift(2);
  return t += e.read_shift(1) << 16, e.l++, { c: -1, iStyleRef: t };
}
function dn(e, t) {
  return t == null && (t = X(4)), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t;
}
var Qx = dt, Uc = et;
function u0(e) {
  var t = e.read_shift(4);
  return t === 0 || t === 4294967295 ? "" : e.read_shift(t, "dbcs");
}
function va(e, t) {
  var r = !1;
  return t == null && (r = !0, t = X(127)), t.write_shift(4, e.length > 0 ? e.length : 4294967295), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t;
}
var Zx = dt, Fo = u0, h0 = va;
function Hc(e) {
  var t = e.slice(e.l, e.l + 4), r = t[0] & 1, n = t[0] & 2;
  e.l += 4;
  var i = n === 0 ? ga([0, 0, 0, 0, t[0] & 252, t[1], t[2], t[3]], 0) : Qr(t, 0) >> 2;
  return r ? i / 100 : i;
}
function Wc(e, t) {
  t == null && (t = X(4));
  var r = 0, n = 0, i = e * 100;
  if (e == (e | 0) && e >= -(1 << 29) && e < 1 << 29 ? n = 1 : i == (i | 0) && i >= -(1 << 29) && i < 1 << 29 && (n = 1, r = 1), n)
    t.write_shift(-4, ((r ? i : e) << 2) + (r + 2));
  else
    throw new Error("unsupported RkNumber " + e);
}
function zc(e) {
  var t = { s: {}, e: {} };
  return t.s.r = e.read_shift(4), t.e.r = e.read_shift(4), t.s.c = e.read_shift(4), t.e.c = e.read_shift(4), t;
}
function e2(e, t) {
  return t || (t = X(16)), t.write_shift(4, e.s.r), t.write_shift(4, e.e.r), t.write_shift(4, e.s.c), t.write_shift(4, e.e.c), t;
}
var pn = zc, Xn = e2;
function jn(e) {
  if (e.length - e.l < 8)
    throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function sn(e, t) {
  return (t || X(8)).write_shift(8, e, "f");
}
function t2(e) {
  var t = {}, r = e.read_shift(1), n = r >>> 1, i = e.read_shift(1), a = e.read_shift(2, "i"), s = e.read_shift(1), o = e.read_shift(1), l = e.read_shift(1);
  switch (e.l++, n) {
    case 0:
      t.auto = 1;
      break;
    case 1:
      t.index = i;
      var f = c2[i];
      f && (t.rgb = Wl(f));
      break;
    case 2:
      t.rgb = Wl([s, o, l]);
      break;
    case 3:
      t.theme = i;
      break;
  }
  return a != 0 && (t.tint = a > 0 ? a / 32767 : a / 32768), t;
}
function xa(e, t) {
  if (t || (t = X(8)), !e || e.auto)
    return t.write_shift(4, 0), t.write_shift(4, 0), t;
  e.index != null ? (t.write_shift(1, 2), t.write_shift(1, e.index)) : e.theme != null ? (t.write_shift(1, 6), t.write_shift(1, e.theme)) : (t.write_shift(1, 5), t.write_shift(1, 0));
  var r = e.tint || 0;
  if (r > 0 ? r *= 32767 : r < 0 && (r *= 32768), t.write_shift(2, r), !e.rgb || e.theme != null)
    t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0);
  else {
    var n = e.rgb || "FFFFFF";
    typeof n == "number" && (n = ("000000" + n.toString(16)).slice(-6)), t.write_shift(1, parseInt(n.slice(0, 2), 16)), t.write_shift(1, parseInt(n.slice(2, 4), 16)), t.write_shift(1, parseInt(n.slice(4, 6), 16)), t.write_shift(1, 255);
  }
  return t;
}
function r2(e) {
  var t = e.read_shift(1);
  e.l++;
  var r = {
    fBold: t & 1,
    fItalic: t & 2,
    fUnderline: t & 4,
    fStrikeout: t & 8,
    fOutline: t & 16,
    fShadow: t & 32,
    fCondense: t & 64,
    fExtend: t & 128
  };
  return r;
}
function n2(e, t) {
  t || (t = X(2));
  var r = (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0);
  return t.write_shift(1, r), t.write_shift(1, 0), t;
}
var Vc = 2, Ot = 3, Gi = 11, _a = 19, Xi = 64, i2 = 65, a2 = 71, s2 = 4108, o2 = 4126, rt = 80, Dl = {
  /*::[*/
  1: { n: "CodePage", t: Vc },
  /*::[*/
  2: { n: "Category", t: rt },
  /*::[*/
  3: { n: "PresentationFormat", t: rt },
  /*::[*/
  4: { n: "ByteCount", t: Ot },
  /*::[*/
  5: { n: "LineCount", t: Ot },
  /*::[*/
  6: { n: "ParagraphCount", t: Ot },
  /*::[*/
  7: { n: "SlideCount", t: Ot },
  /*::[*/
  8: { n: "NoteCount", t: Ot },
  /*::[*/
  9: { n: "HiddenCount", t: Ot },
  /*::[*/
  10: { n: "MultimediaClipCount", t: Ot },
  /*::[*/
  11: { n: "ScaleCrop", t: Gi },
  /*::[*/
  12: {
    n: "HeadingPairs",
    t: s2
    /* VT_VECTOR | VT_VARIANT */
  },
  /*::[*/
  13: {
    n: "TitlesOfParts",
    t: o2
    /* VT_VECTOR | VT_LPSTR */
  },
  /*::[*/
  14: { n: "Manager", t: rt },
  /*::[*/
  15: { n: "Company", t: rt },
  /*::[*/
  16: { n: "LinksUpToDate", t: Gi },
  /*::[*/
  17: { n: "CharacterCount", t: Ot },
  /*::[*/
  19: { n: "SharedDoc", t: Gi },
  /*::[*/
  22: { n: "HyperlinksChanged", t: Gi },
  /*::[*/
  23: { n: "AppVersion", t: Ot, p: "version" },
  /*::[*/
  24: { n: "DigSig", t: i2 },
  /*::[*/
  26: { n: "ContentType", t: rt },
  /*::[*/
  27: { n: "ContentStatus", t: rt },
  /*::[*/
  28: { n: "Language", t: rt },
  /*::[*/
  29: { n: "Version", t: rt },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: _a },
  /*::[*/
  2147483651: { n: "Behavior", t: _a },
  /*::[*/
  1919054434: {}
}, Il = {
  /*::[*/
  1: { n: "CodePage", t: Vc },
  /*::[*/
  2: { n: "Title", t: rt },
  /*::[*/
  3: { n: "Subject", t: rt },
  /*::[*/
  4: { n: "Author", t: rt },
  /*::[*/
  5: { n: "Keywords", t: rt },
  /*::[*/
  6: { n: "Comments", t: rt },
  /*::[*/
  7: { n: "Template", t: rt },
  /*::[*/
  8: { n: "LastAuthor", t: rt },
  /*::[*/
  9: { n: "RevNumber", t: rt },
  /*::[*/
  10: { n: "EditTime", t: Xi },
  /*::[*/
  11: { n: "LastPrinted", t: Xi },
  /*::[*/
  12: { n: "CreatedDate", t: Xi },
  /*::[*/
  13: { n: "ModifiedDate", t: Xi },
  /*::[*/
  14: { n: "PageCount", t: Ot },
  /*::[*/
  15: { n: "WordCount", t: Ot },
  /*::[*/
  16: { n: "CharCount", t: Ot },
  /*::[*/
  17: { n: "Thumbnail", t: a2 },
  /*::[*/
  18: { n: "Application", t: rt },
  /*::[*/
  19: { n: "DocSecurity", t: Ot },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: _a },
  /*::[*/
  2147483651: { n: "Behavior", t: _a },
  /*::[*/
  1919054434: {}
};
function l2(e) {
  return e.map(function(t) {
    return [t >> 16 & 255, t >> 8 & 255, t & 255];
  });
}
var f2 = /* @__PURE__ */ l2([
  /* Color Constants */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  /* Overridable Defaults */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  8388608,
  32768,
  128,
  8421376,
  8388736,
  32896,
  12632256,
  8421504,
  10066431,
  10040166,
  16777164,
  13434879,
  6684774,
  16744576,
  26316,
  13421823,
  128,
  16711935,
  16776960,
  65535,
  8388736,
  8388608,
  32896,
  255,
  52479,
  13434879,
  13434828,
  16777113,
  10079487,
  16751052,
  13408767,
  16764057,
  3368703,
  3394764,
  10079232,
  16763904,
  16750848,
  16737792,
  6710937,
  9868950,
  13158,
  3381606,
  13056,
  3355392,
  10040064,
  10040166,
  3355545,
  3355443,
  /* Other entries to appease BIFF8/12 */
  16777215,
  /* 0x40 icvForeground ?? */
  0,
  /* 0x41 icvBackground ?? */
  0,
  /* 0x42 icvFrame ?? */
  0,
  /* 0x43 icv3D ?? */
  0,
  /* 0x44 icv3DText ?? */
  0,
  /* 0x45 icv3DHilite ?? */
  0,
  /* 0x46 icv3DShadow ?? */
  0,
  /* 0x47 icvHilite ?? */
  0,
  /* 0x48 icvCtlText ?? */
  0,
  /* 0x49 icvCtlScrl ?? */
  0,
  /* 0x4A icvCtlInv ?? */
  0,
  /* 0x4B icvCtlBody ?? */
  0,
  /* 0x4C icvCtlFrame ?? */
  0,
  /* 0x4D icvCtlFore ?? */
  0,
  /* 0x4E icvCtlBack ?? */
  0,
  /* 0x4F icvCtlNeutral */
  0,
  /* 0x50 icvInfoBk ?? */
  0
  /* 0x51 icvInfoText ?? */
]), c2 = /* @__PURE__ */ Ct(f2), Mi = {
  /*::[*/
  0: "#NULL!",
  /*::[*/
  7: "#DIV/0!",
  /*::[*/
  15: "#VALUE!",
  /*::[*/
  23: "#REF!",
  /*::[*/
  29: "#NAME?",
  /*::[*/
  36: "#NUM!",
  /*::[*/
  42: "#N/A",
  /*::[*/
  43: "#GETTING_DATA",
  /*::[*/
  255: "#WTF?"
}, u2 = {
  /* Workbook */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
  "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
  /* Worksheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
  "application/vnd.ms-excel.worksheet": "sheets",
  "application/vnd.ms-excel.binIndexWs": "TODO",
  /* Binary Index */
  /* Chartsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
  "application/vnd.ms-excel.chartsheet": "charts",
  /* Macrosheet */
  "application/vnd.ms-excel.macrosheet+xml": "macros",
  "application/vnd.ms-excel.macrosheet": "macros",
  "application/vnd.ms-excel.intlmacrosheet": "TODO",
  "application/vnd.ms-excel.binIndexMs": "TODO",
  /* Binary Index */
  /* Dialogsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
  "application/vnd.ms-excel.dialogsheet": "dialogs",
  /* Shared Strings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
  "application/vnd.ms-excel.sharedStrings": "strs",
  /* Styles */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
  "application/vnd.ms-excel.styles": "styles",
  /* File Properties */
  "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
  /* Custom Data Properties */
  "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
  /* Comments */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
  "application/vnd.ms-excel.comments": "comments",
  "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
  "application/vnd.ms-excel.person+xml": "people",
  /* Metadata (Stock/Geography and Dynamic Array) */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
  "application/vnd.ms-excel.sheetMetadata": "metadata",
  /* PivotTable */
  "application/vnd.ms-excel.pivotTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
  /* Chart Objects */
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
  /* Chart Colors */
  "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
  /* Chart Style */
  "application/vnd.ms-office.chartstyle+xml": "TODO",
  /* Chart Advanced */
  "application/vnd.ms-office.chartex+xml": "TODO",
  /* Calculation Chain */
  "application/vnd.ms-excel.calcChain": "calcchains",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
  /* Printer Settings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
  /* ActiveX */
  "application/vnd.ms-office.activeX": "TODO",
  "application/vnd.ms-office.activeX+xml": "TODO",
  /* Custom Toolbars */
  "application/vnd.ms-excel.attachedToolbars": "TODO",
  /* External Data Connections */
  "application/vnd.ms-excel.connections": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
  /* External Links */
  "application/vnd.ms-excel.externalLink": "links",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
  /* PivotCache */
  "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
  "application/vnd.ms-excel.pivotCacheRecords": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
  /* Query Table */
  "application/vnd.ms-excel.queryTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
  /* Shared Workbook */
  "application/vnd.ms-excel.userNames": "TODO",
  "application/vnd.ms-excel.revisionHeaders": "TODO",
  "application/vnd.ms-excel.revisionLog": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
  /* Single Cell Table */
  "application/vnd.ms-excel.tableSingleCells": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
  /* Slicer */
  "application/vnd.ms-excel.slicer": "TODO",
  "application/vnd.ms-excel.slicerCache": "TODO",
  "application/vnd.ms-excel.slicer+xml": "TODO",
  "application/vnd.ms-excel.slicerCache+xml": "TODO",
  /* Sort Map */
  "application/vnd.ms-excel.wsSortMap": "TODO",
  /* Table */
  "application/vnd.ms-excel.table": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
  /* Themes */
  "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
  /* Theme Override */
  "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
  /* Timeline */
  "application/vnd.ms-excel.Timeline+xml": "TODO",
  /* verify */
  "application/vnd.ms-excel.TimelineCache+xml": "TODO",
  /* verify */
  /* VBA */
  "application/vnd.ms-office.vbaProject": "vba",
  "application/vnd.ms-office.vbaProjectSignature": "TODO",
  /* Volatile Dependencies */
  "application/vnd.ms-office.volatileDependencies": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
  /* Control Properties */
  "application/vnd.ms-excel.controlproperties+xml": "TODO",
  /* Data Model */
  "application/vnd.openxmlformats-officedocument.model+data": "TODO",
  /* Survey */
  "application/vnd.ms-excel.Survey+xml": "TODO",
  /* Drawing */
  "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
  /* VML */
  "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
  "application/vnd.openxmlformats-package.relationships+xml": "rels",
  "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
  /* Image */
  "image/png": "TODO",
  sheet: "js"
}, ji = {
  workbooks: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
    xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
    xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
    xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
    xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
  },
  strs: {
    /* Shared Strings */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
    xlsb: "application/vnd.ms-excel.sharedStrings"
  },
  comments: {
    /* Comments */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
    xlsb: "application/vnd.ms-excel.comments"
  },
  sheets: {
    /* Worksheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
    xlsb: "application/vnd.ms-excel.worksheet"
  },
  charts: {
    /* Chartsheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
    xlsb: "application/vnd.ms-excel.chartsheet"
  },
  dialogs: {
    /* Dialogsheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
    xlsb: "application/vnd.ms-excel.dialogsheet"
  },
  macros: {
    /* Macrosheet (Excel 4.0 Macros) */
    xlsx: "application/vnd.ms-excel.macrosheet+xml",
    xlsb: "application/vnd.ms-excel.macrosheet"
  },
  metadata: {
    /* Metadata (Stock/Geography and Dynamic Array) */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
    xlsb: "application/vnd.ms-excel.sheetMetadata"
  },
  styles: {
    /* Styles */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
    xlsb: "application/vnd.ms-excel.styles"
  }
};
function Gc() {
  return {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: ""
  };
}
function Xc(e, t) {
  var r = wx(u2), n = [], i;
  n[n.length] = Ve, n[n.length] = ie("Types", null, {
    xmlns: Qe.CT,
    "xmlns:xsd": Qe.xsd,
    "xmlns:xsi": Qe.xsi
  }), n = n.concat([
    ["xml", "application/xml"],
    ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"],
    ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"],
    ["data", "application/vnd.openxmlformats-officedocument.model+data"],
    /* from test files */
    ["bmp", "image/bmp"],
    ["png", "image/png"],
    ["gif", "image/gif"],
    ["emf", "image/x-emf"],
    ["wmf", "image/x-wmf"],
    ["jpg", "image/jpeg"],
    ["jpeg", "image/jpeg"],
    ["tif", "image/tiff"],
    ["tiff", "image/tiff"],
    ["pdf", "application/pdf"],
    ["rels", "application/vnd.openxmlformats-package.relationships+xml"]
  ].map(function(l) {
    return ie("Default", null, { Extension: l[0], ContentType: l[1] });
  }));
  var a = function(l) {
    e[l] && e[l].length > 0 && (i = e[l][0], n[n.length] = ie("Override", null, {
      PartName: (i[0] == "/" ? "" : "/") + i,
      ContentType: ji[l][t.bookType] || ji[l].xlsx
    }));
  }, s = function(l) {
    (e[l] || []).forEach(function(f) {
      n[n.length] = ie("Override", null, {
        PartName: (f[0] == "/" ? "" : "/") + f,
        ContentType: ji[l][t.bookType] || ji[l].xlsx
      });
    });
  }, o = function(l) {
    (e[l] || []).forEach(function(f) {
      n[n.length] = ie("Override", null, {
        PartName: (f[0] == "/" ? "" : "/") + f,
        ContentType: r[l][0]
      });
    });
  };
  return a("workbooks"), s("sheets"), s("charts"), o("themes"), ["strs", "styles"].forEach(a), ["coreprops", "extprops", "custprops"].forEach(o), o("vba"), o("comments"), o("threadedcomments"), o("drawings"), s("metadata"), o("people"), n.length > 2 && (n[n.length] = "</Types>", n[1] = n[1].replace("/>", ">")), n.join("");
}
var Te = {
  WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
  VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
  XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
  XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
  XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
  CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
  CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
  CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
  SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
  STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
  CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
  CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
  CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
  WS: [
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
    "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"
  ],
  DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
  MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
  IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
  DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
  XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
  TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
  PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
  VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
};
function jc(e) {
  var t = e.lastIndexOf("/");
  return e.slice(0, t + 1) + "_rels/" + e.slice(t + 1) + ".rels";
}
function kn(e) {
  var t = [Ve, ie("Relationships", null, {
    //'xmlns:ns0': XMLNS.RELS,
    xmlns: Qe.RELS
  })];
  return st(e["!id"]).forEach(function(r) {
    t[t.length] = ie("Relationship", null, e["!id"][r]);
  }), t.length > 2 && (t[t.length] = "</Relationships>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function Oe(e, t, r, n, i, a) {
  if (i || (i = {}), e["!id"] || (e["!id"] = {}), e["!idx"] || (e["!idx"] = 1), t < 0)
    for (t = e["!idx"]; e["!id"]["rId" + t]; ++t)
      ;
  if (e["!idx"] = t + 1, i.Id = "rId" + t, i.Type = n, i.Target = r, a ? i.TargetMode = a : [Te.HLINK, Te.XPATH, Te.XMISS].indexOf(i.Type) > -1 && (i.TargetMode = "External"), e["!id"][i.Id])
    throw new Error("Cannot rewrite rId " + t);
  return e["!id"][i.Id] = i, e[("/" + i.Target).replace("//", "/")] = i, t;
}
function h2(e) {
  var t = [Ve];
  t.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`), t.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);
  for (var r = 0; r < e.length; ++r)
    t.push('  <manifest:file-entry manifest:full-path="' + e[r][0] + '" manifest:media-type="' + e[r][1] + `"/>
`);
  return t.push("</manifest:manifest>"), t.join("");
}
function Pl(e, t, r) {
  return [
    '  <rdf:Description rdf:about="' + e + `">
`,
    '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' + (r || "odf") + "#" + t + `"/>
`,
    `  </rdf:Description>
`
  ].join("");
}
function d2(e, t) {
  return [
    '  <rdf:Description rdf:about="' + e + `">
`,
    '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' + t + `"/>
`,
    `  </rdf:Description>
`
  ].join("");
}
function p2(e) {
  var t = [Ve];
  t.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var r = 0; r != e.length; ++r)
    t.push(Pl(e[r][0], e[r][1])), t.push(d2("", e[r][0]));
  return t.push(Pl("", "Document", "pkg")), t.push("</rdf:RDF>"), t.join("");
}
function Yc() {
  return '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' + ua.version + "</meta:generator></office:meta></office:document-meta>";
}
var en = [
  ["cp:category", "Category"],
  ["cp:contentStatus", "ContentStatus"],
  ["cp:keywords", "Keywords"],
  ["cp:lastModifiedBy", "LastAuthor"],
  ["cp:lastPrinted", "LastPrinted"],
  ["cp:revision", "RevNumber"],
  ["cp:version", "Version"],
  ["dc:creator", "Author"],
  ["dc:description", "Comments"],
  ["dc:identifier", "Identifier"],
  ["dc:language", "Language"],
  ["dc:subject", "Subject"],
  ["dc:title", "Title"],
  ["dcterms:created", "CreatedDate", "date"],
  ["dcterms:modified", "ModifiedDate", "date"]
];
function qs(e, t, r, n, i) {
  i[e] != null || t == null || t === "" || (i[e] = t, t = be(t), n[n.length] = r ? ie(e, t, r) : it(e, t));
}
function qc(e, t) {
  var r = t || {}, n = [Ve, ie("cp:coreProperties", null, {
    //'xmlns': XMLNS.CORE_PROPS,
    "xmlns:cp": Qe.CORE_PROPS,
    "xmlns:dc": Qe.dc,
    "xmlns:dcterms": Qe.dcterms,
    "xmlns:dcmitype": Qe.dcmitype,
    "xmlns:xsi": Qe.xsi
  })], i = {};
  if (!e && !r.Props)
    return n.join("");
  e && (e.CreatedDate != null && qs("dcterms:created", typeof e.CreatedDate == "string" ? e.CreatedDate : Co(e.CreatedDate, r.WTF), { "xsi:type": "dcterms:W3CDTF" }, n, i), e.ModifiedDate != null && qs("dcterms:modified", typeof e.ModifiedDate == "string" ? e.ModifiedDate : Co(e.ModifiedDate, r.WTF), { "xsi:type": "dcterms:W3CDTF" }, n, i));
  for (var a = 0; a != en.length; ++a) {
    var s = en[a], o = r.Props && r.Props[s[1]] != null ? r.Props[s[1]] : e ? e[s[1]] : null;
    o === !0 ? o = "1" : o === !1 ? o = "0" : typeof o == "number" && (o = String(o)), o != null && qs(s[0], o, null, n, i);
  }
  return n.length > 2 && (n[n.length] = "</cp:coreProperties>", n[1] = n[1].replace("/>", ">")), n.join("");
}
var Mn = [
  ["Application", "Application", "string"],
  ["AppVersion", "AppVersion", "string"],
  ["Company", "Company", "string"],
  ["DocSecurity", "DocSecurity", "string"],
  ["Manager", "Manager", "string"],
  ["HyperlinksChanged", "HyperlinksChanged", "bool"],
  ["SharedDoc", "SharedDoc", "bool"],
  ["LinksUpToDate", "LinksUpToDate", "bool"],
  ["ScaleCrop", "ScaleCrop", "bool"],
  ["HeadingPairs", "HeadingPairs", "raw"],
  ["TitlesOfParts", "TitlesOfParts", "raw"]
], Kc = [
  "Worksheets",
  "SheetNames",
  "NamedRanges",
  "DefinedNames",
  "Chartsheets",
  "ChartNames"
];
function Jc(e) {
  var t = [], r = ie;
  return e || (e = {}), e.Application = "SheetJS", t[t.length] = Ve, t[t.length] = ie("Properties", null, {
    xmlns: Qe.EXT_PROPS,
    "xmlns:vt": Qe.vt
  }), Mn.forEach(function(n) {
    if (e[n[1]] !== void 0) {
      var i;
      switch (n[2]) {
        case "string":
          i = be(String(e[n[1]]));
          break;
        case "bool":
          i = e[n[1]] ? "true" : "false";
          break;
      }
      i !== void 0 && (t[t.length] = r(n[0], i));
    }
  }), t[t.length] = r("HeadingPairs", r("vt:vector", r("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + r("vt:variant", r("vt:i4", String(e.Worksheets))), { size: 2, baseType: "variant" })), t[t.length] = r("TitlesOfParts", r("vt:vector", e.SheetNames.map(function(n) {
    return "<vt:lpstr>" + be(n) + "</vt:lpstr>";
  }).join(""), { size: e.Worksheets, baseType: "lpstr" })), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function Qc(e) {
  var t = [Ve, ie("Properties", null, {
    xmlns: Qe.CUST_PROPS,
    "xmlns:vt": Qe.vt
  })];
  if (!e)
    return t.join("");
  var r = 1;
  return st(e).forEach(function(i) {
    ++r, t[t.length] = ie("property", Dx(e[i], !0), {
      fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
      pid: r,
      name: be(i)
    });
  }), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("");
}
var Rl = {
  Title: "Title",
  Subject: "Subject",
  Author: "Author",
  Keywords: "Keywords",
  Comments: "Description",
  LastAuthor: "LastAuthor",
  RevNumber: "Revision",
  Application: "AppName",
  /* TotalTime: 'TotalTime', */
  LastPrinted: "LastPrinted",
  CreatedDate: "Created",
  ModifiedDate: "LastSaved",
  /* Pages */
  /* Words */
  /* Characters */
  Category: "Category",
  /* PresentationFormat */
  Manager: "Manager",
  Company: "Company",
  /* Guid */
  /* HyperlinkBase */
  /* Bytes */
  /* Lines */
  /* Paragraphs */
  /* CharactersWithSpaces */
  AppVersion: "Version",
  ContentStatus: "ContentStatus",
  /* NOTE: missing from schema */
  Identifier: "Identifier",
  /* NOTE: missing from schema */
  Language: "Language"
  /* NOTE: missing from schema */
};
function m2(e, t) {
  var r = [];
  return st(Rl).map(function(n) {
    for (var i = 0; i < en.length; ++i)
      if (en[i][1] == n)
        return en[i];
    for (i = 0; i < Mn.length; ++i)
      if (Mn[i][1] == n)
        return Mn[i];
    throw n;
  }).forEach(function(n) {
    if (e[n[1]] != null) {
      var i = t && t.Props && t.Props[n[1]] != null ? t.Props[n[1]] : e[n[1]];
      switch (n[2]) {
        case "date":
          i = new Date(i).toISOString().replace(/\.\d*Z/, "Z");
          break;
      }
      typeof i == "number" ? i = String(i) : i === !0 || i === !1 ? i = i ? "1" : "0" : i instanceof Date && (i = new Date(i).toISOString().replace(/\.\d*Z/, "")), r.push(it(Rl[n[1]] || n[1], i));
    }
  }), ie("DocumentProperties", r.join(""), { xmlns: kt.o });
}
function g2(e, t) {
  var r = ["Worksheets", "SheetNames"], n = "CustomDocumentProperties", i = [];
  return e && st(e).forEach(function(a) {
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      for (var s = 0; s < en.length; ++s)
        if (a == en[s][1])
          return;
      for (s = 0; s < Mn.length; ++s)
        if (a == Mn[s][1])
          return;
      for (s = 0; s < r.length; ++s)
        if (a == r[s])
          return;
      var o = e[a], l = "string";
      typeof o == "number" ? (l = "float", o = String(o)) : o === !0 || o === !1 ? (l = "boolean", o = o ? "1" : "0") : o = String(o), i.push(ie(El(a), o, { "dt:dt": l }));
    }
  }), t && st(t).forEach(function(a) {
    if (Object.prototype.hasOwnProperty.call(t, a) && !(e && Object.prototype.hasOwnProperty.call(e, a))) {
      var s = t[a], o = "string";
      typeof s == "number" ? (o = "float", s = String(s)) : s === !0 || s === !1 ? (o = "boolean", s = s ? "1" : "0") : s instanceof Date ? (o = "dateTime.tz", s = s.toISOString()) : s = String(s), i.push(ie(El(a), s, { "dt:dt": o }));
    }
  }), "<" + n + ' xmlns="' + kt.o + '">' + i.join("") + "</" + n + ">";
}
function v2(e) {
  var t = typeof e == "string" ? new Date(Date.parse(e)) : e, r = t.getTime() / 1e3 + 11644473600, n = r % Math.pow(2, 32), i = (r - n) / Math.pow(2, 32);
  n *= 1e7, i *= 1e7;
  var a = n / Math.pow(2, 32) | 0;
  a > 0 && (n = n % Math.pow(2, 32), i += a);
  var s = X(8);
  return s.write_shift(4, n), s.write_shift(4, i), s;
}
function Nl(e, t) {
  var r = X(4), n = X(4);
  switch (r.write_shift(4, e == 80 ? 31 : e), e) {
    case 3:
      n.write_shift(-4, t);
      break;
    case 5:
      n = X(8), n.write_shift(8, t, "f");
      break;
    case 11:
      n.write_shift(4, t ? 1 : 0);
      break;
    case 64:
      n = v2(t);
      break;
    case 31:
    case 80:
      for (n = X(4 + 2 * (t.length + 1) + (t.length % 2 ? 0 : 2)), n.write_shift(4, t.length + 1), n.write_shift(0, t, "dbcs"); n.l != n.length; )
        n.write_shift(1, 0);
      break;
    default:
      throw new Error("TypedPropertyValue unrecognized type " + e + " " + t);
  }
  return nt([r, n]);
}
var Zc = ["CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID"];
function x2(e) {
  switch (typeof e) {
    case "boolean":
      return 11;
    case "number":
      return (e | 0) == e ? 3 : 5;
    case "string":
      return 31;
    case "object":
      if (e instanceof Date)
        return 64;
      break;
  }
  return -1;
}
function Ll(e, t, r) {
  var n = X(8), i = [], a = [], s = 8, o = 0, l = X(8), f = X(8);
  if (l.write_shift(4, 2), l.write_shift(4, 1200), f.write_shift(4, 1), a.push(l), i.push(f), s += 8 + l.length, !t) {
    f = X(8), f.write_shift(4, 0), i.unshift(f);
    var c = [X(4)];
    for (c[0].write_shift(4, e.length), o = 0; o < e.length; ++o) {
      var u = e[o][0];
      for (l = X(4 + 4 + 2 * (u.length + 1) + (u.length % 2 ? 0 : 2)), l.write_shift(4, o + 2), l.write_shift(4, u.length + 1), l.write_shift(0, u, "dbcs"); l.l != l.length; )
        l.write_shift(1, 0);
      c.push(l);
    }
    l = nt(c), a.unshift(l), s += 8 + l.length;
  }
  for (o = 0; o < e.length; ++o)
    if (!(t && !t[e[o][0]]) && !(Zc.indexOf(e[o][0]) > -1 || Kc.indexOf(e[o][0]) > -1) && e[o][1] != null) {
      var h = e[o][1], d = 0;
      if (t) {
        d = +t[e[o][0]];
        var v = r[d];
        if (v.p == "version" && typeof h == "string") {
          var p = h.split(".");
          h = (+p[0] << 16) + (+p[1] || 0);
        }
        l = Nl(v.t, h);
      } else {
        var m = x2(h);
        m == -1 && (m = 31, h = String(h)), l = Nl(m, h);
      }
      a.push(l), f = X(8), f.write_shift(4, t ? d : 2 + o), i.push(f), s += 8 + l.length;
    }
  var g = 8 * (a.length + 1);
  for (o = 0; o < a.length; ++o)
    i[o].write_shift(4, g), g += a[o].length;
  return n.write_shift(4, s), n.write_shift(4, a.length), nt([n].concat(i).concat(a));
}
function Bl(e, t, r, n, i, a) {
  var s = X(i ? 68 : 48), o = [s];
  s.write_shift(2, 65534), s.write_shift(2, 0), s.write_shift(4, 842412599), s.write_shift(16, De.utils.consts.HEADER_CLSID, "hex"), s.write_shift(4, i ? 2 : 1), s.write_shift(16, t, "hex"), s.write_shift(4, i ? 68 : 48);
  var l = Ll(e, r, n);
  if (o.push(l), i) {
    var f = Ll(i, null, null);
    s.write_shift(16, a, "hex"), s.write_shift(4, 68 + l.length), o.push(f);
  }
  return nt(o);
}
function _2(e, t) {
  t || (t = X(e));
  for (var r = 0; r < e; ++r)
    t.write_shift(1, 0);
  return t;
}
function y2(e, t) {
  return e.read_shift(t) === 1;
}
function vt(e, t) {
  return t || (t = X(2)), t.write_shift(2, +!!e), t;
}
function eu(e) {
  return e.read_shift(2, "u");
}
function Lt(e, t) {
  return t || (t = X(2)), t.write_shift(2, e), t;
}
function tu(e, t, r) {
  return r || (r = X(2)), r.write_shift(1, t == "e" ? +e : +!!e), r.write_shift(1, t == "e" ? 1 : 0), r;
}
function ru(e, t, r) {
  var n = e.read_shift(r && r.biff >= 12 ? 2 : 1), i = "sbcs-cont";
  if (r && r.biff >= 8, !r || r.biff == 8) {
    var a = e.read_shift(1);
    a && (i = "dbcs-cont");
  } else
    r.biff == 12 && (i = "wstr");
  r.biff >= 2 && r.biff <= 5 && (i = "cpstr");
  var s = n ? e.read_shift(n, i) : "";
  return s;
}
function w2(e) {
  var t = e.t || "", r = X(3 + 0);
  r.write_shift(2, t.length), r.write_shift(1, 1);
  var n = X(2 * t.length);
  n.write_shift(2 * t.length, t, "utf16le");
  var i = [r, n];
  return nt(i);
}
function E2(e, t, r) {
  var n;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5)
      return e.read_shift(t, "cpstr");
    if (r.biff >= 12)
      return e.read_shift(t, "dbcs-cont");
  }
  var i = e.read_shift(1);
  return i === 0 ? n = e.read_shift(t, "sbcs-cont") : n = e.read_shift(t, "dbcs-cont"), n;
}
function S2(e, t, r) {
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return n === 0 ? (e.l++, "") : E2(e, n, r);
}
function T2(e, t, r) {
  if (r.biff > 5)
    return S2(e, t, r);
  var n = e.read_shift(1);
  return n === 0 ? (e.l++, "") : e.read_shift(n, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function nu(e, t, r) {
  return r || (r = X(3 + 2 * e.length)), r.write_shift(2, e.length), r.write_shift(1, 1), r.write_shift(31, e, "utf16le"), r;
}
function $l(e, t) {
  t || (t = X(6 + e.length * 2)), t.write_shift(4, 1 + e.length);
  for (var r = 0; r < e.length; ++r)
    t.write_shift(2, e.charCodeAt(r));
  return t.write_shift(2, 0), t;
}
function A2(e) {
  var t = X(512), r = 0, n = e.Target;
  n.slice(0, 7) == "file://" && (n = n.slice(7));
  var i = n.indexOf("#"), a = i > -1 ? 31 : 23;
  switch (n.charAt(0)) {
    case "#":
      a = 28;
      break;
    case ".":
      a &= -3;
      break;
  }
  t.write_shift(4, 2), t.write_shift(4, a);
  var s = [8, 6815827, 6619237, 4849780, 83];
  for (r = 0; r < s.length; ++r)
    t.write_shift(4, s[r]);
  if (a == 28)
    n = n.slice(1), $l(n, t);
  else if (a & 2) {
    for (s = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), r = 0; r < s.length; ++r)
      t.write_shift(1, parseInt(s[r], 16));
    var o = i > -1 ? n.slice(0, i) : n;
    for (t.write_shift(4, 2 * (o.length + 1)), r = 0; r < o.length; ++r)
      t.write_shift(2, o.charCodeAt(r));
    t.write_shift(2, 0), a & 8 && $l(i > -1 ? n.slice(i + 1) : "", t);
  } else {
    for (s = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "), r = 0; r < s.length; ++r)
      t.write_shift(1, parseInt(s[r], 16));
    for (var l = 0; n.slice(l * 3, l * 3 + 3) == "../" || n.slice(l * 3, l * 3 + 3) == "..\\"; )
      ++l;
    for (t.write_shift(2, l), t.write_shift(4, n.length - 3 * l + 1), r = 0; r < n.length - 3 * l; ++r)
      t.write_shift(1, n.charCodeAt(r + 3 * l) & 255);
    for (t.write_shift(1, 0), t.write_shift(2, 65535), t.write_shift(2, 57005), r = 0; r < 6; ++r)
      t.write_shift(4, 0);
  }
  return t.slice(0, t.l);
}
function on(e, t, r, n) {
  return n || (n = X(6)), n.write_shift(2, e), n.write_shift(2, t), n.write_shift(2, r || 0), n;
}
function C2(e, t, r) {
  var n = r.biff > 8 ? 4 : 2, i = e.read_shift(n), a = e.read_shift(n, "i"), s = e.read_shift(n, "i");
  return [i, a, s];
}
function F2(e) {
  var t = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2);
  return { s: { c: n, r: t }, e: { c: i, r } };
}
function iu(e, t) {
  return t || (t = X(8)), t.write_shift(2, e.s.r), t.write_shift(2, e.e.r), t.write_shift(2, e.s.c), t.write_shift(2, e.e.c), t;
}
function d0(e, t, r) {
  var n = 1536, i = 16;
  switch (r.bookType) {
    case "biff8":
      break;
    case "biff5":
      n = 1280, i = 8;
      break;
    case "biff4":
      n = 4, i = 6;
      break;
    case "biff3":
      n = 3, i = 6;
      break;
    case "biff2":
      n = 2, i = 4;
      break;
    case "xla":
      break;
    default:
      throw new Error("unsupported BIFF version");
  }
  var a = X(i);
  return a.write_shift(2, n), a.write_shift(2, t), i > 4 && a.write_shift(2, 29282), i > 6 && a.write_shift(2, 1997), i > 8 && (a.write_shift(2, 49161), a.write_shift(2, 1), a.write_shift(2, 1798), a.write_shift(2, 0)), a;
}
function O2(e, t) {
  var r = !t || t.biff == 8, n = X(r ? 112 : 54);
  for (n.write_shift(t.biff == 8 ? 2 : 1, 7), r && n.write_shift(1, 0), n.write_shift(4, 859007059), n.write_shift(4, 5458548 | (r ? 0 : 536870912)); n.l < n.length; )
    n.write_shift(1, r ? 0 : 32);
  return n;
}
function b2(e, t) {
  var r = !t || t.biff >= 8 ? 2 : 1, n = X(8 + r * e.name.length);
  n.write_shift(4, e.pos), n.write_shift(1, e.hs || 0), n.write_shift(1, e.dt), n.write_shift(1, e.name.length), t.biff >= 8 && n.write_shift(1, 1), n.write_shift(r * e.name.length, e.name, t.biff < 8 ? "sbcs" : "utf16le");
  var i = n.slice(0, n.l);
  return i.l = n.l, i;
}
function k2(e, t) {
  var r = X(8);
  r.write_shift(4, e.Count), r.write_shift(4, e.Unique);
  for (var n = [], i = 0; i < e.length; ++i)
    n[i] = w2(e[i]);
  var a = nt([r].concat(n));
  return a.parts = [r.length].concat(n.map(function(s) {
    return s.length;
  })), a;
}
function M2() {
  var e = X(18);
  return e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 29280), e.write_shift(2, 17600), e.write_shift(2, 56), e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 1), e.write_shift(2, 500), e;
}
function D2(e) {
  var t = X(18), r = 1718;
  return e && e.RTL && (r |= 64), t.write_shift(2, r), t.write_shift(4, 0), t.write_shift(4, 64), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
function I2(e, t) {
  var r = e.name || "Arial", n = t && t.biff == 5, i = n ? 15 + r.length : 16 + 2 * r.length, a = X(i);
  return a.write_shift(2, (e.sz || 12) * 20), a.write_shift(4, 0), a.write_shift(2, 400), a.write_shift(4, 0), a.write_shift(2, 0), a.write_shift(1, r.length), n || a.write_shift(1, 1), a.write_shift((n ? 1 : 2) * r.length, r, n ? "sbcs" : "utf16le"), a;
}
function P2(e, t, r, n) {
  var i = X(10);
  return on(e, t, n, i), i.write_shift(4, r), i;
}
function R2(e, t, r, n, i) {
  var a = !i || i.biff == 8, s = X(6 + 2 + +a + (1 + a) * r.length);
  return on(e, t, n, s), s.write_shift(2, r.length), a && s.write_shift(1, 1), s.write_shift((1 + a) * r.length, r, a ? "utf16le" : "sbcs"), s;
}
function N2(e, t, r, n) {
  var i = r && r.biff == 5;
  n || (n = X(i ? 3 + t.length : 5 + 2 * t.length)), n.write_shift(2, e), n.write_shift(i ? 1 : 2, t.length), i || n.write_shift(1, 1), n.write_shift((i ? 1 : 2) * t.length, t, i ? "sbcs" : "utf16le");
  var a = n.length > n.l ? n.slice(0, n.l) : n;
  return a.l == null && (a.l = a.length), a;
}
function L2(e, t) {
  var r = t.biff == 8 || !t.biff ? 4 : 2, n = X(2 * r + 6);
  return n.write_shift(r, e.s.r), n.write_shift(r, e.e.r + 1), n.write_shift(2, e.s.c), n.write_shift(2, e.e.c + 1), n.write_shift(2, 0), n;
}
function Ul(e, t, r, n) {
  var i = r && r.biff == 5;
  n || (n = X(i ? 16 : 20)), n.write_shift(2, 0), e.style ? (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, 65524)) : (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, t << 4));
  var a = 0;
  return e.numFmtId > 0 && i && (a |= 1024), n.write_shift(4, a), n.write_shift(4, 0), i || n.write_shift(4, 0), n.write_shift(2, 0), n;
}
function B2(e) {
  var t = X(8);
  return t.write_shift(4, 0), t.write_shift(2, e[0] ? e[0] + 1 : 0), t.write_shift(2, e[1] ? e[1] + 1 : 0), t;
}
function $2(e, t, r, n, i, a) {
  var s = X(8);
  return on(e, t, n, s), tu(r, a, s), s;
}
function U2(e, t, r, n) {
  var i = X(14);
  return on(e, t, n, i), sn(r, i), i;
}
function H2(e, t, r) {
  if (r.biff < 8)
    return W2(e, t, r);
  for (var n = [], i = e.l + t, a = e.read_shift(r.biff > 8 ? 4 : 2); a-- !== 0; )
    n.push(C2(e, r.biff > 8 ? 12 : 6, r));
  if (e.l != i)
    throw new Error("Bad ExternSheet: " + e.l + " != " + i);
  return n;
}
function W2(e, t, r) {
  e[e.l + 1] == 3 && e[e.l]++;
  var n = ru(e, t, r);
  return n.charCodeAt(0) == 3 ? n.slice(1) : n;
}
function z2(e) {
  var t = X(2 + e.length * 8);
  t.write_shift(2, e.length);
  for (var r = 0; r < e.length; ++r)
    iu(e[r], t);
  return t;
}
function V2(e) {
  var t = X(24), r = Ze(e[0]);
  t.write_shift(2, r.r), t.write_shift(2, r.r), t.write_shift(2, r.c), t.write_shift(2, r.c);
  for (var n = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), i = 0; i < 16; ++i)
    t.write_shift(1, parseInt(n[i], 16));
  return nt([t, A2(e[1])]);
}
function G2(e) {
  var t = e[1].Tooltip, r = X(10 + 2 * (t.length + 1));
  r.write_shift(2, 2048);
  var n = Ze(e[0]);
  r.write_shift(2, n.r), r.write_shift(2, n.r), r.write_shift(2, n.c), r.write_shift(2, n.c);
  for (var i = 0; i < t.length; ++i)
    r.write_shift(2, t.charCodeAt(i));
  return r.write_shift(2, 0), r;
}
function X2(e) {
  return e || (e = X(4)), e.write_shift(2, 1), e.write_shift(2, 1), e;
}
function j2(e, t, r) {
  if (!r.cellStyles)
    return lr(e, t);
  var n = r && r.biff >= 12 ? 4 : 2, i = e.read_shift(n), a = e.read_shift(n), s = e.read_shift(n), o = e.read_shift(n), l = e.read_shift(2);
  n == 2 && (e.l += 2);
  var f = { s: i, e: a, w: s, ixfe: o, flags: l };
  return (r.biff >= 5 || !r.biff) && (f.level = l >> 8 & 7), f;
}
function Y2(e, t) {
  var r = X(12);
  r.write_shift(2, t), r.write_shift(2, t), r.write_shift(2, e.width * 256), r.write_shift(2, 0);
  var n = 0;
  return e.hidden && (n |= 1), r.write_shift(1, n), n = e.level || 0, r.write_shift(1, n), r.write_shift(2, 0), r;
}
function q2(e) {
  for (var t = X(2 * e), r = 0; r < e; ++r)
    t.write_shift(2, r + 1);
  return t;
}
function K2(e, t, r) {
  var n = X(15);
  return Ii(n, e, t), n.write_shift(8, r, "f"), n;
}
function J2(e, t, r) {
  var n = X(9);
  return Ii(n, e, t), n.write_shift(2, r), n;
}
var Q2 = /* @__PURE__ */ function() {
  var e = {
    /* Code Pages Supported by Visual FoxPro */
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /* shapefile DBF extension */
    /*::[*/
    0: 20127,
    /*::[*/
    8: 865,
    /*::[*/
    9: 437,
    /*::[*/
    10: 850,
    /*::[*/
    11: 437,
    /*::[*/
    13: 437,
    /*::[*/
    14: 850,
    /*::[*/
    15: 437,
    /*::[*/
    16: 850,
    /*::[*/
    17: 437,
    /*::[*/
    18: 850,
    /*::[*/
    19: 932,
    /*::[*/
    20: 850,
    /*::[*/
    21: 437,
    /*::[*/
    22: 850,
    /*::[*/
    23: 865,
    /*::[*/
    24: 437,
    /*::[*/
    25: 437,
    /*::[*/
    26: 850,
    /*::[*/
    27: 437,
    /*::[*/
    28: 863,
    /*::[*/
    29: 850,
    /*::[*/
    31: 852,
    /*::[*/
    34: 852,
    /*::[*/
    35: 852,
    /*::[*/
    36: 860,
    /*::[*/
    37: 850,
    /*::[*/
    38: 866,
    /*::[*/
    55: 850,
    /*::[*/
    64: 852,
    /*::[*/
    77: 936,
    /*::[*/
    78: 949,
    /*::[*/
    79: 950,
    /*::[*/
    80: 874,
    /*::[*/
    87: 1252,
    /*::[*/
    88: 1252,
    /*::[*/
    89: 1252,
    /*::[*/
    108: 863,
    /*::[*/
    134: 737,
    /*::[*/
    135: 852,
    /*::[*/
    136: 857,
    /*::[*/
    204: 1257,
    /*::[*/
    255: 16969
  }, t = r0({
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /*::[*/
    0: 20127
  });
  function r(o, l) {
    var f = [], c = an(1);
    switch (l.type) {
      case "base64":
        c = Gt(xr(o));
        break;
      case "binary":
        c = Gt(o);
        break;
      case "buffer":
      case "array":
        c = o;
        break;
    }
    bt(c, 0);
    var u = c.read_shift(1), h = !!(u & 136), d = !1, v = !1;
    switch (u) {
      case 2:
        break;
      case 3:
        break;
      case 48:
        d = !0, h = !0;
        break;
      case 49:
        d = !0, h = !0;
        break;
      case 131:
        break;
      case 139:
        break;
      case 140:
        v = !0;
        break;
      case 245:
        break;
      default:
        throw new Error("DBF Unsupported Version: " + u.toString(16));
    }
    var p = 0, m = 521;
    u == 2 && (p = c.read_shift(2)), c.l += 3, u != 2 && (p = c.read_shift(4)), p > 1048576 && (p = 1e6), u != 2 && (m = c.read_shift(2));
    var g = c.read_shift(2), x = l.codepage || 1252;
    u != 2 && (c.l += 16, c.read_shift(1), c[c.l] !== 0 && (x = e[c[c.l]]), c.l += 1, c.l += 2), v && (c.l += 36);
    for (var _ = [], C = {}, R = Math.min(c.length, u == 2 ? 521 : m - 10 - (d ? 264 : 0)), G = v ? 32 : 11; c.l < R && c[c.l] != 13; )
      switch (C = {}, C.name = Jr.utils.decode(x, c.slice(c.l, c.l + G)).replace(/[\u0000\r\n].*$/g, ""), c.l += G, C.type = String.fromCharCode(c.read_shift(1)), u != 2 && !v && (C.offset = c.read_shift(4)), C.len = c.read_shift(1), u == 2 && (C.offset = c.read_shift(2)), C.dec = c.read_shift(1), C.name.length && _.push(C), u != 2 && (c.l += v ? 13 : 14), C.type) {
        case "B":
          (!d || C.len != 8) && l.WTF && console.log("Skipping " + C.name + ":" + C.type);
          break;
        case "G":
        case "P":
          l.WTF && console.log("Skipping " + C.name + ":" + C.type);
          break;
        case "+":
        case "0":
        case "@":
        case "C":
        case "D":
        case "F":
        case "I":
        case "L":
        case "M":
        case "N":
        case "O":
        case "T":
        case "Y":
          break;
        default:
          throw new Error("Unknown Field Type: " + C.type);
      }
    if (c[c.l] !== 13 && (c.l = m - 1), c.read_shift(1) !== 13)
      throw new Error("DBF Terminator not found " + c.l + " " + c[c.l]);
    c.l = m;
    var b = 0, L = 0;
    for (f[0] = [], L = 0; L != _.length; ++L)
      f[0][L] = _[L].name;
    for (; p-- > 0; ) {
      if (c[c.l] === 42) {
        c.l += g;
        continue;
      }
      for (++c.l, f[++b] = [], L = 0, L = 0; L != _.length; ++L) {
        var P = c.slice(c.l, c.l + _[L].len);
        c.l += _[L].len, bt(P, 0);
        var N = Jr.utils.decode(x, P);
        switch (_[L].type) {
          case "C":
            N.trim().length && (f[b][L] = N.replace(/\s+$/, ""));
            break;
          case "D":
            N.length === 8 ? f[b][L] = new Date(+N.slice(0, 4), +N.slice(4, 6) - 1, +N.slice(6, 8)) : f[b][L] = N;
            break;
          case "F":
            f[b][L] = parseFloat(N.trim());
            break;
          case "+":
          case "I":
            f[b][L] = v ? P.read_shift(-4, "i") ^ 2147483648 : P.read_shift(4, "i");
            break;
          case "L":
            switch (N.trim().toUpperCase()) {
              case "Y":
              case "T":
                f[b][L] = !0;
                break;
              case "N":
              case "F":
                f[b][L] = !1;
                break;
              case "":
              case "?":
                break;
              default:
                throw new Error("DBF Unrecognized L:|" + N + "|");
            }
            break;
          case "M":
            if (!h)
              throw new Error("DBF Unexpected MEMO for type " + u.toString(16));
            f[b][L] = "##MEMO##" + (v ? parseInt(N.trim(), 10) : P.read_shift(4));
            break;
          case "N":
            N = N.replace(/\u0000/g, "").trim(), N && N != "." && (f[b][L] = +N || 0);
            break;
          case "@":
            f[b][L] = new Date(P.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            f[b][L] = new Date((P.read_shift(4) - 2440588) * 864e5 + P.read_shift(4));
            break;
          case "Y":
            f[b][L] = P.read_shift(4, "i") / 1e4 + P.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            f[b][L] = -P.read_shift(-8, "f");
            break;
          case "B":
            if (d && _[L].len == 8) {
              f[b][L] = P.read_shift(8, "f");
              break;
            }
          case "G":
          case "P":
            P.l += _[L].len;
            break;
          case "0":
            if (_[L].name === "_NullFlags")
              break;
          default:
            throw new Error("DBF Unsupported data type " + _[L].type);
        }
      }
    }
    if (u != 2 && c.l < c.length && c[c.l++] != 26)
      throw new Error("DBF EOF Marker missing " + (c.l - 1) + " of " + c.length + " " + c[c.l - 1].toString(16));
    return l && l.sheetRows && (f = f.slice(0, l.sheetRows)), l.DBF = _, f;
  }
  function n(o, l) {
    var f = l || {};
    f.dateNF || (f.dateNF = "yyyymmdd");
    var c = Gn(r(o, f), f);
    return c["!cols"] = f.DBF.map(function(u) {
      return {
        wch: u.len,
        DBF: u
      };
    }), delete f.DBF, c;
  }
  function i(o, l) {
    try {
      return cn(n(o, l), l);
    } catch (f) {
      if (l && l.WTF)
        throw f;
    }
    return { SheetNames: [], Sheets: {} };
  }
  var a = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
  function s(o, l) {
    var f = l || {};
    if (+f.codepage >= 0 && xi(+f.codepage), f.type == "string")
      throw new Error("Cannot write DBF to JS string");
    var c = Tt(), u = Ta(o, { header: 1, raw: !0, cellDates: !0 }), h = u[0], d = u.slice(1), v = o["!cols"] || [], p = 0, m = 0, g = 0, x = 1;
    for (p = 0; p < h.length; ++p) {
      if (((v[p] || {}).DBF || {}).name) {
        h[p] = v[p].DBF.name, ++g;
        continue;
      }
      if (h[p] != null) {
        if (++g, typeof h[p] == "number" && (h[p] = h[p].toString(10)), typeof h[p] != "string")
          throw new Error("DBF Invalid column name " + h[p] + " |" + typeof h[p] + "|");
        if (h.indexOf(h[p]) !== p) {
          for (m = 0; m < 1024; ++m)
            if (h.indexOf(h[p] + "_" + m) == -1) {
              h[p] += "_" + m;
              break;
            }
        }
      }
    }
    var _ = Pe(o["!ref"]), C = [], R = [], G = [];
    for (p = 0; p <= _.e.c - _.s.c; ++p) {
      var b = "", L = "", P = 0, N = [];
      for (m = 0; m < d.length; ++m)
        d[m][p] != null && N.push(d[m][p]);
      if (N.length == 0 || h[p] == null) {
        C[p] = "?";
        continue;
      }
      for (m = 0; m < N.length; ++m) {
        switch (typeof N[m]) {
          case "number":
            L = "B";
            break;
          case "string":
            L = "C";
            break;
          case "boolean":
            L = "L";
            break;
          case "object":
            L = N[m] instanceof Date ? "D" : "C";
            break;
          default:
            L = "C";
        }
        P = Math.max(P, String(N[m]).length), b = b && b != L ? "C" : L;
      }
      P > 250 && (P = 250), L = ((v[p] || {}).DBF || {}).type, L == "C" && v[p].DBF.len > P && (P = v[p].DBF.len), b == "B" && L == "N" && (b = "N", G[p] = v[p].DBF.dec, P = v[p].DBF.len), R[p] = b == "C" || L == "N" ? P : a[b] || 0, x += R[p], C[p] = b;
    }
    var F = c.next(32);
    for (F.write_shift(4, 318902576), F.write_shift(4, d.length), F.write_shift(2, 296 + 32 * g), F.write_shift(2, x), p = 0; p < 4; ++p)
      F.write_shift(4, 0);
    for (F.write_shift(4, 0 | (+t[
      /*::String(*/
      sc
      /*::)*/
    ] || 3) << 8), p = 0, m = 0; p < h.length; ++p)
      if (h[p] != null) {
        var O = c.next(32), M = (h[p].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
        O.write_shift(1, M, "sbcs"), O.write_shift(1, C[p] == "?" ? "C" : C[p], "sbcs"), O.write_shift(4, m), O.write_shift(1, R[p] || a[C[p]] || 0), O.write_shift(1, G[p] || 0), O.write_shift(1, 2), O.write_shift(4, 0), O.write_shift(1, 0), O.write_shift(4, 0), O.write_shift(4, 0), m += R[p] || a[C[p]] || 0;
      }
    var V = c.next(264);
    for (V.write_shift(4, 13), p = 0; p < 65; ++p)
      V.write_shift(4, 0);
    for (p = 0; p < d.length; ++p) {
      var J = c.next(x);
      for (J.write_shift(1, 0), m = 0; m < h.length; ++m)
        if (h[m] != null)
          switch (C[m]) {
            case "L":
              J.write_shift(1, d[p][m] == null ? 63 : d[p][m] ? 84 : 70);
              break;
            case "B":
              J.write_shift(8, d[p][m] || 0, "f");
              break;
            case "N":
              var le = "0";
              for (typeof d[p][m] == "number" && (le = d[p][m].toFixed(G[m] || 0)), g = 0; g < R[m] - le.length; ++g)
                J.write_shift(1, 32);
              J.write_shift(1, le, "sbcs");
              break;
            case "D":
              d[p][m] ? (J.write_shift(4, ("0000" + d[p][m].getFullYear()).slice(-4), "sbcs"), J.write_shift(2, ("00" + (d[p][m].getMonth() + 1)).slice(-2), "sbcs"), J.write_shift(2, ("00" + d[p][m].getDate()).slice(-2), "sbcs")) : J.write_shift(8, "00000000", "sbcs");
              break;
            case "C":
              var he = String(d[p][m] != null ? d[p][m] : "").slice(0, R[m]);
              for (J.write_shift(1, he, "sbcs"), g = 0; g < R[m] - he.length; ++g)
                J.write_shift(1, 32);
              break;
          }
    }
    return c.next(1).write_shift(1, 26), c.end();
  }
  return {
    to_workbook: i,
    to_sheet: n,
    from_sheet: s
  };
}(), Z2 = /* @__PURE__ */ function() {
  var e = {
    AA: "À",
    BA: "Á",
    CA: "Â",
    DA: 195,
    HA: "Ä",
    JA: 197,
    AE: "È",
    BE: "É",
    CE: "Ê",
    HE: "Ë",
    AI: "Ì",
    BI: "Í",
    CI: "Î",
    HI: "Ï",
    AO: "Ò",
    BO: "Ó",
    CO: "Ô",
    DO: 213,
    HO: "Ö",
    AU: "Ù",
    BU: "Ú",
    CU: "Û",
    HU: "Ü",
    Aa: "à",
    Ba: "á",
    Ca: "â",
    Da: 227,
    Ha: "ä",
    Ja: 229,
    Ae: "è",
    Be: "é",
    Ce: "ê",
    He: "ë",
    Ai: "ì",
    Bi: "í",
    Ci: "î",
    Hi: "ï",
    Ao: "ò",
    Bo: "ó",
    Co: "ô",
    Do: 245,
    Ho: "ö",
    Au: "ù",
    Bu: "ú",
    Cu: "û",
    Hu: "ü",
    KC: "Ç",
    Kc: "ç",
    q: "æ",
    z: "œ",
    a: "Æ",
    j: "Œ",
    DN: 209,
    Dn: 241,
    Hy: 255,
    S: 169,
    c: 170,
    R: 174,
    "B ": 180,
    /*::[*/
    0: 176,
    /*::[*/
    1: 177,
    /*::[*/
    2: 178,
    /*::[*/
    3: 179,
    /*::[*/
    5: 181,
    /*::[*/
    6: 182,
    /*::[*/
    7: 183,
    Q: 185,
    k: 186,
    b: 208,
    i: 216,
    l: 222,
    s: 240,
    y: 248,
    "!": 161,
    '"': 162,
    "#": 163,
    "(": 164,
    "%": 165,
    "'": 167,
    "H ": 168,
    "+": 171,
    ";": 187,
    "<": 188,
    "=": 189,
    ">": 190,
    "?": 191,
    "{": 223
  }, t = new RegExp("\x1BN(" + st(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm"), r = function(h, d) {
    var v = e[d];
    return typeof v == "number" ? cl(v) : v;
  }, n = function(h, d, v) {
    var p = d.charCodeAt(0) - 32 << 4 | v.charCodeAt(0) - 48;
    return p == 59 ? h : cl(p);
  };
  e["|"] = 254;
  function i(h, d) {
    switch (d.type) {
      case "base64":
        return a(xr(h), d);
      case "binary":
        return a(h, d);
      case "buffer":
        return a(Ae && Buffer.isBuffer(h) ? h.toString("binary") : Oi(h), d);
      case "array":
        return a(Ya(h), d);
    }
    throw new Error("Unrecognized type " + d.type);
  }
  function a(h, d) {
    var v = h.split(/[\n\r]+/), p = -1, m = -1, g = 0, x = 0, _ = [], C = [], R = null, G = {}, b = [], L = [], P = [], N = 0, F;
    for (+d.codepage >= 0 && xi(+d.codepage); g !== v.length; ++g) {
      N = 0;
      var O = v[g].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n).replace(t, r), M = O.replace(/;;/g, "\0").split(";").map(function(I) {
        return I.replace(/\u0000/g, ";");
      }), V = M[0], J;
      if (O.length > 0)
        switch (V) {
          case "ID":
            break;
          case "E":
            break;
          case "B":
            break;
          case "O":
            break;
          case "W":
            break;
          case "P":
            M[1].charAt(0) == "P" && C.push(O.slice(3).replace(/;;/g, ";"));
            break;
          case "C":
            var le = !1, he = !1, pe = !1, me = !1, Me = -1, Se = -1;
            for (x = 1; x < M.length; ++x)
              switch (M[x].charAt(0)) {
                case "A":
                  break;
                case "X":
                  m = parseInt(M[x].slice(1)) - 1, he = !0;
                  break;
                case "Y":
                  for (p = parseInt(M[x].slice(1)) - 1, he || (m = 0), F = _.length; F <= p; ++F)
                    _[F] = [];
                  break;
                case "K":
                  J = M[x].slice(1), J.charAt(0) === '"' ? J = J.slice(1, J.length - 1) : J === "TRUE" ? J = !0 : J === "FALSE" ? J = !1 : isNaN(gr(J)) ? isNaN(yi(J).getDate()) || (J = wt(J)) : (J = gr(J), R !== null && xc(R) && (J = Ec(J))), le = !0;
                  break;
                case "E":
                  me = !0;
                  var k = J_(M[x].slice(1), { r: p, c: m });
                  _[p][m] = [_[p][m], k];
                  break;
                case "S":
                  pe = !0, _[p][m] = [_[p][m], "S5S"];
                  break;
                case "G":
                  break;
                case "R":
                  Me = parseInt(M[x].slice(1)) - 1;
                  break;
                case "C":
                  Se = parseInt(M[x].slice(1)) - 1;
                  break;
                default:
                  if (d && d.WTF)
                    throw new Error("SYLK bad record " + O);
              }
            if (le && (_[p][m] && _[p][m].length == 2 ? _[p][m][0] = J : _[p][m] = J, R = null), pe) {
              if (me)
                throw new Error("SYLK shared formula cannot have own formula");
              var B = Me > -1 && _[Me][Se];
              if (!B || !B[1])
                throw new Error("SYLK shared formula cannot find base");
              _[p][m][1] = Q_(B[1], { r: p - Me, c: m - Se });
            }
            break;
          case "F":
            var D = 0;
            for (x = 1; x < M.length; ++x)
              switch (M[x].charAt(0)) {
                case "X":
                  m = parseInt(M[x].slice(1)) - 1, ++D;
                  break;
                case "Y":
                  for (p = parseInt(M[x].slice(1)) - 1, F = _.length; F <= p; ++F)
                    _[F] = [];
                  break;
                case "M":
                  N = parseInt(M[x].slice(1)) / 20;
                  break;
                case "F":
                  break;
                case "G":
                  break;
                case "P":
                  R = C[parseInt(M[x].slice(1))];
                  break;
                case "S":
                  break;
                case "D":
                  break;
                case "N":
                  break;
                case "W":
                  for (P = M[x].slice(1).split(" "), F = parseInt(P[0], 10); F <= parseInt(P[1], 10); ++F)
                    N = parseInt(P[2], 10), L[F - 1] = N === 0 ? { hidden: !0 } : { wch: N }, p0(L[F - 1]);
                  break;
                case "C":
                  m = parseInt(M[x].slice(1)) - 1, L[m] || (L[m] = {});
                  break;
                case "R":
                  p = parseInt(M[x].slice(1)) - 1, b[p] || (b[p] = {}), N > 0 ? (b[p].hpt = N, b[p].hpx = fu(N)) : N === 0 && (b[p].hidden = !0);
                  break;
                default:
                  if (d && d.WTF)
                    throw new Error("SYLK bad record " + O);
              }
            D < 1 && (R = null);
            break;
          default:
            if (d && d.WTF)
              throw new Error("SYLK bad record " + O);
        }
    }
    return b.length > 0 && (G["!rows"] = b), L.length > 0 && (G["!cols"] = L), d && d.sheetRows && (_ = _.slice(0, d.sheetRows)), [_, G];
  }
  function s(h, d) {
    var v = i(h, d), p = v[0], m = v[1], g = Gn(p, d);
    return st(m).forEach(function(x) {
      g[x] = m[x];
    }), g;
  }
  function o(h, d) {
    return cn(s(h, d), d);
  }
  function l(h, d, v, p) {
    var m = "C;Y" + (v + 1) + ";X" + (p + 1) + ";K";
    switch (h.t) {
      case "n":
        m += h.v || 0, h.f && !h.F && (m += ";E" + g0(h.f, { r: v, c: p }));
        break;
      case "b":
        m += h.v ? "TRUE" : "FALSE";
        break;
      case "e":
        m += h.w || h.v;
        break;
      case "d":
        m += '"' + (h.w || h.v) + '"';
        break;
      case "s":
        m += '"' + h.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
        break;
    }
    return m;
  }
  function f(h, d) {
    d.forEach(function(v, p) {
      var m = "F;W" + (p + 1) + " " + (p + 1) + " ";
      v.hidden ? m += "0" : (typeof v.width == "number" && !v.wpx && (v.wpx = ya(v.width)), typeof v.wpx == "number" && !v.wch && (v.wch = wa(v.wpx)), typeof v.wch == "number" && (m += Math.round(v.wch))), m.charAt(m.length - 1) != " " && h.push(m);
    });
  }
  function c(h, d) {
    d.forEach(function(v, p) {
      var m = "F;";
      v.hidden ? m += "M0;" : v.hpt ? m += "M" + 20 * v.hpt + ";" : v.hpx && (m += "M" + 20 * Ea(v.hpx) + ";"), m.length > 2 && h.push(m + "R" + (p + 1));
    });
  }
  function u(h, d) {
    var v = ["ID;PWXL;N;E"], p = [], m = Pe(h["!ref"]), g, x = Array.isArray(h), _ = `\r
`;
    v.push("P;PGeneral"), v.push("F;P0;DG0G8;M255"), h["!cols"] && f(v, h["!cols"]), h["!rows"] && c(v, h["!rows"]), v.push("B;Y" + (m.e.r - m.s.r + 1) + ";X" + (m.e.c - m.s.c + 1) + ";D" + [m.s.c, m.s.r, m.e.c, m.e.r].join(" "));
    for (var C = m.s.r; C <= m.e.r; ++C)
      for (var R = m.s.c; R <= m.e.c; ++R) {
        var G = ke({ r: C, c: R });
        g = x ? (h[C] || [])[R] : h[G], !(!g || g.v == null && (!g.f || g.F)) && p.push(l(g, h, C, R));
      }
    return v.join(_) + _ + p.join(_) + _ + "E" + _;
  }
  return {
    to_workbook: o,
    to_sheet: s,
    from_sheet: u
  };
}(), e_ = /* @__PURE__ */ function() {
  function e(a, s) {
    switch (s.type) {
      case "base64":
        return t(xr(a), s);
      case "binary":
        return t(a, s);
      case "buffer":
        return t(Ae && Buffer.isBuffer(a) ? a.toString("binary") : Oi(a), s);
      case "array":
        return t(Ya(a), s);
    }
    throw new Error("Unrecognized type " + s.type);
  }
  function t(a, s) {
    for (var o = a.split(`
`), l = -1, f = -1, c = 0, u = []; c !== o.length; ++c) {
      if (o[c].trim() === "BOT") {
        u[++l] = [], f = 0;
        continue;
      }
      if (!(l < 0)) {
        var h = o[c].trim().split(","), d = h[0], v = h[1];
        ++c;
        for (var p = o[c] || ""; (p.match(/["]/g) || []).length & 1 && c < o.length - 1; )
          p += `
` + o[++c];
        switch (p = p.trim(), +d) {
          case -1:
            if (p === "BOT") {
              u[++l] = [], f = 0;
              continue;
            } else if (p !== "EOD")
              throw new Error("Unrecognized DIF special command " + p);
            break;
          case 0:
            p === "TRUE" ? u[l][f] = !0 : p === "FALSE" ? u[l][f] = !1 : isNaN(gr(v)) ? isNaN(yi(v).getDate()) ? u[l][f] = v : u[l][f] = wt(v) : u[l][f] = gr(v), ++f;
            break;
          case 1:
            p = p.slice(1, p.length - 1), p = p.replace(/""/g, '"'), p && p.match(/^=".*"$/) && (p = p.slice(2, -1)), u[l][f++] = p !== "" ? p : null;
            break;
        }
        if (p === "EOD")
          break;
      }
    }
    return s && s.sheetRows && (u = u.slice(0, s.sheetRows)), u;
  }
  function r(a, s) {
    return Gn(e(a, s), s);
  }
  function n(a, s) {
    return cn(r(a, s), s);
  }
  var i = /* @__PURE__ */ function() {
    var a = function(l, f, c, u, h) {
      l.push(f), l.push(c + "," + u), l.push('"' + h.replace(/"/g, '""') + '"');
    }, s = function(l, f, c, u) {
      l.push(f + "," + c), l.push(f == 1 ? '"' + u.replace(/"/g, '""') + '"' : u);
    };
    return function(l) {
      var f = [], c = Pe(l["!ref"]), u, h = Array.isArray(l);
      a(f, "TABLE", 0, 1, "sheetjs"), a(f, "VECTORS", 0, c.e.r - c.s.r + 1, ""), a(f, "TUPLES", 0, c.e.c - c.s.c + 1, ""), a(f, "DATA", 0, 0, "");
      for (var d = c.s.r; d <= c.e.r; ++d) {
        s(f, -1, 0, "BOT");
        for (var v = c.s.c; v <= c.e.c; ++v) {
          var p = ke({ r: d, c: v });
          if (u = h ? (l[d] || [])[v] : l[p], !u) {
            s(f, 1, 0, "");
            continue;
          }
          switch (u.t) {
            case "n":
              var m = u.w;
              !m && u.v != null && (m = u.v), m == null ? u.f && !u.F ? s(f, 1, 0, "=" + u.f) : s(f, 1, 0, "") : s(f, 0, m, "V");
              break;
            case "b":
              s(f, 0, u.v ? 1 : 0, u.v ? "TRUE" : "FALSE");
              break;
            case "s":
              s(f, 1, 0, isNaN(u.v) ? u.v : '="' + u.v + '"');
              break;
            case "d":
              u.w || (u.w = Mr(u.z || Ue[14], At(wt(u.v)))), s(f, 0, u.w, "V");
              break;
            default:
              s(f, 1, 0, "");
          }
        }
      }
      s(f, -1, 0, "EOD");
      var g = `\r
`, x = f.join(g);
      return x;
    };
  }();
  return {
    to_workbook: n,
    to_sheet: r,
    from_sheet: i
  };
}(), au = /* @__PURE__ */ function() {
  function e(u) {
    return u.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, `
`);
  }
  function t(u) {
    return u.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function r(u, h) {
    for (var d = u.split(`
`), v = -1, p = -1, m = 0, g = []; m !== d.length; ++m) {
      var x = d[m].trim().split(":");
      if (x[0] === "cell") {
        var _ = Ze(x[1]);
        if (g.length <= _.r)
          for (v = g.length; v <= _.r; ++v)
            g[v] || (g[v] = []);
        switch (v = _.r, p = _.c, x[2]) {
          case "t":
            g[v][p] = e(x[3]);
            break;
          case "v":
            g[v][p] = +x[3];
            break;
          case "vtf":
            var C = x[x.length - 1];
          case "vtc":
            switch (x[3]) {
              case "nl":
                g[v][p] = !!+x[4];
                break;
              default:
                g[v][p] = +x[4];
                break;
            }
            x[2] == "vtf" && (g[v][p] = [g[v][p], C]);
        }
      }
    }
    return h && h.sheetRows && (g = g.slice(0, h.sheetRows)), g;
  }
  function n(u, h) {
    return Gn(r(u, h), h);
  }
  function i(u, h) {
    return cn(n(u, h), h);
  }
  var a = [
    "socialcalc:version:1.5",
    "MIME-Version: 1.0",
    "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"
  ].join(`
`), s = [
    "--SocialCalcSpreadsheetControlSave",
    "Content-type: text/plain; charset=UTF-8"
  ].join(`
`) + `
`, o = [
    "# SocialCalc Spreadsheet Control Save",
    "part:sheet"
  ].join(`
`), l = "--SocialCalcSpreadsheetControlSave--";
  function f(u) {
    if (!u || !u["!ref"])
      return "";
    for (var h = [], d = [], v, p = "", m = It(u["!ref"]), g = Array.isArray(u), x = m.s.r; x <= m.e.r; ++x)
      for (var _ = m.s.c; _ <= m.e.c; ++_)
        if (p = ke({ r: x, c: _ }), v = g ? (u[x] || [])[_] : u[p], !(!v || v.v == null || v.t === "z")) {
          switch (d = ["cell", p, "t"], v.t) {
            case "s":
            case "str":
              d.push(t(v.v));
              break;
            case "n":
              v.f ? (d[2] = "vtf", d[3] = "n", d[4] = v.v, d[5] = t(v.f)) : (d[2] = "v", d[3] = v.v);
              break;
            case "b":
              d[2] = "vt" + (v.f ? "f" : "c"), d[3] = "nl", d[4] = v.v ? "1" : "0", d[5] = t(v.f || (v.v ? "TRUE" : "FALSE"));
              break;
            case "d":
              var C = At(wt(v.v));
              d[2] = "vtc", d[3] = "nd", d[4] = "" + C, d[5] = v.w || Mr(v.z || Ue[14], C);
              break;
            case "e":
              continue;
          }
          h.push(d.join(":"));
        }
    return h.push("sheet:c:" + (m.e.c - m.s.c + 1) + ":r:" + (m.e.r - m.s.r + 1) + ":tvf:1"), h.push("valueformat:1:text-wiki"), h.join(`
`);
  }
  function c(u) {
    return [a, s, o, s, f(u), l].join(`
`);
  }
  return {
    to_workbook: i,
    to_sheet: n,
    from_sheet: c
  };
}(), t_ = /* @__PURE__ */ function() {
  function e(c, u, h, d, v) {
    v.raw ? u[h][d] = c : c === "" || (c === "TRUE" ? u[h][d] = !0 : c === "FALSE" ? u[h][d] = !1 : isNaN(gr(c)) ? isNaN(yi(c).getDate()) ? u[h][d] = c : u[h][d] = wt(c) : u[h][d] = gr(c));
  }
  function t(c, u) {
    var h = u || {}, d = [];
    if (!c || c.length === 0)
      return d;
    for (var v = c.split(/[\r\n]/), p = v.length - 1; p >= 0 && v[p].length === 0; )
      --p;
    for (var m = 10, g = 0, x = 0; x <= p; ++x)
      g = v[x].indexOf(" "), g == -1 ? g = v[x].length : g++, m = Math.max(m, g);
    for (x = 0; x <= p; ++x) {
      d[x] = [];
      var _ = 0;
      for (e(v[x].slice(0, m).trim(), d, x, _, h), _ = 1; _ <= (v[x].length - m) / 10 + 1; ++_)
        e(v[x].slice(m + (_ - 1) * 10, m + _ * 10).trim(), d, x, _, h);
    }
    return h.sheetRows && (d = d.slice(0, h.sheetRows)), d;
  }
  var r = {
    /*::[*/
    44: ",",
    /*::[*/
    9: "	",
    /*::[*/
    59: ";",
    /*::[*/
    124: "|"
  }, n = {
    /*::[*/
    44: 3,
    /*::[*/
    9: 2,
    /*::[*/
    59: 1,
    /*::[*/
    124: 0
  };
  function i(c) {
    for (var u = {}, h = !1, d = 0, v = 0; d < c.length; ++d)
      (v = c.charCodeAt(d)) == 34 ? h = !h : !h && v in r && (u[v] = (u[v] || 0) + 1);
    v = [];
    for (d in u)
      Object.prototype.hasOwnProperty.call(u, d) && v.push([u[d], d]);
    if (!v.length) {
      u = n;
      for (d in u)
        Object.prototype.hasOwnProperty.call(u, d) && v.push([u[d], d]);
    }
    return v.sort(function(p, m) {
      return p[0] - m[0] || n[p[1]] - n[m[1]];
    }), r[v.pop()[1]] || 44;
  }
  function a(c, u) {
    var h = u || {}, d = "", v = h.dense ? [] : {}, p = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    c.slice(0, 4) == "sep=" ? c.charCodeAt(5) == 13 && c.charCodeAt(6) == 10 ? (d = c.charAt(4), c = c.slice(7)) : c.charCodeAt(5) == 13 || c.charCodeAt(5) == 10 ? (d = c.charAt(4), c = c.slice(6)) : d = i(c.slice(0, 1024)) : h && h.FS ? d = h.FS : d = i(c.slice(0, 1024));
    var m = 0, g = 0, x = 0, _ = 0, C = 0, R = d.charCodeAt(0), G = !1, b = 0, L = c.charCodeAt(0);
    c = c.replace(/\r\n/mg, `
`);
    var P = h.dateNF != null ? vx(h.dateNF) : null;
    function N() {
      var F = c.slice(_, C), O = {};
      if (F.charAt(0) == '"' && F.charAt(F.length - 1) == '"' && (F = F.slice(1, -1).replace(/""/g, '"')), F.length === 0)
        O.t = "z";
      else if (h.raw)
        O.t = "s", O.v = F;
      else if (F.trim().length === 0)
        O.t = "s", O.v = F;
      else if (F.charCodeAt(0) == 61)
        F.charCodeAt(1) == 34 && F.charCodeAt(F.length - 1) == 34 ? (O.t = "s", O.v = F.slice(2, -1).replace(/""/g, '"')) : Z_(F) ? (O.t = "n", O.f = F.slice(1)) : (O.t = "s", O.v = F);
      else if (F == "TRUE")
        O.t = "b", O.v = !0;
      else if (F == "FALSE")
        O.t = "b", O.v = !1;
      else if (!isNaN(x = gr(F)))
        O.t = "n", h.cellText !== !1 && (O.w = F), O.v = x;
      else if (!isNaN(yi(F).getDate()) || P && F.match(P)) {
        O.z = h.dateNF || Ue[14];
        var M = 0;
        P && F.match(P) && (F = xx(F, h.dateNF, F.match(P) || []), M = 1), h.cellDates ? (O.t = "d", O.v = wt(F, M)) : (O.t = "n", O.v = At(wt(F, M))), h.cellText !== !1 && (O.w = Mr(O.z, O.v instanceof Date ? At(O.v) : O.v)), h.cellNF || delete O.z;
      } else
        O.t = "s", O.v = F;
      if (O.t == "z" || (h.dense ? (v[m] || (v[m] = []), v[m][g] = O) : v[ke({ c: g, r: m })] = O), _ = C + 1, L = c.charCodeAt(_), p.e.c < g && (p.e.c = g), p.e.r < m && (p.e.r = m), b == R)
        ++g;
      else if (g = 0, ++m, h.sheetRows && h.sheetRows <= m)
        return !0;
    }
    e:
      for (; C < c.length; ++C)
        switch (b = c.charCodeAt(C)) {
          case 34:
            L === 34 && (G = !G);
            break;
          case R:
          case 10:
          case 13:
            if (!G && N())
              break e;
            break;
        }
    return C - _ > 0 && N(), v["!ref"] = ze(p), v;
  }
  function s(c, u) {
    return !(u && u.PRN) || u.FS || c.slice(0, 4) == "sep=" || c.indexOf("	") >= 0 || c.indexOf(",") >= 0 || c.indexOf(";") >= 0 ? a(c, u) : Gn(t(c, u), u);
  }
  function o(c, u) {
    var h = "", d = u.type == "string" ? [0, 0, 0, 0] : dS(c, u);
    switch (u.type) {
      case "base64":
        h = xr(c);
        break;
      case "binary":
        h = c;
        break;
      case "buffer":
        u.codepage == 65001 ? h = c.toString("utf8") : u.codepage && typeof Jr < "u" ? h = Jr.utils.decode(u.codepage, c) : h = Ae && Buffer.isBuffer(c) ? c.toString("binary") : Oi(c);
        break;
      case "array":
        h = Ya(c);
        break;
      case "string":
        h = c;
        break;
      default:
        throw new Error("Unrecognized type " + u.type);
    }
    return d[0] == 239 && d[1] == 187 && d[2] == 191 ? h = ci(h.slice(3)) : u.type != "string" && u.type != "buffer" && u.codepage == 65001 ? h = ci(h) : u.type == "binary" && typeof Jr < "u" && u.codepage && (h = Jr.utils.decode(u.codepage, Jr.utils.encode(28591, h))), h.slice(0, 19) == "socialcalc:version:" ? au.to_sheet(u.type == "string" ? h : ci(h), u) : s(h, u);
  }
  function l(c, u) {
    return cn(o(c, u), u);
  }
  function f(c) {
    for (var u = [], h = Pe(c["!ref"]), d, v = Array.isArray(c), p = h.s.r; p <= h.e.r; ++p) {
      for (var m = [], g = h.s.c; g <= h.e.c; ++g) {
        var x = ke({ r: p, c: g });
        if (d = v ? (c[p] || [])[g] : c[x], !d || d.v == null) {
          m.push("          ");
          continue;
        }
        for (var _ = (d.w || (_r(d), d.w) || "").slice(0, 10); _.length < 10; )
          _ += " ";
        m.push(_ + (g === 0 ? " " : ""));
      }
      u.push(m.join(""));
    }
    return u.join(`
`);
  }
  return {
    to_workbook: l,
    to_sheet: o,
    from_sheet: f
  };
}(), Hl = /* @__PURE__ */ function() {
  function e(k, B, D) {
    if (k) {
      bt(k, k.l || 0);
      for (var I = D.Enum || Me; k.l < k.length; ) {
        var j = k.read_shift(2), ee = I[j] || I[65535], fe = k.read_shift(2), oe = k.l + fe, re = ee.f && ee.f(k, fe, D);
        if (k.l = oe, B(re, ee, j))
          return;
      }
    }
  }
  function t(k, B) {
    switch (B.type) {
      case "base64":
        return r(Gt(xr(k)), B);
      case "binary":
        return r(Gt(k), B);
      case "buffer":
      case "array":
        return r(k, B);
    }
    throw "Unsupported type " + B.type;
  }
  function r(k, B) {
    if (!k)
      return k;
    var D = B || {}, I = D.dense ? [] : {}, j = "Sheet1", ee = "", fe = 0, oe = {}, re = [], Ce = [], _e = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Ye = D.sheetRows || 0;
    if (k[2] == 0 && (k[3] == 8 || k[3] == 9) && k.length >= 16 && k[14] == 5 && k[15] === 108)
      throw new Error("Unsupported Works 3 for Mac file");
    if (k[2] == 2)
      D.Enum = Me, e(k, function(de, mt, cr) {
        switch (cr) {
          case 0:
            D.vers = de, de >= 4096 && (D.qpro = !0);
            break;
          case 6:
            _e = de;
            break;
          case 204:
            de && (ee = de);
            break;
          case 222:
            ee = de;
            break;
          case 15:
          case 51:
            D.qpro || (de[1].v = de[1].v.slice(1));
          case 13:
          case 14:
          case 16:
            cr == 14 && (de[2] & 112) == 112 && (de[2] & 15) > 1 && (de[2] & 15) < 15 && (de[1].z = D.dateNF || Ue[14], D.cellDates && (de[1].t = "d", de[1].v = Ec(de[1].v))), D.qpro && de[3] > fe && (I["!ref"] = ze(_e), oe[j] = I, re.push(j), I = D.dense ? [] : {}, _e = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, fe = de[3], j = ee || "Sheet" + (fe + 1), ee = "");
            var Gr = D.dense ? (I[de[0].r] || [])[de[0].c] : I[ke(de[0])];
            if (Gr) {
              Gr.t = de[1].t, Gr.v = de[1].v, de[1].z != null && (Gr.z = de[1].z), de[1].f != null && (Gr.f = de[1].f);
              break;
            }
            D.dense ? (I[de[0].r] || (I[de[0].r] = []), I[de[0].r][de[0].c] = de[1]) : I[ke(de[0])] = de[1];
            break;
        }
      }, D);
    else if (k[2] == 26 || k[2] == 14)
      D.Enum = Se, k[2] == 14 && (D.qpro = !0, k.l = 0), e(k, function(de, mt, cr) {
        switch (cr) {
          case 204:
            j = de;
            break;
          case 22:
            de[1].v = de[1].v.slice(1);
          case 23:
          case 24:
          case 25:
          case 37:
          case 39:
          case 40:
            if (de[3] > fe && (I["!ref"] = ze(_e), oe[j] = I, re.push(j), I = D.dense ? [] : {}, _e = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, fe = de[3], j = "Sheet" + (fe + 1)), Ye > 0 && de[0].r >= Ye)
              break;
            D.dense ? (I[de[0].r] || (I[de[0].r] = []), I[de[0].r][de[0].c] = de[1]) : I[ke(de[0])] = de[1], _e.e.c < de[0].c && (_e.e.c = de[0].c), _e.e.r < de[0].r && (_e.e.r = de[0].r);
            break;
          case 27:
            de[14e3] && (Ce[de[14e3][0]] = de[14e3][1]);
            break;
          case 1537:
            Ce[de[0]] = de[1], de[0] == fe && (j = de[1]);
            break;
        }
      }, D);
    else
      throw new Error("Unrecognized LOTUS BOF " + k[2]);
    if (I["!ref"] = ze(_e), oe[ee || j] = I, re.push(ee || j), !Ce.length)
      return { SheetNames: re, Sheets: oe };
    for (var we = {}, Ft = [], Ie = 0; Ie < Ce.length; ++Ie)
      oe[re[Ie]] ? (Ft.push(Ce[Ie] || re[Ie]), we[Ce[Ie]] = oe[Ce[Ie]] || oe[re[Ie]]) : (Ft.push(Ce[Ie]), we[Ce[Ie]] = { "!ref": "A1" });
    return { SheetNames: Ft, Sheets: we };
  }
  function n(k, B) {
    var D = B || {};
    if (+D.codepage >= 0 && xi(+D.codepage), D.type == "string")
      throw new Error("Cannot write WK1 to JS string");
    var I = Tt(), j = Pe(k["!ref"]), ee = Array.isArray(k), fe = [];
    ae(I, 0, a(1030)), ae(I, 6, l(j));
    for (var oe = Math.min(j.e.r, 8191), re = j.s.r; re <= oe; ++re)
      for (var Ce = at(re), _e = j.s.c; _e <= j.e.c; ++_e) {
        re === j.s.r && (fe[_e] = ht(_e));
        var Ye = fe[_e] + Ce, we = ee ? (k[re] || [])[_e] : k[Ye];
        if (!(!we || we.t == "z"))
          if (we.t == "n")
            (we.v | 0) == we.v && we.v >= -32768 && we.v <= 32767 ? ae(I, 13, d(re, _e, we.v)) : ae(I, 14, p(re, _e, we.v));
          else {
            var Ft = _r(we);
            ae(I, 15, u(re, _e, Ft.slice(0, 239)));
          }
      }
    return ae(I, 1), I.end();
  }
  function i(k, B) {
    var D = B || {};
    if (+D.codepage >= 0 && xi(+D.codepage), D.type == "string")
      throw new Error("Cannot write WK3 to JS string");
    var I = Tt();
    ae(I, 0, s(k));
    for (var j = 0, ee = 0; j < k.SheetNames.length; ++j)
      (k.Sheets[k.SheetNames[j]] || {})["!ref"] && ae(I, 27, me(k.SheetNames[j], ee++));
    var fe = 0;
    for (j = 0; j < k.SheetNames.length; ++j) {
      var oe = k.Sheets[k.SheetNames[j]];
      if (!(!oe || !oe["!ref"])) {
        for (var re = Pe(oe["!ref"]), Ce = Array.isArray(oe), _e = [], Ye = Math.min(re.e.r, 8191), we = re.s.r; we <= Ye; ++we)
          for (var Ft = at(we), Ie = re.s.c; Ie <= re.e.c; ++Ie) {
            we === re.s.r && (_e[Ie] = ht(Ie));
            var de = _e[Ie] + Ft, mt = Ce ? (oe[we] || [])[Ie] : oe[de];
            if (!(!mt || mt.t == "z"))
              if (mt.t == "n")
                ae(I, 23, N(we, Ie, fe, mt.v));
              else {
                var cr = _r(mt);
                ae(I, 22, b(we, Ie, fe, cr.slice(0, 239)));
              }
          }
        ++fe;
      }
    }
    return ae(I, 1), I.end();
  }
  function a(k) {
    var B = X(2);
    return B.write_shift(2, k), B;
  }
  function s(k) {
    var B = X(26);
    B.write_shift(2, 4096), B.write_shift(2, 4), B.write_shift(4, 0);
    for (var D = 0, I = 0, j = 0, ee = 0; ee < k.SheetNames.length; ++ee) {
      var fe = k.SheetNames[ee], oe = k.Sheets[fe];
      if (!(!oe || !oe["!ref"])) {
        ++j;
        var re = It(oe["!ref"]);
        D < re.e.r && (D = re.e.r), I < re.e.c && (I = re.e.c);
      }
    }
    return D > 8191 && (D = 8191), B.write_shift(2, D), B.write_shift(1, j), B.write_shift(1, I), B.write_shift(2, 0), B.write_shift(2, 0), B.write_shift(1, 1), B.write_shift(1, 2), B.write_shift(4, 0), B.write_shift(4, 0), B;
  }
  function o(k, B, D) {
    var I = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return B == 8 && D.qpro ? (I.s.c = k.read_shift(1), k.l++, I.s.r = k.read_shift(2), I.e.c = k.read_shift(1), k.l++, I.e.r = k.read_shift(2), I) : (I.s.c = k.read_shift(2), I.s.r = k.read_shift(2), B == 12 && D.qpro && (k.l += 2), I.e.c = k.read_shift(2), I.e.r = k.read_shift(2), B == 12 && D.qpro && (k.l += 2), I.s.c == 65535 && (I.s.c = I.e.c = I.s.r = I.e.r = 0), I);
  }
  function l(k) {
    var B = X(8);
    return B.write_shift(2, k.s.c), B.write_shift(2, k.s.r), B.write_shift(2, k.e.c), B.write_shift(2, k.e.r), B;
  }
  function f(k, B, D) {
    var I = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return D.qpro && D.vers != 20768 ? (I[0].c = k.read_shift(1), I[3] = k.read_shift(1), I[0].r = k.read_shift(2), k.l += 2) : (I[2] = k.read_shift(1), I[0].c = k.read_shift(2), I[0].r = k.read_shift(2)), I;
  }
  function c(k, B, D) {
    var I = k.l + B, j = f(k, B, D);
    if (j[1].t = "s", D.vers == 20768) {
      k.l++;
      var ee = k.read_shift(1);
      return j[1].v = k.read_shift(ee, "utf8"), j;
    }
    return D.qpro && k.l++, j[1].v = k.read_shift(I - k.l, "cstr"), j;
  }
  function u(k, B, D) {
    var I = X(7 + D.length);
    I.write_shift(1, 255), I.write_shift(2, B), I.write_shift(2, k), I.write_shift(1, 39);
    for (var j = 0; j < I.length; ++j) {
      var ee = D.charCodeAt(j);
      I.write_shift(1, ee >= 128 ? 95 : ee);
    }
    return I.write_shift(1, 0), I;
  }
  function h(k, B, D) {
    var I = f(k, B, D);
    return I[1].v = k.read_shift(2, "i"), I;
  }
  function d(k, B, D) {
    var I = X(7);
    return I.write_shift(1, 255), I.write_shift(2, B), I.write_shift(2, k), I.write_shift(2, D, "i"), I;
  }
  function v(k, B, D) {
    var I = f(k, B, D);
    return I[1].v = k.read_shift(8, "f"), I;
  }
  function p(k, B, D) {
    var I = X(13);
    return I.write_shift(1, 255), I.write_shift(2, B), I.write_shift(2, k), I.write_shift(8, D, "f"), I;
  }
  function m(k, B, D) {
    var I = k.l + B, j = f(k, B, D);
    if (j[1].v = k.read_shift(8, "f"), D.qpro)
      k.l = I;
    else {
      var ee = k.read_shift(2);
      C(k.slice(k.l, k.l + ee), j), k.l += ee;
    }
    return j;
  }
  function g(k, B, D) {
    var I = B & 32768;
    return B &= -32769, B = (I ? k : 0) + (B >= 8192 ? B - 16384 : B), (I ? "" : "$") + (D ? ht(B) : at(B));
  }
  var x = {
    51: ["FALSE", 0],
    52: ["TRUE", 0],
    70: ["LEN", 1],
    80: ["SUM", 69],
    81: ["AVERAGEA", 69],
    82: ["COUNTA", 69],
    83: ["MINA", 69],
    84: ["MAXA", 69],
    111: ["T", 1]
  }, _ = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "",
    "+",
    "-",
    "*",
    "/",
    "^",
    "=",
    "<>",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "<=",
    ">=",
    "<",
    ">",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "&",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
    // eslint-disable-line no-mixed-spaces-and-tabs
  ];
  function C(k, B) {
    bt(k, 0);
    for (var D = [], I = 0, j = "", ee = "", fe = "", oe = ""; k.l < k.length; ) {
      var re = k[k.l++];
      switch (re) {
        case 0:
          D.push(k.read_shift(8, "f"));
          break;
        case 1:
          ee = g(B[0].c, k.read_shift(2), !0), j = g(B[0].r, k.read_shift(2), !1), D.push(ee + j);
          break;
        case 2:
          {
            var Ce = g(B[0].c, k.read_shift(2), !0), _e = g(B[0].r, k.read_shift(2), !1);
            ee = g(B[0].c, k.read_shift(2), !0), j = g(B[0].r, k.read_shift(2), !1), D.push(Ce + _e + ":" + ee + j);
          }
          break;
        case 3:
          if (k.l < k.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          D.push("(" + D.pop() + ")");
          break;
        case 5:
          D.push(k.read_shift(2));
          break;
        case 6:
          {
            for (var Ye = ""; re = k[k.l++]; )
              Ye += String.fromCharCode(re);
            D.push('"' + Ye.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          D.push("-" + D.pop());
          break;
        case 23:
          D.push("+" + D.pop());
          break;
        case 22:
          D.push("NOT(" + D.pop() + ")");
          break;
        case 20:
        case 21:
          oe = D.pop(), fe = D.pop(), D.push(["AND", "OR"][re - 20] + "(" + fe + "," + oe + ")");
          break;
        default:
          if (re < 32 && _[re])
            oe = D.pop(), fe = D.pop(), D.push(fe + _[re] + oe);
          else if (x[re]) {
            if (I = x[re][1], I == 69 && (I = k[k.l++]), I > D.length) {
              console.error("WK1 bad formula parse 0x" + re.toString(16) + ":|" + D.join("|") + "|");
              return;
            }
            var we = D.slice(-I);
            D.length -= I, D.push(x[re][0] + "(" + we.join(",") + ")");
          } else
            return re <= 7 ? console.error("WK1 invalid opcode " + re.toString(16)) : re <= 24 ? console.error("WK1 unsupported op " + re.toString(16)) : re <= 30 ? console.error("WK1 invalid opcode " + re.toString(16)) : re <= 115 ? console.error("WK1 unsupported function opcode " + re.toString(16)) : console.error("WK1 unrecognized opcode " + re.toString(16));
      }
    }
    D.length == 1 ? B[1].f = "" + D[0] : console.error("WK1 bad formula parse |" + D.join("|") + "|");
  }
  function R(k) {
    var B = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return B[0].r = k.read_shift(2), B[3] = k[k.l++], B[0].c = k[k.l++], B;
  }
  function G(k, B) {
    var D = R(k);
    return D[1].t = "s", D[1].v = k.read_shift(B - 4, "cstr"), D;
  }
  function b(k, B, D, I) {
    var j = X(6 + I.length);
    j.write_shift(2, k), j.write_shift(1, D), j.write_shift(1, B), j.write_shift(1, 39);
    for (var ee = 0; ee < I.length; ++ee) {
      var fe = I.charCodeAt(ee);
      j.write_shift(1, fe >= 128 ? 95 : fe);
    }
    return j.write_shift(1, 0), j;
  }
  function L(k, B) {
    var D = R(k);
    D[1].v = k.read_shift(2);
    var I = D[1].v >> 1;
    if (D[1].v & 1)
      switch (I & 7) {
        case 0:
          I = (I >> 3) * 5e3;
          break;
        case 1:
          I = (I >> 3) * 500;
          break;
        case 2:
          I = (I >> 3) / 20;
          break;
        case 3:
          I = (I >> 3) / 200;
          break;
        case 4:
          I = (I >> 3) / 2e3;
          break;
        case 5:
          I = (I >> 3) / 2e4;
          break;
        case 6:
          I = (I >> 3) / 16;
          break;
        case 7:
          I = (I >> 3) / 64;
          break;
      }
    return D[1].v = I, D;
  }
  function P(k, B) {
    var D = R(k), I = k.read_shift(4), j = k.read_shift(4), ee = k.read_shift(2);
    if (ee == 65535)
      return I === 0 && j === 3221225472 ? (D[1].t = "e", D[1].v = 15) : I === 0 && j === 3489660928 ? (D[1].t = "e", D[1].v = 42) : D[1].v = 0, D;
    var fe = ee & 32768;
    return ee = (ee & 32767) - 16446, D[1].v = (1 - fe * 2) * (j * Math.pow(2, ee + 32) + I * Math.pow(2, ee)), D;
  }
  function N(k, B, D, I) {
    var j = X(14);
    if (j.write_shift(2, k), j.write_shift(1, D), j.write_shift(1, B), I == 0)
      return j.write_shift(4, 0), j.write_shift(4, 0), j.write_shift(2, 65535), j;
    var ee = 0, fe = 0, oe = 0, re = 0;
    return I < 0 && (ee = 1, I = -I), fe = Math.log2(I) | 0, I /= Math.pow(2, fe - 31), re = I >>> 0, re & 2147483648 || (I /= 2, ++fe, re = I >>> 0), I -= re, re |= 2147483648, re >>>= 0, I *= Math.pow(2, 32), oe = I >>> 0, j.write_shift(4, oe), j.write_shift(4, re), fe += 16383 + (ee ? 32768 : 0), j.write_shift(2, fe), j;
  }
  function F(k, B) {
    var D = P(k);
    return k.l += B - 14, D;
  }
  function O(k, B) {
    var D = R(k), I = k.read_shift(4);
    return D[1].v = I >> 6, D;
  }
  function M(k, B) {
    var D = R(k), I = k.read_shift(8, "f");
    return D[1].v = I, D;
  }
  function V(k, B) {
    var D = M(k);
    return k.l += B - 10, D;
  }
  function J(k, B) {
    return k[k.l + B - 1] == 0 ? k.read_shift(B, "cstr") : "";
  }
  function le(k, B) {
    var D = k[k.l++];
    D > B - 1 && (D = B - 1);
    for (var I = ""; I.length < D; )
      I += String.fromCharCode(k[k.l++]);
    return I;
  }
  function he(k, B, D) {
    if (!(!D.qpro || B < 21)) {
      var I = k.read_shift(1);
      k.l += 17, k.l += 1, k.l += 2;
      var j = k.read_shift(B - 21, "cstr");
      return [I, j];
    }
  }
  function pe(k, B) {
    for (var D = {}, I = k.l + B; k.l < I; ) {
      var j = k.read_shift(2);
      if (j == 14e3) {
        for (D[j] = [0, ""], D[j][0] = k.read_shift(2); k[k.l]; )
          D[j][1] += String.fromCharCode(k[k.l]), k.l++;
        k.l++;
      }
    }
    return D;
  }
  function me(k, B) {
    var D = X(5 + k.length);
    D.write_shift(2, 14e3), D.write_shift(2, B);
    for (var I = 0; I < k.length; ++I) {
      var j = k.charCodeAt(I);
      D[D.l++] = j > 127 ? 95 : j;
    }
    return D[D.l++] = 0, D;
  }
  var Me = {
    /*::[*/
    0: { n: "BOF", f: eu },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "CALCMODE" },
    /*::[*/
    3: { n: "CALCORDER" },
    /*::[*/
    4: { n: "SPLIT" },
    /*::[*/
    5: { n: "SYNC" },
    /*::[*/
    6: { n: "RANGE", f: o },
    /*::[*/
    7: { n: "WINDOW1" },
    /*::[*/
    8: { n: "COLW1" },
    /*::[*/
    9: { n: "WINTWO" },
    /*::[*/
    10: { n: "COLW2" },
    /*::[*/
    11: { n: "NAME" },
    /*::[*/
    12: { n: "BLANK" },
    /*::[*/
    13: { n: "INTEGER", f: h },
    /*::[*/
    14: { n: "NUMBER", f: v },
    /*::[*/
    15: { n: "LABEL", f: c },
    /*::[*/
    16: { n: "FORMULA", f: m },
    /*::[*/
    24: { n: "TABLE" },
    /*::[*/
    25: { n: "ORANGE" },
    /*::[*/
    26: { n: "PRANGE" },
    /*::[*/
    27: { n: "SRANGE" },
    /*::[*/
    28: { n: "FRANGE" },
    /*::[*/
    29: { n: "KRANGE1" },
    /*::[*/
    32: { n: "HRANGE" },
    /*::[*/
    35: { n: "KRANGE2" },
    /*::[*/
    36: { n: "PROTEC" },
    /*::[*/
    37: { n: "FOOTER" },
    /*::[*/
    38: { n: "HEADER" },
    /*::[*/
    39: { n: "SETUP" },
    /*::[*/
    40: { n: "MARGINS" },
    /*::[*/
    41: { n: "LABELFMT" },
    /*::[*/
    42: { n: "TITLES" },
    /*::[*/
    43: { n: "SHEETJS" },
    /*::[*/
    45: { n: "GRAPH" },
    /*::[*/
    46: { n: "NGRAPH" },
    /*::[*/
    47: { n: "CALCCOUNT" },
    /*::[*/
    48: { n: "UNFORMATTED" },
    /*::[*/
    49: { n: "CURSORW12" },
    /*::[*/
    50: { n: "WINDOW" },
    /*::[*/
    51: { n: "STRING", f: c },
    /*::[*/
    55: { n: "PASSWORD" },
    /*::[*/
    56: { n: "LOCKED" },
    /*::[*/
    60: { n: "QUERY" },
    /*::[*/
    61: { n: "QUERYNAME" },
    /*::[*/
    62: { n: "PRINT" },
    /*::[*/
    63: { n: "PRINTNAME" },
    /*::[*/
    64: { n: "GRAPH2" },
    /*::[*/
    65: { n: "GRAPHNAME" },
    /*::[*/
    66: { n: "ZOOM" },
    /*::[*/
    67: { n: "SYMSPLIT" },
    /*::[*/
    68: { n: "NSROWS" },
    /*::[*/
    69: { n: "NSCOLS" },
    /*::[*/
    70: { n: "RULER" },
    /*::[*/
    71: { n: "NNAME" },
    /*::[*/
    72: { n: "ACOMM" },
    /*::[*/
    73: { n: "AMACRO" },
    /*::[*/
    74: { n: "PARSE" },
    /*::[*/
    102: { n: "PRANGES??" },
    /*::[*/
    103: { n: "RRANGES??" },
    /*::[*/
    104: { n: "FNAME??" },
    /*::[*/
    105: { n: "MRANGES??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: J },
    /*::[*/
    222: { n: "SHEETNAMELP", f: le },
    /*::[*/
    65535: { n: "" }
  }, Se = {
    /*::[*/
    0: { n: "BOF" },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "PASSWORD" },
    /*::[*/
    3: { n: "CALCSET" },
    /*::[*/
    4: { n: "WINDOWSET" },
    /*::[*/
    5: { n: "SHEETCELLPTR" },
    /*::[*/
    6: { n: "SHEETLAYOUT" },
    /*::[*/
    7: { n: "COLUMNWIDTH" },
    /*::[*/
    8: { n: "HIDDENCOLUMN" },
    /*::[*/
    9: { n: "USERRANGE" },
    /*::[*/
    10: { n: "SYSTEMRANGE" },
    /*::[*/
    11: { n: "ZEROFORCE" },
    /*::[*/
    12: { n: "SORTKEYDIR" },
    /*::[*/
    13: { n: "FILESEAL" },
    /*::[*/
    14: { n: "DATAFILLNUMS" },
    /*::[*/
    15: { n: "PRINTMAIN" },
    /*::[*/
    16: { n: "PRINTSTRING" },
    /*::[*/
    17: { n: "GRAPHMAIN" },
    /*::[*/
    18: { n: "GRAPHSTRING" },
    /*::[*/
    19: { n: "??" },
    /*::[*/
    20: { n: "ERRCELL" },
    /*::[*/
    21: { n: "NACELL" },
    /*::[*/
    22: { n: "LABEL16", f: G },
    /*::[*/
    23: { n: "NUMBER17", f: P },
    /*::[*/
    24: { n: "NUMBER18", f: L },
    /*::[*/
    25: { n: "FORMULA19", f: F },
    /*::[*/
    26: { n: "FORMULA1A" },
    /*::[*/
    27: { n: "XFORMAT", f: pe },
    /*::[*/
    28: { n: "DTLABELMISC" },
    /*::[*/
    29: { n: "DTLABELCELL" },
    /*::[*/
    30: { n: "GRAPHWINDOW" },
    /*::[*/
    31: { n: "CPA" },
    /*::[*/
    32: { n: "LPLAUTO" },
    /*::[*/
    33: { n: "QUERY" },
    /*::[*/
    34: { n: "HIDDENSHEET" },
    /*::[*/
    35: { n: "??" },
    /*::[*/
    37: { n: "NUMBER25", f: O },
    /*::[*/
    38: { n: "??" },
    /*::[*/
    39: { n: "NUMBER27", f: M },
    /*::[*/
    40: { n: "FORMULA28", f: V },
    /*::[*/
    142: { n: "??" },
    /*::[*/
    147: { n: "??" },
    /*::[*/
    150: { n: "??" },
    /*::[*/
    151: { n: "??" },
    /*::[*/
    152: { n: "??" },
    /*::[*/
    153: { n: "??" },
    /*::[*/
    154: { n: "??" },
    /*::[*/
    155: { n: "??" },
    /*::[*/
    156: { n: "??" },
    /*::[*/
    163: { n: "??" },
    /*::[*/
    174: { n: "??" },
    /*::[*/
    175: { n: "??" },
    /*::[*/
    176: { n: "??" },
    /*::[*/
    177: { n: "??" },
    /*::[*/
    184: { n: "??" },
    /*::[*/
    185: { n: "??" },
    /*::[*/
    186: { n: "??" },
    /*::[*/
    187: { n: "??" },
    /*::[*/
    188: { n: "??" },
    /*::[*/
    195: { n: "??" },
    /*::[*/
    201: { n: "??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: J },
    /*::[*/
    205: { n: "??" },
    /*::[*/
    206: { n: "??" },
    /*::[*/
    207: { n: "??" },
    /*::[*/
    208: { n: "??" },
    /*::[*/
    256: { n: "??" },
    /*::[*/
    259: { n: "??" },
    /*::[*/
    260: { n: "??" },
    /*::[*/
    261: { n: "??" },
    /*::[*/
    262: { n: "??" },
    /*::[*/
    263: { n: "??" },
    /*::[*/
    265: { n: "??" },
    /*::[*/
    266: { n: "??" },
    /*::[*/
    267: { n: "??" },
    /*::[*/
    268: { n: "??" },
    /*::[*/
    270: { n: "??" },
    /*::[*/
    271: { n: "??" },
    /*::[*/
    384: { n: "??" },
    /*::[*/
    389: { n: "??" },
    /*::[*/
    390: { n: "??" },
    /*::[*/
    393: { n: "??" },
    /*::[*/
    396: { n: "??" },
    /*::[*/
    512: { n: "??" },
    /*::[*/
    514: { n: "??" },
    /*::[*/
    513: { n: "??" },
    /*::[*/
    516: { n: "??" },
    /*::[*/
    517: { n: "??" },
    /*::[*/
    640: { n: "??" },
    /*::[*/
    641: { n: "??" },
    /*::[*/
    642: { n: "??" },
    /*::[*/
    643: { n: "??" },
    /*::[*/
    644: { n: "??" },
    /*::[*/
    645: { n: "??" },
    /*::[*/
    646: { n: "??" },
    /*::[*/
    647: { n: "??" },
    /*::[*/
    648: { n: "??" },
    /*::[*/
    658: { n: "??" },
    /*::[*/
    659: { n: "??" },
    /*::[*/
    660: { n: "??" },
    /*::[*/
    661: { n: "??" },
    /*::[*/
    662: { n: "??" },
    /*::[*/
    665: { n: "??" },
    /*::[*/
    666: { n: "??" },
    /*::[*/
    768: { n: "??" },
    /*::[*/
    772: { n: "??" },
    /*::[*/
    1537: { n: "SHEETINFOQP", f: he },
    /*::[*/
    1600: { n: "??" },
    /*::[*/
    1602: { n: "??" },
    /*::[*/
    1793: { n: "??" },
    /*::[*/
    1794: { n: "??" },
    /*::[*/
    1795: { n: "??" },
    /*::[*/
    1796: { n: "??" },
    /*::[*/
    1920: { n: "??" },
    /*::[*/
    2048: { n: "??" },
    /*::[*/
    2049: { n: "??" },
    /*::[*/
    2052: { n: "??" },
    /*::[*/
    2688: { n: "??" },
    /*::[*/
    10998: { n: "??" },
    /*::[*/
    12849: { n: "??" },
    /*::[*/
    28233: { n: "??" },
    /*::[*/
    28484: { n: "??" },
    /*::[*/
    65535: { n: "" }
  };
  return {
    sheet_to_wk1: n,
    book_to_wk3: i,
    to_workbook: t
  };
}(), r_ = /^\s|\s$|[\t\n\r]/;
function su(e, t) {
  if (!t.bookSST)
    return "";
  var r = [Ve];
  r[r.length] = ie("sst", null, {
    xmlns: Vn[0],
    count: e.Count,
    uniqueCount: e.Unique
  });
  for (var n = 0; n != e.length; ++n)
    if (e[n] != null) {
      var i = e[n], a = "<si>";
      i.r ? a += i.r : (a += "<t", i.t || (i.t = ""), i.t.match(r_) && (a += ' xml:space="preserve"'), a += ">" + be(i.t) + "</t>"), a += "</si>", r[r.length] = a;
    }
  return r.length > 2 && (r[r.length] = "</sst>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function n_(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function i_(e, t) {
  return t || (t = X(8)), t.write_shift(4, e.Count), t.write_shift(4, e.Unique), t;
}
var a_ = qx;
function s_(e) {
  var t = Tt();
  Q(t, 159, i_(e));
  for (var r = 0; r < e.length; ++r)
    Q(t, 19, a_(e[r]));
  return Q(
    t,
    160
    /* BrtEndSst */
  ), t.end();
}
function o_(e) {
  for (var t = [], r = e.split(""), n = 0; n < r.length; ++n)
    t[n] = r[n].charCodeAt(0);
  return t;
}
function ou(e) {
  var t = 0, r, n = o_(e), i = n.length + 1, a, s, o, l, f;
  for (r = an(i), r[0] = n.length, a = 1; a != i; ++a)
    r[a] = n[a - 1];
  for (a = i - 1; a >= 0; --a)
    s = r[a], o = t & 16384 ? 1 : 0, l = t << 1 & 32767, f = o | l, t = f ^ s;
  return t ^ 52811;
}
var l_ = /* @__PURE__ */ function() {
  function e(i, a) {
    switch (a.type) {
      case "base64":
        return t(xr(i), a);
      case "binary":
        return t(i, a);
      case "buffer":
        return t(Ae && Buffer.isBuffer(i) ? i.toString("binary") : Oi(i), a);
      case "array":
        return t(Ya(i), a);
    }
    throw new Error("Unrecognized type " + a.type);
  }
  function t(i, a) {
    var s = a || {}, o = s.dense ? [] : {}, l = i.match(/\\trowd.*?\\row\b/g);
    if (!l.length)
      throw new Error("RTF missing table");
    var f = { s: { c: 0, r: 0 }, e: { c: 0, r: l.length - 1 } };
    return l.forEach(function(c, u) {
      Array.isArray(o) && (o[u] = []);
      for (var h = /\\\w+\b/g, d = 0, v, p = -1; v = h.exec(c); ) {
        switch (v[0]) {
          case "\\cell":
            var m = c.slice(d, h.lastIndex - v[0].length);
            if (m[0] == " " && (m = m.slice(1)), ++p, m.length) {
              var g = { v: m, t: "s" };
              Array.isArray(o) ? o[u][p] = g : o[ke({ r: u, c: p })] = g;
            }
            break;
        }
        d = h.lastIndex;
      }
      p > f.e.c && (f.e.c = p);
    }), o["!ref"] = ze(f), o;
  }
  function r(i, a) {
    return cn(e(i, a), a);
  }
  function n(i) {
    for (var a = ["{\\rtf1\\ansi"], s = Pe(i["!ref"]), o, l = Array.isArray(i), f = s.s.r; f <= s.e.r; ++f) {
      a.push("\\trowd\\trautofit1");
      for (var c = s.s.c; c <= s.e.c; ++c)
        a.push("\\cellx" + (c + 1));
      for (a.push("\\pard\\intbl"), c = s.s.c; c <= s.e.c; ++c) {
        var u = ke({ r: f, c });
        o = l ? (i[f] || [])[c] : i[u], !(!o || o.v == null && (!o.f || o.F)) && (a.push(" " + (o.w || (_r(o), o.w))), a.push("\\cell"));
      }
      a.push("\\pard\\intbl\\row");
    }
    return a.join("") + "}";
  }
  return {
    to_workbook: r,
    to_sheet: e,
    from_sheet: n
  };
}();
function Wl(e) {
  for (var t = 0, r = 1; t != 3; ++t)
    r = r * 256 + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]);
  return r.toString(16).toUpperCase().slice(1);
}
var f_ = 6, vr = f_;
function ya(e) {
  return Math.floor((e + Math.round(128 / vr) / 256) * vr);
}
function wa(e) {
  return Math.floor((e - 5) / vr * 100 + 0.5) / 100;
}
function Oo(e) {
  return Math.round((e * vr + 5) / vr * 256) / 256;
}
function p0(e) {
  e.width ? (e.wpx = ya(e.width), e.wch = wa(e.wpx), e.MDW = vr) : e.wpx ? (e.wch = wa(e.wpx), e.width = Oo(e.wch), e.MDW = vr) : typeof e.wch == "number" && (e.width = Oo(e.wch), e.wpx = ya(e.width), e.MDW = vr), e.customWidth && delete e.customWidth;
}
var c_ = 96, lu = c_;
function Ea(e) {
  return e * 96 / lu;
}
function fu(e) {
  return e * lu / 96;
}
function u_(e) {
  var t = ["<numFmts>"];
  return [[5, 8], [23, 26], [41, 44], [
    /*63*/
    50,
    /*66],[164,*/
    392
  ]].forEach(function(r) {
    for (var n = r[0]; n <= r[1]; ++n)
      e[n] != null && (t[t.length] = ie("numFmt", null, { numFmtId: n, formatCode: be(e[n]) }));
  }), t.length === 1 ? "" : (t[t.length] = "</numFmts>", t[0] = ie("numFmts", null, { count: t.length - 2 }).replace("/>", ">"), t.join(""));
}
function h_(e) {
  var t = [];
  return t[t.length] = ie("cellXfs", null), e.forEach(function(r) {
    t[t.length] = ie("xf", null, r);
  }), t[t.length] = "</cellXfs>", t.length === 2 ? "" : (t[0] = ie("cellXfs", null, { count: t.length - 2 }).replace("/>", ">"), t.join(""));
}
function cu(e, t) {
  var r = [Ve, ie("styleSheet", null, {
    xmlns: Vn[0],
    "xmlns:vt": Qe.vt
  })], n;
  return e.SSF && (n = u_(e.SSF)) != null && (r[r.length] = n), r[r.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>', r[r.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>', r[r.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>', r[r.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>', (n = h_(t.cellXfs)) && (r[r.length] = n), r[r.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>', r[r.length] = '<dxfs count="0"/>', r[r.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>', r.length > 2 && (r[r.length] = "</styleSheet>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function d_(e, t) {
  var r = e.read_shift(2), n = dt(e);
  return [r, n];
}
function p_(e, t, r) {
  r || (r = X(6 + 4 * t.length)), r.write_shift(2, e), et(t, r);
  var n = r.length > r.l ? r.slice(0, r.l) : r;
  return r.l == null && (r.l = r.length), n;
}
function m_(e, t, r) {
  var n = {};
  n.sz = e.read_shift(2) / 20;
  var i = r2(e);
  i.fItalic && (n.italic = 1), i.fCondense && (n.condense = 1), i.fExtend && (n.extend = 1), i.fShadow && (n.shadow = 1), i.fOutline && (n.outline = 1), i.fStrikeout && (n.strike = 1);
  var a = e.read_shift(2);
  switch (a === 700 && (n.bold = 1), e.read_shift(2)) {
    case 1:
      n.vertAlign = "superscript";
      break;
    case 2:
      n.vertAlign = "subscript";
      break;
  }
  var s = e.read_shift(1);
  s != 0 && (n.underline = s);
  var o = e.read_shift(1);
  o > 0 && (n.family = o);
  var l = e.read_shift(1);
  switch (l > 0 && (n.charset = l), e.l++, n.color = t2(e), e.read_shift(1)) {
    case 1:
      n.scheme = "major";
      break;
    case 2:
      n.scheme = "minor";
      break;
  }
  return n.name = dt(e), n;
}
function g_(e, t) {
  t || (t = X(25 + 4 * 32)), t.write_shift(2, e.sz * 20), n2(e, t), t.write_shift(2, e.bold ? 700 : 400);
  var r = 0;
  e.vertAlign == "superscript" ? r = 1 : e.vertAlign == "subscript" && (r = 2), t.write_shift(2, r), t.write_shift(1, e.underline || 0), t.write_shift(1, e.family || 0), t.write_shift(1, e.charset || 0), t.write_shift(1, 0), xa(e.color, t);
  var n = 0;
  return e.scheme == "major" && (n = 1), e.scheme == "minor" && (n = 2), t.write_shift(1, n), et(e.name, t), t.length > t.l ? t.slice(0, t.l) : t;
}
var v_ = [
  "none",
  "solid",
  "mediumGray",
  "darkGray",
  "lightGray",
  "darkHorizontal",
  "darkVertical",
  "darkDown",
  "darkUp",
  "darkGrid",
  "darkTrellis",
  "lightHorizontal",
  "lightVertical",
  "lightDown",
  "lightUp",
  "lightGrid",
  "lightTrellis",
  "gray125",
  "gray0625"
], Ks, x_ = lr;
function zl(e, t) {
  t || (t = X(4 * 3 + 8 * 7 + 16 * 1)), Ks || (Ks = r0(v_));
  var r = Ks[e.patternType];
  r == null && (r = 40), t.write_shift(4, r);
  var n = 0;
  if (r != 40)
    for (xa({ auto: 1 }, t), xa({ auto: 1 }, t); n < 12; ++n)
      t.write_shift(4, 0);
  else {
    for (; n < 4; ++n)
      t.write_shift(4, 0);
    for (; n < 12; ++n)
      t.write_shift(4, 0);
  }
  return t.length > t.l ? t.slice(0, t.l) : t;
}
function __(e, t) {
  var r = e.l + t, n = e.read_shift(2), i = e.read_shift(2);
  return e.l = r, { ixfe: n, numFmtId: i };
}
function uu(e, t, r) {
  r || (r = X(16)), r.write_shift(2, t || 0), r.write_shift(2, e.numFmtId || 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(1, 0), r.write_shift(1, 0);
  var n = 0;
  return r.write_shift(1, n), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(1, 0), r;
}
function ei(e, t) {
  return t || (t = X(10)), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
var y_ = lr;
function w_(e, t) {
  return t || (t = X(51)), t.write_shift(1, 0), ei(null, t), ei(null, t), ei(null, t), ei(null, t), ei(null, t), t.length > t.l ? t.slice(0, t.l) : t;
}
function E_(e, t) {
  return t || (t = X(12 + 4 * 10)), t.write_shift(4, e.xfId), t.write_shift(2, 1), t.write_shift(1, +e.builtinId), t.write_shift(1, 0), va(e.name || "", t), t.length > t.l ? t.slice(0, t.l) : t;
}
function S_(e, t, r) {
  var n = X(2052);
  return n.write_shift(4, e), va(t, n), va(r, n), n.length > n.l ? n.slice(0, n.l) : n;
}
function T_(e, t) {
  if (t) {
    var r = 0;
    [[5, 8], [23, 26], [41, 44], [
      /*63*/
      50,
      /*66],[164,*/
      392
    ]].forEach(function(n) {
      for (var i = n[0]; i <= n[1]; ++i)
        t[i] != null && ++r;
    }), r != 0 && (Q(e, 615, jt(r)), [[5, 8], [23, 26], [41, 44], [
      /*63*/
      50,
      /*66],[164,*/
      392
    ]].forEach(function(n) {
      for (var i = n[0]; i <= n[1]; ++i)
        t[i] != null && Q(e, 44, p_(i, t[i]));
    }), Q(
      e,
      616
      /* BrtEndFmts */
    ));
  }
}
function A_(e) {
  var t = 1;
  Q(e, 611, jt(t)), Q(e, 43, g_({
    sz: 12,
    color: { theme: 1 },
    name: "Calibri",
    family: 2,
    scheme: "minor"
  })), Q(
    e,
    612
    /* BrtEndFonts */
  );
}
function C_(e) {
  var t = 2;
  Q(e, 603, jt(t)), Q(e, 45, zl({ patternType: "none" })), Q(e, 45, zl({ patternType: "gray125" })), Q(
    e,
    604
    /* BrtEndFills */
  );
}
function F_(e) {
  var t = 1;
  Q(e, 613, jt(t)), Q(e, 46, w_()), Q(
    e,
    614
    /* BrtEndBorders */
  );
}
function O_(e) {
  var t = 1;
  Q(e, 626, jt(t)), Q(e, 47, uu({
    numFmtId: 0,
    fontId: 0,
    fillId: 0,
    borderId: 0
  }, 65535)), Q(
    e,
    627
    /* BrtEndCellStyleXFs */
  );
}
function b_(e, t) {
  Q(e, 617, jt(t.length)), t.forEach(function(r) {
    Q(e, 47, uu(r, 0));
  }), Q(
    e,
    618
    /* BrtEndCellXFs */
  );
}
function k_(e) {
  var t = 1;
  Q(e, 619, jt(t)), Q(e, 48, E_({
    xfId: 0,
    builtinId: 0,
    name: "Normal"
  })), Q(
    e,
    620
    /* BrtEndStyles */
  );
}
function M_(e) {
  var t = 0;
  Q(e, 505, jt(t)), Q(
    e,
    506
    /* BrtEndDXFs */
  );
}
function D_(e) {
  var t = 0;
  Q(e, 508, S_(t, "TableStyleMedium9", "PivotStyleMedium4")), Q(
    e,
    509
    /* BrtEndTableStyles */
  );
}
function I_(e, t) {
  var r = Tt();
  return Q(
    r,
    278
    /* BrtBeginStyleSheet */
  ), T_(r, e.SSF), A_(r), C_(r), F_(r), O_(r), b_(r, t.cellXfs), k_(r), M_(r), D_(r), Q(
    r,
    279
    /* BrtEndStyleSheet */
  ), r.end();
}
function hu(e, t) {
  if (t && t.themeXLSX)
    return t.themeXLSX;
  if (e && typeof e.raw == "string")
    return e.raw;
  var r = [Ve];
  return r[r.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', r[r.length] = "<a:themeElements>", r[r.length] = '<a:clrScheme name="Office">', r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', r[r.length] = "</a:clrScheme>", r[r.length] = '<a:fontScheme name="Office">', r[r.length] = "<a:majorFont>", r[r.length] = '<a:latin typeface="Cambria"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:majorFont>", r[r.length] = "<a:minorFont>", r[r.length] = '<a:latin typeface="Calibri"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Arial"/>', r[r.length] = '<a:font script="Hebr" typeface="Arial"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Arial"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:minorFont>", r[r.length] = "</a:fontScheme>", r[r.length] = '<a:fmtScheme name="Office">', r[r.length] = "<a:fillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="1"/>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="0"/>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:fillStyleLst>", r[r.length] = "<a:lnStyleLst>", r[r.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = "</a:lnStyleLst>", r[r.length] = "<a:effectStyleLst>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', r[r.length] = "</a:effectStyle>", r[r.length] = "</a:effectStyleLst>", r[r.length] = "<a:bgFillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:bgFillStyleLst>", r[r.length] = "</a:fmtScheme>", r[r.length] = "</a:themeElements>", r[r.length] = "<a:objectDefaults>", r[r.length] = "<a:spDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', r[r.length] = "</a:spDef>", r[r.length] = "<a:lnDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', r[r.length] = "</a:lnDef>", r[r.length] = "</a:objectDefaults>", r[r.length] = "<a:extraClrSchemeLst/>", r[r.length] = "</a:theme>", r.join("");
}
function P_(e, t) {
  return {
    flags: e.read_shift(4),
    version: e.read_shift(4),
    name: dt(e)
  };
}
function R_(e) {
  var t = X(12 + 2 * e.name.length);
  return t.write_shift(4, e.flags), t.write_shift(4, e.version), et(e.name, t), t.slice(0, t.l);
}
function N_(e) {
  for (var t = [], r = e.read_shift(4); r-- > 0; )
    t.push([e.read_shift(4), e.read_shift(4)]);
  return t;
}
function L_(e) {
  var t = X(4 + 8 * e.length);
  t.write_shift(4, e.length);
  for (var r = 0; r < e.length; ++r)
    t.write_shift(4, e[r][0]), t.write_shift(4, e[r][1]);
  return t;
}
function B_(e, t) {
  var r = X(8 + 2 * t.length);
  return r.write_shift(4, e), et(t, r), r.slice(0, r.l);
}
function $_(e) {
  return e.l += 4, e.read_shift(4) != 0;
}
function U_(e, t) {
  var r = X(8);
  return r.write_shift(4, e), r.write_shift(4, t ? 1 : 0), r;
}
function H_() {
  var e = Tt();
  return Q(e, 332), Q(e, 334, jt(1)), Q(e, 335, R_({
    name: "XLDAPR",
    version: 12e4,
    flags: 3496657072
  })), Q(e, 336), Q(e, 339, B_(1, "XLDAPR")), Q(e, 52), Q(e, 35, jt(514)), Q(e, 4096, jt(0)), Q(e, 4097, Lt(1)), Q(e, 36), Q(e, 53), Q(e, 340), Q(e, 337, U_(1, !0)), Q(e, 51, L_([[1, 0]])), Q(e, 338), Q(e, 333), e.end();
}
function du() {
  var e = [Ve];
  return e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`), e.join("");
}
function W_(e) {
  var t = {};
  t.i = e.read_shift(4);
  var r = {};
  r.r = e.read_shift(4), r.c = e.read_shift(4), t.r = ke(r);
  var n = e.read_shift(1);
  return n & 2 && (t.l = "1"), n & 8 && (t.a = "1"), t;
}
var Cn = 1024;
function pu(e, t) {
  for (var r = [21600, 21600], n = ["m0,0l0", r[1], r[0], r[1], r[0], "0xe"].join(","), i = [
    ie("xml", null, { "xmlns:v": kt.v, "xmlns:o": kt.o, "xmlns:x": kt.x, "xmlns:mv": kt.mv }).replace(/\/>/, ">"),
    ie("o:shapelayout", ie("o:idmap", null, { "v:ext": "edit", data: e }), { "v:ext": "edit" }),
    ie("v:shapetype", [
      ie("v:stroke", null, { joinstyle: "miter" }),
      ie("v:path", null, { gradientshapeok: "t", "o:connecttype": "rect" })
    ].join(""), { id: "_x0000_t202", "o:spt": 202, coordsize: r.join(","), path: n })
  ]; Cn < e * 1e3; )
    Cn += 1e3;
  return t.forEach(function(a) {
    var s = Ze(a[0]), o = (
      /*::(*/
      { color2: "#BEFF82", type: "gradient" }
    );
    o.type == "gradient" && (o.angle = "-180");
    var l = o.type == "gradient" ? ie("o:fill", null, { type: "gradientUnscaled", "v:ext": "view" }) : null, f = ie("v:fill", l, o), c = { on: "t", obscured: "t" };
    ++Cn, i = i.concat([
      "<v:shape" + wi({
        id: "_x0000_s" + Cn,
        type: "#_x0000_t202",
        style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (a[1].hidden ? ";visibility:hidden" : ""),
        fillcolor: "#ECFAD4",
        strokecolor: "#edeaa1"
      }) + ">",
      f,
      ie("v:shadow", null, c),
      ie("v:path", null, { "o:connecttype": "none" }),
      '<v:textbox><div style="text-align:left"></div></v:textbox>',
      '<x:ClientData ObjectType="Note">',
      "<x:MoveWithCells/>",
      "<x:SizeWithCells/>",
      /* Part 4 19.4.2.3 Anchor (Anchor) */
      it("x:Anchor", [s.c + 1, 0, s.r + 1, 0, s.c + 3, 20, s.r + 5, 20].join(",")),
      it("x:AutoFill", "False"),
      it("x:Row", String(s.r)),
      it("x:Column", String(s.c)),
      a[1].hidden ? "" : "<x:Visible/>",
      "</x:ClientData>",
      "</v:shape>"
    ]);
  }), i.push("</xml>"), i.join("");
}
function mu(e) {
  var t = [Ve, ie("comments", null, { xmlns: Vn[0] })], r = [];
  return t.push("<authors>"), e.forEach(function(n) {
    n[1].forEach(function(i) {
      var a = be(i.a);
      r.indexOf(a) == -1 && (r.push(a), t.push("<author>" + a + "</author>")), i.T && i.ID && r.indexOf("tc=" + i.ID) == -1 && (r.push("tc=" + i.ID), t.push("<author>tc=" + i.ID + "</author>"));
    });
  }), r.length == 0 && (r.push("SheetJ5"), t.push("<author>SheetJ5</author>")), t.push("</authors>"), t.push("<commentList>"), e.forEach(function(n) {
    var i = 0, a = [];
    if (n[1][0] && n[1][0].T && n[1][0].ID ? i = r.indexOf("tc=" + n[1][0].ID) : n[1].forEach(function(l) {
      l.a && (i = r.indexOf(be(l.a))), a.push(l.t || "");
    }), t.push('<comment ref="' + n[0] + '" authorId="' + i + '"><text>'), a.length <= 1)
      t.push(it("t", be(a[0] || "")));
    else {
      for (var s = `Comment:
    ` + a[0] + `
`, o = 1; o < a.length; ++o)
        s += `Reply:
    ` + a[o] + `
`;
      t.push(it("t", be(s)));
    }
    t.push("</text></comment>");
  }), t.push("</commentList>"), t.length > 2 && (t[t.length] = "</comments>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function z_(e, t, r) {
  var n = [Ve, ie("ThreadedComments", null, { xmlns: Qe.TCMNT }).replace(/[\/]>/, ">")];
  return e.forEach(function(i) {
    var a = "";
    (i[1] || []).forEach(function(s, o) {
      if (!s.T) {
        delete s.ID;
        return;
      }
      s.a && t.indexOf(s.a) == -1 && t.push(s.a);
      var l = {
        ref: i[0],
        id: "{54EE7951-7262-4200-6969-" + ("000000000000" + r.tcid++).slice(-12) + "}"
      };
      o == 0 ? a = l.id : l.parentId = a, s.ID = l.id, s.a && (l.personId = "{54EE7950-7262-4200-6969-" + ("000000000000" + t.indexOf(s.a)).slice(-12) + "}"), n.push(ie("threadedComment", it("text", s.t || ""), l));
    });
  }), n.push("</ThreadedComments>"), n.join("");
}
function V_(e) {
  var t = [Ve, ie("personList", null, {
    xmlns: Qe.TCMNT,
    "xmlns:x": Vn[0]
  }).replace(/[\/]>/, ">")];
  return e.forEach(function(r, n) {
    t.push(ie("person", null, {
      displayName: r,
      id: "{54EE7950-7262-4200-6969-" + ("000000000000" + n).slice(-12) + "}",
      userId: r,
      providerId: "None"
    }));
  }), t.push("</personList>"), t.join("");
}
function G_(e) {
  var t = {};
  t.iauthor = e.read_shift(4);
  var r = pn(e);
  return t.rfx = r.s, t.ref = ke(r.s), e.l += 16, t;
}
function X_(e, t) {
  return t == null && (t = X(36)), t.write_shift(4, e[1].iauthor), Xn(e[0], t), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
var j_ = dt;
function Y_(e) {
  return et(e.slice(0, 54));
}
function q_(e) {
  var t = Tt(), r = [];
  return Q(
    t,
    628
    /* BrtBeginComments */
  ), Q(
    t,
    630
    /* BrtBeginCommentAuthors */
  ), e.forEach(function(n) {
    n[1].forEach(function(i) {
      r.indexOf(i.a) > -1 || (r.push(i.a.slice(0, 54)), Q(t, 632, Y_(i.a)));
    });
  }), Q(
    t,
    631
    /* BrtEndCommentAuthors */
  ), Q(
    t,
    633
    /* BrtBeginCommentList */
  ), e.forEach(function(n) {
    n[1].forEach(function(i) {
      i.iauthor = r.indexOf(i.a);
      var a = { s: Ze(n[0]), e: Ze(n[0]) };
      Q(t, 635, X_([a, i])), i.t && i.t.length > 0 && Q(t, 637, Jx(i)), Q(
        t,
        636
        /* BrtEndComment */
      ), delete i.iauthor;
    });
  }), Q(
    t,
    634
    /* BrtEndCommentList */
  ), Q(
    t,
    629
    /* BrtEndComments */
  ), t.end();
}
function K_(e, t) {
  t.FullPaths.forEach(function(r, n) {
    if (n != 0) {
      var i = r.replace(/[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
      i.slice(-1) !== "/" && De.utils.cfb_add(e, i, t.FileIndex[n].content);
    }
  });
}
var gu = ["xlsb", "xlsm", "xlam", "biff8", "xla"], J_ = /* @__PURE__ */ function() {
  var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g, t = { r: 0, c: 0 };
  function r(n, i, a, s) {
    var o = !1, l = !1;
    a.length == 0 ? l = !0 : a.charAt(0) == "[" && (l = !0, a = a.slice(1, -1)), s.length == 0 ? o = !0 : s.charAt(0) == "[" && (o = !0, s = s.slice(1, -1));
    var f = a.length > 0 ? parseInt(a, 10) | 0 : 0, c = s.length > 0 ? parseInt(s, 10) | 0 : 0;
    return o ? c += t.c : --c, l ? f += t.r : --f, i + (o ? "" : "$") + ht(c) + (l ? "" : "$") + at(f);
  }
  return function(i, a) {
    return t = a, i.replace(e, r);
  };
}(), m0 = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g, g0 = /* @__PURE__ */ function() {
  return function(t, r) {
    return t.replace(m0, function(n, i, a, s, o, l) {
      var f = f0(s) - (a ? 0 : r.c), c = l0(l) - (o ? 0 : r.r), u = c == 0 ? "" : o ? c + 1 : "[" + c + "]", h = f == 0 ? "" : a ? f + 1 : "[" + f + "]";
      return i + "R" + u + "C" + h;
    });
  };
}();
function Q_(e, t) {
  return e.replace(m0, function(r, n, i, a, s, o) {
    return n + (i == "$" ? i + a : ht(f0(a) + t.c)) + (s == "$" ? s + o : at(l0(o) + t.r));
  });
}
function Z_(e) {
  return e.length != 1;
}
function He(e) {
  e.l += 1;
}
function Dr(e, t) {
  var r = e.read_shift(t == 1 ? 1 : 2);
  return [r & 16383, r >> 14 & 1, r >> 15 & 1];
}
function vu(e, t, r) {
  var n = 2;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5)
      return xu(e);
    r.biff == 12 && (n = 4);
  }
  var i = e.read_shift(n), a = e.read_shift(n), s = Dr(e, 2), o = Dr(e, 2);
  return { s: { r: i, c: s[0], cRel: s[1], rRel: s[2] }, e: { r: a, c: o[0], cRel: o[1], rRel: o[2] } };
}
function xu(e) {
  var t = Dr(e, 2), r = Dr(e, 2), n = e.read_shift(1), i = e.read_shift(1);
  return { s: { r: t[0], c: n, cRel: t[1], rRel: t[2] }, e: { r: r[0], c: i, cRel: r[1], rRel: r[2] } };
}
function ey(e, t, r) {
  if (r.biff < 8)
    return xu(e);
  var n = e.read_shift(r.biff == 12 ? 4 : 2), i = e.read_shift(r.biff == 12 ? 4 : 2), a = Dr(e, 2), s = Dr(e, 2);
  return { s: { r: n, c: a[0], cRel: a[1], rRel: a[2] }, e: { r: i, c: s[0], cRel: s[1], rRel: s[2] } };
}
function _u(e, t, r) {
  if (r && r.biff >= 2 && r.biff <= 5)
    return ty(e);
  var n = e.read_shift(r && r.biff == 12 ? 4 : 2), i = Dr(e, 2);
  return { r: n, c: i[0], cRel: i[1], rRel: i[2] };
}
function ty(e) {
  var t = Dr(e, 2), r = e.read_shift(1);
  return { r: t[0], c: r, cRel: t[1], rRel: t[2] };
}
function ry(e) {
  var t = e.read_shift(2), r = e.read_shift(2);
  return { r: t, c: r & 255, fQuoted: !!(r & 16384), cRel: r >> 15, rRel: r >> 15 };
}
function ny(e, t, r) {
  var n = r && r.biff ? r.biff : 8;
  if (n >= 2 && n <= 5)
    return iy(e);
  var i = e.read_shift(n >= 12 ? 4 : 2), a = e.read_shift(2), s = (a & 16384) >> 14, o = (a & 32768) >> 15;
  if (a &= 16383, o == 1)
    for (; i > 524287; )
      i -= 1048576;
  if (s == 1)
    for (; a > 8191; )
      a = a - 16384;
  return { r: i, c: a, cRel: s, rRel: o };
}
function iy(e) {
  var t = e.read_shift(2), r = e.read_shift(1), n = (t & 32768) >> 15, i = (t & 16384) >> 14;
  return t &= 16383, n == 1 && t >= 8192 && (t = t - 16384), i == 1 && r >= 128 && (r = r - 256), { r: t, c: r, cRel: i, rRel: n };
}
function ay(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, i = vu(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
  return [n, i];
}
function sy(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, i = e.read_shift(2, "i"), a = 8;
  if (r)
    switch (r.biff) {
      case 5:
        e.l += 12, a = 6;
        break;
      case 12:
        a = 12;
        break;
    }
  var s = vu(e, a, r);
  return [n, i, s];
}
function oy(e, t, r) {
  var n = (e[e.l++] & 96) >> 5;
  return e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8, [n];
}
function ly(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, i = e.read_shift(2), a = 8;
  if (r)
    switch (r.biff) {
      case 5:
        e.l += 12, a = 6;
        break;
      case 12:
        a = 12;
        break;
    }
  return e.l += a, [n, i];
}
function fy(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, i = ey(e, t - 1, r);
  return [n, i];
}
function cy(e, t, r) {
  var n = (e[e.l++] & 96) >> 5;
  return e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7, [n];
}
function Vl(e) {
  var t = e[e.l + 1] & 1, r = 1;
  return e.l += 4, [t, r];
}
function uy(e, t, r) {
  e.l += 2;
  for (var n = e.read_shift(r && r.biff == 2 ? 1 : 2), i = [], a = 0; a <= n; ++a)
    i.push(e.read_shift(r && r.biff == 2 ? 1 : 2));
  return i;
}
function hy(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function dy(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function py(e) {
  var t = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [t, e.read_shift(2)];
}
function my(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += r && r.biff == 2 ? 3 : 4, [n];
}
function yu(e) {
  var t = e.read_shift(1), r = e.read_shift(1);
  return [t, r];
}
function gy(e) {
  return e.read_shift(2), yu(e);
}
function vy(e) {
  return e.read_shift(2), yu(e);
}
function xy(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = _u(e, 0, r);
  return [n, i];
}
function _y(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = ny(e, 0, r);
  return [n, i];
}
function yy(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = e.read_shift(2);
  r && r.biff == 5 && (e.l += 12);
  var a = _u(e, 0, r);
  return [n, i, a];
}
function wy(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = e.read_shift(r && r.biff <= 3 ? 1 : 2);
  return [ww[i], Su[i], n];
}
function Ey(e, t, r) {
  var n = e[e.l++], i = e.read_shift(1), a = r && r.biff <= 3 ? [n == 88 ? -1 : 0, e.read_shift(1)] : Sy(e);
  return [i, (a[0] === 0 ? Su : yw)[a[1]]];
}
function Sy(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function Ty(e, t, r) {
  e.l += r && r.biff == 2 ? 3 : 4;
}
function Ay(e, t, r) {
  if (e.l++, r && r.biff == 12)
    return [e.read_shift(4, "i"), 0];
  var n = e.read_shift(2), i = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, i];
}
function Cy(e) {
  return e.l++, Mi[e.read_shift(1)];
}
function Fy(e) {
  return e.l++, e.read_shift(2);
}
function Oy(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function by(e) {
  return e.l++, jn(e);
}
function ky(e, t, r) {
  return e.l++, ru(e, t - 1, r);
}
function My(e, t) {
  var r = [e.read_shift(1)];
  if (t == 12)
    switch (r[0]) {
      case 2:
        r[0] = 4;
        break;
      case 4:
        r[0] = 16;
        break;
      case 0:
        r[0] = 1;
        break;
      case 1:
        r[0] = 2;
        break;
    }
  switch (r[0]) {
    case 4:
      r[1] = y2(e, 1) ? "TRUE" : "FALSE", t != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      r[1] = Mi[e[e.l]], e.l += t == 12 ? 4 : 8;
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      r[1] = jn(e);
      break;
    case 2:
      r[1] = T2(e, 0, { biff: t > 0 && t < 8 ? 2 : t });
      break;
    default:
      throw new Error("Bad SerAr: " + r[0]);
  }
  return r;
}
function Dy(e, t, r) {
  for (var n = e.read_shift(r.biff == 12 ? 4 : 2), i = [], a = 0; a != n; ++a)
    i.push((r.biff == 12 ? pn : F2)(e));
  return i;
}
function Iy(e, t, r) {
  var n = 0, i = 0;
  r.biff == 12 ? (n = e.read_shift(4), i = e.read_shift(4)) : (i = 1 + e.read_shift(1), n = 1 + e.read_shift(2)), r.biff >= 2 && r.biff < 8 && (--n, --i == 0 && (i = 256));
  for (var a = 0, s = []; a != n && (s[a] = []); ++a)
    for (var o = 0; o != i; ++o)
      s[a][o] = My(e, r.biff);
  return s;
}
function Py(e, t, r) {
  var n = e.read_shift(1) >>> 5 & 3, i = !r || r.biff >= 8 ? 4 : 2, a = e.read_shift(i);
  switch (r.biff) {
    case 2:
      e.l += 5;
      break;
    case 3:
    case 4:
      e.l += 8;
      break;
    case 5:
      e.l += 12;
      break;
  }
  return [n, 0, a];
}
function Ry(e, t, r) {
  if (r.biff == 5)
    return Ny(e);
  var n = e.read_shift(1) >>> 5 & 3, i = e.read_shift(2), a = e.read_shift(4);
  return [n, i, a];
}
function Ny(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2, "i");
  e.l += 8;
  var n = e.read_shift(2);
  return e.l += 12, [t, r, n];
}
function Ly(e, t, r) {
  var n = e.read_shift(1) >>> 5 & 3;
  e.l += r && r.biff == 2 ? 3 : 4;
  var i = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, i];
}
function By(e, t, r) {
  var n = e.read_shift(1) >>> 5 & 3, i = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, i];
}
function $y(e, t, r) {
  var n = e.read_shift(1) >>> 5 & 3;
  return e.l += 4, r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [n];
}
function Uy(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, i = e.read_shift(2), a = 4;
  if (r)
    switch (r.biff) {
      case 5:
        a = 15;
        break;
      case 12:
        a = 6;
        break;
    }
  return e.l += a, [n, i];
}
var Hy = lr, Wy = lr, zy = lr;
function Di(e, t, r) {
  return e.l += 2, [ry(e)];
}
function v0(e) {
  return e.l += 6, [];
}
var Vy = Di, Gy = v0, Xy = v0, jy = Di;
function wu(e) {
  return e.l += 2, [eu(e), e.read_shift(2) & 1];
}
var Yy = Di, qy = wu, Ky = v0, Jy = Di, Qy = Di, Zy = [
  "Data",
  "All",
  "Headers",
  "??",
  "?Data2",
  "??",
  "?DataHeaders",
  "??",
  "Totals",
  "??",
  "??",
  "??",
  "?DataTotals",
  "??",
  "??",
  "??",
  "?Current"
];
function ew(e) {
  e.l += 2;
  var t = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(4), i = e.read_shift(2), a = e.read_shift(2), s = Zy[r >> 2 & 31];
  return { ixti: t, coltype: r & 3, rt: s, idx: n, c: i, C: a };
}
function tw(e) {
  return e.l += 2, [e.read_shift(4)];
}
function rw(e, t, r) {
  return e.l += 5, e.l += 2, e.l += r.biff == 2 ? 1 : 4, ["PTGSHEET"];
}
function nw(e, t, r) {
  return e.l += r.biff == 2 ? 4 : 5, ["PTGENDSHEET"];
}
function iw(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [t, r];
}
function aw(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [t, r];
}
function sw(e) {
  return e.l += 4, [0, 0];
}
var Gl = {
  /*::[*/
  1: { n: "PtgExp", f: Ay },
  /*::[*/
  2: { n: "PtgTbl", f: zy },
  /*::[*/
  3: { n: "PtgAdd", f: He },
  /*::[*/
  4: { n: "PtgSub", f: He },
  /*::[*/
  5: { n: "PtgMul", f: He },
  /*::[*/
  6: { n: "PtgDiv", f: He },
  /*::[*/
  7: { n: "PtgPower", f: He },
  /*::[*/
  8: { n: "PtgConcat", f: He },
  /*::[*/
  9: { n: "PtgLt", f: He },
  /*::[*/
  10: { n: "PtgLe", f: He },
  /*::[*/
  11: { n: "PtgEq", f: He },
  /*::[*/
  12: { n: "PtgGe", f: He },
  /*::[*/
  13: { n: "PtgGt", f: He },
  /*::[*/
  14: { n: "PtgNe", f: He },
  /*::[*/
  15: { n: "PtgIsect", f: He },
  /*::[*/
  16: { n: "PtgUnion", f: He },
  /*::[*/
  17: { n: "PtgRange", f: He },
  /*::[*/
  18: { n: "PtgUplus", f: He },
  /*::[*/
  19: { n: "PtgUminus", f: He },
  /*::[*/
  20: { n: "PtgPercent", f: He },
  /*::[*/
  21: { n: "PtgParen", f: He },
  /*::[*/
  22: { n: "PtgMissArg", f: He },
  /*::[*/
  23: { n: "PtgStr", f: ky },
  /*::[*/
  26: { n: "PtgSheet", f: rw },
  /*::[*/
  27: { n: "PtgEndSheet", f: nw },
  /*::[*/
  28: { n: "PtgErr", f: Cy },
  /*::[*/
  29: { n: "PtgBool", f: Oy },
  /*::[*/
  30: { n: "PtgInt", f: Fy },
  /*::[*/
  31: { n: "PtgNum", f: by },
  /*::[*/
  32: { n: "PtgArray", f: cy },
  /*::[*/
  33: { n: "PtgFunc", f: wy },
  /*::[*/
  34: { n: "PtgFuncVar", f: Ey },
  /*::[*/
  35: { n: "PtgName", f: Py },
  /*::[*/
  36: { n: "PtgRef", f: xy },
  /*::[*/
  37: { n: "PtgArea", f: ay },
  /*::[*/
  38: { n: "PtgMemArea", f: Ly },
  /*::[*/
  39: { n: "PtgMemErr", f: Hy },
  /*::[*/
  40: { n: "PtgMemNoMem", f: Wy },
  /*::[*/
  41: { n: "PtgMemFunc", f: By },
  /*::[*/
  42: { n: "PtgRefErr", f: $y },
  /*::[*/
  43: { n: "PtgAreaErr", f: oy },
  /*::[*/
  44: { n: "PtgRefN", f: _y },
  /*::[*/
  45: { n: "PtgAreaN", f: fy },
  /*::[*/
  46: { n: "PtgMemAreaN", f: iw },
  /*::[*/
  47: { n: "PtgMemNoMemN", f: aw },
  /*::[*/
  57: { n: "PtgNameX", f: Ry },
  /*::[*/
  58: { n: "PtgRef3d", f: yy },
  /*::[*/
  59: { n: "PtgArea3d", f: sy },
  /*::[*/
  60: { n: "PtgRefErr3d", f: Uy },
  /*::[*/
  61: { n: "PtgAreaErr3d", f: ly },
  /*::[*/
  255: {}
}, ow = {
  /*::[*/
  64: 32,
  /*::[*/
  96: 32,
  /*::[*/
  65: 33,
  /*::[*/
  97: 33,
  /*::[*/
  66: 34,
  /*::[*/
  98: 34,
  /*::[*/
  67: 35,
  /*::[*/
  99: 35,
  /*::[*/
  68: 36,
  /*::[*/
  100: 36,
  /*::[*/
  69: 37,
  /*::[*/
  101: 37,
  /*::[*/
  70: 38,
  /*::[*/
  102: 38,
  /*::[*/
  71: 39,
  /*::[*/
  103: 39,
  /*::[*/
  72: 40,
  /*::[*/
  104: 40,
  /*::[*/
  73: 41,
  /*::[*/
  105: 41,
  /*::[*/
  74: 42,
  /*::[*/
  106: 42,
  /*::[*/
  75: 43,
  /*::[*/
  107: 43,
  /*::[*/
  76: 44,
  /*::[*/
  108: 44,
  /*::[*/
  77: 45,
  /*::[*/
  109: 45,
  /*::[*/
  78: 46,
  /*::[*/
  110: 46,
  /*::[*/
  79: 47,
  /*::[*/
  111: 47,
  /*::[*/
  88: 34,
  /*::[*/
  120: 34,
  /*::[*/
  89: 57,
  /*::[*/
  121: 57,
  /*::[*/
  90: 58,
  /*::[*/
  122: 58,
  /*::[*/
  91: 59,
  /*::[*/
  123: 59,
  /*::[*/
  92: 60,
  /*::[*/
  124: 60,
  /*::[*/
  93: 61,
  /*::[*/
  125: 61
}, lw = {
  /*::[*/
  1: { n: "PtgElfLel", f: wu },
  /*::[*/
  2: { n: "PtgElfRw", f: Jy },
  /*::[*/
  3: { n: "PtgElfCol", f: Vy },
  /*::[*/
  6: { n: "PtgElfRwV", f: Qy },
  /*::[*/
  7: { n: "PtgElfColV", f: jy },
  /*::[*/
  10: { n: "PtgElfRadical", f: Yy },
  /*::[*/
  11: { n: "PtgElfRadicalS", f: Ky },
  /*::[*/
  13: { n: "PtgElfColS", f: Gy },
  /*::[*/
  15: { n: "PtgElfColSV", f: Xy },
  /*::[*/
  16: { n: "PtgElfRadicalLel", f: qy },
  /*::[*/
  25: { n: "PtgList", f: ew },
  /*::[*/
  29: { n: "PtgSxName", f: tw },
  /*::[*/
  255: {}
}, fw = {
  /*::[*/
  0: { n: "PtgAttrNoop", f: sw },
  /*::[*/
  1: { n: "PtgAttrSemi", f: my },
  /*::[*/
  2: { n: "PtgAttrIf", f: dy },
  /*::[*/
  4: { n: "PtgAttrChoose", f: uy },
  /*::[*/
  8: { n: "PtgAttrGoto", f: hy },
  /*::[*/
  16: { n: "PtgAttrSum", f: Ty },
  /*::[*/
  32: { n: "PtgAttrBaxcel", f: Vl },
  /*::[*/
  33: { n: "PtgAttrBaxcel", f: Vl },
  /*::[*/
  64: { n: "PtgAttrSpace", f: gy },
  /*::[*/
  65: { n: "PtgAttrSpaceSemi", f: vy },
  /*::[*/
  128: { n: "PtgAttrIfError", f: py },
  /*::[*/
  255: {}
};
function cw(e, t, r, n) {
  if (n.biff < 8)
    return lr(e, t);
  for (var i = e.l + t, a = [], s = 0; s !== r.length; ++s)
    switch (r[s][0]) {
      case "PtgArray":
        r[s][1] = Iy(e, 0, n), a.push(r[s][1]);
        break;
      case "PtgMemArea":
        r[s][2] = Dy(e, r[s][1], n), a.push(r[s][2]);
        break;
      case "PtgExp":
        n && n.biff == 12 && (r[s][1][1] = e.read_shift(4), a.push(r[s][1]));
        break;
      case "PtgList":
      case "PtgElfRadicalS":
      case "PtgElfColS":
      case "PtgElfColSV":
        throw "Unsupported " + r[s][0];
    }
  return t = i - e.l, t !== 0 && a.push(lr(e, t)), a;
}
function uw(e, t, r) {
  for (var n = e.l + t, i, a, s = []; n != e.l; )
    t = n - e.l, a = e[e.l], i = Gl[a] || Gl[ow[a]], (a === 24 || a === 25) && (i = (a === 24 ? lw : fw)[e[e.l + 1]]), !i || !i.f ? lr(e, t) : s.push([i.n, i.f(e, t, r)]);
  return s;
}
function hw(e) {
  for (var t = [], r = 0; r < e.length; ++r) {
    for (var n = e[r], i = [], a = 0; a < n.length; ++a) {
      var s = n[a];
      if (s)
        switch (s[0]) {
          case 2:
            i.push('"' + s[1].replace(/"/g, '""') + '"');
            break;
          default:
            i.push(s[1]);
        }
      else
        i.push("");
    }
    t.push(i.join(","));
  }
  return t.join(";");
}
var dw = {
  PtgAdd: "+",
  PtgConcat: "&",
  PtgDiv: "/",
  PtgEq: "=",
  PtgGe: ">=",
  PtgGt: ">",
  PtgLe: "<=",
  PtgLt: "<",
  PtgMul: "*",
  PtgNe: "<>",
  PtgPower: "^",
  PtgSub: "-"
};
function pw(e, t) {
  if (!e && !(t && t.biff <= 5 && t.biff >= 2))
    throw new Error("empty sheet name");
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function Eu(e, t, r) {
  if (!e)
    return "SH33TJSERR0";
  if (r.biff > 8 && (!e.XTI || !e.XTI[t]))
    return e.SheetNames[t];
  if (!e.XTI)
    return "SH33TJSERR6";
  var n = e.XTI[t];
  if (r.biff < 8)
    return t > 1e4 && (t -= 65536), t < 0 && (t = -t), t == 0 ? "" : e.XTI[t - 1];
  if (!n)
    return "SH33TJSERR1";
  var i = "";
  if (r.biff > 8)
    switch (e[n[0]][0]) {
      case 357:
        return i = n[1] == -1 ? "#REF" : e.SheetNames[n[1]], n[1] == n[2] ? i : i + ":" + e.SheetNames[n[2]];
      case 358:
        return r.SID != null ? e.SheetNames[r.SID] : "SH33TJSSAME" + e[n[0]][0];
      case 355:
      default:
        return "SH33TJSSRC" + e[n[0]][0];
    }
  switch (e[n[0]][0][0]) {
    case 1025:
      return i = n[1] == -1 ? "#REF" : e.SheetNames[n[1]] || "SH33TJSERR3", n[1] == n[2] ? i : i + ":" + e.SheetNames[n[2]];
    case 14849:
      return e[n[0]].slice(1).map(function(a) {
        return a.Name;
      }).join(";;");
    default:
      return e[n[0]][0][3] ? (i = n[1] == -1 ? "#REF" : e[n[0]][0][3][n[1]] || "SH33TJSERR4", n[1] == n[2] ? i : i + ":" + e[n[0]][0][3][n[2]]) : "SH33TJSERR2";
  }
}
function Xl(e, t, r) {
  var n = Eu(e, t, r);
  return n == "#REF" ? n : pw(n, r);
}
function Rn(e, t, r, n, i) {
  var a = i && i.biff || 8, s = (
    /*range != null ? range :*/
    { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }
  ), o = [], l, f, c, u = 0, h = 0, d, v = "";
  if (!e[0] || !e[0][0])
    return "";
  for (var p = -1, m = "", g = 0, x = e[0].length; g < x; ++g) {
    var _ = e[0][g];
    switch (_[0]) {
      case "PtgUminus":
        o.push("-" + o.pop());
        break;
      case "PtgUplus":
        o.push("+" + o.pop());
        break;
      case "PtgPercent":
        o.push(o.pop() + "%");
        break;
      case "PtgAdd":
      case "PtgConcat":
      case "PtgDiv":
      case "PtgEq":
      case "PtgGe":
      case "PtgGt":
      case "PtgLe":
      case "PtgLt":
      case "PtgMul":
      case "PtgNe":
      case "PtgPower":
      case "PtgSub":
        if (l = o.pop(), f = o.pop(), p >= 0) {
          switch (e[0][p][1][0]) {
            case 0:
              m = $e(" ", e[0][p][1][1]);
              break;
            case 1:
              m = $e("\r", e[0][p][1][1]);
              break;
            default:
              if (m = "", i.WTF)
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][p][1][0]);
          }
          f = f + m, p = -1;
        }
        o.push(f + dw[_[0]] + l);
        break;
      case "PtgIsect":
        l = o.pop(), f = o.pop(), o.push(f + " " + l);
        break;
      case "PtgUnion":
        l = o.pop(), f = o.pop(), o.push(f + "," + l);
        break;
      case "PtgRange":
        l = o.pop(), f = o.pop(), o.push(f + ":" + l);
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        c = hi(_[1][1], s, i), o.push(di(c, a));
        break;
      case "PtgRefN":
        c = r ? hi(_[1][1], r, i) : _[1][1], o.push(di(c, a));
        break;
      case "PtgRef3d":
        u = /*::Number(*/
        _[1][1], c = hi(_[1][2], s, i), v = Xl(n, u, i), o.push(v + "!" + di(c, a));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var C = _[1][0], R = _[1][1];
        C || (C = 0), C &= 127;
        var G = C == 0 ? [] : o.slice(-C);
        o.length -= C, R === "User" && (R = G.shift()), o.push(R + "(" + G.join(",") + ")");
        break;
      case "PtgBool":
        o.push(_[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        o.push(
          /*::String(*/
          _[1]
          /*::)*/
        );
        break;
      case "PtgNum":
        o.push(String(_[1]));
        break;
      case "PtgStr":
        o.push('"' + _[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        o.push(
          /*::String(*/
          _[1]
          /*::)*/
        );
        break;
      case "PtgAreaN":
        d = kl(_[1][1], r ? { s: r } : s, i), o.push(Ys(d, i));
        break;
      case "PtgArea":
        d = kl(_[1][1], s, i), o.push(Ys(d, i));
        break;
      case "PtgArea3d":
        u = /*::Number(*/
        _[1][1], d = _[1][2], v = Xl(n, u, i), o.push(v + "!" + Ys(d, i));
        break;
      case "PtgAttrSum":
        o.push("SUM(" + o.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        h = _[1][2];
        var b = (n.names || [])[h - 1] || (n[0] || [])[h], L = b ? b.Name : "SH33TJSNAME" + String(h);
        L && L.slice(0, 6) == "_xlfn." && !i.xlfn && (L = L.slice(6)), o.push(L);
        break;
      case "PtgNameX":
        var P = _[1][1];
        h = _[1][2];
        var N;
        if (i.biff <= 5)
          P < 0 && (P = -P), n[P] && (N = n[P][h]);
        else {
          var F = "";
          if (((n[P] || [])[0] || [])[0] == 14849 || (((n[P] || [])[0] || [])[0] == 1025 ? n[P][h] && n[P][h].itab > 0 && (F = n.SheetNames[n[P][h].itab - 1] + "!") : F = n.SheetNames[h - 1] + "!"), n[P] && n[P][h])
            F += n[P][h].Name;
          else if (n[0] && n[0][h])
            F += n[0][h].Name;
          else {
            var O = (Eu(n, P, i) || "").split(";;");
            O[h - 1] ? F = O[h - 1] : F += "SH33TJSERRX";
          }
          o.push(F);
          break;
        }
        N || (N = { Name: "SH33TJSERRY" }), o.push(N.Name);
        break;
      case "PtgParen":
        var M = "(", V = ")";
        if (p >= 0) {
          switch (m = "", e[0][p][1][0]) {
            case 2:
              M = $e(" ", e[0][p][1][1]) + M;
              break;
            case 3:
              M = $e("\r", e[0][p][1][1]) + M;
              break;
            case 4:
              V = $e(" ", e[0][p][1][1]) + V;
              break;
            case 5:
              V = $e("\r", e[0][p][1][1]) + V;
              break;
            default:
              if (i.WTF)
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][p][1][0]);
          }
          p = -1;
        }
        o.push(M + o.pop() + V);
        break;
      case "PtgRefErr":
        o.push("#REF!");
        break;
      case "PtgRefErr3d":
        o.push("#REF!");
        break;
      case "PtgExp":
        c = { c: _[1][1], r: _[1][0] };
        var J = { c: r.c, r: r.r };
        if (n.sharedf[ke(c)]) {
          var le = n.sharedf[ke(c)];
          o.push(Rn(le, s, J, n, i));
        } else {
          var he = !1;
          for (l = 0; l != n.arrayf.length; ++l)
            if (f = n.arrayf[l], !(c.c < f[0].s.c || c.c > f[0].e.c) && !(c.r < f[0].s.r || c.r > f[0].e.r)) {
              o.push(Rn(f[1], s, J, n, i)), he = !0;
              break;
            }
          he || o.push(
            /*::String(*/
            _[1]
            /*::)*/
          );
        }
        break;
      case "PtgArray":
        o.push("{" + hw(
          /*::(*/
          _[1]
          /*:: :any)*/
        ) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      case "PtgAttrSpaceSemi":
        p = g;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        o.push("");
        break;
      case "PtgAreaErr":
        o.push("#REF!");
        break;
      case "PtgAreaErr3d":
        o.push("#REF!");
        break;
      case "PtgList":
        o.push("Table" + _[1].idx + "[#" + _[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      case "PtgElfColS":
      case "PtgElfColSV":
      case "PtgElfColV":
      case "PtgElfLel":
      case "PtgElfRadical":
      case "PtgElfRadicalLel":
      case "PtgElfRadicalS":
      case "PtgElfRw":
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(_));
      default:
        throw new Error("Unrecognized Formula Token: " + String(_));
    }
    var pe = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (i.biff != 3 && p >= 0 && pe.indexOf(e[0][g][0]) == -1) {
      _ = e[0][p];
      var me = !0;
      switch (_[1][0]) {
        case 4:
          me = !1;
        case 0:
          m = $e(" ", _[1][1]);
          break;
        case 5:
          me = !1;
        case 1:
          m = $e("\r", _[1][1]);
          break;
        default:
          if (m = "", i.WTF)
            throw new Error("Unexpected PtgAttrSpaceType " + _[1][0]);
      }
      o.push((me ? m : "") + o.pop() + (me ? "" : m)), p = -1;
    }
  }
  if (o.length > 1 && i.WTF)
    throw new Error("bad formula stack");
  return o[0];
}
function mw(e) {
  if (e == null) {
    var t = X(8);
    return t.write_shift(1, 3), t.write_shift(1, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 65535), t;
  } else if (typeof e == "number")
    return sn(e);
  return sn(0);
}
function gw(e, t, r, n, i) {
  var a = on(t, r, i), s = mw(e.v), o = X(6), l = 33;
  o.write_shift(2, l), o.write_shift(4, 0);
  for (var f = X(e.bf.length), c = 0; c < e.bf.length; ++c)
    f[c] = e.bf[c];
  var u = nt([a, s, o, f]);
  return u;
}
function qa(e, t, r) {
  var n = e.read_shift(4), i = uw(e, n, r), a = e.read_shift(4), s = a > 0 ? cw(e, a, i, r) : null;
  return [i, s];
}
var vw = qa, Ka = qa, xw = qa, _w = qa, yw = {
  0: "BEEP",
  1: "OPEN",
  2: "OPEN.LINKS",
  3: "CLOSE.ALL",
  4: "SAVE",
  5: "SAVE.AS",
  6: "FILE.DELETE",
  7: "PAGE.SETUP",
  8: "PRINT",
  9: "PRINTER.SETUP",
  10: "QUIT",
  11: "NEW.WINDOW",
  12: "ARRANGE.ALL",
  13: "WINDOW.SIZE",
  14: "WINDOW.MOVE",
  15: "FULL",
  16: "CLOSE",
  17: "RUN",
  22: "SET.PRINT.AREA",
  23: "SET.PRINT.TITLES",
  24: "SET.PAGE.BREAK",
  25: "REMOVE.PAGE.BREAK",
  26: "FONT",
  27: "DISPLAY",
  28: "PROTECT.DOCUMENT",
  29: "PRECISION",
  30: "A1.R1C1",
  31: "CALCULATE.NOW",
  32: "CALCULATION",
  34: "DATA.FIND",
  35: "EXTRACT",
  36: "DATA.DELETE",
  37: "SET.DATABASE",
  38: "SET.CRITERIA",
  39: "SORT",
  40: "DATA.SERIES",
  41: "TABLE",
  42: "FORMAT.NUMBER",
  43: "ALIGNMENT",
  44: "STYLE",
  45: "BORDER",
  46: "CELL.PROTECTION",
  47: "COLUMN.WIDTH",
  48: "UNDO",
  49: "CUT",
  50: "COPY",
  51: "PASTE",
  52: "CLEAR",
  53: "PASTE.SPECIAL",
  54: "EDIT.DELETE",
  55: "INSERT",
  56: "FILL.RIGHT",
  57: "FILL.DOWN",
  61: "DEFINE.NAME",
  62: "CREATE.NAMES",
  63: "FORMULA.GOTO",
  64: "FORMULA.FIND",
  65: "SELECT.LAST.CELL",
  66: "SHOW.ACTIVE.CELL",
  67: "GALLERY.AREA",
  68: "GALLERY.BAR",
  69: "GALLERY.COLUMN",
  70: "GALLERY.LINE",
  71: "GALLERY.PIE",
  72: "GALLERY.SCATTER",
  73: "COMBINATION",
  74: "PREFERRED",
  75: "ADD.OVERLAY",
  76: "GRIDLINES",
  77: "SET.PREFERRED",
  78: "AXES",
  79: "LEGEND",
  80: "ATTACH.TEXT",
  81: "ADD.ARROW",
  82: "SELECT.CHART",
  83: "SELECT.PLOT.AREA",
  84: "PATTERNS",
  85: "MAIN.CHART",
  86: "OVERLAY",
  87: "SCALE",
  88: "FORMAT.LEGEND",
  89: "FORMAT.TEXT",
  90: "EDIT.REPEAT",
  91: "PARSE",
  92: "JUSTIFY",
  93: "HIDE",
  94: "UNHIDE",
  95: "WORKSPACE",
  96: "FORMULA",
  97: "FORMULA.FILL",
  98: "FORMULA.ARRAY",
  99: "DATA.FIND.NEXT",
  100: "DATA.FIND.PREV",
  101: "FORMULA.FIND.NEXT",
  102: "FORMULA.FIND.PREV",
  103: "ACTIVATE",
  104: "ACTIVATE.NEXT",
  105: "ACTIVATE.PREV",
  106: "UNLOCKED.NEXT",
  107: "UNLOCKED.PREV",
  108: "COPY.PICTURE",
  109: "SELECT",
  110: "DELETE.NAME",
  111: "DELETE.FORMAT",
  112: "VLINE",
  113: "HLINE",
  114: "VPAGE",
  115: "HPAGE",
  116: "VSCROLL",
  117: "HSCROLL",
  118: "ALERT",
  119: "NEW",
  120: "CANCEL.COPY",
  121: "SHOW.CLIPBOARD",
  122: "MESSAGE",
  124: "PASTE.LINK",
  125: "APP.ACTIVATE",
  126: "DELETE.ARROW",
  127: "ROW.HEIGHT",
  128: "FORMAT.MOVE",
  129: "FORMAT.SIZE",
  130: "FORMULA.REPLACE",
  131: "SEND.KEYS",
  132: "SELECT.SPECIAL",
  133: "APPLY.NAMES",
  134: "REPLACE.FONT",
  135: "FREEZE.PANES",
  136: "SHOW.INFO",
  137: "SPLIT",
  138: "ON.WINDOW",
  139: "ON.DATA",
  140: "DISABLE.INPUT",
  142: "OUTLINE",
  143: "LIST.NAMES",
  144: "FILE.CLOSE",
  145: "SAVE.WORKBOOK",
  146: "DATA.FORM",
  147: "COPY.CHART",
  148: "ON.TIME",
  149: "WAIT",
  150: "FORMAT.FONT",
  151: "FILL.UP",
  152: "FILL.LEFT",
  153: "DELETE.OVERLAY",
  155: "SHORT.MENUS",
  159: "SET.UPDATE.STATUS",
  161: "COLOR.PALETTE",
  162: "DELETE.STYLE",
  163: "WINDOW.RESTORE",
  164: "WINDOW.MAXIMIZE",
  166: "CHANGE.LINK",
  167: "CALCULATE.DOCUMENT",
  168: "ON.KEY",
  169: "APP.RESTORE",
  170: "APP.MOVE",
  171: "APP.SIZE",
  172: "APP.MINIMIZE",
  173: "APP.MAXIMIZE",
  174: "BRING.TO.FRONT",
  175: "SEND.TO.BACK",
  185: "MAIN.CHART.TYPE",
  186: "OVERLAY.CHART.TYPE",
  187: "SELECT.END",
  188: "OPEN.MAIL",
  189: "SEND.MAIL",
  190: "STANDARD.FONT",
  191: "CONSOLIDATE",
  192: "SORT.SPECIAL",
  193: "GALLERY.3D.AREA",
  194: "GALLERY.3D.COLUMN",
  195: "GALLERY.3D.LINE",
  196: "GALLERY.3D.PIE",
  197: "VIEW.3D",
  198: "GOAL.SEEK",
  199: "WORKGROUP",
  200: "FILL.GROUP",
  201: "UPDATE.LINK",
  202: "PROMOTE",
  203: "DEMOTE",
  204: "SHOW.DETAIL",
  206: "UNGROUP",
  207: "OBJECT.PROPERTIES",
  208: "SAVE.NEW.OBJECT",
  209: "SHARE",
  210: "SHARE.NAME",
  211: "DUPLICATE",
  212: "APPLY.STYLE",
  213: "ASSIGN.TO.OBJECT",
  214: "OBJECT.PROTECTION",
  215: "HIDE.OBJECT",
  216: "SET.EXTRACT",
  217: "CREATE.PUBLISHER",
  218: "SUBSCRIBE.TO",
  219: "ATTRIBUTES",
  220: "SHOW.TOOLBAR",
  222: "PRINT.PREVIEW",
  223: "EDIT.COLOR",
  224: "SHOW.LEVELS",
  225: "FORMAT.MAIN",
  226: "FORMAT.OVERLAY",
  227: "ON.RECALC",
  228: "EDIT.SERIES",
  229: "DEFINE.STYLE",
  240: "LINE.PRINT",
  243: "ENTER.DATA",
  249: "GALLERY.RADAR",
  250: "MERGE.STYLES",
  251: "EDITION.OPTIONS",
  252: "PASTE.PICTURE",
  253: "PASTE.PICTURE.LINK",
  254: "SPELLING",
  256: "ZOOM",
  259: "INSERT.OBJECT",
  260: "WINDOW.MINIMIZE",
  265: "SOUND.NOTE",
  266: "SOUND.PLAY",
  267: "FORMAT.SHAPE",
  268: "EXTEND.POLYGON",
  269: "FORMAT.AUTO",
  272: "GALLERY.3D.BAR",
  273: "GALLERY.3D.SURFACE",
  274: "FILL.AUTO",
  276: "CUSTOMIZE.TOOLBAR",
  277: "ADD.TOOL",
  278: "EDIT.OBJECT",
  279: "ON.DOUBLECLICK",
  280: "ON.ENTRY",
  281: "WORKBOOK.ADD",
  282: "WORKBOOK.MOVE",
  283: "WORKBOOK.COPY",
  284: "WORKBOOK.OPTIONS",
  285: "SAVE.WORKSPACE",
  288: "CHART.WIZARD",
  289: "DELETE.TOOL",
  290: "MOVE.TOOL",
  291: "WORKBOOK.SELECT",
  292: "WORKBOOK.ACTIVATE",
  293: "ASSIGN.TO.TOOL",
  295: "COPY.TOOL",
  296: "RESET.TOOL",
  297: "CONSTRAIN.NUMERIC",
  298: "PASTE.TOOL",
  302: "WORKBOOK.NEW",
  305: "SCENARIO.CELLS",
  306: "SCENARIO.DELETE",
  307: "SCENARIO.ADD",
  308: "SCENARIO.EDIT",
  309: "SCENARIO.SHOW",
  310: "SCENARIO.SHOW.NEXT",
  311: "SCENARIO.SUMMARY",
  312: "PIVOT.TABLE.WIZARD",
  313: "PIVOT.FIELD.PROPERTIES",
  314: "PIVOT.FIELD",
  315: "PIVOT.ITEM",
  316: "PIVOT.ADD.FIELDS",
  318: "OPTIONS.CALCULATION",
  319: "OPTIONS.EDIT",
  320: "OPTIONS.VIEW",
  321: "ADDIN.MANAGER",
  322: "MENU.EDITOR",
  323: "ATTACH.TOOLBARS",
  324: "VBAActivate",
  325: "OPTIONS.CHART",
  328: "VBA.INSERT.FILE",
  330: "VBA.PROCEDURE.DEFINITION",
  336: "ROUTING.SLIP",
  338: "ROUTE.DOCUMENT",
  339: "MAIL.LOGON",
  342: "INSERT.PICTURE",
  343: "EDIT.TOOL",
  344: "GALLERY.DOUGHNUT",
  350: "CHART.TREND",
  352: "PIVOT.ITEM.PROPERTIES",
  354: "WORKBOOK.INSERT",
  355: "OPTIONS.TRANSITION",
  356: "OPTIONS.GENERAL",
  370: "FILTER.ADVANCED",
  373: "MAIL.ADD.MAILER",
  374: "MAIL.DELETE.MAILER",
  375: "MAIL.REPLY",
  376: "MAIL.REPLY.ALL",
  377: "MAIL.FORWARD",
  378: "MAIL.NEXT.LETTER",
  379: "DATA.LABEL",
  380: "INSERT.TITLE",
  381: "FONT.PROPERTIES",
  382: "MACRO.OPTIONS",
  383: "WORKBOOK.HIDE",
  384: "WORKBOOK.UNHIDE",
  385: "WORKBOOK.DELETE",
  386: "WORKBOOK.NAME",
  388: "GALLERY.CUSTOM",
  390: "ADD.CHART.AUTOFORMAT",
  391: "DELETE.CHART.AUTOFORMAT",
  392: "CHART.ADD.DATA",
  393: "AUTO.OUTLINE",
  394: "TAB.ORDER",
  395: "SHOW.DIALOG",
  396: "SELECT.ALL",
  397: "UNGROUP.SHEETS",
  398: "SUBTOTAL.CREATE",
  399: "SUBTOTAL.REMOVE",
  400: "RENAME.OBJECT",
  412: "WORKBOOK.SCROLL",
  413: "WORKBOOK.NEXT",
  414: "WORKBOOK.PREV",
  415: "WORKBOOK.TAB.SPLIT",
  416: "FULL.SCREEN",
  417: "WORKBOOK.PROTECT",
  420: "SCROLLBAR.PROPERTIES",
  421: "PIVOT.SHOW.PAGES",
  422: "TEXT.TO.COLUMNS",
  423: "FORMAT.CHARTTYPE",
  424: "LINK.FORMAT",
  425: "TRACER.DISPLAY",
  430: "TRACER.NAVIGATE",
  431: "TRACER.CLEAR",
  432: "TRACER.ERROR",
  433: "PIVOT.FIELD.GROUP",
  434: "PIVOT.FIELD.UNGROUP",
  435: "CHECKBOX.PROPERTIES",
  436: "LABEL.PROPERTIES",
  437: "LISTBOX.PROPERTIES",
  438: "EDITBOX.PROPERTIES",
  439: "PIVOT.REFRESH",
  440: "LINK.COMBO",
  441: "OPEN.TEXT",
  442: "HIDE.DIALOG",
  443: "SET.DIALOG.FOCUS",
  444: "ENABLE.OBJECT",
  445: "PUSHBUTTON.PROPERTIES",
  446: "SET.DIALOG.DEFAULT",
  447: "FILTER",
  448: "FILTER.SHOW.ALL",
  449: "CLEAR.OUTLINE",
  450: "FUNCTION.WIZARD",
  451: "ADD.LIST.ITEM",
  452: "SET.LIST.ITEM",
  453: "REMOVE.LIST.ITEM",
  454: "SELECT.LIST.ITEM",
  455: "SET.CONTROL.VALUE",
  456: "SAVE.COPY.AS",
  458: "OPTIONS.LISTS.ADD",
  459: "OPTIONS.LISTS.DELETE",
  460: "SERIES.AXES",
  461: "SERIES.X",
  462: "SERIES.Y",
  463: "ERRORBAR.X",
  464: "ERRORBAR.Y",
  465: "FORMAT.CHART",
  466: "SERIES.ORDER",
  467: "MAIL.LOGOFF",
  468: "CLEAR.ROUTING.SLIP",
  469: "APP.ACTIVATE.MICROSOFT",
  470: "MAIL.EDIT.MAILER",
  471: "ON.SHEET",
  472: "STANDARD.WIDTH",
  473: "SCENARIO.MERGE",
  474: "SUMMARY.INFO",
  475: "FIND.FILE",
  476: "ACTIVE.CELL.FONT",
  477: "ENABLE.TIPWIZARD",
  478: "VBA.MAKE.ADDIN",
  480: "INSERTDATATABLE",
  481: "WORKGROUP.OPTIONS",
  482: "MAIL.SEND.MAILER",
  485: "AUTOCORRECT",
  489: "POST.DOCUMENT",
  491: "PICKLIST",
  493: "VIEW.SHOW",
  494: "VIEW.DEFINE",
  495: "VIEW.DELETE",
  509: "SHEET.BACKGROUND",
  510: "INSERT.MAP.OBJECT",
  511: "OPTIONS.MENONO",
  517: "MSOCHECKS",
  518: "NORMAL",
  519: "LAYOUT",
  520: "RM.PRINT.AREA",
  521: "CLEAR.PRINT.AREA",
  522: "ADD.PRINT.AREA",
  523: "MOVE.BRK",
  545: "HIDECURR.NOTE",
  546: "HIDEALL.NOTES",
  547: "DELETE.NOTE",
  548: "TRAVERSE.NOTES",
  549: "ACTIVATE.NOTES",
  620: "PROTECT.REVISIONS",
  621: "UNPROTECT.REVISIONS",
  647: "OPTIONS.ME",
  653: "WEB.PUBLISH",
  667: "NEWWEBQUERY",
  673: "PIVOT.TABLE.CHART",
  753: "OPTIONS.SAVE",
  755: "OPTIONS.SPELL",
  808: "HIDEALL.INKANNOTS"
}, Su = {
  0: "COUNT",
  1: "IF",
  2: "ISNA",
  3: "ISERROR",
  4: "SUM",
  5: "AVERAGE",
  6: "MIN",
  7: "MAX",
  8: "ROW",
  9: "COLUMN",
  10: "NA",
  11: "NPV",
  12: "STDEV",
  13: "DOLLAR",
  14: "FIXED",
  15: "SIN",
  16: "COS",
  17: "TAN",
  18: "ATAN",
  19: "PI",
  20: "SQRT",
  21: "EXP",
  22: "LN",
  23: "LOG10",
  24: "ABS",
  25: "INT",
  26: "SIGN",
  27: "ROUND",
  28: "LOOKUP",
  29: "INDEX",
  30: "REPT",
  31: "MID",
  32: "LEN",
  33: "VALUE",
  34: "TRUE",
  35: "FALSE",
  36: "AND",
  37: "OR",
  38: "NOT",
  39: "MOD",
  40: "DCOUNT",
  41: "DSUM",
  42: "DAVERAGE",
  43: "DMIN",
  44: "DMAX",
  45: "DSTDEV",
  46: "VAR",
  47: "DVAR",
  48: "TEXT",
  49: "LINEST",
  50: "TREND",
  51: "LOGEST",
  52: "GROWTH",
  53: "GOTO",
  54: "HALT",
  55: "RETURN",
  56: "PV",
  57: "FV",
  58: "NPER",
  59: "PMT",
  60: "RATE",
  61: "MIRR",
  62: "IRR",
  63: "RAND",
  64: "MATCH",
  65: "DATE",
  66: "TIME",
  67: "DAY",
  68: "MONTH",
  69: "YEAR",
  70: "WEEKDAY",
  71: "HOUR",
  72: "MINUTE",
  73: "SECOND",
  74: "NOW",
  75: "AREAS",
  76: "ROWS",
  77: "COLUMNS",
  78: "OFFSET",
  79: "ABSREF",
  80: "RELREF",
  81: "ARGUMENT",
  82: "SEARCH",
  83: "TRANSPOSE",
  84: "ERROR",
  85: "STEP",
  86: "TYPE",
  87: "ECHO",
  88: "SET.NAME",
  89: "CALLER",
  90: "DEREF",
  91: "WINDOWS",
  92: "SERIES",
  93: "DOCUMENTS",
  94: "ACTIVE.CELL",
  95: "SELECTION",
  96: "RESULT",
  97: "ATAN2",
  98: "ASIN",
  99: "ACOS",
  100: "CHOOSE",
  101: "HLOOKUP",
  102: "VLOOKUP",
  103: "LINKS",
  104: "INPUT",
  105: "ISREF",
  106: "GET.FORMULA",
  107: "GET.NAME",
  108: "SET.VALUE",
  109: "LOG",
  110: "EXEC",
  111: "CHAR",
  112: "LOWER",
  113: "UPPER",
  114: "PROPER",
  115: "LEFT",
  116: "RIGHT",
  117: "EXACT",
  118: "TRIM",
  119: "REPLACE",
  120: "SUBSTITUTE",
  121: "CODE",
  122: "NAMES",
  123: "DIRECTORY",
  124: "FIND",
  125: "CELL",
  126: "ISERR",
  127: "ISTEXT",
  128: "ISNUMBER",
  129: "ISBLANK",
  130: "T",
  131: "N",
  132: "FOPEN",
  133: "FCLOSE",
  134: "FSIZE",
  135: "FREADLN",
  136: "FREAD",
  137: "FWRITELN",
  138: "FWRITE",
  139: "FPOS",
  140: "DATEVALUE",
  141: "TIMEVALUE",
  142: "SLN",
  143: "SYD",
  144: "DDB",
  145: "GET.DEF",
  146: "REFTEXT",
  147: "TEXTREF",
  148: "INDIRECT",
  149: "REGISTER",
  150: "CALL",
  151: "ADD.BAR",
  152: "ADD.MENU",
  153: "ADD.COMMAND",
  154: "ENABLE.COMMAND",
  155: "CHECK.COMMAND",
  156: "RENAME.COMMAND",
  157: "SHOW.BAR",
  158: "DELETE.MENU",
  159: "DELETE.COMMAND",
  160: "GET.CHART.ITEM",
  161: "DIALOG.BOX",
  162: "CLEAN",
  163: "MDETERM",
  164: "MINVERSE",
  165: "MMULT",
  166: "FILES",
  167: "IPMT",
  168: "PPMT",
  169: "COUNTA",
  170: "CANCEL.KEY",
  171: "FOR",
  172: "WHILE",
  173: "BREAK",
  174: "NEXT",
  175: "INITIATE",
  176: "REQUEST",
  177: "POKE",
  178: "EXECUTE",
  179: "TERMINATE",
  180: "RESTART",
  181: "HELP",
  182: "GET.BAR",
  183: "PRODUCT",
  184: "FACT",
  185: "GET.CELL",
  186: "GET.WORKSPACE",
  187: "GET.WINDOW",
  188: "GET.DOCUMENT",
  189: "DPRODUCT",
  190: "ISNONTEXT",
  191: "GET.NOTE",
  192: "NOTE",
  193: "STDEVP",
  194: "VARP",
  195: "DSTDEVP",
  196: "DVARP",
  197: "TRUNC",
  198: "ISLOGICAL",
  199: "DCOUNTA",
  200: "DELETE.BAR",
  201: "UNREGISTER",
  204: "USDOLLAR",
  205: "FINDB",
  206: "SEARCHB",
  207: "REPLACEB",
  208: "LEFTB",
  209: "RIGHTB",
  210: "MIDB",
  211: "LENB",
  212: "ROUNDUP",
  213: "ROUNDDOWN",
  214: "ASC",
  215: "DBCS",
  216: "RANK",
  219: "ADDRESS",
  220: "DAYS360",
  221: "TODAY",
  222: "VDB",
  223: "ELSE",
  224: "ELSE.IF",
  225: "END.IF",
  226: "FOR.CELL",
  227: "MEDIAN",
  228: "SUMPRODUCT",
  229: "SINH",
  230: "COSH",
  231: "TANH",
  232: "ASINH",
  233: "ACOSH",
  234: "ATANH",
  235: "DGET",
  236: "CREATE.OBJECT",
  237: "VOLATILE",
  238: "LAST.ERROR",
  239: "CUSTOM.UNDO",
  240: "CUSTOM.REPEAT",
  241: "FORMULA.CONVERT",
  242: "GET.LINK.INFO",
  243: "TEXT.BOX",
  244: "INFO",
  245: "GROUP",
  246: "GET.OBJECT",
  247: "DB",
  248: "PAUSE",
  251: "RESUME",
  252: "FREQUENCY",
  253: "ADD.TOOLBAR",
  254: "DELETE.TOOLBAR",
  255: "User",
  256: "RESET.TOOLBAR",
  257: "EVALUATE",
  258: "GET.TOOLBAR",
  259: "GET.TOOL",
  260: "SPELLING.CHECK",
  261: "ERROR.TYPE",
  262: "APP.TITLE",
  263: "WINDOW.TITLE",
  264: "SAVE.TOOLBAR",
  265: "ENABLE.TOOL",
  266: "PRESS.TOOL",
  267: "REGISTER.ID",
  268: "GET.WORKBOOK",
  269: "AVEDEV",
  270: "BETADIST",
  271: "GAMMALN",
  272: "BETAINV",
  273: "BINOMDIST",
  274: "CHIDIST",
  275: "CHIINV",
  276: "COMBIN",
  277: "CONFIDENCE",
  278: "CRITBINOM",
  279: "EVEN",
  280: "EXPONDIST",
  281: "FDIST",
  282: "FINV",
  283: "FISHER",
  284: "FISHERINV",
  285: "FLOOR",
  286: "GAMMADIST",
  287: "GAMMAINV",
  288: "CEILING",
  289: "HYPGEOMDIST",
  290: "LOGNORMDIST",
  291: "LOGINV",
  292: "NEGBINOMDIST",
  293: "NORMDIST",
  294: "NORMSDIST",
  295: "NORMINV",
  296: "NORMSINV",
  297: "STANDARDIZE",
  298: "ODD",
  299: "PERMUT",
  300: "POISSON",
  301: "TDIST",
  302: "WEIBULL",
  303: "SUMXMY2",
  304: "SUMX2MY2",
  305: "SUMX2PY2",
  306: "CHITEST",
  307: "CORREL",
  308: "COVAR",
  309: "FORECAST",
  310: "FTEST",
  311: "INTERCEPT",
  312: "PEARSON",
  313: "RSQ",
  314: "STEYX",
  315: "SLOPE",
  316: "TTEST",
  317: "PROB",
  318: "DEVSQ",
  319: "GEOMEAN",
  320: "HARMEAN",
  321: "SUMSQ",
  322: "KURT",
  323: "SKEW",
  324: "ZTEST",
  325: "LARGE",
  326: "SMALL",
  327: "QUARTILE",
  328: "PERCENTILE",
  329: "PERCENTRANK",
  330: "MODE",
  331: "TRIMMEAN",
  332: "TINV",
  334: "MOVIE.COMMAND",
  335: "GET.MOVIE",
  336: "CONCATENATE",
  337: "POWER",
  338: "PIVOT.ADD.DATA",
  339: "GET.PIVOT.TABLE",
  340: "GET.PIVOT.FIELD",
  341: "GET.PIVOT.ITEM",
  342: "RADIANS",
  343: "DEGREES",
  344: "SUBTOTAL",
  345: "SUMIF",
  346: "COUNTIF",
  347: "COUNTBLANK",
  348: "SCENARIO.GET",
  349: "OPTIONS.LISTS.GET",
  350: "ISPMT",
  351: "DATEDIF",
  352: "DATESTRING",
  353: "NUMBERSTRING",
  354: "ROMAN",
  355: "OPEN.DIALOG",
  356: "SAVE.DIALOG",
  357: "VIEW.GET",
  358: "GETPIVOTDATA",
  359: "HYPERLINK",
  360: "PHONETIC",
  361: "AVERAGEA",
  362: "MAXA",
  363: "MINA",
  364: "STDEVPA",
  365: "VARPA",
  366: "STDEVA",
  367: "VARA",
  368: "BAHTTEXT",
  369: "THAIDAYOFWEEK",
  370: "THAIDIGIT",
  371: "THAIMONTHOFYEAR",
  372: "THAINUMSOUND",
  373: "THAINUMSTRING",
  374: "THAISTRINGLENGTH",
  375: "ISTHAIDIGIT",
  376: "ROUNDBAHTDOWN",
  377: "ROUNDBAHTUP",
  378: "THAIYEAR",
  379: "RTD",
  380: "CUBEVALUE",
  381: "CUBEMEMBER",
  382: "CUBEMEMBERPROPERTY",
  383: "CUBERANKEDMEMBER",
  384: "HEX2BIN",
  385: "HEX2DEC",
  386: "HEX2OCT",
  387: "DEC2BIN",
  388: "DEC2HEX",
  389: "DEC2OCT",
  390: "OCT2BIN",
  391: "OCT2HEX",
  392: "OCT2DEC",
  393: "BIN2DEC",
  394: "BIN2OCT",
  395: "BIN2HEX",
  396: "IMSUB",
  397: "IMDIV",
  398: "IMPOWER",
  399: "IMABS",
  400: "IMSQRT",
  401: "IMLN",
  402: "IMLOG2",
  403: "IMLOG10",
  404: "IMSIN",
  405: "IMCOS",
  406: "IMEXP",
  407: "IMARGUMENT",
  408: "IMCONJUGATE",
  409: "IMAGINARY",
  410: "IMREAL",
  411: "COMPLEX",
  412: "IMSUM",
  413: "IMPRODUCT",
  414: "SERIESSUM",
  415: "FACTDOUBLE",
  416: "SQRTPI",
  417: "QUOTIENT",
  418: "DELTA",
  419: "GESTEP",
  420: "ISEVEN",
  421: "ISODD",
  422: "MROUND",
  423: "ERF",
  424: "ERFC",
  425: "BESSELJ",
  426: "BESSELK",
  427: "BESSELY",
  428: "BESSELI",
  429: "XIRR",
  430: "XNPV",
  431: "PRICEMAT",
  432: "YIELDMAT",
  433: "INTRATE",
  434: "RECEIVED",
  435: "DISC",
  436: "PRICEDISC",
  437: "YIELDDISC",
  438: "TBILLEQ",
  439: "TBILLPRICE",
  440: "TBILLYIELD",
  441: "PRICE",
  442: "YIELD",
  443: "DOLLARDE",
  444: "DOLLARFR",
  445: "NOMINAL",
  446: "EFFECT",
  447: "CUMPRINC",
  448: "CUMIPMT",
  449: "EDATE",
  450: "EOMONTH",
  451: "YEARFRAC",
  452: "COUPDAYBS",
  453: "COUPDAYS",
  454: "COUPDAYSNC",
  455: "COUPNCD",
  456: "COUPNUM",
  457: "COUPPCD",
  458: "DURATION",
  459: "MDURATION",
  460: "ODDLPRICE",
  461: "ODDLYIELD",
  462: "ODDFPRICE",
  463: "ODDFYIELD",
  464: "RANDBETWEEN",
  465: "WEEKNUM",
  466: "AMORDEGRC",
  467: "AMORLINC",
  468: "CONVERT",
  724: "SHEETJS",
  469: "ACCRINT",
  470: "ACCRINTM",
  471: "WORKDAY",
  472: "NETWORKDAYS",
  473: "GCD",
  474: "MULTINOMIAL",
  475: "LCM",
  476: "FVSCHEDULE",
  477: "CUBEKPIMEMBER",
  478: "CUBESET",
  479: "CUBESETCOUNT",
  480: "IFERROR",
  481: "COUNTIFS",
  482: "SUMIFS",
  483: "AVERAGEIF",
  484: "AVERAGEIFS"
}, ww = {
  2: 1,
  3: 1,
  10: 0,
  15: 1,
  16: 1,
  17: 1,
  18: 1,
  19: 0,
  20: 1,
  21: 1,
  22: 1,
  23: 1,
  24: 1,
  25: 1,
  26: 1,
  27: 2,
  30: 2,
  31: 3,
  32: 1,
  33: 1,
  34: 0,
  35: 0,
  38: 1,
  39: 2,
  40: 3,
  41: 3,
  42: 3,
  43: 3,
  44: 3,
  45: 3,
  47: 3,
  48: 2,
  53: 1,
  61: 3,
  63: 0,
  65: 3,
  66: 3,
  67: 1,
  68: 1,
  69: 1,
  70: 1,
  71: 1,
  72: 1,
  73: 1,
  74: 0,
  75: 1,
  76: 1,
  77: 1,
  79: 2,
  80: 2,
  83: 1,
  85: 0,
  86: 1,
  89: 0,
  90: 1,
  94: 0,
  95: 0,
  97: 2,
  98: 1,
  99: 1,
  101: 3,
  102: 3,
  105: 1,
  106: 1,
  108: 2,
  111: 1,
  112: 1,
  113: 1,
  114: 1,
  117: 2,
  118: 1,
  119: 4,
  121: 1,
  126: 1,
  127: 1,
  128: 1,
  129: 1,
  130: 1,
  131: 1,
  133: 1,
  134: 1,
  135: 1,
  136: 2,
  137: 2,
  138: 2,
  140: 1,
  141: 1,
  142: 3,
  143: 4,
  144: 4,
  161: 1,
  162: 1,
  163: 1,
  164: 1,
  165: 2,
  172: 1,
  175: 2,
  176: 2,
  177: 3,
  178: 2,
  179: 1,
  184: 1,
  186: 1,
  189: 3,
  190: 1,
  195: 3,
  196: 3,
  197: 1,
  198: 1,
  199: 3,
  201: 1,
  207: 4,
  210: 3,
  211: 1,
  212: 2,
  213: 2,
  214: 1,
  215: 1,
  225: 0,
  229: 1,
  230: 1,
  231: 1,
  232: 1,
  233: 1,
  234: 1,
  235: 3,
  244: 1,
  247: 4,
  252: 2,
  257: 1,
  261: 1,
  271: 1,
  273: 4,
  274: 2,
  275: 2,
  276: 2,
  277: 3,
  278: 3,
  279: 1,
  280: 3,
  281: 3,
  282: 3,
  283: 1,
  284: 1,
  285: 2,
  286: 4,
  287: 3,
  288: 2,
  289: 4,
  290: 3,
  291: 3,
  292: 3,
  293: 4,
  294: 1,
  295: 3,
  296: 1,
  297: 3,
  298: 1,
  299: 2,
  300: 3,
  301: 3,
  302: 4,
  303: 2,
  304: 2,
  305: 2,
  306: 2,
  307: 2,
  308: 2,
  309: 3,
  310: 2,
  311: 2,
  312: 2,
  313: 2,
  314: 2,
  315: 2,
  316: 4,
  325: 2,
  326: 2,
  327: 2,
  328: 2,
  331: 2,
  332: 2,
  337: 2,
  342: 1,
  343: 1,
  346: 2,
  347: 1,
  350: 4,
  351: 3,
  352: 1,
  353: 2,
  360: 1,
  368: 1,
  369: 1,
  370: 1,
  371: 1,
  372: 1,
  373: 1,
  374: 1,
  375: 1,
  376: 1,
  377: 1,
  378: 1,
  382: 3,
  385: 1,
  392: 1,
  393: 1,
  396: 2,
  397: 2,
  398: 2,
  399: 1,
  400: 1,
  401: 1,
  402: 1,
  403: 1,
  404: 1,
  405: 1,
  406: 1,
  407: 1,
  408: 1,
  409: 1,
  410: 1,
  414: 4,
  415: 1,
  416: 1,
  417: 2,
  420: 1,
  421: 1,
  422: 2,
  424: 1,
  425: 2,
  426: 2,
  427: 2,
  428: 2,
  430: 3,
  438: 3,
  439: 3,
  440: 3,
  443: 2,
  444: 2,
  445: 2,
  446: 2,
  447: 6,
  448: 6,
  449: 2,
  450: 2,
  464: 2,
  468: 3,
  476: 2,
  479: 1,
  480: 2,
  65535: 0
};
function Ew(e) {
  var t = "of:=" + e.replace(m0, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":");
  return t.replace(/;/g, "|").replace(/,/g, ";");
}
function Sw(e) {
  return e.replace(/\./, "!");
}
var pi = typeof Map < "u";
function x0(e, t, r) {
  var n = 0, i = e.length;
  if (r) {
    if (pi ? r.has(t) : Object.prototype.hasOwnProperty.call(r, t)) {
      for (var a = pi ? r.get(t) : r[t]; n < a.length; ++n)
        if (e[a[n]].t === t)
          return e.Count++, a[n];
    }
  } else
    for (; n < i; ++n)
      if (e[n].t === t)
        return e.Count++, n;
  return e[i] = { t }, e.Count++, e.Unique++, r && (pi ? (r.has(t) || r.set(t, []), r.get(t).push(i)) : (Object.prototype.hasOwnProperty.call(r, t) || (r[t] = []), r[t].push(i))), i;
}
function Ja(e, t) {
  var r = { min: e + 1, max: e + 1 }, n = -1;
  return t.MDW && (vr = t.MDW), t.width != null ? r.customWidth = 1 : t.wpx != null ? n = wa(t.wpx) : t.wch != null && (n = t.wch), n > -1 ? (r.width = Oo(n), r.customWidth = 1) : t.width != null && (r.width = t.width), t.hidden && (r.hidden = !0), t.level != null && (r.outlineLevel = r.level = t.level), r;
}
function Tu(e, t) {
  if (e) {
    var r = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    t == "xlml" && (r = [1, 1, 1, 1, 0.5, 0.5]), e.left == null && (e.left = r[0]), e.right == null && (e.right = r[1]), e.top == null && (e.top = r[2]), e.bottom == null && (e.bottom = r[3]), e.header == null && (e.header = r[4]), e.footer == null && (e.footer = r[5]);
  }
}
function zr(e, t, r) {
  var n = r.revssf[t.z != null ? t.z : "General"], i = 60, a = e.length;
  if (n == null && r.ssf) {
    for (; i < 392; ++i)
      if (r.ssf[i] == null) {
        _c(t.z, i), r.ssf[i] = t.z, r.revssf[t.z] = n = i;
        break;
      }
  }
  for (i = 0; i != a; ++i)
    if (e[i].numFmtId === n)
      return i;
  return e[a] = {
    numFmtId: n,
    fontId: 0,
    fillId: 0,
    borderId: 0,
    xfId: 0,
    applyNumberFormat: 1
  }, a;
}
function Tw(e, t, r) {
  if (e && e["!ref"]) {
    var n = Pe(e["!ref"]);
    if (n.e.c < n.s.c || n.e.r < n.s.r)
      throw new Error("Bad range (" + r + "): " + e["!ref"]);
  }
}
function Aw(e) {
  if (e.length === 0)
    return "";
  for (var t = '<mergeCells count="' + e.length + '">', r = 0; r != e.length; ++r)
    t += '<mergeCell ref="' + ze(e[r]) + '"/>';
  return t + "</mergeCells>";
}
function Cw(e, t, r, n, i) {
  var a = !1, s = {}, o = null;
  if (n.bookType !== "xlsx" && t.vbaraw) {
    var l = t.SheetNames[r];
    try {
      t.Workbook && (l = t.Workbook.Sheets[r].CodeName || l);
    } catch {
    }
    a = !0, s.codeName = pr(be(l));
  }
  if (e && e["!outline"]) {
    var f = { summaryBelow: 1, summaryRight: 1 };
    e["!outline"].above && (f.summaryBelow = 0), e["!outline"].left && (f.summaryRight = 0), o = (o || "") + ie("outlinePr", null, f);
  }
  !a && !o || (i[i.length] = ie("sheetPr", o, s));
}
var Fw = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"], Ow = [
  "formatColumns",
  "formatRows",
  "formatCells",
  "insertColumns",
  "insertRows",
  "insertHyperlinks",
  "deleteColumns",
  "deleteRows",
  "sort",
  "autoFilter",
  "pivotTables"
];
function bw(e) {
  var t = { sheet: 1 };
  return Fw.forEach(function(r) {
    e[r] != null && e[r] && (t[r] = "1");
  }), Ow.forEach(function(r) {
    e[r] != null && !e[r] && (t[r] = "0");
  }), e.password && (t.password = ou(e.password).toString(16).toUpperCase()), ie("sheetProtection", null, t);
}
function kw(e) {
  return Tu(e), ie("pageMargins", null, e);
}
function Mw(e, t) {
  for (var r = ["<cols>"], n, i = 0; i != t.length; ++i)
    (n = t[i]) && (r[r.length] = ie("col", null, Ja(i, n)));
  return r[r.length] = "</cols>", r.join("");
}
function Dw(e, t, r, n) {
  var i = typeof e.ref == "string" ? e.ref : ze(e.ref);
  r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = []);
  var a = r.Workbook.Names, s = It(i);
  s.s.r == s.e.r && (s.e.r = It(t["!ref"]).e.r, i = ze(s));
  for (var o = 0; o < a.length; ++o) {
    var l = a[o];
    if (l.Name == "_xlnm._FilterDatabase" && l.Sheet == n) {
      l.Ref = "'" + r.SheetNames[n] + "'!" + i;
      break;
    }
  }
  return o == a.length && a.push({ Name: "_xlnm._FilterDatabase", Sheet: n, Ref: "'" + r.SheetNames[n] + "'!" + i }), ie("autoFilter", null, { ref: i });
}
function Iw(e, t, r, n) {
  var i = { workbookViewId: "0" };
  return (((n || {}).Workbook || {}).Views || [])[0] && (i.rightToLeft = n.Workbook.Views[0].RTL ? "1" : "0"), ie("sheetViews", ie("sheetView", null, i), {});
}
function Pw(e, t, r, n) {
  if (e.c && r["!comments"].push([t, e.c]), e.v === void 0 && typeof e.f != "string" || e.t === "z" && !e.f)
    return "";
  var i = "", a = e.t, s = e.v;
  if (e.t !== "z")
    switch (e.t) {
      case "b":
        i = e.v ? "1" : "0";
        break;
      case "n":
        i = "" + e.v;
        break;
      case "e":
        i = Mi[e.v];
        break;
      case "d":
        n && n.cellDates ? i = wt(e.v, -1).toISOString() : (e = Ct(e), e.t = "n", i = "" + (e.v = At(wt(e.v)))), typeof e.z > "u" && (e.z = Ue[14]);
        break;
      default:
        i = e.v;
        break;
    }
  var o = it("v", be(i)), l = { r: t }, f = zr(n.cellXfs, e, n);
  switch (f !== 0 && (l.s = f), e.t) {
    case "n":
      break;
    case "d":
      l.t = "d";
      break;
    case "b":
      l.t = "b";
      break;
    case "e":
      l.t = "e";
      break;
    case "z":
      break;
    default:
      if (e.v == null) {
        delete e.t;
        break;
      }
      if (e.v.length > 32767)
        throw new Error("Text length must not exceed 32767 characters");
      if (n && n.bookSST) {
        o = it("v", "" + x0(n.Strings, e.v, n.revStrings)), l.t = "s";
        break;
      }
      l.t = "str";
      break;
  }
  if (e.t != a && (e.t = a, e.v = s), typeof e.f == "string" && e.f) {
    var c = e.F && e.F.slice(0, t.length) == t ? { t: "array", ref: e.F } : null;
    o = ie("f", be(e.f), c) + (e.v != null ? o : "");
  }
  return e.l && r["!links"].push([t, e.l]), e.D && (l.cm = 1), ie("c", o, l);
}
function Rw(e, t, r, n) {
  var i = [], a = [], s = Pe(e["!ref"]), o = "", l, f = "", c = [], u = 0, h = 0, d = e["!rows"], v = Array.isArray(e), p = { r: f }, m, g = -1;
  for (h = s.s.c; h <= s.e.c; ++h)
    c[h] = ht(h);
  for (u = s.s.r; u <= s.e.r; ++u) {
    for (a = [], f = at(u), h = s.s.c; h <= s.e.c; ++h) {
      l = c[h] + f;
      var x = v ? (e[u] || [])[h] : e[l];
      x !== void 0 && (o = Pw(x, l, e, t)) != null && a.push(o);
    }
    (a.length > 0 || d && d[u]) && (p = { r: f }, d && d[u] && (m = d[u], m.hidden && (p.hidden = 1), g = -1, m.hpx ? g = Ea(m.hpx) : m.hpt && (g = m.hpt), g > -1 && (p.ht = g, p.customHeight = 1), m.level && (p.outlineLevel = m.level)), i[i.length] = ie("row", a.join(""), p));
  }
  if (d)
    for (; u < d.length; ++u)
      d && d[u] && (p = { r: u + 1 }, m = d[u], m.hidden && (p.hidden = 1), g = -1, m.hpx ? g = Ea(m.hpx) : m.hpt && (g = m.hpt), g > -1 && (p.ht = g, p.customHeight = 1), m.level && (p.outlineLevel = m.level), i[i.length] = ie("row", "", p));
  return i.join("");
}
function Au(e, t, r, n) {
  var i = [Ve, ie("worksheet", null, {
    xmlns: Vn[0],
    "xmlns:r": Qe.r
  })], a = r.SheetNames[e], s = 0, o = "", l = r.Sheets[a];
  l == null && (l = {});
  var f = l["!ref"] || "A1", c = Pe(f);
  if (c.e.c > 16383 || c.e.r > 1048575) {
    if (t.WTF)
      throw new Error("Range " + f + " exceeds format limit A1:XFD1048576");
    c.e.c = Math.min(c.e.c, 16383), c.e.r = Math.min(c.e.c, 1048575), f = ze(c);
  }
  n || (n = {}), l["!comments"] = [];
  var u = [];
  Cw(l, r, e, t, i), i[i.length] = ie("dimension", null, { ref: f }), i[i.length] = Iw(l, t, e, r), t.sheetFormat && (i[i.length] = ie("sheetFormatPr", null, {
    defaultRowHeight: t.sheetFormat.defaultRowHeight || "16",
    baseColWidth: t.sheetFormat.baseColWidth || "10",
    outlineLevelRow: t.sheetFormat.outlineLevelRow || "7"
  })), l["!cols"] != null && l["!cols"].length > 0 && (i[i.length] = Mw(l, l["!cols"])), i[s = i.length] = "<sheetData/>", l["!links"] = [], l["!ref"] != null && (o = Rw(l, t), o.length > 0 && (i[i.length] = o)), i.length > s + 1 && (i[i.length] = "</sheetData>", i[s] = i[s].replace("/>", ">")), l["!protect"] && (i[i.length] = bw(l["!protect"])), l["!autofilter"] != null && (i[i.length] = Dw(l["!autofilter"], l, r, e)), l["!merges"] != null && l["!merges"].length > 0 && (i[i.length] = Aw(l["!merges"]));
  var h = -1, d, v = -1;
  return (
    /*::(*/
    l["!links"].length > 0 && (i[i.length] = "<hyperlinks>", l["!links"].forEach(function(p) {
      p[1].Target && (d = { ref: p[0] }, p[1].Target.charAt(0) != "#" && (v = Oe(n, -1, be(p[1].Target).replace(/#.*$/, ""), Te.HLINK), d["r:id"] = "rId" + v), (h = p[1].Target.indexOf("#")) > -1 && (d.location = be(p[1].Target.slice(h + 1))), p[1].Tooltip && (d.tooltip = be(p[1].Tooltip)), i[i.length] = ie("hyperlink", null, d));
    }), i[i.length] = "</hyperlinks>"), delete l["!links"], l["!margins"] != null && (i[i.length] = kw(l["!margins"])), (!t || t.ignoreEC || t.ignoreEC == null) && (i[i.length] = it("ignoredErrors", ie("ignoredError", null, { numberStoredAsText: 1, sqref: f }))), u.length > 0 && (v = Oe(n, -1, "../drawings/drawing" + (e + 1) + ".xml", Te.DRAW), i[i.length] = ie("drawing", null, { "r:id": "rId" + v }), l["!drawing"] = u), l["!comments"].length > 0 && (v = Oe(n, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", Te.VML), i[i.length] = ie("legacyDrawing", null, { "r:id": "rId" + v }), l["!legacy"] = v), i.length > 1 && (i[i.length] = "</worksheet>", i[1] = i[1].replace("/>", ">")), i.join("")
  );
}
function Nw(e, t) {
  var r = {}, n = e.l + t;
  r.r = e.read_shift(4), e.l += 4;
  var i = e.read_shift(2);
  e.l += 1;
  var a = e.read_shift(1);
  return e.l = n, a & 7 && (r.level = a & 7), a & 16 && (r.hidden = !0), a & 32 && (r.hpt = i / 20), r;
}
function Lw(e, t, r) {
  var n = X(145), i = (r["!rows"] || [])[e] || {};
  n.write_shift(4, e), n.write_shift(4, 0);
  var a = 320;
  i.hpx ? a = Ea(i.hpx) * 20 : i.hpt && (a = i.hpt * 20), n.write_shift(2, a), n.write_shift(1, 0);
  var s = 0;
  i.level && (s |= i.level), i.hidden && (s |= 16), (i.hpx || i.hpt) && (s |= 32), n.write_shift(1, s), n.write_shift(1, 0);
  var o = 0, l = n.l;
  n.l += 4;
  for (var f = { r: e, c: 0 }, c = 0; c < 16; ++c)
    if (!(t.s.c > c + 1 << 10 || t.e.c < c << 10)) {
      for (var u = -1, h = -1, d = c << 10; d < c + 1 << 10; ++d) {
        f.c = d;
        var v = Array.isArray(r) ? (r[f.r] || [])[f.c] : r[ke(f)];
        v && (u < 0 && (u = d), h = d);
      }
      u < 0 || (++o, n.write_shift(4, u), n.write_shift(4, h));
    }
  var p = n.l;
  return n.l = l, n.write_shift(4, o), n.l = p, n.length > n.l ? n.slice(0, n.l) : n;
}
function Bw(e, t, r, n) {
  var i = Lw(n, r, t);
  (i.length > 17 || (t["!rows"] || [])[n]) && Q(e, 0, i);
}
var $w = pn, Uw = Xn;
function Hw() {
}
function Ww(e, t) {
  var r = {}, n = e[e.l];
  return ++e.l, r.above = !(n & 64), r.left = !(n & 128), e.l += 18, r.name = Qx(e), r;
}
function zw(e, t, r) {
  r == null && (r = X(84 + 4 * e.length));
  var n = 192;
  t && (t.above && (n &= -65), t.left && (n &= -129)), r.write_shift(1, n);
  for (var i = 1; i < 3; ++i)
    r.write_shift(1, 0);
  return xa({ auto: 1 }, r), r.write_shift(-4, -1), r.write_shift(-4, -1), Uc(e, r), r.slice(0, r.l);
}
function Vw(e) {
  var t = Ht(e);
  return [t];
}
function Gw(e, t, r) {
  return r == null && (r = X(8)), un(t, r);
}
function Xw(e) {
  var t = hn(e);
  return [t];
}
function jw(e, t, r) {
  return r == null && (r = X(4)), dn(t, r);
}
function Yw(e) {
  var t = Ht(e), r = e.read_shift(1);
  return [t, r, "b"];
}
function qw(e, t, r) {
  return r == null && (r = X(9)), un(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function Kw(e) {
  var t = hn(e), r = e.read_shift(1);
  return [t, r, "b"];
}
function Jw(e, t, r) {
  return r == null && (r = X(5)), dn(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function Qw(e) {
  var t = Ht(e), r = e.read_shift(1);
  return [t, r, "e"];
}
function Zw(e, t, r) {
  return r == null && (r = X(9)), un(t, r), r.write_shift(1, e.v), r;
}
function e4(e) {
  var t = hn(e), r = e.read_shift(1);
  return [t, r, "e"];
}
function t4(e, t, r) {
  return r == null && (r = X(8)), dn(t, r), r.write_shift(1, e.v), r.write_shift(2, 0), r.write_shift(1, 0), r;
}
function r4(e) {
  var t = Ht(e), r = e.read_shift(4);
  return [t, r, "s"];
}
function n4(e, t, r) {
  return r == null && (r = X(12)), un(t, r), r.write_shift(4, t.v), r;
}
function i4(e) {
  var t = hn(e), r = e.read_shift(4);
  return [t, r, "s"];
}
function a4(e, t, r) {
  return r == null && (r = X(8)), dn(t, r), r.write_shift(4, t.v), r;
}
function s4(e) {
  var t = Ht(e), r = jn(e);
  return [t, r, "n"];
}
function o4(e, t, r) {
  return r == null && (r = X(16)), un(t, r), sn(e.v, r), r;
}
function l4(e) {
  var t = hn(e), r = jn(e);
  return [t, r, "n"];
}
function f4(e, t, r) {
  return r == null && (r = X(12)), dn(t, r), sn(e.v, r), r;
}
function c4(e) {
  var t = Ht(e), r = Hc(e);
  return [t, r, "n"];
}
function u4(e, t, r) {
  return r == null && (r = X(12)), un(t, r), Wc(e.v, r), r;
}
function h4(e) {
  var t = hn(e), r = Hc(e);
  return [t, r, "n"];
}
function d4(e, t, r) {
  return r == null && (r = X(8)), dn(t, r), Wc(e.v, r), r;
}
function p4(e) {
  var t = Ht(e), r = c0(e);
  return [t, r, "is"];
}
function m4(e) {
  var t = Ht(e), r = dt(e);
  return [t, r, "str"];
}
function g4(e, t, r) {
  return r == null && (r = X(12 + 4 * e.v.length)), un(t, r), et(e.v, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function v4(e) {
  var t = hn(e), r = dt(e);
  return [t, r, "str"];
}
function x4(e, t, r) {
  return r == null && (r = X(8 + 4 * e.v.length)), dn(t, r), et(e.v, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function _4(e, t, r) {
  var n = e.l + t, i = Ht(e);
  i.r = r["!row"];
  var a = e.read_shift(1), s = [i, a, "b"];
  if (r.cellFormula) {
    e.l += 2;
    var o = Ka(e, n - e.l, r);
    s[3] = Rn(o, null, i, r.supbooks, r);
  } else
    e.l = n;
  return s;
}
function y4(e, t, r) {
  var n = e.l + t, i = Ht(e);
  i.r = r["!row"];
  var a = e.read_shift(1), s = [i, a, "e"];
  if (r.cellFormula) {
    e.l += 2;
    var o = Ka(e, n - e.l, r);
    s[3] = Rn(o, null, i, r.supbooks, r);
  } else
    e.l = n;
  return s;
}
function w4(e, t, r) {
  var n = e.l + t, i = Ht(e);
  i.r = r["!row"];
  var a = jn(e), s = [i, a, "n"];
  if (r.cellFormula) {
    e.l += 2;
    var o = Ka(e, n - e.l, r);
    s[3] = Rn(o, null, i, r.supbooks, r);
  } else
    e.l = n;
  return s;
}
function E4(e, t, r) {
  var n = e.l + t, i = Ht(e);
  i.r = r["!row"];
  var a = dt(e), s = [i, a, "str"];
  if (r.cellFormula) {
    e.l += 2;
    var o = Ka(e, n - e.l, r);
    s[3] = Rn(o, null, i, r.supbooks, r);
  } else
    e.l = n;
  return s;
}
var S4 = pn, T4 = Xn;
function A4(e, t) {
  return t == null && (t = X(4)), t.write_shift(4, e), t;
}
function C4(e, t) {
  var r = e.l + t, n = pn(e), i = u0(e), a = dt(e), s = dt(e), o = dt(e);
  e.l = r;
  var l = { rfx: n, relId: i, loc: a, display: o };
  return s && (l.Tooltip = s), l;
}
function F4(e, t) {
  var r = X(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
  Xn({ s: Ze(e[0]), e: Ze(e[0]) }, r), h0("rId" + t, r);
  var n = e[1].Target.indexOf("#"), i = n == -1 ? "" : e[1].Target.slice(n + 1);
  return et(i || "", r), et(e[1].Tooltip || "", r), et("", r), r.slice(0, r.l);
}
function O4() {
}
function b4(e, t, r) {
  var n = e.l + t, i = zc(e), a = e.read_shift(1), s = [i];
  if (s[2] = a, r.cellFormula) {
    var o = vw(e, n - e.l, r);
    s[1] = o;
  } else
    e.l = n;
  return s;
}
function k4(e, t, r) {
  var n = e.l + t, i = pn(e), a = [i];
  if (r.cellFormula) {
    var s = _w(e, n - e.l, r);
    a[1] = s, e.l = n;
  } else
    e.l = n;
  return a;
}
function M4(e, t, r) {
  r == null && (r = X(18));
  var n = Ja(e, t);
  r.write_shift(-4, e), r.write_shift(-4, e), r.write_shift(4, (n.width || 10) * 256), r.write_shift(
    4,
    0
    /*ixfe*/
  );
  var i = 0;
  return t.hidden && (i |= 1), typeof n.width == "number" && (i |= 2), t.level && (i |= t.level << 8), r.write_shift(2, i), r;
}
var Cu = ["left", "right", "top", "bottom", "header", "footer"];
function D4(e) {
  var t = {};
  return Cu.forEach(function(r) {
    t[r] = jn(e);
  }), t;
}
function I4(e, t) {
  return t == null && (t = X(6 * 8)), Tu(e), Cu.forEach(function(r) {
    sn(e[r], t);
  }), t;
}
function P4(e) {
  var t = e.read_shift(2);
  return e.l += 28, { RTL: t & 32 };
}
function R4(e, t, r) {
  r == null && (r = X(30));
  var n = 924;
  return (((t || {}).Views || [])[0] || {}).RTL && (n |= 32), r.write_shift(2, n), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(2, 0), r.write_shift(2, 100), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(4, 0), r;
}
function N4(e) {
  var t = X(24);
  return t.write_shift(4, 4), t.write_shift(4, 1), Xn(e, t), t;
}
function L4(e, t) {
  return t == null && (t = X(16 * 4 + 2)), t.write_shift(2, e.password ? ou(e.password) : 0), t.write_shift(4, 1), [
    ["objects", !1],
    // fObjects
    ["scenarios", !1],
    // fScenarios
    ["formatCells", !0],
    // fFormatCells
    ["formatColumns", !0],
    // fFormatColumns
    ["formatRows", !0],
    // fFormatRows
    ["insertColumns", !0],
    // fInsertColumns
    ["insertRows", !0],
    // fInsertRows
    ["insertHyperlinks", !0],
    // fInsertHyperlinks
    ["deleteColumns", !0],
    // fDeleteColumns
    ["deleteRows", !0],
    // fDeleteRows
    ["selectLockedCells", !1],
    // fSelLockedCells
    ["sort", !0],
    // fSort
    ["autoFilter", !0],
    // fAutoFilter
    ["pivotTables", !0],
    // fPivotTables
    ["selectUnlockedCells", !1]
    // fSelUnlockedCells
  ].forEach(function(r) {
    r[1] ? t.write_shift(4, e[r[0]] != null && !e[r[0]] ? 1 : 0) : t.write_shift(4, e[r[0]] != null && e[r[0]] ? 0 : 1);
  }), t;
}
function B4() {
}
function $4() {
}
function U4(e, t, r, n, i, a, s) {
  if (t.v === void 0)
    return !1;
  var o = "";
  switch (t.t) {
    case "b":
      o = t.v ? "1" : "0";
      break;
    case "d":
      t = Ct(t), t.z = t.z || Ue[14], t.v = At(wt(t.v)), t.t = "n";
      break;
    case "n":
    case "e":
      o = "" + t.v;
      break;
    default:
      o = t.v;
      break;
  }
  var l = { r, c: n };
  switch (l.s = zr(i.cellXfs, t, i), t.l && a["!links"].push([ke(l), t.l]), t.c && a["!comments"].push([ke(l), t.c]), t.t) {
    case "s":
    case "str":
      return i.bookSST ? (o = x0(i.Strings, t.v, i.revStrings), l.t = "s", l.v = o, s ? Q(e, 18, a4(t, l)) : Q(e, 7, n4(t, l))) : (l.t = "str", s ? Q(e, 17, x4(t, l)) : Q(e, 6, g4(t, l))), !0;
    case "n":
      return t.v == (t.v | 0) && t.v > -1e3 && t.v < 1e3 ? s ? Q(e, 13, d4(t, l)) : Q(e, 2, u4(t, l)) : s ? Q(e, 16, f4(t, l)) : Q(e, 5, o4(t, l)), !0;
    case "b":
      return l.t = "b", s ? Q(e, 15, Jw(t, l)) : Q(e, 4, qw(t, l)), !0;
    case "e":
      return l.t = "e", s ? Q(e, 14, t4(t, l)) : Q(e, 3, Zw(t, l)), !0;
  }
  return s ? Q(e, 12, jw(t, l)) : Q(e, 1, Gw(t, l)), !0;
}
function H4(e, t, r, n) {
  var i = Pe(t["!ref"] || "A1"), a, s = "", o = [];
  Q(
    e,
    145
    /* BrtBeginSheetData */
  );
  var l = Array.isArray(t), f = i.e.r;
  t["!rows"] && (f = Math.max(i.e.r, t["!rows"].length - 1));
  for (var c = i.s.r; c <= f; ++c) {
    s = at(c), Bw(e, t, i, c);
    var u = !1;
    if (c <= i.e.r)
      for (var h = i.s.c; h <= i.e.c; ++h) {
        c === i.s.r && (o[h] = ht(h)), a = o[h] + s;
        var d = l ? (t[c] || [])[h] : t[a];
        if (!d) {
          u = !1;
          continue;
        }
        u = U4(e, d, c, h, n, t, u);
      }
  }
  Q(
    e,
    146
    /* BrtEndSheetData */
  );
}
function W4(e, t) {
  !t || !t["!merges"] || (Q(e, 177, A4(t["!merges"].length)), t["!merges"].forEach(function(r) {
    Q(e, 176, T4(r));
  }), Q(
    e,
    178
    /* BrtEndMergeCells */
  ));
}
function z4(e, t) {
  !t || !t["!cols"] || (Q(
    e,
    390
    /* BrtBeginColInfos */
  ), t["!cols"].forEach(function(r, n) {
    r && Q(e, 60, M4(n, r));
  }), Q(
    e,
    391
    /* BrtEndColInfos */
  ));
}
function V4(e, t) {
  !t || !t["!ref"] || (Q(
    e,
    648
    /* BrtBeginCellIgnoreECs */
  ), Q(e, 649, N4(Pe(t["!ref"]))), Q(
    e,
    650
    /* BrtEndCellIgnoreECs */
  ));
}
function G4(e, t, r) {
  t["!links"].forEach(function(n) {
    if (n[1].Target) {
      var i = Oe(r, -1, n[1].Target.replace(/#.*$/, ""), Te.HLINK);
      Q(e, 494, F4(n, i));
    }
  }), delete t["!links"];
}
function X4(e, t, r, n) {
  if (t["!comments"].length > 0) {
    var i = Oe(n, -1, "../drawings/vmlDrawing" + (r + 1) + ".vml", Te.VML);
    Q(e, 551, h0("rId" + i)), t["!legacy"] = i;
  }
}
function j4(e, t, r, n) {
  if (t["!autofilter"]) {
    var i = t["!autofilter"], a = typeof i.ref == "string" ? i.ref : ze(i.ref);
    r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = []);
    var s = r.Workbook.Names, o = It(a);
    o.s.r == o.e.r && (o.e.r = It(t["!ref"]).e.r, a = ze(o));
    for (var l = 0; l < s.length; ++l) {
      var f = s[l];
      if (f.Name == "_xlnm._FilterDatabase" && f.Sheet == n) {
        f.Ref = "'" + r.SheetNames[n] + "'!" + a;
        break;
      }
    }
    l == s.length && s.push({ Name: "_xlnm._FilterDatabase", Sheet: n, Ref: "'" + r.SheetNames[n] + "'!" + a }), Q(e, 161, Xn(Pe(a))), Q(
      e,
      162
      /* BrtEndAFilter */
    );
  }
}
function Y4(e, t, r) {
  Q(
    e,
    133
    /* BrtBeginWsViews */
  ), Q(e, 137, R4(t, r)), Q(
    e,
    138
    /* BrtEndWsView */
  ), Q(
    e,
    134
    /* BrtEndWsViews */
  );
}
function q4(e, t) {
  t["!protect"] && Q(e, 535, L4(t["!protect"]));
}
function K4(e, t, r, n) {
  var i = Tt(), a = r.SheetNames[e], s = r.Sheets[a] || {}, o = a;
  try {
    r && r.Workbook && (o = r.Workbook.Sheets[e].CodeName || o);
  } catch {
  }
  var l = Pe(s["!ref"] || "A1");
  if (l.e.c > 16383 || l.e.r > 1048575) {
    if (t.WTF)
      throw new Error("Range " + (s["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
    l.e.c = Math.min(l.e.c, 16383), l.e.r = Math.min(l.e.c, 1048575);
  }
  return s["!links"] = [], s["!comments"] = [], Q(
    i,
    129
    /* BrtBeginSheet */
  ), (r.vbaraw || s["!outline"]) && Q(i, 147, zw(o, s["!outline"])), Q(i, 148, Uw(l)), Y4(i, s, r.Workbook), z4(i, s), H4(i, s, e, t), q4(i, s), j4(i, s, r, e), W4(i, s), G4(i, s, n), s["!margins"] && Q(i, 476, I4(s["!margins"])), (!t || t.ignoreEC || t.ignoreEC == null) && V4(i, s), X4(i, s, e, n), Q(
    i,
    130
    /* BrtEndSheet */
  ), i.end();
}
function J4(e, t) {
  e.l += 10;
  var r = dt(e);
  return { name: r };
}
var Q4 = [
  ["allowRefreshQuery", !1, "bool"],
  ["autoCompressPictures", !0, "bool"],
  ["backupFile", !1, "bool"],
  ["checkCompatibility", !1, "bool"],
  ["CodeName", ""],
  ["date1904", !1, "bool"],
  ["defaultThemeVersion", 0, "int"],
  ["filterPrivacy", !1, "bool"],
  ["hidePivotFieldList", !1, "bool"],
  ["promptedSolutions", !1, "bool"],
  ["publishItems", !1, "bool"],
  ["refreshAllConnections", !1, "bool"],
  ["saveExternalLinkValues", !0, "bool"],
  ["showBorderUnselectedTables", !0, "bool"],
  ["showInkAnnotation", !0, "bool"],
  ["showObjects", "all"],
  ["showPivotChartFilter", !1, "bool"],
  ["updateLinks", "userSet"]
];
function Z4(e) {
  return !e.Workbook || !e.Workbook.WBProps ? "false" : kx(e.Workbook.WBProps.date1904) ? "true" : "false";
}
var eE = /* @__PURE__ */ "][*?/\\".split("");
function Fu(e, t) {
  if (e.length > 31) {
    if (t)
      return !1;
    throw new Error("Sheet names cannot exceed 31 chars");
  }
  var r = !0;
  return eE.forEach(function(n) {
    if (e.indexOf(n) != -1) {
      if (!t)
        throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
      r = !1;
    }
  }), r;
}
function tE(e, t, r) {
  e.forEach(function(n, i) {
    Fu(n);
    for (var a = 0; a < i; ++a)
      if (n == e[a])
        throw new Error("Duplicate Sheet Name: " + n);
    if (r) {
      var s = t && t[i] && t[i].CodeName || n;
      if (s.charCodeAt(0) == 95 && s.length > 22)
        throw new Error("Bad Code Name: Worksheet" + s);
    }
  });
}
function rE(e) {
  if (!e || !e.SheetNames || !e.Sheets)
    throw new Error("Invalid Workbook");
  if (!e.SheetNames.length)
    throw new Error("Workbook is empty");
  var t = e.Workbook && e.Workbook.Sheets || [];
  tE(e.SheetNames, t, !!e.vbaraw);
  for (var r = 0; r < e.SheetNames.length; ++r)
    Tw(e.Sheets[e.SheetNames[r]], e.SheetNames[r], r);
}
function Ou(e) {
  var t = [Ve];
  t[t.length] = ie("workbook", null, {
    xmlns: Vn[0],
    //'xmlns:mx': XMLNS.mx,
    //'xmlns:s': XMLNS_main[0],
    "xmlns:r": Qe.r
  });
  var r = e.Workbook && (e.Workbook.Names || []).length > 0, n = { codeName: "ThisWorkbook" };
  e.Workbook && e.Workbook.WBProps && (Q4.forEach(function(o) {
    e.Workbook.WBProps[o[0]] != null && e.Workbook.WBProps[o[0]] != o[1] && (n[o[0]] = e.Workbook.WBProps[o[0]]);
  }), e.Workbook.WBProps.CodeName && (n.codeName = e.Workbook.WBProps.CodeName, delete n.CodeName)), t[t.length] = ie("workbookPr", null, n);
  var i = e.Workbook && e.Workbook.Sheets || [], a = 0;
  if (i && i[0] && i[0].Hidden) {
    for (t[t.length] = "<bookViews>", a = 0; a != e.SheetNames.length && !(!i[a] || !i[a].Hidden); ++a)
      ;
    a == e.SheetNames.length && (a = 0), t[t.length] = '<workbookView firstSheet="' + a + '" activeTab="' + a + '"/>', t[t.length] = "</bookViews>";
  }
  for (t[t.length] = "<sheets>", a = 0; a != e.SheetNames.length; ++a) {
    var s = { name: be(e.SheetNames[a].slice(0, 31)) };
    if (s.sheetId = "" + (a + 1), s["r:id"] = "rId" + (a + 1), i[a])
      switch (i[a].Hidden) {
        case 1:
          s.state = "hidden";
          break;
        case 2:
          s.state = "veryHidden";
          break;
      }
    t[t.length] = ie("sheet", null, s);
  }
  return t[t.length] = "</sheets>", r && (t[t.length] = "<definedNames>", e.Workbook && e.Workbook.Names && e.Workbook.Names.forEach(function(o) {
    var l = { name: o.Name };
    o.Comment && (l.comment = o.Comment), o.Sheet != null && (l.localSheetId = "" + o.Sheet), o.Hidden && (l.hidden = "1"), o.Ref && (t[t.length] = ie("definedName", be(o.Ref), l));
  }), t[t.length] = "</definedNames>"), t.length > 2 && (t[t.length] = "</workbook>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function nE(e, t) {
  var r = {};
  return r.Hidden = e.read_shift(4), r.iTabID = e.read_shift(4), r.strRelID = Fo(e), r.name = dt(e), r;
}
function iE(e, t) {
  return t || (t = X(127)), t.write_shift(4, e.Hidden), t.write_shift(4, e.iTabID), h0(e.strRelID, t), et(e.name.slice(0, 31), t), t.length > t.l ? t.slice(0, t.l) : t;
}
function aE(e, t) {
  var r = {}, n = e.read_shift(4);
  r.defaultThemeVersion = e.read_shift(4);
  var i = t > 8 ? dt(e) : "";
  return i.length > 0 && (r.CodeName = i), r.autoCompressPictures = !!(n & 65536), r.backupFile = !!(n & 64), r.checkCompatibility = !!(n & 4096), r.date1904 = !!(n & 1), r.filterPrivacy = !!(n & 8), r.hidePivotFieldList = !!(n & 1024), r.promptedSolutions = !!(n & 16), r.publishItems = !!(n & 2048), r.refreshAllConnections = !!(n & 262144), r.saveExternalLinkValues = !!(n & 128), r.showBorderUnselectedTables = !!(n & 4), r.showInkAnnotation = !!(n & 32), r.showObjects = ["all", "placeholders", "none"][n >> 13 & 3], r.showPivotChartFilter = !!(n & 32768), r.updateLinks = ["userSet", "never", "always"][n >> 8 & 3], r;
}
function sE(e, t) {
  t || (t = X(72));
  var r = 0;
  return e && e.filterPrivacy && (r |= 8), t.write_shift(4, r), t.write_shift(4, 0), Uc(e && e.CodeName || "ThisWorkbook", t), t.slice(0, t.l);
}
function oE(e, t, r) {
  var n = e.l + t;
  e.l += 4, e.l += 1;
  var i = e.read_shift(4), a = Zx(e), s = xw(e, 0, r), o = u0(e);
  e.l = n;
  var l = { Name: a, Ptg: s };
  return i < 268435455 && (l.Sheet = i), o && (l.Comment = o), l;
}
function lE(e, t) {
  Q(
    e,
    143
    /* BrtBeginBundleShs */
  );
  for (var r = 0; r != t.SheetNames.length; ++r) {
    var n = t.Workbook && t.Workbook.Sheets && t.Workbook.Sheets[r] && t.Workbook.Sheets[r].Hidden || 0, i = { Hidden: n, iTabID: r + 1, strRelID: "rId" + (r + 1), name: t.SheetNames[r] };
    Q(e, 156, iE(i));
  }
  Q(
    e,
    144
    /* BrtEndBundleShs */
  );
}
function fE(e, t) {
  t || (t = X(127));
  for (var r = 0; r != 4; ++r)
    t.write_shift(4, 0);
  return et("SheetJS", t), et(ua.version, t), et(ua.version, t), et("7262", t), t.length > t.l ? t.slice(0, t.l) : t;
}
function cE(e, t) {
  t || (t = X(29)), t.write_shift(-4, 0), t.write_shift(-4, 460), t.write_shift(4, 28800), t.write_shift(4, 17600), t.write_shift(4, 500), t.write_shift(4, e), t.write_shift(4, e);
  var r = 120;
  return t.write_shift(1, r), t.length > t.l ? t.slice(0, t.l) : t;
}
function uE(e, t) {
  if (!(!t.Workbook || !t.Workbook.Sheets)) {
    for (var r = t.Workbook.Sheets, n = 0, i = -1, a = -1; n < r.length; ++n)
      !r[n] || !r[n].Hidden && i == -1 ? i = n : r[n].Hidden == 1 && a == -1 && (a = n);
    a > i || (Q(
      e,
      135
      /* BrtBeginBookViews */
    ), Q(e, 158, cE(i)), Q(
      e,
      136
      /* BrtEndBookViews */
    ));
  }
}
function hE(e, t) {
  var r = Tt();
  return Q(
    r,
    131
    /* BrtBeginBook */
  ), Q(r, 128, fE()), Q(r, 153, sE(e.Workbook && e.Workbook.WBProps || null)), uE(r, e), lE(r, e), Q(
    r,
    132
    /* BrtEndBook */
  ), r.end();
}
function dE(e, t, r) {
  return (t.slice(-4) === ".bin" ? hE : Ou)(e);
}
function pE(e, t, r, n, i) {
  return (t.slice(-4) === ".bin" ? K4 : Au)(e, r, n, i);
}
function mE(e, t, r) {
  return (t.slice(-4) === ".bin" ? I_ : cu)(e, r);
}
function gE(e, t, r) {
  return (t.slice(-4) === ".bin" ? s_ : su)(e, r);
}
function vE(e, t, r) {
  return (t.slice(-4) === ".bin" ? q_ : mu)(e);
}
function xE(e) {
  return (e.slice(-4) === ".bin" ? H_ : du)();
}
function _E(e, t) {
  var r = [];
  return e.Props && r.push(m2(e.Props, t)), e.Custprops && r.push(g2(e.Props, e.Custprops)), r.join("");
}
function yE() {
  return "";
}
function wE(e, t) {
  var r = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return t.cellXfs.forEach(function(n, i) {
    var a = [];
    a.push(ie("NumberFormat", null, { "ss:Format": be(Ue[n.numFmtId]) }));
    var s = (
      /*::(*/
      { "ss:ID": "s" + (21 + i) }
    );
    r.push(ie("Style", a.join(""), s));
  }), ie("Styles", r.join(""));
}
function bu(e) {
  return ie("NamedRange", null, { "ss:Name": e.Name, "ss:RefersTo": "=" + g0(e.Ref, { r: 0, c: 0 }) });
}
function EE(e) {
  if (!((e || {}).Workbook || {}).Names)
    return "";
  for (var t = e.Workbook.Names, r = [], n = 0; n < t.length; ++n) {
    var i = t[n];
    i.Sheet == null && (i.Name.match(/^_xlfn\./) || r.push(bu(i)));
  }
  return ie("Names", r.join(""));
}
function SE(e, t, r, n) {
  if (!e || !((n || {}).Workbook || {}).Names)
    return "";
  for (var i = n.Workbook.Names, a = [], s = 0; s < i.length; ++s) {
    var o = i[s];
    o.Sheet == r && (o.Name.match(/^_xlfn\./) || a.push(bu(o)));
  }
  return a.join("");
}
function TE(e, t, r, n) {
  if (!e)
    return "";
  var i = [];
  if (e["!margins"] && (i.push("<PageSetup>"), e["!margins"].header && i.push(ie("Header", null, { "x:Margin": e["!margins"].header })), e["!margins"].footer && i.push(ie("Footer", null, { "x:Margin": e["!margins"].footer })), i.push(ie("PageMargins", null, {
    "x:Bottom": e["!margins"].bottom || "0.75",
    "x:Left": e["!margins"].left || "0.7",
    "x:Right": e["!margins"].right || "0.7",
    "x:Top": e["!margins"].top || "0.75"
  })), i.push("</PageSetup>")), n && n.Workbook && n.Workbook.Sheets && n.Workbook.Sheets[r])
    if (n.Workbook.Sheets[r].Hidden)
      i.push(ie("Visible", n.Workbook.Sheets[r].Hidden == 1 ? "SheetHidden" : "SheetVeryHidden", {}));
    else {
      for (var a = 0; a < r && !(n.Workbook.Sheets[a] && !n.Workbook.Sheets[a].Hidden); ++a)
        ;
      a == r && i.push("<Selected/>");
    }
  return ((((n || {}).Workbook || {}).Views || [])[0] || {}).RTL && i.push("<DisplayRightToLeft/>"), e["!protect"] && (i.push(it("ProtectContents", "True")), e["!protect"].objects && i.push(it("ProtectObjects", "True")), e["!protect"].scenarios && i.push(it("ProtectScenarios", "True")), e["!protect"].selectLockedCells != null && !e["!protect"].selectLockedCells ? i.push(it("EnableSelection", "NoSelection")) : e["!protect"].selectUnlockedCells != null && !e["!protect"].selectUnlockedCells && i.push(it("EnableSelection", "UnlockedCells")), [
    ["formatCells", "AllowFormatCells"],
    ["formatColumns", "AllowSizeCols"],
    ["formatRows", "AllowSizeRows"],
    ["insertColumns", "AllowInsertCols"],
    ["insertRows", "AllowInsertRows"],
    ["insertHyperlinks", "AllowInsertHyperlinks"],
    ["deleteColumns", "AllowDeleteCols"],
    ["deleteRows", "AllowDeleteRows"],
    ["sort", "AllowSort"],
    ["autoFilter", "AllowFilter"],
    ["pivotTables", "AllowUsePivotTables"]
  ].forEach(function(s) {
    e["!protect"][s[0]] && i.push("<" + s[1] + "/>");
  })), i.length == 0 ? "" : ie("WorksheetOptions", i.join(""), { xmlns: kt.x });
}
function AE(e) {
  return e.map(function(t) {
    var r = bx(t.t || ""), n = ie("ss:Data", r, { xmlns: "http://www.w3.org/TR/REC-html40" });
    return ie("Comment", n, { "ss:Author": t.a });
  }).join("");
}
function CE(e, t, r, n, i, a, s) {
  if (!e || e.v == null && e.f == null)
    return "";
  var o = {};
  if (e.f && (o["ss:Formula"] = "=" + be(g0(e.f, s))), e.F && e.F.slice(0, t.length) == t) {
    var l = Ze(e.F.slice(t.length + 1));
    o["ss:ArrayRange"] = "RC:R" + (l.r == s.r ? "" : "[" + (l.r - s.r) + "]") + "C" + (l.c == s.c ? "" : "[" + (l.c - s.c) + "]");
  }
  if (e.l && e.l.Target && (o["ss:HRef"] = be(e.l.Target), e.l.Tooltip && (o["x:HRefScreenTip"] = be(e.l.Tooltip))), r["!merges"])
    for (var f = r["!merges"], c = 0; c != f.length; ++c)
      f[c].s.c != s.c || f[c].s.r != s.r || (f[c].e.c > f[c].s.c && (o["ss:MergeAcross"] = f[c].e.c - f[c].s.c), f[c].e.r > f[c].s.r && (o["ss:MergeDown"] = f[c].e.r - f[c].s.r));
  var u = "", h = "";
  switch (e.t) {
    case "z":
      if (!n.sheetStubs)
        return "";
      break;
    case "n":
      u = "Number", h = String(e.v);
      break;
    case "b":
      u = "Boolean", h = e.v ? "1" : "0";
      break;
    case "e":
      u = "Error", h = Mi[e.v];
      break;
    case "d":
      u = "DateTime", h = new Date(e.v).toISOString(), e.z == null && (e.z = e.z || Ue[14]);
      break;
    case "s":
      u = "String", h = Ox(e.v || "");
      break;
  }
  var d = zr(n.cellXfs, e, n);
  o["ss:StyleID"] = "s" + (21 + d), o["ss:Index"] = s.c + 1;
  var v = e.v != null ? h : "", p = e.t == "z" ? "" : '<Data ss:Type="' + u + '">' + v + "</Data>";
  return (e.c || []).length > 0 && (p += AE(e.c)), ie("Cell", p, o);
}
function FE(e, t) {
  var r = '<Row ss:Index="' + (e + 1) + '"';
  return t && (t.hpt && !t.hpx && (t.hpx = fu(t.hpt)), t.hpx && (r += ' ss:AutoFitHeight="0" ss:Height="' + t.hpx + '"'), t.hidden && (r += ' ss:Hidden="1"')), r + ">";
}
function OE(e, t, r, n) {
  if (!e["!ref"])
    return "";
  var i = Pe(e["!ref"]), a = e["!merges"] || [], s = 0, o = [];
  e["!cols"] && e["!cols"].forEach(function(m, g) {
    p0(m);
    var x = !!m.width, _ = Ja(g, m), C = { "ss:Index": g + 1 };
    x && (C["ss:Width"] = ya(_.width)), m.hidden && (C["ss:Hidden"] = "1"), o.push(ie("Column", null, C));
  });
  for (var l = Array.isArray(e), f = i.s.r; f <= i.e.r; ++f) {
    for (var c = [FE(f, (e["!rows"] || [])[f])], u = i.s.c; u <= i.e.c; ++u) {
      var h = !1;
      for (s = 0; s != a.length; ++s)
        if (!(a[s].s.c > u) && !(a[s].s.r > f) && !(a[s].e.c < u) && !(a[s].e.r < f)) {
          (a[s].s.c != u || a[s].s.r != f) && (h = !0);
          break;
        }
      if (!h) {
        var d = { r: f, c: u }, v = ke(d), p = l ? (e[f] || [])[u] : e[v];
        c.push(CE(p, v, e, t, r, n, d));
      }
    }
    c.push("</Row>"), c.length > 2 && o.push(c.join(""));
  }
  return o.join("");
}
function bE(e, t, r) {
  var n = [], i = r.SheetNames[e], a = r.Sheets[i], s = a ? SE(a, t, e, r) : "";
  return s.length > 0 && n.push("<Names>" + s + "</Names>"), s = a ? OE(a, t, e, r) : "", s.length > 0 && n.push("<Table>" + s + "</Table>"), n.push(TE(a, t, e, r)), n.join("");
}
function kE(e, t) {
  t || (t = {}), e.SSF || (e.SSF = Ct(Ue)), e.SSF && (Xa(), Ga(e.SSF), t.revssf = ja(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF, t.cellXfs = [], zr(t.cellXfs, {}, { revssf: { General: 0 } }));
  var r = [];
  r.push(_E(e, t)), r.push(yE()), r.push(""), r.push("");
  for (var n = 0; n < e.SheetNames.length; ++n)
    r.push(ie("Worksheet", bE(n, t, e), { "ss:Name": be(e.SheetNames[n]) }));
  return r[2] = wE(e, t), r[3] = EE(e), Ve + ie("Workbook", r.join(""), {
    xmlns: kt.ss,
    "xmlns:o": kt.o,
    "xmlns:x": kt.x,
    "xmlns:ss": kt.ss,
    "xmlns:dt": kt.dt,
    "xmlns:html": kt.html
  });
}
var Js = {
  SI: "e0859ff2f94f6810ab9108002b27b3d9",
  DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
  UDI: "05d5cdd59c2e1b10939708002b2cf9ae"
};
function ME(e, t) {
  var r = [], n = [], i = [], a = 0, s, o = _l(Dl, "n"), l = _l(Il, "n");
  if (e.Props)
    for (s = st(e.Props), a = 0; a < s.length; ++a)
      (Object.prototype.hasOwnProperty.call(o, s[a]) ? r : Object.prototype.hasOwnProperty.call(l, s[a]) ? n : i).push([s[a], e.Props[s[a]]]);
  if (e.Custprops)
    for (s = st(e.Custprops), a = 0; a < s.length; ++a)
      Object.prototype.hasOwnProperty.call(e.Props || {}, s[a]) || (Object.prototype.hasOwnProperty.call(o, s[a]) ? r : Object.prototype.hasOwnProperty.call(l, s[a]) ? n : i).push([s[a], e.Custprops[s[a]]]);
  var f = [];
  for (a = 0; a < i.length; ++a)
    Zc.indexOf(i[a][0]) > -1 || Kc.indexOf(i[a][0]) > -1 || i[a][1] != null && f.push(i[a]);
  n.length && De.utils.cfb_add(t, "/SummaryInformation", Bl(n, Js.SI, l, Il)), (r.length || f.length) && De.utils.cfb_add(t, "/DocumentSummaryInformation", Bl(r, Js.DSI, o, Dl, f.length ? f : null, Js.UDI));
}
function DE(e, t) {
  var r = t || {}, n = De.utils.cfb_new({ root: "R" }), i = "/Workbook";
  switch (r.bookType || "xls") {
    case "xls":
      r.bookType = "biff8";
    case "xla":
      r.bookType || (r.bookType = "xla");
    case "biff8":
      i = "/Workbook", r.biff = 8;
      break;
    case "biff5":
      i = "/Book", r.biff = 5;
      break;
    default:
      throw new Error("invalid type " + r.bookType + " for XLS CFB");
  }
  return De.utils.cfb_add(n, i, ku(e, r)), r.biff == 8 && (e.Props || e.Custprops) && ME(e, n), r.biff == 8 && e.vbaraw && K_(n, De.read(e.vbaraw, { type: typeof e.vbaraw == "string" ? "binary" : "buffer" })), n;
}
var IE = {
  /*::[*/
  0: {
    /* n:"BrtRowHdr", */
    f: Nw
  },
  /*::[*/
  1: {
    /* n:"BrtCellBlank", */
    f: Vw
  },
  /*::[*/
  2: {
    /* n:"BrtCellRk", */
    f: c4
  },
  /*::[*/
  3: {
    /* n:"BrtCellError", */
    f: Qw
  },
  /*::[*/
  4: {
    /* n:"BrtCellBool", */
    f: Yw
  },
  /*::[*/
  5: {
    /* n:"BrtCellReal", */
    f: s4
  },
  /*::[*/
  6: {
    /* n:"BrtCellSt", */
    f: m4
  },
  /*::[*/
  7: {
    /* n:"BrtCellIsst", */
    f: r4
  },
  /*::[*/
  8: {
    /* n:"BrtFmlaString", */
    f: E4
  },
  /*::[*/
  9: {
    /* n:"BrtFmlaNum", */
    f: w4
  },
  /*::[*/
  10: {
    /* n:"BrtFmlaBool", */
    f: _4
  },
  /*::[*/
  11: {
    /* n:"BrtFmlaError", */
    f: y4
  },
  /*::[*/
  12: {
    /* n:"BrtShortBlank", */
    f: Xw
  },
  /*::[*/
  13: {
    /* n:"BrtShortRk", */
    f: h4
  },
  /*::[*/
  14: {
    /* n:"BrtShortError", */
    f: e4
  },
  /*::[*/
  15: {
    /* n:"BrtShortBool", */
    f: Kw
  },
  /*::[*/
  16: {
    /* n:"BrtShortReal", */
    f: l4
  },
  /*::[*/
  17: {
    /* n:"BrtShortSt", */
    f: v4
  },
  /*::[*/
  18: {
    /* n:"BrtShortIsst", */
    f: i4
  },
  /*::[*/
  19: {
    /* n:"BrtSSTItem", */
    f: c0
  },
  /*::[*/
  20: {
    /* n:"BrtPCDIMissing" */
  },
  /*::[*/
  21: {
    /* n:"BrtPCDINumber" */
  },
  /*::[*/
  22: {
    /* n:"BrtPCDIBoolean" */
  },
  /*::[*/
  23: {
    /* n:"BrtPCDIError" */
  },
  /*::[*/
  24: {
    /* n:"BrtPCDIString" */
  },
  /*::[*/
  25: {
    /* n:"BrtPCDIDatetime" */
  },
  /*::[*/
  26: {
    /* n:"BrtPCDIIndex" */
  },
  /*::[*/
  27: {
    /* n:"BrtPCDIAMissing" */
  },
  /*::[*/
  28: {
    /* n:"BrtPCDIANumber" */
  },
  /*::[*/
  29: {
    /* n:"BrtPCDIABoolean" */
  },
  /*::[*/
  30: {
    /* n:"BrtPCDIAError" */
  },
  /*::[*/
  31: {
    /* n:"BrtPCDIAString" */
  },
  /*::[*/
  32: {
    /* n:"BrtPCDIADatetime" */
  },
  /*::[*/
  33: {
    /* n:"BrtPCRRecord" */
  },
  /*::[*/
  34: {
    /* n:"BrtPCRRecordDt" */
  },
  /*::[*/
  35: {
    /* n:"BrtFRTBegin", */
    T: 1
  },
  /*::[*/
  36: {
    /* n:"BrtFRTEnd", */
    T: -1
  },
  /*::[*/
  37: {
    /* n:"BrtACBegin", */
    T: 1
  },
  /*::[*/
  38: {
    /* n:"BrtACEnd", */
    T: -1
  },
  /*::[*/
  39: {
    /* n:"BrtName", */
    f: oE
  },
  /*::[*/
  40: {
    /* n:"BrtIndexRowBlock" */
  },
  /*::[*/
  42: {
    /* n:"BrtIndexBlock" */
  },
  /*::[*/
  43: {
    /* n:"BrtFont", */
    f: m_
  },
  /*::[*/
  44: {
    /* n:"BrtFmt", */
    f: d_
  },
  /*::[*/
  45: {
    /* n:"BrtFill", */
    f: x_
  },
  /*::[*/
  46: {
    /* n:"BrtBorder", */
    f: y_
  },
  /*::[*/
  47: {
    /* n:"BrtXF", */
    f: __
  },
  /*::[*/
  48: {
    /* n:"BrtStyle" */
  },
  /*::[*/
  49: {
    /* n:"BrtCellMeta", */
    f: Xx
  },
  /*::[*/
  50: {
    /* n:"BrtValueMeta" */
  },
  /*::[*/
  51: {
    /* n:"BrtMdb" */
    f: N_
  },
  /*::[*/
  52: {
    /* n:"BrtBeginFmd", */
    T: 1
  },
  /*::[*/
  53: {
    /* n:"BrtEndFmd", */
    T: -1
  },
  /*::[*/
  54: {
    /* n:"BrtBeginMdx", */
    T: 1
  },
  /*::[*/
  55: {
    /* n:"BrtEndMdx", */
    T: -1
  },
  /*::[*/
  56: {
    /* n:"BrtBeginMdxTuple", */
    T: 1
  },
  /*::[*/
  57: {
    /* n:"BrtEndMdxTuple", */
    T: -1
  },
  /*::[*/
  58: {
    /* n:"BrtMdxMbrIstr" */
  },
  /*::[*/
  59: {
    /* n:"BrtStr" */
  },
  /*::[*/
  60: {
    /* n:"BrtColInfo", */
    f: j2
  },
  /*::[*/
  62: {
    /* n:"BrtCellRString", */
    f: p4
  },
  /*::[*/
  63: {
    /* n:"BrtCalcChainItem$", */
    f: W_
  },
  /*::[*/
  64: {
    /* n:"BrtDVal", */
    f: B4
  },
  /*::[*/
  65: {
    /* n:"BrtSxvcellNum" */
  },
  /*::[*/
  66: {
    /* n:"BrtSxvcellStr" */
  },
  /*::[*/
  67: {
    /* n:"BrtSxvcellBool" */
  },
  /*::[*/
  68: {
    /* n:"BrtSxvcellErr" */
  },
  /*::[*/
  69: {
    /* n:"BrtSxvcellDate" */
  },
  /*::[*/
  70: {
    /* n:"BrtSxvcellNil" */
  },
  /*::[*/
  128: {
    /* n:"BrtFileVersion" */
  },
  /*::[*/
  129: {
    /* n:"BrtBeginSheet", */
    T: 1
  },
  /*::[*/
  130: {
    /* n:"BrtEndSheet", */
    T: -1
  },
  /*::[*/
  131: {
    /* n:"BrtBeginBook", */
    T: 1,
    f: lr,
    p: 0
  },
  /*::[*/
  132: {
    /* n:"BrtEndBook", */
    T: -1
  },
  /*::[*/
  133: {
    /* n:"BrtBeginWsViews", */
    T: 1
  },
  /*::[*/
  134: {
    /* n:"BrtEndWsViews", */
    T: -1
  },
  /*::[*/
  135: {
    /* n:"BrtBeginBookViews", */
    T: 1
  },
  /*::[*/
  136: {
    /* n:"BrtEndBookViews", */
    T: -1
  },
  /*::[*/
  137: {
    /* n:"BrtBeginWsView", */
    T: 1,
    f: P4
  },
  /*::[*/
  138: {
    /* n:"BrtEndWsView", */
    T: -1
  },
  /*::[*/
  139: {
    /* n:"BrtBeginCsViews", */
    T: 1
  },
  /*::[*/
  140: {
    /* n:"BrtEndCsViews", */
    T: -1
  },
  /*::[*/
  141: {
    /* n:"BrtBeginCsView", */
    T: 1
  },
  /*::[*/
  142: {
    /* n:"BrtEndCsView", */
    T: -1
  },
  /*::[*/
  143: {
    /* n:"BrtBeginBundleShs", */
    T: 1
  },
  /*::[*/
  144: {
    /* n:"BrtEndBundleShs", */
    T: -1
  },
  /*::[*/
  145: {
    /* n:"BrtBeginSheetData", */
    T: 1
  },
  /*::[*/
  146: {
    /* n:"BrtEndSheetData", */
    T: -1
  },
  /*::[*/
  147: {
    /* n:"BrtWsProp", */
    f: Ww
  },
  /*::[*/
  148: {
    /* n:"BrtWsDim", */
    f: $w,
    p: 16
  },
  /*::[*/
  151: {
    /* n:"BrtPane", */
    f: O4
  },
  /*::[*/
  152: {
    /* n:"BrtSel" */
  },
  /*::[*/
  153: {
    /* n:"BrtWbProp", */
    f: aE
  },
  /*::[*/
  154: {
    /* n:"BrtWbFactoid" */
  },
  /*::[*/
  155: {
    /* n:"BrtFileRecover" */
  },
  /*::[*/
  156: {
    /* n:"BrtBundleSh", */
    f: nE
  },
  /*::[*/
  157: {
    /* n:"BrtCalcProp" */
  },
  /*::[*/
  158: {
    /* n:"BrtBookView" */
  },
  /*::[*/
  159: {
    /* n:"BrtBeginSst", */
    T: 1,
    f: n_
  },
  /*::[*/
  160: {
    /* n:"BrtEndSst", */
    T: -1
  },
  /*::[*/
  161: {
    /* n:"BrtBeginAFilter", */
    T: 1,
    f: pn
  },
  /*::[*/
  162: {
    /* n:"BrtEndAFilter", */
    T: -1
  },
  /*::[*/
  163: {
    /* n:"BrtBeginFilterColumn", */
    T: 1
  },
  /*::[*/
  164: {
    /* n:"BrtEndFilterColumn", */
    T: -1
  },
  /*::[*/
  165: {
    /* n:"BrtBeginFilters", */
    T: 1
  },
  /*::[*/
  166: {
    /* n:"BrtEndFilters", */
    T: -1
  },
  /*::[*/
  167: {
    /* n:"BrtFilter" */
  },
  /*::[*/
  168: {
    /* n:"BrtColorFilter" */
  },
  /*::[*/
  169: {
    /* n:"BrtIconFilter" */
  },
  /*::[*/
  170: {
    /* n:"BrtTop10Filter" */
  },
  /*::[*/
  171: {
    /* n:"BrtDynamicFilter" */
  },
  /*::[*/
  172: {
    /* n:"BrtBeginCustomFilters", */
    T: 1
  },
  /*::[*/
  173: {
    /* n:"BrtEndCustomFilters", */
    T: -1
  },
  /*::[*/
  174: {
    /* n:"BrtCustomFilter" */
  },
  /*::[*/
  175: {
    /* n:"BrtAFilterDateGroupItem" */
  },
  /*::[*/
  176: {
    /* n:"BrtMergeCell", */
    f: S4
  },
  /*::[*/
  177: {
    /* n:"BrtBeginMergeCells", */
    T: 1
  },
  /*::[*/
  178: {
    /* n:"BrtEndMergeCells", */
    T: -1
  },
  /*::[*/
  179: {
    /* n:"BrtBeginPivotCacheDef", */
    T: 1
  },
  /*::[*/
  180: {
    /* n:"BrtEndPivotCacheDef", */
    T: -1
  },
  /*::[*/
  181: {
    /* n:"BrtBeginPCDFields", */
    T: 1
  },
  /*::[*/
  182: {
    /* n:"BrtEndPCDFields", */
    T: -1
  },
  /*::[*/
  183: {
    /* n:"BrtBeginPCDField", */
    T: 1
  },
  /*::[*/
  184: {
    /* n:"BrtEndPCDField", */
    T: -1
  },
  /*::[*/
  185: {
    /* n:"BrtBeginPCDSource", */
    T: 1
  },
  /*::[*/
  186: {
    /* n:"BrtEndPCDSource", */
    T: -1
  },
  /*::[*/
  187: {
    /* n:"BrtBeginPCDSRange", */
    T: 1
  },
  /*::[*/
  188: {
    /* n:"BrtEndPCDSRange", */
    T: -1
  },
  /*::[*/
  189: {
    /* n:"BrtBeginPCDFAtbl", */
    T: 1
  },
  /*::[*/
  190: {
    /* n:"BrtEndPCDFAtbl", */
    T: -1
  },
  /*::[*/
  191: {
    /* n:"BrtBeginPCDIRun", */
    T: 1
  },
  /*::[*/
  192: {
    /* n:"BrtEndPCDIRun", */
    T: -1
  },
  /*::[*/
  193: {
    /* n:"BrtBeginPivotCacheRecords", */
    T: 1
  },
  /*::[*/
  194: {
    /* n:"BrtEndPivotCacheRecords", */
    T: -1
  },
  /*::[*/
  195: {
    /* n:"BrtBeginPCDHierarchies", */
    T: 1
  },
  /*::[*/
  196: {
    /* n:"BrtEndPCDHierarchies", */
    T: -1
  },
  /*::[*/
  197: {
    /* n:"BrtBeginPCDHierarchy", */
    T: 1
  },
  /*::[*/
  198: {
    /* n:"BrtEndPCDHierarchy", */
    T: -1
  },
  /*::[*/
  199: {
    /* n:"BrtBeginPCDHFieldsUsage", */
    T: 1
  },
  /*::[*/
  200: {
    /* n:"BrtEndPCDHFieldsUsage", */
    T: -1
  },
  /*::[*/
  201: {
    /* n:"BrtBeginExtConnection", */
    T: 1
  },
  /*::[*/
  202: {
    /* n:"BrtEndExtConnection", */
    T: -1
  },
  /*::[*/
  203: {
    /* n:"BrtBeginECDbProps", */
    T: 1
  },
  /*::[*/
  204: {
    /* n:"BrtEndECDbProps", */
    T: -1
  },
  /*::[*/
  205: {
    /* n:"BrtBeginECOlapProps", */
    T: 1
  },
  /*::[*/
  206: {
    /* n:"BrtEndECOlapProps", */
    T: -1
  },
  /*::[*/
  207: {
    /* n:"BrtBeginPCDSConsol", */
    T: 1
  },
  /*::[*/
  208: {
    /* n:"BrtEndPCDSConsol", */
    T: -1
  },
  /*::[*/
  209: {
    /* n:"BrtBeginPCDSCPages", */
    T: 1
  },
  /*::[*/
  210: {
    /* n:"BrtEndPCDSCPages", */
    T: -1
  },
  /*::[*/
  211: {
    /* n:"BrtBeginPCDSCPage", */
    T: 1
  },
  /*::[*/
  212: {
    /* n:"BrtEndPCDSCPage", */
    T: -1
  },
  /*::[*/
  213: {
    /* n:"BrtBeginPCDSCPItem", */
    T: 1
  },
  /*::[*/
  214: {
    /* n:"BrtEndPCDSCPItem", */
    T: -1
  },
  /*::[*/
  215: {
    /* n:"BrtBeginPCDSCSets", */
    T: 1
  },
  /*::[*/
  216: {
    /* n:"BrtEndPCDSCSets", */
    T: -1
  },
  /*::[*/
  217: {
    /* n:"BrtBeginPCDSCSet", */
    T: 1
  },
  /*::[*/
  218: {
    /* n:"BrtEndPCDSCSet", */
    T: -1
  },
  /*::[*/
  219: {
    /* n:"BrtBeginPCDFGroup", */
    T: 1
  },
  /*::[*/
  220: {
    /* n:"BrtEndPCDFGroup", */
    T: -1
  },
  /*::[*/
  221: {
    /* n:"BrtBeginPCDFGItems", */
    T: 1
  },
  /*::[*/
  222: {
    /* n:"BrtEndPCDFGItems", */
    T: -1
  },
  /*::[*/
  223: {
    /* n:"BrtBeginPCDFGRange", */
    T: 1
  },
  /*::[*/
  224: {
    /* n:"BrtEndPCDFGRange", */
    T: -1
  },
  /*::[*/
  225: {
    /* n:"BrtBeginPCDFGDiscrete", */
    T: 1
  },
  /*::[*/
  226: {
    /* n:"BrtEndPCDFGDiscrete", */
    T: -1
  },
  /*::[*/
  227: {
    /* n:"BrtBeginPCDSDTupleCache", */
    T: 1
  },
  /*::[*/
  228: {
    /* n:"BrtEndPCDSDTupleCache", */
    T: -1
  },
  /*::[*/
  229: {
    /* n:"BrtBeginPCDSDTCEntries", */
    T: 1
  },
  /*::[*/
  230: {
    /* n:"BrtEndPCDSDTCEntries", */
    T: -1
  },
  /*::[*/
  231: {
    /* n:"BrtBeginPCDSDTCEMembers", */
    T: 1
  },
  /*::[*/
  232: {
    /* n:"BrtEndPCDSDTCEMembers", */
    T: -1
  },
  /*::[*/
  233: {
    /* n:"BrtBeginPCDSDTCEMember", */
    T: 1
  },
  /*::[*/
  234: {
    /* n:"BrtEndPCDSDTCEMember", */
    T: -1
  },
  /*::[*/
  235: {
    /* n:"BrtBeginPCDSDTCQueries", */
    T: 1
  },
  /*::[*/
  236: {
    /* n:"BrtEndPCDSDTCQueries", */
    T: -1
  },
  /*::[*/
  237: {
    /* n:"BrtBeginPCDSDTCQuery", */
    T: 1
  },
  /*::[*/
  238: {
    /* n:"BrtEndPCDSDTCQuery", */
    T: -1
  },
  /*::[*/
  239: {
    /* n:"BrtBeginPCDSDTCSets", */
    T: 1
  },
  /*::[*/
  240: {
    /* n:"BrtEndPCDSDTCSets", */
    T: -1
  },
  /*::[*/
  241: {
    /* n:"BrtBeginPCDSDTCSet", */
    T: 1
  },
  /*::[*/
  242: {
    /* n:"BrtEndPCDSDTCSet", */
    T: -1
  },
  /*::[*/
  243: {
    /* n:"BrtBeginPCDCalcItems", */
    T: 1
  },
  /*::[*/
  244: {
    /* n:"BrtEndPCDCalcItems", */
    T: -1
  },
  /*::[*/
  245: {
    /* n:"BrtBeginPCDCalcItem", */
    T: 1
  },
  /*::[*/
  246: {
    /* n:"BrtEndPCDCalcItem", */
    T: -1
  },
  /*::[*/
  247: {
    /* n:"BrtBeginPRule", */
    T: 1
  },
  /*::[*/
  248: {
    /* n:"BrtEndPRule", */
    T: -1
  },
  /*::[*/
  249: {
    /* n:"BrtBeginPRFilters", */
    T: 1
  },
  /*::[*/
  250: {
    /* n:"BrtEndPRFilters", */
    T: -1
  },
  /*::[*/
  251: {
    /* n:"BrtBeginPRFilter", */
    T: 1
  },
  /*::[*/
  252: {
    /* n:"BrtEndPRFilter", */
    T: -1
  },
  /*::[*/
  253: {
    /* n:"BrtBeginPNames", */
    T: 1
  },
  /*::[*/
  254: {
    /* n:"BrtEndPNames", */
    T: -1
  },
  /*::[*/
  255: {
    /* n:"BrtBeginPName", */
    T: 1
  },
  /*::[*/
  256: {
    /* n:"BrtEndPName", */
    T: -1
  },
  /*::[*/
  257: {
    /* n:"BrtBeginPNPairs", */
    T: 1
  },
  /*::[*/
  258: {
    /* n:"BrtEndPNPairs", */
    T: -1
  },
  /*::[*/
  259: {
    /* n:"BrtBeginPNPair", */
    T: 1
  },
  /*::[*/
  260: {
    /* n:"BrtEndPNPair", */
    T: -1
  },
  /*::[*/
  261: {
    /* n:"BrtBeginECWebProps", */
    T: 1
  },
  /*::[*/
  262: {
    /* n:"BrtEndECWebProps", */
    T: -1
  },
  /*::[*/
  263: {
    /* n:"BrtBeginEcWpTables", */
    T: 1
  },
  /*::[*/
  264: {
    /* n:"BrtEndECWPTables", */
    T: -1
  },
  /*::[*/
  265: {
    /* n:"BrtBeginECParams", */
    T: 1
  },
  /*::[*/
  266: {
    /* n:"BrtEndECParams", */
    T: -1
  },
  /*::[*/
  267: {
    /* n:"BrtBeginECParam", */
    T: 1
  },
  /*::[*/
  268: {
    /* n:"BrtEndECParam", */
    T: -1
  },
  /*::[*/
  269: {
    /* n:"BrtBeginPCDKPIs", */
    T: 1
  },
  /*::[*/
  270: {
    /* n:"BrtEndPCDKPIs", */
    T: -1
  },
  /*::[*/
  271: {
    /* n:"BrtBeginPCDKPI", */
    T: 1
  },
  /*::[*/
  272: {
    /* n:"BrtEndPCDKPI", */
    T: -1
  },
  /*::[*/
  273: {
    /* n:"BrtBeginDims", */
    T: 1
  },
  /*::[*/
  274: {
    /* n:"BrtEndDims", */
    T: -1
  },
  /*::[*/
  275: {
    /* n:"BrtBeginDim", */
    T: 1
  },
  /*::[*/
  276: {
    /* n:"BrtEndDim", */
    T: -1
  },
  /*::[*/
  277: {
    /* n:"BrtIndexPartEnd" */
  },
  /*::[*/
  278: {
    /* n:"BrtBeginStyleSheet", */
    T: 1
  },
  /*::[*/
  279: {
    /* n:"BrtEndStyleSheet", */
    T: -1
  },
  /*::[*/
  280: {
    /* n:"BrtBeginSXView", */
    T: 1
  },
  /*::[*/
  281: {
    /* n:"BrtEndSXVI", */
    T: -1
  },
  /*::[*/
  282: {
    /* n:"BrtBeginSXVI", */
    T: 1
  },
  /*::[*/
  283: {
    /* n:"BrtBeginSXVIs", */
    T: 1
  },
  /*::[*/
  284: {
    /* n:"BrtEndSXVIs", */
    T: -1
  },
  /*::[*/
  285: {
    /* n:"BrtBeginSXVD", */
    T: 1
  },
  /*::[*/
  286: {
    /* n:"BrtEndSXVD", */
    T: -1
  },
  /*::[*/
  287: {
    /* n:"BrtBeginSXVDs", */
    T: 1
  },
  /*::[*/
  288: {
    /* n:"BrtEndSXVDs", */
    T: -1
  },
  /*::[*/
  289: {
    /* n:"BrtBeginSXPI", */
    T: 1
  },
  /*::[*/
  290: {
    /* n:"BrtEndSXPI", */
    T: -1
  },
  /*::[*/
  291: {
    /* n:"BrtBeginSXPIs", */
    T: 1
  },
  /*::[*/
  292: {
    /* n:"BrtEndSXPIs", */
    T: -1
  },
  /*::[*/
  293: {
    /* n:"BrtBeginSXDI", */
    T: 1
  },
  /*::[*/
  294: {
    /* n:"BrtEndSXDI", */
    T: -1
  },
  /*::[*/
  295: {
    /* n:"BrtBeginSXDIs", */
    T: 1
  },
  /*::[*/
  296: {
    /* n:"BrtEndSXDIs", */
    T: -1
  },
  /*::[*/
  297: {
    /* n:"BrtBeginSXLI", */
    T: 1
  },
  /*::[*/
  298: {
    /* n:"BrtEndSXLI", */
    T: -1
  },
  /*::[*/
  299: {
    /* n:"BrtBeginSXLIRws", */
    T: 1
  },
  /*::[*/
  300: {
    /* n:"BrtEndSXLIRws", */
    T: -1
  },
  /*::[*/
  301: {
    /* n:"BrtBeginSXLICols", */
    T: 1
  },
  /*::[*/
  302: {
    /* n:"BrtEndSXLICols", */
    T: -1
  },
  /*::[*/
  303: {
    /* n:"BrtBeginSXFormat", */
    T: 1
  },
  /*::[*/
  304: {
    /* n:"BrtEndSXFormat", */
    T: -1
  },
  /*::[*/
  305: {
    /* n:"BrtBeginSXFormats", */
    T: 1
  },
  /*::[*/
  306: {
    /* n:"BrtEndSxFormats", */
    T: -1
  },
  /*::[*/
  307: {
    /* n:"BrtBeginSxSelect", */
    T: 1
  },
  /*::[*/
  308: {
    /* n:"BrtEndSxSelect", */
    T: -1
  },
  /*::[*/
  309: {
    /* n:"BrtBeginISXVDRws", */
    T: 1
  },
  /*::[*/
  310: {
    /* n:"BrtEndISXVDRws", */
    T: -1
  },
  /*::[*/
  311: {
    /* n:"BrtBeginISXVDCols", */
    T: 1
  },
  /*::[*/
  312: {
    /* n:"BrtEndISXVDCols", */
    T: -1
  },
  /*::[*/
  313: {
    /* n:"BrtEndSXLocation", */
    T: -1
  },
  /*::[*/
  314: {
    /* n:"BrtBeginSXLocation", */
    T: 1
  },
  /*::[*/
  315: {
    /* n:"BrtEndSXView", */
    T: -1
  },
  /*::[*/
  316: {
    /* n:"BrtBeginSXTHs", */
    T: 1
  },
  /*::[*/
  317: {
    /* n:"BrtEndSXTHs", */
    T: -1
  },
  /*::[*/
  318: {
    /* n:"BrtBeginSXTH", */
    T: 1
  },
  /*::[*/
  319: {
    /* n:"BrtEndSXTH", */
    T: -1
  },
  /*::[*/
  320: {
    /* n:"BrtBeginISXTHRws", */
    T: 1
  },
  /*::[*/
  321: {
    /* n:"BrtEndISXTHRws", */
    T: -1
  },
  /*::[*/
  322: {
    /* n:"BrtBeginISXTHCols", */
    T: 1
  },
  /*::[*/
  323: {
    /* n:"BrtEndISXTHCols", */
    T: -1
  },
  /*::[*/
  324: {
    /* n:"BrtBeginSXTDMPS", */
    T: 1
  },
  /*::[*/
  325: {
    /* n:"BrtEndSXTDMPs", */
    T: -1
  },
  /*::[*/
  326: {
    /* n:"BrtBeginSXTDMP", */
    T: 1
  },
  /*::[*/
  327: {
    /* n:"BrtEndSXTDMP", */
    T: -1
  },
  /*::[*/
  328: {
    /* n:"BrtBeginSXTHItems", */
    T: 1
  },
  /*::[*/
  329: {
    /* n:"BrtEndSXTHItems", */
    T: -1
  },
  /*::[*/
  330: {
    /* n:"BrtBeginSXTHItem", */
    T: 1
  },
  /*::[*/
  331: {
    /* n:"BrtEndSXTHItem", */
    T: -1
  },
  /*::[*/
  332: {
    /* n:"BrtBeginMetadata", */
    T: 1
  },
  /*::[*/
  333: {
    /* n:"BrtEndMetadata", */
    T: -1
  },
  /*::[*/
  334: {
    /* n:"BrtBeginEsmdtinfo", */
    T: 1
  },
  /*::[*/
  335: {
    /* n:"BrtMdtinfo", */
    f: P_
  },
  /*::[*/
  336: {
    /* n:"BrtEndEsmdtinfo", */
    T: -1
  },
  /*::[*/
  337: {
    /* n:"BrtBeginEsmdb", */
    f: $_,
    T: 1
  },
  /*::[*/
  338: {
    /* n:"BrtEndEsmdb", */
    T: -1
  },
  /*::[*/
  339: {
    /* n:"BrtBeginEsfmd", */
    T: 1
  },
  /*::[*/
  340: {
    /* n:"BrtEndEsfmd", */
    T: -1
  },
  /*::[*/
  341: {
    /* n:"BrtBeginSingleCells", */
    T: 1
  },
  /*::[*/
  342: {
    /* n:"BrtEndSingleCells", */
    T: -1
  },
  /*::[*/
  343: {
    /* n:"BrtBeginList", */
    T: 1
  },
  /*::[*/
  344: {
    /* n:"BrtEndList", */
    T: -1
  },
  /*::[*/
  345: {
    /* n:"BrtBeginListCols", */
    T: 1
  },
  /*::[*/
  346: {
    /* n:"BrtEndListCols", */
    T: -1
  },
  /*::[*/
  347: {
    /* n:"BrtBeginListCol", */
    T: 1
  },
  /*::[*/
  348: {
    /* n:"BrtEndListCol", */
    T: -1
  },
  /*::[*/
  349: {
    /* n:"BrtBeginListXmlCPr", */
    T: 1
  },
  /*::[*/
  350: {
    /* n:"BrtEndListXmlCPr", */
    T: -1
  },
  /*::[*/
  351: {
    /* n:"BrtListCCFmla" */
  },
  /*::[*/
  352: {
    /* n:"BrtListTrFmla" */
  },
  /*::[*/
  353: {
    /* n:"BrtBeginExternals", */
    T: 1
  },
  /*::[*/
  354: {
    /* n:"BrtEndExternals", */
    T: -1
  },
  /*::[*/
  355: {
    /* n:"BrtSupBookSrc", */
    f: Fo
  },
  /*::[*/
  357: {
    /* n:"BrtSupSelf" */
  },
  /*::[*/
  358: {
    /* n:"BrtSupSame" */
  },
  /*::[*/
  359: {
    /* n:"BrtSupTabs" */
  },
  /*::[*/
  360: {
    /* n:"BrtBeginSupBook", */
    T: 1
  },
  /*::[*/
  361: {
    /* n:"BrtPlaceholderName" */
  },
  /*::[*/
  362: {
    /* n:"BrtExternSheet", */
    f: H2
  },
  /*::[*/
  363: {
    /* n:"BrtExternTableStart" */
  },
  /*::[*/
  364: {
    /* n:"BrtExternTableEnd" */
  },
  /*::[*/
  366: {
    /* n:"BrtExternRowHdr" */
  },
  /*::[*/
  367: {
    /* n:"BrtExternCellBlank" */
  },
  /*::[*/
  368: {
    /* n:"BrtExternCellReal" */
  },
  /*::[*/
  369: {
    /* n:"BrtExternCellBool" */
  },
  /*::[*/
  370: {
    /* n:"BrtExternCellError" */
  },
  /*::[*/
  371: {
    /* n:"BrtExternCellString" */
  },
  /*::[*/
  372: {
    /* n:"BrtBeginEsmdx", */
    T: 1
  },
  /*::[*/
  373: {
    /* n:"BrtEndEsmdx", */
    T: -1
  },
  /*::[*/
  374: {
    /* n:"BrtBeginMdxSet", */
    T: 1
  },
  /*::[*/
  375: {
    /* n:"BrtEndMdxSet", */
    T: -1
  },
  /*::[*/
  376: {
    /* n:"BrtBeginMdxMbrProp", */
    T: 1
  },
  /*::[*/
  377: {
    /* n:"BrtEndMdxMbrProp", */
    T: -1
  },
  /*::[*/
  378: {
    /* n:"BrtBeginMdxKPI", */
    T: 1
  },
  /*::[*/
  379: {
    /* n:"BrtEndMdxKPI", */
    T: -1
  },
  /*::[*/
  380: {
    /* n:"BrtBeginEsstr", */
    T: 1
  },
  /*::[*/
  381: {
    /* n:"BrtEndEsstr", */
    T: -1
  },
  /*::[*/
  382: {
    /* n:"BrtBeginPRFItem", */
    T: 1
  },
  /*::[*/
  383: {
    /* n:"BrtEndPRFItem", */
    T: -1
  },
  /*::[*/
  384: {
    /* n:"BrtBeginPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  385: {
    /* n:"BrtEndPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  386: {
    /* n:"BrtBeginPivotCacheID", */
    T: 1
  },
  /*::[*/
  387: {
    /* n:"BrtEndPivotCacheID", */
    T: -1
  },
  /*::[*/
  388: {
    /* n:"BrtBeginISXVIs", */
    T: 1
  },
  /*::[*/
  389: {
    /* n:"BrtEndISXVIs", */
    T: -1
  },
  /*::[*/
  390: {
    /* n:"BrtBeginColInfos", */
    T: 1
  },
  /*::[*/
  391: {
    /* n:"BrtEndColInfos", */
    T: -1
  },
  /*::[*/
  392: {
    /* n:"BrtBeginRwBrk", */
    T: 1
  },
  /*::[*/
  393: {
    /* n:"BrtEndRwBrk", */
    T: -1
  },
  /*::[*/
  394: {
    /* n:"BrtBeginColBrk", */
    T: 1
  },
  /*::[*/
  395: {
    /* n:"BrtEndColBrk", */
    T: -1
  },
  /*::[*/
  396: {
    /* n:"BrtBrk" */
  },
  /*::[*/
  397: {
    /* n:"BrtUserBookView" */
  },
  /*::[*/
  398: {
    /* n:"BrtInfo" */
  },
  /*::[*/
  399: {
    /* n:"BrtCUsr" */
  },
  /*::[*/
  400: {
    /* n:"BrtUsr" */
  },
  /*::[*/
  401: {
    /* n:"BrtBeginUsers", */
    T: 1
  },
  /*::[*/
  403: {
    /* n:"BrtEOF" */
  },
  /*::[*/
  404: {
    /* n:"BrtUCR" */
  },
  /*::[*/
  405: {
    /* n:"BrtRRInsDel" */
  },
  /*::[*/
  406: {
    /* n:"BrtRREndInsDel" */
  },
  /*::[*/
  407: {
    /* n:"BrtRRMove" */
  },
  /*::[*/
  408: {
    /* n:"BrtRREndMove" */
  },
  /*::[*/
  409: {
    /* n:"BrtRRChgCell" */
  },
  /*::[*/
  410: {
    /* n:"BrtRREndChgCell" */
  },
  /*::[*/
  411: {
    /* n:"BrtRRHeader" */
  },
  /*::[*/
  412: {
    /* n:"BrtRRUserView" */
  },
  /*::[*/
  413: {
    /* n:"BrtRRRenSheet" */
  },
  /*::[*/
  414: {
    /* n:"BrtRRInsertSh" */
  },
  /*::[*/
  415: {
    /* n:"BrtRRDefName" */
  },
  /*::[*/
  416: {
    /* n:"BrtRRNote" */
  },
  /*::[*/
  417: {
    /* n:"BrtRRConflict" */
  },
  /*::[*/
  418: {
    /* n:"BrtRRTQSIF" */
  },
  /*::[*/
  419: {
    /* n:"BrtRRFormat" */
  },
  /*::[*/
  420: {
    /* n:"BrtRREndFormat" */
  },
  /*::[*/
  421: {
    /* n:"BrtRRAutoFmt" */
  },
  /*::[*/
  422: {
    /* n:"BrtBeginUserShViews", */
    T: 1
  },
  /*::[*/
  423: {
    /* n:"BrtBeginUserShView", */
    T: 1
  },
  /*::[*/
  424: {
    /* n:"BrtEndUserShView", */
    T: -1
  },
  /*::[*/
  425: {
    /* n:"BrtEndUserShViews", */
    T: -1
  },
  /*::[*/
  426: {
    /* n:"BrtArrFmla", */
    f: b4
  },
  /*::[*/
  427: {
    /* n:"BrtShrFmla", */
    f: k4
  },
  /*::[*/
  428: {
    /* n:"BrtTable" */
  },
  /*::[*/
  429: {
    /* n:"BrtBeginExtConnections", */
    T: 1
  },
  /*::[*/
  430: {
    /* n:"BrtEndExtConnections", */
    T: -1
  },
  /*::[*/
  431: {
    /* n:"BrtBeginPCDCalcMems", */
    T: 1
  },
  /*::[*/
  432: {
    /* n:"BrtEndPCDCalcMems", */
    T: -1
  },
  /*::[*/
  433: {
    /* n:"BrtBeginPCDCalcMem", */
    T: 1
  },
  /*::[*/
  434: {
    /* n:"BrtEndPCDCalcMem", */
    T: -1
  },
  /*::[*/
  435: {
    /* n:"BrtBeginPCDHGLevels", */
    T: 1
  },
  /*::[*/
  436: {
    /* n:"BrtEndPCDHGLevels", */
    T: -1
  },
  /*::[*/
  437: {
    /* n:"BrtBeginPCDHGLevel", */
    T: 1
  },
  /*::[*/
  438: {
    /* n:"BrtEndPCDHGLevel", */
    T: -1
  },
  /*::[*/
  439: {
    /* n:"BrtBeginPCDHGLGroups", */
    T: 1
  },
  /*::[*/
  440: {
    /* n:"BrtEndPCDHGLGroups", */
    T: -1
  },
  /*::[*/
  441: {
    /* n:"BrtBeginPCDHGLGroup", */
    T: 1
  },
  /*::[*/
  442: {
    /* n:"BrtEndPCDHGLGroup", */
    T: -1
  },
  /*::[*/
  443: {
    /* n:"BrtBeginPCDHGLGMembers", */
    T: 1
  },
  /*::[*/
  444: {
    /* n:"BrtEndPCDHGLGMembers", */
    T: -1
  },
  /*::[*/
  445: {
    /* n:"BrtBeginPCDHGLGMember", */
    T: 1
  },
  /*::[*/
  446: {
    /* n:"BrtEndPCDHGLGMember", */
    T: -1
  },
  /*::[*/
  447: {
    /* n:"BrtBeginQSI", */
    T: 1
  },
  /*::[*/
  448: {
    /* n:"BrtEndQSI", */
    T: -1
  },
  /*::[*/
  449: {
    /* n:"BrtBeginQSIR", */
    T: 1
  },
  /*::[*/
  450: {
    /* n:"BrtEndQSIR", */
    T: -1
  },
  /*::[*/
  451: {
    /* n:"BrtBeginDeletedNames", */
    T: 1
  },
  /*::[*/
  452: {
    /* n:"BrtEndDeletedNames", */
    T: -1
  },
  /*::[*/
  453: {
    /* n:"BrtBeginDeletedName", */
    T: 1
  },
  /*::[*/
  454: {
    /* n:"BrtEndDeletedName", */
    T: -1
  },
  /*::[*/
  455: {
    /* n:"BrtBeginQSIFs", */
    T: 1
  },
  /*::[*/
  456: {
    /* n:"BrtEndQSIFs", */
    T: -1
  },
  /*::[*/
  457: {
    /* n:"BrtBeginQSIF", */
    T: 1
  },
  /*::[*/
  458: {
    /* n:"BrtEndQSIF", */
    T: -1
  },
  /*::[*/
  459: {
    /* n:"BrtBeginAutoSortScope", */
    T: 1
  },
  /*::[*/
  460: {
    /* n:"BrtEndAutoSortScope", */
    T: -1
  },
  /*::[*/
  461: {
    /* n:"BrtBeginConditionalFormatting", */
    T: 1
  },
  /*::[*/
  462: {
    /* n:"BrtEndConditionalFormatting", */
    T: -1
  },
  /*::[*/
  463: {
    /* n:"BrtBeginCFRule", */
    T: 1
  },
  /*::[*/
  464: {
    /* n:"BrtEndCFRule", */
    T: -1
  },
  /*::[*/
  465: {
    /* n:"BrtBeginIconSet", */
    T: 1
  },
  /*::[*/
  466: {
    /* n:"BrtEndIconSet", */
    T: -1
  },
  /*::[*/
  467: {
    /* n:"BrtBeginDatabar", */
    T: 1
  },
  /*::[*/
  468: {
    /* n:"BrtEndDatabar", */
    T: -1
  },
  /*::[*/
  469: {
    /* n:"BrtBeginColorScale", */
    T: 1
  },
  /*::[*/
  470: {
    /* n:"BrtEndColorScale", */
    T: -1
  },
  /*::[*/
  471: {
    /* n:"BrtCFVO" */
  },
  /*::[*/
  472: {
    /* n:"BrtExternValueMeta" */
  },
  /*::[*/
  473: {
    /* n:"BrtBeginColorPalette", */
    T: 1
  },
  /*::[*/
  474: {
    /* n:"BrtEndColorPalette", */
    T: -1
  },
  /*::[*/
  475: {
    /* n:"BrtIndexedColor" */
  },
  /*::[*/
  476: {
    /* n:"BrtMargins", */
    f: D4
  },
  /*::[*/
  477: {
    /* n:"BrtPrintOptions" */
  },
  /*::[*/
  478: {
    /* n:"BrtPageSetup" */
  },
  /*::[*/
  479: {
    /* n:"BrtBeginHeaderFooter", */
    T: 1
  },
  /*::[*/
  480: {
    /* n:"BrtEndHeaderFooter", */
    T: -1
  },
  /*::[*/
  481: {
    /* n:"BrtBeginSXCrtFormat", */
    T: 1
  },
  /*::[*/
  482: {
    /* n:"BrtEndSXCrtFormat", */
    T: -1
  },
  /*::[*/
  483: {
    /* n:"BrtBeginSXCrtFormats", */
    T: 1
  },
  /*::[*/
  484: {
    /* n:"BrtEndSXCrtFormats", */
    T: -1
  },
  /*::[*/
  485: {
    /* n:"BrtWsFmtInfo", */
    f: Hw
  },
  /*::[*/
  486: {
    /* n:"BrtBeginMgs", */
    T: 1
  },
  /*::[*/
  487: {
    /* n:"BrtEndMGs", */
    T: -1
  },
  /*::[*/
  488: {
    /* n:"BrtBeginMGMaps", */
    T: 1
  },
  /*::[*/
  489: {
    /* n:"BrtEndMGMaps", */
    T: -1
  },
  /*::[*/
  490: {
    /* n:"BrtBeginMG", */
    T: 1
  },
  /*::[*/
  491: {
    /* n:"BrtEndMG", */
    T: -1
  },
  /*::[*/
  492: {
    /* n:"BrtBeginMap", */
    T: 1
  },
  /*::[*/
  493: {
    /* n:"BrtEndMap", */
    T: -1
  },
  /*::[*/
  494: {
    /* n:"BrtHLink", */
    f: C4
  },
  /*::[*/
  495: {
    /* n:"BrtBeginDCon", */
    T: 1
  },
  /*::[*/
  496: {
    /* n:"BrtEndDCon", */
    T: -1
  },
  /*::[*/
  497: {
    /* n:"BrtBeginDRefs", */
    T: 1
  },
  /*::[*/
  498: {
    /* n:"BrtEndDRefs", */
    T: -1
  },
  /*::[*/
  499: {
    /* n:"BrtDRef" */
  },
  /*::[*/
  500: {
    /* n:"BrtBeginScenMan", */
    T: 1
  },
  /*::[*/
  501: {
    /* n:"BrtEndScenMan", */
    T: -1
  },
  /*::[*/
  502: {
    /* n:"BrtBeginSct", */
    T: 1
  },
  /*::[*/
  503: {
    /* n:"BrtEndSct", */
    T: -1
  },
  /*::[*/
  504: {
    /* n:"BrtSlc" */
  },
  /*::[*/
  505: {
    /* n:"BrtBeginDXFs", */
    T: 1
  },
  /*::[*/
  506: {
    /* n:"BrtEndDXFs", */
    T: -1
  },
  /*::[*/
  507: {
    /* n:"BrtDXF" */
  },
  /*::[*/
  508: {
    /* n:"BrtBeginTableStyles", */
    T: 1
  },
  /*::[*/
  509: {
    /* n:"BrtEndTableStyles", */
    T: -1
  },
  /*::[*/
  510: {
    /* n:"BrtBeginTableStyle", */
    T: 1
  },
  /*::[*/
  511: {
    /* n:"BrtEndTableStyle", */
    T: -1
  },
  /*::[*/
  512: {
    /* n:"BrtTableStyleElement" */
  },
  /*::[*/
  513: {
    /* n:"BrtTableStyleClient" */
  },
  /*::[*/
  514: {
    /* n:"BrtBeginVolDeps", */
    T: 1
  },
  /*::[*/
  515: {
    /* n:"BrtEndVolDeps", */
    T: -1
  },
  /*::[*/
  516: {
    /* n:"BrtBeginVolType", */
    T: 1
  },
  /*::[*/
  517: {
    /* n:"BrtEndVolType", */
    T: -1
  },
  /*::[*/
  518: {
    /* n:"BrtBeginVolMain", */
    T: 1
  },
  /*::[*/
  519: {
    /* n:"BrtEndVolMain", */
    T: -1
  },
  /*::[*/
  520: {
    /* n:"BrtBeginVolTopic", */
    T: 1
  },
  /*::[*/
  521: {
    /* n:"BrtEndVolTopic", */
    T: -1
  },
  /*::[*/
  522: {
    /* n:"BrtVolSubtopic" */
  },
  /*::[*/
  523: {
    /* n:"BrtVolRef" */
  },
  /*::[*/
  524: {
    /* n:"BrtVolNum" */
  },
  /*::[*/
  525: {
    /* n:"BrtVolErr" */
  },
  /*::[*/
  526: {
    /* n:"BrtVolStr" */
  },
  /*::[*/
  527: {
    /* n:"BrtVolBool" */
  },
  /*::[*/
  528: {
    /* n:"BrtBeginCalcChain$", */
    T: 1
  },
  /*::[*/
  529: {
    /* n:"BrtEndCalcChain$", */
    T: -1
  },
  /*::[*/
  530: {
    /* n:"BrtBeginSortState", */
    T: 1
  },
  /*::[*/
  531: {
    /* n:"BrtEndSortState", */
    T: -1
  },
  /*::[*/
  532: {
    /* n:"BrtBeginSortCond", */
    T: 1
  },
  /*::[*/
  533: {
    /* n:"BrtEndSortCond", */
    T: -1
  },
  /*::[*/
  534: {
    /* n:"BrtBookProtection" */
  },
  /*::[*/
  535: {
    /* n:"BrtSheetProtection" */
  },
  /*::[*/
  536: {
    /* n:"BrtRangeProtection" */
  },
  /*::[*/
  537: {
    /* n:"BrtPhoneticInfo" */
  },
  /*::[*/
  538: {
    /* n:"BrtBeginECTxtWiz", */
    T: 1
  },
  /*::[*/
  539: {
    /* n:"BrtEndECTxtWiz", */
    T: -1
  },
  /*::[*/
  540: {
    /* n:"BrtBeginECTWFldInfoLst", */
    T: 1
  },
  /*::[*/
  541: {
    /* n:"BrtEndECTWFldInfoLst", */
    T: -1
  },
  /*::[*/
  542: {
    /* n:"BrtBeginECTwFldInfo", */
    T: 1
  },
  /*::[*/
  548: {
    /* n:"BrtFileSharing" */
  },
  /*::[*/
  549: {
    /* n:"BrtOleSize" */
  },
  /*::[*/
  550: {
    /* n:"BrtDrawing", */
    f: Fo
  },
  /*::[*/
  551: {
    /* n:"BrtLegacyDrawing" */
  },
  /*::[*/
  552: {
    /* n:"BrtLegacyDrawingHF" */
  },
  /*::[*/
  553: {
    /* n:"BrtWebOpt" */
  },
  /*::[*/
  554: {
    /* n:"BrtBeginWebPubItems", */
    T: 1
  },
  /*::[*/
  555: {
    /* n:"BrtEndWebPubItems", */
    T: -1
  },
  /*::[*/
  556: {
    /* n:"BrtBeginWebPubItem", */
    T: 1
  },
  /*::[*/
  557: {
    /* n:"BrtEndWebPubItem", */
    T: -1
  },
  /*::[*/
  558: {
    /* n:"BrtBeginSXCondFmt", */
    T: 1
  },
  /*::[*/
  559: {
    /* n:"BrtEndSXCondFmt", */
    T: -1
  },
  /*::[*/
  560: {
    /* n:"BrtBeginSXCondFmts", */
    T: 1
  },
  /*::[*/
  561: {
    /* n:"BrtEndSXCondFmts", */
    T: -1
  },
  /*::[*/
  562: {
    /* n:"BrtBkHim" */
  },
  /*::[*/
  564: {
    /* n:"BrtColor" */
  },
  /*::[*/
  565: {
    /* n:"BrtBeginIndexedColors", */
    T: 1
  },
  /*::[*/
  566: {
    /* n:"BrtEndIndexedColors", */
    T: -1
  },
  /*::[*/
  569: {
    /* n:"BrtBeginMRUColors", */
    T: 1
  },
  /*::[*/
  570: {
    /* n:"BrtEndMRUColors", */
    T: -1
  },
  /*::[*/
  572: {
    /* n:"BrtMRUColor" */
  },
  /*::[*/
  573: {
    /* n:"BrtBeginDVals", */
    T: 1
  },
  /*::[*/
  574: {
    /* n:"BrtEndDVals", */
    T: -1
  },
  /*::[*/
  577: {
    /* n:"BrtSupNameStart" */
  },
  /*::[*/
  578: {
    /* n:"BrtSupNameValueStart" */
  },
  /*::[*/
  579: {
    /* n:"BrtSupNameValueEnd" */
  },
  /*::[*/
  580: {
    /* n:"BrtSupNameNum" */
  },
  /*::[*/
  581: {
    /* n:"BrtSupNameErr" */
  },
  /*::[*/
  582: {
    /* n:"BrtSupNameSt" */
  },
  /*::[*/
  583: {
    /* n:"BrtSupNameNil" */
  },
  /*::[*/
  584: {
    /* n:"BrtSupNameBool" */
  },
  /*::[*/
  585: {
    /* n:"BrtSupNameFmla" */
  },
  /*::[*/
  586: {
    /* n:"BrtSupNameBits" */
  },
  /*::[*/
  587: {
    /* n:"BrtSupNameEnd" */
  },
  /*::[*/
  588: {
    /* n:"BrtEndSupBook", */
    T: -1
  },
  /*::[*/
  589: {
    /* n:"BrtCellSmartTagProperty" */
  },
  /*::[*/
  590: {
    /* n:"BrtBeginCellSmartTag", */
    T: 1
  },
  /*::[*/
  591: {
    /* n:"BrtEndCellSmartTag", */
    T: -1
  },
  /*::[*/
  592: {
    /* n:"BrtBeginCellSmartTags", */
    T: 1
  },
  /*::[*/
  593: {
    /* n:"BrtEndCellSmartTags", */
    T: -1
  },
  /*::[*/
  594: {
    /* n:"BrtBeginSmartTags", */
    T: 1
  },
  /*::[*/
  595: {
    /* n:"BrtEndSmartTags", */
    T: -1
  },
  /*::[*/
  596: {
    /* n:"BrtSmartTagType" */
  },
  /*::[*/
  597: {
    /* n:"BrtBeginSmartTagTypes", */
    T: 1
  },
  /*::[*/
  598: {
    /* n:"BrtEndSmartTagTypes", */
    T: -1
  },
  /*::[*/
  599: {
    /* n:"BrtBeginSXFilters", */
    T: 1
  },
  /*::[*/
  600: {
    /* n:"BrtEndSXFilters", */
    T: -1
  },
  /*::[*/
  601: {
    /* n:"BrtBeginSXFILTER", */
    T: 1
  },
  /*::[*/
  602: {
    /* n:"BrtEndSXFilter", */
    T: -1
  },
  /*::[*/
  603: {
    /* n:"BrtBeginFills", */
    T: 1
  },
  /*::[*/
  604: {
    /* n:"BrtEndFills", */
    T: -1
  },
  /*::[*/
  605: {
    /* n:"BrtBeginCellWatches", */
    T: 1
  },
  /*::[*/
  606: {
    /* n:"BrtEndCellWatches", */
    T: -1
  },
  /*::[*/
  607: {
    /* n:"BrtCellWatch" */
  },
  /*::[*/
  608: {
    /* n:"BrtBeginCRErrs", */
    T: 1
  },
  /*::[*/
  609: {
    /* n:"BrtEndCRErrs", */
    T: -1
  },
  /*::[*/
  610: {
    /* n:"BrtCrashRecErr" */
  },
  /*::[*/
  611: {
    /* n:"BrtBeginFonts", */
    T: 1
  },
  /*::[*/
  612: {
    /* n:"BrtEndFonts", */
    T: -1
  },
  /*::[*/
  613: {
    /* n:"BrtBeginBorders", */
    T: 1
  },
  /*::[*/
  614: {
    /* n:"BrtEndBorders", */
    T: -1
  },
  /*::[*/
  615: {
    /* n:"BrtBeginFmts", */
    T: 1
  },
  /*::[*/
  616: {
    /* n:"BrtEndFmts", */
    T: -1
  },
  /*::[*/
  617: {
    /* n:"BrtBeginCellXFs", */
    T: 1
  },
  /*::[*/
  618: {
    /* n:"BrtEndCellXFs", */
    T: -1
  },
  /*::[*/
  619: {
    /* n:"BrtBeginStyles", */
    T: 1
  },
  /*::[*/
  620: {
    /* n:"BrtEndStyles", */
    T: -1
  },
  /*::[*/
  625: {
    /* n:"BrtBigName" */
  },
  /*::[*/
  626: {
    /* n:"BrtBeginCellStyleXFs", */
    T: 1
  },
  /*::[*/
  627: {
    /* n:"BrtEndCellStyleXFs", */
    T: -1
  },
  /*::[*/
  628: {
    /* n:"BrtBeginComments", */
    T: 1
  },
  /*::[*/
  629: {
    /* n:"BrtEndComments", */
    T: -1
  },
  /*::[*/
  630: {
    /* n:"BrtBeginCommentAuthors", */
    T: 1
  },
  /*::[*/
  631: {
    /* n:"BrtEndCommentAuthors", */
    T: -1
  },
  /*::[*/
  632: {
    /* n:"BrtCommentAuthor", */
    f: j_
  },
  /*::[*/
  633: {
    /* n:"BrtBeginCommentList", */
    T: 1
  },
  /*::[*/
  634: {
    /* n:"BrtEndCommentList", */
    T: -1
  },
  /*::[*/
  635: {
    /* n:"BrtBeginComment", */
    T: 1,
    f: G_
  },
  /*::[*/
  636: {
    /* n:"BrtEndComment", */
    T: -1
  },
  /*::[*/
  637: {
    /* n:"BrtCommentText", */
    f: Kx
  },
  /*::[*/
  638: {
    /* n:"BrtBeginOleObjects", */
    T: 1
  },
  /*::[*/
  639: {
    /* n:"BrtOleObject" */
  },
  /*::[*/
  640: {
    /* n:"BrtEndOleObjects", */
    T: -1
  },
  /*::[*/
  641: {
    /* n:"BrtBeginSxrules", */
    T: 1
  },
  /*::[*/
  642: {
    /* n:"BrtEndSxRules", */
    T: -1
  },
  /*::[*/
  643: {
    /* n:"BrtBeginActiveXControls", */
    T: 1
  },
  /*::[*/
  644: {
    /* n:"BrtActiveX" */
  },
  /*::[*/
  645: {
    /* n:"BrtEndActiveXControls", */
    T: -1
  },
  /*::[*/
  646: {
    /* n:"BrtBeginPCDSDTCEMembersSortBy", */
    T: 1
  },
  /*::[*/
  648: {
    /* n:"BrtBeginCellIgnoreECs", */
    T: 1
  },
  /*::[*/
  649: {
    /* n:"BrtCellIgnoreEC" */
  },
  /*::[*/
  650: {
    /* n:"BrtEndCellIgnoreECs", */
    T: -1
  },
  /*::[*/
  651: {
    /* n:"BrtCsProp", */
    f: J4
  },
  /*::[*/
  652: {
    /* n:"BrtCsPageSetup" */
  },
  /*::[*/
  653: {
    /* n:"BrtBeginUserCsViews", */
    T: 1
  },
  /*::[*/
  654: {
    /* n:"BrtEndUserCsViews", */
    T: -1
  },
  /*::[*/
  655: {
    /* n:"BrtBeginUserCsView", */
    T: 1
  },
  /*::[*/
  656: {
    /* n:"BrtEndUserCsView", */
    T: -1
  },
  /*::[*/
  657: {
    /* n:"BrtBeginPcdSFCIEntries", */
    T: 1
  },
  /*::[*/
  658: {
    /* n:"BrtEndPCDSFCIEntries", */
    T: -1
  },
  /*::[*/
  659: {
    /* n:"BrtPCDSFCIEntry" */
  },
  /*::[*/
  660: {
    /* n:"BrtBeginListParts", */
    T: 1
  },
  /*::[*/
  661: {
    /* n:"BrtListPart" */
  },
  /*::[*/
  662: {
    /* n:"BrtEndListParts", */
    T: -1
  },
  /*::[*/
  663: {
    /* n:"BrtSheetCalcProp" */
  },
  /*::[*/
  664: {
    /* n:"BrtBeginFnGroup", */
    T: 1
  },
  /*::[*/
  665: {
    /* n:"BrtFnGroup" */
  },
  /*::[*/
  666: {
    /* n:"BrtEndFnGroup", */
    T: -1
  },
  /*::[*/
  667: {
    /* n:"BrtSupAddin" */
  },
  /*::[*/
  668: {
    /* n:"BrtSXTDMPOrder" */
  },
  /*::[*/
  669: {
    /* n:"BrtCsProtection" */
  },
  /*::[*/
  671: {
    /* n:"BrtBeginWsSortMap", */
    T: 1
  },
  /*::[*/
  672: {
    /* n:"BrtEndWsSortMap", */
    T: -1
  },
  /*::[*/
  673: {
    /* n:"BrtBeginRRSort", */
    T: 1
  },
  /*::[*/
  674: {
    /* n:"BrtEndRRSort", */
    T: -1
  },
  /*::[*/
  675: {
    /* n:"BrtRRSortItem" */
  },
  /*::[*/
  676: {
    /* n:"BrtFileSharingIso" */
  },
  /*::[*/
  677: {
    /* n:"BrtBookProtectionIso" */
  },
  /*::[*/
  678: {
    /* n:"BrtSheetProtectionIso" */
  },
  /*::[*/
  679: {
    /* n:"BrtCsProtectionIso" */
  },
  /*::[*/
  680: {
    /* n:"BrtRangeProtectionIso" */
  },
  /*::[*/
  681: {
    /* n:"BrtDValList" */
  },
  /*::[*/
  1024: {
    /* n:"BrtRwDescent" */
  },
  /*::[*/
  1025: {
    /* n:"BrtKnownFonts" */
  },
  /*::[*/
  1026: {
    /* n:"BrtBeginSXTupleSet", */
    T: 1
  },
  /*::[*/
  1027: {
    /* n:"BrtEndSXTupleSet", */
    T: -1
  },
  /*::[*/
  1028: {
    /* n:"BrtBeginSXTupleSetHeader", */
    T: 1
  },
  /*::[*/
  1029: {
    /* n:"BrtEndSXTupleSetHeader", */
    T: -1
  },
  /*::[*/
  1030: {
    /* n:"BrtSXTupleSetHeaderItem" */
  },
  /*::[*/
  1031: {
    /* n:"BrtBeginSXTupleSetData", */
    T: 1
  },
  /*::[*/
  1032: {
    /* n:"BrtEndSXTupleSetData", */
    T: -1
  },
  /*::[*/
  1033: {
    /* n:"BrtBeginSXTupleSetRow", */
    T: 1
  },
  /*::[*/
  1034: {
    /* n:"BrtEndSXTupleSetRow", */
    T: -1
  },
  /*::[*/
  1035: {
    /* n:"BrtSXTupleSetRowItem" */
  },
  /*::[*/
  1036: {
    /* n:"BrtNameExt" */
  },
  /*::[*/
  1037: {
    /* n:"BrtPCDH14" */
  },
  /*::[*/
  1038: {
    /* n:"BrtBeginPCDCalcMem14", */
    T: 1
  },
  /*::[*/
  1039: {
    /* n:"BrtEndPCDCalcMem14", */
    T: -1
  },
  /*::[*/
  1040: {
    /* n:"BrtSXTH14" */
  },
  /*::[*/
  1041: {
    /* n:"BrtBeginSparklineGroup", */
    T: 1
  },
  /*::[*/
  1042: {
    /* n:"BrtEndSparklineGroup", */
    T: -1
  },
  /*::[*/
  1043: {
    /* n:"BrtSparkline" */
  },
  /*::[*/
  1044: {
    /* n:"BrtSXDI14" */
  },
  /*::[*/
  1045: {
    /* n:"BrtWsFmtInfoEx14" */
  },
  /*::[*/
  1046: {
    /* n:"BrtBeginConditionalFormatting14", */
    T: 1
  },
  /*::[*/
  1047: {
    /* n:"BrtEndConditionalFormatting14", */
    T: -1
  },
  /*::[*/
  1048: {
    /* n:"BrtBeginCFRule14", */
    T: 1
  },
  /*::[*/
  1049: {
    /* n:"BrtEndCFRule14", */
    T: -1
  },
  /*::[*/
  1050: {
    /* n:"BrtCFVO14" */
  },
  /*::[*/
  1051: {
    /* n:"BrtBeginDatabar14", */
    T: 1
  },
  /*::[*/
  1052: {
    /* n:"BrtBeginIconSet14", */
    T: 1
  },
  /*::[*/
  1053: {
    /* n:"BrtDVal14", */
    f: $4
  },
  /*::[*/
  1054: {
    /* n:"BrtBeginDVals14", */
    T: 1
  },
  /*::[*/
  1055: {
    /* n:"BrtColor14" */
  },
  /*::[*/
  1056: {
    /* n:"BrtBeginSparklines", */
    T: 1
  },
  /*::[*/
  1057: {
    /* n:"BrtEndSparklines", */
    T: -1
  },
  /*::[*/
  1058: {
    /* n:"BrtBeginSparklineGroups", */
    T: 1
  },
  /*::[*/
  1059: {
    /* n:"BrtEndSparklineGroups", */
    T: -1
  },
  /*::[*/
  1061: {
    /* n:"BrtSXVD14" */
  },
  /*::[*/
  1062: {
    /* n:"BrtBeginSXView14", */
    T: 1
  },
  /*::[*/
  1063: {
    /* n:"BrtEndSXView14", */
    T: -1
  },
  /*::[*/
  1064: {
    /* n:"BrtBeginSXView16", */
    T: 1
  },
  /*::[*/
  1065: {
    /* n:"BrtEndSXView16", */
    T: -1
  },
  /*::[*/
  1066: {
    /* n:"BrtBeginPCD14", */
    T: 1
  },
  /*::[*/
  1067: {
    /* n:"BrtEndPCD14", */
    T: -1
  },
  /*::[*/
  1068: {
    /* n:"BrtBeginExtConn14", */
    T: 1
  },
  /*::[*/
  1069: {
    /* n:"BrtEndExtConn14", */
    T: -1
  },
  /*::[*/
  1070: {
    /* n:"BrtBeginSlicerCacheIDs", */
    T: 1
  },
  /*::[*/
  1071: {
    /* n:"BrtEndSlicerCacheIDs", */
    T: -1
  },
  /*::[*/
  1072: {
    /* n:"BrtBeginSlicerCacheID", */
    T: 1
  },
  /*::[*/
  1073: {
    /* n:"BrtEndSlicerCacheID", */
    T: -1
  },
  /*::[*/
  1075: {
    /* n:"BrtBeginSlicerCache", */
    T: 1
  },
  /*::[*/
  1076: {
    /* n:"BrtEndSlicerCache", */
    T: -1
  },
  /*::[*/
  1077: {
    /* n:"BrtBeginSlicerCacheDef", */
    T: 1
  },
  /*::[*/
  1078: {
    /* n:"BrtEndSlicerCacheDef", */
    T: -1
  },
  /*::[*/
  1079: {
    /* n:"BrtBeginSlicersEx", */
    T: 1
  },
  /*::[*/
  1080: {
    /* n:"BrtEndSlicersEx", */
    T: -1
  },
  /*::[*/
  1081: {
    /* n:"BrtBeginSlicerEx", */
    T: 1
  },
  /*::[*/
  1082: {
    /* n:"BrtEndSlicerEx", */
    T: -1
  },
  /*::[*/
  1083: {
    /* n:"BrtBeginSlicer", */
    T: 1
  },
  /*::[*/
  1084: {
    /* n:"BrtEndSlicer", */
    T: -1
  },
  /*::[*/
  1085: {
    /* n:"BrtSlicerCachePivotTables" */
  },
  /*::[*/
  1086: {
    /* n:"BrtBeginSlicerCacheOlapImpl", */
    T: 1
  },
  /*::[*/
  1087: {
    /* n:"BrtEndSlicerCacheOlapImpl", */
    T: -1
  },
  /*::[*/
  1088: {
    /* n:"BrtBeginSlicerCacheLevelsData", */
    T: 1
  },
  /*::[*/
  1089: {
    /* n:"BrtEndSlicerCacheLevelsData", */
    T: -1
  },
  /*::[*/
  1090: {
    /* n:"BrtBeginSlicerCacheLevelData", */
    T: 1
  },
  /*::[*/
  1091: {
    /* n:"BrtEndSlicerCacheLevelData", */
    T: -1
  },
  /*::[*/
  1092: {
    /* n:"BrtBeginSlicerCacheSiRanges", */
    T: 1
  },
  /*::[*/
  1093: {
    /* n:"BrtEndSlicerCacheSiRanges", */
    T: -1
  },
  /*::[*/
  1094: {
    /* n:"BrtBeginSlicerCacheSiRange", */
    T: 1
  },
  /*::[*/
  1095: {
    /* n:"BrtEndSlicerCacheSiRange", */
    T: -1
  },
  /*::[*/
  1096: {
    /* n:"BrtSlicerCacheOlapItem" */
  },
  /*::[*/
  1097: {
    /* n:"BrtBeginSlicerCacheSelections", */
    T: 1
  },
  /*::[*/
  1098: {
    /* n:"BrtSlicerCacheSelection" */
  },
  /*::[*/
  1099: {
    /* n:"BrtEndSlicerCacheSelections", */
    T: -1
  },
  /*::[*/
  1100: {
    /* n:"BrtBeginSlicerCacheNative", */
    T: 1
  },
  /*::[*/
  1101: {
    /* n:"BrtEndSlicerCacheNative", */
    T: -1
  },
  /*::[*/
  1102: {
    /* n:"BrtSlicerCacheNativeItem" */
  },
  /*::[*/
  1103: {
    /* n:"BrtRangeProtection14" */
  },
  /*::[*/
  1104: {
    /* n:"BrtRangeProtectionIso14" */
  },
  /*::[*/
  1105: {
    /* n:"BrtCellIgnoreEC14" */
  },
  /*::[*/
  1111: {
    /* n:"BrtList14" */
  },
  /*::[*/
  1112: {
    /* n:"BrtCFIcon" */
  },
  /*::[*/
  1113: {
    /* n:"BrtBeginSlicerCachesPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  1114: {
    /* n:"BrtEndSlicerCachesPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  1115: {
    /* n:"BrtBeginSlicers", */
    T: 1
  },
  /*::[*/
  1116: {
    /* n:"BrtEndSlicers", */
    T: -1
  },
  /*::[*/
  1117: {
    /* n:"BrtWbProp14" */
  },
  /*::[*/
  1118: {
    /* n:"BrtBeginSXEdit", */
    T: 1
  },
  /*::[*/
  1119: {
    /* n:"BrtEndSXEdit", */
    T: -1
  },
  /*::[*/
  1120: {
    /* n:"BrtBeginSXEdits", */
    T: 1
  },
  /*::[*/
  1121: {
    /* n:"BrtEndSXEdits", */
    T: -1
  },
  /*::[*/
  1122: {
    /* n:"BrtBeginSXChange", */
    T: 1
  },
  /*::[*/
  1123: {
    /* n:"BrtEndSXChange", */
    T: -1
  },
  /*::[*/
  1124: {
    /* n:"BrtBeginSXChanges", */
    T: 1
  },
  /*::[*/
  1125: {
    /* n:"BrtEndSXChanges", */
    T: -1
  },
  /*::[*/
  1126: {
    /* n:"BrtSXTupleItems" */
  },
  /*::[*/
  1128: {
    /* n:"BrtBeginSlicerStyle", */
    T: 1
  },
  /*::[*/
  1129: {
    /* n:"BrtEndSlicerStyle", */
    T: -1
  },
  /*::[*/
  1130: {
    /* n:"BrtSlicerStyleElement" */
  },
  /*::[*/
  1131: {
    /* n:"BrtBeginStyleSheetExt14", */
    T: 1
  },
  /*::[*/
  1132: {
    /* n:"BrtEndStyleSheetExt14", */
    T: -1
  },
  /*::[*/
  1133: {
    /* n:"BrtBeginSlicerCachesPivotCacheID", */
    T: 1
  },
  /*::[*/
  1134: {
    /* n:"BrtEndSlicerCachesPivotCacheID", */
    T: -1
  },
  /*::[*/
  1135: {
    /* n:"BrtBeginConditionalFormattings", */
    T: 1
  },
  /*::[*/
  1136: {
    /* n:"BrtEndConditionalFormattings", */
    T: -1
  },
  /*::[*/
  1137: {
    /* n:"BrtBeginPCDCalcMemExt", */
    T: 1
  },
  /*::[*/
  1138: {
    /* n:"BrtEndPCDCalcMemExt", */
    T: -1
  },
  /*::[*/
  1139: {
    /* n:"BrtBeginPCDCalcMemsExt", */
    T: 1
  },
  /*::[*/
  1140: {
    /* n:"BrtEndPCDCalcMemsExt", */
    T: -1
  },
  /*::[*/
  1141: {
    /* n:"BrtPCDField14" */
  },
  /*::[*/
  1142: {
    /* n:"BrtBeginSlicerStyles", */
    T: 1
  },
  /*::[*/
  1143: {
    /* n:"BrtEndSlicerStyles", */
    T: -1
  },
  /*::[*/
  1144: {
    /* n:"BrtBeginSlicerStyleElements", */
    T: 1
  },
  /*::[*/
  1145: {
    /* n:"BrtEndSlicerStyleElements", */
    T: -1
  },
  /*::[*/
  1146: {
    /* n:"BrtCFRuleExt" */
  },
  /*::[*/
  1147: {
    /* n:"BrtBeginSXCondFmt14", */
    T: 1
  },
  /*::[*/
  1148: {
    /* n:"BrtEndSXCondFmt14", */
    T: -1
  },
  /*::[*/
  1149: {
    /* n:"BrtBeginSXCondFmts14", */
    T: 1
  },
  /*::[*/
  1150: {
    /* n:"BrtEndSXCondFmts14", */
    T: -1
  },
  /*::[*/
  1152: {
    /* n:"BrtBeginSortCond14", */
    T: 1
  },
  /*::[*/
  1153: {
    /* n:"BrtEndSortCond14", */
    T: -1
  },
  /*::[*/
  1154: {
    /* n:"BrtEndDVals14", */
    T: -1
  },
  /*::[*/
  1155: {
    /* n:"BrtEndIconSet14", */
    T: -1
  },
  /*::[*/
  1156: {
    /* n:"BrtEndDatabar14", */
    T: -1
  },
  /*::[*/
  1157: {
    /* n:"BrtBeginColorScale14", */
    T: 1
  },
  /*::[*/
  1158: {
    /* n:"BrtEndColorScale14", */
    T: -1
  },
  /*::[*/
  1159: {
    /* n:"BrtBeginSxrules14", */
    T: 1
  },
  /*::[*/
  1160: {
    /* n:"BrtEndSxrules14", */
    T: -1
  },
  /*::[*/
  1161: {
    /* n:"BrtBeginPRule14", */
    T: 1
  },
  /*::[*/
  1162: {
    /* n:"BrtEndPRule14", */
    T: -1
  },
  /*::[*/
  1163: {
    /* n:"BrtBeginPRFilters14", */
    T: 1
  },
  /*::[*/
  1164: {
    /* n:"BrtEndPRFilters14", */
    T: -1
  },
  /*::[*/
  1165: {
    /* n:"BrtBeginPRFilter14", */
    T: 1
  },
  /*::[*/
  1166: {
    /* n:"BrtEndPRFilter14", */
    T: -1
  },
  /*::[*/
  1167: {
    /* n:"BrtBeginPRFItem14", */
    T: 1
  },
  /*::[*/
  1168: {
    /* n:"BrtEndPRFItem14", */
    T: -1
  },
  /*::[*/
  1169: {
    /* n:"BrtBeginCellIgnoreECs14", */
    T: 1
  },
  /*::[*/
  1170: {
    /* n:"BrtEndCellIgnoreECs14", */
    T: -1
  },
  /*::[*/
  1171: {
    /* n:"BrtDxf14" */
  },
  /*::[*/
  1172: {
    /* n:"BrtBeginDxF14s", */
    T: 1
  },
  /*::[*/
  1173: {
    /* n:"BrtEndDxf14s", */
    T: -1
  },
  /*::[*/
  1177: {
    /* n:"BrtFilter14" */
  },
  /*::[*/
  1178: {
    /* n:"BrtBeginCustomFilters14", */
    T: 1
  },
  /*::[*/
  1180: {
    /* n:"BrtCustomFilter14" */
  },
  /*::[*/
  1181: {
    /* n:"BrtIconFilter14" */
  },
  /*::[*/
  1182: {
    /* n:"BrtPivotCacheConnectionName" */
  },
  /*::[*/
  2048: {
    /* n:"BrtBeginDecoupledPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2049: {
    /* n:"BrtEndDecoupledPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2050: {
    /* n:"BrtDecoupledPivotCacheID" */
  },
  /*::[*/
  2051: {
    /* n:"BrtBeginPivotTableRefs", */
    T: 1
  },
  /*::[*/
  2052: {
    /* n:"BrtEndPivotTableRefs", */
    T: -1
  },
  /*::[*/
  2053: {
    /* n:"BrtPivotTableRef" */
  },
  /*::[*/
  2054: {
    /* n:"BrtSlicerCacheBookPivotTables" */
  },
  /*::[*/
  2055: {
    /* n:"BrtBeginSxvcells", */
    T: 1
  },
  /*::[*/
  2056: {
    /* n:"BrtEndSxvcells", */
    T: -1
  },
  /*::[*/
  2057: {
    /* n:"BrtBeginSxRow", */
    T: 1
  },
  /*::[*/
  2058: {
    /* n:"BrtEndSxRow", */
    T: -1
  },
  /*::[*/
  2060: {
    /* n:"BrtPcdCalcMem15" */
  },
  /*::[*/
  2067: {
    /* n:"BrtQsi15" */
  },
  /*::[*/
  2068: {
    /* n:"BrtBeginWebExtensions", */
    T: 1
  },
  /*::[*/
  2069: {
    /* n:"BrtEndWebExtensions", */
    T: -1
  },
  /*::[*/
  2070: {
    /* n:"BrtWebExtension" */
  },
  /*::[*/
  2071: {
    /* n:"BrtAbsPath15" */
  },
  /*::[*/
  2072: {
    /* n:"BrtBeginPivotTableUISettings", */
    T: 1
  },
  /*::[*/
  2073: {
    /* n:"BrtEndPivotTableUISettings", */
    T: -1
  },
  /*::[*/
  2075: {
    /* n:"BrtTableSlicerCacheIDs" */
  },
  /*::[*/
  2076: {
    /* n:"BrtTableSlicerCacheID" */
  },
  /*::[*/
  2077: {
    /* n:"BrtBeginTableSlicerCache", */
    T: 1
  },
  /*::[*/
  2078: {
    /* n:"BrtEndTableSlicerCache", */
    T: -1
  },
  /*::[*/
  2079: {
    /* n:"BrtSxFilter15" */
  },
  /*::[*/
  2080: {
    /* n:"BrtBeginTimelineCachePivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2081: {
    /* n:"BrtEndTimelineCachePivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2082: {
    /* n:"BrtTimelineCachePivotCacheID" */
  },
  /*::[*/
  2083: {
    /* n:"BrtBeginTimelineCacheIDs", */
    T: 1
  },
  /*::[*/
  2084: {
    /* n:"BrtEndTimelineCacheIDs", */
    T: -1
  },
  /*::[*/
  2085: {
    /* n:"BrtBeginTimelineCacheID", */
    T: 1
  },
  /*::[*/
  2086: {
    /* n:"BrtEndTimelineCacheID", */
    T: -1
  },
  /*::[*/
  2087: {
    /* n:"BrtBeginTimelinesEx", */
    T: 1
  },
  /*::[*/
  2088: {
    /* n:"BrtEndTimelinesEx", */
    T: -1
  },
  /*::[*/
  2089: {
    /* n:"BrtBeginTimelineEx", */
    T: 1
  },
  /*::[*/
  2090: {
    /* n:"BrtEndTimelineEx", */
    T: -1
  },
  /*::[*/
  2091: {
    /* n:"BrtWorkBookPr15" */
  },
  /*::[*/
  2092: {
    /* n:"BrtPCDH15" */
  },
  /*::[*/
  2093: {
    /* n:"BrtBeginTimelineStyle", */
    T: 1
  },
  /*::[*/
  2094: {
    /* n:"BrtEndTimelineStyle", */
    T: -1
  },
  /*::[*/
  2095: {
    /* n:"BrtTimelineStyleElement" */
  },
  /*::[*/
  2096: {
    /* n:"BrtBeginTimelineStylesheetExt15", */
    T: 1
  },
  /*::[*/
  2097: {
    /* n:"BrtEndTimelineStylesheetExt15", */
    T: -1
  },
  /*::[*/
  2098: {
    /* n:"BrtBeginTimelineStyles", */
    T: 1
  },
  /*::[*/
  2099: {
    /* n:"BrtEndTimelineStyles", */
    T: -1
  },
  /*::[*/
  2100: {
    /* n:"BrtBeginTimelineStyleElements", */
    T: 1
  },
  /*::[*/
  2101: {
    /* n:"BrtEndTimelineStyleElements", */
    T: -1
  },
  /*::[*/
  2102: {
    /* n:"BrtDxf15" */
  },
  /*::[*/
  2103: {
    /* n:"BrtBeginDxfs15", */
    T: 1
  },
  /*::[*/
  2104: {
    /* n:"BrtEndDxfs15", */
    T: -1
  },
  /*::[*/
  2105: {
    /* n:"BrtSlicerCacheHideItemsWithNoData" */
  },
  /*::[*/
  2106: {
    /* n:"BrtBeginItemUniqueNames", */
    T: 1
  },
  /*::[*/
  2107: {
    /* n:"BrtEndItemUniqueNames", */
    T: -1
  },
  /*::[*/
  2108: {
    /* n:"BrtItemUniqueName" */
  },
  /*::[*/
  2109: {
    /* n:"BrtBeginExtConn15", */
    T: 1
  },
  /*::[*/
  2110: {
    /* n:"BrtEndExtConn15", */
    T: -1
  },
  /*::[*/
  2111: {
    /* n:"BrtBeginOledbPr15", */
    T: 1
  },
  /*::[*/
  2112: {
    /* n:"BrtEndOledbPr15", */
    T: -1
  },
  /*::[*/
  2113: {
    /* n:"BrtBeginDataFeedPr15", */
    T: 1
  },
  /*::[*/
  2114: {
    /* n:"BrtEndDataFeedPr15", */
    T: -1
  },
  /*::[*/
  2115: {
    /* n:"BrtTextPr15" */
  },
  /*::[*/
  2116: {
    /* n:"BrtRangePr15" */
  },
  /*::[*/
  2117: {
    /* n:"BrtDbCommand15" */
  },
  /*::[*/
  2118: {
    /* n:"BrtBeginDbTables15", */
    T: 1
  },
  /*::[*/
  2119: {
    /* n:"BrtEndDbTables15", */
    T: -1
  },
  /*::[*/
  2120: {
    /* n:"BrtDbTable15" */
  },
  /*::[*/
  2121: {
    /* n:"BrtBeginDataModel", */
    T: 1
  },
  /*::[*/
  2122: {
    /* n:"BrtEndDataModel", */
    T: -1
  },
  /*::[*/
  2123: {
    /* n:"BrtBeginModelTables", */
    T: 1
  },
  /*::[*/
  2124: {
    /* n:"BrtEndModelTables", */
    T: -1
  },
  /*::[*/
  2125: {
    /* n:"BrtModelTable" */
  },
  /*::[*/
  2126: {
    /* n:"BrtBeginModelRelationships", */
    T: 1
  },
  /*::[*/
  2127: {
    /* n:"BrtEndModelRelationships", */
    T: -1
  },
  /*::[*/
  2128: {
    /* n:"BrtModelRelationship" */
  },
  /*::[*/
  2129: {
    /* n:"BrtBeginECTxtWiz15", */
    T: 1
  },
  /*::[*/
  2130: {
    /* n:"BrtEndECTxtWiz15", */
    T: -1
  },
  /*::[*/
  2131: {
    /* n:"BrtBeginECTWFldInfoLst15", */
    T: 1
  },
  /*::[*/
  2132: {
    /* n:"BrtEndECTWFldInfoLst15", */
    T: -1
  },
  /*::[*/
  2133: {
    /* n:"BrtBeginECTWFldInfo15", */
    T: 1
  },
  /*::[*/
  2134: {
    /* n:"BrtFieldListActiveItem" */
  },
  /*::[*/
  2135: {
    /* n:"BrtPivotCacheIdVersion" */
  },
  /*::[*/
  2136: {
    /* n:"BrtSXDI15" */
  },
  /*::[*/
  2137: {
    /* n:"BrtBeginModelTimeGroupings", */
    T: 1
  },
  /*::[*/
  2138: {
    /* n:"BrtEndModelTimeGroupings", */
    T: -1
  },
  /*::[*/
  2139: {
    /* n:"BrtBeginModelTimeGrouping", */
    T: 1
  },
  /*::[*/
  2140: {
    /* n:"BrtEndModelTimeGrouping", */
    T: -1
  },
  /*::[*/
  2141: {
    /* n:"BrtModelTimeGroupingCalcCol" */
  },
  /*::[*/
  3072: {
    /* n:"BrtUid" */
  },
  /*::[*/
  3073: {
    /* n:"BrtRevisionPtr" */
  },
  /*::[*/
  4096: {
    /* n:"BrtBeginDynamicArrayPr", */
    T: 1
  },
  /*::[*/
  4097: {
    /* n:"BrtEndDynamicArrayPr", */
    T: -1
  },
  /*::[*/
  5002: {
    /* n:"BrtBeginRichValueBlock", */
    T: 1
  },
  /*::[*/
  5003: {
    /* n:"BrtEndRichValueBlock", */
    T: -1
  },
  /*::[*/
  5081: {
    /* n:"BrtBeginRichFilters", */
    T: 1
  },
  /*::[*/
  5082: {
    /* n:"BrtEndRichFilters", */
    T: -1
  },
  /*::[*/
  5083: {
    /* n:"BrtRichFilter" */
  },
  /*::[*/
  5084: {
    /* n:"BrtBeginRichFilterColumn", */
    T: 1
  },
  /*::[*/
  5085: {
    /* n:"BrtEndRichFilterColumn", */
    T: -1
  },
  /*::[*/
  5086: {
    /* n:"BrtBeginCustomRichFilters", */
    T: 1
  },
  /*::[*/
  5087: {
    /* n:"BrtEndCustomRichFilters", */
    T: -1
  },
  /*::[*/
  5088: {
    /* n:"BrtCustomRichFilter" */
  },
  /*::[*/
  5089: {
    /* n:"BrtTop10RichFilter" */
  },
  /*::[*/
  5090: {
    /* n:"BrtDynamicRichFilter" */
  },
  /*::[*/
  5092: {
    /* n:"BrtBeginRichSortCondition", */
    T: 1
  },
  /*::[*/
  5093: {
    /* n:"BrtEndRichSortCondition", */
    T: -1
  },
  /*::[*/
  5094: {
    /* n:"BrtRichFilterDateGroupItem" */
  },
  /*::[*/
  5095: {
    /* n:"BrtBeginCalcFeatures", */
    T: 1
  },
  /*::[*/
  5096: {
    /* n:"BrtEndCalcFeatures", */
    T: -1
  },
  /*::[*/
  5097: {
    /* n:"BrtCalcFeature" */
  },
  /*::[*/
  5099: {
    /* n:"BrtExternalLinksPr" */
  },
  /*::[*/
  65535: { n: "" }
};
function ae(e, t, r, n) {
  var i = t;
  if (!isNaN(i)) {
    var a = n || (r || []).length || 0, s = e.next(4);
    s.write_shift(2, i), s.write_shift(2, a), /*:: len != null &&*/
    a > 0 && o0(r) && e.push(r);
  }
}
function PE(e, t, r, n) {
  var i = n || (r || []).length || 0;
  if (i <= 8224)
    return ae(e, t, r, i);
  var a = t;
  if (!isNaN(a)) {
    for (var s = r.parts || [], o = 0, l = 0, f = 0; f + (s[o] || 8224) <= 8224; )
      f += s[o] || 8224, o++;
    var c = e.next(4);
    for (c.write_shift(2, a), c.write_shift(2, f), e.push(r.slice(l, l + f)), l += f; l < i; ) {
      for (c = e.next(4), c.write_shift(2, 60), f = 0; f + (s[o] || 8224) <= 8224; )
        f += s[o] || 8224, o++;
      c.write_shift(2, f), e.push(r.slice(l, l + f)), l += f;
    }
  }
}
function Ii(e, t, r) {
  return e || (e = X(7)), e.write_shift(2, t), e.write_shift(2, r), e.write_shift(2, 0), e.write_shift(1, 0), e;
}
function RE(e, t, r, n) {
  var i = X(9);
  return Ii(i, e, t), tu(r, n || "b", i), i;
}
function NE(e, t, r) {
  var n = X(8 + 2 * r.length);
  return Ii(n, e, t), n.write_shift(1, r.length), n.write_shift(r.length, r, "sbcs"), n.l < n.length ? n.slice(0, n.l) : n;
}
function LE(e, t, r, n) {
  if (t.v != null)
    switch (t.t) {
      case "d":
      case "n":
        var i = t.t == "d" ? At(wt(t.v)) : t.v;
        i == (i | 0) && i >= 0 && i < 65536 ? ae(e, 2, J2(r, n, i)) : ae(e, 3, K2(r, n, i));
        return;
      case "b":
      case "e":
        ae(e, 5, RE(r, n, t.v, t.t));
        return;
      case "s":
      case "str":
        ae(e, 4, NE(r, n, (t.v || "").slice(0, 255)));
        return;
    }
  ae(e, 1, Ii(null, r, n));
}
function BE(e, t, r, n) {
  var i = Array.isArray(t), a = Pe(t["!ref"] || "A1"), s, o = "", l = [];
  if (a.e.c > 255 || a.e.r > 16383) {
    if (n.WTF)
      throw new Error("Range " + (t["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    a.e.c = Math.min(a.e.c, 255), a.e.r = Math.min(a.e.c, 16383), s = ze(a);
  }
  for (var f = a.s.r; f <= a.e.r; ++f) {
    o = at(f);
    for (var c = a.s.c; c <= a.e.c; ++c) {
      f === a.s.r && (l[c] = ht(c)), s = l[c] + o;
      var u = i ? (t[f] || [])[c] : t[s];
      u && LE(e, u, f, c);
    }
  }
}
function $E(e, t) {
  for (var r = t || {}, n = Tt(), i = 0, a = 0; a < e.SheetNames.length; ++a)
    e.SheetNames[a] == r.sheet && (i = a);
  if (i == 0 && r.sheet && e.SheetNames[0] != r.sheet)
    throw new Error("Sheet not found: " + r.sheet);
  return ae(n, r.biff == 4 ? 1033 : r.biff == 3 ? 521 : 9, d0(e, 16, r)), BE(n, e.Sheets[e.SheetNames[i]], i, r), ae(n, 10), n.end();
}
function UE(e, t, r) {
  ae(e, 49, I2({
    sz: 12,
    color: { theme: 1 },
    name: "Arial",
    family: 2,
    scheme: "minor"
  }, r));
}
function HE(e, t, r) {
  t && [[5, 8], [23, 26], [41, 44], [
    /*63*/
    50,
    /*66],[164,*/
    392
  ]].forEach(function(n) {
    for (var i = n[0]; i <= n[1]; ++i)
      t[i] != null && ae(e, 1054, N2(i, t[i], r));
  });
}
function WE(e, t) {
  var r = X(19);
  r.write_shift(4, 2151), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 1), r.write_shift(4, 0), ae(e, 2151, r), r = X(39), r.write_shift(4, 2152), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 0), r.write_shift(4, 0), r.write_shift(2, 1), r.write_shift(4, 4), r.write_shift(2, 0), iu(Pe(t["!ref"] || "A1"), r), r.write_shift(4, 4), ae(e, 2152, r);
}
function zE(e, t) {
  for (var r = 0; r < 16; ++r)
    ae(e, 224, Ul({ numFmtId: 0, style: !0 }, 0, t));
  t.cellXfs.forEach(function(n) {
    ae(e, 224, Ul(n, 0, t));
  });
}
function VE(e, t) {
  for (var r = 0; r < t["!links"].length; ++r) {
    var n = t["!links"][r];
    ae(e, 440, V2(n)), n[1].Tooltip && ae(e, 2048, G2(n));
  }
  delete t["!links"];
}
function GE(e, t) {
  if (t) {
    var r = 0;
    t.forEach(function(n, i) {
      ++r <= 256 && n && ae(e, 125, Y2(Ja(i, n), i));
    });
  }
}
function XE(e, t, r, n, i) {
  var a = 16 + zr(i.cellXfs, t, i);
  if (t.v == null && !t.bf) {
    ae(e, 513, on(r, n, a));
    return;
  }
  if (t.bf)
    ae(e, 6, gw(t, r, n, i, a));
  else
    switch (t.t) {
      case "d":
      case "n":
        var s = t.t == "d" ? At(wt(t.v)) : t.v;
        ae(e, 515, U2(r, n, s, a));
        break;
      case "b":
      case "e":
        ae(e, 517, $2(r, n, t.v, a, i, t.t));
        break;
      case "s":
      case "str":
        if (i.bookSST) {
          var o = x0(i.Strings, t.v, i.revStrings);
          ae(e, 253, P2(r, n, o, a));
        } else
          ae(e, 516, R2(r, n, (t.v || "").slice(0, 255), a, i));
        break;
      default:
        ae(e, 513, on(r, n, a));
    }
}
function jE(e, t, r) {
  var n = Tt(), i = r.SheetNames[e], a = r.Sheets[i] || {}, s = (r || {}).Workbook || {}, o = (s.Sheets || [])[e] || {}, l = Array.isArray(a), f = t.biff == 8, c, u = "", h = [], d = Pe(a["!ref"] || "A1"), v = f ? 65536 : 16384;
  if (d.e.c > 255 || d.e.r >= v) {
    if (t.WTF)
      throw new Error("Range " + (a["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    d.e.c = Math.min(d.e.c, 255), d.e.r = Math.min(d.e.c, v - 1);
  }
  ae(n, 2057, d0(r, 16, t)), ae(n, 13, Lt(1)), ae(n, 12, Lt(100)), ae(n, 15, vt(!0)), ae(n, 17, vt(!1)), ae(n, 16, sn(1e-3)), ae(n, 95, vt(!0)), ae(n, 42, vt(!1)), ae(n, 43, vt(!1)), ae(n, 130, Lt(1)), ae(n, 128, B2([0, 0])), ae(n, 131, vt(!1)), ae(n, 132, vt(!1)), f && GE(n, a["!cols"]), ae(n, 512, L2(d, t)), f && (a["!links"] = []);
  for (var p = d.s.r; p <= d.e.r; ++p) {
    u = at(p);
    for (var m = d.s.c; m <= d.e.c; ++m) {
      p === d.s.r && (h[m] = ht(m)), c = h[m] + u;
      var g = l ? (a[p] || [])[m] : a[c];
      g && (XE(n, g, p, m, t), f && g.l && a["!links"].push([c, g.l]));
    }
  }
  var x = o.CodeName || o.name || i;
  return f && ae(n, 574, D2((s.Views || [])[0])), f && (a["!merges"] || []).length && ae(n, 229, z2(a["!merges"])), f && VE(n, a), ae(n, 442, nu(x)), f && WE(n, a), ae(
    n,
    10
    /* EOF */
  ), n.end();
}
function YE(e, t, r) {
  var n = Tt(), i = (e || {}).Workbook || {}, a = i.Sheets || [], s = (
    /*::((*/
    i.WBProps || {
      /*::CodeName:"ThisWorkbook"*/
    }
  ), o = r.biff == 8, l = r.biff == 5;
  if (ae(n, 2057, d0(e, 5, r)), r.bookType == "xla" && ae(
    n,
    135
    /* Addin */
  ), ae(n, 225, o ? Lt(1200) : null), ae(n, 193, _2(2)), l && ae(
    n,
    191
    /* ToolbarHdr */
  ), l && ae(
    n,
    192
    /* ToolbarEnd */
  ), ae(
    n,
    226
    /* InterfaceEnd */
  ), ae(n, 92, O2("SheetJS", r)), ae(n, 66, Lt(o ? 1200 : 1252)), o && ae(n, 353, Lt(0)), o && ae(
    n,
    448
    /* Excel9File */
  ), ae(n, 317, q2(e.SheetNames.length)), o && e.vbaraw && ae(
    n,
    211
    /* ObProj */
  ), o && e.vbaraw) {
    var f = s.CodeName || "ThisWorkbook";
    ae(n, 442, nu(f));
  }
  ae(n, 156, Lt(17)), ae(n, 25, vt(!1)), ae(n, 18, vt(!1)), ae(n, 19, Lt(0)), o && ae(n, 431, vt(!1)), o && ae(n, 444, Lt(0)), ae(n, 61, M2()), ae(n, 64, vt(!1)), ae(n, 141, Lt(0)), ae(n, 34, vt(Z4(e) == "true")), ae(n, 14, vt(!0)), o && ae(n, 439, vt(!1)), ae(n, 218, Lt(0)), UE(n, e, r), HE(n, e.SSF, r), zE(n, r), o && ae(n, 352, vt(!1));
  var c = n.end(), u = Tt();
  o && ae(u, 140, X2()), o && r.Strings && PE(u, 252, k2(r.Strings)), ae(
    u,
    10
    /* EOF */
  );
  var h = u.end(), d = Tt(), v = 0, p = 0;
  for (p = 0; p < e.SheetNames.length; ++p)
    v += (o ? 12 : 11) + (o ? 2 : 1) * e.SheetNames[p].length;
  var m = c.length + v + h.length;
  for (p = 0; p < e.SheetNames.length; ++p) {
    var g = a[p] || {};
    ae(d, 133, b2({ pos: m, hs: g.Hidden || 0, dt: 0, name: e.SheetNames[p] }, r)), m += t[p].length;
  }
  var x = d.end();
  if (v != x.length)
    throw new Error("BS8 " + v + " != " + x.length);
  var _ = [];
  return c.length && _.push(c), x.length && _.push(x), h.length && _.push(h), nt(_);
}
function qE(e, t) {
  var r = t || {}, n = [];
  e && !e.SSF && (e.SSF = Ct(Ue)), e && e.SSF && (Xa(), Ga(e.SSF), r.revssf = ja(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.Strings = /*::((*/
  [], r.Strings.Count = 0, r.Strings.Unique = 0, _0(r), r.cellXfs = [], zr(r.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {});
  for (var i = 0; i < e.SheetNames.length; ++i)
    n[n.length] = jE(i, r, e);
  return n.unshift(YE(e, n, r)), nt(n);
}
function ku(e, t) {
  for (var r = 0; r <= e.SheetNames.length; ++r) {
    var n = e.Sheets[e.SheetNames[r]];
    if (!(!n || !n["!ref"])) {
      var i = It(n["!ref"]);
      i.e.c > 255 && typeof console < "u" && console.error && console.error("Worksheet '" + e.SheetNames[r] + "' extends beyond column IV (255).  Data may be lost.");
    }
  }
  var a = t || {};
  switch (a.biff || 2) {
    case 8:
    case 5:
      return qE(e, t);
    case 4:
    case 3:
    case 2:
      return $E(e, t);
  }
  throw new Error("invalid type " + a.bookType + " for BIFF");
}
function KE(e, t, r, n) {
  for (var i = e["!merges"] || [], a = [], s = t.s.c; s <= t.e.c; ++s) {
    for (var o = 0, l = 0, f = 0; f < i.length; ++f)
      if (!(i[f].s.r > r || i[f].s.c > s) && !(i[f].e.r < r || i[f].e.c < s)) {
        if (i[f].s.r < r || i[f].s.c < s) {
          o = -1;
          break;
        }
        o = i[f].e.r - i[f].s.r + 1, l = i[f].e.c - i[f].s.c + 1;
        break;
      }
    if (!(o < 0)) {
      var c = ke({ r, c: s }), u = n.dense ? (e[r] || [])[s] : e[c], h = u && u.v != null && (u.h || Fx(u.w || (_r(u), u.w) || "")) || "", d = {};
      o > 1 && (d.rowspan = o), l > 1 && (d.colspan = l), n.editable ? h = '<span contenteditable="true">' + h + "</span>" : u && (d["data-t"] = u && u.t || "z", u.v != null && (d["data-v"] = u.v), u.z != null && (d["data-z"] = u.z), u.l && (u.l.Target || "#").charAt(0) != "#" && (h = '<a href="' + u.l.Target + '">' + h + "</a>")), d.id = (n.id || "sjs") + "-" + c, a.push(ie("td", h, d));
    }
  }
  var v = "<tr>";
  return v + a.join("") + "</tr>";
}
var JE = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>', QE = "</body></html>";
function ZE(e, t, r) {
  var n = [];
  return n.join("") + "<table" + (r && r.id ? ' id="' + r.id + '"' : "") + ">";
}
function Mu(e, t) {
  var r = t || {}, n = r.header != null ? r.header : JE, i = r.footer != null ? r.footer : QE, a = [n], s = It(e["!ref"]);
  r.dense = Array.isArray(e), a.push(ZE(e, s, r));
  for (var o = s.s.r; o <= s.e.r; ++o)
    a.push(KE(e, s, o, r));
  return a.push("</table>" + i), a.join("");
}
function Du(e, t, r) {
  var n = r || {}, i = 0, a = 0;
  if (n.origin != null)
    if (typeof n.origin == "number")
      i = n.origin;
    else {
      var s = typeof n.origin == "string" ? Ze(n.origin) : n.origin;
      i = s.r, a = s.c;
    }
  var o = t.getElementsByTagName("tr"), l = Math.min(n.sheetRows || 1e7, o.length), f = { s: { r: 0, c: 0 }, e: { r: i, c: a } };
  if (e["!ref"]) {
    var c = It(e["!ref"]);
    f.s.r = Math.min(f.s.r, c.s.r), f.s.c = Math.min(f.s.c, c.s.c), f.e.r = Math.max(f.e.r, c.e.r), f.e.c = Math.max(f.e.c, c.e.c), i == -1 && (f.e.r = i = c.e.r + 1);
  }
  var u = [], h = 0, d = e["!rows"] || (e["!rows"] = []), v = 0, p = 0, m = 0, g = 0, x = 0, _ = 0;
  for (e["!cols"] || (e["!cols"] = []); v < o.length && p < l; ++v) {
    var C = o[v];
    if (jl(C)) {
      if (n.display)
        continue;
      d[p] = { hidden: !0 };
    }
    var R = C.children;
    for (m = g = 0; m < R.length; ++m) {
      var G = R[m];
      if (!(n.display && jl(G))) {
        var b = G.hasAttribute("data-v") ? G.getAttribute("data-v") : G.hasAttribute("v") ? G.getAttribute("v") : Mx(G.innerHTML), L = G.getAttribute("data-z") || G.getAttribute("z");
        for (h = 0; h < u.length; ++h) {
          var P = u[h];
          P.s.c == g + a && P.s.r < p + i && p + i <= P.e.r && (g = P.e.c + 1 - a, h = -1);
        }
        _ = +G.getAttribute("colspan") || 1, ((x = +G.getAttribute("rowspan") || 1) > 1 || _ > 1) && u.push({ s: { r: p + i, c: g + a }, e: { r: p + i + (x || 1) - 1, c: g + a + (_ || 1) - 1 } });
        var N = { t: "s", v: b }, F = G.getAttribute("data-t") || G.getAttribute("t") || "";
        b != null && (b.length == 0 ? N.t = F || "z" : n.raw || b.trim().length == 0 || F == "s" || (b === "TRUE" ? N = { t: "b", v: !0 } : b === "FALSE" ? N = { t: "b", v: !1 } : isNaN(gr(b)) ? isNaN(yi(b).getDate()) || (N = { t: "d", v: wt(b) }, n.cellDates || (N = { t: "n", v: At(N.v) }), N.z = n.dateNF || Ue[14]) : N = { t: "n", v: gr(b) })), N.z === void 0 && L != null && (N.z = L);
        var O = "", M = G.getElementsByTagName("A");
        if (M && M.length)
          for (var V = 0; V < M.length && !(M[V].hasAttribute("href") && (O = M[V].getAttribute("href"), O.charAt(0) != "#")); ++V)
            ;
        O && O.charAt(0) != "#" && (N.l = { Target: O }), n.dense ? (e[p + i] || (e[p + i] = []), e[p + i][g + a] = N) : e[ke({ c: g + a, r: p + i })] = N, f.e.c < g + a && (f.e.c = g + a), g += _;
      }
    }
    ++p;
  }
  return u.length && (e["!merges"] = (e["!merges"] || []).concat(u)), f.e.r = Math.max(f.e.r, p - 1 + i), e["!ref"] = ze(f), p >= l && (e["!fullref"] = ze((f.e.r = o.length - v + p - 1 + i, f))), e;
}
function Iu(e, t) {
  var r = t || {}, n = r.dense ? [] : {};
  return Du(n, e, t);
}
function eS(e, t) {
  return cn(Iu(e, t), t);
}
function jl(e) {
  var t = "", r = tS(e);
  return r && (t = r(e).getPropertyValue("display")), t || (t = e.style && e.style.display), t === "none";
}
function tS(e) {
  return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
}
var rS = /* @__PURE__ */ function() {
  var e = [
    "<office:master-styles>",
    '<style:master-page style:name="mp1" style:page-layout-name="mp1">',
    "<style:header/>",
    '<style:header-left style:display="false"/>',
    "<style:footer/>",
    '<style:footer-left style:display="false"/>',
    "</style:master-page>",
    "</office:master-styles>"
  ].join(""), t = "<office:document-styles " + wi({
    "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
    "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
    "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
    "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
    "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
    "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
    "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
    "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
    "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
    "office:version": "1.2"
  }) + ">" + e + "</office:document-styles>";
  return function() {
    return Ve + t;
  };
}(), Yl = /* @__PURE__ */ function() {
  var e = function(a) {
    return be(a).replace(/  +/g, function(s) {
      return '<text:s text:c="' + s.length + '"/>';
    }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
  }, t = `          <table:table-cell />
`, r = `          <table:covered-table-cell/>
`, n = function(a, s, o) {
    var l = [];
    l.push('      <table:table table:name="' + be(s.SheetNames[o]) + `" table:style-name="ta1">
`);
    var f = 0, c = 0, u = It(a["!ref"] || "A1"), h = a["!merges"] || [], d = 0, v = Array.isArray(a);
    if (a["!cols"])
      for (c = 0; c <= u.e.c; ++c)
        l.push("        <table:table-column" + (a["!cols"][c] ? ' table:style-name="co' + a["!cols"][c].ods + '"' : "") + `></table:table-column>
`);
    var p = "", m = a["!rows"] || [];
    for (f = 0; f < u.s.r; ++f)
      p = m[f] ? ' table:style-name="ro' + m[f].ods + '"' : "", l.push("        <table:table-row" + p + `></table:table-row>
`);
    for (; f <= u.e.r; ++f) {
      for (p = m[f] ? ' table:style-name="ro' + m[f].ods + '"' : "", l.push("        <table:table-row" + p + `>
`), c = 0; c < u.s.c; ++c)
        l.push(t);
      for (; c <= u.e.c; ++c) {
        var g = !1, x = {}, _ = "";
        for (d = 0; d != h.length; ++d)
          if (!(h[d].s.c > c) && !(h[d].s.r > f) && !(h[d].e.c < c) && !(h[d].e.r < f)) {
            (h[d].s.c != c || h[d].s.r != f) && (g = !0), x["table:number-columns-spanned"] = h[d].e.c - h[d].s.c + 1, x["table:number-rows-spanned"] = h[d].e.r - h[d].s.r + 1;
            break;
          }
        if (g) {
          l.push(r);
          continue;
        }
        var C = ke({ r: f, c }), R = v ? (a[f] || [])[c] : a[C];
        if (R && R.f && (x["table:formula"] = be(Ew(R.f)), R.F && R.F.slice(0, C.length) == C)) {
          var G = It(R.F);
          x["table:number-matrix-columns-spanned"] = G.e.c - G.s.c + 1, x["table:number-matrix-rows-spanned"] = G.e.r - G.s.r + 1;
        }
        if (!R) {
          l.push(t);
          continue;
        }
        switch (R.t) {
          case "b":
            _ = R.v ? "TRUE" : "FALSE", x["office:value-type"] = "boolean", x["office:boolean-value"] = R.v ? "true" : "false";
            break;
          case "n":
            _ = R.w || String(R.v || 0), x["office:value-type"] = "float", x["office:value"] = R.v || 0;
            break;
          case "s":
          case "str":
            _ = R.v == null ? "" : R.v, x["office:value-type"] = "string";
            break;
          case "d":
            _ = R.w || wt(R.v).toISOString(), x["office:value-type"] = "date", x["office:date-value"] = wt(R.v).toISOString(), x["table:style-name"] = "ce1";
            break;
          default:
            l.push(t);
            continue;
        }
        var b = e(_);
        if (R.l && R.l.Target) {
          var L = R.l.Target;
          L = L.charAt(0) == "#" ? "#" + Sw(L.slice(1)) : L, L.charAt(0) != "#" && !L.match(/^\w+:/) && (L = "../" + L), b = ie("text:a", b, { "xlink:href": L.replace(/&/g, "&amp;") });
        }
        l.push("          " + ie("table:table-cell", ie("text:p", b, {}), x) + `
`);
      }
      l.push(`        </table:table-row>
`);
    }
    return l.push(`      </table:table>
`), l.join("");
  }, i = function(a, s) {
    a.push(` <office:automatic-styles>
`), a.push(`  <number:date-style style:name="N37" number:automatic-order="true">
`), a.push(`   <number:month number:style="long"/>
`), a.push(`   <number:text>/</number:text>
`), a.push(`   <number:day number:style="long"/>
`), a.push(`   <number:text>/</number:text>
`), a.push(`   <number:year/>
`), a.push(`  </number:date-style>
`);
    var o = 0;
    s.SheetNames.map(function(f) {
      return s.Sheets[f];
    }).forEach(function(f) {
      if (f && f["!cols"]) {
        for (var c = 0; c < f["!cols"].length; ++c)
          if (f["!cols"][c]) {
            var u = f["!cols"][c];
            if (u.width == null && u.wpx == null && u.wch == null)
              continue;
            p0(u), u.ods = o;
            var h = f["!cols"][c].wpx + "px";
            a.push('  <style:style style:name="co' + o + `" style:family="table-column">
`), a.push('   <style:table-column-properties fo:break-before="auto" style:column-width="' + h + `"/>
`), a.push(`  </style:style>
`), ++o;
          }
      }
    });
    var l = 0;
    s.SheetNames.map(function(f) {
      return s.Sheets[f];
    }).forEach(function(f) {
      if (f && f["!rows"]) {
        for (var c = 0; c < f["!rows"].length; ++c)
          if (f["!rows"][c]) {
            f["!rows"][c].ods = l;
            var u = f["!rows"][c].hpx + "px";
            a.push('  <style:style style:name="ro' + l + `" style:family="table-row">
`), a.push('   <style:table-row-properties fo:break-before="auto" style:row-height="' + u + `"/>
`), a.push(`  </style:style>
`), ++l;
          }
      }
    }), a.push(`  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
`), a.push(`   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
`), a.push(`  </style:style>
`), a.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`), a.push(` </office:automatic-styles>
`);
  };
  return function(s, o) {
    var l = [Ve], f = wi({
      "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
      "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
      "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
      "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
      "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
      "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xmlns:dc": "http://purl.org/dc/elements/1.1/",
      "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
      "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
      "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
      "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
      "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
      "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
      "xmlns:math": "http://www.w3.org/1998/Math/MathML",
      "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
      "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
      "xmlns:ooo": "http://openoffice.org/2004/office",
      "xmlns:ooow": "http://openoffice.org/2004/writer",
      "xmlns:oooc": "http://openoffice.org/2004/calc",
      "xmlns:dom": "http://www.w3.org/2001/xml-events",
      "xmlns:xforms": "http://www.w3.org/2002/xforms",
      "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
      "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
      "xmlns:rpt": "http://openoffice.org/2005/report",
      "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
      "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
      "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
      "xmlns:tableooo": "http://openoffice.org/2009/table",
      "xmlns:drawooo": "http://openoffice.org/2010/draw",
      "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
      "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
      "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
      "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
      "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
      "office:version": "1.2"
    }), c = wi({
      "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
      "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet"
    });
    o.bookType == "fods" ? (l.push("<office:document" + f + c + `>
`), l.push(Yc().replace(/office:document-meta/g, "office:meta"))) : l.push("<office:document-content" + f + `>
`), i(l, s), l.push(`  <office:body>
`), l.push(`    <office:spreadsheet>
`);
    for (var u = 0; u != s.SheetNames.length; ++u)
      l.push(n(s.Sheets[s.SheetNames[u]], s, u));
    return l.push(`    </office:spreadsheet>
`), l.push(`  </office:body>
`), o.bookType == "fods" ? l.push("</office:document>") : l.push("</office:document-content>"), l.join("");
  };
}();
function Pu(e, t) {
  if (t.bookType == "fods")
    return Yl(e, t);
  var r = n0(), n = "", i = [], a = [];
  return n = "mimetype", xe(r, n, "application/vnd.oasis.opendocument.spreadsheet"), n = "content.xml", xe(r, n, Yl(e, t)), i.push([n, "text/xml"]), a.push([n, "ContentFile"]), n = "styles.xml", xe(r, n, rS(e, t)), i.push([n, "text/xml"]), a.push([n, "StylesFile"]), n = "meta.xml", xe(r, n, Ve + Yc(
    /*::wb, opts*/
  )), i.push([n, "text/xml"]), a.push([n, "MetadataFile"]), n = "manifest.rdf", xe(r, n, p2(
    a
    /*, opts*/
  )), i.push([n, "application/rdf+xml"]), n = "META-INF/manifest.xml", xe(r, n, h2(
    i
    /*, opts*/
  )), r;
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */
function Sa(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function nS(e) {
  return typeof TextEncoder < "u" ? new TextEncoder().encode(e) : Gt(pr(e));
}
function iS(e, t) {
  e:
    for (var r = 0; r <= e.length - t.length; ++r) {
      for (var n = 0; n < t.length; ++n)
        if (e[r + n] != t[n])
          continue e;
      return !0;
    }
  return !1;
}
function Ir(e) {
  var t = e.reduce(function(i, a) {
    return i + a.length;
  }, 0), r = new Uint8Array(t), n = 0;
  return e.forEach(function(i) {
    r.set(i, n), n += i.length;
  }), r;
}
function aS(e, t, r) {
  var n = Math.floor(r == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(r))) + 6176 - 20, i = r / Math.pow(10, n - 6176);
  e[t + 15] |= n >> 7, e[t + 14] |= (n & 127) << 1;
  for (var a = 0; i >= 1; ++a, i /= 256)
    e[t + a] = i & 255;
  e[t + 15] |= r >= 0 ? 0 : 128;
}
function Ei(e, t) {
  var r = t ? t[0] : 0, n = e[r] & 127;
  e:
    if (e[r++] >= 128 && (n |= (e[r] & 127) << 7, e[r++] < 128 || (n |= (e[r] & 127) << 14, e[r++] < 128) || (n |= (e[r] & 127) << 21, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 28), ++r, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 35), ++r, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 42), ++r, e[r++] < 128)))
      break e;
  return t && (t[0] = r), n;
}
function Fe(e) {
  var t = new Uint8Array(7);
  t[0] = e & 127;
  var r = 1;
  e:
    if (e > 127) {
      if (t[r - 1] |= 128, t[r] = e >> 7 & 127, ++r, e <= 16383 || (t[r - 1] |= 128, t[r] = e >> 14 & 127, ++r, e <= 2097151) || (t[r - 1] |= 128, t[r] = e >> 21 & 127, ++r, e <= 268435455) || (t[r - 1] |= 128, t[r] = e / 256 >>> 21 & 127, ++r, e <= 34359738367) || (t[r - 1] |= 128, t[r] = e / 65536 >>> 21 & 127, ++r, e <= 4398046511103))
        break e;
      t[r - 1] |= 128, t[r] = e / 16777216 >>> 21 & 127, ++r;
    }
  return t.slice(0, r);
}
function Dn(e) {
  var t = 0, r = e[t] & 127;
  e:
    if (e[t++] >= 128) {
      if (r |= (e[t] & 127) << 7, e[t++] < 128 || (r |= (e[t] & 127) << 14, e[t++] < 128) || (r |= (e[t] & 127) << 21, e[t++] < 128))
        break e;
      r |= (e[t] & 127) << 28;
    }
  return r;
}
function Ge(e) {
  for (var t = [], r = [0]; r[0] < e.length; ) {
    var n = r[0], i = Ei(e, r), a = i & 7;
    i = Math.floor(i / 8);
    var s = 0, o;
    if (i == 0)
      break;
    switch (a) {
      case 0:
        {
          for (var l = r[0]; e[r[0]++] >= 128; )
            ;
          o = e.slice(l, r[0]);
        }
        break;
      case 5:
        s = 4, o = e.slice(r[0], r[0] + s), r[0] += s;
        break;
      case 1:
        s = 8, o = e.slice(r[0], r[0] + s), r[0] += s;
        break;
      case 2:
        s = Ei(e, r), o = e.slice(r[0], r[0] + s), r[0] += s;
        break;
      case 3:
      case 4:
      default:
        throw new Error("PB Type ".concat(a, " for Field ").concat(i, " at offset ").concat(n));
    }
    var f = { data: o, type: a };
    t[i] == null ? t[i] = [f] : t[i].push(f);
  }
  return t;
}
function tt(e) {
  var t = [];
  return e.forEach(function(r, n) {
    r.forEach(function(i) {
      i.data && (t.push(Fe(n * 8 + i.type)), i.type == 2 && t.push(Fe(i.data.length)), t.push(i.data));
    });
  }), Ir(t);
}
function Wt(e) {
  for (var t, r = [], n = [0]; n[0] < e.length; ) {
    var i = Ei(e, n), a = Ge(e.slice(n[0], n[0] + i));
    n[0] += i;
    var s = {
      id: Dn(a[1][0].data),
      messages: []
    };
    a[2].forEach(function(o) {
      var l = Ge(o.data), f = Dn(l[3][0].data);
      s.messages.push({
        meta: l,
        data: e.slice(n[0], n[0] + f)
      }), n[0] += f;
    }), (t = a[3]) != null && t[0] && (s.merge = Dn(a[3][0].data) >>> 0 > 0), r.push(s);
  }
  return r;
}
function xn(e) {
  var t = [];
  return e.forEach(function(r) {
    var n = [];
    n[1] = [{ data: Fe(r.id), type: 0 }], n[2] = [], r.merge != null && (n[3] = [{ data: Fe(+!!r.merge), type: 0 }]);
    var i = [];
    r.messages.forEach(function(s) {
      i.push(s.data), s.meta[3] = [{ type: 0, data: Fe(s.data.length) }], n[2].push({ data: tt(s.meta), type: 2 });
    });
    var a = tt(n);
    t.push(Fe(a.length)), t.push(a), i.forEach(function(s) {
      return t.push(s);
    });
  }), Ir(t);
}
function sS(e, t) {
  if (e != 0)
    throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var r = [0], n = Ei(t, r), i = []; r[0] < t.length; ) {
    var a = t[r[0]] & 3;
    if (a == 0) {
      var s = t[r[0]++] >> 2;
      if (s < 60)
        ++s;
      else {
        var o = s - 59;
        s = t[r[0]], o > 1 && (s |= t[r[0] + 1] << 8), o > 2 && (s |= t[r[0] + 2] << 16), o > 3 && (s |= t[r[0] + 3] << 24), s >>>= 0, s++, r[0] += o;
      }
      i.push(t.slice(r[0], r[0] + s)), r[0] += s;
      continue;
    } else {
      var l = 0, f = 0;
      if (a == 1 ? (f = (t[r[0]] >> 2 & 7) + 4, l = (t[r[0]++] & 224) << 3, l |= t[r[0]++]) : (f = (t[r[0]++] >> 2) + 1, a == 2 ? (l = t[r[0]] | t[r[0] + 1] << 8, r[0] += 2) : (l = (t[r[0]] | t[r[0] + 1] << 8 | t[r[0] + 2] << 16 | t[r[0] + 3] << 24) >>> 0, r[0] += 4)), i = [Ir(i)], l == 0)
        throw new Error("Invalid offset 0");
      if (l > i[0].length)
        throw new Error("Invalid offset beyond length");
      if (f >= l)
        for (i.push(i[0].slice(-l)), f -= l; f >= i[i.length - 1].length; )
          i.push(i[i.length - 1]), f -= i[i.length - 1].length;
      i.push(i[0].slice(-l, -l + f));
    }
  }
  var c = Ir(i);
  if (c.length != n)
    throw new Error("Unexpected length: ".concat(c.length, " != ").concat(n));
  return c;
}
function zt(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = e[r++], i = e[r] | e[r + 1] << 8 | e[r + 2] << 16;
    r += 3, t.push(sS(n, e.slice(r, r + i))), r += i;
  }
  if (r !== e.length)
    throw new Error("data is not a valid framed stream!");
  return Ir(t);
}
function _n(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = Math.min(e.length - r, 268435455), i = new Uint8Array(4);
    t.push(i);
    var a = Fe(n), s = a.length;
    t.push(a), n <= 60 ? (s++, t.push(new Uint8Array([n - 1 << 2]))) : n <= 256 ? (s += 2, t.push(new Uint8Array([240, n - 1 & 255]))) : n <= 65536 ? (s += 3, t.push(new Uint8Array([244, n - 1 & 255, n - 1 >> 8 & 255]))) : n <= 16777216 ? (s += 4, t.push(new Uint8Array([248, n - 1 & 255, n - 1 >> 8 & 255, n - 1 >> 16 & 255]))) : n <= 4294967296 && (s += 5, t.push(new Uint8Array([252, n - 1 & 255, n - 1 >> 8 & 255, n - 1 >> 16 & 255, n - 1 >>> 24 & 255]))), t.push(e.slice(r, r + n)), s += n, i[0] = 0, i[1] = s & 255, i[2] = s >> 8 & 255, i[3] = s >> 16 & 255, r += n;
  }
  return Ir(t);
}
function Qs(e, t) {
  var r = new Uint8Array(32), n = Sa(r), i = 12, a = 0;
  switch (r[0] = 5, e.t) {
    case "n":
      r[1] = 2, aS(r, i, e.v), a |= 1, i += 16;
      break;
    case "b":
      r[1] = 6, n.setFloat64(i, e.v ? 1 : 0, !0), a |= 2, i += 8;
      break;
    case "s":
      if (t.indexOf(e.v) == -1)
        throw new Error("Value ".concat(e.v, " missing from SST!"));
      r[1] = 3, n.setUint32(i, t.indexOf(e.v), !0), a |= 8, i += 4;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return n.setUint32(8, a, !0), r.slice(0, i);
}
function Zs(e, t) {
  var r = new Uint8Array(32), n = Sa(r), i = 12, a = 0;
  switch (r[0] = 3, e.t) {
    case "n":
      r[2] = 2, n.setFloat64(i, e.v, !0), a |= 32, i += 8;
      break;
    case "b":
      r[2] = 6, n.setFloat64(i, e.v ? 1 : 0, !0), a |= 32, i += 8;
      break;
    case "s":
      if (t.indexOf(e.v) == -1)
        throw new Error("Value ".concat(e.v, " missing from SST!"));
      r[2] = 3, n.setUint32(i, t.indexOf(e.v), !0), a |= 16, i += 4;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return n.setUint32(4, a, !0), r.slice(0, i);
}
function Tr(e) {
  var t = Ge(e);
  return Ei(t[1][0].data);
}
function oS(e, t, r) {
  var n, i, a, s;
  if (!((n = e[6]) != null && n[0]) || !((i = e[7]) != null && i[0]))
    throw "Mutation only works on post-BNC storages!";
  var o = ((s = (a = e[8]) == null ? void 0 : a[0]) == null ? void 0 : s.data) && Dn(e[8][0].data) > 0 || !1;
  if (o)
    throw "Math only works with normal offsets";
  for (var l = 0, f = Sa(e[7][0].data), c = 0, u = [], h = Sa(e[4][0].data), d = 0, v = [], p = 0; p < t.length; ++p) {
    if (t[p] == null) {
      f.setUint16(p * 2, 65535, !0), h.setUint16(p * 2, 65535);
      continue;
    }
    f.setUint16(p * 2, c, !0), h.setUint16(p * 2, d, !0);
    var m, g;
    switch (typeof t[p]) {
      case "string":
        m = Qs({ t: "s", v: t[p] }, r), g = Zs({ t: "s", v: t[p] }, r);
        break;
      case "number":
        m = Qs({ t: "n", v: t[p] }, r), g = Zs({ t: "n", v: t[p] }, r);
        break;
      case "boolean":
        m = Qs({ t: "b", v: t[p] }, r), g = Zs({ t: "b", v: t[p] }, r);
        break;
      default:
        throw new Error("Unsupported value " + t[p]);
    }
    u.push(m), c += m.length, v.push(g), d += g.length, ++l;
  }
  for (e[2][0].data = Fe(l); p < e[7][0].data.length / 2; ++p)
    f.setUint16(p * 2, 65535, !0), h.setUint16(p * 2, 65535, !0);
  return e[6][0].data = Ir(u), e[3][0].data = Ir(v), l;
}
function lS(e, t) {
  if (!t || !t.numbers)
    throw new Error("Must pass a `numbers` option -- check the README");
  var r = e.Sheets[e.SheetNames[0]];
  e.SheetNames.length > 1 && console.error("The Numbers writer currently writes only the first table");
  var n = It(r["!ref"]);
  n.s.r = n.s.c = 0;
  var i = !1;
  n.e.c > 9 && (i = !0, n.e.c = 9), n.e.r > 49 && (i = !0, n.e.r = 49), i && console.error("The Numbers writer is currently limited to ".concat(ze(n)));
  var a = Ta(r, { range: n, header: 1 }), s = ["~Sh33tJ5~"];
  a.forEach(function(B) {
    return B.forEach(function(D) {
      typeof D == "string" && s.push(D);
    });
  });
  var o = {}, l = [], f = De.read(t.numbers, { type: "base64" });
  f.FileIndex.map(function(B, D) {
    return [B, f.FullPaths[D]];
  }).forEach(function(B) {
    var D = B[0], I = B[1];
    if (D.type == 2 && D.name.match(/\.iwa/)) {
      var j = D.content, ee = zt(j), fe = Wt(ee);
      fe.forEach(function(oe) {
        l.push(oe.id), o[oe.id] = { deps: [], location: I, type: Dn(oe.messages[0].meta[1][0].data) };
      });
    }
  }), l.sort(function(B, D) {
    return B - D;
  });
  var c = l.filter(function(B) {
    return B > 1;
  }).map(function(B) {
    return [B, Fe(B)];
  });
  f.FileIndex.map(function(B, D) {
    return [B, f.FullPaths[D]];
  }).forEach(function(B) {
    var D = B[0];
    if (B[1], !!D.name.match(/\.iwa/)) {
      var I = Wt(zt(D.content));
      I.forEach(function(j) {
        j.messages.forEach(function(ee) {
          c.forEach(function(fe) {
            j.messages.some(function(oe) {
              return Dn(oe.meta[1][0].data) != 11006 && iS(oe.data, fe[1]);
            }) && o[fe[0]].deps.push(j.id);
          });
        });
      });
    }
  });
  for (var u = De.find(f, o[1].location), h = Wt(zt(u.content)), d, v = 0; v < h.length; ++v) {
    var p = h[v];
    p.id == 1 && (d = p);
  }
  var m = Tr(Ge(d.messages[0].data)[1][0].data);
  for (u = De.find(f, o[m].location), h = Wt(zt(u.content)), v = 0; v < h.length; ++v)
    p = h[v], p.id == m && (d = p);
  for (m = Tr(Ge(d.messages[0].data)[2][0].data), u = De.find(f, o[m].location), h = Wt(zt(u.content)), v = 0; v < h.length; ++v)
    p = h[v], p.id == m && (d = p);
  for (m = Tr(Ge(d.messages[0].data)[2][0].data), u = De.find(f, o[m].location), h = Wt(zt(u.content)), v = 0; v < h.length; ++v)
    p = h[v], p.id == m && (d = p);
  var g = Ge(d.messages[0].data);
  {
    g[6][0].data = Fe(n.e.r + 1), g[7][0].data = Fe(n.e.c + 1);
    var x = Tr(g[46][0].data), _ = De.find(f, o[x].location), C = Wt(zt(_.content));
    {
      for (var R = 0; R < C.length && C[R].id != x; ++R)
        ;
      if (C[R].id != x)
        throw "Bad ColumnRowUIDMapArchive";
      var G = Ge(C[R].messages[0].data);
      G[1] = [], G[2] = [], G[3] = [];
      for (var b = 0; b <= n.e.c; ++b) {
        var L = [];
        L[1] = L[2] = [{ type: 0, data: Fe(b + 420690) }], G[1].push({ type: 2, data: tt(L) }), G[2].push({ type: 0, data: Fe(b) }), G[3].push({ type: 0, data: Fe(b) });
      }
      G[4] = [], G[5] = [], G[6] = [];
      for (var P = 0; P <= n.e.r; ++P)
        L = [], L[1] = L[2] = [{ type: 0, data: Fe(P + 726270) }], G[4].push({ type: 2, data: tt(L) }), G[5].push({ type: 0, data: Fe(P) }), G[6].push({ type: 0, data: Fe(P) });
      C[R].messages[0].data = tt(G);
    }
    _.content = _n(xn(C)), _.size = _.content.length, delete g[46];
    var N = Ge(g[4][0].data);
    {
      N[7][0].data = Fe(n.e.r + 1);
      var F = Ge(N[1][0].data), O = Tr(F[2][0].data);
      _ = De.find(f, o[O].location), C = Wt(zt(_.content));
      {
        if (C[0].id != O)
          throw "Bad HeaderStorageBucket";
        var M = Ge(C[0].messages[0].data);
        for (P = 0; P < a.length; ++P) {
          var V = Ge(M[2][0].data);
          V[1][0].data = Fe(P), V[4][0].data = Fe(a[P].length), M[2][P] = { type: M[2][0].type, data: tt(V) };
        }
        C[0].messages[0].data = tt(M);
      }
      _.content = _n(xn(C)), _.size = _.content.length;
      var J = Tr(N[2][0].data);
      _ = De.find(f, o[J].location), C = Wt(zt(_.content));
      {
        if (C[0].id != J)
          throw "Bad HeaderStorageBucket";
        for (M = Ge(C[0].messages[0].data), b = 0; b <= n.e.c; ++b)
          V = Ge(M[2][0].data), V[1][0].data = Fe(b), V[4][0].data = Fe(n.e.r + 1), M[2][b] = { type: M[2][0].type, data: tt(V) };
        C[0].messages[0].data = tt(M);
      }
      _.content = _n(xn(C)), _.size = _.content.length;
      var le = Tr(N[4][0].data);
      (function() {
        for (var B = De.find(f, o[le].location), D = Wt(zt(B.content)), I, j = 0; j < D.length; ++j) {
          var ee = D[j];
          ee.id == le && (I = ee);
        }
        var fe = Ge(I.messages[0].data);
        {
          fe[3] = [];
          var oe = [];
          s.forEach(function(_e, Ye) {
            oe[1] = [{ type: 0, data: Fe(Ye) }], oe[2] = [{ type: 0, data: Fe(1) }], oe[3] = [{ type: 2, data: nS(_e) }], fe[3].push({ type: 2, data: tt(oe) });
          });
        }
        I.messages[0].data = tt(fe);
        var re = xn(D), Ce = _n(re);
        B.content = Ce, B.size = B.content.length;
      })();
      var he = Ge(N[3][0].data);
      {
        var pe = he[1][0];
        delete he[2];
        var me = Ge(pe.data);
        {
          var Me = Tr(me[2][0].data);
          (function() {
            for (var B = De.find(f, o[Me].location), D = Wt(zt(B.content)), I, j = 0; j < D.length; ++j) {
              var ee = D[j];
              ee.id == Me && (I = ee);
            }
            var fe = Ge(I.messages[0].data);
            {
              delete fe[6], delete he[7];
              var oe = new Uint8Array(fe[5][0].data);
              fe[5] = [];
              for (var re = 0, Ce = 0; Ce <= n.e.r; ++Ce) {
                var _e = Ge(oe);
                re += oS(_e, a[Ce], s), _e[1][0].data = Fe(Ce), fe[5].push({ data: tt(_e), type: 2 });
              }
              fe[1] = [{ type: 0, data: Fe(n.e.c + 1) }], fe[2] = [{ type: 0, data: Fe(n.e.r + 1) }], fe[3] = [{ type: 0, data: Fe(re) }], fe[4] = [{ type: 0, data: Fe(n.e.r + 1) }];
            }
            I.messages[0].data = tt(fe);
            var Ye = xn(D), we = _n(Ye);
            B.content = we, B.size = B.content.length;
          })();
        }
        pe.data = tt(me);
      }
      N[3][0].data = tt(he);
    }
    g[4][0].data = tt(N);
  }
  d.messages[0].data = tt(g);
  var Se = xn(h), k = _n(Se);
  return u.content = k, u.size = u.content.length, f;
}
function fS(e) {
  return function(r) {
    for (var n = 0; n != e.length; ++n) {
      var i = e[n];
      r[i[0]] === void 0 && (r[i[0]] = i[1]), i[2] === "n" && (r[i[0]] = Number(r[i[0]]));
    }
  };
}
function _0(e) {
  fS([
    ["cellDates", !1],
    /* write date cells with type `d` */
    ["bookSST", !1],
    /* Generate Shared String Table */
    ["bookType", "xlsx"],
    /* Type of workbook (xlsx/m/b) */
    ["compression", !1],
    /* Use file compression */
    ["WTF", !1]
    /* WTF mode (throws errors) */
  ])(e);
}
function cS(e, t) {
  return t.bookType == "ods" ? Pu(e, t) : t.bookType == "numbers" ? lS(e, t) : t.bookType == "xlsb" ? uS(e, t) : hS(e, t);
}
function uS(e, t) {
  Cn = 1024, e && !e.SSF && (e.SSF = Ct(Ue)), e && e.SSF && (Xa(), Ga(e.SSF), t.revssf = ja(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), t.rels = {}, t.wbrels = {}, t.Strings = /*::((*/
  [], t.Strings.Count = 0, t.Strings.Unique = 0, pi ? t.revStrings = /* @__PURE__ */ new Map() : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo);
  var r = t.bookType == "xlsb" ? "bin" : "xml", n = gu.indexOf(t.bookType) > -1, i = Gc();
  _0(t = t || {});
  var a = n0(), s = "", o = 0;
  if (t.cellXfs = [], zr(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", xe(a, s, qc(e.Props, t)), i.coreprops.push(s), Oe(t.rels, 2, s, Te.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames))
    if (!e.Workbook || !e.Workbook.Sheets)
      e.Props.SheetNames = e.SheetNames;
    else {
      for (var l = [], f = 0; f < e.SheetNames.length; ++f)
        (e.Workbook.Sheets[f] || {}).Hidden != 2 && l.push(e.SheetNames[f]);
      e.Props.SheetNames = l;
    }
  for (e.Props.Worksheets = e.Props.SheetNames.length, xe(a, s, Jc(e.Props)), i.extprops.push(s), Oe(t.rels, 3, s, Te.EXT_PROPS), e.Custprops !== e.Props && st(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", xe(a, s, Qc(e.Custprops)), i.custprops.push(s), Oe(t.rels, 4, s, Te.CUST_PROPS)), o = 1; o <= e.SheetNames.length; ++o) {
    var c = { "!id": {} }, u = e.Sheets[e.SheetNames[o - 1]], h = (u || {})["!type"] || "sheet";
    switch (h) {
      case "chart":
      default:
        s = "xl/worksheets/sheet" + o + "." + r, xe(a, s, pE(o - 1, s, t, e, c)), i.sheets.push(s), Oe(t.wbrels, -1, "worksheets/sheet" + o + "." + r, Te.WS[0]);
    }
    if (u) {
      var d = u["!comments"], v = !1, p = "";
      d && d.length > 0 && (p = "xl/comments" + o + "." + r, xe(a, p, vE(d, p)), i.comments.push(p), Oe(c, -1, "../comments" + o + "." + r, Te.CMNT), v = !0), u["!legacy"] && v && xe(a, "xl/drawings/vmlDrawing" + o + ".vml", pu(o, u["!comments"])), delete u["!comments"], delete u["!legacy"];
    }
    c["!id"].rId1 && xe(a, jc(s), kn(c));
  }
  return t.Strings != null && t.Strings.length > 0 && (s = "xl/sharedStrings." + r, xe(a, s, gE(t.Strings, s, t)), i.strs.push(s), Oe(t.wbrels, -1, "sharedStrings." + r, Te.SST)), s = "xl/workbook." + r, xe(a, s, dE(e, s)), i.workbooks.push(s), Oe(t.rels, 1, s, Te.WB), s = "xl/theme/theme1.xml", xe(a, s, hu(e.Themes, t)), i.themes.push(s), Oe(t.wbrels, -1, "theme/theme1.xml", Te.THEME), s = "xl/styles." + r, xe(a, s, mE(e, s, t)), i.styles.push(s), Oe(t.wbrels, -1, "styles." + r, Te.STY), e.vbaraw && n && (s = "xl/vbaProject.bin", xe(a, s, e.vbaraw), i.vba.push(s), Oe(t.wbrels, -1, "vbaProject.bin", Te.VBA)), s = "xl/metadata." + r, xe(a, s, xE(s)), i.metadata.push(s), Oe(t.wbrels, -1, "metadata." + r, Te.XLMETA), xe(a, "[Content_Types].xml", Xc(i, t)), xe(a, "_rels/.rels", kn(t.rels)), xe(a, "xl/_rels/workbook." + r + ".rels", kn(t.wbrels)), delete t.revssf, delete t.ssf, a;
}
function hS(e, t) {
  Cn = 1024, e && !e.SSF && (e.SSF = Ct(Ue)), e && e.SSF && (Xa(), Ga(e.SSF), t.revssf = ja(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), t.rels = {}, t.wbrels = {}, t.Strings = /*::((*/
  [], t.Strings.Count = 0, t.Strings.Unique = 0, pi ? t.revStrings = /* @__PURE__ */ new Map() : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo);
  var r = "xml", n = gu.indexOf(t.bookType) > -1, i = Gc();
  _0(t = t || {});
  var a = n0(), s = "", o = 0;
  if (t.cellXfs = [], zr(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", xe(a, s, qc(e.Props, t)), i.coreprops.push(s), Oe(t.rels, 2, s, Te.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames))
    if (!e.Workbook || !e.Workbook.Sheets)
      e.Props.SheetNames = e.SheetNames;
    else {
      for (var l = [], f = 0; f < e.SheetNames.length; ++f)
        (e.Workbook.Sheets[f] || {}).Hidden != 2 && l.push(e.SheetNames[f]);
      e.Props.SheetNames = l;
    }
  e.Props.Worksheets = e.Props.SheetNames.length, xe(a, s, Jc(e.Props)), i.extprops.push(s), Oe(t.rels, 3, s, Te.EXT_PROPS), e.Custprops !== e.Props && st(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", xe(a, s, Qc(e.Custprops)), i.custprops.push(s), Oe(t.rels, 4, s, Te.CUST_PROPS));
  var c = ["SheetJ5"];
  for (t.tcid = 0, o = 1; o <= e.SheetNames.length; ++o) {
    var u = { "!id": {} }, h = e.Sheets[e.SheetNames[o - 1]], d = (h || {})["!type"] || "sheet";
    switch (d) {
      case "chart":
      default:
        s = "xl/worksheets/sheet" + o + "." + r, xe(a, s, Au(o - 1, t, e, u)), i.sheets.push(s), Oe(t.wbrels, -1, "worksheets/sheet" + o + "." + r, Te.WS[0]);
    }
    if (h) {
      var v = h["!comments"], p = !1, m = "";
      if (v && v.length > 0) {
        var g = !1;
        v.forEach(function(x) {
          x[1].forEach(function(_) {
            _.T == !0 && (g = !0);
          });
        }), g && (m = "xl/threadedComments/threadedComment" + o + "." + r, xe(a, m, z_(v, c, t)), i.threadedcomments.push(m), Oe(u, -1, "../threadedComments/threadedComment" + o + "." + r, Te.TCMNT)), m = "xl/comments" + o + "." + r, xe(a, m, mu(v)), i.comments.push(m), Oe(u, -1, "../comments" + o + "." + r, Te.CMNT), p = !0;
      }
      h["!legacy"] && p && xe(a, "xl/drawings/vmlDrawing" + o + ".vml", pu(o, h["!comments"])), delete h["!comments"], delete h["!legacy"];
    }
    u["!id"].rId1 && xe(a, jc(s), kn(u));
  }
  return t.Strings != null && t.Strings.length > 0 && (s = "xl/sharedStrings." + r, xe(a, s, su(t.Strings, t)), i.strs.push(s), Oe(t.wbrels, -1, "sharedStrings." + r, Te.SST)), s = "xl/workbook." + r, xe(a, s, Ou(e)), i.workbooks.push(s), Oe(t.rels, 1, s, Te.WB), s = "xl/theme/theme1.xml", xe(a, s, hu(e.Themes, t)), i.themes.push(s), Oe(t.wbrels, -1, "theme/theme1.xml", Te.THEME), s = "xl/styles." + r, xe(a, s, cu(e, t)), i.styles.push(s), Oe(t.wbrels, -1, "styles." + r, Te.STY), e.vbaraw && n && (s = "xl/vbaProject.bin", xe(a, s, e.vbaraw), i.vba.push(s), Oe(t.wbrels, -1, "vbaProject.bin", Te.VBA)), s = "xl/metadata." + r, xe(a, s, du()), i.metadata.push(s), Oe(t.wbrels, -1, "metadata." + r, Te.XLMETA), c.length > 1 && (s = "xl/persons/person.xml", xe(a, s, V_(c)), i.people.push(s), Oe(t.wbrels, -1, "persons/person.xml", Te.PEOPLE)), xe(a, "[Content_Types].xml", Xc(i, t)), xe(a, "_rels/.rels", kn(t.rels)), xe(a, "xl/_rels/workbook." + r + ".rels", kn(t.wbrels)), delete t.revssf, delete t.ssf, a;
}
function dS(e, t) {
  var r = "";
  switch ((t || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      r = xr(e.slice(0, 12));
      break;
    case "binary":
      r = e;
      break;
    case "array":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error("Unrecognized type " + (t && t.type || "undefined"));
  }
  return [r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2), r.charCodeAt(3), r.charCodeAt(4), r.charCodeAt(5), r.charCodeAt(6), r.charCodeAt(7)];
}
function Ru(e, t) {
  switch (t.type) {
    case "base64":
    case "binary":
      break;
    case "buffer":
    case "array":
      t.type = "";
      break;
    case "file":
      return bi(t.file, De.write(e, { type: Ae ? "buffer" : "" }));
    case "string":
      throw new Error("'string' output type invalid for '" + t.bookType + "' files");
    default:
      throw new Error("Unrecognized type " + t.type);
  }
  return De.write(e, t);
}
function pS(e, t) {
  var r = Ct(t || {}), n = cS(e, r);
  return mS(n, r);
}
function mS(e, t) {
  var r = {}, n = Ae ? "nodebuffer" : typeof Uint8Array < "u" ? "array" : "string";
  if (t.compression && (r.compression = "DEFLATE"), t.password)
    r.type = n;
  else
    switch (t.type) {
      case "base64":
        r.type = "base64";
        break;
      case "binary":
        r.type = "string";
        break;
      case "string":
        throw new Error("'string' output type invalid for '" + t.bookType + "' files");
      case "buffer":
      case "file":
        r.type = n;
        break;
      default:
        throw new Error("Unrecognized type " + t.type);
    }
  var i = e.FullPaths ? De.write(e, { fileType: "zip", type: (
    /*::(*/
    { nodebuffer: "buffer", string: "binary" }[r.type] || r.type
  ), compression: !!t.compression }) : e.generate(r);
  if (typeof Deno < "u" && typeof i == "string") {
    if (t.type == "binary" || t.type == "base64")
      return i;
    i = new Uint8Array(Va(i));
  }
  return t.password && typeof encrypt_agile < "u" ? Ru(encrypt_agile(i, t.password), t) : t.type === "file" ? bi(t.file, i) : t.type == "string" ? ci(
    /*::(*/
    i
    /*:: :any)*/
  ) : i;
}
function gS(e, t) {
  var r = t || {}, n = DE(e, r);
  return Ru(n, r);
}
function tr(e, t, r) {
  r || (r = "");
  var n = r + e;
  switch (t.type) {
    case "base64":
      return _i(pr(n));
    case "binary":
      return pr(n);
    case "string":
      return e;
    case "file":
      return bi(t.file, n, "utf8");
    case "buffer":
      return Ae ? Er(n, "utf8") : typeof TextEncoder < "u" ? new TextEncoder().encode(n) : tr(n, { type: "binary" }).split("").map(function(i) {
        return i.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + t.type);
}
function vS(e, t) {
  switch (t.type) {
    case "base64":
      return _i(e);
    case "binary":
      return e;
    case "string":
      return e;
    case "file":
      return bi(t.file, e, "binary");
    case "buffer":
      return Ae ? Er(e, "binary") : e.split("").map(function(r) {
        return r.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + t.type);
}
function Yi(e, t) {
  switch (t.type) {
    case "string":
    case "base64":
    case "binary":
      for (var r = "", n = 0; n < e.length; ++n)
        r += String.fromCharCode(e[n]);
      return t.type == "base64" ? _i(r) : t.type == "string" ? ci(r) : r;
    case "file":
      return bi(t.file, e);
    case "buffer":
      return e;
    default:
      throw new Error("Unrecognized type " + t.type);
  }
}
function Nu(e, t) {
  Vv(), rE(e);
  var r = Ct(t || {});
  if (r.cellStyles && (r.cellNF = !0, r.sheetStubs = !0), r.type == "array") {
    r.type = "binary";
    var n = Nu(e, r);
    return r.type = "array", Va(n);
  }
  var i = 0;
  if (r.sheet && (typeof r.sheet == "number" ? i = r.sheet : i = e.SheetNames.indexOf(r.sheet), !e.SheetNames[i]))
    throw new Error("Sheet not found: " + r.sheet + " : " + typeof r.sheet);
  switch (r.bookType || "xlsb") {
    case "xml":
    case "xlml":
      return tr(kE(e, r), r);
    case "slk":
    case "sylk":
      return tr(Z2.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case "htm":
    case "html":
      return tr(Mu(e.Sheets[e.SheetNames[i]], r), r);
    case "txt":
      return vS(Lu(e.Sheets[e.SheetNames[i]], r), r);
    case "csv":
      return tr(y0(e.Sheets[e.SheetNames[i]], r), r, "\uFEFF");
    case "dif":
      return tr(e_.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case "dbf":
      return Yi(Q2.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case "prn":
      return tr(t_.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case "rtf":
      return tr(l_.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case "eth":
      return tr(au.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case "fods":
      return tr(Pu(e, r), r);
    case "wk1":
      return Yi(Hl.sheet_to_wk1(e.Sheets[e.SheetNames[i]], r), r);
    case "wk3":
      return Yi(Hl.book_to_wk3(e, r), r);
    case "biff2":
      r.biff || (r.biff = 2);
    case "biff3":
      r.biff || (r.biff = 3);
    case "biff4":
      return r.biff || (r.biff = 4), Yi(ku(e, r), r);
    case "biff5":
      r.biff || (r.biff = 5);
    case "biff8":
    case "xla":
    case "xls":
      return r.biff || (r.biff = 8), gS(e, r);
    case "xlsx":
    case "xlsm":
    case "xlam":
    case "xlsb":
    case "numbers":
    case "ods":
      return pS(e, r);
    default:
      throw new Error("Unrecognized bookType |" + r.bookType + "|");
  }
}
function xS(e, t, r, n, i, a, s, o) {
  var l = at(r), f = o.defval, c = o.raw || !Object.prototype.hasOwnProperty.call(o, "raw"), u = !0, h = i === 1 ? [] : {};
  if (i !== 1)
    if (Object.defineProperty)
      try {
        Object.defineProperty(h, "__rowNum__", { value: r, enumerable: !1 });
      } catch {
        h.__rowNum__ = r;
      }
    else
      h.__rowNum__ = r;
  if (!s || e[r])
    for (var d = t.s.c; d <= t.e.c; ++d) {
      var v = s ? e[r][d] : e[n[d] + l];
      if (v === void 0 || v.t === void 0) {
        if (f === void 0)
          continue;
        a[d] != null && (h[a[d]] = f);
        continue;
      }
      var p = v.v;
      switch (v.t) {
        case "z":
          if (p == null)
            break;
          continue;
        case "e":
          p = p == 0 ? null : void 0;
          break;
        case "s":
        case "d":
        case "b":
        case "n":
          break;
        default:
          throw new Error("unrecognized type " + v.t);
      }
      if (a[d] != null) {
        if (p == null)
          if (v.t == "e" && p === null)
            h[a[d]] = null;
          else if (f !== void 0)
            h[a[d]] = f;
          else if (c && p === null)
            h[a[d]] = null;
          else
            continue;
        else
          h[a[d]] = c && (v.t !== "n" || v.t === "n" && o.rawNumbers !== !1) ? p : _r(v, p, o);
        p != null && (u = !1);
      }
    }
  return { row: h, isempty: u };
}
function Ta(e, t) {
  if (e == null || e["!ref"] == null)
    return [];
  var r = { t: "n", v: 0 }, n = 0, i = 1, a = [], s = 0, o = "", l = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, f = t || {}, c = f.range != null ? f.range : e["!ref"];
  switch (f.header === 1 ? n = 1 : f.header === "A" ? n = 2 : Array.isArray(f.header) ? n = 3 : f.header == null && (n = 0), typeof c) {
    case "string":
      l = Pe(c);
      break;
    case "number":
      l = Pe(e["!ref"]), l.s.r = c;
      break;
    default:
      l = c;
  }
  n > 0 && (i = 0);
  var u = at(l.s.r), h = [], d = [], v = 0, p = 0, m = Array.isArray(e), g = l.s.r, x = 0, _ = {};
  m && !e[g] && (e[g] = []);
  var C = f.skipHidden && e["!cols"] || [], R = f.skipHidden && e["!rows"] || [];
  for (x = l.s.c; x <= l.e.c; ++x)
    if (!(C[x] || {}).hidden)
      switch (h[x] = ht(x), r = m ? e[g][x] : e[h[x] + u], n) {
        case 1:
          a[x] = x - l.s.c;
          break;
        case 2:
          a[x] = h[x];
          break;
        case 3:
          a[x] = f.header[x - l.s.c];
          break;
        default:
          if (r == null && (r = { w: "__EMPTY", t: "s" }), o = s = _r(r, null, f), p = _[s] || 0, !p)
            _[s] = 1;
          else {
            do
              o = s + "_" + p++;
            while (_[o]);
            _[s] = p, _[o] = 1;
          }
          a[x] = o;
      }
  for (g = l.s.r + i; g <= l.e.r; ++g)
    if (!(R[g] || {}).hidden) {
      var G = xS(e, l, g, h, n, a, m, f);
      (G.isempty === !1 || (n === 1 ? f.blankrows !== !1 : f.blankrows)) && (d[v++] = G.row);
    }
  return d.length = v, d;
}
var ql = /"/g;
function _S(e, t, r, n, i, a, s, o) {
  for (var l = !0, f = [], c = "", u = at(r), h = t.s.c; h <= t.e.c; ++h)
    if (n[h]) {
      var d = o.dense ? (e[r] || [])[h] : e[n[h] + u];
      if (d == null)
        c = "";
      else if (d.v != null) {
        l = !1, c = "" + (o.rawNumbers && d.t == "n" ? d.v : _r(d, null, o));
        for (var v = 0, p = 0; v !== c.length; ++v)
          if ((p = c.charCodeAt(v)) === i || p === a || p === 34 || o.forceQuotes) {
            c = '"' + c.replace(ql, '""') + '"';
            break;
          }
        c == "ID" && (c = '"ID"');
      } else
        d.f != null && !d.F ? (l = !1, c = "=" + d.f, c.indexOf(",") >= 0 && (c = '"' + c.replace(ql, '""') + '"')) : c = "";
      f.push(c);
    }
  return o.blankrows === !1 && l ? null : f.join(s);
}
function y0(e, t) {
  var r = [], n = t ?? {};
  if (e == null || e["!ref"] == null)
    return "";
  var i = Pe(e["!ref"]), a = n.FS !== void 0 ? n.FS : ",", s = a.charCodeAt(0), o = n.RS !== void 0 ? n.RS : `
`, l = o.charCodeAt(0), f = new RegExp((a == "|" ? "\\|" : a) + "+$"), c = "", u = [];
  n.dense = Array.isArray(e);
  for (var h = n.skipHidden && e["!cols"] || [], d = n.skipHidden && e["!rows"] || [], v = i.s.c; v <= i.e.c; ++v)
    (h[v] || {}).hidden || (u[v] = ht(v));
  for (var p = 0, m = i.s.r; m <= i.e.r; ++m)
    (d[m] || {}).hidden || (c = _S(e, i, m, u, s, l, a, n), c != null && (n.strip && (c = c.replace(f, "")), (c || n.blankrows !== !1) && r.push((p++ ? o : "") + c)));
  return delete n.dense, r.join("");
}
function Lu(e, t) {
  t || (t = {}), t.FS = "	", t.RS = `
`;
  var r = y0(e, t);
  return r;
}
function yS(e) {
  var t = "", r, n = "";
  if (e == null || e["!ref"] == null)
    return [];
  var i = Pe(e["!ref"]), a = "", s = [], o, l = [], f = Array.isArray(e);
  for (o = i.s.c; o <= i.e.c; ++o)
    s[o] = ht(o);
  for (var c = i.s.r; c <= i.e.r; ++c)
    for (a = at(c), o = i.s.c; o <= i.e.c; ++o)
      if (t = s[o] + a, r = f ? (e[c] || [])[o] : e[t], n = "", r !== void 0) {
        if (r.F != null) {
          if (t = r.F, !r.f)
            continue;
          n = r.f, t.indexOf(":") == -1 && (t = t + ":" + t);
        }
        if (r.f != null)
          n = r.f;
        else {
          if (r.t == "z")
            continue;
          if (r.t == "n" && r.v != null)
            n = "" + r.v;
          else if (r.t == "b")
            n = r.v ? "TRUE" : "FALSE";
          else if (r.w !== void 0)
            n = "'" + r.w;
          else {
            if (r.v === void 0)
              continue;
            r.t == "s" ? n = "'" + r.v : n = "" + r.v;
          }
        }
        l[l.length] = t + "=" + n;
      }
  return l;
}
function Bu(e, t, r) {
  var n = r || {}, i = +!n.skipHeader, a = e || {}, s = 0, o = 0;
  if (a && n.origin != null)
    if (typeof n.origin == "number")
      s = n.origin;
    else {
      var l = typeof n.origin == "string" ? Ze(n.origin) : n.origin;
      s = l.r, o = l.c;
    }
  var f, c = { s: { c: 0, r: 0 }, e: { c: o, r: s + t.length - 1 + i } };
  if (a["!ref"]) {
    var u = Pe(a["!ref"]);
    c.e.c = Math.max(c.e.c, u.e.c), c.e.r = Math.max(c.e.r, u.e.r), s == -1 && (s = u.e.r + 1, c.e.r = s + t.length - 1 + i);
  } else
    s == -1 && (s = 0, c.e.r = t.length - 1 + i);
  var h = n.header || [], d = 0;
  t.forEach(function(p, m) {
    st(p).forEach(function(g) {
      (d = h.indexOf(g)) == -1 && (h[d = h.length] = g);
      var x = p[g], _ = "z", C = "", R = ke({ c: o + d, r: s + m + i });
      f = Si(a, R), x && typeof x == "object" && !(x instanceof Date) ? a[R] = x : (typeof x == "number" ? _ = "n" : typeof x == "boolean" ? _ = "b" : typeof x == "string" ? _ = "s" : x instanceof Date ? (_ = "d", n.cellDates || (_ = "n", x = At(x)), C = n.dateNF || Ue[14]) : x === null && n.nullError && (_ = "e", x = 0), f ? (f.t = _, f.v = x, delete f.w, delete f.R, C && (f.z = C)) : a[R] = f = { t: _, v: x }, C && (f.z = C));
    });
  }), c.e.c = Math.max(c.e.c, o + h.length - 1);
  var v = at(s);
  if (i)
    for (d = 0; d < h.length; ++d)
      a[ht(d + o) + v] = { t: "s", v: h[d] };
  return a["!ref"] = ze(c), a;
}
function wS(e, t) {
  return Bu(null, e, t);
}
function Si(e, t, r) {
  if (typeof t == "string") {
    if (Array.isArray(e)) {
      var n = Ze(t);
      return e[n.r] || (e[n.r] = []), e[n.r][n.c] || (e[n.r][n.c] = { t: "z" });
    }
    return e[t] || (e[t] = { t: "z" });
  }
  return typeof t != "number" ? Si(e, ke(t)) : Si(e, ke({ r: t, c: r || 0 }));
}
function ES(e, t) {
  if (typeof t == "number") {
    if (t >= 0 && e.SheetNames.length > t)
      return t;
    throw new Error("Cannot find sheet # " + t);
  } else if (typeof t == "string") {
    var r = e.SheetNames.indexOf(t);
    if (r > -1)
      return r;
    throw new Error("Cannot find sheet name |" + t + "|");
  } else
    throw new Error("Cannot find sheet |" + t + "|");
}
function SS() {
  return { SheetNames: [], Sheets: {} };
}
function TS(e, t, r, n) {
  var i = 1;
  if (!r)
    for (; i <= 65535 && e.SheetNames.indexOf(r = "Sheet" + i) != -1; ++i, r = void 0)
      ;
  if (!r || e.SheetNames.length >= 65535)
    throw new Error("Too many worksheets");
  if (n && e.SheetNames.indexOf(r) >= 0) {
    var a = r.match(/(^.*?)(\d+)$/);
    i = a && +a[2] || 0;
    var s = a && a[1] || r;
    for (++i; i <= 65535 && e.SheetNames.indexOf(r = s + i) != -1; ++i)
      ;
  }
  if (Fu(r), e.SheetNames.indexOf(r) >= 0)
    throw new Error("Worksheet with name |" + r + "| already exists!");
  return e.SheetNames.push(r), e.Sheets[r] = t, r;
}
function AS(e, t, r) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var n = ES(e, t);
  switch (e.Workbook.Sheets[n] || (e.Workbook.Sheets[n] = {}), r) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + r);
  }
  e.Workbook.Sheets[n].Hidden = r;
}
function CS(e, t) {
  return e.z = t, e;
}
function $u(e, t, r) {
  return t ? (e.l = { Target: t }, r && (e.l.Tooltip = r)) : delete e.l, e;
}
function FS(e, t, r) {
  return $u(e, "#" + t, r);
}
function OS(e, t, r) {
  e.c || (e.c = []), e.c.push({ t, a: r || "SheetJS" });
}
function bS(e, t, r, n) {
  for (var i = typeof t != "string" ? t : Pe(t), a = typeof t == "string" ? t : ze(t), s = i.s.r; s <= i.e.r; ++s)
    for (var o = i.s.c; o <= i.e.c; ++o) {
      var l = Si(e, s, o);
      l.t = "n", l.F = a, delete l.v, s == i.s.r && o == i.s.c && (l.f = r, n && (l.D = !0));
    }
  return e;
}
var eo = {
  encode_col: ht,
  encode_row: at,
  encode_cell: ke,
  encode_range: ze,
  decode_col: f0,
  decode_row: l0,
  split_cell: Gx,
  decode_cell: Ze,
  decode_range: It,
  format_cell: _r,
  sheet_add_aoa: $c,
  sheet_add_json: Bu,
  sheet_add_dom: Du,
  aoa_to_sheet: Gn,
  json_to_sheet: wS,
  table_to_sheet: Iu,
  table_to_book: eS,
  sheet_to_csv: y0,
  sheet_to_txt: Lu,
  sheet_to_json: Ta,
  sheet_to_html: Mu,
  sheet_to_formulae: yS,
  sheet_to_row_object_array: Ta,
  sheet_get_cell: Si,
  book_new: SS,
  book_append_sheet: TS,
  book_set_sheet_visibility: AS,
  cell_set_number_format: CS,
  cell_set_hyperlink: $u,
  cell_set_internal_link: FS,
  cell_add_comment: OS,
  sheet_set_array_formula: bS,
  consts: {
    SHEET_VISIBLE: 0,
    SHEET_HIDDEN: 1,
    SHEET_VERY_HIDDEN: 2
  }
}, kS = ac(function(e, t) {
  (function(r, n) {
    n();
  })(Sn, function() {
    function r(f, c) {
      return typeof c > "u" ? c = { autoBom: !1 } : typeof c != "object" && (console.warn("Deprecated: Expected third argument to be a object"), c = { autoBom: !c }), c.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type) ? new Blob(["\uFEFF", f], { type: f.type }) : f;
    }
    function n(f, c, u) {
      var h = new XMLHttpRequest();
      h.open("GET", f), h.responseType = "blob", h.onload = function() {
        l(h.response, c, u);
      }, h.onerror = function() {
        console.error("could not download file");
      }, h.send();
    }
    function i(f) {
      var c = new XMLHttpRequest();
      c.open("HEAD", f, !1);
      try {
        c.send();
      } catch {
      }
      return 200 <= c.status && 299 >= c.status;
    }
    function a(f) {
      try {
        f.dispatchEvent(new MouseEvent("click"));
      } catch {
        var c = document.createEvent("MouseEvents");
        c.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), f.dispatchEvent(c);
      }
    }
    var s = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Sn == "object" && Sn.global === Sn ? Sn : void 0, o = s.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), l = s.saveAs || (typeof window != "object" || window !== s ? function() {
    } : "download" in HTMLAnchorElement.prototype && !o ? function(f, c, u) {
      var h = s.URL || s.webkitURL, d = document.createElement("a");
      c = c || f.name || "download", d.download = c, d.rel = "noopener", typeof f == "string" ? (d.href = f, d.origin === location.origin ? a(d) : i(d.href) ? n(f, c, u) : a(d, d.target = "_blank")) : (d.href = h.createObjectURL(f), setTimeout(function() {
        h.revokeObjectURL(d.href);
      }, 4e4), setTimeout(function() {
        a(d);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(f, c, u) {
      if (c = c || f.name || "download", typeof f != "string")
        navigator.msSaveOrOpenBlob(r(f, u), c);
      else if (i(f))
        n(f, c, u);
      else {
        var h = document.createElement("a");
        h.href = f, h.target = "_blank", setTimeout(function() {
          a(h);
        });
      }
    } : function(f, c, u, h) {
      if (h = h || open("", "_blank"), h && (h.document.title = h.document.body.innerText = "downloading..."), typeof f == "string")
        return n(f, c, u);
      var d = f.type === "application/octet-stream", v = /constructor/i.test(s.HTMLElement) || s.safari, p = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((p || d && v || o) && typeof FileReader < "u") {
        var m = new FileReader();
        m.onloadend = function() {
          var _ = m.result;
          _ = p ? _ : _.replace(/^data:[^;]*;/, "data:attachment/file;"), h ? h.location.href = _ : location = _, h = null;
        }, m.readAsDataURL(f);
      } else {
        var g = s.URL || s.webkitURL, x = g.createObjectURL(f);
        h ? h.location = x : location.href = x, h = null, setTimeout(function() {
          g.revokeObjectURL(x);
        }, 4e4);
      }
    });
    s.saveAs = l.saveAs = l, e.exports = l;
  });
}), w0 = f1({
  props: {
    // If true, don't download but emit a Blob
    emitBlob: {
      type: Boolean,
      default: !1
    },
    debounce: {
      type: Number,
      default: 500
    },
    // mime type [xls, csv]
    type: {
      type: String,
      default: "xls"
    },
    // Json to download
    data: {
      type: Array,
      required: !1,
      default: null
    },
    // fields inside the Json Object that you want to export
    // if no given, all the properties in the Json are exported
    fields: {
      type: Object,
      default: () => null
    },
    // this prop is used to fix the problem with other components that use the
    // variable fields, like vee-validate. exportFields works exactly like fields
    exportFields: {
      type: Object,
      default: () => null
    },
    // Use as fallback when the row has no field values
    defaultValue: {
      type: String,
      required: !1,
      default: ""
    },
    // Title(s) for the data, could be a string or an array of strings (multiple titles)
    header: {
      default: null
    },
    // Title(s) for single column data, must be an array (ex: ['titleCol0',,TitleCol2])
    perColumnsHeaders: {
      default: null
    },
    // Footer(s) for the data, could be a string or an array of strings (multiple footers)
    footer: {
      default: null
    },
    // filename to export
    name: {
      type: String,
      default: "data.xls"
    },
    fetch: {
      type: Function
    },
    meta: {
      type: Array,
      default: () => []
    },
    worksheet: {
      type: String,
      default: "Sheet1"
    },
    //event before generate was called
    beforeGenerate: {
      type: Function
    },
    //event before download pops up
    beforeFinish: {
      type: Function
    },
    // Determine if CSV Data should be escaped
    escapeCsv: {
      type: Boolean,
      default: !0
    },
    // long number stringify
    stringifyLongNum: {
      type: Boolean,
      default: !1
    }
  },
  setup() {
    return {
      isDisabled: c1(!1)
    };
  },
  computed: {
    // unique identifier
    idName() {
      var e = (/* @__PURE__ */ new Date()).getTime();
      return "export_" + e;
    },
    downloadFields() {
      if (this.fields)
        return this.fields;
      if (this.exportFields)
        return this.exportFields;
    }
  },
  methods: {
    async generate() {
      if (this.isDisabled)
        return;
      this.isDisabled = !0;
      const e = this.$props.debounce;
      let t = null;
      return new Promise((r, n) => {
        const i = async () => {
          typeof this.beforeGenerate == "function" && await this.beforeGenerate();
          let s = this.data;
          if ((typeof this.fetch == "function" || !s) && (s = await this.fetch()), !s || !s.length) {
            typeof this.beforeFinish == "function" && await this.beforeFinish();
            return;
          }
          let o = await this.getProcessedJson(s, this.downloadFields);
          if (this.type === "html")
            return this.export(
              this.jsonToXLS(o),
              this.name.replace(".xls", ".html"),
              "text/html"
            );
          if (this.type === "csv")
            return this.export(
              this.jsonToCSV(o),
              this.name.replace(".xls", ".csv"),
              "application/csv"
            );
          if (this.type === "xlsx") {
            const l = this.jsonToXLSX(o, this.worksheet);
            return this.generateXLSX(l, this.name);
          }
          return this.export(
            this.jsonToXLS(o),
            this.name,
            "application/vnd.ms-excel"
          );
        };
        (() => {
          let s = this;
          t && clearTimeout(t), t = setTimeout(() => {
            i().then(r).catch(n), s.isDisabled = !1;
          }, e);
        })();
      });
    },
    /*
    Use downloadjs to generate the download link
    */
    export: async function(e, t, r) {
      let n = this.base64ToBlob(e, r);
      typeof this.beforeFinish == "function" && await this.beforeFinish(), this.emitBlob ? this.$emit("blob", n) : Hv(n, t, r);
    },
    generateXLSX(e, t) {
      function r(n) {
        let i = new ArrayBuffer(n.length), a = new Uint8Array(i);
        for (let s = 0; s !== n.length; ++s)
          a[s] = n.charCodeAt(s) & 255;
        return i;
      }
      typeof e == "string" && (e = r(e)), kS(new Blob([e], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }), t);
    },
    /*
    jsonToXLS
    ---------------
    Transform json data into an xml document with MS Excel format, sadly
    it shows a prompt when it opens, that is a default behavior for
    Microsoft office and cannot be avoided. It's recommended to use CSV format instead.
    */
    jsonToXLS(e) {
      let t = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><style>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>', r = "<thead>";
      const n = Object.keys(e[0]).length;
      let i = this;
      const a = this.header || this.$attrs.title;
      a && (r += this.parseExtraData(
        a,
        '<tr><th colspan="' + n + '">${data}</th></tr>'
      ));
      const s = this.perColumnsHeaders;
      if (Array.isArray(s)) {
        r += "<tr>";
        for (let o in s)
          r += "<th>" + s[o] + "</th>";
        r += "</tr>";
      }
      r += "<tr>";
      for (let o in e[0])
        r += "<th>" + o + "</th>";
      return r += "</tr>", r += "</thead>", r += "<tbody>", e.map(function(o, l) {
        r += "<tr>";
        for (let f in o)
          r += "<td>" + i.preprocessLongNum(
            i.valueReformattedForMultilines(o[f])
          ) + "</td>";
        r += "</tr>";
      }), r += "</tbody>", this.footer != null && (r += "<tfoot>", r += this.parseExtraData(
        this.footer,
        '<tr><td colspan="' + n + '">${data}</td></tr>'
      ), r += "</tfoot>"), t.replace("${table}", r).replace("${worksheet}", this.worksheet);
    },
    /*
    jsonToXLS
     */
    jsonToXLSX(e, t) {
      const r = eo.json_to_sheet(e), n = eo.book_new();
      return eo.book_append_sheet(n, r, t || "Sheet1"), Nu(n, {
        type: "buffer",
        mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      });
    },
    /*
    jsonToCSV
    ---------------
    Transform json data into an CSV file.
    */
    jsonToCSV(e) {
      let t = this;
      var r = [];
      const n = this.header || this.$attrs.title;
      n && r.push(this.parseExtraData(n, "${data}\r\n"));
      const i = this.perColumnsHeaders;
      if (Array.isArray(i)) {
        for (let a in i)
          r.push(i[a]), r.push(",");
        r.pop(), r.push(`\r
`);
      }
      for (let a in e[0])
        r.push(a), r.push(",");
      return r.pop(), r.push(`\r
`), e.map(function(a) {
        for (let s in a) {
          let o = a[s] + "";
          t.escapeCsv && (o = '="' + o + '"', o.match(/[,"\n]/) && (o = '"' + o.replace(/\"/g, '""') + '"')), r.push(o), r.push(",");
        }
        r.pop(), r.push(`\r
`);
      }), this.footer != null && r.push(this.parseExtraData(this.footer, "${data}\r\n")), r.join("");
    },
    /*
    getProcessedJson
    ---------------
    Get only the data to export, if no fields are set return all the data
    */
    async getProcessedJson(e, t) {
      let r = this.getKeys(e, t), n = [], i = this;
      return await e.reduce(async function(a, s) {
        await a;
        let o = {};
        for (let l in r) {
          let f = r[l];
          o[l] = await i.getValue(f, s);
        }
        return n.push(o), !0;
      }, []), n;
    },
    getKeys(e, t) {
      if (t)
        return t;
      let r = {};
      for (let n in e[0])
        r[n] = n;
      return r;
    },
    /*
    parseExtraData
    ---------------
    Parse title and footer attribute to the csv format
    */
    parseExtraData(e, t) {
      let r = "";
      if (Array.isArray(e))
        for (var n = 0; n < e.length; n++)
          e[n] && (r += t.replace("${data}", e[n]));
      else
        r += t.replace("${data}", e);
      return r;
    },
    async getValue(e, t) {
      const r = typeof e != "object" ? e : e.field;
      let n = typeof r != "string" ? [] : r.split("."), i = this.defaultValue;
      return r ? n.length > 1 ? i = await this.getValueFromNestedItem(t, n) : i = this.parseValue(t[r]) : i = t, e.hasOwnProperty("callback") && (i = await this.getValueFromCallback(i, e.callback)), i;
    },
    /*
    convert values with newline \n characters into <br/>
    */
    valueReformattedForMultilines(e) {
      return typeof e == "string" ? e.replace(/\n/gi, "<br/>") : e;
    },
    preprocessLongNum(e) {
      if (this.stringifyLongNum) {
        if (String(e).startsWith("0x"))
          return e;
        if (!isNaN(e) && e != "" && (e > 99999999999 || e < 1e-13))
          return '="' + e + '"';
      }
      return e;
    },
    getValueFromNestedItem(e, t) {
      let r = e;
      for (let n of t)
        r && (r = r[n]);
      return this.parseValue(r);
    },
    async getValueFromCallback(e, t) {
      if (typeof t != "function")
        return this.defaultValue;
      const r = await t(e);
      return this.parseValue(r);
    },
    parseValue(e) {
      return e || e === 0 || typeof e == "boolean" ? e : this.defaultValue;
    },
    base64ToBlob(e, t) {
      let r = window.btoa(window.unescape(encodeURIComponent(e))), n = atob(r), i = n.length, a = new Uint8ClampedArray(i);
      for (; i--; )
        a[i] = n.charCodeAt(i);
      return new Blob([a], { type: t });
    }
  }
  // end methods
});
const MS = ["id"];
function DS(e, t, r, n, i, a) {
  return q(), Z("div", {
    id: e.idName,
    onClick: t[0] || (t[0] = (...s) => e.generate && e.generate(...s)),
    style: Bt(e.isDisabled ? {
      opacity: "0.5",
      "pointer-events": "none"
    } : {})
  }, [
    Ha(e.$slots, "default", {}, () => [
      We(
        " Download " + ve(e.name),
        1
        /* TEXT */
      )
    ])
  ], 12, MS);
}
w0.render = DS;
w0.__file = "JsonExcel.vue";
const IS = {
  name: "TipiCsvDownload",
  components: {
    JsonExcel: w0
  },
  props: {
    initiatives: {
      type: Array,
      default: function() {
        return [];
      }
    },
    csvItems: Array,
    canDownloadCSV: Boolean,
    csvFields: {
      type: Array,
      default: function() {
        return [
          "title",
          "reference",
          "initiative_type_alt",
          "authors",
          "deputies",
          "tagged.0.topics",
          "tagged.0.tags",
          "place",
          "status",
          "created",
          "updated",
          "url"
        ];
      }
    },
    label: {
      type: String,
      default: "Descarga los datos"
    },
    buttonClass: {
      type: String,
      default: "c-button--compact"
    }
  },
  methods: {
    loadCSVItems: function(e) {
      this.$emit("loadCSVItems", e);
    },
    getNameFromCSV: function() {
      return "export-" + (/* @__PURE__ */ new Date()).toISOString() + ".csv";
    }
  }
}, Uu = (e) => (u1("data-v-7f580bf5"), e = e(), h1(), e), PS = ["title"], RS = /* @__PURE__ */ Uu(() => /* @__PURE__ */ K("span", { class: "c-icon c-icon--type-download" }, [
  /* @__PURE__ */ K("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "16",
    fill: "none",
    viewBox: "0 0 12 16"
  }, [
    /* @__PURE__ */ K("path", {
      fill: "#2D4252",
      d: "M12 5.647H8.571V0H3.43v5.647H0l6 6.588 6-6.588zm-12 8.47V16h12v-1.882H0z"
    })
  ])
], -1)), NS = /* @__PURE__ */ Uu(() => /* @__PURE__ */ K("span", { class: "c-icon c-icon--type-download" }, [
  /* @__PURE__ */ K("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "16",
    fill: "none",
    viewBox: "0 0 12 16"
  }, [
    /* @__PURE__ */ K("path", {
      fill: "#2D4252",
      d: "M12 5.647H8.571V0H3.43v5.647H0l6 6.588 6-6.588zm-12 8.47V16h12v-1.882H0z"
    })
  ])
], -1));
function LS(e, t, r, n, i, a) {
  const s = je("json-excel");
  return Eo((q(), Z("span", null, [
    r.csvItems.length ? (q(), Je(s, {
      key: 1,
      data: r.csvItems,
      fields: r.csvFields,
      name: a.getNameFromCSV(),
      id: "downloadCSV",
      type: "csv",
      class: _t(["c-button c-button--icon-right", r.buttonClass])
    }, {
      default: yt(() => [
        We(ve(r.label) + " ", 1),
        NS
      ]),
      _: 1
    }, 8, ["data", "fields", "name", "class"])) : (q(), Z("a", {
      key: 0,
      class: _t([{ disabled: !r.canDownloadCSV }, "c-button c-button--compact c-button--secondary c-button--icon-right"]),
      title: r.canDownloadCSV ? "Descarga CSV con todos los resultados" : "Demasiados resultados para poder descargar. Afina la búsqueda",
      onClick: t[0] || (t[0] = Yf((...o) => a.loadCSVItems && a.loadCSVItems(...o), ["prevent"])),
      href: "#"
    }, [
      We(ve(r.label) + " ", 1),
      RS
    ], 10, PS))
  ], 512)), [
    [So, r.initiatives.length]
  ]);
}
const BS = /* @__PURE__ */ Le(IS, [["render", LS], ["__scopeId", "data-v-7f580bf5"]]), $S = {
  name: "CongressLink",
  components: {
    TipiIcon: Wr
  },
  props: {
    url: String
  }
}, US = ["href"];
function HS(e, t, r, n, i, a) {
  const s = je("tipi-icon");
  return q(), Z("a", {
    href: r.url,
    class: "c-congress-link u-color-primary",
    target: "_blank",
    title: "Ver en el Congreso.es"
  }, [
    Xe(s, {
      class: "u-filling-primary",
      icon: "open-blank"
    }),
    We("Ver en el Congreso.es")
  ], 8, US);
}
const WS = /* @__PURE__ */ Le($S, [["render", HS]]), zS = {
  name: "TipiHeader",
  props: ["title", "subtitle"]
}, VS = { class: "c-page-header__title" }, GS = {
  key: 0,
  class: "c-page-header__subtitle"
};
function XS(e, t, r, n, i, a) {
  return q(), Z("header", {
    class: _t(["c-page-header", { "c-page-header--nosub": !r.subtitle }])
  }, [
    K("h1", VS, ve(r.title), 1),
    r.subtitle ? (q(), Z("p", GS, ve(r.subtitle), 1)) : Ee("", !0)
  ], 2);
}
const jS = /* @__PURE__ */ Le(zS, [["render", XS]]), YS = {
  name: "TipiNavbar",
  components: {
    Icon: Wr
  },
  props: {
    links: Array,
    disclaimerLink: {
      type: Object,
      default: function() {
        return {};
      }
    },
    preImage: String,
    logo: String
  },
  data: function() {
    return {
      closedMessage: !1,
      menuVisible: !1
    };
  },
  computed: {
    closedDisclaimer: function() {
      return !!(window.sessionStorage.getItem("closedDisclaimer") || this.closedMessage);
    }
  },
  methods: {
    closeDisclaimer: function() {
      window.sessionStorage.setItem("closedDisclaimer", !0), this.closedMessage = !0;
    },
    toggleMenu: function() {
      this.menuVisible = !this.menuVisible;
    },
    closeMenuMobile: function() {
      this.menuVisible && (this.menuVisible = !1);
    }
  }
}, qS = { class: "c-navbar" }, KS = {
  key: 0,
  class: "c-disclaimer"
}, JS = ["href", "innerHTML"], QS = { class: "c-navbar__wrapper o-container" }, ZS = { class: "c-navbar__brand" }, e3 = {
  class: "c-navbar__brand-link",
  href: "/"
}, t3 = ["src"], r3 = /* @__PURE__ */ K("span", { class: "bar" }, null, -1), n3 = /* @__PURE__ */ K("span", { class: "bar" }, null, -1), i3 = /* @__PURE__ */ K("span", { class: "bar" }, null, -1), a3 = /* @__PURE__ */ K("span", { class: "u-hide" }, "Menú", -1), s3 = [
  r3,
  n3,
  i3,
  a3
], o3 = { class: "c-menu" }, l3 = ["href"], f3 = {
  key: 2,
  class: "c-menu__submenu"
}, c3 = ["href"];
function u3(e, t, r, n, i, a) {
  const s = je("router-link"), o = je("icon");
  return q(), Z("header", qS, [
    !a.closedDisclaimer && r.disclaimerLink.hasOwnProperty("name") ? (q(), Z("div", KS, [
      r.disclaimerLink.external ? (q(), Z("a", {
        key: 0,
        href: r.disclaimerLink.route,
        target: "_blank",
        innerHTML: r.disclaimerLink.name
      }, null, 8, JS)) : (q(), Je(s, {
        key: 1,
        to: { name: r.disclaimerLink.route },
        innerHTML: r.disclaimerLink.name
      }, null, 8, ["to", "innerHTML"])),
      K("a", {
        class: "c-disclaimer__close",
        href: "#",
        onClick: t[0] || (t[0] = (...l) => a.closeDisclaimer && a.closeDisclaimer(...l))
      }, [
        Xe(o, {
          icon: "close",
          color: "#fff"
        })
      ])
    ])) : Ee("", !0),
    r.preImage ? (q(), Z("div", {
      key: 1,
      class: "c-decorator",
      style: Bt(`background-image: url(${r.preImage})`)
    }, null, 4)) : Ee("", !0),
    K("div", QS, [
      K("div", ZS, [
        K("a", e3, [
          K("img", {
            class: "c-navbar__brand-logo",
            src: r.logo
          }, null, 8, t3)
        ])
      ]),
      K("button", {
        type: "button",
        class: _t(["c-navbar__menu-toggle", { "is-active": e.menuVisible }]),
        onClick: t[1] || (t[1] = (...l) => a.toggleMenu && a.toggleMenu(...l))
      }, s3, 2),
      K("nav", {
        class: _t(["c-navbar__menu", { "is-active": e.menuVisible }])
      }, [
        K("ul", o3, [
          (q(!0), Z($t, null, Ut(r.links, (l) => Eo((q(), Z("li", {
            onClick: t[3] || (t[3] = (...f) => a.closeMenuMobile && a.closeMenuMobile(...f)),
            class: _t(["c-menu__item", { "has-submenu": l.children }]),
            key: l.route
          }, [
            l.external ? (q(), Z("a", {
              key: 0,
              href: l.route,
              class: "c-menu__link",
              target: "_blank"
            }, [
              We(ve(l.name), 1),
              l.icon ? (q(), Je(o, {
                key: 0,
                icon: l.icon,
                class: "c-menu__icon"
              }, null, 8, ["icon"])) : Ee("", !0)
            ], 8, l3)) : (q(), Je(s, {
              key: 1,
              to: { name: l.route },
              class: "c-menu__link"
            }, {
              default: yt(() => [
                We(ve(l.name), 1),
                l.icon ? (q(), Je(o, {
                  key: 0,
                  icon: l.icon,
                  class: "c-menu__icon"
                }, null, 8, ["icon"])) : Ee("", !0)
              ]),
              _: 2
            }, 1032, ["to"])),
            l.children ? (q(), Z("ul", f3, [
              (q(!0), Z($t, null, Ut(l.children, (f) => Eo((q(), Z("li", {
                onClick: t[2] || (t[2] = (...c) => a.closeMenuMobile && a.closeMenuMobile(...c)),
                class: "c-menu__item",
                key: f.route
              }, [
                f.external ? (q(), Z("a", {
                  key: 0,
                  href: f.route,
                  class: "c-menu__link",
                  target: "_blank"
                }, [
                  We(ve(f.name), 1),
                  f.icon ? (q(), Je(o, {
                    key: 0,
                    icon: f.icon,
                    class: "c-menu__icon"
                  }, null, 8, ["icon"])) : Ee("", !0)
                ], 8, c3)) : (q(), Je(s, {
                  key: 1,
                  to: { name: f.route },
                  class: "c-menu__link"
                }, {
                  default: yt(() => [
                    We(ve(f.name), 1),
                    f.icon ? (q(), Je(o, {
                      key: 0,
                      icon: f.icon,
                      class: "c-menu__icon"
                    }, null, 8, ["icon"])) : Ee("", !0)
                  ]),
                  _: 2
                }, 1032, ["to"]))
              ])), [
                [So, f.condition]
              ])), 128))
            ])) : Ee("", !0)
          ], 2)), [
            [So, l.condition]
          ])), 128))
        ])
      ], 2)
    ])
  ]);
}
const h3 = /* @__PURE__ */ Le(YS, [["render", u3]]), p3 = {
  name: "PartyLogo",
  data: function() {
    return {
      logos: {
        Vox: "vox.png",
        "¡Teruel Existe!": "teruelexiste.svg",
        UPN: "upn.jpg",
        UP: "unidaspodemos.png",
        "PsdeG-PSOE": "psoe.png",
        PSOE: "psoe.png",
        "PSE-EE-PSOE": "pse-ee.png",
        "PSC-PSOE": "psc.png",
        PRC: "prc.png",
        "PP - FORO": "pp.png",
        PP: "pp.png",
        PDeCAT: "pdecat.png",
        "NC-CCa-PNC": "nueva_canarias.png",
        "MÉS COMPROMÍS": "compromis.jpg",
        "MÁS PAÍS-EQUO": "mas-pais.jpg",
        "JxCat-JUNTS": "jxcat.png",
        IU: "iu.png",
        FAC: "fac.png",
        "ERC-S": "erc.png",
        "EH Bildu": "bildu.png",
        "ECP-GUAYEM EL CANVI": "encomupodem.jpg",
        "EC-UP": "podemos.jpg",
        "EAJ-PNV": "eajpnv.png",
        Cs: "ciudadanos.png",
        "CUP-PR": "cup.png",
        "CCa-NC": "ca.jpeg",
        BNG: "bng.png"
      }
    };
  },
  props: {
    party: String
  },
  methods: {
    getLogoSrc: function() {
      let e = "";
      return this.party in this.logos && (e = import(`../../assets/party_logos/${this.logos[this.party]}`)), e;
    }
  }
}, m3 = { class: "c-party_logo__container" }, g3 = ["src", "alt"];
function v3(e, t, r, n, i, a) {
  return q(), Z("div", m3, [
    K("img", {
      class: "c-party_logo__image",
      src: a.getLogoSrc(),
      alt: "Logo de " + r.party
    }, null, 8, g3)
  ]);
}
const x3 = /* @__PURE__ */ Le(p3, [["render", v3]]), _3 = (e, t) => {
  const r = e[t];
  return r ? typeof r == "function" ? r() : Promise.resolve(r) : new Promise((n, i) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
const y3 = {
  name: "PartyLogoIcon",
  props: {
    party: String
  },
  data: function() {
    return {
      parties: {
        Cs: {
          name: "Ciudadanos",
          logo: "cs",
          color: "#ff4f00"
        },
        VOX: {
          name: "VOX",
          logo: "vox",
          color: "#5ac035"
        },
        ERC: {
          name: "Esquerra Republicana",
          logo: "erc",
          color: "#ffbf41"
        },
        "ERC-S": {
          name: "Esquerra Republicana",
          logo: "erc",
          color: "#ffbf41"
        },
        PP: {
          name: "Partido Popular",
          logo: "pp",
          color: "#0056a3"
        },
        "PP - FORO": {
          name: "Partido Popular",
          logo: "pp",
          color: "#0056a3"
        },
        "MÉS COMPROMÍS": {
          name: "Compromís",
          logo: "compromis",
          color: "linear-gradient(204deg, #f29127 100%, #ec8427 80%, #de6527 42%, #d13b27 3%)"
        },
        "MÁS PAÍS-EQUO": {
          name: "Más País",
          logo: "maspais",
          color: "#0a7565"
        },
        PDeCAT: {
          name: "Partit Demòcrata",
          logo: "pdecat",
          color: "#114488"
        },
        "JxCAT-JUNTS": {
          name: "Junts per Catalunya",
          logo: "jxcat",
          color: "#40e0d0"
        },
        "JxCat-JUNTS (Junts)": {
          name: "Junts per Catalunya",
          logo: "jxcat",
          color: "#40e0d0"
        },
        BNG: {
          name: "Bloque Nacionalista Galego",
          logo: "bng",
          color: "#76b3dd"
        },
        SUMAR: {
          name: "SUMAR",
          logo: "sumar",
          color: "#e51c55"
        },
        UP: {
          name: "Unidas Podemos",
          logo: "unidaspodemos",
          color: "#ffffff"
        },
        "EC-UP": {
          name: "Podemos",
          logo: "podemos",
          color: "#6b1f5f"
        },
        IU: {
          name: "Izquierda Unida",
          logo: "iu",
          color: "#b1132f"
        },
        "ECP-GUAYEM EL CANVI": {
          name: "En Comú Podem",
          logo: "encomu",
          color: "linear-gradient(135deg, #dc2a15 15%, #6d2d5c 85%)"
        },
        CCa: {
          name: "Coalición Canaria",
          logo: "coalicioncanaria",
          color: "#02abd6"
        },
        "CCa-NC": {
          name: "Coalición Canaria",
          logo: "coalicioncanaria",
          color: "#02abd6"
        },
        "NC-CCa-PNC": {
          name: "Nueva Canaria",
          logo: "nuevacanaria",
          color: "#81c045"
        },
        "CUP-PR": {
          name: "Candidatura d'Unitat Popular",
          logo: "cup",
          color: "#fff200"
        },
        UPN: {
          name: "Unión del Pueblo Navarro",
          logo: "upn",
          color: "#0856b3"
        },
        "¡Teruel Existe!": {
          name: "Teruel Existe",
          logo: "teruelexiste",
          color: "#227e57"
        },
        FAC: {
          name: "Foro Asturias",
          logo: "foroasturias",
          color: "#19375b"
        },
        PRC: {
          name: "Partido Regionalista de Cantabria",
          logo: "prc",
          color: "#bfcd16"
        },
        PSOE: {
          name: "Partido Socialista Obrero Español",
          logo: "psoe",
          color: "#e30613"
        },
        "PSC-PSOE": {
          name: "Partido Socialista Obrero Español",
          logo: "psoe",
          color: "#e30613"
        },
        "PSE-EE-PSOE": {
          name: "Partido Socialista Obrero Español",
          logo: "psoe",
          color: "#e30613"
        },
        "PsdeG-PSOE": {
          name: "Partido Socialista Obrero Español",
          logo: "psoe",
          color: "#e30613"
        },
        "EAJ-PNV": {
          name: "Partido Nacionalista Vasco",
          logo: "pnv",
          color: "linear-gradient(135deg, #dc2a15 15%, #6d2d5c 85%)"
        },
        "EH Bildu": {
          name: "Euskal Herria Bildu",
          logo: "ehbildu",
          color: "#b4cc16"
        }
      }
    };
  },
  computed: {
    svg() {
      let e = "";
      try {
        e = d1(
          () => _3(/* @__PURE__ */ Object.assign({ "../../assets/party_logos/icon/bng.svg": () => import("./bng-890acecf.mjs"), "../../assets/party_logos/icon/coalicioncanaria.svg": () => import("./coalicioncanaria-6f4c1db4.mjs"), "../../assets/party_logos/icon/compromis.svg": () => import("./compromis-5ea8e904.mjs"), "../../assets/party_logos/icon/cs.svg": () => import("./cs-de2f22f8.mjs"), "../../assets/party_logos/icon/cup.svg": () => import("./cup-83f9d201.mjs"), "../../assets/party_logos/icon/ehbildu.svg": () => import("./ehbildu-23275d48.mjs"), "../../assets/party_logos/icon/encomu.svg": () => import("./encomu-90f0f0ee.mjs"), "../../assets/party_logos/icon/erc.svg": () => import("./erc-83cebd9f.mjs"), "../../assets/party_logos/icon/foroasturias.svg": () => import("./foroasturias-c86ed9f1.mjs"), "../../assets/party_logos/icon/iu.svg": () => import("./iu-0d57eb1a.mjs"), "../../assets/party_logos/icon/jxcat.svg": () => import("./jxcat-69202004.mjs"), "../../assets/party_logos/icon/maspais.svg": () => import("./maspais-a61a53ef.mjs"), "../../assets/party_logos/icon/nuevacanaria.svg": () => import("./nuevacanaria-559edad7.mjs"), "../../assets/party_logos/icon/pdecat.svg": () => import("./pdecat-0ec3db5a.mjs"), "../../assets/party_logos/icon/pnv.svg": () => import("./pnv-7f6f4b34.mjs"), "../../assets/party_logos/icon/podemos.svg": () => import("./podemos-de793077.mjs"), "../../assets/party_logos/icon/pp.svg": () => import("./pp-13bed712.mjs"), "../../assets/party_logos/icon/prc.svg": () => import("./prc-8a3d42c1.mjs"), "../../assets/party_logos/icon/psoe.svg": () => import("./psoe-97af3ccf.mjs"), "../../assets/party_logos/icon/sumar.svg": () => import("./sumar-7dfecef0.mjs"), "../../assets/party_logos/icon/teruelexiste.svg": () => import("./teruelexiste-7d4a17ab.mjs"), "../../assets/party_logos/icon/unidaspodemos.svg": () => import("./unidaspodemos-43ae78cc.mjs"), "../../assets/party_logos/icon/upn.svg": () => import("./upn-e7eb332f.mjs"), "../../assets/party_logos/icon/vox.svg": () => import("./vox-64380b40.mjs") }), `../../assets/party_logos/icon/${this.parties[this.party].logo}.svg`)
        );
      } catch {
        e = this.icon;
      }
      return e;
    },
    getBackground: function() {
      var t;
      const e = (t = this.parties[this.party]) != null && t.color ? this.parties[this.party].color : "";
      return e.length == 7 ? "background-color:" + e : "background-image:" + e;
    },
    getName: function() {
      var e;
      return (e = this.parties[this.party]) != null && e.name ? this.parties[this.party].name : "";
    }
  }
}, w3 = ["alt"];
function E3(e, t, r, n, i, a) {
  return q(), Z("div", {
    class: "c-party_logo_icon",
    style: Bt(a.getBackground)
  }, [
    K("figure", {
      class: "c-party_logo_icon__image",
      alt: "Logo de " + a.getName
    }, [
      (q(), Je(jf(a.svg)))
    ], 8, w3)
  ], 4);
}
const S3 = /* @__PURE__ */ Le(y3, [["render", E3], ["__scopeId", "data-v-5e00b143"]]), T3 = {
  name: "TipiDeputy",
  components: {
    TipiIcon: Wr,
    PartyLogo: x3,
    PartyLogoIcon: S3
  },
  data: function() {
    return {
      isCollapsed: !0
    };
  },
  props: {
    deputy: Object,
    parliamentaryGroup: Object
  },
  methods: {
    getCollapsedClass: function() {
      return this.isCollapsed ? "c-deputy__hidden" : "c-deputy__info";
    },
    getCollapseIcon: function() {
      return this.isCollapsed ? "plus" : "less";
    },
    getCollapseMessage: function() {
      return this.isCollapsed ? "Mostrar más" : "Mostrar menos";
    },
    collapse: function() {
      this.isCollapsed = !this.isCollapsed;
    },
    addBirthdayClass: function() {
      const e = new Date(this.deputy.birthdate), t = /* @__PURE__ */ new Date();
      if (e.getDate() == t.getDate() && e.getMonth() == t.getMonth())
        return "c-deputy__birthday";
    },
    getAge: function() {
      const e = new Date(this.deputy.birthdate);
      return (/* @__PURE__ */ new Date()).getFullYear() - e.getFullYear();
    },
    getConstituency: function() {
      return this.deputy.constituency;
    }
  }
}, A3 = { class: "o-container" }, C3 = { class: "o-grid o-grid--reverse" }, F3 = { class: "o-grid__col u-4@sm" }, O3 = { class: "c-deputy__image_container" }, b3 = ["src", "alt"], k3 = { class: "o-grid__col u-12 u-8@sm" }, M3 = { class: "c-deputy__name" }, D3 = {
  key: 0,
  class: "c-deputy__group"
}, I3 = { class: "c-deputy__extra" }, P3 = { class: "c-deputy__personal" }, R3 = { class: "c-deputy__personal" }, N3 = { class: "c-deputy__links" }, L3 = { class: "o-grid__col u-12 u-12@sm c-deputy__more" }, B3 = /* @__PURE__ */ K("h3", null, "Declaraciones", -1), $3 = ["href"], U3 = /* @__PURE__ */ K("h3", null, "Cargos", -1), H3 = /* @__PURE__ */ K("h3", null, "Ficha personal", -1);
function W3(e, t, r, n, i, a) {
  const s = je("party-logo-icon"), o = je("router-link"), l = je("tipi-icon");
  return r.deputy ? (q(), Z("div", {
    key: 0,
    class: _t(["c-deputy", a.addBirthdayClass()])
  }, [
    K("div", A3, [
      K("div", C3, [
        K("div", F3, [
          K("div", O3, [
            K("img", {
              class: "c-deputy__image",
              src: r.deputy.image,
              alt: "Foto de " + r.deputy.name
            }, null, 8, b3),
            Xe(s, {
              party: r.deputy.party_name
            }, null, 8, ["party"])
          ])
        ]),
        K("div", k3, [
          K("h1", M3, ve(r.deputy.name), 1),
          r.parliamentaryGroup ? (q(), Z("h3", D3, [
            Xe(o, {
              to: { name: "parliamentarygroup", params: { id: r.parliamentaryGroup.id } }
            }, {
              default: yt(() => [
                We(ve(r.parliamentaryGroup.name), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ])) : Ee("", !0),
          K("div", I3, [
            K("span", P3, [
              a.addBirthdayClass() ? (q(), Je(l, {
                key: 0,
                icon: "birthday"
              })) : Ee("", !0),
              We(ve(a.getAge()) + " años", 1)
            ]),
            K("span", R3, [
              Xe(l, { icon: "location" }),
              We(ve(a.getConstituency()), 1)
            ])
          ]),
          K("div", N3, [
            Ha(e.$slots, "default")
          ])
        ]),
        K("div", L3, [
          K("a", {
            href: "#",
            onClick: t[0] || (t[0] = (...f) => a.collapse && a.collapse(...f))
          }, [
            We(ve(a.getCollapseMessage()), 1),
            Xe(l, {
              icon: a.getCollapseIcon()
            }, null, 8, ["icon"])
          ])
        ]),
        K("div", {
          class: _t([a.getCollapsedClass(), "o-grid__col u-12 u-4@sm"])
        }, [
          B3,
          (q(!0), Z($t, null, Ut(r.deputy.extra.declarations, (f, c) => (q(), Z("p", { key: c }, [
            Xe(l, { icon: "document" }),
            K("a", { href: f }, ve(c), 9, $3)
          ]))), 128))
        ], 2),
        K("div", {
          class: _t([a.getCollapsedClass(), "o-grid__col u-12 u-4@sm"])
        }, [
          U3,
          (q(!0), Z($t, null, Ut(r.deputy.public_position, (f) => (q(), Z("p", { key: f }, ve(f), 1))), 128))
        ], 2),
        K("div", {
          class: _t([a.getCollapsedClass(), "o-grid__col u-12 u-4@sm"])
        }, [
          H3,
          (q(!0), Z($t, null, Ut(r.deputy.bio, (f) => (q(), Z("p", { key: f }, ve(f), 1))), 128))
        ], 2)
      ])
    ])
  ], 2)) : Ee("", !0);
}
const z3 = /* @__PURE__ */ Le(T3, [["render", W3]]), V3 = {
  name: "TipiText",
  props: {
    meta: String,
    value: [String, Array],
    type: String,
    source: Array,
    hideGroup: Boolean
  },
  methods: {
    getPeopleFromName: function(e) {
      if (e.hasOwnProperty("name"))
        return e;
      let r = /\[.*\]/.exec(e);
      if (!r)
        return this.source.find((i) => i.name == e);
      let n = r[0].replace("[", "").replace("]", "");
      return this.source.find((i) => i.id == n);
    },
    show: function(e) {
      return e.constructor === Array ? e.join("<br/>") : e;
    },
    hasImage: function(e) {
      return this.getPeopleFromName(e) && this.getPeopleFromName(e).image;
    },
    is: function(e) {
      return e === void 0 ? !1 : e.constructor === String && e != "" || e.constructor === Array && e.length > 0;
    }
  }
}, G3 = {
  key: 0,
  class: "c-text"
}, X3 = { class: "c-text__label" }, j3 = ["innerHTML"], Y3 = {
  key: 1,
  class: "c-text__list"
}, q3 = ["alt", "src"], K3 = {
  key: 1,
  class: "c-text__wrapper"
}, J3 = { key: 0 }, Q3 = { key: 2 };
function Z3(e, t, r, n, i, a) {
  const s = je("router-link");
  return a.is(r.value) ? (q(), Z("div", G3, [
    K("h6", X3, ve(r.meta), 1),
    r.source ? Ee("", !0) : (q(), Z("p", {
      key: 0,
      class: "c-text__value",
      innerHTML: a.show(r.value)
    }, null, 8, j3)),
    r.source ? (q(), Z("ul", Y3, [
      (q(!0), Z($t, null, Ut(r.value, (o, l) => (q(), Z("li", {
        key: l,
        class: _t(["c-text__list-item", { "c-text__list-item--image": a.hasImage(o) }])
      }, [
        a.hasImage(o) ? (q(), Je(s, {
          key: 0,
          to: { name: r.type, params: { id: a.getPeopleFromName(o).id } }
        }, {
          default: yt(() => [
            K("img", {
              class: "c-text__image",
              alt: o,
              src: a.getPeopleFromName(o).image
            }, null, 8, q3)
          ]),
          _: 2
        }, 1032, ["to"])) : Ee("", !0),
        a.getPeopleFromName(o) ? (q(), Z("div", K3, [
          Xe(s, {
            to: { name: r.type, params: { id: a.getPeopleFromName(o).id } }
          }, {
            default: yt(() => [
              We(ve(a.getPeopleFromName(o).name) + " ", 1),
              r.hideGroup ? Ee("", !0) : (q(), Z("span", J3, ve(a.getPeopleFromName(o).parliamentarygroup), 1))
            ]),
            _: 2
          }, 1032, ["to"])
        ])) : (q(), Z("span", Q3, ve(o), 1))
      ], 2))), 128))
    ])) : Ee("", !0)
  ])) : Ee("", !0);
}
const eT = /* @__PURE__ */ Le(V3, [["render", Z3]]);
var tT = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var i = 42;
  t[r] = i;
  for (r in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var a = Object.getOwnPropertySymbols(t);
  if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var s = Object.getOwnPropertyDescriptor(t, r);
    if (s.value !== i || s.enumerable !== !0)
      return !1;
  }
  return !0;
}, Kl = typeof Symbol < "u" && Symbol, rT = tT, nT = function() {
  return typeof Kl != "function" || typeof Symbol != "function" || typeof Kl("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : rT();
}, Jl = {
  foo: {}
}, iT = Object, aT = function() {
  return { __proto__: Jl }.foo === Jl.foo && !({ __proto__: null } instanceof iT);
}, sT = "Function.prototype.bind called on incompatible ", to = Array.prototype.slice, oT = Object.prototype.toString, lT = "[object Function]", fT = function(t) {
  var r = this;
  if (typeof r != "function" || oT.call(r) !== lT)
    throw new TypeError(sT + r);
  for (var n = to.call(arguments, 1), i, a = function() {
    if (this instanceof i) {
      var c = r.apply(
        this,
        n.concat(to.call(arguments))
      );
      return Object(c) === c ? c : this;
    } else
      return r.apply(
        t,
        n.concat(to.call(arguments))
      );
  }, s = Math.max(0, r.length - n.length), o = [], l = 0; l < s; l++)
    o.push("$" + l);
  if (i = Function("binder", "return function (" + o.join(",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
    var f = function() {
    };
    f.prototype = r.prototype, i.prototype = new f(), f.prototype = null;
  }
  return i;
}, cT = fT, Hu = Function.prototype.bind || cT, Ql = {}.hasOwnProperty, ro = Function.prototype.call, uT = ro.bind ? ro.bind(Ql) : function(e, t) {
  return ro.call(Ql, e, t);
}, ye, Nn = SyntaxError, Wu = Function, In = TypeError, no = function(e) {
  try {
    return Wu('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, tn = Object.getOwnPropertyDescriptor;
if (tn)
  try {
    tn({}, "");
  } catch {
    tn = null;
  }
var io = function() {
  throw new In();
}, hT = tn ? function() {
  try {
    return arguments.callee, io;
  } catch {
    try {
      return tn(arguments, "callee").get;
    } catch {
      return io;
    }
  }
}() : io, yn = nT(), dT = aT(), Ke = Object.getPrototypeOf || (dT ? function(e) {
  return e.__proto__;
} : null), An = {}, pT = typeof Uint8Array > "u" || !Ke ? ye : Ke(Uint8Array), rn = {
  "%AggregateError%": typeof AggregateError > "u" ? ye : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? ye : ArrayBuffer,
  "%ArrayIteratorPrototype%": yn && Ke ? Ke([][Symbol.iterator]()) : ye,
  "%AsyncFromSyncIteratorPrototype%": ye,
  "%AsyncFunction%": An,
  "%AsyncGenerator%": An,
  "%AsyncGeneratorFunction%": An,
  "%AsyncIteratorPrototype%": An,
  "%Atomics%": typeof Atomics > "u" ? ye : Atomics,
  "%BigInt%": typeof BigInt > "u" ? ye : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? ye : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? ye : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? ye : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? ye : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? ye : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? ye : FinalizationRegistry,
  "%Function%": Wu,
  "%GeneratorFunction%": An,
  "%Int8Array%": typeof Int8Array > "u" ? ye : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? ye : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? ye : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": yn && Ke ? Ke(Ke([][Symbol.iterator]())) : ye,
  "%JSON%": typeof JSON == "object" ? JSON : ye,
  "%Map%": typeof Map > "u" ? ye : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !yn || !Ke ? ye : Ke((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? ye : Promise,
  "%Proxy%": typeof Proxy > "u" ? ye : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? ye : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? ye : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !yn || !Ke ? ye : Ke((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? ye : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": yn && Ke ? Ke(""[Symbol.iterator]()) : ye,
  "%Symbol%": yn ? Symbol : ye,
  "%SyntaxError%": Nn,
  "%ThrowTypeError%": hT,
  "%TypedArray%": pT,
  "%TypeError%": In,
  "%Uint8Array%": typeof Uint8Array > "u" ? ye : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? ye : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? ye : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? ye : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? ye : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? ye : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? ye : WeakSet
};
if (Ke)
  try {
    null.error;
  } catch (e) {
    var mT = Ke(Ke(e));
    rn["%Error.prototype%"] = mT;
  }
var gT = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = no("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = no("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = no("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var i = e("%AsyncGenerator%");
    i && Ke && (r = Ke(i.prototype));
  }
  return rn[t] = r, r;
}, Zl = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Pi = Hu, Aa = uT, vT = Pi.call(Function.call, Array.prototype.concat), xT = Pi.call(Function.apply, Array.prototype.splice), ef = Pi.call(Function.call, String.prototype.replace), Ca = Pi.call(Function.call, String.prototype.slice), _T = Pi.call(Function.call, RegExp.prototype.exec), yT = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, wT = /\\(\\)?/g, ET = function(t) {
  var r = Ca(t, 0, 1), n = Ca(t, -1);
  if (r === "%" && n !== "%")
    throw new Nn("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Nn("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return ef(t, yT, function(a, s, o, l) {
    i[i.length] = o ? ef(l, wT, "$1") : s || a;
  }), i;
}, ST = function(t, r) {
  var n = t, i;
  if (Aa(Zl, n) && (i = Zl[n], n = "%" + i[0] + "%"), Aa(rn, n)) {
    var a = rn[n];
    if (a === An && (a = gT(n)), typeof a > "u" && !r)
      throw new In("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: a
    };
  }
  throw new Nn("intrinsic " + t + " does not exist!");
}, E0 = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new In("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new In('"allowMissing" argument must be a boolean');
  if (_T(/^%?[^%]*%?$/, t) === null)
    throw new Nn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = ET(t), i = n.length > 0 ? n[0] : "", a = ST("%" + i + "%", r), s = a.name, o = a.value, l = !1, f = a.alias;
  f && (i = f[0], xT(n, vT([0, 1], f)));
  for (var c = 1, u = !0; c < n.length; c += 1) {
    var h = n[c], d = Ca(h, 0, 1), v = Ca(h, -1);
    if ((d === '"' || d === "'" || d === "`" || v === '"' || v === "'" || v === "`") && d !== v)
      throw new Nn("property names with quotes must have matching quotes");
    if ((h === "constructor" || !u) && (l = !0), i += "." + h, s = "%" + i + "%", Aa(rn, s))
      o = rn[s];
    else if (o != null) {
      if (!(h in o)) {
        if (!r)
          throw new In("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (tn && c + 1 >= n.length) {
        var p = tn(o, h);
        u = !!p, u && "get" in p && !("originalValue" in p.get) ? o = p.get : o = o[h];
      } else
        u = Aa(o, h), o = o[h];
      u && !l && (rn[s] = o);
    }
  }
  return o;
}, zu = { exports: {} };
(function(e) {
  var t = Hu, r = E0, n = r("%Function.prototype.apply%"), i = r("%Function.prototype.call%"), a = r("%Reflect.apply%", !0) || t.call(i, n), s = r("%Object.getOwnPropertyDescriptor%", !0), o = r("%Object.defineProperty%", !0), l = r("%Math.max%");
  if (o)
    try {
      o({}, "a", { value: 1 });
    } catch {
      o = null;
    }
  e.exports = function(u) {
    var h = a(t, i, arguments);
    if (s && o) {
      var d = s(h, "length");
      d.configurable && o(
        h,
        "length",
        { value: 1 + l(0, u.length - (arguments.length - 1)) }
      );
    }
    return h;
  };
  var f = function() {
    return a(t, n, arguments);
  };
  o ? o(e.exports, "apply", { value: f }) : e.exports.apply = f;
})(zu);
var TT = zu.exports, Vu = E0, Gu = TT, AT = Gu(Vu("String.prototype.indexOf")), CT = function(t, r) {
  var n = Vu(t, !!r);
  return typeof n == "function" && AT(t, ".prototype.") > -1 ? Gu(n) : n;
};
const FT = {}, OT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: FT
}, Symbol.toStringTag, { value: "Module" })), bT = /* @__PURE__ */ rc(OT);
var S0 = typeof Map == "function" && Map.prototype, ao = Object.getOwnPropertyDescriptor && S0 ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Fa = S0 && ao && typeof ao.get == "function" ? ao.get : null, tf = S0 && Map.prototype.forEach, T0 = typeof Set == "function" && Set.prototype, so = Object.getOwnPropertyDescriptor && T0 ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Oa = T0 && so && typeof so.get == "function" ? so.get : null, rf = T0 && Set.prototype.forEach, kT = typeof WeakMap == "function" && WeakMap.prototype, mi = kT ? WeakMap.prototype.has : null, MT = typeof WeakSet == "function" && WeakSet.prototype, gi = MT ? WeakSet.prototype.has : null, DT = typeof WeakRef == "function" && WeakRef.prototype, nf = DT ? WeakRef.prototype.deref : null, IT = Boolean.prototype.valueOf, PT = Object.prototype.toString, RT = Function.prototype.toString, NT = String.prototype.match, A0 = String.prototype.slice, kr = String.prototype.replace, LT = String.prototype.toUpperCase, af = String.prototype.toLowerCase, Xu = RegExp.prototype.test, sf = Array.prototype.concat, rr = Array.prototype.join, BT = Array.prototype.slice, of = Math.floor, bo = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, oo = Object.getOwnPropertySymbols, ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Ln = typeof Symbol == "function" && typeof Symbol.iterator == "object", pt = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Ln || "symbol") ? Symbol.toStringTag : null, ju = Object.prototype.propertyIsEnumerable, lf = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function ff(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || Xu.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -of(-e) : of(e);
    if (n !== e) {
      var i = String(n), a = A0.call(t, i.length + 1);
      return kr.call(i, r, "$&_") + "." + kr.call(kr.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return kr.call(t, r, "$&_");
}
var Mo = bT, cf = Mo.custom, uf = qu(cf) ? cf : null, $T = function e(t, r, n, i) {
  var a = r || {};
  if (Fr(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Fr(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var s = Fr(a, "customInspect") ? a.customInspect : !0;
  if (typeof s != "boolean" && s !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Fr(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Fr(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var o = a.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return Ju(t, a);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var l = String(t);
    return o ? ff(t, l) : l;
  }
  if (typeof t == "bigint") {
    var f = String(t) + "n";
    return o ? ff(t, f) : f;
  }
  var c = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof n > "u" && (n = 0), n >= c && c > 0 && typeof t == "object")
    return Do(t) ? "[Array]" : "[Object]";
  var u = n8(a, n);
  if (typeof i > "u")
    i = [];
  else if (Ku(i, t) >= 0)
    return "[Circular]";
  function h(M, V, J) {
    if (V && (i = BT.call(i), i.push(V)), J) {
      var le = {
        depth: a.depth
      };
      return Fr(a, "quoteStyle") && (le.quoteStyle = a.quoteStyle), e(M, le, n + 1, i);
    }
    return e(M, a, n + 1, i);
  }
  if (typeof t == "function" && !hf(t)) {
    var d = YT(t), v = qi(t, h);
    return "[Function" + (d ? ": " + d : " (anonymous)") + "]" + (v.length > 0 ? " { " + rr.call(v, ", ") + " }" : "");
  }
  if (qu(t)) {
    var p = Ln ? kr.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : ko.call(t);
    return typeof t == "object" && !Ln ? ti(p) : p;
  }
  if (e8(t)) {
    for (var m = "<" + af.call(String(t.nodeName)), g = t.attributes || [], x = 0; x < g.length; x++)
      m += " " + g[x].name + "=" + Yu(UT(g[x].value), "double", a);
    return m += ">", t.childNodes && t.childNodes.length && (m += "..."), m += "</" + af.call(String(t.nodeName)) + ">", m;
  }
  if (Do(t)) {
    if (t.length === 0)
      return "[]";
    var _ = qi(t, h);
    return u && !r8(_) ? "[" + Io(_, u) + "]" : "[ " + rr.call(_, ", ") + " ]";
  }
  if (WT(t)) {
    var C = qi(t, h);
    return !("cause" in Error.prototype) && "cause" in t && !ju.call(t, "cause") ? "{ [" + String(t) + "] " + rr.call(sf.call("[cause]: " + h(t.cause), C), ", ") + " }" : C.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + rr.call(C, ", ") + " }";
  }
  if (typeof t == "object" && s) {
    if (uf && typeof t[uf] == "function" && Mo)
      return Mo(t, { depth: c - n });
    if (s !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (qT(t)) {
    var R = [];
    return tf && tf.call(t, function(M, V) {
      R.push(h(V, t, !0) + " => " + h(M, t));
    }), df("Map", Fa.call(t), R, u);
  }
  if (QT(t)) {
    var G = [];
    return rf && rf.call(t, function(M) {
      G.push(h(M, t));
    }), df("Set", Oa.call(t), G, u);
  }
  if (KT(t))
    return lo("WeakMap");
  if (ZT(t))
    return lo("WeakSet");
  if (JT(t))
    return lo("WeakRef");
  if (VT(t))
    return ti(h(Number(t)));
  if (XT(t))
    return ti(h(bo.call(t)));
  if (GT(t))
    return ti(IT.call(t));
  if (zT(t))
    return ti(h(String(t)));
  if (!HT(t) && !hf(t)) {
    var b = qi(t, h), L = lf ? lf(t) === Object.prototype : t instanceof Object || t.constructor === Object, P = t instanceof Object ? "" : "null prototype", N = !L && pt && Object(t) === t && pt in t ? A0.call(Vr(t), 8, -1) : P ? "Object" : "", F = L || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", O = F + (N || P ? "[" + rr.call(sf.call([], N || [], P || []), ": ") + "] " : "");
    return b.length === 0 ? O + "{}" : u ? O + "{" + Io(b, u) + "}" : O + "{ " + rr.call(b, ", ") + " }";
  }
  return String(t);
};
function Yu(e, t, r) {
  var n = (r.quoteStyle || t) === "double" ? '"' : "'";
  return n + e + n;
}
function UT(e) {
  return kr.call(String(e), /"/g, "&quot;");
}
function Do(e) {
  return Vr(e) === "[object Array]" && (!pt || !(typeof e == "object" && pt in e));
}
function HT(e) {
  return Vr(e) === "[object Date]" && (!pt || !(typeof e == "object" && pt in e));
}
function hf(e) {
  return Vr(e) === "[object RegExp]" && (!pt || !(typeof e == "object" && pt in e));
}
function WT(e) {
  return Vr(e) === "[object Error]" && (!pt || !(typeof e == "object" && pt in e));
}
function zT(e) {
  return Vr(e) === "[object String]" && (!pt || !(typeof e == "object" && pt in e));
}
function VT(e) {
  return Vr(e) === "[object Number]" && (!pt || !(typeof e == "object" && pt in e));
}
function GT(e) {
  return Vr(e) === "[object Boolean]" && (!pt || !(typeof e == "object" && pt in e));
}
function qu(e) {
  if (Ln)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !ko)
    return !1;
  try {
    return ko.call(e), !0;
  } catch {
  }
  return !1;
}
function XT(e) {
  if (!e || typeof e != "object" || !bo)
    return !1;
  try {
    return bo.call(e), !0;
  } catch {
  }
  return !1;
}
var jT = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function Fr(e, t) {
  return jT.call(e, t);
}
function Vr(e) {
  return PT.call(e);
}
function YT(e) {
  if (e.name)
    return e.name;
  var t = NT.call(RT.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function Ku(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function qT(e) {
  if (!Fa || !e || typeof e != "object")
    return !1;
  try {
    Fa.call(e);
    try {
      Oa.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function KT(e) {
  if (!mi || !e || typeof e != "object")
    return !1;
  try {
    mi.call(e, mi);
    try {
      gi.call(e, gi);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function JT(e) {
  if (!nf || !e || typeof e != "object")
    return !1;
  try {
    return nf.call(e), !0;
  } catch {
  }
  return !1;
}
function QT(e) {
  if (!Oa || !e || typeof e != "object")
    return !1;
  try {
    Oa.call(e);
    try {
      Fa.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function ZT(e) {
  if (!gi || !e || typeof e != "object")
    return !1;
  try {
    gi.call(e, gi);
    try {
      mi.call(e, mi);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function e8(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function Ju(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return Ju(A0.call(e, 0, t.maxStringLength), t) + n;
  }
  var i = kr.call(kr.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, t8);
  return Yu(i, "single", t);
}
function t8(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + LT.call(t.toString(16));
}
function ti(e) {
  return "Object(" + e + ")";
}
function lo(e) {
  return e + " { ? }";
}
function df(e, t, r, n) {
  var i = n ? Io(r, n) : rr.call(r, ", ");
  return e + " (" + t + ") {" + i + "}";
}
function r8(e) {
  for (var t = 0; t < e.length; t++)
    if (Ku(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function n8(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = rr.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: rr.call(Array(t + 1), r)
  };
}
function Io(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + rr.call(e, "," + r) + `
` + t.prev;
}
function qi(e, t) {
  var r = Do(e), n = [];
  if (r) {
    n.length = e.length;
    for (var i = 0; i < e.length; i++)
      n[i] = Fr(e, i) ? t(e[i], e) : "";
  }
  var a = typeof oo == "function" ? oo(e) : [], s;
  if (Ln) {
    s = {};
    for (var o = 0; o < a.length; o++)
      s["$" + a[o]] = a[o];
  }
  for (var l in e)
    Fr(e, l) && (r && String(Number(l)) === l && l < e.length || Ln && s["$" + l] instanceof Symbol || (Xu.call(/[^\w$]/, l) ? n.push(t(l, e) + ": " + t(e[l], e)) : n.push(l + ": " + t(e[l], e))));
  if (typeof oo == "function")
    for (var f = 0; f < a.length; f++)
      ju.call(e, a[f]) && n.push("[" + t(a[f]) + "]: " + t(e[a[f]], e));
  return n;
}
var C0 = E0, Yn = CT, i8 = $T, a8 = C0("%TypeError%"), Ki = C0("%WeakMap%", !0), Ji = C0("%Map%", !0), s8 = Yn("WeakMap.prototype.get", !0), o8 = Yn("WeakMap.prototype.set", !0), l8 = Yn("WeakMap.prototype.has", !0), f8 = Yn("Map.prototype.get", !0), c8 = Yn("Map.prototype.set", !0), u8 = Yn("Map.prototype.has", !0), F0 = function(e, t) {
  for (var r = e, n; (n = r.next) !== null; r = n)
    if (n.key === t)
      return r.next = n.next, n.next = e.next, e.next = n, n;
}, h8 = function(e, t) {
  var r = F0(e, t);
  return r && r.value;
}, d8 = function(e, t, r) {
  var n = F0(e, t);
  n ? n.value = r : e.next = {
    // eslint-disable-line no-param-reassign
    key: t,
    next: e.next,
    value: r
  };
}, p8 = function(e, t) {
  return !!F0(e, t);
}, m8 = function() {
  var t, r, n, i = {
    assert: function(a) {
      if (!i.has(a))
        throw new a8("Side channel does not contain " + i8(a));
    },
    get: function(a) {
      if (Ki && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return s8(t, a);
      } else if (Ji) {
        if (r)
          return f8(r, a);
      } else if (n)
        return h8(n, a);
    },
    has: function(a) {
      if (Ki && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return l8(t, a);
      } else if (Ji) {
        if (r)
          return u8(r, a);
      } else if (n)
        return p8(n, a);
      return !1;
    },
    set: function(a, s) {
      Ki && a && (typeof a == "object" || typeof a == "function") ? (t || (t = new Ki()), o8(t, a, s)) : Ji ? (r || (r = new Ji()), c8(r, a, s)) : (n || (n = { key: {}, next: null }), d8(n, a, s));
    }
  };
  return i;
}, g8 = String.prototype.replace, v8 = /%20/g, fo = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, O0 = {
  default: fo.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return g8.call(e, v8, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: fo.RFC1738,
  RFC3986: fo.RFC3986
}, x8 = O0, co = Object.prototype.hasOwnProperty, Zr = Array.isArray, Qt = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), _8 = function(t) {
  for (; t.length > 1; ) {
    var r = t.pop(), n = r.obj[r.prop];
    if (Zr(n)) {
      for (var i = [], a = 0; a < n.length; ++a)
        typeof n[a] < "u" && i.push(n[a]);
      r.obj[r.prop] = i;
    }
  }
}, Qu = function(t, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < t.length; ++i)
    typeof t[i] < "u" && (n[i] = t[i]);
  return n;
}, y8 = function e(t, r, n) {
  if (!r)
    return t;
  if (typeof r != "object") {
    if (Zr(t))
      t.push(r);
    else if (t && typeof t == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !co.call(Object.prototype, r)) && (t[r] = !0);
    else
      return [t, r];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(r);
  var i = t;
  return Zr(t) && !Zr(r) && (i = Qu(t, n)), Zr(t) && Zr(r) ? (r.forEach(function(a, s) {
    if (co.call(t, s)) {
      var o = t[s];
      o && typeof o == "object" && a && typeof a == "object" ? t[s] = e(o, a, n) : t.push(a);
    } else
      t[s] = a;
  }), t) : Object.keys(r).reduce(function(a, s) {
    var o = r[s];
    return co.call(a, s) ? a[s] = e(a[s], o, n) : a[s] = o, a;
  }, i);
}, w8 = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, t);
}, E8 = function(e, t, r) {
  var n = e.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, S8 = function(t, r, n, i, a) {
  if (t.length === 0)
    return t;
  var s = t;
  if (typeof t == "symbol" ? s = Symbol.prototype.toString.call(t) : typeof t != "string" && (s = String(t)), n === "iso-8859-1")
    return escape(s).replace(/%u[0-9a-f]{4}/gi, function(c) {
      return "%26%23" + parseInt(c.slice(2), 16) + "%3B";
    });
  for (var o = "", l = 0; l < s.length; ++l) {
    var f = s.charCodeAt(l);
    if (f === 45 || f === 46 || f === 95 || f === 126 || f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 97 && f <= 122 || a === x8.RFC1738 && (f === 40 || f === 41)) {
      o += s.charAt(l);
      continue;
    }
    if (f < 128) {
      o = o + Qt[f];
      continue;
    }
    if (f < 2048) {
      o = o + (Qt[192 | f >> 6] + Qt[128 | f & 63]);
      continue;
    }
    if (f < 55296 || f >= 57344) {
      o = o + (Qt[224 | f >> 12] + Qt[128 | f >> 6 & 63] + Qt[128 | f & 63]);
      continue;
    }
    l += 1, f = 65536 + ((f & 1023) << 10 | s.charCodeAt(l) & 1023), o += Qt[240 | f >> 18] + Qt[128 | f >> 12 & 63] + Qt[128 | f >> 6 & 63] + Qt[128 | f & 63];
  }
  return o;
}, T8 = function(t) {
  for (var r = [{ obj: { o: t }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var a = r[i], s = a.obj[a.prop], o = Object.keys(s), l = 0; l < o.length; ++l) {
      var f = o[l], c = s[f];
      typeof c == "object" && c !== null && n.indexOf(c) === -1 && (r.push({ obj: s, prop: f }), n.push(c));
    }
  return _8(r), t;
}, A8 = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, C8 = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, F8 = function(t, r) {
  return [].concat(t, r);
}, O8 = function(t, r) {
  if (Zr(t)) {
    for (var n = [], i = 0; i < t.length; i += 1)
      n.push(r(t[i]));
    return n;
  }
  return r(t);
}, Zu = {
  arrayToObject: Qu,
  assign: w8,
  combine: F8,
  compact: T8,
  decode: E8,
  encode: S8,
  isBuffer: C8,
  isRegExp: A8,
  maybeMap: O8,
  merge: y8
}, eh = m8, ia = Zu, vi = O0, b8 = Object.prototype.hasOwnProperty, pf = {
  brackets: function(t) {
    return t + "[]";
  },
  comma: "comma",
  indices: function(t, r) {
    return t + "[" + r + "]";
  },
  repeat: function(t) {
    return t;
  }
}, dr = Array.isArray, k8 = Array.prototype.push, th = function(e, t) {
  k8.apply(e, dr(t) ? t : [t]);
}, M8 = Date.prototype.toISOString, mf = vi.default, ct = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: ia.encode,
  encodeValuesOnly: !1,
  format: mf,
  formatter: vi.formatters[mf],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return M8.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, D8 = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, uo = {}, I8 = function e(t, r, n, i, a, s, o, l, f, c, u, h, d, v, p, m) {
  for (var g = t, x = m, _ = 0, C = !1; (x = x.get(uo)) !== void 0 && !C; ) {
    var R = x.get(t);
    if (_ += 1, typeof R < "u") {
      if (R === _)
        throw new RangeError("Cyclic object value");
      C = !0;
    }
    typeof x.get(uo) > "u" && (_ = 0);
  }
  if (typeof l == "function" ? g = l(r, g) : g instanceof Date ? g = u(g) : n === "comma" && dr(g) && (g = ia.maybeMap(g, function(le) {
    return le instanceof Date ? u(le) : le;
  })), g === null) {
    if (a)
      return o && !v ? o(r, ct.encoder, p, "key", h) : r;
    g = "";
  }
  if (D8(g) || ia.isBuffer(g)) {
    if (o) {
      var G = v ? r : o(r, ct.encoder, p, "key", h);
      return [d(G) + "=" + d(o(g, ct.encoder, p, "value", h))];
    }
    return [d(r) + "=" + d(String(g))];
  }
  var b = [];
  if (typeof g > "u")
    return b;
  var L;
  if (n === "comma" && dr(g))
    v && o && (g = ia.maybeMap(g, o)), L = [{ value: g.length > 0 ? g.join(",") || null : void 0 }];
  else if (dr(l))
    L = l;
  else {
    var P = Object.keys(g);
    L = f ? P.sort(f) : P;
  }
  for (var N = i && dr(g) && g.length === 1 ? r + "[]" : r, F = 0; F < L.length; ++F) {
    var O = L[F], M = typeof O == "object" && typeof O.value < "u" ? O.value : g[O];
    if (!(s && M === null)) {
      var V = dr(g) ? typeof n == "function" ? n(N, O) : N : N + (c ? "." + O : "[" + O + "]");
      m.set(t, _);
      var J = eh();
      J.set(uo, m), th(b, e(
        M,
        V,
        n,
        i,
        a,
        s,
        n === "comma" && v && dr(g) ? null : o,
        l,
        f,
        c,
        u,
        h,
        d,
        v,
        p,
        J
      ));
    }
  }
  return b;
}, P8 = function(t) {
  if (!t)
    return ct;
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = t.charset || ct.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = vi.default;
  if (typeof t.format < "u") {
    if (!b8.call(vi.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    n = t.format;
  }
  var i = vi.formatters[n], a = ct.filter;
  return (typeof t.filter == "function" || dr(t.filter)) && (a = t.filter), {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : ct.addQueryPrefix,
    allowDots: typeof t.allowDots > "u" ? ct.allowDots : !!t.allowDots,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : ct.charsetSentinel,
    delimiter: typeof t.delimiter > "u" ? ct.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : ct.encode,
    encoder: typeof t.encoder == "function" ? t.encoder : ct.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : ct.encodeValuesOnly,
    filter: a,
    format: n,
    formatter: i,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : ct.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : ct.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : ct.strictNullHandling
  };
}, R8 = function(e, t) {
  var r = e, n = P8(t), i, a;
  typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : dr(n.filter) && (a = n.filter, i = a);
  var s = [];
  if (typeof r != "object" || r === null)
    return "";
  var o;
  t && t.arrayFormat in pf ? o = t.arrayFormat : t && "indices" in t ? o = t.indices ? "indices" : "repeat" : o = "indices";
  var l = pf[o];
  if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var f = l === "comma" && t && t.commaRoundTrip;
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var c = eh(), u = 0; u < i.length; ++u) {
    var h = i[u];
    n.skipNulls && r[h] === null || th(s, I8(
      r[h],
      h,
      l,
      f,
      n.strictNullHandling,
      n.skipNulls,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      c
    ));
  }
  var d = s.join(n.delimiter), v = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? v += "utf8=%26%2310003%3B&" : v += "utf8=%E2%9C%93&"), d.length > 0 ? v + d : "";
}, Bn = Zu, Po = Object.prototype.hasOwnProperty, N8 = Array.isArray, qe = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: Bn.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, L8 = function(e) {
  return e.replace(/&#(\d+);/g, function(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, rh = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, B8 = "utf8=%26%2310003%3B", $8 = "utf8=%E2%9C%93", U8 = function(t, r) {
  var n = { __proto__: null }, i = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, s = i.split(r.delimiter, a), o = -1, l, f = r.charset;
  if (r.charsetSentinel)
    for (l = 0; l < s.length; ++l)
      s[l].indexOf("utf8=") === 0 && (s[l] === $8 ? f = "utf-8" : s[l] === B8 && (f = "iso-8859-1"), o = l, l = s.length);
  for (l = 0; l < s.length; ++l)
    if (l !== o) {
      var c = s[l], u = c.indexOf("]="), h = u === -1 ? c.indexOf("=") : u + 1, d, v;
      h === -1 ? (d = r.decoder(c, qe.decoder, f, "key"), v = r.strictNullHandling ? null : "") : (d = r.decoder(c.slice(0, h), qe.decoder, f, "key"), v = Bn.maybeMap(
        rh(c.slice(h + 1), r),
        function(p) {
          return r.decoder(p, qe.decoder, f, "value");
        }
      )), v && r.interpretNumericEntities && f === "iso-8859-1" && (v = L8(v)), c.indexOf("[]=") > -1 && (v = N8(v) ? [v] : v), Po.call(n, d) ? n[d] = Bn.combine(n[d], v) : n[d] = v;
    }
  return n;
}, H8 = function(e, t, r, n) {
  for (var i = n ? t : rh(t, r), a = e.length - 1; a >= 0; --a) {
    var s, o = e[a];
    if (o === "[]" && r.parseArrays)
      s = [].concat(i);
    else {
      s = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var l = o.charAt(0) === "[" && o.charAt(o.length - 1) === "]" ? o.slice(1, -1) : o, f = parseInt(l, 10);
      !r.parseArrays && l === "" ? s = { 0: i } : !isNaN(f) && o !== l && String(f) === l && f >= 0 && r.parseArrays && f <= r.arrayLimit ? (s = [], s[f] = i) : l !== "__proto__" && (s[l] = i);
    }
    i = s;
  }
  return i;
}, W8 = function(t, r, n, i) {
  if (t) {
    var a = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, s = /(\[[^[\]]*])/, o = /(\[[^[\]]*])/g, l = n.depth > 0 && s.exec(a), f = l ? a.slice(0, l.index) : a, c = [];
    if (f) {
      if (!n.plainObjects && Po.call(Object.prototype, f) && !n.allowPrototypes)
        return;
      c.push(f);
    }
    for (var u = 0; n.depth > 0 && (l = o.exec(a)) !== null && u < n.depth; ) {
      if (u += 1, !n.plainObjects && Po.call(Object.prototype, l[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      c.push(l[1]);
    }
    return l && c.push("[" + a.slice(l.index) + "]"), H8(c, r, n, i);
  }
}, z8 = function(t) {
  if (!t)
    return qe;
  if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof t.charset > "u" ? qe.charset : t.charset;
  return {
    allowDots: typeof t.allowDots > "u" ? qe.allowDots : !!t.allowDots,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : qe.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : qe.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : qe.arrayLimit,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : qe.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : qe.comma,
    decoder: typeof t.decoder == "function" ? t.decoder : qe.decoder,
    delimiter: typeof t.delimiter == "string" || Bn.isRegExp(t.delimiter) ? t.delimiter : qe.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : qe.depth,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : qe.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : qe.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : qe.plainObjects,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : qe.strictNullHandling
  };
}, V8 = function(e, t) {
  var r = z8(t);
  if (e === "" || e === null || typeof e > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof e == "string" ? U8(e, r) : e, i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(n), s = 0; s < a.length; ++s) {
    var o = a[s], l = W8(o, n[o], r, typeof e == "string");
    i = Bn.merge(i, l, r);
  }
  return r.allowSparse === !0 ? i : Bn.compact(i);
}, G8 = R8, X8 = V8, j8 = O0, Y8 = {
  formats: j8,
  parse: X8,
  stringify: G8
};
const q8 = /* @__PURE__ */ za(Y8), K8 = {
  name: "tipi-topics",
  props: {
    meta: String,
    topics: Array,
    tags: Array,
    topicsStyles: Object
  },
  computed: {
    sortedTopics: function() {
      return this.$props.topics.slice().sort(Wa);
    }
  },
  methods: {
    getSubtopics(e) {
      return [
        ...new Set(this.$props.tags.filter((t) => t.topic === e).map((t) => t.subtopic))
      ];
    },
    getTags: function(e) {
      return this.$props.tags.filter((t) => t.subtopic === e).map((t) => t.tag);
    },
    paramsData: function(e, t, r) {
      return q8.stringify({
        topic: e,
        subtopics: t || void 0,
        tags: r || void 0
      });
    }
  }
}, J8 = {
  key: 0,
  class: "c-topics c-topics--extended"
}, Q8 = { class: "c-topics__label" }, Z8 = { class: "c-topics__list" }, eA = {
  key: 0,
  class: "c-topics__list-subtopic"
}, tA = {
  key: 0,
  class: "c-topics__list-tags"
};
function rA(e, t, r, n, i, a) {
  const s = je("router-link");
  return r.topics ? (q(), Z("div", J8, [
    K("h6", Q8, ve(r.meta), 1),
    K("ul", Z8, [
      (q(!0), Z($t, null, Ut(a.sortedTopics, (o, l) => (q(), Z("li", {
        key: o,
        class: "c-topics__list-topic"
      }, [
        Xe(s, {
          id: `topic-${l}`,
          class: "c-topics__topic",
          style: Bt(`background-color:${r.topicsStyles[o].color}`),
          to: { name: "results", params: { data: a.paramsData(o) } }
        }, {
          default: yt(() => [
            We(ve(o), 1)
          ]),
          _: 2
        }, 1032, ["id", "style", "to"]),
        a.getSubtopics(o) ? (q(), Z("ul", eA, [
          (q(!0), Z($t, null, Ut(a.getSubtopics(o), (f) => (q(), Z("li", {
            key: f + " - " + o,
            class: "c-topics__subtopic"
          }, [
            Xe(s, {
              class: "c-topics__link",
              to: { name: "results", params: { data: a.paramsData(o, f) } }
            }, {
              default: yt(() => [
                We(ve(f), 1)
              ]),
              _: 2
            }, 1032, ["to"]),
            a.getTags(f) ? (q(), Z("ul", tA, [
              (q(!0), Z($t, null, Ut(a.getTags(f), (c) => (q(), Z("li", {
                key: c + " - " + o,
                class: "c-topics__tag"
              }, [
                Xe(s, {
                  class: "c-topics__link",
                  to: { name: "results", params: { data: a.paramsData(o, f, c) } }
                }, {
                  default: yt(() => [
                    We(ve(c), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]))), 128))
            ])) : Ee("", !0)
          ]))), 128))
        ])) : Ee("", !0)
      ]))), 128))
    ])
  ])) : Ee("", !0);
}
const nA = /* @__PURE__ */ Le(K8, [["render", rA]]);
var Ro = "http://www.w3.org/1999/xhtml";
const gf = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ro,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Qa(e) {
  var t = e += "", r = t.indexOf(":");
  return r >= 0 && (t = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)), gf.hasOwnProperty(t) ? { space: gf[t], local: e } : e;
}
function iA(e) {
  return function() {
    var t = this.ownerDocument, r = this.namespaceURI;
    return r === Ro && t.documentElement.namespaceURI === Ro ? t.createElement(e) : t.createElementNS(r, e);
  };
}
function aA(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function nh(e) {
  var t = Qa(e);
  return (t.local ? aA : iA)(t);
}
function sA() {
}
function b0(e) {
  return e == null ? sA : function() {
    return this.querySelector(e);
  };
}
function oA(e) {
  typeof e != "function" && (e = b0(e));
  for (var t = this._groups, r = t.length, n = new Array(r), i = 0; i < r; ++i)
    for (var a = t[i], s = a.length, o = n[i] = new Array(s), l, f, c = 0; c < s; ++c)
      (l = a[c]) && (f = e.call(l, l.__data__, c, a)) && ("__data__" in l && (f.__data__ = l.__data__), o[c] = f);
  return new Et(n, this._parents);
}
function lA() {
  return [];
}
function ih(e) {
  return e == null ? lA : function() {
    return this.querySelectorAll(e);
  };
}
function fA(e) {
  typeof e != "function" && (e = ih(e));
  for (var t = this._groups, r = t.length, n = [], i = [], a = 0; a < r; ++a)
    for (var s = t[a], o = s.length, l, f = 0; f < o; ++f)
      (l = s[f]) && (n.push(e.call(l, l.__data__, f, s)), i.push(l));
  return new Et(n, i);
}
function ah(e) {
  return function() {
    return this.matches(e);
  };
}
function cA(e) {
  typeof e != "function" && (e = ah(e));
  for (var t = this._groups, r = t.length, n = new Array(r), i = 0; i < r; ++i)
    for (var a = t[i], s = a.length, o = n[i] = [], l, f = 0; f < s; ++f)
      (l = a[f]) && e.call(l, l.__data__, f, a) && o.push(l);
  return new Et(n, this._parents);
}
function sh(e) {
  return new Array(e.length);
}
function uA() {
  return new Et(this._enter || this._groups.map(sh), this._parents);
}
function ba(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
ba.prototype = {
  constructor: ba,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function hA(e) {
  return function() {
    return e;
  };
}
var vf = "$";
function dA(e, t, r, n, i, a) {
  for (var s = 0, o, l = t.length, f = a.length; s < f; ++s)
    (o = t[s]) ? (o.__data__ = a[s], n[s] = o) : r[s] = new ba(e, a[s]);
  for (; s < l; ++s)
    (o = t[s]) && (i[s] = o);
}
function pA(e, t, r, n, i, a, s) {
  var o, l, f = {}, c = t.length, u = a.length, h = new Array(c), d;
  for (o = 0; o < c; ++o)
    (l = t[o]) && (h[o] = d = vf + s.call(l, l.__data__, o, t), d in f ? i[o] = l : f[d] = l);
  for (o = 0; o < u; ++o)
    d = vf + s.call(e, a[o], o, a), (l = f[d]) ? (n[o] = l, l.__data__ = a[o], f[d] = null) : r[o] = new ba(e, a[o]);
  for (o = 0; o < c; ++o)
    (l = t[o]) && f[h[o]] === l && (i[o] = l);
}
function mA(e, t) {
  if (!e)
    return d = new Array(this.size()), f = -1, this.each(function(G) {
      d[++f] = G;
    }), d;
  var r = t ? pA : dA, n = this._parents, i = this._groups;
  typeof e != "function" && (e = hA(e));
  for (var a = i.length, s = new Array(a), o = new Array(a), l = new Array(a), f = 0; f < a; ++f) {
    var c = n[f], u = i[f], h = u.length, d = e.call(c, c && c.__data__, f, n), v = d.length, p = o[f] = new Array(v), m = s[f] = new Array(v), g = l[f] = new Array(h);
    r(c, u, p, m, g, d, t);
    for (var x = 0, _ = 0, C, R; x < v; ++x)
      if (C = p[x]) {
        for (x >= _ && (_ = x + 1); !(R = m[_]) && ++_ < v; )
          ;
        C._next = R || null;
      }
  }
  return s = new Et(s, n), s._enter = o, s._exit = l, s;
}
function gA() {
  return new Et(this._exit || this._groups.map(sh), this._parents);
}
function vA(e, t, r) {
  var n = this.enter(), i = this, a = this.exit();
  return n = typeof e == "function" ? e(n) : n.append(e + ""), t != null && (i = t(i)), r == null ? a.remove() : r(a), n && i ? n.merge(i).order() : i;
}
function xA(e) {
  for (var t = this._groups, r = e._groups, n = t.length, i = r.length, a = Math.min(n, i), s = new Array(n), o = 0; o < a; ++o)
    for (var l = t[o], f = r[o], c = l.length, u = s[o] = new Array(c), h, d = 0; d < c; ++d)
      (h = l[d] || f[d]) && (u[d] = h);
  for (; o < n; ++o)
    s[o] = t[o];
  return new Et(s, this._parents);
}
function _A() {
  for (var e = this._groups, t = -1, r = e.length; ++t < r; )
    for (var n = e[t], i = n.length - 1, a = n[i], s; --i >= 0; )
      (s = n[i]) && (a && s.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(s, a), a = s);
  return this;
}
function yA(e) {
  e || (e = wA);
  function t(u, h) {
    return u && h ? e(u.__data__, h.__data__) : !u - !h;
  }
  for (var r = this._groups, n = r.length, i = new Array(n), a = 0; a < n; ++a) {
    for (var s = r[a], o = s.length, l = i[a] = new Array(o), f, c = 0; c < o; ++c)
      (f = s[c]) && (l[c] = f);
    l.sort(t);
  }
  return new Et(i, this._parents).order();
}
function wA(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function EA() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function SA() {
  var e = new Array(this.size()), t = -1;
  return this.each(function() {
    e[++t] = this;
  }), e;
}
function TA() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var n = e[t], i = 0, a = n.length; i < a; ++i) {
      var s = n[i];
      if (s)
        return s;
    }
  return null;
}
function AA() {
  var e = 0;
  return this.each(function() {
    ++e;
  }), e;
}
function CA() {
  return !this.node();
}
function FA(e) {
  for (var t = this._groups, r = 0, n = t.length; r < n; ++r)
    for (var i = t[r], a = 0, s = i.length, o; a < s; ++a)
      (o = i[a]) && e.call(o, o.__data__, a, i);
  return this;
}
function OA(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function bA(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function kA(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function MA(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function DA(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
  };
}
function IA(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r);
  };
}
function PA(e, t) {
  var r = Qa(e);
  if (arguments.length < 2) {
    var n = this.node();
    return r.local ? n.getAttributeNS(r.space, r.local) : n.getAttribute(r);
  }
  return this.each((t == null ? r.local ? bA : OA : typeof t == "function" ? r.local ? IA : DA : r.local ? MA : kA)(r, t));
}
function oh(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function RA(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function NA(e, t, r) {
  return function() {
    this.style.setProperty(e, t, r);
  };
}
function LA(e, t, r) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.style.removeProperty(e) : this.style.setProperty(e, n, r);
  };
}
function BA(e, t, r) {
  return arguments.length > 1 ? this.each((t == null ? RA : typeof t == "function" ? LA : NA)(e, t, r ?? "")) : $n(this.node(), e);
}
function $n(e, t) {
  return e.style.getPropertyValue(t) || oh(e).getComputedStyle(e, null).getPropertyValue(t);
}
function $A(e) {
  return function() {
    delete this[e];
  };
}
function UA(e, t) {
  return function() {
    this[e] = t;
  };
}
function HA(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? delete this[e] : this[e] = r;
  };
}
function WA(e, t) {
  return arguments.length > 1 ? this.each((t == null ? $A : typeof t == "function" ? HA : UA)(e, t)) : this.node()[e];
}
function lh(e) {
  return e.trim().split(/^|\s+/);
}
function k0(e) {
  return e.classList || new fh(e);
}
function fh(e) {
  this._node = e, this._names = lh(e.getAttribute("class") || "");
}
fh.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function ch(e, t) {
  for (var r = k0(e), n = -1, i = t.length; ++n < i; )
    r.add(t[n]);
}
function uh(e, t) {
  for (var r = k0(e), n = -1, i = t.length; ++n < i; )
    r.remove(t[n]);
}
function zA(e) {
  return function() {
    ch(this, e);
  };
}
function VA(e) {
  return function() {
    uh(this, e);
  };
}
function GA(e, t) {
  return function() {
    (t.apply(this, arguments) ? ch : uh)(this, e);
  };
}
function XA(e, t) {
  var r = lh(e + "");
  if (arguments.length < 2) {
    for (var n = k0(this.node()), i = -1, a = r.length; ++i < a; )
      if (!n.contains(r[i]))
        return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? GA : t ? zA : VA)(r, t));
}
function jA() {
  this.textContent = "";
}
function YA(e) {
  return function() {
    this.textContent = e;
  };
}
function qA(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function KA(e) {
  return arguments.length ? this.each(e == null ? jA : (typeof e == "function" ? qA : YA)(e)) : this.node().textContent;
}
function JA() {
  this.innerHTML = "";
}
function QA(e) {
  return function() {
    this.innerHTML = e;
  };
}
function ZA(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function e6(e) {
  return arguments.length ? this.each(e == null ? JA : (typeof e == "function" ? ZA : QA)(e)) : this.node().innerHTML;
}
function t6() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function r6() {
  return this.each(t6);
}
function n6() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function i6() {
  return this.each(n6);
}
function a6(e) {
  var t = typeof e == "function" ? e : nh(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function s6() {
  return null;
}
function o6(e, t) {
  var r = typeof e == "function" ? e : nh(e), n = t == null ? s6 : typeof t == "function" ? t : b0(t);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), n.apply(this, arguments) || null);
  });
}
function l6() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function f6() {
  return this.each(l6);
}
function c6() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function u6() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function h6(e) {
  return this.select(e ? u6 : c6);
}
function d6(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
var hh = {};
if (typeof document < "u") {
  var p6 = document.documentElement;
  "onmouseenter" in p6 || (hh = { mouseenter: "mouseover", mouseleave: "mouseout" });
}
function m6(e, t, r) {
  return e = dh(e, t, r), function(n) {
    var i = n.relatedTarget;
    (!i || i !== this && !(i.compareDocumentPosition(this) & 8)) && e.call(this, n);
  };
}
function dh(e, t, r) {
  return function(n) {
    try {
      e.call(this, this.__data__, t, r);
    } finally {
    }
  };
}
function g6(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var r = "", n = t.indexOf(".");
    return n >= 0 && (r = t.slice(n + 1), t = t.slice(0, n)), { type: t, name: r };
  });
}
function v6(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var r = 0, n = -1, i = t.length, a; r < i; ++r)
        a = t[r], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.capture) : t[++n] = a;
      ++n ? t.length = n : delete this.__on;
    }
  };
}
function x6(e, t, r) {
  var n = hh.hasOwnProperty(e.type) ? m6 : dh;
  return function(i, a, s) {
    var o = this.__on, l, f = n(t, a, s);
    if (o) {
      for (var c = 0, u = o.length; c < u; ++c)
        if ((l = o[c]).type === e.type && l.name === e.name) {
          this.removeEventListener(l.type, l.listener, l.capture), this.addEventListener(l.type, l.listener = f, l.capture = r), l.value = t;
          return;
        }
    }
    this.addEventListener(e.type, f, r), l = { type: e.type, name: e.name, value: t, listener: f, capture: r }, o ? o.push(l) : this.__on = [l];
  };
}
function _6(e, t, r) {
  var n = g6(e + ""), i, a = n.length, s;
  if (arguments.length < 2) {
    var o = this.node().__on;
    if (o) {
      for (var l = 0, f = o.length, c; l < f; ++l)
        for (i = 0, c = o[l]; i < a; ++i)
          if ((s = n[i]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (o = t ? x6 : v6, r == null && (r = !1), i = 0; i < a; ++i)
    this.each(o(n[i], t, r));
  return this;
}
function ph(e, t, r) {
  var n = oh(e), i = n.CustomEvent;
  typeof i == "function" ? i = new i(t, r) : (i = n.document.createEvent("Event"), r ? (i.initEvent(t, r.bubbles, r.cancelable), i.detail = r.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function y6(e, t) {
  return function() {
    return ph(this, e, t);
  };
}
function w6(e, t) {
  return function() {
    return ph(this, e, t.apply(this, arguments));
  };
}
function E6(e, t) {
  return this.each((typeof t == "function" ? w6 : y6)(e, t));
}
var M0 = [null];
function Et(e, t) {
  this._groups = e, this._parents = t;
}
function qn() {
  return new Et([[document.documentElement]], M0);
}
Et.prototype = qn.prototype = {
  constructor: Et,
  select: oA,
  selectAll: fA,
  filter: cA,
  data: mA,
  enter: uA,
  exit: gA,
  join: vA,
  merge: xA,
  order: _A,
  sort: yA,
  call: EA,
  nodes: SA,
  node: TA,
  size: AA,
  empty: CA,
  each: FA,
  attr: PA,
  style: BA,
  property: WA,
  classed: XA,
  text: KA,
  html: e6,
  raise: r6,
  lower: i6,
  append: a6,
  insert: o6,
  remove: f6,
  clone: h6,
  datum: d6,
  on: _6,
  dispatch: E6
};
function mn(e) {
  return typeof e == "string" ? new Et([[document.querySelector(e)]], [document.documentElement]) : new Et([[e]], M0);
}
function Za(e) {
  return typeof e == "string" ? new Et([document.querySelectorAll(e)], [document.documentElement]) : new Et([e ?? []], M0);
}
function es(e) {
  return +e;
}
function ts(e) {
  return e * e;
}
function rs(e) {
  return e * (2 - e);
}
function Pr(e) {
  return ((e *= 2) <= 1 ? e * e : --e * (2 - e) + 1) / 2;
}
function ns(e) {
  return e * e * e;
}
function is(e) {
  return --e * e * e + 1;
}
function yr(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var D0 = 3, as = function e(t) {
  t = +t;
  function r(n) {
    return Math.pow(n, t);
  }
  return r.exponent = e, r;
}(D0), ss = function e(t) {
  t = +t;
  function r(n) {
    return 1 - Math.pow(1 - n, t);
  }
  return r.exponent = e, r;
}(D0), Rr = function e(t) {
  t = +t;
  function r(n) {
    return ((n *= 2) <= 1 ? Math.pow(n, t) : 2 - Math.pow(2 - n, t)) / 2;
  }
  return r.exponent = e, r;
}(D0), mh = Math.PI, gh = mh / 2;
function os(e) {
  return +e == 1 ? 1 : 1 - Math.cos(e * gh);
}
function ls(e) {
  return Math.sin(e * gh);
}
function Nr(e) {
  return (1 - Math.cos(mh * e)) / 2;
}
function Lr(e) {
  return (Math.pow(2, -10 * e) - 9765625e-10) * 1.0009775171065494;
}
function fs(e) {
  return Lr(1 - +e);
}
function cs(e) {
  return 1 - Lr(e);
}
function Br(e) {
  return ((e *= 2) <= 1 ? Lr(1 - e) : 2 - Lr(e - 1)) / 2;
}
function us(e) {
  return 1 - Math.sqrt(1 - e * e);
}
function hs(e) {
  return Math.sqrt(1 - --e * e);
}
function $r(e) {
  return ((e *= 2) <= 1 ? 1 - Math.sqrt(1 - e * e) : Math.sqrt(1 - (e -= 2) * e) + 1) / 2;
}
var No = 4 / 11, S6 = 6 / 11, T6 = 8 / 11, A6 = 3 / 4, C6 = 9 / 11, F6 = 10 / 11, O6 = 15 / 16, b6 = 21 / 22, k6 = 63 / 64, Qi = 1 / No / No;
function ds(e) {
  return 1 - Yt(1 - e);
}
function Yt(e) {
  return (e = +e) < No ? Qi * e * e : e < T6 ? Qi * (e -= S6) * e + A6 : e < F6 ? Qi * (e -= C6) * e + O6 : Qi * (e -= b6) * e + k6;
}
function ps(e) {
  return ((e *= 2) <= 1 ? 1 - Yt(1 - e) : Yt(e - 1) + 1) / 2;
}
var I0 = 1.70158, ms = function e(t) {
  t = +t;
  function r(n) {
    return (n = +n) * n * (t * (n - 1) + n);
  }
  return r.overshoot = e, r;
}(I0), nn = function e(t) {
  t = +t;
  function r(n) {
    return --n * n * ((n + 1) * t + n) + 1;
  }
  return r.overshoot = e, r;
}(I0), Ur = function e(t) {
  t = +t;
  function r(n) {
    return ((n *= 2) < 1 ? n * n * ((t + 1) * n - t) : (n -= 2) * n * ((t + 1) * n + t) + 2) / 2;
  }
  return r.overshoot = e, r;
}(I0), Un = 2 * Math.PI, P0 = 1, R0 = 0.3, gs = function e(t, r) {
  var n = Math.asin(1 / (t = Math.max(1, t))) * (r /= Un);
  function i(a) {
    return t * Lr(- --a) * Math.sin((n - a) / r);
  }
  return i.amplitude = function(a) {
    return e(a, r * Un);
  }, i.period = function(a) {
    return e(t, a);
  }, i;
}(P0, R0), Hr = function e(t, r) {
  var n = Math.asin(1 / (t = Math.max(1, t))) * (r /= Un);
  function i(a) {
    return 1 - t * Lr(a = +a) * Math.sin((a + n) / r);
  }
  return i.amplitude = function(a) {
    return e(a, r * Un);
  }, i.period = function(a) {
    return e(t, a);
  }, i;
}(P0, R0), vs = function e(t, r) {
  var n = Math.asin(1 / (t = Math.max(1, t))) * (r /= Un);
  function i(a) {
    return ((a = a * 2 - 1) < 0 ? t * Lr(-a) * Math.sin((n - a) / r) : 2 - t * Lr(a) * Math.sin((n + a) / r)) / 2;
  }
  return i.amplitude = function(a) {
    return e(a, r * Un);
  }, i.period = function(a) {
    return e(t, a);
  }, i;
}(P0, R0);
const M6 = {
  name: "TipiNeuron",
  props: {
    initiative: Object,
    topics: Array,
    styles: {
      type: Object,
      default: function() {
        return { topics: {}, defaultColor: "#cecece" };
      }
    }
  },
  methods: {
    loadVizz: function(e, t, r, n = { center: "#222" }) {
      function i(v, p, m, g, x) {
        return (v - p) * (x - g) / (m - p) + g;
      }
      function a(v, p) {
        return [Math.cos(v) * p, Math.sin(v) * p];
      }
      function s(v, p) {
        let m = o(v, p);
        return `translate(${m[0]},${m[1]})`;
      }
      function o(v, p) {
        let m = i(p, 0, l.length, 0, Math.PI * 2), g = a(m, v.related ? 100 : 75);
        return [g[0] + c / 2, g[1] + u / 2];
      }
      n = {
        related: {
          "ODS 1": "#eb1c2d",
          "ODS 2": "#d3a029",
          "ODS 3": "#4c9f38",
          "ODS 4": "#c52333",
          "ODS 5": "#ed4135",
          "ODS 6": "#00aed9",
          "ODS 7": "#fdb713",
          "ODS 8": "#8f1838",
          "ODS 9": "#f06a38",
          "ODS 10": "#dd1367",
          "ODS 11": "#f69c39",
          "ODS 12": "#cf8d2a",
          "ODS 13": "#48773e",
          "ODS 14": "#007dbc",
          "ODS 15": "#5cb84d",
          "ODS 16": "#02558b",
          "ODS 17": "#183668"
        },
        notRelated: "#cecece",
        center: "#222",
        line: "#cecece"
      };
      let l = [], f = mn(this.$el);
      f.selectAll("*").remove();
      let c = +f.node().getBoundingClientRect().width, u = +f.node().getBoundingClientRect().height;
      function h(v, p) {
        for (let m = 0; m < v.length; m++) {
          let g = { name: v[m].name, related: !1, intensity: 0 };
          for (let x = 0; x < p.topics.length; x++)
            p.topics[x] == g.name && (g.related = !0);
          for (let x = 0; x < p.tags.length; x++)
            p.tags[x].topic == g.name && g.intensity++;
          g.intensity = g.intensity / p.tags.length, l.push(g);
        }
        d();
      }
      function d() {
        f.selectAll(".connection").data(l).enter().append("path").transition().duration(700).delay((m, g) => g * g + 500).ease(nn).attr("d", (m, g) => {
          let x = o(m, g);
          return "M " + c / 2 + " " + u / 2 + "L " + x[0] + " " + x[1];
        }).attr("stroke-width", (m) => m.related ? "3px" : "1px").attr(
          "stroke",
          (m) => m.related && r.topics[m.name] ? r.topics[m.name].color : r.defaultColor
        );
        let v = f.selectAll(".node").data(l).enter().append("g").attr("class", "node").attr("transform", () => `translate(${c / 2},${u / 2})`);
        v.transition().duration(700).delay((m, g) => g * g).ease(nn).attr("transform", s), v.append("circle").attr("class", (m) => m.related ? "related" : "").attr("r", (m) => m.related ? 15 : 10).style(
          "fill",
          (m) => m.related && r.topics[m.name] ? r.topics[m.name].color : r.defaultColor
        ), v.append("path").attr(
          "d",
          d3.arc().innerRadius((m) => m.related ? 20 : 15).outerRadius((m) => m.related ? 25 : 20).startAngle(0).endAngle((m) => Math.PI * 2 * m.intensity)
        ).attr("class", (m) => m.related ? "related" : "").style(
          "fill",
          (m) => m.related && r.topics[m.name] ? r.topics[m.name].color : r.defaultColor
        ), v.append("text").attr("class", "label_name").attr("text-anchor", "middle").attr("alignment-baseline", "central").text((m) => m.related ? m.name.split("-")[0].trim() : ""), f.append("g").attr("class", "center").attr("transform", `translate(${c / 2},${u / 2})`).append("circle").attr("r", 5).attr("fill", n.center).transition().duration(700).ease(nn).attr("r", 20);
      }
      h(e, t);
    }
  },
  watch: {
    $route: function() {
      this.loadVizz(this.$props.topics, this.$props.initiative, this.$props.styles);
    }
  },
  mounted: function() {
    this.loadVizz(this.$props.topics, this.$props.initiative, this.$props.styles);
  }
}, D6 = {
  key: 0,
  style: { width: "100%", height: "200px" }
};
function I6(e, t, r, n, i, a) {
  return r.topics ? (q(), Z("svg", D6)) : Ee("", !0);
}
const P6 = /* @__PURE__ */ Le(M6, [["render", I6]]), R6 = {
  name: "TipiTopicCard",
  props: {
    topic: Object,
    topicsStyles: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    getIcon: function(e) {
      return this.topicsStyles.hasOwnProperty(e.name) && this.topicsStyles[e.name].image ? this.topicsStyles[e.name].image : this.topic.icon;
    },
    getColor: function(e) {
      return this.topicsStyles.hasOwnProperty(e.name) && this.topicsStyles[e.name].color ? this.topicsStyles[e.name].color : "#000";
    }
  }
}, N6 = { class: "o-container" }, L6 = { class: "o-grid o-grid--reverse" }, B6 = { class: "o-grid__col u-12 u-3@sm u-offset-1@sm" }, $6 = ["src", "alt"], U6 = { class: "o-grid__col u-12 u-8@sm" }, H6 = { class: "c-topic-card__title" }, W6 = { class: "c-topic-card__description" };
function z6(e, t, r, n, i, a) {
  return q(), Z("div", {
    style: Bt(`background-color: ${a.getColor(r.topic)}`),
    class: "c-topic-card"
  }, [
    K("div", N6, [
      K("div", L6, [
        K("div", B6, [
          K("img", {
            src: `/img/topics/${a.getIcon(r.topic)}`,
            alt: `Imagen de ${r.topic.name}`,
            class: "c-topic-card__image"
          }, null, 8, $6)
        ]),
        K("div", U6, [
          K("h1", H6, ve(r.topic.name), 1),
          K("div", W6, [
            (q(!0), Z($t, null, Ut(r.topic.description, (s) => (q(), Z("p", { key: s }, ve(s), 1))), 128))
          ])
        ])
      ])
    ])
  ], 4);
}
const V6 = /* @__PURE__ */ Le(R6, [["render", z6]]), G6 = {
  name: "TipiTopicLink",
  props: {
    color: {
      type: String,
      default: "#000"
    },
    image: String,
    topic: Object
  },
  computed: {
    topicImage: function() {
      return `/img/topics/${this.image}` || `/img/topics/${this.topic.icon}`;
    }
  }
}, X6 = { class: "c-topic-link" }, j6 = ["src", "alt"], Y6 = { class: "c-topic-link__name" };
function q6(e, t, r, n, i, a) {
  const s = je("router-link");
  return q(), Z("div", null, [
    K("div", X6, [
      Xe(s, {
        to: { name: "topic", params: { id: r.topic.id } },
        class: "c-topic-link__image-link",
        style: Bt(`background-color: ${r.color}`)
      }, {
        default: yt(() => [
          K("img", {
            src: a.topicImage,
            alt: `Imagen de ${r.topic.name}`,
            class: "c-topic-link__image"
          }, null, 8, j6)
        ]),
        _: 1
      }, 8, ["to", "style"]),
      K("h4", Y6, [
        Xe(s, {
          to: { name: "topic", params: { id: r.topic.id } }
        }, {
          default: yt(() => [
            We(ve(r.topic.name), 1)
          ]),
          _: 1
        }, 8, ["to"])
      ])
    ])
  ]);
}
const K6 = /* @__PURE__ */ Le(G6, [["render", q6]]);
const J6 = {
  name: "TipiTwoCircles",
  props: {
    selection: Object,
    styles: {
      type: Object,
      default: function() {
        return { topics: {}, defaultColor: "#cecece" };
      }
    },
    topic: String
  },
  methods: {
    loadVizz: function() {
      let e = 2e3, t = mn(this.$el);
      t.selectAll("*").remove();
      let r = +t.node().getBoundingClientRect().width, n = 150, i = 5, a = this.$props.styles, s = this.$props.topic, o = [this.$props.selection.selected], l = this.$props.selection.compareswith._id, f = this.$props.selection.compareswith.initiatives, c = a.topics[s] ? a.topics[s].color : a.defaultColor, u = a.topics[l] ? a.topics[l].color : c, h = t.selectAll(".node").data(o).enter().append("g").attr("class", "node").attr("transform", "translate(" + r / 2 + "," + n + ")");
      h.append("circle").attr("class", "compared").attr("r", n).attr("fill", u), h.append("circle").attr("fill", function(p) {
        return v();
      }).attr("r", 0).transition().duration(e).attr("r", function(p) {
        let m = Math.round(p.initiatives * n / f);
        return p.initiatives === 0 ? 0 : m > i ? m : i;
      });
      let d = t.selectAll(".legend").data(o).enter().append("g").attr("class", "legend");
      d.append("rect").attr("width", n * 2).attr("height", 10).attr("fill", function(p) {
        return v();
      }).attr("transform", "translate(0," + (n * 2 + 50) + ")"), d.append("text").attr("x", 0).attr("y", 0).style("fill", "#222").style("font-size", "13px").text(function(p) {
        return p._id;
      }).attr("text-anchor", "middle").attr("alignment-baseline", "central").attr("transform", "translate(" + r / 2 + "," + (n * 2 + 70) + ")"), d.append("rect").attr("width", n * 2).attr("height", 10).attr("class", "compared").attr("fill", u).attr("transform", "translate(0," + (n * 2 + 90) + ")"), d.append("text").attr("x", 0).attr("y", 0).style("fill", "#222").style("font-size", "13px").text(l).attr("text-anchor", "middle").attr("alignment-baseline", "central").attr("transform", "translate(" + r / 2 + "," + (n * 2 + 110) + ")");
      function v(p) {
        return a.topics[s] ? a.topics[s].color : a.defaultColor;
      }
    }
  },
  mounted: function() {
    this.loadVizz();
  },
  watch: {
    "selection.selected._id": "loadVizz"
  }
}, Q6 = { style: { width: "300px", height: "500px" } };
function Z6(e, t, r, n, i, a) {
  return q(), Z("svg", Q6);
}
const e5 = /* @__PURE__ */ Le(J6, [["render", Z6]]), t5 = {
  name: "TipiSplash",
  props: {
    closeClass: {
      type: String,
      default: "c-button c-button--primary"
    },
    closeText: {
      type: String,
      default: "Comenzar"
    }
  },
  data: function() {
    return {
      closedMessage: !1
    };
  },
  computed: {
    closedSplash: function() {
      return !!(JSON.parse(window.sessionStorage.getItem("closedSplash")) || this.closedMessage);
    }
  },
  methods: {
    closeSplash: function() {
      window.sessionStorage.setItem("closedSplash", !0), this.closedMessage = !0;
    }
  }
}, r5 = {
  key: 0,
  class: "c-splash"
}, n5 = { class: "c-splash__outer" }, i5 = { class: "c-splash__inner" };
function a5(e, t, r, n, i, a) {
  return a.closedSplash ? Ee("", !0) : (q(), Z("div", r5, [
    K("div", n5, [
      K("div", i5, [
        Ha(e.$slots, "default"),
        K("p", null, [
          K("a", {
            class: _t(["c-splash__close", r.closeClass]),
            href: "#",
            onClick: t[0] || (t[0] = (...s) => a.closeSplash && a.closeSplash(...s))
          }, ve(r.closeText), 3)
        ])
      ])
    ])
  ]));
}
const s5 = /* @__PURE__ */ Le(t5, [["render", a5]]);
const o5 = {
  name: "TipiBarchart",
  data() {
    return {
      rows: []
    };
  },
  props: {
    result: {
      type: Object,
      required: !0,
      default: () => ({})
    },
    styles: {
      type: Object,
      required: !0,
      default: () => ({})
    },
    barHeight: {
      type: Number,
      required: !1,
      default: 24
    },
    barGap: {
      type: Number,
      required: !1,
      default: 12
    },
    barColor: {
      type: String,
      required: !1,
      default: "#fbc239"
    },
    barBackgroundColor: {
      type: String,
      required: !1,
      default: "#f4f6f8"
    },
    barOrder: {
      type: String,
      required: !1,
      default: "desc"
      // Options: alphabetically, asc, desc
    },
    knowledgebase: {
      type: String,
      required: !0
    }
  },
  mounted() {
    this.calculeRows();
  },
  computed: {
    rowStyle() {
      return {
        height: `${this.barHeight}px`,
        marginBottom: `${this.barGap}px`
      };
    }
  },
  methods: {
    calculeRows() {
      const t = this.getTagged().tags, r = [], n = t.reduce((i, a) => i + a.times, 0);
      t.forEach((i) => {
        const a = r.map((s) => s.topic).indexOf(i.topic);
        a === -1 ? r.push({
          topic: i.topic,
          times: i.times,
          percent: Math.ceil(i.times / n * 100),
          iconStyle: {
            flex: `0 0 ${this.barHeight}px`,
            height: `${this.barHeight}px`,
            backgroundSize: `${this.barHeight}px`,
            backgroundImage: `url(/img/topics/${this.styles.topics[i.topic].image})`
          },
          backbarStyle: {
            height: `${this.barHeight}px`,
            backgroundColor: this.barBackgroundColor
          },
          overbarStyle: {
            height: `${this.barHeight}px`,
            width: `${i.times / n * 100}%`,
            backgroundColor: this.barColor
          }
        }) : (r[a].times += i.times, r[a].overbarStyle.width = `${r[a].times / n * 100}%`, r[a].percent = Math.ceil(r[a].times / n * 100));
      }), this.rows = this.barOrder === "alphabetically" ? r.sort((i, a) => Wa(i.topic, a.topic)) : this.barOrder === "asc" ? r.sort((i, a) => i.times - a.times) : r.sort((i, a) => a.times - i.times);
    },
    getTagged() {
      return this.result.tagged.filter((e) => e.knowledgebase == this.knowledgebase).pop();
    }
  }
}, l5 = { class: "tipichart__tip" }, f5 = { class: "tipichart__bar" };
function c5(e, t, r, n, i, a) {
  return q(), Je(p1, {
    tag: "div",
    class: "tipichart",
    name: "barfade"
  }, {
    default: yt(() => [
      (q(!0), Z($t, null, Ut(i.rows, (s) => (q(), Z("div", {
        class: "tipichart__row",
        key: s.topic,
        style: Bt(a.rowStyle)
      }, [
        K("div", {
          class: "tipichart__tooltip",
          style: Bt({ bottom: `${r.barHeight}px` })
        }, [
          K("div", l5, ve(s.topic) + " " + ve(s.percent) + "%", 1)
        ], 4),
        K("div", {
          class: "tipichart__icon",
          style: Bt(s.iconStyle)
        }, null, 4),
        K("div", f5, [
          K("div", {
            class: "tipichart__backbar",
            style: Bt(s.backbarStyle)
          }, null, 4),
          K("div", {
            class: "tipichart__overbar",
            style: Bt(s.overbarStyle)
          }, null, 4)
        ])
      ], 4))), 128))
    ]),
    _: 1
  });
}
const u5 = /* @__PURE__ */ Le(o5, [["render", c5]]);
var vh = {};
(function(e) {
  (function() {
    var t = e || !1 || this || window;
    t.default = t;
    var r = "http://www.w3.org/2000/xmlns/", n = "http://www.w3.org/1999/xhtml", i = "http://www.w3.org/2000/svg", a = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" [<!ENTITY nbsp "&#160;">]>', s = /url\(["']?(.+?)["']?\)/, o = {
      woff2: "font/woff2",
      woff: "font/woff",
      otf: "application/x-font-opentype",
      ttf: "application/x-font-ttf",
      eot: "application/vnd.ms-fontobject",
      sfnt: "application/font-sfnt",
      svg: "image/svg+xml"
    }, l = function(O) {
      return O instanceof HTMLElement || O instanceof SVGElement;
    }, f = function(O) {
      if (!l(O))
        throw new Error("an HTMLElement or SVGElement is required; got " + O);
    }, c = function(O) {
      return new Promise(function(M, V) {
        l(O) ? M(O) : V(new Error("an HTMLElement or SVGElement is required; got " + O));
      });
    }, u = function(O) {
      return O && O.lastIndexOf("http", 0) === 0 && O.lastIndexOf(window.location.host) === -1;
    }, h = function(O) {
      var M = Object.keys(o).filter(function(V) {
        return O.indexOf("." + V) > 0;
      }).map(function(V) {
        return o[V];
      });
      return M ? M[0] : (console.error("Unknown font format for " + O + ". Fonts may not be working correctly."), "application/octet-stream");
    }, d = function(O) {
      for (var M = "", V = new Uint8Array(O), J = 0; J < V.byteLength; J++)
        M += String.fromCharCode(V[J]);
      return window.btoa(M);
    }, v = function(O, M, V) {
      var J = O.viewBox && O.viewBox.baseVal && O.viewBox.baseVal[V] || M.getAttribute(V) !== null && !M.getAttribute(V).match(/%$/) && parseInt(M.getAttribute(V)) || O.getBoundingClientRect()[V] || parseInt(M.style[V]) || parseInt(window.getComputedStyle(O).getPropertyValue(V));
      return typeof J > "u" || J === null || isNaN(parseFloat(J)) ? 0 : J;
    }, p = function(O, M, V, J) {
      if (O.tagName === "svg")
        return {
          width: V || v(O, M, "width"),
          height: J || v(O, M, "height")
        };
      if (O.getBBox) {
        var le = O.getBBox(), he = le.x, pe = le.y, me = le.width, Me = le.height;
        return {
          width: he + me,
          height: pe + Me
        };
      }
    }, m = function(O) {
      return decodeURIComponent(encodeURIComponent(O).replace(/%([0-9A-F]{2})/g, function(M, V) {
        var J = String.fromCharCode("0x" + V);
        return J === "%" ? "%25" : J;
      }));
    }, g = function(O) {
      for (var M = window.atob(O.split(",")[1]), V = O.split(",")[0].split(":")[1].split(";")[0], J = new ArrayBuffer(M.length), le = new Uint8Array(J), he = 0; he < M.length; he++)
        le[he] = M.charCodeAt(he);
      return new Blob([J], { type: V });
    }, x = function(O, M) {
      if (M)
        try {
          return O.querySelector(M) || O.parentNode && O.parentNode.querySelector(M);
        } catch (V) {
          console.warn('Invalid CSS selector "' + M + '"', V);
        }
    }, _ = function(O, M) {
      var V = O.cssText.match(s), J = V && V[1] || "";
      if (!(!J || J.match(/^data:/) || J === "about:blank")) {
        var le = J.startsWith("../") ? M + "/../" + J : J.startsWith("./") ? M + "/." + J : J;
        return {
          text: O.cssText,
          format: h(le),
          url: le
        };
      }
    }, C = function(O) {
      return Promise.all(Array.from(O.querySelectorAll("image")).map(function(M) {
        var V = M.getAttributeNS("http://www.w3.org/1999/xlink", "href") || M.getAttribute("href");
        return V ? (u(V) && (V += (V.indexOf("?") === -1 ? "?" : "&") + "t=" + (/* @__PURE__ */ new Date()).valueOf()), new Promise(function(J, le) {
          var he = document.createElement("canvas"), pe = new Image();
          pe.crossOrigin = "anonymous", pe.src = V, pe.onerror = function() {
            return le(new Error("Could not load " + V));
          }, pe.onload = function() {
            he.width = pe.width, he.height = pe.height, he.getContext("2d").drawImage(pe, 0, 0), M.setAttributeNS("http://www.w3.org/1999/xlink", "href", he.toDataURL("image/png")), J(!0);
          };
        })) : Promise.resolve(null);
      }));
    }, R = {}, G = function(O) {
      return Promise.all(O.map(function(M) {
        return new Promise(function(V, J) {
          if (R[M.url])
            return V(R[M.url]);
          var le = new XMLHttpRequest();
          le.addEventListener("load", function() {
            var he = d(le.response), pe = M.text.replace(s, 'url("data:' + M.format + ";base64," + he + '")') + `
`;
            R[M.url] = pe, V(pe);
          }), le.addEventListener("error", function(he) {
            console.warn("Failed to load font from: " + M.url, he), R[M.url] = null, V(null);
          }), le.addEventListener("abort", function(he) {
            console.warn("Aborted loading font from: " + M.url, he), V(null);
          }), le.open("GET", M.url), le.responseType = "arraybuffer", le.send();
        });
      })).then(function(M) {
        return M.filter(function(V) {
          return V;
        }).join("");
      });
    }, b = null, L = function() {
      return b || (b = Array.from(document.styleSheets).map(function(O) {
        try {
          return { rules: O.cssRules, href: O.href };
        } catch (M) {
          return console.warn("Stylesheet could not be loaded: " + O.href, M), {};
        }
      }));
    }, P = function(O, M) {
      var V = M || {}, J = V.selectorRemap, le = V.modifyStyle, he = V.modifyCss, pe = V.fonts, me = V.excludeUnusedCss, Me = he || function(D, I) {
        var j = J ? J(D) : D, ee = le ? le(I) : I;
        return j + "{" + ee + `}
`;
      }, Se = [], k = typeof pe > "u", B = pe || [];
      return L().forEach(function(D) {
        var I = D.rules, j = D.href;
        I && Array.from(I).forEach(function(ee) {
          if (typeof ee.style < "u")
            if (x(O, ee.selectorText))
              Se.push(Me(ee.selectorText, ee.style.cssText));
            else if (k && ee.cssText.match(/^@font-face/)) {
              var fe = _(ee, j);
              fe && B.push(fe);
            } else
              me || Se.push(ee.cssText);
        });
      }), G(B).then(function(D) {
        return Se.join(`
`) + D;
      });
    }, N = function() {
      if (!navigator.msSaveOrOpenBlob && !("download" in document.createElement("a")))
        return { popup: window.open() };
    };
    t.prepareSvg = function(F, O, M) {
      f(F);
      var V = O || {}, J = V.left, le = J === void 0 ? 0 : J, he = V.top, pe = he === void 0 ? 0 : he, me = V.width, Me = V.height, Se = V.scale, k = Se === void 0 ? 1 : Se, B = V.responsive, D = B === void 0 ? !1 : B, I = V.excludeCss, j = I === void 0 ? !1 : I;
      return C(F).then(function() {
        var ee = F.cloneNode(!0);
        ee.style.backgroundColor = (O || {}).backgroundColor || F.style.backgroundColor;
        var fe = p(F, ee, me, Me), oe = fe.width, re = fe.height;
        if (F.tagName !== "svg")
          if (F.getBBox) {
            ee.getAttribute("transform") != null && ee.setAttribute("transform", ee.getAttribute("transform").replace(/translate\(.*?\)/, ""));
            var Ce = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            Ce.appendChild(ee), ee = Ce;
          } else {
            console.error("Attempted to render non-SVG element", F);
            return;
          }
        if (ee.setAttribute("version", "1.1"), ee.setAttribute("viewBox", [le, pe, oe, re].join(" ")), ee.getAttribute("xmlns") || ee.setAttributeNS(r, "xmlns", i), ee.getAttribute("xmlns:xlink") || ee.setAttributeNS(r, "xmlns:xlink", "http://www.w3.org/1999/xlink"), D ? (ee.removeAttribute("width"), ee.removeAttribute("height"), ee.setAttribute("preserveAspectRatio", "xMinYMin meet")) : (ee.setAttribute("width", oe * k), ee.setAttribute("height", re * k)), Array.from(ee.querySelectorAll("foreignObject > *")).forEach(function(we) {
          we.setAttributeNS(r, "xmlns", we.tagName === "svg" ? i : n);
        }), j) {
          var _e = document.createElement("div");
          _e.appendChild(ee);
          var Ye = _e.innerHTML;
          if (typeof M == "function")
            M(Ye, oe, re);
          else
            return { src: Ye, width: oe, height: re };
        } else
          return P(F, O).then(function(we) {
            var Ft = document.createElement("style");
            Ft.setAttribute("type", "text/css"), Ft.innerHTML = `<![CDATA[
` + we + `
]]>`;
            var Ie = document.createElement("defs");
            Ie.appendChild(Ft), ee.insertBefore(Ie, ee.firstChild);
            var de = document.createElement("div");
            de.appendChild(ee);
            var mt = de.innerHTML.replace(/NS\d+:href/gi, 'xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href');
            if (typeof M == "function")
              M(mt, oe, re);
            else
              return { src: mt, width: oe, height: re };
          });
      });
    }, t.svgAsDataUri = function(F, O, M) {
      return f(F), t.prepareSvg(F, O).then(function(V) {
        var J = V.src, le = V.width, he = V.height, pe = "data:image/svg+xml;base64," + window.btoa(m(a + J));
        return typeof M == "function" && M(pe, le, he), pe;
      });
    }, t.svgAsPngUri = function(F, O, M) {
      f(F);
      var V = O || {}, J = V.encoderType, le = J === void 0 ? "image/png" : J, he = V.encoderOptions, pe = he === void 0 ? 0.8 : he, me = V.canvg, Me = function(k) {
        var B = k.src, D = k.width, I = k.height, j = document.createElement("canvas"), ee = j.getContext("2d"), fe = window.devicePixelRatio || 1;
        j.width = D * fe, j.height = I * fe, j.style.width = j.width + "px", j.style.height = j.height + "px", ee.setTransform(fe, 0, 0, fe, 0, 0), me ? me(j, B) : ee.drawImage(B, 0, 0);
        var oe = void 0;
        try {
          oe = j.toDataURL(le, pe);
        } catch (re) {
          if (typeof SecurityError < "u" && re instanceof SecurityError || re.name === "SecurityError") {
            console.error("Rendered SVG images cannot be downloaded in this browser.");
            return;
          } else
            throw re;
        }
        return typeof M == "function" && M(oe, j.width, j.height), Promise.resolve(oe);
      };
      return me ? t.prepareSvg(F, O).then(Me) : t.svgAsDataUri(F, O).then(function(Se) {
        return new Promise(function(k, B) {
          var D = new Image();
          D.onload = function() {
            return k(Me({
              src: D,
              width: D.width,
              height: D.height
            }));
          }, D.onerror = function() {
            B(`There was an error loading the data URI as an image on the following SVG
` + window.atob(Se.slice(26)) + `Open the following link to see browser's diagnosis
` + Se);
          }, D.src = Se;
        });
      });
    }, t.download = function(F, O, M) {
      if (navigator.msSaveOrOpenBlob)
        navigator.msSaveOrOpenBlob(g(O), F);
      else {
        var V = document.createElement("a");
        if ("download" in V) {
          V.download = F, V.style.display = "none", document.body.appendChild(V);
          try {
            var J = g(O), le = URL.createObjectURL(J);
            V.href = le, V.onclick = function() {
              return requestAnimationFrame(function() {
                return URL.revokeObjectURL(le);
              });
            };
          } catch (he) {
            console.error(he), console.warn("Error while getting object URL. Falling back to string URL."), V.href = O;
          }
          V.click(), document.body.removeChild(V);
        } else
          M && M.popup && (M.popup.document.title = F, M.popup.location.replace(O));
      }
    }, t.saveSvg = function(F, O, M) {
      var V = N();
      return c(F).then(function(J) {
        return t.svgAsDataUri(J, M || {});
      }).then(function(J) {
        return t.download(O, J, V);
      });
    }, t.saveSvgAsPng = function(F, O, M) {
      var V = N();
      return c(F).then(function(J) {
        return t.svgAsPngUri(J, M || {});
      }).then(function(J) {
        return t.download(O, J, V);
      });
    };
  })();
})(vh);
const h5 = {
  name: "D3Chart",
  data() {
    return {
      chart: {}
    };
  },
  props: {
    config: {
      type: Object,
      required: !0,
      default: () => ({})
    },
    datum: {
      type: Array,
      required: !0,
      default: () => []
    },
    title: {
      type: String,
      default: ""
    },
    source: {
      type: String,
      default: ""
    },
    height: {
      type: Number,
      default: 300
    },
    download: {
      type: String,
      default: "Descargar"
    }
  },
  methods: {
    downloadSVG() {
      const e = this.$refs.chart.getElementsByClassName("chart")[0];
      vh.saveSvgAsPng(e, "chart.png", {
        backgroundColor: "#FFF"
      });
    }
  },
  watch: {
    config: {
      handler(e) {
        this.chart.updateConfig(e);
      },
      deep: !0
    },
    datum(e) {
      this.chart.updateData([...e]);
    },
    height(e) {
      setTimeout(() => {
        this.chart.resizeChart();
      }, 10);
    }
  },
  beforeDestroy() {
    this.chart.destroyChart();
  }
}, d5 = { class: "chart__wrapper" }, p5 = {
  key: 0,
  class: "chart__title"
}, m5 = {
  key: 1,
  class: "chart__source"
}, g5 = {
  key: 2,
  class: "chart__source"
};
function v5(e, t, r, n, i, a) {
  return q(), Z("div", d5, [
    r.title ? (q(), Z("div", p5, ve(r.title), 1)) : Ee("", !0),
    K("div", {
      ref: "chart",
      style: Bt({ height: `${this.height}px` })
    }, null, 4),
    r.source ? (q(), Z("div", m5, ve(r.source), 1)) : Ee("", !0),
    r.download ? (q(), Z("div", g5, [
      K("span", {
        onClick: t[0] || (t[0] = (...s) => a.downloadSVG && a.downloadSVG(...s))
      }, ve(r.download), 1)
    ])) : Ee("", !0)
  ]);
}
const xs = /* @__PURE__ */ Le(h5, [["render", v5]]), x5 = { select: mn };
class _s {
  constructor(t, r, n, i) {
    this.selection = x5.select(t), this.data = r, this.cfg = i, this._setConfig(n), this.onResize = () => {
      this.resizeChart();
    }, window.addEventListener("resize", this.onResize), this.initChart();
  }
  _setConfig(t) {
    Object.keys(t).forEach((r) => {
      t[r] instanceof Object && !(t[r] instanceof Array) ? Object.keys(t[r]).forEach((n) => {
        this.cfg[r][n] = t[r][n];
      }) : this.cfg[r] = t[r];
    });
  }
  /**
  * Init chart
  */
  initChart() {
    console.error("d3chart.initChart not implemented");
  }
  /**
  * Resize chart pipe
  */
  setScales() {
    console.error("d3chart.setScales not implemented");
  }
  /**
  * Set chart dimensional sizes
  */
  setChartDimension() {
    console.error("d3chart.setChartDimension not implemented");
  }
  /**
  * Bind data to main elements groups
  */
  bindData() {
    console.error("d3.chart.bindData not implemented");
  }
  /**
  * Add new chart's elements
  */
  enterElements() {
    console.error("d3.chart.enterElements not implemented");
  }
  /**
  * Update chart's elements based on data change
  */
  updateElements() {
    console.error("d3.chart.updateElements not implemented");
  }
  /**
  * Remove chart's elements without data
  */
  exitElements() {
    console.error("d3.chart.exitElements not implemented");
  }
  /**
  * Set up chart dimensions
  */
  getDimensions() {
    this.cfg.width = parseInt(this.selection.node().offsetWidth) - this.cfg.margin.left - this.cfg.margin.right, this.cfg.height = parseInt(this.selection.node().offsetHeight) - this.cfg.margin.top - this.cfg.margin.bottom;
  }
  /**
  * Returns chart's data
  */
  getData() {
    return this.data;
  }
  /**
  * Add new data elements
  */
  enterData(t) {
    this.data = this.data.concat(t), this.setScales(), this.updateChart();
  }
  /**
  * Update existing data elements
  */
  updateData(t) {
    this.data = [...t], this.setScales(), this.updateChart();
  }
  /**
  * Compute data before operate
  */
  computeData() {
  }
  /**
  * Remove data elements
  */
  exitData(t) {
    this.data.forEach((r, n) => {
      let i = 0;
      Object.keys(t).forEach((a) => {
        t[a] == r[a] && i++;
      }), i == Object.keys(t).length && this.data.splice(n, 1);
    }), this.setScales(), this.updateChart();
  }
  /**
  * Init chart commons elements (div > svg > g; tooltip)
  */
  initChartFrame(t = "undefined") {
    this.wrap = this.selection.append("div").attr("class", "chart__wrap chart__wrap--" + t), this.svg = this.wrap.append("svg").attr("class", "chart chart--" + t), this.g = this.svg.append("g").attr("class", "chart__margin-wrap chart__margin-wrap--" + t).attr("transform", `translate(${this.cfg.margin.left},${this.cfg.margin.top})`), this.selection.selectAll(".chart__tooltip").remove(), this.tooltip = this.wrap.append("div").attr("class", "chart__tooltip chart__tooltip--" + t);
  }
  /**
  * Compute element color
  */
  colorElement(t, r = void 0) {
    if (r = r || this.cfg.key, this.cfg.color.key)
      return t[this.cfg.color.key];
    let n = this.cfg.currentKey ? this.cfg.color.default : this.cfg.color.current;
    return this.cfg.color.scheme && (n = this.colorScale(t[r])), this.cfg.color.keys && this.cfg.color.keys instanceof Object && !(this.cfg.color.keys instanceof Array) && (typeof this.cfg.color.keys[r] == "string" ? n = this.cfg.color.keys[r] : typeof this.cfg.color.keys[t[r]] == "string" && (n = this.cfg.color.keys[t[r]])), this.cfg.currentKey && t[this.cfg.key] === this.cfg.currentKey && (n = this.cfg.color.current), n;
  }
  /**
  * Update chart methods
  */
  updateChart() {
    this.computeData(), this.bindData(), this.setScales(), this.enterElements(), this.updateElements(), this.exitElements();
  }
  /**
  * Resize chart methods
  */
  resizeChart() {
    this.getDimensions(), this.setChartDimension(), this.updateChart();
  }
  /**
  * Update chart configuration
  */
  updateConfig(t) {
    this._setConfig(t), this.resizeChart();
  }
  /**
  * Destroy chart methods
  */
  destroyChart() {
    window.removeEventListener("resize", this.onResize);
  }
}
function xh(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function _5(e) {
  return e.length === 1 && (e = y5(e)), {
    left: function(t, r, n, i) {
      for (n == null && (n = 0), i == null && (i = t.length); n < i; ) {
        var a = n + i >>> 1;
        e(t[a], r) < 0 ? n = a + 1 : i = a;
      }
      return n;
    },
    right: function(t, r, n, i) {
      for (n == null && (n = 0), i == null && (i = t.length); n < i; ) {
        var a = n + i >>> 1;
        e(t[a], r) > 0 ? i = a : n = a + 1;
      }
      return n;
    }
  };
}
function y5(e) {
  return function(t, r) {
    return xh(e(t), r);
  };
}
var w5 = _5(xh), E5 = w5.right;
function S5(e, t) {
  var r = e.length, n = -1, i, a, s;
  if (t == null) {
    for (; ++n < r; )
      if ((i = e[n]) != null && i >= i)
        for (a = s = i; ++n < r; )
          (i = e[n]) != null && (a > i && (a = i), s < i && (s = i));
  } else
    for (; ++n < r; )
      if ((i = t(e[n], n, e)) != null && i >= i)
        for (a = s = i; ++n < r; )
          (i = t(e[n], n, e)) != null && (a > i && (a = i), s < i && (s = i));
  return [a, s];
}
function T5(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
var Lo = Math.sqrt(50), Bo = Math.sqrt(10), $o = Math.sqrt(2);
function A5(e, t, r) {
  var n, i = -1, a, s, o;
  if (t = +t, e = +e, r = +r, e === t && r > 0)
    return [e];
  if ((n = t < e) && (a = e, e = t, t = a), (o = aa(e, t, r)) === 0 || !isFinite(o))
    return [];
  if (o > 0)
    for (e = Math.ceil(e / o), t = Math.floor(t / o), s = new Array(a = Math.ceil(t - e + 1)); ++i < a; )
      s[i] = (e + i) * o;
  else
    for (e = Math.floor(e * o), t = Math.ceil(t * o), s = new Array(a = Math.ceil(e - t + 1)); ++i < a; )
      s[i] = (e - i) / o;
  return n && s.reverse(), s;
}
function aa(e, t, r) {
  var n = (t - e) / Math.max(0, r), i = Math.floor(Math.log(n) / Math.LN10), a = n / Math.pow(10, i);
  return i >= 0 ? (a >= Lo ? 10 : a >= Bo ? 5 : a >= $o ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (a >= Lo ? 10 : a >= Bo ? 5 : a >= $o ? 2 : 1);
}
function C5(e, t, r) {
  var n = Math.abs(t - e) / Math.max(0, r), i = Math.pow(10, Math.floor(Math.log(n) / Math.LN10)), a = n / i;
  return a >= Lo ? i *= 10 : a >= Bo ? i *= 5 : a >= $o && (i *= 2), t < e ? -i : i;
}
function N0(e, t) {
  var r = e.length, n = -1, i, a;
  if (t == null) {
    for (; ++n < r; )
      if ((i = e[n]) != null && i >= i)
        for (a = i; ++n < r; )
          (i = e[n]) != null && i > a && (a = i);
  } else
    for (; ++n < r; )
      if ((i = t(e[n], n, e)) != null && i >= i)
        for (a = i; ++n < r; )
          (i = t(e[n], n, e)) != null && i > a && (a = i);
  return a;
}
function _h(e, t) {
  var r = e.length, n = -1, i, a;
  if (t == null) {
    for (; ++n < r; )
      if ((i = e[n]) != null && i >= i)
        for (a = i; ++n < r; )
          (i = e[n]) != null && a > i && (a = i);
  } else
    for (; ++n < r; )
      if ((i = t(e[n], n, e)) != null && i >= i)
        for (a = i; ++n < r; )
          (i = t(e[n], n, e)) != null && a > i && (a = i);
  return a;
}
function F5(e, t) {
  var r = e.length, n = -1, i, a = 0;
  if (t == null)
    for (; ++n < r; )
      (i = +e[n]) && (a += i);
  else
    for (; ++n < r; )
      (i = +t(e[n], n, e)) && (a += i);
  return a;
}
function ys(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
var Nt = "$";
function ka() {
}
ka.prototype = Ma.prototype = {
  constructor: ka,
  has: function(e) {
    return Nt + e in this;
  },
  get: function(e) {
    return this[Nt + e];
  },
  set: function(e, t) {
    return this[Nt + e] = t, this;
  },
  remove: function(e) {
    var t = Nt + e;
    return t in this && delete this[t];
  },
  clear: function() {
    for (var e in this)
      e[0] === Nt && delete this[e];
  },
  keys: function() {
    var e = [];
    for (var t in this)
      t[0] === Nt && e.push(t.slice(1));
    return e;
  },
  values: function() {
    var e = [];
    for (var t in this)
      t[0] === Nt && e.push(this[t]);
    return e;
  },
  entries: function() {
    var e = [];
    for (var t in this)
      t[0] === Nt && e.push({ key: t.slice(1), value: this[t] });
    return e;
  },
  size: function() {
    var e = 0;
    for (var t in this)
      t[0] === Nt && ++e;
    return e;
  },
  empty: function() {
    for (var e in this)
      if (e[0] === Nt)
        return !1;
    return !0;
  },
  each: function(e) {
    for (var t in this)
      t[0] === Nt && e(this[t], t.slice(1), this);
  }
};
function Ma(e, t) {
  var r = new ka();
  if (e instanceof ka)
    e.each(function(o, l) {
      r.set(l, o);
    });
  else if (Array.isArray(e)) {
    var n = -1, i = e.length, a;
    if (t == null)
      for (; ++n < i; )
        r.set(n, e[n]);
    else
      for (; ++n < i; )
        r.set(t(a = e[n], n, e), a);
  } else if (e)
    for (var s in e)
      r.set(s, e[s]);
  return r;
}
function xf() {
}
var Yr = Ma.prototype;
xf.prototype = {
  constructor: xf,
  has: Yr.has,
  add: function(e) {
    return e += "", this[Nt + e] = e, this;
  },
  remove: Yr.remove,
  clear: Yr.clear,
  values: Yr.keys,
  size: Yr.size,
  empty: Yr.empty,
  each: Yr.each
};
var yh = Array.prototype, O5 = yh.map, Uo = yh.slice, _f = { name: "implicit" };
function Kn() {
  var e = Ma(), t = [], r = [], n = _f;
  function i(a) {
    var s = a + "", o = e.get(s);
    if (!o) {
      if (n !== _f)
        return n;
      e.set(s, o = t.push(a));
    }
    return r[(o - 1) % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length)
      return t.slice();
    t = [], e = Ma();
    for (var s = -1, o = a.length, l, f; ++s < o; )
      e.has(f = (l = a[s]) + "") || e.set(f, t.push(l));
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Uo.call(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Kn(t, r).unknown(n);
  }, ys.apply(i, arguments), i;
}
function wh() {
  var e = Kn().unknown(void 0), t = e.domain, r = e.range, n = [0, 1], i, a, s = !1, o = 0, l = 0, f = 0.5;
  delete e.unknown;
  function c() {
    var u = t().length, h = n[1] < n[0], d = n[h - 0], v = n[1 - h];
    i = (v - d) / Math.max(1, u - o + l * 2), s && (i = Math.floor(i)), d += (v - d - i * (u - o)) * f, a = i * (1 - o), s && (d = Math.round(d), a = Math.round(a));
    var p = T5(u).map(function(m) {
      return d + i * m;
    });
    return r(h ? p.reverse() : p);
  }
  return e.domain = function(u) {
    return arguments.length ? (t(u), c()) : t();
  }, e.range = function(u) {
    return arguments.length ? (n = [+u[0], +u[1]], c()) : n.slice();
  }, e.rangeRound = function(u) {
    return n = [+u[0], +u[1]], s = !0, c();
  }, e.bandwidth = function() {
    return a;
  }, e.step = function() {
    return i;
  }, e.round = function(u) {
    return arguments.length ? (s = !!u, c()) : s;
  }, e.padding = function(u) {
    return arguments.length ? (o = Math.min(1, l = +u), c()) : o;
  }, e.paddingInner = function(u) {
    return arguments.length ? (o = Math.min(1, u), c()) : o;
  }, e.paddingOuter = function(u) {
    return arguments.length ? (l = +u, c()) : l;
  }, e.align = function(u) {
    return arguments.length ? (f = Math.max(0, Math.min(1, u)), c()) : f;
  }, e.copy = function() {
    return wh(t(), n).round(s).paddingInner(o).paddingOuter(l).align(f);
  }, ys.apply(c(), arguments);
}
function L0(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Eh(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t)
    r[n] = t[n];
  return r;
}
function Ri() {
}
var Ti = 0.7, Da = 1 / Ti, Pn = "\\s*([+-]?\\d+)\\s*", Ai = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", or = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", b5 = /^#([0-9a-f]{3,8})$/, k5 = new RegExp("^rgb\\(" + [Pn, Pn, Pn] + "\\)$"), M5 = new RegExp("^rgb\\(" + [or, or, or] + "\\)$"), D5 = new RegExp("^rgba\\(" + [Pn, Pn, Pn, Ai] + "\\)$"), I5 = new RegExp("^rgba\\(" + [or, or, or, Ai] + "\\)$"), P5 = new RegExp("^hsl\\(" + [Ai, or, or] + "\\)$"), R5 = new RegExp("^hsla\\(" + [Ai, or, or, Ai] + "\\)$"), yf = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
L0(Ri, ln, {
  copy: function(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: wf,
  // Deprecated! Use color.formatHex.
  formatHex: wf,
  formatHsl: N5,
  formatRgb: Ef,
  toString: Ef
});
function wf() {
  return this.rgb().formatHex();
}
function N5() {
  return Sh(this).formatHsl();
}
function Ef() {
  return this.rgb().formatRgb();
}
function ln(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = b5.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Sf(t) : r === 3 ? new Dt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Zi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Zi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = k5.exec(e)) ? new Dt(t[1], t[2], t[3], 1) : (t = M5.exec(e)) ? new Dt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = D5.exec(e)) ? Zi(t[1], t[2], t[3], t[4]) : (t = I5.exec(e)) ? Zi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = P5.exec(e)) ? Cf(t[1], t[2] / 100, t[3] / 100, 1) : (t = R5.exec(e)) ? Cf(t[1], t[2] / 100, t[3] / 100, t[4]) : yf.hasOwnProperty(e) ? Sf(yf[e]) : e === "transparent" ? new Dt(NaN, NaN, NaN, 0) : null;
}
function Sf(e) {
  return new Dt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Zi(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Dt(e, t, r, n);
}
function L5(e) {
  return e instanceof Ri || (e = ln(e)), e ? (e = e.rgb(), new Dt(e.r, e.g, e.b, e.opacity)) : new Dt();
}
function Ho(e, t, r, n) {
  return arguments.length === 1 ? L5(e) : new Dt(e, t, r, n ?? 1);
}
function Dt(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
L0(Dt, Ho, Eh(Ri, {
  brighter: function(e) {
    return e = e == null ? Da : Math.pow(Da, e), new Dt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker: function(e) {
    return e = e == null ? Ti : Math.pow(Ti, e), new Dt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Tf,
  // Deprecated! Use color.formatHex.
  formatHex: Tf,
  formatRgb: Af,
  toString: Af
}));
function Tf() {
  return "#" + ho(this.r) + ho(this.g) + ho(this.b);
}
function Af() {
  var e = this.opacity;
  return e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e)), (e === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (e === 1 ? ")" : ", " + e + ")");
}
function ho(e) {
  return e = Math.max(0, Math.min(255, Math.round(e) || 0)), (e < 16 ? "0" : "") + e.toString(16);
}
function Cf(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ar(e, t, r, n);
}
function Sh(e) {
  if (e instanceof ar)
    return new ar(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ri || (e = ln(e)), !e)
    return new ar();
  if (e instanceof ar)
    return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), s = NaN, o = a - i, l = (a + i) / 2;
  return o ? (t === a ? s = (r - n) / o + (r < n) * 6 : r === a ? s = (n - t) / o + 2 : s = (t - r) / o + 4, o /= l < 0.5 ? a + i : 2 - a - i, s *= 60) : o = l > 0 && l < 1 ? 0 : s, new ar(s, o, l, e.opacity);
}
function B5(e, t, r, n) {
  return arguments.length === 1 ? Sh(e) : new ar(e, t, r, n ?? 1);
}
function ar(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
L0(ar, B5, Eh(Ri, {
  brighter: function(e) {
    return e = e == null ? Da : Math.pow(Da, e), new ar(this.h, this.s, this.l * e, this.opacity);
  },
  darker: function(e) {
    return e = e == null ? Ti : Math.pow(Ti, e), new ar(this.h, this.s, this.l * e, this.opacity);
  },
  rgb: function() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new Dt(
      po(e >= 240 ? e - 240 : e + 120, i, n),
      po(e, i, n),
      po(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl: function() {
    var e = this.opacity;
    return e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e)), (e === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (e === 1 ? ")" : ", " + e + ")");
  }
}));
function po(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
function B0(e) {
  return function() {
    return e;
  };
}
function $5(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function U5(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function H5(e) {
  return (e = +e) == 1 ? Th : function(t, r) {
    return r - t ? U5(t, r, e) : B0(isNaN(t) ? r : t);
  };
}
function Th(e, t) {
  var r = t - e;
  return r ? $5(e, r) : B0(isNaN(e) ? t : e);
}
const Ia = function e(t) {
  var r = H5(t);
  function n(i, a) {
    var s = r((i = Ho(i)).r, (a = Ho(a)).r), o = r(i.g, a.g), l = r(i.b, a.b), f = Th(i.opacity, a.opacity);
    return function(c) {
      return i.r = s(c), i.g = o(c), i.b = l(c), i.opacity = f(c), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function W5(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i)
      n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function z5(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function V5(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), s;
  for (s = 0; s < n; ++s)
    i[s] = Ni(e[s], t[s]);
  for (; s < r; ++s)
    a[s] = t[s];
  return function(o) {
    for (s = 0; s < n; ++s)
      a[s] = i[s](o);
    return a;
  };
}
function G5(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function Vt(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function X5(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = Ni(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r)
      n[i] = r[i](a);
    return n;
  };
}
var Wo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, mo = new RegExp(Wo.source, "g");
function j5(e) {
  return function() {
    return e;
  };
}
function Y5(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ah(e, t) {
  var r = Wo.lastIndex = mo.lastIndex = 0, n, i, a, s = -1, o = [], l = [];
  for (e = e + "", t = t + ""; (n = Wo.exec(e)) && (i = mo.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), o[s] ? o[s] += a : o[++s] = a), (n = n[0]) === (i = i[0]) ? o[s] ? o[s] += i : o[++s] = i : (o[++s] = null, l.push({ i: s, x: Vt(n, i) })), r = mo.lastIndex;
  return r < t.length && (a = t.slice(r), o[s] ? o[s] += a : o[++s] = a), o.length < 2 ? l[0] ? Y5(l[0].x) : j5(t) : (t = l.length, function(f) {
    for (var c = 0, u; c < t; ++c)
      o[(u = l[c]).i] = u.x(f);
    return o.join("");
  });
}
function Ni(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? B0(t) : (r === "number" ? Vt : r === "string" ? (n = ln(t)) ? (t = n, Ia) : Ah : t instanceof ln ? Ia : t instanceof Date ? G5 : z5(t) ? W5 : Array.isArray(t) ? V5 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? X5 : Vt)(e, t);
}
function q5(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
var Ff = 180 / Math.PI, zo = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ch(e, t, r, n, i, a) {
  var s, o, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * r + t * n) && (r -= e * l, n -= t * l), (o = Math.sqrt(r * r + n * n)) && (r /= o, n /= o, l /= o), e * n < t * r && (e = -e, t = -t, l = -l, s = -s), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(t, e) * Ff,
    skewX: Math.atan(l) * Ff,
    scaleX: s,
    scaleY: o
  };
}
var ri, go, Of, ea;
function K5(e) {
  return e === "none" ? zo : (ri || (ri = document.createElement("DIV"), go = document.documentElement, Of = document.defaultView), ri.style.transform = e, e = Of.getComputedStyle(go.appendChild(ri), null).getPropertyValue("transform"), go.removeChild(ri), e = e.slice(7, -1).split(","), Ch(+e[0], +e[1], +e[2], +e[3], +e[4], +e[5]));
}
function J5(e) {
  return e == null || (ea || (ea = document.createElementNS("http://www.w3.org/2000/svg", "g")), ea.setAttribute("transform", e), !(e = ea.transform.baseVal.consolidate())) ? zo : (e = e.matrix, Ch(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Fh(e, t, r, n) {
  function i(f) {
    return f.length ? f.pop() + " " : "";
  }
  function a(f, c, u, h, d, v) {
    if (f !== u || c !== h) {
      var p = d.push("translate(", null, t, null, r);
      v.push({ i: p - 4, x: Vt(f, u) }, { i: p - 2, x: Vt(c, h) });
    } else
      (u || h) && d.push("translate(" + u + t + h + r);
  }
  function s(f, c, u, h) {
    f !== c ? (f - c > 180 ? c += 360 : c - f > 180 && (f += 360), h.push({ i: u.push(i(u) + "rotate(", null, n) - 2, x: Vt(f, c) })) : c && u.push(i(u) + "rotate(" + c + n);
  }
  function o(f, c, u, h) {
    f !== c ? h.push({ i: u.push(i(u) + "skewX(", null, n) - 2, x: Vt(f, c) }) : c && u.push(i(u) + "skewX(" + c + n);
  }
  function l(f, c, u, h, d, v) {
    if (f !== u || c !== h) {
      var p = d.push(i(d) + "scale(", null, ",", null, ")");
      v.push({ i: p - 4, x: Vt(f, u) }, { i: p - 2, x: Vt(c, h) });
    } else
      (u !== 1 || h !== 1) && d.push(i(d) + "scale(" + u + "," + h + ")");
  }
  return function(f, c) {
    var u = [], h = [];
    return f = e(f), c = e(c), a(f.translateX, f.translateY, c.translateX, c.translateY, u, h), s(f.rotate, c.rotate, u, h), o(f.skewX, c.skewX, u, h), l(f.scaleX, f.scaleY, c.scaleX, c.scaleY, u, h), f = c = null, function(d) {
      for (var v = -1, p = h.length, m; ++v < p; )
        u[(m = h[v]).i] = m.x(d);
      return u.join("");
    };
  };
}
var Q5 = Fh(K5, "px, ", "px)", "deg)"), Z5 = Fh(J5, ", ", ")", ")");
function eC(e) {
  return function() {
    return e;
  };
}
function tC(e) {
  return +e;
}
var bf = [0, 1];
function sr(e) {
  return e;
}
function Vo(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : eC(isNaN(t) ? NaN : 0.5);
}
function kf(e) {
  var t = e[0], r = e[e.length - 1], n;
  return t > r && (n = t, t = r, r = n), function(i) {
    return Math.max(t, Math.min(r, i));
  };
}
function rC(e, t, r) {
  var n = e[0], i = e[1], a = t[0], s = t[1];
  return i < n ? (n = Vo(i, n), a = r(s, a)) : (n = Vo(n, i), a = r(a, s)), function(o) {
    return a(n(o));
  };
}
function nC(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), s = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++s < n; )
    i[s] = Vo(e[s], e[s + 1]), a[s] = r(t[s], t[s + 1]);
  return function(o) {
    var l = E5(e, o, 1, n) - 1;
    return a[l](i[l](o));
  };
}
function Oh(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function bh() {
  var e = bf, t = bf, r = Ni, n, i, a, s = sr, o, l, f;
  function c() {
    return o = Math.min(e.length, t.length) > 2 ? nC : rC, l = f = null, u;
  }
  function u(h) {
    return isNaN(h = +h) ? a : (l || (l = o(e.map(n), t, r)))(n(s(h)));
  }
  return u.invert = function(h) {
    return s(i((f || (f = o(t, e.map(n), Vt)))(h)));
  }, u.domain = function(h) {
    return arguments.length ? (e = O5.call(h, tC), s === sr || (s = kf(e)), c()) : e.slice();
  }, u.range = function(h) {
    return arguments.length ? (t = Uo.call(h), c()) : t.slice();
  }, u.rangeRound = function(h) {
    return t = Uo.call(h), r = q5, c();
  }, u.clamp = function(h) {
    return arguments.length ? (s = h ? kf(e) : sr, u) : s !== sr;
  }, u.interpolate = function(h) {
    return arguments.length ? (r = h, c()) : r;
  }, u.unknown = function(h) {
    return arguments.length ? (a = h, u) : a;
  }, function(h, d) {
    return n = h, i = d, c();
  };
}
function iC(e, t) {
  return bh()(e, t);
}
function aC(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Pa(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Hn(e) {
  return e = Pa(Math.abs(e)), e ? e[1] : NaN;
}
function sC(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], s = 0, o = e[0], l = 0; i > 0 && o > 0 && (l + o + 1 > n && (o = Math.max(1, n - l)), a.push(r.substring(i -= o, i + o)), !((l += o + 1) > n)); )
      o = e[s = (s + 1) % e.length];
    return a.reverse().join(t);
  };
}
function oC(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var lC = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ra(e) {
  if (!(t = lC.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new $0({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
Ra.prototype = $0.prototype;
function $0(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
$0.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function fC(e) {
  e:
    for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
      switch (e[r]) {
        case ".":
          n = i = r;
          break;
        case "0":
          n === 0 && (n = r), i = r;
          break;
        default:
          if (!+e[r])
            break e;
          n > 0 && (n = 0);
          break;
      }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var kh;
function cC(e, t) {
  var r = Pa(e, t);
  if (!r)
    return e + "";
  var n = r[0], i = r[1], a = i - (kh = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, s = n.length;
  return a === s ? n : a > s ? n + new Array(a - s + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Pa(e, Math.max(0, t + a - 1))[0];
}
function Mf(e, t) {
  var r = Pa(e, t);
  if (!r)
    return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Df = {
  "%": function(e, t) {
    return (e * 100).toFixed(t);
  },
  b: function(e) {
    return Math.round(e).toString(2);
  },
  c: function(e) {
    return e + "";
  },
  d: aC,
  e: function(e, t) {
    return e.toExponential(t);
  },
  f: function(e, t) {
    return e.toFixed(t);
  },
  g: function(e, t) {
    return e.toPrecision(t);
  },
  o: function(e) {
    return Math.round(e).toString(8);
  },
  p: function(e, t) {
    return Mf(e * 100, t);
  },
  r: Mf,
  s: cC,
  X: function(e) {
    return Math.round(e).toString(16).toUpperCase();
  },
  x: function(e) {
    return Math.round(e).toString(16);
  }
};
function If(e) {
  return e;
}
var Pf = Array.prototype.map, Rf = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function uC(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? If : sC(Pf.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? If : oC(Pf.call(e.numerals, String)), s = e.percent === void 0 ? "%" : e.percent + "", o = e.minus === void 0 ? "-" : e.minus + "", l = e.nan === void 0 ? "NaN" : e.nan + "";
  function f(u) {
    u = Ra(u);
    var h = u.fill, d = u.align, v = u.sign, p = u.symbol, m = u.zero, g = u.width, x = u.comma, _ = u.precision, C = u.trim, R = u.type;
    R === "n" ? (x = !0, R = "g") : Df[R] || (_ === void 0 && (_ = 12), C = !0, R = "g"), (m || h === "0" && d === "=") && (m = !0, h = "0", d = "=");
    var G = p === "$" ? r : p === "#" && /[boxX]/.test(R) ? "0" + R.toLowerCase() : "", b = p === "$" ? n : /[%p]/.test(R) ? s : "", L = Df[R], P = /[defgprs%]/.test(R);
    _ = _ === void 0 ? 6 : /[gprs]/.test(R) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
    function N(F) {
      var O = G, M = b, V, J, le;
      if (R === "c")
        M = L(F) + M, F = "";
      else {
        F = +F;
        var he = F < 0 || 1 / F < 0;
        if (F = isNaN(F) ? l : L(Math.abs(F), _), C && (F = fC(F)), he && +F == 0 && v !== "+" && (he = !1), O = (he ? v === "(" ? v : o : v === "-" || v === "(" ? "" : v) + O, M = (R === "s" ? Rf[8 + kh / 3] : "") + M + (he && v === "(" ? ")" : ""), P) {
          for (V = -1, J = F.length; ++V < J; )
            if (le = F.charCodeAt(V), 48 > le || le > 57) {
              M = (le === 46 ? i + F.slice(V + 1) : F.slice(V)) + M, F = F.slice(0, V);
              break;
            }
        }
      }
      x && !m && (F = t(F, 1 / 0));
      var pe = O.length + F.length + M.length, me = pe < g ? new Array(g - pe + 1).join(h) : "";
      switch (x && m && (F = t(me + F, me.length ? g - M.length : 1 / 0), me = ""), d) {
        case "<":
          F = O + F + M + me;
          break;
        case "=":
          F = O + me + F + M;
          break;
        case "^":
          F = me.slice(0, pe = me.length >> 1) + O + F + M + me.slice(pe);
          break;
        default:
          F = me + O + F + M;
          break;
      }
      return a(F);
    }
    return N.toString = function() {
      return u + "";
    }, N;
  }
  function c(u, h) {
    var d = f((u = Ra(u), u.type = "f", u)), v = Math.max(-8, Math.min(8, Math.floor(Hn(h) / 3))) * 3, p = Math.pow(10, -v), m = Rf[8 + v / 3];
    return function(g) {
      return d(p * g) + m;
    };
  }
  return {
    format: f,
    formatPrefix: c
  };
}
var ta, Mh, Dh;
hC({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});
function hC(e) {
  return ta = uC(e), Mh = ta.format, Dh = ta.formatPrefix, ta;
}
function dC(e) {
  return Math.max(0, -Hn(Math.abs(e)));
}
function pC(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Hn(t) / 3))) * 3 - Hn(Math.abs(e)));
}
function mC(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Hn(t) - Hn(e)) + 1;
}
function gC(e, t, r, n) {
  var i = C5(e, t, r), a;
  switch (n = Ra(n ?? ",f"), n.type) {
    case "s": {
      var s = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = pC(i, s)) && (n.precision = a), Dh(n, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = mC(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = dC(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Mh(n);
}
function Ih(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return A5(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return gC(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, s = n[i], o = n[a], l;
    return o < s && (l = s, s = o, o = l, l = i, i = a, a = l), l = aa(s, o, r), l > 0 ? (s = Math.floor(s / l) * l, o = Math.ceil(o / l) * l, l = aa(s, o, r)) : l < 0 && (s = Math.ceil(s * l) / l, o = Math.floor(o * l) / l, l = aa(s, o, r)), l > 0 ? (n[i] = Math.floor(s / l) * l, n[a] = Math.ceil(o / l) * l, t(n)) : l < 0 && (n[i] = Math.ceil(s * l) / l, n[a] = Math.floor(o * l) / l, t(n)), e;
  }, e;
}
function Li() {
  var e = iC(sr, sr);
  return e.copy = function() {
    return Oh(e, Li());
  }, ys.apply(e, arguments), Ih(e);
}
function Nf(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function vC(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function xC(e) {
  return e < 0 ? -e * e : e * e;
}
function _C(e) {
  var t = e(sr, sr), r = 1;
  function n() {
    return r === 1 ? e(sr, sr) : r === 0.5 ? e(vC, xC) : e(Nf(r), Nf(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, Ih(t);
}
function Ph() {
  var e = _C(bh());
  return e.copy = function() {
    return Oh(e, Ph()).exponent(e.exponent());
  }, ys.apply(e, arguments), e;
}
function yC() {
  return Ph.apply(null, arguments).exponent(0.5);
}
function wC(e) {
  var t = 0, r = e.children, n = r && r.length;
  if (!n)
    t = 1;
  else
    for (; --n >= 0; )
      t += r[n].value;
  e.value = t;
}
function EC() {
  return this.eachAfter(wC);
}
function SC(e) {
  var t = this, r, n = [t], i, a, s;
  do
    for (r = n.reverse(), n = []; t = r.pop(); )
      if (e(t), i = t.children, i)
        for (a = 0, s = i.length; a < s; ++a)
          n.push(i[a]);
  while (n.length);
  return this;
}
function TC(e) {
  for (var t = this, r = [t], n, i; t = r.pop(); )
    if (e(t), n = t.children, n)
      for (i = n.length - 1; i >= 0; --i)
        r.push(n[i]);
  return this;
}
function AC(e) {
  for (var t = this, r = [t], n = [], i, a, s; t = r.pop(); )
    if (n.push(t), i = t.children, i)
      for (a = 0, s = i.length; a < s; ++a)
        r.push(i[a]);
  for (; t = n.pop(); )
    e(t);
  return this;
}
function CC(e) {
  return this.eachAfter(function(t) {
    for (var r = +e(t.data) || 0, n = t.children, i = n && n.length; --i >= 0; )
      r += n[i].value;
    t.value = r;
  });
}
function FC(e) {
  return this.eachBefore(function(t) {
    t.children && t.children.sort(e);
  });
}
function OC(e) {
  for (var t = this, r = bC(t, e), n = [t]; t !== r; )
    t = t.parent, n.push(t);
  for (var i = n.length; e !== r; )
    n.splice(i, 0, e), e = e.parent;
  return n;
}
function bC(e, t) {
  if (e === t)
    return e;
  var r = e.ancestors(), n = t.ancestors(), i = null;
  for (e = r.pop(), t = n.pop(); e === t; )
    i = e, e = r.pop(), t = n.pop();
  return i;
}
function kC() {
  for (var e = this, t = [e]; e = e.parent; )
    t.push(e);
  return t;
}
function MC() {
  var e = [];
  return this.each(function(t) {
    e.push(t);
  }), e;
}
function DC() {
  var e = [];
  return this.eachBefore(function(t) {
    t.children || e.push(t);
  }), e;
}
function IC() {
  var e = this, t = [];
  return e.each(function(r) {
    r !== e && t.push({ source: r.parent, target: r });
  }), t;
}
function U0(e, t) {
  var r = new Na(e), n = +e.value && (r.value = e.value), i, a = [r], s, o, l, f;
  for (t == null && (t = RC); i = a.pop(); )
    if (n && (i.value = +i.data.value), (o = t(i.data)) && (f = o.length))
      for (i.children = new Array(f), l = f - 1; l >= 0; --l)
        a.push(s = i.children[l] = new Na(o[l])), s.parent = i, s.depth = i.depth + 1;
  return r.eachBefore(LC);
}
function PC() {
  return U0(this).eachBefore(NC);
}
function RC(e) {
  return e.children;
}
function NC(e) {
  e.data = e.data.data;
}
function LC(e) {
  var t = 0;
  do
    e.height = t;
  while ((e = e.parent) && e.height < ++t);
}
function Na(e) {
  this.data = e, this.depth = this.height = 0, this.parent = null;
}
Na.prototype = U0.prototype = {
  constructor: Na,
  count: EC,
  each: SC,
  eachAfter: AC,
  eachBefore: TC,
  sum: CC,
  sort: FC,
  path: OC,
  ancestors: kC,
  descendants: MC,
  leaves: DC,
  links: IC,
  copy: PC
};
function BC(e) {
  e.x0 = Math.round(e.x0), e.y0 = Math.round(e.y0), e.x1 = Math.round(e.x1), e.y1 = Math.round(e.y1);
}
function $C(e, t, r, n, i) {
  for (var a = e.children, s, o = -1, l = a.length, f = e.value && (n - t) / e.value; ++o < l; )
    s = a[o], s.y0 = r, s.y1 = i, s.x0 = t, s.x1 = t += s.value * f;
}
function UC() {
  var e = 1, t = 1, r = 0, n = !1;
  function i(s) {
    var o = s.height + 1;
    return s.x0 = s.y0 = r, s.x1 = e, s.y1 = t / o, s.eachBefore(a(t, o)), n && s.eachBefore(BC), s;
  }
  function a(s, o) {
    return function(l) {
      l.children && $C(l, l.x0, s * (l.depth + 1) / o, l.x1, s * (l.depth + 2) / o);
      var f = l.x0, c = l.y0, u = l.x1 - r, h = l.y1 - r;
      u < f && (f = u = (f + u) / 2), h < c && (c = h = (c + h) / 2), l.x0 = f, l.y0 = c, l.x1 = u, l.y1 = h;
    };
  }
  return i.round = function(s) {
    return arguments.length ? (n = !!s, i) : n;
  }, i.size = function(s) {
    return arguments.length ? (e = +s[0], t = +s[1], i) : [e, t];
  }, i.padding = function(s) {
    return arguments.length ? (r = +s, i) : r;
  }, i;
}
var Go = Math.PI, Xo = 2 * Go, Kr = 1e-6, HC = Xo - Kr;
function jo() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function H0() {
  return new jo();
}
jo.prototype = H0.prototype = {
  constructor: jo,
  moveTo: function(e, t) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
  },
  closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  },
  lineTo: function(e, t) {
    this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
  },
  quadraticCurveTo: function(e, t, r, n) {
    this._ += "Q" + +e + "," + +t + "," + (this._x1 = +r) + "," + (this._y1 = +n);
  },
  bezierCurveTo: function(e, t, r, n, i, a) {
    this._ += "C" + +e + "," + +t + "," + +r + "," + +n + "," + (this._x1 = +i) + "," + (this._y1 = +a);
  },
  arcTo: function(e, t, r, n, i) {
    e = +e, t = +t, r = +r, n = +n, i = +i;
    var a = this._x1, s = this._y1, o = r - e, l = n - t, f = a - e, c = s - t, u = f * f + c * c;
    if (i < 0)
      throw new Error("negative radius: " + i);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (u > Kr)
      if (!(Math.abs(c * o - l * f) > Kr) || !i)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var h = r - a, d = n - s, v = o * o + l * l, p = h * h + d * d, m = Math.sqrt(v), g = Math.sqrt(u), x = i * Math.tan((Go - Math.acos((v + u - p) / (2 * m * g))) / 2), _ = x / g, C = x / m;
        Math.abs(_ - 1) > Kr && (this._ += "L" + (e + _ * f) + "," + (t + _ * c)), this._ += "A" + i + "," + i + ",0,0," + +(c * h > f * d) + "," + (this._x1 = e + C * o) + "," + (this._y1 = t + C * l);
      }
  },
  arc: function(e, t, r, n, i, a) {
    e = +e, t = +t, r = +r, a = !!a;
    var s = r * Math.cos(n), o = r * Math.sin(n), l = e + s, f = t + o, c = 1 ^ a, u = a ? n - i : i - n;
    if (r < 0)
      throw new Error("negative radius: " + r);
    this._x1 === null ? this._ += "M" + l + "," + f : (Math.abs(this._x1 - l) > Kr || Math.abs(this._y1 - f) > Kr) && (this._ += "L" + l + "," + f), r && (u < 0 && (u = u % Xo + Xo), u > HC ? this._ += "A" + r + "," + r + ",0,1," + c + "," + (e - s) + "," + (t - o) + "A" + r + "," + r + ",0,1," + c + "," + (this._x1 = l) + "," + (this._y1 = f) : u > Kr && (this._ += "A" + r + "," + r + ",0," + +(u >= Go) + "," + c + "," + (this._x1 = e + r * Math.cos(i)) + "," + (this._y1 = t + r * Math.sin(i))));
  },
  rect: function(e, t, r, n) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +r + "v" + +n + "h" + -r + "Z";
  },
  toString: function() {
    return this._;
  }
};
function xt(e) {
  return function() {
    return e;
  };
}
var Lf = Math.abs, lt = Math.atan2, qr = Math.cos, WC = Math.max, vo = Math.min, Zt = Math.sin, Fn = Math.sqrt, St = 1e-12, Ci = Math.PI, La = Ci / 2, sa = 2 * Ci;
function zC(e) {
  return e > 1 ? 0 : e < -1 ? Ci : Math.acos(e);
}
function Bf(e) {
  return e >= 1 ? La : e <= -1 ? -La : Math.asin(e);
}
function VC(e) {
  return e.innerRadius;
}
function GC(e) {
  return e.outerRadius;
}
function XC(e) {
  return e.startAngle;
}
function jC(e) {
  return e.endAngle;
}
function YC(e) {
  return e && e.padAngle;
}
function qC(e, t, r, n, i, a, s, o) {
  var l = r - e, f = n - t, c = s - i, u = o - a, h = u * l - c * f;
  if (!(h * h < St))
    return h = (c * (t - a) - u * (e - i)) / h, [e + h * l, t + h * f];
}
function ra(e, t, r, n, i, a, s) {
  var o = e - r, l = t - n, f = (s ? a : -a) / Fn(o * o + l * l), c = f * l, u = -f * o, h = e + c, d = t + u, v = r + c, p = n + u, m = (h + v) / 2, g = (d + p) / 2, x = v - h, _ = p - d, C = x * x + _ * _, R = i - a, G = h * p - v * d, b = (_ < 0 ? -1 : 1) * Fn(WC(0, R * R * C - G * G)), L = (G * _ - x * b) / C, P = (-G * x - _ * b) / C, N = (G * _ + x * b) / C, F = (-G * x + _ * b) / C, O = L - m, M = P - g, V = N - m, J = F - g;
  return O * O + M * M > V * V + J * J && (L = N, P = F), {
    cx: L,
    cy: P,
    x01: -c,
    y01: -u,
    x11: L * (i / R - 1),
    y11: P * (i / R - 1)
  };
}
function Rh() {
  var e = VC, t = GC, r = xt(0), n = null, i = XC, a = jC, s = YC, o = null;
  function l() {
    var f, c, u = +e.apply(this, arguments), h = +t.apply(this, arguments), d = i.apply(this, arguments) - La, v = a.apply(this, arguments) - La, p = Lf(v - d), m = v > d;
    if (o || (o = f = H0()), h < u && (c = h, h = u, u = c), !(h > St))
      o.moveTo(0, 0);
    else if (p > sa - St)
      o.moveTo(h * qr(d), h * Zt(d)), o.arc(0, 0, h, d, v, !m), u > St && (o.moveTo(u * qr(v), u * Zt(v)), o.arc(0, 0, u, v, d, m));
    else {
      var g = d, x = v, _ = d, C = v, R = p, G = p, b = s.apply(this, arguments) / 2, L = b > St && (n ? +n.apply(this, arguments) : Fn(u * u + h * h)), P = vo(Lf(h - u) / 2, +r.apply(this, arguments)), N = P, F = P, O, M;
      if (L > St) {
        var V = Bf(L / u * Zt(b)), J = Bf(L / h * Zt(b));
        (R -= V * 2) > St ? (V *= m ? 1 : -1, _ += V, C -= V) : (R = 0, _ = C = (d + v) / 2), (G -= J * 2) > St ? (J *= m ? 1 : -1, g += J, x -= J) : (G = 0, g = x = (d + v) / 2);
      }
      var le = h * qr(g), he = h * Zt(g), pe = u * qr(C), me = u * Zt(C);
      if (P > St) {
        var Me = h * qr(x), Se = h * Zt(x), k = u * qr(_), B = u * Zt(_), D;
        if (p < Ci && (D = qC(le, he, k, B, Me, Se, pe, me))) {
          var I = le - D[0], j = he - D[1], ee = Me - D[0], fe = Se - D[1], oe = 1 / Zt(zC((I * ee + j * fe) / (Fn(I * I + j * j) * Fn(ee * ee + fe * fe))) / 2), re = Fn(D[0] * D[0] + D[1] * D[1]);
          N = vo(P, (u - re) / (oe - 1)), F = vo(P, (h - re) / (oe + 1));
        }
      }
      G > St ? F > St ? (O = ra(k, B, le, he, h, F, m), M = ra(Me, Se, pe, me, h, F, m), o.moveTo(O.cx + O.x01, O.cy + O.y01), F < P ? o.arc(O.cx, O.cy, F, lt(O.y01, O.x01), lt(M.y01, M.x01), !m) : (o.arc(O.cx, O.cy, F, lt(O.y01, O.x01), lt(O.y11, O.x11), !m), o.arc(0, 0, h, lt(O.cy + O.y11, O.cx + O.x11), lt(M.cy + M.y11, M.cx + M.x11), !m), o.arc(M.cx, M.cy, F, lt(M.y11, M.x11), lt(M.y01, M.x01), !m))) : (o.moveTo(le, he), o.arc(0, 0, h, g, x, !m)) : o.moveTo(le, he), !(u > St) || !(R > St) ? o.lineTo(pe, me) : N > St ? (O = ra(pe, me, Me, Se, u, -N, m), M = ra(le, he, k, B, u, -N, m), o.lineTo(O.cx + O.x01, O.cy + O.y01), N < P ? o.arc(O.cx, O.cy, N, lt(O.y01, O.x01), lt(M.y01, M.x01), !m) : (o.arc(O.cx, O.cy, N, lt(O.y01, O.x01), lt(O.y11, O.x11), !m), o.arc(0, 0, u, lt(O.cy + O.y11, O.cx + O.x11), lt(M.cy + M.y11, M.cx + M.x11), m), o.arc(M.cx, M.cy, N, lt(M.y11, M.x11), lt(M.y01, M.x01), !m))) : o.arc(0, 0, u, C, _, m);
    }
    if (o.closePath(), f)
      return o = null, f + "" || null;
  }
  return l.centroid = function() {
    var f = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, c = (+i.apply(this, arguments) + +a.apply(this, arguments)) / 2 - Ci / 2;
    return [qr(c) * f, Zt(c) * f];
  }, l.innerRadius = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : xt(+f), l) : e;
  }, l.outerRadius = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : xt(+f), l) : t;
  }, l.cornerRadius = function(f) {
    return arguments.length ? (r = typeof f == "function" ? f : xt(+f), l) : r;
  }, l.padRadius = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : xt(+f), l) : n;
  }, l.startAngle = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : xt(+f), l) : i;
  }, l.endAngle = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : xt(+f), l) : a;
  }, l.padAngle = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : xt(+f), l) : s;
  }, l.context = function(f) {
    return arguments.length ? (o = f ?? null, l) : o;
  }, l;
}
function KC(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function JC(e) {
  return e;
}
function QC() {
  var e = JC, t = KC, r = null, n = xt(0), i = xt(sa), a = xt(0);
  function s(o) {
    var l, f = o.length, c, u, h = 0, d = new Array(f), v = new Array(f), p = +n.apply(this, arguments), m = Math.min(sa, Math.max(-sa, i.apply(this, arguments) - p)), g, x = Math.min(Math.abs(m) / f, a.apply(this, arguments)), _ = x * (m < 0 ? -1 : 1), C;
    for (l = 0; l < f; ++l)
      (C = v[d[l] = l] = +e(o[l], l, o)) > 0 && (h += C);
    for (t != null ? d.sort(function(R, G) {
      return t(v[R], v[G]);
    }) : r != null && d.sort(function(R, G) {
      return r(o[R], o[G]);
    }), l = 0, u = h ? (m - f * _) / h : 0; l < f; ++l, p = g)
      c = d[l], C = v[c], g = p + (C > 0 ? C * u : 0) + _, v[c] = {
        data: o[c],
        index: l,
        value: C,
        startAngle: p,
        endAngle: g,
        padAngle: x
      };
    return v;
  }
  return s.value = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : xt(+o), s) : e;
  }, s.sortValues = function(o) {
    return arguments.length ? (t = o, r = null, s) : t;
  }, s.sort = function(o) {
    return arguments.length ? (r = o, t = null, s) : r;
  }, s.startAngle = function(o) {
    return arguments.length ? (n = typeof o == "function" ? o : xt(+o), s) : n;
  }, s.endAngle = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : xt(+o), s) : i;
  }, s.padAngle = function(o) {
    return arguments.length ? (a = typeof o == "function" ? o : xt(+o), s) : a;
  }, s;
}
var ZC = { value: function() {
} };
function W0() {
  for (var e = 0, t = arguments.length, r = {}, n; e < t; ++e) {
    if (!(n = arguments[e] + "") || n in r || /[\s.]/.test(n))
      throw new Error("illegal type: " + n);
    r[n] = [];
  }
  return new oa(r);
}
function oa(e) {
  this._ = e;
}
function eF(e, t) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var n = "", i = r.indexOf(".");
    if (i >= 0 && (n = r.slice(i + 1), r = r.slice(0, i)), r && !t.hasOwnProperty(r))
      throw new Error("unknown type: " + r);
    return { type: r, name: n };
  });
}
oa.prototype = W0.prototype = {
  constructor: oa,
  on: function(e, t) {
    var r = this._, n = eF(e + "", r), i, a = -1, s = n.length;
    if (arguments.length < 2) {
      for (; ++a < s; )
        if ((i = (e = n[a]).type) && (i = tF(r[i], e.name)))
          return i;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++a < s; )
      if (i = (e = n[a]).type)
        r[i] = $f(r[i], e.name, t);
      else if (t == null)
        for (i in r)
          r[i] = $f(r[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var r in t)
      e[r] = t[r].slice();
    return new oa(e);
  },
  call: function(e, t) {
    if ((i = arguments.length - 2) > 0)
      for (var r = new Array(i), n = 0, i, a; n < i; ++n)
        r[n] = arguments[n + 2];
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (a = this._[e], n = 0, i = a.length; n < i; ++n)
      a[n].value.apply(t, r);
  },
  apply: function(e, t, r) {
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (var n = this._[e], i = 0, a = n.length; i < a; ++i)
      n[i].value.apply(t, r);
  }
};
function tF(e, t) {
  for (var r = 0, n = e.length, i; r < n; ++r)
    if ((i = e[r]).name === t)
      return i.value;
}
function $f(e, t, r) {
  for (var n = 0, i = e.length; n < i; ++n)
    if (e[n].name === t) {
      e[n] = ZC, e = e.slice(0, n).concat(e.slice(n + 1));
      break;
    }
  return r != null && e.push({ name: t, value: r }), e;
}
const rF = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dispatch: W0
}, Symbol.toStringTag, { value: "Module" }));
var Wn = 0, ai = 0, ni = 0, Nh = 1e3, Ba, si, $a = 0, fn = 0, ws = 0, Fi = typeof performance == "object" && performance.now ? performance : Date, Lh = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Es() {
  return fn || (Lh(nF), fn = Fi.now() + ws);
}
function nF() {
  fn = 0;
}
function Ua() {
  this._call = this._time = this._next = null;
}
Ua.prototype = Bh.prototype = {
  constructor: Ua,
  restart: function(e, t, r) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    r = (r == null ? Es() : +r) + (t == null ? 0 : +t), !this._next && si !== this && (si ? si._next = this : Ba = this, si = this), this._call = e, this._time = r, Yo();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Yo());
  }
};
function Bh(e, t, r) {
  var n = new Ua();
  return n.restart(e, t, r), n;
}
function iF() {
  Es(), ++Wn;
  for (var e = Ba, t; e; )
    (t = fn - e._time) >= 0 && e._call.call(null, t), e = e._next;
  --Wn;
}
function Uf() {
  fn = ($a = Fi.now()) + ws, Wn = ai = 0;
  try {
    iF();
  } finally {
    Wn = 0, sF(), fn = 0;
  }
}
function aF() {
  var e = Fi.now(), t = e - $a;
  t > Nh && (ws -= t, $a = e);
}
function sF() {
  for (var e, t = Ba, r, n = 1 / 0; t; )
    t._call ? (n > t._time && (n = t._time), e = t, t = t._next) : (r = t._next, t._next = null, t = e ? e._next = r : Ba = r);
  si = e, Yo(n);
}
function Yo(e) {
  if (!Wn) {
    ai && (ai = clearTimeout(ai));
    var t = e - fn;
    t > 24 ? (e < 1 / 0 && (ai = setTimeout(Uf, e - Fi.now() - ws)), ni && (ni = clearInterval(ni))) : (ni || ($a = Fi.now(), ni = setInterval(aF, Nh)), Wn = 1, Lh(Uf));
  }
}
function Hf(e, t, r) {
  var n = new Ua();
  return t = t == null ? 0 : +t, n.restart(function(i) {
    n.stop(), e(i + t);
  }, t, r), n;
}
var oF = W0("start", "end", "cancel", "interrupt"), lF = [], $h = 0, Wf = 1, qo = 2, la = 3, zf = 4, Ko = 5, fa = 6;
function Ss(e, t, r, n, i, a) {
  var s = e.__transition;
  if (!s)
    e.__transition = {};
  else if (r in s)
    return;
  fF(e, r, {
    name: t,
    index: n,
    // For context during callback.
    group: i,
    // For context during callback.
    on: oF,
    tween: lF,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: $h
  });
}
function z0(e, t) {
  var r = Kt(e, t);
  if (r.state > $h)
    throw new Error("too late; already scheduled");
  return r;
}
function Sr(e, t) {
  var r = Kt(e, t);
  if (r.state > la)
    throw new Error("too late; already running");
  return r;
}
function Kt(e, t) {
  var r = e.__transition;
  if (!r || !(r = r[t]))
    throw new Error("transition not found");
  return r;
}
function fF(e, t, r) {
  var n = e.__transition, i;
  n[t] = r, r.timer = Bh(a, 0, r.time);
  function a(f) {
    r.state = Wf, r.timer.restart(s, r.delay, r.time), r.delay <= f && s(f - r.delay);
  }
  function s(f) {
    var c, u, h, d;
    if (r.state !== Wf)
      return l();
    for (c in n)
      if (d = n[c], d.name === r.name) {
        if (d.state === la)
          return Hf(s);
        d.state === zf ? (d.state = fa, d.timer.stop(), d.on.call("interrupt", e, e.__data__, d.index, d.group), delete n[c]) : +c < t && (d.state = fa, d.timer.stop(), d.on.call("cancel", e, e.__data__, d.index, d.group), delete n[c]);
      }
    if (Hf(function() {
      r.state === la && (r.state = zf, r.timer.restart(o, r.delay, r.time), o(f));
    }), r.state = qo, r.on.call("start", e, e.__data__, r.index, r.group), r.state === qo) {
      for (r.state = la, i = new Array(h = r.tween.length), c = 0, u = -1; c < h; ++c)
        (d = r.tween[c].value.call(e, e.__data__, r.index, r.group)) && (i[++u] = d);
      i.length = u + 1;
    }
  }
  function o(f) {
    for (var c = f < r.duration ? r.ease.call(null, f / r.duration) : (r.timer.restart(l), r.state = Ko, 1), u = -1, h = i.length; ++u < h; )
      i[u].call(e, c);
    r.state === Ko && (r.on.call("end", e, e.__data__, r.index, r.group), l());
  }
  function l() {
    r.state = fa, r.timer.stop(), delete n[t];
    for (var f in n)
      return;
    delete e.__transition;
  }
}
function cF(e, t) {
  var r = e.__transition, n, i, a = !0, s;
  if (r) {
    t = t == null ? null : t + "";
    for (s in r) {
      if ((n = r[s]).name !== t) {
        a = !1;
        continue;
      }
      i = n.state > qo && n.state < Ko, n.state = fa, n.timer.stop(), n.on.call(i ? "interrupt" : "cancel", e, e.__data__, n.index, n.group), delete r[s];
    }
    a && delete e.__transition;
  }
}
function uF(e) {
  return this.each(function() {
    cF(this, e);
  });
}
function hF(e, t) {
  var r, n;
  return function() {
    var i = Sr(this, e), a = i.tween;
    if (a !== r) {
      n = r = a;
      for (var s = 0, o = n.length; s < o; ++s)
        if (n[s].name === t) {
          n = n.slice(), n.splice(s, 1);
          break;
        }
    }
    i.tween = n;
  };
}
function dF(e, t, r) {
  var n, i;
  if (typeof r != "function")
    throw new Error();
  return function() {
    var a = Sr(this, e), s = a.tween;
    if (s !== n) {
      i = (n = s).slice();
      for (var o = { name: t, value: r }, l = 0, f = i.length; l < f; ++l)
        if (i[l].name === t) {
          i[l] = o;
          break;
        }
      l === f && i.push(o);
    }
    a.tween = i;
  };
}
function pF(e, t) {
  var r = this._id;
  if (e += "", arguments.length < 2) {
    for (var n = Kt(this.node(), r).tween, i = 0, a = n.length, s; i < a; ++i)
      if ((s = n[i]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? hF : dF)(r, e, t));
}
function V0(e, t, r) {
  var n = e._id;
  return e.each(function() {
    var i = Sr(this, n);
    (i.value || (i.value = {}))[t] = r.apply(this, arguments);
  }), function(i) {
    return Kt(i, n).value[t];
  };
}
function Uh(e, t) {
  var r;
  return (typeof t == "number" ? Vt : t instanceof ln ? Ia : (r = ln(t)) ? (t = r, Ia) : Ah)(e, t);
}
function mF(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function gF(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function vF(e, t, r) {
  var n, i = r + "", a;
  return function() {
    var s = this.getAttribute(e);
    return s === i ? null : s === n ? a : a = t(n = s, r);
  };
}
function xF(e, t, r) {
  var n, i = r + "", a;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === i ? null : s === n ? a : a = t(n = s, r);
  };
}
function _F(e, t, r) {
  var n, i, a;
  return function() {
    var s, o = r(this), l;
    return o == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = o + "", s === l ? null : s === n && l === i ? a : (i = l, a = t(n = s, o)));
  };
}
function yF(e, t, r) {
  var n, i, a;
  return function() {
    var s, o = r(this), l;
    return o == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = o + "", s === l ? null : s === n && l === i ? a : (i = l, a = t(n = s, o)));
  };
}
function wF(e, t) {
  var r = Qa(e), n = r === "transform" ? Z5 : Uh;
  return this.attrTween(e, typeof t == "function" ? (r.local ? yF : _F)(r, n, V0(this, "attr." + e, t)) : t == null ? (r.local ? gF : mF)(r) : (r.local ? xF : vF)(r, n, t));
}
function EF(e, t) {
  return function(r) {
    this.setAttribute(e, t.call(this, r));
  };
}
function SF(e, t) {
  return function(r) {
    this.setAttributeNS(e.space, e.local, t.call(this, r));
  };
}
function TF(e, t) {
  var r, n;
  function i() {
    var a = t.apply(this, arguments);
    return a !== n && (r = (n = a) && SF(e, a)), r;
  }
  return i._value = t, i;
}
function AF(e, t) {
  var r, n;
  function i() {
    var a = t.apply(this, arguments);
    return a !== n && (r = (n = a) && EF(e, a)), r;
  }
  return i._value = t, i;
}
function CF(e, t) {
  var r = "attr." + e;
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (t == null)
    return this.tween(r, null);
  if (typeof t != "function")
    throw new Error();
  var n = Qa(e);
  return this.tween(r, (n.local ? TF : AF)(n, t));
}
function FF(e, t) {
  return function() {
    z0(this, e).delay = +t.apply(this, arguments);
  };
}
function OF(e, t) {
  return t = +t, function() {
    z0(this, e).delay = t;
  };
}
function bF(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? FF : OF)(t, e)) : Kt(this.node(), t).delay;
}
function kF(e, t) {
  return function() {
    Sr(this, e).duration = +t.apply(this, arguments);
  };
}
function MF(e, t) {
  return t = +t, function() {
    Sr(this, e).duration = t;
  };
}
function DF(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? kF : MF)(t, e)) : Kt(this.node(), t).duration;
}
function IF(e, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    Sr(this, e).ease = t;
  };
}
function PF(e) {
  var t = this._id;
  return arguments.length ? this.each(IF(t, e)) : Kt(this.node(), t).ease;
}
function RF(e) {
  typeof e != "function" && (e = ah(e));
  for (var t = this._groups, r = t.length, n = new Array(r), i = 0; i < r; ++i)
    for (var a = t[i], s = a.length, o = n[i] = [], l, f = 0; f < s; ++f)
      (l = a[f]) && e.call(l, l.__data__, f, a) && o.push(l);
  return new wr(n, this._parents, this._name, this._id);
}
function NF(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var t = this._groups, r = e._groups, n = t.length, i = r.length, a = Math.min(n, i), s = new Array(n), o = 0; o < a; ++o)
    for (var l = t[o], f = r[o], c = l.length, u = s[o] = new Array(c), h, d = 0; d < c; ++d)
      (h = l[d] || f[d]) && (u[d] = h);
  for (; o < n; ++o)
    s[o] = t[o];
  return new wr(s, this._parents, this._name, this._id);
}
function LF(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var r = t.indexOf(".");
    return r >= 0 && (t = t.slice(0, r)), !t || t === "start";
  });
}
function BF(e, t, r) {
  var n, i, a = LF(t) ? z0 : Sr;
  return function() {
    var s = a(this, e), o = s.on;
    o !== n && (i = (n = o).copy()).on(t, r), s.on = i;
  };
}
function $F(e, t) {
  var r = this._id;
  return arguments.length < 2 ? Kt(this.node(), r).on.on(e) : this.each(BF(r, e, t));
}
function UF(e) {
  return function() {
    var t = this.parentNode;
    for (var r in this.__transition)
      if (+r !== e)
        return;
    t && t.removeChild(this);
  };
}
function HF() {
  return this.on("end.remove", UF(this._id));
}
function WF(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = b0(e));
  for (var n = this._groups, i = n.length, a = new Array(i), s = 0; s < i; ++s)
    for (var o = n[s], l = o.length, f = a[s] = new Array(l), c, u, h = 0; h < l; ++h)
      (c = o[h]) && (u = e.call(c, c.__data__, h, o)) && ("__data__" in c && (u.__data__ = c.__data__), f[h] = u, Ss(f[h], t, r, h, f, Kt(c, r)));
  return new wr(a, this._parents, t, r);
}
function zF(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = ih(e));
  for (var n = this._groups, i = n.length, a = [], s = [], o = 0; o < i; ++o)
    for (var l = n[o], f = l.length, c, u = 0; u < f; ++u)
      if (c = l[u]) {
        for (var h = e.call(c, c.__data__, u, l), d, v = Kt(c, r), p = 0, m = h.length; p < m; ++p)
          (d = h[p]) && Ss(d, t, r, p, h, v);
        a.push(h), s.push(c);
      }
  return new wr(a, s, t, r);
}
var VF = qn.prototype.constructor;
function GF() {
  return new VF(this._groups, this._parents);
}
function XF(e, t) {
  var r, n, i;
  return function() {
    var a = $n(this, e), s = (this.style.removeProperty(e), $n(this, e));
    return a === s ? null : a === r && s === n ? i : i = t(r = a, n = s);
  };
}
function Hh(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function jF(e, t, r) {
  var n, i = r + "", a;
  return function() {
    var s = $n(this, e);
    return s === i ? null : s === n ? a : a = t(n = s, r);
  };
}
function YF(e, t, r) {
  var n, i, a;
  return function() {
    var s = $n(this, e), o = r(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(e), $n(this, e))), s === l ? null : s === n && l === i ? a : (i = l, a = t(n = s, o));
  };
}
function qF(e, t) {
  var r, n, i, a = "style." + t, s = "end." + a, o;
  return function() {
    var l = Sr(this, e), f = l.on, c = l.value[a] == null ? o || (o = Hh(t)) : void 0;
    (f !== r || i !== c) && (n = (r = f).copy()).on(s, i = c), l.on = n;
  };
}
function KF(e, t, r) {
  var n = (e += "") == "transform" ? Q5 : Uh;
  return t == null ? this.styleTween(e, XF(e, n)).on("end.style." + e, Hh(e)) : typeof t == "function" ? this.styleTween(e, YF(e, n, V0(this, "style." + e, t))).each(qF(this._id, e)) : this.styleTween(e, jF(e, n, t), r).on("end.style." + e, null);
}
function JF(e, t, r) {
  return function(n) {
    this.style.setProperty(e, t.call(this, n), r);
  };
}
function QF(e, t, r) {
  var n, i;
  function a() {
    var s = t.apply(this, arguments);
    return s !== i && (n = (i = s) && JF(e, s, r)), n;
  }
  return a._value = t, a;
}
function ZF(e, t, r) {
  var n = "style." + (e += "");
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(n, QF(e, t, r ?? ""));
}
function eO(e) {
  return function() {
    this.textContent = e;
  };
}
function tO(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function rO(e) {
  return this.tween("text", typeof e == "function" ? tO(V0(this, "text", e)) : eO(e == null ? "" : e + ""));
}
function nO(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function iO(e) {
  var t, r;
  function n() {
    var i = e.apply(this, arguments);
    return i !== r && (t = (r = i) && nO(i)), t;
  }
  return n._value = e, n;
}
function aO(e) {
  var t = "text";
  if (arguments.length < 1)
    return (t = this.tween(t)) && t._value;
  if (e == null)
    return this.tween(t, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(t, iO(e));
}
function sO() {
  for (var e = this._name, t = this._id, r = Wh(), n = this._groups, i = n.length, a = 0; a < i; ++a)
    for (var s = n[a], o = s.length, l, f = 0; f < o; ++f)
      if (l = s[f]) {
        var c = Kt(l, t);
        Ss(l, e, r, f, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new wr(n, this._parents, e, r);
}
function oO() {
  var e, t, r = this, n = r._id, i = r.size();
  return new Promise(function(a, s) {
    var o = { value: s }, l = { value: function() {
      --i === 0 && a();
    } };
    r.each(function() {
      var f = Sr(this, n), c = f.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(o), t._.interrupt.push(o), t._.end.push(l)), f.on = t;
    });
  });
}
var lO = 0;
function wr(e, t, r, n) {
  this._groups = e, this._parents = t, this._name = r, this._id = n;
}
function Bi(e) {
  return qn().transition(e);
}
function Wh() {
  return ++lO;
}
var wn = qn.prototype;
wr.prototype = Bi.prototype = {
  constructor: wr,
  select: WF,
  selectAll: zF,
  filter: RF,
  merge: NF,
  selection: GF,
  transition: sO,
  call: wn.call,
  nodes: wn.nodes,
  node: wn.node,
  size: wn.size,
  empty: wn.empty,
  each: wn.each,
  on: $F,
  attr: wF,
  attrTween: CF,
  style: KF,
  styleTween: ZF,
  text: rO,
  textTween: aO,
  remove: HF,
  tween: pF,
  delay: bF,
  duration: DF,
  ease: PF,
  end: oO
};
var Jo = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: yr
};
function fO(e, t) {
  for (var r; !(r = e.__transition) || !(r = r[t]); )
    if (!(e = e.parentNode))
      return Jo.time = Es(), Jo;
  return r;
}
function cO(e) {
  var t, r;
  e instanceof wr ? (t = e._id, e = e._name) : (t = Wh(), (r = Jo).time = Es(), e = e == null ? null : e + "");
  for (var n = this._groups, i = n.length, a = 0; a < i; ++a)
    for (var s = n[a], o = s.length, l, f = 0; f < o; ++f)
      (l = s[f]) && Ss(l, e, t, f, s, r || fO(l, t));
  return new wr(n, this._parents, e, t);
}
qn.prototype.interrupt = uF;
qn.prototype.transition = cO;
function fr(e) {
  for (var t = e.length / 6 | 0, r = new Array(t), n = 0; n < t; )
    r[n] = "#" + e.slice(n * 6, ++n * 6);
  return r;
}
const Ts = fr("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), As = fr("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), Cs = fr("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), Fs = fr("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), Os = fr("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), bs = fr("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), ks = fr("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), Ms = fr("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), Ds = fr("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), Is = fr("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function uO(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var zh = { exports: {} };
(function(e, t) {
  (function(r, n) {
    typeof uO == "function" ? e.exports = n() : r.pluralize = n();
  })(tc, function() {
    var r = [], n = [], i = {}, a = {}, s = {};
    function o(p) {
      return typeof p == "string" ? new RegExp("^" + p + "$", "i") : p;
    }
    function l(p, m) {
      return p === m ? m : p === p.toLowerCase() ? m.toLowerCase() : p === p.toUpperCase() ? m.toUpperCase() : p[0] === p[0].toUpperCase() ? m.charAt(0).toUpperCase() + m.substr(1).toLowerCase() : m.toLowerCase();
    }
    function f(p, m) {
      return p.replace(/\$(\d{1,2})/g, function(g, x) {
        return m[x] || "";
      });
    }
    function c(p, m) {
      return p.replace(m[0], function(g, x) {
        var _ = f(m[1], arguments);
        return l(g === "" ? p[x - 1] : g, _);
      });
    }
    function u(p, m, g) {
      if (!p.length || i.hasOwnProperty(p))
        return m;
      for (var x = g.length; x--; ) {
        var _ = g[x];
        if (_[0].test(m))
          return c(m, _);
      }
      return m;
    }
    function h(p, m, g) {
      return function(x) {
        var _ = x.toLowerCase();
        return m.hasOwnProperty(_) ? l(x, _) : p.hasOwnProperty(_) ? l(x, p[_]) : u(_, x, g);
      };
    }
    function d(p, m, g, x) {
      return function(_) {
        var C = _.toLowerCase();
        return m.hasOwnProperty(C) ? !0 : p.hasOwnProperty(C) ? !1 : u(C, C, g) === C;
      };
    }
    function v(p, m, g) {
      var x = m === 1 ? v.singular(p) : v.plural(p);
      return (g ? m + " " : "") + x;
    }
    return v.plural = h(
      s,
      a,
      r
    ), v.isPlural = d(
      s,
      a,
      r
    ), v.singular = h(
      a,
      s,
      n
    ), v.isSingular = d(
      a,
      s,
      n
    ), v.addPluralRule = function(p, m) {
      r.push([o(p), m]);
    }, v.addSingularRule = function(p, m) {
      n.push([o(p), m]);
    }, v.addUncountableRule = function(p) {
      if (typeof p == "string") {
        i[p.toLowerCase()] = !0;
        return;
      }
      v.addPluralRule(p, "$0"), v.addSingularRule(p, "$0");
    }, v.addIrregularRule = function(p, m) {
      m = m.toLowerCase(), p = p.toLowerCase(), s[p] = m, a[m] = p;
    }, [
      // Pronouns.
      ["I", "we"],
      ["me", "us"],
      ["he", "they"],
      ["she", "they"],
      ["them", "them"],
      ["myself", "ourselves"],
      ["yourself", "yourselves"],
      ["itself", "themselves"],
      ["herself", "themselves"],
      ["himself", "themselves"],
      ["themself", "themselves"],
      ["is", "are"],
      ["was", "were"],
      ["has", "have"],
      ["this", "these"],
      ["that", "those"],
      // Words ending in with a consonant and `o`.
      ["echo", "echoes"],
      ["dingo", "dingoes"],
      ["volcano", "volcanoes"],
      ["tornado", "tornadoes"],
      ["torpedo", "torpedoes"],
      // Ends with `us`.
      ["genus", "genera"],
      ["viscus", "viscera"],
      // Ends with `ma`.
      ["stigma", "stigmata"],
      ["stoma", "stomata"],
      ["dogma", "dogmata"],
      ["lemma", "lemmata"],
      ["schema", "schemata"],
      ["anathema", "anathemata"],
      // Other irregular rules.
      ["ox", "oxen"],
      ["axe", "axes"],
      ["die", "dice"],
      ["yes", "yeses"],
      ["foot", "feet"],
      ["eave", "eaves"],
      ["goose", "geese"],
      ["tooth", "teeth"],
      ["quiz", "quizzes"],
      ["human", "humans"],
      ["proof", "proofs"],
      ["carve", "carves"],
      ["valve", "valves"],
      ["looey", "looies"],
      ["thief", "thieves"],
      ["groove", "grooves"],
      ["pickaxe", "pickaxes"],
      ["passerby", "passersby"]
    ].forEach(function(p) {
      return v.addIrregularRule(p[0], p[1]);
    }), [
      [/s?$/i, "s"],
      [/[^\u0000-\u007F]$/i, "$0"],
      [/([^aeiou]ese)$/i, "$1"],
      [/(ax|test)is$/i, "$1es"],
      [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"],
      [/(e[mn]u)s?$/i, "$1s"],
      [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"],
      [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1i"],
      [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
      [/(seraph|cherub)(?:im)?$/i, "$1im"],
      [/(her|at|gr)o$/i, "$1oes"],
      [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, "$1a"],
      [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, "$1a"],
      [/sis$/i, "ses"],
      [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
      [/([^aeiouy]|qu)y$/i, "$1ies"],
      [/([^ch][ieo][ln])ey$/i, "$1ies"],
      [/(x|ch|ss|sh|zz)$/i, "$1es"],
      [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
      [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"],
      [/(pe)(?:rson|ople)$/i, "$1ople"],
      [/(child)(?:ren)?$/i, "$1ren"],
      [/eaux$/i, "$0"],
      [/m[ae]n$/i, "men"],
      ["thou", "you"]
    ].forEach(function(p) {
      return v.addPluralRule(p[0], p[1]);
    }), [
      [/s$/i, ""],
      [/(ss)$/i, "$1"],
      [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"],
      [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"],
      [/ies$/i, "y"],
      [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, "$1ie"],
      [/\b(mon|smil)ies$/i, "$1ey"],
      [/\b((?:tit)?m|l)ice$/i, "$1ouse"],
      [/(seraph|cherub)im$/i, "$1"],
      [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, "$1"],
      [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, "$1sis"],
      [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"],
      [/(test)(?:is|es)$/i, "$1is"],
      [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1us"],
      [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, "$1um"],
      [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, "$1on"],
      [/(alumn|alg|vertebr)ae$/i, "$1a"],
      [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"],
      [/(matr|append)ices$/i, "$1ix"],
      [/(pe)(rson|ople)$/i, "$1rson"],
      [/(child)ren$/i, "$1"],
      [/(eau)x?$/i, "$1"],
      [/men$/i, "man"]
    ].forEach(function(p) {
      return v.addSingularRule(p[0], p[1]);
    }), [
      // Singular words with no plurals.
      "adulthood",
      "advice",
      "agenda",
      "aid",
      "aircraft",
      "alcohol",
      "ammo",
      "analytics",
      "anime",
      "athletics",
      "audio",
      "bison",
      "blood",
      "bream",
      "buffalo",
      "butter",
      "carp",
      "cash",
      "chassis",
      "chess",
      "clothing",
      "cod",
      "commerce",
      "cooperation",
      "corps",
      "debris",
      "diabetes",
      "digestion",
      "elk",
      "energy",
      "equipment",
      "excretion",
      "expertise",
      "firmware",
      "flounder",
      "fun",
      "gallows",
      "garbage",
      "graffiti",
      "hardware",
      "headquarters",
      "health",
      "herpes",
      "highjinks",
      "homework",
      "housework",
      "information",
      "jeans",
      "justice",
      "kudos",
      "labour",
      "literature",
      "machinery",
      "mackerel",
      "mail",
      "media",
      "mews",
      "moose",
      "music",
      "mud",
      "manga",
      "news",
      "only",
      "personnel",
      "pike",
      "plankton",
      "pliers",
      "police",
      "pollution",
      "premises",
      "rain",
      "research",
      "rice",
      "salmon",
      "scissors",
      "series",
      "sewage",
      "shambles",
      "shrimp",
      "software",
      "species",
      "staff",
      "swine",
      "tennis",
      "traffic",
      "transportation",
      "trout",
      "tuna",
      "wealth",
      "welfare",
      "whiting",
      "wildebeest",
      "wildlife",
      "you",
      /pok[eé]mon$/i,
      // Regexes.
      /[^aeiou]ese$/i,
      // "chinese", "japanese"
      /deer$/i,
      // "deer", "reindeer"
      /fish$/i,
      // "fish", "blowfish", "angelfish"
      /measles$/i,
      /o[iu]s$/i,
      // "carnivorous"
      /pox$/i,
      // "chickpox", "smallpox"
      /sheep$/i
    ].forEach(v.addUncountableRule), v;
  });
})(zh);
var hO = zh.exports;
const zn = /* @__PURE__ */ za(hO), Be = {
  select: mn,
  selectAll: Za,
  scaleLinear: Li,
  scaleOrdinal: Kn,
  scaleSqrt: yC,
  hierarchy: U0,
  partition: UC,
  arc: Rh,
  path: H0,
  transition: Bi,
  interpolate: Ni,
  easeLinear: es,
  easePolyIn: as,
  easePolyOut: ss,
  easePoly: Rr,
  easePolyInOut: Rr,
  easeQuadIn: ts,
  easeQuadOut: rs,
  easeQuad: Pr,
  easeQuadInOut: Pr,
  easeCubicIn: ns,
  easeCubicOut: is,
  easeCubic: yr,
  easeCubicInOut: yr,
  easeSinIn: os,
  easeSinOut: ls,
  easeSin: Nr,
  easeSinInOut: Nr,
  easeExpIn: fs,
  easeExpOut: cs,
  easeExp: Br,
  easeExpInOut: Br,
  easeCircleIn: us,
  easeCircleOut: hs,
  easeCircle: $r,
  easeCircleInOut: $r,
  easeElasticIn: gs,
  easeElastic: Hr,
  easeElasticOut: Hr,
  easeElasticInOut: vs,
  easeBackIn: ms,
  easeBackOut: nn,
  easeBack: Ur,
  easeBackInOut: Ur,
  easeBounceIn: ds,
  easeBounce: Yt,
  easeBounceOut: Yt,
  easeBounceInOut: ps,
  schemeCategory10: Ts,
  schemeAccent: As,
  schemeDark2: Cs,
  schemePaired: Fs,
  schemePastel1: Os,
  schemePastel2: bs,
  schemeSet1: ks,
  schemeSet2: Ms,
  schemeSet3: Ds,
  schemeTableau10: Is
};
class dO extends _s {
  constructor(t, r, n) {
    super(t, r, n, {
      margin: { top: 20, right: 20, bottom: 20, left: 20 },
      key: "",
      value: "",
      color: {
        key: !1,
        keys: !1,
        scheme: !1,
        current: "#1f77b4",
        default: "#AAA",
        axis: "#000"
      },
      tooltip: { label: !1, suffix: !1, suffixPlural: !1 },
      transition: { duration: 350, ease: "easeLinear" },
      charSpace: 8
    });
  }
  /**
   * Init chart
   */
  initChart() {
    this.getDimensions(), this.initChartFrame("sunburst"), this.cfg.tooltip.suffix && this.cfg.tooltip.suffixPlural && zn.addIrregularRule(this.cfg.tooltip.suffix, this.cfg.tooltip.suffixPlural), this.gcenter = this.g.append("g"), this.setChartDimension(), this.updateChart();
  }
  /**
   * Set up chart dimensions (non depending on data)
   */
  setChartDimension() {
    this.svg.attr(
      "viewBox",
      `0 0 ${this.cfg.width + this.cfg.margin.left + this.cfg.margin.right} ${this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom}`
    ).attr("width", this.cfg.width + this.cfg.margin.left + this.cfg.margin.right).attr("height", this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom), this.gcenter.attr("transform", `translate(${this.cfg.width / 2}, ${this.cfg.height / 2})`);
  }
  /**
   * Bind data to main elements groups
   */
  bindData() {
    const t = (r) => {
      const n = Be.hierarchy(r).sum((i) => i[this.cfg.value]).sort((i, a) => a.name - i.name);
      return Be.partition()(n);
    };
    this.hData = t(this.data[0]).descendants(), this.itemg = this.gcenter.selectAll(".chart__slice-group").data(this.hData, (r) => r.data[this.cfg.key]), this.transition = Be.transition("t").duration(this.cfg.transition.duration).ease(Be[this.cfg.transition.ease]);
  }
  /**
   * Set up scales
   */
  setScales() {
    this.radius = Math.min(this.cfg.width, this.cfg.height) / 2, this.xScale = Be.scaleLinear().range([0, 2 * Math.PI]).clamp(!0), this.yScale = Be.scaleSqrt().range([this.radius * 0.1, this.radius]), this.arc = Be.arc().startAngle((t) => this.xScale(t.x0)).endAngle((t) => this.xScale(t.x1)).innerRadius((t) => Math.max(0, this.yScale(t.y0))).outerRadius((t) => Math.max(0, this.yScale(t.y1))), this.cfg.color.scheme && (this.cfg.color.scheme instanceof Array ? this.colorScale = Be.scaleOrdinal().range(this.cfg.color.scheme) : this.colorScale = Be.scaleOrdinal(Be[this.cfg.color.scheme]));
  }
  /**
   * Add new chart's elements
   */
  enterElements() {
    const t = this.itemg.enter().append("g").attr("class", "chart__slice-group chart__slice-group--sunburst clickable").on("click", (r) => {
      window.event.stopPropagation(), this.focusOn(r);
    });
    t.append("path").attr("class", "chart__slice chart__slice--sunburst").style("fill", (r) => this.colorElement(r.data)).on("mouseover", (r) => {
      const n = this.cfg.tooltip.suffixPlural ? zn(this.cfg.tooltip.suffix, r.value) : this.cfg.tooltip.suffix, i = this.cfg.tooltip.suffix ? `<div>${r.data[this.cfg.key]}: ${r.value} ${n}</div>` : `<div>${r.data[this.cfg.key]}: ${r.value}</div>`;
      this.tooltip.html(i).classed("active", !0);
    }).on("mouseout", () => {
      this.tooltip.classed("active", !1);
    }).on("mousemove", () => {
      this.tooltip.style("left", window.event.pageX - 28 + "px").style("top", window.event.pageY - 40 + "px");
    }).transition(this.transition).attrTween("d", (r) => {
      const n = Be.interpolate(0, r.y0), i = Be.interpolate(r.y0, r.y1), a = Be.interpolate(0, r.x0), s = Be.interpolate(0, r.x1);
      return (o) => (r.y0 = n(o), r.y1 = i(o), r.x0 = a(o), r.x1 = s(o), this.arc(r));
    }), t.append("path").attr("class", "chart__line--hidden").attr("id", (r, n) => `hiddenArc${n}`).attr("d", (r) => this.middleArcLine(r)), this.labels = t.append("text").attr("class", "chart__labels").attr("display", "none").attr("text-anchor", "middle").attr("dy", 2).attr("font-size", "10px").style("opacity", 0), this.labels.append("textPath").attr("startOffset", "50%").attr("xlink:href", (r, n) => `#hiddenArc${n}`).text((r) => r.data.name);
  }
  /**
   * Update chart's elements based on data change
   */
  updateElements() {
    this.itemg.selectAll(".chart__slice").transition(this.transition).attrTween("d", (t) => {
      const r = this.hData.filter((o) => o.data.name === t.data.name)[0], n = Be.interpolate(t.y0, r.y0), i = Be.interpolate(t.y1, r.y1), a = Be.interpolate(t.x0, r.x0), s = Be.interpolate(t.x1, r.x1);
      return (o) => (r.y0 = n(o), r.y1 = i(o), r.x0 = a(o), r.x1 = s(o), this.arc(r));
    }).style("fill", (t) => this.colorElement(t.data)), this.labels.attr("display", (t) => this.textFits(t) ? null : "none").transition(this.transition).duration(this.cfg.transition.duration / 2).delay(this.cfg.transition.duration / 2).style("opacity", 1);
  }
  /**
   * Remove chart's elements without data
   */
  exitElements() {
    this.itemg.exit().transition(this.transition).style("opacity", 0).remove();
  }
  /**
   * Check if text fits in available space
   */
  textFits(t) {
    if (!t.parent)
      return !1;
    const r = this.xScale(t.x1) - this.xScale(t.x0), n = Math.max(0, (this.yScale(t.y0) + this.yScale(t.y1)) / 2);
    return t.data[this.cfg.key].length * this.cfg.charSpace < n * r;
  }
  /**
   * Transition slice on focus
   */
  focusOn(t) {
    const r = this.hData.filter((i) => i.data.name === t.data.name)[0], n = this.svg.transition().duration(this.cfg.transition.duration).ease(Be[this.cfg.transition.ease]).tween("scale", () => {
      const i = Be.interpolate(this.xScale.domain(), [r.x0, r.x1]), a = Be.interpolate(this.yScale.domain(), [r.y0, 1]);
      return (s) => {
        this.xScale.domain(i(s)), this.yScale.domain(a(s));
      };
    });
    n.selectAll(".chart__slice").attrTween("d", (i) => () => {
      const a = this.hData.filter((s) => s.data.name === i.data.name)[0];
      return this.arc(a);
    }), n.selectAll(".chart__line--hidden").attrTween("d", (i) => () => {
      const a = this.hData.filter((s) => s.data.name === i.data.name)[0];
      return this.middleArcLine(a);
    }), n.selectAll(".chart__labels").attrTween("display", (i) => () => {
      const a = this.hData.filter((s) => s.data.name === i.data.name)[0];
      return this.textFits(a) ? null : "none";
    });
  }
  middleArcLine(t) {
    const r = Math.PI / 2, n = [this.xScale(t.x0) - r, this.xScale(t.x1) - r], i = Math.max(0, (this.yScale(t.y0) + this.yScale(t.y1)) / 2), a = (n[1] + n[0]) / 2, s = a > 0 && a < Math.PI;
    s && n.reverse();
    const o = Be.path();
    return o.arc(0, 0, i, n[0], n[1], s), o.toString();
  }
}
const pO = {
  name: "D3Sunburst",
  extends: xs,
  mounted() {
    this.chart = new dO(
      this.$refs.chart,
      JSON.parse(JSON.stringify(this.datum)),
      this.config
    );
  }
}, mO = /* @__PURE__ */ rc(rF), gO = mO.dispatch, xo = Math.PI / 180, vO = {
  archimedean: Gh,
  rectangular: FO
}, oi = 64, ca = 2048;
var Vh = function() {
  var e = [256, 256], t = xO, r = _O, n = yO, i = Vf, a = Vf, s = wO, o = EO, l = Gh, f = [], c = 1 / 0, u = gO("word", "end"), h = null, d = Math.random, v = {}, p = bO;
  v.canvas = function(x) {
    return arguments.length ? (p = Ar(x), v) : p;
  }, v.start = function() {
    var x = m(p()), _ = OO((e[0] >> 5) * e[1]), C = null, R = f.length, G = -1, b = [], L = f.map(function(N, F) {
      return N.text = t.call(this, N, F), N.font = r.call(this, N, F), N.style = i.call(this, N, F), N.weight = a.call(this, N, F), N.rotate = s.call(this, N, F), N.size = ~~n.call(this, N, F), N.padding = o.call(this, N, F), N;
    }).sort(function(N, F) {
      return F.size - N.size;
    });
    return h && clearInterval(h), h = setInterval(P, 0), P(), v;
    function P() {
      for (var N = Date.now(); Date.now() - N < c && ++G < R && h; ) {
        var F = L[G];
        F.x = e[0] * (d() + 0.5) >> 1, F.y = e[1] * (d() + 0.5) >> 1, SO(x, F, L, G), F.hasText && g(_, F, C) && (b.push(F), u.call("word", v, F), C ? AO(C, F) : C = [{ x: F.x + F.x0, y: F.y + F.y0 }, { x: F.x + F.x1, y: F.y + F.y1 }], F.x -= e[0] >> 1, F.y -= e[1] >> 1);
      }
      G >= R && (v.stop(), u.call("end", v, b, C));
    }
  }, v.stop = function() {
    h && (clearInterval(h), h = null);
    for (const x of f)
      delete x.sprite;
    return v;
  };
  function m(x) {
    const _ = x.getContext("2d", { willReadFrequently: !0 });
    x.width = x.height = 1;
    const C = Math.sqrt(_.getImageData(0, 0, 1, 1).data.length >> 2);
    return x.width = (oi << 5) / C, x.height = ca / C, _.fillStyle = _.strokeStyle = "red", { context: _, ratio: C };
  }
  function g(x, _, C) {
    e[0], e[1];
    for (var R = _.x, G = _.y, b = Math.sqrt(e[0] * e[0] + e[1] * e[1]), L = l(e), P = d() < 0.5 ? 1 : -1, N = -P, F, O, M; (F = L(N += P)) && (O = ~~F[0], M = ~~F[1], !(Math.min(Math.abs(O), Math.abs(M)) >= b)); )
      if (_.x = R + O, _.y = G + M, !(_.x + _.x0 < 0 || _.y + _.y0 < 0 || _.x + _.x1 > e[0] || _.y + _.y1 > e[1]) && (!C || CO(_, C)) && !TO(_, x, e[0])) {
        for (var V = _.sprite, J = _.width >> 5, le = e[0] >> 5, he = _.x - (J << 4), pe = he & 127, me = 32 - pe, Me = _.y1 - _.y0, Se = (_.y + _.y0) * le + (he >> 5), k, B = 0; B < Me; B++) {
          k = 0;
          for (var D = 0; D <= J; D++)
            x[Se + D] |= k << me | (D < J ? (k = V[B * J + D]) >>> pe : 0);
          Se += le;
        }
        return !0;
      }
    return !1;
  }
  return v.timeInterval = function(x) {
    return arguments.length ? (c = x ?? 1 / 0, v) : c;
  }, v.words = function(x) {
    return arguments.length ? (f = x, v) : f;
  }, v.size = function(x) {
    return arguments.length ? (e = [+x[0], +x[1]], v) : e;
  }, v.font = function(x) {
    return arguments.length ? (r = Ar(x), v) : r;
  }, v.fontStyle = function(x) {
    return arguments.length ? (i = Ar(x), v) : i;
  }, v.fontWeight = function(x) {
    return arguments.length ? (a = Ar(x), v) : a;
  }, v.rotate = function(x) {
    return arguments.length ? (s = Ar(x), v) : s;
  }, v.text = function(x) {
    return arguments.length ? (t = Ar(x), v) : t;
  }, v.spiral = function(x) {
    return arguments.length ? (l = vO[x] || x, v) : l;
  }, v.fontSize = function(x) {
    return arguments.length ? (n = Ar(x), v) : n;
  }, v.padding = function(x) {
    return arguments.length ? (o = Ar(x), v) : o;
  }, v.random = function(x) {
    return arguments.length ? (d = x, v) : d;
  }, v.on = function() {
    var x = u.on.apply(u, arguments);
    return x === u ? v : x;
  }, v;
};
function xO(e) {
  return e.text;
}
function _O() {
  return "serif";
}
function Vf() {
  return "normal";
}
function yO(e) {
  return Math.sqrt(e.value);
}
function wO() {
  return (~~(random() * 6) - 3) * 30;
}
function EO() {
  return 1;
}
function SO(e, t, r, n) {
  if (!t.sprite) {
    var i = e.context, a = e.ratio;
    i.clearRect(0, 0, (oi << 5) / a, ca / a);
    var s = 0, o = 0, l = 0, f = r.length;
    for (--n; ++n < f; ) {
      t = r[n], i.save(), i.font = t.style + " " + t.weight + " " + ~~((t.size + 1) / a) + "px " + t.font;
      const F = i.measureText(t.text), O = -Math.floor(F.width / 2);
      let M = (F.width + 1) * a, V = t.size << 1;
      if (t.rotate) {
        var c = Math.sin(t.rotate * xo), u = Math.cos(t.rotate * xo), h = M * u, d = M * c, v = V * u, p = V * c;
        M = Math.max(Math.abs(h + p), Math.abs(h - p)) + 31 >> 5 << 5, V = ~~Math.max(Math.abs(d + v), Math.abs(d - v));
      } else
        M = M + 31 >> 5 << 5;
      if (V > l && (l = V), s + M >= oi << 5 && (s = 0, o += l, l = 0), o + V >= ca)
        break;
      i.translate((s + (M >> 1)) / a, (o + (V >> 1)) / a), t.rotate && i.rotate(t.rotate * xo), i.fillText(t.text, O, 0), t.padding && (i.lineWidth = 2 * t.padding, i.strokeText(t.text, O, 0)), i.restore(), t.width = M, t.height = V, t.xoff = s, t.yoff = o, t.x1 = M >> 1, t.y1 = V >> 1, t.x0 = -t.x1, t.y0 = -t.y1, t.hasText = !0, s += M;
    }
    for (var m = i.getImageData(0, 0, (oi << 5) / a, ca / a).data, g = []; --n >= 0; )
      if (t = r[n], !!t.hasText) {
        for (var x = t.width, _ = x >> 5, C = t.y1 - t.y0, R = 0; R < C * _; R++)
          g[R] = 0;
        if (s = t.xoff, s == null)
          return;
        o = t.yoff;
        for (var G = 0, b = -1, L = 0; L < C; L++) {
          for (var R = 0; R < x; R++) {
            var P = _ * L + (R >> 5), N = m[(o + L) * (oi << 5) + (s + R) << 2] ? 1 << 31 - R % 32 : 0;
            g[P] |= N, G |= N;
          }
          G ? b = L : (t.y0++, C--, L--, o++);
        }
        t.y1 = t.y0 + b, t.sprite = g.slice(0, (t.y1 - t.y0) * _);
      }
  }
}
function TO(e, t, r) {
  r >>= 5;
  for (var n = e.sprite, i = e.width >> 5, a = e.x - (i << 4), s = a & 127, o = 32 - s, l = e.y1 - e.y0, f = (e.y + e.y0) * r + (a >> 5), c, u = 0; u < l; u++) {
    c = 0;
    for (var h = 0; h <= i; h++)
      if ((c << o | (h < i ? (c = n[u * i + h]) >>> s : 0)) & t[f + h])
        return !0;
    f += r;
  }
  return !1;
}
function AO(e, t) {
  var r = e[0], n = e[1];
  t.x + t.x0 < r.x && (r.x = t.x + t.x0), t.y + t.y0 < r.y && (r.y = t.y + t.y0), t.x + t.x1 > n.x && (n.x = t.x + t.x1), t.y + t.y1 > n.y && (n.y = t.y + t.y1);
}
function CO(e, t) {
  return e.x + e.x1 > t[0].x && e.x + e.x0 < t[1].x && e.y + e.y1 > t[0].y && e.y + e.y0 < t[1].y;
}
function Gh(e) {
  var t = e[0] / e[1];
  return function(r) {
    return [t * (r *= 0.1) * Math.cos(r), r * Math.sin(r)];
  };
}
function FO(e) {
  var t = 4, r = t * e[0] / e[1], n = 0, i = 0;
  return function(a) {
    var s = a < 0 ? -1 : 1;
    switch (Math.sqrt(1 + 4 * s * a) - s & 3) {
      case 0:
        n += r;
        break;
      case 1:
        i += t;
        break;
      case 2:
        n -= r;
        break;
      default:
        i -= t;
        break;
    }
    return [n, i];
  };
}
function OO(e) {
  for (var t = [], r = -1; ++r < e; )
    t[r] = 0;
  return t;
}
function bO() {
  return document.createElement("canvas");
}
function Ar(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const kO = /* @__PURE__ */ za(Vh), MO = /* @__PURE__ */ m1({
  __proto__: null,
  default: kO
}, [Vh]), En = {
  select: mn,
  selectAll: Za,
  scaleOrdinal: Kn,
  scaleLinear: Li,
  min: _h,
  max: N0,
  extent: S5,
  transition: Bi,
  cloud: MO,
  easeLinear: es,
  easePolyIn: as,
  easePolyOut: ss,
  easePoly: Rr,
  easePolyInOut: Rr,
  easeQuadIn: ts,
  easeQuadOut: rs,
  easeQuad: Pr,
  easeQuadInOut: Pr,
  easeCubicIn: ns,
  easeCubicOut: is,
  easeCubic: yr,
  easeCubicInOut: yr,
  easeSinIn: os,
  easeSinOut: ls,
  easeSin: Nr,
  easeSinInOut: Nr,
  easeExpIn: fs,
  easeExpOut: cs,
  easeExp: Br,
  easeExpInOut: Br,
  easeCircleIn: us,
  easeCircleOut: hs,
  easeCircle: $r,
  easeCircleInOut: $r,
  easeElasticIn: gs,
  easeElastic: Hr,
  easeElasticOut: Hr,
  easeElasticInOut: vs,
  easeBackIn: ms,
  easeBackOut: nn,
  easeBack: Ur,
  easeBackInOut: Ur,
  easeBounceIn: ds,
  easeBounce: Yt,
  easeBounceOut: Yt,
  easeBounceInOut: ps,
  schemeCategory10: Ts,
  schemeAccent: As,
  schemeDark2: Cs,
  schemePaired: Fs,
  schemePastel1: Os,
  schemePastel2: bs,
  schemeSet1: ks,
  schemeSet2: Ms,
  schemeSet3: Ds,
  schemeTableau10: Is
};
class DO extends _s {
  constructor(t, r, n) {
    super(t, r, n, {
      margin: { top: 20, right: 20, bottom: 20, left: 20 },
      key: "word",
      size: "size",
      value: "value",
      fontFamily: "Arial",
      angle: { steps: 2, start: 0, end: 90 },
      color: {
        key: !1,
        keys: !1,
        scheme: !1,
        current: "#1f77b4",
        default: "#AAA",
        axis: "#000"
      },
      tooltip: { label: !1, suffix: !1, suffixPlural: !1 },
      transition: { duration: 500, ease: "easeLinear" }
    });
  }
  /**
   * Init chart
   */
  initChart() {
    this.getDimensions(), this.initChartFrame("wordscloud"), this.cfg.tooltip.suffix && this.cfg.tooltip.suffixPlural && zn.addIrregularRule(this.cfg.tooltip.suffix, this.cfg.tooltip.suffixPlural), this.gcenter = this.g.append("g"), this.tData = [], this.setChartDimension(), this.updateChart();
  }
  /**
   * Compute data before operate
   */
  computeData() {
    En.cloud().size([this.cfg.width, this.cfg.height]).words(
      this.data.map((t) => ({
        text: t[this.cfg.key],
        size: t[this.cfg.size],
        value: t[this.cfg.value],
        color: this.colorElement(t, "text")
      }))
    ).rotate(() => this.wordsAngle(this.cfg.angle)).font(this.cfg.fontFamily).fontSize((t) => t.size * this.fontScale).on("end", (t) => {
      this.data.length !== t.length && this.fontScale > 0 ? (this.fontScale = this.fontScale - 0.1, this.computeData()) : (this.renderEnd = !0, this.tData = t);
    }).start();
  }
  /**
   * Set up chart dimensions (non depending on data)
   */
  setChartDimension() {
    this.svg.attr(
      "viewBox",
      `0 0 ${this.cfg.width + this.cfg.margin.left + this.cfg.margin.right} ${this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom}`
    ).attr("width", this.cfg.width + this.cfg.margin.left + this.cfg.margin.right).attr("height", this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom), this.gcenter.attr("transform", `translate(${this.cfg.width / 2}, ${this.cfg.height / 2})`), this.fontScale = 1, this.renderEnd = !1;
  }
  /**
   * Bind data to main elements groups
   */
  bindData() {
    this.transition = En.transition("t").duration(this.cfg.transition.duration).ease(En[this.cfg.transition.ease]), this.wordgroup = this.gcenter.selectAll(".chart__word-group").data(this.tData, (t) => t.text);
  }
  /**
   * Set up scales
   */
  setScales() {
    this.cfg.color.scheme instanceof Array ? this.colorScale = En.scaleOrdinal().range(this.cfg.color.scheme) : typeof this.cfg.color.scheme == "string" && (this.colorScale = En.scaleOrdinal(En[this.cfg.color.scheme]));
  }
  /**
   * Add new chart's elements
   */
  enterElements() {
    if (!this.renderEnd)
      return;
    this.wordgroup.enter().append("g").attr("class", "chart__word-group chart__word-group--wordscloud").append("text").style("font-size", (r) => r.size + "px").style("font-family", (r) => r.font).attr("text-anchor", "middle").attr("fill", (r) => r.color).attr("transform", (r) => `translate(${[r.x, r.y]})rotate(${r.rotate})`).on("mouseover", (r) => {
      const n = this.cfg.tooltip.suffixPlural ? zn(this.cfg.tooltip.suffix, r.value) : this.cfg.tooltip.suffix, i = this.cfg.tooltip.suffix ? `<div>${r.text}: ${r.value} ${n}</div>` : `<div>${r.text}: ${r.value}</div>`;
      this.tooltip.html(i).classed("active", !0);
    }).on("mouseout", () => {
      this.tooltip.classed("active", !1);
    }).on("mousemove", () => {
      this.tooltip.style("left", window.event.pageX - 28 + "px").style("top", window.event.pageY - 40 + "px");
    }).text((r) => r.text);
  }
  /**
   * Update chart's elements based on data change
   */
  updateElements() {
    this.renderEnd && this.wordgroup.selectAll("text").data(this.tData, (t) => t.text).transition(this.transition).attr("fill", (t) => this.colorElement(t, "text")).style("font-size", (t) => t.size + "px").attr("transform", (t) => `translate(${[t.x, t.y]})rotate(${t.rotate})`);
  }
  /**
   * Remove chart's elements without data
   */
  exitElements() {
    this.renderEnd && this.wordgroup.exit().transition(this.transition).style("opacity", 0).remove();
  }
  /**
   * Word's angle
   */
  wordsAngle() {
    if (typeof this.cfg.angle == "number")
      return this.cfg.angle;
    if (typeof this.cfg.angle == "object")
      if (this.cfg.angle instanceof Array) {
        const t = this.randomInt(0, this.cfg.angle.length - 1);
        return this.cfg.angle[t];
      } else {
        const t = (this.cfg.angle.end - this.cfg.angle.start) / (this.cfg.angle.steps - 1);
        return this.cfg.angle.start + this.randomInt(0, this.cfg.angle.steps) * t;
      }
    return 0;
  }
  randomInt(t, r) {
    const n = Math.ceil(t), i = Math.floor(r);
    return Math.floor(Math.random() * (i - n + 1)) + n;
  }
}
const IO = {
  name: "D3WordsCloud",
  extends: xs,
  mounted() {
    this.chart = new DO(
      this.$refs.chart,
      JSON.parse(JSON.stringify(this.datum)),
      this.config
    );
  }
};
var _o = Array.prototype.slice;
function PO(e) {
  return e;
}
var yo = 1, wo = 2, Qo = 3, li = 4, Gf = 1e-6;
function RO(e) {
  return "translate(" + (e + 0.5) + ",0)";
}
function NO(e) {
  return "translate(0," + (e + 0.5) + ")";
}
function LO(e) {
  return function(t) {
    return +e(t);
  };
}
function BO(e) {
  var t = Math.max(0, e.bandwidth() - 1) / 2;
  return e.round() && (t = Math.round(t)), function(r) {
    return +e(r) + t;
  };
}
function $O() {
  return !this.__axis;
}
function Xh(e, t) {
  var r = [], n = null, i = null, a = 6, s = 6, o = 3, l = e === yo || e === li ? -1 : 1, f = e === li || e === wo ? "x" : "y", c = e === yo || e === Qo ? RO : NO;
  function u(h) {
    var d = n ?? (t.ticks ? t.ticks.apply(t, r) : t.domain()), v = i ?? (t.tickFormat ? t.tickFormat.apply(t, r) : PO), p = Math.max(a, 0) + o, m = t.range(), g = +m[0] + 0.5, x = +m[m.length - 1] + 0.5, _ = (t.bandwidth ? BO : LO)(t.copy()), C = h.selection ? h.selection() : h, R = C.selectAll(".domain").data([null]), G = C.selectAll(".tick").data(d, t).order(), b = G.exit(), L = G.enter().append("g").attr("class", "tick"), P = G.select("line"), N = G.select("text");
    R = R.merge(R.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), G = G.merge(L), P = P.merge(L.append("line").attr("stroke", "currentColor").attr(f + "2", l * a)), N = N.merge(L.append("text").attr("fill", "currentColor").attr(f, l * p).attr("dy", e === yo ? "0em" : e === Qo ? "0.71em" : "0.32em")), h !== C && (R = R.transition(h), G = G.transition(h), P = P.transition(h), N = N.transition(h), b = b.transition(h).attr("opacity", Gf).attr("transform", function(F) {
      return isFinite(F = _(F)) ? c(F) : this.getAttribute("transform");
    }), L.attr("opacity", Gf).attr("transform", function(F) {
      var O = this.parentNode.__axis;
      return c(O && isFinite(O = O(F)) ? O : _(F));
    })), b.remove(), R.attr("d", e === li || e == wo ? s ? "M" + l * s + "," + g + "H0.5V" + x + "H" + l * s : "M0.5," + g + "V" + x : s ? "M" + g + "," + l * s + "V0.5H" + x + "V" + l * s : "M" + g + ",0.5H" + x), G.attr("opacity", 1).attr("transform", function(F) {
      return c(_(F));
    }), P.attr(f + "2", l * a), N.attr(f, l * p).text(v), C.filter($O).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === wo ? "start" : e === li ? "end" : "middle"), C.each(function() {
      this.__axis = _;
    });
  }
  return u.scale = function(h) {
    return arguments.length ? (t = h, u) : t;
  }, u.ticks = function() {
    return r = _o.call(arguments), u;
  }, u.tickArguments = function(h) {
    return arguments.length ? (r = h == null ? [] : _o.call(h), u) : r.slice();
  }, u.tickValues = function(h) {
    return arguments.length ? (n = h == null ? null : _o.call(h), u) : n && n.slice();
  }, u.tickFormat = function(h) {
    return arguments.length ? (i = h, u) : i;
  }, u.tickSize = function(h) {
    return arguments.length ? (a = s = +h, u) : a;
  }, u.tickSizeInner = function(h) {
    return arguments.length ? (a = +h, u) : a;
  }, u.tickSizeOuter = function(h) {
    return arguments.length ? (s = +h, u) : s;
  }, u.tickPadding = function(h) {
    return arguments.length ? (o = +h, u) : o;
  }, u;
}
function UO(e) {
  return Xh(Qo, e);
}
function HO(e) {
  return Xh(li, e);
}
const Pt = {
  select: mn,
  selectAll: Za,
  scaleBand: wh,
  scaleLinear: Li,
  scaleOrdinal: Kn,
  max: N0,
  transition: Bi,
  axisBottom: UO,
  axisLeft: HO,
  easeLinear: es,
  easePolyIn: as,
  easePolyOut: ss,
  easePoly: Rr,
  easePolyInOut: Rr,
  easeQuadIn: ts,
  easeQuadOut: rs,
  easeQuad: Pr,
  easeQuadInOut: Pr,
  easeCubicIn: ns,
  easeCubicOut: is,
  easeCubic: yr,
  easeCubicInOut: yr,
  easeSinIn: os,
  easeSinOut: ls,
  easeSin: Nr,
  easeSinInOut: Nr,
  easeExpIn: fs,
  easeExpOut: cs,
  easeExp: Br,
  easeExpInOut: Br,
  easeCircleIn: us,
  easeCircleOut: hs,
  easeCircle: $r,
  easeCircleInOut: $r,
  easeElasticIn: gs,
  easeElastic: Hr,
  easeElasticOut: Hr,
  easeElasticInOut: vs,
  easeBackIn: ms,
  easeBackOut: nn,
  easeBack: Ur,
  easeBackInOut: Ur,
  easeBounceIn: ds,
  easeBounce: Yt,
  easeBounceOut: Yt,
  easeBounceInOut: ps,
  schemeCategory10: Ts,
  schemeAccent: As,
  schemeDark2: Cs,
  schemePaired: Fs,
  schemePastel1: Os,
  schemePastel2: bs,
  schemeSet1: ks,
  schemeSet2: Ms,
  schemeSet3: Ds,
  schemeTableau10: Is
}, hr = "Texto de referencia", Cr = "Texto escaneado";
class WO extends _s {
  constructor(t, r, n) {
    super(t, r, n, {
      margin: { top: 10, right: 30, bottom: 20, left: 40 },
      key: "key",
      currentKey: !1,
      values: [],
      orientation: "vertical",
      labelRotation: 0,
      color: {
        key: !1,
        keys: !1,
        scheme: !1,
        current: "#1f77b4",
        default: "#AAA",
        axis: "#000"
      },
      axis: {
        yTitle: !1,
        xTitle: !1,
        yFormat: ".0f",
        xFormat: ".0f",
        yTicks: 10,
        xTicks: 10
      },
      tooltip: { label: !1, suffix: !1, suffixPlural: !1 },
      keys: { [Cr]: Cr, [hr]: hr },
      transition: { duration: 350, ease: "easeLinear" }
    });
  }
  /**
   * Init chart
   */
  initChart() {
    this.getDimensions(), this.initChartFrame("barchart"), this.cfg.tooltip.suffix && this.cfg.tooltip.suffixPlural && zn.addIrregularRule(this.cfg.tooltip.suffix, this.cfg.tooltip.suffixPlural), this.xScale = Pt.scaleBand(), this.xScaleInn = Pt.scaleBand(), this.yScale = Pt.scaleLinear(), this.axisg = this.g.append("g").attr("class", "chart__axis chart__axis--barchart"), this.yGrid = this.axisg.append("g").attr("class", "chart__grid chart__grid--y chart__grid--barchart"), this.xAxis = this.axisg.append("g").attr("class", "chart__axis-x chart__axis-x--barchart"), this.cfg.axis.yTitle && (this.yAxisTitle = this.axisg.append("text").attr("class", "chart__axis-title chart__axis-title--barchart").attr("transform", "rotate(-90)").style("text-anchor", "middle")), this.setChartDimension(), this.updateChart();
  }
  /**
   * Resize chart pipe
   */
  setScales() {
    this.xScale.rangeRound(
      this.cfg.orientation !== "horizontal" ? [0, this.cfg.width] : [0, this.cfg.height]
    ).paddingInner(0.1).domain(this.data.map((i) => i[this.cfg.key])), this.xScaleInn.domain(this.cfg.values).rangeRound([0, this.xScale.bandwidth()]).paddingInner(0.05);
    const t = this.calculateBiggestNumber();
    this.yScale.rangeRound(
      this.cfg.orientation !== "horizontal" ? [0, this.cfg.height] : [this.cfg.width, 0]
    ).domain([t, 0]), this.cfg.color.scheme instanceof Array ? this.colorScale = Pt.scaleOrdinal().range(this.cfg.color.scheme) : typeof this.cfg.color.scheme == "string" && (this.colorScale = Pt.scaleOrdinal(Pt[this.cfg.color.scheme]));
    const r = this.cfg.orientation !== "horizontal" ? Pt.axisLeft(this.yScale).tickSize(-this.cfg.width).ticks(this.cfg.axis.yTicks, this.cfg.axis.yFormat) : Pt.axisBottom(this.yScale).tickSize(-this.cfg.height).ticks(this.cfg.axis.yTicks, this.cfg.axis.yFormat), n = this.cfg.orientation !== "horizontal" ? Pt.axisBottom(this.xScale) : Pt.axisLeft(this.xScale);
    this.yGrid.attr(
      "transform",
      this.cfg.orientation !== "horizontal" ? "translate(0,0)" : `translate(0,${this.cfg.height})`
    ).transition(this.transition).call(r), this.xAxis.attr(
      "transform",
      this.cfg.orientation !== "horizontal" ? `translate(0,${this.cfg.height})` : "translate(0,0)"
    ).call(n);
  }
  /**
   * Set chart dimensional sizes
   */
  setChartDimension() {
    this.svg.attr(
      "viewBox",
      `0 0 ${this.cfg.width + this.cfg.margin.left + this.cfg.margin.right} ${this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom}`
    ).attr("width", this.cfg.width + this.cfg.margin.left + this.cfg.margin.right).attr("height", this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom), this.cfg.axis.yTitle && this.yAxisTitle.attr("y", -this.cfg.margin.left + 10).attr("x", -this.cfg.height / 2).text(this.cfg.axis.yTitle), this.cfg.labelRotation !== 0 && this.xAxis.selectAll("text").attr("y", Math.cos(this.cfg.labelRotation * Math.PI / 180) * 9).attr("x", Math.sin(this.cfg.labelRotation * Math.PI / 180) * 9).attr("dy", ".35em").attr("transform", `rotate(${this.cfg.labelRotation})`).style("text-anchor", "start");
  }
  /**
   * Bind data to main elements groups
   */
  bindData() {
    this.transition = Pt.transition("t").duration(this.cfg.transition.duration).ease(Pt[this.cfg.transition.ease]), this.g.selectAll(".chart__bar-group").remove(), this.itemg = this.g.selectAll(".chart__bar-group").data(this.data, (t) => t[this.cfg.key]);
  }
  hasComparissionData() {
    return this.data.some((t) => t[hr] > 0);
  }
  calculateTotals() {
    const t = this.data.reduce((n, i) => n + i[hr], 0), r = this.data.reduce((n, i) => n + i[Cr], 0);
    return { [hr]: t, [Cr]: r };
  }
  calculateMaximums() {
    const t = this.data.reduce(
      (n, i) => this.getBiggerNumber(n, i[hr]),
      0
    ), r = this.data.reduce(
      (n, i) => this.getBiggerNumber(n, i[Cr]),
      0
    );
    return { [hr]: t, [Cr]: r };
  }
  getBiggerNumber(t, r) {
    return t > r ? t : r;
  }
  calculateBiggestNumber() {
    const t = this.calculateTotals(), r = this.calculateMaximums(), n = r[hr], i = t[hr], a = r[Cr], s = t[Cr], o = this.calculatePercentage(n, i), l = this.calculatePercentage(a, s), f = this.getBiggerNumber(o, l);
    return this.roundToNextStep(f);
  }
  roundToNextStep(t) {
    return Math.ceil(t / 10) * 10;
  }
  calculatePercentage(t, r) {
    return t * 100 / r;
  }
  /**
   * Add new chart's elements
   */
  enterElements() {
    const t = this.calculateTotals();
    this.itemg.enter().append("g").attr("class", "chart__bar-group chart__bar-group--barchart").attr("transform", (n) => this.cfg.orientation !== "horizontal" ? `translate(${this.xScale(n[this.cfg.key])},0)` : `translate(0,${this.xScale(n[this.cfg.key])})`).selectAll(".chart__bar").data(
      (n) => this.cfg.values.map((i) => {
        const a = { ...n };
        return a[this.cfg.key] = n[this.cfg.key], a;
      })
    ).enter().append("rect").attr("class", "chart__bar chart__bar--barchart").classed("chart__bar--current", (n) => this.cfg.currentKey && n[this.cfg.key] === this.cfg.currentKey).attr("x", (n, i) => this.cfg.orientation !== "horizontal" ? this.xScaleInn(this.cfg.values[i % this.cfg.values.length]) : 0).attr("y", (n, i) => this.cfg.orientation !== "horizontal" ? this.cfg.height : this.xScaleInn(this.cfg.values[i % this.cfg.values.length])).attr("height", 0).attr("width", 0).on("mouseover", (n, i) => {
      const a = this.cfg.values[i % this.cfg.values.length], s = this.cfg.tooltip.suffixPlural ? zn(this.cfg.tooltip.suffix, n[a]) : this.cfg.tooltip.suffix, o = this.cfg.keys[a], l = this.calculatePercentage(n[a], t[a]).toFixed(2), f = this.cfg.tooltip.suffix ? `<div>${o}: ${l}% ${s}</div>` : `<div>${o}: ${l}%</div>`;
      this.tooltip.html(f).classed("active", !0);
    }).on("mouseout", () => {
      this.tooltip.classed("active", !1);
    }).on("mousemove", () => {
      this.tooltip.style("left", window.event.pageX - 28 + "px").style("top", window.event.pageY - 40 + "px");
    });
  }
  /**
   * Update chart's elements based on data change
   */
  updateElements() {
    const t = this.calculateTotals();
    this.itemg.transition(this.transition).attr("transform", (r) => this.cfg.orientation !== "horizontal" ? `translate(${this.xScale(r[this.cfg.key])},0)` : `translate(0,${this.xScale(r[this.cfg.key])})`), this.g.selectAll(".chart__bar").transition(this.transition).attr("fill", (r, n) => this.colorElement(r, this.cfg.values[n % this.cfg.values.length])).attr("opacity", (r, n) => n % 2 == 1 && this.hasComparissionData() ? 0.6 : 1).attr("x", (r, n) => this.cfg.orientation !== "horizontal" ? this.xScaleInn(this.cfg.values[n % this.cfg.values.length]) : 0).attr("y", (r, n) => this.cfg.orientation !== "horizontal" ? this.yScale(+r[this.cfg.values[n % this.cfg.values.length]]) : this.xScaleInn(this.cfg.values[n % this.cfg.values.length])).attr("width", (r, n) => {
      const i = this.cfg.values[n % this.cfg.values.length], a = this.calculatePercentage(r[i], t[i]);
      return this.cfg.orientation !== "horizontal" ? this.xScaleInn.bandwidth() : this.yScale(a);
    }).attr("height", (r, n) => this.cfg.orientation !== "horizontal" ? this.cfg.height - this.yScale(+r[this.cfg.values[n % this.cfg.values.length]]) : this.xScaleInn.bandwidth());
  }
  /**
   * Remove chart's elements without data
   */
  exitElements() {
    this.itemg.exit().transition(this.transition).style("opacity", 0).remove();
  }
}
const zO = {
  name: "D3BarChart",
  extends: xs,
  mounted() {
    this.chart = new WO(
      this.$refs.chart,
      JSON.parse(JSON.stringify(this.datum)),
      this.config
    );
  }
}, ft = {
  select: mn,
  selectAll: Za,
  scaleLinear: Li,
  scaleOrdinal: Kn,
  max: N0,
  min: _h,
  sum: F5,
  transition: Bi,
  pie: QC,
  arc: Rh,
  interpolate: Ni,
  easeLinear: es,
  easePolyIn: as,
  easePolyOut: ss,
  easePoly: Rr,
  easePolyInOut: Rr,
  easeQuadIn: ts,
  easeQuadOut: rs,
  easeQuad: Pr,
  easeQuadInOut: Pr,
  easeCubicIn: ns,
  easeCubicOut: is,
  easeCubic: yr,
  easeCubicInOut: yr,
  easeSinIn: os,
  easeSinOut: ls,
  easeSin: Nr,
  easeSinInOut: Nr,
  easeExpIn: fs,
  easeExpOut: cs,
  easeExp: Br,
  easeExpInOut: Br,
  easeCircleIn: us,
  easeCircleOut: hs,
  easeCircle: $r,
  easeCircleInOut: $r,
  easeElasticIn: gs,
  easeElastic: Hr,
  easeElasticOut: Hr,
  easeElasticInOut: vs,
  easeBackIn: ms,
  easeBackOut: nn,
  easeBack: Ur,
  easeBackInOut: Ur,
  easeBounceIn: ds,
  easeBounce: Yt,
  easeBounceOut: Yt,
  easeBounceInOut: ps,
  schemeCategory10: Ts,
  schemeAccent: As,
  schemeDark2: Cs,
  schemePaired: Fs,
  schemePastel1: Os,
  schemePastel2: bs,
  schemeSet1: ks,
  schemeSet2: Ms,
  schemeSet3: Ds,
  schemeTableau10: Is
};
class VO extends _s {
  constructor(t, r, n) {
    super(t, r, n, {
      margin: { top: 40, right: 20, bottom: 40, left: 20 },
      key: "",
      value: "value",
      color: { key: !1, keys: !1, scheme: !1, current: "#1f77b4", default: "#AAA", axis: "#000" },
      radius: { inner: !1, outter: !1, padding: 0, round: 0 },
      transition: { duration: 350, ease: "easeLinear" }
    });
  }
  /**
  * Init chart
  */
  initChart() {
    if (this.getDimensions(), this.initChartFrame("sliceschart"), this.cScale = ft.scaleOrdinal(), this.rScale = ft.scaleLinear(), this.arc = ft.arc(), this.pie = ft.pie().sort(null).value(() => 1).padAngle(this.cfg.radius.padding), this.cfg.radius && this.cfg.radius.inner) {
      const t = this.cfg.radius.outter ? this.cfg.radius.outter : Math.min(this.cfg.width, this.cfg.height) / 2;
      this.cfg.radius.relation = this.cfg.radius.inner ? this.cfg.radius.inner / t : 0;
    }
    this.gcenter = this.g.append("g"), this.setChartDimension(), this.updateChart(), this.centerText = this.g.append("text").attr("x", this.cfg.width / 2).attr("y", this.cfg.height / 2 + 10).attr("text-anchor", "middle");
  }
  /**
  * Set up chart dimensions (non depending on data)
  */
  setChartDimension() {
    this.svg.attr("viewBox", `0 0 ${this.cfg.width + this.cfg.margin.left + this.cfg.margin.right} ${this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom}`).attr("width", this.cfg.width + this.cfg.margin.left + this.cfg.margin.right).attr("height", this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom), this.gcenter.attr("transform", `translate(${this.cfg.width / 2}, ${this.cfg.height / 2})`);
  }
  /**
  * Bind data to main elements groups
  */
  bindData() {
    this.itemg = this.gcenter.selectAll(".chart__slice-group").data(this.pie(this.data), (t) => t.data[this.cfg.key]), this.transition = ft.transition("t").duration(this.cfg.transition.duration).ease(ft[this.cfg.transition.ease]);
  }
  /**
  * Set up scales
  */
  setScales() {
    this.cfg.radius.outter = this.cfg.radius && this.cfg.radius.outter ? this.cfg.radius.outter : Math.min(this.cfg.width, this.cfg.height) / 2, this.inRadius = this.cfg.radius && this.cfg.radius.inner ? this.cfg.radius.inner : 0, this.cfg.radius.relation && (this.inRadius = this.cfg.radius.outter * this.cfg.radius.relation), this.arc = ft.arc().outerRadius(this.cfg.radius.outter).innerRadius(this.inRadius).cornerRadius(this.cfg.radius.round);
    let t = ft.max(this.data, (r) => r[this.cfg.value]);
    t == 0 && (t = 1), this.rScale.range([this.inRadius, this.cfg.radius.outter]).domain([0, t]), this.cfg.color.scheme && (this.cfg.color.scheme instanceof Array ? this.colorScale = ft.scaleOrdinal().domain(this.data.map((r) => r[this.cfg.key])).range(this.cfg.color.scheme) : this.colorScale = ft.scaleOrdinal(ft[this.cfg.color.scheme]).domain(this.data.map((r) => r[this.cfg.key])));
  }
  /**
  * Add new chart's elements
  */
  enterElements() {
    const t = this.itemg.enter().append("g").attr("class", "chart__slice-group chart__slice-group--sliceschart");
    t.append("path").attr("class", "chart__slice chart__slice--sliceschart").on("mouseover", (r, n) => {
      const i = ft.sum(this.data, (o) => o.value), a = r.data.value > 0 && i > 0 ? Math.round(r.data.value / i * 100) : 0, s = r.data[this.cfg.key];
      this.centerText.text(`${s}: ${a}%`);
    }).on("mouseout", () => {
      this.centerText.text("");
    }).transition(this.transition).delay((r, n) => n * this.cfg.transition.duration).attrTween("d", (r) => {
      const n = ft.interpolate(r.startAngle + 0.1, r.endAngle);
      return (i) => (r.endAngle = n(i), this.arc(r));
    }).style("fill", (r) => this.cfg.color.default).style("opacity", 1), t.append("path").attr("class", "chart__slice chart__slice--sliceschart").transition(this.transition).delay((r, n) => n * this.cfg.transition.duration).attrTween("d", (r) => {
      const n = ft.interpolate(r.startAngle + 0.1, r.endAngle), i = ft.arc().outerRadius(this.rScale(r.data[this.cfg.value])).innerRadius(this.inRadius).cornerRadius(this.cfg.radius.round);
      return (a) => (r.endAngle = n(a), i(r));
    }).style("fill", (r) => this.colorElement(r.data)).style("pointer-events", "none").style("opacity", 1);
  }
  /**
  * Update chart's elements based on data change
  */
  updateElements() {
  }
  /**
  * Remove chart's elements without data
  */
  exitElements() {
    this.itemg.exit().transition(this.transition).style("opacity", 0).remove();
  }
  midAngle(t) {
    return t.startAngle + (t.endAngle - t.startAngle) / 2;
  }
  /**
  * Store the displayed angles in _current.
  * Then, interpolate from _current to the new angles.
  * During the transition, _current is updated in-place by d3.interpolate.
  */
  arcTween(t) {
    var r = ft.interpolate(this._current, t);
    return this._current = r(0), (n) => this.arc(r(n));
  }
}
const GO = {
  name: "D3SlicesChart",
  extends: xs,
  mounted() {
    this.chart = new VO(
      this.$refs.chart,
      JSON.parse(JSON.stringify(this.datum)),
      this.config
    );
  }
}, XO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  D3BarChart: zO,
  D3SlicesChart: GO,
  D3Sunburst: pO,
  D3WordsCloud: IO,
  TipiBarchart: u5,
  TipiCongressLink: WS,
  TipiCsvDownload: BS,
  TipiDeputy: z3,
  TipiHeader: jS,
  TipiIcon: Wr,
  TipiInitiativeCard: Zf,
  TipiInitiativeMeta: Qf,
  TipiLoader: ec,
  TipiMessage: Uv,
  TipiNavbar: h3,
  TipiNeuron: P6,
  TipiResults: Nv,
  TipiSplash: s5,
  TipiText: eT,
  TipiTopicCard: V6,
  TipiTopicLink: K6,
  TipiTopicPill: qf,
  TipiTopics: nA,
  TipiTwoCircles: e5,
  Utils: um
}, Symbol.toStringTag, { value: "Module" }));
let jO = (e) => {
  Object.values(XO).forEach((t) => {
    e.use(t);
  });
};
jO.version = "__VERSION__";
export {
  jO as default
};
