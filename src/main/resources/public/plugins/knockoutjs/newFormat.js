/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ ;
! function (d, c) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = d.document ? c(d, !0) : function (b) {
        if (!b.document) {
            throw new Error("jQuery requires a window with a document")
        }
        return c(b)
    } : c(d)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = "".trim,
        l = {},
        m = "1.11.0",
        n = function (a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function (a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function () {
            return d.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        }, pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return n.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(d.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
            if (null != (e = arguments[h])) {
                for (d in e) {
                    a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c))
                }
            }
        }
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        }, noop: function () {}, isFunction: function (a) {
            return "function" === n.type(a)
        }, isArray: Array.isArray || function (a) {
            return "array" === n.type(a)
        }, isWindow: function (a) {
            return null != a && a == a.window
        }, isNumeric: function (a) {
            return a - parseFloat(a) >= 0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a) {
                return !1
            }
            return !0
        }, isPlainObject: function (a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) {
                return !1
            }
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) {
                    return !1
                }
            } catch (c) {
                return !1
            }
            if (l.ownLast) {
                for (b in a) {
                    return j.call(a, b)
                }
            }
            for (b in a) {}
            return void 0 === b || j.call(a, b)
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        }, globalEval: function (b) {
            b && n.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        }, camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, c) {
            var d, e = 0,
                f = a.length,
                g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++) {
                        if (d = b.apply(a[e], c), d === !1) {
                            break
                        }
                    }
                } else {
                    for (e in a) {
                        if (d = b.apply(a[e], c), d === !1) {
                            break
                        }
                    }
                }
            } else {
                if (g) {
                    for (; f > e; e++) {
                        if (d = b.call(a[e], e, a[e]), d === !1) {
                            break
                        }
                    }
                } else {
                    for (e in a) {
                        if (d = b.call(a[e], e, a[e]), d === !1) {
                            break
                        }
                    }
                }
            }
            return a
        }, trim: k && !k.call("\ufeff\xa0") ? function (a) {
            return null == a ? "" : k.call(a)
        } : function (a) {
            return null == a ? "" : (a + "").replace(o, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if (g) {
                    return g.call(b, a, c)
                }
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
                    if (c in b && b[c] === a) {
                        return c
                    }
                }
            }
            return -1
        }, merge: function (a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) {
                a[e++] = b[d++]
            }
            if (c !== c) {
                while (void 0 !== b[d]) {
                    a[e++] = b[d++]
                }
            }
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                d = !b(a[f], f), d !== h && e.push(a[f])
            }
            return e
        }, map: function (a, b, c) {
            var d, f = 0,
                g = a.length,
                h = s(a),
                i = [];
            if (h) {
                for (; g > f; f++) {
                    d = b(a[f], f, c), null != d && i.push(d)
                }
            } else {
                for (f in a) {
                    d = b(a[f], f, c), null != d && i.push(d)
                }
            }
            return e.apply([], i)
        }, guid: 1,
        proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = d.call(arguments, 2), e = function () {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || n.guid++, e) : void 0
        }, now: function () {
            return +new Date
        }, support: l
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -new Date,
            t = a.document,
            u = 0,
            v = 0,
            w = eb(),
            x = eb(),
            y = eb(),
            z = function (a, b) {
                return a === b && (j = !0), 0
            },
            A = "undefined",
            B = 1 << 31,
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = D.indexOf || function (a) {
                for (var b = 0, c = this.length; c > b; b++) {
                    if (this[b] === a) {
                        return b
                    }
                }
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            M = L.replace("w", "w#"),
            N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]",
            O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)",
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(O),
            U = new RegExp("^" + M + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = /'|\\/g,
            ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            bb = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType
        } catch (cb) {
            G = {
                apply: D.length ? function (a, b) {
                    F.apply(a, H.call(b))
                } : function (a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]) {}
                    a.length = c - 1
                }
            }
        }

        function db(a, b, d, e) {
            var f, g, h, i, j, m, p, q, u, v;
            if ((b ? b.ownerDocument || b : t) !== l && k(b), b = b || l, d = d || [], !a || "string" != typeof a) {
                return d
            }
            if (1 !== (i = b.nodeType) && 9 !== i) {
                return []
            }
            if (n && !e) {
                if (f = Z.exec(a)) {
                    if (h = f[1]) {
                        if (9 === i) {
                            if (g = b.getElementById(h), !g || !g.parentNode) {
                                return d
                            }
                            if (g.id === h) {
                                return d.push(g), d
                            }
                        } else {
                            if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h) {
                                return d.push(g), d
                            }
                        }
                    } else {
                        if (f[2]) {
                            return G.apply(d, b.getElementsByTagName(a)), d
                        }
                        if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName) {
                            return G.apply(d, b.getElementsByClassName(h)), d
                        }
                    }
                }
                if (c.qsa && (!o || !o.test(a))) {
                    if (q = p = s, u = b, v = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) {
                        m = ob(a), (p = b.getAttribute("id")) ? q = p.replace(_, "\\$&") : b.setAttribute("id", q), q = "[id='" + q + "'] ", j = m.length;
                        while (j--) {
                            m[j] = q + pb(m[j])
                        }
                        u = $.test(a) && mb(b.parentNode) || b, v = m.join(",")
                    }
                    if (v) {
                        try {
                            return G.apply(d, u.querySelectorAll(v)), d
                        } catch (w) {} finally {
                            p || b.removeAttribute("id")
                        }
                    }
                }
            }
            return xb(a.replace(P, "$1"), b, d, e)
        }

        function eb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function fb(a) {
            return a[s] = !0, a
        }

        function gb(a) {
            var b = l.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function hb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) {
                d.attrHandle[c[e]] = b
            }
        }

        function ib(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B);
            if (d) {
                return d
            }
            if (c) {
                while (c = c.nextSibling) {
                    if (c === b) {
                        return -1
                    }
                }
            }
            return a ? 1 : -1
        }

        function jb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function kb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function lb(a) {
            return fb(function (b) {
                return b = +b, fb(function (c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) {
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    }
                })
            })
        }

        function mb(a) {
            return a && typeof a.getElementsByTagName !== A && a
        }
        c = db.support = {}, f = db.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, k = db.setDocument = function (a) {
            var b, e = a ? a.ownerDocument || a : t,
                g = e.defaultView;
            return e !== l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () {
                k()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function () {
                k()
            })), c.attributes = gb(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = gb(function (a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(function (a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = gb(function (a) {
                return m.appendChild(a).id = s, !e.getElementsByName || !e.getElementsByName(s).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if (typeof b.getElementById !== A && n) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ab, bb);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ab, bb);
                return function (a) {
                    var c = typeof a.getAttributeNode !== A && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return typeof b.getElementsByTagName !== A ? b.getElementsByTagName(a) : void 0
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) {
                        1 === c.nodeType && d.push(c)
                    }
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return typeof b.getElementsByClassName !== A && n ? b.getElementsByClassName(a) : void 0
            }, p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(function (a) {
                a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || o.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll(":checked").length || o.push(":checked")
            }), gb(function (a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && o.push("name" + K + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), o.push(",.*:")
            })), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function (a) {
                c.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", O)
            }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return !0
                        }
                    }
                }
                return !1
            }, z = b ? function (a, b) {
                if (a === b) {
                    return j = !0, 0
                }
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) {
                    return j = !0, 0
                }
                var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    k = [b];
                if (!f || !g) {
                    return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0
                }
                if (f === g) {
                    return ib(a, b)
                }
                c = a;
                while (c = c.parentNode) {
                    h.unshift(c)
                }
                c = b;
                while (c = c.parentNode) {
                    k.unshift(c)
                }
                while (h[d] === k[d]) {
                    d++
                }
                return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0
            }, e) : l
        }, db.matches = function (a, b) {
            return db(a, null, null, b)
        }, db.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== l && k(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b))) {
                try {
                    var d = q.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
                        return d
                    }
                } catch (e) {}
            }
            return db(b, l, null, [a]).length > 0
        }, db.contains = function (a, b) {
            return (a.ownerDocument || a) !== l && k(a), r(a, b)
        }, db.attr = function (a, b) {
            (a.ownerDocument || a) !== l && k(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0;
            return void 0 !== f ? f : c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, db.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, db.uniqueSort = function (a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) {
                while (b = a[f++]) {
                    b === a[f] && (e = d.push(f))
                }
                while (e--) {
                    a.splice(d[e], 1)
                }
            }
            return i = null, a
        }, e = db.getText = function (a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) {
                        return a.textContent
                    }
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a)
                    }
                } else {
                    if (3 === f || 4 === f) {
                        return a.nodeValue
                    }
                }
            } else {
                while (b = a[d++]) {
                    c += e(b)
                }
            }
            return c
        }, d = db.selectors = {
            cacheLength: 50,
            createPseudo: fb,
            match: V,
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
                ATTR: function (a) {
                    return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && db.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[5] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ab, bb).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = w[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && w(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== A && a.getAttribute("class") || "")
                    })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = db.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            t = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) {
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) {
                                            return !1
                                        }
                                    }
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && t) {
                                k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === u && j[1], m = j[0] === u && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [u, n, m];
                                        break
                                    }
                                }
                            } else {
                                if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u) {
                                    m = j[1]
                                } else {
                                    while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                        if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b)) {
                                            break
                                        }
                                    }
                                }
                            }
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("unsupported pseudo: " + a);
                    return e[s] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function (a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) {
                            d = I.call(a, f[g]), a[d] = !(c[d] = f[g])
                        }
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: fb(function (a) {
                    var b = [],
                        c = [],
                        d = g(a.replace(P, "$1"));
                    return d[s] ? fb(function (a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--) {
                            (f = g[h]) && (a[h] = !(b[h] = f))
                        }
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: fb(function (a) {
                    return function (b) {
                        return db(a, b).length > 0
                    }
                }),
                contains: fb(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: fb(function (a) {
                    return U.test(a || "") || db.error("unsupported lang: " + a), a = a.replace(ab, bb).toLowerCase(),
                        function (b) {
                            var c;
                            do {
                                if (c = n ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) {
                                    return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-")
                                }
                            } while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === m
                }, focus: function (a) {
                    return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) {
                            return !1
                        }
                    }
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return X.test(a.nodeName)
                }, input: function (a) {
                    return W.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: lb(function () {
                    return [0]
                }),
                last: lb(function (a, b) {
                    return [b - 1]
                }),
                eq: lb(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: lb(function (a, b) {
                    for (var c = 0; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }),
                odd: lb(function (a, b) {
                    for (var c = 1; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }),
                lt: lb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) {
                        a.push(d)
                    }
                    return a
                }),
                gt: lb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) {
                        a.push(d)
                    }
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) {
            d.pseudos[b] = jb(b)
        }
        for (b in {
            submit: !0,
            reset: !0
        }) {
            d.pseudos[b] = kb(b)
        }

        function nb() {}
        nb.prototype = d.filters = d.pseudos, d.setFilters = new nb;

        function ob(a, b) {
            var c, e, f, g, h, i, j, k = x[a + " "];
            if (k) {
                return b ? 0 : k.slice(0)
            }
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) {
                    !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length))
                }
                if (!c) {
                    break
                }
            }
            return b ? h.length : h ? db.error(a) : x(a, i).slice(0)
        }

        function pb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) {
                d += a[b].value
            }
            return d
        }

        function qb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = v++;
            return b.first ? function (b, c, f) {
                while (b = b[d]) {
                    if (1 === b.nodeType || e) {
                        return a(b, c, f)
                    }
                }
            } : function (b, c, g) {
                var h, i, j = [u, f];
                if (g) {
                    while (b = b[d]) {
                        if ((1 === b.nodeType || e) && a(b, c, g)) {
                            return !0
                        }
                    }
                } else {
                    while (b = b[d]) {
                        if (1 === b.nodeType || e) {
                            if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f) {
                                return j[2] = h[2]
                            }
                            if (i[d] = j, j[2] = a(b, c, g)) {
                                return !0
                            }
                        }
                    }
                }
            }
        }

        function rb(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--) {
                    if (!a[e](b, c, d)) {
                        return !1
                    }
                }
                return !0
            } : a[0]
        }

        function sb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h))
            }
            return g
        }

        function tb(a, b, c, d, e, f) {
            return d && !d[s] && (d = tb(d)), e && !e[s] && (e = tb(e, f)), fb(function (f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || wb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : sb(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = sb(r, n), d(j, [], h, i), k = j.length;
                    while (k--) {
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                    }
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) {
                                (l = r[k]) && j.push(q[k] = l)
                            }
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) {
                            (l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    }
                } else {
                    r = sb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
                }
            })
        }

        function ub(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], i = g || d.relative[" "], j = g ? 1 : 0, k = qb(function (a) {
                return a === b
            }, i, !0), l = qb(function (a) {
                return I.call(b, a) > -1
            }, i, !0), m = [
                function (a, c, d) {
                    return !g && (d || c !== h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                }
            ]; f > j; j++) {
                if (c = d.relative[a[j].type]) {
                    m = [qb(rb(m), c)]
                } else {
                    if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) {
                        for (e = ++j; f > e; e++) {
                            if (d.relative[a[e].type]) {
                                break
                            }
                        }
                        return tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({
                            value: " " === a[j - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a))
                    }
                    m.push(c)
                }
            }
            return rb(m)
        }

        function vb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function (f, g, i, j, k) {
                    var m, n, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = h,
                        v = f || e && d.find.TAG("*", k),
                        w = u += null == t ? 1 : Math.random() || 0.1,
                        x = v.length;
                    for (k && (h = g !== l && g); q !== x && null != (m = v[q]); q++) {
                        if (e && m) {
                            n = 0;
                            while (o = a[n++]) {
                                if (o(m, g, i)) {
                                    j.push(m);
                                    break
                                }
                            }
                            k && (u = w)
                        }
                        c && ((m = !o && m) && p--, f && r.push(m))
                    }
                    if (p += q, c && q !== p) {
                        n = 0;
                        while (o = b[n++]) {
                            o(r, s, g, i)
                        }
                        if (f) {
                            if (p > 0) {
                                while (q--) {
                                    r[q] || s[q] || (s[q] = E.call(j))
                                }
                            }
                            s = sb(s)
                        }
                        G.apply(j, s), k && !f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j)
                    }
                    return k && (u = w, h = t), r
                };
            return c ? fb(f) : f
        }
        g = db.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = y[a + " "];
            if (!f) {
                b || (b = ob(a)), c = b.length;
                while (c--) {
                    f = ub(b[c]), f[s] ? d.push(f) : e.push(f)
                }
                f = y(a, vb(e, d))
            }
            return f
        };

        function wb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) {
                db(a, b[d], c)
            }
            return c
        }

        function xb(a, b, e, f) {
            var h, i, j, k, l, m = ob(a);
            if (!f && 1 === m.length) {
                if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b) {
                        return e
                    }
                    a = a.slice(i.shift().value.length)
                }
                h = V.needsContext.test(a) ? 0 : i.length;
                while (h--) {
                    if (j = i[h], d.relative[k = j.type]) {
                        break
                    }
                    if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) {
                        if (i.splice(h, 1), a = f.length && pb(i), !a) {
                            return G.apply(e, f), e
                        }
                        break
                    }
                }
            }
            return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b), e
        }
        return c.sortStable = s.split("").sort(z).join("") === s, c.detectDuplicates = !!j, k(), c.sortDetached = gb(function (a) {
            return 1 & a.compareDocumentPosition(l.createElement("div"))
        }), gb(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || hb("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && gb(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || hb("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), gb(function (a) {
            return null == a.getAttribute("disabled")
        }) || hb(J, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), db
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b)) {
            return n.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c
            })
        }
        if (b.nodeType) {
            return n.grep(a, function (a) {
                return a === b !== c
            })
        }
        if ("string" == typeof b) {
            if (w.test(b)) {
                return n.filter(b, a, c)
            }
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return n.inArray(a, b) >= 0 !== c
        })
    }
    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) {
                return this.pushStack(n(a).filter(function () {
                    for (b = 0; e > b; b++) {
                        if (n.contains(d[b], this)) {
                            return !0
                        }
                    }
                }))
            }
            for (b = 0; e > b; b++) {
                n.find(a, d[b], c)
            }
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        }, filter: function (a) {
            return this.pushStack(x(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(x(this, a || [], !0))
        }, is: function (a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = a.document,
        A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        B = n.fn.init = function (a, b) {
            var c, d;
            if (!a) {
                return this
            }
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : A.exec(a), !c || !c[1] && b) {
                    return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a)
                }
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : z, !0)), v.test(c[1]) && n.isPlainObject(b)) {
                        for (c in b) {
                            n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c])
                        }
                    }
                    return this
                }
                if (d = z.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) {
                        return y.find(a)
                    }
                    this.length = 1, this[0] = d
                }
                return this.context = z, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    B.prototype = n.fn, y = n(z);
    var C = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.extend({
        dir: function (a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !n(e).is(c))) {
                1 === e.nodeType && d.push(e), e = e[b]
            }
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) {
                1 === a.nodeType && a !== b && c.push(a)
            }
            return c
        }
    }), n.fn.extend({
        has: function (a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++) {
                    if (n.contains(this, c[b])) {
                        return !0
                    }
                }
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
                }
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function E(a, b) {
        do {
            a = a[b]
        } while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return n.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return n.dir(a, "parentNode", c)
        }, next: function (a) {
            return E(a, "nextSibling")
        }, prev: function (a) {
            return E(a, "previousSibling")
        }, nextAll: function (a) {
            return n.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return n.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return n.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return n.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return n.sibling(a.firstChild)
        }, contents: function (a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (D[a] || (e = n.unique(e)), C.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var F = /\S+/g,
        G = {};

    function H(a) {
        var b = G[a] = {};
        return n.each(a.match(F) || [], function (a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function (a) {
        a = "string" == typeof a ? G[a] || H(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function (l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) {
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = {
                add: function () {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            n.each(b, function (b, c) {
                                var d = n.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                }, remove: function () {
                    return h && n.each(arguments, function (a, c) {
                        var d;
                        while ((d = n.inArray(c, h, d)) > -1) {
                            h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                        }
                    }), this
                }, has: function (a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
                }, empty: function () {
                    return h = [], e = 0, this
                }, disable: function () {
                    return h = i = c = void 0, this
                }, disabled: function () {
                    return !h
                }, lock: function () {
                    return i = void 0, c || k.disable(), this
                }, locked: function () {
                    return !i
                }, fireWith: function (a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                }, fire: function () {
                    return k.fireWith(this, arguments), this
                }, fired: function () {
                    return !!d
                }
            };
        return k
    }, n.extend({
        Deferred: function (a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function () {
                        return c
                    }, always: function () {
                        return e.done(arguments).fail(arguments), this
                    }, then: function () {
                        var a = arguments;
                        return n.Deferred(function (c) {
                            n.each(b, function (b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function (a, b, c) {
                    return function (e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1) {
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f
                }
            }
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        }, ready: function (a) {
            if (a === !0 ? !--n.readyWait : !n.isReady) {
                if (!z.body) {
                    return setTimeout(n.ready)
                }
                n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(z, [n]), n.fn.trigger && n(z).trigger("ready").off("ready"))
            }
        }
    });

    function J() {
        z.addEventListener ? (z.removeEventListener("DOMContentLoaded", K, !1), a.removeEventListener("load", K, !1)) : (z.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (z.addEventListener || "load" === event.type || "complete" === z.readyState) && (J(), n.ready())
    }
    n.ready.promise = function (b) {
        if (!I) {
            if (I = n.Deferred(), "complete" === z.readyState) {
                setTimeout(n.ready)
            } else {
                if (z.addEventListener) {
                    z.addEventListener("DOMContentLoaded", K, !1), a.addEventListener("load", K, !1)
                } else {
                    z.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
                    var c = !1;
                    try {
                        c = null == a.frameElement && z.documentElement
                    } catch (d) {}
                    c && c.doScroll && ! function e() {
                        if (!n.isReady) {
                            try {
                                c.doScroll("left")
                            } catch (a) {
                                return setTimeout(e, 50)
                            }
                            J(), n.ready()
                        }
                    }()
                }
            }
        }
        return I.promise(b)
    };
    var L = "undefined",
        M;
    for (M in n(l)) {
        break
    }
    l.ownLast = "0" !== M, l.inlineBlockNeedsLayout = !1, n(function () {
            var a, b, c = z.getElementsByTagName("body")[0];
            c && (a = z.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = z.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== L && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (l.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a), a = b = null)
        }),
        function () {
            var a = z.createElement("div");
            if (null == l.deleteExpando) {
                l.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    l.deleteExpando = !1
                }
            }
            a = null
        }(), n.acceptData = function (a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else {
                c = void 0
            }
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a) {
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) {
                return !1
            }
        }
        return !0
    }

    function R(a, b, d, e) {
        if (n.acceptData(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) {
                return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                    toJSON: n.noop
                }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
            }
        }
    }

    function S(a, b, c) {
        if (n.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) {
                        delete d[b[e]]
                    }
                    if (c ? !Q(d) : !n.isEmptyObject(d)) {
                        return
                    }
                }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    n.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
        }, data: function (a, b, c) {
            return R(a, b, c)
        }, removeData: function (a, b) {
            return S(a, b)
        }, _data: function (a, b, c) {
            return R(a, b, c, !0)
        }, _removeData: function (a, b) {
            return S(a, b, !0)
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) {
                        d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d]))
                    }
                    n._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                n.data(this, a)
            }) : arguments.length > 1 ? this.each(function () {
                n.data(this, a, b)
            }) : f ? P(f, a, n.data(f, a)) : void 0
        }, removeData: function (a) {
            return this.each(function () {
                n.removeData(this, a)
            })
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function () {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return n._data(a, c) || n._data(a, c, {
                empty: n.Callbacks("once memory").add(function () {
                    n._removeData(a, b + "queue"), n._removeData(a, c)
                })
            })
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function () {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) {
                c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h))
            }
            return h(), e.promise(b)
        }
    });
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = ["Top", "Right", "Bottom", "Left"],
        V = function (a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        },
        W = n.access = function (a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) {
                    n.access(a, b, h, c[h], !0, f, g)
                }
            } else {
                if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                    return j.call(n(a), c)
                })), b)) {
                    for (; i > h; h++) {
                        b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)))
                    }
                }
            }
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        X = /^(?:checkbox|radio)$/i;
    ! function () {
        var a = z.createDocumentFragment(),
            b = z.createElement("div"),
            c = z.createElement("input");
        if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", l.leadingWhitespace = 3 === b.firstChild.nodeType, l.tbody = !b.getElementsByTagName("tbody").length, l.htmlSerialize = !!b.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), l.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
            l.noCloneEvent = !1
        }), b.cloneNode(!0).click()), null == l.deleteExpando) {
            l.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                l.deleteExpando = !1
            }
        }
        a = b = c = null
    }(),
    function () {
        var b, c, d = z.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        }) {
            c = "on" + b, (l[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), l[b + "Bubbles"] = d.attributes[c].expando === !1)
        }
        d = null
    }();
    var Y = /^(?:input|select|textarea)$/i,
        Z = /^key/,
        $ = /^(?:mouse|contextmenu)|click/,
        _ = /^(?:focusinfocus|focusoutblur)$/,
        ab = /^([^.]*)(?:\.(.+)|)$/;

    function bb() {
        return !0
    }

    function cb() {
        return !1
    }

    function db() {
        try {
            return z.activeElement
        } catch (a) {}
    }
    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                    return typeof n === L || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(F) || [""], h = b.length;
                while (h--) {
                    f = ab.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0)
                }
                a = null
            }
        }, remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(F) || [""], j = b.length;
                while (j--) {
                    if (h = ab.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) {
                            g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g))
                        }
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else {
                        for (o in k) {
                            n.event.remove(a, o + b[j], c, d, !0)
                        }
                    }
                }
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        }, trigger: function (b, c, d, e) {
            var f, g, h, i, k, l, m, o = [d || z],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || z, 3 !== d.nodeType && 8 !== d.nodeType && !_.test(p + n.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[n.expando] ? b : new n.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), k = n.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !n.isWindow(d)) {
                    for (i = k.delegateType || p, _.test(i + p) || (h = h.parentNode); h; h = h.parentNode) {
                        o.push(h), l = h
                    }
                    l === (d.ownerDocument || z) && o.push(l.defaultView || l.parentWindow || a)
                }
                m = 0;
                while ((h = o[m++]) && !b.isPropagationStopped()) {
                    b.type = m > 1 ? i : k.bindType || p, f = (n._data(h, "events") || {})[b.type] && n._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && n.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault())
                }
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && n.acceptData(d) && g && d[p] && !n.isWindow(d)) {
                    l = d[g], l && (d[g] = null), n.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    n.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        }, dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) {
                        (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((n.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                    }
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        }, handlers: function (a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) {
                for (; i != this; i = i.parentNode || this) {
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) {
                            d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? n(c, this).index(i) >= 0 : n.find(c, this, null, [i]).length), e[c] && e.push(d)
                        }
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
                }
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        }, fix: function (a) {
            if (a[n.expando]) {
                return a
            }
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = $.test(e) ? this.mouseHooks : Z.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) {
                c = d[b], a[c] = f[c]
            }
            return a.target || (a.target = f.srcElement || z), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || z, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== db() && this.focus) {
                        try {
                            return this.focus(), !1
                        } catch (a) {}
                    }
                }, delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === db() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = z.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === L && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? bb : cb) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: cb,
        isPropagationStopped: cb,
        isImmediatePropagationStopped: cb,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = bb, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        }, stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = bb, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = bb, this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submitBubbles || (n.event.special.submit = {
        setup: function () {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? b.form : void 0;
                c && !n._data(c, "submitBubbles") && (n.event.add(c, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), n._data(c, "submitBubbles", !0))
            })
        }, postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a, !0))
        }, teardown: function () {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }), l.changeBubbles || (n.event.special.change = {
        setup: function () {
            return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), n.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), n.event.simulate("change", this, a, !0)
            })), !1) : void n.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                Y.test(b.nodeName) && !n._data(b, "changeBubbles") && (n.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a, !0)
                }), n._data(b, "changeBubbles", !0))
            })
        }, handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return n.event.remove(this, "._change"), !Y.test(this.nodeName)
        }
    }), l.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) {
                    this.on(f, b, c, a[f], e)
                }
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) {
                d = cb
            } else {
                if (!d) {
                    return this
                }
            }
            return 1 === e && (g = d, d = function (a) {
                return n().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = n.guid++)), this.each(function () {
                n.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) {
                return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this
            }
            if ("object" == typeof a) {
                for (e in a) {
                    this.off(e, b, a[e])
                }
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = cb), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });

    function eb(a) {
        var b = fb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop())
            }
        }
        return c
    }
    var fb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gb = / jQuery\d+="(?:null|\d+)"/g,
        hb = new RegExp("<(?:" + fb + ")[\\s/>]", "i"),
        ib = /^\s+/,
        jb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        kb = /<([\w:]+)/,
        lb = /<tbody/i,
        mb = /<|&#?\w+;/,
        nb = /<(?:script|style|link)/i,
        ob = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pb = /^$|\/(?:java|ecma)script/i,
        qb = /^true\/(.*)/,
        rb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        sb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        tb = eb(z),
        ub = tb.appendChild(z.createElement("div"));
    sb.optgroup = sb.option, sb.tbody = sb.tfoot = sb.colgroup = sb.caption = sb.thead, sb.th = sb.td;

    function vb(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== L ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== L ? a.querySelectorAll(b || "*") : void 0;
        if (!f) {
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
                !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, vb(d, b))
            }
        }
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function wb(a) {
        X.test(a.type) && (a.defaultChecked = a.checked)
    }

    function xb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function yb(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function zb(a) {
        var b = qb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ab(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) {
            n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
        }
    }

    function Bb(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) {
                    for (d = 0, e = h[c].length; e > d; d++) {
                        n.event.add(b, c, h[c][d])
                    }
                }
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Cb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) {
                    n.removeEvent(b, d, e.handle)
                }
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (yb(b).text = a.text, zb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && X.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    n.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !hb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ub.innerHTML = a.outerHTML, ub.removeChild(f = ub.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) {
                for (d = vb(f), h = vb(a), g = 0; null != (e = h[g]); ++g) {
                    d[g] && Cb(e, d[g])
                }
            }
            if (b) {
                if (c) {
                    for (h = h || vb(a), d = d || vb(f), g = 0; null != (e = h[g]); g++) {
                        Bb(e, d[g])
                    }
                } else {
                    Bb(a, f)
                }
            }
            return d = vb(f, "script"), d.length > 0 && Ab(d, !i && vb(a, "script")), d = h = e = null, f
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k, m = a.length, o = eb(b), p = [], q = 0; m > q; q++) {
                if (f = a[q], f || 0 === f) {
                    if ("object" === n.type(f)) {
                        n.merge(p, f.nodeType ? [f] : f)
                    } else {
                        if (mb.test(f)) {
                            h = h || o.appendChild(b.createElement("div")), i = (kb.exec(f) || ["", ""])[1].toLowerCase(), k = sb[i] || sb._default, h.innerHTML = k[1] + f.replace(jb, "<$1></$2>") + k[2], e = k[0];
                            while (e--) {
                                h = h.lastChild
                            }
                            if (!l.leadingWhitespace && ib.test(f) && p.push(b.createTextNode(ib.exec(f)[0])), !l.tbody) {
                                f = "table" !== i || lb.test(f) ? "<table>" !== k[1] || lb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                                while (e--) {
                                    n.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                                }
                            }
                            n.merge(p, h.childNodes), h.textContent = "";
                            while (h.firstChild) {
                                h.removeChild(h.firstChild)
                            }
                            h = o.lastChild
                        } else {
                            p.push(b.createTextNode(f))
                        }
                    }
                }
            }
            h && o.removeChild(h), l.appendChecked || n.grep(vb(p, "input"), wb), q = 0;
            while (f = p[q++]) {
                if ((!d || -1 === n.inArray(f, d)) && (g = n.contains(f.ownerDocument, f), h = vb(o.appendChild(f), "script"), g && Ab(h), c)) {
                    e = 0;
                    while (f = h[e++]) {
                        pb.test(f.type || "") && c.push(f)
                    }
                }
            }
            return h = null, o
        }, cleanData: function (a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.deleteExpando, m = n.event.special; null != (d = a[h]); h++) {
                if ((b || n.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events) {
                        for (e in g.events) {
                            m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle)
                        }
                    }
                    j[f] && (delete j[f], k ? delete d[i] : typeof d.removeAttribute !== L ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
            }
        }
    }), n.fn.extend({
        text: function (a) {
            return W(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(a))
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
                b || 1 !== c.nodeType || n.cleanData(vb(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && Ab(vb(c, "script")), c.parentNode.removeChild(c))
            }
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(vb(a, !1));
                while (a.firstChild) {
                    a.removeChild(a.firstChild)
                }
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        }, html: function (a) {
            return W(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) {
                    return 1 === b.nodeType ? b.innerHTML.replace(gb, "") : void 0
                }
                if (!("string" != typeof a || nb.test(a) || !l.htmlSerialize && hb.test(a) || !l.leadingWhitespace && ib.test(a) || sb[(kb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(jb, "<$1></$2>");
                    try {
                        for (; d > c; c++) {
                            b = this[c] || {}, 1 === b.nodeType && (n.cleanData(vb(b, !1)), b.innerHTML = a)
                        }
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, n.cleanData(vb(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                k = this.length,
                m = this,
                o = k - 1,
                p = a[0],
                q = n.isFunction(p);
            if (q || k > 1 && "string" == typeof p && !l.checkClone && ob.test(p)) {
                return this.each(function (c) {
                    var d = m.eq(c);
                    q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
                })
            }
            if (k && (i = n.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = n.map(vb(i, "script"), yb), f = g.length; k > j; j++) {
                    d = i, j !== o && (d = n.clone(d, !0, !0), f && n.merge(g, vb(d, "script"))), b.call(this[j], d, j)
                }
                if (f) {
                    for (h = g[g.length - 1].ownerDocument, n.map(g, zb), j = 0; f > j; j++) {
                        d = g[j], pb.test(d.type || "") && !n._data(d, "globalEval") && n.contains(h, d) && (d.src ? n._evalUrl && n._evalUrl(d.src) : n.globalEval((d.text || d.textContent || d.innerHTML || "").replace(rb, "")))
                    }
                }
                i = c = null
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = 0, e = [], g = n(a), h = g.length - 1; h >= d; d++) {
                c = d === h ? this : this.clone(!0), n(g[d])[b](c), f.apply(e, c.get())
            }
            return this.pushStack(e)
        }
    });
    var Db, Eb = {};

    function Fb(b, c) {
        var d = n(c.createElement(b)).appendTo(c.body),
            e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : n.css(d[0], "display");
        return d.detach(), e
    }

    function Gb(a) {
        var b = z,
            c = Eb[a];
        return c || (c = Fb(a, b), "none" !== c && c || (Db = (Db || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Db[0].contentWindow || Db[0].contentDocument).document, b.write(), b.close(), c = Fb(a, b), Db.detach()), Eb[a] = c), c
    }! function () {
        var a, b, c = z.createElement("div"),
            d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], a.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(a.style.opacity), l.cssFloat = !!a.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === c.style.backgroundClip, a = c = null, l.shrinkWrapBlocks = function () {
            var a, c, e, f;
            if (null == b) {
                if (a = z.getElementsByTagName("body")[0], !a) {
                    return
                }
                f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = z.createElement("div"), e = z.createElement("div"), a.appendChild(c).appendChild(e), b = !1, typeof e.style.zoom !== L && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", b = 3 !== e.offsetWidth), a.removeChild(c), a = c = e = null
            }
            return b
        }
    }();
    var Hb = /^margin/,
        Ib = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Jb, Kb, Lb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Jb = function (a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Kb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Jb(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), Ib.test(g) && Hb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : z.documentElement.currentStyle && (Jb = function (a) {
        return a.currentStyle
    }, Kb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Jb(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ib.test(g) && !Lb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Mb(a, b) {
        return {
            get: function () {
                var c = a();
                if (null != c) {
                    return c ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }
    }! function () {
        var b, c, d, e, f, g, h = z.createElement("div"),
            i = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            j = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", b = h.getElementsByTagName("a")[0], b.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(b.style.opacity), l.cssFloat = !!b.style.cssFloat, h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, b = h = null, n.extend(l, {
            reliableHiddenOffsets: function () {
                if (null != c) {
                    return c
                }
                var a, b, d, e = z.createElement("div"),
                    f = z.getElementsByTagName("body")[0];
                if (f) {
                    return e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = z.createElement("div"), a.style.cssText = i, f.appendChild(a).appendChild(e), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = e.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", d = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", c = d && 0 === b[0].offsetHeight, f.removeChild(a), e = f = null, c
                }
            }, boxSizing: function () {
                return null == d && k(), d
            }, boxSizingReliable: function () {
                return null == e && k(), e
            }, pixelPosition: function () {
                return null == f && k(), f
            }, reliableMarginRight: function () {
                var b, c, d, e;
                if (null == g && a.getComputedStyle) {
                    if (b = z.getElementsByTagName("body")[0], !b) {
                        return
                    }
                    c = z.createElement("div"), d = z.createElement("div"), c.style.cssText = i, b.appendChild(c).appendChild(d), e = d.appendChild(z.createElement("div")), e.style.cssText = d.style.cssText = j, e.style.marginRight = e.style.width = "0", d.style.width = "1px", g = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(c)
                }
                return g
            }
        });

        function k() {
            var b, c, h = z.getElementsByTagName("body")[0];
            h && (b = z.createElement("div"), c = z.createElement("div"), b.style.cssText = i, h.appendChild(b).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", n.swap(h, null != h.style.zoom ? {
                zoom: 1
            } : {}, function () {
                d = 4 === c.offsetWidth
            }), e = !0, f = !1, g = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(c, null) || {}).top, e = "4px" === (a.getComputedStyle(c, null) || {
                width: "4px"
            }).width), h.removeChild(b), c = h = null)
        }
    }(), n.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) {
            g[f] = a.style[f], a.style[f] = b[f]
        }
        e = c.apply(a, d || []);
        for (f in b) {
            a.style[f] = g[f]
        }
        return e
    };
    var Nb = /alpha\([^)]*\)/i,
        Ob = /opacity\s*=\s*([^)]*)/,
        Pb = /^(none|table(?!-c[ea]).+)/,
        Qb = new RegExp("^(" + T + ")(.*)$", "i"),
        Rb = new RegExp("^([+-])=(" + T + ")", "i"),
        Sb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Tb = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Ub = ["Webkit", "O", "Moz", "ms"];

    function Vb(a, b) {
        if (b in a) {
            return b
        }
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Ub.length;
        while (e--) {
            if (b = Ub[e] + c, b in a) {
                return b
            }
        }
        return d
    }

    function Wb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
            d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = n._data(d, "olddisplay", Gb(d.nodeName)))) : f[g] || (e = V(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))))
        }
        for (g = 0; h > g; g++) {
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"))
        }
        return a
    }

    function Xb(a, b, c) {
        var d = Qb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Yb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
            "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)))
        }
        return g
    }

    function Zb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Jb(a),
            g = l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Kb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ib.test(e)) {
                return e
            }
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Yb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Kb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = Vb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) {
                    return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]
                }
                if (f = typeof c, "string" === f && (e = Rb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) {
                    try {
                        i[b] = "", i[b] = c
                    } catch (j) {}
                }
            }
        }, css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Vb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Kb(a, b, d)), "normal" === f && b in Tb && (f = Tb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || n.isNumeric(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? 0 === a.offsetWidth && Pb.test(n.css(a, "display")) ? n.swap(a, Sb, function () {
                    return Zb(a, b, d)
                }) : Zb(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && Jb(a);
                return Xb(a, c, d ? Yb(a, b, d, l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function (a, b) {
            return Ob.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Nb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Nb.test(f) ? f.replace(Nb, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Mb(l.reliableMarginRight, function (a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, Kb, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                    e[a + U[d] + b] = f[d] || f[d - 2] || f[0]
                }
                return e
            }
        }, Hb.test(a) || (n.cssHooks[a + b].set = Xb)
    }), n.fn.extend({
        css: function (a, b) {
            return W(this, function (a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Jb(a), e = b.length; e > g; g++) {
                        f[b[g]] = n.css(a, b[g], !1, d)
                    }
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return Wb(this, !0)
        }, hide: function () {
            return Wb(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function $b(a, b, c, d, e) {
        return new $b.prototype.init(a, b, c, d, e)
    }
    n.Tween = $b, $b.prototype = {
        constructor: $b,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = $b.propHooks[this.prop];
            return a && a.get ? a.get(this) : $b.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = $b.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : $b.propHooks._default.set(this), this
        }
    }, $b.prototype.init.prototype = $b.prototype, $b.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, $b.propHooks.scrollTop = $b.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = $b.prototype.init, n.fx.step = {};
    var _b, ac, bc = /^(?:toggle|show|hide)$/,
        cc = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        dc = /queueHooks$/,
        ec = [jc],
        fc = {
            "*": [
                function (a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = cc.exec(b),
                        f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                        g = (n.cssNumber[a] || "px" !== f && +d) && cc.exec(n.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do {
                            h = h || ".5", g /= h, n.style(c.elem, a, g + f)
                        } while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }
            ]
        };

    function gc() {
        return setTimeout(function () {
            _b = void 0
        }), _b = n.now()
    }

    function hc(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
            c = U[e], d["margin" + c] = d["padding" + c] = a
        }
        return b && (d.opacity = d.width = a), d
    }

    function ic(a, b, c) {
        for (var d, e = (fc[b] || []).concat(fc["*"]), f = 0, g = e.length; g > f; f++) {
            if (d = e[f].call(c, b, a)) {
                return d
            }
        }
    }

    function jc(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && V(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, m.always(function () {
            m.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = Gb(a.nodeName), "none" === j && (j = k), "inline" === j && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== k ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b) {
            if (e = b[d], bc.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) {
                        continue
                    }
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            }
        }
        if (!n.isEmptyObject(o)) {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () {
                n(a).hide()
            }), m.done(function () {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) {
                    n.style(a, b, o[b])
                }
            });
            for (d in o) {
                g = ic(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }
    }

    function kc(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e)
                }
            } else {
                b[d] = e
            }
        }
    }

    function lc(a, b, c) {
        var d, e, f = 0,
            g = ec.length,
            h = n.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) {
                    return !1
                }
                for (var b = _b || gc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                    j.tweens[g].run(f)
                }
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: _b || gc(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                }, stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) {
                        return this
                    }
                    for (e = !0; d > c; c++) {
                        j.tweens[c].run(1)
                    }
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (kc(k, j.opts.specialEasing); g > f; f++) {
            if (d = ec[f].call(j, a, k, j.opts)) {
                return d
            }
        }
        return n.map(k, ic, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(lc, {
            tweener: function (a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) {
                    c = a[d], fc[c] = fc[c] || [], fc[c].unshift(b)
                }
            }, prefilter: function (a, b) {
                b ? ec.unshift(a) : ec.push(a)
            }
        }), n.speed = function (a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(V).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            }, animate: function (a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function () {
                        var b = lc(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            }, stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) {
                        g[e] && g[e].stop && d(g[e])
                    } else {
                        for (e in g) {
                            g[e] && g[e].stop && dc.test(e) && d(g[e])
                        }
                    }
                    for (e = f.length; e--;) {
                        f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1))
                    }(b || !c) && n.dequeue(this, a)
                })
            }, finish: function (a) {
                return a !== !1 && (a = a || "fx"), this.each(function () {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                        f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1))
                    }
                    for (b = 0; g > b; b++) {
                        d[b] && d[b].finish && d[b].finish.call(this)
                    }
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function (a, b) {
            var c = n.fn[b];
            n.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(hc(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: hc("show"),
            slideUp: hc("hide"),
            slideToggle: hc("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (a, b) {
            n.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function () {
            var a, b = n.timers,
                c = 0;
            for (_b = n.now(); c < b.length; c++) {
                a = b[c], a() || b[c] !== a || b.splice(c--, 1)
            }
            b.length || n.fx.stop(), _b = void 0
        }, n.fx.timer = function (a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function () {
            ac || (ac = setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function () {
            clearInterval(ac), ac = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function (a, b) {
            return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        },
        function () {
            var a, b, c, d, e = z.createElement("div");
            e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = e.getElementsByTagName("a")[0], c = z.createElement("select"), d = c.appendChild(z.createElement("option")), b = e.getElementsByTagName("input")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== e.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = d.selected, l.enctype = !!z.createElement("form").enctype, c.disabled = !0, l.optDisabled = !d.disabled, b = z.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value, a = b = c = d = e = null
        }();
    var mc = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            if (arguments.length) {
                return d = n.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                })
            }
            if (e) {
                return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(mc, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.text(a)
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                        if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) {
                                return b
                            }
                            g.push(b)
                        }
                    }
                    return g
                }, set: function (a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) {
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) {
                            try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            }
                        } else {
                            d.selected = !1
                        }
                    }
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var nc, oc, pc = n.expr.attrHandle,
        qc = /^(?:checked|selected)$/i,
        rc = l.getSetAttribute,
        sc = l.input;
    n.fn.extend({
        attr: function (a, b) {
            return W(this, n.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) {
                return typeof a.getAttribute === L ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? oc : nc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
            }
        }, removeAttr: function (a, b) {
            var c, d, e = 0,
                f = b && b.match(F);
            if (f && 1 === a.nodeType) {
                while (c = f[e++]) {
                    d = n.propFix[c] || c, n.expr.match.bool.test(c) ? sc && rc || !qc.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(rc ? c : d)
                }
            }
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), oc = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : sc && rc || !qc.test(c) ? a.setAttribute(!rc && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = pc[b] || n.find.attr;
        pc[b] = sc && rc || !qc.test(b) ? function (a, b, d) {
            var e, f;
            return d || (f = pc[b], pc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, pc[b] = f), e
        } : function (a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), sc && rc || (n.attrHooks.value = {
        set: function (a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : nc && nc.set(a, b, c)
        }
    }), rc || (nc = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, pc.id = pc.name = pc.coords = function (a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        }, set: nc.set
    }, n.attrHooks.contenteditable = {
        set: function (a, b, c) {
            nc.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function (a, b) {
        n.attrHooks[b] = {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        }, set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var tc = /^(?:input|select|textarea|button|object)$/i,
        uc = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return W(this, n.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return a = n.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) {
                return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            }
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : tc.test(a.nodeName) || uc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), l.hrefNormalized || n.each(["href", "src"], function (a, b) {
        n.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var vc = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (n.isFunction(a)) {
                return this.each(function (b) {
                    n(this).addClass(a.call(this, b, this.className))
                })
            }
            if (j) {
                for (b = (a || "").match(F) || []; i > h; h++) {
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) {
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ")
                        }
                        g = n.trim(d), c.className !== g && (c.className = g)
                    }
                }
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (n.isFunction(a)) {
                return this.each(function (b) {
                    n(this).removeClass(a.call(this, b, this.className))
                })
            }
            if (j) {
                for (b = (a || "").match(F) || []; i > h; h++) {
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : "")) {
                        f = 0;
                        while (e = b[f++]) {
                            while (d.indexOf(" " + e + " ") >= 0) {
                                d = d.replace(" " + e + " ", " ")
                            }
                        }
                        g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                    }
                }
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0,
                        e = n(this),
                        f = a.match(F) || [];
                    while (b = f[d++]) {
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                    }
                } else {
                    (c === L || "boolean" === c) && (this.className && n._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : n._data(this, "__className__") || "")
                }
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vc, " ").indexOf(b) >= 0) {
                    return !0
                }
            }
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var wc = n.now(),
        xc = /\?/,
        yc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) {
            return a.JSON.parse(b + "")
        }
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(yc, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function (b) {
        var c, d;
        if (!b || "string" != typeof b) {
            return null
        }
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var zc, Ac, Bc = /#.*$/,
        Cc = /([?&])_=[^&]*/,
        Dc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ec = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Fc = /^(?:GET|HEAD)$/,
        Gc = /^\/\//,
        Hc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ic = {},
        Jc = {},
        Kc = "*/".concat("*");
    try {
        Ac = location.href
    } catch (Lc) {
        Ac = z.createElement("a"), Ac.href = "", Ac = Ac.href
    }
    zc = Hc.exec(Ac.toLowerCase()) || [];

    function Mc(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(F) || [];
            if (n.isFunction(c)) {
                while (d = f[e++]) {
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
                }
            }
        }
    }

    function Nc(a, b, c, d) {
        var e = {},
            f = a === Jc;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Oc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) {
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d])
        }
        return c && n.extend(!0, a, c), a
    }

    function Pc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) {
            i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"))
        }
        if (e) {
            for (g in h) {
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
            }
        }
        if (i[0] in c) {
            f = i[0]
        } else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Qc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1]) {
            for (g in a.converters) {
                j[g.toLowerCase()] = a.converters[g]
            }
        }
        f = k.shift();
        while (f) {
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) {
                if ("*" === f) {
                    f = i
                } else {
                    if ("*" !== i && i !== f) {
                        if (g = j[i + " " + f] || j["* " + f], !g) {
                            for (e in j) {
                                if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                    break
                                }
                            }
                        }
                        if (g !== !0) {
                            if (g && a["throws"]) {
                                b = g(b)
                            } else {
                                try {
                                    b = g(b)
                                } catch (l) {
                                    return {
                                        state: "parsererror",
                                        error: g ? l : "No conversion from " + i + " to " + f
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ac,
            type: "GET",
            isLocal: Ec.test(zc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? Oc(Oc(a, n.ajaxSettings), b) : Oc(n.ajaxSettings, a)
        }, ajaxPrefilter: Mc(Ic),
        ajaxTransport: Mc(Jc),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                o = n.Deferred(),
                p = n.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Dc.exec(f)) {
                                    j[b[1].toLowerCase()] = b[2]
                                }
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    }, getAllResponseHeaders: function () {
                        return 2 === t ? f : null
                    }, setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    }, overrideMimeType: function (a) {
                        return t || (k.mimeType = a), this
                    }, statusCode: function (a) {
                        var b;
                        if (a) {
                            if (2 > t) {
                                for (b in a) {
                                    q[b] = [q[b], a[b]]
                                }
                            } else {
                                v.always(a[v.status])
                            }
                        }
                        return this
                    }, abort: function (a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || Ac) + "").replace(Bc, "").replace(Gc, zc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(F) || [""], null == k.crossDomain && (c = Hc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === zc[1] && c[2] === zc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (zc[3] || ("http:" === zc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), Nc(Ic, k, b, v), 2 === t) {
                return v
            }
            h = k.global, h && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Fc.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (xc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Cc.test(e) ? e.replace(Cc, "$1_=" + wc++) : e + (xc.test(e) ? "&" : "?") + "_=" + wc++)), k.ifModified && (n.lastModified[e] && v.setRequestHeader("If-Modified-Since", n.lastModified[e]), n.etag[e] && v.setRequestHeader("If-None-Match", n.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Kc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) {
                v.setRequestHeader(d, k.headers[d])
            }
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) {
                return v.abort()
            }
            u = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                v[d](k[d])
            }
            if (i = Nc(Jc, k, b, v)) {
                v.readyState = 1, h && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) {
                        throw w
                    }
                    x(-1, w)
                }
            } else {
                x(-1, "No Transport")
            }

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Pc(k, v, c)), u = Qc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (n.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }
            return v
        }, getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        }, getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n._evalUrl = function (a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function (a) {
            if (n.isFunction(a)) {
                return this.each(function (b) {
                    n(this).wrapAll(a.call(this, b))
                })
            }
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) {
                        a = a.firstChild
                    }
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            return this.each(n.isFunction(a) ? function (b) {
                n(this).wrapInner(a.call(this, b))
            } : function () {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !l.reliableHiddenOffsets() && "none" === (a.style && a.style.display || n.css(a, "display"))
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a)
    };
    var Rc = /%20/g,
        Sc = /\[\]$/,
        Tc = /\r?\n/g,
        Uc = /^(?:submit|button|image|reset|file)$/i,
        Vc = /^(?:input|select|textarea|keygen)/i;

    function Wc(a, b, c, d) {
        var e;
        if (n.isArray(b)) {
            n.each(b, function (b, e) {
                c || Sc.test(a) ? d(a, e) : Wc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            })
        } else {
            if (c || "object" !== n.type(b)) {
                d(a, b)
            } else {
                for (e in b) {
                    Wc(a + "[" + e + "]", b[e], c, d)
                }
            }
        }
    }
    n.param = function (a, b) {
        var c, d = [],
            e = function (a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) {
            n.each(a, function () {
                e(this.name, this.value)
            })
        } else {
            for (c in a) {
                Wc(c, a[c], b, e)
            }
        }
        return d.join("&").replace(Rc, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Vc.test(this.nodeName) && !Uc.test(a) && (this.checked || !X.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(Tc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Tc, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $c() || _c()
    } : $c;
    var Xc = 0,
        Yc = {},
        Zc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on("unload", function () {
        for (var a in Yc) {
            Yc[a](void 0, !0)
        }
    }), l.cors = !!Zc && "withCredentials" in Zc, Zc = l.ajax = !!Zc, Zc && n.ajaxTransport(function (a) {
        if (!a.crossDomain || l.cors) {
            var b;
            return {
                send: function (c, d) {
                    var e, f = a.xhr(),
                        g = ++Xc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) {
                        for (e in a.xhrFields) {
                            f[e] = a.xhrFields[e]
                        }
                    }
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) {
                        void 0 !== c[e] && f.setRequestHeader(e, c[e] + "")
                    }
                    f.send(a.hasContent && a.data || null), b = function (c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState)) {
                            if (delete Yc[g], b = void 0, f.onreadystatechange = n.noop, e) {
                                4 !== f.readyState && f.abort()
                            } else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Yc[g] = b : b()
                }, abort: function () {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function $c() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function _c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = z.head || n("head")[0] || z.documentElement;
            return {
                send: function (d, e) {
                    b = z.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                }, abort: function () {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var ad = [],
        bd = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = ad.pop() || n.expando + "_" + wc++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (bd.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bd.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bd, "$1" + e) : b.jsonp !== !1 && (b.url += (xc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ad.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) {
            return null
        }
        "boolean" == typeof b && (c = b, b = !1), b = b || z;
        var d = v.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var cd = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && cd) {
            return cd.apply(this, arguments)
        }
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = a.slice(h, a.length), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function (a) {
            e = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    };
    var dd = a.document.documentElement;

    function ed(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length) {
                return void 0 === a ? this : this.each(function (b) {
                    n.offset.setOffset(this, a, b)
                })
            }
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) {
                return b = f.documentElement, n.contains(b, e) ? (typeof e.getBoundingClientRect !== L && (d = e.getBoundingClientRect()), c = ed(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
            }
        }, position: function () {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || dd;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) {
                    a = a.offsetParent
                }
                return a || dd
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function (d) {
            return W(this, function (a, d, e) {
                var f = ed(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = Mb(l.pixelPosition, function (a, c) {
            return c ? (c = Kb(a, b), Ib.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return W(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function () {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var fd = a.jQuery,
        gd = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = gd), b && a.jQuery === n && (a.jQuery = fd), n
    }, typeof b === L && (a.jQuery = a.$ = n), n
});
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
;
if ("undefined" == typeof jQuery) {
    throw new Error("Bootstrap's JavaScript requires jQuery")
} + function (d) {
    var c = d.fn.jquery.split(" ")[0].split(".");
    if (c[0] < 2 && c[1] < 9 || 1 == c[0] && 9 == c[1] && c[2] < 1) {
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
    }
}(jQuery), + function (d) {
    function c() {
        var f = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var g in e) {
            if (void 0 !== f.style[g]) {
                return {
                    end: e[g]
                }
            }
        }
        return !1
    }
    d.fn.emulateTransitionEnd = function (a) {
        var h = !1,
            g = this;
        d(this).one("bsTransitionEnd", function () {
            h = !0
        });
        var f = function () {
            h || d(g).trigger(d.support.transition.end)
        };
        return setTimeout(f, a), this
    }, d(function () {
        d.support.transition = c(), d.support.transition && (d.event.special.bsTransitionEnd = {
            bindType: d.support.transition.end,
            delegateType: d.support.transition.end,
            handle: function (a) {
                return d(a.target).is(this) ? a.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function (g) {
    function f(a) {
        return this.each(function () {
            var d = g(this),
                b = d.data("bs.alert");
            b || d.data("bs.alert", b = new i(this)), "string" == typeof a && b[a].call(d)
        })
    }
    var j = '[data-dismiss="alert"]',
        i = function (a) {
            g(a).on("click", j, this.close)
        };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.close = function (a) {
        function m() {
            d.detach().trigger("closed.bs.alert").remove()
        }
        var l = g(this),
            k = l.attr("data-target");
        k || (k = l.attr("href"), k = k && k.replace(/.*(?=#[^\s]*$)/, ""));
        var d = g(k);
        a && a.preventDefault(), d.length || (d = l.closest(".alert")), d.trigger(a = g.Event("close.bs.alert")), a.isDefaultPrevented() || (d.removeClass("in"), g.support.transition && d.hasClass("fade") ? d.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m())
    };
    var h = g.fn.alert;
    g.fn.alert = f, g.fn.alert.Constructor = i, g.fn.alert.noConflict = function () {
        return g.fn.alert = h, this
    }, g(document).on("click.bs.alert.data-api", j, i.prototype.close)
}(jQuery), + function (f) {
    function e(a) {
        return this.each(function () {
            var i = f(this),
                c = i.data("bs.button"),
                b = "object" == typeof a && a;
            c || i.data("bs.button", c = new h(this, b)), "toggle" == a ? c.toggle() : a && c.setState(a)
        })
    }
    var h = function (a, c) {
        this.$element = f(a), this.options = f.extend({}, h.DEFAULTS, c), this.isLoading = !1
    };
    h.VERSION = "3.3.5", h.DEFAULTS = {
        loadingText: "loading..."
    }, h.prototype.setState = function (a) {
        var l = "disabled",
            k = this.$element,
            j = k.is("input") ? "val" : "html",
            i = k.data();
        a += "Text", null == i.resetText && k.data("resetText", k[j]()), setTimeout(f.proxy(function () {
            k[j](null == i[a] ? this.options[a] : i[a]), "loadingText" == a ? (this.isLoading = !0, k.addClass(l).attr(l, l)) : this.isLoading && (this.isLoading = !1, k.removeClass(l).removeAttr(l))
        }, this), 0)
    }, h.prototype.toggle = function () {
        var i = !0,
            d = this.$element.closest('[data-toggle="buttons"]');
        if (d.length) {
            var j = this.$element.find("input");
            "radio" == j.prop("type") ? (j.prop("checked") && (i = !1), d.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == j.prop("type") && (j.prop("checked") !== this.$element.hasClass("active") && (i = !1), this.$element.toggleClass("active")), j.prop("checked", this.$element.hasClass("active")), i && j.trigger("change")
        } else {
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        }
    };
    var g = f.fn.button;
    f.fn.button = e, f.fn.button.Constructor = h, f.fn.button.noConflict = function () {
        return f.fn.button = g, this
    }, f(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        var a = f(b.target);
        a.hasClass("btn") || (a = a.closest(".btn")), e.call(a, "toggle"), f(b.target).is('input[type="radio"]') || f(b.target).is('input[type="checkbox"]') || b.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (a) {
        f(a.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(a.type))
    })
}(jQuery), + function (g) {
    function f(a) {
        return this.each(function () {
            var l = g(this),
                k = l.data("bs.carousel"),
                c = g.extend({}, j.DEFAULTS, l.data(), "object" == typeof a && a),
                b = "string" == typeof a ? a : c.slide;
            k || l.data("bs.carousel", k = new j(this, c)), "number" == typeof a ? k.to(a) : b ? k[b]() : c.interval && k.pause().cycle()
        })
    }
    var j = function (a, d) {
        this.$element = g(a), this.$indicators = this.$element.find(".carousel-indicators"), this.options = d, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", g.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", g.proxy(this.pause, this)).on("mouseleave.bs.carousel", g.proxy(this.cycle, this))
    };
    j.VERSION = "3.3.5", j.TRANSITION_DURATION = 600, j.DEFAULTS = {
        interval: 5000,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, j.prototype.keydown = function (b) {
        if (!/input|textarea/i.test(b.target.tagName)) {
            switch (b.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            b.preventDefault()
        }
    }, j.prototype.cycle = function (a) {
        return a || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(g.proxy(this.next, this), this.options.interval)), this
    }, j.prototype.getItemIndex = function (b) {
        return this.$items = b.parent().children(".item"), this.$items.index(b || this.$active)
    }, j.prototype.getItemForDirection = function (l, k) {
        var p = this.getItemIndex(k),
            o = "prev" == l && 0 === p || "next" == l && p == this.$items.length - 1;
        if (o && !this.options.wrap) {
            return k
        }
        var n = "prev" == l ? -1 : 1,
            m = (p + n) % this.$items.length;
        return this.$items.eq(m)
    }, j.prototype.to = function (e) {
        var d = this,
            k = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            d.to(e)
        }) : k == e ? this.pause().cycle() : this.slide(e > k ? "next" : "prev", this.$items.eq(e))
    }, j.prototype.pause = function (a) {
        return a || (this.paused = !0), this.$element.find(".next, .prev").length && g.support.transition && (this.$element.trigger(g.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, j.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, j.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, j.prototype.slide = function (v, u) {
        var t = this.$element.find(".item.active"),
            s = u || this.getItemForDirection(v, t),
            r = this.interval,
            q = "next" == v ? "left" : "right",
            p = this;
        if (s.hasClass("active")) {
            return this.sliding = !1
        }
        var o = s[0],
            n = g.Event("slide.bs.carousel", {
                relatedTarget: o,
                direction: q
            });
        if (this.$element.trigger(n), !n.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = g(this.$indicators.children()[this.getItemIndex(s)]);
                c && c.addClass("active")
            }
            var a = g.Event("slid.bs.carousel", {
                relatedTarget: o,
                direction: q
            });
            return g.support.transition && this.$element.hasClass("slide") ? (s.addClass(v), s[0].offsetWidth, t.addClass(q), s.addClass(q), t.one("bsTransitionEnd", function () {
                s.removeClass([v, q].join(" ")).addClass("active"), t.removeClass(["active", q].join(" ")), p.sliding = !1, setTimeout(function () {
                    p.$element.trigger(a)
                }, 0)
            }).emulateTransitionEnd(j.TRANSITION_DURATION)) : (t.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(a)), r && this.cycle(), this
        }
    };
    var i = g.fn.carousel;
    g.fn.carousel = f, g.fn.carousel.Constructor = j, g.fn.carousel.noConflict = function () {
        return g.fn.carousel = i, this
    };
    var h = function (n) {
        var m, l = g(this),
            k = g(l.attr("data-target") || (m = l.attr("href")) && m.replace(/.*(?=#[^\s]+$)/, ""));
        if (k.hasClass("carousel")) {
            var b = g.extend({}, k.data(), l.data()),
                a = l.attr("data-slide-to");
            a && (b.interval = !1), f.call(k, b), a && k.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    g(document).on("click.bs.carousel.data-api", "[data-slide]", h).on("click.bs.carousel.data-api", "[data-slide-to]", h), g(window).on("load", function () {
        g('[data-ride="carousel"]').each(function () {
            var a = g(this);
            f.call(a, a.data())
        })
    })
}(jQuery), + function (g) {
    function f(a) {
        var k, e = a.attr("data-target") || (k = a.attr("href")) && k.replace(/.*(?=#[^\s]+$)/, "");
        return g(e)
    }

    function j(a) {
        return this.each(function () {
            var k = g(this),
                d = k.data("bs.collapse"),
                b = g.extend({}, i.DEFAULTS, k.data(), "object" == typeof a && a);
            !d && b.toggle && /show|hide/.test(a) && (b.toggle = !1), d || k.data("bs.collapse", d = new i(this, b)), "string" == typeof a && d[a]()
        })
    }
    var i = function (a, d) {
        this.$element = g(a), this.options = g.extend({}, i.DEFAULTS, d), this.$trigger = g('[data-toggle="collapse"][href="#' + a.id + '"],[data-toggle="collapse"][data-target="#' + a.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function () {
        var b = this.$element.hasClass("width");
        return b ? "width" : "height"
    }, i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var a, m = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(m && m.length && (a = m.data("bs.collapse"), a && a.transitioning))) {
                var l = g.Event("show.bs.collapse");
                if (this.$element.trigger(l), !l.isDefaultPrevented()) {
                    m && m.length && (j.call(m, "hide"), a || m.data("bs.collapse", null));
                    var k = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[k](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var d = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[k](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!g.support.transition) {
                        return d.call(this)
                    }
                    var c = g.camelCase(["scroll", k].join("-"));
                    this.$element.one("bsTransitionEnd", g.proxy(d, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[k](this.$element[0][c])
                }
            }
        }
    }, i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var a = g.Event("hide.bs.collapse");
            if (this.$element.trigger(a), !a.isDefaultPrevented()) {
                var k = this.dimension();
                this.$element[k](this.$element[k]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var d = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return g.support.transition ? void this.$element[k](0).one("bsTransitionEnd", g.proxy(d, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : d.call(this)
            }
        }
    }, i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function () {
        return g(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(g.proxy(function (k, b) {
            var a = g(b);
            this.addAriaAndCollapsedClass(f(a), a)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function (e, d) {
        var k = e.hasClass("in");
        e.attr("aria-expanded", k), d.toggleClass("collapsed", !k).attr("aria-expanded", k)
    };
    var h = g.fn.collapse;
    g.fn.collapse = j, g.fn.collapse.Constructor = i, g.fn.collapse.noConflict = function () {
        return g.fn.collapse = h, this
    }, g(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (l) {
        var k = g(this);
        k.attr("data-target") || l.preventDefault();
        var c = f(k),
            b = c.data("bs.collapse"),
            a = b ? "toggle" : k.data();
        j.call(c, a)
    })
}(jQuery), + function (j) {
    function i(a) {
        var f = a.attr("data-target");
        f || (f = a.attr("href"), f = f && /#[A-Za-z]/.test(f) && f.replace(/.*(?=#[^\s]*$)/, ""));
        var e = f && j(f);
        return e && e.length ? e : a.parent()
    }

    function p(a) {
        a && 3 === a.which || (j(n).remove(), j(m).each(function () {
            var g = j(this),
                c = i(g),
                b = {
                    relatedTarget: this
                };
            c.hasClass("open") && (a && "click" == a.type && /input|textarea/i.test(a.target.tagName) && j.contains(c[0], a.target) || (c.trigger(a = j.Event("hide.bs.dropdown", b)), a.isDefaultPrevented() || (g.attr("aria-expanded", "false"), c.removeClass("open").trigger("hidden.bs.dropdown", b))))
        }))
    }

    function o(a) {
        return this.each(function () {
            var e = j(this),
                b = e.data("bs.dropdown");
            b || e.data("bs.dropdown", b = new l(this)), "string" == typeof a && b[a].call(e)
        })
    }
    var n = ".dropdown-backdrop",
        m = '[data-toggle="dropdown"]',
        l = function (a) {
            j(a).on("click.bs.dropdown", this.toggle)
        };
    l.VERSION = "3.3.5", l.prototype.toggle = function (r) {
        var q = j(this);
        if (!q.is(".disabled, :disabled")) {
            var c = i(q),
                b = c.hasClass("open");
            if (p(), !b) {
                "ontouchstart" in document.documentElement && !c.closest(".navbar-nav").length && j(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(j(this)).on("click", p);
                var a = {
                    relatedTarget: this
                };
                if (c.trigger(r = j.Event("show.bs.dropdown", a)), r.isDefaultPrevented()) {
                    return
                }
                q.trigger("focus").attr("aria-expanded", "true"), c.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, l.prototype.keydown = function (t) {
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
            var s = j(this);
            if (t.preventDefault(), t.stopPropagation(), !s.is(".disabled, :disabled")) {
                var r = i(s),
                    q = r.hasClass("open");
                if (!q && 27 != t.which || q && 27 == t.which) {
                    return 27 == t.which && r.find(m).trigger("focus"), s.trigger("click")
                }
                var f = " li:not(.disabled):visible a",
                    b = r.find(".dropdown-menu" + f);
                if (b.length) {
                    var a = b.index(t.target);
                    38 == t.which && a > 0 && a--, 40 == t.which && a < b.length - 1 && a++, ~a || (a = 0), b.eq(a).trigger("focus")
                }
            }
        }
    };
    var k = j.fn.dropdown;
    j.fn.dropdown = o, j.fn.dropdown.Constructor = l, j.fn.dropdown.noConflict = function () {
        return j.fn.dropdown = k, this
    }, j(document).on("click.bs.dropdown.data-api", p).on("click.bs.dropdown.data-api", ".dropdown form", function (b) {
        b.stopPropagation()
    }).on("click.bs.dropdown.data-api", m, l.prototype.toggle).on("keydown.bs.dropdown.data-api", m, l.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", l.prototype.keydown)
}(jQuery), + function (f) {
    function e(a, c) {
        return this.each(function () {
            var i = f(this),
                d = i.data("bs.modal"),
                b = f.extend({}, h.DEFAULTS, i.data(), "object" == typeof a && a);
            d || i.data("bs.modal", d = new h(this, b)), "string" == typeof a ? d[a](c) : b.show && d.show(c)
        })
    }
    var h = function (a, d) {
        this.options = d, this.$body = f(document.body), this.$element = f(a), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, f.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    h.VERSION = "3.3.5", h.TRANSITION_DURATION = 300, h.BACKDROP_TRANSITION_DURATION = 150, h.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, h.prototype.toggle = function (b) {
        return this.isShown ? this.hide() : this.show(b)
    }, h.prototype.show = function (a) {
        var i = this,
            c = f.Event("show.bs.modal", {
                relatedTarget: a
            });
        this.$element.trigger(c), this.isShown || c.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', f.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            i.$element.one("mouseup.dismiss.bs.modal", function (d) {
                f(d.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var d = f.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), d && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var b = f.Event("shown.bs.modal", {
                relatedTarget: a
            });
            d ? i.$dialog.one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(b)
            }).emulateTransitionEnd(h.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(b)
        }))
    }, h.prototype.hide = function (a) {
        a && a.preventDefault(), a = f.Event("hide.bs.modal"), this.$element.trigger(a), this.isShown && !a.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), f(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), f.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", f.proxy(this.hideModal, this)).emulateTransitionEnd(h.TRANSITION_DURATION) : this.hideModal())
    }, h.prototype.enforceFocus = function () {
        f(document).off("focusin.bs.modal").on("focusin.bs.modal", f.proxy(function (b) {
            this.$element[0] === b.target || this.$element.has(b.target).length || this.$element.trigger("focus")
        }, this))
    }, h.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", f.proxy(function (b) {
            27 == b.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, h.prototype.resize = function () {
        this.isShown ? f(window).on("resize.bs.modal", f.proxy(this.handleUpdate, this)) : f(window).off("resize.bs.modal")
    }, h.prototype.hideModal = function () {
        var b = this;
        this.$element.hide(), this.backdrop(function () {
            b.$body.removeClass("modal-open"), b.resetAdjustments(), b.resetScrollbar(), b.$element.trigger("hidden.bs.modal")
        })
    }, h.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, h.prototype.backdrop = function (a) {
        var k = this,
            j = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = f.support.transition && j;
            if (this.$backdrop = f(document.createElement("div")).addClass("modal-backdrop " + j).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", f.proxy(function (b) {
                return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(b.target === b.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !a) {
                return
            }
            i ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION) : a()
        } else {
            if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var c = function () {
                    k.removeBackdrop(), a && a()
                };
                f.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", c).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION) : c()
            } else {
                a && a()
            }
        }
    }, h.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, h.prototype.adjustDialog = function () {
        var b = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && b ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !b ? this.scrollbarWidth : ""
        })
    }, h.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, h.prototype.checkScrollbar = function () {
        var d = window.innerWidth;
        if (!d) {
            var c = document.documentElement.getBoundingClientRect();
            d = c.right - Math.abs(c.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < d, this.scrollbarWidth = this.measureScrollbar()
    }, h.prototype.setScrollbar = function () {
        var b = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", b + this.scrollbarWidth)
    }, h.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, h.prototype.measureScrollbar = function () {
        var d = document.createElement("div");
        d.className = "modal-scrollbar-measure", this.$body.append(d);
        var c = d.offsetWidth - d.clientWidth;
        return this.$body[0].removeChild(d), c
    };
    var g = f.fn.modal;
    f.fn.modal = e, f.fn.modal.Constructor = h, f.fn.modal.noConflict = function () {
        return f.fn.modal = g, this
    }, f(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (k) {
        var j = f(this),
            i = j.attr("href"),
            b = f(j.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            a = b.data("bs.modal") ? "toggle" : f.extend({
                remote: !/#/.test(i) && i
            }, b.data(), j.data());
        j.is("a") && k.preventDefault(), b.one("show.bs.modal", function (c) {
            c.isDefaultPrevented() || b.one("hidden.bs.modal", function () {
                j.is(":visible") && j.trigger("focus")
            })
        }), e.call(b, a, this)
    })
}(jQuery), + function (f) {
    function e(a) {
        return this.each(function () {
            var i = f(this),
                c = i.data("bs.tooltip"),
                b = "object" == typeof a && a;
            (c || !/destroy|hide/.test(a)) && (c || i.data("bs.tooltip", c = new h(this, b)), "string" == typeof a && c[a]())
        })
    }
    var h = function (d, c) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", d, c)
    };
    h.VERSION = "3.3.5", h.TRANSITION_DURATION = 150, h.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, h.prototype.init = function (a, p, o) {
        if (this.enabled = !0, this.type = a, this.$element = f(p), this.options = this.getOptions(o), this.$viewport = this.options.viewport && f(f.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) {
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!")
        }
        for (var n = this.options.trigger.split(" "), m = n.length; m--;) {
            var l = n[m];
            if ("click" == l) {
                this.$element.on("click." + this.type, this.options.selector, f.proxy(this.toggle, this))
            } else {
                if ("manual" != l) {
                    var k = "hover" == l ? "mouseenter" : "focusin",
                        j = "hover" == l ? "mouseleave" : "focusout";
                    this.$element.on(k + "." + this.type, this.options.selector, f.proxy(this.enter, this)), this.$element.on(j + "." + this.type, this.options.selector, f.proxy(this.leave, this))
                }
            }
        }
        this.options.selector ? this._options = f.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, h.prototype.getDefaults = function () {
        return h.DEFAULTS
    }, h.prototype.getOptions = function (a) {
        return a = f.extend({}, this.getDefaults(), this.$element.data(), a), a.delay && "number" == typeof a.delay && (a.delay = {
            show: a.delay,
            hide: a.delay
        }), a
    }, h.prototype.getDelegateOptions = function () {
        var a = {},
            d = this.getDefaults();
        return this._options && f.each(this._options, function (b, c) {
            d[b] != c && (a[b] = c)
        }), a
    }, h.prototype.enter = function (a) {
        var d = a instanceof this.constructor ? a : f(a.currentTarget).data("bs." + this.type);
        return d || (d = new this.constructor(a.currentTarget, this.getDelegateOptions()), f(a.currentTarget).data("bs." + this.type, d)), a instanceof f.Event && (d.inState["focusin" == a.type ? "focus" : "hover"] = !0), d.tip().hasClass("in") || "in" == d.hoverState ? void(d.hoverState = "in") : (clearTimeout(d.timeout), d.hoverState = "in", d.options.delay && d.options.delay.show ? void(d.timeout = setTimeout(function () {
            "in" == d.hoverState && d.show()
        }, d.options.delay.show)) : d.show())
    }, h.prototype.isInStateTrue = function () {
        for (var b in this.inState) {
            if (this.inState[b]) {
                return !0
            }
        }
        return !1
    }, h.prototype.leave = function (a) {
        var d = a instanceof this.constructor ? a : f(a.currentTarget).data("bs." + this.type);
        return d || (d = new this.constructor(a.currentTarget, this.getDelegateOptions()), f(a.currentTarget).data("bs." + this.type, d)), a instanceof f.Event && (d.inState["focusout" == a.type ? "focus" : "hover"] = !1), d.isInStateTrue() ? void 0 : (clearTimeout(d.timeout), d.hoverState = "out", d.options.delay && d.options.delay.hide ? void(d.timeout = setTimeout(function () {
            "out" == d.hoverState && d.hide()
        }, d.options.delay.hide)) : d.hide())
    }, h.prototype.show = function () {
        var D = f.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(D);
            var C = f.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (D.isDefaultPrevented() || !C) {
                return
            }
            var B = this,
                A = this.tip(),
                z = this.getUID(this.type);
            this.setContent(), A.attr("id", z), this.$element.attr("aria-describedby", z), this.options.animation && A.addClass("fade");
            var y = "function" == typeof this.options.placement ? this.options.placement.call(this, A[0], this.$element[0]) : this.options.placement,
                x = /\s?auto?\s?/i,
                w = x.test(y);
            w && (y = y.replace(x, "") || "top"), A.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(y).data("bs." + this.type, this), this.options.container ? A.appendTo(this.options.container) : A.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var v = this.getPosition(),
                u = A[0].offsetWidth,
                t = A[0].offsetHeight;
            if (w) {
                var s = y,
                    r = this.getPosition(this.$viewport);
                y = "bottom" == y && v.bottom + t > r.bottom ? "top" : "top" == y && v.top - t < r.top ? "bottom" : "right" == y && v.right + u > r.width ? "left" : "left" == y && v.left - u < r.left ? "right" : y, A.removeClass(s).addClass(y)
            }
            var c = this.getCalculatedOffset(y, v, u, t);
            this.applyPlacement(c, y);
            var a = function () {
                var b = B.hoverState;
                B.$element.trigger("shown.bs." + B.type), B.hoverState = null, "out" == b && B.leave(B)
            };
            f.support.transition && this.$tip.hasClass("fade") ? A.one("bsTransitionEnd", a).emulateTransitionEnd(h.TRANSITION_DURATION) : a()
        }
    }, h.prototype.applyPlacement = function (z, y) {
        var x = this.tip(),
            w = x[0].offsetWidth,
            v = x[0].offsetHeight,
            u = parseInt(x.css("margin-top"), 10),
            t = parseInt(x.css("margin-left"), 10);
        isNaN(u) && (u = 0), isNaN(t) && (t = 0), z.top += u, z.left += t, f.offset.setOffset(x[0], f.extend({
            using: function (b) {
                x.css({
                    top: Math.round(b.top),
                    left: Math.round(b.left)
                })
            }
        }, z), 0), x.addClass("in");
        var s = x[0].offsetWidth,
            r = x[0].offsetHeight;
        "top" == y && r != v && (z.top = z.top + v - r);
        var q = this.getViewportAdjustedDelta(y, z, s, r);
        q.left ? z.left += q.left : z.top += q.top;
        var p = /top|bottom/.test(y),
            o = p ? 2 * q.left - w + s : 2 * q.top - v + r,
            a = p ? "offsetWidth" : "offsetHeight";
        x.offset(z), this.replaceArrow(o, x[0][a], p)
    }, h.prototype.replaceArrow = function (i, d, j) {
        this.arrow().css(j ? "left" : "top", 50 * (1 - i / d) + "%").css(j ? "top" : "left", "")
    }, h.prototype.setContent = function () {
        var d = this.tip(),
            c = this.getTitle();
        d.find(".tooltip-inner")[this.options.html ? "html" : "text"](c), d.removeClass("fade in top bottom left right")
    }, h.prototype.hide = function (a) {
        function k() {
            "in" != j.hoverState && i.detach(), j.$element.removeAttr("aria-describedby").trigger("hidden.bs." + j.type), a && a()
        }
        var j = this,
            i = f(this.$tip),
            c = f.Event("hide.bs." + this.type);
        return this.$element.trigger(c), c.isDefaultPrevented() ? void 0 : (i.removeClass("in"), f.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", k).emulateTransitionEnd(h.TRANSITION_DURATION) : k(), this.hoverState = null, this)
    }, h.prototype.fixTitle = function () {
        var b = this.$element;
        (b.attr("title") || "string" != typeof b.attr("data-original-title")) && b.attr("data-original-title", b.attr("title") || "").attr("title", "")
    }, h.prototype.hasContent = function () {
        return this.getTitle()
    }, h.prototype.getPosition = function (a) {
        a = a || this.$element;
        var n = a[0],
            m = "BODY" == n.tagName,
            l = n.getBoundingClientRect();
        null == l.width && (l = f.extend({}, l, {
            width: l.right - l.left,
            height: l.bottom - l.top
        }));
        var k = m ? {
                top: 0,
                left: 0
            } : a.offset(),
            j = {
                scroll: m ? document.documentElement.scrollTop || document.body.scrollTop : a.scrollTop()
            },
            i = m ? {
                width: f(window).width(),
                height: f(window).height()
            } : null;
        return f.extend({}, l, j, i, k)
    }, h.prototype.getCalculatedOffset = function (j, i, l, k) {
        return "bottom" == j ? {
            top: i.top + i.height,
            left: i.left + i.width / 2 - l / 2
        } : "top" == j ? {
            top: i.top - k,
            left: i.left + i.width / 2 - l / 2
        } : "left" == j ? {
            top: i.top + i.height / 2 - k / 2,
            left: i.left - l
        } : {
            top: i.top + i.height / 2 - k / 2,
            left: i.left + i.width
        }
    }, h.prototype.getViewportAdjustedDelta = function (v, u, t, s) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) {
            return r
        }
        var q = this.options.viewport && this.options.viewport.padding || 0,
            p = this.getPosition(this.$viewport);
        if (/right|left/.test(v)) {
            var o = u.top - q - p.scroll,
                n = u.top + q - p.scroll + s;
            o < p.top ? r.top = p.top - o : n > p.top + p.height && (r.top = p.top + p.height - n)
        } else {
            var m = u.left - q,
                l = u.left + q + t;
            m < p.left ? r.left = p.left - m : l > p.right && (r.left = p.left + p.width - l)
        }
        return r
    }, h.prototype.getTitle = function () {
        var i, d = this.$element,
            j = this.options;
        return i = d.attr("data-original-title") || ("function" == typeof j.title ? j.title.call(d[0]) : j.title)
    }, h.prototype.getUID = function (b) {
        do {
            b += ~~(1000000 * Math.random())
        } while (document.getElementById(b));
        return b
    }, h.prototype.tip = function () {
        if (!this.$tip && (this.$tip = f(this.options.template), 1 != this.$tip.length)) {
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!")
        }
        return this.$tip
    }, h.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, h.prototype.enable = function () {
        this.enabled = !0
    }, h.prototype.disable = function () {
        this.enabled = !1
    }, h.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, h.prototype.toggle = function (a) {
        var d = this;
        a && (d = f(a.currentTarget).data("bs." + this.type), d || (d = new this.constructor(a.currentTarget, this.getDelegateOptions()), f(a.currentTarget).data("bs." + this.type, d))), a ? (d.inState.click = !d.inState.click, d.isInStateTrue() ? d.enter(d) : d.leave(d)) : d.tip().hasClass("in") ? d.leave(d) : d.enter(d)
    }, h.prototype.destroy = function () {
        var b = this;
        clearTimeout(this.timeout), this.hide(function () {
            b.$element.off("." + b.type).removeData("bs." + b.type), b.$tip && b.$tip.detach(), b.$tip = null, b.$arrow = null, b.$viewport = null
        })
    };
    var g = f.fn.tooltip;
    f.fn.tooltip = e, f.fn.tooltip.Constructor = h, f.fn.tooltip.noConflict = function () {
        return f.fn.tooltip = g, this
    }
}(jQuery), + function (f) {
    function e(a) {
        return this.each(function () {
            var i = f(this),
                c = i.data("bs.popover"),
                b = "object" == typeof a && a;
            (c || !/destroy|hide/.test(a)) && (c || i.data("bs.popover", c = new h(this, b)), "string" == typeof a && c[a]())
        })
    }
    var h = function (d, c) {
        this.init("popover", d, c)
    };
    if (!f.fn.tooltip) {
        throw new Error("Popover requires tooltip.js")
    }
    h.VERSION = "3.3.5", h.DEFAULTS = f.extend({}, f.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), h.prototype = f.extend({}, f.fn.tooltip.Constructor.prototype), h.prototype.constructor = h, h.prototype.getDefaults = function () {
        return h.DEFAULTS
    }, h.prototype.setContent = function () {
        var i = this.tip(),
            d = this.getTitle(),
            j = this.getContent();
        i.find(".popover-title")[this.options.html ? "html" : "text"](d), i.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof j ? "html" : "append" : "text"](j), i.removeClass("fade top bottom left right in"), i.find(".popover-title").html() || i.find(".popover-title").hide()
    }, h.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, h.prototype.getContent = function () {
        var d = this.$element,
            c = this.options;
        return d.attr("data-content") || ("function" == typeof c.content ? c.content.call(d[0]) : c.content)
    }, h.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var g = f.fn.popover;
    f.fn.popover = e, f.fn.popover.Constructor = h, f.fn.popover.noConflict = function () {
        return f.fn.popover = g, this
    }
}(jQuery), + function (f) {
    function e(b, a) {
        this.$body = f(document.body), this.$scrollElement = f(f(b).is(document.body) ? window : b), this.options = f.extend({}, e.DEFAULTS, a), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", f.proxy(this.process, this)), this.refresh(), this.process()
    }

    function h(a) {
        return this.each(function () {
            var i = f(this),
                c = i.data("bs.scrollspy"),
                b = "object" == typeof a && a;
            c || i.data("bs.scrollspy", c = new e(this, b)), "string" == typeof a && c[a]()
        })
    }
    e.VERSION = "3.3.5", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var a = this,
            j = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), f.isWindow(this.$scrollElement[0]) || (j = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var c = f(this),
                k = c.data("target") || c.attr("href"),
                d = /^#./.test(k) && f(k);
            return d && d.length && d.is(":visible") && [
                [d[j]().top + i, k]
            ] || null
        }).sort(function (d, c) {
            return d[0] - c[0]
        }).each(function () {
            a.offsets.push(this[0]), a.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var j, i = this.$scrollElement.scrollTop() + this.options.offset,
            o = this.getScrollHeight(),
            n = this.options.offset + o - this.$scrollElement.height(),
            m = this.offsets,
            l = this.targets,
            k = this.activeTarget;
        if (this.scrollHeight != o && this.refresh(), i >= n) {
            return k != (j = l[l.length - 1]) && this.activate(j)
        }
        if (k && i < m[0]) {
            return this.activeTarget = null, this.clear()
        }
        for (j = m.length; j--;) {
            k != l[j] && i >= m[j] && (void 0 === m[j + 1] || i < m[j + 1]) && this.activate(l[j])
        }
    }, e.prototype.activate = function (a) {
        this.activeTarget = a, this.clear();
        var j = this.selector + '[data-target="' + a + '"],' + this.selector + '[href="' + a + '"]',
            i = f(j).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        f(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var g = f.fn.scrollspy;
    f.fn.scrollspy = h, f.fn.scrollspy.Constructor = e, f.fn.scrollspy.noConflict = function () {
        return f.fn.scrollspy = g, this
    }, f(window).on("load.bs.scrollspy.data-api", function () {
        f('[data-spy="scroll"]').each(function () {
            var a = f(this);
            h.call(a, a.data())
        })
    })
}(jQuery), + function (g) {
    function f(a) {
        return this.each(function () {
            var c = g(this),
                b = c.data("bs.tab");
            b || c.data("bs.tab", b = new j(this)), "string" == typeof a && b[a]()
        })
    }
    var j = function (a) {
        this.element = g(a)
    };
    j.VERSION = "3.3.5", j.TRANSITION_DURATION = 150, j.prototype.show = function () {
        var a = this.element,
            p = a.closest("ul:not(.dropdown-menu)"),
            o = a.data("target");
        if (o || (o = a.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !a.parent("li").hasClass("active")) {
            var n = p.find(".active:last a"),
                m = g.Event("hide.bs.tab", {
                    relatedTarget: a[0]
                }),
                l = g.Event("show.bs.tab", {
                    relatedTarget: n[0]
                });
            if (n.trigger(m), a.trigger(l), !l.isDefaultPrevented() && !m.isDefaultPrevented()) {
                var k = g(o);
                this.activate(a.closest("li"), p), this.activate(k, k.parent(), function () {
                    n.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: a[0]
                    }), a.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, j.prototype.activate = function (a, n, m) {
        function l() {
            k.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), c ? (a[0].offsetWidth, a.addClass("in")) : a.removeClass("fade"), a.parent(".dropdown-menu").length && a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), m && m()
        }
        var k = n.find("> .active"),
            c = m && g.support.transition && (k.length && k.hasClass("fade") || !!n.find("> .fade").length);
        k.length && c ? k.one("bsTransitionEnd", l).emulateTransitionEnd(j.TRANSITION_DURATION) : l(), k.removeClass("in")
    };
    var i = g.fn.tab;
    g.fn.tab = f, g.fn.tab.Constructor = j, g.fn.tab.noConflict = function () {
        return g.fn.tab = i, this
    };
    var h = function (a) {
        a.preventDefault(), f.call(g(this), "show")
    };
    g(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', h).on("click.bs.tab.data-api", '[data-toggle="pill"]', h)
}(jQuery), + function (f) {
    function e(a) {
        return this.each(function () {
            var i = f(this),
                c = i.data("bs.affix"),
                b = "object" == typeof a && a;
            c || i.data("bs.affix", c = new h(this, b)), "string" == typeof a && c[a]()
        })
    }
    var h = function (a, c) {
        this.options = f.extend({}, h.DEFAULTS, c), this.$target = f(this.options.target).on("scroll.bs.affix.data-api", f.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", f.proxy(this.checkPositionWithEventLoop, this)), this.$element = f(a), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    h.VERSION = "3.3.5", h.RESET = "affix affix-top affix-bottom", h.DEFAULTS = {
        offset: 0,
        target: window
    }, h.prototype.getState = function (t, s, r, q) {
        var p = this.$target.scrollTop(),
            o = this.$element.offset(),
            n = this.$target.height();
        if (null != r && "top" == this.affixed) {
            return r > p ? "top" : !1
        }
        if ("bottom" == this.affixed) {
            return null != r ? p + this.unpin <= o.top ? !1 : "bottom" : t - q >= p + n ? !1 : "bottom"
        }
        var m = null == this.affixed,
            l = m ? p : o.top,
            k = m ? n : s;
        return null != r && r >= p ? "top" : null != q && l + k >= t - q ? "bottom" : !1
    }, h.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) {
            return this.pinnedOffset
        }
        this.$element.removeClass(h.RESET).addClass("affix");
        var d = this.$target.scrollTop(),
            c = this.$element.offset();
        return this.pinnedOffset = c.top - d
    }, h.prototype.checkPositionWithEventLoop = function () {
        setTimeout(f.proxy(this.checkPosition, this), 1)
    }, h.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var a = this.$element.height(),
                p = this.options.offset,
                o = p.top,
                n = p.bottom,
                m = Math.max(f(document).height(), f(document.body).height());
            "object" != typeof p && (n = o = p), "function" == typeof o && (o = p.top(this.$element)), "function" == typeof n && (n = p.bottom(this.$element));
            var l = this.getState(m, a, o, n);
            if (this.affixed != l) {
                null != this.unpin && this.$element.css("top", "");
                var k = "affix" + (l ? "-" + l : ""),
                    c = f.Event(k + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) {
                    return
                }
                this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(h.RESET).addClass(k).trigger(k.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == l && this.$element.offset({
                top: m - a - n
            })
        }
    };
    var g = f.fn.affix;
    f.fn.affix = e, f.fn.affix.Constructor = h, f.fn.affix.noConflict = function () {
        return f.fn.affix = g, this
    }, f(window).on("load", function () {
        f('[data-spy="affix"]').each(function () {
            var b = f(this),
                a = b.data();
            a.offset = a.offset || {}, null != a.offsetBottom && (a.offset.bottom = a.offsetBottom), null != a.offsetTop && (a.offset.top = a.offsetTop), e.call(b, a)
        })
    })
}(jQuery);
/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */
;
! function (b) {
    b.matchMedia = b.matchMedia || function (h) {
        var g, l = h.documentElement,
            k = l.firstElementChild || l.firstChild,
            j = h.createElement("body"),
            i = h.createElement("div");
        return i.id = "mq-test-1", i.style.cssText = "position:absolute;top:-100em", j.style.background = "none", j.appendChild(i),
            function (c) {
                return i.innerHTML = '&shy;<style media="' + c + '"> #mq-test-1 { width: 42px; }</style>', l.insertBefore(j, k), g = 42 === i.offsetWidth, l.removeChild(j), {
                    matches: g,
                    media: c
                }
            }
    }(b.document)
}(this),
function (X) {
    function W() {
        C(!0)
    }
    var V = {};
    X.respond = V, V.update = function () {};
    var U = [],
        T = function () {
            var a = !1;
            try {
                a = new X.XMLHttpRequest
            } catch (d) {
                a = new X.ActiveXObject("Microsoft.XMLHTTP")
            }
            return function () {
                return a
            }
        }(),
        S = function (e, d) {
            var f = T();
            f && (f.open("GET", e, !0), f.onreadystatechange = function () {
                4 !== f.readyState || 200 !== f.status && 304 !== f.status || d(f.responseText)
            }, 4 !== f.readyState && f.send(null))
        },
        R = function (b) {
            return b.replace(V.regex.minmaxwh, "").match(V.regex.other)
        };
    if (V.ajax = S, V.queue = U, V.unsupportedmq = R, V.regex = {
        media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
        keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
        comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
        urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
        findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
        only: /(only\s+)?([a-zA-Z]+)\s?/,
        minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
        other: /\([^\)]*\)/g
    }, V.mediaQueriesSupported = X.matchMedia && null !== X.matchMedia("only all") && X.matchMedia("only all").matches, !V.mediaQueriesSupported) {
        var Q, P, O, N = X.document,
            M = N.documentElement,
            L = [],
            K = [],
            J = [],
            I = {},
            H = 30,
            G = N.getElementsByTagName("head")[0] || M,
            F = N.getElementsByTagName("base")[0],
            E = G.getElementsByTagName("link"),
            D = function () {
                var h, g = N.createElement("div"),
                    l = N.body,
                    k = M.style.fontSize,
                    j = l && l.style.fontSize,
                    i = !1;
                return g.style.cssText = "position:absolute;font-size:1em;width:1em", l || (l = i = N.createElement("body"), l.style.background = "none"), M.style.fontSize = "100%", l.style.fontSize = "100%", l.appendChild(g), i && M.insertBefore(l, M.firstChild), h = g.offsetWidth, i ? M.removeChild(l) : l.removeChild(g), M.style.fontSize = k, j && (l.style.fontSize = j), h = O = parseFloat(h)
            },
            C = function (ab) {
                var aa = "clientWidth",
                    Z = M[aa],
                    Y = "CSS1Compat" === N.compatMode && Z || (N.body && N.body[aa]) || Z,
                    v = {},
                    u = E[E.length - 1],
                    t = (new Date).getTime();
                if (ab && Q && H > t - Q) {
                    return X.clearTimeout(P), P = X.setTimeout(C, H), void 0
                }
                Q = t;
                for (var m in L) {
                    if (L.hasOwnProperty(m)) {
                        var j = L[m],
                            i = j.minw,
                            h = j.maxw,
                            a = null === i,
                            r = null === h,
                            q = "em";
                        i && (i = parseFloat(i) * (i.indexOf(q) > -1 ? O || D() : 1)), h && (h = parseFloat(h) * (h.indexOf(q) > -1 ? O || D() : 1)), j.hasquery && (a && r || !(a || Y >= i) || !(r || h >= Y)) || (v[j.media] || (v[j.media] = []), v[j.media].push(K[j.rules]))
                    }
                }
                for (var o in J) {
                    J.hasOwnProperty(o) && J[o] && J[o].parentNode === G && G.removeChild(J[o])
                }
                J.length = 0;
                for (var n in v) {
                    if (v.hasOwnProperty(n)) {
                        var l = N.createElement("style"),
                            k = v[n].join("\n");
                        l.type = "text/css", l.media = n, G.insertBefore(l, u.nextSibling), l.styleSheet ? l.styleSheet.cssText = k : l.appendChild(N.createTextNode(k)), J.push(l)
                    }
                }
            },
            B = function (Y, y, x) {
                var w = Y.replace(V.regex.comments, "").replace(V.regex.keyframes, "").match(V.regex.media),
                    v = w && w.length || 0;
                y = y.substring(0, y.lastIndexOf("/"));
                var u = function (b) {
                        return b.replace(V.regex.urls, "$1" + y + "$2$3")
                    },
                    t = !v && x;
                y.length && (y += "/"), t && (v = 1);
                for (var s = 0; v > s; s++) {
                    var r, n, m, g;
                    t ? (r = x, K.push(u(Y))) : (r = w[s].match(V.regex.findStyles) && RegExp.$1, K.push(RegExp.$2 && u(RegExp.$2))), m = r.split(","), g = m.length;
                    for (var c = 0; g > c; c++) {
                        n = m[c], R(n) || L.push({
                            media: n.split("(")[0].match(V.regex.only) && RegExp.$2 || "all",
                            rules: K.length - 1,
                            hasquery: n.indexOf("(") > -1,
                            minw: n.match(V.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                            maxw: n.match(V.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                        })
                    }
                }
                C()
            },
            A = function () {
                if (U.length) {
                    var a = U.shift();
                    S(a.href, function (b) {
                        B(b, a.href, a.media), I[a.href] = !0, X.setTimeout(function () {
                            A()
                        }, 0)
                    })
                }
            },
            z = function () {
                for (var a = 0; a < E.length; a++) {
                    var j = E[a],
                        i = j.href,
                        h = j.media,
                        d = j.rel && "stylesheet" === j.rel.toLowerCase();
                    i && d && !I[i] && (j.styleSheet && j.styleSheet.rawCssText ? (B(j.styleSheet.rawCssText, i, h), I[i] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(i) && !F || i.replace(RegExp.$1, "").split("/")[0] === X.location.host) && ("//" === i.substring(0, 2) && (i = X.location.protocol + i), U.push({
                        href: i,
                        media: h
                    })))
                }
                A()
            };
        z(), V.update = z, V.getEmValue = D, X.addEventListener ? X.addEventListener("resize", W, !1) : X.attachEvent && X.attachEvent("onresize", W)
    }
}(this);
/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */
(function () {
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var a = document.createElement("style");
        a.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));
        document.querySelector("head").appendChild(a)
    }
})();
(function (w, C) {
    function v() {
        var e = D.elements;
        return "string" == typeof e ? e.split(" ") : e
    }

    function z(f) {
        var e = u[f[d]];
        e || (e = {}, A++, f[d] = A, u[A] = e);
        return e
    }

    function c(f, e, g) {
        e || (e = C);
        if (B) {
            return e.createElement(f)
        }
        g || (g = z(e));
        e = g.cache[f] ? g.cache[f].cloneNode() : a.test(f) ? (g.cache[f] = g.createElem(f)).cloneNode() : g.createElem(f);
        return e.canHaveChildren && !F.test(f) ? g.frag.appendChild(e) : e
    }

    function E(f, e) {
        if (!e.cache) {
            e.cache = {}, e.createElem = f.createElement, e.createFrag = f.createDocumentFragment, e.frag = e.createFrag()
        }
        f.createElement = function (g) {
            return !D.shivMethods ? e.createElem(g) : c(g, f, e)
        };
        f.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + v().join().replace(/[\w\-]+/g, function (g) {
            e.createElem(g);
            e.frag.createElement(g);
            return 'c("' + g + '")'
        }) + ");return n}")(D, e.frag)
    }

    function b(f) {
        f || (f = C);
        var e = z(f);
        if (D.shivCSS && !y && !e.hasCSS) {
            var h, g = f;
            h = g.createElement("p");
            g = g.getElementsByTagName("head")[0] || g.documentElement;
            h.innerHTML = "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>";
            h = g.insertBefore(h.lastChild, g.firstChild);
            e.hasCSS = !!h
        }
        B || E(f, e);
        return f
    }
    var x = w.html5 || {},
        F = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        a = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        y, d = "_html5shiv",
        A = 0,
        u = {},
        B;
    (function () {
        try {
            var f = C.createElement("a");
            f.innerHTML = "<xyz></xyz>";
            y = "hidden" in f;
            var e;
            if (!(e = 1 == f.childNodes.length)) {
                C.createElement("a");
                var h = C.createDocumentFragment();
                e = "undefined" == typeof h.cloneNode || "undefined" == typeof h.createDocumentFragment || "undefined" == typeof h.createElement
            }
            B = e
        } catch (g) {
            B = y = !0
        }
    })();
    var D = {
        elements: x.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
        version: "3.7.0",
        shivCSS: !1 !== x.shivCSS,
        supportsUnknownElements: B,
        shivMethods: !1 !== x.shivMethods,
        type: "default",
        shivDocument: b,
        createElement: c,
        createDocumentFragment: function (g, f) {
            g || (g = C);
            if (B) {
                return g.createDocumentFragment()
            }
            for (var f = f || z(g), l = f.frag.cloneNode(), k = 0, j = v(), i = j.length; k < i; k++) {
                l.createElement(j[k])
            }
            return l
        }
    };
    w.html5 = D;
    b(C)
})(this, document);
/*!
 * Knockout JavaScript library v3.2.0
 * (c) Steven Sanderson - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function () {
    (function (p) {
        var s = this || (0, eval)("this"),
            v = s.document,
            L = s.navigator,
            w = s.jQuery,
            D = s.JSON;
        (function (p) {
            "function" === typeof require && "object" === typeof exports && "object" === typeof module ? p(module.exports || exports, require) : "function" === typeof define && define.amd ? define(["exports", "require"], p) : p(s.ko = {})
        })(function (M, N) {
            function H(a, d) {
                return null === a || typeof a in R ? a === d : !1
            }

            function S(a, d) {
                var c;
                return function () {
                    c || (c = setTimeout(function () {
                        c = p;
                        a()
                    }, d))
                }
            }

            function T(a, d) {
                var c;
                return function () {
                    clearTimeout(c);
                    c = setTimeout(a, d)
                }
            }

            function I(b, d, c, e) {
                a.d[b] = {
                    init: function (b, h, k, f, m) {
                        var l, q;
                        a.s(function () {
                            var f = a.a.c(h()),
                                k = !c !== !f,
                                z = !q;
                            if (z || d || k !== l) {
                                z && a.Y.la() && (q = a.a.ia(a.f.childNodes(b), !0)), k ? (z || a.f.T(b, a.a.ia(q)), a.Ca(e ? e(m, f) : m, b)) : a.f.ja(b), l = k
                            }
                        }, null, {
                            o: b
                        });
                        return {
                            controlsDescendantBindings: !0
                        }
                    }
                };
                a.h.ha[b] = !1;
                a.f.Q[b] = !0
            }
            var a = "undefined" !== typeof M ? M : {};
            a.b = function (b, d) {
                for (var c = b.split("."), e = a, g = 0; g < c.length - 1; g++) {
                    e = e[c[g]]
                }
                e[c[c.length - 1]] = d
            };
            a.A = function (a, d, c) {
                a[d] = c
            };
            a.version = "3.2.0";
            a.b("version", a.version);
            a.a = function () {
                function b(a, b) {
                    for (var c in a) {
                        a.hasOwnProperty(c) && b(c, a[c])
                    }
                }

                function d(a, b) {
                    if (b) {
                        for (var c in b) {
                            b.hasOwnProperty(c) && (a[c] = b[c])
                        }
                    }
                    return a
                }

                function c(a, b) {
                    a.__proto__ = b;
                    return a
                }
                var e = {
                    __proto__: []
                }
                instanceof Array, g = {}, h = {};
                g[L && /Firefox\/2/i.test(L.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
                g.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
                b(g, function (a, b) {
                    if (b.length) {
                        for (var c = 0, d = b.length; c < d; c++) {
                            h[b[c]] = a
                        }
                    }
                });
                var k = {
                        propertychange: !0
                    },
                    f = v && function () {
                        for (var a = 3, b = v.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", c[0];) {}
                        return 4 < a ? a : p
                    }();
                return {
                    vb: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                    u: function (a, b) {
                        for (var c = 0, d = a.length; c < d; c++) {
                            b(a[c], c)
                        }
                    }, m: function (a, b) {
                        if ("function" == typeof Array.prototype.indexOf) {
                            return Array.prototype.indexOf.call(a, b)
                        }
                        for (var c = 0, d = a.length; c < d; c++) {
                            if (a[c] === b) {
                                return c
                            }
                        }
                        return -1
                    }, qb: function (a, b, c) {
                        for (var d = 0, f = a.length; d < f; d++) {
                            if (b.call(c, a[d], d)) {
                                return a[d]
                            }
                        }
                        return null
                    }, ua: function (m, b) {
                        var c = a.a.m(m, b);
                        0 < c ? m.splice(c, 1) : 0 === c && m.shift()
                    }, rb: function (m) {
                        m = m || [];
                        for (var b = [], c = 0, d = m.length; c < d; c++) {
                            0 > a.a.m(b, m[c]) && b.push(m[c])
                        }
                        return b
                    }, Da: function (a, b) {
                        a = a || [];
                        for (var c = [], d = 0, f = a.length; d < f; d++) {
                            c.push(b(a[d], d))
                        }
                        return c
                    }, ta: function (a, b) {
                        a = a || [];
                        for (var c = [], d = 0, f = a.length; d < f; d++) {
                            b(a[d], d) && c.push(a[d])
                        }
                        return c
                    }, ga: function (a, b) {
                        if (b instanceof Array) {
                            a.push.apply(a, b)
                        } else {
                            for (var c = 0, d = b.length; c < d; c++) {
                                a.push(b[c])
                            }
                        }
                        return a
                    }, ea: function (b, c, d) {
                        var f = a.a.m(a.a.Xa(b), c);
                        0 > f ? d && b.push(c) : d || b.splice(f, 1)
                    }, xa: e,
                    extend: d,
                    za: c,
                    Aa: e ? c : d,
                    G: b,
                    na: function (a, b) {
                        if (!a) {
                            return a
                        }
                        var c = {},
                            d;
                        for (d in a) {
                            a.hasOwnProperty(d) && (c[d] = b(a[d], d, a))
                        }
                        return c
                    }, Ka: function (b) {
                        for (; b.firstChild;) {
                            a.removeNode(b.firstChild)
                        }
                    }, oc: function (b) {
                        b = a.a.S(b);
                        for (var c = v.createElement("div"), d = 0, f = b.length; d < f; d++) {
                            c.appendChild(a.R(b[d]))
                        }
                        return c
                    }, ia: function (b, c) {
                        for (var d = 0, f = b.length, e = []; d < f; d++) {
                            var k = b[d].cloneNode(!0);
                            e.push(c ? a.R(k) : k)
                        }
                        return e
                    }, T: function (b, c) {
                        a.a.Ka(b);
                        if (c) {
                            for (var d = 0, f = c.length; d < f; d++) {
                                b.appendChild(c[d])
                            }
                        }
                    }, Lb: function (b, c) {
                        var d = b.nodeType ? [b] : b;
                        if (0 < d.length) {
                            for (var f = d[0], e = f.parentNode, k = 0, g = c.length; k < g; k++) {
                                e.insertBefore(c[k], f)
                            }
                            k = 0;
                            for (g = d.length; k < g; k++) {
                                a.removeNode(d[k])
                            }
                        }
                    }, ka: function (a, b) {
                        if (a.length) {
                            for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b;) {
                                a.shift()
                            }
                            if (1 < a.length) {
                                var c = a[0],
                                    d = a[a.length - 1];
                                for (a.length = 0; c !== d;) {
                                    if (a.push(c), c = c.nextSibling, !c) {
                                        return
                                    }
                                }
                                a.push(d)
                            }
                        }
                        return a
                    }, Nb: function (a, b) {
                        7 > f ? a.setAttribute("selected", b) : a.selected = b
                    }, cb: function (a) {
                        return null === a || a === p ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                    }, vc: function (a, b) {
                        a = a || "";
                        return b.length > a.length ? !1 : a.substring(0, b.length) === b
                    }, cc: function (a, b) {
                        if (a === b) {
                            return !0
                        }
                        if (11 === a.nodeType) {
                            return !1
                        }
                        if (b.contains) {
                            return b.contains(3 === a.nodeType ? a.parentNode : a)
                        }
                        if (b.compareDocumentPosition) {
                            return 16 == (b.compareDocumentPosition(a) & 16)
                        }
                        for (; a && a != b;) {
                            a = a.parentNode
                        }
                        return !!a
                    }, Ja: function (b) {
                        return a.a.cc(b, b.ownerDocument.documentElement)
                    }, ob: function (b) {
                        return !!a.a.qb(b, a.a.Ja)
                    }, t: function (a) {
                        return a && a.tagName && a.tagName.toLowerCase()
                    }, n: function (b, c, d) {
                        var e = f && k[c];
                        if (!e && w) {
                            w(b).bind(c, d)
                        } else {
                            if (e || "function" != typeof b.addEventListener) {
                                if ("undefined" != typeof b.attachEvent) {
                                    var g = function (a) {
                                            d.call(b, a)
                                        },
                                        h = "on" + c;
                                    b.attachEvent(h, g);
                                    a.a.w.da(b, function () {
                                        b.detachEvent(h, g)
                                    })
                                } else {
                                    throw Error("Browser doesn't support addEventListener or attachEvent")
                                }
                            } else {
                                b.addEventListener(c, d, !1)
                            }
                        }
                    }, oa: function (b, c) {
                        if (!b || !b.nodeType) {
                            throw Error("element must be a DOM node when calling triggerEvent")
                        }
                        var d;
                        "input" === a.a.t(b) && b.type && "click" == c.toLowerCase() ? (d = b.type, d = "checkbox" == d || "radio" == d) : d = !1;
                        if (w && !d) {
                            w(b).trigger(c)
                        } else {
                            if ("function" == typeof v.createEvent) {
                                if ("function" == typeof b.dispatchEvent) {
                                    d = v.createEvent(h[c] || "HTMLEvents"), d.initEvent(c, !0, !0, s, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b), b.dispatchEvent(d)
                                } else {
                                    throw Error("The supplied element doesn't support dispatchEvent")
                                }
                            } else {
                                if (d && b.click) {
                                    b.click()
                                } else {
                                    if ("undefined" != typeof b.fireEvent) {
                                        b.fireEvent("on" + c)
                                    } else {
                                        throw Error("Browser doesn't support triggering events")
                                    }
                                }
                            }
                        }
                    }, c: function (b) {
                        return a.C(b) ? b() : b
                    }, Xa: function (b) {
                        return a.C(b) ? b.v() : b
                    }, Ba: function (b, c, d) {
                        if (c) {
                            var f = /\S+/g,
                                e = b.className.match(f) || [];
                            a.a.u(c.match(f), function (b) {
                                a.a.ea(e, b, d)
                            });
                            b.className = e.join(" ")
                        }
                    }, bb: function (b, c) {
                        var d = a.a.c(c);
                        if (null === d || d === p) {
                            d = ""
                        }
                        var f = a.f.firstChild(b);
                        !f || 3 != f.nodeType || a.f.nextSibling(f) ? a.f.T(b, [b.ownerDocument.createTextNode(d)]) : f.data = d;
                        a.a.fc(b)
                    }, Mb: function (a, b) {
                        a.name = b;
                        if (7 >= f) {
                            try {
                                a.mergeAttributes(v.createElement("<input name='" + a.name + "'/>"), !1)
                            } catch (c) {}
                        }
                    }, fc: function (a) {
                        9 <= f && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom))
                    }, dc: function (a) {
                        if (f) {
                            var b = a.style.width;
                            a.style.width = 0;
                            a.style.width = b
                        }
                    }, sc: function (b, c) {
                        b = a.a.c(b);
                        c = a.a.c(c);
                        for (var d = [], f = b; f <= c; f++) {
                            d.push(f)
                        }
                        return d
                    }, S: function (a) {
                        for (var b = [], c = 0, d = a.length; c < d; c++) {
                            b.push(a[c])
                        }
                        return b
                    }, yc: 6 === f,
                    zc: 7 === f,
                    L: f,
                    xb: function (b, c) {
                        for (var d = a.a.S(b.getElementsByTagName("input")).concat(a.a.S(b.getElementsByTagName("textarea"))), f = "string" == typeof c ? function (a) {
                            return a.name === c
                        } : function (a) {
                            return c.test(a.name)
                        }, e = [], k = d.length - 1; 0 <= k; k--) {
                            f(d[k]) && e.push(d[k])
                        }
                        return e
                    }, pc: function (b) {
                        return "string" == typeof b && (b = a.a.cb(b)) ? D && D.parse ? D.parse(b) : (new Function("return " + b))() : null
                    }, eb: function (b, c, d) {
                        if (!D || !D.stringify) {
                            throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js")
                        }
                        return D.stringify(a.a.c(b), c, d)
                    }, qc: function (c, d, f) {
                        f = f || {};
                        var e = f.params || {},
                            k = f.includeFields || this.vb,
                            g = c;
                        if ("object" == typeof c && "form" === a.a.t(c)) {
                            for (var g = c.action, h = k.length - 1; 0 <= h; h--) {
                                for (var r = a.a.xb(c, k[h]), E = r.length - 1; 0 <= E; E--) {
                                    e[r[E].name] = r[E].value
                                }
                            }
                        }
                        d = a.a.c(d);
                        var y = v.createElement("form");
                        y.style.display = "none";
                        y.action = g;
                        y.method = "post";
                        for (var p in d) {
                            c = v.createElement("input"), c.type = "hidden", c.name = p, c.value = a.a.eb(a.a.c(d[p])), y.appendChild(c)
                        }
                        b(e, function (a, b) {
                            var c = v.createElement("input");
                            c.type = "hidden";
                            c.name = a;
                            c.value = b;
                            y.appendChild(c)
                        });
                        v.body.appendChild(y);
                        f.submitter ? f.submitter(y) : y.submit();
                        setTimeout(function () {
                            y.parentNode.removeChild(y)
                        }, 0)
                    }
                }
            }();
            a.b("utils", a.a);
            a.b("utils.arrayForEach", a.a.u);
            a.b("utils.arrayFirst", a.a.qb);
            a.b("utils.arrayFilter", a.a.ta);
            a.b("utils.arrayGetDistinctValues", a.a.rb);
            a.b("utils.arrayIndexOf", a.a.m);
            a.b("utils.arrayMap", a.a.Da);
            a.b("utils.arrayPushAll", a.a.ga);
            a.b("utils.arrayRemoveItem", a.a.ua);
            a.b("utils.extend", a.a.extend);
            a.b("utils.fieldsIncludedWithJsonPost", a.a.vb);
            a.b("utils.getFormFields", a.a.xb);
            a.b("utils.peekObservable", a.a.Xa);
            a.b("utils.postJson", a.a.qc);
            a.b("utils.parseJson", a.a.pc);
            a.b("utils.registerEventHandler", a.a.n);
            a.b("utils.stringifyJson", a.a.eb);
            a.b("utils.range", a.a.sc);
            a.b("utils.toggleDomNodeCssClass", a.a.Ba);
            a.b("utils.triggerEvent", a.a.oa);
            a.b("utils.unwrapObservable", a.a.c);
            a.b("utils.objectForEach", a.a.G);
            a.b("utils.addOrRemoveItem", a.a.ea);
            a.b("unwrap", a.a.c);
            Function.prototype.bind || (Function.prototype.bind = function (a) {
                var d = this,
                    c = Array.prototype.slice.call(arguments);
                a = c.shift();
                return function () {
                    return d.apply(a, c.concat(Array.prototype.slice.call(arguments)))
                }
            });
            a.a.e = new function () {
                function a(b, h) {
                    var k = b[c];
                    if (!k || "null" === k || !e[k]) {
                        if (!h) {
                            return p
                        }
                        k = b[c] = "ko" + d++;
                        e[k] = {}
                    }
                    return e[k]
                }
                var d = 0,
                    c = "__ko__" + (new Date).getTime(),
                    e = {};
                return {
                    get: function (c, d) {
                        var e = a(c, !1);
                        return e === p ? p : e[d]
                    }, set: function (c, d, e) {
                        if (e !== p || a(c, !1) !== p) {
                            a(c, !0)[d] = e
                        }
                    }, clear: function (a) {
                        var b = a[c];
                        return b ? (delete e[b], a[c] = null, !0) : !1
                    }, F: function () {
                        return d+++c
                    }
                }
            };
            a.b("utils.domData", a.a.e);
            a.b("utils.domData.clear", a.a.e.clear);
            a.a.w = new function () {
                function b(b, d) {
                    var f = a.a.e.get(b, c);
                    f === p && d && (f = [], a.a.e.set(b, c, f));
                    return f
                }

                function d(c) {
                    var e = b(c, !1);
                    if (e) {
                        for (var e = e.slice(0), f = 0; f < e.length; f++) {
                            e[f](c)
                        }
                    }
                    a.a.e.clear(c);
                    a.a.w.cleanExternalData(c);
                    if (g[c.nodeType]) {
                        for (e = c.firstChild; c = e;) {
                            e = c.nextSibling, 8 === c.nodeType && d(c)
                        }
                    }
                }
                var c = a.a.e.F(),
                    e = {
                        1: !0,
                        8: !0,
                        9: !0
                    },
                    g = {
                        1: !0,
                        9: !0
                    };
                return {
                    da: function (a, c) {
                        if ("function" != typeof c) {
                            throw Error("Callback must be a function")
                        }
                        b(a, !0).push(c)
                    }, Kb: function (d, e) {
                        var f = b(d, !1);
                        f && (a.a.ua(f, e), 0 == f.length && a.a.e.set(d, c, p))
                    }, R: function (b) {
                        if (e[b.nodeType] && (d(b), g[b.nodeType])) {
                            var c = [];
                            a.a.ga(c, b.getElementsByTagName("*"));
                            for (var f = 0, m = c.length; f < m; f++) {
                                d(c[f])
                            }
                        }
                        return b
                    }, removeNode: function (b) {
                        a.R(b);
                        b.parentNode && b.parentNode.removeChild(b)
                    }, cleanExternalData: function (a) {
                        w && "function" == typeof w.cleanData && w.cleanData([a])
                    }
                }
            };
            a.R = a.a.w.R;
            a.removeNode = a.a.w.removeNode;
            a.b("cleanNode", a.R);
            a.b("removeNode", a.removeNode);
            a.b("utils.domNodeDisposal", a.a.w);
            a.b("utils.domNodeDisposal.addDisposeCallback", a.a.w.da);
            a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.w.Kb);
            (function () {
                a.a.ba = function (b) {
                    var d;
                    if (w) {
                        if (w.parseHTML) {
                            d = w.parseHTML(b) || []
                        } else {
                            if ((d = w.clean([b])) && d[0]) {
                                for (b = d[0]; b.parentNode && 11 !== b.parentNode.nodeType;) {
                                    b = b.parentNode
                                }
                                b.parentNode && b.parentNode.removeChild(b)
                            }
                        }
                    } else {
                        var c = a.a.cb(b).toLowerCase();
                        d = v.createElement("div");
                        c = c.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !c.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!c.indexOf("<td") || !c.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""];
                        b = "ignored<div>" + c[1] + b + c[2] + "</div>";
                        for ("function" == typeof s.innerShiv ? d.appendChild(s.innerShiv(b)) : d.innerHTML = b; c[0]--;) {
                            d = d.lastChild
                        }
                        d = a.a.S(d.lastChild.childNodes)
                    }
                    return d
                };
                a.a.$a = function (b, d) {
                    a.a.Ka(b);
                    d = a.a.c(d);
                    if (null !== d && d !== p) {
                        if ("string" != typeof d && (d = d.toString()), w) {
                            w(b).html(d)
                        } else {
                            for (var c = a.a.ba(d), e = 0; e < c.length; e++) {
                                b.appendChild(c[e])
                            }
                        }
                    }
                }
            })();
            a.b("utils.parseHtmlFragment", a.a.ba);
            a.b("utils.setHtml", a.a.$a);
            a.D = function () {
                function b(c, d) {
                    if (c) {
                        if (8 == c.nodeType) {
                            var g = a.D.Gb(c.nodeValue);
                            null != g && d.push({
                                bc: c,
                                mc: g
                            })
                        } else {
                            if (1 == c.nodeType) {
                                for (var g = 0, h = c.childNodes, k = h.length; g < k; g++) {
                                    b(h[g], d)
                                }
                            }
                        }
                    }
                }
                var d = {};
                return {
                    Ua: function (a) {
                        if ("function" != typeof a) {
                            throw Error("You can only pass a function to ko.memoization.memoize()")
                        }
                        var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                        d[b] = a;
                        return "\x3c!--[ko_memo:" + b + "]--\x3e"
                    }, Rb: function (a, b) {
                        var g = d[a];
                        if (g === p) {
                            throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized.")
                        }
                        try {
                            return g.apply(null, b || []), !0
                        } finally {
                            delete d[a]
                        }
                    }, Sb: function (c, d) {
                        var g = [];
                        b(c, g);
                        for (var h = 0, k = g.length; h < k; h++) {
                            var f = g[h].bc,
                                m = [f];
                            d && a.a.ga(m, d);
                            a.D.Rb(g[h].mc, m);
                            f.nodeValue = "";
                            f.parentNode && f.parentNode.removeChild(f)
                        }
                    }, Gb: function (a) {
                        return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null
                    }
                }
            }();
            a.b("memoization", a.D);
            a.b("memoization.memoize", a.D.Ua);
            a.b("memoization.unmemoize", a.D.Rb);
            a.b("memoization.parseMemoText", a.D.Gb);
            a.b("memoization.unmemoizeDomNodeAndDescendants", a.D.Sb);
            a.La = {
                throttle: function (b, d) {
                    b.throttleEvaluation = d;
                    var c = null;
                    return a.j({
                        read: b,
                        write: function (a) {
                            clearTimeout(c);
                            c = setTimeout(function () {
                                b(a)
                            }, d)
                        }
                    })
                }, rateLimit: function (a, d) {
                    var c, e, g;
                    "number" == typeof d ? c = d : (c = d.timeout, e = d.method);
                    g = "notifyWhenChangesStop" == e ? T : S;
                    a.Ta(function (a) {
                        return g(a, c)
                    })
                }, notify: function (a, d) {
                    a.equalityComparer = "always" == d ? null : H
                }
            };
            var R = {
                undefined: 1,
                "boolean": 1,
                number: 1,
                string: 1
            };
            a.b("extenders", a.La);
            a.Pb = function (b, d, c) {
                this.target = b;
                this.wa = d;
                this.ac = c;
                this.Cb = !1;
                a.A(this, "dispose", this.K)
            };
            a.Pb.prototype.K = function () {
                this.Cb = !0;
                this.ac()
            };
            a.P = function () {
                a.a.Aa(this, a.P.fn);
                this.M = {}
            };
            var G = "change",
                A = {
                    U: function (b, d, c) {
                        var e = this;
                        c = c || G;
                        var g = new a.Pb(e, d ? b.bind(d) : b, function () {
                            a.a.ua(e.M[c], g);
                            e.nb && e.nb()
                        });
                        e.va && e.va(c);
                        e.M[c] || (e.M[c] = []);
                        e.M[c].push(g);
                        return g
                    }, notifySubscribers: function (b, d) {
                        d = d || G;
                        if (this.Ab(d)) {
                            try {
                                a.k.Ea();
                                for (var c = this.M[d].slice(0), e = 0, g; g = c[e]; ++e) {
                                    g.Cb || g.wa(b)
                                }
                            } finally {
                                a.k.end()
                            }
                        }
                    }, Ta: function (b) {
                        var d = this,
                            c = a.C(d),
                            e, g, h;
                        d.qa || (d.qa = d.notifySubscribers, d.notifySubscribers = function (a, b) {
                            b && b !== G ? "beforeChange" === b ? d.kb(a) : d.qa(a, b) : d.lb(a)
                        });
                        var k = b(function () {
                            c && h === d && (h = d());
                            e = !1;
                            d.Pa(g, h) && d.qa(g = h)
                        });
                        d.lb = function (a) {
                            e = !0;
                            h = a;
                            k()
                        };
                        d.kb = function (a) {
                            e || (g = a, d.qa(a, "beforeChange"))
                        }
                    }, Ab: function (a) {
                        return this.M[a] && this.M[a].length
                    }, yb: function () {
                        var b = 0;
                        a.a.G(this.M, function (a, c) {
                            b += c.length
                        });
                        return b
                    }, Pa: function (a, d) {
                        return !this.equalityComparer || !this.equalityComparer(a, d)
                    }, extend: function (b) {
                        var d = this;
                        b && a.a.G(b, function (b, e) {
                            var g = a.La[b];
                            "function" == typeof g && (d = g(d, e) || d)
                        });
                        return d
                    }
                };
            a.A(A, "subscribe", A.U);
            a.A(A, "extend", A.extend);
            a.A(A, "getSubscriptionsCount", A.yb);
            a.a.xa && a.a.za(A, Function.prototype);
            a.P.fn = A;
            a.Db = function (a) {
                return null != a && "function" == typeof a.U && "function" == typeof a.notifySubscribers
            };
            a.b("subscribable", a.P);
            a.b("isSubscribable", a.Db);
            a.Y = a.k = function () {
                function b(a) {
                    c.push(e);
                    e = a
                }

                function d() {
                    e = c.pop()
                }
                var c = [],
                    e, g = 0;
                return {
                    Ea: b,
                    end: d,
                    Jb: function (b) {
                        if (e) {
                            if (!a.Db(b)) {
                                throw Error("Only subscribable things can act as dependencies")
                            }
                            e.wa(b, b.Vb || (b.Vb = ++g))
                        }
                    }, B: function (a, c, f) {
                        try {
                            return b(), a.apply(c, f || [])
                        } finally {
                            d()
                        }
                    }, la: function () {
                        if (e) {
                            return e.s.la()
                        }
                    }, ma: function () {
                        if (e) {
                            return e.ma
                        }
                    }
                }
            }();
            a.b("computedContext", a.Y);
            a.b("computedContext.getDependenciesCount", a.Y.la);
            a.b("computedContext.isInitial", a.Y.ma);
            a.b("computedContext.isSleeping", a.Y.Ac);
            a.p = function (b) {
                function d() {
                    if (0 < arguments.length) {
                        return d.Pa(c, arguments[0]) && (d.X(), c = arguments[0], d.W()), this
                    }
                    a.k.Jb(d);
                    return c
                }
                var c = b;
                a.P.call(d);
                a.a.Aa(d, a.p.fn);
                d.v = function () {
                    return c
                };
                d.W = function () {
                    d.notifySubscribers(c)
                };
                d.X = function () {
                    d.notifySubscribers(c, "beforeChange")
                };
                a.A(d, "peek", d.v);
                a.A(d, "valueHasMutated", d.W);
                a.A(d, "valueWillMutate", d.X);
                return d
            };
            a.p.fn = {
                equalityComparer: H
            };
            var F = a.p.rc = "__ko_proto__";
            a.p.fn[F] = a.p;
            a.a.xa && a.a.za(a.p.fn, a.P.fn);
            a.Ma = function (b, d) {
                return null === b || b === p || b[F] === p ? !1 : b[F] === d ? !0 : a.Ma(b[F], d)
            };
            a.C = function (b) {
                return a.Ma(b, a.p)
            };
            a.Ra = function (b) {
                return "function" == typeof b && b[F] === a.p || "function" == typeof b && b[F] === a.j && b.hc ? !0 : !1
            };
            a.b("observable", a.p);
            a.b("isObservable", a.C);
            a.b("isWriteableObservable", a.Ra);
            a.b("isWritableObservable", a.Ra);
            a.aa = function (b) {
                b = b || [];
                if ("object" != typeof b || !("length" in b)) {
                    throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.")
                }
                b = a.p(b);
                a.a.Aa(b, a.aa.fn);
                return b.extend({
                    trackArrayChanges: !0
                })
            };
            a.aa.fn = {
                remove: function (b) {
                    for (var d = this.v(), c = [], e = "function" != typeof b || a.C(b) ? function (a) {
                        return a === b
                    } : b, g = 0; g < d.length; g++) {
                        var h = d[g];
                        e(h) && (0 === c.length && this.X(), c.push(h), d.splice(g, 1), g--)
                    }
                    c.length && this.W();
                    return c
                }, removeAll: function (b) {
                    if (b === p) {
                        var d = this.v(),
                            c = d.slice(0);
                        this.X();
                        d.splice(0, d.length);
                        this.W();
                        return c
                    }
                    return b ? this.remove(function (c) {
                        return 0 <= a.a.m(b, c)
                    }) : []
                }, destroy: function (b) {
                    var d = this.v(),
                        c = "function" != typeof b || a.C(b) ? function (a) {
                            return a === b
                        } : b;
                    this.X();
                    for (var e = d.length - 1; 0 <= e; e--) {
                        c(d[e]) && (d[e]._destroy = !0)
                    }
                    this.W()
                }, destroyAll: function (b) {
                    return b === p ? this.destroy(function () {
                        return !0
                    }) : b ? this.destroy(function (d) {
                        return 0 <= a.a.m(b, d)
                    }) : []
                }, indexOf: function (b) {
                    var d = this();
                    return a.a.m(d, b)
                }, replace: function (a, d) {
                    var c = this.indexOf(a);
                    0 <= c && (this.X(), this.v()[c] = d, this.W())
                }
            };
            a.a.u("pop push reverse shift sort splice unshift".split(" "), function (b) {
                a.aa.fn[b] = function () {
                    var a = this.v();
                    this.X();
                    this.sb(a, b, arguments);
                    a = a[b].apply(a, arguments);
                    this.W();
                    return a
                }
            });
            a.a.u(["slice"], function (b) {
                a.aa.fn[b] = function () {
                    var a = this();
                    return a[b].apply(a, arguments)
                }
            });
            a.a.xa && a.a.za(a.aa.fn, a.p.fn);
            a.b("observableArray", a.aa);
            var J = "arrayChange";
            a.La.trackArrayChanges = function (b) {
                function d() {
                    if (!c) {
                        c = !0;
                        var d = b.notifySubscribers;
                        b.notifySubscribers = function (a, b) {
                            b && b !== G || ++g;
                            return d.apply(this, arguments)
                        };
                        var f = [].concat(b.v() || []);
                        e = null;
                        b.U(function (c) {
                            c = [].concat(c || []);
                            if (b.Ab(J)) {
                                var d;
                                if (!e || 1 < g) {
                                    e = a.a.Fa(f, c, {
                                        sparse: !0
                                    })
                                }
                                d = e;
                                d.length && b.notifySubscribers(d, J)
                            }
                            f = c;
                            e = null;
                            g = 0
                        })
                    }
                }
                if (!b.sb) {
                    var c = !1,
                        e = null,
                        g = 0,
                        h = b.U;
                    b.U = b.subscribe = function (a, b, c) {
                        c === J && d();
                        return h.apply(this, arguments)
                    };
                    b.sb = function (b, d, m) {
                        function l(a, b, c) {
                            return q[q.length] = {
                                status: a,
                                value: b,
                                index: c
                            }
                        }
                        if (c && !g) {
                            var q = [],
                                h = b.length,
                                t = m.length,
                                z = 0;
                            switch (d) {
                            case "push":
                                z = h;
                            case "unshift":
                                for (d = 0; d < t; d++) {
                                    l("added", m[d], z + d)
                                }
                                break;
                            case "pop":
                                z = h - 1;
                            case "shift":
                                h && l("deleted", b[z], z);
                                break;
                            case "splice":
                                d = Math.min(Math.max(0, 0 > m[0] ? h + m[0] : m[0]), h);
                                for (var h = 1 === t ? h : Math.min(d + (m[1] || 0), h), t = d + t - 2, z = Math.max(h, t), u = [], r = [], E = 2; d < z; ++d, ++E) {
                                    d < h && r.push(l("deleted", b[d], d)), d < t && u.push(l("added", m[E], d))
                                }
                                a.a.wb(r, u);
                                break;
                            default:
                                return
                            }
                            e = q
                        }
                    }
                }
            };
            a.s = a.j = function (b, d, c) {
                function e() {
                    a.a.G(v, function (a, b) {
                        b.K()
                    });
                    v = {}
                }

                function g() {
                    e();
                    C = 0;
                    u = !0;
                    n = !1
                }

                function h() {
                    var a = f.throttleEvaluation;
                    a && 0 <= a ? (clearTimeout(P), P = setTimeout(k, a)) : f.ib ? f.ib() : k()
                }

                function k(b) {
                    if (t) {
                        if (E) {
                            throw Error("A 'pure' computed must not be called recursively")
                        }
                    } else {
                        if (!u) {
                            if (w && w()) {
                                if (!z) {
                                    s();
                                    return
                                }
                            } else {
                                z = !1
                            }
                            t = !0;
                            if (y) {
                                try {
                                    var c = {};
                                    a.k.Ea({
                                        wa: function (a, b) {
                                            c[b] || (c[b] = 1, ++C)
                                        }, s: f,
                                        ma: p
                                    });
                                    C = 0;
                                    q = r.call(d)
                                } finally {
                                    a.k.end(), t = !1
                                }
                            } else {
                                try {
                                    var e = v,
                                        m = C;
                                    a.k.Ea({
                                        wa: function (a, b) {
                                            u || (m && e[b] ? (v[b] = e[b], ++C, delete e[b], --m) : v[b] || (v[b] = a.U(h), ++C))
                                        }, s: f,
                                        ma: E ? p : !C
                                    });
                                    v = {};
                                    C = 0;
                                    try {
                                        var l = d ? r.call(d) : r()
                                    } finally {
                                        a.k.end(), m && a.a.G(e, function (a, b) {
                                            b.K()
                                        }), n = !1
                                    }
                                    f.Pa(q, l) && (f.notifySubscribers(q, "beforeChange"), q = l, !0 !== b && f.notifySubscribers(q))
                                } finally {
                                    t = !1
                                }
                            }
                            C || s()
                        }
                    }
                }

                function f() {
                    if (0 < arguments.length) {
                        if ("function" === typeof O) {
                            O.apply(d, arguments)
                        } else {
                            throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.")
                        }
                        return this
                    }
                    a.k.Jb(f);
                    n && k(!0);
                    return q
                }

                function m() {
                    n && !C && k(!0);
                    return q
                }

                function l() {
                    return n || 0 < C
                }
                var q, n = !0,
                    t = !1,
                    z = !1,
                    u = !1,
                    r = b,
                    E = !1,
                    y = !1;
                r && "object" == typeof r ? (c = r, r = c.read) : (c = c || {}, r || (r = c.read));
                if ("function" != typeof r) {
                    throw Error("Pass a function that returns the value of the ko.computed")
                }
                var O = c.write,
                    x = c.disposeWhenNodeIsRemoved || c.o || null,
                    B = c.disposeWhen || c.Ia,
                    w = B,
                    s = g,
                    v = {},
                    C = 0,
                    P = null;
                d || (d = c.owner);
                a.P.call(f);
                a.a.Aa(f, a.j.fn);
                f.v = m;
                f.la = function () {
                    return C
                };
                f.hc = "function" === typeof c.write;
                f.K = function () {
                    s()
                };
                f.Z = l;
                var A = f.Ta;
                f.Ta = function (a) {
                    A.call(f, a);
                    f.ib = function () {
                        f.kb(q);
                        n = !0;
                        f.lb(f)
                    }
                };
                c.pure ? (y = E = !0, f.va = function () {
                    y && (y = !1, k(!0))
                }, f.nb = function () {
                    f.yb() || (e(), y = n = !0)
                }) : c.deferEvaluation && (f.va = function () {
                    m();
                    delete f.va
                });
                a.A(f, "peek", f.v);
                a.A(f, "dispose", f.K);
                a.A(f, "isActive", f.Z);
                a.A(f, "getDependenciesCount", f.la);
                x && (z = !0, x.nodeType && (w = function () {
                    return !a.a.Ja(x) || B && B()
                }));
                y || c.deferEvaluation || k();
                x && l() && x.nodeType && (s = function () {
                    a.a.w.Kb(x, s);
                    g()
                }, a.a.w.da(x, s));
                return f
            };
            a.jc = function (b) {
                return a.Ma(b, a.j)
            };
            A = a.p.rc;
            a.j[A] = a.p;
            a.j.fn = {
                equalityComparer: H
            };
            a.j.fn[A] = a.j;
            a.a.xa && a.a.za(a.j.fn, a.P.fn);
            a.b("dependentObservable", a.j);
            a.b("computed", a.j);
            a.b("isComputed", a.jc);
            a.Ib = function (b, d) {
                if ("function" === typeof b) {
                    return a.s(b, d, {
                        pure: !0
                    })
                }
                b = a.a.extend({}, b);
                b.pure = !0;
                return a.s(b, d)
            };
            a.b("pureComputed", a.Ib);
            (function () {
                function b(a, g, h) {
                    h = h || new c;
                    a = g(a);
                    if ("object" != typeof a || null === a || a === p || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean) {
                        return a
                    }
                    var k = a instanceof Array ? [] : {};
                    h.save(a, k);
                    d(a, function (c) {
                        var d = g(a[c]);
                        switch (typeof d) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "function":
                            k[c] = d;
                            break;
                        case "object":
                        case "undefined":
                            var l = h.get(d);
                            k[c] = l !== p ? l : b(d, g, h)
                        }
                    });
                    return k
                }

                function d(a, b) {
                    if (a instanceof Array) {
                        for (var c = 0; c < a.length; c++) {
                            b(c)
                        }
                        "function" == typeof a.toJSON && b("toJSON")
                    } else {
                        for (c in a) {
                            b(c)
                        }
                    }
                }

                function c() {
                    this.keys = [];
                    this.hb = []
                }
                a.Qb = function (c) {
                    if (0 == arguments.length) {
                        throw Error("When calling ko.toJS, pass the object you want to convert.")
                    }
                    return b(c, function (b) {
                        for (var c = 0; a.C(b) && 10 > c; c++) {
                            b = b()
                        }
                        return b
                    })
                };
                a.toJSON = function (b, c, d) {
                    b = a.Qb(b);
                    return a.a.eb(b, c, d)
                };
                c.prototype = {
                    save: function (b, c) {
                        var d = a.a.m(this.keys, b);
                        0 <= d ? this.hb[d] = c : (this.keys.push(b), this.hb.push(c))
                    }, get: function (b) {
                        b = a.a.m(this.keys, b);
                        return 0 <= b ? this.hb[b] : p
                    }
                }
            })();
            a.b("toJS", a.Qb);
            a.b("toJSON", a.toJSON);
            (function () {
                a.i = {
                    q: function (b) {
                        switch (a.a.t(b)) {
                        case "option":
                            return !0 === b.__ko__hasDomDataOptionValue__ ? a.a.e.get(b, a.d.options.Va) : 7 >= a.a.L ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;
                        case "select":
                            return 0 <= b.selectedIndex ? a.i.q(b.options[b.selectedIndex]) : p;
                        default:
                            return b.value
                        }
                    }, ca: function (b, d, c) {
                        switch (a.a.t(b)) {
                        case "option":
                            switch (typeof d) {
                            case "string":
                                a.a.e.set(b, a.d.options.Va, p);
                                "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__;
                                b.value = d;
                                break;
                            default:
                                a.a.e.set(b, a.d.options.Va, d), b.__ko__hasDomDataOptionValue__ = !0, b.value = "number" === typeof d ? d : ""
                            }
                            break;
                        case "select":
                            if ("" === d || null === d) {
                                d = p
                            }
                            for (var e = -1, g = 0, h = b.options.length, k; g < h; ++g) {
                                if (k = a.i.q(b.options[g]), k == d || "" == k && d === p) {
                                    e = g;
                                    break
                                }
                            }
                            if (c || 0 <= e || d === p && 1 < b.size) {
                                b.selectedIndex = e
                            }
                            break;
                        default:
                            if (null === d || d === p) {
                                d = ""
                            }
                            b.value = d
                        }
                    }
                }
            })();
            a.b("selectExtensions", a.i);
            a.b("selectExtensions.readValue", a.i.q);
            a.b("selectExtensions.writeValue", a.i.ca);
            a.h = function () {
                function b(b) {
                    b = a.a.cb(b);
                    123 === b.charCodeAt(0) && (b = b.slice(1, -1));
                    var c = [],
                        d = b.match(e),
                        k, n, t = 0;
                    if (d) {
                        d.push(",");
                        for (var z = 0, u; u = d[z]; ++z) {
                            var r = u.charCodeAt(0);
                            if (44 === r) {
                                if (0 >= t) {
                                    k && c.push(n ? {
                                        key: k,
                                        value: n.join("")
                                    } : {
                                        unknown: k
                                    });
                                    k = n = t = 0;
                                    continue
                                }
                            } else {
                                if (58 === r) {
                                    if (!n) {
                                        continue
                                    }
                                } else {
                                    if (47 === r && z && 1 < u.length) {
                                        (r = d[z - 1].match(g)) && !h[r[0]] && (b = b.substr(b.indexOf(u) + 1), d = b.match(e), d.push(","), z = -1, u = "/")
                                    } else {
                                        if (40 === r || 123 === r || 91 === r) {
                                            ++t
                                        } else {
                                            if (41 === r || 125 === r || 93 === r) {
                                                --t
                                            } else {
                                                if (!k && !n) {
                                                    k = 34 === r || 39 === r ? u.slice(1, -1) : u;
                                                    continue
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            n ? n.push(u) : n = [u]
                        }
                    }
                    return c
                }
                var d = ["true", "false", "null", "undefined"],
                    c = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
                    e = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"),
                    g = /[\])"'A-Za-z0-9_$]+$/,
                    h = {
                        "in": 1,
                        "return": 1,
                        "typeof": 1
                    },
                    k = {};
                return {
                    ha: [],
                    V: k,
                    Wa: b,
                    ya: function (f, m) {
                        function e(b, m) {
                            var f;
                            if (!z) {
                                var u = a.getBindingHandler(b);
                                if (u && u.preprocess && !(m = u.preprocess(m, b, e))) {
                                    return
                                }
                                if (u = k[b]) {
                                    f = m, 0 <= a.a.m(d, f) ? f = !1 : (u = f.match(c), f = null === u ? !1 : u[1] ? "Object(" + u[1] + ")" + u[2] : f), u = f
                                }
                                u && h.push("'" + b + "':function(_z){" + f + "=_z}")
                            }
                            t && (m = "function(){return " + m + " }");
                            g.push("'" + b + "':" + m)
                        }
                        m = m || {};
                        var g = [],
                            h = [],
                            t = m.valueAccessors,
                            z = m.bindingParams,
                            u = "string" === typeof f ? b(f) : f;
                        a.a.u(u, function (a) {
                            e(a.key || a.unknown, a.value)
                        });
                        h.length && e("_ko_property_writers", "{" + h.join(",") + " }");
                        return g.join(",")
                    }, lc: function (a, b) {
                        for (var c = 0; c < a.length; c++) {
                            if (a[c].key == b) {
                                return !0
                            }
                        }
                        return !1
                    }, pa: function (b, c, d, e, k) {
                        if (b && a.C(b)) {
                            !a.Ra(b) || k && b.v() === e || b(e)
                        } else {
                            if ((b = c.get("_ko_property_writers")) && b[d]) {
                                b[d](e)
                            }
                        }
                    }
                }
            }();
            a.b("expressionRewriting", a.h);
            a.b("expressionRewriting.bindingRewriteValidators", a.h.ha);
            a.b("expressionRewriting.parseObjectLiteral", a.h.Wa);
            a.b("expressionRewriting.preProcessBindings", a.h.ya);
            a.b("expressionRewriting._twoWayBindings", a.h.V);
            a.b("jsonExpressionRewriting", a.h);
            a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.h.ya);
            (function () {
                function b(a) {
                    return 8 == a.nodeType && h.test(g ? a.text : a.nodeValue)
                }

                function d(a) {
                    return 8 == a.nodeType && k.test(g ? a.text : a.nodeValue)
                }

                function c(a, c) {
                    for (var f = a, e = 1, k = []; f = f.nextSibling;) {
                        if (d(f) && (e--, 0 === e)) {
                            return k
                        }
                        k.push(f);
                        b(f) && e++
                    }
                    if (!c) {
                        throw Error("Cannot find closing comment tag to match: " + a.nodeValue)
                    }
                    return null
                }

                function e(a, b) {
                    var d = c(a, b);
                    return d ? 0 < d.length ? d[d.length - 1].nextSibling : a.nextSibling : null
                }
                var g = v && "\x3c!--test--\x3e" === v.createComment("test").text,
                    h = g ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
                    k = g ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
                    f = {
                        ul: !0,
                        ol: !0
                    };
                a.f = {
                    Q: {},
                    childNodes: function (a) {
                        return b(a) ? c(a) : a.childNodes
                    }, ja: function (c) {
                        if (b(c)) {
                            c = a.f.childNodes(c);
                            for (var d = 0, f = c.length; d < f; d++) {
                                a.removeNode(c[d])
                            }
                        } else {
                            a.a.Ka(c)
                        }
                    }, T: function (c, d) {
                        if (b(c)) {
                            a.f.ja(c);
                            for (var f = c.nextSibling, e = 0, k = d.length; e < k; e++) {
                                f.parentNode.insertBefore(d[e], f)
                            }
                        } else {
                            a.a.T(c, d)
                        }
                    }, Hb: function (a, c) {
                        b(a) ? a.parentNode.insertBefore(c, a.nextSibling) : a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(c)
                    }, Bb: function (c, d, f) {
                        f ? b(c) ? c.parentNode.insertBefore(d, f.nextSibling) : f.nextSibling ? c.insertBefore(d, f.nextSibling) : c.appendChild(d) : a.f.Hb(c, d)
                    }, firstChild: function (a) {
                        return b(a) ? !a.nextSibling || d(a.nextSibling) ? null : a.nextSibling : a.firstChild
                    }, nextSibling: function (a) {
                        b(a) && (a = e(a));
                        return a.nextSibling && d(a.nextSibling) ? null : a.nextSibling
                    }, gc: b,
                    xc: function (a) {
                        return (a = (g ? a.text : a.nodeValue).match(h)) ? a[1] : null
                    }, Fb: function (c) {
                        if (f[a.a.t(c)]) {
                            var k = c.firstChild;
                            if (k) {
                                do {
                                    if (1 === k.nodeType) {
                                        var g;
                                        g = k.firstChild;
                                        var h = null;
                                        if (g) {
                                            do {
                                                if (h) {
                                                    h.push(g)
                                                } else {
                                                    if (b(g)) {
                                                        var t = e(g, !0);
                                                        t ? g = t : h = [g]
                                                    } else {
                                                        d(g) && (h = [g])
                                                    }
                                                }
                                            } while (g = g.nextSibling)
                                        }
                                        if (g = h) {
                                            for (h = k.nextSibling, t = 0; t < g.length; t++) {
                                                h ? c.insertBefore(g[t], h) : c.appendChild(g[t])
                                            }
                                        }
                                    }
                                } while (k = k.nextSibling)
                            }
                        }
                    }
                }
            })();
            a.b("virtualElements", a.f);
            a.b("virtualElements.allowedBindings", a.f.Q);
            a.b("virtualElements.emptyNode", a.f.ja);
            a.b("virtualElements.insertAfter", a.f.Bb);
            a.b("virtualElements.prepend", a.f.Hb);
            a.b("virtualElements.setDomNodeChildren", a.f.T);
            (function () {
                a.J = function () {
                    this.Yb = {}
                };
                a.a.extend(a.J.prototype, {
                    nodeHasBindings: function (b) {
                        switch (b.nodeType) {
                        case 1:
                            return null != b.getAttribute("data-bind") || a.g.getComponentNameForNode(b);
                        case 8:
                            return a.f.gc(b);
                        default:
                            return !1
                        }
                    }, getBindings: function (b, d) {
                        var c = this.getBindingsString(b, d),
                            c = c ? this.parseBindingsString(c, d, b) : null;
                        return a.g.mb(c, b, d, !1)
                    }, getBindingAccessors: function (b, d) {
                        var c = this.getBindingsString(b, d),
                            c = c ? this.parseBindingsString(c, d, b, {
                                valueAccessors: !0
                            }) : null;
                        return a.g.mb(c, b, d, !0)
                    }, getBindingsString: function (b) {
                        switch (b.nodeType) {
                        case 1:
                            return b.getAttribute("data-bind");
                        case 8:
                            return a.f.xc(b);
                        default:
                            return null
                        }
                    }, parseBindingsString: function (b, d, c, e) {
                        try {
                            var g = this.Yb,
                                h = b + (e && e.valueAccessors || ""),
                                k;
                            if (!(k = g[h])) {
                                var f, m = "with($context){with($data||{}){return{" + a.h.ya(b, e) + "}}}";
                                f = new Function("$context", "$element", m);
                                k = g[h] = f
                            }
                            return k(d, c)
                        } catch (l) {
                            throw l.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + l.message, l
                        }
                    }
                });
                a.J.instance = new a.J
            })();
            a.b("bindingProvider", a.J);
            (function () {
                function b(a) {
                    return function () {
                        return a
                    }
                }

                function d(a) {
                    return a()
                }

                function c(b) {
                    return a.a.na(a.k.B(b), function (a, c) {
                        return function () {
                            return b()[c]
                        }
                    })
                }

                function e(a, b) {
                    return c(this.getBindings.bind(this, a, b))
                }

                function g(b, c, d) {
                    var f, e = a.f.firstChild(c),
                        k = a.J.instance,
                        g = k.preprocessNode;
                    if (g) {
                        for (; f = e;) {
                            e = a.f.nextSibling(f), g.call(k, f)
                        }
                        e = a.f.firstChild(c)
                    }
                    for (; f = e;) {
                        e = a.f.nextSibling(f), h(b, f, d)
                    }
                }

                function h(b, c, d) {
                    var e = !0,
                        k = 1 === c.nodeType;
                    k && a.f.Fb(c);
                    if (k && d || a.J.instance.nodeHasBindings(c)) {
                        e = f(c, null, b, d).shouldBindDescendants
                    }
                    e && !l[a.a.t(c)] && g(b, c, !k)
                }

                function k(b) {
                    var c = [],
                        d = {},
                        f = [];
                    a.a.G(b, function y(e) {
                        if (!d[e]) {
                            var k = a.getBindingHandler(e);
                            k && (k.after && (f.push(e), a.a.u(k.after, function (c) {
                                if (b[c]) {
                                    if (-1 !== a.a.m(f, c)) {
                                        throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + f.join(", "))
                                    }
                                    y(c)
                                }
                            }), f.length--), c.push({
                                key: e,
                                zb: k
                            }));
                            d[e] = !0
                        }
                    });
                    return c
                }

                function f(b, c, f, g) {
                    var m = a.a.e.get(b, q);
                    if (!c) {
                        if (m) {
                            throw Error("You cannot apply bindings multiple times to the same element.")
                        }
                        a.a.e.set(b, q, !0)
                    }!m && g && a.Ob(b, f);
                    var l;
                    if (c && "function" !== typeof c) {
                        l = c
                    } else {
                        var h = a.J.instance,
                            n = h.getBindingAccessors || e,
                            s = a.j(function () {
                                (l = c ? c(f, b) : n.call(h, b, f)) && f.I && f.I();
                                return l
                            }, null, {
                                o: b
                            });
                        l && s.Z() || (s = null)
                    }
                    var v;
                    if (l) {
                        var w = s ? function (a) {
                                return function () {
                                    return d(s()[a])
                                }
                            } : function (a) {
                                return l[a]
                            },
                            A = function () {
                                return a.a.na(s ? s() : l, d)
                            };
                        A.get = function (a) {
                            return l[a] && d(w(a))
                        };
                        A.has = function (a) {
                            return a in l
                        };
                        g = k(l);
                        a.a.u(g, function (c) {
                            var d = c.zb.init,
                                e = c.zb.update,
                                k = c.key;
                            if (8 === b.nodeType && !a.f.Q[k]) {
                                throw Error("The binding '" + k + "' cannot be used with virtual elements")
                            }
                            try {
                                "function" == typeof d && a.k.B(function () {
                                    var a = d(b, w(k), A, f.$data, f);
                                    if (a && a.controlsDescendantBindings) {
                                        if (v !== p) {
                                            throw Error("Multiple bindings (" + v + " and " + k + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")
                                        }
                                        v = k
                                    }
                                }), "function" == typeof e && a.j(function () {
                                    e(b, w(k), A, f.$data, f)
                                }, null, {
                                    o: b
                                })
                            } catch (g) {
                                throw g.message = 'Unable to process binding "' + k + ": " + l[k] + '"\nMessage: ' + g.message, g
                            }
                        })
                    }
                    return {
                        shouldBindDescendants: v === p
                    }
                }

                function m(b) {
                    return b && b instanceof a.N ? b : new a.N(b)
                }
                a.d = {};
                var l = {
                    script: !0
                };
                a.getBindingHandler = function (b) {
                    return a.d[b]
                };
                a.N = function (b, c, d, f) {
                    var e = this,
                        k = "function" == typeof b && !a.C(b),
                        g, m = a.j(function () {
                            var g = k ? b() : b,
                                l = a.a.c(g);
                            c ? (c.I && c.I(), a.a.extend(e, c), m && (e.I = m)) : (e.$parents = [], e.$root = l, e.ko = a);
                            e.$rawData = g;
                            e.$data = l;
                            d && (e[d] = l);
                            f && f(e, c, l);
                            return e.$data
                        }, null, {
                            Ia: function () {
                                return g && !a.a.ob(g)
                            }, o: !0
                        });
                    m.Z() && (e.I = m, m.equalityComparer = null, g = [], m.Tb = function (b) {
                        g.push(b);
                        a.a.w.da(b, function (b) {
                            a.a.ua(g, b);
                            g.length || (m.K(), e.I = m = p)
                        })
                    })
                };
                a.N.prototype.createChildContext = function (b, c, d) {
                    return new a.N(b, this, c, function (a, b) {
                        a.$parentContext = b;
                        a.$parent = b.$data;
                        a.$parents = (b.$parents || []).slice(0);
                        a.$parents.unshift(a.$parent);
                        d && d(a)
                    })
                };
                a.N.prototype.extend = function (b) {
                    return new a.N(this.I || this.$data, this, null, function (c, d) {
                        c.$rawData = d.$rawData;
                        a.a.extend(c, "function" == typeof b ? b() : b)
                    })
                };
                var q = a.a.e.F(),
                    n = a.a.e.F();
                a.Ob = function (b, c) {
                    if (2 == arguments.length) {
                        a.a.e.set(b, n, c), c.I && c.I.Tb(b)
                    } else {
                        return a.a.e.get(b, n)
                    }
                };
                a.ra = function (b, c, d) {
                    1 === b.nodeType && a.f.Fb(b);
                    return f(b, c, m(d), !0)
                };
                a.Wb = function (d, f, e) {
                    e = m(e);
                    return a.ra(d, "function" === typeof f ? c(f.bind(null, e, d)) : a.a.na(f, b), e)
                };
                a.Ca = function (a, b) {
                    1 !== b.nodeType && 8 !== b.nodeType || g(m(a), b, !0)
                };
                a.pb = function (a, b) {
                    !w && s.jQuery && (w = s.jQuery);
                    if (b && 1 !== b.nodeType && 8 !== b.nodeType) {
                        throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node")
                    }
                    b = b || s.document.body;
                    h(m(a), b, !0)
                };
                a.Ha = function (b) {
                    switch (b.nodeType) {
                    case 1:
                    case 8:
                        var c = a.Ob(b);
                        if (c) {
                            return c
                        }
                        if (b.parentNode) {
                            return a.Ha(b.parentNode)
                        }
                    }
                    return p
                };
                a.$b = function (b) {
                    return (b = a.Ha(b)) ? b.$data : p
                };
                a.b("bindingHandlers", a.d);
                a.b("applyBindings", a.pb);
                a.b("applyBindingsToDescendants", a.Ca);
                a.b("applyBindingAccessorsToNode", a.ra);
                a.b("applyBindingsToNode", a.Wb);
                a.b("contextFor", a.Ha);
                a.b("dataFor", a.$b)
            })();
            (function (b) {
                function d(d, f) {
                    var e = g.hasOwnProperty(d) ? g[d] : b,
                        l;
                    e || (e = g[d] = new a.P, c(d, function (a) {
                        h[d] = a;
                        delete g[d];
                        l ? e.notifySubscribers(a) : setTimeout(function () {
                            e.notifySubscribers(a)
                        }, 0)
                    }), l = !0);
                    e.U(f)
                }

                function c(a, b) {
                    e("getConfig", [a], function (c) {
                        c ? e("loadComponent", [a, c], function (a) {
                            b(a)
                        }) : b(null)
                    })
                }

                function e(c, d, g, l) {
                    l || (l = a.g.loaders.slice(0));
                    var h = l.shift();
                    if (h) {
                        var n = h[c];
                        if (n) {
                            var t = !1;
                            if (n.apply(h, d.concat(function (a) {
                                t ? g(null) : null !== a ? g(a) : e(c, d, g, l)
                            })) !== b && (t = !0, !h.suppressLoaderExceptions)) {
                                throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.")
                            }
                        } else {
                            e(c, d, g, l)
                        }
                    } else {
                        g(null)
                    }
                }
                var g = {},
                    h = {};
                a.g = {
                    get: function (a, c) {
                        var e = h.hasOwnProperty(a) ? h[a] : b;
                        e ? setTimeout(function () {
                            c(e)
                        }, 0) : d(a, c)
                    }, tb: function (a) {
                        delete h[a]
                    }, jb: e
                };
                a.g.loaders = [];
                a.b("components", a.g);
                a.b("components.get", a.g.get);
                a.b("components.clearCachedDefinition", a.g.tb)
            })();
            (function () {
                function b(b, c, d, e) {
                    function k() {
                        0 === --u && e(h)
                    }
                    var h = {},
                        u = 2,
                        r = d.template;
                    d = d.viewModel;
                    r ? g(c, r, function (c) {
                        a.g.jb("loadTemplate", [b, c], function (a) {
                            h.template = a;
                            k()
                        })
                    }) : k();
                    d ? g(c, d, function (c) {
                        a.g.jb("loadViewModel", [b, c], function (a) {
                            h[f] = a;
                            k()
                        })
                    }) : k()
                }

                function d(a, b, c) {
                    if ("function" === typeof b) {
                        c(function (a) {
                            return new b(a)
                        })
                    } else {
                        if ("function" === typeof b[f]) {
                            c(b[f])
                        } else {
                            if ("instance" in b) {
                                var e = b.instance;
                                c(function () {
                                    return e
                                })
                            } else {
                                "viewModel" in b ? d(a, b.viewModel, c) : a("Unknown viewModel value: " + b)
                            }
                        }
                    }
                }

                function c(b) {
                    switch (a.a.t(b)) {
                    case "script":
                        return a.a.ba(b.text);
                    case "textarea":
                        return a.a.ba(b.value);
                    case "template":
                        if (e(b.content)) {
                            return a.a.ia(b.content.childNodes)
                        }
                    }
                    return a.a.ia(b.childNodes)
                }

                function e(a) {
                    return s.DocumentFragment ? a instanceof DocumentFragment : a && 11 === a.nodeType
                }

                function g(a, b, c) {
                    "string" === typeof b.require ? N || s.require ? (N || s.require)([b.require], c) : a("Uses require, but no AMD loader is present") : c(b)
                }

                function h(a) {
                    return function (b) {
                        throw Error("Component '" + a + "': " + b)
                    }
                }
                var k = {};
                a.g.tc = function (b, c) {
                    if (!c) {
                        throw Error("Invalid configuration for " + b)
                    }
                    if (a.g.Qa(b)) {
                        throw Error("Component " + b + " is already registered")
                    }
                    k[b] = c
                };
                a.g.Qa = function (a) {
                    return a in k
                };
                a.g.wc = function (b) {
                    delete k[b];
                    a.g.tb(b)
                };
                a.g.ub = {
                    getConfig: function (a, b) {
                        b(k.hasOwnProperty(a) ? k[a] : null)
                    }, loadComponent: function (a, c, d) {
                        var e = h(a);
                        g(e, c, function (c) {
                            b(a, e, c, d)
                        })
                    }, loadTemplate: function (b, d, f) {
                        b = h(b);
                        if ("string" === typeof d) {
                            f(a.a.ba(d))
                        } else {
                            if (d instanceof Array) {
                                f(d)
                            } else {
                                if (e(d)) {
                                    f(a.a.S(d.childNodes))
                                } else {
                                    if (d.element) {
                                        if (d = d.element, s.HTMLElement ? d instanceof HTMLElement : d && d.tagName && 1 === d.nodeType) {
                                            f(c(d))
                                        } else {
                                            if ("string" === typeof d) {
                                                var k = v.getElementById(d);
                                                k ? f(c(k)) : b("Cannot find element with ID " + d)
                                            } else {
                                                b("Unknown element type: " + d)
                                            }
                                        }
                                    } else {
                                        b("Unknown template value: " + d)
                                    }
                                }
                            }
                        }
                    }, loadViewModel: function (a, b, c) {
                        d(h(a), b, c)
                    }
                };
                var f = "createViewModel";
                a.b("components.register", a.g.tc);
                a.b("components.isRegistered", a.g.Qa);
                a.b("components.unregister", a.g.wc);
                a.b("components.defaultLoader", a.g.ub);
                a.g.loaders.push(a.g.ub);
                a.g.Ub = k
            })();
            (function () {
                function b(b, e) {
                    var g = b.getAttribute("params");
                    if (g) {
                        var g = d.parseBindingsString(g, e, b, {
                                valueAccessors: !0,
                                bindingParams: !0
                            }),
                            g = a.a.na(g, function (d) {
                                return a.s(d, null, {
                                    o: b
                                })
                            }),
                            h = a.a.na(g, function (d) {
                                return d.Z() ? a.s(function () {
                                    return a.a.c(d())
                                }, null, {
                                    o: b
                                }) : d.v()
                            });
                        h.hasOwnProperty("$raw") || (h.$raw = g);
                        return h
                    }
                    return {
                        $raw: {}
                    }
                }
                a.g.getComponentNameForNode = function (b) {
                    b = a.a.t(b);
                    return a.g.Qa(b) && b
                };
                a.g.mb = function (c, d, g, h) {
                    if (1 === d.nodeType) {
                        var k = a.g.getComponentNameForNode(d);
                        if (k) {
                            c = c || {};
                            if (c.component) {
                                throw Error('Cannot use the "component" binding on a custom element matching a component')
                            }
                            var f = {
                                name: k,
                                params: b(d, g)
                            };
                            c.component = h ? function () {
                                return f
                            } : f
                        }
                    }
                    return c
                };
                var d = new a.J;
                9 > a.a.L && (a.g.register = function (a) {
                    return function (b) {
                        v.createElement(b);
                        return a.apply(this, arguments)
                    }
                }(a.g.register), v.createDocumentFragment = function (b) {
                    return function () {
                        var d = b(),
                            g = a.g.Ub,
                            h;
                        for (h in g) {
                            g.hasOwnProperty(h) && d.createElement(h)
                        }
                        return d
                    }
                }(v.createDocumentFragment))
            })();
            (function () {
                var b = 0;
                a.d.component = {
                    init: function (d, c, e, g, h) {
                        function k() {
                            var a = f && f.dispose;
                            "function" === typeof a && a.call(f);
                            m = null
                        }
                        var f, m;
                        a.a.w.da(d, k);
                        a.s(function () {
                            var e = a.a.c(c()),
                                g, n;
                            "string" === typeof e ? g = e : (g = a.a.c(e.name), n = a.a.c(e.params));
                            if (!g) {
                                throw Error("No component name specified")
                            }
                            var t = m = ++b;
                            a.g.get(g, function (b) {
                                if (m === t) {
                                    k();
                                    if (!b) {
                                        throw Error("Unknown component '" + g + "'")
                                    }
                                    var c = b.template;
                                    if (!c) {
                                        throw Error("Component '" + g + "' has no template")
                                    }
                                    c = a.a.ia(c);
                                    a.f.T(d, c);
                                    var c = n,
                                        e = b.createViewModel;
                                    b = e ? e.call(b, c, {
                                        element: d
                                    }) : c;
                                    c = h.createChildContext(b);
                                    f = b;
                                    a.Ca(c, d)
                                }
                            })
                        }, null, {
                            o: d
                        });
                        return {
                            controlsDescendantBindings: !0
                        }
                    }
                };
                a.f.Q.component = !0
            })();
            var Q = {
                "class": "className",
                "for": "htmlFor"
            };
            a.d.attr = {
                update: function (b, d) {
                    var c = a.a.c(d()) || {};
                    a.a.G(c, function (c, d) {
                        d = a.a.c(d);
                        var h = !1 === d || null === d || d === p;
                        h && b.removeAttribute(c);
                        8 >= a.a.L && c in Q ? (c = Q[c], h ? b.removeAttribute(c) : b[c] = d) : h || b.setAttribute(c, d.toString());
                        "name" === c && a.a.Mb(b, h ? "" : d.toString())
                    })
                }
            };
            (function () {
                a.d.checked = {
                    after: ["value", "attr"],
                    init: function (b, d, c) {
                        function e() {
                            var e = b.checked,
                                k = q ? h() : e;
                            if (!a.Y.ma() && (!f || e)) {
                                var g = a.k.B(d);
                                m ? l !== k ? (e && (a.a.ea(g, k, !0), a.a.ea(g, l, !1)), l = k) : a.a.ea(g, k, e) : a.h.pa(g, c, "checked", k, !0)
                            }
                        }

                        function g() {
                            var c = a.a.c(d());
                            b.checked = m ? 0 <= a.a.m(c, h()) : k ? c : h() === c
                        }
                        var h = a.Ib(function () {
                                return c.has("checkedValue") ? a.a.c(c.get("checkedValue")) : c.has("value") ? a.a.c(c.get("value")) : b.value
                            }),
                            k = "checkbox" == b.type,
                            f = "radio" == b.type;
                        if (k || f) {
                            var m = k && a.a.c(d()) instanceof Array,
                                l = m ? h() : p,
                                q = f || m;
                            f && !b.name && a.d.uniqueName.init(b, function () {
                                return !0
                            });
                            a.s(e, null, {
                                o: b
                            });
                            a.a.n(b, "click", e);
                            a.s(g, null, {
                                o: b
                            })
                        }
                    }
                };
                a.h.V.checked = !0;
                a.d.checkedValue = {
                    update: function (b, d) {
                        b.value = a.a.c(d())
                    }
                }
            })();
            a.d.css = {
                update: function (b, d) {
                    var c = a.a.c(d());
                    "object" == typeof c ? a.a.G(c, function (c, d) {
                        d = a.a.c(d);
                        a.a.Ba(b, c, d)
                    }) : (c = String(c || ""), a.a.Ba(b, b.__ko__cssValue, !1), b.__ko__cssValue = c, a.a.Ba(b, c, !0))
                }
            };
            a.d.enable = {
                update: function (b, d) {
                    var c = a.a.c(d());
                    c && b.disabled ? b.removeAttribute("disabled") : c || b.disabled || (b.disabled = !0)
                }
            };
            a.d.disable = {
                update: function (b, d) {
                    a.d.enable.update(b, function () {
                        return !a.a.c(d())
                    })
                }
            };
            a.d.event = {
                init: function (b, d, c, e, g) {
                    var h = d() || {};
                    a.a.G(h, function (k) {
                        "string" == typeof k && a.a.n(b, k, function (b) {
                            var h, l = d()[k];
                            if (l) {
                                try {
                                    var q = a.a.S(arguments);
                                    e = g.$data;
                                    q.unshift(e);
                                    h = l.apply(e, q)
                                } finally {
                                    !0 !== h && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
                                }!1 === c.get(k + "Bubble") && (b.cancelBubble = !0, b.stopPropagation && b.stopPropagation())
                            }
                        })
                    })
                }
            };
            a.d.foreach = {
                Eb: function (b) {
                    return function () {
                        var d = b(),
                            c = a.a.Xa(d);
                        if (!c || "number" == typeof c.length) {
                            return {
                                foreach: d,
                                templateEngine: a.O.Oa
                            }
                        }
                        a.a.c(d);
                        return {
                            foreach: c.data,
                            as: c.as,
                            includeDestroyed: c.includeDestroyed,
                            afterAdd: c.afterAdd,
                            beforeRemove: c.beforeRemove,
                            afterRender: c.afterRender,
                            beforeMove: c.beforeMove,
                            afterMove: c.afterMove,
                            templateEngine: a.O.Oa
                        }
                    }
                }, init: function (b, d) {
                    return a.d.template.init(b, a.d.foreach.Eb(d))
                }, update: function (b, d, c, e, g) {
                    return a.d.template.update(b, a.d.foreach.Eb(d), c, e, g)
                }
            };
            a.h.ha.foreach = !1;
            a.f.Q.foreach = !0;
            a.d.hasfocus = {
                init: function (b, d, c) {
                    function e(e) {
                        b.__ko_hasfocusUpdating = !0;
                        var f = b.ownerDocument;
                        if ("activeElement" in f) {
                            var g;
                            try {
                                g = f.activeElement
                            } catch (h) {
                                g = f.body
                            }
                            e = g === b
                        }
                        f = d();
                        a.h.pa(f, c, "hasfocus", e, !0);
                        b.__ko_hasfocusLastValue = e;
                        b.__ko_hasfocusUpdating = !1
                    }
                    var g = e.bind(null, !0),
                        h = e.bind(null, !1);
                    a.a.n(b, "focus", g);
                    a.a.n(b, "focusin", g);
                    a.a.n(b, "blur", h);
                    a.a.n(b, "focusout", h)
                }, update: function (b, d) {
                    var c = !!a.a.c(d());
                    b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === c || (c ? b.focus() : b.blur(), a.k.B(a.a.oa, null, [b, c ? "focusin" : "focusout"]))
                }
            };
            a.h.V.hasfocus = !0;
            a.d.hasFocus = a.d.hasfocus;
            a.h.V.hasFocus = !0;
            a.d.html = {
                init: function () {
                    return {
                        controlsDescendantBindings: !0
                    }
                }, update: function (b, d) {
                    a.a.$a(b, d())
                }
            };
            I("if");
            I("ifnot", !1, !0);
            I("with", !0, !1, function (a, d) {
                return a.createChildContext(d)
            });
            var K = {};
            a.d.options = {
                init: function (b) {
                    if ("select" !== a.a.t(b)) {
                        throw Error("options binding applies only to SELECT elements")
                    }
                    for (; 0 < b.length;) {
                        b.remove(0)
                    }
                    return {
                        controlsDescendantBindings: !0
                    }
                }, update: function (b, d, c) {
                    function e() {
                        return a.a.ta(b.options, function (a) {
                            return a.selected
                        })
                    }

                    function g(a, b, c) {
                        var d = typeof b;
                        return "function" == d ? b(a) : "string" == d ? a[b] : c
                    }

                    function h(c, d) {
                        if (q.length) {
                            var e = 0 <= a.a.m(q, a.i.q(d[0]));
                            a.a.Nb(d[0], e);
                            n && !e && a.k.B(a.a.oa, null, [b, "change"])
                        }
                    }
                    var k = 0 != b.length && b.multiple ? b.scrollTop : null,
                        f = a.a.c(d()),
                        m = c.get("optionsIncludeDestroyed");
                    d = {};
                    var l, q;
                    q = b.multiple ? a.a.Da(e(), a.i.q) : 0 <= b.selectedIndex ? [a.i.q(b.options[b.selectedIndex])] : [];
                    f && ("undefined" == typeof f.length && (f = [f]), l = a.a.ta(f, function (b) {
                        return m || b === p || null === b || !a.a.c(b._destroy)
                    }), c.has("optionsCaption") && (f = a.a.c(c.get("optionsCaption")), null !== f && f !== p && l.unshift(K)));
                    var n = !1;
                    d.beforeRemove = function (a) {
                        b.removeChild(a)
                    };
                    f = h;
                    c.has("optionsAfterRender") && (f = function (b, d) {
                        h(0, d);
                        a.k.B(c.get("optionsAfterRender"), null, [d[0], b !== K ? b : p])
                    });
                    a.a.Za(b, l, function (d, e, f) {
                        f.length && (q = f[0].selected ? [a.i.q(f[0])] : [], n = !0);
                        e = b.ownerDocument.createElement("option");
                        d === K ? (a.a.bb(e, c.get("optionsCaption")), a.i.ca(e, p)) : (f = g(d, c.get("optionsValue"), d), a.i.ca(e, a.a.c(f)), d = g(d, c.get("optionsText"), f), a.a.bb(e, d));
                        return [e]
                    }, d, f);
                    a.k.B(function () {
                        c.get("valueAllowUnset") && c.has("value") ? a.i.ca(b, a.a.c(c.get("value")), !0) : (b.multiple ? q.length && e().length < q.length : q.length && 0 <= b.selectedIndex ? a.i.q(b.options[b.selectedIndex]) !== q[0] : q.length || 0 <= b.selectedIndex) && a.a.oa(b, "change")
                    });
                    a.a.dc(b);
                    k && 20 < Math.abs(k - b.scrollTop) && (b.scrollTop = k)
                }
            };
            a.d.options.Va = a.a.e.F();
            a.d.selectedOptions = {
                after: ["options", "foreach"],
                init: function (b, d, c) {
                    a.a.n(b, "change", function () {
                        var e = d(),
                            g = [];
                        a.a.u(b.getElementsByTagName("option"), function (b) {
                            b.selected && g.push(a.i.q(b))
                        });
                        a.h.pa(e, c, "selectedOptions", g)
                    })
                }, update: function (b, d) {
                    if ("select" != a.a.t(b)) {
                        throw Error("values binding applies only to SELECT elements")
                    }
                    var c = a.a.c(d());
                    c && "number" == typeof c.length && a.a.u(b.getElementsByTagName("option"), function (b) {
                        var d = 0 <= a.a.m(c, a.i.q(b));
                        a.a.Nb(b, d)
                    })
                }
            };
            a.h.V.selectedOptions = !0;
            a.d.style = {
                update: function (b, d) {
                    var c = a.a.c(d() || {});
                    a.a.G(c, function (c, d) {
                        d = a.a.c(d);
                        if (null === d || d === p || !1 === d) {
                            d = ""
                        }
                        b.style[c] = d
                    })
                }
            };
            a.d.submit = {
                init: function (b, d, c, e, g) {
                    if ("function" != typeof d()) {
                        throw Error("The value for a submit binding must be a function")
                    }
                    a.a.n(b, "submit", function (a) {
                        var c, e = d();
                        try {
                            c = e.call(g.$data, b)
                        } finally {
                            !0 !== c && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
                        }
                    })
                }
            };
            a.d.text = {
                init: function () {
                    return {
                        controlsDescendantBindings: !0
                    }
                }, update: function (b, d) {
                    a.a.bb(b, d())
                }
            };
            a.f.Q.text = !0;
            (function () {
                if (s && s.navigator) {
                    var b = function (a) {
                            if (a) {
                                return parseFloat(a[1])
                            }
                        },
                        d = s.opera && s.opera.version && parseInt(s.opera.version()),
                        c = s.navigator.userAgent,
                        e = b(c.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
                        g = b(c.match(/Firefox\/([^ ]*)/))
                }
                if (10 > a.a.L) {
                    var h = a.a.e.F(),
                        k = a.a.e.F(),
                        f = function (b) {
                            var c = this.activeElement;
                            (c = c && a.a.e.get(c, k)) && c(b)
                        },
                        m = function (b, c) {
                            var d = b.ownerDocument;
                            a.a.e.get(d, h) || (a.a.e.set(d, h, !0), a.a.n(d, "selectionchange", f));
                            a.a.e.set(b, k, c)
                        }
                }
                a.d.textInput = {
                    init: function (b, c, f) {
                        function k(c, d) {
                            a.a.n(b, c, d)
                        }

                        function h() {
                            var d = a.a.c(c());
                            if (null === d || d === p) {
                                d = ""
                            }
                            v !== p && d === v ? setTimeout(h, 4) : b.value !== d && (s = d, b.value = d)
                        }

                        function u() {
                            y || (v = b.value, y = setTimeout(r, 4))
                        }

                        function r() {
                            clearTimeout(y);
                            v = y = p;
                            var d = b.value;
                            s !== d && (s = d, a.h.pa(c(), f, "textInput", d))
                        }
                        var s = b.value,
                            y, v;
                        10 > a.a.L ? (k("propertychange", function (a) {
                            "value" === a.propertyName && r()
                        }), 8 == a.a.L && (k("keyup", r), k("keydown", r)), 8 <= a.a.L && (m(b, r), k("dragend", u))) : (k("input", r), 5 > e && "textarea" === a.a.t(b) ? (k("keydown", u), k("paste", u), k("cut", u)) : 11 > d ? k("keydown", u) : 4 > g && (k("DOMAutoComplete", r), k("dragdrop", r), k("drop", r)));
                        k("change", r);
                        a.s(h, null, {
                            o: b
                        })
                    }
                };
                a.h.V.textInput = !0;
                a.d.textinput = {
                    preprocess: function (a, b, c) {
                        c("textInput", a)
                    }
                }
            })();
            a.d.uniqueName = {
                init: function (b, d) {
                    if (d()) {
                        var c = "ko_unique_" + ++a.d.uniqueName.Zb;
                        a.a.Mb(b, c)
                    }
                }
            };
            a.d.uniqueName.Zb = 0;
            a.d.value = {
                after: ["options", "foreach"],
                init: function (b, d, c) {
                    if ("input" != b.tagName.toLowerCase() || "checkbox" != b.type && "radio" != b.type) {
                        var e = ["change"],
                            g = c.get("valueUpdate"),
                            h = !1,
                            k = null;
                        g && ("string" == typeof g && (g = [g]), a.a.ga(e, g), e = a.a.rb(e));
                        var f = function () {
                            k = null;
                            h = !1;
                            var e = d(),
                                f = a.i.q(b);
                            a.h.pa(e, c, "value", f)
                        };
                        !a.a.L || "input" != b.tagName.toLowerCase() || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.m(e, "propertychange") || (a.a.n(b, "propertychange", function () {
                            h = !0
                        }), a.a.n(b, "focus", function () {
                            h = !1
                        }), a.a.n(b, "blur", function () {
                            h && f()
                        }));
                        a.a.u(e, function (c) {
                            var d = f;
                            a.a.vc(c, "after") && (d = function () {
                                k = a.i.q(b);
                                setTimeout(f, 0)
                            }, c = c.substring(5));
                            a.a.n(b, c, d)
                        });
                        var m = function () {
                            var e = a.a.c(d()),
                                f = a.i.q(b);
                            if (null !== k && e === k) {
                                setTimeout(m, 0)
                            } else {
                                if (e !== f) {
                                    if ("select" === a.a.t(b)) {
                                        var g = c.get("valueAllowUnset"),
                                            f = function () {
                                                a.i.ca(b, e, g)
                                            };
                                        f();
                                        g || e === a.i.q(b) ? setTimeout(f, 0) : a.k.B(a.a.oa, null, [b, "change"])
                                    } else {
                                        a.i.ca(b, e)
                                    }
                                }
                            }
                        };
                        a.s(m, null, {
                            o: b
                        })
                    } else {
                        a.ra(b, {
                            checkedValue: d
                        })
                    }
                }, update: function () {}
            };
            a.h.V.value = !0;
            a.d.visible = {
                update: function (b, d) {
                    var c = a.a.c(d()),
                        e = "none" != b.style.display;
                    c && !e ? b.style.display = "" : !c && e && (b.style.display = "none")
                }
            };
            (function (b) {
                a.d[b] = {
                    init: function (d, c, e, g, h) {
                        return a.d.event.init.call(this, d, function () {
                            var a = {};
                            a[b] = c();
                            return a
                        }, e, g, h)
                    }
                }
            })("click");
            a.H = function () {};
            a.H.prototype.renderTemplateSource = function () {
                throw Error("Override renderTemplateSource")
            };
            a.H.prototype.createJavaScriptEvaluatorBlock = function () {
                throw Error("Override createJavaScriptEvaluatorBlock")
            };
            a.H.prototype.makeTemplateSource = function (b, d) {
                if ("string" == typeof b) {
                    d = d || v;
                    var c = d.getElementById(b);
                    if (!c) {
                        throw Error("Cannot find template with ID " + b)
                    }
                    return new a.r.l(c)
                }
                if (1 == b.nodeType || 8 == b.nodeType) {
                    return new a.r.fa(b)
                }
                throw Error("Unknown template type: " + b)
            };
            a.H.prototype.renderTemplate = function (a, d, c, e) {
                a = this.makeTemplateSource(a, e);
                return this.renderTemplateSource(a, d, c)
            };
            a.H.prototype.isTemplateRewritten = function (a, d) {
                return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, d).data("isRewritten")
            };
            a.H.prototype.rewriteTemplate = function (a, d, c) {
                a = this.makeTemplateSource(a, c);
                d = d(a.text());
                a.text(d);
                a.data("isRewritten", !0)
            };
            a.b("templateEngine", a.H);
            a.fb = function () {
                function b(b, c, d, k) {
                    b = a.h.Wa(b);
                    for (var f = a.h.ha, m = 0; m < b.length; m++) {
                        var l = b[m].key;
                        if (f.hasOwnProperty(l)) {
                            var q = f[l];
                            if ("function" === typeof q) {
                                if (l = q(b[m].value)) {
                                    throw Error(l)
                                }
                            } else {
                                if (!q) {
                                    throw Error("This template engine does not support the '" + l + "' binding within its templates")
                                }
                            }
                        }
                    }
                    d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.h.ya(b, {
                        valueAccessors: !0
                    }) + " } })()},'" + d.toLowerCase() + "')";
                    return k.createJavaScriptEvaluatorBlock(d) + c
                }
                var d = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
                    c = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                return {
                    ec: function (b, c, d) {
                        c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function (b) {
                            return a.fb.nc(b, c)
                        }, d)
                    }, nc: function (a, g) {
                        return a.replace(d, function (a, c, d, e, l) {
                            return b(l, c, d, g)
                        }).replace(c, function (a, c) {
                            return b(c, "\x3c!-- ko --\x3e", "#comment", g)
                        })
                    }, Xb: function (b, c) {
                        return a.D.Ua(function (d, k) {
                            var f = d.nextSibling;
                            f && f.nodeName.toLowerCase() === c && a.ra(f, b, k)
                        })
                    }
                }
            }();
            a.b("__tr_ambtns", a.fb.Xb);
            (function () {
                a.r = {};
                a.r.l = function (a) {
                    this.l = a
                };
                a.r.l.prototype.text = function () {
                    var b = a.a.t(this.l),
                        b = "script" === b ? "text" : "textarea" === b ? "value" : "innerHTML";
                    if (0 == arguments.length) {
                        return this.l[b]
                    }
                    var d = arguments[0];
                    "innerHTML" === b ? a.a.$a(this.l, d) : this.l[b] = d
                };
                var b = a.a.e.F() + "_";
                a.r.l.prototype.data = function (c) {
                    if (1 === arguments.length) {
                        return a.a.e.get(this.l, b + c)
                    }
                    a.a.e.set(this.l, b + c, arguments[1])
                };
                var d = a.a.e.F();
                a.r.fa = function (a) {
                    this.l = a
                };
                a.r.fa.prototype = new a.r.l;
                a.r.fa.prototype.text = function () {
                    if (0 == arguments.length) {
                        var b = a.a.e.get(this.l, d) || {};
                        b.gb === p && b.Ga && (b.gb = b.Ga.innerHTML);
                        return b.gb
                    }
                    a.a.e.set(this.l, d, {
                        gb: arguments[0]
                    })
                };
                a.r.l.prototype.nodes = function () {
                    if (0 == arguments.length) {
                        return (a.a.e.get(this.l, d) || {}).Ga
                    }
                    a.a.e.set(this.l, d, {
                        Ga: arguments[0]
                    })
                };
                a.b("templateSources", a.r);
                a.b("templateSources.domElement", a.r.l);
                a.b("templateSources.anonymousTemplate", a.r.fa)
            })();
            (function () {
                function b(b, c, d) {
                    var e;
                    for (c = a.f.nextSibling(c); b && (e = b) !== c;) {
                        b = a.f.nextSibling(e), d(e, b)
                    }
                }

                function d(c, d) {
                    if (c.length) {
                        var e = c[0],
                            g = c[c.length - 1],
                            h = e.parentNode,
                            n = a.J.instance,
                            t = n.preprocessNode;
                        if (t) {
                            b(e, g, function (a, b) {
                                var c = a.previousSibling,
                                    d = t.call(n, a);
                                d && (a === e && (e = d[0] || b), a === g && (g = d[d.length - 1] || c))
                            });
                            c.length = 0;
                            if (!e) {
                                return
                            }
                            e === g ? c.push(e) : (c.push(e, g), a.a.ka(c, h))
                        }
                        b(e, g, function (b) {
                            1 !== b.nodeType && 8 !== b.nodeType || a.pb(d, b)
                        });
                        b(e, g, function (b) {
                            1 !== b.nodeType && 8 !== b.nodeType || a.D.Sb(b, [d])
                        });
                        a.a.ka(c, h)
                    }
                }

                function c(a) {
                    return a.nodeType ? a : 0 < a.length ? a[0] : null
                }

                function e(b, e, h, l, q) {
                    q = q || {};
                    var n = b && c(b),
                        n = n && n.ownerDocument,
                        t = q.templateEngine || g;
                    a.fb.ec(h, t, n);
                    h = t.renderTemplate(h, l, q, n);
                    if ("number" != typeof h.length || 0 < h.length && "number" != typeof h[0].nodeType) {
                        throw Error("Template engine must return an array of DOM nodes")
                    }
                    n = !1;
                    switch (e) {
                    case "replaceChildren":
                        a.f.T(b, h);
                        n = !0;
                        break;
                    case "replaceNode":
                        a.a.Lb(b, h);
                        n = !0;
                        break;
                    case "ignoreTargetNode":
                        break;
                    default:
                        throw Error("Unknown renderMode: " + e)
                    }
                    n && (d(h, l), q.afterRender && a.k.B(q.afterRender, null, [h, l.$data]));
                    return h
                }
                var g;
                a.ab = function (b) {
                    if (b != p && !(b instanceof a.H)) {
                        throw Error("templateEngine must inherit from ko.templateEngine")
                    }
                    g = b
                };
                a.Ya = function (b, d, h, l, q) {
                    h = h || {};
                    if ((h.templateEngine || g) == p) {
                        throw Error("Set a template engine before calling renderTemplate")
                    }
                    q = q || "replaceChildren";
                    if (l) {
                        var n = c(l);
                        return a.j(function () {
                            var g = d && d instanceof a.N ? d : new a.N(a.a.c(d)),
                                p = a.C(b) ? b() : "function" === typeof b ? b(g.$data, g) : b,
                                g = e(l, q, p, g, h);
                            "replaceNode" == q && (l = g, n = c(l))
                        }, null, {
                            Ia: function () {
                                return !n || !a.a.Ja(n)
                            }, o: n && "replaceNode" == q ? n.parentNode : n
                        })
                    }
                    return a.D.Ua(function (c) {
                        a.Ya(b, d, h, c, "replaceNode")
                    })
                };
                a.uc = function (b, c, g, h, q) {
                    function n(a, b) {
                        d(b, s);
                        g.afterRender && g.afterRender(b, a)
                    }

                    function t(c, d) {
                        s = q.createChildContext(c, g.as, function (a) {
                            a.$index = d
                        });
                        var f = a.C(b) ? b() : "function" === typeof b ? b(c, s) : b;
                        return e(null, "ignoreTargetNode", f, s, g)
                    }
                    var s;
                    return a.j(function () {
                        var b = a.a.c(c) || [];
                        "undefined" == typeof b.length && (b = [b]);
                        b = a.a.ta(b, function (b) {
                            return g.includeDestroyed || b === p || null === b || !a.a.c(b._destroy)
                        });
                        a.k.B(a.a.Za, null, [h, b, t, g, n])
                    }, null, {
                        o: h
                    })
                };
                var h = a.a.e.F();
                a.d.template = {
                    init: function (b, c) {
                        var d = a.a.c(c());
                        "string" == typeof d || d.name ? a.f.ja(b) : (d = a.f.childNodes(b), d = a.a.oc(d), (new a.r.fa(b)).nodes(d));
                        return {
                            controlsDescendantBindings: !0
                        }
                    }, update: function (b, c, d, e, g) {
                        var n = c(),
                            t;
                        c = a.a.c(n);
                        d = !0;
                        e = null;
                        "string" == typeof c ? c = {} : (n = c.name, "if" in c && (d = a.a.c(c["if"])), d && "ifnot" in c && (d = !a.a.c(c.ifnot)), t = a.a.c(c.data));
                        "foreach" in c ? e = a.uc(n || b, d && c.foreach || [], c, b, g) : d ? (g = "data" in c ? g.createChildContext(t, c.as) : g, e = a.Ya(n || b, g, c, b)) : a.f.ja(b);
                        g = e;
                        (t = a.a.e.get(b, h)) && "function" == typeof t.K && t.K();
                        a.a.e.set(b, h, g && g.Z() ? g : p)
                    }
                };
                a.h.ha.template = function (b) {
                    b = a.h.Wa(b);
                    return 1 == b.length && b[0].unknown || a.h.lc(b, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                };
                a.f.Q.template = !0
            })();
            a.b("setTemplateEngine", a.ab);
            a.b("renderTemplate", a.Ya);
            a.a.wb = function (a, d, c) {
                if (a.length && d.length) {
                    var e, g, h, k, f;
                    for (e = g = 0;
                        (!c || e < c) && (k = a[g]); ++g) {
                        for (h = 0; f = d[h]; ++h) {
                            if (k.value === f.value) {
                                k.moved = f.index;
                                f.moved = k.index;
                                d.splice(h, 1);
                                e = h = 0;
                                break
                            }
                        }
                        e += h
                    }
                }
            };
            a.a.Fa = function () {
                function b(b, c, e, g, h) {
                    var k = Math.min,
                        f = Math.max,
                        m = [],
                        l, q = b.length,
                        n, p = c.length,
                        s = p - q || 1,
                        u = q + p + 1,
                        r, v, w;
                    for (l = 0; l <= q; l++) {
                        for (v = r, m.push(r = []), w = k(p, l + s), n = f(0, l - 1); n <= w; n++) {
                            r[n] = n ? l ? b[l - 1] === c[n - 1] ? v[n - 1] : k(v[n] || u, r[n - 1] || u) + 1 : n + 1 : l + 1
                        }
                    }
                    k = [];
                    f = [];
                    s = [];
                    l = q;
                    for (n = p; l || n;) {
                        p = m[l][n] - 1, n && p === m[l][n - 1] ? f.push(k[k.length] = {
                            status: e,
                            value: c[--n],
                            index: n
                        }) : l && p === m[l - 1][n] ? s.push(k[k.length] = {
                            status: g,
                            value: b[--l],
                            index: l
                        }) : (--n, --l, h.sparse || k.push({
                            status: "retained",
                            value: c[n]
                        }))
                    }
                    a.a.wb(f, s, 10 * q);
                    return k.reverse()
                }
                return function (a, c, e) {
                    e = "boolean" === typeof e ? {
                        dontLimitMoves: e
                    } : e || {};
                    a = a || [];
                    c = c || [];
                    return a.length <= c.length ? b(a, c, "added", "deleted", e) : b(c, a, "deleted", "added", e)
                }
            }();
            a.b("utils.compareArrays", a.a.Fa);
            (function () {
                function b(b, d, g, h, k) {
                    var f = [],
                        m = a.j(function () {
                            var l = d(g, k, a.a.ka(f, b)) || [];
                            0 < f.length && (a.a.Lb(f, l), h && a.k.B(h, null, [g, l, k]));
                            f.length = 0;
                            a.a.ga(f, l)
                        }, null, {
                            o: b,
                            Ia: function () {
                                return !a.a.ob(f)
                            }
                        });
                    return {
                        $: f,
                        j: m.Z() ? m : p
                    }
                }
                var d = a.a.e.F();
                a.a.Za = function (c, e, g, h, k) {
                    function f(b, d) {
                        x = q[d];
                        r !== d && (A[b] = x);
                        x.Na(r++);
                        a.a.ka(x.$, c);
                        s.push(x);
                        w.push(x)
                    }

                    function m(b, c) {
                        if (b) {
                            for (var d = 0, e = c.length; d < e; d++) {
                                c[d] && a.a.u(c[d].$, function (a) {
                                    b(a, d, c[d].sa)
                                })
                            }
                        }
                    }
                    e = e || [];
                    h = h || {};
                    var l = a.a.e.get(c, d) === p,
                        q = a.a.e.get(c, d) || [],
                        n = a.a.Da(q, function (a) {
                            return a.sa
                        }),
                        t = a.a.Fa(n, e, h.dontLimitMoves),
                        s = [],
                        u = 0,
                        r = 0,
                        v = [],
                        w = [];
                    e = [];
                    for (var A = [], n = [], x, B = 0, D, F; D = t[B]; B++) {
                        switch (F = D.moved, D.status) {
                        case "deleted":
                            F === p && (x = q[u], x.j && x.j.K(), v.push.apply(v, a.a.ka(x.$, c)), h.beforeRemove && (e[B] = x, w.push(x)));
                            u++;
                            break;
                        case "retained":
                            f(B, u++);
                            break;
                        case "added":
                            F !== p ? f(B, F) : (x = {
                                sa: D.value,
                                Na: a.p(r++)
                            }, s.push(x), w.push(x), l || (n[B] = x))
                        }
                    }
                    m(h.beforeMove, A);
                    a.a.u(v, h.beforeRemove ? a.R : a.removeNode);
                    for (var B = 0, l = a.f.firstChild(c), G; x = w[B]; B++) {
                        x.$ || a.a.extend(x, b(c, g, x.sa, k, x.Na));
                        for (u = 0; t = x.$[u]; l = t.nextSibling, G = t, u++) {
                            t !== l && a.f.Bb(c, t, G)
                        }!x.ic && k && (k(x.sa, x.$, x.Na), x.ic = !0)
                    }
                    m(h.beforeRemove, e);
                    m(h.afterMove, A);
                    m(h.afterAdd, n);
                    a.a.e.set(c, d, s)
                }
            })();
            a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.Za);
            a.O = function () {
                this.allowTemplateRewriting = !1
            };
            a.O.prototype = new a.H;
            a.O.prototype.renderTemplateSource = function (b) {
                var d = (9 > a.a.L ? 0 : b.nodes) ? b.nodes() : null;
                if (d) {
                    return a.a.S(d.cloneNode(!0).childNodes)
                }
                b = b.text();
                return a.a.ba(b)
            };
            a.O.Oa = new a.O;
            a.ab(a.O.Oa);
            a.b("nativeTemplateEngine", a.O);
            (function () {
                a.Sa = function () {
                    var a = this.kc = function () {
                        if (!w || !w.tmpl) {
                            return 0
                        }
                        try {
                            if (0 <= w.tmpl.tag.tmpl.open.toString().indexOf("__")) {
                                return 2
                            }
                        } catch (a) {}
                        return 1
                    }();
                    this.renderTemplateSource = function (b, e, g) {
                        g = g || {};
                        if (2 > a) {
                            throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.")
                        }
                        var h = b.data("precompiled");
                        h || (h = b.text() || "", h = w.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), b.data("precompiled", h));
                        b = [e.$data];
                        e = w.extend({
                            koBindingContext: e
                        }, g.templateOptions);
                        e = w.tmpl(h, b, e);
                        e.appendTo(v.createElement("div"));
                        w.fragments = {};
                        return e
                    };
                    this.createJavaScriptEvaluatorBlock = function (a) {
                        return "{{ko_code ((function() { return " + a + " })()) }}"
                    };
                    this.addTemplate = function (a, b) {
                        v.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>")
                    };
                    0 < a && (w.tmpl.tag.ko_code = {
                        open: "__.push($1 || '');"
                    }, w.tmpl.tag.ko_with = {
                        open: "with($1) {",
                        close: "} "
                    })
                };
                a.Sa.prototype = new a.H;
                var b = new a.Sa;
                0 < b.kc && a.ab(b);
                a.b("jqueryTmplTemplateEngine", a.Sa)
            })()
        })
    })()
})();
(function (a) {
    "function" === typeof require && "object" === typeof exports && "object" === typeof module ? a(require("knockout"), exports) : "function" === typeof define && define.amd ? define(["knockout", "exports"], a) : a(ko, ko.mapping = {})
})(function (V, U) {
    function o(z, y) {
        var B, x;
        for (x in y) {
            if (y.hasOwnProperty(x) && y[x]) {
                if (B = U.getType(z[x]), x && z[x] && "array" !== B && "string" !== B) {
                    o(z[x], y[x])
                } else {
                    if ("array" === U.getType(z[x]) && "array" === U.getType(y[x])) {
                        B = z;
                        for (var p = x, h = z[x], f = y[x], C = {}, j = h.length - 1; 0 <= j; --j) {
                            C[h[j]] = h[j]
                        }
                        for (j = f.length - 1; 0 <= j; --j) {
                            C[f[j]] = f[j]
                        }
                        h = [];
                        f = void 0;
                        for (f in C) {
                            h.push(C[f])
                        }
                        B[p] = h
                    } else {
                        z[x] = y[x]
                    }
                }
            }
        }
    }

    function v(e, h) {
        var f = {};
        o(f, e);
        o(f, h);
        return f
    }

    function n(h, y) {
        for (var j = v({}, h), x = l.length - 1; 0 <= x; x--) {
            var p = l[x];
            j[p] && (j[""] instanceof Object || (j[""] = {}), j[""][p] = j[p], delete j[p])
        }
        y && (j.ignore = M(y.ignore, j.ignore), j.include = M(y.include, j.include), j.copy = M(y.copy, j.copy), j.observe = M(y.observe, j.observe));
        j.ignore = M(j.ignore, J.ignore);
        j.include = M(j.include, J.include);
        j.copy = M(j.copy, J.copy);
        j.observe = M(j.observe, J.observe);
        j.mappedProperties = j.mappedProperties || {};
        j.copiedProperties = j.copiedProperties || {};
        return j
    }

    function M(e, f) {
        "array" !== U.getType(e) && (e = "undefined" === U.getType(e) ? [] : [e]);
        "array" !== U.getType(f) && (f = "undefined" === U.getType(f) ? [] : [f]);
        return V.utils.arrayGetDistinctValues(e.concat(f))
    }

    function u(ab, aa, ac, Z, T, S, Q) {
        var H = "array" === U.getType(V.utils.unwrapObservable(aa));
        S = S || "";
        if (U.isMapped(ab)) {
            var Y = V.utils.unwrapObservable(ab)[D];
            ac = v(Y, ac)
        }
        var W = Q || T,
            X = function () {
                return ac[Z] && ac[Z].create instanceof Function
            },
            C = function (h) {
                var x = t,
                    j = V.dependentObservable;
                V.dependentObservable = function (z, y, af) {
                    af = af || {};
                    z && "object" == typeof z && (af = z);
                    var ad = af.deferEvaluation,
                        ae = !1;
                    af.deferEvaluation = !0;
                    z = new s(z, y, af);
                    if (!ad) {
                        var B = z,
                            ad = V.dependentObservable;
                        V.dependentObservable = s;
                        z = V.isWriteableObservable(B);
                        V.dependentObservable = ad;
                        ad = s({
                            read: function () {
                                ae || (V.utils.arrayRemoveItem(x, B), ae = !0);
                                return B.apply(B, arguments)
                            }, write: z && function (ag) {
                                return B(ag)
                            }, deferEvaluation: !0
                        });
                        ad.__DO = B;
                        z = ad;
                        x.push(z)
                    }
                    return z
                };
                V.dependentObservable.fn = s.fn;
                V.computed = V.dependentObservable;
                h = V.utils.unwrapObservable(T) instanceof Array ? ac[Z].create({
                    data: h || aa,
                    parent: W,
                    skip: k
                }) : ac[Z].create({
                    data: h || aa,
                    parent: W
                });
                V.dependentObservable = j;
                V.computed = V.dependentObservable;
                return h
            },
            G = function () {
                return ac[Z] && ac[Z].update instanceof Function
            },
            F = function (h, x) {
                var j = {
                    data: x || aa,
                    parent: W,
                    target: V.utils.unwrapObservable(h)
                };
                V.isWriteableObservable(h) && (j.observable = h);
                return ac[Z].update(j)
            };
        if (Q = r.get(aa)) {
            return Q
        }
        Z = Z || "";
        if (H) {
            var H = [],
                K = !1,
                R = function (h) {
                    return h
                };
            ac[Z] && ac[Z].key && (R = ac[Z].key, K = !0);
            V.isObservable(ab) || (ab = V.observableArray([]), ab.mappedRemove = function (h) {
                var j = "function" == typeof h ? h : function (x) {
                    return x === R(h)
                };
                return ab.remove(function (x) {
                    return j(R(x))
                })
            }, ab.mappedRemoveAll = function (h) {
                var j = w(h, R);
                return ab.remove(function (x) {
                    return -1 != V.utils.arrayIndexOf(j, R(x))
                })
            }, ab.mappedDestroy = function (h) {
                var j = "function" == typeof h ? h : function (x) {
                    return x === R(h)
                };
                return ab.destroy(function (x) {
                    return j(R(x))
                })
            }, ab.mappedDestroyAll = function (h) {
                var j = w(h, R);
                return ab.destroy(function (x) {
                    return -1 != V.utils.arrayIndexOf(j, R(x))
                })
            }, ab.mappedIndexOf = function (h) {
                var j = w(ab(), R);
                h = R(h);
                return V.utils.arrayIndexOf(j, h)
            }, ab.mappedGet = function (h) {
                return ab()[ab.mappedIndexOf(h)]
            }, ab.mappedCreate = function (h) {
                if (-1 !== ab.mappedIndexOf(h)) {
                    throw Error("There already is an object with the key that you specified.")
                }
                var j = X() ? C(h) : h;
                G() && (h = F(j, h), V.isWriteableObservable(j) ? j(h) : j = h);
                ab.push(j);
                return j
            });
            Q = w(V.utils.unwrapObservable(ab), R).sort();
            Y = w(aa, R);
            K && Y.sort();
            K = V.utils.compareArrays(Q, Y);
            Q = {};
            var p, P = V.utils.unwrapObservable(aa),
                f = {},
                e = !0,
                Y = 0;
            for (p = P.length; Y < p; Y++) {
                var L = R(P[Y]);
                if (void 0 === L || L instanceof Object) {
                    e = !1;
                    break
                }
                f[L] = P[Y]
            }
            var P = [],
                O = 0,
                Y = 0;
            for (p = K.length; Y < p; Y++) {
                var L = K[Y],
                    N, E = S + "[" + Y + "]";
                switch (L.status) {
                case "added":
                    var I = e ? f[L.value] : m(V.utils.unwrapObservable(aa), L.value, R);
                    N = u(void 0, I, ac, Z, ab, E, T);
                    X() || (N = V.utils.unwrapObservable(N));
                    E = i(V.utils.unwrapObservable(aa), I, Q);
                    N === k ? O++ : P[E - O] = N;
                    Q[E] = !0;
                    break;
                case "retained":
                    I = e ? f[L.value] : m(V.utils.unwrapObservable(aa), L.value, R);
                    N = m(ab, L.value, R);
                    u(N, I, ac, Z, ab, E, T);
                    E = i(V.utils.unwrapObservable(aa), I, Q);
                    P[E] = N;
                    Q[E] = !0;
                    break;
                case "deleted":
                    N = m(ab, L.value, R)
                }
                H.push({
                    event: L.status,
                    item: N
                })
            }
            ab(P);
            ac[Z] && ac[Z].arrayChanged && V.utils.arrayForEach(H, function (h) {
                ac[Z].arrayChanged(h.event, h.item)
            })
        } else {
            if (g(aa)) {
                ab = V.utils.unwrapObservable(ab);
                if (!ab) {
                    if (X()) {
                        return K = C(), G() && (K = F(K)), K
                    }
                    if (G()) {
                        return F(K)
                    }
                    ab = {}
                }
                G() && (ab = F(ab));
                r.save(aa, ab);
                if (G()) {
                    return ab
                }
                d(aa, function (y) {
                    var x = S.length ? S + "." + y : y;
                    if (-1 == V.utils.arrayIndexOf(ac.ignore, x)) {
                        if (-1 != V.utils.arrayIndexOf(ac.copy, x)) {
                            ab[y] = aa[y]
                        } else {
                            if ("object" != typeof aa[y] && "array" != typeof aa[y] && 0 < ac.observe.length && -1 == V.utils.arrayIndexOf(ac.observe, x)) {
                                ab[y] = aa[y], ac.copiedProperties[x] = !0
                            } else {
                                var j = r.get(aa[y]),
                                    h = u(ab[y], aa[y], ac, y, ab, x, ab),
                                    j = j || h;
                                if (0 < ac.observe.length && -1 == V.utils.arrayIndexOf(ac.observe, x)) {
                                    ab[y] = j(), ac.copiedProperties[x] = !0
                                } else {
                                    if (V.isWriteableObservable(ab[y])) {
                                        if (j = V.utils.unwrapObservable(j), ab[y]() !== j) {
                                            ab[y](j)
                                        }
                                    } else {
                                        j = void 0 === ab[y] ? j : V.utils.unwrapObservable(j), ab[y] = j
                                    }
                                    ac.mappedProperties[x] = !0
                                }
                            }
                        }
                    }
                })
            } else {
                switch (U.getType(aa)) {
                case "function":
                    G() ? V.isWriteableObservable(aa) ? (aa(F(aa)), ab = aa) : ab = F(aa) : ab = aa;
                    break;
                default:
                    if (V.isWriteableObservable(ab)) {
                        return N = G() ? F(ab) : V.utils.unwrapObservable(aa), ab(N), N
                    }
                    X() || G();
                    ab = X() ? C() : V.observable(V.utils.unwrapObservable(aa));
                    G() && ab(F(ab))
                }
            }
        }
        return ab
    }

    function i(f, x, h) {
        for (var p = 0, j = f.length; p < j; p++) {
            if (!0 !== h[p] && f[p] === x) {
                return p
            }
        }
        return null
    }

    function c(e, h) {
        var f;
        h && (f = h(e));
        "undefined" === U.getType(f) && (f = e);
        return V.utils.unwrapObservable(f)
    }

    function m(e, y, j) {
        e = V.utils.unwrapObservable(e);
        for (var x = 0, p = e.length; x < p; x++) {
            var h = e[x];
            if (c(h, j) === y) {
                return h
            }
        }
        throw Error("When calling ko.update*, the key '" + y + "' was not found!")
    }

    function w(e, f) {
        return V.utils.arrayMap(V.utils.unwrapObservable(e), function (h) {
            return f ? c(h, f) : h
        })
    }

    function d(e, h) {
        if ("array" === U.getType(e)) {
            for (var f = 0; f < e.length; f++) {
                h(f)
            }
        } else {
            for (f in e) {
                h(f)
            }
        }
    }

    function g(e) {
        var f = U.getType(e);
        return ("object" === f || "array" === f) && null !== e
    }

    function a() {
        var e = [],
            f = [];
        this.save = function (h, p) {
            var j = V.utils.arrayIndexOf(e, h);
            0 <= j ? f[j] = p : (e.push(h), f.push(p))
        };
        this.get = function (h) {
            h = V.utils.arrayIndexOf(e, h);
            return 0 <= h ? f[h] : void 0
        }
    }

    function b() {
        var e = {},
            f = function (h) {
                var p;
                try {
                    p = h
                } catch (j) {
                    p = "$$$"
                }
                h = e[p];
                void 0 === h && (h = new a, e[p] = h);
                return h
            };
        this.save = function (j, h) {
            f(j).save(j, h)
        };
        this.get = function (h) {
            return f(h).get(h)
        }
    }
    var D = "__ko_mapping__",
        s = V.dependentObservable,
        A = 0,
        t, r, l = ["create", "update", "key", "arrayChanged"],
        k = {},
        q = {
            include: ["_destroy"],
            ignore: [],
            copy: [],
            observe: []
        },
        J = q;
    U.isMapped = function (e) {
        return (e = V.utils.unwrapObservable(e)) && e[D]
    };
    U.fromJS = function (h) {
        if (0 == arguments.length) {
            throw Error("When calling ko.fromJS, pass the object you want to convert.")
        }
        try {
            A++ || (t = [], r = new b);
            var z, j;
            2 == arguments.length && (arguments[1][D] ? j = arguments[1] : z = arguments[1]);
            3 == arguments.length && (z = arguments[1], j = arguments[2]);
            j && (z = v(z, j[D]));
            z = n(z);
            var y = u(j, h, z);
            j && (y = j);
            if (!--A) {
                for (; t.length;) {
                    var x = t.pop();
                    x && (x(), x.__DO.throttleEvaluation = x.throttleEvaluation)
                }
            }
            y[D] = v(y[D], z);
            return y
        } catch (p) {
            throw A = 0, p
        }
    };
    U.fromJSON = function (e) {
        var f = V.utils.parseJson(e);
        arguments[0] = f;
        return U.fromJS.apply(this, arguments)
    };
    U.updateFromJS = function () {
        throw Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!")
    };
    U.updateFromJSON = function () {
        throw Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!")
    };
    U.toJS = function (e, f) {
        J || U.resetDefaultOptions();
        if (0 == arguments.length) {
            throw Error("When calling ko.mapping.toJS, pass the object you want to convert.")
        }
        if ("array" !== U.getType(J.ignore)) {
            throw Error("ko.mapping.defaultOptions().ignore should be an array.")
        }
        if ("array" !== U.getType(J.include)) {
            throw Error("ko.mapping.defaultOptions().include should be an array.")
        }
        if ("array" !== U.getType(J.copy)) {
            throw Error("ko.mapping.defaultOptions().copy should be an array.")
        }
        f = n(f, e[D]);
        return U.visitModel(e, function (h) {
            return V.utils.unwrapObservable(h)
        }, f)
    };
    U.toJSON = function (e, h) {
        var f = U.toJS(e, h);
        return V.utils.stringifyJson(f)
    };
    U.defaultOptions = function () {
        if (0 < arguments.length) {
            J = arguments[0]
        } else {
            return J
        }
    };
    U.resetDefaultOptions = function () {
        J = {
            include: q.include.slice(0),
            ignore: q.ignore.slice(0),
            copy: q.copy.slice(0)
        }
    };
    U.getType = function (e) {
        if (e && "object" === typeof e) {
            if (e.constructor === Date) {
                return "date"
            }
            if (e.constructor === Array) {
                return "array"
            }
        }
        return typeof e
    };
    U.visitModel = function (e, x, h) {
        h = h || {};
        h.visitedObjects = h.visitedObjects || new b;
        var p, j = V.utils.unwrapObservable(e);
        if (g(j)) {
            h = n(h, j[D]), x(e, h.parentName), p = "array" === U.getType(j) ? [] : {}
        } else {
            return x(e, h.parentName)
        }
        h.visitedObjects.save(e, p);
        var f = h.parentName;
        d(j, function (y) {
            if (!(h.ignore && -1 != V.utils.arrayIndexOf(h.ignore, y))) {
                var z = j[y],
                    C = h,
                    B = f || "";
                "array" === U.getType(j) ? f && (B += "[" + y + "]") : (f && (B += "."), B += y);
                C.parentName = B;
                if (!(-1 === V.utils.arrayIndexOf(h.copy, y) && -1 === V.utils.arrayIndexOf(h.include, y) && j[D] && j[D].mappedProperties && !j[D].mappedProperties[y] && j[D].copiedProperties && !j[D].copiedProperties[y] && "array" !== U.getType(j))) {
                    switch (U.getType(V.utils.unwrapObservable(z))) {
                    case "object":
                    case "array":
                    case "undefined":
                        C = h.visitedObjects.get(z);
                        p[y] = "undefined" !== U.getType(C) ? C : U.visitModel(z, x, h);
                        break;
                    default:
                        p[y] = x(z, h.parentName)
                    }
                }
            }
        });
        return p
    }
});
(function () {
    var a = {
        isOwner: false,
        isPersonalZone: false,
        pageUrl: "/portal",
        apiUrl: "/api",
        videoPalyServer: "",
        groupAvatarUrl: "/avatar/group?groupId=",
        userAvatarUrl: "/avatar/user?userId=",
        user: {},
        group: {},
        relation: {},
        layout: {}
    };
    var f = {
        init: function (j) {
            W.config = $.extend(a, j)
        }, alert: function () {
            alert(123)
        }, checkFriendlyUrl: function (j) {
            if (j == null) {
                return false
            }
            var k = /\/([0-9a-zA-Z]{4,})/;
            if (k.test(j)) {
                return true
            }
            return false
        }, isEmpty: function (j) {
            if (typeof j == "undefined" || j == null || "" == $.trim(j)) {
                return true
            }
            return false
        }, stratWith: function (l, k) {
            if (l != null && k != null && l.length >= k.length) {
                var j = l.substring(0, k.length);
                if (j == k) {
                    return true
                }
            }
            return false
        }, endWith: function (l, k) {
            if (l != null && k != null && l.length >= k.length) {
                var m = l.length - k.length;
                var j = l.substring(m);
                if (j == k) {
                    return true
                }
            }
            return false
        }, unhtml: function (k, j) {
            return k ? k.replace(j || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/g, function (m, l) {
                if (l) {
                    return m
                } else {
                    return {
                        "<": "&lt;",
                        "&": "&amp;",
                        '"': "&quot;",
                        ">": "&gt;",
                        "'": "&#39;"
                    }[m]
                }
            }) : ""
        }, html: function (j) {
            return j ? j.replace(/&((g|l|quo)t|amp|#39|nbsp);/g, function (k) {
                return {
                    "&lt;": "<",
                    "&amp;": "&",
                    "&quot;": '"',
                    "&gt;": ">",
                    "&#39;": "'",
                    "&nbsp;": " "
                }[k]
            }) : ""
        }, calStrLengthDB: function (m) {
            if (this.isEmpty(m)) {
                return 0
            }
            var j = m.length;
            var l = 0;
            for (var k = 0; k < j; k++) {
                if (m.charCodeAt(k) < 27 || m.charCodeAt(k) > 126) {
                    l += 2
                } else {
                    l++
                }
            }
            return Math.ceil(l / 2)
        }, checkLengthDB: function (m, l, k) {
            if (!this.isEmpty(m)) {
                var j = this.calStrLengthDB(m);
                if (j >= l && j <= k) {
                    return true
                }
            } else {
                if (l <= 0) {
                    return true
                }
            }
            return false
        }, getChkValue: function (m, l) {
            var j = document.getElementsByName(m);
            var n = "";
            for (var k = 0; k < j.length; k++) {
                if (j[k].checked) {
                    if (l == "radio") {
                        return j[k].value
                    } else {
                        n = n + j[k].value + ","
                    }
                }
            }
            return n
        }, substr: function (n, j) {
            if (!n || !j) {
                return ""
            }
            var k = 0;
            var m = 0;
            var l = "";
            for (m = 0; m < n.length; m++) {
                if (n.charCodeAt(m) > 255) {
                    k += 2
                } else {
                    k++
                } if (k > j) {
                    return l
                }
                l += n.charAt(m)
            }
            return n
        }, isEmail: function (k) {
            if (k == null || k == "") {
                return false
            }
            var j = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
            if (j.test(k)) {
                return true
            }
            return false
        }
    };
    var e = {
        isIE: function () {
            var j = "Microsoft Internet Explorer";
            var k = false;
            if (navigator.appName == j) {
                k = true
            }
            return k
        }, supportHTML5: function () {
            if (typeof (Worker) !== "undefined") {
                return true
            } else {
                return false
            }
        }, supportFlash: function () {
            try {
                var j;
                if (this.isIE()) {
                    j = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                } else {
                    j = navigator.plugins["Shockwave Flash"]
                } if (j == undefined) {
                    return false
                } else {
                    return true
                }
            } catch (k) {
                return false
            }
        }
    };
    var h = {
        cache: false,
        init: function () {
            if ($("#srAjaxLoading").size() < 1) {
                $("body").append('<div id="srAjaxLoading"></div>');
                $("#srAjaxLoading").css({
                    position: "fixed",
                    _position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "124px",
                    height: "124px",
                    overflow: "hidden",
                    background: "url(/plugins/lw/images/loading.gif) no-repeat",
                    "z-index": "7",
                    margin: "-62px 0 0 -62px",
                    display: "none"
                })
            }
            $("#srAjaxLoading").show()
        }, error: function (m, l, k) {
            var j = m.status;
            if (j === 404) {
                alert("404：请求的地址不存在！")
            } else {
                if (j === 200) {
                    alert(l)
                } else {
                    alert("请求出错！")
                }
            }
        }, success: function (j) {
            alert(j)
        }, complete: function (j) {
            $("#srAjaxLoading").fadeOut()
        }
    };
    var g = {
        common: function (j) {
            var l = $.extend(h, j);
            if (l.data == null) {
                l.data = {}
            }
            if (typeof l.data == "string") {
                l.data = l.data + "&contextGroupId=" + W.config.group.groupId
            } else {
                l.data.contextGroupId = W.config.group.groupId
            }
            l.init();
            try {
                return $.ajax(l)
            } catch (k) {
                l.complete();
                alert(k)
            }
        }, json: function (j) {
            j.dataType = "json";
            return this.common(j)
        }, html: function (j) {
            j.dataType = "html";
            return this.common(j)
        }, post: function (j) {
            j.dataType = "json";
            j.type = "POST";
            return this.common(j)
        }
    };
    var i = {
        roleWeight: {
            guest: 0,
            member: 100,
            admin: 700,
            supperadmin: 800,
            owner: 900,
            teacher: 500
        },
        isPersonalZone: function () {
            if (W.config.group != null && W.config.group.archetype != null && W.config.group.archetype.archetypeId === "archetype-zone") {
                return true
            }
            return false
        }, isOwner: function () {
            if (W.config.relation != null) {
                if (W.config.group.userId == W.config.user.userId) {
                    return true
                }
            }
            return false
        }, isAdmin: function () {
            if (W.config.relation != null) {
                if (W.config.relation.title.titleWeight >= this.roleWeight.admin) {
                    return true
                }
            }
            return false
        }, isTeacher: function () {
            if (W.config.relation != null) {
                if (W.config.relation.title.titleWeight >= this.roleWeight.teacher) {
                    return true
                }
            }
            return false
        }, isMember: function () {
            if (W.config.relation != null) {
                if (W.config.relation.title.titleWeight > 0) {
                    return true
                }
            }
            return false
        }
    };
    var d = {
        id: function (j) {
            return document.getElementById(j)
        }
    };
    var b = {
        toDate: function (j) {
            if (j != null && $.trim(j) != "") {
                j = j.replace(/-/g, "/");
                var k = j.indexOf(".");
                if (k != -1) {
                    j = j.substring(0, k)
                }
                return new Date(j)
            }
            return null
        }, toString: function (l, j) {
            if (l == null || l == undefined) {
                return ""
            }
            var n = {
                "M+": l.getMonth() + 1,
                "d+": l.getDate(),
                "h+": l.getHours(),
                "m+": l.getMinutes(),
                "s+": l.getSeconds(),
                "q+": Math.floor((l.getMonth() + 3) / 3),
                S: l.getMilliseconds()
            };
            if (/(y+)/.test(j)) {
                j = j.replace(RegExp.$1, (l.getFullYear() + "").substr(4 - RegExp.$1.length))
            }
            for (var m in n) {
                if (new RegExp("(" + m + ")").test(j)) {
                    j = j.replace(RegExp.$1, (RegExp.$1.length == 1) ? (n[m]) : (("00" + n[m]).substr(("" + n[m]).length)))
                }
            }
            return j
        }, changeFormat: function (k, j) {
            return this.toString(this.toDate(k), j)
        }
    };
    var c = {
        view: function (l) {
            var k = this.getResource(l);
            if (k == null) {
                W.dialog.alert("该资源不存在或已被删除！", "提示")
            } else {
                var j = this.getViewContent(k);
                W.dialog.common({
                    id: "fileViewDialog",
                    size: "modal-lg",
                    title: null,
                    content: j,
                    ok: null,
                    cancel: null
                })
            }
        }, getResource: function (k) {
            var j = null;
            W.ajax.json({
                url: W.config.apiUrl + "/resource/get",
                data: {
                    resourceId: k
                },
                async: false,
                success: function (l) {
                    if (l.ret == 0 && l.items != null) {
                        j = l.items[0]
                    }
                }
            });
            return j
        }, getViewContent: function (k) {
            var j = this.getViewType(k);
            var m = "";
            if (j == "yes") {
                var l = W.dialog.getMaxHeight();
                m = '<div style="height: ' + l + 'px;overflow-y: scroll;">';
                if (k.resourceType == 20) {
                    m += '<img class="img-responsive center-block" src="/api/resource/view?resourceId=' + k.entityId + '">'
                } else {
                    if (k.resourceType == 40) {
                        m += '<div><video class="center-block" style="max-width: 100%;width: auto;height: ' + (l - 20) + 'px;max-height: 100%;" src="' + W.config.videoPalyServer + k.viewPath + '" poster="' + W.config.videoPalyServer + k.viewPath + '" type="video/mp4" controls="controls" preload="none"></video></div>'
                    } else {
                        if (k.resourceType == 50) {
                            m += '<embed height="100" width="100" src="/api/resource/view?resourceId=' + k.entityId + '" />'
                        } else {
                            m += '<iframe src="/api/resource/view?resourceId=' + k.entityId + '" width="100%" height="' + (l - 20) + '" frameborder="no" border="0" marginwidth="0" marginheight="0"></iframe>'
                        }
                    }
                }
                m += "</div>"
            } else {
                if (j == "loading") {
                    m = "<div>";
                    m += '正在转换中，暂时无法预览，<a href="/api/resource/download?resourceId=' + k.entityId + '">点击此处</a>下载。';
                    m += "</div>"
                } else {
                    if (j == "no") {
                        m = "<div>";
                        m += '该类型资源暂时不支持预览，<a href="/api/resource/download?resourceId=' + k.entityId + '">点击此处</a>下载。';
                        m += "</div>"
                    }
                }
            }
            return m
        }, getViewType: function (j) {
            if (j.resourceType == 10 || j.resourceType == 40 || j.resourceType == 50) {
                if (j.entityFlag == null || j.entityFlag == 1 || j.entityFlag == 3 || j.viewPath == null || j.viewPath == "") {
                    return "loading"
                } else {
                    return "yes"
                }
            } else {
                if (j.resourceType == 20) {
                    return "yes"
                } else {
                    return "no"
                }
            }
        }
    };
    window.W = {
        config: a,
        util: f,
        ajax: g,
        browser: e,
        dom: d,
        permission: i,
        date: b,
        resource: c
    }
}());
$(function () {
    var a = {
        createStr: function (b) {
            if (b == undefined || b == null) {
                b = ""
            }
            return ko.observable(b)
        }, createInt: function (b) {
            if (b == undefined || b == null) {
                b = 0
            }
            return ko.observable(b)
        }, createArray: function (b) {
            if (b == null) {
                return ko.observableArray()
            }
            return ko.observableArray(b)
        }, createObject: function (b) {
            if (b == null) {
                b = {}
            }
            return ko.mapping.fromJS(b)
        }, create: function (b) {
            if (b == null) {
                return ko.observable()
            }
            return ko.observable(b)
        }, get: function (b) {
            return ko.mapping.toJS(b)
        }, clearArray: function (d) {
            if (d == null || d().length == 0) {
                return
            }
            for (var c = 0, b = d().length; c < b; c++) {
                d.pop()
            }
        }, depend: function (b, c) {
            alert(1);
            return ko.dependentObservable(c, b)
        }, bind: function (b, c) {
            var d = W.dom.id(c);
            d && ko.applyBindings(b, d)
        }, unbind: function (b) {
            var c = W.dom.id(b);
            c && ko.cleanNode(c)
        }
    };
    W.mvvm = a
});
$(function () {
    function a(c) {
        this.config = {
            id: "",
            title: "",
            okText: "确定",
            cancelText: "取消",
            content: null,
            footer: null,
            src: null,
            dialogId: "",
            width: 300,
            height: 300,
            size: "",
            ok: function () {
                return true
            }, cancel: function () {
                return true
            }, after: function () {}, beforeClose: function () {}
        };
        this.config = $.extend(this.config, c);
        this.config.dialogId = "eModal" + this.config.id;
        this.show = function () {
            this.init();
            $("#" + this.config.dialogId).modal({
                keyboard: false
            });
            var d = this;
            $("#" + this.config.dialogId).unbind("hide.bs.modal").on("hide.bs.modal", function (f) {
                d.config.beforeClose()
            });
            this.config.after()
        };
        this.repeat = function () {
            $("#" + this.config.dialogId).modal("show")
        };
        this.close = function () {
            $("#" + this.config.dialogId).modal("hide")
        };
        this.init = function () {
            var d = $("#" + this.config.dialogId);
            if (d != null && d.length > 0) {
                this.repeatModal()
            } else {
                this.createModal()
            }
            this.bindEvent()
        };
        this.bindEvent = function () {
            var d = this;
            $("#" + this.config.dialogId + " .e-modal-ok").unbind("click").click(function () {
                var e = d.config.ok();
                if (e == null || e) {
                    d.close()
                }
            });
            $("#" + this.config.dialogId + " .e-modal-cancel").unbind("click").click(function () {
                var e = d.config.cancel();
                if (e == null || e) {
                    d.close()
                }
            })
        };
        this.repeatModal = function () {
            $("#" + this.config.dialogId + " .modal-dialog").attr("class", "modal-dialog " + this.config.size);
            $("#" + this.config.dialogId + " .modal-header").html(this.config.title);
            $("#" + this.config.dialogId + " .modal-body").html(this.config.content);
            var d = "";
            if (this.config.footer != null) {
                d += this.config.footer
            }
            if (this.config.ok != null) {
                d += '<a class="btn btn-sm btn-primary e-modal-ok" href="javascript: void(0);">' + this.config.okText + "</a>"
            }
            if (this.config.cancel != null) {
                d += '<a class="btn btn-sm btn-default e-modal-cancel" href="javascript: void(0);">' + this.config.cancelText + "</a>"
            }
            $("#" + this.config.dialogId + " .modal-footer").html(d)
        };
        this.createModal = function () {
            var d = '<div id="' + this.config.dialogId + '" class="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';
            d += '<div class="modal-dialog ' + this.config.size + '">';
            d += '<div class="modal-content">';
            if (this.config.title != null) {
                d += '<div class="modal-header">';
                d += "<strong>" + this.config.title + "</strong>";
                d += "</div>"
            }
            d += '<div class="modal-body">';
            d += this.config.content;
            d += "</div>";
            if (this.config.footer != null || this.config.ok != null || this.config.cancel != null) {
                d += '<div class="modal-footer">';
                if (this.config.footer != null) {
                    d += this.config.footer
                }
                if (this.config.ok != null) {
                    d += '<a class="btn btn-sm btn-primary e-modal-ok" href="javascript: void(0);">' + this.config.okText + "</a>"
                }
                if (this.config.cancel != null) {
                    d += '<a class="btn btn-sm btn-default e-modal-cancel" href="javascript: void(0);">' + this.config.cancelText + "</a>"
                }
                d += "</div>"
            }
            d += "</div>";
            d += "</div>";
            d += "</div>";
            $("body").append(d)
        }
    }
    var b = {
        common: function (c) {
            var e = new a(c);
            e.show();
            return e
        }, iframe: function (c) {
            c.content = '<iframe width="' + c.width + '" height="' + c.height + '" src="' + c.src + '" frameborder="0" align="center"></iframe>';
            var e = new a(c);
            e.show();
            return e
        }, alert: function (e, g) {
            var c = {
                id: "lwDialogAlert",
                title: g,
                content: e,
                cancel: null
            };
            var f = new a(c);
            f.show();
            return f
        }, confirm: function (e, h, f) {
            var c = {
                id: "lwDialogConfirm",
                title: h,
                content: e,
                ok: f
            };
            var g = new a(c);
            g.show();
            return g
        }, getMaxHeight: function () {
            var c = $(window).height() - 200;
            if (c > 100) {
                return c
            }
            return 200
        }
    };
    W.dialog = b
});