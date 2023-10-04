import { defineAsyncComponent as As, openBlock as R, createElementBlock as q, normalizeClass as Lt, createBlock as Ct, resolveDynamicComponent as Ps, resolveComponent as _t, createElementVNode as B, createVNode as vt, createCommentVNode as at, createTextVNode as bt, toDisplayString as tt, withCtx as zt, createStaticVNode as Uu, Fragment as te, renderList as ee, withModifiers as Es, renderSlot as Ia, withDirectives as aa, vShow as oa, pushScopeId as Vu, popScopeId as Gu, normalizeStyle as ie, TransitionGroup as Yu } from "vue";
function Xu(t, e) {
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
const $s = (t, e) => {
  const n = t[e];
  return n ? typeof n == "function" ? n() : Promise.resolve(n) : new Promise((r, i) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + e)));
  });
}, pt = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, i] of e)
    n[r] = i;
  return n;
}, Qu = {
  name: "TipiIcon",
  props: {
    icon: String,
    color: String
  },
  computed: {
    svg() {
      let t = "";
      try {
        t = As(() => $s(/* @__PURE__ */ Object.assign({ "../../assets/svg/icon-advanced.svg": () => import("./icon-advanced-9ed36906.mjs"), "../../assets/svg/icon-bell.svg": () => import("./icon-bell-c193bd97.mjs"), "../../assets/svg/icon-birthday.svg": () => import("./icon-birthday-6926937c.mjs"), "../../assets/svg/icon-building.svg": () => import("./icon-building-c60505b0.mjs"), "../../assets/svg/icon-calendar.svg": () => import("./icon-calendar-c92b2d82.mjs"), "../../assets/svg/icon-chevron-down.svg": () => import("./icon-chevron-down-60501edb.mjs"), "../../assets/svg/icon-chevron-left.svg": () => import("./icon-chevron-left-2f5c858a.mjs"), "../../assets/svg/icon-chevron-right.svg": () => import("./icon-chevron-right-c60668fd.mjs"), "../../assets/svg/icon-chevron-up.svg": () => import("./icon-chevron-up-026afdbb.mjs"), "../../assets/svg/icon-clock.svg": () => import("./icon-clock-cf05831d.mjs"), "../../assets/svg/icon-close-menu.svg": () => import("./icon-close-menu-cf042f02.mjs"), "../../assets/svg/icon-close.svg": () => import("./icon-close-35dc4aab.mjs"), "../../assets/svg/icon-conversation.svg": () => import("./icon-conversation-8e69f397.mjs"), "../../assets/svg/icon-denied.svg": () => import("./icon-denied-b5ec3ab9.mjs"), "../../assets/svg/icon-document.svg": () => import("./icon-document-e84bdbb9.mjs"), "../../assets/svg/icon-download.svg": () => import("./icon-download-0b3aa4dd.mjs"), "../../assets/svg/icon-error.svg": () => import("./icon-error-57786260.mjs"), "../../assets/svg/icon-github.svg": () => import("./icon-github-e012bc48.mjs"), "../../assets/svg/icon-hamburger.svg": () => import("./icon-hamburger-7ded227f.mjs"), "../../assets/svg/icon-info.svg": () => import("./icon-info-e824f8bd.mjs"), "../../assets/svg/icon-less.svg": () => import("./icon-less-b8bc539d.mjs"), "../../assets/svg/icon-location.svg": () => import("./icon-location-bf599fff.mjs"), "../../assets/svg/icon-mail.svg": () => import("./icon-mail-4ca3b4ff.mjs"), "../../assets/svg/icon-more.svg": () => import("./icon-more-11affbfc.mjs"), "../../assets/svg/icon-open-blank.svg": () => import("./icon-open-blank-623955d2.mjs"), "../../assets/svg/icon-plus.svg": () => import("./icon-plus-9b0f3de2.mjs"), "../../assets/svg/icon-search.svg": () => import("./icon-search-1d8d18ae.mjs"), "../../assets/svg/icon-success.svg": () => import("./icon-success-20125430.mjs"), "../../assets/svg/icon-twitter.svg": () => import("./icon-twitter-a16171b0.mjs"), "../../assets/svg/icon-upload.svg": () => import("./icon-upload-4c05f0b5.mjs") }), `../../assets/svg/icon-${this.icon}.svg`));
      } catch {
        t = this.icon;
      }
      return t;
    }
  },
  updated() {
    this.color && this.$el.querySelector("svg path") && (this.$el.querySelector("svg path").style.fill = this.color);
  }
};
function Ju(t, e, n, r, i, a) {
  return R(), q("span", {
    class: Lt(["c-icon", `c-icon--type-${n.icon}`])
  }, [
    (R(), Ct(Ps(a.svg)))
  ], 2);
}
const Ue = /* @__PURE__ */ pt(Qu, [["render", Ju]]), Fr = function(t, e) {
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
}, Ku = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  naturalSort: Fr
}, Symbol.toStringTag, { value: "Module" })), Zu = {
  name: "TipiTopicPill",
  components: {
    TipiIcon: Ue
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
      return this.limit && (t = t.slice(0, this.limit)), this.topicsStyles && t.length ? (this.order ? t.slice().sort(Fr) : t.slice()).map((n, r) => this.withLinks ? `
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
}, tl = { class: "c-topics" }, el = ["innerHTML"], nl = {
  key: 0,
  class: "c-topics__topic c-topics__topic__small",
  style: { "background-color": "#2d4252" }
};
function rl(t, e, n, r, i, a) {
  const o = _t("tipi-icon");
  return R(), q("div", tl, [
    B("span", {
      innerHTML: a.getTopics()
    }, null, 8, el),
    n.limit && n.limit < n.topics.length ? (R(), q("div", nl, [
      vt(o, { icon: "more" })
    ])) : at("", !0)
  ]);
}
const Ts = /* @__PURE__ */ pt(Zu, [["render", rl]]);
var il = {};
function al() {
  return il;
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
function ol(t, e) {
  oe(2, arguments);
  var n = Tt(t), r = Tt(e), i = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return i * 12 + a;
}
function sl(t) {
  oe(1, arguments);
  var e = Tt(t);
  return e.setHours(23, 59, 59, 999), e;
}
function cl(t) {
  oe(1, arguments);
  var e = Tt(t), n = e.getMonth();
  return e.setFullYear(e.getFullYear(), n + 1, 0), e.setHours(23, 59, 59, 999), e;
}
function ul(t) {
  oe(1, arguments);
  var e = Tt(t);
  return sl(e).getTime() === cl(e).getTime();
}
function ll(t, e) {
  oe(2, arguments);
  var n = Tt(t), r = Tt(e), i = dr(n, r), a = Math.abs(ol(n, r)), o;
  if (a < 1)
    o = 0;
  else {
    n.getMonth() === 1 && n.getDate() > 27 && n.setDate(30), n.setMonth(n.getMonth() - i * a);
    var s = dr(n, r) === -i;
    ul(Tt(t)) && a === 1 && dr(t, r) === 1 && (s = !1), o = i * (a - Number(s));
  }
  return o === 0 ? 0 : o;
}
function fl(t, e) {
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
}, hl = "trunc";
function dl(t) {
  return t ? go[t] : go[hl];
}
function pl(t, e, n) {
  oe(2, arguments);
  var r = fl(t, e) / 1e3;
  return dl(n == null ? void 0 : n.roundingMethod)(r);
}
var gl = {
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
}, ml = function(e, n, r) {
  var i, a = gl[e];
  return typeof a == "string" ? i = a : n === 1 ? i = a.one : i = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + i : i + " ago" : i;
};
const yl = ml;
function _n(t) {
  return function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.width ? String(e.width) : t.defaultWidth, r = t.formats[n] || t.formats[t.defaultWidth];
    return r;
  };
}
var vl = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, _l = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, bl = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, xl = {
  date: _n({
    formats: vl,
    defaultWidth: "full"
  }),
  time: _n({
    formats: _l,
    defaultWidth: "full"
  }),
  dateTime: _n({
    formats: bl,
    defaultWidth: "full"
  })
};
const wl = xl;
var Sl = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Cl = function(e, n, r, i) {
  return Sl[e];
};
const Ol = Cl;
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
var Ml = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Al = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Pl = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, El = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, $l = {
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
}, Tl = {
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
}, Il = function(e, n) {
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
}, kl = {
  ordinalNumber: Il,
  era: ye({
    values: Ml,
    defaultWidth: "wide"
  }),
  quarter: ye({
    values: Al,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: ye({
    values: Pl,
    defaultWidth: "wide"
  }),
  day: ye({
    values: El,
    defaultWidth: "wide"
  }),
  dayPeriod: ye({
    values: $l,
    defaultWidth: "wide",
    formattingValues: Tl,
    defaultFormattingWidth: "wide"
  })
};
const Nl = kl;
function ve(t) {
  return function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, i = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth], a = e.match(i);
    if (!a)
      return null;
    var o = a[0], s = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth], c = Array.isArray(s) ? Rl(s, function(h) {
      return h.test(o);
    }) : Dl(s, function(h) {
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
function Dl(t, e) {
  for (var n in t)
    if (t.hasOwnProperty(n) && e(t[n]))
      return n;
}
function Rl(t, e) {
  for (var n = 0; n < t.length; n++)
    if (e(t[n]))
      return n;
}
function Is(t) {
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
var Fl = /^(\d+)(th|st|nd|rd)?/i, Ll = /\d+/i, zl = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Bl = {
  any: [/^b/i, /^(a|c)/i]
}, jl = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Wl = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ql = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Hl = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Ul = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Vl = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Gl = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Yl = {
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
}, Xl = {
  ordinalNumber: Is({
    matchPattern: Fl,
    parsePattern: Ll,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: ve({
    matchPatterns: zl,
    defaultMatchWidth: "wide",
    parsePatterns: Bl,
    defaultParseWidth: "any"
  }),
  quarter: ve({
    matchPatterns: jl,
    defaultMatchWidth: "wide",
    parsePatterns: Wl,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: ve({
    matchPatterns: ql,
    defaultMatchWidth: "wide",
    parsePatterns: Hl,
    defaultParseWidth: "any"
  }),
  day: ve({
    matchPatterns: Ul,
    defaultMatchWidth: "wide",
    parsePatterns: Vl,
    defaultParseWidth: "any"
  }),
  dayPeriod: ve({
    matchPatterns: Gl,
    defaultMatchWidth: "any",
    parsePatterns: Yl,
    defaultParseWidth: "any"
  })
};
const Ql = Xl;
var Jl = {
  code: "en-US",
  formatDistance: yl,
  formatLong: wl,
  formatRelative: Ol,
  localize: Nl,
  match: Ql,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Kl = Jl;
function ks(t, e) {
  if (t == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  return t;
}
function Zl(t) {
  return ks({}, t);
}
function mo(t) {
  var e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
}
var yo = 1440, tf = 2520, Oi = 43200, ef = 86400;
function nf(t, e, n) {
  var r, i;
  oe(2, arguments);
  var a = al(), o = (r = (i = n == null ? void 0 : n.locale) !== null && i !== void 0 ? i : a.locale) !== null && r !== void 0 ? r : Kl;
  if (!o.formatDistance)
    throw new RangeError("locale must contain formatDistance property");
  var s = dr(t, e);
  if (isNaN(s))
    throw new RangeError("Invalid time value");
  var c = ks(Zl(n), {
    addSuffix: !!(n != null && n.addSuffix),
    comparison: s
  }), u, p;
  s > 0 ? (u = Tt(e), p = Tt(t)) : (u = Tt(t), p = Tt(e));
  var h = pl(p, u), m = (mo(p) - mo(u)) / 1e3, l = Math.round((h - m) / 60), v;
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
    if (l < tf)
      return o.formatDistance("xDays", 1, c);
    if (l < Oi) {
      var y = Math.round(l / yo);
      return o.formatDistance("xDays", y, c);
    } else if (l < ef)
      return v = Math.round(l / Oi), o.formatDistance("aboutXMonths", v, c);
  }
  if (v = ll(p, u), v < 12) {
    var f = Math.round(l / Oi);
    return o.formatDistance("xMonths", f, c);
  } else {
    var d = v % 12, b = Math.floor(v / 12);
    return d < 3 ? o.formatDistance("aboutXYears", b, c) : d < 9 ? o.formatDistance("overXYears", b, c) : o.formatDistance("almostXYears", b + 1, c);
  }
}
function rf(t, e) {
  return oe(1, arguments), nf(t, Date.now(), e);
}
var af = {
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
}, of = function(e, n, r) {
  var i, a = af[e];
  return typeof a == "string" ? i = a : n === 1 ? i = a.one : i = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "en " + i : "hace " + i : i;
};
const sf = of;
var cf = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, uf = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, lf = {
  full: "{{date}} 'a las' {{time}}",
  long: "{{date}} 'a las' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ff = {
  date: _n({
    formats: cf,
    defaultWidth: "full"
  }),
  time: _n({
    formats: uf,
    defaultWidth: "full"
  }),
  dateTime: _n({
    formats: lf,
    defaultWidth: "full"
  })
};
const hf = ff;
var df = {
  lastWeek: "'el' eeee 'pasado a la' p",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'mañana a la' p",
  nextWeek: "eeee 'a la' p",
  other: "P"
}, pf = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'mañana a las' p",
  nextWeek: "eeee 'a las' p",
  other: "P"
}, gf = function(e, n, r, i) {
  return n.getUTCHours() !== 1 ? pf[e] : df[e];
};
const mf = gf;
var yf = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "después de cristo"]
}, vf = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, _f = {
  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
}, bf = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
  abbreviated: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  wide: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
}, xf = {
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
}, wf = {
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
}, Sf = function(e, n) {
  var r = Number(e);
  return r + "º";
}, Cf = {
  ordinalNumber: Sf,
  era: ye({
    values: yf,
    defaultWidth: "wide"
  }),
  quarter: ye({
    values: vf,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return Number(e) - 1;
    }
  }),
  month: ye({
    values: _f,
    defaultWidth: "wide"
  }),
  day: ye({
    values: bf,
    defaultWidth: "wide"
  }),
  dayPeriod: ye({
    values: xf,
    defaultWidth: "wide",
    formattingValues: wf,
    defaultFormattingWidth: "wide"
  })
};
const Of = Cf;
var Mf = /^(\d+)(º)?/i, Af = /\d+/i, Pf = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
}, Ef = {
  any: [/^ac/i, /^dc/i],
  wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
}, $f = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, Tf = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, If = {
  narrow: /^[efmajsond]/i,
  abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
  wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
}, kf = {
  narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
}, Nf = {
  narrow: /^[dlmjvs]/i,
  short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
  abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
  wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
}, Df = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
}, Rf = {
  narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
  any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
}, Ff = {
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
}, Lf = {
  ordinalNumber: Is({
    matchPattern: Mf,
    parsePattern: Af,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: ve({
    matchPatterns: Pf,
    defaultMatchWidth: "wide",
    parsePatterns: Ef,
    defaultParseWidth: "any"
  }),
  quarter: ve({
    matchPatterns: $f,
    defaultMatchWidth: "wide",
    parsePatterns: Tf,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: ve({
    matchPatterns: If,
    defaultMatchWidth: "wide",
    parsePatterns: kf,
    defaultParseWidth: "any"
  }),
  day: ve({
    matchPatterns: Nf,
    defaultMatchWidth: "wide",
    parsePatterns: Df,
    defaultParseWidth: "any"
  }),
  dayPeriod: ve({
    matchPatterns: Rf,
    defaultMatchWidth: "any",
    parsePatterns: Ff,
    defaultParseWidth: "any"
  })
};
const zf = Lf;
var Bf = {
  code: "es",
  formatDistance: sf,
  formatLong: hf,
  formatRelative: mf,
  localize: Of,
  match: zf,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
const jf = Bf, Wf = {
  name: "TipiInitiativeMeta",
  components: {
    TipiIcon: Ue
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
      const r = rf(new Date(n), {
        locale: jf,
        addSuffix: !0
      });
      return `${t.status} ${r}`;
    }
  }
}, qf = { class: "c-initiative-meta" };
function Hf(t, e, n, r, i, a) {
  const o = _t("tipi-icon");
  return R(), q("div", qf, [
    B("div", {
      class: Lt(
        `c-initiative-meta__status c-initiative-meta__status--${a.getColorByStatus(
          n.initiative.status
        )}`
      )
    }, [
      B("strong", null, [
        vt(o, {
          icon: a.getIcon(n.initiative)
        }, null, 8, ["icon"]),
        bt(" " + tt(a.getStateMessage(n.initiative)), 1)
      ])
    ], 2)
  ]);
}
const Ns = /* @__PURE__ */ pt(Wf, [["render", Hf]]), Uf = {
  name: "TipiInitiativeCard",
  components: {
    TipiIcon: Ue,
    TipiTopicPill: Ts,
    TipiInitiativeMeta: Ns
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
}, Vf = ["id"], Gf = { class: "c-initiative-card__title" }, Yf = { key: 1 }, Xf = {
  key: 0,
  class: "c-initiative-card__authors"
}, Qf = { class: "c-initiative-card__label" }, Jf = ["innerHTML"], Kf = {
  key: 1,
  class: "c-initiative-card__authors"
}, Zf = { class: "c-initiative-card__label" }, th = ["innerHTML"], eh = ["href"], nh = { class: "o-grid" }, rh = { class: "o-grid__col" }, ih = { class: "o-grid__col o-grid__col--right" }, ah = ["href"];
function oh(t, e, n, r, i, a) {
  const o = _t("router-link"), s = _t("tipi-topic-pill"), c = _t("tipi-initiative-meta"), u = _t("tipi-icon");
  return R(), q("div", null, [
    B("article", {
      class: "c-initiative-card",
      id: `initiative-card-${n.initiative.id}`
    }, [
      B("h2", Gf, [
        n.initiative.id ? (R(), Ct(o, {
          key: 0,
          to: { name: "initiative", params: { id: n.initiative.id } }
        }, {
          default: zt(() => [
            bt(tt(n.initiative.title), 1)
          ]),
          _: 1
        }, 8, ["to"])) : (R(), q("span", Yf, tt(n.initiative.title), 1))
      ]),
      a.getDeputies(n.initiative) && n.extendedLayout ? (R(), q("div", Xf, [
        B("h3", Qf, tt(n.metaDeputies), 1),
        B("p", {
          innerHTML: a.getDeputies(n.initiative)
        }, null, 8, Jf)
      ])) : at("", !0),
      a.getAuthors(n.initiative) && n.extendedLayout ? (R(), q("div", Kf, [
        B("h3", Zf, tt(n.metaGroupsOthers), 1),
        B("p", {
          innerHTML: a.getAuthors(n.initiative)
        }, null, 8, th)
      ])) : at("", !0),
      n.initiative.id ? (R(), Ct(o, {
        key: 2,
        to: { name: "initiative", params: { id: n.initiative.id } }
      }, {
        default: zt(({ href: p }) => [
          B("a", {
            href: p,
            target: "_blank"
          }, [
            vt(s, {
              class: "c-initiative-card__topics",
              topicsStyles: n.topicsStyles,
              topics: a.getTopics(n.initiative),
              limit: 3
            }, null, 8, ["topicsStyles", "topics"])
          ], 8, eh)
        ]),
        _: 1
      }, 8, ["to"])) : at("", !0),
      B("div", nh, [
        B("div", rh, [
          vt(c, {
            initiative: n.initiative,
            metaColors: n.metaColors
          }, null, 8, ["initiative", "metaColors"])
        ]),
        B("div", ih, [
          n.initiative.id ? (R(), Ct(o, {
            key: 0,
            to: { name: "initiative", params: { id: n.initiative.id } }
          }, {
            default: zt(({ href: p }) => [
              B("a", {
                href: p,
                target: "_blank"
              }, [
                vt(u, {
                  icon: "open-blank",
                  class: "c-icon--secondary"
                })
              ], 8, ah)
            ]),
            _: 1
          }, 8, ["to"])) : at("", !0)
        ])
      ])
    ], 8, Vf)
  ]);
}
const Ds = /* @__PURE__ */ pt(Uf, [["render", oh]]), sh = {
  name: "TipiLoader",
  props: {
    title: String,
    subtitle: String
  }
}, ch = { class: "c-loader" }, uh = /* @__PURE__ */ Uu('<div class="c-loader__spinner"><div class="c-loader__spinner-dot"></div><div class="c-loader__spinner-dot"></div><div class="c-loader__spinner-dot"></div><div class="c-loader__spinner-dot"></div><div class="c-loader__spinner-dot"></div><div class="c-loader__spinner-dot"></div></div>', 1), lh = {
  key: 0,
  class: "c-loader__text"
}, fh = {
  key: 0,
  class: "c-loader__title"
};
function hh(t, e, n, r, i, a) {
  return R(), q("div", ch, [
    uh,
    n.title || n.subtitle ? (R(), q("div", lh, [
      n.title ? (R(), q("h4", fh, tt(n.title), 1)) : at("", !0),
      bt(" " + tt(n.subtitle), 1)
    ])) : at("", !0)
  ]);
}
const Rs = /* @__PURE__ */ pt(sh, [["render", hh]]);
var mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Xn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Fs(t) {
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
var Ls = { exports: {} }, Mi = { exports: {} }, Ai = { exports: {} }, vo;
function zs() {
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
  }(Ai)), Ai.exports;
}
var Pi = { exports: {} };
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
            var d = a[f], b = v[d], P = parseFloat(b);
            _[d] = isNaN(P) ? 0 : P;
          }
          var T = _.paddingLeft + _.paddingRight, z = _.paddingTop + _.paddingBottom, H = _.marginLeft + _.marginRight, j = _.marginTop + _.marginBottom, N = _.borderLeftWidth + _.borderRightWidth, F = _.borderTopWidth + _.borderBottomWidth, w = y && p, S = n(v.width);
          S !== !1 && (_.width = S + // add padding and border unless it's already including it
          (w ? 0 : T + N));
          var C = n(v.height);
          return C !== !1 && (_.height = C + // add padding and border unless it's already including it
          (w ? 0 : z + F)), _.innerWidth = _.width - (T + N), _.innerHeight = _.height - (z + F), _.outerWidth = _.width + H, _.outerHeight = _.height + j, _;
        }
      }
      return m;
    });
  }(Pi)), Pi.exports;
}
var Ei = { exports: {} }, $i = { exports: {} }, bo;
function dh() {
  return bo || (bo = 1, function(t) {
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
  }($i)), $i.exports;
}
var xo;
function ph() {
  return xo || (xo = 1, function(t) {
    (function(e, n) {
      t.exports ? t.exports = n(
        e,
        dh()
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
            } catch (P) {
              o && o.error("Error parsing " + p + " on " + y.className + ": " + P);
              return;
            }
            var b = new s(y, d);
            _ && _.data(y, c, b);
          });
        });
      }, i;
    });
  }(Ei)), Ei.exports;
}
var Ti = { exports: {} }, wo;
function gh() {
  return wo || (wo = 1, function(t) {
    (function(e, n) {
      t.exports ? t.exports = n(
        zs(),
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
          var b = u[d] || d;
          f[b] = y[d];
        }
      }, h.getPosition = function() {
        var y = getComputedStyle(this.element), f = this.layout._getOption("originLeft"), d = this.layout._getOption("originTop"), b = y[f ? "left" : "right"], P = y[d ? "top" : "bottom"], T = parseFloat(b), z = parseFloat(P), H = this.layout.size;
        b.indexOf("%") != -1 && (T = T / 100 * H.width), P.indexOf("%") != -1 && (z = z / 100 * H.height), T = isNaN(T) ? 0 : T, z = isNaN(z) ? 0 : z, T -= f ? H.paddingLeft : H.paddingRight, z -= d ? H.paddingTop : H.paddingBottom, this.position.x = T, this.position.y = z;
      }, h.layoutPosition = function() {
        var y = this.layout.size, f = {}, d = this.layout._getOption("originLeft"), b = this.layout._getOption("originTop"), P = d ? "paddingLeft" : "paddingRight", T = d ? "left" : "right", z = d ? "right" : "left", H = this.position.x + y[P];
        f[T] = this.getXValue(H), f[z] = "";
        var j = b ? "paddingTop" : "paddingBottom", N = b ? "top" : "bottom", F = b ? "bottom" : "top", w = this.position.y + y[j];
        f[N] = this.getYValue(w), f[F] = "", this.css(f), this.emitEvent("layout", [this]);
      }, h.getXValue = function(y) {
        var f = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !f ? y / this.layout.size.width * 100 + "%" : y + "px";
      }, h.getYValue = function(y) {
        var f = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && f ? y / this.layout.size.height * 100 + "%" : y + "px";
      }, h._transitionTo = function(y, f) {
        this.getPosition();
        var d = this.position.x, b = this.position.y, P = y == this.position.x && f == this.position.y;
        if (this.setPosition(y, f), P && !this.isTransitioning) {
          this.layoutPosition();
          return;
        }
        var T = y - d, z = f - b, H = {};
        H.transform = this.getTranslate(T, z), this.transition({
          to: H,
          onTransitionEnd: {
            transform: this.layoutPosition
          },
          isCleaning: !0
        });
      }, h.getTranslate = function(y, f) {
        var d = this.layout._getOption("originLeft"), b = this.layout._getOption("originTop");
        return y = d ? y : -y, f = b ? f : -f, "translate3d(" + y + "px, " + f + "px, 0)";
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
            var b = f.onEnd[d];
            b.call(this), delete f.onEnd[d];
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
function mh() {
  return So || (So = 1, function(t) {
    (function(e, n) {
      t.exports ? t.exports = n(
        e,
        zs(),
        ka(),
        ph(),
        gh()
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
        var b = a.getQueryElement(f);
        if (!b) {
          s && s.error("Bad element for " + this.constructor.namespace + ": " + (b || f));
          return;
        }
        this.element = b, c && (this.$element = c(this.element)), this.options = a.extend({}, this.constructor.defaults), this.option(d);
        var P = ++p;
        this.element.outlayerGUID = P, h[P] = this, this._create();
        var T = this._getOption("initLayout");
        T && this.layout();
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
        for (var d = this._filterFindItemElements(f), b = this.constructor.Item, P = [], T = 0; T < d.length; T++) {
          var z = d[T], H = new b(z, this);
          P.push(H);
        }
        return P;
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
        var b = this.options[f], P;
        b ? (typeof b == "string" ? P = this.element.querySelector(b) : b instanceof HTMLElement && (P = b), this[f] = P ? i(P)[d] : b) : this[f] = 0;
      }, l.layoutItems = function(f, d) {
        f = this._getItemsForLayout(f), this._layoutItems(f, d), this._postLayout();
      }, l._getItemsForLayout = function(f) {
        return f.filter(function(d) {
          return !d.isIgnored;
        });
      }, l._layoutItems = function(f, d) {
        if (this._emitCompleteOnItems("layout", f), !(!f || !f.length)) {
          var b = [];
          f.forEach(function(P) {
            var T = this._getItemLayoutPosition(P);
            T.item = P, T.isInstant = d || P.isLayoutInstant, b.push(T);
          }, this), this._processLayoutQueue(b);
        }
      }, l._getItemLayoutPosition = function() {
        return {
          x: 0,
          y: 0
        };
      }, l._processLayoutQueue = function(f) {
        this.updateStagger(), f.forEach(function(d, b) {
          this._positionItem(d.item, d.x, d.y, d.isInstant, b);
        }, this);
      }, l.updateStagger = function() {
        var f = this.options.stagger;
        if (f == null) {
          this.stagger = 0;
          return;
        }
        return this.stagger = y(f), this.stagger;
      }, l._positionItem = function(f, d, b, P, T) {
        P ? f.goTo(d, b) : (f.stagger(T * this.stagger), f.moveTo(d, b));
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
          var b = this.size;
          b.isBorderBox && (f += d ? b.paddingLeft + b.paddingRight + b.borderLeftWidth + b.borderRightWidth : b.paddingBottom + b.paddingTop + b.borderTopWidth + b.borderBottomWidth), f = Math.max(f, 0), this.element.style[d ? "width" : "height"] = f + "px";
        }
      }, l._emitCompleteOnItems = function(f, d) {
        var b = this;
        function P() {
          b.dispatchEvent(f + "Complete", null, [d]);
        }
        var T = d.length;
        if (!d || !T) {
          P();
          return;
        }
        var z = 0;
        function H() {
          z++, z == T && P();
        }
        d.forEach(function(j) {
          j.once(f, H);
        });
      }, l.dispatchEvent = function(f, d, b) {
        var P = d ? [d].concat(b) : b;
        if (this.emitEvent(f, P), c)
          if (this.$element = this.$element || c(this.element), d) {
            var T = c.Event(d);
            T.type = f, this.$element.trigger(T, b);
          } else
            this.$element.trigger(f, b);
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
        var d = f.getBoundingClientRect(), b = this._boundingRect, P = i(f), T = {
          left: d.left - b.left - P.marginLeft,
          top: d.top - b.top - P.marginTop,
          right: b.right - d.right - P.marginRight,
          bottom: b.bottom - d.bottom - P.marginBottom
        };
        return T;
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
          var b = this.items.slice(0);
          this.items = d.concat(b), this._resetLayout(), this._manageStamps(), this.layoutItems(d, !0), this.reveal(d), this.layoutItems(b);
        }
      }, l.reveal = function(f) {
        if (this._emitCompleteOnItems("reveal", f), !(!f || !f.length)) {
          var d = this.updateStagger();
          f.forEach(function(b, P) {
            b.stagger(P * d), b.reveal();
          });
        }
      }, l.hide = function(f) {
        if (this._emitCompleteOnItems("hide", f), !(!f || !f.length)) {
          var d = this.updateStagger();
          f.forEach(function(b, P) {
            b.stagger(P * d), b.hide();
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
          var b = this.items[d];
          if (b.element == f)
            return b;
        }
      }, l.getItems = function(f) {
        f = a.makeArray(f);
        var d = [];
        return f.forEach(function(b) {
          var P = this.getItem(b);
          P && d.push(P);
        }, this), d;
      }, l.remove = function(f) {
        var d = this.getItems(f);
        this._emitCompleteOnItems("remove", d), !(!d || !d.length) && d.forEach(function(b) {
          b.remove(), a.removeFrom(this.items, b);
        }, this);
      }, l.destroy = function() {
        var f = this.element.style;
        f.height = "", f.position = "", f.width = "", this.items.forEach(function(b) {
          b.destroy();
        }), this.unbindResize();
        var d = this.element.outlayerGUID;
        delete h[d], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace);
      }, m.data = function(f) {
        f = a.getQueryElement(f);
        var d = f && f.outlayerGUID;
        return d && h[d];
      }, m.create = function(f, d) {
        var b = v(m);
        return b.defaults = a.extend({}, m.defaults), a.extend(b.defaults, d), b.compatOptions = a.extend({}, m.compatOptions), b.namespace = f, b.data = m.data, b.Item = v(o), a.htmlInit(b, f), c && c.bridget && c.bridget(f, b), b;
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
        var d = f.match(/(^\d*\.?\d*)(\w*)/), b = d && d[1], P = d && d[2];
        if (!b.length)
          return 0;
        b = parseFloat(b);
        var T = _[P] || 1;
        return b * T;
      }
      return m.Item = o, m;
    });
  }(Mi)), Mi.exports;
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
      mh(),
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
})(Ls);
var yh = Ls.exports;
const vh = /* @__PURE__ */ Xn(yh), _h = {
  name: "TipiResults",
  components: {
    TipiInitiativeCard: Ds,
    TipiLoader: Rs
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
      return !this.loadingResults && this.queryMeta.page < this.queryMeta.pages;
    },
    nextResultsLabel: function() {
      let t = this.queryMeta.page * this.queryMeta.per_page + 1, e = t + this.queryMeta.per_page - 1;
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
      t && new vh(t, {
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
}, bh = {
  key: 1,
  class: "o-masonry o-grid"
}, xh = {
  key: 2,
  class: "o-grid o-grid--center"
}, wh = { class: "o-grid__col" };
function Sh(t, e, n, r, i, a) {
  const o = _t("tipi-loader"), s = _t("tipi-initiative-card");
  return R(), q("div", null, [
    this.loadingResults ? (R(), Ct(o, {
      key: 0,
      title: "Cargando resultados",
      subtitle: "Puede llevar algun tiempo"
    })) : at("", !0),
    this.initiatives && this.initiatives.length && !this.loadingResults ? (R(), q("section", bh, [
      (R(!0), q(te, null, ee(this.initiatives, (c, u) => (R(), q("div", {
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
    this.$listeners.loadMore && a.isMoreResults ? (R(), q("div", xh, [
      B("div", wh, [
        B("a", {
          href: "#",
          class: "c-button c-button--secondary",
          onClick: e[0] || (e[0] = Es((...c) => a.loadMore && a.loadMore(...c), ["prevent"]))
        }, " Cargar más " + tt(a.nextResultsLabel), 1)
      ])
    ])) : at("", !0)
  ]);
}
const Ch = /* @__PURE__ */ pt(_h, [["render", Sh]]), Oh = {
  name: "TipiMessage",
  components: {
    TipiIcon: Ue
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
}, Mh = { class: "c-message__wrapper" };
function Ah(t, e, n, r, i, a) {
  const o = _t("tipi-icon");
  return R(), q("div", {
    class: Lt(`c-message c-message--${n.type} ${n.icon ? "c-message--icon" : ""}`)
  }, [
    B("div", Mh, [
      n.icon ? (R(), Ct(o, {
        key: 0,
        class: "c-message__icon",
        icon: n.type
      }, null, 8, ["icon"])) : at("", !0),
      Ia(t.$slots, "default")
    ])
  ], 2);
}
const Ph = /* @__PURE__ */ pt(Oh, [["render", Ah]]);
var Bs = {};
const Eh = {}, $h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Eh
}, Symbol.toStringTag, { value: "Module" })), js = /* @__PURE__ */ Fs($h);
var Ii, Co;
function Th() {
  if (Co)
    return Ii;
  Co = 1;
  var t = "Expected a function", e = "__lodash_hash_undefined__", n = 1 / 0, r = "[object Function]", i = "[object GeneratorFunction]", a = "[object Symbol]", o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, s = /^\w*$/, c = /^\./, u = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, p = /[\\^$.*+?()[\]{}|]/g, h = /\\(\\)?/g, m = /^\[object .+?Constructor\]$/, l = typeof mt == "object" && mt && mt.Object === Object && mt, v = typeof self == "object" && self && self.Object === Object && self, _ = l || v || Function("return this")();
  function y(O, k) {
    return O == null ? void 0 : O[k];
  }
  function f(O) {
    var k = !1;
    if (O != null && typeof O.toString != "function")
      try {
        k = !!(O + "");
      } catch {
      }
    return k;
  }
  var d = Array.prototype, b = Function.prototype, P = Object.prototype, T = _["__core-js_shared__"], z = function() {
    var O = /[^.]+$/.exec(T && T.keys && T.keys.IE_PROTO || "");
    return O ? "Symbol(src)_1." + O : "";
  }(), H = b.toString, j = P.hasOwnProperty, N = P.toString, F = RegExp(
    "^" + H.call(j).replace(p, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), w = _.Symbol, S = d.splice, C = Vt(_, "Map"), E = Vt(Object, "create"), L = w ? w.prototype : void 0, W = L ? L.toString : void 0;
  function G(O) {
    var k = -1, U = O ? O.length : 0;
    for (this.clear(); ++k < U; ) {
      var ot = O[k];
      this.set(ot[0], ot[1]);
    }
  }
  function K() {
    this.__data__ = E ? E(null) : {};
  }
  function et(O) {
    return this.has(O) && delete this.__data__[O];
  }
  function Q(O) {
    var k = this.__data__;
    if (E) {
      var U = k[O];
      return U === e ? void 0 : U;
    }
    return j.call(k, O) ? k[O] : void 0;
  }
  function lt(O) {
    var k = this.__data__;
    return E ? k[O] !== void 0 : j.call(k, O);
  }
  function st(O, k) {
    var U = this.__data__;
    return U[O] = E && k === void 0 ? e : k, this;
  }
  G.prototype.clear = K, G.prototype.delete = et, G.prototype.get = Q, G.prototype.has = lt, G.prototype.set = st;
  function nt(O) {
    var k = -1, U = O ? O.length : 0;
    for (this.clear(); ++k < U; ) {
      var ot = O[k];
      this.set(ot[0], ot[1]);
    }
  }
  function Z() {
    this.__data__ = [];
  }
  function ut(O) {
    var k = this.__data__, U = kt(k, O);
    if (U < 0)
      return !1;
    var ot = k.length - 1;
    return U == ot ? k.pop() : S.call(k, U, 1), !0;
  }
  function ct(O) {
    var k = this.__data__, U = kt(k, O);
    return U < 0 ? void 0 : k[U][1];
  }
  function J(O) {
    return kt(this.__data__, O) > -1;
  }
  function ft(O, k) {
    var U = this.__data__, ot = kt(U, O);
    return ot < 0 ? U.push([O, k]) : U[ot][1] = k, this;
  }
  nt.prototype.clear = Z, nt.prototype.delete = ut, nt.prototype.get = ct, nt.prototype.has = J, nt.prototype.set = ft;
  function ht(O) {
    var k = -1, U = O ? O.length : 0;
    for (this.clear(); ++k < U; ) {
      var ot = O[k];
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
  function Ot(O) {
    return Ut(this, O).delete(O);
  }
  function ce(O) {
    return Ut(this, O).get(O);
  }
  function ue(O) {
    return Ut(this, O).has(O);
  }
  function At(O, k) {
    return Ut(this, O).set(O, k), this;
  }
  ht.prototype.clear = yt, ht.prototype.delete = Ot, ht.prototype.get = ce, ht.prototype.has = ue, ht.prototype.set = At;
  function kt(O, k) {
    for (var U = O.length; U--; )
      if (Se(O[U][0], k))
        return U;
    return -1;
  }
  function Yt(O, k) {
    k = le(k, O) ? [k] : Ge(k);
    for (var U = 0, ot = k.length; O != null && U < ot; )
      O = O[Ye(k[U++])];
    return U && U == ot ? O : void 0;
  }
  function jt(O) {
    if (!D(O) || Nt(O))
      return !1;
    var k = A(O) || f(O) ? F : m;
    return k.test(Te(O));
  }
  function Ht(O) {
    if (typeof O == "string")
      return O;
    if (rt(O))
      return W ? W.call(O) : "";
    var k = O + "";
    return k == "0" && 1 / O == -n ? "-0" : k;
  }
  function Ge(O) {
    return Ie(O) ? O : fe(O);
  }
  function Ut(O, k) {
    var U = O.__data__;
    return ne(k) ? U[typeof k == "string" ? "string" : "hash"] : U.map;
  }
  function Vt(O, k) {
    var U = y(O, k);
    return jt(U) ? U : void 0;
  }
  function le(O, k) {
    if (Ie(O))
      return !1;
    var U = typeof O;
    return U == "number" || U == "symbol" || U == "boolean" || O == null || rt(O) ? !0 : s.test(O) || !o.test(O) || k != null && O in Object(k);
  }
  function ne(O) {
    var k = typeof O;
    return k == "string" || k == "number" || k == "symbol" || k == "boolean" ? O !== "__proto__" : O === null;
  }
  function Nt(O) {
    return !!z && z in O;
  }
  var fe = he(function(O) {
    O = Dt(O);
    var k = [];
    return c.test(O) && k.push(""), O.replace(u, function(U, ot, x, $) {
      k.push(x ? $.replace(h, "$1") : ot || U);
    }), k;
  });
  function Ye(O) {
    if (typeof O == "string" || rt(O))
      return O;
    var k = O + "";
    return k == "0" && 1 / O == -n ? "-0" : k;
  }
  function Te(O) {
    if (O != null) {
      try {
        return H.call(O);
      } catch {
      }
      try {
        return O + "";
      } catch {
      }
    }
    return "";
  }
  function he(O, k) {
    if (typeof O != "function" || k && typeof k != "function")
      throw new TypeError(t);
    var U = function() {
      var ot = arguments, x = k ? k.apply(this, ot) : ot[0], $ = U.cache;
      if ($.has(x))
        return $.get(x);
      var Y = O.apply(this, ot);
      return U.cache = $.set(x, Y), Y;
    };
    return U.cache = new (he.Cache || ht)(), U;
  }
  he.Cache = ht;
  function Se(O, k) {
    return O === k || O !== O && k !== k;
  }
  var Ie = Array.isArray;
  function A(O) {
    var k = D(O) ? N.call(O) : "";
    return k == r || k == i;
  }
  function D(O) {
    var k = typeof O;
    return !!O && (k == "object" || k == "function");
  }
  function X(O) {
    return !!O && typeof O == "object";
  }
  function rt(O) {
    return typeof O == "symbol" || X(O) && N.call(O) == a;
  }
  function Dt(O) {
    return O == null ? "" : Ht(O);
  }
  function Mt(O, k, U) {
    var ot = O == null ? void 0 : Yt(O, k);
    return ot === void 0 ? U : ot;
  }
  return Ii = Mt, Ii;
}
var ki, Oo;
function Ih() {
  if (Oo)
    return ki;
  Oo = 1;
  var t = 9007199254740991, e = "[object Arguments]", n = "[object Function]", r = "[object GeneratorFunction]", i = typeof mt == "object" && mt && mt.Object === Object && mt, a = typeof self == "object" && self && self.Object === Object && self, o = i || a || Function("return this")();
  function s(N, F) {
    for (var w = -1, S = F.length, C = N.length; ++w < S; )
      N[C + w] = F[w];
    return N;
  }
  var c = Object.prototype, u = c.hasOwnProperty, p = c.toString, h = o.Symbol, m = c.propertyIsEnumerable, l = h ? h.isConcatSpreadable : void 0;
  function v(N, F, w, S, C) {
    var E = -1, L = N.length;
    for (w || (w = _), C || (C = []); ++E < L; ) {
      var W = N[E];
      F > 0 && w(W) ? F > 1 ? v(W, F - 1, w, S, C) : s(C, W) : S || (C[C.length] = W);
    }
    return C;
  }
  function _(N) {
    return d(N) || f(N) || !!(l && N && N[l]);
  }
  function y(N) {
    var F = N ? N.length : 0;
    return F ? v(N, 1) : [];
  }
  function f(N) {
    return P(N) && u.call(N, "callee") && (!m.call(N, "callee") || p.call(N) == e);
  }
  var d = Array.isArray;
  function b(N) {
    return N != null && z(N.length) && !T(N);
  }
  function P(N) {
    return j(N) && b(N);
  }
  function T(N) {
    var F = H(N) ? p.call(N) : "";
    return F == n || F == r;
  }
  function z(N) {
    return typeof N == "number" && N > -1 && N % 1 == 0 && N <= t;
  }
  function H(N) {
    var F = typeof N;
    return !!N && (F == "object" || F == "function");
  }
  function j(N) {
    return !!N && typeof N == "object";
  }
  return ki = y, ki;
}
var Ni, Mo;
function kh() {
  if (Mo)
    return Ni;
  Mo = 1;
  var t = 200, e = "__lodash_hash_undefined__", n = 1 / 0, r = "[object Function]", i = "[object GeneratorFunction]", a = /[\\^$.*+?()[\]{}|]/g, o = /^\[object .+?Constructor\]$/, s = typeof mt == "object" && mt && mt.Object === Object && mt, c = typeof self == "object" && self && self.Object === Object && self, u = s || c || Function("return this")();
  function p(A, D) {
    var X = A ? A.length : 0;
    return !!X && l(A, D, 0) > -1;
  }
  function h(A, D, X) {
    for (var rt = -1, Dt = A ? A.length : 0; ++rt < Dt; )
      if (X(D, A[rt]))
        return !0;
    return !1;
  }
  function m(A, D, X, rt) {
    for (var Dt = A.length, Mt = X + (rt ? 1 : -1); rt ? Mt-- : ++Mt < Dt; )
      if (D(A[Mt], Mt, A))
        return Mt;
    return -1;
  }
  function l(A, D, X) {
    if (D !== D)
      return m(A, v, X);
    for (var rt = X - 1, Dt = A.length; ++rt < Dt; )
      if (A[rt] === D)
        return rt;
    return -1;
  }
  function v(A) {
    return A !== A;
  }
  function _(A, D) {
    return A.has(D);
  }
  function y(A, D) {
    return A == null ? void 0 : A[D];
  }
  function f(A) {
    var D = !1;
    if (A != null && typeof A.toString != "function")
      try {
        D = !!(A + "");
      } catch {
      }
    return D;
  }
  function d(A) {
    var D = -1, X = Array(A.size);
    return A.forEach(function(rt) {
      X[++D] = rt;
    }), X;
  }
  var b = Array.prototype, P = Function.prototype, T = Object.prototype, z = u["__core-js_shared__"], H = function() {
    var A = /[^.]+$/.exec(z && z.keys && z.keys.IE_PROTO || "");
    return A ? "Symbol(src)_1." + A : "";
  }(), j = P.toString, N = T.hasOwnProperty, F = T.toString, w = RegExp(
    "^" + j.call(N).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), S = b.splice, C = le(u, "Map"), E = le(u, "Set"), L = le(Object, "create");
  function W(A) {
    var D = -1, X = A ? A.length : 0;
    for (this.clear(); ++D < X; ) {
      var rt = A[D];
      this.set(rt[0], rt[1]);
    }
  }
  function G() {
    this.__data__ = L ? L(null) : {};
  }
  function K(A) {
    return this.has(A) && delete this.__data__[A];
  }
  function et(A) {
    var D = this.__data__;
    if (L) {
      var X = D[A];
      return X === e ? void 0 : X;
    }
    return N.call(D, A) ? D[A] : void 0;
  }
  function Q(A) {
    var D = this.__data__;
    return L ? D[A] !== void 0 : N.call(D, A);
  }
  function lt(A, D) {
    var X = this.__data__;
    return X[A] = L && D === void 0 ? e : D, this;
  }
  W.prototype.clear = G, W.prototype.delete = K, W.prototype.get = et, W.prototype.has = Q, W.prototype.set = lt;
  function st(A) {
    var D = -1, X = A ? A.length : 0;
    for (this.clear(); ++D < X; ) {
      var rt = A[D];
      this.set(rt[0], rt[1]);
    }
  }
  function nt() {
    this.__data__ = [];
  }
  function Z(A) {
    var D = this.__data__, X = jt(D, A);
    if (X < 0)
      return !1;
    var rt = D.length - 1;
    return X == rt ? D.pop() : S.call(D, X, 1), !0;
  }
  function ut(A) {
    var D = this.__data__, X = jt(D, A);
    return X < 0 ? void 0 : D[X][1];
  }
  function ct(A) {
    return jt(this.__data__, A) > -1;
  }
  function J(A, D) {
    var X = this.__data__, rt = jt(X, A);
    return rt < 0 ? X.push([A, D]) : X[rt][1] = D, this;
  }
  st.prototype.clear = nt, st.prototype.delete = Z, st.prototype.get = ut, st.prototype.has = ct, st.prototype.set = J;
  function ft(A) {
    var D = -1, X = A ? A.length : 0;
    for (this.clear(); ++D < X; ) {
      var rt = A[D];
      this.set(rt[0], rt[1]);
    }
  }
  function ht() {
    this.__data__ = {
      hash: new W(),
      map: new (C || st)(),
      string: new W()
    };
  }
  function yt(A) {
    return Vt(this, A).delete(A);
  }
  function Ot(A) {
    return Vt(this, A).get(A);
  }
  function ce(A) {
    return Vt(this, A).has(A);
  }
  function ue(A, D) {
    return Vt(this, A).set(A, D), this;
  }
  ft.prototype.clear = ht, ft.prototype.delete = yt, ft.prototype.get = Ot, ft.prototype.has = ce, ft.prototype.set = ue;
  function At(A) {
    var D = -1, X = A ? A.length : 0;
    for (this.__data__ = new ft(); ++D < X; )
      this.add(A[D]);
  }
  function kt(A) {
    return this.__data__.set(A, e), this;
  }
  function Yt(A) {
    return this.__data__.has(A);
  }
  At.prototype.add = At.prototype.push = kt, At.prototype.has = Yt;
  function jt(A, D) {
    for (var X = A.length; X--; )
      if (Te(A[X][0], D))
        return X;
    return -1;
  }
  function Ht(A) {
    if (!Se(A) || Nt(A))
      return !1;
    var D = he(A) || f(A) ? w : o;
    return D.test(fe(A));
  }
  function Ge(A, D, X) {
    var rt = -1, Dt = p, Mt = A.length, O = !0, k = [], U = k;
    if (X)
      O = !1, Dt = h;
    else if (Mt >= t) {
      var ot = D ? null : Ut(A);
      if (ot)
        return d(ot);
      O = !1, Dt = _, U = new At();
    } else
      U = D ? [] : k;
    t:
      for (; ++rt < Mt; ) {
        var x = A[rt], $ = D ? D(x) : x;
        if (x = X || x !== 0 ? x : 0, O && $ === $) {
          for (var Y = U.length; Y--; )
            if (U[Y] === $)
              continue t;
          D && U.push($), k.push(x);
        } else
          Dt(U, $, X) || (U !== k && U.push($), k.push(x));
      }
    return k;
  }
  var Ut = E && 1 / d(new E([, -0]))[1] == n ? function(A) {
    return new E(A);
  } : Ie;
  function Vt(A, D) {
    var X = A.__data__;
    return ne(D) ? X[typeof D == "string" ? "string" : "hash"] : X.map;
  }
  function le(A, D) {
    var X = y(A, D);
    return Ht(X) ? X : void 0;
  }
  function ne(A) {
    var D = typeof A;
    return D == "string" || D == "number" || D == "symbol" || D == "boolean" ? A !== "__proto__" : A === null;
  }
  function Nt(A) {
    return !!H && H in A;
  }
  function fe(A) {
    if (A != null) {
      try {
        return j.call(A);
      } catch {
      }
      try {
        return A + "";
      } catch {
      }
    }
    return "";
  }
  function Ye(A) {
    return A && A.length ? Ge(A) : [];
  }
  function Te(A, D) {
    return A === D || A !== A && D !== D;
  }
  function he(A) {
    var D = Se(A) ? F.call(A) : "";
    return D == r || D == i;
  }
  function Se(A) {
    var D = typeof A;
    return !!A && (D == "object" || D == "function");
  }
  function Ie() {
  }
  return Ni = Ye, Ni;
}
var Di, Ao;
function Nh() {
  if (Ao)
    return Di;
  Ao = 1;
  var t = "Expected a function", e = "__lodash_hash_undefined__", n = 1 / 0, r = 9007199254740991, i = "[object Function]", a = "[object GeneratorFunction]", o = "[object Symbol]", s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, c = /^\w*$/, u = /^\./, p = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, h = /[\\^$.*+?()[\]{}|]/g, m = /\\(\\)?/g, l = /^\[object .+?Constructor\]$/, v = /^(?:0|[1-9]\d*)$/, _ = typeof mt == "object" && mt && mt.Object === Object && mt, y = typeof self == "object" && self && self.Object === Object && self, f = _ || y || Function("return this")();
  function d(x, $) {
    return x == null ? void 0 : x[$];
  }
  function b(x) {
    var $ = !1;
    if (x != null && typeof x.toString != "function")
      try {
        $ = !!(x + "");
      } catch {
      }
    return $;
  }
  var P = Array.prototype, T = Function.prototype, z = Object.prototype, H = f["__core-js_shared__"], j = function() {
    var x = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "");
    return x ? "Symbol(src)_1." + x : "";
  }(), N = T.toString, F = z.hasOwnProperty, w = z.toString, S = RegExp(
    "^" + N.call(F).replace(h, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), C = f.Symbol, E = P.splice, L = Nt(f, "Map"), W = Nt(Object, "create"), G = C ? C.prototype : void 0, K = G ? G.toString : void 0;
  function et(x) {
    var $ = -1, Y = x ? x.length : 0;
    for (this.clear(); ++$ < Y; ) {
      var dt = x[$];
      this.set(dt[0], dt[1]);
    }
  }
  function Q() {
    this.__data__ = W ? W(null) : {};
  }
  function lt(x) {
    return this.has(x) && delete this.__data__[x];
  }
  function st(x) {
    var $ = this.__data__;
    if (W) {
      var Y = $[x];
      return Y === e ? void 0 : Y;
    }
    return F.call($, x) ? $[x] : void 0;
  }
  function nt(x) {
    var $ = this.__data__;
    return W ? $[x] !== void 0 : F.call($, x);
  }
  function Z(x, $) {
    var Y = this.__data__;
    return Y[x] = W && $ === void 0 ? e : $, this;
  }
  et.prototype.clear = Q, et.prototype.delete = lt, et.prototype.get = st, et.prototype.has = nt, et.prototype.set = Z;
  function ut(x) {
    var $ = -1, Y = x ? x.length : 0;
    for (this.clear(); ++$ < Y; ) {
      var dt = x[$];
      this.set(dt[0], dt[1]);
    }
  }
  function ct() {
    this.__data__ = [];
  }
  function J(x) {
    var $ = this.__data__, Y = Ht($, x);
    if (Y < 0)
      return !1;
    var dt = $.length - 1;
    return Y == dt ? $.pop() : E.call($, Y, 1), !0;
  }
  function ft(x) {
    var $ = this.__data__, Y = Ht($, x);
    return Y < 0 ? void 0 : $[Y][1];
  }
  function ht(x) {
    return Ht(this.__data__, x) > -1;
  }
  function yt(x, $) {
    var Y = this.__data__, dt = Ht(Y, x);
    return dt < 0 ? Y.push([x, $]) : Y[dt][1] = $, this;
  }
  ut.prototype.clear = ct, ut.prototype.delete = J, ut.prototype.get = ft, ut.prototype.has = ht, ut.prototype.set = yt;
  function Ot(x) {
    var $ = -1, Y = x ? x.length : 0;
    for (this.clear(); ++$ < Y; ) {
      var dt = x[$];
      this.set(dt[0], dt[1]);
    }
  }
  function ce() {
    this.__data__ = {
      hash: new et(),
      map: new (L || ut)(),
      string: new et()
    };
  }
  function ue(x) {
    return ne(this, x).delete(x);
  }
  function At(x) {
    return ne(this, x).get(x);
  }
  function kt(x) {
    return ne(this, x).has(x);
  }
  function Yt(x, $) {
    return ne(this, x).set(x, $), this;
  }
  Ot.prototype.clear = ce, Ot.prototype.delete = ue, Ot.prototype.get = At, Ot.prototype.has = kt, Ot.prototype.set = Yt;
  function jt(x, $, Y) {
    var dt = x[$];
    (!(F.call(x, $) && X(dt, Y)) || Y === void 0 && !($ in x)) && (x[$] = Y);
  }
  function Ht(x, $) {
    for (var Y = x.length; Y--; )
      if (X(x[Y][0], $))
        return Y;
    return -1;
  }
  function Ge(x) {
    if (!Mt(x) || he(x))
      return !1;
    var $ = Dt(x) || b(x) ? S : l;
    return $.test(A(x));
  }
  function Ut(x, $, Y, dt) {
    if (!Mt(x))
      return x;
    $ = Ye($, x) ? [$] : le($);
    for (var Xt = -1, de = $.length, un = de - 1, Ce = x; Ce != null && ++Xt < de; ) {
      var Xe = Ie($[Xt]), Qt = Y;
      if (Xt != un) {
        var kn = Ce[Xe];
        Qt = dt ? dt(kn, Xe, Ce) : void 0, Qt === void 0 && (Qt = Mt(kn) ? kn : fe($[Xt + 1]) ? [] : {});
      }
      jt(Ce, Xe, Qt), Ce = Ce[Xe];
    }
    return x;
  }
  function Vt(x) {
    if (typeof x == "string")
      return x;
    if (k(x))
      return K ? K.call(x) : "";
    var $ = x + "";
    return $ == "0" && 1 / x == -n ? "-0" : $;
  }
  function le(x) {
    return rt(x) ? x : Se(x);
  }
  function ne(x, $) {
    var Y = x.__data__;
    return Te($) ? Y[typeof $ == "string" ? "string" : "hash"] : Y.map;
  }
  function Nt(x, $) {
    var Y = d(x, $);
    return Ge(Y) ? Y : void 0;
  }
  function fe(x, $) {
    return $ = $ ?? r, !!$ && (typeof x == "number" || v.test(x)) && x > -1 && x % 1 == 0 && x < $;
  }
  function Ye(x, $) {
    if (rt(x))
      return !1;
    var Y = typeof x;
    return Y == "number" || Y == "symbol" || Y == "boolean" || x == null || k(x) ? !0 : c.test(x) || !s.test(x) || $ != null && x in Object($);
  }
  function Te(x) {
    var $ = typeof x;
    return $ == "string" || $ == "number" || $ == "symbol" || $ == "boolean" ? x !== "__proto__" : x === null;
  }
  function he(x) {
    return !!j && j in x;
  }
  var Se = D(function(x) {
    x = U(x);
    var $ = [];
    return u.test(x) && $.push(""), x.replace(p, function(Y, dt, Xt, de) {
      $.push(Xt ? de.replace(m, "$1") : dt || Y);
    }), $;
  });
  function Ie(x) {
    if (typeof x == "string" || k(x))
      return x;
    var $ = x + "";
    return $ == "0" && 1 / x == -n ? "-0" : $;
  }
  function A(x) {
    if (x != null) {
      try {
        return N.call(x);
      } catch {
      }
      try {
        return x + "";
      } catch {
      }
    }
    return "";
  }
  function D(x, $) {
    if (typeof x != "function" || $ && typeof $ != "function")
      throw new TypeError(t);
    var Y = function() {
      var dt = arguments, Xt = $ ? $.apply(this, dt) : dt[0], de = Y.cache;
      if (de.has(Xt))
        return de.get(Xt);
      var un = x.apply(this, dt);
      return Y.cache = de.set(Xt, un), un;
    };
    return Y.cache = new (D.Cache || Ot)(), Y;
  }
  D.Cache = Ot;
  function X(x, $) {
    return x === $ || x !== x && $ !== $;
  }
  var rt = Array.isArray;
  function Dt(x) {
    var $ = Mt(x) ? w.call(x) : "";
    return $ == i || $ == a;
  }
  function Mt(x) {
    var $ = typeof x;
    return !!x && ($ == "object" || $ == "function");
  }
  function O(x) {
    return !!x && typeof x == "object";
  }
  function k(x) {
    return typeof x == "symbol" || O(x) && w.call(x) == o;
  }
  function U(x) {
    return x == null ? "" : Vt(x);
  }
  function ot(x, $, Y) {
    return x == null ? x : Ut(x, $, Y);
  }
  return Di = ot, Di;
}
var Fn = { exports: {} };
Fn.exports;
var Po;
function Dh() {
  return Po || (Po = 1, function(t, e) {
    var n = 200, r = "__lodash_hash_undefined__", i = 9007199254740991, a = "[object Arguments]", o = "[object Array]", s = "[object Boolean]", c = "[object Date]", u = "[object Error]", p = "[object Function]", h = "[object GeneratorFunction]", m = "[object Map]", l = "[object Number]", v = "[object Object]", _ = "[object Promise]", y = "[object RegExp]", f = "[object Set]", d = "[object String]", b = "[object Symbol]", P = "[object WeakMap]", T = "[object ArrayBuffer]", z = "[object DataView]", H = "[object Float32Array]", j = "[object Float64Array]", N = "[object Int8Array]", F = "[object Int16Array]", w = "[object Int32Array]", S = "[object Uint8Array]", C = "[object Uint8ClampedArray]", E = "[object Uint16Array]", L = "[object Uint32Array]", W = /[\\^$.*+?()[\]{}|]/g, G = /\w*$/, K = /^\[object .+?Constructor\]$/, et = /^(?:0|[1-9]\d*)$/, Q = {};
    Q[a] = Q[o] = Q[T] = Q[z] = Q[s] = Q[c] = Q[H] = Q[j] = Q[N] = Q[F] = Q[w] = Q[m] = Q[l] = Q[v] = Q[y] = Q[f] = Q[d] = Q[b] = Q[S] = Q[C] = Q[E] = Q[L] = !0, Q[u] = Q[p] = Q[P] = !1;
    var lt = typeof mt == "object" && mt && mt.Object === Object && mt, st = typeof self == "object" && self && self.Object === Object && self, nt = lt || st || Function("return this")(), Z = e && !e.nodeType && e, ut = Z && !0 && t && !t.nodeType && t, ct = ut && ut.exports === Z;
    function J(g, M) {
      return g.set(M[0], M[1]), g;
    }
    function ft(g, M) {
      return g.add(M), g;
    }
    function ht(g, M) {
      for (var I = -1, V = g ? g.length : 0; ++I < V && M(g[I], I, g) !== !1; )
        ;
      return g;
    }
    function yt(g, M) {
      for (var I = -1, V = M.length, xt = g.length; ++I < V; )
        g[xt + I] = M[I];
      return g;
    }
    function Ot(g, M, I, V) {
      var xt = -1, Rt = g ? g.length : 0;
      for (V && Rt && (I = g[++xt]); ++xt < Rt; )
        I = M(I, g[xt], xt, g);
      return I;
    }
    function ce(g, M) {
      for (var I = -1, V = Array(g); ++I < g; )
        V[I] = M(I);
      return V;
    }
    function ue(g, M) {
      return g == null ? void 0 : g[M];
    }
    function At(g) {
      var M = !1;
      if (g != null && typeof g.toString != "function")
        try {
          M = !!(g + "");
        } catch {
        }
      return M;
    }
    function kt(g) {
      var M = -1, I = Array(g.size);
      return g.forEach(function(V, xt) {
        I[++M] = [xt, V];
      }), I;
    }
    function Yt(g, M) {
      return function(I) {
        return g(M(I));
      };
    }
    function jt(g) {
      var M = -1, I = Array(g.size);
      return g.forEach(function(V) {
        I[++M] = V;
      }), I;
    }
    var Ht = Array.prototype, Ge = Function.prototype, Ut = Object.prototype, Vt = nt["__core-js_shared__"], le = function() {
      var g = /[^.]+$/.exec(Vt && Vt.keys && Vt.keys.IE_PROTO || "");
      return g ? "Symbol(src)_1." + g : "";
    }(), ne = Ge.toString, Nt = Ut.hasOwnProperty, fe = Ut.toString, Ye = RegExp(
      "^" + ne.call(Nt).replace(W, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), Te = ct ? nt.Buffer : void 0, he = nt.Symbol, Se = nt.Uint8Array, Ie = Yt(Object.getPrototypeOf, Object), A = Object.create, D = Ut.propertyIsEnumerable, X = Ht.splice, rt = Object.getOwnPropertySymbols, Dt = Te ? Te.isBuffer : void 0, Mt = Yt(Object.keys, Object), O = hn(nt, "DataView"), k = hn(nt, "Map"), U = hn(nt, "Promise"), ot = hn(nt, "Set"), x = hn(nt, "WeakMap"), $ = hn(Object, "create"), Y = Je(O), dt = Je(k), Xt = Je(U), de = Je(ot), un = Je(x), Ce = he ? he.prototype : void 0, Xe = Ce ? Ce.valueOf : void 0;
    function Qt(g) {
      var M = -1, I = g ? g.length : 0;
      for (this.clear(); ++M < I; ) {
        var V = g[M];
        this.set(V[0], V[1]);
      }
    }
    function kn() {
      this.__data__ = $ ? $(null) : {};
    }
    function Xc(g) {
      return this.has(g) && delete this.__data__[g];
    }
    function Qc(g) {
      var M = this.__data__;
      if ($) {
        var I = M[g];
        return I === r ? void 0 : I;
      }
      return Nt.call(M, g) ? M[g] : void 0;
    }
    function Jc(g) {
      var M = this.__data__;
      return $ ? M[g] !== void 0 : Nt.call(M, g);
    }
    function Kc(g, M) {
      var I = this.__data__;
      return I[g] = $ && M === void 0 ? r : M, this;
    }
    Qt.prototype.clear = kn, Qt.prototype.delete = Xc, Qt.prototype.get = Qc, Qt.prototype.has = Jc, Qt.prototype.set = Kc;
    function Oe(g) {
      var M = -1, I = g ? g.length : 0;
      for (this.clear(); ++M < I; ) {
        var V = g[M];
        this.set(V[0], V[1]);
      }
    }
    function Zc() {
      this.__data__ = [];
    }
    function tu(g) {
      var M = this.__data__, I = er(M, g);
      if (I < 0)
        return !1;
      var V = M.length - 1;
      return I == V ? M.pop() : X.call(M, I, 1), !0;
    }
    function eu(g) {
      var M = this.__data__, I = er(M, g);
      return I < 0 ? void 0 : M[I][1];
    }
    function nu(g) {
      return er(this.__data__, g) > -1;
    }
    function ru(g, M) {
      var I = this.__data__, V = er(I, g);
      return V < 0 ? I.push([g, M]) : I[V][1] = M, this;
    }
    Oe.prototype.clear = Zc, Oe.prototype.delete = tu, Oe.prototype.get = eu, Oe.prototype.has = nu, Oe.prototype.set = ru;
    function ln(g) {
      var M = -1, I = g ? g.length : 0;
      for (this.clear(); ++M < I; ) {
        var V = g[M];
        this.set(V[0], V[1]);
      }
    }
    function iu() {
      this.__data__ = {
        hash: new Qt(),
        map: new (k || Oe)(),
        string: new Qt()
      };
    }
    function au(g) {
      return nr(this, g).delete(g);
    }
    function ou(g) {
      return nr(this, g).get(g);
    }
    function su(g) {
      return nr(this, g).has(g);
    }
    function cu(g, M) {
      return nr(this, g).set(g, M), this;
    }
    ln.prototype.clear = iu, ln.prototype.delete = au, ln.prototype.get = ou, ln.prototype.has = su, ln.prototype.set = cu;
    function fn(g) {
      this.__data__ = new Oe(g);
    }
    function uu() {
      this.__data__ = new Oe();
    }
    function lu(g) {
      return this.__data__.delete(g);
    }
    function fu(g) {
      return this.__data__.get(g);
    }
    function hu(g) {
      return this.__data__.has(g);
    }
    function du(g, M) {
      var I = this.__data__;
      if (I instanceof Oe) {
        var V = I.__data__;
        if (!k || V.length < n - 1)
          return V.push([g, M]), this;
        I = this.__data__ = new ln(V);
      }
      return I.set(g, M), this;
    }
    fn.prototype.clear = uu, fn.prototype.delete = lu, fn.prototype.get = fu, fn.prototype.has = hu, fn.prototype.set = du;
    function pu(g, M) {
      var I = wi(g) || Lu(g) ? ce(g.length, String) : [], V = I.length, xt = !!V;
      for (var Rt in g)
        (M || Nt.call(g, Rt)) && !(xt && (Rt == "length" || Nu(Rt, V))) && I.push(Rt);
      return I;
    }
    function ro(g, M, I) {
      var V = g[M];
      (!(Nt.call(g, M) && so(V, I)) || I === void 0 && !(M in g)) && (g[M] = I);
    }
    function er(g, M) {
      for (var I = g.length; I--; )
        if (so(g[I][0], M))
          return I;
      return -1;
    }
    function gu(g, M) {
      return g && io(M, Si(M), g);
    }
    function bi(g, M, I, V, xt, Rt, Jt) {
      var Wt;
      if (V && (Wt = Rt ? V(g, xt, Rt, Jt) : V(g)), Wt !== void 0)
        return Wt;
      if (!rr(g))
        return g;
      var lo = wi(g);
      if (lo) {
        if (Wt = Tu(g), !M)
          return Pu(g, Wt);
      } else {
        var dn = Qe(g), fo = dn == p || dn == h;
        if (Bu(g))
          return xu(g, M);
        if (dn == v || dn == a || fo && !Rt) {
          if (At(g))
            return Rt ? g : {};
          if (Wt = Iu(fo ? {} : g), !M)
            return Eu(g, gu(Wt, g));
        } else {
          if (!Q[dn])
            return Rt ? g : {};
          Wt = ku(g, dn, bi, M);
        }
      }
      Jt || (Jt = new fn());
      var ho = Jt.get(g);
      if (ho)
        return ho;
      if (Jt.set(g, Wt), !lo)
        var po = I ? $u(g) : Si(g);
      return ht(po || g, function(Ci, ir) {
        po && (ir = Ci, Ci = g[ir]), ro(Wt, ir, bi(Ci, M, I, V, ir, g, Jt));
      }), Wt;
    }
    function mu(g) {
      return rr(g) ? A(g) : {};
    }
    function yu(g, M, I) {
      var V = M(g);
      return wi(g) ? V : yt(V, I(g));
    }
    function vu(g) {
      return fe.call(g);
    }
    function _u(g) {
      if (!rr(g) || Ru(g))
        return !1;
      var M = uo(g) || At(g) ? Ye : K;
      return M.test(Je(g));
    }
    function bu(g) {
      if (!oo(g))
        return Mt(g);
      var M = [];
      for (var I in Object(g))
        Nt.call(g, I) && I != "constructor" && M.push(I);
      return M;
    }
    function xu(g, M) {
      if (M)
        return g.slice();
      var I = new g.constructor(g.length);
      return g.copy(I), I;
    }
    function xi(g) {
      var M = new g.constructor(g.byteLength);
      return new Se(M).set(new Se(g)), M;
    }
    function wu(g, M) {
      var I = M ? xi(g.buffer) : g.buffer;
      return new g.constructor(I, g.byteOffset, g.byteLength);
    }
    function Su(g, M, I) {
      var V = M ? I(kt(g), !0) : kt(g);
      return Ot(V, J, new g.constructor());
    }
    function Cu(g) {
      var M = new g.constructor(g.source, G.exec(g));
      return M.lastIndex = g.lastIndex, M;
    }
    function Ou(g, M, I) {
      var V = M ? I(jt(g), !0) : jt(g);
      return Ot(V, ft, new g.constructor());
    }
    function Mu(g) {
      return Xe ? Object(Xe.call(g)) : {};
    }
    function Au(g, M) {
      var I = M ? xi(g.buffer) : g.buffer;
      return new g.constructor(I, g.byteOffset, g.length);
    }
    function Pu(g, M) {
      var I = -1, V = g.length;
      for (M || (M = Array(V)); ++I < V; )
        M[I] = g[I];
      return M;
    }
    function io(g, M, I, V) {
      I || (I = {});
      for (var xt = -1, Rt = M.length; ++xt < Rt; ) {
        var Jt = M[xt], Wt = V ? V(I[Jt], g[Jt], Jt, I, g) : void 0;
        ro(I, Jt, Wt === void 0 ? g[Jt] : Wt);
      }
      return I;
    }
    function Eu(g, M) {
      return io(g, ao(g), M);
    }
    function $u(g) {
      return yu(g, Si, ao);
    }
    function nr(g, M) {
      var I = g.__data__;
      return Du(M) ? I[typeof M == "string" ? "string" : "hash"] : I.map;
    }
    function hn(g, M) {
      var I = ue(g, M);
      return _u(I) ? I : void 0;
    }
    var ao = rt ? Yt(rt, Object) : qu, Qe = vu;
    (O && Qe(new O(new ArrayBuffer(1))) != z || k && Qe(new k()) != m || U && Qe(U.resolve()) != _ || ot && Qe(new ot()) != f || x && Qe(new x()) != P) && (Qe = function(g) {
      var M = fe.call(g), I = M == v ? g.constructor : void 0, V = I ? Je(I) : void 0;
      if (V)
        switch (V) {
          case Y:
            return z;
          case dt:
            return m;
          case Xt:
            return _;
          case de:
            return f;
          case un:
            return P;
        }
      return M;
    });
    function Tu(g) {
      var M = g.length, I = g.constructor(M);
      return M && typeof g[0] == "string" && Nt.call(g, "index") && (I.index = g.index, I.input = g.input), I;
    }
    function Iu(g) {
      return typeof g.constructor == "function" && !oo(g) ? mu(Ie(g)) : {};
    }
    function ku(g, M, I, V) {
      var xt = g.constructor;
      switch (M) {
        case T:
          return xi(g);
        case s:
        case c:
          return new xt(+g);
        case z:
          return wu(g, V);
        case H:
        case j:
        case N:
        case F:
        case w:
        case S:
        case C:
        case E:
        case L:
          return Au(g, V);
        case m:
          return Su(g, V, I);
        case l:
        case d:
          return new xt(g);
        case y:
          return Cu(g);
        case f:
          return Ou(g, V, I);
        case b:
          return Mu(g);
      }
    }
    function Nu(g, M) {
      return M = M ?? i, !!M && (typeof g == "number" || et.test(g)) && g > -1 && g % 1 == 0 && g < M;
    }
    function Du(g) {
      var M = typeof g;
      return M == "string" || M == "number" || M == "symbol" || M == "boolean" ? g !== "__proto__" : g === null;
    }
    function Ru(g) {
      return !!le && le in g;
    }
    function oo(g) {
      var M = g && g.constructor, I = typeof M == "function" && M.prototype || Ut;
      return g === I;
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
    function Fu(g) {
      return bi(g, !0, !0);
    }
    function so(g, M) {
      return g === M || g !== g && M !== M;
    }
    function Lu(g) {
      return zu(g) && Nt.call(g, "callee") && (!D.call(g, "callee") || fe.call(g) == a);
    }
    var wi = Array.isArray;
    function co(g) {
      return g != null && ju(g.length) && !uo(g);
    }
    function zu(g) {
      return Wu(g) && co(g);
    }
    var Bu = Dt || Hu;
    function uo(g) {
      var M = rr(g) ? fe.call(g) : "";
      return M == p || M == h;
    }
    function ju(g) {
      return typeof g == "number" && g > -1 && g % 1 == 0 && g <= i;
    }
    function rr(g) {
      var M = typeof g;
      return !!g && (M == "object" || M == "function");
    }
    function Wu(g) {
      return !!g && typeof g == "object";
    }
    function Si(g) {
      return co(g) ? pu(g) : bu(g);
    }
    function qu() {
      return [];
    }
    function Hu() {
      return !1;
    }
    t.exports = Fu;
  }(Fn, Fn.exports)), Fn.exports;
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Ri, Eo;
function Rh() {
  return Eo || (Eo = 1, Ri = function(e) {
    return e != null && e.constructor != null && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
  }), Ri;
}
var Fi, $o;
function Fh() {
  if ($o)
    return Fi;
  $o = 1;
  var t = Rh();
  Fi = e, e.flatten = e, e.unflatten = n;
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
  return Fi;
}
var Li, To;
function Lh() {
  if (To)
    return Li;
  To = 1;
  var t = js, e = Th(), n = Ih(), r = kh(), i = Nh(), a = Dh(), o = Fh();
  Li = function(l, v) {
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
          var b, P = l.defaultValue, T = !0;
          if (typeof d == "object" && "default" in d && (P = d.default), d && (typeof d == "string" || typeof d.value == "string")) {
            var z = typeof d == "string" ? d : d.value;
            b = e(_, z, P);
          } else if (d && typeof d.value == "function") {
            var H = {
              label: d.label,
              default: d.default
            };
            b = d.value(_, H, l.data), d.stringify !== void 0 && (T = d.stringify);
          }
          if (b == null && (b = P), b !== void 0) {
            l.preserveNewLinesInValues && typeof b == "string" && (b = b.replace(/\n/g, "\u2028").replace(/\r/g, "\u2029"));
            var j = b;
            T && (j = JSON.stringify(b)), l.preserveNewLinesInValues && typeof b == "string" && (j = j.replace(/\u2028/g, `
`).replace(/\u2029/g, "\r")), typeof b == "object" && (j = u(j, ""), j = JSON.stringify(j)), l.quotes !== '"' && (j = u(j, l.quotes)), j = j.replace(/\\\\/g, "\\"), l.excelStrings && typeof b == "string" && (j = '"="' + j + '""'), j = j.replace(/(\\")(?=.)/g, l.doubleQuotes), y += j;
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
        f.forEach(function(P) {
          var T = a(y);
          i(T, v, P), _.push(T);
        });
      else if (d && !f.length) {
        var b = a(y);
        i(b, v, void 0), _.push(b);
      } else
        _.push(y);
    }), _;
  }
  return Li;
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
        e.exports = Lh();
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
})(Bs);
const zh = /* @__PURE__ */ Xn(Bs);
const Bh = {
  name: "TipiCsvDownload",
  components: {
    VueCsvDownloader: zh
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
}, Ws = (t) => (Vu("data-v-d7465e98"), t = t(), Gu(), t), jh = ["title"], Wh = /* @__PURE__ */ Ws(() => /* @__PURE__ */ B("span", { class: "c-icon c-icon--type-download" }, [
  /* @__PURE__ */ B("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "16",
    fill: "none",
    viewBox: "0 0 12 16"
  }, [
    /* @__PURE__ */ B("path", {
      fill: "#2D4252",
      d: "M12 5.647H8.571V0H3.43v5.647H0l6 6.588 6-6.588zm-12 8.47V16h12v-1.882H0z"
    })
  ])
], -1)), qh = /* @__PURE__ */ Ws(() => /* @__PURE__ */ B("span", { class: "c-icon c-icon--type-download" }, [
  /* @__PURE__ */ B("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "16",
    fill: "none",
    viewBox: "0 0 12 16"
  }, [
    /* @__PURE__ */ B("path", {
      fill: "#2D4252",
      d: "M12 5.647H8.571V0H3.43v5.647H0l6 6.588 6-6.588zm-12 8.47V16h12v-1.882H0z"
    })
  ])
], -1));
function Hh(t, e, n, r, i, a) {
  const o = _t("vue-csv-downloader");
  return aa((R(), q("span", null, [
    n.csvItems.length ? (R(), Ct(o, {
      key: 1,
      data: n.csvItems,
      fields: n.csvFields,
      downloadName: a.getNameFromCSV(),
      id: "downloadCSV",
      class: Lt(["c-button c-button--icon-right", n.buttonClass])
    }, {
      default: zt(() => [
        bt(tt(n.label) + " ", 1),
        qh
      ]),
      _: 1
    }, 8, ["data", "fields", "downloadName", "class"])) : (R(), q("a", {
      key: 0,
      class: Lt([{ disabled: !n.canDownloadCSV }, "c-button c-button--compact c-button--secondary c-button--icon-right"]),
      title: n.canDownloadCSV ? "Descarga CSV con todos los resultados" : "Demasiados resultados para poder descargar. Afina la búsqueda",
      onClick: e[0] || (e[0] = Es((...s) => a.loadCSVItems && a.loadCSVItems(...s), ["prevent"])),
      href: "#"
    }, [
      bt(tt(n.label) + " ", 1),
      Wh
    ], 10, jh))
  ], 512)), [
    [oa, n.initiatives.length]
  ]);
}
const Uh = /* @__PURE__ */ pt(Bh, [["render", Hh], ["__scopeId", "data-v-d7465e98"]]), Vh = {
  name: "CongressLink",
  components: {
    TipiIcon: Ue
  },
  props: {
    url: String
  }
}, Gh = ["href"];
function Yh(t, e, n, r, i, a) {
  const o = _t("tipi-icon");
  return R(), q("a", {
    href: n.url,
    class: "c-congress-link u-color-primary",
    target: "_blank",
    title: "Ver en el Congreso.es"
  }, [
    vt(o, {
      class: "u-filling-primary",
      icon: "open-blank"
    }),
    bt("Ver en el Congreso.es")
  ], 8, Gh);
}
const Xh = /* @__PURE__ */ pt(Vh, [["render", Yh]]), Qh = {
  name: "TipiHeader",
  props: ["title", "subtitle"]
}, Jh = { class: "c-page-header__title" }, Kh = {
  key: 0,
  class: "c-page-header__subtitle"
};
function Zh(t, e, n, r, i, a) {
  return R(), q("header", {
    class: Lt(["c-page-header", { "c-page-header--nosub": !n.subtitle }])
  }, [
    B("h1", Jh, tt(n.title), 1),
    n.subtitle ? (R(), q("p", Kh, tt(n.subtitle), 1)) : at("", !0)
  ], 2);
}
const td = /* @__PURE__ */ pt(Qh, [["render", Zh]]), ed = {
  name: "TipiNavbar",
  components: {
    Icon: Ue
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
}, nd = { class: "c-navbar" }, rd = {
  key: 0,
  class: "c-disclaimer"
}, id = ["href", "innerHTML"], ad = { class: "c-navbar__wrapper o-container" }, od = { class: "c-navbar__brand" }, sd = {
  class: "c-navbar__brand-link",
  href: "/"
}, cd = ["src"], ud = /* @__PURE__ */ B("span", { class: "bar" }, null, -1), ld = /* @__PURE__ */ B("span", { class: "bar" }, null, -1), fd = /* @__PURE__ */ B("span", { class: "bar" }, null, -1), hd = /* @__PURE__ */ B("span", { class: "u-hide" }, "Menú", -1), dd = [
  ud,
  ld,
  fd,
  hd
], pd = { class: "c-menu" }, gd = ["href"], md = {
  key: 2,
  class: "c-menu__submenu"
}, yd = ["href"];
function vd(t, e, n, r, i, a) {
  const o = _t("router-link"), s = _t("icon");
  return R(), q("header", nd, [
    !a.closedDisclaimer && n.disclaimerLink.hasOwnProperty("name") ? (R(), q("div", rd, [
      n.disclaimerLink.external ? (R(), q("a", {
        key: 0,
        href: n.disclaimerLink.route,
        target: "_blank",
        innerHTML: n.disclaimerLink.name
      }, null, 8, id)) : (R(), Ct(o, {
        key: 1,
        to: { name: n.disclaimerLink.route },
        innerHTML: n.disclaimerLink.name
      }, null, 8, ["to", "innerHTML"])),
      B("a", {
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
    n.preImage ? (R(), q("div", {
      key: 1,
      class: "c-decorator",
      style: ie(`background-image: url(${n.preImage})`)
    }, null, 4)) : at("", !0),
    B("div", ad, [
      B("div", od, [
        B("a", sd, [
          B("img", {
            class: "c-navbar__brand-logo",
            src: n.logo
          }, null, 8, cd)
        ])
      ]),
      B("button", {
        type: "button",
        class: Lt(["c-navbar__menu-toggle", { "is-active": t.menuVisible }]),
        onClick: e[1] || (e[1] = (...c) => a.toggleMenu && a.toggleMenu(...c))
      }, dd, 2),
      B("nav", {
        class: Lt(["c-navbar__menu", { "is-active": t.menuVisible }])
      }, [
        B("ul", pd, [
          (R(!0), q(te, null, ee(n.links, (c) => aa((R(), q("li", {
            onClick: e[3] || (e[3] = (...u) => a.closeMenuMobile && a.closeMenuMobile(...u)),
            class: Lt(["c-menu__item", { "has-submenu": c.children }]),
            key: c.route
          }, [
            c.external ? (R(), q("a", {
              key: 0,
              href: c.route,
              class: "c-menu__link",
              target: "_blank"
            }, [
              bt(tt(c.name), 1),
              c.icon ? (R(), Ct(s, {
                key: 0,
                icon: c.icon,
                class: "c-menu__icon"
              }, null, 8, ["icon"])) : at("", !0)
            ], 8, gd)) : (R(), Ct(o, {
              key: 1,
              to: { name: c.route },
              class: "c-menu__link"
            }, {
              default: zt(() => [
                bt(tt(c.name), 1),
                c.icon ? (R(), Ct(s, {
                  key: 0,
                  icon: c.icon,
                  class: "c-menu__icon"
                }, null, 8, ["icon"])) : at("", !0)
              ]),
              _: 2
            }, 1032, ["to"])),
            c.children ? (R(), q("ul", md, [
              (R(!0), q(te, null, ee(c.children, (u) => aa((R(), q("li", {
                onClick: e[2] || (e[2] = (...p) => a.closeMenuMobile && a.closeMenuMobile(...p)),
                class: "c-menu__item",
                key: u.route
              }, [
                u.external ? (R(), q("a", {
                  key: 0,
                  href: u.route,
                  class: "c-menu__link",
                  target: "_blank"
                }, [
                  bt(tt(u.name), 1),
                  u.icon ? (R(), Ct(s, {
                    key: 0,
                    icon: u.icon,
                    class: "c-menu__icon"
                  }, null, 8, ["icon"])) : at("", !0)
                ], 8, yd)) : (R(), Ct(o, {
                  key: 1,
                  to: { name: u.route },
                  class: "c-menu__link"
                }, {
                  default: zt(() => [
                    bt(tt(u.name), 1),
                    u.icon ? (R(), Ct(s, {
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
const _d = /* @__PURE__ */ pt(ed, [["render", vd]]), bd = {
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
}, xd = { class: "c-party_logo__container" }, wd = ["src", "alt"];
function Sd(t, e, n, r, i, a) {
  return R(), q("div", xd, [
    B("img", {
      class: "c-party_logo__image",
      src: a.getLogoSrc(),
      alt: "Logo de " + n.party
    }, null, 8, wd)
  ]);
}
const Cd = /* @__PURE__ */ pt(bd, [["render", Sd]]);
const Od = {
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
        t = As(
          () => $s(/* @__PURE__ */ Object.assign({ "../../assets/party_logos/icon/bng.svg": () => import("./bng-890acecf.mjs"), "../../assets/party_logos/icon/coalicioncanaria.svg": () => import("./coalicioncanaria-6f4c1db4.mjs"), "../../assets/party_logos/icon/compromis.svg": () => import("./compromis-5ea8e904.mjs"), "../../assets/party_logos/icon/cs.svg": () => import("./cs-de2f22f8.mjs"), "../../assets/party_logos/icon/cup.svg": () => import("./cup-83f9d201.mjs"), "../../assets/party_logos/icon/ehbildu.svg": () => import("./ehbildu-23275d48.mjs"), "../../assets/party_logos/icon/encomu.svg": () => import("./encomu-90f0f0ee.mjs"), "../../assets/party_logos/icon/erc.svg": () => import("./erc-83cebd9f.mjs"), "../../assets/party_logos/icon/foroasturias.svg": () => import("./foroasturias-c86ed9f1.mjs"), "../../assets/party_logos/icon/iu.svg": () => import("./iu-0d57eb1a.mjs"), "../../assets/party_logos/icon/jxcat.svg": () => import("./jxcat-69202004.mjs"), "../../assets/party_logos/icon/maspais.svg": () => import("./maspais-a61a53ef.mjs"), "../../assets/party_logos/icon/nuevacanaria.svg": () => import("./nuevacanaria-559edad7.mjs"), "../../assets/party_logos/icon/pdecat.svg": () => import("./pdecat-0ec3db5a.mjs"), "../../assets/party_logos/icon/pnv.svg": () => import("./pnv-7f6f4b34.mjs"), "../../assets/party_logos/icon/podemos.svg": () => import("./podemos-de793077.mjs"), "../../assets/party_logos/icon/pp.svg": () => import("./pp-13bed712.mjs"), "../../assets/party_logos/icon/prc.svg": () => import("./prc-8a3d42c1.mjs"), "../../assets/party_logos/icon/psoe.svg": () => import("./psoe-97af3ccf.mjs"), "../../assets/party_logos/icon/sumar.svg": () => import("./sumar-7dfecef0.mjs"), "../../assets/party_logos/icon/teruelexiste.svg": () => import("./teruelexiste-7d4a17ab.mjs"), "../../assets/party_logos/icon/unidaspodemos.svg": () => import("./unidaspodemos-43ae78cc.mjs"), "../../assets/party_logos/icon/upn.svg": () => import("./upn-e7eb332f.mjs"), "../../assets/party_logos/icon/vox.svg": () => import("./vox-64380b40.mjs") }), `../../assets/party_logos/icon/${this.parties[this.party].logo}.svg`)
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
}, Md = ["alt"];
function Ad(t, e, n, r, i, a) {
  return R(), q("div", {
    class: "c-party_logo_icon",
    style: ie(a.getBackground)
  }, [
    B("figure", {
      class: "c-party_logo_icon__image",
      alt: "Logo de " + a.getName
    }, [
      (R(), Ct(Ps(a.svg)))
    ], 8, Md)
  ], 4);
}
const Pd = /* @__PURE__ */ pt(Od, [["render", Ad], ["__scopeId", "data-v-5e00b143"]]), Ed = {
  name: "TipiDeputy",
  components: {
    TipiIcon: Ue,
    PartyLogo: Cd,
    PartyLogoIcon: Pd
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
}, $d = { class: "o-container" }, Td = { class: "o-grid o-grid--reverse" }, Id = { class: "o-grid__col u-4@sm" }, kd = { class: "c-deputy__image_container" }, Nd = ["src", "alt"], Dd = { class: "o-grid__col u-12 u-8@sm" }, Rd = { class: "c-deputy__name" }, Fd = {
  key: 0,
  class: "c-deputy__group"
}, Ld = { class: "c-deputy__extra" }, zd = { class: "c-deputy__personal" }, Bd = { class: "c-deputy__personal" }, jd = { class: "c-deputy__links" }, Wd = { class: "o-grid__col u-12 u-12@sm c-deputy__more" }, qd = /* @__PURE__ */ B("h3", null, "Declaraciones", -1), Hd = ["href"], Ud = /* @__PURE__ */ B("h3", null, "Cargos", -1), Vd = /* @__PURE__ */ B("h3", null, "Ficha personal", -1);
function Gd(t, e, n, r, i, a) {
  const o = _t("party-logo-icon"), s = _t("router-link"), c = _t("tipi-icon");
  return n.deputy ? (R(), q("div", {
    key: 0,
    class: Lt(["c-deputy", a.addBirthdayClass()])
  }, [
    B("div", $d, [
      B("div", Td, [
        B("div", Id, [
          B("div", kd, [
            B("img", {
              class: "c-deputy__image",
              src: n.deputy.image,
              alt: "Foto de " + n.deputy.name
            }, null, 8, Nd),
            vt(o, {
              party: n.deputy.party_name
            }, null, 8, ["party"])
          ])
        ]),
        B("div", Dd, [
          B("h1", Rd, tt(n.deputy.name), 1),
          n.parliamentaryGroup ? (R(), q("h3", Fd, [
            vt(s, {
              to: { name: "parliamentarygroup", params: { id: n.parliamentaryGroup.id } }
            }, {
              default: zt(() => [
                bt(tt(n.parliamentaryGroup.name), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ])) : at("", !0),
          B("div", Ld, [
            B("span", zd, [
              a.addBirthdayClass() ? (R(), Ct(c, {
                key: 0,
                icon: "birthday"
              })) : at("", !0),
              bt(tt(a.getAge()) + " años", 1)
            ]),
            B("span", Bd, [
              vt(c, { icon: "location" }),
              bt(tt(a.getConstituency()), 1)
            ])
          ]),
          B("div", jd, [
            Ia(t.$slots, "default")
          ])
        ]),
        B("div", Wd, [
          B("a", {
            href: "#",
            onClick: e[0] || (e[0] = (...u) => a.collapse && a.collapse(...u))
          }, [
            bt(tt(a.getCollapseMessage()), 1),
            vt(c, {
              icon: a.getCollapseIcon()
            }, null, 8, ["icon"])
          ])
        ]),
        B("div", {
          class: Lt([a.getCollapsedClass(), "o-grid__col u-12 u-4@sm"])
        }, [
          qd,
          (R(!0), q(te, null, ee(n.deputy.extra.declarations, (u, p) => (R(), q("p", { key: p }, [
            vt(c, { icon: "document" }),
            B("a", { href: u }, tt(p), 9, Hd)
          ]))), 128))
        ], 2),
        B("div", {
          class: Lt([a.getCollapsedClass(), "o-grid__col u-12 u-4@sm"])
        }, [
          Ud,
          (R(!0), q(te, null, ee(n.deputy.public_position, (u) => (R(), q("p", { key: u }, tt(u), 1))), 128))
        ], 2),
        B("div", {
          class: Lt([a.getCollapsedClass(), "o-grid__col u-12 u-4@sm"])
        }, [
          Vd,
          (R(!0), q(te, null, ee(n.deputy.bio, (u) => (R(), q("p", { key: u }, tt(u), 1))), 128))
        ], 2)
      ])
    ])
  ], 2)) : at("", !0);
}
const Yd = /* @__PURE__ */ pt(Ed, [["render", Gd]]), Xd = {
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
}, Qd = {
  key: 0,
  class: "c-text"
}, Jd = { class: "c-text__label" }, Kd = ["innerHTML"], Zd = {
  key: 1,
  class: "c-text__list"
}, tp = ["alt", "src"], ep = {
  key: 1,
  class: "c-text__wrapper"
}, np = { key: 0 }, rp = { key: 2 };
function ip(t, e, n, r, i, a) {
  const o = _t("router-link");
  return a.is(n.value) ? (R(), q("div", Qd, [
    B("h6", Jd, tt(n.meta), 1),
    n.source ? at("", !0) : (R(), q("p", {
      key: 0,
      class: "c-text__value",
      innerHTML: a.show(n.value)
    }, null, 8, Kd)),
    n.source ? (R(), q("ul", Zd, [
      (R(!0), q(te, null, ee(n.value, (s, c) => (R(), q("li", {
        key: c,
        class: Lt(["c-text__list-item", { "c-text__list-item--image": a.hasImage(s) }])
      }, [
        a.hasImage(s) ? (R(), Ct(o, {
          key: 0,
          to: { name: n.type, params: { id: a.getPeopleFromName(s).id } }
        }, {
          default: zt(() => [
            B("img", {
              class: "c-text__image",
              alt: s,
              src: a.getPeopleFromName(s).image
            }, null, 8, tp)
          ]),
          _: 2
        }, 1032, ["to"])) : at("", !0),
        a.getPeopleFromName(s) ? (R(), q("div", ep, [
          vt(o, {
            to: { name: n.type, params: { id: a.getPeopleFromName(s).id } }
          }, {
            default: zt(() => [
              bt(tt(a.getPeopleFromName(s).name) + " ", 1),
              n.hideGroup ? at("", !0) : (R(), q("span", np, tt(a.getPeopleFromName(s).parliamentarygroup), 1))
            ]),
            _: 2
          }, 1032, ["to"])
        ])) : (R(), q("span", rp, tt(s), 1))
      ], 2))), 128))
    ])) : at("", !0)
  ])) : at("", !0);
}
const ap = /* @__PURE__ */ pt(Xd, [["render", ip]]);
var op = function() {
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
}, Io = typeof Symbol < "u" && Symbol, sp = op, cp = function() {
  return typeof Io != "function" || typeof Symbol != "function" || typeof Io("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : sp();
}, ko = {
  foo: {}
}, up = Object, lp = function() {
  return { __proto__: ko }.foo === ko.foo && !({ __proto__: null } instanceof up);
}, fp = "Function.prototype.bind called on incompatible ", zi = Array.prototype.slice, hp = Object.prototype.toString, dp = "[object Function]", pp = function(e) {
  var n = this;
  if (typeof n != "function" || hp.call(n) !== dp)
    throw new TypeError(fp + n);
  for (var r = zi.call(arguments, 1), i, a = function() {
    if (this instanceof i) {
      var p = n.apply(
        this,
        r.concat(zi.call(arguments))
      );
      return Object(p) === p ? p : this;
    } else
      return n.apply(
        e,
        r.concat(zi.call(arguments))
      );
  }, o = Math.max(0, n.length - r.length), s = [], c = 0; c < o; c++)
    s.push("$" + c);
  if (i = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(a), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, i.prototype = new u(), u.prototype = null;
  }
  return i;
}, gp = pp, qs = Function.prototype.bind || gp, No = {}.hasOwnProperty, Bi = Function.prototype.call, mp = Bi.bind ? Bi.bind(No) : function(t, e) {
  return Bi.call(No, t, e);
}, it, wn = SyntaxError, Hs = Function, bn = TypeError, ji = function(t) {
  try {
    return Hs('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, nn = Object.getOwnPropertyDescriptor;
if (nn)
  try {
    nn({}, "");
  } catch {
    nn = null;
  }
var Wi = function() {
  throw new bn();
}, yp = nn ? function() {
  try {
    return arguments.callee, Wi;
  } catch {
    try {
      return nn(arguments, "callee").get;
    } catch {
      return Wi;
    }
  }
}() : Wi, pn = cp(), vp = lp(), St = Object.getPrototypeOf || (vp ? function(t) {
  return t.__proto__;
} : null), yn = {}, _p = typeof Uint8Array > "u" || !St ? it : St(Uint8Array), rn = {
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
  "%Function%": Hs,
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
  "%SyntaxError%": wn,
  "%ThrowTypeError%": yp,
  "%TypedArray%": _p,
  "%TypeError%": bn,
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
    var bp = St(St(t));
    rn["%Error.prototype%"] = bp;
  }
var xp = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = ji("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = ji("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = ji("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var i = t("%AsyncGenerator%");
    i && St && (n = St(i.prototype));
  }
  return rn[e] = n, n;
}, Do = {
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
}, Qn = qs, xr = mp, wp = Qn.call(Function.call, Array.prototype.concat), Sp = Qn.call(Function.apply, Array.prototype.splice), Ro = Qn.call(Function.call, String.prototype.replace), wr = Qn.call(Function.call, String.prototype.slice), Cp = Qn.call(Function.call, RegExp.prototype.exec), Op = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Mp = /\\(\\)?/g, Ap = function(e) {
  var n = wr(e, 0, 1), r = wr(e, -1);
  if (n === "%" && r !== "%")
    throw new wn("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new wn("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return Ro(e, Op, function(a, o, s, c) {
    i[i.length] = s ? Ro(c, Mp, "$1") : o || a;
  }), i;
}, Pp = function(e, n) {
  var r = e, i;
  if (xr(Do, r) && (i = Do[r], r = "%" + i[0] + "%"), xr(rn, r)) {
    var a = rn[r];
    if (a === yn && (a = xp(r)), typeof a > "u" && !n)
      throw new bn("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: r,
      value: a
    };
  }
  throw new wn("intrinsic " + e + " does not exist!");
}, Na = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new bn("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new bn('"allowMissing" argument must be a boolean');
  if (Cp(/^%?[^%]*%?$/, e) === null)
    throw new wn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = Ap(e), i = r.length > 0 ? r[0] : "", a = Pp("%" + i + "%", n), o = a.name, s = a.value, c = !1, u = a.alias;
  u && (i = u[0], Sp(r, wp([0, 1], u)));
  for (var p = 1, h = !0; p < r.length; p += 1) {
    var m = r[p], l = wr(m, 0, 1), v = wr(m, -1);
    if ((l === '"' || l === "'" || l === "`" || v === '"' || v === "'" || v === "`") && l !== v)
      throw new wn("property names with quotes must have matching quotes");
    if ((m === "constructor" || !h) && (c = !0), i += "." + m, o = "%" + i + "%", xr(rn, o))
      s = rn[o];
    else if (s != null) {
      if (!(m in s)) {
        if (!n)
          throw new bn("base intrinsic for " + e + " exists, but the property is not available.");
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
}, Us = { exports: {} };
(function(t) {
  var e = qs, n = Na, r = n("%Function.prototype.apply%"), i = n("%Function.prototype.call%"), a = n("%Reflect.apply%", !0) || e.call(i, r), o = n("%Object.getOwnPropertyDescriptor%", !0), s = n("%Object.defineProperty%", !0), c = n("%Math.max%");
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
})(Us);
var Ep = Us.exports, Vs = Na, Gs = Ep, $p = Gs(Vs("String.prototype.indexOf")), Tp = function(e, n) {
  var r = Vs(e, !!n);
  return typeof r == "function" && $p(e, ".prototype.") > -1 ? Gs(r) : r;
}, Da = typeof Map == "function" && Map.prototype, qi = Object.getOwnPropertyDescriptor && Da ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Sr = Da && qi && typeof qi.get == "function" ? qi.get : null, Fo = Da && Map.prototype.forEach, Ra = typeof Set == "function" && Set.prototype, Hi = Object.getOwnPropertyDescriptor && Ra ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Cr = Ra && Hi && typeof Hi.get == "function" ? Hi.get : null, Lo = Ra && Set.prototype.forEach, Ip = typeof WeakMap == "function" && WeakMap.prototype, Wn = Ip ? WeakMap.prototype.has : null, kp = typeof WeakSet == "function" && WeakSet.prototype, qn = kp ? WeakSet.prototype.has : null, Np = typeof WeakRef == "function" && WeakRef.prototype, zo = Np ? WeakRef.prototype.deref : null, Dp = Boolean.prototype.valueOf, Rp = Object.prototype.toString, Fp = Function.prototype.toString, Lp = String.prototype.match, Fa = String.prototype.slice, Re = String.prototype.replace, zp = String.prototype.toUpperCase, Bo = String.prototype.toLowerCase, Ys = RegExp.prototype.test, jo = Array.prototype.concat, me = Array.prototype.join, Bp = Array.prototype.slice, Wo = Math.floor, ca = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Ui = Object.getOwnPropertySymbols, ua = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Sn = typeof Symbol == "function" && typeof Symbol.iterator == "object", It = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Sn || "symbol") ? Symbol.toStringTag : null, Xs = Object.prototype.propertyIsEnumerable, qo = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function Ho(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Ys.call(/e/, e))
    return e;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var r = t < 0 ? -Wo(-t) : Wo(t);
    if (r !== t) {
      var i = String(r), a = Fa.call(e, i.length + 1);
      return Re.call(i, n, "$&_") + "." + Re.call(Re.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Re.call(e, n, "$&_");
}
var la = js, Uo = la.custom, Vo = Js(Uo) ? Uo : null, jp = function t(e, n, r, i) {
  var a = n || {};
  if (De(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (De(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = De(a, "customInspect") ? a.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (De(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (De(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = a.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return Zs(e, a);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var c = String(e);
    return s ? Ho(e, c) : c;
  }
  if (typeof e == "bigint") {
    var u = String(e) + "n";
    return s ? Ho(e, u) : u;
  }
  var p = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof r > "u" && (r = 0), r >= p && p > 0 && typeof e == "object")
    return fa(e) ? "[Array]" : "[Object]";
  var h = ag(a, r);
  if (typeof i > "u")
    i = [];
  else if (Ks(i, e) >= 0)
    return "[Circular]";
  function m(C, E, L) {
    if (E && (i = Bp.call(i), i.push(E)), L) {
      var W = {
        depth: a.depth
      };
      return De(a, "quoteStyle") && (W.quoteStyle = a.quoteStyle), t(C, W, r + 1, i);
    }
    return t(C, a, r + 1, i);
  }
  if (typeof e == "function" && !Go(e)) {
    var l = Qp(e), v = ar(e, m);
    return "[Function" + (l ? ": " + l : " (anonymous)") + "]" + (v.length > 0 ? " { " + me.call(v, ", ") + " }" : "");
  }
  if (Js(e)) {
    var _ = Sn ? Re.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : ua.call(e);
    return typeof e == "object" && !Sn ? Nn(_) : _;
  }
  if (ng(e)) {
    for (var y = "<" + Bo.call(String(e.nodeName)), f = e.attributes || [], d = 0; d < f.length; d++)
      y += " " + f[d].name + "=" + Qs(Wp(f[d].value), "double", a);
    return y += ">", e.childNodes && e.childNodes.length && (y += "..."), y += "</" + Bo.call(String(e.nodeName)) + ">", y;
  }
  if (fa(e)) {
    if (e.length === 0)
      return "[]";
    var b = ar(e, m);
    return h && !ig(b) ? "[" + ha(b, h) + "]" : "[ " + me.call(b, ", ") + " ]";
  }
  if (Hp(e)) {
    var P = ar(e, m);
    return !("cause" in Error.prototype) && "cause" in e && !Xs.call(e, "cause") ? "{ [" + String(e) + "] " + me.call(jo.call("[cause]: " + m(e.cause), P), ", ") + " }" : P.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + me.call(P, ", ") + " }";
  }
  if (typeof e == "object" && o) {
    if (Vo && typeof e[Vo] == "function" && la)
      return la(e, { depth: p - r });
    if (o !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (Jp(e)) {
    var T = [];
    return Fo && Fo.call(e, function(C, E) {
      T.push(m(E, e, !0) + " => " + m(C, e));
    }), Yo("Map", Sr.call(e), T, h);
  }
  if (tg(e)) {
    var z = [];
    return Lo && Lo.call(e, function(C) {
      z.push(m(C, e));
    }), Yo("Set", Cr.call(e), z, h);
  }
  if (Kp(e))
    return Vi("WeakMap");
  if (eg(e))
    return Vi("WeakSet");
  if (Zp(e))
    return Vi("WeakRef");
  if (Vp(e))
    return Nn(m(Number(e)));
  if (Yp(e))
    return Nn(m(ca.call(e)));
  if (Gp(e))
    return Nn(Dp.call(e));
  if (Up(e))
    return Nn(m(String(e)));
  if (!qp(e) && !Go(e)) {
    var H = ar(e, m), j = qo ? qo(e) === Object.prototype : e instanceof Object || e.constructor === Object, N = e instanceof Object ? "" : "null prototype", F = !j && It && Object(e) === e && It in e ? Fa.call(Ve(e), 8, -1) : N ? "Object" : "", w = j || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", S = w + (F || N ? "[" + me.call(jo.call([], F || [], N || []), ": ") + "] " : "");
    return H.length === 0 ? S + "{}" : h ? S + "{" + ha(H, h) + "}" : S + "{ " + me.call(H, ", ") + " }";
  }
  return String(e);
};
function Qs(t, e, n) {
  var r = (n.quoteStyle || e) === "double" ? '"' : "'";
  return r + t + r;
}
function Wp(t) {
  return Re.call(String(t), /"/g, "&quot;");
}
function fa(t) {
  return Ve(t) === "[object Array]" && (!It || !(typeof t == "object" && It in t));
}
function qp(t) {
  return Ve(t) === "[object Date]" && (!It || !(typeof t == "object" && It in t));
}
function Go(t) {
  return Ve(t) === "[object RegExp]" && (!It || !(typeof t == "object" && It in t));
}
function Hp(t) {
  return Ve(t) === "[object Error]" && (!It || !(typeof t == "object" && It in t));
}
function Up(t) {
  return Ve(t) === "[object String]" && (!It || !(typeof t == "object" && It in t));
}
function Vp(t) {
  return Ve(t) === "[object Number]" && (!It || !(typeof t == "object" && It in t));
}
function Gp(t) {
  return Ve(t) === "[object Boolean]" && (!It || !(typeof t == "object" && It in t));
}
function Js(t) {
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
function Yp(t) {
  if (!t || typeof t != "object" || !ca)
    return !1;
  try {
    return ca.call(t), !0;
  } catch {
  }
  return !1;
}
var Xp = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function De(t, e) {
  return Xp.call(t, e);
}
function Ve(t) {
  return Rp.call(t);
}
function Qp(t) {
  if (t.name)
    return t.name;
  var e = Lp.call(Fp.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Ks(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var n = 0, r = t.length; n < r; n++)
    if (t[n] === e)
      return n;
  return -1;
}
function Jp(t) {
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
function Kp(t) {
  if (!Wn || !t || typeof t != "object")
    return !1;
  try {
    Wn.call(t, Wn);
    try {
      qn.call(t, qn);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Zp(t) {
  if (!zo || !t || typeof t != "object")
    return !1;
  try {
    return zo.call(t), !0;
  } catch {
  }
  return !1;
}
function tg(t) {
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
function eg(t) {
  if (!qn || !t || typeof t != "object")
    return !1;
  try {
    qn.call(t, qn);
    try {
      Wn.call(t, Wn);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function ng(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function Zs(t, e) {
  if (t.length > e.maxStringLength) {
    var n = t.length - e.maxStringLength, r = "... " + n + " more character" + (n > 1 ? "s" : "");
    return Zs(Fa.call(t, 0, e.maxStringLength), e) + r;
  }
  var i = Re.call(Re.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, rg);
  return Qs(i, "single", e);
}
function rg(t) {
  var e = t.charCodeAt(0), n = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + zp.call(e.toString(16));
}
function Nn(t) {
  return "Object(" + t + ")";
}
function Vi(t) {
  return t + " { ? }";
}
function Yo(t, e, n, r) {
  var i = r ? ha(n, r) : me.call(n, ", ");
  return t + " (" + e + ") {" + i + "}";
}
function ig(t) {
  for (var e = 0; e < t.length; e++)
    if (Ks(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function ag(t, e) {
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
      r[i] = De(t, i) ? e(t[i], t) : "";
  }
  var a = typeof Ui == "function" ? Ui(t) : [], o;
  if (Sn) {
    o = {};
    for (var s = 0; s < a.length; s++)
      o["$" + a[s]] = a[s];
  }
  for (var c in t)
    De(t, c) && (n && String(Number(c)) === c && c < t.length || Sn && o["$" + c] instanceof Symbol || (Ys.call(/[^\w$]/, c) ? r.push(e(c, t) + ": " + e(t[c], t)) : r.push(c + ": " + e(t[c], t))));
  if (typeof Ui == "function")
    for (var u = 0; u < a.length; u++)
      Xs.call(t, a[u]) && r.push("[" + e(a[u]) + "]: " + e(t[a[u]], t));
  return r;
}
var La = Na, $n = Tp, og = jp, sg = La("%TypeError%"), or = La("%WeakMap%", !0), sr = La("%Map%", !0), cg = $n("WeakMap.prototype.get", !0), ug = $n("WeakMap.prototype.set", !0), lg = $n("WeakMap.prototype.has", !0), fg = $n("Map.prototype.get", !0), hg = $n("Map.prototype.set", !0), dg = $n("Map.prototype.has", !0), za = function(t, e) {
  for (var n = t, r; (r = n.next) !== null; n = r)
    if (r.key === e)
      return n.next = r.next, r.next = t.next, t.next = r, r;
}, pg = function(t, e) {
  var n = za(t, e);
  return n && n.value;
}, gg = function(t, e, n) {
  var r = za(t, e);
  r ? r.value = n : t.next = {
    // eslint-disable-line no-param-reassign
    key: e,
    next: t.next,
    value: n
  };
}, mg = function(t, e) {
  return !!za(t, e);
}, yg = function() {
  var e, n, r, i = {
    assert: function(a) {
      if (!i.has(a))
        throw new sg("Side channel does not contain " + og(a));
    },
    get: function(a) {
      if (or && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return cg(e, a);
      } else if (sr) {
        if (n)
          return fg(n, a);
      } else if (r)
        return pg(r, a);
    },
    has: function(a) {
      if (or && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return lg(e, a);
      } else if (sr) {
        if (n)
          return dg(n, a);
      } else if (r)
        return mg(r, a);
      return !1;
    },
    set: function(a, o) {
      or && a && (typeof a == "object" || typeof a == "function") ? (e || (e = new or()), ug(e, a, o)) : sr ? (n || (n = new sr()), hg(n, a, o)) : (r || (r = { key: {}, next: null }), gg(r, a, o));
    }
  };
  return i;
}, vg = String.prototype.replace, _g = /%20/g, Gi = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Ba = {
  default: Gi.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return vg.call(t, _g, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: Gi.RFC1738,
  RFC3986: Gi.RFC3986
}, bg = Ba, Yi = Object.prototype.hasOwnProperty, en = Array.isArray, pe = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), xg = function(e) {
  for (; e.length > 1; ) {
    var n = e.pop(), r = n.obj[n.prop];
    if (en(r)) {
      for (var i = [], a = 0; a < r.length; ++a)
        typeof r[a] < "u" && i.push(r[a]);
      n.obj[n.prop] = i;
    }
  }
}, tc = function(e, n) {
  for (var r = n && n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < e.length; ++i)
    typeof e[i] < "u" && (r[i] = e[i]);
  return r;
}, wg = function t(e, n, r) {
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
  return en(e) && !en(n) && (i = tc(e, r)), en(e) && en(n) ? (n.forEach(function(a, o) {
    if (Yi.call(e, o)) {
      var s = e[o];
      s && typeof s == "object" && a && typeof a == "object" ? e[o] = t(s, a, r) : e.push(a);
    } else
      e[o] = a;
  }), e) : Object.keys(n).reduce(function(a, o) {
    var s = n[o];
    return Yi.call(a, o) ? a[o] = t(a[o], s, r) : a[o] = s, a;
  }, i);
}, Sg = function(e, n) {
  return Object.keys(n).reduce(function(r, i) {
    return r[i] = n[i], r;
  }, e);
}, Cg = function(t, e, n) {
  var r = t.replace(/\+/g, " ");
  if (n === "iso-8859-1")
    return r.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(r);
  } catch {
    return r;
  }
}, Og = function(e, n, r, i, a) {
  if (e.length === 0)
    return e;
  var o = e;
  if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), r === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(p) {
      return "%26%23" + parseInt(p.slice(2), 16) + "%3B";
    });
  for (var s = "", c = 0; c < o.length; ++c) {
    var u = o.charCodeAt(c);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || a === bg.RFC1738 && (u === 40 || u === 41)) {
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
}, Mg = function(e) {
  for (var n = [{ obj: { o: e }, prop: "o" }], r = [], i = 0; i < n.length; ++i)
    for (var a = n[i], o = a.obj[a.prop], s = Object.keys(o), c = 0; c < s.length; ++c) {
      var u = s[c], p = o[u];
      typeof p == "object" && p !== null && r.indexOf(p) === -1 && (n.push({ obj: o, prop: u }), r.push(p));
    }
  return xg(n), e;
}, Ag = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, Pg = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, Eg = function(e, n) {
  return [].concat(e, n);
}, $g = function(e, n) {
  if (en(e)) {
    for (var r = [], i = 0; i < e.length; i += 1)
      r.push(n(e[i]));
    return r;
  }
  return n(e);
}, ec = {
  arrayToObject: tc,
  assign: Sg,
  combine: Eg,
  compact: Mg,
  decode: Cg,
  encode: Og,
  isBuffer: Pg,
  isRegExp: Ag,
  maybeMap: $g,
  merge: wg
}, nc = yg, pr = ec, Hn = Ba, Tg = Object.prototype.hasOwnProperty, Xo = {
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
}, Ae = Array.isArray, Ig = Array.prototype.push, rc = function(t, e) {
  Ig.apply(t, Ae(e) ? e : [e]);
}, kg = Date.prototype.toISOString, Qo = Hn.default, $t = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: pr.encode,
  encodeValuesOnly: !1,
  format: Qo,
  formatter: Hn.formatters[Qo],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return kg.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Ng = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Xi = {}, Dg = function t(e, n, r, i, a, o, s, c, u, p, h, m, l, v, _, y) {
  for (var f = e, d = y, b = 0, P = !1; (d = d.get(Xi)) !== void 0 && !P; ) {
    var T = d.get(e);
    if (b += 1, typeof T < "u") {
      if (T === b)
        throw new RangeError("Cyclic object value");
      P = !0;
    }
    typeof d.get(Xi) > "u" && (b = 0);
  }
  if (typeof c == "function" ? f = c(n, f) : f instanceof Date ? f = h(f) : r === "comma" && Ae(f) && (f = pr.maybeMap(f, function(W) {
    return W instanceof Date ? h(W) : W;
  })), f === null) {
    if (a)
      return s && !v ? s(n, $t.encoder, _, "key", m) : n;
    f = "";
  }
  if (Ng(f) || pr.isBuffer(f)) {
    if (s) {
      var z = v ? n : s(n, $t.encoder, _, "key", m);
      return [l(z) + "=" + l(s(f, $t.encoder, _, "value", m))];
    }
    return [l(n) + "=" + l(String(f))];
  }
  var H = [];
  if (typeof f > "u")
    return H;
  var j;
  if (r === "comma" && Ae(f))
    v && s && (f = pr.maybeMap(f, s)), j = [{ value: f.length > 0 ? f.join(",") || null : void 0 }];
  else if (Ae(c))
    j = c;
  else {
    var N = Object.keys(f);
    j = u ? N.sort(u) : N;
  }
  for (var F = i && Ae(f) && f.length === 1 ? n + "[]" : n, w = 0; w < j.length; ++w) {
    var S = j[w], C = typeof S == "object" && typeof S.value < "u" ? S.value : f[S];
    if (!(o && C === null)) {
      var E = Ae(f) ? typeof r == "function" ? r(F, S) : F : F + (p ? "." + S : "[" + S + "]");
      y.set(e, b);
      var L = nc();
      L.set(Xi, y), rc(H, t(
        C,
        E,
        r,
        i,
        a,
        o,
        r === "comma" && v && Ae(f) ? null : s,
        c,
        u,
        p,
        h,
        m,
        l,
        v,
        _,
        L
      ));
    }
  }
  return H;
}, Rg = function(e) {
  if (!e)
    return $t;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var n = e.charset || $t.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = Hn.default;
  if (typeof e.format < "u") {
    if (!Tg.call(Hn.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    r = e.format;
  }
  var i = Hn.formatters[r], a = $t.filter;
  return (typeof e.filter == "function" || Ae(e.filter)) && (a = e.filter), {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : $t.addQueryPrefix,
    allowDots: typeof e.allowDots > "u" ? $t.allowDots : !!e.allowDots,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : $t.charsetSentinel,
    delimiter: typeof e.delimiter > "u" ? $t.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : $t.encode,
    encoder: typeof e.encoder == "function" ? e.encoder : $t.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : $t.encodeValuesOnly,
    filter: a,
    format: r,
    formatter: i,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : $t.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : $t.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : $t.strictNullHandling
  };
}, Fg = function(t, e) {
  var n = t, r = Rg(e), i, a;
  typeof r.filter == "function" ? (a = r.filter, n = a("", n)) : Ae(r.filter) && (a = r.filter, i = a);
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
  for (var p = nc(), h = 0; h < i.length; ++h) {
    var m = i[h];
    r.skipNulls && n[m] === null || rc(o, Dg(
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
}, Cn = ec, da = Object.prototype.hasOwnProperty, Lg = Array.isArray, wt = {
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
}, zg = function(t) {
  return t.replace(/&#(\d+);/g, function(e, n) {
    return String.fromCharCode(parseInt(n, 10));
  });
}, ic = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, Bg = "utf8=%26%2310003%3B", jg = "utf8=%E2%9C%93", Wg = function(e, n) {
  var r = { __proto__: null }, i = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, a = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, o = i.split(n.delimiter, a), s = -1, c, u = n.charset;
  if (n.charsetSentinel)
    for (c = 0; c < o.length; ++c)
      o[c].indexOf("utf8=") === 0 && (o[c] === jg ? u = "utf-8" : o[c] === Bg && (u = "iso-8859-1"), s = c, c = o.length);
  for (c = 0; c < o.length; ++c)
    if (c !== s) {
      var p = o[c], h = p.indexOf("]="), m = h === -1 ? p.indexOf("=") : h + 1, l, v;
      m === -1 ? (l = n.decoder(p, wt.decoder, u, "key"), v = n.strictNullHandling ? null : "") : (l = n.decoder(p.slice(0, m), wt.decoder, u, "key"), v = Cn.maybeMap(
        ic(p.slice(m + 1), n),
        function(_) {
          return n.decoder(_, wt.decoder, u, "value");
        }
      )), v && n.interpretNumericEntities && u === "iso-8859-1" && (v = zg(v)), p.indexOf("[]=") > -1 && (v = Lg(v) ? [v] : v), da.call(r, l) ? r[l] = Cn.combine(r[l], v) : r[l] = v;
    }
  return r;
}, qg = function(t, e, n, r) {
  for (var i = r ? e : ic(e, n), a = t.length - 1; a >= 0; --a) {
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
}, Hg = function(e, n, r, i) {
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
    return c && p.push("[" + a.slice(c.index) + "]"), qg(p, n, r, i);
  }
}, Ug = function(e) {
  if (!e)
    return wt;
  if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = typeof e.charset > "u" ? wt.charset : e.charset;
  return {
    allowDots: typeof e.allowDots > "u" ? wt.allowDots : !!e.allowDots,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : wt.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : wt.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : wt.arrayLimit,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : wt.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : wt.comma,
    decoder: typeof e.decoder == "function" ? e.decoder : wt.decoder,
    delimiter: typeof e.delimiter == "string" || Cn.isRegExp(e.delimiter) ? e.delimiter : wt.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : wt.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : wt.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : wt.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : wt.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : wt.strictNullHandling
  };
}, Vg = function(t, e) {
  var n = Ug(e);
  if (t === "" || t === null || typeof t > "u")
    return n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var r = typeof t == "string" ? Wg(t, n) : t, i = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(r), o = 0; o < a.length; ++o) {
    var s = a[o], c = Hg(s, r[s], n, typeof t == "string");
    i = Cn.merge(i, c, n);
  }
  return n.allowSparse === !0 ? i : Cn.compact(i);
}, Gg = Fg, Yg = Vg, Xg = Ba, Qg = {
  formats: Xg,
  parse: Yg,
  stringify: Gg
};
const Jg = /* @__PURE__ */ Xn(Qg), Kg = {
  name: "tipi-topics",
  props: {
    meta: String,
    topics: Array,
    tags: Array,
    topicsStyles: Object
  },
  computed: {
    sortedTopics: function() {
      return this.$props.topics.slice().sort(Fr);
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
      return Jg.stringify({
        topic: t,
        subtopics: e || void 0,
        tags: n || void 0
      });
    }
  }
}, Zg = {
  key: 0,
  class: "c-topics c-topics--extended"
}, tm = { class: "c-topics__label" }, em = { class: "c-topics__list" }, nm = {
  key: 0,
  class: "c-topics__list-subtopic"
}, rm = {
  key: 0,
  class: "c-topics__list-tags"
};
function im(t, e, n, r, i, a) {
  const o = _t("router-link");
  return n.topics ? (R(), q("div", Zg, [
    B("h6", tm, tt(n.meta), 1),
    B("ul", em, [
      (R(!0), q(te, null, ee(a.sortedTopics, (s, c) => (R(), q("li", {
        key: s,
        class: "c-topics__list-topic"
      }, [
        vt(o, {
          id: `topic-${c}`,
          class: "c-topics__topic",
          style: ie(`background-color:${n.topicsStyles[s].color}`),
          to: { name: "results", params: { data: a.paramsData(s) } }
        }, {
          default: zt(() => [
            bt(tt(s), 1)
          ]),
          _: 2
        }, 1032, ["id", "style", "to"]),
        a.getSubtopics(s) ? (R(), q("ul", nm, [
          (R(!0), q(te, null, ee(a.getSubtopics(s), (u) => (R(), q("li", {
            key: u + " - " + s,
            class: "c-topics__subtopic"
          }, [
            vt(o, {
              class: "c-topics__link",
              to: { name: "results", params: { data: a.paramsData(s, u) } }
            }, {
              default: zt(() => [
                bt(tt(u), 1)
              ]),
              _: 2
            }, 1032, ["to"]),
            a.getTags(u) ? (R(), q("ul", rm, [
              (R(!0), q(te, null, ee(a.getTags(u), (p) => (R(), q("li", {
                key: p + " - " + s,
                class: "c-topics__tag"
              }, [
                vt(o, {
                  class: "c-topics__link",
                  to: { name: "results", params: { data: a.paramsData(s, u, p) } }
                }, {
                  default: zt(() => [
                    bt(tt(p), 1)
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
const am = /* @__PURE__ */ pt(Kg, [["render", im]]);
var pa = "http://www.w3.org/1999/xhtml";
const Jo = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: pa,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Lr(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Jo.hasOwnProperty(e) ? { space: Jo[e], local: t } : t;
}
function om(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === pa && e.documentElement.namespaceURI === pa ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function sm(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ac(t) {
  var e = Lr(t);
  return (e.local ? sm : om)(e);
}
function cm() {
}
function ja(t) {
  return t == null ? cm : function() {
    return this.querySelector(t);
  };
}
function um(t) {
  typeof t != "function" && (t = ja(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = new Array(o), c, u, p = 0; p < o; ++p)
      (c = a[p]) && (u = t.call(c, c.__data__, p, a)) && ("__data__" in c && (u.__data__ = c.__data__), s[p] = u);
  return new Bt(r, this._parents);
}
function lm() {
  return [];
}
function oc(t) {
  return t == null ? lm : function() {
    return this.querySelectorAll(t);
  };
}
function fm(t) {
  typeof t != "function" && (t = oc(t));
  for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a)
    for (var o = e[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && (r.push(t.call(c, c.__data__, u, o)), i.push(c));
  return new Bt(r, i);
}
function sc(t) {
  return function() {
    return this.matches(t);
  };
}
function hm(t) {
  typeof t != "function" && (t = sc(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new Bt(r, this._parents);
}
function cc(t) {
  return new Array(t.length);
}
function dm() {
  return new Bt(this._enter || this._groups.map(cc), this._parents);
}
function Or(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Or.prototype = {
  constructor: Or,
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
function pm(t) {
  return function() {
    return t;
  };
}
var Ko = "$";
function gm(t, e, n, r, i, a) {
  for (var o = 0, s, c = e.length, u = a.length; o < u; ++o)
    (s = e[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new Or(t, a[o]);
  for (; o < c; ++o)
    (s = e[o]) && (i[o] = s);
}
function mm(t, e, n, r, i, a, o) {
  var s, c, u = {}, p = e.length, h = a.length, m = new Array(p), l;
  for (s = 0; s < p; ++s)
    (c = e[s]) && (m[s] = l = Ko + o.call(c, c.__data__, s, e), l in u ? i[s] = c : u[l] = c);
  for (s = 0; s < h; ++s)
    l = Ko + o.call(t, a[s], s, a), (c = u[l]) ? (r[s] = c, c.__data__ = a[s], u[l] = null) : n[s] = new Or(t, a[s]);
  for (s = 0; s < p; ++s)
    (c = e[s]) && u[m[s]] === c && (i[s] = c);
}
function ym(t, e) {
  if (!t)
    return l = new Array(this.size()), u = -1, this.each(function(z) {
      l[++u] = z;
    }), l;
  var n = e ? mm : gm, r = this._parents, i = this._groups;
  typeof t != "function" && (t = pm(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
    var p = r[u], h = i[u], m = h.length, l = t.call(p, p && p.__data__, u, r), v = l.length, _ = s[u] = new Array(v), y = o[u] = new Array(v), f = c[u] = new Array(m);
    n(p, h, _, y, f, l, e);
    for (var d = 0, b = 0, P, T; d < v; ++d)
      if (P = _[d]) {
        for (d >= b && (b = d + 1); !(T = y[b]) && ++b < v; )
          ;
        P._next = T || null;
      }
  }
  return o = new Bt(o, r), o._enter = s, o._exit = c, o;
}
function vm() {
  return new Bt(this._exit || this._groups.map(cc), this._parents);
}
function _m(t, e, n) {
  var r = this.enter(), i = this, a = this.exit();
  return r = typeof t == "function" ? t(r) : r.append(t + ""), e != null && (i = e(i)), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function bm(t) {
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var c = e[s], u = n[s], p = c.length, h = o[s] = new Array(p), m, l = 0; l < p; ++l)
      (m = c[l] || u[l]) && (h[l] = m);
  for (; s < r; ++s)
    o[s] = e[s];
  return new Bt(o, this._parents);
}
function xm() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function wm(t) {
  t || (t = Sm);
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
function Sm(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Cm() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Om() {
  var t = new Array(this.size()), e = -1;
  return this.each(function() {
    t[++e] = this;
  }), t;
}
function Mm() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o)
        return o;
    }
  return null;
}
function Am() {
  var t = 0;
  return this.each(function() {
    ++t;
  }), t;
}
function Pm() {
  return !this.node();
}
function Em(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function $m(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Tm(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Im(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function km(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Nm(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Dm(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Rm(t, e) {
  var n = Lr(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Tm : $m : typeof e == "function" ? n.local ? Dm : Nm : n.local ? km : Im)(n, e));
}
function uc(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Fm(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Lm(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function zm(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Bm(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Fm : typeof e == "function" ? zm : Lm)(t, e, n ?? "")) : On(this.node(), t);
}
function On(t, e) {
  return t.style.getPropertyValue(e) || uc(t).getComputedStyle(t, null).getPropertyValue(e);
}
function jm(t) {
  return function() {
    delete this[t];
  };
}
function Wm(t, e) {
  return function() {
    this[t] = e;
  };
}
function qm(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Hm(t, e) {
  return arguments.length > 1 ? this.each((e == null ? jm : typeof e == "function" ? qm : Wm)(t, e)) : this.node()[t];
}
function lc(t) {
  return t.trim().split(/^|\s+/);
}
function Wa(t) {
  return t.classList || new fc(t);
}
function fc(t) {
  this._node = t, this._names = lc(t.getAttribute("class") || "");
}
fc.prototype = {
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
function hc(t, e) {
  for (var n = Wa(t), r = -1, i = e.length; ++r < i; )
    n.add(e[r]);
}
function dc(t, e) {
  for (var n = Wa(t), r = -1, i = e.length; ++r < i; )
    n.remove(e[r]);
}
function Um(t) {
  return function() {
    hc(this, t);
  };
}
function Vm(t) {
  return function() {
    dc(this, t);
  };
}
function Gm(t, e) {
  return function() {
    (e.apply(this, arguments) ? hc : dc)(this, t);
  };
}
function Ym(t, e) {
  var n = lc(t + "");
  if (arguments.length < 2) {
    for (var r = Wa(this.node()), i = -1, a = n.length; ++i < a; )
      if (!r.contains(n[i]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Gm : e ? Um : Vm)(n, e));
}
function Xm() {
  this.textContent = "";
}
function Qm(t) {
  return function() {
    this.textContent = t;
  };
}
function Jm(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Km(t) {
  return arguments.length ? this.each(t == null ? Xm : (typeof t == "function" ? Jm : Qm)(t)) : this.node().textContent;
}
function Zm() {
  this.innerHTML = "";
}
function ty(t) {
  return function() {
    this.innerHTML = t;
  };
}
function ey(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function ny(t) {
  return arguments.length ? this.each(t == null ? Zm : (typeof t == "function" ? ey : ty)(t)) : this.node().innerHTML;
}
function ry() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function iy() {
  return this.each(ry);
}
function ay() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function oy() {
  return this.each(ay);
}
function sy(t) {
  var e = typeof t == "function" ? t : ac(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function cy() {
  return null;
}
function uy(t, e) {
  var n = typeof t == "function" ? t : ac(t), r = e == null ? cy : typeof e == "function" ? e : ja(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function ly() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function fy() {
  return this.each(ly);
}
function hy() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function dy() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function py(t) {
  return this.select(t ? dy : hy);
}
function gy(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
var pc = {};
if (typeof document < "u") {
  var my = document.documentElement;
  "onmouseenter" in my || (pc = { mouseenter: "mouseover", mouseleave: "mouseout" });
}
function yy(t, e, n) {
  return t = gc(t, e, n), function(r) {
    var i = r.relatedTarget;
    (!i || i !== this && !(i.compareDocumentPosition(this) & 8)) && t.call(this, r);
  };
}
function gc(t, e, n) {
  return function(r) {
    try {
      t.call(this, this.__data__, e, n);
    } finally {
    }
  };
}
function vy(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function _y(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, a; n < i; ++n)
        a = e[n], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.capture) : e[++r] = a;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function by(t, e, n) {
  var r = pc.hasOwnProperty(t.type) ? yy : gc;
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
function xy(t, e, n) {
  var r = vy(t + ""), i, a = r.length, o;
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
  for (s = e ? by : _y, n == null && (n = !1), i = 0; i < a; ++i)
    this.each(s(r[i], e, n));
  return this;
}
function mc(t, e, n) {
  var r = uc(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function wy(t, e) {
  return function() {
    return mc(this, t, e);
  };
}
function Sy(t, e) {
  return function() {
    return mc(this, t, e.apply(this, arguments));
  };
}
function Cy(t, e) {
  return this.each((typeof e == "function" ? Sy : wy)(t, e));
}
var qa = [null];
function Bt(t, e) {
  this._groups = t, this._parents = e;
}
function Tn() {
  return new Bt([[document.documentElement]], qa);
}
Bt.prototype = Tn.prototype = {
  constructor: Bt,
  select: um,
  selectAll: fm,
  filter: hm,
  data: ym,
  enter: dm,
  exit: vm,
  join: _m,
  merge: bm,
  order: xm,
  sort: wm,
  call: Cm,
  nodes: Om,
  node: Mm,
  size: Am,
  empty: Pm,
  each: Em,
  attr: Rm,
  style: Bm,
  property: Hm,
  classed: Ym,
  text: Km,
  html: ny,
  raise: iy,
  lower: oy,
  append: sy,
  insert: uy,
  remove: fy,
  clone: py,
  datum: gy,
  on: xy,
  dispatch: Cy
};
function cn(t) {
  return typeof t == "string" ? new Bt([[document.querySelector(t)]], [document.documentElement]) : new Bt([[t]], qa);
}
function zr(t) {
  return typeof t == "string" ? new Bt([document.querySelectorAll(t)], [document.documentElement]) : new Bt([t ?? []], qa);
}
function Br(t) {
  return +t;
}
function jr(t) {
  return t * t;
}
function Wr(t) {
  return t * (2 - t);
}
function Fe(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}
function qr(t) {
  return t * t * t;
}
function Hr(t) {
  return --t * t * t + 1;
}
function Pe(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Ha = 3, Ur = function t(e) {
  e = +e;
  function n(r) {
    return Math.pow(r, e);
  }
  return n.exponent = t, n;
}(Ha), Vr = function t(e) {
  e = +e;
  function n(r) {
    return 1 - Math.pow(1 - r, e);
  }
  return n.exponent = t, n;
}(Ha), Le = function t(e) {
  e = +e;
  function n(r) {
    return ((r *= 2) <= 1 ? Math.pow(r, e) : 2 - Math.pow(2 - r, e)) / 2;
  }
  return n.exponent = t, n;
}(Ha), yc = Math.PI, vc = yc / 2;
function Gr(t) {
  return +t == 1 ? 1 : 1 - Math.cos(t * vc);
}
function Yr(t) {
  return Math.sin(t * vc);
}
function ze(t) {
  return (1 - Math.cos(yc * t)) / 2;
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
function je(t) {
  return ((t *= 2) <= 1 ? Be(1 - t) : 2 - Be(t - 1)) / 2;
}
function Jr(t) {
  return 1 - Math.sqrt(1 - t * t);
}
function Kr(t) {
  return Math.sqrt(1 - --t * t);
}
function We(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}
var ga = 4 / 11, Oy = 6 / 11, My = 8 / 11, Ay = 3 / 4, Py = 9 / 11, Ey = 10 / 11, $y = 15 / 16, Ty = 21 / 22, Iy = 63 / 64, cr = 1 / ga / ga;
function Zr(t) {
  return 1 - ae(1 - t);
}
function ae(t) {
  return (t = +t) < ga ? cr * t * t : t < My ? cr * (t -= Oy) * t + Ay : t < Ey ? cr * (t -= Py) * t + $y : cr * (t -= Ty) * t + Iy;
}
function ti(t) {
  return ((t *= 2) <= 1 ? 1 - ae(1 - t) : ae(t - 1) + 1) / 2;
}
var Ua = 1.70158, ei = function t(e) {
  e = +e;
  function n(r) {
    return (r = +r) * r * (e * (r - 1) + r);
  }
  return n.overshoot = t, n;
}(Ua), an = function t(e) {
  e = +e;
  function n(r) {
    return --r * r * ((r + 1) * e + r) + 1;
  }
  return n.overshoot = t, n;
}(Ua), qe = function t(e) {
  e = +e;
  function n(r) {
    return ((r *= 2) < 1 ? r * r * ((e + 1) * r - e) : (r -= 2) * r * ((e + 1) * r + e) + 2) / 2;
  }
  return n.overshoot = t, n;
}(Ua), Mn = 2 * Math.PI, Va = 1, Ga = 0.3, ni = function t(e, n) {
  var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= Mn);
  function i(a) {
    return e * Be(- --a) * Math.sin((r - a) / n);
  }
  return i.amplitude = function(a) {
    return t(a, n * Mn);
  }, i.period = function(a) {
    return t(e, a);
  }, i;
}(Va, Ga), He = function t(e, n) {
  var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= Mn);
  function i(a) {
    return 1 - e * Be(a = +a) * Math.sin((a + r) / n);
  }
  return i.amplitude = function(a) {
    return t(a, n * Mn);
  }, i.period = function(a) {
    return t(e, a);
  }, i;
}(Va, Ga), ri = function t(e, n) {
  var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= Mn);
  function i(a) {
    return ((a = a * 2 - 1) < 0 ? e * Be(-a) * Math.sin((r - a) / n) : 2 - e * Be(a) * Math.sin((r + a) / n)) / 2;
  }
  return i.amplitude = function(a) {
    return t(a, n * Mn);
  }, i.period = function(a) {
    return t(e, a);
  }, i;
}(Va, Ga);
const ky = {
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
}, Ny = {
  key: 0,
  style: { width: "100%", height: "200px" }
};
function Dy(t, e, n, r, i, a) {
  return n.topics ? (R(), q("svg", Ny)) : at("", !0);
}
const Ry = /* @__PURE__ */ pt(ky, [["render", Dy]]), Fy = {
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
}, Ly = { class: "o-container" }, zy = { class: "o-grid o-grid--reverse" }, By = { class: "o-grid__col u-12 u-3@sm u-offset-1@sm" }, jy = ["src", "alt"], Wy = { class: "o-grid__col u-12 u-8@sm" }, qy = { class: "c-topic-card__title" }, Hy = { class: "c-topic-card__description" };
function Uy(t, e, n, r, i, a) {
  return R(), q("div", {
    style: ie(`background-color: ${a.getColor(n.topic)}`),
    class: "c-topic-card"
  }, [
    B("div", Ly, [
      B("div", zy, [
        B("div", By, [
          B("img", {
            src: `/img/topics/${a.getIcon(n.topic)}`,
            alt: `Imagen de ${n.topic.name}`,
            class: "c-topic-card__image"
          }, null, 8, jy)
        ]),
        B("div", Wy, [
          B("h1", qy, tt(n.topic.name), 1),
          B("div", Hy, [
            (R(!0), q(te, null, ee(n.topic.description, (o) => (R(), q("p", { key: o }, tt(o), 1))), 128))
          ])
        ])
      ])
    ])
  ], 4);
}
const Vy = /* @__PURE__ */ pt(Fy, [["render", Uy]]), Gy = {
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
}, Yy = { class: "c-topic-link" }, Xy = ["src", "alt"], Qy = { class: "c-topic-link__name" };
function Jy(t, e, n, r, i, a) {
  const o = _t("router-link");
  return R(), q("div", null, [
    B("div", Yy, [
      vt(o, {
        to: { name: "topic", params: { id: n.topic.id } },
        class: "c-topic-link__image-link",
        style: ie(`background-color: ${n.color}`)
      }, {
        default: zt(() => [
          B("img", {
            src: a.topicImage,
            alt: `Imagen de ${n.topic.name}`,
            class: "c-topic-link__image"
          }, null, 8, Xy)
        ]),
        _: 1
      }, 8, ["to", "style"]),
      B("h4", Qy, [
        vt(o, {
          to: { name: "topic", params: { id: n.topic.id } }
        }, {
          default: zt(() => [
            bt(tt(n.topic.name), 1)
          ]),
          _: 1
        }, 8, ["to"])
      ])
    ])
  ]);
}
const Ky = /* @__PURE__ */ pt(Gy, [["render", Jy]]);
const Zy = {
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
}, tv = { style: { width: "300px", height: "500px" } };
function ev(t, e, n, r, i, a) {
  return R(), q("svg", tv);
}
const nv = /* @__PURE__ */ pt(Zy, [["render", ev]]), rv = {
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
}, iv = {
  key: 0,
  class: "c-splash"
}, av = { class: "c-splash__outer" }, ov = { class: "c-splash__inner" };
function sv(t, e, n, r, i, a) {
  return a.closedSplash ? at("", !0) : (R(), q("div", iv, [
    B("div", av, [
      B("div", ov, [
        Ia(t.$slots, "default"),
        B("p", null, [
          B("a", {
            class: Lt(["c-splash__close", n.closeClass]),
            href: "#",
            onClick: e[0] || (e[0] = (...o) => a.closeSplash && a.closeSplash(...o))
          }, tt(n.closeText), 3)
        ])
      ])
    ])
  ]));
}
const cv = /* @__PURE__ */ pt(rv, [["render", sv]]);
const uv = {
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
      }), this.rows = this.barOrder === "alphabetically" ? n.sort((i, a) => Fr(i.topic, a.topic)) : this.barOrder === "asc" ? n.sort((i, a) => i.times - a.times) : n.sort((i, a) => a.times - i.times);
    },
    getTagged() {
      return this.result.tagged.filter((t) => t.knowledgebase == this.knowledgebase).pop();
    }
  }
}, lv = { class: "tipichart__tip" }, fv = { class: "tipichart__bar" };
function hv(t, e, n, r, i, a) {
  return R(), Ct(Yu, {
    tag: "div",
    class: "tipichart",
    name: "barfade"
  }, {
    default: zt(() => [
      (R(!0), q(te, null, ee(i.rows, (o) => (R(), q("div", {
        class: "tipichart__row",
        key: o.topic,
        style: ie(a.rowStyle)
      }, [
        B("div", {
          class: "tipichart__tooltip",
          style: ie({ bottom: `${n.barHeight}px` })
        }, [
          B("div", lv, tt(o.topic) + " " + tt(o.percent) + "%", 1)
        ], 4),
        B("div", {
          class: "tipichart__icon",
          style: ie(o.iconStyle)
        }, null, 4),
        B("div", fv, [
          B("div", {
            class: "tipichart__backbar",
            style: ie(o.backbarStyle)
          }, null, 4),
          B("div", {
            class: "tipichart__overbar",
            style: ie(o.overbarStyle)
          }, null, 4)
        ])
      ], 4))), 128))
    ]),
    _: 1
  });
}
const dv = /* @__PURE__ */ pt(uv, [["render", hv]]);
var _c = {};
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
      return new Promise(function(C, E) {
        c(S) ? C(S) : E(new Error("an HTMLElement or SVGElement is required; got " + S));
      });
    }, h = function(S) {
      return S && S.lastIndexOf("http", 0) === 0 && S.lastIndexOf(window.location.host) === -1;
    }, m = function(S) {
      var C = Object.keys(s).filter(function(E) {
        return S.indexOf("." + E) > 0;
      }).map(function(E) {
        return s[E];
      });
      return C ? C[0] : (console.error("Unknown font format for " + S + ". Fonts may not be working correctly."), "application/octet-stream");
    }, l = function(S) {
      for (var C = "", E = new Uint8Array(S), L = 0; L < E.byteLength; L++)
        C += String.fromCharCode(E[L]);
      return window.btoa(C);
    }, v = function(S, C, E) {
      var L = S.viewBox && S.viewBox.baseVal && S.viewBox.baseVal[E] || C.getAttribute(E) !== null && !C.getAttribute(E).match(/%$/) && parseInt(C.getAttribute(E)) || S.getBoundingClientRect()[E] || parseInt(C.style[E]) || parseInt(window.getComputedStyle(S).getPropertyValue(E));
      return typeof L > "u" || L === null || isNaN(parseFloat(L)) ? 0 : L;
    }, _ = function(S, C, E, L) {
      if (S.tagName === "svg")
        return {
          width: E || v(S, C, "width"),
          height: L || v(S, C, "height")
        };
      if (S.getBBox) {
        var W = S.getBBox(), G = W.x, K = W.y, et = W.width, Q = W.height;
        return {
          width: G + et,
          height: K + Q
        };
      }
    }, y = function(S) {
      return decodeURIComponent(encodeURIComponent(S).replace(/%([0-9A-F]{2})/g, function(C, E) {
        var L = String.fromCharCode("0x" + E);
        return L === "%" ? "%25" : L;
      }));
    }, f = function(S) {
      for (var C = window.atob(S.split(",")[1]), E = S.split(",")[0].split(":")[1].split(";")[0], L = new ArrayBuffer(C.length), W = new Uint8Array(L), G = 0; G < C.length; G++)
        W[G] = C.charCodeAt(G);
      return new Blob([L], { type: E });
    }, d = function(S, C) {
      if (C)
        try {
          return S.querySelector(C) || S.parentNode && S.parentNode.querySelector(C);
        } catch (E) {
          console.warn('Invalid CSS selector "' + C + '"', E);
        }
    }, b = function(S, C) {
      var E = S.cssText.match(o), L = E && E[1] || "";
      if (!(!L || L.match(/^data:/) || L === "about:blank")) {
        var W = L.startsWith("../") ? C + "/../" + L : L.startsWith("./") ? C + "/." + L : L;
        return {
          text: S.cssText,
          format: m(W),
          url: W
        };
      }
    }, P = function(S) {
      return Promise.all(Array.from(S.querySelectorAll("image")).map(function(C) {
        var E = C.getAttributeNS("http://www.w3.org/1999/xlink", "href") || C.getAttribute("href");
        return E ? (h(E) && (E += (E.indexOf("?") === -1 ? "?" : "&") + "t=" + (/* @__PURE__ */ new Date()).valueOf()), new Promise(function(L, W) {
          var G = document.createElement("canvas"), K = new Image();
          K.crossOrigin = "anonymous", K.src = E, K.onerror = function() {
            return W(new Error("Could not load " + E));
          }, K.onload = function() {
            G.width = K.width, G.height = K.height, G.getContext("2d").drawImage(K, 0, 0), C.setAttributeNS("http://www.w3.org/1999/xlink", "href", G.toDataURL("image/png")), L(!0);
          };
        })) : Promise.resolve(null);
      }));
    }, T = {}, z = function(S) {
      return Promise.all(S.map(function(C) {
        return new Promise(function(E, L) {
          if (T[C.url])
            return E(T[C.url]);
          var W = new XMLHttpRequest();
          W.addEventListener("load", function() {
            var G = l(W.response), K = C.text.replace(o, 'url("data:' + C.format + ";base64," + G + '")') + `
`;
            T[C.url] = K, E(K);
          }), W.addEventListener("error", function(G) {
            console.warn("Failed to load font from: " + C.url, G), T[C.url] = null, E(null);
          }), W.addEventListener("abort", function(G) {
            console.warn("Aborted loading font from: " + C.url, G), E(null);
          }), W.open("GET", C.url), W.responseType = "arraybuffer", W.send();
        });
      })).then(function(C) {
        return C.filter(function(E) {
          return E;
        }).join("");
      });
    }, H = null, j = function() {
      return H || (H = Array.from(document.styleSheets).map(function(S) {
        try {
          return { rules: S.cssRules, href: S.href };
        } catch (C) {
          return console.warn("Stylesheet could not be loaded: " + S.href, C), {};
        }
      }));
    }, N = function(S, C) {
      var E = C || {}, L = E.selectorRemap, W = E.modifyStyle, G = E.modifyCss, K = E.fonts, et = E.excludeUnusedCss, Q = G || function(Z, ut) {
        var ct = L ? L(Z) : Z, J = W ? W(ut) : ut;
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
              var ft = b(J, ct);
              ft && nt.push(ft);
            } else
              et || lt.push(J.cssText);
        });
      }), z(nt).then(function(Z) {
        return lt.join(`
`) + Z;
      });
    }, F = function() {
      if (!navigator.msSaveOrOpenBlob && !("download" in document.createElement("a")))
        return { popup: window.open() };
    };
    e.prepareSvg = function(w, S, C) {
      u(w);
      var E = S || {}, L = E.left, W = L === void 0 ? 0 : L, G = E.top, K = G === void 0 ? 0 : G, et = E.width, Q = E.height, lt = E.scale, st = lt === void 0 ? 1 : lt, nt = E.responsive, Z = nt === void 0 ? !1 : nt, ut = E.excludeCss, ct = ut === void 0 ? !1 : ut;
      return P(w).then(function() {
        var J = w.cloneNode(!0);
        J.style.backgroundColor = (S || {}).backgroundColor || w.style.backgroundColor;
        var ft = _(w, J, et, Q), ht = ft.width, yt = ft.height;
        if (w.tagName !== "svg")
          if (w.getBBox) {
            J.getAttribute("transform") != null && J.setAttribute("transform", J.getAttribute("transform").replace(/translate\(.*?\)/, ""));
            var Ot = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            Ot.appendChild(J), J = Ot;
          } else {
            console.error("Attempted to render non-SVG element", w);
            return;
          }
        if (J.setAttribute("version", "1.1"), J.setAttribute("viewBox", [W, K, ht, yt].join(" ")), J.getAttribute("xmlns") || J.setAttributeNS(n, "xmlns", i), J.getAttribute("xmlns:xlink") || J.setAttributeNS(n, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Z ? (J.removeAttribute("width"), J.removeAttribute("height"), J.setAttribute("preserveAspectRatio", "xMinYMin meet")) : (J.setAttribute("width", ht * st), J.setAttribute("height", yt * st)), Array.from(J.querySelectorAll("foreignObject > *")).forEach(function(At) {
          At.setAttributeNS(n, "xmlns", At.tagName === "svg" ? i : r);
        }), ct) {
          var ce = document.createElement("div");
          ce.appendChild(J);
          var ue = ce.innerHTML;
          if (typeof C == "function")
            C(ue, ht, yt);
          else
            return { src: ue, width: ht, height: yt };
        } else
          return N(w, S).then(function(At) {
            var kt = document.createElement("style");
            kt.setAttribute("type", "text/css"), kt.innerHTML = `<![CDATA[
` + At + `
]]>`;
            var Yt = document.createElement("defs");
            Yt.appendChild(kt), J.insertBefore(Yt, J.firstChild);
            var jt = document.createElement("div");
            jt.appendChild(J);
            var Ht = jt.innerHTML.replace(/NS\d+:href/gi, 'xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href');
            if (typeof C == "function")
              C(Ht, ht, yt);
            else
              return { src: Ht, width: ht, height: yt };
          });
      });
    }, e.svgAsDataUri = function(w, S, C) {
      return u(w), e.prepareSvg(w, S).then(function(E) {
        var L = E.src, W = E.width, G = E.height, K = "data:image/svg+xml;base64," + window.btoa(y(a + L));
        return typeof C == "function" && C(K, W, G), K;
      });
    }, e.svgAsPngUri = function(w, S, C) {
      u(w);
      var E = S || {}, L = E.encoderType, W = L === void 0 ? "image/png" : L, G = E.encoderOptions, K = G === void 0 ? 0.8 : G, et = E.canvg, Q = function(st) {
        var nt = st.src, Z = st.width, ut = st.height, ct = document.createElement("canvas"), J = ct.getContext("2d"), ft = window.devicePixelRatio || 1;
        ct.width = Z * ft, ct.height = ut * ft, ct.style.width = ct.width + "px", ct.style.height = ct.height + "px", J.setTransform(ft, 0, 0, ft, 0, 0), et ? et(ct, nt) : J.drawImage(nt, 0, 0);
        var ht = void 0;
        try {
          ht = ct.toDataURL(W, K);
        } catch (yt) {
          if (typeof SecurityError < "u" && yt instanceof SecurityError || yt.name === "SecurityError") {
            console.error("Rendered SVG images cannot be downloaded in this browser.");
            return;
          } else
            throw yt;
        }
        return typeof C == "function" && C(ht, ct.width, ct.height), Promise.resolve(ht);
      };
      return et ? e.prepareSvg(w, S).then(Q) : e.svgAsDataUri(w, S).then(function(lt) {
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
    }, e.download = function(w, S, C) {
      if (navigator.msSaveOrOpenBlob)
        navigator.msSaveOrOpenBlob(f(S), w);
      else {
        var E = document.createElement("a");
        if ("download" in E) {
          E.download = w, E.style.display = "none", document.body.appendChild(E);
          try {
            var L = f(S), W = URL.createObjectURL(L);
            E.href = W, E.onclick = function() {
              return requestAnimationFrame(function() {
                return URL.revokeObjectURL(W);
              });
            };
          } catch (G) {
            console.error(G), console.warn("Error while getting object URL. Falling back to string URL."), E.href = S;
          }
          E.click(), document.body.removeChild(E);
        } else
          C && C.popup && (C.popup.document.title = w, C.popup.location.replace(S));
      }
    }, e.saveSvg = function(w, S, C) {
      var E = F();
      return p(w).then(function(L) {
        return e.svgAsDataUri(L, C || {});
      }).then(function(L) {
        return e.download(S, L, E);
      });
    }, e.saveSvgAsPng = function(w, S, C) {
      var E = F();
      return p(w).then(function(L) {
        return e.svgAsPngUri(L, C || {});
      }).then(function(L) {
        return e.download(S, L, E);
      });
    };
  })();
})(_c);
const pv = {
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
      _c.saveSvgAsPng(t, "chart.png", {
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
}, gv = { class: "chart__wrapper" }, mv = {
  key: 0,
  class: "chart__title"
}, yv = {
  key: 1,
  class: "chart__source"
}, vv = {
  key: 2,
  class: "chart__source"
};
function _v(t, e, n, r, i, a) {
  return R(), q("div", gv, [
    n.title ? (R(), q("div", mv, tt(n.title), 1)) : at("", !0),
    B("div", {
      ref: "chart",
      style: ie({ height: `${this.height}px` })
    }, null, 4),
    n.source ? (R(), q("div", yv, tt(n.source), 1)) : at("", !0),
    n.download ? (R(), q("div", vv, [
      B("span", {
        onClick: e[0] || (e[0] = (...o) => a.downloadSVG && a.downloadSVG(...o))
      }, tt(n.download), 1)
    ])) : at("", !0)
  ]);
}
const ii = /* @__PURE__ */ pt(pv, [["render", _v]]), bv = { select: cn };
class ai {
  constructor(e, n, r, i) {
    this.selection = bv.select(e), this.data = n, this.cfg = i, this._setConfig(r), this.onResize = () => {
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
function bc(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function xv(t) {
  return t.length === 1 && (t = wv(t)), {
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
function wv(t) {
  return function(e, n) {
    return bc(t(e), n);
  };
}
var Sv = xv(bc), Cv = Sv.right;
function Ov(t, e) {
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
function Mv(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * n;
  return a;
}
var ma = Math.sqrt(50), ya = Math.sqrt(10), va = Math.sqrt(2);
function Av(t, e, n) {
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
function Pv(t, e, n) {
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
function xc(t, e) {
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
function Ev(t, e) {
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
function Mr() {
}
Mr.prototype = Ar.prototype = {
  constructor: Mr,
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
function Ar(t, e) {
  var n = new Mr();
  if (t instanceof Mr)
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
var Ke = Ar.prototype;
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
var wc = Array.prototype, $v = wc.map, _a = wc.slice, ts = { name: "implicit" };
function In() {
  var t = Ar(), e = [], n = [], r = ts;
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
    e = [], t = Ar();
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
function Sc() {
  var t = In().unknown(void 0), e = t.domain, n = t.range, r = [0, 1], i, a, o = !1, s = 0, c = 0, u = 0.5;
  delete t.unknown;
  function p() {
    var h = e().length, m = r[1] < r[0], l = r[m - 0], v = r[1 - m];
    i = (v - l) / Math.max(1, h - s + c * 2), o && (i = Math.floor(i)), l += (v - l - i * (h - s)) * u, a = i * (1 - s), o && (l = Math.round(l), a = Math.round(a));
    var _ = Mv(h).map(function(y) {
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
    return Sc(e(), r).round(o).paddingInner(s).paddingOuter(c).align(u);
  }, oi.apply(p(), arguments);
}
function Xa(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Cc(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e)
    n[r] = e[r];
  return n;
}
function Jn() {
}
var Un = 0.7, Pr = 1 / Un, xn = "\\s*([+-]?\\d+)\\s*", Vn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", xe = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Tv = /^#([0-9a-f]{3,8})$/, Iv = new RegExp("^rgb\\(" + [xn, xn, xn] + "\\)$"), kv = new RegExp("^rgb\\(" + [xe, xe, xe] + "\\)$"), Nv = new RegExp("^rgba\\(" + [xn, xn, xn, Vn] + "\\)$"), Dv = new RegExp("^rgba\\(" + [xe, xe, xe, Vn] + "\\)$"), Rv = new RegExp("^hsl\\(" + [Vn, xe, xe] + "\\)$"), Fv = new RegExp("^hsla\\(" + [Vn, xe, xe, Vn] + "\\)$"), es = {
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
  formatHsl: Lv,
  formatRgb: rs,
  toString: rs
});
function ns() {
  return this.rgb().formatHex();
}
function Lv() {
  return Oc(this).formatHsl();
}
function rs() {
  return this.rgb().formatRgb();
}
function on(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = Tv.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? is(e) : n === 3 ? new Gt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? ur(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? ur(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Iv.exec(t)) ? new Gt(e[1], e[2], e[3], 1) : (e = kv.exec(t)) ? new Gt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Nv.exec(t)) ? ur(e[1], e[2], e[3], e[4]) : (e = Dv.exec(t)) ? ur(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Rv.exec(t)) ? ss(e[1], e[2] / 100, e[3] / 100, 1) : (e = Fv.exec(t)) ? ss(e[1], e[2] / 100, e[3] / 100, e[4]) : es.hasOwnProperty(t) ? is(es[t]) : t === "transparent" ? new Gt(NaN, NaN, NaN, 0) : null;
}
function is(t) {
  return new Gt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ur(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new Gt(t, e, n, r);
}
function zv(t) {
  return t instanceof Jn || (t = on(t)), t ? (t = t.rgb(), new Gt(t.r, t.g, t.b, t.opacity)) : new Gt();
}
function ba(t, e, n, r) {
  return arguments.length === 1 ? zv(t) : new Gt(t, e, n, r ?? 1);
}
function Gt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Xa(Gt, ba, Cc(Jn, {
  brighter: function(t) {
    return t = t == null ? Pr : Math.pow(Pr, t), new Gt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker: function(t) {
    return t = t == null ? Un : Math.pow(Un, t), new Gt(this.r * t, this.g * t, this.b * t, this.opacity);
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
function Oc(t) {
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
function Bv(t, e, n, r) {
  return arguments.length === 1 ? Oc(t) : new _e(t, e, n, r ?? 1);
}
function _e(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Xa(_e, Bv, Cc(Jn, {
  brighter: function(t) {
    return t = t == null ? Pr : Math.pow(Pr, t), new _e(this.h, this.s, this.l * t, this.opacity);
  },
  darker: function(t) {
    return t = t == null ? Un : Math.pow(Un, t), new _e(this.h, this.s, this.l * t, this.opacity);
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
function jv(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Wv(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function qv(t) {
  return (t = +t) == 1 ? Mc : function(e, n) {
    return n - e ? Wv(e, n, t) : Qa(isNaN(e) ? n : e);
  };
}
function Mc(t, e) {
  var n = e - t;
  return n ? jv(t, n) : Qa(isNaN(t) ? e : t);
}
const Er = function t(e) {
  var n = qv(e);
  function r(i, a) {
    var o = n((i = ba(i)).r, (a = ba(a)).r), s = n(i.g, a.g), c = n(i.b, a.b), u = Mc(i.opacity, a.opacity);
    return function(p) {
      return i.r = o(p), i.g = s(p), i.b = c(p), i.opacity = u(p), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Hv(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i)
      r[i] = t[i] * (1 - a) + e[i] * a;
    return r;
  };
}
function Uv(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Vv(t, e) {
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
function Gv(t, e) {
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
function Yv(t, e) {
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
function Xv(t) {
  return function() {
    return t;
  };
}
function Qv(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Ac(t, e) {
  var n = xa.lastIndex = Ki.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
  for (t = t + "", e = e + ""; (r = xa.exec(t)) && (i = Ki.exec(e)); )
    (a = i.index) > n && (a = e.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: re(r, i) })), n = Ki.lastIndex;
  return n < e.length && (a = e.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? Qv(c[0].x) : Xv(e) : (e = c.length, function(u) {
    for (var p = 0, h; p < e; ++p)
      s[(h = c[p]).i] = h.x(u);
    return s.join("");
  });
}
function Kn(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Qa(e) : (n === "number" ? re : n === "string" ? (r = on(e)) ? (e = r, Er) : Ac : e instanceof on ? Er : e instanceof Date ? Gv : Uv(e) ? Hv : Array.isArray(e) ? Vv : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Yv : re)(t, e);
}
function Jv(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var cs = 180 / Math.PI, wa = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Pc(t, e, n, r, i, a) {
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
var Dn, Zi, us, lr;
function Kv(t) {
  return t === "none" ? wa : (Dn || (Dn = document.createElement("DIV"), Zi = document.documentElement, us = document.defaultView), Dn.style.transform = t, t = us.getComputedStyle(Zi.appendChild(Dn), null).getPropertyValue("transform"), Zi.removeChild(Dn), t = t.slice(7, -1).split(","), Pc(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
}
function Zv(t) {
  return t == null || (lr || (lr = document.createElementNS("http://www.w3.org/2000/svg", "g")), lr.setAttribute("transform", t), !(t = lr.transform.baseVal.consolidate())) ? wa : (t = t.matrix, Pc(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ec(t, e, n, r) {
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
var t_ = Ec(Kv, "px, ", "px)", "deg)"), e_ = Ec(Zv, ", ", ")", ")");
function n_(t) {
  return function() {
    return t;
  };
}
function r_(t) {
  return +t;
}
var ls = [0, 1];
function be(t) {
  return t;
}
function Sa(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : n_(isNaN(e) ? NaN : 0.5);
}
function fs(t) {
  var e = t[0], n = t[t.length - 1], r;
  return e > n && (r = e, e = n, n = r), function(i) {
    return Math.max(e, Math.min(n, i));
  };
}
function i_(t, e, n) {
  var r = t[0], i = t[1], a = e[0], o = e[1];
  return i < r ? (r = Sa(i, r), a = n(o, a)) : (r = Sa(r, i), a = n(a, o)), function(s) {
    return a(r(s));
  };
}
function a_(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < r; )
    i[o] = Sa(t[o], t[o + 1]), a[o] = n(e[o], e[o + 1]);
  return function(s) {
    var c = Cv(t, s, 1, r) - 1;
    return a[c](i[c](s));
  };
}
function $c(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Tc() {
  var t = ls, e = ls, n = Kn, r, i, a, o = be, s, c, u;
  function p() {
    return s = Math.min(t.length, e.length) > 2 ? a_ : i_, c = u = null, h;
  }
  function h(m) {
    return isNaN(m = +m) ? a : (c || (c = s(t.map(r), e, n)))(r(o(m)));
  }
  return h.invert = function(m) {
    return o(i((u || (u = s(e, t.map(r), re)))(m)));
  }, h.domain = function(m) {
    return arguments.length ? (t = $v.call(m, r_), o === be || (o = fs(t)), p()) : t.slice();
  }, h.range = function(m) {
    return arguments.length ? (e = _a.call(m), p()) : e.slice();
  }, h.rangeRound = function(m) {
    return e = _a.call(m), n = Jv, p();
  }, h.clamp = function(m) {
    return arguments.length ? (o = m ? fs(t) : be, h) : o !== be;
  }, h.interpolate = function(m) {
    return arguments.length ? (n = m, p()) : n;
  }, h.unknown = function(m) {
    return arguments.length ? (a = m, h) : a;
  }, function(m, l) {
    return r = m, i = l, p();
  };
}
function o_(t, e) {
  return Tc()(t, e);
}
function s_(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function $r(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function An(t) {
  return t = $r(Math.abs(t)), t ? t[1] : NaN;
}
function c_(t, e) {
  return function(n, r) {
    for (var i = n.length, a = [], o = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(e);
  };
}
function u_(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var l_ = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Tr(t) {
  if (!(e = l_.exec(t)))
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
function f_(t) {
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
var Ic;
function h_(t, e) {
  var n = $r(t, e);
  if (!n)
    return t + "";
  var r = n[0], i = n[1], a = i - (Ic = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + $r(t, Math.max(0, e + a - 1))[0];
}
function hs(t, e) {
  var n = $r(t, e);
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
  d: s_,
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
  s: h_,
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
function d_(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? ps : c_(gs.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? ps : u_(gs.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "-" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = Tr(h);
    var m = h.fill, l = h.align, v = h.sign, _ = h.symbol, y = h.zero, f = h.width, d = h.comma, b = h.precision, P = h.trim, T = h.type;
    T === "n" ? (d = !0, T = "g") : ds[T] || (b === void 0 && (b = 12), P = !0, T = "g"), (y || m === "0" && l === "=") && (y = !0, m = "0", l = "=");
    var z = _ === "$" ? n : _ === "#" && /[boxX]/.test(T) ? "0" + T.toLowerCase() : "", H = _ === "$" ? r : /[%p]/.test(T) ? o : "", j = ds[T], N = /[defgprs%]/.test(T);
    b = b === void 0 ? 6 : /[gprs]/.test(T) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b));
    function F(w) {
      var S = z, C = H, E, L, W;
      if (T === "c")
        C = j(w) + C, w = "";
      else {
        w = +w;
        var G = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? c : j(Math.abs(w), b), P && (w = f_(w)), G && +w == 0 && v !== "+" && (G = !1), S = (G ? v === "(" ? v : s : v === "-" || v === "(" ? "" : v) + S, C = (T === "s" ? ms[8 + Ic / 3] : "") + C + (G && v === "(" ? ")" : ""), N) {
          for (E = -1, L = w.length; ++E < L; )
            if (W = w.charCodeAt(E), 48 > W || W > 57) {
              C = (W === 46 ? i + w.slice(E + 1) : w.slice(E)) + C, w = w.slice(0, E);
              break;
            }
        }
      }
      d && !y && (w = e(w, 1 / 0));
      var K = S.length + w.length + C.length, et = K < f ? new Array(f - K + 1).join(m) : "";
      switch (d && y && (w = e(et + w, et.length ? f - C.length : 1 / 0), et = ""), l) {
        case "<":
          w = S + w + C + et;
          break;
        case "=":
          w = S + et + w + C;
          break;
        case "^":
          w = et.slice(0, K = et.length >> 1) + S + w + C + et.slice(K);
          break;
        default:
          w = et + S + w + C;
          break;
      }
      return a(w);
    }
    return F.toString = function() {
      return h + "";
    }, F;
  }
  function p(h, m) {
    var l = u((h = Tr(h), h.type = "f", h)), v = Math.max(-8, Math.min(8, Math.floor(An(m) / 3))) * 3, _ = Math.pow(10, -v), y = ms[8 + v / 3];
    return function(f) {
      return l(_ * f) + y;
    };
  }
  return {
    format: u,
    formatPrefix: p
  };
}
var fr, kc, Nc;
p_({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});
function p_(t) {
  return fr = d_(t), kc = fr.format, Nc = fr.formatPrefix, fr;
}
function g_(t) {
  return Math.max(0, -An(Math.abs(t)));
}
function m_(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(An(e) / 3))) * 3 - An(Math.abs(t)));
}
function y_(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, An(e) - An(t)) + 1;
}
function v_(t, e, n, r) {
  var i = Pv(t, e, n), a;
  switch (r = Tr(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(a = m_(i, o)) && (r.precision = a), Nc(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = y_(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = g_(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return kc(r);
}
function Dc(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return Av(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return v_(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, a = r.length - 1, o = r[i], s = r[a], c;
    return s < o && (c = o, o = s, s = c, c = i, i = a, a = c), c = gr(o, s, n), c > 0 ? (o = Math.floor(o / c) * c, s = Math.ceil(s / c) * c, c = gr(o, s, n)) : c < 0 && (o = Math.ceil(o * c) / c, s = Math.floor(s * c) / c, c = gr(o, s, n)), c > 0 ? (r[i] = Math.floor(o / c) * c, r[a] = Math.ceil(s / c) * c, e(r)) : c < 0 && (r[i] = Math.ceil(o * c) / c, r[a] = Math.floor(s * c) / c, e(r)), t;
  }, t;
}
function Zn() {
  var t = o_(be, be);
  return t.copy = function() {
    return $c(t, Zn());
  }, oi.apply(t, arguments), Dc(t);
}
function ys(t) {
  return function(e) {
    return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
  };
}
function __(t) {
  return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
}
function b_(t) {
  return t < 0 ? -t * t : t * t;
}
function x_(t) {
  var e = t(be, be), n = 1;
  function r() {
    return n === 1 ? t(be, be) : n === 0.5 ? t(__, b_) : t(ys(n), ys(1 / n));
  }
  return e.exponent = function(i) {
    return arguments.length ? (n = +i, r()) : n;
  }, Dc(e);
}
function Rc() {
  var t = x_(Tc());
  return t.copy = function() {
    return $c(t, Rc()).exponent(t.exponent());
  }, oi.apply(t, arguments), t;
}
function w_() {
  return Rc.apply(null, arguments).exponent(0.5);
}
function S_(t) {
  var e = 0, n = t.children, r = n && n.length;
  if (!r)
    e = 1;
  else
    for (; --r >= 0; )
      e += n[r].value;
  t.value = e;
}
function C_() {
  return this.eachAfter(S_);
}
function O_(t) {
  var e = this, n, r = [e], i, a, o;
  do
    for (n = r.reverse(), r = []; e = n.pop(); )
      if (t(e), i = e.children, i)
        for (a = 0, o = i.length; a < o; ++a)
          r.push(i[a]);
  while (r.length);
  return this;
}
function M_(t) {
  for (var e = this, n = [e], r, i; e = n.pop(); )
    if (t(e), r = e.children, r)
      for (i = r.length - 1; i >= 0; --i)
        n.push(r[i]);
  return this;
}
function A_(t) {
  for (var e = this, n = [e], r = [], i, a, o; e = n.pop(); )
    if (r.push(e), i = e.children, i)
      for (a = 0, o = i.length; a < o; ++a)
        n.push(i[a]);
  for (; e = r.pop(); )
    t(e);
  return this;
}
function P_(t) {
  return this.eachAfter(function(e) {
    for (var n = +t(e.data) || 0, r = e.children, i = r && r.length; --i >= 0; )
      n += r[i].value;
    e.value = n;
  });
}
function E_(t) {
  return this.eachBefore(function(e) {
    e.children && e.children.sort(t);
  });
}
function $_(t) {
  for (var e = this, n = T_(e, t), r = [e]; e !== n; )
    e = e.parent, r.push(e);
  for (var i = r.length; t !== n; )
    r.splice(i, 0, t), t = t.parent;
  return r;
}
function T_(t, e) {
  if (t === e)
    return t;
  var n = t.ancestors(), r = e.ancestors(), i = null;
  for (t = n.pop(), e = r.pop(); t === e; )
    i = t, t = n.pop(), e = r.pop();
  return i;
}
function I_() {
  for (var t = this, e = [t]; t = t.parent; )
    e.push(t);
  return e;
}
function k_() {
  var t = [];
  return this.each(function(e) {
    t.push(e);
  }), t;
}
function N_() {
  var t = [];
  return this.eachBefore(function(e) {
    e.children || t.push(e);
  }), t;
}
function D_() {
  var t = this, e = [];
  return t.each(function(n) {
    n !== t && e.push({ source: n.parent, target: n });
  }), e;
}
function Ka(t, e) {
  var n = new Ir(t), r = +t.value && (n.value = t.value), i, a = [n], o, s, c, u;
  for (e == null && (e = F_); i = a.pop(); )
    if (r && (i.value = +i.data.value), (s = e(i.data)) && (u = s.length))
      for (i.children = new Array(u), c = u - 1; c >= 0; --c)
        a.push(o = i.children[c] = new Ir(s[c])), o.parent = i, o.depth = i.depth + 1;
  return n.eachBefore(z_);
}
function R_() {
  return Ka(this).eachBefore(L_);
}
function F_(t) {
  return t.children;
}
function L_(t) {
  t.data = t.data.data;
}
function z_(t) {
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
  count: C_,
  each: O_,
  eachAfter: A_,
  eachBefore: M_,
  sum: P_,
  sort: E_,
  path: $_,
  ancestors: I_,
  descendants: k_,
  leaves: N_,
  links: D_,
  copy: R_
};
function B_(t) {
  t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1);
}
function j_(t, e, n, r, i) {
  for (var a = t.children, o, s = -1, c = a.length, u = t.value && (r - e) / t.value; ++s < c; )
    o = a[s], o.y0 = n, o.y1 = i, o.x0 = e, o.x1 = e += o.value * u;
}
function W_() {
  var t = 1, e = 1, n = 0, r = !1;
  function i(o) {
    var s = o.height + 1;
    return o.x0 = o.y0 = n, o.x1 = t, o.y1 = e / s, o.eachBefore(a(e, s)), r && o.eachBefore(B_), o;
  }
  function a(o, s) {
    return function(c) {
      c.children && j_(c, c.x0, o * (c.depth + 1) / s, c.x1, o * (c.depth + 2) / s);
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
var Ca = Math.PI, Oa = 2 * Ca, tn = 1e-6, q_ = Oa - tn;
function Ma() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function Za() {
  return new Ma();
}
Ma.prototype = Za.prototype = {
  constructor: Ma,
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
        var m = n - a, l = r - o, v = s * s + c * c, _ = m * m + l * l, y = Math.sqrt(v), f = Math.sqrt(h), d = i * Math.tan((Ca - Math.acos((v + h - _) / (2 * y * f))) / 2), b = d / f, P = d / y;
        Math.abs(b - 1) > tn && (this._ += "L" + (t + b * u) + "," + (e + b * p)), this._ += "A" + i + "," + i + ",0,0," + +(p * m > u * l) + "," + (this._x1 = t + P * s) + "," + (this._y1 = e + P * c);
      }
  },
  arc: function(t, e, n, r, i, a) {
    t = +t, e = +e, n = +n, a = !!a;
    var o = n * Math.cos(r), s = n * Math.sin(r), c = t + o, u = e + s, p = 1 ^ a, h = a ? r - i : i - r;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + c + "," + u : (Math.abs(this._x1 - c) > tn || Math.abs(this._y1 - u) > tn) && (this._ += "L" + c + "," + u), n && (h < 0 && (h = h % Oa + Oa), h > q_ ? this._ += "A" + n + "," + n + ",0,1," + p + "," + (t - o) + "," + (e - s) + "A" + n + "," + n + ",0,1," + p + "," + (this._x1 = c) + "," + (this._y1 = u) : h > tn && (this._ += "A" + n + "," + n + ",0," + +(h >= Ca) + "," + p + "," + (this._x1 = t + n * Math.cos(i)) + "," + (this._y1 = e + n * Math.sin(i))));
  },
  rect: function(t, e, n, r) {
    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +r + "h" + -n + "Z";
  },
  toString: function() {
    return this._;
  }
};
function Ft(t) {
  return function() {
    return t;
  };
}
var vs = Math.abs, Pt = Math.atan2, Ze = Math.cos, H_ = Math.max, ta = Math.min, ge = Math.sin, vn = Math.sqrt, qt = 1e-12, Gn = Math.PI, kr = Gn / 2, mr = 2 * Gn;
function U_(t) {
  return t > 1 ? 0 : t < -1 ? Gn : Math.acos(t);
}
function _s(t) {
  return t >= 1 ? kr : t <= -1 ? -kr : Math.asin(t);
}
function V_(t) {
  return t.innerRadius;
}
function G_(t) {
  return t.outerRadius;
}
function Y_(t) {
  return t.startAngle;
}
function X_(t) {
  return t.endAngle;
}
function Q_(t) {
  return t && t.padAngle;
}
function J_(t, e, n, r, i, a, o, s) {
  var c = n - t, u = r - e, p = o - i, h = s - a, m = h * c - p * u;
  if (!(m * m < qt))
    return m = (p * (e - a) - h * (t - i)) / m, [t + m * c, e + m * u];
}
function hr(t, e, n, r, i, a, o) {
  var s = t - n, c = e - r, u = (o ? a : -a) / vn(s * s + c * c), p = u * c, h = -u * s, m = t + p, l = e + h, v = n + p, _ = r + h, y = (m + v) / 2, f = (l + _) / 2, d = v - m, b = _ - l, P = d * d + b * b, T = i - a, z = m * _ - v * l, H = (b < 0 ? -1 : 1) * vn(H_(0, T * T * P - z * z)), j = (z * b - d * H) / P, N = (-z * d - b * H) / P, F = (z * b + d * H) / P, w = (-z * d + b * H) / P, S = j - y, C = N - f, E = F - y, L = w - f;
  return S * S + C * C > E * E + L * L && (j = F, N = w), {
    cx: j,
    cy: N,
    x01: -p,
    y01: -h,
    x11: j * (i / T - 1),
    y11: N * (i / T - 1)
  };
}
function Fc() {
  var t = V_, e = G_, n = Ft(0), r = null, i = Y_, a = X_, o = Q_, s = null;
  function c() {
    var u, p, h = +t.apply(this, arguments), m = +e.apply(this, arguments), l = i.apply(this, arguments) - kr, v = a.apply(this, arguments) - kr, _ = vs(v - l), y = v > l;
    if (s || (s = u = Za()), m < h && (p = m, m = h, h = p), !(m > qt))
      s.moveTo(0, 0);
    else if (_ > mr - qt)
      s.moveTo(m * Ze(l), m * ge(l)), s.arc(0, 0, m, l, v, !y), h > qt && (s.moveTo(h * Ze(v), h * ge(v)), s.arc(0, 0, h, v, l, y));
    else {
      var f = l, d = v, b = l, P = v, T = _, z = _, H = o.apply(this, arguments) / 2, j = H > qt && (r ? +r.apply(this, arguments) : vn(h * h + m * m)), N = ta(vs(m - h) / 2, +n.apply(this, arguments)), F = N, w = N, S, C;
      if (j > qt) {
        var E = _s(j / h * ge(H)), L = _s(j / m * ge(H));
        (T -= E * 2) > qt ? (E *= y ? 1 : -1, b += E, P -= E) : (T = 0, b = P = (l + v) / 2), (z -= L * 2) > qt ? (L *= y ? 1 : -1, f += L, d -= L) : (z = 0, f = d = (l + v) / 2);
      }
      var W = m * Ze(f), G = m * ge(f), K = h * Ze(P), et = h * ge(P);
      if (N > qt) {
        var Q = m * Ze(d), lt = m * ge(d), st = h * Ze(b), nt = h * ge(b), Z;
        if (_ < Gn && (Z = J_(W, G, st, nt, Q, lt, K, et))) {
          var ut = W - Z[0], ct = G - Z[1], J = Q - Z[0], ft = lt - Z[1], ht = 1 / ge(U_((ut * J + ct * ft) / (vn(ut * ut + ct * ct) * vn(J * J + ft * ft))) / 2), yt = vn(Z[0] * Z[0] + Z[1] * Z[1]);
          F = ta(N, (h - yt) / (ht - 1)), w = ta(N, (m - yt) / (ht + 1));
        }
      }
      z > qt ? w > qt ? (S = hr(st, nt, W, G, m, w, y), C = hr(Q, lt, K, et, m, w, y), s.moveTo(S.cx + S.x01, S.cy + S.y01), w < N ? s.arc(S.cx, S.cy, w, Pt(S.y01, S.x01), Pt(C.y01, C.x01), !y) : (s.arc(S.cx, S.cy, w, Pt(S.y01, S.x01), Pt(S.y11, S.x11), !y), s.arc(0, 0, m, Pt(S.cy + S.y11, S.cx + S.x11), Pt(C.cy + C.y11, C.cx + C.x11), !y), s.arc(C.cx, C.cy, w, Pt(C.y11, C.x11), Pt(C.y01, C.x01), !y))) : (s.moveTo(W, G), s.arc(0, 0, m, f, d, !y)) : s.moveTo(W, G), !(h > qt) || !(T > qt) ? s.lineTo(K, et) : F > qt ? (S = hr(K, et, Q, lt, h, -F, y), C = hr(W, G, st, nt, h, -F, y), s.lineTo(S.cx + S.x01, S.cy + S.y01), F < N ? s.arc(S.cx, S.cy, F, Pt(S.y01, S.x01), Pt(C.y01, C.x01), !y) : (s.arc(S.cx, S.cy, F, Pt(S.y01, S.x01), Pt(S.y11, S.x11), !y), s.arc(0, 0, h, Pt(S.cy + S.y11, S.cx + S.x11), Pt(C.cy + C.y11, C.cx + C.x11), y), s.arc(C.cx, C.cy, F, Pt(C.y11, C.x11), Pt(C.y01, C.x01), !y))) : s.arc(0, 0, h, P, b, y);
    }
    if (s.closePath(), u)
      return s = null, u + "" || null;
  }
  return c.centroid = function() {
    var u = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, p = (+i.apply(this, arguments) + +a.apply(this, arguments)) / 2 - Gn / 2;
    return [Ze(p) * u, ge(p) * u];
  }, c.innerRadius = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : Ft(+u), c) : t;
  }, c.outerRadius = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : Ft(+u), c) : e;
  }, c.cornerRadius = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : Ft(+u), c) : n;
  }, c.padRadius = function(u) {
    return arguments.length ? (r = u == null ? null : typeof u == "function" ? u : Ft(+u), c) : r;
  }, c.startAngle = function(u) {
    return arguments.length ? (i = typeof u == "function" ? u : Ft(+u), c) : i;
  }, c.endAngle = function(u) {
    return arguments.length ? (a = typeof u == "function" ? u : Ft(+u), c) : a;
  }, c.padAngle = function(u) {
    return arguments.length ? (o = typeof u == "function" ? u : Ft(+u), c) : o;
  }, c.context = function(u) {
    return arguments.length ? (s = u ?? null, c) : s;
  }, c;
}
function K_(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Z_(t) {
  return t;
}
function t0() {
  var t = Z_, e = K_, n = null, r = Ft(0), i = Ft(mr), a = Ft(0);
  function o(s) {
    var c, u = s.length, p, h, m = 0, l = new Array(u), v = new Array(u), _ = +r.apply(this, arguments), y = Math.min(mr, Math.max(-mr, i.apply(this, arguments) - _)), f, d = Math.min(Math.abs(y) / u, a.apply(this, arguments)), b = d * (y < 0 ? -1 : 1), P;
    for (c = 0; c < u; ++c)
      (P = v[l[c] = c] = +t(s[c], c, s)) > 0 && (m += P);
    for (e != null ? l.sort(function(T, z) {
      return e(v[T], v[z]);
    }) : n != null && l.sort(function(T, z) {
      return n(s[T], s[z]);
    }), c = 0, h = m ? (y - u * b) / m : 0; c < u; ++c, _ = f)
      p = l[c], P = v[p], f = _ + (P > 0 ? P * h : 0) + b, v[p] = {
        data: s[p],
        index: c,
        value: P,
        startAngle: _,
        endAngle: f,
        padAngle: d
      };
    return v;
  }
  return o.value = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : Ft(+s), o) : t;
  }, o.sortValues = function(s) {
    return arguments.length ? (e = s, n = null, o) : e;
  }, o.sort = function(s) {
    return arguments.length ? (n = s, e = null, o) : n;
  }, o.startAngle = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : Ft(+s), o) : r;
  }, o.endAngle = function(s) {
    return arguments.length ? (i = typeof s == "function" ? s : Ft(+s), o) : i;
  }, o.padAngle = function(s) {
    return arguments.length ? (a = typeof s == "function" ? s : Ft(+s), o) : a;
  }, o;
}
var e0 = { value: function() {
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
function n0(t, e) {
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
    var n = this._, r = n0(t + "", n), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; )
        if ((i = (t = r[a]).type) && (i = r0(n[i], t.name)))
          return i;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++a < o; )
      if (i = (t = r[a]).type)
        n[i] = bs(n[i], t.name, e);
      else if (e == null)
        for (i in n)
          n[i] = bs(n[i], t.name, null);
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
function r0(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function bs(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = e0, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
const i0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dispatch: to
}, Symbol.toStringTag, { value: "Module" }));
var Pn = 0, Ln = 0, Rn = 0, Lc = 1e3, Nr, zn, Dr = 0, sn = 0, si = 0, Yn = typeof performance == "object" && performance.now ? performance : Date, zc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function ci() {
  return sn || (zc(a0), sn = Yn.now() + si);
}
function a0() {
  sn = 0;
}
function Rr() {
  this._call = this._time = this._next = null;
}
Rr.prototype = Bc.prototype = {
  constructor: Rr,
  restart: function(t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? ci() : +n) + (e == null ? 0 : +e), !this._next && zn !== this && (zn ? zn._next = this : Nr = this, zn = this), this._call = t, this._time = n, Aa();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Aa());
  }
};
function Bc(t, e, n) {
  var r = new Rr();
  return r.restart(t, e, n), r;
}
function o0() {
  ci(), ++Pn;
  for (var t = Nr, e; t; )
    (e = sn - t._time) >= 0 && t._call.call(null, e), t = t._next;
  --Pn;
}
function xs() {
  sn = (Dr = Yn.now()) + si, Pn = Ln = 0;
  try {
    o0();
  } finally {
    Pn = 0, c0(), sn = 0;
  }
}
function s0() {
  var t = Yn.now(), e = t - Dr;
  e > Lc && (si -= e, Dr = t);
}
function c0() {
  for (var t, e = Nr, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Nr = n);
  zn = t, Aa(r);
}
function Aa(t) {
  if (!Pn) {
    Ln && (Ln = clearTimeout(Ln));
    var e = t - sn;
    e > 24 ? (t < 1 / 0 && (Ln = setTimeout(xs, t - Yn.now() - si)), Rn && (Rn = clearInterval(Rn))) : (Rn || (Dr = Yn.now(), Rn = setInterval(s0, Lc)), Pn = 1, zc(xs));
  }
}
function ws(t, e, n) {
  var r = new Rr();
  return e = e == null ? 0 : +e, r.restart(function(i) {
    r.stop(), t(i + e);
  }, e, n), r;
}
var u0 = to("start", "end", "cancel", "interrupt"), l0 = [], jc = 0, Ss = 1, Pa = 2, vr = 3, Cs = 4, Ea = 5, _r = 6;
function ui(t, e, n, r, i, a) {
  var o = t.__transition;
  if (!o)
    t.__transition = {};
  else if (n in o)
    return;
  f0(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: u0,
    tween: l0,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: jc
  });
}
function eo(t, e) {
  var n = se(t, e);
  if (n.state > jc)
    throw new Error("too late; already scheduled");
  return n;
}
function $e(t, e) {
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
function f0(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Bc(a, 0, n.time);
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
          return ws(o);
        l.state === Cs ? (l.state = _r, l.timer.stop(), l.on.call("interrupt", t, t.__data__, l.index, l.group), delete r[p]) : +p < e && (l.state = _r, l.timer.stop(), l.on.call("cancel", t, t.__data__, l.index, l.group), delete r[p]);
      }
    if (ws(function() {
      n.state === vr && (n.state = Cs, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Pa, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Pa) {
      for (n.state = vr, i = new Array(m = n.tween.length), p = 0, h = -1; p < m; ++p)
        (l = n.tween[p].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = l);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var p = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = Ea, 1), h = -1, m = i.length; ++h < m; )
      i[h].call(t, p);
    n.state === Ea && (n.on.call("end", t, t.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = _r, n.timer.stop(), delete r[e];
    for (var u in r)
      return;
    delete t.__transition;
  }
}
function h0(t, e) {
  var n = t.__transition, r, i, a = !0, o;
  if (n) {
    e = e == null ? null : e + "";
    for (o in n) {
      if ((r = n[o]).name !== e) {
        a = !1;
        continue;
      }
      i = r.state > Pa && r.state < Ea, r.state = _r, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[o];
    }
    a && delete t.__transition;
  }
}
function d0(t) {
  return this.each(function() {
    h0(this, t);
  });
}
function p0(t, e) {
  var n, r;
  return function() {
    var i = $e(this, t), a = i.tween;
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
function g0(t, e, n) {
  var r, i;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var a = $e(this, t), o = a.tween;
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
function m0(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = se(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? p0 : g0)(n, t, e));
}
function no(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = $e(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return se(i, r).value[e];
  };
}
function Wc(t, e) {
  var n;
  return (typeof e == "number" ? re : e instanceof on ? Er : (n = on(e)) ? (e = n, Er) : Ac)(t, e);
}
function y0(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function v0(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function _0(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function b0(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function x0(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function w0(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function S0(t, e) {
  var n = Lr(t), r = n === "transform" ? e_ : Wc;
  return this.attrTween(t, typeof e == "function" ? (n.local ? w0 : x0)(n, r, no(this, "attr." + t, e)) : e == null ? (n.local ? v0 : y0)(n) : (n.local ? b0 : _0)(n, r, e));
}
function C0(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function O0(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function M0(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && O0(t, a)), n;
  }
  return i._value = e, i;
}
function A0(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && C0(t, a)), n;
  }
  return i._value = e, i;
}
function P0(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (e == null)
    return this.tween(n, null);
  if (typeof e != "function")
    throw new Error();
  var r = Lr(t);
  return this.tween(n, (r.local ? M0 : A0)(r, e));
}
function E0(t, e) {
  return function() {
    eo(this, t).delay = +e.apply(this, arguments);
  };
}
function $0(t, e) {
  return e = +e, function() {
    eo(this, t).delay = e;
  };
}
function T0(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? E0 : $0)(e, t)) : se(this.node(), e).delay;
}
function I0(t, e) {
  return function() {
    $e(this, t).duration = +e.apply(this, arguments);
  };
}
function k0(t, e) {
  return e = +e, function() {
    $e(this, t).duration = e;
  };
}
function N0(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? I0 : k0)(e, t)) : se(this.node(), e).duration;
}
function D0(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    $e(this, t).ease = e;
  };
}
function R0(t) {
  var e = this._id;
  return arguments.length ? this.each(D0(e, t)) : se(this.node(), e).ease;
}
function F0(t) {
  typeof t != "function" && (t = sc(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new Ee(r, this._parents, this._name, this._id);
}
function L0(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var c = e[s], u = n[s], p = c.length, h = o[s] = new Array(p), m, l = 0; l < p; ++l)
      (m = c[l] || u[l]) && (h[l] = m);
  for (; s < r; ++s)
    o[s] = e[s];
  return new Ee(o, this._parents, this._name, this._id);
}
function z0(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function B0(t, e, n) {
  var r, i, a = z0(e) ? eo : $e;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(e, n), o.on = i;
  };
}
function j0(t, e) {
  var n = this._id;
  return arguments.length < 2 ? se(this.node(), n).on.on(t) : this.each(B0(n, t, e));
}
function W0(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition)
      if (+n !== t)
        return;
    e && e.removeChild(this);
  };
}
function q0() {
  return this.on("end.remove", W0(this._id));
}
function H0(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = ja(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], c = s.length, u = a[o] = new Array(c), p, h, m = 0; m < c; ++m)
      (p = s[m]) && (h = t.call(p, p.__data__, m, s)) && ("__data__" in p && (h.__data__ = p.__data__), u[m] = h, ui(u[m], e, n, m, u, se(p, n)));
  return new Ee(a, this._parents, e, n);
}
function U0(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = oc(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, p, h = 0; h < u; ++h)
      if (p = c[h]) {
        for (var m = t.call(p, p.__data__, h, c), l, v = se(p, n), _ = 0, y = m.length; _ < y; ++_)
          (l = m[_]) && ui(l, e, n, _, m, v);
        a.push(m), o.push(p);
      }
  return new Ee(a, o, e, n);
}
var V0 = Tn.prototype.constructor;
function G0() {
  return new V0(this._groups, this._parents);
}
function Y0(t, e) {
  var n, r, i;
  return function() {
    var a = On(this, t), o = (this.style.removeProperty(t), On(this, t));
    return a === o ? null : a === n && o === r ? i : i = e(n = a, r = o);
  };
}
function qc(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function X0(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = On(this, t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Q0(t, e, n) {
  var r, i, a;
  return function() {
    var o = On(this, t), s = n(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), On(this, t))), o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s));
  };
}
function J0(t, e) {
  var n, r, i, a = "style." + e, o = "end." + a, s;
  return function() {
    var c = $e(this, t), u = c.on, p = c.value[a] == null ? s || (s = qc(e)) : void 0;
    (u !== n || i !== p) && (r = (n = u).copy()).on(o, i = p), c.on = r;
  };
}
function K0(t, e, n) {
  var r = (t += "") == "transform" ? t_ : Wc;
  return e == null ? this.styleTween(t, Y0(t, r)).on("end.style." + t, qc(t)) : typeof e == "function" ? this.styleTween(t, Q0(t, r, no(this, "style." + t, e))).each(J0(this._id, t)) : this.styleTween(t, X0(t, r, e), n).on("end.style." + t, null);
}
function Z0(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function t1(t, e, n) {
  var r, i;
  function a() {
    var o = e.apply(this, arguments);
    return o !== i && (r = (i = o) && Z0(t, o, n)), r;
  }
  return a._value = e, a;
}
function e1(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(r, t1(t, e, n ?? ""));
}
function n1(t) {
  return function() {
    this.textContent = t;
  };
}
function r1(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function i1(t) {
  return this.tween("text", typeof t == "function" ? r1(no(this, "text", t)) : n1(t == null ? "" : t + ""));
}
function a1(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function o1(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && a1(i)), e;
  }
  return r._value = t, r;
}
function s1(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, o1(t));
}
function c1() {
  for (var t = this._name, e = this._id, n = Hc(), r = this._groups, i = r.length, a = 0; a < i; ++a)
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
  return new Ee(r, this._parents, t, n);
}
function u1() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(a, o) {
    var s = { value: o }, c = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var u = $e(this, r), p = u.on;
      p !== t && (e = (t = p).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(c)), u.on = e;
    });
  });
}
var l1 = 0;
function Ee(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function tr(t) {
  return Tn().transition(t);
}
function Hc() {
  return ++l1;
}
var gn = Tn.prototype;
Ee.prototype = tr.prototype = {
  constructor: Ee,
  select: H0,
  selectAll: U0,
  filter: F0,
  merge: L0,
  selection: G0,
  transition: c1,
  call: gn.call,
  nodes: gn.nodes,
  node: gn.node,
  size: gn.size,
  empty: gn.empty,
  each: gn.each,
  on: j0,
  attr: S0,
  attrTween: P0,
  style: K0,
  styleTween: e1,
  text: i1,
  textTween: s1,
  remove: q0,
  tween: m0,
  delay: T0,
  duration: N0,
  ease: R0,
  end: u1
};
var $a = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Pe
};
function f1(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      return $a.time = ci(), $a;
  return n;
}
function h1(t) {
  var e, n;
  t instanceof Ee ? (e = t._id, t = t._name) : (e = Hc(), (n = $a).time = ci(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && ui(c, t, e, u, o, n || f1(c, e));
  return new Ee(r, this._parents, t, e);
}
Tn.prototype.interrupt = d0;
Tn.prototype.transition = h1;
function we(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; )
    n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
const li = we("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), fi = we("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), hi = we("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), di = we("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), pi = we("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), gi = we("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), mi = we("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), yi = we("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), vi = we("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), _i = we("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function d1(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Uc = { exports: {} };
(function(t, e) {
  (function(n, r) {
    typeof d1 == "function" ? t.exports = r() : n.pluralize = r();
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
        var b = u(y[1], arguments);
        return c(f === "" ? _[d - 1] : f, b);
      });
    }
    function h(_, y, f) {
      if (!_.length || i.hasOwnProperty(_))
        return y;
      for (var d = f.length; d--; ) {
        var b = f[d];
        if (b[0].test(y))
          return p(y, b);
      }
      return y;
    }
    function m(_, y, f) {
      return function(d) {
        var b = d.toLowerCase();
        return y.hasOwnProperty(b) ? c(d, b) : _.hasOwnProperty(b) ? c(d, _[b]) : h(b, d, f);
      };
    }
    function l(_, y, f, d) {
      return function(b) {
        var P = b.toLowerCase();
        return y.hasOwnProperty(P) ? !0 : _.hasOwnProperty(P) ? !1 : h(P, P, f) === P;
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
})(Uc);
var p1 = Uc.exports;
const En = /* @__PURE__ */ Xn(p1), gt = {
  select: cn,
  selectAll: zr,
  scaleLinear: Zn,
  scaleOrdinal: In,
  scaleSqrt: w_,
  hierarchy: Ka,
  partition: W_,
  arc: Fc,
  path: Za,
  transition: tr,
  interpolate: Kn,
  easeLinear: Br,
  easePolyIn: Ur,
  easePolyOut: Vr,
  easePoly: Le,
  easePolyInOut: Le,
  easeQuadIn: jr,
  easeQuadOut: Wr,
  easeQuad: Fe,
  easeQuadInOut: Fe,
  easeCubicIn: qr,
  easeCubicOut: Hr,
  easeCubic: Pe,
  easeCubicInOut: Pe,
  easeSinIn: Gr,
  easeSinOut: Yr,
  easeSin: ze,
  easeSinInOut: ze,
  easeExpIn: Xr,
  easeExpOut: Qr,
  easeExp: je,
  easeExpInOut: je,
  easeCircleIn: Jr,
  easeCircleOut: Kr,
  easeCircle: We,
  easeCircleInOut: We,
  easeElasticIn: ni,
  easeElastic: He,
  easeElasticOut: He,
  easeElasticInOut: ri,
  easeBackIn: ei,
  easeBackOut: an,
  easeBack: qe,
  easeBackInOut: qe,
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
class g1 extends ai {
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
    this.getDimensions(), this.initChartFrame("sunburst"), this.cfg.tooltip.suffix && this.cfg.tooltip.suffixPlural && En.addIrregularRule(this.cfg.tooltip.suffix, this.cfg.tooltip.suffixPlural), this.gcenter = this.g.append("g"), this.setChartDimension(), this.updateChart();
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
      const r = this.cfg.tooltip.suffixPlural ? En(this.cfg.tooltip.suffix, n.value) : this.cfg.tooltip.suffix, i = this.cfg.tooltip.suffix ? `<div>${n.data[this.cfg.key]}: ${n.value} ${r}</div>` : `<div>${n.data[this.cfg.key]}: ${n.value}</div>`;
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
const m1 = {
  name: "D3Sunburst",
  extends: ii,
  mounted() {
    this.chart = new g1(
      this.$refs.chart,
      JSON.parse(JSON.stringify(this.datum)),
      this.config
    );
  }
}, y1 = /* @__PURE__ */ Fs(i0), v1 = y1.dispatch, ea = Math.PI / 180, _1 = {
  archimedean: Gc,
  rectangular: E1
}, Bn = 64, br = 2048;
var Vc = function() {
  var t = [256, 256], e = b1, n = x1, r = w1, i = Os, a = Os, o = S1, s = C1, c = Gc, u = [], p = 1 / 0, h = v1("word", "end"), m = null, l = Math.random, v = {}, _ = T1;
  v.canvas = function(d) {
    return arguments.length ? (_ = ke(d), v) : _;
  }, v.start = function() {
    var d = y(_()), b = $1((t[0] >> 5) * t[1]), P = null, T = u.length, z = -1, H = [], j = u.map(function(F, w) {
      return F.text = e.call(this, F, w), F.font = n.call(this, F, w), F.style = i.call(this, F, w), F.weight = a.call(this, F, w), F.rotate = o.call(this, F, w), F.size = ~~r.call(this, F, w), F.padding = s.call(this, F, w), F;
    }).sort(function(F, w) {
      return w.size - F.size;
    });
    return m && clearInterval(m), m = setInterval(N, 0), N(), v;
    function N() {
      for (var F = Date.now(); Date.now() - F < p && ++z < T && m; ) {
        var w = j[z];
        w.x = t[0] * (l() + 0.5) >> 1, w.y = t[1] * (l() + 0.5) >> 1, O1(d, w, j, z), w.hasText && f(b, w, P) && (H.push(w), h.call("word", v, w), P ? A1(P, w) : P = [{ x: w.x + w.x0, y: w.y + w.y0 }, { x: w.x + w.x1, y: w.y + w.y1 }], w.x -= t[0] >> 1, w.y -= t[1] >> 1);
      }
      z >= T && (v.stop(), h.call("end", v, H, P));
    }
  }, v.stop = function() {
    m && (clearInterval(m), m = null);
    for (const d of u)
      delete d.sprite;
    return v;
  };
  function y(d) {
    const b = d.getContext("2d", { willReadFrequently: !0 });
    d.width = d.height = 1;
    const P = Math.sqrt(b.getImageData(0, 0, 1, 1).data.length >> 2);
    return d.width = (Bn << 5) / P, d.height = br / P, b.fillStyle = b.strokeStyle = "red", { context: b, ratio: P };
  }
  function f(d, b, P) {
    t[0], t[1];
    for (var T = b.x, z = b.y, H = Math.sqrt(t[0] * t[0] + t[1] * t[1]), j = c(t), N = l() < 0.5 ? 1 : -1, F = -N, w, S, C; (w = j(F += N)) && (S = ~~w[0], C = ~~w[1], !(Math.min(Math.abs(S), Math.abs(C)) >= H)); )
      if (b.x = T + S, b.y = z + C, !(b.x + b.x0 < 0 || b.y + b.y0 < 0 || b.x + b.x1 > t[0] || b.y + b.y1 > t[1]) && (!P || P1(b, P)) && !M1(b, d, t[0])) {
        for (var E = b.sprite, L = b.width >> 5, W = t[0] >> 5, G = b.x - (L << 4), K = G & 127, et = 32 - K, Q = b.y1 - b.y0, lt = (b.y + b.y0) * W + (G >> 5), st, nt = 0; nt < Q; nt++) {
          st = 0;
          for (var Z = 0; Z <= L; Z++)
            d[lt + Z] |= st << et | (Z < L ? (st = E[nt * L + Z]) >>> K : 0);
          lt += W;
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
    return arguments.length ? (c = _1[d] || d, v) : c;
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
function b1(t) {
  return t.text;
}
function x1() {
  return "serif";
}
function Os() {
  return "normal";
}
function w1(t) {
  return Math.sqrt(t.value);
}
function S1() {
  return (~~(random() * 6) - 3) * 30;
}
function C1() {
  return 1;
}
function O1(t, e, n, r) {
  if (!e.sprite) {
    var i = t.context, a = t.ratio;
    i.clearRect(0, 0, (Bn << 5) / a, br / a);
    var o = 0, s = 0, c = 0, u = n.length;
    for (--r; ++r < u; ) {
      e = n[r], i.save(), i.font = e.style + " " + e.weight + " " + ~~((e.size + 1) / a) + "px " + e.font;
      const w = i.measureText(e.text), S = -Math.floor(w.width / 2);
      let C = (w.width + 1) * a, E = e.size << 1;
      if (e.rotate) {
        var p = Math.sin(e.rotate * ea), h = Math.cos(e.rotate * ea), m = C * h, l = C * p, v = E * h, _ = E * p;
        C = Math.max(Math.abs(m + _), Math.abs(m - _)) + 31 >> 5 << 5, E = ~~Math.max(Math.abs(l + v), Math.abs(l - v));
      } else
        C = C + 31 >> 5 << 5;
      if (E > c && (c = E), o + C >= Bn << 5 && (o = 0, s += c, c = 0), s + E >= br)
        break;
      i.translate((o + (C >> 1)) / a, (s + (E >> 1)) / a), e.rotate && i.rotate(e.rotate * ea), i.fillText(e.text, S, 0), e.padding && (i.lineWidth = 2 * e.padding, i.strokeText(e.text, S, 0)), i.restore(), e.width = C, e.height = E, e.xoff = o, e.yoff = s, e.x1 = C >> 1, e.y1 = E >> 1, e.x0 = -e.x1, e.y0 = -e.y1, e.hasText = !0, o += C;
    }
    for (var y = i.getImageData(0, 0, (Bn << 5) / a, br / a).data, f = []; --r >= 0; )
      if (e = n[r], !!e.hasText) {
        for (var d = e.width, b = d >> 5, P = e.y1 - e.y0, T = 0; T < P * b; T++)
          f[T] = 0;
        if (o = e.xoff, o == null)
          return;
        s = e.yoff;
        for (var z = 0, H = -1, j = 0; j < P; j++) {
          for (var T = 0; T < d; T++) {
            var N = b * j + (T >> 5), F = y[(s + j) * (Bn << 5) + (o + T) << 2] ? 1 << 31 - T % 32 : 0;
            f[N] |= F, z |= F;
          }
          z ? H = j : (e.y0++, P--, j--, s++);
        }
        e.y1 = e.y0 + H, e.sprite = f.slice(0, (e.y1 - e.y0) * b);
      }
  }
}
function M1(t, e, n) {
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
function A1(t, e) {
  var n = t[0], r = t[1];
  e.x + e.x0 < n.x && (n.x = e.x + e.x0), e.y + e.y0 < n.y && (n.y = e.y + e.y0), e.x + e.x1 > r.x && (r.x = e.x + e.x1), e.y + e.y1 > r.y && (r.y = e.y + e.y1);
}
function P1(t, e) {
  return t.x + t.x1 > e[0].x && t.x + t.x0 < e[1].x && t.y + t.y1 > e[0].y && t.y + t.y0 < e[1].y;
}
function Gc(t) {
  var e = t[0] / t[1];
  return function(n) {
    return [e * (n *= 0.1) * Math.cos(n), n * Math.sin(n)];
  };
}
function E1(t) {
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
function $1(t) {
  for (var e = [], n = -1; ++n < t; )
    e[n] = 0;
  return e;
}
function T1() {
  return document.createElement("canvas");
}
function ke(t) {
  return typeof t == "function" ? t : function() {
    return t;
  };
}
const I1 = /* @__PURE__ */ Xn(Vc), k1 = /* @__PURE__ */ Xu({
  __proto__: null,
  default: I1
}, [Vc]), mn = {
  select: cn,
  selectAll: zr,
  scaleOrdinal: In,
  scaleLinear: Zn,
  min: xc,
  max: Ya,
  extent: Ov,
  transition: tr,
  cloud: k1,
  easeLinear: Br,
  easePolyIn: Ur,
  easePolyOut: Vr,
  easePoly: Le,
  easePolyInOut: Le,
  easeQuadIn: jr,
  easeQuadOut: Wr,
  easeQuad: Fe,
  easeQuadInOut: Fe,
  easeCubicIn: qr,
  easeCubicOut: Hr,
  easeCubic: Pe,
  easeCubicInOut: Pe,
  easeSinIn: Gr,
  easeSinOut: Yr,
  easeSin: ze,
  easeSinInOut: ze,
  easeExpIn: Xr,
  easeExpOut: Qr,
  easeExp: je,
  easeExpInOut: je,
  easeCircleIn: Jr,
  easeCircleOut: Kr,
  easeCircle: We,
  easeCircleInOut: We,
  easeElasticIn: ni,
  easeElastic: He,
  easeElasticOut: He,
  easeElasticInOut: ri,
  easeBackIn: ei,
  easeBackOut: an,
  easeBack: qe,
  easeBackInOut: qe,
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
class N1 extends ai {
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
    this.getDimensions(), this.initChartFrame("wordscloud"), this.cfg.tooltip.suffix && this.cfg.tooltip.suffixPlural && En.addIrregularRule(this.cfg.tooltip.suffix, this.cfg.tooltip.suffixPlural), this.gcenter = this.g.append("g"), this.tData = [], this.setChartDimension(), this.updateChart();
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
      const r = this.cfg.tooltip.suffixPlural ? En(this.cfg.tooltip.suffix, n.value) : this.cfg.tooltip.suffix, i = this.cfg.tooltip.suffix ? `<div>${n.text}: ${n.value} ${r}</div>` : `<div>${n.text}: ${n.value}</div>`;
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
const D1 = {
  name: "D3WordsCloud",
  extends: ii,
  mounted() {
    this.chart = new N1(
      this.$refs.chart,
      JSON.parse(JSON.stringify(this.datum)),
      this.config
    );
  }
};
var na = Array.prototype.slice;
function R1(t) {
  return t;
}
var ra = 1, ia = 2, Ta = 3, jn = 4, Ms = 1e-6;
function F1(t) {
  return "translate(" + (t + 0.5) + ",0)";
}
function L1(t) {
  return "translate(0," + (t + 0.5) + ")";
}
function z1(t) {
  return function(e) {
    return +t(e);
  };
}
function B1(t) {
  var e = Math.max(0, t.bandwidth() - 1) / 2;
  return t.round() && (e = Math.round(e)), function(n) {
    return +t(n) + e;
  };
}
function j1() {
  return !this.__axis;
}
function Yc(t, e) {
  var n = [], r = null, i = null, a = 6, o = 6, s = 3, c = t === ra || t === jn ? -1 : 1, u = t === jn || t === ia ? "x" : "y", p = t === ra || t === Ta ? F1 : L1;
  function h(m) {
    var l = r ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), v = i ?? (e.tickFormat ? e.tickFormat.apply(e, n) : R1), _ = Math.max(a, 0) + s, y = e.range(), f = +y[0] + 0.5, d = +y[y.length - 1] + 0.5, b = (e.bandwidth ? B1 : z1)(e.copy()), P = m.selection ? m.selection() : m, T = P.selectAll(".domain").data([null]), z = P.selectAll(".tick").data(l, e).order(), H = z.exit(), j = z.enter().append("g").attr("class", "tick"), N = z.select("line"), F = z.select("text");
    T = T.merge(T.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), z = z.merge(j), N = N.merge(j.append("line").attr("stroke", "currentColor").attr(u + "2", c * a)), F = F.merge(j.append("text").attr("fill", "currentColor").attr(u, c * _).attr("dy", t === ra ? "0em" : t === Ta ? "0.71em" : "0.32em")), m !== P && (T = T.transition(m), z = z.transition(m), N = N.transition(m), F = F.transition(m), H = H.transition(m).attr("opacity", Ms).attr("transform", function(w) {
      return isFinite(w = b(w)) ? p(w) : this.getAttribute("transform");
    }), j.attr("opacity", Ms).attr("transform", function(w) {
      var S = this.parentNode.__axis;
      return p(S && isFinite(S = S(w)) ? S : b(w));
    })), H.remove(), T.attr("d", t === jn || t == ia ? o ? "M" + c * o + "," + f + "H0.5V" + d + "H" + c * o : "M0.5," + f + "V" + d : o ? "M" + f + "," + c * o + "V0.5H" + d + "V" + c * o : "M" + f + ",0.5H" + d), z.attr("opacity", 1).attr("transform", function(w) {
      return p(b(w));
    }), N.attr(u + "2", c * a), F.attr(u, c * _).text(v), P.filter(j1).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === ia ? "start" : t === jn ? "end" : "middle"), P.each(function() {
      this.__axis = b;
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
function W1(t) {
  return Yc(Ta, t);
}
function q1(t) {
  return Yc(jn, t);
}
const Kt = {
  select: cn,
  selectAll: zr,
  scaleBand: Sc,
  scaleLinear: Zn,
  scaleOrdinal: In,
  max: Ya,
  transition: tr,
  axisBottom: W1,
  axisLeft: q1,
  easeLinear: Br,
  easePolyIn: Ur,
  easePolyOut: Vr,
  easePoly: Le,
  easePolyInOut: Le,
  easeQuadIn: jr,
  easeQuadOut: Wr,
  easeQuad: Fe,
  easeQuadInOut: Fe,
  easeCubicIn: qr,
  easeCubicOut: Hr,
  easeCubic: Pe,
  easeCubicInOut: Pe,
  easeSinIn: Gr,
  easeSinOut: Yr,
  easeSin: ze,
  easeSinInOut: ze,
  easeExpIn: Xr,
  easeExpOut: Qr,
  easeExp: je,
  easeExpInOut: je,
  easeCircleIn: Jr,
  easeCircleOut: Kr,
  easeCircle: We,
  easeCircleInOut: We,
  easeElasticIn: ni,
  easeElastic: He,
  easeElasticOut: He,
  easeElasticInOut: ri,
  easeBackIn: ei,
  easeBackOut: an,
  easeBack: qe,
  easeBackInOut: qe,
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
}, Me = "Texto de referencia", Ne = "Texto escaneado";
class H1 extends ai {
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
      keys: { [Ne]: Ne, [Me]: Me },
      transition: { duration: 350, ease: "easeLinear" }
    });
  }
  /**
   * Init chart
   */
  initChart() {
    this.getDimensions(), this.initChartFrame("barchart"), this.cfg.tooltip.suffix && this.cfg.tooltip.suffixPlural && En.addIrregularRule(this.cfg.tooltip.suffix, this.cfg.tooltip.suffixPlural), this.xScale = Kt.scaleBand(), this.xScaleInn = Kt.scaleBand(), this.yScale = Kt.scaleLinear(), this.axisg = this.g.append("g").attr("class", "chart__axis chart__axis--barchart"), this.yGrid = this.axisg.append("g").attr("class", "chart__grid chart__grid--y chart__grid--barchart"), this.xAxis = this.axisg.append("g").attr("class", "chart__axis-x chart__axis-x--barchart"), this.cfg.axis.yTitle && (this.yAxisTitle = this.axisg.append("text").attr("class", "chart__axis-title chart__axis-title--barchart").attr("transform", "rotate(-90)").style("text-anchor", "middle")), this.setChartDimension(), this.updateChart();
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
    return this.data.some((e) => e[Me] > 0);
  }
  calculateTotals() {
    const e = this.data.reduce((r, i) => r + i[Me], 0), n = this.data.reduce((r, i) => r + i[Ne], 0);
    return { [Me]: e, [Ne]: n };
  }
  calculateMaximums() {
    const e = this.data.reduce(
      (r, i) => this.getBiggerNumber(r, i[Me]),
      0
    ), n = this.data.reduce(
      (r, i) => this.getBiggerNumber(r, i[Ne]),
      0
    );
    return { [Me]: e, [Ne]: n };
  }
  getBiggerNumber(e, n) {
    return e > n ? e : n;
  }
  calculateBiggestNumber() {
    const e = this.calculateTotals(), n = this.calculateMaximums(), r = n[Me], i = e[Me], a = n[Ne], o = e[Ne], s = this.calculatePercentage(r, i), c = this.calculatePercentage(a, o), u = this.getBiggerNumber(s, c);
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
      const a = this.cfg.values[i % this.cfg.values.length], o = this.cfg.tooltip.suffixPlural ? En(this.cfg.tooltip.suffix, r[a]) : this.cfg.tooltip.suffix, s = this.cfg.keys[a], c = this.calculatePercentage(r[a], e[a]).toFixed(2), u = this.cfg.tooltip.suffix ? `<div>${s}: ${c}% ${o}</div>` : `<div>${s}: ${c}%</div>`;
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
const U1 = {
  name: "D3BarChart",
  extends: ii,
  mounted() {
    this.chart = new H1(
      this.$refs.chart,
      JSON.parse(JSON.stringify(this.datum)),
      this.config
    );
  }
}, Et = {
  select: cn,
  selectAll: zr,
  scaleLinear: Zn,
  scaleOrdinal: In,
  max: Ya,
  min: xc,
  sum: Ev,
  transition: tr,
  pie: t0,
  arc: Fc,
  interpolate: Kn,
  easeLinear: Br,
  easePolyIn: Ur,
  easePolyOut: Vr,
  easePoly: Le,
  easePolyInOut: Le,
  easeQuadIn: jr,
  easeQuadOut: Wr,
  easeQuad: Fe,
  easeQuadInOut: Fe,
  easeCubicIn: qr,
  easeCubicOut: Hr,
  easeCubic: Pe,
  easeCubicInOut: Pe,
  easeSinIn: Gr,
  easeSinOut: Yr,
  easeSin: ze,
  easeSinInOut: ze,
  easeExpIn: Xr,
  easeExpOut: Qr,
  easeExp: je,
  easeExpInOut: je,
  easeCircleIn: Jr,
  easeCircleOut: Kr,
  easeCircle: We,
  easeCircleInOut: We,
  easeElasticIn: ni,
  easeElastic: He,
  easeElasticOut: He,
  easeElasticInOut: ri,
  easeBackIn: ei,
  easeBackOut: an,
  easeBack: qe,
  easeBackInOut: qe,
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
class V1 extends ai {
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
    if (this.getDimensions(), this.initChartFrame("sliceschart"), this.cScale = Et.scaleOrdinal(), this.rScale = Et.scaleLinear(), this.arc = Et.arc(), this.pie = Et.pie().sort(null).value(() => 1).padAngle(this.cfg.radius.padding), this.cfg.radius && this.cfg.radius.inner) {
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
    this.itemg = this.gcenter.selectAll(".chart__slice-group").data(this.pie(this.data), (e) => e.data[this.cfg.key]), this.transition = Et.transition("t").duration(this.cfg.transition.duration).ease(Et[this.cfg.transition.ease]);
  }
  /**
  * Set up scales
  */
  setScales() {
    this.cfg.radius.outter = this.cfg.radius && this.cfg.radius.outter ? this.cfg.radius.outter : Math.min(this.cfg.width, this.cfg.height) / 2, this.inRadius = this.cfg.radius && this.cfg.radius.inner ? this.cfg.radius.inner : 0, this.cfg.radius.relation && (this.inRadius = this.cfg.radius.outter * this.cfg.radius.relation), this.arc = Et.arc().outerRadius(this.cfg.radius.outter).innerRadius(this.inRadius).cornerRadius(this.cfg.radius.round);
    let e = Et.max(this.data, (n) => n[this.cfg.value]);
    e == 0 && (e = 1), this.rScale.range([this.inRadius, this.cfg.radius.outter]).domain([0, e]), this.cfg.color.scheme && (this.cfg.color.scheme instanceof Array ? this.colorScale = Et.scaleOrdinal().domain(this.data.map((n) => n[this.cfg.key])).range(this.cfg.color.scheme) : this.colorScale = Et.scaleOrdinal(Et[this.cfg.color.scheme]).domain(this.data.map((n) => n[this.cfg.key])));
  }
  /**
  * Add new chart's elements
  */
  enterElements() {
    const e = this.itemg.enter().append("g").attr("class", "chart__slice-group chart__slice-group--sliceschart");
    e.append("path").attr("class", "chart__slice chart__slice--sliceschart").on("mouseover", (n, r) => {
      const i = Et.sum(this.data, (s) => s.value), a = n.data.value > 0 && i > 0 ? Math.round(n.data.value / i * 100) : 0, o = n.data[this.cfg.key];
      this.centerText.text(`${o}: ${a}%`);
    }).on("mouseout", () => {
      this.centerText.text("");
    }).transition(this.transition).delay((n, r) => r * this.cfg.transition.duration).attrTween("d", (n) => {
      const r = Et.interpolate(n.startAngle + 0.1, n.endAngle);
      return (i) => (n.endAngle = r(i), this.arc(n));
    }).style("fill", (n) => this.cfg.color.default).style("opacity", 1), e.append("path").attr("class", "chart__slice chart__slice--sliceschart").transition(this.transition).delay((n, r) => r * this.cfg.transition.duration).attrTween("d", (n) => {
      const r = Et.interpolate(n.startAngle + 0.1, n.endAngle), i = Et.arc().outerRadius(this.rScale(n.data[this.cfg.value])).innerRadius(this.inRadius).cornerRadius(this.cfg.radius.round);
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
    var n = Et.interpolate(this._current, e);
    return this._current = n(0), (r) => this.arc(n(r));
  }
}
const G1 = {
  name: "D3SlicesChart",
  extends: ii,
  mounted() {
    this.chart = new V1(
      this.$refs.chart,
      JSON.parse(JSON.stringify(this.datum)),
      this.config
    );
  }
}, Y1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  D3BarChart: U1,
  D3SlicesChart: G1,
  D3Sunburst: m1,
  D3WordsCloud: D1,
  TipiBarchart: dv,
  TipiCongressLink: Xh,
  TipiCsvDownload: Uh,
  TipiDeputy: Yd,
  TipiHeader: td,
  TipiIcon: Ue,
  TipiInitiativeCard: Ds,
  TipiInitiativeMeta: Ns,
  TipiLoader: Rs,
  TipiMessage: Ph,
  TipiNavbar: _d,
  TipiNeuron: Ry,
  TipiResults: Ch,
  TipiSplash: cv,
  TipiText: ap,
  TipiTopicCard: Vy,
  TipiTopicLink: Ky,
  TipiTopicPill: Ts,
  TipiTopics: am,
  TipiTwoCircles: nv,
  Utils: Ku
}, Symbol.toStringTag, { value: "Module" }));
let X1 = (t) => {
  Object.values(Y1).forEach((e) => {
    t.use(e);
  });
};
X1.version = "__VERSION__";
export {
  X1 as default
};
