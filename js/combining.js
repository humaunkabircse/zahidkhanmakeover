/* ========================
	jquery.min.js
========================= */
/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType;
        },
        y = function e(t) {
            return null != t && t === t.window;
        },
        v = { type: !0, src: !0, noModule: !0 };
    function m(e, t, n) {
        var i,
            o = (t = t || r).createElement("script");
        if (((o.text = e), n)) for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o);
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
    }
    var b = "3.3.1",
        w = function (e, t) {
            return new w.fn.init(e, t);
        },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function () {
            return o.call(this);
        },
        get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return w.each(this, e);
        },
        map: function (e) {
            return this.pushStack(
                w.map(this, function (t, n) {
                    return e.call(t, n, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: s,
        sort: n.sort,
        splice: n.splice,
    }),
        (w.extend = w.fn.extend = function () {
            var e,
                t,
                n,
                r,
                i,
                o,
                a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || g(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        (n = a[t]),
                            a !== (r = e[t]) &&
                                (l && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                                    ? (i ? ((i = !1), (o = n && Array.isArray(n) ? n : [])) : (o = n && w.isPlainObject(n) ? n : {}), (a[t] = w.extend(l, o, r)))
                                    : void 0 !== r && (a[t] = r));
            return a;
        }),
        w.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || ("function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d));
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e) {
                m(e);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (C(e)) {
                    for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
                } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(T, "");
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : u.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) (r = !t(e[o], o)) !== s && i.push(e[o]);
                return i;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    o = 0,
                    s = [];
                if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                return a.apply([], s);
            },
            guid: 1,
            support: h,
        }),
        "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
        w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            l["[object " + t + "]"] = t.toLowerCase();
        });
    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
    }
    var E = (function (e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            y,
            v,
            m,
            x,
            b = "sizzle" + 1 * new Date(),
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function (e, t) {
                return e === t && (f = !0), 0;
            },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i"),
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function (e, t) {
                return t ? ("\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            re = function () {
                p();
            },
            ie = me(
                function (e) {
                    return !0 === e.disabled && ("form" in e || "label" in e);
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            L.apply((A = H.call(w.childNodes)), w.childNodes), A[w.childNodes.length].nodeType;
        } catch (e) {
            L = {
                apply: A.length
                    ? function (e, t) {
                          q.apply(e, H.call(t));
                      }
                    : function (e, t) {
                          var n = e.length,
                              r = 0;
                          while ((e[n++] = t[r++]));
                          e.length = n - 1;
                      },
            };
        }
        function oe(e, t, r, i) {
            var o,
                s,
                l,
                c,
                f,
                h,
                v,
                m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (((r = r || []), "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)) {
                if (11 !== T && (f = J.exec(e)))
                    if ((o = f[1])) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r;
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
                    }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) (m = t), (v = e);
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? (c = c.replace(te, ne)) : t.setAttribute("id", (c = b)), (s = (h = a(e)).length);
                        while (s--) h[s] = "#" + c + " " + ve(h[s]);
                        (v = h.join(",")), (m = (K.test(e) && ge(t.parentNode)) || t);
                    }
                    if (v)
                        try {
                            return L.apply(r, m.querySelectorAll(v)), r;
                        } catch (e) {
                        } finally {
                            c === b && t.removeAttribute("id");
                        }
                }
            }
            return u(e.replace(B, "$1"), t, r, i);
        }
        function ae() {
            var e = [];
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = i);
            }
            return t;
        }
        function se(e) {
            return (e[b] = !0), e;
        }
        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function le(e, t) {
            var n = e.split("|"),
                i = n.length;
            while (i--) r.attrHandle[n[i]] = t;
        }
        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while ((n = n.nextSibling)) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function de(e) {
            return function (t) {
                return "form" in t
                    ? t.parentNode && !1 === t.disabled
                        ? "label" in t
                            ? "label" in t.parentNode
                                ? t.parentNode.disabled === e
                                : t.disabled === e
                            : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
                        : t.disabled === e
                    : "label" in t && t.disabled === e;
            };
        }
        function he(e) {
            return se(function (t) {
                return (
                    (t = +t),
                    se(function (n, r) {
                        var i,
                            o = e([], n.length, t),
                            a = o.length;
                        while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                    })
                );
            });
        }
        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        (n = oe.support = {}),
            (o = oe.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName;
            }),
            (p = oe.setDocument = function (e) {
                var t,
                    i,
                    a = e ? e.ownerDocument || e : w;
                return a !== d && 9 === a.nodeType && a.documentElement
                    ? ((d = a),
                      (h = d.documentElement),
                      (g = !o(d)),
                      w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
                      (n.attributes = ue(function (e) {
                          return (e.className = "i"), !e.getAttribute("className");
                      })),
                      (n.getElementsByTagName = ue(function (e) {
                          return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
                      })),
                      (n.getElementsByClassName = Q.test(d.getElementsByClassName)),
                      (n.getById = ue(function (e) {
                          return (h.appendChild(e).id = b), !d.getElementsByName || !d.getElementsByName(b).length;
                      })),
                      n.getById
                          ? ((r.filter.ID = function (e) {
                                var t = e.replace(Z, ee);
                                return function (e) {
                                    return e.getAttribute("id") === t;
                                };
                            }),
                            (r.find.ID = function (e, t) {
                                if ("undefined" != typeof t.getElementById && g) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : [];
                                }
                            }))
                          : ((r.filter.ID = function (e) {
                                var t = e.replace(Z, ee);
                                return function (e) {
                                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t;
                                };
                            }),
                            (r.find.ID = function (e, t) {
                                if ("undefined" != typeof t.getElementById && g) {
                                    var n,
                                        r,
                                        i,
                                        o = t.getElementById(e);
                                    if (o) {
                                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                        (i = t.getElementsByName(e)), (r = 0);
                                        while ((o = i[r++])) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                    }
                                    return [];
                                }
                            })),
                      (r.find.TAG = n.getElementsByTagName
                          ? function (e, t) {
                                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                            }
                          : function (e, t) {
                                var n,
                                    r = [],
                                    i = 0,
                                    o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                                    return r;
                                }
                                return o;
                            }),
                      (r.find.CLASS =
                          n.getElementsByClassName &&
                          function (e, t) {
                              if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
                          }),
                      (v = []),
                      (y = []),
                      (n.qsa = Q.test(d.querySelectorAll)) &&
                          (ue(function (e) {
                              (h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                  e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"),
                                  e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"),
                                  e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="),
                                  e.querySelectorAll(":checked").length || y.push(":checked"),
                                  e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
                          }),
                          ue(function (e) {
                              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                              var t = d.createElement("input");
                              t.setAttribute("type", "hidden"),
                                  e.appendChild(t).setAttribute("name", "D"),
                                  e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="),
                                  2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                                  (h.appendChild(e).disabled = !0),
                                  2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
                                  e.querySelectorAll("*,:x"),
                                  y.push(",.*:");
                          })),
                      (n.matchesSelector = Q.test((m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
                          ue(function (e) {
                              (n.disconnectedMatch = m.call(e, "*")), m.call(e, "[s!='']:x"), v.push("!=", W);
                          }),
                      (y = y.length && new RegExp(y.join("|"))),
                      (v = v.length && new RegExp(v.join("|"))),
                      (t = Q.test(h.compareDocumentPosition)),
                      (x =
                          t || Q.test(h.contains)
                              ? function (e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e,
                                        r = t && t.parentNode;
                                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                                }
                              : function (e, t) {
                                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                                    return !1;
                                }),
                      (D = t
                          ? function (e, t) {
                                if (e === t) return (f = !0), 0;
                                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return (
                                    r ||
                                    (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === r)
                                        ? e === d || (e.ownerDocument === w && x(w, e))
                                            ? -1
                                            : t === d || (t.ownerDocument === w && x(w, t))
                                            ? 1
                                            : c
                                            ? O(c, e) - O(c, t)
                                            : 0
                                        : 4 & r
                                        ? -1
                                        : 1)
                                );
                            }
                          : function (e, t) {
                                if (e === t) return (f = !0), 0;
                                var n,
                                    r = 0,
                                    i = e.parentNode,
                                    o = t.parentNode,
                                    a = [e],
                                    s = [t];
                                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                                if (i === o) return ce(e, t);
                                n = e;
                                while ((n = n.parentNode)) a.unshift(n);
                                n = t;
                                while ((n = n.parentNode)) s.unshift(n);
                                while (a[r] === s[r]) r++;
                                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
                            }),
                      d)
                    : d;
            }),
            (oe.matches = function (e, t) {
                return oe(e, null, null, t);
            }),
            (oe.matchesSelector = function (e, t) {
                if (((e.ownerDocument || e) !== d && p(e), (t = t.replace(z, "='$1']")), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))))
                    try {
                        var r = m.call(e, t);
                        if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                    } catch (e) {}
                return oe(t, d, null, [e]).length > 0;
            }),
            (oe.contains = function (e, t) {
                return (e.ownerDocument || e) !== d && p(e), x(e, t);
            }),
            (oe.attr = function (e, t) {
                (e.ownerDocument || e) !== d && p(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
            }),
            (oe.escape = function (e) {
                return (e + "").replace(te, ne);
            }),
            (oe.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (oe.uniqueSort = function (e) {
                var t,
                    r = [],
                    i = 0,
                    o = 0;
                if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(D), f)) {
                    while ((t = e[o++])) t === e[o] && (i = r.push(o));
                    while (i--) e.splice(r[i], 1);
                }
                return (c = null), e;
            }),
            (i = oe.getText = function (e) {
                var t,
                    n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                    } else if (3 === o || 4 === o) return e.nodeValue;
                } else while ((t = e[r++])) n += i(t);
                return n;
            }),
            ((r = oe.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: V,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function (e) {
                        return (e[1] = e[1].replace(Z, ee)), (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                    },
                    CHILD: function (e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                            "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && oe.error(e[0]),
                            e
                        );
                    },
                    PSEUDO: function (e) {
                        var t,
                            n = !e[6] && e[2];
                        return V.CHILD.test(e[0])
                            ? null
                            : (e[3] ? (e[2] = e[4] || e[5] || "") : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e
                            ? function () {
                                  return !0;
                              }
                            : function (e) {
                                  return e.nodeName && e.nodeName.toLowerCase() === t;
                              };
                    },
                    CLASS: function (e) {
                        var t = E[e + " "];
                        return (
                            t ||
                            ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                                E(e, function (e) {
                                    return t.test(("string" == typeof e.className && e.className) || ("undefined" != typeof e.getAttribute && e.getAttribute("class")) || "");
                                }))
                        );
                    },
                    ATTR: function (e, t, n) {
                        return function (r) {
                            var i = oe.attr(r, e);
                            return null == i
                                ? "!=" === t
                                : !t ||
                                      ((i += ""),
                                      "=" === t
                                          ? i === n
                                          : "!=" === t
                                          ? i !== n
                                          : "^=" === t
                                          ? n && 0 === i.indexOf(n)
                                          : "*=" === t
                                          ? n && i.indexOf(n) > -1
                                          : "$=" === t
                                          ? n && i.slice(-n.length) === n
                                          : "~=" === t
                                          ? (" " + i.replace($, " ") + " ").indexOf(n) > -1
                                          : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                        };
                    },
                    CHILD: function (e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i
                            ? function (e) {
                                  return !!e.parentNode;
                              }
                            : function (t, n, u) {
                                  var l,
                                      c,
                                      f,
                                      p,
                                      d,
                                      h,
                                      g = o !== a ? "nextSibling" : "previousSibling",
                                      y = t.parentNode,
                                      v = s && t.nodeName.toLowerCase(),
                                      m = !u && !s,
                                      x = !1;
                                  if (y) {
                                      if (o) {
                                          while (g) {
                                              p = t;
                                              while ((p = p[g])) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                              h = g = "only" === e && !h && "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (((h = [a ? y.firstChild : y.lastChild]), a && m)) {
                                          (x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2]), (p = d && y.childNodes[d]);
                                          while ((p = (++d && p && p[g]) || (x = d = 0) || h.pop()))
                                              if (1 === p.nodeType && ++x && p === t) {
                                                  c[e] = [T, d, x];
                                                  break;
                                              }
                                      } else if ((m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x))
                                          while ((p = (++d && p && p[g]) || (x = d = 0) || h.pop()))
                                              if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                                      return (x -= i) === r || (x % r == 0 && x / r >= 0);
                                  }
                              };
                    },
                    PSEUDO: function (e, t) {
                        var n,
                            i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return i[b]
                            ? i(t)
                            : i.length > 1
                            ? ((n = [e, e, "", t]),
                              r.setFilters.hasOwnProperty(e.toLowerCase())
                                  ? se(function (e, n) {
                                        var r,
                                            o = i(e, t),
                                            a = o.length;
                                        while (a--) e[(r = O(e, o[a]))] = !(n[r] = o[a]);
                                    })
                                  : function (e) {
                                        return i(e, 0, n);
                                    })
                            : i;
                    },
                },
                pseudos: {
                    not: se(function (e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(B, "$1"));
                        return r[b]
                            ? se(function (e, t, n, i) {
                                  var o,
                                      a = r(e, null, i, []),
                                      s = e.length;
                                  while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                              })
                            : function (e, i, o) {
                                  return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                              };
                    }),
                    has: se(function (e) {
                        return function (t) {
                            return oe(e, t).length > 0;
                        };
                    }),
                    contains: se(function (e) {
                        return (
                            (e = e.replace(Z, ee)),
                            function (t) {
                                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                            }
                        );
                    }),
                    lang: se(function (e) {
                        return (
                            U.test(e || "") || oe.error("unsupported lang: " + e),
                            (e = e.replace(Z, ee).toLowerCase()),
                            function (t) {
                                var n;
                                do {
                                    if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                        return e === h;
                    },
                    focus: function (e) {
                        return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                    },
                    enabled: de(!1),
                    disabled: de(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (e) {
                        return !r.pseudos.empty(e);
                    },
                    header: function (e) {
                        return Y.test(e.nodeName);
                    },
                    input: function (e) {
                        return G.test(e.nodeName);
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && "button" === e.type) || "button" === t;
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                    },
                    first: he(function () {
                        return [0];
                    }),
                    last: he(function (e, t) {
                        return [t - 1];
                    }),
                    eq: he(function (e, t, n) {
                        return [n < 0 ? n + t : n];
                    }),
                    even: he(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    odd: he(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    lt: he(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                        return e;
                    }),
                    gt: he(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                        return e;
                    }),
                },
            }).pseudos.nth = r.pseudos.eq);
        for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[t] = fe(t);
        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
        function ye() {}
        (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (a = oe.tokenize = function (e, t) {
                var n,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = k[e + " "];
                if (c) return t ? 0 : c.slice(0);
                (s = e), (u = []), (l = r.preFilter);
                while (s) {
                    (n && !(i = F.exec(s))) || (i && (s = s.slice(i[0].length) || s), u.push((o = []))), (n = !1), (i = _.exec(s)) && ((n = i.shift()), o.push({ value: n, type: i[0].replace(B, " ") }), (s = s.slice(n.length)));
                    for (a in r.filter) !(i = V[a].exec(s)) || (l[a] && !(i = l[a](i))) || ((n = i.shift()), o.push({ value: n, type: a, matches: i }), (s = s.slice(n.length)));
                    if (!n) break;
                }
                return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
            });
        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first
                ? function (t, n, i) {
                      while ((t = t[r])) if (1 === t.nodeType || a) return e(t, n, i);
                      return !1;
                  }
                : function (t, n, u) {
                      var l,
                          c,
                          f,
                          p = [T, s];
                      if (u) {
                          while ((t = t[r])) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                      } else
                          while ((t = t[r]))
                              if (1 === t.nodeType || a)
                                  if (((f = t[b] || (t[b] = {})), (c = f[t.uniqueID] || (f[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase())) t = t[r] || t;
                                  else {
                                      if ((l = c[o]) && l[0] === T && l[1] === s) return (p[2] = l[2]);
                                      if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                                  }
                      return !1;
                  };
        }
        function xe(e) {
            return e.length > 1
                ? function (t, n, r) {
                      var i = e.length;
                      while (i--) if (!e[i](t, n, r)) return !1;
                      return !0;
                  }
                : e[0];
        }
        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n;
        }
        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
        }
        function Te(e, t, n, r, i, o) {
            return (
                r && !r[b] && (r = Te(r)),
                i && !i[b] && (i = Te(i, o)),
                se(function (o, a, s, u) {
                    var l,
                        c,
                        f,
                        p = [],
                        d = [],
                        h = a.length,
                        g = o || be(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || (!o && t) ? g : we(g, p, e, s, u),
                        v = n ? (i || (o ? e : h || r) ? [] : a) : y;
                    if ((n && n(y, v, s, u), r)) {
                        (l = we(v, d)), r(l, [], s, u), (c = l.length);
                        while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                    }
                    if (o) {
                        if (i || e) {
                            if (i) {
                                (l = []), (c = v.length);
                                while (c--) (f = v[c]) && l.push((y[c] = f));
                                i(null, (v = []), l, u);
                            }
                            c = v.length;
                            while (c--) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                        }
                    } else (v = we(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, u) : L.apply(a, v);
                })
            );
        }
        function Ce(e) {
            for (
                var t,
                    n,
                    i,
                    o = e.length,
                    a = r.relative[e[0].type],
                    s = a || r.relative[" "],
                    u = a ? 1 : 0,
                    c = me(
                        function (e) {
                            return e === t;
                        },
                        s,
                        !0
                    ),
                    f = me(
                        function (e) {
                            return O(t, e) > -1;
                        },
                        s,
                        !0
                    ),
                    p = [
                        function (e, n, r) {
                            var i = (!a && (r || n !== l)) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                            return (t = null), i;
                        },
                    ];
                u < o;
                u++
            )
                if ((n = r.relative[e[u].type])) p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
                        return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce((e = e.slice(i))), i < o && ve(e));
                    }
                    p.push(n);
                }
            return xe(p);
        }
        function Ee(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function (o, a, s, u, c) {
                    var f,
                        h,
                        y,
                        v = 0,
                        m = "0",
                        x = o && [],
                        b = [],
                        w = l,
                        C = o || (i && r.find.TAG("*", c)),
                        E = (T += null == w ? 1 : Math.random() || 0.1),
                        k = C.length;
                    for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                        if (i && f) {
                            (h = 0), a || f.ownerDocument === d || (p(f), (s = !g));
                            while ((y = e[h++]))
                                if (y(f, a || d, s)) {
                                    u.push(f);
                                    break;
                                }
                            c && (T = E);
                        }
                        n && ((f = !y && f) && v--, o && x.push(f));
                    }
                    if (((v += m), n && m !== v)) {
                        h = 0;
                        while ((y = t[h++])) y(x, b, a, s);
                        if (o) {
                            if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
                            b = we(b);
                        }
                        L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
                    }
                    return c && ((T = E), (l = w)), x;
                };
            return n ? se(o) : o;
        }
        return (
            (s = oe.compile = function (e, t) {
                var n,
                    r = [],
                    i = [],
                    o = S[e + " "];
                if (!o) {
                    t || (t = a(e)), (n = t.length);
                    while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                    (o = S(e, Ee(i, r))).selector = e;
                }
                return o;
            }),
            (u = oe.select = function (e, t, n, i) {
                var o,
                    u,
                    l,
                    c,
                    f,
                    p = "function" == typeof e && e,
                    d = !i && a((e = p.selector || e));
                if (((n = n || []), 1 === d.length)) {
                    if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                        if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                        p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
                    }
                    o = V.needsContext.test(e) ? 0 : u.length;
                    while (o--) {
                        if (((l = u[o]), r.relative[(c = l.type)])) break;
                        if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), (K.test(u[0].type) && ge(t.parentNode)) || t))) {
                            if ((u.splice(o, 1), !(e = i.length && ve(u)))) return L.apply(n, i), n;
                            break;
                        }
                    }
                }
                return (p || s(e, d))(i, t, !g, n, !t || (K.test(e) && ge(t.parentNode)) || t), n;
            }),
            (n.sortStable = b.split("").sort(D).join("") === b),
            (n.detectDuplicates = !!f),
            p(),
            (n.sortDetached = ue(function (e) {
                return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
            })),
            ue(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
                le("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (n.attributes &&
                ue(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
                le("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                }),
            ue(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                le(P, function (e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }),
            oe
        );
    })(e);
    (w.find = E), (w.expr = E.selectors), (w.expr[":"] = w.expr.pseudos), (w.uniqueSort = w.unique = E.uniqueSort), (w.text = E.getText), (w.isXMLDoc = E.isXML), (w.contains = E.contains), (w.escapeSelector = E.escape);
    var k = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        S = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        D = w.expr.match.needsContext;
    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, t, n) {
        return g(t)
            ? w.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
              })
            : t.nodeType
            ? w.grep(e, function (e) {
                  return (e === t) !== n;
              })
            : "string" != typeof t
            ? w.grep(e, function (e) {
                  return u.call(t, e) > -1 !== n;
              })
            : w.filter(t, e, n);
    }
    (w.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? w.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : w.find.matches(
                      e,
                      w.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        w.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        w(e).filter(function () {
                            for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
                return r > 1 ? w.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(j(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(j(this, e || [], !0));
            },
            is: function (e) {
                return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
            },
        });
    var q,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((w.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (((n = n || q), "string" == typeof e)) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (((t = t instanceof w ? t[0] : t), w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : g(e) ? (void 0 !== n.ready ? n.ready(e) : e(w)) : w.makeArray(e, this);
    }).prototype = w.fn),
        (q = w(r));
    var H = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };
    w.fn.extend({
        has: function (e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    });
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    w.each(
        {
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
                return k(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
                return k(e, "parentNode", n);
            },
            next: function (e) {
                return P(e, "nextSibling");
            },
            prev: function (e) {
                return P(e, "previousSibling");
            },
            nextAll: function (e) {
                return k(e, "nextSibling");
            },
            prevAll: function (e) {
                return k(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
                return k(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
                return k(e, "previousSibling", n);
            },
            siblings: function (e) {
                return S((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
                return S(e.firstChild);
            },
            contents: function (e) {
                return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
            },
        },
        function (e, t) {
            w.fn[e] = function (n, r) {
                var i = w.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
            };
        }
    );
    var M = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        var t = {};
        return (
            w.each(e.match(M) || [], function (e, n) {
                t[n] = !0;
            }),
            t
        );
    }
    w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t,
            n,
            r,
            i,
            o = [],
            a = [],
            s = -1,
            u = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1) {
                    n = a.shift();
                    while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && ((s = o.length), (n = !1));
                }
                e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
            },
            l = {
                add: function () {
                    return (
                        o &&
                            (n && !t && ((s = o.length - 1), a.push(n)),
                            (function t(n) {
                                w.each(n, function (n, r) {
                                    g(r) ? (e.unique && l.has(r)) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
                                });
                            })(arguments),
                            n && !t && u()),
                        this
                    );
                },
                remove: function () {
                    return (
                        w.each(arguments, function (e, t) {
                            var n;
                            while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? w.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                    return o && (o = []), this;
                },
                disable: function () {
                    return (i = a = []), (o = n = ""), this;
                },
                disabled: function () {
                    return !o;
                },
                lock: function () {
                    return (i = a = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                    return !!i;
                },
                fireWith: function (e, n) {
                    return i || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || u()), this;
                },
                fire: function () {
                    return l.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!r;
                },
            };
        return l;
    };
    function I(e) {
        return e;
    }
    function W(e) {
        throw e;
    }
    function $(e, t, n, r) {
        var i;
        try {
            e && g((i = e.promise)) ? i.call(e).done(t).fail(n) : e && g((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    w.extend({
        Deferred: function (t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"],
                ],
                r = "pending",
                i = {
                    state: function () {
                        return r;
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                        return i.then(null, e);
                    },
                    pipe: function () {
                        var e = arguments;
                        return w
                            .Deferred(function (t) {
                                w.each(n, function (n, r) {
                                    var i = g(e[r[4]]) && e[r[4]];
                                    o[r[1]](function () {
                                        var e = i && i.apply(this, arguments);
                                        e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
                                    });
                                }),
                                    (e = null);
                            })
                            .promise();
                    },
                    then: function (t, r, i) {
                        var o = 0;
                        function a(t, n, r, i) {
                            return function () {
                                var s = this,
                                    u = arguments,
                                    l = function () {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            (l = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                g(l)
                                                    ? i
                                                        ? l.call(e, a(o, n, I, i), a(o, n, W, i))
                                                        : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith)))
                                                    : (r !== I && ((s = void 0), (u = [e])), (i || n.resolveWith)(s, u));
                                        }
                                    },
                                    c = i
                                        ? l
                                        : function () {
                                              try {
                                                  l();
                                              } catch (e) {
                                                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && ((s = void 0), (u = [e])), n.rejectWith(s, u));
                                              }
                                          };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
                            };
                        }
                        return w
                            .Deferred(function (e) {
                                n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
                            })
                            .promise();
                    },
                    promise: function (e) {
                        return null != e ? w.extend(e, i) : i;
                    },
                },
                o = {};
            return (
                w.each(n, function (e, t) {
                    var a = t[2],
                        s = t[5];
                    (i[t[1]] = a.add),
                        s &&
                            a.add(
                                function () {
                                    r = s;
                                },
                                n[3 - e][2].disable,
                                n[3 - e][3].disable,
                                n[0][2].lock,
                                n[0][3].lock
                            ),
                        a.add(t[3].fire),
                        (o[t[0]] = function () {
                            return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                        }),
                        (o[t[0] + "With"] = a.fireWith);
                }),
                i.promise(o),
                t && t.call(o, o),
                o
            );
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                s = function (e) {
                    return function (n) {
                        (r[e] = this), (i[e] = arguments.length > 1 ? o.call(arguments) : n), --t || a.resolveWith(r, i);
                    };
                };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            while (n--) $(i[n], s(n), a.reject);
            return a.promise();
        },
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
        (w.readyException = function (t) {
            e.setTimeout(function () {
                throw t;
            });
        });
    var F = w.Deferred();
    (w.fn.ready = function (e) {
        return (
            F.then(e)["catch"](function (e) {
                w.readyException(e);
            }),
            this
        );
    }),
        w.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --w.readyWait : w.isReady) || ((w.isReady = !0), (!0 !== e && --w.readyWait > 0) || F.resolveWith(r, [w]));
            },
        }),
        (w.ready.then = F.then);
    function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
    }
    "complete" === r.readyState || ("loading" !== r.readyState && !r.documentElement.doScroll) ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
    var z = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n)) {
                i = !0;
                for (s in n) z(e, t, s, n[s], !0, o, a);
            } else if (
                void 0 !== r &&
                ((i = !0),
                g(r) || (a = !0),
                l &&
                    (a
                        ? (t.call(e, r), (t = null))
                        : ((l = t),
                          (t = function (e, t, n) {
                              return l.call(w(e), n);
                          }))),
                t)
            )
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        X = /^-ms-/,
        U = /-([a-z])/g;
    function V(e, t) {
        return t.toUpperCase();
    }
    function G(e) {
        return e.replace(X, "ms-").replace(U, V);
    }
    var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function Q() {
        this.expando = w.expando + Q.uid++;
    }
    (Q.uid = 1),
        (Q.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), Y(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ("string" == typeof t) i[G(t)] = n;
                else for (r in t) i[G(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                        while (n--) delete r[t[n]];
                    }
                    (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !w.isEmptyObject(t);
            },
        });
    var J = new Q(),
        K = new Q(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
    function te(e) {
        return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e));
    }
    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (((r = "data-" + t.replace(ee, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                try {
                    n = te(n);
                } catch (e) {}
                K.set(e, t, n);
            } else n = void 0;
        return n;
    }
    w.extend({
        hasData: function (e) {
            return K.hasData(e) || J.hasData(e);
        },
        data: function (e, t, n) {
            return K.access(e, t, n);
        },
        removeData: function (e, t) {
            K.remove(e, t);
        },
        _data: function (e, t, n) {
            return J.access(e, t, n);
        },
        _removeData: function (e, t) {
            J.remove(e, t);
        },
    }),
        w.fn.extend({
            data: function (e, t) {
                var n,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && ((i = K.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                        n = a.length;
                        while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && ((r = G(r.slice(5))), ne(o, r, i[r]));
                        J.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof e
                    ? this.each(function () {
                          K.set(this, e);
                      })
                    : z(
                          this,
                          function (t) {
                              var n;
                              if (o && void 0 === t) {
                                  if (void 0 !== (n = K.get(o, e))) return n;
                                  if (void 0 !== (n = ne(o, e))) return n;
                              } else
                                  this.each(function () {
                                      K.set(this, e, t);
                                  });
                          },
                          null,
                          t,
                          arguments.length > 1,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    K.remove(this, e);
                });
            },
        }),
        w.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return (t = (t || "fx") + "queue"), (r = J.get(e, t)), n && (!r || Array.isArray(n) ? (r = J.access(e, t, w.makeArray(n))) : r.push(n)), r || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = w.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = w._queueHooks(e, t),
                    a = function () {
                        w.dequeue(e, t);
                    };
                "inprogress" === i && ((i = n.shift()), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    J.get(e, n) ||
                    J.access(e, n, {
                        empty: w.Callbacks("once memory").add(function () {
                            J.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        w.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                        ? w.queue(this[0], e)
                        : void 0 === t
                        ? this
                        : this.each(function () {
                              var n = w.queue(this, e, t);
                              w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    w.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = w.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
                while (a--) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t);
            },
        });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = function (e, t) {
            return "none" === (e = t || e).style.display || ("" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display"));
        },
        se = function (e, t, n, r) {
            var i,
                o,
                a = {};
            for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i;
        };
    function ue(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r
                ? function () {
                      return r.cur();
                  }
                : function () {
                      return w.css(e, t, "");
                  },
            u = s(),
            l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || ("px" !== l && +u)) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            (u /= 2), (l = l || c[3]), (c = +u || 1);
            while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
            (c *= 2), w.style(e, t, c + l), (n = n || []);
        }
        return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
    }
    var le = {};
    function ce(e) {
        var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];
        return i || ((t = n.body.appendChild(n.createElement(r))), (i = w.css(t, "display")), t.parentNode.removeChild(t), "none" === i && (i = "block"), (le[r] = i), i);
    }
    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style &&
                ((n = r.style.display),
                t ? ("none" === n && ((i[o] = J.get(r, "display") || null), i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
    }
    w.fn.extend({
        show: function () {
            return fe(this, !0);
        },
        hide: function () {
            return fe(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      ae(this) ? w(this).show() : w(this).hide();
                  });
        },
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    (ge.optgroup = ge.option), (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td);
    function ye(e, t) {
        var n;
        return (n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n;
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    (a = a || f.appendChild(t.createElement("div"))), (s = (de.exec(o) || ["", ""])[1].toLowerCase()), (u = ge[s] || ge._default), (a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2]), (c = u[0]);
                    while (c--) a = a.lastChild;
                    w.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
        (f.textContent = ""), (d = 0);
        while ((o = p[d++]))
            if (r && w.inArray(o, r) > -1) i && i.push(o);
            else if (((l = w.contains(o.ownerDocument, o)), (a = ye(f.appendChild(o), "script")), l && ve(a), n)) {
                c = 0;
                while ((o = a[c++])) he.test(o.type || "") && n.push(o);
            }
        return f;
    }
    !(function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"),
            t.setAttribute("checked", "checked"),
            t.setAttribute("name", "t"),
            e.appendChild(t),
            (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (e.innerHTML = "<textarea>x</textarea>"),
            (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
    })();
    var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
        return !0;
    }
    function ke() {
        return !1;
    }
    function Se() {
        try {
            return r.activeElement;
        } catch (e) {}
    }
    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && ((r = r || n), (n = void 0));
            for (s in t) De(e, s, n, r, t[s], o);
            return e;
        }
        if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = ke;
        else if (!i) return e;
        return (
            1 === o &&
                ((a = i),
                ((i = function (e) {
                    return w().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = w.guid++))),
            e.each(function () {
                w.event.add(this, t, i, r, n);
            })
        );
    }
    (w.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.get(e);
            if (y) {
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && w.find.matchesSelector(be, i),
                    n.guid || (n.guid = w.guid++),
                    (u = y.events) || (u = y.events = {}),
                    (a = y.handle) ||
                        (a = y.handle = function (t) {
                            return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                        }),
                    (l = (t = (t || "").match(M) || [""]).length);
                while (l--)
                    (d = g = (s = Ce.exec(t[l]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                        d &&
                            ((f = w.event.special[d] || {}),
                            (d = (i ? f.delegateType : f.bindType) || d),
                            (f = w.event.special[d] || {}),
                            (c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
                            (p = u[d]) || (((p = u[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(e, r, h, a)) || (e.addEventListener && e.addEventListener(d, a))),
                            f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            (w.event.global[d] = !0));
            }
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    if (((s = Ce.exec(t[l]) || []), (d = g = s[1]), (h = (s[2] || "").split(".").sort()), d)) {
                        (f = w.event.special[d] || {}), (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []), (s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")), (a = o = p.length);
                        while (o--)
                            (c = p[o]),
                                (!i && g !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (s && !s.test(c.namespace)) ||
                                    (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                                    (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) || w.removeEvent(e, d, y.handle), delete u[d]);
                    } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t = w.event.fix(e),
                n,
                r,
                i,
                o,
                a,
                s,
                u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [],
                c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (((t.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, t))) {
                (s = w.event.handlers.call(this, t, l)), (n = 0);
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    (t.currentTarget = o.elem), (r = 0);
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
                        (t.rnamespace && !t.rnamespace.test(a.namespace)) ||
                            ((t.handleObj = a), (t.data = a.data), void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t)
                    ? function () {
                          if (this.originalEvent) return t(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[e];
                      },
                set: function (t) {
                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                },
            });
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== Se() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    if (this === Se() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
                },
                _default: function (e) {
                    return N(e.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (w.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (w.Event = function (e, t) {
            if (!(this instanceof w.Event)) return new w.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ee : ke),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && w.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[w.expando] = !0);
        }),
        (w.Event.prototype = {
            constructor: w.Event,
            isDefaultPrevented: ke,
            isPropagationStopped: ke,
            isImmediatePropagationStopped: ke,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ee), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ee), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ee), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        w.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && we.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && Te.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
            },
            w.event.addProp
        ),
        w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
            w.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n,
                        r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return (i && (i === r || w.contains(r, i))) || ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n;
                },
            };
        }),
        w.fn.extend({
            on: function (e, t, n, r) {
                return De(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return De(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = ke),
                    this.each(function () {
                        w.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
    }
    function He(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && ((o = J.access(e)), (a = J.set(t, o)), (l = o.events))) {
                delete a.handle, (a.events = {});
                for (i in l) for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
            }
            K.hasData(e) && ((s = K.access(e)), (u = w.extend({}, s)), K.set(t, u));
        }
    }
    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
    }
    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i,
            o,
            s,
            u,
            l,
            c,
            f = 0,
            p = e.length,
            d = p - 1,
            y = t[0],
            v = g(y);
        if (v || (p > 1 && "string" == typeof y && !h.checkClone && je.test(y)))
            return e.each(function (i) {
                var o = e.eq(i);
                v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
            });
        if (p && ((i = xe(t, e[0].ownerDocument, !1, e, r)), (o = i.firstChild), 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) (l = i), f !== d && ((l = w.clone(l, !0, !0)), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++)
                    (l = s[f]), he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
        }
        return e;
    }
    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ne, "<$1></$2>");
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
            if (t)
                if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
                else Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
        },
        cleanData: function (e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if ((t = n[J.expando])) {
                        if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0;
                    }
                    n[K.expando] && (n[K.expando] = void 0);
                }
        },
    }),
        w.fn.extend({
            detach: function (e) {
                return Ie(this, e, !0);
            },
            remove: function (e) {
                return Ie(this, e);
            },
            text: function (e) {
                return z(
                    this,
                    function (e) {
                        return void 0 === e
                            ? w.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return Re(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Le(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return Re(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Le(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return Re(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return Re(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return w.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return z(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = [];
                return Re(
                    this,
                    arguments,
                    function (t) {
                        var n = this.parentNode;
                        w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
                    },
                    e
                );
            },
        }),
        w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
            w.fn[e] = function (e) {
                for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) (n = a === o ? this : this.clone(!0)), w(i[a])[t](n), s.apply(r, n.get());
                return this.pushStack(r);
            };
        });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        $e = function (t) {
            var n = t.ownerDocument.defaultView;
            return (n && n.opener) || (n = e), n.getComputedStyle(t);
        },
        Be = new RegExp(oe.join("|"), "i");
    !(function () {
        function t() {
            if (c) {
                (l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                (i = "1%" !== t.top),
                    (u = 12 === n(t.marginLeft)),
                    (c.style.right = "60%"),
                    (s = 36 === n(t.right)),
                    (o = 36 === n(t.width)),
                    (c.style.position = "absolute"),
                    (a = 36 === c.offsetWidth || "absolute"),
                    be.removeChild(l),
                    (c = null);
            }
        }
        function n(e) {
            return Math.round(parseFloat(e));
        }
        var i,
            o,
            a,
            s,
            u,
            l = r.createElement("div"),
            c = r.createElement("div");
        c.style &&
            ((c.style.backgroundClip = "content-box"),
            (c.cloneNode(!0).style.backgroundClip = ""),
            (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
            w.extend(h, {
                boxSizingReliable: function () {
                    return t(), o;
                },
                pixelBoxStyles: function () {
                    return t(), s;
                },
                pixelPosition: function () {
                    return t(), i;
                },
                reliableMarginLeft: function () {
                    return t(), u;
                },
                scrollboxSize: function () {
                    return t(), a;
                },
            }));
    })();
    function Fe(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return (
            (n = n || $e(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)),
                !h.pixelBoxStyles() && We.test(a) && Be.test(t) && ((r = s.width), (i = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = r), (s.minWidth = i), (s.maxWidth = o))),
            void 0 !== a ? a + "" : a
        );
    }
    function _e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ue = { position: "absolute", visibility: "hidden", display: "block" },
        Ve = { letterSpacing: "0", fontWeight: "400" },
        Ge = ["Webkit", "Moz", "ms"],
        Ye = r.createElement("div").style;
    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1),
            n = Ge.length;
        while (n--) if ((e = Ge[n] + t) in Ye) return e;
    }
    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t;
    }
    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += w.css(e, n + oe[a], !0, i)),
                r
                    ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i)))
                    : ((u += w.css(e, "padding" + oe[a], !0, i)), "padding" !== n ? (u += w.css(e, "border" + oe[a] + "Width", !0, i)) : (s += w.css(e, "border" + oe[a] + "Width", !0, i)));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5))), u;
    }
    function et(e, t, n) {
        var r = $e(e),
            i = Fe(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto";
        }
        return (
            (a = a && (h.boxSizingReliable() || i === e.style[t])),
            ("auto" === i || (!parseFloat(i) && "inline" === w.css(e, "display", !1, r))) && ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
            (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
        );
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = G(t),
                    u = Xe.test(t),
                    l = e.style;
                if ((u || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && ((n = ue(e, t, i)), (o = "number")),
                    null != n &&
                        n === n &&
                        ("number" === o && (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
                        h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var i,
                o,
                a,
                s = G(t);
            return (
                Xe.test(t) || (t = Je(s)),
                (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
                void 0 === i && (i = Fe(e, t, r)),
                "normal" === i && t in Ve && (i = Ve[t]),
                "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
            );
        },
    }),
        w.each(["height", "width"], function (e, t) {
            w.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n)
                        return !ze.test(w.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? et(e, t, r)
                            : se(e, Ue, function () {
                                  return et(e, t, r);
                              });
                },
                set: function (e, n, r) {
                    var i,
                        o = $e(e),
                        a = "border-box" === w.css(e, "boxSizing", !1, o),
                        s = r && Ze(e, t, r, a, o);
                    return (
                        a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - 0.5)),
                        s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = w.css(e, t))),
                        Ke(e, n, s)
                    );
                },
            };
        }),
        (w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Fe(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            se(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (w.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                },
            }),
                "margin" !== e && (w.cssHooks[e + t].set = Ke);
        }),
        w.fn.extend({
            css: function (e, t) {
                return z(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                );
            },
        });
    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i);
    }
    (w.Tween = tt),
        (tt.prototype = {
            constructor: tt,
            init: function (e, t, n, r, i, o) {
                (this.elem = e), (this.prop = n), (this.easing = i || w.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (w.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = tt.propHooks[this.prop];
                return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = tt.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : tt.propHooks._default.set(this),
                    this
                );
            },
        }),
        (tt.prototype.init.prototype = tt.prototype),
        (tt.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function (e) {
                    w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop]) ? (e.elem[e.prop] = e.now) : w.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }),
        (tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (w.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (w.fx = tt.prototype.init),
        (w.fx.step = {});
    var nt,
        rt,
        it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;
    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
    }
    function st() {
        return (
            e.setTimeout(function () {
                nt = void 0;
            }),
            (nt = Date.now())
        );
    }
    function ut(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
    }
    function ct(e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = J.get(e, "fxshow");
        n.queue ||
            (null == (a = w._queueHooks(e, "fx")).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function () {
                    a.unqueued || s();
                })),
            a.unqueued++,
            p.always(function () {
                p.always(function () {
                    a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
                });
            }));
        for (r in t)
            if (((i = t[r]), it.test(i))) {
                if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    g = !0;
                }
                d[r] = (y && y[r]) || w.style(e, r);
            }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (l = y && y.display) && (l = J.get(e, "display")),
                "none" === (c = w.css(e, "display")) && (l ? (c = l) : (fe([e], !0), (l = e.style.display || l), (c = w.css(e, "display")), fe([e]))),
                ("inline" === c || ("inline-block" === c && null != l)) &&
                    "none" === w.css(e, "float") &&
                    (u ||
                        (p.done(function () {
                            h.display = l;
                        }),
                        null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                    (h.display = "inline-block"))),
                n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                        (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                    })),
                (u = !1);
            for (r in d)
                u ||
                    (y ? "hidden" in y && (g = y.hidden) : (y = J.access(e, "fxshow", { display: l })),
                    o && (y.hidden = !g),
                    g && fe([e], !0),
                    p.done(function () {
                        g || fe([e]), J.remove(e, "fxshow");
                        for (r in d) w.style(e, r, d[r]);
                    })),
                    (u = lt(g ? y[r] : 0, r, p)),
                    r in y || ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
        }
    }
    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (((r = G(n)), (i = t[r]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = w.cssHooks[r]) && "expand" in a)) {
                (o = a.expand(o)), delete e[r];
                for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
            } else t[r] = i;
    }
    function pt(e, t, n) {
        var r,
            i,
            o = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function () {
                delete u.elem;
            }),
            u = function () {
                if (i) return !1;
                for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
            },
            l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || st(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r;
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
                },
            }),
            c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++) if ((r = pt.prefilters[o].call(l, e, c, l.opts))) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return (
            w.map(c, lt, l),
            g(l.opts.start) && l.opts.start.call(e, l),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
            w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
            l
        );
    }
    (w.Animation = w.extend(pt, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, ie.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            g(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
            for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (pt.tweeners[n] = pt.tweeners[n] || []), pt.tweeners[n].unshift(t);
        },
        prefilters: [ct],
        prefilter: function (e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        },
    })),
        (w.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? w.extend({}, e) : { complete: n || (!n && t) || (g(e) && e), duration: e, easing: (n && t) || (t && !g(t) && t) };
            return (
                w.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in w.fx.speeds ? (r.duration = w.fx.speeds[r.duration]) : (r.duration = w.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
                }),
                r
            );
        }),
        w.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
                var i = w.isEmptyObject(e),
                    o = w.speed(t, n, r),
                    a = function () {
                        var t = pt(this, w.extend({}, e), o);
                        (i || J.get(this, "finish")) && t.stop(!0);
                    };
                return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = w.timers,
                            a = J.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                        for (i = o.length; i--; ) o[i].elem !== this || (null != e && o[i].queue !== e) || (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                        (!t && n) || w.dequeue(this, e);
                    })
                );
            },
            finish: function (e) {
                return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                        var t,
                            n = J.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = w.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        w.each(["toggle", "show", "hide"], function (e, t) {
            var n = w.fn[t];
            w.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
            };
        }),
        w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
            w.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
            };
        }),
        (w.timers = []),
        (w.fx.tick = function () {
            var e,
                t = 0,
                n = w.timers;
            for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), (nt = void 0);
        }),
        (w.fx.timer = function (e) {
            w.timers.push(e), w.fx.start();
        }),
        (w.fx.interval = 13),
        (w.fx.start = function () {
            rt || ((rt = !0), at());
        }),
        (w.fx.stop = function () {
            rt = null;
        }),
        (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (w.fn.delay = function (t, n) {
            return (
                (t = w.fx ? w.fx.speeds[t] || t : t),
                (n = n || "fx"),
                this.queue(n, function (n, r) {
                    var i = e.setTimeout(n, t);
                    r.stop = function () {
                        e.clearTimeout(i);
                    };
                })
            );
        }),
        (function () {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            (e.type = "checkbox"), (h.checkOn = "" !== e.value), (h.optSelected = t.selected), ((e = r.createElement("input")).value = "t"), (e.type = "radio"), (h.radioValue = "t" === e.value);
        })();
    var dt,
        ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return z(this, w.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e);
            });
        },
    }),
        w.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute
                        ? w.prop(e, t, n)
                        : ((1 === o && w.isXMLDoc(e)) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void w.removeAttr(e, t)
                                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                  ? r
                                  : (e.setAttribute(t, n + ""), n)
                              : i && "get" in i && null !== (r = i.get(e, t))
                              ? r
                              : null == (r = w.find.attr(e, t))
                              ? void 0
                              : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!h.radioValue && "radio" === t && N(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    r = 0,
                    i = t && t.match(M);
                if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
            },
        }),
        (dt = {
            set: function (e, t, n) {
                return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ht[t] || w.find.attr;
            ht[t] = function (e, t, r) {
                var i,
                    o,
                    a = t.toLowerCase();
                return r || ((o = ht[a]), (ht[a] = i), (i = null != n(e, t, r) ? a : null), (ht[a] = o)), i;
            };
        });
    var gt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function (e, t) {
            return z(this, w.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e];
            });
        },
    }),
        w.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && w.isXMLDoc(e)) || ((t = w.propFix[t] || t), (i = w.propHooks[t])),
                        void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = w.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : gt.test(e.nodeName) || (yt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        h.optSelected ||
            (w.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            w.propFix[this.toLowerCase()] = this;
        });
    function vt(e) {
        return (e.match(M) || []).join(" ");
    }
    function mt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
    }
    w.fn.extend({
        addClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (g(e))
                return this.each(function (t) {
                    w(this).addClass(e.call(this, t, mt(this)));
                });
            if ((t = xt(e)).length)
                while ((n = this[u++]))
                    if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                        a = 0;
                        while ((o = t[a++])) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s);
                    }
            return this;
        },
        removeClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (g(e))
                return this.each(function (t) {
                    w(this).removeClass(e.call(this, t, mt(this)));
                });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length)
                while ((n = this[u++]))
                    if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                        a = 0;
                        while ((o = t[a++])) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s);
                    }
            return this;
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r
                ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                : g(e)
                ? this.each(function (n) {
                      w(this).toggleClass(e.call(this, n, mt(this), t), t);
                  })
                : this.each(function () {
                      var t, i, o, a;
                      if (r) {
                          (i = 0), (o = w(this)), (a = xt(e));
                          while ((t = a[i++])) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                      } else (void 0 !== e && "boolean" !== n) || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
                  });
        },
        hasClass: function (e) {
            var t,
                n,
                r = 0;
            t = " " + e + " ";
            while ((n = this[r++])) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1;
        },
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t,
                n,
                r,
                i = this[0];
            {
                if (arguments.length)
                    return (
                        (r = g(e)),
                        this.each(function (n) {
                            var i;
                            1 === this.nodeType &&
                                (null == (i = r ? e.call(this, n, w(this).val()) : e)
                                    ? (i = "")
                                    : "number" == typeof i
                                    ? (i += "")
                                    : Array.isArray(i) &&
                                      (i = w.map(i, function (e) {
                                          return null == e ? "" : e + "";
                                      })),
                                ((t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value")) || (this.value = i));
                        })
                    );
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
            }
        },
    }),
        w.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = w.find.attr(e, "value");
                        return null != t ? t : vt(w.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r,
                            i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                                if (((t = w(n).val()), a)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function (e, t) {
                        var n,
                            r,
                            i = e.options,
                            o = w.makeArray(t),
                            a = i.length;
                        while (a--) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        w.each(["radio", "checkbox"], function () {
            (w.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = w.inArray(w(e).val(), t) > -1);
                },
            }),
                h.checkOn ||
                    (w.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        }),
        (h.focusin = "onfocusin" in e);
    var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function (e) {
            e.stopPropagation();
        };
    w.extend(w.event, {
        trigger: function (t, n, i, o) {
            var a,
                s,
                u,
                l,
                c,
                p,
                d,
                h,
                v = [i || r],
                m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
                ((s = h = u = i = i || r),
                3 !== i.nodeType &&
                    8 !== i.nodeType &&
                    !wt.test(m + w.event.triggered) &&
                    (m.indexOf(".") > -1 && ((m = (x = m.split(".")).shift()), x.sort()),
                    (c = m.indexOf(":") < 0 && "on" + m),
                    (t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t)),
                    (t.isTrigger = o ? 2 : 3),
                    (t.namespace = x.join(".")),
                    (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (t.result = void 0),
                    t.target || (t.target = i),
                    (n = null == n ? [t] : w.makeArray(n, [t])),
                    (d = w.event.special[m] || {}),
                    o || !d.trigger || !1 !== d.trigger.apply(i, n)))
            ) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), (u = s);
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped())
                    (h = s),
                        (t.type = a > 1 ? l : d.bindType || m),
                        (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n),
                        (p = c && s[c]) && p.apply && Y(s) && ((t.result = p.apply(s, n)), !1 === t.result && t.preventDefault());
                return (
                    (t.type = m),
                    o ||
                        t.isDefaultPrevented() ||
                        (d._default && !1 !== d._default.apply(v.pop(), n)) ||
                        !Y(i) ||
                        (c &&
                            g(i[m]) &&
                            !y(i) &&
                            ((u = i[c]) && (i[c] = null),
                            (w.event.triggered = m),
                            t.isPropagationStopped() && h.addEventListener(m, Tt),
                            i[m](),
                            t.isPropagationStopped() && h.removeEventListener(m, Tt),
                            (w.event.triggered = void 0),
                            u && (i[c] = u))),
                    t.result
                );
            }
        },
        simulate: function (e, t, n) {
            var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
            w.event.trigger(r, null, t);
        },
    }),
        w.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    w.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return w.event.trigger(e, t, n, !0);
            },
        }),
        h.focusin ||
            w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                    w.event.simulate(t, e.target, w.event.fix(e));
                };
                w.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this,
                            i = J.access(r, t);
                        i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
                    },
                    teardown: function () {
                        var r = this.ownerDocument || this,
                            i = J.access(r, t) - 1;
                        i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
                    },
                };
            });
    var Ct = e.location,
        Et = Date.now(),
        kt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return (n && !n.getElementsByTagName("parsererror").length) || w.error("Invalid XML: " + t), n;
    };
    var St = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            w.each(t, function (t, i) {
                n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
            });
        else if (n || "object" !== x(t)) r(e, t);
        else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
    }
    (w.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
            w.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) jt(n, e[n], t, i);
        return r.join("&");
    }),
        w.fn.extend({
            serialize: function () {
                return w.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = w.prop(this, "elements");
                    return e ? w.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
                    })
                    .map(function (e, t) {
                        var n = w(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? w.map(n, function (e) {
                                  return { name: t.name, value: e.replace(Dt, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(Dt, "\r\n") };
                    })
                    .get();
            },
        });
    var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Bt = r.createElement("a");
    Bt.href = Ct.href;
    function Ft(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
                i = 0,
                o = t.toLowerCase().match(M) || [];
            if (g(n)) while ((r = o[i++])) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function _t(e, t, n, r) {
        var i = {},
            o = e === Wt;
        function a(s) {
            var u;
            return (
                (i[s] = !0),
                w.each(e[s] || [], function (e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || o || i[l] ? (o ? !(u = l) : void 0) : (t.dataTypes.unshift(l), a(l), !1);
                }),
                u
            );
        }
        return a(t.dataTypes[0]) || (!i["*"] && a("*"));
    }
    function zt(e, t) {
        var n,
            r,
            i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e;
    }
    function Xt(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break;
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                }
                a || (a = i);
            }
            o = o || a;
        }
        if (o) return o !== u[0] && u.unshift(o), n[o];
    }
    function Ut(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift())))
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                                break;
                            }
                    if (!0 !== a)
                        if (a && e["throws"]) t = a(t);
                        else
                            try {
                                t = a(t);
                            } catch (e) {
                                return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                            }
                }
        return { state: "success", data: t };
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
            converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML },
            flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function (t, n) {
            "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h = w.ajaxSetup({}, n),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                m = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                T = {},
                C = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s) {
                                s = {};
                                while ((t = Ot.exec(a))) s[t[1].toLowerCase()] = t[2];
                            }
                            t = s[e.toLowerCase()];
                        }
                        return null == t ? null : t;
                    },
                    getAllResponseHeaders: function () {
                        return c ? a : null;
                    },
                    setRequestHeader: function (e, t) {
                        return null == c && ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e), (b[e] = t)), this;
                    },
                    overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this;
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c) E.always(e[E.status]);
                            else for (t in e) x[t] = [x[t], e[t]];
                        return this;
                    },
                    abort: function (e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this;
                    },
                };
            if (
                (v.promise(E),
                (h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//")),
                (h.type = n.method || n.type || h.method || h.type),
                (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""]),
                null == h.crossDomain)
            ) {
                l = r.createElement("a");
                try {
                    (l.href = h.url), (l.href = l.href), (h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host);
                } catch (e) {
                    h.crossDomain = !0;
                }
            }
            if ((h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c)) return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !Mt.test(h.type)),
                (o = h.url.replace(Lt, "")),
                h.hasContent
                    ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+"))
                    : ((d = h.url.slice(o.length)),
                      h.data && (h.processData || "string" == typeof h.data) && ((o += (kt.test(o) ? "&" : "?") + h.data), delete h.data),
                      !1 === h.cache && ((o = o.replace(Ht, "$1")), (d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d)),
                      (h.url = o + d)),
                h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
                ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) && E.setRequestHeader("Content-Type", h.contentType),
                E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (((C = "abort"), m.add(h.complete), E.done(h.success), E.fail(h.error), (i = _t(Wt, h, n, E)))) {
                if (((E.readyState = 1), f && y.trigger("ajaxSend", [E, h]), c)) return E;
                h.async &&
                    h.timeout > 0 &&
                    (u = e.setTimeout(function () {
                        E.abort("timeout");
                    }, h.timeout));
                try {
                    (c = !1), i.send(b, k);
                } catch (e) {
                    if (c) throw e;
                    k(-1, e);
                }
            } else k(-1, "No Transport");
            function k(t, n, r, s) {
                var l,
                    p,
                    d,
                    b,
                    T,
                    C = n;
                c ||
                    ((c = !0),
                    u && e.clearTimeout(u),
                    (i = void 0),
                    (a = s || ""),
                    (E.readyState = t > 0 ? 4 : 0),
                    (l = (t >= 200 && t < 300) || 304 === t),
                    r && (b = Xt(h, E, r)),
                    (b = Ut(h, b, E, l)),
                    l
                        ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
                          204 === t || "HEAD" === h.type ? (C = "nocontent") : 304 === t ? (C = "notmodified") : ((C = b.state), (p = b.data), (l = !(d = b.error))))
                        : ((d = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
                    (E.status = t),
                    (E.statusText = (n || C) + ""),
                    l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
                    E.statusCode(x),
                    (x = void 0),
                    f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
                    m.fireWith(g, [E, C]),
                    f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
            }
            return E;
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json");
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script");
        },
    }),
        w.each(["get", "post"], function (e, t) {
            w[t] = function (e, n, r, i) {
                return g(n) && ((i = i || r), (r = n), (n = void 0)), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e));
            };
        }),
        (w._evalUrl = function (e) {
            return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
        }),
        w.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (g(e) && (e = e.call(this[0])),
                        (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                var e = this;
                                while (e.firstElementChild) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (e) {
                return g(e)
                    ? this.each(function (t) {
                          w(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                          var t = w(this),
                              n = t.contents();
                          n.length ? n.wrapAll(e) : t.append(e);
                      });
            },
            wrap: function (e) {
                var t = g(e);
                return this.each(function (n) {
                    w(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            w(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (w.expr.pseudos.hidden = function (e) {
            return !w.expr.pseudos.visible(e);
        }),
        (w.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (w.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest();
            } catch (e) {}
        });
    var Vt = { 0: 200, 1223: 204 },
        Gt = w.ajaxSettings.xhr();
    (h.cors = !!Gt && "withCredentials" in Gt),
        (h.ajax = Gt = !!Gt),
        w.ajaxTransport(function (t) {
            var n, r;
            if (h.cors || (Gt && !t.crossDomain))
                return {
                    send: function (i, o) {
                        var a,
                            s = t.xhr();
                        if ((s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (a in i) s.setRequestHeader(a, i[a]);
                        (n = function (e) {
                            return function () {
                                n &&
                                    ((n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                    "abort" === e
                                        ? s.abort()
                                        : "error" === e
                                        ? "number" != typeof s.status
                                            ? o(0, "error")
                                            : o(s.status, s.statusText)
                                        : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
                            };
                        }),
                            (s.onload = n()),
                            (r = s.onerror = s.ontimeout = n("error")),
                            void 0 !== s.onabort
                                ? (s.onabort = r)
                                : (s.onreadystatechange = function () {
                                      4 === s.readyState &&
                                          e.setTimeout(function () {
                                              n && r();
                                          });
                                  }),
                            (n = n("abort"));
                        try {
                            s.send((t.hasContent && t.data) || null);
                        } catch (e) {
                            if (n) throw e;
                        }
                    },
                    abort: function () {
                        n && n();
                    },
                };
        }),
        w.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        w.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return w.globalEval(e), e;
                },
            },
        }),
        w.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        w.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (i, o) {
                        (t = w("<script>")
                            .prop({ charset: e.scriptCharset, src: e.url })
                            .on(
                                "load error",
                                (n = function (e) {
                                    t.remove(), (n = null), e && o("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            r.head.appendChild(t[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
            }
        });
    var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return (this[e] = !0), e;
        },
    }),
        w.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i,
                o,
                a,
                s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0])
                return (
                    (i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                    s ? (t[s] = t[s].replace(Qt, "$1" + i)) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                    (t.converters["script json"] = function () {
                        return a || w.error(i + " was not called"), a[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    (o = e[i]),
                    (e[i] = function () {
                        a = arguments;
                    }),
                    r.always(function () {
                        void 0 === o ? w(e).removeProp(i) : (e[i] = o), t[i] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(i)), a && g(o) && o(a[0]), (a = o = void 0);
                    }),
                    "script"
                );
        }),
        (h.createHTMLDocument = (function () {
            var e = r.implementation.createHTMLDocument("").body;
            return (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length;
        })()),
        (w.parseHTML = function (e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && ((n = t), (t = !1));
            var i, o, a;
            return (
                t || (h.createHTMLDocument ? (((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href), t.head.appendChild(i)) : (t = r)),
                (o = A.exec(e)),
                (a = !n && []),
                o ? [t.createElement(o[1])] : ((o = xe([e], t, a)), a && a.length && w(a).remove(), w.merge([], o.childNodes))
            );
        }),
        (w.fn.load = function (e, t, n) {
            var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
            return (
                s > -1 && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
                g(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                a.length > 0 &&
                    w
                        .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                        .done(function (e) {
                            (o = arguments), a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    a.each(function () {
                                        n.apply(this, o || [e.responseText, t, e]);
                                    });
                                }
                        ),
                this
            );
        }),
        w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            w.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        (w.expr.pseudos.animated = function (e) {
            return w.grep(w.timers, function (t) {
                return e === t.elem;
            }).length;
        }),
        (w.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = w.css(e, "position"),
                    f = w(e),
                    p = {};
                "static" === c && (e.style.position = "relative"),
                    (s = f.offset()),
                    (o = w.css(e, "top")),
                    (u = w.css(e, "left")),
                    (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? ((a = (r = f.position()).top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                    g(t) && (t = t.call(e, n, w.extend({}, s))),
                    null != t.top && (p.top = t.top - s.top + a),
                    null != t.left && (p.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, p) : f.css(p);
            },
        }),
        w.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e
                        ? this
                        : this.each(function (t) {
                              w.offset.setOffset(this, e, t);
                          });
                var t,
                    n,
                    r = this[0];
                if (r) return r.getClientRects().length ? ((t = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        (t = this.offset()), (n = r.ownerDocument), (e = r.offsetParent || n.documentElement);
                        while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)), (i.left += w.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent;
                    while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                    return e || be;
                });
            },
        }),
        w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
            var n = "pageYOffset" === t;
            w.fn[e] = function (r) {
                return z(
                    this,
                    function (e, r, i) {
                        var o;
                        if ((y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
                    },
                    e,
                    r,
                    arguments.length
                );
            };
        }),
        w.each(["top", "left"], function (e, t) {
            w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
                if (n) return (n = Fe(e, t)), We.test(n) ? w(e).position()[t] + "px" : n;
            });
        }),
        w.each({ Height: "height", Width: "width" }, function (e, t) {
            w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                w.fn[r] = function (i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return z(
                        this,
                        function (t, n, i) {
                            var o;
                            return y(t)
                                ? 0 === r.indexOf("outer")
                                    ? t["inner" + e]
                                    : t.document.documentElement["client" + e]
                                : 9 === t.nodeType
                                ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                                : void 0 === i
                                ? w.css(t, n, s)
                                : w.style(t, n, i, s);
                        },
                        t,
                        a ? i : void 0,
                        a
                    );
                };
            });
        }),
        w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            w.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
        }),
        w.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        w.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
        }),
        (w.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
                return (
                    (r = o.call(arguments, 2)),
                    (i = function () {
                        return e.apply(t || this, r.concat(o.call(arguments)));
                    }),
                    (i.guid = e.guid = e.guid || w.guid++),
                    i
                );
        }),
        (w.holdReady = function (e) {
            e ? w.readyWait++ : w.ready(!0);
        }),
        (w.isArray = Array.isArray),
        (w.parseJSON = JSON.parse),
        (w.nodeName = N),
        (w.isFunction = g),
        (w.isWindow = y),
        (w.camelCase = G),
        (w.type = x),
        (w.now = Date.now),
        (w.isNumeric = function (e) {
            var t = w.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return w;
            });
    var Jt = e.jQuery,
        Kt = e.$;
    return (
        (w.noConflict = function (t) {
            return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
        }),
        t || (e.jQuery = e.$ = w),
        w
    );
});

/* ========================
	wow.js
========================= */
/*! WOW - v1.1.2 - 2015-08-19
 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */ (function () {
    var a,
        b,
        c,
        d,
        e,
        f = function (a, b) {
            return function () {
                return a.apply(b, arguments);
            };
        },
        g =
            [].indexOf ||
            function (a) {
                for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
                return -1;
            };
    (b = (function () {
        function a() {}
        return (
            (a.prototype.extend = function (a, b) {
                var c, d;
                for (c in b) (d = b[c]), null == a[c] && (a[c] = d);
                return a;
            }),
            (a.prototype.isMobile = function (a) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
            }),
            (a.prototype.createEvent = function (a, b, c, d) {
                var e;
                return (
                    null == b && (b = !1),
                    null == c && (c = !1),
                    null == d && (d = null),
                    null != document.createEvent
                        ? ((e = document.createEvent("CustomEvent")), e.initCustomEvent(a, b, c, d))
                        : null != document.createEventObject
                        ? ((e = document.createEventObject()), (e.eventType = a))
                        : (e.eventName = a),
                    e
                );
            }),
            (a.prototype.emitEvent = function (a, b) {
                return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0;
            }),
            (a.prototype.addEvent = function (a, b, c) {
                return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : (a[b] = c);
            }),
            (a.prototype.removeEvent = function (a, b, c) {
                return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b];
            }),
            (a.prototype.innerHeight = function () {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
            }),
            a
        );
    })()),
        (c =
            this.WeakMap ||
            this.MozWeakMap ||
            (c = (function () {
                function a() {
                    (this.keys = []), (this.values = []);
                }
                return (
                    (a.prototype.get = function (a) {
                        var b, c, d, e, f;
                        for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) if (((c = f[b]), c === a)) return this.values[b];
                    }),
                    (a.prototype.set = function (a, b) {
                        var c, d, e, f, g;
                        for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) if (((d = g[c]), d === a)) return void (this.values[c] = b);
                        return this.keys.push(a), this.values.push(b);
                    }),
                    a
                );
            })())),
        (a =
            this.MutationObserver ||
            this.WebkitMutationObserver ||
            this.MozMutationObserver ||
            (a = (function () {
                function a() {
                    "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
                        "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
                }
                return (a.notSupported = !0), (a.prototype.observe = function () {}), a;
            })())),
        (d =
            this.getComputedStyle ||
            function (a) {
                return (
                    (this.getPropertyValue = function (b) {
                        var c;
                        return (
                            "float" === b && (b = "styleFloat"),
                            e.test(b) &&
                                b.replace(e, function (a, b) {
                                    return b.toUpperCase();
                                }),
                            (null != (c = a.currentStyle) ? c[b] : void 0) || null
                        );
                    }),
                    this
                );
            }),
        (e = /(\-([a-z]){1})/g),
        (this.WOW = (function () {
            function e(a) {
                null == a && (a = {}),
                    (this.scrollCallback = f(this.scrollCallback, this)),
                    (this.scrollHandler = f(this.scrollHandler, this)),
                    (this.resetAnimation = f(this.resetAnimation, this)),
                    (this.start = f(this.start, this)),
                    (this.scrolled = !0),
                    (this.config = this.util().extend(a, this.defaults)),
                    null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)),
                    (this.animationNameCache = new c()),
                    (this.wowEvent = this.util().createEvent(this.config.boxClass));
            }
            return (
                (e.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null }),
                (e.prototype.init = function () {
                    var a;
                    return (
                        (this.element = window.document.documentElement), "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), (this.finished = [])
                    );
                }),
                (e.prototype.start = function () {
                    var b, c, d, e;
                    if (
                        ((this.stopped = !1),
                        (this.boxes = function () {
                            var a, c, d, e;
                            for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) (b = d[a]), e.push(b);
                            return e;
                        }.call(this)),
                        (this.all = function () {
                            var a, c, d, e;
                            for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) (b = d[a]), e.push(b);
                            return e;
                        }.call(this)),
                        this.boxes.length)
                    )
                        if (this.disabled()) this.resetStyle();
                        else for (e = this.boxes, c = 0, d = e.length; d > c; c++) (b = e[c]), this.applyStyle(b, !0);
                    return (
                        this.disabled() ||
                            (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), (this.interval = setInterval(this.scrollCallback, 50))),
                        this.config.live
                            ? new a(
                                  (function (a) {
                                      return function (b) {
                                          var c, d, e, f, g;
                                          for (g = [], c = 0, d = b.length; d > c; c++)
                                              (f = b[c]),
                                                  g.push(
                                                      function () {
                                                          var a, b, c, d;
                                                          for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) (e = c[a]), d.push(this.doSync(e));
                                                          return d;
                                                      }.call(a)
                                                  );
                                          return g;
                                      };
                                  })(this)
                              ).observe(document.body, { childList: !0, subtree: !0 })
                            : void 0
                    );
                }),
                (e.prototype.stop = function () {
                    return (
                        (this.stopped = !0),
                        this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                        this.util().removeEvent(window, "resize", this.scrollHandler),
                        null != this.interval ? clearInterval(this.interval) : void 0
                    );
                }),
                (e.prototype.sync = function () {
                    return a.notSupported ? this.doSync(this.element) : void 0;
                }),
                (e.prototype.doSync = function (a) {
                    var b, c, d, e, f;
                    if ((null == a && (a = this.element), 1 === a.nodeType)) {
                        for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++)
                            (b = e[c]), g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push((this.scrolled = !0))) : f.push(void 0);
                        return f;
                    }
                }),
                (e.prototype.show = function (a) {
                    return (
                        this.applyStyle(a),
                        (a.className = a.className + " " + this.config.animateClass),
                        null != this.config.callback && this.config.callback(a),
                        this.util().emitEvent(a, this.wowEvent),
                        this.util().addEvent(a, "animationend", this.resetAnimation),
                        this.util().addEvent(a, "oanimationend", this.resetAnimation),
                        this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
                        this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
                        a
                    );
                }),
                (e.prototype.applyStyle = function (a, b) {
                    var c, d, e;
                    return (
                        (d = a.getAttribute("data-wow-duration")),
                        (c = a.getAttribute("data-wow-delay")),
                        (e = a.getAttribute("data-wow-iteration")),
                        this.animate(
                            (function (f) {
                                return function () {
                                    return f.customStyle(a, b, d, c, e);
                                };
                            })(this)
                        )
                    );
                }),
                (e.prototype.animate = (function () {
                    return "requestAnimationFrame" in window
                        ? function (a) {
                              return window.requestAnimationFrame(a);
                          }
                        : function (a) {
                              return a();
                          };
                })()),
                (e.prototype.resetStyle = function () {
                    var a, b, c, d, e;
                    for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) (a = d[b]), e.push((a.style.visibility = "visible"));
                    return e;
                }),
                (e.prototype.resetAnimation = function (a) {
                    var b;
                    return a.type.toLowerCase().indexOf("animationend") >= 0 ? ((b = a.target || a.srcElement), (b.className = b.className.replace(this.config.animateClass, "").trim())) : void 0;
                }),
                (e.prototype.customStyle = function (a, b, c, d, e) {
                    return (
                        b && this.cacheAnimationName(a),
                        (a.style.visibility = b ? "hidden" : "visible"),
                        c && this.vendorSet(a.style, { animationDuration: c }),
                        d && this.vendorSet(a.style, { animationDelay: d }),
                        e && this.vendorSet(a.style, { animationIterationCount: e }),
                        this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }),
                        a
                    );
                }),
                (e.prototype.vendors = ["moz", "webkit"]),
                (e.prototype.vendorSet = function (a, b) {
                    var c, d, e, f;
                    d = [];
                    for (c in b)
                        (e = b[c]),
                            (a["" + c] = e),
                            d.push(
                                function () {
                                    var b, d, g, h;
                                    for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) (f = g[b]), h.push((a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e));
                                    return h;
                                }.call(this)
                            );
                    return d;
                }),
                (e.prototype.vendorCSS = function (a, b) {
                    var c, e, f, g, h, i;
                    for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) (i = f[c]), (g = g || h.getPropertyCSSValue("-" + i + "-" + b));
                    return g;
                }),
                (e.prototype.animationName = function (a) {
                    var b;
                    try {
                        b = this.vendorCSS(a, "animation-name").cssText;
                    } catch (c) {
                        b = d(a).getPropertyValue("animation-name");
                    }
                    return "none" === b ? "" : b;
                }),
                (e.prototype.cacheAnimationName = function (a) {
                    return this.animationNameCache.set(a, this.animationName(a));
                }),
                (e.prototype.cachedAnimationName = function (a) {
                    return this.animationNameCache.get(a);
                }),
                (e.prototype.scrollHandler = function () {
                    return (this.scrolled = !0);
                }),
                (e.prototype.scrollCallback = function () {
                    var a;
                    return !this.scrolled ||
                        ((this.scrolled = !1),
                        (this.boxes = function () {
                            var b, c, d, e;
                            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) (a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
                            return e;
                        }.call(this)),
                        this.boxes.length || this.config.live)
                        ? void 0
                        : this.stop();
                }),
                (e.prototype.offsetTop = function (a) {
                    for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
                    for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop;
                    return b;
                }),
                (e.prototype.isVisible = function (a) {
                    var b, c, d, e, f;
                    return (
                        (c = a.getAttribute("data-wow-offset") || this.config.offset),
                        (f = (this.config.scrollContainer && this.config.scrollContainer.scrollTop) || window.pageYOffset),
                        (e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c),
                        (d = this.offsetTop(a)),
                        (b = d + a.clientHeight),
                        e >= d && b >= f
                    );
                }),
                (e.prototype.util = function () {
                    return null != this._util ? this._util : (this._util = new b());
                }),
                (e.prototype.disabled = function () {
                    return !this.config.mobile && this.util().isMobile(navigator.userAgent);
                }),
                e
            );
        })());
}.call(this));

/* ========================
	popper.min.js
========================= */
/* Copyright (C) Federico Zivolo 2018 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT). */ (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.Popper = t());
})(this, function () {
    "use strict";
    function e(e) {
        return e && "[object Function]" === {}.toString.call(e);
    }
    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var o = getComputedStyle(e, null);
        return t ? o[t] : o;
    }
    function o(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host;
    }
    function n(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body;
        }
        var i = t(e),
            r = i.overflow,
            p = i.overflowX,
            s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e));
    }
    function r(e) {
        if (!e) return document.documentElement;
        for (var o = ie(10) ? document.body : null, n = e.offsetParent; n === o && e.nextElementSibling; ) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? (-1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === t(n, "position") ? r(n) : n) : e ? e.ownerDocument.documentElement : document.documentElement;
    }
    function p(e) {
        var t = e.nodeName;
        return "BODY" !== t && ("HTML" === t || r(e.firstElementChild) === e);
    }
    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode);
    }
    function d(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            n = o ? e : t,
            i = o ? t : e,
            a = document.createRange();
        a.setStart(n, 0), a.setEnd(i, 0);
        var l = a.commonAncestorContainer;
        if ((e !== l && t !== l) || n.contains(i)) return p(l) ? l : r(l);
        var f = s(e);
        return f.host ? d(f.host, t) : d(e, s(t).host);
    }
    function a(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
            o = "top" === t ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement,
                r = e.ownerDocument.scrollingElement || i;
            return r[o];
        }
        return e[o];
    }
    function l(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            n = a(t, "top"),
            i = a(t, "left"),
            r = o ? -1 : 1;
        return (e.top += n * r), (e.bottom += n * r), (e.left += i * r), (e.right += i * r), e;
    }
    function f(e, t) {
        var o = "x" === t ? "Left" : "Top",
            n = "Left" == o ? "Right" : "Bottom";
        return parseFloat(e["border" + o + "Width"], 10) + parseFloat(e["border" + n + "Width"], 10);
    }
    function m(e, t, o, n) {
        return Q(t["offset" + e], t["scroll" + e], o["client" + e], o["offset" + e], o["scroll" + e], ie(10) ? o["offset" + e] + n["margin" + ("Height" === e ? "Top" : "Left")] + n["margin" + ("Height" === e ? "Bottom" : "Right")] : 0);
    }
    function h() {
        var e = document.body,
            t = document.documentElement,
            o = ie(10) && getComputedStyle(t);
        return { height: m("Height", e, t, o), width: m("Width", e, t, o) };
    }
    function c(e) {
        return de({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function g(e) {
        var o = {};
        try {
            if (ie(10)) {
                o = e.getBoundingClientRect();
                var n = a(e, "top"),
                    i = a(e, "left");
                (o.top += n), (o.left += i), (o.bottom += n), (o.right += i);
            } else o = e.getBoundingClientRect();
        } catch (t) {}
        var r = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top },
            p = "HTML" === e.nodeName ? h() : {},
            s = p.width || e.clientWidth || r.right - r.left,
            d = p.height || e.clientHeight || r.bottom - r.top,
            l = e.offsetWidth - s,
            m = e.offsetHeight - d;
        if (l || m) {
            var g = t(e);
            (l -= f(g, "x")), (m -= f(g, "y")), (r.width -= l), (r.height -= m);
        }
        return c(r);
    }
    function u(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            r = ie(10),
            p = "HTML" === o.nodeName,
            s = g(e),
            d = g(o),
            a = n(e),
            f = t(o),
            m = parseFloat(f.borderTopWidth, 10),
            h = parseFloat(f.borderLeftWidth, 10);
        i && "HTML" === o.nodeName && ((d.top = Q(d.top, 0)), (d.left = Q(d.left, 0)));
        var u = c({ top: s.top - d.top - m, left: s.left - d.left - h, width: s.width, height: s.height });
        if (((u.marginTop = 0), (u.marginLeft = 0), !r && p)) {
            var b = parseFloat(f.marginTop, 10),
                y = parseFloat(f.marginLeft, 10);
            (u.top -= m - b), (u.bottom -= m - b), (u.left -= h - y), (u.right -= h - y), (u.marginTop = b), (u.marginLeft = y);
        }
        return (r && !i ? o.contains(a) : o === a && "BODY" !== a.nodeName) && (u = l(u, o)), u;
    }
    function b(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = e.ownerDocument.documentElement,
            n = u(e, o),
            i = Q(o.clientWidth, window.innerWidth || 0),
            r = Q(o.clientHeight, window.innerHeight || 0),
            p = t ? 0 : a(o),
            s = t ? 0 : a(o, "left"),
            d = { top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r };
        return c(d);
    }
    function y(e) {
        var n = e.nodeName;
        return "BODY" === n || "HTML" === n ? !1 : "fixed" === t(e, "position") || y(o(e));
    }
    function w(e) {
        if (!e || !e.parentElement || ie()) return document.documentElement;
        for (var o = e.parentElement; o && "none" === t(o, "transform"); ) o = o.parentElement;
        return o || document.documentElement;
    }
    function E(e, t, i, r) {
        var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            s = { top: 0, left: 0 },
            a = p ? w(e) : d(e, t);
        if ("viewport" === r) s = b(a, p);
        else {
            var l;
            "scrollParent" === r ? ((l = n(o(t))), "BODY" === l.nodeName && (l = e.ownerDocument.documentElement)) : "window" === r ? (l = e.ownerDocument.documentElement) : (l = r);
            var f = u(l, a, p);
            if ("HTML" === l.nodeName && !y(a)) {
                var m = h(),
                    c = m.height,
                    g = m.width;
                (s.top += f.top - f.marginTop), (s.bottom = c + f.top), (s.left += f.left - f.marginLeft), (s.right = g + f.left);
            } else s = f;
        }
        return (s.left += i), (s.top += i), (s.right -= i), (s.bottom -= i), s;
    }
    function v(e) {
        var t = e.width,
            o = e.height;
        return t * o;
    }
    function x(e, t, o, n, i) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var p = E(o, n, r, i),
            s = { top: { width: p.width, height: t.top - p.top }, right: { width: p.right - t.right, height: p.height }, bottom: { width: p.width, height: p.bottom - t.bottom }, left: { width: t.left - p.left, height: p.height } },
            d = Object.keys(s)
                .map(function (e) {
                    return de({ key: e }, s[e], { area: v(s[e]) });
                })
                .sort(function (e, t) {
                    return t.area - e.area;
                }),
            a = d.filter(function (e) {
                var t = e.width,
                    n = e.height;
                return t >= o.clientWidth && n >= o.clientHeight;
            }),
            l = 0 < a.length ? a[0].key : d[0].key,
            f = e.split("-")[1];
        return l + (f ? "-" + f : "");
    }
    function O(e, t, o) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
            i = n ? w(t) : d(t, o);
        return u(o, i, n);
    }
    function L(e) {
        var t = getComputedStyle(e),
            o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            n = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
            i = { width: e.offsetWidth + n, height: e.offsetHeight + o };
        return i;
    }
    function S(e) {
        var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e];
        });
    }
    function T(e, t, o) {
        o = o.split("-")[0];
        var n = L(e),
            i = { width: n.width, height: n.height },
            r = -1 !== ["right", "left"].indexOf(o),
            p = r ? "top" : "left",
            s = r ? "left" : "top",
            d = r ? "height" : "width",
            a = r ? "width" : "height";
        return (i[p] = t[p] + t[d] / 2 - n[d] / 2), (i[s] = o === s ? t[s] - n[a] : t[S(s)]), i;
    }
    function D(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function C(e, t, o) {
        if (Array.prototype.findIndex)
            return e.findIndex(function (e) {
                return e[t] === o;
            });
        var n = D(e, function (e) {
            return e[t] === o;
        });
        return e.indexOf(n);
    }
    function N(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, C(t, "name", n));
        return (
            i.forEach(function (t) {
                t["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var n = t["function"] || t.fn;
                t.enabled && e(n) && ((o.offsets.popper = c(o.offsets.popper)), (o.offsets.reference = c(o.offsets.reference)), (o = n(o, t)));
            }),
            o
        );
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
            (e.offsets.reference = O(this.state, this.popper, this.reference, this.options.positionFixed)),
                (e.placement = x(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding)),
                (e.originalPlacement = e.placement),
                (e.positionFixed = this.options.positionFixed),
                (e.offsets.popper = T(this.popper, e.offsets.reference, e.placement)),
                (e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
                (e = N(this.modifiers, e)),
                this.state.isCreated ? this.options.onUpdate(e) : ((this.state.isCreated = !0), this.options.onCreate(e));
        }
    }
    function P(e, t) {
        return e.some(function (e) {
            var o = e.name,
                n = e.enabled;
            return n && o === t;
        });
    }
    function W(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var i = t[n],
                r = i ? "" + i + o : e;
            if ("undefined" != typeof document.body.style[r]) return r;
        }
        return null;
    }
    function B() {
        return (
            (this.state.isDestroyed = !0),
            P(this.modifiers, "applyStyle") &&
                (this.popper.removeAttribute("x-placement"),
                (this.popper.style.position = ""),
                (this.popper.style.top = ""),
                (this.popper.style.left = ""),
                (this.popper.style.right = ""),
                (this.popper.style.bottom = ""),
                (this.popper.style.willChange = ""),
                (this.popper.style[W("transform")] = "")),
            this.disableEventListeners(),
            this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
            this
        );
    }
    function H(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window;
    }
    function A(e, t, o, i) {
        var r = "BODY" === e.nodeName,
            p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, { passive: !0 }), r || A(n(p.parentNode), t, o, i), i.push(p);
    }
    function I(e, t, o, i) {
        (o.updateBound = i), H(e).addEventListener("resize", o.updateBound, { passive: !0 });
        var r = n(e);
        return A(r, "scroll", o.updateBound, o.scrollParents), (o.scrollElement = r), (o.eventsEnabled = !0), o;
    }
    function M() {
        this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate));
    }
    function F(e, t) {
        return (
            H(e).removeEventListener("resize", t.updateBound),
            t.scrollParents.forEach(function (e) {
                e.removeEventListener("scroll", t.updateBound);
            }),
            (t.updateBound = null),
            (t.scrollParents = []),
            (t.scrollElement = null),
            (t.eventsEnabled = !1),
            t
        );
    }
    function R() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), (this.state = F(this.reference, this.state)));
    }
    function U(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function Y(e, t) {
        Object.keys(t).forEach(function (o) {
            var n = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(o) && U(t[o]) && (n = "px"), (e.style[o] = t[o] + n);
        });
    }
    function j(e, t) {
        Object.keys(t).forEach(function (o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
        });
    }
    function q(e, t, o) {
        var n = D(e, function (e) {
                var o = e.name;
                return o === t;
            }),
            i =
                !!n &&
                e.some(function (e) {
                    return e.name === o && e.enabled && e.order < n.order;
                });
        if (!i) {
            var r = "`" + t + "`";
            console.warn("`" + o + "`" + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
        }
        return i;
    }
    function K(e) {
        return "end" === e ? "start" : "start" === e ? "end" : e;
    }
    function V(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = le.indexOf(e),
            n = le.slice(o + 1).concat(le.slice(0, o));
        return t ? n.reverse() : n;
    }
    function z(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            r = +i[1],
            p = i[2];
        if (!r) return e;
        if (0 === p.indexOf("%")) {
            var s;
            switch (p) {
                case "%p":
                    s = o;
                    break;
                case "%":
                case "%r":
                default:
                    s = n;
            }
            var d = c(s);
            return (d[t] / 100) * r;
        }
        if ("vh" === p || "vw" === p) {
            var a;
            return (a = "vh" === p ? Q(document.documentElement.clientHeight, window.innerHeight || 0) : Q(document.documentElement.clientWidth, window.innerWidth || 0)), (a / 100) * r;
        }
        return r;
    }
    function G(e, t, o, n) {
        var i = [0, 0],
            r = -1 !== ["right", "left"].indexOf(n),
            p = e.split(/(\+|\-)/).map(function (e) {
                return e.trim();
            }),
            s = p.indexOf(
                D(p, function (e) {
                    return -1 !== e.search(/,|\s/);
                })
            );
        p[s] && -1 === p[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var d = /\s*,\s*|\s+/,
            a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return (
            (a = a.map(function (e, n) {
                var i = (1 === n ? !r : r) ? "height" : "width",
                    p = !1;
                return e
                    .reduce(function (e, t) {
                        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? ((e[e.length - 1] = t), (p = !0), e) : p ? ((e[e.length - 1] += t), (p = !1), e) : e.concat(t);
                    }, [])
                    .map(function (e) {
                        return z(e, i, t, o);
                    });
            })),
            a.forEach(function (e, t) {
                e.forEach(function (o, n) {
                    U(o) && (i[t] += o * ("-" === e[n - 1] ? -1 : 1));
                });
            }),
            i
        );
    }
    function _(e, t) {
        var o,
            n = t.offset,
            i = e.placement,
            r = e.offsets,
            p = r.popper,
            s = r.reference,
            d = i.split("-")[0];
        return (
            (o = U(+n) ? [+n, 0] : G(n, p, s, d)),
            "left" === d ? ((p.top += o[0]), (p.left -= o[1])) : "right" === d ? ((p.top += o[0]), (p.left += o[1])) : "top" === d ? ((p.left += o[0]), (p.top -= o[1])) : "bottom" === d && ((p.left += o[0]), (p.top += o[1])),
            (e.popper = p),
            e
        );
    }
    for (var X = Math.min, J = Math.floor, Q = Math.max, Z = "undefined" != typeof window && "undefined" != typeof document, $ = ["Edge", "Trident", "Firefox"], ee = 0, te = 0; te < $.length; te += 1)
        if (Z && 0 <= navigator.userAgent.indexOf($[te])) {
            ee = 1;
            break;
        }
    var i = Z && window.Promise,
        oe = i
            ? function (e) {
                  var t = !1;
                  return function () {
                      t ||
                          ((t = !0),
                          window.Promise.resolve().then(function () {
                              (t = !1), e();
                          }));
                  };
              }
            : function (e) {
                  var t = !1;
                  return function () {
                      t ||
                          ((t = !0),
                          setTimeout(function () {
                              (t = !1), e();
                          }, ee));
                  };
              },
        ne = {},
        ie = function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "all";
            return ((e = e.toString()), ne.hasOwnProperty(e))
                ? ne[e]
                : ("11" === e
                      ? (ne[e] = -1 !== navigator.userAgent.indexOf("Trident"))
                      : "10" === e
                      ? (ne[e] = -1 !== navigator.appVersion.indexOf("MSIE 10"))
                      : "all" === e
                      ? (ne[e] = -1 !== navigator.userAgent.indexOf("Trident") || -1 !== navigator.userAgent.indexOf("MSIE"))
                      : void 0,
                  (ne.all =
                      ne.all ||
                      Object.keys(ne).some(function (e) {
                          return ne[e];
                      })),
                  ne[e]);
        },
        re = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        },
        pe = (function () {
            function e(e, t) {
                for (var o, n = 0; n < t.length; n++) (o = t[n]), (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
            return function (t, o, n) {
                return o && e(t.prototype, o), n && e(t, n), t;
            };
        })(),
        se = function (e, t, o) {
            return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
        },
        de =
            Object.assign ||
            function (e) {
                for (var t, o = 1; o < arguments.length; o++) for (var n in ((t = arguments[o]), t)) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e;
            },
        ae = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        le = ae.slice(3),
        fe = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" },
        me = (function () {
            function t(o, n) {
                var i = this,
                    r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                re(this, t),
                    (this.scheduleUpdate = function () {
                        return requestAnimationFrame(i.update);
                    }),
                    (this.update = oe(this.update.bind(this))),
                    (this.options = de({}, t.Defaults, r)),
                    (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                    (this.reference = o && o.jquery ? o[0] : o),
                    (this.popper = n && n.jquery ? n[0] : n),
                    (this.options.modifiers = {}),
                    Object.keys(de({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
                        i.options.modifiers[e] = de({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
                    }),
                    (this.modifiers = Object.keys(this.options.modifiers)
                        .map(function (e) {
                            return de({ name: e }, i.options.modifiers[e]);
                        })
                        .sort(function (e, t) {
                            return e.order - t.order;
                        })),
                    this.modifiers.forEach(function (t) {
                        t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
                    }),
                    this.update();
                var p = this.options.eventsEnabled;
                p && this.enableEventListeners(), (this.state.eventsEnabled = p);
            }
            return (
                pe(t, [
                    {
                        key: "update",
                        value: function () {
                            return k.call(this);
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            return B.call(this);
                        },
                    },
                    {
                        key: "enableEventListeners",
                        value: function () {
                            return M.call(this);
                        },
                    },
                    {
                        key: "disableEventListeners",
                        value: function () {
                            return R.call(this);
                        },
                    },
                ]),
                t
            );
        })();
    return (
        (me.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
        (me.placements = ae),
        (me.Defaults = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.placement,
                            o = t.split("-")[0],
                            n = t.split("-")[1];
                        if (n) {
                            var i = e.offsets,
                                r = i.reference,
                                p = i.popper,
                                s = -1 !== ["bottom", "top"].indexOf(o),
                                d = s ? "left" : "top",
                                a = s ? "width" : "height",
                                l = { start: se({}, d, r[d]), end: se({}, d, r[d] + r[a] - p[a]) };
                            e.offsets.popper = de({}, p, l[n]);
                        }
                        return e;
                    },
                },
                offset: { order: 200, enabled: !0, fn: _, offset: 0 },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function (e, t) {
                        var o = t.boundariesElement || r(e.instance.popper);
                        e.instance.reference === o && (o = r(o));
                        var n = E(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                        t.boundaries = n;
                        var i = t.priority,
                            p = e.offsets.popper,
                            s = {
                                primary: function (e) {
                                    var o = p[e];
                                    return p[e] < n[e] && !t.escapeWithReference && (o = Q(p[e], n[e])), se({}, e, o);
                                },
                                secondary: function (e) {
                                    var o = "right" === e ? "left" : "top",
                                        i = p[o];
                                    return p[e] > n[e] && !t.escapeWithReference && (i = X(p[o], n[e] - ("right" === e ? p.width : p.height))), se({}, o, i);
                                },
                            };
                        return (
                            i.forEach(function (e) {
                                var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                                p = de({}, p, s[t](e));
                            }),
                            (e.offsets.popper = p),
                            e
                        );
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent",
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.offsets,
                            o = t.popper,
                            n = t.reference,
                            i = e.placement.split("-")[0],
                            r = J,
                            p = -1 !== ["top", "bottom"].indexOf(i),
                            s = p ? "right" : "bottom",
                            d = p ? "left" : "top",
                            a = p ? "width" : "height";
                        return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e;
                    },
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function (e, o) {
                        var n;
                        if (!q(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var i = o.element;
                        if ("string" == typeof i) {
                            if (((i = e.instance.popper.querySelector(i)), !i)) return e;
                        } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var r = e.placement.split("-")[0],
                            p = e.offsets,
                            s = p.popper,
                            d = p.reference,
                            a = -1 !== ["left", "right"].indexOf(r),
                            l = a ? "height" : "width",
                            f = a ? "Top" : "Left",
                            m = f.toLowerCase(),
                            h = a ? "left" : "top",
                            g = a ? "bottom" : "right",
                            u = L(i)[l];
                        d[g] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[g] - u)), d[m] + u > s[g] && (e.offsets.popper[m] += d[m] + u - s[g]), (e.offsets.popper = c(e.offsets.popper));
                        var b = d[m] + d[l] / 2 - u / 2,
                            y = t(e.instance.popper),
                            w = parseFloat(y["margin" + f], 10),
                            E = parseFloat(y["border" + f + "Width"], 10),
                            v = b - e.offsets.popper[m] - w - E;
                        return (v = Q(X(s[l] - u, v), 0)), (e.arrowElement = i), (e.offsets.arrow = ((n = {}), se(n, m, Math.round(v)), se(n, h, ""), n)), e;
                    },
                    element: "[x-arrow]",
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (e, t) {
                        if (P(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var o = E(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                            n = e.placement.split("-")[0],
                            i = S(n),
                            r = e.placement.split("-")[1] || "",
                            p = [];
                        switch (t.behavior) {
                            case fe.FLIP:
                                p = [n, i];
                                break;
                            case fe.CLOCKWISE:
                                p = V(n);
                                break;
                            case fe.COUNTERCLOCKWISE:
                                p = V(n, !0);
                                break;
                            default:
                                p = t.behavior;
                        }
                        return (
                            p.forEach(function (s, d) {
                                if (n !== s || p.length === d + 1) return e;
                                (n = e.placement.split("-")[0]), (i = S(n));
                                var a = e.offsets.popper,
                                    l = e.offsets.reference,
                                    f = J,
                                    m = ("left" === n && f(a.right) > f(l.left)) || ("right" === n && f(a.left) < f(l.right)) || ("top" === n && f(a.bottom) > f(l.top)) || ("bottom" === n && f(a.top) < f(l.bottom)),
                                    h = f(a.left) < f(o.left),
                                    c = f(a.right) > f(o.right),
                                    g = f(a.top) < f(o.top),
                                    u = f(a.bottom) > f(o.bottom),
                                    b = ("left" === n && h) || ("right" === n && c) || ("top" === n && g) || ("bottom" === n && u),
                                    y = -1 !== ["top", "bottom"].indexOf(n),
                                    w = !!t.flipVariations && ((y && "start" === r && h) || (y && "end" === r && c) || (!y && "start" === r && g) || (!y && "end" === r && u));
                                (m || b || w) &&
                                    ((e.flipped = !0),
                                    (m || b) && (n = p[d + 1]),
                                    w && (r = K(r)),
                                    (e.placement = n + (r ? "-" + r : "")),
                                    (e.offsets.popper = de({}, e.offsets.popper, T(e.instance.popper, e.offsets.reference, e.placement))),
                                    (e = N(e.instance.modifiers, e, "flip")));
                            }),
                            e
                        );
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function (e) {
                        var t = e.placement,
                            o = t.split("-")[0],
                            n = e.offsets,
                            i = n.popper,
                            r = n.reference,
                            p = -1 !== ["left", "right"].indexOf(o),
                            s = -1 === ["top", "left"].indexOf(o);
                        return (i[p ? "left" : "top"] = r[o] - (s ? i[p ? "width" : "height"] : 0)), (e.placement = S(t)), (e.offsets.popper = c(i)), e;
                    },
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function (e) {
                        if (!q(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            o = D(e.instance.modifiers, function (e) {
                                return "preventOverflow" === e.name;
                            }).boundaries;
                        if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                            if (!0 === e.hide) return e;
                            (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
                        } else {
                            if (!1 === e.hide) return e;
                            (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
                        }
                        return e;
                    },
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function (e, t) {
                        var o = t.x,
                            n = t.y,
                            i = e.offsets.popper,
                            p = D(e.instance.modifiers, function (e) {
                                return "applyStyle" === e.name;
                            }).gpuAcceleration;
                        void 0 !== p && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s,
                            d,
                            a = void 0 === p ? t.gpuAcceleration : p,
                            l = r(e.instance.popper),
                            f = g(l),
                            m = { position: i.position },
                            h = { left: J(i.left), top: J(i.top), bottom: J(i.bottom), right: J(i.right) },
                            c = "bottom" === o ? "top" : "bottom",
                            u = "right" === n ? "left" : "right",
                            b = W("transform");
                        if (((d = "bottom" == c ? -f.height + h.bottom : h.top), (s = "right" == u ? -f.width + h.right : h.left), a && b))
                            (m[b] = "translate3d(" + s + "px, " + d + "px, 0)"), (m[c] = 0), (m[u] = 0), (m.willChange = "transform");
                        else {
                            var y = "bottom" == c ? -1 : 1,
                                w = "right" == u ? -1 : 1;
                            (m[c] = d * y), (m[u] = s * w), (m.willChange = c + ", " + u);
                        }
                        var E = { "x-placement": e.placement };
                        return (e.attributes = de({}, E, e.attributes)), (e.styles = de({}, m, e.styles)), (e.arrowStyles = de({}, e.offsets.arrow, e.arrowStyles)), e;
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right",
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function (e) {
                        return Y(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && Y(e.arrowElement, e.arrowStyles), e;
                    },
                    onLoad: function (e, t, o, n, i) {
                        var r = O(i, t, e, o.positionFixed),
                            p = x(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                        return t.setAttribute("x-placement", p), Y(t, { position: o.positionFixed ? "fixed" : "absolute" }), o;
                    },
                    gpuAcceleration: void 0,
                },
            },
        }),
        me
    );
}); //# sourceMappingURL=popper.min.js.map

/* ========================
	bootstrap.min.js
========================= */
/*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? e(exports, require("jquery"), require("error-404.html"))
        : "function" == typeof define && define.amd
        ? define(["exports", "jquery", "popper.js"], e)
        : e(((t = t || self).bootstrap = {}), t.jQuery, t.Popper);
})(this, function (t, g, u) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
    }
    function l(o) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                e = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols &&
                (e = e.concat(
                    Object.getOwnPropertySymbols(r).filter(function (t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable;
                    })
                )),
                e.forEach(function (t) {
                    var e, n, i;
                    (e = o), (i = r[(n = t)]), n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = i);
                });
        }
        return o;
    }
    (g = g && g.hasOwnProperty("default") ? g.default : g), (u = u && u.hasOwnProperty("default") ? u.default : u);
    var e = "transitionend";
    function n(t) {
        var e = this,
            n = !1;
        return (
            g(this).one(_.TRANSITION_END, function () {
                n = !0;
            }),
            setTimeout(function () {
                n || _.triggerTransitionEnd(e);
            }, t),
            this
        );
    }
    var _ = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (t) {
            for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
            return t;
        },
        getSelectorFromElement: function (t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : "";
            }
            try {
                return document.querySelector(e) ? e : null;
            } catch (t) {
                return null;
            }
        },
        getTransitionDurationFromElement: function (t) {
            if (!t) return 0;
            var e = g(t).css("transition-duration"),
                n = g(t).css("transition-delay"),
                i = parseFloat(e),
                o = parseFloat(n);
            return i || o ? ((e = e.split(",")[0]), (n = n.split(",")[0]), 1e3 * (parseFloat(e) + parseFloat(n))) : 0;
        },
        reflow: function (t) {
            return t.offsetHeight;
        },
        triggerTransitionEnd: function (t) {
            g(t).trigger(e);
        },
        supportsTransitionEnd: function () {
            return Boolean(e);
        },
        isElement: function (t) {
            return (t[0] || t).nodeType;
        },
        typeCheckConfig: function (t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = e[i],
                        s =
                            r && _.isElement(r)
                                ? "element"
                                : ((a = r),
                                  {}.toString
                                      .call(a)
                                      .match(/\s([a-z]+)/i)[1]
                                      .toLowerCase());
                    if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
                }
            var a;
        },
        findShadowRoot: function (t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null;
        },
    };
    (g.fn.emulateTransitionEnd = n),
        (g.event.special[_.TRANSITION_END] = {
            bindType: e,
            delegateType: e,
            handle: function (t) {
                if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
            },
        });
    var o = "alert",
        r = "bs.alert",
        a = "." + r,
        c = g.fn[o],
        h = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" },
        f = "alert",
        d = "fade",
        m = "show",
        p = (function () {
            function i(t) {
                this._element = t;
            }
            var t = i.prototype;
            return (
                (t.close = function (t) {
                    var e = this._element;
                    t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
                }),
                (t.dispose = function () {
                    g.removeData(this._element, r), (this._element = null);
                }),
                (t._getRootElement = function (t) {
                    var e = _.getSelectorFromElement(t),
                        n = !1;
                    return e && (n = document.querySelector(e)), n || (n = g(t).closest("." + f)[0]), n;
                }),
                (t._triggerCloseEvent = function (t) {
                    var e = g.Event(h.CLOSE);
                    return g(t).trigger(e), e;
                }),
                (t._removeElement = function (e) {
                    var n = this;
                    if ((g(e).removeClass(m), g(e).hasClass(d))) {
                        var t = _.getTransitionDurationFromElement(e);
                        g(e)
                            .one(_.TRANSITION_END, function (t) {
                                return n._destroyElement(e, t);
                            })
                            .emulateTransitionEnd(t);
                    } else this._destroyElement(e);
                }),
                (t._destroyElement = function (t) {
                    g(t).detach().trigger(h.CLOSED).remove();
                }),
                (i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = g(this),
                            e = t.data(r);
                        e || ((e = new i(this)), t.data(r, e)), "close" === n && e[n](this);
                    });
                }),
                (i._handleDismiss = function (e) {
                    return function (t) {
                        t && t.preventDefault(), e.close(this);
                    };
                }),
                s(i, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                ]),
                i
            );
        })();
    g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())),
        (g.fn[o] = p._jQueryInterface),
        (g.fn[o].Constructor = p),
        (g.fn[o].noConflict = function () {
            return (g.fn[o] = c), p._jQueryInterface;
        });
    var v = "button",
        y = "bs.button",
        E = "." + y,
        C = ".data-api",
        T = g.fn[v],
        S = "active",
        b = "btn",
        I = "focus",
        D = '[data-toggle^="button"]',
        w = '[data-toggle="buttons"]',
        A = 'input:not([type="hidden"])',
        N = ".active",
        O = ".btn",
        k = { CLICK_DATA_API: "click" + E + C, FOCUS_BLUR_DATA_API: "focus" + E + C + " blur" + E + C },
        P = (function () {
            function n(t) {
                this._element = t;
            }
            var t = n.prototype;
            return (
                (t.toggle = function () {
                    var t = !0,
                        e = !0,
                        n = g(this._element).closest(w)[0];
                    if (n) {
                        var i = this._element.querySelector(A);
                        if (i) {
                            if ("radio" === i.type)
                                if (i.checked && this._element.classList.contains(S)) t = !1;
                                else {
                                    var o = n.querySelector(N);
                                    o && g(o).removeClass(S);
                                }
                            if (t) {
                                if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                                (i.checked = !this._element.classList.contains(S)), g(i).trigger("change");
                            }
                            i.focus(), (e = !1);
                        }
                    }
                    e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S);
                }),
                (t.dispose = function () {
                    g.removeData(this._element, y), (this._element = null);
                }),
                (n._jQueryInterface = function (e) {
                    return this.each(function () {
                        var t = g(this).data(y);
                        t || ((t = new n(this)), g(this).data(y, t)), "toggle" === e && t[e]();
                    });
                }),
                s(n, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                ]),
                n
            );
        })();
    g(document)
        .on(k.CLICK_DATA_API, D, function (t) {
            t.preventDefault();
            var e = t.target;
            g(e).hasClass(b) || (e = g(e).closest(O)), P._jQueryInterface.call(g(e), "toggle");
        })
        .on(k.FOCUS_BLUR_DATA_API, D, function (t) {
            var e = g(t.target).closest(O)[0];
            g(e).toggleClass(I, /^focus(in)?$/.test(t.type));
        }),
        (g.fn[v] = P._jQueryInterface),
        (g.fn[v].Constructor = P),
        (g.fn[v].noConflict = function () {
            return (g.fn[v] = T), P._jQueryInterface;
        });
    var L = "carousel",
        j = "bs.carousel",
        H = "." + j,
        R = ".data-api",
        x = g.fn[L],
        F = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        U = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        W = "next",
        q = "prev",
        M = "left",
        K = "right",
        Q = {
            SLIDE: "slide" + H,
            SLID: "slid" + H,
            KEYDOWN: "keydown" + H,
            MOUSEENTER: "mouseenter" + H,
            MOUSELEAVE: "mouseleave" + H,
            TOUCHSTART: "touchstart" + H,
            TOUCHMOVE: "touchmove" + H,
            TOUCHEND: "touchend" + H,
            POINTERDOWN: "pointerdown" + H,
            POINTERUP: "pointerup" + H,
            DRAG_START: "dragstart" + H,
            LOAD_DATA_API: "load" + H + R,
            CLICK_DATA_API: "click" + H + R,
        },
        B = "carousel",
        V = "active",
        Y = "slide",
        z = "carousel-item-right",
        X = "carousel-item-left",
        $ = "carousel-item-next",
        G = "carousel-item-prev",
        J = "pointer-event",
        Z = ".active",
        tt = ".active.carousel-item",
        et = ".carousel-item",
        nt = ".carousel-item img",
        it = ".carousel-item-next, .carousel-item-prev",
        ot = ".carousel-indicators",
        rt = "[data-slide], [data-slide-to]",
        st = '[data-ride="carousel"]',
        at = { TOUCH: "touch", PEN: "pen" },
        lt = (function () {
            function r(t, e) {
                (this._items = null),
                    (this._interval = null),
                    (this._activeElement = null),
                    (this._isPaused = !1),
                    (this._isSliding = !1),
                    (this.touchTimeout = null),
                    (this.touchStartX = 0),
                    (this.touchDeltaX = 0),
                    (this._config = this._getConfig(e)),
                    (this._element = t),
                    (this._indicatorsElement = this._element.querySelector(ot)),
                    (this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints),
                    (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
                    this._addEventListeners();
            }
            var t = r.prototype;
            return (
                (t.next = function () {
                    this._isSliding || this._slide(W);
                }),
                (t.nextWhenVisible = function () {
                    !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next();
                }),
                (t.prev = function () {
                    this._isSliding || this._slide(q);
                }),
                (t.pause = function (t) {
                    t || (this._isPaused = !0), this._element.querySelector(it) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
                }),
                (t.cycle = function (t) {
                    t || (this._isPaused = !1),
                        this._interval && (clearInterval(this._interval), (this._interval = null)),
                        this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
                }),
                (t.to = function (t) {
                    var e = this;
                    this._activeElement = this._element.querySelector(tt);
                    var n = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0))
                        if (this._isSliding)
                            g(this._element).one(Q.SLID, function () {
                                return e.to(t);
                            });
                        else {
                            if (n === t) return this.pause(), void this.cycle();
                            var i = n < t ? W : q;
                            this._slide(i, this._items[t]);
                        }
                }),
                (t.dispose = function () {
                    g(this._element).off(H),
                        g.removeData(this._element, j),
                        (this._items = null),
                        (this._config = null),
                        (this._element = null),
                        (this._interval = null),
                        (this._isPaused = null),
                        (this._isSliding = null),
                        (this._activeElement = null),
                        (this._indicatorsElement = null);
                }),
                (t._getConfig = function (t) {
                    return (t = l({}, F, t)), _.typeCheckConfig(L, t, U), t;
                }),
                (t._handleSwipe = function () {
                    var t = Math.abs(this.touchDeltaX);
                    if (!(t <= 40)) {
                        var e = t / this.touchDeltaX;
                        0 < e && this.prev(), e < 0 && this.next();
                    }
                }),
                (t._addEventListeners = function () {
                    var e = this;
                    this._config.keyboard &&
                        g(this._element).on(Q.KEYDOWN, function (t) {
                            return e._keydown(t);
                        }),
                        "hover" === this._config.pause &&
                            g(this._element)
                                .on(Q.MOUSEENTER, function (t) {
                                    return e.pause(t);
                                })
                                .on(Q.MOUSELEAVE, function (t) {
                                    return e.cycle(t);
                                }),
                        this._config.touch && this._addTouchEventListeners();
                }),
                (t._addTouchEventListeners = function () {
                    var n = this;
                    if (this._touchSupported) {
                        var e = function (t) {
                                n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? (n.touchStartX = t.originalEvent.clientX) : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX);
                            },
                            i = function (t) {
                                n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX),
                                    n._handleSwipe(),
                                    "hover" === n._config.pause &&
                                        (n.pause(),
                                        n.touchTimeout && clearTimeout(n.touchTimeout),
                                        (n.touchTimeout = setTimeout(function (t) {
                                            return n.cycle(t);
                                        }, 500 + n._config.interval)));
                            };
                        g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function (t) {
                            return t.preventDefault();
                        }),
                            this._pointerEvent
                                ? (g(this._element).on(Q.POINTERDOWN, function (t) {
                                      return e(t);
                                  }),
                                  g(this._element).on(Q.POINTERUP, function (t) {
                                      return i(t);
                                  }),
                                  this._element.classList.add(J))
                                : (g(this._element).on(Q.TOUCHSTART, function (t) {
                                      return e(t);
                                  }),
                                  g(this._element).on(Q.TOUCHMOVE, function (t) {
                                      var e;
                                      (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? (n.touchDeltaX = 0) : (n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX);
                                  }),
                                  g(this._element).on(Q.TOUCHEND, function (t) {
                                      return i(t);
                                  }));
                    }
                }),
                (t._keydown = function (t) {
                    if (!/input|textarea/i.test(t.target.tagName))
                        switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next();
                        }
                }),
                (t._getItemIndex = function (t) {
                    return (this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : []), this._items.indexOf(t);
                }),
                (t._getItemByDirection = function (t, e) {
                    var n = t === W,
                        i = t === q,
                        o = this._getItemIndex(e),
                        r = this._items.length - 1;
                    if (((i && 0 === o) || (n && o === r)) && !this._config.wrap) return e;
                    var s = (o + (t === q ? -1 : 1)) % this._items.length;
                    return -1 === s ? this._items[this._items.length - 1] : this._items[s];
                }),
                (t._triggerSlideEvent = function (t, e) {
                    var n = this._getItemIndex(t),
                        i = this._getItemIndex(this._element.querySelector(tt)),
                        o = g.Event(Q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n });
                    return g(this._element).trigger(o), o;
                }),
                (t._setActiveIndicatorElement = function (t) {
                    if (this._indicatorsElement) {
                        var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                        g(e).removeClass(V);
                        var n = this._indicatorsElement.children[this._getItemIndex(t)];
                        n && g(n).addClass(V);
                    }
                }),
                (t._slide = function (t, e) {
                    var n,
                        i,
                        o,
                        r = this,
                        s = this._element.querySelector(tt),
                        a = this._getItemIndex(s),
                        l = e || (s && this._getItemByDirection(t, s)),
                        c = this._getItemIndex(l),
                        h = Boolean(this._interval);
                    if (((o = t === W ? ((n = X), (i = $), M) : ((n = z), (i = G), K)), l && g(l).hasClass(V))) this._isSliding = !1;
                    else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                        (this._isSliding = !0), h && this.pause(), this._setActiveIndicatorElement(l);
                        var u = g.Event(Q.SLID, { relatedTarget: l, direction: o, from: a, to: c });
                        if (g(this._element).hasClass(Y)) {
                            g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
                            var f = parseInt(l.getAttribute("data-interval"), 10);
                            this._config.interval = f ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), f) : this._config.defaultInterval || this._config.interval;
                            var d = _.getTransitionDurationFromElement(s);
                            g(s)
                                .one(_.TRANSITION_END, function () {
                                    g(l)
                                        .removeClass(n + " " + i)
                                        .addClass(V),
                                        g(s).removeClass(V + " " + i + " " + n),
                                        (r._isSliding = !1),
                                        setTimeout(function () {
                                            return g(r._element).trigger(u);
                                        }, 0);
                                })
                                .emulateTransitionEnd(d);
                        } else g(s).removeClass(V), g(l).addClass(V), (this._isSliding = !1), g(this._element).trigger(u);
                        h && this.cycle();
                    }
                }),
                (r._jQueryInterface = function (i) {
                    return this.each(function () {
                        var t = g(this).data(j),
                            e = l({}, F, g(this).data());
                        "object" == typeof i && (e = l({}, e, i));
                        var n = "string" == typeof i ? i : e.slide;
                        if ((t || ((t = new r(this, e)), g(this).data(j, t)), "number" == typeof i)) t.to(i);
                        else if ("string" == typeof n) {
                            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                            t[n]();
                        } else e.interval && e.ride && (t.pause(), t.cycle());
                    });
                }),
                (r._dataApiClickHandler = function (t) {
                    var e = _.getSelectorFromElement(this);
                    if (e) {
                        var n = g(e)[0];
                        if (n && g(n).hasClass(B)) {
                            var i = l({}, g(n).data(), g(this).data()),
                                o = this.getAttribute("data-slide-to");
                            o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(j).to(o), t.preventDefault();
                        }
                    }
                }),
                s(r, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return F;
                        },
                    },
                ]),
                r
            );
        })();
    g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler),
        g(window).on(Q.LOAD_DATA_API, function () {
            for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
                var i = g(t[e]);
                lt._jQueryInterface.call(i, i.data());
            }
        }),
        (g.fn[L] = lt._jQueryInterface),
        (g.fn[L].Constructor = lt),
        (g.fn[L].noConflict = function () {
            return (g.fn[L] = x), lt._jQueryInterface;
        });
    var ct = "collapse",
        ht = "bs.collapse",
        ut = "." + ht,
        ft = g.fn[ct],
        dt = { toggle: !0, parent: "" },
        gt = { toggle: "boolean", parent: "(string|element)" },
        _t = { SHOW: "show" + ut, SHOWN: "shown" + ut, HIDE: "hide" + ut, HIDDEN: "hidden" + ut, CLICK_DATA_API: "click" + ut + ".data-api" },
        mt = "show",
        pt = "collapse",
        vt = "collapsing",
        yt = "collapsed",
        Et = "width",
        Ct = "height",
        Tt = ".show, .collapsing",
        St = '[data-toggle="collapse"]',
        bt = (function () {
            function a(e, t) {
                (this._isTransitioning = !1),
                    (this._element = e),
                    (this._config = this._getConfig(t)),
                    (this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')));
                for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i],
                        s = _.getSelectorFromElement(r),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
                            return t === e;
                        });
                    null !== s && 0 < a.length && ((this._selector = s), this._triggerArray.push(r));
                }
                (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
            }
            var t = a.prototype;
            return (
                (t.toggle = function () {
                    g(this._element).hasClass(mt) ? this.hide() : this.show();
                }),
                (t.show = function () {
                    var t,
                        e,
                        n = this;
                    if (
                        !this._isTransitioning &&
                        !g(this._element).hasClass(mt) &&
                        (this._parent &&
                            0 ===
                                (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function (t) {
                                    return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt);
                                })).length &&
                            (t = null),
                        !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))
                    ) {
                        var i = g.Event(_t.SHOW);
                        if ((g(this._element).trigger(i), !i.isDefaultPrevented())) {
                            t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(ht, null));
                            var o = this._getDimension();
                            g(this._element).removeClass(pt).addClass(vt), (this._element.style[o] = 0), this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                                s = _.getTransitionDurationFromElement(this._element);
                            g(this._element)
                                .one(_.TRANSITION_END, function () {
                                    g(n._element).removeClass(vt).addClass(pt).addClass(mt), (n._element.style[o] = ""), n.setTransitioning(!1), g(n._element).trigger(_t.SHOWN);
                                })
                                .emulateTransitionEnd(s),
                                (this._element.style[o] = this._element[r] + "px");
                        }
                    }
                }),
                (t.hide = function () {
                    var t = this;
                    if (!this._isTransitioning && g(this._element).hasClass(mt)) {
                        var e = g.Event(_t.HIDE);
                        if ((g(this._element).trigger(e), !e.isDefaultPrevented())) {
                            var n = this._getDimension();
                            (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px"), _.reflow(this._element), g(this._element).addClass(vt).removeClass(pt).removeClass(mt);
                            var i = this._triggerArray.length;
                            if (0 < i)
                                for (var o = 0; o < i; o++) {
                                    var r = this._triggerArray[o],
                                        s = _.getSelectorFromElement(r);
                                    if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr("aria-expanded", !1);
                                }
                            this.setTransitioning(!0);
                            this._element.style[n] = "";
                            var a = _.getTransitionDurationFromElement(this._element);
                            g(this._element)
                                .one(_.TRANSITION_END, function () {
                                    t.setTransitioning(!1), g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN);
                                })
                                .emulateTransitionEnd(a);
                        }
                    }
                }),
                (t.setTransitioning = function (t) {
                    this._isTransitioning = t;
                }),
                (t.dispose = function () {
                    g.removeData(this._element, ht), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
                }),
                (t._getConfig = function (t) {
                    return ((t = l({}, dt, t)).toggle = Boolean(t.toggle)), _.typeCheckConfig(ct, t, gt), t;
                }),
                (t._getDimension = function () {
                    return g(this._element).hasClass(Et) ? Et : Ct;
                }),
                (t._getParent = function () {
                    var t,
                        n = this;
                    _.isElement(this._config.parent) ? ((t = this._config.parent), "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : (t = document.querySelector(this._config.parent));
                    var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        i = [].slice.call(t.querySelectorAll(e));
                    return (
                        g(i).each(function (t, e) {
                            n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
                        }),
                        t
                    );
                }),
                (t._addAriaAndCollapsedClass = function (t, e) {
                    var n = g(t).hasClass(mt);
                    e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n);
                }),
                (a._getTargetFromElement = function (t) {
                    var e = _.getSelectorFromElement(t);
                    return e ? document.querySelector(e) : null;
                }),
                (a._jQueryInterface = function (i) {
                    return this.each(function () {
                        var t = g(this),
                            e = t.data(ht),
                            n = l({}, dt, t.data(), "object" == typeof i && i ? i : {});
                        if ((!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || ((e = new a(this, n)), t.data(ht, e)), "string" == typeof i)) {
                            if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                            e[i]();
                        }
                    });
                }),
                s(a, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return dt;
                        },
                    },
                ]),
                a
            );
        })();
    g(document).on(_t.CLICK_DATA_API, St, function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = g(this),
            e = _.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(e));
        g(i).each(function () {
            var t = g(this),
                e = t.data(ht) ? "toggle" : n.data();
            bt._jQueryInterface.call(t, e);
        });
    }),
        (g.fn[ct] = bt._jQueryInterface),
        (g.fn[ct].Constructor = bt),
        (g.fn[ct].noConflict = function () {
            return (g.fn[ct] = ft), bt._jQueryInterface;
        });
    var It = "dropdown",
        Dt = "bs.dropdown",
        wt = "." + Dt,
        At = ".data-api",
        Nt = g.fn[It],
        Ot = new RegExp("38|40|27"),
        kt = { HIDE: "hide" + wt, HIDDEN: "hidden" + wt, SHOW: "show" + wt, SHOWN: "shown" + wt, CLICK: "click" + wt, CLICK_DATA_API: "click" + wt + At, KEYDOWN_DATA_API: "keydown" + wt + At, KEYUP_DATA_API: "keyup" + wt + At },
        Pt = "disabled",
        Lt = "show",
        jt = "dropup",
        Ht = "dropright",
        Rt = "dropleft",
        xt = "dropdown-menu-right",
        Ft = "position-static",
        Ut = '[data-toggle="dropdown"]',
        Wt = ".dropdown form",
        qt = ".dropdown-menu",
        Mt = ".navbar-nav",
        Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Qt = "top-start",
        Bt = "top-end",
        Vt = "bottom-start",
        Yt = "bottom-end",
        zt = "right-start",
        Xt = "left-start",
        $t = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" },
        Gt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" },
        Jt = (function () {
            function c(t, e) {
                (this._element = t), (this._popper = null), (this._config = this._getConfig(e)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
            }
            var t = c.prototype;
            return (
                (t.toggle = function () {
                    if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
                        var t = c._getParentFromElement(this._element),
                            e = g(this._menu).hasClass(Lt);
                        if ((c._clearMenus(), !e)) {
                            var n = { relatedTarget: this._element },
                                i = g.Event(kt.SHOW, n);
                            if ((g(t).trigger(i), !i.isDefaultPrevented())) {
                                if (!this._inNavbar) {
                                    if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                    var o = this._element;
                                    "parent" === this._config.reference
                                        ? (o = t)
                                        : _.isElement(this._config.reference) && ((o = this._config.reference), "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])),
                                        "scrollParent" !== this._config.boundary && g(t).addClass(Ft),
                                        (this._popper = new u(o, this._menu, this._getPopperConfig()));
                                }
                                "ontouchstart" in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop),
                                    this._element.focus(),
                                    this._element.setAttribute("aria-expanded", !0),
                                    g(this._menu).toggleClass(Lt),
                                    g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n));
                            }
                        }
                    }
                }),
                (t.show = function () {
                    if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
                        var t = { relatedTarget: this._element },
                            e = g.Event(kt.SHOW, t),
                            n = c._getParentFromElement(this._element);
                        g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)));
                    }
                }),
                (t.hide = function () {
                    if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
                        var t = { relatedTarget: this._element },
                            e = g.Event(kt.HIDE, t),
                            n = c._getParentFromElement(this._element);
                        g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)));
                    }
                }),
                (t.dispose = function () {
                    g.removeData(this._element, Dt), g(this._element).off(wt), (this._element = null), (this._menu = null) !== this._popper && (this._popper.destroy(), (this._popper = null));
                }),
                (t.update = function () {
                    (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
                }),
                (t._addEventListeners = function () {
                    var e = this;
                    g(this._element).on(kt.CLICK, function (t) {
                        t.preventDefault(), t.stopPropagation(), e.toggle();
                    });
                }),
                (t._getConfig = function (t) {
                    return (t = l({}, this.constructor.Default, g(this._element).data(), t)), _.typeCheckConfig(It, t, this.constructor.DefaultType), t;
                }),
                (t._getMenuElement = function () {
                    if (!this._menu) {
                        var t = c._getParentFromElement(this._element);
                        t && (this._menu = t.querySelector(qt));
                    }
                    return this._menu;
                }),
                (t._getPlacement = function () {
                    var t = g(this._element.parentNode),
                        e = Vt;
                    return t.hasClass(jt) ? ((e = Qt), g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? (e = zt) : t.hasClass(Rt) ? (e = Xt) : g(this._menu).hasClass(xt) && (e = Yt), e;
                }),
                (t._detectNavbar = function () {
                    return 0 < g(this._element).closest(".navbar").length;
                }),
                (t._getOffset = function () {
                    var e = this,
                        t = {};
                    return (
                        "function" == typeof this._config.offset
                            ? (t.fn = function (t) {
                                  return (t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {})), t;
                              })
                            : (t.offset = this._config.offset),
                        t
                    );
                }),
                (t._getPopperConfig = function () {
                    var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
                    return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), t;
                }),
                (c._jQueryInterface = function (e) {
                    return this.each(function () {
                        var t = g(this).data(Dt);
                        if ((t || ((t = new c(this, "object" == typeof e ? e : null)), g(this).data(Dt, t)), "string" == typeof e)) {
                            if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                            t[e]();
                        }
                    });
                }),
                (c._clearMenus = function (t) {
                    if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
                        for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) {
                            var o = c._getParentFromElement(e[n]),
                                r = g(e[n]).data(Dt),
                                s = { relatedTarget: e[n] };
                            if ((t && "click" === t.type && (s.clickEvent = t), r)) {
                                var a = r._menu;
                                if (g(o).hasClass(Lt) && !(t && (("click" === t.type && /input|textarea/i.test(t.target.tagName)) || ("keyup" === t.type && 9 === t.which)) && g.contains(o, t.target))) {
                                    var l = g.Event(kt.HIDE, s);
                                    g(o).trigger(l),
                                        l.isDefaultPrevented() ||
                                            ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop),
                                            e[n].setAttribute("aria-expanded", "false"),
                                            g(a).removeClass(Lt),
                                            g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)));
                                }
                            }
                        }
                }),
                (c._getParentFromElement = function (t) {
                    var e,
                        n = _.getSelectorFromElement(t);
                    return n && (e = document.querySelector(n)), e || t.parentNode;
                }),
                (c._dataApiKeydownHandler = function (t) {
                    if (
                        (/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || (27 !== t.which && ((40 !== t.which && 38 !== t.which) || g(t.target).closest(qt).length))) : Ot.test(t.which)) &&
                        (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))
                    ) {
                        var e = c._getParentFromElement(this),
                            n = g(e).hasClass(Lt);
                        if (n && (!n || (27 !== t.which && 32 !== t.which))) {
                            var i = [].slice.call(e.querySelectorAll(Kt));
                            if (0 !== i.length) {
                                var o = i.indexOf(t.target);
                                38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus();
                            }
                        } else {
                            if (27 === t.which) {
                                var r = e.querySelector(Ut);
                                g(r).trigger("focus");
                            }
                            g(this).trigger("click");
                        }
                    }
                }),
                s(c, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return $t;
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return Gt;
                        },
                    },
                ]),
                c
            );
        })();
    g(document)
        .on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler)
        .on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler)
        .on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Jt._clearMenus)
        .on(kt.CLICK_DATA_API, Ut, function (t) {
            t.preventDefault(), t.stopPropagation(), Jt._jQueryInterface.call(g(this), "toggle");
        })
        .on(kt.CLICK_DATA_API, Wt, function (t) {
            t.stopPropagation();
        }),
        (g.fn[It] = Jt._jQueryInterface),
        (g.fn[It].Constructor = Jt),
        (g.fn[It].noConflict = function () {
            return (g.fn[It] = Nt), Jt._jQueryInterface;
        });
    var Zt = "modal",
        te = "bs.modal",
        ee = "." + te,
        ne = g.fn[Zt],
        ie = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        oe = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        re = {
            HIDE: "hide" + ee,
            HIDDEN: "hidden" + ee,
            SHOW: "show" + ee,
            SHOWN: "shown" + ee,
            FOCUSIN: "focusin" + ee,
            RESIZE: "resize" + ee,
            CLICK_DISMISS: "click.dismiss" + ee,
            KEYDOWN_DISMISS: "keydown.dismiss" + ee,
            MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
            CLICK_DATA_API: "click" + ee + ".data-api",
        },
        se = "modal-dialog-scrollable",
        ae = "modal-scrollbar-measure",
        le = "modal-backdrop",
        ce = "modal-open",
        he = "fade",
        ue = "show",
        fe = ".modal-dialog",
        de = ".modal-body",
        ge = '[data-toggle="modal"]',
        _e = '[data-dismiss="modal"]',
        me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        pe = ".sticky-top",
        ve = (function () {
            function o(t, e) {
                (this._config = this._getConfig(e)),
                    (this._element = t),
                    (this._dialog = t.querySelector(fe)),
                    (this._backdrop = null),
                    (this._isShown = !1),
                    (this._isBodyOverflowing = !1),
                    (this._ignoreBackdropClick = !1),
                    (this._isTransitioning = !1),
                    (this._scrollbarWidth = 0);
            }
            var t = o.prototype;
            return (
                (t.toggle = function (t) {
                    return this._isShown ? this.hide() : this.show(t);
                }),
                (t.show = function (t) {
                    var e = this;
                    if (!this._isShown && !this._isTransitioning) {
                        g(this._element).hasClass(he) && (this._isTransitioning = !0);
                        var n = g.Event(re.SHOW, { relatedTarget: t });
                        g(this._element).trigger(n),
                            this._isShown ||
                                n.isDefaultPrevented() ||
                                ((this._isShown = !0),
                                this._checkScrollbar(),
                                this._setScrollbar(),
                                this._adjustDialog(),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                g(this._element).on(re.CLICK_DISMISS, _e, function (t) {
                                    return e.hide(t);
                                }),
                                g(this._dialog).on(re.MOUSEDOWN_DISMISS, function () {
                                    g(e._element).one(re.MOUSEUP_DISMISS, function (t) {
                                        g(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
                                    });
                                }),
                                this._showBackdrop(function () {
                                    return e._showElement(t);
                                }));
                    }
                }),
                (t.hide = function (t) {
                    var e = this;
                    if ((t && t.preventDefault(), this._isShown && !this._isTransitioning)) {
                        var n = g.Event(re.HIDE);
                        if ((g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented())) {
                            this._isShown = !1;
                            var i = g(this._element).hasClass(he);
                            if (
                                (i && (this._isTransitioning = !0),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                g(document).off(re.FOCUSIN),
                                g(this._element).removeClass(ue),
                                g(this._element).off(re.CLICK_DISMISS),
                                g(this._dialog).off(re.MOUSEDOWN_DISMISS),
                                i)
                            ) {
                                var o = _.getTransitionDurationFromElement(this._element);
                                g(this._element)
                                    .one(_.TRANSITION_END, function (t) {
                                        return e._hideModal(t);
                                    })
                                    .emulateTransitionEnd(o);
                            } else this._hideModal();
                        }
                    }
                }),
                (t.dispose = function () {
                    [window, this._element, this._dialog].forEach(function (t) {
                        return g(t).off(ee);
                    }),
                        g(document).off(re.FOCUSIN),
                        g.removeData(this._element, te),
                        (this._config = null),
                        (this._element = null),
                        (this._dialog = null),
                        (this._backdrop = null),
                        (this._isShown = null),
                        (this._isBodyOverflowing = null),
                        (this._ignoreBackdropClick = null),
                        (this._isTransitioning = null),
                        (this._scrollbarWidth = null);
                }),
                (t.handleUpdate = function () {
                    this._adjustDialog();
                }),
                (t._getConfig = function (t) {
                    return (t = l({}, ie, t)), _.typeCheckConfig(Zt, t, oe), t;
                }),
                (t._showElement = function (t) {
                    var e = this,
                        n = g(this._element).hasClass(he);
                    (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                        (this._element.style.display = "block"),
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        g(this._dialog).hasClass(se) ? (this._dialog.querySelector(de).scrollTop = 0) : (this._element.scrollTop = 0),
                        n && _.reflow(this._element),
                        g(this._element).addClass(ue),
                        this._config.focus && this._enforceFocus();
                    var i = g.Event(re.SHOWN, { relatedTarget: t }),
                        o = function () {
                            e._config.focus && e._element.focus(), (e._isTransitioning = !1), g(e._element).trigger(i);
                        };
                    if (n) {
                        var r = _.getTransitionDurationFromElement(this._dialog);
                        g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
                    } else o();
                }),
                (t._enforceFocus = function () {
                    var e = this;
                    g(document)
                        .off(re.FOCUSIN)
                        .on(re.FOCUSIN, function (t) {
                            document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus();
                        });
                }),
                (t._setEscapeEvent = function () {
                    var e = this;
                    this._isShown && this._config.keyboard
                        ? g(this._element).on(re.KEYDOWN_DISMISS, function (t) {
                              27 === t.which && (t.preventDefault(), e.hide());
                          })
                        : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS);
                }),
                (t._setResizeEvent = function () {
                    var e = this;
                    this._isShown
                        ? g(window).on(re.RESIZE, function (t) {
                              return e.handleUpdate(t);
                          })
                        : g(window).off(re.RESIZE);
                }),
                (t._hideModal = function () {
                    var t = this;
                    (this._element.style.display = "none"),
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        (this._isTransitioning = !1),
                        this._showBackdrop(function () {
                            g(document.body).removeClass(ce), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(re.HIDDEN);
                        });
                }),
                (t._removeBackdrop = function () {
                    this._backdrop && (g(this._backdrop).remove(), (this._backdrop = null));
                }),
                (t._showBackdrop = function (t) {
                    var e = this,
                        n = g(this._element).hasClass(he) ? he : "";
                    if (this._isShown && this._config.backdrop) {
                        if (
                            ((this._backdrop = document.createElement("div")),
                            (this._backdrop.className = le),
                            n && this._backdrop.classList.add(n),
                            g(this._backdrop).appendTo(document.body),
                            g(this._element).on(re.CLICK_DISMISS, function (t) {
                                e._ignoreBackdropClick ? (e._ignoreBackdropClick = !1) : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
                            }),
                            n && _.reflow(this._backdrop),
                            g(this._backdrop).addClass(ue),
                            !t)
                        )
                            return;
                        if (!n) return void t();
                        var i = _.getTransitionDurationFromElement(this._backdrop);
                        g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i);
                    } else if (!this._isShown && this._backdrop) {
                        g(this._backdrop).removeClass(ue);
                        var o = function () {
                            e._removeBackdrop(), t && t();
                        };
                        if (g(this._element).hasClass(he)) {
                            var r = _.getTransitionDurationFromElement(this._backdrop);
                            g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
                        } else o();
                    } else t && t();
                }),
                (t._adjustDialog = function () {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                }),
                (t._resetAdjustments = function () {
                    (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                }),
                (t._checkScrollbar = function () {
                    var t = document.body.getBoundingClientRect();
                    (this._isBodyOverflowing = t.left + t.right < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (t._setScrollbar = function () {
                    var o = this;
                    if (this._isBodyOverflowing) {
                        var t = [].slice.call(document.querySelectorAll(me)),
                            e = [].slice.call(document.querySelectorAll(pe));
                        g(t).each(function (t, e) {
                            var n = e.style.paddingRight,
                                i = g(e).css("padding-right");
                            g(e)
                                .data("padding-right", n)
                                .css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
                        }),
                            g(e).each(function (t, e) {
                                var n = e.style.marginRight,
                                    i = g(e).css("margin-right");
                                g(e)
                                    .data("margin-right", n)
                                    .css("margin-right", parseFloat(i) - o._scrollbarWidth + "px");
                            });
                        var n = document.body.style.paddingRight,
                            i = g(document.body).css("padding-right");
                        g(document.body)
                            .data("padding-right", n)
                            .css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
                    }
                    g(document.body).addClass(ce);
                }),
                (t._resetScrollbar = function () {
                    var t = [].slice.call(document.querySelectorAll(me));
                    g(t).each(function (t, e) {
                        var n = g(e).data("padding-right");
                        g(e).removeData("padding-right"), (e.style.paddingRight = n || "");
                    });
                    var e = [].slice.call(document.querySelectorAll("" + pe));
                    g(e).each(function (t, e) {
                        var n = g(e).data("margin-right");
                        "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right");
                    });
                    var n = g(document.body).data("padding-right");
                    g(document.body).removeData("padding-right"), (document.body.style.paddingRight = n || "");
                }),
                (t._getScrollbarWidth = function () {
                    var t = document.createElement("div");
                    (t.className = ae), document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e;
                }),
                (o._jQueryInterface = function (n, i) {
                    return this.each(function () {
                        var t = g(this).data(te),
                            e = l({}, ie, g(this).data(), "object" == typeof n && n ? n : {});
                        if ((t || ((t = new o(this, e)), g(this).data(te, t)), "string" == typeof n)) {
                            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                            t[n](i);
                        } else e.show && t.show(i);
                    });
                }),
                s(o, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return ie;
                        },
                    },
                ]),
                o
            );
        })();
    g(document).on(re.CLICK_DATA_API, ge, function (t) {
        var e,
            n = this,
            i = _.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
        var r = g(e).one(re.SHOW, function (t) {
            t.isDefaultPrevented() ||
                r.one(re.HIDDEN, function () {
                    g(n).is(":visible") && n.focus();
                });
        });
        ve._jQueryInterface.call(g(e), o, this);
    }),
        (g.fn[Zt] = ve._jQueryInterface),
        (g.fn[Zt].Constructor = ve),
        (g.fn[Zt].noConflict = function () {
            return (g.fn[Zt] = ne), ve._jQueryInterface;
        });
    var ye = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Ee = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
        },
        Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function Se(t, s, e) {
        if (0 === t.length) return t;
        if (e && "function" == typeof e) return e(t);
        for (
            var n = new window.DOMParser().parseFromString(t, "text/html"),
                a = Object.keys(s),
                l = [].slice.call(n.body.querySelectorAll("*")),
                i = function (t, e) {
                    var n = l[t],
                        i = n.nodeName.toLowerCase();
                    if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                    var o = [].slice.call(n.attributes),
                        r = [].concat(s["*"] || [], s[i] || []);
                    o.forEach(function (t) {
                        (function (t, e) {
                            var n = t.nodeName.toLowerCase();
                            if (-1 !== e.indexOf(n)) return -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te));
                            for (
                                var i = e.filter(function (t) {
                                        return t instanceof RegExp;
                                    }),
                                    o = 0,
                                    r = i.length;
                                o < r;
                                o++
                            )
                                if (n.match(i[o])) return !0;
                            return !1;
                        })(t, r) || n.removeAttribute(t.nodeName);
                    });
                },
                o = 0,
                r = l.length;
            o < r;
            o++
        )
            i(o);
        return n.body.innerHTML;
    }
    var be = "tooltip",
        Ie = "bs.tooltip",
        De = "." + Ie,
        we = g.fn[be],
        Ae = "bs-tooltip",
        Ne = new RegExp("(^|\\s)" + Ae + "\\S+", "g"),
        Oe = ["sanitize", "whiteList", "sanitizeFn"],
        ke = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
        },
        Pe = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        Le = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Ee,
        },
        je = "show",
        He = "out",
        Re = {
            HIDE: "hide" + De,
            HIDDEN: "hidden" + De,
            SHOW: "show" + De,
            SHOWN: "shown" + De,
            INSERTED: "inserted" + De,
            CLICK: "click" + De,
            FOCUSIN: "focusin" + De,
            FOCUSOUT: "focusout" + De,
            MOUSEENTER: "mouseenter" + De,
            MOUSELEAVE: "mouseleave" + De,
        },
        xe = "fade",
        Fe = "show",
        Ue = ".tooltip-inner",
        We = ".arrow",
        qe = "hover",
        Me = "focus",
        Ke = "click",
        Qe = "manual",
        Be = (function () {
            function i(t, e) {
                if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                (this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this.element = t), (this.config = this._getConfig(e)), (this.tip = null), this._setListeners();
            }
            var t = i.prototype;
            return (
                (t.enable = function () {
                    this._isEnabled = !0;
                }),
                (t.disable = function () {
                    this._isEnabled = !1;
                }),
                (t.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled;
                }),
                (t.toggle = function (t) {
                    if (this._isEnabled)
                        if (t) {
                            var e = this.constructor.DATA_KEY,
                                n = g(t.currentTarget).data(e);
                            n || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), g(t.currentTarget).data(e, n)),
                                (n._activeTrigger.click = !n._activeTrigger.click),
                                n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
                        } else {
                            if (g(this.getTipElement()).hasClass(Fe)) return void this._leave(null, this);
                            this._enter(null, this);
                        }
                }),
                (t.dispose = function () {
                    clearTimeout(this._timeout),
                        g.removeData(this.element, this.constructor.DATA_KEY),
                        g(this.element).off(this.constructor.EVENT_KEY),
                        g(this.element).closest(".modal").off("hide.bs.modal"),
                        this.tip && g(this.tip).remove(),
                        (this._isEnabled = null),
                        (this._timeout = null),
                        (this._hoverState = null),
                        (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
                        (this._popper = null),
                        (this.element = null),
                        (this.config = null),
                        (this.tip = null);
                }),
                (t.show = function () {
                    var e = this;
                    if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var t = g.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        g(this.element).trigger(t);
                        var n = _.findShadowRoot(this.element),
                            i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                        if (t.isDefaultPrevented() || !i) return;
                        var o = this.getTipElement(),
                            r = _.getUID(this.constructor.NAME);
                        o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(xe);
                        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                            a = this._getAttachment(s);
                        this.addAttachmentClass(a);
                        var l = this._getContainer();
                        g(o).data(this.constructor.DATA_KEY, this),
                            g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l),
                            g(this.element).trigger(this.constructor.Event.INSERTED),
                            (this._popper = new u(this.element, o, {
                                placement: a,
                                modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: We }, preventOverflow: { boundariesElement: this.config.boundary } },
                                onCreate: function (t) {
                                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                                },
                                onUpdate: function (t) {
                                    return e._handlePopperPlacementChange(t);
                                },
                            })),
                            g(o).addClass(Fe),
                            "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);
                        var c = function () {
                            e.config.animation && e._fixTransition();
                            var t = e._hoverState;
                            (e._hoverState = null), g(e.element).trigger(e.constructor.Event.SHOWN), t === He && e._leave(null, e);
                        };
                        if (g(this.tip).hasClass(xe)) {
                            var h = _.getTransitionDurationFromElement(this.tip);
                            g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h);
                        } else c();
                    }
                }),
                (t.hide = function (t) {
                    var e = this,
                        n = this.getTipElement(),
                        i = g.Event(this.constructor.Event.HIDE),
                        o = function () {
                            e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n),
                                e._cleanTipClass(),
                                e.element.removeAttribute("aria-describedby"),
                                g(e.element).trigger(e.constructor.Event.HIDDEN),
                                null !== e._popper && e._popper.destroy(),
                                t && t();
                        };
                    if ((g(this.element).trigger(i), !i.isDefaultPrevented())) {
                        if (
                            (g(n).removeClass(Fe),
                            "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop),
                            (this._activeTrigger[Ke] = !1),
                            (this._activeTrigger[Me] = !1),
                            (this._activeTrigger[qe] = !1),
                            g(this.tip).hasClass(xe))
                        ) {
                            var r = _.getTransitionDurationFromElement(n);
                            g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
                        } else o();
                        this._hoverState = "";
                    }
                }),
                (t.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate();
                }),
                (t.isWithContent = function () {
                    return Boolean(this.getTitle());
                }),
                (t.addAttachmentClass = function (t) {
                    g(this.getTipElement()).addClass(Ae + "-" + t);
                }),
                (t.getTipElement = function () {
                    return (this.tip = this.tip || g(this.config.template)[0]), this.tip;
                }),
                (t.setContent = function () {
                    var t = this.getTipElement();
                    this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()), g(t).removeClass(xe + " " + Fe);
                }),
                (t.setElementContent = function (t, e) {
                    "object" != typeof e || (!e.nodeType && !e.jquery)
                        ? this.config.html
                            ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e))
                            : t.text(e)
                        : this.config.html
                        ? g(e).parent().is(t) || t.empty().append(e)
                        : t.text(g(e).text());
                }),
                (t.getTitle = function () {
                    var t = this.element.getAttribute("data-original-title");
                    return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
                }),
                (t._getOffset = function () {
                    var e = this,
                        t = {};
                    return (
                        "function" == typeof this.config.offset
                            ? (t.fn = function (t) {
                                  return (t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {})), t;
                              })
                            : (t.offset = this.config.offset),
                        t
                    );
                }),
                (t._getContainer = function () {
                    return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container);
                }),
                (t._getAttachment = function (t) {
                    return Pe[t.toUpperCase()];
                }),
                (t._setListeners = function () {
                    var i = this;
                    this.config.trigger.split(" ").forEach(function (t) {
                        if ("click" === t)
                            g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
                                return i.toggle(t);
                            });
                        else if (t !== Qe) {
                            var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                                n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                            g(i.element)
                                .on(e, i.config.selector, function (t) {
                                    return i._enter(t);
                                })
                                .on(n, i.config.selector, function (t) {
                                    return i._leave(t);
                                });
                        }
                    }),
                        g(this.element)
                            .closest(".modal")
                            .on("hide.bs.modal", function () {
                                i.element && i.hide();
                            }),
                        this.config.selector ? (this.config = l({}, this.config, { trigger: "manual", selector: "" })) : this._fixTitle();
                }),
                (t._fixTitle = function () {
                    var t = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
                }),
                (t._enter = function (t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || g(t.currentTarget).data(n)) || ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), g(t.currentTarget).data(n, e)),
                        t && (e._activeTrigger["focusin" === t.type ? Me : qe] = !0),
                        g(e.getTipElement()).hasClass(Fe) || e._hoverState === je
                            ? (e._hoverState = je)
                            : (clearTimeout(e._timeout),
                              (e._hoverState = je),
                              e.config.delay && e.config.delay.show
                                  ? (e._timeout = setTimeout(function () {
                                        e._hoverState === je && e.show();
                                    }, e.config.delay.show))
                                  : e.show());
                }),
                (t._leave = function (t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || g(t.currentTarget).data(n)) || ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), g(t.currentTarget).data(n, e)),
                        t && (e._activeTrigger["focusout" === t.type ? Me : qe] = !1),
                        e._isWithActiveTrigger() ||
                            (clearTimeout(e._timeout),
                            (e._hoverState = He),
                            e.config.delay && e.config.delay.hide
                                ? (e._timeout = setTimeout(function () {
                                      e._hoverState === He && e.hide();
                                  }, e.config.delay.hide))
                                : e.hide());
                }),
                (t._isWithActiveTrigger = function () {
                    for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                    return !1;
                }),
                (t._getConfig = function (t) {
                    var e = g(this.element).data();
                    return (
                        Object.keys(e).forEach(function (t) {
                            -1 !== Oe.indexOf(t) && delete e[t];
                        }),
                        "number" == typeof (t = l({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }),
                        "number" == typeof t.title && (t.title = t.title.toString()),
                        "number" == typeof t.content && (t.content = t.content.toString()),
                        _.typeCheckConfig(be, t, this.constructor.DefaultType),
                        t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)),
                        t
                    );
                }),
                (t._getDelegateConfig = function () {
                    var t = {};
                    if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t;
                }),
                (t._cleanTipClass = function () {
                    var t = g(this.getTipElement()),
                        e = t.attr("class").match(Ne);
                    null !== e && e.length && t.removeClass(e.join(""));
                }),
                (t._handlePopperPlacementChange = function (t) {
                    var e = t.instance;
                    (this.tip = e.popper), this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
                }),
                (t._fixTransition = function () {
                    var t = this.getTipElement(),
                        e = this.config.animation;
                    null === t.getAttribute("x-placement") && (g(t).removeClass(xe), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = e));
                }),
                (i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = g(this).data(Ie),
                            e = "object" == typeof n && n;
                        if ((t || !/dispose|hide/.test(n)) && (t || ((t = new i(this, e)), g(this).data(Ie, t)), "string" == typeof n)) {
                            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                            t[n]();
                        }
                    });
                }),
                s(i, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return Le;
                        },
                    },
                    {
                        key: "NAME",
                        get: function () {
                            return be;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return Ie;
                        },
                    },
                    {
                        key: "Event",
                        get: function () {
                            return Re;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function () {
                            return De;
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return ke;
                        },
                    },
                ]),
                i
            );
        })();
    (g.fn[be] = Be._jQueryInterface),
        (g.fn[be].Constructor = Be),
        (g.fn[be].noConflict = function () {
            return (g.fn[be] = we), Be._jQueryInterface;
        });
    var Ve = "popover",
        Ye = "bs.popover",
        ze = "." + Ye,
        Xe = g.fn[Ve],
        $e = "bs-popover",
        Ge = new RegExp("(^|\\s)" + $e + "\\S+", "g"),
        Je = l({}, Be.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        Ze = l({}, Be.DefaultType, { content: "(string|element|function)" }),
        tn = "fade",
        en = "show",
        nn = ".popover-header",
        on = ".popover-body",
        rn = {
            HIDE: "hide" + ze,
            HIDDEN: "hidden" + ze,
            SHOW: "show" + ze,
            SHOWN: "shown" + ze,
            INSERTED: "inserted" + ze,
            CLICK: "click" + ze,
            FOCUSIN: "focusin" + ze,
            FOCUSOUT: "focusout" + ze,
            MOUSEENTER: "mouseenter" + ze,
            MOUSELEAVE: "mouseleave" + ze,
        },
        sn = (function (t) {
            var e, n;
            function i() {
                return t.apply(this, arguments) || this;
            }
            (n = t), ((e = i).prototype = Object.create(n.prototype)), ((e.prototype.constructor = e).__proto__ = n);
            var o = i.prototype;
            return (
                (o.isWithContent = function () {
                    return this.getTitle() || this._getContent();
                }),
                (o.addAttachmentClass = function (t) {
                    g(this.getTipElement()).addClass($e + "-" + t);
                }),
                (o.getTipElement = function () {
                    return (this.tip = this.tip || g(this.config.template)[0]), this.tip;
                }),
                (o.setContent = function () {
                    var t = g(this.getTipElement());
                    this.setElementContent(t.find(nn), this.getTitle());
                    var e = this._getContent();
                    "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(on), e), t.removeClass(tn + " " + en);
                }),
                (o._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content;
                }),
                (o._cleanTipClass = function () {
                    var t = g(this.getTipElement()),
                        e = t.attr("class").match(Ge);
                    null !== e && 0 < e.length && t.removeClass(e.join(""));
                }),
                (i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = g(this).data(Ye),
                            e = "object" == typeof n ? n : null;
                        if ((t || !/dispose|hide/.test(n)) && (t || ((t = new i(this, e)), g(this).data(Ye, t)), "string" == typeof n)) {
                            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                            t[n]();
                        }
                    });
                }),
                s(i, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return Je;
                        },
                    },
                    {
                        key: "NAME",
                        get: function () {
                            return Ve;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return Ye;
                        },
                    },
                    {
                        key: "Event",
                        get: function () {
                            return rn;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function () {
                            return ze;
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return Ze;
                        },
                    },
                ]),
                i
            );
        })(Be);
    (g.fn[Ve] = sn._jQueryInterface),
        (g.fn[Ve].Constructor = sn),
        (g.fn[Ve].noConflict = function () {
            return (g.fn[Ve] = Xe), sn._jQueryInterface;
        });
    var an = "scrollspy",
        ln = "bs.scrollspy",
        cn = "." + ln,
        hn = g.fn[an],
        un = { offset: 10, method: "auto", target: "" },
        fn = { offset: "number", method: "string", target: "(string|element)" },
        dn = { ACTIVATE: "activate" + cn, SCROLL: "scroll" + cn, LOAD_DATA_API: "load" + cn + ".data-api" },
        gn = "dropdown-item",
        _n = "active",
        mn = '[data-spy="scroll"]',
        pn = ".nav, .list-group",
        vn = ".nav-link",
        yn = ".nav-item",
        En = ".list-group-item",
        Cn = ".dropdown",
        Tn = ".dropdown-item",
        Sn = ".dropdown-toggle",
        bn = "offset",
        In = "position",
        Dn = (function () {
            function n(t, e) {
                var n = this;
                (this._element = t),
                    (this._scrollElement = "BODY" === t.tagName ? window : t),
                    (this._config = this._getConfig(e)),
                    (this._selector = this._config.target + " " + vn + "," + this._config.target + " " + En + "," + this._config.target + " " + Tn),
                    (this._offsets = []),
                    (this._targets = []),
                    (this._activeTarget = null),
                    (this._scrollHeight = 0),
                    g(this._scrollElement).on(dn.SCROLL, function (t) {
                        return n._process(t);
                    }),
                    this.refresh(),
                    this._process();
            }
            var t = n.prototype;
            return (
                (t.refresh = function () {
                    var e = this,
                        t = this._scrollElement === this._scrollElement.window ? bn : In,
                        o = "auto" === this._config.method ? t : this._config.method,
                        r = o === In ? this._getScrollTop() : 0;
                    (this._offsets = []),
                        (this._targets = []),
                        (this._scrollHeight = this._getScrollHeight()),
                        [].slice
                            .call(document.querySelectorAll(this._selector))
                            .map(function (t) {
                                var e,
                                    n = _.getSelectorFromElement(t);
                                if ((n && (e = document.querySelector(n)), e)) {
                                    var i = e.getBoundingClientRect();
                                    if (i.width || i.height) return [g(e)[o]().top + r, n];
                                }
                                return null;
                            })
                            .filter(function (t) {
                                return t;
                            })
                            .sort(function (t, e) {
                                return t[0] - e[0];
                            })
                            .forEach(function (t) {
                                e._offsets.push(t[0]), e._targets.push(t[1]);
                            });
                }),
                (t.dispose = function () {
                    g.removeData(this._element, ln),
                        g(this._scrollElement).off(cn),
                        (this._element = null),
                        (this._scrollElement = null),
                        (this._config = null),
                        (this._selector = null),
                        (this._offsets = null),
                        (this._targets = null),
                        (this._activeTarget = null),
                        (this._scrollHeight = null);
                }),
                (t._getConfig = function (t) {
                    if ("string" != typeof (t = l({}, un, "object" == typeof t && t ? t : {})).target) {
                        var e = g(t.target).attr("id");
                        e || ((e = _.getUID(an)), g(t.target).attr("id", e)), (t.target = "#" + e);
                    }
                    return _.typeCheckConfig(an, t, fn), t;
                }),
                (t._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                }),
                (t._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                }),
                (t._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
                }),
                (t._process = function () {
                    var t = this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        n = this._config.offset + e - this._getOffsetHeight();
                    if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i);
                    } else {
                        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return (this._activeTarget = null), void this._clear();
                        for (var o = this._offsets.length; o--; ) {
                            this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
                        }
                    }
                }),
                (t._activate = function (e) {
                    (this._activeTarget = e), this._clear();
                    var t = this._selector.split(",").map(function (t) {
                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
                        }),
                        n = g([].slice.call(document.querySelectorAll(t.join(","))));
                    n.hasClass(gn)
                        ? (n.closest(Cn).find(Sn).addClass(_n), n.addClass(_n))
                        : (n.addClass(_n),
                          n
                              .parents(pn)
                              .prev(vn + ", " + En)
                              .addClass(_n),
                          n.parents(pn).prev(yn).children(vn).addClass(_n)),
                        g(this._scrollElement).trigger(dn.ACTIVATE, { relatedTarget: e });
                }),
                (t._clear = function () {
                    [].slice
                        .call(document.querySelectorAll(this._selector))
                        .filter(function (t) {
                            return t.classList.contains(_n);
                        })
                        .forEach(function (t) {
                            return t.classList.remove(_n);
                        });
                }),
                (n._jQueryInterface = function (e) {
                    return this.each(function () {
                        var t = g(this).data(ln);
                        if ((t || ((t = new n(this, "object" == typeof e && e)), g(this).data(ln, t)), "string" == typeof e)) {
                            if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                            t[e]();
                        }
                    });
                }),
                s(n, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return un;
                        },
                    },
                ]),
                n
            );
        })();
    g(window).on(dn.LOAD_DATA_API, function () {
        for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--; ) {
            var n = g(t[e]);
            Dn._jQueryInterface.call(n, n.data());
        }
    }),
        (g.fn[an] = Dn._jQueryInterface),
        (g.fn[an].Constructor = Dn),
        (g.fn[an].noConflict = function () {
            return (g.fn[an] = hn), Dn._jQueryInterface;
        });
    var wn = "bs.tab",
        An = "." + wn,
        Nn = g.fn.tab,
        On = { HIDE: "hide" + An, HIDDEN: "hidden" + An, SHOW: "show" + An, SHOWN: "shown" + An, CLICK_DATA_API: "click" + An + ".data-api" },
        kn = "dropdown-menu",
        Pn = "active",
        Ln = "disabled",
        jn = "fade",
        Hn = "show",
        Rn = ".dropdown",
        xn = ".nav, .list-group",
        Fn = ".active",
        Un = "> li > .active",
        Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        qn = ".dropdown-toggle",
        Mn = "> .dropdown-menu .active",
        Kn = (function () {
            function i(t) {
                this._element = t;
            }
            var t = i.prototype;
            return (
                (t.show = function () {
                    var n = this;
                    if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn)) || g(this._element).hasClass(Ln))) {
                        var t,
                            i,
                            e = g(this._element).closest(xn)[0],
                            o = _.getSelectorFromElement(this._element);
                        if (e) {
                            var r = "UL" === e.nodeName || "OL" === e.nodeName ? Un : Fn;
                            i = (i = g.makeArray(g(e).find(r)))[i.length - 1];
                        }
                        var s = g.Event(On.HIDE, { relatedTarget: this._element }),
                            a = g.Event(On.SHOW, { relatedTarget: i });
                        if ((i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented())) {
                            o && (t = document.querySelector(o)), this._activate(this._element, e);
                            var l = function () {
                                var t = g.Event(On.HIDDEN, { relatedTarget: n._element }),
                                    e = g.Event(On.SHOWN, { relatedTarget: i });
                                g(i).trigger(t), g(n._element).trigger(e);
                            };
                            t ? this._activate(t, t.parentNode, l) : l();
                        }
                    }
                }),
                (t.dispose = function () {
                    g.removeData(this._element, wn), (this._element = null);
                }),
                (t._activate = function (t, e, n) {
                    var i = this,
                        o = (!e || ("UL" !== e.nodeName && "OL" !== e.nodeName) ? g(e).children(Fn) : g(e).find(Un))[0],
                        r = n && o && g(o).hasClass(jn),
                        s = function () {
                            return i._transitionComplete(t, o, n);
                        };
                    if (o && r) {
                        var a = _.getTransitionDurationFromElement(o);
                        g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a);
                    } else s();
                }),
                (t._transitionComplete = function (t, e, n) {
                    if (e) {
                        g(e).removeClass(Pn);
                        var i = g(e.parentNode).find(Mn)[0];
                        i && g(i).removeClass(Pn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
                    }
                    if ((g(t).addClass(Pn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(jn) && t.classList.add(Hn), t.parentNode && g(t.parentNode).hasClass(kn))) {
                        var o = g(t).closest(Rn)[0];
                        if (o) {
                            var r = [].slice.call(o.querySelectorAll(qn));
                            g(r).addClass(Pn);
                        }
                        t.setAttribute("aria-expanded", !0);
                    }
                    n && n();
                }),
                (i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = g(this),
                            e = t.data(wn);
                        if ((e || ((e = new i(this)), t.data(wn, e)), "string" == typeof n)) {
                            if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                            e[n]();
                        }
                    });
                }),
                s(i, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                ]),
                i
            );
        })();
    g(document).on(On.CLICK_DATA_API, Wn, function (t) {
        t.preventDefault(), Kn._jQueryInterface.call(g(this), "show");
    }),
        (g.fn.tab = Kn._jQueryInterface),
        (g.fn.tab.Constructor = Kn),
        (g.fn.tab.noConflict = function () {
            return (g.fn.tab = Nn), Kn._jQueryInterface;
        });
    var Qn = "toast",
        Bn = "bs.toast",
        Vn = "." + Bn,
        Yn = g.fn[Qn],
        zn = { CLICK_DISMISS: "click.dismiss" + Vn, HIDE: "hide" + Vn, HIDDEN: "hidden" + Vn, SHOW: "show" + Vn, SHOWN: "shown" + Vn },
        Xn = "fade",
        $n = "hide",
        Gn = "show",
        Jn = "showing",
        Zn = { animation: "boolean", autohide: "boolean", delay: "number" },
        ti = { animation: !0, autohide: !0, delay: 500 },
        ei = '[data-dismiss="toast"]',
        ni = (function () {
            function i(t, e) {
                (this._element = t), (this._config = this._getConfig(e)), (this._timeout = null), this._setListeners();
            }
            var t = i.prototype;
            return (
                (t.show = function () {
                    var t = this;
                    g(this._element).trigger(zn.SHOW), this._config.animation && this._element.classList.add(Xn);
                    var e = function () {
                        t._element.classList.remove(Jn), t._element.classList.add(Gn), g(t._element).trigger(zn.SHOWN), t._config.autohide && t.hide();
                    };
                    if ((this._element.classList.remove($n), this._element.classList.add(Jn), this._config.animation)) {
                        var n = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n);
                    } else e();
                }),
                (t.hide = function (t) {
                    var e = this;
                    this._element.classList.contains(Gn) &&
                        (g(this._element).trigger(zn.HIDE),
                        t
                            ? this._close()
                            : (this._timeout = setTimeout(function () {
                                  e._close();
                              }, this._config.delay)));
                }),
                (t.dispose = function () {
                    clearTimeout(this._timeout),
                        (this._timeout = null),
                        this._element.classList.contains(Gn) && this._element.classList.remove(Gn),
                        g(this._element).off(zn.CLICK_DISMISS),
                        g.removeData(this._element, Bn),
                        (this._element = null),
                        (this._config = null);
                }),
                (t._getConfig = function (t) {
                    return (t = l({}, ti, g(this._element).data(), "object" == typeof t && t ? t : {})), _.typeCheckConfig(Qn, t, this.constructor.DefaultType), t;
                }),
                (t._setListeners = function () {
                    var t = this;
                    g(this._element).on(zn.CLICK_DISMISS, ei, function () {
                        return t.hide(!0);
                    });
                }),
                (t._close = function () {
                    var t = this,
                        e = function () {
                            t._element.classList.add($n), g(t._element).trigger(zn.HIDDEN);
                        };
                    if ((this._element.classList.remove(Gn), this._config.animation)) {
                        var n = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n);
                    } else e();
                }),
                (i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = g(this),
                            e = t.data(Bn);
                        if ((e || ((e = new i(this, "object" == typeof n && n)), t.data(Bn, e)), "string" == typeof n)) {
                            if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                            e[n](this);
                        }
                    });
                }),
                s(i, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return Zn;
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return ti;
                        },
                    },
                ]),
                i
            );
        })();
    (g.fn[Qn] = ni._jQueryInterface),
        (g.fn[Qn].Constructor = ni),
        (g.fn[Qn].noConflict = function () {
            return (g.fn[Qn] = Yn), ni._jQueryInterface;
        }),
        (function () {
            if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = g.fn.jquery.split(" ")[0].split(".");
            if ((t[0] < 2 && t[1] < 9) || (1 === t[0] && 9 === t[1] && t[2] < 1) || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
        })(),
        (t.Util = _),
        (t.Alert = p),
        (t.Button = P),
        (t.Carousel = lt),
        (t.Collapse = bt),
        (t.Dropdown = Jt),
        (t.Modal = ve),
        (t.Popover = sn),
        (t.Scrollspy = Dn),
        (t.Tab = Kn),
        (t.Toast = ni),
        (t.Tooltip = Be),
        Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.min.js.map

/* ========================
	bootstrap-select.min.js
========================= */
/* Bootstrap-select v1.7.2 (http://silviomoreto.github.io/bootstrap-select)
 * Copyright 2013-2015 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE) */
!(function (a, b) {
    "function" == typeof define && define.amd
        ? define(["jquery"], function (a) {
              return b(a);
          })
        : "object" == typeof exports
        ? (module.exports = b(require("jquery")))
        : b(jQuery);
})(this, function () {
    !(function (a) {
        "use strict";
        function b(b) {
            var c = [
                { re: /[\xC0-\xC6]/g, ch: "A" },
                { re: /[\xE0-\xE6]/g, ch: "a" },
                { re: /[\xC8-\xCB]/g, ch: "E" },
                { re: /[\xE8-\xEB]/g, ch: "e" },
                { re: /[\xCC-\xCF]/g, ch: "I" },
                { re: /[\xEC-\xEF]/g, ch: "i" },
                { re: /[\xD2-\xD6]/g, ch: "O" },
                { re: /[\xF2-\xF6]/g, ch: "o" },
                { re: /[\xD9-\xDC]/g, ch: "U" },
                { re: /[\xF9-\xFC]/g, ch: "u" },
                { re: /[\xC7-\xE7]/g, ch: "c" },
                { re: /[\xD1]/g, ch: "N" },
                { re: /[\xF1]/g, ch: "n" },
            ];
            return (
                a.each(c, function () {
                    b = b.replace(this.re, this.ch);
                }),
                b
            );
        }
        function c(a) {
            var b = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                c = "(?:" + Object.keys(b).join("|") + ")",
                d = new RegExp(c),
                e = new RegExp(c, "g"),
                f = null == a ? "" : "" + a;
            return d.test(f)
                ? f.replace(e, function (a) {
                      return b[a];
                  })
                : f;
        }
        function d(b, c) {
            var d = arguments,
                f = b,
                g = c;
            [].shift.apply(d);
            var h,
                i = this.each(function () {
                    var b = a(this);
                    if (b.is("select")) {
                        var c = b.data("selectpicker"),
                            i = "object" == typeof f && f;
                        if (c) {
                            if (i) for (var j in i) i.hasOwnProperty(j) && (c.options[j] = i[j]);
                        } else {
                            var k = a.extend({}, e.DEFAULTS, a.fn.selectpicker.defaults || {}, b.data(), i);
                            b.data("selectpicker", (c = new e(this, k, g)));
                        }
                        "string" == typeof f && (h = c[f] instanceof Function ? c[f].apply(c, d) : c.options[f]);
                    }
                });
            return "undefined" != typeof h ? h : i;
        }
        String.prototype.includes ||
            !(function () {
                var a = {}.toString,
                    b = (function () {
                        try {
                            var a = {},
                                b = Object.defineProperty,
                                c = b(a, a, a) && b;
                        } catch (d) {}
                        return c;
                    })(),
                    c = "".indexOf,
                    d = function (b) {
                        if (null == this) throw TypeError();
                        var d = String(this);
                        if (b && "[object RegExp]" == a.call(b)) throw TypeError();
                        var e = d.length,
                            f = String(b),
                            g = f.length,
                            h = arguments.length > 1 ? arguments[1] : void 0,
                            i = h ? Number(h) : 0;
                        i != i && (i = 0);
                        var j = Math.min(Math.max(i, 0), e);
                        return g + j > e ? !1 : -1 != c.call(d, f, i);
                    };
                b ? b(String.prototype, "includes", { value: d, configurable: !0, writable: !0 }) : (String.prototype.includes = d);
            })(),
            String.prototype.startsWith ||
                !(function () {
                    var a = (function () {
                            try {
                                var a = {},
                                    b = Object.defineProperty,
                                    c = b(a, a, a) && b;
                            } catch (d) {}
                            return c;
                        })(),
                        b = {}.toString,
                        c = function (a) {
                            if (null == this) throw TypeError();
                            var c = String(this);
                            if (a && "[object RegExp]" == b.call(a)) throw TypeError();
                            var d = c.length,
                                e = String(a),
                                f = e.length,
                                g = arguments.length > 1 ? arguments[1] : void 0,
                                h = g ? Number(g) : 0;
                            h != h && (h = 0);
                            var i = Math.min(Math.max(h, 0), d);
                            if (f + i > d) return !1;
                            for (var j = -1; ++j < f; ) if (c.charCodeAt(i + j) != e.charCodeAt(j)) return !1;
                            return !0;
                        };
                    a ? a(String.prototype, "startsWith", { value: c, configurable: !0, writable: !0 }) : (String.prototype.startsWith = c);
                })(),
            Object.keys ||
                (Object.keys = function (a, b, c) {
                    c = [];
                    for (b in a) c.hasOwnProperty.call(a, b) && c.push(b);
                    return c;
                }),
            (a.expr[":"].icontains = function (b, c, d) {
                var e = a(b),
                    f = (e.data("tokens") || e.text()).toUpperCase();
                return f.includes(d[3].toUpperCase());
            }),
            (a.expr[":"].ibegins = function (b, c, d) {
                var e = a(b),
                    f = (e.data("tokens") || e.text()).toUpperCase();
                return f.startsWith(d[3].toUpperCase());
            }),
            (a.expr[":"].aicontains = function (b, c, d) {
                var e = a(b),
                    f = (e.data("tokens") || e.data("normalizedText") || e.text()).toUpperCase();
                return f.includes(d[3].toUpperCase());
            }),
            (a.expr[":"].aibegins = function (b, c, d) {
                var e = a(b),
                    f = (e.data("tokens") || e.data("normalizedText") || e.text()).toUpperCase();
                return f.startsWith(d[3].toUpperCase());
            });
        var e = function (b, c, d) {
            d && (d.stopPropagation(), d.preventDefault()),
                (this.$element = a(b)),
                (this.$newElement = null),
                (this.$button = null),
                (this.$menu = null),
                (this.$lis = null),
                (this.options = c),
                null === this.options.title && (this.options.title = this.$element.attr("title")),
                (this.val = e.prototype.val),
                (this.render = e.prototype.render),
                (this.refresh = e.prototype.refresh),
                (this.setStyle = e.prototype.setStyle),
                (this.selectAll = e.prototype.selectAll),
                (this.deselectAll = e.prototype.deselectAll),
                (this.destroy = e.prototype.remove),
                (this.remove = e.prototype.remove),
                (this.show = e.prototype.show),
                (this.hide = e.prototype.hide),
                this.init();
        };
        (e.VERSION = "1.7.2"),
            (e.DEFAULTS = {
                noneSelectedText: "Nothing selected",
                noneResultsText: "No results matched {0}",
                countSelectedText: function (a, b) {
                    return 1 == a ? "{0} item selected" : "{0} items selected";
                },
                maxOptionsText: function (a, b) {
                    return [1 == a ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == b ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"];
                },
                selectAllText: "Select All",
                deselectAllText: "Deselect All",
                doneButton: !1,
                doneButtonText: "Close",
                multipleSeparator: ", ",
                styleBase: "btn",
                style: "btn-default",
                size: "auto",
                title: null,
                selectedTextFormat: "values",
                width: !1,
                container: !1,
                hideDisabled: !1,
                showSubtext: !1,
                showIcon: !0,
                showContent: !0,
                dropupAuto: !0,
                header: !1,
                liveSearch: !1,
                liveSearchPlaceholder: null,
                liveSearchNormalize: !1,
                liveSearchStyle: "contains",
                actionsBox: !1,
                iconBase: "glyphicon",
                tickIcon: "glyphicon-ok",
                maxOptions: !1,
                mobile: !1,
                selectOnTab: !1,
                dropdownAlignRight: !1,
            }),
            (e.prototype = {
                constructor: e,
                init: function () {
                    var b = this,
                        c = this.$element.attr("id");
                    this.$element.addClass("bs-select-hidden"),
                        (this.liObj = {}),
                        (this.multiple = this.$element.prop("multiple")),
                        (this.autofocus = this.$element.prop("autofocus")),
                        (this.$newElement = this.createView()),
                        this.$element.after(this.$newElement),
                        (this.$button = this.$newElement.children("button")),
                        (this.$menu = this.$newElement.children(".dropdown-menu")),
                        (this.$menuInner = this.$menu.children(".inner")),
                        (this.$searchbox = this.$menu.find("input")),
                        this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"),
                        "undefined" != typeof c &&
                            (this.$button.attr("data-id", c),
                            a('label[for="' + c + '"]').click(function (a) {
                                a.preventDefault(), b.$button.focus();
                            })),
                        this.checkDisabled(),
                        this.clickListener(),
                        this.options.liveSearch && this.liveSearchListener(),
                        this.render(),
                        this.setStyle(),
                        this.setWidth(),
                        this.options.container && this.selectPosition(),
                        this.$menu.data("this", this),
                        this.$newElement.data("this", this),
                        this.options.mobile && this.mobile(),
                        this.$newElement.on("hide.bs.dropdown", function (a) {
                            b.$element.trigger("hide.bs.select", a);
                        }),
                        this.$newElement.on("hidden.bs.dropdown", function (a) {
                            b.$element.trigger("hidden.bs.select", a);
                        }),
                        this.$newElement.on("show.bs.dropdown", function (a) {
                            b.$element.trigger("show.bs.select", a);
                        }),
                        this.$newElement.on("shown.bs.dropdown", function (a) {
                            b.$element.trigger("shown.bs.select", a);
                        }),
                        setTimeout(function () {
                            b.$element.trigger("loaded.bs.select");
                        });
                },
                createDropdown: function () {
                    var b = this.multiple ? " show-tick" : "",
                        d = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                        e = this.autofocus ? " autofocus" : "",
                        f = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                        g = this.options.liveSearch
                            ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' +
                              (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + c(this.options.liveSearchPlaceholder) + '"') +
                              "></div>"
                            : "",
                        h =
                            this.multiple && this.options.actionsBox
                                ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' +
                                  this.options.selectAllText +
                                  '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' +
                                  this.options.deselectAllText +
                                  "</button></div></div>"
                                : "",
                        i =
                            this.multiple && this.options.doneButton
                                ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>"
                                : "",
                        j =
                            '<div class="btn-group bootstrap-select' +
                            b +
                            d +
                            '"><button type="button" class="' +
                            this.options.styleBase +
                            ' dropdown-toggle" data-toggle="dropdown"' +
                            e +
                            '><span class="filter-option pull-left"></span>&nbsp;<span class="caret fa fa-caret-down"></span></button><div class="dropdown-menu open">' +
                            f +
                            g +
                            h +
                            '<ul class="dropdown-menu inner" role="menu"></ul>' +
                            i +
                            "</div></div>";
                    return a(j);
                },
                createView: function () {
                    var a = this.createDropdown(),
                        b = this.createLi();
                    return (a.find("ul")[0].innerHTML = b), a;
                },
                reloadLi: function () {
                    this.destroyLi();
                    var a = this.createLi();
                    this.$menuInner[0].innerHTML = a;
                },
                destroyLi: function () {
                    this.$menu.find("li").remove();
                },
                createLi: function () {
                    var d = this,
                        e = [],
                        f = 0,
                        g = document.createElement("option"),
                        h = -1,
                        i = function (a, b, c, d) {
                            return (
                                "<li" +
                                (("undefined" != typeof c) & ("" !== c) ? ' class="' + c + '"' : "") +
                                (("undefined" != typeof b) & (null !== b) ? ' data-original-index="' + b + '"' : "") +
                                (("undefined" != typeof d) & (null !== d) ? 'data-optgroup="' + d + '"' : "") +
                                ">" +
                                a +
                                "</li>"
                            );
                        },
                        j = function (a, e, f, g) {
                            return (
                                '<a tabindex="0"' +
                                ("undefined" != typeof e ? ' class="' + e + '"' : "") +
                                ("undefined" != typeof f ? ' style="' + f + '"' : "") +
                                (d.options.liveSearchNormalize ? ' data-normalized-text="' + b(c(a)) + '"' : "") +
                                ("undefined" != typeof g || null !== g ? ' data-tokens="' + g + '"' : "") +
                                ">" +
                                a +
                                '<span class="' +
                                d.options.iconBase +
                                " " +
                                d.options.tickIcon +
                                ' check-mark"></span></a>'
                            );
                        };
                    if (this.options.title && !this.multiple && (h--, !this.$element.find(".bs-title-option").length)) {
                        var k = this.$element[0];
                        (g.className = "bs-title-option"),
                            g.appendChild(document.createTextNode(this.options.title)),
                            (g.value = ""),
                            k.insertBefore(g, k.firstChild),
                            null === k.options[k.selectedIndex].getAttribute("selected") && (g.selected = !0);
                    }
                    return (
                        this.$element.find("option").each(function (b) {
                            var c = a(this);
                            if ((h++, !c.hasClass("bs-title-option"))) {
                                var g = this.className || "",
                                    k = this.style.cssText,
                                    l = c.data("content") ? c.data("content") : c.html(),
                                    m = c.data("tokens") ? c.data("tokens") : null,
                                    n = "undefined" != typeof c.data("subtext") ? '<small class="text-muted">' + c.data("subtext") + "</small>" : "",
                                    o = "undefined" != typeof c.data("icon") ? '<span class="' + d.options.iconBase + " " + c.data("icon") + '"></span> ' : "",
                                    p = this.disabled || ("OPTGROUP" === this.parentElement.tagName && this.parentElement.disabled);
                                if (("" !== o && p && (o = "<span>" + o + "</span>"), d.options.hideDisabled && p)) return void h--;
                                if ((c.data("content") || (l = o + '<span class="text">' + l + n + "</span>"), "OPTGROUP" === this.parentElement.tagName && c.data("divider") !== !0)) {
                                    if (0 === c.index()) {
                                        f += 1;
                                        var q = this.parentElement.label,
                                            r = "undefined" != typeof c.parent().data("subtext") ? '<small class="text-muted">' + c.parent().data("subtext") + "</small>" : "",
                                            s = c.parent().data("icon") ? '<span class="' + d.options.iconBase + " " + c.parent().data("icon") + '"></span> ' : "",
                                            t = " " + this.parentElement.className || "";
                                        (q = s + '<span class="text">' + q + r + "</span>"), 0 !== b && e.length > 0 && (h++, e.push(i("", null, "divider", f + "div"))), h++, e.push(i(q, null, "dropdown-header" + t, f));
                                    }
                                    e.push(i(j(l, "opt " + g + t, k, m), b, "", f));
                                } else
                                    c.data("divider") === !0
                                        ? e.push(i("", b, "divider"))
                                        : c.data("hidden") === !0
                                        ? e.push(i(j(l, g, k, m), b, "hidden is-hidden"))
                                        : (this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName && (h++, e.push(i("", null, "divider", f + "div"))), e.push(i(j(l, g, k, m), b)));
                                d.liObj[b] = h;
                            }
                        }),
                        this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"),
                        e.join("")
                    );
                },
                findLis: function () {
                    return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis;
                },
                render: function (b) {
                    var c,
                        d = this;
                    b !== !1 &&
                        this.$element.find("option").each(function (a) {
                            var b = d.findLis().eq(d.liObj[a]);
                            d.setDisabled(a, this.disabled || ("OPTGROUP" === this.parentElement.tagName && this.parentElement.disabled), b), d.setSelected(a, this.selected, b);
                        }),
                        this.tabIndex();
                    var e = this.$element
                            .find("option")
                            .map(function () {
                                if (this.selected) {
                                    if (d.options.hideDisabled && (this.disabled || ("OPTGROUP" === this.parentElement.tagName && this.parentElement.disabled))) return !1;
                                    var b,
                                        c = a(this),
                                        e = c.data("icon") && d.options.showIcon ? '<i class="' + d.options.iconBase + " " + c.data("icon") + '"></i> ' : "";
                                    return (
                                        (b = d.options.showSubtext && c.data("subtext") && !d.multiple ? ' <small class="text-muted">' + c.data("subtext") + "</small>" : ""),
                                        "undefined" != typeof c.attr("title") ? c.attr("title") : c.data("content") && d.options.showContent ? c.data("content") : e + c.html() + b
                                    );
                                }
                            })
                            .toArray(),
                        f = this.multiple ? e.join(this.options.multipleSeparator) : e[0];
                    if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                        var g = this.options.selectedTextFormat.split(">");
                        if ((g.length > 1 && e.length > g[1]) || (1 == g.length && e.length >= 2)) {
                            c = this.options.hideDisabled ? ", [disabled]" : "";
                            var h = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + c).length,
                                i = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(e.length, h) : this.options.countSelectedText;
                            f = i.replace("{0}", e.length.toString()).replace("{1}", h.toString());
                        }
                    }
                    void 0 == this.options.title && (this.options.title = this.$element.attr("title")),
                        "static" == this.options.selectedTextFormat && (f = this.options.title),
                        f || (f = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText),
                        this.$button.attr("title", a.trim(f.replace(/<[^>]*>?/g, ""))),
                        this.$button.children(".filter-option").html(f),
                        this.$element.trigger("rendered.bs.select");
                },
                setStyle: function (a, b) {
                    this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
                    var c = a ? a : this.options.style;
                    "add" == b ? this.$button.addClass(c) : "remove" == b ? this.$button.removeClass(c) : (this.$button.removeClass(this.options.style), this.$button.addClass(c));
                },
                liHeight: function (b) {
                    if (b || (this.options.size !== !1 && !this.sizeInfo)) {
                        var c = document.createElement("div"),
                            d = document.createElement("div"),
                            e = document.createElement("ul"),
                            f = document.createElement("li"),
                            g = document.createElement("li"),
                            h = document.createElement("a"),
                            i = document.createElement("span"),
                            j = this.options.header ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                            k = this.options.liveSearch ? document.createElement("div") : null,
                            l = this.options.actionsBox && this.multiple ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                            m = this.options.doneButton && this.multiple ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                        if (
                            ((i.className = "text"),
                            (c.className = this.$menu[0].parentNode.className + " open"),
                            (d.className = "dropdown-menu open"),
                            (e.className = "dropdown-menu inner"),
                            (f.className = "divider"),
                            i.appendChild(document.createTextNode("Inner text")),
                            h.appendChild(i),
                            g.appendChild(h),
                            e.appendChild(g),
                            e.appendChild(f),
                            j && d.appendChild(j),
                            k)
                        ) {
                            var n = document.createElement("span");
                            (k.className = "bs-searchbox"), (n.className = "form-control"), k.appendChild(n), d.appendChild(k);
                        }
                        l && d.appendChild(l), d.appendChild(e), m && d.appendChild(m), c.appendChild(d), document.body.appendChild(c);
                        var o = h.offsetHeight,
                            p = j ? j.offsetHeight : 0,
                            q = k ? k.offsetHeight : 0,
                            r = l ? l.offsetHeight : 0,
                            s = m ? m.offsetHeight : 0,
                            t = a(f).outerHeight(!0),
                            u = getComputedStyle ? getComputedStyle(d) : !1,
                            v = u ? a(d) : null,
                            w =
                                parseInt(u ? u.paddingTop : v.css("paddingTop")) +
                                parseInt(u ? u.paddingBottom : v.css("paddingBottom")) +
                                parseInt(u ? u.borderTopWidth : v.css("borderTopWidth")) +
                                parseInt(u ? u.borderBottomWidth : v.css("borderBottomWidth")),
                            x = w + parseInt(u ? u.marginTop : v.css("marginTop")) + parseInt(u ? u.marginBottom : v.css("marginBottom")) + 2;
                        document.body.removeChild(c), (this.sizeInfo = { liHeight: o, headerHeight: p, searchHeight: q, actionsHeight: r, doneButtonHeight: s, dividerHeight: t, menuPadding: w, menuExtras: x });
                    }
                },
                setSize: function () {
                    this.findLis(), this.liHeight();
                    var b,
                        c,
                        d,
                        e,
                        f = this,
                        g = this.$menu,
                        h = this.$menuInner,
                        i = a(window),
                        j = this.$newElement[0].offsetHeight,
                        k = this.sizeInfo.liHeight,
                        l = this.sizeInfo.headerHeight,
                        m = this.sizeInfo.searchHeight,
                        n = this.sizeInfo.actionsHeight,
                        o = this.sizeInfo.doneButtonHeight,
                        p = this.sizeInfo.dividerHeight,
                        q = this.sizeInfo.menuPadding,
                        r = this.sizeInfo.menuExtras,
                        s = this.options.hideDisabled ? ".disabled" : "",
                        t = function () {
                            (d = f.$newElement.offset().top - i.scrollTop()), (e = i.height() - d - j);
                        };
                    if ((t(), this.options.header && g.css("padding-top", 0), "auto" === this.options.size)) {
                        var u = function () {
                            var i,
                                j = function (b, c) {
                                    return function (d) {
                                        return c ? (d.classList ? d.classList.contains(b) : a(d).hasClass(b)) : !(d.classList ? d.classList.contains(b) : a(d).hasClass(b));
                                    };
                                },
                                p = f.$menuInner[0].getElementsByTagName("li"),
                                s = Array.prototype.filter ? Array.prototype.filter.call(p, j("hidden", !1)) : f.$lis.not(".hidden"),
                                u = Array.prototype.filter ? Array.prototype.filter.call(s, j("dropdown-header", !0)) : s.filter(".dropdown-header");
                            t(),
                                (b = e - r),
                                f.options.container ? (g.data("height") || g.data("height", g.height()), (c = g.data("height"))) : (c = g.height()),
                                f.options.dropupAuto && f.$newElement.toggleClass("dropup", d > e && c > b - r),
                                f.$newElement.hasClass("dropup") && (b = d - r),
                                (i = s.length + u.length > 3 ? 3 * k + r - 2 : 0),
                                g.css({ "max-height": b + "px", overflow: "hidden", "min-height": i + l + m + n + o + "px" }),
                                h.css({ "max-height": b - l - m - n - o - q + "px", "overflow-y": "auto", "min-height": Math.max(i - q, 0) + "px" });
                        };
                        u(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", u), i.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", u);
                    } else if (this.options.size && "auto" != this.options.size && this.$lis.not(s).length > this.options.size) {
                        var v = this.$lis.not(".divider").not(s).children().slice(0, this.options.size).last().parent().index(),
                            w = this.$lis.slice(0, v + 1).filter(".divider").length;
                        (b = k * this.options.size + w * p + q),
                            f.options.container ? (g.data("height") || g.data("height", g.height()), (c = g.data("height"))) : (c = g.height()),
                            f.options.dropupAuto && this.$newElement.toggleClass("dropup", d > e && c > b - r),
                            g.css({ "max-height": b + l + m + n + o + "px", overflow: "hidden", "min-height": "" }),
                            h.css({ "max-height": b - q + "px", "overflow-y": "auto", "min-height": "" });
                    }
                },
                setWidth: function () {
                    if ("auto" === this.options.width) {
                        this.$menu.css("min-width", "0");
                        var a = this.$menu.parent().clone().appendTo("body"),
                            b = this.options.container ? this.$newElement.clone().appendTo("body") : a,
                            c = a.children(".dropdown-menu").outerWidth(),
                            d = b.css("width", "auto").children("button").outerWidth();
                        a.remove(), b.remove(), this.$newElement.css("width", Math.max(c, d) + "px");
                    } else
                        "fit" === this.options.width
                            ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width"))
                            : this.options.width
                            ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width))
                            : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
                    this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width");
                },
                selectPosition: function () {
                    var b,
                        c,
                        d = this,
                        e = "<div />",
                        f = a(e),
                        g = function (a) {
                            f.addClass(a.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", a.hasClass("dropup")),
                                (b = a.offset()),
                                (c = a.hasClass("dropup") ? 0 : a[0].offsetHeight),
                                f.css({ top: b.top + c, left: b.left, width: a[0].offsetWidth, position: "absolute" });
                        };
                    this.$newElement.on("click", function () {
                        d.isDisabled() || (g(a(this)), f.appendTo(d.options.container), f.toggleClass("open", !a(this).hasClass("open")), f.append(d.$menu));
                    }),
                        a(window).on("resize scroll", function () {
                            g(d.$newElement);
                        }),
                        this.$element.on("hide.bs.select", function () {
                            d.$menu.data("height", d.$menu.height()), f.detach();
                        });
                },
                setSelected: function (a, b, c) {
                    if (!c) var c = this.findLis().eq(this.liObj[a]);
                    c.toggleClass("selected", b);
                },
                setDisabled: function (a, b, c) {
                    if (!c) var c = this.findLis().eq(this.liObj[a]);
                    b ? c.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0);
                },
                isDisabled: function () {
                    return this.$element[0].disabled;
                },
                checkDisabled: function () {
                    var a = this;
                    this.isDisabled()
                        ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1))
                        : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled")),
                          -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")),
                        this.$button.click(function () {
                            return !a.isDisabled();
                        });
                },
                tabIndex: function () {
                    this.$element.is("[tabindex]") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex")));
                },
                clickListener: function () {
                    var b = this,
                        c = a(document);
                    this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function (a) {
                        a.stopPropagation();
                    }),
                        c.data("spaceSelect", !1),
                        this.$button.on("keyup", function (a) {
                            /(32)/.test(a.keyCode.toString(10)) && c.data("spaceSelect") && (a.preventDefault(), c.data("spaceSelect", !1));
                        }),
                        this.$newElement.on("click", function () {
                            b.setSize(),
                                b.$element.on("shown.bs.select", function () {
                                    if (b.options.liveSearch || b.multiple) {
                                        if (!b.multiple) {
                                            var a = b.liObj[b.$element[0].selectedIndex];
                                            if ("number" != typeof a) return;
                                            var c = b.$lis.eq(a)[0].offsetTop - b.$menuInner[0].offsetTop;
                                            (c = c - b.$menuInner[0].offsetHeight / 2 + b.sizeInfo.liHeight / 2), (b.$menuInner[0].scrollTop = c);
                                        }
                                    } else b.$menu.find(".selected a").focus();
                                });
                        }),
                        this.$menu.on("click", "li a", function (c) {
                            var d = a(this),
                                e = d.parent().data("originalIndex"),
                                f = b.$element.val(),
                                g = b.$element.prop("selectedIndex");
                            if ((b.multiple && c.stopPropagation(), c.preventDefault(), !b.isDisabled() && !d.parent().hasClass("disabled"))) {
                                var h = b.$element.find("option"),
                                    i = h.eq(e),
                                    j = i.prop("selected"),
                                    k = i.parent("optgroup"),
                                    l = b.options.maxOptions,
                                    m = k.data("maxOptions") || !1;
                                if (b.multiple) {
                                    if ((i.prop("selected", !j), b.setSelected(e, !j), d.blur(), l !== !1 || m !== !1)) {
                                        var n = l < h.filter(":selected").length,
                                            o = m < k.find("option:selected").length;
                                        if ((l && n) || (m && o))
                                            if (l && 1 == l) h.prop("selected", !1), i.prop("selected", !0), b.$menu.find(".selected").removeClass("selected"), b.setSelected(e, !0);
                                            else if (m && 1 == m) {
                                                k.find("option:selected").prop("selected", !1), i.prop("selected", !0);
                                                var p = d.parent().data("optgroup");
                                                b.$menu.find('[data-optgroup="' + p + '"]').removeClass("selected"), b.setSelected(e, !0);
                                            } else {
                                                var q = "function" == typeof b.options.maxOptionsText ? b.options.maxOptionsText(l, m) : b.options.maxOptionsText,
                                                    r = q[0].replace("{n}", l),
                                                    s = q[1].replace("{n}", m),
                                                    t = a('<div class="notify"></div>');
                                                q[2] && ((r = r.replace("{var}", q[2][l > 1 ? 0 : 1])), (s = s.replace("{var}", q[2][m > 1 ? 0 : 1]))),
                                                    i.prop("selected", !1),
                                                    b.$menu.append(t),
                                                    l && n && (t.append(a("<div>" + r + "</div>")), b.$element.trigger("maxReached.bs.select")),
                                                    m && o && (t.append(a("<div>" + s + "</div>")), b.$element.trigger("maxReachedGrp.bs.select")),
                                                    setTimeout(function () {
                                                        b.setSelected(e, !1);
                                                    }, 10),
                                                    t.delay(750).fadeOut(300, function () {
                                                        a(this).remove();
                                                    });
                                            }
                                    }
                                } else h.prop("selected", !1), i.prop("selected", !0), b.$menu.find(".selected").removeClass("selected"), b.setSelected(e, !0);
                                b.multiple ? b.options.liveSearch && b.$searchbox.focus() : b.$button.focus(),
                                    ((f != b.$element.val() && b.multiple) || (g != b.$element.prop("selectedIndex") && !b.multiple)) && (b.$element.change(), b.$element.trigger("changed.bs.select", [e, i.prop("selected"), j]));
                            }
                        }),
                        this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function (c) {
                            c.currentTarget == this && (c.preventDefault(), c.stopPropagation(), b.options.liveSearch && !a(c.target).hasClass("close") ? b.$searchbox.focus() : b.$button.focus());
                        }),
                        this.$menu.on("click", "li.divider, li.dropdown-header", function (a) {
                            a.preventDefault(), a.stopPropagation(), b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus();
                        }),
                        this.$menu.on("click", ".popover-title .close", function () {
                            b.$button.click();
                        }),
                        this.$searchbox.on("click", function (a) {
                            a.stopPropagation();
                        }),
                        this.$menu.on("click", ".actions-btn", function (c) {
                            b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus(), c.preventDefault(), c.stopPropagation(), a(this).hasClass("bs-select-all") ? b.selectAll() : b.deselectAll(), b.$element.change();
                        }),
                        this.$element.change(function () {
                            b.render(!1);
                        });
                },
                liveSearchListener: function () {
                    var d = this,
                        e = a('<li class="no-results"></li>');
                    this.$newElement.on("click.dropdown.data-api touchstart.dropdown.data-api", function () {
                        d.$menuInner.find(".active").removeClass("active"),
                            d.$searchbox.val() && (d.$searchbox.val(""), d.$lis.not(".is-hidden").removeClass("hidden"), e.parent().length && e.remove()),
                            d.multiple || d.$menuInner.find(".selected").addClass("active"),
                            setTimeout(function () {
                                d.$searchbox.focus();
                            }, 10);
                    }),
                        this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function (a) {
                            a.stopPropagation();
                        }),
                        this.$searchbox.on("input propertychange", function () {
                            if (d.$searchbox.val()) {
                                var f = d.$lis.not(".is-hidden").removeClass("hidden").children("a");
                                (f = d.options.liveSearchNormalize ? f.not(":a" + d._searchStyle() + "(" + b(d.$searchbox.val()) + ")") : f.not(":" + d._searchStyle() + "(" + d.$searchbox.val() + ")")),
                                    f.parent().addClass("hidden"),
                                    d.$lis.filter(".dropdown-header").each(function () {
                                        var b = a(this),
                                            c = b.data("optgroup");
                                        0 ===
                                            d.$lis
                                                .filter("[data-optgroup=" + c + "]")
                                                .not(b)
                                                .not(".hidden").length && (b.addClass("hidden"), d.$lis.filter("[data-optgroup=" + c + "div]").addClass("hidden"));
                                    });
                                var g = d.$lis.not(".hidden");
                                g.each(function (b) {
                                    var c = a(this);
                                    c.hasClass("divider") && (c.index() === g.eq(0).index() || c.index() === g.last().index() || g.eq(b + 1).hasClass("divider")) && c.addClass("hidden");
                                }),
                                    d.$lis.not(".hidden, .no-results").length
                                        ? e.parent().length && e.remove()
                                        : (e.parent().length && e.remove(), e.html(d.options.noneResultsText.replace("{0}", '"' + c(d.$searchbox.val()) + '"')).show(), d.$menuInner.append(e));
                            } else d.$lis.not(".is-hidden").removeClass("hidden"), e.parent().length && e.remove();
                            d.$lis.filter(".active").removeClass("active"), d.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), a(this).focus();
                        });
                },
                _searchStyle: function () {
                    var a = "icontains";
                    switch (this.options.liveSearchStyle) {
                        case "begins":
                        case "startsWith":
                            a = "ibegins";
                            break;
                        case "contains":
                    }
                    return a;
                },
                val: function (a) {
                    return "undefined" != typeof a ? (this.$element.val(a), this.render(), this.$element) : this.$element.val();
                },
                selectAll: function () {
                    this.findLis(), this.$element.find("option:enabled").not("[data-divider], [data-hidden]").prop("selected", !0), this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").addClass("selected"), this.render(!1);
                },
                deselectAll: function () {
                    this.findLis(), this.$element.find("option:enabled").not("[data-divider], [data-hidden]").prop("selected", !1), this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").removeClass("selected"), this.render(!1);
                },
                keydown: function (c) {
                    var d,
                        e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k,
                        l,
                        m = a(this),
                        n = m.is("input") ? m.parent().parent() : m.parent(),
                        o = n.data("this"),
                        p = ":not(.disabled, .hidden, .dropdown-header, .divider)",
                        q = {
                            32: " ",
                            48: "0",
                            49: "1",
                            50: "2",
                            51: "3",
                            52: "4",
                            53: "5",
                            54: "6",
                            55: "7",
                            56: "8",
                            57: "9",
                            59: ";",
                            65: "a",
                            66: "b",
                            67: "c",
                            68: "d",
                            69: "e",
                            70: "f",
                            71: "g",
                            72: "h",
                            73: "i",
                            74: "j",
                            75: "k",
                            76: "l",
                            77: "m",
                            78: "n",
                            79: "o",
                            80: "p",
                            81: "q",
                            82: "r",
                            83: "s",
                            84: "t",
                            85: "u",
                            86: "v",
                            87: "w",
                            88: "x",
                            89: "y",
                            90: "z",
                            96: "0",
                            97: "1",
                            98: "2",
                            99: "3",
                            100: "4",
                            101: "5",
                            102: "6",
                            103: "7",
                            104: "8",
                            105: "9",
                        };
                    if (
                        (o.options.liveSearch && (n = m.parent().parent()),
                        o.options.container && (n = o.$menu),
                        (d = a("[role=menu] li a", n)),
                        (l = o.$menu.parent().hasClass("open")),
                        !l &&
                            ((c.keyCode >= 48 && c.keyCode <= 57) || (event.keyCode >= 65 && event.keyCode <= 90)) &&
                            (o.options.container ? o.$newElement.trigger("click") : (o.setSize(), o.$menu.parent().addClass("open"), (l = !0)), o.$searchbox.focus()),
                        o.options.liveSearch &&
                            (/(^9$|27)/.test(c.keyCode.toString(10)) &&
                                l &&
                                0 === o.$menu.find(".active").length &&
                                (c.preventDefault(), o.$menu.parent().removeClass("open"), o.options.container && o.$newElement.removeClass("open"), o.$button.focus()),
                            (d = a("[role=menu] li:not(.disabled, .hidden, .dropdown-header, .divider)", n)),
                            m.val() ||
                                /(38|40)/.test(c.keyCode.toString(10)) ||
                                (0 === d.filter(".active").length &&
                                    ((d = o.$newElement.find("li")), (d = o.options.liveSearchNormalize ? d.filter(":a" + o._searchStyle() + "(" + b(q[c.keyCode]) + ")") : d.filter(":" + o._searchStyle() + "(" + q[c.keyCode] + ")"))))),
                        d.length)
                    ) {
                        if (/(38|40)/.test(c.keyCode.toString(10)))
                            (e = d.index(d.filter(":focus"))),
                                (g = d.parent(p).first().data("originalIndex")),
                                (h = d.parent(p).last().data("originalIndex")),
                                (f = d.eq(e).parent().nextAll(p).eq(0).data("originalIndex")),
                                (i = d.eq(e).parent().prevAll(p).eq(0).data("originalIndex")),
                                (j = d.eq(f).parent().prevAll(p).eq(0).data("originalIndex")),
                                o.options.liveSearch &&
                                    (d.each(function (b) {
                                        a(this).hasClass("disabled") || a(this).data("index", b);
                                    }),
                                    (e = d.index(d.filter(".active"))),
                                    (g = d.first().data("index")),
                                    (h = d.last().data("index")),
                                    (f = d.eq(e).nextAll().eq(0).data("index")),
                                    (i = d.eq(e).prevAll().eq(0).data("index")),
                                    (j = d.eq(f).prevAll().eq(0).data("index"))),
                                (k = m.data("prevIndex")),
                                38 == c.keyCode
                                    ? (o.options.liveSearch && (e -= 1), e != j && e > i && (e = i), g > e && (e = g), e == k && (e = h))
                                    : 40 == c.keyCode && (o.options.liveSearch && (e += 1), -1 == e && (e = 0), e != j && f > e && (e = f), e > h && (e = h), e == k && (e = g)),
                                m.data("prevIndex", e),
                                o.options.liveSearch ? (c.preventDefault(), m.hasClass("dropdown-toggle") || (d.removeClass("active").eq(e).addClass("active").children("a").focus(), m.focus())) : d.eq(e).focus();
                        else if (!m.is("input")) {
                            var r,
                                s,
                                t = [];
                            d.each(function () {
                                a(this).parent().hasClass("disabled") || (a.trim(a(this).text().toLowerCase()).substring(0, 1) == q[c.keyCode] && t.push(a(this).parent().index()));
                            }),
                                (r = a(document).data("keycount")),
                                r++,
                                a(document).data("keycount", r),
                                (s = a.trim(a(":focus").text().toLowerCase()).substring(0, 1)),
                                s != q[c.keyCode] ? ((r = 1), a(document).data("keycount", r)) : r >= t.length && (a(document).data("keycount", 0), r > t.length && (r = 1)),
                                d.eq(t[r - 1]).focus();
                        }
                        if ((/(13|32)/.test(c.keyCode.toString(10)) || (/(^9$)/.test(c.keyCode.toString(10)) && o.options.selectOnTab)) && l) {
                            if ((/(32)/.test(c.keyCode.toString(10)) || c.preventDefault(), o.options.liveSearch)) /(32)/.test(c.keyCode.toString(10)) || (o.$menu.find(".active a").click(), m.focus());
                            else {
                                var u = a(":focus");
                                u.click(), u.focus(), c.preventDefault(), a(document).data("spaceSelect", !0);
                            }
                            a(document).data("keycount", 0);
                        }
                        ((/(^9$|27)/.test(c.keyCode.toString(10)) && l && (o.multiple || o.options.liveSearch)) || (/(27)/.test(c.keyCode.toString(10)) && !l)) &&
                            (o.$menu.parent().removeClass("open"), o.options.container && o.$newElement.removeClass("open"), o.$button.focus());
                    }
                },
                mobile: function () {
                    this.$element.addClass("mobile-device").appendTo(this.$newElement), this.options.container && this.$menu.hide();
                },
                refresh: function () {
                    (this.$lis = null),
                        this.reloadLi(),
                        this.render(),
                        this.checkDisabled(),
                        this.liHeight(!0),
                        this.setStyle(),
                        this.setWidth(),
                        this.$lis && this.$searchbox.trigger("propertychange"),
                        this.$element.trigger("refreshed.bs.select");
                },
                hide: function () {
                    this.$newElement.hide();
                },
                show: function () {
                    this.$newElement.show();
                },
                remove: function () {
                    this.$newElement.remove(), this.$element.remove();
                },
            });
        var f = a.fn.selectpicker;
        (a.fn.selectpicker = d),
            (a.fn.selectpicker.Constructor = e),
            (a.fn.selectpicker.noConflict = function () {
                return (a.fn.selectpicker = f), this;
            }),
            a(document)
                .data("keycount", 0)
                .on("keydown", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', e.prototype.keydown)
                .on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', function (a) {
                    a.stopPropagation();
                }),
            a(window).on("load.bs.select.data-api", function () {
                a(".selectpicker").each(function () {
                    var b = a(this);
                    d.call(b, b.data());
                });
            });
    })(jQuery);
});
//# sourceMappingURL=bootstrap-select.js.map

/* ========================
	jquery.bootstrap-touchspin.js
========================= */
!(function (t) {
    "use strict";
    function o(t, o) {
        return t + ".touchspin_" + o;
    }
    function n(n, s) {
        return t.map(n, function (t) {
            return o(t, s);
        });
    }
    var s = 0;
    t.fn.TouchSpin = function (o) {
        if ("destroy" === o)
            return void this.each(function () {
                var o = t(this),
                    s = o.data();
                t(document).off(n(["mouseup", "touchend", "touchcancel", "mousemove", "touchmove", "scroll", "scrollstart"], s.spinnerid).join(" "));
            });
        var e = {
                min: 0,
                max: 100,
                initval: "",
                replacementval: "",
                step: 1,
                decimals: 0,
                stepinterval: 100,
                forcestepdivisibility: "round",
                stepintervaldelay: 500,
                verticalbuttons: !1,
                verticalupclass: "fa fa-angle-up",
                verticaldownclass: "fa fa-angle-down",
                prefix: "",
                postfix: "",
                prefix_extraclass: "",
                postfix_extraclass: "",
                booster: !0,
                boostat: 10,
                maxboostedstep: !1,
                mousewheel: !0,
                buttondown_class: "btn btn-default",
                buttonup_class: "btn btn-default",
                buttondown_txt: "-",
                buttonup_txt: "+",
            },
            i = {
                min: "min",
                max: "max",
                initval: "init-val",
                replacementval: "replacement-val",
                step: "step",
                decimals: "decimals",
                stepinterval: "step-interval",
                verticalbuttons: "vertical-buttons",
                verticalupclass: "vertical-up-class",
                verticaldownclass: "vertical-down-class",
                forcestepdivisibility: "force-step-divisibility",
                stepintervaldelay: "step-interval-delay",
                prefix: "prefix",
                postfix: "postfix",
                prefix_extraclass: "prefix-extra-class",
                postfix_extraclass: "postfix-extra-class",
                booster: "booster",
                boostat: "boostat",
                maxboostedstep: "max-boosted-step",
                mousewheel: "mouse-wheel",
                buttondown_class: "button-down-class",
                buttonup_class: "button-up-class",
                buttondown_txt: "button-down-txt",
                buttonup_txt: "button-up-txt",
            };
        return this.each(function () {
            function a() {
                if (!E.data("alreadyinitialized")) {
                    if ((E.data("alreadyinitialized", !0), (s += 1), E.data("spinnerid", s), !E.is("input"))) return void console.log("Must be an input.");
                    r(), u(), w(), d(), h(), v(), m(), x(), P.input.css("display", "block");
                }
            }
            function u() {
                "" !== M.initval && "" === E.val() && E.val(M.initval);
            }
            function p(t) {
                l(t), w();
                var o = P.input.val();
                "" !== o && ((o = Number(P.input.val())), P.input.val(o.toFixed(M.decimals)));
            }
            function r() {
                M = t.extend({}, e, z, c(), o);
            }
            function c() {
                var o = {};
                return (
                    t.each(i, function (t, n) {
                        var s = "bts-" + n;
                        E.is("[data-" + s + "]") && (o[t] = E.data(s));
                    }),
                    o
                );
            }
            function l(o) {
                M = t.extend({}, M, o);
            }
            function d() {
                var t = E.val(),
                    o = E.parent();
                "" !== t && (t = Number(t).toFixed(M.decimals)), E.data("initvalue", t).val(t), E.addClass("form-control"), o.hasClass("input-group") ? f(o) : b();
            }
            function f(o) {
                o.addClass("bootstrap-touchspin");
                var n,
                    s,
                    e = E.prev(),
                    i = E.next(),
                    a = '<span class="input-group-addon bootstrap-touchspin-prefix">' + M.prefix + "</span>",
                    u = '<span class="input-group-addon bootstrap-touchspin-postfix">' + M.postfix + "</span>";
                e.hasClass("input-group-btn")
                    ? ((n = '<button class="' + M.buttondown_class + ' bootstrap-touchspin-down" type="button">' + M.buttondown_txt + "</button>"), e.append(n))
                    : ((n = '<span class="input-group-btn"><button class="' + M.buttondown_class + ' bootstrap-touchspin-down" type="button">' + M.buttondown_txt + "</button></span>"), t(n).insertBefore(E)),
                    i.hasClass("input-group-btn")
                        ? ((s = '<button class="' + M.buttonup_class + ' bootstrap-touchspin-up" type="button">' + M.buttonup_txt + "</button>"), i.prepend(s))
                        : ((s = '<span class="input-group-btn"><button class="' + M.buttonup_class + ' bootstrap-touchspin-up" type="button">' + M.buttonup_txt + "</button></span>"), t(s).insertAfter(E)),
                    t(a).insertBefore(E),
                    t(u).insertAfter(E),
                    (N = o);
            }
            function b() {
                var o;
                (o = M.verticalbuttons
                    ? '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' +
                      M.prefix +
                      '</span><span class="input-group-addon bootstrap-touchspin-postfix">' +
                      M.postfix +
                      '</span><span class="input-group-btn-vertical"><button class="' +
                      M.buttondown_class +
                      ' bootstrap-touchspin-up" type="button"><i class="' +
                      M.verticalupclass +
                      '"></i></button><button class="' +
                      M.buttonup_class +
                      ' bootstrap-touchspin-down" type="button"><i class="' +
                      M.verticaldownclass +
                      '"></i></button></span></div>'
                    : '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' +
                      M.buttondown_class +
                      ' bootstrap-touchspin-down" type="button">' +
                      M.buttondown_txt +
                      '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' +
                      M.prefix +
                      '</span><span class="input-group-addon bootstrap-touchspin-postfix">' +
                      M.postfix +
                      '</span><span class="input-group-btn"><button class="' +
                      M.buttonup_class +
                      ' bootstrap-touchspin-up" type="button">' +
                      M.buttonup_txt +
                      "</button></span></div>"),
                    (N = t(o).insertBefore(E)),
                    t(".bootstrap-touchspin-prefix", N).after(E),
                    E.hasClass("input-sm") ? N.addClass("input-group-sm") : E.hasClass("input-lg") && N.addClass("input-group-lg");
            }
            function h() {
                P = {
                    down: t(".bootstrap-touchspin-down", N),
                    up: t(".bootstrap-touchspin-up", N),
                    input: t("input", N),
                    prefix: t(".bootstrap-touchspin-prefix", N).addClass(M.prefix_extraclass),
                    postfix: t(".bootstrap-touchspin-postfix", N).addClass(M.postfix_extraclass),
                };
            }
            function v() {
                "" === M.prefix && P.prefix.hide(), "" === M.postfix && P.postfix.hide();
            }
            function m() {
                E.on("keydown", function (t) {
                    var o = t.keyCode || t.which;
                    38 === o ? ("up" !== O && (_(), k()), t.preventDefault()) : 40 === o && ("down" !== O && (C(), D()), t.preventDefault());
                }),
                    E.on("keyup", function (t) {
                        var o = t.keyCode || t.which;
                        38 === o ? F() : 40 === o && F();
                    }),
                    E.on("blur", function () {
                        w();
                    }),
                    P.down.on("keydown", function (t) {
                        var o = t.keyCode || t.which;
                        (32 === o || 13 === o) && ("down" !== O && (C(), D()), t.preventDefault());
                    }),
                    P.down.on("keyup", function (t) {
                        var o = t.keyCode || t.which;
                        (32 === o || 13 === o) && F();
                    }),
                    P.up.on("keydown", function (t) {
                        var o = t.keyCode || t.which;
                        (32 === o || 13 === o) && ("up" !== O && (_(), k()), t.preventDefault());
                    }),
                    P.up.on("keyup", function (t) {
                        var o = t.keyCode || t.which;
                        (32 === o || 13 === o) && F();
                    }),
                    P.down.on("mousedown.touchspin", function (t) {
                        P.down.off("touchstart.touchspin"), E.is(":disabled") || (C(), D(), t.preventDefault(), t.stopPropagation());
                    }),
                    P.down.on("touchstart.touchspin", function (t) {
                        P.down.off("mousedown.touchspin"), E.is(":disabled") || (C(), D(), t.preventDefault(), t.stopPropagation());
                    }),
                    P.up.on("mousedown.touchspin", function (t) {
                        P.up.off("touchstart.touchspin"), E.is(":disabled") || (_(), k(), t.preventDefault(), t.stopPropagation());
                    }),
                    P.up.on("touchstart.touchspin", function (t) {
                        P.up.off("mousedown.touchspin"), E.is(":disabled") || (_(), k(), t.preventDefault(), t.stopPropagation());
                    }),
                    P.up.on("mouseout touchleave touchend touchcancel", function (t) {
                        O && (t.stopPropagation(), F());
                    }),
                    P.down.on("mouseout touchleave touchend touchcancel", function (t) {
                        O && (t.stopPropagation(), F());
                    }),
                    P.down.on("mousemove touchmove", function (t) {
                        O && (t.stopPropagation(), t.preventDefault());
                    }),
                    P.up.on("mousemove touchmove", function (t) {
                        O && (t.stopPropagation(), t.preventDefault());
                    }),
                    t(document).on(n(["mouseup", "touchend", "touchcancel"], s).join(" "), function (t) {
                        O && (t.preventDefault(), F());
                    }),
                    t(document).on(n(["mousemove", "touchmove", "scroll", "scrollstart"], s).join(" "), function (t) {
                        O && (t.preventDefault(), F());
                    }),
                    E.on("mousewheel DOMMouseScroll", function (t) {
                        if (M.mousewheel && E.is(":focus")) {
                            var o = t.originalEvent.wheelDelta || -t.originalEvent.deltaY || -t.originalEvent.detail;
                            t.stopPropagation(), t.preventDefault(), 0 > o ? C() : _();
                        }
                    });
            }
            function x() {
                E.on("touchspin.uponce", function () {
                    F(), _();
                }),
                    E.on("touchspin.downonce", function () {
                        F(), C();
                    }),
                    E.on("touchspin.startupspin", function () {
                        k();
                    }),
                    E.on("touchspin.startdownspin", function () {
                        D();
                    }),
                    E.on("touchspin.stopspin", function () {
                        F();
                    }),
                    E.on("touchspin.updatesettings", function (t, o) {
                        p(o);
                    });
            }
            function g(t) {
                switch (M.forcestepdivisibility) {
                    case "round":
                        return (Math.round(t / M.step) * M.step).toFixed(M.decimals);
                    case "floor":
                        return (Math.floor(t / M.step) * M.step).toFixed(M.decimals);
                    case "ceil":
                        return (Math.ceil(t / M.step) * M.step).toFixed(M.decimals);
                    default:
                        return t;
                }
            }
            function w() {
                var t, o, n;
                return (
                    (t = E.val()),
                    "" === t
                        ? void ("" !== M.replacementval && (E.val(M.replacementval), E.trigger("change")))
                        : void (
                              (M.decimals > 0 && "." === t) ||
                              ((o = parseFloat(t)),
                              isNaN(o) && (o = "" !== M.replacementval ? M.replacementval : 0),
                              (n = o),
                              o.toString() !== t && (n = o),
                              o < M.min && (n = M.min),
                              o > M.max && (n = M.max),
                              (n = g(n)),
                              Number(t).toString() !== n.toString() && (E.val(n), E.trigger("change")))
                          )
                );
            }
            function y() {
                if (M.booster) {
                    var t = Math.pow(2, Math.floor(A / M.boostat)) * M.step;
                    return M.maxboostedstep && t > M.maxboostedstep && ((t = M.maxboostedstep), (S = Math.round(S / t) * t)), Math.max(M.step, t);
                }
                return M.step;
            }
            function _() {
                w(), (S = parseFloat(P.input.val())), isNaN(S) && (S = 0);
                var t = S,
                    o = y();
                (S += o), S > M.max && ((S = M.max), E.trigger("touchspin.on.max"), F()), P.input.val(Number(S).toFixed(M.decimals)), t !== S && E.trigger("change");
            }
            function C() {
                w(), (S = parseFloat(P.input.val())), isNaN(S) && (S = 0);
                var t = S,
                    o = y();
                (S -= o), S < M.min && ((S = M.min), E.trigger("touchspin.on.min"), F()), P.input.val(S.toFixed(M.decimals)), t !== S && E.trigger("change");
            }
            function D() {
                F(),
                    (A = 0),
                    (O = "down"),
                    E.trigger("touchspin.on.startspin"),
                    E.trigger("touchspin.on.startdownspin"),
                    (I = setTimeout(function () {
                        T = setInterval(function () {
                            A++, C();
                        }, M.stepinterval);
                    }, M.stepintervaldelay));
            }
            function k() {
                F(),
                    (A = 0),
                    (O = "up"),
                    E.trigger("touchspin.on.startspin"),
                    E.trigger("touchspin.on.startupspin"),
                    (B = setTimeout(function () {
                        j = setInterval(function () {
                            A++, _();
                        }, M.stepinterval);
                    }, M.stepintervaldelay));
            }
            function F() {
                switch ((clearTimeout(I), clearTimeout(B), clearInterval(T), clearInterval(j), O)) {
                    case "up":
                        E.trigger("touchspin.on.stopupspin"), E.trigger("touchspin.on.stopspin");
                        break;
                    case "down":
                        E.trigger("touchspin.on.stopdownspin"), E.trigger("touchspin.on.stopspin");
                }
                (A = 0), (O = !1);
            }
            var M,
                N,
                P,
                S,
                T,
                j,
                I,
                B,
                E = t(this),
                z = E.data(),
                A = 0,
                O = !1;
            a();
        });
    };
})(jQuery);

/* ========================
	magnific-popup.js
========================= */
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
})(function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function () {},
        u = !!window.jQuery,
        v = a(window),
        w = function (a, c) {
            b.ev.on(o + a + p, c);
        },
        x = function (b, c, d, e) {
            var f = document.createElement("div");
            return (f.className = "mfp-" + b), d && (f.innerHTML = d), e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)), f;
        },
        y = function (c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && ((c = c.charAt(0).toLowerCase() + c.slice(1)), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
        },
        z = function (c) {
            return (c === g && b.currTemplate.closeBtn) || ((b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose))), (g = c)), b.currTemplate.closeBtn;
        },
        A = function () {
            a.magnificPopup.instance || ((b = new t()), b.init(), (a.magnificPopup.instance = b));
        },
        B = function () {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Winkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
            return !1;
        };
    (t.prototype = {
        constructor: t,
        init: function () {
            var c = navigator.appVersion;
            (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
                (b.isAndroid = /android/gi.test(c)),
                (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
                (b.supportsTransition = B()),
                (b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),
                (d = a(document)),
                (b.popupsCache = {});
        },
        open: function (c) {
            var e;
            if (c.isObj === !1) {
                (b.items = c.items.toArray()), (b.index = 0);
                var g,
                    h = c.items;
                for (e = 0; e < h.length; e++)
                    if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
                        b.index = e;
                        break;
                    }
            } else (b.items = a.isArray(c.items) ? c.items : [c.items]), (b.index = c.index || 0);
            if (b.isOpen) return void b.updateItemHTML();
            (b.types = []),
                (f = ""),
                c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
                c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), (b.currTemplate = b.popupsCache[c.key])) : (b.currTemplate = {}),
                (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
                (b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos),
                b.st.modal && ((b.st.closeOnContentClick = !1), (b.st.closeOnBgClick = !1), (b.st.showCloseBtn = !1), (b.st.enableEscapeKey = !1)),
                b.bgOverlay ||
                    ((b.bgOverlay = x("bg").on("click" + p, function () {
                        b.close();
                    })),
                    (b.wrap = x("wrap")
                        .attr("tabindex", -1)
                        .on("click" + p, function (a) {
                            b._checkIfClose(a.target) && b.close();
                        })),
                    (b.container = x("container", b.wrap))),
                (b.contentContainer = x("content")),
                b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
            }
            y("BeforeOpen"),
                b.st.showCloseBtn &&
                    (b.st.closeBtnInside
                        ? (w(l, function (a, b, c, d) {
                              c.close_replaceWith = z(d.type);
                          }),
                          (f += " mfp-close-btn-in"))
                        : b.wrap.append(z())),
                b.st.alignTop && (f += " mfp-align-top"),
                b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
                (b.st.fixedBgPos === !1 || ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) && b.bgOverlay.css({ height: d.height(), position: "absolute" }),
                b.st.enableEscapeKey &&
                    d.on("keyup" + p, function (a) {
                        27 === a.keyCode && b.close();
                    }),
                v.on("resize" + p, function () {
                    b.updateSize();
                }),
                b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
                f && b.wrap.addClass(f);
            var k = (b.wH = v.height()),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o);
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : (n.overflow = "hidden"));
            var r = b.st.mainClass;
            return (
                b.isIE7 && (r += " mfp-ie7"),
                r && b._addClassToMFP(r),
                b.updateItemHTML(),
                y("BuildControls"),
                a("html").css(n),
                b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
                (b._lastFocusedEl = document.activeElement),
                setTimeout(function () {
                    b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
                }, 16),
                (b.isOpen = !0),
                b.updateSize(k),
                y(m),
                c
            );
        },
        close: function () {
            b.isOpen &&
                (y(i),
                (b.isOpen = !1),
                b.st.removalDelay && !b.isLowIE && b.supportsTransition
                    ? (b._addClassToMFP(r),
                      setTimeout(function () {
                          b._close();
                      }, b.st.removalDelay))
                    : b._close());
        },
        _close: function () {
            y(h);
            var c = r + " " + q + " ";
            if ((b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos)) {
                var e = { marginRight: "" };
                b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""), a("html").css(e);
            }
            d.off("keyup" + p + " focusin" + p),
                b.ev.off(p),
                b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                b.bgOverlay.attr("class", "mfp-bg"),
                b.container.attr("class", "mfp-container"),
                !b.st.showCloseBtn || (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) || (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
                b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
                (b.currItem = null),
                (b.content = null),
                (b.currTemplate = null),
                (b.prevHeight = 0),
                y(j);
        },
        updateSize: function (a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), (b.wH = d);
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
        },
        updateItemHTML: function () {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if ((y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), (b.currItem = c), !b.currTemplate[d])) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), (c.preloaded = !0), y(n, c), (e = c.type), b.container.prepend(b.contentContainer), y("AfterChange");
        },
        appendContent: function (a, c) {
            (b.content = a),
                a ? (b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : (b.content = a)) : (b.content = ""),
                y(k),
                b.container.addClass("mfp-" + c + "-holder"),
                b.contentContainer.append(b.content);
        },
        parseEl: function (c) {
            var d,
                e = b.items[c];
            if ((e.tagName ? (e = { el: a(e) }) : ((d = e.type), (e = { data: e, src: e.src })), e.el)) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break;
                    }
                (e.src = e.el.attr("data-mfp-src")), e.src || (e.src = e.el.attr("href"));
            }
            return (e.type = d || b.st.type || "inline"), (e.index = c), (e.parsed = !0), (b.items[c] = e), y("ElementParse", e), b.items[c];
        },
        addGroup: function (a, c) {
            var d = function (d) {
                (d.mfpEl = this), b._openClick(d, a, c);
            };
            c || (c = {});
            var e = "click.magnificPopup";
            (c.mainEl = a), c.items ? ((c.isObj = !0), a.off(e).on(e, d)) : ((c.isObj = !1), c.delegate ? a.off(e).on(e, c.delegate, d) : ((c.items = a), a.off(e).on(e, d)));
        },
        _openClick: function (c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0;
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), (e.el = a(c.mfpEl)), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
            }
        },
        updateStatus: function (a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = { status: a, text: d };
                y("UpdateStatus", e),
                    (a = e.status),
                    (d = e.text),
                    b.preloader.html(d),
                    b.preloader.find("a").on("click", function (a) {
                        a.stopImmediatePropagation();
                    }),
                    b.container.addClass("mfp-s-" + a),
                    (c = a);
            }
        },
        _checkIfClose: function (c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || (b.preloader && c === b.preloader[0])) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0;
                } else if (e && a.contains(document, c)) return !0;
                return !1;
            }
        },
        _addClassToMFP: function (a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a);
        },
        _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
        },
        _hasScrollBar: function (a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
        },
        _setFocus: function () {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
        },
        _onFocusIn: function (c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
        },
        _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)),
                y(l, [b, c, d]),
                a.each(c, function (c, d) {
                    if (void 0 === d || d === !1) return !0;
                    if (((e = c.split("_")), e.length > 1)) {
                        var f = b.find(p + "-" + e[0]);
                        if (f.length > 0) {
                            var g = e[1];
                            "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? (f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class")))) : f.attr(e[1], d);
                        }
                    } else b.find(p + "-" + c).html(d);
                });
        },
        _getScrollbarSize: function () {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                (a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"), document.body.appendChild(a), (b.scrollbarSize = a.offsetWidth - a.clientWidth), document.body.removeChild(a);
            }
            return b.scrollbarSize;
        },
    }),
        (a.magnificPopup = {
            instance: null,
            proto: t.prototype,
            modules: [],
            open: function (b, c) {
                return A(), (b = b ? a.extend(!0, {}, b) : {}), (b.isObj = !0), (b.index = c || 0), this.instance.open(b);
            },
            close: function () {
                return a.magnificPopup.instance && a.magnificPopup.instance.close();
            },
            registerModule: function (b, c) {
                c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0,
            },
        }),
        (a.fn.magnificPopup = function (c) {
            A();
            var d = a(this);
            if ("string" == typeof c)
                if ("open" === c) {
                    var e,
                        f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                        g = parseInt(arguments[1], 10) || 0;
                    f.items ? (e = f.items[g]) : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))), b._openClick({ mfpEl: e }, d, f);
                } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
            else (c = a.extend(!0, {}, c)), u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c), b.addGroup(d, c);
            return d;
        });
    var C,
        D,
        E,
        F = "inline",
        G = function () {
            E && (D.after(E.addClass(C)).detach(), (E = null));
        };
    a.magnificPopup.registerModule(F, {
        options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
        proto: {
            initInline: function () {
                b.types.push(F),
                    w(h + "." + F, function () {
                        G();
                    });
            },
            getInline: function (c, d) {
                if ((G(), c.src)) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)), (E = f.after(D).detach().removeClass(C))), b.updateStatus("ready");
                    } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
                    return (c.inlineElement = f), f;
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
            },
        },
    });
    var H,
        I = "ajax",
        J = function () {
            H && a(document.body).removeClass(H);
        },
        K = function () {
            J(), b.req && b.req.abort();
        };
    a.magnificPopup.registerModule(I, {
        options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
        proto: {
            initAjax: function () {
                b.types.push(I), (H = b.st.ajax.cursor), w(h + "." + I, K), w("BeforeChange." + I, K);
            },
            getAjax: function (c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend(
                    {
                        url: c.src,
                        success: function (d, e, f) {
                            var g = { data: d, xhr: f };
                            y("ParseAjax", g),
                                b.appendContent(a(g.data), I),
                                (c.finished = !0),
                                J(),
                                b._setFocus(),
                                setTimeout(function () {
                                    b.wrap.addClass(q);
                                }, 16),
                                b.updateStatus("ready"),
                                y("AjaxContentAdded");
                        },
                        error: function () {
                            J(), (c.finished = c.loadError = !0), b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
                        },
                    },
                    b.st.ajax.settings
                );
                return (b.req = a.ajax(d)), "";
            },
        },
    });
    var L,
        M = function (c) {
            if (c.data && void 0 !== c.data.title) return c.data.title;
            var d = b.st.image.titleSrc;
            if (d) {
                if (a.isFunction(d)) return d.call(b, c);
                if (c.el) return c.el.attr(d) || "";
            }
            return "";
        };
    a.magnificPopup.registerModule("image", {
        options: {
            markup:
                '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.',
        },
        proto: {
            initImage: function () {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"),
                    w(m + d, function () {
                        "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
                    }),
                    w(h + d, function () {
                        c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
                    }),
                    w("Resize" + d, b.resizeImage),
                    b.isLowIE && w("AfterChange", b.resizeImage);
            },
            resizeImage: function () {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c);
                }
            },
            _onImageHasSize: function (a) {
                a.img && ((a.hasSize = !0), L && clearInterval(L), (a.isCheckingImgSize = !1), y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), (a.imgHidden = !1)));
            },
            findImageSize: function (a) {
                var c = 0,
                    d = a.img[0],
                    e = function (f) {
                        L && clearInterval(L),
                            (L = setInterval(function () {
                                return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
                            }, f));
                    };
                e(1);
            },
            getImage: function (c, d) {
                var e = 0,
                    f = function () {
                        c &&
                            (c.img[0].complete
                                ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), (c.hasSize = !0), (c.loaded = !0), y("ImageLoadComplete"))
                                : (e++, 200 > e ? setTimeout(f, 100) : g()));
                    },
                    g = function () {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), (c.hasSize = !0), (c.loaded = !0), (c.loadError = !0));
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    (j.className = "mfp-img"),
                        c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")),
                        (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
                        (j.src = c.src),
                        i.is("img") && (c.img = c.img.clone()),
                        (j = c.img[0]),
                        j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
                }
                return (
                    b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
                    b.resizeImage(),
                    c.hasSize
                        ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d)
                        : (b.updateStatus("loading"), (c.loading = !0), c.hasSize || ((c.imgHidden = !0), d.addClass("mfp-loading"), b.findImageSize(c)), d)
                );
            },
        },
    });
    var N,
        O = function () {
            return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
        };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (a) {
                return a.is("img") ? a : a.find("img");
            },
        },
        proto: {
            initZoom: function () {
                var a,
                    c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e,
                        f,
                        g = c.duration,
                        j = function (a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                f = "transition";
                            return (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d), b.css(e), b;
                        },
                        k = function () {
                            b.content.css("visibility", "visible");
                        };
                    w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if ((clearTimeout(e), b.content.css("visibility", "hidden"), (a = b._getItemToZoom()), !a)) return void k();
                            (f = j(a)),
                                f.css(b._getOffset()),
                                b.wrap.append(f),
                                (e = setTimeout(function () {
                                    f.css(b._getOffset(!0)),
                                        (e = setTimeout(function () {
                                            k(),
                                                setTimeout(function () {
                                                    f.remove(), (a = f = null), y("ZoomAnimationEnded");
                                                }, 16);
                                        }, g));
                                }, 16));
                        }
                    }),
                        w(i + d, function () {
                            if (b._allowZoom()) {
                                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                                    if (((a = b._getItemToZoom()), !a)) return;
                                    f = j(a);
                                }
                                f.css(b._getOffset(!0)),
                                    b.wrap.append(f),
                                    b.content.css("visibility", "hidden"),
                                    setTimeout(function () {
                                        f.css(b._getOffset());
                                    }, 16);
                            }
                        }),
                        w(h + d, function () {
                            b._allowZoom() && (k(), f && f.remove(), (a = null));
                        });
                }
            },
            _allowZoom: function () {
                return "image" === b.currItem.type;
            },
            _getItemToZoom: function () {
                return b.currItem.hasSize ? b.currItem.img : !1;
            },
            _getOffset: function (c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f };
                return O() ? (h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)") : ((h.left = e.left), (h.top = e.top)), h;
            },
        },
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function (a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" },
                vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" },
                gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
            },
        },
        proto: {
            initIframe: function () {
                b.types.push(P),
                    w("BeforeChange", function (a, b, c) {
                        b !== c && (b === P ? R() : c === P && R(!0));
                    }),
                    w(h + "." + P, function () {
                        R();
                    });
            },
            getIframe: function (c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), (e = this.src.replace("%id%", e)), !1) : void 0;
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
            },
        },
    });
    var S = function (a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a;
        },
        T = function (a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%",
        },
        proto: {
            initGallery: function () {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return (
                    (b.direction = !0),
                    c && c.enabled
                        ? ((f += " mfp-gallery"),
                          w(m + e, function () {
                              c.navigateByImgClick &&
                                  b.wrap.on("click" + e, ".mfp-img", function () {
                                      return b.items.length > 1 ? (b.next(), !1) : void 0;
                                  }),
                                  d.on("keydown" + e, function (a) {
                                      37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                                  });
                          }),
                          w("UpdateStatus" + e, function (a, c) {
                              c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
                          }),
                          w(l + e, function (a, d, e, f) {
                              var g = b.items.length;
                              e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
                          }),
                          w("BuildControls" + e, function () {
                              if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                                  var d = c.arrowMarkup,
                                      e = (b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s)),
                                      f = (b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s));
                                  e.click(function () {
                                      b.prev();
                                  }),
                                      f.click(function () {
                                          b.next();
                                      }),
                                      b.container.append(e.add(f));
                              }
                          }),
                          w(n + e, function () {
                              b._preloadTimeout && clearTimeout(b._preloadTimeout),
                                  (b._preloadTimeout = setTimeout(function () {
                                      b.preloadNearbyImages(), (b._preloadTimeout = null);
                                  }, 16));
                          }),
                          void w(h + e, function () {
                              d.off(e), b.wrap.off("click" + e), (b.arrowRight = b.arrowLeft = null);
                          }))
                        : !1
                );
            },
            next: function () {
                (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
            },
            prev: function () {
                (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
            },
            goTo: function (a) {
                (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
            },
            preloadNearbyImages: function () {
                var a,
                    c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a);
            },
            _preloadItem: function (c) {
                if (((c = S(c)), !b.items[c].preloaded)) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)),
                        y("LazyLoad", d),
                        "image" === d.type &&
                            (d.img = a('<img class="mfp-img" />')
                                .on("load.mfploader", function () {
                                    d.hasSize = !0;
                                })
                                .on("error.mfploader", function () {
                                    (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                                })
                                .attr("src", d.src)),
                        (d.preloaded = !0);
                }
            },
        },
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a;
                });
            },
            ratio: 1,
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    (c = isNaN(c) ? c() : c),
                        c > 1 &&
                            (w("ImageHasSize." + U, function (a, b) {
                                b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" });
                            }),
                            w("ElementParse." + U, function (b, d) {
                                d.src = a.replaceSrc(d, c);
                            }));
                }
            },
        },
    }),
        A();
});

/* ========================
	waypoints-min.js
========================= */
!(function () {
    "use strict";
    var t = 0,
        e = {};
    function i(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        (this.key = "waypoint-" + t),
            (this.options = i.Adapter.extend({}, i.defaults, o)),
            (this.element = this.options.element),
            (this.adapter = new i.Adapter(this.element)),
            (this.callback = o.handler),
            (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
            (this.enabled = this.options.enabled),
            (this.triggerPoint = null),
            (this.group = i.Group.findOrCreate({ name: this.options.group, axis: this.axis })),
            (this.context = i.Context.findOrCreateByElement(this.options.context)),
            i.offsetAliases[this.options.offset] && (this.options.offset = i.offsetAliases[this.options.offset]),
            this.group.add(this),
            this.context.add(this),
            (e[this.key] = this),
            (t += 1);
    }
    (i.prototype.queueTrigger = function (t) {
        this.group.queueTrigger(this, t);
    }),
        (i.prototype.trigger = function (t) {
            this.enabled && this.callback && this.callback.apply(this, t);
        }),
        (i.prototype.destroy = function () {
            this.context.remove(this), this.group.remove(this), delete e[this.key];
        }),
        (i.prototype.disable = function () {
            return (this.enabled = !1), this;
        }),
        (i.prototype.enable = function () {
            return this.context.refresh(), (this.enabled = !0), this;
        }),
        (i.prototype.next = function () {
            return this.group.next(this);
        }),
        (i.prototype.previous = function () {
            return this.group.previous(this);
        }),
        (i.invokeAll = function (t) {
            var i = [];
            for (var o in e) i.push(e[o]);
            for (var n = 0, r = i.length; n < r; n++) i[n][t]();
        }),
        (i.destroyAll = function () {
            i.invokeAll("destroy");
        }),
        (i.disableAll = function () {
            i.invokeAll("disable");
        }),
        (i.enableAll = function () {
            i.Context.refreshAll();
            for (var t in e) e[t].enabled = !0;
            return this;
        }),
        (i.refreshAll = function () {
            i.Context.refreshAll();
        }),
        (i.viewportHeight = function () {
            return window.innerHeight || document.documentElement.clientHeight;
        }),
        (i.viewportWidth = function () {
            return document.documentElement.clientWidth;
        }),
        (i.adapters = []),
        (i.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }),
        (i.offsetAliases = {
            "bottom-in-view": function () {
                return this.context.innerHeight() - this.adapter.outerHeight();
            },
            "right-in-view": function () {
                return this.context.innerWidth() - this.adapter.outerWidth();
            },
        }),
        (window.Waypoint = i);
})(),
    (function () {
        "use strict";
        function t(t) {
            window.setTimeout(t, 1e3 / 60);
        }
        var e = 0,
            i = {},
            o = window.Waypoint,
            n = window.onload;
        function r(t) {
            (this.element = t),
                (this.Adapter = o.Adapter),
                (this.adapter = new this.Adapter(t)),
                (this.key = "waypoint-context-" + e),
                (this.didScroll = !1),
                (this.didResize = !1),
                (this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }),
                (this.waypoints = { vertical: {}, horizontal: {} }),
                (t.waypointContextKey = this.key),
                (i[t.waypointContextKey] = this),
                (e += 1),
                o.windowContext || ((o.windowContext = !0), (o.windowContext = new r(window))),
                this.createThrottledScrollHandler(),
                this.createThrottledResizeHandler();
        }
        (r.prototype.add = function (t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            (this.waypoints[e][t.key] = t), this.refresh();
        }),
            (r.prototype.checkEmpty = function () {
                var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                    e = this.Adapter.isEmptyObject(this.waypoints.vertical),
                    o = this.element == this.element.window;
                t && e && !o && (this.adapter.off(".waypoints"), delete i[this.key]);
            }),
            (r.prototype.createThrottledResizeHandler = function () {
                var t = this;
                function e() {
                    t.handleResize(), (t.didResize = !1);
                }
                this.adapter.on("resize.waypoints", function () {
                    t.didResize || ((t.didResize = !0), o.requestAnimationFrame(e));
                });
            }),
            (r.prototype.createThrottledScrollHandler = function () {
                var t = this;
                function e() {
                    t.handleScroll(), (t.didScroll = !1);
                }
                this.adapter.on("scroll.waypoints", function () {
                    (t.didScroll && !o.isTouch) || ((t.didScroll = !0), o.requestAnimationFrame(e));
                });
            }),
            (r.prototype.handleResize = function () {
                o.Context.refreshAll();
            }),
            (r.prototype.handleScroll = function () {
                var t = {},
                    e = {
                        horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" },
                        vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" },
                    };
                for (var i in e) {
                    var o = e[i],
                        n = o.newScroll > o.oldScroll ? o.forward : o.backward;
                    for (var r in this.waypoints[i]) {
                        var s = this.waypoints[i][r];
                        if (null !== s.triggerPoint) {
                            var a = o.oldScroll < s.triggerPoint,
                                l = o.newScroll >= s.triggerPoint;
                            ((a && l) || (!a && !l)) && (s.queueTrigger(n), (t[s.group.id] = s.group));
                        }
                    }
                }
                for (var h in t) t[h].flushTriggers();
                this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
            }),
            (r.prototype.innerHeight = function () {
                return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight();
            }),
            (r.prototype.remove = function (t) {
                delete this.waypoints[t.axis][t.key], this.checkEmpty();
            }),
            (r.prototype.innerWidth = function () {
                return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth();
            }),
            (r.prototype.destroy = function () {
                var t = [];
                for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
                for (var o = 0, n = t.length; o < n; o++) t[o].destroy();
            }),
            (r.prototype.refresh = function () {
                var t,
                    e = this.element == this.element.window,
                    i = e ? void 0 : this.adapter.offset(),
                    n = {};
                this.handleScroll(),
                    (t = {
                        horizontal: { contextOffset: e ? 0 : i.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" },
                        vertical: { contextOffset: e ? 0 : i.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" },
                    });
                for (var r in t) {
                    var s = t[r];
                    for (var a in this.waypoints[r]) {
                        var l,
                            h,
                            p,
                            u,
                            c = this.waypoints[r][a],
                            d = c.options.offset,
                            f = c.triggerPoint,
                            w = 0,
                            y = null == f;
                        c.element !== c.element.window && (w = c.adapter.offset()[s.offsetProp]),
                            "function" == typeof d ? (d = d.apply(c)) : "string" == typeof d && ((d = parseFloat(d)), c.options.offset.indexOf("%") > -1 && (d = Math.ceil((s.contextDimension * d) / 100))),
                            (l = s.contextScroll - s.contextOffset),
                            (c.triggerPoint = Math.floor(w + l - d)),
                            (h = f < s.oldScroll),
                            (p = c.triggerPoint >= s.oldScroll),
                            (u = !h && !p),
                            !y && h && p
                                ? (c.queueTrigger(s.backward), (n[c.group.id] = c.group))
                                : !y && u
                                ? (c.queueTrigger(s.forward), (n[c.group.id] = c.group))
                                : y && s.oldScroll >= c.triggerPoint && (c.queueTrigger(s.forward), (n[c.group.id] = c.group));
                    }
                }
                return (
                    o.requestAnimationFrame(function () {
                        for (var t in n) n[t].flushTriggers();
                    }),
                    this
                );
            }),
            (r.findOrCreateByElement = function (t) {
                return r.findByElement(t) || new r(t);
            }),
            (r.refreshAll = function () {
                for (var t in i) i[t].refresh();
            }),
            (r.findByElement = function (t) {
                return i[t.waypointContextKey];
            }),
            (window.onload = function () {
                n && n(), r.refreshAll();
            }),
            (o.requestAnimationFrame = function (e) {
                (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e);
            }),
            (o.Context = r);
    })(),
    (function () {
        "use strict";
        function t(t, e) {
            return t.triggerPoint - e.triggerPoint;
        }
        function e(t, e) {
            return e.triggerPoint - t.triggerPoint;
        }
        var i = { vertical: {}, horizontal: {} },
            o = window.Waypoint;
        function n(t) {
            (this.name = t.name), (this.axis = t.axis), (this.id = this.name + "-" + this.axis), (this.waypoints = []), this.clearTriggerQueues(), (i[this.axis][this.name] = this);
        }
        (n.prototype.add = function (t) {
            this.waypoints.push(t);
        }),
            (n.prototype.clearTriggerQueues = function () {
                this.triggerQueues = { up: [], down: [], left: [], right: [] };
            }),
            (n.prototype.flushTriggers = function () {
                for (var i in this.triggerQueues) {
                    var o = this.triggerQueues[i],
                        n = "up" === i || "left" === i;
                    o.sort(n ? e : t);
                    for (var r = 0, s = o.length; r < s; r += 1) {
                        var a = o[r];
                        (a.options.continuous || r === o.length - 1) && a.trigger([i]);
                    }
                }
                this.clearTriggerQueues();
            }),
            (n.prototype.next = function (e) {
                this.waypoints.sort(t);
                var i = o.Adapter.inArray(e, this.waypoints);
                return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1];
            }),
            (n.prototype.previous = function (e) {
                this.waypoints.sort(t);
                var i = o.Adapter.inArray(e, this.waypoints);
                return i ? this.waypoints[i - 1] : null;
            }),
            (n.prototype.queueTrigger = function (t, e) {
                this.triggerQueues[e].push(t);
            }),
            (n.prototype.remove = function (t) {
                var e = o.Adapter.inArray(t, this.waypoints);
                e > -1 && this.waypoints.splice(e, 1);
            }),
            (n.prototype.first = function () {
                return this.waypoints[0];
            }),
            (n.prototype.last = function () {
                return this.waypoints[this.waypoints.length - 1];
            }),
            (n.findOrCreate = function (t) {
                return i[t.axis][t.name] || new n(t);
            }),
            (o.Group = n);
    })(),
    (function () {
        "use strict";
        var t = window.jQuery,
            e = window.Waypoint;
        function i(e) {
            this.$element = t(e);
        }
        t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (t, e) {
            i.prototype[e] = function () {
                var t = Array.prototype.slice.call(arguments);
                return this.$element[e].apply(this.$element, t);
            };
        }),
            t.each(["extend", "inArray", "isEmptyObject"], function (e, o) {
                i[o] = t[o];
            }),
            e.adapters.push({ name: "jquery", Adapter: i }),
            (e.Adapter = i);
    })(),
    (function () {
        "use strict";
        var t = window.Waypoint;
        function e(e) {
            return function () {
                var i = [],
                    o = arguments[0];
                return (
                    e.isFunction(arguments[0]) && ((o = e.extend({}, arguments[1])).handler = arguments[0]),
                    this.each(function () {
                        var n = e.extend({}, o, { element: this });
                        "string" == typeof n.context && (n.context = e(this).closest(n.context)[0]), i.push(new t(n));
                    }),
                    i
                );
            };
        }
        window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto));
    })();

/* ========================
	counterup.min.js
========================= */
(function ($) {
    "use strict";
    $.fn.counterUp = function (options) {
        var settings = $.extend({ time: 400, delay: 10, offset: 100, beginAt: 0, formatter: false, context: "window", callback: function () {} }, options),
            s;
        return this.each(function () {
            var $this = $(this),
                counter = {
                    time: $(this).data("counterup-time") || settings.time,
                    delay: $(this).data("counterup-delay") || settings.delay,
                    offset: $(this).data("counterup-offset") || settings.offset,
                    beginAt: $(this).data("counterup-beginat") || settings.beginAt,
                    context: $(this).data("counterup-context") || settings.context,
                };
            var counterUpper = function () {
                var nums = [];
                var divisions = counter.time / counter.delay;
                var num = $(this).attr("data-num") ? $(this).attr("data-num") : $this.text();
                var isComma = /[0-9]+,[0-9]+/.test(num);
                num = num.replace(/,/g, "");
                var decimalPlaces = (num.split(".")[1] || []).length;
                if (counter.beginAt > num) counter.beginAt = num;
                var isTime = /[0-9]+:[0-9]+:[0-9]+/.test(num);
                if (isTime) {
                    var times = num.split(":"),
                        m = 1;
                    s = 0;
                    while (times.length > 0) {
                        s += m * parseInt(times.pop(), 10);
                        m *= 60;
                    }
                }
                for (var i = divisions; i >= (counter.beginAt / num) * divisions; i--) {
                    var newNum = parseFloat((num / divisions) * i).toFixed(decimalPlaces);
                    if (isTime) {
                        newNum = parseInt((s / divisions) * i);
                        var hours = parseInt(newNum / 3600) % 24;
                        var minutes = parseInt(newNum / 60) % 60;
                        var seconds = parseInt(newNum % 60, 10);
                        newNum = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
                    }
                    if (isComma) {
                        while (/(\d+)(\d{3})/.test(newNum.toString())) {
                            newNum = newNum.toString().replace(/(\d+)(\d{3})/, "$1" + "," + "$2");
                        }
                    }
                    if (settings.formatter) {
                        newNum = settings.formatter.call(this, newNum);
                    }
                    nums.unshift(newNum);
                }
                $this.data("counterup-nums", nums);
                $this.text(counter.beginAt);
                var f = function () {
                    if (!$this.data("counterup-nums")) {
                        settings.callback.call(this);
                        return;
                    }
                    $this.html($this.data("counterup-nums").shift());
                    if ($this.data("counterup-nums").length) {
                        setTimeout($this.data("counterup-func"), counter.delay);
                    } else {
                        $this.data("counterup-nums", null);
                        $this.data("counterup-func", null);
                        settings.callback.call(this);
                    }
                };
                $this.data("counterup-func", f);
                setTimeout($this.data("counterup-func"), counter.delay);
            };
            $this.waypoint(
                function (direction) {
                    counterUpper();
                    this.destroy();
                },
                { offset: counter.offset + "%", context: counter.context }
            );
        });
    };
})(jQuery);

/* ========================
	imagesloaded.js
========================= */
/*! * imagesLoaded PACKAGED v3.1.4 * JavaScript is all like "You images are done yet or what?" * MIT License */ (function () {
    function e() {}
    function t(e, t) {
        for (var n = e.length; n--; ) if (e[n].listener === t) return n;
        return -1;
    }
    function n(e) {
        return function () {
            return this[e].apply(this, arguments);
        };
    }
    var i = e.prototype,
        r = this,
        o = r.EventEmitter;
    (i.getListeners = function (e) {
        var t,
            n,
            i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]);
        } else t = i[e] || (i[e] = []);
        return t;
    }),
        (i.flattenListeners = function (e) {
            var t,
                n = [];
            for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
            return n;
        }),
        (i.getListenersAsObject = function (e) {
            var t,
                n = this.getListeners(e);
            return n instanceof Array && ((t = {}), (t[e] = n)), t || n;
        }),
        (i.addListener = function (e, n) {
            var i,
                r = this.getListenersAsObject(e),
                o = "object" == typeof n;
            for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : { listener: n, once: !1 });
            return this;
        }),
        (i.on = n("addListener")),
        (i.addOnceListener = function (e, t) {
            return this.addListener(e, { listener: t, once: !0 });
        }),
        (i.once = n("addOnceListener")),
        (i.defineEvent = function (e) {
            return this.getListeners(e), this;
        }),
        (i.defineEvents = function (e) {
            for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
            return this;
        }),
        (i.removeListener = function (e, n) {
            var i,
                r,
                o = this.getListenersAsObject(e);
            for (r in o) o.hasOwnProperty(r) && ((i = t(o[r], n)), -1 !== i && o[r].splice(i, 1));
            return this;
        }),
        (i.off = n("removeListener")),
        (i.addListeners = function (e, t) {
            return this.manipulateListeners(!1, e, t);
        }),
        (i.removeListeners = function (e, t) {
            return this.manipulateListeners(!0, e, t);
        }),
        (i.manipulateListeners = function (e, t, n) {
            var i,
                r,
                o = e ? this.removeListener : this.addListener,
                s = e ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp) for (i = n.length; i--; ) o.call(this, t, n[i]);
            else for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
            return this;
        }),
        (i.removeEvent = function (e) {
            var t,
                n = typeof e,
                i = this._getEvents();
            if ("string" === n) delete i[e];
            else if ("object" === n) for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
            else delete this._events;
            return this;
        }),
        (i.removeAllListeners = n("removeEvent")),
        (i.emitEvent = function (e, t) {
            var n,
                i,
                r,
                o,
                s = this.getListenersAsObject(e);
            for (r in s)
                if (s.hasOwnProperty(r))
                    for (i = s[r].length; i--; ) (n = s[r][i]), n.once === !0 && this.removeListener(e, n.listener), (o = n.listener.apply(this, t || [])), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
            return this;
        }),
        (i.trigger = n("emitEvent")),
        (i.emit = function (e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t);
        }),
        (i.setOnceReturnValue = function (e) {
            return (this._onceReturnValue = e), this;
        }),
        (i._getOnceReturnValue = function () {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0;
        }),
        (i._getEvents = function () {
            return this._events || (this._events = {});
        }),
        (e.noConflict = function () {
            return (r.EventEmitter = o), e;
        }),
        "function" == typeof define && define.amd
            ? define("eventEmitter/EventEmitter", [], function () {
                  return e;
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e)
            : (this.EventEmitter = e);
}.call(this),
    (function (e) {
        function t(t) {
            var n = e.event;
            return (n.target = n.target || n.srcElement || t), n;
        }
        var n = document.documentElement,
            i = function () {};
        n.addEventListener
            ? (i = function (e, t, n) {
                  e.addEventListener(t, n, !1);
              })
            : n.attachEvent &&
              (i = function (e, n, i) {
                  (e[n + i] = i.handleEvent
                      ? function () {
                            var n = t(e);
                            i.handleEvent.call(i, n);
                        }
                      : function () {
                            var n = t(e);
                            i.call(e, n);
                        }),
                      e.attachEvent("on" + n, e[n + i]);
              });
        var r = function () {};
        n.removeEventListener
            ? (r = function (e, t, n) {
                  e.removeEventListener(t, n, !1);
              })
            : n.detachEvent &&
              (r = function (e, t, n) {
                  e.detachEvent("on" + t, e[t + n]);
                  try {
                      delete e[t + n];
                  } catch (i) {
                      e[t + n] = void 0;
                  }
              });
        var o = { bind: i, unbind: r };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : (e.eventie = o);
    })(this),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
                  return t(e, n, i);
              })
            : "object" == typeof exports
            ? (module.exports = t(e, require("eventEmitter"), require("eventie")))
            : (e.imagesLoaded = t(e, e.EventEmitter, e.eventie));
    })(this, function (e, t, n) {
        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e;
        }
        function r(e) {
            return "[object Array]" === d.call(e);
        }
        function o(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length) for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
            else t.push(e);
            return t;
        }
        function s(e, t, n) {
            if (!(this instanceof s)) return new s(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)),
                (this.elements = o(e)),
                (this.options = i({}, this.options)),
                "function" == typeof t ? (n = t) : i(this.options, t),
                n && this.on("always", n),
                this.getImages(),
                u && (this.jqDeferred = new u.Deferred());
            var r = this;
            setTimeout(function () {
                r.check();
            });
        }
        function f(e) {
            this.img = e;
        }
        function c(e) {
            (this.src = e), (v[e] = this);
        }
        var u = e.jQuery,
            a = e.console,
            h = "undefined" != typeof a,
            d = Object.prototype.toString;
        (s.prototype = new t()),
            (s.prototype.options = {}),
            (s.prototype.getImages = function () {
                this.images = [];
                for (var e = 0, t = this.elements.length; t > e; e++) {
                    var n = this.elements[e];
                    "IMG" === n.nodeName && this.addImage(n);
                    for (var i = n.querySelectorAll("img"), r = 0, o = i.length; o > r; r++) {
                        var s = i[r];
                        this.addImage(s);
                    }
                }
            }),
            (s.prototype.addImage = function (e) {
                var t = new f(e);
                this.images.push(t);
            }),
            (s.prototype.check = function () {
                function e(e, r) {
                    return t.options.debug && h && a.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0;
                }
                var t = this,
                    n = 0,
                    i = this.images.length;
                if (((this.hasAnyBroken = !1), !i)) return void this.complete();
                for (var r = 0; i > r; r++) {
                    var o = this.images[r];
                    o.on("confirm", e), o.check();
                }
            }),
            (s.prototype.progress = function (e) {
                this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
                var t = this;
                setTimeout(function () {
                    t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e);
                });
            }),
            (s.prototype.complete = function () {
                var e = this.hasAnyBroken ? "fail" : "done";
                this.isComplete = !0;
                var t = this;
                setTimeout(function () {
                    if ((t.emit(e, t), t.emit("always", t), t.jqDeferred)) {
                        var n = t.hasAnyBroken ? "reject" : "resolve";
                        t.jqDeferred[n](t);
                    }
                });
            }),
            u &&
                (u.fn.imagesLoaded = function (e, t) {
                    var n = new s(this, e, t);
                    return n.jqDeferred.promise(u(this));
                }),
            (f.prototype = new t()),
            (f.prototype.check = function () {
                var e = v[this.img.src] || new c(this.img.src);
                if (e.isConfirmed) return void this.confirm(e.isLoaded, "cached was confirmed");
                if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
                var t = this;
                e.on("confirm", function (e, n) {
                    return t.confirm(e.isLoaded, n), !0;
                }),
                    e.check();
            }),
            (f.prototype.confirm = function (e, t) {
                (this.isLoaded = e), this.emit("confirm", this, t);
            });
        var v = {};
        return (
            (c.prototype = new t()),
            (c.prototype.check = function () {
                if (!this.isChecked) {
                    var e = new Image();
                    n.bind(e, "load", this), n.bind(e, "error", this), (e.src = this.src), (this.isChecked = !0);
                }
            }),
            (c.prototype.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e);
            }),
            (c.prototype.onload = function (e) {
                this.confirm(!0, "onload"), this.unbindProxyEvents(e);
            }),
            (c.prototype.onerror = function (e) {
                this.confirm(!1, "onerror"), this.unbindProxyEvents(e);
            }),
            (c.prototype.confirm = function (e, t) {
                (this.isConfirmed = !0), (this.isLoaded = e), this.emit("confirm", this, t);
            }),
            (c.prototype.unbindProxyEvents = function (e) {
                n.unbind(e.target, "load", this), n.unbind(e.target, "error", this);
            }),
            s
        );
    }));

/* ========================
	masonry-3.1.4.js
========================= */
/*Masonry PACKAGED v3.1.4

* Cascading grid layout library

* http://masonry.desandro.com

* MIT License

* by David DeSandro*/

/*Mike Davis - Added "getItems" method

- Fixed bug in "measureColumns" method which didn't take into

account hidden items.

2/28/2014 */

/*Bridget makes jQuery widgets

v1.0.1*/

!(function (t) {
    function e() {}
    function i(t) {
        function i(e) {
            e.prototype.option ||
                (e.prototype.option = function (e) {
                    t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e));
                });
        }
        function o(e, i) {
            t.fn[e] = function (o) {
                if ("string" == typeof o) {
                    for (var s = n.call(arguments, 1), a = 0, h = this.length; h > a; a++) {
                        var p = this[a],
                            u = t.data(p, e);
                        if (u)
                            if (t.isFunction(u[o]) && "_" !== o.charAt(0)) {
                                var f = u[o].apply(u, s);
                                if (void 0 !== f) return f;
                            } else r("no such method '" + o + "' for " + e + " instance");
                        else r("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'");
                    }
                    return this;
                }
                return this.each(function () {
                    var n = t.data(this, e);
                    n ? (n.option(o), n._init()) : ((n = new i(this, o)), t.data(this, e, n));
                });
            };
        }
        if (t) {
            var r =
                "undefined" == typeof console
                    ? e
                    : function (t) {
                          console.error(t);
                      };
            return (
                (t.bridget = function (t, e) {
                    i(e), o(t, e);
                }),
                t.bridget
            );
        }
    }
    var n = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i(t.jQuery);
})(window),
    (function (t) {
        function e(e) {
            var i = t.event;
            return (i.target = i.target || i.srcElement || e), i;
        }
        var i = document.documentElement,
            n = function () {};
        i.addEventListener
            ? (n = function (t, e, i) {
                  t.addEventListener(e, i, !1);
              })
            : i.attachEvent &&
              (n = function (t, i, n) {
                  (t[i + n] = n.handleEvent
                      ? function () {
                            var i = e(t);
                            n.handleEvent.call(n, i);
                        }
                      : function () {
                            var i = e(t);
                            n.call(t, i);
                        }),
                      t.attachEvent("on" + i, t[i + n]);
              });
        var o = function () {};
        i.removeEventListener
            ? (o = function (t, e, i) {
                  t.removeEventListener(e, i, !1);
              })
            : i.detachEvent &&
              (o = function (t, e, i) {
                  t.detachEvent("on" + e, t[e + i]);
                  try {
                      delete t[e + i];
                  } catch (n) {
                      t[e + i] = void 0;
                  }
              });
        var r = { bind: n, unbind: o };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? (module.exports = r) : (t.eventie = r);
    })(this),
    (function (t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : r.push(t));
        }
        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== o.readyState;
            if (!e.isReady && !i) {
                e.isReady = !0;
                for (var n = 0, s = r.length; s > n; n++) {
                    var a = r[n];
                    a();
                }
            }
        }
        function n(n) {
            return n.bind(o, "DOMContentLoaded", i), n.bind(o, "readystatechange", i), n.bind(t, "load", i), e;
        }
        var o = t.document,
            r = [];
        (e.isReady = !1), "function" == typeof define && define.amd ? ((e.isReady = "function" == typeof requirejs), define("doc-ready/doc-ready", ["eventie/eventie"], n)) : (t.docReady = n(t.eventie));
    })(this),
    function () {
        function t() {}
        function e(t, e) {
            for (var i = t.length; i--; ) if (t[i].listener === e) return i;
            return -1;
        }
        function i(t) {
            return function () {
                return this[t].apply(this, arguments);
            };
        }
        var n = t.prototype,
            o = this,
            r = o.EventEmitter;
        (n.getListeners = function (t) {
            var e,
                i,
                n = this._getEvents();
            if (t instanceof RegExp) {
                e = {};
                for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i]);
            } else e = n[t] || (n[t] = []);
            return e;
        }),
            (n.flattenListeners = function (t) {
                var e,
                    i = [];
                for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
                return i;
            }),
            (n.getListenersAsObject = function (t) {
                var e,
                    i = this.getListeners(t);
                return i instanceof Array && ((e = {}), (e[t] = i)), e || i;
            }),
            (n.addListener = function (t, i) {
                var n,
                    o = this.getListenersAsObject(t),
                    r = "object" == typeof i;
                for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(r ? i : { listener: i, once: !1 });
                return this;
            }),
            (n.on = i("addListener")),
            (n.addOnceListener = function (t, e) {
                return this.addListener(t, { listener: e, once: !0 });
            }),
            (n.once = i("addOnceListener")),
            (n.defineEvent = function (t) {
                return this.getListeners(t), this;
            }),
            (n.defineEvents = function (t) {
                for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
                return this;
            }),
            (n.removeListener = function (t, i) {
                var n,
                    o,
                    r = this.getListenersAsObject(t);
                for (o in r) r.hasOwnProperty(o) && ((n = e(r[o], i)), -1 !== n && r[o].splice(n, 1));
                return this;
            }),
            (n.off = i("removeListener")),
            (n.addListeners = function (t, e) {
                return this.manipulateListeners(!1, t, e);
            }),
            (n.removeListeners = function (t, e) {
                return this.manipulateListeners(!0, t, e);
            }),
            (n.manipulateListeners = function (t, e, i) {
                var n,
                    o,
                    r = t ? this.removeListener : this.addListener,
                    s = t ? this.removeListeners : this.addListeners;
                if ("object" != typeof e || e instanceof RegExp) for (n = i.length; n--; ) r.call(this, e, i[n]);
                else for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
                return this;
            }),
            (n.removeEvent = function (t) {
                var e,
                    i = typeof t,
                    n = this._getEvents();
                if ("string" === i) delete n[t];
                else if (t instanceof RegExp) for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
                else delete this._events;
                return this;
            }),
            (n.removeAllListeners = i("removeEvent")),
            (n.emitEvent = function (t, e) {
                var i,
                    n,
                    o,
                    r,
                    s = this.getListenersAsObject(t);
                for (o in s)
                    if (s.hasOwnProperty(o))
                        for (n = s[o].length; n--; ) (i = s[o][n]), i.once === !0 && this.removeListener(t, i.listener), (r = i.listener.apply(this, e || [])), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
                return this;
            }),
            (n.trigger = i("emitEvent")),
            (n.emit = function (t) {
                var e = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(t, e);
            }),
            (n.setOnceReturnValue = function (t) {
                return (this._onceReturnValue = t), this;
            }),
            (n._getOnceReturnValue = function () {
                return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0;
            }),
            (n._getEvents = function () {
                return this._events || (this._events = {});
            }),
            (t.noConflict = function () {
                return (o.EventEmitter = r), t;
            }),
            "function" == typeof define && define.amd
                ? define("eventEmitter/EventEmitter", [], function () {
                      return t;
                  })
                : "object" == typeof module && module.exports
                ? (module.exports = t)
                : (this.EventEmitter = t);
    }.call(this),
    (function (t) {
        function e(t) {
            if (t) {
                if ("string" == typeof n[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, o = 0, r = i.length; r > o; o++) if (((e = i[o] + t), "string" == typeof n[e])) return e;
            }
        }
        var i = "Winkit Moz ms Ms O".split(" "),
            n = document.documentElement.style;
        "function" == typeof define && define.amd
            ? define("get-style-property/get-style-property", [], function () {
                  return e;
              })
            : "object" == typeof exports
            ? (module.exports = e)
            : (t.getStyleProperty = e);
    })(window),
    (function (t, e) {
        function i(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e;
        }
        function n() {
            for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0, i = a.length; i > e; e++) {
                var n = a[e];
                t[n] = 0;
            }
            return t;
        }
        function o(t) {
            function e(t) {
                if (("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType)) {
                    var e = s(t);
                    if ("none" === e.display) return n();
                    var r = {};
                    (r.width = t.offsetWidth), (r.height = t.offsetHeight);
                    for (var u = (r.isBorderBox = !(!p || !e[p] || "border-box" !== e[p])), f = 0, c = a.length; c > f; f++) {
                        var d = a[f],
                            l = e[d];
                        l = o(t, l);
                        var m = parseFloat(l);
                        r[d] = isNaN(m) ? 0 : m;
                    }
                    var y = r.paddingLeft + r.paddingRight,
                        g = r.paddingTop + r.paddingBottom,
                        v = r.marginLeft + r.marginRight,
                        b = r.marginTop + r.marginBottom,
                        _ = r.borderLeftWidth + r.borderRightWidth,
                        E = r.borderTopWidth + r.borderBottomWidth,
                        L = u && h,
                        x = i(e.width);
                    x !== !1 && (r.width = x + (L ? 0 : y + _));
                    var z = i(e.height);
                    return z !== !1 && (r.height = z + (L ? 0 : g + E)), (r.innerWidth = r.width - (y + _)), (r.innerHeight = r.height - (g + E)), (r.outerWidth = r.width + v), (r.outerHeight = r.height + b), r;
                }
            }
            function o(t, e) {
                if (r || -1 === e.indexOf("%")) return e;
                var i = t.style,
                    n = i.left,
                    o = t.runtimeStyle,
                    s = o && o.left;
                return s && (o.left = t.currentStyle.left), (i.left = e), (e = i.pixelLeft), (i.left = n), s && (o.left = s), e;
            }
            var h,
                p = t("boxSizing");
            return (
                (function () {
                    if (p) {
                        var t = document.createElement("div");
                        (t.style.width = "200px"), (t.style.padding = "1px 2px 3px 4px"), (t.style.borderStyle = "solid"), (t.style.borderWidth = "1px 2px 3px 4px"), (t.style[p] = "border-box");
                        var e = document.body || document.documentElement;
                        e.appendChild(t);
                        var n = s(t);
                        (h = 200 === i(n.width)), e.removeChild(t);
                    }
                })(),
                e
            );
        }
        var r = t.getComputedStyle,
            s = r
                ? function (t) {
                      return r(t, null);
                  }
                : function (t) {
                      return t.currentStyle;
                  },
            a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd
            ? define("get-size/get-size", ["get-style-property/get-style-property"], o)
            : "object" == typeof exports
            ? (module.exports = o(require("get-style-property")))
            : (t.getSize = o(t.getStyleProperty));
    })(window),
    (function (t, e) {
        function i(t, e) {
            return t[a](e);
        }
        function n(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t);
            }
        }
        function o(t, e) {
            n(t);
            for (var i = t.parentNode.querySelectorAll(e), o = 0, r = i.length; r > o; o++) if (i[o] === t) return !0;
            return !1;
        }
        function r(t, e) {
            return n(t), i(t, e);
        }
        var s,
            a = (function () {
                if (e.matchesSelector) return "matchesSelector";
                for (var t = ["Winkit", "moz", "ms", "o"], i = 0, n = t.length; n > i; i++) {
                    var o = t[i],
                        r = o + "MatchesSelector";
                    if (e[r]) return r;
                }
            })();
        if (a) {
            var h = document.createElement("div"),
                p = i(h, "div");
            s = p ? i : r;
        } else s = o;
        "function" == typeof define && define.amd
            ? define("matches-selector/matches-selector", [], function () {
                  return s;
              })
            : (window.matchesSelector = s);
    })(this, Element.prototype),
    (function (t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }
        function i(t) {
            for (var e in t) return !1;
            return (e = null), !0;
        }
        function n(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase();
            });
        }
        function o(t, o, r) {
            function a(t, e) {
                t && ((this.element = t), (this.layout = e), (this.position = { x: 0, y: 0 }), this._create());
            }
            var h = r("transition"),
                p = r("transform"),
                u = h && p,
                f = !!r("perspective"),
                c = { WinkitTransition: "WinkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend" }[h],
                d = ["transform", "transition", "transitionDuration", "transitionProperty"],
                l = (function () {
                    for (var t = {}, e = 0, i = d.length; i > e; e++) {
                        var n = d[e],
                            o = r(n);
                        o && o !== n && (t[n] = o);
                    }
                    return t;
                })();
            e(a.prototype, t.prototype),
                (a.prototype._create = function () {
                    (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
                }),
                (a.prototype.handleEvent = function (t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t);
                }),
                (a.prototype.getSize = function () {
                    this.size = o(this.element);
                }),
                (a.prototype.css = function (t) {
                    var e = this.element.style;
                    for (var i in t) {
                        var n = l[i] || i;
                        e[n] = t[i];
                    }
                }),
                (a.prototype.getPosition = function () {
                    var t = s(this.element),
                        e = this.layout.options,
                        i = e.isOriginLeft,
                        n = e.isOriginTop,
                        o = parseInt(t[i ? "left" : "right"], 10),
                        r = parseInt(t[n ? "top" : "bottom"], 10);
                    (o = isNaN(o) ? 0 : o), (r = isNaN(r) ? 0 : r);
                    var a = this.layout.size;
                    (o -= i ? a.paddingLeft : a.paddingRight), (r -= n ? a.paddingTop : a.paddingBottom), (this.position.x = o), (this.position.y = r);
                }),
                (a.prototype.layoutPosition = function () {
                    var t = this.layout.size,
                        e = this.layout.options,
                        i = {};
                    e.isOriginLeft ? ((i.left = this.position.x + t.paddingLeft + "px"), (i.right = "")) : ((i.right = this.position.x + t.paddingRight + "px"), (i.left = "")),
                        e.isOriginTop ? ((i.top = this.position.y + t.paddingTop + "px"), (i.bottom = "")) : ((i.bottom = this.position.y + t.paddingBottom + "px"), (i.top = "")),
                        this.css(i),
                        this.emitEvent("layout", [this]);
                });
            var m = f
                ? function (t, e) {
                      return "translate3d(" + t + "px, " + e + "px, 0)";
                  }
                : function (t, e) {
                      return "translate(" + t + "px, " + e + "px)";
                  };
            (a.prototype._transitionTo = function (t, e) {
                this.getPosition();
                var i = this.position.x,
                    n = this.position.y,
                    o = parseInt(t, 10),
                    r = parseInt(e, 10),
                    s = o === this.position.x && r === this.position.y;
                if ((this.setPosition(t, e), s && !this.isTransitioning)) return void this.layoutPosition();
                var a = t - i,
                    h = e - n,
                    p = {},
                    u = this.layout.options;
                (a = u.isOriginLeft ? a : -a), (h = u.isOriginTop ? h : -h), (p.transform = m(a, h)), this.transition({ to: p, onTransitionEnd: { transform: this.layoutPosition }, isConstruction: !0 });
            }),
                (a.prototype.goTo = function (t, e) {
                    this.setPosition(t, e), this.layoutPosition();
                }),
                (a.prototype.moveTo = u ? a.prototype._transitionTo : a.prototype.goTo),
                (a.prototype.setPosition = function (t, e) {
                    (this.position.x = parseInt(t, 10)), (this.position.y = parseInt(e, 10));
                }),
                (a.prototype._nonTransition = function (t) {
                    this.css(t.to), t.isConstruction && this._removeStyles(t.to);
                    for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
                }),
                (a.prototype._transition = function (t) {
                    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
                    var e = this._transn;
                    for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                    for (i in t.to) (e.ingProperties[i] = !0), t.isConstruction && (e.clean[i] = !0);
                    if (t.from) {
                        this.css(t.from);
                        var n = this.element.offsetHeight;
                        n = null;
                    }
                    this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);
                });
            var y = p && n(p) + ",opacity";
            (a.prototype.enableTransition = function () {
                this.isTransitioning || (this.css({ transitionProperty: y, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(c, this, !1));
            }),
                (a.prototype.transition = a.prototype[h ? "_transition" : "_nonTransition"]),
                (a.prototype.onWinkitTransitionEnd = function (t) {
                    this.ontransitionend(t);
                }),
                (a.prototype.onotransitionend = function (t) {
                    this.ontransitionend(t);
                });
            var g = { "-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform" };
            (a.prototype.ontransitionend = function (t) {
                if (t.target === this.element) {
                    var e = this._transn,
                        n = g[t.propertyName] || t.propertyName;
                    if ((delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && ((this.element.style[t.propertyName] = ""), delete e.clean[n]), n in e.onEnd)) {
                        var o = e.onEnd[n];
                        o.call(this), delete e.onEnd[n];
                    }
                    this.emitEvent("transitionEnd", [this]);
                }
            }),
                (a.prototype.disableTransition = function () {
                    this.removeTransitionStyles(), this.element.removeEventListener(c, this, !1), (this.isTransitioning = !1);
                }),
                (a.prototype._removeStyles = function (t) {
                    var e = {};
                    for (var i in t) e[i] = "";
                    this.css(e);
                });
            var v = { transitionProperty: "", transitionDuration: "" };
            return (
                (a.prototype.removeTransitionStyles = function () {
                    this.css(v);
                }),
                (a.prototype.removeElem = function () {
                    this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this]);
                }),
                (a.prototype.remove = function () {
                    if (!h || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
                    var t = this;
                    this.on("transitionEnd", function () {
                        return t.removeElem(), !0;
                    }),
                        this.hide();
                }),
                (a.prototype.reveal = function () {
                    delete this.isHidden, this.css({ display: "" });
                    var t = this.layout.options;
                    this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isConstruction: !0 });
                }),
                (a.prototype.hide = function () {
                    (this.isHidden = !0), this.css({ display: "" });
                    var t = this.layout.options;
                    this.transition({
                        from: t.visibleStyle,
                        to: t.hiddenStyle,
                        isConstruction: !0,
                        onTransitionEnd: {
                            opacity: function () {
                                this.isHidden && this.css({ display: "none" });
                            },
                        },
                    });
                }),
                (a.prototype.destroy = function () {
                    this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
                }),
                a
            );
        }
        var r = document.defaultView,
            s =
                r && r.getComputedStyle
                    ? function (t) {
                          return r.getComputedStyle(t, null);
                      }
                    : function (t) {
                          return t.currentStyle;
                      };
        "function" == typeof define && define.amd
            ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], o)
            : ((t.Outlayer = {}), (t.Outlayer.Item = o(t.EventEmitter, t.getSize, t.getStyleProperty)));
    })(window),
    (function (t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }
        function i(t) {
            return "[object Array]" === f.call(t);
        }
        function n(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length) for (var n = 0, o = t.length; o > n; n++) e.push(t[n]);
            else e.push(t);
            return e;
        }
        function o(t, e) {
            var i = d(e, t);
            -1 !== i && e.splice(i, 1);
        }
        function r(t) {
            return t
                .replace(/(.)([A-Z])/g, function (t, e, i) {
                    return e + "-" + i;
                })
                .toLowerCase();
        }
        function s(i, s, f, d, l, m) {
            function y(t, i) {
                if (("string" == typeof t && (t = a.querySelector(t)), !t || !c(t))) return void (h && h.error("Bad " + this.constructor.namespace + " element: " + t));
                (this.element = t), (this.options = e({}, this.options)), this.option(i);
                var n = ++v;
                (this.element.outlayerGUID = n), (b[n] = this), this._create(), this.options.isInitLayout && this.layout();
            }
            function g(t, i) {
                t.prototype[i] = e({}, y.prototype[i]);
            }
            var v = 0,
                b = {};
            return (
                (y.namespace = "outlayer"),
                (y.Item = m),
                (y.prototype.options = {
                    containerStyle: { position: "relative" },
                    isInitLayout: !0,
                    isOriginLeft: !0,
                    isOriginTop: !0,
                    isResizeBound: !0,
                    transitionDuration: "0.4s",
                    hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                    visibleStyle: { opacity: 1, transform: "scale(1)" },
                }),
                e(y.prototype, f.prototype),
                (y.prototype.option = function (t) {
                    e(this.options, t);
                }),
                (y.prototype._create = function () {
                    this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize();
                }),
                (y.prototype.reloadItems = function () {
                    this.items = this._itemize(this.element.children);
                }),
                (y.prototype._itemize = function (t) {
                    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0, r = e.length; r > o; o++) {
                        var s = e[o],
                            a = new i(s, this);
                        n.push(a);
                    }
                    return n;
                }),
                (y.prototype._filterFindItemElements = function (t) {
                    t = n(t);
                    for (var e = this.options.itemSelector, i = [], o = 0, r = t.length; r > o; o++) {
                        var s = t[o];
                        if (c(s))
                            if (e) {
                                l(s, e) && i.push(s);
                                for (var a = s.querySelectorAll(e), h = 0, p = a.length; p > h; h++) i.push(a[h]);
                            } else i.push(s);
                    }
                    return i;
                }),
                (y.prototype.getAllItems = function () {
                    for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e]);
                    return t;
                }),
                (y.prototype.getItemElements = function () {
                    for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
                    return t;
                }),
                (y.prototype.layout = function () {
                    this._resetLayout(), this._manageStamps();
                    var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                    this.layoutItems(this.items, t), (this._isLayoutInited = !0);
                }),
                (y.prototype._init = y.prototype.layout),
                (y.prototype._resetLayout = function () {
                    this.getSize();
                }),
                (y.prototype.getSize = function () {
                    this.size = d(this.element);
                }),
                (y.prototype._getMeasurement = function (t, e) {
                    var i,
                        n = this.options[t];
                    n ? ("string" == typeof n ? (i = this.element.querySelector(n)) : c(n) && (i = n), (this[t] = i ? d(i)[e] : n)) : (this[t] = 0);
                }),
                (y.prototype.layoutItems = function (t, e) {
                    (t = this._getItemsForLayout(t)), this._layoutItems(t, e), this._postLayout();
                }),
                (y.prototype._getItemsForLayout = function (t) {
                    for (var e = [], i = 0, n = t.length; n > i; i++) {
                        var o = t[i];
                        o.isIgnored || e.push(o);
                    }
                    return e;
                }),
                (y.prototype._layoutItems = function (t, e) {
                    function i() {
                        n.emitEvent("layoutComplete", [n, t]);
                    }
                    var n = this;
                    if (!t || !t.length) return void i();
                    this._itemsOn(t, "layout", i);
                    for (var o = [], r = 0, s = t.length; s > r; r++) {
                        var a = t[r],
                            h = this._getItemLayoutPosition(a);
                        (h.item = a), (h.isInstant = e || a.isLayoutInstant), o.push(h);
                    }
                    this._processLayoutQueue(o);
                }),
                (y.prototype._getItemLayoutPosition = function () {
                    return { x: 0, y: 0 };
                }),
                (y.prototype._processLayoutQueue = function (t) {
                    for (var e = 0, i = t.length; i > e; e++) {
                        var n = t[e];
                        this._positionItem(n.item, n.x, n.y, n.isInstant);
                    }
                }),
                (y.prototype._positionItem = function (t, e, i, n) {
                    n ? t.goTo(e, i) : t.moveTo(e, i);
                }),
                (y.prototype._postLayout = function () {
                    var t = this._getContainerSize();
                    t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1));
                }),
                (y.prototype._getContainerSize = u),
                (y.prototype._setContainerMeasure = function (t, e) {
                    if (void 0 !== t) {
                        var i = this.size;
                        i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                            (t = Math.max(t, 0)),
                            (this.element.style[e ? "width" : "height"] = t + "px");
                    }
                }),
                (y.prototype._itemsOn = function (t, e, i) {
                    function n() {
                        return o++, o === r && i.call(s), !0;
                    }
                    for (var o = 0, r = t.length, s = this, a = 0, h = t.length; h > a; a++) {
                        var p = t[a];
                        p.on(e, n);
                    }
                }),
                (y.prototype.ignore = function (t) {
                    var e = this.getItem(t);
                    e && (e.isIgnored = !0);
                }),
                (y.prototype.unignore = function (t) {
                    var e = this.getItem(t);
                    e && delete e.isIgnored;
                }),
                (y.prototype.stamp = function (t) {
                    if ((t = this._find(t))) {
                        this.stamps = this.stamps.concat(t);
                        for (var e = 0, i = t.length; i > e; e++) {
                            var n = t[e];
                            this.ignore(n);
                        }
                    }
                }),
                (y.prototype.unstamp = function (t) {
                    if ((t = this._find(t)))
                        for (var e = 0, i = t.length; i > e; e++) {
                            var n = t[e];
                            o(n, this.stamps), this.unignore(n);
                        }
                }),
                (y.prototype._find = function (t) {
                    return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), (t = n(t))) : void 0;
                }),
                (y.prototype._manageStamps = function () {
                    if (this.stamps && this.stamps.length) {
                        this._getBoundingRect();
                        for (var t = 0, e = this.stamps.length; e > t; t++) {
                            var i = this.stamps[t];
                            this._manageStamp(i);
                        }
                    }
                }),
                (y.prototype._getBoundingRect = function () {
                    var t = this.element.getBoundingClientRect(),
                        e = this.size;
                    this._boundingRect = {
                        left: t.left + e.paddingLeft + e.borderLeftWidth,
                        top: t.top + e.paddingTop + e.borderTopWidth,
                        right: t.right - (e.paddingRight + e.borderRightWidth),
                        bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
                    };
                }),
                (y.prototype._manageStamp = u),
                (y.prototype._getElementOffset = function (t) {
                    var e = t.getBoundingClientRect(),
                        i = this._boundingRect,
                        n = d(t),
                        o = { left: e.left - i.left - n.marginLeft, top: e.top - i.top - n.marginTop, right: i.right - e.right - n.marginRight, bottom: i.bottom - e.bottom - n.marginBottom };
                    return o;
                }),
                (y.prototype.handleEvent = function (t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t);
                }),
                (y.prototype.bindResize = function () {
                    this.isResizeBound || (i.bind(t, "resize", this), (this.isResizeBound = !0));
                }),
                (y.prototype.unbindResize = function () {
                    i.unbind(t, "resize", this), (this.isResizeBound = !1);
                }),
                (y.prototype.onresize = function () {
                    function t() {
                        e.resize(), delete e.resizeTimeout;
                    }
                    this.resizeTimeout && clearTimeout(this.resizeTimeout);
                    var e = this;
                    this.resizeTimeout = setTimeout(t, 100);
                }),
                (y.prototype.resize = function () {
                    var t = d(this.element),
                        e = this.size && t;
                    (e && t.innerWidth === this.size.innerWidth) || this.layout();
                }),
                (y.prototype.addItems = function (t) {
                    var e = this._itemize(t);
                    return e.length && (this.items = this.items.concat(e)), e;
                }),
                (y.prototype.appended = function (t) {
                    var e = this.addItems(t);
                    e.length && (this.layoutItems(e, !0), this.reveal(e));
                }),
                (y.prototype.prepended = function (t) {
                    var e = this._itemize(t);
                    if (e.length) {
                        var i = this.items.slice(0);
                        (this.items = e.concat(i)), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
                    }
                }),
                (y.prototype.reveal = function (t) {
                    var e = t && t.length;
                    if (e)
                        for (var i = 0; e > i; i++) {
                            var n = t[i];
                            n.reveal();
                        }
                }),
                (y.prototype.hide = function (t) {
                    var e = t && t.length;
                    if (e)
                        for (var i = 0; e > i; i++) {
                            var n = t[i];
                            n.hide();
                        }
                }),
                (y.prototype.getItem = function (t) {
                    for (var e = 0, i = this.items.length; i > e; e++) {
                        var n = this.items[e];
                        if (n.element === t) return n;
                    }
                }),
                (y.prototype.getItems = function (t) {
                    if (t && t.length) {
                        for (var e = [], i = 0, n = t.length; n > i; i++) {
                            var o = t[i],
                                r = this.getItem(o);
                            r && e.push(r);
                        }
                        return e;
                    }
                }),
                (y.prototype.remove = function (t) {
                    t = n(t);
                    var e = this.getItems(t);
                    if (e && e.length) {
                        this._itemsOn(e, "remove", function () {
                            this.emitEvent("removeComplete", [this, e]);
                        });
                        for (var i = 0, r = e.length; r > i; i++) {
                            var s = e[i];
                            s.remove(), o(s, this.items);
                        }
                    }
                }),
                (y.prototype.destroy = function () {
                    var t = this.element.style;
                    (t.height = ""), (t.position = ""), (t.width = "");
                    for (var e = 0, i = this.items.length; i > e; e++) {
                        var n = this.items[e];
                        n.destroy();
                    }
                    this.unbindResize(), delete this.element.outlayerGUID, p && p.removeData(this.element, this.constructor.namespace);
                }),
                (y.data = function (t) {
                    var e = t && t.outlayerGUID;
                    return e && b[e];
                }),
                (y.create = function (t, i) {
                    function n() {
                        y.apply(this, arguments);
                    }
                    return (
                        Object.create ? (n.prototype = Object.create(y.prototype)) : e(n.prototype, y.prototype),
                        (n.prototype.constructor = n),
                        g(n, "options"),
                        e(n.prototype.options, i),
                        (n.namespace = t),
                        (n.data = y.data),
                        (n.Item = function () {
                            m.apply(this, arguments);
                        }),
                        (n.Item.prototype = new m()),
                        s(function () {
                            for (var e = r(t), i = a.querySelectorAll(".js-" + e), o = "data-" + e + "-options", s = 0, u = i.length; u > s; s++) {
                                var f,
                                    c = i[s],
                                    d = c.getAttribute(o);
                                try {
                                    f = d && JSON.parse(d);
                                } catch (l) {
                                    h && h.error("Error parsing " + o + " on " + c.nodeName.toLowerCase() + (c.id ? "#" + c.id : "") + ": " + l);
                                    continue;
                                }
                                var m = new n(c, f);
                                p && p.data(c, t, m);
                            }
                        }),
                        p && p.bridget && p.bridget(t, n),
                        n
                    );
                }),
                (y.Item = m),
                y
            );
        }
        var a = t.document,
            h = t.console,
            p = t.jQuery,
            u = function () {},
            f = Object.prototype.toString,
            c =
                "object" == typeof HTMLElement
                    ? function (t) {
                          return t instanceof HTMLElement;
                      }
                    : function (t) {
                          return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName;
                      },
            d = Array.prototype.indexOf
                ? function (t, e) {
                      return t.indexOf(e);
                  }
                : function (t, e) {
                      for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
                      return -1;
                  };
        "function" == typeof define && define.amd
            ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s)
            : (t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item));
    })(window),
    (function (t) {
        function e(t, e) {
            var n = t.create("masonry");
            return (
                (n.prototype._resetLayout = function () {
                    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                    var t = this.cols;
                    for (this.colYs = []; t--; ) this.colYs.push(0);
                    this.maxY = 0;
                }),
                (n.prototype.measureColumns = function () {
                    if ((this.getContainerWidth(), !this.columnWidth)) {
                        for (var t, i = 0, n = this.items.length; n > i; i++)
                            if (!this.items[i].isIgnored) {
                                t = this.items[i];
                                break;
                            }
                        t || (t = this.items[0]);
                        var o = t && t.element;
                        this.columnWidth = (o && e(o).outerWidth) || this.containerWidth;
                    }
                    (this.columnWidth += this.gutter), (this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth)), (this.cols = Math.max(this.cols, 1));
                }),
                (n.prototype.getContainerWidth = function () {
                    var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                        i = e(t);
                    this.containerWidth = i && i.innerWidth;
                }),
                (n.prototype._getItemLayoutPosition = function (t) {
                    t.getSize();
                    var e = t.size.outerWidth % this.columnWidth,
                        n = e && 1 > e ? "round" : "ceil",
                        o = Math[n](t.size.outerWidth / this.columnWidth);
                    o = Math.min(o, this.cols);
                    for (var r = this._getColGroup(o), s = Math.min.apply(Math, r), a = i(r, s), h = { x: this.columnWidth * a, y: s }, p = s + t.size.outerHeight, u = this.cols + 1 - r.length, f = 0; u > f; f++) this.colYs[a + f] = p;
                    return h;
                }),
                (n.prototype._getColGroup = function (t) {
                    if (2 > t) return this.colYs;
                    for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                        var o = this.colYs.slice(n, n + t);
                        e[n] = Math.max.apply(Math, o);
                    }
                    return e;
                }),
                (n.prototype._manageStamp = function (t) {
                    var i = e(t),
                        n = this._getElementOffset(t),
                        o = this.options.isOriginLeft ? n.left : n.right,
                        r = o + i.outerWidth,
                        s = Math.floor(o / this.columnWidth);
                    s = Math.max(0, s);
                    var a = Math.floor(r / this.columnWidth);
                    (a -= r % this.columnWidth ? 0 : 1), (a = Math.min(this.cols - 1, a));
                    for (var h = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, p = s; a >= p; p++) this.colYs[p] = Math.max(h, this.colYs[p]);
                }),
                (n.prototype._getContainerSize = function () {
                    this.maxY = Math.max.apply(Math, this.colYs);
                    var t = { height: this.maxY };
                    return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t;
                }),
                (n.prototype._getContainerFitWidth = function () {
                    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
                    return (this.cols - t) * this.columnWidth - this.gutter;
                }),
                (n.prototype.resize = function () {
                    var t = this.containerWidth;
                    this.getContainerWidth(), t !== this.containerWidth && this.layout();
                }),
                n
            );
        }
        var i = Array.prototype.indexOf
            ? function (t, e) {
                  return t.indexOf(e);
              }
            : function (t, e) {
                  for (var i = 0, n = t.length; n > i; i++) {
                      var o = t[i];
                      if (o === e) return i;
                  }
                  return -1;
              };
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : (t.Masonry = e(t.Outlayer, t.getSize));
    })(window);

/* ========================
	masonry.filter.js
========================= */
/* -- Filter Plugin -- */
!(function (n) {
    "use strict";
    n.fn.masonryFilter = function (e) {
        var i = function (n) {
                setTimeout(function () {
                    n.masonry("layout");
                }, 100);
            },
            t = function (t) {
                var r = t.masonry("getAllItems"),
                    o = [],
                    s = [];
                n.each(r, function (i) {
                    var t = r[i],
                        a = n(t.element),
                        u = e.filter && e.filter.call(a);
                    u ? t.isHidden && ((t.isIgnored = !1), o.push(t)) : t.isHidden || ((t.isIgnored = !0), s.push(t));
                }),
                    t.masonry("hide", s),
                    t.masonry("reveal", o),
                    i(t);
            };
        return this.each(function () {
            var e = n(this);
            t(e);
        });
    };
})(window.jQuery);

/* ========================
	owl.carousel.js
========================= */
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!(function (a, b, c, d) {
    function e(b, c) {
        (this.settings = null),
            (this.options = a.extend({}, e.Defaults, c)),
            (this.$element = a(b)),
            (this._handlers = {}),
            (this._plugins = {}),
            (this._supress = {}),
            (this._current = null),
            (this._speed = null),
            (this._coordinates = []),
            (this._breakpoint = null),
            (this._width = null),
            (this._items = []),
            (this._clones = []),
            (this._mergers = []),
            (this._widths = []),
            (this._invalidated = {}),
            (this._pipe = []),
            (this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }),
            (this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }),
            a.each(
                ["onResize", "onThrottledResize"],
                a.proxy(function (b, c) {
                    this._handlers[c] = a.proxy(this[c], this);
                }, this)
            ),
            a.each(
                e.Plugins,
                a.proxy(function (a, b) {
                    this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
                }, this)
            ),
            a.each(
                e.Workers,
                a.proxy(function (b, c) {
                    this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
                }, this)
            ),
            this.setup(),
            this.initialize();
    }
    (e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab",
    }),
        (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
        (e.Type = { Event: "event", State: "state" }),
        (e.Plugins = {}),
        (e.Workers = [
            {
                filter: ["width", "settings"],
                run: function () {
                    this._width = this.$element.width();
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    a.current = this._items && this._items[this.relative(this._current)];
                },
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    this.$stage.children(".cloned").remove();
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = this.settings.margin || "",
                        c = !this.settings.autoWidth,
                        d = this.settings.rtl,
                        e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };
                    !c && this.$stage.children().css(e), (a.css = e);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                        c = null,
                        d = this._items.length,
                        e = !this.settings.autoWidth,
                        f = [];
                    for (a.items = { merge: !1, width: b }; d--; )
                        (c = this._mergers[d]), (c = (this.settings.mergeFit && Math.min(c, this.settings.items)) || c), (a.items.merge = c > 1 || a.items.merge), (f[d] = e ? b * c : this._items[d].width());
                    this._widths = f;
                },
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    var b = [],
                        c = this._items,
                        d = this.settings,
                        e = Math.max(2 * d.items, 4),
                        f = 2 * Math.ceil(c.length / 2),
                        g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
                        h = "",
                        i = "";
                    for (g /= 2; g--; ) b.push(this.normalize(b.length / 2, !0)), (h += c[b[b.length - 1]][0].outerHTML), b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), (i = c[b[b.length - 1]][0].outerHTML + i);
                    (this._clones = b), a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b; )
                        (d = f[c - 1] || 0), (e = this._widths[this.relative(c)] + this.settings.margin), f.push(d + e * a);
                    this._coordinates = f;
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    var a = this.settings.stagePadding,
                        b = this._coordinates,
                        c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" };
                    this.$stage.css(c);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = this._coordinates.length,
                        c = !this.settings.autoWidth,
                        d = this.$stage.children();
                    if (c && a.items.merge) for (; b--; ) (a.css.width = this._widths[this.relative(b)]), d.eq(b).css(a.css);
                    else c && ((a.css.width = a.items.width), d.css(a.css));
                },
            },
            {
                filter: ["items"],
                run: function () {
                    this._coordinates.length < 1 && this.$stage.removeAttr("style");
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    (a.current = a.current ? this.$stage.children().index(a.current) : 0), (a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current))), this.reset(a.current);
                },
            },
            {
                filter: ["position"],
                run: function () {
                    this.animate(this.coordinates(this._current));
                },
            },
            {
                filter: ["width", "position", "items", "settings"],
                run: function () {
                    var a,
                        b,
                        c,
                        d,
                        e = this.settings.rtl ? 1 : -1,
                        f = 2 * this.settings.stagePadding,
                        g = this.coordinates(this.current()) + f,
                        h = g + this.width() * e,
                        i = [];
                    for (c = 0, d = this._coordinates.length; c < d; c++)
                        (a = this._coordinates[c - 1] || 0), (b = Math.abs(this._coordinates[c]) + f * e), ((this.op(a, "<=", g) && this.op(a, ">", h)) || (this.op(b, "<", g) && this.op(b, ">", h))) && i.push(c);
                    this.$stage.children(".active").removeClass("active"),
                        this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
                        this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"));
                },
            },
        ]),
        (e.prototype.initialize = function () {
            if ((this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading"))) {
                var b, c, e;
                (b = this.$element.find("img")), (c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d), (e = this.$element.children(c).width()), b.length && e <= 0 && this.preloadAutoWidthImages(b);
            }
            this.$element.addClass(this.options.loadingClass),
                (this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
                this.$element.append(this.$stage.parent()),
                this.replace(this.$element.children().not(this.$stage.parent())),
                this.$element.is(":visible") ? this.refresh() : this.invalidate("width"),
                this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),
                this.registerEventHandlers(),
                this.leave("initializing"),
                this.trigger("initialized");
        }),
        (e.prototype.setup = function () {
            var b = this.viewport(),
                c = this.options.responsive,
                d = -1,
                e = null;
            c
                ? (a.each(c, function (a) {
                      a <= b && a > d && (d = Number(a));
                  }),
                  (e = a.extend({}, this.options, c[d])),
                  "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
                  delete e.responsive,
                  e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d)))
                : (e = a.extend({}, this.options)),
                this.trigger("change", { property: { name: "settings", value: e } }),
                (this._breakpoint = d),
                (this.settings = e),
                this.invalidate("settings"),
                this.trigger("changed", { property: { name: "settings", value: this.settings } });
        }),
        (e.prototype.optionsLogic = function () {
            this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
        }),
        (e.prototype.prepare = function (b) {
            var c = this.trigger("prepare", { content: b });
            return (
                c.data ||
                    (c.data = a("<" + this.settings.itemElement + "/>")
                        .addClass(this.options.itemClass)
                        .append(b)),
                this.trigger("prepared", { content: c.data }),
                c.data
            );
        }),
        (e.prototype.update = function () {
            for (
                var b = 0,
                    c = this._pipe.length,
                    d = a.proxy(function (a) {
                        return this[a];
                    }, this._invalidated),
                    e = {};
                b < c;

            )
                (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
            (this._invalidated = {}), !this.is("valid") && this.enter("valid");
        }),
        (e.prototype.width = function (a) {
            switch ((a = a || e.Width.Default)) {
                case e.Width.Inner:
                case e.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin;
            }
        }),
        (e.prototype.refresh = function () {
            this.enter("refreshing"),
                this.trigger("refresh"),
                this.setup(),
                this.optionsLogic(),
                this.$element.addClass(this.options.refreshClass),
                this.update(),
                this.$element.removeClass(this.options.refreshClass),
                this.leave("refreshing"),
                this.trigger("refreshed");
        }),
        (e.prototype.onThrottledResize = function () {
            b.clearTimeout(this.resizeTimer), (this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));
        }),
        (e.prototype.onResize = function () {
            return (
                !!this._items.length &&
                this._width !== this.$element.width() &&
                !!this.$element.is(":visible") &&
                (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
            );
        }),
        (e.prototype.registerEventHandlers = function () {
            a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)),
                this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize),
                this.settings.mouseDrag &&
                    (this.$element.addClass(this.options.dragClass),
                    this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
                    this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                        return !1;
                    })),
                this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
        }),
        (e.prototype.onDragStart = function (b) {
            var d = null;
            3 !== b.which &&
                (a.support.transform
                    ? ((d = this.$stage
                          .css("transform")
                          .replace(/.*\(|\)| /g, "")
                          .split(",")),
                      (d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }))
                    : ((d = this.$stage.position()), (d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top })),
                this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")),
                this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
                this.speed(0),
                (this._drag.time = new Date().getTime()),
                (this._drag.target = a(b.target)),
                (this._drag.stage.start = d),
                (this._drag.stage.current = d),
                (this._drag.pointer = this.pointer(b)),
                a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
                a(c).one(
                    "mousemove.owl.core touchmove.owl.core",
                    a.proxy(function (b) {
                        var d = this.difference(this._drag.pointer, this.pointer(b));
                        a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
                    }, this)
                ));
        }),
        (e.prototype.onDragMove = function (a) {
            var b = null,
                c = null,
                d = null,
                e = this.difference(this._drag.pointer, this.pointer(a)),
                f = this.difference(this._drag.stage.start, e);
            this.is("dragging") &&
                (a.preventDefault(),
                this.settings.loop
                    ? ((b = this.coordinates(this.minimum())), (c = this.coordinates(this.maximum() + 1) - b), (f.x = ((((f.x - b) % c) + c) % c) + b))
                    : ((b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),
                      (c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),
                      (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
                      (f.x = Math.max(Math.min(f.x, b + d), c + d))),
                (this._drag.stage.current = f),
                this.animate(f.x));
        }),
        (e.prototype.onDragEnd = function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b)),
                e = this._drag.stage.current,
                f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
            a(c).off(".owl.core"),
                this.$element.removeClass(this.options.grabClass),
                ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
                    (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                    this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
                    this.invalidate("position"),
                    this.update(),
                    (this._drag.direction = f),
                    (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
                        this._drag.target.one("click.owl.core", function () {
                            return !1;
                        })),
                this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
        }),
        (e.prototype.closest = function (b, c) {
            var d = -1,
                e = 30,
                f = this.width(),
                g = this.coordinates();
            return (
                this.settings.freeDrag ||
                    a.each(
                        g,
                        a.proxy(function (a, h) {
                            return (
                                "left" === c && b > h - e && b < h + e ? (d = a) : "right" === c && b > h - f - e && b < h - f + e ? (d = a + 1) : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a),
                                d === -1
                            );
                        }, this)
                    ),
                this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? (d = b = this.minimum()) : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())),
                d
            );
        }),
        (e.prototype.animate = function (b) {
            var c = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(),
                c && (this.enter("animating"), this.trigger("translate")),
                a.support.transform3d && a.support.transition
                    ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" })
                    : c
                    ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this))
                    : this.$stage.css({ left: b + "px" });
        }),
        (e.prototype.is = function (a) {
            return this._states.current[a] && this._states.current[a] > 0;
        }),
        (e.prototype.current = function (a) {
            if (a === d) return this._current;
            if (0 === this._items.length) return d;
            if (((a = this.normalize(a)), this._current !== a)) {
                var b = this.trigger("change", { property: { name: "position", value: a } });
                b.data !== d && (a = this.normalize(b.data)), (this._current = a), this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
            }
            return this._current;
        }),
        (e.prototype.invalidate = function (b) {
            return (
                "string" === a.type(b) && ((this._invalidated[b] = !0), this.is("valid") && this.leave("valid")),
                a.map(this._invalidated, function (a, b) {
                    return b;
                })
            );
        }),
        (e.prototype.reset = function (a) {
            (a = this.normalize(a)), a !== d && ((this._speed = 0), (this._current = a), this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
        }),
        (e.prototype.normalize = function (a, b) {
            var c = this._items.length,
                e = b ? 0 : this._clones.length;
            return !this.isNumeric(a) || c < 1 ? (a = d) : (a < 0 || a >= c + e) && (a = ((((a - e / 2) % c) + c) % c) + e / 2), a;
        }),
        (e.prototype.relative = function (a) {
            return (a -= this._clones.length / 2), this.normalize(a, !0);
        }),
        (e.prototype.maximum = function (a) {
            var b,
                c,
                d,
                e = this.settings,
                f = this._coordinates.length;
            if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
            else if (e.autoWidth || e.merge) {
                for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && ((c += this._items[b].width() + this.settings.margin), !(c > d)); );
                f = b + 1;
            } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
            return a && (f -= this._clones.length / 2), Math.max(f, 0);
        }),
        (e.prototype.minimum = function (a) {
            return a ? 0 : this._clones.length / 2;
        }),
        (e.prototype.items = function (a) {
            return a === d ? this._items.slice() : ((a = this.normalize(a, !0)), this._items[a]);
        }),
        (e.prototype.mergers = function (a) {
            return a === d ? this._mergers.slice() : ((a = this.normalize(a, !0)), this._mergers[a]);
        }),
        (e.prototype.clones = function (b) {
            var c = this._clones.length / 2,
                e = c + this._items.length,
                f = function (a) {
                    return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
                };
            return b === d
                ? a.map(this._clones, function (a, b) {
                      return f(b);
                  })
                : a.map(this._clones, function (a, c) {
                      return a === b ? f(c) : null;
                  });
        }),
        (e.prototype.speed = function (a) {
            return a !== d && (this._speed = a), this._speed;
        }),
        (e.prototype.coordinates = function (b) {
            var c,
                e = 1,
                f = b - 1;
            return b === d
                ? a.map(
                      this._coordinates,
                      a.proxy(function (a, b) {
                          return this.coordinates(b);
                      }, this)
                  )
                : (this.settings.center ? (this.settings.rtl && ((e = -1), (f = b + 1)), (c = this._coordinates[b]), (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e)) : (c = this._coordinates[f] || 0), (c = Math.ceil(c)));
        }),
        (e.prototype.duration = function (a, b, c) {
            return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
        }),
        (e.prototype.to = function (a, b) {
            var c = this.current(),
                d = null,
                e = a - this.relative(c),
                f = (e > 0) - (e < 0),
                g = this._items.length,
                h = this.minimum(),
                i = this.maximum();
            this.settings.loop
                ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), (a = c + e), (d = ((((a - h) % g) + g) % g) + h), d !== a && d - e <= i && d - e > 0 && ((c = d - e), (a = d), this.reset(c)))
                : this.settings.rewind
                ? ((i += 1), (a = ((a % i) + i) % i))
                : (a = Math.max(h, Math.min(i, a))),
                this.speed(this.duration(c, a, b)),
                this.current(a),
                this.$element.is(":visible") && this.update();
        }),
        (e.prototype.next = function (a) {
            (a = a || !1), this.to(this.relative(this.current()) + 1, a);
        }),
        (e.prototype.prev = function (a) {
            (a = a || !1), this.to(this.relative(this.current()) - 1, a);
        }),
        (e.prototype.onTransitionEnd = function (a) {
            if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
            this.leave("animating"), this.trigger("translated");
        }),
        (e.prototype.viewport = function () {
            var d;
            return (
                this.options.responsiveBaseElement !== b
                    ? (d = a(this.options.responsiveBaseElement).width())
                    : b.innerWidth
                    ? (d = b.innerWidth)
                    : c.documentElement && c.documentElement.clientWidth
                    ? (d = c.documentElement.clientWidth)
                    : console.warn("Can not detect viewport width."),
                d
            );
        }),
        (e.prototype.replace = function (b) {
            this.$stage.empty(),
                (this._items = []),
                b && (b = b instanceof jQuery ? b : a(b)),
                this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
                b
                    .filter(function () {
                        return 1 === this.nodeType;
                    })
                    .each(
                        a.proxy(function (a, b) {
                            (b = this.prepare(b)), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
                        }, this)
                    ),
                this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                this.invalidate("items");
        }),
        (e.prototype.add = function (b, c) {
            var e = this.relative(this._current);
            (c = c === d ? this._items.length : this.normalize(c, !0)),
                (b = b instanceof jQuery ? b : a(b)),
                this.trigger("add", { content: b, position: c }),
                (b = this.prepare(b)),
                0 === this._items.length || c === this._items.length
                    ? (0 === this._items.length && this.$stage.append(b),
                      0 !== this._items.length && this._items[c - 1].after(b),
                      this._items.push(b),
                      this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1))
                    : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
                this._items[e] && this.reset(this._items[e].index()),
                this.invalidate("items"),
                this.trigger("added", { content: b, position: c });
        }),
        (e.prototype.remove = function (a) {
            (a = this.normalize(a, !0)),
                a !== d &&
                    (this.trigger("remove", { content: this._items[a], position: a }),
                    this._items[a].remove(),
                    this._items.splice(a, 1),
                    this._mergers.splice(a, 1),
                    this.invalidate("items"),
                    this.trigger("removed", { content: null, position: a }));
        }),
        (e.prototype.preloadAutoWidthImages = function (b) {
            b.each(
                a.proxy(function (b, c) {
                    this.enter("pre-loading"),
                        (c = a(c)),
                        a(new Image())
                            .one(
                                "load",
                                a.proxy(function (a) {
                                    c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
                                }, this)
                            )
                            .attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
                }, this)
            );
        }),
        (e.prototype.destroy = function () {
            this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
            for (var d in this._plugins) this._plugins[d].destroy();
            this.$stage.children(".cloned").remove(),
                this.$stage.unwrap(),
                this.$stage.children().contents().unwrap(),
                this.$stage.children().unwrap(),
                this.$element
                    .removeClass(this.options.refreshClass)
                    .removeClass(this.options.loadingClass)
                    .removeClass(this.options.loadedClass)
                    .removeClass(this.options.rtlClass)
                    .removeClass(this.options.dragClass)
                    .removeClass(this.options.grabClass)
                    .attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), ""))
                    .removeData("owl.carousel");
        }),
        (e.prototype.op = function (a, b, c) {
            var d = this.settings.rtl;
            switch (b) {
                case "<":
                    return d ? a > c : a < c;
                case ">":
                    return d ? a < c : a > c;
                case ">=":
                    return d ? a <= c : a >= c;
                case "<=":
                    return d ? a >= c : a <= c;
            }
        }),
        (e.prototype.on = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
        }),
        (e.prototype.off = function (a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
        }),
        (e.prototype.trigger = function (b, c, d, f, g) {
            var h = { item: { count: this._items.length, index: this.current() } },
                i = a.camelCase(
                    a
                        .grep(["on", b, d], function (a) {
                            return a;
                        })
                        .join("-")
                        .toLowerCase()
                ),
                j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c));
            return (
                this._supress[b] ||
                    (a.each(this._plugins, function (a, b) {
                        b.onTrigger && b.onTrigger(j);
                    }),
                    this.register({ type: e.Type.Event, name: b }),
                    this.$element.trigger(j),
                    this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
                j
            );
        }),
        (e.prototype.enter = function (b) {
            a.each(
                [b].concat(this._states.tags[b] || []),
                a.proxy(function (a, b) {
                    this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
                }, this)
            );
        }),
        (e.prototype.leave = function (b) {
            a.each(
                [b].concat(this._states.tags[b] || []),
                a.proxy(function (a, b) {
                    this._states.current[b]--;
                }, this)
            );
        }),
        (e.prototype.register = function (b) {
            if (b.type === e.Type.Event) {
                if ((a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl)) {
                    var c = a.event.special[b.name]._default;
                    (a.event.special[b.name]._default = function (a) {
                        return !c || !c.apply || (a.namespace && a.namespace.indexOf("owl") !== -1) ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
                    }),
                        (a.event.special[b.name].owl = !0);
                }
            } else
                b.type === e.Type.State &&
                    (this._states.tags[b.name] ? (this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags)) : (this._states.tags[b.name] = b.tags),
                    (this._states.tags[b.name] = a.grep(
                        this._states.tags[b.name],
                        a.proxy(function (c, d) {
                            return a.inArray(c, this._states.tags[b.name]) === d;
                        }, this)
                    )));
        }),
        (e.prototype.suppress = function (b) {
            a.each(
                b,
                a.proxy(function (a, b) {
                    this._supress[b] = !0;
                }, this)
            );
        }),
        (e.prototype.release = function (b) {
            a.each(
                b,
                a.proxy(function (a, b) {
                    delete this._supress[b];
                }, this)
            );
        }),
        (e.prototype.pointer = function (a) {
            var c = { x: null, y: null };
            return (
                (a = a.originalEvent || a || b.event),
                (a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a),
                a.pageX ? ((c.x = a.pageX), (c.y = a.pageY)) : ((c.x = a.clientX), (c.y = a.clientY)),
                c
            );
        }),
        (e.prototype.isNumeric = function (a) {
            return !isNaN(parseFloat(a));
        }),
        (e.prototype.difference = function (a, b) {
            return { x: a.x - b.x, y: a.y - b.y };
        }),
        (a.fn.owlCarousel = function (b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                var d = a(this),
                    f = d.data("owl.carousel");
                f ||
                    ((f = new e(this, "object" == typeof b && b)),
                    d.data("owl.carousel", f),
                    a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
                        f.register({ type: e.Type.Event, name: c }),
                            f.$element.on(
                                c + ".owl.carousel.core",
                                a.proxy(function (a) {
                                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
                                }, f)
                            );
                    })),
                    "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
            });
        }),
        (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._interval = null),
                (this._visible = null),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoRefresh && this.watch();
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
            (e.prototype.watch = function () {
                this._interval || ((this._visible = this._core.$element.is(":visible")), (this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));
            }),
            (e.prototype.refresh = function () {
                this._core.$element.is(":visible") !== this._visible &&
                    ((this._visible = !this._visible), this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
            }),
            (e.prototype.destroy = function () {
                var a, c;
                b.clearInterval(this._interval);
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._loaded = []),
                (this._handlers = {
                    "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
                        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && ((b.property && "position" == b.property.name) || "initialized" == b.type))
                            for (
                                var c = this._core.settings,
                                    e = (c.center && Math.ceil(c.items / 2)) || c.items,
                                    f = (c.center && e * -1) || 0,
                                    g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
                                    h = this._core.clones().length,
                                    i = a.proxy(function (a, b) {
                                        this.load(b);
                                    }, this);
                                f++ < e;

                            )
                                this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (e.Defaults = { lazyLoad: !1 }),
            (e.prototype.load = function (c) {
                var d = this._core.$stage.children().eq(c),
                    e = d && d.find(".owl-lazy");
                !e ||
                    a.inArray(d.get(0), this._loaded) > -1 ||
                    (e.each(
                        a.proxy(function (c, d) {
                            var e,
                                f = a(d),
                                g = (b.devicePixelRatio > 1 && f.attr("data-src-retina")) || f.attr("data-src");
                            this._core.trigger("load", { element: f, url: g }, "lazy"),
                                f.is("img")
                                    ? f
                                          .one(
                                              "load.owl.lazy",
                                              a.proxy(function () {
                                                  f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                              }, this)
                                          )
                                          .attr("src", g)
                                    : ((e = new Image()),
                                      (e.onload = a.proxy(function () {
                                          f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                      }, this)),
                                      (e.src = g));
                        }, this)
                    ),
                    this._loaded.push(d.get(0)));
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._handlers = {
                    "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoHeight && this.update();
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update();
                    }, this),
                    "loaded.owl.lazy": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
            (e.prototype.update = function () {
                var b = this._core._current,
                    c = b + this._core.settings.items,
                    d = this._core.$stage.children().toArray().slice(b, c),
                    e = [],
                    f = 0;
                a.each(d, function (b, c) {
                    e.push(a(c).height());
                }),
                    (f = Math.max.apply(null, e)),
                    this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass);
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._videos = {}),
                (this._playing = null),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
                    }, this),
                    "resize.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && "position" === a.property.name && this._playing && this.stop();
                    }, this),
                    "prepared.owl.carousel": a.proxy(function (b) {
                        if (b.namespace) {
                            var c = a(b.content).find(".owl-video");
                            c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
                        }
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                this._core.$element.on(
                    "click.owl.video",
                    ".owl-video-play-icon",
                    a.proxy(function (a) {
                        this.play(a);
                    }, this)
                );
        };
        (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
            (e.prototype.fetch = function (a, b) {
                var c = (function () {
                        return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
                    })(),
                    d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
                    e = a.attr("data-width") || this._core.settings.videoWidth,
                    f = a.attr("data-height") || this._core.settings.videoHeight,
                    g = a.attr("href");
                if (!g) throw new Error("Missing video URL.");
                if (
                    ((d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/)),
                    d[3].indexOf("youtu") > -1)
                )
                    c = "youtube";
                else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
                else {
                    if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                    c = "vzaar";
                }
                (d = d[6]), (this._videos[g] = { type: c, id: d, width: e, height: f }), b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
            }),
            (e.prototype.thumbnail = function (b, c) {
                var d,
                    e,
                    f,
                    g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
                    h = b.find("img"),
                    i = "src",
                    j = "",
                    k = this._core.settings,
                    l = function (a) {
                        (e = '<div class="owl-video-play-icon"></div>'),
                            (d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>'),
                            b.after(d),
                            b.after(e);
                    };
                if ((b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")), h.length)) return l(h.attr(i)), h.remove(), !1;
                "youtube" === c.type
                    ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f))
                    : "vimeo" === c.type
                    ? a.ajax({
                          type: "GET",
                          url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (a) {
                              (f = a[0].thumbnail_large), l(f);
                          },
                      })
                    : "vzaar" === c.type &&
                      a.ajax({
                          type: "GET",
                          url: "//vzaar.com/api/videos/" + c.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (a) {
                              (f = a.framegrab_url), l(f);
                          },
                      });
            }),
            (e.prototype.stop = function () {
                this._core.trigger("stop", null, "video"),
                    this._playing.find(".owl-video-frame").remove(),
                    this._playing.removeClass("owl-video-playing"),
                    (this._playing = null),
                    this._core.leave("playing"),
                    this._core.trigger("stopped", null, "video");
            }),
            (e.prototype.play = function (b) {
                var c,
                    d = a(b.target),
                    e = d.closest("." + this._core.settings.itemClass),
                    f = this._videos[e.attr("data-video")],
                    g = f.width || "100%",
                    h = f.height || this._core.$stage.height();
                this._playing ||
                    (this._core.enter("playing"),
                    this._core.trigger("play", null, "video"),
                    (e = this._core.items(this._core.relative(e.index()))),
                    this._core.reset(e.index()),
                    "youtube" === f.type
                        ? (c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>')
                        : "vimeo" === f.type
                        ? (c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" Winkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
                        : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen WinkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'),
                    a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")),
                    (this._playing = e.addClass("owl-video-playing")));
            }),
            (e.prototype.isInFullScreen = function () {
                var b = c.fullscreenElement || c.mozFullScreenElement || c.WinkitFullscreenElement;
                return b && a(b).parent().hasClass("owl-video-frame");
            }),
            (e.prototype.destroy = function () {
                var a, b;
                this._core.$element.off("click.owl.video");
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Video = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this.core = b),
                (this.core.options = a.extend({}, e.Defaults, this.core.options)),
                (this.swapping = !0),
                (this.previous = d),
                (this.next = d),
                (this.handlers = {
                    "change.owl.carousel": a.proxy(function (a) {
                        a.namespace && "position" == a.property.name && ((this.previous = this.core.current()), (this.next = a.property.value));
                    }, this),
                    "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                        a.namespace && (this.swapping = "translated" == a.type);
                    }, this),
                    "translate.owl.carousel": a.proxy(function (a) {
                        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
                    }, this),
                }),
                this.core.$element.on(this.handlers);
        };
        (e.Defaults = { animateOut: !1, animateIn: !1 }),
            (e.prototype.swap = function () {
                if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                    this.core.speed(0);
                    var b,
                        c = a.proxy(this.clear, this),
                        d = this.core.$stage.children().eq(this.previous),
                        e = this.core.$stage.children().eq(this.next),
                        f = this.core.settings.animateIn,
                        g = this.core.settings.animateOut;
                    this.core.current() !== this.previous &&
                        (g &&
                            ((b = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
                            d
                                .one(a.support.animation.end, c)
                                .css({ left: b + "px" })
                                .addClass("animated owl-animated-out")
                                .addClass(g)),
                        f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
                }
            }),
            (e.prototype.clear = function (b) {
                a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._timeout = null),
                (this._paused = !1),
                (this._handlers = {
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && "settings" === a.property.name
                            ? this._core.settings.autoplay
                                ? this.play()
                                : this.stop()
                            : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval();
                    }, this),
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoplay && this.play();
                    }, this),
                    "play.owl.autoplay": a.proxy(function (a, b, c) {
                        a.namespace && this.play(b, c);
                    }, this),
                    "stop.owl.autoplay": a.proxy(function (a) {
                        a.namespace && this.stop();
                    }, this),
                    "mouseover.owl.autoplay": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "mouseleave.owl.autoplay": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
                    }, this),
                    "touchstart.owl.core": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "touchend.owl.core": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this.play();
                    }, this),
                }),
                this._core.$element.on(this._handlers),
                (this._core.options = a.extend({}, e.Defaults, this._core.options));
        };
        (e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),
            (e.prototype.play = function (a, b) {
                (this._paused = !1), this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval());
            }),
            (e.prototype._getNextTimeout = function (d, e) {
                return (
                    this._timeout && b.clearTimeout(this._timeout),
                    b.setTimeout(
                        a.proxy(function () {
                            this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed);
                        }, this),
                        d || this._core.settings.autoplayTimeout
                    )
                );
            }),
            (e.prototype._setAutoPlayInterval = function () {
                this._timeout = this._getNextTimeout();
            }),
            (e.prototype.stop = function () {
                this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"));
            }),
            (e.prototype.pause = function () {
                this._core.is("rotating") && (this._paused = !0);
            }),
            (e.prototype.destroy = function () {
                var a, b;
                this.stop();
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        "use strict";
        var e = function (b) {
            (this._core = b),
                (this._initialized = !1),
                (this._pages = []),
                (this._controls = {}),
                (this._templates = []),
                (this.$element = this._core.$element),
                (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
                (this._handlers = {
                    "prepared.owl.carousel": a.proxy(function (b) {
                        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
                    }, this),
                    "added.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
                    }, this),
                    "remove.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && "position" == a.property.name && this.draw();
                    }, this),
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                            !this._initialized &&
                            (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), (this._initialized = !0), this._core.trigger("initialized", null, "navigation"));
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this.$element.on(this._handlers);
        };
        (e.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
        }),
            (e.prototype.initialize = function () {
                var b,
                    c = this._core.settings;
                (this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled")),
                    (this._controls.$previous = a("<" + c.navElement + ">")
                        .addClass(c.navClass[0])
                        .html(c.navText[0])
                        .prependTo(this._controls.$relative)
                        .on(
                            "click",
                            a.proxy(function (a) {
                                this.prev(c.navSpeed);
                            }, this)
                        )),
                    (this._controls.$next = a("<" + c.navElement + ">")
                        .addClass(c.navClass[1])
                        .html(c.navText[1])
                        .appendTo(this._controls.$relative)
                        .on(
                            "click",
                            a.proxy(function (a) {
                                this.next(c.navSpeed);
                            }, this)
                        )),
                    c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),
                    (this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled")),
                    this._controls.$absolute.on(
                        "click",
                        "div",
                        a.proxy(function (b) {
                            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
                            b.preventDefault(), this.to(d, c.dotsSpeed);
                        }, this)
                    );
                for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
            }),
            (e.prototype.destroy = function () {
                var a, b, c, d;
                for (a in this._handlers) this.$element.off(a, this._handlers[a]);
                for (b in this._controls) this._controls[b].remove();
                for (d in this.overides) this._core[d] = this._overrides[d];
                for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
            }),
            (e.prototype.update = function () {
                var a,
                    b,
                    c,
                    d = this._core.clones().length / 2,
                    e = d + this._core.items().length,
                    f = this._core.maximum(!0),
                    g = this._core.settings,
                    h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
                if (("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy))
                    for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                        if (b >= h || 0 === b) {
                            if ((this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f)) break;
                            (b = 0), ++c;
                        }
                        b += this._core.mergers(this._core.relative(a));
                    }
            }),
            (e.prototype.draw = function () {
                var b,
                    c = this._core.settings,
                    d = this._core.items().length <= c.items,
                    e = this._core.relative(this._core.current()),
                    f = c.loop || c.rewind;
                this._controls.$relative.toggleClass("disabled", !c.nav || d),
                    c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
                    this._controls.$absolute.toggleClass("disabled", !c.dots || d),
                    c.dots &&
                        ((b = this._pages.length - this._controls.$absolute.children().length),
                        c.dotsData && 0 !== b
                            ? this._controls.$absolute.html(this._templates.join(""))
                            : b > 0
                            ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0]))
                            : b < 0 && this._controls.$absolute.children().slice(b).remove(),
                        this._controls.$absolute.find(".active").removeClass("active"),
                        this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
            }),
            (e.prototype.onTrigger = function (b) {
                var c = this._core.settings;
                b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) };
            }),
            (e.prototype.current = function () {
                var b = this._core.relative(this._core.current());
                return a
                    .grep(
                        this._pages,
                        a.proxy(function (a, c) {
                            return a.start <= b && a.end >= b;
                        }, this)
                    )
                    .pop();
            }),
            (e.prototype.getPosition = function (b) {
                var c,
                    d,
                    e = this._core.settings;
                return (
                    "page" == e.slideBy
                        ? ((c = a.inArray(this.current(), this._pages)), (d = this._pages.length), b ? ++c : --c, (c = this._pages[((c % d) + d) % d].start))
                        : ((c = this._core.relative(this._core.current())), (d = this._core.items().length), b ? (c += e.slideBy) : (c -= e.slideBy)),
                    c
                );
            }),
            (e.prototype.next = function (b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
            }),
            (e.prototype.prev = function (b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
            }),
            (e.prototype.to = function (b, c, d) {
                var e;
                !d && this._pages.length ? ((e = this._pages.length), a.proxy(this._overrides.to, this._core)(this._pages[((b % e) + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        "use strict";
        var e = function (c) {
            (this._core = c),
                (this._hashes = {}),
                (this.$element = this._core.$element),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (c) {
                        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
                    }, this),
                    "prepared.owl.carousel": a.proxy(function (b) {
                        if (b.namespace) {
                            var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                            if (!c) return;
                            this._hashes[c] = b.content;
                        }
                    }, this),
                    "changed.owl.carousel": a.proxy(function (c) {
                        if (c.namespace && "position" === c.property.name) {
                            var d = this._core.items(this._core.relative(this._core.current())),
                                e = a
                                    .map(this._hashes, function (a, b) {
                                        return a === d ? b : null;
                                    })
                                    .join();
                            if (!e || b.location.hash.slice(1) === e) return;
                            b.location.hash = e;
                        }
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this.$element.on(this._handlers),
                a(b).on(
                    "hashchange.owl.navigation",
                    a.proxy(function (a) {
                        var c = b.location.hash.substring(1),
                            e = this._core.$stage.children(),
                            f = this._hashes[c] && e.index(this._hashes[c]);
                        f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
                    }, this)
                );
        };
        (e.Defaults = { URLhashListener: !1 }),
            (e.prototype.destroy = function () {
                var c, d;
                a(b).off("hashchange.owl.navigation");
                for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
                for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        function e(b, c) {
            var e = !1,
                f = b.charAt(0).toUpperCase() + b.slice(1);
            return (
                a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
                    if (g[b] !== d) return (e = !c || b), !1;
                }),
                e
            );
        }
        function f(a) {
            return e(a, !0);
        }
        var g = a("<support>").get(0).style,
            h = "Winkit Moz O ms".split(" "),
            i = {
                transition: { end: { WinkitTransition: "WinkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } },
                animation: { end: { WinkitAnimation: "WinkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } },
            },
            j = {
                csstransforms: function () {
                    return !!e("transform");
                },
                csstransforms3d: function () {
                    return !!e("perspective");
                },
                csstransitions: function () {
                    return !!e("transition");
                },
                cssanimations: function () {
                    return !!e("animation");
                },
            };
        j.csstransitions() && ((a.support.transition = new String(f("transition"))), (a.support.transition.end = i.transition.end[a.support.transition])),
            j.cssanimations() && ((a.support.animation = new String(f("animation"))), (a.support.animation.end = i.animation.end[a.support.animation])),
            j.csstransforms() && ((a.support.transform = new String(f("transform"))), (a.support.transform3d = j.csstransforms3d()));
    })(window.Zepto || window.jQuery, window, document);

/* ========================
	rangeslider
========================= */
!(function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery);
})(function (e) {
    var t, i, s, n;
    function a(t, i) {
        var s,
            n,
            a,
            u = t.nodeName.toLowerCase();
        return "area" === u
            ? ((n = (s = t.parentNode).name), !(!t.href || !n || "map" !== s.nodeName.toLowerCase()) && !!(a = e("img[usemap='#" + n + "']")[0]) && o(a))
            : (/^(input|select|textarea|button|object)$/.test(u) ? !t.disabled : ("a" === u && t.href) || i) && o(t);
    }
    function o(t) {
        return (
            e.expr.filters.visible(t) &&
            !e(t)
                .parents()
                .addBack()
                .filter(function () {
                    return "hidden" === e.css(this, "visibility");
                }).length
        );
    }
    (e.ui = e.ui || {}),
        e.extend(e.ui, { version: "1.11.4", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }),
        e.fn.extend({
            scrollParent: function (t) {
                var i = this.css("position"),
                    s = "absolute" === i,
                    n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    a = this.parents()
                        .filter(function () {
                            var t = e(this);
                            return (!s || "static" !== t.css("position")) && n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"));
                        })
                        .eq(0);
                return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document);
            },
            uniqueId:
                ((t = 0),
                function () {
                    return this.each(function () {
                        this.id || (this.id = "ui-id-" + ++t);
                    });
                }),
            removeUniqueId: function () {
                return this.each(function () {
                    /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id");
                });
            },
        }),
        e.extend(e.expr[":"], {
            data: e.expr.createPseudo
                ? e.expr.createPseudo(function (t) {
                      return function (i) {
                          return !!e.data(i, t);
                      };
                  })
                : function (t, i, s) {
                      return !!e.data(t, s[3]);
                  },
            focusable: function (t) {
                return a(t, !isNaN(e.attr(t, "tabindex")));
            },
            tabbable: function (t) {
                var i = e.attr(t, "tabindex"),
                    s = isNaN(i);
                return (s || i >= 0) && a(t, !s);
            },
        }),
        e("<a>").outerWidth(1).jquery ||
            e.each(["Width", "Height"], function (t, i) {
                var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                    n = i.toLowerCase(),
                    a = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight };
                function o(t, i, n, a) {
                    return (
                        e.each(s, function () {
                            (i -= parseFloat(e.css(t, "padding" + this)) || 0), n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0);
                        }),
                        i
                    );
                }
                (e.fn["inner" + i] = function (t) {
                    return void 0 === t
                        ? a["inner" + i].call(this)
                        : this.each(function () {
                              e(this).css(n, o(this, t) + "px");
                          });
                }),
                    (e.fn["outer" + i] = function (t, s) {
                        return "number" != typeof t
                            ? a["outer" + i].call(this, t)
                            : this.each(function () {
                                  e(this).css(n, o(this, t, !0, s) + "px");
                              });
                    });
            }),
        e.fn.addBack ||
            (e.fn.addBack = function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            }),
        e("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
            (e.fn.removeData =
                ((i = e.fn.removeData),
                function (t) {
                    return arguments.length ? i.call(this, e.camelCase(t)) : i.call(this);
                })),
        (e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
        e.fn.extend({
            focus:
                ((n = e.fn.focus),
                function (t, i) {
                    return "number" == typeof t
                        ? this.each(function () {
                              var s = this;
                              setTimeout(function () {
                                  e(s).focus(), i && i.call(s);
                              }, t);
                          })
                        : n.apply(this, arguments);
                }),
            disableSelection:
                ((s = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"),
                function () {
                    return this.bind(s + ".ui-disableSelection", function (e) {
                        e.preventDefault();
                    });
                }),
            enableSelection: function () {
                return this.unbind(".ui-disableSelection");
            },
            zIndex: function (t) {
                if (void 0 !== t) return this.css("zIndex", t);
                if (this.length)
                    for (var i, s, n = e(this[0]); n.length && n[0] !== document; ) {
                        if (("absolute" === (i = n.css("position")) || "relative" === i || "fixed" === i) && ((s = parseInt(n.css("zIndex"), 10)), !isNaN(s) && 0 !== s)) return s;
                        n = n.parent();
                    }
                return 0;
            },
        }),
        (e.ui.plugin = {
            add: function (t, i, s) {
                var n,
                    a = e.ui[t].prototype;
                for (n in s) (a.plugins[n] = a.plugins[n] || []), a.plugins[n].push([i, s[n]]);
            },
            call: function (e, t, i, s) {
                var n,
                    a = e.plugins[t];
                if (a && (s || (e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))) for (n = 0; n < a.length; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i);
            },
        });
    var u = 0,
        r = Array.prototype.slice;
    (e.cleanData = (function (t) {
        return function (i) {
            var s, n, a;
            for (a = 0; null != (n = i[a]); a++)
                try {
                    (s = e._data(n, "events")) && s.remove && e(n).triggerHandler("remove");
                } catch (e) {}
            t(i);
        };
    })(e.cleanData)),
        (e.widget = function (t, i, s) {
            var n,
                a,
                o,
                u,
                r = {},
                h = t.split(".")[0];
            return (
                (t = t.split(".")[1]),
                (n = h + "-" + t),
                s || ((s = i), (i = e.Widget)),
                (e.expr[":"][n.toLowerCase()] = function (t) {
                    return !!e.data(t, n);
                }),
                (e[h] = e[h] || {}),
                (a = e[h][t]),
                (o = e[h][t] = function (e, t) {
                    if (!this._createWidget) return new o(e, t);
                    arguments.length && this._createWidget(e, t);
                }),
                e.extend(o, a, { version: s.version, _proto: e.extend({}, s), _childConstructors: [] }),
                ((u = new i()).options = e.widget.extend({}, u.options)),
                e.each(s, function (t, s) {
                    var n, a;
                    e.isFunction(s)
                        ? (r[t] =
                              ((n = function () {
                                  return i.prototype[t].apply(this, arguments);
                              }),
                              (a = function (e) {
                                  return i.prototype[t].apply(this, e);
                              }),
                              function () {
                                  var e,
                                      t = this._super,
                                      i = this._superApply;
                                  return (this._super = n), (this._superApply = a), (e = s.apply(this, arguments)), (this._super = t), (this._superApply = i), e;
                              }))
                        : (r[t] = s);
                }),
                (o.prototype = e.widget.extend(u, { widgetEventPrefix: (a && u.widgetEventPrefix) || t }, r, { constructor: o, namespace: h, widgetName: t, widgetFullName: n })),
                a
                    ? (e.each(a._childConstructors, function (t, i) {
                          var s = i.prototype;
                          e.widget(s.namespace + "." + s.widgetName, o, i._proto);
                      }),
                      delete a._childConstructors)
                    : i._childConstructors.push(o),
                e.widget.bridge(t, o),
                o
            );
        }),
        (e.widget.extend = function (t) {
            for (var i, s, n = r.call(arguments, 1), a = 0, o = n.length; a < o; a++)
                for (i in n[a]) (s = n[a][i]), n[a].hasOwnProperty(i) && void 0 !== s && (e.isPlainObject(s) ? (t[i] = e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s)) : (t[i] = s));
            return t;
        }),
        (e.widget.bridge = function (t, i) {
            var s = i.prototype.widgetFullName || t;
            e.fn[t] = function (n) {
                var a = "string" == typeof n,
                    o = r.call(arguments, 1),
                    u = this;
                return (
                    a
                        ? this.each(function () {
                              var i,
                                  a = e.data(this, s);
                              return "instance" === n
                                  ? ((u = a), !1)
                                  : a
                                  ? e.isFunction(a[n]) && "_" !== n.charAt(0)
                                      ? (i = a[n].apply(a, o)) !== a && void 0 !== i
                                          ? ((u = i && i.jquery ? u.pushStack(i.get()) : i), !1)
                                          : void 0
                                      : e.error("no such method '" + n + "' for " + t + " widget instance")
                                  : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + n + "'");
                          })
                        : (o.length && (n = e.widget.extend.apply(null, [n].concat(o))),
                          this.each(function () {
                              var t = e.data(this, s);
                              t ? (t.option(n || {}), t._init && t._init()) : e.data(this, s, new i(n, this));
                          })),
                    u
                );
            };
        }),
        (e.Widget = function () {}),
        (e.Widget._childConstructors = []),
        (e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: { disabled: !1, create: null },
            _createWidget: function (t, i) {
                (i = e(i || this.defaultElement || this)[0]),
                    (this.element = e(i)),
                    (this.uuid = u++),
                    (this.eventNamespace = "." + this.widgetName + this.uuid),
                    (this.bindings = e()),
                    (this.hoverable = e()),
                    (this.focusable = e()),
                    i !== this &&
                        (e.data(i, this.widgetFullName, this),
                        this._on(!0, this.element, {
                            remove: function (e) {
                                e.target === i && this.destroy();
                            },
                        }),
                        (this.document = e(i.style ? i.ownerDocument : i.document || i)),
                        (this.window = e(this.document[0].defaultView || this.document[0].parentWindow))),
                    (this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t)),
                    this._create(),
                    this._trigger("create", null, this._getCreateEventData()),
                    this._init();
            },
            _getCreateOptions: e.noop,
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function () {
                this._destroy(),
                    this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
                    this.widget()
                        .unbind(this.eventNamespace)
                        .removeAttr("aria-disabled")
                        .removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
                    this.bindings.unbind(this.eventNamespace),
                    this.hoverable.removeClass("ui-state-hover"),
                    this.focusable.removeClass("ui-state-focus");
            },
            _destroy: e.noop,
            widget: function () {
                return this.element;
            },
            option: function (t, i) {
                var s,
                    n,
                    a,
                    o = t;
                if (0 === arguments.length) return e.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (((o = {}), (s = t.split(".")), (t = s.shift()), s.length)) {
                        for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; a < s.length - 1; a++) (n[s[a]] = n[s[a]] || {}), (n = n[s[a]]);
                        if (((t = s.pop()), 1 === arguments.length)) return void 0 === n[t] ? null : n[t];
                        n[t] = i;
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                        o[t] = i;
                    }
                return this._setOptions(o), this;
            },
            _setOptions: function (e) {
                var t;
                for (t in e) this._setOption(t, e[t]);
                return this;
            },
            _setOption: function (e, t) {
                return (this.options[e] = t), "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this;
            },
            enable: function () {
                return this._setOptions({ disabled: !1 });
            },
            disable: function () {
                return this._setOptions({ disabled: !0 });
            },
            _on: function (t, i, s) {
                var n,
                    a = this;
                "boolean" != typeof t && ((s = i), (i = t), (t = !1)),
                    s ? ((i = n = e(i)), (this.bindings = this.bindings.add(i))) : ((s = i), (i = this.element), (n = this.widget())),
                    e.each(s, function (s, o) {
                        function u() {
                            if (t || (!0 !== a.options.disabled && !e(this).hasClass("ui-state-disabled"))) return ("string" == typeof o ? a[o] : o).apply(a, arguments);
                        }
                        "string" != typeof o && (u.guid = o.guid = o.guid || u.guid || e.guid++);
                        var r = s.match(/^([\w:-]*)\s*(.*)$/),
                            h = r[1] + a.eventNamespace,
                            l = r[2];
                        l ? n.delegate(l, h, u) : i.bind(h, u);
                    });
            },
            _off: function (t, i) {
                (i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace),
                    t.unbind(i).undelegate(i),
                    (this.bindings = e(this.bindings.not(t).get())),
                    (this.focusable = e(this.focusable.not(t).get())),
                    (this.hoverable = e(this.hoverable.not(t).get()));
            },
            _delay: function (e, t) {
                var i = this;
                return setTimeout(function () {
                    return ("string" == typeof e ? i[e] : e).apply(i, arguments);
                }, t || 0);
            },
            _hoverable: function (t) {
                (this.hoverable = this.hoverable.add(t)),
                    this._on(t, {
                        mouseenter: function (t) {
                            e(t.currentTarget).addClass("ui-state-hover");
                        },
                        mouseleave: function (t) {
                            e(t.currentTarget).removeClass("ui-state-hover");
                        },
                    });
            },
            _focusable: function (t) {
                (this.focusable = this.focusable.add(t)),
                    this._on(t, {
                        focusin: function (t) {
                            e(t.currentTarget).addClass("ui-state-focus");
                        },
                        focusout: function (t) {
                            e(t.currentTarget).removeClass("ui-state-focus");
                        },
                    });
            },
            _trigger: function (t, i, s) {
                var n,
                    a,
                    o = this.options[t];
                if (((s = s || {}), ((i = e.Event(i)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase()), (i.target = this.element[0]), (a = i.originalEvent))) for (n in a) n in i || (i[n] = a[n]);
                return this.element.trigger(i, s), !((e.isFunction(o) && !1 === o.apply(this.element[0], [i].concat(s))) || i.isDefaultPrevented());
            },
        }),
        e.each({ show: "fadeIn", hide: "fadeOut" }, function (t, i) {
            e.Widget.prototype["_" + t] = function (s, n, a) {
                "string" == typeof n && (n = { effect: n });
                var o,
                    u = n ? (!0 === n || "number" == typeof n ? i : n.effect || i) : t;
                "number" == typeof (n = n || {}) && (n = { duration: n }),
                    (o = !e.isEmptyObject(n)),
                    (n.complete = a),
                    n.delay && s.delay(n.delay),
                    o && e.effects && e.effects.effect[u]
                        ? s[t](n)
                        : u !== t && s[u]
                        ? s[u](n.duration, n.easing, a)
                        : s.queue(function (i) {
                              e(this)[t](), a && a.call(s[0]), i();
                          });
            };
        });
    e.widget;
    var h = !1;
    e(document).mouseup(function () {
        h = !1;
    });
    e.widget("ui.mouse", {
        version: "1.11.4",
        options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 },
        _mouseInit: function () {
            var t = this;
            this.element
                .bind("mousedown." + this.widgetName, function (e) {
                    return t._mouseDown(e);
                })
                .bind("click." + this.widgetName, function (i) {
                    if (!0 === e.data(i.target, t.widgetName + ".preventClickEvent")) return e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1;
                }),
                (this.started = !1);
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function (t) {
            if (!h) {
                (this._mouseMoved = !1), this._mouseStarted && this._mouseUp(t), (this._mouseDownEvent = t);
                var i = this,
                    s = 1 === t.which,
                    n = !("string" != typeof this.options.cancel || !t.target.nodeName) && e(t.target).closest(this.options.cancel).length;
                return (
                    !(s && !n && this._mouseCapture(t)) ||
                    ((this.mouseDelayMet = !this.options.delay),
                    this.mouseDelayMet ||
                        (this._mouseDelayTimer = setTimeout(function () {
                            i.mouseDelayMet = !0;
                        }, this.options.delay)),
                    this._mouseDistanceMet(t) && this._mouseDelayMet(t) && ((this._mouseStarted = !1 !== this._mouseStart(t)), !this._mouseStarted)
                        ? (t.preventDefault(), !0)
                        : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"),
                          (this._mouseMoveDelegate = function (e) {
                              return i._mouseMove(e);
                          }),
                          (this._mouseUpDelegate = function (e) {
                              return i._mouseUp(e);
                          }),
                          this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                          t.preventDefault(),
                          (h = !0),
                          !0))
                );
            }
        },
        _mouseMove: function (t) {
            if (this._mouseMoved) {
                if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                if (!t.which) return this._mouseUp(t);
            }
            return (
                (t.which || t.button) && (this._mouseMoved = !0),
                this._mouseStarted
                    ? (this._mouseDrag(t), t.preventDefault())
                    : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && ((this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t)), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
            );
        },
        _mouseUp: function (t) {
            return (
                this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
                this._mouseStarted && ((this._mouseStarted = !1), t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)),
                (h = !1),
                !1
            );
        },
        _mouseDistanceMet: function (e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet;
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return !0;
        },
    }),
        e.widget("ui.slider", e.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "slide",
            options: { animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null },
            numPages: 5,
            _create: function () {
                (this._keySliding = !1),
                    (this._mouseSliding = !1),
                    (this._animateOff = !0),
                    (this._handleIndex = null),
                    this._detectOrientation(),
                    this._mouseInit(),
                    this._calculateNewMax(),
                    this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"),
                    this._refresh(),
                    this._setOption("disabled", this.options.disabled),
                    (this._animateOff = !1);
            },
            _refresh: function () {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
            },
            _createHandles: function () {
                var t,
                    i,
                    s = this.options,
                    n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    a = [];
                for (i = (s.values && s.values.length) || 1, n.length > i && (n.slice(i).remove(), (n = n.slice(0, i))), t = n.length; t < i; t++) a.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>");
                (this.handles = n.add(e(a.join("")).appendTo(this.element))),
                    (this.handle = this.handles.eq(0)),
                    this.handles.each(function (t) {
                        e(this).data("ui-slider-handle-index", t);
                    });
            },
            _createRange: function () {
                var t = this.options,
                    i = "";
                t.range
                    ? (!0 === t.range &&
                          (t.values ? (t.values.length && 2 !== t.values.length ? (t.values = [t.values[0], t.values[0]]) : e.isArray(t.values) && (t.values = t.values.slice(0))) : (t.values = [this._valueMin(), this._valueMin()])),
                      this.range && this.range.length
                          ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({ left: "", bottom: "" })
                          : ((this.range = e("<div></div>").appendTo(this.element)), (i = "ui-slider-range ui-widget-header ui-corner-all")),
                      this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : "")))
                    : (this.range && this.range.remove(), (this.range = null));
            },
            _setupEvents: function () {
                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
            },
            _destroy: function () {
                this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy();
            },
            _mouseCapture: function (t) {
                var i,
                    s,
                    n,
                    a,
                    o,
                    u,
                    r,
                    h = this,
                    l = this.options;
                return (
                    !l.disabled &&
                    ((this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }),
                    (this.elementOffset = this.element.offset()),
                    (i = { x: t.pageX, y: t.pageY }),
                    (s = this._normValueFromMouse(i)),
                    (n = this._valueMax() - this._valueMin() + 1),
                    this.handles.each(function (t) {
                        var i = Math.abs(s - h.values(t));
                        (n > i || (n === i && (t === h._lastChangedValue || h.values(t) === l.min))) && ((n = i), (a = e(this)), (o = t));
                    }),
                    !1 !== this._start(t, o) &&
                        ((this._mouseSliding = !0),
                        (this._handleIndex = o),
                        a.addClass("ui-state-active").focus(),
                        (u = a.offset()),
                        (r = !e(t.target).parents().addBack().is(".ui-slider-handle")),
                        (this._clickOffset = r
                            ? { left: 0, top: 0 }
                            : {
                                  left: t.pageX - u.left - a.width() / 2,
                                  top: t.pageY - u.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0),
                              }),
                        this.handles.hasClass("ui-state-hover") || this._slide(t, o, s),
                        (this._animateOff = !0),
                        !0))
                );
            },
            _mouseStart: function () {
                return !0;
            },
            _mouseDrag: function (e) {
                var t = { x: e.pageX, y: e.pageY },
                    i = this._normValueFromMouse(t);
                return this._slide(e, this._handleIndex, i), !1;
            },
            _mouseStop: function (e) {
                return (
                    this.handles.removeClass("ui-state-active"),
                    (this._mouseSliding = !1),
                    this._stop(e, this._handleIndex),
                    this._change(e, this._handleIndex),
                    (this._handleIndex = null),
                    (this._clickOffset = null),
                    (this._animateOff = !1),
                    !1
                );
            },
            _detectOrientation: function () {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
            },
            _normValueFromMouse: function (e) {
                var t, i, s, n, a;
                return (
                    "horizontal" === this.orientation
                        ? ((t = this.elementSize.width), (i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)))
                        : ((t = this.elementSize.height), (i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0))),
                    (s = i / t) > 1 && (s = 1),
                    s < 0 && (s = 0),
                    "vertical" === this.orientation && (s = 1 - s),
                    (n = this._valueMax() - this._valueMin()),
                    (a = this._valueMin() + s * n),
                    this._trimAlignValue(a)
                );
            },
            _start: function (e, t) {
                var i = { handle: this.handles[t], value: this.value() };
                return this.options.values && this.options.values.length && ((i.value = this.values(t)), (i.values = this.values())), this._trigger("start", e, i);
            },
            _slide: function (e, t, i) {
                var s, n, a;
                this.options.values && this.options.values.length
                    ? ((s = this.values(t ? 0 : 1)),
                      2 === this.options.values.length && !0 === this.options.range && ((0 === t && i > s) || (1 === t && i < s)) && (i = s),
                      i !== this.values(t) && (((n = this.values())[t] = i), (a = this._trigger("slide", e, { handle: this.handles[t], value: i, values: n })), (s = this.values(t ? 0 : 1)), !1 !== a && this.values(t, i)))
                    : i !== this.value() && !1 !== (a = this._trigger("slide", e, { handle: this.handles[t], value: i })) && this.value(i);
            },
            _stop: function (e, t) {
                var i = { handle: this.handles[t], value: this.value() };
                this.options.values && this.options.values.length && ((i.value = this.values(t)), (i.values = this.values())), this._trigger("stop", e, i);
            },
            _change: function (e, t) {
                if (!this._keySliding && !this._mouseSliding) {
                    var i = { handle: this.handles[t], value: this.value() };
                    this.options.values && this.options.values.length && ((i.value = this.values(t)), (i.values = this.values())), (this._lastChangedValue = t), this._trigger("change", e, i);
                }
            },
            value: function (e) {
                return arguments.length ? ((this.options.value = this._trimAlignValue(e)), this._refreshValue(), void this._change(null, 0)) : this._value();
            },
            values: function (t, i) {
                var s, n, a;
                if (arguments.length > 1) return (this.options.values[t] = this._trimAlignValue(i)), this._refreshValue(), void this._change(null, t);
                if (!arguments.length) return this._values();
                if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
                for (s = this.options.values, n = arguments[0], a = 0; a < s.length; a += 1) (s[a] = this._trimAlignValue(n[a])), this._change(null, a);
                this._refreshValue();
            },
            _setOption: function (t, i) {
                var s,
                    n = 0;
                switch (
                    ("range" === t &&
                        !0 === this.options.range &&
                        ("min" === i ? ((this.options.value = this._values(0)), (this.options.values = null)) : "max" === i && ((this.options.value = this._values(this.options.values.length - 1)), (this.options.values = null))),
                    e.isArray(this.options.values) && (n = this.options.values.length),
                    "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i),
                    this._super(t, i),
                    t)
                ) {
                    case "orientation":
                        this._detectOrientation(),
                            this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
                            this._refreshValue(),
                            this.handles.css("horizontal" === i ? "bottom" : "left", "");
                        break;
                    case "value":
                        (this._animateOff = !0), this._refreshValue(), this._change(null, 0), (this._animateOff = !1);
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), s = 0; s < n; s += 1) this._change(null, s);
                        this._animateOff = !1;
                        break;
                    case "step":
                    case "min":
                    case "max":
                        (this._animateOff = !0), this._calculateNewMax(), this._refreshValue(), (this._animateOff = !1);
                        break;
                    case "range":
                        (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
                }
            },
            _value: function () {
                var e = this.options.value;
                return (e = this._trimAlignValue(e));
            },
            _values: function (e) {
                var t, i, s;
                if (arguments.length) return (t = this.options.values[e]), (t = this._trimAlignValue(t));
                if (this.options.values && this.options.values.length) {
                    for (i = this.options.values.slice(), s = 0; s < i.length; s += 1) i[s] = this._trimAlignValue(i[s]);
                    return i;
                }
                return [];
            },
            _trimAlignValue: function (e) {
                if (e <= this._valueMin()) return this._valueMin();
                if (e >= this._valueMax()) return this._valueMax();
                var t = this.options.step > 0 ? this.options.step : 1,
                    i = (e - this._valueMin()) % t,
                    s = e - i;
                return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5));
            },
            _calculateNewMax: function () {
                var e = this.options.max,
                    t = this._valueMin(),
                    i = this.options.step;
                (e = Math.floor(+(e - t).toFixed(this._precision()) / i) * i + t), (this.max = parseFloat(e.toFixed(this._precision())));
            },
            _precision: function () {
                var e = this._precisionOf(this.options.step);
                return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e;
            },
            _precisionOf: function (e) {
                var t = e.toString(),
                    i = t.indexOf(".");
                return -1 === i ? 0 : t.length - i - 1;
            },
            _valueMin: function () {
                return this.options.min;
            },
            _valueMax: function () {
                return this.max;
            },
            _refreshValue: function () {
                var t,
                    i,
                    s,
                    n,
                    a,
                    o = this.options.range,
                    u = this.options,
                    r = this,
                    h = !this._animateOff && u.animate,
                    l = {};
                this.options.values && this.options.values.length
                    ? this.handles.each(function (s) {
                          (i = ((r.values(s) - r._valueMin()) / (r._valueMax() - r._valueMin())) * 100),
                              (l["horizontal" === r.orientation ? "left" : "bottom"] = i + "%"),
                              e(this).stop(1, 1)[h ? "animate" : "css"](l, u.animate),
                              !0 === r.options.range &&
                                  ("horizontal" === r.orientation
                                      ? (0 === s && r.range.stop(1, 1)[h ? "animate" : "css"]({ left: i + "%" }, u.animate), 1 === s && r.range[h ? "animate" : "css"]({ width: i - t + "%" }, { queue: !1, duration: u.animate }))
                                      : (0 === s && r.range.stop(1, 1)[h ? "animate" : "css"]({ bottom: i + "%" }, u.animate), 1 === s && r.range[h ? "animate" : "css"]({ height: i - t + "%" }, { queue: !1, duration: u.animate }))),
                              (t = i);
                      })
                    : ((s = this.value()),
                      (n = this._valueMin()),
                      (a = this._valueMax()),
                      (i = a !== n ? ((s - n) / (a - n)) * 100 : 0),
                      (l["horizontal" === this.orientation ? "left" : "bottom"] = i + "%"),
                      this.handle.stop(1, 1)[h ? "animate" : "css"](l, u.animate),
                      "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ width: i + "%" }, u.animate),
                      "max" === o && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({ width: 100 - i + "%" }, { queue: !1, duration: u.animate }),
                      "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ height: i + "%" }, u.animate),
                      "max" === o && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({ height: 100 - i + "%" }, { queue: !1, duration: u.animate }));
            },
            _handleEvents: {
                keydown: function (t) {
                    var i,
                        s,
                        n,
                        a = e(t.target).data("ui-slider-handle-index");
                    switch (t.keyCode) {
                        case e.ui.keyCode.HOME:
                        case e.ui.keyCode.END:
                        case e.ui.keyCode.PAGE_UP:
                        case e.ui.keyCode.PAGE_DOWN:
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if ((t.preventDefault(), !this._keySliding && ((this._keySliding = !0), e(t.target).addClass("ui-state-active"), !1 === this._start(t, a)))) return;
                    }
                    switch (((n = this.options.step), (i = s = this.options.values && this.options.values.length ? this.values(a) : this.value()), t.keyCode)) {
                        case e.ui.keyCode.HOME:
                            s = this._valueMin();
                            break;
                        case e.ui.keyCode.END:
                            s = this._valueMax();
                            break;
                        case e.ui.keyCode.PAGE_UP:
                            s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case e.ui.keyCode.PAGE_DOWN:
                            s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                            if (i === this._valueMax()) return;
                            s = this._trimAlignValue(i + n);
                            break;
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if (i === this._valueMin()) return;
                            s = this._trimAlignValue(i - n);
                    }
                    this._slide(t, a, s);
                },
                keyup: function (t) {
                    var i = e(t.target).data("ui-slider-handle-index");
                    this._keySliding && ((this._keySliding = !1), this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"));
                },
            },
        });
});

/* ========================
	lightgallery.js
========================= */
/*! lightgallery - v1.6.12 - 2019-02-19
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2019 Sachin N; Licensed GPLv3 */
!(function (a, b) {
    "function" == typeof define && define.amd
        ? define(["jquery"], function (a) {
              return b(a);
          })
        : "object" == typeof module && module.exports
        ? (module.exports = b(require("jquery")))
        : b(a.jQuery);
})(this, function (a) {
    !(function () {
        "use strict";
        function b(b, d) {
            if (((this.el = b), (this.$el = a(b)), (this.s = a.extend({}, c, d)), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length))
                throw "When using dynamic mode, you must also define dynamicEl as an Array.";
            return (
                (this.modules = {}),
                (this.lGalleryOn = !1),
                (this.lgBusy = !1),
                (this.hideBartimeout = !1),
                (this.isTouch = "ontouchstart" in document.documentElement),
                this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
                this.s.dynamic
                    ? (this.$items = this.s.dynamicEl)
                    : "this" === this.s.selector
                    ? (this.$items = this.$el)
                    : "" !== this.s.selector
                    ? this.s.selectWithin
                        ? (this.$items = a(this.s.selectWithin).find(this.s.selector))
                        : (this.$items = this.$el.find(a(this.s.selector)))
                    : (this.$items = this.$el.children()),
                (this.$slide = ""),
                (this.$outer = ""),
                this.init(),
                this
            );
        }
        var c = {
            mode: "lg-slide",
            cssEasing: "ease",
            easing: "linear",
            speed: 600,
            height: "100%",
            width: "100%",
            addClass: "",
            startClass: "lg-start-zoom",
            backdropDuration: 150,
            hideBarsDelay: 6e3,
            useLeft: !1,
            closable: !0,
            loop: !0,
            escKey: !0,
            keyPress: !0,
            controls: !0,
            slideEndAnimatoin: !0,
            hideControlOnEnd: !1,
            mousewheel: !0,
            getCaptionFromTitleOrAlt: !0,
            appendSubHtmlTo: ".lg-sub-html",
            subHtmlSelectorRelative: !1,
            preload: 1,
            showAfterLoad: !0,
            selector: "",
            selectWithin: "",
            nextHtml: "",
            prevHtml: "",
            index: !1,
            iframeMaxWidth: "100%",
            download: !0,
            counter: !0,
            appendCounterTo: ".lg-toolbar",
            swipeThreshold: 50,
            enableSwipe: !0,
            enableDrag: !0,
            dynamic: !1,
            dynamicEl: [],
            galleryId: 1,
        };
        (b.prototype.init = function () {
            var b = this;
            b.s.preload > b.$items.length && (b.s.preload = b.$items.length);
            var c = window.location.hash;
            c.indexOf("lg=" + this.s.galleryId) > 0 &&
                ((b.index = parseInt(c.split("&slide=")[1], 10)),
                a("body").addClass("lg-from-hash"),
                a("body").hasClass("lg-on") ||
                    (setTimeout(function () {
                        b.build(b.index);
                    }),
                    a("body").addClass("lg-on"))),
                b.s.dynamic
                    ? (b.$el.trigger("onBeforeOpen.lg"),
                      (b.index = b.s.index || 0),
                      a("body").hasClass("lg-on") ||
                          setTimeout(function () {
                              b.build(b.index), a("body").addClass("lg-on");
                          }))
                    : b.$items.on("click.lgcustom", function (c) {
                          try {
                              c.preventDefault(), c.preventDefault();
                          } catch (a) {
                              c.returnValue = !1;
                          }
                          b.$el.trigger("onBeforeOpen.lg"), (b.index = b.s.index || b.$items.index(this)), a("body").hasClass("lg-on") || (b.build(b.index), a("body").addClass("lg-on"));
                      });
        }),
            (b.prototype.build = function (b) {
                var c = this;
                c.structure(),
                    a.each(a.fn.lightGallery.modules, function (b) {
                        c.modules[b] = new a.fn.lightGallery.modules[b](c.el);
                    }),
                    c.slide(b, !1, !1, !1),
                    c.s.keyPress && c.keyPress(),
                    c.$items.length > 1
                        ? (c.arrow(),
                          setTimeout(function () {
                              c.enableDrag(), c.enableSwipe();
                          }, 50),
                          c.s.mousewheel && c.mousewheel())
                        : c.$slide.on("click.lg", function () {
                              c.$el.trigger("onSlideClick.lg");
                          }),
                    c.counter(),
                    c.closeGallery(),
                    c.$el.trigger("onAfterOpen.lg"),
                    c.$outer.on("mousemove.lg click.lg touchstart.lg", function () {
                        c.$outer.removeClass("lg-hide-items"),
                            clearTimeout(c.hideBartimeout),
                            (c.hideBartimeout = setTimeout(function () {
                                c.$outer.addClass("lg-hide-items");
                            }, c.s.hideBarsDelay));
                    }),
                    c.$outer.trigger("mousemove.lg");
            }),
            (b.prototype.structure = function () {
                var b,
                    c = "",
                    d = "",
                    e = 0,
                    f = "",
                    g = this;
                for (a("body").append('<div class="lg-backdrop"></div>'), a(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), e = 0; e < this.$items.length; e++) c += '<div class="lg-item"></div>';
                if (
                    (this.s.controls && this.$items.length > 1 && (d = '<div class="lg-actions"><button class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"),
                    ".lg-sub-html" === this.s.appendSubHtmlTo && (f = '<div class="lg-sub-html"></div>'),
                    (b =
                        '<div class="lg-outer ' +
                        this.s.addClass +
                        " " +
                        this.s.startClass +
                        '"><div class="lg" style="width:' +
                        this.s.width +
                        "; height:" +
                        this.s.height +
                        '"><div class="lg-inner">' +
                        c +
                        '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' +
                        d +
                        f +
                        "</div></div>"),
                    a("body").append(b),
                    (this.$outer = a(".lg-outer")),
                    (this.$slide = this.$outer.find(".lg-item")),
                    this.s.useLeft ? (this.$outer.addClass("lg-use-left"), (this.s.mode = "lg-slide")) : this.$outer.addClass("lg-use-css3"),
                    g.setTop(),
                    a(window).on("resize.lg orientationchange.lg", function () {
                        setTimeout(function () {
                            g.setTop();
                        }, 100);
                    }),
                    this.$slide.eq(this.index).addClass("lg-current"),
                    this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), (this.s.speed = 0)),
                    this.$outer.addClass(this.s.mode),
                    this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"),
                    this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"),
                    this.doCss())
                ) {
                    var h = this.$outer.find(".lg-inner");
                    h.css("transition-timing-function", this.s.cssEasing), h.css("transition-duration", this.s.speed + "ms");
                }
                setTimeout(function () {
                    a(".lg-backdrop").addClass("in");
                }),
                    setTimeout(function () {
                        g.$outer.addClass("lg-visible");
                    }, this.s.backdropDuration),
                    this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),
                    (this.prevScrollTop = a(window).scrollTop());
            }),
            (b.prototype.setTop = function () {
                if ("100%" !== this.s.height) {
                    var b = a(window).height(),
                        c = (b - parseInt(this.s.height, 10)) / 2,
                        d = this.$outer.find(".lg");
                    b >= parseInt(this.s.height, 10) ? d.css("top", c + "px") : d.css("top", "0px");
                }
            }),
            (b.prototype.doCss = function () {
                return !!(function () {
                    var a = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
                        b = document.documentElement,
                        c = 0;
                    for (c = 0; c < a.length; c++) if (a[c] in b.style) return !0;
                })();
            }),
            (b.prototype.isVideo = function (a, b) {
                var c;
                if (((c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr("data-html")), !a))
                    return c
                        ? { html5: !0 }
                        : (console.error(
                              "lightGallery :- data-src is not pvovided on slide item " +
                                  (b + 1) +
                                  ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"
                          ),
                          !1);
                var d = a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
                    e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                    f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                    g = a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
                return d ? { youtube: d } : e ? { vimeo: e } : f ? { dailymotion: f } : g ? { vk: g } : void 0;
            }),
            (b.prototype.counter = function () {
                this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>");
            }),
            (b.prototype.addHtml = function (b) {
                var c,
                    d,
                    e = null;
                if (
                    (this.s.dynamic
                        ? this.s.dynamicEl[b].subHtmlUrl
                            ? (c = this.s.dynamicEl[b].subHtmlUrl)
                            : (e = this.s.dynamicEl[b].subHtml)
                        : ((d = this.$items.eq(b)),
                          d.attr("data-sub-html-url") ? (c = d.attr("data-sub-html-url")) : ((e = d.attr("data-sub-html")), this.s.getCaptionFromTitleOrAlt && !e && (e = d.attr("title") || d.find("img").first().attr("alt")))),
                    !c)
                )
                    if (void 0 !== e && null !== e) {
                        var f = e.substring(0, 1);
                        ("." !== f && "#" !== f) || (e = this.s.subHtmlSelectorRelative && !this.s.dynamic ? d.find(e).html() : a(e).html());
                    } else e = "";
                ".lg-sub-html" === this.s.appendSubHtmlTo ? (c ? this.$outer.find(this.s.appendSubHtmlTo).load(c) : this.$outer.find(this.s.appendSubHtmlTo).html(e)) : c ? this.$slide.eq(b).load(c) : this.$slide.eq(b).append(e),
                    void 0 !== e && null !== e && ("" === e ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),
                    this.$el.trigger("onAfterAppendSubHtml.lg", [b]);
            }),
            (b.prototype.preload = function (a) {
                var b = 1,
                    c = 1;
                for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++) this.loadContent(a + b, !1, 0);
                for (c = 1; c <= this.s.preload && !(a - c < 0); c++) this.loadContent(a - c, !1, 0);
            }),
            (b.prototype.loadContent = function (b, c, d) {
                var e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k = this,
                    l = !1,
                    m = function (b) {
                        for (var c = [], d = [], e = 0; e < b.length; e++) {
                            var g = b[e].split(" ");
                            "" === g[0] && g.splice(0, 1), d.push(g[0]), c.push(g[1]);
                        }
                        for (var h = a(window).width(), i = 0; i < c.length; i++)
                            if (parseInt(c[i], 10) > h) {
                                f = d[i];
                                break;
                            }
                    };
                if (k.s.dynamic) {
                    if ((k.s.dynamicEl[b].poster && ((l = !0), (g = k.s.dynamicEl[b].poster)), (j = k.s.dynamicEl[b].html), (f = k.s.dynamicEl[b].src), k.s.dynamicEl[b].responsive)) {
                        m(k.s.dynamicEl[b].responsive.split(","));
                    }
                    (h = k.s.dynamicEl[b].srcset), (i = k.s.dynamicEl[b].sizes);
                } else {
                    if (
                        (k.$items.eq(b).attr("data-poster") && ((l = !0), (g = k.$items.eq(b).attr("data-poster"))),
                        (j = k.$items.eq(b).attr("data-html")),
                        (f = k.$items.eq(b).attr("href") || k.$items.eq(b).attr("data-src")),
                        k.$items.eq(b).attr("data-responsive"))
                    ) {
                        m(k.$items.eq(b).attr("data-responsive").split(","));
                    }
                    (h = k.$items.eq(b).attr("data-srcset")), (i = k.$items.eq(b).attr("data-sizes"));
                }
                var n = !1;
                k.s.dynamic ? k.s.dynamicEl[b].iframe && (n = !0) : "true" === k.$items.eq(b).attr("data-iframe") && (n = !0);
                var o = k.isVideo(f, b);
                if (!k.$slide.eq(b).hasClass("lg-loaded")) {
                    if (n)
                        k.$slide
                            .eq(b)
                            .prepend(
                                '<div class="lg-video-cont lg-has-iframe" style="max-width:' +
                                    k.s.iframeMaxWidth +
                                    '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' +
                                    f +
                                    '"  allowfullscreen="true"></iframe></div></div>'
                            );
                    else if (l) {
                        var p = "";
                        (p = o && o.youtube ? "lg-has-youtube" : o && o.vimeo ? "lg-has-vimeo" : "lg-has-html5"),
                            k.$slide.eq(b).prepend('<div class="lg-video-cont ' + p + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + g + '" /></div></div>');
                    } else
                        o
                            ? (k.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), k.$el.trigger("hasVideo.lg", [b, f, j]))
                            : k.$slide.eq(b).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + f + '" /></div>');
                    if ((k.$el.trigger("onAferAppendSlide.lg", [b]), (e = k.$slide.eq(b).find(".lg-object")), i && e.attr("sizes", i), h)) {
                        e.attr("srcset", h);
                        try {
                            picturefill({ elements: [e[0]] });
                        } catch (a) {
                            console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.");
                        }
                    }
                    ".lg-sub-html" !== this.s.appendSubHtmlTo && k.addHtml(b), k.$slide.eq(b).addClass("lg-loaded");
                }
                k.$slide
                    .eq(b)
                    .find(".lg-object")
                    .on("load.lg error.lg", function () {
                        var c = 0;
                        d && !a("body").hasClass("lg-from-hash") && (c = d),
                            setTimeout(function () {
                                k.$slide.eq(b).addClass("lg-complete"), k.$el.trigger("onSlideItemLoad.lg", [b, d || 0]);
                            }, c);
                    }),
                    o && o.html5 && !l && k.$slide.eq(b).addClass("lg-complete"),
                    !0 === c &&
                        (k.$slide.eq(b).hasClass("lg-complete")
                            ? k.preload(b)
                            : k.$slide
                                  .eq(b)
                                  .find(".lg-object")
                                  .on("load.lg error.lg", function () {
                                      k.preload(b);
                                  }));
            }),
            (b.prototype.slide = function (b, c, d, e) {
                var f = this.$outer.find(".lg-current").index(),
                    g = this;
                if (!g.lGalleryOn || f !== b) {
                    var h = this.$slide.length,
                        i = g.lGalleryOn ? this.s.speed : 0;
                    if (!g.lgBusy) {
                        if (this.s.download) {
                            var j;
                            (j = g.s.dynamic
                                ? !1 !== g.s.dynamicEl[b].downloadUrl && (g.s.dynamicEl[b].downloadUrl || g.s.dynamicEl[b].src)
                                : "false" !== g.$items.eq(b).attr("data-download-url") && (g.$items.eq(b).attr("data-download-url") || g.$items.eq(b).attr("href") || g.$items.eq(b).attr("data-src"))),
                                j ? (a("#lg-download").attr("href", j), g.$outer.removeClass("lg-hide-download")) : g.$outer.addClass("lg-hide-download");
                        }
                        if (
                            (this.$el.trigger("onBeforeSlide.lg", [f, b, c, d]),
                            (g.lgBusy = !0),
                            clearTimeout(g.hideBartimeout),
                            ".lg-sub-html" === this.s.appendSubHtmlTo &&
                                setTimeout(function () {
                                    g.addHtml(b);
                                }, i),
                            this.arrowDisable(b),
                            e || (b < f ? (e = "prev") : b > f && (e = "next")),
                            c)
                        ) {
                            this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");
                            var k, l;
                            h > 2 ? ((k = b - 1), (l = b + 1), 0 === b && f === h - 1 ? ((l = 0), (k = h - 1)) : b === h - 1 && 0 === f && ((l = 0), (k = h - 1))) : ((k = 0), (l = 1)),
                                "prev" === e ? g.$slide.eq(l).addClass("lg-next-slide") : g.$slide.eq(k).addClass("lg-prev-slide"),
                                g.$slide.eq(b).addClass("lg-current");
                        } else
                            g.$outer.addClass("lg-no-trans"),
                                this.$slide.removeClass("lg-prev-slide lg-next-slide"),
                                "prev" === e ? (this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(f).addClass("lg-next-slide")) : (this.$slide.eq(b).addClass("lg-next-slide"), this.$slide.eq(f).addClass("lg-prev-slide")),
                                setTimeout(function () {
                                    g.$slide.removeClass("lg-current"), g.$slide.eq(b).addClass("lg-current"), g.$outer.removeClass("lg-no-trans");
                                }, 50);
                        g.lGalleryOn
                            ? (setTimeout(function () {
                                  g.loadContent(b, !0, 0);
                              }, this.s.speed + 50),
                              setTimeout(function () {
                                  (g.lgBusy = !1), g.$el.trigger("onAfterSlide.lg", [f, b, c, d]);
                              }, this.s.speed))
                            : (g.loadContent(b, !0, g.s.backdropDuration), (g.lgBusy = !1), g.$el.trigger("onAfterSlide.lg", [f, b, c, d])),
                            (g.lGalleryOn = !0),
                            this.s.counter && a("#lg-counter-current").text(b + 1);
                    }
                    g.index = b;
                }
            }),
            (b.prototype.goToNextSlide = function (a) {
                var b = this,
                    c = b.s.loop;
                a && b.$slide.length < 3 && (c = !1),
                    b.lgBusy ||
                        (b.index + 1 < b.$slide.length
                            ? (b.index++, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1, "next"))
                            : c
                            ? ((b.index = 0), b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1, "next"))
                            : b.s.slideEndAnimatoin &&
                              !a &&
                              (b.$outer.addClass("lg-right-end"),
                              setTimeout(function () {
                                  b.$outer.removeClass("lg-right-end");
                              }, 400)));
            }),
            (b.prototype.goToPrevSlide = function (a) {
                var b = this,
                    c = b.s.loop;
                a && b.$slide.length < 3 && (c = !1),
                    b.lgBusy ||
                        (b.index > 0
                            ? (b.index--, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1, "prev"))
                            : c
                            ? ((b.index = b.$items.length - 1), b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1, "prev"))
                            : b.s.slideEndAnimatoin &&
                              !a &&
                              (b.$outer.addClass("lg-left-end"),
                              setTimeout(function () {
                                  b.$outer.removeClass("lg-left-end");
                              }, 400)));
            }),
            (b.prototype.keyPress = function () {
                var b = this;
                this.$items.length > 1 &&
                    a(window).on("keyup.lg", function (a) {
                        b.$items.length > 1 && (37 === a.keyCode && (a.preventDefault(), b.goToPrevSlide()), 39 === a.keyCode && (a.preventDefault(), b.goToNextSlide()));
                    }),
                    a(window).on("keydown.lg", function (a) {
                        !0 === b.s.escKey && 27 === a.keyCode && (a.preventDefault(), b.$outer.hasClass("lg-thumb-open") ? b.$outer.removeClass("lg-thumb-open") : b.destroy());
                    });
            }),
            (b.prototype.arrow = function () {
                var a = this;
                this.$outer.find(".lg-prev").on("click.lg", function () {
                    a.goToPrevSlide();
                }),
                    this.$outer.find(".lg-next").on("click.lg", function () {
                        a.goToNextSlide();
                    });
            }),
            (b.prototype.arrowDisable = function (a) {
                !this.s.loop &&
                    this.s.hideControlOnEnd &&
                    (a + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"),
                    a > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"));
            }),
            (b.prototype.setTranslate = function (a, b, c) {
                this.s.useLeft ? a.css("left", b) : a.css({ transform: "translate3d(" + b + "px, " + c + "px, 0px)" });
            }),
            (b.prototype.touchMove = function (b, c) {
                var d = c - b;
                Math.abs(d) > 15 &&
                    (this.$outer.addClass("lg-dragging"),
                    this.setTranslate(this.$slide.eq(this.index), d, 0),
                    this.setTranslate(a(".lg-prev-slide"), -this.$slide.eq(this.index).width() + d, 0),
                    this.setTranslate(a(".lg-next-slide"), this.$slide.eq(this.index).width() + d, 0));
            }),
            (b.prototype.touchEnd = function (a) {
                var b = this;
                "lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"),
                    this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"),
                    setTimeout(function () {
                        b.$outer.removeClass("lg-dragging"),
                            a < 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToNextSlide(!0) : a > 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToPrevSlide(!0) : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"),
                            b.$slide.removeAttr("style");
                    }),
                    setTimeout(function () {
                        b.$outer.hasClass("lg-dragging") || "lg-slide" === b.s.mode || b.$outer.removeClass("lg-slide");
                    }, b.s.speed + 100);
            }),
            (b.prototype.enableSwipe = function () {
                var a = this,
                    b = 0,
                    c = 0,
                    d = !1;
                a.s.enableSwipe &&
                    a.doCss() &&
                    (a.$slide.on("touchstart.lg", function (c) {
                        a.$outer.hasClass("lg-zoomed") || a.lgBusy || (c.preventDefault(), a.manageSwipeClass(), (b = c.originalEvent.targetTouches[0].pageX));
                    }),
                    a.$slide.on("touchmove.lg", function (e) {
                        a.$outer.hasClass("lg-zoomed") || (e.preventDefault(), (c = e.originalEvent.targetTouches[0].pageX), a.touchMove(b, c), (d = !0));
                    }),
                    a.$slide.on("touchend.lg", function () {
                        a.$outer.hasClass("lg-zoomed") || (d ? ((d = !1), a.touchEnd(c - b)) : a.$el.trigger("onSlideClick.lg"));
                    }));
            }),
            (b.prototype.enableDrag = function () {
                var b = this,
                    c = 0,
                    d = 0,
                    e = !1,
                    f = !1;
                b.s.enableDrag &&
                    b.doCss() &&
                    (b.$slide.on("mousedown.lg", function (d) {
                        b.$outer.hasClass("lg-zoomed") ||
                            b.lgBusy ||
                            a(d.target).text().trim() ||
                            (d.preventDefault(),
                            b.manageSwipeClass(),
                            (c = d.pageX),
                            (e = !0),
                            (b.$outer.scrollLeft += 1),
                            (b.$outer.scrollLeft -= 1),
                            b.$outer.removeClass("lg-grab").addClass("lg-grabbing"),
                            b.$el.trigger("onDragstart.lg"));
                    }),
                    a(window).on("mousemove.lg", function (a) {
                        e && ((f = !0), (d = a.pageX), b.touchMove(c, d), b.$el.trigger("onDragmove.lg"));
                    }),
                    a(window).on("mouseup.lg", function (g) {
                        f ? ((f = !1), b.touchEnd(d - c), b.$el.trigger("onDragend.lg")) : (a(g.target).hasClass("lg-object") || a(g.target).hasClass("lg-video-play")) && b.$el.trigger("onSlideClick.lg"),
                            e && ((e = !1), b.$outer.removeClass("lg-grabbing").addClass("lg-grab"));
                    }));
            }),
            (b.prototype.manageSwipeClass = function () {
                var a = this.index + 1,
                    b = this.index - 1;
                this.s.loop && this.$slide.length > 2 && (0 === this.index ? (b = this.$slide.length - 1) : this.index === this.$slide.length - 1 && (a = 0)),
                    this.$slide.removeClass("lg-next-slide lg-prev-slide"),
                    b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"),
                    this.$slide.eq(a).addClass("lg-next-slide");
            }),
            (b.prototype.mousewheel = function () {
                var a = this;
                a.$outer.on("mousewheel.lg", function (b) {
                    b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(), b.preventDefault());
                });
            }),
            (b.prototype.closeGallery = function () {
                var b = this,
                    c = !1;
                this.$outer.find(".lg-close").on("click.lg", function () {
                    b.destroy();
                }),
                    b.s.closable &&
                        (b.$outer.on("mousedown.lg", function (b) {
                            c = !!(a(b.target).is(".lg-outer") || a(b.target).is(".lg-item ") || a(b.target).is(".lg-img-wrap"));
                        }),
                        b.$outer.on("mousemove.lg", function () {
                            c = !1;
                        }),
                        b.$outer.on("mouseup.lg", function (d) {
                            (a(d.target).is(".lg-outer") || a(d.target).is(".lg-item ") || (a(d.target).is(".lg-img-wrap") && c)) && (b.$outer.hasClass("lg-dragging") || b.destroy());
                        }));
            }),
            (b.prototype.destroy = function (b) {
                var c = this;
                b || (c.$el.trigger("onBeforeClose.lg"), a(window).scrollTop(c.prevScrollTop)),
                    b && (c.s.dynamic || this.$items.off("click.lg click.lgcustom"), a.removeData(c.el, "lightGallery")),
                    this.$el.off(".lg.tm"),
                    a.each(a.fn.lightGallery.modules, function (a) {
                        c.modules[a] && c.modules[a].destroy();
                    }),
                    (this.lGalleryOn = !1),
                    clearTimeout(c.hideBartimeout),
                    (this.hideBartimeout = !1),
                    a(window).off(".lg"),
                    a("body").removeClass("lg-on lg-from-hash"),
                    c.$outer && c.$outer.removeClass("lg-visible"),
                    a(".lg-backdrop").removeClass("in"),
                    setTimeout(function () {
                        c.$outer && c.$outer.remove(), a(".lg-backdrop").remove(), b || c.$el.trigger("onCloseAfter.lg");
                    }, c.s.backdropDuration + 50);
            }),
            (a.fn.lightGallery = function (c) {
                return this.each(function () {
                    if (a.data(this, "lightGallery"))
                        try {
                            a(this).data("lightGallery").init();
                        } catch (a) {
                            console.error("lightGallery has not initiated properly");
                        }
                    else a.data(this, "lightGallery", new b(this, c));
                });
            }),
            (a.fn.lightGallery.modules = {});
    })();
}),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define(["jquery"], function (a) {
                  return b(a);
              })
            : "object" == typeof exports
            ? (module.exports = b(require("jquery")))
            : b(jQuery);
    })(0, function (a) {
        !(function () {
            "use strict";
            var b = { autoplay: !1, pause: 5e3, progressBar: !0, fourceAutoplay: !1, autoplayControls: !0, appendAutoplayControlsTo: ".lg-toolbar" },
                c = function (c) {
                    return (
                        (this.core = a(c).data("lightGallery")),
                        (this.$el = a(c)),
                        !(this.core.$items.length < 2) &&
                            ((this.core.s = a.extend({}, b, this.core.s)),
                            (this.interval = !1),
                            (this.fromAuto = !0),
                            (this.canceledOnTouch = !1),
                            (this.fourceAutoplayTemp = this.core.s.fourceAutoplay),
                            this.core.doCss() || (this.core.s.progressBar = !1),
                            this.init(),
                            this)
                    );
                };
            (c.prototype.init = function () {
                var a = this;
                a.core.s.autoplayControls && a.controls(),
                    a.core.s.progressBar && a.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'),
                    a.progress(),
                    a.core.s.autoplay &&
                        a.$el.one("onSlideItemLoad.lg.tm", function () {
                            a.startlAuto();
                        }),
                    a.$el.on("onDragstart.lg.tm touchstart.lg.tm", function () {
                        a.interval && (a.cancelAuto(), (a.canceledOnTouch = !0));
                    }),
                    a.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm", function () {
                        !a.interval && a.canceledOnTouch && (a.startlAuto(), (a.canceledOnTouch = !1));
                    });
            }),
                (c.prototype.progress = function () {
                    var a,
                        b,
                        c = this;
                    c.$el.on("onBeforeSlide.lg.tm", function () {
                        c.core.s.progressBar &&
                            c.fromAuto &&
                            ((a = c.core.$outer.find(".lg-progress-bar")),
                            (b = c.core.$outer.find(".lg-progress")),
                            c.interval &&
                                (b.removeAttr("style"),
                                a.removeClass("lg-start"),
                                setTimeout(function () {
                                    b.css("transition", "width " + (c.core.s.speed + c.core.s.pause) + "ms ease 0s"), a.addClass("lg-start");
                                }, 20))),
                            c.fromAuto || c.core.s.fourceAutoplay || c.cancelAuto(),
                            (c.fromAuto = !1);
                    });
                }),
                (c.prototype.controls = function () {
                    var b = this;
                    a(this.core.s.appendAutoplayControlsTo).append('<span class="lg-autoplay-button lg-icon"></span>'),
                        b.core.$outer.find(".lg-autoplay-button").on("click.lg", function () {
                            a(b.core.$outer).hasClass("lg-show-autoplay") ? (b.cancelAuto(), (b.core.s.fourceAutoplay = !1)) : b.interval || (b.startlAuto(), (b.core.s.fourceAutoplay = b.fourceAutoplayTemp));
                        });
                }),
                (c.prototype.startlAuto = function () {
                    var a = this;
                    a.core.$outer.find(".lg-progress").css("transition", "width " + (a.core.s.speed + a.core.s.pause) + "ms ease 0s"),
                        a.core.$outer.addClass("lg-show-autoplay"),
                        a.core.$outer.find(".lg-progress-bar").addClass("lg-start"),
                        (a.interval = setInterval(function () {
                            a.core.index + 1 < a.core.$items.length ? a.core.index++ : (a.core.index = 0), (a.fromAuto = !0), a.core.slide(a.core.index, !1, !1, "next");
                        }, a.core.s.speed + a.core.s.pause));
                }),
                (c.prototype.cancelAuto = function () {
                    clearInterval(this.interval),
                        (this.interval = !1),
                        this.core.$outer.find(".lg-progress").removeAttr("style"),
                        this.core.$outer.removeClass("lg-show-autoplay"),
                        this.core.$outer.find(".lg-progress-bar").removeClass("lg-start");
                }),
                (c.prototype.destroy = function () {
                    this.cancelAuto(), this.core.$outer.find(".lg-progress-bar").remove();
                }),
                (a.fn.lightGallery.modules.autoplay = c);
        })();
    }),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define(["jquery"], function (a) {
                  return b(a);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = b(require("jquery")))
            : b(a.jQuery);
    })(this, function (a) {
        !(function () {
            "use strict";
            function b() {
                return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
            }
            var c = { fullScreen: !0 },
                d = function (b) {
                    return (this.core = a(b).data("lightGallery")), (this.$el = a(b)), (this.core.s = a.extend({}, c, this.core.s)), this.init(), this;
                };
            (d.prototype.init = function () {
                var a = "";
                if (this.core.s.fullScreen) {
                    if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) return;
                    (a = '<span class="lg-fullscreen lg-icon"></span>'), this.core.$outer.find(".lg-toolbar").append(a), this.fullScreen();
                }
            }),
                (d.prototype.requestFullscreen = function () {
                    var a = document.documentElement;
                    a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen();
                }),
                (d.prototype.exitFullscreen = function () {
                    document.exitFullscreen
                        ? document.exitFullscreen()
                        : document.msExitFullscreen
                        ? document.msExitFullscreen()
                        : document.mozCancelFullScreen
                        ? document.mozCancelFullScreen()
                        : document.webkitExitFullscreen && document.webkitExitFullscreen();
                }),
                (d.prototype.fullScreen = function () {
                    var c = this;
                    a(document).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg", function () {
                        c.core.$outer.toggleClass("lg-fullscreen-on");
                    }),
                        this.core.$outer.find(".lg-fullscreen").on("click.lg", function () {
                            b() ? c.exitFullscreen() : c.requestFullscreen();
                        });
                }),
                (d.prototype.destroy = function () {
                    b() && this.exitFullscreen(), a(document).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg");
                }),
                (a.fn.lightGallery.modules.fullscreen = d);
        })();
    }),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define(["jquery"], function (a) {
                  return b(a);
              })
            : "object" == typeof exports
            ? (module.exports = b(require("jquery")))
            : b(jQuery);
    })(0, function (a) {
        !(function () {
            "use strict";
            var b = { pager: !1 },
                c = function (c) {
                    return (this.core = a(c).data("lightGallery")), (this.$el = a(c)), (this.core.s = a.extend({}, b, this.core.s)), this.core.s.pager && this.core.$items.length > 1 && this.init(), this;
                };
            (c.prototype.init = function () {
                var b,
                    c,
                    d,
                    e = this,
                    f = "";
                if ((e.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'), e.core.s.dynamic))
                    for (var g = 0; g < e.core.s.dynamicEl.length; g++)
                        f += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + e.core.s.dynamicEl[g].thumb + '" /></div></span>';
                else
                    e.core.$items.each(function () {
                        e.core.s.exThumbImage
                            ? (f += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + a(this).attr(e.core.s.exThumbImage) + '" /></div></span>')
                            : (f += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + a(this).find("img").attr("src") + '" /></div></span>');
                    });
                (c = e.core.$outer.find(".lg-pager-outer")),
                    c.html(f),
                    (b = e.core.$outer.find(".lg-pager-cont")),
                    b.on("click.lg touchend.lg", function () {
                        var b = a(this);
                        (e.core.index = b.index()), e.core.slide(e.core.index, !1, !0, !1);
                    }),
                    c.on("mouseover.lg", function () {
                        clearTimeout(d), c.addClass("lg-pager-hover");
                    }),
                    c.on("mouseout.lg", function () {
                        d = setTimeout(function () {
                            c.removeClass("lg-pager-hover");
                        });
                    }),
                    e.core.$el.on("onBeforeSlide.lg.tm", function (a, c, d) {
                        b.removeClass("lg-pager-active"), b.eq(d).addClass("lg-pager-active");
                    });
            }),
                (c.prototype.destroy = function () {}),
                (a.fn.lightGallery.modules.pager = c);
        })();
    }),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define(["jquery"], function (a) {
                  return b(a);
              })
            : "object" == typeof exports
            ? (module.exports = b(require("jquery")))
            : b(jQuery);
    })(0, function (a) {
        !(function () {
            "use strict";
            var b = {
                    thumbnail: !0,
                    animateThumb: !0,
                    currentPagerPosition: "middle",
                    thumbWidth: 100,
                    thumbHeight: "80px",
                    thumbContHeight: 100,
                    thumbMargin: 5,
                    exThumbImage: !1,
                    showThumbByDefault: !0,
                    toogleThumb: !0,
                    pullCaptionUp: !0,
                    enableThumbDrag: !0,
                    enableThumbSwipe: !0,
                    swipeThreshold: 50,
                    loadYoutubeThumbnail: !0,
                    youtubeThumbSize: 1,
                    loadVimeoThumbnail: !0,
                    vimeoThumbSize: "thumbnail_small",
                    loadDailymotionThumbnail: !0,
                },
                c = function (c) {
                    return (
                        (this.core = a(c).data("lightGallery")),
                        (this.core.s = a.extend({}, b, this.core.s)),
                        (this.$el = a(c)),
                        (this.$thumbOuter = null),
                        (this.thumbOuterWidth = 0),
                        (this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin)),
                        (this.thumbIndex = this.core.index),
                        this.core.s.animateThumb && (this.core.s.thumbHeight = "100%"),
                        (this.left = 0),
                        this.init(),
                        this
                    );
                };
            (c.prototype.init = function () {
                var a = this;
                this.core.s.thumbnail &&
                    this.core.$items.length > 1 &&
                    (this.core.s.showThumbByDefault &&
                        setTimeout(function () {
                            a.core.$outer.addClass("lg-thumb-open");
                        }, 700),
                    this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"),
                    this.build(),
                    this.core.s.animateThumb && this.core.doCss() ? (this.core.s.enableThumbDrag && this.enableThumbDrag(), this.core.s.enableThumbSwipe && this.enableThumbSwipe(), (this.thumbClickable = !1)) : (this.thumbClickable = !0),
                    this.toogle(),
                    this.thumbkeyPress());
            }),
                (c.prototype.build = function () {
                    function b(a, b, c) {
                        var g,
                            h = d.core.isVideo(a, c) || {},
                            i = "";
                        h.youtube || h.vimeo || h.dailymotion
                            ? h.youtube
                                ? (g = d.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + h.youtube[1] + "/" + d.core.s.youtubeThumbSize + ".jpg" : b)
                                : h.vimeo
                                ? d.core.s.loadVimeoThumbnail
                                    ? ((g = "//i.vimeocdn.com/video/error_" + f + ".jpg"), (i = h.vimeo[1]))
                                    : (g = b)
                                : h.dailymotion && (g = d.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + h.dailymotion[1] : b)
                            : (g = b),
                            (e +=
                                '<div data-vimeo-id="' +
                                i +
                                '" class="lg-thumb-item" style="width:' +
                                d.core.s.thumbWidth +
                                "px; height: " +
                                d.core.s.thumbHeight +
                                "; margin-right: " +
                                d.core.s.thumbMargin +
                                'px"><img src="' +
                                g +
                                '" /></div>'),
                            (i = "");
                    }
                    var c,
                        d = this,
                        e = "",
                        f = "",
                        g = '<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>';
                    switch (this.core.s.vimeoThumbSize) {
                        case "thumbnail_large":
                            f = "640";
                            break;
                        case "thumbnail_medium":
                            f = "200x150";
                            break;
                        case "thumbnail_small":
                            f = "100x75";
                    }
                    if (
                        (d.core.$outer.addClass("lg-has-thumb"),
                        d.core.$outer.find(".lg").append(g),
                        (d.$thumbOuter = d.core.$outer.find(".lg-thumb-outer")),
                        (d.thumbOuterWidth = d.$thumbOuter.width()),
                        d.core.s.animateThumb && d.core.$outer.find(".lg-thumb").css({ width: d.thumbTotalWidth + "px", position: "relative" }),
                        this.core.s.animateThumb && d.$thumbOuter.css("height", d.core.s.thumbContHeight + "px"),
                        d.core.s.dynamic)
                    )
                        for (var h = 0; h < d.core.s.dynamicEl.length; h++) b(d.core.s.dynamicEl[h].src, d.core.s.dynamicEl[h].thumb, h);
                    else
                        d.core.$items.each(function (c) {
                            d.core.s.exThumbImage ? b(a(this).attr("href") || a(this).attr("data-src"), a(this).attr(d.core.s.exThumbImage), c) : b(a(this).attr("href") || a(this).attr("data-src"), a(this).find("img").attr("src"), c);
                        });
                    d.core.$outer.find(".lg-thumb").html(e),
                        (c = d.core.$outer.find(".lg-thumb-item")),
                        c.each(function () {
                            var b = a(this),
                                c = b.attr("data-vimeo-id");
                            c &&
                                a.getJSON("//www.vimeo.com/api/v2/video/" + c + ".json?callback=?", { format: "json" }, function (a) {
                                    b.find("img").attr("src", a[0][d.core.s.vimeoThumbSize]);
                                });
                        }),
                        c.eq(d.core.index).addClass("active"),
                        d.core.$el.on("onBeforeSlide.lg.tm", function () {
                            c.removeClass("active"), c.eq(d.core.index).addClass("active");
                        }),
                        c.on("click.lg touchend.lg", function () {
                            var b = a(this);
                            setTimeout(function () {
                                ((d.thumbClickable && !d.core.lgBusy) || !d.core.doCss()) && ((d.core.index = b.index()), d.core.slide(d.core.index, !1, !0, !1));
                            }, 50);
                        }),
                        d.core.$el.on("onBeforeSlide.lg.tm", function () {
                            d.animateThumb(d.core.index);
                        }),
                        a(window).on("resize.lg.thumb orientationchange.lg.thumb", function () {
                            setTimeout(function () {
                                d.animateThumb(d.core.index), (d.thumbOuterWidth = d.$thumbOuter.width());
                            }, 200);
                        });
                }),
                (c.prototype.setTranslate = function (a) {
                    this.core.$outer.find(".lg-thumb").css({ transform: "translate3d(-" + a + "px, 0px, 0px)" });
                }),
                (c.prototype.animateThumb = function (a) {
                    var b = this.core.$outer.find(".lg-thumb");
                    if (this.core.s.animateThumb) {
                        var c;
                        switch (this.core.s.currentPagerPosition) {
                            case "left":
                                c = 0;
                                break;
                            case "middle":
                                c = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                                break;
                            case "right":
                                c = this.thumbOuterWidth - this.core.s.thumbWidth;
                        }
                        (this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * a - 1 - c),
                            this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth),
                            this.left < 0 && (this.left = 0),
                            this.core.lGalleryOn
                                ? (b.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"), this.core.doCss() || b.animate({ left: -this.left + "px" }, this.core.s.speed))
                                : this.core.doCss() || b.css("left", -this.left + "px"),
                            this.setTranslate(this.left);
                    }
                }),
                (c.prototype.enableThumbDrag = function () {
                    var b = this,
                        c = 0,
                        d = 0,
                        e = !1,
                        f = !1,
                        g = 0;
                    b.$thumbOuter.addClass("lg-grab"),
                        b.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", function (a) {
                            b.thumbTotalWidth > b.thumbOuterWidth &&
                                (a.preventDefault(), (c = a.pageX), (e = !0), (b.core.$outer.scrollLeft += 1), (b.core.$outer.scrollLeft -= 1), (b.thumbClickable = !1), b.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"));
                        }),
                        a(window).on("mousemove.lg.thumb", function (a) {
                            e &&
                                ((g = b.left),
                                (f = !0),
                                (d = a.pageX),
                                b.$thumbOuter.addClass("lg-dragging"),
                                (g -= d - c),
                                g > b.thumbTotalWidth - b.thumbOuterWidth && (g = b.thumbTotalWidth - b.thumbOuterWidth),
                                g < 0 && (g = 0),
                                b.setTranslate(g));
                        }),
                        a(window).on("mouseup.lg.thumb", function () {
                            f ? ((f = !1), b.$thumbOuter.removeClass("lg-dragging"), (b.left = g), Math.abs(d - c) < b.core.s.swipeThreshold && (b.thumbClickable = !0)) : (b.thumbClickable = !0),
                                e && ((e = !1), b.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"));
                        });
                }),
                (c.prototype.enableThumbSwipe = function () {
                    var a = this,
                        b = 0,
                        c = 0,
                        d = !1,
                        e = 0;
                    a.core.$outer.find(".lg-thumb").on("touchstart.lg", function (c) {
                        a.thumbTotalWidth > a.thumbOuterWidth && (c.preventDefault(), (b = c.originalEvent.targetTouches[0].pageX), (a.thumbClickable = !1));
                    }),
                        a.core.$outer.find(".lg-thumb").on("touchmove.lg", function (f) {
                            a.thumbTotalWidth > a.thumbOuterWidth &&
                                (f.preventDefault(),
                                (c = f.originalEvent.targetTouches[0].pageX),
                                (d = !0),
                                a.$thumbOuter.addClass("lg-dragging"),
                                (e = a.left),
                                (e -= c - b),
                                e > a.thumbTotalWidth - a.thumbOuterWidth && (e = a.thumbTotalWidth - a.thumbOuterWidth),
                                e < 0 && (e = 0),
                                a.setTranslate(e));
                        }),
                        a.core.$outer.find(".lg-thumb").on("touchend.lg", function () {
                            a.thumbTotalWidth > a.thumbOuterWidth && d ? ((d = !1), a.$thumbOuter.removeClass("lg-dragging"), Math.abs(c - b) < a.core.s.swipeThreshold && (a.thumbClickable = !0), (a.left = e)) : (a.thumbClickable = !0);
                        });
                }),
                (c.prototype.toogle = function () {
                    var a = this;
                    a.core.s.toogleThumb &&
                        (a.core.$outer.addClass("lg-can-toggle"),
                        a.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'),
                        a.core.$outer.find(".lg-toogle-thumb").on("click.lg", function () {
                            a.core.$outer.toggleClass("lg-thumb-open");
                        }));
                }),
                (c.prototype.thumbkeyPress = function () {
                    var b = this;
                    a(window).on("keydown.lg.thumb", function (a) {
                        38 === a.keyCode ? (a.preventDefault(), b.core.$outer.addClass("lg-thumb-open")) : 40 === a.keyCode && (a.preventDefault(), b.core.$outer.removeClass("lg-thumb-open"));
                    });
                }),
                (c.prototype.destroy = function () {
                    this.core.s.thumbnail && this.core.$items.length > 1 && (a(window).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"), this.$thumbOuter.remove(), this.core.$outer.removeClass("lg-has-thumb"));
                }),
                (a.fn.lightGallery.modules.Thumbnail = c);
        })();
    }),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define(["jquery"], function (a) {
                  return b(a);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = b(require("jquery")))
            : b(a.jQuery);
    })(this, function (a) {
        !(function () {
            "use strict";
            function b(a, b, c, d) {
                var e = this;
                if ((e.core.$slide.eq(b).find(".lg-video").append(e.loadVideo(c, "lg-object", !0, b, d)), d))
                    if (e.core.s.videojs)
                        try {
                            videojs(e.core.$slide.eq(b).find(".lg-html5").get(0), e.core.s.videojsOptions, function () {
                                !e.videoLoaded && e.core.s.autoplayFirstVideo && this.play();
                            });
                        } catch (a) {
                            console.error("Make sure you have included videojs");
                        }
                    else !e.videoLoaded && e.core.s.autoplayFirstVideo && e.core.$slide.eq(b).find(".lg-html5").get(0).play();
            }
            function c(a, b) {
                var c = this.core.$slide.eq(b).find(".lg-video-cont");
                c.hasClass("lg-has-iframe") || (c.css("max-width", this.core.s.videoMaxWidth), (this.videoLoaded = !0));
            }
            function d(b, c, d) {
                var e = this,
                    f = e.core.$slide.eq(c),
                    g = f.find(".lg-youtube").get(0),
                    h = f.find(".lg-vimeo").get(0),
                    i = f.find(".lg-dailymotion").get(0),
                    j = f.find(".lg-vk").get(0),
                    k = f.find(".lg-html5").get(0);
                if (g) g.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                else if (h)
                    try {
                        $f(h).api("pause");
                    } catch (a) {
                        console.error("Make sure you have included froogaloop2 js");
                    }
                else if (i) i.contentWindow.postMessage("pause", "*");
                else if (k)
                    if (e.core.s.videojs)
                        try {
                            videojs(k).pause();
                        } catch (a) {
                            console.error("Make sure you have included videojs");
                        }
                    else k.pause();
                j && a(j).attr("src", a(j).attr("src").replace("&autoplay", "&noplay"));
                var l;
                l = e.core.s.dynamic ? e.core.s.dynamicEl[d].src : e.core.$items.eq(d).attr("href") || e.core.$items.eq(d).attr("data-src");
                var m = e.core.isVideo(l, d) || {};
                (m.youtube || m.vimeo || m.dailymotion || m.vk) && e.core.$outer.addClass("lg-hide-download");
            }
            var e = { videoMaxWidth: "855px", autoplayFirstVideo: !0, youtubePlayerParams: !1, vimeoPlayerParams: !1, dailymotionPlayerParams: !1, vkPlayerParams: !1, videojs: !1, videojsOptions: {} },
                f = function (b) {
                    return (this.core = a(b).data("lightGallery")), (this.$el = a(b)), (this.core.s = a.extend({}, e, this.core.s)), (this.videoLoaded = !1), this.init(), this;
                };
            (f.prototype.init = function () {
                var e = this;
                e.core.$el.on("hasVideo.lg.tm", b.bind(this)),
                    e.core.$el.on("onAferAppendSlide.lg.tm", c.bind(this)),
                    e.core.doCss() && e.core.$items.length > 1 && (e.core.s.enableSwipe || e.core.s.enableDrag)
                        ? e.core.$el.on("onSlideClick.lg.tm", function () {
                              var a = e.core.$slide.eq(e.core.index);
                              e.loadVideoOnclick(a);
                          })
                        : e.core.$slide.on("click.lg", function () {
                              e.loadVideoOnclick(a(this));
                          }),
                    e.core.$el.on("onBeforeSlide.lg.tm", d.bind(this)),
                    e.core.$el.on("onAfterSlide.lg.tm", function (a, b) {
                        e.core.$slide.eq(b).removeClass("lg-video-playing");
                    }),
                    e.core.s.autoplayFirstVideo &&
                        e.core.$el.on("onAferAppendSlide.lg.tm", function (a, b) {
                            if (!e.core.lGalleryOn) {
                                var c = e.core.$slide.eq(b);
                                setTimeout(function () {
                                    e.loadVideoOnclick(c);
                                }, 100);
                            }
                        });
            }),
                (f.prototype.loadVideo = function (b, c, d, e, f) {
                    var g = "",
                        h = 1,
                        i = "",
                        j = this.core.isVideo(b, e) || {};
                    if ((d && (h = this.videoLoaded ? 0 : this.core.s.autoplayFirstVideo ? 1 : 0), j.youtube))
                        (i = "?wmode=opaque&autoplay=" + h + "&enablejsapi=1"),
                            this.core.s.youtubePlayerParams && (i = i + "&" + a.param(this.core.s.youtubePlayerParams)),
                            (g = '<iframe class="lg-video-object lg-youtube ' + c + '" width="560" height="315" src="//www.youtube.com/embed/' + j.youtube[1] + i + '" frameborder="0" allowfullscreen></iframe>');
                    else if (j.vimeo)
                        (i = "?autoplay=" + h + "&api=1"),
                            this.core.s.vimeoPlayerParams && (i = i + "&" + a.param(this.core.s.vimeoPlayerParams)),
                            (g =
                                '<iframe class="lg-video-object lg-vimeo ' +
                                c +
                                '" width="560" height="315"  src="//player.vimeo.com/video/' +
                                j.vimeo[1] +
                                i +
                                '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
                    else if (j.dailymotion)
                        (i = "?wmode=opaque&autoplay=" + h + "&api=postMessage"),
                            this.core.s.dailymotionPlayerParams && (i = i + "&" + a.param(this.core.s.dailymotionPlayerParams)),
                            (g = '<iframe class="lg-video-object lg-dailymotion ' + c + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + j.dailymotion[1] + i + '" frameborder="0" allowfullscreen></iframe>');
                    else if (j.html5) {
                        var k = f.substring(0, 1);
                        ("." !== k && "#" !== k) || (f = a(f).html()), (g = f);
                    } else
                        j.vk &&
                            ((i = "&autoplay=" + h),
                            this.core.s.vkPlayerParams && (i = i + "&" + a.param(this.core.s.vkPlayerParams)),
                            (g = '<iframe class="lg-video-object lg-vk ' + c + '" width="560" height="315" src="//vk.com/video_ext.php?' + j.vk[1] + i + '" frameborder="0" allowfullscreen></iframe>'));
                    return g;
                }),
                (f.prototype.loadVideoOnclick = function (a) {
                    var b = this;
                    if (a.find(".lg-object").hasClass("lg-has-poster") && a.find(".lg-object").is(":visible"))
                        if (a.hasClass("lg-has-video")) {
                            var c = a.find(".lg-youtube").get(0),
                                d = a.find(".lg-vimeo").get(0),
                                e = a.find(".lg-dailymotion").get(0),
                                f = a.find(".lg-html5").get(0);
                            if (c) c.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                            else if (d)
                                try {
                                    $f(d).api("play");
                                } catch (a) {
                                    console.error("Make sure you have included froogaloop2 js");
                                }
                            else if (e) e.contentWindow.postMessage("play", "*");
                            else if (f)
                                if (b.core.s.videojs)
                                    try {
                                        videojs(f).play();
                                    } catch (a) {
                                        console.error("Make sure you have included videojs");
                                    }
                                else f.play();
                            a.addClass("lg-video-playing");
                        } else {
                            a.addClass("lg-video-playing lg-has-video");
                            var g,
                                h,
                                i = function (c, d) {
                                    if ((a.find(".lg-video").append(b.loadVideo(c, "", !1, b.core.index, d)), d))
                                        if (b.core.s.videojs)
                                            try {
                                                videojs(b.core.$slide.eq(b.core.index).find(".lg-html5").get(0), b.core.s.videojsOptions, function () {
                                                    this.play();
                                                });
                                            } catch (a) {
                                                console.error("Make sure you have included videojs");
                                            }
                                        else b.core.$slide.eq(b.core.index).find(".lg-html5").get(0).play();
                                };
                            b.core.s.dynamic
                                ? ((g = b.core.s.dynamicEl[b.core.index].src), (h = b.core.s.dynamicEl[b.core.index].html), i(g, h))
                                : ((g = b.core.$items.eq(b.core.index).attr("href") || b.core.$items.eq(b.core.index).attr("data-src")), (h = b.core.$items.eq(b.core.index).attr("data-html")), i(g, h));
                            var j = a.find(".lg-object");
                            a.find(".lg-video").append(j),
                                a.find(".lg-video-object").hasClass("lg-html5") ||
                                    (a.removeClass("lg-complete"),
                                    a.find(".lg-video-object").on("load.lg error.lg", function () {
                                        a.addClass("lg-complete");
                                    }));
                        }
                }),
                (f.prototype.destroy = function () {
                    this.videoLoaded = !1;
                }),
                (a.fn.lightGallery.modules.video = f);
        })();
    }),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define(["jquery"], function (a) {
                  return b(a);
              })
            : "object" == typeof exports
            ? (module.exports = b(require("jquery")))
            : b(jQuery);
    })(0, function (a) {
        !(function () {
            "use strict";
            var b = function () {
                    var a = !1,
                        b = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
                    return b && parseInt(b[2], 10) < 54 && (a = !0), a;
                },
                c = { scale: 1, zoom: !0, actualSize: !0, enableZoomAfter: 300, useLeftForZoom: b() },
                d = function (b) {
                    return (
                        (this.core = a(b).data("lightGallery")),
                        (this.core.s = a.extend({}, c, this.core.s)),
                        this.core.s.zoom && this.core.doCss() && (this.init(), (this.zoomabletimeout = !1), (this.pageX = a(window).width() / 2), (this.pageY = a(window).height() / 2 + a(window).scrollTop())),
                        this
                    );
                };
            (d.prototype.init = function () {
                var b = this,
                    c = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
                b.core.s.actualSize && (c += '<span id="lg-actual-size" class="lg-icon"></span>'),
                    b.core.s.useLeftForZoom ? b.core.$outer.addClass("lg-use-left-for-zoom") : b.core.$outer.addClass("lg-use-transition-for-zoom"),
                    this.core.$outer.find(".lg-toolbar").append(c),
                    b.core.$el.on("onSlideItemLoad.lg.tm.zoom", function (c, d, e) {
                        var f = b.core.s.enableZoomAfter + e;
                        a("body").hasClass("lg-from-hash") && e ? (f = 0) : a("body").removeClass("lg-from-hash"),
                            (b.zoomabletimeout = setTimeout(function () {
                                b.core.$slide.eq(d).addClass("lg-zoomable");
                            }, f + 30));
                    });
                var d = 1,
                    e = function (c) {
                        var d,
                            e,
                            f = b.core.$outer.find(".lg-current .lg-image"),
                            g = (a(window).width() - f.prop("offsetWidth")) / 2,
                            h = (a(window).height() - f.prop("offsetHeight")) / 2 + a(window).scrollTop();
                        (d = b.pageX - g), (e = b.pageY - h);
                        var i = (c - 1) * d,
                            j = (c - 1) * e;
                        f.css("transform", "scale3d(" + c + ", " + c + ", 1)").attr("data-scale", c),
                            b.core.s.useLeftForZoom
                                ? f
                                      .parent()
                                      .css({ left: -i + "px", top: -j + "px" })
                                      .attr("data-x", i)
                                      .attr("data-y", j)
                                : f
                                      .parent()
                                      .css("transform", "translate3d(-" + i + "px, -" + j + "px, 0)")
                                      .attr("data-x", i)
                                      .attr("data-y", j);
                    },
                    f = function () {
                        d > 1 ? b.core.$outer.addClass("lg-zoomed") : b.resetZoom(), d < 1 && (d = 1), e(d);
                    },
                    g = function (c, e, g, h) {
                        var i,
                            j = e.prop("offsetWidth");
                        i = b.core.s.dynamic ? b.core.s.dynamicEl[g].width || e[0].naturalWidth || j : b.core.$items.eq(g).attr("data-width") || e[0].naturalWidth || j;
                        var k;
                        b.core.$outer.hasClass("lg-zoomed") ? (d = 1) : i > j && ((k = i / j), (d = k || 2)),
                            h
                                ? ((b.pageX = a(window).width() / 2), (b.pageY = a(window).height() / 2 + a(window).scrollTop()))
                                : ((b.pageX = c.pageX || c.originalEvent.targetTouches[0].pageX), (b.pageY = c.pageY || c.originalEvent.targetTouches[0].pageY)),
                            f(),
                            setTimeout(function () {
                                b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab");
                            }, 10);
                    },
                    h = !1;
                b.core.$el.on("onAferAppendSlide.lg.tm.zoom", function (a, c) {
                    var d = b.core.$slide.eq(c).find(".lg-image");
                    d.on("dblclick", function (a) {
                        g(a, d, c);
                    }),
                        d.on("touchstart", function (a) {
                            h
                                ? (clearTimeout(h), (h = null), g(a, d, c))
                                : (h = setTimeout(function () {
                                      h = null;
                                  }, 300)),
                                a.preventDefault();
                        });
                }),
                    a(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function () {
                        (b.pageX = a(window).width() / 2), (b.pageY = a(window).height() / 2 + a(window).scrollTop()), e(d);
                    }),
                    a("#lg-zoom-out").on("click.lg", function () {
                        b.core.$outer.find(".lg-current .lg-image").length && ((d -= b.core.s.scale), f());
                    }),
                    a("#lg-zoom-in").on("click.lg", function () {
                        b.core.$outer.find(".lg-current .lg-image").length && ((d += b.core.s.scale), f());
                    }),
                    a("#lg-actual-size").on("click.lg", function (a) {
                        g(a, b.core.$slide.eq(b.core.index).find(".lg-image"), b.core.index, !0);
                    }),
                    b.core.$el.on("onBeforeSlide.lg.tm", function () {
                        (d = 1), b.resetZoom();
                    }),
                    b.zoomDrag(),
                    b.zoomSwipe();
            }),
                (d.prototype.resetZoom = function () {
                    this.core.$outer.removeClass("lg-zoomed"),
                        this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"),
                        this.core.$slide.find(".lg-image").removeAttr("style data-scale"),
                        (this.pageX = a(window).width() / 2),
                        (this.pageY = a(window).height() / 2 + a(window).scrollTop());
                }),
                (d.prototype.zoomSwipe = function () {
                    var a = this,
                        b = {},
                        c = {},
                        d = !1,
                        e = !1,
                        f = !1;
                    a.core.$slide.on("touchstart.lg", function (c) {
                        if (a.core.$outer.hasClass("lg-zoomed")) {
                            var d = a.core.$slide.eq(a.core.index).find(".lg-object");
                            (f = d.prop("offsetHeight") * d.attr("data-scale") > a.core.$outer.find(".lg").height()),
                                (e = d.prop("offsetWidth") * d.attr("data-scale") > a.core.$outer.find(".lg").width()),
                                (e || f) && (c.preventDefault(), (b = { x: c.originalEvent.targetTouches[0].pageX, y: c.originalEvent.targetTouches[0].pageY }));
                        }
                    }),
                        a.core.$slide.on("touchmove.lg", function (g) {
                            if (a.core.$outer.hasClass("lg-zoomed")) {
                                var h,
                                    i,
                                    j = a.core.$slide.eq(a.core.index).find(".lg-img-wrap");
                                g.preventDefault(),
                                    (d = !0),
                                    (c = { x: g.originalEvent.targetTouches[0].pageX, y: g.originalEvent.targetTouches[0].pageY }),
                                    a.core.$outer.addClass("lg-zoom-dragging"),
                                    (i = f ? -Math.abs(j.attr("data-y")) + (c.y - b.y) : -Math.abs(j.attr("data-y"))),
                                    (h = e ? -Math.abs(j.attr("data-x")) + (c.x - b.x) : -Math.abs(j.attr("data-x"))),
                                    (Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) && (a.core.s.useLeftForZoom ? j.css({ left: h + "px", top: i + "px" }) : j.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"));
                            }
                        }),
                        a.core.$slide.on("touchend.lg", function () {
                            a.core.$outer.hasClass("lg-zoomed") && d && ((d = !1), a.core.$outer.removeClass("lg-zoom-dragging"), a.touchendZoom(b, c, e, f));
                        });
                }),
                (d.prototype.zoomDrag = function () {
                    var b = this,
                        c = {},
                        d = {},
                        e = !1,
                        f = !1,
                        g = !1,
                        h = !1;
                    b.core.$slide.on("mousedown.lg.zoom", function (d) {
                        var f = b.core.$slide.eq(b.core.index).find(".lg-object");
                        (h = f.prop("offsetHeight") * f.attr("data-scale") > b.core.$outer.find(".lg").height()),
                            (g = f.prop("offsetWidth") * f.attr("data-scale") > b.core.$outer.find(".lg").width()),
                            b.core.$outer.hasClass("lg-zoomed") &&
                                a(d.target).hasClass("lg-object") &&
                                (g || h) &&
                                (d.preventDefault(), (c = { x: d.pageX, y: d.pageY }), (e = !0), (b.core.$outer.scrollLeft += 1), (b.core.$outer.scrollLeft -= 1), b.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"));
                    }),
                        a(window).on("mousemove.lg.zoom", function (a) {
                            if (e) {
                                var i,
                                    j,
                                    k = b.core.$slide.eq(b.core.index).find(".lg-img-wrap");
                                (f = !0),
                                    (d = { x: a.pageX, y: a.pageY }),
                                    b.core.$outer.addClass("lg-zoom-dragging"),
                                    (j = h ? -Math.abs(k.attr("data-y")) + (d.y - c.y) : -Math.abs(k.attr("data-y"))),
                                    (i = g ? -Math.abs(k.attr("data-x")) + (d.x - c.x) : -Math.abs(k.attr("data-x"))),
                                    b.core.s.useLeftForZoom ? k.css({ left: i + "px", top: j + "px" }) : k.css("transform", "translate3d(" + i + "px, " + j + "px, 0)");
                            }
                        }),
                        a(window).on("mouseup.lg.zoom", function (a) {
                            e && ((e = !1), b.core.$outer.removeClass("lg-zoom-dragging"), !f || (c.x === d.x && c.y === d.y) || ((d = { x: a.pageX, y: a.pageY }), b.touchendZoom(c, d, g, h)), (f = !1)),
                                b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab");
                        });
                }),
                (d.prototype.touchendZoom = function (a, b, c, d) {
                    var e = this,
                        f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),
                        g = e.core.$slide.eq(e.core.index).find(".lg-object"),
                        h = -Math.abs(f.attr("data-x")) + (b.x - a.x),
                        i = -Math.abs(f.attr("data-y")) + (b.y - a.y),
                        j = (e.core.$outer.find(".lg").height() - g.prop("offsetHeight")) / 2,
                        k = Math.abs(g.prop("offsetHeight") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").height() + j),
                        l = (e.core.$outer.find(".lg").width() - g.prop("offsetWidth")) / 2,
                        m = Math.abs(g.prop("offsetWidth") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").width() + l);
                    (Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) &&
                        (d && (i <= -k ? (i = -k) : i >= -j && (i = -j)),
                        c && (h <= -m ? (h = -m) : h >= -l && (h = -l)),
                        d ? f.attr("data-y", Math.abs(i)) : (i = -Math.abs(f.attr("data-y"))),
                        c ? f.attr("data-x", Math.abs(h)) : (h = -Math.abs(f.attr("data-x"))),
                        e.core.s.useLeftForZoom ? f.css({ left: h + "px", top: i + "px" }) : f.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"));
                }),
                (d.prototype.destroy = function () {
                    var b = this;
                    b.core.$el.off(".lg.zoom"), a(window).off(".lg.zoom"), b.core.$slide.off(".lg.zoom"), b.core.$el.off(".lg.tm.zoom"), b.resetZoom(), clearTimeout(b.zoomabletimeout), (b.zoomabletimeout = !1);
                }),
                (a.fn.lightGallery.modules.zoom = d);
        })();
    }),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define(["jquery"], function (a) {
                  return b(a);
              })
            : "object" == typeof exports
            ? (module.exports = b(require("jquery")))
            : b(jQuery);
    })(0, function (a) {
        !(function () {
            "use strict";
            var b = { hash: !0 },
                c = function (c) {
                    return (this.core = a(c).data("lightGallery")), (this.core.s = a.extend({}, b, this.core.s)), this.core.s.hash && ((this.oldHash = window.location.hash), this.init()), this;
                };
            (c.prototype.init = function () {
                var b,
                    c = this;
                c.core.$el.on("onAfterSlide.lg.tm", function (a, b, d) {
                    history.replaceState
                        ? history.replaceState(null, null, window.location.pathname + window.location.search + "#lg=" + c.core.s.galleryId + "&slide=" + d)
                        : (window.location.hash = "lg=" + c.core.s.galleryId + "&slide=" + d);
                }),
                    a(window).on("hashchange.lg.hash", function () {
                        b = window.location.hash;
                        var a = parseInt(b.split("&slide=")[1], 10);
                        b.indexOf("lg=" + c.core.s.galleryId) > -1 ? c.core.slide(a, !1, !1) : c.core.lGalleryOn && c.core.destroy();
                    });
            }),
                (c.prototype.destroy = function () {
                    this.core.s.hash &&
                        (this.oldHash && this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0
                            ? history.replaceState
                                ? history.replaceState(null, null, this.oldHash)
                                : (window.location.hash = this.oldHash)
                            : history.replaceState
                            ? history.replaceState(null, document.title, window.location.pathname + window.location.search)
                            : (window.location.hash = ""),
                        this.core.$el.off(".lg.hash"));
                }),
                (a.fn.lightGallery.modules.hash = c);
        })();
    }),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define(["jquery"], function (a) {
                  return b(a);
              })
            : "object" == typeof exports
            ? (module.exports = b(require("jquery")))
            : b(jQuery);
    })(0, function (a) {
        !(function () {
            "use strict";
            var b = { share: !0, facebook: !0, facebookDropdownText: "Facebook", twitter: !0, twitterDropdownText: "Twitter", googlePlus: !0, googlePlusDropdownText: "GooglePlus", pinterest: !0, pinterestDropdownText: "Pinterest" },
                c = function (c) {
                    return (this.core = a(c).data("lightGallery")), (this.core.s = a.extend({}, b, this.core.s)), this.core.s.share && this.init(), this;
                };
            (c.prototype.init = function () {
                var b = this,
                    c = '<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
                (c += b.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + "</span></a></li>" : ""),
                    (c += b.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + "</span></a></li>" : ""),
                    (c += b.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + "</span></a></li>" : ""),
                    (c += b.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + "</span></a></li>" : ""),
                    (c += "</ul></span>"),
                    this.core.$outer.find(".lg-toolbar").append(c),
                    this.core.$outer.find(".lg").append('<div id="lg-dropdown-overlay"></div>'),
                    a("#lg-share").on("click.lg", function () {
                        b.core.$outer.toggleClass("lg-dropdown-active");
                    }),
                    a("#lg-dropdown-overlay").on("click.lg", function () {
                        b.core.$outer.removeClass("lg-dropdown-active");
                    }),
                    b.core.$el.on("onAfterSlide.lg.tm", function (c, d, e) {
                        setTimeout(function () {
                            a("#lg-share-facebook").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(b.getSahreProps(e, "facebookShareUrl") || window.location.href)),
                                a("#lg-share-twitter").attr("href", "https://twitter.com/intent/tweet?text=" + b.getSahreProps(e, "tweetText") + "&url=" + encodeURIComponent(b.getSahreProps(e, "twitterShareUrl") || window.location.href)),
                                a("#lg-share-googleplus").attr("href", "https://plus.google.com/share?url=" + encodeURIComponent(b.getSahreProps(e, "googleplusShareUrl") || window.location.href)),
                                a("#lg-share-pinterest").attr(
                                    "href",
                                    "http://www.pinterest.com/pin/create/button/?url=" +
                                        encodeURIComponent(b.getSahreProps(e, "pinterestShareUrl") || window.location.href) +
                                        "&media=" +
                                        encodeURIComponent(b.getSahreProps(e, "src")) +
                                        "&description=" +
                                        b.getSahreProps(e, "pinterestText")
                                );
                        }, 100);
                    });
            }),
                (c.prototype.getSahreProps = function (a, b) {
                    var c = "";
                    if (this.core.s.dynamic) c = this.core.s.dynamicEl[a][b];
                    else {
                        var d = this.core.$items.eq(a).attr("href"),
                            e = this.core.$items.eq(a).data(b);
                        c = "src" === b ? d || e : e;
                    }
                    return c;
                }),
                (c.prototype.destroy = function () {}),
                (a.fn.lightGallery.modules.share = c);
        })();
    });

/* ========================
	custom.js
========================= */
var BeautyZone = (function () {
    siteUrl = "";
    var e = $(window).width(),
        t = function () {
            $(".header").css("height", "");
            var e = $(".header").height();
            $(".header").css("height", e);
        },
        i = function () {
            "use strict";
            if (
                (jQuery(".dzload").each(function () {
                    var e = siteUrl + $(this).attr("dzsrc");
                    jQuery(this).hide(function () {
                        jQuery(this).load(e, function () {
                            jQuery(this).fadeIn("slow");
                        });
                    });
                }),
                e < 991)
            ) {
                if (0 == $(".mo-left .header-nav").children("div").length) {
                    var t = jQuery("<div>").append($(".mo-left .logo-header").clone()).html();
                    jQuery(".mo-left .header-nav").prepend(t),
                        jQuery(".mo-left .header-nav .logo-header > a > img").attr("src", "images/logo.png"),
                        jQuery(".mo-left.lw .header-nav .logo-header > a > img").attr("src", "images/logo-white.png");
                }
            } else jQuery(".mo-left .header-nav div").empty(), jQuery(".mo-left.lw .header-nav div").empty();
            e <= 991 &&
                jQuery(".navbar-nav > li > a, .sub-menu > li > a")
                    .unbind()
                    .on("click", function (e) {
                        jQuery(this).parent().hasClass("open") ? jQuery(this).parent().removeClass("open") : (jQuery(this).parent().parent().find("li").removeClass("open"), jQuery(this).parent().addClass("open"));
                    });
        },
        r = function (e) {
            if (0 == jQuery(e).length) return !1;
            var t,
                i = 0,
                r = 0,
                n = new Array();
            $(e).each(function () {
                if (((t = $(this)), $(t).height("auto"), (topPostion = t.position().top), r != topPostion)) {
                    for (currentDiv = 0; currentDiv < n.length; currentDiv++) n[currentDiv].height(i);
                    (n.length = 0), (r = topPostion), (i = t.height()), n.push(t);
                } else n.push(t), (i = i < t.height() ? t.height() : i);
                for (currentDiv = 0; currentDiv < n.length; currentDiv++) n[currentDiv].height(i);
            });
        },
        n = function () {
            "use strict";
            jQuery(".site-footer").css("display", "block"), jQuery(".site-footer").css("height", "auto");
            var t = jQuery(".site-footer").outerHeight();
            e > 1280 && jQuery(".footer-fixed > .page-wraper").css("padding-bottom", t), jQuery(".site-footer").css("height", t);
        },
        a = function () {
            "use strict";
            var t = [];
            jQuery(".dzseth > div, .dzseth .img-cover, .dzseth .seth").each(function (e) {
                t.push(jQuery(this).height());
            }),
                jQuery(".dzseth > div, .dzseth .img-cover, .dzseth .seth").each(function (e) {
                    var i = Math.max.apply(Math, t);
                    jQuery(this).css("height", i);
                }),
                (t = []),
                e < 991 &&
                    jQuery(".dzseth > div, .dzseth .img-cover, .dzseth .seth").each(function (e) {
                        jQuery(this).css("height", "");
                    });
        },
        o = function () {
            $(".openbtn").on("click", function (e) {
                e.preventDefault(), $("#mySidenav").length > 0 && (document.getElementById("mySidenav").style.left = "0"), $("#mySidenav1").length > 0 && (document.getElementById("mySidenav1").style.right = "0");
            }),
                $(".closebtn").on("click", function (e) {
                    e.preventDefault(), $("#mySidenav").length > 0 && (document.getElementById("mySidenav").style.left = "-300px"), $("#mySidenav1").length > 0 && (document.getElementById("mySidenav1").style.right = "-820px");
                });
        },
        s = function () {
            "use strict";
            var e = jQuery(this),
                t = e.find(".modal-dialog");
            e.css("display", "block"), t.css("margin-top", Math.max(0, (jQuery(window).height() - t.height()) / 2));
        },
        l = new Date();
    (monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]),
        l.setMonth(l.getMonth() + 1),
        (l = l.getDate() + " " + monthNames[l.getMonth()] + " " + l.getFullYear());
    return {
        init: function () {
            jQuery(".box-hover").on("mouseenter", function () {
                jQuery(".box-hover").removeClass("active"), jQuery(this).addClass("active");
            }),
                $(".wow").length > 0 && new WOW({ boxClass: "wow", animateClass: "animated", offset: 50, mobile: !1 }).init(),
                $(".price-slide, .price-slide-2").length > 0 &&
                    $("#slider-range,#slider-range-2").slider({
                        range: !0,
                        min: 300,
                        max: 4e3,
                        values: [0, 5e3],
                        slide: function (e, t) {
                            var i = t.values[0],
                                r = t.values[1];
                            $("#" + this.id)
                                .prev()
                                .val("$" + i + " - $" + r);
                        },
                    }),
                (function () {
                    "use strict";
                    var e = parseInt($(".onepage").css("height"), 10);
                    $(".scroll")
                        .unbind()
                        .on("click", function (e) {
                            if ((e.preventDefault(), "" !== this.hash)) {
                                var t = this.hash,
                                    i = $(t).offset().top,
                                    r = parseInt($(".onepage").css("height"), 10);
                                $("body").scrollspy({ target: ".navbar", offset: r + 2 });
                                var n = i - r;
                                $("html, body").animate({ scrollTop: n }, 800, function () {});
                            }
                        }),
                        $("body").scrollspy({ target: ".navbar", offset: e + 2 });
                })(),
                i(),
                t(),
                (function () {
                    "use strict";
                    var e = jQuery("#quik-search-btn"),
                        t = jQuery("#quik-search-remove");
                    e.on("click", function () {
                        jQuery(".dlab-quik-search").animate({ width: "100%" }), jQuery(".dlab-quik-search").delay(500).css({ left: "0" });
                    }),
                        t.on("click", function () {
                            jQuery(".dlab-quik-search").animate({ width: "0%", right: "0" }), jQuery(".dlab-quik-search").css({ left: "auto" });
                        });
                })(),
                (function () {
                    "use strict";
                    jQuery(".mfp-gallery").length &&
                        jQuery(".mfp-gallery").magnificPopup({
                            delegate: ".mfp-link",
                            type: "image",
                            tLoading: "Loading image #%curr%...",
                            mainClass: "mfp-img-mobile",
                            gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] },
                            image: {
                                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                                titleSrc: function (e) {
                                    return e.el.attr("title") + "<small></small>";
                                },
                            },
                        }),
                        jQuery(".video").length &&
                            jQuery(".video").magnificPopup({
                                type: "iframe",
                                iframe: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title">Some caption</div></div>' },
                                callbacks: {
                                    markupParse: function (e, t, i) {
                                        t.title = i.el.attr("title");
                                    },
                                },
                            }),
                        jQuery(".popup-youtube, .popup-vimeo, .popup-gmaps").length &&
                            $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({ disableOn: 700, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1 });
                })(),
                jQuery("#accordion").on("hidden.bs.collapse", function (e) {
                    jQuery(e.target).prev(".panel-heading").find("i.indicator").toggleClass("glyphicon-minus glyphicon-plus");
                }),
                jQuery("#accordion").on("shown.bs.collapse", function (e) {
                    jQuery(e.target).prev(".panel-heading").find("i.indicator").toggleClass("glyphicon-minus glyphicon-plus");
                }),
                (function () {
                    "use strict";
                    jQuery("button.scroltop").on("click", function () {
                        return jQuery("html, body").animate({ scrollTop: 0 }, 1e3), !1;
                    }),
                        jQuery(window).bind("scroll", function () {
                            jQuery(window).scrollTop() > 900 ? jQuery("button.scroltop").fadeIn(1e3) : jQuery("button.scroltop").fadeOut(1e3);
                        });
                })(),
                (jQuery.support.placeholder = "placeholder" in document.createElement("input")),
                jQuery.support.placeholder ||
                    (jQuery("[placeholder]")
                        .focus(function () {
                            jQuery(this).val() == jQuery(this).attr("placeholder") && jQuery(this).val("");
                        })
                        .blur(function () {
                            "" == jQuery(this).val() && jQuery(this).val(jQuery(this).attr("placeholder"));
                        })
                        .blur(),
                    jQuery("[placeholder]")
                        .parents("form")
                        .submit(function () {
                            jQuery(this)
                                .find("[placeholder]")
                                .each(function () {
                                    jQuery(this).val() == jQuery(this).attr("placeholder") && jQuery(this).val("");
                                });
                        })),
                jQuery(".dezPlaceAni").length &&
                    ($("input, textarea").focus(function () {
                        $(this).parents(".form-group").addClass("focused");
                    }),
                    $("input, textarea").blur(function () {
                        "" == $(this).val() ? ($(this).removeClass("filled"), $(this).parents(".form-group").removeClass("focused")) : $(this).addClass("filled");
                    })),
                n(),
                (function () {
                    "use strict";
                    jQuery(document).on("change", ".btn-file :file", function () {
                        var e = jQuery(this),
                            t = e.get(0).files ? e.get(0).files.length : 1,
                            i = e.val().replace(/\\/g, "../index.html").replace(/.*\//, "");
                        e.trigger("fileselect", [t, i]);
                    }),
                        jQuery(".btn-file :file").on("fileselect", function (e, t, i) {
                            input = jQuery(this).parents(".input-group").find(":text");
                            var r = t > 10 ? t + " files selected" : i;
                            input.length ? input.val(r) : r && alert(r);
                        });
                })(),
                (function () {
                    "use strict";
                    jQuery(window).bind("scroll", function () {
                        if (jQuery(".sticky-header").length) {
                            var e = jQuery(".sticky-header");
                            $(window).scrollTop() > e.offset().top ? e.addClass("is-fixed") : e.removeClass("is-fixed");
                        }
                    });
                })(),
                a(),
                jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>'),
                jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>'),
                (function (e) {
                    $(".countdown").length &&
                        $(".countdown").countdown({ date: e + " 23:5" }, function () {
                            $(".countdown").text("we are live");
                        });
                })(l),
                $(".content-scroll").length && $(".content-scroll").mCustomScrollbar({ setWidth: !1, setHeight: !1, axis: "y" }),
                o(),
                $(".item-close").on("click", function () {
                    $(this).closest(".cart-item").hide("500");
                }),
                $(".cart-btn")
                    .unbind()
                    .on("click", function () {
                        $(".cart-list").slideToggle("slow");
                    }),
                $(".full-height").css("height", $(window).height()),
                jQuery(window).on("resize", function () {
                    jQuery(".modal:visible").each(s), jQuery(".equal-wraper").length && r(".equal-wraper .equal-col"), n();
                }),
                $("#lightgallery, .lightgallery").length > 0 && $("#lightgallery, .lightgallery").lightGallery({ selector: ".check-km", loop: !0, thumbnail: !0, exThumbImage: "data-exthumbimage" }),
                jQuery(".modal").on("show.bs.modal", s);
        },
        load: function () {
            e > 1023 &&
                jQuery(".bgeffect").length &&
                skrollr.init({
                    edgeStrategy: "set",
                    easing: {
                        WTF: Math.random,
                        inverted: function (e) {
                            return 1 - e;
                        },
                    },
                }),
                jQuery("select").length && jQuery("select").selectpicker(),
                jQuery("input[name='demo_vertical2']").length && jQuery("input[name='demo_vertical2']").TouchSpin({ verticalbuttons: !0, verticalupclass: "ti-plus", verticaldownclass: "ti-minus" }),
                r(".equal-wraper .equal-col"),
                jQuery(".counter").length && jQuery(".counter").counterUp({ delay: 10, time: 3e3 }),
                (function () {
                    "use strict";
                    if (jQuery("#masonry, .masonry").length) {
                        var e = $("#masonry, .masonry");
                        jQuery(".card-container").length &&
                            e.imagesLoaded(function () {
                                e.masonry({ gutterWidth: 15, isAnimated: !0, itemSelector: ".card-container" });
                            });
                    }
                    jQuery(".filters").length &&
                        jQuery(".filters").on("click", "li", function (t) {
                            t.preventDefault();
                            var i = $(this).attr("data-filter");
                            e.masonryFilter({
                                filter: function () {
                                    return !i || $(this).hasClass(i);
                                },
                            });
                        });
                })(),
                jQuery("body").append(
                    ''
                );
        },
        handleMasonryFilter: function () {
            !(function () {
                "use strict";
                if (jQuery("#masonry1").length) {
                    var e = $("#masonry1");
                    e.imagesLoaded(function () {
                        e.masonry({ gutterWidth: 15, isAnimated: !0, itemSelector: ".card-container" });
                    }),
                        jQuery(".filters1").on("click", "li", function (t) {
                            t.preventDefault();
                            var i = $(this).attr("data-filter");
                            e.masonryFilter({
                                filter: function () {
                                    return !i || $(this).hasClass(i);
                                },
                            });
                        });
                }
                if (jQuery("#masonry2").length) {
                    var t = $("#masonry2");
                    t.imagesLoaded(function () {
                        t.masonry({ gutterWidth: 15, isAnimated: !0, itemSelector: ".card-container" });
                    }),
                        jQuery(".filters2").on("click", "li", function (e) {
                            e.preventDefault();
                            var i = $(this).attr("data-filter");
                            t.masonryFilter({
                                filter: function () {
                                    return !i || $(this).hasClass(i);
                                },
                            });
                        });
                }
            })();
        },
        resize: function () {
            (e = $(window).width()), i(), o(), a(), t();
        },
    };
})();
jQuery(document).ready(function () {
    BeautyZone.init(),
        jQuery(".navicon").on("click", function () {
            $(this).toggleClass("open");
        }),
        $('a[data-toggle="tab"]').click(function () {
            $('a[data-toggle="tab"]').click(function () {
                $($(this).attr("href")).show().addClass("show active").siblings().hide();
            });
        });
}),
    jQuery(window).on("load", function (e) {
        BeautyZone.load(),
            setTimeout(function () {
                jQuery("#loading-area").remove();
            }, 0);
    }),
    jQuery(window).on("resize", function () {
        "use strict";
        BeautyZone.resize();
    });

/* ========================
	dz.carousel.min.js
========================= */
jQuery(document).ready(function () {
    "use strict";
    jQuery(".img-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        autoplaySpeed: 3e3,
        navSpeed: 3e3,
        paginationSpeed: 3e3,
        slideSpeed: 3e3,
        smartSpeed: 3e3,
        autoplay: 3e3,
        nav: !0,
        dots: !0,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        responsive: { 0: { items: 1 }, 480: { items: 2 }, 1024: { items: 3 }, 1200: { items: 4 } },
    }),
        jQuery(".img-carousel-dots").owlCarousel({
            loop: !0,
            autoplaySpeed: 3e3,
            navSpeed: 3e3,
            paginationSpeed: 3e3,
            slideSpeed: 3e3,
            smartSpeed: 3e3,
            autoplay: 3e3,
            margin: 30,
            nav: !1,
            dots: !0,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            responsive: { 0: { items: 1 }, 480: { items: 2 }, 1024: { items: 3 }, 1200: { items: 4 } },
        }),
        jQuery(".img-carousel-content").owlCarousel({
            loop: !0,
            autoplaySpeed: 3e3,
            navSpeed: 3e3,
            paginationSpeed: 3e3,
            slideSpeed: 3e3,
            smartSpeed: 3e3,
            autoplay: 3e3,
            margin: 30,
            nav: !0,
            dots: !1,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            responsive: { 0: { items: 1 }, 480: { items: 2 }, 1024: { items: 3 }, 1200: { items: 4 } },
        }),
        jQuery(".blog-carousel").owlCarousel({
            loop: !0,
            margin: 30,
            autoplaySpeed: 3e3,
            navSpeed: 3e3,
            paginationSpeed: 3e3,
            slideSpeed: 3e3,
            smartSpeed: 3e3,
            autoplay: 3e3,
            nav: !0,
            dots: !1,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            responsive: { 0: { items: 1 }, 480: { items: 2 }, 991: { items: 2 }, 1000: { items: 3 } },
        }),
        jQuery(".owl-fade-one").owlCarousel({
            loop: !0,
            autoplaySpeed: 3e3,
            navSpeed: 3e3,
            paginationSpeed: 3e3,
            slideSpeed: 3e3,
            smartSpeed: 3e3,
            autoplay: 3e3,
            autoplayTimeout: 2e3,
            margin: 30,
            nav: !0,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            items: 1,
            dots: !1,
            animateOut: "fadeOut",
        }),
        jQuery(".testimonial-two-dots").owlCarousel({
            loop: !0,
            margin: 20,
            autoplaySpeed: 3e3,
            navSpeed: 3e3,
            paginationSpeed: 3e3,
            slideSpeed: 3e3,
            smartSpeed: 3e3,
            autoplay: 3e3,
            nav: !0,
            dots: !0,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            responsive: { 0: { items: 1 }, 480: { items: 2 }, 991: { items: 2 }, 1000: { items: 3 } },
        }),
        jQuery(".team-carousel").owlCarousel({
            center: !0,
            items: 3,
            loop: !0,
            margin: 0,
            nav: !1,
            dots: !0,
            autoplaySpeed: 3e3,
            navSpeed: 3e3,
            paginationSpeed: 3e3,
            slideSpeed: 3e3,
            smartSpeed: 3e3,
            autoplay: 3e3,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            responsive: { 0: { items: 1 }, 480: { items: 1 }, 767: { items: 3 }, 1000: { items: 5 } },
        }),
        jQuery(".carousel-gallery").owlCarousel({
            loop: !0,
            autoplaySpeed: 3e3,
            navSpeed: 3e3,
            paginationSpeed: 3e3,
            slideSpeed: 3e3,
            smartSpeed: 3e3,
            autoplay: 3e3,
            margin: 0,
            nav: !1,
            dots: !1,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            responsive: { 0: { items: 4 }, 480: { items: 6 }, 1024: { items: 8 }, 1200: { items: 10 } },
        }),
        jQuery(".carousel-service").owlCarousel({
            loop: !0,
            autoplaySpeed: 3e3,
            navSpeed: 3e3,
            paginationSpeed: 3e3,
            slideSpeed: 3e3,
            smartSpeed: 3e3,
            autoplay: 3e3,
            margin: 30,
            nav: !1,
            dots: !0,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            responsive: { 0: { items: 1 }, 480: { items: 1 }, 1024: { items: 2 }, 1200: { items: 2 } },
        }),
        jQuery(".testimonial-one").owlCarousel({
            loop: !0,
            autoplaySpeed: 3e3,
            navSpeed: 3e3,
            paginationSpeed: 3e3,
            slideSpeed: 3e3,
            smartSpeed: 3e3,
            autoplay: 3e3,
            margin: 30,
            nav: !1,
            dots: !0,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            responsive: { 0: { items: 1 }, 480: { items: 1 }, 767: { items: 1 }, 1000: { items: 1 } },
        }),
        jQuery(".news-post").owlCarousel({
            loop: !0,
            autoplaySpeed: 3e3,
            navSpeed: 3e3,
            paginationSpeed: 3e3,
            slideSpeed: 3e3,
            smartSpeed: 3e3,
            autoplay: 3e3,
            margin: 15,
            nav: !1,
            dots: !0,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            responsive: { 0: { items: 1 }, 768: { items: 2 }, 991: { items: 3 }, 1200: { items: 4 } },
        });
});

/* ========================
	dz.ajax.js
========================= */
function contactForm() {
    var e;
    (window.verifyRecaptchaCallback = function (e) {
        $("input[data-recaptcha]").val(e).trigger("change");
    }),
        (window.expiredRecaptchaCallback = function () {
            $("input[data-recaptcha]").val("").trigger("change");
        }),
        $(".dzForm").submit(function (t) {
            t.preventDefault(), $(".dzFormMsg").html('<div class="gen alert alert-success">Submiting..</div>');
            var s = $(this).attr("action"),
                a = $(this).serialize();
            $.ajax({
                method: "POST",
                url: s,
                data: a,
                dataType: "json",
                success: function (t) {
                    1 == t.status && (e = '<div class="gen alert alert-success">' + t.msg + "</div>"),
                        0 == t.status && (e = '<div class="err alert alert-danger">' + t.msg + "</div>"),
                        $(".dzFormMsg").html(e),
                        $(".dzForm")[0].reset(),
                        grecaptcha.reset();
                },
            });
        }),
        setInterval(function () {
            $(".dzFormMsg .alert").hide(1e3);
        }, 1e4),
        $(".dzSubscribe").submit(function (t) {
            t.preventDefault();
            var s = $(this).attr("action"),
                a = $(this).serialize();
            $.ajax({
                method: "POST",
                url: s,
                data: a,
                dataType: "json",
                success: function (t) {
                    1 == t.status && (e = '<p style="color: #34A853">' + t.msg + "</p>"), 0 == t.status && (e = '<p style="color: #EA4335">' + t.msg + "</p>"), $(".dzSubscribeMsg").html(e), $(".dzSubscribe")[0].reset();
                },
            });
        }),
        setInterval(function () {
            $(".dzSubscribeMsg p").hide(1e3);
        }, 5e3);
}
function init_map() {
    var e = {
            zoom: 10,
            center: new google.maps.LatLng(51.5073509, -0.12775829999998223),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                { featureType: "all", elementType: "labels.text.fill", stylers: [{ saturation: 36 }, { color: "#000000" }, { lightness: 40 }] },
                { featureType: "all", elementType: "labels.text.stroke", stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 16 }] },
                { featureType: "all", elementType: "labels.icon", stylers: [{ visibility: "off" }] },
                { featureType: "administrative", elementType: "geometry.fill", stylers: [{ color: "#000000" }, { lightness: 20 }] },
                { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }] },
                { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 20 }] },
                { featureType: "poi", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 21 }] },
                { featureType: "road.highway", elementType: "geometry.fill", stylers: [{ color: "#000000" }, { lightness: 17 }] },
                { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#000000" }, { lightness: 29 }, { weight: 0.2 }] },
                { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 18 }] },
                { featureType: "road.local", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 16 }] },
                { featureType: "transit", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 19 }] },
                { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 17 }] },
            ],
        },
        t = new google.maps.Map(document.getElementById("gmap_canvas"), e);
    (marker = new google.maps.Marker({ map: t, position: new google.maps.LatLng(51.5073509, -0.12775829999998223) })),
        (infowindow = new google.maps.InfoWindow({ content: "<strong>Title</strong><br>London, United Kingdom<br>" })),
        google.maps.event.addListener(marker, "click", function () {
            infowindow.open(t, marker);
        });
}
$("#gmap_canvas").length > 1 && google.maps.event.addDomListener(window, "load", init_map),
    jQuery(document).ready(function () {
        "use strict";
        contactForm();
    });
