/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    "use strict";
    var n = []
      , r = Object.getPrototypeOf
      , i = n.slice
      , o = n.flat ? function(e) {
        return n.flat.call(e)
    }
    : function(e) {
        return n.concat.apply([], e)
    }
      , s = n.push
      , a = n.indexOf
      , l = {}
      , c = l.toString
      , u = l.hasOwnProperty
      , d = u.toString
      , f = d.call(Object)
      , h = {}
      , p = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
      , g = function(e) {
        return null != e && e === e.window
    }
      , m = e.document
      , v = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function y(e, t, n) {
        var r, i, o = (n = n || m).createElement("script");
        if (o.text = e,
        t)
            for (r in v)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var _ = "3.7.1"
      , w = /HTML$/i
      , x = function(e, t) {
        return new x.fn.init(e,t)
    };
    function S(e) {
        var t = !!e && "length"in e && e.length
          , n = b(e);
        return !p(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function T(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    x.fn = x.prototype = {
        jquery: _,
        constructor: x,
        length: 0,
        toArray: function() {
            return i.call(this)
        },
        get: function(e) {
            return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return x.each(this, e)
        },
        map: function(e) {
            return this.pushStack(x.map(this, (function(t, n) {
                return e.call(t, n, t)
            }
            )))
        },
        slice: function() {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(x.grep(this, (function(e, t) {
                return (t + 1) % 2
            }
            )))
        },
        odd: function() {
            return this.pushStack(x.grep(this, (function(e, t) {
                return t % 2
            }
            )))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    },
    x.extend = x.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || p(s) || (s = {}),
        a === l && (s = this,
        a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && s !== r && (c && r && (x.isPlainObject(r) || (i = Array.isArray(r))) ? (n = s[t],
                    o = i && !Array.isArray(n) ? [] : i || x.isPlainObject(n) ? n : {},
                    i = !1,
                    s[t] = x.extend(c, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }
    ,
    x.extend({
        expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = r(e)) || "function" == typeof (n = u.call(t, "constructor") && t.constructor) && d.call(n) === f)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            y(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (S(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        text: function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (!i)
                for (; t = e[r++]; )
                    n += x.text(t);
            return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (S(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : a.call(t, e, n)
        },
        isXMLDoc: function(e) {
            var t = e && e.namespaceURI
              , n = e && (e.ownerDocument || e).documentElement;
            return !w.test(t || n && n.nodeName || "HTML")
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
                !t(e[i], i) !== s && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, s = 0, a = [];
            if (S(e))
                for (r = e.length; s < r; s++)
                    null != (i = t(e[s], s, n)) && a.push(i);
            else
                for (s in e)
                    null != (i = t(e[s], s, n)) && a.push(i);
            return o(a)
        },
        guid: 1,
        support: h
    }),
    "function" == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]),
    x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }
    ));
    var C = n.pop
      , D = n.sort
      , A = n.splice
      , E = "[\\x20\\t\\r\\n\\f]"
      , k = new RegExp("^" + E + "+|((?:^|[^\\\\])(?:\\\\.)*)" + E + "+$","g");
    x.contains = function(e, t) {
        var n = t && t.parentNode;
        return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
    }
    ;
    var L = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function I(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
    }
    x.escapeSelector = function(e) {
        return (e + "").replace(L, I)
    }
    ;
    var O = m
      , j = s;
    !function() {
        var t, r, o, s, l, c, d, f, p, g, m = j, v = x.expando, y = 0, b = 0, _ = ee(), w = ee(), S = ee(), L = ee(), I = function(e, t) {
            return e === t && (l = !0),
            0
        }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", N = "(?:\\\\[\\da-fA-F]{1,6}" + E + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", F = "\\[" + E + "*(" + N + ")(?:" + E + "*([*^$|!~]?=)" + E + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + E + "*\\]", H = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)", R = new RegExp(E + "+","g"), M = new RegExp("^" + E + "*," + E + "*"), $ = new RegExp("^" + E + "*([>+~]|" + E + ")" + E + "*"), W = new RegExp(E + "|>"), q = new RegExp(H), B = new RegExp("^" + N + "$"), z = {
            ID: new RegExp("^#(" + N + ")"),
            CLASS: new RegExp("^\\.(" + N + ")"),
            TAG: new RegExp("^(" + N + "|[*])"),
            ATTR: new RegExp("^" + F),
            PSEUDO: new RegExp("^" + H),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + E + "*(even|odd|(([+-]|)(\\d*)n|)" + E + "*(?:([+-]|)" + E + "*(\\d+)|))" + E + "*\\)|)","i"),
            bool: new RegExp("^(?:" + P + ")$","i"),
            needsContext: new RegExp("^" + E + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + E + "*((?:-\\d)?\\d*)" + E + "*\\)|)(?=[^-]|$)","i")
        }, U = /^(?:input|select|textarea|button)$/i, V = /^h\d$/i, X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, J = /[+~]/, Y = new RegExp("\\\\[\\da-fA-F]{1,6}" + E + "?|\\\\([^\\r\\n\\f])","g"), Q = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, G = function() {
            le()
        }, K = fe((function(e) {
            return !0 === e.disabled && T(e, "fieldset")
        }
        ), {
            dir: "parentNode",
            next: "legend"
        });
        try {
            m.apply(n = i.call(O.childNodes), O.childNodes),
            n[O.childNodes.length].nodeType
        } catch (e) {
            m = {
                apply: function(e, t) {
                    j.apply(e, i.call(t))
                },
                call: function(e) {
                    j.apply(e, i.call(arguments, 1))
                }
            }
        }
        function Z(e, t, n, r) {
            var i, o, s, a, l, u, d, g = t && t.ownerDocument, y = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== y && 9 !== y && 11 !== y)
                return n;
            if (!r && (le(t),
            t = t || c,
            f)) {
                if (11 !== y && (l = X.exec(e)))
                    if (i = l[1]) {
                        if (9 === y) {
                            if (!(s = t.getElementById(i)))
                                return n;
                            if (s.id === i)
                                return m.call(n, s),
                                n
                        } else if (g && (s = g.getElementById(i)) && Z.contains(t, s) && s.id === i)
                            return m.call(n, s),
                            n
                    } else {
                        if (l[2])
                            return m.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((i = l[3]) && t.getElementsByClassName)
                            return m.apply(n, t.getElementsByClassName(i)),
                            n
                    }
                if (!(L[e + " "] || p && p.test(e))) {
                    if (d = e,
                    g = t,
                    1 === y && (W.test(e) || $.test(e))) {
                        for ((g = J.test(e) && ae(t.parentNode) || t) == t && h.scope || ((a = t.getAttribute("id")) ? a = x.escapeSelector(a) : t.setAttribute("id", a = v)),
                        o = (u = ue(e)).length; o--; )
                            u[o] = (a ? "#" + a : ":scope") + " " + de(u[o]);
                        d = u.join(",")
                    }
                    try {
                        return m.apply(n, g.querySelectorAll(d)),
                        n
                    } catch (t) {
                        L(e, !0)
                    } finally {
                        a === v && t.removeAttribute("id")
                    }
                }
            }
            return ye(e.replace(k, "$1"), t, n, r)
        }
        function ee() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
        }
        function te(e) {
            return e[v] = !0,
            e
        }
        function ne(e) {
            var t = c.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function re(e) {
            return function(t) {
                return T(t, "input") && t.type === e
            }
        }
        function ie(e) {
            return function(t) {
                return (T(t, "input") || T(t, "button")) && t.type === e
            }
        }
        function oe(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && K(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function se(e) {
            return te((function(t) {
                return t = +t,
                te((function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--; )
                        n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                }
                ))
            }
            ))
        }
        function ae(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function le(e) {
            var t, n = e ? e.ownerDocument || e : O;
            return n != c && 9 === n.nodeType && n.documentElement ? (d = (c = n).documentElement,
            f = !x.isXMLDoc(c),
            g = d.matches || d.webkitMatchesSelector || d.msMatchesSelector,
            d.msMatchesSelector && O != c && (t = c.defaultView) && t.top !== t && t.addEventListener("unload", G),
            h.getById = ne((function(e) {
                return d.appendChild(e).id = x.expando,
                !c.getElementsByName || !c.getElementsByName(x.expando).length
            }
            )),
            h.disconnectedMatch = ne((function(e) {
                return g.call(e, "*")
            }
            )),
            h.scope = ne((function() {
                return c.querySelectorAll(":scope")
            }
            )),
            h.cssHas = ne((function() {
                try {
                    return c.querySelector(":has(*,:jqfake)"),
                    !1
                } catch (e) {
                    return !0
                }
            }
            )),
            h.getById ? (r.filter.ID = function(e) {
                var t = e.replace(Y, Q);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && f) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (r.filter.ID = function(e) {
                var t = e.replace(Y, Q);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && f) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (i = t.getElementsByName(e),
                        r = 0; o = i[r++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            r.find.TAG = function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
            }
            ,
            r.find.CLASS = function(e, t) {
                if (void 0 !== t.getElementsByClassName && f)
                    return t.getElementsByClassName(e)
            }
            ,
            p = [],
            ne((function(e) {
                var t;
                d.appendChild(e).innerHTML = "<a id='" + v + "' href='' disabled='disabled'></a><select id='" + v + "-\r\\' disabled='disabled'><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || p.push("\\[" + E + "*(?:value|" + P + ")"),
                e.querySelectorAll("[id~=" + v + "-]").length || p.push("~="),
                e.querySelectorAll("a#" + v + "+*").length || p.push(".#.+[+~]"),
                e.querySelectorAll(":checked").length || p.push(":checked"),
                (t = c.createElement("input")).setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                d.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"),
                (t = c.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || p.push("\\[" + E + "*name" + E + "*=" + E + "*(?:''|\"\")")
            }
            )),
            h.cssHas || p.push(":has"),
            p = p.length && new RegExp(p.join("|")),
            I = function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === c || e.ownerDocument == O && Z.contains(O, e) ? -1 : t === c || t.ownerDocument == O && Z.contains(O, t) ? 1 : s ? a.call(s, e) - a.call(s, t) : 0 : 4 & n ? -1 : 1)
            }
            ,
            c) : c
        }
        for (t in Z.matches = function(e, t) {
            return Z(e, null, null, t)
        }
        ,
        Z.matchesSelector = function(e, t) {
            if (le(e),
            f && !L[t + " "] && (!p || !p.test(t)))
                try {
                    var n = g.call(e, t);
                    if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    L(t, !0)
                }
            return Z(t, c, null, [e]).length > 0
        }
        ,
        Z.contains = function(e, t) {
            return (e.ownerDocument || e) != c && le(e),
            x.contains(e, t)
        }
        ,
        Z.attr = function(e, t) {
            (e.ownerDocument || e) != c && le(e);
            var n = r.attrHandle[t.toLowerCase()]
              , i = n && u.call(r.attrHandle, t.toLowerCase()) ? n(e, t, !f) : void 0;
            return void 0 !== i ? i : e.getAttribute(t)
        }
        ,
        Z.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        x.uniqueSort = function(e) {
            var t, n = [], r = 0, o = 0;
            if (l = !h.sortStable,
            s = !h.sortStable && i.call(e, 0),
            D.call(e, I),
            l) {
                for (; t = e[o++]; )
                    t === e[o] && (r = n.push(o));
                for (; r--; )
                    A.call(e, n[r], 1)
            }
            return s = null,
            e
        }
        ,
        x.fn.uniqueSort = function() {
            return this.pushStack(x.uniqueSort(i.apply(this)))
        }
        ,
        r = x.expr = {
            cacheLength: 50,
            createPseudo: te,
            match: z,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Y, Q),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(Y, Q),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || Z.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Z.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && q.test(n) && (t = ue(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Y, Q).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return T(e, t)
                    }
                },
                CLASS: function(e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + E + ")" + e + "(" + E + "|$)")) && _(e, (function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    }
                    ))
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = Z.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "",
                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var c, u, d, f, h, p = o !== s ? "nextSibling" : "previousSibling", g = t.parentNode, m = a && t.nodeName.toLowerCase(), b = !l && !a, _ = !1;
                        if (g) {
                            if (o) {
                                for (; p; ) {
                                    for (d = t; d = d[p]; )
                                        if (a ? T(d, m) : 1 === d.nodeType)
                                            return !1;
                                    h = p = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? g.firstChild : g.lastChild],
                            s && b) {
                                for (_ = (f = (c = (u = g[v] || (g[v] = {}))[e] || [])[0] === y && c[1]) && c[2],
                                d = f && g.childNodes[f]; d = ++f && d && d[p] || (_ = f = 0) || h.pop(); )
                                    if (1 === d.nodeType && ++_ && d === t) {
                                        u[e] = [y, f, _];
                                        break
                                    }
                            } else if (b && (_ = f = (c = (u = t[v] || (t[v] = {}))[e] || [])[0] === y && c[1]),
                            !1 === _)
                                for (; (d = ++f && d && d[p] || (_ = f = 0) || h.pop()) && (!(a ? T(d, m) : 1 === d.nodeType) || !++_ || (b && ((u = d[v] || (d[v] = {}))[e] = [y, _]),
                                d !== t)); )
                                    ;
                            return (_ -= i) === r || _ % r == 0 && _ / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || Z.error("unsupported pseudo: " + e);
                    return i[v] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                    r.setFilters.hasOwnProperty(e.toLowerCase()) ? te((function(e, n) {
                        for (var r, o = i(e, t), s = o.length; s--; )
                            e[r = a.call(e, o[s])] = !(n[r] = o[s])
                    }
                    )) : function(e) {
                        return i(e, 0, n)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: te((function(e) {
                    var t = []
                      , n = []
                      , r = ve(e.replace(k, "$1"));
                    return r[v] ? te((function(e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--; )
                            (o = s[a]) && (e[a] = !(t[a] = o))
                    }
                    )) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }
                )),
                has: te((function(e) {
                    return function(t) {
                        return Z(e, t).length > 0
                    }
                }
                )),
                contains: te((function(e) {
                    return e = e.replace(Y, Q),
                    function(t) {
                        return (t.textContent || x.text(t)).indexOf(e) > -1
                    }
                }
                )),
                lang: te((function(e) {
                    return B.test(e || "") || Z.error("unsupported lang: " + e),
                    e = e.replace(Y, Q).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = f ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }
                )),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === d
                },
                focus: function(e) {
                    return e === function() {
                        try {
                            return c.activeElement
                        } catch (e) {}
                    }() && c.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: oe(!1),
                disabled: oe(!0),
                checked: function(e) {
                    return T(e, "input") && !!e.checked || T(e, "option") && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return V.test(e.nodeName)
                },
                input: function(e) {
                    return U.test(e.nodeName)
                },
                button: function(e) {
                    return T(e, "input") && "button" === e.type || T(e, "button")
                },
                text: function(e) {
                    var t;
                    return T(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: se((function() {
                    return [0]
                }
                )),
                last: se((function(e, t) {
                    return [t - 1]
                }
                )),
                eq: se((function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }
                )),
                even: se((function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                odd: se((function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                lt: se((function(e, t, n) {
                    var r;
                    for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                        e.push(r);
                    return e
                }
                )),
                gt: se((function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                }
                ))
            }
        },
        r.pseudos.nth = r.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[t] = re(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            r.pseudos[t] = ie(t);
        function ce() {}
        function ue(e, t) {
            var n, i, o, s, a, l, c, u = w[e + " "];
            if (u)
                return t ? 0 : u.slice(0);
            for (a = e,
            l = [],
            c = r.preFilter; a; ) {
                for (s in n && !(i = M.exec(a)) || (i && (a = a.slice(i[0].length) || a),
                l.push(o = [])),
                n = !1,
                (i = $.exec(a)) && (n = i.shift(),
                o.push({
                    value: n,
                    type: i[0].replace(k, " ")
                }),
                a = a.slice(n.length)),
                r.filter)
                    !(i = z[s].exec(a)) || c[s] && !(i = c[s](i)) || (n = i.shift(),
                    o.push({
                        value: n,
                        type: s,
                        matches: i
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? Z.error(e) : w(e, l).slice(0)
        }
        function de(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function fe(e, t, n) {
            var r = t.dir
              , i = t.next
              , o = i || r
              , s = n && "parentNode" === o
              , a = b++;
            return t.first ? function(t, n, i) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || s)
                        return e(t, n, i);
                return !1
            }
            : function(t, n, l) {
                var c, u, d = [y, a];
                if (l) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || s) && e(t, n, l))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || s)
                            if (u = t[v] || (t[v] = {}),
                            i && T(t, i))
                                t = t[r] || t;
                            else {
                                if ((c = u[o]) && c[0] === y && c[1] === a)
                                    return d[2] = c[2];
                                if (u[o] = d,
                                d[2] = e(t, n, l))
                                    return !0
                            }
                return !1
            }
        }
        function he(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function pe(e, t, n, r, i) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                (o = e[a]) && (n && !n(o, r, i) || (s.push(o),
                c && t.push(a)));
            return s
        }
        function ge(e, t, n, r, i, o) {
            return r && !r[v] && (r = ge(r)),
            i && !i[v] && (i = ge(i, o)),
            te((function(o, s, l, c) {
                var u, d, f, h, p = [], g = [], v = s.length, y = o || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        Z(e, t[r], n);
                    return n
                }(t || "*", l.nodeType ? [l] : l, []), b = !e || !o && t ? y : pe(y, p, e, l, c);
                if (n ? n(b, h = i || (o ? e : v || r) ? [] : s, l, c) : h = b,
                r)
                    for (u = pe(h, g),
                    r(u, [], l, c),
                    d = u.length; d--; )
                        (f = u[d]) && (h[g[d]] = !(b[g[d]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (u = [],
                            d = h.length; d--; )
                                (f = h[d]) && u.push(b[d] = f);
                            i(null, h = [], u, c)
                        }
                        for (d = h.length; d--; )
                            (f = h[d]) && (u = i ? a.call(o, f) : p[d]) > -1 && (o[u] = !(s[u] = f))
                    }
                } else
                    h = pe(h === s ? h.splice(v, h.length) : h),
                    i ? i(null, s, h, c) : m.apply(s, h)
            }
            ))
        }
        function me(e) {
            for (var t, n, i, s = e.length, l = r.relative[e[0].type], c = l || r.relative[" "], u = l ? 1 : 0, d = fe((function(e) {
                return e === t
            }
            ), c, !0), f = fe((function(e) {
                return a.call(t, e) > -1
            }
            ), c, !0), h = [function(e, n, r) {
                var i = !l && (r || n != o) || ((t = n).nodeType ? d(e, n, r) : f(e, n, r));
                return t = null,
                i
            }
            ]; u < s; u++)
                if (n = r.relative[e[u].type])
                    h = [fe(he(h), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[v]) {
                        for (i = ++u; i < s && !r.relative[e[i].type]; i++)
                            ;
                        return ge(u > 1 && he(h), u > 1 && de(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(k, "$1"), n, u < i && me(e.slice(u, i)), i < s && me(e = e.slice(i)), i < s && de(e))
                    }
                    h.push(n)
                }
            return he(h)
        }
        function ve(e, t) {
            var n, i = [], s = [], a = S[e + " "];
            if (!a) {
                for (t || (t = ue(e)),
                n = t.length; n--; )
                    (a = me(t[n]))[v] ? i.push(a) : s.push(a);
                a = S(e, function(e, t) {
                    var n = t.length > 0
                      , i = e.length > 0
                      , s = function(s, a, l, u, d) {
                        var h, p, g, v = 0, b = "0", _ = s && [], w = [], S = o, T = s || i && r.find.TAG("*", d), D = y += null == S ? 1 : Math.random() || .1, A = T.length;
                        for (d && (o = a == c || a || d); b !== A && null != (h = T[b]); b++) {
                            if (i && h) {
                                for (p = 0,
                                a || h.ownerDocument == c || (le(h),
                                l = !f); g = e[p++]; )
                                    if (g(h, a || c, l)) {
                                        m.call(u, h);
                                        break
                                    }
                                d && (y = D)
                            }
                            n && ((h = !g && h) && v--,
                            s && _.push(h))
                        }
                        if (v += b,
                        n && b !== v) {
                            for (p = 0; g = t[p++]; )
                                g(_, w, a, l);
                            if (s) {
                                if (v > 0)
                                    for (; b--; )
                                        _[b] || w[b] || (w[b] = C.call(u));
                                w = pe(w)
                            }
                            m.apply(u, w),
                            d && !s && w.length > 0 && v + t.length > 1 && x.uniqueSort(u)
                        }
                        return d && (y = D,
                        o = S),
                        _
                    };
                    return n ? te(s) : s
                }(s, i)),
                a.selector = e
            }
            return a
        }
        function ye(e, t, n, i) {
            var o, s, a, l, c, u = "function" == typeof e && e, d = !i && ue(e = u.selector || e);
            if (n = n || [],
            1 === d.length) {
                if ((s = d[0] = d[0].slice(0)).length > 2 && "ID" === (a = s[0]).type && 9 === t.nodeType && f && r.relative[s[1].type]) {
                    if (!(t = (r.find.ID(a.matches[0].replace(Y, Q), t) || [])[0]))
                        return n;
                    u && (t = t.parentNode),
                    e = e.slice(s.shift().value.length)
                }
                for (o = z.needsContext.test(e) ? 0 : s.length; o-- && (a = s[o],
                !r.relative[l = a.type]); )
                    if ((c = r.find[l]) && (i = c(a.matches[0].replace(Y, Q), J.test(s[0].type) && ae(t.parentNode) || t))) {
                        if (s.splice(o, 1),
                        !(e = i.length && de(s)))
                            return m.apply(n, i),
                            n;
                        break
                    }
            }
            return (u || ve(e, d))(i, t, !f, n, !t || J.test(e) && ae(t.parentNode) || t),
            n
        }
        ce.prototype = r.filters = r.pseudos,
        r.setFilters = new ce,
        h.sortStable = v.split("").sort(I).join("") === v,
        le(),
        h.sortDetached = ne((function(e) {
            return 1 & e.compareDocumentPosition(c.createElement("fieldset"))
        }
        )),
        x.find = Z,
        x.expr[":"] = x.expr.pseudos,
        x.unique = x.uniqueSort,
        Z.compile = ve,
        Z.select = ye,
        Z.setDocument = le,
        Z.tokenize = ue,
        Z.escape = x.escapeSelector,
        Z.getText = x.text,
        Z.isXML = x.isXMLDoc,
        Z.selectors = x.expr,
        Z.support = x.support,
        Z.uniqueSort = x.uniqueSort
    }();
    var P = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && x(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , N = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , F = x.expr.match.needsContext
      , H = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function R(e, t, n) {
        return p(t) ? x.grep(e, (function(e, r) {
            return !!t.call(e, r, e) !== n
        }
        )) : t.nodeType ? x.grep(e, (function(e) {
            return e === t !== n
        }
        )) : "string" != typeof t ? x.grep(e, (function(e) {
            return a.call(t, e) > -1 !== n
        }
        )) : x.filter(t, e, n)
    }
    x.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, (function(e) {
            return 1 === e.nodeType
        }
        )))
    }
    ,
    x.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(x(e).filter((function() {
                    for (t = 0; t < r; t++)
                        if (x.contains(i[t], this))
                            return !0
                }
                )));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                x.find(e, i[t], n);
            return r > 1 ? x.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(R(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(R(this, e || [], !0))
        },
        is: function(e) {
            return !!R(this, "string" == typeof e && F.test(e) ? x(e) : e || [], !1).length
        }
    });
    var M, $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (x.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || M,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : $.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof x ? t[0] : t,
                x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : m, !0)),
                H.test(r[1]) && x.isPlainObject(t))
                    for (r in t)
                        p(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = m.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : p(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this)
    }
    ).prototype = x.fn,
    M = x(m);
    var W = /^(?:parents|prev(?:Until|All))/
      , q = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function B(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    x.fn.extend({
        has: function(e) {
            var t = x(e, this)
              , n = t.length;
            return this.filter((function() {
                for (var e = 0; e < n; e++)
                    if (x.contains(this, t[e]))
                        return !0
            }
            ))
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], s = "string" != typeof e && x(e);
            if (!F.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? x.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? a.call(x(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return P(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return P(e, "parentNode", n)
        },
        next: function(e) {
            return B(e, "nextSibling")
        },
        prev: function(e) {
            return B(e, "previousSibling")
        },
        nextAll: function(e) {
            return P(e, "nextSibling")
        },
        prevAll: function(e) {
            return P(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return P(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return P(e, "previousSibling", n)
        },
        siblings: function(e) {
            return N((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return N(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (T(e, "template") && (e = e.content || e),
            x.merge([], e.childNodes))
        }
    }, (function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = x.filter(r, i)),
            this.length > 1 && (q[e] || x.uniqueSort(i),
            W.test(e) && i.reverse()),
            this.pushStack(i)
        }
    }
    ));
    var z = /[^\x20\t\r\n\f]+/g;
    function U(e) {
        return e
    }
    function V(e) {
        throw e
    }
    function X(e, t, n, r) {
        var i;
        try {
            e && p(i = e.promise) ? i.call(e).done(t).fail(n) : e && p(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return x.each(e.match(z) || [], (function(e, n) {
                t[n] = !0
            }
            )),
            t
        }(e) : x.extend({}, e);
        var t, n, r, i, o = [], s = [], a = -1, l = function() {
            for (i = i || e.once,
            r = t = !0; s.length; a = -1)
                for (n = s.shift(); ++a < o.length; )
                    !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            i && (o = n ? [] : "")
        }, c = {
            add: function() {
                return o && (n && !t && (a = o.length - 1,
                s.push(n)),
                function t(n) {
                    x.each(n, (function(n, r) {
                        p(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== b(r) && t(r)
                    }
                    ))
                }(arguments),
                n && !t && l()),
                this
            },
            remove: function() {
                return x.each(arguments, (function(e, t) {
                    for (var n; (n = x.inArray(t, o, n)) > -1; )
                        o.splice(n, 1),
                        n <= a && a--
                }
                )),
                this
            },
            has: function(e) {
                return e ? x.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return i = s = [],
                o = n = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return i = s = [],
                n || t || (o = n = ""),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                s.push(n),
                t || l()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return c
    }
    ,
    x.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2], ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , i = {
                state: function() {
                    return r
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return i.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return x.Deferred((function(t) {
                        x.each(n, (function(n, r) {
                            var i = p(e[r[4]]) && e[r[4]];
                            o[r[1]]((function() {
                                var e = i && i.apply(this, arguments);
                                e && p(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                            }
                            ))
                        }
                        )),
                        e = null
                    }
                    )).promise()
                },
                then: function(t, r, i) {
                    var o = 0;
                    function s(t, n, r, i) {
                        return function() {
                            var a = this
                              , l = arguments
                              , c = function() {
                                var e, c;
                                if (!(t < o)) {
                                    if ((e = r.apply(a, l)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    c = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    p(c) ? i ? c.call(e, s(o, n, U, i), s(o, n, V, i)) : (o++,
                                    c.call(e, s(o, n, U, i), s(o, n, V, i), s(o, n, U, n.notifyWith))) : (r !== U && (a = void 0,
                                    l = [e]),
                                    (i || n.resolveWith)(a, l))
                                }
                            }
                              , u = i ? c : function() {
                                try {
                                    c()
                                } catch (e) {
                                    x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, u.error),
                                    t + 1 >= o && (r !== V && (a = void 0,
                                    l = [e]),
                                    n.rejectWith(a, l))
                                }
                            }
                            ;
                            t ? u() : (x.Deferred.getErrorHook ? u.error = x.Deferred.getErrorHook() : x.Deferred.getStackHook && (u.error = x.Deferred.getStackHook()),
                            e.setTimeout(u))
                        }
                    }
                    return x.Deferred((function(e) {
                        n[0][3].add(s(0, e, p(i) ? i : U, e.notifyWith)),
                        n[1][3].add(s(0, e, p(t) ? t : U)),
                        n[2][3].add(s(0, e, p(r) ? r : V))
                    }
                    )).promise()
                },
                promise: function(e) {
                    return null != e ? x.extend(e, i) : i
                }
            }
              , o = {};
            return x.each(n, (function(e, t) {
                var s = t[2]
                  , a = t[5];
                i[t[1]] = s.add,
                a && s.add((function() {
                    r = a
                }
                ), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                s.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = s.fireWith
            }
            )),
            i.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , r = Array(n)
              , o = i.call(arguments)
              , s = x.Deferred()
              , a = function(e) {
                return function(n) {
                    r[e] = this,
                    o[e] = arguments.length > 1 ? i.call(arguments) : n,
                    --t || s.resolveWith(r, o)
                }
            };
            if (t <= 1 && (X(e, s.done(a(n)).resolve, s.reject, !t),
            "pending" === s.state() || p(o[n] && o[n].then)))
                return s.then();
            for (; n--; )
                X(o[n], a(n), s.reject);
            return s.promise()
        }
    });
    var J = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    x.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && J.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    x.readyException = function(t) {
        e.setTimeout((function() {
            throw t
        }
        ))
    }
    ;
    var Y = x.Deferred();
    function Q() {
        m.removeEventListener("DOMContentLoaded", Q),
        e.removeEventListener("load", Q),
        x.ready()
    }
    x.fn.ready = function(e) {
        return Y.then(e).catch((function(e) {
            x.readyException(e)
        }
        )),
        this
    }
    ,
    x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0,
            !0 !== e && --x.readyWait > 0 || Y.resolveWith(m, [x]))
        }
    }),
    x.ready.then = Y.then,
    "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? e.setTimeout(x.ready) : (m.addEventListener("DOMContentLoaded", Q),
    e.addEventListener("load", Q));
    var G = function(e, t, n, r, i, o, s) {
        var a = 0
          , l = e.length
          , c = null == n;
        if ("object" === b(n))
            for (a in i = !0,
            n)
                G(e, t, a, n[a], !0, o, s);
        else if (void 0 !== r && (i = !0,
        p(r) || (s = !0),
        c && (s ? (t.call(e, r),
        t = null) : (c = t,
        t = function(e, t, n) {
            return c.call(x(e), n)
        }
        )),
        t))
            for (; a < l; a++)
                t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : c ? t.call(e) : l ? t(e[0], n) : o
    }
      , K = /^-ms-/
      , Z = /-([a-z])/g;
    function ee(e, t) {
        return t.toUpperCase()
    }
    function te(e) {
        return e.replace(K, "ms-").replace(Z, ee)
    }
    var ne = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function re() {
        this.expando = x.expando + re.uid++
    }
    re.uid = 1,
    re.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            ne(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[te(t)] = n;
            else
                for (r in t)
                    i[te(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][te(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(te) : (t = te(t))in r ? [t] : t.match(z) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                (void 0 === t || x.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !x.isEmptyObject(t)
        }
    };
    var ie = new re
      , oe = new re
      , se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ae = /[A-Z]/g;
    function le(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ae, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : se.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                oe.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    x.extend({
        hasData: function(e) {
            return oe.hasData(e) || ie.hasData(e)
        },
        data: function(e, t, n) {
            return oe.access(e, t, n)
        },
        removeData: function(e, t) {
            oe.remove(e, t)
        },
        _data: function(e, t, n) {
            return ie.access(e, t, n)
        },
        _removeData: function(e, t) {
            ie.remove(e, t)
        }
    }),
    x.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = oe.get(o),
                1 === o.nodeType && !ie.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = te(r.slice(5)),
                        le(o, r, i[r]));
                    ie.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each((function() {
                oe.set(this, e)
            }
            )) : G(this, (function(t) {
                var n;
                if (o && void 0 === t)
                    return void 0 !== (n = oe.get(o, e)) || void 0 !== (n = le(o, e)) ? n : void 0;
                this.each((function() {
                    oe.set(this, e, t)
                }
                ))
            }
            ), null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                oe.remove(this, e)
            }
            ))
        }
    }),
    x.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = ie.get(e, t),
                n && (!r || Array.isArray(n) ? r = ie.access(e, t, x.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = x._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, (function() {
                x.dequeue(e, t)
            }
            ), o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ie.get(e, n) || ie.access(e, n, {
                empty: x.Callbacks("once memory").add((function() {
                    ie.remove(e, [t + "queue", n])
                }
                ))
            })
        }
    }),
    x.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = x.queue(this, e, t);
                x._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
            }
            ))
        },
        dequeue: function(e) {
            return this.each((function() {
                x.dequeue(this, e)
            }
            ))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = x.Deferred(), o = this, s = this.length, a = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (n = ie.get(o[s], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(a));
            return a(),
            i.promise(t)
        }
    });
    var ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ue = new RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$","i")
      , de = ["Top", "Right", "Bottom", "Left"]
      , fe = m.documentElement
      , he = function(e) {
        return x.contains(e.ownerDocument, e)
    }
      , pe = {
        composed: !0
    };
    fe.getRootNode && (he = function(e) {
        return x.contains(e.ownerDocument, e) || e.getRootNode(pe) === e.ownerDocument
    }
    );
    var ge = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && he(e) && "none" === x.css(e, "display")
    };
    function me(e, t, n, r) {
        var i, o, s = 20, a = r ? function() {
            return r.cur()
        }
        : function() {
            return x.css(e, t, "")
        }
        , l = a(), c = n && n[3] || (x.cssNumber[t] ? "" : "px"), u = e.nodeType && (x.cssNumber[t] || "px" !== c && +l) && ue.exec(x.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2,
            c = c || u[3],
            u = +l || 1; s--; )
                x.style(e, t, u + c),
                (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0),
                u /= o;
            u *= 2,
            x.style(e, t, u + c),
            n = n || []
        }
        return n && (u = +u || +l || 0,
        i = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = c,
        r.start = u,
        r.end = i)),
        i
    }
    var ve = {};
    function ye(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = ve[r];
        return i || (t = n.body.appendChild(n.createElement(r)),
        i = x.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === i && (i = "block"),
        ve[r] = i,
        i)
    }
    function be(e, t) {
        for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
            (r = e[o]).style && (n = r.style.display,
            t ? ("none" === n && (i[o] = ie.get(r, "display") || null,
            i[o] || (r.style.display = "")),
            "" === r.style.display && ge(r) && (i[o] = ye(r))) : "none" !== n && (i[o] = "none",
            ie.set(r, "display", n)));
        for (o = 0; o < s; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    x.fn.extend({
        show: function() {
            return be(this, !0)
        },
        hide: function() {
            return be(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                ge(this) ? x(this).show() : x(this).hide()
            }
            ))
        }
    });
    var _e, we, xe = /^(?:checkbox|radio)$/i, Se = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Te = /^$|^module$|\/(?:java|ecma)script/i;
    _e = m.createDocumentFragment().appendChild(m.createElement("div")),
    (we = m.createElement("input")).setAttribute("type", "radio"),
    we.setAttribute("checked", "checked"),
    we.setAttribute("name", "t"),
    _e.appendChild(we),
    h.checkClone = _e.cloneNode(!0).cloneNode(!0).lastChild.checked,
    _e.innerHTML = "<textarea>x</textarea>",
    h.noCloneChecked = !!_e.cloneNode(!0).lastChild.defaultValue,
    _e.innerHTML = "<option></option>",
    h.option = !!_e.lastChild;
    var Ce = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function De(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && T(e, t) ? x.merge([e], n) : n
    }
    function Ae(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            ie.set(e[n], "globalEval", !t || ie.get(t[n], "globalEval"))
    }
    Ce.tbody = Ce.tfoot = Ce.colgroup = Ce.caption = Ce.thead,
    Ce.th = Ce.td,
    h.option || (Ce.optgroup = Ce.option = [1, "<select multiple='multiple'>", "</select>"]);
    var Ee = /<|&#?\w+;/;
    function ke(e, t, n, r, i) {
        for (var o, s, a, l, c, u, d = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
            if ((o = e[h]) || 0 === o)
                if ("object" === b(o))
                    x.merge(f, o.nodeType ? [o] : o);
                else if (Ee.test(o)) {
                    for (s = s || d.appendChild(t.createElement("div")),
                    a = (Se.exec(o) || ["", ""])[1].toLowerCase(),
                    l = Ce[a] || Ce._default,
                    s.innerHTML = l[1] + x.htmlPrefilter(o) + l[2],
                    u = l[0]; u--; )
                        s = s.lastChild;
                    x.merge(f, s.childNodes),
                    (s = d.firstChild).textContent = ""
                } else
                    f.push(t.createTextNode(o));
        for (d.textContent = "",
        h = 0; o = f[h++]; )
            if (r && x.inArray(o, r) > -1)
                i && i.push(o);
            else if (c = he(o),
            s = De(d.appendChild(o), "script"),
            c && Ae(s),
            n)
                for (u = 0; o = s[u++]; )
                    Te.test(o.type || "") && n.push(o);
        return d
    }
    var Le = /^([^.]*)(?:\.(.+)|)/;
    function Ie() {
        return !0
    }
    function Oe() {
        return !1
    }
    function je(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                je(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Oe;
        else if (!i)
            return e;
        return 1 === o && (s = i,
        i = function(e) {
            return x().off(e),
            s.apply(this, arguments)
        }
        ,
        i.guid = s.guid || (s.guid = x.guid++)),
        e.each((function() {
            x.event.add(this, t, i, r, n)
        }
        ))
    }
    function Pe(e, t, n) {
        n ? (ie.set(e, t, !1),
        x.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var n, r = ie.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (r)
                        (x.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (r = i.call(arguments),
                    ie.set(this, t, r),
                    this[t](),
                    n = ie.get(this, t),
                    ie.set(this, t, !1),
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n
                } else
                    r && (ie.set(this, t, x.event.trigger(r[0], r.slice(1), this)),
                    e.stopPropagation(),
                    e.isImmediatePropagationStopped = Ie)
            }
        })) : void 0 === ie.get(e, t) && x.event.add(e, t, Ie)
    }
    x.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, l, c, u, d, f, h, p, g, m = ie.get(e);
            if (ne(e))
                for (n.handler && (n = (o = n).handler,
                i = o.selector),
                i && x.find.matchesSelector(fe, i),
                n.guid || (n.guid = x.guid++),
                (l = m.events) || (l = m.events = Object.create(null)),
                (s = m.handle) || (s = m.handle = function(t) {
                    return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                c = (t = (t || "").match(z) || [""]).length; c--; )
                    h = g = (a = Le.exec(t[c]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    h && (d = x.event.special[h] || {},
                    h = (i ? d.delegateType : d.bindType) || h,
                    d = x.event.special[h] || {},
                    u = x.extend({
                        type: h,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && x.expr.match.needsContext.test(i),
                        namespace: p.join(".")
                    }, o),
                    (f = l[h]) || ((f = l[h] = []).delegateCount = 0,
                    d.setup && !1 !== d.setup.call(e, r, p, s) || e.addEventListener && e.addEventListener(h, s)),
                    d.add && (d.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                    i ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                    x.event.global[h] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, l, c, u, d, f, h, p, g, m = ie.hasData(e) && ie.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(z) || [""]).length; c--; )
                    if (h = g = (a = Le.exec(t[c]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    h) {
                        for (d = x.event.special[h] || {},
                        f = l[h = (r ? d.delegateType : d.bindType) || h] || [],
                        a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = f.length; o--; )
                            u = f[o],
                            !i && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (f.splice(o, 1),
                            u.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, u));
                        s && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || x.removeEvent(e, h, m.handle),
                        delete l[h])
                    } else
                        for (h in l)
                            x.event.remove(e, h + t[c], n, r, !0);
                x.isEmptyObject(l) && ie.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, s, a = new Array(arguments.length), l = x.event.fix(e), c = (ie.get(this, "events") || Object.create(null))[l.type] || [], u = x.event.special[l.type] || {};
            for (a[0] = l,
            t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
            if (l.delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                for (s = x.event.handlers.call(this, l, c),
                t = 0; (i = s[t++]) && !l.isPropagationStopped(); )
                    for (l.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                        l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o,
                        l.data = o.data,
                        void 0 !== (r = ((x.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (l.result = r) && (l.preventDefault(),
                        l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l),
                l.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [],
                        s = {},
                        n = 0; n < l; n++)
                            void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? x(i, this).index(c) > -1 : x.find(i, this, null, [c]).length),
                            s[i] && o.push(r);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return c = this,
            l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }),
            a
        },
        addProp: function(e, t) {
            Object.defineProperty(x.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: p(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[x.expando] ? e : new x.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return xe.test(t.type) && t.click && T(t, "input") && Pe(t, "click", !0),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return xe.test(t.type) && t.click && T(t, "input") && Pe(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return xe.test(t.type) && t.click && T(t, "input") && ie.get(t, "click") || T(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    x.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    x.Event = function(e, t) {
        if (!(this instanceof x.Event))
            return new x.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ie : Oe,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && x.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[x.expando] = !0
    }
    ,
    x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: Oe,
        isPropagationStopped: Oe,
        isImmediatePropagationStopped: Oe,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ie,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ie,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ie,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    x.each({
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
        code: !0,
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
        which: !0
    }, x.event.addProp),
    x.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        function n(e) {
            if (m.documentMode) {
                var n = ie.get(this, "handle")
                  , r = x.event.fix(e);
                r.type = "focusin" === e.type ? "focus" : "blur",
                r.isSimulated = !0,
                n(e),
                r.target === r.currentTarget && n(r)
            } else
                x.event.simulate(t, e.target, x.event.fix(e))
        }
        x.event.special[e] = {
            setup: function() {
                var r;
                if (Pe(this, e, !0),
                !m.documentMode)
                    return !1;
                (r = ie.get(this, t)) || this.addEventListener(t, n),
                ie.set(this, t, (r || 0) + 1)
            },
            trigger: function() {
                return Pe(this, e),
                !0
            },
            teardown: function() {
                var e;
                if (!m.documentMode)
                    return !1;
                (e = ie.get(this, t) - 1) ? ie.set(this, t, e) : (this.removeEventListener(t, n),
                ie.remove(this, t))
            },
            _default: function(t) {
                return ie.get(t.target, e)
            },
            delegateType: t
        },
        x.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this.document || this
                  , i = m.documentMode ? this : r
                  , o = ie.get(i, t);
                o || (m.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)),
                ie.set(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this.document || this
                  , i = m.documentMode ? this : r
                  , o = ie.get(i, t) - 1;
                o ? ie.set(i, t, o) : (m.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0),
                ie.remove(i, t))
            }
        }
    }
    )),
    x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget, i = e.handleObj;
                return r && (r === this || x.contains(this, r)) || (e.type = i.origType,
                n = i.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }
    )),
    x.fn.extend({
        on: function(e, t, n, r) {
            return je(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return je(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                x(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Oe),
            this.each((function() {
                x.event.remove(this, e, n, t)
            }
            ))
        }
    });
    var Ne = /<script|<style|<link/i
      , Fe = /checked\s*(?:[^=]|=\s*.checked.)/i
      , He = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function Re(e, t) {
        return T(e, "table") && T(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
    }
    function Me(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function $e(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function We(e, t) {
        var n, r, i, o, s, a;
        if (1 === t.nodeType) {
            if (ie.hasData(e) && (a = ie.get(e).events))
                for (i in ie.remove(t, "handle events"),
                a)
                    for (n = 0,
                    r = a[i].length; n < r; n++)
                        x.event.add(t, i, a[i][n]);
            oe.hasData(e) && (o = oe.access(e),
            s = x.extend({}, o),
            oe.set(t, s))
        }
    }
    function qe(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && xe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function Be(e, t, n, r) {
        t = o(t);
        var i, s, a, l, c, u, d = 0, f = e.length, g = f - 1, m = t[0], v = p(m);
        if (v || f > 1 && "string" == typeof m && !h.checkClone && Fe.test(m))
            return e.each((function(i) {
                var o = e.eq(i);
                v && (t[0] = m.call(this, i, o.html())),
                Be(o, t, n, r)
            }
            ));
        if (f && (s = (i = ke(t, e[0].ownerDocument, !1, e, r)).firstChild,
        1 === i.childNodes.length && (i = s),
        s || r)) {
            for (l = (a = x.map(De(i, "script"), Me)).length; d < f; d++)
                c = i,
                d !== g && (c = x.clone(c, !0, !0),
                l && x.merge(a, De(c, "script"))),
                n.call(e[d], c, d);
            if (l)
                for (u = a[a.length - 1].ownerDocument,
                x.map(a, $e),
                d = 0; d < l; d++)
                    c = a[d],
                    Te.test(c.type || "") && !ie.access(c, "globalEval") && x.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? x._evalUrl && !c.noModule && x._evalUrl(c.src, {
                        nonce: c.nonce || c.getAttribute("nonce")
                    }, u) : y(c.textContent.replace(He, ""), c, u))
        }
        return e
    }
    function ze(e, t, n) {
        for (var r, i = t ? x.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || x.cleanData(De(r)),
            r.parentNode && (n && he(r) && Ae(De(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    x.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0), l = he(e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (s = De(a),
                r = 0,
                i = (o = De(e)).length; r < i; r++)
                    qe(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || De(e),
                    s = s || De(a),
                    r = 0,
                    i = o.length; r < i; r++)
                        We(o[r], s[r]);
                else
                    We(e, a);
            return (s = De(a, "script")).length > 0 && Ae(s, !l && De(e, "script")),
            a
        },
        cleanData: function(e) {
            for (var t, n, r, i = x.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (ne(n)) {
                    if (t = n[ie.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? x.event.remove(n, r) : x.removeEvent(n, r, t.handle);
                        n[ie.expando] = void 0
                    }
                    n[oe.expando] && (n[oe.expando] = void 0)
                }
        }
    }),
    x.fn.extend({
        detach: function(e) {
            return ze(this, e, !0)
        },
        remove: function(e) {
            return ze(this, e)
        },
        text: function(e) {
            return G(this, (function(e) {
                return void 0 === e ? x.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }
                ))
            }
            ), null, e, arguments.length)
        },
        append: function() {
            return Be(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e).appendChild(e)
            }
            ))
        },
        prepend: function() {
            return Be(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Re(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }
            ))
        },
        before: function() {
            return Be(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }
            ))
        },
        after: function() {
            return Be(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }
            ))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (x.cleanData(De(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map((function() {
                return x.clone(this, e, t)
            }
            ))
        },
        html: function(e) {
            return G(this, (function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !Ce[(Se.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = x.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (x.cleanData(De(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }
            ), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Be(this, arguments, (function(t) {
                var n = this.parentNode;
                x.inArray(this, e) < 0 && (x.cleanData(De(this)),
                n && n.replaceChild(t, this))
            }
            ), e)
        }
    }),
    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        x.fn[e] = function(e) {
            for (var n, r = [], i = x(e), o = i.length - 1, a = 0; a <= o; a++)
                n = a === o ? this : this.clone(!0),
                x(i[a])[t](n),
                s.apply(r, n.get());
            return this.pushStack(r)
        }
    }
    ));
    var Ue = new RegExp("^(" + ce + ")(?!px)[a-z%]+$","i")
      , Ve = /^--/
      , Xe = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , Je = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , Ye = new RegExp(de.join("|"),"i");
    function Qe(e, t, n) {
        var r, i, o, s, a = Ve.test(t), l = e.style;
        return (n = n || Xe(e)) && (s = n.getPropertyValue(t) || n[t],
        a && s && (s = s.replace(k, "$1") || void 0),
        "" !== s || he(e) || (s = x.style(e, t)),
        !h.pixelBoxStyles() && Ue.test(s) && Ye.test(t) && (r = l.width,
        i = l.minWidth,
        o = l.maxWidth,
        l.minWidth = l.maxWidth = l.width = s,
        s = n.width,
        l.width = r,
        l.minWidth = i,
        l.maxWidth = o)),
        void 0 !== s ? s + "" : s
    }
    function Ge(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                fe.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                r = "1%" !== t.top,
                l = 12 === n(t.marginLeft),
                u.style.right = "60%",
                s = 36 === n(t.right),
                i = 36 === n(t.width),
                u.style.position = "absolute",
                o = 12 === n(u.offsetWidth / 3),
                fe.removeChild(c),
                u = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, i, o, s, a, l, c = m.createElement("div"), u = m.createElement("div");
        u.style && (u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        h.clearCloneStyle = "content-box" === u.style.backgroundClip,
        x.extend(h, {
            boxSizingReliable: function() {
                return t(),
                i
            },
            pixelBoxStyles: function() {
                return t(),
                s
            },
            pixelPosition: function() {
                return t(),
                r
            },
            reliableMarginLeft: function() {
                return t(),
                l
            },
            scrollboxSize: function() {
                return t(),
                o
            },
            reliableTrDimensions: function() {
                var t, n, r, i;
                return null == a && (t = m.createElement("table"),
                n = m.createElement("tr"),
                r = m.createElement("div"),
                t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                n.style.cssText = "box-sizing:content-box;border:1px solid",
                n.style.height = "1px",
                r.style.height = "9px",
                r.style.display = "block",
                fe.appendChild(t).appendChild(n).appendChild(r),
                i = e.getComputedStyle(n),
                a = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === n.offsetHeight,
                fe.removeChild(t)),
                a
            }
        }))
    }();
    var Ke = ["Webkit", "Moz", "ms"]
      , Ze = m.createElement("div").style
      , et = {};
    function tt(e) {
        var t = x.cssProps[e] || et[e];
        return t || (e in Ze ? e : et[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ke.length; n--; )
                if ((e = Ke[n] + t)in Ze)
                    return e
        }(e) || e)
    }
    var nt = /^(none|table(?!-c[ea]).+)/
      , rt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , it = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function ot(e, t, n) {
        var r = ue.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function st(e, t, n, r, i, o) {
        var s = "width" === t ? 1 : 0
          , a = 0
          , l = 0
          , c = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (c += x.css(e, n + de[s], !0, i)),
            r ? ("content" === n && (l -= x.css(e, "padding" + de[s], !0, i)),
            "margin" !== n && (l -= x.css(e, "border" + de[s] + "Width", !0, i))) : (l += x.css(e, "padding" + de[s], !0, i),
            "padding" !== n ? l += x.css(e, "border" + de[s] + "Width", !0, i) : a += x.css(e, "border" + de[s] + "Width", !0, i));
        return !r && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0),
        l + c
    }
    function at(e, t, n) {
        var r = Xe(e)
          , i = (!h.boxSizingReliable() || n) && "border-box" === x.css(e, "boxSizing", !1, r)
          , o = i
          , s = Qe(e, t, r)
          , a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ue.test(s)) {
            if (!n)
                return s;
            s = "auto"
        }
        return (!h.boxSizingReliable() && i || !h.reliableTrDimensions() && T(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === x.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === x.css(e, "boxSizing", !1, r),
        (o = a in e) && (s = e[a])),
        (s = parseFloat(s) || 0) + st(e, t, n || (i ? "border" : "content"), o, r, s) + "px"
    }
    function lt(e, t, n, r, i) {
        return new lt.prototype.init(e,t,n,r,i)
    }
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Qe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = te(t), l = Ve.test(t), c = e.style;
                if (l || (t = tt(a)),
                s = x.cssHooks[t] || x.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : c[t];
                "string" === (o = typeof n) && (i = ue.exec(n)) && i[1] && (n = me(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || l || (n += i && i[3] || (x.cssNumber[a] ? "" : "px")),
                h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, r)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = te(t);
            return Ve.test(t) || (t = tt(a)),
            (s = x.cssHooks[t] || x.cssHooks[a]) && "get"in s && (i = s.get(e, !0, n)),
            void 0 === i && (i = Qe(e, t, r)),
            "normal" === i && t in it && (i = it[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    x.each(["height", "width"], (function(e, t) {
        x.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return !nt.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? at(e, t, r) : Je(e, rt, (function() {
                        return at(e, t, r)
                    }
                    ))
            },
            set: function(e, n, r) {
                var i, o = Xe(e), s = !h.scrollboxSize() && "absolute" === o.position, a = (s || r) && "border-box" === x.css(e, "boxSizing", !1, o), l = r ? st(e, t, r, a, o) : 0;
                return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - st(e, t, "border", !1, o) - .5)),
                l && (i = ue.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                n = x.css(e, t)),
                ot(0, n, l)
            }
        }
    }
    )),
    x.cssHooks.marginLeft = Ge(h.reliableMarginLeft, (function(e, t) {
        if (t)
            return (parseFloat(Qe(e, "marginLeft")) || e.getBoundingClientRect().left - Je(e, {
                marginLeft: 0
            }, (function() {
                return e.getBoundingClientRect().left
            }
            ))) + "px"
    }
    )),
    x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + de[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        "margin" !== e && (x.cssHooks[e + t].set = ot)
    }
    )),
    x.fn.extend({
        css: function(e, t) {
            return G(this, (function(e, t, n) {
                var r, i, o = {}, s = 0;
                if (Array.isArray(t)) {
                    for (r = Xe(e),
                    i = t.length; s < i; s++)
                        o[t[s]] = x.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
            }
            ), e, t, arguments.length > 1)
        }
    }),
    x.Tween = lt,
    lt.prototype = {
        constructor: lt,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || x.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = lt.propHooks[this.prop];
            return e && e.get ? e.get(this) : lt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = lt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : lt.propHooks._default.set(this),
            this
        }
    },
    lt.prototype.init.prototype = lt.prototype,
    lt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !x.cssHooks[e.prop] && null == e.elem.style[tt(e.prop)] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    lt.propHooks.scrollTop = lt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    x.fx = lt.prototype.init,
    x.fx.step = {};
    var ct, ut, dt = /^(?:toggle|show|hide)$/, ft = /queueHooks$/;
    function ht() {
        ut && (!1 === m.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ht) : e.setTimeout(ht, x.fx.interval),
        x.fx.tick())
    }
    function pt() {
        return e.setTimeout((function() {
            ct = void 0
        }
        )),
        ct = Date.now()
    }
    function gt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = de[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function mt(e, t, n) {
        for (var r, i = (vt.tweeners[t] || []).concat(vt.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function vt(e, t, n) {
        var r, i, o = 0, s = vt.prefilters.length, a = x.Deferred().always((function() {
            delete l.elem
        }
        )), l = function() {
            if (i)
                return !1;
            for (var t = ct || pt(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++)
                c.tweens[o].run(r);
            return a.notifyWith(e, [c, r, n]),
            r < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]),
            a.resolveWith(e, [c]),
            !1)
        }, c = a.promise({
            elem: e,
            props: x.extend({}, t),
            opts: x.extend(!0, {
                specialEasing: {},
                easing: x.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: ct || pt(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = x.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? c.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; n < r; n++)
                    c.tweens[n].run(1);
                return t ? (a.notifyWith(e, [c, 1, 0]),
                a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]),
                this
            }
        }), u = c.props;
        for (!function(e, t) {
            var n, r, i, o, s;
            for (n in e)
                if (i = t[r = te(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (s = x.cssHooks[r]) && "expand"in s)
                    for (n in o = s.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(u, c.opts.specialEasing); o < s; o++)
            if (r = vt.prefilters[o].call(c, e, u, c.opts))
                return p(r.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
                r;
        return x.map(u, mt, c),
        p(c.opts.start) && c.opts.start.call(e, c),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
        x.fx.timer(x.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c
    }
    x.Animation = x.extend(vt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return me(n.elem, e, ue.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            p(e) ? (t = e,
            e = ["*"]) : e = e.match(z);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                vt.tweeners[n] = vt.tweeners[n] || [],
                vt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, s, a, l, c, u, d = "width"in t || "height"in t, f = this, h = {}, p = e.style, g = e.nodeType && ge(e), m = ie.get(e, "fxshow");
            for (r in n.queue || (null == (s = x._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            f.always((function() {
                f.always((function() {
                    s.unqueued--,
                    x.queue(e, "fx").length || s.empty.fire()
                }
                ))
            }
            ))),
            t)
                if (i = t[r],
                dt.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[r])
                            continue;
                        g = !0
                    }
                    h[r] = m && m[r] || x.style(e, r)
                }
            if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(h))
                for (r in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                null == (c = m && m.display) && (c = ie.get(e, "display")),
                "none" === (u = x.css(e, "display")) && (c ? u = c : (be([e], !0),
                c = e.style.display || c,
                u = x.css(e, "display"),
                be([e]))),
                ("inline" === u || "inline-block" === u && null != c) && "none" === x.css(e, "float") && (l || (f.done((function() {
                    p.display = c
                }
                )),
                null == c && (u = p.display,
                c = "none" === u ? "" : u)),
                p.display = "inline-block")),
                n.overflow && (p.overflow = "hidden",
                f.always((function() {
                    p.overflow = n.overflow[0],
                    p.overflowX = n.overflow[1],
                    p.overflowY = n.overflow[2]
                }
                ))),
                l = !1,
                h)
                    l || (m ? "hidden"in m && (g = m.hidden) : m = ie.access(e, "fxshow", {
                        display: c
                    }),
                    o && (m.hidden = !g),
                    g && be([e], !0),
                    f.done((function() {
                        for (r in g || be([e]),
                        ie.remove(e, "fxshow"),
                        h)
                            x.style(e, r, h[r])
                    }
                    ))),
                    l = mt(g ? m[r] : 0, r, f),
                    r in m || (m[r] = l.start,
                    g && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? vt.prefilters.unshift(e) : vt.prefilters.push(e)
        }
    }),
    x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || p(e) && e,
            duration: e,
            easing: n && t || t && !p(t) && t
        };
        return x.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in x.fx.speeds ? r.duration = x.fx.speeds[r.duration] : r.duration = x.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            p(r.old) && r.old.call(this),
            r.queue && x.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ge).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e)
              , o = x.speed(t, n, r)
              , s = function() {
                var t = vt(this, x.extend({}, e), o);
                (i || ie.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && this.queue(e || "fx", []),
            this.each((function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = x.timers
                  , s = ie.get(this);
                if (i)
                    s[i] && s[i].stop && r(s[i]);
                else
                    for (i in s)
                        s[i] && s[i].stop && ft.test(i) && r(s[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                !t && n || x.dequeue(this, e)
            }
            ))
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each((function() {
                var t, n = ie.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, s = r ? r.length : 0;
                for (n.finish = !0,
                x.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < s; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            }
            ))
        }
    }),
    x.each(["toggle", "show", "hide"], (function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(gt(t, !0), e, r, i)
        }
    }
    )),
    x.each({
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }
    )),
    x.timers = [],
    x.fx.tick = function() {
        var e, t = 0, n = x.timers;
        for (ct = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || x.fx.stop(),
        ct = void 0
    }
    ,
    x.fx.timer = function(e) {
        x.timers.push(e),
        x.fx.start()
    }
    ,
    x.fx.interval = 13,
    x.fx.start = function() {
        ut || (ut = !0,
        ht())
    }
    ,
    x.fx.stop = function() {
        ut = null
    }
    ,
    x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    x.fn.delay = function(t, n) {
        return t = x.fx && x.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, (function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        }
        ))
    }
    ,
    function() {
        var e = m.createElement("input")
          , t = m.createElement("select").appendChild(m.createElement("option"));
        e.type = "checkbox",
        h.checkOn = "" !== e.value,
        h.optSelected = t.selected,
        (e = m.createElement("input")).value = "t",
        e.type = "radio",
        h.radioValue = "t" === e.value
    }();
    var yt, bt = x.expr.attrHandle;
    x.fn.extend({
        attr: function(e, t) {
            return G(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each((function() {
                x.removeAttr(this, e)
            }
            ))
        }
    }),
    x.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === o && x.isXMLDoc(e) || (i = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? yt : void 0)),
                void 0 !== n ? null === n ? void x.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = x.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && T(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(z);
            if (i && 1 === e.nodeType)
                for (; n = i[r++]; )
                    e.removeAttribute(n)
        }
    }),
    yt = {
        set: function(e, t, n) {
            return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    x.each(x.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = bt[t] || x.find.attr;
        bt[t] = function(e, t, r) {
            var i, o, s = t.toLowerCase();
            return r || (o = bt[s],
            bt[s] = i,
            i = null != n(e, t, r) ? s : null,
            bt[s] = o),
            i
        }
    }
    ));
    var _t = /^(?:input|select|textarea|button)$/i
      , wt = /^(?:a|area)$/i;
    function xt(e) {
        return (e.match(z) || []).join(" ")
    }
    function St(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function Tt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(z) || []
    }
    x.fn.extend({
        prop: function(e, t) {
            return G(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[x.propFix[e] || e]
            }
            ))
        }
    }),
    x.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && x.isXMLDoc(e) || (t = x.propFix[t] || t,
                i = x.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : _t.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    h.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        x.propFix[this.toLowerCase()] = this
    }
    )),
    x.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s;
            return p(e) ? this.each((function(t) {
                x(this).addClass(e.call(this, t, St(this)))
            }
            )) : (t = Tt(e)).length ? this.each((function() {
                if (r = St(this),
                n = 1 === this.nodeType && " " + xt(r) + " ") {
                    for (o = 0; o < t.length; o++)
                        i = t[o],
                        n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    s = xt(n),
                    r !== s && this.setAttribute("class", s)
                }
            }
            )) : this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s;
            return p(e) ? this.each((function(t) {
                x(this).removeClass(e.call(this, t, St(this)))
            }
            )) : arguments.length ? (t = Tt(e)).length ? this.each((function() {
                if (r = St(this),
                n = 1 === this.nodeType && " " + xt(r) + " ") {
                    for (o = 0; o < t.length; o++)
                        for (i = t[o]; n.indexOf(" " + i + " ") > -1; )
                            n = n.replace(" " + i + " ", " ");
                    s = xt(n),
                    r !== s && this.setAttribute("class", s)
                }
            }
            )) : this : this.attr("class", "")
        },
        toggleClass: function(e, t) {
            var n, r, i, o, s = typeof e, a = "string" === s || Array.isArray(e);
            return p(e) ? this.each((function(n) {
                x(this).toggleClass(e.call(this, n, St(this), t), t)
            }
            )) : "boolean" == typeof t && a ? t ? this.addClass(e) : this.removeClass(e) : (n = Tt(e),
            this.each((function() {
                if (a)
                    for (o = x(this),
                    i = 0; i < n.length; i++)
                        r = n[i],
                        o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else
                    void 0 !== e && "boolean" !== s || ((r = St(this)) && ie.set(this, "__className__", r),
                    this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : ie.get(this, "__className__") || ""))
            }
            )))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + xt(St(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var Ct = /\r/g;
    x.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = p(e),
            this.each((function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, x(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = x.map(i, (function(e) {
                    return null == e ? "" : e + ""
                }
                ))),
                (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            }
            ))) : i ? (t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(Ct, "") : null == n ? "" : n : void 0
        }
    }),
    x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : xt(x.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], l = s ? o + 1 : i.length;
                    for (r = o < 0 ? l : s ? o : 0; r < l; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !T(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(),
                            s)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = x.makeArray(t), s = i.length; s--; )
                        ((r = i[s]).selected = x.inArray(x.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    x.each(["radio", "checkbox"], (function() {
        x.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = x.inArray(x(e).val(), t) > -1
            }
        },
        h.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }
    ));
    var Dt = e.location
      , At = {
        guid: Date.now()
    }
      , Et = /\?/;
    x.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {}
        return r = n && n.getElementsByTagName("parsererror")[0],
        n && !r || x.error("Invalid XML: " + (r ? x.map(r.childNodes, (function(e) {
            return e.textContent
        }
        )).join("\n") : t)),
        n
    }
    ;
    var kt = /^(?:focusinfocus|focusoutblur)$/
      , Lt = function(e) {
        e.stopPropagation()
    };
    x.extend(x.event, {
        trigger: function(t, n, r, i) {
            var o, s, a, l, c, d, f, h, v = [r || m], y = u.call(t, "type") ? t.type : t, b = u.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = a = r = r || m,
            3 !== r.nodeType && 8 !== r.nodeType && !kt.test(y + x.event.triggered) && (y.indexOf(".") > -1 && (b = y.split("."),
            y = b.shift(),
            b.sort()),
            c = y.indexOf(":") < 0 && "on" + y,
            (t = t[x.expando] ? t : new x.Event(y,"object" == typeof t && t)).isTrigger = i ? 2 : 3,
            t.namespace = b.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : x.makeArray(n, [t]),
            f = x.event.special[y] || {},
            i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!i && !f.noBubble && !g(r)) {
                    for (l = f.delegateType || y,
                    kt.test(l + y) || (s = s.parentNode); s; s = s.parentNode)
                        v.push(s),
                        a = s;
                    a === (r.ownerDocument || m) && v.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0; (s = v[o++]) && !t.isPropagationStopped(); )
                    h = s,
                    t.type = o > 1 ? l : f.bindType || y,
                    (d = (ie.get(s, "events") || Object.create(null))[t.type] && ie.get(s, "handle")) && d.apply(s, n),
                    (d = c && s[c]) && d.apply && ne(s) && (t.result = d.apply(s, n),
                    !1 === t.result && t.preventDefault());
                return t.type = y,
                i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(v.pop(), n) || !ne(r) || c && p(r[y]) && !g(r) && ((a = r[c]) && (r[c] = null),
                x.event.triggered = y,
                t.isPropagationStopped() && h.addEventListener(y, Lt),
                r[y](),
                t.isPropagationStopped() && h.removeEventListener(y, Lt),
                x.event.triggered = void 0,
                a && (r[c] = a)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0
            });
            x.event.trigger(r, null, t)
        }
    }),
    x.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                x.event.trigger(e, t, this)
            }
            ))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return x.event.trigger(e, t, n, !0)
        }
    });
    var It = /\[\]$/
      , Ot = /\r?\n/g
      , jt = /^(?:submit|button|image|reset|file)$/i
      , Pt = /^(?:input|select|textarea|keygen)/i;
    function Nt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            x.each(t, (function(t, i) {
                n || It.test(e) ? r(e, i) : Nt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            }
            ));
        else if (n || "object" !== b(t))
            r(e, t);
        else
            for (i in t)
                Nt(e + "[" + i + "]", t[i], n, r)
    }
    x.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = p(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !x.isPlainObject(e))
            x.each(e, (function() {
                i(this.name, this.value)
            }
            ));
        else
            for (n in e)
                Nt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }
            )).filter((function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && Pt.test(this.nodeName) && !jt.test(e) && (this.checked || !xe.test(e))
            }
            )).map((function(e, t) {
                var n = x(this).val();
                return null == n ? null : Array.isArray(n) ? x.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ot, "\r\n")
                    }
                }
                )) : {
                    name: t.name,
                    value: n.replace(Ot, "\r\n")
                }
            }
            )).get()
        }
    });
    var Ft = /%20/g
      , Ht = /#.*$/
      , Rt = /([?&])_=[^&]*/
      , Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , $t = /^(?:GET|HEAD)$/
      , Wt = /^\/\//
      , qt = {}
      , Bt = {}
      , zt = "*/".concat("*")
      , Ut = m.createElement("a");
    function Vt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(z) || [];
            if (p(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function Xt(e, t, n, r) {
        var i = {}
          , o = e === Bt;
        function s(a) {
            var l;
            return i[a] = !0,
            x.each(e[a] || [], (function(e, a) {
                var c = a(t, n, r);
                return "string" != typeof c || o || i[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                s(c),
                !1)
            }
            )),
            l
        }
        return s(t.dataTypes[0]) || !i["*"] && s("*")
    }
    function Jt(e, t) {
        var n, r, i = x.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && x.extend(!0, e, r),
        e
    }
    Ut.href = Dt.href,
    x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Dt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Jt(Jt(e, x.ajaxSettings), t) : Jt(x.ajaxSettings, e)
        },
        ajaxPrefilter: Vt(qt),
        ajaxTransport: Vt(Bt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var r, i, o, s, a, l, c, u, d, f, h = x.ajaxSetup({}, n), p = h.context || h, g = h.context && (p.nodeType || p.jquery) ? x(p) : x.event, v = x.Deferred(), y = x.Callbacks("once memory"), b = h.statusCode || {}, _ = {}, w = {}, S = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (c) {
                        if (!s)
                            for (s = {}; t = Mt.exec(o); )
                                s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = s[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return c ? o : null
                },
                setRequestHeader: function(e, t) {
                    return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e,
                    _[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == c && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (c)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                b[t] = [b[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || S;
                    return r && r.abort(t),
                    C(0, t),
                    this
                }
            };
            if (v.promise(T),
            h.url = ((t || h.url || Dt.href) + "").replace(Wt, Dt.protocol + "//"),
            h.type = n.method || n.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(z) || [""],
            null == h.crossDomain) {
                l = m.createElement("a");
                try {
                    l.href = h.url,
                    l.href = l.href,
                    h.crossDomain = Ut.protocol + "//" + Ut.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = x.param(h.data, h.traditional)),
            Xt(qt, h, n, T),
            c)
                return T;
            for (d in (u = x.event && h.global) && 0 == x.active++ && x.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !$t.test(h.type),
            i = h.url.replace(Ht, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ft, "+")) : (f = h.url.slice(i.length),
            h.data && (h.processData || "string" == typeof h.data) && (i += (Et.test(i) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (i = i.replace(Rt, "$1"),
            f = (Et.test(i) ? "&" : "?") + "_=" + At.guid++ + f),
            h.url = i + f),
            h.ifModified && (x.lastModified[i] && T.setRequestHeader("If-Modified-Since", x.lastModified[i]),
            x.etag[i] && T.setRequestHeader("If-None-Match", x.etag[i])),
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && T.setRequestHeader("Content-Type", h.contentType),
            T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : h.accepts["*"]),
            h.headers)
                T.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(p, T, h) || c))
                return T.abort();
            if (S = "abort",
            y.add(h.complete),
            T.done(h.success),
            T.fail(h.error),
            r = Xt(Bt, h, n, T)) {
                if (T.readyState = 1,
                u && g.trigger("ajaxSend", [T, h]),
                c)
                    return T;
                h.async && h.timeout > 0 && (a = e.setTimeout((function() {
                    T.abort("timeout")
                }
                ), h.timeout));
                try {
                    c = !1,
                    r.send(_, C)
                } catch (e) {
                    if (c)
                        throw e;
                    C(-1, e)
                }
            } else
                C(-1, "No Transport");
            function C(t, n, s, l) {
                var d, f, m, _, w, S = n;
                c || (c = !0,
                a && e.clearTimeout(a),
                r = void 0,
                o = l || "",
                T.readyState = t > 0 ? 4 : 0,
                d = t >= 200 && t < 300 || 304 === t,
                s && (_ = function(e, t, n) {
                    for (var r, i, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in a)
                            if (a[i] && a[i].test(r)) {
                                l.unshift(i);
                                break
                            }
                    if (l[0]in n)
                        o = l[0];
                    else {
                        for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                o = i;
                                break
                            }
                            s || (s = i)
                        }
                        o = o || s
                    }
                    if (o)
                        return o !== l[0] && l.unshift(o),
                        n[o]
                }(h, T, s)),
                !d && x.inArray("script", h.dataTypes) > -1 && x.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}
                ),
                _ = function(e, t, n, r) {
                    var i, o, s, a, l, c = {}, u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters)
                            c[s.toLowerCase()] = e.converters[s];
                    for (o = u.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = o,
                        o = u.shift())
                            if ("*" === o)
                                o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(s = c[l + " " + o] || c["* " + o]))
                                    for (i in c)
                                        if ((a = i.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === s ? s = c[i] : !0 !== c[i] && (o = a[0],
                                            u.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws)
                                        t = s(t);
                                    else
                                        try {
                                            t = s(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: s ? e : "No conversion from " + l + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, _, T, d),
                d ? (h.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (x.lastModified[i] = w),
                (w = T.getResponseHeader("etag")) && (x.etag[i] = w)),
                204 === t || "HEAD" === h.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = _.state,
                f = _.data,
                d = !(m = _.error))) : (m = S,
                !t && S || (S = "error",
                t < 0 && (t = 0))),
                T.status = t,
                T.statusText = (n || S) + "",
                d ? v.resolveWith(p, [f, S, T]) : v.rejectWith(p, [T, S, m]),
                T.statusCode(b),
                b = void 0,
                u && g.trigger(d ? "ajaxSuccess" : "ajaxError", [T, h, d ? f : m]),
                y.fireWith(p, [T, S]),
                u && (g.trigger("ajaxComplete", [T, h]),
                --x.active || x.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return x.get(e, void 0, t, "script")
        }
    }),
    x.each(["get", "post"], (function(e, t) {
        x[t] = function(e, n, r, i) {
            return p(n) && (i = i || r,
            r = n,
            n = void 0),
            x.ajax(x.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, x.isPlainObject(e) && e))
        }
    }
    )),
    x.ajaxPrefilter((function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }
    )),
    x._evalUrl = function(e, t, n) {
        return x.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                x.globalEval(e, t, n)
            }
        })
    }
    ,
    x.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (p(e) && (e = e.call(this[0])),
            t = x(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map((function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }
            )).append(this)),
            this
        },
        wrapInner: function(e) {
            return p(e) ? this.each((function(t) {
                x(this).wrapInner(e.call(this, t))
            }
            )) : this.each((function() {
                var t = x(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }
            ))
        },
        wrap: function(e) {
            var t = p(e);
            return this.each((function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            }
            ))
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each((function() {
                x(this).replaceWith(this.childNodes)
            }
            )),
            this
        }
    }),
    x.expr.pseudos.hidden = function(e) {
        return !x.expr.pseudos.visible(e)
    }
    ,
    x.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    x.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Yt = {
        0: 200,
        1223: 204
    }
      , Qt = x.ajaxSettings.xhr();
    h.cors = !!Qt && "withCredentials"in Qt,
    h.ajax = Qt = !!Qt,
    x.ajaxTransport((function(t) {
        var n, r;
        if (h.cors || Qt && !t.crossDomain)
            return {
                send: function(i, o) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (s in t.xhrFields)
                            a[s] = t.xhrFields[s];
                    for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                    i)
                        a.setRequestHeader(s, i[s]);
                    n = function(e) {
                        return function() {
                            n && (n = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                            "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Yt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }
                    ,
                    a.onload = n(),
                    r = a.onerror = a.ontimeout = n("error"),
                    void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                        4 === a.readyState && e.setTimeout((function() {
                            n && r()
                        }
                        ))
                    }
                    ,
                    n = n("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }
    )),
    x.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
    }
    )),
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e),
                e
            }
        }
    }),
    x.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }
    )),
    x.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs)
            return {
                send: function(r, i) {
                    t = x("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && i("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    m.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    }
    ));
    var Gt, Kt = [], Zt = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Kt.pop() || x.expando + "_" + At.guid++;
            return this[e] = !0,
            e
        }
    }),
    x.ajaxPrefilter("json jsonp", (function(t, n, r) {
        var i, o, s, a = !1 !== t.jsonp && (Zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            a ? t[a] = t[a].replace(Zt, "$1" + i) : !1 !== t.jsonp && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            t.converters["script json"] = function() {
                return s || x.error(i + " was not called"),
                s[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[i],
            e[i] = function() {
                s = arguments
            }
            ,
            r.always((function() {
                void 0 === o ? x(e).removeProp(i) : e[i] = o,
                t[i] && (t.jsonpCallback = n.jsonpCallback,
                Kt.push(i)),
                s && p(o) && o(s[0]),
                s = o = void 0
            }
            )),
            "script"
    }
    )),
    h.createHTMLDocument = ((Gt = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Gt.childNodes.length),
    x.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (h.createHTMLDocument ? ((r = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href,
        t.head.appendChild(r)) : t = m),
        o = !n && [],
        (i = H.exec(e)) ? [t.createElement(i[1])] : (i = ke([e], t, o),
        o && o.length && x(o).remove(),
        x.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    x.fn.load = function(e, t, n) {
        var r, i, o, s = this, a = e.indexOf(" ");
        return a > -1 && (r = xt(e.slice(a)),
        e = e.slice(0, a)),
        p(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        s.length > 0 && x.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            o = arguments,
            s.html(r ? x("<div>").append(x.parseHTML(e)).find(r) : e)
        }
        )).always(n && function(e, t) {
            s.each((function() {
                n.apply(this, o || [e.responseText, t, e])
            }
            ))
        }
        ),
        this
    }
    ,
    x.expr.pseudos.animated = function(e) {
        return x.grep(x.timers, (function(t) {
            return e === t.elem
        }
        )).length
    }
    ,
    x.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, l, c = x.css(e, "position"), u = x(e), d = {};
            "static" === c && (e.style.position = "relative"),
            a = u.offset(),
            o = x.css(e, "top"),
            l = x.css(e, "left"),
            ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (r = u.position()).top,
            i = r.left) : (s = parseFloat(o) || 0,
            i = parseFloat(l) || 0),
            p(t) && (t = t.call(e, n, x.extend({}, a))),
            null != t.top && (d.top = t.top - a.top + s),
            null != t.left && (d.left = t.left - a.left + i),
            "using"in t ? t.using.call(e, d) : u.css(d)
        }
    },
    x.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each((function(t) {
                    x.offset.setOffset(this, e, t)
                }
                ));
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === x.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = x(e).offset()).top += x.css(e, "borderTopWidth", !0),
                    i.left += x.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - x.css(r, "marginTop", !0),
                    left: t.left - i.left - x.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === x.css(e, "position"); )
                    e = e.offsetParent;
                return e || fe
            }
            ))
        }
    }),
    x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var n = "pageYOffset" === t;
        x.fn[e] = function(r) {
            return G(this, (function(e, r, i) {
                var o;
                if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
                    return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }
            ), e, r, arguments.length)
        }
    }
    )),
    x.each(["top", "left"], (function(e, t) {
        x.cssHooks[t] = Ge(h.pixelPosition, (function(e, n) {
            if (n)
                return n = Qe(e, t),
                Ue.test(n) ? x(e).position()[t] + "px" : n
        }
        ))
    }
    )),
    x.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        x.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, r) {
            x.fn[r] = function(i, o) {
                var s = arguments.length && (n || "boolean" != typeof i)
                  , a = n || (!0 === i || !0 === o ? "margin" : "border");
                return G(this, (function(t, n, i) {
                    var o;
                    return g(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? x.css(t, n, a) : x.style(t, n, i, a)
                }
                ), t, s ? i : void 0, s)
            }
        }
        ))
    }
    )),
    x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }
    )),
    x.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e)
        }
    }),
    x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }
    ));
    var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    x.proxy = function(e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        p(e))
            return r = i.call(arguments, 2),
            o = function() {
                return e.apply(t || this, r.concat(i.call(arguments)))
            }
            ,
            o.guid = e.guid = e.guid || x.guid++,
            o
    }
    ,
    x.holdReady = function(e) {
        e ? x.readyWait++ : x.ready(!0)
    }
    ,
    x.isArray = Array.isArray,
    x.parseJSON = JSON.parse,
    x.nodeName = T,
    x.isFunction = p,
    x.isWindow = g,
    x.camelCase = te,
    x.type = b,
    x.now = Date.now,
    x.isNumeric = function(e) {
        var t = x.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    x.trim = function(e) {
        return null == e ? "" : (e + "").replace(en, "$1")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], (function() {
        return x
    }
    ));
    var tn = e.jQuery
      , nn = e.$;
    return x.noConflict = function(t) {
        return e.$ === x && (e.$ = nn),
        t && e.jQuery === x && (e.jQuery = tn),
        x
    }
    ,
    void 0 === t && (e.jQuery = e.$ = x),
    x
}
)),
function(e) {
    "use strict";
    var t;
    "function" == typeof define && define.amd ? define(["jquery"], (function(t) {
        return e(t, window, document)
    }
    )) : "object" == typeof exports ? (t = require("jquery"),
    "undefined" != typeof window ? module.exports = function(n, r) {
        return n = n || window,
        r = r || t(n),
        e(r, n, n.document)
    }
    : e(t, window, window.document)) : window.DataTable = e(jQuery, window, document)
}((function(e, t, n, r) {
    "use strict";
    function i(e) {
        var t = parseInt(e, 10);
        return !isNaN(t) && isFinite(e) ? t : null
    }
    function o(e, t, n) {
        var r = typeof e
          , i = "string" == r;
        return "number" == r || "bigint" == r || !!w(e) || (t && i && (e = x(e, t)),
        n && i && (e = e.replace(_, "")),
        !isNaN(parseFloat(e)) && isFinite(e))
    }
    function s(e, t, n) {
        var r;
        return !!w(e) || (w(r = e) || "string" == typeof r) && !!o(e.replace(v, "").replace(/<script/i, ""), t, n) || null
    }
    function a(e, t, n, i) {
        var o = []
          , s = 0
          , a = t.length;
        if (i !== r)
            for (; s < a; s++)
                e[t[s]][n] && o.push(e[t[s]][n][i]);
        else
            for (; s < a; s++)
                o.push(e[t[s]][n]);
        return o
    }
    function l(e, t) {
        var n, i = [];
        t === r ? (t = 0,
        n = e) : (n = t,
        t = e);
        for (var o = t; o < n; o++)
            i.push(o);
        return i
    }
    function c(e) {
        for (var t = [], n = 0, r = e.length; n < r; n++)
            e[n] && t.push(e[n]);
        return t
    }
    function u(e, t) {
        return -1 !== this.indexOf(e, t = t === r ? 0 : t)
    }
    var d, f, h, p = function(t, n) {
        if (p.factory(t, n))
            return p;
        if (this instanceof p)
            return e(t).DataTable(n);
        n = t,
        this.$ = function(e, t) {
            return this.api(!0).$(e, t)
        }
        ,
        this._ = function(e, t) {
            return this.api(!0).rows(e, t).data()
        }
        ,
        this.api = function(e) {
            return new Ct(e ? st(this[d.iApiIndex]) : this)
        }
        ,
        this.fnAddData = function(t, n) {
            var i = this.api(!0);
            t = (Array.isArray(t) && (Array.isArray(t[0]) || e.isPlainObject(t[0])) ? i.rows : i.row).add(t);
            return n !== r && !n || i.draw(),
            t.flatten().toArray()
        }
        ,
        this.fnAdjustColumnSizing = function(e) {
            var t = this.api(!0).columns.adjust()
              , n = t.settings()[0]
              , i = n.oScroll;
            e === r || e ? t.draw(!1) : "" === i.sX && "" === i.sY || We(n)
        }
        ,
        this.fnClearTable = function(e) {
            var t = this.api(!0).clear();
            e !== r && !e || t.draw()
        }
        ,
        this.fnClose = function(e) {
            this.api(!0).row(e).child.hide()
        }
        ,
        this.fnDeleteRow = function(e, t, n) {
            var i = this.api(!0)
              , o = (e = i.rows(e)).settings()[0]
              , s = o.aoData[e[0][0]];
            return e.remove(),
            t && t.call(this, o, s),
            n !== r && !n || i.draw(),
            s
        }
        ,
        this.fnDestroy = function(e) {
            this.api(!0).destroy(e)
        }
        ,
        this.fnDraw = function(e) {
            this.api(!0).draw(e)
        }
        ,
        this.fnFilter = function(e, t, n, i, o, s) {
            var a = this.api(!0);
            (null === t || t === r ? a : a.column(t)).search(e, n, i, s),
            a.draw()
        }
        ,
        this.fnGetData = function(e, t) {
            var n, i = this.api(!0);
            return e !== r ? (n = e.nodeName ? e.nodeName.toLowerCase() : "",
            t !== r || "td" == n || "th" == n ? i.cell(e, t).data() : i.row(e).data() || null) : i.data().toArray()
        }
        ,
        this.fnGetNodes = function(e) {
            var t = this.api(!0);
            return e !== r ? t.row(e).node() : t.rows().nodes().flatten().toArray()
        }
        ,
        this.fnGetPosition = function(e) {
            var t = this.api(!0)
              , n = e.nodeName.toUpperCase();
            return "TR" == n ? t.row(e).index() : "TD" == n || "TH" == n ? [(n = t.cell(e).index()).row, n.columnVisible, n.column] : null
        }
        ,
        this.fnIsOpen = function(e) {
            return this.api(!0).row(e).child.isShown()
        }
        ,
        this.fnOpen = function(e, t, n) {
            return this.api(!0).row(e).child(t, n).show().child()[0]
        }
        ,
        this.fnPageChange = function(e, t) {
            e = this.api(!0).page(e),
            t !== r && !t || e.draw(!1)
        }
        ,
        this.fnSetColumnVis = function(e, t, n) {
            e = this.api(!0).column(e).visible(t),
            n !== r && !n || e.columns.adjust().draw()
        }
        ,
        this.fnSettings = function() {
            return st(this[d.iApiIndex])
        }
        ,
        this.fnSort = function(e) {
            this.api(!0).order(e).draw()
        }
        ,
        this.fnSortListener = function(e, t, n) {
            this.api(!0).order.listener(e, t, n)
        }
        ,
        this.fnUpdate = function(e, t, n, i, o) {
            var s = this.api(!0);
            return (n === r || null === n ? s.row(t) : s.cell(t, n)).data(e),
            o !== r && !o || s.columns.adjust(),
            i !== r && !i || s.draw(),
            0
        }
        ,
        this.fnVersionCheck = d.fnVersionCheck;
        var i, o = this, s = n === r, a = this.length;
        for (i in s && (n = {}),
        this.oApi = this.internal = d.internal,
        p.ext.internal)
            i && (this[i] = Ut(i));
        return this.each((function() {
            var t = 1 < a ? ct({}, n, !0) : n
              , i = 0
              , l = this.getAttribute("id")
              , c = !1
              , u = p.defaults
              , d = e(this);
            if ("table" != this.nodeName.toLowerCase())
                at(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
            else {
                L(u),
                I(u.column),
                A(u, u, !0),
                A(u.column, u.column, !0),
                A(u, e.extend(t, d.data()), !0);
                for (var f = p.settings, h = (i = 0,
                f.length); i < h; i++) {
                    var g = f[i];
                    if (g.nTable == this || g.nTHead && g.nTHead.parentNode == this || g.nTFoot && g.nTFoot.parentNode == this) {
                        var m = (t.bRetrieve !== r ? t : u).bRetrieve
                          , v = (t.bDestroy !== r ? t : u).bDestroy;
                        if (s || m)
                            return g.oInstance;
                        if (v) {
                            g.oInstance.fnDestroy();
                            break
                        }
                        return void at(g, 0, "Cannot reinitialise DataTable", 3)
                    }
                    if (g.sTableId == this.id) {
                        f.splice(i, 1);
                        break
                    }
                }
                null !== l && "" !== l || (l = "DataTables_Table_" + p.ext._unique++,
                this.id = l);
                var y, b, _ = e.extend(!0, {}, p.models.oSettings, {
                    sDestroyWidth: d[0].style.width,
                    sInstance: l,
                    sTableId: l
                }), w = (_.nTable = this,
                _.oApi = o.internal,
                _.oInit = t,
                f.push(_),
                _.oInstance = 1 === o.length ? o : d.dataTable(),
                L(t),
                E(t.oLanguage),
                t.aLengthMenu && !t.iDisplayLength && (t.iDisplayLength = (Array.isArray(t.aLengthMenu[0]) ? t.aLengthMenu[0] : t.aLengthMenu)[0]),
                t = ct(e.extend(!0, {}, u), t),
                lt(_.oFeatures, t, ["bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender"]),
                lt(_, t, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"]]),
                lt(_.oScroll, t, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]),
                lt(_.oLanguage, t, "fnInfoCallback"),
                dt(_, "aoDrawCallback", t.fnDrawCallback, "user"),
                dt(_, "aoServerParams", t.fnServerParams, "user"),
                dt(_, "aoStateSaveParams", t.fnStateSaveParams, "user"),
                dt(_, "aoStateLoadParams", t.fnStateLoadParams, "user"),
                dt(_, "aoStateLoaded", t.fnStateLoaded, "user"),
                dt(_, "aoRowCallback", t.fnRowCallback, "user"),
                dt(_, "aoRowCreatedCallback", t.fnCreatedRow, "user"),
                dt(_, "aoHeaderCallback", t.fnHeaderCallback, "user"),
                dt(_, "aoFooterCallback", t.fnFooterCallback, "user"),
                dt(_, "aoInitComplete", t.fnInitComplete, "user"),
                dt(_, "aoPreDrawCallback", t.fnPreDrawCallback, "user"),
                _.rowIdFn = Q(t.rowId),
                O(_),
                _.oClasses), x = (e.extend(w, p.ext.classes, t.oClasses),
                d.addClass(w.sTable),
                _.iInitDisplayStart === r && (_.iInitDisplayStart = t.iDisplayStart,
                _._iDisplayStart = t.iDisplayStart),
                null !== t.iDeferLoading && (_.bDeferLoading = !0,
                l = Array.isArray(t.iDeferLoading),
                _._iRecordsDisplay = l ? t.iDeferLoading[0] : t.iDeferLoading,
                _._iRecordsTotal = l ? t.iDeferLoading[1] : t.iDeferLoading),
                _.oLanguage), S = (l = (e.extend(!0, x, t.oLanguage),
                x.sUrl ? (e.ajax({
                    dataType: "json",
                    url: x.sUrl,
                    success: function(t) {
                        A(u.oLanguage, t),
                        E(t),
                        e.extend(!0, x, t, _.oInit.oLanguage),
                        ft(_, null, "i18n", [_]),
                        Oe(_)
                    },
                    error: function() {
                        Oe(_)
                    }
                }),
                c = !0) : ft(_, null, "i18n", [_]),
                null === t.asStripeClasses && (_.asStripeClasses = [w.sStripeOdd, w.sStripeEven]),
                _.asStripeClasses),
                d.children("tbody").find("tr").eq(0)), T = (-1 !== e.inArray(!0, e.map(l, (function(e, t) {
                    return S.hasClass(e)
                }
                ))) && (e("tbody tr", this).removeClass(l.join(" ")),
                _.asDestroyStripes = l.slice()),
                []);
                if (0 !== (l = this.getElementsByTagName("thead")).length && (ue(_.aoHeader, l[0]),
                T = de(_)),
                null === t.aoColumns)
                    for (y = [],
                    i = 0,
                    h = T.length; i < h; i++)
                        y.push(null);
                else
                    y = t.aoColumns;
                for (i = 0,
                h = y.length; i < h; i++)
                    P(_, T ? T[i] : null);
                q(_, t.aoColumnDefs, y, (function(e, t) {
                    N(_, e, t)
                }
                )),
                S.length && (b = function(e, t) {
                    return null !== e.getAttribute("data-" + t) ? t : null
                }
                ,
                e(S[0]).children("th, td").each((function(e, t) {
                    var n, i = _.aoColumns[e];
                    i || at(_, 0, "Incorrect column count", 18),
                    i.mData === e && (n = b(t, "sort") || b(t, "order"),
                    t = b(t, "filter") || b(t, "search"),
                    null === n && null === t || (i.mData = {
                        _: e + ".display",
                        sort: null !== n ? e + ".@data-" + n : r,
                        type: null !== n ? e + ".@data-" + n : r,
                        filter: null !== t ? e + ".@data-" + t : r
                    },
                    i._isArrayHost = !0,
                    N(_, e)))
                }
                )));
                var C = _.oFeatures;
                l = function() {
                    if (t.aaSorting === r) {
                        var n = _.aaSorting;
                        for (i = 0,
                        h = n.length; i < h; i++)
                            n[i][1] = _.aoColumns[i].asSorting[0]
                    }
                    tt(_),
                    C.bSort && dt(_, "aoDrawCallback", (function() {
                        var t, n;
                        _.bSorted && (t = Qe(_),
                        n = {},
                        e.each(t, (function(e, t) {
                            n[t.src] = t.dir
                        }
                        )),
                        ft(_, null, "order", [_, t, n]),
                        Ke(_))
                    }
                    )),
                    dt(_, "aoDrawCallback", (function() {
                        (_.bSorted || "ssp" === gt(_) || C.bDeferRender) && tt(_)
                    }
                    ), "sc");
                    var o, s = d.children("caption").each((function() {
                        this._captionSide = e(this).css("caption-side")
                    }
                    )), a = (0 === (o = d.children("thead")).length && (o = e("<thead/>").appendTo(d)),
                    _.nTHead = o[0],
                    d.children("tbody"));
                    if (0 === (o = 0 === (o = (0 === a.length && (a = e("<tbody/>").insertAfter(o)),
                    _.nTBody = a[0],
                    d.children("tfoot"))).length && 0 < s.length && ("" !== _.oScroll.sX || "" !== _.oScroll.sY) ? e("<tfoot/>").appendTo(d) : o).length || 0 === o.children().length ? d.addClass(w.sNoFooter) : 0 < o.length && (_.nTFoot = o[0],
                    ue(_.aoFooter, _.nTFoot)),
                    t.aaData)
                        for (i = 0; i < t.aaData.length; i++)
                            B(_, t.aaData[i]);
                    else
                        !_.bDeferLoading && "dom" != gt(_) || z(_, e(_.nTBody).children("tr"));
                    _.aiDisplay = _.aiDisplayMaster.slice(),
                    !(_.bInitialised = !0) === c && Oe(_)
                }
                ;
                dt(_, "aoDrawCallback", rt, "state_save"),
                t.bStateSave ? (C.bStateSave = !0,
                it(_, 0, l)) : l()
            }
        }
        )),
        o = null,
        this
    }, g = {}, m = /[\r\n\u2028]/g, v = /<.*?>/g, y = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/, b = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")","g"), _ = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi, w = function(e) {
        return !e || !0 === e || "-" === e
    }, x = function(e, t) {
        return g[t] || (g[t] = new RegExp(Se(t),"g")),
        "string" == typeof e && "." !== t ? e.replace(/\./g, "").replace(g[t], ".") : e
    }, S = function(e, t, n) {
        var i = []
          , o = 0
          , s = e.length;
        if (n !== r)
            for (; o < s; o++)
                e[o] && e[o][t] && i.push(e[o][t][n]);
        else
            for (; o < s; o++)
                e[o] && i.push(e[o][t]);
        return i
    }, T = function(e) {
        if (function(e) {
            if (!(e.length < 2))
                for (var t = e.slice().sort(), n = t[0], r = 1, i = t.length; r < i; r++) {
                    if (t[r] === n)
                        return !1;
                    n = t[r]
                }
            return !0
        }(e))
            return e.slice();
        var t, n, r, i = [], o = e.length, s = 0;
        e: for (n = 0; n < o; n++) {
            for (t = e[n],
            r = 0; r < s; r++)
                if (i[r] === t)
                    continue e;
            i.push(t),
            s++
        }
        return i
    }, C = function(e, t) {
        if (Array.isArray(t))
            for (var n = 0; n < t.length; n++)
                C(e, t[n]);
        else
            e.push(t);
        return e
    };
    function D(t) {
        var n, r, i = {};
        e.each(t, (function(e, o) {
            (n = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(n[1] + " ") && (r = e.replace(n[0], n[2].toLowerCase()),
            i[r] = e,
            "o" === n[1] && D(t[e]))
        }
        )),
        t._hungarianMap = i
    }
    function A(t, n, i) {
        var o;
        t._hungarianMap || D(t),
        e.each(n, (function(s, a) {
            (o = t._hungarianMap[s]) === r || !i && n[o] !== r || ("o" === o.charAt(0) ? (n[o] || (n[o] = {}),
            e.extend(!0, n[o], n[s]),
            A(t[o], n[o], i)) : n[o] = n[s])
        }
        ))
    }
    function E(e) {
        var t, n = p.defaults.oLanguage, r = n.sDecimal;
        r && Nt(r),
        e && (t = e.sZeroRecords,
        !e.sEmptyTable && t && "No data available in table" === n.sEmptyTable && lt(e, e, "sZeroRecords", "sEmptyTable"),
        !e.sLoadingRecords && t && "Loading..." === n.sLoadingRecords && lt(e, e, "sZeroRecords", "sLoadingRecords"),
        e.sInfoThousands && (e.sThousands = e.sInfoThousands),
        (t = e.sDecimal) && r !== t && Nt(t))
    }
    Array.isArray || (Array.isArray = function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
    ),
    Array.prototype.includes || (Array.prototype.includes = u),
    String.prototype.trim || (String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }
    ),
    String.prototype.includes || (String.prototype.includes = u),
    p.util = {
        throttle: function(e, t) {
            var n, i, o = t !== r ? t : 200;
            return function() {
                var t = this
                  , s = +new Date
                  , a = arguments;
                n && s < n + o ? (clearTimeout(i),
                i = setTimeout((function() {
                    n = r,
                    e.apply(t, a)
                }
                ), o)) : (n = s,
                e.apply(t, a))
            }
        },
        escapeRegex: function(e) {
            return e.replace(b, "\\$1")
        },
        set: function(t) {
            var n;
            return e.isPlainObject(t) ? p.util.set(t._) : null === t ? function() {}
            : "function" == typeof t ? function(e, n, r) {
                t(e, "set", n, r)
            }
            : "string" != typeof t || -1 === t.indexOf(".") && -1 === t.indexOf("[") && -1 === t.indexOf("(") ? function(e, n) {
                e[t] = n
            }
            : (n = function(e, t, i) {
                for (var o, s, a, l, c = Y(i), u = (i = c[c.length - 1],
                0), d = c.length - 1; u < d; u++) {
                    if ("__proto__" === c[u] || "constructor" === c[u])
                        throw new Error("Cannot set prototype values");
                    if (o = c[u].match(X),
                    s = c[u].match(J),
                    o) {
                        if (c[u] = c[u].replace(X, ""),
                        e[c[u]] = [],
                        (o = c.slice()).splice(0, u + 1),
                        l = o.join("."),
                        Array.isArray(t))
                            for (var f = 0, h = t.length; f < h; f++)
                                n(a = {}, t[f], l),
                                e[c[u]].push(a);
                        else
                            e[c[u]] = t;
                        return
                    }
                    s && (c[u] = c[u].replace(J, ""),
                    e = e[c[u]](t)),
                    null !== e[c[u]] && e[c[u]] !== r || (e[c[u]] = {}),
                    e = e[c[u]]
                }
                i.match(J) ? e[i.replace(J, "")](t) : e[i.replace(X, "")] = t
            }
            ,
            function(e, r) {
                return n(e, r, t)
            }
            )
        },
        get: function(t) {
            var n, i;
            return e.isPlainObject(t) ? (n = {},
            e.each(t, (function(e, t) {
                t && (n[e] = p.util.get(t))
            }
            )),
            function(e, t, i, o) {
                var s = n[t] || n._;
                return s !== r ? s(e, t, i, o) : e
            }
            ) : null === t ? function(e) {
                return e
            }
            : "function" == typeof t ? function(e, n, r, i) {
                return t(e, n, r, i)
            }
            : "string" != typeof t || -1 === t.indexOf(".") && -1 === t.indexOf("[") && -1 === t.indexOf("(") ? function(e, n) {
                return e[t]
            }
            : (i = function(e, t, n) {
                var o, s, a;
                if ("" !== n)
                    for (var l = Y(n), c = 0, u = l.length; c < u; c++) {
                        if (h = l[c].match(X),
                        o = l[c].match(J),
                        h) {
                            if (l[c] = l[c].replace(X, ""),
                            "" !== l[c] && (e = e[l[c]]),
                            s = [],
                            l.splice(0, c + 1),
                            a = l.join("."),
                            Array.isArray(e))
                                for (var d = 0, f = e.length; d < f; d++)
                                    s.push(i(e[d], t, a));
                            var h = h[0].substring(1, h[0].length - 1);
                            e = "" === h ? s : s.join(h);
                            break
                        }
                        if (o)
                            l[c] = l[c].replace(J, ""),
                            e = e[l[c]]();
                        else {
                            if (null === e || null === e[l[c]])
                                return null;
                            if (e === r || e[l[c]] === r)
                                return r;
                            e = e[l[c]]
                        }
                    }
                return e
            }
            ,
            function(e, n) {
                return i(e, n, t)
            }
            )
        }
    };
    var k = function(e, t, n) {
        e[t] !== r && (e[n] = e[t])
    };
    function L(e) {
        k(e, "ordering", "bSort"),
        k(e, "orderMulti", "bSortMulti"),
        k(e, "orderClasses", "bSortClasses"),
        k(e, "orderCellsTop", "bSortCellsTop"),
        k(e, "order", "aaSorting"),
        k(e, "orderFixed", "aaSortingFixed"),
        k(e, "paging", "bPaginate"),
        k(e, "pagingType", "sPaginationType"),
        k(e, "pageLength", "iDisplayLength"),
        k(e, "searching", "bFilter"),
        "boolean" == typeof e.sScrollX && (e.sScrollX = e.sScrollX ? "100%" : ""),
        "boolean" == typeof e.scrollX && (e.scrollX = e.scrollX ? "100%" : "");
        var t = e.aoSearchCols;
        if (t)
            for (var n = 0, r = t.length; n < r; n++)
                t[n] && A(p.models.oSearch, t[n])
    }
    function I(e) {
        k(e, "orderable", "bSortable"),
        k(e, "orderData", "aDataSort"),
        k(e, "orderSequence", "asSorting"),
        k(e, "orderDataType", "sortDataType");
        var t = e.aDataSort;
        "number" != typeof t || Array.isArray(t) || (e.aDataSort = [t])
    }
    function O(n) {
        var r, i, o, s;
        p.__browser || (p.__browser = r = {},
        s = (o = (i = e("<div/>").css({
            position: "fixed",
            top: 0,
            left: -1 * e(t).scrollLeft(),
            height: 1,
            width: 1,
            overflow: "hidden"
        }).append(e("<div/>").css({
            position: "absolute",
            top: 1,
            left: 1,
            width: 100,
            overflow: "scroll"
        }).append(e("<div/>").css({
            width: "100%",
            height: 10
        }))).appendTo("body")).children()).children(),
        r.barWidth = o[0].offsetWidth - o[0].clientWidth,
        r.bScrollOversize = 100 === s[0].offsetWidth && 100 !== o[0].clientWidth,
        r.bScrollbarLeft = 1 !== Math.round(s.offset().left),
        r.bBounding = !!i[0].getBoundingClientRect().width,
        i.remove()),
        e.extend(n.oBrowser, p.__browser),
        n.oScroll.iBarWidth = p.__browser.barWidth
    }
    function j(e, t, n, i, o, s) {
        var a, l = i, c = !1;
        for (n !== r && (a = n,
        c = !0); l !== o; )
            e.hasOwnProperty(l) && (a = c ? t(a, e[l], l, e) : e[l],
            c = !0,
            l += s);
        return a
    }
    function P(t, r) {
        var i = p.defaults.column
          , o = t.aoColumns.length;
        i = e.extend({}, p.models.oColumn, i, {
            nTh: r || n.createElement("th"),
            sTitle: i.sTitle || (r ? r.innerHTML : ""),
            aDataSort: i.aDataSort || [o],
            mData: i.mData || o,
            idx: o
        });
        (i = (t.aoColumns.push(i),
        t.aoPreSearchCols))[o] = e.extend({}, p.models.oSearch, i[o]),
        N(t, o, e(r).data())
    }
    function N(t, n, i) {
        function o(e) {
            return "string" == typeof e && -1 !== e.indexOf("@")
        }
        n = t.aoColumns[n];
        var s = t.oClasses
          , a = e(n.nTh)
          , l = (n.sWidthOrig || (n.sWidthOrig = a.attr("width") || null,
        (d = (a.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/)) && (n.sWidthOrig = d[1])),
        i !== r && null !== i && (I(i),
        A(p.defaults.column, i, !0),
        i.mDataProp === r || i.mData || (i.mData = i.mDataProp),
        i.sType && (n._sManualType = i.sType),
        i.className && !i.sClass && (i.sClass = i.className),
        i.sClass && a.addClass(i.sClass),
        d = n.sClass,
        e.extend(n, i),
        lt(n, i, "sWidth", "sWidthOrig"),
        d !== n.sClass && (n.sClass = d + " " + n.sClass),
        i.iDataSort !== r && (n.aDataSort = [i.iDataSort]),
        lt(n, i, "aDataSort")),
        n.mData)
          , c = Q(l)
          , u = n.mRender ? Q(n.mRender) : null
          , d = (n._bAttrSrc = e.isPlainObject(l) && (o(l.sort) || o(l.type) || o(l.filter)),
        n._setter = null,
        n.fnGetData = function(e, t, n) {
            var i = c(e, t, r, n);
            return u && t ? u(i, t, e, n) : i
        }
        ,
        n.fnSetData = function(e, t, n) {
            return G(l)(e, t, n)
        }
        ,
        "number" == typeof l || n._isArrayHost || (t._rowReadObject = !0),
        t.oFeatures.bSort || (n.bSortable = !1,
        a.addClass(s.sSortableNone)),
        -1 !== e.inArray("asc", n.asSorting));
        i = -1 !== e.inArray("desc", n.asSorting);
        n.bSortable && (d || i) ? d && !i ? (n.sSortingClass = s.sSortableAsc,
        n.sSortingClassJUI = s.sSortJUIAscAllowed) : !d && i ? (n.sSortingClass = s.sSortableDesc,
        n.sSortingClassJUI = s.sSortJUIDescAllowed) : (n.sSortingClass = s.sSortable,
        n.sSortingClassJUI = s.sSortJUI) : (n.sSortingClass = s.sSortableNone,
        n.sSortingClassJUI = "")
    }
    function F(e) {
        if (!1 !== e.oFeatures.bAutoWidth) {
            var t = e.aoColumns;
            ze(e);
            for (var n = 0, r = t.length; n < r; n++)
                t[n].nTh.style.width = t[n].sWidth
        }
        var i = e.oScroll;
        "" === i.sY && "" === i.sX || We(e),
        ft(e, null, "column-sizing", [e])
    }
    function H(e, t) {
        return "number" == typeof (e = $(e, "bVisible"))[t] ? e[t] : null
    }
    function R(t, n) {
        return t = $(t, "bVisible"),
        -1 !== (n = e.inArray(n, t)) ? n : null
    }
    function M(t) {
        var n = 0;
        return e.each(t.aoColumns, (function(t, r) {
            r.bVisible && "none" !== e(r.nTh).css("display") && n++
        }
        )),
        n
    }
    function $(t, n) {
        var r = [];
        return e.map(t.aoColumns, (function(e, t) {
            e[n] && r.push(t)
        }
        )),
        r
    }
    function W(e) {
        for (var t, n, i, o, s, a, l, c = e.aoColumns, u = e.aoData, d = p.ext.type.detect, f = 0, h = c.length; f < h; f++)
            if (l = [],
            !(s = c[f]).sType && s._sManualType)
                s.sType = s._sManualType;
            else if (!s.sType) {
                for (t = 0,
                n = d.length; t < n; t++) {
                    for (i = 0,
                    o = u.length; i < o && (l[i] === r && (l[i] = U(e, i, f, "type")),
                    (a = d[t](l[i], e)) || t === d.length - 1) && ("html" !== a || w(l[i])); i++)
                        ;
                    if (a) {
                        s.sType = a;
                        break
                    }
                }
                s.sType || (s.sType = "string")
            }
    }
    function q(t, n, i, o) {
        var s, a, l, c, u = t.aoColumns;
        if (n)
            for (s = n.length - 1; 0 <= s; s--)
                for (var d, f = (d = n[s]).target !== r ? d.target : d.targets !== r ? d.targets : d.aTargets, h = 0, p = (f = Array.isArray(f) ? f : [f]).length; h < p; h++)
                    if ("number" == typeof f[h] && 0 <= f[h]) {
                        for (; u.length <= f[h]; )
                            P(t);
                        o(f[h], d)
                    } else if ("number" == typeof f[h] && f[h] < 0)
                        o(u.length + f[h], d);
                    else if ("string" == typeof f[h])
                        for (l = 0,
                        c = u.length; l < c; l++)
                            "_all" != f[h] && !e(u[l].nTh).hasClass(f[h]) || o(l, d);
        if (i)
            for (s = 0,
            a = i.length; s < a; s++)
                o(s, i[s])
    }
    function B(t, n, i, o) {
        for (var s = t.aoData.length, a = e.extend(!0, {}, p.models.oRow, {
            src: i ? "dom" : "data",
            idx: s
        }), l = (a._aData = n,
        t.aoData.push(a),
        t.aoColumns), c = 0, u = l.length; c < u; c++)
            l[c].sType = null;
        return t.aiDisplayMaster.push(s),
        (n = t.rowIdFn(n)) !== r && (t.aIds[n] = a),
        !i && t.oFeatures.bDeferRender || re(t, s, i, o),
        s
    }
    function z(t, n) {
        var r;
        return (n = n instanceof e ? n : e(n)).map((function(e, n) {
            return r = ne(t, n),
            B(t, r.data, n, r.cells)
        }
        ))
    }
    function U(e, t, n, i) {
        "search" === i ? i = "filter" : "order" === i && (i = "sort");
        var o = e.iDraw
          , s = e.aoColumns[n]
          , a = e.aoData[t]._aData
          , l = s.sDefaultContent
          , c = s.fnGetData(a, i, {
            settings: e,
            row: t,
            col: n
        });
        if (c === r)
            return e.iDrawError != o && null === l && (at(e, 0, "Requested unknown parameter " + ("function" == typeof s.mData ? "{function}" : "'" + s.mData + "'") + " for row " + t + ", column " + n, 4),
            e.iDrawError = o),
            l;
        if (c !== a && null !== c || null === l || i === r) {
            if ("function" == typeof c)
                return c.call(a)
        } else
            c = l;
        return null === c && "display" === i ? "" : "filter" === i && (t = p.ext.type.search)[s.sType] ? t[s.sType](c) : c
    }
    function V(e, t, n, r) {
        var i = e.aoColumns[n]
          , o = e.aoData[t]._aData;
        i.fnSetData(o, r, {
            settings: e,
            row: t,
            col: n
        })
    }
    var X = /\[.*?\]$/
      , J = /\(\)$/;
    function Y(t) {
        return e.map(t.match(/(\\.|[^\.])+/g) || [""], (function(e) {
            return e.replace(/\\\./g, ".")
        }
        ))
    }
    var Q = p.util.get
      , G = p.util.set;
    function K(e) {
        return S(e.aoData, "_aData")
    }
    function Z(e) {
        e.aoData.length = 0,
        e.aiDisplayMaster.length = 0,
        e.aiDisplay.length = 0,
        e.aIds = {}
    }
    function ee(e, t, n) {
        for (var i = -1, o = 0, s = e.length; o < s; o++)
            e[o] == t ? i = o : e[o] > t && e[o]--;
        -1 != i && n === r && e.splice(i, 1)
    }
    function te(e, t, n, i) {
        function o(n, r) {
            for (; n.childNodes.length; )
                n.removeChild(n.firstChild);
            n.innerHTML = U(e, t, r, "display")
        }
        var s, a, l = e.aoData[t];
        if ("dom" !== n && (n && "auto" !== n || "dom" !== l.src)) {
            var c = l.anCells;
            if (c)
                if (i !== r)
                    o(c[i], i);
                else
                    for (s = 0,
                    a = c.length; s < a; s++)
                        o(c[s], s)
        } else
            l._aData = ne(e, l, i, i === r ? r : l._aData).data;
        l._aSortData = null,
        l._aFilterData = null;
        var u = e.aoColumns;
        if (i !== r)
            u[i].sType = null;
        else {
            for (s = 0,
            a = u.length; s < a; s++)
                u[s].sType = null;
            ie(e, l)
        }
    }
    function ne(e, t, n, i) {
        function o(e, t) {
            var n;
            "string" == typeof e && -1 !== (n = e.indexOf("@")) && (n = e.substring(n + 1),
            G(e)(i, t.getAttribute(n)))
        }
        function s(e) {
            n !== r && n !== f || (l = h[f],
            c = e.innerHTML.trim(),
            l && l._bAttrSrc ? (G(l.mData._)(i, c),
            o(l.mData.sort, e),
            o(l.mData.type, e),
            o(l.mData.filter, e)) : p ? (l._setter || (l._setter = G(l.mData)),
            l._setter(i, c)) : i[f] = c),
            f++
        }
        var a, l, c, u = [], d = t.firstChild, f = 0, h = e.aoColumns, p = e._rowReadObject;
        if (i = i !== r ? i : p ? {} : [],
        d)
            for (; d; )
                "TD" != (a = d.nodeName.toUpperCase()) && "TH" != a || (s(d),
                u.push(d)),
                d = d.nextSibling;
        else
            for (var g = 0, m = (u = t.anCells).length; g < m; g++)
                s(u[g]);
        return (t = t.firstChild ? t : t.nTr) && (t = t.getAttribute("id")) && G(e.rowId)(i, t),
        {
            data: i,
            cells: u
        }
    }
    function re(t, r, i, o) {
        var s, a, l, c, u, d, f = t.aoData[r], h = f._aData, p = [];
        if (null === f.nTr) {
            for (s = i || n.createElement("tr"),
            f.nTr = s,
            f.anCells = p,
            s._DT_RowIndex = r,
            ie(t, f),
            c = 0,
            u = t.aoColumns.length; c < u; c++)
                l = t.aoColumns[c],
                (a = (d = !i) ? n.createElement(l.sCellType) : o[c]) || at(t, 0, "Incorrect column count", 18),
                a._DT_CellIndex = {
                    row: r,
                    column: c
                },
                p.push(a),
                !d && (!l.mRender && l.mData === c || e.isPlainObject(l.mData) && l.mData._ === c + ".display") || (a.innerHTML = U(t, r, c, "display")),
                l.sClass && (a.className += " " + l.sClass),
                l.bVisible && !i ? s.appendChild(a) : !l.bVisible && i && a.parentNode.removeChild(a),
                l.fnCreatedCell && l.fnCreatedCell.call(t.oInstance, a, U(t, r, c), h, r, c);
            ft(t, "aoRowCreatedCallback", null, [s, h, r, p])
        }
    }
    function ie(t, n) {
        var r = n.nTr
          , i = n._aData;
        r && ((t = t.rowIdFn(i)) && (r.id = t),
        i.DT_RowClass && (t = i.DT_RowClass.split(" "),
        n.__rowc = n.__rowc ? T(n.__rowc.concat(t)) : t,
        e(r).removeClass(n.__rowc.join(" ")).addClass(i.DT_RowClass)),
        i.DT_RowAttr && e(r).attr(i.DT_RowAttr),
        i.DT_RowData && e(r).data(i.DT_RowData))
    }
    function oe(t) {
        var n, r, i, o = t.nTHead, s = t.nTFoot, a = 0 === e("th, td", o).length, l = t.oClasses, c = t.aoColumns;
        for (a && (r = e("<tr/>").appendTo(o)),
        d = 0,
        f = c.length; d < f; d++)
            i = c[d],
            n = e(i.nTh).addClass(i.sClass),
            a && n.appendTo(r),
            t.oFeatures.bSort && (n.addClass(i.sSortingClass),
            !1 !== i.bSortable && (n.attr("tabindex", t.iTabIndex).attr("aria-controls", t.sTableId),
            et(t, i.nTh, d))),
            i.sTitle != n[0].innerHTML && n.html(i.sTitle),
            pt(t, "header")(t, n, i, l);
        if (a && ue(t.aoHeader, o),
        e(o).children("tr").children("th, td").addClass(l.sHeaderTH),
        e(s).children("tr").children("th, td").addClass(l.sFooterTH),
        null !== s)
            for (var u = t.aoFooter[0], d = 0, f = u.length; d < f; d++)
                (i = c[d]) ? (i.nTf = u[d].cell,
                i.sClass && e(i.nTf).addClass(i.sClass)) : at(t, 0, "Incorrect column count", 18)
    }
    function se(t, n, i) {
        var o, s, a, l, c, u, d, f, h, p = [], g = [], m = t.aoColumns.length;
        if (n) {
            for (i === r && (i = !1),
            o = 0,
            s = n.length; o < s; o++) {
                for (p[o] = n[o].slice(),
                p[o].nTr = n[o].nTr,
                a = m - 1; 0 <= a; a--)
                    t.aoColumns[a].bVisible || i || p[o].splice(a, 1);
                g.push([])
            }
            for (o = 0,
            s = p.length; o < s; o++) {
                if (d = p[o].nTr)
                    for (; u = d.firstChild; )
                        d.removeChild(u);
                for (a = 0,
                l = p[o].length; a < l; a++)
                    if (h = f = 1,
                    g[o][a] === r) {
                        for (d.appendChild(p[o][a].cell),
                        g[o][a] = 1; p[o + f] !== r && p[o][a].cell == p[o + f][a].cell; )
                            g[o + f][a] = 1,
                            f++;
                        for (; p[o][a + h] !== r && p[o][a].cell == p[o][a + h].cell; ) {
                            for (c = 0; c < f; c++)
                                g[o + c][a + h] = 1;
                            h++
                        }
                        e(p[o][a].cell).attr("rowspan", f).attr("colspan", h)
                    }
            }
        }
    }
    function ae(t, n) {
        i = "ssp" == gt(u = t),
        (c = u.iInitDisplayStart) !== r && -1 !== c && (u._iDisplayStart = !i && c >= u.fnRecordsDisplay() ? 0 : c,
        u.iInitDisplayStart = -1);
        var i = ft(t, "aoPreDrawCallback", "preDraw", [t]);
        if (-1 !== e.inArray(!1, i))
            Me(t, !1);
        else {
            var o = []
              , s = 0
              , a = t.asStripeClasses
              , l = a.length
              , c = t.oLanguage
              , u = "ssp" == gt(t)
              , d = t.aiDisplay
              , f = (i = t._iDisplayStart,
            t.fnDisplayEnd());
            if (t.bDrawing = !0,
            t.bDeferLoading)
                t.bDeferLoading = !1,
                t.iDraw++,
                Me(t, !1);
            else if (u) {
                if (!t.bDestroying && !n)
                    return void he(t)
            } else
                t.iDraw++;
            if (0 !== d.length)
                for (var h = u ? t.aoData.length : f, p = u ? 0 : i; p < h; p++) {
                    var g, m = d[p], v = t.aoData[m], y = (null === v.nTr && re(t, m),
                    v.nTr);
                    0 !== l && (g = a[s % l],
                    v._sRowStripe != g && (e(y).removeClass(v._sRowStripe).addClass(g),
                    v._sRowStripe = g)),
                    ft(t, "aoRowCallback", null, [y, v._aData, s, p, m]),
                    o.push(y),
                    s++
                }
            else
                n = c.sZeroRecords,
                1 == t.iDraw && "ajax" == gt(t) ? n = c.sLoadingRecords : c.sEmptyTable && 0 === t.fnRecordsTotal() && (n = c.sEmptyTable),
                o[0] = e("<tr/>", {
                    class: l ? a[0] : ""
                }).append(e("<td />", {
                    valign: "top",
                    colSpan: M(t),
                    class: t.oClasses.sRowEmpty
                }).html(n))[0];
            ft(t, "aoHeaderCallback", "header", [e(t.nTHead).children("tr")[0], K(t), i, f, d]),
            ft(t, "aoFooterCallback", "footer", [e(t.nTFoot).children("tr")[0], K(t), i, f, d]),
            (u = e(t.nTBody)).children().detach(),
            u.append(e(o)),
            ft(t, "aoDrawCallback", "draw", [t]),
            t.bSorted = !1,
            t.bFiltered = !1,
            t.bDrawing = !1
        }
    }
    function le(e, t) {
        var n = (r = e.oFeatures).bSort
          , r = r.bFilter;
        n && Ge(e),
        r ? ye(e, e.oPreviousSearch) : e.aiDisplay = e.aiDisplayMaster.slice(),
        !0 !== t && (e._iDisplayStart = 0),
        e._drawHold = t,
        ae(e),
        e._drawHold = !1
    }
    function ce(t) {
        for (var n, r, i, o, s, a, l, c = t.oClasses, u = e(t.nTable), d = (u = e("<div/>").insertBefore(u),
        t.oFeatures), f = e("<div/>", {
            id: t.sTableId + "_wrapper",
            class: c.sWrapper + (t.nTFoot ? "" : " " + c.sNoFooter)
        }), h = (t.nHolding = u[0],
        t.nTableWrapper = f[0],
        t.nTableReinsertBefore = t.nTable.nextSibling,
        t.sDom.split("")), g = 0; g < h.length; g++) {
            if (n = null,
            "<" == (r = h[g])) {
                if (i = e("<div/>")[0],
                "'" == (o = h[g + 1]) || '"' == o) {
                    for (s = "",
                    a = 2; h[g + a] != o; )
                        s += h[g + a],
                        a++;
                    "H" == s ? s = c.sJUIHeader : "F" == s && (s = c.sJUIFooter),
                    -1 != s.indexOf(".") ? (l = s.split("."),
                    i.id = l[0].substr(1, l[0].length - 1),
                    i.className = l[1]) : "#" == s.charAt(0) ? i.id = s.substr(1, s.length - 1) : i.className = s,
                    g += a
                }
                f.append(i),
                f = e(i)
            } else if (">" == r)
                f = f.parent();
            else if ("l" == r && d.bPaginate && d.bLengthChange)
                n = Ne(t);
            else if ("f" == r && d.bFilter)
                n = ve(t);
            else if ("r" == r && d.bProcessing)
                n = Re(t);
            else if ("t" == r)
                n = $e(t);
            else if ("i" == r && d.bInfo)
                n = ke(t);
            else if ("p" == r && d.bPaginate)
                n = Fe(t);
            else if (0 !== p.ext.feature.length)
                for (var m = p.ext.feature, v = 0, y = m.length; v < y; v++)
                    if (r == m[v].cFeature) {
                        n = m[v].fnInit(t);
                        break
                    }
            n && ((l = t.aanFeatures)[r] || (l[r] = []),
            l[r].push(n),
            f.append(n))
        }
        u.replaceWith(f),
        t.nHolding = null
    }
    function ue(t, n) {
        var r, i, o, s, a, l, c, u, d, f, h = e(n).children("tr");
        for (t.splice(0, t.length),
        o = 0,
        l = h.length; o < l; o++)
            t.push([]);
        for (o = 0,
        l = h.length; o < l; o++)
            for (i = (r = h[o]).firstChild; i; ) {
                if ("TD" == i.nodeName.toUpperCase() || "TH" == i.nodeName.toUpperCase())
                    for (u = (u = +i.getAttribute("colspan")) && 0 !== u && 1 !== u ? u : 1,
                    d = (d = +i.getAttribute("rowspan")) && 0 !== d && 1 !== d ? d : 1,
                    c = function(e, t, n) {
                        for (var r = e[t]; r[n]; )
                            n++;
                        return n
                    }(t, o, 0),
                    f = 1 === u,
                    a = 0; a < u; a++)
                        for (s = 0; s < d; s++)
                            t[o + s][c + a] = {
                                cell: i,
                                unique: f
                            },
                            t[o + s].nTr = r;
                i = i.nextSibling
            }
    }
    function de(e, t, n) {
        var r = [];
        n || (n = e.aoHeader,
        t && ue(n = [], t));
        for (var i = 0, o = n.length; i < o; i++)
            for (var s = 0, a = n[i].length; s < a; s++)
                !n[i][s].unique || r[s] && e.bSortCellsTop || (r[s] = n[i][s].cell);
        return r
    }
    function fe(t, n, r) {
        function i(e) {
            var n = t.jqXHR ? t.jqXHR.status : null;
            (null === e || "number" == typeof n && 204 == n) && me(t, e = {}, []),
            (n = e.error || e.sError) && at(t, 0, n),
            t.json = e,
            ft(t, null, "xhr", [t, e, t.jqXHR]),
            r(e)
        }
        ft(t, "aoServerParams", "serverParams", [n]),
        n && Array.isArray(n) && (o = {},
        s = /(.*?)\[\]$/,
        e.each(n, (function(e, t) {
            var n = t.name.match(s);
            n ? (n = n[0],
            o[n] || (o[n] = []),
            o[n].push(t.value)) : o[t.name] = t.value
        }
        )),
        n = o);
        var o, s, a, l = t.ajax, c = t.oInstance, u = (e.isPlainObject(l) && l.data && (u = "function" == typeof (a = l.data) ? a(n, t) : a,
        n = "function" == typeof a && u ? u : e.extend(!0, n, u),
        delete l.data),
        {
            data: n,
            success: i,
            dataType: "json",
            cache: !1,
            type: t.sServerMethod,
            error: function(n, r, i) {
                var o = ft(t, null, "xhr", [t, null, t.jqXHR]);
                -1 === e.inArray(!0, o) && ("parsererror" == r ? at(t, 0, "Invalid JSON response", 1) : 4 === n.readyState && at(t, 0, "Ajax error", 7)),
                Me(t, !1)
            }
        });
        t.oAjaxData = n,
        ft(t, null, "preXhr", [t, n]),
        t.fnServerData ? t.fnServerData.call(c, t.sAjaxSource, e.map(n, (function(e, t) {
            return {
                name: t,
                value: e
            }
        }
        )), i, t) : t.sAjaxSource || "string" == typeof l ? t.jqXHR = e.ajax(e.extend(u, {
            url: l || t.sAjaxSource
        })) : "function" == typeof l ? t.jqXHR = l.call(c, n, i, t) : (t.jqXHR = e.ajax(e.extend(u, l)),
        l.data = a)
    }
    function he(e) {
        e.iDraw++,
        Me(e, !0);
        var t = e._drawHold;
        fe(e, pe(e), (function(n) {
            e._drawHold = t,
            ge(e, n),
            e._drawHold = !1
        }
        ))
    }
    function pe(t) {
        for (var n, r, i, o = t.aoColumns, s = o.length, a = t.oFeatures, l = t.oPreviousSearch, c = t.aoPreSearchCols, u = [], d = Qe(t), f = t._iDisplayStart, h = !1 !== a.bPaginate ? t._iDisplayLength : -1, g = function(e, t) {
            u.push({
                name: e,
                value: t
            })
        }, m = (g("sEcho", t.iDraw),
        g("iColumns", s),
        g("sColumns", S(o, "sName").join(",")),
        g("iDisplayStart", f),
        g("iDisplayLength", h),
        {
            draw: t.iDraw,
            columns: [],
            order: [],
            start: f,
            length: h,
            search: {
                value: l.sSearch,
                regex: l.bRegex
            }
        }), v = 0; v < s; v++)
            r = o[v],
            i = c[v],
            n = "function" == typeof r.mData ? "function" : r.mData,
            m.columns.push({
                data: n,
                name: r.sName,
                searchable: r.bSearchable,
                orderable: r.bSortable,
                search: {
                    value: i.sSearch,
                    regex: i.bRegex
                }
            }),
            g("mDataProp_" + v, n),
            a.bFilter && (g("sSearch_" + v, i.sSearch),
            g("bRegex_" + v, i.bRegex),
            g("bSearchable_" + v, r.bSearchable)),
            a.bSort && g("bSortable_" + v, r.bSortable);
        return a.bFilter && (g("sSearch", l.sSearch),
        g("bRegex", l.bRegex)),
        a.bSort && (e.each(d, (function(e, t) {
            m.order.push({
                column: t.col,
                dir: t.dir
            }),
            g("iSortCol_" + e, t.col),
            g("sSortDir_" + e, t.dir)
        }
        )),
        g("iSortingCols", d.length)),
        null === (f = p.ext.legacy.ajax) ? t.sAjaxSource ? u : m : f ? u : m
    }
    function ge(e, t) {
        function n(e, n) {
            return t[e] !== r ? t[e] : t[n]
        }
        var i = me(e, t)
          , o = n("sEcho", "draw")
          , s = n("iTotalRecords", "recordsTotal")
          , a = n("iTotalDisplayRecords", "recordsFiltered");
        if (o !== r) {
            if (+o < e.iDraw)
                return;
            e.iDraw = +o
        }
        i = i || [],
        Z(e),
        e._iRecordsTotal = parseInt(s, 10),
        e._iRecordsDisplay = parseInt(a, 10);
        for (var l = 0, c = i.length; l < c; l++)
            B(e, i[l]);
        e.aiDisplay = e.aiDisplayMaster.slice(),
        ae(e, !0),
        e._bInitComplete || je(e, t),
        Me(e, !1)
    }
    function me(t, n, i) {
        if (t = e.isPlainObject(t.ajax) && t.ajax.dataSrc !== r ? t.ajax.dataSrc : t.sAjaxDataProp,
        !i)
            return "data" === t ? n.aaData || n[t] : "" !== t ? Q(t)(n) : n;
        G(t)(n, i)
    }
    function ve(t) {
        function r(e) {
            l.f;
            var n = this.value || "";
            a.return && "Enter" !== e.key || n != a.sSearch && (ye(t, {
                sSearch: n,
                bRegex: a.bRegex,
                bSmart: a.bSmart,
                bCaseInsensitive: a.bCaseInsensitive,
                return: a.return
            }),
            t._iDisplayStart = 0,
            ae(t))
        }
        var i = t.oClasses
          , o = t.sTableId
          , s = t.oLanguage
          , a = t.oPreviousSearch
          , l = t.aanFeatures
          , c = '<input type="search" class="' + i.sFilterInput + '"/>'
          , u = (u = s.sSearch).match(/_INPUT_/) ? u.replace("_INPUT_", c) : u + c
          , d = (c = e("<div/>", {
            id: l.f ? null : o + "_filter",
            class: i.sFilter
        }).append(e("<label/>").append(u)),
        i = null !== t.searchDelay ? t.searchDelay : "ssp" === gt(t) ? 400 : 0,
        e("input", c).val(a.sSearch).attr("placeholder", s.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", i ? Ue(r, i) : r).on("mouseup.DT", (function(e) {
            setTimeout((function() {
                r.call(d[0], e)
            }
            ), 10)
        }
        )).on("keypress.DT", (function(e) {
            if (13 == e.keyCode)
                return !1
        }
        )).attr("aria-controls", o));
        return e(t.nTable).on("search.dt.DT", (function(e, r) {
            if (t === r)
                try {
                    d[0] !== n.activeElement && d.val(a.sSearch)
                } catch (e) {}
        }
        )),
        c[0]
    }
    function ye(e, t, n) {
        function i(e) {
            s.sSearch = e.sSearch,
            s.bRegex = e.bRegex,
            s.bSmart = e.bSmart,
            s.bCaseInsensitive = e.bCaseInsensitive,
            s.return = e.return
        }
        function o(e) {
            return e.bEscapeRegex !== r ? !e.bEscapeRegex : e.bRegex
        }
        var s = e.oPreviousSearch
          , a = e.aoPreSearchCols;
        if (W(e),
        "ssp" != gt(e)) {
            we(e, t.sSearch, n, o(t), t.bSmart, t.bCaseInsensitive),
            i(t);
            for (var l = 0; l < a.length; l++)
                _e(e, a[l].sSearch, l, o(a[l]), a[l].bSmart, a[l].bCaseInsensitive);
            be(e)
        } else
            i(t);
        e.bFiltered = !0,
        ft(e, null, "search", [e])
    }
    function be(t) {
        for (var n, r, i = p.ext.search, o = t.aiDisplay, s = 0, a = i.length; s < a; s++) {
            for (var l = [], c = 0, u = o.length; c < u; c++)
                r = o[c],
                n = t.aoData[r],
                i[s](t, n._aFilterData, r, n._aData, c) && l.push(r);
            o.length = 0,
            e.merge(o, l)
        }
    }
    function _e(e, t, n, r, i, o) {
        if ("" !== t) {
            for (var s, a = [], l = e.aiDisplay, c = xe(t, r, i, o), u = 0; u < l.length; u++)
                s = e.aoData[l[u]]._aFilterData[n],
                c.test(s) && a.push(l[u]);
            e.aiDisplay = a
        }
    }
    function we(e, t, n, r, i, o) {
        var s, a, l, c = xe(t, r, i, o), u = (i = e.oPreviousSearch.sSearch,
        o = e.aiDisplayMaster,
        []);
        if (0 !== p.ext.search.length && (n = !0),
        a = De(e),
        t.length <= 0)
            e.aiDisplay = o.slice();
        else {
            for ((a || n || r || i.length > t.length || 0 !== t.indexOf(i) || e.bSorted) && (e.aiDisplay = o.slice()),
            s = e.aiDisplay,
            l = 0; l < s.length; l++)
                c.test(e.aoData[s[l]]._sFilterRow) && u.push(s[l]);
            e.aiDisplay = u
        }
    }
    function xe(t, n, r, i) {
        return t = n ? t : Se(t),
        r && (t = "^(?=.*?" + e.map(t.match(/["\u201C][^"\u201D]+["\u201D]|[^ ]+/g) || [""], (function(e) {
            var t;
            return '"' === e.charAt(0) ? e = (t = e.match(/^"(.*)"$/)) ? t[1] : e : "“" === e.charAt(0) && (e = (t = e.match(/^\u201C(.*)\u201D$/)) ? t[1] : e),
            e.replace('"', "")
        }
        )).join(")(?=.*?") + ").*$"),
        new RegExp(t,i ? "i" : "")
    }
    var Se = p.util.escapeRegex
      , Te = e("<div>")[0]
      , Ce = Te.textContent !== r;
    function De(e) {
        for (var t, n, r, i, o, s = e.aoColumns, a = !1, l = 0, c = e.aoData.length; l < c; l++)
            if (!(o = e.aoData[l])._aFilterData) {
                for (r = [],
                t = 0,
                n = s.length; t < n; t++)
                    s[t].bSearchable ? "string" != typeof (i = null === (i = U(e, l, t, "filter")) ? "" : i) && i.toString && (i = i.toString()) : i = "",
                    i.indexOf && -1 !== i.indexOf("&") && (Te.innerHTML = i,
                    i = Ce ? Te.textContent : Te.innerText),
                    i.replace && (i = i.replace(/[\r\n\u2028]/g, "")),
                    r.push(i);
                o._aFilterData = r,
                o._sFilterRow = r.join("  "),
                a = !0
            }
        return a
    }
    function Ae(e) {
        return {
            search: e.sSearch,
            smart: e.bSmart,
            regex: e.bRegex,
            caseInsensitive: e.bCaseInsensitive
        }
    }
    function Ee(e) {
        return {
            sSearch: e.search,
            bSmart: e.smart,
            bRegex: e.regex,
            bCaseInsensitive: e.caseInsensitive
        }
    }
    function ke(t) {
        var n = t.sTableId
          , r = t.aanFeatures.i
          , i = e("<div/>", {
            class: t.oClasses.sInfo,
            id: r ? null : n + "_info"
        });
        return r || (t.aoDrawCallback.push({
            fn: Le,
            sName: "information"
        }),
        i.attr("role", "status").attr("aria-live", "polite"),
        e(t.nTable).attr("aria-describedby", n + "_info")),
        i[0]
    }
    function Le(t) {
        var n, r, i, o, s, a, l = t.aanFeatures.i;
        0 !== l.length && (a = t.oLanguage,
        n = t._iDisplayStart + 1,
        r = t.fnDisplayEnd(),
        i = t.fnRecordsTotal(),
        s = (o = t.fnRecordsDisplay()) ? a.sInfo : a.sInfoEmpty,
        o !== i && (s += " " + a.sInfoFiltered),
        s = Ie(t, s += a.sInfoPostFix),
        null !== (a = a.fnInfoCallback) && (s = a.call(t.oInstance, t, n, r, i, o, s)),
        e(l).html(s))
    }
    function Ie(e, t) {
        var n = e.fnFormatNumber
          , r = e._iDisplayStart + 1
          , i = e._iDisplayLength
          , o = e.fnRecordsDisplay()
          , s = -1 === i;
        return t.replace(/_START_/g, n.call(e, r)).replace(/_END_/g, n.call(e, e.fnDisplayEnd())).replace(/_MAX_/g, n.call(e, e.fnRecordsTotal())).replace(/_TOTAL_/g, n.call(e, o)).replace(/_PAGE_/g, n.call(e, s ? 1 : Math.ceil(r / i))).replace(/_PAGES_/g, n.call(e, s ? 1 : Math.ceil(o / i)))
    }
    function Oe(e) {
        var t, n, r, i = e.iInitDisplayStart, o = e.aoColumns, s = e.oFeatures, a = e.bDeferLoading;
        if (e.bInitialised) {
            for (ce(e),
            oe(e),
            se(e, e.aoHeader),
            se(e, e.aoFooter),
            Me(e, !0),
            s.bAutoWidth && ze(e),
            t = 0,
            n = o.length; t < n; t++)
                (r = o[t]).sWidth && (r.nTh.style.width = Ye(r.sWidth));
            ft(e, null, "preInit", [e]),
            le(e),
            "ssp" == (s = gt(e)) && !a || ("ajax" == s ? fe(e, [], (function(n) {
                var r = me(e, n);
                for (t = 0; t < r.length; t++)
                    B(e, r[t]);
                e.iInitDisplayStart = i,
                le(e),
                Me(e, !1),
                je(e, n)
            }
            )) : (Me(e, !1),
            je(e)))
        } else
            setTimeout((function() {
                Oe(e)
            }
            ), 200)
    }
    function je(e, t) {
        e._bInitComplete = !0,
        (t || e.oInit.aaData) && F(e),
        ft(e, null, "plugin-init", [e, t]),
        ft(e, "aoInitComplete", "init", [e, t])
    }
    function Pe(e, t) {
        t = parseInt(t, 10),
        e._iDisplayLength = t,
        ht(e),
        ft(e, null, "length", [e, t])
    }
    function Ne(t) {
        for (var n = t.oClasses, r = t.sTableId, i = t.aLengthMenu, o = Array.isArray(i[0]), s = o ? i[0] : i, a = o ? i[1] : i, l = e("<select/>", {
            name: r + "_length",
            "aria-controls": r,
            class: n.sLengthSelect
        }), c = 0, u = s.length; c < u; c++)
            l[0][c] = new Option("number" == typeof a[c] ? t.fnFormatNumber(a[c]) : a[c],s[c]);
        var d = e("<div><label/></div>").addClass(n.sLength);
        return t.aanFeatures.l || (d[0].id = r + "_length"),
        d.children().append(t.oLanguage.sLengthMenu.replace("_MENU_", l[0].outerHTML)),
        e("select", d).val(t._iDisplayLength).on("change.DT", (function(n) {
            Pe(t, e(this).val()),
            ae(t)
        }
        )),
        e(t.nTable).on("length.dt.DT", (function(n, r, i) {
            t === r && e("select", d).val(i)
        }
        )),
        d[0]
    }
    function Fe(t) {
        function n(e) {
            ae(e)
        }
        var r = t.sPaginationType
          , i = p.ext.pager[r]
          , o = "function" == typeof i
          , s = (r = e("<div/>").addClass(t.oClasses.sPaging + r)[0],
        t.aanFeatures);
        return o || i.fnInit(t, r, n),
        s.p || (r.id = t.sTableId + "_paginate",
        t.aoDrawCallback.push({
            fn: function(e) {
                if (o)
                    for (var t = e._iDisplayStart, r = e._iDisplayLength, a = e.fnRecordsDisplay(), l = -1 === r, c = l ? 0 : Math.ceil(t / r), u = l ? 1 : Math.ceil(a / r), d = i(c, u), f = 0, h = s.p.length; f < h; f++)
                        pt(e, "pageButton")(e, s.p[f], f, d, c, u);
                else
                    i.fnUpdate(e, n)
            },
            sName: "pagination"
        })),
        r
    }
    function He(e, t, n) {
        var r = e._iDisplayStart
          , i = e._iDisplayLength
          , o = (0 === (o = e.fnRecordsDisplay()) || -1 === i ? r = 0 : "number" == typeof t ? o < (r = t * i) && (r = 0) : "first" == t ? r = 0 : "previous" == t ? (r = 0 <= i ? r - i : 0) < 0 && (r = 0) : "next" == t ? r + i < o && (r += i) : "last" == t ? r = Math.floor((o - 1) / i) * i : at(e, 0, "Unknown paging action: " + t, 5),
        e._iDisplayStart !== r);
        return e._iDisplayStart = r,
        o ? (ft(e, null, "page", [e]),
        n && ae(e)) : ft(e, null, "page-nc", [e]),
        o
    }
    function Re(t) {
        return e("<div/>", {
            id: t.aanFeatures.r ? null : t.sTableId + "_processing",
            class: t.oClasses.sProcessing,
            role: "status"
        }).html(t.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>").insertBefore(t.nTable)[0]
    }
    function Me(t, n) {
        t.oFeatures.bProcessing && e(t.aanFeatures.r).css("display", n ? "block" : "none"),
        ft(t, null, "processing", [t, n])
    }
    function $e(t) {
        var n, r, i, o, s, a, l, c, u, d, f, h, p = e(t.nTable), g = t.oScroll;
        return "" === g.sX && "" === g.sY ? t.nTable : (n = g.sX,
        r = g.sY,
        i = t.oClasses,
        s = (o = p.children("caption")).length ? o[0]._captionSide : null,
        c = e(p[0].cloneNode(!1)),
        a = e(p[0].cloneNode(!1)),
        u = function(e) {
            return e ? Ye(e) : null
        }
        ,
        (l = p.children("tfoot")).length || (l = null),
        c = e(f = "<div/>", {
            class: i.sScrollWrapper
        }).append(e(f, {
            class: i.sScrollHead
        }).css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: n ? u(n) : "100%"
        }).append(e(f, {
            class: i.sScrollHeadInner
        }).css({
            "box-sizing": "content-box",
            width: g.sXInner || "100%"
        }).append(c.removeAttr("id").css("margin-left", 0).append("top" === s ? o : null).append(p.children("thead"))))).append(e(f, {
            class: i.sScrollBody
        }).css({
            position: "relative",
            overflow: "auto",
            width: u(n)
        }).append(p)),
        l && c.append(e(f, {
            class: i.sScrollFoot
        }).css({
            overflow: "hidden",
            border: 0,
            width: n ? u(n) : "100%"
        }).append(e(f, {
            class: i.sScrollFootInner
        }).append(a.removeAttr("id").css("margin-left", 0).append("bottom" === s ? o : null).append(p.children("tfoot"))))),
        u = c.children(),
        d = u[0],
        f = u[1],
        h = l ? u[2] : null,
        n && e(f).on("scroll.DT", (function(e) {
            var t = this.scrollLeft;
            d.scrollLeft = t,
            l && (h.scrollLeft = t)
        }
        )),
        e(f).css("max-height", r),
        g.bCollapse || e(f).css("height", r),
        t.nScrollHead = d,
        t.nScrollBody = f,
        t.nScrollFoot = h,
        t.aoDrawCallback.push({
            fn: We,
            sName: "scrolling"
        }),
        c[0])
    }
    function We(n) {
        function i(e) {
            (e = e.style).paddingTop = "0",
            e.paddingBottom = "0",
            e.borderTopWidth = "0",
            e.borderBottomWidth = "0",
            e.height = 0
        }
        var o, s, a, l, c, u = (h = n.oScroll).sX, d = h.sXInner, f = h.sY, h = h.iBarWidth, p = e(n.nScrollHead), g = p[0].style, m = (v = p.children("div"))[0].style, v = v.children("table"), y = n.nScrollBody, b = e(y), _ = y.style, w = e(n.nScrollFoot).children("div"), x = w.children("table"), T = e(n.nTHead), C = e(n.nTable), D = C[0], A = D.style, E = n.nTFoot ? e(n.nTFoot) : null, k = n.oBrowser, L = k.bScrollOversize, I = (S(n.aoColumns, "nTh"),
        []), O = [], j = [], P = [], N = y.scrollHeight > y.clientHeight;
        n.scrollBarVis !== N && n.scrollBarVis !== r ? (n.scrollBarVis = N,
        F(n)) : (n.scrollBarVis = N,
        C.children("thead, tfoot").remove(),
        E && (N = E.clone().prependTo(C),
        c = E.find("tr"),
        s = N.find("tr"),
        N.find("[id]").removeAttr("id")),
        N = T.clone().prependTo(C),
        T = T.find("tr"),
        o = N.find("tr"),
        N.find("th, td").removeAttr("tabindex"),
        N.find("[id]").removeAttr("id"),
        u || (_.width = "100%",
        p[0].style.width = "100%"),
        e.each(de(n, N), (function(e, t) {
            a = H(n, e),
            t.style.width = n.aoColumns[a].sWidth
        }
        )),
        E && qe((function(e) {
            e.style.width = ""
        }
        ), s),
        p = C.outerWidth(),
        "" === u ? (A.width = "100%",
        L && (C.find("tbody").height() > y.offsetHeight || "scroll" == b.css("overflow-y")) && (A.width = Ye(C.outerWidth() - h)),
        p = C.outerWidth()) : "" !== d && (A.width = Ye(d),
        p = C.outerWidth()),
        qe(i, o),
        qe((function(n) {
            var r = t.getComputedStyle ? t.getComputedStyle(n).width : Ye(e(n).width());
            j.push(n.innerHTML),
            I.push(r)
        }
        ), o),
        qe((function(e, t) {
            e.style.width = I[t]
        }
        ), T),
        e(o).css("height", 0),
        E && (qe(i, s),
        qe((function(t) {
            P.push(t.innerHTML),
            O.push(Ye(e(t).css("width")))
        }
        ), s),
        qe((function(e, t) {
            e.style.width = O[t]
        }
        ), c),
        e(s).height(0)),
        qe((function(e, t) {
            e.innerHTML = '<div class="dataTables_sizing">' + j[t] + "</div>",
            e.childNodes[0].style.height = "0",
            e.childNodes[0].style.overflow = "hidden",
            e.style.width = I[t]
        }
        ), o),
        E && qe((function(e, t) {
            e.innerHTML = '<div class="dataTables_sizing">' + P[t] + "</div>",
            e.childNodes[0].style.height = "0",
            e.childNodes[0].style.overflow = "hidden",
            e.style.width = O[t]
        }
        ), s),
        Math.round(C.outerWidth()) < Math.round(p) ? (l = y.scrollHeight > y.offsetHeight || "scroll" == b.css("overflow-y") ? p + h : p,
        L && (y.scrollHeight > y.offsetHeight || "scroll" == b.css("overflow-y")) && (A.width = Ye(l - h)),
        "" !== u && "" === d || at(n, 1, "Possible column misalignment", 6)) : l = "100%",
        _.width = Ye(l),
        g.width = Ye(l),
        E && (n.nScrollFoot.style.width = Ye(l)),
        f || L && (_.height = Ye(D.offsetHeight + h)),
        N = C.outerWidth(),
        v[0].style.width = Ye(N),
        m.width = Ye(N),
        T = C.height() > y.clientHeight || "scroll" == b.css("overflow-y"),
        m[c = "padding" + (k.bScrollbarLeft ? "Left" : "Right")] = T ? h + "px" : "0px",
        E && (x[0].style.width = Ye(N),
        w[0].style.width = Ye(N),
        w[0].style[c] = T ? h + "px" : "0px"),
        C.children("colgroup").insertBefore(C.children("thead")),
        b.trigger("scroll"),
        !n.bSorted && !n.bFiltered || n._drawHold || (y.scrollTop = 0))
    }
    function qe(e, t, n) {
        for (var r, i, o = 0, s = 0, a = t.length; s < a; ) {
            for (r = t[s].firstChild,
            i = n ? n[s].firstChild : null; r; )
                1 === r.nodeType && (n ? e(r, i, o) : e(r, o),
                o++),
                r = r.nextSibling,
                i = n ? i.nextSibling : null;
            s++
        }
    }
    var Be = /<.*?>/g;
    function ze(n) {
        var r, i, o = n.nTable, s = n.aoColumns, a = (c = n.oScroll).sY, l = c.sX, c = c.sXInner, u = s.length, d = $(n, "bVisible"), f = e("th", n.nTHead), h = o.getAttribute("width"), p = o.parentNode, g = !1, m = n.oBrowser, v = m.bScrollOversize;
        for ((b = o.style.width) && -1 !== b.indexOf("%") && (h = b),
        S = 0; S < d.length; S++)
            null !== (r = s[d[S]]).sWidth && (r.sWidth = Ve(r.sWidthOrig, p),
            g = !0);
        if (v || !g && !l && !a && u == M(n) && u == f.length)
            for (S = 0; S < u; S++) {
                var y = H(n, S);
                null !== y && (s[y].sWidth = Ye(f.eq(S).width()))
            }
        else {
            var b, _ = ((b = e(o).clone().css("visibility", "hidden").removeAttr("id")).find("tbody tr").remove(),
            e("<tr/>").appendTo(b.find("tbody")));
            for (b.find("thead, tfoot").remove(),
            b.append(e(n.nTHead).clone()).append(e(n.nTFoot).clone()),
            b.find("tfoot th, tfoot td").css("width", ""),
            f = de(n, b.find("thead")[0]),
            S = 0; S < d.length; S++)
                r = s[d[S]],
                f[S].style.width = null !== r.sWidthOrig && "" !== r.sWidthOrig ? Ye(r.sWidthOrig) : "",
                r.sWidthOrig && l && e(f[S]).append(e("<div/>").css({
                    width: r.sWidthOrig,
                    margin: 0,
                    padding: 0,
                    border: 0,
                    height: 1
                }));
            if (n.aoData.length)
                for (S = 0; S < d.length; S++)
                    r = s[i = d[S]],
                    e(Xe(n, i)).clone(!1).append(r.sContentPadding).appendTo(_);
            e("[name]", b).removeAttr("name");
            for (var w = e("<div/>").css(l || a ? {
                position: "absolute",
                top: 0,
                left: 0,
                height: 1,
                right: 0,
                overflow: "hidden"
            } : {}).append(b).appendTo(p), x = (l && c ? b.width(c) : l ? (b.css("width", "auto"),
            b.removeAttr("width"),
            b.width() < p.clientWidth && h && b.width(p.clientWidth)) : a ? b.width(p.clientWidth) : h && b.width(h),
            0), S = 0; S < d.length; S++) {
                var T, C = (T = e(f[S])).outerWidth() - T.width();
                x += T = m.bBounding ? Math.ceil(f[S].getBoundingClientRect().width) : T.outerWidth(),
                s[d[S]].sWidth = Ye(T - C)
            }
            o.style.width = Ye(x),
            w.remove()
        }
        h && (o.style.width = Ye(h)),
        !h && !l || n._reszEvt || (c = function() {
            e(t).on("resize.DT-" + n.sInstance, Ue((function() {
                F(n)
            }
            )))
        }
        ,
        v ? setTimeout(c, 1e3) : c(),
        n._reszEvt = !0)
    }
    var Ue = p.util.throttle;
    function Ve(t, r) {
        return t ? (r = (t = e("<div/>").css("width", Ye(t)).appendTo(r || n.body))[0].offsetWidth,
        t.remove(),
        r) : 0
    }
    function Xe(t, n) {
        var r, i = Je(t, n);
        return i < 0 ? null : (r = t.aoData[i]).nTr ? r.anCells[n] : e("<td/>").html(U(t, i, n, "display"))[0]
    }
    function Je(e, t) {
        for (var n, r = -1, i = -1, o = 0, s = e.aoData.length; o < s; o++)
            (n = (n = (n = U(e, o, t, "display") + "").replace(Be, "")).replace(/&nbsp;/g, " ")).length > r && (r = n.length,
            i = o);
        return i
    }
    function Ye(e) {
        return null === e ? "0px" : "number" == typeof e ? e < 0 ? "0px" : e + "px" : e.match(/\d$/) ? e + "px" : e
    }
    function Qe(t) {
        function n(t) {
            t.length && !Array.isArray(t[0]) ? m.push(t) : e.merge(m, t)
        }
        var i, o, s, a, l, c, u, d = [], f = t.aoColumns, h = t.aaSortingFixed, g = e.isPlainObject(h), m = [];
        for (Array.isArray(h) && n(h),
        g && h.pre && n(h.pre),
        n(t.aaSorting),
        g && h.post && n(h.post),
        i = 0; i < m.length; i++)
            for (s = (a = f[u = m[i][o = 0]].aDataSort).length; o < s; o++)
                c = f[l = a[o]].sType || "string",
                m[i]._idx === r && (m[i]._idx = e.inArray(m[i][1], f[l].asSorting)),
                d.push({
                    src: u,
                    col: l,
                    dir: m[i][1],
                    index: m[i]._idx,
                    type: c,
                    formatter: p.ext.type.order[c + "-pre"]
                });
        return d
    }
    function Ge(e) {
        var t, n, r, i, o, s = [], a = p.ext.type.order, l = e.aoData, c = (e.aoColumns,
        0), u = e.aiDisplayMaster;
        for (W(e),
        t = 0,
        n = (o = Qe(e)).length; t < n; t++)
            (i = o[t]).formatter && c++,
            nt(e, i.col);
        if ("ssp" != gt(e) && 0 !== o.length) {
            for (t = 0,
            r = u.length; t < r; t++)
                s[u[t]] = t;
            c === o.length ? u.sort((function(e, t) {
                for (var n, r, i, a, c = o.length, u = l[e]._aSortData, d = l[t]._aSortData, f = 0; f < c; f++)
                    if (0 != (i = (n = u[(a = o[f]).col]) < (r = d[a.col]) ? -1 : r < n ? 1 : 0))
                        return "asc" === a.dir ? i : -i;
                return (n = s[e]) < (r = s[t]) ? -1 : r < n ? 1 : 0
            }
            )) : u.sort((function(e, t) {
                for (var n, r, i, c = o.length, u = l[e]._aSortData, d = l[t]._aSortData, f = 0; f < c; f++)
                    if (n = u[(i = o[f]).col],
                    r = d[i.col],
                    0 !== (i = (a[i.type + "-" + i.dir] || a["string-" + i.dir])(n, r)))
                        return i;
                return (n = s[e]) < (r = s[t]) ? -1 : r < n ? 1 : 0
            }
            ))
        }
        e.bSorted = !0
    }
    function Ke(e) {
        for (var t = e.aoColumns, n = Qe(e), r = e.oLanguage.oAria, i = 0, o = t.length; i < o; i++) {
            var s = t[i]
              , a = s.asSorting
              , l = s.ariaTitle || s.sTitle.replace(/<.*?>/g, "")
              , c = s.nTh;
            c.removeAttribute("aria-sort"),
            s = s.bSortable ? l + ("asc" === (0 < n.length && n[0].col == i && (c.setAttribute("aria-sort", "asc" == n[0].dir ? "ascending" : "descending"),
            a[n[0].index + 1]) || a[0]) ? r.sSortAscending : r.sSortDescending) : l,
            c.setAttribute("aria-label", s)
        }
    }
    function Ze(t, n, i, o) {
        function s(t, n) {
            var i = t._idx;
            return (i = i === r ? e.inArray(t[1], u) : i) + 1 < u.length ? i + 1 : n ? null : 0
        }
        var a, l = t.aoColumns[n], c = t.aaSorting, u = l.asSorting;
        "number" == typeof c[0] && (c = t.aaSorting = [c]),
        i && t.oFeatures.bSortMulti ? -1 !== (l = e.inArray(n, S(c, "0"))) ? null === (a = null === (a = s(c[l], !0)) && 1 === c.length ? 0 : a) ? c.splice(l, 1) : (c[l][1] = u[a],
        c[l]._idx = a) : (c.push([n, u[0], 0]),
        c[c.length - 1]._idx = 0) : c.length && c[0][0] == n ? (a = s(c[0]),
        c.length = 1,
        c[0][1] = u[a],
        c[0]._idx = a) : (c.length = 0,
        c.push([n, u[0]]),
        c[0]._idx = 0),
        le(t),
        "function" == typeof o && o(t)
    }
    function et(e, t, n, r) {
        var i = e.aoColumns[n];
        ut(t, {}, (function(t) {
            !1 !== i.bSortable && (e.oFeatures.bProcessing ? (Me(e, !0),
            setTimeout((function() {
                Ze(e, n, t.shiftKey, r),
                "ssp" !== gt(e) && Me(e, !1)
            }
            ), 0)) : Ze(e, n, t.shiftKey, r))
        }
        ))
    }
    function tt(t) {
        var n, r, i, o = t.aLastSort, s = t.oClasses.sSortColumn, a = Qe(t), l = t.oFeatures;
        if (l.bSort && l.bSortClasses) {
            for (n = 0,
            r = o.length; n < r; n++)
                i = o[n].src,
                e(S(t.aoData, "anCells", i)).removeClass(s + (n < 2 ? n + 1 : 3));
            for (n = 0,
            r = a.length; n < r; n++)
                i = a[n].src,
                e(S(t.aoData, "anCells", i)).addClass(s + (n < 2 ? n + 1 : 3))
        }
        t.aLastSort = a
    }
    function nt(e, t) {
        for (var n, r, i, o = e.aoColumns[t], s = p.ext.order[o.sSortDataType], a = (s && (n = s.call(e.oInstance, e, t, R(e, t))),
        p.ext.type.order[o.sType + "-pre"]), l = 0, c = e.aoData.length; l < c; l++)
            (r = e.aoData[l])._aSortData || (r._aSortData = []),
            r._aSortData[t] && !s || (i = s ? n[l] : U(e, l, t, "sort"),
            r._aSortData[t] = a ? a(i) : i)
    }
    function rt(t) {
        var n;
        t._bLoadingState || (n = {
            time: +new Date,
            start: t._iDisplayStart,
            length: t._iDisplayLength,
            order: e.extend(!0, [], t.aaSorting),
            search: Ae(t.oPreviousSearch),
            columns: e.map(t.aoColumns, (function(e, n) {
                return {
                    visible: e.bVisible,
                    search: Ae(t.aoPreSearchCols[n])
                }
            }
            ))
        },
        t.oSavedState = n,
        ft(t, "aoStateSaveParams", "stateSaveParams", [t, n]),
        t.oFeatures.bStateSave && !t.bDestroying && t.fnStateSaveCallback.call(t.oInstance, t, n))
    }
    function it(e, t, n) {
        var i;
        if (e.oFeatures.bStateSave)
            return (i = e.fnStateLoadCallback.call(e.oInstance, e, (function(t) {
                ot(e, t, n)
            }
            ))) !== r && ot(e, i, n),
            !0;
        n()
    }
    function ot(t, n, i) {
        var o, s, a = t.aoColumns, l = (t._bLoadingState = !0,
        t._bInitComplete ? new p.Api(t) : null);
        if (n && n.time) {
            var c = ft(t, "aoStateLoadParams", "stateLoadParams", [t, n]);
            if (-1 !== e.inArray(!1, c))
                t._bLoadingState = !1;
            else if (0 < (c = t.iStateDuration) && n.time < +new Date - 1e3 * c)
                t._bLoadingState = !1;
            else if (n.columns && a.length !== n.columns.length)
                t._bLoadingState = !1;
            else {
                if (t.oLoadedState = e.extend(!0, {}, n),
                n.length !== r && (l ? l.page.len(n.length) : t._iDisplayLength = n.length),
                n.start !== r && (null === l ? (t._iDisplayStart = n.start,
                t.iInitDisplayStart = n.start) : He(t, n.start / t._iDisplayLength)),
                n.order !== r && (t.aaSorting = [],
                e.each(n.order, (function(e, n) {
                    t.aaSorting.push(n[0] >= a.length ? [0, n[1]] : n)
                }
                ))),
                n.search !== r && e.extend(t.oPreviousSearch, Ee(n.search)),
                n.columns) {
                    for (o = 0,
                    s = n.columns.length; o < s; o++) {
                        var u = n.columns[o];
                        u.visible !== r && (l ? l.column(o).visible(u.visible, !1) : a[o].bVisible = u.visible),
                        u.search !== r && e.extend(t.aoPreSearchCols[o], Ee(u.search))
                    }
                    l && l.columns.adjust()
                }
                t._bLoadingState = !1,
                ft(t, "aoStateLoaded", "stateLoaded", [t, n])
            }
        } else
            t._bLoadingState = !1;
        i()
    }
    function st(t) {
        var n = p.settings;
        return -1 !== (t = e.inArray(t, S(n, "nTable"))) ? n[t] : null
    }
    function at(e, n, r, i) {
        if (r = "DataTables warning: " + (e ? "table id=" + e.sTableId + " - " : "") + r,
        i && (r += ". For more information about this error, please see http://datatables.net/tn/" + i),
        n)
            t.console && console.log && console.log(r);
        else if (n = (n = p.ext).sErrMode || n.errMode,
        e && ft(e, null, "error", [e, i, r]),
        "alert" == n)
            alert(r);
        else {
            if ("throw" == n)
                throw new Error(r);
            "function" == typeof n && n(e, i, r)
        }
    }
    function lt(t, n, i, o) {
        Array.isArray(i) ? e.each(i, (function(e, r) {
            Array.isArray(r) ? lt(t, n, r[0], r[1]) : lt(t, n, r)
        }
        )) : (o === r && (o = i),
        n[i] !== r && (t[o] = n[i]))
    }
    function ct(t, n, r) {
        var i, o;
        for (o in n)
            n.hasOwnProperty(o) && (i = n[o],
            e.isPlainObject(i) ? (e.isPlainObject(t[o]) || (t[o] = {}),
            e.extend(!0, t[o], i)) : r && "data" !== o && "aaData" !== o && Array.isArray(i) ? t[o] = i.slice() : t[o] = i);
        return t
    }
    function ut(t, n, r) {
        e(t).on("click.DT", n, (function(n) {
            e(t).trigger("blur"),
            r(n)
        }
        )).on("keypress.DT", n, (function(e) {
            13 === e.which && (e.preventDefault(),
            r(e))
        }
        )).on("selectstart.DT", (function() {
            return !1
        }
        ))
    }
    function dt(e, t, n, r) {
        n && e[t].push({
            fn: n,
            sName: r
        })
    }
    function ft(t, n, r, i) {
        var o = [];
        return n && (o = e.map(t[n].slice().reverse(), (function(e, n) {
            return e.fn.apply(t.oInstance, i)
        }
        ))),
        null !== r && (n = e.Event(r + ".dt"),
        (r = e(t.nTable)).trigger(n, i),
        0 === r.parents("body").length && e("body").trigger(n, i),
        o.push(n.result)),
        o
    }
    function ht(e) {
        var t = e._iDisplayStart
          , n = e.fnDisplayEnd()
          , r = e._iDisplayLength;
        n <= t && (t = n - r),
        t -= t % r,
        e._iDisplayStart = t = -1 === r || t < 0 ? 0 : t
    }
    function pt(t, n) {
        t = t.renderer;
        var r = p.ext.renderer[n];
        return e.isPlainObject(t) && t[n] ? r[t[n]] || r._ : "string" == typeof t && r[t] || r._
    }
    function gt(e) {
        return e.oFeatures.bServerSide ? "ssp" : e.ajax || e.sAjaxSource ? "ajax" : "dom"
    }
    function mt(t, n) {
        var r;
        return Array.isArray(t) ? e.map(t, (function(e) {
            return mt(e, n)
        }
        )) : "number" == typeof t ? [n[t]] : (r = e.map(n, (function(e, t) {
            return e.nTable
        }
        )),
        e(r).filter(t).map((function(t) {
            var i = e.inArray(this, r);
            return n[i]
        }
        )).toArray())
    }
    function vt(e, t, n) {
        var r, i;
        n && (r = new Ct(e)).one("draw", (function() {
            n(r.ajax.json())
        }
        )),
        "ssp" == gt(e) ? le(e, t) : (Me(e, !0),
        (i = e.jqXHR) && 4 !== i.readyState && i.abort(),
        fe(e, [], (function(n) {
            Z(e);
            for (var r = me(e, n), i = 0, o = r.length; i < o; i++)
                B(e, r[i]);
            le(e, t),
            Me(e, !1)
        }
        )))
    }
    function yt(e, t, n, i, o) {
        for (var s, a, l, c, u = [], f = typeof t, h = 0, p = (t = t && "string" != f && "function" != f && t.length !== r ? t : [t]).length; h < p; h++)
            for (l = 0,
            c = (a = t[h] && t[h].split && !t[h].match(/[\[\(:]/) ? t[h].split(",") : [t[h]]).length; l < c; l++)
                (s = n("string" == typeof a[l] ? a[l].trim() : a[l])) && s.length && (u = u.concat(s));
        var g = d.selector[e];
        if (g.length)
            for (h = 0,
            p = g.length; h < p; h++)
                u = g[h](i, o, u);
        return T(u)
    }
    function bt(t) {
        return (t = t || {}).filter && t.search === r && (t.search = t.filter),
        e.extend({
            search: "none",
            order: "current",
            page: "all"
        }, t)
    }
    function _t(e) {
        for (var t = 0, n = e.length; t < n; t++)
            if (0 < e[t].length)
                return e[0] = e[t],
                e[0].length = 1,
                e.length = 1,
                e.context = [e.context[t]],
                e;
        return e.length = 0,
        e
    }
    function wt(t, n) {
        var r = t.context;
        if (r.length && t.length && (s = r[0].aoData[t[0]])._details) {
            (s._detailsShow = n) ? (s._details.insertAfter(s.nTr),
            e(s.nTr).addClass("dt-hasChild")) : (s._details.detach(),
            e(s.nTr).removeClass("dt-hasChild")),
            ft(r[0], null, "childRow", [n, t.row(t[0])]);
            var i = r[0]
              , o = new Ct(i)
              , s = (n = "draw" + (s = ".dt.DT_details"),
            t = "column-sizing" + s,
            "destroy" + s)
              , a = i.aoData;
            o.off(n + " " + t + " " + s),
            S(a, "_details").length > 0 && (o.on(n, (function(e, t) {
                i === t && o.rows({
                    page: "current"
                }).eq(0).each((function(e) {
                    var t = a[e];
                    t._detailsShow && t._details.insertAfter(t.nTr)
                }
                ))
            }
            )),
            o.on(t, (function(e, t, n, r) {
                if (i === t)
                    for (var o, s = M(t), l = 0, c = a.length; l < c; l++)
                        (o = a[l])._details && o._details.children("td[colspan]").attr("colspan", s)
            }
            )),
            o.on(s, (function(e, t) {
                if (i === t)
                    for (var n = 0, r = a.length; n < r; n++)
                        a[n]._details && Et(o, n)
            }
            ))),
            At(r)
        }
    }
    function xt(e, t, n, r, i) {
        for (var o = [], s = 0, a = i.length; s < a; s++)
            o.push(U(e, i[s], t));
        return o
    }
    var St = []
      , Tt = Array.prototype
      , Ct = function(t, n) {
        if (!(this instanceof Ct))
            return new Ct(t,n);
        function r(t) {
            var n, r, o, s;
            o = p.settings,
            s = e.map(o, (function(e, t) {
                return e.nTable
            }
            )),
            (t = t ? t.nTable && t.oApi ? [t] : t.nodeName && "table" === t.nodeName.toLowerCase() ? -1 !== (n = e.inArray(t, s)) ? [o[n]] : null : t && "function" == typeof t.settings ? t.settings().toArray() : ("string" == typeof t ? r = e(t) : t instanceof e && (r = t),
            r ? r.map((function(t) {
                return -1 !== (n = e.inArray(this, s)) ? o[n] : null
            }
            )).toArray() : void 0) : []) && i.push.apply(i, t)
        }
        var i = [];
        if (Array.isArray(t))
            for (var o = 0, s = t.length; o < s; o++)
                r(t[o]);
        else
            r(t);
        this.context = T(i),
        n && e.merge(this, n),
        this.selector = {
            rows: null,
            cols: null,
            opts: null
        },
        Ct.extend(this, this, St)
    }
      , Dt = (p.Api = Ct,
    e.extend(Ct.prototype, {
        any: function() {
            return 0 !== this.count()
        },
        concat: Tt.concat,
        context: [],
        count: function() {
            return this.flatten().length
        },
        each: function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                e.call(this, this[t], t, this);
            return this
        },
        eq: function(e) {
            var t = this.context;
            return t.length > e ? new Ct(t[e],this[e]) : null
        },
        filter: function(e) {
            var t = [];
            if (Tt.filter)
                t = Tt.filter.call(this, e, this);
            else
                for (var n = 0, r = this.length; n < r; n++)
                    e.call(this, this[n], n, this) && t.push(this[n]);
            return new Ct(this.context,t)
        },
        flatten: function() {
            var e = [];
            return new Ct(this.context,e.concat.apply(e, this.toArray()))
        },
        join: Tt.join,
        indexOf: Tt.indexOf || function(e, t) {
            for (var n = t || 0, r = this.length; n < r; n++)
                if (this[n] === e)
                    return n;
            return -1
        }
        ,
        iterator: function(e, t, n, i) {
            var o, s, a, l, c, u, d, f, h = [], p = this.context, g = this.selector;
            for ("string" == typeof e && (i = n,
            n = t,
            t = e,
            e = !1),
            s = 0,
            a = p.length; s < a; s++) {
                var m = new Ct(p[s]);
                if ("table" === t)
                    (o = n.call(m, p[s], s)) !== r && h.push(o);
                else if ("columns" === t || "rows" === t)
                    (o = n.call(m, p[s], this[s], s)) !== r && h.push(o);
                else if ("column" === t || "column-rows" === t || "row" === t || "cell" === t)
                    for (d = this[s],
                    "column-rows" === t && (u = Dt(p[s], g.opts)),
                    l = 0,
                    c = d.length; l < c; l++)
                        f = d[l],
                        (o = "cell" === t ? n.call(m, p[s], f.row, f.column, s, l) : n.call(m, p[s], f, s, l, u)) !== r && h.push(o)
            }
            return h.length || i ? ((e = (i = new Ct(p,e ? h.concat.apply([], h) : h)).selector).rows = g.rows,
            e.cols = g.cols,
            e.opts = g.opts,
            i) : this
        },
        lastIndexOf: Tt.lastIndexOf || function(e, t) {
            return this.indexOf.apply(this.toArray.reverse(), arguments)
        }
        ,
        length: 0,
        map: function(e) {
            var t = [];
            if (Tt.map)
                t = Tt.map.call(this, e, this);
            else
                for (var n = 0, r = this.length; n < r; n++)
                    t.push(e.call(this, this[n], n));
            return new Ct(this.context,t)
        },
        pluck: function(e) {
            var t = p.util.get(e);
            return this.map((function(e) {
                return t(e)
            }
            ))
        },
        pop: Tt.pop,
        push: Tt.push,
        reduce: Tt.reduce || function(e, t) {
            return j(this, e, t, 0, this.length, 1)
        }
        ,
        reduceRight: Tt.reduceRight || function(e, t) {
            return j(this, e, t, this.length - 1, -1, -1)
        }
        ,
        reverse: Tt.reverse,
        selector: null,
        shift: Tt.shift,
        slice: function() {
            return new Ct(this.context,this)
        },
        sort: Tt.sort,
        splice: Tt.splice,
        toArray: function() {
            return Tt.slice.call(this)
        },
        to$: function() {
            return e(this)
        },
        toJQuery: function() {
            return e(this)
        },
        unique: function() {
            return new Ct(this.context,T(this))
        },
        unshift: Tt.unshift
    }),
    Ct.extend = function(e, t, n) {
        if (n.length && t && (t instanceof Ct || t.__dt_wrapper))
            for (var r, i = 0, o = n.length; i < o; i++)
                t[(r = n[i]).name] = "function" === r.type ? function(e, t, n) {
                    return function() {
                        var r = t.apply(e, arguments);
                        return Ct.extend(r, r, n.methodExt),
                        r
                    }
                }(e, r.val, r) : "object" === r.type ? {} : r.val,
                t[r.name].__dt_wrapper = !0,
                Ct.extend(e, t[r.name], r.propExt)
    }
    ,
    Ct.register = f = function(t, n) {
        if (Array.isArray(t))
            for (var r = 0, i = t.length; r < i; r++)
                Ct.register(t[r], n);
        else
            for (var o = t.split("."), s = St, a = 0, l = o.length; a < l; a++) {
                var c, u, d = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n].name === t)
                            return e[n];
                    return null
                }(s, u = (c = -1 !== o[a].indexOf("()")) ? o[a].replace("()", "") : o[a]);
                d || s.push(d = {
                    name: u,
                    val: {},
                    methodExt: [],
                    propExt: [],
                    type: "object"
                }),
                a === l - 1 ? (d.val = n,
                d.type = "function" == typeof n ? "function" : e.isPlainObject(n) ? "object" : "other") : s = c ? d.methodExt : d.propExt
            }
    }
    ,
    Ct.registerPlural = h = function(e, t, n) {
        Ct.register(e, n),
        Ct.register(t, (function() {
            var e = n.apply(this, arguments);
            return e === this ? this : e instanceof Ct ? e.length ? Array.isArray(e[0]) ? new Ct(e.context,e[0]) : e[0] : r : e
        }
        ))
    }
    ,
    f("tables()", (function(e) {
        return e !== r && null !== e ? new Ct(mt(e, this.context)) : this
    }
    )),
    f("table()", (function(e) {
        var t = (e = this.tables(e)).context;
        return t.length ? new Ct(t[0]) : e
    }
    )),
    h("tables().nodes()", "table().node()", (function() {
        return this.iterator("table", (function(e) {
            return e.nTable
        }
        ), 1)
    }
    )),
    h("tables().body()", "table().body()", (function() {
        return this.iterator("table", (function(e) {
            return e.nTBody
        }
        ), 1)
    }
    )),
    h("tables().header()", "table().header()", (function() {
        return this.iterator("table", (function(e) {
            return e.nTHead
        }
        ), 1)
    }
    )),
    h("tables().footer()", "table().footer()", (function() {
        return this.iterator("table", (function(e) {
            return e.nTFoot
        }
        ), 1)
    }
    )),
    h("tables().containers()", "table().container()", (function() {
        return this.iterator("table", (function(e) {
            return e.nTableWrapper
        }
        ), 1)
    }
    )),
    f("draw()", (function(e) {
        return this.iterator("table", (function(t) {
            "page" === e ? ae(t) : le(t, !1 === (e = "string" == typeof e ? "full-hold" !== e : e))
        }
        ))
    }
    )),
    f("page()", (function(e) {
        return e === r ? this.page.info().page : this.iterator("table", (function(t) {
            He(t, e)
        }
        ))
    }
    )),
    f("page.info()", (function(e) {
        var t, n, i, o, s;
        return 0 === this.context.length ? r : (n = (t = this.context[0])._iDisplayStart,
        i = t.oFeatures.bPaginate ? t._iDisplayLength : -1,
        o = t.fnRecordsDisplay(),
        {
            page: (s = -1 === i) ? 0 : Math.floor(n / i),
            pages: s ? 1 : Math.ceil(o / i),
            start: n,
            end: t.fnDisplayEnd(),
            length: i,
            recordsTotal: t.fnRecordsTotal(),
            recordsDisplay: o,
            serverSide: "ssp" === gt(t)
        })
    }
    )),
    f("page.len()", (function(e) {
        return e === r ? 0 !== this.context.length ? this.context[0]._iDisplayLength : r : this.iterator("table", (function(t) {
            Pe(t, e)
        }
        ))
    }
    )),
    f("ajax.json()", (function() {
        var e = this.context;
        if (0 < e.length)
            return e[0].json
    }
    )),
    f("ajax.params()", (function() {
        var e = this.context;
        if (0 < e.length)
            return e[0].oAjaxData
    }
    )),
    f("ajax.reload()", (function(e, t) {
        return this.iterator("table", (function(n) {
            vt(n, !1 === t, e)
        }
        ))
    }
    )),
    f("ajax.url()", (function(t) {
        var n = this.context;
        return t === r ? 0 === n.length ? r : (n = n[0]).ajax ? e.isPlainObject(n.ajax) ? n.ajax.url : n.ajax : n.sAjaxSource : this.iterator("table", (function(n) {
            e.isPlainObject(n.ajax) ? n.ajax.url = t : n.ajax = t
        }
        ))
    }
    )),
    f("ajax.url().load()", (function(e, t) {
        return this.iterator("table", (function(n) {
            vt(n, !1 === t, e)
        }
        ))
    }
    )),
    function(t, n) {
        var r, i = [], o = t.aiDisplay, s = t.aiDisplayMaster, a = n.search, c = n.order;
        n = n.page;
        if ("ssp" == gt(t))
            return "removed" === a ? [] : l(0, s.length);
        if ("current" == n)
            for (d = t._iDisplayStart,
            f = t.fnDisplayEnd(); d < f; d++)
                i.push(o[d]);
        else if ("current" == c || "applied" == c) {
            if ("none" == a)
                i = s.slice();
            else if ("applied" == a)
                i = o.slice();
            else if ("removed" == a) {
                for (var u = {}, d = 0, f = o.length; d < f; d++)
                    u[o[d]] = null;
                i = e.map(s, (function(e) {
                    return u.hasOwnProperty(e) ? null : e
                }
                ))
            }
        } else if ("index" == c || "original" == c)
            for (d = 0,
            f = t.aoData.length; d < f; d++)
                ("none" == a || -1 === (r = e.inArray(d, o)) && "removed" == a || 0 <= r && "applied" == a) && i.push(d);
        return i
    }
    )
      , At = (f("rows()", (function(t, n) {
        t === r ? t = "" : e.isPlainObject(t) && (n = t,
        t = ""),
        n = bt(n);
        var o = this.iterator("table", (function(o) {
            return yt("row", t, (function(t) {
                var n = i(t)
                  , o = s.aoData;
                if (null !== n && !l)
                    return [n];
                if (u = u || Dt(s, l),
                null !== n && -1 !== e.inArray(n, u))
                    return [n];
                if (null === t || t === r || "" === t)
                    return u;
                if ("function" == typeof t)
                    return e.map(u, (function(e) {
                        var n = o[e];
                        return t(e, n._aData, n.nTr) ? e : null
                    }
                    ));
                if (t.nodeName)
                    return n = t._DT_RowIndex,
                    d = t._DT_CellIndex,
                    n !== r ? o[n] && o[n].nTr === t ? [n] : [] : d ? o[d.row] && o[d.row].nTr === t.parentNode ? [d.row] : [] : (n = e(t).closest("*[data-dt-row]")).length ? [n.data("dt-row")] : [];
                if ("string" == typeof t && "#" === t.charAt(0)) {
                    var d = s.aIds[t.replace(/^#/, "")];
                    if (d !== r)
                        return [d.idx]
                }
                return n = c(a(s.aoData, u, "nTr")),
                e(n).filter(t).map((function() {
                    return this._DT_RowIndex
                }
                )).toArray()
            }
            ), s = o, l = n);
            var s, l, u
        }
        ), 1);
        return o.selector.rows = t,
        o.selector.opts = n,
        o
    }
    )),
    f("rows().nodes()", (function() {
        return this.iterator("row", (function(e, t) {
            return e.aoData[t].nTr || r
        }
        ), 1)
    }
    )),
    f("rows().data()", (function() {
        return this.iterator(!0, "rows", (function(e, t) {
            return a(e.aoData, t, "_aData")
        }
        ), 1)
    }
    )),
    h("rows().cache()", "row().cache()", (function(e) {
        return this.iterator("row", (function(t, n) {
            return t = t.aoData[n],
            "search" === e ? t._aFilterData : t._aSortData
        }
        ), 1)
    }
    )),
    h("rows().invalidate()", "row().invalidate()", (function(e) {
        return this.iterator("row", (function(t, n) {
            te(t, n, e)
        }
        ))
    }
    )),
    h("rows().indexes()", "row().index()", (function() {
        return this.iterator("row", (function(e, t) {
            return t
        }
        ), 1)
    }
    )),
    h("rows().ids()", "row().id()", (function(e) {
        for (var t = [], n = this.context, r = 0, i = n.length; r < i; r++)
            for (var o = 0, s = this[r].length; o < s; o++) {
                var a = n[r].rowIdFn(n[r].aoData[this[r][o]]._aData);
                t.push((!0 === e ? "#" : "") + a)
            }
        return new Ct(n,t)
    }
    )),
    h("rows().remove()", "row().remove()", (function() {
        var e = this;
        return this.iterator("row", (function(t, n, i) {
            var o, s, a, l, c, u, d = t.aoData, f = d[n];
            for (d.splice(n, 1),
            o = 0,
            s = d.length; o < s; o++)
                if (u = (c = d[o]).anCells,
                null !== c.nTr && (c.nTr._DT_RowIndex = o),
                null !== u)
                    for (a = 0,
                    l = u.length; a < l; a++)
                        u[a]._DT_CellIndex.row = o;
            ee(t.aiDisplayMaster, n),
            ee(t.aiDisplay, n),
            ee(e[i], n, !1),
            0 < t._iRecordsDisplay && t._iRecordsDisplay--,
            ht(t),
            (i = t.rowIdFn(f._aData)) !== r && delete t.aIds[i]
        }
        )),
        this.iterator("table", (function(e) {
            for (var t = 0, n = e.aoData.length; t < n; t++)
                e.aoData[t].idx = t
        }
        )),
        this
    }
    )),
    f("rows.add()", (function(t) {
        var n = this.iterator("table", (function(e) {
            for (var n, r = [], i = 0, o = t.length; i < o; i++)
                (n = t[i]).nodeName && "TR" === n.nodeName.toUpperCase() ? r.push(z(e, n)[0]) : r.push(B(e, n));
            return r
        }
        ), 1)
          , r = this.rows(-1);
        return r.pop(),
        e.merge(r, n),
        r
    }
    )),
    f("row()", (function(e, t) {
        return _t(this.rows(e, t))
    }
    )),
    f("row().data()", (function(e) {
        var t, n = this.context;
        return e === r ? n.length && this.length ? n[0].aoData[this[0]]._aData : r : ((t = n[0].aoData[this[0]])._aData = e,
        Array.isArray(e) && t.nTr && t.nTr.id && G(n[0].rowId)(e, t.nTr.id),
        te(n[0], this[0], "data"),
        this)
    }
    )),
    f("row().node()", (function() {
        var e = this.context;
        return e.length && this.length && e[0].aoData[this[0]].nTr || null
    }
    )),
    f("row.add()", (function(t) {
        t instanceof e && t.length && (t = t[0]);
        var n = this.iterator("table", (function(e) {
            return t.nodeName && "TR" === t.nodeName.toUpperCase() ? z(e, t)[0] : B(e, t)
        }
        ));
        return this.row(n[0])
    }
    )),
    e(n).on("plugin-init.dt", (function(t, n) {
        var r = new Ct(n)
          , i = "stateSaveParams." + (s = "on-plugin-init")
          , o = "destroy. " + s
          , s = (r.on(i, (function(e, t, n) {
            for (var r = t.rowIdFn, i = t.aoData, o = [], s = 0; s < i.length; s++)
                i[s]._detailsShow && o.push("#" + r(i[s]._aData));
            n.childRows = o
        }
        )),
        r.on(o, (function() {
            r.off(i + " " + o)
        }
        )),
        r.state.loaded());
        s && s.childRows && r.rows(e.map(s.childRows, (function(e) {
            return e.replace(/:/g, "\\:")
        }
        ))).every((function() {
            ft(n, null, "requestChild", [this])
        }
        ))
    }
    )),
    p.util.throttle((function(e) {
        rt(e[0])
    }
    ), 500))
      , Et = function(t, n) {
        var i = t.context;
        i.length && (n = i[0].aoData[n !== r ? n : t[0]]) && n._details && (n._details.remove(),
        n._detailsShow = r,
        n._details = r,
        e(n.nTr).removeClass("dt-hasChild"),
        At(i))
    }
      , kt = "row().child"
      , Lt = kt + "()"
      , It = (f(Lt, (function(t, n) {
        var i = this.context;
        return t === r ? i.length && this.length ? i[0].aoData[this[0]]._details : r : (!0 === t ? this.child.show() : !1 === t ? Et(this) : i.length && this.length && function(t, n, r, i) {
            var o = [];
            (function n(r, i) {
                var s;
                if (Array.isArray(r) || r instanceof e)
                    for (var a = 0, l = r.length; a < l; a++)
                        n(r[a], i);
                else
                    r.nodeName && "tr" === r.nodeName.toLowerCase() ? o.push(r) : (s = e("<tr><td></td></tr>").addClass(i),
                    e("td", s).addClass(i).html(r)[0].colSpan = M(t),
                    o.push(s[0]))
            }
            )(r, i),
            n._details && n._details.detach(),
            n._details = e(o),
            n._detailsShow && n._details.insertAfter(n.nTr)
        }(i[0], i[0].aoData[this[0]], t, n),
        this)
    }
    )),
    f([kt + ".show()", Lt + ".show()"], (function(e) {
        return wt(this, !0),
        this
    }
    )),
    f([kt + ".hide()", Lt + ".hide()"], (function() {
        return wt(this, !1),
        this
    }
    )),
    f([kt + ".remove()", Lt + ".remove()"], (function() {
        return Et(this),
        this
    }
    )),
    f(kt + ".isShown()", (function() {
        var e = this.context;
        return e.length && this.length && e[0].aoData[this[0]]._detailsShow || !1
    }
    )),
    /^([^:]+):(name|visIdx|visible)$/)
      , Ot = (f("columns()", (function(t, n) {
        t === r ? t = "" : e.isPlainObject(t) && (n = t,
        t = ""),
        n = bt(n);
        var o = this.iterator("table", (function(r) {
            return s = t,
            a = n,
            c = (o = r).aoColumns,
            u = S(c, "sName"),
            d = S(c, "nTh"),
            yt("column", s, (function(t) {
                var n, r = i(t);
                if ("" === t)
                    return l(c.length);
                if (null !== r)
                    return [0 <= r ? r : c.length + r];
                if ("function" == typeof t)
                    return n = Dt(o, a),
                    e.map(c, (function(e, r) {
                        return t(r, xt(o, r, 0, 0, n), d[r]) ? r : null
                    }
                    ));
                var s = "string" == typeof t ? t.match(It) : "";
                if (s)
                    switch (s[2]) {
                    case "visIdx":
                    case "visible":
                        var f, h = parseInt(s[1], 10);
                        return h < 0 ? [(f = e.map(c, (function(e, t) {
                            return e.bVisible ? t : null
                        }
                        )))[f.length + h]] : [H(o, h)];
                    case "name":
                        return e.map(u, (function(e, t) {
                            return e === s[1] ? t : null
                        }
                        ));
                    default:
                        return []
                    }
                return t.nodeName && t._DT_CellIndex ? [t._DT_CellIndex.column] : (r = e(d).filter(t).map((function() {
                    return e.inArray(this, d)
                }
                )).toArray()).length || !t.nodeName ? r : (r = e(t).closest("*[data-dt-column]")).length ? [r.data("dt-column")] : []
            }
            ), o, a);
            var o, s, a, c, u, d
        }
        ), 1);
        return o.selector.cols = t,
        o.selector.opts = n,
        o
    }
    )),
    h("columns().header()", "column().header()", (function(e, t) {
        return this.iterator("column", (function(e, t) {
            return e.aoColumns[t].nTh
        }
        ), 1)
    }
    )),
    h("columns().footer()", "column().footer()", (function(e, t) {
        return this.iterator("column", (function(e, t) {
            return e.aoColumns[t].nTf
        }
        ), 1)
    }
    )),
    h("columns().data()", "column().data()", (function() {
        return this.iterator("column-rows", xt, 1)
    }
    )),
    h("columns().dataSrc()", "column().dataSrc()", (function() {
        return this.iterator("column", (function(e, t) {
            return e.aoColumns[t].mData
        }
        ), 1)
    }
    )),
    h("columns().cache()", "column().cache()", (function(e) {
        return this.iterator("column-rows", (function(t, n, r, i, o) {
            return a(t.aoData, o, "search" === e ? "_aFilterData" : "_aSortData", n)
        }
        ), 1)
    }
    )),
    h("columns().nodes()", "column().nodes()", (function() {
        return this.iterator("column-rows", (function(e, t, n, r, i) {
            return a(e.aoData, i, "anCells", t)
        }
        ), 1)
    }
    )),
    h("columns().visible()", "column().visible()", (function(t, n) {
        var i = this
          , o = this.iterator("column", (function(n, i) {
            if (t === r)
                return n.aoColumns[i].bVisible;
            var o, s, a = i, l = (i = t,
            n.aoColumns), c = l[a], u = n.aoData;
            if (i === r)
                c.bVisible;
            else if (c.bVisible !== i) {
                if (i)
                    for (var d = e.inArray(!0, S(l, "bVisible"), a + 1), f = 0, h = u.length; f < h; f++)
                        s = u[f].nTr,
                        o = u[f].anCells,
                        s && s.insertBefore(o[a], o[d] || null);
                else
                    e(S(n.aoData, "anCells", a)).detach();
                c.bVisible = i
            }
        }
        ));
        return t !== r && this.iterator("table", (function(o) {
            se(o, o.aoHeader),
            se(o, o.aoFooter),
            o.aiDisplay.length || e(o.nTBody).find("td[colspan]").attr("colspan", M(o)),
            rt(o),
            i.iterator("column", (function(e, r) {
                ft(e, null, "column-visibility", [e, r, t, n])
            }
            )),
            n !== r && !n || i.columns.adjust()
        }
        )),
        o
    }
    )),
    h("columns().indexes()", "column().index()", (function(e) {
        return this.iterator("column", (function(t, n) {
            return "visible" === e ? R(t, n) : n
        }
        ), 1)
    }
    )),
    f("columns.adjust()", (function() {
        return this.iterator("table", (function(e) {
            F(e)
        }
        ), 1)
    }
    )),
    f("column.index()", (function(e, t) {
        var n;
        if (0 !== this.context.length)
            return n = this.context[0],
            "fromVisible" === e || "toData" === e ? H(n, t) : "fromData" === e || "toVisible" === e ? R(n, t) : void 0
    }
    )),
    f("column()", (function(e, t) {
        return _t(this.columns(e, t))
    }
    )),
    f("cells()", (function(t, n, i) {
        var o, s, l, u, d, f, h;
        return e.isPlainObject(t) && (t.row === r ? (i = t,
        t = null) : (i = n,
        n = null)),
        e.isPlainObject(n) && (i = n,
        n = null),
        null === n || n === r ? this.iterator("table", (function(n) {
            return o = n,
            n = t,
            s = bt(i),
            m = o.aoData,
            v = Dt(o, s),
            y = c(a(m, v, "anCells")),
            b = e(C([], y)),
            _ = o.aoColumns.length,
            yt("cell", n, (function(t) {
                var n, i = "function" == typeof t;
                if (null === t || t === r || i) {
                    for (u = [],
                    d = 0,
                    f = v.length; d < f; d++)
                        for (l = v[d],
                        h = 0; h < _; h++)
                            p = {
                                row: l,
                                column: h
                            },
                            (!i || (g = m[l],
                            t(p, U(o, l, h), g.anCells ? g.anCells[h] : null))) && u.push(p);
                    return u
                }
                return e.isPlainObject(t) ? t.column !== r && t.row !== r && -1 !== e.inArray(t.row, v) ? [t] : [] : (n = b.filter(t).map((function(e, t) {
                    return {
                        row: t._DT_CellIndex.row,
                        column: t._DT_CellIndex.column
                    }
                }
                )).toArray()).length || !t.nodeName ? n : (g = e(t).closest("*[data-dt-row]")).length ? [{
                    row: g.data("dt-row"),
                    column: g.data("dt-column")
                }] : []
            }
            ), o, s);
            var o, s, l, u, d, f, h, p, g, m, v, y, b, _
        }
        )) : (h = i ? {
            page: i.page,
            order: i.order,
            search: i.search
        } : {},
        o = this.columns(n, h),
        s = this.rows(t, h),
        h = this.iterator("table", (function(e, t) {
            var n = [];
            for (l = 0,
            u = s[t].length; l < u; l++)
                for (d = 0,
                f = o[t].length; d < f; d++)
                    n.push({
                        row: s[t][l],
                        column: o[t][d]
                    });
            return n
        }
        ), 1),
        h = i && i.selected ? this.cells(h, i) : h,
        e.extend(h.selector, {
            cols: n,
            rows: t,
            opts: i
        }),
        h)
    }
    )),
    h("cells().nodes()", "cell().node()", (function() {
        return this.iterator("cell", (function(e, t, n) {
            return (e = e.aoData[t]) && e.anCells ? e.anCells[n] : r
        }
        ), 1)
    }
    )),
    f("cells().data()", (function() {
        return this.iterator("cell", (function(e, t, n) {
            return U(e, t, n)
        }
        ), 1)
    }
    )),
    h("cells().cache()", "cell().cache()", (function(e) {
        return e = "search" === e ? "_aFilterData" : "_aSortData",
        this.iterator("cell", (function(t, n, r) {
            return t.aoData[n][e][r]
        }
        ), 1)
    }
    )),
    h("cells().render()", "cell().render()", (function(e) {
        return this.iterator("cell", (function(t, n, r) {
            return U(t, n, r, e)
        }
        ), 1)
    }
    )),
    h("cells().indexes()", "cell().index()", (function() {
        return this.iterator("cell", (function(e, t, n) {
            return {
                row: t,
                column: n,
                columnVisible: R(e, n)
            }
        }
        ), 1)
    }
    )),
    h("cells().invalidate()", "cell().invalidate()", (function(e) {
        return this.iterator("cell", (function(t, n, r) {
            te(t, n, e, r)
        }
        ))
    }
    )),
    f("cell()", (function(e, t, n) {
        return _t(this.cells(e, t, n))
    }
    )),
    f("cell().data()", (function(e) {
        var t = this.context
          , n = this[0];
        return e === r ? t.length && n.length ? U(t[0], n[0].row, n[0].column) : r : (V(t[0], n[0].row, n[0].column, e),
        te(t[0], n[0].row, "data", n[0].column),
        this)
    }
    )),
    f("order()", (function(e, t) {
        var n = this.context;
        return e === r ? 0 !== n.length ? n[0].aaSorting : r : ("number" == typeof e ? e = [[e, t]] : e.length && !Array.isArray(e[0]) && (e = Array.prototype.slice.call(arguments)),
        this.iterator("table", (function(t) {
            t.aaSorting = e.slice()
        }
        )))
    }
    )),
    f("order.listener()", (function(e, t, n) {
        return this.iterator("table", (function(r) {
            et(r, e, t, n)
        }
        ))
    }
    )),
    f("order.fixed()", (function(t) {
        var n;
        return t ? this.iterator("table", (function(n) {
            n.aaSortingFixed = e.extend(!0, {}, t)
        }
        )) : (n = (n = this.context).length ? n[0].aaSortingFixed : r,
        Array.isArray(n) ? {
            pre: n
        } : n)
    }
    )),
    f(["columns().order()", "column().order()"], (function(t) {
        var n = this;
        return this.iterator("table", (function(r, i) {
            var o = [];
            e.each(n[i], (function(e, n) {
                o.push([n, t])
            }
            )),
            r.aaSorting = o
        }
        ))
    }
    )),
    f("search()", (function(t, n, i, o) {
        var s = this.context;
        return t === r ? 0 !== s.length ? s[0].oPreviousSearch.sSearch : r : this.iterator("table", (function(r) {
            r.oFeatures.bFilter && ye(r, e.extend({}, r.oPreviousSearch, {
                sSearch: t + "",
                bRegex: null !== n && n,
                bSmart: null === i || i,
                bCaseInsensitive: null === o || o
            }), 1)
        }
        ))
    }
    )),
    h("columns().search()", "column().search()", (function(t, n, i, o) {
        return this.iterator("column", (function(s, a) {
            var l = s.aoPreSearchCols;
            if (t === r)
                return l[a].sSearch;
            s.oFeatures.bFilter && (e.extend(l[a], {
                sSearch: t + "",
                bRegex: null !== n && n,
                bSmart: null === i || i,
                bCaseInsensitive: null === o || o
            }),
            ye(s, s.oPreviousSearch, 1))
        }
        ))
    }
    )),
    f("state()", (function() {
        return this.context.length ? this.context[0].oSavedState : null
    }
    )),
    f("state.clear()", (function() {
        return this.iterator("table", (function(e) {
            e.fnStateSaveCallback.call(e.oInstance, e, {})
        }
        ))
    }
    )),
    f("state.loaded()", (function() {
        return this.context.length ? this.context[0].oLoadedState : null
    }
    )),
    f("state.save()", (function() {
        return this.iterator("table", (function(e) {
            rt(e)
        }
        ))
    }
    )),
    p.use = function(r, i) {
        "lib" === i || r.fn ? e = r : "win" == i || r.document ? n = (t = r).document : "datetime" !== i && "DateTime" !== r.type || (p.DateTime = r)
    }
    ,
    p.factory = function(r, i) {
        var o = !1;
        return r && r.document && (n = (t = r).document),
        i && i.fn && i.fn.jquery && (e = i,
        o = !0),
        o
    }
    ,
    p.versionCheck = p.fnVersionCheck = function(e) {
        for (var t, n, r = p.version.split("."), i = e.split("."), o = 0, s = i.length; o < s; o++)
            if ((t = parseInt(r[o], 10) || 0) !== (n = parseInt(i[o], 10) || 0))
                return n < t;
        return !0
    }
    ,
    p.isDataTable = p.fnIsDataTable = function(t) {
        var n = e(t).get(0)
          , r = !1;
        return t instanceof p.Api || (e.each(p.settings, (function(t, i) {
            var o = i.nScrollHead ? e("table", i.nScrollHead)[0] : null
              , s = i.nScrollFoot ? e("table", i.nScrollFoot)[0] : null;
            i.nTable !== n && o !== n && s !== n || (r = !0)
        }
        )),
        r)
    }
    ,
    p.tables = p.fnTables = function(t) {
        var n = !1
          , r = (e.isPlainObject(t) && (n = t.api,
        t = t.visible),
        e.map(p.settings, (function(n) {
            if (!t || e(n.nTable).is(":visible"))
                return n.nTable
        }
        )));
        return n ? new Ct(r) : r
    }
    ,
    p.camelToHungarian = A,
    f("$()", (function(t, n) {
        return n = this.rows(n).nodes(),
        n = e(n),
        e([].concat(n.filter(t).toArray(), n.find(t).toArray()))
    }
    )),
    e.each(["on", "one", "off"], (function(t, n) {
        f(n + "()", (function() {
            var t = Array.prototype.slice.call(arguments)
              , r = (t[0] = e.map(t[0].split(/\s/), (function(e) {
                return e.match(/\.dt\b/) ? e : e + ".dt"
            }
            )).join(" "),
            e(this.tables().nodes()));
            return r[n].apply(r, t),
            this
        }
        ))
    }
    )),
    f("clear()", (function() {
        return this.iterator("table", (function(e) {
            Z(e)
        }
        ))
    }
    )),
    f("settings()", (function() {
        return new Ct(this.context,this.context)
    }
    )),
    f("init()", (function() {
        var e = this.context;
        return e.length ? e[0].oInit : null
    }
    )),
    f("data()", (function() {
        return this.iterator("table", (function(e) {
            return S(e.aoData, "_aData")
        }
        )).flatten()
    }
    )),
    f("destroy()", (function(n) {
        return n = n || !1,
        this.iterator("table", (function(r) {
            var i, o = r.oClasses, s = r.nTable, a = r.nTBody, l = r.nTHead, c = r.nTFoot, u = e(s), d = (a = e(a),
            e(r.nTableWrapper)), f = e.map(r.aoData, (function(e) {
                return e.nTr
            }
            ));
            r.bDestroying = !0,
            ft(r, "aoDestroyCallback", "destroy", [r]),
            n || new Ct(r).columns().visible(!0),
            d.off(".DT").find(":not(tbody *)").off(".DT"),
            e(t).off(".DT-" + r.sInstance),
            s != l.parentNode && (u.children("thead").detach(),
            u.append(l)),
            c && s != c.parentNode && (u.children("tfoot").detach(),
            u.append(c)),
            r.aaSorting = [],
            r.aaSortingFixed = [],
            tt(r),
            e(f).removeClass(r.asStripeClasses.join(" ")),
            e("th, td", l).removeClass(o.sSortable + " " + o.sSortableAsc + " " + o.sSortableDesc + " " + o.sSortableNone),
            a.children().detach(),
            a.append(f),
            c = r.nTableWrapper.parentNode,
            u[l = n ? "remove" : "detach"](),
            d[l](),
            !n && c && (c.insertBefore(s, r.nTableReinsertBefore),
            u.css("width", r.sDestroyWidth).removeClass(o.sTable),
            (i = r.asDestroyStripes.length) && a.children().each((function(t) {
                e(this).addClass(r.asDestroyStripes[t % i])
            }
            ))),
            f = e.inArray(r, p.settings);
            -1 !== f && p.settings.splice(f, 1)
        }
        ))
    }
    )),
    e.each(["column", "row", "cell"], (function(e, t) {
        f(t + "s().every()", (function(e) {
            var n = this.selector.opts
              , i = this;
            return this.iterator(t, (function(o, s, a, l, c) {
                e.call(i[t](s, "cell" === t ? a : n, "cell" === t ? n : r), s, a, l, c)
            }
            ))
        }
        ))
    }
    )),
    f("i18n()", (function(t, n, i) {
        var o = this.context[0];
        return (t = Q(t)(o.oLanguage)) === r && (t = n),
        "string" == typeof (t = i !== r && e.isPlainObject(t) ? t[i] !== r ? t[i] : t._ : t) ? t.replace("%d", i) : t
    }
    )),
    p.version = "1.13.5",
    p.settings = [],
    p.models = {},
    p.models.oSearch = {
        bCaseInsensitive: !0,
        sSearch: "",
        bRegex: !1,
        bSmart: !0,
        return: !1
    },
    p.models.oRow = {
        nTr: null,
        anCells: null,
        _aData: [],
        _aSortData: null,
        _aFilterData: null,
        _sFilterRow: null,
        _sRowStripe: "",
        src: null,
        idx: -1
    },
    p.models.oColumn = {
        idx: null,
        aDataSort: null,
        asSorting: null,
        bSearchable: null,
        bSortable: null,
        bVisible: null,
        _sManualType: null,
        _bAttrSrc: !1,
        fnCreatedCell: null,
        fnGetData: null,
        fnSetData: null,
        mData: null,
        mRender: null,
        nTh: null,
        nTf: null,
        sClass: null,
        sContentPadding: null,
        sDefaultContent: null,
        sName: null,
        sSortDataType: "std",
        sSortingClass: null,
        sSortingClassJUI: null,
        sTitle: null,
        sType: null,
        sWidth: null,
        sWidthOrig: null
    },
    p.defaults = {
        aaData: null,
        aaSorting: [[0, "asc"]],
        aaSortingFixed: [],
        ajax: null,
        aLengthMenu: [10, 25, 50, 100],
        aoColumns: null,
        aoColumnDefs: null,
        aoSearchCols: [],
        asStripeClasses: null,
        bAutoWidth: !0,
        bDeferRender: !1,
        bDestroy: !1,
        bFilter: !0,
        bInfo: !0,
        bLengthChange: !0,
        bPaginate: !0,
        bProcessing: !1,
        bRetrieve: !1,
        bScrollCollapse: !1,
        bServerSide: !1,
        bSort: !0,
        bSortMulti: !0,
        bSortCellsTop: !1,
        bSortClasses: !0,
        bStateSave: !1,
        fnCreatedRow: null,
        fnDrawCallback: null,
        fnFooterCallback: null,
        fnFormatNumber: function(e) {
            return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
        },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnServerData: null,
        fnServerParams: null,
        fnStateLoadCallback: function(e) {
            try {
                return JSON.parse((-1 === e.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + e.sInstance + "_" + location.pathname))
            } catch (e) {
                return {}
            }
        },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function(e, t) {
            try {
                (-1 === e.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + e.sInstance + "_" + location.pathname, JSON.stringify(t))
            } catch (e) {}
        },
        fnStateSaveParams: null,
        iStateDuration: 7200,
        iDeferLoading: null,
        iDisplayLength: 10,
        iDisplayStart: 0,
        iTabIndex: 0,
        oClasses: {},
        oLanguage: {
            oAria: {
                sSortAscending: ": activate to sort column ascending",
                sSortDescending: ": activate to sort column descending"
            },
            oPaginate: {
                sFirst: "First",
                sLast: "Last",
                sNext: "Next",
                sPrevious: "Previous"
            },
            sEmptyTable: "No data available in table",
            sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
            sInfoEmpty: "Showing 0 to 0 of 0 entries",
            sInfoFiltered: "(filtered from _MAX_ total entries)",
            sInfoPostFix: "",
            sDecimal: "",
            sThousands: ",",
            sLengthMenu: "Show _MENU_ entries",
            sLoadingRecords: "Loading...",
            sProcessing: "",
            sSearch: "Search:",
            sSearchPlaceholder: "",
            sUrl: "",
            sZeroRecords: "No matching records found"
        },
        oSearch: e.extend({}, p.models.oSearch),
        sAjaxDataProp: "data",
        sAjaxSource: null,
        sDom: "lfrtip",
        searchDelay: null,
        sPaginationType: "simple_numbers",
        sScrollX: "",
        sScrollXInner: "",
        sScrollY: "",
        sServerMethod: "GET",
        renderer: null,
        rowId: "DT_RowId"
    },
    D(p.defaults),
    p.defaults.column = {
        aDataSort: null,
        iDataSort: -1,
        asSorting: ["asc", "desc"],
        bSearchable: !0,
        bSortable: !0,
        bVisible: !0,
        fnCreatedCell: null,
        mData: null,
        mRender: null,
        sCellType: "td",
        sClass: "",
        sContentPadding: "",
        sDefaultContent: null,
        sName: "",
        sSortDataType: "std",
        sTitle: null,
        sType: null,
        sWidth: null
    },
    D(p.defaults.column),
    p.models.oSettings = {
        oFeatures: {
            bAutoWidth: null,
            bDeferRender: null,
            bFilter: null,
            bInfo: null,
            bLengthChange: null,
            bPaginate: null,
            bProcessing: null,
            bServerSide: null,
            bSort: null,
            bSortMulti: null,
            bSortClasses: null,
            bStateSave: null
        },
        oScroll: {
            bCollapse: null,
            iBarWidth: 0,
            sX: null,
            sXInner: null,
            sY: null
        },
        oLanguage: {
            fnInfoCallback: null
        },
        oBrowser: {
            bScrollOversize: !1,
            bScrollbarLeft: !1,
            bBounding: !1,
            barWidth: 0
        },
        ajax: null,
        aanFeatures: [],
        aoData: [],
        aiDisplay: [],
        aiDisplayMaster: [],
        aIds: {},
        aoColumns: [],
        aoHeader: [],
        aoFooter: [],
        oPreviousSearch: {},
        aoPreSearchCols: [],
        aaSorting: null,
        aaSortingFixed: [],
        asStripeClasses: null,
        asDestroyStripes: [],
        sDestroyWidth: 0,
        aoRowCallback: [],
        aoHeaderCallback: [],
        aoFooterCallback: [],
        aoDrawCallback: [],
        aoRowCreatedCallback: [],
        aoPreDrawCallback: [],
        aoInitComplete: [],
        aoStateSaveParams: [],
        aoStateLoadParams: [],
        aoStateLoaded: [],
        sTableId: "",
        nTable: null,
        nTHead: null,
        nTFoot: null,
        nTBody: null,
        nTableWrapper: null,
        bDeferLoading: !1,
        bInitialised: !1,
        aoOpenRows: [],
        sDom: null,
        searchDelay: null,
        sPaginationType: "two_button",
        iStateDuration: 0,
        aoStateSave: [],
        aoStateLoad: [],
        oSavedState: null,
        oLoadedState: null,
        sAjaxSource: null,
        sAjaxDataProp: null,
        jqXHR: null,
        json: r,
        oAjaxData: r,
        fnServerData: null,
        aoServerParams: [],
        sServerMethod: null,
        fnFormatNumber: null,
        aLengthMenu: null,
        iDraw: 0,
        bDrawing: !1,
        iDrawError: -1,
        _iDisplayLength: 10,
        _iDisplayStart: 0,
        _iRecordsTotal: 0,
        _iRecordsDisplay: 0,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function() {
            return "ssp" == gt(this) ? +this._iRecordsTotal : this.aiDisplayMaster.length
        },
        fnRecordsDisplay: function() {
            return "ssp" == gt(this) ? +this._iRecordsDisplay : this.aiDisplay.length
        },
        fnDisplayEnd: function() {
            var e = this._iDisplayLength
              , t = this._iDisplayStart
              , n = t + e
              , r = this.aiDisplay.length
              , i = this.oFeatures
              , o = i.bPaginate;
            return i.bServerSide ? !1 === o || -1 === e ? t + r : Math.min(t + e, this._iRecordsDisplay) : !o || r < n || -1 === e ? r : n
        },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null
    },
    p.ext = d = {
        buttons: {},
        classes: {},
        builder: "-source-",
        errMode: "alert",
        feature: [],
        search: [],
        selector: {
            cell: [],
            column: [],
            row: []
        },
        internal: {},
        legacy: {
            ajax: null
        },
        pager: {},
        renderer: {
            pageButton: {},
            header: {}
        },
        order: {},
        type: {
            detect: [],
            search: {},
            order: {}
        },
        _unique: 0,
        fnVersionCheck: p.fnVersionCheck,
        iApiIndex: 0,
        oJUIClasses: {},
        sVersion: p.version
    },
    e.extend(d, {
        afnFiltering: d.search,
        aTypes: d.type.detect,
        ofnSearch: d.type.search,
        oSort: d.type.order,
        afnSortData: d.order,
        aoFeatures: d.feature,
        oApi: d.internal,
        oStdClasses: d.classes,
        oPagination: d.pager
    }),
    e.extend(p.ext.classes, {
        sTable: "dataTable",
        sNoFooter: "no-footer",
        sPageButton: "paginate_button",
        sPageButtonActive: "current",
        sPageButtonDisabled: "disabled",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "sorting_asc",
        sSortDesc: "sorting_desc",
        sSortable: "sorting",
        sSortableAsc: "sorting_desc_disabled",
        sSortableDesc: "sorting_asc_disabled",
        sSortableNone: "sorting_disabled",
        sSortColumn: "sorting_",
        sFilterInput: "",
        sLengthSelect: "",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot",
        sScrollFootInner: "dataTables_scrollFootInner",
        sHeaderTH: "",
        sFooterTH: "",
        sSortJUIAsc: "",
        sSortJUIDesc: "",
        sSortJUI: "",
        sSortJUIAscAllowed: "",
        sSortJUIDescAllowed: "",
        sSortJUIWrapper: "",
        sSortIcon: "",
        sJUIHeader: "",
        sJUIFooter: ""
    }),
    p.ext.pager);
    function jt(e, t) {
        var n = []
          , r = Ot.numbers_length
          , i = Math.floor(r / 2);
        return t <= r ? n = l(0, t) : e <= i ? ((n = l(0, r - 2)).push("ellipsis"),
        n.push(t - 1)) : ((t - 1 - i <= e ? n = l(t - (r - 2), t) : ((n = l(e - i + 2, e + i - 1)).push("ellipsis"),
        n.push(t - 1),
        n)).splice(0, 0, "ellipsis"),
        n.splice(0, 0, 0)),
        n.DT_el = "span",
        n
    }
    function Pt(e, t, n, r) {
        var i;
        return 0 === e || e && "-" !== e ? "number" == (i = typeof e) || "bigint" == i ? e : ((e = t ? x(e, t) : e).replace && (n && (e = e.replace(n, "")),
        r && (e = e.replace(r, ""))),
        +e) : -1 / 0
    }
    function Nt(t) {
        e.each({
            num: function(e) {
                return Pt(e, t)
            },
            "num-fmt": function(e) {
                return Pt(e, t, _)
            },
            "html-num": function(e) {
                return Pt(e, t, v)
            },
            "html-num-fmt": function(e) {
                return Pt(e, t, v, _)
            }
        }, (function(e, n) {
            d.type.order[e + t + "-pre"] = n,
            e.match(/^html\-/) && (d.type.search[e + t] = d.type.search.html)
        }
        ))
    }
    function Ft(e) {
        return "string" == typeof (e = Array.isArray(e) ? e.join(",") : e) ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : e
    }
    function Ht(e, n, r, i, o) {
        return t.moment ? e[n](o) : t.luxon ? e[r](o) : i ? e[i](o) : e
    }
    e.extend(Ot, {
        simple: function(e, t) {
            return ["previous", "next"]
        },
        full: function(e, t) {
            return ["first", "previous", "next", "last"]
        },
        numbers: function(e, t) {
            return [jt(e, t)]
        },
        simple_numbers: function(e, t) {
            return ["previous", jt(e, t), "next"]
        },
        full_numbers: function(e, t) {
            return ["first", "previous", jt(e, t), "next", "last"]
        },
        first_last_numbers: function(e, t) {
            return ["first", jt(e, t), "last"]
        },
        _numbers: jt,
        numbers_length: 7
    }),
    e.extend(!0, p.ext.renderer, {
        pageButton: {
            _: function(t, i, o, s, a, l) {
                var c, u, d, f = t.oClasses, h = t.oLanguage.oPaginate, p = t.oLanguage.oAria.paginate || {};
                try {
                    d = e(i).find(n.activeElement).data("dt-idx")
                } catch (i) {}
                (function n(r, i) {
                    for (var s, d, g, m = f.sPageButtonDisabled, v = function(e) {
                        He(t, e.data.action, !0)
                    }, y = 0, b = i.length; y < b; y++)
                        if (s = i[y],
                        Array.isArray(s)) {
                            var _ = e("<" + (s.DT_el || "div") + "/>").appendTo(r);
                            n(_, s)
                        } else {
                            switch (c = null,
                            u = s,
                            d = t.iTabIndex,
                            s) {
                            case "ellipsis":
                                r.append('<span class="ellipsis">&#x2026;</span>');
                                break;
                            case "first":
                                c = h.sFirst,
                                0 === a && (d = -1,
                                u += " " + m);
                                break;
                            case "previous":
                                c = h.sPrevious,
                                0 === a && (d = -1,
                                u += " " + m);
                                break;
                            case "next":
                                c = h.sNext,
                                0 !== l && a !== l - 1 || (d = -1,
                                u += " " + m);
                                break;
                            case "last":
                                c = h.sLast,
                                0 !== l && a !== l - 1 || (d = -1,
                                u += " " + m);
                                break;
                            default:
                                c = t.fnFormatNumber(s + 1),
                                u = a === s ? f.sPageButtonActive : ""
                            }
                            null !== c && (_ = t.oInit.pagingTag || "a",
                            g = -1 !== u.indexOf(m),
                            ut(e("<" + _ + ">", {
                                class: f.sPageButton + " " + u,
                                "aria-controls": t.sTableId,
                                "aria-disabled": g ? "true" : null,
                                "aria-label": p[s],
                                role: "link",
                                "aria-current": u === f.sPageButtonActive ? "page" : null,
                                "data-dt-idx": s,
                                tabindex: d,
                                id: 0 === o && "string" == typeof s ? t.sTableId + "_" + s : null
                            }).html(c).appendTo(r), {
                                action: s
                            }, v))
                        }
                }
                )(e(i).empty(), s),
                d !== r && e(i).find("[data-dt-idx=" + d + "]").trigger("focus")
            }
        }
    }),
    e.extend(p.ext.type.detect, [function(e, t) {
        return o(e, t = t.oLanguage.sDecimal) ? "num" + t : null
    }
    , function(e, t) {
        var n;
        return (!e || e instanceof Date || y.test(e)) && (null !== (n = Date.parse(e)) && !isNaN(n) || w(e)) ? "date" : null
    }
    , function(e, t) {
        return o(e, t = t.oLanguage.sDecimal, !0) ? "num-fmt" + t : null
    }
    , function(e, t) {
        return s(e, t = t.oLanguage.sDecimal) ? "html-num" + t : null
    }
    , function(e, t) {
        return s(e, t = t.oLanguage.sDecimal, !0) ? "html-num-fmt" + t : null
    }
    , function(e, t) {
        return w(e) || "string" == typeof e && -1 !== e.indexOf("<") ? "html" : null
    }
    ]),
    e.extend(p.ext.type.search, {
        html: function(e) {
            return w(e) ? e : "string" == typeof e ? e.replace(m, " ").replace(v, "") : ""
        },
        string: function(e) {
            return w(e) || "string" != typeof e ? e : e.replace(m, " ")
        }
    }),
    e.extend(d.type.order, {
        "date-pre": function(e) {
            return e = Date.parse(e),
            isNaN(e) ? -1 / 0 : e
        },
        "html-pre": function(e) {
            return w(e) ? "" : e.replace ? e.replace(/<.*?>/g, "").toLowerCase() : e + ""
        },
        "string-pre": function(e) {
            return w(e) ? "" : "string" == typeof e ? e.toLowerCase() : e.toString ? e.toString() : ""
        },
        "string-asc": function(e, t) {
            return e < t ? -1 : t < e ? 1 : 0
        },
        "string-desc": function(e, t) {
            return e < t ? 1 : t < e ? -1 : 0
        }
    }),
    Nt(""),
    e.extend(!0, p.ext.renderer, {
        header: {
            _: function(t, n, r, i) {
                e(t.nTable).on("order.dt.DT", (function(e, o, s, a) {
                    t === o && (o = r.idx,
                    n.removeClass(i.sSortAsc + " " + i.sSortDesc).addClass("asc" == a[o] ? i.sSortAsc : "desc" == a[o] ? i.sSortDesc : r.sSortingClass))
                }
                ))
            },
            jqueryui: function(t, n, r, i) {
                e("<div/>").addClass(i.sSortJUIWrapper).append(n.contents()).append(e("<span/>").addClass(i.sSortIcon + " " + r.sSortingClassJUI)).appendTo(n),
                e(t.nTable).on("order.dt.DT", (function(e, o, s, a) {
                    t === o && (o = r.idx,
                    n.removeClass(i.sSortAsc + " " + i.sSortDesc).addClass("asc" == a[o] ? i.sSortAsc : "desc" == a[o] ? i.sSortDesc : r.sSortingClass),
                    n.find("span." + i.sSortIcon).removeClass(i.sSortJUIAsc + " " + i.sSortJUIDesc + " " + i.sSortJUI + " " + i.sSortJUIAscAllowed + " " + i.sSortJUIDescAllowed).addClass("asc" == a[o] ? i.sSortJUIAsc : "desc" == a[o] ? i.sSortJUIDesc : r.sSortingClassJUI))
                }
                ))
            }
        }
    });
    var Rt = !1;
    function Mt(e, n, r) {
        var i;
        if (t.moment) {
            if (!(i = t.moment.utc(e, n, r, !0)).isValid())
                return null
        } else if (t.luxon) {
            if (!(i = n && "string" == typeof e ? t.luxon.DateTime.fromFormat(e, n) : t.luxon.DateTime.fromISO(e)).isValid)
                return null;
            i.setLocale(r)
        } else
            n ? (Rt || alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"),
            Rt = !0) : i = new Date(e);
        return i
    }
    function $t(e) {
        return function(t, n, i, o) {
            0 === arguments.length ? (i = "en",
            t = n = null) : 1 === arguments.length ? (i = "en",
            n = t,
            t = null) : 2 === arguments.length && (i = n,
            n = t,
            t = null);
            var s = "datetime-" + n;
            return p.ext.type.order[s] || (p.ext.type.detect.unshift((function(e) {
                return e === s && s
            }
            )),
            p.ext.type.order[s + "-asc"] = function(e, t) {
                return (e = e.valueOf()) === (t = t.valueOf()) ? 0 : e < t ? -1 : 1
            }
            ,
            p.ext.type.order[s + "-desc"] = function(e, t) {
                return (e = e.valueOf()) === (t = t.valueOf()) ? 0 : t < e ? -1 : 1
            }
            ),
            function(a, l) {
                var c;
                return null !== a && a !== r || (a = "--now" === o ? (c = new Date,
                new Date(Date.UTC(c.getFullYear(), c.getMonth(), c.getDate(), c.getHours(), c.getMinutes(), c.getSeconds()))) : ""),
                "type" === l ? s : "" === a ? "sort" !== l ? "" : Mt("0000-01-01 00:00:00", null, i) : (null === n || t !== n || "sort" === l || "type" === l || a instanceof Date) && null !== (c = Mt(a, t, i)) ? "sort" === l ? c : (a = null === n ? Ht(c, "toDate", "toJSDate", "")[e]() : Ht(c, "format", "toFormat", "toISOString", n),
                "display" === l ? Ft(a) : a) : a
            }
        }
    }
    var Wt = ","
      , qt = ".";
    if (t.Intl !== r)
        try {
            for (var Bt = (new Intl.NumberFormat).formatToParts(100000.1), zt = 0; zt < Bt.length; zt++)
                "group" === Bt[zt].type ? Wt = Bt[zt].value : "decimal" === Bt[zt].type && (qt = Bt[zt].value)
        } catch (h) {}
    function Ut(e) {
        return function() {
            var t = [st(this[p.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
            return p.ext.internal[e].apply(this, t)
        }
    }
    return p.datetime = function(e, t) {
        var n = "datetime-detect-" + e;
        t = t || "en",
        p.ext.type.order[n] || (p.ext.type.detect.unshift((function(r) {
            var i = Mt(r, e, t);
            return !("" !== r && !i) && n
        }
        )),
        p.ext.type.order[n + "-pre"] = function(n) {
            return Mt(n, e, t) || 0
        }
        )
    }
    ,
    p.render = {
        date: $t("toLocaleDateString"),
        datetime: $t("toLocaleString"),
        time: $t("toLocaleTimeString"),
        number: function(e, t, n, i, o) {
            return null !== e && e !== r || (e = Wt),
            null !== t && t !== r || (t = qt),
            {
                display: function(r) {
                    if ("number" != typeof r && "string" != typeof r)
                        return r;
                    if ("" === r || null === r)
                        return r;
                    var s = r < 0 ? "-" : ""
                      , a = parseFloat(r);
                    return isNaN(a) ? Ft(r) : (a = a.toFixed(n),
                    r = Math.abs(a),
                    a = parseInt(r, 10),
                    r = n ? t + (r - a).toFixed(n).substring(2) : "",
                    (s = 0 === a && 0 === parseFloat(r) ? "" : s) + (i || "") + a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, e) + r + (o || ""))
                }
            }
        },
        text: function() {
            return {
                display: Ft,
                filter: Ft
            }
        }
    },
    e.extend(p.ext.internal, {
        _fnExternApiFunc: Ut,
        _fnBuildAjax: fe,
        _fnAjaxUpdate: he,
        _fnAjaxParameters: pe,
        _fnAjaxUpdateDraw: ge,
        _fnAjaxDataSrc: me,
        _fnAddColumn: P,
        _fnColumnOptions: N,
        _fnAdjustColumnSizing: F,
        _fnVisibleToColumnIndex: H,
        _fnColumnIndexToVisible: R,
        _fnVisbleColumns: M,
        _fnGetColumns: $,
        _fnColumnTypes: W,
        _fnApplyColumnDefs: q,
        _fnHungarianMap: D,
        _fnCamelToHungarian: A,
        _fnLanguageCompat: E,
        _fnBrowserDetect: O,
        _fnAddData: B,
        _fnAddTr: z,
        _fnNodeToDataIndex: function(e, t) {
            return t._DT_RowIndex !== r ? t._DT_RowIndex : null
        },
        _fnNodeToColumnIndex: function(t, n, r) {
            return e.inArray(r, t.aoData[n].anCells)
        },
        _fnGetCellData: U,
        _fnSetCellData: V,
        _fnSplitObjNotation: Y,
        _fnGetObjectDataFn: Q,
        _fnSetObjectDataFn: G,
        _fnGetDataMaster: K,
        _fnClearTable: Z,
        _fnDeleteIndex: ee,
        _fnInvalidate: te,
        _fnGetRowElements: ne,
        _fnCreateTr: re,
        _fnBuildHead: oe,
        _fnDrawHead: se,
        _fnDraw: ae,
        _fnReDraw: le,
        _fnAddOptionsHtml: ce,
        _fnDetectHeader: ue,
        _fnGetUniqueThs: de,
        _fnFeatureHtmlFilter: ve,
        _fnFilterComplete: ye,
        _fnFilterCustom: be,
        _fnFilterColumn: _e,
        _fnFilter: we,
        _fnFilterCreateSearch: xe,
        _fnEscapeRegex: Se,
        _fnFilterData: De,
        _fnFeatureHtmlInfo: ke,
        _fnUpdateInfo: Le,
        _fnInfoMacros: Ie,
        _fnInitialise: Oe,
        _fnInitComplete: je,
        _fnLengthChange: Pe,
        _fnFeatureHtmlLength: Ne,
        _fnFeatureHtmlPaginate: Fe,
        _fnPageChange: He,
        _fnFeatureHtmlProcessing: Re,
        _fnProcessingDisplay: Me,
        _fnFeatureHtmlTable: $e,
        _fnScrollDraw: We,
        _fnApplyToChildren: qe,
        _fnCalculateColumnWidths: ze,
        _fnThrottle: Ue,
        _fnConvertToWidth: Ve,
        _fnGetWidestNode: Xe,
        _fnGetMaxLenString: Je,
        _fnStringToCss: Ye,
        _fnSortFlatten: Qe,
        _fnSort: Ge,
        _fnSortAria: Ke,
        _fnSortListener: Ze,
        _fnSortAttachListener: et,
        _fnSortingClasses: tt,
        _fnSortData: nt,
        _fnSaveState: rt,
        _fnLoadState: it,
        _fnImplementState: ot,
        _fnSettingsFromNode: st,
        _fnLog: at,
        _fnMap: lt,
        _fnBindAction: ut,
        _fnCallbackReg: dt,
        _fnCallbackFire: ft,
        _fnLengthOverflow: ht,
        _fnRenderer: pt,
        _fnDataSource: gt,
        _fnRowAttributes: ie,
        _fnExtend: ct,
        _fnCalculateEnd: function() {}
    }),
    ((e.fn.dataTable = p).$ = e).fn.dataTableSettings = p.settings,
    e.fn.dataTableExt = p.ext,
    e.fn.DataTable = function(t) {
        return e(this).dataTable(t).api()
    }
    ,
    e.each(p, (function(t, n) {
        e.fn.DataTable[t] = n
    }
    )),
    p
}
)),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Popper = {})
}(this, (function(e) {
    "use strict";
    function t(e) {
        if (null == e)
            return window;
        if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return t && t.defaultView || window
        }
        return e
    }
    function n(e) {
        return e instanceof t(e).Element || e instanceof Element
    }
    function r(e) {
        return e instanceof t(e).HTMLElement || e instanceof HTMLElement
    }
    function i(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof t(e).ShadowRoot || e instanceof ShadowRoot)
    }
    var o = Math.max
      , s = Math.min
      , a = Math.round;
    function l() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function(e) {
            return e.brand + "/" + e.version
        }
        )).join(" ") : navigator.userAgent
    }
    function c() {
        return !/^((?!chrome|android).)*safari/i.test(l())
    }
    function u(e, i, o) {
        void 0 === i && (i = !1),
        void 0 === o && (o = !1);
        var s = e.getBoundingClientRect()
          , l = 1
          , u = 1;
        i && r(e) && (l = e.offsetWidth > 0 && a(s.width) / e.offsetWidth || 1,
        u = e.offsetHeight > 0 && a(s.height) / e.offsetHeight || 1);
        var d = (n(e) ? t(e) : window).visualViewport
          , f = !c() && o
          , h = (s.left + (f && d ? d.offsetLeft : 0)) / l
          , p = (s.top + (f && d ? d.offsetTop : 0)) / u
          , g = s.width / l
          , m = s.height / u;
        return {
            width: g,
            height: m,
            top: p,
            right: h + g,
            bottom: p + m,
            left: h,
            x: h,
            y: p
        }
    }
    function d(e) {
        var n = t(e);
        return {
            scrollLeft: n.pageXOffset,
            scrollTop: n.pageYOffset
        }
    }
    function f(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
    }
    function h(e) {
        return ((n(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }
    function p(e) {
        return u(h(e)).left + d(e).scrollLeft
    }
    function g(e) {
        return t(e).getComputedStyle(e)
    }
    function m(e) {
        var t = g(e)
          , n = t.overflow
          , r = t.overflowX
          , i = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + i + r)
    }
    function v(e, n, i) {
        void 0 === i && (i = !1);
        var o, s, l = r(n), c = r(n) && function(e) {
            var t = e.getBoundingClientRect()
              , n = a(t.width) / e.offsetWidth || 1
              , r = a(t.height) / e.offsetHeight || 1;
            return 1 !== n || 1 !== r
        }(n), g = h(n), v = u(e, c, i), y = {
            scrollLeft: 0,
            scrollTop: 0
        }, b = {
            x: 0,
            y: 0
        };
        return (l || !l && !i) && (("body" !== f(n) || m(g)) && (y = (o = n) !== t(o) && r(o) ? {
            scrollLeft: (s = o).scrollLeft,
            scrollTop: s.scrollTop
        } : d(o)),
        r(n) ? ((b = u(n, !0)).x += n.clientLeft,
        b.y += n.clientTop) : g && (b.x = p(g))),
        {
            x: v.left + y.scrollLeft - b.x,
            y: v.top + y.scrollTop - b.y,
            width: v.width,
            height: v.height
        }
    }
    function y(e) {
        var t = u(e)
          , n = e.offsetWidth
          , r = e.offsetHeight;
        return Math.abs(t.width - n) <= 1 && (n = t.width),
        Math.abs(t.height - r) <= 1 && (r = t.height),
        {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: n,
            height: r
        }
    }
    function b(e) {
        return "html" === f(e) ? e : e.assignedSlot || e.parentNode || (i(e) ? e.host : null) || h(e)
    }
    function _(e) {
        return ["html", "body", "#document"].indexOf(f(e)) >= 0 ? e.ownerDocument.body : r(e) && m(e) ? e : _(b(e))
    }
    function w(e, n) {
        var r;
        void 0 === n && (n = []);
        var i = _(e)
          , o = i === (null == (r = e.ownerDocument) ? void 0 : r.body)
          , s = t(i)
          , a = o ? [s].concat(s.visualViewport || [], m(i) ? i : []) : i
          , l = n.concat(a);
        return o ? l : l.concat(w(b(a)))
    }
    function x(e) {
        return ["table", "td", "th"].indexOf(f(e)) >= 0
    }
    function S(e) {
        return r(e) && "fixed" !== g(e).position ? e.offsetParent : null
    }
    function T(e) {
        for (var n = t(e), o = S(e); o && x(o) && "static" === g(o).position; )
            o = S(o);
        return o && ("html" === f(o) || "body" === f(o) && "static" === g(o).position) ? n : o || function(e) {
            var t = /firefox/i.test(l());
            if (/Trident/i.test(l()) && r(e) && "fixed" === g(e).position)
                return null;
            var n = b(e);
            for (i(n) && (n = n.host); r(n) && ["html", "body"].indexOf(f(n)) < 0; ) {
                var o = g(n);
                if ("none" !== o.transform || "none" !== o.perspective || "paint" === o.contain || -1 !== ["transform", "perspective"].indexOf(o.willChange) || t && "filter" === o.willChange || t && o.filter && "none" !== o.filter)
                    return n;
                n = n.parentNode
            }
            return null
        }(e) || n
    }
    var C = "top"
      , D = "bottom"
      , A = "right"
      , E = "left"
      , k = "auto"
      , L = [C, D, A, E]
      , I = "start"
      , O = "end"
      , j = "viewport"
      , P = "popper"
      , N = L.reduce((function(e, t) {
        return e.concat([t + "-" + I, t + "-" + O])
    }
    ), [])
      , F = [].concat(L, [k]).reduce((function(e, t) {
        return e.concat([t, t + "-" + I, t + "-" + O])
    }
    ), [])
      , H = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
    function R(e) {
        var t = new Map
          , n = new Set
          , r = [];
        function i(e) {
            n.add(e.name),
            [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                if (!n.has(e)) {
                    var r = t.get(e);
                    r && i(r)
                }
            }
            )),
            r.push(e)
        }
        return e.forEach((function(e) {
            t.set(e.name, e)
        }
        )),
        e.forEach((function(e) {
            n.has(e.name) || i(e)
        }
        )),
        r
    }
    function M(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t))
            return !0;
        if (n && i(n)) {
            var r = t;
            do {
                if (r && e.isSameNode(r))
                    return !0;
                r = r.parentNode || r.host
            } while (r)
        }
        return !1
    }
    function $(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        })
    }
    function W(e, r, i) {
        return r === j ? $(function(e, n) {
            var r = t(e)
              , i = h(e)
              , o = r.visualViewport
              , s = i.clientWidth
              , a = i.clientHeight
              , l = 0
              , u = 0;
            if (o) {
                s = o.width,
                a = o.height;
                var d = c();
                (d || !d && "fixed" === n) && (l = o.offsetLeft,
                u = o.offsetTop)
            }
            return {
                width: s,
                height: a,
                x: l + p(e),
                y: u
            }
        }(e, i)) : n(r) ? function(e, t) {
            var n = u(e, !1, "fixed" === t);
            return n.top = n.top + e.clientTop,
            n.left = n.left + e.clientLeft,
            n.bottom = n.top + e.clientHeight,
            n.right = n.left + e.clientWidth,
            n.width = e.clientWidth,
            n.height = e.clientHeight,
            n.x = n.left,
            n.y = n.top,
            n
        }(r, i) : $(function(e) {
            var t, n = h(e), r = d(e), i = null == (t = e.ownerDocument) ? void 0 : t.body, s = o(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = o(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + p(e), c = -r.scrollTop;
            return "rtl" === g(i || n).direction && (l += o(n.clientWidth, i ? i.clientWidth : 0) - s),
            {
                width: s,
                height: a,
                x: l,
                y: c
            }
        }(h(e)))
    }
    function q(e, t, i, a) {
        var l = "clippingParents" === t ? function(e) {
            var t = w(b(e))
              , i = ["absolute", "fixed"].indexOf(g(e).position) >= 0 && r(e) ? T(e) : e;
            return n(i) ? t.filter((function(e) {
                return n(e) && M(e, i) && "body" !== f(e)
            }
            )) : []
        }(e) : [].concat(t)
          , c = [].concat(l, [i])
          , u = c[0]
          , d = c.reduce((function(t, n) {
            var r = W(e, n, a);
            return t.top = o(r.top, t.top),
            t.right = s(r.right, t.right),
            t.bottom = s(r.bottom, t.bottom),
            t.left = o(r.left, t.left),
            t
        }
        ), W(e, u, a));
        return d.width = d.right - d.left,
        d.height = d.bottom - d.top,
        d.x = d.left,
        d.y = d.top,
        d
    }
    function B(e) {
        return e.split("-")[0]
    }
    function z(e) {
        return e.split("-")[1]
    }
    function U(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
    }
    function V(e) {
        var t, n = e.reference, r = e.element, i = e.placement, o = i ? B(i) : null, s = i ? z(i) : null, a = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2;
        switch (o) {
        case C:
            t = {
                x: a,
                y: n.y - r.height
            };
            break;
        case D:
            t = {
                x: a,
                y: n.y + n.height
            };
            break;
        case A:
            t = {
                x: n.x + n.width,
                y: l
            };
            break;
        case E:
            t = {
                x: n.x - r.width,
                y: l
            };
            break;
        default:
            t = {
                x: n.x,
                y: n.y
            }
        }
        var c = o ? U(o) : null;
        if (null != c) {
            var u = "y" === c ? "height" : "width";
            switch (s) {
            case I:
                t[c] = t[c] - (n[u] / 2 - r[u] / 2);
                break;
            case O:
                t[c] = t[c] + (n[u] / 2 - r[u] / 2)
            }
        }
        return t
    }
    function X(e) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, e)
    }
    function J(e, t) {
        return t.reduce((function(t, n) {
            return t[n] = e,
            t
        }
        ), {})
    }
    function Y(e, t) {
        void 0 === t && (t = {});
        var r = t
          , i = r.placement
          , o = void 0 === i ? e.placement : i
          , s = r.strategy
          , a = void 0 === s ? e.strategy : s
          , l = r.boundary
          , c = void 0 === l ? "clippingParents" : l
          , d = r.rootBoundary
          , f = void 0 === d ? j : d
          , p = r.elementContext
          , g = void 0 === p ? P : p
          , m = r.altBoundary
          , v = void 0 !== m && m
          , y = r.padding
          , b = void 0 === y ? 0 : y
          , _ = X("number" != typeof b ? b : J(b, L))
          , w = g === P ? "reference" : P
          , x = e.rects.popper
          , S = e.elements[v ? w : g]
          , T = q(n(S) ? S : S.contextElement || h(e.elements.popper), c, f, a)
          , E = u(e.elements.reference)
          , k = V({
            reference: E,
            element: x,
            strategy: "absolute",
            placement: o
        })
          , I = $(Object.assign({}, x, k))
          , O = g === P ? I : E
          , N = {
            top: T.top - O.top + _.top,
            bottom: O.bottom - T.bottom + _.bottom,
            left: T.left - O.left + _.left,
            right: O.right - T.right + _.right
        }
          , F = e.modifiersData.offset;
        if (g === P && F) {
            var H = F[o];
            Object.keys(N).forEach((function(e) {
                var t = [A, D].indexOf(e) >= 0 ? 1 : -1
                  , n = [C, D].indexOf(e) >= 0 ? "y" : "x";
                N[e] += H[n] * t
            }
            ))
        }
        return N
    }
    var Q = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function G() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return !t.some((function(e) {
            return !(e && "function" == typeof e.getBoundingClientRect)
        }
        ))
    }
    function K(e) {
        void 0 === e && (e = {});
        var t = e
          , r = t.defaultModifiers
          , i = void 0 === r ? [] : r
          , o = t.defaultOptions
          , s = void 0 === o ? Q : o;
        return function(e, t, r) {
            void 0 === r && (r = s);
            var o, a, l = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Q, s),
                modifiersData: {},
                elements: {
                    reference: e,
                    popper: t
                },
                attributes: {},
                styles: {}
            }, c = [], u = !1, d = {
                state: l,
                setOptions: function(r) {
                    var o = "function" == typeof r ? r(l.options) : r;
                    f(),
                    l.options = Object.assign({}, s, l.options, o),
                    l.scrollParents = {
                        reference: n(e) ? w(e) : e.contextElement ? w(e.contextElement) : [],
                        popper: w(t)
                    };
                    var a, u, h = function(e) {
                        var t = R(e);
                        return H.reduce((function(e, n) {
                            return e.concat(t.filter((function(e) {
                                return e.phase === n
                            }
                            )))
                        }
                        ), [])
                    }((a = [].concat(i, l.options.modifiers),
                    u = a.reduce((function(e, t) {
                        var n = e[t.name];
                        return e[t.name] = n ? Object.assign({}, n, t, {
                            options: Object.assign({}, n.options, t.options),
                            data: Object.assign({}, n.data, t.data)
                        }) : t,
                        e
                    }
                    ), {}),
                    Object.keys(u).map((function(e) {
                        return u[e]
                    }
                    ))));
                    return l.orderedModifiers = h.filter((function(e) {
                        return e.enabled
                    }
                    )),
                    l.orderedModifiers.forEach((function(e) {
                        var t = e.name
                          , n = e.options
                          , r = void 0 === n ? {} : n
                          , i = e.effect;
                        if ("function" == typeof i) {
                            var o = i({
                                state: l,
                                name: t,
                                instance: d,
                                options: r
                            });
                            c.push(o || function() {}
                            )
                        }
                    }
                    )),
                    d.update()
                },
                forceUpdate: function() {
                    if (!u) {
                        var e = l.elements
                          , t = e.reference
                          , n = e.popper;
                        if (G(t, n)) {
                            l.rects = {
                                reference: v(t, T(n), "fixed" === l.options.strategy),
                                popper: y(n)
                            },
                            l.reset = !1,
                            l.placement = l.options.placement,
                            l.orderedModifiers.forEach((function(e) {
                                return l.modifiersData[e.name] = Object.assign({}, e.data)
                            }
                            ));
                            for (var r = 0; r < l.orderedModifiers.length; r++)
                                if (!0 !== l.reset) {
                                    var i = l.orderedModifiers[r]
                                      , o = i.fn
                                      , s = i.options
                                      , a = void 0 === s ? {} : s
                                      , c = i.name;
                                    "function" == typeof o && (l = o({
                                        state: l,
                                        options: a,
                                        name: c,
                                        instance: d
                                    }) || l)
                                } else
                                    l.reset = !1,
                                    r = -1
                        }
                    }
                },
                update: (o = function() {
                    return new Promise((function(e) {
                        d.forceUpdate(),
                        e(l)
                    }
                    ))
                }
                ,
                function() {
                    return a || (a = new Promise((function(e) {
                        Promise.resolve().then((function() {
                            a = void 0,
                            e(o())
                        }
                        ))
                    }
                    ))),
                    a
                }
                ),
                destroy: function() {
                    f(),
                    u = !0
                }
            };
            if (!G(e, t))
                return d;
            function f() {
                c.forEach((function(e) {
                    return e()
                }
                )),
                c = []
            }
            return d.setOptions(r).then((function(e) {
                !u && r.onFirstUpdate && r.onFirstUpdate(e)
            }
            )),
            d
        }
    }
    var Z = {
        passive: !0
    }
      , ee = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(e) {
            var n = e.state
              , r = e.instance
              , i = e.options
              , o = i.scroll
              , s = void 0 === o || o
              , a = i.resize
              , l = void 0 === a || a
              , c = t(n.elements.popper)
              , u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
            return s && u.forEach((function(e) {
                e.addEventListener("scroll", r.update, Z)
            }
            )),
            l && c.addEventListener("resize", r.update, Z),
            function() {
                s && u.forEach((function(e) {
                    e.removeEventListener("scroll", r.update, Z)
                }
                )),
                l && c.removeEventListener("resize", r.update, Z)
            }
        },
        data: {}
    }
      , te = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(e) {
            var t = e.state
              , n = e.name;
            t.modifiersData[n] = V({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement
            })
        },
        data: {}
    }
      , ne = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function re(e) {
        var n, r = e.popper, i = e.popperRect, o = e.placement, s = e.variation, l = e.offsets, c = e.position, u = e.gpuAcceleration, d = e.adaptive, f = e.roundOffsets, p = e.isFixed, m = l.x, v = void 0 === m ? 0 : m, y = l.y, b = void 0 === y ? 0 : y, _ = "function" == typeof f ? f({
            x: v,
            y: b
        }) : {
            x: v,
            y: b
        };
        v = _.x,
        b = _.y;
        var w = l.hasOwnProperty("x")
          , x = l.hasOwnProperty("y")
          , S = E
          , k = C
          , L = window;
        if (d) {
            var I = T(r)
              , j = "clientHeight"
              , P = "clientWidth";
            I === t(r) && "static" !== g(I = h(r)).position && "absolute" === c && (j = "scrollHeight",
            P = "scrollWidth"),
            (o === C || (o === E || o === A) && s === O) && (k = D,
            b -= (p && I === L && L.visualViewport ? L.visualViewport.height : I[j]) - i.height,
            b *= u ? 1 : -1),
            o !== E && (o !== C && o !== D || s !== O) || (S = A,
            v -= (p && I === L && L.visualViewport ? L.visualViewport.width : I[P]) - i.width,
            v *= u ? 1 : -1)
        }
        var N, F = Object.assign({
            position: c
        }, d && ne), H = !0 === f ? function(e, t) {
            var n = e.x
              , r = e.y
              , i = t.devicePixelRatio || 1;
            return {
                x: a(n * i) / i || 0,
                y: a(r * i) / i || 0
            }
        }({
            x: v,
            y: b
        }, t(r)) : {
            x: v,
            y: b
        };
        return v = H.x,
        b = H.y,
        u ? Object.assign({}, F, ((N = {})[k] = x ? "0" : "",
        N[S] = w ? "0" : "",
        N.transform = (L.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + b + "px)" : "translate3d(" + v + "px, " + b + "px, 0)",
        N)) : Object.assign({}, F, ((n = {})[k] = x ? b + "px" : "",
        n[S] = w ? v + "px" : "",
        n.transform = "",
        n))
    }
    var ie = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(e) {
            var t = e.state
              , n = e.options
              , r = n.gpuAcceleration
              , i = void 0 === r || r
              , o = n.adaptive
              , s = void 0 === o || o
              , a = n.roundOffsets
              , l = void 0 === a || a
              , c = {
                placement: B(t.placement),
                variation: z(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: i,
                isFixed: "fixed" === t.options.strategy
            };
            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, re(Object.assign({}, c, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: s,
                roundOffsets: l
            })))),
            null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, re(Object.assign({}, c, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))),
            t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement
            })
        },
        data: {}
    }
      , oe = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(e) {
            var t = e.state;
            Object.keys(t.elements).forEach((function(e) {
                var n = t.styles[e] || {}
                  , i = t.attributes[e] || {}
                  , o = t.elements[e];
                r(o) && f(o) && (Object.assign(o.style, n),
                Object.keys(i).forEach((function(e) {
                    var t = i[e];
                    !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                }
                )))
            }
            ))
        },
        effect: function(e) {
            var t = e.state
              , n = {
                popper: {
                    position: t.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(t.elements.popper.style, n.popper),
            t.styles = n,
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function() {
                Object.keys(t.elements).forEach((function(e) {
                    var i = t.elements[e]
                      , o = t.attributes[e] || {}
                      , s = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                        return e[t] = "",
                        e
                    }
                    ), {});
                    r(i) && f(i) && (Object.assign(i.style, s),
                    Object.keys(o).forEach((function(e) {
                        i.removeAttribute(e)
                    }
                    )))
                }
                ))
            }
        },
        requires: ["computeStyles"]
    }
      , se = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(e) {
            var t = e.state
              , n = e.options
              , r = e.name
              , i = n.offset
              , o = void 0 === i ? [0, 0] : i
              , s = F.reduce((function(e, n) {
                return e[n] = function(e, t, n) {
                    var r = B(e)
                      , i = [E, C].indexOf(r) >= 0 ? -1 : 1
                      , o = "function" == typeof n ? n(Object.assign({}, t, {
                        placement: e
                    })) : n
                      , s = o[0]
                      , a = o[1];
                    return s = s || 0,
                    a = (a || 0) * i,
                    [E, A].indexOf(r) >= 0 ? {
                        x: a,
                        y: s
                    } : {
                        x: s,
                        y: a
                    }
                }(n, t.rects, o),
                e
            }
            ), {})
              , a = s[t.placement]
              , l = a.x
              , c = a.y;
            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l,
            t.modifiersData.popperOffsets.y += c),
            t.modifiersData[r] = s
        }
    }
      , ae = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function le(e) {
        return e.replace(/left|right|bottom|top/g, (function(e) {
            return ae[e]
        }
        ))
    }
    var ce = {
        start: "end",
        end: "start"
    };
    function ue(e) {
        return e.replace(/start|end/g, (function(e) {
            return ce[e]
        }
        ))
    }
    function de(e, t) {
        void 0 === t && (t = {});
        var n = t
          , r = n.placement
          , i = n.boundary
          , o = n.rootBoundary
          , s = n.padding
          , a = n.flipVariations
          , l = n.allowedAutoPlacements
          , c = void 0 === l ? F : l
          , u = z(r)
          , d = u ? a ? N : N.filter((function(e) {
            return z(e) === u
        }
        )) : L
          , f = d.filter((function(e) {
            return c.indexOf(e) >= 0
        }
        ));
        0 === f.length && (f = d);
        var h = f.reduce((function(t, n) {
            return t[n] = Y(e, {
                placement: n,
                boundary: i,
                rootBoundary: o,
                padding: s
            })[B(n)],
            t
        }
        ), {});
        return Object.keys(h).sort((function(e, t) {
            return h[e] - h[t]
        }
        ))
    }
    var fe = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t = e.state
              , n = e.options
              , r = e.name;
            if (!t.modifiersData[r]._skip) {
                for (var i = n.mainAxis, o = void 0 === i || i, s = n.altAxis, a = void 0 === s || s, l = n.fallbackPlacements, c = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, h = n.flipVariations, p = void 0 === h || h, g = n.allowedAutoPlacements, m = t.options.placement, v = B(m), y = l || (v !== m && p ? function(e) {
                    if (B(e) === k)
                        return [];
                    var t = le(e);
                    return [ue(e), t, ue(t)]
                }(m) : [le(m)]), b = [m].concat(y).reduce((function(e, n) {
                    return e.concat(B(n) === k ? de(t, {
                        placement: n,
                        boundary: u,
                        rootBoundary: d,
                        padding: c,
                        flipVariations: p,
                        allowedAutoPlacements: g
                    }) : n)
                }
                ), []), _ = t.rects.reference, w = t.rects.popper, x = new Map, S = !0, T = b[0], L = 0; L < b.length; L++) {
                    var O = b[L]
                      , j = B(O)
                      , P = z(O) === I
                      , N = [C, D].indexOf(j) >= 0
                      , F = N ? "width" : "height"
                      , H = Y(t, {
                        placement: O,
                        boundary: u,
                        rootBoundary: d,
                        altBoundary: f,
                        padding: c
                    })
                      , R = N ? P ? A : E : P ? D : C;
                    _[F] > w[F] && (R = le(R));
                    var M = le(R)
                      , $ = [];
                    if (o && $.push(H[j] <= 0),
                    a && $.push(H[R] <= 0, H[M] <= 0),
                    $.every((function(e) {
                        return e
                    }
                    ))) {
                        T = O,
                        S = !1;
                        break
                    }
                    x.set(O, $)
                }
                if (S)
                    for (var W = function(e) {
                        var t = b.find((function(t) {
                            var n = x.get(t);
                            if (n)
                                return n.slice(0, e).every((function(e) {
                                    return e
                                }
                                ))
                        }
                        ));
                        if (t)
                            return T = t,
                            "break"
                    }, q = p ? 3 : 1; q > 0 && "break" !== W(q); q--)
                        ;
                t.placement !== T && (t.modifiersData[r]._skip = !0,
                t.placement = T,
                t.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };
    function he(e, t, n) {
        return o(e, s(t, n))
    }
    var pe = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t = e.state
              , n = e.options
              , r = e.name
              , i = n.mainAxis
              , a = void 0 === i || i
              , l = n.altAxis
              , c = void 0 !== l && l
              , u = n.boundary
              , d = n.rootBoundary
              , f = n.altBoundary
              , h = n.padding
              , p = n.tether
              , g = void 0 === p || p
              , m = n.tetherOffset
              , v = void 0 === m ? 0 : m
              , b = Y(t, {
                boundary: u,
                rootBoundary: d,
                padding: h,
                altBoundary: f
            })
              , _ = B(t.placement)
              , w = z(t.placement)
              , x = !w
              , S = U(_)
              , k = "x" === S ? "y" : "x"
              , L = t.modifiersData.popperOffsets
              , O = t.rects.reference
              , j = t.rects.popper
              , P = "function" == typeof v ? v(Object.assign({}, t.rects, {
                placement: t.placement
            })) : v
              , N = "number" == typeof P ? {
                mainAxis: P,
                altAxis: P
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, P)
              , F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null
              , H = {
                x: 0,
                y: 0
            };
            if (L) {
                if (a) {
                    var R, M = "y" === S ? C : E, $ = "y" === S ? D : A, W = "y" === S ? "height" : "width", q = L[S], V = q + b[M], X = q - b[$], J = g ? -j[W] / 2 : 0, Q = w === I ? O[W] : j[W], G = w === I ? -j[W] : -O[W], K = t.elements.arrow, Z = g && K ? y(K) : {
                        width: 0,
                        height: 0
                    }, ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, te = ee[M], ne = ee[$], re = he(0, O[W], Z[W]), ie = x ? O[W] / 2 - J - re - te - N.mainAxis : Q - re - te - N.mainAxis, oe = x ? -O[W] / 2 + J + re + ne + N.mainAxis : G + re + ne + N.mainAxis, se = t.elements.arrow && T(t.elements.arrow), ae = se ? "y" === S ? se.clientTop || 0 : se.clientLeft || 0 : 0, le = null != (R = null == F ? void 0 : F[S]) ? R : 0, ce = q + oe - le, ue = he(g ? s(V, q + ie - le - ae) : V, q, g ? o(X, ce) : X);
                    L[S] = ue,
                    H[S] = ue - q
                }
                if (c) {
                    var de, fe = "x" === S ? C : E, pe = "x" === S ? D : A, ge = L[k], me = "y" === k ? "height" : "width", ve = ge + b[fe], ye = ge - b[pe], be = -1 !== [C, E].indexOf(_), _e = null != (de = null == F ? void 0 : F[k]) ? de : 0, we = be ? ve : ge - O[me] - j[me] - _e + N.altAxis, xe = be ? ge + O[me] + j[me] - _e - N.altAxis : ye, Se = g && be ? function(e, t, n) {
                        var r = he(e, t, n);
                        return r > n ? n : r
                    }(we, ge, xe) : he(g ? we : ve, ge, g ? xe : ye);
                    L[k] = Se,
                    H[k] = Se - ge
                }
                t.modifiersData[r] = H
            }
        },
        requiresIfExists: ["offset"]
    }
      , ge = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t, n = e.state, r = e.name, i = e.options, o = n.elements.arrow, s = n.modifiersData.popperOffsets, a = B(n.placement), l = U(a), c = [E, A].indexOf(a) >= 0 ? "height" : "width";
            if (o && s) {
                var u = function(e, t) {
                    return X("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                        placement: t.placement
                    })) : e) ? e : J(e, L))
                }(i.padding, n)
                  , d = y(o)
                  , f = "y" === l ? C : E
                  , h = "y" === l ? D : A
                  , p = n.rects.reference[c] + n.rects.reference[l] - s[l] - n.rects.popper[c]
                  , g = s[l] - n.rects.reference[l]
                  , m = T(o)
                  , v = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0
                  , b = p / 2 - g / 2
                  , _ = u[f]
                  , w = v - d[c] - u[h]
                  , x = v / 2 - d[c] / 2 + b
                  , S = he(_, x, w)
                  , k = l;
                n.modifiersData[r] = ((t = {})[k] = S,
                t.centerOffset = S - x,
                t)
            }
        },
        effect: function(e) {
            var t = e.state
              , n = e.options.element
              , r = void 0 === n ? "[data-popper-arrow]" : n;
            null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && M(t.elements.popper, r) && (t.elements.arrow = r)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };
    function me(e, t, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }),
        {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
        }
    }
    function ve(e) {
        return [C, A, D, E].some((function(t) {
            return e[t] >= 0
        }
        ))
    }
    var ye = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(e) {
            var t = e.state
              , n = e.name
              , r = t.rects.reference
              , i = t.rects.popper
              , o = t.modifiersData.preventOverflow
              , s = Y(t, {
                elementContext: "reference"
            })
              , a = Y(t, {
                altBoundary: !0
            })
              , l = me(s, r)
              , c = me(a, i, o)
              , u = ve(l)
              , d = ve(c);
            t.modifiersData[n] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: u,
                hasPopperEscaped: d
            },
            t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": u,
                "data-popper-escaped": d
            })
        }
    }
      , be = K({
        defaultModifiers: [ee, te, ie, oe]
    })
      , _e = [ee, te, ie, oe, se, fe, pe, ge, ye]
      , we = K({
        defaultModifiers: _e
    });
    e.applyStyles = oe,
    e.arrow = ge,
    e.computeStyles = ie,
    e.createPopper = we,
    e.createPopperLite = be,
    e.defaultModifiers = _e,
    e.detectOverflow = Y,
    e.eventListeners = ee,
    e.flip = fe,
    e.hide = ye,
    e.offset = se,
    e.popperGenerator = K,
    e.popperOffsets = te,
    e.preventOverflow = pe,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}
)),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t(e.Popper)
}(this, (function(e) {
    "use strict";
    const t = function(e) {
        const t = Object.create(null, {
            [Symbol.toStringTag]: {
                value: "Module"
            }
        });
        if (e)
            for (const n in e)
                if ("default" !== n) {
                    const r = Object.getOwnPropertyDescriptor(e, n);
                    Object.defineProperty(t, n, r.get ? r : {
                        enumerable: !0,
                        get: ()=>e[n]
                    })
                }
        return t.default = e,
        Object.freeze(t)
    }(e)
      , n = new Map
      , r = {
        set(e, t, r) {
            n.has(e) || n.set(e, new Map);
            const i = n.get(e);
            i.has(t) || 0 === i.size ? i.set(t, r) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
        },
        get: (e,t)=>n.has(e) && n.get(e).get(t) || null,
        remove(e, t) {
            if (!n.has(e))
                return;
            const r = n.get(e);
            r.delete(t),
            0 === r.size && n.delete(e)
        }
    }
      , i = "transitionend"
      , o = e=>(e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, ((e,t)=>`#${CSS.escape(t)}`))),
    e)
      , s = e=>{
        e.dispatchEvent(new Event(i))
    }
      , a = e=>!(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]),
    void 0 !== e.nodeType)
      , l = e=>a(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? document.querySelector(o(e)) : null
      , c = e=>{
        if (!a(e) || 0 === e.getClientRects().length)
            return !1;
        const t = "visible" === getComputedStyle(e).getPropertyValue("visibility")
          , n = e.closest("details:not([open])");
        if (!n)
            return t;
        if (n !== e) {
            const t = e.closest("summary");
            if (t && t.parentNode !== n)
                return !1;
            if (null === t)
                return !1
        }
        return t
    }
      , u = e=>!e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled"))
      , d = e=>{
        if (!document.documentElement.attachShadow)
            return null;
        if ("function" == typeof e.getRootNode) {
            const t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        }
        return e instanceof ShadowRoot ? e : e.parentNode ? d(e.parentNode) : null
    }
      , f = ()=>{}
      , h = e=>{
        e.offsetHeight
    }
      , p = ()=>window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null
      , g = []
      , m = ()=>"rtl" === document.documentElement.dir
      , v = e=>{
        var t;
        t = ()=>{
            const t = p();
            if (t) {
                const n = e.NAME
                  , r = t.fn[n];
                t.fn[n] = e.jQueryInterface,
                t.fn[n].Constructor = e,
                t.fn[n].noConflict = ()=>(t.fn[n] = r,
                e.jQueryInterface)
            }
        }
        ,
        "loading" === document.readyState ? (g.length || document.addEventListener("DOMContentLoaded", (()=>{
            for (const e of g)
                e()
        }
        )),
        g.push(t)) : t()
    }
      , y = (e,t=[],n=e)=>"function" == typeof e ? e(...t) : n
      , b = (e,t,n=!0)=>{
        if (!n)
            return void y(e);
        const r = (e=>{
            if (!e)
                return 0;
            let {transitionDuration: t, transitionDelay: n} = window.getComputedStyle(e);
            const r = Number.parseFloat(t)
              , i = Number.parseFloat(n);
            return r || i ? (t = t.split(",")[0],
            n = n.split(",")[0],
            1e3 * (Number.parseFloat(t) + Number.parseFloat(n))) : 0
        }
        )(t) + 5;
        let o = !1;
        const a = ({target: n})=>{
            n === t && (o = !0,
            t.removeEventListener(i, a),
            y(e))
        }
        ;
        t.addEventListener(i, a),
        setTimeout((()=>{
            o || s(t)
        }
        ), r)
    }
      , _ = (e,t,n,r)=>{
        const i = e.length;
        let o = e.indexOf(t);
        return -1 === o ? !n && r ? e[i - 1] : e[0] : (o += n ? 1 : -1,
        r && (o = (o + i) % i),
        e[Math.max(0, Math.min(o, i - 1))])
    }
      , w = /[^.]*(?=\..*)\.|.*/
      , x = /\..*/
      , S = /::\d+$/
      , T = {};
    let C = 1;
    const D = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , A = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function E(e, t) {
        return t && `${t}::${C++}` || e.uidEvent || C++
    }
    function k(e) {
        const t = E(e);
        return e.uidEvent = t,
        T[t] = T[t] || {},
        T[t]
    }
    function L(e, t, n=null) {
        return Object.values(e).find((e=>e.callable === t && e.delegationSelector === n))
    }
    function I(e, t, n) {
        const r = "string" == typeof t
          , i = r ? n : t || n;
        let o = N(e);
        return A.has(o) || (o = e),
        [r, i, o]
    }
    function O(e, t, n, r, i) {
        if ("string" != typeof t || !e)
            return;
        let[o,s,a] = I(t, n, r);
        if (t in D) {
            const e = e=>function(t) {
                if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget))
                    return e.call(this, t)
            }
            ;
            s = e(s)
        }
        const l = k(e)
          , c = l[a] || (l[a] = {})
          , u = L(c, s, o ? n : null);
        if (u)
            return void (u.oneOff = u.oneOff && i);
        const d = E(s, t.replace(w, ""))
          , f = o ? function(e, t, n) {
            return function r(i) {
                const o = e.querySelectorAll(t);
                for (let {target: s} = i; s && s !== this; s = s.parentNode)
                    for (const a of o)
                        if (a === s)
                            return H(i, {
                                delegateTarget: s
                            }),
                            r.oneOff && F.off(e, i.type, t, n),
                            n.apply(s, [i])
            }
        }(e, n, s) : function(e, t) {
            return function n(r) {
                return H(r, {
                    delegateTarget: e
                }),
                n.oneOff && F.off(e, r.type, t),
                t.apply(e, [r])
            }
        }(e, s);
        f.delegationSelector = o ? n : null,
        f.callable = s,
        f.oneOff = i,
        f.uidEvent = d,
        c[d] = f,
        e.addEventListener(a, f, o)
    }
    function j(e, t, n, r, i) {
        const o = L(t[n], r, i);
        o && (e.removeEventListener(n, o, Boolean(i)),
        delete t[n][o.uidEvent])
    }
    function P(e, t, n, r) {
        const i = t[n] || {};
        for (const [o,s] of Object.entries(i))
            o.includes(r) && j(e, t, n, s.callable, s.delegationSelector)
    }
    function N(e) {
        return e = e.replace(x, ""),
        D[e] || e
    }
    const F = {
        on(e, t, n, r) {
            O(e, t, n, r, !1)
        },
        one(e, t, n, r) {
            O(e, t, n, r, !0)
        },
        off(e, t, n, r) {
            if ("string" != typeof t || !e)
                return;
            const [i,o,s] = I(t, n, r)
              , a = s !== t
              , l = k(e)
              , c = l[s] || {}
              , u = t.startsWith(".");
            if (void 0 === o) {
                if (u)
                    for (const n of Object.keys(l))
                        P(e, l, n, t.slice(1));
                for (const [n,r] of Object.entries(c)) {
                    const i = n.replace(S, "");
                    a && !t.includes(i) || j(e, l, s, r.callable, r.delegationSelector)
                }
            } else {
                if (!Object.keys(c).length)
                    return;
                j(e, l, s, o, i ? n : null)
            }
        },
        trigger(e, t, n) {
            if ("string" != typeof t || !e)
                return null;
            const r = p();
            let i = null
              , o = !0
              , s = !0
              , a = !1;
            t !== N(t) && r && (i = r.Event(t, n),
            r(e).trigger(i),
            o = !i.isPropagationStopped(),
            s = !i.isImmediatePropagationStopped(),
            a = i.isDefaultPrevented());
            const l = H(new Event(t,{
                bubbles: o,
                cancelable: !0
            }), n);
            return a && l.preventDefault(),
            s && e.dispatchEvent(l),
            l.defaultPrevented && i && i.preventDefault(),
            l
        }
    };
    function H(e, t={}) {
        for (const [n,r] of Object.entries(t))
            try {
                e[n] = r
            } catch (t) {
                Object.defineProperty(e, n, {
                    configurable: !0,
                    get: ()=>r
                })
            }
        return e
    }
    function R(e) {
        if ("true" === e)
            return !0;
        if ("false" === e)
            return !1;
        if (e === Number(e).toString())
            return Number(e);
        if ("" === e || "null" === e)
            return null;
        if ("string" != typeof e)
            return e;
        try {
            return JSON.parse(decodeURIComponent(e))
        } catch (t) {
            return e
        }
    }
    function M(e) {
        return e.replace(/[A-Z]/g, (e=>`-${e.toLowerCase()}`))
    }
    const $ = {
        setDataAttribute(e, t, n) {
            e.setAttribute(`data-bs-${M(t)}`, n)
        },
        removeDataAttribute(e, t) {
            e.removeAttribute(`data-bs-${M(t)}`)
        },
        getDataAttributes(e) {
            if (!e)
                return {};
            const t = {}
              , n = Object.keys(e.dataset).filter((e=>e.startsWith("bs") && !e.startsWith("bsConfig")));
            for (const r of n) {
                let n = r.replace(/^bs/, "");
                n = n.charAt(0).toLowerCase() + n.slice(1, n.length),
                t[n] = R(e.dataset[r])
            }
            return t
        },
        getDataAttribute: (e,t)=>R(e.getAttribute(`data-bs-${M(t)}`))
    };
    class W {
        static get Default() {
            return {}
        }
        static get DefaultType() {
            return {}
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        _getConfig(e) {
            return e = this._mergeConfigObj(e),
            e = this._configAfterMerge(e),
            this._typeCheckConfig(e),
            e
        }
        _configAfterMerge(e) {
            return e
        }
        _mergeConfigObj(e, t) {
            const n = a(t) ? $.getDataAttribute(t, "config") : {};
            return {
                ...this.constructor.Default,
                ..."object" == typeof n ? n : {},
                ...a(t) ? $.getDataAttributes(t) : {},
                ..."object" == typeof e ? e : {}
            }
        }
        _typeCheckConfig(e, t=this.constructor.DefaultType) {
            for (const [r,i] of Object.entries(t)) {
                const t = e[r]
                  , o = a(t) ? "element" : null == (n = t) ? `${n}` : Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(i).test(o))
                    throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${i}".`)
            }
            var n
        }
    }
    class q extends W {
        constructor(e, t) {
            super(),
            (e = l(e)) && (this._element = e,
            this._config = this._getConfig(t),
            r.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            r.remove(this._element, this.constructor.DATA_KEY),
            F.off(this._element, this.constructor.EVENT_KEY);
            for (const e of Object.getOwnPropertyNames(this))
                this[e] = null
        }
        _queueCallback(e, t, n=!0) {
            b(e, t, n)
        }
        _getConfig(e) {
            return e = this._mergeConfigObj(e, this._element),
            e = this._configAfterMerge(e),
            this._typeCheckConfig(e),
            e
        }
        static getInstance(e) {
            return r.get(l(e), this.DATA_KEY)
        }
        static getOrCreateInstance(e, t={}) {
            return this.getInstance(e) || new this(e,"object" == typeof t ? t : null)
        }
        static get VERSION() {
            return "5.3.2"
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
        static eventName(e) {
            return `${e}${this.EVENT_KEY}`
        }
    }
    const B = e=>{
        let t = e.getAttribute("data-bs-target");
        if (!t || "#" === t) {
            let n = e.getAttribute("href");
            if (!n || !n.includes("#") && !n.startsWith("."))
                return null;
            n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`),
            t = n && "#" !== n ? o(n.trim()) : null
        }
        return t
    }
      , z = {
        find: (e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t, e)),
        findOne: (e,t=document.documentElement)=>Element.prototype.querySelector.call(t, e),
        children: (e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),
        parents(e, t) {
            const n = [];
            let r = e.parentNode.closest(t);
            for (; r; )
                n.push(r),
                r = r.parentNode.closest(t);
            return n
        },
        prev(e, t) {
            let n = e.previousElementSibling;
            for (; n; ) {
                if (n.matches(t))
                    return [n];
                n = n.previousElementSibling
            }
            return []
        },
        next(e, t) {
            let n = e.nextElementSibling;
            for (; n; ) {
                if (n.matches(t))
                    return [n];
                n = n.nextElementSibling
            }
            return []
        },
        focusableChildren(e) {
            const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(",");
            return this.find(t, e).filter((e=>!u(e) && c(e)))
        },
        getSelectorFromElement(e) {
            const t = B(e);
            return t && z.findOne(t) ? t : null
        },
        getElementFromSelector(e) {
            const t = B(e);
            return t ? z.findOne(t) : null
        },
        getMultipleElementsFromSelector(e) {
            const t = B(e);
            return t ? z.find(t) : []
        }
    }
      , U = (e,t="hide")=>{
        const n = `click.dismiss ${e.EVENT_KEY}`
          , r = e.NAME;
        F.on(document, n, `[data-bs-dismiss="${r}"]`, (function(n) {
            if (["A", "AREA"].includes(this.tagName) && n.preventDefault(),
            u(this))
                return;
            const i = z.getElementFromSelector(this) || this.closest(`.${r}`);
            e.getOrCreateInstance(i)[t]()
        }
        ))
    }
      , V = ".bs.alert"
      , X = `close ${V}`
      , J = `closed ${V}`;
    class Y extends q {
        static get NAME() {
            return "alert"
        }
        close() {
            if (F.trigger(this._element, X).defaultPrevented)
                return;
            this._element.classList.remove("show");
            const e = this._element.classList.contains("fade");
            this._queueCallback((()=>this._destroyElement()), this._element, e)
        }
        _destroyElement() {
            this._element.remove(),
            F.trigger(this._element, J),
            this.dispose()
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = Y.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                        throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            }
            ))
        }
    }
    U(Y, "close"),
    v(Y);
    const Q = '[data-bs-toggle="button"]';
    class G extends q {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = G.getOrCreateInstance(this);
                "toggle" === e && t[e]()
            }
            ))
        }
    }
    F.on(document, "click.bs.button.data-api", Q, (e=>{
        e.preventDefault();
        const t = e.target.closest(Q);
        G.getOrCreateInstance(t).toggle()
    }
    )),
    v(G);
    const K = ".bs.swipe"
      , Z = `touchstart ${K}`
      , ee = `touchmove ${K}`
      , te = `touchend ${K}`
      , ne = `pointerdown ${K}`
      , re = `pointerup ${K}`
      , ie = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
    }
      , oe = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
    };
    class se extends W {
        constructor(e, t) {
            super(),
            this._element = e,
            e && se.isSupported() && (this._config = this._getConfig(t),
            this._deltaX = 0,
            this._supportPointerEvents = Boolean(window.PointerEvent),
            this._initEvents())
        }
        static get Default() {
            return ie
        }
        static get DefaultType() {
            return oe
        }
        static get NAME() {
            return "swipe"
        }
        dispose() {
            F.off(this._element, K)
        }
        _start(e) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX) : this._deltaX = e.touches[0].clientX
        }
        _end(e) {
            this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX),
            this._handleSwipe(),
            y(this._config.endCallback)
        }
        _move(e) {
            this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX
        }
        _handleSwipe() {
            const e = Math.abs(this._deltaX);
            if (e <= 40)
                return;
            const t = e / this._deltaX;
            this._deltaX = 0,
            t && y(t > 0 ? this._config.rightCallback : this._config.leftCallback)
        }
        _initEvents() {
            this._supportPointerEvents ? (F.on(this._element, ne, (e=>this._start(e))),
            F.on(this._element, re, (e=>this._end(e))),
            this._element.classList.add("pointer-event")) : (F.on(this._element, Z, (e=>this._start(e))),
            F.on(this._element, ee, (e=>this._move(e))),
            F.on(this._element, te, (e=>this._end(e))))
        }
        _eventIsPointerPenTouch(e) {
            return this._supportPointerEvents && ("pen" === e.pointerType || "touch" === e.pointerType)
        }
        static isSupported() {
            return "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0
        }
    }
    const ae = ".bs.carousel"
      , le = ".data-api"
      , ce = "next"
      , ue = "prev"
      , de = "left"
      , fe = "right"
      , he = `slide ${ae}`
      , pe = `slid ${ae}`
      , ge = `keydown ${ae}`
      , me = `mouseenter ${ae}`
      , ve = `mouseleave ${ae}`
      , ye = `dragstart ${ae}`
      , be = `load ${ae}${le}`
      , _e = `click ${ae}${le}`
      , we = "carousel"
      , xe = "active"
      , Se = ".active"
      , Te = ".carousel-item"
      , Ce = Se + Te
      , De = {
        ArrowLeft: fe,
        ArrowRight: de
    }
      , Ae = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0
    }
      , Ee = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
    };
    class ke extends q {
        constructor(e, t) {
            super(e, t),
            this._interval = null,
            this._activeElement = null,
            this._isSliding = !1,
            this.touchTimeout = null,
            this._swipeHelper = null,
            this._indicatorsElement = z.findOne(".carousel-indicators", this._element),
            this._addEventListeners(),
            this._config.ride === we && this.cycle()
        }
        static get Default() {
            return Ae
        }
        static get DefaultType() {
            return Ee
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(ce)
        }
        nextWhenVisible() {
            !document.hidden && c(this._element) && this.next()
        }
        prev() {
            this._slide(ue)
        }
        pause() {
            this._isSliding && s(this._element),
            this._clearInterval()
        }
        cycle() {
            this._clearInterval(),
            this._updateInterval(),
            this._interval = setInterval((()=>this.nextWhenVisible()), this._config.interval)
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? F.one(this._element, pe, (()=>this.cycle())) : this.cycle())
        }
        to(e) {
            const t = this._getItems();
            if (e > t.length - 1 || e < 0)
                return;
            if (this._isSliding)
                return void F.one(this._element, pe, (()=>this.to(e)));
            const n = this._getItemIndex(this._getActive());
            if (n === e)
                return;
            const r = e > n ? ce : ue;
            this._slide(r, t[e])
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(),
            super.dispose()
        }
        _configAfterMerge(e) {
            return e.defaultInterval = e.interval,
            e
        }
        _addEventListeners() {
            this._config.keyboard && F.on(this._element, ge, (e=>this._keydown(e))),
            "hover" === this._config.pause && (F.on(this._element, me, (()=>this.pause())),
            F.on(this._element, ve, (()=>this._maybeEnableCycle()))),
            this._config.touch && se.isSupported() && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            for (const e of z.find(".carousel-item img", this._element))
                F.on(e, ye, (e=>e.preventDefault()));
            const e = {
                leftCallback: ()=>this._slide(this._directionToOrder(de)),
                rightCallback: ()=>this._slide(this._directionToOrder(fe)),
                endCallback: ()=>{
                    "hover" === this._config.pause && (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                    this.touchTimeout = setTimeout((()=>this._maybeEnableCycle()), 500 + this._config.interval))
                }
            };
            this._swipeHelper = new se(this._element,e)
        }
        _keydown(e) {
            if (/input|textarea/i.test(e.target.tagName))
                return;
            const t = De[e.key];
            t && (e.preventDefault(),
            this._slide(this._directionToOrder(t)))
        }
        _getItemIndex(e) {
            return this._getItems().indexOf(e)
        }
        _setActiveIndicatorElement(e) {
            if (!this._indicatorsElement)
                return;
            const t = z.findOne(Se, this._indicatorsElement);
            t.classList.remove(xe),
            t.removeAttribute("aria-current");
            const n = z.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
            n && (n.classList.add(xe),
            n.setAttribute("aria-current", "true"))
        }
        _updateInterval() {
            const e = this._activeElement || this._getActive();
            if (!e)
                return;
            const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
            this._config.interval = t || this._config.defaultInterval
        }
        _slide(e, t=null) {
            if (this._isSliding)
                return;
            const n = this._getActive()
              , r = e === ce
              , i = t || _(this._getItems(), n, r, this._config.wrap);
            if (i === n)
                return;
            const o = this._getItemIndex(i)
              , s = t=>F.trigger(this._element, t, {
                relatedTarget: i,
                direction: this._orderToDirection(e),
                from: this._getItemIndex(n),
                to: o
            });
            if (s(he).defaultPrevented)
                return;
            if (!n || !i)
                return;
            const a = Boolean(this._interval);
            this.pause(),
            this._isSliding = !0,
            this._setActiveIndicatorElement(o),
            this._activeElement = i;
            const l = r ? "carousel-item-start" : "carousel-item-end"
              , c = r ? "carousel-item-next" : "carousel-item-prev";
            i.classList.add(c),
            h(i),
            n.classList.add(l),
            i.classList.add(l),
            this._queueCallback((()=>{
                i.classList.remove(l, c),
                i.classList.add(xe),
                n.classList.remove(xe, c, l),
                this._isSliding = !1,
                s(pe)
            }
            ), n, this._isAnimated()),
            a && this.cycle()
        }
        _isAnimated() {
            return this._element.classList.contains("slide")
        }
        _getActive() {
            return z.findOne(Ce, this._element)
        }
        _getItems() {
            return z.find(Te, this._element)
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval),
            this._interval = null)
        }
        _directionToOrder(e) {
            return m() ? e === de ? ue : ce : e === de ? ce : ue
        }
        _orderToDirection(e) {
            return m() ? e === ue ? de : fe : e === ue ? fe : de
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = ke.getOrCreateInstance(this, e);
                if ("number" != typeof e) {
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                            throw new TypeError(`No method named "${e}"`);
                        t[e]()
                    }
                } else
                    t.to(e)
            }
            ))
        }
    }
    F.on(document, _e, "[data-bs-slide], [data-bs-slide-to]", (function(e) {
        const t = z.getElementFromSelector(this);
        if (!t || !t.classList.contains(we))
            return;
        e.preventDefault();
        const n = ke.getOrCreateInstance(t)
          , r = this.getAttribute("data-bs-slide-to");
        return r ? (n.to(r),
        void n._maybeEnableCycle()) : "next" === $.getDataAttribute(this, "slide") ? (n.next(),
        void n._maybeEnableCycle()) : (n.prev(),
        void n._maybeEnableCycle())
    }
    )),
    F.on(window, be, (()=>{
        const e = z.find('[data-bs-ride="carousel"]');
        for (const t of e)
            ke.getOrCreateInstance(t)
    }
    )),
    v(ke);
    const Le = ".bs.collapse"
      , Ie = `show ${Le}`
      , Oe = `shown ${Le}`
      , je = `hide ${Le}`
      , Pe = `hidden ${Le}`
      , Ne = `click ${Le}.data-api`
      , Fe = "show"
      , He = "collapse"
      , Re = "collapsing"
      , Me = `:scope .${He} .${He}`
      , $e = '[data-bs-toggle="collapse"]'
      , We = {
        parent: null,
        toggle: !0
    }
      , qe = {
        parent: "(null|element)",
        toggle: "boolean"
    };
    class Be extends q {
        constructor(e, t) {
            super(e, t),
            this._isTransitioning = !1,
            this._triggerArray = [];
            const n = z.find($e);
            for (const e of n) {
                const t = z.getSelectorFromElement(e)
                  , n = z.find(t).filter((e=>e === this._element));
                null !== t && n.length && this._triggerArray.push(e)
            }
            this._initializeChildren(),
            this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
            this._config.toggle && this.toggle()
        }
        static get Default() {
            return We
        }
        static get DefaultType() {
            return qe
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown())
                return;
            let e = [];
            if (this._config.parent && (e = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((e=>e !== this._element)).map((e=>Be.getOrCreateInstance(e, {
                toggle: !1
            })))),
            e.length && e[0]._isTransitioning)
                return;
            if (F.trigger(this._element, Ie).defaultPrevented)
                return;
            for (const t of e)
                t.hide();
            const t = this._getDimension();
            this._element.classList.remove(He),
            this._element.classList.add(Re),
            this._element.style[t] = 0,
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            this._isTransitioning = !0;
            const n = `scroll ${t[0].toUpperCase() + t.slice(1)}`;
            this._queueCallback((()=>{
                this._isTransitioning = !1,
                this._element.classList.remove(Re),
                this._element.classList.add(He, Fe),
                this._element.style[t] = "",
                F.trigger(this._element, Oe)
            }
            ), this._element, !0),
            this._element.style[t] = `${this._element[n]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown())
                return;
            if (F.trigger(this._element, je).defaultPrevented)
                return;
            const e = this._getDimension();
            this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`,
            h(this._element),
            this._element.classList.add(Re),
            this._element.classList.remove(He, Fe);
            for (const e of this._triggerArray) {
                const t = z.getElementFromSelector(e);
                t && !this._isShown(t) && this._addAriaAndCollapsedClass([e], !1)
            }
            this._isTransitioning = !0,
            this._element.style[e] = "",
            this._queueCallback((()=>{
                this._isTransitioning = !1,
                this._element.classList.remove(Re),
                this._element.classList.add(He),
                F.trigger(this._element, Pe)
            }
            ), this._element, !0)
        }
        _isShown(e=this._element) {
            return e.classList.contains(Fe)
        }
        _configAfterMerge(e) {
            return e.toggle = Boolean(e.toggle),
            e.parent = l(e.parent),
            e
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent)
                return;
            const e = this._getFirstLevelChildren($e);
            for (const t of e) {
                const e = z.getElementFromSelector(t);
                e && this._addAriaAndCollapsedClass([t], this._isShown(e))
            }
        }
        _getFirstLevelChildren(e) {
            const t = z.find(Me, this._config.parent);
            return z.find(e, this._config.parent).filter((e=>!t.includes(e)))
        }
        _addAriaAndCollapsedClass(e, t) {
            if (e.length)
                for (const n of e)
                    n.classList.toggle("collapsed", !t),
                    n.setAttribute("aria-expanded", t)
        }
        static jQueryInterface(e) {
            const t = {};
            return "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1),
            this.each((function() {
                const n = Be.getOrCreateInstance(this, t);
                if ("string" == typeof e) {
                    if (void 0 === n[e])
                        throw new TypeError(`No method named "${e}"`);
                    n[e]()
                }
            }
            ))
        }
    }
    F.on(document, Ne, $e, (function(e) {
        ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
        for (const e of z.getMultipleElementsFromSelector(this))
            Be.getOrCreateInstance(e, {
                toggle: !1
            }).toggle()
    }
    )),
    v(Be);
    const ze = "dropdown"
      , Ue = ".bs.dropdown"
      , Ve = ".data-api"
      , Xe = "ArrowUp"
      , Je = "ArrowDown"
      , Ye = `hide ${Ue}`
      , Qe = `hidden ${Ue}`
      , Ge = `show ${Ue}`
      , Ke = `shown ${Ue}`
      , Ze = `click ${Ue}${Ve}`
      , et = `keydown ${Ue}${Ve}`
      , tt = `keyup ${Ue}${Ve}`
      , nt = "show"
      , rt = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)'
      , it = `${rt}.${nt}`
      , ot = ".dropdown-menu"
      , st = m() ? "top-end" : "top-start"
      , at = m() ? "top-start" : "top-end"
      , lt = m() ? "bottom-end" : "bottom-start"
      , ct = m() ? "bottom-start" : "bottom-end"
      , ut = m() ? "left-start" : "right-start"
      , dt = m() ? "right-start" : "left-start"
      , ft = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle"
    }
      , ht = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
    };
    class pt extends q {
        constructor(e, t) {
            super(e, t),
            this._popper = null,
            this._parent = this._element.parentNode,
            this._menu = z.next(this._element, ot)[0] || z.prev(this._element, ot)[0] || z.findOne(ot, this._parent),
            this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return ft
        }
        static get DefaultType() {
            return ht
        }
        static get NAME() {
            return ze
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (u(this._element) || this._isShown())
                return;
            const e = {
                relatedTarget: this._element
            };
            if (!F.trigger(this._element, Ge, e).defaultPrevented) {
                if (this._createPopper(),
                "ontouchstart"in document.documentElement && !this._parent.closest(".navbar-nav"))
                    for (const e of [].concat(...document.body.children))
                        F.on(e, "mouseover", f);
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.add(nt),
                this._element.classList.add(nt),
                F.trigger(this._element, Ke, e)
            }
        }
        hide() {
            if (u(this._element) || !this._isShown())
                return;
            const e = {
                relatedTarget: this._element
            };
            this._completeHide(e)
        }
        dispose() {
            this._popper && this._popper.destroy(),
            super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        _completeHide(e) {
            if (!F.trigger(this._element, Ye, e).defaultPrevented) {
                if ("ontouchstart"in document.documentElement)
                    for (const e of [].concat(...document.body.children))
                        F.off(e, "mouseover", f);
                this._popper && this._popper.destroy(),
                this._menu.classList.remove(nt),
                this._element.classList.remove(nt),
                this._element.setAttribute("aria-expanded", "false"),
                $.removeDataAttribute(this._menu, "popper"),
                F.trigger(this._element, Qe, e)
            }
        }
        _getConfig(e) {
            if ("object" == typeof (e = super._getConfig(e)).reference && !a(e.reference) && "function" != typeof e.reference.getBoundingClientRect)
                throw new TypeError(`${ze.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return e
        }
        _createPopper() {
            if (void 0 === t)
                throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = this._parent : a(this._config.reference) ? e = l(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            const n = this._getPopperConfig();
            this._popper = t.createPopper(e, this._menu, n)
        }
        _isShown() {
            return this._menu.classList.contains(nt)
        }
        _getPlacement() {
            const e = this._parent;
            if (e.classList.contains("dropend"))
                return ut;
            if (e.classList.contains("dropstart"))
                return dt;
            if (e.classList.contains("dropup-center"))
                return "top";
            if (e.classList.contains("dropdown-center"))
                return "bottom";
            const t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return e.classList.contains("dropup") ? t ? at : st : t ? ct : lt
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {offset: e} = this._config;
            return "string" == typeof e ? e.split(",").map((e=>Number.parseInt(e, 10))) : "function" == typeof e ? t=>e(t, this._element) : e
        }
        _getPopperConfig() {
            const e = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return (this._inNavbar || "static" === this._config.display) && ($.setDataAttribute(this._menu, "popper", "static"),
            e.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            {
                ...e,
                ...y(this._config.popperConfig, [e])
            }
        }
        _selectMenuItem({key: e, target: t}) {
            const n = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((e=>c(e)));
            n.length && _(n, t, e === Je, !n.includes(t)).focus()
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = pt.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }
            ))
        }
        static clearMenus(e) {
            if (2 === e.button || "keyup" === e.type && "Tab" !== e.key)
                return;
            const t = z.find(it);
            for (const n of t) {
                const t = pt.getInstance(n);
                if (!t || !1 === t._config.autoClose)
                    continue;
                const r = e.composedPath()
                  , i = r.includes(t._menu);
                if (r.includes(t._element) || "inside" === t._config.autoClose && !i || "outside" === t._config.autoClose && i)
                    continue;
                if (t._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName)))
                    continue;
                const o = {
                    relatedTarget: t._element
                };
                "click" === e.type && (o.clickEvent = e),
                t._completeHide(o)
            }
        }
        static dataApiKeydownHandler(e) {
            const t = /input|textarea/i.test(e.target.tagName)
              , n = "Escape" === e.key
              , r = [Xe, Je].includes(e.key);
            if (!r && !n)
                return;
            if (t && !n)
                return;
            e.preventDefault();
            const i = this.matches(rt) ? this : z.prev(this, rt)[0] || z.next(this, rt)[0] || z.findOne(rt, e.delegateTarget.parentNode)
              , o = pt.getOrCreateInstance(i);
            if (r)
                return e.stopPropagation(),
                o.show(),
                void o._selectMenuItem(e);
            o._isShown() && (e.stopPropagation(),
            o.hide(),
            i.focus())
        }
    }
    F.on(document, et, rt, pt.dataApiKeydownHandler),
    F.on(document, et, ot, pt.dataApiKeydownHandler),
    F.on(document, Ze, pt.clearMenus),
    F.on(document, tt, pt.clearMenus),
    F.on(document, Ze, rt, (function(e) {
        e.preventDefault(),
        pt.getOrCreateInstance(this).toggle()
    }
    )),
    v(pt);
    const gt = "backdrop"
      , mt = "show"
      , vt = `mousedown.bs.${gt}`
      , yt = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body"
    }
      , bt = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
    };
    class _t extends W {
        constructor(e) {
            super(),
            this._config = this._getConfig(e),
            this._isAppended = !1,
            this._element = null
        }
        static get Default() {
            return yt
        }
        static get DefaultType() {
            return bt
        }
        static get NAME() {
            return gt
        }
        show(e) {
            if (!this._config.isVisible)
                return void y(e);
            this._append();
            const t = this._getElement();
            this._config.isAnimated && h(t),
            t.classList.add(mt),
            this._emulateAnimation((()=>{
                y(e)
            }
            ))
        }
        hide(e) {
            this._config.isVisible ? (this._getElement().classList.remove(mt),
            this._emulateAnimation((()=>{
                this.dispose(),
                y(e)
            }
            ))) : y(e)
        }
        dispose() {
            this._isAppended && (F.off(this._element, vt),
            this._element.remove(),
            this._isAppended = !1)
        }
        _getElement() {
            if (!this._element) {
                const e = document.createElement("div");
                e.className = this._config.className,
                this._config.isAnimated && e.classList.add("fade"),
                this._element = e
            }
            return this._element
        }
        _configAfterMerge(e) {
            return e.rootElement = l(e.rootElement),
            e
        }
        _append() {
            if (this._isAppended)
                return;
            const e = this._getElement();
            this._config.rootElement.append(e),
            F.on(e, vt, (()=>{
                y(this._config.clickCallback)
            }
            )),
            this._isAppended = !0
        }
        _emulateAnimation(e) {
            b(e, this._getElement(), this._config.isAnimated)
        }
    }
    const wt = ".bs.focustrap"
      , xt = `focusin ${wt}`
      , St = `keydown.tab ${wt}`
      , Tt = "backward"
      , Ct = {
        autofocus: !0,
        trapElement: null
    }
      , Dt = {
        autofocus: "boolean",
        trapElement: "element"
    };
    class At extends W {
        constructor(e) {
            super(),
            this._config = this._getConfig(e),
            this._isActive = !1,
            this._lastTabNavDirection = null
        }
        static get Default() {
            return Ct
        }
        static get DefaultType() {
            return Dt
        }
        static get NAME() {
            return "focustrap"
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(),
            F.off(document, wt),
            F.on(document, xt, (e=>this._handleFocusin(e))),
            F.on(document, St, (e=>this._handleKeydown(e))),
            this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1,
            F.off(document, wt))
        }
        _handleFocusin(e) {
            const {trapElement: t} = this._config;
            if (e.target === document || e.target === t || t.contains(e.target))
                return;
            const n = z.focusableChildren(t);
            0 === n.length ? t.focus() : this._lastTabNavDirection === Tt ? n[n.length - 1].focus() : n[0].focus()
        }
        _handleKeydown(e) {
            "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? Tt : "forward")
        }
    }
    const Et = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , kt = ".sticky-top"
      , Lt = "padding-right"
      , It = "margin-right";
    class Ot {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const e = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - e)
        }
        hide() {
            const e = this.getWidth();
            this._disableOverFlow(),
            this._setElementAttributes(this._element, Lt, (t=>t + e)),
            this._setElementAttributes(Et, Lt, (t=>t + e)),
            this._setElementAttributes(kt, It, (t=>t - e))
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, Lt),
            this._resetElementAttributes(Et, Lt),
            this._resetElementAttributes(kt, It)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
            this._element.style.overflow = "hidden"
        }
        _setElementAttributes(e, t, n) {
            const r = this.getWidth();
            this._applyManipulationCallback(e, (e=>{
                if (e !== this._element && window.innerWidth > e.clientWidth + r)
                    return;
                this._saveInitialAttribute(e, t);
                const i = window.getComputedStyle(e).getPropertyValue(t);
                e.style.setProperty(t, `${n(Number.parseFloat(i))}px`)
            }
            ))
        }
        _saveInitialAttribute(e, t) {
            const n = e.style.getPropertyValue(t);
            n && $.setDataAttribute(e, t, n)
        }
        _resetElementAttributes(e, t) {
            this._applyManipulationCallback(e, (e=>{
                const n = $.getDataAttribute(e, t);
                null !== n ? ($.removeDataAttribute(e, t),
                e.style.setProperty(t, n)) : e.style.removeProperty(t)
            }
            ))
        }
        _applyManipulationCallback(e, t) {
            if (a(e))
                t(e);
            else
                for (const n of z.find(e, this._element))
                    t(n)
        }
    }
    const jt = ".bs.modal"
      , Pt = `hide ${jt}`
      , Nt = `hidePrevented ${jt}`
      , Ft = `hidden ${jt}`
      , Ht = `show ${jt}`
      , Rt = `shown ${jt}`
      , Mt = `resize ${jt}`
      , $t = `click.dismiss ${jt}`
      , Wt = `mousedown.dismiss ${jt}`
      , qt = `keydown.dismiss ${jt}`
      , Bt = `click ${jt}.data-api`
      , zt = "modal-open"
      , Ut = "show"
      , Vt = "modal-static"
      , Xt = {
        backdrop: !0,
        focus: !0,
        keyboard: !0
    }
      , Jt = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
    };
    class Yt extends q {
        constructor(e, t) {
            super(e, t),
            this._dialog = z.findOne(".modal-dialog", this._element),
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._isShown = !1,
            this._isTransitioning = !1,
            this._scrollBar = new Ot,
            this._addEventListeners()
        }
        static get Default() {
            return Xt
        }
        static get DefaultType() {
            return Jt
        }
        static get NAME() {
            return "modal"
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        show(e) {
            this._isShown || this._isTransitioning || F.trigger(this._element, Ht, {
                relatedTarget: e
            }).defaultPrevented || (this._isShown = !0,
            this._isTransitioning = !0,
            this._scrollBar.hide(),
            document.body.classList.add(zt),
            this._adjustDialog(),
            this._backdrop.show((()=>this._showElement(e))))
        }
        hide() {
            this._isShown && !this._isTransitioning && (F.trigger(this._element, Pt).defaultPrevented || (this._isShown = !1,
            this._isTransitioning = !0,
            this._focustrap.deactivate(),
            this._element.classList.remove(Ut),
            this._queueCallback((()=>this._hideModal()), this._element, this._isAnimated())))
        }
        dispose() {
            F.off(window, jt),
            F.off(this._dialog, jt),
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new _t({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new At({
                trapElement: this._element
            })
        }
        _showElement(e) {
            document.body.contains(this._element) || document.body.append(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0;
            const t = z.findOne(".modal-body", this._dialog);
            t && (t.scrollTop = 0),
            h(this._element),
            this._element.classList.add(Ut),
            this._queueCallback((()=>{
                this._config.focus && this._focustrap.activate(),
                this._isTransitioning = !1,
                F.trigger(this._element, Rt, {
                    relatedTarget: e
                })
            }
            ), this._dialog, this._isAnimated())
        }
        _addEventListeners() {
            F.on(this._element, qt, (e=>{
                "Escape" === e.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition())
            }
            )),
            F.on(window, Mt, (()=>{
                this._isShown && !this._isTransitioning && this._adjustDialog()
            }
            )),
            F.on(this._element, Wt, (e=>{
                F.one(this._element, $t, (t=>{
                    this._element === e.target && this._element === t.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
                }
                ))
            }
            ))
        }
        _hideModal() {
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._backdrop.hide((()=>{
                document.body.classList.remove(zt),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                F.trigger(this._element, Ft)
            }
            ))
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (F.trigger(this._element, Nt).defaultPrevented)
                return;
            const e = this._element.scrollHeight > document.documentElement.clientHeight
              , t = this._element.style.overflowY;
            "hidden" === t || this._element.classList.contains(Vt) || (e || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(Vt),
            this._queueCallback((()=>{
                this._element.classList.remove(Vt),
                this._queueCallback((()=>{
                    this._element.style.overflowY = t
                }
                ), this._dialog)
            }
            ), this._dialog),
            this._element.focus())
        }
        _adjustDialog() {
            const e = this._element.scrollHeight > document.documentElement.clientHeight
              , t = this._scrollBar.getWidth()
              , n = t > 0;
            if (n && !e) {
                const e = m() ? "paddingLeft" : "paddingRight";
                this._element.style[e] = `${t}px`
            }
            if (!n && e) {
                const e = m() ? "paddingRight" : "paddingLeft";
                this._element.style[e] = `${t}px`
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        static jQueryInterface(e, t) {
            return this.each((function() {
                const n = Yt.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === n[e])
                        throw new TypeError(`No method named "${e}"`);
                    n[e](t)
                }
            }
            ))
        }
    }
    F.on(document, Bt, '[data-bs-toggle="modal"]', (function(e) {
        const t = z.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
        F.one(t, Ht, (e=>{
            e.defaultPrevented || F.one(t, Ft, (()=>{
                c(this) && this.focus()
            }
            ))
        }
        ));
        const n = z.findOne(".modal.show");
        n && Yt.getInstance(n).hide(),
        Yt.getOrCreateInstance(t).toggle(this)
    }
    )),
    U(Yt),
    v(Yt);
    const Qt = ".bs.offcanvas"
      , Gt = ".data-api"
      , Kt = `load ${Qt}${Gt}`
      , Zt = "show"
      , en = "showing"
      , tn = "hiding"
      , nn = ".offcanvas.show"
      , rn = `show ${Qt}`
      , on = `shown ${Qt}`
      , sn = `hide ${Qt}`
      , an = `hidePrevented ${Qt}`
      , ln = `hidden ${Qt}`
      , cn = `resize ${Qt}`
      , un = `click ${Qt}${Gt}`
      , dn = `keydown.dismiss ${Qt}`
      , fn = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }
      , hn = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class pn extends q {
        constructor(e, t) {
            super(e, t),
            this._isShown = !1,
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._addEventListeners()
        }
        static get Default() {
            return fn
        }
        static get DefaultType() {
            return hn
        }
        static get NAME() {
            return "offcanvas"
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        show(e) {
            this._isShown || F.trigger(this._element, rn, {
                relatedTarget: e
            }).defaultPrevented || (this._isShown = !0,
            this._backdrop.show(),
            this._config.scroll || (new Ot).hide(),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(en),
            this._queueCallback((()=>{
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(),
                this._element.classList.add(Zt),
                this._element.classList.remove(en),
                F.trigger(this._element, on, {
                    relatedTarget: e
                })
            }
            ), this._element, !0))
        }
        hide() {
            this._isShown && (F.trigger(this._element, sn).defaultPrevented || (this._focustrap.deactivate(),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.add(tn),
            this._backdrop.hide(),
            this._queueCallback((()=>{
                this._element.classList.remove(Zt, tn),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._config.scroll || (new Ot).reset(),
                F.trigger(this._element, ln)
            }
            ), this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        _initializeBackDrop() {
            const e = Boolean(this._config.backdrop);
            return new _t({
                className: "offcanvas-backdrop",
                isVisible: e,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: e ? ()=>{
                    "static" !== this._config.backdrop ? this.hide() : F.trigger(this._element, an)
                }
                : null
            })
        }
        _initializeFocusTrap() {
            return new At({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            F.on(this._element, dn, (e=>{
                "Escape" === e.key && (this._config.keyboard ? this.hide() : F.trigger(this._element, an))
            }
            ))
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = pn.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                        throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            }
            ))
        }
    }
    F.on(document, un, '[data-bs-toggle="offcanvas"]', (function(e) {
        const t = z.getElementFromSelector(this);
        if (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
        u(this))
            return;
        F.one(t, ln, (()=>{
            c(this) && this.focus()
        }
        ));
        const n = z.findOne(nn);
        n && n !== t && pn.getInstance(n).hide(),
        pn.getOrCreateInstance(t).toggle(this)
    }
    )),
    F.on(window, Kt, (()=>{
        for (const e of z.find(nn))
            pn.getOrCreateInstance(e).show()
    }
    )),
    F.on(window, cn, (()=>{
        for (const e of z.find("[aria-modal][class*=show][class*=offcanvas-]"))
            "fixed" !== getComputedStyle(e).position && pn.getOrCreateInstance(e).hide()
    }
    )),
    U(pn),
    v(pn);
    const gn = {
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
        img: ["src", "srcset", "alt", "title", "width", "height"],
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
        ul: []
    }
      , mn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , vn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i
      , yn = (e,t)=>{
        const n = e.nodeName.toLowerCase();
        return t.includes(n) ? !mn.has(n) || Boolean(vn.test(e.nodeValue)) : t.filter((e=>e instanceof RegExp)).some((e=>e.test(n)))
    }
      , bn = {
        allowList: gn,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>"
    }
      , _n = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
    }
      , wn = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
    };
    class xn extends W {
        constructor(e) {
            super(),
            this._config = this._getConfig(e)
        }
        static get Default() {
            return bn
        }
        static get DefaultType() {
            return _n
        }
        static get NAME() {
            return "TemplateFactory"
        }
        getContent() {
            return Object.values(this._config.content).map((e=>this._resolvePossibleFunction(e))).filter(Boolean)
        }
        hasContent() {
            return this.getContent().length > 0
        }
        changeContent(e) {
            return this._checkContent(e),
            this._config.content = {
                ...this._config.content,
                ...e
            },
            this
        }
        toHtml() {
            const e = document.createElement("div");
            e.innerHTML = this._maybeSanitize(this._config.template);
            for (const [t,n] of Object.entries(this._config.content))
                this._setContent(e, n, t);
            const t = e.children[0]
              , n = this._resolvePossibleFunction(this._config.extraClass);
            return n && t.classList.add(...n.split(" ")),
            t
        }
        _typeCheckConfig(e) {
            super._typeCheckConfig(e),
            this._checkContent(e.content)
        }
        _checkContent(e) {
            for (const [t,n] of Object.entries(e))
                super._typeCheckConfig({
                    selector: t,
                    entry: n
                }, wn)
        }
        _setContent(e, t, n) {
            const r = z.findOne(n, e);
            r && ((t = this._resolvePossibleFunction(t)) ? a(t) ? this._putElementInTemplate(l(t), r) : this._config.html ? r.innerHTML = this._maybeSanitize(t) : r.textContent = t : r.remove())
        }
        _maybeSanitize(e) {
            return this._config.sanitize ? function(e, t, n) {
                if (!e.length)
                    return e;
                if (n && "function" == typeof n)
                    return n(e);
                const r = (new window.DOMParser).parseFromString(e, "text/html")
                  , i = [].concat(...r.body.querySelectorAll("*"));
                for (const e of i) {
                    const n = e.nodeName.toLowerCase();
                    if (!Object.keys(t).includes(n)) {
                        e.remove();
                        continue
                    }
                    const r = [].concat(...e.attributes)
                      , i = [].concat(t["*"] || [], t[n] || []);
                    for (const t of r)
                        yn(t, i) || e.removeAttribute(t.nodeName)
                }
                return r.body.innerHTML
            }(e, this._config.allowList, this._config.sanitizeFn) : e
        }
        _resolvePossibleFunction(e) {
            return y(e, [this])
        }
        _putElementInTemplate(e, t) {
            if (this._config.html)
                return t.innerHTML = "",
                void t.append(e);
            t.textContent = e.textContent
        }
    }
    const Sn = new Set(["sanitize", "allowList", "sanitizeFn"])
      , Tn = "fade"
      , Cn = "show"
      , Dn = ".modal"
      , An = "hide.bs.modal"
      , En = "hover"
      , kn = "focus"
      , Ln = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: m() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: m() ? "right" : "left"
    }
      , In = {
        allowList: gn,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 6],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
    }
      , On = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
    };
    class jn extends q {
        constructor(e, n) {
            if (void 0 === t)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(e, n),
            this._isEnabled = !0,
            this._timeout = 0,
            this._isHovered = null,
            this._activeTrigger = {},
            this._popper = null,
            this._templateFactory = null,
            this._newContent = null,
            this.tip = null,
            this._setListeners(),
            this._config.selector || this._fixTitle()
        }
        static get Default() {
            return In
        }
        static get DefaultType() {
            return On
        }
        static get NAME() {
            return "tooltip"
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click,
            this._isShown() ? this._leave() : this._enter())
        }
        dispose() {
            clearTimeout(this._timeout),
            F.off(this._element.closest(Dn), An, this._hideModalHandler),
            this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
            this._disposePopper(),
            super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled)
                return;
            const e = F.trigger(this._element, this.constructor.eventName("show"))
              , t = (d(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (e.defaultPrevented || !t)
                return;
            this._disposePopper();
            const n = this._getTipElement();
            this._element.setAttribute("aria-describedby", n.getAttribute("id"));
            const {container: r} = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (r.append(n),
            F.trigger(this._element, this.constructor.eventName("inserted"))),
            this._popper = this._createPopper(n),
            n.classList.add(Cn),
            "ontouchstart"in document.documentElement)
                for (const e of [].concat(...document.body.children))
                    F.on(e, "mouseover", f);
            this._queueCallback((()=>{
                F.trigger(this._element, this.constructor.eventName("shown")),
                !1 === this._isHovered && this._leave(),
                this._isHovered = !1
            }
            ), this.tip, this._isAnimated())
        }
        hide() {
            if (this._isShown() && !F.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                if (this._getTipElement().classList.remove(Cn),
                "ontouchstart"in document.documentElement)
                    for (const e of [].concat(...document.body.children))
                        F.off(e, "mouseover", f);
                this._activeTrigger.click = !1,
                this._activeTrigger[kn] = !1,
                this._activeTrigger[En] = !1,
                this._isHovered = null,
                this._queueCallback((()=>{
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(),
                    this._element.removeAttribute("aria-describedby"),
                    F.trigger(this._element, this.constructor.eventName("hidden")))
                }
                ), this.tip, this._isAnimated())
            }
        }
        update() {
            this._popper && this._popper.update()
        }
        _isWithContent() {
            return Boolean(this._getTitle())
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())),
            this.tip
        }
        _createTipElement(e) {
            const t = this._getTemplateFactory(e).toHtml();
            if (!t)
                return null;
            t.classList.remove(Tn, Cn),
            t.classList.add(`bs-${this.constructor.NAME}-auto`);
            const n = (e=>{
                do {
                    e += Math.floor(1e6 * Math.random())
                } while (document.getElementById(e));
                return e
            }
            )(this.constructor.NAME).toString();
            return t.setAttribute("id", n),
            this._isAnimated() && t.classList.add(Tn),
            t
        }
        setContent(e) {
            this._newContent = e,
            this._isShown() && (this._disposePopper(),
            this.show())
        }
        _getTemplateFactory(e) {
            return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new xn({
                ...this._config,
                content: e,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }),
            this._templateFactory
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle()
            }
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
        }
        _initializeOnDelegatedTarget(e) {
            return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(Tn)
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(Cn)
        }
        _createPopper(e) {
            const n = y(this._config.placement, [this, e, this._element])
              , r = Ln[n.toUpperCase()];
            return t.createPopper(this._element, e, this._getPopperConfig(r))
        }
        _getOffset() {
            const {offset: e} = this._config;
            return "string" == typeof e ? e.split(",").map((e=>Number.parseInt(e, 10))) : "function" == typeof e ? t=>e(t, this._element) : e
        }
        _resolvePossibleFunction(e) {
            return y(e, [this._element])
        }
        _getPopperConfig(e) {
            const t = {
                placement: e,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: e=>{
                        this._getTipElement().setAttribute("data-popper-placement", e.state.placement)
                    }
                }]
            };
            return {
                ...t,
                ...y(this._config.popperConfig, [t])
            }
        }
        _setListeners() {
            const e = this._config.trigger.split(" ");
            for (const t of e)
                if ("click" === t)
                    F.on(this._element, this.constructor.eventName("click"), this._config.selector, (e=>{
                        this._initializeOnDelegatedTarget(e).toggle()
                    }
                    ));
                else if ("manual" !== t) {
                    const e = t === En ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin")
                      , n = t === En ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                    F.on(this._element, e, this._config.selector, (e=>{
                        const t = this._initializeOnDelegatedTarget(e);
                        t._activeTrigger["focusin" === e.type ? kn : En] = !0,
                        t._enter()
                    }
                    )),
                    F.on(this._element, n, this._config.selector, (e=>{
                        const t = this._initializeOnDelegatedTarget(e);
                        t._activeTrigger["focusout" === e.type ? kn : En] = t._element.contains(e.relatedTarget),
                        t._leave()
                    }
                    ))
                }
            this._hideModalHandler = ()=>{
                this._element && this.hide()
            }
            ,
            F.on(this._element.closest(Dn), An, this._hideModalHandler)
        }
        _fixTitle() {
            const e = this._element.getAttribute("title");
            e && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e),
            this._element.setAttribute("data-bs-original-title", e),
            this._element.removeAttribute("title"))
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0,
            this._setTimeout((()=>{
                this._isHovered && this.show()
            }
            ), this._config.delay.show))
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1,
            this._setTimeout((()=>{
                this._isHovered || this.hide()
            }
            ), this._config.delay.hide))
        }
        _setTimeout(e, t) {
            clearTimeout(this._timeout),
            this._timeout = setTimeout(e, t)
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }
        _getConfig(e) {
            const t = $.getDataAttributes(this._element);
            for (const e of Object.keys(t))
                Sn.has(e) && delete t[e];
            return e = {
                ...t,
                ..."object" == typeof e && e ? e : {}
            },
            e = this._mergeConfigObj(e),
            e = this._configAfterMerge(e),
            this._typeCheckConfig(e),
            e
        }
        _configAfterMerge(e) {
            return e.container = !1 === e.container ? document.body : l(e.container),
            "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            e
        }
        _getDelegateConfig() {
            const e = {};
            for (const [t,n] of Object.entries(this._config))
                this.constructor.Default[t] !== n && (e[t] = n);
            return e.selector = !1,
            e.trigger = "manual",
            e
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(),
            this._popper = null),
            this.tip && (this.tip.remove(),
            this.tip = null)
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = jn.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }
            ))
        }
    }
    v(jn);
    const Pn = {
        ...jn.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    }
      , Nn = {
        ...jn.DefaultType,
        content: "(null|string|element|function)"
    };
    class Fn extends jn {
        static get Default() {
            return Pn
        }
        static get DefaultType() {
            return Nn
        }
        static get NAME() {
            return "popover"
        }
        _isWithContent() {
            return this._getTitle() || this._getContent()
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
            }
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = Fn.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }
            ))
        }
    }
    v(Fn);
    const Hn = ".bs.scrollspy"
      , Rn = `activate ${Hn}`
      , Mn = `click ${Hn}`
      , $n = `load ${Hn}.data-api`
      , Wn = "active"
      , qn = "[href]"
      , Bn = ".nav-link"
      , zn = `${Bn}, .nav-item > ${Bn}, .list-group-item`
      , Un = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [.1, .5, 1]
    }
      , Vn = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
    };
    class Xn extends q {
        constructor(e, t) {
            super(e, t),
            this._targetLinks = new Map,
            this._observableSections = new Map,
            this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element,
            this._activeTarget = null,
            this._observer = null,
            this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            },
            this.refresh()
        }
        static get Default() {
            return Un
        }
        static get DefaultType() {
            return Vn
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            this._initializeTargetsAndObservables(),
            this._maybeEnableSmoothScroll(),
            this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const e of this._observableSections.values())
                this._observer.observe(e)
        }
        dispose() {
            this._observer.disconnect(),
            super.dispose()
        }
        _configAfterMerge(e) {
            return e.target = l(e.target) || document.body,
            e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin,
            "string" == typeof e.threshold && (e.threshold = e.threshold.split(",").map((e=>Number.parseFloat(e)))),
            e
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (F.off(this._config.target, Mn),
            F.on(this._config.target, Mn, qn, (e=>{
                const t = this._observableSections.get(e.target.hash);
                if (t) {
                    e.preventDefault();
                    const n = this._rootElement || window
                      , r = t.offsetTop - this._element.offsetTop;
                    if (n.scrollTo)
                        return void n.scrollTo({
                            top: r,
                            behavior: "smooth"
                        });
                    n.scrollTop = r
                }
            }
            )))
        }
        _getNewObserver() {
            const e = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver((e=>this._observerCallback(e)),e)
        }
        _observerCallback(e) {
            const t = e=>this._targetLinks.get(`#${e.target.id}`)
              , n = e=>{
                this._previousScrollData.visibleEntryTop = e.target.offsetTop,
                this._process(t(e))
            }
              , r = (this._rootElement || document.documentElement).scrollTop
              , i = r >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = r;
            for (const o of e) {
                if (!o.isIntersecting) {
                    this._activeTarget = null,
                    this._clearActiveClass(t(o));
                    continue
                }
                const e = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (i && e) {
                    if (n(o),
                    !r)
                        return
                } else
                    i || e || n(o)
            }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map,
            this._observableSections = new Map;
            const e = z.find(qn, this._config.target);
            for (const t of e) {
                if (!t.hash || u(t))
                    continue;
                const e = z.findOne(decodeURI(t.hash), this._element);
                c(e) && (this._targetLinks.set(decodeURI(t.hash), t),
                this._observableSections.set(t.hash, e))
            }
        }
        _process(e) {
            this._activeTarget !== e && (this._clearActiveClass(this._config.target),
            this._activeTarget = e,
            e.classList.add(Wn),
            this._activateParents(e),
            F.trigger(this._element, Rn, {
                relatedTarget: e
            }))
        }
        _activateParents(e) {
            if (e.classList.contains("dropdown-item"))
                z.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(Wn);
            else
                for (const t of z.parents(e, ".nav, .list-group"))
                    for (const e of z.prev(t, zn))
                        e.classList.add(Wn)
        }
        _clearActiveClass(e) {
            e.classList.remove(Wn);
            const t = z.find(`${qn}.${Wn}`, e);
            for (const e of t)
                e.classList.remove(Wn)
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = Xn.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }
            ))
        }
    }
    F.on(window, $n, (()=>{
        for (const e of z.find('[data-bs-spy="scroll"]'))
            Xn.getOrCreateInstance(e)
    }
    )),
    v(Xn);
    const Jn = ".bs.tab"
      , Yn = `hide ${Jn}`
      , Qn = `hidden ${Jn}`
      , Gn = `show ${Jn}`
      , Kn = `shown ${Jn}`
      , Zn = `click ${Jn}`
      , er = `keydown ${Jn}`
      , tr = `load ${Jn}`
      , nr = "ArrowLeft"
      , rr = "ArrowRight"
      , ir = "ArrowUp"
      , or = "ArrowDown"
      , sr = "Home"
      , ar = "End"
      , lr = "active"
      , cr = "fade"
      , ur = "show"
      , dr = ".dropdown-toggle"
      , fr = `:not(${dr})`
      , hr = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'
      , pr = `.nav-link ${fr}, .list-group-item ${fr}, [role="tab"]${fr}, ${hr}`
      , gr = `.${lr}[data-bs-toggle="tab"], .${lr}[data-bs-toggle="pill"], .${lr}[data-bs-toggle="list"]`;
    class mr extends q {
        constructor(e) {
            super(e),
            this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'),
            this._parent && (this._setInitialAttributes(this._parent, this._getChildren()),
            F.on(this._element, er, (e=>this._keydown(e))))
        }
        static get NAME() {
            return "tab"
        }
        show() {
            const e = this._element;
            if (this._elemIsActive(e))
                return;
            const t = this._getActiveElem()
              , n = t ? F.trigger(t, Yn, {
                relatedTarget: e
            }) : null;
            F.trigger(e, Gn, {
                relatedTarget: t
            }).defaultPrevented || n && n.defaultPrevented || (this._deactivate(t, e),
            this._activate(e, t))
        }
        _activate(e, t) {
            e && (e.classList.add(lr),
            this._activate(z.getElementFromSelector(e)),
            this._queueCallback((()=>{
                "tab" === e.getAttribute("role") ? (e.removeAttribute("tabindex"),
                e.setAttribute("aria-selected", !0),
                this._toggleDropDown(e, !0),
                F.trigger(e, Kn, {
                    relatedTarget: t
                })) : e.classList.add(ur)
            }
            ), e, e.classList.contains(cr)))
        }
        _deactivate(e, t) {
            e && (e.classList.remove(lr),
            e.blur(),
            this._deactivate(z.getElementFromSelector(e)),
            this._queueCallback((()=>{
                "tab" === e.getAttribute("role") ? (e.setAttribute("aria-selected", !1),
                e.setAttribute("tabindex", "-1"),
                this._toggleDropDown(e, !1),
                F.trigger(e, Qn, {
                    relatedTarget: t
                })) : e.classList.remove(ur)
            }
            ), e, e.classList.contains(cr)))
        }
        _keydown(e) {
            if (![nr, rr, ir, or, sr, ar].includes(e.key))
                return;
            e.stopPropagation(),
            e.preventDefault();
            const t = this._getChildren().filter((e=>!u(e)));
            let n;
            if ([sr, ar].includes(e.key))
                n = t[e.key === sr ? 0 : t.length - 1];
            else {
                const r = [rr, or].includes(e.key);
                n = _(t, e.target, r, !0)
            }
            n && (n.focus({
                preventScroll: !0
            }),
            mr.getOrCreateInstance(n).show())
        }
        _getChildren() {
            return z.find(pr, this._parent)
        }
        _getActiveElem() {
            return this._getChildren().find((e=>this._elemIsActive(e))) || null
        }
        _setInitialAttributes(e, t) {
            this._setAttributeIfNotExists(e, "role", "tablist");
            for (const e of t)
                this._setInitialAttributesOnChild(e)
        }
        _setInitialAttributesOnChild(e) {
            e = this._getInnerElement(e);
            const t = this._elemIsActive(e)
              , n = this._getOuterElement(e);
            e.setAttribute("aria-selected", t),
            n !== e && this._setAttributeIfNotExists(n, "role", "presentation"),
            t || e.setAttribute("tabindex", "-1"),
            this._setAttributeIfNotExists(e, "role", "tab"),
            this._setInitialAttributesOnTargetPanel(e)
        }
        _setInitialAttributesOnTargetPanel(e) {
            const t = z.getElementFromSelector(e);
            t && (this._setAttributeIfNotExists(t, "role", "tabpanel"),
            e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `${e.id}`))
        }
        _toggleDropDown(e, t) {
            const n = this._getOuterElement(e);
            if (!n.classList.contains("dropdown"))
                return;
            const r = (e,r)=>{
                const i = z.findOne(e, n);
                i && i.classList.toggle(r, t)
            }
            ;
            r(dr, lr),
            r(".dropdown-menu", ur),
            n.setAttribute("aria-expanded", t)
        }
        _setAttributeIfNotExists(e, t, n) {
            e.hasAttribute(t) || e.setAttribute(t, n)
        }
        _elemIsActive(e) {
            return e.classList.contains(lr)
        }
        _getInnerElement(e) {
            return e.matches(pr) ? e : z.findOne(pr, e)
        }
        _getOuterElement(e) {
            return e.closest(".nav-item, .list-group-item") || e
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = mr.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                        throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            }
            ))
        }
    }
    F.on(document, Zn, hr, (function(e) {
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
        u(this) || mr.getOrCreateInstance(this).show()
    }
    )),
    F.on(window, tr, (()=>{
        for (const e of z.find(gr))
            mr.getOrCreateInstance(e)
    }
    )),
    v(mr);
    const vr = ".bs.toast"
      , yr = `mouseover ${vr}`
      , br = `mouseout ${vr}`
      , _r = `focusin ${vr}`
      , wr = `focusout ${vr}`
      , xr = `hide ${vr}`
      , Sr = `hidden ${vr}`
      , Tr = `show ${vr}`
      , Cr = `shown ${vr}`
      , Dr = "hide"
      , Ar = "show"
      , Er = "showing"
      , kr = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , Lr = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class Ir extends q {
        constructor(e, t) {
            super(e, t),
            this._timeout = null,
            this._hasMouseInteraction = !1,
            this._hasKeyboardInteraction = !1,
            this._setListeners()
        }
        static get Default() {
            return Lr
        }
        static get DefaultType() {
            return kr
        }
        static get NAME() {
            return "toast"
        }
        show() {
            F.trigger(this._element, Tr).defaultPrevented || (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            this._element.classList.remove(Dr),
            h(this._element),
            this._element.classList.add(Ar, Er),
            this._queueCallback((()=>{
                this._element.classList.remove(Er),
                F.trigger(this._element, Cr),
                this._maybeScheduleHide()
            }
            ), this._element, this._config.animation))
        }
        hide() {
            this.isShown() && (F.trigger(this._element, xr).defaultPrevented || (this._element.classList.add(Er),
            this._queueCallback((()=>{
                this._element.classList.add(Dr),
                this._element.classList.remove(Er, Ar),
                F.trigger(this._element, Sr)
            }
            ), this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(),
            this.isShown() && this._element.classList.remove(Ar),
            super.dispose()
        }
        isShown() {
            return this._element.classList.contains(Ar)
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((()=>{
                this.hide()
            }
            ), this._config.delay)))
        }
        _onInteraction(e, t) {
            switch (e.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = t;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = t
            }
            if (t)
                return void this._clearTimeout();
            const n = e.relatedTarget;
            this._element === n || this._element.contains(n) || this._maybeScheduleHide()
        }
        _setListeners() {
            F.on(this._element, yr, (e=>this._onInteraction(e, !0))),
            F.on(this._element, br, (e=>this._onInteraction(e, !1))),
            F.on(this._element, _r, (e=>this._onInteraction(e, !0))),
            F.on(this._element, wr, (e=>this._onInteraction(e, !1)))
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        static jQueryInterface(e) {
            return this.each((function() {
                const t = Ir.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            }
            ))
        }
    }
    return U(Ir),
    v(Ir),
    {
        Alert: Y,
        Button: G,
        Carousel: ke,
        Collapse: Be,
        Dropdown: pt,
        Modal: Yt,
        Offcanvas: pn,
        Popover: Fn,
        ScrollSpy: Xn,
        Tab: mr,
        Toast: Ir,
        Tooltip: jn
    }
}
)),
function(e) {
    var t, n;
    "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], (function(t) {
        return e(t, window, document)
    }
    )) : "object" == typeof exports ? (t = require("jquery"),
    n = function(e, t) {
        t.fn.dataTable || require("datatables.net")(e, t)
    }
    ,
    "undefined" == typeof window ? module.exports = function(r, i) {
        return r = r || window,
        i = i || t(r),
        n(r, i),
        e(i, 0, r.document)
    }
    : (n(window, t),
    module.exports = e(t, window, window.document))) : e(jQuery, window, document)
}((function(e, t, n, r) {
    "use strict";
    var i = e.fn.dataTable;
    return e.extend(!0, i.defaults, {
        dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row dt-row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        renderer: "bootstrap"
    }),
    e.extend(i.ext.classes, {
        sWrapper: "dataTables_wrapper dt-bootstrap5",
        sFilterInput: "form-control form-control-sm",
        sLengthSelect: "form-select form-select-sm",
        sProcessing: "dataTables_processing card",
        sPageButton: "paginate_button page-item"
    }),
    i.ext.renderer.pageButton.bootstrap = function(t, o, s, a, l, c) {
        var u, d, f, h = new i.Api(t), p = t.oClasses, g = t.oLanguage.oPaginate, m = t.oLanguage.oAria.paginate || {};
        o = e(o);
        try {
            f = o.find(n.activeElement).data("dt-idx")
        } catch (o) {}
        var v = o.children("ul.pagination");
        v.length ? v.empty() : v = o.html("<ul/>").children("ul").addClass("pagination"),
        function n(r, i) {
            for (var o, a, f = function(t) {
                t.preventDefault(),
                e(t.currentTarget).hasClass("disabled") || h.page() == t.data.action || h.page(t.data.action).draw("page")
            }, v = 0, y = i.length; v < y; v++)
                if (o = i[v],
                Array.isArray(o))
                    n(r, o);
                else {
                    switch (d = u = "",
                    o) {
                    case "ellipsis":
                        u = "&#x2026;",
                        d = "disabled";
                        break;
                    case "first":
                        u = g.sFirst,
                        d = o + (0 < l ? "" : " disabled");
                        break;
                    case "previous":
                        u = g.sPrevious,
                        d = o + (0 < l ? "" : " disabled");
                        break;
                    case "next":
                        u = g.sNext,
                        d = o + (l < c - 1 ? "" : " disabled");
                        break;
                    case "last":
                        u = g.sLast,
                        d = o + (l < c - 1 ? "" : " disabled");
                        break;
                    default:
                        u = o + 1,
                        d = l === o ? "active" : ""
                    }
                    u && (a = -1 !== d.indexOf("disabled"),
                    a = e("<li>", {
                        class: p.sPageButton + " " + d,
                        id: 0 === s && "string" == typeof o ? t.sTableId + "_" + o : null
                    }).append(e("<a>", {
                        href: a ? null : "#",
                        "aria-controls": t.sTableId,
                        "aria-disabled": a ? "true" : null,
                        "aria-label": m[o],
                        role: "link",
                        "aria-current": "active" === d ? "page" : null,
                        "data-dt-idx": o,
                        tabindex: t.iTabIndex,
                        class: "page-link"
                    }).html(u)).appendTo(r),
                    t.oApi._fnBindAction(a, {
                        action: o
                    }, f))
                }
        }(v, a),
        f !== r && o.find("[data-dt-idx=" + f + "]").trigger("focus")
    }
    ,
    i
}
)),
function() {
    "use strict";
    function e(r) {
        if (!r)
            throw new Error("No options passed to Waypoint constructor");
        if (!r.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!r.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + t,
        this.options = e.Adapter.extend({}, e.defaults, r),
        this.element = this.options.element,
        this.adapter = new e.Adapter(this.element),
        this.callback = r.handler,
        this.axis = this.options.horizontal ? "horizontal" : "vertical",
        this.enabled = this.options.enabled,
        this.triggerPoint = null,
        this.group = e.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }),
        this.context = e.Context.findOrCreateByElement(this.options.context),
        e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        n[this.key] = this,
        t += 1
    }
    var t = 0
      , n = {};
    e.prototype.queueTrigger = function(e) {
        this.group.queueTrigger(this, e)
    }
    ,
    e.prototype.trigger = function(e) {
        this.enabled && this.callback && this.callback.apply(this, e)
    }
    ,
    e.prototype.destroy = function() {
        this.context.remove(this),
        this.group.remove(this),
        delete n[this.key]
    }
    ,
    e.prototype.disable = function() {
        return this.enabled = !1,
        this
    }
    ,
    e.prototype.enable = function() {
        return this.context.refresh(),
        this.enabled = !0,
        this
    }
    ,
    e.prototype.next = function() {
        return this.group.next(this)
    }
    ,
    e.prototype.previous = function() {
        return this.group.previous(this)
    }
    ,
    e.invokeAll = function(e) {
        var t = [];
        for (var r in n)
            t.push(n[r]);
        for (var i = 0, o = t.length; o > i; i++)
            t[i][e]()
    }
    ,
    e.destroyAll = function() {
        e.invokeAll("destroy")
    }
    ,
    e.disableAll = function() {
        e.invokeAll("disable")
    }
    ,
    e.enableAll = function() {
        for (var t in e.Context.refreshAll(),
        n)
            n[t].enabled = !0;
        return this
    }
    ,
    e.refreshAll = function() {
        e.Context.refreshAll()
    }
    ,
    e.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }
    ,
    e.viewportWidth = function() {
        return document.documentElement.clientWidth
    }
    ,
    e.adapters = [],
    e.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    },
    e.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    },
    window.Waypoint = e
}(),
function() {
    "use strict";
    function e(e) {
        window.setTimeout(e, 1e3 / 60)
    }
    function t(e) {
        this.element = e,
        this.Adapter = i.Adapter,
        this.adapter = new this.Adapter(e),
        this.key = "waypoint-context-" + n,
        this.didScroll = !1,
        this.didResize = !1,
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        },
        this.waypoints = {
            vertical: {},
            horizontal: {}
        },
        e.waypointContextKey = this.key,
        r[e.waypointContextKey] = this,
        n += 1,
        i.windowContext || (i.windowContext = !0,
        i.windowContext = new t(window)),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    var n = 0
      , r = {}
      , i = window.Waypoint
      , o = window.onload;
    t.prototype.add = function(e) {
        var t = e.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[t][e.key] = e,
        this.refresh()
    }
    ,
    t.prototype.checkEmpty = function() {
        var e = this.Adapter.isEmptyObject(this.waypoints.horizontal)
          , t = this.Adapter.isEmptyObject(this.waypoints.vertical)
          , n = this.element == this.element.window;
        e && t && !n && (this.adapter.off(".waypoints"),
        delete r[this.key])
    }
    ,
    t.prototype.createThrottledResizeHandler = function() {
        function e() {
            t.handleResize(),
            t.didResize = !1
        }
        var t = this;
        this.adapter.on("resize.waypoints", (function() {
            t.didResize || (t.didResize = !0,
            i.requestAnimationFrame(e))
        }
        ))
    }
    ,
    t.prototype.createThrottledScrollHandler = function() {
        function e() {
            t.handleScroll(),
            t.didScroll = !1
        }
        var t = this;
        this.adapter.on("scroll.waypoints", (function() {
            (!t.didScroll || i.isTouch) && (t.didScroll = !0,
            i.requestAnimationFrame(e))
        }
        ))
    }
    ,
    t.prototype.handleResize = function() {
        i.Context.refreshAll()
    }
    ,
    t.prototype.handleScroll = function() {
        var e = {}
          , t = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var n in t) {
            var r = t[n]
              , i = r.newScroll > r.oldScroll ? r.forward : r.backward;
            for (var o in this.waypoints[n]) {
                var s = this.waypoints[n][o];
                if (null !== s.triggerPoint) {
                    var a = r.oldScroll < s.triggerPoint
                      , l = r.newScroll >= s.triggerPoint;
                    (a && l || !a && !l) && (s.queueTrigger(i),
                    e[s.group.id] = s.group)
                }
            }
        }
        for (var c in e)
            e[c].flushTriggers();
        this.oldScroll = {
            x: t.horizontal.newScroll,
            y: t.vertical.newScroll
        }
    }
    ,
    t.prototype.innerHeight = function() {
        return this.element == this.element.window ? i.viewportHeight() : this.adapter.innerHeight()
    }
    ,
    t.prototype.remove = function(e) {
        delete this.waypoints[e.axis][e.key],
        this.checkEmpty()
    }
    ,
    t.prototype.innerWidth = function() {
        return this.element == this.element.window ? i.viewportWidth() : this.adapter.innerWidth()
    }
    ,
    t.prototype.destroy = function() {
        var e = [];
        for (var t in this.waypoints)
            for (var n in this.waypoints[t])
                e.push(this.waypoints[t][n]);
        for (var r = 0, i = e.length; i > r; r++)
            e[r].destroy()
    }
    ,
    t.prototype.refresh = function() {
        var e, t = this.element == this.element.window, n = t ? void 0 : this.adapter.offset(), r = {};
        for (var o in this.handleScroll(),
        e = {
            horizontal: {
                contextOffset: t ? 0 : n.left,
                contextScroll: t ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: t ? 0 : n.top,
                contextScroll: t ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        }) {
            var s = e[o];
            for (var a in this.waypoints[o]) {
                var l, c, u, d, f = this.waypoints[o][a], h = f.options.offset, p = f.triggerPoint, g = 0, m = null == p;
                f.element !== f.element.window && (g = f.adapter.offset()[s.offsetProp]),
                "function" == typeof h ? h = h.apply(f) : "string" == typeof h && (h = parseFloat(h),
                f.options.offset.indexOf("%") > -1 && (h = Math.ceil(s.contextDimension * h / 100))),
                l = s.contextScroll - s.contextOffset,
                f.triggerPoint = Math.floor(g + l - h),
                c = p < s.oldScroll,
                u = f.triggerPoint >= s.oldScroll,
                d = !c && !u,
                !m && (c && u) ? (f.queueTrigger(s.backward),
                r[f.group.id] = f.group) : (!m && d || m && s.oldScroll >= f.triggerPoint) && (f.queueTrigger(s.forward),
                r[f.group.id] = f.group)
            }
        }
        return i.requestAnimationFrame((function() {
            for (var e in r)
                r[e].flushTriggers()
        }
        )),
        this
    }
    ,
    t.findOrCreateByElement = function(e) {
        return t.findByElement(e) || new t(e)
    }
    ,
    t.refreshAll = function() {
        for (var e in r)
            r[e].refresh()
    }
    ,
    t.findByElement = function(e) {
        return r[e.waypointContextKey]
    }
    ,
    window.onload = function() {
        o && o(),
        t.refreshAll()
    }
    ,
    i.requestAnimationFrame = function(t) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t)
    }
    ,
    i.Context = t
}(),
function() {
    "use strict";
    function e(e, t) {
        return e.triggerPoint - t.triggerPoint
    }
    function t(e, t) {
        return t.triggerPoint - e.triggerPoint
    }
    function n(e) {
        this.name = e.name,
        this.axis = e.axis,
        this.id = this.name + "-" + this.axis,
        this.waypoints = [],
        this.clearTriggerQueues(),
        r[this.axis][this.name] = this
    }
    var r = {
        vertical: {},
        horizontal: {}
    }
      , i = window.Waypoint;
    n.prototype.add = function(e) {
        this.waypoints.push(e)
    }
    ,
    n.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }
    ,
    n.prototype.flushTriggers = function() {
        for (var n in this.triggerQueues) {
            var r = this.triggerQueues[n]
              , i = "up" === n || "left" === n;
            r.sort(i ? t : e);
            for (var o = 0, s = r.length; s > o; o += 1) {
                var a = r[o];
                (a.options.continuous || o === r.length - 1) && a.trigger([n])
            }
        }
        this.clearTriggerQueues()
    }
    ,
    n.prototype.next = function(t) {
        this.waypoints.sort(e);
        var n = i.Adapter.inArray(t, this.waypoints);
        return n === this.waypoints.length - 1 ? null : this.waypoints[n + 1]
    }
    ,
    n.prototype.previous = function(t) {
        this.waypoints.sort(e);
        var n = i.Adapter.inArray(t, this.waypoints);
        return n ? this.waypoints[n - 1] : null
    }
    ,
    n.prototype.queueTrigger = function(e, t) {
        this.triggerQueues[t].push(e)
    }
    ,
    n.prototype.remove = function(e) {
        var t = i.Adapter.inArray(e, this.waypoints);
        t > -1 && this.waypoints.splice(t, 1)
    }
    ,
    n.prototype.first = function() {
        return this.waypoints[0]
    }
    ,
    n.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }
    ,
    n.findOrCreate = function(e) {
        return r[e.axis][e.name] || new n(e)
    }
    ,
    i.Group = n
}(),
function() {
    "use strict";
    function e(e) {
        return e === e.window
    }
    function t(t) {
        return e(t) ? t : t.defaultView
    }
    function n(e) {
        this.element = e,
        this.handlers = {}
    }
    var r = window.Waypoint;
    n.prototype.innerHeight = function() {
        return e(this.element) ? this.element.innerHeight : this.element.clientHeight
    }
    ,
    n.prototype.innerWidth = function() {
        return e(this.element) ? this.element.innerWidth : this.element.clientWidth
    }
    ,
    n.prototype.off = function(e, t) {
        function n(e, t, n) {
            for (var r = 0, i = t.length - 1; i > r; r++) {
                var o = t[r];
                n && n !== o || e.removeEventListener(o)
            }
        }
        var r = e.split(".")
          , i = r[0]
          , o = r[1]
          , s = this.element;
        if (o && this.handlers[o] && i)
            n(s, this.handlers[o][i], t),
            this.handlers[o][i] = [];
        else if (i)
            for (var a in this.handlers)
                n(s, this.handlers[a][i] || [], t),
                this.handlers[a][i] = [];
        else if (o && this.handlers[o]) {
            for (var l in this.handlers[o])
                n(s, this.handlers[o][l], t);
            this.handlers[o] = {}
        }
    }
    ,
    n.prototype.offset = function() {
        if (!this.element.ownerDocument)
            return null;
        var e = this.element.ownerDocument.documentElement
          , n = t(this.element.ownerDocument)
          , r = {
            top: 0,
            left: 0
        };
        return this.element.getBoundingClientRect && (r = this.element.getBoundingClientRect()),
        {
            top: r.top + n.pageYOffset - e.clientTop,
            left: r.left + n.pageXOffset - e.clientLeft
        }
    }
    ,
    n.prototype.on = function(e, t) {
        var n = e.split(".")
          , r = n[0]
          , i = n[1] || "__default"
          , o = this.handlers[i] = this.handlers[i] || {};
        (o[r] = o[r] || []).push(t),
        this.element.addEventListener(r, t)
    }
    ,
    n.prototype.outerHeight = function(t) {
        var n, r = this.innerHeight();
        return t && !e(this.element) && (n = window.getComputedStyle(this.element),
        r += parseInt(n.marginTop, 10),
        r += parseInt(n.marginBottom, 10)),
        r
    }
    ,
    n.prototype.outerWidth = function(t) {
        var n, r = this.innerWidth();
        return t && !e(this.element) && (n = window.getComputedStyle(this.element),
        r += parseInt(n.marginLeft, 10),
        r += parseInt(n.marginRight, 10)),
        r
    }
    ,
    n.prototype.scrollLeft = function() {
        var e = t(this.element);
        return e ? e.pageXOffset : this.element.scrollLeft
    }
    ,
    n.prototype.scrollTop = function() {
        var e = t(this.element);
        return e ? e.pageYOffset : this.element.scrollTop
    }
    ,
    n.extend = function() {
        function e(e, t) {
            if ("object" == typeof e && "object" == typeof t)
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }
        for (var t = Array.prototype.slice.call(arguments), n = 1, r = t.length; r > n; n++)
            e(t[0], t[n]);
        return t[0]
    }
    ,
    n.inArray = function(e, t, n) {
        return null == t ? -1 : t.indexOf(e, n)
    }
    ,
    n.isEmptyObject = function(e) {
        for (var t in e)
            return !1;
        return !0
    }
    ,
    r.adapters.push({
        name: "noframework",
        Adapter: n
    }),
    r.Adapter = n
}();
