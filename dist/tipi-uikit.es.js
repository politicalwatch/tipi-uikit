import { defineAsyncComponent as us } from "vue";
function wu(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const a = Object.getOwnPropertyDescriptor(r, i);
          a && Object.defineProperty(e, i, a.get ? a : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
const ls = (e, t) => {
  const n = e[t];
  return n ? typeof n == "function" ? n() : Promise.resolve(n) : new Promise((r, i) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
function ct(e, t, n, r, i, a, o, s) {
  var c = typeof e == "function" ? e.options : e;
  t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), r && (c.functional = !0), a && (c._scopeId = "data-v-" + a);
  var u;
  if (o ? (u = function(p) {
    p = p || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !p && typeof __VUE_SSR_CONTEXT__ < "u" && (p = __VUE_SSR_CONTEXT__), i && i.call(this, p), p && p._registeredComponents && p._registeredComponents.add(o);
  }, c._ssrRegister = u) : i && (u = s ? function() {
    i.call(
      this,
      (c.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : i), u)
    if (c.functional) {
      c._injectStyles = u;
      var g = c.render;
      c.render = function(l, v) {
        return u.call(v), g(l, v);
      };
    } else {
      var h = c.beforeCreate;
      c.beforeCreate = h ? [].concat(h, u) : [u];
    }
  return {
    exports: e,
    options: c
  };
}
const Su = {
  name: "TipiIcon",
  props: {
    icon: String,
    color: String
  },
  computed: {
    svg() {
      let e = "";
      try {
        e = us(() => ls(/* @__PURE__ */ Object.assign({ "../../assets/svg/icon-advanced.svg": () => import("./icon-advanced.54832cbb.mjs"), "../../assets/svg/icon-bell.svg": () => import("./icon-bell.2323d087.mjs"), "../../assets/svg/icon-birthday.svg": () => import("./icon-birthday.1683c427.mjs"), "../../assets/svg/icon-building.svg": () => import("./icon-building.0975dca7.mjs"), "../../assets/svg/icon-calendar.svg": () => import("./icon-calendar.6f456498.mjs"), "../../assets/svg/icon-chevron-down.svg": () => import("./icon-chevron-down.210a42ed.mjs"), "../../assets/svg/icon-chevron-left.svg": () => import("./icon-chevron-left.1db2a335.mjs"), "../../assets/svg/icon-chevron-right.svg": () => import("./icon-chevron-right.c60c1260.mjs"), "../../assets/svg/icon-chevron-up.svg": () => import("./icon-chevron-up.b8338f70.mjs"), "../../assets/svg/icon-clock.svg": () => import("./icon-clock.b7d82deb.mjs"), "../../assets/svg/icon-close-menu.svg": () => import("./icon-close-menu.254ec43a.mjs"), "../../assets/svg/icon-close.svg": () => import("./icon-close.d1d127b8.mjs"), "../../assets/svg/icon-conversation.svg": () => import("./icon-conversation.218ac5b2.mjs"), "../../assets/svg/icon-denied.svg": () => import("./icon-denied.4af92046.mjs"), "../../assets/svg/icon-document.svg": () => import("./icon-document.2568cd16.mjs"), "../../assets/svg/icon-download.svg": () => import("./icon-download.cc39fa94.mjs"), "../../assets/svg/icon-error.svg": () => import("./icon-error.b65c0428.mjs"), "../../assets/svg/icon-github.svg": () => import("./icon-github.7f056ceb.mjs"), "../../assets/svg/icon-hamburger.svg": () => import("./icon-hamburger.689daa2c.mjs"), "../../assets/svg/icon-info.svg": () => import("./icon-info.98376f73.mjs"), "../../assets/svg/icon-less.svg": () => import("./icon-less.33677175.mjs"), "../../assets/svg/icon-location.svg": () => import("./icon-location.7eb11dbd.mjs"), "../../assets/svg/icon-mail.svg": () => import("./icon-mail.39094bfb.mjs"), "../../assets/svg/icon-more.svg": () => import("./icon-more.2f995abd.mjs"), "../../assets/svg/icon-open-blank.svg": () => import("./icon-open-blank.c67f4f87.mjs"), "../../assets/svg/icon-plus.svg": () => import("./icon-plus.c95aa005.mjs"), "../../assets/svg/icon-search.svg": () => import("./icon-search.335192f9.mjs"), "../../assets/svg/icon-success.svg": () => import("./icon-success.4347ba0f.mjs"), "../../assets/svg/icon-twitter.svg": () => import("./icon-twitter.3c2a9ca7.mjs"), "../../assets/svg/icon-upload.svg": () => import("./icon-upload.c71b4512.mjs") }), `../../assets/svg/icon-${this.icon}.svg`));
      } catch {
        e = this.icon;
      }
      return e;
    }
  },
  updated() {
    this.color && this.$el.querySelector("svg path") && (this.$el.querySelector("svg path").style.fill = this.color);
  }
};
var Cu = function() {
  var t = this, n = t._self._c;
  return n("span", {
    staticClass: "c-icon",
    class: `c-icon--type-${t.icon}`
  }, [n(t.svg, {
    tag: "component"
  })], 1);
}, Ou = [], Mu = /* @__PURE__ */ ct(Su, Cu, Ou, !1, null, null, null, null);
const Te = Mu.exports, wr = function(e, t) {
  let n, r, i, a, o = 0, s, c = /(\d+)|(\D+)/g, u = /\d/;
  if (isFinite(e) && isFinite(t))
    return e - t;
  if (n = String(e).toLowerCase(), r = String(t).toLowerCase(), n === r)
    return 0;
  if (!(u.test(n) && u.test(r)))
    return n > r ? 1 : -1;
  for (n = n.match(c), r = r.match(c), s = n.length > r.length ? r.length : n.length; o < s; )
    if (i = n[o], a = r[o++], i !== a)
      return isFinite(i) && isFinite(a) ? (i.charAt(0) === "0" && (i = "." + i), a.charAt(0) === "0" && (a = "." + a), i - a) : i > a ? 1 : -1;
  return n.length - r.length;
}, Au = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  naturalSort: wr
}, Symbol.toStringTag, { value: "Module" })), $u = {
  name: "TipiTopicPill",
  components: {
    TipiIcon: Te
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
      return this.limit && (e = e.slice(0, this.limit)), this.topicsStyles && e.length ? (this.order ? e.slice().sort(wr) : e.slice()).map((n, r) => this.withLinks ? `
              <a href="#topic-${r}" class="c-topics__topic c-topics__topic__small" style="background-color:${this.topicsStyles[n].color}">
                ${this.topicsStyles[n].shortname}
              </a>
            ` : `
              <div class="c-topics__topic c-topics__topic__small" style="background-color:${this.topicsStyles[n].color}">
                ${this.topicsStyles[n].shortname}
              </div>
            `).join("") : e.length ? e.join("<br/>") : `<div class="c-topics__topic c-topics__topic__small" style="background-color: #ccc; color: #444;">
          ${this.topicsStyles["no-topic"] ? this.topicsStyles["no-topic"].shortname : "Sin tem\xE1tica"}
        </div>`;
    }
  }
};
var Pu = function() {
  var t = this, n = t._self._c;
  return n("div", {
    staticClass: "c-topics"
  }, [n("span", {
    domProps: {
      innerHTML: t._s(t.getTopics())
    }
  }), t.limit && t.limit < t.topics.length ? n("div", {
    staticClass: "c-topics__topic c-topics__topic__small",
    staticStyle: {
      "background-color": "#2d4252"
    }
  }, [n("tipi-icon", {
    attrs: {
      icon: "more"
    }
  })], 1) : t._e()]);
}, Eu = [], Tu = /* @__PURE__ */ ct($u, Pu, Eu, !1, null, null, null, null);
const fs = Tu.exports;
var Iu = {};
function Ru() {
  return Iu;
}
function qi(e) {
  return qi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qi(e);
}
function Vt(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function wt(e) {
  Vt(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || qi(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Kn(e, t) {
  Vt(2, arguments);
  var n = wt(e), r = wt(t), i = n.getTime() - r.getTime();
  return i < 0 ? -1 : i > 0 ? 1 : i;
}
function Nu(e, t) {
  Vt(2, arguments);
  var n = wt(e), r = wt(t), i = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return i * 12 + a;
}
function ku(e) {
  Vt(1, arguments);
  var t = wt(e);
  return t.setHours(23, 59, 59, 999), t;
}
function Du(e) {
  Vt(1, arguments);
  var t = wt(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Fu(e) {
  Vt(1, arguments);
  var t = wt(e);
  return ku(t).getTime() === Du(t).getTime();
}
function Lu(e, t) {
  Vt(2, arguments);
  var n = wt(e), r = wt(t), i = Kn(n, r), a = Math.abs(Nu(n, r)), o;
  if (a < 1)
    o = 0;
  else {
    n.getMonth() === 1 && n.getDate() > 27 && n.setDate(30), n.setMonth(n.getMonth() - i * a);
    var s = Kn(n, r) === -i;
    Fu(wt(e)) && a === 1 && Kn(e, r) === 1 && (s = !1), o = i * (a - Number(s));
  }
  return o === 0 ? 0 : o;
}
function zu(e, t) {
  return Vt(2, arguments), wt(e).getTime() - wt(t).getTime();
}
var Qa = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function(t) {
    return t < 0 ? Math.ceil(t) : Math.floor(t);
  }
}, Bu = "trunc";
function ju(e) {
  return e ? Qa[e] : Qa[Bu];
}
function Wu(e, t, n) {
  Vt(2, arguments);
  var r = zu(e, t) / 1e3;
  return ju(n == null ? void 0 : n.roundingMethod)(r);
}
var qu = {
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
}, Hu = function(t, n, r) {
  var i, a = qu[t];
  return typeof a == "string" ? i = a : n === 1 ? i = a.one : i = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + i : i + " ago" : i;
};
const Uu = Hu;
function an(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var Vu = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Gu = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Yu = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Xu = {
  date: an({
    formats: Vu,
    defaultWidth: "full"
  }),
  time: an({
    formats: Gu,
    defaultWidth: "full"
  }),
  dateTime: an({
    formats: Yu,
    defaultWidth: "full"
  })
};
const Qu = Xu;
var Ju = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ku = function(t, n, r, i) {
  return Ju[t];
};
const Zu = Ku;
function re(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", i;
    if (r === "formatting" && e.formattingValues) {
      var a = e.defaultFormattingWidth || e.defaultWidth, o = n != null && n.width ? String(n.width) : a;
      i = e.formattingValues[o] || e.formattingValues[a];
    } else {
      var s = e.defaultWidth, c = n != null && n.width ? String(n.width) : e.defaultWidth;
      i = e.values[c] || e.values[s];
    }
    var u = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[u];
  };
}
var tl = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, el = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, nl = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, rl = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, il = {
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
}, al = {
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
}, ol = function(t, n) {
  var r = Number(t), i = r % 100;
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
}, sl = {
  ordinalNumber: ol,
  era: re({
    values: tl,
    defaultWidth: "wide"
  }),
  quarter: re({
    values: el,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: re({
    values: nl,
    defaultWidth: "wide"
  }),
  day: re({
    values: rl,
    defaultWidth: "wide"
  }),
  dayPeriod: re({
    values: il,
    defaultWidth: "wide",
    formattingValues: al,
    defaultFormattingWidth: "wide"
  })
};
const cl = sl;
function ie(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    var o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? ll(s, function(h) {
      return h.test(o);
    }) : ul(s, function(h) {
      return h.test(o);
    }), u;
    u = e.valueCallback ? e.valueCallback(c) : c, u = n.valueCallback ? n.valueCallback(u) : u;
    var g = t.slice(o.length);
    return {
      value: u,
      rest: g
    };
  };
}
function ul(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function ll(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function hs(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var i = r[0], a = t.match(e.parsePattern);
    if (!a)
      return null;
    var o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    o = n.valueCallback ? n.valueCallback(o) : o;
    var s = t.slice(i.length);
    return {
      value: o,
      rest: s
    };
  };
}
var fl = /^(\d+)(th|st|nd|rd)?/i, hl = /\d+/i, dl = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, pl = {
  any: [/^b/i, /^(a|c)/i]
}, gl = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ml = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, yl = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, vl = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, _l = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, bl = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, xl = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, wl = {
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
}, Sl = {
  ordinalNumber: hs({
    matchPattern: fl,
    parsePattern: hl,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: ie({
    matchPatterns: dl,
    defaultMatchWidth: "wide",
    parsePatterns: pl,
    defaultParseWidth: "any"
  }),
  quarter: ie({
    matchPatterns: gl,
    defaultMatchWidth: "wide",
    parsePatterns: ml,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: ie({
    matchPatterns: yl,
    defaultMatchWidth: "wide",
    parsePatterns: vl,
    defaultParseWidth: "any"
  }),
  day: ie({
    matchPatterns: _l,
    defaultMatchWidth: "wide",
    parsePatterns: bl,
    defaultParseWidth: "any"
  }),
  dayPeriod: ie({
    matchPatterns: xl,
    defaultMatchWidth: "any",
    parsePatterns: wl,
    defaultParseWidth: "any"
  })
};
const Cl = Sl;
var Ol = {
  code: "en-US",
  formatDistance: Uu,
  formatLong: Qu,
  formatRelative: Zu,
  localize: cl,
  match: Cl,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Ml = Ol;
function ds(e, t) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e;
}
function Al(e) {
  return ds({}, e);
}
function Ja(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var Ka = 1440, $l = 2520, li = 43200, Pl = 86400;
function El(e, t, n) {
  var r, i;
  Vt(2, arguments);
  var a = Ru(), o = (r = (i = n == null ? void 0 : n.locale) !== null && i !== void 0 ? i : a.locale) !== null && r !== void 0 ? r : Ml;
  if (!o.formatDistance)
    throw new RangeError("locale must contain formatDistance property");
  var s = Kn(e, t);
  if (isNaN(s))
    throw new RangeError("Invalid time value");
  var c = ds(Al(n), {
    addSuffix: Boolean(n == null ? void 0 : n.addSuffix),
    comparison: s
  }), u, g;
  s > 0 ? (u = wt(t), g = wt(e)) : (u = wt(e), g = wt(t));
  var h = Wu(g, u), p = (Ja(g) - Ja(u)) / 1e3, l = Math.round((h - p) / 60), v;
  if (l < 2)
    return n != null && n.includeSeconds ? h < 5 ? o.formatDistance("lessThanXSeconds", 5, c) : h < 10 ? o.formatDistance("lessThanXSeconds", 10, c) : h < 20 ? o.formatDistance("lessThanXSeconds", 20, c) : h < 40 ? o.formatDistance("halfAMinute", 0, c) : h < 60 ? o.formatDistance("lessThanXMinutes", 1, c) : o.formatDistance("xMinutes", 1, c) : l === 0 ? o.formatDistance("lessThanXMinutes", 1, c) : o.formatDistance("xMinutes", l, c);
  if (l < 45)
    return o.formatDistance("xMinutes", l, c);
  if (l < 90)
    return o.formatDistance("aboutXHours", 1, c);
  if (l < Ka) {
    var _ = Math.round(l / 60);
    return o.formatDistance("aboutXHours", _, c);
  } else {
    if (l < $l)
      return o.formatDistance("xDays", 1, c);
    if (l < li) {
      var y = Math.round(l / Ka);
      return o.formatDistance("xDays", y, c);
    } else if (l < Pl)
      return v = Math.round(l / li), o.formatDistance("aboutXMonths", v, c);
  }
  if (v = Lu(g, u), v < 12) {
    var f = Math.round(l / li);
    return o.formatDistance("xMonths", f, c);
  } else {
    var d = v % 12, b = Math.floor(v / 12);
    return d < 3 ? o.formatDistance("aboutXYears", b, c) : d < 9 ? o.formatDistance("overXYears", b, c) : o.formatDistance("almostXYears", b + 1, c);
  }
}
function Tl(e, t) {
  return Vt(1, arguments), El(e, Date.now(), t);
}
var Il = {
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
    one: "1 d\xEDa",
    other: "{{count}} d\xEDas"
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
    one: "alrededor de 1 a\xF1o",
    other: "alrededor de {{count}} a\xF1os"
  },
  xYears: {
    one: "1 a\xF1o",
    other: "{{count}} a\xF1os"
  },
  overXYears: {
    one: "m\xE1s de 1 a\xF1o",
    other: "m\xE1s de {{count}} a\xF1os"
  },
  almostXYears: {
    one: "casi 1 a\xF1o",
    other: "casi {{count}} a\xF1os"
  }
}, Rl = function(t, n, r) {
  var i, a = Il[t];
  return typeof a == "string" ? i = a : n === 1 ? i = a.one : i = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "en " + i : "hace " + i : i;
};
const Nl = Rl;
var kl = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, Dl = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Fl = {
  full: "{{date}} 'a las' {{time}}",
  long: "{{date}} 'a las' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ll = {
  date: an({
    formats: kl,
    defaultWidth: "full"
  }),
  time: an({
    formats: Dl,
    defaultWidth: "full"
  }),
  dateTime: an({
    formats: Fl,
    defaultWidth: "full"
  })
};
const zl = Ll;
var Bl = {
  lastWeek: "'el' eeee 'pasado a la' p",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'ma\xF1ana a la' p",
  nextWeek: "eeee 'a la' p",
  other: "P"
}, jl = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'ma\xF1ana a las' p",
  nextWeek: "eeee 'a las' p",
  other: "P"
}, Wl = function(t, n, r, i) {
  return n.getUTCHours() !== 1 ? jl[t] : Bl[t];
};
const ql = Wl;
var Hl = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "despu\xE9s de cristo"]
}, Ul = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1\xBA trimestre", "2\xBA trimestre", "3\xBA trimestre", "4\xBA trimestre"]
}, Vl = {
  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
}, Gl = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["do", "lu", "ma", "mi", "ju", "vi", "s\xE1"],
  abbreviated: ["dom", "lun", "mar", "mi\xE9", "jue", "vie", "s\xE1b"],
  wide: ["domingo", "lunes", "martes", "mi\xE9rcoles", "jueves", "viernes", "s\xE1bado"]
}, Yl = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "ma\xF1ana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "ma\xF1ana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "ma\xF1ana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  }
}, Xl = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "de la ma\xF1ana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "de la ma\xF1ana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "de la ma\xF1ana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  }
}, Ql = function(t, n) {
  var r = Number(t);
  return r + "\xBA";
}, Jl = {
  ordinalNumber: Ql,
  era: re({
    values: Hl,
    defaultWidth: "wide"
  }),
  quarter: re({
    values: Ul,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return Number(t) - 1;
    }
  }),
  month: re({
    values: Vl,
    defaultWidth: "wide"
  }),
  day: re({
    values: Gl,
    defaultWidth: "wide"
  }),
  dayPeriod: re({
    values: Yl,
    defaultWidth: "wide",
    formattingValues: Xl,
    defaultFormattingWidth: "wide"
  })
};
const Kl = Jl;
var Zl = /^(\d+)(º)?/i, tf = /\d+/i, ef = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
}, nf = {
  any: [/^ac/i, /^dc/i],
  wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
}, rf = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, af = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, of = {
  narrow: /^[efmajsond]/i,
  abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
  wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
}, sf = {
  narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
}, cf = {
  narrow: /^[dlmjvs]/i,
  short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
  abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
  wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
}, uf = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
}, lf = {
  narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
  any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
}, ff = {
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
}, hf = {
  ordinalNumber: hs({
    matchPattern: Zl,
    parsePattern: tf,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: ie({
    matchPatterns: ef,
    defaultMatchWidth: "wide",
    parsePatterns: nf,
    defaultParseWidth: "any"
  }),
  quarter: ie({
    matchPatterns: rf,
    defaultMatchWidth: "wide",
    parsePatterns: af,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: ie({
    matchPatterns: of,
    defaultMatchWidth: "wide",
    parsePatterns: sf,
    defaultParseWidth: "any"
  }),
  day: ie({
    matchPatterns: cf,
    defaultMatchWidth: "wide",
    parsePatterns: uf,
    defaultParseWidth: "any"
  }),
  dayPeriod: ie({
    matchPatterns: lf,
    defaultMatchWidth: "any",
    parsePatterns: ff,
    defaultParseWidth: "any"
  })
};
const df = hf;
var pf = {
  code: "es",
  formatDistance: Nl,
  formatLong: zl,
  formatRelative: ql,
  localize: Kl,
  match: df,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
const gf = pf, mf = {
  name: "TipiInitiativeMeta",
  components: {
    TipiIcon: Te
  },
  props: {
    initiative: Object,
    metaColors: {
      type: Object,
      default: function() {
        return {
          completed: ["Aprobada", "Respondida", "Celebrada", "Convertida en otra", "Acumulada en otra"],
          neutral: ["En tramitaci\xF3n", "Desconocida"],
          error: ["No admitida a tr\xE1mite", "No debatida", "Rechazada", "Retirada", "Derogada", "No celebrada"]
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
      return {
        completed: "success",
        neutral: "clock",
        error: "denied"
      }[t];
    },
    getStateMessage: function(e) {
      if (e.status == "Desconocida")
        return `${e.status}`;
      const t = this.getColorByStatus(e.status);
      let n = e.updated;
      t == "neutral" && (n = e.created);
      const r = Tl(new Date(n), {
        locale: gf,
        addSuffix: !0
      });
      return `${e.status} ${r}`;
    }
  }
};
var yf = function() {
  var t = this, n = t._self._c;
  return n("div", {
    staticClass: "c-initiative-meta"
  }, [n("div", {
    class: `c-initiative-meta__status c-initiative-meta__status--${t.getColorByStatus(t.initiative.status)}`
  }, [n("strong", [n("tipi-icon", {
    attrs: {
      icon: t.getIcon(t.initiative)
    }
  }), t._v(" " + t._s(t.getStateMessage(t.initiative)) + " ")], 1)])]);
}, vf = [], _f = /* @__PURE__ */ ct(mf, yf, vf, !1, null, null, null, null);
const ps = _f.exports, bf = {
  name: "TipiInitiativeCard",
  components: {
    TipiIcon: Te,
    TipiTopicPill: fs,
    TipiInitiativeMeta: ps
  },
  props: {
    initiative: Object,
    topicsStyles: Object,
    extendedLayout: Boolean,
    metaDeputies: String,
    metaGroupsOthers: String,
    metaColors: {
      type: Object,
      default: void 0
    }
  },
  methods: {
    getAuthors: function(e) {
      return e.authors.length ? e.authors.join("<br/>") : "";
    },
    getTopics: function(e) {
      let t = [];
      for (const n of e.tagged)
        t = t.concat(n.topics);
      return t;
    },
    getDeputies: function(e) {
      if (e.deputies.length == 0)
        return "";
      let t = /\[.*\]/;
      return e.deputies.map((n) => {
        var r = t.exec(n);
        return r ? n.replace(r[0], "").trim() : n;
      }).join("<br/>");
    }
  }
};
var xf = function() {
  var t = this, n = t._self._c;
  return n("div", [n("article", {
    staticClass: "c-initiative-card",
    attrs: {
      id: `initiative-card-${t.initiative.id}`
    }
  }, [n("h2", {
    staticClass: "c-initiative-card__title"
  }, [t.initiative.id ? n("router-link", {
    attrs: {
      to: {
        name: "initiative",
        params: {
          id: t.initiative.id
        }
      }
    }
  }, [t._v(t._s(t.initiative.title))]) : n("span", [t._v(t._s(t.initiative.title))])], 1), t.getDeputies(t.initiative) && t.extendedLayout ? n("div", {
    staticClass: "c-initiative-card__authors"
  }, [n("h3", {
    staticClass: "c-initiative-card__label"
  }, [t._v(t._s(t.metaDeputies))]), n("p", {
    domProps: {
      innerHTML: t._s(t.getDeputies(t.initiative))
    }
  })]) : t._e(), t.getAuthors(t.initiative) && t.extendedLayout ? n("div", {
    staticClass: "c-initiative-card__authors"
  }, [n("h3", {
    staticClass: "c-initiative-card__label"
  }, [t._v(t._s(t.metaGroupsOthers))]), n("p", {
    domProps: {
      innerHTML: t._s(t.getAuthors(t.initiative))
    }
  })]) : t._e(), t.initiative.id ? n("router-link", {
    attrs: {
      to: {
        name: "initiative",
        params: {
          id: t.initiative.id
        }
      }
    },
    scopedSlots: t._u([{
      key: "default",
      fn: function({
        href: r
      }) {
        return [n("a", {
          attrs: {
            href: r,
            target: "_blank"
          }
        }, [n("tipi-topic-pill", {
          staticClass: "c-initiative-card__topics",
          attrs: {
            topicsStyles: t.topicsStyles,
            topics: t.getTopics(t.initiative),
            limit: 3
          }
        })], 1)];
      }
    }], null, !1, 3658957857)
  }) : t._e(), n("div", {
    staticClass: "o-grid"
  }, [n("div", {
    staticClass: "o-grid__col"
  }, [n("tipi-initiative-meta", {
    attrs: {
      initiative: t.initiative,
      metaColors: t.metaColors
    }
  })], 1), n("div", {
    staticClass: "o-grid__col o-grid__col--right"
  }, [t.initiative.id ? n("router-link", {
    attrs: {
      to: {
        name: "initiative",
        params: {
          id: t.initiative.id
        }
      }
    },
    scopedSlots: t._u([{
      key: "default",
      fn: function({
        href: r
      }) {
        return [n("a", {
          attrs: {
            href: r,
            target: "_blank"
          }
        }, [n("tipi-icon", {
          staticClass: "c-icon--secondary",
          attrs: {
            icon: "open-blank"
          }
        })], 1)];
      }
    }], null, !1, 1888673612)
  }) : t._e()], 1)])], 1)]);
}, wf = [], Sf = /* @__PURE__ */ ct(bf, xf, wf, !1, null, null, null, null);
const gs = Sf.exports, Cf = {
  name: "TipiLoader",
  props: {
    title: String,
    subtitle: String
  }
};
var Of = function() {
  var t = this, n = t._self._c;
  return n("div", {
    staticClass: "c-loader"
  }, [t._m(0), t.title || t.subtitle ? n("div", {
    staticClass: "c-loader__text"
  }, [t.title ? n("h4", {
    staticClass: "c-loader__title"
  }, [t._v(t._s(t.title))]) : t._e(), t._v(" " + t._s(t.subtitle) + " ")]) : t._e()]);
}, Mf = [function() {
  var e = this, t = e._self._c;
  return t("div", {
    staticClass: "c-loader__spinner"
  }, [t("div", {
    staticClass: "c-loader__spinner-dot"
  }), t("div", {
    staticClass: "c-loader__spinner-dot"
  }), t("div", {
    staticClass: "c-loader__spinner-dot"
  }), t("div", {
    staticClass: "c-loader__spinner-dot"
  }), t("div", {
    staticClass: "c-loader__spinner-dot"
  }), t("div", {
    staticClass: "c-loader__spinner-dot"
  })]);
}], Af = /* @__PURE__ */ ct(Cf, Of, Mf, !1, null, null, null, null);
const ms = Af.exports;
var ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $f(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ys(e) {
  var t = e.default;
  if (typeof t == "function") {
    var n = function() {
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var vs = { exports: {} }, fi = { exports: {} }, hi = { exports: {} }, Za;
function _s() {
  return Za || (Za = 1, function(e) {
    (function(t, n) {
      e.exports ? e.exports = n() : t.EvEmitter = n();
    })(typeof window < "u" ? window : ft, function() {
      function t() {
      }
      var n = t.prototype;
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
      }, t;
    });
  }(hi)), hi.exports;
}
var di = { exports: {} };
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
var to;
function pa() {
  return to || (to = 1, function(e) {
    (function(t, n) {
      e.exports ? e.exports = n() : t.getSize = n();
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
      var u = !1, g;
      function h() {
        if (!u) {
          u = !0;
          var l = document.createElement("div");
          l.style.width = "200px", l.style.padding = "1px 2px 3px 4px", l.style.borderStyle = "solid", l.style.borderWidth = "1px 2px 3px 4px", l.style.boxSizing = "border-box";
          var v = document.body || document.documentElement;
          v.appendChild(l);
          var _ = c(l);
          g = Math.round(n(_.width)) == 200, p.isBoxSizeOuter = g, v.removeChild(l);
        }
      }
      function p(l) {
        if (h(), typeof l == "string" && (l = document.querySelector(l)), !(!l || typeof l != "object" || !l.nodeType)) {
          var v = c(l);
          if (v.display == "none")
            return s();
          var _ = {};
          _.width = l.offsetWidth, _.height = l.offsetHeight;
          for (var y = _.isBorderBox = v.boxSizing == "border-box", f = 0; f < o; f++) {
            var d = a[f], b = v[d], $ = parseFloat(b);
            _[d] = isNaN($) ? 0 : $;
          }
          var T = _.paddingLeft + _.paddingRight, L = _.paddingTop + _.paddingBottom, j = _.marginLeft + _.marginRight, z = _.marginTop + _.marginBottom, N = _.borderLeftWidth + _.borderRightWidth, D = _.borderTopWidth + _.borderBottomWidth, w = y && g, S = n(v.width);
          S !== !1 && (_.width = S + (w ? 0 : T + N));
          var C = n(v.height);
          return C !== !1 && (_.height = C + (w ? 0 : L + D)), _.innerWidth = _.width - (T + N), _.innerHeight = _.height - (L + D), _.outerWidth = _.width + j, _.outerHeight = _.height + z, _;
        }
      }
      return p;
    });
  }(di)), di.exports;
}
var pi = { exports: {} }, gi = { exports: {} }, eo;
function Pf() {
  return eo || (eo = 1, function(e) {
    (function(t, n) {
      e.exports ? e.exports = n() : t.matchesSelector = n();
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
  }(gi)), gi.exports;
}
var no;
function Ef() {
  return no || (no = 1, function(e) {
    (function(t, n) {
      e.exports ? e.exports = n(
        t,
        Pf()
      ) : t.fizzyUIUtils = n(
        t,
        t.matchesSelector
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
        return s.forEach(function(g) {
          if (g instanceof HTMLElement) {
            if (!c) {
              u.push(g);
              return;
            }
            r(g, c) && u.push(g);
            for (var h = g.querySelectorAll(c), p = 0; p < h.length; p++)
              u.push(h[p]);
          }
        }), u;
      }, i.debounceMethod = function(s, c, u) {
        u = u || 100;
        var g = s.prototype[c], h = c + "Timeout";
        s.prototype[c] = function() {
          var p = this[h];
          clearTimeout(p);
          var l = arguments, v = this;
          this[h] = setTimeout(function() {
            g.apply(v, l), delete v[h];
          }, u);
        };
      }, i.docReady = function(s) {
        var c = document.readyState;
        c == "complete" || c == "interactive" ? setTimeout(s) : document.addEventListener("DOMContentLoaded", s);
      }, i.toDashed = function(s) {
        return s.replace(/(.)([A-Z])/g, function(c, u, g) {
          return u + "-" + g;
        }).toLowerCase();
      };
      var o = n.console;
      return i.htmlInit = function(s, c) {
        i.docReady(function() {
          var u = i.toDashed(c), g = "data-" + u, h = document.querySelectorAll("[" + g + "]"), p = document.querySelectorAll(".js-" + u), l = i.makeArray(h).concat(i.makeArray(p)), v = g + "-options", _ = n.jQuery;
          l.forEach(function(y) {
            var f = y.getAttribute(g) || y.getAttribute(v), d;
            try {
              d = f && JSON.parse(f);
            } catch ($) {
              o && o.error("Error parsing " + g + " on " + y.className + ": " + $);
              return;
            }
            var b = new s(y, d);
            _ && _.data(y, c, b);
          });
        });
      }, i;
    });
  }(pi)), pi.exports;
}
var mi = { exports: {} }, ro;
function Tf() {
  return ro || (ro = 1, function(e) {
    (function(t, n) {
      e.exports ? e.exports = n(
        _s(),
        pa()
      ) : (t.Outlayer = {}, t.Outlayer.Item = n(
        t.EvEmitter,
        t.getSize
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
      function g(y, f) {
        !y || (this.element = y, this.layout = f, this.position = {
          x: 0,
          y: 0
        }, this._create());
      }
      var h = g.prototype = Object.create(n.prototype);
      h.constructor = g, h._create = function() {
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
        var y = getComputedStyle(this.element), f = this.layout._getOption("originLeft"), d = this.layout._getOption("originTop"), b = y[f ? "left" : "right"], $ = y[d ? "top" : "bottom"], T = parseFloat(b), L = parseFloat($), j = this.layout.size;
        b.indexOf("%") != -1 && (T = T / 100 * j.width), $.indexOf("%") != -1 && (L = L / 100 * j.height), T = isNaN(T) ? 0 : T, L = isNaN(L) ? 0 : L, T -= f ? j.paddingLeft : j.paddingRight, L -= d ? j.paddingTop : j.paddingBottom, this.position.x = T, this.position.y = L;
      }, h.layoutPosition = function() {
        var y = this.layout.size, f = {}, d = this.layout._getOption("originLeft"), b = this.layout._getOption("originTop"), $ = d ? "paddingLeft" : "paddingRight", T = d ? "left" : "right", L = d ? "right" : "left", j = this.position.x + y[$];
        f[T] = this.getXValue(j), f[L] = "";
        var z = b ? "paddingTop" : "paddingBottom", N = b ? "top" : "bottom", D = b ? "bottom" : "top", w = this.position.y + y[z];
        f[N] = this.getYValue(w), f[D] = "", this.css(f), this.emitEvent("layout", [this]);
      }, h.getXValue = function(y) {
        var f = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !f ? y / this.layout.size.width * 100 + "%" : y + "px";
      }, h.getYValue = function(y) {
        var f = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && f ? y / this.layout.size.height * 100 + "%" : y + "px";
      }, h._transitionTo = function(y, f) {
        this.getPosition();
        var d = this.position.x, b = this.position.y, $ = y == this.position.x && f == this.position.y;
        if (this.setPosition(y, f), $ && !this.isTransitioning) {
          this.layoutPosition();
          return;
        }
        var T = y - d, L = f - b, j = {};
        j.transform = this.getTranslate(T, L), this.transition({
          to: j,
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
      function p(y) {
        return y.replace(/([A-Z])/g, function(f) {
          return "-" + f.toLowerCase();
        });
      }
      var l = "opacity," + p(s);
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
      }, g;
    });
  }(mi)), mi.exports;
}
/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */
var io;
function If() {
  return io || (io = 1, function(e) {
    (function(t, n) {
      e.exports ? e.exports = n(
        t,
        _s(),
        pa(),
        Ef(),
        Tf()
      ) : t.Outlayer = n(
        t,
        t.EvEmitter,
        t.getSize,
        t.fizzyUIUtils,
        t.Outlayer.Item
      );
    })(window, function(n, r, i, a, o) {
      var s = n.console, c = n.jQuery, u = function() {
      }, g = 0, h = {};
      function p(f, d) {
        var b = a.getQueryElement(f);
        if (!b) {
          s && s.error("Bad element for " + this.constructor.namespace + ": " + (b || f));
          return;
        }
        this.element = b, c && (this.$element = c(this.element)), this.options = a.extend({}, this.constructor.defaults), this.option(d);
        var $ = ++g;
        this.element.outlayerGUID = $, h[$] = this, this._create();
        var T = this._getOption("initLayout");
        T && this.layout();
      }
      p.namespace = "outlayer", p.Item = o, p.defaults = {
        containerStyle: {
          position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
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
      var l = p.prototype;
      a.extend(l, r.prototype), l.option = function(f) {
        a.extend(this.options, f);
      }, l._getOption = function(f) {
        var d = this.constructor.compatOptions[f];
        return d && this.options[d] !== void 0 ? this.options[d] : this.options[f];
      }, p.compatOptions = {
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
        for (var d = this._filterFindItemElements(f), b = this.constructor.Item, $ = [], T = 0; T < d.length; T++) {
          var L = d[T], j = new b(L, this);
          $.push(j);
        }
        return $;
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
        var b = this.options[f], $;
        b ? (typeof b == "string" ? $ = this.element.querySelector(b) : b instanceof HTMLElement && ($ = b), this[f] = $ ? i($)[d] : b) : this[f] = 0;
      }, l.layoutItems = function(f, d) {
        f = this._getItemsForLayout(f), this._layoutItems(f, d), this._postLayout();
      }, l._getItemsForLayout = function(f) {
        return f.filter(function(d) {
          return !d.isIgnored;
        });
      }, l._layoutItems = function(f, d) {
        if (this._emitCompleteOnItems("layout", f), !(!f || !f.length)) {
          var b = [];
          f.forEach(function($) {
            var T = this._getItemLayoutPosition($);
            T.item = $, T.isInstant = d || $.isLayoutInstant, b.push(T);
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
      }, l._positionItem = function(f, d, b, $, T) {
        $ ? f.goTo(d, b) : (f.stagger(T * this.stagger), f.moveTo(d, b));
      }, l._postLayout = function() {
        this.resizeContainer();
      }, l.resizeContainer = function() {
        var f = this._getOption("resizeContainer");
        if (!!f) {
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
        function $() {
          b.dispatchEvent(f + "Complete", null, [d]);
        }
        var T = d.length;
        if (!d || !T) {
          $();
          return;
        }
        var L = 0;
        function j() {
          L++, L == T && $();
        }
        d.forEach(function(z) {
          z.once(f, j);
        });
      }, l.dispatchEvent = function(f, d, b) {
        var $ = d ? [d].concat(b) : b;
        if (this.emitEvent(f, $), c)
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
        if (!!f)
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
        var d = f.getBoundingClientRect(), b = this._boundingRect, $ = i(f), T = {
          left: d.left - b.left - $.marginLeft,
          top: d.top - b.top - $.marginTop,
          right: b.right - d.right - $.marginRight,
          bottom: b.bottom - d.bottom - $.marginBottom
        };
        return T;
      }, l.handleEvent = a.handleEvent, l.bindResize = function() {
        n.addEventListener("resize", this), this.isResizeBound = !0;
      }, l.unbindResize = function() {
        n.removeEventListener("resize", this), this.isResizeBound = !1;
      }, l.onresize = function() {
        this.resize();
      }, a.debounceMethod(p, "onresize", 100), l.resize = function() {
        !this.isResizeBound || !this.needsResizeLayout() || this.layout();
      }, l.needsResizeLayout = function() {
        var f = i(this.element), d = this.size && f;
        return d && f.innerWidth !== this.size.innerWidth;
      }, l.addItems = function(f) {
        var d = this._itemize(f);
        return d.length && (this.items = this.items.concat(d)), d;
      }, l.appended = function(f) {
        var d = this.addItems(f);
        !d.length || (this.layoutItems(d, !0), this.reveal(d));
      }, l.prepended = function(f) {
        var d = this._itemize(f);
        if (!!d.length) {
          var b = this.items.slice(0);
          this.items = d.concat(b), this._resetLayout(), this._manageStamps(), this.layoutItems(d, !0), this.reveal(d), this.layoutItems(b);
        }
      }, l.reveal = function(f) {
        if (this._emitCompleteOnItems("reveal", f), !(!f || !f.length)) {
          var d = this.updateStagger();
          f.forEach(function(b, $) {
            b.stagger($ * d), b.reveal();
          });
        }
      }, l.hide = function(f) {
        if (this._emitCompleteOnItems("hide", f), !(!f || !f.length)) {
          var d = this.updateStagger();
          f.forEach(function(b, $) {
            b.stagger($ * d), b.hide();
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
          var $ = this.getItem(b);
          $ && d.push($);
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
      }, p.data = function(f) {
        f = a.getQueryElement(f);
        var d = f && f.outlayerGUID;
        return d && h[d];
      }, p.create = function(f, d) {
        var b = v(p);
        return b.defaults = a.extend({}, p.defaults), a.extend(b.defaults, d), b.compatOptions = a.extend({}, p.compatOptions), b.namespace = f, b.data = p.data, b.Item = v(o), a.htmlInit(b, f), c && c.bridget && c.bridget(f, b), b;
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
        var d = f.match(/(^\d*\.?\d*)(\w*)/), b = d && d[1], $ = d && d[2];
        if (!b.length)
          return 0;
        b = parseFloat(b);
        var T = _[$] || 1;
        return b * T;
      }
      return p.Item = o, p;
    });
  }(fi)), fi.exports;
}
/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
(function(e) {
  (function(t, n) {
    e.exports ? e.exports = n(
      If(),
      pa()
    ) : t.Masonry = n(
      t.Outlayer,
      t.getSize
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
        this.columnWidth = s && r(s).outerWidth || this.containerWidth;
      }
      var c = this.columnWidth += this.gutter, u = this.containerWidth + this.gutter, g = u / c, h = c - u % c, p = h && h < 1 ? "round" : "floor";
      g = Math[p](g), this.cols = Math.max(g, 1);
    }, a.getContainerWidth = function() {
      var o = this._getOption("fitWidth"), s = o ? this.element.parentNode : this.element, c = r(s);
      this.containerWidth = c && c.innerWidth;
    }, a._getItemLayoutPosition = function(o) {
      o.getSize();
      var s = o.size.outerWidth % this.columnWidth, c = s && s < 1 ? "round" : "ceil", u = Math[c](o.size.outerWidth / this.columnWidth);
      u = Math.min(u, this.cols);
      for (var g = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", h = this[g](u, o), p = {
        x: this.columnWidth * h.col,
        y: h.y
      }, l = h.y + o.size.outerHeight, v = u + h.col, _ = h.col; _ < v; _++)
        this.colYs[_] = l;
      return p;
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
      var g = s.size.outerWidth && s.size.outerHeight;
      return this.horizontalColIndex = g ? c + o : this.horizontalColIndex, {
        col: c,
        y: this._getColGroupY(c, o)
      };
    }, a._manageStamp = function(o) {
      var s = r(o), c = this._getElementOffset(o), u = this._getOption("originLeft"), g = u ? c.left : c.right, h = g + s.outerWidth, p = Math.floor(g / this.columnWidth);
      p = Math.max(0, p);
      var l = Math.floor(h / this.columnWidth);
      l -= h % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
      for (var v = this._getOption("originTop"), _ = (v ? c.top : c.bottom) + s.outerHeight, y = p; y <= l; y++)
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
})(vs);
const Rf = vs.exports, Nf = {
  name: "TipiResults",
  components: {
    TipiInitiativeCard: gs,
    TipiLoader: ms
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
    metaDeputies: {
      type: String,
      default: "Diputada/o"
    },
    metaGroupsOthers: {
      type: String,
      default: "Autor"
    },
    metaColors: {
      type: Object,
      default: void 0
    }
  },
  computed: {
    isMoreResults: function() {
      return !this.loadingResults && this.queryMeta.page < this.queryMeta.pages;
    },
    nextResultsLabel: function() {
      let e = this.queryMeta.page * this.queryMeta.per_page + 1, t = e + this.queryMeta.per_page - 1;
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
      e && new Rf(e, {
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
    this.setupMasonry(), window.addEventListener("resize", function() {
      this.setupMasonry();
    }.bind(this));
  }
};
var kf = function() {
  var t = this, n = t._self._c;
  return n("div", [this.loadingResults ? n("tipi-loader", {
    attrs: {
      title: "Cargando resultados",
      subtitle: "Puede llevar algun tiempo"
    }
  }) : t._e(), this.initiatives && this.initiatives.length && !this.loadingResults ? n("section", {
    staticClass: "o-masonry o-grid"
  }, t._l(this.initiatives, function(r, i) {
    return n("div", {
      key: i,
      staticClass: "o-grid__col u-12 u-4@sm o-masonry__item"
    }, [n("tipi-initiative-card", {
      attrs: {
        initiative: r,
        extendedLayout: t.extendedLayout,
        topicsStyles: t.topicsStyles,
        metaDeputies: t.metaDeputies,
        metaGroupsOthers: t.metaGroupsOthers,
        metaColors: t.metaColors
      }
    })], 1);
  }), 0) : t._e(), this.$listeners.loadMore && t.isMoreResults ? n("div", {
    staticClass: "o-grid o-grid--center"
  }, [n("div", {
    staticClass: "o-grid__col"
  }, [n("a", {
    staticClass: "c-button c-button--secondary",
    attrs: {
      href: "#"
    },
    on: {
      click: function(r) {
        return r.preventDefault(), t.loadMore.apply(null, arguments);
      }
    }
  }, [t._v(" Cargar m\xE1s " + t._s(t.nextResultsLabel) + " ")])])]) : t._e()], 1);
}, Df = [], Ff = /* @__PURE__ */ ct(Nf, kf, Df, !1, null, null, null, null);
const Lf = Ff.exports, zf = {
  name: "TipiMessage",
  components: {
    TipiIcon: Te
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
};
var Bf = function() {
  var t = this, n = t._self._c;
  return n("div", {
    class: `c-message c-message--${t.type} ${t.icon ? "c-message--icon" : ""}`
  }, [n("div", {
    staticClass: "c-message__wrapper"
  }, [t.icon ? n("tipi-icon", {
    staticClass: "c-message__icon",
    attrs: {
      icon: t.type
    }
  }) : t._e(), t._t("default")], 2)]);
}, jf = [], Wf = /* @__PURE__ */ ct(zf, Bf, jf, !1, null, null, null, null);
const qf = Wf.exports;
var bs = {};
const Hf = {}, Uf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hf
}, Symbol.toStringTag, { value: "Module" })), xs = /* @__PURE__ */ ys(Uf);
var yi, ao;
function Vf() {
  if (ao)
    return yi;
  ao = 1;
  var e = "Expected a function", t = "__lodash_hash_undefined__", n = 1 / 0, r = "[object Function]", i = "[object GeneratorFunction]", a = "[object Symbol]", o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, s = /^\w*$/, c = /^\./, u = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, g = /[\\^$.*+?()[\]{}|]/g, h = /\\(\\)?/g, p = /^\[object .+?Constructor\]$/, l = typeof ft == "object" && ft && ft.Object === Object && ft, v = typeof self == "object" && self && self.Object === Object && self, _ = l || v || Function("return this")();
  function y(O, R) {
    return O == null ? void 0 : O[R];
  }
  function f(O) {
    var R = !1;
    if (O != null && typeof O.toString != "function")
      try {
        R = !!(O + "");
      } catch {
      }
    return R;
  }
  var d = Array.prototype, b = Function.prototype, $ = Object.prototype, T = _["__core-js_shared__"], L = function() {
    var O = /[^.]+$/.exec(T && T.keys && T.keys.IE_PROTO || "");
    return O ? "Symbol(src)_1." + O : "";
  }(), j = b.toString, z = $.hasOwnProperty, N = $.toString, D = RegExp(
    "^" + j.call(z).replace(g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), w = _.Symbol, S = d.splice, C = kt(_, "Map"), P = kt(Object, "create"), F = w ? w.prototype : void 0, B = F ? F.toString : void 0;
  function H(O) {
    var R = -1, W = O ? O.length : 0;
    for (this.clear(); ++R < W; ) {
      var et = O[R];
      this.set(et[0], et[1]);
    }
  }
  function X() {
    this.__data__ = P ? P(null) : {};
  }
  function J(O) {
    return this.has(O) && delete this.__data__[O];
  }
  function G(O) {
    var R = this.__data__;
    if (P) {
      var W = R[O];
      return W === t ? void 0 : W;
    }
    return z.call(R, O) ? R[O] : void 0;
  }
  function at(O) {
    var R = this.__data__;
    return P ? R[O] !== void 0 : z.call(R, O);
  }
  function nt(O, R) {
    var W = this.__data__;
    return W[O] = P && R === void 0 ? t : R, this;
  }
  H.prototype.clear = X, H.prototype.delete = J, H.prototype.get = G, H.prototype.has = at, H.prototype.set = nt;
  function K(O) {
    var R = -1, W = O ? O.length : 0;
    for (this.clear(); ++R < W; ) {
      var et = O[R];
      this.set(et[0], et[1]);
    }
  }
  function Q() {
    this.__data__ = [];
  }
  function it(O) {
    var R = this.__data__, W = Ct(R, O);
    if (W < 0)
      return !1;
    var et = R.length - 1;
    return W == et ? R.pop() : S.call(R, W, 1), !0;
  }
  function rt(O) {
    var R = this.__data__, W = Ct(R, O);
    return W < 0 ? void 0 : R[W][1];
  }
  function Y(O) {
    return Ct(this.__data__, O) > -1;
  }
  function ot(O, R) {
    var W = this.__data__, et = Ct(W, O);
    return et < 0 ? W.push([O, R]) : W[et][1] = R, this;
  }
  K.prototype.clear = Q, K.prototype.delete = it, K.prototype.get = rt, K.prototype.has = Y, K.prototype.set = ot;
  function st(O) {
    var R = -1, W = O ? O.length : 0;
    for (this.clear(); ++R < W; ) {
      var et = O[R];
      this.set(et[0], et[1]);
    }
  }
  function ht() {
    this.__data__ = {
      hash: new H(),
      map: new (C || K)(),
      string: new H()
    };
  }
  function mt(O) {
    return Nt(this, O).delete(O);
  }
  function Yt(O) {
    return Nt(this, O).get(O);
  }
  function Xt(O) {
    return Nt(this, O).has(O);
  }
  function vt(O, R) {
    return Nt(this, O).set(O, R), this;
  }
  st.prototype.clear = ht, st.prototype.delete = mt, st.prototype.get = Yt, st.prototype.has = Xt, st.prototype.set = vt;
  function Ct(O, R) {
    for (var W = O.length; W--; )
      if (ue(O[W][0], R))
        return W;
    return -1;
  }
  function Ft(O, R) {
    R = Qt(R, O) ? [R] : Re(R);
    for (var W = 0, et = R.length; O != null && W < et; )
      O = O[Ne(R[W++])];
    return W && W == et ? O : void 0;
  }
  function Et(O) {
    if (!k(O) || Ot(O))
      return !1;
    var R = A(O) || f(O) ? D : p;
    return R.test(ye(O));
  }
  function Rt(O) {
    if (typeof O == "string")
      return O;
    if (Z(O))
      return B ? B.call(O) : "";
    var R = O + "";
    return R == "0" && 1 / O == -n ? "-0" : R;
  }
  function Re(O) {
    return ve(O) ? O : Jt(O);
  }
  function Nt(O, R) {
    var W = O.__data__;
    return qt(R) ? W[typeof R == "string" ? "string" : "hash"] : W.map;
  }
  function kt(O, R) {
    var W = y(O, R);
    return Et(W) ? W : void 0;
  }
  function Qt(O, R) {
    if (ve(O))
      return !1;
    var W = typeof O;
    return W == "number" || W == "symbol" || W == "boolean" || O == null || Z(O) ? !0 : s.test(O) || !o.test(O) || R != null && O in Object(R);
  }
  function qt(O) {
    var R = typeof O;
    return R == "string" || R == "number" || R == "symbol" || R == "boolean" ? O !== "__proto__" : O === null;
  }
  function Ot(O) {
    return !!L && L in O;
  }
  var Jt = Kt(function(O) {
    O = Mt(O);
    var R = [];
    return c.test(O) && R.push(""), O.replace(u, function(W, et, x, E) {
      R.push(x ? E.replace(h, "$1") : et || W);
    }), R;
  });
  function Ne(O) {
    if (typeof O == "string" || Z(O))
      return O;
    var R = O + "";
    return R == "0" && 1 / O == -n ? "-0" : R;
  }
  function ye(O) {
    if (O != null) {
      try {
        return j.call(O);
      } catch {
      }
      try {
        return O + "";
      } catch {
      }
    }
    return "";
  }
  function Kt(O, R) {
    if (typeof O != "function" || R && typeof R != "function")
      throw new TypeError(e);
    var W = function() {
      var et = arguments, x = R ? R.apply(this, et) : et[0], E = W.cache;
      if (E.has(x))
        return E.get(x);
      var U = O.apply(this, et);
      return W.cache = E.set(x, U), U;
    };
    return W.cache = new (Kt.Cache || st)(), W;
  }
  Kt.Cache = st;
  function ue(O, R) {
    return O === R || O !== O && R !== R;
  }
  var ve = Array.isArray;
  function A(O) {
    var R = k(O) ? N.call(O) : "";
    return R == r || R == i;
  }
  function k(O) {
    var R = typeof O;
    return !!O && (R == "object" || R == "function");
  }
  function V(O) {
    return !!O && typeof O == "object";
  }
  function Z(O) {
    return typeof O == "symbol" || V(O) && N.call(O) == a;
  }
  function Mt(O) {
    return O == null ? "" : Rt(O);
  }
  function yt(O, R, W) {
    var et = O == null ? void 0 : Ft(O, R);
    return et === void 0 ? W : et;
  }
  return yi = yt, yi;
}
var vi, oo;
function Gf() {
  if (oo)
    return vi;
  oo = 1;
  var e = 9007199254740991, t = "[object Arguments]", n = "[object Function]", r = "[object GeneratorFunction]", i = typeof ft == "object" && ft && ft.Object === Object && ft, a = typeof self == "object" && self && self.Object === Object && self, o = i || a || Function("return this")();
  function s(N, D) {
    for (var w = -1, S = D.length, C = N.length; ++w < S; )
      N[C + w] = D[w];
    return N;
  }
  var c = Object.prototype, u = c.hasOwnProperty, g = c.toString, h = o.Symbol, p = c.propertyIsEnumerable, l = h ? h.isConcatSpreadable : void 0;
  function v(N, D, w, S, C) {
    var P = -1, F = N.length;
    for (w || (w = _), C || (C = []); ++P < F; ) {
      var B = N[P];
      D > 0 && w(B) ? D > 1 ? v(B, D - 1, w, S, C) : s(C, B) : S || (C[C.length] = B);
    }
    return C;
  }
  function _(N) {
    return d(N) || f(N) || !!(l && N && N[l]);
  }
  function y(N) {
    var D = N ? N.length : 0;
    return D ? v(N, 1) : [];
  }
  function f(N) {
    return $(N) && u.call(N, "callee") && (!p.call(N, "callee") || g.call(N) == t);
  }
  var d = Array.isArray;
  function b(N) {
    return N != null && L(N.length) && !T(N);
  }
  function $(N) {
    return z(N) && b(N);
  }
  function T(N) {
    var D = j(N) ? g.call(N) : "";
    return D == n || D == r;
  }
  function L(N) {
    return typeof N == "number" && N > -1 && N % 1 == 0 && N <= e;
  }
  function j(N) {
    var D = typeof N;
    return !!N && (D == "object" || D == "function");
  }
  function z(N) {
    return !!N && typeof N == "object";
  }
  return vi = y, vi;
}
var _i, so;
function Yf() {
  if (so)
    return _i;
  so = 1;
  var e = 200, t = "__lodash_hash_undefined__", n = 1 / 0, r = "[object Function]", i = "[object GeneratorFunction]", a = /[\\^$.*+?()[\]{}|]/g, o = /^\[object .+?Constructor\]$/, s = typeof ft == "object" && ft && ft.Object === Object && ft, c = typeof self == "object" && self && self.Object === Object && self, u = s || c || Function("return this")();
  function g(A, k) {
    var V = A ? A.length : 0;
    return !!V && l(A, k, 0) > -1;
  }
  function h(A, k, V) {
    for (var Z = -1, Mt = A ? A.length : 0; ++Z < Mt; )
      if (V(k, A[Z]))
        return !0;
    return !1;
  }
  function p(A, k, V, Z) {
    for (var Mt = A.length, yt = V + (Z ? 1 : -1); Z ? yt-- : ++yt < Mt; )
      if (k(A[yt], yt, A))
        return yt;
    return -1;
  }
  function l(A, k, V) {
    if (k !== k)
      return p(A, v, V);
    for (var Z = V - 1, Mt = A.length; ++Z < Mt; )
      if (A[Z] === k)
        return Z;
    return -1;
  }
  function v(A) {
    return A !== A;
  }
  function _(A, k) {
    return A.has(k);
  }
  function y(A, k) {
    return A == null ? void 0 : A[k];
  }
  function f(A) {
    var k = !1;
    if (A != null && typeof A.toString != "function")
      try {
        k = !!(A + "");
      } catch {
      }
    return k;
  }
  function d(A) {
    var k = -1, V = Array(A.size);
    return A.forEach(function(Z) {
      V[++k] = Z;
    }), V;
  }
  var b = Array.prototype, $ = Function.prototype, T = Object.prototype, L = u["__core-js_shared__"], j = function() {
    var A = /[^.]+$/.exec(L && L.keys && L.keys.IE_PROTO || "");
    return A ? "Symbol(src)_1." + A : "";
  }(), z = $.toString, N = T.hasOwnProperty, D = T.toString, w = RegExp(
    "^" + z.call(N).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), S = b.splice, C = Qt(u, "Map"), P = Qt(u, "Set"), F = Qt(Object, "create");
  function B(A) {
    var k = -1, V = A ? A.length : 0;
    for (this.clear(); ++k < V; ) {
      var Z = A[k];
      this.set(Z[0], Z[1]);
    }
  }
  function H() {
    this.__data__ = F ? F(null) : {};
  }
  function X(A) {
    return this.has(A) && delete this.__data__[A];
  }
  function J(A) {
    var k = this.__data__;
    if (F) {
      var V = k[A];
      return V === t ? void 0 : V;
    }
    return N.call(k, A) ? k[A] : void 0;
  }
  function G(A) {
    var k = this.__data__;
    return F ? k[A] !== void 0 : N.call(k, A);
  }
  function at(A, k) {
    var V = this.__data__;
    return V[A] = F && k === void 0 ? t : k, this;
  }
  B.prototype.clear = H, B.prototype.delete = X, B.prototype.get = J, B.prototype.has = G, B.prototype.set = at;
  function nt(A) {
    var k = -1, V = A ? A.length : 0;
    for (this.clear(); ++k < V; ) {
      var Z = A[k];
      this.set(Z[0], Z[1]);
    }
  }
  function K() {
    this.__data__ = [];
  }
  function Q(A) {
    var k = this.__data__, V = Et(k, A);
    if (V < 0)
      return !1;
    var Z = k.length - 1;
    return V == Z ? k.pop() : S.call(k, V, 1), !0;
  }
  function it(A) {
    var k = this.__data__, V = Et(k, A);
    return V < 0 ? void 0 : k[V][1];
  }
  function rt(A) {
    return Et(this.__data__, A) > -1;
  }
  function Y(A, k) {
    var V = this.__data__, Z = Et(V, A);
    return Z < 0 ? V.push([A, k]) : V[Z][1] = k, this;
  }
  nt.prototype.clear = K, nt.prototype.delete = Q, nt.prototype.get = it, nt.prototype.has = rt, nt.prototype.set = Y;
  function ot(A) {
    var k = -1, V = A ? A.length : 0;
    for (this.clear(); ++k < V; ) {
      var Z = A[k];
      this.set(Z[0], Z[1]);
    }
  }
  function st() {
    this.__data__ = {
      hash: new B(),
      map: new (C || nt)(),
      string: new B()
    };
  }
  function ht(A) {
    return kt(this, A).delete(A);
  }
  function mt(A) {
    return kt(this, A).get(A);
  }
  function Yt(A) {
    return kt(this, A).has(A);
  }
  function Xt(A, k) {
    return kt(this, A).set(A, k), this;
  }
  ot.prototype.clear = st, ot.prototype.delete = ht, ot.prototype.get = mt, ot.prototype.has = Yt, ot.prototype.set = Xt;
  function vt(A) {
    var k = -1, V = A ? A.length : 0;
    for (this.__data__ = new ot(); ++k < V; )
      this.add(A[k]);
  }
  function Ct(A) {
    return this.__data__.set(A, t), this;
  }
  function Ft(A) {
    return this.__data__.has(A);
  }
  vt.prototype.add = vt.prototype.push = Ct, vt.prototype.has = Ft;
  function Et(A, k) {
    for (var V = A.length; V--; )
      if (ye(A[V][0], k))
        return V;
    return -1;
  }
  function Rt(A) {
    if (!ue(A) || Ot(A))
      return !1;
    var k = Kt(A) || f(A) ? w : o;
    return k.test(Jt(A));
  }
  function Re(A, k, V) {
    var Z = -1, Mt = g, yt = A.length, O = !0, R = [], W = R;
    if (V)
      O = !1, Mt = h;
    else if (yt >= e) {
      var et = k ? null : Nt(A);
      if (et)
        return d(et);
      O = !1, Mt = _, W = new vt();
    } else
      W = k ? [] : R;
    t:
      for (; ++Z < yt; ) {
        var x = A[Z], E = k ? k(x) : x;
        if (x = V || x !== 0 ? x : 0, O && E === E) {
          for (var U = W.length; U--; )
            if (W[U] === E)
              continue t;
          k && W.push(E), R.push(x);
        } else
          Mt(W, E, V) || (W !== R && W.push(E), R.push(x));
      }
    return R;
  }
  var Nt = P && 1 / d(new P([, -0]))[1] == n ? function(A) {
    return new P(A);
  } : ve;
  function kt(A, k) {
    var V = A.__data__;
    return qt(k) ? V[typeof k == "string" ? "string" : "hash"] : V.map;
  }
  function Qt(A, k) {
    var V = y(A, k);
    return Rt(V) ? V : void 0;
  }
  function qt(A) {
    var k = typeof A;
    return k == "string" || k == "number" || k == "symbol" || k == "boolean" ? A !== "__proto__" : A === null;
  }
  function Ot(A) {
    return !!j && j in A;
  }
  function Jt(A) {
    if (A != null) {
      try {
        return z.call(A);
      } catch {
      }
      try {
        return A + "";
      } catch {
      }
    }
    return "";
  }
  function Ne(A) {
    return A && A.length ? Re(A) : [];
  }
  function ye(A, k) {
    return A === k || A !== A && k !== k;
  }
  function Kt(A) {
    var k = ue(A) ? D.call(A) : "";
    return k == r || k == i;
  }
  function ue(A) {
    var k = typeof A;
    return !!A && (k == "object" || k == "function");
  }
  function ve() {
  }
  return _i = Ne, _i;
}
var bi, co;
function Xf() {
  if (co)
    return bi;
  co = 1;
  var e = "Expected a function", t = "__lodash_hash_undefined__", n = 1 / 0, r = 9007199254740991, i = "[object Function]", a = "[object GeneratorFunction]", o = "[object Symbol]", s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, c = /^\w*$/, u = /^\./, g = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, h = /[\\^$.*+?()[\]{}|]/g, p = /\\(\\)?/g, l = /^\[object .+?Constructor\]$/, v = /^(?:0|[1-9]\d*)$/, _ = typeof ft == "object" && ft && ft.Object === Object && ft, y = typeof self == "object" && self && self.Object === Object && self, f = _ || y || Function("return this")();
  function d(x, E) {
    return x == null ? void 0 : x[E];
  }
  function b(x) {
    var E = !1;
    if (x != null && typeof x.toString != "function")
      try {
        E = !!(x + "");
      } catch {
      }
    return E;
  }
  var $ = Array.prototype, T = Function.prototype, L = Object.prototype, j = f["__core-js_shared__"], z = function() {
    var x = /[^.]+$/.exec(j && j.keys && j.keys.IE_PROTO || "");
    return x ? "Symbol(src)_1." + x : "";
  }(), N = T.toString, D = L.hasOwnProperty, w = L.toString, S = RegExp(
    "^" + N.call(D).replace(h, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), C = f.Symbol, P = $.splice, F = Ot(f, "Map"), B = Ot(Object, "create"), H = C ? C.prototype : void 0, X = H ? H.toString : void 0;
  function J(x) {
    var E = -1, U = x ? x.length : 0;
    for (this.clear(); ++E < U; ) {
      var ut = x[E];
      this.set(ut[0], ut[1]);
    }
  }
  function G() {
    this.__data__ = B ? B(null) : {};
  }
  function at(x) {
    return this.has(x) && delete this.__data__[x];
  }
  function nt(x) {
    var E = this.__data__;
    if (B) {
      var U = E[x];
      return U === t ? void 0 : U;
    }
    return D.call(E, x) ? E[x] : void 0;
  }
  function K(x) {
    var E = this.__data__;
    return B ? E[x] !== void 0 : D.call(E, x);
  }
  function Q(x, E) {
    var U = this.__data__;
    return U[x] = B && E === void 0 ? t : E, this;
  }
  J.prototype.clear = G, J.prototype.delete = at, J.prototype.get = nt, J.prototype.has = K, J.prototype.set = Q;
  function it(x) {
    var E = -1, U = x ? x.length : 0;
    for (this.clear(); ++E < U; ) {
      var ut = x[E];
      this.set(ut[0], ut[1]);
    }
  }
  function rt() {
    this.__data__ = [];
  }
  function Y(x) {
    var E = this.__data__, U = Rt(E, x);
    if (U < 0)
      return !1;
    var ut = E.length - 1;
    return U == ut ? E.pop() : P.call(E, U, 1), !0;
  }
  function ot(x) {
    var E = this.__data__, U = Rt(E, x);
    return U < 0 ? void 0 : E[U][1];
  }
  function st(x) {
    return Rt(this.__data__, x) > -1;
  }
  function ht(x, E) {
    var U = this.__data__, ut = Rt(U, x);
    return ut < 0 ? U.push([x, E]) : U[ut][1] = E, this;
  }
  it.prototype.clear = rt, it.prototype.delete = Y, it.prototype.get = ot, it.prototype.has = st, it.prototype.set = ht;
  function mt(x) {
    var E = -1, U = x ? x.length : 0;
    for (this.clear(); ++E < U; ) {
      var ut = x[E];
      this.set(ut[0], ut[1]);
    }
  }
  function Yt() {
    this.__data__ = {
      hash: new J(),
      map: new (F || it)(),
      string: new J()
    };
  }
  function Xt(x) {
    return qt(this, x).delete(x);
  }
  function vt(x) {
    return qt(this, x).get(x);
  }
  function Ct(x) {
    return qt(this, x).has(x);
  }
  function Ft(x, E) {
    return qt(this, x).set(x, E), this;
  }
  mt.prototype.clear = Yt, mt.prototype.delete = Xt, mt.prototype.get = vt, mt.prototype.has = Ct, mt.prototype.set = Ft;
  function Et(x, E, U) {
    var ut = x[E];
    (!(D.call(x, E) && V(ut, U)) || U === void 0 && !(E in x)) && (x[E] = U);
  }
  function Rt(x, E) {
    for (var U = x.length; U--; )
      if (V(x[U][0], E))
        return U;
    return -1;
  }
  function Re(x) {
    if (!yt(x) || Kt(x))
      return !1;
    var E = Mt(x) || b(x) ? S : l;
    return E.test(A(x));
  }
  function Nt(x, E, U, ut) {
    if (!yt(x))
      return x;
    E = Ne(E, x) ? [E] : Qt(E);
    for (var Lt = -1, Zt = E.length, Ye = Zt - 1, le = x; le != null && ++Lt < Zt; ) {
      var ke = ve(E[Lt]), zt = U;
      if (Lt != Ye) {
        var _n = le[ke];
        zt = ut ? ut(_n, ke, le) : void 0, zt === void 0 && (zt = yt(_n) ? _n : Jt(E[Lt + 1]) ? [] : {});
      }
      Et(le, ke, zt), le = le[ke];
    }
    return x;
  }
  function kt(x) {
    if (typeof x == "string")
      return x;
    if (R(x))
      return X ? X.call(x) : "";
    var E = x + "";
    return E == "0" && 1 / x == -n ? "-0" : E;
  }
  function Qt(x) {
    return Z(x) ? x : ue(x);
  }
  function qt(x, E) {
    var U = x.__data__;
    return ye(E) ? U[typeof E == "string" ? "string" : "hash"] : U.map;
  }
  function Ot(x, E) {
    var U = d(x, E);
    return Re(U) ? U : void 0;
  }
  function Jt(x, E) {
    return E = E == null ? r : E, !!E && (typeof x == "number" || v.test(x)) && x > -1 && x % 1 == 0 && x < E;
  }
  function Ne(x, E) {
    if (Z(x))
      return !1;
    var U = typeof x;
    return U == "number" || U == "symbol" || U == "boolean" || x == null || R(x) ? !0 : c.test(x) || !s.test(x) || E != null && x in Object(E);
  }
  function ye(x) {
    var E = typeof x;
    return E == "string" || E == "number" || E == "symbol" || E == "boolean" ? x !== "__proto__" : x === null;
  }
  function Kt(x) {
    return !!z && z in x;
  }
  var ue = k(function(x) {
    x = W(x);
    var E = [];
    return u.test(x) && E.push(""), x.replace(g, function(U, ut, Lt, Zt) {
      E.push(Lt ? Zt.replace(p, "$1") : ut || U);
    }), E;
  });
  function ve(x) {
    if (typeof x == "string" || R(x))
      return x;
    var E = x + "";
    return E == "0" && 1 / x == -n ? "-0" : E;
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
  function k(x, E) {
    if (typeof x != "function" || E && typeof E != "function")
      throw new TypeError(e);
    var U = function() {
      var ut = arguments, Lt = E ? E.apply(this, ut) : ut[0], Zt = U.cache;
      if (Zt.has(Lt))
        return Zt.get(Lt);
      var Ye = x.apply(this, ut);
      return U.cache = Zt.set(Lt, Ye), Ye;
    };
    return U.cache = new (k.Cache || mt)(), U;
  }
  k.Cache = mt;
  function V(x, E) {
    return x === E || x !== x && E !== E;
  }
  var Z = Array.isArray;
  function Mt(x) {
    var E = yt(x) ? w.call(x) : "";
    return E == i || E == a;
  }
  function yt(x) {
    var E = typeof x;
    return !!x && (E == "object" || E == "function");
  }
  function O(x) {
    return !!x && typeof x == "object";
  }
  function R(x) {
    return typeof x == "symbol" || O(x) && w.call(x) == o;
  }
  function W(x) {
    return x == null ? "" : kt(x);
  }
  function et(x, E, U) {
    return x == null ? x : Nt(x, E, U);
  }
  return bi = et, bi;
}
var qn = { exports: {} }, uo;
function Qf() {
  return uo || (uo = 1, function(e, t) {
    var n = 200, r = "__lodash_hash_undefined__", i = 9007199254740991, a = "[object Arguments]", o = "[object Array]", s = "[object Boolean]", c = "[object Date]", u = "[object Error]", g = "[object Function]", h = "[object GeneratorFunction]", p = "[object Map]", l = "[object Number]", v = "[object Object]", _ = "[object Promise]", y = "[object RegExp]", f = "[object Set]", d = "[object String]", b = "[object Symbol]", $ = "[object WeakMap]", T = "[object ArrayBuffer]", L = "[object DataView]", j = "[object Float32Array]", z = "[object Float64Array]", N = "[object Int8Array]", D = "[object Int16Array]", w = "[object Int32Array]", S = "[object Uint8Array]", C = "[object Uint8ClampedArray]", P = "[object Uint16Array]", F = "[object Uint32Array]", B = /[\\^$.*+?()[\]{}|]/g, H = /\w*$/, X = /^\[object .+?Constructor\]$/, J = /^(?:0|[1-9]\d*)$/, G = {};
    G[a] = G[o] = G[T] = G[L] = G[s] = G[c] = G[j] = G[z] = G[N] = G[D] = G[w] = G[p] = G[l] = G[v] = G[y] = G[f] = G[d] = G[b] = G[S] = G[C] = G[P] = G[F] = !0, G[u] = G[g] = G[$] = !1;
    var at = typeof ft == "object" && ft && ft.Object === Object && ft, nt = typeof self == "object" && self && self.Object === Object && self, K = at || nt || Function("return this")(), Q = t && !t.nodeType && t, it = Q && !0 && e && !e.nodeType && e, rt = it && it.exports === Q;
    function Y(m, M) {
      return m.set(M[0], M[1]), m;
    }
    function ot(m, M) {
      return m.add(M), m;
    }
    function st(m, M) {
      for (var I = -1, q = m ? m.length : 0; ++I < q && M(m[I], I, m) !== !1; )
        ;
      return m;
    }
    function ht(m, M) {
      for (var I = -1, q = M.length, dt = m.length; ++I < q; )
        m[dt + I] = M[I];
      return m;
    }
    function mt(m, M, I, q) {
      var dt = -1, At = m ? m.length : 0;
      for (q && At && (I = m[++dt]); ++dt < At; )
        I = M(I, m[dt], dt, m);
      return I;
    }
    function Yt(m, M) {
      for (var I = -1, q = Array(m); ++I < m; )
        q[I] = M(I);
      return q;
    }
    function Xt(m, M) {
      return m == null ? void 0 : m[M];
    }
    function vt(m) {
      var M = !1;
      if (m != null && typeof m.toString != "function")
        try {
          M = !!(m + "");
        } catch {
        }
      return M;
    }
    function Ct(m) {
      var M = -1, I = Array(m.size);
      return m.forEach(function(q, dt) {
        I[++M] = [dt, q];
      }), I;
    }
    function Ft(m, M) {
      return function(I) {
        return m(M(I));
      };
    }
    function Et(m) {
      var M = -1, I = Array(m.size);
      return m.forEach(function(q) {
        I[++M] = q;
      }), I;
    }
    var Rt = Array.prototype, Re = Function.prototype, Nt = Object.prototype, kt = K["__core-js_shared__"], Qt = function() {
      var m = /[^.]+$/.exec(kt && kt.keys && kt.keys.IE_PROTO || "");
      return m ? "Symbol(src)_1." + m : "";
    }(), qt = Re.toString, Ot = Nt.hasOwnProperty, Jt = Nt.toString, Ne = RegExp(
      "^" + qt.call(Ot).replace(B, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), ye = rt ? K.Buffer : void 0, Kt = K.Symbol, ue = K.Uint8Array, ve = Ft(Object.getPrototypeOf, Object), A = Object.create, k = Nt.propertyIsEnumerable, V = Rt.splice, Z = Object.getOwnPropertySymbols, Mt = ye ? ye.isBuffer : void 0, yt = Ft(Object.keys, Object), O = Je(K, "DataView"), R = Je(K, "Map"), W = Je(K, "Promise"), et = Je(K, "Set"), x = Je(K, "WeakMap"), E = Je(Object, "create"), U = Fe(O), ut = Fe(R), Lt = Fe(W), Zt = Fe(et), Ye = Fe(x), le = Kt ? Kt.prototype : void 0, ke = le ? le.valueOf : void 0;
    function zt(m) {
      var M = -1, I = m ? m.length : 0;
      for (this.clear(); ++M < I; ) {
        var q = m[M];
        this.set(q[0], q[1]);
      }
    }
    function _n() {
      this.__data__ = E ? E(null) : {};
    }
    function Mc(m) {
      return this.has(m) && delete this.__data__[m];
    }
    function Ac(m) {
      var M = this.__data__;
      if (E) {
        var I = M[m];
        return I === r ? void 0 : I;
      }
      return Ot.call(M, m) ? M[m] : void 0;
    }
    function $c(m) {
      var M = this.__data__;
      return E ? M[m] !== void 0 : Ot.call(M, m);
    }
    function Pc(m, M) {
      var I = this.__data__;
      return I[m] = E && M === void 0 ? r : M, this;
    }
    zt.prototype.clear = _n, zt.prototype.delete = Mc, zt.prototype.get = Ac, zt.prototype.has = $c, zt.prototype.set = Pc;
    function fe(m) {
      var M = -1, I = m ? m.length : 0;
      for (this.clear(); ++M < I; ) {
        var q = m[M];
        this.set(q[0], q[1]);
      }
    }
    function Ec() {
      this.__data__ = [];
    }
    function Tc(m) {
      var M = this.__data__, I = zn(M, m);
      if (I < 0)
        return !1;
      var q = M.length - 1;
      return I == q ? M.pop() : V.call(M, I, 1), !0;
    }
    function Ic(m) {
      var M = this.__data__, I = zn(M, m);
      return I < 0 ? void 0 : M[I][1];
    }
    function Rc(m) {
      return zn(this.__data__, m) > -1;
    }
    function Nc(m, M) {
      var I = this.__data__, q = zn(I, m);
      return q < 0 ? I.push([m, M]) : I[q][1] = M, this;
    }
    fe.prototype.clear = Ec, fe.prototype.delete = Tc, fe.prototype.get = Ic, fe.prototype.has = Rc, fe.prototype.set = Nc;
    function Xe(m) {
      var M = -1, I = m ? m.length : 0;
      for (this.clear(); ++M < I; ) {
        var q = m[M];
        this.set(q[0], q[1]);
      }
    }
    function kc() {
      this.__data__ = {
        hash: new zt(),
        map: new (R || fe)(),
        string: new zt()
      };
    }
    function Dc(m) {
      return Bn(this, m).delete(m);
    }
    function Fc(m) {
      return Bn(this, m).get(m);
    }
    function Lc(m) {
      return Bn(this, m).has(m);
    }
    function zc(m, M) {
      return Bn(this, m).set(m, M), this;
    }
    Xe.prototype.clear = kc, Xe.prototype.delete = Dc, Xe.prototype.get = Fc, Xe.prototype.has = Lc, Xe.prototype.set = zc;
    function Qe(m) {
      this.__data__ = new fe(m);
    }
    function Bc() {
      this.__data__ = new fe();
    }
    function jc(m) {
      return this.__data__.delete(m);
    }
    function Wc(m) {
      return this.__data__.get(m);
    }
    function qc(m) {
      return this.__data__.has(m);
    }
    function Hc(m, M) {
      var I = this.__data__;
      if (I instanceof fe) {
        var q = I.__data__;
        if (!R || q.length < n - 1)
          return q.push([m, M]), this;
        I = this.__data__ = new Xe(q);
      }
      return I.set(m, M), this;
    }
    Qe.prototype.clear = Bc, Qe.prototype.delete = jc, Qe.prototype.get = Wc, Qe.prototype.has = qc, Qe.prototype.set = Hc;
    function Uc(m, M) {
      var I = si(m) || gu(m) ? Yt(m.length, String) : [], q = I.length, dt = !!q;
      for (var At in m)
        (M || Ot.call(m, At)) && !(dt && (At == "length" || fu(At, q))) && I.push(At);
      return I;
    }
    function za(m, M, I) {
      var q = m[M];
      (!(Ot.call(m, M) && qa(q, I)) || I === void 0 && !(M in m)) && (m[M] = I);
    }
    function zn(m, M) {
      for (var I = m.length; I--; )
        if (qa(m[I][0], M))
          return I;
      return -1;
    }
    function Vc(m, M) {
      return m && Ba(M, ci(M), m);
    }
    function ai(m, M, I, q, dt, At, Bt) {
      var Tt;
      if (q && (Tt = At ? q(m, dt, At, Bt) : q(m)), Tt !== void 0)
        return Tt;
      if (!jn(m))
        return m;
      var Va = si(m);
      if (Va) {
        if (Tt = cu(m), !M)
          return au(m, Tt);
      } else {
        var Ke = De(m), Ga = Ke == g || Ke == h;
        if (yu(m))
          return Kc(m, M);
        if (Ke == v || Ke == a || Ga && !At) {
          if (vt(m))
            return At ? m : {};
          if (Tt = uu(Ga ? {} : m), !M)
            return ou(m, Vc(Tt, m));
        } else {
          if (!G[Ke])
            return At ? m : {};
          Tt = lu(m, Ke, ai, M);
        }
      }
      Bt || (Bt = new Qe());
      var Ya = Bt.get(m);
      if (Ya)
        return Ya;
      if (Bt.set(m, Tt), !Va)
        var Xa = I ? su(m) : ci(m);
      return st(Xa || m, function(ui, Wn) {
        Xa && (Wn = ui, ui = m[Wn]), za(Tt, Wn, ai(ui, M, I, q, Wn, m, Bt));
      }), Tt;
    }
    function Gc(m) {
      return jn(m) ? A(m) : {};
    }
    function Yc(m, M, I) {
      var q = M(m);
      return si(m) ? q : ht(q, I(m));
    }
    function Xc(m) {
      return Jt.call(m);
    }
    function Qc(m) {
      if (!jn(m) || du(m))
        return !1;
      var M = Ua(m) || vt(m) ? Ne : X;
      return M.test(Fe(m));
    }
    function Jc(m) {
      if (!Wa(m))
        return yt(m);
      var M = [];
      for (var I in Object(m))
        Ot.call(m, I) && I != "constructor" && M.push(I);
      return M;
    }
    function Kc(m, M) {
      if (M)
        return m.slice();
      var I = new m.constructor(m.length);
      return m.copy(I), I;
    }
    function oi(m) {
      var M = new m.constructor(m.byteLength);
      return new ue(M).set(new ue(m)), M;
    }
    function Zc(m, M) {
      var I = M ? oi(m.buffer) : m.buffer;
      return new m.constructor(I, m.byteOffset, m.byteLength);
    }
    function tu(m, M, I) {
      var q = M ? I(Ct(m), !0) : Ct(m);
      return mt(q, Y, new m.constructor());
    }
    function eu(m) {
      var M = new m.constructor(m.source, H.exec(m));
      return M.lastIndex = m.lastIndex, M;
    }
    function nu(m, M, I) {
      var q = M ? I(Et(m), !0) : Et(m);
      return mt(q, ot, new m.constructor());
    }
    function ru(m) {
      return ke ? Object(ke.call(m)) : {};
    }
    function iu(m, M) {
      var I = M ? oi(m.buffer) : m.buffer;
      return new m.constructor(I, m.byteOffset, m.length);
    }
    function au(m, M) {
      var I = -1, q = m.length;
      for (M || (M = Array(q)); ++I < q; )
        M[I] = m[I];
      return M;
    }
    function Ba(m, M, I, q) {
      I || (I = {});
      for (var dt = -1, At = M.length; ++dt < At; ) {
        var Bt = M[dt], Tt = q ? q(I[Bt], m[Bt], Bt, I, m) : void 0;
        za(I, Bt, Tt === void 0 ? m[Bt] : Tt);
      }
      return I;
    }
    function ou(m, M) {
      return Ba(m, ja(m), M);
    }
    function su(m) {
      return Yc(m, ci, ja);
    }
    function Bn(m, M) {
      var I = m.__data__;
      return hu(M) ? I[typeof M == "string" ? "string" : "hash"] : I.map;
    }
    function Je(m, M) {
      var I = Xt(m, M);
      return Qc(I) ? I : void 0;
    }
    var ja = Z ? Ft(Z, Object) : bu, De = Xc;
    (O && De(new O(new ArrayBuffer(1))) != L || R && De(new R()) != p || W && De(W.resolve()) != _ || et && De(new et()) != f || x && De(new x()) != $) && (De = function(m) {
      var M = Jt.call(m), I = M == v ? m.constructor : void 0, q = I ? Fe(I) : void 0;
      if (q)
        switch (q) {
          case U:
            return L;
          case ut:
            return p;
          case Lt:
            return _;
          case Zt:
            return f;
          case Ye:
            return $;
        }
      return M;
    });
    function cu(m) {
      var M = m.length, I = m.constructor(M);
      return M && typeof m[0] == "string" && Ot.call(m, "index") && (I.index = m.index, I.input = m.input), I;
    }
    function uu(m) {
      return typeof m.constructor == "function" && !Wa(m) ? Gc(ve(m)) : {};
    }
    function lu(m, M, I, q) {
      var dt = m.constructor;
      switch (M) {
        case T:
          return oi(m);
        case s:
        case c:
          return new dt(+m);
        case L:
          return Zc(m, q);
        case j:
        case z:
        case N:
        case D:
        case w:
        case S:
        case C:
        case P:
        case F:
          return iu(m, q);
        case p:
          return tu(m, q, I);
        case l:
        case d:
          return new dt(m);
        case y:
          return eu(m);
        case f:
          return nu(m, q, I);
        case b:
          return ru(m);
      }
    }
    function fu(m, M) {
      return M = M == null ? i : M, !!M && (typeof m == "number" || J.test(m)) && m > -1 && m % 1 == 0 && m < M;
    }
    function hu(m) {
      var M = typeof m;
      return M == "string" || M == "number" || M == "symbol" || M == "boolean" ? m !== "__proto__" : m === null;
    }
    function du(m) {
      return !!Qt && Qt in m;
    }
    function Wa(m) {
      var M = m && m.constructor, I = typeof M == "function" && M.prototype || Nt;
      return m === I;
    }
    function Fe(m) {
      if (m != null) {
        try {
          return qt.call(m);
        } catch {
        }
        try {
          return m + "";
        } catch {
        }
      }
      return "";
    }
    function pu(m) {
      return ai(m, !0, !0);
    }
    function qa(m, M) {
      return m === M || m !== m && M !== M;
    }
    function gu(m) {
      return mu(m) && Ot.call(m, "callee") && (!k.call(m, "callee") || Jt.call(m) == a);
    }
    var si = Array.isArray;
    function Ha(m) {
      return m != null && vu(m.length) && !Ua(m);
    }
    function mu(m) {
      return _u(m) && Ha(m);
    }
    var yu = Mt || xu;
    function Ua(m) {
      var M = jn(m) ? Jt.call(m) : "";
      return M == g || M == h;
    }
    function vu(m) {
      return typeof m == "number" && m > -1 && m % 1 == 0 && m <= i;
    }
    function jn(m) {
      var M = typeof m;
      return !!m && (M == "object" || M == "function");
    }
    function _u(m) {
      return !!m && typeof m == "object";
    }
    function ci(m) {
      return Ha(m) ? Uc(m) : Jc(m);
    }
    function bu() {
      return [];
    }
    function xu() {
      return !1;
    }
    e.exports = pu;
  }(qn, qn.exports)), qn.exports;
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var xi, lo;
function Jf() {
  return lo || (lo = 1, xi = function(t) {
    return t != null && t.constructor != null && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
  }), xi;
}
var wi, fo;
function Kf() {
  if (fo)
    return wi;
  fo = 1;
  var e = Jf();
  wi = t, t.flatten = t, t.unflatten = n;
  function t(r, i) {
    i = i || {};
    var a = i.delimiter || ".", o = i.maxDepth, s = {};
    function c(u, g, h) {
      h = h || 1, Object.keys(u).forEach(function(p) {
        var l = u[p], v = i.safe && Array.isArray(l), _ = Object.prototype.toString.call(l), y = e(l), f = _ === "[object Object]" || _ === "[object Array]", d = g ? g + a + p : p;
        if (!v && !y && f && Object.keys(l).length && (!i.maxDepth || h < o))
          return c(l, d, h + 1);
        s[d] = l;
      });
    }
    return c(r), s;
  }
  function n(r, i) {
    i = i || {};
    var a = i.delimiter || ".", o = i.overwrite || !1, s = {}, c = e(r);
    if (c || Object.prototype.toString.call(r) !== "[object Object]")
      return r;
    function u(h) {
      var p = Number(h);
      return isNaN(p) || h.indexOf(".") !== -1 || i.object ? h : p;
    }
    var g = Object.keys(r).sort(function(h, p) {
      return h.length - p.length;
    });
    return g.forEach(function(h) {
      for (var p = h.split(a), l = u(p.shift()), v = u(p[0]), _ = s; v !== void 0; ) {
        if (l === "__proto__")
          return;
        var y = Object.prototype.toString.call(_[l]), f = y === "[object Object]" || y === "[object Array]";
        if (!o && !f && typeof _[l] < "u")
          return;
        (o && !f || !o && _[l] == null) && (_[l] = typeof v == "number" && !i.object ? [] : {}), _ = _[l], p.length > 0 && (l = u(p.shift()), v = u(p[0]));
      }
      _[l] = n(r[h], i);
    }), s;
  }
  return wi;
}
var Si, ho;
function Zf() {
  if (ho)
    return Si;
  ho = 1;
  var e = xs, t = Vf(), n = Gf(), r = Yf(), i = Xf(), a = Qf(), o = Kf();
  Si = function(l, v) {
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
    var y = c(l), f = g(l, y);
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
  function g(l, v) {
    return h(l.data, l.unwindPath).forEach(function(_) {
      if (_ && (Object.getOwnPropertyNames(_).length > 0 || l.includeEmptyRows)) {
        var y = "", f = l.newLine || e.EOL || `
`;
        l.fields.forEach(function(d) {
          var b, $ = l.defaultValue, T = !0;
          if (typeof d == "object" && "default" in d && ($ = d.default), d && (typeof d == "string" || typeof d.value == "string")) {
            var L = typeof d == "string" ? d : d.value;
            b = t(_, L, $);
          } else if (d && typeof d.value == "function") {
            var j = {
              label: d.label,
              default: d.default
            };
            b = d.value(_, j, l.data), d.stringify !== void 0 && (T = d.stringify);
          }
          if (b == null && (b = $), b !== void 0) {
            l.preserveNewLinesInValues && typeof b == "string" && (b = b.replace(/\n/g, "\u2028").replace(/\r/g, "\u2029"));
            var z = b;
            T && (z = JSON.stringify(b)), l.preserveNewLinesInValues && typeof b == "string" && (z = z.replace(/\u2028/g, `
`).replace(/\u2029/g, "\r")), typeof b == "object" && (z = u(z, ""), z = JSON.stringify(z)), l.quotes !== '"' && (z = u(z, l.quotes)), z = z.replace(/\\\\/g, "\\"), l.excelStrings && typeof b == "string" && (z = '"="' + z + '""'), z = z.replace(/(\\")(?=.)/g, l.doubleQuotes), y += z;
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
        f = p(f, d);
      }), Array.prototype.push.apply(_, f);
    }) : _ = l, _;
  }
  function p(l, v) {
    var _ = [];
    return l.forEach(function(y) {
      var f = t(y, v), d = Array.isArray(f);
      if (d && f.length)
        f.forEach(function($) {
          var T = a(y);
          i(T, v, $), _.push(T);
        });
      else if (d && !f.length) {
        var b = a(y);
        i(b, v, void 0), _.push(b);
      } else
        _.push(y);
    }), _;
  }
  return Si;
}
(function(e) {
  (function(t, n) {
    for (var r in n)
      t[r] = n[r];
  })(e, function(t) {
    var n = {};
    function r(i) {
      if (n[i])
        return n[i].exports;
      var a = n[i] = {
        i,
        l: !1,
        exports: {}
      };
      return t[i].call(a.exports, a, a.exports, r), a.l = !0, a.exports;
    }
    return r.m = t, r.c = n, r.i = function(i) {
      return i;
    }, r.d = function(i, a, o) {
      Object.defineProperty(i, a, {
        configurable: !1,
        enumerable: !0,
        get: o
      });
    }, r.n = function(i) {
      var a = i && i.__esModule ? function() {
        return i.default;
      } : function() {
        return i;
      };
      return r.d(a, "a", a), a;
    }, r.o = function(i, a) {
      return Object.prototype.hasOwnProperty.call(i, a);
    }, r.p = "", r(r.s = 4);
  }([
    function(t, n, r) {
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
    function(t, n) {
      t.exports = function(i, a, o, s) {
        var c, u = i = i || {}, g = typeof i.default;
        (g === "object" || g === "function") && (c = i, u = i.default);
        var h = typeof u == "function" ? u.options : u;
        if (a && (h.render = a.render, h.staticRenderFns = a.staticRenderFns), o && (h._scopeId = o), s) {
          var p = h.computed || (h.computed = {});
          Object.keys(s).forEach(function(l) {
            var v = s[l];
            p[l] = function() {
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
    function(t, n, r) {
      t.exports = { render: function() {
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
      }, staticRenderFns: [] }, t.exports.render._withStripped = !0;
    },
    function(t, n) {
      t.exports = Zf();
    },
    function(t, n, r) {
      var i = r(1)(
        r(0),
        r(2),
        null,
        null
      );
      i.options.__file = "/home/dkuck/work/vue-csv-downloader/src/CsvDownload.vue", i.esModule && Object.keys(i.esModule).some(function(a) {
        return a !== "default" && a !== "__esModule";
      }) && console.error("named exports are not supported in *.vue files."), i.options.functional && console.error("[vue-loader] CsvDownload.vue: functional components are not supported with templates, they should use render functions."), t.exports = i.exports;
    }
  ]));
})(bs);
const th = /* @__PURE__ */ $f(bs);
const eh = {
  name: "TipiCsvDownload",
  components: {
    VueCsvDownloader: th
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
    loadCSVItems: function(e) {
      this.$emit("loadCSVItems", e);
    },
    getNameFromCSV: function() {
      return "export-" + new Date().toISOString() + ".csv";
    }
  }
};
var nh = function() {
  var t = this, n = t._self._c;
  return n("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: t.initiatives.length,
      expression: "initiatives.length"
    }]
  }, [t.csvItems.length ? n("vue-csv-downloader", {
    staticClass: "c-button c-button--icon-right",
    class: t.buttonClass,
    attrs: {
      data: t.csvItems,
      fields: t.csvFields,
      downloadName: t.getNameFromCSV(),
      id: "downloadCSV"
    }
  }, [t._v(" " + t._s(t.label) + " "), n("span", {
    staticClass: "c-icon c-icon--type-download"
  }, [n("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "16",
      fill: "none",
      viewBox: "0 0 12 16"
    }
  }, [n("path", {
    attrs: {
      fill: "#2D4252",
      d: "M12 5.647H8.571V0H3.43v5.647H0l6 6.588 6-6.588zm-12 8.47V16h12v-1.882H0z"
    }
  })])])]) : n("a", {
    staticClass: "c-button c-button--compact c-button--secondary c-button--icon-right",
    class: {
      disabled: !t.canDownloadCSV
    },
    attrs: {
      title: t.canDownloadCSV ? "Descarga CSV con todos los resultados" : "Demasiados resultados para poder descargar. Afina la b\xFAsqueda",
      href: "#"
    },
    on: {
      click: function(r) {
        return r.preventDefault(), t.loadCSVItems.apply(null, arguments);
      }
    }
  }, [t._v(" " + t._s(t.label) + " "), n("span", {
    staticClass: "c-icon c-icon--type-download"
  }, [n("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "16",
      fill: "none",
      viewBox: "0 0 12 16"
    }
  }, [n("path", {
    attrs: {
      fill: "#2D4252",
      d: "M12 5.647H8.571V0H3.43v5.647H0l6 6.588 6-6.588zm-12 8.47V16h12v-1.882H0z"
    }
  })])])])], 1);
}, rh = [], ih = /* @__PURE__ */ ct(eh, nh, rh, !1, null, "d7465e98", null, null);
const ah = ih.exports, oh = {
  name: "CongressLink",
  components: {
    TipiIcon: Te
  },
  props: {
    url: String
  }
};
var sh = function() {
  var t = this, n = t._self._c;
  return n("a", {
    staticClass: "c-congress-link u-color-primary",
    attrs: {
      href: t.url,
      target: "_blank",
      title: "Ver en el Congreso.es"
    }
  }, [n("tipi-icon", {
    staticClass: "u-filling-primary",
    attrs: {
      icon: "open-blank"
    }
  }), t._v("Ver en el Congreso.es")], 1);
}, ch = [], uh = /* @__PURE__ */ ct(oh, sh, ch, !1, null, null, null, null);
const lh = uh.exports, fh = {
  name: "TipiHeader",
  props: ["title", "subtitle"]
};
var hh = function() {
  var t = this, n = t._self._c;
  return n("header", {
    staticClass: "c-page-header",
    class: {
      "c-page-header--nosub": !t.subtitle
    }
  }, [n("h1", {
    staticClass: "c-page-header__title"
  }, [t._v(" " + t._s(t.title) + " ")]), t.subtitle ? n("p", {
    staticClass: "c-page-header__subtitle"
  }, [t._v(t._s(t.subtitle))]) : t._e()]);
}, dh = [], ph = /* @__PURE__ */ ct(fh, hh, dh, !1, null, null, null, null);
const gh = ph.exports, mh = {
  name: "TipiNavbar",
  components: {
    Icon: Te
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
};
var yh = function() {
  var t = this, n = t._self._c;
  return n("header", {
    staticClass: "c-navbar"
  }, [!t.closedDisclaimer && t.disclaimerLink.hasOwnProperty("name") ? n("div", {
    staticClass: "c-disclaimer"
  }, [t.disclaimerLink.external ? n("a", {
    attrs: {
      href: t.disclaimerLink.route,
      target: "_blank"
    },
    domProps: {
      innerHTML: t._s(t.disclaimerLink.name)
    }
  }) : n("router-link", {
    attrs: {
      to: {
        name: t.disclaimerLink.route
      }
    },
    domProps: {
      innerHTML: t._s(t.disclaimerLink.name)
    }
  }), n("a", {
    staticClass: "c-disclaimer__close",
    attrs: {
      href: "#"
    },
    on: {
      click: t.closeDisclaimer
    }
  }, [n("icon", {
    attrs: {
      icon: "close",
      color: "#fff"
    }
  })], 1)], 1) : t._e(), t.preImage ? n("div", {
    staticClass: "c-decorator",
    style: `background-image: url(${t.preImage})`
  }) : t._e(), n("div", {
    staticClass: "c-navbar__wrapper o-container"
  }, [n("div", {
    staticClass: "c-navbar__brand"
  }, [n("a", {
    staticClass: "c-navbar__brand-link",
    attrs: {
      href: "/"
    }
  }, [n("img", {
    staticClass: "c-navbar__brand-logo",
    attrs: {
      src: t.logo
    }
  })])]), n("button", {
    staticClass: "c-navbar__menu-toggle",
    class: {
      "is-active": t.menuVisible
    },
    attrs: {
      type: "button"
    },
    on: {
      click: t.toggleMenu
    }
  }, [n("span", {
    staticClass: "bar"
  }), n("span", {
    staticClass: "bar"
  }), n("span", {
    staticClass: "bar"
  }), n("span", {
    staticClass: "u-hide"
  }, [t._v("Men\xFA")])]), n("nav", {
    staticClass: "c-navbar__menu",
    class: {
      "is-active": t.menuVisible
    }
  }, [n("ul", {
    staticClass: "c-menu"
  }, t._l(t.links, function(r) {
    return n("li", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: r.condition,
        expression: "link.condition"
      }],
      key: r.route,
      staticClass: "c-menu__item",
      class: {
        "has-submenu": r.children
      },
      on: {
        click: t.closeMenuMobile
      }
    }, [r.external ? n("a", {
      staticClass: "c-menu__link",
      attrs: {
        href: r.route,
        target: "_blank"
      }
    }, [t._v(t._s(r.name)), r.icon ? n("icon", {
      staticClass: "c-menu__icon",
      attrs: {
        icon: r.icon
      }
    }) : t._e()], 1) : n("router-link", {
      staticClass: "c-menu__link",
      attrs: {
        to: {
          name: r.route
        }
      }
    }, [t._v(t._s(r.name)), r.icon ? n("icon", {
      staticClass: "c-menu__icon",
      attrs: {
        icon: r.icon
      }
    }) : t._e()], 1), r.children ? n("ul", {
      staticClass: "c-menu__submenu"
    }, t._l(r.children, function(i) {
      return n("li", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: i.condition,
          expression: "child.condition"
        }],
        key: i.route,
        staticClass: "c-menu__item",
        on: {
          click: t.closeMenuMobile
        }
      }, [i.external ? n("a", {
        staticClass: "c-menu__link",
        attrs: {
          href: i.route,
          target: "_blank"
        }
      }, [t._v(t._s(i.name)), i.icon ? n("icon", {
        staticClass: "c-menu__icon",
        attrs: {
          icon: i.icon
        }
      }) : t._e()], 1) : n("router-link", {
        staticClass: "c-menu__link",
        attrs: {
          to: {
            name: i.route
          }
        }
      }, [t._v(t._s(i.name)), i.icon ? n("icon", {
        staticClass: "c-menu__icon",
        attrs: {
          icon: i.icon
        }
      }) : t._e()], 1)], 1);
    }), 0) : t._e()], 1);
  }), 0)])])]);
}, vh = [], _h = /* @__PURE__ */ ct(mh, yh, vh, !1, null, null, null, null);
const bh = _h.exports;
const xh = {
  name: "PartyLogo",
  data: function() {
    return {
      logos: {
        Vox: "vox.png",
        "\xA1Teruel Existe!": "teruelexiste.svg",
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
        "M\xC9S COMPROM\xCDS": "compromis.jpg",
        "M\xC1S PA\xCDS-EQUO": "mas-pais.jpg",
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
};
var wh = function() {
  var t = this, n = t._self._c;
  return n("div", {
    staticClass: "c-party_logo__container"
  }, [n("img", {
    staticClass: "c-party_logo__image",
    attrs: {
      src: t.getLogoSrc(),
      alt: "Logo de " + t.party
    }
  })]);
}, Sh = [], Ch = /* @__PURE__ */ ct(xh, wh, Sh, !1, null, "ad79c433", null, null);
const Oh = Ch.exports;
const Mh = {
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
        "M\xC9S COMPROM\xCDS": {
          name: "Comprom\xEDs",
          logo: "compromis",
          color: "linear-gradient(204deg, #f29127 100%, #ec8427 80%, #de6527 42%, #d13b27 3%)"
        },
        "M\xC1S PA\xCDS-EQUO": {
          name: "M\xE1s Pa\xEDs",
          logo: "maspais",
          color: "#0a7565"
        },
        PDeCAT: {
          name: "Partit Dem\xF2crata",
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
          name: "En Com\xFA Podem",
          logo: "encomu",
          color: "linear-gradient(135deg, #dc2a15 15%, #6d2d5c 85%)"
        },
        CCa: {
          name: "Coalici\xF3n Canaria",
          logo: "coalicioncanaria",
          color: "#02abd6"
        },
        "CCa-NC": {
          name: "Coalici\xF3n Canaria",
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
          name: "Uni\xF3n del Pueblo Navarro",
          logo: "upn",
          color: "#0856b3"
        },
        "\xA1Teruel Existe!": {
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
          name: "Partido Socialista Obrero Espa\xF1ol",
          logo: "psoe",
          color: "#e30613"
        },
        "PSC-PSOE": {
          name: "Partido Socialista Obrero Espa\xF1ol",
          logo: "psoe",
          color: "#e30613"
        },
        "PSE-EE-PSOE": {
          name: "Partido Socialista Obrero Espa\xF1ol",
          logo: "psoe",
          color: "#e30613"
        },
        "PsdeG-PSOE": {
          name: "Partido Socialista Obrero Espa\xF1ol",
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
        e = us(() => ls(/* @__PURE__ */ Object.assign({ "../../assets/party_logos/icon/bng.svg": () => import("./bng.b41f34dd.mjs"), "../../assets/party_logos/icon/coalicioncanaria.svg": () => import("./coalicioncanaria.f8b6f881.mjs"), "../../assets/party_logos/icon/compromis.svg": () => import("./compromis.52799627.mjs"), "../../assets/party_logos/icon/cs.svg": () => import("./cs.de16320f.mjs"), "../../assets/party_logos/icon/cup.svg": () => import("./cup.10a55070.mjs"), "../../assets/party_logos/icon/ehbildu.svg": () => import("./ehbildu.7fbde449.mjs"), "../../assets/party_logos/icon/encomu.svg": () => import("./encomu.709e361b.mjs"), "../../assets/party_logos/icon/erc.svg": () => import("./erc.6e1e2f0e.mjs"), "../../assets/party_logos/icon/foroasturias.svg": () => import("./foroasturias.47d224ae.mjs"), "../../assets/party_logos/icon/iu.svg": () => import("./iu.f30c05a2.mjs"), "../../assets/party_logos/icon/jxcat.svg": () => import("./jxcat.51c80bbe.mjs"), "../../assets/party_logos/icon/maspais.svg": () => import("./maspais.69677122.mjs"), "../../assets/party_logos/icon/nuevacanaria.svg": () => import("./nuevacanaria.6c1f8223.mjs"), "../../assets/party_logos/icon/pdecat.svg": () => import("./pdecat.39dc8628.mjs"), "../../assets/party_logos/icon/pnv.svg": () => import("./pnv.bf6373e4.mjs"), "../../assets/party_logos/icon/podemos.svg": () => import("./podemos.53847e76.mjs"), "../../assets/party_logos/icon/pp.svg": () => import("./pp.8920316f.mjs"), "../../assets/party_logos/icon/prc.svg": () => import("./prc.594bf43b.mjs"), "../../assets/party_logos/icon/psoe.svg": () => import("./psoe.803c9172.mjs"), "../../assets/party_logos/icon/sumar.svg": () => import("./sumar.533e4d3c.mjs"), "../../assets/party_logos/icon/teruelexiste.svg": () => import("./teruelexiste.4873063c.mjs"), "../../assets/party_logos/icon/unidaspodemos.svg": () => import("./unidaspodemos.1384b09b.mjs"), "../../assets/party_logos/icon/upn.svg": () => import("./upn.4c43c860.mjs"), "../../assets/party_logos/icon/vox.svg": () => import("./vox.4cd1f884.mjs") }), `../../assets/party_logos/icon/${this.parties[this.party].logo}.svg`));
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
};
var Ah = function() {
  var t = this, n = t._self._c;
  return n("div", {
    staticClass: "c-party_logo_icon",
    style: t.getBackground
  }, [n("figure", {
    staticClass: "c-party_logo_icon__image",
    attrs: {
      alt: "Logo de " + t.getName
    }
  }, [n(t.svg, {
    tag: "component"
  })], 1)]);
}, $h = [], Ph = /* @__PURE__ */ ct(Mh, Ah, $h, !1, null, "5e00b143", null, null);
const Eh = Ph.exports;
const Th = {
  name: "TipiDeputy",
  components: {
    TipiIcon: Te,
    PartyLogo: Oh,
    PartyLogoIcon: Eh
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
      return this.isCollapsed ? "Mostrar m\xE1s" : "Mostrar menos";
    },
    collapse: function() {
      this.isCollapsed = !this.isCollapsed;
    },
    addBirthdayClass: function() {
      const e = new Date(this.deputy.birthdate), t = new Date();
      if (e.getDate() == t.getDate() && e.getMonth() == t.getMonth())
        return "c-deputy__birthday";
    },
    getAge: function() {
      const e = new Date(this.deputy.birthdate);
      return new Date().getFullYear() - e.getFullYear();
    },
    getConstituency: function() {
      return this.deputy.constituency;
    }
  }
};
var Ih = function() {
  var t = this, n = t._self._c;
  return t.deputy ? n("div", {
    staticClass: "c-deputy",
    class: t.addBirthdayClass()
  }, [n("div", {
    staticClass: "o-container"
  }, [n("div", {
    staticClass: "o-grid o-grid--reverse"
  }, [n("div", {
    staticClass: "o-grid__col u-4@sm"
  }, [n("div", {
    staticClass: "c-deputy__image_container"
  }, [n("img", {
    staticClass: "c-deputy__image",
    attrs: {
      src: t.deputy.image,
      alt: "Foto de " + t.deputy.name
    }
  }), n("party-logo-icon", {
    attrs: {
      party: t.deputy.party_name
    }
  })], 1)]), n("div", {
    staticClass: "o-grid__col u-12 u-8@sm"
  }, [n("h1", {
    staticClass: "c-deputy__name"
  }, [t._v(t._s(t.deputy.name))]), t.parliamentaryGroup ? n("h3", {
    staticClass: "c-deputy__group"
  }, [n("router-link", {
    attrs: {
      to: {
        name: "parliamentarygroup",
        params: {
          id: t.parliamentaryGroup.id
        }
      }
    }
  }, [t._v(" " + t._s(t.parliamentaryGroup.name) + " ")])], 1) : t._e(), n("div", {
    staticClass: "c-deputy__extra"
  }, [n("span", {
    staticClass: "c-deputy__personal"
  }, [t.addBirthdayClass() ? n("tipi-icon", {
    attrs: {
      icon: "birthday"
    }
  }) : t._e(), t._v(t._s(t.getAge()) + " a\xF1os")], 1), n("span", {
    staticClass: "c-deputy__personal"
  }, [n("tipi-icon", {
    attrs: {
      icon: "location"
    }
  }), t._v(t._s(t.getConstituency()))], 1)]), n("div", {
    staticClass: "c-deputy__links"
  }, [t._t("default")], 2)]), n("div", {
    staticClass: "o-grid__col u-12 u-12@sm c-deputy__more"
  }, [n("a", {
    attrs: {
      href: "#"
    },
    on: {
      click: t.collapse
    }
  }, [t._v(t._s(t.getCollapseMessage())), n("tipi-icon", {
    attrs: {
      icon: t.getCollapseIcon()
    }
  })], 1)]), n("div", {
    staticClass: "o-grid__col u-12 u-4@sm",
    class: t.getCollapsedClass()
  }, [n("h3", [t._v("Declaraciones")]), t._l(t.deputy.extra.declarations, function(r, i) {
    return n("p", {
      key: i
    }, [n("tipi-icon", {
      attrs: {
        icon: "document"
      }
    }), n("a", {
      attrs: {
        href: r
      }
    }, [t._v(t._s(i))])], 1);
  })], 2), n("div", {
    staticClass: "o-grid__col u-12 u-4@sm",
    class: t.getCollapsedClass()
  }, [n("h3", [t._v("Cargos")]), t._l(t.deputy.public_position, function(r) {
    return n("p", {
      key: r
    }, [t._v(t._s(r))]);
  })], 2), n("div", {
    staticClass: "o-grid__col u-12 u-4@sm",
    class: t.getCollapsedClass()
  }, [n("h3", [t._v("Ficha personal")]), t._l(t.deputy.bio, function(r) {
    return n("p", {
      key: r
    }, [t._v(t._s(r))]);
  })], 2)])])]) : t._e();
}, Rh = [], Nh = /* @__PURE__ */ ct(Th, Ih, Rh, !1, null, "caa7ad2c", null, null);
const kh = Nh.exports, Dh = {
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
      let n = /\[.*\]/.exec(e);
      if (!n)
        return this.source.find((i) => i.name == e);
      let r = n[0].replace("[", "").replace("]", "");
      return this.source.find((i) => i.id == r);
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
};
var Fh = function() {
  var t = this, n = t._self._c;
  return t.is(t.value) ? n("div", {
    staticClass: "c-text"
  }, [n("h6", {
    staticClass: "c-text__label"
  }, [t._v(t._s(t.meta))]), t.source ? t._e() : n("p", {
    staticClass: "c-text__value",
    domProps: {
      innerHTML: t._s(t.show(t.value))
    }
  }), t.source ? n("ul", {
    staticClass: "c-text__list"
  }, t._l(t.value, function(r, i) {
    return n("li", {
      key: i,
      staticClass: "c-text__list-item",
      class: {
        "c-text__list-item--image": t.hasImage(r)
      }
    }, [t.hasImage(r) ? n("router-link", {
      attrs: {
        to: {
          name: t.type,
          params: {
            id: t.getPeopleFromName(r).id
          }
        }
      }
    }, [n("img", {
      staticClass: "c-text__image",
      attrs: {
        alt: r,
        src: t.getPeopleFromName(r).image
      }
    })]) : t._e(), t.getPeopleFromName(r) ? n("div", {
      staticClass: "c-text__wrapper"
    }, [n("router-link", {
      attrs: {
        to: {
          name: t.type,
          params: {
            id: t.getPeopleFromName(r).id
          }
        }
      }
    }, [t._v(" " + t._s(t.getPeopleFromName(r).name) + " "), t.hideGroup ? t._e() : n("span", [t._v(t._s(t.getPeopleFromName(r).parliamentarygroup))])])], 1) : n("span", [t._v(t._s(r))])], 1);
  }), 0) : t._e()]) : t._e();
}, Lh = [], zh = /* @__PURE__ */ ct(Dh, Fh, Lh, !1, null, null, null, null);
const Bh = zh.exports;
var jh = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, n = Symbol("test"), r = Object(n);
  if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
    return !1;
  var i = 42;
  t[n] = i;
  for (n in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var a = Object.getOwnPropertySymbols(t);
  if (a.length !== 1 || a[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var o = Object.getOwnPropertyDescriptor(t, n);
    if (o.value !== i || o.enumerable !== !0)
      return !1;
  }
  return !0;
}, po = typeof Symbol < "u" && Symbol, Wh = jh, qh = function() {
  return typeof po != "function" || typeof Symbol != "function" || typeof po("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Wh();
}, go = {
  foo: {}
}, Hh = Object, Uh = function() {
  return { __proto__: go }.foo === go.foo && !({ __proto__: null } instanceof Hh);
}, Vh = "Function.prototype.bind called on incompatible ", Ci = Array.prototype.slice, Gh = Object.prototype.toString, Yh = "[object Function]", Xh = function(t) {
  var n = this;
  if (typeof n != "function" || Gh.call(n) !== Yh)
    throw new TypeError(Vh + n);
  for (var r = Ci.call(arguments, 1), i, a = function() {
    if (this instanceof i) {
      var g = n.apply(
        this,
        r.concat(Ci.call(arguments))
      );
      return Object(g) === g ? g : this;
    } else
      return n.apply(
        t,
        r.concat(Ci.call(arguments))
      );
  }, o = Math.max(0, n.length - r.length), s = [], c = 0; c < o; c++)
    s.push("$" + c);
  if (i = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(a), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, i.prototype = new u(), u.prototype = null;
  }
  return i;
}, Qh = Xh, ga = Function.prototype.bind || Qh, Jh = ga, Kh = Jh.call(Function.call, Object.prototype.hasOwnProperty), tt, cn = SyntaxError, ws = Function, on = TypeError, Oi = function(e) {
  try {
    return ws('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, We = Object.getOwnPropertyDescriptor;
if (We)
  try {
    We({}, "");
  } catch {
    We = null;
  }
var Mi = function() {
  throw new on();
}, Zh = We ? function() {
  try {
    return arguments.callee, Mi;
  } catch {
    try {
      return We(arguments, "callee").get;
    } catch {
      return Mi;
    }
  }
}() : Mi, Ze = qh(), td = Uh(), gt = Object.getPrototypeOf || (td ? function(e) {
  return e.__proto__;
} : null), nn = {}, ed = typeof Uint8Array > "u" || !gt ? tt : gt(Uint8Array), qe = {
  "%AggregateError%": typeof AggregateError > "u" ? tt : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? tt : ArrayBuffer,
  "%ArrayIteratorPrototype%": Ze && gt ? gt([][Symbol.iterator]()) : tt,
  "%AsyncFromSyncIteratorPrototype%": tt,
  "%AsyncFunction%": nn,
  "%AsyncGenerator%": nn,
  "%AsyncGeneratorFunction%": nn,
  "%AsyncIteratorPrototype%": nn,
  "%Atomics%": typeof Atomics > "u" ? tt : Atomics,
  "%BigInt%": typeof BigInt > "u" ? tt : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? tt : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? tt : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? tt : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? tt : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? tt : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? tt : FinalizationRegistry,
  "%Function%": ws,
  "%GeneratorFunction%": nn,
  "%Int8Array%": typeof Int8Array > "u" ? tt : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? tt : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? tt : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Ze && gt ? gt(gt([][Symbol.iterator]())) : tt,
  "%JSON%": typeof JSON == "object" ? JSON : tt,
  "%Map%": typeof Map > "u" ? tt : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Ze || !gt ? tt : gt((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? tt : Promise,
  "%Proxy%": typeof Proxy > "u" ? tt : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? tt : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? tt : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Ze || !gt ? tt : gt((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? tt : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Ze && gt ? gt(""[Symbol.iterator]()) : tt,
  "%Symbol%": Ze ? Symbol : tt,
  "%SyntaxError%": cn,
  "%ThrowTypeError%": Zh,
  "%TypedArray%": ed,
  "%TypeError%": on,
  "%Uint8Array%": typeof Uint8Array > "u" ? tt : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? tt : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? tt : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? tt : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? tt : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? tt : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? tt : WeakSet
};
if (gt)
  try {
    null.error;
  } catch (e) {
    var nd = gt(gt(e));
    qe["%Error.prototype%"] = nd;
  }
var rd = function e(t) {
  var n;
  if (t === "%AsyncFunction%")
    n = Oi("async function () {}");
  else if (t === "%GeneratorFunction%")
    n = Oi("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    n = Oi("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var r = e("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var i = e("%AsyncGenerator%");
    i && gt && (n = gt(i.prototype));
  }
  return qe[t] = n, n;
}, mo = {
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
}, Nn = ga, or = Kh, id = Nn.call(Function.call, Array.prototype.concat), ad = Nn.call(Function.apply, Array.prototype.splice), yo = Nn.call(Function.call, String.prototype.replace), sr = Nn.call(Function.call, String.prototype.slice), od = Nn.call(Function.call, RegExp.prototype.exec), sd = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, cd = /\\(\\)?/g, ud = function(t) {
  var n = sr(t, 0, 1), r = sr(t, -1);
  if (n === "%" && r !== "%")
    throw new cn("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new cn("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return yo(t, sd, function(a, o, s, c) {
    i[i.length] = s ? yo(c, cd, "$1") : o || a;
  }), i;
}, ld = function(t, n) {
  var r = t, i;
  if (or(mo, r) && (i = mo[r], r = "%" + i[0] + "%"), or(qe, r)) {
    var a = qe[r];
    if (a === nn && (a = rd(r)), typeof a > "u" && !n)
      throw new on("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: r,
      value: a
    };
  }
  throw new cn("intrinsic " + t + " does not exist!");
}, ma = function(t, n) {
  if (typeof t != "string" || t.length === 0)
    throw new on("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new on('"allowMissing" argument must be a boolean');
  if (od(/^%?[^%]*%?$/, t) === null)
    throw new cn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = ud(t), i = r.length > 0 ? r[0] : "", a = ld("%" + i + "%", n), o = a.name, s = a.value, c = !1, u = a.alias;
  u && (i = u[0], ad(r, id([0, 1], u)));
  for (var g = 1, h = !0; g < r.length; g += 1) {
    var p = r[g], l = sr(p, 0, 1), v = sr(p, -1);
    if ((l === '"' || l === "'" || l === "`" || v === '"' || v === "'" || v === "`") && l !== v)
      throw new cn("property names with quotes must have matching quotes");
    if ((p === "constructor" || !h) && (c = !0), i += "." + p, o = "%" + i + "%", or(qe, o))
      s = qe[o];
    else if (s != null) {
      if (!(p in s)) {
        if (!n)
          throw new on("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (We && g + 1 >= r.length) {
        var _ = We(s, p);
        h = !!_, h && "get" in _ && !("originalValue" in _.get) ? s = _.get : s = s[p];
      } else
        h = or(s, p), s = s[p];
      h && !c && (qe[o] = s);
    }
  }
  return s;
}, Ss = { exports: {} };
(function(e) {
  var t = ga, n = ma, r = n("%Function.prototype.apply%"), i = n("%Function.prototype.call%"), a = n("%Reflect.apply%", !0) || t.call(i, r), o = n("%Object.getOwnPropertyDescriptor%", !0), s = n("%Object.defineProperty%", !0), c = n("%Math.max%");
  if (s)
    try {
      s({}, "a", { value: 1 });
    } catch {
      s = null;
    }
  e.exports = function(h) {
    var p = a(t, i, arguments);
    if (o && s) {
      var l = o(p, "length");
      l.configurable && s(
        p,
        "length",
        { value: 1 + c(0, h.length - (arguments.length - 1)) }
      );
    }
    return p;
  };
  var u = function() {
    return a(t, r, arguments);
  };
  s ? s(e.exports, "apply", { value: u }) : e.exports.apply = u;
})(Ss);
var Cs = ma, Os = Ss.exports, fd = Os(Cs("String.prototype.indexOf")), hd = function(t, n) {
  var r = Cs(t, !!n);
  return typeof r == "function" && fd(t, ".prototype.") > -1 ? Os(r) : r;
}, ya = typeof Map == "function" && Map.prototype, Ai = Object.getOwnPropertyDescriptor && ya ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, cr = ya && Ai && typeof Ai.get == "function" ? Ai.get : null, vo = ya && Map.prototype.forEach, va = typeof Set == "function" && Set.prototype, $i = Object.getOwnPropertyDescriptor && va ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, ur = va && $i && typeof $i.get == "function" ? $i.get : null, _o = va && Set.prototype.forEach, dd = typeof WeakMap == "function" && WeakMap.prototype, An = dd ? WeakMap.prototype.has : null, pd = typeof WeakSet == "function" && WeakSet.prototype, $n = pd ? WeakSet.prototype.has : null, gd = typeof WeakRef == "function" && WeakRef.prototype, bo = gd ? WeakRef.prototype.deref : null, md = Boolean.prototype.valueOf, yd = Object.prototype.toString, vd = Function.prototype.toString, _d = String.prototype.match, _a = String.prototype.slice, we = String.prototype.replace, bd = String.prototype.toUpperCase, xo = String.prototype.toLowerCase, Ms = RegExp.prototype.test, wo = Array.prototype.concat, ne = Array.prototype.join, xd = Array.prototype.slice, So = Math.floor, Hi = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Pi = Object.getOwnPropertySymbols, Ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, un = typeof Symbol == "function" && typeof Symbol.iterator == "object", St = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === un ? "object" : "symbol") ? Symbol.toStringTag : null, As = Object.prototype.propertyIsEnumerable, Co = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function Oo(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || Ms.call(/e/, t))
    return t;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var r = e < 0 ? -So(-e) : So(e);
    if (r !== e) {
      var i = String(r), a = _a.call(t, i.length + 1);
      return we.call(i, n, "$&_") + "." + we.call(we.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return we.call(t, n, "$&_");
}
var Vi = xs, Mo = Vi.custom, Ao = Ps(Mo) ? Mo : null, wd = function e(t, n, r, i) {
  var a = n || {};
  if (xe(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (xe(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = xe(a, "customInspect") ? a.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (xe(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (xe(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = a.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return Ts(t, a);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var c = String(t);
    return s ? Oo(t, c) : c;
  }
  if (typeof t == "bigint") {
    var u = String(t) + "n";
    return s ? Oo(t, u) : u;
  }
  var g = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof r > "u" && (r = 0), r >= g && g > 0 && typeof t == "object")
    return Gi(t) ? "[Array]" : "[Object]";
  var h = Bd(a, r);
  if (typeof i > "u")
    i = [];
  else if (Es(i, t) >= 0)
    return "[Circular]";
  function p(C, P, F) {
    if (P && (i = xd.call(i), i.push(P)), F) {
      var B = {
        depth: a.depth
      };
      return xe(a, "quoteStyle") && (B.quoteStyle = a.quoteStyle), e(C, B, r + 1, i);
    }
    return e(C, a, r + 1, i);
  }
  if (typeof t == "function" && !$o(t)) {
    var l = Td(t), v = Hn(t, p);
    return "[Function" + (l ? ": " + l : " (anonymous)") + "]" + (v.length > 0 ? " { " + ne.call(v, ", ") + " }" : "");
  }
  if (Ps(t)) {
    var _ = un ? we.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Ui.call(t);
    return typeof t == "object" && !un ? bn(_) : _;
  }
  if (Fd(t)) {
    for (var y = "<" + xo.call(String(t.nodeName)), f = t.attributes || [], d = 0; d < f.length; d++)
      y += " " + f[d].name + "=" + $s(Sd(f[d].value), "double", a);
    return y += ">", t.childNodes && t.childNodes.length && (y += "..."), y += "</" + xo.call(String(t.nodeName)) + ">", y;
  }
  if (Gi(t)) {
    if (t.length === 0)
      return "[]";
    var b = Hn(t, p);
    return h && !zd(b) ? "[" + Yi(b, h) + "]" : "[ " + ne.call(b, ", ") + " ]";
  }
  if (Od(t)) {
    var $ = Hn(t, p);
    return !("cause" in Error.prototype) && "cause" in t && !As.call(t, "cause") ? "{ [" + String(t) + "] " + ne.call(wo.call("[cause]: " + p(t.cause), $), ", ") + " }" : $.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + ne.call($, ", ") + " }";
  }
  if (typeof t == "object" && o) {
    if (Ao && typeof t[Ao] == "function" && Vi)
      return Vi(t, { depth: g - r });
    if (o !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (Id(t)) {
    var T = [];
    return vo && vo.call(t, function(C, P) {
      T.push(p(P, t, !0) + " => " + p(C, t));
    }), Po("Map", cr.call(t), T, h);
  }
  if (kd(t)) {
    var L = [];
    return _o && _o.call(t, function(C) {
      L.push(p(C, t));
    }), Po("Set", ur.call(t), L, h);
  }
  if (Rd(t))
    return Ei("WeakMap");
  if (Dd(t))
    return Ei("WeakSet");
  if (Nd(t))
    return Ei("WeakRef");
  if (Ad(t))
    return bn(p(Number(t)));
  if (Pd(t))
    return bn(p(Hi.call(t)));
  if ($d(t))
    return bn(md.call(t));
  if (Md(t))
    return bn(p(String(t)));
  if (!Cd(t) && !$o(t)) {
    var j = Hn(t, p), z = Co ? Co(t) === Object.prototype : t instanceof Object || t.constructor === Object, N = t instanceof Object ? "" : "null prototype", D = !z && St && Object(t) === t && St in t ? _a.call(Ie(t), 8, -1) : N ? "Object" : "", w = z || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", S = w + (D || N ? "[" + ne.call(wo.call([], D || [], N || []), ": ") + "] " : "");
    return j.length === 0 ? S + "{}" : h ? S + "{" + Yi(j, h) + "}" : S + "{ " + ne.call(j, ", ") + " }";
  }
  return String(t);
};
function $s(e, t, n) {
  var r = (n.quoteStyle || t) === "double" ? '"' : "'";
  return r + e + r;
}
function Sd(e) {
  return we.call(String(e), /"/g, "&quot;");
}
function Gi(e) {
  return Ie(e) === "[object Array]" && (!St || !(typeof e == "object" && St in e));
}
function Cd(e) {
  return Ie(e) === "[object Date]" && (!St || !(typeof e == "object" && St in e));
}
function $o(e) {
  return Ie(e) === "[object RegExp]" && (!St || !(typeof e == "object" && St in e));
}
function Od(e) {
  return Ie(e) === "[object Error]" && (!St || !(typeof e == "object" && St in e));
}
function Md(e) {
  return Ie(e) === "[object String]" && (!St || !(typeof e == "object" && St in e));
}
function Ad(e) {
  return Ie(e) === "[object Number]" && (!St || !(typeof e == "object" && St in e));
}
function $d(e) {
  return Ie(e) === "[object Boolean]" && (!St || !(typeof e == "object" && St in e));
}
function Ps(e) {
  if (un)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !Ui)
    return !1;
  try {
    return Ui.call(e), !0;
  } catch {
  }
  return !1;
}
function Pd(e) {
  if (!e || typeof e != "object" || !Hi)
    return !1;
  try {
    return Hi.call(e), !0;
  } catch {
  }
  return !1;
}
var Ed = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function xe(e, t) {
  return Ed.call(e, t);
}
function Ie(e) {
  return yd.call(e);
}
function Td(e) {
  if (e.name)
    return e.name;
  var t = _d.call(vd.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function Es(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var n = 0, r = e.length; n < r; n++)
    if (e[n] === t)
      return n;
  return -1;
}
function Id(e) {
  if (!cr || !e || typeof e != "object")
    return !1;
  try {
    cr.call(e);
    try {
      ur.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function Rd(e) {
  if (!An || !e || typeof e != "object")
    return !1;
  try {
    An.call(e, An);
    try {
      $n.call(e, $n);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Nd(e) {
  if (!bo || !e || typeof e != "object")
    return !1;
  try {
    return bo.call(e), !0;
  } catch {
  }
  return !1;
}
function kd(e) {
  if (!ur || !e || typeof e != "object")
    return !1;
  try {
    ur.call(e);
    try {
      cr.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function Dd(e) {
  if (!$n || !e || typeof e != "object")
    return !1;
  try {
    $n.call(e, $n);
    try {
      An.call(e, An);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function Fd(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function Ts(e, t) {
  if (e.length > t.maxStringLength) {
    var n = e.length - t.maxStringLength, r = "... " + n + " more character" + (n > 1 ? "s" : "");
    return Ts(_a.call(e, 0, t.maxStringLength), t) + r;
  }
  var i = we.call(we.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Ld);
  return $s(i, "single", t);
}
function Ld(e) {
  var t = e.charCodeAt(0), n = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + bd.call(t.toString(16));
}
function bn(e) {
  return "Object(" + e + ")";
}
function Ei(e) {
  return e + " { ? }";
}
function Po(e, t, n, r) {
  var i = r ? Yi(n, r) : ne.call(n, ", ");
  return e + " (" + t + ") {" + i + "}";
}
function zd(e) {
  for (var t = 0; t < e.length; t++)
    if (Es(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function Bd(e, t) {
  var n;
  if (e.indent === "	")
    n = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    n = ne.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: n,
    prev: ne.call(Array(t + 1), n)
  };
}
function Yi(e, t) {
  if (e.length === 0)
    return "";
  var n = `
` + t.prev + t.base;
  return n + ne.call(e, "," + n) + `
` + t.prev;
}
function Hn(e, t) {
  var n = Gi(e), r = [];
  if (n) {
    r.length = e.length;
    for (var i = 0; i < e.length; i++)
      r[i] = xe(e, i) ? t(e[i], e) : "";
  }
  var a = typeof Pi == "function" ? Pi(e) : [], o;
  if (un) {
    o = {};
    for (var s = 0; s < a.length; s++)
      o["$" + a[s]] = a[s];
  }
  for (var c in e)
    !xe(e, c) || n && String(Number(c)) === c && c < e.length || un && o["$" + c] instanceof Symbol || (Ms.call(/[^\w$]/, c) ? r.push(t(c, e) + ": " + t(e[c], e)) : r.push(c + ": " + t(e[c], e)));
  if (typeof Pi == "function")
    for (var u = 0; u < a.length; u++)
      As.call(e, a[u]) && r.push("[" + t(a[u]) + "]: " + t(e[a[u]], e));
  return r;
}
var ba = ma, mn = hd, jd = wd, Wd = ba("%TypeError%"), Un = ba("%WeakMap%", !0), Vn = ba("%Map%", !0), qd = mn("WeakMap.prototype.get", !0), Hd = mn("WeakMap.prototype.set", !0), Ud = mn("WeakMap.prototype.has", !0), Vd = mn("Map.prototype.get", !0), Gd = mn("Map.prototype.set", !0), Yd = mn("Map.prototype.has", !0), xa = function(e, t) {
  for (var n = e, r; (r = n.next) !== null; n = r)
    if (r.key === t)
      return n.next = r.next, r.next = e.next, e.next = r, r;
}, Xd = function(e, t) {
  var n = xa(e, t);
  return n && n.value;
}, Qd = function(e, t, n) {
  var r = xa(e, t);
  r ? r.value = n : e.next = {
    key: t,
    next: e.next,
    value: n
  };
}, Jd = function(e, t) {
  return !!xa(e, t);
}, Kd = function() {
  var t, n, r, i = {
    assert: function(a) {
      if (!i.has(a))
        throw new Wd("Side channel does not contain " + jd(a));
    },
    get: function(a) {
      if (Un && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return qd(t, a);
      } else if (Vn) {
        if (n)
          return Vd(n, a);
      } else if (r)
        return Xd(r, a);
    },
    has: function(a) {
      if (Un && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return Ud(t, a);
      } else if (Vn) {
        if (n)
          return Yd(n, a);
      } else if (r)
        return Jd(r, a);
      return !1;
    },
    set: function(a, o) {
      Un && a && (typeof a == "object" || typeof a == "function") ? (t || (t = new Un()), Hd(t, a, o)) : Vn ? (n || (n = new Vn()), Gd(n, a, o)) : (r || (r = { key: {}, next: null }), Qd(r, a, o));
    }
  };
  return i;
}, Zd = String.prototype.replace, tp = /%20/g, Ti = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, wa = {
  default: Ti.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return Zd.call(e, tp, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: Ti.RFC1738,
  RFC3986: Ti.RFC3986
}, ep = wa, Ii = Object.prototype.hasOwnProperty, je = Array.isArray, te = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), np = function(t) {
  for (; t.length > 1; ) {
    var n = t.pop(), r = n.obj[n.prop];
    if (je(r)) {
      for (var i = [], a = 0; a < r.length; ++a)
        typeof r[a] < "u" && i.push(r[a]);
      n.obj[n.prop] = i;
    }
  }
}, Is = function(t, n) {
  for (var r = n && n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < t.length; ++i)
    typeof t[i] < "u" && (r[i] = t[i]);
  return r;
}, rp = function e(t, n, r) {
  if (!n)
    return t;
  if (typeof n != "object") {
    if (je(t))
      t.push(n);
    else if (t && typeof t == "object")
      (r && (r.plainObjects || r.allowPrototypes) || !Ii.call(Object.prototype, n)) && (t[n] = !0);
    else
      return [t, n];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(n);
  var i = t;
  return je(t) && !je(n) && (i = Is(t, r)), je(t) && je(n) ? (n.forEach(function(a, o) {
    if (Ii.call(t, o)) {
      var s = t[o];
      s && typeof s == "object" && a && typeof a == "object" ? t[o] = e(s, a, r) : t.push(a);
    } else
      t[o] = a;
  }), t) : Object.keys(n).reduce(function(a, o) {
    var s = n[o];
    return Ii.call(a, o) ? a[o] = e(a[o], s, r) : a[o] = s, a;
  }, i);
}, ip = function(t, n) {
  return Object.keys(n).reduce(function(r, i) {
    return r[i] = n[i], r;
  }, t);
}, ap = function(e, t, n) {
  var r = e.replace(/\+/g, " ");
  if (n === "iso-8859-1")
    return r.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(r);
  } catch {
    return r;
  }
}, op = function(t, n, r, i, a) {
  if (t.length === 0)
    return t;
  var o = t;
  if (typeof t == "symbol" ? o = Symbol.prototype.toString.call(t) : typeof t != "string" && (o = String(t)), r === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(g) {
      return "%26%23" + parseInt(g.slice(2), 16) + "%3B";
    });
  for (var s = "", c = 0; c < o.length; ++c) {
    var u = o.charCodeAt(c);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || a === ep.RFC1738 && (u === 40 || u === 41)) {
      s += o.charAt(c);
      continue;
    }
    if (u < 128) {
      s = s + te[u];
      continue;
    }
    if (u < 2048) {
      s = s + (te[192 | u >> 6] + te[128 | u & 63]);
      continue;
    }
    if (u < 55296 || u >= 57344) {
      s = s + (te[224 | u >> 12] + te[128 | u >> 6 & 63] + te[128 | u & 63]);
      continue;
    }
    c += 1, u = 65536 + ((u & 1023) << 10 | o.charCodeAt(c) & 1023), s += te[240 | u >> 18] + te[128 | u >> 12 & 63] + te[128 | u >> 6 & 63] + te[128 | u & 63];
  }
  return s;
}, sp = function(t) {
  for (var n = [{ obj: { o: t }, prop: "o" }], r = [], i = 0; i < n.length; ++i)
    for (var a = n[i], o = a.obj[a.prop], s = Object.keys(o), c = 0; c < s.length; ++c) {
      var u = s[c], g = o[u];
      typeof g == "object" && g !== null && r.indexOf(g) === -1 && (n.push({ obj: o, prop: u }), r.push(g));
    }
  return np(n), t;
}, cp = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, up = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, lp = function(t, n) {
  return [].concat(t, n);
}, fp = function(t, n) {
  if (je(t)) {
    for (var r = [], i = 0; i < t.length; i += 1)
      r.push(n(t[i]));
    return r;
  }
  return n(t);
}, Rs = {
  arrayToObject: Is,
  assign: ip,
  combine: lp,
  compact: sp,
  decode: ap,
  encode: op,
  isBuffer: up,
  isRegExp: cp,
  maybeMap: fp,
  merge: rp
}, Ns = Kd, Zn = Rs, Pn = wa, hp = Object.prototype.hasOwnProperty, Eo = {
  brackets: function(t) {
    return t + "[]";
  },
  comma: "comma",
  indices: function(t, n) {
    return t + "[" + n + "]";
  },
  repeat: function(t) {
    return t;
  }
}, de = Array.isArray, dp = Array.prototype.push, ks = function(e, t) {
  dp.apply(e, de(t) ? t : [t]);
}, pp = Date.prototype.toISOString, To = Pn.default, xt = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: Zn.encode,
  encodeValuesOnly: !1,
  format: To,
  formatter: Pn.formatters[To],
  indices: !1,
  serializeDate: function(t) {
    return pp.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, gp = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, Ri = {}, mp = function e(t, n, r, i, a, o, s, c, u, g, h, p, l, v, _, y) {
  for (var f = t, d = y, b = 0, $ = !1; (d = d.get(Ri)) !== void 0 && !$; ) {
    var T = d.get(t);
    if (b += 1, typeof T < "u") {
      if (T === b)
        throw new RangeError("Cyclic object value");
      $ = !0;
    }
    typeof d.get(Ri) > "u" && (b = 0);
  }
  if (typeof c == "function" ? f = c(n, f) : f instanceof Date ? f = h(f) : r === "comma" && de(f) && (f = Zn.maybeMap(f, function(B) {
    return B instanceof Date ? h(B) : B;
  })), f === null) {
    if (a)
      return s && !v ? s(n, xt.encoder, _, "key", p) : n;
    f = "";
  }
  if (gp(f) || Zn.isBuffer(f)) {
    if (s) {
      var L = v ? n : s(n, xt.encoder, _, "key", p);
      return [l(L) + "=" + l(s(f, xt.encoder, _, "value", p))];
    }
    return [l(n) + "=" + l(String(f))];
  }
  var j = [];
  if (typeof f > "u")
    return j;
  var z;
  if (r === "comma" && de(f))
    v && s && (f = Zn.maybeMap(f, s)), z = [{ value: f.length > 0 ? f.join(",") || null : void 0 }];
  else if (de(c))
    z = c;
  else {
    var N = Object.keys(f);
    z = u ? N.sort(u) : N;
  }
  for (var D = i && de(f) && f.length === 1 ? n + "[]" : n, w = 0; w < z.length; ++w) {
    var S = z[w], C = typeof S == "object" && typeof S.value < "u" ? S.value : f[S];
    if (!(o && C === null)) {
      var P = de(f) ? typeof r == "function" ? r(D, S) : D : D + (g ? "." + S : "[" + S + "]");
      y.set(t, b);
      var F = Ns();
      F.set(Ri, y), ks(j, e(
        C,
        P,
        r,
        i,
        a,
        o,
        r === "comma" && v && de(f) ? null : s,
        c,
        u,
        g,
        h,
        p,
        l,
        v,
        _,
        F
      ));
    }
  }
  return j;
}, yp = function(t) {
  if (!t)
    return xt;
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var n = t.charset || xt.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = Pn.default;
  if (typeof t.format < "u") {
    if (!hp.call(Pn.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    r = t.format;
  }
  var i = Pn.formatters[r], a = xt.filter;
  return (typeof t.filter == "function" || de(t.filter)) && (a = t.filter), {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : xt.addQueryPrefix,
    allowDots: typeof t.allowDots > "u" ? xt.allowDots : !!t.allowDots,
    charset: n,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : xt.charsetSentinel,
    delimiter: typeof t.delimiter > "u" ? xt.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : xt.encode,
    encoder: typeof t.encoder == "function" ? t.encoder : xt.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : xt.encodeValuesOnly,
    filter: a,
    format: r,
    formatter: i,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : xt.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : xt.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : xt.strictNullHandling
  };
}, vp = function(e, t) {
  var n = e, r = yp(t), i, a;
  typeof r.filter == "function" ? (a = r.filter, n = a("", n)) : de(r.filter) && (a = r.filter, i = a);
  var o = [];
  if (typeof n != "object" || n === null)
    return "";
  var s;
  t && t.arrayFormat in Eo ? s = t.arrayFormat : t && "indices" in t ? s = t.indices ? "indices" : "repeat" : s = "indices";
  var c = Eo[s];
  if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var u = c === "comma" && t && t.commaRoundTrip;
  i || (i = Object.keys(n)), r.sort && i.sort(r.sort);
  for (var g = Ns(), h = 0; h < i.length; ++h) {
    var p = i[h];
    r.skipNulls && n[p] === null || ks(o, mp(
      n[p],
      p,
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
      g
    ));
  }
  var l = o.join(r.delimiter), v = r.addQueryPrefix === !0 ? "?" : "";
  return r.charsetSentinel && (r.charset === "iso-8859-1" ? v += "utf8=%26%2310003%3B&" : v += "utf8=%E2%9C%93&"), l.length > 0 ? v + l : "";
}, ln = Rs, Xi = Object.prototype.hasOwnProperty, _p = Array.isArray, pt = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: ln.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, bp = function(e) {
  return e.replace(/&#(\d+);/g, function(t, n) {
    return String.fromCharCode(parseInt(n, 10));
  });
}, Ds = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, xp = "utf8=%26%2310003%3B", wp = "utf8=%E2%9C%93", Sp = function(t, n) {
  var r = { __proto__: null }, i = n.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, a = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, o = i.split(n.delimiter, a), s = -1, c, u = n.charset;
  if (n.charsetSentinel)
    for (c = 0; c < o.length; ++c)
      o[c].indexOf("utf8=") === 0 && (o[c] === wp ? u = "utf-8" : o[c] === xp && (u = "iso-8859-1"), s = c, c = o.length);
  for (c = 0; c < o.length; ++c)
    if (c !== s) {
      var g = o[c], h = g.indexOf("]="), p = h === -1 ? g.indexOf("=") : h + 1, l, v;
      p === -1 ? (l = n.decoder(g, pt.decoder, u, "key"), v = n.strictNullHandling ? null : "") : (l = n.decoder(g.slice(0, p), pt.decoder, u, "key"), v = ln.maybeMap(
        Ds(g.slice(p + 1), n),
        function(_) {
          return n.decoder(_, pt.decoder, u, "value");
        }
      )), v && n.interpretNumericEntities && u === "iso-8859-1" && (v = bp(v)), g.indexOf("[]=") > -1 && (v = _p(v) ? [v] : v), Xi.call(r, l) ? r[l] = ln.combine(r[l], v) : r[l] = v;
    }
  return r;
}, Cp = function(e, t, n, r) {
  for (var i = r ? t : Ds(t, n), a = e.length - 1; a >= 0; --a) {
    var o, s = e[a];
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
}, Op = function(t, n, r, i) {
  if (!!t) {
    var a = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, o = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, c = r.depth > 0 && o.exec(a), u = c ? a.slice(0, c.index) : a, g = [];
    if (u) {
      if (!r.plainObjects && Xi.call(Object.prototype, u) && !r.allowPrototypes)
        return;
      g.push(u);
    }
    for (var h = 0; r.depth > 0 && (c = s.exec(a)) !== null && h < r.depth; ) {
      if (h += 1, !r.plainObjects && Xi.call(Object.prototype, c[1].slice(1, -1)) && !r.allowPrototypes)
        return;
      g.push(c[1]);
    }
    return c && g.push("[" + a.slice(c.index) + "]"), Cp(g, n, r, i);
  }
}, Mp = function(t) {
  if (!t)
    return pt;
  if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = typeof t.charset > "u" ? pt.charset : t.charset;
  return {
    allowDots: typeof t.allowDots > "u" ? pt.allowDots : !!t.allowDots,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : pt.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : pt.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : pt.arrayLimit,
    charset: n,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : pt.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : pt.comma,
    decoder: typeof t.decoder == "function" ? t.decoder : pt.decoder,
    delimiter: typeof t.delimiter == "string" || ln.isRegExp(t.delimiter) ? t.delimiter : pt.delimiter,
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : pt.depth,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : pt.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : pt.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : pt.plainObjects,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : pt.strictNullHandling
  };
}, Ap = function(e, t) {
  var n = Mp(t);
  if (e === "" || e === null || typeof e > "u")
    return n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var r = typeof e == "string" ? Sp(e, n) : e, i = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(r), o = 0; o < a.length; ++o) {
    var s = a[o], c = Op(s, r[s], n, typeof e == "string");
    i = ln.merge(i, c, n);
  }
  return n.allowSparse === !0 ? i : ln.compact(i);
}, $p = vp, Pp = Ap, Ep = wa, Tp = {
  formats: Ep,
  parse: Pp,
  stringify: $p
};
const Ip = {
  name: "tipi-topics",
  props: {
    meta: String,
    topics: Array,
    tags: Array,
    topicsStyles: Object
  },
  computed: {
    sortedTopics: function() {
      return this.$props.topics.slice().sort(wr);
    }
  },
  methods: {
    getSubtopics(e) {
      return [...new Set(this.$props.tags.filter((t) => t.topic === e).map((t) => t.subtopic))];
    },
    getTags: function(e) {
      return this.$props.tags.filter((t) => t.subtopic === e).map((t) => t.tag);
    },
    paramsData: function(e, t, n) {
      return Tp.stringify({
        topic: e,
        subtopics: t || void 0,
        tags: n || void 0
      });
    }
  }
};
var Rp = function() {
  var t = this, n = t._self._c;
  return t.topics ? n("div", {
    staticClass: "c-topics c-topics--extended"
  }, [n("h6", {
    staticClass: "c-topics__label"
  }, [t._v(t._s(t.meta))]), n("ul", {
    staticClass: "c-topics__list"
  }, t._l(t.sortedTopics, function(r, i) {
    return n("li", {
      key: r,
      staticClass: "c-topics__list-topic"
    }, [n("router-link", {
      staticClass: "c-topics__topic",
      style: `background-color:${t.topicsStyles[r].color}`,
      attrs: {
        id: `topic-${i}`,
        to: {
          name: "results",
          params: {
            data: t.paramsData(r)
          }
        }
      }
    }, [t._v(" " + t._s(r) + " ")]), t.getSubtopics(r) ? n("ul", {
      staticClass: "c-topics__list-subtopic"
    }, t._l(t.getSubtopics(r), function(a) {
      return n("li", {
        key: a + " - " + r,
        staticClass: "c-topics__subtopic"
      }, [n("router-link", {
        staticClass: "c-topics__link",
        attrs: {
          to: {
            name: "results",
            params: {
              data: t.paramsData(r, a)
            }
          }
        }
      }, [t._v(" " + t._s(a) + " ")]), t.getTags(a) ? n("ul", {
        staticClass: "c-topics__list-tags"
      }, t._l(t.getTags(a), function(o) {
        return n("li", {
          key: o + " - " + r,
          staticClass: "c-topics__tag"
        }, [n("router-link", {
          staticClass: "c-topics__link",
          attrs: {
            to: {
              name: "results",
              params: {
                data: t.paramsData(r, a, o)
              }
            }
          }
        }, [t._v(" " + t._s(o) + " ")])], 1);
      }), 0) : t._e()], 1);
    }), 0) : t._e()], 1);
  }), 0)]) : t._e();
}, Np = [], kp = /* @__PURE__ */ ct(Ip, Rp, Np, !1, null, null, null, null);
const Dp = kp.exports;
var Qi = "http://www.w3.org/1999/xhtml";
const Io = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Qi,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Sr(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Io.hasOwnProperty(t) ? { space: Io[t], local: e } : e;
}
function Fp(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Qi && t.documentElement.namespaceURI === Qi ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Lp(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Fs(e) {
  var t = Sr(e);
  return (t.local ? Lp : Fp)(t);
}
function zp() {
}
function Sa(e) {
  return e == null ? zp : function() {
    return this.querySelector(e);
  };
}
function Bp(e) {
  typeof e != "function" && (e = Sa(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = t[i], o = a.length, s = r[i] = new Array(o), c, u, g = 0; g < o; ++g)
      (c = a[g]) && (u = e.call(c, c.__data__, g, a)) && ("__data__" in c && (u.__data__ = c.__data__), s[g] = u);
  return new Pt(r, this._parents);
}
function jp() {
  return [];
}
function Ls(e) {
  return e == null ? jp : function() {
    return this.querySelectorAll(e);
  };
}
function Wp(e) {
  typeof e != "function" && (e = Ls(e));
  for (var t = this._groups, n = t.length, r = [], i = [], a = 0; a < n; ++a)
    for (var o = t[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && (r.push(e.call(c, c.__data__, u, o)), i.push(c));
  return new Pt(r, i);
}
function zs(e) {
  return function() {
    return this.matches(e);
  };
}
function qp(e) {
  typeof e != "function" && (e = zs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = t[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && e.call(c, c.__data__, u, a) && s.push(c);
  return new Pt(r, this._parents);
}
function Bs(e) {
  return new Array(e.length);
}
function Hp() {
  return new Pt(this._enter || this._groups.map(Bs), this._parents);
}
function lr(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
lr.prototype = {
  constructor: lr,
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
function Up(e) {
  return function() {
    return e;
  };
}
var Ro = "$";
function Vp(e, t, n, r, i, a) {
  for (var o = 0, s, c = t.length, u = a.length; o < u; ++o)
    (s = t[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new lr(e, a[o]);
  for (; o < c; ++o)
    (s = t[o]) && (i[o] = s);
}
function Gp(e, t, n, r, i, a, o) {
  var s, c, u = {}, g = t.length, h = a.length, p = new Array(g), l;
  for (s = 0; s < g; ++s)
    (c = t[s]) && (p[s] = l = Ro + o.call(c, c.__data__, s, t), l in u ? i[s] = c : u[l] = c);
  for (s = 0; s < h; ++s)
    l = Ro + o.call(e, a[s], s, a), (c = u[l]) ? (r[s] = c, c.__data__ = a[s], u[l] = null) : n[s] = new lr(e, a[s]);
  for (s = 0; s < g; ++s)
    (c = t[s]) && u[p[s]] === c && (i[s] = c);
}
function Yp(e, t) {
  if (!e)
    return l = new Array(this.size()), u = -1, this.each(function(L) {
      l[++u] = L;
    }), l;
  var n = t ? Gp : Vp, r = this._parents, i = this._groups;
  typeof e != "function" && (e = Up(e));
  for (var a = i.length, o = new Array(a), s = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
    var g = r[u], h = i[u], p = h.length, l = e.call(g, g && g.__data__, u, r), v = l.length, _ = s[u] = new Array(v), y = o[u] = new Array(v), f = c[u] = new Array(p);
    n(g, h, _, y, f, l, t);
    for (var d = 0, b = 0, $, T; d < v; ++d)
      if ($ = _[d]) {
        for (d >= b && (b = d + 1); !(T = y[b]) && ++b < v; )
          ;
        $._next = T || null;
      }
  }
  return o = new Pt(o, r), o._enter = s, o._exit = c, o;
}
function Xp() {
  return new Pt(this._exit || this._groups.map(Bs), this._parents);
}
function Qp(e, t, n) {
  var r = this.enter(), i = this, a = this.exit();
  return r = typeof e == "function" ? e(r) : r.append(e + ""), t != null && (i = t(i)), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function Jp(e) {
  for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var c = t[s], u = n[s], g = c.length, h = o[s] = new Array(g), p, l = 0; l < g; ++l)
      (p = c[l] || u[l]) && (h[l] = p);
  for (; s < r; ++s)
    o[s] = t[s];
  return new Pt(o, this._parents);
}
function Kp() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Zp(e) {
  e || (e = tg);
  function t(h, p) {
    return h && p ? e(h.__data__, p.__data__) : !h - !p;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = n[a], s = o.length, c = i[a] = new Array(s), u, g = 0; g < s; ++g)
      (u = o[g]) && (c[g] = u);
    c.sort(t);
  }
  return new Pt(i, this._parents).order();
}
function tg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function eg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function ng() {
  var e = new Array(this.size()), t = -1;
  return this.each(function() {
    e[++t] = this;
  }), e;
}
function rg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o)
        return o;
    }
  return null;
}
function ig() {
  var e = 0;
  return this.each(function() {
    ++e;
  }), e;
}
function ag() {
  return !this.node();
}
function og(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var i = t[n], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && e.call(s, s.__data__, a, i);
  return this;
}
function sg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function cg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function ug(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function lg(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function fg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function hg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function dg(e, t) {
  var n = Sr(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? cg : sg : typeof t == "function" ? n.local ? hg : fg : n.local ? lg : ug)(n, t));
}
function js(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function pg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function gg(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function mg(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function yg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? pg : typeof t == "function" ? mg : gg)(e, t, n == null ? "" : n)) : fn(this.node(), e);
}
function fn(e, t) {
  return e.style.getPropertyValue(t) || js(e).getComputedStyle(e, null).getPropertyValue(t);
}
function vg(e) {
  return function() {
    delete this[e];
  };
}
function _g(e, t) {
  return function() {
    this[e] = t;
  };
}
function bg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function xg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? vg : typeof t == "function" ? bg : _g)(e, t)) : this.node()[e];
}
function Ws(e) {
  return e.trim().split(/^|\s+/);
}
function Ca(e) {
  return e.classList || new qs(e);
}
function qs(e) {
  this._node = e, this._names = Ws(e.getAttribute("class") || "");
}
qs.prototype = {
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
function Hs(e, t) {
  for (var n = Ca(e), r = -1, i = t.length; ++r < i; )
    n.add(t[r]);
}
function Us(e, t) {
  for (var n = Ca(e), r = -1, i = t.length; ++r < i; )
    n.remove(t[r]);
}
function wg(e) {
  return function() {
    Hs(this, e);
  };
}
function Sg(e) {
  return function() {
    Us(this, e);
  };
}
function Cg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Hs : Us)(this, e);
  };
}
function Og(e, t) {
  var n = Ws(e + "");
  if (arguments.length < 2) {
    for (var r = Ca(this.node()), i = -1, a = n.length; ++i < a; )
      if (!r.contains(n[i]))
        return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Cg : t ? wg : Sg)(n, t));
}
function Mg() {
  this.textContent = "";
}
function Ag(e) {
  return function() {
    this.textContent = e;
  };
}
function $g(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t == null ? "" : t;
  };
}
function Pg(e) {
  return arguments.length ? this.each(e == null ? Mg : (typeof e == "function" ? $g : Ag)(e)) : this.node().textContent;
}
function Eg() {
  this.innerHTML = "";
}
function Tg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Ig(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t == null ? "" : t;
  };
}
function Rg(e) {
  return arguments.length ? this.each(e == null ? Eg : (typeof e == "function" ? Ig : Tg)(e)) : this.node().innerHTML;
}
function Ng() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function kg() {
  return this.each(Ng);
}
function Dg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Fg() {
  return this.each(Dg);
}
function Lg(e) {
  var t = typeof e == "function" ? e : Fs(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function zg() {
  return null;
}
function Bg(e, t) {
  var n = typeof e == "function" ? e : Fs(e), r = t == null ? zg : typeof t == "function" ? t : Sa(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function jg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Wg() {
  return this.each(jg);
}
function qg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Hg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Ug(e) {
  return this.select(e ? Hg : qg);
}
function Vg(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
var Vs = {};
if (typeof document < "u") {
  var Gg = document.documentElement;
  "onmouseenter" in Gg || (Vs = { mouseenter: "mouseover", mouseleave: "mouseout" });
}
function Yg(e, t, n) {
  return e = Gs(e, t, n), function(r) {
    var i = r.relatedTarget;
    (!i || i !== this && !(i.compareDocumentPosition(this) & 8)) && e.call(this, r);
  };
}
function Gs(e, t, n) {
  return function(r) {
    try {
      e.call(this, this.__data__, t, n);
    } finally {
    }
  };
}
function Xg(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Qg(e) {
  return function() {
    var t = this.__on;
    if (!!t) {
      for (var n = 0, r = -1, i = t.length, a; n < i; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.capture) : t[++r] = a;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Jg(e, t, n) {
  var r = Vs.hasOwnProperty(e.type) ? Yg : Gs;
  return function(i, a, o) {
    var s = this.__on, c, u = r(t, a, o);
    if (s) {
      for (var g = 0, h = s.length; g < h; ++g)
        if ((c = s[g]).type === e.type && c.name === e.name) {
          this.removeEventListener(c.type, c.listener, c.capture), this.addEventListener(c.type, c.listener = u, c.capture = n), c.value = t;
          return;
        }
    }
    this.addEventListener(e.type, u, n), c = { type: e.type, name: e.name, value: t, listener: u, capture: n }, s ? s.push(c) : this.__on = [c];
  };
}
function Kg(e, t, n) {
  var r = Xg(e + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var c = 0, u = s.length, g; c < u; ++c)
        for (i = 0, g = s[c]; i < a; ++i)
          if ((o = r[i]).type === g.type && o.name === g.name)
            return g.value;
    }
    return;
  }
  for (s = t ? Jg : Qg, n == null && (n = !1), i = 0; i < a; ++i)
    this.each(s(r[i], t, n));
  return this;
}
function Ys(e, t, n) {
  var r = js(e), i = r.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function Zg(e, t) {
  return function() {
    return Ys(this, e, t);
  };
}
function tm(e, t) {
  return function() {
    return Ys(this, e, t.apply(this, arguments));
  };
}
function em(e, t) {
  return this.each((typeof t == "function" ? tm : Zg)(e, t));
}
var Oa = [null];
function Pt(e, t) {
  this._groups = e, this._parents = t;
}
function yn() {
  return new Pt([[document.documentElement]], Oa);
}
Pt.prototype = yn.prototype = {
  constructor: Pt,
  select: Bp,
  selectAll: Wp,
  filter: qp,
  data: Yp,
  enter: Hp,
  exit: Xp,
  join: Qp,
  merge: Jp,
  order: Kp,
  sort: Zp,
  call: eg,
  nodes: ng,
  node: rg,
  size: ig,
  empty: ag,
  each: og,
  attr: dg,
  style: yg,
  property: xg,
  classed: Og,
  text: Pg,
  html: Rg,
  raise: kg,
  lower: Fg,
  append: Lg,
  insert: Bg,
  remove: Wg,
  clone: Ug,
  datum: Vg,
  on: Kg,
  dispatch: em
};
function Ge(e) {
  return typeof e == "string" ? new Pt([[document.querySelector(e)]], [document.documentElement]) : new Pt([[e]], Oa);
}
function Cr(e) {
  return typeof e == "string" ? new Pt([document.querySelectorAll(e)], [document.documentElement]) : new Pt([e == null ? [] : e], Oa);
}
function Or(e) {
  return +e;
}
function Mr(e) {
  return e * e;
}
function Ar(e) {
  return e * (2 - e);
}
function Se(e) {
  return ((e *= 2) <= 1 ? e * e : --e * (2 - e) + 1) / 2;
}
function $r(e) {
  return e * e * e;
}
function Pr(e) {
  return --e * e * e + 1;
}
function pe(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Ma = 3, Er = function e(t) {
  t = +t;
  function n(r) {
    return Math.pow(r, t);
  }
  return n.exponent = e, n;
}(Ma), Tr = function e(t) {
  t = +t;
  function n(r) {
    return 1 - Math.pow(1 - r, t);
  }
  return n.exponent = e, n;
}(Ma), Ce = function e(t) {
  t = +t;
  function n(r) {
    return ((r *= 2) <= 1 ? Math.pow(r, t) : 2 - Math.pow(2 - r, t)) / 2;
  }
  return n.exponent = e, n;
}(Ma), Xs = Math.PI, Qs = Xs / 2;
function Ir(e) {
  return +e == 1 ? 1 : 1 - Math.cos(e * Qs);
}
function Rr(e) {
  return Math.sin(e * Qs);
}
function Oe(e) {
  return (1 - Math.cos(Xs * e)) / 2;
}
function Me(e) {
  return (Math.pow(2, -10 * e) - 9765625e-10) * 1.0009775171065494;
}
function Nr(e) {
  return Me(1 - +e);
}
function kr(e) {
  return 1 - Me(e);
}
function Ae(e) {
  return ((e *= 2) <= 1 ? Me(1 - e) : 2 - Me(e - 1)) / 2;
}
function Dr(e) {
  return 1 - Math.sqrt(1 - e * e);
}
function Fr(e) {
  return Math.sqrt(1 - --e * e);
}
function $e(e) {
  return ((e *= 2) <= 1 ? 1 - Math.sqrt(1 - e * e) : Math.sqrt(1 - (e -= 2) * e) + 1) / 2;
}
var Ji = 4 / 11, nm = 6 / 11, rm = 8 / 11, im = 3 / 4, am = 9 / 11, om = 10 / 11, sm = 15 / 16, cm = 21 / 22, um = 63 / 64, Gn = 1 / Ji / Ji;
function Lr(e) {
  return 1 - Ut(1 - e);
}
function Ut(e) {
  return (e = +e) < Ji ? Gn * e * e : e < rm ? Gn * (e -= nm) * e + im : e < om ? Gn * (e -= am) * e + sm : Gn * (e -= cm) * e + um;
}
function zr(e) {
  return ((e *= 2) <= 1 ? 1 - Ut(1 - e) : Ut(e - 1) + 1) / 2;
}
var Aa = 1.70158, Br = function e(t) {
  t = +t;
  function n(r) {
    return (r = +r) * r * (t * (r - 1) + r);
  }
  return n.overshoot = e, n;
}(Aa), He = function e(t) {
  t = +t;
  function n(r) {
    return --r * r * ((r + 1) * t + r) + 1;
  }
  return n.overshoot = e, n;
}(Aa), Pe = function e(t) {
  t = +t;
  function n(r) {
    return ((r *= 2) < 1 ? r * r * ((t + 1) * r - t) : (r -= 2) * r * ((t + 1) * r + t) + 2) / 2;
  }
  return n.overshoot = e, n;
}(Aa), hn = 2 * Math.PI, $a = 1, Pa = 0.3, jr = function e(t, n) {
  var r = Math.asin(1 / (t = Math.max(1, t))) * (n /= hn);
  function i(a) {
    return t * Me(- --a) * Math.sin((r - a) / n);
  }
  return i.amplitude = function(a) {
    return e(a, n * hn);
  }, i.period = function(a) {
    return e(t, a);
  }, i;
}($a, Pa), Ee = function e(t, n) {
  var r = Math.asin(1 / (t = Math.max(1, t))) * (n /= hn);
  function i(a) {
    return 1 - t * Me(a = +a) * Math.sin((a + r) / n);
  }
  return i.amplitude = function(a) {
    return e(a, n * hn);
  }, i.period = function(a) {
    return e(t, a);
  }, i;
}($a, Pa), Wr = function e(t, n) {
  var r = Math.asin(1 / (t = Math.max(1, t))) * (n /= hn);
  function i(a) {
    return ((a = a * 2 - 1) < 0 ? t * Me(-a) * Math.sin((r - a) / n) : 2 - t * Me(a) * Math.sin((r + a) / n)) / 2;
  }
  return i.amplitude = function(a) {
    return e(a, n * hn);
  }, i.period = function(a) {
    return e(t, a);
  }, i;
}($a, Pa);
const lm = {
  name: "TipiNeuron",
  props: {
    initiative: Object,
    topics: Array,
    styles: {
      type: Object,
      default: function() {
        return {
          topics: {},
          defaultColor: "#cecece"
        };
      }
    }
  },
  methods: {
    loadVizz: function(e, t, n, r = {
      center: "#222"
    }) {
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
        return [f[0] + g / 2, f[1] + h / 2];
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
      let c = [], u = Ge(this.$el);
      u.selectAll("*").remove();
      let g = +u.node().getBoundingClientRect().width, h = +u.node().getBoundingClientRect().height;
      function p(v, _) {
        for (let y = 0; y < v.length; y++) {
          let f = {
            name: v[y].name,
            related: !1,
            intensity: 0
          };
          for (let d = 0; d < _.topics.length; d++)
            _.topics[d] == f.name && (f.related = !0);
          for (let d = 0; d < _.tags.length; d++)
            _.tags[d].topic == f.name && f.intensity++;
          f.intensity = f.intensity / _.tags.length, c.push(f);
        }
        l();
      }
      function l() {
        u.selectAll(".connection").data(c).enter().append("path").transition().duration(700).delay((y, f) => f * f + 500).ease(He).attr("d", (y, f) => {
          let d = s(y, f);
          return "M " + g / 2 + " " + h / 2 + "L " + d[0] + " " + d[1];
        }).attr("stroke-width", (y) => y.related ? "3px" : "1px").attr("stroke", (y) => y.related && n.topics[y.name] ? n.topics[y.name].color : n.defaultColor);
        let v = u.selectAll(".node").data(c).enter().append("g").attr("class", "node").attr("transform", () => `translate(${g / 2},${h / 2})`);
        v.transition().duration(700).delay((y, f) => f * f).ease(He).attr("transform", o), v.append("circle").attr("class", (y) => y.related ? "related" : "").attr("r", (y) => y.related ? 15 : 10).style("fill", (y) => y.related && n.topics[y.name] ? n.topics[y.name].color : n.defaultColor), v.append("path").attr("d", d3.arc().innerRadius((y) => y.related ? 20 : 15).outerRadius((y) => y.related ? 25 : 20).startAngle(0).endAngle((y) => Math.PI * 2 * y.intensity)).attr("class", (y) => y.related ? "related" : "").style("fill", (y) => y.related && n.topics[y.name] ? n.topics[y.name].color : n.defaultColor), v.append("text").attr("class", "label_name").attr("text-anchor", "middle").attr("alignment-baseline", "central").text((y) => y.related ? y.name.split("-")[0].trim() : ""), u.append("g").attr("class", "center").attr("transform", `translate(${g / 2},${h / 2})`).append("circle").attr("r", 5).attr("fill", r.center).transition().duration(700).ease(He).attr("r", 20);
      }
      p(e, t);
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
};
var fm = function() {
  var t = this, n = t._self._c;
  return t.topics ? n("svg", {
    staticStyle: {
      width: "100%",
      height: "200px"
    }
  }) : t._e();
}, hm = [], dm = /* @__PURE__ */ ct(lm, fm, hm, !1, null, null, null, null);
const pm = dm.exports, gm = {
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
};
var mm = function() {
  var t = this, n = t._self._c;
  return n("div", {
    staticClass: "c-topic-card",
    style: `background-color: ${t.getColor(t.topic)}`
  }, [n("div", {
    staticClass: "o-container"
  }, [n("div", {
    staticClass: "o-grid o-grid--reverse"
  }, [n("div", {
    staticClass: "o-grid__col u-12 u-3@sm u-offset-1@sm"
  }, [n("img", {
    staticClass: "c-topic-card__image",
    attrs: {
      src: `/img/topics/${t.getIcon(t.topic)}`,
      alt: `Imagen de ${t.topic.name}`
    }
  })]), n("div", {
    staticClass: "o-grid__col u-12 u-8@sm"
  }, [n("h1", {
    staticClass: "c-topic-card__title"
  }, [t._v(t._s(t.topic.name))]), n("div", {
    staticClass: "c-topic-card__description"
  }, t._l(t.topic.description, function(r) {
    return n("p", {
      key: r
    }, [t._v(" " + t._s(r) + " ")]);
  }), 0)])])])]);
}, ym = [], vm = /* @__PURE__ */ ct(gm, mm, ym, !1, null, null, null, null);
const _m = vm.exports, bm = {
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
};
var xm = function() {
  var t = this, n = t._self._c;
  return n("div", [n("div", {
    staticClass: "c-topic-link"
  }, [n("router-link", {
    staticClass: "c-topic-link__image-link",
    style: `background-color: ${t.color}`,
    attrs: {
      to: {
        name: "topic",
        params: {
          id: t.topic.id
        }
      }
    }
  }, [n("img", {
    staticClass: "c-topic-link__image",
    attrs: {
      src: t.topicImage,
      alt: `Imagen de ${t.topic.name}`
    }
  })]), n("h4", {
    staticClass: "c-topic-link__name"
  }, [n("router-link", {
    attrs: {
      to: {
        name: "topic",
        params: {
          id: t.topic.id
        }
      }
    }
  }, [t._v(" " + t._s(t.topic.name) + " ")])], 1)], 1)]);
}, wm = [], Sm = /* @__PURE__ */ ct(bm, xm, wm, !1, null, null, null, null);
const Cm = Sm.exports;
const Om = {
  name: "TipiTwoCircles",
  props: {
    selection: Object,
    styles: {
      type: Object,
      default: function() {
        return {
          topics: {},
          defaultColor: "#cecece"
        };
      }
    },
    topic: String
  },
  methods: {
    loadVizz: function() {
      let e = 2e3, t = Ge(this.$el);
      t.selectAll("*").remove();
      let n = +t.node().getBoundingClientRect().width, r = 150, i = 5, a = this.$props.styles, o = this.$props.topic, s = [this.$props.selection.selected], c = this.$props.selection.compareswith._id, u = this.$props.selection.compareswith.initiatives, g = a.topics[o] ? a.topics[o].color : a.defaultColor, h = a.topics[c] ? a.topics[c].color : g, p = t.selectAll(".node").data(s).enter().append("g").attr("class", "node").attr("transform", "translate(" + n / 2 + "," + r + ")");
      p.append("circle").attr("class", "compared").attr("r", r).attr("fill", h), p.append("circle").attr("fill", function(_) {
        return v();
      }).attr("r", 0).transition().duration(e).attr("r", function(_) {
        let y = Math.round(_.initiatives * r / u);
        return _.initiatives === 0 ? 0 : y > i ? y : i;
      });
      let l = t.selectAll(".legend").data(s).enter().append("g").attr("class", "legend");
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
};
var Mm = function() {
  var t = this, n = t._self._c;
  return n("svg", {
    staticStyle: {
      width: "300px",
      height: "500px"
    }
  });
}, Am = [], $m = /* @__PURE__ */ ct(Om, Mm, Am, !1, null, null, null, null);
const Pm = $m.exports, Em = {
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
};
var Tm = function() {
  var t = this, n = t._self._c;
  return t.closedSplash ? t._e() : n("div", {
    staticClass: "c-splash"
  }, [n("div", {
    staticClass: "c-splash__outer"
  }, [n("div", {
    staticClass: "c-splash__inner"
  }, [t._t("default"), n("p", [n("a", {
    staticClass: "c-splash__close",
    class: t.closeClass,
    attrs: {
      href: "#"
    },
    on: {
      click: t.closeSplash
    }
  }, [t._v(t._s(t.closeText))])])], 2)])]);
}, Im = [], Rm = /* @__PURE__ */ ct(Em, Tm, Im, !1, null, null, null, null);
const Nm = Rm.exports;
const km = {
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
      const t = this.getTagged().tags, n = [], r = t.reduce((i, a) => i + a.times, 0);
      t.forEach((i) => {
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
      }), this.rows = this.barOrder === "alphabetically" ? n.sort((i, a) => wr(i.topic, a.topic)) : this.barOrder === "asc" ? n.sort((i, a) => i.times - a.times) : n.sort((i, a) => a.times - i.times);
    },
    getTagged() {
      return this.result.tagged.filter((e) => e.knowledgebase == this.knowledgebase).pop();
    }
  }
};
var Dm = function() {
  var t = this, n = t._self._c;
  return n("transition-group", {
    staticClass: "tipichart",
    attrs: {
      tag: "div",
      name: "barfade"
    }
  }, t._l(t.rows, function(r) {
    return n("div", {
      key: r.topic,
      staticClass: "tipichart__row",
      style: t.rowStyle
    }, [n("div", {
      staticClass: "tipichart__tooltip",
      style: {
        bottom: `${t.barHeight}px`
      }
    }, [n("div", {
      staticClass: "tipichart__tip"
    }, [t._v(t._s(r.topic) + " " + t._s(r.percent) + "%")])]), n("div", {
      staticClass: "tipichart__icon",
      style: r.iconStyle
    }), n("div", {
      staticClass: "tipichart__bar"
    }, [n("div", {
      staticClass: "tipichart__backbar",
      style: r.backbarStyle
    }), n("div", {
      staticClass: "tipichart__overbar",
      style: r.overbarStyle
    })])]);
  }), 0);
}, Fm = [], Lm = /* @__PURE__ */ ct(km, Dm, Fm, !1, null, null, null, null);
const zm = Lm.exports;
var Js = {};
(function(e) {
  (function() {
    var t = e || !1 || this || window;
    t.default = t;
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
    }, g = function(S) {
      return new Promise(function(C, P) {
        c(S) ? C(S) : P(new Error("an HTMLElement or SVGElement is required; got " + S));
      });
    }, h = function(S) {
      return S && S.lastIndexOf("http", 0) === 0 && S.lastIndexOf(window.location.host) === -1;
    }, p = function(S) {
      var C = Object.keys(s).filter(function(P) {
        return S.indexOf("." + P) > 0;
      }).map(function(P) {
        return s[P];
      });
      return C ? C[0] : (console.error("Unknown font format for " + S + ". Fonts may not be working correctly."), "application/octet-stream");
    }, l = function(S) {
      for (var C = "", P = new Uint8Array(S), F = 0; F < P.byteLength; F++)
        C += String.fromCharCode(P[F]);
      return window.btoa(C);
    }, v = function(S, C, P) {
      var F = S.viewBox && S.viewBox.baseVal && S.viewBox.baseVal[P] || C.getAttribute(P) !== null && !C.getAttribute(P).match(/%$/) && parseInt(C.getAttribute(P)) || S.getBoundingClientRect()[P] || parseInt(C.style[P]) || parseInt(window.getComputedStyle(S).getPropertyValue(P));
      return typeof F > "u" || F === null || isNaN(parseFloat(F)) ? 0 : F;
    }, _ = function(S, C, P, F) {
      if (S.tagName === "svg")
        return {
          width: P || v(S, C, "width"),
          height: F || v(S, C, "height")
        };
      if (S.getBBox) {
        var B = S.getBBox(), H = B.x, X = B.y, J = B.width, G = B.height;
        return {
          width: H + J,
          height: X + G
        };
      }
    }, y = function(S) {
      return decodeURIComponent(encodeURIComponent(S).replace(/%([0-9A-F]{2})/g, function(C, P) {
        var F = String.fromCharCode("0x" + P);
        return F === "%" ? "%25" : F;
      }));
    }, f = function(S) {
      for (var C = window.atob(S.split(",")[1]), P = S.split(",")[0].split(":")[1].split(";")[0], F = new ArrayBuffer(C.length), B = new Uint8Array(F), H = 0; H < C.length; H++)
        B[H] = C.charCodeAt(H);
      return new Blob([F], { type: P });
    }, d = function(S, C) {
      if (!!C)
        try {
          return S.querySelector(C) || S.parentNode && S.parentNode.querySelector(C);
        } catch (P) {
          console.warn('Invalid CSS selector "' + C + '"', P);
        }
    }, b = function(S, C) {
      var P = S.cssText.match(o), F = P && P[1] || "";
      if (!(!F || F.match(/^data:/) || F === "about:blank")) {
        var B = F.startsWith("../") ? C + "/../" + F : F.startsWith("./") ? C + "/." + F : F;
        return {
          text: S.cssText,
          format: p(B),
          url: B
        };
      }
    }, $ = function(S) {
      return Promise.all(Array.from(S.querySelectorAll("image")).map(function(C) {
        var P = C.getAttributeNS("http://www.w3.org/1999/xlink", "href") || C.getAttribute("href");
        return P ? (h(P) && (P += (P.indexOf("?") === -1 ? "?" : "&") + "t=" + new Date().valueOf()), new Promise(function(F, B) {
          var H = document.createElement("canvas"), X = new Image();
          X.crossOrigin = "anonymous", X.src = P, X.onerror = function() {
            return B(new Error("Could not load " + P));
          }, X.onload = function() {
            H.width = X.width, H.height = X.height, H.getContext("2d").drawImage(X, 0, 0), C.setAttributeNS("http://www.w3.org/1999/xlink", "href", H.toDataURL("image/png")), F(!0);
          };
        })) : Promise.resolve(null);
      }));
    }, T = {}, L = function(S) {
      return Promise.all(S.map(function(C) {
        return new Promise(function(P, F) {
          if (T[C.url])
            return P(T[C.url]);
          var B = new XMLHttpRequest();
          B.addEventListener("load", function() {
            var H = l(B.response), X = C.text.replace(o, 'url("data:' + C.format + ";base64," + H + '")') + `
`;
            T[C.url] = X, P(X);
          }), B.addEventListener("error", function(H) {
            console.warn("Failed to load font from: " + C.url, H), T[C.url] = null, P(null);
          }), B.addEventListener("abort", function(H) {
            console.warn("Aborted loading font from: " + C.url, H), P(null);
          }), B.open("GET", C.url), B.responseType = "arraybuffer", B.send();
        });
      })).then(function(C) {
        return C.filter(function(P) {
          return P;
        }).join("");
      });
    }, j = null, z = function() {
      return j || (j = Array.from(document.styleSheets).map(function(S) {
        try {
          return { rules: S.cssRules, href: S.href };
        } catch (C) {
          return console.warn("Stylesheet could not be loaded: " + S.href, C), {};
        }
      }));
    }, N = function(S, C) {
      var P = C || {}, F = P.selectorRemap, B = P.modifyStyle, H = P.modifyCss, X = P.fonts, J = P.excludeUnusedCss, G = H || function(Q, it) {
        var rt = F ? F(Q) : Q, Y = B ? B(it) : it;
        return rt + "{" + Y + `}
`;
      }, at = [], nt = typeof X > "u", K = X || [];
      return z().forEach(function(Q) {
        var it = Q.rules, rt = Q.href;
        !it || Array.from(it).forEach(function(Y) {
          if (typeof Y.style < "u")
            if (d(S, Y.selectorText))
              at.push(G(Y.selectorText, Y.style.cssText));
            else if (nt && Y.cssText.match(/^@font-face/)) {
              var ot = b(Y, rt);
              ot && K.push(ot);
            } else
              J || at.push(Y.cssText);
        });
      }), L(K).then(function(Q) {
        return at.join(`
`) + Q;
      });
    }, D = function() {
      if (!navigator.msSaveOrOpenBlob && !("download" in document.createElement("a")))
        return { popup: window.open() };
    };
    t.prepareSvg = function(w, S, C) {
      u(w);
      var P = S || {}, F = P.left, B = F === void 0 ? 0 : F, H = P.top, X = H === void 0 ? 0 : H, J = P.width, G = P.height, at = P.scale, nt = at === void 0 ? 1 : at, K = P.responsive, Q = K === void 0 ? !1 : K, it = P.excludeCss, rt = it === void 0 ? !1 : it;
      return $(w).then(function() {
        var Y = w.cloneNode(!0);
        Y.style.backgroundColor = (S || {}).backgroundColor || w.style.backgroundColor;
        var ot = _(w, Y, J, G), st = ot.width, ht = ot.height;
        if (w.tagName !== "svg")
          if (w.getBBox) {
            Y.getAttribute("transform") != null && Y.setAttribute("transform", Y.getAttribute("transform").replace(/translate\(.*?\)/, ""));
            var mt = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            mt.appendChild(Y), Y = mt;
          } else {
            console.error("Attempted to render non-SVG element", w);
            return;
          }
        if (Y.setAttribute("version", "1.1"), Y.setAttribute("viewBox", [B, X, st, ht].join(" ")), Y.getAttribute("xmlns") || Y.setAttributeNS(n, "xmlns", i), Y.getAttribute("xmlns:xlink") || Y.setAttributeNS(n, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Q ? (Y.removeAttribute("width"), Y.removeAttribute("height"), Y.setAttribute("preserveAspectRatio", "xMinYMin meet")) : (Y.setAttribute("width", st * nt), Y.setAttribute("height", ht * nt)), Array.from(Y.querySelectorAll("foreignObject > *")).forEach(function(vt) {
          vt.setAttributeNS(n, "xmlns", vt.tagName === "svg" ? i : r);
        }), rt) {
          var Yt = document.createElement("div");
          Yt.appendChild(Y);
          var Xt = Yt.innerHTML;
          if (typeof C == "function")
            C(Xt, st, ht);
          else
            return { src: Xt, width: st, height: ht };
        } else
          return N(w, S).then(function(vt) {
            var Ct = document.createElement("style");
            Ct.setAttribute("type", "text/css"), Ct.innerHTML = `<![CDATA[
` + vt + `
]]>`;
            var Ft = document.createElement("defs");
            Ft.appendChild(Ct), Y.insertBefore(Ft, Y.firstChild);
            var Et = document.createElement("div");
            Et.appendChild(Y);
            var Rt = Et.innerHTML.replace(/NS\d+:href/gi, 'xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href');
            if (typeof C == "function")
              C(Rt, st, ht);
            else
              return { src: Rt, width: st, height: ht };
          });
      });
    }, t.svgAsDataUri = function(w, S, C) {
      return u(w), t.prepareSvg(w, S).then(function(P) {
        var F = P.src, B = P.width, H = P.height, X = "data:image/svg+xml;base64," + window.btoa(y(a + F));
        return typeof C == "function" && C(X, B, H), X;
      });
    }, t.svgAsPngUri = function(w, S, C) {
      u(w);
      var P = S || {}, F = P.encoderType, B = F === void 0 ? "image/png" : F, H = P.encoderOptions, X = H === void 0 ? 0.8 : H, J = P.canvg, G = function(nt) {
        var K = nt.src, Q = nt.width, it = nt.height, rt = document.createElement("canvas"), Y = rt.getContext("2d"), ot = window.devicePixelRatio || 1;
        rt.width = Q * ot, rt.height = it * ot, rt.style.width = rt.width + "px", rt.style.height = rt.height + "px", Y.setTransform(ot, 0, 0, ot, 0, 0), J ? J(rt, K) : Y.drawImage(K, 0, 0);
        var st = void 0;
        try {
          st = rt.toDataURL(B, X);
        } catch (ht) {
          if (typeof SecurityError < "u" && ht instanceof SecurityError || ht.name === "SecurityError") {
            console.error("Rendered SVG images cannot be downloaded in this browser.");
            return;
          } else
            throw ht;
        }
        return typeof C == "function" && C(st, rt.width, rt.height), Promise.resolve(st);
      };
      return J ? t.prepareSvg(w, S).then(G) : t.svgAsDataUri(w, S).then(function(at) {
        return new Promise(function(nt, K) {
          var Q = new Image();
          Q.onload = function() {
            return nt(G({
              src: Q,
              width: Q.width,
              height: Q.height
            }));
          }, Q.onerror = function() {
            K(`There was an error loading the data URI as an image on the following SVG
` + window.atob(at.slice(26)) + `Open the following link to see browser's diagnosis
` + at);
          }, Q.src = at;
        });
      });
    }, t.download = function(w, S, C) {
      if (navigator.msSaveOrOpenBlob)
        navigator.msSaveOrOpenBlob(f(S), w);
      else {
        var P = document.createElement("a");
        if ("download" in P) {
          P.download = w, P.style.display = "none", document.body.appendChild(P);
          try {
            var F = f(S), B = URL.createObjectURL(F);
            P.href = B, P.onclick = function() {
              return requestAnimationFrame(function() {
                return URL.revokeObjectURL(B);
              });
            };
          } catch (H) {
            console.error(H), console.warn("Error while getting object URL. Falling back to string URL."), P.href = S;
          }
          P.click(), document.body.removeChild(P);
        } else
          C && C.popup && (C.popup.document.title = w, C.popup.location.replace(S));
      }
    }, t.saveSvg = function(w, S, C) {
      var P = D();
      return g(w).then(function(F) {
        return t.svgAsDataUri(F, C || {});
      }).then(function(F) {
        return t.download(S, F, P);
      });
    }, t.saveSvgAsPng = function(w, S, C) {
      var P = D();
      return g(w).then(function(F) {
        return t.svgAsPngUri(F, C || {});
      }).then(function(F) {
        return t.download(S, F, P);
      });
    };
  })();
})(Js);
const Bm = {
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
      Js.saveSvgAsPng(e, "chart.png", {
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
};
var jm = function() {
  var t = this, n = t._self._c;
  return n("div", {
    staticClass: "chart__wrapper"
  }, [t.title ? n("div", {
    staticClass: "chart__title"
  }, [t._v(t._s(t.title))]) : t._e(), n("div", {
    ref: "chart",
    style: {
      height: `${this.height}px`
    }
  }), t.source ? n("div", {
    staticClass: "chart__source"
  }, [t._v(t._s(t.source))]) : t._e(), t.download ? n("div", {
    staticClass: "chart__source"
  }, [n("span", {
    on: {
      click: t.downloadSVG
    }
  }, [t._v(t._s(t.download))])]) : t._e()]);
}, Wm = [], qm = /* @__PURE__ */ ct(Bm, jm, Wm, !1, null, null, null, null);
const qr = qm.exports, Hm = {
  select: Ge
};
class Hr {
  constructor(t, n, r, i) {
    this.selection = Hm.select(t), this.data = n, this.cfg = i, this._setConfig(r), this.onResize = () => {
      this.resizeChart();
    }, window.addEventListener("resize", this.onResize), this.initChart();
  }
  _setConfig(t) {
    Object.keys(t).forEach((n) => {
      t[n] instanceof Object && !(t[n] instanceof Array) ? Object.keys(t[n]).forEach((r) => {
        this.cfg[n][r] = t[n][r];
      }) : this.cfg[n] = t[n];
    });
  }
  initChart() {
    console.error("d3chart.initChart not implemented");
  }
  setScales() {
    console.error("d3chart.setScales not implemented");
  }
  setChartDimension() {
    console.error("d3chart.setChartDimension not implemented");
  }
  bindData() {
    console.error("d3.chart.bindData not implemented");
  }
  enterElements() {
    console.error("d3.chart.enterElements not implemented");
  }
  updateElements() {
    console.error("d3.chart.updateElements not implemented");
  }
  exitElements() {
    console.error("d3.chart.exitElements not implemented");
  }
  getDimensions() {
    this.cfg.width = parseInt(this.selection.node().offsetWidth) - this.cfg.margin.left - this.cfg.margin.right, this.cfg.height = parseInt(this.selection.node().offsetHeight) - this.cfg.margin.top - this.cfg.margin.bottom;
  }
  getData() {
    return this.data;
  }
  enterData(t) {
    this.data = this.data.concat(t), this.setScales(), this.updateChart();
  }
  updateData(t) {
    this.data = [...t], this.setScales(), this.updateChart();
  }
  computeData() {
  }
  exitData(t) {
    this.data.forEach((n, r) => {
      let i = 0;
      Object.keys(t).forEach((a) => {
        t[a] == n[a] && i++;
      }), i == Object.keys(t).length && this.data.splice(r, 1);
    }), this.setScales(), this.updateChart();
  }
  initChartFrame(t = "undefined") {
    this.wrap = this.selection.append("div").attr("class", "chart__wrap chart__wrap--" + t), this.svg = this.wrap.append("svg").attr("class", "chart chart--" + t), this.g = this.svg.append("g").attr("class", "chart__margin-wrap chart__margin-wrap--" + t).attr("transform", `translate(${this.cfg.margin.left},${this.cfg.margin.top})`), this.selection.selectAll(".chart__tooltip").remove(), this.tooltip = this.wrap.append("div").attr("class", "chart__tooltip chart__tooltip--" + t);
  }
  colorElement(t, n = void 0) {
    if (n = n || this.cfg.key, this.cfg.color.key)
      return t[this.cfg.color.key];
    let r = this.cfg.currentKey ? this.cfg.color.default : this.cfg.color.current;
    return this.cfg.color.scheme && (r = this.colorScale(t[n])), this.cfg.color.keys && this.cfg.color.keys instanceof Object && !(this.cfg.color.keys instanceof Array) && (typeof this.cfg.color.keys[n] == "string" ? r = this.cfg.color.keys[n] : typeof this.cfg.color.keys[t[n]] == "string" && (r = this.cfg.color.keys[t[n]])), this.cfg.currentKey && t[this.cfg.key] === this.cfg.currentKey && (r = this.cfg.color.current), r;
  }
  updateChart() {
    this.computeData(), this.bindData(), this.setScales(), this.enterElements(), this.updateElements(), this.exitElements();
  }
  resizeChart() {
    this.getDimensions(), this.setChartDimension(), this.updateChart();
  }
  updateConfig(t) {
    this._setConfig(t), this.resizeChart();
  }
  destroyChart() {
    window.removeEventListener("resize", this.onResize);
  }
}
function Ks(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Um(e) {
  return e.length === 1 && (e = Vm(e)), {
    left: function(t, n, r, i) {
      for (r == null && (r = 0), i == null && (i = t.length); r < i; ) {
        var a = r + i >>> 1;
        e(t[a], n) < 0 ? r = a + 1 : i = a;
      }
      return r;
    },
    right: function(t, n, r, i) {
      for (r == null && (r = 0), i == null && (i = t.length); r < i; ) {
        var a = r + i >>> 1;
        e(t[a], n) > 0 ? i = a : r = a + 1;
      }
      return r;
    }
  };
}
function Vm(e) {
  return function(t, n) {
    return Ks(e(t), n);
  };
}
var Gm = Um(Ks), Ym = Gm.right;
function Xm(e, t) {
  var n = e.length, r = -1, i, a, o;
  if (t == null) {
    for (; ++r < n; )
      if ((i = e[r]) != null && i >= i)
        for (a = o = i; ++r < n; )
          (i = e[r]) != null && (a > i && (a = i), o < i && (o = i));
  } else
    for (; ++r < n; )
      if ((i = t(e[r], r, e)) != null && i >= i)
        for (a = o = i; ++r < n; )
          (i = t(e[r], r, e)) != null && (a > i && (a = i), o < i && (o = i));
  return [a, o];
}
function Qm(e, t, n) {
  e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, a = new Array(i); ++r < i; )
    a[r] = e + r * n;
  return a;
}
var Ki = Math.sqrt(50), Zi = Math.sqrt(10), ta = Math.sqrt(2);
function Jm(e, t, n) {
  var r, i = -1, a, o, s;
  if (t = +t, e = +e, n = +n, e === t && n > 0)
    return [e];
  if ((r = t < e) && (a = e, e = t, t = a), (s = tr(e, t, n)) === 0 || !isFinite(s))
    return [];
  if (s > 0)
    for (e = Math.ceil(e / s), t = Math.floor(t / s), o = new Array(a = Math.ceil(t - e + 1)); ++i < a; )
      o[i] = (e + i) * s;
  else
    for (e = Math.floor(e * s), t = Math.ceil(t * s), o = new Array(a = Math.ceil(e - t + 1)); ++i < a; )
      o[i] = (e - i) / s;
  return r && o.reverse(), o;
}
function tr(e, t, n) {
  var r = (t - e) / Math.max(0, n), i = Math.floor(Math.log(r) / Math.LN10), a = r / Math.pow(10, i);
  return i >= 0 ? (a >= Ki ? 10 : a >= Zi ? 5 : a >= ta ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (a >= Ki ? 10 : a >= Zi ? 5 : a >= ta ? 2 : 1);
}
function Km(e, t, n) {
  var r = Math.abs(t - e) / Math.max(0, n), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), a = r / i;
  return a >= Ki ? i *= 10 : a >= Zi ? i *= 5 : a >= ta && (i *= 2), t < e ? -i : i;
}
function Ea(e, t) {
  var n = e.length, r = -1, i, a;
  if (t == null) {
    for (; ++r < n; )
      if ((i = e[r]) != null && i >= i)
        for (a = i; ++r < n; )
          (i = e[r]) != null && i > a && (a = i);
  } else
    for (; ++r < n; )
      if ((i = t(e[r], r, e)) != null && i >= i)
        for (a = i; ++r < n; )
          (i = t(e[r], r, e)) != null && i > a && (a = i);
  return a;
}
function Zs(e, t) {
  var n = e.length, r = -1, i, a;
  if (t == null) {
    for (; ++r < n; )
      if ((i = e[r]) != null && i >= i)
        for (a = i; ++r < n; )
          (i = e[r]) != null && a > i && (a = i);
  } else
    for (; ++r < n; )
      if ((i = t(e[r], r, e)) != null && i >= i)
        for (a = i; ++r < n; )
          (i = t(e[r], r, e)) != null && a > i && (a = i);
  return a;
}
function Zm(e, t) {
  var n = e.length, r = -1, i, a = 0;
  if (t == null)
    for (; ++r < n; )
      (i = +e[r]) && (a += i);
  else
    for (; ++r < n; )
      (i = +t(e[r], r, e)) && (a += i);
  return a;
}
function Ur(e, t) {
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
var Wt = "$";
function fr() {
}
fr.prototype = hr.prototype = {
  constructor: fr,
  has: function(e) {
    return Wt + e in this;
  },
  get: function(e) {
    return this[Wt + e];
  },
  set: function(e, t) {
    return this[Wt + e] = t, this;
  },
  remove: function(e) {
    var t = Wt + e;
    return t in this && delete this[t];
  },
  clear: function() {
    for (var e in this)
      e[0] === Wt && delete this[e];
  },
  keys: function() {
    var e = [];
    for (var t in this)
      t[0] === Wt && e.push(t.slice(1));
    return e;
  },
  values: function() {
    var e = [];
    for (var t in this)
      t[0] === Wt && e.push(this[t]);
    return e;
  },
  entries: function() {
    var e = [];
    for (var t in this)
      t[0] === Wt && e.push({ key: t.slice(1), value: this[t] });
    return e;
  },
  size: function() {
    var e = 0;
    for (var t in this)
      t[0] === Wt && ++e;
    return e;
  },
  empty: function() {
    for (var e in this)
      if (e[0] === Wt)
        return !1;
    return !0;
  },
  each: function(e) {
    for (var t in this)
      t[0] === Wt && e(this[t], t.slice(1), this);
  }
};
function hr(e, t) {
  var n = new fr();
  if (e instanceof fr)
    e.each(function(s, c) {
      n.set(c, s);
    });
  else if (Array.isArray(e)) {
    var r = -1, i = e.length, a;
    if (t == null)
      for (; ++r < i; )
        n.set(r, e[r]);
    else
      for (; ++r < i; )
        n.set(t(a = e[r], r, e), a);
  } else if (e)
    for (var o in e)
      n.set(o, e[o]);
  return n;
}
function No() {
}
var Le = hr.prototype;
No.prototype = {
  constructor: No,
  has: Le.has,
  add: function(e) {
    return e += "", this[Wt + e] = e, this;
  },
  remove: Le.remove,
  clear: Le.clear,
  values: Le.keys,
  size: Le.size,
  empty: Le.empty,
  each: Le.each
};
var tc = Array.prototype, ty = tc.map, ea = tc.slice, ko = { name: "implicit" };
function vn() {
  var e = hr(), t = [], n = [], r = ko;
  function i(a) {
    var o = a + "", s = e.get(o);
    if (!s) {
      if (r !== ko)
        return r;
      e.set(o, s = t.push(a));
    }
    return n[(s - 1) % n.length];
  }
  return i.domain = function(a) {
    if (!arguments.length)
      return t.slice();
    t = [], e = hr();
    for (var o = -1, s = a.length, c, u; ++o < s; )
      e.has(u = (c = a[o]) + "") || e.set(u, t.push(c));
    return i;
  }, i.range = function(a) {
    return arguments.length ? (n = ea.call(a), i) : n.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return vn(t, n).unknown(r);
  }, Ur.apply(i, arguments), i;
}
function ec() {
  var e = vn().unknown(void 0), t = e.domain, n = e.range, r = [0, 1], i, a, o = !1, s = 0, c = 0, u = 0.5;
  delete e.unknown;
  function g() {
    var h = t().length, p = r[1] < r[0], l = r[p - 0], v = r[1 - p];
    i = (v - l) / Math.max(1, h - s + c * 2), o && (i = Math.floor(i)), l += (v - l - i * (h - s)) * u, a = i * (1 - s), o && (l = Math.round(l), a = Math.round(a));
    var _ = Qm(h).map(function(y) {
      return l + i * y;
    });
    return n(p ? _.reverse() : _);
  }
  return e.domain = function(h) {
    return arguments.length ? (t(h), g()) : t();
  }, e.range = function(h) {
    return arguments.length ? (r = [+h[0], +h[1]], g()) : r.slice();
  }, e.rangeRound = function(h) {
    return r = [+h[0], +h[1]], o = !0, g();
  }, e.bandwidth = function() {
    return a;
  }, e.step = function() {
    return i;
  }, e.round = function(h) {
    return arguments.length ? (o = !!h, g()) : o;
  }, e.padding = function(h) {
    return arguments.length ? (s = Math.min(1, c = +h), g()) : s;
  }, e.paddingInner = function(h) {
    return arguments.length ? (s = Math.min(1, h), g()) : s;
  }, e.paddingOuter = function(h) {
    return arguments.length ? (c = +h, g()) : c;
  }, e.align = function(h) {
    return arguments.length ? (u = Math.max(0, Math.min(1, h)), g()) : u;
  }, e.copy = function() {
    return ec(t(), r).round(o).paddingInner(s).paddingOuter(c).align(u);
  }, Ur.apply(g(), arguments);
}
function Ta(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function nc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t)
    n[r] = t[r];
  return n;
}
function kn() {
}
var En = 0.7, dr = 1 / En, sn = "\\s*([+-]?\\d+)\\s*", Tn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", se = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ey = /^#([0-9a-f]{3,8})$/, ny = new RegExp("^rgb\\(" + [sn, sn, sn] + "\\)$"), ry = new RegExp("^rgb\\(" + [se, se, se] + "\\)$"), iy = new RegExp("^rgba\\(" + [sn, sn, sn, Tn] + "\\)$"), ay = new RegExp("^rgba\\(" + [se, se, se, Tn] + "\\)$"), oy = new RegExp("^hsl\\(" + [Tn, se, se] + "\\)$"), sy = new RegExp("^hsla\\(" + [Tn, se, se, Tn] + "\\)$"), Do = {
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
Ta(kn, Ue, {
  copy: function(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: Fo,
  formatHex: Fo,
  formatHsl: cy,
  formatRgb: Lo,
  toString: Lo
});
function Fo() {
  return this.rgb().formatHex();
}
function cy() {
  return rc(this).formatHsl();
}
function Lo() {
  return this.rgb().formatRgb();
}
function Ue(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = ey.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? zo(t) : n === 3 ? new Dt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Yn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Yn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ny.exec(e)) ? new Dt(t[1], t[2], t[3], 1) : (t = ry.exec(e)) ? new Dt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = iy.exec(e)) ? Yn(t[1], t[2], t[3], t[4]) : (t = ay.exec(e)) ? Yn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = oy.exec(e)) ? Wo(t[1], t[2] / 100, t[3] / 100, 1) : (t = sy.exec(e)) ? Wo(t[1], t[2] / 100, t[3] / 100, t[4]) : Do.hasOwnProperty(e) ? zo(Do[e]) : e === "transparent" ? new Dt(NaN, NaN, NaN, 0) : null;
}
function zo(e) {
  return new Dt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Yn(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Dt(e, t, n, r);
}
function uy(e) {
  return e instanceof kn || (e = Ue(e)), e ? (e = e.rgb(), new Dt(e.r, e.g, e.b, e.opacity)) : new Dt();
}
function na(e, t, n, r) {
  return arguments.length === 1 ? uy(e) : new Dt(e, t, n, r == null ? 1 : r);
}
function Dt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ta(Dt, na, nc(kn, {
  brighter: function(e) {
    return e = e == null ? dr : Math.pow(dr, e), new Dt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker: function(e) {
    return e = e == null ? En : Math.pow(En, e), new Dt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Bo,
  formatHex: Bo,
  formatRgb: jo,
  toString: jo
}));
function Bo() {
  return "#" + Ni(this.r) + Ni(this.g) + Ni(this.b);
}
function jo() {
  var e = this.opacity;
  return e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e)), (e === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (e === 1 ? ")" : ", " + e + ")");
}
function Ni(e) {
  return e = Math.max(0, Math.min(255, Math.round(e) || 0)), (e < 16 ? "0" : "") + e.toString(16);
}
function Wo(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ae(e, t, n, r);
}
function rc(e) {
  if (e instanceof ae)
    return new ae(e.h, e.s, e.l, e.opacity);
  if (e instanceof kn || (e = Ue(e)), !e)
    return new ae();
  if (e instanceof ae)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (t === a ? o = (n - r) / s + (n < r) * 6 : n === a ? o = (r - t) / s + 2 : o = (t - n) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new ae(o, s, c, e.opacity);
}
function ly(e, t, n, r) {
  return arguments.length === 1 ? rc(e) : new ae(e, t, n, r == null ? 1 : r);
}
function ae(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ta(ae, ly, nc(kn, {
  brighter: function(e) {
    return e = e == null ? dr : Math.pow(dr, e), new ae(this.h, this.s, this.l * e, this.opacity);
  },
  darker: function(e) {
    return e = e == null ? En : Math.pow(En, e), new ae(this.h, this.s, this.l * e, this.opacity);
  },
  rgb: function() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - r;
    return new Dt(
      ki(e >= 240 ? e - 240 : e + 120, i, r),
      ki(e, i, r),
      ki(e < 120 ? e + 240 : e - 120, i, r),
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
function ki(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
function Ia(e) {
  return function() {
    return e;
  };
}
function fy(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function hy(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function dy(e) {
  return (e = +e) == 1 ? ic : function(t, n) {
    return n - t ? hy(t, n, e) : Ia(isNaN(t) ? n : t);
  };
}
function ic(e, t) {
  var n = t - e;
  return n ? fy(e, n) : Ia(isNaN(e) ? t : e);
}
const pr = function e(t) {
  var n = dy(t);
  function r(i, a) {
    var o = n((i = na(i)).r, (a = na(a)).r), s = n(i.g, a.g), c = n(i.b, a.b), u = ic(i.opacity, a.opacity);
    return function(g) {
      return i.r = o(g), i.g = s(g), i.b = c(g), i.opacity = u(g), i + "";
    };
  }
  return r.gamma = e, r;
}(1);
function py(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i)
      r[i] = e[i] * (1 - a) + t[i] * a;
    return r;
  };
}
function gy(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function my(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = new Array(r), a = new Array(n), o;
  for (o = 0; o < r; ++o)
    i[o] = Dn(e[o], t[o]);
  for (; o < n; ++o)
    a[o] = t[o];
  return function(s) {
    for (o = 0; o < r; ++o)
      a[o] = i[o](s);
    return a;
  };
}
function yy(e, t) {
  var n = new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function Ht(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function vy(e, t) {
  var n = {}, r = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? n[i] = Dn(e[i], t[i]) : r[i] = t[i];
  return function(a) {
    for (i in n)
      r[i] = n[i](a);
    return r;
  };
}
var ra = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Di = new RegExp(ra.source, "g");
function _y(e) {
  return function() {
    return e;
  };
}
function by(e) {
  return function(t) {
    return e(t) + "";
  };
}
function ac(e, t) {
  var n = ra.lastIndex = Di.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
  for (e = e + "", t = t + ""; (r = ra.exec(e)) && (i = Di.exec(t)); )
    (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: Ht(r, i) })), n = Di.lastIndex;
  return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? by(c[0].x) : _y(t) : (t = c.length, function(u) {
    for (var g = 0, h; g < t; ++g)
      s[(h = c[g]).i] = h.x(u);
    return s.join("");
  });
}
function Dn(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Ia(t) : (n === "number" ? Ht : n === "string" ? (r = Ue(t)) ? (t = r, pr) : ac : t instanceof Ue ? pr : t instanceof Date ? yy : gy(t) ? py : Array.isArray(t) ? my : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? vy : Ht)(e, t);
}
function xy(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
var qo = 180 / Math.PI, ia = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function oc(e, t, n, r, i, a) {
  var o, s, c;
  return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(t, e) * qo,
    skewX: Math.atan(c) * qo,
    scaleX: o,
    scaleY: s
  };
}
var xn, Fi, Ho, Xn;
function wy(e) {
  return e === "none" ? ia : (xn || (xn = document.createElement("DIV"), Fi = document.documentElement, Ho = document.defaultView), xn.style.transform = e, e = Ho.getComputedStyle(Fi.appendChild(xn), null).getPropertyValue("transform"), Fi.removeChild(xn), e = e.slice(7, -1).split(","), oc(+e[0], +e[1], +e[2], +e[3], +e[4], +e[5]));
}
function Sy(e) {
  return e == null || (Xn || (Xn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Xn.setAttribute("transform", e), !(e = Xn.transform.baseVal.consolidate())) ? ia : (e = e.matrix, oc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function sc(e, t, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, g, h, p, l, v) {
    if (u !== h || g !== p) {
      var _ = l.push("translate(", null, t, null, n);
      v.push({ i: _ - 4, x: Ht(u, h) }, { i: _ - 2, x: Ht(g, p) });
    } else
      (h || p) && l.push("translate(" + h + t + p + n);
  }
  function o(u, g, h, p) {
    u !== g ? (u - g > 180 ? g += 360 : g - u > 180 && (u += 360), p.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: Ht(u, g) })) : g && h.push(i(h) + "rotate(" + g + r);
  }
  function s(u, g, h, p) {
    u !== g ? p.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Ht(u, g) }) : g && h.push(i(h) + "skewX(" + g + r);
  }
  function c(u, g, h, p, l, v) {
    if (u !== h || g !== p) {
      var _ = l.push(i(l) + "scale(", null, ",", null, ")");
      v.push({ i: _ - 4, x: Ht(u, h) }, { i: _ - 2, x: Ht(g, p) });
    } else
      (h !== 1 || p !== 1) && l.push(i(l) + "scale(" + h + "," + p + ")");
  }
  return function(u, g) {
    var h = [], p = [];
    return u = e(u), g = e(g), a(u.translateX, u.translateY, g.translateX, g.translateY, h, p), o(u.rotate, g.rotate, h, p), s(u.skewX, g.skewX, h, p), c(u.scaleX, u.scaleY, g.scaleX, g.scaleY, h, p), u = g = null, function(l) {
      for (var v = -1, _ = p.length, y; ++v < _; )
        h[(y = p[v]).i] = y.x(l);
      return h.join("");
    };
  };
}
var Cy = sc(wy, "px, ", "px)", "deg)"), Oy = sc(Sy, ", ", ")", ")");
function My(e) {
  return function() {
    return e;
  };
}
function Ay(e) {
  return +e;
}
var Uo = [0, 1];
function oe(e) {
  return e;
}
function aa(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : My(isNaN(t) ? NaN : 0.5);
}
function Vo(e) {
  var t = e[0], n = e[e.length - 1], r;
  return t > n && (r = t, t = n, n = r), function(i) {
    return Math.max(t, Math.min(n, i));
  };
}
function $y(e, t, n) {
  var r = e[0], i = e[1], a = t[0], o = t[1];
  return i < r ? (r = aa(i, r), a = n(o, a)) : (r = aa(r, i), a = n(a, o)), function(s) {
    return a(r(s));
  };
}
function Py(e, t, n) {
  var r = Math.min(e.length, t.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r; )
    i[o] = aa(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
  return function(s) {
    var c = Ym(e, s, 1, r) - 1;
    return a[c](i[c](s));
  };
}
function cc(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function uc() {
  var e = Uo, t = Uo, n = Dn, r, i, a, o = oe, s, c, u;
  function g() {
    return s = Math.min(e.length, t.length) > 2 ? Py : $y, c = u = null, h;
  }
  function h(p) {
    return isNaN(p = +p) ? a : (c || (c = s(e.map(r), t, n)))(r(o(p)));
  }
  return h.invert = function(p) {
    return o(i((u || (u = s(t, e.map(r), Ht)))(p)));
  }, h.domain = function(p) {
    return arguments.length ? (e = ty.call(p, Ay), o === oe || (o = Vo(e)), g()) : e.slice();
  }, h.range = function(p) {
    return arguments.length ? (t = ea.call(p), g()) : t.slice();
  }, h.rangeRound = function(p) {
    return t = ea.call(p), n = xy, g();
  }, h.clamp = function(p) {
    return arguments.length ? (o = p ? Vo(e) : oe, h) : o !== oe;
  }, h.interpolate = function(p) {
    return arguments.length ? (n = p, g()) : n;
  }, h.unknown = function(p) {
    return arguments.length ? (a = p, h) : a;
  }, function(p, l) {
    return r = p, i = l, g();
  };
}
function Ey(e, t) {
  return uc()(e, t);
}
function Ty(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function gr(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, r = e.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +e.slice(n + 1)
  ];
}
function dn(e) {
  return e = gr(Math.abs(e)), e ? e[1] : NaN;
}
function Iy(e, t) {
  return function(n, r) {
    for (var i = n.length, a = [], o = 0, s = e[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function Ry(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var Ny = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function mr(e) {
  if (!(t = Ny.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new Ra({
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
mr.prototype = Ra.prototype;
function Ra(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Ra.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function ky(e) {
  t:
    for (var t = e.length, n = 1, r = -1, i; n < t; ++n)
      switch (e[n]) {
        case ".":
          r = i = n;
          break;
        case "0":
          r === 0 && (r = n), i = n;
          break;
        default:
          if (!+e[n])
            break t;
          r > 0 && (r = 0);
          break;
      }
  return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
var lc;
function Dy(e, t) {
  var n = gr(e, t);
  if (!n)
    return e + "";
  var r = n[0], i = n[1], a = i - (lc = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + gr(e, Math.max(0, t + a - 1))[0];
}
function Go(e, t) {
  var n = gr(e, t);
  if (!n)
    return e + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Yo = {
  "%": function(e, t) {
    return (e * 100).toFixed(t);
  },
  b: function(e) {
    return Math.round(e).toString(2);
  },
  c: function(e) {
    return e + "";
  },
  d: Ty,
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
    return Go(e * 100, t);
  },
  r: Go,
  s: Dy,
  X: function(e) {
    return Math.round(e).toString(16).toUpperCase();
  },
  x: function(e) {
    return Math.round(e).toString(16);
  }
};
function Xo(e) {
  return e;
}
var Qo = Array.prototype.map, Jo = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Fy(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Xo : Iy(Qo.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Xo : Ry(Qo.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "-" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(h) {
    h = mr(h);
    var p = h.fill, l = h.align, v = h.sign, _ = h.symbol, y = h.zero, f = h.width, d = h.comma, b = h.precision, $ = h.trim, T = h.type;
    T === "n" ? (d = !0, T = "g") : Yo[T] || (b === void 0 && (b = 12), $ = !0, T = "g"), (y || p === "0" && l === "=") && (y = !0, p = "0", l = "=");
    var L = _ === "$" ? n : _ === "#" && /[boxX]/.test(T) ? "0" + T.toLowerCase() : "", j = _ === "$" ? r : /[%p]/.test(T) ? o : "", z = Yo[T], N = /[defgprs%]/.test(T);
    b = b === void 0 ? 6 : /[gprs]/.test(T) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b));
    function D(w) {
      var S = L, C = j, P, F, B;
      if (T === "c")
        C = z(w) + C, w = "";
      else {
        w = +w;
        var H = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? c : z(Math.abs(w), b), $ && (w = ky(w)), H && +w == 0 && v !== "+" && (H = !1), S = (H ? v === "(" ? v : s : v === "-" || v === "(" ? "" : v) + S, C = (T === "s" ? Jo[8 + lc / 3] : "") + C + (H && v === "(" ? ")" : ""), N) {
          for (P = -1, F = w.length; ++P < F; )
            if (B = w.charCodeAt(P), 48 > B || B > 57) {
              C = (B === 46 ? i + w.slice(P + 1) : w.slice(P)) + C, w = w.slice(0, P);
              break;
            }
        }
      }
      d && !y && (w = t(w, 1 / 0));
      var X = S.length + w.length + C.length, J = X < f ? new Array(f - X + 1).join(p) : "";
      switch (d && y && (w = t(J + w, J.length ? f - C.length : 1 / 0), J = ""), l) {
        case "<":
          w = S + w + C + J;
          break;
        case "=":
          w = S + J + w + C;
          break;
        case "^":
          w = J.slice(0, X = J.length >> 1) + S + w + C + J.slice(X);
          break;
        default:
          w = J + S + w + C;
          break;
      }
      return a(w);
    }
    return D.toString = function() {
      return h + "";
    }, D;
  }
  function g(h, p) {
    var l = u((h = mr(h), h.type = "f", h)), v = Math.max(-8, Math.min(8, Math.floor(dn(p) / 3))) * 3, _ = Math.pow(10, -v), y = Jo[8 + v / 3];
    return function(f) {
      return l(_ * f) + y;
    };
  }
  return {
    format: u,
    formatPrefix: g
  };
}
var Qn, fc, hc;
Ly({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});
function Ly(e) {
  return Qn = Fy(e), fc = Qn.format, hc = Qn.formatPrefix, Qn;
}
function zy(e) {
  return Math.max(0, -dn(Math.abs(e)));
}
function By(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(dn(t) / 3))) * 3 - dn(Math.abs(e)));
}
function jy(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, dn(t) - dn(e)) + 1;
}
function Wy(e, t, n, r) {
  var i = Km(e, t, n), a;
  switch (r = mr(r == null ? ",f" : r), r.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return r.precision == null && !isNaN(a = By(i, o)) && (r.precision = a), hc(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = jy(i, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = zy(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return fc(r);
}
function dc(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var r = t();
    return Jm(r[0], r[r.length - 1], n == null ? 10 : n);
  }, e.tickFormat = function(n, r) {
    var i = t();
    return Wy(i[0], i[i.length - 1], n == null ? 10 : n, r);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c;
    return s < o && (c = o, o = s, s = c, c = i, i = a, a = c), c = tr(o, s, n), c > 0 ? (o = Math.floor(o / c) * c, s = Math.ceil(s / c) * c, c = tr(o, s, n)) : c < 0 && (o = Math.ceil(o * c) / c, s = Math.floor(s * c) / c, c = tr(o, s, n)), c > 0 ? (r[i] = Math.floor(o / c) * c, r[a] = Math.ceil(s / c) * c, t(r)) : c < 0 && (r[i] = Math.ceil(o * c) / c, r[a] = Math.floor(s * c) / c, t(r)), e;
  }, e;
}
function Fn() {
  var e = Ey(oe, oe);
  return e.copy = function() {
    return cc(e, Fn());
  }, Ur.apply(e, arguments), dc(e);
}
function Ko(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function qy(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Hy(e) {
  return e < 0 ? -e * e : e * e;
}
function Uy(e) {
  var t = e(oe, oe), n = 1;
  function r() {
    return n === 1 ? e(oe, oe) : n === 0.5 ? e(qy, Hy) : e(Ko(n), Ko(1 / n));
  }
  return t.exponent = function(i) {
    return arguments.length ? (n = +i, r()) : n;
  }, dc(t);
}
function pc() {
  var e = Uy(uc());
  return e.copy = function() {
    return cc(e, pc()).exponent(e.exponent());
  }, Ur.apply(e, arguments), e;
}
function Vy() {
  return pc.apply(null, arguments).exponent(0.5);
}
function Gy(e) {
  var t = 0, n = e.children, r = n && n.length;
  if (!r)
    t = 1;
  else
    for (; --r >= 0; )
      t += n[r].value;
  e.value = t;
}
function Yy() {
  return this.eachAfter(Gy);
}
function Xy(e) {
  var t = this, n, r = [t], i, a, o;
  do
    for (n = r.reverse(), r = []; t = n.pop(); )
      if (e(t), i = t.children, i)
        for (a = 0, o = i.length; a < o; ++a)
          r.push(i[a]);
  while (r.length);
  return this;
}
function Qy(e) {
  for (var t = this, n = [t], r, i; t = n.pop(); )
    if (e(t), r = t.children, r)
      for (i = r.length - 1; i >= 0; --i)
        n.push(r[i]);
  return this;
}
function Jy(e) {
  for (var t = this, n = [t], r = [], i, a, o; t = n.pop(); )
    if (r.push(t), i = t.children, i)
      for (a = 0, o = i.length; a < o; ++a)
        n.push(i[a]);
  for (; t = r.pop(); )
    e(t);
  return this;
}
function Ky(e) {
  return this.eachAfter(function(t) {
    for (var n = +e(t.data) || 0, r = t.children, i = r && r.length; --i >= 0; )
      n += r[i].value;
    t.value = n;
  });
}
function Zy(e) {
  return this.eachBefore(function(t) {
    t.children && t.children.sort(e);
  });
}
function tv(e) {
  for (var t = this, n = ev(t, e), r = [t]; t !== n; )
    t = t.parent, r.push(t);
  for (var i = r.length; e !== n; )
    r.splice(i, 0, e), e = e.parent;
  return r;
}
function ev(e, t) {
  if (e === t)
    return e;
  var n = e.ancestors(), r = t.ancestors(), i = null;
  for (e = n.pop(), t = r.pop(); e === t; )
    i = e, e = n.pop(), t = r.pop();
  return i;
}
function nv() {
  for (var e = this, t = [e]; e = e.parent; )
    t.push(e);
  return t;
}
function rv() {
  var e = [];
  return this.each(function(t) {
    e.push(t);
  }), e;
}
function iv() {
  var e = [];
  return this.eachBefore(function(t) {
    t.children || e.push(t);
  }), e;
}
function av() {
  var e = this, t = [];
  return e.each(function(n) {
    n !== e && t.push({ source: n.parent, target: n });
  }), t;
}
function Na(e, t) {
  var n = new yr(e), r = +e.value && (n.value = e.value), i, a = [n], o, s, c, u;
  for (t == null && (t = sv); i = a.pop(); )
    if (r && (i.value = +i.data.value), (s = t(i.data)) && (u = s.length))
      for (i.children = new Array(u), c = u - 1; c >= 0; --c)
        a.push(o = i.children[c] = new yr(s[c])), o.parent = i, o.depth = i.depth + 1;
  return n.eachBefore(uv);
}
function ov() {
  return Na(this).eachBefore(cv);
}
function sv(e) {
  return e.children;
}
function cv(e) {
  e.data = e.data.data;
}
function uv(e) {
  var t = 0;
  do
    e.height = t;
  while ((e = e.parent) && e.height < ++t);
}
function yr(e) {
  this.data = e, this.depth = this.height = 0, this.parent = null;
}
yr.prototype = Na.prototype = {
  constructor: yr,
  count: Yy,
  each: Xy,
  eachAfter: Jy,
  eachBefore: Qy,
  sum: Ky,
  sort: Zy,
  path: tv,
  ancestors: nv,
  descendants: rv,
  leaves: iv,
  links: av,
  copy: ov
};
function lv(e) {
  e.x0 = Math.round(e.x0), e.y0 = Math.round(e.y0), e.x1 = Math.round(e.x1), e.y1 = Math.round(e.y1);
}
function fv(e, t, n, r, i) {
  for (var a = e.children, o, s = -1, c = a.length, u = e.value && (r - t) / e.value; ++s < c; )
    o = a[s], o.y0 = n, o.y1 = i, o.x0 = t, o.x1 = t += o.value * u;
}
function hv() {
  var e = 1, t = 1, n = 0, r = !1;
  function i(o) {
    var s = o.height + 1;
    return o.x0 = o.y0 = n, o.x1 = e, o.y1 = t / s, o.eachBefore(a(t, s)), r && o.eachBefore(lv), o;
  }
  function a(o, s) {
    return function(c) {
      c.children && fv(c, c.x0, o * (c.depth + 1) / s, c.x1, o * (c.depth + 2) / s);
      var u = c.x0, g = c.y0, h = c.x1 - n, p = c.y1 - n;
      h < u && (u = h = (u + h) / 2), p < g && (g = p = (g + p) / 2), c.x0 = u, c.y0 = g, c.x1 = h, c.y1 = p;
    };
  }
  return i.round = function(o) {
    return arguments.length ? (r = !!o, i) : r;
  }, i.size = function(o) {
    return arguments.length ? (e = +o[0], t = +o[1], i) : [e, t];
  }, i.padding = function(o) {
    return arguments.length ? (n = +o, i) : n;
  }, i;
}
var oa = Math.PI, sa = 2 * oa, Be = 1e-6, dv = sa - Be;
function ca() {
  this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
}
function ka() {
  return new ca();
}
ca.prototype = ka.prototype = {
  constructor: ca,
  moveTo: function(e, t) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
  },
  closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  },
  lineTo: function(e, t) {
    this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
  },
  quadraticCurveTo: function(e, t, n, r) {
    this._ += "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +r);
  },
  bezierCurveTo: function(e, t, n, r, i, a) {
    this._ += "C" + +e + "," + +t + "," + +n + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +a);
  },
  arcTo: function(e, t, n, r, i) {
    e = +e, t = +t, n = +n, r = +r, i = +i;
    var a = this._x1, o = this._y1, s = n - e, c = r - t, u = a - e, g = o - t, h = u * u + g * g;
    if (i < 0)
      throw new Error("negative radius: " + i);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (h > Be)
      if (!(Math.abs(g * s - c * u) > Be) || !i)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var p = n - a, l = r - o, v = s * s + c * c, _ = p * p + l * l, y = Math.sqrt(v), f = Math.sqrt(h), d = i * Math.tan((oa - Math.acos((v + h - _) / (2 * y * f))) / 2), b = d / f, $ = d / y;
        Math.abs(b - 1) > Be && (this._ += "L" + (e + b * u) + "," + (t + b * g)), this._ += "A" + i + "," + i + ",0,0," + +(g * p > u * l) + "," + (this._x1 = e + $ * s) + "," + (this._y1 = t + $ * c);
      }
  },
  arc: function(e, t, n, r, i, a) {
    e = +e, t = +t, n = +n, a = !!a;
    var o = n * Math.cos(r), s = n * Math.sin(r), c = e + o, u = t + s, g = 1 ^ a, h = a ? r - i : i - r;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + c + "," + u : (Math.abs(this._x1 - c) > Be || Math.abs(this._y1 - u) > Be) && (this._ += "L" + c + "," + u), n && (h < 0 && (h = h % sa + sa), h > dv ? this._ += "A" + n + "," + n + ",0,1," + g + "," + (e - o) + "," + (t - s) + "A" + n + "," + n + ",0,1," + g + "," + (this._x1 = c) + "," + (this._y1 = u) : h > Be && (this._ += "A" + n + "," + n + ",0," + +(h >= oa) + "," + g + "," + (this._x1 = e + n * Math.cos(i)) + "," + (this._y1 = t + n * Math.sin(i))));
  },
  rect: function(e, t, n, r) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +r + "h" + -n + "Z";
  },
  toString: function() {
    return this._;
  }
};
function $t(e) {
  return function() {
    return e;
  };
}
var Zo = Math.abs, _t = Math.atan2, ze = Math.cos, pv = Math.max, Li = Math.min, ee = Math.sin, rn = Math.sqrt, It = 1e-12, In = Math.PI, vr = In / 2, er = 2 * In;
function gv(e) {
  return e > 1 ? 0 : e < -1 ? In : Math.acos(e);
}
function ts(e) {
  return e >= 1 ? vr : e <= -1 ? -vr : Math.asin(e);
}
function mv(e) {
  return e.innerRadius;
}
function yv(e) {
  return e.outerRadius;
}
function vv(e) {
  return e.startAngle;
}
function _v(e) {
  return e.endAngle;
}
function bv(e) {
  return e && e.padAngle;
}
function xv(e, t, n, r, i, a, o, s) {
  var c = n - e, u = r - t, g = o - i, h = s - a, p = h * c - g * u;
  if (!(p * p < It))
    return p = (g * (t - a) - h * (e - i)) / p, [e + p * c, t + p * u];
}
function Jn(e, t, n, r, i, a, o) {
  var s = e - n, c = t - r, u = (o ? a : -a) / rn(s * s + c * c), g = u * c, h = -u * s, p = e + g, l = t + h, v = n + g, _ = r + h, y = (p + v) / 2, f = (l + _) / 2, d = v - p, b = _ - l, $ = d * d + b * b, T = i - a, L = p * _ - v * l, j = (b < 0 ? -1 : 1) * rn(pv(0, T * T * $ - L * L)), z = (L * b - d * j) / $, N = (-L * d - b * j) / $, D = (L * b + d * j) / $, w = (-L * d + b * j) / $, S = z - y, C = N - f, P = D - y, F = w - f;
  return S * S + C * C > P * P + F * F && (z = D, N = w), {
    cx: z,
    cy: N,
    x01: -g,
    y01: -h,
    x11: z * (i / T - 1),
    y11: N * (i / T - 1)
  };
}
function gc() {
  var e = mv, t = yv, n = $t(0), r = null, i = vv, a = _v, o = bv, s = null;
  function c() {
    var u, g, h = +e.apply(this, arguments), p = +t.apply(this, arguments), l = i.apply(this, arguments) - vr, v = a.apply(this, arguments) - vr, _ = Zo(v - l), y = v > l;
    if (s || (s = u = ka()), p < h && (g = p, p = h, h = g), !(p > It))
      s.moveTo(0, 0);
    else if (_ > er - It)
      s.moveTo(p * ze(l), p * ee(l)), s.arc(0, 0, p, l, v, !y), h > It && (s.moveTo(h * ze(v), h * ee(v)), s.arc(0, 0, h, v, l, y));
    else {
      var f = l, d = v, b = l, $ = v, T = _, L = _, j = o.apply(this, arguments) / 2, z = j > It && (r ? +r.apply(this, arguments) : rn(h * h + p * p)), N = Li(Zo(p - h) / 2, +n.apply(this, arguments)), D = N, w = N, S, C;
      if (z > It) {
        var P = ts(z / h * ee(j)), F = ts(z / p * ee(j));
        (T -= P * 2) > It ? (P *= y ? 1 : -1, b += P, $ -= P) : (T = 0, b = $ = (l + v) / 2), (L -= F * 2) > It ? (F *= y ? 1 : -1, f += F, d -= F) : (L = 0, f = d = (l + v) / 2);
      }
      var B = p * ze(f), H = p * ee(f), X = h * ze($), J = h * ee($);
      if (N > It) {
        var G = p * ze(d), at = p * ee(d), nt = h * ze(b), K = h * ee(b), Q;
        if (_ < In && (Q = xv(B, H, nt, K, G, at, X, J))) {
          var it = B - Q[0], rt = H - Q[1], Y = G - Q[0], ot = at - Q[1], st = 1 / ee(gv((it * Y + rt * ot) / (rn(it * it + rt * rt) * rn(Y * Y + ot * ot))) / 2), ht = rn(Q[0] * Q[0] + Q[1] * Q[1]);
          D = Li(N, (h - ht) / (st - 1)), w = Li(N, (p - ht) / (st + 1));
        }
      }
      L > It ? w > It ? (S = Jn(nt, K, B, H, p, w, y), C = Jn(G, at, X, J, p, w, y), s.moveTo(S.cx + S.x01, S.cy + S.y01), w < N ? s.arc(S.cx, S.cy, w, _t(S.y01, S.x01), _t(C.y01, C.x01), !y) : (s.arc(S.cx, S.cy, w, _t(S.y01, S.x01), _t(S.y11, S.x11), !y), s.arc(0, 0, p, _t(S.cy + S.y11, S.cx + S.x11), _t(C.cy + C.y11, C.cx + C.x11), !y), s.arc(C.cx, C.cy, w, _t(C.y11, C.x11), _t(C.y01, C.x01), !y))) : (s.moveTo(B, H), s.arc(0, 0, p, f, d, !y)) : s.moveTo(B, H), !(h > It) || !(T > It) ? s.lineTo(X, J) : D > It ? (S = Jn(X, J, G, at, h, -D, y), C = Jn(B, H, nt, K, h, -D, y), s.lineTo(S.cx + S.x01, S.cy + S.y01), D < N ? s.arc(S.cx, S.cy, D, _t(S.y01, S.x01), _t(C.y01, C.x01), !y) : (s.arc(S.cx, S.cy, D, _t(S.y01, S.x01), _t(S.y11, S.x11), !y), s.arc(0, 0, h, _t(S.cy + S.y11, S.cx + S.x11), _t(C.cy + C.y11, C.cx + C.x11), y), s.arc(C.cx, C.cy, D, _t(C.y11, C.x11), _t(C.y01, C.x01), !y))) : s.arc(0, 0, h, $, b, y);
    }
    if (s.closePath(), u)
      return s = null, u + "" || null;
  }
  return c.centroid = function() {
    var u = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, g = (+i.apply(this, arguments) + +a.apply(this, arguments)) / 2 - In / 2;
    return [ze(g) * u, ee(g) * u];
  }, c.innerRadius = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : $t(+u), c) : e;
  }, c.outerRadius = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : $t(+u), c) : t;
  }, c.cornerRadius = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : $t(+u), c) : n;
  }, c.padRadius = function(u) {
    return arguments.length ? (r = u == null ? null : typeof u == "function" ? u : $t(+u), c) : r;
  }, c.startAngle = function(u) {
    return arguments.length ? (i = typeof u == "function" ? u : $t(+u), c) : i;
  }, c.endAngle = function(u) {
    return arguments.length ? (a = typeof u == "function" ? u : $t(+u), c) : a;
  }, c.padAngle = function(u) {
    return arguments.length ? (o = typeof u == "function" ? u : $t(+u), c) : o;
  }, c.context = function(u) {
    return arguments.length ? (s = u == null ? null : u, c) : s;
  }, c;
}
function wv(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Sv(e) {
  return e;
}
function Cv() {
  var e = Sv, t = wv, n = null, r = $t(0), i = $t(er), a = $t(0);
  function o(s) {
    var c, u = s.length, g, h, p = 0, l = new Array(u), v = new Array(u), _ = +r.apply(this, arguments), y = Math.min(er, Math.max(-er, i.apply(this, arguments) - _)), f, d = Math.min(Math.abs(y) / u, a.apply(this, arguments)), b = d * (y < 0 ? -1 : 1), $;
    for (c = 0; c < u; ++c)
      ($ = v[l[c] = c] = +e(s[c], c, s)) > 0 && (p += $);
    for (t != null ? l.sort(function(T, L) {
      return t(v[T], v[L]);
    }) : n != null && l.sort(function(T, L) {
      return n(s[T], s[L]);
    }), c = 0, h = p ? (y - u * b) / p : 0; c < u; ++c, _ = f)
      g = l[c], $ = v[g], f = _ + ($ > 0 ? $ * h : 0) + b, v[g] = {
        data: s[g],
        index: c,
        value: $,
        startAngle: _,
        endAngle: f,
        padAngle: d
      };
    return v;
  }
  return o.value = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : $t(+s), o) : e;
  }, o.sortValues = function(s) {
    return arguments.length ? (t = s, n = null, o) : t;
  }, o.sort = function(s) {
    return arguments.length ? (n = s, t = null, o) : n;
  }, o.startAngle = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : $t(+s), o) : r;
  }, o.endAngle = function(s) {
    return arguments.length ? (i = typeof s == "function" ? s : $t(+s), o) : i;
  }, o.padAngle = function(s) {
    return arguments.length ? (a = typeof s == "function" ? s : $t(+s), o) : a;
  }, o;
}
var Ov = { value: function() {
} };
function Da() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new nr(n);
}
function nr(e) {
  this._ = e;
}
function Mv(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
nr.prototype = Da.prototype = {
  constructor: nr,
  on: function(e, t) {
    var n = this._, r = Mv(e + "", n), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; )
        if ((i = (e = r[a]).type) && (i = Av(n[i], e.name)))
          return i;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++a < o; )
      if (i = (e = r[a]).type)
        n[i] = es(n[i], e.name, t);
      else if (t == null)
        for (i in n)
          n[i] = es(n[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t)
      e[n] = t[n].slice();
    return new nr(e);
  },
  call: function(e, t) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), r = 0, i, a; r < i; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (a = this._[e], r = 0, i = a.length; r < i; ++r)
      a[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (var r = this._[e], i = 0, a = r.length; i < a; ++i)
      r[i].value.apply(t, n);
  }
};
function Av(e, t) {
  for (var n = 0, r = e.length, i; n < r; ++n)
    if ((i = e[n]).name === t)
      return i.value;
}
function es(e, t, n) {
  for (var r = 0, i = e.length; r < i; ++r)
    if (e[r].name === t) {
      e[r] = Ov, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
const $v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dispatch: Da
}, Symbol.toStringTag, { value: "Module" }));
var pn = 0, Sn = 0, wn = 0, mc = 1e3, _r, Cn, br = 0, Ve = 0, Vr = 0, Rn = typeof performance == "object" && performance.now ? performance : Date, yc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Gr() {
  return Ve || (yc(Pv), Ve = Rn.now() + Vr);
}
function Pv() {
  Ve = 0;
}
function xr() {
  this._call = this._time = this._next = null;
}
xr.prototype = vc.prototype = {
  constructor: xr,
  restart: function(e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? Gr() : +n) + (t == null ? 0 : +t), !this._next && Cn !== this && (Cn ? Cn._next = this : _r = this, Cn = this), this._call = e, this._time = n, ua();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ua());
  }
};
function vc(e, t, n) {
  var r = new xr();
  return r.restart(e, t, n), r;
}
function Ev() {
  Gr(), ++pn;
  for (var e = _r, t; e; )
    (t = Ve - e._time) >= 0 && e._call.call(null, t), e = e._next;
  --pn;
}
function ns() {
  Ve = (br = Rn.now()) + Vr, pn = Sn = 0;
  try {
    Ev();
  } finally {
    pn = 0, Iv(), Ve = 0;
  }
}
function Tv() {
  var e = Rn.now(), t = e - br;
  t > mc && (Vr -= t, br = e);
}
function Iv() {
  for (var e, t = _r, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : _r = n);
  Cn = e, ua(r);
}
function ua(e) {
  if (!pn) {
    Sn && (Sn = clearTimeout(Sn));
    var t = e - Ve;
    t > 24 ? (e < 1 / 0 && (Sn = setTimeout(ns, e - Rn.now() - Vr)), wn && (wn = clearInterval(wn))) : (wn || (br = Rn.now(), wn = setInterval(Tv, mc)), pn = 1, yc(ns));
  }
}
function rs(e, t, n) {
  var r = new xr();
  return t = t == null ? 0 : +t, r.restart(function(i) {
    r.stop(), e(i + t);
  }, t, n), r;
}
var Rv = Da("start", "end", "cancel", "interrupt"), Nv = [], _c = 0, is = 1, la = 2, rr = 3, as = 4, fa = 5, ir = 6;
function Yr(e, t, n, r, i, a) {
  var o = e.__transition;
  if (!o)
    e.__transition = {};
  else if (n in o)
    return;
  kv(e, n, {
    name: t,
    index: r,
    group: i,
    on: Rv,
    tween: Nv,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: _c
  });
}
function Fa(e, t) {
  var n = Gt(e, t);
  if (n.state > _c)
    throw new Error("too late; already scheduled");
  return n;
}
function me(e, t) {
  var n = Gt(e, t);
  if (n.state > rr)
    throw new Error("too late; already running");
  return n;
}
function Gt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t]))
    throw new Error("transition not found");
  return n;
}
function kv(e, t, n) {
  var r = e.__transition, i;
  r[t] = n, n.timer = vc(a, 0, n.time);
  function a(u) {
    n.state = is, n.timer.restart(o, n.delay, n.time), n.delay <= u && o(u - n.delay);
  }
  function o(u) {
    var g, h, p, l;
    if (n.state !== is)
      return c();
    for (g in r)
      if (l = r[g], l.name === n.name) {
        if (l.state === rr)
          return rs(o);
        l.state === as ? (l.state = ir, l.timer.stop(), l.on.call("interrupt", e, e.__data__, l.index, l.group), delete r[g]) : +g < t && (l.state = ir, l.timer.stop(), l.on.call("cancel", e, e.__data__, l.index, l.group), delete r[g]);
      }
    if (rs(function() {
      n.state === rr && (n.state = as, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = la, n.on.call("start", e, e.__data__, n.index, n.group), n.state === la) {
      for (n.state = rr, i = new Array(p = n.tween.length), g = 0, h = -1; g < p; ++g)
        (l = n.tween[g].value.call(e, e.__data__, n.index, n.group)) && (i[++h] = l);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var g = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = fa, 1), h = -1, p = i.length; ++h < p; )
      i[h].call(e, g);
    n.state === fa && (n.on.call("end", e, e.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = ir, n.timer.stop(), delete r[t];
    for (var u in r)
      return;
    delete e.__transition;
  }
}
function Dv(e, t) {
  var n = e.__transition, r, i, a = !0, o;
  if (!!n) {
    t = t == null ? null : t + "";
    for (o in n) {
      if ((r = n[o]).name !== t) {
        a = !1;
        continue;
      }
      i = r.state > la && r.state < fa, r.state = ir, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[o];
    }
    a && delete e.__transition;
  }
}
function Fv(e) {
  return this.each(function() {
    Dv(this, e);
  });
}
function Lv(e, t) {
  var n, r;
  return function() {
    var i = me(this, e), a = i.tween;
    if (a !== n) {
      r = n = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === t) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function zv(e, t, n) {
  var r, i;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var a = me(this, e), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: t, value: n }, c = 0, u = i.length; c < u; ++c)
        if (i[c].name === t) {
          i[c] = s;
          break;
        }
      c === u && i.push(s);
    }
    a.tween = i;
  };
}
function Bv(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Gt(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === e)
        return o.value;
    return null;
  }
  return this.each((t == null ? Lv : zv)(n, e, t));
}
function La(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var i = me(this, r);
    (i.value || (i.value = {}))[t] = n.apply(this, arguments);
  }), function(i) {
    return Gt(i, r).value[t];
  };
}
function bc(e, t) {
  var n;
  return (typeof t == "number" ? Ht : t instanceof Ue ? pr : (n = Ue(t)) ? (t = n, pr) : ac)(e, t);
}
function jv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Wv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function qv(e, t, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttribute(e);
    return o === i ? null : o === r ? a : a = t(r = o, n);
  };
}
function Hv(e, t, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttributeNS(e.space, e.local);
    return o === i ? null : o === r ? a : a = t(r = o, n);
  };
}
function Uv(e, t, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
  };
}
function Vv(e, t, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
  };
}
function Gv(e, t) {
  var n = Sr(e), r = n === "transform" ? Oy : bc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Vv : Uv)(n, r, La(this, "attr." + e, t)) : t == null ? (n.local ? Wv : jv)(n) : (n.local ? Hv : qv)(n, r, t));
}
function Yv(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Xv(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Qv(e, t) {
  var n, r;
  function i() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && Xv(e, a)), n;
  }
  return i._value = t, i;
}
function Jv(e, t) {
  var n, r;
  function i() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && Yv(e, a)), n;
  }
  return i._value = t, i;
}
function Kv(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  var r = Sr(e);
  return this.tween(n, (r.local ? Qv : Jv)(r, t));
}
function Zv(e, t) {
  return function() {
    Fa(this, e).delay = +t.apply(this, arguments);
  };
}
function t_(e, t) {
  return t = +t, function() {
    Fa(this, e).delay = t;
  };
}
function e_(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Zv : t_)(t, e)) : Gt(this.node(), t).delay;
}
function n_(e, t) {
  return function() {
    me(this, e).duration = +t.apply(this, arguments);
  };
}
function r_(e, t) {
  return t = +t, function() {
    me(this, e).duration = t;
  };
}
function i_(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? n_ : r_)(t, e)) : Gt(this.node(), t).duration;
}
function a_(e, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    me(this, e).ease = t;
  };
}
function o_(e) {
  var t = this._id;
  return arguments.length ? this.each(a_(t, e)) : Gt(this.node(), t).ease;
}
function s_(e) {
  typeof e != "function" && (e = zs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = t[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && e.call(c, c.__data__, u, a) && s.push(c);
  return new ge(r, this._parents, this._name, this._id);
}
function c_(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var c = t[s], u = n[s], g = c.length, h = o[s] = new Array(g), p, l = 0; l < g; ++l)
      (p = c[l] || u[l]) && (h[l] = p);
  for (; s < r; ++s)
    o[s] = t[s];
  return new ge(o, this._parents, this._name, this._id);
}
function u_(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function l_(e, t, n) {
  var r, i, a = u_(t) ? Fa : me;
  return function() {
    var o = a(this, e), s = o.on;
    s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
  };
}
function f_(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Gt(this.node(), n).on.on(e) : this.each(l_(n, e, t));
}
function h_(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    t && t.removeChild(this);
  };
}
function d_() {
  return this.on("end.remove", h_(this._id));
}
function p_(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Sa(e));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], c = s.length, u = a[o] = new Array(c), g, h, p = 0; p < c; ++p)
      (g = s[p]) && (h = e.call(g, g.__data__, p, s)) && ("__data__" in g && (h.__data__ = g.__data__), u[p] = h, Yr(u[p], t, n, p, u, Gt(g, n)));
  return new ge(a, this._parents, t, n);
}
function g_(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ls(e));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, g, h = 0; h < u; ++h)
      if (g = c[h]) {
        for (var p = e.call(g, g.__data__, h, c), l, v = Gt(g, n), _ = 0, y = p.length; _ < y; ++_)
          (l = p[_]) && Yr(l, t, n, _, p, v);
        a.push(p), o.push(g);
      }
  return new ge(a, o, t, n);
}
var m_ = yn.prototype.constructor;
function y_() {
  return new m_(this._groups, this._parents);
}
function v_(e, t) {
  var n, r, i;
  return function() {
    var a = fn(this, e), o = (this.style.removeProperty(e), fn(this, e));
    return a === o ? null : a === n && o === r ? i : i = t(n = a, r = o);
  };
}
function xc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function __(e, t, n) {
  var r, i = n + "", a;
  return function() {
    var o = fn(this, e);
    return o === i ? null : o === r ? a : a = t(r = o, n);
  };
}
function b_(e, t, n) {
  var r, i, a;
  return function() {
    var o = fn(this, e), s = n(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(e), fn(this, e))), o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s));
  };
}
function x_(e, t) {
  var n, r, i, a = "style." + t, o = "end." + a, s;
  return function() {
    var c = me(this, e), u = c.on, g = c.value[a] == null ? s || (s = xc(t)) : void 0;
    (u !== n || i !== g) && (r = (n = u).copy()).on(o, i = g), c.on = r;
  };
}
function w_(e, t, n) {
  var r = (e += "") == "transform" ? Cy : bc;
  return t == null ? this.styleTween(e, v_(e, r)).on("end.style." + e, xc(e)) : typeof t == "function" ? this.styleTween(e, b_(e, r, La(this, "style." + e, t))).each(x_(this._id, e)) : this.styleTween(e, __(e, r, t), n).on("end.style." + e, null);
}
function S_(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function C_(e, t, n) {
  var r, i;
  function a() {
    var o = t.apply(this, arguments);
    return o !== i && (r = (i = o) && S_(e, o, n)), r;
  }
  return a._value = t, a;
}
function O_(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (t == null)
    return this.tween(r, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(r, C_(e, t, n == null ? "" : n));
}
function M_(e) {
  return function() {
    this.textContent = e;
  };
}
function A_(e) {
  return function() {
    var t = e(this);
    this.textContent = t == null ? "" : t;
  };
}
function $_(e) {
  return this.tween("text", typeof e == "function" ? A_(La(this, "text", e)) : M_(e == null ? "" : e + ""));
}
function P_(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function E_(e) {
  var t, n;
  function r() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && P_(i)), t;
  }
  return r._value = e, r;
}
function T_(e) {
  var t = "text";
  if (arguments.length < 1)
    return (t = this.tween(t)) && t._value;
  if (e == null)
    return this.tween(t, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(t, E_(e));
}
function I_() {
  for (var e = this._name, t = this._id, n = wc(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      if (c = o[u]) {
        var g = Gt(c, t);
        Yr(c, e, n, u, o, {
          time: g.time + g.delay + g.duration,
          delay: 0,
          duration: g.duration,
          ease: g.ease
        });
      }
  return new ge(r, this._parents, e, n);
}
function R_() {
  var e, t, n = this, r = n._id, i = n.size();
  return new Promise(function(a, o) {
    var s = { value: o }, c = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var u = me(this, r), g = u.on;
      g !== e && (t = (e = g).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), u.on = t;
    });
  });
}
var N_ = 0;
function ge(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Ln(e) {
  return yn().transition(e);
}
function wc() {
  return ++N_;
}
var tn = yn.prototype;
ge.prototype = Ln.prototype = {
  constructor: ge,
  select: p_,
  selectAll: g_,
  filter: s_,
  merge: c_,
  selection: y_,
  transition: I_,
  call: tn.call,
  nodes: tn.nodes,
  node: tn.node,
  size: tn.size,
  empty: tn.empty,
  each: tn.each,
  on: f_,
  attr: Gv,
  attrTween: Kv,
  style: w_,
  styleTween: O_,
  text: $_,
  textTween: T_,
  remove: d_,
  tween: Bv,
  delay: e_,
  duration: i_,
  ease: o_,
  end: R_
};
var ha = {
  time: null,
  delay: 0,
  duration: 250,
  ease: pe
};
function k_(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      return ha.time = Gr(), ha;
  return n;
}
function D_(e) {
  var t, n;
  e instanceof ge ? (t = e._id, e = e._name) : (t = wc(), (n = ha).time = Gr(), e = e == null ? null : e + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && Yr(c, e, t, u, o, n || k_(c, t));
  return new ge(r, this._parents, e, t);
}
yn.prototype.interrupt = Fv;
yn.prototype.transition = D_;
function ce(e) {
  for (var t = e.length / 6 | 0, n = new Array(t), r = 0; r < t; )
    n[r] = "#" + e.slice(r * 6, ++r * 6);
  return n;
}
const Xr = ce("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Qr = ce("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), Jr = ce("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), Kr = ce("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), Zr = ce("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), ti = ce("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), ei = ce("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), ni = ce("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), ri = ce("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), ii = ce("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function F_(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Sc = { exports: {} };
(function(e, t) {
  (function(n, r) {
    typeof F_ == "function" && !0 ? e.exports = r() : n.pluralize = r();
  })(ft, function() {
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
    function g(_, y) {
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
          return g(y, b);
      }
      return y;
    }
    function p(_, y, f) {
      return function(d) {
        var b = d.toLowerCase();
        return y.hasOwnProperty(b) ? c(d, b) : _.hasOwnProperty(b) ? c(d, _[b]) : h(b, d, f);
      };
    }
    function l(_, y, f, d) {
      return function(b) {
        var $ = b.toLowerCase();
        return y.hasOwnProperty($) ? !0 : _.hasOwnProperty($) ? !1 : h($, $, f) === $;
      };
    }
    function v(_, y, f) {
      var d = y === 1 ? v.singular(_) : v.plural(_);
      return (f ? y + " " : "") + d;
    }
    return v.plural = p(
      o,
      a,
      n
    ), v.isPlural = l(
      o,
      a,
      n
    ), v.singular = p(
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
      ["echo", "echoes"],
      ["dingo", "dingoes"],
      ["volcano", "volcanoes"],
      ["tornado", "tornadoes"],
      ["torpedo", "torpedoes"],
      ["genus", "genera"],
      ["viscus", "viscera"],
      ["stigma", "stigmata"],
      ["stoma", "stomata"],
      ["dogma", "dogmata"],
      ["lemma", "lemmata"],
      ["schema", "schemata"],
      ["anathema", "anathemata"],
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
      /[^aeiou]ese$/i,
      /deer$/i,
      /fish$/i,
      /measles$/i,
      /o[iu]s$/i,
      /pox$/i,
      /sheep$/i
    ].forEach(v.addUncountableRule), v;
  });
})(Sc);
const gn = Sc.exports, lt = {
  select: Ge,
  selectAll: Cr,
  scaleLinear: Fn,
  scaleOrdinal: vn,
  scaleSqrt: Vy,
  hierarchy: Na,
  partition: hv,
  arc: gc,
  path: ka,
  transition: Ln,
  interpolate: Dn,
  easeLinear: Or,
  easePolyIn: Er,
  easePolyOut: Tr,
  easePoly: Ce,
  easePolyInOut: Ce,
  easeQuadIn: Mr,
  easeQuadOut: Ar,
  easeQuad: Se,
  easeQuadInOut: Se,
  easeCubicIn: $r,
  easeCubicOut: Pr,
  easeCubic: pe,
  easeCubicInOut: pe,
  easeSinIn: Ir,
  easeSinOut: Rr,
  easeSin: Oe,
  easeSinInOut: Oe,
  easeExpIn: Nr,
  easeExpOut: kr,
  easeExp: Ae,
  easeExpInOut: Ae,
  easeCircleIn: Dr,
  easeCircleOut: Fr,
  easeCircle: $e,
  easeCircleInOut: $e,
  easeElasticIn: jr,
  easeElastic: Ee,
  easeElasticOut: Ee,
  easeElasticInOut: Wr,
  easeBackIn: Br,
  easeBackOut: He,
  easeBack: Pe,
  easeBackInOut: Pe,
  easeBounceIn: Lr,
  easeBounce: Ut,
  easeBounceOut: Ut,
  easeBounceInOut: zr,
  schemeCategory10: Xr,
  schemeAccent: Qr,
  schemeDark2: Jr,
  schemePaired: Kr,
  schemePastel1: Zr,
  schemePastel2: ti,
  schemeSet1: ei,
  schemeSet2: ni,
  schemeSet3: ri,
  schemeTableau10: ii
};
class L_ extends Hr {
  constructor(t, n, r) {
    super(t, n, r, {
      margin: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      },
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
      tooltip: {
        label: !1,
        suffix: !1,
        suffixPlural: !1
      },
      transition: {
        duration: 350,
        ease: "easeLinear"
      },
      charSpace: 8
    });
  }
  initChart() {
    this.getDimensions(), this.initChartFrame("sunburst"), this.cfg.tooltip.suffix && this.cfg.tooltip.suffixPlural && gn.addIrregularRule(this.cfg.tooltip.suffix, this.cfg.tooltip.suffixPlural), this.gcenter = this.g.append("g"), this.setChartDimension(), this.updateChart();
  }
  setChartDimension() {
    this.svg.attr("viewBox", `0 0 ${this.cfg.width + this.cfg.margin.left + this.cfg.margin.right} ${this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom}`).attr("width", this.cfg.width + this.cfg.margin.left + this.cfg.margin.right).attr("height", this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom), this.gcenter.attr("transform", `translate(${this.cfg.width / 2}, ${this.cfg.height / 2})`);
  }
  bindData() {
    const t = (n) => {
      const r = lt.hierarchy(n).sum((i) => i[this.cfg.value]).sort((i, a) => a.name - i.name);
      return lt.partition()(r);
    };
    this.hData = t(this.data[0]).descendants(), this.itemg = this.gcenter.selectAll(".chart__slice-group").data(this.hData, (n) => n.data[this.cfg.key]), this.transition = lt.transition("t").duration(this.cfg.transition.duration).ease(lt[this.cfg.transition.ease]);
  }
  setScales() {
    this.radius = Math.min(this.cfg.width, this.cfg.height) / 2, this.xScale = lt.scaleLinear().range([0, 2 * Math.PI]).clamp(!0), this.yScale = lt.scaleSqrt().range([this.radius * 0.1, this.radius]), this.arc = lt.arc().startAngle((t) => this.xScale(t.x0)).endAngle((t) => this.xScale(t.x1)).innerRadius((t) => Math.max(0, this.yScale(t.y0))).outerRadius((t) => Math.max(0, this.yScale(t.y1))), this.cfg.color.scheme && (this.cfg.color.scheme instanceof Array ? this.colorScale = lt.scaleOrdinal().range(this.cfg.color.scheme) : this.colorScale = lt.scaleOrdinal(lt[this.cfg.color.scheme]));
  }
  enterElements() {
    const t = this.itemg.enter().append("g").attr("class", "chart__slice-group chart__slice-group--sunburst clickable").on("click", (n) => {
      window.event.stopPropagation(), this.focusOn(n);
    });
    t.append("path").attr("class", "chart__slice chart__slice--sunburst").style("fill", (n) => this.colorElement(n.data)).on("mouseover", (n) => {
      const r = this.cfg.tooltip.suffixPlural ? gn(this.cfg.tooltip.suffix, n.value) : this.cfg.tooltip.suffix, i = this.cfg.tooltip.suffix ? `<div>${n.data[this.cfg.key]}: ${n.value} ${r}</div>` : `<div>${n.data[this.cfg.key]}: ${n.value}</div>`;
      this.tooltip.html(i).classed("active", !0);
    }).on("mouseout", () => {
      this.tooltip.classed("active", !1);
    }).on("mousemove", () => {
      this.tooltip.style("left", window.event.pageX - 28 + "px").style("top", window.event.pageY - 40 + "px");
    }).transition(this.transition).attrTween("d", (n) => {
      const r = lt.interpolate(0, n.y0), i = lt.interpolate(n.y0, n.y1), a = lt.interpolate(0, n.x0), o = lt.interpolate(0, n.x1);
      return (s) => (n.y0 = r(s), n.y1 = i(s), n.x0 = a(s), n.x1 = o(s), this.arc(n));
    }), t.append("path").attr("class", "chart__line--hidden").attr("id", (n, r) => `hiddenArc${r}`).attr("d", (n) => this.middleArcLine(n)), this.labels = t.append("text").attr("class", "chart__labels").attr("display", "none").attr("text-anchor", "middle").attr("dy", 2).attr("font-size", "10px").style("opacity", 0), this.labels.append("textPath").attr("startOffset", "50%").attr("xlink:href", (n, r) => `#hiddenArc${r}`).text((n) => n.data.name);
  }
  updateElements() {
    this.itemg.selectAll(".chart__slice").transition(this.transition).attrTween("d", (t) => {
      const n = this.hData.filter((s) => s.data.name === t.data.name)[0], r = lt.interpolate(t.y0, n.y0), i = lt.interpolate(t.y1, n.y1), a = lt.interpolate(t.x0, n.x0), o = lt.interpolate(t.x1, n.x1);
      return (s) => (n.y0 = r(s), n.y1 = i(s), n.x0 = a(s), n.x1 = o(s), this.arc(n));
    }).style("fill", (t) => this.colorElement(t.data)), this.labels.attr("display", (t) => this.textFits(t) ? null : "none").transition(this.transition).duration(this.cfg.transition.duration / 2).delay(this.cfg.transition.duration / 2).style("opacity", 1);
  }
  exitElements() {
    this.itemg.exit().transition(this.transition).style("opacity", 0).remove();
  }
  textFits(t) {
    if (!t.parent)
      return !1;
    const n = this.xScale(t.x1) - this.xScale(t.x0), r = Math.max(0, (this.yScale(t.y0) + this.yScale(t.y1)) / 2);
    return t.data[this.cfg.key].length * this.cfg.charSpace < r * n;
  }
  focusOn(t) {
    const n = this.hData.filter((i) => i.data.name === t.data.name)[0], r = this.svg.transition().duration(this.cfg.transition.duration).ease(lt[this.cfg.transition.ease]).tween("scale", () => {
      const i = lt.interpolate(this.xScale.domain(), [n.x0, n.x1]), a = lt.interpolate(this.yScale.domain(), [n.y0, 1]);
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
  middleArcLine(t) {
    const n = Math.PI / 2, r = [this.xScale(t.x0) - n, this.xScale(t.x1) - n], i = Math.max(0, (this.yScale(t.y0) + this.yScale(t.y1)) / 2), a = (r[1] + r[0]) / 2, o = a > 0 && a < Math.PI;
    o && r.reverse();
    const s = lt.path();
    return s.arc(0, 0, i, r[0], r[1], o), s.toString();
  }
}
const z_ = {
  name: "D3Sunburst",
  extends: qr,
  mounted() {
    this.chart = new L_(this.$refs.chart, JSON.parse(JSON.stringify(this.datum)), this.config);
  }
}, B_ = null, j_ = null;
var W_ = /* @__PURE__ */ ct(z_, B_, j_, !1, null, null, null, null);
const q_ = W_.exports, H_ = /* @__PURE__ */ ys($v), U_ = H_.dispatch, zi = Math.PI / 180, V_ = {
  archimedean: Cc,
  rectangular: n0
}, On = 1 << 11 >> 5, ar = 1 << 11;
var os = function() {
  var e = [256, 256], t = G_, n = Y_, r = X_, i = ss, a = ss, o = Q_, s = J_, c = Cc, u = [], g = 1 / 0, h = U_("word", "end"), p = null, l = Math.random, v = {}, _ = i0;
  v.canvas = function(d) {
    return arguments.length ? (_ = _e(d), v) : _;
  }, v.start = function() {
    var d = y(_()), b = r0((e[0] >> 5) * e[1]), $ = null, T = u.length, L = -1, j = [], z = u.map(function(D, w) {
      return D.text = t.call(this, D, w), D.font = n.call(this, D, w), D.style = i.call(this, D, w), D.weight = a.call(this, D, w), D.rotate = o.call(this, D, w), D.size = ~~r.call(this, D, w), D.padding = s.call(this, D, w), D;
    }).sort(function(D, w) {
      return w.size - D.size;
    });
    return p && clearInterval(p), p = setInterval(N, 0), N(), v;
    function N() {
      for (var D = Date.now(); Date.now() - D < g && ++L < T && p; ) {
        var w = z[L];
        w.x = e[0] * (l() + 0.5) >> 1, w.y = e[1] * (l() + 0.5) >> 1, K_(d, w, z, L), w.hasText && f(b, w, $) && (j.push(w), h.call("word", v, w), $ ? t0($, w) : $ = [{ x: w.x + w.x0, y: w.y + w.y0 }, { x: w.x + w.x1, y: w.y + w.y1 }], w.x -= e[0] >> 1, w.y -= e[1] >> 1);
      }
      L >= T && (v.stop(), h.call("end", v, j, $));
    }
  }, v.stop = function() {
    p && (clearInterval(p), p = null);
    for (const d of u)
      delete d.sprite;
    return v;
  };
  function y(d) {
    const b = d.getContext("2d", { willReadFrequently: !0 });
    d.width = d.height = 1;
    const $ = Math.sqrt(b.getImageData(0, 0, 1, 1).data.length >> 2);
    return d.width = (On << 5) / $, d.height = ar / $, b.fillStyle = b.strokeStyle = "red", { context: b, ratio: $ };
  }
  function f(d, b, $) {
    e[0], e[1];
    for (var T = b.x, L = b.y, j = Math.sqrt(e[0] * e[0] + e[1] * e[1]), z = c(e), N = l() < 0.5 ? 1 : -1, D = -N, w, S, C; (w = z(D += N)) && (S = ~~w[0], C = ~~w[1], !(Math.min(Math.abs(S), Math.abs(C)) >= j)); )
      if (b.x = T + S, b.y = L + C, !(b.x + b.x0 < 0 || b.y + b.y0 < 0 || b.x + b.x1 > e[0] || b.y + b.y1 > e[1]) && (!$ || e0(b, $)) && !Z_(b, d, e[0])) {
        for (var P = b.sprite, F = b.width >> 5, B = e[0] >> 5, H = b.x - (F << 4), X = H & 127, J = 32 - X, G = b.y1 - b.y0, at = (b.y + b.y0) * B + (H >> 5), nt, K = 0; K < G; K++) {
          nt = 0;
          for (var Q = 0; Q <= F; Q++)
            d[at + Q] |= nt << J | (Q < F ? (nt = P[K * F + Q]) >>> X : 0);
          at += B;
        }
        return !0;
      }
    return !1;
  }
  return v.timeInterval = function(d) {
    return arguments.length ? (g = d == null ? 1 / 0 : d, v) : g;
  }, v.words = function(d) {
    return arguments.length ? (u = d, v) : u;
  }, v.size = function(d) {
    return arguments.length ? (e = [+d[0], +d[1]], v) : e;
  }, v.font = function(d) {
    return arguments.length ? (n = _e(d), v) : n;
  }, v.fontStyle = function(d) {
    return arguments.length ? (i = _e(d), v) : i;
  }, v.fontWeight = function(d) {
    return arguments.length ? (a = _e(d), v) : a;
  }, v.rotate = function(d) {
    return arguments.length ? (o = _e(d), v) : o;
  }, v.text = function(d) {
    return arguments.length ? (t = _e(d), v) : t;
  }, v.spiral = function(d) {
    return arguments.length ? (c = V_[d] || d, v) : c;
  }, v.fontSize = function(d) {
    return arguments.length ? (r = _e(d), v) : r;
  }, v.padding = function(d) {
    return arguments.length ? (s = _e(d), v) : s;
  }, v.random = function(d) {
    return arguments.length ? (l = d, v) : l;
  }, v.on = function() {
    var d = h.on.apply(h, arguments);
    return d === h ? v : d;
  }, v;
};
function G_(e) {
  return e.text;
}
function Y_() {
  return "serif";
}
function ss() {
  return "normal";
}
function X_(e) {
  return Math.sqrt(e.value);
}
function Q_() {
  return (~~(random() * 6) - 3) * 30;
}
function J_() {
  return 1;
}
function K_(e, t, n, r) {
  if (!t.sprite) {
    var i = e.context, a = e.ratio;
    i.clearRect(0, 0, (On << 5) / a, ar / a);
    var o = 0, s = 0, c = 0, u = n.length;
    for (--r; ++r < u; ) {
      t = n[r], i.save(), i.font = t.style + " " + t.weight + " " + ~~((t.size + 1) / a) + "px " + t.font;
      const w = i.measureText(t.text), S = -Math.floor(w.width / 2);
      let C = (w.width + 1) * a, P = t.size << 1;
      if (t.rotate) {
        var g = Math.sin(t.rotate * zi), h = Math.cos(t.rotate * zi), p = C * h, l = C * g, v = P * h, _ = P * g;
        C = Math.max(Math.abs(p + _), Math.abs(p - _)) + 31 >> 5 << 5, P = ~~Math.max(Math.abs(l + v), Math.abs(l - v));
      } else
        C = C + 31 >> 5 << 5;
      if (P > c && (c = P), o + C >= On << 5 && (o = 0, s += c, c = 0), s + P >= ar)
        break;
      i.translate((o + (C >> 1)) / a, (s + (P >> 1)) / a), t.rotate && i.rotate(t.rotate * zi), i.fillText(t.text, S, 0), t.padding && (i.lineWidth = 2 * t.padding, i.strokeText(t.text, S, 0)), i.restore(), t.width = C, t.height = P, t.xoff = o, t.yoff = s, t.x1 = C >> 1, t.y1 = P >> 1, t.x0 = -t.x1, t.y0 = -t.y1, t.hasText = !0, o += C;
    }
    for (var y = i.getImageData(0, 0, (On << 5) / a, ar / a).data, f = []; --r >= 0; )
      if (t = n[r], !!t.hasText) {
        for (var d = t.width, b = d >> 5, $ = t.y1 - t.y0, T = 0; T < $ * b; T++)
          f[T] = 0;
        if (o = t.xoff, o == null)
          return;
        s = t.yoff;
        for (var L = 0, j = -1, z = 0; z < $; z++) {
          for (var T = 0; T < d; T++) {
            var N = b * z + (T >> 5), D = y[(s + z) * (On << 5) + (o + T) << 2] ? 1 << 31 - T % 32 : 0;
            f[N] |= D, L |= D;
          }
          L ? j = z : (t.y0++, $--, z--, s++);
        }
        t.y1 = t.y0 + j, t.sprite = f.slice(0, (t.y1 - t.y0) * b);
      }
  }
}
function Z_(e, t, n) {
  n >>= 5;
  for (var r = e.sprite, i = e.width >> 5, a = e.x - (i << 4), o = a & 127, s = 32 - o, c = e.y1 - e.y0, u = (e.y + e.y0) * n + (a >> 5), g, h = 0; h < c; h++) {
    g = 0;
    for (var p = 0; p <= i; p++)
      if ((g << s | (p < i ? (g = r[h * i + p]) >>> o : 0)) & t[u + p])
        return !0;
    u += n;
  }
  return !1;
}
function t0(e, t) {
  var n = e[0], r = e[1];
  t.x + t.x0 < n.x && (n.x = t.x + t.x0), t.y + t.y0 < n.y && (n.y = t.y + t.y0), t.x + t.x1 > r.x && (r.x = t.x + t.x1), t.y + t.y1 > r.y && (r.y = t.y + t.y1);
}
function e0(e, t) {
  return e.x + e.x1 > t[0].x && e.x + e.x0 < t[1].x && e.y + e.y1 > t[0].y && e.y + e.y0 < t[1].y;
}
function Cc(e) {
  var t = e[0] / e[1];
  return function(n) {
    return [t * (n *= 0.1) * Math.cos(n), n * Math.sin(n)];
  };
}
function n0(e) {
  var t = 4, n = t * e[0] / e[1], r = 0, i = 0;
  return function(a) {
    var o = a < 0 ? -1 : 1;
    switch (Math.sqrt(1 + 4 * o * a) - o & 3) {
      case 0:
        r += n;
        break;
      case 1:
        i += t;
        break;
      case 2:
        r -= n;
        break;
      default:
        i -= t;
        break;
    }
    return [r, i];
  };
}
function r0(e) {
  for (var t = [], n = -1; ++n < e; )
    t[n] = 0;
  return t;
}
function i0() {
  return document.createElement("canvas");
}
function _e(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const a0 = /* @__PURE__ */ wu({
  __proto__: null,
  default: os
}, [os]), en = {
  select: Ge,
  selectAll: Cr,
  scaleOrdinal: vn,
  scaleLinear: Fn,
  min: Zs,
  max: Ea,
  extent: Xm,
  transition: Ln,
  cloud: a0,
  easeLinear: Or,
  easePolyIn: Er,
  easePolyOut: Tr,
  easePoly: Ce,
  easePolyInOut: Ce,
  easeQuadIn: Mr,
  easeQuadOut: Ar,
  easeQuad: Se,
  easeQuadInOut: Se,
  easeCubicIn: $r,
  easeCubicOut: Pr,
  easeCubic: pe,
  easeCubicInOut: pe,
  easeSinIn: Ir,
  easeSinOut: Rr,
  easeSin: Oe,
  easeSinInOut: Oe,
  easeExpIn: Nr,
  easeExpOut: kr,
  easeExp: Ae,
  easeExpInOut: Ae,
  easeCircleIn: Dr,
  easeCircleOut: Fr,
  easeCircle: $e,
  easeCircleInOut: $e,
  easeElasticIn: jr,
  easeElastic: Ee,
  easeElasticOut: Ee,
  easeElasticInOut: Wr,
  easeBackIn: Br,
  easeBackOut: He,
  easeBack: Pe,
  easeBackInOut: Pe,
  easeBounceIn: Lr,
  easeBounce: Ut,
  easeBounceOut: Ut,
  easeBounceInOut: zr,
  schemeCategory10: Xr,
  schemeAccent: Qr,
  schemeDark2: Jr,
  schemePaired: Kr,
  schemePastel1: Zr,
  schemePastel2: ti,
  schemeSet1: ei,
  schemeSet2: ni,
  schemeSet3: ri,
  schemeTableau10: ii
};
class o0 extends Hr {
  constructor(t, n, r) {
    super(t, n, r, {
      margin: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      },
      key: "word",
      size: "size",
      value: "value",
      fontFamily: "Arial",
      angle: {
        steps: 2,
        start: 0,
        end: 90
      },
      color: {
        key: !1,
        keys: !1,
        scheme: !1,
        current: "#1f77b4",
        default: "#AAA",
        axis: "#000"
      },
      tooltip: {
        label: !1,
        suffix: !1,
        suffixPlural: !1
      },
      transition: {
        duration: 500,
        ease: "easeLinear"
      }
    });
  }
  initChart() {
    this.getDimensions(), this.initChartFrame("wordscloud"), this.cfg.tooltip.suffix && this.cfg.tooltip.suffixPlural && gn.addIrregularRule(this.cfg.tooltip.suffix, this.cfg.tooltip.suffixPlural), this.gcenter = this.g.append("g"), this.tData = [], this.setChartDimension(), this.updateChart();
  }
  computeData() {
    en.cloud().size([this.cfg.width, this.cfg.height]).words(this.data.map((t) => ({
      text: t[this.cfg.key],
      size: t[this.cfg.size],
      value: t[this.cfg.value],
      color: this.colorElement(t, "text")
    }))).rotate(() => this.wordsAngle(this.cfg.angle)).font(this.cfg.fontFamily).fontSize((t) => t.size * this.fontScale).on("end", (t) => {
      this.data.length !== t.length && this.fontScale > 0 ? (this.fontScale = this.fontScale - 0.1, this.computeData()) : (this.renderEnd = !0, this.tData = t);
    }).start();
  }
  setChartDimension() {
    this.svg.attr("viewBox", `0 0 ${this.cfg.width + this.cfg.margin.left + this.cfg.margin.right} ${this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom}`).attr("width", this.cfg.width + this.cfg.margin.left + this.cfg.margin.right).attr("height", this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom), this.gcenter.attr("transform", `translate(${this.cfg.width / 2}, ${this.cfg.height / 2})`), this.fontScale = 1, this.renderEnd = !1;
  }
  bindData() {
    this.transition = en.transition("t").duration(this.cfg.transition.duration).ease(en[this.cfg.transition.ease]), this.wordgroup = this.gcenter.selectAll(".chart__word-group").data(this.tData, (t) => t.text);
  }
  setScales() {
    this.cfg.color.scheme instanceof Array ? this.colorScale = en.scaleOrdinal().range(this.cfg.color.scheme) : typeof this.cfg.color.scheme == "string" && (this.colorScale = en.scaleOrdinal(en[this.cfg.color.scheme]));
  }
  enterElements() {
    if (!this.renderEnd)
      return;
    this.wordgroup.enter().append("g").attr("class", "chart__word-group chart__word-group--wordscloud").append("text").style("font-size", (n) => n.size + "px").style("font-family", (n) => n.font).attr("text-anchor", "middle").attr("fill", (n) => n.color).attr("transform", (n) => `translate(${[n.x, n.y]})rotate(${n.rotate})`).on("mouseover", (n) => {
      const r = this.cfg.tooltip.suffixPlural ? gn(this.cfg.tooltip.suffix, n.value) : this.cfg.tooltip.suffix, i = this.cfg.tooltip.suffix ? `<div>${n.text}: ${n.value} ${r}</div>` : `<div>${n.text}: ${n.value}</div>`;
      this.tooltip.html(i).classed("active", !0);
    }).on("mouseout", () => {
      this.tooltip.classed("active", !1);
    }).on("mousemove", () => {
      this.tooltip.style("left", window.event.pageX - 28 + "px").style("top", window.event.pageY - 40 + "px");
    }).text((n) => n.text);
  }
  updateElements() {
    !this.renderEnd || this.wordgroup.selectAll("text").data(this.tData, (t) => t.text).transition(this.transition).attr("fill", (t) => this.colorElement(t, "text")).style("font-size", (t) => t.size + "px").attr("transform", (t) => `translate(${[t.x, t.y]})rotate(${t.rotate})`);
  }
  exitElements() {
    !this.renderEnd || this.wordgroup.exit().transition(this.transition).style("opacity", 0).remove();
  }
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
  randomInt(t, n) {
    const r = Math.ceil(t), i = Math.floor(n);
    return Math.floor(Math.random() * (i - r + 1)) + r;
  }
}
const s0 = {
  name: "D3WordsCloud",
  extends: qr,
  mounted() {
    this.chart = new o0(this.$refs.chart, JSON.parse(JSON.stringify(this.datum)), this.config);
  }
}, c0 = null, u0 = null;
var l0 = /* @__PURE__ */ ct(s0, c0, u0, !1, null, null, null, null);
const f0 = l0.exports;
var Bi = Array.prototype.slice;
function h0(e) {
  return e;
}
var ji = 1, Wi = 2, da = 3, Mn = 4, cs = 1e-6;
function d0(e) {
  return "translate(" + (e + 0.5) + ",0)";
}
function p0(e) {
  return "translate(0," + (e + 0.5) + ")";
}
function g0(e) {
  return function(t) {
    return +e(t);
  };
}
function m0(e) {
  var t = Math.max(0, e.bandwidth() - 1) / 2;
  return e.round() && (t = Math.round(t)), function(n) {
    return +e(n) + t;
  };
}
function y0() {
  return !this.__axis;
}
function Oc(e, t) {
  var n = [], r = null, i = null, a = 6, o = 6, s = 3, c = e === ji || e === Mn ? -1 : 1, u = e === Mn || e === Wi ? "x" : "y", g = e === ji || e === da ? d0 : p0;
  function h(p) {
    var l = r == null ? t.ticks ? t.ticks.apply(t, n) : t.domain() : r, v = i == null ? t.tickFormat ? t.tickFormat.apply(t, n) : h0 : i, _ = Math.max(a, 0) + s, y = t.range(), f = +y[0] + 0.5, d = +y[y.length - 1] + 0.5, b = (t.bandwidth ? m0 : g0)(t.copy()), $ = p.selection ? p.selection() : p, T = $.selectAll(".domain").data([null]), L = $.selectAll(".tick").data(l, t).order(), j = L.exit(), z = L.enter().append("g").attr("class", "tick"), N = L.select("line"), D = L.select("text");
    T = T.merge(T.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), L = L.merge(z), N = N.merge(z.append("line").attr("stroke", "currentColor").attr(u + "2", c * a)), D = D.merge(z.append("text").attr("fill", "currentColor").attr(u, c * _).attr("dy", e === ji ? "0em" : e === da ? "0.71em" : "0.32em")), p !== $ && (T = T.transition(p), L = L.transition(p), N = N.transition(p), D = D.transition(p), j = j.transition(p).attr("opacity", cs).attr("transform", function(w) {
      return isFinite(w = b(w)) ? g(w) : this.getAttribute("transform");
    }), z.attr("opacity", cs).attr("transform", function(w) {
      var S = this.parentNode.__axis;
      return g(S && isFinite(S = S(w)) ? S : b(w));
    })), j.remove(), T.attr("d", e === Mn || e == Wi ? o ? "M" + c * o + "," + f + "H0.5V" + d + "H" + c * o : "M0.5," + f + "V" + d : o ? "M" + f + "," + c * o + "V0.5H" + d + "V" + c * o : "M" + f + ",0.5H" + d), L.attr("opacity", 1).attr("transform", function(w) {
      return g(b(w));
    }), N.attr(u + "2", c * a), D.attr(u, c * _).text(v), $.filter(y0).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === Wi ? "start" : e === Mn ? "end" : "middle"), $.each(function() {
      this.__axis = b;
    });
  }
  return h.scale = function(p) {
    return arguments.length ? (t = p, h) : t;
  }, h.ticks = function() {
    return n = Bi.call(arguments), h;
  }, h.tickArguments = function(p) {
    return arguments.length ? (n = p == null ? [] : Bi.call(p), h) : n.slice();
  }, h.tickValues = function(p) {
    return arguments.length ? (r = p == null ? null : Bi.call(p), h) : r && r.slice();
  }, h.tickFormat = function(p) {
    return arguments.length ? (i = p, h) : i;
  }, h.tickSize = function(p) {
    return arguments.length ? (a = o = +p, h) : a;
  }, h.tickSizeInner = function(p) {
    return arguments.length ? (a = +p, h) : a;
  }, h.tickSizeOuter = function(p) {
    return arguments.length ? (o = +p, h) : o;
  }, h.tickPadding = function(p) {
    return arguments.length ? (s = +p, h) : s;
  }, h;
}
function v0(e) {
  return Oc(da, e);
}
function _0(e) {
  return Oc(Mn, e);
}
const jt = {
  select: Ge,
  selectAll: Cr,
  scaleBand: ec,
  scaleLinear: Fn,
  scaleOrdinal: vn,
  max: Ea,
  transition: Ln,
  axisBottom: v0,
  axisLeft: _0,
  easeLinear: Or,
  easePolyIn: Er,
  easePolyOut: Tr,
  easePoly: Ce,
  easePolyInOut: Ce,
  easeQuadIn: Mr,
  easeQuadOut: Ar,
  easeQuad: Se,
  easeQuadInOut: Se,
  easeCubicIn: $r,
  easeCubicOut: Pr,
  easeCubic: pe,
  easeCubicInOut: pe,
  easeSinIn: Ir,
  easeSinOut: Rr,
  easeSin: Oe,
  easeSinInOut: Oe,
  easeExpIn: Nr,
  easeExpOut: kr,
  easeExp: Ae,
  easeExpInOut: Ae,
  easeCircleIn: Dr,
  easeCircleOut: Fr,
  easeCircle: $e,
  easeCircleInOut: $e,
  easeElasticIn: jr,
  easeElastic: Ee,
  easeElasticOut: Ee,
  easeElasticInOut: Wr,
  easeBackIn: Br,
  easeBackOut: He,
  easeBack: Pe,
  easeBackInOut: Pe,
  easeBounceIn: Lr,
  easeBounce: Ut,
  easeBounceOut: Ut,
  easeBounceInOut: zr,
  schemeCategory10: Xr,
  schemeAccent: Qr,
  schemeDark2: Jr,
  schemePaired: Kr,
  schemePastel1: Zr,
  schemePastel2: ti,
  schemeSet1: ei,
  schemeSet2: ni,
  schemeSet3: ri,
  schemeTableau10: ii
}, he = "Texto de referencia", be = "Texto escaneado";
class b0 extends Hr {
  constructor(t, n, r) {
    super(t, n, r, {
      margin: {
        top: 10,
        right: 30,
        bottom: 20,
        left: 40
      },
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
      tooltip: {
        label: !1,
        suffix: !1,
        suffixPlural: !1
      },
      keys: {
        [be]: be,
        [he]: he
      },
      transition: {
        duration: 350,
        ease: "easeLinear"
      }
    });
  }
  initChart() {
    this.getDimensions(), this.initChartFrame("barchart"), this.cfg.tooltip.suffix && this.cfg.tooltip.suffixPlural && gn.addIrregularRule(this.cfg.tooltip.suffix, this.cfg.tooltip.suffixPlural), this.xScale = jt.scaleBand(), this.xScaleInn = jt.scaleBand(), this.yScale = jt.scaleLinear(), this.axisg = this.g.append("g").attr("class", "chart__axis chart__axis--barchart"), this.yGrid = this.axisg.append("g").attr("class", "chart__grid chart__grid--y chart__grid--barchart"), this.xAxis = this.axisg.append("g").attr("class", "chart__axis-x chart__axis-x--barchart"), this.cfg.axis.yTitle && (this.yAxisTitle = this.axisg.append("text").attr("class", "chart__axis-title chart__axis-title--barchart").attr("transform", "rotate(-90)").style("text-anchor", "middle")), this.setChartDimension(), this.updateChart();
  }
  setScales() {
    this.xScale.rangeRound(this.cfg.orientation !== "horizontal" ? [0, this.cfg.width] : [0, this.cfg.height]).paddingInner(0.1).domain(this.data.map((i) => i[this.cfg.key])), this.xScaleInn.domain(this.cfg.values).rangeRound([0, this.xScale.bandwidth()]).paddingInner(0.05);
    const t = this.calculateBiggestNumber();
    this.yScale.rangeRound(this.cfg.orientation !== "horizontal" ? [0, this.cfg.height] : [this.cfg.width, 0]).domain([t, 0]), this.cfg.color.scheme instanceof Array ? this.colorScale = jt.scaleOrdinal().range(this.cfg.color.scheme) : typeof this.cfg.color.scheme == "string" && (this.colorScale = jt.scaleOrdinal(jt[this.cfg.color.scheme]));
    const n = this.cfg.orientation !== "horizontal" ? jt.axisLeft(this.yScale).tickSize(-this.cfg.width).ticks(this.cfg.axis.yTicks, this.cfg.axis.yFormat) : jt.axisBottom(this.yScale).tickSize(-this.cfg.height).ticks(this.cfg.axis.yTicks, this.cfg.axis.yFormat), r = this.cfg.orientation !== "horizontal" ? jt.axisBottom(this.xScale) : jt.axisLeft(this.xScale);
    this.yGrid.attr("transform", this.cfg.orientation !== "horizontal" ? "translate(0,0)" : `translate(0,${this.cfg.height})`).transition(this.transition).call(n), this.xAxis.attr("transform", this.cfg.orientation !== "horizontal" ? `translate(0,${this.cfg.height})` : "translate(0,0)").call(r);
  }
  setChartDimension() {
    this.svg.attr("viewBox", `0 0 ${this.cfg.width + this.cfg.margin.left + this.cfg.margin.right} ${this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom}`).attr("width", this.cfg.width + this.cfg.margin.left + this.cfg.margin.right).attr("height", this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom), this.cfg.axis.yTitle && this.yAxisTitle.attr("y", -this.cfg.margin.left + 10).attr("x", -this.cfg.height / 2).text(this.cfg.axis.yTitle), this.cfg.labelRotation !== 0 && this.xAxis.selectAll("text").attr("y", Math.cos(this.cfg.labelRotation * Math.PI / 180) * 9).attr("x", Math.sin(this.cfg.labelRotation * Math.PI / 180) * 9).attr("dy", ".35em").attr("transform", `rotate(${this.cfg.labelRotation})`).style("text-anchor", "start");
  }
  bindData() {
    this.transition = jt.transition("t").duration(this.cfg.transition.duration).ease(jt[this.cfg.transition.ease]), this.g.selectAll(".chart__bar-group").remove(), this.itemg = this.g.selectAll(".chart__bar-group").data(this.data, (t) => t[this.cfg.key]);
  }
  hasComparissionData() {
    return this.data.some((t) => t[he] > 0);
  }
  calculateTotals() {
    const t = this.data.reduce((r, i) => r + i[he], 0), n = this.data.reduce((r, i) => r + i[be], 0);
    return {
      [he]: t,
      [be]: n
    };
  }
  calculateMaximums() {
    const t = this.data.reduce((r, i) => this.getBiggerNumber(r, i[he]), 0), n = this.data.reduce((r, i) => this.getBiggerNumber(r, i[be]), 0);
    return {
      [he]: t,
      [be]: n
    };
  }
  getBiggerNumber(t, n) {
    return t > n ? t : n;
  }
  calculateBiggestNumber() {
    const t = this.calculateTotals(), n = this.calculateMaximums(), r = n[he], i = t[he], a = n[be], o = t[be], s = this.calculatePercentage(r, i), c = this.calculatePercentage(a, o), u = this.getBiggerNumber(s, c);
    return this.roundToNextStep(u);
  }
  roundToNextStep(t) {
    return Math.ceil(t / 10) * 10;
  }
  calculatePercentage(t, n) {
    return t * 100 / n;
  }
  enterElements() {
    const t = this.calculateTotals();
    this.itemg.enter().append("g").attr("class", "chart__bar-group chart__bar-group--barchart").attr("transform", (r) => this.cfg.orientation !== "horizontal" ? `translate(${this.xScale(r[this.cfg.key])},0)` : `translate(0,${this.xScale(r[this.cfg.key])})`).selectAll(".chart__bar").data((r) => this.cfg.values.map((i) => {
      const a = {
        ...r
      };
      return a[this.cfg.key] = r[this.cfg.key], a;
    })).enter().append("rect").attr("class", "chart__bar chart__bar--barchart").classed("chart__bar--current", (r) => this.cfg.currentKey && r[this.cfg.key] === this.cfg.currentKey).attr("x", (r, i) => this.cfg.orientation !== "horizontal" ? this.xScaleInn(this.cfg.values[i % this.cfg.values.length]) : 0).attr("y", (r, i) => this.cfg.orientation !== "horizontal" ? this.cfg.height : this.xScaleInn(this.cfg.values[i % this.cfg.values.length])).attr("height", 0).attr("width", 0).on("mouseover", (r, i) => {
      const a = this.cfg.values[i % this.cfg.values.length], o = this.cfg.tooltip.suffixPlural ? gn(this.cfg.tooltip.suffix, r[a]) : this.cfg.tooltip.suffix, s = this.cfg.keys[a], c = this.calculatePercentage(r[a], t[a]).toFixed(2), u = this.cfg.tooltip.suffix ? `<div>${s}: ${c}% ${o}</div>` : `<div>${s}: ${c}%</div>`;
      this.tooltip.html(u).classed("active", !0);
    }).on("mouseout", () => {
      this.tooltip.classed("active", !1);
    }).on("mousemove", () => {
      this.tooltip.style("left", window.event.pageX - 28 + "px").style("top", window.event.pageY - 40 + "px");
    });
  }
  updateElements() {
    const t = this.calculateTotals();
    this.itemg.transition(this.transition).attr("transform", (n) => this.cfg.orientation !== "horizontal" ? `translate(${this.xScale(n[this.cfg.key])},0)` : `translate(0,${this.xScale(n[this.cfg.key])})`), this.g.selectAll(".chart__bar").transition(this.transition).attr("fill", (n, r) => this.colorElement(n, this.cfg.values[r % this.cfg.values.length])).attr("opacity", (n, r) => r % 2 == 1 && this.hasComparissionData() ? 0.6 : 1).attr("x", (n, r) => this.cfg.orientation !== "horizontal" ? this.xScaleInn(this.cfg.values[r % this.cfg.values.length]) : 0).attr("y", (n, r) => this.cfg.orientation !== "horizontal" ? this.yScale(+n[this.cfg.values[r % this.cfg.values.length]]) : this.xScaleInn(this.cfg.values[r % this.cfg.values.length])).attr("width", (n, r) => {
      const i = this.cfg.values[r % this.cfg.values.length], a = this.calculatePercentage(n[i], t[i]);
      return this.cfg.orientation !== "horizontal" ? this.xScaleInn.bandwidth() : this.yScale(a);
    }).attr("height", (n, r) => this.cfg.orientation !== "horizontal" ? this.cfg.height - this.yScale(+n[this.cfg.values[r % this.cfg.values.length]]) : this.xScaleInn.bandwidth());
  }
  exitElements() {
    this.itemg.exit().transition(this.transition).style("opacity", 0).remove();
  }
}
const x0 = {
  name: "D3BarChart",
  extends: qr,
  mounted() {
    this.chart = new b0(this.$refs.chart, JSON.parse(JSON.stringify(this.datum)), this.config);
  }
}, w0 = null, S0 = null;
var C0 = /* @__PURE__ */ ct(x0, w0, S0, !1, null, null, null, null);
const O0 = C0.exports, bt = {
  select: Ge,
  selectAll: Cr,
  scaleLinear: Fn,
  scaleOrdinal: vn,
  max: Ea,
  min: Zs,
  sum: Zm,
  transition: Ln,
  pie: Cv,
  arc: gc,
  interpolate: Dn,
  easeLinear: Or,
  easePolyIn: Er,
  easePolyOut: Tr,
  easePoly: Ce,
  easePolyInOut: Ce,
  easeQuadIn: Mr,
  easeQuadOut: Ar,
  easeQuad: Se,
  easeQuadInOut: Se,
  easeCubicIn: $r,
  easeCubicOut: Pr,
  easeCubic: pe,
  easeCubicInOut: pe,
  easeSinIn: Ir,
  easeSinOut: Rr,
  easeSin: Oe,
  easeSinInOut: Oe,
  easeExpIn: Nr,
  easeExpOut: kr,
  easeExp: Ae,
  easeExpInOut: Ae,
  easeCircleIn: Dr,
  easeCircleOut: Fr,
  easeCircle: $e,
  easeCircleInOut: $e,
  easeElasticIn: jr,
  easeElastic: Ee,
  easeElasticOut: Ee,
  easeElasticInOut: Wr,
  easeBackIn: Br,
  easeBackOut: He,
  easeBack: Pe,
  easeBackInOut: Pe,
  easeBounceIn: Lr,
  easeBounce: Ut,
  easeBounceOut: Ut,
  easeBounceInOut: zr,
  schemeCategory10: Xr,
  schemeAccent: Qr,
  schemeDark2: Jr,
  schemePaired: Kr,
  schemePastel1: Zr,
  schemePastel2: ti,
  schemeSet1: ei,
  schemeSet2: ni,
  schemeSet3: ri,
  schemeTableau10: ii
};
class M0 extends Hr {
  constructor(t, n, r) {
    super(t, n, r, {
      margin: {
        top: 40,
        right: 20,
        bottom: 40,
        left: 20
      },
      key: "",
      value: "value",
      color: {
        key: !1,
        keys: !1,
        scheme: !1,
        current: "#1f77b4",
        default: "#AAA",
        axis: "#000"
      },
      radius: {
        inner: !1,
        outter: !1,
        padding: 0,
        round: 0
      },
      transition: {
        duration: 350,
        ease: "easeLinear"
      }
    });
  }
  initChart() {
    if (this.getDimensions(), this.initChartFrame("sliceschart"), this.cScale = bt.scaleOrdinal(), this.rScale = bt.scaleLinear(), this.arc = bt.arc(), this.pie = bt.pie().sort(null).value(() => 1).padAngle(this.cfg.radius.padding), this.cfg.radius && this.cfg.radius.inner) {
      const t = this.cfg.radius.outter ? this.cfg.radius.outter : Math.min(this.cfg.width, this.cfg.height) / 2;
      this.cfg.radius.relation = this.cfg.radius.inner ? this.cfg.radius.inner / t : 0;
    }
    this.gcenter = this.g.append("g"), this.setChartDimension(), this.updateChart(), this.centerText = this.g.append("text").attr("x", this.cfg.width / 2).attr("y", this.cfg.height / 2 + 10).attr("text-anchor", "middle");
  }
  setChartDimension() {
    this.svg.attr("viewBox", `0 0 ${this.cfg.width + this.cfg.margin.left + this.cfg.margin.right} ${this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom}`).attr("width", this.cfg.width + this.cfg.margin.left + this.cfg.margin.right).attr("height", this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom), this.gcenter.attr("transform", `translate(${this.cfg.width / 2}, ${this.cfg.height / 2})`);
  }
  bindData() {
    this.itemg = this.gcenter.selectAll(".chart__slice-group").data(this.pie(this.data), (t) => t.data[this.cfg.key]), this.transition = bt.transition("t").duration(this.cfg.transition.duration).ease(bt[this.cfg.transition.ease]);
  }
  setScales() {
    this.cfg.radius.outter = this.cfg.radius && this.cfg.radius.outter ? this.cfg.radius.outter : Math.min(this.cfg.width, this.cfg.height) / 2, this.inRadius = this.cfg.radius && this.cfg.radius.inner ? this.cfg.radius.inner : 0, this.cfg.radius.relation && (this.inRadius = this.cfg.radius.outter * this.cfg.radius.relation), this.arc = bt.arc().outerRadius(this.cfg.radius.outter).innerRadius(this.inRadius).cornerRadius(this.cfg.radius.round);
    let t = bt.max(this.data, (n) => n[this.cfg.value]);
    t == 0 && (t = 1), this.rScale.range([this.inRadius, this.cfg.radius.outter]).domain([0, t]), this.cfg.color.scheme && (this.cfg.color.scheme instanceof Array ? this.colorScale = bt.scaleOrdinal().domain(this.data.map((n) => n[this.cfg.key])).range(this.cfg.color.scheme) : this.colorScale = bt.scaleOrdinal(bt[this.cfg.color.scheme]).domain(this.data.map((n) => n[this.cfg.key])));
  }
  enterElements() {
    const t = this.itemg.enter().append("g").attr("class", "chart__slice-group chart__slice-group--sliceschart");
    t.append("path").attr("class", "chart__slice chart__slice--sliceschart").on("mouseover", (n, r) => {
      const i = bt.sum(this.data, (s) => s.value), a = n.data.value > 0 && i > 0 ? Math.round(n.data.value / i * 100) : 0, o = n.data[this.cfg.key];
      this.centerText.text(`${o}: ${a}%`);
    }).on("mouseout", () => {
      this.centerText.text("");
    }).transition(this.transition).delay((n, r) => r * this.cfg.transition.duration).attrTween("d", (n) => {
      const r = bt.interpolate(n.startAngle + 0.1, n.endAngle);
      return (i) => (n.endAngle = r(i), this.arc(n));
    }).style("fill", (n) => this.cfg.color.default).style("opacity", 1), t.append("path").attr("class", "chart__slice chart__slice--sliceschart").transition(this.transition).delay((n, r) => r * this.cfg.transition.duration).attrTween("d", (n) => {
      const r = bt.interpolate(n.startAngle + 0.1, n.endAngle), i = bt.arc().outerRadius(this.rScale(n.data[this.cfg.value])).innerRadius(this.inRadius).cornerRadius(this.cfg.radius.round);
      return (a) => (n.endAngle = r(a), i(n));
    }).style("fill", (n) => this.colorElement(n.data)).style("pointer-events", "none").style("opacity", 1);
  }
  updateElements() {
  }
  exitElements() {
    this.itemg.exit().transition(this.transition).style("opacity", 0).remove();
  }
  midAngle(t) {
    return t.startAngle + (t.endAngle - t.startAngle) / 2;
  }
  arcTween(t) {
    var n = bt.interpolate(this._current, t);
    return this._current = n(0), (r) => this.arc(n(r));
  }
}
const A0 = {
  name: "D3SlicesChart",
  extends: qr,
  mounted() {
    this.chart = new M0(this.$refs.chart, JSON.parse(JSON.stringify(this.datum)), this.config);
  }
}, $0 = null, P0 = null;
var E0 = /* @__PURE__ */ ct(A0, $0, P0, !1, null, null, null, null);
const T0 = E0.exports, I0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TipiResults: Lf,
  TipiMessage: qf,
  TipiCsvDownload: ah,
  TipiCongressLink: lh,
  TipiHeader: gh,
  TipiNavbar: bh,
  TipiDeputy: kh,
  TipiText: Bh,
  TipiTopics: Dp,
  TipiInitiativeMeta: ps,
  TipiNeuron: pm,
  TipiTopicCard: _m,
  TipiTopicLink: Cm,
  TipiTwoCircles: Pm,
  TipiSplash: Nm,
  TipiIcon: Te,
  TipiInitiativeCard: gs,
  TipiTopicPill: fs,
  TipiLoader: ms,
  TipiBarchart: zm,
  D3Sunburst: q_,
  D3WordsCloud: f0,
  D3BarChart: O0,
  D3SlicesChart: T0,
  Utils: Au
}, Symbol.toStringTag, { value: "Module" }));
let R0 = (e) => {
  Object.values(I0).forEach((t) => {
    e.use(t);
  });
};
R0.version = "__VERSION__";
export {
  R0 as default
};
