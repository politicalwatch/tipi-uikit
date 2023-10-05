import { openBlock as E, createElementBlock as R, createElementVNode as k, createStaticVNode as $s, normalizeClass as Ft, createBlock as Ct, resolveDynamicComponent as As, resolveComponent as _t, createVNode as vt, createCommentVNode as at, createTextVNode as wt, toDisplayString as tt, withCtx as Lt, Fragment as te, renderList as ee, withModifiers as Ps, renderSlot as Ia, withDirectives as aa, vShow as oa, pushScopeId as qu, popScopeId as Wu, normalizeStyle as ie, defineAsyncComponent as Uu, TransitionGroup as Gu } from "vue";
function Yu(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in t)) {
          const a = Object.getOwnPropertyDescriptor(r, i);
          a && Object.defineProperty(t, i, a.get ? a : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
const Xu = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, Qu = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M0 12.445v1.78h5.335v-1.78H0zm0-10.67v1.78h8.89v-1.78H0zM8.89 16v-1.78H16v-1.781H8.89v-1.78H7.11V16h1.78zM3.555 5.335v1.781H0v1.78h3.555v1.781h1.78V5.335h-1.78zM16 8.89V7.11H7.11v1.78H16zm-5.335-3.555h1.78v-1.78H16v-1.78h-3.555V0h-1.78v5.335z"
}, null, -1), Ju = [
  Qu
];
function Ku(t, e) {
  return E(), R("svg", Xu, Ju);
}
const Zu = { render: Ku }, tl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "16",
  fill: "none",
  viewBox: "0 0 12 16"
}, el = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M3.907 14.557C4.262 15.406 5.067 16 6 16c.934 0 1.738-.594 2.093-1.443H3.907zM6 1.529c.616 0 1.208.115 1.757.325v-.072C7.757.8 7 0 6.07 0h-.14C5 0 4.244.8 4.244 1.782v.07A4.907 4.907 0 0 1 6 1.53zm5.544 12.089H.456a.457.457 0 0 1-.446-.367.463.463 0 0 1 .238-.518c.044-.03.38-.279.716-1.029.617-1.377.746-3.318.746-4.703 0-2.5 1.925-4.533 4.29-4.533 2.36 0 4.28 2.023 4.29 4.515V7c0 1.385.13 3.326.746 4.703.336.75.672.998.716 1.029.188.092.28.303.237.518a.457.457 0 0 1-.445.367zm.213-.882z"
}, null, -1), nl = [
  el
];
function rl(t, e) {
  return E(), R("svg", tl, nl);
}
const il = { render: rl }, al = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, ol = /* @__PURE__ */ $s('<path fill="#5F69E2" d="M8 4.87a.476.476 0 0 1-.469-.483v-.96c0-.267.21-.484.469-.484s.469.217.469.484v.96c0 .267-.21.484-.469.484z"></path><path fill="#FFE377" d="M14.252 8.938H1.748a.476.476 0 0 0-.468.484v5.664c0 .267.21.484.468.484h12.504a.476.476 0 0 0 .468-.484V9.422a.477.477 0 0 0-.468-.484z"></path><path fill="#FC0" d="M14.252 8.938H8v6.632h6.252a.476.476 0 0 0 .468-.484V9.422a.477.477 0 0 0-.468-.484z"></path><path fill="#5F69E2" d="M4.224 4.87a.476.476 0 0 1-.469-.483v-.96c0-.267.21-.484.47-.484.258 0 .468.217.468.484v.96c0 .267-.21.484-.469.484z"></path><path fill="#3440DA" d="M11.776 4.87a.476.476 0 0 1-.469-.483v-.96c0-.267.21-.484.469-.484s.469.217.469.484v.96c0 .267-.21.484-.47.484z"></path><path fill="#FC0" d="M12.558.97c-.214-.411-.425-.757-.433-.771a.411.411 0 0 0-.35-.199.41.41 0 0 0-.348.199c-.009.014-.22.36-.433.77-.415.797-.468 1.116-.468 1.305 0 .712.56 1.291 1.25 1.291s1.25-.579 1.25-1.29c0-.19-.053-.509-.468-1.306z"></path><path fill="#3440DA" d="M8 2.943v1.928a.477.477 0 0 0 .469-.484v-.96A.477.477 0 0 0 8 2.943z"></path><path fill="#FFE377" d="M8.349.199C8.273.075 8.142 0 8 0s-.273.075-.349.199c-.009.014-.22.36-.433.77-.415.797-.468 1.116-.468 1.305 0 .712.56 1.291 1.25 1.291s1.25-.579 1.25-1.29c0-.19-.053-.509-.468-1.306A15.473 15.473 0 0 0 8.35.2z"></path><path fill="#FC0" d="M8.782.97C8.568.558 8.358.212 8.35.198A.414.414 0 0 0 8 0v3.565c.69 0 1.25-.579 1.25-1.29 0-.19-.053-.509-.468-1.306z"></path><path fill="#E5E5E5" d="M15.531 16H.47c-.261 0-.47-.217-.47-.484s.21-.484.469-.484H15.53c.26 0 .469.217.469.484s-.21.484-.469.484z"></path><path fill="#D6D6D6" d="M15.531 15.032H8V16h7.531c.26 0 .469-.217.469-.484s-.21-.484-.469-.484z"></path><path fill="#989EEC" d="M8.679 4.349H7.32a.58.58 0 0 0-.571.59v3.737c0 .326.256.59.571.59h1.36a.58.58 0 0 0 .571-.59V4.94a.58.58 0 0 0-.571-.59zm-3.776 0H3.546a.581.581 0 0 0-.572.59v3.737c0 .326.256.59.572.59h1.357a.58.58 0 0 0 .571-.59V4.94a.58.58 0 0 0-.571-.59z"></path><path fill="#7C83E7" d="M12.454 4.349h-1.357a.58.58 0 0 0-.571.59v3.737c0 .326.256.59.571.59h1.357a.581.581 0 0 0 .572-.59V4.94a.581.581 0 0 0-.572-.59zm-3.775 0H8v4.917h.679a.58.58 0 0 0 .571-.59V4.94a.58.58 0 0 0-.571-.59z"></path><path fill="#FFA1C0" d="M13.803 8.01H2.197c-.72 0-1.308.554-1.308 1.233v1.248c0 .34.159.656.435.869.312.24.728.314 1.111.197l1.184-.362a3.68 3.68 0 0 1 2.12 0l.934.286a4.575 4.575 0 0 0 2.653 0l.934-.286a3.674 3.674 0 0 1 2.121 0l1.183.362c.384.117.8.044 1.112-.197.276-.213.434-.53.434-.87V9.244c0-.68-.586-1.232-1.307-1.232z"></path><path fill="#FF80A9" d="M13.803 8.01H8v3.667c.45 0 .899-.065 1.326-.196l.934-.286a3.666 3.666 0 0 1 2.121 0l1.184.362c.383.117.799.044 1.11-.197.277-.213.435-.53.435-.87V9.244c0-.68-.586-1.232-1.307-1.232z"></path><path fill="#FFE377" d="M4.573.199A.41.41 0 0 0 4.224 0a.41.41 0 0 0-.349.199c-.008.014-.22.36-.433.77-.415.797-.468 1.116-.468 1.305 0 .712.56 1.291 1.25 1.291s1.25-.579 1.25-1.29c0-.19-.053-.509-.468-1.306A14.202 14.202 0 0 0 4.573.2z"></path>', 16), sl = [
  ol
];
function cl(t, e) {
  return E(), R("svg", al, sl);
}
const ul = { render: cl }, ll = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, fl = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M8 0 0 3.96v1.696h16V3.96L8 0zm.469 3.781H7.53v-.937h.938v.937zm-7.5 2.813H15.03v.937H.97v-.937zm10.312 1.875h2.813v4.687H11.28V8.47zM.761 14.125 0 16h16l-.761-1.875H.761zm5.833-5.656h2.812v4.687H6.594V8.47zm-4.688 0H4.72v4.687H1.906V8.47z"
}, null, -1), hl = [
  fl
];
function dl(t, e) {
  return E(), R("svg", ll, hl);
}
const pl = { render: dl }, gl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, ml = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M14.222 1.6h-.889V0h-1.777v1.6H4.444V0H2.667v1.6h-.89C.8 1.6 0 2.32 0 3.2v11.2c0 .88.8 1.6 1.778 1.6h12.444C15.2 16 16 15.28 16 14.4V3.2c0-.88-.8-1.6-1.778-1.6zm-.16 12.431H2V5.016h12.063v9.015z"
}, null, -1), yl = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M7.024 6h-4v4h4V6z"
}, null, -1), vl = [
  ml,
  yl
];
function _l(t, e) {
  return E(), R("svg", gl, vl);
}
const wl = { render: _l }, xl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "10",
  fill: "none",
  viewBox: "0 0 16 10"
}, bl = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M14.113 0 8 6.183 1.887 0 0 1.908 8 10l8-8.092L14.113 0z"
}, null, -1), Sl = [
  bl
];
function Cl(t, e) {
  return E(), R("svg", xl, Sl);
}
const Ml = { render: Cl }, Ol = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "16",
  fill: "none",
  viewBox: "0 0 10 16"
}, $l = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M10 14.113 3.817 8 10 1.887 8.092 0 0 8l8.092 8L10 14.113z"
}, null, -1), Al = [
  $l
];
function Pl(t, e) {
  return E(), R("svg", Ol, Al);
}
const El = { render: Pl }, Tl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "16",
  fill: "none",
  viewBox: "0 0 10 16"
}, Il = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M0 1.887 6.183 8 0 14.113 1.908 16 10 8 1.908 0 0 1.887z"
}, null, -1), kl = [
  Il
];
function Dl(t, e) {
  return E(), R("svg", Tl, kl);
}
const Nl = { render: Dl }, Rl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "10",
  fill: "none",
  viewBox: "0 0 16 10"
}, zl = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M1.887 10 8 3.817 14.113 10 16 8.092 8 0 0 8.092 1.887 10z"
}, null, -1), Fl = [
  zl
];
function Ll(t, e) {
  return E(), R("svg", Rl, Fl);
}
const Bl = { render: Ll }, Hl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, jl = /* @__PURE__ */ k("path", {
  fill: "#9CB0BF",
  "fill-rule": "evenodd",
  d: "M8 1.6A6.37 6.37 0 0 0 1.6 8 6.37 6.37 0 0 0 8 14.4 6.37 6.37 0 0 0 14.4 8 6.37 6.37 0 0 0 8 1.6ZM0 8c0-4.442 3.558-8 8-8s8 3.558 8 8-3.558 8-8 8a7.97 7.97 0 0 1-8-8Z",
  "clip-rule": "evenodd"
}, null, -1), Vl = /* @__PURE__ */ k("path", {
  fill: "#9CB0BF",
  "fill-rule": "evenodd",
  d: "M7.2 4h1.6v3.669l2.166 2.165-1.131 1.132L7.2 8.33V4Z",
  "clip-rule": "evenodd"
}, null, -1), ql = [
  jl,
  Vl
];
function Wl(t, e) {
  return E(), R("svg", Hl, ql);
}
const Ul = { render: Wl }, Gl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, Yl = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M16 .727 15.273 0 8 7.273.727 0 0 .727 7.273 8 0 15.273.727 16 8 8.727 15.273 16l.727-.727L8.727 8 16 .727z"
}, null, -1), Xl = [
  Yl
];
function Ql(t, e) {
  return E(), R("svg", Gl, Xl);
}
const Jl = { render: Ql }, Kl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, Zl = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 10.88L10.88 12 8 9.12 5.12 12 4 10.88 6.88 8 4 5.12 5.12 4 8 6.88 10.88 4 12 5.12 9.12 8 12 10.88z"
}, null, -1), tf = [
  Zl
];
function ef(t, e) {
  return E(), R("svg", Kl, tf);
}
const nf = { render: ef }, rf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, af = /* @__PURE__ */ k("path", {
  fill: "#1D1D1B",
  d: "M14.4 3.2h-.8v6.4c0 .44-.36.8-.8.8H3.2v.8c0 .88.72 1.6 1.6 1.6h8L16 16V4.8c0-.88-.72-1.6-1.6-1.6Zm-2.4 4V1.6c0-.88-.72-1.6-1.6-1.6H1.6C.72 0 0 .72 0 1.6V12l3.2-3.2h7.2c.88 0 1.6-.72 1.6-1.6Z"
}, null, -1), of = [
  af
];
function sf(t, e) {
  return E(), R("svg", rf, of);
}
const cf = { render: sf }, uf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, lf = /* @__PURE__ */ k("path", {
  fill: "#E81C1C",
  d: "M10.406 8 16 2.406 13.594 0 8 5.594 2.406 0 0 2.406 5.594 8 0 13.594 2.406 16 8 10.406 13.594 16 16 13.594 10.406 8Z"
}, null, -1), ff = [
  lf
];
function hf(t, e) {
  return E(), R("svg", uf, ff);
}
const df = { render: hf }, pf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "16",
  fill: "none",
  viewBox: "0 0 12 16"
}, gf = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M8.71 9.8H3.097a.59.59 0 0 0-.58.6c0 .331.26.6.58.6H8.71a.59.59 0 0 0 .58-.6.59.59 0 0 0-.58-.6zM3.097 7.4h3.29c.32 0 .58.269.58.6 0 .331-.26.6-.58.6h-3.29a.59.59 0 0 1-.58-.6c0-.331.26-.6.58-.6zm5.613 4.8H3.097a.59.59 0 0 0-.58.6c0 .331.26.6.58.6H8.71a.59.59 0 0 0 .58-.6.59.59 0 0 0-.58-.6z"
}, null, -1), mf = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  "fill-rule": "evenodd",
  d: "M11.818 4.604 7.27.164A.572.572 0 0 0 6.87 0H.581A.59.59 0 0 0 0 .6v14.8c0 .331.26.6.58.6h10.84a.59.59 0 0 0 .58-.6V5.04a.61.61 0 0 0-.182-.436zm-.98 10.196H1.162V1.2h5.033v4c0 .331.26.6.58.6h4.065v9zm-.715-10.2L7.355 1.898V4.6h2.768z",
  "clip-rule": "evenodd"
}, null, -1), yf = [
  gf,
  mf
];
function vf(t, e) {
  return E(), R("svg", pf, yf);
}
const _f = { render: vf }, wf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "16",
  fill: "none",
  viewBox: "0 0 12 16"
}, xf = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M12 5.647H8.571V0H3.43v5.647H0l6 6.588 6-6.588zm-12 8.47V16h12v-1.882H0z"
}, null, -1), bf = [
  xf
];
function Sf(t, e) {
  return E(), R("svg", wf, bf);
}
const Cf = { render: Sf }, Mf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, Of = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8zm.8 12H7.2v-1.6h1.6V12zm0-3.2H7.2V4h1.6v4.8z"
}, null, -1), $f = [
  Of
];
function Af(t, e) {
  return E(), R("svg", Mf, $f);
}
const Pf = { render: Af }, Ef = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16"
}, Tf = /* @__PURE__ */ k("path", {
  fill: "#000",
  "fill-rule": "nonzero",
  d: "M8 .02c-4.42 0-8 3.52-8 7.862 0 3.474 2.292 6.42 5.47 7.459.4.074.547-.17.547-.378 0-.187-.007-.681-.01-1.337-2.226.474-2.695-1.054-2.695-1.054-.364-.908-.89-1.15-.89-1.15-.725-.488.056-.478.056-.478.803.055 1.225.81 1.225.81.714 1.202 1.873.855 2.33.654.072-.508.278-.854.507-1.051-1.777-.197-3.644-.873-3.644-3.885 0-.858.31-1.56.823-2.11-.09-.198-.36-.997.07-2.08 0 0 .67-.21 2.2.806a7.81 7.81 0 0 1 2-.265c.68.004 1.36.09 2 .265 1.52-1.017 2.19-.806 2.19-.806.43 1.083.16 1.882.08 2.08.51.55.82 1.252.82 2.11 0 3.02-1.87 3.685-3.65 3.878.28.236.54.718.54 1.455 0 1.052-.01 1.897-.01 2.152 0 .207.14.452.55.374C13.71 14.299 16 11.35 16 7.882 16 3.541 12.418.021 8 .021Z"
}, null, -1), If = [
  Tf
];
function kf(t, e) {
  return E(), R("svg", Ef, If);
}
const Df = { render: kf }, Nf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "11",
  fill: "none",
  viewBox: "0 0 16 11"
}, Rf = /* @__PURE__ */ k("path", {
  fill: "#000",
  d: "M16 0H0v1h16zm0 5H0v1h16zm0 5H0v1h16z"
}, null, -1), zf = [
  Rf
];
function Ff(t, e) {
  return E(), R("svg", Nf, zf);
}
const Lf = { render: Ff }, Bf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, Hf = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M7.2 12h1.6V7.2H7.2V12zM8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.4c-3.52 0-6.4-2.88-6.4-6.4 0-3.52 2.88-6.4 6.4-6.4 3.52 0 6.4 2.88 6.4 6.4 0 3.52-2.88 6.4-6.4 6.4zm-.8-8.8h1.6V4H7.2v1.6z"
}, null, -1), jf = [
  Hf
];
function Vf(t, e) {
  return E(), R("svg", Bf, jf);
}
const qf = { render: Vf }, Wf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "2",
  fill: "none",
  viewBox: "0 0 12 2"
}, Uf = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M11.727 0H.273C.123 0 0 .078 0 .174v1.652C0 1.922.122 2 .273 2h11.454c.15 0 .273-.078.273-.174V.174C12 .078 11.878 0 11.727 0z"
}, null, -1), Gf = [
  Uf
];
function Yf(t, e) {
  return E(), R("svg", Wf, Gf);
}
const Xf = { render: Yf }, Qf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "16",
  fill: "none",
  viewBox: "0 0 14 16"
}, Jf = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M11.95 1.965C10.628.698 8.87 0 7 0S3.372.698 2.05 1.965C.728 3.232 0 4.916 0 6.708 0 8.5.728 10.184 2.05 11.45l4.604 4.412a.502.502 0 0 0 .692 0l4.604-4.412C13.272 10.184 14 8.5 14 6.708c0-1.792-.728-3.476-2.05-4.743zm-2.752 6.85A3.158 3.158 0 0 1 7 9.687c-.83 0-1.611-.31-2.198-.873a2.896 2.896 0 0 1-.91-2.106 2.9 2.9 0 0 1 .91-2.107A3.164 3.164 0 0 1 7 3.73c.83 0 1.611.31 2.198.872.588.563.911 1.311.911 2.107 0 .796-.323 1.544-.91 2.106z"
}, null, -1), Kf = [
  Jf
];
function Zf(t, e) {
  return E(), R("svg", Qf, Kf);
}
const th = { render: Zf }, eh = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "12",
  fill: "none",
  viewBox: "0 0 16 12"
}, nh = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M0 0v.6l8 6.41L16 .6V0H0z"
}, null, -1), rh = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M8 8.288 3.288 4.475 0 1.84V12h16V1.84l-3.288 2.635L8 8.288z"
}, null, -1), ih = [
  nh,
  rh
];
function ah(t, e) {
  return E(), R("svg", eh, ih);
}
const oh = { render: ah }, sh = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "4",
  fill: "none",
  viewBox: "0 0 16 4"
}, ch = /* @__PURE__ */ k("path", {
  fill: "#9CB0BF",
  d: "M0 0h4v4H0zM6 0h4v4H6zM12 0h4v4h-4z"
}, null, -1), uh = [
  ch
];
function lh(t, e) {
  return E(), R("svg", sh, uh);
}
const fh = { render: lh }, hh = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, dh = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M14.222 14.222H1.778V1.778H8V0H1.778C.8 0 0 .8 0 1.778v12.444C0 15.2.8 16 1.778 16h12.444C15.2 16 16 15.2 16 14.222V8h-1.778v6.222zM9.778 0v1.778h3.2l-8.711 8.71 1.244 1.245 8.711-8.71v3.2H16V0H9.778z"
}, null, -1), ph = [
  dh
];
function gh(t, e) {
  return E(), R("svg", hh, ph);
}
const mh = { render: gh }, yh = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  fill: "none",
  viewBox: "0 0 12 12"
}, vh = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M7.286 4.929a.215.215 0 0 1-.215-.215V0H4.93v4.714a.215.215 0 0 1-.215.215H0V7.07h4.714c.119 0 .215.096.215.215V12H7.07V7.286c0-.119.096-.215.215-.215H12V4.93H7.286z"
}, null, -1), _h = [
  vh
];
function wh(t, e) {
  return E(), R("svg", yh, _h);
}
const xh = { render: wh }, bh = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "none",
  viewBox: "0 0 16 16"
}, Sh = /* @__PURE__ */ k("path", {
  fill: "#1D1D1B",
  d: "M3.52 6.232C3.542 2.77 6.35-.021 9.798 0 13.243.021 16.021 2.843 16 6.306c-.02 3.447-2.808 6.231-6.24 6.231-3.454-.014-6.244-2.835-6.24-6.305Zm2.47 0A3.782 3.782 0 0 0 9.8 9.986c2.083-.019 3.756-1.732 3.737-3.825A3.781 3.781 0 0 0 9.76 2.406a3.803 3.803 0 0 0-3.774 3.826h.005Z"
}, null, -1), Ch = /* @__PURE__ */ k("path", {
  fill: "#1D1D1B",
  d: "M5.326 8.913 0 14.242 1.743 16l5.326-5.328-1.743-1.759Z"
}, null, -1), Mh = [
  Sh,
  Ch
];
function Oh(t, e) {
  return E(), R("svg", bh, Mh);
}
const $h = { render: Oh }, Ah = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "14",
  fill: "none",
  viewBox: "0 0 16 14"
}, Ph = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "m13.555 0-8 8.688-3.11-3.377L0 7.967 5.555 14 16 2.656 13.555 0z"
}, null, -1), Eh = [
  Ph
];
function Th(t, e) {
  return E(), R("svg", Ah, Eh);
}
const Ih = { render: Th }, kh = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "12",
  fill: "none",
  viewBox: "0 0 16 12"
}, Dh = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M5.032 12c6.038 0 9.34-4.616 9.34-8.62 0-.13-.003-.261-.01-.39A6.419 6.419 0 0 0 16 1.42a6.982 6.982 0 0 1-1.885.477c.678-.375 1.198-.968 1.443-1.675a6.914 6.914 0 0 1-2.084.735A3.412 3.412 0 0 0 11.078 0C9.265 0 7.795 1.357 7.795 3.029c0 .238.029.469.085.69-2.728-.125-5.148-1.33-6.767-3.163A2.846 2.846 0 0 0 .67 2.077c0 1.051.58 1.98 1.46 2.522A3.467 3.467 0 0 1 .644 4.22v.039c0 1.467 1.131 2.692 2.633 2.97a3.554 3.554 0 0 1-1.482.051c.418 1.204 1.63 2.08 3.066 2.104a6.943 6.943 0 0 1-4.077 1.297A7.23 7.23 0 0 1 0 10.64 9.864 9.864 0 0 0 5.032 12"
}, null, -1), Nh = [
  Dh
];
function Rh(t, e) {
  return E(), R("svg", kh, Nh);
}
const zh = { render: Rh }, Fh = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "16",
  fill: "none",
  viewBox: "0 0 12 16"
}, Lh = /* @__PURE__ */ k("path", {
  fill: "#2D4252",
  d: "M3.429 12.235H8.57V6.588H12L6 0 0 6.588h3.429v5.647zM12 14.118H0V16h12v-1.882z"
}, null, -1), Bh = [
  Lh
];
function Hh(t, e) {
  return E(), R("svg", Fh, Bh);
}
const jh = { render: Hh }, pt = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, i] of e)
    n[r] = i;
  return n;
}, Vh = {
  name: "TipiIcon",
  components: {
    icon_advanced: Zu,
    icon_bell: il,
    icon_birthday: ul,
    icon_building: pl,
    icon_calendar: wl,
    icon_chevron_down: Ml,
    icon_chevron_left: El,
    icon_chevron_right: Nl,
    icon_chevron_up: Bl,
    icon_clock: Ul,
    icon_close_menu: Jl,
    icon_close: nf,
    icon_conversation: cf,
    icon_denied: df,
    icon_document: _f,
    icon_download: Cf,
    icon_error: Pf,
    icon_github: Df,
    icon_hamburger: Lf,
    icon_info: qf,
    icon_less: Xf,
    icon_location: th,
    icon_mail: oh,
    icon_more: fh,
    icon_open_blank: mh,
    icon_plus: xh,
    icon_search: $h,
    icon_success: Ih,
    icon_twitter: zh,
    icon_upload: jh
  },
  props: {
    icon: String,
    color: String
  },
  updated() {
    this.color && this.$el.querySelector("svg path") && (this.$el.querySelector("svg path").style.fill = this.color);
  }
};
function qh(t, e, n, r, i, a) {
  return E(), R("span", {
    class: Ft(["c-icon", `c-icon--type-${n.icon}`])
  }, [
    (E(), Ct(As(`icon_${n.icon}`)))
  ], 2);
}
const We = /* @__PURE__ */ pt(Vh, [["render", qh]]), zr = function(t, e) {
  let n, r, i, a, o = 0, s, c = /(\d+)|(\D+)/g, u = /\d/;
  if (isFinite(t) && isFinite(e))
    return t - e;
  if (n = String(t).toLowerCase(), r = String(e).toLowerCase(), n === r)
    return 0;
  if (!(u.test(n) && u.test(r)))
    return n > r ? 1 : -1;
  for (n = n.match(c), r = r.match(c), s = n.length > r.length ? r.length : n.length; o < s; )
    if (i = n[o], a = r[o++], i !== a)
      return isFinite(i) && isFinite(a) ? (i.charAt(0) === "0" && (i = "." + i), a.charAt(0) === "0" && (a = "." + a), i - a) : i > a ? 1 : -1;
  return n.length - r.length;
}, Wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  naturalSort: zr
}, Symbol.toStringTag, { value: "Module" })), Uh = {
  name: "TipiTopicPill",
  components: {
    TipiIcon: We
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
      let t = this.topics;
      return this.limit && (t = t.slice(0, this.limit)), this.topicsStyles && t.length ? (this.order ? t.slice().sort(zr) : t.slice()).map((n, r) => this.withLinks ? `
              <a href="#topic-${r}" class="c-topics__topic c-topics__topic__small" style="background-color:${this.topicsStyles[n].color}">
                ${this.topicsStyles[n].shortname}
              </a>
            ` : `
              <div class="c-topics__topic c-topics__topic__small" style="background-color:${this.topicsStyles[n].color}">
                ${this.topicsStyles[n].shortname}
              </div>
            `).join("") : t.length ? t.join("<br/>") : `<div class="c-topics__topic c-topics__topic__small" style="background-color: #ccc; color: #444;">
          ${this.topicsStyles["no-topic"] ? this.topicsStyles["no-topic"].shortname : "Sin temática"}
        </div>`;
    }
  }
}, Gh = { class: "c-topics" }, Yh = ["innerHTML"], Xh = {
  key: 0,
  class: "c-topics__topic c-topics__topic__small",
  style: { "background-color": "#2d4252" }
};
function Qh(t, e, n, r, i, a) {
  const o = _t("tipi-icon");
  return E(), R("div", Gh, [
    k("span", {
      innerHTML: a.getTopics()
    }, null, 8, Yh),
    n.limit && n.limit < n.topics.length ? (E(), R("div", Xh, [
      vt(o, { icon: "more" })
    ])) : at("", !0)
  ]);
}
const Es = /* @__PURE__ */ pt(Uh, [["render", Qh]]);
var Jh = {};
function Kh() {
  return Jh;
}
function sa(t) {
  "@babel/helpers - typeof";
  return sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, sa(t);
}
function oe(t, e) {
  if (e.length < t)
    throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + e.length + " present");
}
function Tt(t) {
  oe(1, arguments);
  var e = Object.prototype.toString.call(t);
  return t instanceof Date || sa(t) === "object" && e === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || e === "[object Number]" ? new Date(t) : ((typeof t == "string" || e === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function dr(t, e) {
  oe(2, arguments);
  var n = Tt(t), r = Tt(e), i = n.getTime() - r.getTime();
  return i < 0 ? -1 : i > 0 ? 1 : i;
}
function Zh(t, e) {
  oe(2, arguments);
  var n = Tt(t), r = Tt(e), i = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return i * 12 + a;
}
function td(t) {
  oe(1, arguments);
  var e = Tt(t);
  return e.setHours(23, 59, 59, 999), e;
}
function ed(t) {
  oe(1, arguments);
  var e = Tt(t), n = e.getMonth();
  return e.setFullYear(e.getFullYear(), n + 1, 0), e.setHours(23, 59, 59, 999), e;
}
function nd(t) {
  oe(1, arguments);
  var e = Tt(t);
  return td(e).getTime() === ed(e).getTime();
}
function rd(t, e) {
  oe(2, arguments);
  var n = Tt(t), r = Tt(e), i = dr(n, r), a = Math.abs(Zh(n, r)), o;
  if (a < 1)
    o = 0;
  else {
    n.getMonth() === 1 && n.getDate() > 27 && n.setDate(30), n.setMonth(n.getMonth() - i * a);
    var s = dr(n, r) === -i;
    nd(Tt(t)) && a === 1 && dr(t, r) === 1 && (s = !1), o = i * (a - Number(s));
  }
  return o === 0 ? 0 : o;
}
function id(t, e) {
  return oe(2, arguments), Tt(t).getTime() - Tt(e).getTime();
}
var go = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function(e) {
    return e < 0 ? Math.ceil(e) : Math.floor(e);
  }
  // Math.trunc is not supported by IE
}, ad = "trunc";
function od(t) {
  return t ? go[t] : go[ad];
}
function sd(t, e, n) {
  oe(2, arguments);
  var r = id(t, e) / 1e3;
  return od(n == null ? void 0 : n.roundingMethod)(r);
}
var cd = {
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
}, ud = function(e, n, r) {
  var i, a = cd[e];
  return typeof a == "string" ? i = a : n === 1 ? i = a.one : i = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + i : i + " ago" : i;
};
const ld = ud;
function _n(t) {
  return function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.width ? String(e.width) : t.defaultWidth, r = t.formats[n] || t.formats[t.defaultWidth];
    return r;
  };
}
var fd = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, hd = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, dd = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, pd = {
  date: _n({
    formats: fd,
    defaultWidth: "full"
  }),
  time: _n({
    formats: hd,
    defaultWidth: "full"
  }),
  dateTime: _n({
    formats: dd,
    defaultWidth: "full"
  })
};
const gd = pd;
var md = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, yd = function(e, n, r, i) {
  return md[e];
};
const vd = yd;
function ye(t) {
  return function(e, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", i;
    if (r === "formatting" && t.formattingValues) {
      var a = t.defaultFormattingWidth || t.defaultWidth, o = n != null && n.width ? String(n.width) : a;
      i = t.formattingValues[o] || t.formattingValues[a];
    } else {
      var s = t.defaultWidth, c = n != null && n.width ? String(n.width) : t.defaultWidth;
      i = t.values[c] || t.values[s];
    }
    var u = t.argumentCallback ? t.argumentCallback(e) : e;
    return i[u];
  };
}
var _d = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, wd = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, xd = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, bd = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Sd = {
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
}, Cd = {
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
}, Md = function(e, n) {
  var r = Number(e), i = r % 100;
  if (i > 20 || i < 10)
    switch (i % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, Od = {
  ordinalNumber: Md,
  era: ye({
    values: _d,
    defaultWidth: "wide"
  }),
  quarter: ye({
    values: wd,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: ye({
    values: xd,
    defaultWidth: "wide"
  }),
  day: ye({
    values: bd,
    defaultWidth: "wide"
  }),
  dayPeriod: ye({
    values: Sd,
    defaultWidth: "wide",
    formattingValues: Cd,
    defaultFormattingWidth: "wide"
  })
};
const $d = Od;
function ve(t) {
  return function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, i = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth], a = e.match(i);
    if (!a)
      return null;
    var o = a[0], s = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth], c = Array.isArray(s) ? Pd(s, function(h) {
      return h.test(o);
    }) : Ad(s, function(h) {
      return h.test(o);
    }), u;
    u = t.valueCallback ? t.valueCallback(c) : c, u = n.valueCallback ? n.valueCallback(u) : u;
    var p = e.slice(o.length);
    return {
      value: u,
      rest: p
    };
  };
}
function Ad(t, e) {
  for (var n in t)
    if (t.hasOwnProperty(n) && e(t[n]))
      return n;
}
function Pd(t, e) {
  for (var n = 0; n < t.length; n++)
    if (e(t[n]))
      return n;
}
function Ts(t) {
  return function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.match(t.matchPattern);
    if (!r)
      return null;
    var i = r[0], a = e.match(t.parsePattern);
    if (!a)
      return null;
    var o = t.valueCallback ? t.valueCallback(a[0]) : a[0];
    o = n.valueCallback ? n.valueCallback(o) : o;
    var s = e.slice(i.length);
    return {
      value: o,
      rest: s
    };
  };
}
var Ed = /^(\d+)(th|st|nd|rd)?/i, Td = /\d+/i, Id = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, kd = {
  any: [/^b/i, /^(a|c)/i]
}, Dd = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Nd = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Rd = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, zd = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Fd = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Ld = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Bd = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Hd = {
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
}, jd = {
  ordinalNumber: Ts({
    matchPattern: Ed,
    parsePattern: Td,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: ve({
    matchPatterns: Id,
    defaultMatchWidth: "wide",
    parsePatterns: kd,
    defaultParseWidth: "any"
  }),
  quarter: ve({
    matchPatterns: Dd,
    defaultMatchWidth: "wide",
    parsePatterns: Nd,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: ve({
    matchPatterns: Rd,
    defaultMatchWidth: "wide",
    parsePatterns: zd,
    defaultParseWidth: "any"
  }),
  day: ve({
    matchPatterns: Fd,
    defaultMatchWidth: "wide",
    parsePatterns: Ld,
    defaultParseWidth: "any"
  }),
  dayPeriod: ve({
    matchPatterns: Bd,
    defaultMatchWidth: "any",
    parsePatterns: Hd,
    defaultParseWidth: "any"
  })
};
const Vd = jd;
var qd = {
  code: "en-US",
  formatDistance: ld,
  formatLong: gd,
  formatRelative: vd,
  localize: $d,
  match: Vd,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Wd = qd;
function Is(t, e) {
  if (t == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  return t;
}
function Ud(t) {
  return Is({}, t);
}
function mo(t) {
  var e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
}
var yo = 1440, Gd = 2520, Mi = 43200, Yd = 86400;
function Xd(t, e, n) {
  var r, i;
  oe(2, arguments);
  var a = Kh(), o = (r = (i = n == null ? void 0 : n.locale) !== null && i !== void 0 ? i : a.locale) !== null && r !== void 0 ? r : Wd;
  if (!o.formatDistance)
    throw new RangeError("locale must contain formatDistance property");
  var s = dr(t, e);
  if (isNaN(s))
    throw new RangeError("Invalid time value");
  var c = Is(Ud(n), {
    addSuffix: !!(n != null && n.addSuffix),
    comparison: s
  }), u, p;
  s > 0 ? (u = Tt(e), p = Tt(t)) : (u = Tt(t), p = Tt(e));
  var h = sd(p, u), m = (mo(p) - mo(u)) / 1e3, l = Math.round((h - m) / 60), v;
  if (l < 2)
    return n != null && n.includeSeconds ? h < 5 ? o.formatDistance("lessThanXSeconds", 5, c) : h < 10 ? o.formatDistance("lessThanXSeconds", 10, c) : h < 20 ? o.formatDistance("lessThanXSeconds", 20, c) : h < 40 ? o.formatDistance("halfAMinute", 0, c) : h < 60 ? o.formatDistance("lessThanXMinutes", 1, c) : o.formatDistance("xMinutes", 1, c) : l === 0 ? o.formatDistance("lessThanXMinutes", 1, c) : o.formatDistance("xMinutes", l, c);
  if (l < 45)
    return o.formatDistance("xMinutes", l, c);
  if (l < 90)
    return o.formatDistance("aboutXHours", 1, c);
  if (l < yo) {
    var _ = Math.round(l / 60);
    return o.formatDistance("aboutXHours", _, c);
  } else {
    if (l < Gd)
      return o.formatDistance("xDays", 1, c);
    if (l < Mi) {
      var y = Math.round(l / yo);
      return o.formatDistance("xDays", y, c);
    } else if (l < Yd)
      return v = Math.round(l / Mi), o.formatDistance("aboutXMonths", v, c);
  }
  if (v = rd(p, u), v < 12) {
    var f = Math.round(l / Mi);
    return o.formatDistance("xMonths", f, c);
  } else {
    var d = v % 12, w = Math.floor(v / 12);
    return d < 3 ? o.formatDistance("aboutXYears", w, c) : d < 9 ? o.formatDistance("overXYears", w, c) : o.formatDistance("almostXYears", w + 1, c);
  }
}
function Qd(t, e) {
  return oe(1, arguments), Xd(t, Date.now(), e);
}
var Jd = {
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
}, Kd = function(e, n, r) {
  var i, a = Jd[e];
  return typeof a == "string" ? i = a : n === 1 ? i = a.one : i = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "en " + i : "hace " + i : i;
};
const Zd = Kd;
var tp = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, ep = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, np = {
  full: "{{date}} 'a las' {{time}}",
  long: "{{date}} 'a las' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, rp = {
  date: _n({
    formats: tp,
    defaultWidth: "full"
  }),
  time: _n({
    formats: ep,
    defaultWidth: "full"
  }),
  dateTime: _n({
    formats: np,
    defaultWidth: "full"
  })
};
const ip = rp;
var ap = {
  lastWeek: "'el' eeee 'pasado a la' p",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'mañana a la' p",
  nextWeek: "eeee 'a la' p",
  other: "P"
}, op = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'mañana a las' p",
  nextWeek: "eeee 'a las' p",
  other: "P"
}, sp = function(e, n, r, i) {
  return n.getUTCHours() !== 1 ? op[e] : ap[e];
};
const cp = sp;
var up = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "después de cristo"]
}, lp = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, fp = {
  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
}, hp = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
  abbreviated: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  wide: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
}, dp = {
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
}, pp = {
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
}, gp = function(e, n) {
  var r = Number(e);
  return r + "º";
}, mp = {
  ordinalNumber: gp,
  era: ye({
    values: up,
    defaultWidth: "wide"
  }),
  quarter: ye({
    values: lp,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return Number(e) - 1;
    }
  }),
  month: ye({
    values: fp,
    defaultWidth: "wide"
  }),
  day: ye({
    values: hp,
    defaultWidth: "wide"
  }),
  dayPeriod: ye({
    values: dp,
    defaultWidth: "wide",
    formattingValues: pp,
    defaultFormattingWidth: "wide"
  })
};
const yp = mp;
var vp = /^(\d+)(º)?/i, _p = /\d+/i, wp = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
}, xp = {
  any: [/^ac/i, /^dc/i],
  wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
}, bp = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, Sp = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Cp = {
  narrow: /^[efmajsond]/i,
  abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
  wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
}, Mp = {
  narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
}, Op = {
  narrow: /^[dlmjvs]/i,
  short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
  abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
  wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
}, $p = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
}, Ap = {
  narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
  any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
}, Pp = {
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
}, Ep = {
  ordinalNumber: Ts({
    matchPattern: vp,
    parsePattern: _p,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: ve({
    matchPatterns: wp,
    defaultMatchWidth: "wide",
    parsePatterns: xp,
    defaultParseWidth: "any"
  }),
  quarter: ve({
    matchPatterns: bp,
    defaultMatchWidth: "wide",
    parsePatterns: Sp,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: ve({
    matchPatterns: Cp,
    defaultMatchWidth: "wide",
    parsePatterns: Mp,
    defaultParseWidth: "any"
  }),
  day: ve({
    matchPatterns: Op,
    defaultMatchWidth: "wide",
    parsePatterns: $p,
    defaultParseWidth: "any"
  }),
  dayPeriod: ve({
    matchPatterns: Ap,
    defaultMatchWidth: "any",
    parsePatterns: Pp,
    defaultParseWidth: "any"
  })
};
const Tp = Ep;
var Ip = {
  code: "es",
  formatDistance: Zd,
  formatLong: ip,
  formatRelative: cp,
  localize: yp,
  match: Tp,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
const kp = Ip, Dp = {
  name: "TipiInitiativeMeta",
  components: {
    TipiIcon: We
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
    getColorByStatus: function(t) {
      for (let e in this.metaColors)
        if (this.metaColors[e].indexOf(t) != -1)
          return e;
      return "neutral";
    },
    getIcon: function(t) {
      const e = this.getColorByStatus(t.status);
      return { completed: "success", neutral: "clock", error: "denied" }[e];
    },
    getStateMessage: function(t) {
      if (t.status == "Desconocida")
        return `${t.status}`;
      const e = this.getColorByStatus(t.status);
      let n = t.updated;
      e == "neutral" && (n = t.created);
      const r = Qd(new Date(n), {
        locale: kp,
        addSuffix: !0
      });
      return `${t.status} ${r}`;
    }
  }
}, Np = { class: "c-initiative-meta" };
function Rp(t, e, n, r, i, a) {
  const o = _t("tipi-icon");
  return E(), R("div", Np, [
    k("div", {
      class: Ft(
        `c-initiative-meta__status c-initiative-meta__status--${a.getColorByStatus(
          n.initiative.status
        )}`
      )
    }, [
      k("strong", null, [
        vt(o, {
          icon: a.getIcon(n.initiative)
        }, null, 8, ["icon"]),
        wt(" " + tt(a.getStateMessage(n.initiative)), 1)
      ])
    ], 2)
  ]);
}
const ks = /* @__PURE__ */ pt(Dp, [["render", Rp]]), zp = {
  name: "TipiInitiativeCard",
  components: {
    TipiIcon: We,
    TipiTopicPill: Es,
    TipiInitiativeMeta: ks
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
    getAuthors: function(t) {
      return t.authors.length ? t.authors.join("<br/>") : "";
    },
    getTopics: function(t) {
      let e = [];
      for (const n of t.tagged)
        e = e.concat(n.topics);
      return e;
    },
    getDeputies: function(t) {
      if (t.deputies.length == 0)
        return "";
      let e = /\[.*\]/;
      return t.deputies.map((n) => {
        var r = e.exec(n);
        return r ? n.replace(r[0], "").trim() : n;
      }).join("<br/>");
    }
  }
}, Fp = ["id"], Lp = { class: "c-initiative-card__title" }, Bp = { key: 1 }, Hp = {
  key: 0,
  class: "c-initiative-card__authors"
}, jp = { class: "c-initiative-card__label" }, Vp = ["innerHTML"], qp = {
  key: 1,
  class: "c-initiative-card__authors"
}, Wp = { class: "c-initiative-card__label" }, Up = ["innerHTML"], Gp = ["href"], Yp = { class: "o-grid" }, Xp = { class: "o-grid__col" }, Qp = { class: "o-grid__col o-grid__col--right" }, Jp = ["href"];
function Kp(t, e, n, r, i, a) {
  const o = _t("router-link"), s = _t("tipi-topic-pill"), c = _t("tipi-initiative-meta"), u = _t("tipi-icon");
  return E(), R("div", null, [
    k("article", {
      class: "c-initiative-card",
      id: `initiative-card-${n.initiative.id}`
    }, [
      k("h2", Lp, [
        n.initiative.id ? (E(), Ct(o, {
          key: 0,
          to: { name: "initiative", params: { id: n.initiative.id } }
        }, {
          default: Lt(() => [
            wt(tt(n.initiative.title), 1)
          ]),
          _: 1
        }, 8, ["to"])) : (E(), R("span", Bp, tt(n.initiative.title), 1))
      ]),
      a.getDeputies(n.initiative) && n.extendedLayout ? (E(), R("div", Hp, [
        k("h3", jp, tt(n.metaDeputies), 1),
        k("p", {
          innerHTML: a.getDeputies(n.initiative)
        }, null, 8, Vp)
      ])) : at("", !0),
      a.getAuthors(n.initiative) && n.extendedLayout ? (E(), R("div", qp, [
        k("h3", Wp, tt(n.metaGroupsOthers), 1),
        k("p", {
          innerHTML: a.getAuthors(n.initiative)
        }, null, 8, Up)
      ])) : at("", !0),
      n.initiative.id ? (E(), Ct(o, {
        key: 2,
        to: { name: "initiative", params: { id: n.initiative.id } }
      }, {
        default: Lt(({ href: p }) => [
          k("a", {
            href: p,
            target: "_blank"
          }, [
            vt(s, {
              class: "c-initiative-card__topics",
              topicsStyles: n.topicsStyles,
              topics: a.getTopics(n.initiative),
              limit: 3
            }, null, 8, ["topicsStyles", "topics"])
          ], 8, Gp)
        ]),
        _: 1
      }, 8, ["to"])) : at("", !0),
      k("div", Yp, [
        k("div", Xp, [
          vt(c, {
            initiative: n.initiative,
            metaColors: n.metaColors
          }, null, 8, ["initiative", "metaColors"])
        ]),
        k("div", Qp, [
          n.initiative.id ? (E(), Ct(o, {
            key: 0,
            to: { name: "initiative", params: { id: n.initiative.id } }
          }, {
            default: Lt(({ href: p }) => [
              k("a", {
                href: p,
                target: "_blank"
              }, [
                vt(u, {
                  icon: "open-blank",
                  class: "c-icon--secondary"
                })
              ], 8, Jp)
            ]),
            _: 1
          }, 8, ["to"])) : at("", !0)
        ])
      ])
    ], 8, Fp)
  ]);
}
const Ds = /* @__PURE__ */ pt(zp, [["render", Kp]]), Zp = {
  name: "TipiLoader",
  props: {
    title: String,
    subtitle: String
  }
}, tg = { class: "c-loader" }, eg = /* @__PURE__ */ $s('<div class="c-loader__spinner"><div class="c-loader__spinner-dot"></div><div class="c-loader__spinner-dot"></div><div class="c-loader__spinner-dot"></div><div class="c-loader__spinner-dot"></div><div class="c-loader__spinner-dot"></div><div class="c-loader__spinner-dot"></div></div>', 1), ng = {
  key: 0,
  class: "c-loader__text"
}, rg = {
  key: 0,
  class: "c-loader__title"
};
function ig(t, e, n, r, i, a) {
  return E(), R("div", tg, [
    eg,
    n.title || n.subtitle ? (E(), R("div", ng, [
      n.title ? (E(), R("h4", rg, tt(n.title), 1)) : at("", !0),
      wt(" " + tt(n.subtitle), 1)
    ])) : at("", !0)
  ]);
}
const Ns = /* @__PURE__ */ pt(Zp, [["render", ig]]);
var mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Xn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Rs(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(t).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(t, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    });
  }), n;
}
var zs = { exports: {} }, Oi = { exports: {} }, $i = { exports: {} }, vo;
function Fs() {
  return vo || (vo = 1, function(t) {
    (function(e, n) {
      t.exports ? t.exports = n() : e.EvEmitter = n();
    })(typeof window < "u" ? window : mt, function() {
      function e() {
      }
      var n = e.prototype;
      return n.on = function(r, i) {
        if (!(!r || !i)) {
          var a = this._events = this._events || {}, o = a[r] = a[r] || [];
          return o.indexOf(i) == -1 && o.push(i), this;
        }
      }, n.once = function(r, i) {
        if (!(!r || !i)) {
          this.on(r, i);
          var a = this._onceEvents = this._onceEvents || {}, o = a[r] = a[r] || {};
          return o[i] = !0, this;
        }
      }, n.off = function(r, i) {
        var a = this._events && this._events[r];
        if (!(!a || !a.length)) {
          var o = a.indexOf(i);
          return o != -1 && a.splice(o, 1), this;
        }
      }, n.emitEvent = function(r, i) {
        var a = this._events && this._events[r];
        if (!(!a || !a.length)) {
          a = a.slice(0), i = i || [];
          for (var o = this._onceEvents && this._onceEvents[r], s = 0; s < a.length; s++) {
            var c = a[s], u = o && o[c];
            u && (this.off(r, c), delete o[c]), c.apply(this, i);
          }
          return this;
        }
      }, n.allOff = function() {
        delete this._events, delete this._onceEvents;
      }, e;
    });
  }($i)), $i.exports;
}
var Ai = { exports: {} };
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
var _o;
function ka() {
  return _o || (_o = 1, function(t) {
    (function(e, n) {
      t.exports ? t.exports = n() : e.getSize = n();
    })(window, function() {
      function n(l) {
        var v = parseFloat(l), _ = l.indexOf("%") == -1 && !isNaN(v);
        return _ && v;
      }
      function r() {
      }
      var i = typeof console > "u" ? r : function(l) {
        console.error(l);
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
      ], o = a.length;
      function s() {
        for (var l = {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0,
          outerWidth: 0,
          outerHeight: 0
        }, v = 0; v < o; v++) {
          var _ = a[v];
          l[_] = 0;
        }
        return l;
      }
      function c(l) {
        var v = getComputedStyle(l);
        return v || i("Style returned " + v + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), v;
      }
      var u = !1, p;
      function h() {
        if (!u) {
          u = !0;
          var l = document.createElement("div");
          l.style.width = "200px", l.style.padding = "1px 2px 3px 4px", l.style.borderStyle = "solid", l.style.borderWidth = "1px 2px 3px 4px", l.style.boxSizing = "border-box";
          var v = document.body || document.documentElement;
          v.appendChild(l);
          var _ = c(l);
          p = Math.round(n(_.width)) == 200, m.isBoxSizeOuter = p, v.removeChild(l);
        }
      }
      function m(l) {
        if (h(), typeof l == "string" && (l = document.querySelector(l)), !(!l || typeof l != "object" || !l.nodeType)) {
          var v = c(l);
          if (v.display == "none")
            return s();
          var _ = {};
          _.width = l.offsetWidth, _.height = l.offsetHeight;
          for (var y = _.isBorderBox = v.boxSizing == "border-box", f = 0; f < o; f++) {
            var d = a[f], w = v[d], A = parseFloat(w);
            _[d] = isNaN(A) ? 0 : A;
          }
          var I = _.paddingLeft + _.paddingRight, H = _.paddingTop + _.paddingBottom, q = _.marginLeft + _.marginRight, j = _.marginTop + _.marginBottom, z = _.borderLeftWidth + _.borderRightWidth, L = _.borderTopWidth + _.borderBottomWidth, b = y && p, S = n(v.width);
          S !== !1 && (_.width = S + // add padding and border unless it's already including it
          (b ? 0 : I + z));
          var C = n(v.height);
          return C !== !1 && (_.height = C + // add padding and border unless it's already including it
          (b ? 0 : H + L)), _.innerWidth = _.width - (I + z), _.innerHeight = _.height - (H + L), _.outerWidth = _.width + q, _.outerHeight = _.height + j, _;
        }
      }
      return m;
    });
  }(Ai)), Ai.exports;
}
var Pi = { exports: {} }, Ei = { exports: {} }, wo;
function ag() {
  return wo || (wo = 1, function(t) {
    (function(e, n) {
      t.exports ? t.exports = n() : e.matchesSelector = n();
    })(window, function() {
      var n = function() {
        var r = window.Element.prototype;
        if (r.matches)
          return "matches";
        if (r.matchesSelector)
          return "matchesSelector";
        for (var i = ["webkit", "moz", "ms", "o"], a = 0; a < i.length; a++) {
          var o = i[a], s = o + "MatchesSelector";
          if (r[s])
            return s;
        }
      }();
      return function(i, a) {
        return i[n](a);
      };
    });
  }(Ei)), Ei.exports;
}
var xo;
function og() {
  return xo || (xo = 1, function(t) {
    (function(e, n) {
      t.exports ? t.exports = n(
        e,
        ag()
      ) : e.fizzyUIUtils = n(
        e,
        e.matchesSelector
      );
    })(window, function(n, r) {
      var i = {};
      i.extend = function(s, c) {
        for (var u in c)
          s[u] = c[u];
        return s;
      }, i.modulo = function(s, c) {
        return (s % c + c) % c;
      };
      var a = Array.prototype.slice;
      i.makeArray = function(s) {
        if (Array.isArray(s))
          return s;
        if (s == null)
          return [];
        var c = typeof s == "object" && typeof s.length == "number";
        return c ? a.call(s) : [s];
      }, i.removeFrom = function(s, c) {
        var u = s.indexOf(c);
        u != -1 && s.splice(u, 1);
      }, i.getParent = function(s, c) {
        for (; s.parentNode && s != document.body; )
          if (s = s.parentNode, r(s, c))
            return s;
      }, i.getQueryElement = function(s) {
        return typeof s == "string" ? document.querySelector(s) : s;
      }, i.handleEvent = function(s) {
        var c = "on" + s.type;
        this[c] && this[c](s);
      }, i.filterFindElements = function(s, c) {
        s = i.makeArray(s);
        var u = [];
        return s.forEach(function(p) {
          if (p instanceof HTMLElement) {
            if (!c) {
              u.push(p);
              return;
            }
            r(p, c) && u.push(p);
            for (var h = p.querySelectorAll(c), m = 0; m < h.length; m++)
              u.push(h[m]);
          }
        }), u;
      }, i.debounceMethod = function(s, c, u) {
        u = u || 100;
        var p = s.prototype[c], h = c + "Timeout";
        s.prototype[c] = function() {
          var m = this[h];
          clearTimeout(m);
          var l = arguments, v = this;
          this[h] = setTimeout(function() {
            p.apply(v, l), delete v[h];
          }, u);
        };
      }, i.docReady = function(s) {
        var c = document.readyState;
        c == "complete" || c == "interactive" ? setTimeout(s) : document.addEventListener("DOMContentLoaded", s);
      }, i.toDashed = function(s) {
        return s.replace(/(.)([A-Z])/g, function(c, u, p) {
          return u + "-" + p;
        }).toLowerCase();
      };
      var o = n.console;
      return i.htmlInit = function(s, c) {
        i.docReady(function() {
          var u = i.toDashed(c), p = "data-" + u, h = document.querySelectorAll("[" + p + "]"), m = document.querySelectorAll(".js-" + u), l = i.makeArray(h).concat(i.makeArray(m)), v = p + "-options", _ = n.jQuery;
          l.forEach(function(y) {
            var f = y.getAttribute(p) || y.getAttribute(v), d;
            try {
              d = f && JSON.parse(f);
            } catch (A) {
              o && o.error("Error parsing " + p + " on " + y.className + ": " + A);
              return;
            }
            var w = new s(y, d);
            _ && _.data(y, c, w);
          });
        });
      }, i;
    });
  }(Pi)), Pi.exports;
}
var Ti = { exports: {} }, bo;
function sg() {
  return bo || (bo = 1, function(t) {
    (function(e, n) {
      t.exports ? t.exports = n(
        Fs(),
        ka()
      ) : (e.Outlayer = {}, e.Outlayer.Item = n(
        e.EvEmitter,
        e.getSize
      ));
    })(window, function(n, r) {
      function i(y) {
        for (var f in y)
          return !1;
        return f = null, !0;
      }
      var a = document.documentElement.style, o = typeof a.transition == "string" ? "transition" : "WebkitTransition", s = typeof a.transform == "string" ? "transform" : "WebkitTransform", c = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
      }[o], u = {
        transform: s,
        transition: o,
        transitionDuration: o + "Duration",
        transitionProperty: o + "Property",
        transitionDelay: o + "Delay"
      };
      function p(y, f) {
        y && (this.element = y, this.layout = f, this.position = {
          x: 0,
          y: 0
        }, this._create());
      }
      var h = p.prototype = Object.create(n.prototype);
      h.constructor = p, h._create = function() {
        this._transn = {
          ingProperties: {},
          clean: {},
          onEnd: {}
        }, this.css({
          position: "absolute"
        });
      }, h.handleEvent = function(y) {
        var f = "on" + y.type;
        this[f] && this[f](y);
      }, h.getSize = function() {
        this.size = r(this.element);
      }, h.css = function(y) {
        var f = this.element.style;
        for (var d in y) {
          var w = u[d] || d;
          f[w] = y[d];
        }
      }, h.getPosition = function() {
        var y = getComputedStyle(this.element), f = this.layout._getOption("originLeft"), d = this.layout._getOption("originTop"), w = y[f ? "left" : "right"], A = y[d ? "top" : "bottom"], I = parseFloat(w), H = parseFloat(A), q = this.layout.size;
        w.indexOf("%") != -1 && (I = I / 100 * q.width), A.indexOf("%") != -1 && (H = H / 100 * q.height), I = isNaN(I) ? 0 : I, H = isNaN(H) ? 0 : H, I -= f ? q.paddingLeft : q.paddingRight, H -= d ? q.paddingTop : q.paddingBottom, this.position.x = I, this.position.y = H;
      }, h.layoutPosition = function() {
        var y = this.layout.size, f = {}, d = this.layout._getOption("originLeft"), w = this.layout._getOption("originTop"), A = d ? "paddingLeft" : "paddingRight", I = d ? "left" : "right", H = d ? "right" : "left", q = this.position.x + y[A];
        f[I] = this.getXValue(q), f[H] = "";
        var j = w ? "paddingTop" : "paddingBottom", z = w ? "top" : "bottom", L = w ? "bottom" : "top", b = this.position.y + y[j];
        f[z] = this.getYValue(b), f[L] = "", this.css(f), this.emitEvent("layout", [this]);
      }, h.getXValue = function(y) {
        var f = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !f ? y / this.layout.size.width * 100 + "%" : y + "px";
      }, h.getYValue = function(y) {
        var f = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && f ? y / this.layout.size.height * 100 + "%" : y + "px";
      }, h._transitionTo = function(y, f) {
        this.getPosition();
        var d = this.position.x, w = this.position.y, A = y == this.position.x && f == this.position.y;
        if (this.setPosition(y, f), A && !this.isTransitioning) {
          this.layoutPosition();
          return;
        }
        var I = y - d, H = f - w, q = {};
        q.transform = this.getTranslate(I, H), this.transition({
          to: q,
          onTransitionEnd: {
            transform: this.layoutPosition
          },
          isCleaning: !0
        });
      }, h.getTranslate = function(y, f) {
        var d = this.layout._getOption("originLeft"), w = this.layout._getOption("originTop");
        return y = d ? y : -y, f = w ? f : -f, "translate3d(" + y + "px, " + f + "px, 0)";
      }, h.goTo = function(y, f) {
        this.setPosition(y, f), this.layoutPosition();
      }, h.moveTo = h._transitionTo, h.setPosition = function(y, f) {
        this.position.x = parseFloat(y), this.position.y = parseFloat(f);
      }, h._nonTransition = function(y) {
        this.css(y.to), y.isCleaning && this._removeStyles(y.to);
        for (var f in y.onTransitionEnd)
          y.onTransitionEnd[f].call(this);
      }, h.transition = function(y) {
        if (!parseFloat(this.layout.options.transitionDuration)) {
          this._nonTransition(y);
          return;
        }
        var f = this._transn;
        for (var d in y.onTransitionEnd)
          f.onEnd[d] = y.onTransitionEnd[d];
        for (d in y.to)
          f.ingProperties[d] = !0, y.isCleaning && (f.clean[d] = !0);
        y.from && (this.css(y.from), this.element.offsetHeight), this.enableTransition(y.to), this.css(y.to), this.isTransitioning = !0;
      };
      function m(y) {
        return y.replace(/([A-Z])/g, function(f) {
          return "-" + f.toLowerCase();
        });
      }
      var l = "opacity," + m(s);
      h.enableTransition = function() {
        if (!this.isTransitioning) {
          var y = this.layout.options.transitionDuration;
          y = typeof y == "number" ? y + "ms" : y, this.css({
            transitionProperty: l,
            transitionDuration: y,
            transitionDelay: this.staggerDelay || 0
          }), this.element.addEventListener(c, this, !1);
        }
      }, h.onwebkitTransitionEnd = function(y) {
        this.ontransitionend(y);
      }, h.onotransitionend = function(y) {
        this.ontransitionend(y);
      };
      var v = {
        "-webkit-transform": "transform"
      };
      h.ontransitionend = function(y) {
        if (y.target === this.element) {
          var f = this._transn, d = v[y.propertyName] || y.propertyName;
          if (delete f.ingProperties[d], i(f.ingProperties) && this.disableTransition(), d in f.clean && (this.element.style[y.propertyName] = "", delete f.clean[d]), d in f.onEnd) {
            var w = f.onEnd[d];
            w.call(this), delete f.onEnd[d];
          }
          this.emitEvent("transitionEnd", [this]);
        }
      }, h.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(c, this, !1), this.isTransitioning = !1;
      }, h._removeStyles = function(y) {
        var f = {};
        for (var d in y)
          f[d] = "";
        this.css(f);
      };
      var _ = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
      };
      return h.removeTransitionStyles = function() {
        this.css(_);
      }, h.stagger = function(y) {
        y = isNaN(y) ? 0 : y, this.staggerDelay = y + "ms";
      }, h.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
      }, h.remove = function() {
        if (!o || !parseFloat(this.layout.options.transitionDuration)) {
          this.removeElem();
          return;
        }
        this.once("transitionEnd", function() {
          this.removeElem();
        }), this.hide();
      }, h.reveal = function() {
        delete this.isHidden, this.css({ display: "" });
        var y = this.layout.options, f = {}, d = this.getHideRevealTransitionEndProperty("visibleStyle");
        f[d] = this.onRevealTransitionEnd, this.transition({
          from: y.hiddenStyle,
          to: y.visibleStyle,
          isCleaning: !0,
          onTransitionEnd: f
        });
      }, h.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal");
      }, h.getHideRevealTransitionEndProperty = function(y) {
        var f = this.layout.options[y];
        if (f.opacity)
          return "opacity";
        for (var d in f)
          return d;
      }, h.hide = function() {
        this.isHidden = !0, this.css({ display: "" });
        var y = this.layout.options, f = {}, d = this.getHideRevealTransitionEndProperty("hiddenStyle");
        f[d] = this.onHideTransitionEnd, this.transition({
          from: y.visibleStyle,
          to: y.hiddenStyle,
          // keep hidden stuff hidden
          isCleaning: !0,
          onTransitionEnd: f
        });
      }, h.onHideTransitionEnd = function() {
        this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
      }, h.destroy = function() {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: ""
        });
      }, p;
    });
  }(Ti)), Ti.exports;
}
/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */
var So;
function cg() {
  return So || (So = 1, function(t) {
    (function(e, n) {
      t.exports ? t.exports = n(
        e,
        Fs(),
        ka(),
        og(),
        sg()
      ) : e.Outlayer = n(
        e,
        e.EvEmitter,
        e.getSize,
        e.fizzyUIUtils,
        e.Outlayer.Item
      );
    })(window, function(n, r, i, a, o) {
      var s = n.console, c = n.jQuery, u = function() {
      }, p = 0, h = {};
      function m(f, d) {
        var w = a.getQueryElement(f);
        if (!w) {
          s && s.error("Bad element for " + this.constructor.namespace + ": " + (w || f));
          return;
        }
        this.element = w, c && (this.$element = c(this.element)), this.options = a.extend({}, this.constructor.defaults), this.option(d);
        var A = ++p;
        this.element.outlayerGUID = A, h[A] = this, this._create();
        var I = this._getOption("initLayout");
        I && this.layout();
      }
      m.namespace = "outlayer", m.Item = o, m.defaults = {
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
      var l = m.prototype;
      a.extend(l, r.prototype), l.option = function(f) {
        a.extend(this.options, f);
      }, l._getOption = function(f) {
        var d = this.constructor.compatOptions[f];
        return d && this.options[d] !== void 0 ? this.options[d] : this.options[f];
      }, m.compatOptions = {
        // currentName: oldName
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
      }, l._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), a.extend(this.element.style, this.options.containerStyle);
        var f = this._getOption("resize");
        f && this.bindResize();
      }, l.reloadItems = function() {
        this.items = this._itemize(this.element.children);
      }, l._itemize = function(f) {
        for (var d = this._filterFindItemElements(f), w = this.constructor.Item, A = [], I = 0; I < d.length; I++) {
          var H = d[I], q = new w(H, this);
          A.push(q);
        }
        return A;
      }, l._filterFindItemElements = function(f) {
        return a.filterFindElements(f, this.options.itemSelector);
      }, l.getItemElements = function() {
        return this.items.map(function(f) {
          return f.element;
        });
      }, l.layout = function() {
        this._resetLayout(), this._manageStamps();
        var f = this._getOption("layoutInstant"), d = f !== void 0 ? f : !this._isLayoutInited;
        this.layoutItems(this.items, d), this._isLayoutInited = !0;
      }, l._init = l.layout, l._resetLayout = function() {
        this.getSize();
      }, l.getSize = function() {
        this.size = i(this.element);
      }, l._getMeasurement = function(f, d) {
        var w = this.options[f], A;
        w ? (typeof w == "string" ? A = this.element.querySelector(w) : w instanceof HTMLElement && (A = w), this[f] = A ? i(A)[d] : w) : this[f] = 0;
      }, l.layoutItems = function(f, d) {
        f = this._getItemsForLayout(f), this._layoutItems(f, d), this._postLayout();
      }, l._getItemsForLayout = function(f) {
        return f.filter(function(d) {
          return !d.isIgnored;
        });
      }, l._layoutItems = function(f, d) {
        if (this._emitCompleteOnItems("layout", f), !(!f || !f.length)) {
          var w = [];
          f.forEach(function(A) {
            var I = this._getItemLayoutPosition(A);
            I.item = A, I.isInstant = d || A.isLayoutInstant, w.push(I);
          }, this), this._processLayoutQueue(w);
        }
      }, l._getItemLayoutPosition = function() {
        return {
          x: 0,
          y: 0
        };
      }, l._processLayoutQueue = function(f) {
        this.updateStagger(), f.forEach(function(d, w) {
          this._positionItem(d.item, d.x, d.y, d.isInstant, w);
        }, this);
      }, l.updateStagger = function() {
        var f = this.options.stagger;
        if (f == null) {
          this.stagger = 0;
          return;
        }
        return this.stagger = y(f), this.stagger;
      }, l._positionItem = function(f, d, w, A, I) {
        A ? f.goTo(d, w) : (f.stagger(I * this.stagger), f.moveTo(d, w));
      }, l._postLayout = function() {
        this.resizeContainer();
      }, l.resizeContainer = function() {
        var f = this._getOption("resizeContainer");
        if (f) {
          var d = this._getContainerSize();
          d && (this._setContainerMeasure(d.width, !0), this._setContainerMeasure(d.height, !1));
        }
      }, l._getContainerSize = u, l._setContainerMeasure = function(f, d) {
        if (f !== void 0) {
          var w = this.size;
          w.isBorderBox && (f += d ? w.paddingLeft + w.paddingRight + w.borderLeftWidth + w.borderRightWidth : w.paddingBottom + w.paddingTop + w.borderTopWidth + w.borderBottomWidth), f = Math.max(f, 0), this.element.style[d ? "width" : "height"] = f + "px";
        }
      }, l._emitCompleteOnItems = function(f, d) {
        var w = this;
        function A() {
          w.dispatchEvent(f + "Complete", null, [d]);
        }
        var I = d.length;
        if (!d || !I) {
          A();
          return;
        }
        var H = 0;
        function q() {
          H++, H == I && A();
        }
        d.forEach(function(j) {
          j.once(f, q);
        });
      }, l.dispatchEvent = function(f, d, w) {
        var A = d ? [d].concat(w) : w;
        if (this.emitEvent(f, A), c)
          if (this.$element = this.$element || c(this.element), d) {
            var I = c.Event(d);
            I.type = f, this.$element.trigger(I, w);
          } else
            this.$element.trigger(f, w);
      }, l.ignore = function(f) {
        var d = this.getItem(f);
        d && (d.isIgnored = !0);
      }, l.unignore = function(f) {
        var d = this.getItem(f);
        d && delete d.isIgnored;
      }, l.stamp = function(f) {
        f = this._find(f), f && (this.stamps = this.stamps.concat(f), f.forEach(this.ignore, this));
      }, l.unstamp = function(f) {
        f = this._find(f), f && f.forEach(function(d) {
          a.removeFrom(this.stamps, d), this.unignore(d);
        }, this);
      }, l._find = function(f) {
        if (f)
          return typeof f == "string" && (f = this.element.querySelectorAll(f)), f = a.makeArray(f), f;
      }, l._manageStamps = function() {
        !this.stamps || !this.stamps.length || (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
      }, l._getBoundingRect = function() {
        var f = this.element.getBoundingClientRect(), d = this.size;
        this._boundingRect = {
          left: f.left + d.paddingLeft + d.borderLeftWidth,
          top: f.top + d.paddingTop + d.borderTopWidth,
          right: f.right - (d.paddingRight + d.borderRightWidth),
          bottom: f.bottom - (d.paddingBottom + d.borderBottomWidth)
        };
      }, l._manageStamp = u, l._getElementOffset = function(f) {
        var d = f.getBoundingClientRect(), w = this._boundingRect, A = i(f), I = {
          left: d.left - w.left - A.marginLeft,
          top: d.top - w.top - A.marginTop,
          right: w.right - d.right - A.marginRight,
          bottom: w.bottom - d.bottom - A.marginBottom
        };
        return I;
      }, l.handleEvent = a.handleEvent, l.bindResize = function() {
        n.addEventListener("resize", this), this.isResizeBound = !0;
      }, l.unbindResize = function() {
        n.removeEventListener("resize", this), this.isResizeBound = !1;
      }, l.onresize = function() {
        this.resize();
      }, a.debounceMethod(m, "onresize", 100), l.resize = function() {
        !this.isResizeBound || !this.needsResizeLayout() || this.layout();
      }, l.needsResizeLayout = function() {
        var f = i(this.element), d = this.size && f;
        return d && f.innerWidth !== this.size.innerWidth;
      }, l.addItems = function(f) {
        var d = this._itemize(f);
        return d.length && (this.items = this.items.concat(d)), d;
      }, l.appended = function(f) {
        var d = this.addItems(f);
        d.length && (this.layoutItems(d, !0), this.reveal(d));
      }, l.prepended = function(f) {
        var d = this._itemize(f);
        if (d.length) {
          var w = this.items.slice(0);
          this.items = d.concat(w), this._resetLayout(), this._manageStamps(), this.layoutItems(d, !0), this.reveal(d), this.layoutItems(w);
        }
      }, l.reveal = function(f) {
        if (this._emitCompleteOnItems("reveal", f), !(!f || !f.length)) {
          var d = this.updateStagger();
          f.forEach(function(w, A) {
            w.stagger(A * d), w.reveal();
          });
        }
      }, l.hide = function(f) {
        if (this._emitCompleteOnItems("hide", f), !(!f || !f.length)) {
          var d = this.updateStagger();
          f.forEach(function(w, A) {
            w.stagger(A * d), w.hide();
          });
        }
      }, l.revealItemElements = function(f) {
        var d = this.getItems(f);
        this.reveal(d);
      }, l.hideItemElements = function(f) {
        var d = this.getItems(f);
        this.hide(d);
      }, l.getItem = function(f) {
        for (var d = 0; d < this.items.length; d++) {
          var w = this.items[d];
          if (w.element == f)
            return w;
        }
      }, l.getItems = function(f) {
        f = a.makeArray(f);
        var d = [];
        return f.forEach(function(w) {
          var A = this.getItem(w);
          A && d.push(A);
        }, this), d;
      }, l.remove = function(f) {
        var d = this.getItems(f);
        this._emitCompleteOnItems("remove", d), !(!d || !d.length) && d.forEach(function(w) {
          w.remove(), a.removeFrom(this.items, w);
        }, this);
      }, l.destroy = function() {
        var f = this.element.style;
        f.height = "", f.position = "", f.width = "", this.items.forEach(function(w) {
          w.destroy();
        }), this.unbindResize();
        var d = this.element.outlayerGUID;
        delete h[d], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace);
      }, m.data = function(f) {
        f = a.getQueryElement(f);
        var d = f && f.outlayerGUID;
        return d && h[d];
      }, m.create = function(f, d) {
        var w = v(m);
        return w.defaults = a.extend({}, m.defaults), a.extend(w.defaults, d), w.compatOptions = a.extend({}, m.compatOptions), w.namespace = f, w.data = m.data, w.Item = v(o), a.htmlInit(w, f), c && c.bridget && c.bridget(f, w), w;
      };
      function v(f) {
        function d() {
          f.apply(this, arguments);
        }
        return d.prototype = Object.create(f.prototype), d.prototype.constructor = d, d;
      }
      var _ = {
        ms: 1,
        s: 1e3
      };
      function y(f) {
        if (typeof f == "number")
          return f;
        var d = f.match(/(^\d*\.?\d*)(\w*)/), w = d && d[1], A = d && d[2];
        if (!w.length)
          return 0;
        w = parseFloat(w);
        var I = _[A] || 1;
        return w * I;
      }
      return m.Item = o, m;
    });
  }(Oi)), Oi.exports;
}
/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
(function(t) {
  (function(e, n) {
    t.exports ? t.exports = n(
      cg(),
      ka()
    ) : e.Masonry = n(
      e.Outlayer,
      e.getSize
    );
  })(window, function(n, r) {
    var i = n.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var a = i.prototype;
    return a._resetLayout = function() {
      this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
      for (var o = 0; o < this.cols; o++)
        this.colYs.push(0);
      this.maxY = 0, this.horizontalColIndex = 0;
    }, a.measureColumns = function() {
      if (this.getContainerWidth(), !this.columnWidth) {
        var o = this.items[0], s = o && o.element;
        this.columnWidth = s && r(s).outerWidth || // if first elem has no width, default to size of container
        this.containerWidth;
      }
      var c = this.columnWidth += this.gutter, u = this.containerWidth + this.gutter, p = u / c, h = c - u % c, m = h && h < 1 ? "round" : "floor";
      p = Math[m](p), this.cols = Math.max(p, 1);
    }, a.getContainerWidth = function() {
      var o = this._getOption("fitWidth"), s = o ? this.element.parentNode : this.element, c = r(s);
      this.containerWidth = c && c.innerWidth;
    }, a._getItemLayoutPosition = function(o) {
      o.getSize();
      var s = o.size.outerWidth % this.columnWidth, c = s && s < 1 ? "round" : "ceil", u = Math[c](o.size.outerWidth / this.columnWidth);
      u = Math.min(u, this.cols);
      for (var p = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", h = this[p](u, o), m = {
        x: this.columnWidth * h.col,
        y: h.y
      }, l = h.y + o.size.outerHeight, v = u + h.col, _ = h.col; _ < v; _++)
        this.colYs[_] = l;
      return m;
    }, a._getTopColPosition = function(o) {
      var s = this._getTopColGroup(o), c = Math.min.apply(Math, s);
      return {
        col: s.indexOf(c),
        y: c
      };
    }, a._getTopColGroup = function(o) {
      if (o < 2)
        return this.colYs;
      for (var s = [], c = this.cols + 1 - o, u = 0; u < c; u++)
        s[u] = this._getColGroupY(u, o);
      return s;
    }, a._getColGroupY = function(o, s) {
      if (s < 2)
        return this.colYs[o];
      var c = this.colYs.slice(o, o + s);
      return Math.max.apply(Math, c);
    }, a._getHorizontalColPosition = function(o, s) {
      var c = this.horizontalColIndex % this.cols, u = o > 1 && c + o > this.cols;
      c = u ? 0 : c;
      var p = s.size.outerWidth && s.size.outerHeight;
      return this.horizontalColIndex = p ? c + o : this.horizontalColIndex, {
        col: c,
        y: this._getColGroupY(c, o)
      };
    }, a._manageStamp = function(o) {
      var s = r(o), c = this._getElementOffset(o), u = this._getOption("originLeft"), p = u ? c.left : c.right, h = p + s.outerWidth, m = Math.floor(p / this.columnWidth);
      m = Math.max(0, m);
      var l = Math.floor(h / this.columnWidth);
      l -= h % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
      for (var v = this._getOption("originTop"), _ = (v ? c.top : c.bottom) + s.outerHeight, y = m; y <= l; y++)
        this.colYs[y] = Math.max(_, this.colYs[y]);
    }, a._getContainerSize = function() {
      this.maxY = Math.max.apply(Math, this.colYs);
      var o = {
        height: this.maxY
      };
      return this._getOption("fitWidth") && (o.width = this._getContainerFitWidth()), o;
    }, a._getContainerFitWidth = function() {
      for (var o = 0, s = this.cols; --s && this.colYs[s] === 0; )
        o++;
      return (this.cols - o) * this.columnWidth - this.gutter;
    }, a.needsResizeLayout = function() {
      var o = this.containerWidth;
      return this.getContainerWidth(), o != this.containerWidth;
    }, i;
  });
})(zs);
var ug = zs.exports;
const lg = /* @__PURE__ */ Xn(ug), fg = {
  name: "TipiResults",
  components: {
    TipiInitiativeCard: Ds,
    TipiLoader: Ns
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
      var t, e;
      return !this.loadingResults && ((t = this.queryMeta) == null ? void 0 : t.page) < ((e = this.queryMeta) == null ? void 0 : e.pages);
    },
    nextResultsLabel: function() {
      var n, r, i;
      let t = ((n = this.queryMeta) == null ? void 0 : n.page) * ((r = this.queryMeta) == null ? void 0 : r.per_page) + 1, e = t + ((i = this.queryMeta) == null ? void 0 : i.per_page) - 1;
      return `(${t}-${e})`;
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
      let t = document.querySelector(".o-masonry");
      t && new lg(t, {
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
}, hg = {
  key: 1,
  class: "o-masonry o-grid"
}, dg = {
  key: 2,
  class: "o-grid o-grid--center"
}, pg = { class: "o-grid__col" };
function gg(t, e, n, r, i, a) {
  const o = _t("tipi-loader"), s = _t("tipi-initiative-card");
  return E(), R("div", null, [
    this.loadingResults ? (E(), Ct(o, {
      key: 0,
      title: "Cargando resultados",
      subtitle: "Puede llevar algun tiempo"
    })) : at("", !0),
    this.initiatives && this.initiatives.length && !this.loadingResults ? (E(), R("section", hg, [
      (E(!0), R(te, null, ee(this.initiatives, (c, u) => (E(), R("div", {
        class: "o-grid__col u-12 u-4@sm o-masonry__item",
        key: u
      }, [
        vt(s, {
          initiative: c,
          extendedLayout: a.extendedLayout,
          topicsStyles: n.topicsStyles,
          metaDeputies: n.metaDeputies,
          metaGroupsOthers: n.metaGroupsOthers,
          metaColors: n.metaColors
        }, null, 8, ["initiative", "extendedLayout", "topicsStyles", "metaDeputies", "metaGroupsOthers", "metaColors"])
      ]))), 128))
    ])) : at("", !0),
    a.isMoreResults ? (E(), R("div", dg, [
      k("div", pg, [
        k("a", {
          href: "#",
          class: "c-button c-button--secondary",
          onClick: e[0] || (e[0] = Ps((...c) => a.loadMore && a.loadMore(...c), ["prevent"]))
        }, " Cargar más " + tt(a.nextResultsLabel), 1)
      ])
    ])) : at("", !0)
  ]);
}
const mg = /* @__PURE__ */ pt(fg, [["render", gg]]), yg = {
  name: "TipiMessage",
  components: {
    TipiIcon: We
  },
  props: {
    type: {
      type: String,
      default: "success",
      validator: function(t) {
        return ["success", "error", "info"].includes(t);
      }
    },
    icon: Boolean
  }
}, vg = { class: "c-message__wrapper" };
function _g(t, e, n, r, i, a) {
  const o = _t("tipi-icon");
  return E(), R("div", {
    class: Ft(`c-message c-message--${n.type} ${n.icon ? "c-message--icon" : ""}`)
  }, [
    k("div", vg, [
      n.icon ? (E(), Ct(o, {
        key: 0,
        class: "c-message__icon",
        icon: n.type
      }, null, 8, ["icon"])) : at("", !0),
      Ia(t.$slots, "default")
    ])
  ], 2);
}
const wg = /* @__PURE__ */ pt(yg, [["render", _g]]);
var Ls = {};
const xg = {}, bg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xg
}, Symbol.toStringTag, { value: "Module" })), Bs = /* @__PURE__ */ Rs(bg);
var Ii, Co;
function Sg() {
  if (Co)
    return Ii;
  Co = 1;
  var t = "Expected a function", e = "__lodash_hash_undefined__", n = 1 / 0, r = "[object Function]", i = "[object GeneratorFunction]", a = "[object Symbol]", o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, s = /^\w*$/, c = /^\./, u = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, p = /[\\^$.*+?()[\]{}|]/g, h = /\\(\\)?/g, m = /^\[object .+?Constructor\]$/, l = typeof mt == "object" && mt && mt.Object === Object && mt, v = typeof self == "object" && self && self.Object === Object && self, _ = l || v || Function("return this")();
  function y(M, N) {
    return M == null ? void 0 : M[N];
  }
  function f(M) {
    var N = !1;
    if (M != null && typeof M.toString != "function")
      try {
        N = !!(M + "");
      } catch {
      }
    return N;
  }
  var d = Array.prototype, w = Function.prototype, A = Object.prototype, I = _["__core-js_shared__"], H = function() {
    var M = /[^.]+$/.exec(I && I.keys && I.keys.IE_PROTO || "");
    return M ? "Symbol(src)_1." + M : "";
  }(), q = w.toString, j = A.hasOwnProperty, z = A.toString, L = RegExp(
    "^" + q.call(j).replace(p, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), b = _.Symbol, S = d.splice, C = Ut(_, "Map"), P = Ut(Object, "create"), B = b ? b.prototype : void 0, V = B ? B.toString : void 0;
  function G(M) {
    var N = -1, W = M ? M.length : 0;
    for (this.clear(); ++N < W; ) {
      var ot = M[N];
      this.set(ot[0], ot[1]);
    }
  }
  function K() {
    this.__data__ = P ? P(null) : {};
  }
  function et(M) {
    return this.has(M) && delete this.__data__[M];
  }
  function Q(M) {
    var N = this.__data__;
    if (P) {
      var W = N[M];
      return W === e ? void 0 : W;
    }
    return j.call(N, M) ? N[M] : void 0;
  }
  function lt(M) {
    var N = this.__data__;
    return P ? N[M] !== void 0 : j.call(N, M);
  }
  function st(M, N) {
    var W = this.__data__;
    return W[M] = P && N === void 0 ? e : N, this;
  }
  G.prototype.clear = K, G.prototype.delete = et, G.prototype.get = Q, G.prototype.has = lt, G.prototype.set = st;
  function nt(M) {
    var N = -1, W = M ? M.length : 0;
    for (this.clear(); ++N < W; ) {
      var ot = M[N];
      this.set(ot[0], ot[1]);
    }
  }
  function Z() {
    this.__data__ = [];
  }
  function ut(M) {
    var N = this.__data__, W = kt(N, M);
    if (W < 0)
      return !1;
    var ot = N.length - 1;
    return W == ot ? N.pop() : S.call(N, W, 1), !0;
  }
  function ct(M) {
    var N = this.__data__, W = kt(N, M);
    return W < 0 ? void 0 : N[W][1];
  }
  function J(M) {
    return kt(this.__data__, M) > -1;
  }
  function ft(M, N) {
    var W = this.__data__, ot = kt(W, M);
    return ot < 0 ? W.push([M, N]) : W[ot][1] = N, this;
  }
  nt.prototype.clear = Z, nt.prototype.delete = ut, nt.prototype.get = ct, nt.prototype.has = J, nt.prototype.set = ft;
  function ht(M) {
    var N = -1, W = M ? M.length : 0;
    for (this.clear(); ++N < W; ) {
      var ot = M[N];
      this.set(ot[0], ot[1]);
    }
  }
  function yt() {
    this.__data__ = {
      hash: new G(),
      map: new (C || nt)(),
      string: new G()
    };
  }
  function Mt(M) {
    return Wt(this, M).delete(M);
  }
  function ce(M) {
    return Wt(this, M).get(M);
  }
  function ue(M) {
    return Wt(this, M).has(M);
  }
  function $t(M, N) {
    return Wt(this, M).set(M, N), this;
  }
  ht.prototype.clear = yt, ht.prototype.delete = Mt, ht.prototype.get = ce, ht.prototype.has = ue, ht.prototype.set = $t;
  function kt(M, N) {
    for (var W = M.length; W--; )
      if (Se(M[W][0], N))
        return W;
    return -1;
  }
  function Yt(M, N) {
    N = le(N, M) ? [N] : Ge(N);
    for (var W = 0, ot = N.length; M != null && W < ot; )
      M = M[Ye(N[W++])];
    return W && W == ot ? M : void 0;
  }
  function Ht(M) {
    if (!F(M) || Dt(M))
      return !1;
    var N = $(M) || f(M) ? L : m;
    return N.test(Te(M));
  }
  function qt(M) {
    if (typeof M == "string")
      return M;
    if (rt(M))
      return V ? V.call(M) : "";
    var N = M + "";
    return N == "0" && 1 / M == -n ? "-0" : N;
  }
  function Ge(M) {
    return Ie(M) ? M : fe(M);
  }
  function Wt(M, N) {
    var W = M.__data__;
    return ne(N) ? W[typeof N == "string" ? "string" : "hash"] : W.map;
  }
  function Ut(M, N) {
    var W = y(M, N);
    return Ht(W) ? W : void 0;
  }
  function le(M, N) {
    if (Ie(M))
      return !1;
    var W = typeof M;
    return W == "number" || W == "symbol" || W == "boolean" || M == null || rt(M) ? !0 : s.test(M) || !o.test(M) || N != null && M in Object(N);
  }
  function ne(M) {
    var N = typeof M;
    return N == "string" || N == "number" || N == "symbol" || N == "boolean" ? M !== "__proto__" : M === null;
  }
  function Dt(M) {
    return !!H && H in M;
  }
  var fe = he(function(M) {
    M = Nt(M);
    var N = [];
    return c.test(M) && N.push(""), M.replace(u, function(W, ot, x, T) {
      N.push(x ? T.replace(h, "$1") : ot || W);
    }), N;
  });
  function Ye(M) {
    if (typeof M == "string" || rt(M))
      return M;
    var N = M + "";
    return N == "0" && 1 / M == -n ? "-0" : N;
  }
  function Te(M) {
    if (M != null) {
      try {
        return q.call(M);
      } catch {
      }
      try {
        return M + "";
      } catch {
      }
    }
    return "";
  }
  function he(M, N) {
    if (typeof M != "function" || N && typeof N != "function")
      throw new TypeError(t);
    var W = function() {
      var ot = arguments, x = N ? N.apply(this, ot) : ot[0], T = W.cache;
      if (T.has(x))
        return T.get(x);
      var Y = M.apply(this, ot);
      return W.cache = T.set(x, Y), Y;
    };
    return W.cache = new (he.Cache || ht)(), W;
  }
  he.Cache = ht;
  function Se(M, N) {
    return M === N || M !== M && N !== N;
  }
  var Ie = Array.isArray;
  function $(M) {
    var N = F(M) ? z.call(M) : "";
    return N == r || N == i;
  }
  function F(M) {
    var N = typeof M;
    return !!M && (N == "object" || N == "function");
  }
  function X(M) {
    return !!M && typeof M == "object";
  }
  function rt(M) {
    return typeof M == "symbol" || X(M) && z.call(M) == a;
  }
  function Nt(M) {
    return M == null ? "" : qt(M);
  }
  function Ot(M, N, W) {
    var ot = M == null ? void 0 : Yt(M, N);
    return ot === void 0 ? W : ot;
  }
  return Ii = Ot, Ii;
}
var ki, Mo;
function Cg() {
  if (Mo)
    return ki;
  Mo = 1;
  var t = 9007199254740991, e = "[object Arguments]", n = "[object Function]", r = "[object GeneratorFunction]", i = typeof mt == "object" && mt && mt.Object === Object && mt, a = typeof self == "object" && self && self.Object === Object && self, o = i || a || Function("return this")();
  function s(z, L) {
    for (var b = -1, S = L.length, C = z.length; ++b < S; )
      z[C + b] = L[b];
    return z;
  }
  var c = Object.prototype, u = c.hasOwnProperty, p = c.toString, h = o.Symbol, m = c.propertyIsEnumerable, l = h ? h.isConcatSpreadable : void 0;
  function v(z, L, b, S, C) {
    var P = -1, B = z.length;
    for (b || (b = _), C || (C = []); ++P < B; ) {
      var V = z[P];
      L > 0 && b(V) ? L > 1 ? v(V, L - 1, b, S, C) : s(C, V) : S || (C[C.length] = V);
    }
    return C;
  }
  function _(z) {
    return d(z) || f(z) || !!(l && z && z[l]);
  }
  function y(z) {
    var L = z ? z.length : 0;
    return L ? v(z, 1) : [];
  }
  function f(z) {
    return A(z) && u.call(z, "callee") && (!m.call(z, "callee") || p.call(z) == e);
  }
  var d = Array.isArray;
  function w(z) {
    return z != null && H(z.length) && !I(z);
  }
  function A(z) {
    return j(z) && w(z);
  }
  function I(z) {
    var L = q(z) ? p.call(z) : "";
    return L == n || L == r;
  }
  function H(z) {
    return typeof z == "number" && z > -1 && z % 1 == 0 && z <= t;
  }
  function q(z) {
    var L = typeof z;
    return !!z && (L == "object" || L == "function");
  }
  function j(z) {
    return !!z && typeof z == "object";
  }
  return ki = y, ki;
}
var Di, Oo;
function Mg() {
  if (Oo)
    return Di;
  Oo = 1;
  var t = 200, e = "__lodash_hash_undefined__", n = 1 / 0, r = "[object Function]", i = "[object GeneratorFunction]", a = /[\\^$.*+?()[\]{}|]/g, o = /^\[object .+?Constructor\]$/, s = typeof mt == "object" && mt && mt.Object === Object && mt, c = typeof self == "object" && self && self.Object === Object && self, u = s || c || Function("return this")();
  function p($, F) {
    var X = $ ? $.length : 0;
    return !!X && l($, F, 0) > -1;
  }
  function h($, F, X) {
    for (var rt = -1, Nt = $ ? $.length : 0; ++rt < Nt; )
      if (X(F, $[rt]))
        return !0;
    return !1;
  }
  function m($, F, X, rt) {
    for (var Nt = $.length, Ot = X + (rt ? 1 : -1); rt ? Ot-- : ++Ot < Nt; )
      if (F($[Ot], Ot, $))
        return Ot;
    return -1;
  }
  function l($, F, X) {
    if (F !== F)
      return m($, v, X);
    for (var rt = X - 1, Nt = $.length; ++rt < Nt; )
      if ($[rt] === F)
        return rt;
    return -1;
  }
  function v($) {
    return $ !== $;
  }
  function _($, F) {
    return $.has(F);
  }
  function y($, F) {
    return $ == null ? void 0 : $[F];
  }
  function f($) {
    var F = !1;
    if ($ != null && typeof $.toString != "function")
      try {
        F = !!($ + "");
      } catch {
      }
    return F;
  }
  function d($) {
    var F = -1, X = Array($.size);
    return $.forEach(function(rt) {
      X[++F] = rt;
    }), X;
  }
  var w = Array.prototype, A = Function.prototype, I = Object.prototype, H = u["__core-js_shared__"], q = function() {
    var $ = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "");
    return $ ? "Symbol(src)_1." + $ : "";
  }(), j = A.toString, z = I.hasOwnProperty, L = I.toString, b = RegExp(
    "^" + j.call(z).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), S = w.splice, C = le(u, "Map"), P = le(u, "Set"), B = le(Object, "create");
  function V($) {
    var F = -1, X = $ ? $.length : 0;
    for (this.clear(); ++F < X; ) {
      var rt = $[F];
      this.set(rt[0], rt[1]);
    }
  }
  function G() {
    this.__data__ = B ? B(null) : {};
  }
  function K($) {
    return this.has($) && delete this.__data__[$];
  }
  function et($) {
    var F = this.__data__;
    if (B) {
      var X = F[$];
      return X === e ? void 0 : X;
    }
    return z.call(F, $) ? F[$] : void 0;
  }
  function Q($) {
    var F = this.__data__;
    return B ? F[$] !== void 0 : z.call(F, $);
  }
  function lt($, F) {
    var X = this.__data__;
    return X[$] = B && F === void 0 ? e : F, this;
  }
  V.prototype.clear = G, V.prototype.delete = K, V.prototype.get = et, V.prototype.has = Q, V.prototype.set = lt;
  function st($) {
    var F = -1, X = $ ? $.length : 0;
    for (this.clear(); ++F < X; ) {
      var rt = $[F];
      this.set(rt[0], rt[1]);
    }
  }
  function nt() {
    this.__data__ = [];
  }
  function Z($) {
    var F = this.__data__, X = Ht(F, $);
    if (X < 0)
      return !1;
    var rt = F.length - 1;
    return X == rt ? F.pop() : S.call(F, X, 1), !0;
  }
  function ut($) {
    var F = this.__data__, X = Ht(F, $);
    return X < 0 ? void 0 : F[X][1];
  }
  function ct($) {
    return Ht(this.__data__, $) > -1;
  }
  function J($, F) {
    var X = this.__data__, rt = Ht(X, $);
    return rt < 0 ? X.push([$, F]) : X[rt][1] = F, this;
  }
  st.prototype.clear = nt, st.prototype.delete = Z, st.prototype.get = ut, st.prototype.has = ct, st.prototype.set = J;
  function ft($) {
    var F = -1, X = $ ? $.length : 0;
    for (this.clear(); ++F < X; ) {
      var rt = $[F];
      this.set(rt[0], rt[1]);
    }
  }
  function ht() {
    this.__data__ = {
      hash: new V(),
      map: new (C || st)(),
      string: new V()
    };
  }
  function yt($) {
    return Ut(this, $).delete($);
  }
  function Mt($) {
    return Ut(this, $).get($);
  }
  function ce($) {
    return Ut(this, $).has($);
  }
  function ue($, F) {
    return Ut(this, $).set($, F), this;
  }
  ft.prototype.clear = ht, ft.prototype.delete = yt, ft.prototype.get = Mt, ft.prototype.has = ce, ft.prototype.set = ue;
  function $t($) {
    var F = -1, X = $ ? $.length : 0;
    for (this.__data__ = new ft(); ++F < X; )
      this.add($[F]);
  }
  function kt($) {
    return this.__data__.set($, e), this;
  }
  function Yt($) {
    return this.__data__.has($);
  }
  $t.prototype.add = $t.prototype.push = kt, $t.prototype.has = Yt;
  function Ht($, F) {
    for (var X = $.length; X--; )
      if (Te($[X][0], F))
        return X;
    return -1;
  }
  function qt($) {
    if (!Se($) || Dt($))
      return !1;
    var F = he($) || f($) ? b : o;
    return F.test(fe($));
  }
  function Ge($, F, X) {
    var rt = -1, Nt = p, Ot = $.length, M = !0, N = [], W = N;
    if (X)
      M = !1, Nt = h;
    else if (Ot >= t) {
      var ot = F ? null : Wt($);
      if (ot)
        return d(ot);
      M = !1, Nt = _, W = new $t();
    } else
      W = F ? [] : N;
    t:
      for (; ++rt < Ot; ) {
        var x = $[rt], T = F ? F(x) : x;
        if (x = X || x !== 0 ? x : 0, M && T === T) {
          for (var Y = W.length; Y--; )
            if (W[Y] === T)
              continue t;
          F && W.push(T), N.push(x);
        } else
          Nt(W, T, X) || (W !== N && W.push(T), N.push(x));
      }
    return N;
  }
  var Wt = P && 1 / d(new P([, -0]))[1] == n ? function($) {
    return new P($);
  } : Ie;
  function Ut($, F) {
    var X = $.__data__;
    return ne(F) ? X[typeof F == "string" ? "string" : "hash"] : X.map;
  }
  function le($, F) {
    var X = y($, F);
    return qt(X) ? X : void 0;
  }
  function ne($) {
    var F = typeof $;
    return F == "string" || F == "number" || F == "symbol" || F == "boolean" ? $ !== "__proto__" : $ === null;
  }
  function Dt($) {
    return !!q && q in $;
  }
  function fe($) {
    if ($ != null) {
      try {
        return j.call($);
      } catch {
      }
      try {
        return $ + "";
      } catch {
      }
    }
    return "";
  }
  function Ye($) {
    return $ && $.length ? Ge($) : [];
  }
  function Te($, F) {
    return $ === F || $ !== $ && F !== F;
  }
  function he($) {
    var F = Se($) ? L.call($) : "";
    return F == r || F == i;
  }
  function Se($) {
    var F = typeof $;
    return !!$ && (F == "object" || F == "function");
  }
  function Ie() {
  }
  return Di = Ye, Di;
}
var Ni, $o;
function Og() {
  if ($o)
    return Ni;
  $o = 1;
  var t = "Expected a function", e = "__lodash_hash_undefined__", n = 1 / 0, r = 9007199254740991, i = "[object Function]", a = "[object GeneratorFunction]", o = "[object Symbol]", s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, c = /^\w*$/, u = /^\./, p = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, h = /[\\^$.*+?()[\]{}|]/g, m = /\\(\\)?/g, l = /^\[object .+?Constructor\]$/, v = /^(?:0|[1-9]\d*)$/, _ = typeof mt == "object" && mt && mt.Object === Object && mt, y = typeof self == "object" && self && self.Object === Object && self, f = _ || y || Function("return this")();
  function d(x, T) {
    return x == null ? void 0 : x[T];
  }
  function w(x) {
    var T = !1;
    if (x != null && typeof x.toString != "function")
      try {
        T = !!(x + "");
      } catch {
      }
    return T;
  }
  var A = Array.prototype, I = Function.prototype, H = Object.prototype, q = f["__core-js_shared__"], j = function() {
    var x = /[^.]+$/.exec(q && q.keys && q.keys.IE_PROTO || "");
    return x ? "Symbol(src)_1." + x : "";
  }(), z = I.toString, L = H.hasOwnProperty, b = H.toString, S = RegExp(
    "^" + z.call(L).replace(h, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), C = f.Symbol, P = A.splice, B = Dt(f, "Map"), V = Dt(Object, "create"), G = C ? C.prototype : void 0, K = G ? G.toString : void 0;
  function et(x) {
    var T = -1, Y = x ? x.length : 0;
    for (this.clear(); ++T < Y; ) {
      var dt = x[T];
      this.set(dt[0], dt[1]);
    }
  }
  function Q() {
    this.__data__ = V ? V(null) : {};
  }
  function lt(x) {
    return this.has(x) && delete this.__data__[x];
  }
  function st(x) {
    var T = this.__data__;
    if (V) {
      var Y = T[x];
      return Y === e ? void 0 : Y;
    }
    return L.call(T, x) ? T[x] : void 0;
  }
  function nt(x) {
    var T = this.__data__;
    return V ? T[x] !== void 0 : L.call(T, x);
  }
  function Z(x, T) {
    var Y = this.__data__;
    return Y[x] = V && T === void 0 ? e : T, this;
  }
  et.prototype.clear = Q, et.prototype.delete = lt, et.prototype.get = st, et.prototype.has = nt, et.prototype.set = Z;
  function ut(x) {
    var T = -1, Y = x ? x.length : 0;
    for (this.clear(); ++T < Y; ) {
      var dt = x[T];
      this.set(dt[0], dt[1]);
    }
  }
  function ct() {
    this.__data__ = [];
  }
  function J(x) {
    var T = this.__data__, Y = qt(T, x);
    if (Y < 0)
      return !1;
    var dt = T.length - 1;
    return Y == dt ? T.pop() : P.call(T, Y, 1), !0;
  }
  function ft(x) {
    var T = this.__data__, Y = qt(T, x);
    return Y < 0 ? void 0 : T[Y][1];
  }
  function ht(x) {
    return qt(this.__data__, x) > -1;
  }
  function yt(x, T) {
    var Y = this.__data__, dt = qt(Y, x);
    return dt < 0 ? Y.push([x, T]) : Y[dt][1] = T, this;
  }
  ut.prototype.clear = ct, ut.prototype.delete = J, ut.prototype.get = ft, ut.prototype.has = ht, ut.prototype.set = yt;
  function Mt(x) {
    var T = -1, Y = x ? x.length : 0;
    for (this.clear(); ++T < Y; ) {
      var dt = x[T];
      this.set(dt[0], dt[1]);
    }
  }
  function ce() {
    this.__data__ = {
      hash: new et(),
      map: new (B || ut)(),
      string: new et()
    };
  }
  function ue(x) {
    return ne(this, x).delete(x);
  }
  function $t(x) {
    return ne(this, x).get(x);
  }
  function kt(x) {
    return ne(this, x).has(x);
  }
  function Yt(x, T) {
    return ne(this, x).set(x, T), this;
  }
  Mt.prototype.clear = ce, Mt.prototype.delete = ue, Mt.prototype.get = $t, Mt.prototype.has = kt, Mt.prototype.set = Yt;
  function Ht(x, T, Y) {
    var dt = x[T];
    (!(L.call(x, T) && X(dt, Y)) || Y === void 0 && !(T in x)) && (x[T] = Y);
  }
  function qt(x, T) {
    for (var Y = x.length; Y--; )
      if (X(x[Y][0], T))
        return Y;
    return -1;
  }
  function Ge(x) {
    if (!Ot(x) || he(x))
      return !1;
    var T = Nt(x) || w(x) ? S : l;
    return T.test($(x));
  }
  function Wt(x, T, Y, dt) {
    if (!Ot(x))
      return x;
    T = Ye(T, x) ? [T] : le(T);
    for (var Xt = -1, de = T.length, un = de - 1, Ce = x; Ce != null && ++Xt < de; ) {
      var Xe = Ie(T[Xt]), Qt = Y;
      if (Xt != un) {
        var kn = Ce[Xe];
        Qt = dt ? dt(kn, Xe, Ce) : void 0, Qt === void 0 && (Qt = Ot(kn) ? kn : fe(T[Xt + 1]) ? [] : {});
      }
      Ht(Ce, Xe, Qt), Ce = Ce[Xe];
    }
    return x;
  }
  function Ut(x) {
    if (typeof x == "string")
      return x;
    if (N(x))
      return K ? K.call(x) : "";
    var T = x + "";
    return T == "0" && 1 / x == -n ? "-0" : T;
  }
  function le(x) {
    return rt(x) ? x : Se(x);
  }
  function ne(x, T) {
    var Y = x.__data__;
    return Te(T) ? Y[typeof T == "string" ? "string" : "hash"] : Y.map;
  }
  function Dt(x, T) {
    var Y = d(x, T);
    return Ge(Y) ? Y : void 0;
  }
  function fe(x, T) {
    return T = T ?? r, !!T && (typeof x == "number" || v.test(x)) && x > -1 && x % 1 == 0 && x < T;
  }
  function Ye(x, T) {
    if (rt(x))
      return !1;
    var Y = typeof x;
    return Y == "number" || Y == "symbol" || Y == "boolean" || x == null || N(x) ? !0 : c.test(x) || !s.test(x) || T != null && x in Object(T);
  }
  function Te(x) {
    var T = typeof x;
    return T == "string" || T == "number" || T == "symbol" || T == "boolean" ? x !== "__proto__" : x === null;
  }
  function he(x) {
    return !!j && j in x;
  }
  var Se = F(function(x) {
    x = W(x);
    var T = [];
    return u.test(x) && T.push(""), x.replace(p, function(Y, dt, Xt, de) {
      T.push(Xt ? de.replace(m, "$1") : dt || Y);
    }), T;
  });
  function Ie(x) {
    if (typeof x == "string" || N(x))
      return x;
    var T = x + "";
    return T == "0" && 1 / x == -n ? "-0" : T;
  }
  function $(x) {
    if (x != null) {
      try {
        return z.call(x);
      } catch {
      }
      try {
        return x + "";
      } catch {
      }
    }
    return "";
  }
  function F(x, T) {
    if (typeof x != "function" || T && typeof T != "function")
      throw new TypeError(t);
    var Y = function() {
      var dt = arguments, Xt = T ? T.apply(this, dt) : dt[0], de = Y.cache;
      if (de.has(Xt))
        return de.get(Xt);
      var un = x.apply(this, dt);
      return Y.cache = de.set(Xt, un), un;
    };
    return Y.cache = new (F.Cache || Mt)(), Y;
  }
  F.Cache = Mt;
  function X(x, T) {
    return x === T || x !== x && T !== T;
  }
  var rt = Array.isArray;
  function Nt(x) {
    var T = Ot(x) ? b.call(x) : "";
    return T == i || T == a;
  }
  function Ot(x) {
    var T = typeof x;
    return !!x && (T == "object" || T == "function");
  }
  function M(x) {
    return !!x && typeof x == "object";
  }
  function N(x) {
    return typeof x == "symbol" || M(x) && b.call(x) == o;
  }
  function W(x) {
    return x == null ? "" : Ut(x);
  }
  function ot(x, T, Y) {
    return x == null ? x : Wt(x, T, Y);
  }
  return Ni = ot, Ni;
}
var zn = { exports: {} };
zn.exports;
var Ao;
function $g() {
  return Ao || (Ao = 1, function(t, e) {
    var n = 200, r = "__lodash_hash_undefined__", i = 9007199254740991, a = "[object Arguments]", o = "[object Array]", s = "[object Boolean]", c = "[object Date]", u = "[object Error]", p = "[object Function]", h = "[object GeneratorFunction]", m = "[object Map]", l = "[object Number]", v = "[object Object]", _ = "[object Promise]", y = "[object RegExp]", f = "[object Set]", d = "[object String]", w = "[object Symbol]", A = "[object WeakMap]", I = "[object ArrayBuffer]", H = "[object DataView]", q = "[object Float32Array]", j = "[object Float64Array]", z = "[object Int8Array]", L = "[object Int16Array]", b = "[object Int32Array]", S = "[object Uint8Array]", C = "[object Uint8ClampedArray]", P = "[object Uint16Array]", B = "[object Uint32Array]", V = /[\\^$.*+?()[\]{}|]/g, G = /\w*$/, K = /^\[object .+?Constructor\]$/, et = /^(?:0|[1-9]\d*)$/, Q = {};
    Q[a] = Q[o] = Q[I] = Q[H] = Q[s] = Q[c] = Q[q] = Q[j] = Q[z] = Q[L] = Q[b] = Q[m] = Q[l] = Q[v] = Q[y] = Q[f] = Q[d] = Q[w] = Q[S] = Q[C] = Q[P] = Q[B] = !0, Q[u] = Q[p] = Q[A] = !1;
    var lt = typeof mt == "object" && mt && mt.Object === Object && mt, st = typeof self == "object" && self && self.Object === Object && self, nt = lt || st || Function("return this")(), Z = e && !e.nodeType && e, ut = Z && !0 && t && !t.nodeType && t, ct = ut && ut.exports === Z;
    function J(g, O) {
      return g.set(O[0], O[1]), g;
    }
    function ft(g, O) {
      return g.add(O), g;
    }
    function ht(g, O) {
      for (var D = -1, U = g ? g.length : 0; ++D < U && O(g[D], D, g) !== !1; )
        ;
      return g;
    }
    function yt(g, O) {
      for (var D = -1, U = O.length, xt = g.length; ++D < U; )
        g[xt + D] = O[D];
      return g;
    }
    function Mt(g, O, D, U) {
      var xt = -1, Rt = g ? g.length : 0;
      for (U && Rt && (D = g[++xt]); ++xt < Rt; )
        D = O(D, g[xt], xt, g);
      return D;
    }
    function ce(g, O) {
      for (var D = -1, U = Array(g); ++D < g; )
        U[D] = O(D);
      return U;
    }
    function ue(g, O) {
      return g == null ? void 0 : g[O];
    }
    function $t(g) {
      var O = !1;
      if (g != null && typeof g.toString != "function")
        try {
          O = !!(g + "");
        } catch {
        }
      return O;
    }
    function kt(g) {
      var O = -1, D = Array(g.size);
      return g.forEach(function(U, xt) {
        D[++O] = [xt, U];
      }), D;
    }
    function Yt(g, O) {
      return function(D) {
        return g(O(D));
      };
    }
    function Ht(g) {
      var O = -1, D = Array(g.size);
      return g.forEach(function(U) {
        D[++O] = U;
      }), D;
    }
    var qt = Array.prototype, Ge = Function.prototype, Wt = Object.prototype, Ut = nt["__core-js_shared__"], le = function() {
      var g = /[^.]+$/.exec(Ut && Ut.keys && Ut.keys.IE_PROTO || "");
      return g ? "Symbol(src)_1." + g : "";
    }(), ne = Ge.toString, Dt = Wt.hasOwnProperty, fe = Wt.toString, Ye = RegExp(
      "^" + ne.call(Dt).replace(V, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), Te = ct ? nt.Buffer : void 0, he = nt.Symbol, Se = nt.Uint8Array, Ie = Yt(Object.getPrototypeOf, Object), $ = Object.create, F = Wt.propertyIsEnumerable, X = qt.splice, rt = Object.getOwnPropertySymbols, Nt = Te ? Te.isBuffer : void 0, Ot = Yt(Object.keys, Object), M = hn(nt, "DataView"), N = hn(nt, "Map"), W = hn(nt, "Promise"), ot = hn(nt, "Set"), x = hn(nt, "WeakMap"), T = hn(Object, "create"), Y = Je(M), dt = Je(N), Xt = Je(W), de = Je(ot), un = Je(x), Ce = he ? he.prototype : void 0, Xe = Ce ? Ce.valueOf : void 0;
    function Qt(g) {
      var O = -1, D = g ? g.length : 0;
      for (this.clear(); ++O < D; ) {
        var U = g[O];
        this.set(U[0], U[1]);
      }
    }
    function kn() {
      this.__data__ = T ? T(null) : {};
    }
    function Yc(g) {
      return this.has(g) && delete this.__data__[g];
    }
    function Xc(g) {
      var O = this.__data__;
      if (T) {
        var D = O[g];
        return D === r ? void 0 : D;
      }
      return Dt.call(O, g) ? O[g] : void 0;
    }
    function Qc(g) {
      var O = this.__data__;
      return T ? O[g] !== void 0 : Dt.call(O, g);
    }
    function Jc(g, O) {
      var D = this.__data__;
      return D[g] = T && O === void 0 ? r : O, this;
    }
    Qt.prototype.clear = kn, Qt.prototype.delete = Yc, Qt.prototype.get = Xc, Qt.prototype.has = Qc, Qt.prototype.set = Jc;
    function Me(g) {
      var O = -1, D = g ? g.length : 0;
      for (this.clear(); ++O < D; ) {
        var U = g[O];
        this.set(U[0], U[1]);
      }
    }
    function Kc() {
      this.__data__ = [];
    }
    function Zc(g) {
      var O = this.__data__, D = er(O, g);
      if (D < 0)
        return !1;
      var U = O.length - 1;
      return D == U ? O.pop() : X.call(O, D, 1), !0;
    }
    function tu(g) {
      var O = this.__data__, D = er(O, g);
      return D < 0 ? void 0 : O[D][1];
    }
    function eu(g) {
      return er(this.__data__, g) > -1;
    }
    function nu(g, O) {
      var D = this.__data__, U = er(D, g);
      return U < 0 ? D.push([g, O]) : D[U][1] = O, this;
    }
    Me.prototype.clear = Kc, Me.prototype.delete = Zc, Me.prototype.get = tu, Me.prototype.has = eu, Me.prototype.set = nu;
    function ln(g) {
      var O = -1, D = g ? g.length : 0;
      for (this.clear(); ++O < D; ) {
        var U = g[O];
        this.set(U[0], U[1]);
      }
    }
    function ru() {
      this.__data__ = {
        hash: new Qt(),
        map: new (N || Me)(),
        string: new Qt()
      };
    }
    function iu(g) {
      return nr(this, g).delete(g);
    }
    function au(g) {
      return nr(this, g).get(g);
    }
    function ou(g) {
      return nr(this, g).has(g);
    }
    function su(g, O) {
      return nr(this, g).set(g, O), this;
    }
    ln.prototype.clear = ru, ln.prototype.delete = iu, ln.prototype.get = au, ln.prototype.has = ou, ln.prototype.set = su;
    function fn(g) {
      this.__data__ = new Me(g);
    }
    function cu() {
      this.__data__ = new Me();
    }
    function uu(g) {
      return this.__data__.delete(g);
    }
    function lu(g) {
      return this.__data__.get(g);
    }
    function fu(g) {
      return this.__data__.has(g);
    }
    function hu(g, O) {
      var D = this.__data__;
      if (D instanceof Me) {
        var U = D.__data__;
        if (!N || U.length < n - 1)
          return U.push([g, O]), this;
        D = this.__data__ = new ln(U);
      }
      return D.set(g, O), this;
    }
    fn.prototype.clear = cu, fn.prototype.delete = uu, fn.prototype.get = lu, fn.prototype.has = fu, fn.prototype.set = hu;
    function du(g, O) {
      var D = bi(g) || zu(g) ? ce(g.length, String) : [], U = D.length, xt = !!U;
      for (var Rt in g)
        (O || Dt.call(g, Rt)) && !(xt && (Rt == "length" || ku(Rt, U))) && D.push(Rt);
      return D;
    }
    function ro(g, O, D) {
      var U = g[O];
      (!(Dt.call(g, O) && so(U, D)) || D === void 0 && !(O in g)) && (g[O] = D);
    }
    function er(g, O) {
      for (var D = g.length; D--; )
        if (so(g[D][0], O))
          return D;
      return -1;
    }
    function pu(g, O) {
      return g && io(O, Si(O), g);
    }
    function wi(g, O, D, U, xt, Rt, Jt) {
      var jt;
      if (U && (jt = Rt ? U(g, xt, Rt, Jt) : U(g)), jt !== void 0)
        return jt;
      if (!rr(g))
        return g;
      var lo = bi(g);
      if (lo) {
        if (jt = Eu(g), !O)
          return $u(g, jt);
      } else {
        var dn = Qe(g), fo = dn == p || dn == h;
        if (Lu(g))
          return wu(g, O);
        if (dn == v || dn == a || fo && !Rt) {
          if ($t(g))
            return Rt ? g : {};
          if (jt = Tu(fo ? {} : g), !O)
            return Au(g, pu(jt, g));
        } else {
          if (!Q[dn])
            return Rt ? g : {};
          jt = Iu(g, dn, wi, O);
        }
      }
      Jt || (Jt = new fn());
      var ho = Jt.get(g);
      if (ho)
        return ho;
      if (Jt.set(g, jt), !lo)
        var po = D ? Pu(g) : Si(g);
      return ht(po || g, function(Ci, ir) {
        po && (ir = Ci, Ci = g[ir]), ro(jt, ir, wi(Ci, O, D, U, ir, g, Jt));
      }), jt;
    }
    function gu(g) {
      return rr(g) ? $(g) : {};
    }
    function mu(g, O, D) {
      var U = O(g);
      return bi(g) ? U : yt(U, D(g));
    }
    function yu(g) {
      return fe.call(g);
    }
    function vu(g) {
      if (!rr(g) || Nu(g))
        return !1;
      var O = uo(g) || $t(g) ? Ye : K;
      return O.test(Je(g));
    }
    function _u(g) {
      if (!oo(g))
        return Ot(g);
      var O = [];
      for (var D in Object(g))
        Dt.call(g, D) && D != "constructor" && O.push(D);
      return O;
    }
    function wu(g, O) {
      if (O)
        return g.slice();
      var D = new g.constructor(g.length);
      return g.copy(D), D;
    }
    function xi(g) {
      var O = new g.constructor(g.byteLength);
      return new Se(O).set(new Se(g)), O;
    }
    function xu(g, O) {
      var D = O ? xi(g.buffer) : g.buffer;
      return new g.constructor(D, g.byteOffset, g.byteLength);
    }
    function bu(g, O, D) {
      var U = O ? D(kt(g), !0) : kt(g);
      return Mt(U, J, new g.constructor());
    }
    function Su(g) {
      var O = new g.constructor(g.source, G.exec(g));
      return O.lastIndex = g.lastIndex, O;
    }
    function Cu(g, O, D) {
      var U = O ? D(Ht(g), !0) : Ht(g);
      return Mt(U, ft, new g.constructor());
    }
    function Mu(g) {
      return Xe ? Object(Xe.call(g)) : {};
    }
    function Ou(g, O) {
      var D = O ? xi(g.buffer) : g.buffer;
      return new g.constructor(D, g.byteOffset, g.length);
    }
    function $u(g, O) {
      var D = -1, U = g.length;
      for (O || (O = Array(U)); ++D < U; )
        O[D] = g[D];
      return O;
    }
    function io(g, O, D, U) {
      D || (D = {});
      for (var xt = -1, Rt = O.length; ++xt < Rt; ) {
        var Jt = O[xt], jt = U ? U(D[Jt], g[Jt], Jt, D, g) : void 0;
        ro(D, Jt, jt === void 0 ? g[Jt] : jt);
      }
      return D;
    }
    function Au(g, O) {
      return io(g, ao(g), O);
    }
    function Pu(g) {
      return mu(g, Si, ao);
    }
    function nr(g, O) {
      var D = g.__data__;
      return Du(O) ? D[typeof O == "string" ? "string" : "hash"] : D.map;
    }
    function hn(g, O) {
      var D = ue(g, O);
      return vu(D) ? D : void 0;
    }
    var ao = rt ? Yt(rt, Object) : ju, Qe = yu;
    (M && Qe(new M(new ArrayBuffer(1))) != H || N && Qe(new N()) != m || W && Qe(W.resolve()) != _ || ot && Qe(new ot()) != f || x && Qe(new x()) != A) && (Qe = function(g) {
      var O = fe.call(g), D = O == v ? g.constructor : void 0, U = D ? Je(D) : void 0;
      if (U)
        switch (U) {
          case Y:
            return H;
          case dt:
            return m;
          case Xt:
            return _;
          case de:
            return f;
          case un:
            return A;
        }
      return O;
    });
    function Eu(g) {
      var O = g.length, D = g.constructor(O);
      return O && typeof g[0] == "string" && Dt.call(g, "index") && (D.index = g.index, D.input = g.input), D;
    }
    function Tu(g) {
      return typeof g.constructor == "function" && !oo(g) ? gu(Ie(g)) : {};
    }
    function Iu(g, O, D, U) {
      var xt = g.constructor;
      switch (O) {
        case I:
          return xi(g);
        case s:
        case c:
          return new xt(+g);
        case H:
          return xu(g, U);
        case q:
        case j:
        case z:
        case L:
        case b:
        case S:
        case C:
        case P:
        case B:
          return Ou(g, U);
        case m:
          return bu(g, U, D);
        case l:
        case d:
          return new xt(g);
        case y:
          return Su(g);
        case f:
          return Cu(g, U, D);
        case w:
          return Mu(g);
      }
    }
    function ku(g, O) {
      return O = O ?? i, !!O && (typeof g == "number" || et.test(g)) && g > -1 && g % 1 == 0 && g < O;
    }
    function Du(g) {
      var O = typeof g;
      return O == "string" || O == "number" || O == "symbol" || O == "boolean" ? g !== "__proto__" : g === null;
    }
    function Nu(g) {
      return !!le && le in g;
    }
    function oo(g) {
      var O = g && g.constructor, D = typeof O == "function" && O.prototype || Wt;
      return g === D;
    }
    function Je(g) {
      if (g != null) {
        try {
          return ne.call(g);
        } catch {
        }
        try {
          return g + "";
        } catch {
        }
      }
      return "";
    }
    function Ru(g) {
      return wi(g, !0, !0);
    }
    function so(g, O) {
      return g === O || g !== g && O !== O;
    }
    function zu(g) {
      return Fu(g) && Dt.call(g, "callee") && (!F.call(g, "callee") || fe.call(g) == a);
    }
    var bi = Array.isArray;
    function co(g) {
      return g != null && Bu(g.length) && !uo(g);
    }
    function Fu(g) {
      return Hu(g) && co(g);
    }
    var Lu = Nt || Vu;
    function uo(g) {
      var O = rr(g) ? fe.call(g) : "";
      return O == p || O == h;
    }
    function Bu(g) {
      return typeof g == "number" && g > -1 && g % 1 == 0 && g <= i;
    }
    function rr(g) {
      var O = typeof g;
      return !!g && (O == "object" || O == "function");
    }
    function Hu(g) {
      return !!g && typeof g == "object";
    }
    function Si(g) {
      return co(g) ? du(g) : _u(g);
    }
    function ju() {
      return [];
    }
    function Vu() {
      return !1;
    }
    t.exports = Ru;
  }(zn, zn.exports)), zn.exports;
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Ri, Po;
function Ag() {
  return Po || (Po = 1, Ri = function(e) {
    return e != null && e.constructor != null && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
  }), Ri;
}
var zi, Eo;
function Pg() {
  if (Eo)
    return zi;
  Eo = 1;
  var t = Ag();
  zi = e, e.flatten = e, e.unflatten = n;
  function e(r, i) {
    i = i || {};
    var a = i.delimiter || ".", o = i.maxDepth, s = {};
    function c(u, p, h) {
      h = h || 1, Object.keys(u).forEach(function(m) {
        var l = u[m], v = i.safe && Array.isArray(l), _ = Object.prototype.toString.call(l), y = t(l), f = _ === "[object Object]" || _ === "[object Array]", d = p ? p + a + m : m;
        if (!v && !y && f && Object.keys(l).length && (!i.maxDepth || h < o))
          return c(l, d, h + 1);
        s[d] = l;
      });
    }
    return c(r), s;
  }
  function n(r, i) {
    i = i || {};
    var a = i.delimiter || ".", o = i.overwrite || !1, s = {}, c = t(r);
    if (c || Object.prototype.toString.call(r) !== "[object Object]")
      return r;
    function u(h) {
      var m = Number(h);
      return isNaN(m) || h.indexOf(".") !== -1 || i.object ? h : m;
    }
    var p = Object.keys(r).sort(function(h, m) {
      return h.length - m.length;
    });
    return p.forEach(function(h) {
      for (var m = h.split(a), l = u(m.shift()), v = u(m[0]), _ = s; v !== void 0; ) {
        if (l === "__proto__")
          return;
        var y = Object.prototype.toString.call(_[l]), f = y === "[object Object]" || y === "[object Array]";
        if (!o && !f && typeof _[l] < "u")
          return;
        (o && !f || !o && _[l] == null) && (_[l] = typeof v == "number" && !i.object ? [] : {}), _ = _[l], m.length > 0 && (l = u(m.shift()), v = u(m[0]));
      }
      _[l] = n(r[h], i);
    }), s;
  }
  return zi;
}
var Fi, To;
function Eg() {
  if (To)
    return Fi;
  To = 1;
  var t = Bs, e = Sg(), n = Cg(), r = Mg(), i = Og(), a = $g(), o = Pg();
  Fi = function(l, v) {
    var _ = typeof v == "function";
    try {
      s(l);
    } catch (d) {
      if (_)
        return process.nextTick(function() {
          v(d);
        });
      throw d;
    }
    var y = c(l), f = p(l, y);
    return _ ? process.nextTick(function() {
      v(null, f);
    }) : f;
  };
  function s(l) {
    if (l.data = l.data || [], Array.isArray(l.data) || (l.data = [l.data]), l.flatten && (l.data = l.data.map(o)), !l.fields && (l.data.length === 0 || typeof l.data[0] != "object"))
      throw new Error('params should include "fields" and/or non-empty "data" array of objects');
    if (!l.fields) {
      var v = l.data.map(function(_) {
        return Object.keys(_);
      });
      v = n(v), l.fields = r(v);
    }
    if (l.fieldNames && l.fieldNames.length !== l.fields.length)
      throw new Error("fieldNames and fields should be of the same length, if fieldNames is provided.");
    l.fieldNames = l.fields.map(function(_, y) {
      return l.fieldNames && typeof _ == "string" ? l.fieldNames[y] : typeof _ == "string" ? _ : _.label || _.value;
    }), l.del = l.del || ",", l.eol = l.eol || "", l.quotes = typeof l.quotes == "string" ? l.quotes : '"', l.doubleQuotes = typeof l.doubleQuotes == "string" ? l.doubleQuotes : Array(3).join(l.quotes), l.defaultValue = l.defaultValue, l.hasCSVColumnTitle = l.hasCSVColumnTitle !== !1, l.includeEmptyRows = l.includeEmptyRows || !1, l.withBOM = l.withBOM || !1, l.unwindPath = l.unwindPath || [], Array.isArray(l.unwindPath) || (l.unwindPath = [l.unwindPath]);
  }
  function c(l) {
    var v = "";
    return l.hasCSVColumnTitle && l.fieldNames.forEach(function(_) {
      v !== "" && (v += l.del), v += JSON.stringify(_).replace(/\"/g, l.quotes);
    }), v;
  }
  function u(l, v) {
    var _ = l.length - 1;
    if (l[0] === '"' && l[_] === '"') {
      var y = l.split("");
      y[0] = v, y[_] = v, l = y.join("");
    }
    return l;
  }
  function p(l, v) {
    return h(l.data, l.unwindPath).forEach(function(_) {
      if (_ && (Object.getOwnPropertyNames(_).length > 0 || l.includeEmptyRows)) {
        var y = "", f = l.newLine || t.EOL || `
`;
        l.fields.forEach(function(d) {
          var w, A = l.defaultValue, I = !0;
          if (typeof d == "object" && "default" in d && (A = d.default), d && (typeof d == "string" || typeof d.value == "string")) {
            var H = typeof d == "string" ? d : d.value;
            w = e(_, H, A);
          } else if (d && typeof d.value == "function") {
            var q = {
              label: d.label,
              default: d.default
            };
            w = d.value(_, q, l.data), d.stringify !== void 0 && (I = d.stringify);
          }
          if (w == null && (w = A), w !== void 0) {
            l.preserveNewLinesInValues && typeof w == "string" && (w = w.replace(/\n/g, "\u2028").replace(/\r/g, "\u2029"));
            var j = w;
            I && (j = JSON.stringify(w)), l.preserveNewLinesInValues && typeof w == "string" && (j = j.replace(/\u2028/g, `
`).replace(/\u2029/g, "\r")), typeof w == "object" && (j = u(j, ""), j = JSON.stringify(j)), l.quotes !== '"' && (j = u(j, l.quotes)), j = j.replace(/\\\\/g, "\\"), l.excelStrings && typeof w == "string" && (j = '"="' + j + '""'), j = j.replace(/(\\")(?=.)/g, l.doubleQuotes), y += j;
          }
          y += l.del;
        }), y = y.substring(0, y.length - l.del.length), y = y.replace(/\\\\/g, "\\"), v !== "" ? v += f + y + l.eol : v = y + l.eol;
      }
    }), l.withBOM && (v = "\uFEFF" + v), v;
  }
  function h(l, v) {
    var _ = [];
    return v.length ? l.forEach(function(y) {
      var f = [y];
      v.forEach(function(d) {
        f = m(f, d);
      }), Array.prototype.push.apply(_, f);
    }) : _ = l, _;
  }
  function m(l, v) {
    var _ = [];
    return l.forEach(function(y) {
      var f = e(y, v), d = Array.isArray(f);
      if (d && f.length)
        f.forEach(function(A) {
          var I = a(y);
          i(I, v, A), _.push(I);
        });
      else if (d && !f.length) {
        var w = a(y);
        i(w, v, void 0), _.push(w);
      } else
        _.push(y);
    }), _;
  }
  return Fi;
}
(function(t) {
  (function(e, n) {
    for (var r in n)
      e[r] = n[r];
  })(
    t,
    /******/
    function(e) {
      var n = {};
      function r(i) {
        if (n[i])
          return n[i].exports;
        var a = n[i] = {
          /******/
          i,
          /******/
          l: !1,
          /******/
          exports: {}
          /******/
        };
        return e[i].call(a.exports, a, a.exports, r), a.l = !0, a.exports;
      }
      return r.m = e, r.c = n, r.i = function(i) {
        return i;
      }, r.d = function(i, a, o) {
        Object.defineProperty(i, a, {
          /******/
          configurable: !1,
          /******/
          enumerable: !0,
          /******/
          get: o
          /******/
        });
      }, r.n = function(i) {
        var a = i && i.__esModule ? (
          /******/
          function() {
            return i.default;
          }
        ) : (
          /******/
          function() {
            return i;
          }
        );
        return r.d(a, "a", a), a;
      }, r.o = function(i, a) {
        return Object.prototype.hasOwnProperty.call(i, a);
      }, r.p = "", r(r.s = 4);
    }([
      /* 0 */
      /***/
      function(e, n, r) {
        var i = r(3), a = r.n(i);
        n.default = {
          props: {
            fields: void 0,
            data: void 0,
            downloadName: {
              default: "export.csv"
            }
          },
          computed: {
            downloadUrl: function() {
              return this.data.length > 0 ? "data:text/csv," + encodeURIComponent(a()({ data: this.data, fields: this.fields })) : "javascript:void(0);";
            }
          }
        };
      },
      /* 1 */
      /***/
      function(e, n) {
        e.exports = function(i, a, o, s) {
          var c, u = i = i || {}, p = typeof i.default;
          (p === "object" || p === "function") && (c = i, u = i.default);
          var h = typeof u == "function" ? u.options : u;
          if (a && (h.render = a.render, h.staticRenderFns = a.staticRenderFns), o && (h._scopeId = o), s) {
            var m = h.computed || (h.computed = {});
            Object.keys(s).forEach(function(l) {
              var v = s[l];
              m[l] = function() {
                return v;
              };
            });
          }
          return {
            esModule: c,
            exports: u,
            options: h
          };
        };
      },
      /* 2 */
      /***/
      function(e, n, r) {
        e.exports = { render: function() {
          var i = this, a = i.$createElement, o = i._self._c || a;
          return o("a", {
            attrs: {
              download: i.downloadName,
              href: i.downloadUrl,
              disabled: this.data.length === 0
            }
          }, [i._t("default", [o("i", {
            staticClass: "fa fa-file-excel-o",
            attrs: {
              "aria-hidden": "true"
            }
          })])], 2);
        }, staticRenderFns: [] }, e.exports.render._withStripped = !0;
      },
      /* 3 */
      /***/
      function(e, n) {
        e.exports = Eg();
      },
      /* 4 */
      /***/
      function(e, n, r) {
        var i = r(1)(
          /* script */
          r(0),
          /* template */
          r(2),
          /* scopeId */
          null,
          /* cssModules */
          null
        );
        i.options.__file = "/home/dkuck/work/vue-csv-downloader/src/CsvDownload.vue", i.esModule && Object.keys(i.esModule).some(function(a) {
          return a !== "default" && a !== "__esModule";
        }) && console.error("named exports are not supported in *.vue files."), i.options.functional && console.error("[vue-loader] CsvDownload.vue: functional components are not supported with templates, they should use render functions."), e.exports = i.exports;
      }
      /******/
    ])
  );
})(Ls);
const Tg = /* @__PURE__ */ Xn(Ls);
const Ig = {
  name: "TipiCsvDownload",
  components: {
    VueCsvDownloader: Tg
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
        return ["title", "reference", "initiative_type_alt", "authors", "deputies", "tagged.0.topics", "tagged.0.tags", "place", "status", "created", "updated", "url"];
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
    loadCSVItems: function(t) {
      this.$emit("loadCSVItems", t);
    },
    getNameFromCSV: function() {
      return "export-" + (/* @__PURE__ */ new Date()).toISOString() + ".csv";
    }
  }
}, Hs = (t) => (qu("data-v-d7465e98"), t = t(), Wu(), t), kg = ["title"], Dg = /* @__PURE__ */ Hs(() => /* @__PURE__ */ k("span", { class: "c-icon c-icon--type-download" }, [
  /* @__PURE__ */ k("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "16",
    fill: "none",
    viewBox: "0 0 12 16"
  }, [
    /* @__PURE__ */ k("path", {
      fill: "#2D4252",
      d: "M12 5.647H8.571V0H3.43v5.647H0l6 6.588 6-6.588zm-12 8.47V16h12v-1.882H0z"
    })
  ])
], -1)), Ng = /* @__PURE__ */ Hs(() => /* @__PURE__ */ k("span", { class: "c-icon c-icon--type-download" }, [
  /* @__PURE__ */ k("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "16",
    fill: "none",
    viewBox: "0 0 12 16"
  }, [
    /* @__PURE__ */ k("path", {
      fill: "#2D4252",
      d: "M12 5.647H8.571V0H3.43v5.647H0l6 6.588 6-6.588zm-12 8.47V16h12v-1.882H0z"
    })
  ])
], -1));
function Rg(t, e, n, r, i, a) {
  const o = _t("vue-csv-downloader");
  return aa((E(), R("span", null, [
    n.csvItems.length ? (E(), Ct(o, {
      key: 1,
      data: n.csvItems,
      fields: n.csvFields,
      downloadName: a.getNameFromCSV(),
      id: "downloadCSV",
      class: Ft(["c-button c-button--icon-right", n.buttonClass])
    }, {
      default: Lt(() => [
        wt(tt(n.label) + " ", 1),
        Ng
      ]),
      _: 1
    }, 8, ["data", "fields", "downloadName", "class"])) : (E(), R("a", {
      key: 0,
      class: Ft([{ disabled: !n.canDownloadCSV }, "c-button c-button--compact c-button--secondary c-button--icon-right"]),
      title: n.canDownloadCSV ? "Descarga CSV con todos los resultados" : "Demasiados resultados para poder descargar. Afina la búsqueda",
      onClick: e[0] || (e[0] = Ps((...s) => a.loadCSVItems && a.loadCSVItems(...s), ["prevent"])),
      href: "#"
    }, [
      wt(tt(n.label) + " ", 1),
      Dg
    ], 10, kg))
  ], 512)), [
    [oa, n.initiatives.length]
  ]);
}
const zg = /* @__PURE__ */ pt(Ig, [["render", Rg], ["__scopeId", "data-v-d7465e98"]]), Fg = {
  name: "CongressLink",
  components: {
    TipiIcon: We
  },
  props: {
    url: String
  }
}, Lg = ["href"];
function Bg(t, e, n, r, i, a) {
  const o = _t("tipi-icon");
  return E(), R("a", {
    href: n.url,
    class: "c-congress-link u-color-primary",
    target: "_blank",
    title: "Ver en el Congreso.es"
  }, [
    vt(o, {
      class: "u-filling-primary",
      icon: "open-blank"
    }),
    wt("Ver en el Congreso.es")
  ], 8, Lg);
}
const Hg = /* @__PURE__ */ pt(Fg, [["render", Bg]]), jg = {
  name: "TipiHeader",
  props: ["title", "subtitle"]
}, Vg = { class: "c-page-header__title" }, qg = {
  key: 0,
  class: "c-page-header__subtitle"
};
function Wg(t, e, n, r, i, a) {
  return E(), R("header", {
    class: Ft(["c-page-header", { "c-page-header--nosub": !n.subtitle }])
  }, [
    k("h1", Vg, tt(n.title), 1),
    n.subtitle ? (E(), R("p", qg, tt(n.subtitle), 1)) : at("", !0)
  ], 2);
}
const Ug = /* @__PURE__ */ pt(jg, [["render", Wg]]), Gg = {
  name: "TipiNavbar",
  components: {
    Icon: We
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
}, Yg = { class: "c-navbar" }, Xg = {
  key: 0,
  class: "c-disclaimer"
}, Qg = ["href", "innerHTML"], Jg = { class: "c-navbar__wrapper o-container" }, Kg = { class: "c-navbar__brand" }, Zg = {
  class: "c-navbar__brand-link",
  href: "/"
}, tm = ["src"], em = /* @__PURE__ */ k("span", { class: "bar" }, null, -1), nm = /* @__PURE__ */ k("span", { class: "bar" }, null, -1), rm = /* @__PURE__ */ k("span", { class: "bar" }, null, -1), im = /* @__PURE__ */ k("span", { class: "u-hide" }, "Menú", -1), am = [
  em,
  nm,
  rm,
  im
], om = { class: "c-menu" }, sm = ["href"], cm = {
  key: 2,
  class: "c-menu__submenu"
}, um = ["href"];
function lm(t, e, n, r, i, a) {
  const o = _t("router-link"), s = _t("icon");
  return E(), R("header", Yg, [
    !a.closedDisclaimer && n.disclaimerLink.hasOwnProperty("name") ? (E(), R("div", Xg, [
      n.disclaimerLink.external ? (E(), R("a", {
        key: 0,
        href: n.disclaimerLink.route,
        target: "_blank",
        innerHTML: n.disclaimerLink.name
      }, null, 8, Qg)) : (E(), Ct(o, {
        key: 1,
        to: { name: n.disclaimerLink.route },
        innerHTML: n.disclaimerLink.name
      }, null, 8, ["to", "innerHTML"])),
      k("a", {
        class: "c-disclaimer__close",
        href: "#",
        onClick: e[0] || (e[0] = (...c) => a.closeDisclaimer && a.closeDisclaimer(...c))
      }, [
        vt(s, {
          icon: "close",
          color: "#fff"
        })
      ])
    ])) : at("", !0),
    n.preImage ? (E(), R("div", {
      key: 1,
      class: "c-decorator",
      style: ie(`background-image: url(${n.preImage})`)
    }, null, 4)) : at("", !0),
    k("div", Jg, [
      k("div", Kg, [
        k("a", Zg, [
          k("img", {
            class: "c-navbar__brand-logo",
            src: n.logo
          }, null, 8, tm)
        ])
      ]),
      k("button", {
        type: "button",
        class: Ft(["c-navbar__menu-toggle", { "is-active": t.menuVisible }]),
        onClick: e[1] || (e[1] = (...c) => a.toggleMenu && a.toggleMenu(...c))
      }, am, 2),
      k("nav", {
        class: Ft(["c-navbar__menu", { "is-active": t.menuVisible }])
      }, [
        k("ul", om, [
          (E(!0), R(te, null, ee(n.links, (c) => aa((E(), R("li", {
            onClick: e[3] || (e[3] = (...u) => a.closeMenuMobile && a.closeMenuMobile(...u)),
            class: Ft(["c-menu__item", { "has-submenu": c.children }]),
            key: c.route
          }, [
            c.external ? (E(), R("a", {
              key: 0,
              href: c.route,
              class: "c-menu__link",
              target: "_blank"
            }, [
              wt(tt(c.name), 1),
              c.icon ? (E(), Ct(s, {
                key: 0,
                icon: c.icon,
                class: "c-menu__icon"
              }, null, 8, ["icon"])) : at("", !0)
            ], 8, sm)) : (E(), Ct(o, {
              key: 1,
              to: { name: c.route },
              class: "c-menu__link"
            }, {
              default: Lt(() => [
                wt(tt(c.name), 1),
                c.icon ? (E(), Ct(s, {
                  key: 0,
                  icon: c.icon,
                  class: "c-menu__icon"
                }, null, 8, ["icon"])) : at("", !0)
              ]),
              _: 2
            }, 1032, ["to"])),
            c.children ? (E(), R("ul", cm, [
              (E(!0), R(te, null, ee(c.children, (u) => aa((E(), R("li", {
                onClick: e[2] || (e[2] = (...p) => a.closeMenuMobile && a.closeMenuMobile(...p)),
                class: "c-menu__item",
                key: u.route
              }, [
                u.external ? (E(), R("a", {
                  key: 0,
                  href: u.route,
                  class: "c-menu__link",
                  target: "_blank"
                }, [
                  wt(tt(u.name), 1),
                  u.icon ? (E(), Ct(s, {
                    key: 0,
                    icon: u.icon,
                    class: "c-menu__icon"
                  }, null, 8, ["icon"])) : at("", !0)
                ], 8, um)) : (E(), Ct(o, {
                  key: 1,
                  to: { name: u.route },
                  class: "c-menu__link"
                }, {
                  default: Lt(() => [
                    wt(tt(u.name), 1),
                    u.icon ? (E(), Ct(s, {
                      key: 0,
                      icon: u.icon,
                      class: "c-menu__icon"
                    }, null, 8, ["icon"])) : at("", !0)
                  ]),
                  _: 2
                }, 1032, ["to"]))
              ])), [
                [oa, u.condition]
              ])), 128))
            ])) : at("", !0)
          ], 2)), [
            [oa, c.condition]
          ])), 128))
        ])
      ], 2)
    ])
  ]);
}
const fm = /* @__PURE__ */ pt(Gg, [["render", lm]]), hm = {
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
      let t = "";
      return this.party in this.logos && (t = import(`../../assets/party_logos/${this.logos[this.party]}`)), t;
    }
  }
}, dm = { class: "c-party_logo__container" }, pm = ["src", "alt"];
function gm(t, e, n, r, i, a) {
  return E(), R("div", dm, [
    k("img", {
      class: "c-party_logo__image",
      src: a.getLogoSrc(),
      alt: "Logo de " + n.party
    }, null, 8, pm)
  ]);
}
const mm = /* @__PURE__ */ pt(hm, [["render", gm]]), ym = (t, e) => {
  const n = t[e];
  return n ? typeof n == "function" ? n() : Promise.resolve(n) : new Promise((r, i) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + e)));
  });
};
const vm = {
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
      let t = "";
      try {
        t = Uu(
          () => ym(/* @__PURE__ */ Object.assign({ "../../assets/party_logos/icon/bng.svg": () => import("./bng-890acecf.mjs"), "../../assets/party_logos/icon/coalicioncanaria.svg": () => import("./coalicioncanaria-6f4c1db4.mjs"), "../../assets/party_logos/icon/compromis.svg": () => import("./compromis-5ea8e904.mjs"), "../../assets/party_logos/icon/cs.svg": () => import("./cs-de2f22f8.mjs"), "../../assets/party_logos/icon/cup.svg": () => import("./cup-83f9d201.mjs"), "../../assets/party_logos/icon/ehbildu.svg": () => import("./ehbildu-23275d48.mjs"), "../../assets/party_logos/icon/encomu.svg": () => import("./encomu-90f0f0ee.mjs"), "../../assets/party_logos/icon/erc.svg": () => import("./erc-83cebd9f.mjs"), "../../assets/party_logos/icon/foroasturias.svg": () => import("./foroasturias-c86ed9f1.mjs"), "../../assets/party_logos/icon/iu.svg": () => import("./iu-0d57eb1a.mjs"), "../../assets/party_logos/icon/jxcat.svg": () => import("./jxcat-69202004.mjs"), "../../assets/party_logos/icon/maspais.svg": () => import("./maspais-a61a53ef.mjs"), "../../assets/party_logos/icon/nuevacanaria.svg": () => import("./nuevacanaria-559edad7.mjs"), "../../assets/party_logos/icon/pdecat.svg": () => import("./pdecat-0ec3db5a.mjs"), "../../assets/party_logos/icon/pnv.svg": () => import("./pnv-7f6f4b34.mjs"), "../../assets/party_logos/icon/podemos.svg": () => import("./podemos-de793077.mjs"), "../../assets/party_logos/icon/pp.svg": () => import("./pp-13bed712.mjs"), "../../assets/party_logos/icon/prc.svg": () => import("./prc-8a3d42c1.mjs"), "../../assets/party_logos/icon/psoe.svg": () => import("./psoe-97af3ccf.mjs"), "../../assets/party_logos/icon/sumar.svg": () => import("./sumar-7dfecef0.mjs"), "../../assets/party_logos/icon/teruelexiste.svg": () => import("./teruelexiste-7d4a17ab.mjs"), "../../assets/party_logos/icon/unidaspodemos.svg": () => import("./unidaspodemos-43ae78cc.mjs"), "../../assets/party_logos/icon/upn.svg": () => import("./upn-e7eb332f.mjs"), "../../assets/party_logos/icon/vox.svg": () => import("./vox-64380b40.mjs") }), `../../assets/party_logos/icon/${this.parties[this.party].logo}.svg`)
        );
      } catch {
        t = this.icon;
      }
      return t;
    },
    getBackground: function() {
      var e;
      const t = (e = this.parties[this.party]) != null && e.color ? this.parties[this.party].color : "";
      return t.length == 7 ? "background-color:" + t : "background-image:" + t;
    },
    getName: function() {
      var t;
      return (t = this.parties[this.party]) != null && t.name ? this.parties[this.party].name : "";
    }
  }
}, _m = ["alt"];
function wm(t, e, n, r, i, a) {
  return E(), R("div", {
    class: "c-party_logo_icon",
    style: ie(a.getBackground)
  }, [
    k("figure", {
      class: "c-party_logo_icon__image",
      alt: "Logo de " + a.getName
    }, [
      (E(), Ct(As(a.svg)))
    ], 8, _m)
  ], 4);
}
const xm = /* @__PURE__ */ pt(vm, [["render", wm], ["__scopeId", "data-v-5e00b143"]]), bm = {
  name: "TipiDeputy",
  components: {
    TipiIcon: We,
    PartyLogo: mm,
    PartyLogoIcon: xm
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
      const t = new Date(this.deputy.birthdate), e = /* @__PURE__ */ new Date();
      if (t.getDate() == e.getDate() && t.getMonth() == e.getMonth())
        return "c-deputy__birthday";
    },
    getAge: function() {
      const t = new Date(this.deputy.birthdate);
      return (/* @__PURE__ */ new Date()).getFullYear() - t.getFullYear();
    },
    getConstituency: function() {
      return this.deputy.constituency;
    }
  }
}, Sm = { class: "o-container" }, Cm = { class: "o-grid o-grid--reverse" }, Mm = { class: "o-grid__col u-4@sm" }, Om = { class: "c-deputy__image_container" }, $m = ["src", "alt"], Am = { class: "o-grid__col u-12 u-8@sm" }, Pm = { class: "c-deputy__name" }, Em = {
  key: 0,
  class: "c-deputy__group"
}, Tm = { class: "c-deputy__extra" }, Im = { class: "c-deputy__personal" }, km = { class: "c-deputy__personal" }, Dm = { class: "c-deputy__links" }, Nm = { class: "o-grid__col u-12 u-12@sm c-deputy__more" }, Rm = /* @__PURE__ */ k("h3", null, "Declaraciones", -1), zm = ["href"], Fm = /* @__PURE__ */ k("h3", null, "Cargos", -1), Lm = /* @__PURE__ */ k("h3", null, "Ficha personal", -1);
function Bm(t, e, n, r, i, a) {
  const o = _t("party-logo-icon"), s = _t("router-link"), c = _t("tipi-icon");
  return n.deputy ? (E(), R("div", {
    key: 0,
    class: Ft(["c-deputy", a.addBirthdayClass()])
  }, [
    k("div", Sm, [
      k("div", Cm, [
        k("div", Mm, [
          k("div", Om, [
            k("img", {
              class: "c-deputy__image",
              src: n.deputy.image,
              alt: "Foto de " + n.deputy.name
            }, null, 8, $m),
            vt(o, {
              party: n.deputy.party_name
            }, null, 8, ["party"])
          ])
        ]),
        k("div", Am, [
          k("h1", Pm, tt(n.deputy.name), 1),
          n.parliamentaryGroup ? (E(), R("h3", Em, [
            vt(s, {
              to: { name: "parliamentarygroup", params: { id: n.parliamentaryGroup.id } }
            }, {
              default: Lt(() => [
                wt(tt(n.parliamentaryGroup.name), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ])) : at("", !0),
          k("div", Tm, [
            k("span", Im, [
              a.addBirthdayClass() ? (E(), Ct(c, {
                key: 0,
                icon: "birthday"
              })) : at("", !0),
              wt(tt(a.getAge()) + " años", 1)
            ]),
            k("span", km, [
              vt(c, { icon: "location" }),
              wt(tt(a.getConstituency()), 1)
            ])
          ]),
          k("div", Dm, [
            Ia(t.$slots, "default")
          ])
        ]),
        k("div", Nm, [
          k("a", {
            href: "#",
            onClick: e[0] || (e[0] = (...u) => a.collapse && a.collapse(...u))
          }, [
            wt(tt(a.getCollapseMessage()), 1),
            vt(c, {
              icon: a.getCollapseIcon()
            }, null, 8, ["icon"])
          ])
        ]),
        k("div", {
          class: Ft([a.getCollapsedClass(), "o-grid__col u-12 u-4@sm"])
        }, [
          Rm,
          (E(!0), R(te, null, ee(n.deputy.extra.declarations, (u, p) => (E(), R("p", { key: p }, [
            vt(c, { icon: "document" }),
            k("a", { href: u }, tt(p), 9, zm)
          ]))), 128))
        ], 2),
        k("div", {
          class: Ft([a.getCollapsedClass(), "o-grid__col u-12 u-4@sm"])
        }, [
          Fm,
          (E(!0), R(te, null, ee(n.deputy.public_position, (u) => (E(), R("p", { key: u }, tt(u), 1))), 128))
        ], 2),
        k("div", {
          class: Ft([a.getCollapsedClass(), "o-grid__col u-12 u-4@sm"])
        }, [
          Lm,
          (E(!0), R(te, null, ee(n.deputy.bio, (u) => (E(), R("p", { key: u }, tt(u), 1))), 128))
        ], 2)
      ])
    ])
  ], 2)) : at("", !0);
}
const Hm = /* @__PURE__ */ pt(bm, [["render", Bm]]), jm = {
  name: "TipiText",
  props: {
    meta: String,
    value: [String, Array],
    type: String,
    source: Array,
    hideGroup: Boolean
  },
  methods: {
    getPeopleFromName: function(t) {
      if (t.hasOwnProperty("name"))
        return t;
      let n = /\[.*\]/.exec(t);
      if (!n)
        return this.source.find((i) => i.name == t);
      let r = n[0].replace("[", "").replace("]", "");
      return this.source.find((i) => i.id == r);
    },
    show: function(t) {
      return t.constructor === Array ? t.join("<br/>") : t;
    },
    hasImage: function(t) {
      return this.getPeopleFromName(t) && this.getPeopleFromName(t).image;
    },
    is: function(t) {
      return t === void 0 ? !1 : t.constructor === String && t != "" || t.constructor === Array && t.length > 0;
    }
  }
}, Vm = {
  key: 0,
  class: "c-text"
}, qm = { class: "c-text__label" }, Wm = ["innerHTML"], Um = {
  key: 1,
  class: "c-text__list"
}, Gm = ["alt", "src"], Ym = {
  key: 1,
  class: "c-text__wrapper"
}, Xm = { key: 0 }, Qm = { key: 2 };
function Jm(t, e, n, r, i, a) {
  const o = _t("router-link");
  return a.is(n.value) ? (E(), R("div", Vm, [
    k("h6", qm, tt(n.meta), 1),
    n.source ? at("", !0) : (E(), R("p", {
      key: 0,
      class: "c-text__value",
      innerHTML: a.show(n.value)
    }, null, 8, Wm)),
    n.source ? (E(), R("ul", Um, [
      (E(!0), R(te, null, ee(n.value, (s, c) => (E(), R("li", {
        key: c,
        class: Ft(["c-text__list-item", { "c-text__list-item--image": a.hasImage(s) }])
      }, [
        a.hasImage(s) ? (E(), Ct(o, {
          key: 0,
          to: { name: n.type, params: { id: a.getPeopleFromName(s).id } }
        }, {
          default: Lt(() => [
            k("img", {
              class: "c-text__image",
              alt: s,
              src: a.getPeopleFromName(s).image
            }, null, 8, Gm)
          ]),
          _: 2
        }, 1032, ["to"])) : at("", !0),
        a.getPeopleFromName(s) ? (E(), R("div", Ym, [
          vt(o, {
            to: { name: n.type, params: { id: a.getPeopleFromName(s).id } }
          }, {
            default: Lt(() => [
              wt(tt(a.getPeopleFromName(s).name) + " ", 1),
              n.hideGroup ? at("", !0) : (E(), R("span", Xm, tt(a.getPeopleFromName(s).parliamentarygroup), 1))
            ]),
            _: 2
          }, 1032, ["to"])
        ])) : (E(), R("span", Qm, tt(s), 1))
      ], 2))), 128))
    ])) : at("", !0)
  ])) : at("", !0);
}
const Km = /* @__PURE__ */ pt(jm, [["render", Jm]]);
var Zm = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var e = {}, n = Symbol("test"), r = Object(n);
  if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
    return !1;
  var i = 42;
  e[n] = i;
  for (n in e)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return !1;
  var a = Object.getOwnPropertySymbols(e);
  if (a.length !== 1 || a[0] !== n || !Object.prototype.propertyIsEnumerable.call(e, n))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var o = Object.getOwnPropertyDescriptor(e, n);
    if (o.value !== i || o.enumerable !== !0)
      return !1;
  }
  return !0;
}, Io = typeof Symbol < "u" && Symbol, ty = Zm, ey = function() {
  return typeof Io != "function" || typeof Symbol != "function" || typeof Io("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : ty();
}, ko = {
  foo: {}
}, ny = Object, ry = function() {
  return { __proto__: ko }.foo === ko.foo && !({ __proto__: null } instanceof ny);
}, iy = "Function.prototype.bind called on incompatible ", Li = Array.prototype.slice, ay = Object.prototype.toString, oy = "[object Function]", sy = function(e) {
  var n = this;
  if (typeof n != "function" || ay.call(n) !== oy)
    throw new TypeError(iy + n);
  for (var r = Li.call(arguments, 1), i, a = function() {
    if (this instanceof i) {
      var p = n.apply(
        this,
        r.concat(Li.call(arguments))
      );
      return Object(p) === p ? p : this;
    } else
      return n.apply(
        e,
        r.concat(Li.call(arguments))
      );
  }, o = Math.max(0, n.length - r.length), s = [], c = 0; c < o; c++)
    s.push("$" + c);
  if (i = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(a), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, i.prototype = new u(), u.prototype = null;
  }
  return i;
}, cy = sy, js = Function.prototype.bind || cy, Do = {}.hasOwnProperty, Bi = Function.prototype.call, uy = Bi.bind ? Bi.bind(Do) : function(t, e) {
  return Bi.call(Do, t, e);
}, it, bn = SyntaxError, Vs = Function, wn = TypeError, Hi = function(t) {
  try {
    return Vs('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, nn = Object.getOwnPropertyDescriptor;
if (nn)
  try {
    nn({}, "");
  } catch {
    nn = null;
  }
var ji = function() {
  throw new wn();
}, ly = nn ? function() {
  try {
    return arguments.callee, ji;
  } catch {
    try {
      return nn(arguments, "callee").get;
    } catch {
      return ji;
    }
  }
}() : ji, pn = ey(), fy = ry(), St = Object.getPrototypeOf || (fy ? function(t) {
  return t.__proto__;
} : null), yn = {}, hy = typeof Uint8Array > "u" || !St ? it : St(Uint8Array), rn = {
  "%AggregateError%": typeof AggregateError > "u" ? it : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? it : ArrayBuffer,
  "%ArrayIteratorPrototype%": pn && St ? St([][Symbol.iterator]()) : it,
  "%AsyncFromSyncIteratorPrototype%": it,
  "%AsyncFunction%": yn,
  "%AsyncGenerator%": yn,
  "%AsyncGeneratorFunction%": yn,
  "%AsyncIteratorPrototype%": yn,
  "%Atomics%": typeof Atomics > "u" ? it : Atomics,
  "%BigInt%": typeof BigInt > "u" ? it : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? it : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? it : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? it : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? it : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? it : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? it : FinalizationRegistry,
  "%Function%": Vs,
  "%GeneratorFunction%": yn,
  "%Int8Array%": typeof Int8Array > "u" ? it : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? it : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? it : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": pn && St ? St(St([][Symbol.iterator]())) : it,
  "%JSON%": typeof JSON == "object" ? JSON : it,
  "%Map%": typeof Map > "u" ? it : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !pn || !St ? it : St((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? it : Promise,
  "%Proxy%": typeof Proxy > "u" ? it : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? it : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? it : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !pn || !St ? it : St((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? it : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": pn && St ? St(""[Symbol.iterator]()) : it,
  "%Symbol%": pn ? Symbol : it,
  "%SyntaxError%": bn,
  "%ThrowTypeError%": ly,
  "%TypedArray%": hy,
  "%TypeError%": wn,
  "%Uint8Array%": typeof Uint8Array > "u" ? it : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? it : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? it : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? it : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? it : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? it : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? it : WeakSet
};
if (St)
  try {
    null.error;
  } catch (t) {
    var dy = St(St(t));
    rn["%Error.prototype%"] = dy;
  }
var py = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = Hi("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = Hi("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = Hi("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var i = t("%AsyncGenerator%");
    i && St && (n = St(i.prototype));
  }
  return rn[e] = n, n;
}, No = {
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
}, Qn = js, xr = uy, gy = Qn.call(Function.call, Array.prototype.concat), my = Qn.call(Function.apply, Array.prototype.splice), Ro = Qn.call(Function.call, String.prototype.replace), br = Qn.call(Function.call, String.prototype.slice), yy = Qn.call(Function.call, RegExp.prototype.exec), vy = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, _y = /\\(\\)?/g, wy = function(e) {
  var n = br(e, 0, 1), r = br(e, -1);
  if (n === "%" && r !== "%")
    throw new bn("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new bn("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return Ro(e, vy, function(a, o, s, c) {
    i[i.length] = s ? Ro(c, _y, "$1") : o || a;
  }), i;
}, xy = function(e, n) {
  var r = e, i;
  if (xr(No, r) && (i = No[r], r = "%" + i[0] + "%"), xr(rn, r)) {
    var a = rn[r];
    if (a === yn && (a = py(r)), typeof a > "u" && !n)
      throw new wn("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: r,
      value: a
    };
  }
  throw new bn("intrinsic " + e + " does not exist!");
}, Da = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new wn("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new wn('"allowMissing" argument must be a boolean');
  if (yy(/^%?[^%]*%?$/, e) === null)
    throw new bn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = wy(e), i = r.length > 0 ? r[0] : "", a = xy("%" + i + "%", n), o = a.name, s = a.value, c = !1, u = a.alias;
  u && (i = u[0], my(r, gy([0, 1], u)));
  for (var p = 1, h = !0; p < r.length; p += 1) {
    var m = r[p], l = br(m, 0, 1), v = br(m, -1);
    if ((l === '"' || l === "'" || l === "`" || v === '"' || v === "'" || v === "`") && l !== v)
      throw new bn("property names with quotes must have matching quotes");
    if ((m === "constructor" || !h) && (c = !0), i += "." + m, o = "%" + i + "%", xr(rn, o))
      s = rn[o];
    else if (s != null) {
      if (!(m in s)) {
        if (!n)
          throw new wn("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (nn && p + 1 >= r.length) {
        var _ = nn(s, m);
        h = !!_, h && "get" in _ && !("originalValue" in _.get) ? s = _.get : s = s[m];
      } else
        h = xr(s, m), s = s[m];
      h && !c && (rn[o] = s);
    }
  }
  return s;
}, qs = { exports: {} };
(function(t) {
  var e = js, n = Da, r = n("%Function.prototype.apply%"), i = n("%Function.prototype.call%"), a = n("%Reflect.apply%", !0) || e.call(i, r), o = n("%Object.getOwnPropertyDescriptor%", !0), s = n("%Object.defineProperty%", !0), c = n("%Math.max%");
  if (s)
    try {
      s({}, "a", { value: 1 });
    } catch {
      s = null;
    }
  t.exports = function(h) {
    var m = a(e, i, arguments);
    if (o && s) {
      var l = o(m, "length");
      l.configurable && s(
        m,
        "length",
        { value: 1 + c(0, h.length - (arguments.length - 1)) }
      );
    }
    return m;
  };
  var u = function() {
    return a(e, r, arguments);
  };
  s ? s(t.exports, "apply", { value: u }) : t.exports.apply = u;
})(qs);
var by = qs.exports, Ws = Da, Us = by, Sy = Us(Ws("String.prototype.indexOf")), Cy = function(e, n) {
  var r = Ws(e, !!n);
  return typeof r == "function" && Sy(e, ".prototype.") > -1 ? Us(r) : r;
}, Na = typeof Map == "function" && Map.prototype, Vi = Object.getOwnPropertyDescriptor && Na ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Sr = Na && Vi && typeof Vi.get == "function" ? Vi.get : null, zo = Na && Map.prototype.forEach, Ra = typeof Set == "function" && Set.prototype, qi = Object.getOwnPropertyDescriptor && Ra ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Cr = Ra && qi && typeof qi.get == "function" ? qi.get : null, Fo = Ra && Set.prototype.forEach, My = typeof WeakMap == "function" && WeakMap.prototype, jn = My ? WeakMap.prototype.has : null, Oy = typeof WeakSet == "function" && WeakSet.prototype, Vn = Oy ? WeakSet.prototype.has : null, $y = typeof WeakRef == "function" && WeakRef.prototype, Lo = $y ? WeakRef.prototype.deref : null, Ay = Boolean.prototype.valueOf, Py = Object.prototype.toString, Ey = Function.prototype.toString, Ty = String.prototype.match, za = String.prototype.slice, Re = String.prototype.replace, Iy = String.prototype.toUpperCase, Bo = String.prototype.toLowerCase, Gs = RegExp.prototype.test, Ho = Array.prototype.concat, me = Array.prototype.join, ky = Array.prototype.slice, jo = Math.floor, ca = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Wi = Object.getOwnPropertySymbols, ua = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Sn = typeof Symbol == "function" && typeof Symbol.iterator == "object", It = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Sn || "symbol") ? Symbol.toStringTag : null, Ys = Object.prototype.propertyIsEnumerable, Vo = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function qo(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Gs.call(/e/, e))
    return e;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var r = t < 0 ? -jo(-t) : jo(t);
    if (r !== t) {
      var i = String(r), a = za.call(e, i.length + 1);
      return Re.call(i, n, "$&_") + "." + Re.call(Re.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Re.call(e, n, "$&_");
}
var la = Bs, Wo = la.custom, Uo = Qs(Wo) ? Wo : null, Dy = function t(e, n, r, i) {
  var a = n || {};
  if (Ne(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Ne(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = Ne(a, "customInspect") ? a.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Ne(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Ne(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = a.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return Ks(e, a);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var c = String(e);
    return s ? qo(e, c) : c;
  }
  if (typeof e == "bigint") {
    var u = String(e) + "n";
    return s ? qo(e, u) : u;
  }
  var p = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof r > "u" && (r = 0), r >= p && p > 0 && typeof e == "object")
    return fa(e) ? "[Array]" : "[Object]";
  var h = Ky(a, r);
  if (typeof i > "u")
    i = [];
  else if (Js(i, e) >= 0)
    return "[Circular]";
  function m(C, P, B) {
    if (P && (i = ky.call(i), i.push(P)), B) {
      var V = {
        depth: a.depth
      };
      return Ne(a, "quoteStyle") && (V.quoteStyle = a.quoteStyle), t(C, V, r + 1, i);
    }
    return t(C, a, r + 1, i);
  }
  if (typeof e == "function" && !Go(e)) {
    var l = Vy(e), v = ar(e, m);
    return "[Function" + (l ? ": " + l : " (anonymous)") + "]" + (v.length > 0 ? " { " + me.call(v, ", ") + " }" : "");
  }
  if (Qs(e)) {
    var _ = Sn ? Re.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : ua.call(e);
    return typeof e == "object" && !Sn ? Dn(_) : _;
  }
  if (Xy(e)) {
    for (var y = "<" + Bo.call(String(e.nodeName)), f = e.attributes || [], d = 0; d < f.length; d++)
      y += " " + f[d].name + "=" + Xs(Ny(f[d].value), "double", a);
    return y += ">", e.childNodes && e.childNodes.length && (y += "..."), y += "</" + Bo.call(String(e.nodeName)) + ">", y;
  }
  if (fa(e)) {
    if (e.length === 0)
      return "[]";
    var w = ar(e, m);
    return h && !Jy(w) ? "[" + ha(w, h) + "]" : "[ " + me.call(w, ", ") + " ]";
  }
  if (zy(e)) {
    var A = ar(e, m);
    return !("cause" in Error.prototype) && "cause" in e && !Ys.call(e, "cause") ? "{ [" + String(e) + "] " + me.call(Ho.call("[cause]: " + m(e.cause), A), ", ") + " }" : A.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + me.call(A, ", ") + " }";
  }
  if (typeof e == "object" && o) {
    if (Uo && typeof e[Uo] == "function" && la)
      return la(e, { depth: p - r });
    if (o !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (qy(e)) {
    var I = [];
    return zo && zo.call(e, function(C, P) {
      I.push(m(P, e, !0) + " => " + m(C, e));
    }), Yo("Map", Sr.call(e), I, h);
  }
  if (Gy(e)) {
    var H = [];
    return Fo && Fo.call(e, function(C) {
      H.push(m(C, e));
    }), Yo("Set", Cr.call(e), H, h);
  }
  if (Wy(e))
    return Ui("WeakMap");
  if (Yy(e))
    return Ui("WeakSet");
  if (Uy(e))
    return Ui("WeakRef");
  if (Ly(e))
    return Dn(m(Number(e)));
  if (Hy(e))
    return Dn(m(ca.call(e)));
  if (By(e))
    return Dn(Ay.call(e));
  if (Fy(e))
    return Dn(m(String(e)));
  if (!Ry(e) && !Go(e)) {
    var q = ar(e, m), j = Vo ? Vo(e) === Object.prototype : e instanceof Object || e.constructor === Object, z = e instanceof Object ? "" : "null prototype", L = !j && It && Object(e) === e && It in e ? za.call(Ue(e), 8, -1) : z ? "Object" : "", b = j || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", S = b + (L || z ? "[" + me.call(Ho.call([], L || [], z || []), ": ") + "] " : "");
    return q.length === 0 ? S + "{}" : h ? S + "{" + ha(q, h) + "}" : S + "{ " + me.call(q, ", ") + " }";
  }
  return String(e);
};
function Xs(t, e, n) {
  var r = (n.quoteStyle || e) === "double" ? '"' : "'";
  return r + t + r;
}
function Ny(t) {
  return Re.call(String(t), /"/g, "&quot;");
}
function fa(t) {
  return Ue(t) === "[object Array]" && (!It || !(typeof t == "object" && It in t));
}
function Ry(t) {
  return Ue(t) === "[object Date]" && (!It || !(typeof t == "object" && It in t));
}
function Go(t) {
  return Ue(t) === "[object RegExp]" && (!It || !(typeof t == "object" && It in t));
}
function zy(t) {
  return Ue(t) === "[object Error]" && (!It || !(typeof t == "object" && It in t));
}
function Fy(t) {
  return Ue(t) === "[object String]" && (!It || !(typeof t == "object" && It in t));
}
function Ly(t) {
  return Ue(t) === "[object Number]" && (!It || !(typeof t == "object" && It in t));
}
function By(t) {
  return Ue(t) === "[object Boolean]" && (!It || !(typeof t == "object" && It in t));
}
function Qs(t) {
  if (Sn)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !ua)
    return !1;
  try {
    return ua.call(t), !0;
  } catch {
  }
  return !1;
}
function Hy(t) {
  if (!t || typeof t != "object" || !ca)
    return !1;
  try {
    return ca.call(t), !0;
  } catch {
  }
  return !1;
}
var jy = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function Ne(t, e) {
  return jy.call(t, e);
}
function Ue(t) {
  return Py.call(t);
}
function Vy(t) {
  if (t.name)
    return t.name;
  var e = Ty.call(Ey.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Js(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var n = 0, r = t.length; n < r; n++)
    if (t[n] === e)
      return n;
  return -1;
}
function qy(t) {
  if (!Sr || !t || typeof t != "object")
    return !1;
  try {
    Sr.call(t);
    try {
      Cr.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function Wy(t) {
  if (!jn || !t || typeof t != "object")
    return !1;
  try {
    jn.call(t, jn);
    try {
      Vn.call(t, Vn);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Uy(t) {
  if (!Lo || !t || typeof t != "object")
    return !1;
  try {
    return Lo.call(t), !0;
  } catch {
  }
  return !1;
}
function Gy(t) {
  if (!Cr || !t || typeof t != "object")
    return !1;
  try {
    Cr.call(t);
    try {
      Sr.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function Yy(t) {
  if (!Vn || !t || typeof t != "object")
    return !1;
  try {
    Vn.call(t, Vn);
    try {
      jn.call(t, jn);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function Xy(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function Ks(t, e) {
  if (t.length > e.maxStringLength) {
    var n = t.length - e.maxStringLength, r = "... " + n + " more character" + (n > 1 ? "s" : "");
    return Ks(za.call(t, 0, e.maxStringLength), e) + r;
  }
  var i = Re.call(Re.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Qy);
  return Xs(i, "single", e);
}
function Qy(t) {
  var e = t.charCodeAt(0), n = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + Iy.call(e.toString(16));
}
function Dn(t) {
  return "Object(" + t + ")";
}
function Ui(t) {
  return t + " { ? }";
}
function Yo(t, e, n, r) {
  var i = r ? ha(n, r) : me.call(n, ", ");
  return t + " (" + e + ") {" + i + "}";
}
function Jy(t) {
  for (var e = 0; e < t.length; e++)
    if (Js(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function Ky(t, e) {
  var n;
  if (t.indent === "	")
    n = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    n = me.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: n,
    prev: me.call(Array(e + 1), n)
  };
}
function ha(t, e) {
  if (t.length === 0)
    return "";
  var n = `
` + e.prev + e.base;
  return n + me.call(t, "," + n) + `
` + e.prev;
}
function ar(t, e) {
  var n = fa(t), r = [];
  if (n) {
    r.length = t.length;
    for (var i = 0; i < t.length; i++)
      r[i] = Ne(t, i) ? e(t[i], t) : "";
  }
  var a = typeof Wi == "function" ? Wi(t) : [], o;
  if (Sn) {
    o = {};
    for (var s = 0; s < a.length; s++)
      o["$" + a[s]] = a[s];
  }
  for (var c in t)
    Ne(t, c) && (n && String(Number(c)) === c && c < t.length || Sn && o["$" + c] instanceof Symbol || (Gs.call(/[^\w$]/, c) ? r.push(e(c, t) + ": " + e(t[c], t)) : r.push(c + ": " + e(t[c], t))));
  if (typeof Wi == "function")
    for (var u = 0; u < a.length; u++)
      Ys.call(t, a[u]) && r.push("[" + e(a[u]) + "]: " + e(t[a[u]], t));
  return r;
}
var Fa = Da, En = Cy, Zy = Dy, t0 = Fa("%TypeError%"), or = Fa("%WeakMap%", !0), sr = Fa("%Map%", !0), e0 = En("WeakMap.prototype.get", !0), n0 = En("WeakMap.prototype.set", !0), r0 = En("WeakMap.prototype.has", !0), i0 = En("Map.prototype.get", !0), a0 = En("Map.prototype.set", !0), o0 = En("Map.prototype.has", !0), La = function(t, e) {
  for (var n = t, r; (r = n.next) !== null; n = r)
    if (r.key === e)
      return n.next = r.next, r.next = t.next, t.next = r, r;
}, s0 = function(t, e) {
  var n = La(t, e);
  return n && n.value;
}, c0 = function(t, e, n) {
  var r = La(t, e);
  r ? r.value = n : t.next = {
    // eslint-disable-line no-param-reassign
    key: e,
    next: t.next,
    value: n
  };
}, u0 = function(t, e) {
  return !!La(t, e);
}, l0 = function() {
  var e, n, r, i = {
    assert: function(a) {
      if (!i.has(a))
        throw new t0("Side channel does not contain " + Zy(a));
    },
    get: function(a) {
      if (or && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return e0(e, a);
      } else if (sr) {
        if (n)
          return i0(n, a);
      } else if (r)
        return s0(r, a);
    },
    has: function(a) {
      if (or && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return r0(e, a);
      } else if (sr) {
        if (n)
          return o0(n, a);
      } else if (r)
        return u0(r, a);
      return !1;
    },
    set: function(a, o) {
      or && a && (typeof a == "object" || typeof a == "function") ? (e || (e = new or()), n0(e, a, o)) : sr ? (n || (n = new sr()), a0(n, a, o)) : (r || (r = { key: {}, next: null }), c0(r, a, o));
    }
  };
  return i;
}, f0 = String.prototype.replace, h0 = /%20/g, Gi = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Ba = {
  default: Gi.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return f0.call(t, h0, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: Gi.RFC1738,
  RFC3986: Gi.RFC3986
}, d0 = Ba, Yi = Object.prototype.hasOwnProperty, en = Array.isArray, pe = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), p0 = function(e) {
  for (; e.length > 1; ) {
    var n = e.pop(), r = n.obj[n.prop];
    if (en(r)) {
      for (var i = [], a = 0; a < r.length; ++a)
        typeof r[a] < "u" && i.push(r[a]);
      n.obj[n.prop] = i;
    }
  }
}, Zs = function(e, n) {
  for (var r = n && n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < e.length; ++i)
    typeof e[i] < "u" && (r[i] = e[i]);
  return r;
}, g0 = function t(e, n, r) {
  if (!n)
    return e;
  if (typeof n != "object") {
    if (en(e))
      e.push(n);
    else if (e && typeof e == "object")
      (r && (r.plainObjects || r.allowPrototypes) || !Yi.call(Object.prototype, n)) && (e[n] = !0);
    else
      return [e, n];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(n);
  var i = e;
  return en(e) && !en(n) && (i = Zs(e, r)), en(e) && en(n) ? (n.forEach(function(a, o) {
    if (Yi.call(e, o)) {
      var s = e[o];
      s && typeof s == "object" && a && typeof a == "object" ? e[o] = t(s, a, r) : e.push(a);
    } else
      e[o] = a;
  }), e) : Object.keys(n).reduce(function(a, o) {
    var s = n[o];
    return Yi.call(a, o) ? a[o] = t(a[o], s, r) : a[o] = s, a;
  }, i);
}, m0 = function(e, n) {
  return Object.keys(n).reduce(function(r, i) {
    return r[i] = n[i], r;
  }, e);
}, y0 = function(t, e, n) {
  var r = t.replace(/\+/g, " ");
  if (n === "iso-8859-1")
    return r.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(r);
  } catch {
    return r;
  }
}, v0 = function(e, n, r, i, a) {
  if (e.length === 0)
    return e;
  var o = e;
  if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), r === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(p) {
      return "%26%23" + parseInt(p.slice(2), 16) + "%3B";
    });
  for (var s = "", c = 0; c < o.length; ++c) {
    var u = o.charCodeAt(c);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || a === d0.RFC1738 && (u === 40 || u === 41)) {
      s += o.charAt(c);
      continue;
    }
    if (u < 128) {
      s = s + pe[u];
      continue;
    }
    if (u < 2048) {
      s = s + (pe[192 | u >> 6] + pe[128 | u & 63]);
      continue;
    }
    if (u < 55296 || u >= 57344) {
      s = s + (pe[224 | u >> 12] + pe[128 | u >> 6 & 63] + pe[128 | u & 63]);
      continue;
    }
    c += 1, u = 65536 + ((u & 1023) << 10 | o.charCodeAt(c) & 1023), s += pe[240 | u >> 18] + pe[128 | u >> 12 & 63] + pe[128 | u >> 6 & 63] + pe[128 | u & 63];
  }
  return s;
}, _0 = function(e) {
  for (var n = [{ obj: { o: e }, prop: "o" }], r = [], i = 0; i < n.length; ++i)
    for (var a = n[i], o = a.obj[a.prop], s = Object.keys(o), c = 0; c < s.length; ++c) {
      var u = s[c], p = o[u];
      typeof p == "object" && p !== null && r.indexOf(p) === -1 && (n.push({ obj: o, prop: u }), r.push(p));
    }
  return p0(n), e;
}, w0 = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, x0 = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, b0 = function(e, n) {
  return [].concat(e, n);
}, S0 = function(e, n) {
  if (en(e)) {
    for (var r = [], i = 0; i < e.length; i += 1)
      r.push(n(e[i]));
    return r;
  }
  return n(e);
}, tc = {
  arrayToObject: Zs,
  assign: m0,
  combine: b0,
  compact: _0,
  decode: y0,
  encode: v0,
  isBuffer: x0,
  isRegExp: w0,
  maybeMap: S0,
  merge: g0
}, ec = l0, pr = tc, qn = Ba, C0 = Object.prototype.hasOwnProperty, Xo = {
  brackets: function(e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function(e, n) {
    return e + "[" + n + "]";
  },
  repeat: function(e) {
    return e;
  }
}, $e = Array.isArray, M0 = Array.prototype.push, nc = function(t, e) {
  M0.apply(t, $e(e) ? e : [e]);
}, O0 = Date.prototype.toISOString, Qo = qn.default, Et = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: pr.encode,
  encodeValuesOnly: !1,
  format: Qo,
  formatter: qn.formatters[Qo],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return O0.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, $0 = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Xi = {}, A0 = function t(e, n, r, i, a, o, s, c, u, p, h, m, l, v, _, y) {
  for (var f = e, d = y, w = 0, A = !1; (d = d.get(Xi)) !== void 0 && !A; ) {
    var I = d.get(e);
    if (w += 1, typeof I < "u") {
      if (I === w)
        throw new RangeError("Cyclic object value");
      A = !0;
    }
    typeof d.get(Xi) > "u" && (w = 0);
  }
  if (typeof c == "function" ? f = c(n, f) : f instanceof Date ? f = h(f) : r === "comma" && $e(f) && (f = pr.maybeMap(f, function(V) {
    return V instanceof Date ? h(V) : V;
  })), f === null) {
    if (a)
      return s && !v ? s(n, Et.encoder, _, "key", m) : n;
    f = "";
  }
  if ($0(f) || pr.isBuffer(f)) {
    if (s) {
      var H = v ? n : s(n, Et.encoder, _, "key", m);
      return [l(H) + "=" + l(s(f, Et.encoder, _, "value", m))];
    }
    return [l(n) + "=" + l(String(f))];
  }
  var q = [];
  if (typeof f > "u")
    return q;
  var j;
  if (r === "comma" && $e(f))
    v && s && (f = pr.maybeMap(f, s)), j = [{ value: f.length > 0 ? f.join(",") || null : void 0 }];
  else if ($e(c))
    j = c;
  else {
    var z = Object.keys(f);
    j = u ? z.sort(u) : z;
  }
  for (var L = i && $e(f) && f.length === 1 ? n + "[]" : n, b = 0; b < j.length; ++b) {
    var S = j[b], C = typeof S == "object" && typeof S.value < "u" ? S.value : f[S];
    if (!(o && C === null)) {
      var P = $e(f) ? typeof r == "function" ? r(L, S) : L : L + (p ? "." + S : "[" + S + "]");
      y.set(e, w);
      var B = ec();
      B.set(Xi, y), nc(q, t(
        C,
        P,
        r,
        i,
        a,
        o,
        r === "comma" && v && $e(f) ? null : s,
        c,
        u,
        p,
        h,
        m,
        l,
        v,
        _,
        B
      ));
    }
  }
  return q;
}, P0 = function(e) {
  if (!e)
    return Et;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var n = e.charset || Et.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = qn.default;
  if (typeof e.format < "u") {
    if (!C0.call(qn.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    r = e.format;
  }
  var i = qn.formatters[r], a = Et.filter;
  return (typeof e.filter == "function" || $e(e.filter)) && (a = e.filter), {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : Et.addQueryPrefix,
    allowDots: typeof e.allowDots > "u" ? Et.allowDots : !!e.allowDots,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Et.charsetSentinel,
    delimiter: typeof e.delimiter > "u" ? Et.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : Et.encode,
    encoder: typeof e.encoder == "function" ? e.encoder : Et.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : Et.encodeValuesOnly,
    filter: a,
    format: r,
    formatter: i,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : Et.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : Et.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Et.strictNullHandling
  };
}, E0 = function(t, e) {
  var n = t, r = P0(e), i, a;
  typeof r.filter == "function" ? (a = r.filter, n = a("", n)) : $e(r.filter) && (a = r.filter, i = a);
  var o = [];
  if (typeof n != "object" || n === null)
    return "";
  var s;
  e && e.arrayFormat in Xo ? s = e.arrayFormat : e && "indices" in e ? s = e.indices ? "indices" : "repeat" : s = "indices";
  var c = Xo[s];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var u = c === "comma" && e && e.commaRoundTrip;
  i || (i = Object.keys(n)), r.sort && i.sort(r.sort);
  for (var p = ec(), h = 0; h < i.length; ++h) {
    var m = i[h];
    r.skipNulls && n[m] === null || nc(o, A0(
      n[m],
      m,
      c,
      u,
      r.strictNullHandling,
      r.skipNulls,
      r.encode ? r.encoder : null,
      r.filter,
      r.sort,
      r.allowDots,
      r.serializeDate,
      r.format,
      r.formatter,
      r.encodeValuesOnly,
      r.charset,
      p
    ));
  }
  var l = o.join(r.delimiter), v = r.addQueryPrefix === !0 ? "?" : "";
  return r.charsetSentinel && (r.charset === "iso-8859-1" ? v += "utf8=%26%2310003%3B&" : v += "utf8=%E2%9C%93&"), l.length > 0 ? v + l : "";
}, Cn = tc, da = Object.prototype.hasOwnProperty, T0 = Array.isArray, bt = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: Cn.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, I0 = function(t) {
  return t.replace(/&#(\d+);/g, function(e, n) {
    return String.fromCharCode(parseInt(n, 10));
  });
}, rc = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, k0 = "utf8=%26%2310003%3B", D0 = "utf8=%E2%9C%93", N0 = function(e, n) {
  var r = { __proto__: null }, i = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, a = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, o = i.split(n.delimiter, a), s = -1, c, u = n.charset;
  if (n.charsetSentinel)
    for (c = 0; c < o.length; ++c)
      o[c].indexOf("utf8=") === 0 && (o[c] === D0 ? u = "utf-8" : o[c] === k0 && (u = "iso-8859-1"), s = c, c = o.length);
  for (c = 0; c < o.length; ++c)
    if (c !== s) {
      var p = o[c], h = p.indexOf("]="), m = h === -1 ? p.indexOf("=") : h + 1, l, v;
      m === -1 ? (l = n.decoder(p, bt.decoder, u, "key"), v = n.strictNullHandling ? null : "") : (l = n.decoder(p.slice(0, m), bt.decoder, u, "key"), v = Cn.maybeMap(
        rc(p.slice(m + 1), n),
        function(_) {
          return n.decoder(_, bt.decoder, u, "value");
        }
      )), v && n.interpretNumericEntities && u === "iso-8859-1" && (v = I0(v)), p.indexOf("[]=") > -1 && (v = T0(v) ? [v] : v), da.call(r, l) ? r[l] = Cn.combine(r[l], v) : r[l] = v;
    }
  return r;
}, R0 = function(t, e, n, r) {
  for (var i = r ? e : rc(e, n), a = t.length - 1; a >= 0; --a) {
    var o, s = t[a];
    if (s === "[]" && n.parseArrays)
      o = [].concat(i);
    else {
      o = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var c = s.charAt(0) === "[" && s.charAt(s.length - 1) === "]" ? s.slice(1, -1) : s, u = parseInt(c, 10);
      !n.parseArrays && c === "" ? o = { 0: i } : !isNaN(u) && s !== c && String(u) === c && u >= 0 && n.parseArrays && u <= n.arrayLimit ? (o = [], o[u] = i) : c !== "__proto__" && (o[c] = i);
    }
    i = o;
  }
  return i;
}, z0 = function(e, n, r, i) {
  if (e) {
    var a = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, o = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, c = r.depth > 0 && o.exec(a), u = c ? a.slice(0, c.index) : a, p = [];
    if (u) {
      if (!r.plainObjects && da.call(Object.prototype, u) && !r.allowPrototypes)
        return;
      p.push(u);
    }
    for (var h = 0; r.depth > 0 && (c = s.exec(a)) !== null && h < r.depth; ) {
      if (h += 1, !r.plainObjects && da.call(Object.prototype, c[1].slice(1, -1)) && !r.allowPrototypes)
        return;
      p.push(c[1]);
    }
    return c && p.push("[" + a.slice(c.index) + "]"), R0(p, n, r, i);
  }
}, F0 = function(e) {
  if (!e)
    return bt;
  if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = typeof e.charset > "u" ? bt.charset : e.charset;
  return {
    allowDots: typeof e.allowDots > "u" ? bt.allowDots : !!e.allowDots,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : bt.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : bt.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : bt.arrayLimit,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : bt.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : bt.comma,
    decoder: typeof e.decoder == "function" ? e.decoder : bt.decoder,
    delimiter: typeof e.delimiter == "string" || Cn.isRegExp(e.delimiter) ? e.delimiter : bt.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : bt.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : bt.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : bt.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : bt.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : bt.strictNullHandling
  };
}, L0 = function(t, e) {
  var n = F0(e);
  if (t === "" || t === null || typeof t > "u")
    return n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var r = typeof t == "string" ? N0(t, n) : t, i = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(r), o = 0; o < a.length; ++o) {
    var s = a[o], c = z0(s, r[s], n, typeof t == "string");
    i = Cn.merge(i, c, n);
  }
  return n.allowSparse === !0 ? i : Cn.compact(i);
}, B0 = E0, H0 = L0, j0 = Ba, V0 = {
  formats: j0,
  parse: H0,
  stringify: B0
};
const q0 = /* @__PURE__ */ Xn(V0), W0 = {
  name: "tipi-topics",
  props: {
    meta: String,
    topics: Array,
    tags: Array,
    topicsStyles: Object
  },
  computed: {
    sortedTopics: function() {
      return this.$props.topics.slice().sort(zr);
    }
  },
  methods: {
    getSubtopics(t) {
      return [
        ...new Set(this.$props.tags.filter((e) => e.topic === t).map((e) => e.subtopic))
      ];
    },
    getTags: function(t) {
      return this.$props.tags.filter((e) => e.subtopic === t).map((e) => e.tag);
    },
    paramsData: function(t, e, n) {
      return q0.stringify({
        topic: t,
        subtopics: e || void 0,
        tags: n || void 0
      });
    }
  }
}, U0 = {
  key: 0,
  class: "c-topics c-topics--extended"
}, G0 = { class: "c-topics__label" }, Y0 = { class: "c-topics__list" }, X0 = {
  key: 0,
  class: "c-topics__list-subtopic"
}, Q0 = {
  key: 0,
  class: "c-topics__list-tags"
};
function J0(t, e, n, r, i, a) {
  const o = _t("router-link");
  return n.topics ? (E(), R("div", U0, [
    k("h6", G0, tt(n.meta), 1),
    k("ul", Y0, [
      (E(!0), R(te, null, ee(a.sortedTopics, (s, c) => (E(), R("li", {
        key: s,
        class: "c-topics__list-topic"
      }, [
        vt(o, {
          id: `topic-${c}`,
          class: "c-topics__topic",
          style: ie(`background-color:${n.topicsStyles[s].color}`),
          to: { name: "results", params: { data: a.paramsData(s) } }
        }, {
          default: Lt(() => [
            wt(tt(s), 1)
          ]),
          _: 2
        }, 1032, ["id", "style", "to"]),
        a.getSubtopics(s) ? (E(), R("ul", X0, [
          (E(!0), R(te, null, ee(a.getSubtopics(s), (u) => (E(), R("li", {
            key: u + " - " + s,
            class: "c-topics__subtopic"
          }, [
            vt(o, {
              class: "c-topics__link",
              to: { name: "results", params: { data: a.paramsData(s, u) } }
            }, {
              default: Lt(() => [
                wt(tt(u), 1)
              ]),
              _: 2
            }, 1032, ["to"]),
            a.getTags(u) ? (E(), R("ul", Q0, [
              (E(!0), R(te, null, ee(a.getTags(u), (p) => (E(), R("li", {
                key: p + " - " + s,
                class: "c-topics__tag"
              }, [
                vt(o, {
                  class: "c-topics__link",
                  to: { name: "results", params: { data: a.paramsData(s, u, p) } }
                }, {
                  default: Lt(() => [
                    wt(tt(p), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]))), 128))
            ])) : at("", !0)
          ]))), 128))
        ])) : at("", !0)
      ]))), 128))
    ])
  ])) : at("", !0);
}
const K0 = /* @__PURE__ */ pt(W0, [["render", J0]]);
var pa = "http://www.w3.org/1999/xhtml";
const Jo = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: pa,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Fr(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Jo.hasOwnProperty(e) ? { space: Jo[e], local: t } : t;
}
function Z0(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === pa && e.documentElement.namespaceURI === pa ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function tv(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ic(t) {
  var e = Fr(t);
  return (e.local ? tv : Z0)(e);
}
function ev() {
}
function Ha(t) {
  return t == null ? ev : function() {
    return this.querySelector(t);
  };
}
function nv(t) {
  typeof t != "function" && (t = Ha(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = new Array(o), c, u, p = 0; p < o; ++p)
      (c = a[p]) && (u = t.call(c, c.__data__, p, a)) && ("__data__" in c && (u.__data__ = c.__data__), s[p] = u);
  return new Bt(r, this._parents);
}
function rv() {
  return [];
}
function ac(t) {
  return t == null ? rv : function() {
    return this.querySelectorAll(t);
  };
}
function iv(t) {
  typeof t != "function" && (t = ac(t));
  for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a)
    for (var o = e[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && (r.push(t.call(c, c.__data__, u, o)), i.push(c));
  return new Bt(r, i);
}
function oc(t) {
  return function() {
    return this.matches(t);
  };
}
function av(t) {
  typeof t != "function" && (t = oc(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new Bt(r, this._parents);
}
function sc(t) {
  return new Array(t.length);
}
function ov() {
  return new Bt(this._enter || this._groups.map(sc), this._parents);
}
function Mr(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Mr.prototype = {
  constructor: Mr,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function sv(t) {
  return function() {
    return t;
  };
}
var Ko = "$";
function cv(t, e, n, r, i, a) {
  for (var o = 0, s, c = e.length, u = a.length; o < u; ++o)
    (s = e[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new Mr(t, a[o]);
  for (; o < c; ++o)
    (s = e[o]) && (i[o] = s);
}
function uv(t, e, n, r, i, a, o) {
  var s, c, u = {}, p = e.length, h = a.length, m = new Array(p), l;
  for (s = 0; s < p; ++s)
    (c = e[s]) && (m[s] = l = Ko + o.call(c, c.__data__, s, e), l in u ? i[s] = c : u[l] = c);
  for (s = 0; s < h; ++s)
    l = Ko + o.call(t, a[s], s, a), (c = u[l]) ? (r[s] = c, c.__data__ = a[s], u[l] = null) : n[s] = new Mr(t, a[s]);
  for (s = 0; s < p; ++s)
    (c = e[s]) && u[m[s]] === c && (i[s] = c);
}
function lv(t, e) {
  if (!t)
    return l = new Array(this.size()), u = -1, this.each(function(H) {
      l[++u] = H;
    }), l;
  var n = e ? uv : cv, r = this._parents, i = this._groups;
  typeof t != "function" && (t = sv(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
    var p = r[u], h = i[u], m = h.length, l = t.call(p, p && p.__data__, u, r), v = l.length, _ = s[u] = new Array(v), y = o[u] = new Array(v), f = c[u] = new Array(m);
    n(p, h, _, y, f, l, e);
    for (var d = 0, w = 0, A, I; d < v; ++d)
      if (A = _[d]) {
        for (d >= w && (w = d + 1); !(I = y[w]) && ++w < v; )
          ;
        A._next = I || null;
      }
  }
  return o = new Bt(o, r), o._enter = s, o._exit = c, o;
}
function fv() {
  return new Bt(this._exit || this._groups.map(sc), this._parents);
}
function hv(t, e, n) {
  var r = this.enter(), i = this, a = this.exit();
  return r = typeof t == "function" ? t(r) : r.append(t + ""), e != null && (i = e(i)), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function dv(t) {
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var c = e[s], u = n[s], p = c.length, h = o[s] = new Array(p), m, l = 0; l < p; ++l)
      (m = c[l] || u[l]) && (h[l] = m);
  for (; s < r; ++s)
    o[s] = e[s];
  return new Bt(o, this._parents);
}
function pv() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function gv(t) {
  t || (t = mv);
  function e(h, m) {
    return h && m ? t(h.__data__, m.__data__) : !h - !m;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = n[a], s = o.length, c = i[a] = new Array(s), u, p = 0; p < s; ++p)
      (u = o[p]) && (c[p] = u);
    c.sort(e);
  }
  return new Bt(i, this._parents).order();
}
function mv(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function yv() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function vv() {
  var t = new Array(this.size()), e = -1;
  return this.each(function() {
    t[++e] = this;
  }), t;
}
function _v() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o)
        return o;
    }
  return null;
}
function wv() {
  var t = 0;
  return this.each(function() {
    ++t;
  }), t;
}
function xv() {
  return !this.node();
}
function bv(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Sv(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Cv(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Mv(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Ov(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function $v(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Av(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Pv(t, e) {
  var n = Fr(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Cv : Sv : typeof e == "function" ? n.local ? Av : $v : n.local ? Ov : Mv)(n, e));
}
function cc(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ev(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Tv(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Iv(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function kv(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Ev : typeof e == "function" ? Iv : Tv)(t, e, n ?? "")) : Mn(this.node(), t);
}
function Mn(t, e) {
  return t.style.getPropertyValue(e) || cc(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Dv(t) {
  return function() {
    delete this[t];
  };
}
function Nv(t, e) {
  return function() {
    this[t] = e;
  };
}
function Rv(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function zv(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Dv : typeof e == "function" ? Rv : Nv)(t, e)) : this.node()[t];
}
function uc(t) {
  return t.trim().split(/^|\s+/);
}
function ja(t) {
  return t.classList || new lc(t);
}
function lc(t) {
  this._node = t, this._names = uc(t.getAttribute("class") || "");
}
lc.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function fc(t, e) {
  for (var n = ja(t), r = -1, i = e.length; ++r < i; )
    n.add(e[r]);
}
function hc(t, e) {
  for (var n = ja(t), r = -1, i = e.length; ++r < i; )
    n.remove(e[r]);
}
function Fv(t) {
  return function() {
    fc(this, t);
  };
}
function Lv(t) {
  return function() {
    hc(this, t);
  };
}
function Bv(t, e) {
  return function() {
    (e.apply(this, arguments) ? fc : hc)(this, t);
  };
}
function Hv(t, e) {
  var n = uc(t + "");
  if (arguments.length < 2) {
    for (var r = ja(this.node()), i = -1, a = n.length; ++i < a; )
      if (!r.contains(n[i]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Bv : e ? Fv : Lv)(n, e));
}
function jv() {
  this.textContent = "";
}
function Vv(t) {
  return function() {
    this.textContent = t;
  };
}
function qv(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Wv(t) {
  return arguments.length ? this.each(t == null ? jv : (typeof t == "function" ? qv : Vv)(t)) : this.node().textContent;
}
function Uv() {
  this.innerHTML = "";
}
function Gv(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Yv(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Xv(t) {
  return arguments.length ? this.each(t == null ? Uv : (typeof t == "function" ? Yv : Gv)(t)) : this.node().innerHTML;
}
function Qv() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Jv() {
  return this.each(Qv);
}
function Kv() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Zv() {
  return this.each(Kv);
}
function t1(t) {
  var e = typeof t == "function" ? t : ic(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function e1() {
  return null;
}
function n1(t, e) {
  var n = typeof t == "function" ? t : ic(t), r = e == null ? e1 : typeof e == "function" ? e : Ha(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function r1() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function i1() {
  return this.each(r1);
}
function a1() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function o1() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function s1(t) {
  return this.select(t ? o1 : a1);
}
function c1(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
var dc = {};
if (typeof document < "u") {
  var u1 = document.documentElement;
  "onmouseenter" in u1 || (dc = { mouseenter: "mouseover", mouseleave: "mouseout" });
}
function l1(t, e, n) {
  return t = pc(t, e, n), function(r) {
    var i = r.relatedTarget;
    (!i || i !== this && !(i.compareDocumentPosition(this) & 8)) && t.call(this, r);
  };
}
function pc(t, e, n) {
  return function(r) {
    try {
      t.call(this, this.__data__, e, n);
    } finally {
    }
  };
}
function f1(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function h1(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, a; n < i; ++n)
        a = e[n], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.capture) : e[++r] = a;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function d1(t, e, n) {
  var r = dc.hasOwnProperty(t.type) ? l1 : pc;
  return function(i, a, o) {
    var s = this.__on, c, u = r(e, a, o);
    if (s) {
      for (var p = 0, h = s.length; p < h; ++p)
        if ((c = s[p]).type === t.type && c.name === t.name) {
          this.removeEventListener(c.type, c.listener, c.capture), this.addEventListener(c.type, c.listener = u, c.capture = n), c.value = e;
          return;
        }
    }
    this.addEventListener(t.type, u, n), c = { type: t.type, name: t.name, value: e, listener: u, capture: n }, s ? s.push(c) : this.__on = [c];
  };
}
function p1(t, e, n) {
  var r = f1(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var c = 0, u = s.length, p; c < u; ++c)
        for (i = 0, p = s[c]; i < a; ++i)
          if ((o = r[i]).type === p.type && o.name === p.name)
            return p.value;
    }
    return;
  }
  for (s = e ? d1 : h1, n == null && (n = !1), i = 0; i < a; ++i)
    this.each(s(r[i], e, n));
  return this;
}
function gc(t, e, n) {
  var r = cc(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function g1(t, e) {
  return function() {
    return gc(this, t, e);
  };
}
function m1(t, e) {
  return function() {
    return gc(this, t, e.apply(this, arguments));
  };
}
function y1(t, e) {
  return this.each((typeof e == "function" ? m1 : g1)(t, e));
}
var Va = [null];
function Bt(t, e) {
  this._groups = t, this._parents = e;
}
function Tn() {
  return new Bt([[document.documentElement]], Va);
}
Bt.prototype = Tn.prototype = {
  constructor: Bt,
  select: nv,
  selectAll: iv,
  filter: av,
  data: lv,
  enter: ov,
  exit: fv,
  join: hv,
  merge: dv,
  order: pv,
  sort: gv,
  call: yv,
  nodes: vv,
  node: _v,
  size: wv,
  empty: xv,
  each: bv,
  attr: Pv,
  style: kv,
  property: zv,
  classed: Hv,
  text: Wv,
  html: Xv,
  raise: Jv,
  lower: Zv,
  append: t1,
  insert: n1,
  remove: i1,
  clone: s1,
  datum: c1,
  on: p1,
  dispatch: y1
};
function cn(t) {
  return typeof t == "string" ? new Bt([[document.querySelector(t)]], [document.documentElement]) : new Bt([[t]], Va);
}
function Lr(t) {
  return typeof t == "string" ? new Bt([document.querySelectorAll(t)], [document.documentElement]) : new Bt([t ?? []], Va);
}
function Br(t) {
  return +t;
}
function Hr(t) {
  return t * t;
}
function jr(t) {
  return t * (2 - t);
}
function ze(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}
function Vr(t) {
  return t * t * t;
}
function qr(t) {
  return --t * t * t + 1;
}
function Ae(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var qa = 3, Wr = function t(e) {
  e = +e;
  function n(r) {
    return Math.pow(r, e);
  }
  return n.exponent = t, n;
}(qa), Ur = function t(e) {
  e = +e;
  function n(r) {
    return 1 - Math.pow(1 - r, e);
  }
  return n.exponent = t, n;
}(qa), Fe = function t(e) {
  e = +e;
  function n(r) {
    return ((r *= 2) <= 1 ? Math.pow(r, e) : 2 - Math.pow(2 - r, e)) / 2;
  }
  return n.exponent = t, n;
}(qa), mc = Math.PI, yc = mc / 2;
function Gr(t) {
  return +t == 1 ? 1 : 1 - Math.cos(t * yc);
}
function Yr(t) {
  return Math.sin(t * yc);
}
function Le(t) {
  return (1 - Math.cos(mc * t)) / 2;
}
function Be(t) {
  return (Math.pow(2, -10 * t) - 9765625e-10) * 1.0009775171065494;
}
function Xr(t) {
  return Be(1 - +t);
}
function Qr(t) {
  return 1 - Be(t);
}
function He(t) {
  return ((t *= 2) <= 1 ? Be(1 - t) : 2 - Be(t - 1)) / 2;
}
function Jr(t) {
  return 1 - Math.sqrt(1 - t * t);
}
function Kr(t) {
  return Math.sqrt(1 - --t * t);
}
function je(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}
var ga = 4 / 11, v1 = 6 / 11, _1 = 8 / 11, w1 = 3 / 4, x1 = 9 / 11, b1 = 10 / 11, S1 = 15 / 16, C1 = 21 / 22, M1 = 63 / 64, cr = 1 / ga / ga;
function Zr(t) {
  return 1 - ae(1 - t);
}
function ae(t) {
  return (t = +t) < ga ? cr * t * t : t < _1 ? cr * (t -= v1) * t + w1 : t < b1 ? cr * (t -= x1) * t + S1 : cr * (t -= C1) * t + M1;
}
function ti(t) {
  return ((t *= 2) <= 1 ? 1 - ae(1 - t) : ae(t - 1) + 1) / 2;
}
var Wa = 1.70158, ei = function t(e) {
  e = +e;
  function n(r) {
    return (r = +r) * r * (e * (r - 1) + r);
  }
  return n.overshoot = t, n;
}(Wa), an = function t(e) {
  e = +e;
  function n(r) {
    return --r * r * ((r + 1) * e + r) + 1;
  }
  return n.overshoot = t, n;
}(Wa), Ve = function t(e) {
  e = +e;
  function n(r) {
    return ((r *= 2) < 1 ? r * r * ((e + 1) * r - e) : (r -= 2) * r * ((e + 1) * r + e) + 2) / 2;
  }
  return n.overshoot = t, n;
}(Wa), On = 2 * Math.PI, Ua = 1, Ga = 0.3, ni = function t(e, n) {
  var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= On);
  function i(a) {
    return e * Be(- --a) * Math.sin((r - a) / n);
  }
  return i.amplitude = function(a) {
    return t(a, n * On);
  }, i.period = function(a) {
    return t(e, a);
  }, i;
}(Ua, Ga), qe = function t(e, n) {
  var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= On);
  function i(a) {
    return 1 - e * Be(a = +a) * Math.sin((a + r) / n);
  }
  return i.amplitude = function(a) {
    return t(a, n * On);
  }, i.period = function(a) {
    return t(e, a);
  }, i;
}(Ua, Ga), ri = function t(e, n) {
  var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= On);
  function i(a) {
    return ((a = a * 2 - 1) < 0 ? e * Be(-a) * Math.sin((r - a) / n) : 2 - e * Be(a) * Math.sin((r + a) / n)) / 2;
  }
  return i.amplitude = function(a) {
    return t(a, n * On);
  }, i.period = function(a) {
    return t(e, a);
  }, i;
}(Ua, Ga);
const O1 = {
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
    loadVizz: function(t, e, n, r = { center: "#222" }) {
      function i(v, _, y, f, d) {
        return (v - _) * (d - f) / (y - _) + f;
      }
      function a(v, _) {
        return [Math.cos(v) * _, Math.sin(v) * _];
      }
      function o(v, _) {
        let y = s(v, _);
        return `translate(${y[0]},${y[1]})`;
      }
      function s(v, _) {
        let y = i(_, 0, c.length, 0, Math.PI * 2), f = a(y, v.related ? 100 : 75);
        return [f[0] + p / 2, f[1] + h / 2];
      }
      r = {
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
      let c = [], u = cn(this.$el);
      u.selectAll("*").remove();
      let p = +u.node().getBoundingClientRect().width, h = +u.node().getBoundingClientRect().height;
      function m(v, _) {
        for (let y = 0; y < v.length; y++) {
          let f = { name: v[y].name, related: !1, intensity: 0 };
          for (let d = 0; d < _.topics.length; d++)
            _.topics[d] == f.name && (f.related = !0);
          for (let d = 0; d < _.tags.length; d++)
            _.tags[d].topic == f.name && f.intensity++;
          f.intensity = f.intensity / _.tags.length, c.push(f);
        }
        l();
      }
      function l() {
        u.selectAll(".connection").data(c).enter().append("path").transition().duration(700).delay((y, f) => f * f + 500).ease(an).attr("d", (y, f) => {
          let d = s(y, f);
          return "M " + p / 2 + " " + h / 2 + "L " + d[0] + " " + d[1];
        }).attr("stroke-width", (y) => y.related ? "3px" : "1px").attr(
          "stroke",
          (y) => y.related && n.topics[y.name] ? n.topics[y.name].color : n.defaultColor
        );
        let v = u.selectAll(".node").data(c).enter().append("g").attr("class", "node").attr("transform", () => `translate(${p / 2},${h / 2})`);
        v.transition().duration(700).delay((y, f) => f * f).ease(an).attr("transform", o), v.append("circle").attr("class", (y) => y.related ? "related" : "").attr("r", (y) => y.related ? 15 : 10).style(
          "fill",
          (y) => y.related && n.topics[y.name] ? n.topics[y.name].color : n.defaultColor
        ), v.append("path").attr(
          "d",
          d3.arc().innerRadius((y) => y.related ? 20 : 15).outerRadius((y) => y.related ? 25 : 20).startAngle(0).endAngle((y) => Math.PI * 2 * y.intensity)
        ).attr("class", (y) => y.related ? "related" : "").style(
          "fill",
          (y) => y.related && n.topics[y.name] ? n.topics[y.name].color : n.defaultColor
        ), v.append("text").attr("class", "label_name").attr("text-anchor", "middle").attr("alignment-baseline", "central").text((y) => y.related ? y.name.split("-")[0].trim() : ""), u.append("g").attr("class", "center").attr("transform", `translate(${p / 2},${h / 2})`).append("circle").attr("r", 5).attr("fill", r.center).transition().duration(700).ease(an).attr("r", 20);
      }
      m(t, e);
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
}, $1 = {
  key: 0,
  style: { width: "100%", height: "200px" }
};
function A1(t, e, n, r, i, a) {
  return n.topics ? (E(), R("svg", $1)) : at("", !0);
}
const P1 = /* @__PURE__ */ pt(O1, [["render", A1]]), E1 = {
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
    getIcon: function(t) {
      return this.topicsStyles.hasOwnProperty(t.name) && this.topicsStyles[t.name].image ? this.topicsStyles[t.name].image : this.topic.icon;
    },
    getColor: function(t) {
      return this.topicsStyles.hasOwnProperty(t.name) && this.topicsStyles[t.name].color ? this.topicsStyles[t.name].color : "#000";
    }
  }
}, T1 = { class: "o-container" }, I1 = { class: "o-grid o-grid--reverse" }, k1 = { class: "o-grid__col u-12 u-3@sm u-offset-1@sm" }, D1 = ["src", "alt"], N1 = { class: "o-grid__col u-12 u-8@sm" }, R1 = { class: "c-topic-card__title" }, z1 = { class: "c-topic-card__description" };
function F1(t, e, n, r, i, a) {
  return E(), R("div", {
    style: ie(`background-color: ${a.getColor(n.topic)}`),
    class: "c-topic-card"
  }, [
    k("div", T1, [
      k("div", I1, [
        k("div", k1, [
          k("img", {
            src: `/img/topics/${a.getIcon(n.topic)}`,
            alt: `Imagen de ${n.topic.name}`,
            class: "c-topic-card__image"
          }, null, 8, D1)
        ]),
        k("div", N1, [
          k("h1", R1, tt(n.topic.name), 1),
          k("div", z1, [
            (E(!0), R(te, null, ee(n.topic.description, (o) => (E(), R("p", { key: o }, tt(o), 1))), 128))
          ])
        ])
      ])
    ])
  ], 4);
}
const L1 = /* @__PURE__ */ pt(E1, [["render", F1]]), B1 = {
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
}, H1 = { class: "c-topic-link" }, j1 = ["src", "alt"], V1 = { class: "c-topic-link__name" };
function q1(t, e, n, r, i, a) {
  const o = _t("router-link");
  return E(), R("div", null, [
    k("div", H1, [
      vt(o, {
        to: { name: "topic", params: { id: n.topic.id } },
        class: "c-topic-link__image-link",
        style: ie(`background-color: ${n.color}`)
      }, {
        default: Lt(() => [
          k("img", {
            src: a.topicImage,
            alt: `Imagen de ${n.topic.name}`,
            class: "c-topic-link__image"
          }, null, 8, j1)
        ]),
        _: 1
      }, 8, ["to", "style"]),
      k("h4", V1, [
        vt(o, {
          to: { name: "topic", params: { id: n.topic.id } }
        }, {
          default: Lt(() => [
            wt(tt(n.topic.name), 1)
          ]),
          _: 1
        }, 8, ["to"])
      ])
    ])
  ]);
}
const W1 = /* @__PURE__ */ pt(B1, [["render", q1]]);
const U1 = {
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
      let t = 2e3, e = cn(this.$el);
      e.selectAll("*").remove();
      let n = +e.node().getBoundingClientRect().width, r = 150, i = 5, a = this.$props.styles, o = this.$props.topic, s = [this.$props.selection.selected], c = this.$props.selection.compareswith._id, u = this.$props.selection.compareswith.initiatives, p = a.topics[o] ? a.topics[o].color : a.defaultColor, h = a.topics[c] ? a.topics[c].color : p, m = e.selectAll(".node").data(s).enter().append("g").attr("class", "node").attr("transform", "translate(" + n / 2 + "," + r + ")");
      m.append("circle").attr("class", "compared").attr("r", r).attr("fill", h), m.append("circle").attr("fill", function(_) {
        return v();
      }).attr("r", 0).transition().duration(t).attr("r", function(_) {
        let y = Math.round(_.initiatives * r / u);
        return _.initiatives === 0 ? 0 : y > i ? y : i;
      });
      let l = e.selectAll(".legend").data(s).enter().append("g").attr("class", "legend");
      l.append("rect").attr("width", r * 2).attr("height", 10).attr("fill", function(_) {
        return v();
      }).attr("transform", "translate(0," + (r * 2 + 50) + ")"), l.append("text").attr("x", 0).attr("y", 0).style("fill", "#222").style("font-size", "13px").text(function(_) {
        return _._id;
      }).attr("text-anchor", "middle").attr("alignment-baseline", "central").attr("transform", "translate(" + n / 2 + "," + (r * 2 + 70) + ")"), l.append("rect").attr("width", r * 2).attr("height", 10).attr("class", "compared").attr("fill", h).attr("transform", "translate(0," + (r * 2 + 90) + ")"), l.append("text").attr("x", 0).attr("y", 0).style("fill", "#222").style("font-size", "13px").text(c).attr("text-anchor", "middle").attr("alignment-baseline", "central").attr("transform", "translate(" + n / 2 + "," + (r * 2 + 110) + ")");
      function v(_) {
        return a.topics[o] ? a.topics[o].color : a.defaultColor;
      }
    }
  },
  mounted: function() {
    this.loadVizz();
  },
  watch: {
    "selection.selected._id": "loadVizz"
  }
}, G1 = { style: { width: "300px", height: "500px" } };
function Y1(t, e, n, r, i, a) {
  return E(), R("svg", G1);
}
const X1 = /* @__PURE__ */ pt(U1, [["render", Y1]]), Q1 = {
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
}, J1 = {
  key: 0,
  class: "c-splash"
}, K1 = { class: "c-splash__outer" }, Z1 = { class: "c-splash__inner" };
function t_(t, e, n, r, i, a) {
  return a.closedSplash ? at("", !0) : (E(), R("div", J1, [
    k("div", K1, [
      k("div", Z1, [
        Ia(t.$slots, "default"),
        k("p", null, [
          k("a", {
            class: Ft(["c-splash__close", n.closeClass]),
            href: "#",
            onClick: e[0] || (e[0] = (...o) => a.closeSplash && a.closeSplash(...o))
          }, tt(n.closeText), 3)
        ])
      ])
    ])
  ]));
}
const e_ = /* @__PURE__ */ pt(Q1, [["render", t_]]);
const n_ = {
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
      const e = this.getTagged().tags, n = [], r = e.reduce((i, a) => i + a.times, 0);
      e.forEach((i) => {
        const a = n.map((o) => o.topic).indexOf(i.topic);
        a === -1 ? n.push({
          topic: i.topic,
          times: i.times,
          percent: Math.ceil(i.times / r * 100),
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
            width: `${i.times / r * 100}%`,
            backgroundColor: this.barColor
          }
        }) : (n[a].times += i.times, n[a].overbarStyle.width = `${n[a].times / r * 100}%`, n[a].percent = Math.ceil(n[a].times / r * 100));
      }), this.rows = this.barOrder === "alphabetically" ? n.sort((i, a) => zr(i.topic, a.topic)) : this.barOrder === "asc" ? n.sort((i, a) => i.times - a.times) : n.sort((i, a) => a.times - i.times);
    },
    getTagged() {
      return this.result.tagged.filter((t) => t.knowledgebase == this.knowledgebase).pop();
    }
  }
}, r_ = { class: "tipichart__tip" }, i_ = { class: "tipichart__bar" };
function a_(t, e, n, r, i, a) {
  return E(), Ct(Gu, {
    tag: "div",
    class: "tipichart",
    name: "barfade"
  }, {
    default: Lt(() => [
      (E(!0), R(te, null, ee(i.rows, (o) => (E(), R("div", {
        class: "tipichart__row",
        key: o.topic,
        style: ie(a.rowStyle)
      }, [
        k("div", {
          class: "tipichart__tooltip",
          style: ie({ bottom: `${n.barHeight}px` })
        }, [
          k("div", r_, tt(o.topic) + " " + tt(o.percent) + "%", 1)
        ], 4),
        k("div", {
          class: "tipichart__icon",
          style: ie(o.iconStyle)
        }, null, 4),
        k("div", i_, [
          k("div", {
            class: "tipichart__backbar",
            style: ie(o.backbarStyle)
          }, null, 4),
          k("div", {
            class: "tipichart__overbar",
            style: ie(o.overbarStyle)
          }, null, 4)
        ])
      ], 4))), 128))
    ]),
    _: 1
  });
}
const o_ = /* @__PURE__ */ pt(n_, [["render", a_]]);
var vc = {};
(function(t) {
  (function() {
    var e = t || !1 || this || window;
    e.default = e;
    var n = "http://www.w3.org/2000/xmlns/", r = "http://www.w3.org/1999/xhtml", i = "http://www.w3.org/2000/svg", a = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" [<!ENTITY nbsp "&#160;">]>', o = /url\(["']?(.+?)["']?\)/, s = {
      woff2: "font/woff2",
      woff: "font/woff",
      otf: "application/x-font-opentype",
      ttf: "application/x-font-ttf",
      eot: "application/vnd.ms-fontobject",
      sfnt: "application/font-sfnt",
      svg: "image/svg+xml"
    }, c = function(S) {
      return S instanceof HTMLElement || S instanceof SVGElement;
    }, u = function(S) {
      if (!c(S))
        throw new Error("an HTMLElement or SVGElement is required; got " + S);
    }, p = function(S) {
      return new Promise(function(C, P) {
        c(S) ? C(S) : P(new Error("an HTMLElement or SVGElement is required; got " + S));
      });
    }, h = function(S) {
      return S && S.lastIndexOf("http", 0) === 0 && S.lastIndexOf(window.location.host) === -1;
    }, m = function(S) {
      var C = Object.keys(s).filter(function(P) {
        return S.indexOf("." + P) > 0;
      }).map(function(P) {
        return s[P];
      });
      return C ? C[0] : (console.error("Unknown font format for " + S + ". Fonts may not be working correctly."), "application/octet-stream");
    }, l = function(S) {
      for (var C = "", P = new Uint8Array(S), B = 0; B < P.byteLength; B++)
        C += String.fromCharCode(P[B]);
      return window.btoa(C);
    }, v = function(S, C, P) {
      var B = S.viewBox && S.viewBox.baseVal && S.viewBox.baseVal[P] || C.getAttribute(P) !== null && !C.getAttribute(P).match(/%$/) && parseInt(C.getAttribute(P)) || S.getBoundingClientRect()[P] || parseInt(C.style[P]) || parseInt(window.getComputedStyle(S).getPropertyValue(P));
      return typeof B > "u" || B === null || isNaN(parseFloat(B)) ? 0 : B;
    }, _ = function(S, C, P, B) {
      if (S.tagName === "svg")
        return {
          width: P || v(S, C, "width"),
          height: B || v(S, C, "height")
        };
      if (S.getBBox) {
        var V = S.getBBox(), G = V.x, K = V.y, et = V.width, Q = V.height;
        return {
          width: G + et,
          height: K + Q
        };
      }
    }, y = function(S) {
      return decodeURIComponent(encodeURIComponent(S).replace(/%([0-9A-F]{2})/g, function(C, P) {
        var B = String.fromCharCode("0x" + P);
        return B === "%" ? "%25" : B;
      }));
    }, f = function(S) {
      for (var C = window.atob(S.split(",")[1]), P = S.split(",")[0].split(":")[1].split(";")[0], B = new ArrayBuffer(C.length), V = new Uint8Array(B), G = 0; G < C.length; G++)
        V[G] = C.charCodeAt(G);
      return new Blob([B], { type: P });
    }, d = function(S, C) {
      if (C)
        try {
          return S.querySelector(C) || S.parentNode && S.parentNode.querySelector(C);
        } catch (P) {
          console.warn('Invalid CSS selector "' + C + '"', P);
        }
    }, w = function(S, C) {
      var P = S.cssText.match(o), B = P && P[1] || "";
      if (!(!B || B.match(/^data:/) || B === "about:blank")) {
        var V = B.startsWith("../") ? C + "/../" + B : B.startsWith("./") ? C + "/." + B : B;
        return {
          text: S.cssText,
          format: m(V),
          url: V
        };
      }
    }, A = function(S) {
      return Promise.all(Array.from(S.querySelectorAll("image")).map(function(C) {
        var P = C.getAttributeNS("http://www.w3.org/1999/xlink", "href") || C.getAttribute("href");
        return P ? (h(P) && (P += (P.indexOf("?") === -1 ? "?" : "&") + "t=" + (/* @__PURE__ */ new Date()).valueOf()), new Promise(function(B, V) {
          var G = document.createElement("canvas"), K = new Image();
          K.crossOrigin = "anonymous", K.src = P, K.onerror = function() {
            return V(new Error("Could not load " + P));
          }, K.onload = function() {
            G.width = K.width, G.height = K.height, G.getContext("2d").drawImage(K, 0, 0), C.setAttributeNS("http://www.w3.org/1999/xlink", "href", G.toDataURL("image/png")), B(!0);
          };
        })) : Promise.resolve(null);
      }));
    }, I = {}, H = function(S) {
      return Promise.all(S.map(function(C) {
        return new Promise(function(P, B) {
          if (I[C.url])
            return P(I[C.url]);
          var V = new XMLHttpRequest();
          V.addEventListener("load", function() {
            var G = l(V.response), K = C.text.replace(o, 'url("data:' + C.format + ";base64," + G + '")') + `
`;
            I[C.url] = K, P(K);
          }), V.addEventListener("error", function(G) {
            console.warn("Failed to load font from: " + C.url, G), I[C.url] = null, P(null);
          }), V.addEventListener("abort", function(G) {
            console.warn("Aborted loading font from: " + C.url, G), P(null);
          }), V.open("GET", C.url), V.responseType = "arraybuffer", V.send();
        });
      })).then(function(C) {
        return C.filter(function(P) {
          return P;
        }).join("");
      });
    }, q = null, j = function() {
      return q || (q = Array.from(document.styleSheets).map(function(S) {
        try {
          return { rules: S.cssRules, href: S.href };
        } catch (C) {
          return console.warn("Stylesheet could not be loaded: " + S.href, C), {};
        }
      }));
    }, z = function(S, C) {
      var P = C || {}, B = P.selectorRemap, V = P.modifyStyle, G = P.modifyCss, K = P.fonts, et = P.excludeUnusedCss, Q = G || function(Z, ut) {
        var ct = B ? B(Z) : Z, J = V ? V(ut) : ut;
        return ct + "{" + J + `}
`;
      }, lt = [], st = typeof K > "u", nt = K || [];
      return j().forEach(function(Z) {
        var ut = Z.rules, ct = Z.href;
        ut && Array.from(ut).forEach(function(J) {
          if (typeof J.style < "u")
            if (d(S, J.selectorText))
              lt.push(Q(J.selectorText, J.style.cssText));
            else if (st && J.cssText.match(/^@font-face/)) {
              var ft = w(J, ct);
              ft && nt.push(ft);
            } else
              et || lt.push(J.cssText);
        });
      }), H(nt).then(function(Z) {
        return lt.join(`
`) + Z;
      });
    }, L = function() {
      if (!navigator.msSaveOrOpenBlob && !("download" in document.createElement("a")))
        return { popup: window.open() };
    };
    e.prepareSvg = function(b, S, C) {
      u(b);
      var P = S || {}, B = P.left, V = B === void 0 ? 0 : B, G = P.top, K = G === void 0 ? 0 : G, et = P.width, Q = P.height, lt = P.scale, st = lt === void 0 ? 1 : lt, nt = P.responsive, Z = nt === void 0 ? !1 : nt, ut = P.excludeCss, ct = ut === void 0 ? !1 : ut;
      return A(b).then(function() {
        var J = b.cloneNode(!0);
        J.style.backgroundColor = (S || {}).backgroundColor || b.style.backgroundColor;
        var ft = _(b, J, et, Q), ht = ft.width, yt = ft.height;
        if (b.tagName !== "svg")
          if (b.getBBox) {
            J.getAttribute("transform") != null && J.setAttribute("transform", J.getAttribute("transform").replace(/translate\(.*?\)/, ""));
            var Mt = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            Mt.appendChild(J), J = Mt;
          } else {
            console.error("Attempted to render non-SVG element", b);
            return;
          }
        if (J.setAttribute("version", "1.1"), J.setAttribute("viewBox", [V, K, ht, yt].join(" ")), J.getAttribute("xmlns") || J.setAttributeNS(n, "xmlns", i), J.getAttribute("xmlns:xlink") || J.setAttributeNS(n, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Z ? (J.removeAttribute("width"), J.removeAttribute("height"), J.setAttribute("preserveAspectRatio", "xMinYMin meet")) : (J.setAttribute("width", ht * st), J.setAttribute("height", yt * st)), Array.from(J.querySelectorAll("foreignObject > *")).forEach(function($t) {
          $t.setAttributeNS(n, "xmlns", $t.tagName === "svg" ? i : r);
        }), ct) {
          var ce = document.createElement("div");
          ce.appendChild(J);
          var ue = ce.innerHTML;
          if (typeof C == "function")
            C(ue, ht, yt);
          else
            return { src: ue, width: ht, height: yt };
        } else
          return z(b, S).then(function($t) {
            var kt = document.createElement("style");
            kt.setAttribute("type", "text/css"), kt.innerHTML = `<![CDATA[
` + $t + `
]]>`;
            var Yt = document.createElement("defs");
            Yt.appendChild(kt), J.insertBefore(Yt, J.firstChild);
            var Ht = document.createElement("div");
            Ht.appendChild(J);
            var qt = Ht.innerHTML.replace(/NS\d+:href/gi, 'xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href');
            if (typeof C == "function")
              C(qt, ht, yt);
            else
              return { src: qt, width: ht, height: yt };
          });
      });
    }, e.svgAsDataUri = function(b, S, C) {
      return u(b), e.prepareSvg(b, S).then(function(P) {
        var B = P.src, V = P.width, G = P.height, K = "data:image/svg+xml;base64," + window.btoa(y(a + B));
        return typeof C == "function" && C(K, V, G), K;
      });
    }, e.svgAsPngUri = function(b, S, C) {
      u(b);
      var P = S || {}, B = P.encoderType, V = B === void 0 ? "image/png" : B, G = P.encoderOptions, K = G === void 0 ? 0.8 : G, et = P.canvg, Q = function(st) {
        var nt = st.src, Z = st.width, ut = st.height, ct = document.createElement("canvas"), J = ct.getContext("2d"), ft = window.devicePixelRatio || 1;
        ct.width = Z * ft, ct.height = ut * ft, ct.style.width = ct.width + "px", ct.style.height = ct.height + "px", J.setTransform(ft, 0, 0, ft, 0, 0), et ? et(ct, nt) : J.drawImage(nt, 0, 0);
        var ht = void 0;
        try {
          ht = ct.toDataURL(V, K);
        } catch (yt) {
          if (typeof SecurityError < "u" && yt instanceof SecurityError || yt.name === "SecurityError") {
            console.error("Rendered SVG images cannot be downloaded in this browser.");
            return;
          } else
            throw yt;
        }
        return typeof C == "function" && C(ht, ct.width, ct.height), Promise.resolve(ht);
      };
      return et ? e.prepareSvg(b, S).then(Q) : e.svgAsDataUri(b, S).then(function(lt) {
        return new Promise(function(st, nt) {
          var Z = new Image();
          Z.onload = function() {
            return st(Q({
              src: Z,
              width: Z.width,
              height: Z.height
            }));
          }, Z.onerror = function() {
            nt(`There was an error loading the data URI as an image on the following SVG
` + window.atob(lt.slice(26)) + `Open the following link to see browser's diagnosis
` + lt);
          }, Z.src = lt;
        });
      });
    }, e.download = function(b, S, C) {
      if (navigator.msSaveOrOpenBlob)
        navigator.msSaveOrOpenBlob(f(S), b);
      else {
        var P = document.createElement("a");
        if ("download" in P) {
          P.download = b, P.style.display = "none", document.body.appendChild(P);
          try {
            var B = f(S), V = URL.createObjectURL(B);
            P.href = V, P.onclick = function() {
              return requestAnimationFrame(function() {
                return URL.revokeObjectURL(V);
              });
            };
          } catch (G) {
            console.error(G), console.warn("Error while getting object URL. Falling back to string URL."), P.href = S;
          }
          P.click(), document.body.removeChild(P);
        } else
          C && C.popup && (C.popup.document.title = b, C.popup.location.replace(S));
      }
    }, e.saveSvg = function(b, S, C) {
      var P = L();
      return p(b).then(function(B) {
        return e.svgAsDataUri(B, C || {});
      }).then(function(B) {
        return e.download(S, B, P);
      });
    }, e.saveSvgAsPng = function(b, S, C) {
      var P = L();
      return p(b).then(function(B) {
        return e.svgAsPngUri(B, C || {});
      }).then(function(B) {
        return e.download(S, B, P);
      });
    };
  })();
})(vc);
const s_ = {
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
      const t = this.$refs.chart.getElementsByClassName("chart")[0];
      vc.saveSvgAsPng(t, "chart.png", {
        backgroundColor: "#FFF"
      });
    }
  },
  watch: {
    config: {
      handler(t) {
        this.chart.updateConfig(t);
      },
      deep: !0
    },
    datum(t) {
      this.chart.updateData([...t]);
    },
    height(t) {
      setTimeout(() => {
        this.chart.resizeChart();
      }, 10);
    }
  },
  beforeDestroy() {
    this.chart.destroyChart();
  }
}, c_ = { class: "chart__wrapper" }, u_ = {
  key: 0,
  class: "chart__title"
}, l_ = {
  key: 1,
  class: "chart__source"
}, f_ = {
  key: 2,
  class: "chart__source"
};
function h_(t, e, n, r, i, a) {
  return E(), R("div", c_, [
    n.title ? (E(), R("div", u_, tt(n.title), 1)) : at("", !0),
    k("div", {
      ref: "chart",
      style: ie({ height: `${this.height}px` })
    }, null, 4),
    n.source ? (E(), R("div", l_, tt(n.source), 1)) : at("", !0),
    n.download ? (E(), R("div", f_, [
      k("span", {
        onClick: e[0] || (e[0] = (...o) => a.downloadSVG && a.downloadSVG(...o))
      }, tt(n.download), 1)
    ])) : at("", !0)
  ]);
}
const ii = /* @__PURE__ */ pt(s_, [["render", h_]]), d_ = { select: cn };
class ai {
  constructor(e, n, r, i) {
    this.selection = d_.select(e), this.data = n, this.cfg = i, this._setConfig(r), this.onResize = () => {
      this.resizeChart();
    }, window.addEventListener("resize", this.onResize), this.initChart();
  }
  _setConfig(e) {
    Object.keys(e).forEach((n) => {
      e[n] instanceof Object && !(e[n] instanceof Array) ? Object.keys(e[n]).forEach((r) => {
        this.cfg[n][r] = e[n][r];
      }) : this.cfg[n] = e[n];
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
  enterData(e) {
    this.data = this.data.concat(e), this.setScales(), this.updateChart();
  }
  /**
  * Update existing data elements
  */
  updateData(e) {
    this.data = [...e], this.setScales(), this.updateChart();
  }
  /**
  * Compute data before operate
  */
  computeData() {
  }
  /**
  * Remove data elements
  */
  exitData(e) {
    this.data.forEach((n, r) => {
      let i = 0;
      Object.keys(e).forEach((a) => {
        e[a] == n[a] && i++;
      }), i == Object.keys(e).length && this.data.splice(r, 1);
    }), this.setScales(), this.updateChart();
  }
  /**
  * Init chart commons elements (div > svg > g; tooltip)
  */
  initChartFrame(e = "undefined") {
    this.wrap = this.selection.append("div").attr("class", "chart__wrap chart__wrap--" + e), this.svg = this.wrap.append("svg").attr("class", "chart chart--" + e), this.g = this.svg.append("g").attr("class", "chart__margin-wrap chart__margin-wrap--" + e).attr("transform", `translate(${this.cfg.margin.left},${this.cfg.margin.top})`), this.selection.selectAll(".chart__tooltip").remove(), this.tooltip = this.wrap.append("div").attr("class", "chart__tooltip chart__tooltip--" + e);
  }
  /**
  * Compute element color
  */
  colorElement(e, n = void 0) {
    if (n = n || this.cfg.key, this.cfg.color.key)
      return e[this.cfg.color.key];
    let r = this.cfg.currentKey ? this.cfg.color.default : this.cfg.color.current;
    return this.cfg.color.scheme && (r = this.colorScale(e[n])), this.cfg.color.keys && this.cfg.color.keys instanceof Object && !(this.cfg.color.keys instanceof Array) && (typeof this.cfg.color.keys[n] == "string" ? r = this.cfg.color.keys[n] : typeof this.cfg.color.keys[e[n]] == "string" && (r = this.cfg.color.keys[e[n]])), this.cfg.currentKey && e[this.cfg.key] === this.cfg.currentKey && (r = this.cfg.color.current), r;
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
  updateConfig(e) {
    this._setConfig(e), this.resizeChart();
  }
  /**
  * Destroy chart methods
  */
  destroyChart() {
    window.removeEventListener("resize", this.onResize);
  }
}
function _c(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function p_(t) {
  return t.length === 1 && (t = g_(t)), {
    left: function(e, n, r, i) {
      for (r == null && (r = 0), i == null && (i = e.length); r < i; ) {
        var a = r + i >>> 1;
        t(e[a], n) < 0 ? r = a + 1 : i = a;
      }
      return r;
    },
    right: function(e, n, r, i) {
      for (r == null && (r = 0), i == null && (i = e.length); r < i; ) {
        var a = r + i >>> 1;
        t(e[a], n) > 0 ? i = a : r = a + 1;
      }
      return r;
    }
  };
}
function g_(t) {
  return function(e, n) {
    return _c(t(e), n);
  };
}
var m_ = p_(_c), y_ = m_.right;
function v_(t, e) {
  var n = t.length, r = -1, i, a, o;
  if (e == null) {
    for (; ++r < n; )
      if ((i = t[r]) != null && i >= i)
        for (a = o = i; ++r < n; )
          (i = t[r]) != null && (a > i && (a = i), o < i && (o = i));
  } else
    for (; ++r < n; )
      if ((i = e(t[r], r, t)) != null && i >= i)
        for (a = o = i; ++r < n; )
          (i = e(t[r], r, t)) != null && (a > i && (a = i), o < i && (o = i));
  return [a, o];
}
function __(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * n;
  return a;
}
var ma = Math.sqrt(50), ya = Math.sqrt(10), va = Math.sqrt(2);
function w_(t, e, n) {
  var r, i = -1, a, o, s;
  if (e = +e, t = +t, n = +n, t === e && n > 0)
    return [t];
  if ((r = e < t) && (a = t, t = e, e = a), (s = gr(t, e, n)) === 0 || !isFinite(s))
    return [];
  if (s > 0)
    for (t = Math.ceil(t / s), e = Math.floor(e / s), o = new Array(a = Math.ceil(e - t + 1)); ++i < a; )
      o[i] = (t + i) * s;
  else
    for (t = Math.floor(t * s), e = Math.ceil(e * s), o = new Array(a = Math.ceil(t - e + 1)); ++i < a; )
      o[i] = (t - i) / s;
  return r && o.reverse(), o;
}
function gr(t, e, n) {
  var r = (e - t) / Math.max(0, n), i = Math.floor(Math.log(r) / Math.LN10), a = r / Math.pow(10, i);
  return i >= 0 ? (a >= ma ? 10 : a >= ya ? 5 : a >= va ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (a >= ma ? 10 : a >= ya ? 5 : a >= va ? 2 : 1);
}
function x_(t, e, n) {
  var r = Math.abs(e - t) / Math.max(0, n), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), a = r / i;
  return a >= ma ? i *= 10 : a >= ya ? i *= 5 : a >= va && (i *= 2), e < t ? -i : i;
}
function Ya(t, e) {
  var n = t.length, r = -1, i, a;
  if (e == null) {
    for (; ++r < n; )
      if ((i = t[r]) != null && i >= i)
        for (a = i; ++r < n; )
          (i = t[r]) != null && i > a && (a = i);
  } else
    for (; ++r < n; )
      if ((i = e(t[r], r, t)) != null && i >= i)
        for (a = i; ++r < n; )
          (i = e(t[r], r, t)) != null && i > a && (a = i);
  return a;
}
function wc(t, e) {
  var n = t.length, r = -1, i, a;
  if (e == null) {
    for (; ++r < n; )
      if ((i = t[r]) != null && i >= i)
        for (a = i; ++r < n; )
          (i = t[r]) != null && a > i && (a = i);
  } else
    for (; ++r < n; )
      if ((i = e(t[r], r, t)) != null && i >= i)
        for (a = i; ++r < n; )
          (i = e(t[r], r, t)) != null && a > i && (a = i);
  return a;
}
function b_(t, e) {
  var n = t.length, r = -1, i, a = 0;
  if (e == null)
    for (; ++r < n; )
      (i = +t[r]) && (a += i);
  else
    for (; ++r < n; )
      (i = +e(t[r], r, t)) && (a += i);
  return a;
}
function oi(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
var Zt = "$";
function Or() {
}
Or.prototype = $r.prototype = {
  constructor: Or,
  has: function(t) {
    return Zt + t in this;
  },
  get: function(t) {
    return this[Zt + t];
  },
  set: function(t, e) {
    return this[Zt + t] = e, this;
  },
  remove: function(t) {
    var e = Zt + t;
    return e in this && delete this[e];
  },
  clear: function() {
    for (var t in this)
      t[0] === Zt && delete this[t];
  },
  keys: function() {
    var t = [];
    for (var e in this)
      e[0] === Zt && t.push(e.slice(1));
    return t;
  },
  values: function() {
    var t = [];
    for (var e in this)
      e[0] === Zt && t.push(this[e]);
    return t;
  },
  entries: function() {
    var t = [];
    for (var e in this)
      e[0] === Zt && t.push({ key: e.slice(1), value: this[e] });
    return t;
  },
  size: function() {
    var t = 0;
    for (var e in this)
      e[0] === Zt && ++t;
    return t;
  },
  empty: function() {
    for (var t in this)
      if (t[0] === Zt)
        return !1;
    return !0;
  },
  each: function(t) {
    for (var e in this)
      e[0] === Zt && t(this[e], e.slice(1), this);
  }
};
function $r(t, e) {
  var n = new Or();
  if (t instanceof Or)
    t.each(function(s, c) {
      n.set(c, s);
    });
  else if (Array.isArray(t)) {
    var r = -1, i = t.length, a;
    if (e == null)
      for (; ++r < i; )
        n.set(r, t[r]);
    else
      for (; ++r < i; )
        n.set(e(a = t[r], r, t), a);
  } else if (t)
    for (var o in t)
      n.set(o, t[o]);
  return n;
}
function Zo() {
}
var Ke = $r.prototype;
Zo.prototype = {
  constructor: Zo,
  has: Ke.has,
  add: function(t) {
    return t += "", this[Zt + t] = t, this;
  },
  remove: Ke.remove,
  clear: Ke.clear,
  values: Ke.keys,
  size: Ke.size,
  empty: Ke.empty,
  each: Ke.each
};
var xc = Array.prototype, S_ = xc.map, _a = xc.slice, ts = { name: "implicit" };
function In() {
  var t = $r(), e = [], n = [], r = ts;
  function i(a) {
    var o = a + "", s = t.get(o);
    if (!s) {
      if (r !== ts)
        return r;
      t.set(o, s = e.push(a));
    }
    return n[(s - 1) % n.length];
  }
  return i.domain = function(a) {
    if (!arguments.length)
      return e.slice();
    e = [], t = $r();
    for (var o = -1, s = a.length, c, u; ++o < s; )
      t.has(u = (c = a[o]) + "") || t.set(u, e.push(c));
    return i;
  }, i.range = function(a) {
    return arguments.length ? (n = _a.call(a), i) : n.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return In(e, n).unknown(r);
  }, oi.apply(i, arguments), i;
}
function bc() {
  var t = In().unknown(void 0), e = t.domain, n = t.range, r = [0, 1], i, a, o = !1, s = 0, c = 0, u = 0.5;
  delete t.unknown;
  function p() {
    var h = e().length, m = r[1] < r[0], l = r[m - 0], v = r[1 - m];
    i = (v - l) / Math.max(1, h - s + c * 2), o && (i = Math.floor(i)), l += (v - l - i * (h - s)) * u, a = i * (1 - s), o && (l = Math.round(l), a = Math.round(a));
    var _ = __(h).map(function(y) {
      return l + i * y;
    });
    return n(m ? _.reverse() : _);
  }
  return t.domain = function(h) {
    return arguments.length ? (e(h), p()) : e();
  }, t.range = function(h) {
    return arguments.length ? (r = [+h[0], +h[1]], p()) : r.slice();
  }, t.rangeRound = function(h) {
    return r = [+h[0], +h[1]], o = !0, p();
  }, t.bandwidth = function() {
    return a;
  }, t.step = function() {
    return i;
  }, t.round = function(h) {
    return arguments.length ? (o = !!h, p()) : o;
  }, t.padding = function(h) {
    return arguments.length ? (s = Math.min(1, c = +h), p()) : s;
  }, t.paddingInner = function(h) {
    return arguments.length ? (s = Math.min(1, h), p()) : s;
  }, t.paddingOuter = function(h) {
    return arguments.length ? (c = +h, p()) : c;
  }, t.align = function(h) {
    return arguments.length ? (u = Math.max(0, Math.min(1, h)), p()) : u;
  }, t.copy = function() {
    return bc(e(), r).round(o).paddingInner(s).paddingOuter(c).align(u);
  }, oi.apply(p(), arguments);
}
function Xa(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Sc(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e)
    n[r] = e[r];
  return n;
}
function Jn() {
}
var Wn = 0.7, Ar = 1 / Wn, xn = "\\s*([+-]?\\d+)\\s*", Un = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", xe = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", C_ = /^#([0-9a-f]{3,8})$/, M_ = new RegExp("^rgb\\(" + [xn, xn, xn] + "\\)$"), O_ = new RegExp("^rgb\\(" + [xe, xe, xe] + "\\)$"), $_ = new RegExp("^rgba\\(" + [xn, xn, xn, Un] + "\\)$"), A_ = new RegExp("^rgba\\(" + [xe, xe, xe, Un] + "\\)$"), P_ = new RegExp("^hsl\\(" + [Un, xe, xe] + "\\)$"), E_ = new RegExp("^hsla\\(" + [Un, xe, xe, Un] + "\\)$"), es = {
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
Xa(Jn, on, {
  copy: function(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: ns,
  // Deprecated! Use color.formatHex.
  formatHex: ns,
  formatHsl: T_,
  formatRgb: rs,
  toString: rs
});
function ns() {
  return this.rgb().formatHex();
}
function T_() {
  return Cc(this).formatHsl();
}
function rs() {
  return this.rgb().formatRgb();
}
function on(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = C_.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? is(e) : n === 3 ? new Gt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? ur(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? ur(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = M_.exec(t)) ? new Gt(e[1], e[2], e[3], 1) : (e = O_.exec(t)) ? new Gt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = $_.exec(t)) ? ur(e[1], e[2], e[3], e[4]) : (e = A_.exec(t)) ? ur(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = P_.exec(t)) ? ss(e[1], e[2] / 100, e[3] / 100, 1) : (e = E_.exec(t)) ? ss(e[1], e[2] / 100, e[3] / 100, e[4]) : es.hasOwnProperty(t) ? is(es[t]) : t === "transparent" ? new Gt(NaN, NaN, NaN, 0) : null;
}
function is(t) {
  return new Gt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ur(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new Gt(t, e, n, r);
}
function I_(t) {
  return t instanceof Jn || (t = on(t)), t ? (t = t.rgb(), new Gt(t.r, t.g, t.b, t.opacity)) : new Gt();
}
function wa(t, e, n, r) {
  return arguments.length === 1 ? I_(t) : new Gt(t, e, n, r ?? 1);
}
function Gt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Xa(Gt, wa, Sc(Jn, {
  brighter: function(t) {
    return t = t == null ? Ar : Math.pow(Ar, t), new Gt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker: function(t) {
    return t = t == null ? Wn : Math.pow(Wn, t), new Gt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: as,
  // Deprecated! Use color.formatHex.
  formatHex: as,
  formatRgb: os,
  toString: os
}));
function as() {
  return "#" + Qi(this.r) + Qi(this.g) + Qi(this.b);
}
function os() {
  var t = this.opacity;
  return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (t === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (t === 1 ? ")" : ", " + t + ")");
}
function Qi(t) {
  return t = Math.max(0, Math.min(255, Math.round(t) || 0)), (t < 16 ? "0" : "") + t.toString(16);
}
function ss(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new _e(t, e, n, r);
}
function Cc(t) {
  if (t instanceof _e)
    return new _e(t.h, t.s, t.l, t.opacity);
  if (t instanceof Jn || (t = on(t)), !t)
    return new _e();
  if (t instanceof _e)
    return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), a = Math.max(e, n, r), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (e === a ? o = (n - r) / s + (n < r) * 6 : n === a ? o = (r - e) / s + 2 : o = (e - n) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new _e(o, s, c, t.opacity);
}
function k_(t, e, n, r) {
  return arguments.length === 1 ? Cc(t) : new _e(t, e, n, r ?? 1);
}
function _e(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Xa(_e, k_, Sc(Jn, {
  brighter: function(t) {
    return t = t == null ? Ar : Math.pow(Ar, t), new _e(this.h, this.s, this.l * t, this.opacity);
  },
  darker: function(t) {
    return t = t == null ? Wn : Math.pow(Wn, t), new _e(this.h, this.s, this.l * t, this.opacity);
  },
  rgb: function() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new Gt(
      Ji(t >= 240 ? t - 240 : t + 120, i, r),
      Ji(t, i, r),
      Ji(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl: function() {
    var t = this.opacity;
    return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (t === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (t === 1 ? ")" : ", " + t + ")");
  }
}));
function Ji(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
function Qa(t) {
  return function() {
    return t;
  };
}
function D_(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function N_(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function R_(t) {
  return (t = +t) == 1 ? Mc : function(e, n) {
    return n - e ? N_(e, n, t) : Qa(isNaN(e) ? n : e);
  };
}
function Mc(t, e) {
  var n = e - t;
  return n ? D_(t, n) : Qa(isNaN(t) ? e : t);
}
const Pr = function t(e) {
  var n = R_(e);
  function r(i, a) {
    var o = n((i = wa(i)).r, (a = wa(a)).r), s = n(i.g, a.g), c = n(i.b, a.b), u = Mc(i.opacity, a.opacity);
    return function(p) {
      return i.r = o(p), i.g = s(p), i.b = c(p), i.opacity = u(p), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function z_(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i)
      r[i] = t[i] * (1 - a) + e[i] * a;
    return r;
  };
}
function F_(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function L_(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), a = new Array(n), o;
  for (o = 0; o < r; ++o)
    i[o] = Kn(t[o], e[o]);
  for (; o < n; ++o)
    a[o] = e[o];
  return function(s) {
    for (o = 0; o < r; ++o)
      a[o] = i[o](s);
    return a;
  };
}
function B_(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function re(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function H_(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Kn(t[i], e[i]) : r[i] = e[i];
  return function(a) {
    for (i in n)
      r[i] = n[i](a);
    return r;
  };
}
var xa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ki = new RegExp(xa.source, "g");
function j_(t) {
  return function() {
    return t;
  };
}
function V_(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Oc(t, e) {
  var n = xa.lastIndex = Ki.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
  for (t = t + "", e = e + ""; (r = xa.exec(t)) && (i = Ki.exec(e)); )
    (a = i.index) > n && (a = e.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: re(r, i) })), n = Ki.lastIndex;
  return n < e.length && (a = e.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? V_(c[0].x) : j_(e) : (e = c.length, function(u) {
    for (var p = 0, h; p < e; ++p)
      s[(h = c[p]).i] = h.x(u);
    return s.join("");
  });
}
function Kn(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Qa(e) : (n === "number" ? re : n === "string" ? (r = on(e)) ? (e = r, Pr) : Oc : e instanceof on ? Pr : e instanceof Date ? B_ : F_(e) ? z_ : Array.isArray(e) ? L_ : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? H_ : re)(t, e);
}
function q_(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var cs = 180 / Math.PI, ba = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function $c(t, e, n, r, i, a) {
  var o, s, c;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (c = t * n + e * r) && (n -= t * c, r -= e * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), t * r < e * n && (t = -t, e = -e, c = -c, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(e, t) * cs,
    skewX: Math.atan(c) * cs,
    scaleX: o,
    scaleY: s
  };
}
var Nn, Zi, us, lr;
function W_(t) {
  return t === "none" ? ba : (Nn || (Nn = document.createElement("DIV"), Zi = document.documentElement, us = document.defaultView), Nn.style.transform = t, t = us.getComputedStyle(Zi.appendChild(Nn), null).getPropertyValue("transform"), Zi.removeChild(Nn), t = t.slice(7, -1).split(","), $c(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
}
function U_(t) {
  return t == null || (lr || (lr = document.createElementNS("http://www.w3.org/2000/svg", "g")), lr.setAttribute("transform", t), !(t = lr.transform.baseVal.consolidate())) ? ba : (t = t.matrix, $c(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ac(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, p, h, m, l, v) {
    if (u !== h || p !== m) {
      var _ = l.push("translate(", null, e, null, n);
      v.push({ i: _ - 4, x: re(u, h) }, { i: _ - 2, x: re(p, m) });
    } else
      (h || m) && l.push("translate(" + h + e + m + n);
  }
  function o(u, p, h, m) {
    u !== p ? (u - p > 180 ? p += 360 : p - u > 180 && (u += 360), m.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: re(u, p) })) : p && h.push(i(h) + "rotate(" + p + r);
  }
  function s(u, p, h, m) {
    u !== p ? m.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: re(u, p) }) : p && h.push(i(h) + "skewX(" + p + r);
  }
  function c(u, p, h, m, l, v) {
    if (u !== h || p !== m) {
      var _ = l.push(i(l) + "scale(", null, ",", null, ")");
      v.push({ i: _ - 4, x: re(u, h) }, { i: _ - 2, x: re(p, m) });
    } else
      (h !== 1 || m !== 1) && l.push(i(l) + "scale(" + h + "," + m + ")");
  }
  return function(u, p) {
    var h = [], m = [];
    return u = t(u), p = t(p), a(u.translateX, u.translateY, p.translateX, p.translateY, h, m), o(u.rotate, p.rotate, h, m), s(u.skewX, p.skewX, h, m), c(u.scaleX, u.scaleY, p.scaleX, p.scaleY, h, m), u = p = null, function(l) {
      for (var v = -1, _ = m.length, y; ++v < _; )
        h[(y = m[v]).i] = y.x(l);
      return h.join("");
    };
  };
}
var G_ = Ac(W_, "px, ", "px)", "deg)"), Y_ = Ac(U_, ", ", ")", ")");
function X_(t) {
  return function() {
    return t;
  };
}
function Q_(t) {
  return +t;
}
var ls = [0, 1];
function we(t) {
  return t;
}
function Sa(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : X_(isNaN(e) ? NaN : 0.5);
}
function fs(t) {
  var e = t[0], n = t[t.length - 1], r;
  return e > n && (r = e, e = n, n = r), function(i) {
    return Math.max(e, Math.min(n, i));
  };
}
function J_(t, e, n) {
  var r = t[0], i = t[1], a = e[0], o = e[1];
  return i < r ? (r = Sa(i, r), a = n(o, a)) : (r = Sa(r, i), a = n(a, o)), function(s) {
    return a(r(s));
  };
}
function K_(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < r; )
    i[o] = Sa(t[o], t[o + 1]), a[o] = n(e[o], e[o + 1]);
  return function(s) {
    var c = y_(t, s, 1, r) - 1;
    return a[c](i[c](s));
  };
}
function Pc(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Ec() {
  var t = ls, e = ls, n = Kn, r, i, a, o = we, s, c, u;
  function p() {
    return s = Math.min(t.length, e.length) > 2 ? K_ : J_, c = u = null, h;
  }
  function h(m) {
    return isNaN(m = +m) ? a : (c || (c = s(t.map(r), e, n)))(r(o(m)));
  }
  return h.invert = function(m) {
    return o(i((u || (u = s(e, t.map(r), re)))(m)));
  }, h.domain = function(m) {
    return arguments.length ? (t = S_.call(m, Q_), o === we || (o = fs(t)), p()) : t.slice();
  }, h.range = function(m) {
    return arguments.length ? (e = _a.call(m), p()) : e.slice();
  }, h.rangeRound = function(m) {
    return e = _a.call(m), n = q_, p();
  }, h.clamp = function(m) {
    return arguments.length ? (o = m ? fs(t) : we, h) : o !== we;
  }, h.interpolate = function(m) {
    return arguments.length ? (n = m, p()) : n;
  }, h.unknown = function(m) {
    return arguments.length ? (a = m, h) : a;
  }, function(m, l) {
    return r = m, i = l, p();
  };
}
function Z_(t, e) {
  return Ec()(t, e);
}
function tw(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Er(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function $n(t) {
  return t = Er(Math.abs(t)), t ? t[1] : NaN;
}
function ew(t, e) {
  return function(n, r) {
    for (var i = n.length, a = [], o = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(e);
  };
}
function nw(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var rw = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Tr(t) {
  if (!(e = rw.exec(t)))
    throw new Error("invalid format: " + t);
  var e;
  return new Ja({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
Tr.prototype = Ja.prototype;
function Ja(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Ja.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function iw(t) {
  t:
    for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
      switch (t[n]) {
        case ".":
          r = i = n;
          break;
        case "0":
          r === 0 && (r = n), i = n;
          break;
        default:
          if (!+t[n])
            break t;
          r > 0 && (r = 0);
          break;
      }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Tc;
function aw(t, e) {
  var n = Er(t, e);
  if (!n)
    return t + "";
  var r = n[0], i = n[1], a = i - (Tc = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Er(t, Math.max(0, e + a - 1))[0];
}
function hs(t, e) {
  var n = Er(t, e);
  if (!n)
    return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const ds = {
  "%": function(t, e) {
    return (t * 100).toFixed(e);
  },
  b: function(t) {
    return Math.round(t).toString(2);
  },
  c: function(t) {
    return t + "";
  },
  d: tw,
  e: function(t, e) {
    return t.toExponential(e);
  },
  f: function(t, e) {
    return t.toFixed(e);
  },
  g: function(t, e) {
    return t.toPrecision(e);
  },
  o: function(t) {
    return Math.round(t).toString(8);
  },
  p: function(t, e) {
    return hs(t * 100, e);
  },
  r: hs,
  s: aw,
  X: function(t) {
    return Math.round(t).toString(16).toUpperCase();
  },
  x: function(t) {
    return Math.round(t).toString(16);
  }
};
function ps(t) {
  return t;
}
var gs = Array.prototype.map, ms = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function ow(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? ps : ew(gs.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? ps : nw(gs.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "-" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = Tr(h);
    var m = h.fill, l = h.align, v = h.sign, _ = h.symbol, y = h.zero, f = h.width, d = h.comma, w = h.precision, A = h.trim, I = h.type;
    I === "n" ? (d = !0, I = "g") : ds[I] || (w === void 0 && (w = 12), A = !0, I = "g"), (y || m === "0" && l === "=") && (y = !0, m = "0", l = "=");
    var H = _ === "$" ? n : _ === "#" && /[boxX]/.test(I) ? "0" + I.toLowerCase() : "", q = _ === "$" ? r : /[%p]/.test(I) ? o : "", j = ds[I], z = /[defgprs%]/.test(I);
    w = w === void 0 ? 6 : /[gprs]/.test(I) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w));
    function L(b) {
      var S = H, C = q, P, B, V;
      if (I === "c")
        C = j(b) + C, b = "";
      else {
        b = +b;
        var G = b < 0 || 1 / b < 0;
        if (b = isNaN(b) ? c : j(Math.abs(b), w), A && (b = iw(b)), G && +b == 0 && v !== "+" && (G = !1), S = (G ? v === "(" ? v : s : v === "-" || v === "(" ? "" : v) + S, C = (I === "s" ? ms[8 + Tc / 3] : "") + C + (G && v === "(" ? ")" : ""), z) {
          for (P = -1, B = b.length; ++P < B; )
            if (V = b.charCodeAt(P), 48 > V || V > 57) {
              C = (V === 46 ? i + b.slice(P + 1) : b.slice(P)) + C, b = b.slice(0, P);
              break;
            }
        }
      }
      d && !y && (b = e(b, 1 / 0));
      var K = S.length + b.length + C.length, et = K < f ? new Array(f - K + 1).join(m) : "";
      switch (d && y && (b = e(et + b, et.length ? f - C.length : 1 / 0), et = ""), l) {
        case "<":
          b = S + b + C + et;
          break;
        case "=":
          b = S + et + b + C;
          break;
        case "^":
          b = et.slice(0, K = et.length >> 1) + S + b + C + et.slice(K);
          break;
        default:
          b = et + S + b + C;
          break;
      }
      return a(b);
    }
    return L.toString = function() {
      return h + "";
    }, L;
  }
  function p(h, m) {
    var l = u((h = Tr(h), h.type = "f", h)), v = Math.max(-8, Math.min(8, Math.floor($n(m) / 3))) * 3, _ = Math.pow(10, -v), y = ms[8 + v / 3];
    return function(f) {
      return l(_ * f) + y;
    };
  }
  return {
    format: u,
    formatPrefix: p
  };
}
var fr, Ic, kc;
sw({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});
function sw(t) {
  return fr = ow(t), Ic = fr.format, kc = fr.formatPrefix, fr;
}
function cw(t) {
  return Math.max(0, -$n(Math.abs(t)));
}
function uw(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor($n(e) / 3))) * 3 - $n(Math.abs(t)));
}
function lw(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, $n(e) - $n(t)) + 1;
}
function fw(t, e, n, r) {
  var i = x_(t, e, n), a;
  switch (r = Tr(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(a = uw(i, o)) && (r.precision = a), kc(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = lw(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = cw(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Ic(r);
}
function Dc(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return w_(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return fw(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, a = r.length - 1, o = r[i], s = r[a], c;
    return s < o && (c = o, o = s, s = c, c = i, i = a, a = c), c = gr(o, s, n), c > 0 ? (o = Math.floor(o / c) * c, s = Math.ceil(s / c) * c, c = gr(o, s, n)) : c < 0 && (o = Math.ceil(o * c) / c, s = Math.floor(s * c) / c, c = gr(o, s, n)), c > 0 ? (r[i] = Math.floor(o / c) * c, r[a] = Math.ceil(s / c) * c, e(r)) : c < 0 && (r[i] = Math.ceil(o * c) / c, r[a] = Math.floor(s * c) / c, e(r)), t;
  }, t;
}
function Zn() {
  var t = Z_(we, we);
  return t.copy = function() {
    return Pc(t, Zn());
  }, oi.apply(t, arguments), Dc(t);
}
function ys(t) {
  return function(e) {
    return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
  };
}
function hw(t) {
  return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
}
function dw(t) {
  return t < 0 ? -t * t : t * t;
}
function pw(t) {
  var e = t(we, we), n = 1;
  function r() {
    return n === 1 ? t(we, we) : n === 0.5 ? t(hw, dw) : t(ys(n), ys(1 / n));
  }
  return e.exponent = function(i) {
    return arguments.length ? (n = +i, r()) : n;
  }, Dc(e);
}
function Nc() {
  var t = pw(Ec());
  return t.copy = function() {
    return Pc(t, Nc()).exponent(t.exponent());
  }, oi.apply(t, arguments), t;
}
function gw() {
  return Nc.apply(null, arguments).exponent(0.5);
}
function mw(t) {
  var e = 0, n = t.children, r = n && n.length;
  if (!r)
    e = 1;
  else
    for (; --r >= 0; )
      e += n[r].value;
  t.value = e;
}
function yw() {
  return this.eachAfter(mw);
}
function vw(t) {
  var e = this, n, r = [e], i, a, o;
  do
    for (n = r.reverse(), r = []; e = n.pop(); )
      if (t(e), i = e.children, i)
        for (a = 0, o = i.length; a < o; ++a)
          r.push(i[a]);
  while (r.length);
  return this;
}
function _w(t) {
  for (var e = this, n = [e], r, i; e = n.pop(); )
    if (t(e), r = e.children, r)
      for (i = r.length - 1; i >= 0; --i)
        n.push(r[i]);
  return this;
}
function ww(t) {
  for (var e = this, n = [e], r = [], i, a, o; e = n.pop(); )
    if (r.push(e), i = e.children, i)
      for (a = 0, o = i.length; a < o; ++a)
        n.push(i[a]);
  for (; e = r.pop(); )
    t(e);
  return this;
}
function xw(t) {
  return this.eachAfter(function(e) {
    for (var n = +t(e.data) || 0, r = e.children, i = r && r.length; --i >= 0; )
      n += r[i].value;
    e.value = n;
  });
}
function bw(t) {
  return this.eachBefore(function(e) {
    e.children && e.children.sort(t);
  });
}
function Sw(t) {
  for (var e = this, n = Cw(e, t), r = [e]; e !== n; )
    e = e.parent, r.push(e);
  for (var i = r.length; t !== n; )
    r.splice(i, 0, t), t = t.parent;
  return r;
}
function Cw(t, e) {
  if (t === e)
    return t;
  var n = t.ancestors(), r = e.ancestors(), i = null;
  for (t = n.pop(), e = r.pop(); t === e; )
    i = t, t = n.pop(), e = r.pop();
  return i;
}
function Mw() {
  for (var t = this, e = [t]; t = t.parent; )
    e.push(t);
  return e;
}
function Ow() {
  var t = [];
  return this.each(function(e) {
    t.push(e);
  }), t;
}
function $w() {
  var t = [];
  return this.eachBefore(function(e) {
    e.children || t.push(e);
  }), t;
}
function Aw() {
  var t = this, e = [];
  return t.each(function(n) {
    n !== t && e.push({ source: n.parent, target: n });
  }), e;
}
function Ka(t, e) {
  var n = new Ir(t), r = +t.value && (n.value = t.value), i, a = [n], o, s, c, u;
  for (e == null && (e = Ew); i = a.pop(); )
    if (r && (i.value = +i.data.value), (s = e(i.data)) && (u = s.length))
      for (i.children = new Array(u), c = u - 1; c >= 0; --c)
        a.push(o = i.children[c] = new Ir(s[c])), o.parent = i, o.depth = i.depth + 1;
  return n.eachBefore(Iw);
}
function Pw() {
  return Ka(this).eachBefore(Tw);
}
function Ew(t) {
  return t.children;
}
function Tw(t) {
  t.data = t.data.data;
}
function Iw(t) {
  var e = 0;
  do
    t.height = e;
  while ((t = t.parent) && t.height < ++e);
}
function Ir(t) {
  this.data = t, this.depth = this.height = 0, this.parent = null;
}
Ir.prototype = Ka.prototype = {
  constructor: Ir,
  count: yw,
  each: vw,
  eachAfter: ww,
  eachBefore: _w,
  sum: xw,
  sort: bw,
  path: Sw,
  ancestors: Mw,
  descendants: Ow,
  leaves: $w,
  links: Aw,
  copy: Pw
};
function kw(t) {
  t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1);
}
function Dw(t, e, n, r, i) {
  for (var a = t.children, o, s = -1, c = a.length, u = t.value && (r - e) / t.value; ++s < c; )
    o = a[s], o.y0 = n, o.y1 = i, o.x0 = e, o.x1 = e += o.value * u;
}
function Nw() {
  var t = 1, e = 1, n = 0, r = !1;
  function i(o) {
    var s = o.height + 1;
    return o.x0 = o.y0 = n, o.x1 = t, o.y1 = e / s, o.eachBefore(a(e, s)), r && o.eachBefore(kw), o;
  }
  function a(o, s) {
    return function(c) {
      c.children && Dw(c, c.x0, o * (c.depth + 1) / s, c.x1, o * (c.depth + 2) / s);
      var u = c.x0, p = c.y0, h = c.x1 - n, m = c.y1 - n;
      h < u && (u = h = (u + h) / 2), m < p && (p = m = (p + m) / 2), c.x0 = u, c.y0 = p, c.x1 = h, c.y1 = m;
    };
  }
  return i.round = function(o) {
    return arguments.length ? (r = !!o, i) : r;
  }, i.size = function(o) {
    return arguments.length ? (t = +o[0], e = +o[1], i) : [t, e];
  }, i.padding = function(o) {
    return arguments.length ? (n = +o, i) : n;
  }, i;
}
var Ca = Math.PI, Ma = 2 * Ca, tn = 1e-6, Rw = Ma - tn;
function Oa() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function Za() {
  return new Oa();
}
Oa.prototype = Za.prototype = {
  constructor: Oa,
  moveTo: function(t, e) {
    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e);
  },
  closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  },
  lineTo: function(t, e) {
    this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e);
  },
  quadraticCurveTo: function(t, e, n, r) {
    this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +r);
  },
  bezierCurveTo: function(t, e, n, r, i, a) {
    this._ += "C" + +t + "," + +e + "," + +n + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +a);
  },
  arcTo: function(t, e, n, r, i) {
    t = +t, e = +e, n = +n, r = +r, i = +i;
    var a = this._x1, o = this._y1, s = n - t, c = r - e, u = a - t, p = o - e, h = u * u + p * p;
    if (i < 0)
      throw new Error("negative radius: " + i);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
    else if (h > tn)
      if (!(Math.abs(p * s - c * u) > tn) || !i)
        this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
      else {
        var m = n - a, l = r - o, v = s * s + c * c, _ = m * m + l * l, y = Math.sqrt(v), f = Math.sqrt(h), d = i * Math.tan((Ca - Math.acos((v + h - _) / (2 * y * f))) / 2), w = d / f, A = d / y;
        Math.abs(w - 1) > tn && (this._ += "L" + (t + w * u) + "," + (e + w * p)), this._ += "A" + i + "," + i + ",0,0," + +(p * m > u * l) + "," + (this._x1 = t + A * s) + "," + (this._y1 = e + A * c);
      }
  },
  arc: function(t, e, n, r, i, a) {
    t = +t, e = +e, n = +n, a = !!a;
    var o = n * Math.cos(r), s = n * Math.sin(r), c = t + o, u = e + s, p = 1 ^ a, h = a ? r - i : i - r;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + c + "," + u : (Math.abs(this._x1 - c) > tn || Math.abs(this._y1 - u) > tn) && (this._ += "L" + c + "," + u), n && (h < 0 && (h = h % Ma + Ma), h > Rw ? this._ += "A" + n + "," + n + ",0,1," + p + "," + (t - o) + "," + (e - s) + "A" + n + "," + n + ",0,1," + p + "," + (this._x1 = c) + "," + (this._y1 = u) : h > tn && (this._ += "A" + n + "," + n + ",0," + +(h >= Ca) + "," + p + "," + (this._x1 = t + n * Math.cos(i)) + "," + (this._y1 = e + n * Math.sin(i))));
  },
  rect: function(t, e, n, r) {
    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +r + "h" + -n + "Z";
  },
  toString: function() {
    return this._;
  }
};
function zt(t) {
  return function() {
    return t;
  };
}
var vs = Math.abs, At = Math.atan2, Ze = Math.cos, zw = Math.max, ta = Math.min, ge = Math.sin, vn = Math.sqrt, Vt = 1e-12, Gn = Math.PI, kr = Gn / 2, mr = 2 * Gn;
function Fw(t) {
  return t > 1 ? 0 : t < -1 ? Gn : Math.acos(t);
}
function _s(t) {
  return t >= 1 ? kr : t <= -1 ? -kr : Math.asin(t);
}
function Lw(t) {
  return t.innerRadius;
}
function Bw(t) {
  return t.outerRadius;
}
function Hw(t) {
  return t.startAngle;
}
function jw(t) {
  return t.endAngle;
}
function Vw(t) {
  return t && t.padAngle;
}
function qw(t, e, n, r, i, a, o, s) {
  var c = n - t, u = r - e, p = o - i, h = s - a, m = h * c - p * u;
  if (!(m * m < Vt))
    return m = (p * (e - a) - h * (t - i)) / m, [t + m * c, e + m * u];
}
function hr(t, e, n, r, i, a, o) {
  var s = t - n, c = e - r, u = (o ? a : -a) / vn(s * s + c * c), p = u * c, h = -u * s, m = t + p, l = e + h, v = n + p, _ = r + h, y = (m + v) / 2, f = (l + _) / 2, d = v - m, w = _ - l, A = d * d + w * w, I = i - a, H = m * _ - v * l, q = (w < 0 ? -1 : 1) * vn(zw(0, I * I * A - H * H)), j = (H * w - d * q) / A, z = (-H * d - w * q) / A, L = (H * w + d * q) / A, b = (-H * d + w * q) / A, S = j - y, C = z - f, P = L - y, B = b - f;
  return S * S + C * C > P * P + B * B && (j = L, z = b), {
    cx: j,
    cy: z,
    x01: -p,
    y01: -h,
    x11: j * (i / I - 1),
    y11: z * (i / I - 1)
  };
}
function Rc() {
  var t = Lw, e = Bw, n = zt(0), r = null, i = Hw, a = jw, o = Vw, s = null;
  function c() {
    var u, p, h = +t.apply(this, arguments), m = +e.apply(this, arguments), l = i.apply(this, arguments) - kr, v = a.apply(this, arguments) - kr, _ = vs(v - l), y = v > l;
    if (s || (s = u = Za()), m < h && (p = m, m = h, h = p), !(m > Vt))
      s.moveTo(0, 0);
    else if (_ > mr - Vt)
      s.moveTo(m * Ze(l), m * ge(l)), s.arc(0, 0, m, l, v, !y), h > Vt && (s.moveTo(h * Ze(v), h * ge(v)), s.arc(0, 0, h, v, l, y));
    else {
      var f = l, d = v, w = l, A = v, I = _, H = _, q = o.apply(this, arguments) / 2, j = q > Vt && (r ? +r.apply(this, arguments) : vn(h * h + m * m)), z = ta(vs(m - h) / 2, +n.apply(this, arguments)), L = z, b = z, S, C;
      if (j > Vt) {
        var P = _s(j / h * ge(q)), B = _s(j / m * ge(q));
        (I -= P * 2) > Vt ? (P *= y ? 1 : -1, w += P, A -= P) : (I = 0, w = A = (l + v) / 2), (H -= B * 2) > Vt ? (B *= y ? 1 : -1, f += B, d -= B) : (H = 0, f = d = (l + v) / 2);
      }
      var V = m * Ze(f), G = m * ge(f), K = h * Ze(A), et = h * ge(A);
      if (z > Vt) {
        var Q = m * Ze(d), lt = m * ge(d), st = h * Ze(w), nt = h * ge(w), Z;
        if (_ < Gn && (Z = qw(V, G, st, nt, Q, lt, K, et))) {
          var ut = V - Z[0], ct = G - Z[1], J = Q - Z[0], ft = lt - Z[1], ht = 1 / ge(Fw((ut * J + ct * ft) / (vn(ut * ut + ct * ct) * vn(J * J + ft * ft))) / 2), yt = vn(Z[0] * Z[0] + Z[1] * Z[1]);
          L = ta(z, (h - yt) / (ht - 1)), b = ta(z, (m - yt) / (ht + 1));
        }
      }
      H > Vt ? b > Vt ? (S = hr(st, nt, V, G, m, b, y), C = hr(Q, lt, K, et, m, b, y), s.moveTo(S.cx + S.x01, S.cy + S.y01), b < z ? s.arc(S.cx, S.cy, b, At(S.y01, S.x01), At(C.y01, C.x01), !y) : (s.arc(S.cx, S.cy, b, At(S.y01, S.x01), At(S.y11, S.x11), !y), s.arc(0, 0, m, At(S.cy + S.y11, S.cx + S.x11), At(C.cy + C.y11, C.cx + C.x11), !y), s.arc(C.cx, C.cy, b, At(C.y11, C.x11), At(C.y01, C.x01), !y))) : (s.moveTo(V, G), s.arc(0, 0, m, f, d, !y)) : s.moveTo(V, G), !(h > Vt) || !(I > Vt) ? s.lineTo(K, et) : L > Vt ? (S = hr(K, et, Q, lt, h, -L, y), C = hr(V, G, st, nt, h, -L, y), s.lineTo(S.cx + S.x01, S.cy + S.y01), L < z ? s.arc(S.cx, S.cy, L, At(S.y01, S.x01), At(C.y01, C.x01), !y) : (s.arc(S.cx, S.cy, L, At(S.y01, S.x01), At(S.y11, S.x11), !y), s.arc(0, 0, h, At(S.cy + S.y11, S.cx + S.x11), At(C.cy + C.y11, C.cx + C.x11), y), s.arc(C.cx, C.cy, L, At(C.y11, C.x11), At(C.y01, C.x01), !y))) : s.arc(0, 0, h, A, w, y);
    }
    if (s.closePath(), u)
      return s = null, u + "" || null;
  }
  return c.centroid = function() {
    var u = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, p = (+i.apply(this, arguments) + +a.apply(this, arguments)) / 2 - Gn / 2;
    return [Ze(p) * u, ge(p) * u];
  }, c.innerRadius = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : zt(+u), c) : t;
  }, c.outerRadius = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : zt(+u), c) : e;
  }, c.cornerRadius = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : zt(+u), c) : n;
  }, c.padRadius = function(u) {
    return arguments.length ? (r = u == null ? null : typeof u == "function" ? u : zt(+u), c) : r;
  }, c.startAngle = function(u) {
    return arguments.length ? (i = typeof u == "function" ? u : zt(+u), c) : i;
  }, c.endAngle = function(u) {
    return arguments.length ? (a = typeof u == "function" ? u : zt(+u), c) : a;
  }, c.padAngle = function(u) {
    return arguments.length ? (o = typeof u == "function" ? u : zt(+u), c) : o;
  }, c.context = function(u) {
    return arguments.length ? (s = u ?? null, c) : s;
  }, c;
}
function Ww(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Uw(t) {
  return t;
}
function Gw() {
  var t = Uw, e = Ww, n = null, r = zt(0), i = zt(mr), a = zt(0);
  function o(s) {
    var c, u = s.length, p, h, m = 0, l = new Array(u), v = new Array(u), _ = +r.apply(this, arguments), y = Math.min(mr, Math.max(-mr, i.apply(this, arguments) - _)), f, d = Math.min(Math.abs(y) / u, a.apply(this, arguments)), w = d * (y < 0 ? -1 : 1), A;
    for (c = 0; c < u; ++c)
      (A = v[l[c] = c] = +t(s[c], c, s)) > 0 && (m += A);
    for (e != null ? l.sort(function(I, H) {
      return e(v[I], v[H]);
    }) : n != null && l.sort(function(I, H) {
      return n(s[I], s[H]);
    }), c = 0, h = m ? (y - u * w) / m : 0; c < u; ++c, _ = f)
      p = l[c], A = v[p], f = _ + (A > 0 ? A * h : 0) + w, v[p] = {
        data: s[p],
        index: c,
        value: A,
        startAngle: _,
        endAngle: f,
        padAngle: d
      };
    return v;
  }
  return o.value = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : zt(+s), o) : t;
  }, o.sortValues = function(s) {
    return arguments.length ? (e = s, n = null, o) : e;
  }, o.sort = function(s) {
    return arguments.length ? (n = s, e = null, o) : n;
  }, o.startAngle = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : zt(+s), o) : r;
  }, o.endAngle = function(s) {
    return arguments.length ? (i = typeof s == "function" ? s : zt(+s), o) : i;
  }, o.padAngle = function(s) {
    return arguments.length ? (a = typeof s == "function" ? s : zt(+s), o) : a;
  }, o;
}
var Yw = { value: function() {
} };
function to() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new yr(n);
}
function yr(t) {
  this._ = t;
}
function Xw(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
yr.prototype = to.prototype = {
  constructor: yr,
  on: function(t, e) {
    var n = this._, r = Xw(t + "", n), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; )
        if ((i = (t = r[a]).type) && (i = Qw(n[i], t.name)))
          return i;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++a < o; )
      if (i = (t = r[a]).type)
        n[i] = ws(n[i], t.name, e);
      else if (e == null)
        for (i in n)
          n[i] = ws(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e)
      t[n] = e[n].slice();
    return new yr(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), r = 0, i, a; r < i; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r)
      a[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i)
      r[i].value.apply(e, n);
  }
};
function Qw(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function ws(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Yw, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
const Jw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dispatch: to
}, Symbol.toStringTag, { value: "Module" }));
var An = 0, Fn = 0, Rn = 0, zc = 1e3, Dr, Ln, Nr = 0, sn = 0, si = 0, Yn = typeof performance == "object" && performance.now ? performance : Date, Fc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function ci() {
  return sn || (Fc(Kw), sn = Yn.now() + si);
}
function Kw() {
  sn = 0;
}
function Rr() {
  this._call = this._time = this._next = null;
}
Rr.prototype = Lc.prototype = {
  constructor: Rr,
  restart: function(t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? ci() : +n) + (e == null ? 0 : +e), !this._next && Ln !== this && (Ln ? Ln._next = this : Dr = this, Ln = this), this._call = t, this._time = n, $a();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, $a());
  }
};
function Lc(t, e, n) {
  var r = new Rr();
  return r.restart(t, e, n), r;
}
function Zw() {
  ci(), ++An;
  for (var t = Dr, e; t; )
    (e = sn - t._time) >= 0 && t._call.call(null, e), t = t._next;
  --An;
}
function xs() {
  sn = (Nr = Yn.now()) + si, An = Fn = 0;
  try {
    Zw();
  } finally {
    An = 0, ex(), sn = 0;
  }
}
function tx() {
  var t = Yn.now(), e = t - Nr;
  e > zc && (si -= e, Nr = t);
}
function ex() {
  for (var t, e = Dr, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Dr = n);
  Ln = t, $a(r);
}
function $a(t) {
  if (!An) {
    Fn && (Fn = clearTimeout(Fn));
    var e = t - sn;
    e > 24 ? (t < 1 / 0 && (Fn = setTimeout(xs, t - Yn.now() - si)), Rn && (Rn = clearInterval(Rn))) : (Rn || (Nr = Yn.now(), Rn = setInterval(tx, zc)), An = 1, Fc(xs));
  }
}
function bs(t, e, n) {
  var r = new Rr();
  return e = e == null ? 0 : +e, r.restart(function(i) {
    r.stop(), t(i + e);
  }, e, n), r;
}
var nx = to("start", "end", "cancel", "interrupt"), rx = [], Bc = 0, Ss = 1, Aa = 2, vr = 3, Cs = 4, Pa = 5, _r = 6;
function ui(t, e, n, r, i, a) {
  var o = t.__transition;
  if (!o)
    t.__transition = {};
  else if (n in o)
    return;
  ix(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: nx,
    tween: rx,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Bc
  });
}
function eo(t, e) {
  var n = se(t, e);
  if (n.state > Bc)
    throw new Error("too late; already scheduled");
  return n;
}
function Ee(t, e) {
  var n = se(t, e);
  if (n.state > vr)
    throw new Error("too late; already running");
  return n;
}
function se(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e]))
    throw new Error("transition not found");
  return n;
}
function ix(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Lc(a, 0, n.time);
  function a(u) {
    n.state = Ss, n.timer.restart(o, n.delay, n.time), n.delay <= u && o(u - n.delay);
  }
  function o(u) {
    var p, h, m, l;
    if (n.state !== Ss)
      return c();
    for (p in r)
      if (l = r[p], l.name === n.name) {
        if (l.state === vr)
          return bs(o);
        l.state === Cs ? (l.state = _r, l.timer.stop(), l.on.call("interrupt", t, t.__data__, l.index, l.group), delete r[p]) : +p < e && (l.state = _r, l.timer.stop(), l.on.call("cancel", t, t.__data__, l.index, l.group), delete r[p]);
      }
    if (bs(function() {
      n.state === vr && (n.state = Cs, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Aa, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Aa) {
      for (n.state = vr, i = new Array(m = n.tween.length), p = 0, h = -1; p < m; ++p)
        (l = n.tween[p].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = l);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var p = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = Pa, 1), h = -1, m = i.length; ++h < m; )
      i[h].call(t, p);
    n.state === Pa && (n.on.call("end", t, t.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = _r, n.timer.stop(), delete r[e];
    for (var u in r)
      return;
    delete t.__transition;
  }
}
function ax(t, e) {
  var n = t.__transition, r, i, a = !0, o;
  if (n) {
    e = e == null ? null : e + "";
    for (o in n) {
      if ((r = n[o]).name !== e) {
        a = !1;
        continue;
      }
      i = r.state > Aa && r.state < Pa, r.state = _r, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[o];
    }
    a && delete t.__transition;
  }
}
function ox(t) {
  return this.each(function() {
    ax(this, t);
  });
}
function sx(t, e) {
  var n, r;
  return function() {
    var i = Ee(this, t), a = i.tween;
    if (a !== n) {
      r = n = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === e) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function cx(t, e, n) {
  var r, i;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var a = Ee(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: e, value: n }, c = 0, u = i.length; c < u; ++c)
        if (i[c].name === e) {
          i[c] = s;
          break;
        }
      c === u && i.push(s);
    }
    a.tween = i;
  };
}
function ux(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = se(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? sx : cx)(n, t, e));
}
function no(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = Ee(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return se(i, r).value[e];
  };
}
function Hc(t, e) {
  var n;
  return (typeof e == "number" ? re : e instanceof on ? Pr : (n = on(e)) ? (e = n, Pr) : Oc)(t, e);
}
function lx(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function fx(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function hx(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function dx(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function px(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function gx(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function mx(t, e) {
  var n = Fr(t), r = n === "transform" ? Y_ : Hc;
  return this.attrTween(t, typeof e == "function" ? (n.local ? gx : px)(n, r, no(this, "attr." + t, e)) : e == null ? (n.local ? fx : lx)(n) : (n.local ? dx : hx)(n, r, e));
}
function yx(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function vx(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function _x(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && vx(t, a)), n;
  }
  return i._value = e, i;
}
function wx(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && yx(t, a)), n;
  }
  return i._value = e, i;
}
function xx(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (e == null)
    return this.tween(n, null);
  if (typeof e != "function")
    throw new Error();
  var r = Fr(t);
  return this.tween(n, (r.local ? _x : wx)(r, e));
}
function bx(t, e) {
  return function() {
    eo(this, t).delay = +e.apply(this, arguments);
  };
}
function Sx(t, e) {
  return e = +e, function() {
    eo(this, t).delay = e;
  };
}
function Cx(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? bx : Sx)(e, t)) : se(this.node(), e).delay;
}
function Mx(t, e) {
  return function() {
    Ee(this, t).duration = +e.apply(this, arguments);
  };
}
function Ox(t, e) {
  return e = +e, function() {
    Ee(this, t).duration = e;
  };
}
function $x(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Mx : Ox)(e, t)) : se(this.node(), e).duration;
}
function Ax(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    Ee(this, t).ease = e;
  };
}
function Px(t) {
  var e = this._id;
  return arguments.length ? this.each(Ax(e, t)) : se(this.node(), e).ease;
}
function Ex(t) {
  typeof t != "function" && (t = oc(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new Pe(r, this._parents, this._name, this._id);
}
function Tx(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var c = e[s], u = n[s], p = c.length, h = o[s] = new Array(p), m, l = 0; l < p; ++l)
      (m = c[l] || u[l]) && (h[l] = m);
  for (; s < r; ++s)
    o[s] = e[s];
  return new Pe(o, this._parents, this._name, this._id);
}
function Ix(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function kx(t, e, n) {
  var r, i, a = Ix(e) ? eo : Ee;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(e, n), o.on = i;
  };
}
function Dx(t, e) {
  var n = this._id;
  return arguments.length < 2 ? se(this.node(), n).on.on(t) : this.each(kx(n, t, e));
}
function Nx(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition)
      if (+n !== t)
        return;
    e && e.removeChild(this);
  };
}
function Rx() {
  return this.on("end.remove", Nx(this._id));
}
function zx(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Ha(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], c = s.length, u = a[o] = new Array(c), p, h, m = 0; m < c; ++m)
      (p = s[m]) && (h = t.call(p, p.__data__, m, s)) && ("__data__" in p && (h.__data__ = p.__data__), u[m] = h, ui(u[m], e, n, m, u, se(p, n)));
  return new Pe(a, this._parents, e, n);
}
function Fx(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = ac(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, p, h = 0; h < u; ++h)
      if (p = c[h]) {
        for (var m = t.call(p, p.__data__, h, c), l, v = se(p, n), _ = 0, y = m.length; _ < y; ++_)
          (l = m[_]) && ui(l, e, n, _, m, v);
        a.push(m), o.push(p);
      }
  return new Pe(a, o, e, n);
}
var Lx = Tn.prototype.constructor;
function Bx() {
  return new Lx(this._groups, this._parents);
}
function Hx(t, e) {
  var n, r, i;
  return function() {
    var a = Mn(this, t), o = (this.style.removeProperty(t), Mn(this, t));
    return a === o ? null : a === n && o === r ? i : i = e(n = a, r = o);
  };
}
function jc(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function jx(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = Mn(this, t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Vx(t, e, n) {
  var r, i, a;
  return function() {
    var o = Mn(this, t), s = n(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), Mn(this, t))), o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s));
  };
}
function qx(t, e) {
  var n, r, i, a = "style." + e, o = "end." + a, s;
  return function() {
    var c = Ee(this, t), u = c.on, p = c.value[a] == null ? s || (s = jc(e)) : void 0;
    (u !== n || i !== p) && (r = (n = u).copy()).on(o, i = p), c.on = r;
  };
}
function Wx(t, e, n) {
  var r = (t += "") == "transform" ? G_ : Hc;
  return e == null ? this.styleTween(t, Hx(t, r)).on("end.style." + t, jc(t)) : typeof e == "function" ? this.styleTween(t, Vx(t, r, no(this, "style." + t, e))).each(qx(this._id, t)) : this.styleTween(t, jx(t, r, e), n).on("end.style." + t, null);
}
function Ux(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Gx(t, e, n) {
  var r, i;
  function a() {
    var o = e.apply(this, arguments);
    return o !== i && (r = (i = o) && Ux(t, o, n)), r;
  }
  return a._value = e, a;
}
function Yx(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(r, Gx(t, e, n ?? ""));
}
function Xx(t) {
  return function() {
    this.textContent = t;
  };
}
function Qx(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Jx(t) {
  return this.tween("text", typeof t == "function" ? Qx(no(this, "text", t)) : Xx(t == null ? "" : t + ""));
}
function Kx(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Zx(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Kx(i)), e;
  }
  return r._value = t, r;
}
function tb(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, Zx(t));
}
function eb() {
  for (var t = this._name, e = this._id, n = Vc(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      if (c = o[u]) {
        var p = se(c, e);
        ui(c, t, n, u, o, {
          time: p.time + p.delay + p.duration,
          delay: 0,
          duration: p.duration,
          ease: p.ease
        });
      }
  return new Pe(r, this._parents, t, n);
}
function nb() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(a, o) {
    var s = { value: o }, c = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var u = Ee(this, r), p = u.on;
      p !== t && (e = (t = p).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(c)), u.on = e;
    });
  });
}
var rb = 0;
function Pe(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function tr(t) {
  return Tn().transition(t);
}
function Vc() {
  return ++rb;
}
var gn = Tn.prototype;
Pe.prototype = tr.prototype = {
  constructor: Pe,
  select: zx,
  selectAll: Fx,
  filter: Ex,
  merge: Tx,
  selection: Bx,
  transition: eb,
  call: gn.call,
  nodes: gn.nodes,
  node: gn.node,
  size: gn.size,
  empty: gn.empty,
  each: gn.each,
  on: Dx,
  attr: mx,
  attrTween: xx,
  style: Wx,
  styleTween: Yx,
  text: Jx,
  textTween: tb,
  remove: Rx,
  tween: ux,
  delay: Cx,
  duration: $x,
  ease: Px,
  end: nb
};
var Ea = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ae
};
function ib(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      return Ea.time = ci(), Ea;
  return n;
}
function ab(t) {
  var e, n;
  t instanceof Pe ? (e = t._id, t = t._name) : (e = Vc(), (n = Ea).time = ci(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && ui(c, t, e, u, o, n || ib(c, e));
  return new Pe(r, this._parents, t, e);
}
Tn.prototype.interrupt = ox;
Tn.prototype.transition = ab;
function be(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; )
    n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
const li = be("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), fi = be("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), hi = be("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), di = be("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), pi = be("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), gi = be("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), mi = be("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), yi = be("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), vi = be("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), _i = be("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function ob(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var qc = { exports: {} };
(function(t, e) {
  (function(n, r) {
    typeof ob == "function" ? t.exports = r() : n.pluralize = r();
  })(mt, function() {
    var n = [], r = [], i = {}, a = {}, o = {};
    function s(_) {
      return typeof _ == "string" ? new RegExp("^" + _ + "$", "i") : _;
    }
    function c(_, y) {
      return _ === y ? y : _ === _.toLowerCase() ? y.toLowerCase() : _ === _.toUpperCase() ? y.toUpperCase() : _[0] === _[0].toUpperCase() ? y.charAt(0).toUpperCase() + y.substr(1).toLowerCase() : y.toLowerCase();
    }
    function u(_, y) {
      return _.replace(/\$(\d{1,2})/g, function(f, d) {
        return y[d] || "";
      });
    }
    function p(_, y) {
      return _.replace(y[0], function(f, d) {
        var w = u(y[1], arguments);
        return c(f === "" ? _[d - 1] : f, w);
      });
    }
    function h(_, y, f) {
      if (!_.length || i.hasOwnProperty(_))
        return y;
      for (var d = f.length; d--; ) {
        var w = f[d];
        if (w[0].test(y))
          return p(y, w);
      }
      return y;
    }
    function m(_, y, f) {
      return function(d) {
        var w = d.toLowerCase();
        return y.hasOwnProperty(w) ? c(d, w) : _.hasOwnProperty(w) ? c(d, _[w]) : h(w, d, f);
      };
    }
    function l(_, y, f, d) {
      return function(w) {
        var A = w.toLowerCase();
        return y.hasOwnProperty(A) ? !0 : _.hasOwnProperty(A) ? !1 : h(A, A, f) === A;
      };
    }
    function v(_, y, f) {
      var d = y === 1 ? v.singular(_) : v.plural(_);
      return (f ? y + " " : "") + d;
    }
    return v.plural = m(
      o,
      a,
      n
    ), v.isPlural = l(
      o,
      a,
      n
    ), v.singular = m(
      a,
      o,
      r
    ), v.isSingular = l(
      a,
      o,
      r
    ), v.addPluralRule = function(_, y) {
      n.push([s(_), y]);
    }, v.addSingularRule = function(_, y) {
      r.push([s(_), y]);
    }, v.addUncountableRule = function(_) {
      if (typeof _ == "string") {
        i[_.toLowerCase()] = !0;
        return;
      }
      v.addPluralRule(_, "$0"), v.addSingularRule(_, "$0");
    }, v.addIrregularRule = function(_, y) {
      y = y.toLowerCase(), _ = _.toLowerCase(), o[_] = y, a[y] = _;
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
    ].forEach(function(_) {
      return v.addIrregularRule(_[0], _[1]);
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
    ].forEach(function(_) {
      return v.addPluralRule(_[0], _[1]);
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
    ].forEach(function(_) {
      return v.addSingularRule(_[0], _[1]);
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
})(qc);
var sb = qc.exports;
const Pn = /* @__PURE__ */ Xn(sb), gt = {
  select: cn,
  selectAll: Lr,
  scaleLinear: Zn,
  scaleOrdinal: In,
  scaleSqrt: gw,
  hierarchy: Ka,
  partition: Nw,
  arc: Rc,
  path: Za,
  transition: tr,
  interpolate: Kn,
  easeLinear: Br,
  easePolyIn: Wr,
  easePolyOut: Ur,
  easePoly: Fe,
  easePolyInOut: Fe,
  easeQuadIn: Hr,
  easeQuadOut: jr,
  easeQuad: ze,
  easeQuadInOut: ze,
  easeCubicIn: Vr,
  easeCubicOut: qr,
  easeCubic: Ae,
  easeCubicInOut: Ae,
  easeSinIn: Gr,
  easeSinOut: Yr,
  easeSin: Le,
  easeSinInOut: Le,
  easeExpIn: Xr,
  easeExpOut: Qr,
  easeExp: He,
  easeExpInOut: He,
  easeCircleIn: Jr,
  easeCircleOut: Kr,
  easeCircle: je,
  easeCircleInOut: je,
  easeElasticIn: ni,
  easeElastic: qe,
  easeElasticOut: qe,
  easeElasticInOut: ri,
  easeBackIn: ei,
  easeBackOut: an,
  easeBack: Ve,
  easeBackInOut: Ve,
  easeBounceIn: Zr,
  easeBounce: ae,
  easeBounceOut: ae,
  easeBounceInOut: ti,
  schemeCategory10: li,
  schemeAccent: fi,
  schemeDark2: hi,
  schemePaired: di,
  schemePastel1: pi,
  schemePastel2: gi,
  schemeSet1: mi,
  schemeSet2: yi,
  schemeSet3: vi,
  schemeTableau10: _i
};
class cb extends ai {
  constructor(e, n, r) {
    super(e, n, r, {
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
    this.getDimensions(), this.initChartFrame("sunburst"), this.cfg.tooltip.suffix && this.cfg.tooltip.suffixPlural && Pn.addIrregularRule(this.cfg.tooltip.suffix, this.cfg.tooltip.suffixPlural), this.gcenter = this.g.append("g"), this.setChartDimension(), this.updateChart();
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
    const e = (n) => {
      const r = gt.hierarchy(n).sum((i) => i[this.cfg.value]).sort((i, a) => a.name - i.name);
      return gt.partition()(r);
    };
    this.hData = e(this.data[0]).descendants(), this.itemg = this.gcenter.selectAll(".chart__slice-group").data(this.hData, (n) => n.data[this.cfg.key]), this.transition = gt.transition("t").duration(this.cfg.transition.duration).ease(gt[this.cfg.transition.ease]);
  }
  /**
   * Set up scales
   */
  setScales() {
    this.radius = Math.min(this.cfg.width, this.cfg.height) / 2, this.xScale = gt.scaleLinear().range([0, 2 * Math.PI]).clamp(!0), this.yScale = gt.scaleSqrt().range([this.radius * 0.1, this.radius]), this.arc = gt.arc().startAngle((e) => this.xScale(e.x0)).endAngle((e) => this.xScale(e.x1)).innerRadius((e) => Math.max(0, this.yScale(e.y0))).outerRadius((e) => Math.max(0, this.yScale(e.y1))), this.cfg.color.scheme && (this.cfg.color.scheme instanceof Array ? this.colorScale = gt.scaleOrdinal().range(this.cfg.color.scheme) : this.colorScale = gt.scaleOrdinal(gt[this.cfg.color.scheme]));
  }
  /**
   * Add new chart's elements
   */
  enterElements() {
    const e = this.itemg.enter().append("g").attr("class", "chart__slice-group chart__slice-group--sunburst clickable").on("click", (n) => {
      window.event.stopPropagation(), this.focusOn(n);
    });
    e.append("path").attr("class", "chart__slice chart__slice--sunburst").style("fill", (n) => this.colorElement(n.data)).on("mouseover", (n) => {
      const r = this.cfg.tooltip.suffixPlural ? Pn(this.cfg.tooltip.suffix, n.value) : this.cfg.tooltip.suffix, i = this.cfg.tooltip.suffix ? `<div>${n.data[this.cfg.key]}: ${n.value} ${r}</div>` : `<div>${n.data[this.cfg.key]}: ${n.value}</div>`;
      this.tooltip.html(i).classed("active", !0);
    }).on("mouseout", () => {
      this.tooltip.classed("active", !1);
    }).on("mousemove", () => {
      this.tooltip.style("left", window.event.pageX - 28 + "px").style("top", window.event.pageY - 40 + "px");
    }).transition(this.transition).attrTween("d", (n) => {
      const r = gt.interpolate(0, n.y0), i = gt.interpolate(n.y0, n.y1), a = gt.interpolate(0, n.x0), o = gt.interpolate(0, n.x1);
      return (s) => (n.y0 = r(s), n.y1 = i(s), n.x0 = a(s), n.x1 = o(s), this.arc(n));
    }), e.append("path").attr("class", "chart__line--hidden").attr("id", (n, r) => `hiddenArc${r}`).attr("d", (n) => this.middleArcLine(n)), this.labels = e.append("text").attr("class", "chart__labels").attr("display", "none").attr("text-anchor", "middle").attr("dy", 2).attr("font-size", "10px").style("opacity", 0), this.labels.append("textPath").attr("startOffset", "50%").attr("xlink:href", (n, r) => `#hiddenArc${r}`).text((n) => n.data.name);
  }
  /**
   * Update chart's elements based on data change
   */
  updateElements() {
    this.itemg.selectAll(".chart__slice").transition(this.transition).attrTween("d", (e) => {
      const n = this.hData.filter((s) => s.data.name === e.data.name)[0], r = gt.interpolate(e.y0, n.y0), i = gt.interpolate(e.y1, n.y1), a = gt.interpolate(e.x0, n.x0), o = gt.interpolate(e.x1, n.x1);
      return (s) => (n.y0 = r(s), n.y1 = i(s), n.x0 = a(s), n.x1 = o(s), this.arc(n));
    }).style("fill", (e) => this.colorElement(e.data)), this.labels.attr("display", (e) => this.textFits(e) ? null : "none").transition(this.transition).duration(this.cfg.transition.duration / 2).delay(this.cfg.transition.duration / 2).style("opacity", 1);
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
  textFits(e) {
    if (!e.parent)
      return !1;
    const n = this.xScale(e.x1) - this.xScale(e.x0), r = Math.max(0, (this.yScale(e.y0) + this.yScale(e.y1)) / 2);
    return e.data[this.cfg.key].length * this.cfg.charSpace < r * n;
  }
  /**
   * Transition slice on focus
   */
  focusOn(e) {
    const n = this.hData.filter((i) => i.data.name === e.data.name)[0], r = this.svg.transition().duration(this.cfg.transition.duration).ease(gt[this.cfg.transition.ease]).tween("scale", () => {
      const i = gt.interpolate(this.xScale.domain(), [n.x0, n.x1]), a = gt.interpolate(this.yScale.domain(), [n.y0, 1]);
      return (o) => {
        this.xScale.domain(i(o)), this.yScale.domain(a(o));
      };
    });
    r.selectAll(".chart__slice").attrTween("d", (i) => () => {
      const a = this.hData.filter((o) => o.data.name === i.data.name)[0];
      return this.arc(a);
    }), r.selectAll(".chart__line--hidden").attrTween("d", (i) => () => {
      const a = this.hData.filter((o) => o.data.name === i.data.name)[0];
      return this.middleArcLine(a);
    }), r.selectAll(".chart__labels").attrTween("display", (i) => () => {
      const a = this.hData.filter((o) => o.data.name === i.data.name)[0];
      return this.textFits(a) ? null : "none";
    });
  }
  middleArcLine(e) {
    const n = Math.PI / 2, r = [this.xScale(e.x0) - n, this.xScale(e.x1) - n], i = Math.max(0, (this.yScale(e.y0) + this.yScale(e.y1)) / 2), a = (r[1] + r[0]) / 2, o = a > 0 && a < Math.PI;
    o && r.reverse();
    const s = gt.path();
    return s.arc(0, 0, i, r[0], r[1], o), s.toString();
  }
}
const ub = {
  name: "D3Sunburst",
  extends: ii,
  mounted() {
    this.chart = new cb(
      this.$refs.chart,
      JSON.parse(JSON.stringify(this.datum)),
      this.config
    );
  }
}, lb = /* @__PURE__ */ Rs(Jw), fb = lb.dispatch, ea = Math.PI / 180, hb = {
  archimedean: Uc,
  rectangular: bb
}, Bn = 64, wr = 2048;
var Wc = function() {
  var t = [256, 256], e = db, n = pb, r = gb, i = Ms, a = Ms, o = mb, s = yb, c = Uc, u = [], p = 1 / 0, h = fb("word", "end"), m = null, l = Math.random, v = {}, _ = Cb;
  v.canvas = function(d) {
    return arguments.length ? (_ = ke(d), v) : _;
  }, v.start = function() {
    var d = y(_()), w = Sb((t[0] >> 5) * t[1]), A = null, I = u.length, H = -1, q = [], j = u.map(function(L, b) {
      return L.text = e.call(this, L, b), L.font = n.call(this, L, b), L.style = i.call(this, L, b), L.weight = a.call(this, L, b), L.rotate = o.call(this, L, b), L.size = ~~r.call(this, L, b), L.padding = s.call(this, L, b), L;
    }).sort(function(L, b) {
      return b.size - L.size;
    });
    return m && clearInterval(m), m = setInterval(z, 0), z(), v;
    function z() {
      for (var L = Date.now(); Date.now() - L < p && ++H < I && m; ) {
        var b = j[H];
        b.x = t[0] * (l() + 0.5) >> 1, b.y = t[1] * (l() + 0.5) >> 1, vb(d, b, j, H), b.hasText && f(w, b, A) && (q.push(b), h.call("word", v, b), A ? wb(A, b) : A = [{ x: b.x + b.x0, y: b.y + b.y0 }, { x: b.x + b.x1, y: b.y + b.y1 }], b.x -= t[0] >> 1, b.y -= t[1] >> 1);
      }
      H >= I && (v.stop(), h.call("end", v, q, A));
    }
  }, v.stop = function() {
    m && (clearInterval(m), m = null);
    for (const d of u)
      delete d.sprite;
    return v;
  };
  function y(d) {
    const w = d.getContext("2d", { willReadFrequently: !0 });
    d.width = d.height = 1;
    const A = Math.sqrt(w.getImageData(0, 0, 1, 1).data.length >> 2);
    return d.width = (Bn << 5) / A, d.height = wr / A, w.fillStyle = w.strokeStyle = "red", { context: w, ratio: A };
  }
  function f(d, w, A) {
    t[0], t[1];
    for (var I = w.x, H = w.y, q = Math.sqrt(t[0] * t[0] + t[1] * t[1]), j = c(t), z = l() < 0.5 ? 1 : -1, L = -z, b, S, C; (b = j(L += z)) && (S = ~~b[0], C = ~~b[1], !(Math.min(Math.abs(S), Math.abs(C)) >= q)); )
      if (w.x = I + S, w.y = H + C, !(w.x + w.x0 < 0 || w.y + w.y0 < 0 || w.x + w.x1 > t[0] || w.y + w.y1 > t[1]) && (!A || xb(w, A)) && !_b(w, d, t[0])) {
        for (var P = w.sprite, B = w.width >> 5, V = t[0] >> 5, G = w.x - (B << 4), K = G & 127, et = 32 - K, Q = w.y1 - w.y0, lt = (w.y + w.y0) * V + (G >> 5), st, nt = 0; nt < Q; nt++) {
          st = 0;
          for (var Z = 0; Z <= B; Z++)
            d[lt + Z] |= st << et | (Z < B ? (st = P[nt * B + Z]) >>> K : 0);
          lt += V;
        }
        return !0;
      }
    return !1;
  }
  return v.timeInterval = function(d) {
    return arguments.length ? (p = d ?? 1 / 0, v) : p;
  }, v.words = function(d) {
    return arguments.length ? (u = d, v) : u;
  }, v.size = function(d) {
    return arguments.length ? (t = [+d[0], +d[1]], v) : t;
  }, v.font = function(d) {
    return arguments.length ? (n = ke(d), v) : n;
  }, v.fontStyle = function(d) {
    return arguments.length ? (i = ke(d), v) : i;
  }, v.fontWeight = function(d) {
    return arguments.length ? (a = ke(d), v) : a;
  }, v.rotate = function(d) {
    return arguments.length ? (o = ke(d), v) : o;
  }, v.text = function(d) {
    return arguments.length ? (e = ke(d), v) : e;
  }, v.spiral = function(d) {
    return arguments.length ? (c = hb[d] || d, v) : c;
  }, v.fontSize = function(d) {
    return arguments.length ? (r = ke(d), v) : r;
  }, v.padding = function(d) {
    return arguments.length ? (s = ke(d), v) : s;
  }, v.random = function(d) {
    return arguments.length ? (l = d, v) : l;
  }, v.on = function() {
    var d = h.on.apply(h, arguments);
    return d === h ? v : d;
  }, v;
};
function db(t) {
  return t.text;
}
function pb() {
  return "serif";
}
function Ms() {
  return "normal";
}
function gb(t) {
  return Math.sqrt(t.value);
}
function mb() {
  return (~~(random() * 6) - 3) * 30;
}
function yb() {
  return 1;
}
function vb(t, e, n, r) {
  if (!e.sprite) {
    var i = t.context, a = t.ratio;
    i.clearRect(0, 0, (Bn << 5) / a, wr / a);
    var o = 0, s = 0, c = 0, u = n.length;
    for (--r; ++r < u; ) {
      e = n[r], i.save(), i.font = e.style + " " + e.weight + " " + ~~((e.size + 1) / a) + "px " + e.font;
      const b = i.measureText(e.text), S = -Math.floor(b.width / 2);
      let C = (b.width + 1) * a, P = e.size << 1;
      if (e.rotate) {
        var p = Math.sin(e.rotate * ea), h = Math.cos(e.rotate * ea), m = C * h, l = C * p, v = P * h, _ = P * p;
        C = Math.max(Math.abs(m + _), Math.abs(m - _)) + 31 >> 5 << 5, P = ~~Math.max(Math.abs(l + v), Math.abs(l - v));
      } else
        C = C + 31 >> 5 << 5;
      if (P > c && (c = P), o + C >= Bn << 5 && (o = 0, s += c, c = 0), s + P >= wr)
        break;
      i.translate((o + (C >> 1)) / a, (s + (P >> 1)) / a), e.rotate && i.rotate(e.rotate * ea), i.fillText(e.text, S, 0), e.padding && (i.lineWidth = 2 * e.padding, i.strokeText(e.text, S, 0)), i.restore(), e.width = C, e.height = P, e.xoff = o, e.yoff = s, e.x1 = C >> 1, e.y1 = P >> 1, e.x0 = -e.x1, e.y0 = -e.y1, e.hasText = !0, o += C;
    }
    for (var y = i.getImageData(0, 0, (Bn << 5) / a, wr / a).data, f = []; --r >= 0; )
      if (e = n[r], !!e.hasText) {
        for (var d = e.width, w = d >> 5, A = e.y1 - e.y0, I = 0; I < A * w; I++)
          f[I] = 0;
        if (o = e.xoff, o == null)
          return;
        s = e.yoff;
        for (var H = 0, q = -1, j = 0; j < A; j++) {
          for (var I = 0; I < d; I++) {
            var z = w * j + (I >> 5), L = y[(s + j) * (Bn << 5) + (o + I) << 2] ? 1 << 31 - I % 32 : 0;
            f[z] |= L, H |= L;
          }
          H ? q = j : (e.y0++, A--, j--, s++);
        }
        e.y1 = e.y0 + q, e.sprite = f.slice(0, (e.y1 - e.y0) * w);
      }
  }
}
function _b(t, e, n) {
  n >>= 5;
  for (var r = t.sprite, i = t.width >> 5, a = t.x - (i << 4), o = a & 127, s = 32 - o, c = t.y1 - t.y0, u = (t.y + t.y0) * n + (a >> 5), p, h = 0; h < c; h++) {
    p = 0;
    for (var m = 0; m <= i; m++)
      if ((p << s | (m < i ? (p = r[h * i + m]) >>> o : 0)) & e[u + m])
        return !0;
    u += n;
  }
  return !1;
}
function wb(t, e) {
  var n = t[0], r = t[1];
  e.x + e.x0 < n.x && (n.x = e.x + e.x0), e.y + e.y0 < n.y && (n.y = e.y + e.y0), e.x + e.x1 > r.x && (r.x = e.x + e.x1), e.y + e.y1 > r.y && (r.y = e.y + e.y1);
}
function xb(t, e) {
  return t.x + t.x1 > e[0].x && t.x + t.x0 < e[1].x && t.y + t.y1 > e[0].y && t.y + t.y0 < e[1].y;
}
function Uc(t) {
  var e = t[0] / t[1];
  return function(n) {
    return [e * (n *= 0.1) * Math.cos(n), n * Math.sin(n)];
  };
}
function bb(t) {
  var e = 4, n = e * t[0] / t[1], r = 0, i = 0;
  return function(a) {
    var o = a < 0 ? -1 : 1;
    switch (Math.sqrt(1 + 4 * o * a) - o & 3) {
      case 0:
        r += n;
        break;
      case 1:
        i += e;
        break;
      case 2:
        r -= n;
        break;
      default:
        i -= e;
        break;
    }
    return [r, i];
  };
}
function Sb(t) {
  for (var e = [], n = -1; ++n < t; )
    e[n] = 0;
  return e;
}
function Cb() {
  return document.createElement("canvas");
}
function ke(t) {
  return typeof t == "function" ? t : function() {
    return t;
  };
}
const Mb = /* @__PURE__ */ Xn(Wc), Ob = /* @__PURE__ */ Yu({
  __proto__: null,
  default: Mb
}, [Wc]), mn = {
  select: cn,
  selectAll: Lr,
  scaleOrdinal: In,
  scaleLinear: Zn,
  min: wc,
  max: Ya,
  extent: v_,
  transition: tr,
  cloud: Ob,
  easeLinear: Br,
  easePolyIn: Wr,
  easePolyOut: Ur,
  easePoly: Fe,
  easePolyInOut: Fe,
  easeQuadIn: Hr,
  easeQuadOut: jr,
  easeQuad: ze,
  easeQuadInOut: ze,
  easeCubicIn: Vr,
  easeCubicOut: qr,
  easeCubic: Ae,
  easeCubicInOut: Ae,
  easeSinIn: Gr,
  easeSinOut: Yr,
  easeSin: Le,
  easeSinInOut: Le,
  easeExpIn: Xr,
  easeExpOut: Qr,
  easeExp: He,
  easeExpInOut: He,
  easeCircleIn: Jr,
  easeCircleOut: Kr,
  easeCircle: je,
  easeCircleInOut: je,
  easeElasticIn: ni,
  easeElastic: qe,
  easeElasticOut: qe,
  easeElasticInOut: ri,
  easeBackIn: ei,
  easeBackOut: an,
  easeBack: Ve,
  easeBackInOut: Ve,
  easeBounceIn: Zr,
  easeBounce: ae,
  easeBounceOut: ae,
  easeBounceInOut: ti,
  schemeCategory10: li,
  schemeAccent: fi,
  schemeDark2: hi,
  schemePaired: di,
  schemePastel1: pi,
  schemePastel2: gi,
  schemeSet1: mi,
  schemeSet2: yi,
  schemeSet3: vi,
  schemeTableau10: _i
};
class $b extends ai {
  constructor(e, n, r) {
    super(e, n, r, {
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
    this.getDimensions(), this.initChartFrame("wordscloud"), this.cfg.tooltip.suffix && this.cfg.tooltip.suffixPlural && Pn.addIrregularRule(this.cfg.tooltip.suffix, this.cfg.tooltip.suffixPlural), this.gcenter = this.g.append("g"), this.tData = [], this.setChartDimension(), this.updateChart();
  }
  /**
   * Compute data before operate
   */
  computeData() {
    mn.cloud().size([this.cfg.width, this.cfg.height]).words(
      this.data.map((e) => ({
        text: e[this.cfg.key],
        size: e[this.cfg.size],
        value: e[this.cfg.value],
        color: this.colorElement(e, "text")
      }))
    ).rotate(() => this.wordsAngle(this.cfg.angle)).font(this.cfg.fontFamily).fontSize((e) => e.size * this.fontScale).on("end", (e) => {
      this.data.length !== e.length && this.fontScale > 0 ? (this.fontScale = this.fontScale - 0.1, this.computeData()) : (this.renderEnd = !0, this.tData = e);
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
    this.transition = mn.transition("t").duration(this.cfg.transition.duration).ease(mn[this.cfg.transition.ease]), this.wordgroup = this.gcenter.selectAll(".chart__word-group").data(this.tData, (e) => e.text);
  }
  /**
   * Set up scales
   */
  setScales() {
    this.cfg.color.scheme instanceof Array ? this.colorScale = mn.scaleOrdinal().range(this.cfg.color.scheme) : typeof this.cfg.color.scheme == "string" && (this.colorScale = mn.scaleOrdinal(mn[this.cfg.color.scheme]));
  }
  /**
   * Add new chart's elements
   */
  enterElements() {
    if (!this.renderEnd)
      return;
    this.wordgroup.enter().append("g").attr("class", "chart__word-group chart__word-group--wordscloud").append("text").style("font-size", (n) => n.size + "px").style("font-family", (n) => n.font).attr("text-anchor", "middle").attr("fill", (n) => n.color).attr("transform", (n) => `translate(${[n.x, n.y]})rotate(${n.rotate})`).on("mouseover", (n) => {
      const r = this.cfg.tooltip.suffixPlural ? Pn(this.cfg.tooltip.suffix, n.value) : this.cfg.tooltip.suffix, i = this.cfg.tooltip.suffix ? `<div>${n.text}: ${n.value} ${r}</div>` : `<div>${n.text}: ${n.value}</div>`;
      this.tooltip.html(i).classed("active", !0);
    }).on("mouseout", () => {
      this.tooltip.classed("active", !1);
    }).on("mousemove", () => {
      this.tooltip.style("left", window.event.pageX - 28 + "px").style("top", window.event.pageY - 40 + "px");
    }).text((n) => n.text);
  }
  /**
   * Update chart's elements based on data change
   */
  updateElements() {
    this.renderEnd && this.wordgroup.selectAll("text").data(this.tData, (e) => e.text).transition(this.transition).attr("fill", (e) => this.colorElement(e, "text")).style("font-size", (e) => e.size + "px").attr("transform", (e) => `translate(${[e.x, e.y]})rotate(${e.rotate})`);
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
        const e = this.randomInt(0, this.cfg.angle.length - 1);
        return this.cfg.angle[e];
      } else {
        const e = (this.cfg.angle.end - this.cfg.angle.start) / (this.cfg.angle.steps - 1);
        return this.cfg.angle.start + this.randomInt(0, this.cfg.angle.steps) * e;
      }
    return 0;
  }
  randomInt(e, n) {
    const r = Math.ceil(e), i = Math.floor(n);
    return Math.floor(Math.random() * (i - r + 1)) + r;
  }
}
const Ab = {
  name: "D3WordsCloud",
  extends: ii,
  mounted() {
    this.chart = new $b(
      this.$refs.chart,
      JSON.parse(JSON.stringify(this.datum)),
      this.config
    );
  }
};
var na = Array.prototype.slice;
function Pb(t) {
  return t;
}
var ra = 1, ia = 2, Ta = 3, Hn = 4, Os = 1e-6;
function Eb(t) {
  return "translate(" + (t + 0.5) + ",0)";
}
function Tb(t) {
  return "translate(0," + (t + 0.5) + ")";
}
function Ib(t) {
  return function(e) {
    return +t(e);
  };
}
function kb(t) {
  var e = Math.max(0, t.bandwidth() - 1) / 2;
  return t.round() && (e = Math.round(e)), function(n) {
    return +t(n) + e;
  };
}
function Db() {
  return !this.__axis;
}
function Gc(t, e) {
  var n = [], r = null, i = null, a = 6, o = 6, s = 3, c = t === ra || t === Hn ? -1 : 1, u = t === Hn || t === ia ? "x" : "y", p = t === ra || t === Ta ? Eb : Tb;
  function h(m) {
    var l = r ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), v = i ?? (e.tickFormat ? e.tickFormat.apply(e, n) : Pb), _ = Math.max(a, 0) + s, y = e.range(), f = +y[0] + 0.5, d = +y[y.length - 1] + 0.5, w = (e.bandwidth ? kb : Ib)(e.copy()), A = m.selection ? m.selection() : m, I = A.selectAll(".domain").data([null]), H = A.selectAll(".tick").data(l, e).order(), q = H.exit(), j = H.enter().append("g").attr("class", "tick"), z = H.select("line"), L = H.select("text");
    I = I.merge(I.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), H = H.merge(j), z = z.merge(j.append("line").attr("stroke", "currentColor").attr(u + "2", c * a)), L = L.merge(j.append("text").attr("fill", "currentColor").attr(u, c * _).attr("dy", t === ra ? "0em" : t === Ta ? "0.71em" : "0.32em")), m !== A && (I = I.transition(m), H = H.transition(m), z = z.transition(m), L = L.transition(m), q = q.transition(m).attr("opacity", Os).attr("transform", function(b) {
      return isFinite(b = w(b)) ? p(b) : this.getAttribute("transform");
    }), j.attr("opacity", Os).attr("transform", function(b) {
      var S = this.parentNode.__axis;
      return p(S && isFinite(S = S(b)) ? S : w(b));
    })), q.remove(), I.attr("d", t === Hn || t == ia ? o ? "M" + c * o + "," + f + "H0.5V" + d + "H" + c * o : "M0.5," + f + "V" + d : o ? "M" + f + "," + c * o + "V0.5H" + d + "V" + c * o : "M" + f + ",0.5H" + d), H.attr("opacity", 1).attr("transform", function(b) {
      return p(w(b));
    }), z.attr(u + "2", c * a), L.attr(u, c * _).text(v), A.filter(Db).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === ia ? "start" : t === Hn ? "end" : "middle"), A.each(function() {
      this.__axis = w;
    });
  }
  return h.scale = function(m) {
    return arguments.length ? (e = m, h) : e;
  }, h.ticks = function() {
    return n = na.call(arguments), h;
  }, h.tickArguments = function(m) {
    return arguments.length ? (n = m == null ? [] : na.call(m), h) : n.slice();
  }, h.tickValues = function(m) {
    return arguments.length ? (r = m == null ? null : na.call(m), h) : r && r.slice();
  }, h.tickFormat = function(m) {
    return arguments.length ? (i = m, h) : i;
  }, h.tickSize = function(m) {
    return arguments.length ? (a = o = +m, h) : a;
  }, h.tickSizeInner = function(m) {
    return arguments.length ? (a = +m, h) : a;
  }, h.tickSizeOuter = function(m) {
    return arguments.length ? (o = +m, h) : o;
  }, h.tickPadding = function(m) {
    return arguments.length ? (s = +m, h) : s;
  }, h;
}
function Nb(t) {
  return Gc(Ta, t);
}
function Rb(t) {
  return Gc(Hn, t);
}
const Kt = {
  select: cn,
  selectAll: Lr,
  scaleBand: bc,
  scaleLinear: Zn,
  scaleOrdinal: In,
  max: Ya,
  transition: tr,
  axisBottom: Nb,
  axisLeft: Rb,
  easeLinear: Br,
  easePolyIn: Wr,
  easePolyOut: Ur,
  easePoly: Fe,
  easePolyInOut: Fe,
  easeQuadIn: Hr,
  easeQuadOut: jr,
  easeQuad: ze,
  easeQuadInOut: ze,
  easeCubicIn: Vr,
  easeCubicOut: qr,
  easeCubic: Ae,
  easeCubicInOut: Ae,
  easeSinIn: Gr,
  easeSinOut: Yr,
  easeSin: Le,
  easeSinInOut: Le,
  easeExpIn: Xr,
  easeExpOut: Qr,
  easeExp: He,
  easeExpInOut: He,
  easeCircleIn: Jr,
  easeCircleOut: Kr,
  easeCircle: je,
  easeCircleInOut: je,
  easeElasticIn: ni,
  easeElastic: qe,
  easeElasticOut: qe,
  easeElasticInOut: ri,
  easeBackIn: ei,
  easeBackOut: an,
  easeBack: Ve,
  easeBackInOut: Ve,
  easeBounceIn: Zr,
  easeBounce: ae,
  easeBounceOut: ae,
  easeBounceInOut: ti,
  schemeCategory10: li,
  schemeAccent: fi,
  schemeDark2: hi,
  schemePaired: di,
  schemePastel1: pi,
  schemePastel2: gi,
  schemeSet1: mi,
  schemeSet2: yi,
  schemeSet3: vi,
  schemeTableau10: _i
}, Oe = "Texto de referencia", De = "Texto escaneado";
class zb extends ai {
  constructor(e, n, r) {
    super(e, n, r, {
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
      keys: { [De]: De, [Oe]: Oe },
      transition: { duration: 350, ease: "easeLinear" }
    });
  }
  /**
   * Init chart
   */
  initChart() {
    this.getDimensions(), this.initChartFrame("barchart"), this.cfg.tooltip.suffix && this.cfg.tooltip.suffixPlural && Pn.addIrregularRule(this.cfg.tooltip.suffix, this.cfg.tooltip.suffixPlural), this.xScale = Kt.scaleBand(), this.xScaleInn = Kt.scaleBand(), this.yScale = Kt.scaleLinear(), this.axisg = this.g.append("g").attr("class", "chart__axis chart__axis--barchart"), this.yGrid = this.axisg.append("g").attr("class", "chart__grid chart__grid--y chart__grid--barchart"), this.xAxis = this.axisg.append("g").attr("class", "chart__axis-x chart__axis-x--barchart"), this.cfg.axis.yTitle && (this.yAxisTitle = this.axisg.append("text").attr("class", "chart__axis-title chart__axis-title--barchart").attr("transform", "rotate(-90)").style("text-anchor", "middle")), this.setChartDimension(), this.updateChart();
  }
  /**
   * Resize chart pipe
   */
  setScales() {
    this.xScale.rangeRound(
      this.cfg.orientation !== "horizontal" ? [0, this.cfg.width] : [0, this.cfg.height]
    ).paddingInner(0.1).domain(this.data.map((i) => i[this.cfg.key])), this.xScaleInn.domain(this.cfg.values).rangeRound([0, this.xScale.bandwidth()]).paddingInner(0.05);
    const e = this.calculateBiggestNumber();
    this.yScale.rangeRound(
      this.cfg.orientation !== "horizontal" ? [0, this.cfg.height] : [this.cfg.width, 0]
    ).domain([e, 0]), this.cfg.color.scheme instanceof Array ? this.colorScale = Kt.scaleOrdinal().range(this.cfg.color.scheme) : typeof this.cfg.color.scheme == "string" && (this.colorScale = Kt.scaleOrdinal(Kt[this.cfg.color.scheme]));
    const n = this.cfg.orientation !== "horizontal" ? Kt.axisLeft(this.yScale).tickSize(-this.cfg.width).ticks(this.cfg.axis.yTicks, this.cfg.axis.yFormat) : Kt.axisBottom(this.yScale).tickSize(-this.cfg.height).ticks(this.cfg.axis.yTicks, this.cfg.axis.yFormat), r = this.cfg.orientation !== "horizontal" ? Kt.axisBottom(this.xScale) : Kt.axisLeft(this.xScale);
    this.yGrid.attr(
      "transform",
      this.cfg.orientation !== "horizontal" ? "translate(0,0)" : `translate(0,${this.cfg.height})`
    ).transition(this.transition).call(n), this.xAxis.attr(
      "transform",
      this.cfg.orientation !== "horizontal" ? `translate(0,${this.cfg.height})` : "translate(0,0)"
    ).call(r);
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
    this.transition = Kt.transition("t").duration(this.cfg.transition.duration).ease(Kt[this.cfg.transition.ease]), this.g.selectAll(".chart__bar-group").remove(), this.itemg = this.g.selectAll(".chart__bar-group").data(this.data, (e) => e[this.cfg.key]);
  }
  hasComparissionData() {
    return this.data.some((e) => e[Oe] > 0);
  }
  calculateTotals() {
    const e = this.data.reduce((r, i) => r + i[Oe], 0), n = this.data.reduce((r, i) => r + i[De], 0);
    return { [Oe]: e, [De]: n };
  }
  calculateMaximums() {
    const e = this.data.reduce(
      (r, i) => this.getBiggerNumber(r, i[Oe]),
      0
    ), n = this.data.reduce(
      (r, i) => this.getBiggerNumber(r, i[De]),
      0
    );
    return { [Oe]: e, [De]: n };
  }
  getBiggerNumber(e, n) {
    return e > n ? e : n;
  }
  calculateBiggestNumber() {
    const e = this.calculateTotals(), n = this.calculateMaximums(), r = n[Oe], i = e[Oe], a = n[De], o = e[De], s = this.calculatePercentage(r, i), c = this.calculatePercentage(a, o), u = this.getBiggerNumber(s, c);
    return this.roundToNextStep(u);
  }
  roundToNextStep(e) {
    return Math.ceil(e / 10) * 10;
  }
  calculatePercentage(e, n) {
    return e * 100 / n;
  }
  /**
   * Add new chart's elements
   */
  enterElements() {
    const e = this.calculateTotals();
    this.itemg.enter().append("g").attr("class", "chart__bar-group chart__bar-group--barchart").attr("transform", (r) => this.cfg.orientation !== "horizontal" ? `translate(${this.xScale(r[this.cfg.key])},0)` : `translate(0,${this.xScale(r[this.cfg.key])})`).selectAll(".chart__bar").data(
      (r) => this.cfg.values.map((i) => {
        const a = { ...r };
        return a[this.cfg.key] = r[this.cfg.key], a;
      })
    ).enter().append("rect").attr("class", "chart__bar chart__bar--barchart").classed("chart__bar--current", (r) => this.cfg.currentKey && r[this.cfg.key] === this.cfg.currentKey).attr("x", (r, i) => this.cfg.orientation !== "horizontal" ? this.xScaleInn(this.cfg.values[i % this.cfg.values.length]) : 0).attr("y", (r, i) => this.cfg.orientation !== "horizontal" ? this.cfg.height : this.xScaleInn(this.cfg.values[i % this.cfg.values.length])).attr("height", 0).attr("width", 0).on("mouseover", (r, i) => {
      const a = this.cfg.values[i % this.cfg.values.length], o = this.cfg.tooltip.suffixPlural ? Pn(this.cfg.tooltip.suffix, r[a]) : this.cfg.tooltip.suffix, s = this.cfg.keys[a], c = this.calculatePercentage(r[a], e[a]).toFixed(2), u = this.cfg.tooltip.suffix ? `<div>${s}: ${c}% ${o}</div>` : `<div>${s}: ${c}%</div>`;
      this.tooltip.html(u).classed("active", !0);
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
    const e = this.calculateTotals();
    this.itemg.transition(this.transition).attr("transform", (n) => this.cfg.orientation !== "horizontal" ? `translate(${this.xScale(n[this.cfg.key])},0)` : `translate(0,${this.xScale(n[this.cfg.key])})`), this.g.selectAll(".chart__bar").transition(this.transition).attr("fill", (n, r) => this.colorElement(n, this.cfg.values[r % this.cfg.values.length])).attr("opacity", (n, r) => r % 2 == 1 && this.hasComparissionData() ? 0.6 : 1).attr("x", (n, r) => this.cfg.orientation !== "horizontal" ? this.xScaleInn(this.cfg.values[r % this.cfg.values.length]) : 0).attr("y", (n, r) => this.cfg.orientation !== "horizontal" ? this.yScale(+n[this.cfg.values[r % this.cfg.values.length]]) : this.xScaleInn(this.cfg.values[r % this.cfg.values.length])).attr("width", (n, r) => {
      const i = this.cfg.values[r % this.cfg.values.length], a = this.calculatePercentage(n[i], e[i]);
      return this.cfg.orientation !== "horizontal" ? this.xScaleInn.bandwidth() : this.yScale(a);
    }).attr("height", (n, r) => this.cfg.orientation !== "horizontal" ? this.cfg.height - this.yScale(+n[this.cfg.values[r % this.cfg.values.length]]) : this.xScaleInn.bandwidth());
  }
  /**
   * Remove chart's elements without data
   */
  exitElements() {
    this.itemg.exit().transition(this.transition).style("opacity", 0).remove();
  }
}
const Fb = {
  name: "D3BarChart",
  extends: ii,
  mounted() {
    this.chart = new zb(
      this.$refs.chart,
      JSON.parse(JSON.stringify(this.datum)),
      this.config
    );
  }
}, Pt = {
  select: cn,
  selectAll: Lr,
  scaleLinear: Zn,
  scaleOrdinal: In,
  max: Ya,
  min: wc,
  sum: b_,
  transition: tr,
  pie: Gw,
  arc: Rc,
  interpolate: Kn,
  easeLinear: Br,
  easePolyIn: Wr,
  easePolyOut: Ur,
  easePoly: Fe,
  easePolyInOut: Fe,
  easeQuadIn: Hr,
  easeQuadOut: jr,
  easeQuad: ze,
  easeQuadInOut: ze,
  easeCubicIn: Vr,
  easeCubicOut: qr,
  easeCubic: Ae,
  easeCubicInOut: Ae,
  easeSinIn: Gr,
  easeSinOut: Yr,
  easeSin: Le,
  easeSinInOut: Le,
  easeExpIn: Xr,
  easeExpOut: Qr,
  easeExp: He,
  easeExpInOut: He,
  easeCircleIn: Jr,
  easeCircleOut: Kr,
  easeCircle: je,
  easeCircleInOut: je,
  easeElasticIn: ni,
  easeElastic: qe,
  easeElasticOut: qe,
  easeElasticInOut: ri,
  easeBackIn: ei,
  easeBackOut: an,
  easeBack: Ve,
  easeBackInOut: Ve,
  easeBounceIn: Zr,
  easeBounce: ae,
  easeBounceOut: ae,
  easeBounceInOut: ti,
  schemeCategory10: li,
  schemeAccent: fi,
  schemeDark2: hi,
  schemePaired: di,
  schemePastel1: pi,
  schemePastel2: gi,
  schemeSet1: mi,
  schemeSet2: yi,
  schemeSet3: vi,
  schemeTableau10: _i
};
class Lb extends ai {
  constructor(e, n, r) {
    super(e, n, r, {
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
    if (this.getDimensions(), this.initChartFrame("sliceschart"), this.cScale = Pt.scaleOrdinal(), this.rScale = Pt.scaleLinear(), this.arc = Pt.arc(), this.pie = Pt.pie().sort(null).value(() => 1).padAngle(this.cfg.radius.padding), this.cfg.radius && this.cfg.radius.inner) {
      const e = this.cfg.radius.outter ? this.cfg.radius.outter : Math.min(this.cfg.width, this.cfg.height) / 2;
      this.cfg.radius.relation = this.cfg.radius.inner ? this.cfg.radius.inner / e : 0;
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
    this.itemg = this.gcenter.selectAll(".chart__slice-group").data(this.pie(this.data), (e) => e.data[this.cfg.key]), this.transition = Pt.transition("t").duration(this.cfg.transition.duration).ease(Pt[this.cfg.transition.ease]);
  }
  /**
  * Set up scales
  */
  setScales() {
    this.cfg.radius.outter = this.cfg.radius && this.cfg.radius.outter ? this.cfg.radius.outter : Math.min(this.cfg.width, this.cfg.height) / 2, this.inRadius = this.cfg.radius && this.cfg.radius.inner ? this.cfg.radius.inner : 0, this.cfg.radius.relation && (this.inRadius = this.cfg.radius.outter * this.cfg.radius.relation), this.arc = Pt.arc().outerRadius(this.cfg.radius.outter).innerRadius(this.inRadius).cornerRadius(this.cfg.radius.round);
    let e = Pt.max(this.data, (n) => n[this.cfg.value]);
    e == 0 && (e = 1), this.rScale.range([this.inRadius, this.cfg.radius.outter]).domain([0, e]), this.cfg.color.scheme && (this.cfg.color.scheme instanceof Array ? this.colorScale = Pt.scaleOrdinal().domain(this.data.map((n) => n[this.cfg.key])).range(this.cfg.color.scheme) : this.colorScale = Pt.scaleOrdinal(Pt[this.cfg.color.scheme]).domain(this.data.map((n) => n[this.cfg.key])));
  }
  /**
  * Add new chart's elements
  */
  enterElements() {
    const e = this.itemg.enter().append("g").attr("class", "chart__slice-group chart__slice-group--sliceschart");
    e.append("path").attr("class", "chart__slice chart__slice--sliceschart").on("mouseover", (n, r) => {
      const i = Pt.sum(this.data, (s) => s.value), a = n.data.value > 0 && i > 0 ? Math.round(n.data.value / i * 100) : 0, o = n.data[this.cfg.key];
      this.centerText.text(`${o}: ${a}%`);
    }).on("mouseout", () => {
      this.centerText.text("");
    }).transition(this.transition).delay((n, r) => r * this.cfg.transition.duration).attrTween("d", (n) => {
      const r = Pt.interpolate(n.startAngle + 0.1, n.endAngle);
      return (i) => (n.endAngle = r(i), this.arc(n));
    }).style("fill", (n) => this.cfg.color.default).style("opacity", 1), e.append("path").attr("class", "chart__slice chart__slice--sliceschart").transition(this.transition).delay((n, r) => r * this.cfg.transition.duration).attrTween("d", (n) => {
      const r = Pt.interpolate(n.startAngle + 0.1, n.endAngle), i = Pt.arc().outerRadius(this.rScale(n.data[this.cfg.value])).innerRadius(this.inRadius).cornerRadius(this.cfg.radius.round);
      return (a) => (n.endAngle = r(a), i(n));
    }).style("fill", (n) => this.colorElement(n.data)).style("pointer-events", "none").style("opacity", 1);
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
  midAngle(e) {
    return e.startAngle + (e.endAngle - e.startAngle) / 2;
  }
  /**
  * Store the displayed angles in _current.
  * Then, interpolate from _current to the new angles.
  * During the transition, _current is updated in-place by d3.interpolate.
  */
  arcTween(e) {
    var n = Pt.interpolate(this._current, e);
    return this._current = n(0), (r) => this.arc(n(r));
  }
}
const Bb = {
  name: "D3SlicesChart",
  extends: ii,
  mounted() {
    this.chart = new Lb(
      this.$refs.chart,
      JSON.parse(JSON.stringify(this.datum)),
      this.config
    );
  }
}, Hb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  D3BarChart: Fb,
  D3SlicesChart: Bb,
  D3Sunburst: ub,
  D3WordsCloud: Ab,
  TipiBarchart: o_,
  TipiCongressLink: Hg,
  TipiCsvDownload: zg,
  TipiDeputy: Hm,
  TipiHeader: Ug,
  TipiIcon: We,
  TipiInitiativeCard: Ds,
  TipiInitiativeMeta: ks,
  TipiLoader: Ns,
  TipiMessage: wg,
  TipiNavbar: fm,
  TipiNeuron: P1,
  TipiResults: mg,
  TipiSplash: e_,
  TipiText: Km,
  TipiTopicCard: L1,
  TipiTopicLink: W1,
  TipiTopicPill: Es,
  TipiTopics: K0,
  TipiTwoCircles: X1,
  Utils: Wh
}, Symbol.toStringTag, { value: "Module" }));
let jb = (t) => {
  Object.values(Hb).forEach((e) => {
    t.use(e);
  });
};
jb.version = "__VERSION__";
export {
  jb as default
};
