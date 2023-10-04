import { openBlock as t, createElementBlock as o, createElementVNode as e } from "vue";
const l = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "12",
  fill: "none",
  viewBox: "0 0 16 12"
}, n = /* @__PURE__ */ e("path", {
  fill: "#2D4252",
  d: "M0 0v.6l8 6.41L16 .6V0H0z"
}, null, -1), c = /* @__PURE__ */ e("path", {
  fill: "#2D4252",
  d: "M8 8.288 3.288 4.475 0 1.84V12h16V1.84l-3.288 2.635L8 8.288z"
}, null, -1), i = [
  n,
  c
];
function s(h, r) {
  return t(), o("svg", l, i);
}
const _ = { render: s };
export {
  _ as default,
  s as render
};
