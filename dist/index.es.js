(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:p-1{padding:calc(var(--tw-spacing)*1)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-8{padding-inline:calc(var(--tw-spacing)*8)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const ho = {
  display_type: "canvas",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 1005, height: 1005 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-4 tw:px-1 tw:sm:p-0 tw:m-8"
};
function an(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function po(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Ur(t) {
  let n, e, r;
  t.length !== 2 ? (n = an, e = (s, u) => an(t(s), u), r = (s, u) => t(s) - u) : (n = t === an || t === po ? t : go, e = t, r = t);
  function i(s, u, l = 0, f = s.length) {
    if (l < f) {
      if (n(u, u) !== 0) return f;
      do {
        const c = l + f >>> 1;
        e(s[c], u) < 0 ? l = c + 1 : f = c;
      } while (l < f);
    }
    return l;
  }
  function o(s, u, l = 0, f = s.length) {
    if (l < f) {
      if (n(u, u) !== 0) return f;
      do {
        const c = l + f >>> 1;
        e(s[c], u) <= 0 ? l = c + 1 : f = c;
      } while (l < f);
    }
    return l;
  }
  function a(s, u, l = 0, f = s.length) {
    const c = i(s, u, l, f - 1);
    return c > l && r(s[c - 1], u) > -r(s[c], u) ? c - 1 : c;
  }
  return { left: i, center: a, right: o };
}
function go() {
  return 0;
}
function yo(t) {
  return t === null ? NaN : +t;
}
const _o = Ur(an), mo = _o.right;
Ur(yo).center;
class Ye extends Map {
  constructor(n, e = bo) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), n != null) for (const [r, i] of n) this.set(r, i);
  }
  get(n) {
    return super.get(Ke(this, n));
  }
  has(n) {
    return super.has(Ke(this, n));
  }
  set(n, e) {
    return super.set(vo(this, n), e);
  }
  delete(n) {
    return super.delete(wo(this, n));
  }
}
function Ke({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function vo({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function wo({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) && (e = t.get(r), t.delete(r)), e;
}
function bo(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const xo = Math.sqrt(50), Mo = Math.sqrt(10), $o = Math.sqrt(2);
function cn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= xo ? 10 : o >= Mo ? 5 : o >= $o ? 2 : 1;
  let s, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / a, s = Math.round(t * l), u = Math.round(n * l), s / l < t && ++s, u / l > n && --u, l = -l) : (l = Math.pow(10, i) * a, s = Math.round(t / l), u = Math.round(n / l), s * l < t && ++s, u * l > n && --u), u < s && 0.5 <= e && e < 2 ? cn(t, n, e * 2) : [s, u, l];
}
function Ao(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? cn(n, t, e) : cn(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, u = new Array(s);
  if (r)
    if (a < 0) for (let l = 0; l < s; ++l) u[l] = (o - l) / -a;
    else for (let l = 0; l < s; ++l) u[l] = (o - l) * a;
  else if (a < 0) for (let l = 0; l < s; ++l) u[l] = (i + l) / -a;
  else for (let l = 0; l < s; ++l) u[l] = (i + l) * a;
  return u;
}
function Jn(t, n, e) {
  return n = +n, t = +t, e = +e, cn(t, n, e)[2];
}
function To(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Jn(n, t, e) : Jn(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Jt(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function So(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
var Po = { value: () => {
} };
function be() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new sn(e);
}
function sn(t) {
  this._ = t;
}
function Eo(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
sn.prototype = be.prototype = {
  constructor: sn,
  on: function(t, n) {
    var e = this._, r = Eo(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = No(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = Ve(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Ve(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new sn(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function No(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Ve(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Po, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Qn = "http://www.w3.org/1999/xhtml";
const We = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Qn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Mn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), We.hasOwnProperty(n) ? { space: We[n], local: t } : t;
}
function Oo(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Qn && n.documentElement.namespaceURI === Qn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function zo(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Yr(t) {
  var n = Mn(t);
  return (n.local ? zo : Oo)(n);
}
function Co() {
}
function xe(t) {
  return t == null ? Co : function() {
    return this.querySelector(t);
  };
}
function Io(t) {
  typeof t != "function" && (t = xe(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), u, l, f = 0; f < a; ++f)
      (u = o[f]) && (l = t.call(u, u.__data__, f, o)) && ("__data__" in u && (l.__data__ = u.__data__), s[f] = l);
  return new k(r, this._parents);
}
function ko(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Ro() {
  return [];
}
function Kr(t) {
  return t == null ? Ro : function() {
    return this.querySelectorAll(t);
  };
}
function Fo(t) {
  return function() {
    return ko(t.apply(this, arguments));
  };
}
function Do(t) {
  typeof t == "function" ? t = Fo(t) : t = Kr(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
  return new k(r, i);
}
function Vr(t) {
  return function() {
    return this.matches(t);
  };
}
function Wr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var Lo = Array.prototype.find;
function Ho(t) {
  return function() {
    return Lo.call(this.children, t);
  };
}
function qo() {
  return this.firstElementChild;
}
function Bo(t) {
  return this.select(t == null ? qo : Ho(typeof t == "function" ? t : Wr(t)));
}
var Xo = Array.prototype.filter;
function Go() {
  return Array.from(this.children);
}
function Uo(t) {
  return function() {
    return Xo.call(this.children, t);
  };
}
function Yo(t) {
  return this.selectAll(t == null ? Go : Uo(typeof t == "function" ? t : Wr(t)));
}
function Ko(t) {
  typeof t != "function" && (t = Vr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new k(r, this._parents);
}
function Zr(t) {
  return new Array(t.length);
}
function Vo() {
  return new k(this._enter || this._groups.map(Zr), this._parents);
}
function hn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
hn.prototype = {
  constructor: hn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Wo(t) {
  return function() {
    return t;
  };
}
function Zo(t, n, e, r, i, o) {
  for (var a = 0, s, u = n.length, l = o.length; a < l; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new hn(t, o[a]);
  for (; a < u; ++a)
    (s = n[a]) && (i[a] = s);
}
function Jo(t, n, e, r, i, o, a) {
  var s, u, l = /* @__PURE__ */ new Map(), f = n.length, c = o.length, h = new Array(f), d;
  for (s = 0; s < f; ++s)
    (u = n[s]) && (h[s] = d = a.call(u, u.__data__, s, n) + "", l.has(d) ? i[s] = u : l.set(d, u));
  for (s = 0; s < c; ++s)
    d = a.call(t, o[s], s, o) + "", (u = l.get(d)) ? (r[s] = u, u.__data__ = o[s], l.delete(d)) : e[s] = new hn(t, o[s]);
  for (s = 0; s < f; ++s)
    (u = n[s]) && l.get(h[s]) === u && (i[s] = u);
}
function Qo(t) {
  return t.__data__;
}
function jo(t, n) {
  if (!arguments.length) return Array.from(this, Qo);
  var e = n ? Jo : Zo, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Wo(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var f = r[l], c = i[l], h = c.length, d = ta(t.call(f, f && f.__data__, l, r)), p = d.length, _ = s[l] = new Array(p), b = a[l] = new Array(p), y = u[l] = new Array(h);
    e(f, c, _, b, y, d, n);
    for (var M = 0, A = 0, g, v; M < p; ++M)
      if (g = _[M]) {
        for (M >= A && (A = M + 1); !(v = b[A]) && ++A < p; ) ;
        g._next = v || null;
      }
  }
  return a = new k(a, r), a._enter = s, a._exit = u, a;
}
function ta(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function na() {
  return new k(this._exit || this._groups.map(Zr), this._parents);
}
function ea(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function ra(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var l = e[u], f = r[u], c = l.length, h = s[u] = new Array(c), d, p = 0; p < c; ++p)
      (d = l[p] || f[p]) && (h[p] = d);
  for (; u < i; ++u)
    s[u] = e[u];
  return new k(s, this._parents);
}
function ia() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function oa(t) {
  t || (t = aa);
  function n(c, h) {
    return c && h ? t(c.__data__, h.__data__) : !c - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, u = i[o] = new Array(s), l, f = 0; f < s; ++f)
      (l = a[f]) && (u[f] = l);
    u.sort(n);
  }
  return new k(i, this._parents).order();
}
function aa(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function sa() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function ua() {
  return Array.from(this);
}
function la() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function fa() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function ca() {
  return !this.node();
}
function ha(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function pa(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function da(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ga(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function ya(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function _a(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function ma(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function va(t, n) {
  var e = Mn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? da : pa : typeof n == "function" ? e.local ? ma : _a : e.local ? ya : ga)(e, n));
}
function Jr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function wa(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ba(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function xa(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Ma(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? wa : typeof n == "function" ? xa : ba)(t, n, e ?? "")) : Tt(this.node(), t);
}
function Tt(t, n) {
  return t.style.getPropertyValue(n) || Jr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function $a(t) {
  return function() {
    delete this[t];
  };
}
function Aa(t, n) {
  return function() {
    this[t] = n;
  };
}
function Ta(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Sa(t, n) {
  return arguments.length > 1 ? this.each((n == null ? $a : typeof n == "function" ? Ta : Aa)(t, n)) : this.node()[t];
}
function Qr(t) {
  return t.trim().split(/^|\s+/);
}
function Me(t) {
  return t.classList || new jr(t);
}
function jr(t) {
  this._node = t, this._names = Qr(t.getAttribute("class") || "");
}
jr.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function ti(t, n) {
  for (var e = Me(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function ni(t, n) {
  for (var e = Me(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Pa(t) {
  return function() {
    ti(this, t);
  };
}
function Ea(t) {
  return function() {
    ni(this, t);
  };
}
function Na(t, n) {
  return function() {
    (n.apply(this, arguments) ? ti : ni)(this, t);
  };
}
function Oa(t, n) {
  var e = Qr(t + "");
  if (arguments.length < 2) {
    for (var r = Me(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Na : n ? Pa : Ea)(e, n));
}
function za() {
  this.textContent = "";
}
function Ca(t) {
  return function() {
    this.textContent = t;
  };
}
function Ia(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function ka(t) {
  return arguments.length ? this.each(t == null ? za : (typeof t == "function" ? Ia : Ca)(t)) : this.node().textContent;
}
function Ra() {
  this.innerHTML = "";
}
function Fa(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Da(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function La(t) {
  return arguments.length ? this.each(t == null ? Ra : (typeof t == "function" ? Da : Fa)(t)) : this.node().innerHTML;
}
function Ha() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function qa() {
  return this.each(Ha);
}
function Ba() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Xa() {
  return this.each(Ba);
}
function Ga(t) {
  var n = typeof t == "function" ? t : Yr(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Ua() {
  return null;
}
function Ya(t, n) {
  var e = typeof t == "function" ? t : Yr(t), r = n == null ? Ua : typeof n == "function" ? n : xe(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ka() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Va() {
  return this.each(Ka);
}
function Wa() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Za() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ja(t) {
  return this.select(t ? Za : Wa);
}
function Qa(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function ja(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function ts(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function ns(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function es(t, n, e) {
  return function() {
    var r = this.__on, i, o = ja(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function rs(t, n, e) {
  var r = ts(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, f; u < l; ++u)
        for (i = 0, f = s[u]; i < o; ++i)
          if ((a = r[i]).type === f.type && a.name === f.name)
            return f.value;
    }
    return;
  }
  for (s = n ? es : ns, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function ei(t, n, e) {
  var r = Jr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function is(t, n) {
  return function() {
    return ei(this, t, n);
  };
}
function os(t, n) {
  return function() {
    return ei(this, t, n.apply(this, arguments));
  };
}
function as(t, n) {
  return this.each((typeof n == "function" ? os : is)(t, n));
}
function* ss() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var ri = [null];
function k(t, n) {
  this._groups = t, this._parents = n;
}
function Kt() {
  return new k([[document.documentElement]], ri);
}
function us() {
  return this;
}
k.prototype = Kt.prototype = {
  constructor: k,
  select: Io,
  selectAll: Do,
  selectChild: Bo,
  selectChildren: Yo,
  filter: Ko,
  data: jo,
  enter: Vo,
  exit: na,
  join: ea,
  merge: ra,
  selection: us,
  order: ia,
  sort: oa,
  call: sa,
  nodes: ua,
  node: la,
  size: fa,
  empty: ca,
  each: ha,
  attr: va,
  style: Ma,
  property: Sa,
  classed: Oa,
  text: ka,
  html: La,
  raise: qa,
  lower: Xa,
  append: Ga,
  insert: Ya,
  remove: Va,
  clone: Ja,
  datum: Qa,
  on: rs,
  dispatch: as,
  [Symbol.iterator]: ss
};
function P(t) {
  return typeof t == "string" ? new k([[document.querySelector(t)]], [document.documentElement]) : new k([[t]], ri);
}
function ls(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function jn(t, n) {
  if (t = ls(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const fs = { passive: !1 }, Ht = { capture: !0, passive: !1 };
function qn(t) {
  t.stopImmediatePropagation();
}
function Mt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function cs(t) {
  var n = t.document.documentElement, e = P(t).on("dragstart.drag", Mt, Ht);
  "onselectstart" in n ? e.on("selectstart.drag", Mt, Ht) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function hs(t, n) {
  var e = t.document.documentElement, r = P(t).on("dragstart.drag", null);
  n && (r.on("click.drag", Mt, Ht), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Qt = (t) => () => t;
function te(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: u,
  dy: l,
  dispatch: f
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: f }
  });
}
te.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function ps(t) {
  return !t.ctrlKey && !t.button;
}
function ds() {
  return this.parentNode;
}
function gs(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function ys() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function _s() {
  var t = ps, n = ds, e = gs, r = ys, i = {}, o = be("start", "drag", "end"), a = 0, s, u, l, f, c = 0;
  function h(g) {
    g.on("mousedown.drag", d).filter(r).on("touchstart.drag", b).on("touchmove.drag", y, fs).on("touchend.drag touchcancel.drag", M).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function d(g, v) {
    if (!(f || !t.call(this, g, v))) {
      var T = A(this, n.call(this, g, v), g, v, "mouse");
      T && (P(g.view).on("mousemove.drag", p, Ht).on("mouseup.drag", _, Ht), cs(g.view), qn(g), l = !1, s = g.clientX, u = g.clientY, T("start", g));
    }
  }
  function p(g) {
    if (Mt(g), !l) {
      var v = g.clientX - s, T = g.clientY - u;
      l = v * v + T * T > c;
    }
    i.mouse("drag", g);
  }
  function _(g) {
    P(g.view).on("mousemove.drag mouseup.drag", null), hs(g.view, l), Mt(g), i.mouse("end", g);
  }
  function b(g, v) {
    if (t.call(this, g, v)) {
      var T = g.changedTouches, E = n.call(this, g, v), z = T.length, X, W;
      for (X = 0; X < z; ++X)
        (W = A(this, E, g, v, T[X].identifier, T[X])) && (qn(g), W("start", g, T[X]));
    }
  }
  function y(g) {
    var v = g.changedTouches, T = v.length, E, z;
    for (E = 0; E < T; ++E)
      (z = i[v[E].identifier]) && (Mt(g), z("drag", g, v[E]));
  }
  function M(g) {
    var v = g.changedTouches, T = v.length, E, z;
    for (f && clearTimeout(f), f = setTimeout(function() {
      f = null;
    }, 500), E = 0; E < T; ++E)
      (z = i[v[E].identifier]) && (qn(g), z("end", g, v[E]));
  }
  function A(g, v, T, E, z, X) {
    var W = o.copy(), w = jn(X || T, v), G, C, D;
    if ((D = e.call(g, new te("beforestart", {
      sourceEvent: T,
      target: h,
      identifier: z,
      active: a,
      x: w[0],
      y: w[1],
      dx: 0,
      dy: 0,
      dispatch: W
    }), E)) != null)
      return G = D.x - w[0] || 0, C = D.y - w[1] || 0, function Zt(it, ut, bt) {
        var F = w, Hn;
        switch (it) {
          case "start":
            i[z] = Zt, Hn = a++;
            break;
          case "end":
            delete i[z], --a;
          // falls through
          case "drag":
            w = jn(bt || ut, v), Hn = a;
            break;
        }
        W.call(
          it,
          g,
          new te(it, {
            sourceEvent: ut,
            subject: D,
            target: h,
            identifier: z,
            active: Hn,
            x: w[0] + G,
            y: w[1] + C,
            dx: w[0] - F[0],
            dy: w[1] - F[1],
            dispatch: W
          }),
          E
        );
      };
  }
  return h.filter = function(g) {
    return arguments.length ? (t = typeof g == "function" ? g : Qt(!!g), h) : t;
  }, h.container = function(g) {
    return arguments.length ? (n = typeof g == "function" ? g : Qt(g), h) : n;
  }, h.subject = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Qt(g), h) : e;
  }, h.touchable = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : Qt(!!g), h) : r;
  }, h.on = function() {
    var g = o.on.apply(o, arguments);
    return g === o ? h : g;
  }, h.clickDistance = function(g) {
    return arguments.length ? (c = (g = +g) * g, h) : Math.sqrt(c);
  }, h;
}
function $n(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function $e(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function zt() {
}
var dt = 0.7, St = 1 / dt, $t = "\\s*([+-]?\\d+)\\s*", qt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", U = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ms = /^#([0-9a-f]{3,8})$/, vs = new RegExp(`^rgb\\(${$t},${$t},${$t}\\)$`), ws = new RegExp(`^rgb\\(${U},${U},${U}\\)$`), bs = new RegExp(`^rgba\\(${$t},${$t},${$t},${qt}\\)$`), xs = new RegExp(`^rgba\\(${U},${U},${U},${qt}\\)$`), Ms = new RegExp(`^hsl\\(${qt},${U},${U}\\)$`), $s = new RegExp(`^hsla\\(${qt},${U},${U},${qt}\\)$`), Ze = {
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
$n(zt, gt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Je,
  // Deprecated! Use color.formatHex.
  formatHex: Je,
  formatHex8: As,
  formatHsl: Ts,
  formatRgb: Qe,
  toString: Qe
});
function Je() {
  return this.rgb().formatHex();
}
function As() {
  return this.rgb().formatHex8();
}
function Ts() {
  return oi(this).formatHsl();
}
function Qe() {
  return this.rgb().formatRgb();
}
function gt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = ms.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? je(n) : e === 3 ? new O(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? jt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? jt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = vs.exec(t)) ? new O(n[1], n[2], n[3], 1) : (n = ws.exec(t)) ? new O(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = bs.exec(t)) ? jt(n[1], n[2], n[3], n[4]) : (n = xs.exec(t)) ? jt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Ms.exec(t)) ? er(n[1], n[2] / 100, n[3] / 100, 1) : (n = $s.exec(t)) ? er(n[1], n[2] / 100, n[3] / 100, n[4]) : Ze.hasOwnProperty(t) ? je(Ze[t]) : t === "transparent" ? new O(NaN, NaN, NaN, 0) : null;
}
function je(t) {
  return new O(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function jt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new O(t, n, e, r);
}
function ii(t) {
  return t instanceof zt || (t = gt(t)), t ? (t = t.rgb(), new O(t.r, t.g, t.b, t.opacity)) : new O();
}
function ne(t, n, e, r) {
  return arguments.length === 1 ? ii(t) : new O(t, n, e, r ?? 1);
}
function O(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
$n(O, ne, $e(zt, {
  brighter(t) {
    return t = t == null ? St : Math.pow(St, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? dt : Math.pow(dt, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new O(ct(this.r), ct(this.g), ct(this.b), pn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: tr,
  // Deprecated! Use color.formatHex.
  formatHex: tr,
  formatHex8: Ss,
  formatRgb: nr,
  toString: nr
}));
function tr() {
  return `#${ft(this.r)}${ft(this.g)}${ft(this.b)}`;
}
function Ss() {
  return `#${ft(this.r)}${ft(this.g)}${ft(this.b)}${ft((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function nr() {
  const t = pn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${ct(this.r)}, ${ct(this.g)}, ${ct(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function pn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function ct(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ft(t) {
  return t = ct(t), (t < 16 ? "0" : "") + t.toString(16);
}
function er(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new H(t, n, e, r);
}
function oi(t) {
  if (t instanceof H) return new H(t.h, t.s, t.l, t.opacity);
  if (t instanceof zt || (t = gt(t)), !t) return new H();
  if (t instanceof H) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new H(a, s, u, t.opacity);
}
function Ps(t, n, e, r) {
  return arguments.length === 1 ? oi(t) : new H(t, n, e, r ?? 1);
}
function H(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
$n(H, Ps, $e(zt, {
  brighter(t) {
    return t = t == null ? St : Math.pow(St, t), new H(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? dt : Math.pow(dt, t), new H(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new O(
      Bn(t >= 240 ? t - 240 : t + 120, i, r),
      Bn(t, i, r),
      Bn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new H(rr(this.h), tn(this.s), tn(this.l), pn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = pn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${rr(this.h)}, ${tn(this.s) * 100}%, ${tn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function rr(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function tn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Bn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const Es = Math.PI / 180, Ns = 180 / Math.PI;
var ai = -0.14861, Ae = 1.78277, Te = -0.29227, An = -0.90649, Bt = 1.97294, ir = Bt * An, or = Bt * Ae, ar = Ae * Te - An * ai;
function Os(t) {
  if (t instanceof ht) return new ht(t.h, t.s, t.l, t.opacity);
  t instanceof O || (t = ii(t));
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = (ar * r + ir * n - or * e) / (ar + ir - or), o = r - i, a = (Bt * (e - i) - Te * o) / An, s = Math.sqrt(a * a + o * o) / (Bt * i * (1 - i)), u = s ? Math.atan2(a, o) * Ns - 120 : NaN;
  return new ht(u < 0 ? u + 360 : u, s, i, t.opacity);
}
function ot(t, n, e, r) {
  return arguments.length === 1 ? Os(t) : new ht(t, n, e, r ?? 1);
}
function ht(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
$n(ht, ot, $e(zt, {
  brighter(t) {
    return t = t == null ? St : Math.pow(St, t), new ht(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? dt : Math.pow(dt, t), new ht(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = isNaN(this.h) ? 0 : (this.h + 120) * Es, n = +this.l, e = isNaN(this.s) ? 0 : this.s * n * (1 - n), r = Math.cos(t), i = Math.sin(t);
    return new O(
      255 * (n + e * (ai * r + Ae * i)),
      255 * (n + e * (Te * r + An * i)),
      255 * (n + e * (Bt * r)),
      this.opacity
    );
  }
}));
const Tn = (t) => () => t;
function si(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function zs(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Cs(t, n) {
  var e = n - t;
  return e ? si(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Tn(isNaN(t) ? n : t);
}
function Is(t) {
  return (t = +t) == 1 ? At : function(n, e) {
    return e - n ? zs(n, e, t) : Tn(isNaN(n) ? e : n);
  };
}
function At(t, n) {
  var e = n - t;
  return e ? si(t, e) : Tn(isNaN(t) ? n : t);
}
const dn = function t(n) {
  var e = Is(n);
  function r(i, o) {
    var a = e((i = ne(i)).r, (o = ne(o)).r), s = e(i.g, o.g), u = e(i.b, o.b), l = At(i.opacity, o.opacity);
    return function(f) {
      return i.r = a(f), i.g = s(f), i.b = u(f), i.opacity = l(f), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function ks(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Rs(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Fs(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = Se(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function Ds(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function L(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function Ls(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = Se(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var ee = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Xn = new RegExp(ee.source, "g");
function Hs(t) {
  return function() {
    return t;
  };
}
function qs(t) {
  return function(n) {
    return t(n) + "";
  };
}
function ui(t, n) {
  var e = ee.lastIndex = Xn.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (r = ee.exec(t)) && (i = Xn.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: L(r, i) })), e = Xn.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? qs(u[0].x) : Hs(n) : (n = u.length, function(l) {
    for (var f = 0, c; f < n; ++f) s[(c = u[f]).i] = c.x(l);
    return s.join("");
  });
}
function Se(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? Tn(n) : (e === "number" ? L : e === "string" ? (r = gt(n)) ? (n = r, dn) : ui : n instanceof gt ? dn : n instanceof Date ? Ds : Rs(n) ? ks : Array.isArray(n) ? Fs : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Ls : L)(t, n);
}
function Bs(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var sr = 180 / Math.PI, re = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function li(t, n, e, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * sr,
    skewX: Math.atan(u) * sr,
    scaleX: a,
    scaleY: s
  };
}
var nn;
function Xs(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? re : li(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Gs(t) {
  return t == null || (nn || (nn = document.createElementNS("http://www.w3.org/2000/svg", "g")), nn.setAttribute("transform", t), !(t = nn.transform.baseVal.consolidate())) ? re : (t = t.matrix, li(t.a, t.b, t.c, t.d, t.e, t.f));
}
function fi(t, n, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, f, c, h, d, p) {
    if (l !== c || f !== h) {
      var _ = d.push("translate(", null, n, null, e);
      p.push({ i: _ - 4, x: L(l, c) }, { i: _ - 2, x: L(f, h) });
    } else (c || h) && d.push("translate(" + c + n + h + e);
  }
  function a(l, f, c, h) {
    l !== f ? (l - f > 180 ? f += 360 : f - l > 180 && (l += 360), h.push({ i: c.push(i(c) + "rotate(", null, r) - 2, x: L(l, f) })) : f && c.push(i(c) + "rotate(" + f + r);
  }
  function s(l, f, c, h) {
    l !== f ? h.push({ i: c.push(i(c) + "skewX(", null, r) - 2, x: L(l, f) }) : f && c.push(i(c) + "skewX(" + f + r);
  }
  function u(l, f, c, h, d, p) {
    if (l !== c || f !== h) {
      var _ = d.push(i(d) + "scale(", null, ",", null, ")");
      p.push({ i: _ - 4, x: L(l, c) }, { i: _ - 2, x: L(f, h) });
    } else (c !== 1 || h !== 1) && d.push(i(d) + "scale(" + c + "," + h + ")");
  }
  return function(l, f) {
    var c = [], h = [];
    return l = t(l), f = t(f), o(l.translateX, l.translateY, f.translateX, f.translateY, c, h), a(l.rotate, f.rotate, c, h), s(l.skewX, f.skewX, c, h), u(l.scaleX, l.scaleY, f.scaleX, f.scaleY, c, h), l = f = null, function(d) {
      for (var p = -1, _ = h.length, b; ++p < _; ) c[(b = h[p]).i] = b.x(d);
      return c.join("");
    };
  };
}
var Us = fi(Xs, "px, ", "px)", "deg)"), Ys = fi(Gs, ", ", ")", ")");
function ci(t) {
  return function n(e) {
    e = +e;
    function r(i, o) {
      var a = t((i = ot(i)).h, (o = ot(o)).h), s = At(i.s, o.s), u = At(i.l, o.l), l = At(i.opacity, o.opacity);
      return function(f) {
        return i.h = a(f), i.s = s(f), i.l = u(Math.pow(f, e)), i.opacity = l(f), i + "";
      };
    }
    return r.gamma = n, r;
  }(1);
}
ci(Cs);
var hi = ci(At), Pt = 0, Rt = 0, It = 0, pi = 1e3, gn, Ft, yn = 0, yt = 0, Sn = 0, Xt = typeof performance == "object" && performance.now ? performance : Date, di = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Pn() {
  return yt || (di(Ks), yt = Xt.now() + Sn);
}
function Ks() {
  yt = 0;
}
function Gt() {
  this._call = this._time = this._next = null;
}
Gt.prototype = gi.prototype = {
  constructor: Gt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Pn() : +e) + (n == null ? 0 : +n), !this._next && Ft !== this && (Ft ? Ft._next = this : gn = this, Ft = this), this._call = t, this._time = e, ie();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ie());
  }
};
function gi(t, n, e) {
  var r = new Gt();
  return r.restart(t, n, e), r;
}
function Vs() {
  Pn(), ++Pt;
  for (var t = gn, n; t; )
    (n = yt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Pt;
}
function ur() {
  yt = (yn = Xt.now()) + Sn, Pt = Rt = 0;
  try {
    Vs();
  } finally {
    Pt = 0, Zs(), yt = 0;
  }
}
function Ws() {
  var t = Xt.now(), n = t - yn;
  n > pi && (Sn -= n, yn = t);
}
function Zs() {
  for (var t, n = gn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : gn = e);
  Ft = t, ie(r);
}
function ie(t) {
  if (!Pt) {
    Rt && (Rt = clearTimeout(Rt));
    var n = t - yt;
    n > 24 ? (t < 1 / 0 && (Rt = setTimeout(ur, t - Xt.now() - Sn)), It && (It = clearInterval(It))) : (It || (yn = Xt.now(), It = setInterval(Ws, pi)), Pt = 1, di(ur));
  }
}
function lr(t, n, e) {
  var r = new Gt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function Js(t, n, e) {
  var r = new Gt(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? Pn() : +s, r._restart(function u(l) {
      l += i, r._restart(u, i += a, s), o(l);
    }, a, s);
  }, r.restart(t, n, e), r;
}
var Qs = be("start", "end", "cancel", "interrupt"), js = [], yi = 0, fr = 1, oe = 2, un = 3, cr = 4, ae = 5, ln = 6;
function En(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  tu(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Qs,
    tween: js,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: yi
  });
}
function Pe(t, n) {
  var e = q(t, n);
  if (e.state > yi) throw new Error("too late; already scheduled");
  return e;
}
function K(t, n) {
  var e = q(t, n);
  if (e.state > un) throw new Error("too late; already running");
  return e;
}
function q(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function tu(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = gi(o, 0, e.time);
  function o(l) {
    e.state = fr, e.timer.restart(a, e.delay, e.time), e.delay <= l && a(l - e.delay);
  }
  function a(l) {
    var f, c, h, d;
    if (e.state !== fr) return u();
    for (f in r)
      if (d = r[f], d.name === e.name) {
        if (d.state === un) return lr(a);
        d.state === cr ? (d.state = ln, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[f]) : +f < n && (d.state = ln, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[f]);
      }
    if (lr(function() {
      e.state === un && (e.state = cr, e.timer.restart(s, e.delay, e.time), s(l));
    }), e.state = oe, e.on.call("start", t, t.__data__, e.index, e.group), e.state === oe) {
      for (e.state = un, i = new Array(h = e.tween.length), f = 0, c = -1; f < h; ++f)
        (d = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (i[++c] = d);
      i.length = c + 1;
    }
  }
  function s(l) {
    for (var f = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(u), e.state = ae, 1), c = -1, h = i.length; ++c < h; )
      i[c].call(t, f);
    e.state === ae && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = ln, e.timer.stop(), delete r[n];
    for (var l in r) return;
    delete t.__transition;
  }
}
function nu(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > oe && r.state < ae, r.state = ln, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function eu(t) {
  return this.each(function() {
    nu(this, t);
  });
}
function ru(t, n) {
  var e, r;
  return function() {
    var i = K(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function iu(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = K(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === n) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    o.tween = i;
  };
}
function ou(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = q(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? ru : iu)(e, t, n));
}
function Ee(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = K(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return q(i, r).value[n];
  };
}
function _i(t, n) {
  var e;
  return (typeof n == "number" ? L : n instanceof gt ? dn : (e = gt(n)) ? (n = e, dn) : ui)(t, n);
}
function au(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function su(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function uu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function lu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function fu(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function cu(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function hu(t, n) {
  var e = Mn(t), r = e === "transform" ? Ys : _i;
  return this.attrTween(t, typeof n == "function" ? (e.local ? cu : fu)(e, r, Ee(this, "attr." + t, n)) : n == null ? (e.local ? su : au)(e) : (e.local ? lu : uu)(e, r, n));
}
function pu(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function du(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function gu(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && du(t, o)), e;
  }
  return i._value = n, i;
}
function yu(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && pu(t, o)), e;
  }
  return i._value = n, i;
}
function _u(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Mn(t);
  return this.tween(e, (r.local ? gu : yu)(r, n));
}
function mu(t, n) {
  return function() {
    Pe(this, t).delay = +n.apply(this, arguments);
  };
}
function vu(t, n) {
  return n = +n, function() {
    Pe(this, t).delay = n;
  };
}
function wu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? mu : vu)(n, t)) : q(this.node(), n).delay;
}
function bu(t, n) {
  return function() {
    K(this, t).duration = +n.apply(this, arguments);
  };
}
function xu(t, n) {
  return n = +n, function() {
    K(this, t).duration = n;
  };
}
function Mu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? bu : xu)(n, t)) : q(this.node(), n).duration;
}
function $u(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    K(this, t).ease = n;
  };
}
function Au(t) {
  var n = this._id;
  return arguments.length ? this.each($u(n, t)) : q(this.node(), n).ease;
}
function Tu(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    K(this, t).ease = e;
  };
}
function Su(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Tu(this._id, t));
}
function Pu(t) {
  typeof t != "function" && (t = Vr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new tt(r, this._parents, this._name, this._id);
}
function Eu(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = n[s], l = e[s], f = u.length, c = a[s] = new Array(f), h, d = 0; d < f; ++d)
      (h = u[d] || l[d]) && (c[d] = h);
  for (; s < r; ++s)
    a[s] = n[s];
  return new tt(a, this._parents, this._name, this._id);
}
function Nu(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Ou(t, n, e) {
  var r, i, o = Nu(n) ? Pe : K;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function zu(t, n) {
  var e = this._id;
  return arguments.length < 2 ? q(this.node(), e).on.on(t) : this.each(Ou(e, t, n));
}
function Cu(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function Iu() {
  return this.on("end.remove", Cu(this._id));
}
function ku(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = xe(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, l = o[a] = new Array(u), f, c, h = 0; h < u; ++h)
      (f = s[h]) && (c = t.call(f, f.__data__, h, s)) && ("__data__" in f && (c.__data__ = f.__data__), l[h] = c, En(l[h], n, e, h, l, q(f, e)));
  return new tt(o, this._parents, n, e);
}
function Ru(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Kr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, f, c = 0; c < l; ++c)
      if (f = u[c]) {
        for (var h = t.call(f, f.__data__, c, u), d, p = q(f, e), _ = 0, b = h.length; _ < b; ++_)
          (d = h[_]) && En(d, n, e, _, h, p);
        o.push(h), a.push(f);
      }
  return new tt(o, a, n, e);
}
var Fu = Kt.prototype.constructor;
function Du() {
  return new Fu(this._groups, this._parents);
}
function Lu(t, n) {
  var e, r, i;
  return function() {
    var o = Tt(this, t), a = (this.style.removeProperty(t), Tt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function mi(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Hu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = Tt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function qu(t, n, e) {
  var r, i, o;
  return function() {
    var a = Tt(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), Tt(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s));
  };
}
function Bu(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var u = K(this, t), l = u.on, f = u.value[o] == null ? s || (s = mi(n)) : void 0;
    (l !== e || i !== f) && (r = (e = l).copy()).on(a, i = f), u.on = r;
  };
}
function Xu(t, n, e) {
  var r = (t += "") == "transform" ? Us : _i;
  return n == null ? this.styleTween(t, Lu(t, r)).on("end.style." + t, mi(t)) : typeof n == "function" ? this.styleTween(t, qu(t, r, Ee(this, "style." + t, n))).each(Bu(this._id, t)) : this.styleTween(t, Hu(t, r, n), e).on("end.style." + t, null);
}
function Gu(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Uu(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && Gu(t, a, e)), r;
  }
  return o._value = n, o;
}
function Yu(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Uu(t, n, e ?? ""));
}
function Ku(t) {
  return function() {
    this.textContent = t;
  };
}
function Vu(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Wu(t) {
  return this.tween("text", typeof t == "function" ? Vu(Ee(this, "text", t)) : Ku(t == null ? "" : t + ""));
}
function Zu(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Ju(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Zu(i)), n;
  }
  return r._value = t, r;
}
function Qu(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Ju(t));
}
function ju() {
  for (var t = this._name, n = this._id, e = vi(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      if (u = a[l]) {
        var f = q(u, n);
        En(u, t, e, l, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new tt(r, this._parents, t, e);
}
function tl() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var l = K(this, r), f = l.on;
      f !== t && (n = (t = f).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), l.on = n;
    }), i === 0 && o();
  });
}
var nl = 0;
function tt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function vi() {
  return ++nl;
}
var Z = Kt.prototype;
tt.prototype = {
  constructor: tt,
  select: ku,
  selectAll: Ru,
  selectChild: Z.selectChild,
  selectChildren: Z.selectChildren,
  filter: Pu,
  merge: Eu,
  selection: Du,
  transition: ju,
  call: Z.call,
  nodes: Z.nodes,
  node: Z.node,
  size: Z.size,
  empty: Z.empty,
  each: Z.each,
  on: zu,
  attr: hu,
  attrTween: _u,
  style: Xu,
  styleTween: Yu,
  text: Wu,
  textTween: Qu,
  remove: Iu,
  tween: ou,
  delay: wu,
  duration: Mu,
  ease: Au,
  easeVarying: Su,
  end: tl,
  [Symbol.iterator]: Z[Symbol.iterator]
};
function el(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var rl = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: el
};
function il(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function ol(t) {
  var n, e;
  t instanceof tt ? (n = t._id, t = t._name) : (n = vi(), (e = rl).time = Pn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && En(u, t, n, l, a, e || il(u, n));
  return new tt(r, this._parents, t, n);
}
Kt.prototype.interrupt = eu;
Kt.prototype.transition = ol;
const se = Math.PI, ue = 2 * se, lt = 1e-6, al = ue - lt;
function wi(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function sl(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return wi;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class bi {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? wi : sl(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, u = r - n, l = i - e, f = a - n, c = s - e, h = f * f + c * c;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (h > lt) if (!(Math.abs(c * u - l * f) > lt) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let d = r - a, p = i - s, _ = u * u + l * l, b = d * d + p * p, y = Math.sqrt(_), M = Math.sqrt(h), A = o * Math.tan((se - Math.acos((_ + h - b) / (2 * y * M))) / 2), g = A / M, v = A / y;
      Math.abs(g - 1) > lt && this._append`L${n + g * f},${e + g * c}`, this._append`A${o},${o},0,0,${+(c * d > f * p)},${this._x1 = n + v * u},${this._y1 = e + v * l}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = n + s, f = e + u, c = 1 ^ a, h = a ? i - o : o - i;
    this._x1 === null ? this._append`M${l},${f}` : (Math.abs(this._x1 - l) > lt || Math.abs(this._y1 - f) > lt) && this._append`L${l},${f}`, r && (h < 0 && (h = h % ue + ue), h > al ? this._append`A${r},${r},0,1,${c},${n - s},${e - u}A${r},${r},0,1,${c},${this._x1 = l},${this._y1 = f}` : h > lt && this._append`A${r},${r},0,${+(h >= se)},${c},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function B() {
  return new bi();
}
B.prototype = bi.prototype;
function ul(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function _n(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Et(t) {
  return t = _n(Math.abs(t)), t ? t[1] : NaN;
}
function ll(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(e.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function fl(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var cl = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function mn(t) {
  if (!(n = cl.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new Ne({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
mn.prototype = Ne.prototype;
function Ne(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Ne.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function hl(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var xi;
function pl(t, n) {
  var e = _n(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (xi = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + _n(t, Math.max(0, n + o - 1))[0];
}
function hr(t, n) {
  var e = _n(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const pr = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: ul,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => hr(t * 100, n),
  r: hr,
  s: pl,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function dr(t) {
  return t;
}
var gr = Array.prototype.map, yr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function dl(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? dr : ll(gr.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? dr : fl(gr.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(c) {
    c = mn(c);
    var h = c.fill, d = c.align, p = c.sign, _ = c.symbol, b = c.zero, y = c.width, M = c.comma, A = c.precision, g = c.trim, v = c.type;
    v === "n" ? (M = !0, v = "g") : pr[v] || (A === void 0 && (A = 12), g = !0, v = "g"), (b || h === "0" && d === "=") && (b = !0, h = "0", d = "=");
    var T = _ === "$" ? e : _ === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", E = _ === "$" ? r : /[%p]/.test(v) ? a : "", z = pr[v], X = /[defgprs%]/.test(v);
    A = A === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function W(w) {
      var G = T, C = E, D, Zt, it;
      if (v === "c")
        C = z(w) + C, w = "";
      else {
        w = +w;
        var ut = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? u : z(Math.abs(w), A), g && (w = hl(w)), ut && +w == 0 && p !== "+" && (ut = !1), G = (ut ? p === "(" ? p : s : p === "-" || p === "(" ? "" : p) + G, C = (v === "s" ? yr[8 + xi / 3] : "") + C + (ut && p === "(" ? ")" : ""), X) {
          for (D = -1, Zt = w.length; ++D < Zt; )
            if (it = w.charCodeAt(D), 48 > it || it > 57) {
              C = (it === 46 ? i + w.slice(D + 1) : w.slice(D)) + C, w = w.slice(0, D);
              break;
            }
        }
      }
      M && !b && (w = n(w, 1 / 0));
      var bt = G.length + w.length + C.length, F = bt < y ? new Array(y - bt + 1).join(h) : "";
      switch (M && b && (w = n(F + w, F.length ? y - C.length : 1 / 0), F = ""), d) {
        case "<":
          w = G + w + C + F;
          break;
        case "=":
          w = G + F + w + C;
          break;
        case "^":
          w = F.slice(0, bt = F.length >> 1) + G + w + C + F.slice(bt);
          break;
        default:
          w = F + G + w + C;
          break;
      }
      return o(w);
    }
    return W.toString = function() {
      return c + "";
    }, W;
  }
  function f(c, h) {
    var d = l((c = mn(c), c.type = "f", c)), p = Math.max(-8, Math.min(8, Math.floor(Et(h) / 3))) * 3, _ = Math.pow(10, -p), b = yr[8 + p / 3];
    return function(y) {
      return d(_ * y) + b;
    };
  }
  return {
    format: l,
    formatPrefix: f
  };
}
var en, Nn, Mi;
gl({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function gl(t) {
  return en = dl(t), Nn = en.format, Mi = en.formatPrefix, en;
}
function yl(t) {
  return Math.max(0, -Et(Math.abs(t)));
}
function _l(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Et(n) / 3))) * 3 - Et(Math.abs(t)));
}
function ml(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Et(n) - Et(t)) + 1;
}
function $i(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
const _r = Symbol("implicit");
function Oe() {
  var t = new Ye(), n = [], e = [], r = _r;
  function i(o) {
    let a = t.get(o);
    if (a === void 0) {
      if (r !== _r) return r;
      t.set(o, a = n.push(o) - 1);
    }
    return e[a % e.length];
  }
  return i.domain = function(o) {
    if (!arguments.length) return n.slice();
    n = [], t = new Ye();
    for (const a of o)
      t.has(a) || t.set(a, n.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (e = Array.from(o), i) : e.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return Oe(n, e).unknown(r);
  }, $i.apply(i, arguments), i;
}
function vl(t) {
  return function() {
    return t;
  };
}
function wl(t) {
  return +t;
}
var mr = [0, 1];
function xt(t) {
  return t;
}
function le(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : vl(isNaN(n) ? NaN : 0.5);
}
function bl(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function xl(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = le(i, r), o = e(a, o)) : (r = le(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function Ml(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = le(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var u = mo(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function $l(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Al() {
  var t = mr, n = mr, e = Se, r, i, o, a = xt, s, u, l;
  function f() {
    var h = Math.min(t.length, n.length);
    return a !== xt && (a = bl(t[0], t[h - 1])), s = h > 2 ? Ml : xl, u = l = null, c;
  }
  function c(h) {
    return h == null || isNaN(h = +h) ? o : (u || (u = s(t.map(r), n, e)))(r(a(h)));
  }
  return c.invert = function(h) {
    return a(i((l || (l = s(n, t.map(r), L)))(h)));
  }, c.domain = function(h) {
    return arguments.length ? (t = Array.from(h, wl), f()) : t.slice();
  }, c.range = function(h) {
    return arguments.length ? (n = Array.from(h), f()) : n.slice();
  }, c.rangeRound = function(h) {
    return n = Array.from(h), e = Bs, f();
  }, c.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : xt, f()) : a !== xt;
  }, c.interpolate = function(h) {
    return arguments.length ? (e = h, f()) : e;
  }, c.unknown = function(h) {
    return arguments.length ? (o = h, c) : o;
  }, function(h, d) {
    return r = h, i = d, f();
  };
}
function Tl() {
  return Al()(xt, xt);
}
function Sl(t, n, e, r) {
  var i = To(t, n, e), o;
  switch (r = mn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = _l(i, a)) && (r.precision = o), Mi(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = ml(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = yl(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Nn(r);
}
function Pl(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Ao(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Sl(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, l, f = 10;
    for (s < a && (l = a, a = s, s = l, l = i, i = o, o = l); f-- > 0; ) {
      if (l = Jn(a, s, e), l === u)
        return r[i] = a, r[o] = s, n(r);
      if (l > 0)
        a = Math.floor(a / l) * l, s = Math.ceil(s / l) * l;
      else if (l < 0)
        a = Math.ceil(a * l) / l, s = Math.floor(s * l) / l;
      else
        break;
      u = l;
    }
    return t;
  }, t;
}
function at() {
  var t = Tl();
  return t.copy = function() {
    return $l(t, at());
  }, $i.apply(t, arguments), Pl(t);
}
hi(ot(-100, 0.75, 0.35), ot(80, 1.5, 0.8));
hi(ot(260, 0.75, 0.35), ot(80, 1.5, 0.8));
var rn = ot();
function El(t) {
  (t < 0 || t > 1) && (t -= Math.floor(t));
  var n = Math.abs(t - 0.5);
  return rn.h = 360 * t - 100, rn.s = 1.5 - 1.5 * n, rn.l = 0.8 - 0.9 * n, rn + "";
}
function Dt(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Dt.prototype = {
  constructor: Dt,
  scale: function(t) {
    return t === 1 ? this : new Dt(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Dt(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Dt.prototype;
var Ai = typeof global == "object" && global && global.Object === Object && global, Nl = typeof self == "object" && self && self.Object === Object && self, V = Ai || Nl || Function("return this")(), Y = V.Symbol, Ti = Object.prototype, Ol = Ti.hasOwnProperty, zl = Ti.toString, kt = Y ? Y.toStringTag : void 0;
function Cl(t) {
  var n = Ol.call(t, kt), e = t[kt];
  try {
    t[kt] = void 0;
    var r = !0;
  } catch {
  }
  var i = zl.call(t);
  return r && (n ? t[kt] = e : delete t[kt]), i;
}
var Il = Object.prototype, kl = Il.toString;
function Rl(t) {
  return kl.call(t);
}
var Fl = "[object Null]", Dl = "[object Undefined]", vr = Y ? Y.toStringTag : void 0;
function mt(t) {
  return t == null ? t === void 0 ? Dl : Fl : vr && vr in Object(t) ? Cl(t) : Rl(t);
}
function st(t) {
  return t != null && typeof t == "object";
}
var Ll = "[object Symbol]";
function On(t) {
  return typeof t == "symbol" || st(t) && mt(t) == Ll;
}
function Vt(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var R = Array.isArray, wr = Y ? Y.prototype : void 0, br = wr ? wr.toString : void 0;
function Si(t) {
  if (typeof t == "string")
    return t;
  if (R(t))
    return Vt(t, Si) + "";
  if (On(t))
    return br ? br.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var Hl = /\s/;
function ql(t) {
  for (var n = t.length; n-- && Hl.test(t.charAt(n)); )
    ;
  return n;
}
var Bl = /^\s+/;
function Xl(t) {
  return t && t.slice(0, ql(t) + 1).replace(Bl, "");
}
function nt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var xr = NaN, Gl = /^[-+]0x[0-9a-f]+$/i, Ul = /^0b[01]+$/i, Yl = /^0o[0-7]+$/i, Kl = parseInt;
function Pi(t) {
  if (typeof t == "number")
    return t;
  if (On(t))
    return xr;
  if (nt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = nt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Xl(t);
  var e = Ul.test(t);
  return e || Yl.test(t) ? Kl(t.slice(2), e ? 2 : 8) : Gl.test(t) ? xr : +t;
}
var Vl = 1 / 0, Wl = 17976931348623157e292;
function fn(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Pi(t), t === Vl || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * Wl;
  }
  return t === t ? t : 0;
}
function Zl(t) {
  var n = fn(t), e = n % 1;
  return n === n ? e ? n - e : n : 0;
}
function zn(t) {
  return t;
}
var Jl = "[object AsyncFunction]", Ql = "[object Function]", jl = "[object GeneratorFunction]", tf = "[object Proxy]";
function Ei(t) {
  if (!nt(t))
    return !1;
  var n = mt(t);
  return n == Ql || n == jl || n == Jl || n == tf;
}
var Gn = V["__core-js_shared__"], Mr = function() {
  var t = /[^.]+$/.exec(Gn && Gn.keys && Gn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function nf(t) {
  return !!Mr && Mr in t;
}
var ef = Function.prototype, rf = ef.toString;
function vt(t) {
  if (t != null) {
    try {
      return rf.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var of = /[\\^$.*+?()[\]{}|]/g, af = /^\[object .+?Constructor\]$/, sf = Function.prototype, uf = Object.prototype, lf = sf.toString, ff = uf.hasOwnProperty, cf = RegExp(
  "^" + lf.call(ff).replace(of, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function hf(t) {
  if (!nt(t) || nf(t))
    return !1;
  var n = Ei(t) ? cf : af;
  return n.test(vt(t));
}
function pf(t, n) {
  return t == null ? void 0 : t[n];
}
function wt(t, n) {
  var e = pf(t, n);
  return hf(e) ? e : void 0;
}
var fe = wt(V, "WeakMap");
function df(t, n, e) {
  switch (e.length) {
    case 0:
      return t.call(n);
    case 1:
      return t.call(n, e[0]);
    case 2:
      return t.call(n, e[0], e[1]);
    case 3:
      return t.call(n, e[0], e[1], e[2]);
  }
  return t.apply(n, e);
}
var gf = 800, yf = 16, _f = Date.now;
function mf(t) {
  var n = 0, e = 0;
  return function() {
    var r = _f(), i = yf - (r - e);
    if (e = r, i > 0) {
      if (++n >= gf)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function vf(t) {
  return function() {
    return t;
  };
}
var vn = function() {
  try {
    var t = wt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), wf = vn ? function(t, n) {
  return vn(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: vf(n),
    writable: !0
  });
} : zn, bf = mf(wf);
function xf(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var Mf = 9007199254740991, $f = /^(?:0|[1-9]\d*)$/;
function Cn(t, n) {
  var e = typeof t;
  return n = n ?? Mf, !!n && (e == "number" || e != "symbol" && $f.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function Af(t, n, e) {
  n == "__proto__" && vn ? vn(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function In(t, n) {
  return t === n || t !== t && n !== n;
}
var Tf = Object.prototype, Sf = Tf.hasOwnProperty;
function Pf(t, n, e) {
  var r = t[n];
  (!(Sf.call(t, n) && In(r, e)) || e === void 0 && !(n in t)) && Af(t, n, e);
}
var $r = Math.max;
function Ef(t, n, e) {
  return n = $r(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, o = $r(r.length - n, 0), a = Array(o); ++i < o; )
      a[i] = r[n + i];
    i = -1;
    for (var s = Array(n + 1); ++i < n; )
      s[i] = r[i];
    return s[n] = e(a), df(t, this, s);
  };
}
function Nf(t, n) {
  return bf(Ef(t, n, zn), t + "");
}
var Of = 9007199254740991;
function ze(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Of;
}
function Ct(t) {
  return t != null && ze(t.length) && !Ei(t);
}
function zf(t, n, e) {
  if (!nt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Ct(e) && Cn(n, e.length) : r == "string" && n in e) ? In(e[n], t) : !1;
}
var Cf = Object.prototype;
function Ni(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || Cf;
  return t === e;
}
function Oi(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var If = "[object Arguments]";
function Ar(t) {
  return st(t) && mt(t) == If;
}
var zi = Object.prototype, kf = zi.hasOwnProperty, Rf = zi.propertyIsEnumerable, Ce = Ar(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ar : function(t) {
  return st(t) && kf.call(t, "callee") && !Rf.call(t, "callee");
};
function Ff() {
  return !1;
}
var Ci = typeof exports == "object" && exports && !exports.nodeType && exports, Tr = Ci && typeof module == "object" && module && !module.nodeType && module, Df = Tr && Tr.exports === Ci, Sr = Df ? V.Buffer : void 0, Lf = Sr ? Sr.isBuffer : void 0, ce = Lf || Ff, Hf = "[object Arguments]", qf = "[object Array]", Bf = "[object Boolean]", Xf = "[object Date]", Gf = "[object Error]", Uf = "[object Function]", Yf = "[object Map]", Kf = "[object Number]", Vf = "[object Object]", Wf = "[object RegExp]", Zf = "[object Set]", Jf = "[object String]", Qf = "[object WeakMap]", jf = "[object ArrayBuffer]", tc = "[object DataView]", nc = "[object Float32Array]", ec = "[object Float64Array]", rc = "[object Int8Array]", ic = "[object Int16Array]", oc = "[object Int32Array]", ac = "[object Uint8Array]", sc = "[object Uint8ClampedArray]", uc = "[object Uint16Array]", lc = "[object Uint32Array]", $ = {};
$[nc] = $[ec] = $[rc] = $[ic] = $[oc] = $[ac] = $[sc] = $[uc] = $[lc] = !0;
$[Hf] = $[qf] = $[jf] = $[Bf] = $[tc] = $[Xf] = $[Gf] = $[Uf] = $[Yf] = $[Kf] = $[Vf] = $[Wf] = $[Zf] = $[Jf] = $[Qf] = !1;
function fc(t) {
  return st(t) && ze(t.length) && !!$[mt(t)];
}
function cc(t) {
  return function(n) {
    return t(n);
  };
}
var Ii = typeof exports == "object" && exports && !exports.nodeType && exports, Lt = Ii && typeof module == "object" && module && !module.nodeType && module, hc = Lt && Lt.exports === Ii, Un = hc && Ai.process, Pr = function() {
  try {
    var t = Lt && Lt.require && Lt.require("util").types;
    return t || Un && Un.binding && Un.binding("util");
  } catch {
  }
}(), Er = Pr && Pr.isTypedArray, ki = Er ? cc(Er) : fc, pc = Object.prototype, dc = pc.hasOwnProperty;
function Ri(t, n) {
  var e = R(t), r = !e && Ce(t), i = !e && !r && ce(t), o = !e && !r && !i && ki(t), a = e || r || i || o, s = a ? Oi(t.length, String) : [], u = s.length;
  for (var l in t)
    (n || dc.call(t, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Cn(l, u))) && s.push(l);
  return s;
}
function Fi(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var gc = Fi(Object.keys, Object), yc = Object.prototype, _c = yc.hasOwnProperty;
function mc(t) {
  if (!Ni(t))
    return gc(t);
  var n = [];
  for (var e in Object(t))
    _c.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function kn(t) {
  return Ct(t) ? Ri(t) : mc(t);
}
function vc(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var wc = Object.prototype, bc = wc.hasOwnProperty;
function xc(t) {
  if (!nt(t))
    return vc(t);
  var n = Ni(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !bc.call(t, r)) || e.push(r);
  return e;
}
function Mc(t) {
  return Ct(t) ? Ri(t, !0) : xc(t);
}
var $c = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ac = /^\w*$/;
function Ie(t, n) {
  if (R(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || On(t) ? !0 : Ac.test(t) || !$c.test(t) || n != null && t in Object(n);
}
var Ut = wt(Object, "create");
function Tc() {
  this.__data__ = Ut ? Ut(null) : {}, this.size = 0;
}
function Sc(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var Pc = "__lodash_hash_undefined__", Ec = Object.prototype, Nc = Ec.hasOwnProperty;
function Oc(t) {
  var n = this.__data__;
  if (Ut) {
    var e = n[t];
    return e === Pc ? void 0 : e;
  }
  return Nc.call(n, t) ? n[t] : void 0;
}
var zc = Object.prototype, Cc = zc.hasOwnProperty;
function Ic(t) {
  var n = this.__data__;
  return Ut ? n[t] !== void 0 : Cc.call(n, t);
}
var kc = "__lodash_hash_undefined__";
function Rc(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Ut && n === void 0 ? kc : n, this;
}
function _t(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
_t.prototype.clear = Tc;
_t.prototype.delete = Sc;
_t.prototype.get = Oc;
_t.prototype.has = Ic;
_t.prototype.set = Rc;
function Fc() {
  this.__data__ = [], this.size = 0;
}
function Rn(t, n) {
  for (var e = t.length; e--; )
    if (In(t[e][0], n))
      return e;
  return -1;
}
var Dc = Array.prototype, Lc = Dc.splice;
function Hc(t) {
  var n = this.__data__, e = Rn(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : Lc.call(n, e, 1), --this.size, !0;
}
function qc(t) {
  var n = this.__data__, e = Rn(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function Bc(t) {
  return Rn(this.__data__, t) > -1;
}
function Xc(t, n) {
  var e = this.__data__, r = Rn(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function et(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
et.prototype.clear = Fc;
et.prototype.delete = Hc;
et.prototype.get = qc;
et.prototype.has = Bc;
et.prototype.set = Xc;
var Yt = wt(V, "Map");
function Gc() {
  this.size = 0, this.__data__ = {
    hash: new _t(),
    map: new (Yt || et)(),
    string: new _t()
  };
}
function Uc(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Fn(t, n) {
  var e = t.__data__;
  return Uc(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Yc(t) {
  var n = Fn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Kc(t) {
  return Fn(this, t).get(t);
}
function Vc(t) {
  return Fn(this, t).has(t);
}
function Wc(t, n) {
  var e = Fn(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function rt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
rt.prototype.clear = Gc;
rt.prototype.delete = Yc;
rt.prototype.get = Kc;
rt.prototype.has = Vc;
rt.prototype.set = Wc;
var Zc = "Expected a function";
function ke(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Zc);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (ke.Cache || rt)(), e;
}
ke.Cache = rt;
var Jc = 500;
function Qc(t) {
  var n = ke(t, function(r) {
    return e.size === Jc && e.clear(), r;
  }), e = n.cache;
  return n;
}
var jc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, th = /\\(\\)?/g, nh = Qc(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(jc, function(e, r, i, o) {
    n.push(i ? o.replace(th, "$1") : r || e);
  }), n;
});
function Nt(t) {
  return t == null ? "" : Si(t);
}
function Dn(t, n) {
  return R(t) ? t : Ie(t, n) ? [t] : nh(Nt(t));
}
function Wt(t) {
  if (typeof t == "string" || On(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Re(t, n) {
  n = Dn(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Wt(n[e++])];
  return e && e == r ? t : void 0;
}
function eh(t, n, e) {
  var r = t == null ? void 0 : Re(t, n);
  return r === void 0 ? e : r;
}
function Fe(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Nr = Y ? Y.isConcatSpreadable : void 0;
function rh(t) {
  return R(t) || Ce(t) || !!(Nr && t && t[Nr]);
}
function ih(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = rh), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? Fe(i, s) : i[i.length] = s;
  }
  return i;
}
function oh(t) {
  var n = t == null ? 0 : t.length;
  return n ? ih(t) : [];
}
var ah = Fi(Object.getPrototypeOf, Object);
function sh(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function uh(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, sh(t, n, e);
}
var lh = "\\ud800-\\udfff", fh = "\\u0300-\\u036f", ch = "\\ufe20-\\ufe2f", hh = "\\u20d0-\\u20ff", ph = fh + ch + hh, dh = "\\ufe0e\\ufe0f", gh = "\\u200d", yh = RegExp("[" + gh + lh + ph + dh + "]");
function Di(t) {
  return yh.test(t);
}
function _h(t) {
  return t.split("");
}
var Li = "\\ud800-\\udfff", mh = "\\u0300-\\u036f", vh = "\\ufe20-\\ufe2f", wh = "\\u20d0-\\u20ff", bh = mh + vh + wh, xh = "\\ufe0e\\ufe0f", Mh = "[" + Li + "]", he = "[" + bh + "]", pe = "\\ud83c[\\udffb-\\udfff]", $h = "(?:" + he + "|" + pe + ")", Hi = "[^" + Li + "]", qi = "(?:\\ud83c[\\udde6-\\uddff]){2}", Bi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ah = "\\u200d", Xi = $h + "?", Gi = "[" + xh + "]?", Th = "(?:" + Ah + "(?:" + [Hi, qi, Bi].join("|") + ")" + Gi + Xi + ")*", Sh = Gi + Xi + Th, Ph = "(?:" + [Hi + he + "?", he, qi, Bi, Mh].join("|") + ")", Eh = RegExp(pe + "(?=" + pe + ")|" + Ph + Sh, "g");
function Nh(t) {
  return t.match(Eh) || [];
}
function Oh(t) {
  return Di(t) ? Nh(t) : _h(t);
}
function zh(t) {
  return function(n) {
    n = Nt(n);
    var e = Di(n) ? Oh(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? uh(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var Ch = zh("toUpperCase");
function Ih(t) {
  return Ch(Nt(t).toLowerCase());
}
var kh = V.isFinite, Rh = Math.min;
function Fh(t) {
  var n = Math[t];
  return function(e, r) {
    if (e = Pi(e), r = r == null ? 0 : Rh(Zl(r), 292), r && kh(e)) {
      var i = (Nt(e) + "e").split("e"), o = n(i[0] + "e" + (+i[1] + r));
      return i = (Nt(o) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
    }
    return n(e);
  };
}
function Dh() {
  this.__data__ = new et(), this.size = 0;
}
function Lh(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function Hh(t) {
  return this.__data__.get(t);
}
function qh(t) {
  return this.__data__.has(t);
}
var Bh = 200;
function Xh(t, n) {
  var e = this.__data__;
  if (e instanceof et) {
    var r = e.__data__;
    if (!Yt || r.length < Bh - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new rt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function j(t) {
  var n = this.__data__ = new et(t);
  this.size = n.size;
}
j.prototype.clear = Dh;
j.prototype.delete = Lh;
j.prototype.get = Hh;
j.prototype.has = qh;
j.prototype.set = Xh;
function De(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function Ui() {
  return [];
}
var Gh = Object.prototype, Uh = Gh.propertyIsEnumerable, Or = Object.getOwnPropertySymbols, Yi = Or ? function(t) {
  return t == null ? [] : (t = Object(t), De(Or(t), function(n) {
    return Uh.call(t, n);
  }));
} : Ui, Yh = Object.getOwnPropertySymbols, Kh = Yh ? function(t) {
  for (var n = []; t; )
    Fe(n, Yi(t)), t = ah(t);
  return n;
} : Ui;
function Ki(t, n, e) {
  var r = n(t);
  return R(t) ? r : Fe(r, e(t));
}
function zr(t) {
  return Ki(t, kn, Yi);
}
function Vh(t) {
  return Ki(t, Mc, Kh);
}
var de = wt(V, "DataView"), ge = wt(V, "Promise"), ye = wt(V, "Set"), Cr = "[object Map]", Wh = "[object Object]", Ir = "[object Promise]", kr = "[object Set]", Rr = "[object WeakMap]", Fr = "[object DataView]", Zh = vt(de), Jh = vt(Yt), Qh = vt(ge), jh = vt(ye), tp = vt(fe), J = mt;
(de && J(new de(new ArrayBuffer(1))) != Fr || Yt && J(new Yt()) != Cr || ge && J(ge.resolve()) != Ir || ye && J(new ye()) != kr || fe && J(new fe()) != Rr) && (J = function(t) {
  var n = mt(t), e = n == Wh ? t.constructor : void 0, r = e ? vt(e) : "";
  if (r)
    switch (r) {
      case Zh:
        return Fr;
      case Jh:
        return Cr;
      case Qh:
        return Ir;
      case jh:
        return kr;
      case tp:
        return Rr;
    }
  return n;
});
var Dr = V.Uint8Array, np = "__lodash_hash_undefined__";
function ep(t) {
  return this.__data__.set(t, np), this;
}
function rp(t) {
  return this.__data__.has(t);
}
function wn(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new rt(); ++n < e; )
    this.add(t[n]);
}
wn.prototype.add = wn.prototype.push = ep;
wn.prototype.has = rp;
function ip(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function op(t, n) {
  return t.has(n);
}
var ap = 1, sp = 2;
function Vi(t, n, e, r, i, o) {
  var a = e & ap, s = t.length, u = n.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(t), f = o.get(n);
  if (l && f)
    return l == n && f == t;
  var c = -1, h = !0, d = e & sp ? new wn() : void 0;
  for (o.set(t, n), o.set(n, t); ++c < s; ) {
    var p = t[c], _ = n[c];
    if (r)
      var b = a ? r(_, p, c, n, t, o) : r(p, _, c, t, n, o);
    if (b !== void 0) {
      if (b)
        continue;
      h = !1;
      break;
    }
    if (d) {
      if (!ip(n, function(y, M) {
        if (!op(d, M) && (p === y || i(p, y, e, r, o)))
          return d.push(M);
      })) {
        h = !1;
        break;
      }
    } else if (!(p === _ || i(p, _, e, r, o))) {
      h = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), h;
}
function Wi(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function up(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var lp = 1, fp = 2, cp = "[object Boolean]", hp = "[object Date]", pp = "[object Error]", dp = "[object Map]", gp = "[object Number]", yp = "[object RegExp]", _p = "[object Set]", mp = "[object String]", vp = "[object Symbol]", wp = "[object ArrayBuffer]", bp = "[object DataView]", Lr = Y ? Y.prototype : void 0, Yn = Lr ? Lr.valueOf : void 0;
function xp(t, n, e, r, i, o, a) {
  switch (e) {
    case bp:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case wp:
      return !(t.byteLength != n.byteLength || !o(new Dr(t), new Dr(n)));
    case cp:
    case hp:
    case gp:
      return In(+t, +n);
    case pp:
      return t.name == n.name && t.message == n.message;
    case yp:
    case mp:
      return t == n + "";
    case dp:
      var s = Wi;
    case _p:
      var u = r & lp;
      if (s || (s = up), t.size != n.size && !u)
        return !1;
      var l = a.get(t);
      if (l)
        return l == n;
      r |= fp, a.set(t, n);
      var f = Vi(s(t), s(n), r, i, o, a);
      return a.delete(t), f;
    case vp:
      if (Yn)
        return Yn.call(t) == Yn.call(n);
  }
  return !1;
}
var Mp = 1, $p = Object.prototype, Ap = $p.hasOwnProperty;
function Tp(t, n, e, r, i, o) {
  var a = e & Mp, s = zr(t), u = s.length, l = zr(n), f = l.length;
  if (u != f && !a)
    return !1;
  for (var c = u; c--; ) {
    var h = s[c];
    if (!(a ? h in n : Ap.call(n, h)))
      return !1;
  }
  var d = o.get(t), p = o.get(n);
  if (d && p)
    return d == n && p == t;
  var _ = !0;
  o.set(t, n), o.set(n, t);
  for (var b = a; ++c < u; ) {
    h = s[c];
    var y = t[h], M = n[h];
    if (r)
      var A = a ? r(M, y, h, n, t, o) : r(y, M, h, t, n, o);
    if (!(A === void 0 ? y === M || i(y, M, e, r, o) : A)) {
      _ = !1;
      break;
    }
    b || (b = h == "constructor");
  }
  if (_ && !b) {
    var g = t.constructor, v = n.constructor;
    g != v && "constructor" in t && "constructor" in n && !(typeof g == "function" && g instanceof g && typeof v == "function" && v instanceof v) && (_ = !1);
  }
  return o.delete(t), o.delete(n), _;
}
var Sp = 1, Hr = "[object Arguments]", qr = "[object Array]", on = "[object Object]", Pp = Object.prototype, Br = Pp.hasOwnProperty;
function Ep(t, n, e, r, i, o) {
  var a = R(t), s = R(n), u = a ? qr : J(t), l = s ? qr : J(n);
  u = u == Hr ? on : u, l = l == Hr ? on : l;
  var f = u == on, c = l == on, h = u == l;
  if (h && ce(t)) {
    if (!ce(n))
      return !1;
    a = !0, f = !1;
  }
  if (h && !f)
    return o || (o = new j()), a || ki(t) ? Vi(t, n, e, r, i, o) : xp(t, n, u, e, r, i, o);
  if (!(e & Sp)) {
    var d = f && Br.call(t, "__wrapped__"), p = c && Br.call(n, "__wrapped__");
    if (d || p) {
      var _ = d ? t.value() : t, b = p ? n.value() : n;
      return o || (o = new j()), i(_, b, e, r, o);
    }
  }
  return h ? (o || (o = new j()), Tp(t, n, e, r, i, o)) : !1;
}
function Le(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !st(t) && !st(n) ? t !== t && n !== n : Ep(t, n, e, r, Le, i);
}
var Np = 1, Op = 2;
function zp(t, n, e, r) {
  var i = e.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = e[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = e[i];
    var s = a[0], u = t[s], l = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var f = new j(), c;
      if (!(c === void 0 ? Le(l, u, Np | Op, r, f) : c))
        return !1;
    }
  }
  return !0;
}
function Zi(t) {
  return t === t && !nt(t);
}
function Cp(t) {
  for (var n = kn(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Zi(i)];
  }
  return n;
}
function Ji(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function Ip(t) {
  var n = Cp(t);
  return n.length == 1 && n[0][2] ? Ji(n[0][0], n[0][1]) : function(e) {
    return e === t || zp(e, t, n);
  };
}
function kp(t, n) {
  return t != null && n in Object(t);
}
function Qi(t, n, e) {
  n = Dn(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = Wt(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && ze(i) && Cn(a, i) && (R(t) || Ce(t)));
}
function Rp(t, n) {
  return t != null && Qi(t, n, kp);
}
var Fp = 1, Dp = 2;
function Lp(t, n) {
  return Ie(t) && Zi(n) ? Ji(Wt(t), n) : function(e) {
    var r = eh(e, t);
    return r === void 0 && r === n ? Rp(e, t) : Le(n, r, Fp | Dp);
  };
}
function ji(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function Hp(t) {
  return function(n) {
    return Re(n, t);
  };
}
function qp(t) {
  return Ie(t) ? ji(Wt(t)) : Hp(t);
}
function He(t) {
  return typeof t == "function" ? t : t == null ? zn : typeof t == "object" ? R(t) ? Lp(t[0], t[1]) : Ip(t) : qp(t);
}
function Bp(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var u = a[++i];
      if (e(o[u], u, o) === !1)
        break;
    }
    return n;
  };
}
var Xp = Bp();
function Gp(t, n) {
  return t && Xp(t, n, kn);
}
function Up(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Ct(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var qe = Up(Gp);
function Yp(t) {
  return st(t) && Ct(t);
}
function Kp(t) {
  return typeof t == "function" ? t : zn;
}
function Vp(t, n) {
  var e = R(t) ? xf : qe;
  return e(t, Kp(n));
}
function Wp(t, n) {
  return Vt(n, function(e) {
    return [e, t[e]];
  });
}
function Zp(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var Jp = "[object Map]", Qp = "[object Set]";
function jp(t) {
  return function(n) {
    var e = J(n);
    return e == Jp ? Wi(n) : e == Qp ? Zp(n) : Wp(n, t(n));
  };
}
var to = jp(kn);
function td(t, n) {
  var e = [];
  return qe(t, function(r, i, o) {
    n(r, i, o) && e.push(r);
  }), e;
}
function nd(t, n) {
  var e = R(t) ? De : td;
  return e(t, He(n));
}
function ed(t, n) {
  var e = -1, r = Ct(t) ? Array(t.length) : [];
  return qe(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function Ot(t, n) {
  var e = R(t) ? Vt : ed;
  return e(t, He(n));
}
var rd = Object.prototype, id = rd.hasOwnProperty;
function od(t, n) {
  return t != null && id.call(t, n);
}
function ad(t, n) {
  return t != null && Qi(t, n, od);
}
var sd = "[object Boolean]";
function ud(t) {
  return t === !0 || t === !1 || st(t) && mt(t) == sd;
}
function ld(t, n, e, r) {
  if (!nt(t))
    return t;
  n = Dn(n, t);
  for (var i = -1, o = n.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var u = Wt(n[i]), l = e;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (i != a) {
      var f = s[u];
      l = void 0, l === void 0 && (l = nt(f) ? f : Cn(n[i + 1]) ? [] : {});
    }
    Pf(s, u, l), s = s[u];
  }
  return t;
}
function fd(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], s = Re(t, a);
    e(s, a) && ld(o, Dn(a, t), s);
  }
  return o;
}
function no(t, n) {
  if (t == null)
    return {};
  var e = Vt(Vh(t), function(r) {
    return [r];
  });
  return n = He(n), fd(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var cd = Math.ceil, hd = Math.max;
function pd(t, n, e, r) {
  for (var i = -1, o = hd(cd((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function dd(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && zf(n, e, r) && (e = r = void 0), n = fn(n), e === void 0 ? (e = n, n = 0) : e = fn(e), r = r === void 0 ? n < e ? 1 : -1 : fn(r), pd(n, e, r);
  };
}
var Be = dd();
function gd() {
  var t = arguments, n = Nt(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
var _e = Fh("round"), yd = Math.max;
function _d(t) {
  if (!(t && t.length))
    return [];
  var n = 0;
  return t = De(t, function(e) {
    if (Yp(e))
      return n = yd(e.length, n), !0;
  }), Oi(n, function(e) {
    return Vt(t, ji(e));
  });
}
var bn = Nf(_d);
const md = (t, n, e = 12, r = 12) => {
  const i = at().domain([0, e]).range([0, t]), o = at().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return Be((e + 1) * (r + 1)).map(function(u) {
        return { m: u % (e + 1), n: Math.floor(u / (e + 1)), x: i(u % (e + 1)), y: o(Math.floor(u / (e + 1))) };
      });
    },
    position: function(u, l) {
      typeof u == "number" && (u = [u]), typeof l == "number" && (l = [l]);
      const f = oh(Ot(l, function(c) {
        return Ot(
          u,
          function(h) {
            return { x: i(h), y: o(c) };
          }
        );
      }));
      return f.length == 1 ? f[0] : f;
    }
  };
}, vd = "_widget_18g36_1", wd = "_label_18g36_19", bd = "_lit_18g36_24", xd = "_button_18g36_29", Md = "_symbol_18g36_29", $d = "_radio_18g36_29", Ad = "_radiobutton_18g36_29", Td = "_selected_18g36_35", Sd = "_toggle_18g36_35", Pd = "_slider_18g36_44", Ed = "_track_18g36_44", Nd = "_track_overlay_18g36_48", Od = "_handle_18g36_55", m = {
  widget: vd,
  label: wd,
  lit: bd,
  button: xd,
  symbol: Md,
  radio: $d,
  radiobutton: Ad,
  selected: Td,
  toggle: Sd,
  slider: Pd,
  track: Ed,
  track_overlay: Nd,
  handle: Od
}, Xe = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, Ge = (t, n, e) => {
  var r, i, o, a;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, zd = (t = 1) => {
  const n = B();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Cd = (t = 1) => {
  const n = B(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Id = (t = 1) => {
  const n = B();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, kd = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = B();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, Rd = (t = 1) => {
  const n = B(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, u = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], l = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, Fd = (t = 1) => {
  const n = B(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, Dd = (t = 1) => {
  const n = B(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var u = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], l = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, Ld = (t = 1) => {
  var n = B(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, Hd = (t = 1) => {
  const n = B(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, me = (t) => {
  switch (t) {
    case "play":
      return zd;
    case "forward":
      return Cd;
    case "back":
      return Id;
    case "pause":
      return kd;
    case "reload":
      return Rd;
    case "capture":
      return Fd;
    case "rewind":
      return Dd;
    case "stop":
      return Ld;
    case "push":
      return Hd;
  }
}, eo = () => {
  const t = "button";
  var n = Xe(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", u = null, l = function(p) {
  }, f = ["play"], c = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? e : (e = p, this);
    },
    symbolsize: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    shape: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? o.x : (o.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? o.y : (o.y = p, this);
    },
    label: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? u : (u = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return l = p, this;
      l(p);
    },
    actions: function(p) {
      return typeof p > "u" ? f : (f = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? c : (c = p, this);
    },
    click: function() {
      c = (c + 1) % f.length, l(), P(this.parentNode).select("." + m.symbol).attr("d", me(f[c])(r * e));
    },
    press: function(p) {
      c = (c + 1) % f.length, l(), p.select("#button_" + n).select("." + m.symbol).attr("d", me(f[c])(r * e));
    }
  };
}, qd = () => {
  const t = "slider", n = Nn(".3f");
  var e = Xe(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, u = "top-left", l = null, f = function(y) {
  }, c = function(y) {
  }, h = [0, 1], d = 0, p = null, _ = at().domain(h).range([0, r]).clamp(!0);
  const b = function(y, M, A = h) {
    const g = y.select("#slider_" + e);
    _.domain(A), d = M, g.selectAll("." + m.handle).transition().attr("cx", _(M)), a && g.select("." + m.label).text(p + " = " + n(d)), f(), c();
  };
  return {
    type: t,
    scale: _,
    id: function(y) {
      return typeof y > "u" ? e : (e = y, this);
    },
    label: function(y) {
      return typeof y > "u" ? p : (p = y, this);
    },
    size: function(y) {
      return typeof y > "u" ? r : (r = y, this);
    },
    girth: function(y) {
      return typeof y > "u" ? i : (i = y, this);
    },
    knob: function(y) {
      return typeof y > "u" ? o : (o = y, this);
    },
    show: function(y) {
      return typeof y > "u" ? a : (a = y, this);
    },
    position: function(y) {
      return typeof y > "u" ? s : (s = y, this);
    },
    x: function(y) {
      return typeof y > "u" ? s.x : (s.x = y, this);
    },
    y: function(y) {
      return typeof y > "u" ? s.y : (s.y = y, this);
    },
    labelposition: function(y) {
      return typeof y > "u" ? u : (u = y, this);
    },
    fontsize: function(y) {
      return typeof y > "u" ? l : (l = y, this);
    },
    update: function(y) {
      if (typeof y == "function")
        return f = y, this;
      f(y);
    },
    update_end: function(y) {
      if (typeof y == "function")
        return c = y, this;
      c(y);
    },
    range: function(y) {
      return typeof y > "u" ? h : (h = y, this);
    },
    value: function(y) {
      return typeof y > "u" ? d : (d = y, this);
    },
    reset: b,
    click: b
  };
}, Bd = () => {
  const t = "toggle";
  var n = Xe(), e = 10, r = { x: 0, y: 0 }, i = null, o = "top", a = null, s = function(c) {
  }, u = 0;
  return {
    type: t,
    id: function(c) {
      return typeof c > "u" ? n : (n = c, this);
    },
    size: function(c) {
      return typeof c > "u" ? e : (e = c, this);
    },
    position: function(c) {
      return typeof c > "u" ? r : (r = c, this);
    },
    x: function(c) {
      return typeof c > "u" ? r.x : (r.x = c, this);
    },
    y: function(c) {
      return typeof c > "u" ? r.y : (r.y = c, this);
    },
    label: function(c) {
      return typeof c > "u" ? i : (i = c, this);
    },
    labelposition: function(c) {
      return typeof c > "u" ? o : (o = c, this);
    },
    fontsize: function(c) {
      return typeof c > "u" ? a : (a = c, this);
    },
    update: function(c) {
      if (typeof c == "function")
        return s = c, this;
      s(c);
    },
    value: function(c) {
      return typeof c > "u" ? u : (u = c, this);
    },
    click: function() {
      u = !u;
      const c = P(this.parentNode);
      c.select("." + m.handle).transition().attr("cx", u ? 2 * e : 0), c.classed(m.selected, u), s();
    },
    reset: function(c, h) {
      u = h;
      const d = c.select("#toggle_" + n);
      d.selectAll("." + m.handle).transition().attr("cx", u ? 2 * e : 0), d.classed(m.selected, u), s();
    }
  };
}, Xd = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = P(o).attr("class", m.widget + " " + m.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", m.background).on("click", t.click).on("mouseover", function() {
    P(this).classed(m.lit, !0), P(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    P(this).classed(m.lit, !1), P(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), a.append("path").attr("d", me(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", m.symbol), r) {
    const u = Ge(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return o;
}, ro = (t, n) => {
  const e = B();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, Gd = (t, n) => {
  const e = Nn(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = P(u).attr("class", m.widget + " " + m.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const l = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", ro(t.size(), t.girth())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * l).attr("height", 2 * l).attr("transform", "translate(" + -l + "," + -l + ")").attr("class", m.track_overlay).on("click", function(p) {
    const _ = jn(p, this)[0];
    t.value(a.invert(_)), t.update(), t.update_end(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
  }).call(
    _s().on("drag", function(p) {
      t.value(a.invert(p.x)), t.update(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(p) {
      t.update_end();
    })
  );
  var f, c, h, d = "bottom";
  return t.fontsize && (c = t.labelposition().match(/bottom/i) != null ? Jt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Jt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), c = t.labelposition().match(/bottom/i) != null ? Jt([t.girth() / 2, t.knob()]) + 7 : -Jt([t.girth() / 2, t.knob()]) - 7, f = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", d = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", m.label).style("text-anchor", h).style("alignment-baseline", d).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + f + "," + c + ")"), u;
}, Ud = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = P(a).attr("class", m.widget + " " + m.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(m.selected, t.value() == 1);
  if (s.append("path").attr("d", ro(2 * t.size(), 2 * t.size())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", m.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = Ge(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return a;
}, Yd = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = So(a), u = at().domain([0, a - 1]).range([0, t.size()]), l = at().domain([0, a - 1]).range([0, t.size()]), f = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = P(f).attr("class", m.widget + " " + m.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + m.radiobutton).data(s).enter().append("g").attr("class", m.radiobutton).attr("id", (b) => "b" + b).attr("transform", (b) => t.orientation() == "vertical" ? "translate(0," + l(b) + ")" : "translate(" + u(b) + ",0)");
  var d, p;
  t.shape() == "rect" ? (d = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (d = h.append("circle").attr("r", i / 2), p = h.append("circle").attr("r", o / 2)), d.attr("class", m.background).on("mouseover", function() {
    P(this).classed(m.lit, !0), P(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    P(this).classed(m.lit, !1), P(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), p.attr("class", m.symbol), p.filter((b) => b == t.value()).classed(m.selected, !0), h.on("click", t.click);
  const _ = Ge(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", m.label).text(function(b, y) {
    return t.choices()[y];
  }).attr("alignment-baseline", _.valign).attr("transform", "translate(" + _.x + "," + _.y + ")").style("font-size", t.fontsize()).attr("text-anchor", _.anchor), f;
}, Kn = (t, n) => {
  switch (t.type) {
    case "button":
      return Xd(t);
    case "slider":
      return Gd(t);
    case "radio":
      return Yd(t);
    case "toggle":
      return Ud(t);
  }
}, Kd = (t, n) => {
  const e = md(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = P("#" + t).classed(n.id + " " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), o = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && o.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && o.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (a) => "translate(" + a.x + "," + a.y + ")").style("fill", "black"), { display: i, controls: o, grid: e };
}, x = {
  widgets: {
    slider_size: 400,
    slider_anchor: { x: 1, y: 9 },
    slider_girth: 16,
    slider_knob: 18,
    toggle_anchor: { x: 4, y: 11 },
    toggle_gap: 7,
    toggle_label_pos: "left",
    button_size: 100,
    button_anchor: { x: 3, y: 2 },
    button_gap: 6,
    textsize: 60,
    text_anchor: { x: 6, y: 6 }
  },
  simulation: {
    delay: 0,
    water_color: "darkred",
    empty_color: "white",
    coffee_color: "black",
    initial_waterdrop: 2
  }
}, N = {
  N: 100,
  porosity: {
    range: [0.45, 0.7],
    default: 0.63
  },
  hide_medium: {
    default: !1
  },
  orli_switch: {
    default: !1
  }
}, io = (t) => Ot(to(t), (n) => {
  n[1].id = n[0], n[1].label = gd(Ih(n[0]), /_/g, " ");
}), oo = (t) => Ot(to(t), (n) => n[1]), ao = (t, n) => Vp(t, (e, r) => e.widget = n[r]), Vd = (t) => no(t, (n) => ad(n, "range")), Wd = (t) => no(t, (n) => ud(n.default)), Zd = (t, n) => {
  var e = Math.abs(t.x - n.x), r = Math.abs(t.y - n.y);
  return Math.sqrt(e ** 2 + r ** 2);
}, so = Vd(N), uo = Wd(N);
io(so);
io(uo);
const lo = oo(so), fo = oo(uo), ve = Ot(
  lo,
  (t) => qd().id(t.id).label(t.label).range(t.range).value(t.default).size(x.widgets.slider_size).girth(x.widgets.slider_girth).knob(x.widgets.slider_knob)
), xn = Ot(
  fo,
  (t) => Bd().id(t.id).label(t.label).value(t.default).labelposition(x.widgets.toggle_label_pos)
);
xn[1].label("Orli's Magic Switch");
ao(fo, xn);
ao(lo, ve);
const Q = eo().actions(["play", "pause"]).size(x.widgets.button_size).id("play"), Ln = eo().actions(["rewind"]).size(x.widgets.button_size), Jd = [Q, Ln], Qd = (t, n) => {
  const e = n.position(x.widgets.slider_anchor.x, x.widgets.slider_anchor.y), r = n.position(Be(2).map((o) => x.widgets.toggle_anchor.x + x.widgets.toggle_gap * o), x.widgets.toggle_anchor.y), i = n.position(x.widgets.text_anchor.x, x.widgets.text_anchor.y);
  t.append("text").text(_e(N.porosity.widget.value() * 100, 2).toFixed(2) + "%").attr("transform", "translate(" + i.x + "," + i.y + ")").style("font-size", x.widgets.textsize).style("text-anchor", "middle").attr("id", "text"), xn.forEach((o, a) => o.position(r[a])), ve[0].position(e).labelposition(x.widgets.toggle_label_pos), Q.position(n.position(x.widgets.button_anchor.x, x.widgets.button_anchor.y)), Ln.position(n.position(x.widgets.button_anchor.x + x.widgets.button_gap, x.widgets.button_anchor.y)), t.selectAll(null).data(ve).enter().append(Kn), t.selectAll(null).data(xn).enter().append(Kn), t.selectAll(null).data(Jd).enter().append(Kn);
};
function co(t, n) {
  return [t % n, Math.floor(t / n)];
}
const jd = {
  n4: bn([-1, 1, 0, 0], [0, 0, -1, 1]),
  n8: bn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0])
};
function Vn(t, n, e = "periodic", r = "n8") {
  const i = [];
  return jd[r].forEach((o) => {
    var a = o[1], s = o[0];
    const u = co(t, n), l = u[0], f = u[1], c = l + s, h = f + a;
    (e == "dirichlet" ? !(a == 0 && s == 0) && c < n && h < n && c >= 0 && h >= 0 : !(a == 0 && s == 0)) && i.push(n * ((h + n) % n) + (c + n) % n);
  }), i;
}
const t0 = function(t) {
  var n = "periodic", e = 1, r = "n8";
  const i = 2 * t + 1;
  var o = e / i, a = o;
  const s = Be(i * i).map(function(h) {
    const d = co(h, i);
    return {
      m: d[0],
      n: d[1],
      x: o * (d[0] + 0.5) - e / 2,
      y: a * (d[1] + 0.5) - e / 2
    };
  });
  s.forEach(function(h, d) {
    h.neighbors = Vn(d, i, n, r).map((p) => s[p]), h.cell = () => [
      { x: h.x + o / 2, y: h.y + a / 2 },
      { x: h.x - o / 2, y: h.y + a / 2 },
      { x: h.x - o / 2, y: h.y - a / 2 },
      { x: h.x + o / 2, y: h.y - a / 2 },
      { x: h.x + o / 2, y: h.y + a / 2 }
    ], h.random_interior_point = () => ({
      x: h.x + o * (Math.random() - 0.5),
      y: h.y + a * (Math.random() - 0.5)
    });
  });
  const u = function(h) {
    return typeof h < "u" ? (s.forEach(function(d) {
      d.x = (d.m + 0.5) * h / i - h / 2, d.y = (d.n + 0.5) * h / i - h / 2;
    }), e = h, o = e / i, a = e / i, this.L = e, this) : e;
  }, l = function(h) {
    return typeof h < "u" ? (s.forEach(function(d, p) {
      d.neighbors = Vn(p, i, h, r).map((_) => s[_]);
    }), n = h, s.forEach((d) => {
      d.is_boundary = n == "dirichlet" && (d.n == 0 || d.n == 2 * t || d.m == 0 || d.m == 2 * t);
    }), this) : n;
  }, f = function(h) {
    return typeof h < "u" ? (s.forEach(function(d, p) {
      d.neighbors = Vn(p, i, n, h).map((_) => s[_]);
    }), r = h, this) : r;
  }, c = function() {
    return n === "periodic" ? null : nd(s, (h) => h.n == 0 || h.n == 2 * t || h.m == 0 || h.m == 2 * t);
  };
  return {
    type: "square",
    L: e,
    N: t,
    size: i * i,
    hood: f,
    nodes: s,
    scale: u,
    boundary: l,
    boundary_cells: c
  };
};
bn([-1, 1, 0, 0], [0, 0, -1, 1]), bn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
var pt = [];
const n0 = () => {
  N.timer = {}, N.tick = 0;
  const t = N.N;
  pt = t0(t).boundary("dirichlet").hood("n4").nodes, pt.forEach((e) => {
    Math.random() < N.porosity.widget.value() ? e.state = "empty" : e.state = "coffee";
  }), pt.filter((e) => Zd(e, { x: 0, y: 0 }) < x.simulation.initial_waterdrop / N.N).forEach((e) => {
    e.state = "water", e.time = 0;
  });
}, e0 = () => {
  N.tick++;
  let t = !1;
  return pt.filter((n) => n.state == "water").forEach((n) => {
    const e = n.neighbors.filter((r) => r.state == "empty");
    e.length > 0 && (t = !0), e.forEach((r) => {
      r.state = "water", r.time = N.tick;
    });
  }), t;
}, S = at().domain([-0.5, 0.5]), r0 = at().domain([-0.5, 0.5]), i0 = Oe().domain(["empty", "water", "coffee"]).range([x.simulation.empty_color, x.simulation.water_color, x.simulation.coffee_color]), o0 = Oe().domain(["empty", "water", "coffee"]).range([x.simulation.coffee_color, x.simulation.water_color, x.simulation.coffee_color]);
function Ue(t) {
  return N.orli_switch.widget.value() & t.state == "water" ? El(t.time % 50 / 50) : N.hide_medium.widget.value() ? o0(t.state) : i0(t.state);
}
var I, Wn, Zn;
const a0 = (t, n) => {
  pt.forEach((e) => {
    const r = e.cell(), i = Ue(e);
    I.fillStyle = i, I.strokeStyle = i, I.lineWidth = 0, I.fillRect(S(r[0].x), S(r[0].y), S(r[2].x) - S(r[0].x), S(r[2].y) - S(r[0].y));
  });
}, s0 = (t, n) => {
  Wn = n.display_size.width, Zn = n.display_size.height, S.range([0, Wn]), r0.range([0, Zn]), I = t.node().getContext("2d"), I.clearRect(0, 0, Wn, Zn), pt.forEach((e) => {
    const r = e.cell(), i = Ue(e);
    I.fillStyle = i, I.strokeStyle = i, I.lineWidth = 0, I.fillRect(S(r[0].x), S(r[0].y), S(r[2].x) - S(r[0].x), S(r[2].y) - S(r[0].y));
  });
}, u0 = (t, n) => {
  pt.filter((e) => e.state == "water").forEach((e) => {
    const r = e.cell(), i = Ue(e);
    I.fillStyle = i, I.strokeStyle = i, I.lineWidth = 0, I.fillRect(S(r[0].x), S(r[0].y), S(r[2].x) - S(r[0].x), S(r[2].y) - S(r[0].y));
  });
};
function l0(t, n, e) {
  var r;
  r = e0(), u0(), r || (n.select("#button_play").transition(1e3).style("opacity", 0), n.select("#button_play").style("pointer-events", "none"), Q.press(n));
}
function we(t, n) {
  n0(), s0(t, n);
}
function Xr(t, n) {
  a0();
}
var Gr = {};
const f0 = (t, n, e) => {
  Q.value() == 1 ? Gr = Js(() => l0(t, n), x.simulation.delay) : Gr.stop(), n.select("#slider_porosity").transition(1e3).style("opacity", 0), n.select("#slider_porosity").selectAll("*").style("pointer-events", "none");
}, c0 = (t, n, e) => {
  Ln.update(() => {
    we(t, e), n.select("#button_play").transition(1e3).style("opacity", null), n.select("#button_play").style("pointer-events", null), n.select("#slider_porosity").transition(1e3).style("opacity", null), n.select("#slider_porosity").selectAll("*").style("pointer-events", null);
  }), Q.update(() => f0(t, n)), N.porosity.widget.update_end(() => {
    we(t, e), n.select("#text").text(_e(N.porosity.widget.value() * 100, 2).toFixed(2) + "%");
  }), N.porosity.widget.update(() => {
    n.select("#text").text(_e(N.porosity.widget.value() * 100, 2).toFixed(2) + "%");
  }), N.hide_medium.widget.update(() => Xr()), N.orli_switch.widget.update(() => Xr());
}, h0 = {
  name: "@explorables/baristas_secret",
  title: "Barista's Secret",
  subtitle: "Percolation on a lattice",
  description: "This explorable illustrates the phenomenon of percolation, when e.g. a liquid like water moves through a porous medium, like coffee. The percolation process is a critical phenomenon that exhibits interesting properties at the critical porosity of the medium.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function p0(t, n = ho) {
  const e = Kd(t, n), r = e.display, i = e.controls, o = e.grid;
  return Qd(i, o), c0(r, i, n), we(r, n), {
    halt() {
      Q.value() === 1 && Q.press(i);
    },
    reset() {
      Q.value() === 1 && Q.press(i), Ln.press(i);
    },
    config: n,
    meta: h0
  };
}
export {
  ho as config,
  p0 as default,
  p0 as load,
  h0 as meta
};
