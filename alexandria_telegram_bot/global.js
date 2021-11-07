! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "2.2.4",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : h.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function() {
                return a.apply(b || this, d.concat(e.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
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
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
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
            }) d.pseudos[b] = la(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                    return a === b
                }, h, !0), l = ra(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                } return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                } k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                } return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return h.call(b, a) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    } return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [], c || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready()
    }
    n.ready.promise = function(b) {
        return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b)
    }, n.ready.promise();
    var K = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) K(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        L = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };

    function M() {
        this.expando = n.expando + M.uid++
    }
    M.uid = 1, M.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }), a[this.expando]
        },
        cache: function(a) {
            if (!L(a)) return {};
            var b = a[this.expando];
            return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[b] = c;
            else
                for (d in b) e[d] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a);
                else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;
                    while (c--) delete f[d[c]]
                }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !n.isEmptyObject(b)
        }
    };
    var N = new M,
        O = new M,
        P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;

    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
                } catch (e) {}
                O.set(a, b, c)
            } else c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return O.hasData(a) || N.hasData(a)
        },
        data: function(a, b, c) {
            return O.access(a, b, c)
        },
        removeData: function(a, b) {
            O.remove(a, b)
        },
        _data: function(a, b, c) {
            return N.access(a, b, c)
        },
        _removeData: function(a, b) {
            N.remove(a, b)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                O.set(this, a)
            }) : K(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;
                    if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;
                    if (c = R(f, d, void 0), void 0 !== c) return c
                } else d = n.camelCase(a), this.each(function() {
                    var c = O.get(this, d);
                    O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                O.remove(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    N.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function W(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var X = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        Z = /^$|\/(?:java|ecma)script/i,
        $ = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;

    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
    }
    var ba = /<|&#?\w+;/;

    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
            if (f = a[o], f || 0 === f)
                if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
                else if (ba.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            n.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", o = 0;
        while (f = m[o++])
            if (d && n.inArray(f, d) > -1) e && e.push(f);
            else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
            k = 0;
            while (f = g[k++]) Z.test(f.type || "") && c.push(f)
        }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var da = /^key/,
        ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        fa = /^([^.]*)(?:\.(.+)|)/;

    function ga() {
        return !0
    }

    function ha() {
        return !1
    }

    function ia() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ja(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(G) || [""], j = b.length;
                while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else
                        for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (N.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    } return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ia() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ia() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return ja(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ja(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        la = /<script|<style|<link/i,
        ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
        na = /^true\/(.*)/,
        oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i))
        }
    }

    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d)
        });
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
            for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
            if (i)
                for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
        }
        return a
    }

    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(ka, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);
                else sa(a, h);
            return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (L(c)) {
                    if (b = c[N.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                        c[N.expando] = void 0
                    }
                    c[O.expando] && (c[O.expando] = void 0)
                }
        }
    }), n.fn.extend({
        domManip: ua,
        detach: function(a) {
            return va(this, a, !0)
        },
        remove: function(a) {
            return va(this, a)
        },
        text: function(a) {
            return K(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return K(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return ua(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var wa, xa = {
        HTML: "block",
        BODY: "block"
    };

    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function za(a) {
        var b = d,
            c = xa[a];
        return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c
    }
    var Aa = /^margin/,
        Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ca = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        },
        Da = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Ea = d.documentElement;
    ! function() {
        var b, c, e, f, g = d.createElement("div"),
            h = d.createElement("div");
        if (h.style) {
            h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);

            function i() {
                h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);
                var d = a.getComputedStyle(h);
                b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g)
            }
            n.extend(l, {
                pixelPosition: function() {
                    return i(), b
                },
                boxSizingReliable: function() {
                    return null == c && i(), c
                },
                pixelMarginRight: function() {
                    return null == c && i(), e
                },
                reliableMarginLeft: function() {
                    return null == c && i(), f
                },
                reliableMarginRight: function() {
                    var b, c = h.appendChild(d.createElement("div"));
                    return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b
                }
            })
        }
    }();

    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g
    }

    function Ga(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Ha = /^(none|table(?!-c[ea]).+)/,
        Ia = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ja = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ka = ["Webkit", "O", "Moz", "ms"],
        La = d.createElement("div").style;

    function Ma(a) {
        if (a in La) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ka.length;
        while (c--)
            if (a = Ka[c] + b, a in La) return a
    }

    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Oa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }

    function Pa(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ca(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
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
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
                    return Pa(a, b, d)
                }) : Pa(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e, f = d && Ca(a),
                    g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g)
            }
        }
    }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
        return b ? Da(a, {
            display: "inline-block"
        }, Fa, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Aa.test(a) || (n.cssHooks[a + b].set = Na)
    }), n.fn.extend({
        css: function(a, b) {
            return K(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Qa(this, !0)
        },
        hide: function() {
            return Qa(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a, b, c, d, e)
    }
    n.Tween = Ra, Ra.prototype = {
        constructor: Ra,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ra.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this
        }
    }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = Ra.prototype.init, n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/,
        Va = /queueHooks$/;

    function Wa() {
        return a.setTimeout(function() {
            Sa = void 0
        }), Sa = n.now()
    }

    function Xa(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && V(a),
            q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Ua.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
                n(a).hide()
            }), l.done(function() {
                var b;
                N.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function _a(a, b, c) {
        var d, e, f = 0,
            g = _a.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Sa || Wa(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++)
            if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(_a, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return W(c.elem, a, T.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b)
            },
            prefilters: [Za],
            prefilter: function(a, b) {
                b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(V).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = _a(this, n.extend({}, a), f);
                        (e || N.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = N.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = N.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: Xa("show"),
            slideUp: Xa("hide"),
            slideToggle: Xa("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = 0,
                c = n.timers;
            for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || n.fx.stop(), Sa = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(Ta), Ta = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
        }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return K(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }
    }), ab = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) {
            var e, f;
            return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e
        }
    });
    var cb = /^(?:input|select|textarea|button)$/i,
        db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return K(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var eb = /[\t\r\n\f]/g;

    function fb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, fb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, fb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, fb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var gb = /\r/g,
        hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(hb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        } return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b)
        }
    }), n.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), l.focusin = "onfocusin" in a, l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b);
                e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b))
            }
        }
    });
    var jb = a.location,
        kb = n.now(),
        lb = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, n.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var mb = /#.*$/,
        nb = /([?&])_=[^&]*/,
        ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        qb = /^(?:GET|HEAD)$/,
        rb = /^\/\//,
        sb = {},
        tb = {},
        ub = "*/".concat("*"),
        vb = d.createElement("a");
    vb.href = jb.href;

    function wb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function xb(a, b, c, d) {
        var e = {},
            f = a === tb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function yb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function zb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                } if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Ab(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    } if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
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
            url: jb.href,
            type: "GET",
            isLocal: pb.test(jb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
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
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a)
        },
        ajaxPrefilter: wb(sb),
        ajaxTransport: wb(tb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c),
                o = m.context || m,
                p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
                q = n.Deferred(),
                r = n.Callbacks("once memory"),
                s = m.statusCode || {},
                t = {},
                u = {},
                v = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === v) {
                            if (!h) {
                                h = {};
                                while (b = ob.exec(g)) h[b[1].toLowerCase()] = b[2]
                            }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === v ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return v || (a = u[c] = u[c] || a, t[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return v || (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > v)
                                for (b in a) s[b] = [s[b], a[b]];
                            else x.always(a[x.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || w;
                        return e && e.abort(b), z(0, b), this
                    }
                };
            if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host
                } catch (y) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;
            k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
            w = "abort";
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[l](m[l]);
            if (e = xb(tb, m, c, x)) {
                if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    v = 1, e.send(t, z)
                } catch (y) {
                    if (!(2 > v)) throw y;
                    z(-1, y)
                }
            } else z(-1, "No Transport");

            function z(b, c, d, h) {
                var j, l, t, u, w, y = c;
                2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return !n.expr.filters.visible(a)
    }, n.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    };
    var Bb = /%20/g,
        Cb = /\[\]$/,
        Db = /\r?\n/g,
        Eb = /^(?:submit|button|image|reset|file)$/i,
        Fb = /^(?:input|select|textarea|keygen)/i;

    function Gb(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Gb(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Gb(c, a[c], b, e);
        return d.join("&").replace(Bb, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Db, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Db, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Hb = {
            0: 200,
            1223: 204
        },
        Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function(b) {
        var c, d;
        return l.cors || Ib && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = n("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Jb = [],
        Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Jb.pop() || n.expando + "_" + kb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var Lb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function Mb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ea
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function(d) {
            return K(this, function(a, d, e) {
                var f = Mb(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
            return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return K(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function() {
            return this.length
        }
    }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Nb = a.jQuery,
        Ob = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n
    }, b || (a.jQuery = a.$ = n), n
});;
! function(t, e) {
    "use strict";

    function r(r, a, i, u, l) {
        function f() {
            L = t.devicePixelRatio > 1, i = c(i), a.delay >= 0 && setTimeout(function() {
                s(!0)
            }, a.delay), (a.delay < 0 || a.combined) && (u.e = v(a.throttle, function(t) {
                "resize" === t.type && (w = B = -1), s(t.all)
            }), u.a = function(t) {
                t = c(t), i.push.apply(i, t)
            }, u.g = function() {
                return i = n(i).filter(function() {
                    return !n(this).data(a.loadedName)
                })
            }, u.f = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var r = i.filter(function() {
                        return this === t[e]
                    });
                    r.length && s(!1, r)
                }
            }, s(), n(a.appendScroll).on("scroll." + l + " resize." + l, u.e))
        }

        function c(t) {
            var i = a.defaultImage,
                o = a.placeholder,
                u = a.imageBase,
                l = a.srcsetAttribute,
                f = a.loaderAttribute,
                c = a._f || {};
            t = n(t).filter(function() {
                var t = n(this),
                    r = m(this);
                return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(l) || t.attr(f) || c[r] !== e)
            }).data("plugin_" + a.name, r);
            for (var s = 0, d = t.length; s < d; s++) {
                var A = n(t[s]),
                    g = m(t[s]),
                    h = A.attr(a.imageBaseAttribute) || u;
                g === N && h && A.attr(l) && A.attr(l, b(A.attr(l), h)), c[g] === e || A.attr(f) || A.attr(f, c[g]), g === N && i && !A.attr(E) ? A.attr(E, i) : g === N || !o || A.css(O) && "none" !== A.css(O) || A.css(O, "url('" + o + "')")
            }
            return t
        }

        function s(t, e) {
            if (!i.length) return void(a.autoDestroy && r.destroy());
            for (var o = e || i, u = !1, l = a.imageBase || "", f = a.srcsetAttribute, c = a.handledName, s = 0; s < o.length; s++)
                if (t || e || A(o[s])) {
                    var g = n(o[s]),
                        h = m(o[s]),
                        b = g.attr(a.attribute),
                        v = g.attr(a.imageBaseAttribute) || l,
                        p = g.attr(a.loaderAttribute);
                    g.data(c) || a.visibleOnly && !g.is(":visible") || !((b || g.attr(f)) && (h === N && (v + b !== g.attr(E) || g.attr(f) !== g.attr(F)) || h !== N && v + b !== g.css(O)) || p) || (u = !0, g.data(c, !0), d(g, h, v, p))
                } u && (i = n(i).filter(function() {
                return !n(this).data(c)
            }))
        }

        function d(t, e, r, i) {
            ++z;
            var o = function() {
                y("onError", t), p(), o = n.noop
            };
            y("beforeLoad", t);
            var u = a.attribute,
                l = a.srcsetAttribute,
                f = a.sizesAttribute,
                c = a.retinaAttribute,
                s = a.removeAttribute,
                d = a.loadedName,
                A = t.attr(c);
            if (i) {
                var g = function() {
                    s && t.removeAttr(a.loaderAttribute), t.data(d, !0), y(T, t), setTimeout(p, 1), g = n.noop
                };
                t.off(I).one(I, o).one(D, g), y(i, t, function(e) {
                    e ? (t.off(D), g()) : (t.off(I), o())
                }) || t.trigger(I)
            } else {
                var h = n(new Image);
                h.one(I, o).one(D, function() {
                    t.hide(), e === N ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E)) : t.css(O, "url('" + h.attr(E) + "')"), t[a.effect](a.effectTime), s && (t.removeAttr(u + " " + l + " " + c + " " + a.imageBaseAttribute), f !== C && t.removeAttr(f)), t.data(d, !0), y(T, t), h.remove(), p()
                });
                var m = (L && A ? A : t.attr(u)) || "";
                h.attr(C, t.attr(f)).attr(F, t.attr(l)).attr(E, m ? r + m : null), h.complete && h.trigger(D)
            }
        }

        function A(t) {
            var e = t.getBoundingClientRect(),
                r = a.scrollDirection,
                n = a.threshold,
                i = h() + n > e.top && -n < e.bottom,
                o = g() + n > e.left && -n < e.right;
            return "vertical" === r ? i : "horizontal" === r ? o : i && o
        }

        function g() {
            return w >= 0 ? w : w = n(t).width()
        }

        function h() {
            return B >= 0 ? B : B = n(t).height()
        }

        function m(t) {
            return t.tagName.toLowerCase()
        }

        function b(t, e) {
            if (e) {
                var r = t.split(",");
                t = "";
                for (var a = 0, n = r.length; a < n; a++) t += e + r[a].trim() + (a !== n - 1 ? "," : "")
            }
            return t
        }

        function v(t, e) {
            var n, i = 0;
            return function(o, u) {
                function l() {
                    i = +new Date, e.call(r, o)
                }
                var f = +new Date - i;
                n && clearTimeout(n), f > t || !a.enableThrottle || u ? l() : n = setTimeout(l, t - f)
            }
        }

        function p() {
            --z, i.length || z || y("onFinishedAll")
        }

        function y(t, e, n) {
            return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0)
        }
        var z = 0,
            w = -1,
            B = -1,
            L = !1,
            T = "afterLoad",
            D = "load",
            I = "error",
            N = "img",
            E = "src",
            F = "srcset",
            C = "sizes",
            O = "background-image";
        "event" === a.bind || o ? f() : n(t).on(D + "." + l, f)
    }

    function a(a, o) {
        var u = this,
            l = n.extend({}, u.config, o),
            f = {},
            c = l.name + "-" + ++i;
        return u.config = function(t, r) {
            return r === e ? l[t] : (l[t] = r, u)
        }, u.addItems = function(t) {
            return f.a && f.a("string" === n.type(t) ? n(t) : t), u
        }, u.getItems = function() {
            return f.g ? f.g() : {}
        }, u.update = function(t) {
            return f.e && f.e({}, !t), u
        }, u.force = function(t) {
            return f.f && f.f("string" === n.type(t) ? n(t) : t), u
        }, u.loadAll = function() {
            return f.e && f.e({
                all: !0
            }, !0), u
        }, u.destroy = function() {
            return n(l.appendScroll).off("." + c, f.e), n(t).off("." + c), f = {}, e
        }, r(u, l, a, f, c), l.chainable ? a : u
    }
    var n = t.jQuery || t.Zepto,
        i = 0,
        o = !1;
    n.fn.Lazy = n.fn.lazy = function(t) {
        return new a(this, t)
    }, n.Lazy = n.lazy = function(t, r, i) {
        if (n.isFunction(r) && (i = r, r = []), n.isFunction(i)) {
            t = n.isArray(t) ? t : [t], r = n.isArray(r) ? r : [r];
            for (var o = a.prototype.config, u = o._f || (o._f = {}), l = 0, f = t.length; l < f; l++)(o[t[l]] === e || n.isFunction(o[t[l]])) && (o[t[l]] = i);
            for (var c = 0, s = r.length; c < s; c++) u[r[c]] = t[0]
        }
    }, a.prototype.config = {
        name: "lazy",
        chainable: !0,
        autoDestroy: !0,
        bind: "load",
        threshold: 500,
        visibleOnly: !1,
        appendScroll: t,
        scrollDirection: "both",
        imageBase: null,
        defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        placeholder: null,
        delay: -1,
        combined: !1,
        attribute: "data-src",
        srcsetAttribute: "data-srcset",
        sizesAttribute: "data-sizes",
        retinaAttribute: "data-retina",
        loaderAttribute: "data-loader",
        imageBaseAttribute: "data-imagebase",
        removeAttribute: !0,
        handledName: "handled",
        loadedName: "loaded",
        effect: "show",
        effectTime: 0,
        enableThrottle: !0,
        throttle: 250,
        beforeLoad: e,
        afterLoad: e,
        onError: e,
        onFinishedAll: e
    }, n(t).on("load", function() {
        o = !0
    })
}(window);;
$.fn.serializeObject = function() {
    "use strict";
    var a = {},
        b = function(b, c) {
            var d = a[c.name];
            "undefined" != typeof d && d !== null ? $.isArray(d) ? d.push(c.value) : a[c.name] = [d, c.value] : a[c.name] = c.value
        };
    return $.each(this.serializeArray(), b), a
};;
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function(t) {
    function s(s) {
        var e = !1;
        return t('[data-notify="container"]').each(function(i, n) {
            var a = t(n),
                o = a.find('[data-notify="title"]').text().trim(),
                r = a.find('[data-notify="message"]').html().trim(),
                l = o === t("<div>" + s.settings.content.title + "</div>").html().trim(),
                d = r === t("<div>" + s.settings.content.message + "</div>").html().trim(),
                g = a.hasClass("alert-" + s.settings.type);
            return l && d && g && (e = !0), !e
        }), e
    }

    function e(e, n, a) {
        var o = {
            content: {
                message: "object" == typeof n ? n.message : n,
                title: n.title ? n.title : "",
                icon: n.icon ? n.icon : "",
                url: n.url ? n.url : "#",
                target: n.target ? n.target : "-"
            }
        };
        a = t.extend(!0, {}, o, a), this.settings = t.extend(!0, {}, i, a), this._defaults = i, "-" === this.settings.content.target && (this.settings.content.target = this.settings.url_target), this.animations = {
            start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart",
            end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend"
        }, "number" == typeof this.settings.offset && (this.settings.offset = {
            x: this.settings.offset,
            y: this.settings.offset
        }), (this.settings.allow_duplicates || !this.settings.allow_duplicates && !s(this)) && this.init()
    }
    var i = {
        element: "body",
        position: null,
        type: "info",
        allow_dismiss: !0,
        allow_duplicates: !0,
        newest_on_top: !1,
        showProgressbar: !1,
        placement: {
            from: "top",
            align: "right"
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5e3,
        timer: 1e3,
        url_target: "_blank",
        mouse_over: null,
        animate: {
            enter: "animated fadeInDown",
            exit: "animated fadeOutUp"
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: "class",
        template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
    };
    String.format = function() {
        for (var t = arguments[0], s = 1; s < arguments.length; s++) t = t.replace(RegExp("\\{" + (s - 1) + "\\}", "gm"), arguments[s]);
        return t
    }, t.extend(e.prototype, {
        init: function() {
            var t = this;
            this.buildNotify(), this.settings.content.icon && this.setIcon(), "#" != this.settings.content.url && this.styleURL(), this.styleDismiss(), this.placement(), this.bind(), this.notify = {
                $ele: this.$ele,
                update: function(s, e) {
                    var i = {};
                    "string" == typeof s ? i[s] = e : i = s;
                    for (var n in i) switch (n) {
                        case "type":
                            this.$ele.removeClass("alert-" + t.settings.type), this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + t.settings.type), t.settings.type = i[n], this.$ele.addClass("alert-" + i[n]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-" + i[n]);
                            break;
                        case "icon":
                            var a = this.$ele.find('[data-notify="icon"]');
                            "class" === t.settings.icon_type.toLowerCase() ? a.removeClass(t.settings.content.icon).addClass(i[n]) : (a.is("img") || a.find("img"), a.attr("src", i[n]));
                            break;
                        case "progress":
                            var o = t.settings.delay - t.settings.delay * (i[n] / 100);
                            this.$ele.data("notify-delay", o), this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i[n]).css("width", i[n] + "%");
                            break;
                        case "url":
                            this.$ele.find('[data-notify="url"]').attr("href", i[n]);
                            break;
                        case "target":
                            this.$ele.find('[data-notify="url"]').attr("target", i[n]);
                            break;
                        default:
                            this.$ele.find('[data-notify="' + n + '"]').html(i[n])
                    }
                    var r = this.$ele.outerHeight() + parseInt(t.settings.spacing) + parseInt(t.settings.offset.y);
                    t.reposition(r)
                },
                close: function() {
                    t.close()
                }
            }
        },
        buildNotify: function() {
            var s = this.settings.content;
            this.$ele = t(String.format(this.settings.template, this.settings.type, s.title, s.message, s.url, s.target)), this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align), this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"), (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) && this.$ele.find('[data-notify="progressbar"]').remove()
        },
        setIcon: function() {
            "class" === this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />')
        },
        styleDismiss: function() {
            this.$ele.find('[data-notify="dismiss"]').css({
                position: "absolute",
                right: "10px",
                top: "5px",
                zIndex: this.settings.z_index + 2
            })
        },
        styleURL: function() {
            this.$ele.find('[data-notify="url"]').css({
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
                height: "100%",
                left: 0,
                position: "absolute",
                top: 0,
                width: "100%",
                zIndex: this.settings.z_index + 1
            })
        },
        placement: function() {
            var s = this,
                e = this.settings.offset.y,
                i = {
                    display: "inline-block",
                    margin: "0px auto",
                    position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute",
                    transition: "all .5s ease-in-out",
                    zIndex: this.settings.z_index
                },
                n = !1,
                a = this.settings;
            switch (t('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function() {
                    e = Math.max(e, parseInt(t(this).css(a.placement.from)) + parseInt(t(this).outerHeight()) + parseInt(a.spacing))
                }), this.settings.newest_on_top === !0 && (e = this.settings.offset.y), i[this.settings.placement.from] = e + "px", this.settings.placement.align) {
                case "left":
                case "right":
                    i[this.settings.placement.align] = this.settings.offset.x + "px";
                    break;
                case "center":
                    i.left = 0, i.right = 0
            }
            this.$ele.css(i).addClass(this.settings.animate.enter), t.each(Array("webkit-", "moz-", "o-", "ms-", ""), function(t, e) {
                s.$ele[0].style[e + "AnimationIterationCount"] = 1
            }), t(this.settings.element).append(this.$ele), this.settings.newest_on_top === !0 && (e = parseInt(e) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), this.reposition(e)), t.isFunction(s.settings.onShow) && s.settings.onShow.call(this.$ele), this.$ele.one(this.animations.start, function() {
                n = !0
            }).one(this.animations.end, function() {
                s.$ele.removeClass(s.settings.animate.enter), t.isFunction(s.settings.onShown) && s.settings.onShown.call(this)
            }), setTimeout(function() {
                n || t.isFunction(s.settings.onShown) && s.settings.onShown.call(this)
            }, 600)
        },
        bind: function() {
            var s = this;
            if (this.$ele.find('[data-notify="dismiss"]').on("click", function() {
                    s.close()
                }), this.$ele.mouseover(function() {
                    t(this).data("data-hover", "true")
                }).mouseout(function() {
                    t(this).data("data-hover", "false")
                }), this.$ele.data("data-hover", "false"), this.settings.delay > 0) {
                s.$ele.data("notify-delay", s.settings.delay);
                var e = setInterval(function() {
                    var t = parseInt(s.$ele.data("notify-delay")) - s.settings.timer;
                    if ("false" === s.$ele.data("data-hover") && "pause" === s.settings.mouse_over || "pause" != s.settings.mouse_over) {
                        var i = (s.settings.delay - t) / s.settings.delay * 100;
                        s.$ele.data("notify-delay", t), s.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i).css("width", i + "%")
                    }
                    t <= -s.settings.timer && (clearInterval(e), s.close())
                }, s.settings.timer)
            }
        },
        close: function() {
            var s = this,
                e = parseInt(this.$ele.css(this.settings.placement.from)),
                i = !1;
            this.$ele.attr("data-closing", "true").addClass(this.settings.animate.exit), s.reposition(e), t.isFunction(s.settings.onClose) && s.settings.onClose.call(this.$ele), this.$ele.one(this.animations.start, function() {
                i = !0
            }).one(this.animations.end, function() {
                t(this).remove(), t.isFunction(s.settings.onClosed) && s.settings.onClosed.call(this)
            }), setTimeout(function() {
                i || (s.$ele.remove(), s.settings.onClosed && s.settings.onClosed(s.$ele))
            }, 600)
        },
        reposition: function(s) {
            var e = this,
                i = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])',
                n = this.$ele.nextAll(i);
            this.settings.newest_on_top === !0 && (n = this.$ele.prevAll(i)), n.each(function() {
                t(this).css(e.settings.placement.from, s), s = parseInt(s) + parseInt(e.settings.spacing) + t(this).outerHeight()
            })
        }
    }), t.notify = function(t, s) {
        var i = new e(this, t, s);
        return i.notify
    }, t.notifyDefaults = function(s) {
        return i = t.extend(!0, {}, i, s)
    }, t.notifyClose = function(s) {
        "warning" === s && (s = "danger"), "undefined" == typeof s || "all" === s ? t("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : "success" === s || "info" === s || "warning" === s || "danger" === s ? t(".alert-" + s + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : s ? t(s + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : t('[data-notify-position="' + s + '"]').find('[data-notify="dismiss"]').trigger("click")
    }, t.notifyCloseExcept = function(s) {
        "warning" === s && (s = "danger"), "success" === s || "info" === s || "warning" === s || "danger" === s ? t("[data-notify]").not(".alert-" + s).find('[data-notify="dismiss"]').trigger("click") : t("[data-notify]").not(s).find('[data-notify="dismiss"]').trigger("click")
    }
});;
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.7", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target).closest(".btn");
        b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, c.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    };
    var e = function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
                e = b(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.7", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }, g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
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
    }, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = window.SVGElement && c instanceof window.SVGElement,
            g = d ? {
                top: 0,
                left: 0
            } : f ? null : b.offset(),
            h = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            i = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, h, i, g)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.7", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return e < c && "top";
        if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom"
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);;;
(function($) {
    $.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                this.addEventListener('DOMMouseScroll', $.event.special.mousewheel.handler, false);
            this.onmousewheel = $.event.special.mousewheel.handler;
        },
        teardown: function() {
            if (this.removeEventListener)
                this.removeEventListener('DOMMouseScroll', $.event.special.mousewheel.handler, false);
            this.onmousewheel = null;
        },
        handler: function(event) {
            event = $.event.fix(event || window.event);
            event.type = "mousewheel";
            event.delta = 0;
            if (event.wheelDelta < 0 || event.detail > 0)
                event.delta = -1;
            else if (event.wheelDelta > 0 || event.detail < 0)
                event.delta = 1;
            $.event.handle.apply(this, [event]);
            return;
        }
    };
    $.fn.paginator = function(s) {
        function enableSelection(el) {
            el.onselectstart = function() {
                return true;
            };
            el.unselectable = "on";
            el.css('-moz-user-select', 'none');
        };

        function disableSelection(el) {
            document.onselectstart = function() {
                return false;
            };
            el.unselectable = "on";
            el.css('-moz-user-select', 'none');
            html.scrollThumb.focus();
        };

        function getLink(page) {
            return options.baseUrl[0] + options.buildCounter(page) + options.baseUrl[1];
        }

        function setScrollThumbWidth() {
            minWidth = html.scrollThumb.width();
            html.scrollThumb.width((options.pagesSpan / options.pagesTotal * 100) + "%");
            if (html.scrollThumb.width() < minWidth) html.scrollThumb.width(minWidth + 'px');
        };

        function moveScrollThumb() {
            html.scrollThumb.css("left", html.scrollThumb.xPos + "px");
        }

        function setPageCurrentPointWidth() {
            minWidth = html.pageCurrentMark.width();
            html.pageCurrentMark.css("width", 100 / options.pagesTotal + '%');
            if (html.pageCurrentMark.width() < minWidth) html.pageCurrentMark.css("width", minWidth + 'px');
        };

        function movePageCurrentPoint() {
            pos = options.pageCurrent / options.pagesTotal * html.table.workWidth;
            pos = options.returnOrder ? html.table.workWidth - pos : pos - html.pageCurrentMark.width();
            pos = pos > html.table.workWidth - html.pageCurrentMark.width() ? html.table.workWidth - html.pageCurrentMark.width() : pos;
            pos = pos < 0 ? 0 : pos;
            html.pageCurrentMark.css('left', pos + 'px');
        };

        function draw() {
            html.scrollThumb.xPos = html.scrollThumb.xPos > html.table.maxWidth ? html.table.maxWidth : html.scrollThumb.xPos;
            html.scrollThumb.xPos = html.scrollThumb.xPos < 0 ? 0 : html.scrollThumb.xPos;
            xPos = options.returnOrder ? html.table.maxWidth - html.scrollThumb.xPos : html.scrollThumb.xPos;
            percentFromLeft = xPos / html.table.workWidth;
            cellFirstValue = Math.ceil(percentFromLeft * (options.pagesTotal));
            cellFirstValue = cellFirstValue < 1 ? 1 : cellFirstValue;
            moveScrollThumb();
            for (i = 0; i < html.tdsPages.length; i++) {
                cellCurrentValue = cellFirstValue + i;
                data = cellCurrentValue == options.pageCurrent ? '<strong>' + cellCurrentValue + '</strong>' : '<a href="' + getLink(cellCurrentValue) + '">' + cellCurrentValue + '</a>';
                index = options.returnOrder ? options.pagesSpan - i - 1 : i;
                html.tdsPages.eq(index).html(data);
                if ($.isFunction(options.clickHandler)) {
                    $('a', html.tdsPages[index]).bind('click', function() {
                        return executeCallBack($(this).text());
                    });
                };
            };
        };

        function executeCallBack(nextPage) {
            nextPage = parseInt(nextPage);
            lastPage = options.pageCurrent;
            options.pageCurrent = nextPage;
            $links = $(html.holder).find('a[rel!=""]');
            for (i = 0; i < $links.length; i++) {
                pageNumber = parseInt($links.eq(i).attr('rel'));
                if (pageNumber == 1 || pageNumber == options.pagesTotal) continue;
                pageNumber = pageNumber - lastPage + nextPage;
                pageNumber = pageNumber < 1 ? 1 : pageNumber;
                pageNumber = pageNumber > options.pagesTotal ? options.pagesTotal : pageNumber;
                $links.eq(i).attr('rel', pageNumber);
                $links.eq(i).attr('href', getLink(pageNumber));
            }
            movePageCurrentPoint();
            draw();
            return options.clickHandler(options.buildCounter(options.pageCurrent));
        }

        function buildCounter(page) {
            return page;
        }
        var options = {
            pagesTotal: 1,
            pagesSpan: 10,
            pageCurrent: 1,
            baseUrl: document.location.href + '&page=%number%',
            buildCounter: buildCounter,
            pageScroll: 3,
            clickHandler: null,
            returnOrder: false,
            lang: {
                next: "Next",
                last: "Last",
                prior: "Prior",
                first: "First",
                arrowRight: String.fromCharCode(8594),
                arrowLeft: String.fromCharCode(8592)
            },
            events: {
                keyboard: true,
                scroll: true
            }
        };
        options = $.extend(true, options, s);
        options.pagesSpan = options.pagesSpan < options.pagesTotal ? options.pagesSpan : options.pagesTotal;
        options.pageCurrent = options.pagesTotal < options.pageCurrent ? options.pagesTotal : options.pageCurrent;
        if (!options.baseUrl.match(/%number%/i)) options.baseUrl += '%number%';
        options.baseUrl = options.baseUrl.split('%number%');
        if (!$.isFunction(options.buildCounter)) options.buildCounter = buildCounter;
        next_page = (parseInt(options.pageCurrent) < parseInt(options.pagesTotal)) ? parseInt(options.pageCurrent) + 1 : options.pagesTotal;
        next = '<a href="' + getLink(next_page) + '" rel="' + next_page + '">%next%</a>';
        last = '<a href="' + getLink(options.pagesTotal) + '" rel="' + options.pagesTotal + '">%last%</a>';
        prior_page = (parseInt(options.pageCurrent) > 1) ? parseInt(options.pageCurrent) - 1 : 1;
        prior = '<a href="' + getLink(prior_page) + '" rel="' + prior_page + '">%prior%</a>';
        first = '<a href="' + getLink(1) + '" rel="' + 1 + '">%first%</a>';
        top_left = bottom_left = top_right = bottom_right = '';
        if (options.returnOrder) {
            top_left = next.replace(/%next%/, options.lang.arrowLeft + ' ' + options.lang.next);
            bottom_left = last.replace(/%last%/, options.lang.last);
            top_right = prior.replace(/%prior%/, options.lang.prior + ' ' + options.lang.arrowRight);
            bottom_right = first.replace(/%first%/, options.lang.first);
        } else {
            top_right = next.replace(/%next%/, options.lang.next + ' ' + options.lang.arrowRight);
            bottom_right = last.replace(/%last%/, options.lang.last);
            top_left = prior.replace(/%prior%/, options.lang.arrowLeft + ' ' + options.lang.prior);
            bottom_left = first.replace(/%first%/, options.lang.first);
        };
        tdWidth = Math.ceil(100 / (options.pagesSpan + 2)) + '%';
        code = '<table width="100%">' + '<tr>' + '<td class="left top">' + top_left + '</td>' + '<td class="spaser" />' + '<td rowspan="2" align="center">' + '<table>' + '<tr>';
        for (i = 1; i <= options.pagesSpan; i++) {
            code += '<td width="' + tdWidth + '"><span></span></td>';
        }
        code += '</tr>' + '<tr>' + '<td colspan="' + options.pagesSpan + '">' + '<div class="scroll_bar">' + '<div class="scroll_trough" />' + '<div class="scroll_thumb">' + '<div class="scroll_knob" />' + '</div>' + '<div class="current_page_mark" />' + '</div>' + '</td>' + '</tr>' + '</table>' + '</td>' + '<td class="spaser" />' + '<td class="right top">' + top_right + '</td>' + '</tr>' + '<tr>' + '<td class="left bottom">' + bottom_left + '</td>' + '<td class="spaser" />' + '<td class="spaser" />' + '<td class="right bottom">' + bottom_right + '</td>' + '</tr>' + '</table>';
        $(this).html(code);
        var html = {
            holder: $(this),
            table: $('table:last', this),
            trPages: $('table:last tr:first', this),
            tdsPages: $('table:last tr:first td span', this),
            scrollBar: $('div.scroll_trough', this),
            scrollThumb: $('div.scroll_thumb', this),
            pageCurrentMark: $('div.current_page_mark', this)
        };
        setScrollThumbWidth();
        html.table.workWidth = html.table.width();
        html.table.maxWidth = html.table.width() - html.scrollThumb.width();
        html.scrollThumb.xPos = options.returnOrder ? (options.pagesTotal - options.pageCurrent - options.pagesSpan / 2) / options.pagesTotal * html.table.workWidth : (options.pageCurrent - options.pagesSpan / 2) / options.pagesTotal * html.table.workWidth;
        setPageCurrentPointWidth();
        movePageCurrentPoint();
        draw();
        $(window).resize(function() {
            setPageCurrentPointWidth();
            movePageCurrentPoint();
            setScrollThumbWidth();
        });
        if ($.isFunction(options.clickHandler)) {
            $(html.holder).find('a[rel!=""]').bind('click', function(e) {
                return executeCallBack($(this).attr('rel'));
            });
        }
        $(html.scrollThumb).bind('mousedown', function(e) {
            var dx = e.pageX - html.scrollThumb.xPos;
            $(document).bind('mousemove', function(e) {
                html.scrollThumb.xPos = options.returnOrder ? e.pageX - dx : e.pageX - dx;
                draw();
            });
            $(document).bind('mouseup', function() {
                $(document).unbind('mousemove');
                enableSelection(html.holder);
            });
            disableSelection(html.holder);
        });
        $(html.scrollBar).add(html.pageCurrentMark).bind('click', function(e) {
            html.scrollThumb.xPos = e.pageX - $(html.scrollBar).offset().left - Math.ceil(html.scrollThumb.width() / 2);
            moveScrollThumb();
            draw();
        });
        if (options.events.keyboard) {
            $(document).keydown(function(e) {
                if (e.ctrlKey) {
                    switch (e.keyCode ? e.keyCode : e.which ? e.which : null) {
                        case 0x25:
                            el = $(options.returnOrder ? '.right.top a' : '.left.top a', html.holder);
                            $.isFunction(options.clickHandler) ? el.click() : document.location.href = el.attr('href');
                            break;
                        case 0x27:
                            el = $(options.returnOrder ? '.left.top a' : '.right.top a', html.holder);
                            $.isFunction(options.clickHandler) ? el.click() : document.location.href = el.attr('href');
                            break;
                    }
                }
            });
        }
        if (options.events.scroll) {
            $(html.holder).bind('mousewheel', function(e) {
                html.scrollThumb.xPos += (e.delta * (options.returnOrder ? -1 : 1)) * (html.table.workWidth / options.pagesTotal);
                draw();
                return false;
            });
        }
    };
})(jQuery);;
var PARSEIT_UC;
(function() {
    var n = this,
        t = n._,
        r = {},
        e = Array.prototype,
        u = Object.prototype,
        i = Function.prototype,
        a = e.push,
        o = e.slice,
        c = e.concat,
        l = u.toString,
        f = u.hasOwnProperty,
        s = e.forEach,
        p = e.map,
        h = e.reduce,
        v = e.reduceRight,
        d = e.filter,
        g = e.every,
        m = e.some,
        y = e.indexOf,
        b = e.lastIndexOf,
        x = Array.isArray,
        _ = Object.keys,
        j = i.bind,
        w = function(n) {
            return n instanceof w ? n : this instanceof w ? (this._wrapped = n, void 0) : new w(n)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = w), exports._ = w) : n._ = w, w.VERSION = "1.4.4";
    var A = w.each = w.forEach = function(n, t, e) {
        if (null != n)
            if (s && n.forEach === s) n.forEach(t, e);
            else if (n.length === +n.length) {
            for (var u = 0, i = n.length; i > u; u++)
                if (t.call(e, n[u], u, n) === r) return
        } else
            for (var a in n)
                if (w.has(n, a) && t.call(e, n[a], a, n) === r) return
    };
    w.map = w.collect = function(n, t, r) {
        var e = [];
        return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function(n, u, i) {
            e[e.length] = t.call(r, n, u, i)
        }), e)
    };
    var O = "Reduce of empty array with no initial value";
    w.reduce = w.foldl = w.inject = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), h && n.reduce === h) return e && (t = w.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
        if (A(n, function(n, i, a) {
                u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
            }), !u) throw new TypeError(O);
        return r
    }, w.reduceRight = w.foldr = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), v && n.reduceRight === v) return e && (t = w.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = n.length;
        if (i !== +i) {
            var a = w.keys(n);
            i = a.length
        }
        if (A(n, function(o, c, l) {
                c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0)
            }), !u) throw new TypeError(O);
        return r
    }, w.find = w.detect = function(n, t, r) {
        var e;
        return E(n, function(n, u, i) {
            return t.call(r, n, u, i) ? (e = n, !0) : void 0
        }), e
    }, w.filter = w.select = function(n, t, r) {
        var e = [];
        return null == n ? e : d && n.filter === d ? n.filter(t, r) : (A(n, function(n, u, i) {
            t.call(r, n, u, i) && (e[e.length] = n)
        }), e)
    }, w.reject = function(n, t, r) {
        return w.filter(n, function(n, e, u) {
            return !t.call(r, n, e, u)
        }, r)
    }, w.every = w.all = function(n, t, e) {
        t || (t = w.identity);
        var u = !0;
        return null == n ? u : g && n.every === g ? n.every(t, e) : (A(n, function(n, i, a) {
            return (u = u && t.call(e, n, i, a)) ? void 0 : r
        }), !!u)
    };
    var E = w.some = w.any = function(n, t, e) {
        t || (t = w.identity);
        var u = !1;
        return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function(n, i, a) {
            return u || (u = t.call(e, n, i, a)) ? r : void 0
        }), !!u)
    };
    w.contains = w.include = function(n, t) {
        return null == n ? !1 : y && n.indexOf === y ? n.indexOf(t) != -1 : E(n, function(n) {
            return n === t
        })
    }, w.invoke = function(n, t) {
        var r = o.call(arguments, 2),
            e = w.isFunction(t);
        return w.map(n, function(n) {
            return (e ? t : n[t]).apply(n, r)
        })
    }, w.pluck = function(n, t) {
        return w.map(n, function(n) {
            return n[t]
        })
    }, w.where = function(n, t, r) {
        return w.isEmpty(t) ? r ? null : [] : w[r ? "find" : "filter"](n, function(n) {
            for (var r in t)
                if (t[r] !== n[r]) return !1;
            return !0
        })
    }, w.findWhere = function(n, t) {
        return w.where(n, t, !0)
    }, w.max = function(n, t, r) {
        if (!t && w.isArray(n) && n[0] === +n[0] && 65535 > n.length) return Math.max.apply(Math, n);
        if (!t && w.isEmpty(n)) return -1 / 0;
        var e = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a >= e.computed && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, w.min = function(n, t, r) {
        if (!t && w.isArray(n) && n[0] === +n[0] && 65535 > n.length) return Math.min.apply(Math, n);
        if (!t && w.isEmpty(n)) return 1 / 0;
        var e = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            e.computed > a && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, w.shuffle = function(n) {
        var t, r = 0,
            e = [];
        return A(n, function(n) {
            t = w.random(r++), e[r - 1] = e[t], e[t] = n
        }), e
    };
    var k = function(n) {
        return w.isFunction(n) ? n : function(t) {
            return t[n]
        }
    };
    w.sortBy = function(n, t, r) {
        var e = k(t);
        return w.pluck(w.map(n, function(n, t, u) {
            return {
                value: n,
                index: t,
                criteria: e.call(r, n, t, u)
            }
        }).sort(function(n, t) {
            var r = n.criteria,
                e = t.criteria;
            if (r !== e) {
                if (r > e || r === void 0) return 1;
                if (e > r || e === void 0) return -1
            }
            return n.index < t.index ? -1 : 1
        }), "value")
    };
    var F = function(n, t, r, e) {
        var u = {},
            i = k(t || w.identity);
        return A(n, function(t, a) {
            var o = i.call(r, t, a, n);
            e(u, o, t)
        }), u
    };
    w.groupBy = function(n, t, r) {
        return F(n, t, r, function(n, t, r) {
            (w.has(n, t) ? n[t] : n[t] = []).push(r)
        })
    }, w.countBy = function(n, t, r) {
        return F(n, t, r, function(n, t) {
            w.has(n, t) || (n[t] = 0), n[t]++
        })
    }, w.sortedIndex = function(n, t, r, e) {
        r = null == r ? w.identity : k(r);
        for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
            var o = i + a >>> 1;
            u > r.call(e, n[o]) ? i = o + 1 : a = o
        }
        return i
    }, w.toArray = function(n) {
        return n ? w.isArray(n) ? o.call(n) : n.length === +n.length ? w.map(n, w.identity) : w.values(n) : []
    }, w.size = function(n) {
        return null == n ? 0 : n.length === +n.length ? n.length : w.keys(n).length
    }, w.first = w.head = w.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t)
    }, w.initial = function(n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t))
    }, w.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
    }, w.rest = w.tail = w.drop = function(n, t, r) {
        return o.call(n, null == t || r ? 1 : t)
    }, w.compact = function(n) {
        return w.filter(n, w.identity)
    };
    var R = function(n, t, r) {
        return A(n, function(n) {
            w.isArray(n) ? t ? a.apply(r, n) : R(n, t, r) : r.push(n)
        }), r
    };
    w.flatten = function(n, t) {
        return R(n, t, [])
    }, w.without = function(n) {
        return w.difference(n, o.call(arguments, 1))
    }, w.uniq = w.unique = function(n, t, r, e) {
        w.isFunction(t) && (e = r, r = t, t = !1);
        var u = r ? w.map(n, r, e) : n,
            i = [],
            a = [];
        return A(u, function(r, e) {
            (t ? e && a[a.length - 1] === r : w.contains(a, r)) || (a.push(r), i.push(n[e]))
        }), i
    }, w.union = function() {
        return w.uniq(c.apply(e, arguments))
    }, w.intersection = function(n) {
        var t = o.call(arguments, 1);
        return w.filter(w.uniq(n), function(n) {
            return w.every(t, function(t) {
                return w.indexOf(t, n) >= 0
            })
        })
    }, w.difference = function(n) {
        var t = c.apply(e, o.call(arguments, 1));
        return w.filter(n, function(n) {
            return !w.contains(t, n)
        })
    }, w.zip = function() {
        for (var n = o.call(arguments), t = w.max(w.pluck(n, "length")), r = Array(t), e = 0; t > e; e++) r[e] = w.pluck(n, "" + e);
        return r
    }, w.object = function(n, t) {
        if (null == n) return {};
        for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }, w.indexOf = function(n, t, r) {
        if (null == n) return -1;
        var e = 0,
            u = n.length;
        if (r) {
            if ("number" != typeof r) return e = w.sortedIndex(n, t), n[e] === t ? e : -1;
            e = 0 > r ? Math.max(0, u + r) : r
        }
        if (y && n.indexOf === y) return n.indexOf(t, r);
        for (; u > e; e++)
            if (n[e] === t) return e;
        return -1
    }, w.lastIndexOf = function(n, t, r) {
        if (null == n) return -1;
        var e = null != r;
        if (b && n.lastIndexOf === b) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for (var u = e ? r : n.length; u--;)
            if (n[u] === t) return u;
        return -1
    }, w.range = function(n, t, r) {
        1 >= arguments.length && (t = n || 0, n = 0), r = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = Array(e); e > u;) i[u++] = n, n += r;
        return i
    }, w.bind = function(n, t) {
        if (n.bind === j && j) return j.apply(n, o.call(arguments, 1));
        var r = o.call(arguments, 2);
        return function() {
            return n.apply(t, r.concat(o.call(arguments)))
        }
    }, w.partial = function(n) {
        var t = o.call(arguments, 1);
        return function() {
            return n.apply(this, t.concat(o.call(arguments)))
        }
    }, w.bindAll = function(n) {
        var t = o.call(arguments, 1);
        return 0 === t.length && (t = w.functions(n)), A(t, function(t) {
            n[t] = w.bind(n[t], n)
        }), n
    }, w.memoize = function(n, t) {
        var r = {};
        return t || (t = w.identity),
            function() {
                var e = t.apply(this, arguments);
                return w.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
            }
    }, w.delay = function(n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, t)
    }, w.defer = function(n) {
        return w.delay.apply(w, [n, 1].concat(o.call(arguments, 1)))
    }, w.throttle = function(n, t) {
        var r, e, u, i, a = 0,
            o = function() {
                a = new Date, u = null, i = n.apply(r, e)
            };
        return function() {
            var c = new Date,
                l = t - (c - a);
            return r = this, e = arguments, 0 >= l ? (clearTimeout(u), u = null, a = c, i = n.apply(r, e)) : u || (u = setTimeout(o, l)), i
        }
    }, w.debounce = function(n, t, r) {
        var e, u;
        return function() {
            var i = this,
                a = arguments,
                o = function() {
                    e = null, r || (u = n.apply(i, a))
                },
                c = r && !e;
            return clearTimeout(e), e = setTimeout(o, t), c && (u = n.apply(i, a)), u
        }
    }, w.once = function(n) {
        var t, r = !1;
        return function() {
            return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t)
        }
    }, w.wrap = function(n, t) {
        return function() {
            var r = [n];
            return a.apply(r, arguments), t.apply(this, r)
        }
    }, w.compose = function() {
        var n = arguments;
        return function() {
            for (var t = arguments, r = n.length - 1; r >= 0; r--) t = [n[r].apply(this, t)];
            return t[0]
        }
    }, w.after = function(n, t) {
        return 0 >= n ? t() : function() {
            return 1 > --n ? t.apply(this, arguments) : void 0
        }
    }, w.keys = _ || function(n) {
        if (n !== Object(n)) throw new TypeError("Invalid object");
        var t = [];
        for (var r in n) w.has(n, r) && (t[t.length] = r);
        return t
    }, w.values = function(n) {
        var t = [];
        for (var r in n) w.has(n, r) && t.push(n[r]);
        return t
    }, w.pairs = function(n) {
        var t = [];
        for (var r in n) w.has(n, r) && t.push([r, n[r]]);
        return t
    }, w.invert = function(n) {
        var t = {};
        for (var r in n) w.has(n, r) && (t[n[r]] = r);
        return t
    }, w.functions = w.methods = function(n) {
        var t = [];
        for (var r in n) w.isFunction(n[r]) && t.push(r);
        return t.sort()
    }, w.extend = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t) n[r] = t[r]
        }), n
    }, w.pick = function(n) {
        var t = {},
            r = c.apply(e, o.call(arguments, 1));
        return A(r, function(r) {
            r in n && (t[r] = n[r])
        }), t
    }, w.omit = function(n) {
        var t = {},
            r = c.apply(e, o.call(arguments, 1));
        for (var u in n) w.contains(r, u) || (t[u] = n[u]);
        return t
    }, w.defaults = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t) null == n[r] && (n[r] = t[r])
        }), n
    }, w.clone = function(n) {
        return w.isObject(n) ? w.isArray(n) ? n.slice() : w.extend({}, n) : n
    }, w.tap = function(n, t) {
        return t(n), n
    };
    var I = function(n, t, r, e) {
        if (n === t) return 0 !== n || 1 / n == 1 / t;
        if (null == n || null == t) return n === t;
        n instanceof w && (n = n._wrapped), t instanceof w && (t = t._wrapped);
        var u = l.call(n);
        if (u != l.call(t)) return !1;
        switch (u) {
            case "[object String]":
                return n == t + "";
            case "[object Number]":
                return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +n == +t;
            case "[object RegExp]":
                return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof n || "object" != typeof t) return !1;
        for (var i = r.length; i--;)
            if (r[i] == n) return e[i] == t;
        r.push(n), e.push(t);
        var a = 0,
            o = !0;
        if ("[object Array]" == u) {
            if (a = n.length, o = a == t.length)
                for (; a-- && (o = I(n[a], t[a], r, e)););
        } else {
            var c = n.constructor,
                f = t.constructor;
            if (c !== f && !(w.isFunction(c) && c instanceof c && w.isFunction(f) && f instanceof f)) return !1;
            for (var s in n)
                if (w.has(n, s) && (a++, !(o = w.has(t, s) && I(n[s], t[s], r, e)))) break;
            if (o) {
                for (s in t)
                    if (w.has(t, s) && !a--) break;
                o = !a
            }
        }
        return r.pop(), e.pop(), o
    };
    w.isEqual = function(n, t) {
        return I(n, t, [], [])
    }, w.isEmpty = function(n) {
        if (null == n) return !0;
        if (w.isArray(n) || w.isString(n)) return 0 === n.length;
        for (var t in n)
            if (w.has(n, t)) return !1;
        return !0
    }, w.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }, w.isArray = x || function(n) {
        return "[object Array]" == l.call(n)
    }, w.isObject = function(n) {
        return n === Object(n)
    }, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
        w["is" + n] = function(t) {
            return l.call(t) == "[object " + n + "]"
        }
    }), w.isArguments(arguments) || (w.isArguments = function(n) {
        return !(!n || !w.has(n, "callee"))
    }), "function" != typeof /./ && (w.isFunction = function(n) {
        return "function" == typeof n
    }), w.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }, w.isNaN = function(n) {
        return w.isNumber(n) && n != +n
    }, w.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" == l.call(n)
    }, w.isNull = function(n) {
        return null === n
    }, w.isUndefined = function(n) {
        return n === void 0
    }, w.has = function(n, t) {
        return f.call(n, t)
    }, w.noConflict = function() {
        return n._ = t, this
    }, w.identity = function(n) {
        return n
    }, w.times = function(n, t, r) {
        for (var e = Array(n), u = 0; n > u; u++) e[u] = t.call(r, u);
        return e
    }, w.random = function(n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
    };
    var M = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    M.unescape = w.invert(M.escape);
    var S = {
        escape: RegExp("[" + w.keys(M.escape).join("") + "]", "g"),
        unescape: RegExp("(" + w.keys(M.unescape).join("|") + ")", "g")
    };
    w.each(["escape", "unescape"], function(n) {
        w[n] = function(t) {
            return null == t ? "" : ("" + t).replace(S[n], function(t) {
                return M[n][t]
            })
        }
    }), w.result = function(n, t) {
        if (null == n) return null;
        var r = n[t];
        return w.isFunction(r) ? r.call(n) : r
    }, w.mixin = function(n) {
        A(w.functions(n), function(t) {
            var r = w[t] = n[t];
            w.prototype[t] = function() {
                var n = [this._wrapped];
                return a.apply(n, arguments), D.call(this, r.apply(w, n))
            }
        })
    };
    var N = 0;
    w.uniqueId = function(n) {
        var t = ++N + "";
        return n ? n + t : t
    }, w.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var T = /(.)^/,
        q = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        B = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    w.template = function(n, t, r) {
        var e;
        r = w.defaults({}, r, w.templateSettings);
        var u = RegExp([(r.escape || T).source, (r.interpolate || T).source, (r.evaluate || T).source].join("|") + "|$", "g"),
            i = 0,
            a = "__p+='";
        n.replace(u, function(t, r, e, u, o) {
            return a += n.slice(i, o).replace(B, function(n) {
                return "\\" + q[n]
            }), r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), u && (a += "';\n" + u + "\n__p+='"), i = o + t.length, t
        }), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            e = Function(r.variable || "obj", "_", a)
        } catch (o) {
            throw o.source = a, o
        }
        if (t) return e(t, w);
        var c = function(n) {
            return e.call(this, n, w)
        };
        return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}", c
    }, w.chain = function(n) {
        return w(n).chain()
    };
    var D = function(n) {
        return this._chain ? w(n).chain() : n
    };
    w.mixin(w), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = e[n];
        w.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], D.call(this, r)
        }
    }), A(["concat", "join", "slice"], function(n) {
        var t = e[n];
        w.prototype[n] = function() {
            return D.call(this, t.apply(this._wrapped, arguments))
        }
    }), w.extend(w.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    });
    PARSEIT_UC = _;
}).call(this);;
var __assign = (this && this.__assign) || function() {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var defaults = {
    lines: 12,
    length: 7,
    width: 5,
    radius: 10,
    scale: 1.0,
    corners: 1,
    color: '#000',
    fadeColor: 'transparent',
    animation: 'spinner-line-fade-default',
    rotate: 0,
    direction: 1,
    speed: 1,
    zIndex: 2e9,
    className: 'spinner',
    top: '50%',
    left: '50%',
    shadow: '0 0 1px transparent',
    position: 'absolute',
};
var Spinner = (function() {
    function Spinner(opts) {
        if (opts === void 0) {
            opts = {};
        }
        this.opts = __assign({}, defaults, opts);
    }
    Spinner.prototype.spin = function(target) {
        this.stop();
        this.el = document.createElement('div');
        this.el.className = this.opts.className;
        this.el.setAttribute('role', 'progressbar');
        css(this.el, {
            position: this.opts.position,
            width: 0,
            zIndex: this.opts.zIndex,
            left: this.opts.left,
            top: this.opts.top,
            transform: "scale(" + this.opts.scale + ")",
        });
        if (target) {
            target.insertBefore(this.el, target.firstChild || null);
        }
        drawLines(this.el, this.opts);
        return this;
    };
    Spinner.prototype.stop = function() {
        if (this.el) {
            if (typeof requestAnimationFrame !== 'undefined') {
                cancelAnimationFrame(this.animateId);
            } else {
                clearTimeout(this.animateId);
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
            this.el = undefined;
        }
        return this;
    };
    return Spinner;
}());

function css(el, props) {
    for (var prop in props) {
        el.style[prop] = props[prop];
    }
    return el;
}

function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length];
}

function drawLines(el, opts) {
    var borderRadius = (Math.round(opts.corners * opts.width * 500) / 1000) + 'px';
    var shadow = 'none';
    if (opts.shadow === true) {
        shadow = '0 2px 4px #000';
    } else if (typeof opts.shadow === 'string') {
        shadow = opts.shadow;
    }
    var shadows = parseBoxShadow(shadow);
    for (var i = 0; i < opts.lines; i++) {
        var degrees = ~~(360 / opts.lines * i + opts.rotate);
        var backgroundLine = css(document.createElement('div'), {
            position: 'absolute',
            top: -opts.width / 2 + "px",
            width: (opts.length + opts.width) + 'px',
            height: opts.width + 'px',
            background: getColor(opts.fadeColor, i),
            borderRadius: borderRadius,
            transformOrigin: 'left',
            transform: "rotate(" + degrees + "deg) translateX(" + opts.radius + "px)",
        });
        var delay = i * opts.direction / opts.lines / opts.speed;
        delay -= 1 / opts.speed;
        var line = css(document.createElement('div'), {
            width: '100%',
            height: '100%',
            background: getColor(opts.color, i),
            borderRadius: borderRadius,
            boxShadow: normalizeShadow(shadows, degrees),
            animation: 1 / opts.speed + "s linear " + delay + "s infinite " + opts.animation,
        });
        backgroundLine.appendChild(line);
        el.appendChild(backgroundLine);
    }
}

function parseBoxShadow(boxShadow) {
    var regex = /^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/;
    var shadows = [];
    for (var _i = 0, _a = boxShadow.split(','); _i < _a.length; _i++) {
        var shadow = _a[_i];
        var matches = shadow.match(regex);
        if (matches === null) {
            continue;
        }
        var x = +matches[2];
        var y = +matches[5];
        var xUnits = matches[4];
        var yUnits = matches[7];
        if (x === 0 && !xUnits) {
            xUnits = yUnits;
        }
        if (y === 0 && !yUnits) {
            yUnits = xUnits;
        }
        if (xUnits !== yUnits) {
            continue;
        }
        shadows.push({
            prefix: matches[1] || '',
            x: x,
            y: y,
            xUnits: xUnits,
            yUnits: yUnits,
            end: matches[8],
        });
    }
    return shadows;
}

function normalizeShadow(shadows, degrees) {
    var normalized = [];
    for (var _i = 0, shadows_1 = shadows; _i < shadows_1.length; _i++) {
        var shadow = shadows_1[_i];
        var xy = convertOffset(shadow.x, shadow.y, degrees);
        normalized.push(shadow.prefix + xy[0] + shadow.xUnits + ' ' + xy[1] + shadow.yUnits + shadow.end);
    }
    return normalized.join(', ');
}

function convertOffset(x, y, degrees) {
    var radians = degrees * Math.PI / 180;
    var sin = Math.sin(radians);
    var cos = Math.cos(radians);
    return [Math.round((x * cos + y * sin) * 1000) / 1000, Math.round((-x * sin + y * cos) * 1000) / 1000, ];
};
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).i18next = t()
}(this, function() {
    "use strict";

    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(t)
    }

    function t(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function n(e) {
        for (var n = 1; n < arguments.length; n++) {
            var o = null != arguments[n] ? Object(arguments[n]) : {},
                i = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable
            }))), i.forEach(function(n) {
                t(e, n, o[n])
            })
        }
        return e
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }

    function r(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function a(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function s(t, n) {
        return !n || "object" !== e(n) && "function" != typeof n ? a(t) : n
    }

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function c(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && l(e, t)
    }
    var p = {
            type: "logger",
            log: function(e) {
                this.output("log", e)
            },
            warn: function(e) {
                this.output("warn", e)
            },
            error: function(e) {
                this.output("error", e)
            },
            output: function(e, t) {
                console && console[e] && console[e].apply(console, t)
            }
        },
        g = new(function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                o(this, e), this.init(t, n)
            }
            return r(e, [{
                key: "init",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.prefix = t.prefix || "i18next:", this.logger = e || p, this.options = t, this.debug = t.debug
                }
            }, {
                key: "setDebug",
                value: function(e) {
                    this.debug = e
                }
            }, {
                key: "log",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.forward(t, "log", "", !0)
                }
            }, {
                key: "warn",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.forward(t, "warn", "", !0)
                }
            }, {
                key: "error",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.forward(t, "error", "")
                }
            }, {
                key: "deprecate",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                }
            }, {
                key: "forward",
                value: function(e, t, n, o) {
                    return o && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])), this.logger[t](e))
                }
            }, {
                key: "create",
                value: function(t) {
                    return new e(this.logger, n({}, {
                        prefix: "".concat(this.prefix, ":").concat(t, ":")
                    }, this.options))
                }
            }]), e
        }()),
        f = function() {
            function e() {
                o(this, e), this.observers = {}
            }
            return r(e, [{
                key: "on",
                value: function(e, t) {
                    var n = this;
                    return e.split(" ").forEach(function(e) {
                        n.observers[e] = n.observers[e] || [], n.observers[e].push(t)
                    }), this
                }
            }, {
                key: "off",
                value: function(e, t) {
                    this.observers[e] && (t ? this.observers[e] = this.observers[e].filter(function(e) {
                        return e !== t
                    }) : delete this.observers[e])
                }
            }, {
                key: "emit",
                value: function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                    this.observers[e] && [].concat(this.observers[e]).forEach(function(e) {
                        e.apply(void 0, n)
                    });
                    this.observers["*"] && [].concat(this.observers["*"]).forEach(function(t) {
                        t.apply(t, [e].concat(n))
                    })
                }
            }]), e
        }();

    function h() {
        var e, t, n = new Promise(function(n, o) {
            e = n, t = o
        });
        return n.resolve = e, n.reject = t, n
    }

    function d(e) {
        return null == e ? "" : "" + e
    }

    function v(e, t, n) {
        function o(e) {
            return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
        }

        function i() {
            return !e || "string" == typeof e
        }
        for (var r = "string" != typeof t ? [].concat(t) : t.split("."); r.length > 1;) {
            if (i()) return {};
            var a = o(r.shift());
            !e[a] && n && (e[a] = new n), e = e[a]
        }
        return i() ? {} : {
            obj: e,
            k: o(r.shift())
        }
    }

    function y(e, t, n) {
        var o = v(e, t, Object);
        o.obj[o.k] = n
    }

    function m(e, t) {
        var n = v(e, t),
            o = n.obj,
            i = n.k;
        if (o) return o[i]
    }

    function b(e, t, n) {
        var o = m(e, n);
        return void 0 !== o ? o : m(t, n)
    }

    function k(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    }
    var x = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    };

    function w(e) {
        return "string" == typeof e ? e.replace(/[&<>"'\/]/g, function(e) {
            return x[e]
        }) : e
    }
    var S = "undefined" != typeof window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1,
        L = function(e) {
            function t(e) {
                var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    ns: ["translation"],
                    defaultNS: "translation"
                };
                return o(this, t), n = s(this, u(t).call(this)), S && f.call(a(n)), n.data = e || {}, n.options = i, void 0 === n.options.keySeparator && (n.options.keySeparator = "."), n
            }
            return c(t, f), r(t, [{
                key: "addNamespaces",
                value: function(e) {
                    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                }
            }, {
                key: "removeNamespaces",
                value: function(e) {
                    var t = this.options.ns.indexOf(e);
                    t > -1 && this.options.ns.splice(t, 1)
                }
            }, {
                key: "getResource",
                value: function(e, t, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        i = void 0 !== o.keySeparator ? o.keySeparator : this.options.keySeparator,
                        r = [e, t];
                    return n && "string" != typeof n && (r = r.concat(n)), n && "string" == typeof n && (r = r.concat(i ? n.split(i) : n)), e.indexOf(".") > -1 && (r = e.split(".")), m(this.data, r)
                }
            }, {
                key: "addResource",
                value: function(e, t, n, o) {
                    var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                            silent: !1
                        },
                        r = this.options.keySeparator;
                    void 0 === r && (r = ".");
                    var a = [e, t];
                    n && (a = a.concat(r ? n.split(r) : n)), e.indexOf(".") > -1 && (o = t, t = (a = e.split("."))[1]), this.addNamespaces(t), y(this.data, a, o), i.silent || this.emit("added", e, t, n, o)
                }
            }, {
                key: "addResources",
                value: function(e, t, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        silent: !1
                    };
                    for (var i in n) "string" != typeof n[i] && "[object Array]" !== Object.prototype.toString.apply(n[i]) || this.addResource(e, t, i, n[i], {
                        silent: !0
                    });
                    o.silent || this.emit("added", e, t, n)
                }
            }, {
                key: "addResourceBundle",
                value: function(e, t, o, i, r) {
                    var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                            silent: !1
                        },
                        s = [e, t];
                    e.indexOf(".") > -1 && (i = o, o = t, t = (s = e.split("."))[1]), this.addNamespaces(t);
                    var u = m(this.data, s) || {};
                    i ? function e(t, n, o) {
                        for (var i in n) "__proto__" !== i && (i in t ? "string" == typeof t[i] || t[i] instanceof String || "string" == typeof n[i] || n[i] instanceof String ? o && (t[i] = n[i]) : e(t[i], n[i], o) : t[i] = n[i]);
                        return t
                    }(u, o, r) : u = n({}, u, o), y(this.data, s, u), a.silent || this.emit("added", e, t, o)
                }
            }, {
                key: "removeResourceBundle",
                value: function(e, t) {
                    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
                }
            }, {
                key: "hasResourceBundle",
                value: function(e, t) {
                    return void 0 !== this.getResource(e, t)
                }
            }, {
                key: "getResourceBundle",
                value: function(e, t) {
                    return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? n({}, {}, this.getResource(e, t)) : this.getResource(e, t)
                }
            }, {
                key: "getDataByLanguage",
                value: function(e) {
                    return this.data[e]
                }
            }, {
                key: "toJSON",
                value: function() {
                    return this.data
                }
            }]), t
        }(),
        O = {
            processors: {},
            addPostProcessor: function(e) {
                this.processors[e.name] = e
            },
            handle: function(e, t, n, o, i) {
                var r = this;
                return e.forEach(function(e) {
                    r.processors[e] && (t = r.processors[e].process(t, n, o, i))
                }), t
            }
        },
        R = {},
        C = function(t) {
            function i(e) {
                var t, n, r, l, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return o(this, i), t = s(this, u(i).call(this)), S && f.call(a(t)), n = ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], r = e, l = a(t), n.forEach(function(e) {
                    r[e] && (l[e] = r[e])
                }), t.options = c, void 0 === t.options.keySeparator && (t.options.keySeparator = "."), t.logger = g.create("translator"), t
            }
            return c(i, f), r(i, [{
                key: "changeLanguage",
                value: function(e) {
                    e && (this.language = e)
                }
            }, {
                key: "exists",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            interpolation: {}
                        },
                        n = this.resolve(e, t);
                    return n && void 0 !== n.res
                }
            }, {
                key: "extractFromKey",
                value: function(e, t) {
                    var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                    void 0 === n && (n = ":");
                    var o = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                        i = t.ns || this.options.defaultNS;
                    if (n && e.indexOf(n) > -1) {
                        var r = e.match(this.interpolator.nestingRegexp);
                        if (r && r.length > 0) return {
                            key: e,
                            namespaces: i
                        };
                        var a = e.split(n);
                        (n !== o || n === o && this.options.ns.indexOf(a[0]) > -1) && (i = a.shift()), e = a.join(o)
                    }
                    return "string" == typeof i && (i = [i]), {
                        key: e,
                        namespaces: i
                    }
                }
            }, {
                key: "translate",
                value: function(t, o, i) {
                    var r = this;
                    if ("object" !== e(o) && this.options.overloadTranslationOptionHandler && (o = this.options.overloadTranslationOptionHandler(arguments)), o || (o = {}), null == t) return "";
                    Array.isArray(t) || (t = [String(t)]);
                    var a = void 0 !== o.keySeparator ? o.keySeparator : this.options.keySeparator,
                        s = this.extractFromKey(t[t.length - 1], o),
                        u = s.key,
                        l = s.namespaces,
                        c = l[l.length - 1],
                        p = o.lng || this.language,
                        g = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (p && "cimode" === p.toLowerCase()) {
                        if (g) {
                            var f = o.nsSeparator || this.options.nsSeparator;
                            return c + f + u
                        }
                        return u
                    }
                    var h = this.resolve(t, o),
                        d = h && h.res,
                        v = h && h.usedKey || u,
                        y = h && h.exactUsedKey || u,
                        m = Object.prototype.toString.apply(d),
                        b = void 0 !== o.joinArrays ? o.joinArrays : this.options.joinArrays,
                        k = !this.i18nFormat || this.i18nFormat.handleAsObject;
                    if (k && d && ("string" != typeof d && "boolean" != typeof d && "number" != typeof d) && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(m) < 0 && ("string" != typeof b || "[object Array]" !== m)) {
                        if (!o.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, d, o) : "key '".concat(u, " (").concat(this.language, ")' returned an object instead of string.");
                        if (a) {
                            var x = "[object Array]" === m,
                                w = x ? [] : {},
                                S = x ? y : v;
                            for (var L in d)
                                if (Object.prototype.hasOwnProperty.call(d, L)) {
                                    var O = "".concat(S).concat(a).concat(L);
                                    w[L] = this.translate(O, n({}, o, {
                                        joinArrays: !1,
                                        ns: l
                                    })), w[L] === O && (w[L] = d[L])
                                } d = w
                        }
                    } else if (k && "string" == typeof b && "[object Array]" === m)(d = d.join(b)) && (d = this.extendTranslation(d, t, o, i));
                    else {
                        var R = !1,
                            C = !1;
                        if (!this.isValidLookup(d) && void 0 !== o.defaultValue) {
                            if (R = !0, void 0 !== o.count) {
                                var N = this.pluralResolver.getSuffix(p, o.count);
                                d = o["defaultValue".concat(N)]
                            }
                            d || (d = o.defaultValue)
                        }
                        this.isValidLookup(d) || (C = !0, d = u);
                        var j = o.defaultValue && o.defaultValue !== d && this.options.updateMissing;
                        if (C || R || j) {
                            if (this.logger.log(j ? "updateKey" : "missingKey", p, c, u, j ? o.defaultValue : d), a) {
                                var E = this.resolve(u, n({}, o, {
                                    keySeparator: !1
                                }));
                                E && E.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                            }
                            var P = [],
                                F = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
                            if ("fallback" === this.options.saveMissingTo && F && F[0])
                                for (var V = 0; V < F.length; V++) P.push(F[V]);
                            else "all" === this.options.saveMissingTo ? P = this.languageUtils.toResolveHierarchy(o.lng || this.language) : P.push(o.lng || this.language);
                            var T = function(e, t) {
                                r.options.missingKeyHandler ? r.options.missingKeyHandler(e, c, t, j ? o.defaultValue : d, j, o) : r.backendConnector && r.backendConnector.saveMissing && r.backendConnector.saveMissing(e, c, t, j ? o.defaultValue : d, j, o), r.emit("missingKey", e, c, t, d)
                            };
                            if (this.options.saveMissing) {
                                var A = void 0 !== o.count && "string" != typeof o.count;
                                this.options.saveMissingPlurals && A ? P.forEach(function(e) {
                                    r.pluralResolver.getPluralFormsOfKey(e, u).forEach(function(t) {
                                        return T([e], t)
                                    })
                                }) : T(P, u)
                            }
                        }
                        d = this.extendTranslation(d, t, o, h, i), C && d === u && this.options.appendNamespaceToMissingKey && (d = "".concat(c, ":").concat(u)), C && this.options.parseMissingKeyHandler && (d = this.options.parseMissingKeyHandler(d))
                    }
                    return d
                }
            }, {
                key: "extendTranslation",
                value: function(e, t, o, i, r) {
                    var a = this;
                    if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, o, i.usedLng, i.usedNS, i.usedKey, {
                        resolved: i
                    });
                    else if (!o.skipInterpolation) {
                        o.interpolation && this.interpolator.init(n({}, o, {
                            interpolation: n({}, this.options.interpolation, o.interpolation)
                        }));
                        var s, u = o.interpolation && o.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                        if (u) {
                            var l = e.match(this.interpolator.nestingRegexp);
                            s = l && l.length
                        }
                        var c = o.replace && "string" != typeof o.replace ? o.replace : o;
                        if (this.options.interpolation.defaultVariables && (c = n({}, this.options.interpolation.defaultVariables, c)), e = this.interpolator.interpolate(e, c, o.lng || this.language, o), u) {
                            var p = e.match(this.interpolator.nestingRegexp);
                            s < (p && p.length) && (o.nest = !1)
                        }!1 !== o.nest && (e = this.interpolator.nest(e, function() {
                            for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                            return r && r[0] === n[0] ? (a.logger.warn("It seems you are nesting recursively key: ".concat(n[0], " in key: ").concat(t[0])), null) : a.translate.apply(a, n.concat([t]))
                        }, o)), o.interpolation && this.interpolator.reset()
                    }
                    var g = o.postProcess || this.options.postProcess,
                        f = "string" == typeof g ? [g] : g;
                    return null != e && f && f.length && !1 !== o.applyPostProcessor && (e = O.handle(f, e, t, this.options && this.options.postProcessPassResolved ? n({
                        i18nResolved: i
                    }, o) : o, this)), e
                }
            }, {
                key: "resolve",
                value: function(e) {
                    var t, n, o, i, r, a = this,
                        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "string" == typeof e && (e = [e]), e.forEach(function(e) {
                        if (!a.isValidLookup(t)) {
                            var u = a.extractFromKey(e, s),
                                l = u.key;
                            n = l;
                            var c = u.namespaces;
                            a.options.fallbackNS && (c = c.concat(a.options.fallbackNS));
                            var p = void 0 !== s.count && "string" != typeof s.count,
                                g = void 0 !== s.context && "string" == typeof s.context && "" !== s.context,
                                f = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
                            c.forEach(function(e) {
                                a.isValidLookup(t) || (r = e, !R["".concat(f[0], "-").concat(e)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(r) && (R["".concat(f[0], "-").concat(e)] = !0, a.logger.warn('key "'.concat(n, '" for languages "').concat(f.join(", "), '" won\'t get resolved as namespace "').concat(r, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), f.forEach(function(n) {
                                    if (!a.isValidLookup(t)) {
                                        i = n;
                                        var r, u, c = l,
                                            f = [c];
                                        if (a.i18nFormat && a.i18nFormat.addLookupKeys) a.i18nFormat.addLookupKeys(f, l, n, e, s);
                                        else p && (r = a.pluralResolver.getSuffix(n, s.count)), p && g && f.push(c + r), g && f.push(c += "".concat(a.options.contextSeparator).concat(s.context)), p && f.push(c += r);
                                        for (; u = f.pop();) a.isValidLookup(t) || (o = u, t = a.getResource(n, e, u, s))
                                    }
                                }))
                            })
                        }
                    }), {
                        res: t,
                        usedKey: n,
                        exactUsedKey: o,
                        usedLng: i,
                        usedNS: r
                    }
                }
            }, {
                key: "isValidLookup",
                value: function(e) {
                    return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e)
                }
            }, {
                key: "getResource",
                value: function(e, t, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, o) : this.resourceStore.getResource(e, t, n, o)
                }
            }]), i
        }();

    function N(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    var j = function() {
            function e(t) {
                o(this, e), this.options = t, this.whitelist = this.options.supportedLngs || !1, this.supportedLngs = this.options.supportedLngs || !1, this.logger = g.create("languageUtils")
            }
            return r(e, [{
                key: "getScriptPartFromCode",
                value: function(e) {
                    if (!e || e.indexOf("-") < 0) return null;
                    var t = e.split("-");
                    return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
                }
            }, {
                key: "getLanguagePartFromCode",
                value: function(e) {
                    if (!e || e.indexOf("-") < 0) return e;
                    var t = e.split("-");
                    return this.formatLanguageCode(t[0])
                }
            }, {
                key: "formatLanguageCode",
                value: function(e) {
                    if ("string" == typeof e && e.indexOf("-") > -1) {
                        var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                            n = e.split("-");
                        return this.options.lowerCaseLng ? n = n.map(function(e) {
                            return e.toLowerCase()
                        }) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = N(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = N(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = N(n[2].toLowerCase()))), n.join("-")
                    }
                    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                }
            }, {
                key: "isWhitelisted",
                value: function(e) {
                    return this.logger.deprecate("languageUtils.isWhitelisted", 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'), this.isSupportedCode(e)
                }
            }, {
                key: "isSupportedCode",
                value: function(e) {
                    return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                }
            }, {
                key: "getBestMatchFromCodes",
                value: function(e) {
                    var t, n = this;
                    return e ? (e.forEach(function(e) {
                        if (!t) {
                            var o = n.formatLanguageCode(e);
                            n.options.supportedLngs && !n.isSupportedCode(o) || (t = o)
                        }
                    }), !t && this.options.supportedLngs && e.forEach(function(e) {
                        if (!t) {
                            var o = n.getLanguagePartFromCode(e);
                            if (n.isSupportedCode(o)) return t = o;
                            t = n.options.supportedLngs.find(function(e) {
                                if (0 === e.indexOf(o)) return e
                            })
                        }
                    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t) : null
                }
            }, {
                key: "getFallbackCodes",
                value: function(e, t) {
                    if (!e) return [];
                    if ("string" == typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e;
                    if (!t) return e.default || [];
                    var n = e[t];
                    return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || []
                }
            }, {
                key: "toResolveHierarchy",
                value: function(e, t) {
                    var n = this,
                        o = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                        i = [],
                        r = function(e) {
                            e && (n.isSupportedCode(e) ? i.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))
                        };
                    return "string" == typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && r(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && r(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && r(this.getLanguagePartFromCode(e))) : "string" == typeof e && r(this.formatLanguageCode(e)), o.forEach(function(e) {
                        i.indexOf(e) < 0 && r(n.formatLanguageCode(e))
                    }), i
                }
            }]), e
        }(),
        E = [{
            lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "ti", "tr", "uz", "wa"],
            nr: [1, 2],
            fc: 1
        }, {
            lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
            nr: [1, 2],
            fc: 2
        }, {
            lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
            nr: [1],
            fc: 3
        }, {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4
        }, {
            lngs: ["ar"],
            nr: [0, 1, 2, 3, 11, 100],
            fc: 5
        }, {
            lngs: ["cs", "sk"],
            nr: [1, 2, 5],
            fc: 6
        }, {
            lngs: ["csb", "pl"],
            nr: [1, 2, 5],
            fc: 7
        }, {
            lngs: ["cy"],
            nr: [1, 2, 3, 8],
            fc: 8
        }, {
            lngs: ["fr"],
            nr: [1, 2],
            fc: 9
        }, {
            lngs: ["ga"],
            nr: [1, 2, 3, 7, 11],
            fc: 10
        }, {
            lngs: ["gd"],
            nr: [1, 2, 3, 20],
            fc: 11
        }, {
            lngs: ["is"],
            nr: [1, 2],
            fc: 12
        }, {
            lngs: ["jv"],
            nr: [0, 1],
            fc: 13
        }, {
            lngs: ["kw"],
            nr: [1, 2, 3, 4],
            fc: 14
        }, {
            lngs: ["lt"],
            nr: [1, 2, 10],
            fc: 15
        }, {
            lngs: ["lv"],
            nr: [1, 2, 0],
            fc: 16
        }, {
            lngs: ["mk"],
            nr: [1, 2],
            fc: 17
        }, {
            lngs: ["mnk"],
            nr: [0, 1, 2],
            fc: 18
        }, {
            lngs: ["mt"],
            nr: [1, 2, 11, 20],
            fc: 19
        }, {
            lngs: ["or"],
            nr: [2, 1],
            fc: 2
        }, {
            lngs: ["ro"],
            nr: [1, 2, 20],
            fc: 20
        }, {
            lngs: ["sl"],
            nr: [5, 1, 2, 3],
            fc: 21
        }, {
            lngs: ["he", "iw"],
            nr: [1, 2, 20, 21],
            fc: 22
        }],
        P = {
            1: function(e) {
                return Number(e > 1)
            },
            2: function(e) {
                return Number(1 != e)
            },
            3: function(e) {
                return 0
            },
            4: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            5: function(e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
            },
            6: function(e) {
                return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
            },
            7: function(e) {
                return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            8: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
            },
            9: function(e) {
                return Number(e >= 2)
            },
            10: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
            },
            11: function(e) {
                return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
            },
            12: function(e) {
                return Number(e % 10 != 1 || e % 100 == 11)
            },
            13: function(e) {
                return Number(0 !== e)
            },
            14: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
            },
            15: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            16: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
            },
            17: function(e) {
                return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
            },
            18: function(e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2)
            },
            19: function(e) {
                return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
            },
            20: function(e) {
                return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
            },
            21: function(e) {
                return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
            },
            22: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
            }
        };
    var F = function() {
            function e(t) {
                var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                o(this, e), this.languageUtils = t, this.options = i, this.logger = g.create("pluralResolver"), this.rules = (n = {}, E.forEach(function(e) {
                    e.lngs.forEach(function(t) {
                        n[t] = {
                            numbers: e.nr,
                            plurals: P[e.fc]
                        }
                    })
                }), n)
            }
            return r(e, [{
                key: "addRule",
                value: function(e, t) {
                    this.rules[e] = t
                }
            }, {
                key: "getRule",
                value: function(e) {
                    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                }
            }, {
                key: "needsPlural",
                value: function(e) {
                    var t = this.getRule(e);
                    return t && t.numbers.length > 1
                }
            }, {
                key: "getPluralFormsOfKey",
                value: function(e, t) {
                    var n = this,
                        o = [],
                        i = this.getRule(e);
                    return i ? (i.numbers.forEach(function(i) {
                        var r = n.getSuffix(e, i);
                        o.push("".concat(t).concat(r))
                    }), o) : o
                }
            }, {
                key: "getSuffix",
                value: function(e, t) {
                    var n = this,
                        o = this.getRule(e);
                    if (o) {
                        var i = o.noAbs ? o.plurals(t) : o.plurals(Math.abs(t)),
                            r = o.numbers[i];
                        this.options.simplifyPluralSuffix && 2 === o.numbers.length && 1 === o.numbers[0] && (2 === r ? r = "plural" : 1 === r && (r = ""));
                        var a = function() {
                            return n.options.prepend && r.toString() ? n.options.prepend + r.toString() : r.toString()
                        };
                        return "v1" === this.options.compatibilityJSON ? 1 === r ? "" : "number" == typeof r ? "_plural_".concat(r.toString()) : a() : "v2" === this.options.compatibilityJSON ? a() : this.options.simplifyPluralSuffix && 2 === o.numbers.length && 1 === o.numbers[0] ? a() : this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString()
                    }
                    return this.logger.warn("no plural rule found for: ".concat(e)), ""
                }
            }]), e
        }(),
        V = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                o(this, e), this.logger = g.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || function(e) {
                    return e
                }, this.init(t)
            }
            return r(e, [{
                key: "init",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e.interpolation || (e.interpolation = {
                        escapeValue: !0
                    });
                    var t = e.interpolation;
                    this.escape = void 0 !== t.escape ? t.escape : w, this.escapeValue = void 0 === t.escapeValue || t.escapeValue, this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape, this.prefix = t.prefix ? k(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? k(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? k(t.nestingPrefix) : t.nestingPrefixEscaped || k("$t("), this.nestingSuffix = t.nestingSuffix ? k(t.nestingSuffix) : t.nestingSuffixEscaped || k(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat, this.resetRegExp()
                }
            }, {
                key: "reset",
                value: function() {
                    this.options && this.init(this.options)
                }
            }, {
                key: "resetRegExp",
                value: function() {
                    var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                    this.regexp = new RegExp(e, "g");
                    var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                    this.regexpUnescape = new RegExp(t, "g");
                    var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                    this.nestingRegexp = new RegExp(n, "g")
                }
            }, {
                key: "interpolate",
                value: function(e, t, n, o) {
                    var i, r, a, s = this,
                        u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

                    function l(e) {
                        return e.replace(/\$/g, "$$$$")
                    }
                    var c = function(e) {
                        if (e.indexOf(s.formatSeparator) < 0) {
                            var i = b(t, u, e);
                            return s.alwaysFormat ? s.format(i, void 0, n) : i
                        }
                        var r = e.split(s.formatSeparator),
                            a = r.shift().trim(),
                            l = r.join(s.formatSeparator).trim();
                        return s.format(b(t, u, a), l, n, o)
                    };
                    this.resetRegExp();
                    var p = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler,
                        g = o && o.interpolation && o.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                    return [{
                        regex: this.regexpUnescape,
                        safeValue: function(e) {
                            return l(e)
                        }
                    }, {
                        regex: this.regexp,
                        safeValue: function(e) {
                            return s.escapeValue ? l(s.escape(e)) : l(e)
                        }
                    }].forEach(function(t) {
                        for (a = 0; i = t.regex.exec(e);) {
                            if (void 0 === (r = c(i[1].trim())))
                                if ("function" == typeof p) {
                                    var n = p(e, i, o);
                                    r = "string" == typeof n ? n : ""
                                } else {
                                    if (g) {
                                        r = i[0];
                                        continue
                                    }
                                    s.logger.warn("missed to pass in variable ".concat(i[1], " for interpolating ").concat(e)), r = ""
                                }
                            else "string" == typeof r || s.useRawValueToEscape || (r = d(r));
                            if (e = e.replace(i[0], t.safeValue(r)), t.regex.lastIndex = 0, ++a >= s.maxReplaces) break
                        }
                    }), e
                }
            }, {
                key: "nest",
                value: function(e, t) {
                    var o, i, r = this,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        s = n({}, a);

                    function u(e, t) {
                        var o = this.nestingOptionsSeparator;
                        if (e.indexOf(o) < 0) return e;
                        var i = e.split(new RegExp("".concat(o, "[ ]*{"))),
                            r = "{".concat(i[1]);
                        e = i[0], r = (r = this.interpolate(r, s)).replace(/'/g, '"');
                        try {
                            s = JSON.parse(r), t && (s = n({}, t, s))
                        } catch (t) {
                            return this.logger.warn("failed parsing options string in nesting for key ".concat(e), t), "".concat(e).concat(o).concat(r)
                        }
                        return delete s.defaultValue, e
                    }
                    for (s.applyPostProcessor = !1, delete s.defaultValue; o = this.nestingRegexp.exec(e);) {
                        var l = [],
                            c = !1;
                        if (o[0].includes(this.formatSeparator) && !/{.*}/.test(o[1])) {
                            var p = o[1].split(this.formatSeparator).map(function(e) {
                                return e.trim()
                            });
                            o[1] = p.shift(), l = p, c = !0
                        }
                        if ((i = t(u.call(this, o[1].trim(), s), s)) && o[0] === e && "string" != typeof i) return i;
                        "string" != typeof i && (i = d(i)), i || (this.logger.warn("missed to resolve ".concat(o[1], " for nesting ").concat(e)), i = ""), c && (i = l.reduce(function(e, t) {
                            return r.format(e, t, a.lng, a)
                        }, i.trim())), e = e.replace(o[0], i), this.regexp.lastIndex = 0
                    }
                    return e
                }
            }]), e
        }();
    var T = function(e) {
        function t(e, n, i) {
            var r, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return o(this, t), r = s(this, u(t).call(this)), S && f.call(a(r)), r.backend = e, r.store = n, r.services = i, r.languageUtils = i.languageUtils, r.options = l, r.logger = g.create("backendConnector"), r.state = {}, r.queue = [], r.backend && r.backend.init && r.backend.init(i, l.backend, l), r
        }
        return c(t, f), r(t, [{
            key: "queueLoad",
            value: function(e, t, n, o) {
                var i = this,
                    r = [],
                    a = [],
                    s = [],
                    u = [];
                return e.forEach(function(e) {
                    var o = !0;
                    t.forEach(function(t) {
                        var s = "".concat(e, "|").concat(t);
                        !n.reload && i.store.hasResourceBundle(e, t) ? i.state[s] = 2 : i.state[s] < 0 || (1 === i.state[s] ? a.indexOf(s) < 0 && a.push(s) : (i.state[s] = 1, o = !1, a.indexOf(s) < 0 && a.push(s), r.indexOf(s) < 0 && r.push(s), u.indexOf(t) < 0 && u.push(t)))
                    }), o || s.push(e)
                }), (r.length || a.length) && this.queue.push({
                    pending: a,
                    loaded: {},
                    errors: [],
                    callback: o
                }), {
                    toLoad: r,
                    pending: a,
                    toLoadLanguages: s,
                    toLoadNamespaces: u
                }
            }
        }, {
            key: "loaded",
            value: function(e, t, n) {
                var o = e.split("|"),
                    i = o[0],
                    r = o[1];
                t && this.emit("failedLoading", i, r, t), n && this.store.addResourceBundle(i, r, n), this.state[e] = t ? -1 : 2;
                var a = {};
                this.queue.forEach(function(n) {
                    var o, s, u, l, c, p;
                    o = n.loaded, s = r, l = v(o, [i], Object), c = l.obj, p = l.k, c[p] = c[p] || [], u && (c[p] = c[p].concat(s)), u || c[p].push(s),
                        function(e, t) {
                            for (var n = e.indexOf(t); - 1 !== n;) e.splice(n, 1), n = e.indexOf(t)
                        }(n.pending, e), t && n.errors.push(t), 0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach(function(e) {
                            a[e] || (a[e] = []), n.loaded[e].length && n.loaded[e].forEach(function(t) {
                                a[e].indexOf(t) < 0 && a[e].push(t)
                            })
                        }), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                }), this.emit("loaded", a), this.queue = this.queue.filter(function(e) {
                    return !e.done
                })
            }
        }, {
            key: "read",
            value: function(e, t, n) {
                var o = this,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350,
                    a = arguments.length > 5 ? arguments[5] : void 0;
                return e.length ? this.backend[n](e, t, function(s, u) {
                    s && u && i < 5 ? setTimeout(function() {
                        o.read.call(o, e, t, n, i + 1, 2 * r, a)
                    }, r) : a(s, u)
                }) : a(null, {})
            }
        }, {
            key: "prepareLoading",
            value: function(e, t) {
                var n = this,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = arguments.length > 3 ? arguments[3] : void 0;
                if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
                "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
                var r = this.queueLoad(e, t, o, i);
                if (!r.toLoad.length) return r.pending.length || i(), null;
                r.toLoad.forEach(function(e) {
                    n.loadOne(e)
                })
            }
        }, {
            key: "load",
            value: function(e, t, n) {
                this.prepareLoading(e, t, {}, n)
            }
        }, {
            key: "reload",
            value: function(e, t, n) {
                this.prepareLoading(e, t, {
                    reload: !0
                }, n)
            }
        }, {
            key: "loadOne",
            value: function(e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    o = e.split("|"),
                    i = o[0],
                    r = o[1];
                this.read(i, r, "read", void 0, void 0, function(o, a) {
                    o && t.logger.warn("".concat(n, "loading namespace ").concat(r, " for language ").concat(i, " failed"), o), !o && a && t.logger.log("".concat(n, "loaded namespace ").concat(r, " for language ").concat(i), a), t.loaded(e, o, a)
                })
            }
        }, {
            key: "saveMissing",
            value: function(e, t, o, i, r) {
                var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t) ? this.logger.warn('did not save key "'.concat(o, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : null != o && "" !== o && (this.backend && this.backend.create && this.backend.create(e, t, o, i, null, n({}, a, {
                    isUpdate: r
                })), e && e[0] && this.store.addResource(e[0], t, o, i))
            }
        }]), t
    }();

    function A(e) {
        return "string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.whitelist && (e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])), e.supportedLngs = e.whitelist), e.nonExplicitWhitelist && (e.nonExplicitSupportedLngs = e.nonExplicitWhitelist), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e
    }

    function U() {}
    return new(function(t) {
        function i() {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments.length > 1 ? arguments[1] : void 0;
            if (o(this, i), e = s(this, u(i).call(this)), S && f.call(a(e)), e.options = A(t), e.services = {}, e.logger = g, e.modules = {
                    external: []
                }, n && !e.isInitialized && !t.isClone) {
                if (!e.options.initImmediate) return e.init(t, n), s(e, a(e));
                setTimeout(function() {
                    e.init(t, n)
                }, 0)
            }
            return e
        }
        return c(i, f), r(i, [{
            key: "init",
            value: function() {
                var t = this,
                    o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = arguments.length > 1 ? arguments[1] : void 0;

                function r(e) {
                    return e ? "function" == typeof e ? new e : e : null
                }
                if ("function" == typeof o && (i = o, o = {}), o.whitelist && !o.supportedLngs && this.logger.deprecate("whitelist", 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'), o.nonExplicitWhitelist && !o.nonExplicitSupportedLngs && this.logger.deprecate("whitelist", 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'), this.options = n({}, {
                        debug: !1,
                        initImmediate: !0,
                        ns: ["translation"],
                        defaultNS: ["translation"],
                        fallbackLng: ["dev"],
                        fallbackNS: !1,
                        whitelist: !1,
                        nonExplicitWhitelist: !1,
                        supportedLngs: !1,
                        nonExplicitSupportedLngs: !1,
                        load: "all",
                        preload: !1,
                        simplifyPluralSuffix: !0,
                        keySeparator: ".",
                        nsSeparator: ":",
                        pluralSeparator: "_",
                        contextSeparator: "_",
                        partialBundledLanguages: !1,
                        saveMissing: !1,
                        updateMissing: !1,
                        saveMissingTo: "fallback",
                        saveMissingPlurals: !0,
                        missingKeyHandler: !1,
                        missingInterpolationHandler: !1,
                        postProcess: !1,
                        postProcessPassResolved: !1,
                        returnNull: !0,
                        returnEmptyString: !0,
                        returnObjects: !1,
                        joinArrays: !1,
                        returnedObjectHandler: !1,
                        parseMissingKeyHandler: !1,
                        appendNamespaceToMissingKey: !1,
                        appendNamespaceToCIMode: !1,
                        overloadTranslationOptionHandler: function(t) {
                            var n = {};
                            if ("object" === e(t[1]) && (n = t[1]), "string" == typeof t[1] && (n.defaultValue = t[1]), "string" == typeof t[2] && (n.tDescription = t[2]), "object" === e(t[2]) || "object" === e(t[3])) {
                                var o = t[3] || t[2];
                                Object.keys(o).forEach(function(e) {
                                    n[e] = o[e]
                                })
                            }
                            return n
                        },
                        interpolation: {
                            escapeValue: !0,
                            format: function(e, t, n, o) {
                                return e
                            },
                            prefix: "{{",
                            suffix: "}}",
                            formatSeparator: ",",
                            unescapePrefix: "-",
                            nestingPrefix: "$t(",
                            nestingSuffix: ")",
                            nestingOptionsSeparator: ",",
                            maxReplaces: 1e3,
                            skipOnVariables: !1
                        }
                    }, this.options, A(o)), this.format = this.options.interpolation.format, i || (i = U), !this.options.isClone) {
                    this.modules.logger ? g.init(r(this.modules.logger), this.options) : g.init(null, this.options);
                    var a = new j(this.options);
                    this.store = new L(this.options.resources, this.options);
                    var s = this.services;
                    s.logger = g, s.resourceStore = this.store, s.languageUtils = a, s.pluralResolver = new F(a, {
                        prepend: this.options.pluralSeparator,
                        compatibilityJSON: this.options.compatibilityJSON,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix
                    }), s.interpolator = new V(this.options), s.utils = {
                        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                    }, s.backendConnector = new T(r(this.modules.backend), s.resourceStore, s, this.options), s.backendConnector.on("*", function(e) {
                        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
                        t.emit.apply(t, [e].concat(o))
                    }), this.modules.languageDetector && (s.languageDetector = r(this.modules.languageDetector), s.languageDetector.init(s, this.options.detection, this.options)), this.modules.i18nFormat && (s.i18nFormat = r(this.modules.i18nFormat), s.i18nFormat.init && s.i18nFormat.init(this)), this.translator = new C(this.services, this.options), this.translator.on("*", function(e) {
                        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
                        t.emit.apply(t, [e].concat(o))
                    }), this.modules.external.forEach(function(e) {
                        e.init && e.init(t)
                    })
                }
                this.modules.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                ["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(function(e) {
                    t[e] = function() {
                        var n;
                        return (n = t.store)[e].apply(n, arguments)
                    }
                });
                var u = h(),
                    l = function() {
                        t.changeLanguage(t.options.lng, function(e, n) {
                            t.isInitialized = !0, t.logger.log("initialized", t.options), t.emit("initialized", t.options), u.resolve(n), i(e, n)
                        })
                    };
                return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0), u
            }
        }, {
            key: "loadResources",
            value: function(e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U,
                    o = "string" == typeof e ? e : this.language;
                if ("function" == typeof e && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
                    if (o && "cimode" === o.toLowerCase()) return n();
                    var i = [],
                        r = function(e) {
                            e && t.services.languageUtils.toResolveHierarchy(e).forEach(function(e) {
                                i.indexOf(e) < 0 && i.push(e)
                            })
                        };
                    if (o) r(o);
                    else this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function(e) {
                        return r(e)
                    });
                    this.options.preload && this.options.preload.forEach(function(e) {
                        return r(e)
                    }), this.services.backendConnector.load(i, this.options.ns, n)
                } else n(null)
            }
        }, {
            key: "reloadResources",
            value: function(e, t, n) {
                var o = h();
                return e || (e = this.languages), t || (t = this.options.ns), n || (n = U), this.services.backendConnector.reload(e, t, function(e) {
                    o.resolve(), n(e)
                }), o
            }
        }, {
            key: "use",
            value: function(e) {
                if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && O.addPostProcessor(e), "3rdParty" === e.type && this.modules.external.push(e), this
            }
        }, {
            key: "changeLanguage",
            value: function(e, t) {
                var n = this;
                this.isLanguageChangingTo = e;
                var o = h();
                this.emit("languageChanging", e);
                var i = function(e) {
                    var i = "string" == typeof e ? e : n.services.languageUtils.getBestMatchFromCodes(e);
                    i && (n.language || (n.language = i, n.languages = n.services.languageUtils.toResolveHierarchy(i)), n.translator.language || n.translator.changeLanguage(i), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(i)), n.loadResources(i, function(e) {
                        ! function(e, i) {
                            i ? (n.language = i, n.languages = n.services.languageUtils.toResolveHierarchy(i), n.translator.changeLanguage(i), n.isLanguageChangingTo = void 0, n.emit("languageChanged", i), n.logger.log("languageChanged", i)) : n.isLanguageChangingTo = void 0, o.resolve(function() {
                                return n.t.apply(n, arguments)
                            }), t && t(e, function() {
                                return n.t.apply(n, arguments)
                            })
                        }(e, i)
                    })
                };
                return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(i) : i(e) : i(this.services.languageDetector.detect()), o
            }
        }, {
            key: "getFixedT",
            value: function(t, o) {
                var i = this,
                    r = function t(o, r) {
                        var a;
                        if ("object" !== e(r)) {
                            for (var s = arguments.length, u = new Array(s > 2 ? s - 2 : 0), l = 2; l < s; l++) u[l - 2] = arguments[l];
                            a = i.options.overloadTranslationOptionHandler([o, r].concat(u))
                        } else a = n({}, r);
                        return a.lng = a.lng || t.lng, a.lngs = a.lngs || t.lngs, a.ns = a.ns || t.ns, i.t(o, a)
                    };
                return "string" == typeof t ? r.lng = t : r.lngs = t, r.ns = o, r
            }
        }, {
            key: "t",
            value: function() {
                var e;
                return this.translator && (e = this.translator).translate.apply(e, arguments)
            }
        }, {
            key: "exists",
            value: function() {
                var e;
                return this.translator && (e = this.translator).exists.apply(e, arguments)
            }
        }, {
            key: "setDefaultNamespace",
            value: function(e) {
                this.options.defaultNS = e
            }
        }, {
            key: "hasLoadedNamespace",
            value: function(e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                var o = this.languages[0],
                    i = !!this.options && this.options.fallbackLng,
                    r = this.languages[this.languages.length - 1];
                if ("cimode" === o.toLowerCase()) return !0;
                var a = function(e, n) {
                    var o = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                    return -1 === o || 2 === o
                };
                if (n.precheck) {
                    var s = n.precheck(this, a);
                    if (void 0 !== s) return s
                }
                return !!this.hasResourceBundle(o, e) || (!this.services.backendConnector.backend || !(!a(o, e) || i && !a(r, e)))
            }
        }, {
            key: "loadNamespaces",
            value: function(e, t) {
                var n = this,
                    o = h();
                return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach(function(e) {
                    n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                }), this.loadResources(function(e) {
                    o.resolve(), t && t(e)
                }), o) : (t && t(), Promise.resolve())
            }
        }, {
            key: "loadLanguages",
            value: function(e, t) {
                var n = h();
                "string" == typeof e && (e = [e]);
                var o = this.options.preload || [],
                    i = e.filter(function(e) {
                        return o.indexOf(e) < 0
                    });
                return i.length ? (this.options.preload = o.concat(i), this.loadResources(function(e) {
                    n.resolve(), t && t(e)
                }), n) : (t && t(), Promise.resolve())
            }
        }, {
            key: "dir",
            value: function(e) {
                if (e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), !e) return "rtl";
                return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0 ? "rtl" : "ltr"
            }
        }, {
            key: "createInstance",
            value: function() {
                return new i(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, arguments.length > 1 ? arguments[1] : void 0)
            }
        }, {
            key: "cloneInstance",
            value: function() {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U,
                    r = n({}, this.options, t, {
                        isClone: !0
                    }),
                    a = new i(r);
                return ["store", "services", "language"].forEach(function(t) {
                    a[t] = e[t]
                }), a.services = n({}, this.services), a.services.utils = {
                    hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
                }, a.translator = new C(a.services, a.options), a.translator.on("*", function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                    a.emit.apply(a, [e].concat(n))
                }), a.init(r, o), a.translator.options = a.options, a.translator.backendConnector.services.utils = {
                    hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
                }, a
            }
        }]), i
    }())
});;
! function(t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).i18nextHttpBackend = t()
}(function() {
    return function r(a, s, u) {
        function f(e, t) {
            if (!s[e]) {
                if (!a[e]) {
                    var n = "function" == typeof require && require;
                    if (!t && n) return n(e, !0);
                    if (l) return l(e, !0);
                    var o = new Error("Cannot find module '" + e + "'");
                    throw o.code = "MODULE_NOT_FOUND", o
                }
                var i = s[e] = {
                    exports: {}
                };
                a[e][0].call(i.exports, function(t) {
                    return f(a[e][1][t] || t)
                }, i, i.exports, r, a, s, u)
            }
            return s[e].exports
        }
        for (var l = "function" == typeof require && require, t = 0; t < u.length; t++) f(u[t]);
        return f
    }({
        1: [function(o, i, r) {
            (function(t) {
                var e, n;
                "function" == typeof fetch && (void 0 !== t && t.fetch ? e = t.fetch : "undefined" != typeof window && window.fetch && (e = window.fetch)), void 0 === o || "undefined" != typeof window && void 0 !== window.document || ((n = e || o("node-fetch")).default && (n = n.default), r.default = n, i.exports = r.default)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "node-fetch": 5
        }],
        2: [function(t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o, a = t("./utils.js"),
                i = (o = t("./request.js")) && o.__esModule ? o : {
                    default: o
                };

            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function s() {
                return {
                    loadPath: "/locales/{{lng}}/{{ns}}.json",
                    addPath: "/locales/add/{{lng}}/{{ns}}",
                    allowMultiLoading: !1,
                    parse: function(t) {
                        return JSON.parse(t)
                    },
                    stringify: JSON.stringify,
                    parsePayload: function(t, e, n) {
                        return r = n || "", (i = e) in (o = {}) ? Object.defineProperty(o, i, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : o[i] = r, o;
                        var o, i, r
                    },
                    request: i.default,
                    reloadInterval: !1,
                    customHeaders: {},
                    queryStringParams: {},
                    crossDomain: !1,
                    withCredentials: !1,
                    overrideMimeType: !1,
                    requestOptions: {
                        mode: "cors",
                        credentials: "same-origin",
                        cache: "default"
                    }
                }
            }
            var u, f, l, c = (u = d, (f = [{
                key: "init",
                value: function(t, e, n) {
                    var o = this,
                        i = 1 < arguments.length && void 0 !== e ? e : {},
                        r = 2 < arguments.length && void 0 !== n ? n : {};
                    this.services = t, this.options = (0, a.defaults)(i, this.options || {}, s()), this.allOptions = r, this.options.reloadInterval && setInterval(function() {
                        return o.reload()
                    }, this.options.reloadInterval)
                }
            }, {
                key: "readMulti",
                value: function(t, e, n) {
                    var o = this.options.loadPath;
                    "function" == typeof this.options.loadPath && (o = this.options.loadPath(t, e));
                    var i = this.services.interpolator.interpolate(o, {
                        lng: t.join("+"),
                        ns: e.join("+")
                    });
                    this.loadUrl(i, n, t, e)
                }
            }, {
                key: "read",
                value: function(t, e, n) {
                    var o = this.options.loadPath;
                    "function" == typeof this.options.loadPath && (o = this.options.loadPath([t], [e]));
                    var i = this.services.interpolator.interpolate(o, {
                        lng: t,
                        ns: e
                    });
                    this.loadUrl(i, n, t, e)
                }
            }, {
                key: "loadUrl",
                value: function(i, r, a, s) {
                    var u = this;
                    this.options.request(this.options, i, void 0, function(t, e) {
                        if (e && 500 <= e.status && e.status < 600) return r("failed loading " + i, !0);
                        if (e && 400 <= e.status && e.status < 500) return r("failed loading " + i, !1);
                        if (t) return r(t, !1);
                        var n, o;
                        try {
                            n = "string" == typeof e.data ? u.options.parse(e.data, a, s) : e.data
                        } catch (t) {
                            o = "failed parsing " + i + " to json"
                        }
                        if (o) return r(o, !1);
                        r(null, n)
                    })
                }
            }, {
                key: "create",
                value: function(t, n, e, o) {
                    var i, r = this;
                    this.options.addPath && ("string" == typeof t && (t = [t]), i = this.options.parsePayload(n, e, o), t.forEach(function(t) {
                        var e = r.services.interpolator.interpolate(r.options.addPath, {
                            lng: t,
                            ns: n
                        });
                        r.options.request(r.options, e, i, function(t, e) {})
                    }))
                }
            }, {
                key: "reload",
                value: function() {
                    var e, t, n = this,
                        o = this.services,
                        i = o.backendConnector,
                        r = o.languageUtils,
                        a = o.logger,
                        s = i.language;
                    s && "cimode" === s.toLowerCase() || (e = [], (t = function(t) {
                        r.toResolveHierarchy(t).forEach(function(t) {
                            e.indexOf(t) < 0 && e.push(t)
                        })
                    })(s), this.allOptions.preload && this.allOptions.preload.forEach(t), e.forEach(function(o) {
                        n.allOptions.ns.forEach(function(n) {
                            i.read(o, n, "read", null, null, function(t, e) {
                                t && a.warn("loading namespace ".concat(n, " for language ").concat(o, " failed"), t), !t && e && a.log("loaded namespace ".concat(n, " for language ").concat(o), e), i.loaded("".concat(o, "|").concat(n), t, e)
                            })
                        })
                    }))
                }
            }]) && r(u.prototype, f), l && r(u, l), d);

            function d(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, d), this.services = t, this.options = e, this.allOptions = n, this.type = "backend", this.init(t, e, n)
            }
            c.type = "backend", n.default = c, e.exports = n.default
        }, {
            "./request.js": 3,
            "./utils.js": 4
        }],
        3: [function(o, i, d) {
            (function(t) {
                "use strict";
                Object.defineProperty(d, "__esModule", {
                    value: !0
                }), d.default = void 0;
                var r, s, u, a = o("./utils.js"),
                    e = function(t) {
                        if (t && t.__esModule) return t;
                        if (null === t || "object" !== l(t) && "function" != typeof t) return {
                            default: t
                        };
                        var e = f();
                        if (e && e.has(t)) return e.get(t);
                        var n = {},
                            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var i in t) {
                            var r;
                            Object.prototype.hasOwnProperty.call(t, i) && ((r = o ? Object.getOwnPropertyDescriptor(t, i) : null) && (r.get || r.set) ? Object.defineProperty(n, i, r) : n[i] = t[i])
                        }
                        n.default = t, e && e.set(t, n);
                        return n
                    }(o("./getFetch.js"));

                function f() {
                    if ("function" != typeof WeakMap) return null;
                    var t = new WeakMap;
                    return f = function() {
                        return t
                    }, t
                }

                function l(t) {
                    return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }
                "function" == typeof fetch && (void 0 !== t && t.fetch ? r = t.fetch : "undefined" != typeof window && window.fetch && (r = window.fetch)), "function" == typeof XMLHttpRequest && (void 0 !== t && t.XMLHttpRequest ? s = t.XMLHttpRequest : "undefined" != typeof window && window.XMLHttpRequest && (s = window.XMLHttpRequest)), "function" == typeof ActiveXObject && (void 0 !== t && t.ActiveXObject ? u = t.ActiveXObject : "undefined" != typeof window && window.ActiveXObject && (u = window.ActiveXObject)), r || !e || s || u || (r = e.default || e), "function" != typeof r && (r = void 0);

                function c(t, e) {
                    if (e && "object" === l(e)) {
                        var n = "";
                        for (var o in e) n += "&" + encodeURIComponent(o) + "=" + encodeURIComponent(e[o]);
                        if (!n) return t;
                        t = t + (-1 !== t.indexOf("?") ? "&" : "?") + n.slice(1)
                    }
                    return t
                }

                function n(t, e, n, o) {
                    return "function" == typeof n && (o = n, n = void 0), o = o || function() {}, r ? function(t, e, n, o) {
                        t.queryStringParams && (e = c(e, t.queryStringParams));
                        var i = (0, a.defaults)({}, t.customHeaders);
                        n && (i["Content-Type"] = "application/json"), r(e, (0, a.defaults)({
                            method: n ? "POST" : "GET",
                            body: n ? t.stringify(n) : void 0,
                            headers: i
                        }, "function" == typeof t.requestOptions ? t.requestOptions(n) : t.requestOptions)).then(function(e) {
                            return e.ok ? void e.text().then(function(t) {
                                o(null, {
                                    status: e.status,
                                    data: t
                                })
                            }).catch(o) : o(e.statusText || "Error", {
                                status: e.status
                            })
                        }).catch(o)
                    }(t, e, n, o) : "function" == typeof XMLHttpRequest || "function" == typeof ActiveXObject ? function(t, e, n, o) {
                        n && "object" === l(n) && (n = c("", n).slice(1)), t.queryStringParams && (e = c(e, t.queryStringParams));
                        try {
                            var i = s ? new s : new u("MSXML2.XMLHTTP.3.0");
                            i.open(n ? "POST" : "GET", e, 1), t.crossDomain || i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.withCredentials = !!t.withCredentials, n && i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.overrideMimeType && i.overrideMimeType("application/json");
                            var r = t.customHeaders;
                            if (r = "function" == typeof r ? r() : r)
                                for (var a in r) i.setRequestHeader(a, r[a]);
                            i.onreadystatechange = function() {
                                3 < i.readyState && o(400 <= i.status ? i.statusText : null, {
                                    status: i.status,
                                    data: i.responseText
                                })
                            }, i.send(n)
                        } catch (t) {
                            console && console.log(t)
                        }
                    }(t, e, n, o) : void 0
                }
                d.default = n, i.exports = d.default
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./getFetch.js": 1,
            "./utils.js": 4
        }],
        4: [function(t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.defaults = function(n) {
                return i.call(r.call(arguments, 1), function(t) {
                    if (t)
                        for (var e in t) void 0 === n[e] && (n[e] = t[e])
                }), n
            };
            var o = [],
                i = o.forEach,
                r = o.slice
        }, {}],
        5: [function(t, e, n) {}, {}]
    }, {}, [2])(2)
});;
! function(a, b) {
    "object" == typeof exports && "object" == typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? exports.Handlebars = b() : a.Handlebars = b()
}(this, function() {
    return function(a) {
        function b(d) {
            if (c[d]) return c[d].exports;
            var e = c[d] = {
                exports: {},
                id: d,
                loaded: !1
            };
            return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
        }
        var c = {};
        return b.m = a, b.c = c, b.p = "", b(0)
    }([function(a, b, c) {
        "use strict";

        function d() {
            var a = r();
            return a.compile = function(b, c) {
                return k.compile(b, c, a)
            }, a.precompile = function(b, c) {
                return k.precompile(b, c, a)
            }, a.AST = i["default"], a.Compiler = k.Compiler, a.JavaScriptCompiler = m["default"], a.Parser = j.parser, a.parse = j.parse, a
        }
        var e = c(1)["default"];
        b.__esModule = !0;
        var f = c(2),
            g = e(f),
            h = c(35),
            i = e(h),
            j = c(36),
            k = c(41),
            l = c(42),
            m = e(l),
            n = c(39),
            o = e(n),
            p = c(34),
            q = e(p),
            r = g["default"].create,
            s = d();
        s.create = d, q["default"](s), s.Visitor = o["default"], s["default"] = s, b["default"] = s, a.exports = b["default"]
    }, function(a, b) {
        "use strict";
        b["default"] = function(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }, b.__esModule = !0
    }, function(a, b, c) {
        "use strict";

        function d() {
            var a = new h.HandlebarsEnvironment;
            return n.extend(a, h), a.SafeString = j["default"], a.Exception = l["default"], a.Utils = n, a.escapeExpression = n.escapeExpression, a.VM = p, a.template = function(b) {
                return p.template(b, a)
            }, a
        }
        var e = c(3)["default"],
            f = c(1)["default"];
        b.__esModule = !0;
        var g = c(4),
            h = e(g),
            i = c(21),
            j = f(i),
            k = c(6),
            l = f(k),
            m = c(5),
            n = e(m),
            o = c(22),
            p = e(o),
            q = c(34),
            r = f(q),
            s = d();
        s.create = d, r["default"](s), s["default"] = s, b["default"] = s, a.exports = b["default"]
    }, function(a, b) {
        "use strict";
        b["default"] = function(a) {
            if (a && a.__esModule) return a;
            var b = {};
            if (null != a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
            return b["default"] = a, b
        }, b.__esModule = !0
    }, function(a, b, c) {
        "use strict";

        function d(a, b, c) {
            this.helpers = a || {}, this.partials = b || {}, this.decorators = c || {}, i.registerDefaultHelpers(this), j.registerDefaultDecorators(this)
        }
        var e = c(1)["default"];
        b.__esModule = !0, b.HandlebarsEnvironment = d;
        var f = c(5),
            g = c(6),
            h = e(g),
            i = c(10),
            j = c(18),
            k = c(20),
            l = e(k),
            m = "4.1.2";
        b.VERSION = m;
        var n = 7;
        b.COMPILER_REVISION = n;
        var o = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: "== 1.x.x",
            5: "== 2.0.0-alpha.x",
            6: ">= 2.0.0-beta.1",
            7: ">= 4.0.0"
        };
        b.REVISION_CHANGES = o;
        var p = "[object Object]";
        d.prototype = {
            constructor: d,
            logger: l["default"],
            log: l["default"].log,
            registerHelper: function(a, b) {
                if (f.toString.call(a) === p) {
                    if (b) throw new h["default"]("Arg not supported with multiple helpers");
                    f.extend(this.helpers, a)
                } else this.helpers[a] = b
            },
            unregisterHelper: function(a) {
                delete this.helpers[a]
            },
            registerPartial: function(a, b) {
                if (f.toString.call(a) === p) f.extend(this.partials, a);
                else {
                    if ("undefined" == typeof b) throw new h["default"]('Attempting to register a partial called "' + a + '" as undefined');
                    this.partials[a] = b
                }
            },
            unregisterPartial: function(a) {
                delete this.partials[a]
            },
            registerDecorator: function(a, b) {
                if (f.toString.call(a) === p) {
                    if (b) throw new h["default"]("Arg not supported with multiple decorators");
                    f.extend(this.decorators, a)
                } else this.decorators[a] = b
            },
            unregisterDecorator: function(a) {
                delete this.decorators[a]
            }
        };
        var q = l["default"].log;
        b.log = q, b.createFrame = f.createFrame, b.logger = l["default"]
    }, function(a, b) {
        "use strict";

        function c(a) {
            return k[a]
        }

        function d(a) {
            for (var b = 1; b < arguments.length; b++)
                for (var c in arguments[b]) Object.prototype.hasOwnProperty.call(arguments[b], c) && (a[c] = arguments[b][c]);
            return a
        }

        function e(a, b) {
            for (var c = 0, d = a.length; c < d; c++)
                if (a[c] === b) return c;
            return -1
        }

        function f(a) {
            if ("string" != typeof a) {
                if (a && a.toHTML) return a.toHTML();
                if (null == a) return "";
                if (!a) return a + "";
                a = "" + a
            }
            return m.test(a) ? a.replace(l, c) : a
        }

        function g(a) {
            return !a && 0 !== a || !(!p(a) || 0 !== a.length)
        }

        function h(a) {
            var b = d({}, a);
            return b._parent = a, b
        }

        function i(a, b) {
            return a.path = b, a
        }

        function j(a, b) {
            return (a ? a + "." : "") + b
        }
        b.__esModule = !0, b.extend = d, b.indexOf = e, b.escapeExpression = f, b.isEmpty = g, b.createFrame = h, b.blockParams = i, b.appendContextPath = j;
        var k = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;",
                "=": "&#x3D;"
            },
            l = /[&<>"'`=]/g,
            m = /[&<>"'`=]/,
            n = Object.prototype.toString;
        b.toString = n;
        var o = function(a) {
            return "function" == typeof a
        };
        o(/x/) && (b.isFunction = o = function(a) {
            return "function" == typeof a && "[object Function]" === n.call(a)
        }), b.isFunction = o;
        var p = Array.isArray || function(a) {
            return !(!a || "object" != typeof a) && "[object Array]" === n.call(a)
        };
        b.isArray = p
    }, function(a, b, c) {
        "use strict";

        function d(a, b) {
            var c = b && b.loc,
                g = void 0,
                h = void 0;
            c && (g = c.start.line, h = c.start.column, a += " - " + g + ":" + h);
            for (var i = Error.prototype.constructor.call(this, a), j = 0; j < f.length; j++) this[f[j]] = i[f[j]];
            Error.captureStackTrace && Error.captureStackTrace(this, d);
            try {
                c && (this.lineNumber = g, e ? Object.defineProperty(this, "column", {
                    value: h,
                    enumerable: !0
                }) : this.column = h)
            } catch (k) {}
        }
        var e = c(7)["default"];
        b.__esModule = !0;
        var f = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        d.prototype = new Error, b["default"] = d, a.exports = b["default"]
    }, function(a, b, c) {
        a.exports = {
            "default": c(8),
            __esModule: !0
        }
    }, function(a, b, c) {
        var d = c(9);
        a.exports = function(a, b, c) {
            return d.setDesc(a, b, c)
        }
    }, function(a, b) {
        var c = Object;
        a.exports = {
            create: c.create,
            getProto: c.getPrototypeOf,
            isEnum: {}.propertyIsEnumerable,
            getDesc: c.getOwnPropertyDescriptor,
            setDesc: c.defineProperty,
            setDescs: c.defineProperties,
            getKeys: c.keys,
            getNames: c.getOwnPropertyNames,
            getSymbols: c.getOwnPropertySymbols,
            each: [].forEach
        }
    }, function(a, b, c) {
        "use strict";

        function d(a) {
            g["default"](a), i["default"](a), k["default"](a), m["default"](a), o["default"](a), q["default"](a), s["default"](a)
        }
        var e = c(1)["default"];
        b.__esModule = !0, b.registerDefaultHelpers = d;
        var f = c(11),
            g = e(f),
            h = c(12),
            i = e(h),
            j = c(13),
            k = e(j),
            l = c(14),
            m = e(l),
            n = c(15),
            o = e(n),
            p = c(16),
            q = e(p),
            r = c(17),
            s = e(r)
    }, function(a, b, c) {
        "use strict";
        b.__esModule = !0;
        var d = c(5);
        b["default"] = function(a) {
            a.registerHelper("blockHelperMissing", function(b, c) {
                var e = c.inverse,
                    f = c.fn;
                if (b === !0) return f(this);
                if (b === !1 || null == b) return e(this);
                if (d.isArray(b)) return b.length > 0 ? (c.ids && (c.ids = [c.name]), a.helpers.each(b, c)) : e(this);
                if (c.data && c.ids) {
                    var g = d.createFrame(c.data);
                    g.contextPath = d.appendContextPath(c.data.contextPath, c.name), c = {
                        data: g
                    }
                }
                return f(b, c)
            })
        }, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";
        var d = c(1)["default"];
        b.__esModule = !0;
        var e = c(5),
            f = c(6),
            g = d(f);
        b["default"] = function(a) {
            a.registerHelper("each", function(a, b) {
                function c(b, c, f) {
                    j && (j.key = b, j.index = c, j.first = 0 === c, j.last = !!f, k && (j.contextPath = k + b)), i += d(a[b], {
                        data: j,
                        blockParams: e.blockParams([a[b], b], [k + b, null])
                    })
                }
                if (!b) throw new g["default"]("Must pass iterator to #each");
                var d = b.fn,
                    f = b.inverse,
                    h = 0,
                    i = "",
                    j = void 0,
                    k = void 0;
                if (b.data && b.ids && (k = e.appendContextPath(b.data.contextPath, b.ids[0]) + "."), e.isFunction(a) && (a = a.call(this)), b.data && (j = e.createFrame(b.data)), a && "object" == typeof a)
                    if (e.isArray(a))
                        for (var l = a.length; h < l; h++) h in a && c(h, h, h === a.length - 1);
                    else {
                        var m = void 0;
                        for (var n in a) a.hasOwnProperty(n) && (void 0 !== m && c(m, h - 1), m = n, h++);
                        void 0 !== m && c(m, h - 1, !0)
                    } return 0 === h && (i = f(this)), i
            })
        }, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";
        var d = c(1)["default"];
        b.__esModule = !0;
        var e = c(6),
            f = d(e);
        b["default"] = function(a) {
            a.registerHelper("helperMissing", function() {
                if (1 !== arguments.length) throw new f["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"')
            })
        }, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";
        b.__esModule = !0;
        var d = c(5);
        b["default"] = function(a) {
            a.registerHelper("if", function(a, b) {
                return d.isFunction(a) && (a = a.call(this)), !b.hash.includeZero && !a || d.isEmpty(a) ? b.inverse(this) : b.fn(this)
            }), a.registerHelper("unless", function(b, c) {
                return a.helpers["if"].call(this, b, {
                    fn: c.inverse,
                    inverse: c.fn,
                    hash: c.hash
                })
            })
        }, a.exports = b["default"]
    }, function(a, b) {
        "use strict";
        b.__esModule = !0, b["default"] = function(a) {
            a.registerHelper("log", function() {
                for (var b = [void 0], c = arguments[arguments.length - 1], d = 0; d < arguments.length - 1; d++) b.push(arguments[d]);
                var e = 1;
                null != c.hash.level ? e = c.hash.level : c.data && null != c.data.level && (e = c.data.level), b[0] = e, a.log.apply(a, b)
            })
        }, a.exports = b["default"]
    }, function(a, b) {
        "use strict";
        b.__esModule = !0, b["default"] = function(a) {
            a.registerHelper("lookup", function(a, b) {
                if (!a) return a;
                if ("constructor" !== b || a.propertyIsEnumerable(b)) return a[b]
            })
        }, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";
        b.__esModule = !0;
        var d = c(5);
        b["default"] = function(a) {
            a.registerHelper("with", function(a, b) {
                d.isFunction(a) && (a = a.call(this));
                var c = b.fn;
                if (d.isEmpty(a)) return b.inverse(this);
                var e = b.data;
                return b.data && b.ids && (e = d.createFrame(b.data), e.contextPath = d.appendContextPath(b.data.contextPath, b.ids[0])), c(a, {
                    data: e,
                    blockParams: d.blockParams([a], [e && e.contextPath])
                })
            })
        }, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";

        function d(a) {
            g["default"](a)
        }
        var e = c(1)["default"];
        b.__esModule = !0, b.registerDefaultDecorators = d;
        var f = c(19),
            g = e(f)
    }, function(a, b, c) {
        "use strict";
        b.__esModule = !0;
        var d = c(5);
        b["default"] = function(a) {
            a.registerDecorator("inline", function(a, b, c, e) {
                var f = a;
                return b.partials || (b.partials = {}, f = function(e, f) {
                    var g = c.partials;
                    c.partials = d.extend({}, g, b.partials);
                    var h = a(e, f);
                    return c.partials = g, h
                }), b.partials[e.args[0]] = e.fn, f
            })
        }, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";
        b.__esModule = !0;
        var d = c(5),
            e = {
                methodMap: ["debug", "info", "warn", "error"],
                level: "info",
                lookupLevel: function(a) {
                    if ("string" == typeof a) {
                        var b = d.indexOf(e.methodMap, a.toLowerCase());
                        a = b >= 0 ? b : parseInt(a, 10)
                    }
                    return a
                },
                log: function(a) {
                    if (a = e.lookupLevel(a), "undefined" != typeof console && e.lookupLevel(e.level) <= a) {
                        var b = e.methodMap[a];
                        console[b] || (b = "log");
                        for (var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++) d[f - 1] = arguments[f];
                        console[b].apply(console, d)
                    }
                }
            };
        b["default"] = e, a.exports = b["default"]
    }, function(a, b) {
        "use strict";

        function c(a) {
            this.string = a
        }
        b.__esModule = !0, c.prototype.toString = c.prototype.toHTML = function() {
            return "" + this.string
        }, b["default"] = c, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";

        function d(a) {
            var b = a && a[0] || 1,
                c = s.COMPILER_REVISION;
            if (b !== c) {
                if (b < c) {
                    var d = s.REVISION_CHANGES[c],
                        e = s.REVISION_CHANGES[b];
                    throw new r["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").")
                }
                throw new r["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").")
            }
        }

        function e(a, b) {
            function c(c, d, e) {
                e.hash && (d = p.extend({}, d, e.hash), e.ids && (e.ids[0] = !0)), c = b.VM.resolvePartial.call(this, c, d, e);
                var f = b.VM.invokePartial.call(this, c, d, e);
                if (null == f && b.compile && (e.partials[e.name] = b.compile(c, a.compilerOptions, b), f = e.partials[e.name](d, e)), null != f) {
                    if (e.indent) {
                        for (var g = f.split("\n"), h = 0, i = g.length; h < i && (g[h] || h + 1 !== i); h++) g[h] = e.indent + g[h];
                        f = g.join("\n")
                    }
                    return f
                }
                throw new r["default"]("The partial " + e.name + " could not be compiled when running in runtime-only mode")
            }

            function d(b) {
                function c(b) {
                    return "" + a.main(e, b, e.helpers, e.partials, g, i, h)
                }
                var f = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    g = f.data;
                d._setup(f), !f.partial && a.useData && (g = j(b, g));
                var h = void 0,
                    i = a.useBlockParams ? [] : void 0;
                return a.useDepths && (h = f.depths ? b != f.depths[0] ? [b].concat(f.depths) : f.depths : [b]), (c = k(a.main, c, e, f.depths || [], g, i))(b, f)
            }
            if (!b) throw new r["default"]("No environment passed to template");
            if (!a || !a.main) throw new r["default"]("Unknown template object: " + typeof a);
            a.main.decorator = a.main_d, b.VM.checkRevision(a.compiler);
            var e = {
                strict: function(a, b) {
                    if (!(b in a)) throw new r["default"]('"' + b + '" not defined in ' + a);
                    return a[b]
                },
                lookup: function(a, b) {
                    for (var c = a.length, d = 0; d < c; d++)
                        if (a[d] && null != a[d][b]) return a[d][b]
                },
                lambda: function(a, b) {
                    return "function" == typeof a ? a.call(b) : a
                },
                escapeExpression: p.escapeExpression,
                invokePartial: c,
                fn: function(b) {
                    var c = a[b];
                    return c.decorator = a[b + "_d"], c
                },
                programs: [],
                program: function(a, b, c, d, e) {
                    var g = this.programs[a],
                        h = this.fn(a);
                    return b || e || d || c ? g = f(this, a, h, b, c, d, e) : g || (g = this.programs[a] = f(this, a, h)), g
                },
                data: function(a, b) {
                    for (; a && b--;) a = a._parent;
                    return a
                },
                merge: function(a, b) {
                    var c = a || b;
                    return a && b && a !== b && (c = p.extend({}, b, a)), c
                },
                nullContext: l({}),
                noop: b.VM.noop,
                compilerInfo: a.compiler
            };
            return d.isTop = !0, d._setup = function(c) {
                c.partial ? (e.helpers = c.helpers, e.partials = c.partials, e.decorators = c.decorators) : (e.helpers = e.merge(c.helpers, b.helpers), a.usePartial && (e.partials = e.merge(c.partials, b.partials)), (a.usePartial || a.useDecorators) && (e.decorators = e.merge(c.decorators, b.decorators)))
            }, d._child = function(b, c, d, g) {
                if (a.useBlockParams && !d) throw new r["default"]("must pass block params");
                if (a.useDepths && !g) throw new r["default"]("must pass parent depths");
                return f(e, b, a[b], c, 0, d, g)
            }, d
        }

        function f(a, b, c, d, e, f, g) {
            function h(b) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    h = g;
                return !g || b == g[0] || b === a.nullContext && null === g[0] || (h = [b].concat(g)), c(a, b, a.helpers, a.partials, e.data || d, f && [e.blockParams].concat(f), h)
            }
            return h = k(c, h, a, g, d, f), h.program = b, h.depth = g ? g.length : 0, h.blockParams = e || 0, h
        }

        function g(a, b, c) {
            return a ? a.call || c.name || (c.name = a, a = c.partials[a]) : a = "@partial-block" === c.name ? c.data["partial-block"] : c.partials[c.name], a
        }

        function h(a, b, c) {
            var d = c.data && c.data["partial-block"];
            c.partial = !0, c.ids && (c.data.contextPath = c.ids[0] || c.data.contextPath);
            var e = void 0;
            if (c.fn && c.fn !== i && ! function() {
                    c.data = s.createFrame(c.data);
                    var a = c.fn;
                    e = c.data["partial-block"] = function(b) {
                        var c = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        return c.data = s.createFrame(c.data), c.data["partial-block"] = d, a(b, c)
                    }, a.partials && (c.partials = p.extend({}, c.partials, a.partials))
                }(), void 0 === a && e && (a = e), void 0 === a) throw new r["default"]("The partial " + c.name + " could not be found");
            if (a instanceof Function) return a(b, c)
        }

        function i() {
            return ""
        }

        function j(a, b) {
            return b && "root" in b || (b = b ? s.createFrame(b) : {}, b.root = a), b
        }

        function k(a, b, c, d, e, f) {
            if (a.decorator) {
                var g = {};
                b = a.decorator(b, g, c, d && d[0], e, f, d), p.extend(b, g)
            }
            return b
        }
        var l = c(23)["default"],
            m = c(3)["default"],
            n = c(1)["default"];
        b.__esModule = !0, b.checkRevision = d, b.template = e, b.wrapProgram = f, b.resolvePartial = g, b.invokePartial = h, b.noop = i;
        var o = c(5),
            p = m(o),
            q = c(6),
            r = n(q),
            s = c(4)
    }, function(a, b, c) {
        a.exports = {
            "default": c(24),
            __esModule: !0
        }
    }, function(a, b, c) {
        c(25), a.exports = c(30).Object.seal
    }, function(a, b, c) {
        var d = c(26);
        c(27)("seal", function(a) {
            return function(b) {
                return a && d(b) ? a(b) : b
            }
        })
    }, function(a, b) {
        a.exports = function(a) {
            return "object" == typeof a ? null !== a : "function" == typeof a
        }
    }, function(a, b, c) {
        var d = c(28),
            e = c(30),
            f = c(33);
        a.exports = function(a, b) {
            var c = (e.Object || {})[a] || Object[a],
                g = {};
            g[a] = b(c), d(d.S + d.F * f(function() {
                c(1)
            }), "Object", g)
        }
    }, function(a, b, c) {
        var d = c(29),
            e = c(30),
            f = c(31),
            g = "prototype",
            h = function(a, b, c) {
                var i, j, k, l = a & h.F,
                    m = a & h.G,
                    n = a & h.S,
                    o = a & h.P,
                    p = a & h.B,
                    q = a & h.W,
                    r = m ? e : e[b] || (e[b] = {}),
                    s = m ? d : n ? d[b] : (d[b] || {})[g];
                m && (c = b);
                for (i in c) j = !l && s && i in s, j && i in r || (k = j ? s[i] : c[i], r[i] = m && "function" != typeof s[i] ? c[i] : p && j ? f(k, d) : q && s[i] == k ? function(a) {
                    var b = function(b) {
                        return this instanceof a ? new a(b) : a(b)
                    };
                    return b[g] = a[g], b
                }(k) : o && "function" == typeof k ? f(Function.call, k) : k, o && ((r[g] || (r[g] = {}))[i] = k))
            };
        h.F = 1, h.G = 2, h.S = 4, h.P = 8, h.B = 16, h.W = 32, a.exports = h
    }, function(a, b) {
        var c = a.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = c)
    }, function(a, b) {
        var c = a.exports = {
            version: "1.2.6"
        };
        "number" == typeof __e && (__e = c)
    }, function(a, b, c) {
        var d = c(32);
        a.exports = function(a, b, c) {
            if (d(a), void 0 === b) return a;
            switch (c) {
                case 1:
                    return function(c) {
                        return a.call(b, c)
                    };
                case 2:
                    return function(c, d) {
                        return a.call(b, c, d)
                    };
                case 3:
                    return function(c, d, e) {
                        return a.call(b, c, d, e)
                    }
            }
            return function() {
                return a.apply(b, arguments)
            }
        }
    }, function(a, b) {
        a.exports = function(a) {
            if ("function" != typeof a) throw TypeError(a + " is not a function!");
            return a
        }
    }, function(a, b) {
        a.exports = function(a) {
            try {
                return !!a()
            } catch (b) {
                return !0
            }
        }
    }, function(a, b) {
        (function(c) {
            "use strict";
            b.__esModule = !0, b["default"] = function(a) {
                var b = "undefined" != typeof c ? c : window,
                    d = b.Handlebars;
                a.noConflict = function() {
                    return b.Handlebars === a && (b.Handlebars = d), a
                }
            }, a.exports = b["default"]
        }).call(b, function() {
            return this
        }())
    }, function(a, b) {
        "use strict";
        b.__esModule = !0;
        var c = {
            helpers: {
                helperExpression: function(a) {
                    return "SubExpression" === a.type || ("MustacheStatement" === a.type || "BlockStatement" === a.type) && !!(a.params && a.params.length || a.hash)
                },
                scopedId: function(a) {
                    return /^\.|this\b/.test(a.original)
                },
                simpleId: function(a) {
                    return 1 === a.parts.length && !c.helpers.scopedId(a) && !a.depth
                }
            }
        };
        b["default"] = c, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";

        function d(a, b) {
            if ("Program" === a.type) return a;
            h["default"].yy = n, n.locInfo = function(a) {
                return new n.SourceLocation(b && b.srcName, a)
            };
            var c = new j["default"](b);
            return c.accept(h["default"].parse(a))
        }
        var e = c(1)["default"],
            f = c(3)["default"];
        b.__esModule = !0, b.parse = d;
        var g = c(37),
            h = e(g),
            i = c(38),
            j = e(i),
            k = c(40),
            l = f(k),
            m = c(5);
        b.parser = h["default"];
        var n = {};
        m.extend(n, l)
    }, function(a, b) {
        "use strict";
        b.__esModule = !0;
        var c = function() {
            function a() {
                this.yy = {}
            }
            var b = {
                    trace: function() {},
                    yy: {},
                    symbols_: {
                        error: 2,
                        root: 3,
                        program: 4,
                        EOF: 5,
                        program_repetition0: 6,
                        statement: 7,
                        mustache: 8,
                        block: 9,
                        rawBlock: 10,
                        partial: 11,
                        partialBlock: 12,
                        content: 13,
                        COMMENT: 14,
                        CONTENT: 15,
                        openRawBlock: 16,
                        rawBlock_repetition_plus0: 17,
                        END_RAW_BLOCK: 18,
                        OPEN_RAW_BLOCK: 19,
                        helperName: 20,
                        openRawBlock_repetition0: 21,
                        openRawBlock_option0: 22,
                        CLOSE_RAW_BLOCK: 23,
                        openBlock: 24,
                        block_option0: 25,
                        closeBlock: 26,
                        openInverse: 27,
                        block_option1: 28,
                        OPEN_BLOCK: 29,
                        openBlock_repetition0: 30,
                        openBlock_option0: 31,
                        openBlock_option1: 32,
                        CLOSE: 33,
                        OPEN_INVERSE: 34,
                        openInverse_repetition0: 35,
                        openInverse_option0: 36,
                        openInverse_option1: 37,
                        openInverseChain: 38,
                        OPEN_INVERSE_CHAIN: 39,
                        openInverseChain_repetition0: 40,
                        openInverseChain_option0: 41,
                        openInverseChain_option1: 42,
                        inverseAndProgram: 43,
                        INVERSE: 44,
                        inverseChain: 45,
                        inverseChain_option0: 46,
                        OPEN_ENDBLOCK: 47,
                        OPEN: 48,
                        mustache_repetition0: 49,
                        mustache_option0: 50,
                        OPEN_UNESCAPED: 51,
                        mustache_repetition1: 52,
                        mustache_option1: 53,
                        CLOSE_UNESCAPED: 54,
                        OPEN_PARTIAL: 55,
                        partialName: 56,
                        partial_repetition0: 57,
                        partial_option0: 58,
                        openPartialBlock: 59,
                        OPEN_PARTIAL_BLOCK: 60,
                        openPartialBlock_repetition0: 61,
                        openPartialBlock_option0: 62,
                        param: 63,
                        sexpr: 64,
                        OPEN_SEXPR: 65,
                        sexpr_repetition0: 66,
                        sexpr_option0: 67,
                        CLOSE_SEXPR: 68,
                        hash: 69,
                        hash_repetition_plus0: 70,
                        hashSegment: 71,
                        ID: 72,
                        EQUALS: 73,
                        blockParams: 74,
                        OPEN_BLOCK_PARAMS: 75,
                        blockParams_repetition_plus0: 76,
                        CLOSE_BLOCK_PARAMS: 77,
                        path: 78,
                        dataName: 79,
                        STRING: 80,
                        NUMBER: 81,
                        BOOLEAN: 82,
                        UNDEFINED: 83,
                        NULL: 84,
                        DATA: 85,
                        pathSegments: 86,
                        SEP: 87,
                        $accept: 0,
                        $end: 1
                    },
                    terminals_: {
                        2: "error",
                        5: "EOF",
                        14: "COMMENT",
                        15: "CONTENT",
                        18: "END_RAW_BLOCK",
                        19: "OPEN_RAW_BLOCK",
                        23: "CLOSE_RAW_BLOCK",
                        29: "OPEN_BLOCK",
                        33: "CLOSE",
                        34: "OPEN_INVERSE",
                        39: "OPEN_INVERSE_CHAIN",
                        44: "INVERSE",
                        47: "OPEN_ENDBLOCK",
                        48: "OPEN",
                        51: "OPEN_UNESCAPED",
                        54: "CLOSE_UNESCAPED",
                        55: "OPEN_PARTIAL",
                        60: "OPEN_PARTIAL_BLOCK",
                        65: "OPEN_SEXPR",
                        68: "CLOSE_SEXPR",
                        72: "ID",
                        73: "EQUALS",
                        75: "OPEN_BLOCK_PARAMS",
                        77: "CLOSE_BLOCK_PARAMS",
                        80: "STRING",
                        81: "NUMBER",
                        82: "BOOLEAN",
                        83: "UNDEFINED",
                        84: "NULL",
                        85: "DATA",
                        87: "SEP"
                    },
                    productions_: [0, [3, 2],
                        [4, 1],
                        [7, 1],
                        [7, 1],
                        [7, 1],
                        [7, 1],
                        [7, 1],
                        [7, 1],
                        [7, 1],
                        [13, 1],
                        [10, 3],
                        [16, 5],
                        [9, 4],
                        [9, 4],
                        [24, 6],
                        [27, 6],
                        [38, 6],
                        [43, 2],
                        [45, 3],
                        [45, 1],
                        [26, 3],
                        [8, 5],
                        [8, 5],
                        [11, 5],
                        [12, 3],
                        [59, 5],
                        [63, 1],
                        [63, 1],
                        [64, 5],
                        [69, 1],
                        [71, 3],
                        [74, 3],
                        [20, 1],
                        [20, 1],
                        [20, 1],
                        [20, 1],
                        [20, 1],
                        [20, 1],
                        [20, 1],
                        [56, 1],
                        [56, 1],
                        [79, 2],
                        [78, 1],
                        [86, 3],
                        [86, 1],
                        [6, 0],
                        [6, 2],
                        [17, 1],
                        [17, 2],
                        [21, 0],
                        [21, 2],
                        [22, 0],
                        [22, 1],
                        [25, 0],
                        [25, 1],
                        [28, 0],
                        [28, 1],
                        [30, 0],
                        [30, 2],
                        [31, 0],
                        [31, 1],
                        [32, 0],
                        [32, 1],
                        [35, 0],
                        [35, 2],
                        [36, 0],
                        [36, 1],
                        [37, 0],
                        [37, 1],
                        [40, 0],
                        [40, 2],
                        [41, 0],
                        [41, 1],
                        [42, 0],
                        [42, 1],
                        [46, 0],
                        [46, 1],
                        [49, 0],
                        [49, 2],
                        [50, 0],
                        [50, 1],
                        [52, 0],
                        [52, 2],
                        [53, 0],
                        [53, 1],
                        [57, 0],
                        [57, 2],
                        [58, 0],
                        [58, 1],
                        [61, 0],
                        [61, 2],
                        [62, 0],
                        [62, 1],
                        [66, 0],
                        [66, 2],
                        [67, 0],
                        [67, 1],
                        [70, 1],
                        [70, 2],
                        [76, 1],
                        [76, 2]
                    ],
                    performAction: function(a, b, c, d, e, f, g) {
                        var h = f.length - 1;
                        switch (e) {
                            case 1:
                                return f[h - 1];
                            case 2:
                                this.$ = d.prepareProgram(f[h]);
                                break;
                            case 3:
                                this.$ = f[h];
                                break;
                            case 4:
                                this.$ = f[h];
                                break;
                            case 5:
                                this.$ = f[h];
                                break;
                            case 6:
                                this.$ = f[h];
                                break;
                            case 7:
                                this.$ = f[h];
                                break;
                            case 8:
                                this.$ = f[h];
                                break;
                            case 9:
                                this.$ = {
                                    type: "CommentStatement",
                                    value: d.stripComment(f[h]),
                                    strip: d.stripFlags(f[h], f[h]),
                                    loc: d.locInfo(this._$)
                                };
                                break;
                            case 10:
                                this.$ = {
                                    type: "ContentStatement",
                                    original: f[h],
                                    value: f[h],
                                    loc: d.locInfo(this._$)
                                };
                                break;
                            case 11:
                                this.$ = d.prepareRawBlock(f[h - 2], f[h - 1], f[h], this._$);
                                break;
                            case 12:
                                this.$ = {
                                    path: f[h - 3],
                                    params: f[h - 2],
                                    hash: f[h - 1]
                                };
                                break;
                            case 13:
                                this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], !1, this._$);
                                break;
                            case 14:
                                this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], !0, this._$);
                                break;
                            case 15:
                                this.$ = {
                                    open: f[h - 5],
                                    path: f[h - 4],
                                    params: f[h - 3],
                                    hash: f[h - 2],
                                    blockParams: f[h - 1],
                                    strip: d.stripFlags(f[h - 5], f[h])
                                };
                                break;
                            case 16:
                                this.$ = {
                                    path: f[h - 4],
                                    params: f[h - 3],
                                    hash: f[h - 2],
                                    blockParams: f[h - 1],
                                    strip: d.stripFlags(f[h - 5], f[h])
                                };
                                break;
                            case 17:
                                this.$ = {
                                    path: f[h - 4],
                                    params: f[h - 3],
                                    hash: f[h - 2],
                                    blockParams: f[h - 1],
                                    strip: d.stripFlags(f[h - 5], f[h])
                                };
                                break;
                            case 18:
                                this.$ = {
                                    strip: d.stripFlags(f[h - 1], f[h - 1]),
                                    program: f[h]
                                };
                                break;
                            case 19:
                                var i = d.prepareBlock(f[h - 2], f[h - 1], f[h], f[h], !1, this._$),
                                    j = d.prepareProgram([i], f[h - 1].loc);
                                j.chained = !0, this.$ = {
                                    strip: f[h - 2].strip,
                                    program: j,
                                    chain: !0
                                };
                                break;
                            case 20:
                                this.$ = f[h];
                                break;
                            case 21:
                                this.$ = {
                                    path: f[h - 1],
                                    strip: d.stripFlags(f[h - 2], f[h])
                                };
                                break;
                            case 22:
                                this.$ = d.prepareMustache(f[h - 3], f[h - 2], f[h - 1], f[h - 4], d.stripFlags(f[h - 4], f[h]), this._$);
                                break;
                            case 23:
                                this.$ = d.prepareMustache(f[h - 3], f[h - 2], f[h - 1], f[h - 4], d.stripFlags(f[h - 4], f[h]), this._$);
                                break;
                            case 24:
                                this.$ = {
                                    type: "PartialStatement",
                                    name: f[h - 3],
                                    params: f[h - 2],
                                    hash: f[h - 1],
                                    indent: "",
                                    strip: d.stripFlags(f[h - 4], f[h]),
                                    loc: d.locInfo(this._$)
                                };
                                break;
                            case 25:
                                this.$ = d.preparePartialBlock(f[h - 2], f[h - 1], f[h], this._$);
                                break;
                            case 26:
                                this.$ = {
                                    path: f[h - 3],
                                    params: f[h - 2],
                                    hash: f[h - 1],
                                    strip: d.stripFlags(f[h - 4], f[h])
                                };
                                break;
                            case 27:
                                this.$ = f[h];
                                break;
                            case 28:
                                this.$ = f[h];
                                break;
                            case 29:
                                this.$ = {
                                    type: "SubExpression",
                                    path: f[h - 3],
                                    params: f[h - 2],
                                    hash: f[h - 1],
                                    loc: d.locInfo(this._$)
                                };
                                break;
                            case 30:
                                this.$ = {
                                    type: "Hash",
                                    pairs: f[h],
                                    loc: d.locInfo(this._$)
                                };
                                break;
                            case 31:
                                this.$ = {
                                    type: "HashPair",
                                    key: d.id(f[h - 2]),
                                    value: f[h],
                                    loc: d.locInfo(this._$)
                                };
                                break;
                            case 32:
                                this.$ = d.id(f[h - 1]);
                                break;
                            case 33:
                                this.$ = f[h];
                                break;
                            case 34:
                                this.$ = f[h];
                                break;
                            case 35:
                                this.$ = {
                                    type: "StringLiteral",
                                    value: f[h],
                                    original: f[h],
                                    loc: d.locInfo(this._$)
                                };
                                break;
                            case 36:
                                this.$ = {
                                    type: "NumberLiteral",
                                    value: Number(f[h]),
                                    original: Number(f[h]),
                                    loc: d.locInfo(this._$)
                                };
                                break;
                            case 37:
                                this.$ = {
                                    type: "BooleanLiteral",
                                    value: "true" === f[h],
                                    original: "true" === f[h],
                                    loc: d.locInfo(this._$)
                                };
                                break;
                            case 38:
                                this.$ = {
                                    type: "UndefinedLiteral",
                                    original: void 0,
                                    value: void 0,
                                    loc: d.locInfo(this._$)
                                };
                                break;
                            case 39:
                                this.$ = {
                                    type: "NullLiteral",
                                    original: null,
                                    value: null,
                                    loc: d.locInfo(this._$)
                                };
                                break;
                            case 40:
                                this.$ = f[h];
                                break;
                            case 41:
                                this.$ = f[h];
                                break;
                            case 42:
                                this.$ = d.preparePath(!0, f[h], this._$);
                                break;
                            case 43:
                                this.$ = d.preparePath(!1, f[h], this._$);
                                break;
                            case 44:
                                f[h - 2].push({
                                    part: d.id(f[h]),
                                    original: f[h],
                                    separator: f[h - 1]
                                }), this.$ = f[h - 2];
                                break;
                            case 45:
                                this.$ = [{
                                    part: d.id(f[h]),
                                    original: f[h]
                                }];
                                break;
                            case 46:
                                this.$ = [];
                                break;
                            case 47:
                                f[h - 1].push(f[h]);
                                break;
                            case 48:
                                this.$ = [f[h]];
                                break;
                            case 49:
                                f[h - 1].push(f[h]);
                                break;
                            case 50:
                                this.$ = [];
                                break;
                            case 51:
                                f[h - 1].push(f[h]);
                                break;
                            case 58:
                                this.$ = [];
                                break;
                            case 59:
                                f[h - 1].push(f[h]);
                                break;
                            case 64:
                                this.$ = [];
                                break;
                            case 65:
                                f[h - 1].push(f[h]);
                                break;
                            case 70:
                                this.$ = [];
                                break;
                            case 71:
                                f[h - 1].push(f[h]);
                                break;
                            case 78:
                                this.$ = [];
                                break;
                            case 79:
                                f[h - 1].push(f[h]);
                                break;
                            case 82:
                                this.$ = [];
                                break;
                            case 83:
                                f[h - 1].push(f[h]);
                                break;
                            case 86:
                                this.$ = [];
                                break;
                            case 87:
                                f[h - 1].push(f[h]);
                                break;
                            case 90:
                                this.$ = [];
                                break;
                            case 91:
                                f[h - 1].push(f[h]);
                                break;
                            case 94:
                                this.$ = [];
                                break;
                            case 95:
                                f[h - 1].push(f[h]);
                                break;
                            case 98:
                                this.$ = [f[h]];
                                break;
                            case 99:
                                f[h - 1].push(f[h]);
                                break;
                            case 100:
                                this.$ = [f[h]];
                                break;
                            case 101:
                                f[h - 1].push(f[h])
                        }
                    },
                    table: [{
                        3: 1,
                        4: 2,
                        5: [2, 46],
                        6: 3,
                        14: [2, 46],
                        15: [2, 46],
                        19: [2, 46],
                        29: [2, 46],
                        34: [2, 46],
                        48: [2, 46],
                        51: [2, 46],
                        55: [2, 46],
                        60: [2, 46]
                    }, {
                        1: [3]
                    }, {
                        5: [1, 4]
                    }, {
                        5: [2, 2],
                        7: 5,
                        8: 6,
                        9: 7,
                        10: 8,
                        11: 9,
                        12: 10,
                        13: 11,
                        14: [1, 12],
                        15: [1, 20],
                        16: 17,
                        19: [1, 23],
                        24: 15,
                        27: 16,
                        29: [1, 21],
                        34: [1, 22],
                        39: [2, 2],
                        44: [2, 2],
                        47: [2, 2],
                        48: [1, 13],
                        51: [1, 14],
                        55: [1, 18],
                        59: 19,
                        60: [1, 24]
                    }, {
                        1: [2, 1]
                    }, {
                        5: [2, 47],
                        14: [2, 47],
                        15: [2, 47],
                        19: [2, 47],
                        29: [2, 47],
                        34: [2, 47],
                        39: [2, 47],
                        44: [2, 47],
                        47: [2, 47],
                        48: [2, 47],
                        51: [2, 47],
                        55: [2, 47],
                        60: [2, 47]
                    }, {
                        5: [2, 3],
                        14: [2, 3],
                        15: [2, 3],
                        19: [2, 3],
                        29: [2, 3],
                        34: [2, 3],
                        39: [2, 3],
                        44: [2, 3],
                        47: [2, 3],
                        48: [2, 3],
                        51: [2, 3],
                        55: [2, 3],
                        60: [2, 3]
                    }, {
                        5: [2, 4],
                        14: [2, 4],
                        15: [2, 4],
                        19: [2, 4],
                        29: [2, 4],
                        34: [2, 4],
                        39: [2, 4],
                        44: [2, 4],
                        47: [2, 4],
                        48: [2, 4],
                        51: [2, 4],
                        55: [2, 4],
                        60: [2, 4]
                    }, {
                        5: [2, 5],
                        14: [2, 5],
                        15: [2, 5],
                        19: [2, 5],
                        29: [2, 5],
                        34: [2, 5],
                        39: [2, 5],
                        44: [2, 5],
                        47: [2, 5],
                        48: [2, 5],
                        51: [2, 5],
                        55: [2, 5],
                        60: [2, 5]
                    }, {
                        5: [2, 6],
                        14: [2, 6],
                        15: [2, 6],
                        19: [2, 6],
                        29: [2, 6],
                        34: [2, 6],
                        39: [2, 6],
                        44: [2, 6],
                        47: [2, 6],
                        48: [2, 6],
                        51: [2, 6],
                        55: [2, 6],
                        60: [2, 6]
                    }, {
                        5: [2, 7],
                        14: [2, 7],
                        15: [2, 7],
                        19: [2, 7],
                        29: [2, 7],
                        34: [2, 7],
                        39: [2, 7],
                        44: [2, 7],
                        47: [2, 7],
                        48: [2, 7],
                        51: [2, 7],
                        55: [2, 7],
                        60: [2, 7]
                    }, {
                        5: [2, 8],
                        14: [2, 8],
                        15: [2, 8],
                        19: [2, 8],
                        29: [2, 8],
                        34: [2, 8],
                        39: [2, 8],
                        44: [2, 8],
                        47: [2, 8],
                        48: [2, 8],
                        51: [2, 8],
                        55: [2, 8],
                        60: [2, 8]
                    }, {
                        5: [2, 9],
                        14: [2, 9],
                        15: [2, 9],
                        19: [2, 9],
                        29: [2, 9],
                        34: [2, 9],
                        39: [2, 9],
                        44: [2, 9],
                        47: [2, 9],
                        48: [2, 9],
                        51: [2, 9],
                        55: [2, 9],
                        60: [2, 9]
                    }, {
                        20: 25,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 36,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        4: 37,
                        6: 3,
                        14: [2, 46],
                        15: [2, 46],
                        19: [2, 46],
                        29: [2, 46],
                        34: [2, 46],
                        39: [2, 46],
                        44: [2, 46],
                        47: [2, 46],
                        48: [2, 46],
                        51: [2, 46],
                        55: [2, 46],
                        60: [2, 46]
                    }, {
                        4: 38,
                        6: 3,
                        14: [2, 46],
                        15: [2, 46],
                        19: [2, 46],
                        29: [2, 46],
                        34: [2, 46],
                        44: [2, 46],
                        47: [2, 46],
                        48: [2, 46],
                        51: [2, 46],
                        55: [2, 46],
                        60: [2, 46]
                    }, {
                        13: 40,
                        15: [1, 20],
                        17: 39
                    }, {
                        20: 42,
                        56: 41,
                        64: 43,
                        65: [1, 44],
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        4: 45,
                        6: 3,
                        14: [2, 46],
                        15: [2, 46],
                        19: [2, 46],
                        29: [2, 46],
                        34: [2, 46],
                        47: [2, 46],
                        48: [2, 46],
                        51: [2, 46],
                        55: [2, 46],
                        60: [2, 46]
                    }, {
                        5: [2, 10],
                        14: [2, 10],
                        15: [2, 10],
                        18: [2, 10],
                        19: [2, 10],
                        29: [2, 10],
                        34: [2, 10],
                        39: [2, 10],
                        44: [2, 10],
                        47: [2, 10],
                        48: [2, 10],
                        51: [2, 10],
                        55: [2, 10],
                        60: [2, 10]
                    }, {
                        20: 46,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 47,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 48,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 42,
                        56: 49,
                        64: 43,
                        65: [1, 44],
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        33: [2, 78],
                        49: 50,
                        65: [2, 78],
                        72: [2, 78],
                        80: [2, 78],
                        81: [2, 78],
                        82: [2, 78],
                        83: [2, 78],
                        84: [2, 78],
                        85: [2, 78]
                    }, {
                        23: [2, 33],
                        33: [2, 33],
                        54: [2, 33],
                        65: [2, 33],
                        68: [2, 33],
                        72: [2, 33],
                        75: [2, 33],
                        80: [2, 33],
                        81: [2, 33],
                        82: [2, 33],
                        83: [2, 33],
                        84: [2, 33],
                        85: [2, 33]
                    }, {
                        23: [2, 34],
                        33: [2, 34],
                        54: [2, 34],
                        65: [2, 34],
                        68: [2, 34],
                        72: [2, 34],
                        75: [2, 34],
                        80: [2, 34],
                        81: [2, 34],
                        82: [2, 34],
                        83: [2, 34],
                        84: [2, 34],
                        85: [2, 34]
                    }, {
                        23: [2, 35],
                        33: [2, 35],
                        54: [2, 35],
                        65: [2, 35],
                        68: [2, 35],
                        72: [2, 35],
                        75: [2, 35],
                        80: [2, 35],
                        81: [2, 35],
                        82: [2, 35],
                        83: [2, 35],
                        84: [2, 35],
                        85: [2, 35]
                    }, {
                        23: [2, 36],
                        33: [2, 36],
                        54: [2, 36],
                        65: [2, 36],
                        68: [2, 36],
                        72: [2, 36],
                        75: [2, 36],
                        80: [2, 36],
                        81: [2, 36],
                        82: [2, 36],
                        83: [2, 36],
                        84: [2, 36],
                        85: [2, 36]
                    }, {
                        23: [2, 37],
                        33: [2, 37],
                        54: [2, 37],
                        65: [2, 37],
                        68: [2, 37],
                        72: [2, 37],
                        75: [2, 37],
                        80: [2, 37],
                        81: [2, 37],
                        82: [2, 37],
                        83: [2, 37],
                        84: [2, 37],
                        85: [2, 37]
                    }, {
                        23: [2, 38],
                        33: [2, 38],
                        54: [2, 38],
                        65: [2, 38],
                        68: [2, 38],
                        72: [2, 38],
                        75: [2, 38],
                        80: [2, 38],
                        81: [2, 38],
                        82: [2, 38],
                        83: [2, 38],
                        84: [2, 38],
                        85: [2, 38]
                    }, {
                        23: [2, 39],
                        33: [2, 39],
                        54: [2, 39],
                        65: [2, 39],
                        68: [2, 39],
                        72: [2, 39],
                        75: [2, 39],
                        80: [2, 39],
                        81: [2, 39],
                        82: [2, 39],
                        83: [2, 39],
                        84: [2, 39],
                        85: [2, 39]
                    }, {
                        23: [2, 43],
                        33: [2, 43],
                        54: [2, 43],
                        65: [2, 43],
                        68: [2, 43],
                        72: [2, 43],
                        75: [2, 43],
                        80: [2, 43],
                        81: [2, 43],
                        82: [2, 43],
                        83: [2, 43],
                        84: [2, 43],
                        85: [2, 43],
                        87: [1, 51]
                    }, {
                        72: [1, 35],
                        86: 52
                    }, {
                        23: [2, 45],
                        33: [2, 45],
                        54: [2, 45],
                        65: [2, 45],
                        68: [2, 45],
                        72: [2, 45],
                        75: [2, 45],
                        80: [2, 45],
                        81: [2, 45],
                        82: [2, 45],
                        83: [2, 45],
                        84: [2, 45],
                        85: [2, 45],
                        87: [2, 45]
                    }, {
                        52: 53,
                        54: [2, 82],
                        65: [2, 82],
                        72: [2, 82],
                        80: [2, 82],
                        81: [2, 82],
                        82: [2, 82],
                        83: [2, 82],
                        84: [2, 82],
                        85: [2, 82]
                    }, {
                        25: 54,
                        38: 56,
                        39: [1, 58],
                        43: 57,
                        44: [1, 59],
                        45: 55,
                        47: [2, 54]
                    }, {
                        28: 60,
                        43: 61,
                        44: [1, 59],
                        47: [2, 56]
                    }, {
                        13: 63,
                        15: [1, 20],
                        18: [1, 62]
                    }, {
                        15: [2, 48],
                        18: [2, 48]
                    }, {
                        33: [2, 86],
                        57: 64,
                        65: [2, 86],
                        72: [2, 86],
                        80: [2, 86],
                        81: [2, 86],
                        82: [2, 86],
                        83: [2, 86],
                        84: [2, 86],
                        85: [2, 86]
                    }, {
                        33: [2, 40],
                        65: [2, 40],
                        72: [2, 40],
                        80: [2, 40],
                        81: [2, 40],
                        82: [2, 40],
                        83: [2, 40],
                        84: [2, 40],
                        85: [2, 40]
                    }, {
                        33: [2, 41],
                        65: [2, 41],
                        72: [2, 41],
                        80: [2, 41],
                        81: [2, 41],
                        82: [2, 41],
                        83: [2, 41],
                        84: [2, 41],
                        85: [2, 41]
                    }, {
                        20: 65,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        26: 66,
                        47: [1, 67]
                    }, {
                        30: 68,
                        33: [2, 58],
                        65: [2, 58],
                        72: [2, 58],
                        75: [2, 58],
                        80: [2, 58],
                        81: [2, 58],
                        82: [2, 58],
                        83: [2, 58],
                        84: [2, 58],
                        85: [2, 58]
                    }, {
                        33: [2, 64],
                        35: 69,
                        65: [2, 64],
                        72: [2, 64],
                        75: [2, 64],
                        80: [2, 64],
                        81: [2, 64],
                        82: [2, 64],
                        83: [2, 64],
                        84: [2, 64],
                        85: [2, 64]
                    }, {
                        21: 70,
                        23: [2, 50],
                        65: [2, 50],
                        72: [2, 50],
                        80: [2, 50],
                        81: [2, 50],
                        82: [2, 50],
                        83: [2, 50],
                        84: [2, 50],
                        85: [2, 50]
                    }, {
                        33: [2, 90],
                        61: 71,
                        65: [2, 90],
                        72: [2, 90],
                        80: [2, 90],
                        81: [2, 90],
                        82: [2, 90],
                        83: [2, 90],
                        84: [2, 90],
                        85: [2, 90]
                    }, {
                        20: 75,
                        33: [2, 80],
                        50: 72,
                        63: 73,
                        64: 76,
                        65: [1, 44],
                        69: 74,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        72: [1, 80]
                    }, {
                        23: [2, 42],
                        33: [2, 42],
                        54: [2, 42],
                        65: [2, 42],
                        68: [2, 42],
                        72: [2, 42],
                        75: [2, 42],
                        80: [2, 42],
                        81: [2, 42],
                        82: [2, 42],
                        83: [2, 42],
                        84: [2, 42],
                        85: [2, 42],
                        87: [1, 51]
                    }, {
                        20: 75,
                        53: 81,
                        54: [2, 84],
                        63: 82,
                        64: 76,
                        65: [1, 44],
                        69: 83,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        26: 84,
                        47: [1, 67]
                    }, {
                        47: [2, 55]
                    }, {
                        4: 85,
                        6: 3,
                        14: [2, 46],
                        15: [2, 46],
                        19: [2, 46],
                        29: [2, 46],
                        34: [2, 46],
                        39: [2, 46],
                        44: [2, 46],
                        47: [2, 46],
                        48: [2, 46],
                        51: [2, 46],
                        55: [2, 46],
                        60: [2, 46]
                    }, {
                        47: [2, 20]
                    }, {
                        20: 86,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        4: 87,
                        6: 3,
                        14: [2, 46],
                        15: [2, 46],
                        19: [2, 46],
                        29: [2, 46],
                        34: [2, 46],
                        47: [2, 46],
                        48: [2, 46],
                        51: [2, 46],
                        55: [2, 46],
                        60: [2, 46]
                    }, {
                        26: 88,
                        47: [1, 67]
                    }, {
                        47: [2, 57]
                    }, {
                        5: [2, 11],
                        14: [2, 11],
                        15: [2, 11],
                        19: [2, 11],
                        29: [2, 11],
                        34: [2, 11],
                        39: [2, 11],
                        44: [2, 11],
                        47: [2, 11],
                        48: [2, 11],
                        51: [2, 11],
                        55: [2, 11],
                        60: [2, 11]
                    }, {
                        15: [2, 49],
                        18: [2, 49]
                    }, {
                        20: 75,
                        33: [2, 88],
                        58: 89,
                        63: 90,
                        64: 76,
                        65: [1, 44],
                        69: 91,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        65: [2, 94],
                        66: 92,
                        68: [2, 94],
                        72: [2, 94],
                        80: [2, 94],
                        81: [2, 94],
                        82: [2, 94],
                        83: [2, 94],
                        84: [2, 94],
                        85: [2, 94]
                    }, {
                        5: [2, 25],
                        14: [2, 25],
                        15: [2, 25],
                        19: [2, 25],
                        29: [2, 25],
                        34: [2, 25],
                        39: [2, 25],
                        44: [2, 25],
                        47: [2, 25],
                        48: [2, 25],
                        51: [2, 25],
                        55: [2, 25],
                        60: [2, 25]
                    }, {
                        20: 93,
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 75,
                        31: 94,
                        33: [2, 60],
                        63: 95,
                        64: 76,
                        65: [1, 44],
                        69: 96,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        75: [2, 60],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 75,
                        33: [2, 66],
                        36: 97,
                        63: 98,
                        64: 76,
                        65: [1, 44],
                        69: 99,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        75: [2, 66],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 75,
                        22: 100,
                        23: [2, 52],
                        63: 101,
                        64: 76,
                        65: [1, 44],
                        69: 102,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        20: 75,
                        33: [2, 92],
                        62: 103,
                        63: 104,
                        64: 76,
                        65: [1, 44],
                        69: 105,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        33: [1, 106]
                    }, {
                        33: [2, 79],
                        65: [2, 79],
                        72: [2, 79],
                        80: [2, 79],
                        81: [2, 79],
                        82: [2, 79],
                        83: [2, 79],
                        84: [2, 79],
                        85: [2, 79]
                    }, {
                        33: [2, 81]
                    }, {
                        23: [2, 27],
                        33: [2, 27],
                        54: [2, 27],
                        65: [2, 27],
                        68: [2, 27],
                        72: [2, 27],
                        75: [2, 27],
                        80: [2, 27],
                        81: [2, 27],
                        82: [2, 27],
                        83: [2, 27],
                        84: [2, 27],
                        85: [2, 27]
                    }, {
                        23: [2, 28],
                        33: [2, 28],
                        54: [2, 28],
                        65: [2, 28],
                        68: [2, 28],
                        72: [2, 28],
                        75: [2, 28],
                        80: [2, 28],
                        81: [2, 28],
                        82: [2, 28],
                        83: [2, 28],
                        84: [2, 28],
                        85: [2, 28]
                    }, {
                        23: [2, 30],
                        33: [2, 30],
                        54: [2, 30],
                        68: [2, 30],
                        71: 107,
                        72: [1, 108],
                        75: [2, 30]
                    }, {
                        23: [2, 98],
                        33: [2, 98],
                        54: [2, 98],
                        68: [2, 98],
                        72: [2, 98],
                        75: [2, 98]
                    }, {
                        23: [2, 45],
                        33: [2, 45],
                        54: [2, 45],
                        65: [2, 45],
                        68: [2, 45],
                        72: [2, 45],
                        73: [1, 109],
                        75: [2, 45],
                        80: [2, 45],
                        81: [2, 45],
                        82: [2, 45],
                        83: [2, 45],
                        84: [2, 45],
                        85: [2, 45],
                        87: [2, 45]
                    }, {
                        23: [2, 44],
                        33: [2, 44],
                        54: [2, 44],
                        65: [2, 44],
                        68: [2, 44],
                        72: [2, 44],
                        75: [2, 44],
                        80: [2, 44],
                        81: [2, 44],
                        82: [2, 44],
                        83: [2, 44],
                        84: [2, 44],
                        85: [2, 44],
                        87: [2, 44]
                    }, {
                        54: [1, 110]
                    }, {
                        54: [2, 83],
                        65: [2, 83],
                        72: [2, 83],
                        80: [2, 83],
                        81: [2, 83],
                        82: [2, 83],
                        83: [2, 83],
                        84: [2, 83],
                        85: [2, 83]
                    }, {
                        54: [2, 85]
                    }, {
                        5: [2, 13],
                        14: [2, 13],
                        15: [2, 13],
                        19: [2, 13],
                        29: [2, 13],
                        34: [2, 13],
                        39: [2, 13],
                        44: [2, 13],
                        47: [2, 13],
                        48: [2, 13],
                        51: [2, 13],
                        55: [2, 13],
                        60: [2, 13]
                    }, {
                        38: 56,
                        39: [1, 58],
                        43: 57,
                        44: [1, 59],
                        45: 112,
                        46: 111,
                        47: [2, 76]
                    }, {
                        33: [2, 70],
                        40: 113,
                        65: [2, 70],
                        72: [2, 70],
                        75: [2, 70],
                        80: [2, 70],
                        81: [2, 70],
                        82: [2, 70],
                        83: [2, 70],
                        84: [2, 70],
                        85: [2, 70]
                    }, {
                        47: [2, 18]
                    }, {
                        5: [2, 14],
                        14: [2, 14],
                        15: [2, 14],
                        19: [2, 14],
                        29: [2, 14],
                        34: [2, 14],
                        39: [2, 14],
                        44: [2, 14],
                        47: [2, 14],
                        48: [2, 14],
                        51: [2, 14],
                        55: [2, 14],
                        60: [2, 14]
                    }, {
                        33: [1, 114]
                    }, {
                        33: [2, 87],
                        65: [2, 87],
                        72: [2, 87],
                        80: [2, 87],
                        81: [2, 87],
                        82: [2, 87],
                        83: [2, 87],
                        84: [2, 87],
                        85: [2, 87]
                    }, {
                        33: [2, 89]
                    }, {
                        20: 75,
                        63: 116,
                        64: 76,
                        65: [1, 44],
                        67: 115,
                        68: [2, 96],
                        69: 117,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        33: [1, 118]
                    }, {
                        32: 119,
                        33: [2, 62],
                        74: 120,
                        75: [1, 121]
                    }, {
                        33: [2, 59],
                        65: [2, 59],
                        72: [2, 59],
                        75: [2, 59],
                        80: [2, 59],
                        81: [2, 59],
                        82: [2, 59],
                        83: [2, 59],
                        84: [2, 59],
                        85: [2, 59]
                    }, {
                        33: [2, 61],
                        75: [2, 61]
                    }, {
                        33: [2, 68],
                        37: 122,
                        74: 123,
                        75: [1, 121]
                    }, {
                        33: [2, 65],
                        65: [2, 65],
                        72: [2, 65],
                        75: [2, 65],
                        80: [2, 65],
                        81: [2, 65],
                        82: [2, 65],
                        83: [2, 65],
                        84: [2, 65],
                        85: [2, 65]
                    }, {
                        33: [2, 67],
                        75: [2, 67]
                    }, {
                        23: [1, 124]
                    }, {
                        23: [2, 51],
                        65: [2, 51],
                        72: [2, 51],
                        80: [2, 51],
                        81: [2, 51],
                        82: [2, 51],
                        83: [2, 51],
                        84: [2, 51],
                        85: [2, 51]
                    }, {
                        23: [2, 53]
                    }, {
                        33: [1, 125]
                    }, {
                        33: [2, 91],
                        65: [2, 91],
                        72: [2, 91],
                        80: [2, 91],
                        81: [2, 91],
                        82: [2, 91],
                        83: [2, 91],
                        84: [2, 91],
                        85: [2, 91]
                    }, {
                        33: [2, 93]
                    }, {
                        5: [2, 22],
                        14: [2, 22],
                        15: [2, 22],
                        19: [2, 22],
                        29: [2, 22],
                        34: [2, 22],
                        39: [2, 22],
                        44: [2, 22],
                        47: [2, 22],
                        48: [2, 22],
                        51: [2, 22],
                        55: [2, 22],
                        60: [2, 22]
                    }, {
                        23: [2, 99],
                        33: [2, 99],
                        54: [2, 99],
                        68: [2, 99],
                        72: [2, 99],
                        75: [2, 99]
                    }, {
                        73: [1, 109]
                    }, {
                        20: 75,
                        63: 126,
                        64: 76,
                        65: [1, 44],
                        72: [1, 35],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        5: [2, 23],
                        14: [2, 23],
                        15: [2, 23],
                        19: [2, 23],
                        29: [2, 23],
                        34: [2, 23],
                        39: [2, 23],
                        44: [2, 23],
                        47: [2, 23],
                        48: [2, 23],
                        51: [2, 23],
                        55: [2, 23],
                        60: [2, 23]
                    }, {
                        47: [2, 19]
                    }, {
                        47: [2, 77]
                    }, {
                        20: 75,
                        33: [2, 72],
                        41: 127,
                        63: 128,
                        64: 76,
                        65: [1, 44],
                        69: 129,
                        70: 77,
                        71: 78,
                        72: [1, 79],
                        75: [2, 72],
                        78: 26,
                        79: 27,
                        80: [1, 28],
                        81: [1, 29],
                        82: [1, 30],
                        83: [1, 31],
                        84: [1, 32],
                        85: [1, 34],
                        86: 33
                    }, {
                        5: [2, 24],
                        14: [2, 24],
                        15: [2, 24],
                        19: [2, 24],
                        29: [2, 24],
                        34: [2, 24],
                        39: [2, 24],
                        44: [2, 24],
                        47: [2, 24],
                        48: [2, 24],
                        51: [2, 24],
                        55: [2, 24],
                        60: [2, 24]
                    }, {
                        68: [1, 130]
                    }, {
                        65: [2, 95],
                        68: [2, 95],
                        72: [2, 95],
                        80: [2, 95],
                        81: [2, 95],
                        82: [2, 95],
                        83: [2, 95],
                        84: [2, 95],
                        85: [2, 95]
                    }, {
                        68: [2, 97]
                    }, {
                        5: [2, 21],
                        14: [2, 21],
                        15: [2, 21],
                        19: [2, 21],
                        29: [2, 21],
                        34: [2, 21],
                        39: [2, 21],
                        44: [2, 21],
                        47: [2, 21],
                        48: [2, 21],
                        51: [2, 21],
                        55: [2, 21],
                        60: [2, 21]
                    }, {
                        33: [1, 131]
                    }, {
                        33: [2, 63]
                    }, {
                        72: [1, 133],
                        76: 132
                    }, {
                        33: [1, 134]
                    }, {
                        33: [2, 69]
                    }, {
                        15: [2, 12]
                    }, {
                        14: [2, 26],
                        15: [2, 26],
                        19: [2, 26],
                        29: [2, 26],
                        34: [2, 26],
                        47: [2, 26],
                        48: [2, 26],
                        51: [2, 26],
                        55: [2, 26],
                        60: [2, 26]
                    }, {
                        23: [2, 31],
                        33: [2, 31],
                        54: [2, 31],
                        68: [2, 31],
                        72: [2, 31],
                        75: [2, 31]
                    }, {
                        33: [2, 74],
                        42: 135,
                        74: 136,
                        75: [1, 121]
                    }, {
                        33: [2, 71],
                        65: [2, 71],
                        72: [2, 71],
                        75: [2, 71],
                        80: [2, 71],
                        81: [2, 71],
                        82: [2, 71],
                        83: [2, 71],
                        84: [2, 71],
                        85: [2, 71]
                    }, {
                        33: [2, 73],
                        75: [2, 73]
                    }, {
                        23: [2, 29],
                        33: [2, 29],
                        54: [2, 29],
                        65: [2, 29],
                        68: [2, 29],
                        72: [2, 29],
                        75: [2, 29],
                        80: [2, 29],
                        81: [2, 29],
                        82: [2, 29],
                        83: [2, 29],
                        84: [2, 29],
                        85: [2, 29]
                    }, {
                        14: [2, 15],
                        15: [2, 15],
                        19: [2, 15],
                        29: [2, 15],
                        34: [2, 15],
                        39: [2, 15],
                        44: [2, 15],
                        47: [2, 15],
                        48: [2, 15],
                        51: [2, 15],
                        55: [2, 15],
                        60: [2, 15]
                    }, {
                        72: [1, 138],
                        77: [1, 137]
                    }, {
                        72: [2, 100],
                        77: [2, 100]
                    }, {
                        14: [2, 16],
                        15: [2, 16],
                        19: [2, 16],
                        29: [2, 16],
                        34: [2, 16],
                        44: [2, 16],
                        47: [2, 16],
                        48: [2, 16],
                        51: [2, 16],
                        55: [2, 16],
                        60: [2, 16]
                    }, {
                        33: [1, 139]
                    }, {
                        33: [2, 75]
                    }, {
                        33: [2, 32]
                    }, {
                        72: [2, 101],
                        77: [2, 101]
                    }, {
                        14: [2, 17],
                        15: [2, 17],
                        19: [2, 17],
                        29: [2, 17],
                        34: [2, 17],
                        39: [2, 17],
                        44: [2, 17],
                        47: [2, 17],
                        48: [2, 17],
                        51: [2, 17],
                        55: [2, 17],
                        60: [2, 17]
                    }],
                    defaultActions: {
                        4: [2, 1],
                        55: [2, 55],
                        57: [2, 20],
                        61: [2, 57],
                        74: [2, 81],
                        83: [2, 85],
                        87: [2, 18],
                        91: [2, 89],
                        102: [2, 53],
                        105: [2, 93],
                        111: [2, 19],
                        112: [2, 77],
                        117: [2, 97],
                        120: [2, 63],
                        123: [2, 69],
                        124: [2, 12],
                        136: [2, 75],
                        137: [2, 32]
                    },
                    parseError: function(a, b) {
                        throw new Error(a)
                    },
                    parse: function(a) {
                        function b() {
                            var a;
                            return a = c.lexer.lex() || 1, "number" != typeof a && (a = c.symbols_[a] || a), a
                        }
                        var c = this,
                            d = [0],
                            e = [null],
                            f = [],
                            g = this.table,
                            h = "",
                            i = 0,
                            j = 0,
                            k = 0;
                        this.lexer.setInput(a), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                        var l = this.lexer.yylloc;
                        f.push(l);
                        var m = this.lexer.options && this.lexer.options.ranges;
                        "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                        for (var n, o, p, q, r, s, t, u, v, w = {};;) {
                            if (p = d[d.length - 1], this.defaultActions[p] ? q = this.defaultActions[p] : (null !== n && "undefined" != typeof n || (n = b()), q = g[p] && g[p][n]), "undefined" == typeof q || !q.length || !q[0]) {
                                var x = "";
                                if (!k) {
                                    v = [];
                                    for (s in g[p]) this.terminals_[s] && s > 2 && v.push("'" + this.terminals_[s] + "'");
                                    x = this.lexer.showPosition ? "Parse error on line " + (i + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + v.join(", ") + ", got '" + (this.terminals_[n] || n) + "'" : "Parse error on line " + (i + 1) + ": Unexpected " + (1 == n ? "end of input" : "'" + (this.terminals_[n] || n) + "'"), this.parseError(x, {
                                        text: this.lexer.match,
                                        token: this.terminals_[n] || n,
                                        line: this.lexer.yylineno,
                                        loc: l,
                                        expected: v
                                    })
                                }
                            }
                            if (q[0] instanceof Array && q.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + p + ", token: " + n);
                            switch (q[0]) {
                                case 1:
                                    d.push(n), e.push(this.lexer.yytext), f.push(this.lexer.yylloc), d.push(q[1]), n = null, o ? (n = o, o = null) : (j = this.lexer.yyleng, h = this.lexer.yytext, i = this.lexer.yylineno, l = this.lexer.yylloc, k > 0 && k--);
                                    break;
                                case 2:
                                    if (t = this.productions_[q[1]][1], w.$ = e[e.length - t], w._$ = {
                                            first_line: f[f.length - (t || 1)].first_line,
                                            last_line: f[f.length - 1].last_line,
                                            first_column: f[f.length - (t || 1)].first_column,
                                            last_column: f[f.length - 1].last_column
                                        }, m && (w._$.range = [f[f.length - (t || 1)].range[0], f[f.length - 1].range[1]]), r = this.performAction.call(w, h, j, i, this.yy, q[1], e, f), "undefined" != typeof r) return r;
                                    t && (d = d.slice(0, -1 * t * 2), e = e.slice(0, -1 * t), f = f.slice(0, -1 * t)), d.push(this.productions_[q[1]][0]), e.push(w.$), f.push(w._$), u = g[d[d.length - 2]][d[d.length - 1]], d.push(u);
                                    break;
                                case 3:
                                    return !0
                            }
                        }
                        return !0
                    }
                },
                c = function() {
                    var a = {
                        EOF: 1,
                        parseError: function(a, b) {
                            if (!this.yy.parser) throw new Error(a);
                            this.yy.parser.parseError(a, b)
                        },
                        setInput: function(a) {
                            return this._input = a, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                                first_line: 1,
                                first_column: 0,
                                last_line: 1,
                                last_column: 0
                            }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                        },
                        input: function() {
                            var a = this._input[0];
                            this.yytext += a, this.yyleng++, this.offset++, this.match += a, this.matched += a;
                            var b = a.match(/(?:\r\n?|\n).*/g);
                            return b ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), a
                        },
                        unput: function(a) {
                            var b = a.length,
                                c = a.split(/(?:\r\n?|\n)/g);
                            this._input = a + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - b - 1), this.offset -= b;
                            var d = this.match.split(/(?:\r\n?|\n)/g);
                            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), c.length - 1 && (this.yylineno -= c.length - 1);
                            var e = this.yylloc.range;
                            return this.yylloc = {
                                first_line: this.yylloc.first_line,
                                last_line: this.yylineno + 1,
                                first_column: this.yylloc.first_column,
                                last_column: c ? (c.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c.length].length - c[0].length : this.yylloc.first_column - b
                            }, this.options.ranges && (this.yylloc.range = [e[0], e[0] + this.yyleng - b]), this
                        },
                        more: function() {
                            return this._more = !0, this
                        },
                        less: function(a) {
                            this.unput(this.match.slice(a))
                        },
                        pastInput: function() {
                            var a = this.matched.substr(0, this.matched.length - this.match.length);
                            return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "")
                        },
                        upcomingInput: function() {
                            var a = this.match;
                            return a.length < 20 && (a += this._input.substr(0, 20 - a.length)), (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "")
                        },
                        showPosition: function() {
                            var a = this.pastInput(),
                                b = new Array(a.length + 1).join("-");
                            return a + this.upcomingInput() + "\n" + b + "^"
                        },
                        next: function() {
                            if (this.done) return this.EOF;
                            this._input || (this.done = !0);
                            var a, b, c, d, e;
                            this._more || (this.yytext = "", this.match = "");
                            for (var f = this._currentRules(), g = 0; g < f.length && (c = this._input.match(this.rules[f[g]]), !c || b && !(c[0].length > b[0].length) || (b = c, d = g, this.options.flex)); g++);
                            return b ? (e = b[0].match(/(?:\r\n?|\n).*/g), e && (this.yylineno += e.length), this.yylloc = {
                                first_line: this.yylloc.last_line,
                                last_line: this.yylineno + 1,
                                first_column: this.yylloc.last_column,
                                last_column: e ? e[e.length - 1].length - e[e.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b[0].length
                            }, this.yytext += b[0], this.match += b[0], this.matches = b, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(b[0].length), this.matched += b[0], a = this.performAction.call(this, this.yy, this, f[d], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), a ? a : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                text: "",
                                token: null,
                                line: this.yylineno
                            })
                        },
                        lex: function() {
                            var a = this.next();
                            return "undefined" != typeof a ? a : this.lex()
                        },
                        begin: function(a) {
                            this.conditionStack.push(a)
                        },
                        popState: function() {
                            return this.conditionStack.pop()
                        },
                        _currentRules: function() {
                            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                        },
                        topState: function() {
                            return this.conditionStack[this.conditionStack.length - 2]
                        },
                        pushState: function(a) {
                            this.begin(a)
                        }
                    };
                    return a.options = {}, a.performAction = function(a, b, c, d) {
                        function e(a, c) {
                            return b.yytext = b.yytext.substring(a, b.yyleng - c + a)
                        }
                        switch (c) {
                            case 0:
                                if ("\\\\" === b.yytext.slice(-2) ? (e(0, 1), this.begin("mu")) : "\\" === b.yytext.slice(-1) ? (e(0, 1), this.begin("emu")) : this.begin("mu"), b.yytext) return 15;
                                break;
                            case 1:
                                return 15;
                            case 2:
                                return this.popState(), 15;
                            case 3:
                                return this.begin("raw"), 15;
                            case 4:
                                return this.popState(), "raw" === this.conditionStack[this.conditionStack.length - 1] ? 15 : (e(5, 9), "END_RAW_BLOCK");
                            case 5:
                                return 15;
                            case 6:
                                return this.popState(), 14;
                            case 7:
                                return 65;
                            case 8:
                                return 68;
                            case 9:
                                return 19;
                            case 10:
                                return this.popState(), this.begin("raw"), 23;
                            case 11:
                                return 55;
                            case 12:
                                return 60;
                            case 13:
                                return 29;
                            case 14:
                                return 47;
                            case 15:
                                return this.popState(), 44;
                            case 16:
                                return this.popState(), 44;
                            case 17:
                                return 34;
                            case 18:
                                return 39;
                            case 19:
                                return 51;
                            case 20:
                                return 48;
                            case 21:
                                this.unput(b.yytext), this.popState(), this.begin("com");
                                break;
                            case 22:
                                return this.popState(), 14;
                            case 23:
                                return 48;
                            case 24:
                                return 73;
                            case 25:
                                return 72;
                            case 26:
                                return 72;
                            case 27:
                                return 87;
                            case 28:
                                break;
                            case 29:
                                return this.popState(), 54;
                            case 30:
                                return this.popState(), 33;
                            case 31:
                                return b.yytext = e(1, 2).replace(/\\"/g, '"'), 80;
                            case 32:
                                return b.yytext = e(1, 2).replace(/\\'/g, "'"), 80;
                            case 33:
                                return 85;
                            case 34:
                                return 82;
                            case 35:
                                return 82;
                            case 36:
                                return 83;
                            case 37:
                                return 84;
                            case 38:
                                return 81;
                            case 39:
                                return 75;
                            case 40:
                                return 77;
                            case 41:
                                return 72;
                            case 42:
                                return b.yytext = b.yytext.replace(/\\([\\\]])/g, "$1"), 72;
                            case 43:
                                return "INVALID";
                            case 44:
                                return 5
                        }
                    }, a.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], a.conditions = {
                        mu: {
                            rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
                            inclusive: !1
                        },
                        emu: {
                            rules: [2],
                            inclusive: !1
                        },
                        com: {
                            rules: [6],
                            inclusive: !1
                        },
                        raw: {
                            rules: [3, 4, 5],
                            inclusive: !1
                        },
                        INITIAL: {
                            rules: [0, 1, 44],
                            inclusive: !0
                        }
                    }, a
                }();
            return b.lexer = c, a.prototype = b, b.Parser = a, new a
        }();
        b["default"] = c, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";

        function d() {
            var a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            this.options = a
        }

        function e(a, b, c) {
            void 0 === b && (b = a.length);
            var d = a[b - 1],
                e = a[b - 2];
            return d ? "ContentStatement" === d.type ? (e || !c ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(d.original) : void 0 : c
        }

        function f(a, b, c) {
            void 0 === b && (b = -1);
            var d = a[b + 1],
                e = a[b + 2];
            return d ? "ContentStatement" === d.type ? (e || !c ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(d.original) : void 0 : c
        }

        function g(a, b, c) {
            var d = a[null == b ? 0 : b + 1];
            if (d && "ContentStatement" === d.type && (c || !d.rightStripped)) {
                var e = d.value;
                d.value = d.value.replace(c ? /^\s+/ : /^[ \t]*\r?\n?/, ""), d.rightStripped = d.value !== e
            }
        }

        function h(a, b, c) {
            var d = a[null == b ? a.length - 1 : b - 1];
            if (d && "ContentStatement" === d.type && (c || !d.leftStripped)) {
                var e = d.value;
                return d.value = d.value.replace(c ? /\s+$/ : /[ \t]+$/, ""), d.leftStripped = d.value !== e, d.leftStripped
            }
        }
        var i = c(1)["default"];
        b.__esModule = !0;
        var j = c(39),
            k = i(j);
        d.prototype = new k["default"], d.prototype.Program = function(a) {
            var b = !this.options.ignoreStandalone,
                c = !this.isRootSeen;
            this.isRootSeen = !0;
            for (var d = a.body, i = 0, j = d.length; i < j; i++) {
                var k = d[i],
                    l = this.accept(k);
                if (l) {
                    var m = e(d, i, c),
                        n = f(d, i, c),
                        o = l.openStandalone && m,
                        p = l.closeStandalone && n,
                        q = l.inlineStandalone && m && n;
                    l.close && g(d, i, !0), l.open && h(d, i, !0), b && q && (g(d, i), h(d, i) && "PartialStatement" === k.type && (k.indent = /([ \t]+$)/.exec(d[i - 1].original)[1])), b && o && (g((k.program || k.inverse).body), h(d, i)), b && p && (g(d, i), h((k.inverse || k.program).body))
                }
            }
            return a
        }, d.prototype.BlockStatement = d.prototype.DecoratorBlock = d.prototype.PartialBlockStatement = function(a) {
            this.accept(a.program), this.accept(a.inverse);
            var b = a.program || a.inverse,
                c = a.program && a.inverse,
                d = c,
                i = c;
            if (c && c.chained)
                for (d = c.body[0].program; i.chained;) i = i.body[i.body.length - 1].program;
            var j = {
                open: a.openStrip.open,
                close: a.closeStrip.close,
                openStandalone: f(b.body),
                closeStandalone: e((d || b).body)
            };
            if (a.openStrip.close && g(b.body, null, !0), c) {
                var k = a.inverseStrip;
                k.open && h(b.body, null, !0), k.close && g(d.body, null, !0), a.closeStrip.open && h(i.body, null, !0), !this.options.ignoreStandalone && e(b.body) && f(d.body) && (h(b.body), g(d.body))
            } else a.closeStrip.open && h(b.body, null, !0);
            return j
        }, d.prototype.Decorator = d.prototype.MustacheStatement = function(a) {
            return a.strip
        }, d.prototype.PartialStatement = d.prototype.CommentStatement = function(a) {
            var b = a.strip || {};
            return {
                inlineStandalone: !0,
                open: b.open,
                close: b.close
            }
        }, b["default"] = d, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";

        function d() {
            this.parents = []
        }

        function e(a) {
            this.acceptRequired(a, "path"), this.acceptArray(a.params), this.acceptKey(a, "hash")
        }

        function f(a) {
            e.call(this, a), this.acceptKey(a, "program"), this.acceptKey(a, "inverse")
        }

        function g(a) {
            this.acceptRequired(a, "name"), this.acceptArray(a.params), this.acceptKey(a, "hash")
        }
        var h = c(1)["default"];
        b.__esModule = !0;
        var i = c(6),
            j = h(i);
        d.prototype = {
            constructor: d,
            mutating: !1,
            acceptKey: function(a, b) {
                var c = this.accept(a[b]);
                if (this.mutating) {
                    if (c && !d.prototype[c.type]) throw new j["default"]('Unexpected node type "' + c.type + '" found when accepting ' + b + " on " + a.type);
                    a[b] = c
                }
            },
            acceptRequired: function(a, b) {
                if (this.acceptKey(a, b), !a[b]) throw new j["default"](a.type + " requires " + b)
            },
            acceptArray: function(a) {
                for (var b = 0, c = a.length; b < c; b++) this.acceptKey(a, b), a[b] || (a.splice(b, 1), b--, c--)
            },
            accept: function(a) {
                if (a) {
                    if (!this[a.type]) throw new j["default"]("Unknown type: " + a.type, a);
                    this.current && this.parents.unshift(this.current), this.current = a;
                    var b = this[a.type](a);
                    return this.current = this.parents.shift(), !this.mutating || b ? b : b !== !1 ? a : void 0
                }
            },
            Program: function(a) {
                this.acceptArray(a.body)
            },
            MustacheStatement: e,
            Decorator: e,
            BlockStatement: f,
            DecoratorBlock: f,
            PartialStatement: g,
            PartialBlockStatement: function(a) {
                g.call(this, a), this.acceptKey(a, "program")
            },
            ContentStatement: function() {},
            CommentStatement: function() {},
            SubExpression: e,
            PathExpression: function() {},
            StringLiteral: function() {},
            NumberLiteral: function() {},
            BooleanLiteral: function() {},
            UndefinedLiteral: function() {},
            NullLiteral: function() {},
            Hash: function(a) {
                this.acceptArray(a.pairs)
            },
            HashPair: function(a) {
                this.acceptRequired(a, "value")
            }
        }, b["default"] = d, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";

        function d(a, b) {
            if (b = b.path ? b.path.original : b, a.path.original !== b) {
                var c = {
                    loc: a.path.loc
                };
                throw new q["default"](a.path.original + " doesn't match " + b, c)
            }
        }

        function e(a, b) {
            this.source = a, this.start = {
                line: b.first_line,
                column: b.first_column
            }, this.end = {
                line: b.last_line,
                column: b.last_column
            }
        }

        function f(a) {
            return /^\[.*\]$/.test(a) ? a.substring(1, a.length - 1) : a
        }

        function g(a, b) {
            return {
                open: "~" === a.charAt(2),
                close: "~" === b.charAt(b.length - 3)
            }
        }

        function h(a) {
            return a.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "")
        }

        function i(a, b, c) {
            c = this.locInfo(c);
            for (var d = a ? "@" : "", e = [], f = 0, g = 0, h = b.length; g < h; g++) {
                var i = b[g].part,
                    j = b[g].original !== i;
                if (d += (b[g].separator || "") + i, j || ".." !== i && "." !== i && "this" !== i) e.push(i);
                else {
                    if (e.length > 0) throw new q["default"]("Invalid path: " + d, {
                        loc: c
                    });
                    ".." === i && f++
                }
            }
            return {
                type: "PathExpression",
                data: a,
                depth: f,
                parts: e,
                original: d,
                loc: c
            }
        }

        function j(a, b, c, d, e, f) {
            var g = d.charAt(3) || d.charAt(2),
                h = "{" !== g && "&" !== g,
                i = /\*/.test(d);
            return {
                type: i ? "Decorator" : "MustacheStatement",
                path: a,
                params: b,
                hash: c,
                escaped: h,
                strip: e,
                loc: this.locInfo(f)
            }
        }

        function k(a, b, c, e) {
            d(a, c), e = this.locInfo(e);
            var f = {
                type: "Program",
                body: b,
                strip: {},
                loc: e
            };
            return {
                type: "BlockStatement",
                path: a.path,
                params: a.params,
                hash: a.hash,
                program: f,
                openStrip: {},
                inverseStrip: {},
                closeStrip: {},
                loc: e
            }
        }

        function l(a, b, c, e, f, g) {
            e && e.path && d(a, e);
            var h = /\*/.test(a.open);
            b.blockParams = a.blockParams;
            var i = void 0,
                j = void 0;
            if (c) {
                if (h) throw new q["default"]("Unexpected inverse block on decorator", c);
                c.chain && (c.program.body[0].closeStrip = e.strip), j = c.strip, i = c.program
            }
            return f && (f = i, i = b, b = f), {
                type: h ? "DecoratorBlock" : "BlockStatement",
                path: a.path,
                params: a.params,
                hash: a.hash,
                program: b,
                inverse: i,
                openStrip: a.strip,
                inverseStrip: j,
                closeStrip: e && e.strip,
                loc: this.locInfo(g)
            }
        }

        function m(a, b) {
            if (!b && a.length) {
                var c = a[0].loc,
                    d = a[a.length - 1].loc;
                c && d && (b = {
                    source: c.source,
                    start: {
                        line: c.start.line,
                        column: c.start.column
                    },
                    end: {
                        line: d.end.line,
                        column: d.end.column
                    }
                })
            }
            return {
                type: "Program",
                body: a,
                strip: {},
                loc: b
            }
        }

        function n(a, b, c, e) {
            return d(a, c), {
                type: "PartialBlockStatement",
                name: a.path,
                params: a.params,
                hash: a.hash,
                program: b,
                openStrip: a.strip,
                closeStrip: c && c.strip,
                loc: this.locInfo(e)
            }
        }
        var o = c(1)["default"];
        b.__esModule = !0, b.SourceLocation = e, b.id = f, b.stripFlags = g, b.stripComment = h, b.preparePath = i, b.prepareMustache = j, b.prepareRawBlock = k, b.prepareBlock = l, b.prepareProgram = m, b.preparePartialBlock = n;
        var p = c(6),
            q = o(p)
    }, function(a, b, c) {
        "use strict";

        function d() {}

        function e(a, b, c) {
            if (null == a || "string" != typeof a && "Program" !== a.type) throw new k["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + a);
            b = b || {}, "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
            var d = c.parse(a, b),
                e = (new c.Compiler).compile(d, b);
            return (new c.JavaScriptCompiler).compile(e, b)
        }

        function f(a, b, c) {
            function d() {
                var d = c.parse(a, b),
                    e = (new c.Compiler).compile(d, b),
                    f = (new c.JavaScriptCompiler).compile(e, b, void 0, !0);
                return c.template(f)
            }

            function e(a, b) {
                return f || (f = d()), f.call(this, a, b)
            }
            if (void 0 === b && (b = {}), null == a || "string" != typeof a && "Program" !== a.type) throw new k["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + a);
            b = l.extend({}, b), "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
            var f = void 0;
            return e._setup = function(a) {
                return f || (f = d()), f._setup(a)
            }, e._child = function(a, b, c, e) {
                return f || (f = d()), f._child(a, b, c, e)
            }, e
        }

        function g(a, b) {
            if (a === b) return !0;
            if (l.isArray(a) && l.isArray(b) && a.length === b.length) {
                for (var c = 0; c < a.length; c++)
                    if (!g(a[c], b[c])) return !1;
                return !0
            }
        }

        function h(a) {
            if (!a.path.parts) {
                var b = a.path;
                a.path = {
                    type: "PathExpression",
                    data: !1,
                    depth: 0,
                    parts: [b.original + ""],
                    original: b.original + "",
                    loc: b.loc
                }
            }
        }
        var i = c(1)["default"];
        b.__esModule = !0, b.Compiler = d, b.precompile = e, b.compile = f;
        var j = c(6),
            k = i(j),
            l = c(5),
            m = c(35),
            n = i(m),
            o = [].slice;
        d.prototype = {
            compiler: d,
            equals: function(a) {
                var b = this.opcodes.length;
                if (a.opcodes.length !== b) return !1;
                for (var c = 0; c < b; c++) {
                    var d = this.opcodes[c],
                        e = a.opcodes[c];
                    if (d.opcode !== e.opcode || !g(d.args, e.args)) return !1
                }
                b = this.children.length;
                for (var c = 0; c < b; c++)
                    if (!this.children[c].equals(a.children[c])) return !1;
                return !0
            },
            guid: 0,
            compile: function(a, b) {
                this.sourceNode = [], this.opcodes = [], this.children = [], this.options = b, this.stringParams = b.stringParams, this.trackIds = b.trackIds, b.blockParams = b.blockParams || [];
                var c = b.knownHelpers;
                if (b.knownHelpers = {
                        helperMissing: !0,
                        blockHelperMissing: !0,
                        each: !0,
                        "if": !0,
                        unless: !0,
                        "with": !0,
                        log: !0,
                        lookup: !0
                    }, c)
                    for (var d in c) this.options.knownHelpers[d] = c[d];
                return this.accept(a)
            },
            compileProgram: function(a) {
                var b = new this.compiler,
                    c = b.compile(a, this.options),
                    d = this.guid++;
                return this.usePartial = this.usePartial || c.usePartial, this.children[d] = c, this.useDepths = this.useDepths || c.useDepths, d
            },
            accept: function(a) {
                if (!this[a.type]) throw new k["default"]("Unknown type: " + a.type, a);
                this.sourceNode.unshift(a);
                var b = this[a.type](a);
                return this.sourceNode.shift(), b
            },
            Program: function(a) {
                this.options.blockParams.unshift(a.blockParams);
                for (var b = a.body, c = b.length, d = 0; d < c; d++) this.accept(b[d]);
                return this.options.blockParams.shift(), this.isSimple = 1 === c, this.blockParams = a.blockParams ? a.blockParams.length : 0, this
            },
            BlockStatement: function(a) {
                h(a);
                var b = a.program,
                    c = a.inverse;
                b = b && this.compileProgram(b), c = c && this.compileProgram(c);
                var d = this.classifySexpr(a);
                "helper" === d ? this.helperSexpr(a, b, c) : "simple" === d ? (this.simpleSexpr(a), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("emptyHash"), this.opcode("blockValue", a.path.original)) : (this.ambiguousSexpr(a, b, c), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
            },
            DecoratorBlock: function(a) {
                var b = a.program && this.compileProgram(a.program),
                    c = this.setupFullMustacheParams(a, b, void 0),
                    d = a.path;
                this.useDecorators = !0, this.opcode("registerDecorator", c.length, d.original)
            },
            PartialStatement: function(a) {
                this.usePartial = !0;
                var b = a.program;
                b && (b = this.compileProgram(a.program));
                var c = a.params;
                if (c.length > 1) throw new k["default"]("Unsupported number of partial arguments: " + c.length, a);
                c.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : c.push({
                    type: "PathExpression",
                    parts: [],
                    depth: 0
                }));
                var d = a.name.original,
                    e = "SubExpression" === a.name.type;
                e && this.accept(a.name), this.setupFullMustacheParams(a, b, void 0, !0);
                var f = a.indent || "";
                this.options.preventIndent && f && (this.opcode("appendContent", f), f = ""), this.opcode("invokePartial", e, d, f), this.opcode("append")
            },
            PartialBlockStatement: function(a) {
                this.PartialStatement(a)
            },
            MustacheStatement: function(a) {
                this.SubExpression(a), a.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
            },
            Decorator: function(a) {
                this.DecoratorBlock(a)
            },
            ContentStatement: function(a) {
                a.value && this.opcode("appendContent", a.value)
            },
            CommentStatement: function() {},
            SubExpression: function(a) {
                h(a);
                var b = this.classifySexpr(a);
                "simple" === b ? this.simpleSexpr(a) : "helper" === b ? this.helperSexpr(a) : this.ambiguousSexpr(a)
            },
            ambiguousSexpr: function(a, b, c) {
                var d = a.path,
                    e = d.parts[0],
                    f = null != b || null != c;
                this.opcode("getContext", d.depth), this.opcode("pushProgram", b), this.opcode("pushProgram", c), d.strict = !0, this.accept(d), this.opcode("invokeAmbiguous", e, f)
            },
            simpleSexpr: function(a) {
                var b = a.path;
                b.strict = !0, this.accept(b), this.opcode("resolvePossibleLambda")
            },
            helperSexpr: function(a, b, c) {
                var d = this.setupFullMustacheParams(a, b, c),
                    e = a.path,
                    f = e.parts[0];
                if (this.options.knownHelpers[f]) this.opcode("invokeKnownHelper", d.length, f);
                else {
                    if (this.options.knownHelpersOnly) throw new k["default"]("You specified knownHelpersOnly, but used the unknown helper " + f, a);
                    e.strict = !0, e.falsy = !0, this.accept(e), this.opcode("invokeHelper", d.length, e.original, n["default"].helpers.simpleId(e))
                }
            },
            PathExpression: function(a) {
                this.addDepth(a.depth), this.opcode("getContext", a.depth);
                var b = a.parts[0],
                    c = n["default"].helpers.scopedId(a),
                    d = !a.depth && !c && this.blockParamIndex(b);
                d ? this.opcode("lookupBlockParam", d, a.parts) : b ? a.data ? (this.options.data = !0, this.opcode("lookupData", a.depth, a.parts, a.strict)) : this.opcode("lookupOnContext", a.parts, a.falsy, a.strict, c) : this.opcode("pushContext")
            },
            StringLiteral: function(a) {
                this.opcode("pushString", a.value)
            },
            NumberLiteral: function(a) {
                this.opcode("pushLiteral", a.value)
            },
            BooleanLiteral: function(a) {
                this.opcode("pushLiteral", a.value)
            },
            UndefinedLiteral: function() {
                this.opcode("pushLiteral", "undefined")
            },
            NullLiteral: function() {
                this.opcode("pushLiteral", "null")
            },
            Hash: function(a) {
                var b = a.pairs,
                    c = 0,
                    d = b.length;
                for (this.opcode("pushHash"); c < d; c++) this.pushParam(b[c].value);
                for (; c--;) this.opcode("assignToHash", b[c].key);
                this.opcode("popHash")
            },
            opcode: function(a) {
                this.opcodes.push({
                    opcode: a,
                    args: o.call(arguments, 1),
                    loc: this.sourceNode[0].loc
                })
            },
            addDepth: function(a) {
                a && (this.useDepths = !0)
            },
            classifySexpr: function(a) {
                var b = n["default"].helpers.simpleId(a.path),
                    c = b && !!this.blockParamIndex(a.path.parts[0]),
                    d = !c && n["default"].helpers.helperExpression(a),
                    e = !c && (d || b);
                if (e && !d) {
                    var f = a.path.parts[0],
                        g = this.options;
                    g.knownHelpers[f] ? d = !0 : g.knownHelpersOnly && (e = !1)
                }
                return d ? "helper" : e ? "ambiguous" : "simple"
            },
            pushParams: function(a) {
                for (var b = 0, c = a.length; b < c; b++) this.pushParam(a[b])
            },
            pushParam: function(a) {
                var b = null != a.value ? a.value : a.original || "";
                if (this.stringParams) b.replace && (b = b.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), a.depth && this.addDepth(a.depth), this.opcode("getContext", a.depth || 0), this.opcode("pushStringParam", b, a.type), "SubExpression" === a.type && this.accept(a);
                else {
                    if (this.trackIds) {
                        var c = void 0;
                        if (!a.parts || n["default"].helpers.scopedId(a) || a.depth || (c = this.blockParamIndex(a.parts[0])), c) {
                            var d = a.parts.slice(1).join(".");
                            this.opcode("pushId", "BlockParam", c, d)
                        } else b = a.original || b, b.replace && (b = b.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", a.type, b)
                    }
                    this.accept(a)
                }
            },
            setupFullMustacheParams: function(a, b, c, d) {
                var e = a.params;
                return this.pushParams(e), this.opcode("pushProgram", b), this.opcode("pushProgram", c), a.hash ? this.accept(a.hash) : this.opcode("emptyHash", d), e
            },
            blockParamIndex: function(a) {
                for (var b = 0, c = this.options.blockParams.length; b < c; b++) {
                    var d = this.options.blockParams[b],
                        e = d && l.indexOf(d, a);
                    if (d && e >= 0) return [b, e]
                }
            }
        }
    }, function(a, b, c) {
        "use strict";

        function d(a) {
            this.value = a
        }

        function e() {}

        function f(a, b, c, d) {
            var e = b.popStack(),
                f = 0,
                g = c.length;
            for (a && g--; f < g; f++) e = b.nameLookup(e, c[f], d);
            return a ? [b.aliasable("container.strict"), "(", e, ", ", b.quotedString(c[f]), ")"] : e
        }
        var g = c(1)["default"];
        b.__esModule = !0;
        var h = c(4),
            i = c(6),
            j = g(i),
            k = c(5),
            l = c(43),
            m = g(l);
        e.prototype = {
                nameLookup: function(a, b) {
                    return "constructor" === b ? ["(", a, ".propertyIsEnumerable('constructor') ? ", a, ".constructor : undefined", ")"] : e.isValidJavaScriptVariableName(b) ? [a, ".", b] : [a, "[", JSON.stringify(b), "]"]
                },
                depthedLookup: function(a) {
                    return [this.aliasable("container.lookup"), '(depths, "', a, '")']
                },
                compilerInfo: function() {
                    var a = h.COMPILER_REVISION,
                        b = h.REVISION_CHANGES[a];
                    return [a, b]
                },
                appendToBuffer: function(a, b, c) {
                    return k.isArray(a) || (a = [a]), a = this.source.wrap(a, b), this.environment.isSimple ? ["return ", a, ";"] : c ? ["buffer += ", a, ";"] : (a.appendToBuffer = !0, a)
                },
                initializeBuffer: function() {
                    return this.quotedString("")
                },
                compile: function(a, b, c, d) {
                    this.environment = a, this.options = b, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !d, this.name = this.environment.name, this.isChild = !!c, this.context = c || {
                        decorators: [],
                        programs: [],
                        environments: []
                    }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = {
                        list: []
                    }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(a, b), this.useDepths = this.useDepths || a.useDepths || a.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || a.useBlockParams;
                    var e = a.opcodes,
                        f = void 0,
                        g = void 0,
                        h = void 0,
                        i = void 0;
                    for (h = 0, i = e.length; h < i; h++) f = e[h], this.source.currentLocation = f.loc, g = g || f.loc, this[f.opcode].apply(this, f.args);
                    if (this.source.currentLocation = g, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new j["default"]("Compile completed with content left on stack");
                    this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend("var decorators = container.decorators;\n"), this.decorators.push("return fn;"), d ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"), this.decorators.push("}\n"), this.decorators = this.decorators.merge()));
                    var k = this.createFunctionContext(d);
                    if (this.isChild) return k;
                    var l = {
                        compiler: this.compilerInfo(),
                        main: k
                    };
                    this.decorators && (l.main_d = this.decorators, l.useDecorators = !0);
                    var m = this.context,
                        n = m.programs,
                        o = m.decorators;
                    for (h = 0, i = n.length; h < i; h++) n[h] && (l[h] = n[h], o[h] && (l[h + "_d"] = o[h], l.useDecorators = !0));
                    return this.environment.usePartial && (l.usePartial = !0), this.options.data && (l.useData = !0), this.useDepths && (l.useDepths = !0), this.useBlockParams && (l.useBlockParams = !0), this.options.compat && (l.compat = !0), d ? l.compilerOptions = this.options : (l.compiler = JSON.stringify(l.compiler), this.source.currentLocation = {
                        start: {
                            line: 1,
                            column: 0
                        }
                    }, l = this.objectLiteral(l), b.srcName ? (l = l.toStringWithSourceMap({
                        file: b.destName
                    }), l.map = l.map && l.map.toString()) : l = l.toString()), l
                },
                preamble: function() {
                    this.lastContext = 0, this.source = new m["default"](this.options.srcName), this.decorators = new m["default"](this.options.srcName)
                },
                createFunctionContext: function(a) {
                    var b = "",
                        c = this.stackVars.concat(this.registers.list);
                    c.length > 0 && (b += ", " + c.join(", "));
                    var d = 0;
                    for (var e in this.aliases) {
                        var f = this.aliases[e];
                        this.aliases.hasOwnProperty(e) && f.children && f.referenceCount > 1 && (b += ", alias" + ++d + "=" + e, f.children[0] = "alias" + d)
                    }
                    var g = ["container", "depth0", "helpers", "partials", "data"];
                    (this.useBlockParams || this.useDepths) && g.push("blockParams"), this.useDepths && g.push("depths");
                    var h = this.mergeSource(b);
                    return a ? (g.push(h), Function.apply(this, g)) : this.source.wrap(["function(", g.join(","), ") {\n  ", h, "}"])
                },
                mergeSource: function(a) {
                    var b = this.environment.isSimple,
                        c = !this.forceBuffer,
                        d = void 0,
                        e = void 0,
                        f = void 0,
                        g = void 0;
                    return this.source.each(function(a) {
                        a.appendToBuffer ? (f ? a.prepend("  + ") : f = a, g = a) : (f && (e ? f.prepend("buffer += ") : d = !0, g.add(";"), f = g = void 0), e = !0, b || (c = !1))
                    }), c ? f ? (f.prepend("return "), g.add(";")) : e || this.source.push('return "";') : (a += ", buffer = " + (d ? "" : this.initializeBuffer()), f ? (f.prepend("return buffer + "), g.add(";")) : this.source.push("return buffer;")), a && this.source.prepend("var " + a.substring(2) + (d ? "" : ";\n")), this.source.merge()
                },
                blockValue: function(a) {
                    var b = this.aliasable("helpers.blockHelperMissing"),
                        c = [this.contextName(0)];
                    this.setupHelperArgs(a, 0, c);
                    var d = this.popStack();
                    c.splice(1, 0, d), this.push(this.source.functionCall(b, "call", c))
                },
                ambiguousBlockValue: function() {
                    var a = this.aliasable("helpers.blockHelperMissing"),
                        b = [this.contextName(0)];
                    this.setupHelperArgs("", 0, b, !0), this.flushInline();
                    var c = this.topStack();
                    b.splice(1, 0, c), this.pushSource(["if (!", this.lastHelper, ") { ", c, " = ", this.source.functionCall(a, "call", b), "}"])
                },
                appendContent: function(a) {
                    this.pendingContent ? a = this.pendingContent + a : this.pendingLocation = this.source.currentLocation, this.pendingContent = a
                },
                append: function() {
                    if (this.isInline()) this.replaceStack(function(a) {
                        return [" != null ? ", a, ' : ""']
                    }), this.pushSource(this.appendToBuffer(this.popStack()));
                    else {
                        var a = this.popStack();
                        this.pushSource(["if (", a, " != null) { ", this.appendToBuffer(a, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"])
                    }
                },
                appendEscaped: function() {
                    this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]))
                },
                getContext: function(a) {
                    this.lastContext = a
                },
                pushContext: function() {
                    this.pushStackLiteral(this.contextName(this.lastContext))
                },
                lookupOnContext: function(a, b, c, d) {
                    var e = 0;
                    d || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(a[e++])), this.resolvePath("context", a, e, b, c)
                },
                lookupBlockParam: function(a, b) {
                    this.useBlockParams = !0, this.push(["blockParams[", a[0], "][", a[1], "]"]), this.resolvePath("context", b, 1)
                },
                lookupData: function(a, b, c) {
                    a ? this.pushStackLiteral("container.data(data, " + a + ")") : this.pushStackLiteral("data"), this.resolvePath("data", b, 0, !0, c)
                },
                resolvePath: function(a, b, c, d, e) {
                    var g = this;
                    if (this.options.strict || this.options.assumeObjects) return void this.push(f(this.options.strict && e, this, b, a));
                    for (var h = b.length; c < h; c++) this.replaceStack(function(e) {
                        var f = g.nameLookup(e, b[c], a);
                        return d ? [" && ", f] : [" != null ? ", f, " : ", e]
                    })
                },
                resolvePossibleLambda: function() {
                    this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"])
                },
                pushStringParam: function(a, b) {
                    this.pushContext(), this.pushString(b), "SubExpression" !== b && ("string" == typeof a ? this.pushString(a) : this.pushStackLiteral(a))
                },
                emptyHash: function(a) {
                    this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(a ? "undefined" : "{}")
                },
                pushHash: function() {
                    this.hash && this.hashes.push(this.hash), this.hash = {
                        values: [],
                        types: [],
                        contexts: [],
                        ids: []
                    }
                },
                popHash: function() {
                    var a = this.hash;
                    this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(a.ids)), this.stringParams && (this.push(this.objectLiteral(a.contexts)), this.push(this.objectLiteral(a.types))), this.push(this.objectLiteral(a.values))
                },
                pushString: function(a) {
                    this.pushStackLiteral(this.quotedString(a))
                },
                pushLiteral: function(a) {
                    this.pushStackLiteral(a)
                },
                pushProgram: function(a) {
                    null != a ? this.pushStackLiteral(this.programExpression(a)) : this.pushStackLiteral(null)
                },
                registerDecorator: function(a, b) {
                    var c = this.nameLookup("decorators", b, "decorator"),
                        d = this.setupHelperArgs(b, a);
                    this.decorators.push(["fn = ", this.decorators.functionCall(c, "", ["fn", "props", "container", d]), " || fn;"])
                },
                invokeHelper: function(a, b, c) {
                    var d = this.popStack(),
                        e = this.setupHelper(a, b),
                        f = c ? [e.name, " || "] : "",
                        g = ["("].concat(f, d);
                    this.options.strict || g.push(" || ", this.aliasable("helpers.helperMissing")), g.push(")"), this.push(this.source.functionCall(g, "call", e.callParams))
                },
                invokeKnownHelper: function(a, b) {
                    var c = this.setupHelper(a, b);
                    this.push(this.source.functionCall(c.name, "call", c.callParams))
                },
                invokeAmbiguous: function(a, b) {
                    this.useRegister("helper");
                    var c = this.popStack();
                    this.emptyHash();
                    var d = this.setupHelper(0, a, b),
                        e = this.lastHelper = this.nameLookup("helpers", a, "helper"),
                        f = ["(", "(helper = ", e, " || ", c, ")"];
                    this.options.strict || (f[0] = "(helper = ", f.push(" != null ? helper : ", this.aliasable("helpers.helperMissing"))), this.push(["(", f, d.paramsInit ? ["),(", d.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", d.callParams), " : helper))"])
                },
                invokePartial: function(a, b, c) {
                    var d = [],
                        e = this.setupParams(b, 1, d);
                    a && (b = this.popStack(), delete e.name), c && (e.indent = JSON.stringify(c)), e.helpers = "helpers", e.partials = "partials", e.decorators = "container.decorators", a ? d.unshift(b) : d.unshift(this.nameLookup("partials", b, "partial")), this.options.compat && (e.depths = "depths"), e = this.objectLiteral(e), d.push(e), this.push(this.source.functionCall("container.invokePartial", "", d))
                },
                assignToHash: function(a) {
                    var b = this.popStack(),
                        c = void 0,
                        d = void 0,
                        e = void 0;
                    this.trackIds && (e = this.popStack()), this.stringParams && (d = this.popStack(), c = this.popStack());
                    var f = this.hash;
                    c && (f.contexts[a] = c), d && (f.types[a] = d), e && (f.ids[a] = e), f.values[a] = b
                },
                pushId: function(a, b, c) {
                    "BlockParam" === a ? this.pushStackLiteral("blockParams[" + b[0] + "].path[" + b[1] + "]" + (c ? " + " + JSON.stringify("." + c) : "")) : "PathExpression" === a ? this.pushString(b) : "SubExpression" === a ? this.pushStackLiteral("true") : this.pushStackLiteral("null")
                },
                compiler: e,
                compileChildren: function(a, b) {
                    for (var c = a.children, d = void 0, e = void 0, f = 0, g = c.length; f < g; f++) {
                        d = c[f], e = new this.compiler;
                        var h = this.matchExistingProgram(d);
                        if (null == h) {
                            this.context.programs.push("");
                            var i = this.context.programs.length;
                            d.index = i, d.name = "program" + i, this.context.programs[i] = e.compile(d, b, this.context, !this.precompile), this.context.decorators[i] = e.decorators, this.context.environments[i] = d, this.useDepths = this.useDepths || e.useDepths, this.useBlockParams = this.useBlockParams || e.useBlockParams, d.useDepths = this.useDepths, d.useBlockParams = this.useBlockParams
                        } else d.index = h.index, d.name = "program" + h.index, this.useDepths = this.useDepths || h.useDepths, this.useBlockParams = this.useBlockParams || h.useBlockParams
                    }
                },
                matchExistingProgram: function(a) {
                    for (var b = 0, c = this.context.environments.length; b < c; b++) {
                        var d = this.context.environments[b];
                        if (d && d.equals(a)) return d
                    }
                },
                programExpression: function(a) {
                    var b = this.environment.children[a],
                        c = [b.index, "data", b.blockParams];
                    return (this.useBlockParams || this.useDepths) && c.push("blockParams"), this.useDepths && c.push("depths"), "container.program(" + c.join(", ") + ")"
                },
                useRegister: function(a) {
                    this.registers[a] || (this.registers[a] = !0, this.registers.list.push(a))
                },
                push: function(a) {
                    return a instanceof d || (a = this.source.wrap(a)), this.inlineStack.push(a), a
                },
                pushStackLiteral: function(a) {
                    this.push(new d(a))
                },
                pushSource: function(a) {
                    this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), a && this.source.push(a)
                },
                replaceStack: function(a) {
                    var b = ["("],
                        c = void 0,
                        e = void 0,
                        f = void 0;
                    if (!this.isInline()) throw new j["default"]("replaceStack on non-inline");
                    var g = this.popStack(!0);
                    if (g instanceof d) c = [g.value], b = ["(", c], f = !0;
                    else {
                        e = !0;
                        var h = this.incrStack();
                        b = ["((", this.push(h), " = ", g, ")"], c = this.topStack()
                    }
                    var i = a.call(this, c);
                    f || this.popStack(), e && this.stackSlot--, this.push(b.concat(i, ")"))
                },
                incrStack: function() {
                    return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
                },
                topStackName: function() {
                    return "stack" + this.stackSlot
                },
                flushInline: function() {
                    var a = this.inlineStack;
                    this.inlineStack = [];
                    for (var b = 0, c = a.length; b < c; b++) {
                        var e = a[b];
                        if (e instanceof d) this.compileStack.push(e);
                        else {
                            var f = this.incrStack();
                            this.pushSource([f, " = ", e, ";"]), this.compileStack.push(f)
                        }
                    }
                },
                isInline: function() {
                    return this.inlineStack.length
                },
                popStack: function(a) {
                    var b = this.isInline(),
                        c = (b ? this.inlineStack : this.compileStack).pop();
                    if (!a && c instanceof d) return c.value;
                    if (!b) {
                        if (!this.stackSlot) throw new j["default"]("Invalid stack pop");
                        this.stackSlot--
                    }
                    return c
                },
                topStack: function() {
                    var a = this.isInline() ? this.inlineStack : this.compileStack,
                        b = a[a.length - 1];
                    return b instanceof d ? b.value : b
                },
                contextName: function(a) {
                    return this.useDepths && a ? "depths[" + a + "]" : "depth" + a
                },
                quotedString: function(a) {
                    return this.source.quotedString(a)
                },
                objectLiteral: function(a) {
                    return this.source.objectLiteral(a)
                },
                aliasable: function(a) {
                    var b = this.aliases[a];
                    return b ? (b.referenceCount++, b) : (b = this.aliases[a] = this.source.wrap(a), b.aliasable = !0, b.referenceCount = 1, b)
                },
                setupHelper: function(a, b, c) {
                    var d = [],
                        e = this.setupHelperArgs(b, a, d, c),
                        f = this.nameLookup("helpers", b, "helper"),
                        g = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
                    return {
                        params: d,
                        paramsInit: e,
                        name: f,
                        callParams: [g].concat(d)
                    }
                },
                setupParams: function(a, b, c) {
                    var d = {},
                        e = [],
                        f = [],
                        g = [],
                        h = !c,
                        i = void 0;
                    h && (c = []), d.name = this.quotedString(a), d.hash = this.popStack(), this.trackIds && (d.hashIds = this.popStack()), this.stringParams && (d.hashTypes = this.popStack(), d.hashContexts = this.popStack());
                    var j = this.popStack(),
                        k = this.popStack();
                    (k || j) && (d.fn = k || "container.noop", d.inverse = j || "container.noop");
                    for (var l = b; l--;) i = this.popStack(), c[l] = i, this.trackIds && (g[l] = this.popStack()), this.stringParams && (f[l] = this.popStack(), e[l] = this.popStack());
                    return h && (d.args = this.source.generateArray(c)), this.trackIds && (d.ids = this.source.generateArray(g)), this.stringParams && (d.types = this.source.generateArray(f), d.contexts = this.source.generateArray(e)), this.options.data && (d.data = "data"), this.useBlockParams && (d.blockParams = "blockParams"), d
                },
                setupHelperArgs: function(a, b, c, d) {
                    var e = this.setupParams(a, b, c);
                    return e = this.objectLiteral(e), d ? (this.useRegister("options"), c.push("options"), ["options=", e]) : c ? (c.push(e), "") : e
                }
            },
            function() {
                for (var a = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), b = e.RESERVED_WORDS = {}, c = 0, d = a.length; c < d; c++) b[a[c]] = !0
            }(), e.isValidJavaScriptVariableName = function(a) {
                return !e.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a)
            }, b["default"] = e, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";

        function d(a, b, c) {
            if (f.isArray(a)) {
                for (var d = [], e = 0, g = a.length; e < g; e++) d.push(b.wrap(a[e], c));
                return d
            }
            return "boolean" == typeof a || "number" == typeof a ? a + "" : a
        }

        function e(a) {
            this.srcFile = a, this.source = []
        }
        b.__esModule = !0;
        var f = c(5),
            g = void 0;
        try {} catch (h) {}
        g || (g = function(a, b, c, d) {
            this.src = "", d && this.add(d)
        }, g.prototype = {
            add: function(a) {
                f.isArray(a) && (a = a.join("")), this.src += a
            },
            prepend: function(a) {
                f.isArray(a) && (a = a.join("")), this.src = a + this.src
            },
            toStringWithSourceMap: function() {
                return {
                    code: this.toString()
                }
            },
            toString: function() {
                return this.src
            }
        }), e.prototype = {
            isEmpty: function() {
                return !this.source.length
            },
            prepend: function(a, b) {
                this.source.unshift(this.wrap(a, b))
            },
            push: function(a, b) {
                this.source.push(this.wrap(a, b))
            },
            merge: function() {
                var a = this.empty();
                return this.each(function(b) {
                    a.add(["  ", b, "\n"])
                }), a
            },
            each: function(a) {
                for (var b = 0, c = this.source.length; b < c; b++) a(this.source[b])
            },
            empty: function() {
                var a = this.currentLocation || {
                    start: {}
                };
                return new g(a.start.line, a.start.column, this.srcFile)
            },
            wrap: function(a) {
                var b = arguments.length <= 1 || void 0 === arguments[1] ? this.currentLocation || {
                    start: {}
                } : arguments[1];
                return a instanceof g ? a : (a = d(a, this, b), new g(b.start.line, b.start.column, this.srcFile, a))
            },
            functionCall: function(a, b, c) {
                return c = this.generateList(c), this.wrap([a, b ? "." + b + "(" : "(", c, ")"])
            },
            quotedString: function(a) {
                return '"' + (a + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
            },
            objectLiteral: function(a) {
                var b = [];
                for (var c in a)
                    if (a.hasOwnProperty(c)) {
                        var e = d(a[c], this);
                        "undefined" !== e && b.push([this.quotedString(c), ":", e])
                    } var f = this.generateList(b);
                return f.prepend("{"), f.add("}"), f
            },
            generateList: function(a) {
                for (var b = this.empty(), c = 0, e = a.length; c < e; c++) c && b.add(","), b.add(d(a[c], this));
                return b
            },
            generateArray: function(a) {
                var b = this.generateList(a);
                return b.prepend("["), b.add("]"), b
            }
        }, b["default"] = e, a.exports = b["default"]
    }])
});;
(function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Dexie = t()
})(this, function() {
    "use strict";
    var m = function() {
        return (m = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    };

    function O() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        for (var r = Array(e), i = 0, t = 0; t < n; t++)
            for (var o = arguments[t], u = 0, a = o.length; u < a; u++, i++) r[i] = o[u];
        return r
    }
    var _ = Object.keys,
        d = Array.isArray,
        h = "undefined" != typeof self ? self : "undefined" != typeof window ? window : global;

    function s(t, n) {
        return "object" != typeof n || _(n).forEach(function(e) {
            t[e] = n[e]
        }), t
    }
    "undefined" == typeof Promise || h.Promise || (h.Promise = Promise);
    var r = Object.getPrototypeOf,
        n = {}.hasOwnProperty;

    function g(e, t) {
        return n.call(e, t)
    }

    function i(t, n) {
        "function" == typeof n && (n = n(r(t))), _(n).forEach(function(e) {
            a(t, e, n[e])
        })
    }
    var u = Object.defineProperty;

    function a(e, t, n, r) {
        u(e, t, s(n && g(n, "get") && "function" == typeof n.get ? {
            get: n.get,
            set: n.set,
            configurable: !0
        } : {
            value: n,
            configurable: !0,
            writable: !0
        }, r))
    }

    function o(t) {
        return {
            from: function(e) {
                return t.prototype = Object.create(e.prototype), a(t.prototype, "constructor", t), {
                    extend: i.bind(null, t.prototype)
                }
            }
        }
    }
    var c = Object.getOwnPropertyDescriptor;

    function l(e, t) {
        var n;
        return c(e, t) || (n = r(e)) && l(n, t)
    }
    var f = [].slice;

    function p(e, t, n) {
        return f.call(e, t, n)
    }

    function y(e, t) {
        return t(e)
    }

    function v(e) {
        if (!e) throw new Error("Assertion Failed")
    }

    function b(e) {
        h.setImmediate ? setImmediate(e) : setTimeout(e, 0)
    }

    function w(e, i) {
        return e.reduce(function(e, t, n) {
            var r = i(t, n);
            return r && (e[r[0]] = r[1]), e
        }, {})
    }

    function x(e, t) {
        if (g(e, t)) return e[t];
        if (!t) return e;
        if ("string" != typeof t) {
            for (var n = [], r = 0, i = t.length; r < i; ++r) {
                var o = x(e, t[r]);
                n.push(o)
            }
            return n
        }
        var u = t.indexOf(".");
        if (-1 !== u) {
            var a = e[t.substr(0, u)];
            return void 0 === a ? void 0 : x(a, t.substr(u + 1))
        }
    }

    function k(e, t, n) {
        if (e && void 0 !== t && !("isFrozen" in Object && Object.isFrozen(e)))
            if ("string" != typeof t && "length" in t) {
                v("string" != typeof n && "length" in n);
                for (var r = 0, i = t.length; r < i; ++r) k(e, t[r], n[r])
            } else {
                var o, u, a = t.indexOf("."); - 1 !== a ? (o = t.substr(0, a), "" === (u = t.substr(a + 1)) ? void 0 === n ? d(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = n : k(e[o] || (e[o] = {}), u, n)) : void 0 === n ? d(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n
            }
    }

    function P(t, e) {
        "string" == typeof e ? k(t, e, void 0) : "length" in e && [].map.call(e, function(e) {
            k(t, e, void 0)
        })
    }

    function E(e) {
        var t = {};
        for (var n in e) g(e, n) && (t[n] = e[n]);
        return t
    }
    var t = [].concat;

    function j(e) {
        return t.apply([], e)
    }
    var e = "Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set".split(",").concat(j([8, 16, 32, 64].map(function(t) {
            return ["Int", "Uint", "Float"].map(function(e) {
                return e + t + "Array"
            })
        }))).filter(function(e) {
            return h[e]
        }),
        S = e.map(function(e) {
            return h[e]
        }),
        A = w(e, function(e) {
            return [e, !0]
        });

    function K(e) {
        if (!e || "object" != typeof e) return e;
        var t;
        if (d(e)) {
            t = [];
            for (var n = 0, r = e.length; n < r; ++n) t.push(K(e[n]))
        } else if (0 <= S.indexOf(e.constructor)) t = e;
        else
            for (var i in t = e.constructor ? Object.create(e.constructor.prototype) : {}, e) g(e, i) && (t[i] = K(e[i]));
        return t
    }
    var C = {}.toString;

    function I(e) {
        return C.call(e).slice(8, -1)
    }
    var T = function(e, t) {
        return "Array" === t ? "" + e.map(function(e) {
            return T(e, I(e))
        }) : "ArrayBuffer" === t ? "" + new Uint8Array(e) : "Date" === t ? e.getTime() : ArrayBuffer.isView(e) ? "" + new Uint8Array(e.buffer) : e
    };

    function D(o, u, a, s) {
        return a = a || {}, s = s || "", _(o).forEach(function(e) {
            var t, n, r, i;
            g(u, e) ? (t = o[e], n = u[e], "object" == typeof t && "object" == typeof n && t && n ? (r = I(t)) === (i = I(n)) ? A[r] ? T(t, r) !== T(n, i) && (a[s + e] = u[e]) : D(t, n, a, s + e + ".") : a[s + e] = u[e] : t !== n && (a[s + e] = u[e])) : a[s + e] = void 0
        }), _(u).forEach(function(e) {
            g(o, e) || (a[s + e] = u[e])
        }), a
    }
    var B = "undefined" != typeof Symbol && Symbol.iterator,
        R = B ? function(e) {
            var t;
            return null != e && (t = e[B]) && t.apply(e)
        } : function() {
            return null
        },
        F = {};

    function q(e) {
        var t, n, r, i;
        if (1 === arguments.length) {
            if (d(e)) return e.slice();
            if (this === F && "string" == typeof e) return [e];
            if (i = R(e)) {
                for (n = []; !(r = i.next()).done;) n.push(r.value);
                return n
            }
            if (null == e) return [e];
            if ("number" != typeof(t = e.length)) return [e];
            for (n = new Array(t); t--;) n[t] = e[t];
            return n
        }
        for (t = arguments.length, n = new Array(t); t--;) n[t] = arguments[t];
        return n
    }
    var M = "undefined" != typeof Symbol ? function(e) {
            return "AsyncFunction" === e[Symbol.toStringTag]
        } : function() {
            return !1
        },
        N = "undefined" != typeof location && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);

    function U(e, t) {
        N = e, V = t
    }
    var V = function() {
            return !0
        },
        W = !new Error("").stack;

    function z() {
        if (W) try {
            throw new Error
        } catch (e) {
            return e
        }
        return new Error
    }

    function L(e, t) {
        var n = e.stack;
        return n ? (t = t || 0, 0 === n.indexOf(e.name) && (t += (e.name + e.message).split("\n").length), n.split("\n").slice(t).filter(V).map(function(e) {
            return "\n" + e
        }).join("")) : ""
    }
    var Y = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"],
        G = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Y),
        H = {
            VersionChanged: "Database version changed by other database connection",
            DatabaseClosed: "Database has been closed",
            Abort: "Transaction aborted",
            TransactionInactive: "Transaction has already completed or failed"
        };

    function Q(e, t) {
        this._e = z(), this.name = e, this.message = t
    }

    function X(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(e) {
            return t[e].toString()
        }).filter(function(e, t, n) {
            return n.indexOf(e) === t
        }).join("\n")
    }

    function J(e, t, n, r) {
        this._e = z(), this.failures = t, this.failedKeys = r, this.successCount = n, this.message = X(e, t)
    }

    function $(e, t) {
        this._e = z(), this.name = "BulkError", this.failures = t, this.message = X(e, t)
    }
    o(Q).from(Error).extend({
        stack: {
            get: function() {
                return this._stack || (this._stack = this.name + ": " + this.message + L(this._e, 2))
            }
        },
        toString: function() {
            return this.name + ": " + this.message
        }
    }), o(J).from(Q), o($).from(Q);
    var Z = G.reduce(function(e, t) {
            return e[t] = t + "Error", e
        }, {}),
        ee = Q,
        te = G.reduce(function(e, n) {
            var r = n + "Error";

            function t(e, t) {
                this._e = z(), this.name = r, e ? "string" == typeof e ? (this.message = e + (t ? "\n " + t : ""), this.inner = t || null) : "object" == typeof e && (this.message = e.name + " " + e.message, this.inner = e) : (this.message = H[n] || r, this.inner = null)
            }
            return o(t).from(ee), e[n] = t, e
        }, {});
    te.Syntax = SyntaxError, te.Type = TypeError, te.Range = RangeError;
    var ne = Y.reduce(function(e, t) {
        return e[t + "Error"] = te[t], e
    }, {});
    var re = G.reduce(function(e, t) {
        return -1 === ["Syntax", "Type", "Range"].indexOf(t) && (e[t + "Error"] = te[t]), e
    }, {});

    function ie() {}

    function oe(e) {
        return e
    }

    function ue(t, n) {
        return null == t || t === oe ? n : function(e) {
            return n(t(e))
        }
    }

    function ae(e, t) {
        return function() {
            e.apply(this, arguments), t.apply(this, arguments)
        }
    }

    function se(i, o) {
        return i === ie ? o : function() {
            var e = i.apply(this, arguments);
            void 0 !== e && (arguments[0] = e);
            var t = this.onsuccess,
                n = this.onerror;
            this.onsuccess = null, this.onerror = null;
            var r = o.apply(this, arguments);
            return t && (this.onsuccess = this.onsuccess ? ae(t, this.onsuccess) : t), n && (this.onerror = this.onerror ? ae(n, this.onerror) : n), void 0 !== r ? r : e
        }
    }

    function ce(n, r) {
        return n === ie ? r : function() {
            n.apply(this, arguments);
            var e = this.onsuccess,
                t = this.onerror;
            this.onsuccess = this.onerror = null, r.apply(this, arguments), e && (this.onsuccess = this.onsuccess ? ae(e, this.onsuccess) : e), t && (this.onerror = this.onerror ? ae(t, this.onerror) : t)
        }
    }

    function le(o, u) {
        return o === ie ? u : function(e) {
            var t = o.apply(this, arguments);
            s(e, t);
            var n = this.onsuccess,
                r = this.onerror;
            this.onsuccess = null, this.onerror = null;
            var i = u.apply(this, arguments);
            return n && (this.onsuccess = this.onsuccess ? ae(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? ae(r, this.onerror) : r), void 0 === t ? void 0 === i ? void 0 : i : s(t, i)
        }
    }

    function fe(e, t) {
        return e === ie ? t : function() {
            return !1 !== t.apply(this, arguments) && e.apply(this, arguments)
        }
    }

    function he(i, o) {
        return i === ie ? o : function() {
            var e = i.apply(this, arguments);
            if (e && "function" == typeof e.then) {
                for (var t = this, n = arguments.length, r = new Array(n); n--;) r[n] = arguments[n];
                return e.then(function() {
                    return o.apply(t, r)
                })
            }
            return o.apply(this, arguments)
        }
    }
    re.ModifyError = J, re.DexieError = Q, re.BulkError = $;
    var pe = {},
        de = 100,
        ye = 100,
        ve = "undefined" == typeof Promise ? [] : function() {
            var e = Promise.resolve();
            if ("undefined" == typeof crypto || !crypto.subtle) return [e, e.__proto__, e];
            var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
            return [t, t.__proto__, e]
        }(),
        me = ve[0],
        ge = ve[1],
        be = ve[2],
        _e = ge && ge.then,
        we = me && me.constructor,
        xe = !!be,
        ke = !1,
        Pe = be ? function() {
            be.then(Le)
        } : h.setImmediate ? setImmediate.bind(null, Le) : h.MutationObserver ? function() {
            var e = document.createElement("div");
            new MutationObserver(function() {
                Le(), e = null
            }).observe(e, {
                attributes: !0
            }), e.setAttribute("i", "1")
        } : function() {
            setTimeout(Le, 0)
        },
        Ee = function(e, t) {
            De.push([e, t]), je && (Pe(), je = !1)
        },
        Oe = !0,
        je = !0,
        Se = [],
        Ae = [],
        Ke = null,
        Ce = oe,
        Ie = {
            id: "global",
            global: !0,
            ref: 0,
            unhandleds: [],
            onunhandled: yt,
            pgp: !1,
            env: {},
            finalize: function() {
                this.unhandleds.forEach(function(e) {
                    try {
                        yt(e[0], e[1])
                    } catch (e) {}
                })
            }
        },
        Te = Ie,
        De = [],
        Be = 0,
        Re = [];

    function Fe(e) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this.onuncatched = ie, this._lib = !1;
        var t = this._PSD = Te;
        if (N && (this._stackHolder = z(), this._prev = null, this._numPrev = 0), "function" != typeof e) {
            if (e !== pe) throw new TypeError("Not a function");
            return this._state = arguments[1], this._value = arguments[2], void(!1 === this._state && Ne(this, this._value))
        }
        this._state = null, this._value = null, ++t.ref,
            function t(r, e) {
                try {
                    e(function(n) {
                        if (null === r._state) {
                            if (n === r) throw new TypeError("A promise cannot be resolved with itself.");
                            var e = r._lib && Ye();
                            n && "function" == typeof n.then ? t(r, function(e, t) {
                                n instanceof Fe ? n._then(e, t) : n.then(e, t)
                            }) : (r._state = !0, r._value = n, Ue(r)), e && Ge()
                        }
                    }, Ne.bind(null, r))
                } catch (e) {
                    Ne(r, e)
                }
            }(this, e)
    }
    var qe = {
        get: function() {
            var a = Te,
                t = tt;

            function e(n, r) {
                var i = this,
                    o = !a.global && (a !== Te || t !== tt),
                    u = o && !ot(),
                    e = new Fe(function(e, t) {
                        Ve(i, new Me(ht(n, a, o, u), ht(r, a, o, u), e, t, a))
                    });
                return N && ze(e, this), e
            }
            return e.prototype = pe, e
        },
        set: function(e) {
            a(this, "then", e && e.prototype === pe ? qe : {
                get: function() {
                    return e
                },
                set: qe.set
            })
        }
    };

    function Me(e, t, n, r, i) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = r, this.psd = i
    }

    function Ne(t, n) {
        var e, r;
        Ae.push(n), null === t._state && (e = t._lib && Ye(), n = Ce(n), t._state = !1, t._value = n, N && null !== n && "object" == typeof n && !n._promise && function(e, t, n) {
            try {
                e.apply(null, n)
            } catch (e) {
                t && t(e)
            }
        }(function() {
            var e = l(n, "stack");
            n._promise = t, a(n, "stack", {
                get: function() {
                    return ke ? e && (e.get ? e.get.apply(n) : e.value) : t.stack
                }
            })
        }), r = t, Se.some(function(e) {
            return e._value === r._value
        }) || Se.push(r), Ue(t), e && Ge())
    }

    function Ue(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var n = 0, r = t.length; n < r; ++n) Ve(e, t[n]);
        var i = e._PSD;
        --i.ref || i.finalize(), 0 === Be && (++Be, Ee(function() {
            0 == --Be && He()
        }, []))
    }

    function Ve(e, t) {
        if (null !== e._state) {
            var n = e._state ? t.onFulfilled : t.onRejected;
            if (null === n) return (e._state ? t.resolve : t.reject)(e._value);
            ++t.psd.ref, ++Be, Ee(We, [n, e, t])
        } else e._listeners.push(t)
    }

    function We(e, t, n) {
        try {
            var r, i = (Ke = t)._value;
            t._state ? r = e(i) : (Ae.length && (Ae = []), r = e(i), -1 === Ae.indexOf(i) && function(e) {
                var t = Se.length;
                for (; t;)
                    if (Se[--t]._value === e._value) return Se.splice(t, 1)
            }(t)), n.resolve(r)
        } catch (e) {
            n.reject(e)
        } finally {
            Ke = null, 0 == --Be && He(), --n.psd.ref || n.psd.finalize()
        }
    }

    function ze(e, t) {
        var n = t ? t._numPrev + 1 : 0;
        n < de && (e._prev = t, e._numPrev = n)
    }

    function Le() {
        Ye() && Ge()
    }

    function Ye() {
        var e = Oe;
        return je = Oe = !1, e
    }

    function Ge() {
        var e, t, n;
        do {
            for (; 0 < De.length;)
                for (e = De, De = [], n = e.length, t = 0; t < n; ++t) {
                    var r = e[t];
                    r[0].apply(null, r[1])
                }
        } while (0 < De.length);
        je = Oe = !0
    }

    function He() {
        var e = Se;
        Se = [], e.forEach(function(e) {
            e._PSD.onunhandled.call(null, e._value, e)
        });
        for (var t = Re.slice(0), n = t.length; n;) t[--n]()
    }

    function Qe(e) {
        return new Fe(pe, !1, e)
    }

    function Xe(n, r) {
        var i = Te;
        return function() {
            var e = Ye(),
                t = Te;
            try {
                return st(i, !0), n.apply(this, arguments)
            } catch (e) {
                r && r(e)
            } finally {
                st(t, !1), e && Ge()
            }
        }
    }
    i(Fe.prototype, {
        then: qe,
        _then: function(e, t) {
            Ve(this, new Me(null, null, e, t, Te))
        },
        catch: function(e) {
            if (1 === arguments.length) return this.then(null, e);
            var t = e,
                n = arguments[1];
            return "function" == typeof t ? this.then(null, function(e) {
                return (e instanceof t ? n : Qe)(e)
            }) : this.then(null, function(e) {
                return (e && e.name === t ? n : Qe)(e)
            })
        },
        finally: function(t) {
            return this.then(function(e) {
                return t(), e
            }, function(e) {
                return t(), Qe(e)
            })
        },
        stack: {
            get: function() {
                if (this._stack) return this._stack;
                try {
                    ke = !0;
                    var e = function e(t, n, r) {
                        if (n.length === r) return n;
                        var i = ""; {
                            var o, u, a;
                            !1 === t._state && (null != (o = t._value) ? (u = o.name || "Error", a = o.message || o, i = L(o, 0)) : (u = o, a = ""), n.push(u + (a ? ": " + a : "") + i))
                        }
                        N && ((i = L(t._stackHolder, 2)) && -1 === n.indexOf(i) && n.push(i), t._prev && e(t._prev, n, r));
                        return n
                    }(this, [], 20).join("\nFrom previous: ");
                    return null !== this._state && (this._stack = e), e
                } finally {
                    ke = !1
                }
            }
        },
        timeout: function(r, i) {
            var o = this;
            return r < 1 / 0 ? new Fe(function(e, t) {
                var n = setTimeout(function() {
                    return t(new te.Timeout(i))
                }, r);
                o.then(e, t).finally(clearTimeout.bind(null, n))
            }) : this
        }
    }), "undefined" != typeof Symbol && Symbol.toStringTag && a(Fe.prototype, Symbol.toStringTag, "Dexie.Promise"), Ie.env = ct(), i(Fe, {
        all: function() {
            var o = q.apply(null, arguments).map(ut);
            return new Fe(function(n, r) {
                0 === o.length && n([]);
                var i = o.length;
                o.forEach(function(e, t) {
                    return Fe.resolve(e).then(function(e) {
                        o[t] = e, --i || n(o)
                    }, r)
                })
            })
        },
        resolve: function(n) {
            if (n instanceof Fe) return n;
            if (n && "function" == typeof n.then) return new Fe(function(e, t) {
                n.then(e, t)
            });
            var e = new Fe(pe, !0, n);
            return ze(e, Ke), e
        },
        reject: Qe,
        race: function() {
            var e = q.apply(null, arguments).map(ut);
            return new Fe(function(t, n) {
                e.map(function(e) {
                    return Fe.resolve(e).then(t, n)
                })
            })
        },
        PSD: {
            get: function() {
                return Te
            },
            set: function(e) {
                return Te = e
            }
        },
        totalEchoes: {
            get: function() {
                return tt
            }
        },
        newPSD: rt,
        usePSD: lt,
        scheduler: {
            get: function() {
                return Ee
            },
            set: function(e) {
                Ee = e
            }
        },
        rejectionMapper: {
            get: function() {
                return Ce
            },
            set: function(e) {
                Ce = e
            }
        },
        follow: function(i, n) {
            return new Fe(function(e, t) {
                return rt(function(n, r) {
                    var e = Te;
                    e.unhandleds = [], e.onunhandled = r, e.finalize = ae(function() {
                        var t, e = this;
                        t = function() {
                            0 === e.unhandleds.length ? n() : r(e.unhandleds[0])
                        }, Re.push(function e() {
                            t(), Re.splice(Re.indexOf(e), 1)
                        }), ++Be, Ee(function() {
                            0 == --Be && He()
                        }, [])
                    }, e.finalize), i()
                }, n, e, t)
            })
        }
    }), we && (we.allSettled && a(Fe, "allSettled", function() {
        var e = q.apply(null, arguments).map(ut);
        return new Fe(function(n) {
            0 === e.length && n([]);
            var r = e.length,
                i = new Array(r);
            e.forEach(function(e, t) {
                return Fe.resolve(e).then(function(e) {
                    return i[t] = {
                        status: "fulfilled",
                        value: e
                    }
                }, function(e) {
                    return i[t] = {
                        status: "rejected",
                        reason: e
                    }
                }).then(function() {
                    return --r || n(i)
                })
            })
        })
    }), we.any && "undefined" != typeof AggregateError && a(Fe, "any", function() {
        var e = q.apply(null, arguments).map(ut);
        return new Fe(function(n, r) {
            0 === e.length && r(new AggregateError([]));
            var i = e.length,
                o = new Array(i);
            e.forEach(function(e, t) {
                return Fe.resolve(e).then(function(e) {
                    return n(e)
                }, function(e) {
                    o[t] = e, --i || r(new AggregateError(o))
                })
            })
        })
    }));
    var Je = {
            awaits: 0,
            echoes: 0,
            id: 0
        },
        $e = 0,
        Ze = [],
        et = 0,
        tt = 0,
        nt = 0;

    function rt(e, t, n, r) {
        var i = Te,
            o = Object.create(i);
        o.parent = i, o.ref = 0, o.global = !1, o.id = ++nt;
        var u = Ie.env;
        o.env = xe ? {
            Promise: Fe,
            PromiseProp: {
                value: Fe,
                configurable: !0,
                writable: !0
            },
            all: Fe.all,
            race: Fe.race,
            allSettled: Fe.allSettled,
            any: Fe.any,
            resolve: Fe.resolve,
            reject: Fe.reject,
            nthen: pt(u.nthen, o),
            gthen: pt(u.gthen, o)
        } : {}, t && s(o, t), ++i.ref, o.finalize = function() {
            --this.parent.ref || this.parent.finalize()
        };
        var a = lt(o, e, n, r);
        return 0 === o.ref && o.finalize(), a
    }

    function it() {
        return Je.id || (Je.id = ++$e), ++Je.awaits, Je.echoes += ye, Je.id
    }

    function ot() {
        return !!Je.awaits && (0 == --Je.awaits && (Je.id = 0), Je.echoes = Je.awaits * ye, !0)
    }

    function ut(e) {
        return Je.echoes && e && e.constructor === we ? (it(), e.then(function(e) {
            return ot(), e
        }, function(e) {
            return ot(), vt(e)
        })) : e
    }

    function at() {
        var e = Ze[Ze.length - 1];
        Ze.pop(), st(e, !1)
    }

    function st(e, t) {
        var n, r, i = Te;
        (t ? !Je.echoes || et++ && e === Te : !et || --et && e === Te) || ft(t ? function(e) {
            ++tt, Je.echoes && 0 != --Je.echoes || (Je.echoes = Je.id = 0), Ze.push(Te), st(e, !0)
        }.bind(null, e) : at), e !== Te && (Te = e, i === Ie && (Ie.env = ct()), xe && (n = Ie.env.Promise, r = e.env, ge.then = r.nthen, n.prototype.then = r.gthen, (i.global || e.global) && (Object.defineProperty(h, "Promise", r.PromiseProp), n.all = r.all, n.race = r.race, n.resolve = r.resolve, n.reject = r.reject, r.allSettled && (n.allSettled = r.allSettled), r.any && (n.any = r.any))))
    }

    function ct() {
        var e = h.Promise;
        return xe ? {
            Promise: e,
            PromiseProp: Object.getOwnPropertyDescriptor(h, "Promise"),
            all: e.all,
            race: e.race,
            allSettled: e.allSettled,
            any: e.any,
            resolve: e.resolve,
            reject: e.reject,
            nthen: ge.then,
            gthen: e.prototype.then
        } : {}
    }

    function lt(e, t, n, r, i) {
        var o = Te;
        try {
            return st(e, !0), t(n, r, i)
        } finally {
            st(o, !1)
        }
    }

    function ft(e) {
        _e.call(me, e)
    }

    function ht(t, n, r, i) {
        return "function" != typeof t ? t : function() {
            var e = Te;
            r && it(), st(n, !0);
            try {
                return t.apply(this, arguments)
            } finally {
                st(e, !1), i && ft(ot)
            }
        }
    }

    function pt(n, r) {
        return function(e, t) {
            return n.call(this, ht(e, r), ht(t, r))
        }
    } - 1 === ("" + _e).indexOf("[native code]") && (it = ot = ie);
    var dt = "unhandledrejection";

    function yt(e, t) {
        var n;
        try {
            n = t.onuncatched(e)
        } catch (e) {}
        if (!1 !== n) try {
            var r, i = {
                promise: t,
                reason: e
            };
            if (h.document && document.createEvent ? ((r = document.createEvent("Event")).initEvent(dt, !0, !0), s(r, i)) : h.CustomEvent && s(r = new CustomEvent(dt, {
                    detail: i
                }), i), r && h.dispatchEvent && (dispatchEvent(r), !h.PromiseRejectionEvent && h.onunhandledrejection)) try {
                h.onunhandledrejection(r)
            } catch (e) {}
            N && r && !r.defaultPrevented && console.warn("Unhandled rejection: " + (e.stack || e))
        } catch (e) {}
    }
    var vt = Fe.reject;

    function mt(e) {
        return !/(dexie\.js|dexie\.min\.js)/.test(e)
    }
    var gt = String.fromCharCode(65535),
        bt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",
        _t = "String expected.",
        wt = [],
        xt = "undefined" != typeof navigator && /(MSIE|Trident|Edge)/.test(navigator.userAgent),
        kt = xt,
        Pt = xt,
        Et = "__dbnames",
        Ot = "readonly",
        jt = "readwrite";

    function St(e, t) {
        return e ? t ? function() {
            return e.apply(this, arguments) && t.apply(this, arguments)
        } : e : t
    }
    var At = {
        type: 3,
        lower: -1 / 0,
        lowerOpen: !1,
        upper: [
            []
        ],
        upperOpen: !1
    };

    function Kt(t) {
        return function(e) {
            return void 0 === x(e, t) && P(e = K(e), t), e
        }
    }
    var Ct = (It.prototype._trans = function(e, r, t) {
        var n = this._tx || Te.trans,
            i = this.name;

        function o(e, t, n) {
            if (!n.schema[i]) throw new te.NotFound("Table " + i + " not part of transaction");
            return r(n.idbtrans, n)
        }
        var u = Ye();
        try {
            return n && n.db === this.db ? n === Te.trans ? n._promise(e, o, t) : rt(function() {
                return n._promise(e, o, t)
            }, {
                trans: n,
                transless: Te.transless || Te
            }) : function e(t, n, r, i) {
                if (t._state.openComplete || Te.letThrough) {
                    var o = t._createTransaction(n, r, t._dbSchema);
                    try {
                        o.create()
                    } catch (e) {
                        return vt(e)
                    }
                    return o._promise(n, function(e, t) {
                        return rt(function() {
                            return Te.trans = o, i(e, t, o)
                        })
                    }).then(function(e) {
                        return o._completion.then(function() {
                            return e
                        })
                    })
                }
                if (!t._state.isBeingOpened) {
                    if (!t._options.autoOpen) return vt(new te.DatabaseClosed);
                    t.open().catch(ie)
                }
                return t._state.dbReadyPromise.then(function() {
                    return e(t, n, r, i)
                })
            }(this.db, e, [this.name], o)
        } finally {
            u && Ge()
        }
    }, It.prototype.get = function(t, e) {
        var n = this;
        return t && t.constructor === Object ? this.where(t).first(e) : this._trans("readonly", function(e) {
            return n.core.get({
                trans: e,
                key: t
            }).then(function(e) {
                return n.hook.reading.fire(e)
            })
        }).then(e)
    }, It.prototype.where = function(u) {
        if ("string" == typeof u) return new this.db.WhereClause(this, u);
        if (d(u)) return new this.db.WhereClause(this, "[" + u.join("+") + "]");
        var n = _(u);
        if (1 === n.length) return this.where(n[0]).equals(u[n[0]]);
        var e = this.schema.indexes.concat(this.schema.primKey).filter(function(t) {
            return t.compound && n.every(function(e) {
                return 0 <= t.keyPath.indexOf(e)
            }) && t.keyPath.every(function(e) {
                return 0 <= n.indexOf(e)
            })
        })[0];
        if (e && this.db._maxKey !== gt) return this.where(e.name).equals(e.keyPath.map(function(e) {
            return u[e]
        }));
        !e && N && console.warn("The query " + JSON.stringify(u) + " on " + this.name + " would benefit of a compound index [" + n.join("+") + "]");
        var a = this.schema.idxByName,
            r = this.db._deps.indexedDB;

        function s(e, t) {
            try {
                return 0 === r.cmp(e, t)
            } catch (e) {
                return !1
            }
        }
        var t = n.reduce(function(e, n) {
                var t = e[0],
                    r = e[1],
                    i = a[n],
                    o = u[n];
                return [t || i, t || !i ? St(r, i && i.multi ? function(e) {
                    var t = x(e, n);
                    return d(t) && t.some(function(e) {
                        return s(o, e)
                    })
                } : function(e) {
                    return s(o, x(e, n))
                }) : r]
            }, [null, null]),
            i = t[0],
            o = t[1];
        return i ? this.where(i.name).equals(u[i.keyPath]).filter(o) : e ? this.filter(o) : this.where(n).equals("")
    }, It.prototype.filter = function(e) {
        return this.toCollection().and(e)
    }, It.prototype.count = function(e) {
        return this.toCollection().count(e)
    }, It.prototype.offset = function(e) {
        return this.toCollection().offset(e)
    }, It.prototype.limit = function(e) {
        return this.toCollection().limit(e)
    }, It.prototype.each = function(e) {
        return this.toCollection().each(e)
    }, It.prototype.toArray = function(e) {
        return this.toCollection().toArray(e)
    }, It.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this))
    }, It.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, d(e) ? "[" + e.join("+") + "]" : e))
    }, It.prototype.reverse = function() {
        return this.toCollection().reverse()
    }, It.prototype.mapToClass = function(r) {
        function e(e) {
            if (!e) return e;
            var t = Object.create(r.prototype);
            for (var n in e)
                if (g(e, n)) try {
                    t[n] = e[n]
                } catch (e) {}
            return t
        }
        return this.schema.mappedClass = r, this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = e, this.hook("reading", e), r
    }, It.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
            s(this, e)
        })
    }, It.prototype.add = function(t, n) {
        var r = this,
            e = this.schema.primKey,
            i = e.auto,
            o = e.keyPath,
            u = t;
        return o && i && (u = Kt(o)(t)), this._trans("readwrite", function(e) {
            return r.core.mutate({
                trans: e,
                type: "add",
                keys: null != n ? [n] : null,
                values: [u]
            })
        }).then(function(e) {
            return e.numFailures ? Fe.reject(e.failures[0]) : e.lastResult
        }).then(function(e) {
            if (o) try {
                k(t, o, e)
            } catch (e) {}
            return e
        })
    }, It.prototype.update = function(t, n) {
        if ("object" != typeof n || d(n)) throw new te.InvalidArgument("Modifications must be an object.");
        if ("object" != typeof t || d(t)) return this.where(":id").equals(t).modify(n);
        _(n).forEach(function(e) {
            k(t, e, n[e])
        });
        var e = x(t, this.schema.primKey.keyPath);
        return void 0 === e ? vt(new te.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(n)
    }, It.prototype.put = function(t, n) {
        var r = this,
            e = this.schema.primKey,
            i = e.auto,
            o = e.keyPath,
            u = t;
        return o && i && (u = Kt(o)(t)), this._trans("readwrite", function(e) {
            return r.core.mutate({
                trans: e,
                type: "put",
                values: [u],
                keys: null != n ? [n] : null
            })
        }).then(function(e) {
            return e.numFailures ? Fe.reject(e.failures[0]) : e.lastResult
        }).then(function(e) {
            if (o) try {
                k(t, o, e)
            } catch (e) {}
            return e
        })
    }, It.prototype.delete = function(t) {
        var n = this;
        return this._trans("readwrite", function(e) {
            return n.core.mutate({
                trans: e,
                type: "delete",
                keys: [t]
            })
        }).then(function(e) {
            return e.numFailures ? Fe.reject(e.failures[0]) : void 0
        })
    }, It.prototype.clear = function() {
        var t = this;
        return this._trans("readwrite", function(e) {
            return t.core.mutate({
                trans: e,
                type: "deleteRange",
                range: At
            })
        }).then(function(e) {
            return e.numFailures ? Fe.reject(e.failures[0]) : void 0
        })
    }, It.prototype.bulkGet = function(t) {
        var n = this;
        return this._trans("readonly", function(e) {
            return n.core.getMany({
                keys: t,
                trans: e
            }).then(function(e) {
                return e.map(function(e) {
                    return n.hook.reading.fire(e)
                })
            })
        })
    }, It.prototype.bulkAdd = function(u, e, t) {
        var a = this,
            s = Array.isArray(e) ? e : void 0,
            c = (t = t || (s ? void 0 : e)) ? t.allKeys : void 0;
        return this._trans("readwrite", function(e) {
            var t = a.schema.primKey,
                n = t.auto,
                r = t.keyPath;
            if (r && s) throw new te.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
            if (s && s.length !== u.length) throw new te.InvalidArgument("Arguments objects and keys must have the same length");
            var o = u.length,
                i = r && n ? u.map(Kt(r)) : u;
            return a.core.mutate({
                trans: e,
                type: "add",
                keys: s,
                values: i,
                wantResults: c
            }).then(function(e) {
                var t = e.numFailures,
                    n = e.results,
                    r = e.lastResult,
                    i = e.failures;
                if (0 === t) return c ? n : r;
                throw new $(a.name + ".bulkAdd(): " + t + " of " + o + " operations failed", Object.keys(i).map(function(e) {
                    return i[e]
                }))
            })
        })
    }, It.prototype.bulkPut = function(u, e, t) {
        var a = this,
            s = Array.isArray(e) ? e : void 0,
            c = (t = t || (s ? void 0 : e)) ? t.allKeys : void 0;
        return this._trans("readwrite", function(e) {
            var t = a.schema.primKey,
                n = t.auto,
                r = t.keyPath;
            if (r && s) throw new te.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
            if (s && s.length !== u.length) throw new te.InvalidArgument("Arguments objects and keys must have the same length");
            var o = u.length,
                i = r && n ? u.map(Kt(r)) : u;
            return a.core.mutate({
                trans: e,
                type: "put",
                keys: s,
                values: i,
                wantResults: c
            }).then(function(e) {
                var t = e.numFailures,
                    n = e.results,
                    r = e.lastResult,
                    i = e.failures;
                if (0 === t) return c ? n : r;
                throw new $(a.name + ".bulkPut(): " + t + " of " + o + " operations failed", Object.keys(i).map(function(e) {
                    return i[e]
                }))
            })
        })
    }, It.prototype.bulkDelete = function(t) {
        var i = this,
            o = t.length;
        return this._trans("readwrite", function(e) {
            return i.core.mutate({
                trans: e,
                type: "delete",
                keys: t
            })
        }).then(function(e) {
            var t = e.numFailures,
                n = e.lastResult,
                r = e.failures;
            if (0 === t) return n;
            throw new $(i.name + ".bulkDelete(): " + t + " of " + o + " operations failed", r)
        })
    }, It);

    function It() {}

    function Tt(i) {
        var u = {},
            t = function(e, t) {
                if (t) {
                    for (var n = arguments.length, r = new Array(n - 1); --n;) r[n - 1] = arguments[n];
                    return u[e].subscribe.apply(null, r), i
                }
                if ("string" == typeof e) return u[e]
            };
        t.addEventType = a;
        for (var e = 1, n = arguments.length; e < n; ++e) a(arguments[e]);
        return t;

        function a(e, n, r) {
            if ("object" != typeof e) {
                var i;
                n = n || fe;
                var o = {
                    subscribers: [],
                    fire: r = r || ie,
                    subscribe: function(e) {
                        -1 === o.subscribers.indexOf(e) && (o.subscribers.push(e), o.fire = n(o.fire, e))
                    },
                    unsubscribe: function(t) {
                        o.subscribers = o.subscribers.filter(function(e) {
                            return e !== t
                        }), o.fire = o.subscribers.reduce(n, r)
                    }
                };
                return u[e] = t[e] = o, o
            }
            _(i = e).forEach(function(e) {
                var t = i[e];
                if (d(t)) a(e, i[e][0], i[e][1]);
                else {
                    if ("asap" !== t) throw new te.InvalidArgument("Invalid event config");
                    var n = a(e, oe, function() {
                        for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
                        n.subscribers.forEach(function(e) {
                            b(function() {
                                e.apply(null, t)
                            })
                        })
                    })
                }
            })
        }
    }

    function Dt(e, t) {
        return o(t).from({
            prototype: e
        }), t
    }

    function Bt(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter)
    }

    function Rt(e, t) {
        e.filter = St(e.filter, t)
    }

    function Ft(e, t, n) {
        var r = e.replayFilter;
        e.replayFilter = r ? function() {
            return St(r(), t())
        } : t, e.justLimit = n && !r
    }

    function qt(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var n = t.getIndexByKeyPath(e.index);
        if (!n) throw new te.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return n
    }

    function Mt(e, t, n) {
        var r = qt(e, t.schema);
        return t.openCursor({
            trans: n,
            values: !e.keysOnly,
            reverse: "prev" === e.dir,
            unique: !!e.unique,
            query: {
                index: r,
                range: e.range
            }
        })
    }

    function Nt(e, o, t, n) {
        var u = e.replayFilter ? St(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
            var a = {},
                r = function(e, t, n) {
                    var r, i;
                    u && !u(t, n, function(e) {
                        return t.stop(e)
                    }, function(e) {
                        return t.fail(e)
                    }) || ("[object ArrayBuffer]" === (i = "" + (r = t.primaryKey)) && (i = "" + new Uint8Array(r)), g(a, i) || (a[i] = !0, o(e, t, n)))
                };
            return Promise.all([e.or._iterate(r, t), Ut(Mt(e, n, t), e.algorithm, r, !e.keysOnly && e.valueMapper)])
        }
        return Ut(Mt(e, n, t), St(e.algorithm, u), o, !e.keysOnly && e.valueMapper)
    }

    function Ut(e, r, i, o) {
        var u = Xe(o ? function(e, t, n) {
            return i(o(e), t, n)
        } : i);
        return e.then(function(n) {
            if (n) return n.start(function() {
                var t = function() {
                    return n.continue()
                };
                r && !r(n, function(e) {
                    return t = e
                }, function(e) {
                    n.stop(e), t = ie
                }, function(e) {
                    n.fail(e), t = ie
                }) || u(n.value, n, function(e) {
                    return t = e
                }), t()
            })
        })
    }
    var Vt = (Wt.prototype._read = function(e, t) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, vt.bind(null, n.error)) : n.table._trans("readonly", e).then(t)
    }, Wt.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, vt.bind(null, t.error)) : t.table._trans("readwrite", e, "locked")
    }, Wt.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = St(t.algorithm, e)
    }, Wt.prototype._iterate = function(e, t) {
        return Nt(this._ctx, e, t, this._ctx.table.core)
    }, Wt.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype),
            n = Object.create(this._ctx);
        return e && s(n, e), t._ctx = n, t
    }, Wt.prototype.raw = function() {
        return this._ctx.valueMapper = null, this
    }, Wt.prototype.each = function(t) {
        var n = this._ctx;
        return this._read(function(e) {
            return Nt(n, t, e, n.table.core)
        })
    }, Wt.prototype.count = function(e) {
        var i = this;
        return this._read(function(e) {
            var t = i._ctx,
                n = t.table.core;
            if (Bt(t, !0)) return n.count({
                trans: e,
                query: {
                    index: qt(t, n.schema),
                    range: t.range
                }
            }).then(function(e) {
                return Math.min(e, t.limit)
            });
            var r = 0;
            return Nt(t, function() {
                return ++r, !1
            }, e, n).then(function() {
                return r
            })
        }).then(e)
    }, Wt.prototype.sortBy = function(e, t) {
        var n = e.split(".").reverse(),
            r = n[0],
            i = n.length - 1;

        function o(e, t) {
            return t ? o(e[n[t]], t - 1) : e[r]
        }
        var u = "next" === this._ctx.dir ? 1 : -1;

        function a(e, t) {
            var n = o(e, i),
                r = o(t, i);
            return n < r ? -u : r < n ? u : 0
        }
        return this.toArray(function(e) {
            return e.sort(a)
        }).then(t)
    }, Wt.prototype.toArray = function(e) {
        var o = this;
        return this._read(function(e) {
            var t = o._ctx;
            if ("next" === t.dir && Bt(t, !0) && 0 < t.limit) {
                var n = t.valueMapper,
                    r = qt(t, t.table.core.schema);
                return t.table.core.query({
                    trans: e,
                    limit: t.limit,
                    values: !0,
                    query: {
                        index: r,
                        range: t.range
                    }
                }).then(function(e) {
                    var t = e.result;
                    return n ? t.map(n) : t
                })
            }
            var i = [];
            return Nt(t, function(e) {
                return i.push(e)
            }, e, t.table.core).then(function() {
                return i
            })
        }, e)
    }, Wt.prototype.offset = function(t) {
        var e = this._ctx;
        return t <= 0 || (e.offset += t, Bt(e) ? Ft(e, function() {
            var n = t;
            return function(e, t) {
                return 0 === n || (1 === n ? --n : t(function() {
                    e.advance(n), n = 0
                }), !1)
            }
        }) : Ft(e, function() {
            var e = t;
            return function() {
                return --e < 0
            }
        })), this
    }, Wt.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Ft(this._ctx, function() {
            var r = e;
            return function(e, t, n) {
                return --r <= 0 && t(n), 0 <= r
            }
        }, !0), this
    }, Wt.prototype.until = function(r, i) {
        return Rt(this._ctx, function(e, t, n) {
            return !r(e.value) || (t(n), i)
        }), this
    }, Wt.prototype.first = function(e) {
        return this.limit(1).toArray(function(e) {
            return e[0]
        }).then(e)
    }, Wt.prototype.last = function(e) {
        return this.reverse().first(e)
    }, Wt.prototype.filter = function(t) {
        var e, n;
        return Rt(this._ctx, function(e) {
            return t(e.value)
        }), e = this._ctx, n = t, e.isMatch = St(e.isMatch, n), this
    }, Wt.prototype.and = function(e) {
        return this.filter(e)
    }, Wt.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this)
    }, Wt.prototype.reverse = function() {
        return this._ctx.dir = "prev" === this._ctx.dir ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this
    }, Wt.prototype.desc = function() {
        return this.reverse()
    }, Wt.prototype.eachKey = function(n) {
        var e = this._ctx;
        return e.keysOnly = !e.isMatch, this.each(function(e, t) {
            n(t.key, t)
        })
    }, Wt.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e)
    }, Wt.prototype.eachPrimaryKey = function(n) {
        var e = this._ctx;
        return e.keysOnly = !e.isMatch, this.each(function(e, t) {
            n(t.primaryKey, t)
        })
    }, Wt.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var n = [];
        return this.each(function(e, t) {
            n.push(t.key)
        }).then(function() {
            return n
        }).then(e)
    }, Wt.prototype.primaryKeys = function(e) {
        var n = this._ctx;
        if ("next" === n.dir && Bt(n, !0) && 0 < n.limit) return this._read(function(e) {
            var t = qt(n, n.table.core.schema);
            return n.table.core.query({
                trans: e,
                values: !1,
                limit: n.limit,
                query: {
                    index: t,
                    range: n.range
                }
            })
        }).then(function(e) {
            return e.result
        }).then(e);
        n.keysOnly = !n.isMatch;
        var r = [];
        return this.each(function(e, t) {
            r.push(t.primaryKey)
        }).then(function() {
            return r
        }).then(e)
    }, Wt.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e)
    }, Wt.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(e) {
            return e[0]
        }).then(e)
    }, Wt.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e)
    }, Wt.prototype.distinct = function() {
        var e = this._ctx,
            t = e.index && e.table.schema.idxByName[e.index];
        if (!t || !t.multi) return this;
        var r = {};
        return Rt(this._ctx, function(e) {
            var t = e.primaryKey.toString(),
                n = g(r, t);
            return r[t] = !0, !n
        }), this
    }, Wt.prototype.modify = function(c) {
        var n = this,
            r = this._ctx;
        return this._write(function(h) {
            var o, u, p;

            function d(e, t) {
                var n = t.failures,
                    r = t.numFailures;
                s += e - r;
                for (var i = 0, o = _(n); i < o.length; i++) {
                    var u = o[i];
                    a.push(n[u])
                }
            }
            p = "function" == typeof c ? c : (o = _(c), u = o.length, function(e) {
                for (var t = !1, n = 0; n < u; ++n) {
                    var r = o[n],
                        i = c[r];
                    x(e, r) !== i && (k(e, r, i), t = !0)
                }
                return t
            });
            var y = r.table.core,
                e = y.schema.primaryKey,
                v = e.outbound,
                m = e.extractKey,
                g = "testmode" in Rn ? 1 : 2e3,
                b = n.db.core.cmp,
                a = [],
                s = 0,
                t = [];
            return n.clone().primaryKeys().then(function(l) {
                var f = function(s) {
                    var c = Math.min(g, l.length - s);
                    return y.getMany({
                        trans: h,
                        keys: l.slice(s, s + c)
                    }).then(function(e) {
                        for (var n = [], t = [], r = v ? [] : null, i = [], o = 0; o < c; ++o) {
                            var u = e[o],
                                a = {
                                    value: K(u),
                                    primKey: l[s + o]
                                };
                            !1 !== p.call(a, a.value, a) && (null == a.value ? i.push(l[s + o]) : v || 0 === b(m(u), m(a.value)) ? (t.push(a.value), v && r.push(l[s + o])) : (i.push(l[s + o]), n.push(a.value)))
                        }
                        return Promise.resolve(0 < n.length && y.mutate({
                            trans: h,
                            type: "add",
                            values: n
                        }).then(function(e) {
                            for (var t in e.failures) i.splice(parseInt(t), 1);
                            d(n.length, e)
                        })).then(function(e) {
                            return 0 < t.length && y.mutate({
                                trans: h,
                                type: "put",
                                keys: r,
                                values: t
                            }).then(function(e) {
                                return d(t.length, e)
                            })
                        }).then(function() {
                            return 0 < i.length && y.mutate({
                                trans: h,
                                type: "delete",
                                keys: i
                            }).then(function(e) {
                                return d(i.length, e)
                            })
                        }).then(function() {
                            return l.length > s + c && f(s + g)
                        })
                    })
                };
                return f(0).then(function() {
                    if (0 < a.length) throw new J("Error modifying one or more objects", a, s, t);
                    return l.length
                })
            })
        })
    }, Wt.prototype.delete = function() {
        var i = this._ctx,
            r = i.range;
        return Bt(i) && (i.isPrimKey && !Pt || 3 === r.type) ? this._write(function(e) {
            var t = i.table.core.schema.primaryKey,
                n = r;
            return i.table.core.count({
                trans: e,
                query: {
                    index: t,
                    range: n
                }
            }).then(function(r) {
                return i.table.core.mutate({
                    trans: e,
                    type: "deleteRange",
                    range: n
                }).then(function(e) {
                    var t = e.failures,
                        n = (e.lastResult, e.results, e.numFailures);
                    if (n) throw new J("Could not delete some values", Object.keys(t).map(function(e) {
                        return t[e]
                    }), r - n);
                    return r - n
                })
            })
        }) : this.modify(function(e, t) {
            return t.value = null
        })
    }, Wt);

    function Wt() {}

    function zt(e, t) {
        return e < t ? -1 : e === t ? 0 : 1
    }

    function Lt(e, t) {
        return t < e ? -1 : e === t ? 0 : 1
    }

    function Yt(e, t, n) {
        var r = e instanceof $t ? new e.Collection(e) : e;
        return r._ctx.error = new(n || TypeError)(t), r
    }

    function Gt(e) {
        return new e.Collection(e, function() {
            return Jt("")
        }).limit(0)
    }

    function Ht(e, t, n, r, i, o) {
        for (var u = Math.min(e.length, r.length), a = -1, s = 0; s < u; ++s) {
            var c = t[s];
            if (c !== r[s]) return i(e[s], n[s]) < 0 ? e.substr(0, s) + n[s] + n.substr(s + 1) : i(e[s], r[s]) < 0 ? e.substr(0, s) + r[s] + n.substr(s + 1) : 0 <= a ? e.substr(0, a) + t[a] + n.substr(a + 1) : null;
            i(e[s], c) < 0 && (a = s)
        }
        return u < r.length && "next" === o ? e + n.substr(e.length) : u < e.length && "prev" === o ? e.substr(0, n.length) : a < 0 ? null : e.substr(0, a) + r[a] + n.substr(a + 1)
    }

    function Qt(e, s, n, r) {
        var i, c, l, f, h, p, d, y = n.length;
        if (!n.every(function(e) {
                return "string" == typeof e
            })) return Yt(e, _t);

        function t(e) {
            i = "next" === e ? function(e) {
                return e.toUpperCase()
            } : function(e) {
                return e.toLowerCase()
            }, c = "next" === e ? function(e) {
                return e.toLowerCase()
            } : function(e) {
                return e.toUpperCase()
            }, l = "next" === e ? zt : Lt;
            var t = n.map(function(e) {
                return {
                    lower: c(e),
                    upper: i(e)
                }
            }).sort(function(e, t) {
                return l(e.lower, t.lower)
            });
            f = t.map(function(e) {
                return e.upper
            }), h = t.map(function(e) {
                return e.lower
            }), d = "next" === (p = e) ? "" : r
        }
        t("next");
        var o = new e.Collection(e, function() {
            return Xt(f[0], h[y - 1] + r)
        });
        o._ondirectionchange = function(e) {
            t(e)
        };
        var v = 0;
        return o._addAlgorithm(function(e, t, n) {
            var r = e.key;
            if ("string" != typeof r) return !1;
            var i = c(r);
            if (s(i, h, v)) return !0;
            for (var o = null, u = v; u < y; ++u) {
                var a = Ht(r, i, f[u], h[u], l, p);
                null === a && null === o ? v = u + 1 : (null === o || 0 < l(o, a)) && (o = a)
            }
            return t(null !== o ? function() {
                e.continue(o + d)
            } : n), !1
        }), o
    }

    function Xt(e, t, n, r) {
        return {
            type: 2,
            lower: e,
            upper: t,
            lowerOpen: n,
            upperOpen: r
        }
    }

    function Jt(e) {
        return {
            type: 1,
            lower: e,
            upper: e
        }
    }
    var $t = (Object.defineProperty(Zt.prototype, "Collection", {
        get: function() {
            return this._ctx.table.db.Collection
        },
        enumerable: !0,
        configurable: !0
    }), Zt.prototype.between = function(e, t, n, r) {
        n = !1 !== n, r = !0 === r;
        try {
            return 0 < this._cmp(e, t) || 0 === this._cmp(e, t) && (n || r) && (!n || !r) ? Gt(this) : new this.Collection(this, function() {
                return Xt(e, t, !n, !r)
            })
        } catch (e) {
            return Yt(this, bt)
        }
    }, Zt.prototype.equals = function(e) {
        return null == e ? Yt(this, bt) : new this.Collection(this, function() {
            return Jt(e)
        })
    }, Zt.prototype.above = function(e) {
        return null == e ? Yt(this, bt) : new this.Collection(this, function() {
            return Xt(e, void 0, !0)
        })
    }, Zt.prototype.aboveOrEqual = function(e) {
        return null == e ? Yt(this, bt) : new this.Collection(this, function() {
            return Xt(e, void 0, !1)
        })
    }, Zt.prototype.below = function(e) {
        return null == e ? Yt(this, bt) : new this.Collection(this, function() {
            return Xt(void 0, e, !1, !0)
        })
    }, Zt.prototype.belowOrEqual = function(e) {
        return null == e ? Yt(this, bt) : new this.Collection(this, function() {
            return Xt(void 0, e)
        })
    }, Zt.prototype.startsWith = function(e) {
        return "string" != typeof e ? Yt(this, _t) : this.between(e, e + gt, !0, !0)
    }, Zt.prototype.startsWithIgnoreCase = function(e) {
        return "" === e ? this.startsWith(e) : Qt(this, function(e, t) {
            return 0 === e.indexOf(t[0])
        }, [e], gt)
    }, Zt.prototype.equalsIgnoreCase = function(e) {
        return Qt(this, function(e, t) {
            return e === t[0]
        }, [e], "")
    }, Zt.prototype.anyOfIgnoreCase = function() {
        var e = q.apply(F, arguments);
        return 0 === e.length ? Gt(this) : Qt(this, function(e, t) {
            return -1 !== t.indexOf(e)
        }, e, "")
    }, Zt.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = q.apply(F, arguments);
        return 0 === e.length ? Gt(this) : Qt(this, function(t, e) {
            return e.some(function(e) {
                return 0 === t.indexOf(e)
            })
        }, e, gt)
    }, Zt.prototype.anyOf = function() {
        var t = this,
            i = q.apply(F, arguments),
            o = this._cmp;
        try {
            i.sort(o)
        } catch (e) {
            return Yt(this, bt)
        }
        if (0 === i.length) return Gt(this);
        var e = new this.Collection(this, function() {
            return Xt(i[0], i[i.length - 1])
        });
        e._ondirectionchange = function(e) {
            o = "next" === e ? t._ascending : t._descending, i.sort(o)
        };
        var u = 0;
        return e._addAlgorithm(function(e, t, n) {
            for (var r = e.key; 0 < o(r, i[u]);)
                if (++u === i.length) return t(n), !1;
            return 0 === o(r, i[u]) || (t(function() {
                e.continue(i[u])
            }), !1)
        }), e
    }, Zt.prototype.notEqual = function(e) {
        return this.inAnyRange([
            [-1 / 0, e],
            [e, this.db._maxKey]
        ], {
            includeLowers: !1,
            includeUppers: !1
        })
    }, Zt.prototype.noneOf = function() {
        var e = q.apply(F, arguments);
        if (0 === e.length) return new this.Collection(this);
        try {
            e.sort(this._ascending)
        } catch (e) {
            return Yt(this, bt)
        }
        var t = e.reduce(function(e, t) {
            return e ? e.concat([
                [e[e.length - 1][1], t]
            ]) : [
                [-1 / 0, t]
            ]
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, {
            includeLowers: !1,
            includeUppers: !1
        })
    }, Zt.prototype.inAnyRange = function(e, t) {
        var o = this,
            u = this._cmp,
            a = this._ascending,
            n = this._descending,
            s = this._min,
            c = this._max;
        if (0 === e.length) return Gt(this);
        if (!e.every(function(e) {
                return void 0 !== e[0] && void 0 !== e[1] && a(e[0], e[1]) <= 0
            })) return Yt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", te.InvalidArgument);
        var l, r = !t || !1 !== t.includeLowers,
            i = t && !0 === t.includeUppers,
            f = a;

        function h(e, t) {
            return f(e[0], t[0])
        }
        try {
            (l = e.reduce(function(e, t) {
                for (var n = 0, r = e.length; n < r; ++n) {
                    var i = e[n];
                    if (u(t[0], i[1]) < 0 && 0 < u(t[1], i[0])) {
                        i[0] = s(i[0], t[0]), i[1] = c(i[1], t[1]);
                        break
                    }
                }
                return n === r && e.push(t), e
            }, [])).sort(h)
        } catch (e) {
            return Yt(this, bt)
        }
        var p = 0,
            d = i ? function(e) {
                return 0 < a(e, l[p][1])
            } : function(e) {
                return 0 <= a(e, l[p][1])
            },
            y = r ? function(e) {
                return 0 < n(e, l[p][0])
            } : function(e) {
                return 0 <= n(e, l[p][0])
            },
            v = d,
            m = new this.Collection(this, function() {
                return Xt(l[0][0], l[l.length - 1][1], !r, !i)
            });
        return m._ondirectionchange = function(e) {
            f = "next" === e ? (v = d, a) : (v = y, n), l.sort(h)
        }, m._addAlgorithm(function(e, t, n) {
            for (var r, i = e.key; v(i);)
                if (++p === l.length) return t(n), !1;
            return !d(r = i) && !y(r) || (0 === o._cmp(i, l[p][1]) || 0 === o._cmp(i, l[p][0]) || t(function() {
                f === a ? e.continue(l[p][0]) : e.continue(l[p][1])
            }), !1)
        }), m
    }, Zt.prototype.startsWithAnyOf = function() {
        var e = q.apply(F, arguments);
        return e.every(function(e) {
            return "string" == typeof e
        }) ? 0 === e.length ? Gt(this) : this.inAnyRange(e.map(function(e) {
            return [e, e + gt]
        })) : Yt(this, "startsWithAnyOf() only works with strings")
    }, Zt);

    function Zt() {}

    function en(e) {
        return 1 === e.length ? e[0] : e
    }

    function tn(e) {
        try {
            return e.only([
                []
            ]), [
                []
            ]
        } catch (e) {
            return gt
        }
    }

    function nn(t) {
        return Xe(function(e) {
            return rn(e), t(e.target.error), !1
        })
    }

    function rn(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault()
    }
    var on = (un.prototype._lock = function() {
        return v(!Te.global), ++this._reculock, 1 !== this._reculock || Te.global || (Te.lockOwnerFor = this), this
    }, un.prototype._unlock = function() {
        if (v(!Te.global), 0 == --this._reculock)
            for (Te.global || (Te.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked();) {
                var e = this._blockedFuncs.shift();
                try {
                    lt(e[1], e[0])
                } catch (e) {}
            }
        return this
    }, un.prototype._locked = function() {
        return this._reculock && Te.lockOwnerFor !== this
    }, un.prototype.create = function(t) {
        var n = this;
        if (!this.mode) return this;
        var e = this.db.idbdb,
            r = this.db._state.dbOpenError;
        if (v(!this.idbtrans), !t && !e) switch (r && r.name) {
            case "DatabaseClosedError":
                throw new te.DatabaseClosed(r);
            case "MissingAPIError":
                throw new te.MissingAPI(r.message, r);
            default:
                throw new te.OpenFailed(r)
        }
        if (!this.active) throw new te.TransactionInactive;
        return v(null === this._completion._state), (t = this.idbtrans = t || e.transaction(en(this.storeNames), this.mode)).onerror = Xe(function(e) {
            rn(e), n._reject(t.error)
        }), t.onabort = Xe(function(e) {
            rn(e), n.active && n._reject(new te.Abort(t.error)), n.active = !1, n.on("abort").fire(e)
        }), t.oncomplete = Xe(function() {
            n.active = !1, n._resolve()
        }), this
    }, un.prototype._promise = function(n, r, i) {
        var o = this;
        if ("readwrite" === n && "readwrite" !== this.mode) return vt(new te.ReadOnly("Transaction is readonly"));
        if (!this.active) return vt(new te.TransactionInactive);
        if (this._locked()) return new Fe(function(e, t) {
            o._blockedFuncs.push([function() {
                o._promise(n, r, i).then(e, t)
            }, Te])
        });
        if (i) return rt(function() {
            var e = new Fe(function(e, t) {
                o._lock();
                var n = r(e, t, o);
                n && n.then && n.then(e, t)
            });
            return e.finally(function() {
                return o._unlock()
            }), e._lib = !0, e
        });
        var e = new Fe(function(e, t) {
            var n = r(e, t, o);
            n && n.then && n.then(e, t)
        });
        return e._lib = !0, e
    }, un.prototype._root = function() {
        return this.parent ? this.parent._root() : this
    }, un.prototype.waitFor = function(e) {
        var t, r = this._root(),
            i = Fe.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
            return i
        }) : (r._waitingFor = i, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function e() {
            for (++r._spinCount; r._waitingQueue.length;) r._waitingQueue.shift()();
            r._waitingFor && (t.get(-1 / 0).onsuccess = e)
        }());
        var o = r._waitingFor;
        return new Fe(function(t, n) {
            i.then(function(e) {
                return r._waitingQueue.push(Xe(t.bind(null, e)))
            }, function(e) {
                return r._waitingQueue.push(Xe(n.bind(null, e)))
            }).finally(function() {
                r._waitingFor === o && (r._waitingFor = null)
            })
        })
    }, un.prototype.abort = function() {
        this.active && this._reject(new te.Abort), this.active = !1
    }, un.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (g(t, e)) return t[e];
        var n = this.schema[e];
        if (!n) throw new te.NotFound("Table " + e + " not part of transaction");
        var r = new this.db.Table(e, n, this);
        return r.core = this.db.core.table(e), t[e] = r
    }, un);

    function un() {}

    function an(e, t, n, r, i, o, u) {
        return {
            name: e,
            keyPath: t,
            unique: n,
            multi: r,
            auto: i,
            compound: o,
            src: (n && !u ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + sn(t)
        }
    }

    function sn(e) {
        return "string" == typeof e ? e : e ? "[" + [].join.call(e, "+") + "]" : ""
    }

    function cn(e, t, n) {
        return {
            name: e,
            primKey: t,
            indexes: n,
            mappedClass: null,
            idxByName: w(n, function(e) {
                return [e.name, e]
            })
        }
    }

    function ln(t) {
        return null == t ? function() {} : "string" == typeof t ? 1 === (n = t).split(".").length ? function(e) {
            return e[n]
        } : function(e) {
            return x(e, n)
        } : function(e) {
            return x(e, t)
        };
        var n
    }

    function fn(e, t) {
        return "delete" === t.type ? t.keys : t.keys || t.values.map(e.extractKey)
    }

    function hn(e) {
        return [].slice.call(e)
    }
    var pn = 0;

    function dn(e) {
        return null == e ? ":id" : "string" == typeof e ? e : "[" + e.join("+") + "]"
    }

    function yn(e, t, o, n) {
        var r = t.cmp.bind(t);

        function E(e) {
            if (3 === e.type) return null;
            if (4 === e.type) throw new Error("Cannot convert never type to IDBKeyRange");
            var t = e.lower,
                n = e.upper,
                r = e.lowerOpen,
                i = e.upperOpen;
            return void 0 === t ? void 0 === n ? null : o.upperBound(n, !!i) : void 0 === n ? o.lowerBound(t, !!r) : o.bound(t, n, !!r, !!i)
        }

        function i(k) {
            var m, P = k.name;
            return {
                name: P,
                schema: k,
                mutate: function(e) {
                    var m = e.trans,
                        g = e.type,
                        b = e.keys,
                        _ = e.values,
                        w = e.range,
                        x = e.wantResults;
                    return new Promise(function(n, e) {
                        n = Xe(n);
                        var t = m.objectStore(P),
                            r = null == t.keyPath,
                            i = "put" === g || "add" === g;
                        if (!i && "delete" !== g && "deleteRange" !== g) throw new Error("Invalid operation type: " + g);
                        var o = (b || _ || {
                            length: 1
                        }).length;
                        if (b && _ && b.length !== _.length) throw new Error("Given keys array must have same length as given values array.");
                        if (0 === o) return n({
                            numFailures: 0,
                            failures: {},
                            results: [],
                            lastResult: void 0
                        });

                        function u(e) {
                            ++f, rn(e), c && (c[e.target._reqno] = void 0), l[e.target._reqno] = e.target.error
                        }

                        function a(e) {
                            var t = e.target;
                            c[t._reqno] = t.result
                        }
                        var s, c = x && O(b || fn(k.primaryKey, {
                                type: g,
                                keys: b,
                                values: _
                            })),
                            l = [],
                            f = 0;
                        if ("deleteRange" === g) {
                            if (4 === w.type) return n({
                                numFailures: f,
                                failures: l,
                                results: c,
                                lastResult: void 0
                            });
                            s = 3 === w.type ? t.clear() : t.delete(E(w))
                        } else {
                            var h = i ? r ? [_, b] : [_, null] : [b, null],
                                p = h[0],
                                d = h[1];
                            if (i)
                                for (var y = 0; y < o; ++y)(s = d && void 0 !== d[y] ? t[g](p[y], d[y]) : t[g](p[y]))._reqno = y, c && void 0 === c[y] && (s.onsuccess = a), s.onerror = u;
                            else
                                for (y = 0; y < o; ++y)(s = t[g](p[y]))._reqno = y, s.onerror = u
                        }

                        function v(e) {
                            var t = e.target.result;
                            c && (c[o - 1] = t), n({
                                numFailures: f,
                                failures: l,
                                results: c,
                                lastResult: t
                            })
                        }
                        s.onerror = function(e) {
                            u(e), v(e)
                        }, s.onsuccess = v
                    })
                },
                getMany: function(e) {
                    var f = e.trans,
                        h = e.keys;
                    return new Promise(function(n, e) {
                        n = Xe(n);
                        for (var t, r = f.objectStore(P), i = h.length, o = new Array(i), u = 0, a = 0, s = function(e) {
                                var t = e.target;
                                null != (o[t._pos] = t.result) && 0, ++a === u && n(o)
                            }, c = nn(e), l = 0; l < i; ++l) {
                            null != h[l] && ((t = r.get(h[l]))._pos = l, t.onsuccess = s, t.onerror = c, ++u)
                        }
                        0 === u && n(o)
                    })
                },
                get: function(e) {
                    var r = e.trans,
                        i = e.key;
                    return new Promise(function(t, e) {
                        t = Xe(t);
                        var n = r.objectStore(P).get(i);
                        n.onsuccess = function(e) {
                            return t(e.target.result)
                        }, n.onerror = nn(e)
                    })
                },
                query: (m = f, function(v) {
                    return new Promise(function(n, e) {
                        n = Xe(n);
                        var t, r, i, o, u = v.trans,
                            a = v.values,
                            s = v.limit,
                            c = v.query,
                            l = s === 1 / 0 ? void 0 : s,
                            f = c.index,
                            h = c.range,
                            p = u.objectStore(P),
                            d = f.isPrimaryKey ? p : p.index(f.name),
                            y = E(h);
                        if (0 === s) return n({
                            result: []
                        });
                        m ? ((t = a ? d.getAll(y, l) : d.getAllKeys(y, l)).onsuccess = function(e) {
                            return n({
                                result: e.target.result
                            })
                        }, t.onerror = nn(e)) : (r = 0, i = !a && "openKeyCursor" in d ? d.openKeyCursor(y) : d.openCursor(y), o = [], i.onsuccess = function(e) {
                            var t = i.result;
                            return t ? (o.push(a ? t.value : t.primaryKey), ++r === s ? n({
                                result: o
                            }) : void t.continue()) : n({
                                result: o
                            })
                        }, i.onerror = nn(e))
                    })
                }),
                openCursor: function(e) {
                    var c = e.trans,
                        a = e.values,
                        l = e.query,
                        f = e.reverse,
                        h = e.unique;
                    return new Promise(function(t, n) {
                        t = Xe(t);
                        var e = l.index,
                            r = l.range,
                            i = c.objectStore(P),
                            o = e.isPrimaryKey ? i : i.index(e.name),
                            u = f ? h ? "prevunique" : "prev" : h ? "nextunique" : "next",
                            s = !a && "openKeyCursor" in o ? o.openKeyCursor(E(r), u) : o.openCursor(E(r), u);
                        s.onerror = nn(n), s.onsuccess = Xe(function(e) {
                            var r, i, o, u, a = s.result;
                            a ? (a.___id = ++pn, a.done = !1, r = a.continue.bind(a), i = (i = a.continuePrimaryKey) && i.bind(a), o = a.advance.bind(a), u = function() {
                                throw new Error("Cursor not stopped")
                            }, a.trans = c, a.stop = a.continue = a.continuePrimaryKey = a.advance = function() {
                                throw new Error("Cursor not started")
                            }, a.fail = Xe(n), a.next = function() {
                                var e = this,
                                    t = 1;
                                return this.start(function() {
                                    return t-- ? e.continue() : e.stop()
                                }).then(function() {
                                    return e
                                })
                            }, a.start = function(e) {
                                function t() {
                                    if (s.result) try {
                                        e()
                                    } catch (e) {
                                        a.fail(e)
                                    } else a.done = !0, a.start = function() {
                                        throw new Error("Cursor behind last entry")
                                    }, a.stop()
                                }
                                var n = new Promise(function(t, e) {
                                    t = Xe(t), s.onerror = nn(e), a.fail = e, a.stop = function(e) {
                                        a.stop = a.continue = a.continuePrimaryKey = a.advance = u, t(e)
                                    }
                                });
                                return s.onsuccess = Xe(function(e) {
                                    (s.onsuccess = t)()
                                }), a.continue = r, a.continuePrimaryKey = i, a.advance = o, t(), n
                            }, t(a)) : t(null)
                        }, n)
                    })
                },
                count: function(e) {
                    var t = e.query,
                        u = e.trans,
                        a = t.index,
                        s = t.range;
                    return new Promise(function(t, e) {
                        var n = u.objectStore(P),
                            r = a.isPrimaryKey ? n : n.index(a.name),
                            i = E(s),
                            o = i ? r.count(i) : r.count();
                        o.onsuccess = Xe(function(e) {
                            return t(e.target.result)
                        }), o.onerror = nn(e)
                    })
                }
            }
        }
        var u, a, s, c = (a = n, s = hn((u = e).objectStoreNames), {
                schema: {
                    name: u.name,
                    tables: s.map(function(e) {
                        return a.objectStore(e)
                    }).map(function(t) {
                        var e = t.keyPath,
                            n = t.autoIncrement,
                            r = d(e),
                            i = null == e,
                            u = {},
                            o = {
                                name: t.name,
                                primaryKey: {
                                    name: null,
                                    isPrimaryKey: !0,
                                    outbound: i,
                                    compound: r,
                                    keyPath: e,
                                    autoIncrement: n,
                                    unique: !0,
                                    extractKey: ln(e)
                                },
                                indexes: hn(t.indexNames).map(function(e) {
                                    return t.index(e)
                                }).map(function(e) {
                                    var t = e.name,
                                        n = e.unique,
                                        r = e.multiEntry,
                                        i = e.keyPath,
                                        o = {
                                            name: t,
                                            compound: d(i),
                                            keyPath: i,
                                            unique: n,
                                            multiEntry: r,
                                            extractKey: ln(i)
                                        };
                                    return u[dn(i)] = o
                                }),
                                getIndexByKeyPath: function(e) {
                                    return u[dn(e)]
                                }
                            };
                        return u[":id"] = o.primaryKey, null != e && (u[dn(e)] = o.primaryKey), o
                    })
                },
                hasGetAll: 0 < s.length && "getAll" in a.objectStore(s[0]) && !("undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
            }),
            l = c.schema,
            f = c.hasGetAll,
            h = l.tables.map(i),
            p = {};
        return h.forEach(function(e) {
            return p[e.name] = e
        }), {
            stack: "dbcore",
            transaction: e.transaction.bind(e),
            table: function(e) {
                if (!p[e]) throw new Error("Table '" + e + "' not found");
                return p[e]
            },
            cmp: r,
            MIN_KEY: -1 / 0,
            MAX_KEY: tn(o),
            schema: l
        }
    }

    function vn(e, t, n, r) {
        var i, o = n.IDBKeyRange,
            u = n.indexedDB;
        return {
            dbcore: (i = yn(t, u, o, r), e.dbcore.reduce(function(e, t) {
                var n = t.create;
                return m(m({}, e), n(e))
            }, i))
        }
    }

    function mn(n, e) {
        var t = e.db,
            r = vn(n._middlewares, t, n._deps, e);
        n.core = r.dbcore, n.tables.forEach(function(e) {
            var t = e.name;
            n.core.schema.tables.some(function(e) {
                return e.name === t
            }) && (e.core = n.core.table(t), n[t] instanceof n.Table && (n[t].core = e.core))
        })
    }

    function gn(i, e, t, o) {
        t.forEach(function(n) {
            var r = o[n];
            e.forEach(function(e) {
                var t = l(e, n);
                (!t || "value" in t && void 0 === t.value) && (e === i.Transaction.prototype || e instanceof i.Transaction ? a(e, n, {
                    get: function() {
                        return this.table(n)
                    },
                    set: function(e) {
                        u(this, n, {
                            value: e,
                            writable: !0,
                            configurable: !0,
                            enumerable: !0
                        })
                    }
                }) : e[n] = new i.Table(n, r))
            })
        })
    }

    function bn(n, e) {
        e.forEach(function(e) {
            for (var t in e) e[t] instanceof n.Table && delete e[t]
        })
    }

    function _n(e, t) {
        return e._cfg.version - t._cfg.version
    }

    function wn(n, r, i, e) {
        var o = n._dbSchema,
            u = n._createTransaction("readwrite", n._storeNames, o);
        u.create(i), u._completion.catch(e);
        var a = u._reject.bind(u),
            s = Te.transless || Te;
        rt(function() {
            var c, l, f, h, t, e, p, d;
            Te.trans = u, Te.transless = s, 0 === r ? (_(o).forEach(function(e) {
                kn(i, e, o[e].primKey, o[e].indexes)
            }), mn(n, i), Fe.follow(function() {
                return n.on.populate.fire(u)
            }).catch(a)) : (l = r, f = u, h = i, t = [], e = (c = n)._versions, p = c._dbSchema = En(0, c.idbdb, h), d = !1, e.filter(function(e) {
                return e._cfg.version >= l
            }).forEach(function(s) {
                t.push(function() {
                    var t = p,
                        e = s._cfg.dbschema;
                    On(c, t, h), On(c, e, h), p = c._dbSchema = e;
                    var n = xn(t, e);
                    n.add.forEach(function(e) {
                        kn(h, e[0], e[1].primKey, e[1].indexes)
                    }), n.change.forEach(function(e) {
                        if (e.recreate) throw new te.Upgrade("Not yet support for changing primary key");
                        var t = h.objectStore(e.name);
                        e.add.forEach(function(e) {
                            return Pn(t, e)
                        }), e.change.forEach(function(e) {
                            t.deleteIndex(e.name), Pn(t, e)
                        }), e.del.forEach(function(e) {
                            return t.deleteIndex(e)
                        })
                    });
                    var r = s._cfg.contentUpgrade;
                    if (r && s._cfg.version > l) {
                        mn(c, h), f._memoizedTables = {}, d = !0;
                        var i = E(e);
                        n.del.forEach(function(e) {
                            i[e] = t[e]
                        }), bn(c, [c.Transaction.prototype]), gn(c, [c.Transaction.prototype], _(i), i), f.schema = i;
                        var o, u = M(r);
                        u && it();
                        var a = Fe.follow(function() {
                            var e;
                            (o = r(f)) && u && (e = ot.bind(null, null), o.then(e, e))
                        });
                        return o && "function" == typeof o.then ? Fe.resolve(o) : a.then(function() {
                            return o
                        })
                    }
                }), t.push(function(e) {
                    d && kt || function(e, t) {
                        for (var n = 0; n < t.db.objectStoreNames.length; ++n) {
                            var r = t.db.objectStoreNames[n];
                            null == e[r] && t.db.deleteObjectStore(r)
                        }
                    }(s._cfg.dbschema, e), bn(c, [c.Transaction.prototype]), gn(c, [c.Transaction.prototype], c._storeNames, c._dbSchema), f.schema = c._dbSchema
                })
            }), function e() {
                return t.length ? Fe.resolve(t.shift()(f.idbtrans)).then(e) : Fe.resolve()
            }().then(function() {
                var t, n;
                n = h, _(t = p).forEach(function(e) {
                    n.db.objectStoreNames.contains(e) || kn(n, e, t[e].primKey, t[e].indexes)
                })
            }).catch(a))
        })
    }

    function xn(e, t) {
        var n, r = {
            del: [],
            add: [],
            change: []
        };
        for (n in e) t[n] || r.del.push(n);
        for (n in t) {
            var i = e[n],
                o = t[n];
            if (i) {
                var u = {
                    name: n,
                    def: o,
                    recreate: !1,
                    del: [],
                    add: [],
                    change: []
                };
                if ("" + (i.primKey.keyPath || "") != "" + (o.primKey.keyPath || "") || i.primKey.auto !== o.primKey.auto && !xt) u.recreate = !0, r.change.push(u);
                else {
                    var a = i.idxByName,
                        s = o.idxByName,
                        c = void 0;
                    for (c in a) s[c] || u.del.push(c);
                    for (c in s) {
                        var l = a[c],
                            f = s[c];
                        l ? l.src !== f.src && u.change.push(f) : u.add.push(f)
                    }(0 < u.del.length || 0 < u.add.length || 0 < u.change.length) && r.change.push(u)
                }
            } else r.add.push([n, o])
        }
        return r
    }

    function kn(e, t, n, r) {
        var i = e.db.createObjectStore(t, n.keyPath ? {
            keyPath: n.keyPath,
            autoIncrement: n.auto
        } : {
            autoIncrement: n.auto
        });
        return r.forEach(function(e) {
            return Pn(i, e)
        }), i
    }

    function Pn(e, t) {
        e.createIndex(t.name, t.keyPath, {
            unique: t.unique,
            multiEntry: t.multi
        })
    }

    function En(e, t, s) {
        var c = {};
        return p(t.objectStoreNames, 0).forEach(function(e) {
            for (var t = s.objectStore(e), n = an(sn(u = t.keyPath), u || "", !1, !1, !!t.autoIncrement, u && "string" != typeof u, !0), r = [], i = 0; i < t.indexNames.length; ++i) {
                var o = t.index(t.indexNames[i]),
                    u = o.keyPath,
                    a = an(o.name, u, !!o.unique, !!o.multiEntry, !1, u && "string" != typeof u, !1);
                r.push(a)
            }
            c[e] = cn(e, n, r)
        }), c
    }

    function On(e, t, n) {
        for (var r = n.db.objectStoreNames, i = 0; i < r.length; ++i) {
            var o = r[i],
                u = n.objectStore(o);
            e._hasGetAll = "getAll" in u;
            for (var a = 0; a < u.indexNames.length; ++a) {
                var s, c = u.indexNames[a],
                    l = u.index(c).keyPath,
                    f = "string" == typeof l ? l : "[" + p(l).join("+") + "]";
                !t[o] || (s = t[o].idxByName[f]) && (s.name = c, delete t[o].idxByName[f], t[o].idxByName[c] = s)
            }
        }
        "undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && h.WorkerGlobalScope && h instanceof h.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1)
    }
    var jn, Sn = (An.prototype._parseStoresSpec = function(r, i) {
        _(r).forEach(function(e) {
            if (null !== r[e]) {
                var t = r[e].split(",").map(function(e, t) {
                        var n = (e = e.trim()).replace(/([&*]|\+\+)/g, ""),
                            r = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n;
                        return an(n, r || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), d(r), 0 === t)
                    }),
                    n = t.shift();
                if (n.multi) throw new te.Schema("Primary key cannot be multi-valued");
                t.forEach(function(e) {
                    if (e.auto) throw new te.Schema("Only primary key can be marked as autoIncrement (++)");
                    if (!e.keyPath) throw new te.Schema("Index must have a name and cannot be an empty string")
                }), i[e] = cn(e, n, t)
            }
        })
    }, An.prototype.stores = function(e) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? s(this._cfg.storesSource, e) : e;
        var n = t._versions,
            r = {},
            i = {};
        return n.forEach(function(e) {
            s(r, e._cfg.storesSource), i = e._cfg.dbschema = {}, e._parseStoresSpec(r, i)
        }), t._dbSchema = i, bn(t, [t._allTables, t, t.Transaction.prototype]), gn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], _(i), i), t._storeNames = _(i), this
    }, An.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = e, this
    }, An);

    function An() {}

    function Kn(e) {
        return rt(function() {
            return Te.letThrough = !0, e()
        })
    }

    function Cn(c) {
        var l = c._state,
            i = c._deps.indexedDB;
        if (l.isBeingOpened || c.idbdb) return l.dbReadyPromise.then(function() {
            return l.dbOpenError ? vt(l.dbOpenError) : c
        });
        N && (l.openCanceller._stackHolder = z()), l.isBeingOpened = !0, l.dbOpenError = null, l.openComplete = !1;
        var e = l.dbReadyResolve,
            f = null;
        return Fe.race([l.openCanceller, new Fe(function(u, r) {
            if (!i) throw new te.MissingAPI("indexedDB API not found. If using IE10+, make sure to run your code on a server URL (not locally). If using old Safari versions, make sure to include indexedDB polyfill.");
            var a = c.name,
                s = l.autoSchema ? i.open(a) : i.open(a, Math.round(10 * c.verno));
            if (!s) throw new te.MissingAPI("IndexedDB API not available");
            s.onerror = nn(r), s.onblocked = Xe(c._fireOnBlocked), s.onupgradeneeded = Xe(function(e) {
                var t, n;
                f = s.transaction, l.autoSchema && !c._options.allowEmptyDB ? (s.onerror = rn, f.abort(), s.result.close(), (t = i.deleteDatabase(a)).onsuccess = t.onerror = Xe(function() {
                    r(new te.NoSuchDatabase("Database " + a + " doesnt exist"))
                })) : (f.onerror = nn(r), n = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion, c.idbdb = s.result, wn(c, n / 10, f, r))
            }, r), s.onsuccess = Xe(function() {
                f = null;
                var e, t, n, r = c.idbdb = s.result,
                    i = p(r.objectStoreNames);
                if (0 < i.length) try {
                    var o = r.transaction(en(i), "readonly");
                    l.autoSchema ? function(e, t, n) {
                        e.verno = t.version / 10;
                        var r = e._dbSchema = En(0, t, n);
                        e._storeNames = p(t.objectStoreNames, 0), gn(e, [e._allTables], _(r), r)
                    }(c, r, o) : (On(c, c._dbSchema, o), t = o, ((n = xn(En(0, (e = c).idbdb, t), e._dbSchema)).add.length || n.change.some(function(e) {
                        return e.add.length || e.change.length
                    })) && console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")), mn(c, o)
                } catch (e) {}
                wt.push(c), r.onversionchange = Xe(function(e) {
                    l.vcFired = !0, c.on("versionchange").fire(e)
                }), jn.add(a), u()
            }, r)
        })]).then(function() {
            return l.onReadyBeingFired = [], Fe.resolve(Kn(c.on.ready.fire)).then(function e() {
                if (0 < l.onReadyBeingFired.length) {
                    var t = l.onReadyBeingFired.reduce(he, ie);
                    return l.onReadyBeingFired = [], Fe.resolve(Kn(t)).then(e)
                }
            })
        }).finally(function() {
            l.onReadyBeingFired = null
        }).then(function() {
            return l.isBeingOpened = !1, c
        }).catch(function(e) {
            try {
                f && f.abort()
            } catch (e) {}
            return l.isBeingOpened = !1, c.close(), l.dbOpenError = e, vt(l.dbOpenError)
        }).finally(function() {
            l.openComplete = !0, e()
        })
    }

    function In(t) {
        function e(e) {
            return t.next(e)
        }
        var i = n(e),
            o = n(function(e) {
                return t.throw(e)
            });

        function n(r) {
            return function(e) {
                var t = r(e),
                    n = t.value;
                return t.done ? n : n && "function" == typeof n.then ? n.then(i, o) : d(n) ? Promise.all(n).then(i, o) : i(n)
            }
        }
        return n(e)()
    }

    function Tn(e, t, n) {
        for (var r = d(e) ? e.slice() : [e], i = 0; i < n; ++i) r.push(t);
        return r
    }
    var Dn = {
            stack: "dbcore",
            name: "VirtualIndexMiddleware",
            level: 1,
            create: function(f) {
                return m(m({}, f), {
                    table: function(e) {
                        var u = f.table(e),
                            t = u.schema,
                            s = {},
                            c = [];

                        function l(e, t, n) {
                            var r = dn(e),
                                i = s[r] = s[r] || [],
                                o = null == e ? 0 : "string" == typeof e ? 1 : e.length,
                                u = 0 < t,
                                a = m(m({}, n), {
                                    isVirtual: u,
                                    isPrimaryKey: !u && n.isPrimaryKey,
                                    keyTail: t,
                                    keyLength: o,
                                    extractKey: ln(e),
                                    unique: !u && n.unique
                                });
                            return i.push(a), a.isPrimaryKey || c.push(a), 1 < o && l(2 === o ? e[0] : e.slice(0, o - 1), t + 1, n), i.sort(function(e, t) {
                                return e.keyTail - t.keyTail
                            }), a
                        }
                        var n = l(t.primaryKey.keyPath, 0, t.primaryKey);
                        s[":id"] = [n];
                        for (var r = 0, i = t.indexes; r < i.length; r++) {
                            var o = i[r];
                            l(o.keyPath, 0, o)
                        }

                        function a(e) {
                            var t, n, r = e.query.index;
                            return r.isVirtual ? m(m({}, e), {
                                query: {
                                    index: r,
                                    range: (t = e.query.range, n = r.keyTail, {
                                        type: 1 === t.type ? 2 : t.type,
                                        lower: Tn(t.lower, t.lowerOpen ? f.MAX_KEY : f.MIN_KEY, n),
                                        lowerOpen: !0,
                                        upper: Tn(t.upper, t.upperOpen ? f.MIN_KEY : f.MAX_KEY, n),
                                        upperOpen: !0
                                    })
                                }
                            }) : e
                        }
                        return m(m({}, u), {
                            schema: m(m({}, t), {
                                primaryKey: n,
                                indexes: c,
                                getIndexByKeyPath: function(e) {
                                    var t = s[dn(e)];
                                    return t && t[0]
                                }
                            }),
                            count: function(e) {
                                return u.count(a(e))
                            },
                            query: function(e) {
                                return u.query(a(e))
                            },
                            openCursor: function(t) {
                                var e = t.query.index,
                                    r = e.keyTail,
                                    n = e.isVirtual,
                                    i = e.keyLength;
                                if (!n) return u.openCursor(t);

                                function o(n) {
                                    return Object.create(n, {
                                        continue: {
                                            value: function(e) {
                                                null != e ? n.continue(Tn(e, t.reverse ? f.MAX_KEY : f.MIN_KEY, r)) : t.unique ? n.continue(Tn(n.key, t.reverse ? f.MIN_KEY : f.MAX_KEY, r)) : n.continue()
                                            }
                                        },
                                        continuePrimaryKey: {
                                            value: function(e, t) {
                                                n.continuePrimaryKey(Tn(e, f.MAX_KEY, r), t)
                                            }
                                        },
                                        key: {
                                            get: function() {
                                                var e = n.key;
                                                return 1 === i ? e[0] : e.slice(0, i)
                                            }
                                        },
                                        value: {
                                            get: function() {
                                                return n.value
                                            }
                                        }
                                    })
                                }
                                return u.openCursor(a(t)).then(function(e) {
                                    return e && o(e)
                                })
                            }
                        })
                    }
                })
            }
        },
        Bn = {
            stack: "dbcore",
            name: "HooksMiddleware",
            level: 2,
            create: function(e) {
                return m(m({}, e), {
                    table: function(r) {
                        var a = e.table(r),
                            v = a.schema.primaryKey;
                        return m(m({}, a), {
                            mutate: function(t) {
                                var e = Te.trans,
                                    n = e.table(r).hook,
                                    p = n.deleting,
                                    d = n.creating,
                                    y = n.updating;
                                switch (t.type) {
                                    case "add":
                                        if (d.fire === ie) break;
                                        return e._promise("readwrite", function() {
                                            return u(t)
                                        }, !0);
                                    case "put":
                                        if (d.fire === ie && y.fire === ie) break;
                                        return e._promise("readwrite", function() {
                                            return u(t)
                                        }, !0);
                                    case "delete":
                                        if (p.fire === ie) break;
                                        return e._promise("readwrite", function() {
                                            return u(t)
                                        }, !0);
                                    case "deleteRange":
                                        if (p.fire === ie) break;
                                        return e._promise("readwrite", function() {
                                            return function n(r, i, o) {
                                                return a.query({
                                                    trans: r,
                                                    values: !1,
                                                    query: {
                                                        index: v,
                                                        range: i
                                                    },
                                                    limit: o
                                                }).then(function(e) {
                                                    var t = e.result;
                                                    return u({
                                                        type: "delete",
                                                        keys: t,
                                                        trans: r
                                                    }).then(function(e) {
                                                        return 0 < e.numFailures ? Promise.reject(e.failures[0]) : t.length < o ? {
                                                            failures: [],
                                                            numFailures: 0,
                                                            lastResult: void 0
                                                        } : n(r, m(m({}, i), {
                                                            lower: t[t.length - 1],
                                                            lowerOpen: !0
                                                        }), o)
                                                    })
                                                })
                                            }((e = t).trans, e.range, 1e4);
                                            var e
                                        }, !0)
                                }
                                return a.mutate(t);

                                function u(l) {
                                    var e, t, n, f = Te.trans,
                                        h = l.keys || fn(v, l);
                                    if (!h) throw new Error("Keys missing");
                                    return "delete" !== (l = "add" === l.type || "put" === l.type ? m(m({}, l), {
                                        keys: h,
                                        wantResults: !0
                                    }) : m({}, l)).type && (l.values = O(l.values)), l.keys && (l.keys = O(l.keys)), e = a, n = h, ("add" === (t = l).type ? Promise.resolve(new Array(t.values.length)) : e.getMany({
                                        trans: t.trans,
                                        keys: n
                                    })).then(function(s) {
                                        var c = h.map(function(e, t) {
                                            var n, r, i, o, u = s[t],
                                                a = {
                                                    onerror: null,
                                                    onsuccess: null
                                                };
                                            return "delete" === l.type ? p.fire.call(a, e, u, f) : "add" === l.type || void 0 === u ? (n = d.fire.call(a, e, l.values[t], f), null == e && null != n && (e = n, l.keys[t] = e, v.outbound || k(l.values[t], v.keyPath, e))) : (r = D(u, l.values[t]), (i = y.fire.call(a, r, e, u, f)) && (o = l.values[t], Object.keys(i).forEach(function(e) {
                                                g(o, e) ? o[e] = i[e] : k(o, e, i[e])
                                            }))), a
                                        });
                                        return a.mutate(l).then(function(e) {
                                            for (var t = e.failures, n = e.results, r = e.numFailures, i = e.lastResult, o = 0; o < h.length; ++o) {
                                                var u = n ? n[o] : h[o],
                                                    a = c[o];
                                                null == u ? a.onerror && a.onerror(t[o]) : a.onsuccess && a.onsuccess("put" === l.type && s[o] ? l.values[o] : u)
                                            }
                                            return {
                                                failures: t,
                                                results: n,
                                                numFailures: r,
                                                lastResult: i
                                            }
                                        }).catch(function(t) {
                                            return c.forEach(function(e) {
                                                return e.onerror && e.onerror(t)
                                            }), Promise.reject(t)
                                        })
                                    })
                                }
                            }
                        })
                    }
                })
            }
        },
        Rn = (Fn.prototype.version = function(t) {
            if (isNaN(t) || t < .1) throw new te.Type("Given version is not a positive number");
            if (t = Math.round(10 * t) / 10, this.idbdb || this._state.isBeingOpened) throw new te.Schema("Cannot add version when database is open");
            this.verno = Math.max(this.verno, t);
            var e = this._versions,
                n = e.filter(function(e) {
                    return e._cfg.version === t
                })[0];
            return n || (n = new this.Version(t), e.push(n), e.sort(_n), n.stores({}), this._state.autoSchema = !1, n)
        }, Fn.prototype._whenReady = function(e) {
            var n = this;
            return this._state.openComplete || Te.letThrough ? e() : new Fe(function(e, t) {
                if (!n._state.isBeingOpened) {
                    if (!n._options.autoOpen) return void t(new te.DatabaseClosed);
                    n.open().catch(ie)
                }
                n._state.dbReadyPromise.then(e, t)
            }).then(e)
        }, Fn.prototype.use = function(e) {
            var t = e.stack,
                n = e.create,
                r = e.level,
                i = e.name;
            i && this.unuse({
                stack: t,
                name: i
            });
            var o = this._middlewares[t] || (this._middlewares[t] = []);
            return o.push({
                stack: t,
                create: n,
                level: null == r ? 10 : r,
                name: i
            }), o.sort(function(e, t) {
                return e.level - t.level
            }), this
        }, Fn.prototype.unuse = function(e) {
            var t = e.stack,
                n = e.name,
                r = e.create;
            return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(e) {
                return r ? e.create !== r : !!n && e.name !== n
            })), this
        }, Fn.prototype.open = function() {
            return Cn(this)
        }, Fn.prototype.close = function() {
            var e = wt.indexOf(this),
                n = this._state;
            if (0 <= e && wt.splice(e, 1), this.idbdb) {
                try {
                    this.idbdb.close()
                } catch (e) {}
                this.idbdb = null
            }
            this._options.autoOpen = !1, n.dbOpenError = new te.DatabaseClosed, n.isBeingOpened && n.cancelOpen(n.dbOpenError), n.dbReadyPromise = new Fe(function(e) {
                n.dbReadyResolve = e
            }), n.openCanceller = new Fe(function(e, t) {
                n.cancelOpen = t
            })
        }, Fn.prototype.delete = function() {
            var r = this,
                i = 0 < arguments.length,
                o = this._state;
            return new Fe(function(t, n) {
                function e() {
                    r.close();
                    var e = r._deps.indexedDB.deleteDatabase(r.name);
                    e.onsuccess = Xe(function() {
                        jn.remove(r.name), t()
                    }), e.onerror = nn(n), e.onblocked = r._fireOnBlocked
                }
                if (i) throw new te.InvalidArgument("Arguments not allowed in db.delete()");
                o.isBeingOpened ? o.dbReadyPromise.then(e) : e()
            })
        }, Fn.prototype.backendDB = function() {
            return this.idbdb
        }, Fn.prototype.isOpen = function() {
            return null !== this.idbdb
        }, Fn.prototype.hasBeenClosed = function() {
            var e = this._state.dbOpenError;
            return e && "DatabaseClosed" === e.name
        }, Fn.prototype.hasFailed = function() {
            return null !== this._state.dbOpenError
        }, Fn.prototype.dynamicallyOpened = function() {
            return this._state.autoSchema
        }, Object.defineProperty(Fn.prototype, "tables", {
            get: function() {
                var t = this;
                return _(this._allTables).map(function(e) {
                    return t._allTables[e]
                })
            },
            enumerable: !0,
            configurable: !0
        }), Fn.prototype.transaction = function() {
            var e = function(e, t, n) {
                var r = arguments.length;
                if (r < 2) throw new te.InvalidArgument("Too few arguments");
                for (var i = new Array(r - 1); --r;) i[r - 1] = arguments[r];
                return n = i.pop(), [e, j(i), n]
            }.apply(this, arguments);
            return this._transaction.apply(this, e)
        }, Fn.prototype._transaction = function(e, t, n) {
            var r = this,
                i = Te.trans;
            i && i.db === this && -1 === e.indexOf("!") || (i = null);
            var o, u, a = -1 !== e.indexOf("?");
            e = e.replace("!", "").replace("?", "");
            try {
                if (u = t.map(function(e) {
                        var t = e instanceof r.Table ? e.name : e;
                        if ("string" != typeof t) throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                        return t
                    }), "r" == e || e === Ot) o = Ot;
                else {
                    if ("rw" != e && e != jt) throw new te.InvalidArgument("Invalid transaction mode: " + e);
                    o = jt
                }
                if (i) {
                    if (i.mode === Ot && o === jt) {
                        if (!a) throw new te.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                        i = null
                    }
                    i && u.forEach(function(e) {
                        if (i && -1 === i.storeNames.indexOf(e)) {
                            if (!a) throw new te.SubTransaction("Table " + e + " not included in parent transaction.");
                            i = null
                        }
                    }), a && i && !i.active && (i = null)
                }
            } catch (n) {
                return i ? i._promise(null, function(e, t) {
                    t(n)
                }) : vt(n)
            }
            var s = function(u, a, s, c, l) {
                return Fe.resolve().then(function() {
                    var e = Te.transless || Te,
                        t = u._createTransaction(a, s, u._dbSchema, c),
                        n = {
                            trans: t,
                            transless: e
                        };
                    c ? t.idbtrans = c.idbtrans : t.create();
                    var r, i = M(l);
                    i && it();
                    var o = Fe.follow(function() {
                        var e;
                        (r = l.call(t, t)) && (i ? (e = ot.bind(null, null), r.then(e, e)) : "function" == typeof r.next && "function" == typeof r.throw && (r = In(r)))
                    }, n);
                    return (r && "function" == typeof r.then ? Fe.resolve(r).then(function(e) {
                        return t.active ? e : vt(new te.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))
                    }) : o.then(function() {
                        return r
                    })).then(function(e) {
                        return c && t._resolve(), t._completion.then(function() {
                            return e
                        })
                    }).catch(function(e) {
                        return t._reject(e), vt(e)
                    })
                })
            }.bind(null, this, o, u, i, n);
            return i ? i._promise(o, s, "lock") : Te.trans ? lt(Te.transless, function() {
                return r._whenReady(s)
            }) : this._whenReady(s)
        }, Fn.prototype.table = function(e) {
            if (!g(this._allTables, e)) throw new te.InvalidTable("Table " + e + " does not exist");
            return this._allTables[e]
        }, Fn);

    function Fn(e, t) {
        var o = this;
        this._middlewares = {}, this.verno = 0;
        var n = Fn.dependencies;
        this._options = t = m({
            addons: Fn.addons,
            autoOpen: !0,
            indexedDB: n.indexedDB,
            IDBKeyRange: n.IDBKeyRange
        }, t), this._deps = {
            indexedDB: t.indexedDB,
            IDBKeyRange: t.IDBKeyRange
        };
        var r = t.addons;
        this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {};
        var a, i, u, s, c, l = {
            dbOpenError: this.idbdb = null,
            isBeingOpened: !1,
            onReadyBeingFired: null,
            openComplete: !1,
            dbReadyResolve: ie,
            dbReadyPromise: null,
            cancelOpen: ie,
            openCanceller: null,
            autoSchema: !0
        };
        l.dbReadyPromise = new Fe(function(e) {
            l.dbReadyResolve = e
        }), l.openCanceller = new Fe(function(e, t) {
            l.cancelOpen = t
        }), this._state = l, this.name = e, this.on = Tt(this, "populate", "blocked", "versionchange", {
            ready: [he, ie]
        }), this.on.ready.subscribe = y(this.on.ready.subscribe, function(i) {
            return function(n, r) {
                Fn.vip(function() {
                    var t, e = o._state;
                    e.openComplete ? (e.dbOpenError || Fe.resolve().then(n), r && i(n)) : e.onReadyBeingFired ? (e.onReadyBeingFired.push(n), r && i(n)) : (i(n), t = o, r || i(function e() {
                        t.on.ready.unsubscribe(n), t.on.ready.unsubscribe(e)
                    }))
                })
            }
        }), this.Collection = (a = this, Dt(Vt.prototype, function(e, t) {
            this.db = a;
            var n = At,
                r = null;
            if (t) try {
                n = t()
            } catch (e) {
                r = e
            }
            var i = e._ctx,
                o = i.table,
                u = o.hook.reading.fire;
            this._ctx = {
                table: o,
                index: i.index,
                isPrimKey: !i.index || o.schema.primKey.keyPath && i.index === o.schema.primKey.name,
                range: n,
                keysOnly: !1,
                dir: "next",
                unique: "",
                algorithm: null,
                filter: null,
                replayFilter: null,
                justLimit: !0,
                isMatch: null,
                offset: 0,
                limit: 1 / 0,
                error: r,
                or: i.or,
                valueMapper: u !== oe ? u : null
            }
        })), this.Table = (i = this, Dt(Ct.prototype, function(e, t, n) {
            this.db = i, this._tx = n, this.name = e, this.schema = t, this.hook = i._allTables[e] ? i._allTables[e].hook : Tt(null, {
                creating: [se, ie],
                reading: [ue, oe],
                updating: [le, ie],
                deleting: [ce, ie]
            })
        })), this.Transaction = (u = this, Dt(on.prototype, function(e, t, n, r) {
            var i = this;
            this.db = u, this.mode = e, this.storeNames = t, this.schema = n, this.idbtrans = null, this.on = Tt(this, "complete", "error", "abort"), this.parent = r || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new Fe(function(e, t) {
                i._resolve = e, i._reject = t
            }), this._completion.then(function() {
                i.active = !1, i.on.complete.fire()
            }, function(e) {
                var t = i.active;
                return i.active = !1, i.on.error.fire(e), i.parent ? i.parent._reject(e) : t && i.idbtrans && i.idbtrans.abort(), vt(e)
            })
        })), this.Version = (s = this, Dt(Sn.prototype, function(e) {
            this.db = s, this._cfg = {
                version: e,
                storesSource: null,
                dbschema: {},
                tables: {},
                contentUpgrade: null
            }
        })), this.WhereClause = (c = this, Dt($t.prototype, function(e, t, n) {
            this.db = c, this._ctx = {
                table: e,
                index: ":id" === t ? null : t,
                or: n
            };
            var r = c._deps.indexedDB;
            if (!r) throw new te.MissingAPI("indexedDB API missing");
            this._cmp = this._ascending = r.cmp.bind(r), this._descending = function(e, t) {
                return r.cmp(t, e)
            }, this._max = function(e, t) {
                return 0 < r.cmp(e, t) ? e : t
            }, this._min = function(e, t) {
                return r.cmp(e, t) < 0 ? e : t
            }, this._IDBKeyRange = c._deps.IDBKeyRange
        })), this.on("versionchange", function(e) {
            0 < e.newVersion ? console.warn("Another connection wants to upgrade database '" + o.name + "'. Closing db now to resume the upgrade.") : console.warn("Another connection wants to delete database '" + o.name + "'. Closing db now to resume the delete request."), o.close()
        }), this.on("blocked", function(e) {
            !e.newVersion || e.newVersion < e.oldVersion ? console.warn("Dexie.delete('" + o.name + "') was blocked") : console.warn("Upgrade '" + o.name + "' blocked by other connection holding version " + e.oldVersion / 10)
        }), this._maxKey = tn(t.IDBKeyRange), this._createTransaction = function(e, t, n, r) {
            return new o.Transaction(e, t, n, r)
        }, this._fireOnBlocked = function(t) {
            o.on("blocked").fire(t), wt.filter(function(e) {
                return e.name === o.name && e !== o && !e._state.vcFired
            }).map(function(e) {
                return e.on("versionchange").fire(t)
            })
        }, this.use(Dn), this.use(Bn), r.forEach(function(e) {
            return e(o)
        })
    }
    var qn = Rn;
    return i(qn, m(m({}, re), {
            delete: function(e) {
                return new qn(e).delete()
            },
            exists: function(e) {
                return new qn(e, {
                    addons: []
                }).open().then(function(e) {
                    return e.close(), !0
                }).catch("NoSuchDatabaseError", function() {
                    return !1
                })
            },
            getDatabaseNames: function(e) {
                return jn ? jn.getDatabaseNames().then(e) : Fe.resolve([])
            },
            defineClass: function() {
                return function(e) {
                    s(this, e)
                }
            },
            ignoreTransaction: function(e) {
                return Te.trans ? lt(Te.transless, e) : e()
            },
            vip: Kn,
            async: function(t) {
                return function() {
                    try {
                        var e = In(t.apply(this, arguments));
                        return e && "function" == typeof e.then ? e : Fe.resolve(e)
                    } catch (e) {
                        return vt(e)
                    }
                }
            },
            spawn: function(e, t, n) {
                try {
                    var r = In(e.apply(n, t || []));
                    return r && "function" == typeof r.then ? r : Fe.resolve(r)
                } catch (e) {
                    return vt(e)
                }
            },
            currentTransaction: {
                get: function() {
                    return Te.trans || null
                }
            },
            waitFor: function(e, t) {
                var n = Fe.resolve("function" == typeof e ? qn.ignoreTransaction(e) : e).timeout(t || 6e4);
                return Te.trans ? Te.trans.waitFor(n) : n
            },
            Promise: Fe,
            debug: {
                get: function() {
                    return N
                },
                set: function(e) {
                    U(e, "dexie" === e ? function() {
                        return !0
                    } : mt)
                }
            },
            derive: o,
            extend: s,
            props: i,
            override: y,
            Events: Tt,
            getByKeyPath: x,
            setByKeyPath: k,
            delByKeyPath: P,
            shallowClone: E,
            deepClone: K,
            getObjectDiff: D,
            asap: b,
            minKey: -1 / 0,
            addons: [],
            connections: wt,
            errnames: Z,
            dependencies: function() {
                try {
                    return {
                        indexedDB: h.indexedDB || h.mozIndexedDB || h.webkitIndexedDB || h.msIndexedDB,
                        IDBKeyRange: h.IDBKeyRange || h.webkitIDBKeyRange
                    }
                } catch (e) {
                    return {
                        indexedDB: null,
                        IDBKeyRange: null
                    }
                }
            }(),
            semVer: "3.0.3",
            version: "3.0.3".split(".").map(function(e) {
                return parseInt(e)
            }).reduce(function(e, t, n) {
                return e + t / Math.pow(10, 2 * n)
            }),
            default: qn,
            Dexie: qn
        })), qn.maxKey = tn(qn.dependencies.IDBKeyRange),
        function(e) {
            try {
                (i = (t = e) && "function" == typeof t.databases) || ((r = new Rn(Et, {
                    addons: []
                })).version(1).stores({
                    dbnames: "name"
                }), n = r.table("dbnames")), jn = {
                    getDatabaseNames: function() {
                        return i ? Fe.resolve(t.databases()).then(function(e) {
                            return e.map(function(e) {
                                return e.name
                            }).filter(function(e) {
                                return e !== Et
                            })
                        }) : n.toCollection().primaryKeys()
                    },
                    add: function(e) {
                        return !i && e !== Et && n.put({
                            name: e
                        }).catch(ie)
                    },
                    remove: function(e) {
                        return !i && e !== Et && n.delete(e).catch(ie)
                    }
                }
            } catch (e) {}
            var t, n, r, i
        }(Rn.dependencies.indexedDB), Fe.rejectionMapper = function(e, t) {
            if (!e || e instanceof Q || e instanceof TypeError || e instanceof SyntaxError || !e.name || !ne[e.name]) return e;
            var n = new ne[e.name](t || e.message, e);
            return "stack" in e && a(n, "stack", {
                get: function() {
                    return this.inner.stack
                }
            }), n
        }, U(N, mt), Rn
});;
! function(e, r) {
    if ("function" == typeof define && define.amd) define(["exports"], r);
    else if ("undefined" != typeof exports) r(exports);
    else {
        var n = {
            exports: {}
        };
        r(n.exports), e.ellipsed = n.exports
    }
}(this, (function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = Object.assign || function(e) {
        for (var r = 1; r < arguments.length; r++) {
            var n = arguments[r];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    };

    function n(e, n) {
        var i = e.el,
            t = e.elStyle,
            o = e.elHeight,
            l = e.rowsLimit,
            s = e.rowsWrapped,
            d = e.options,
            p = e.buffer,
            a = p;
        if (s === l + 1) return r({}, e);
        var f = p,
            u = s,
            c = o;
        return i.innerHTML = a = p.length ? "" + p + d.delimiter + n + d.replaceStr : "" + n + d.replaceStr, parseFloat(t.height) > parseFloat(o) && (u++, c = t.height, u === l + 1) ? (i.innerHTML = a = "." === f[f.length - 1] && "..." === d.replaceStr ? f + ".." : "" + f + d.replaceStr, r({}, e, {
            elHeight: c,
            rowsWrapped: u
        })) : (i.innerHTML = a = f.length ? "" + f + d.delimiter + n : "" + n, r({}, e, {
            buffer: a,
            elHeight: c,
            rowsWrapped: u
        }))
    }
    e.disableResponsive = function(e) {
        window.removeEventListener("resize", e)
    }, e.ellipsis = function e() {
        for (var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, l = {
                replaceStr: "...",
                responsive: !1,
                debounceDelay: 250,
                delimiter: " "
            }, s = r({}, l, o), d = i && (i instanceof NodeList ? i : 1 === i.nodeType ? [i] : document.querySelectorAll(i)), p = [], a = 0; a < d.length; a++) {
            var f = d[a];
            p[a] = f.innerHTML;
            var u = f.innerHTML.split(s.delimiter);
            f.innerHTML = "";
            var c = window.getComputedStyle(f);
            u.reduce(n, {
                el: f,
                buffer: f.innerHTML,
                elStyle: c,
                elHeight: 0,
                rowsLimit: t,
                rowsWrapped: 0,
                options: s
            })
        }
        if (s.responsive) {
            var v = !1,
                h = window.innerWidth,
                w = function() {
                    if (window.innerWidth !== h) {
                        h = window.innerWidth;
                        for (var n = 0; n < d.length; n++) d[n].innerHTML = p[n];
                        e(i, t, r({}, o, {
                            responsive: !1
                        }))
                    }
                },
                g = function() {
                    clearTimeout(v), v = setTimeout(w, s.debounceDelay)
                };
            return window.addEventListener("resize", g), g
        }
    }
}));;
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).SimpleBar = e()
}(this, (function() {
    "use strict";
    var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function e(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var r, n, i, o = "object",
        s = function(t) {
            return t && t.Math == Math && t
        },
        a = s(typeof globalThis == o && globalThis) || s(typeof window == o && window) || s(typeof self == o && self) || s(typeof t == o && t) || Function("return this")(),
        c = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        },
        l = !c((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        u = {}.propertyIsEnumerable,
        f = Object.getOwnPropertyDescriptor,
        h = {
            f: f && !u.call({
                1: 2
            }, 1) ? function(t) {
                var e = f(this, t);
                return !!e && e.enumerable
            } : u
        },
        d = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        },
        p = {}.toString,
        v = function(t) {
            return p.call(t).slice(8, -1)
        },
        g = "".split,
        y = c((function() {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function(t) {
            return "String" == v(t) ? g.call(t, "") : Object(t)
        } : Object,
        b = function(t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t
        },
        m = function(t) {
            return y(b(t))
        },
        x = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        },
        E = function(t, e) {
            if (!x(t)) return t;
            var r, n;
            if (e && "function" == typeof(r = t.toString) && !x(n = r.call(t))) return n;
            if ("function" == typeof(r = t.valueOf) && !x(n = r.call(t))) return n;
            if (!e && "function" == typeof(r = t.toString) && !x(n = r.call(t))) return n;
            throw TypeError("Can't convert object to primitive value")
        },
        w = {}.hasOwnProperty,
        O = function(t, e) {
            return w.call(t, e)
        },
        _ = a.document,
        S = x(_) && x(_.createElement),
        A = function(t) {
            return S ? _.createElement(t) : {}
        },
        k = !l && !c((function() {
            return 7 != Object.defineProperty(A("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        L = Object.getOwnPropertyDescriptor,
        M = {
            f: l ? L : function(t, e) {
                if (t = m(t), e = E(e, !0), k) try {
                    return L(t, e)
                } catch (t) {}
                if (O(t, e)) return d(!h.f.call(t, e), t[e])
            }
        },
        T = function(t) {
            if (!x(t)) throw TypeError(String(t) + " is not an object");
            return t
        },
        j = Object.defineProperty,
        R = {
            f: l ? j : function(t, e, r) {
                if (T(t), e = E(e, !0), T(r), k) try {
                    return j(t, e, r)
                } catch (t) {}
                if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
                return "value" in r && (t[e] = r.value), t
            }
        },
        W = l ? function(t, e, r) {
            return R.f(t, e, d(1, r))
        } : function(t, e, r) {
            return t[e] = r, t
        },
        z = function(t, e) {
            try {
                W(a, t, e)
            } catch (r) {
                a[t] = e
            }
            return e
        },
        C = e((function(t) {
            var e = a["__core-js_shared__"] || z("__core-js_shared__", {});
            (t.exports = function(t, r) {
                return e[t] || (e[t] = void 0 !== r ? r : {})
            })("versions", []).push({
                version: "3.2.1",
                mode: "global",
                copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
            })
        })),
        N = C("native-function-to-string", Function.toString),
        I = a.WeakMap,
        D = "function" == typeof I && /native code/.test(N.call(I)),
        P = 0,
        V = Math.random(),
        F = function(t) {
            return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++P + V).toString(36)
        },
        B = C("keys"),
        H = function(t) {
            return B[t] || (B[t] = F(t))
        },
        q = {},
        $ = a.WeakMap;
    if (D) {
        var X = new $,
            Y = X.get,
            G = X.has,
            U = X.set;
        r = function(t, e) {
            return U.call(X, t, e), e
        }, n = function(t) {
            return Y.call(X, t) || {}
        }, i = function(t) {
            return G.call(X, t)
        }
    } else {
        var Q = H("state");
        q[Q] = !0, r = function(t, e) {
            return W(t, Q, e), e
        }, n = function(t) {
            return O(t, Q) ? t[Q] : {}
        }, i = function(t) {
            return O(t, Q)
        }
    }
    var K = {
            set: r,
            get: n,
            has: i,
            enforce: function(t) {
                return i(t) ? n(t) : r(t, {})
            },
            getterFor: function(t) {
                return function(e) {
                    var r;
                    if (!x(e) || (r = n(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                    return r
                }
            }
        },
        J = e((function(t) {
            var e = K.get,
                r = K.enforce,
                n = String(N).split("toString");
            C("inspectSource", (function(t) {
                return N.call(t)
            })), (t.exports = function(t, e, i, o) {
                var s = !!o && !!o.unsafe,
                    c = !!o && !!o.enumerable,
                    l = !!o && !!o.noTargetGet;
                "function" == typeof i && ("string" != typeof e || O(i, "name") || W(i, "name", e), r(i).source = n.join("string" == typeof e ? e : "")), t !== a ? (s ? !l && t[e] && (c = !0) : delete t[e], c ? t[e] = i : W(t, e, i)) : c ? t[e] = i : z(e, i)
            })(Function.prototype, "toString", (function() {
                return "function" == typeof this && e(this).source || N.call(this)
            }))
        })),
        Z = a,
        tt = function(t) {
            return "function" == typeof t ? t : void 0
        },
        et = function(t, e) {
            return arguments.length < 2 ? tt(Z[t]) || tt(a[t]) : Z[t] && Z[t][e] || a[t] && a[t][e]
        },
        rt = Math.ceil,
        nt = Math.floor,
        it = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? nt : rt)(t)
        },
        ot = Math.min,
        st = function(t) {
            return t > 0 ? ot(it(t), 9007199254740991) : 0
        },
        at = Math.max,
        ct = Math.min,
        lt = function(t) {
            return function(e, r, n) {
                var i, o = m(e),
                    s = st(o.length),
                    a = function(t, e) {
                        var r = it(t);
                        return r < 0 ? at(r + e, 0) : ct(r, e)
                    }(n, s);
                if (t && r != r) {
                    for (; s > a;)
                        if ((i = o[a++]) != i) return !0
                } else
                    for (; s > a; a++)
                        if ((t || a in o) && o[a] === r) return t || a || 0;
                return !t && -1
            }
        },
        ut = {
            includes: lt(!0),
            indexOf: lt(!1)
        }.indexOf,
        ft = function(t, e) {
            var r, n = m(t),
                i = 0,
                o = [];
            for (r in n) !O(q, r) && O(n, r) && o.push(r);
            for (; e.length > i;) O(n, r = e[i++]) && (~ut(o, r) || o.push(r));
            return o
        },
        ht = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        dt = ht.concat("length", "prototype"),
        pt = {
            f: Object.getOwnPropertyNames || function(t) {
                return ft(t, dt)
            }
        },
        vt = {
            f: Object.getOwnPropertySymbols
        },
        gt = et("Reflect", "ownKeys") || function(t) {
            var e = pt.f(T(t)),
                r = vt.f;
            return r ? e.concat(r(t)) : e
        },
        yt = function(t, e) {
            for (var r = gt(e), n = R.f, i = M.f, o = 0; o < r.length; o++) {
                var s = r[o];
                O(t, s) || n(t, s, i(e, s))
            }
        },
        bt = /#|\.prototype\./,
        mt = function(t, e) {
            var r = Et[xt(t)];
            return r == Ot || r != wt && ("function" == typeof e ? c(e) : !!e)
        },
        xt = mt.normalize = function(t) {
            return String(t).replace(bt, ".").toLowerCase()
        },
        Et = mt.data = {},
        wt = mt.NATIVE = "N",
        Ot = mt.POLYFILL = "P",
        _t = mt,
        St = M.f,
        At = function(t, e) {
            var r, n, i, o, s, c = t.target,
                l = t.global,
                u = t.stat;
            if (r = l ? a : u ? a[c] || z(c, {}) : (a[c] || {}).prototype)
                for (n in e) {
                    if (o = e[n], i = t.noTargetGet ? (s = St(r, n)) && s.value : r[n], !_t(l ? n : c + (u ? "." : "#") + n, t.forced) && void 0 !== i) {
                        if (typeof o == typeof i) continue;
                        yt(o, i)
                    }(t.sham || i && i.sham) && W(o, "sham", !0), J(r, n, o, t)
                }
        },
        kt = function(t) {
            if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
            return t
        },
        Lt = function(t, e, r) {
            if (kt(t), void 0 === e) return t;
            switch (r) {
                case 0:
                    return function() {
                        return t.call(e)
                    };
                case 1:
                    return function(r) {
                        return t.call(e, r)
                    };
                case 2:
                    return function(r, n) {
                        return t.call(e, r, n)
                    };
                case 3:
                    return function(r, n, i) {
                        return t.call(e, r, n, i)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        },
        Mt = function(t) {
            return Object(b(t))
        },
        Tt = Array.isArray || function(t) {
            return "Array" == v(t)
        },
        jt = !!Object.getOwnPropertySymbols && !c((function() {
            return !String(Symbol())
        })),
        Rt = a.Symbol,
        Wt = C("wks"),
        zt = function(t) {
            return Wt[t] || (Wt[t] = jt && Rt[t] || (jt ? Rt : F)("Symbol." + t))
        },
        Ct = zt("species"),
        Nt = function(t, e) {
            var r;
            return Tt(t) && ("function" != typeof(r = t.constructor) || r !== Array && !Tt(r.prototype) ? x(r) && null === (r = r[Ct]) && (r = void 0) : r = void 0), new(void 0 === r ? Array : r)(0 === e ? 0 : e)
        },
        It = [].push,
        Dt = function(t) {
            var e = 1 == t,
                r = 2 == t,
                n = 3 == t,
                i = 4 == t,
                o = 6 == t,
                s = 5 == t || o;
            return function(a, c, l, u) {
                for (var f, h, d = Mt(a), p = y(d), v = Lt(c, l, 3), g = st(p.length), b = 0, m = u || Nt, x = e ? m(a, g) : r ? m(a, 0) : void 0; g > b; b++)
                    if ((s || b in p) && (h = v(f = p[b], b, d), t))
                        if (e) x[b] = h;
                        else if (h) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return f;
                    case 6:
                        return b;
                    case 2:
                        It.call(x, f)
                } else if (i) return !1;
                return o ? -1 : n || i ? i : x
            }
        },
        Pt = {
            forEach: Dt(0),
            map: Dt(1),
            filter: Dt(2),
            some: Dt(3),
            every: Dt(4),
            find: Dt(5),
            findIndex: Dt(6)
        },
        Vt = function(t, e) {
            var r = [][t];
            return !r || !c((function() {
                r.call(null, e || function() {
                    throw 1
                }, 1)
            }))
        },
        Ft = Pt.forEach,
        Bt = Vt("forEach") ? function(t) {
            return Ft(this, t, arguments.length > 1 ? arguments[1] : void 0)
        } : [].forEach;
    At({
        target: "Array",
        proto: !0,
        forced: [].forEach != Bt
    }, {
        forEach: Bt
    });
    var Ht = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    };
    for (var qt in Ht) {
        var $t = a[qt],
            Xt = $t && $t.prototype;
        if (Xt && Xt.forEach !== Bt) try {
            W(Xt, "forEach", Bt)
        } catch (t) {
            Xt.forEach = Bt
        }
    }
    var Yt = !("undefined" == typeof window || !window.document || !window.document.createElement),
        Gt = zt("species"),
        Ut = Pt.filter;
    At({
        target: "Array",
        proto: !0,
        forced: ! function(t) {
            return !c((function() {
                var e = [];
                return (e.constructor = {})[Gt] = function() {
                    return {
                        foo: 1
                    }
                }, 1 !== e[t](Boolean).foo
            }))
        }("filter")
    }, {
        filter: function(t) {
            return Ut(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Qt = Object.keys || function(t) {
            return ft(t, ht)
        },
        Kt = l ? Object.defineProperties : function(t, e) {
            T(t);
            for (var r, n = Qt(e), i = n.length, o = 0; i > o;) R.f(t, r = n[o++], e[r]);
            return t
        },
        Jt = et("document", "documentElement"),
        Zt = H("IE_PROTO"),
        te = function() {},
        ee = function() {
            var t, e = A("iframe"),
                r = ht.length;
            for (e.style.display = "none", Jt.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), ee = t.F; r--;) delete ee.prototype[ht[r]];
            return ee()
        },
        re = Object.create || function(t, e) {
            var r;
            return null !== t ? (te.prototype = T(t), r = new te, te.prototype = null, r[Zt] = t) : r = ee(), void 0 === e ? r : Kt(r, e)
        };
    q[Zt] = !0;
    var ne = zt("unscopables"),
        ie = Array.prototype;
    null == ie[ne] && W(ie, ne, re(null));
    var oe, se, ae, ce = function(t) {
            ie[ne][t] = !0
        },
        le = {},
        ue = !c((function() {
            function t() {}
            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
        })),
        fe = H("IE_PROTO"),
        he = Object.prototype,
        de = ue ? Object.getPrototypeOf : function(t) {
            return t = Mt(t), O(t, fe) ? t[fe] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? he : null
        },
        pe = zt("iterator"),
        ve = !1;
    [].keys && ("next" in (ae = [].keys()) ? (se = de(de(ae))) !== Object.prototype && (oe = se) : ve = !0), null == oe && (oe = {}), O(oe, pe) || W(oe, pe, (function() {
        return this
    }));
    var ge = {
            IteratorPrototype: oe,
            BUGGY_SAFARI_ITERATORS: ve
        },
        ye = R.f,
        be = zt("toStringTag"),
        me = function(t, e, r) {
            t && !O(t = r ? t : t.prototype, be) && ye(t, be, {
                configurable: !0,
                value: e
            })
        },
        xe = ge.IteratorPrototype,
        Ee = function() {
            return this
        },
        we = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var t, e = !1,
                r = {};
            try {
                (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), e = r instanceof Array
            } catch (t) {}
            return function(r, n) {
                return T(r),
                    function(t) {
                        if (!x(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
                    }(n), e ? t.call(r, n) : r.__proto__ = n, r
            }
        }() : void 0),
        Oe = ge.IteratorPrototype,
        _e = ge.BUGGY_SAFARI_ITERATORS,
        Se = zt("iterator"),
        Ae = function() {
            return this
        },
        ke = function(t, e, r, n, i, o, s) {
            ! function(t, e, r) {
                var n = e + " Iterator";
                t.prototype = re(xe, {
                    next: d(1, r)
                }), me(t, n, !1), le[n] = Ee
            }(r, e, n);
            var a, c, l, u = function(t) {
                    if (t === i && g) return g;
                    if (!_e && t in p) return p[t];
                    switch (t) {
                        case "keys":
                        case "values":
                        case "entries":
                            return function() {
                                return new r(this, t)
                            }
                    }
                    return function() {
                        return new r(this)
                    }
                },
                f = e + " Iterator",
                h = !1,
                p = t.prototype,
                v = p[Se] || p["@@iterator"] || i && p[i],
                g = !_e && v || u(i),
                y = "Array" == e && p.entries || v;
            if (y && (a = de(y.call(new t)), Oe !== Object.prototype && a.next && (de(a) !== Oe && (we ? we(a, Oe) : "function" != typeof a[Se] && W(a, Se, Ae)), me(a, f, !0))), "values" == i && v && "values" !== v.name && (h = !0, g = function() {
                    return v.call(this)
                }), p[Se] !== g && W(p, Se, g), le[e] = g, i)
                if (c = {
                        values: u("values"),
                        keys: o ? g : u("keys"),
                        entries: u("entries")
                    }, s)
                    for (l in c) !_e && !h && l in p || J(p, l, c[l]);
                else At({
                    target: e,
                    proto: !0,
                    forced: _e || h
                }, c);
            return c
        },
        Le = K.set,
        Me = K.getterFor("Array Iterator"),
        Te = ke(Array, "Array", (function(t, e) {
            Le(this, {
                type: "Array Iterator",
                target: m(t),
                index: 0,
                kind: e
            })
        }), (function() {
            var t = Me(this),
                e = t.target,
                r = t.kind,
                n = t.index++;
            return !e || n >= e.length ? (t.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == r ? {
                value: n,
                done: !1
            } : "values" == r ? {
                value: e[n],
                done: !1
            } : {
                value: [n, e[n]],
                done: !1
            }
        }), "values");
    le.Arguments = le.Array, ce("keys"), ce("values"), ce("entries");
    var je = Object.assign,
        Re = !je || c((function() {
            var t = {},
                e = {},
                r = Symbol();
            return t[r] = 7, "abcdefghijklmnopqrst".split("").forEach((function(t) {
                e[t] = t
            })), 7 != je({}, t)[r] || "abcdefghijklmnopqrst" != Qt(je({}, e)).join("")
        })) ? function(t, e) {
            for (var r = Mt(t), n = arguments.length, i = 1, o = vt.f, s = h.f; n > i;)
                for (var a, c = y(arguments[i++]), u = o ? Qt(c).concat(o(c)) : Qt(c), f = u.length, d = 0; f > d;) a = u[d++], l && !s.call(c, a) || (r[a] = c[a]);
            return r
        } : je;
    At({
        target: "Object",
        stat: !0,
        forced: Object.assign !== Re
    }, {
        assign: Re
    });
    var We = zt("toStringTag"),
        ze = "Arguments" == v(function() {
            return arguments
        }()),
        Ce = function(t) {
            var e, r, n;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), We)) ? r : ze ? v(e) : "Object" == (n = v(e)) && "function" == typeof e.callee ? "Arguments" : n
        },
        Ne = {};
    Ne[zt("toStringTag")] = "z";
    var Ie = "[object z]" !== String(Ne) ? function() {
            return "[object " + Ce(this) + "]"
        } : Ne.toString,
        De = Object.prototype;
    Ie !== De.toString && J(De, "toString", Ie, {
        unsafe: !0
    });
    var Pe = "\t\n\v\f\r Â áš€â€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff",
        Ve = "[" + Pe + "]",
        Fe = RegExp("^" + Ve + Ve + "*"),
        Be = RegExp(Ve + Ve + "*$"),
        He = function(t) {
            return function(e) {
                var r = String(b(e));
                return 1 & t && (r = r.replace(Fe, "")), 2 & t && (r = r.replace(Be, "")), r
            }
        },
        qe = {
            start: He(1),
            end: He(2),
            trim: He(3)
        }.trim,
        $e = a.parseInt,
        Xe = /^[+-]?0[Xx]/,
        Ye = 8 !== $e(Pe + "08") || 22 !== $e(Pe + "0x16") ? function(t, e) {
            var r = qe(String(t));
            return $e(r, e >>> 0 || (Xe.test(r) ? 16 : 10))
        } : $e;
    At({
        global: !0,
        forced: parseInt != Ye
    }, {
        parseInt: Ye
    });
    var Ge = function(t) {
            return function(e, r) {
                var n, i, o = String(b(e)),
                    s = it(r),
                    a = o.length;
                return s < 0 || s >= a ? t ? "" : void 0 : (n = o.charCodeAt(s)) < 55296 || n > 56319 || s + 1 === a || (i = o.charCodeAt(s + 1)) < 56320 || i > 57343 ? t ? o.charAt(s) : n : t ? o.slice(s, s + 2) : i - 56320 + (n - 55296 << 10) + 65536
            }
        },
        Ue = {
            codeAt: Ge(!1),
            charAt: Ge(!0)
        },
        Qe = Ue.charAt,
        Ke = K.set,
        Je = K.getterFor("String Iterator");
    ke(String, "String", (function(t) {
        Ke(this, {
            type: "String Iterator",
            string: String(t),
            index: 0
        })
    }), (function() {
        var t, e = Je(this),
            r = e.string,
            n = e.index;
        return n >= r.length ? {
            value: void 0,
            done: !0
        } : (t = Qe(r, n), e.index += t.length, {
            value: t,
            done: !1
        })
    }));
    var Ze = function(t, e, r) {
            for (var n in e) J(t, n, e[n], r);
            return t
        },
        tr = !c((function() {
            return Object.isExtensible(Object.preventExtensions({}))
        })),
        er = e((function(t) {
            var e = R.f,
                r = F("meta"),
                n = 0,
                i = Object.isExtensible || function() {
                    return !0
                },
                o = function(t) {
                    e(t, r, {
                        value: {
                            objectID: "O" + ++n,
                            weakData: {}
                        }
                    })
                },
                s = t.exports = {
                    REQUIRED: !1,
                    fastKey: function(t, e) {
                        if (!x(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                        if (!O(t, r)) {
                            if (!i(t)) return "F";
                            if (!e) return "E";
                            o(t)
                        }
                        return t[r].objectID
                    },
                    getWeakData: function(t, e) {
                        if (!O(t, r)) {
                            if (!i(t)) return !0;
                            if (!e) return !1;
                            o(t)
                        }
                        return t[r].weakData
                    },
                    onFreeze: function(t) {
                        return tr && s.REQUIRED && i(t) && !O(t, r) && o(t), t
                    }
                };
            q[r] = !0
        })),
        rr = (er.REQUIRED, er.fastKey, er.getWeakData, er.onFreeze, zt("iterator")),
        nr = Array.prototype,
        ir = zt("iterator"),
        or = function(t, e, r, n) {
            try {
                return n ? e(T(r)[0], r[1]) : e(r)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && T(i.call(t)), e
            }
        },
        sr = e((function(t) {
            var e = function(t, e) {
                this.stopped = t, this.result = e
            };
            (t.exports = function(t, r, n, i, o) {
                var s, a, c, l, u, f, h, d = Lt(r, n, i ? 2 : 1);
                if (o) s = t;
                else {
                    if ("function" != typeof(a = function(t) {
                            if (null != t) return t[ir] || t["@@iterator"] || le[Ce(t)]
                        }(t))) throw TypeError("Target is not iterable");
                    if (void 0 !== (h = a) && (le.Array === h || nr[rr] === h)) {
                        for (c = 0, l = st(t.length); l > c; c++)
                            if ((u = i ? d(T(f = t[c])[0], f[1]) : d(t[c])) && u instanceof e) return u;
                        return new e(!1)
                    }
                    s = a.call(t)
                }
                for (; !(f = s.next()).done;)
                    if ((u = or(s, d, f.value, i)) && u instanceof e) return u;
                return new e(!1)
            }).stop = function(t) {
                return new e(!0, t)
            }
        })),
        ar = function(t, e, r) {
            if (!(t instanceof e)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
            return t
        },
        cr = zt("iterator"),
        lr = !1;
    try {
        var ur = 0,
            fr = {
                next: function() {
                    return {
                        done: !!ur++
                    }
                },
                return: function() {
                    lr = !0
                }
            };
        fr[cr] = function() {
            return this
        }, Array.from(fr, (function() {
            throw 2
        }))
    } catch (t) {}
    var hr = function(t, e, r, n, i) {
            var o = a[t],
                s = o && o.prototype,
                l = o,
                u = n ? "set" : "add",
                f = {},
                h = function(t) {
                    var e = s[t];
                    J(s, t, "add" == t ? function(t) {
                        return e.call(this, 0 === t ? 0 : t), this
                    } : "delete" == t ? function(t) {
                        return !(i && !x(t)) && e.call(this, 0 === t ? 0 : t)
                    } : "get" == t ? function(t) {
                        return i && !x(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                    } : "has" == t ? function(t) {
                        return !(i && !x(t)) && e.call(this, 0 === t ? 0 : t)
                    } : function(t, r) {
                        return e.call(this, 0 === t ? 0 : t, r), this
                    })
                };
            if (_t(t, "function" != typeof o || !(i || s.forEach && !c((function() {
                    (new o).entries().next()
                }))))) l = r.getConstructor(e, t, n, u), er.REQUIRED = !0;
            else if (_t(t, !0)) {
                var d = new l,
                    p = d[u](i ? {} : -0, 1) != d,
                    v = c((function() {
                        d.has(1)
                    })),
                    g = function(t, e) {
                        if (!e && !lr) return !1;
                        var r = !1;
                        try {
                            var n = {};
                            n[cr] = function() {
                                return {
                                    next: function() {
                                        return {
                                            done: r = !0
                                        }
                                    }
                                }
                            }, t(n)
                        } catch (t) {}
                        return r
                    }((function(t) {
                        new o(t)
                    })),
                    y = !i && c((function() {
                        for (var t = new o, e = 5; e--;) t[u](e, e);
                        return !t.has(-0)
                    }));
                g || ((l = e((function(e, r) {
                    ar(e, l, t);
                    var i = function(t, e, r) {
                        var n, i;
                        return we && "function" == typeof(n = e.constructor) && n !== r && x(i = n.prototype) && i !== r.prototype && we(t, i), t
                    }(new o, e, l);
                    return null != r && sr(r, i[u], i, n), i
                }))).prototype = s, s.constructor = l), (v || y) && (h("delete"), h("has"), n && h("get")), (y || p) && h(u), i && s.clear && delete s.clear
            }
            return f[t] = l, At({
                global: !0,
                forced: l != o
            }, f), me(l, t), i || r.setStrong(l, t, n), l
        },
        dr = er.getWeakData,
        pr = K.set,
        vr = K.getterFor,
        gr = Pt.find,
        yr = Pt.findIndex,
        br = 0,
        mr = function(t) {
            return t.frozen || (t.frozen = new xr)
        },
        xr = function() {
            this.entries = []
        },
        Er = function(t, e) {
            return gr(t.entries, (function(t) {
                return t[0] === e
            }))
        };
    xr.prototype = {
        get: function(t) {
            var e = Er(this, t);
            if (e) return e[1]
        },
        has: function(t) {
            return !!Er(this, t)
        },
        set: function(t, e) {
            var r = Er(this, t);
            r ? r[1] = e : this.entries.push([t, e])
        },
        delete: function(t) {
            var e = yr(this.entries, (function(e) {
                return e[0] === t
            }));
            return ~e && this.entries.splice(e, 1), !!~e
        }
    };
    var wr = {
            getConstructor: function(t, e, r, n) {
                var i = t((function(t, o) {
                        ar(t, i, e), pr(t, {
                            type: e,
                            id: br++,
                            frozen: void 0
                        }), null != o && sr(o, t[n], t, r)
                    })),
                    o = vr(e),
                    s = function(t, e, r) {
                        var n = o(t),
                            i = dr(T(e), !0);
                        return !0 === i ? mr(n).set(e, r) : i[n.id] = r, t
                    };
                return Ze(i.prototype, {
                    delete: function(t) {
                        var e = o(this);
                        if (!x(t)) return !1;
                        var r = dr(t);
                        return !0 === r ? mr(e).delete(t) : r && O(r, e.id) && delete r[e.id]
                    },
                    has: function(t) {
                        var e = o(this);
                        if (!x(t)) return !1;
                        var r = dr(t);
                        return !0 === r ? mr(e).has(t) : r && O(r, e.id)
                    }
                }), Ze(i.prototype, r ? {
                    get: function(t) {
                        var e = o(this);
                        if (x(t)) {
                            var r = dr(t);
                            return !0 === r ? mr(e).get(t) : r ? r[e.id] : void 0
                        }
                    },
                    set: function(t, e) {
                        return s(this, t, e)
                    }
                } : {
                    add: function(t) {
                        return s(this, t, !0)
                    }
                }), i
            }
        },
        Or = (e((function(t) {
            var e, r = K.enforce,
                n = !a.ActiveXObject && "ActiveXObject" in a,
                i = Object.isExtensible,
                o = function(t) {
                    return function() {
                        return t(this, arguments.length ? arguments[0] : void 0)
                    }
                },
                s = t.exports = hr("WeakMap", o, wr, !0, !0);
            if (D && n) {
                e = wr.getConstructor(o, "WeakMap", !0), er.REQUIRED = !0;
                var c = s.prototype,
                    l = c.delete,
                    u = c.has,
                    f = c.get,
                    h = c.set;
                Ze(c, {
                    delete: function(t) {
                        if (x(t) && !i(t)) {
                            var n = r(this);
                            return n.frozen || (n.frozen = new e), l.call(this, t) || n.frozen.delete(t)
                        }
                        return l.call(this, t)
                    },
                    has: function(t) {
                        if (x(t) && !i(t)) {
                            var n = r(this);
                            return n.frozen || (n.frozen = new e), u.call(this, t) || n.frozen.has(t)
                        }
                        return u.call(this, t)
                    },
                    get: function(t) {
                        if (x(t) && !i(t)) {
                            var n = r(this);
                            return n.frozen || (n.frozen = new e), u.call(this, t) ? f.call(this, t) : n.frozen.get(t)
                        }
                        return f.call(this, t)
                    },
                    set: function(t, n) {
                        if (x(t) && !i(t)) {
                            var o = r(this);
                            o.frozen || (o.frozen = new e), u.call(this, t) ? h.call(this, t, n) : o.frozen.set(t, n)
                        } else h.call(this, t, n);
                        return this
                    }
                })
            }
        })), zt("iterator")),
        _r = zt("toStringTag"),
        Sr = Te.values;
    for (var Ar in Ht) {
        var kr = a[Ar],
            Lr = kr && kr.prototype;
        if (Lr) {
            if (Lr[Or] !== Sr) try {
                W(Lr, Or, Sr)
            } catch (t) {
                Lr[Or] = Sr
            }
            if (Lr[_r] || W(Lr, _r, Ar), Ht[Ar])
                for (var Mr in Te)
                    if (Lr[Mr] !== Te[Mr]) try {
                        W(Lr, Mr, Te[Mr])
                    } catch (t) {
                        Lr[Mr] = Te[Mr]
                    }
        }
    }
    var Tr = "Expected a function",
        jr = NaN,
        Rr = "[object Symbol]",
        Wr = /^\s+|\s+$/g,
        zr = /^[-+]0x[0-9a-f]+$/i,
        Cr = /^0b[01]+$/i,
        Nr = /^0o[0-7]+$/i,
        Ir = parseInt,
        Dr = "object" == typeof t && t && t.Object === Object && t,
        Pr = "object" == typeof self && self && self.Object === Object && self,
        Vr = Dr || Pr || Function("return this")(),
        Fr = Object.prototype.toString,
        Br = Math.max,
        Hr = Math.min,
        qr = function() {
            return Vr.Date.now()
        };

    function $r(t, e, r) {
        var n, i, o, s, a, c, l = 0,
            u = !1,
            f = !1,
            h = !0;
        if ("function" != typeof t) throw new TypeError(Tr);

        function d(e) {
            var r = n,
                o = i;
            return n = i = void 0, l = e, s = t.apply(o, r)
        }

        function p(t) {
            var r = t - c;
            return void 0 === c || r >= e || r < 0 || f && t - l >= o
        }

        function v() {
            var t = qr();
            if (p(t)) return g(t);
            a = setTimeout(v, function(t) {
                var r = e - (t - c);
                return f ? Hr(r, o - (t - l)) : r
            }(t))
        }

        function g(t) {
            return a = void 0, h && n ? d(t) : (n = i = void 0, s)
        }

        function y() {
            var t = qr(),
                r = p(t);
            if (n = arguments, i = this, c = t, r) {
                if (void 0 === a) return function(t) {
                    return l = t, a = setTimeout(v, e), u ? d(t) : s
                }(c);
                if (f) return a = setTimeout(v, e), d(c)
            }
            return void 0 === a && (a = setTimeout(v, e)), s
        }
        return e = Yr(e) || 0, Xr(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? Br(Yr(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function() {
            void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0
        }, y.flush = function() {
            return void 0 === a ? s : g(qr())
        }, y
    }

    function Xr(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    function Yr(t) {
        if ("number" == typeof t) return t;
        if (function(t) {
                return "symbol" == typeof t || function(t) {
                    return !!t && "object" == typeof t
                }(t) && Fr.call(t) == Rr
            }(t)) return jr;
        if (Xr(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = Xr(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(Wr, "");
        var r = Cr.test(t);
        return r || Nr.test(t) ? Ir(t.slice(2), r ? 2 : 8) : zr.test(t) ? jr : +t
    }
    var Gr = function(t, e, r) {
            var n = !0,
                i = !0;
            if ("function" != typeof t) throw new TypeError(Tr);
            return Xr(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), $r(t, e, {
                leading: n,
                maxWait: e,
                trailing: i
            })
        },
        Ur = "Expected a function",
        Qr = NaN,
        Kr = "[object Symbol]",
        Jr = /^\s+|\s+$/g,
        Zr = /^[-+]0x[0-9a-f]+$/i,
        tn = /^0b[01]+$/i,
        en = /^0o[0-7]+$/i,
        rn = parseInt,
        nn = "object" == typeof t && t && t.Object === Object && t,
        on = "object" == typeof self && self && self.Object === Object && self,
        sn = nn || on || Function("return this")(),
        an = Object.prototype.toString,
        cn = Math.max,
        ln = Math.min,
        un = function() {
            return sn.Date.now()
        };

    function fn(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    function hn(t) {
        if ("number" == typeof t) return t;
        if (function(t) {
                return "symbol" == typeof t || function(t) {
                    return !!t && "object" == typeof t
                }(t) && an.call(t) == Kr
            }(t)) return Qr;
        if (fn(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = fn(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(Jr, "");
        var r = tn.test(t);
        return r || en.test(t) ? rn(t.slice(2), r ? 2 : 8) : Zr.test(t) ? Qr : +t
    }
    var dn = function(t, e, r) {
            var n, i, o, s, a, c, l = 0,
                u = !1,
                f = !1,
                h = !0;
            if ("function" != typeof t) throw new TypeError(Ur);

            function d(e) {
                var r = n,
                    o = i;
                return n = i = void 0, l = e, s = t.apply(o, r)
            }

            function p(t) {
                var r = t - c;
                return void 0 === c || r >= e || r < 0 || f && t - l >= o
            }

            function v() {
                var t = un();
                if (p(t)) return g(t);
                a = setTimeout(v, function(t) {
                    var r = e - (t - c);
                    return f ? ln(r, o - (t - l)) : r
                }(t))
            }

            function g(t) {
                return a = void 0, h && n ? d(t) : (n = i = void 0, s)
            }

            function y() {
                var t = un(),
                    r = p(t);
                if (n = arguments, i = this, c = t, r) {
                    if (void 0 === a) return function(t) {
                        return l = t, a = setTimeout(v, e), u ? d(t) : s
                    }(c);
                    if (f) return a = setTimeout(v, e), d(c)
                }
                return void 0 === a && (a = setTimeout(v, e)), s
            }
            return e = hn(e) || 0, fn(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? cn(hn(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function() {
                void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0
            }, y.flush = function() {
                return void 0 === a ? s : g(un())
            }, y
        },
        pn = "Expected a function",
        vn = "__lodash_hash_undefined__",
        gn = "[object Function]",
        yn = "[object GeneratorFunction]",
        bn = /^\[object .+?Constructor\]$/,
        mn = "object" == typeof t && t && t.Object === Object && t,
        xn = "object" == typeof self && self && self.Object === Object && self,
        En = mn || xn || Function("return this")();
    var wn = Array.prototype,
        On = Function.prototype,
        _n = Object.prototype,
        Sn = En["__core-js_shared__"],
        An = function() {
            var t = /[^.]+$/.exec(Sn && Sn.keys && Sn.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }(),
        kn = On.toString,
        Ln = _n.hasOwnProperty,
        Mn = _n.toString,
        Tn = RegExp("^" + kn.call(Ln).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        jn = wn.splice,
        Rn = Vn(En, "Map"),
        Wn = Vn(Object, "create");

    function zn(t) {
        var e = -1,
            r = t ? t.length : 0;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }

    function Cn(t) {
        var e = -1,
            r = t ? t.length : 0;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }

    function Nn(t) {
        var e = -1,
            r = t ? t.length : 0;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }

    function In(t, e) {
        for (var r, n, i = t.length; i--;)
            if ((r = t[i][0]) === (n = e) || r != r && n != n) return i;
        return -1
    }

    function Dn(t) {
        return !(!Bn(t) || (e = t, An && An in e)) && (function(t) {
            var e = Bn(t) ? Mn.call(t) : "";
            return e == gn || e == yn
        }(t) || function(t) {
            var e = !1;
            if (null != t && "function" != typeof t.toString) try {
                e = !!(t + "")
            } catch (t) {}
            return e
        }(t) ? Tn : bn).test(function(t) {
            if (null != t) {
                try {
                    return kn.call(t)
                } catch (t) {}
                try {
                    return t + ""
                } catch (t) {}
            }
            return ""
        }(t));
        var e
    }

    function Pn(t, e) {
        var r, n, i = t.__data__;
        return ("string" == (n = typeof(r = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof e ? "string" : "hash"] : i.map
    }

    function Vn(t, e) {
        var r = function(t, e) {
            return null == t ? void 0 : t[e]
        }(t, e);
        return Dn(r) ? r : void 0
    }

    function Fn(t, e) {
        if ("function" != typeof t || e && "function" != typeof e) throw new TypeError(pn);
        var r = function() {
            var n = arguments,
                i = e ? e.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(i)) return o.get(i);
            var s = t.apply(this, n);
            return r.cache = o.set(i, s), s
        };
        return r.cache = new(Fn.Cache || Nn), r
    }

    function Bn(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }
    zn.prototype.clear = function() {
        this.__data__ = Wn ? Wn(null) : {}
    }, zn.prototype.delete = function(t) {
        return this.has(t) && delete this.__data__[t]
    }, zn.prototype.get = function(t) {
        var e = this.__data__;
        if (Wn) {
            var r = e[t];
            return r === vn ? void 0 : r
        }
        return Ln.call(e, t) ? e[t] : void 0
    }, zn.prototype.has = function(t) {
        var e = this.__data__;
        return Wn ? void 0 !== e[t] : Ln.call(e, t)
    }, zn.prototype.set = function(t, e) {
        return this.__data__[t] = Wn && void 0 === e ? vn : e, this
    }, Cn.prototype.clear = function() {
        this.__data__ = []
    }, Cn.prototype.delete = function(t) {
        var e = this.__data__,
            r = In(e, t);
        return !(r < 0) && (r == e.length - 1 ? e.pop() : jn.call(e, r, 1), !0)
    }, Cn.prototype.get = function(t) {
        var e = this.__data__,
            r = In(e, t);
        return r < 0 ? void 0 : e[r][1]
    }, Cn.prototype.has = function(t) {
        return In(this.__data__, t) > -1
    }, Cn.prototype.set = function(t, e) {
        var r = this.__data__,
            n = In(r, t);
        return n < 0 ? r.push([t, e]) : r[n][1] = e, this
    }, Nn.prototype.clear = function() {
        this.__data__ = {
            hash: new zn,
            map: new(Rn || Cn),
            string: new zn
        }
    }, Nn.prototype.delete = function(t) {
        return Pn(this, t).delete(t)
    }, Nn.prototype.get = function(t) {
        return Pn(this, t).get(t)
    }, Nn.prototype.has = function(t) {
        return Pn(this, t).has(t)
    }, Nn.prototype.set = function(t, e) {
        return Pn(this, t).set(t, e), this
    }, Fn.Cache = Nn;
    var Hn = Fn,
        qn = function() {
            if ("undefined" != typeof Map) return Map;

            function t(t, e) {
                var r = -1;
                return t.some((function(t, n) {
                    return t[0] === e && (r = n, !0)
                })), r
            }
            return function() {
                function e() {
                    this.__entries__ = []
                }
                return Object.defineProperty(e.prototype, "size", {
                    get: function() {
                        return this.__entries__.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.get = function(e) {
                    var r = t(this.__entries__, e),
                        n = this.__entries__[r];
                    return n && n[1]
                }, e.prototype.set = function(e, r) {
                    var n = t(this.__entries__, e);
                    ~n ? this.__entries__[n][1] = r : this.__entries__.push([e, r])
                }, e.prototype.delete = function(e) {
                    var r = this.__entries__,
                        n = t(r, e);
                    ~n && r.splice(n, 1)
                }, e.prototype.has = function(e) {
                    return !!~t(this.__entries__, e)
                }, e.prototype.clear = function() {
                    this.__entries__.splice(0)
                }, e.prototype.forEach = function(t, e) {
                    void 0 === e && (e = null);
                    for (var r = 0, n = this.__entries__; r < n.length; r++) {
                        var i = n[r];
                        t.call(e, i[1], i[0])
                    }
                }, e
            }()
        }(),
        $n = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
        Xn = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
        Yn = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(Xn) : function(t) {
            return setTimeout((function() {
                return t(Date.now())
            }), 1e3 / 60)
        },
        Gn = 2;
    var Un = 20,
        Qn = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
        Kn = "undefined" != typeof MutationObserver,
        Jn = function() {
            function t() {
                this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, e) {
                    var r = !1,
                        n = !1,
                        i = 0;

                    function o() {
                        r && (r = !1, t()), n && a()
                    }

                    function s() {
                        Yn(o)
                    }

                    function a() {
                        var t = Date.now();
                        if (r) {
                            if (t - i < Gn) return;
                            n = !0
                        } else r = !0, n = !1, setTimeout(s, e);
                        i = t
                    }
                    return a
                }(this.refresh.bind(this), Un)
            }
            return t.prototype.addObserver = function(t) {
                ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
            }, t.prototype.removeObserver = function(t) {
                var e = this.observers_,
                    r = e.indexOf(t);
                ~r && e.splice(r, 1), !e.length && this.connected_ && this.disconnect_()
            }, t.prototype.refresh = function() {
                this.updateObservers_() && this.refresh()
            }, t.prototype.updateObservers_ = function() {
                var t = this.observers_.filter((function(t) {
                    return t.gatherActive(), t.hasActive()
                }));
                return t.forEach((function(t) {
                    return t.broadcastActive()
                })), t.length > 0
            }, t.prototype.connect_ = function() {
                $n && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Kn ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
            }, t.prototype.disconnect_ = function() {
                $n && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
            }, t.prototype.onTransitionEnd_ = function(t) {
                var e = t.propertyName,
                    r = void 0 === e ? "" : e;
                Qn.some((function(t) {
                    return !!~r.indexOf(t)
                })) && this.refresh()
            }, t.getInstance = function() {
                return this.instance_ || (this.instance_ = new t), this.instance_
            }, t.instance_ = null, t
        }(),
        Zn = function(t, e) {
            for (var r = 0, n = Object.keys(e); r < n.length; r++) {
                var i = n[r];
                Object.defineProperty(t, i, {
                    value: e[i],
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                })
            }
            return t
        },
        ti = function(t) {
            return t && t.ownerDocument && t.ownerDocument.defaultView || Xn
        },
        ei = ai(0, 0, 0, 0);

    function ri(t) {
        return parseFloat(t) || 0
    }

    function ni(t) {
        for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        return e.reduce((function(e, r) {
            return e + ri(t["border-" + r + "-width"])
        }), 0)
    }

    function ii(t) {
        var e = t.clientWidth,
            r = t.clientHeight;
        if (!e && !r) return ei;
        var n = ti(t).getComputedStyle(t),
            i = function(t) {
                for (var e = {}, r = 0, n = ["top", "right", "bottom", "left"]; r < n.length; r++) {
                    var i = n[r],
                        o = t["padding-" + i];
                    e[i] = ri(o)
                }
                return e
            }(n),
            o = i.left + i.right,
            s = i.top + i.bottom,
            a = ri(n.width),
            c = ri(n.height);
        if ("border-box" === n.boxSizing && (Math.round(a + o) !== e && (a -= ni(n, "left", "right") + o), Math.round(c + s) !== r && (c -= ni(n, "top", "bottom") + s)), ! function(t) {
                return t === ti(t).document.documentElement
            }(t)) {
            var l = Math.round(a + o) - e,
                u = Math.round(c + s) - r;
            1 !== Math.abs(l) && (a -= l), 1 !== Math.abs(u) && (c -= u)
        }
        return ai(i.left, i.top, a, c)
    }
    var oi = "undefined" != typeof SVGGraphicsElement ? function(t) {
        return t instanceof ti(t).SVGGraphicsElement
    } : function(t) {
        return t instanceof ti(t).SVGElement && "function" == typeof t.getBBox
    };

    function si(t) {
        return $n ? oi(t) ? function(t) {
            var e = t.getBBox();
            return ai(0, 0, e.width, e.height)
        }(t) : ii(t) : ei
    }

    function ai(t, e, r, n) {
        return {
            x: t,
            y: e,
            width: r,
            height: n
        }
    }
    var ci = function() {
            function t(t) {
                this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ai(0, 0, 0, 0), this.target = t
            }
            return t.prototype.isActive = function() {
                var t = si(this.target);
                return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
            }, t.prototype.broadcastRect = function() {
                var t = this.contentRect_;
                return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
            }, t
        }(),
        li = function(t, e) {
            var r, n, i, o, s, a, c, l = (n = (r = e).x, i = r.y, o = r.width, s = r.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, c = Object.create(a.prototype), Zn(c, {
                x: n,
                y: i,
                width: o,
                height: s,
                top: i,
                right: n + o,
                bottom: s + i,
                left: n
            }), c);
            Zn(this, {
                target: t,
                contentRect: l
            })
        },
        ui = function() {
            function t(t, e, r) {
                if (this.activeObservations_ = [], this.observations_ = new qn, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                this.callback_ = t, this.controller_ = e, this.callbackCtx_ = r
            }
            return t.prototype.observe = function(t) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(t instanceof ti(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var e = this.observations_;
                    e.has(t) || (e.set(t, new ci(t)), this.controller_.addObserver(this), this.controller_.refresh())
                }
            }, t.prototype.unobserve = function(t) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(t instanceof ti(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var e = this.observations_;
                    e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
                }
            }, t.prototype.disconnect = function() {
                this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
            }, t.prototype.gatherActive = function() {
                var t = this;
                this.clearActive(), this.observations_.forEach((function(e) {
                    e.isActive() && t.activeObservations_.push(e)
                }))
            }, t.prototype.broadcastActive = function() {
                if (this.hasActive()) {
                    var t = this.callbackCtx_,
                        e = this.activeObservations_.map((function(t) {
                            return new li(t.target, t.broadcastRect())
                        }));
                    this.callback_.call(t, e, t), this.clearActive()
                }
            }, t.prototype.clearActive = function() {
                this.activeObservations_.splice(0)
            }, t.prototype.hasActive = function() {
                return this.activeObservations_.length > 0
            }, t
        }(),
        fi = "undefined" != typeof WeakMap ? new WeakMap : new qn,
        hi = function t(e) {
            if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            var r = Jn.getInstance(),
                n = new ui(e, r, this);
            fi.set(this, n)
        };
    ["observe", "unobserve", "disconnect"].forEach((function(t) {
        hi.prototype[t] = function() {
            var e;
            return (e = fi.get(this))[t].apply(e, arguments)
        }
    }));
    var di = void 0 !== Xn.ResizeObserver ? Xn.ResizeObserver : hi,
        pi = function(t) {
            return function(e, r, n, i) {
                kt(r);
                var o = Mt(e),
                    s = y(o),
                    a = st(o.length),
                    c = t ? a - 1 : 0,
                    l = t ? -1 : 1;
                if (n < 2)
                    for (;;) {
                        if (c in s) {
                            i = s[c], c += l;
                            break
                        }
                        if (c += l, t ? c < 0 : a <= c) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; t ? c >= 0 : a > c; c += l) c in s && (i = r(i, s[c], c, o));
                return i
            }
        },
        vi = {
            left: pi(!1),
            right: pi(!0)
        }.left;
    At({
        target: "Array",
        proto: !0,
        forced: Vt("reduce")
    }, {
        reduce: function(t) {
            return vi(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var gi = R.f,
        yi = Function.prototype,
        bi = yi.toString,
        mi = /^\s*function ([^ (]*)/;
    !l || "name" in yi || gi(yi, "name", {
        configurable: !0,
        get: function() {
            try {
                return bi.call(this).match(mi)[1]
            } catch (t) {
                return ""
            }
        }
    });
    var xi, Ei, wi = function() {
            var t = T(this),
                e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        },
        Oi = RegExp.prototype.exec,
        _i = String.prototype.replace,
        Si = Oi,
        Ai = (xi = /a/, Ei = /b*/g, Oi.call(xi, "a"), Oi.call(Ei, "a"), 0 !== xi.lastIndex || 0 !== Ei.lastIndex),
        ki = void 0 !== /()??/.exec("")[1];
    (Ai || ki) && (Si = function(t) {
        var e, r, n, i, o = this;
        return ki && (r = new RegExp("^" + o.source + "$(?!\\s)", wi.call(o))), Ai && (e = o.lastIndex), n = Oi.call(o, t), Ai && n && (o.lastIndex = o.global ? n.index + n[0].length : e), ki && n && n.length > 1 && _i.call(n[0], r, (function() {
            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (n[i] = void 0)
        })), n
    });
    var Li = Si;
    At({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== Li
    }, {
        exec: Li
    });
    var Mi = zt("species"),
        Ti = !c((function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        })),
        ji = !c((function() {
            var t = /(?:)/,
                e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments)
            };
            var r = "ab".split(t);
            return 2 !== r.length || "a" !== r[0] || "b" !== r[1]
        })),
        Ri = function(t, e, r, n) {
            var i = zt(t),
                o = !c((function() {
                    var e = {};
                    return e[i] = function() {
                        return 7
                    }, 7 != "" [t](e)
                })),
                s = o && !c((function() {
                    var e = !1,
                        r = /a/;
                    return r.exec = function() {
                        return e = !0, null
                    }, "split" === t && (r.constructor = {}, r.constructor[Mi] = function() {
                        return r
                    }), r[i](""), !e
                }));
            if (!o || !s || "replace" === t && !Ti || "split" === t && !ji) {
                var a = /./ [i],
                    l = r(i, "" [t], (function(t, e, r, n, i) {
                        return e.exec === Li ? o && !i ? {
                            done: !0,
                            value: a.call(e, r, n)
                        } : {
                            done: !0,
                            value: t.call(r, e, n)
                        } : {
                            done: !1
                        }
                    })),
                    u = l[0],
                    f = l[1];
                J(String.prototype, t, u), J(RegExp.prototype, i, 2 == e ? function(t, e) {
                    return f.call(t, this, e)
                } : function(t) {
                    return f.call(t, this)
                }), n && W(RegExp.prototype[i], "sham", !0)
            }
        },
        Wi = Ue.charAt,
        zi = function(t, e, r) {
            return e + (r ? Wi(t, e).length : 1)
        },
        Ci = function(t, e) {
            var r = t.exec;
            if ("function" == typeof r) {
                var n = r.call(t, e);
                if ("object" != typeof n) throw TypeError("RegExp exec method returned something other than an Object or null");
                return n
            }
            if ("RegExp" !== v(t)) throw TypeError("RegExp#exec called on incompatible receiver");
            return Li.call(t, e)
        };
    Ri("match", 1, (function(t, e, r) {
        return [function(e) {
            var r = b(this),
                n = null == e ? void 0 : e[t];
            return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r))
        }, function(t) {
            var n = r(e, t, this);
            if (n.done) return n.value;
            var i = T(t),
                o = String(this);
            if (!i.global) return Ci(i, o);
            var s = i.unicode;
            i.lastIndex = 0;
            for (var a, c = [], l = 0; null !== (a = Ci(i, o));) {
                var u = String(a[0]);
                c[l] = u, "" === u && (i.lastIndex = zi(o, st(i.lastIndex), s)), l++
            }
            return 0 === l ? null : c
        }]
    }));
    var Ni = Math.max,
        Ii = Math.min,
        Di = Math.floor,
        Pi = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        Vi = /\$([$&'`]|\d\d?)/g;
    Ri("replace", 2, (function(t, e, r) {
        return [function(r, n) {
            var i = b(this),
                o = null == r ? void 0 : r[t];
            return void 0 !== o ? o.call(r, i, n) : e.call(String(i), r, n)
        }, function(t, i) {
            var o = r(e, t, this, i);
            if (o.done) return o.value;
            var s = T(t),
                a = String(this),
                c = "function" == typeof i;
            c || (i = String(i));
            var l = s.global;
            if (l) {
                var u = s.unicode;
                s.lastIndex = 0
            }
            for (var f = [];;) {
                var h = Ci(s, a);
                if (null === h) break;
                if (f.push(h), !l) break;
                "" === String(h[0]) && (s.lastIndex = zi(a, st(s.lastIndex), u))
            }
            for (var d, p = "", v = 0, g = 0; g < f.length; g++) {
                h = f[g];
                for (var y = String(h[0]), b = Ni(Ii(it(h.index), a.length), 0), m = [], x = 1; x < h.length; x++) m.push(void 0 === (d = h[x]) ? d : String(d));
                var E = h.groups;
                if (c) {
                    var w = [y].concat(m, b, a);
                    void 0 !== E && w.push(E);
                    var O = String(i.apply(void 0, w))
                } else O = n(y, a, b, m, E, i);
                b >= v && (p += a.slice(v, b) + O, v = b + y.length)
            }
            return p + a.slice(v)
        }];

        function n(t, r, n, i, o, s) {
            var a = n + t.length,
                c = i.length,
                l = Vi;
            return void 0 !== o && (o = Mt(o), l = Pi), e.call(s, l, (function(e, s) {
                var l;
                switch (s.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return r.slice(0, n);
                    case "'":
                        return r.slice(a);
                    case "<":
                        l = o[s.slice(1, -1)];
                        break;
                    default:
                        var u = +s;
                        if (0 === u) return e;
                        if (u > c) {
                            var f = Di(u / 10);
                            return 0 === f ? e : f <= c ? void 0 === i[f - 1] ? s.charAt(1) : i[f - 1] + s.charAt(1) : e
                        }
                        l = i[u - 1]
                }
                return void 0 === l ? "" : l
            }))
        }
    }));
    var Fi = function(t) {
        return Array.prototype.reduce.call(t, (function(t, e) {
            var r = e.name.match(/data-simplebar-(.+)/);
            if (r) {
                var n = r[1].replace(/\W+(.)/g, (function(t, e) {
                    return e.toUpperCase()
                }));
                switch (e.value) {
                    case "true":
                        t[n] = !0;
                        break;
                    case "false":
                        t[n] = !1;
                        break;
                    case void 0:
                        t[n] = !0;
                        break;
                    default:
                        t[n] = e.value
                }
            }
            return t
        }), {})
    };

    function Bi(t) {
        return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window
    }

    function Hi(t) {
        return t && t.ownerDocument ? t.ownerDocument : document
    }
    var qi = null,
        $i = null;

    function Xi(t) {
        if (null === qi) {
            var e = Hi(t);
            if (void 0 === e) return qi = 0;
            var r = e.body,
                n = e.createElement("div");
            n.classList.add("simplebar-hide-scrollbar"), r.appendChild(n);
            var i = n.getBoundingClientRect().right;
            r.removeChild(n), qi = i
        }
        return qi
    }
    Yt && window.addEventListener("resize", (function() {
        $i !== window.devicePixelRatio && ($i = window.devicePixelRatio, qi = null)
    }));
    var Yi = function() {
        function t(e, r) {
            var n = this;
            this.onScroll = function() {
                var t = Bi(n.el);
                n.scrollXTicking || (t.requestAnimationFrame(n.scrollX), n.scrollXTicking = !0), n.scrollYTicking || (t.requestAnimationFrame(n.scrollY), n.scrollYTicking = !0)
            }, this.scrollX = function() {
                n.axis.x.isOverflowing && (n.showScrollbar("x"), n.positionScrollbar("x")), n.scrollXTicking = !1
            }, this.scrollY = function() {
                n.axis.y.isOverflowing && (n.showScrollbar("y"), n.positionScrollbar("y")), n.scrollYTicking = !1
            }, this.onMouseEnter = function() {
                n.showScrollbar("x"), n.showScrollbar("y")
            }, this.onMouseMove = function(t) {
                n.mouseX = t.clientX, n.mouseY = t.clientY, (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseMoveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseMoveForAxis("y")
            }, this.onMouseLeave = function() {
                n.onMouseMove.cancel(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseLeaveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseLeaveForAxis("y"), n.mouseX = -1, n.mouseY = -1
            }, this.onWindowResize = function() {
                n.scrollbarWidth = n.getScrollbarWidth(), n.hideNativeScrollbar()
            }, this.hideScrollbars = function() {
                n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.track.rect) || (n.axis.y.scrollbar.el.classList.remove(n.classNames.visible), n.axis.y.isVisible = !1), n.isWithinBounds(n.axis.x.track.rect) || (n.axis.x.scrollbar.el.classList.remove(n.classNames.visible), n.axis.x.isVisible = !1)
            }, this.onPointerEvent = function(t) {
                var e, r;
                n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && (e = n.isWithinBounds(n.axis.x.track.rect)), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && (r = n.isWithinBounds(n.axis.y.track.rect)), (e || r) && (t.preventDefault(), t.stopPropagation(), "mousedown" === t.type && (e && (n.axis.x.scrollbar.rect = n.axis.x.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.x.scrollbar.rect) ? n.onDragStart(t, "x") : n.onTrackClick(t, "x")), r && (n.axis.y.scrollbar.rect = n.axis.y.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.scrollbar.rect) ? n.onDragStart(t, "y") : n.onTrackClick(t, "y"))))
            }, this.drag = function(e) {
                var r = n.axis[n.draggedAxis].track,
                    i = r.rect[n.axis[n.draggedAxis].sizeAttr],
                    o = n.axis[n.draggedAxis].scrollbar,
                    s = n.contentWrapperEl[n.axis[n.draggedAxis].scrollSizeAttr],
                    a = parseInt(n.elStyles[n.axis[n.draggedAxis].sizeAttr], 10);
                e.preventDefault(), e.stopPropagation();
                var c = (("y" === n.draggedAxis ? e.pageY : e.pageX) - r.rect[n.axis[n.draggedAxis].offsetAttr] - n.axis[n.draggedAxis].dragOffset) / (i - o.size) * (s - a);
                "x" === n.draggedAxis && (c = n.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? c - (i + o.size) : c, c = n.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -c : c), n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr] = c
            }, this.onEndDrag = function(t) {
                var e = Hi(n.el),
                    r = Bi(n.el);
                t.preventDefault(), t.stopPropagation(), n.el.classList.remove(n.classNames.dragging), e.removeEventListener("mousemove", n.drag, !0), e.removeEventListener("mouseup", n.onEndDrag, !0), n.removePreventClickId = r.setTimeout((function() {
                    e.removeEventListener("click", n.preventClick, !0), e.removeEventListener("dblclick", n.preventClick, !0), n.removePreventClickId = null
                }))
            }, this.preventClick = function(t) {
                t.preventDefault(), t.stopPropagation()
            }, this.el = e, this.minScrollbarWidth = 20, this.options = Object.assign({}, t.defaultOptions, {}, r), this.classNames = Object.assign({}, t.defaultOptions.classNames, {}, this.options.classNames), this.axis = {
                x: {
                    scrollOffsetAttr: "scrollLeft",
                    sizeAttr: "width",
                    scrollSizeAttr: "scrollWidth",
                    offsetSizeAttr: "offsetWidth",
                    offsetAttr: "left",
                    overflowAttr: "overflowX",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                },
                y: {
                    scrollOffsetAttr: "scrollTop",
                    sizeAttr: "height",
                    scrollSizeAttr: "scrollHeight",
                    offsetSizeAttr: "offsetHeight",
                    offsetAttr: "top",
                    overflowAttr: "overflowY",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                }
            }, this.removePreventClickId = null, t.instances.has(this.el) || (this.recalculate = Gr(this.recalculate.bind(this), 64), this.onMouseMove = Gr(this.onMouseMove.bind(this), 64), this.hideScrollbars = dn(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = dn(this.onWindowResize.bind(this), 64, {
                leading: !0
            }), t.getRtlHelpers = Hn(t.getRtlHelpers), this.init())
        }
        t.getRtlHelpers = function() {
            var e = document.createElement("div");
            e.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
            var r = e.firstElementChild;
            document.body.appendChild(r);
            var n = r.firstElementChild;
            r.scrollLeft = 0;
            var i = t.getOffset(r),
                o = t.getOffset(n);
            r.scrollLeft = 999;
            var s = t.getOffset(n);
            return {
                isRtlScrollingInverted: i.left !== o.left && o.left - s.left != 0,
                isRtlScrollbarInverted: i.left !== o.left
            }
        }, t.getOffset = function(t) {
            var e = t.getBoundingClientRect(),
                r = Hi(t),
                n = Bi(t);
            return {
                top: e.top + (n.pageYOffset || r.documentElement.scrollTop),
                left: e.left + (n.pageXOffset || r.documentElement.scrollLeft)
            }
        };
        var e = t.prototype;
        return e.init = function() {
            t.instances.set(this.el, this), Yt && (this.initDOM(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners())
        }, e.initDOM = function() {
            var t = this;
            if (Array.prototype.filter.call(this.el.children, (function(e) {
                    return e.classList.contains(t.classNames.wrapper)
                })).length) this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper), this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl), this.offsetEl = this.el.querySelector("." + this.classNames.offset), this.maskEl = this.el.querySelector("." + this.classNames.mask), this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder), this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl), this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal), this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
            else {
                for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentWrapperEl.classList.add(this.classNames.contentWrapper), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.contentEl.classList.add(this.classNames.contentEl), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl)
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
                var e = document.createElement("div"),
                    r = document.createElement("div");
                e.classList.add(this.classNames.track), r.classList.add(this.classNames.scrollbar), e.appendChild(r), this.axis.x.track.el = e.cloneNode(!0), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = e.cloneNode(!0), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el)
            }
            this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar), this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)), this.el.setAttribute("data-simplebar", "init")
        }, e.initListeners = function() {
            var t = this,
                e = Bi(this.el);
            this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function(e) {
                t.el.addEventListener(e, t.onPointerEvent, !0)
            })), ["touchstart", "touchend", "touchmove"].forEach((function(e) {
                t.el.addEventListener(e, t.onPointerEvent, {
                    capture: !0,
                    passive: !0
                })
            })), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.addEventListener("scroll", this.onScroll), e.addEventListener("resize", this.onWindowResize);
            var r = !1,
                n = e.ResizeObserver || di;
            this.resizeObserver = new n((function() {
                r && t.recalculate()
            })), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), e.requestAnimationFrame((function() {
                r = !0
            })), this.mutationObserver = new e.MutationObserver(this.recalculate), this.mutationObserver.observe(this.contentEl, {
                childList: !0,
                subtree: !0,
                characterData: !0
            })
        }, e.recalculate = function() {
            var t = Bi(this.el);
            this.elStyles = t.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction;
            var e = this.heightAutoObserverEl.offsetHeight <= 1,
                r = this.heightAutoObserverEl.offsetWidth <= 1,
                n = this.contentEl.offsetWidth,
                i = this.contentWrapperEl.offsetWidth,
                o = this.elStyles.overflowX,
                s = this.elStyles.overflowY;
            this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft, this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
            var a = this.contentEl.scrollHeight,
                c = this.contentEl.scrollWidth;
            this.contentWrapperEl.style.height = e ? "auto" : "100%", this.placeholderEl.style.width = r ? n + "px" : "auto", this.placeholderEl.style.height = a + "px";
            var l = this.contentWrapperEl.offsetHeight;
            this.axis.x.isOverflowing = c > n, this.axis.y.isOverflowing = a > l, this.axis.x.isOverflowing = "hidden" !== o && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== s && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar();
            var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                f = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
            this.axis.x.isOverflowing = this.axis.x.isOverflowing && c > i - f, this.axis.y.isOverflowing = this.axis.y.isOverflowing && a > l - u, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px", this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px", this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y")
        }, e.getScrollbarSize = function(t) {
            if (void 0 === t && (t = "y"), !this.axis[t].isOverflowing) return 0;
            var e, r = this.contentEl[this.axis[t].scrollSizeAttr],
                n = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
                i = n / r;
            return e = Math.max(~~(i * n), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (e = Math.min(e, this.options.scrollbarMaxSize)), e
        }, e.positionScrollbar = function(e) {
            if (void 0 === e && (e = "y"), this.axis[e].isOverflowing) {
                var r = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
                    n = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
                    i = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
                    o = this.axis[e].scrollbar,
                    s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
                    a = (s = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -s : s) / (r - i),
                    c = ~~((n - o.size) * a);
                c = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? c + (n - o.size) : c, o.el.style.transform = "x" === e ? "translate3d(" + c + "px, 0, 0)" : "translate3d(0, " + c + "px, 0)"
            }
        }, e.toggleTrackVisibility = function(t) {
            void 0 === t && (t = "y");
            var e = this.axis[t].track.el,
                r = this.axis[t].scrollbar.el;
            this.axis[t].isOverflowing || this.axis[t].forceVisible ? (e.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll") : (e.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden"), this.axis[t].isOverflowing ? r.style.display = "block" : r.style.display = "none"
        }, e.hideNativeScrollbar = function() {
            this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0, this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0
        }, e.onMouseMoveForAxis = function(t) {
            void 0 === t && (t = "y"), this.axis[t].track.rect = this.axis[t].track.el.getBoundingClientRect(), this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect(), this.isWithinBounds(this.axis[t].scrollbar.rect) ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover) : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover), this.isWithinBounds(this.axis[t].track.rect) ? (this.showScrollbar(t), this.axis[t].track.el.classList.add(this.classNames.hover)) : this.axis[t].track.el.classList.remove(this.classNames.hover)
        }, e.onMouseLeaveForAxis = function(t) {
            void 0 === t && (t = "y"), this.axis[t].track.el.classList.remove(this.classNames.hover), this.axis[t].scrollbar.el.classList.remove(this.classNames.hover)
        }, e.showScrollbar = function(t) {
            void 0 === t && (t = "y");
            var e = this.axis[t].scrollbar.el;
            this.axis[t].isVisible || (e.classList.add(this.classNames.visible), this.axis[t].isVisible = !0), this.options.autoHide && this.hideScrollbars()
        }, e.onDragStart = function(t, e) {
            void 0 === e && (e = "y");
            var r = Hi(this.el),
                n = Bi(this.el),
                i = this.axis[e].scrollbar,
                o = "y" === e ? t.pageY : t.pageX;
            this.axis[e].dragOffset = o - i.rect[this.axis[e].offsetAttr], this.draggedAxis = e, this.el.classList.add(this.classNames.dragging), r.addEventListener("mousemove", this.drag, !0), r.addEventListener("mouseup", this.onEndDrag, !0), null === this.removePreventClickId ? (r.addEventListener("click", this.preventClick, !0), r.addEventListener("dblclick", this.preventClick, !0)) : (n.clearTimeout(this.removePreventClickId), this.removePreventClickId = null)
        }, e.onTrackClick = function(t, e) {
            var r = this;
            if (void 0 === e && (e = "y"), this.options.clickOnTrack) {
                var n = Bi(this.el);
                this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect();
                var i = this.axis[e].scrollbar.rect[this.axis[e].offsetAttr],
                    o = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
                    s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
                    a = ("y" === e ? this.mouseY - i : this.mouseX - i) < 0 ? -1 : 1,
                    c = -1 === a ? s - o : s + o;
                ! function t() {
                    var i, o; - 1 === a ? s > c && (s -= r.options.clickOnTrackSpeed, r.contentWrapperEl.scrollTo(((i = {})[r.axis[e].offsetAttr] = s, i)), n.requestAnimationFrame(t)) : s < c && (s += r.options.clickOnTrackSpeed, r.contentWrapperEl.scrollTo(((o = {})[r.axis[e].offsetAttr] = s, o)), n.requestAnimationFrame(t))
                }()
            }
        }, e.getContentElement = function() {
            return this.contentEl
        }, e.getScrollElement = function() {
            return this.contentWrapperEl
        }, e.getScrollbarWidth = function() {
            try {
                return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : Xi(this.el)
            } catch (t) {
                return Xi(this.el)
            }
        }, e.removeListeners = function() {
            var t = this,
                e = Bi(this.el);
            this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function(e) {
                t.el.removeEventListener(e, t.onPointerEvent, !0)
            })), ["touchstart", "touchend", "touchmove"].forEach((function(e) {
                t.el.removeEventListener(e, t.onPointerEvent, {
                    capture: !0,
                    passive: !0
                })
            })), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.recalculate.cancel(), this.onMouseMove.cancel(), this.hideScrollbars.cancel(), this.onWindowResize.cancel()
        }, e.unMount = function() {
            this.removeListeners(), t.instances.delete(this.el)
        }, e.isWithinBounds = function(t) {
            return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height
        }, e.findChild = function(t, e) {
            var r = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
            return Array.prototype.filter.call(t.children, (function(t) {
                return r.call(t, e)
            }))[0]
        }, t
    }();
    return Yi.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        clickOnTrack: !0,
        clickOnTrackSpeed: 40,
        classNames: {
            contentEl: "simplebar-content",
            contentWrapper: "simplebar-content-wrapper",
            offset: "simplebar-offset",
            mask: "simplebar-mask",
            wrapper: "simplebar-wrapper",
            placeholder: "simplebar-placeholder",
            scrollbar: "simplebar-scrollbar",
            track: "simplebar-track",
            heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
            heightAutoObserverEl: "simplebar-height-auto-observer",
            visible: "simplebar-visible",
            horizontal: "simplebar-horizontal",
            vertical: "simplebar-vertical",
            hover: "simplebar-hover",
            dragging: "simplebar-dragging"
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1e3
    }, Yi.instances = new WeakMap, Yi.initDOMLoadedElements = function() {
        document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), (function(t) {
            "init" === t.getAttribute("data-simplebar") || Yi.instances.has(t) || new Yi(t, Fi(t.attributes))
        }))
    }, Yi.removeObserver = function() {
        this.globalObserver.disconnect()
    }, Yi.initHtmlApi = function() {
        this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(Yi.handleMutations), this.globalObserver.observe(document, {
            childList: !0,
            subtree: !0
        })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements))
    }, Yi.handleMutations = function(t) {
        t.forEach((function(t) {
            Array.prototype.forEach.call(t.addedNodes, (function(t) {
                1 === t.nodeType && (t.hasAttribute("data-simplebar") ? !Yi.instances.has(t) && new Yi(t, Fi(t.attributes)) : Array.prototype.forEach.call(t.querySelectorAll("[data-simplebar]"), (function(t) {
                    "init" === t.getAttribute("data-simplebar") || Yi.instances.has(t) || new Yi(t, Fi(t.attributes))
                })))
            })), Array.prototype.forEach.call(t.removedNodes, (function(t) {
                1 === t.nodeType && (t.hasAttribute('[data-simplebar="init"]') ? Yi.instances.has(t) && Yi.instances.get(t).unMount() : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'), (function(t) {
                    Yi.instances.has(t) && Yi.instances.get(t).unMount()
                })))
            }))
        }))
    }, Yi.getOptions = Fi, Yt && Yi.initHtmlApi(), Yi
}));;
Handlebars.registerHelper('cutText', function(text, maxLength) {
    if (!text) return;
    let trimmedString = text.substr(0, maxLength);
    if (text.length > trimmedString.length) {
        trimmedString = text.substr(0, maxLength);
        let len = Math.min(trimmedString.length, trimmedString.lastIndexOf(' '));
        if (len == -1) {
            len = maxLength;
        }
        trimmedString = trimmedString.substr(0, len) + '...';
    }
    return trimmedString;
})
Handlebars.registerHelper('striptags', function(text) {
    if (text) return;
    return text.replace(/<[\/\w]+>/g, '');
});
const BookComment = function(commentId) {
    this.id = commentId
    this.deleteComment = function() {
        if (!confirm('Delete comment?')) {
            return
        }
        const request = new Request('/papi/admin/comment/' + this.id, {
            method: 'DELETE',
        })
        return new ZLibraryResponse(request).success(response => $('#comment-' + this.id).fadeOut().promise().then(element => element.remove())).fetch()
    }
};
const BookTemporary = function(book) {
    if (book) {
        this.id = book.id
        this.data = book
    }
    this.uploadCover = (file, success) => {
        if (!file) {
            return
        }
        const data = new FormData()
        data.append('cover', file)
        const spinner = new ZLibrarySpinner('iconCoverUpload')
        const request = new Request('/papi/book-temporary/' + this.id + '/cover', {
            method: 'POST',
            body: data
        })
        return new ZLibraryResponse(request).spinner(spinner).success(success).fetch()
    }
    this.save = (data, success) => {
        const spinner = new ZLibrarySpinner('btnSubmitBook')
        const request = new Request('/papi/book-temporary/' + this.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data,
        })
        return new ZLibraryResponse(request).spinner(spinner).success(success).fetch()
    }
    this.setFromMeta = (success) => {
        const request = new Request('/papi/book-temporary/' + this.id + '/set-from-meta')
        return new ZLibraryResponse(request).success(success).fetch()
    }
    this.confirm = (success) => {
        const spinner = new ZLibrarySpinner('iconConfirm_' + this.id).color('#8ecd51')
        const request = new Request('/papi/book-temporary/' + this.id + '/confirm')
        return new ZLibraryResponse(request).spinner(spinner).success(success).fetch()
    }
    this.delete = (success) => {
        const request = new Request('/papi/book-temporary/' + this.id, {
            method: 'DELETE',
        })
        return new ZLibraryResponse(request).success(success).fetch()
    }
    this.showModal = () => {
        this.modal = new ZLibraryModal({
            url: '/layer/_modals/book_temporary_edit_dialog?id=' + this.id,
            title: 'Edit book',
            width: 1100,
        }).show()
    }
    this.hideModal = () => {
        $('#zlibrary-modal').modal('hide')
    }
};
const BookRating = function(user) {
    if (typeof user == 'object' && user.id) {
        this.userId = user.id
    }
    this.downloadedBooks = window.localStorage ? localStorage.getItem('downloadedBooks') : null
    this.userScoresLoaded = false
    this.userScoreLoaded = {}
    this.ratedBookIdList = false
    this.ratedBookTermsHashList = false
    this.loadRatedBooksIsCalled = false
    this.tooltipEl = null
    this.initChoiceContainerEvents = () => {
        $(document).on('mouseover', '.book-rating-star', function() {
            if ($(this).closest('.stars-list').data('disabled')) {
                return
            }
            $(this).addClass('active-choice')
            $(this).prevAll('.book-rating-star').addClass('active-choice')
            $(this).nextAll('.book-rating-star').removeClass('active-choice')
            $(this).closest('.stars-list').find('.active').removeClass('active').addClass('active-none')
        })
        $(document).on('mouseleave', '.book-choice-rating .stars-list', function() {
            if ($(this).data('disabled')) {
                return
            }
            $(this).find('.book-rating-star').removeClass('active-choice')
            $(this).find('.active-none').removeClass('active-none').addClass('active')
        })
        $(document).on('mouseenter', '.book-choice-rating', function() {
            $(this).data('visible', 1)
        })
        $(document).on('mouseleave', '.book-choice-rating', function() {
            const $that = $(this)
            $that.data('visible', 0)
            setTimeout(function() {
                if (!$that.data('visible')) {
                    $that.hide()
                }
            }, 300)
        })
        $(document).on('mouseleave', '.book-rating-detail .book-rating, .book-rating-dstats .book-rating', function() {
            let $choiceEl = $(this).parent().find('.book-choice-rating')
            if (!$choiceEl.length) {
                $choiceEl = $('.book-choice-rating')
            }
            $choiceEl.data('visible', 0)
            setTimeout(function() {
                if (!$choiceEl.data('visible')) {
                    $choiceEl.hide()
                }
            }, 300)
        })
    }
    this.initTooltip = ($container) => {
        if (navigator.maxTouchPoints) {
            return
        }
        this.tooltipEl = $container
        $bookRatingTooltip = $('<div class="book-rating-tooltip" style="display: none"></div>')
        $('body').append($bookRatingTooltip)
        $container.tooltip({
            container: $bookRatingTooltip,
            placement: 'bottom',
            html: true,
            title: i18next.t('Book Rating / File Quality'),
        })
        $container.on('shown.bs.tooltip', function() {
            const $tooltip = $bookRatingTooltip.find('.tooltip')
            $('body').append($tooltip)
            $tooltip.css({
                'white-space': 'nowrap',
                'top': $(this).offset().top + 20 + 'px',
                'left': $container.find('.book-rating-quality-score').offset().left - $tooltip.width() / 2 - 6 + 'px',
            })
        })
    }
    this.clearUserScoreLoadedCache = () => {
        this.userScoreLoaded = {}
    }
    this.postScore = (data, spinnerEl, callback) => {
        const that = this
        const spinner = new ZLibrarySpinner(spinnerEl).color('#777')
        new ZLibraryResponse('/papi/book-rating/score', data).spinner(spinner).success(function(result) {
            that.addBookToRatedBooks(data.bookId, result.termsHash)
            callback(result)
        }).error(callback).fetch()
    }
    this.fixChoiceWindowPositionInBookDetails = () => {
        const $choiceEl = $('.book-choice-rating')
        const $qualitySpanEl = $('.book-rating-detail .book-rating .book-rating-quality-score')
        const spanOffsetLeft = parseInt($qualitySpanEl.offset().left)
        const choiceWindowWidth = parseInt($choiceEl.width())
        const posTop = parseInt($qualitySpanEl.offset().top) + 30
        const posLeft = spanOffsetLeft > 100 ? spanOffsetLeft - (parseInt(choiceWindowWidth / 2) + 4) : 0
        $choiceEl.css({
            'top': posTop + 'px',
            'left': posLeft + 'px'
        })
    }
    this.addBookToRatedBooks = (bookId, termsHash) => {
        if (!window.localStorage || isNaN((bookId = parseInt(bookId)))) {
            return
        }
        const ratedBookIdList = JSON.parse(localStorage.getItem('ratedBookIdList')) || []
        if ($.inArray(bookId, ratedBookIdList) === -1) {
            ratedBookIdList.push(bookId)
            this.ratedBookIdList = ratedBookIdList
            localStorage.setItem('ratedBookIdList', JSON.stringify(ratedBookIdList))
        }
        if (typeof termsHash !== 'string' || !termsHash.length) {
            return
        }
        const ratedBookTermsHashList = JSON.parse(localStorage.getItem('ratedBookTermsHashList')) || []
        if ($.inArray(termsHash, ratedBookTermsHashList) === -1) {
            ratedBookTermsHashList.push(termsHash)
            this.ratedBookTermsHashList = ratedBookTermsHashList
            localStorage.setItem('ratedBookTermsHashList', JSON.stringify(ratedBookTermsHashList))
        }
    }
    this.checkExistsScoreForBook = (bookId, termsHash, callback) => {
        if (!window.localStorage || isNaN((bookId = parseInt(bookId)))) {
            callback(false)
            return
        }
        if (localStorage.getItem('bookRatingUser') != this.userId) {
            this.clearRatedBooks()
        }
        if (!this.ratedBookIdList) {
            this.ratedBookIdList = JSON.parse(localStorage.getItem('ratedBookIdList'))
            this.ratedBookTermsHashList = JSON.parse(localStorage.getItem('ratedBookTermsHashList'))
            if (this.ratedBookIdList === null) {
                this.loadRatedBooks(function(idList, termsHashList) {
                    callback($.inArray(bookId, idList) !== -1 || (termsHash && $.inArray(termsHash, termsHashList) !== -1))
                })
                return
            }
        }
        callback($.inArray(bookId, this.ratedBookIdList) !== -1 || (termsHash && $.inArray(termsHash, this.ratedBookTermsHashList) !== -1))
    }
    this.loadRatedBooks = (callback) => {
        if (!window.localStorage || !this.userId || this.loadRatedBooksIsCalled) {
            return
        }
        this.loadRatedBooksIsCalled = true
        new ZLibraryResponse('/papi/book-rating/user-rated-books').success((json) => {
            localStorage.setItem('bookRatingUser', this.userId)
            if (json.idList) {
                localStorage.setItem('ratedBookIdList', JSON.stringify(json.idList))
            }
            if (typeof json.termsHashList == 'object') {
                let termsHashList = []
                for (i in json.termsHashList) {
                    termsHashList.push(json.termsHashList[i])
                    localStorage.setItem('ratedBookTermsHashList', JSON.stringify(termsHashList))
                }
            }
            if (typeof callback == 'function') {
                callback(json.idList || [], json.termsHashList || [])
            }
        }).fetch()
    }
    this.clearRatedBooks = () => {
        if (!window.localStorage) {
            return
        }
        this.ratedBookIdList = false
        localStorage.removeItem('ratedBookIdList')
        this.ratedBookTermsHashList = false
        localStorage.removeItem('ratedBookTermsHashList')
    }
    this.loadUserScores = (bookId) => {
        const that = this
        const $choiceEl = $('.book-choice-rating')
        const $choiceQualityStubEl = $('.book-choice-quality-stub')
        const $overlayEl = $choiceEl.find('.overlay')
        if ($choiceEl.data('visible')) {
            $choiceEl.data('visible', 0).hide()
            return
        }
        if (!$choiceEl.data('init')) {
            $('body').append($choiceEl)
            $choiceEl.data('init', '1')
        }
        this.fixChoiceWindowPositionInBookDetails()
        $choiceEl.data('visible', 1)
        let downloadedBooksNoChanges = true
        if (window.localStorage && that.downloadedBooks !== localStorage.getItem('downloadedBooks')) {
            downloadedBooksNoChanges = false
        }
        if (that.userScoresLoaded && downloadedBooksNoChanges) {
            $choiceEl.show()
            return
        }
        $choiceEl.show()
        $overlayEl.show()
        const spinner = new ZLibrarySpinner('bookChoiceRatingSpinner').color('#777').length(6).width(3).radius(7)
        new ZLibraryResponse('/papi/book-rating/' + bookId + '/user-scores').spinner(spinner).success((json) => {
            that.userScoresLoaded = true
            that.downloadedBooks = window.localStorage ? localStorage.getItem('downloadedBooks') : null
            $choiceEl.children('.book-format-quality-rating').remove()
            if (json['data']['interest']['score']) {
                $('.book-choice-interest-stars').data('score', json['data']['interest']['score']).find('.book-rating-star').slice(0, json['data']['interest']['score']).addClass('active')
            }
            const $choiceQualityTitleEl = $('.book-choice-rating > .book-choice-quality-title')
            if (json['data']['quality'].length) {
                $choiceQualityTitleEl.show()
                $choiceQualityStubEl.hide()
                let i = 0
                for (i in json['data']['quality']) {
                    let $template = $('.book-quality-rating-template').clone()
                    let row = json['data']['quality'][i]
                    $template.find('.book-choice-quality-stars').attr('data-id', row['bookId'])
                    $template.find('.format-info .download-date').text(row['downloadedDateDiff'])
                    $template.find('.format-info .extension').text(row['extension'])
                    $template.find('.format-info .size').text(row['filesizeString'])
                    if (row['score']) {
                        $template.find('.book-choice-quality-stars').attr('data-score', row['score']).find('.book-rating-star').slice(0, row['score']).addClass('active')
                    }
                    $choiceQualityTitleEl.after($template.html())
                }
            } else {
                $choiceQualityStubEl.show()
                $choiceQualityTitleEl.hide()
            }
            $overlayEl.hide()
        }).error((json) => {
            $choiceEl.hide()
            $overlayEl.hide()
        }).fetch()
    }
    this.loadUserScore = (bookId) => {
        const that = this
        const $choiceEl = $('.dstats-row[data-item_id=' + bookId + ']').find('.book-choice-rating')
        const $overlayEl = $choiceEl.find('.overlay')
        if ($choiceEl.data('visible')) {
            $choiceEl.data('visible', 0).hide()
            return
        }
        if (that.userScoreLoaded[bookId]) {
            $choiceEl.data('visible', 1).show()
            return
        }
        const posTop = 30
        const posRight = ($(window).width() - $choiceEl.parent().offset().left) > 140 ? -142 : -57
        $choiceEl.data('visible', 1).css({
            'top': posTop + 'px',
            'right': posRight + 'px'
        })
        $choiceEl.show()
        $overlayEl.show()
        const spinner = new ZLibrarySpinner('bookChoiceRatingSpinner' + bookId).color('#777').length(6).width(3).radius(7)
        new ZLibraryResponse('/papi/book-rating/' + bookId + '/user-score').spinner(spinner).success((json) => {
            that.userScoreLoaded[bookId] = true
            $overlayEl.hide()
            if (json['data']['interest']) {
                $choiceEl.find('.book-choice-interest-stars').data('score', json['data']['interest']).find('.book-rating-star').removeClass('active').slice(0, json['data']['interest']).addClass('active')
            }
            if (json['data']['quality']) {
                $choiceEl.find('.book-choice-quality-stars').data('score', json['data']['quality']).find('.book-rating-star').slice(0, json['data']['quality']).addClass('active')
            }
        }).error((json) => {
            new ZLibraryResponse().errorCallback(json)
            $overlayEl.hide()
            $choiceEl.hide()
        }).fetch()
    }
};
const Book = function(book) {
    if (book) {
        this.id = book.id
        this.data = book
    }
    this.uploadCover = (file, success) => {
        if (!file) {
            return
        }
        const data = new FormData()
        data.append('cover', file)
        const spinner = new ZLibrarySpinner('iconCoverUpload')
        const request = new Request('/papi/book/' + this.id + '/cover', {
            method: 'POST',
            body: data
        })
        return new ZLibraryResponse(request).spinner(spinner).success((response) => {
            $('#formBookCover').attr('src', response.book.cover + '?' + new Date().getTime())
        }).fetch()
    }
    this.delete = () => {
        if (!confirm('Delete book?')) {
            return
        }
        const request = new Request('/papi/admin/book/' + this.id, {
            method: 'DELETE',
        })
        const spinner = new ZLibrarySpinner('btnDeleteBook')
        return new ZLibraryResponse(request).spinner(spinner).success(response => window.location.reload()).fetch()
    }
    this.deleteCover = () => {
        if (!confirm('Delete cover?')) {
            return
        }
        const spinner = new ZLibrarySpinner('btnCoverRemove', 'button')
        const request = new Request('/papi/admin/book/' + this.id + '/cover', {
            method: 'DELETE',
        })
        return new ZLibraryResponse(request).spinner(spinner).success(response => $('#formBookCover').src = response.cover + '?' + new Date().getTime()).fetch()
    }
    this.suggestCover = (file) => {
        if (!file) {
            return
        }
        const data = new FormData()
        data.append('cover', file)
        const spinner = new ZLibrarySpinner('iconCoverUpload')
        const request = new Request('/papi/user/book/' + this.id + '/suggestion-cover', {
            method: 'POST',
            body: data
        })
        return new ZLibraryResponse(request).spinner(spinner).success(response => $('#formBookCover').attr('src', response.cover + '?' + new Date().getTime())).fetch()
    }
    this.suggestCorrection = (data) => {
        const spinner = new ZLibrarySpinner('btnSubmitSuggestion')
        const request = new Request('/papi/user/book/' + this.id + '/suggestion', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: data,
        })
        return new ZLibraryResponse(request).spinner(spinner).success(response => {
            ZLibraryNotify().info(i18next.t('Thank you for the suggestion!<br>After moderation it will appear on the site'))
            this.bookDetailsModalHide()
        }).fetch()
    }
    this.submitIssue = (data) => {
        const spinner = new ZLibrarySpinner('btnSubmitIssue')
        const request = new Request('/papi/book-issues/' + this.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: data,
        })
        return new ZLibraryResponse(request).spinner(spinner).success(response => {
            ZLibraryNotify().info(i18next.t('Thank you for reporting a problem!<br>We will check this book soon'))
            this.bookDetailsModalHide()
        }).fetch()
    }
    this.suggestModal = () => {
        new ZLibraryModal({
            url: '/layer/_modals/suggest_correction_dialog?id=' + this.id,
            title: i18next.t('Suggest corrections'),
            width: 1100,
        }).show()
    }
    this.reportModal = () => {
        new ZLibraryModal({
            url: '/layer/_modals/report_problem_dialog?id=' + this.id,
            title: i18next.t('Report a problem'),
            width: 600,
        }).show()
    }
    this.bookDetailsModalHide = () => {
        new ZLibraryModal().hide()
    }
    this.checkOtherFormats = () => {
        const spinner = new ZLibrarySpinner('bookOtherFormatsSpinnerContainer', 'button')
        const request = new Request('/papi/book/' + this.id + '/formats')
        return new ZLibraryResponse(request).disableNotify().spinner(spinner).success(response => {
            if (!(response.books && response.books.length)) {
                $('#bookOtherFormatsContainer').html('<span class="dropdown-menu-muted">No other formats found</span>')
                if ($('#btnCheckOtherFormats').data('convertation-available') == 0) {
                    $('#btnCheckOtherFormats').next('.dropdown-menu').remove()
                    $('#btnCheckOtherFormats').remove()
                }
                return
            }
            let html = ''
            $.each(response.books, function(index, book) {
                let lowQ = book.isLowQuality ? '<i class="low-quality-icon" data-placement="bottom" title="' + i18next.t('Users reported that this is a bad file') + '"></i>' : '';
                html += '<li>' +
                    '<a href="' + book.href + '" onclick="return _0x371adf(this)" data-book_id="' + book.id + '" class="addDownloadedBook">' +
                    '<b>' + book.extension + '</b>' + lowQ + ' <span class="pull-right">' + book.filesizeString + '</span>' +
                    '</a>' +
                    '</li>'
            })
            $('#btnCheckOtherFormats').removeClass('hidden')
            $('#bookOtherFormatsContainer').replaceWith(html)
            $('.low-quality-icon').tooltip();
        }).fetch()
    };
    this.initValidate = function(formID) {
        if (!!formID) {
            this.formID = formID;
        }
        return this;
    };
    this.validate = function() {
        this.$form = $('#' + this.formID);
        try {
            this.validateTitle();
            this.validateAuthor();
            this.validatePublisher();
            this.validateSeries();
            this.validatePage();
            this.validateYear();
            this.validateISBN();
            return true;
        } catch (e) {
            ZLibraryNotify().error(e);
            return false;
        }
    }
}
Book.prototype.formID = 'formBookEdit';
Book.prototype.paramsFormFields = {
    title: 255,
    author: 255,
    publisher: 100,
    series: 300,
    isbn: 120,
    minBookYear: 1800,
};
Book.prototype.validateTitle = function() {
    let title = $('input[name="title"]', this.$form).val().trim();
    if (!title) {
        throw i18next.t('Required parameters are missing.') + ' ' +
            i18next.t('Fill in the fields marked with an *.');
    }
    if (this.paramsFormFields.title < title.length) {
        throw i18next.t('Wrong book info ({{field}}).', {
                field: 'title'
            }) + ' ' +
            i18next.t('Reduce the number of characters to {{number}}!', {
                number: this.paramsFormFields.title
            });
    }
};
Book.prototype.validateAuthor = function() {
    let author = $('input[name="author"]', this.$form).val().trim();
    if (!author) {
        throw i18next.t('Required parameters are missing.') + ' ' +
            i18next.t('Fill in the fields marked with an *.');
    }
    if (this.paramsFormFields.author < author.length) {
        throw i18next.t('Wrong book info ({{field}}).', {
                field: 'author'
            }) + ' ' +
            i18next.t('Reduce the number of characters to {{number}}!', {
                number: this.paramsFormFields.author
            });
    }
};
Book.prototype.validatePublisher = function() {
    let publisher = $('input[name="publisher"]', this.$form).val().trim();
    if (this.paramsFormFields.publisher < publisher.length) {
        throw i18next.t('Wrong book info ({{field}}).', {
                field: 'publisher'
            }) + ' ' +
            i18next.t('Reduce the number of characters to {{number}}!', {
                number: this.paramsFormFields.publisher
            });
    }
};
Book.prototype.validateSeries = function() {
    let series = $('input[name="series"]', this.$form).val().trim();
    if (this.paramsFormFields.series < series.length) {
        throw i18next.t('Wrong book info ({{field}}).', {
                field: 'series'
            }) + ' ' +
            i18next.t('Reduce the number of characters to {{number}}!', {
                number: this.paramsFormFields.series
            });
    }
};
Book.prototype.validatePage = function() {
    let pages = $('input[name="pages"]', this.$form).val();
    if (pages.length && !this.isInteger(pages)) {
        throw i18next.t('Wrong book info ({{field}}).', {
                field: 'pages'
            }) + ' ' +
            i18next.t('Only positive integers!');
    }
};
Book.prototype.validateYear = function() {
    const nowDate = new Date();
    let year = $('input[name="year"]', this.$form).val();
    if (year.length && (!this.isInteger(year) || +year < this.paramsFormFields.minBookYear || nowDate.getFullYear() < +year)) {
        throw i18next.t('Wrong book info ({{field}}).', {
                field: 'year'
            }) + ' ' +
            i18next.t('Enter the year in the range {{from}}-{{to}}.', {
                from: this.paramsFormFields.minBookYear,
                to: nowDate.getFullYear()
            }) + ' ' +
            i18next.t('Only positive integers!');
    }
};
Book.prototype.validateISBN = function() {
    const $isbns = $('input[name="isbn[]"]', this.$form);
    let isbn = 0;
    $isbns.each((idx, item) => {
        isbn += $(item).val().length;
    });
    if (this.paramsFormFields.isbn < isbn) {
        throw i18next.t('Wrong book info ({{field}}).', {
                field: 'isbn'
            }) + ' ' +
            i18next.t('Reduce the number of isbn!');
    }
};
Book.prototype.isInteger = function(str) {
    const regex = RegExp(/^[1-9]\d*$/);
    return regex.test(str);
};;
const TagsInput = function($el, user, bookId, availableTags) {
    const tags = this
    this.user = user
    this.bookId = bookId
    this.$el = $el
    this.beforeItemAdd = function(event, options) {
        tags.cancelDestroy = true
        const $btnSaveBook = $('#btnSaveBook')
        const $btnUnsaveBook = $('#btnUnsaveBook')
        const $bookNoSaved = !$btnSaveBook.hasClass('hidden')
        const spinner = new ZLibrarySpinner($btnSaveBook).color('#666666')
        const tagName = event.item.toString()
        const $tagsContainerInput = $(event.target).closest('.tags-container-input')
        if (!isValidInputString(tagName)) {
            tags.$el.tagsinput('remove', tagName)
            return false
        }
        const request = new Request('/papi/user/book/' + tags.bookId + '/tag', {
            method: 'PUT',
            body: tagName,
        })
        if ($bookNoSaved) {
            spinner.start()
            $btnSaveBook.prop('disabled', true)
        }
        new ZLibraryResponse(request).success(function() {
            spinner.stop()
            $btnSaveBook.prop('disabled', false)
            if ($bookNoSaved) {
                $btnSaveBook.addClass('hidden')
                $btnUnsaveBook.removeClass('hidden')
            }
            CurrentUser.addBookTagsInHtml(tagName)
        }).error(json => {
            spinner.stop()
            $btnSaveBook.prop('disabled', false)
            ZLibraryNotify({
                delay: 8000
            }).error(json.error ? json.error : i18next.t('Something went wrong'))
            tags.$el.tagsinput('remove', tagName, {
                preventPost: true
            })
        }).fetch()
        setTimeout(function() {
            $tagsContainerInput.find('.bootstrap-tagsinput input').val('')
        }, 1)
    }
    this.itemAdded = function(event) {
        const tagName = event.item.toString()
        const $tagsContainerInput = $(event.target).closest('.tags-container-input')
        const $lastTag = $tagsContainerInput.find('.bootstrap-tagsinput .tag:last')
        if (!isValidInputString(tagName)) {
            $lastTag.remove()
            $tagsContainerInput.find('.bootstrap-tagsinput input').val('').focus()
            new ZLibraryNotify().error(i18next.t('Invalid tag name'))
            return false
        }
        $lastTag.html(tagName + '<span data-role="remove"></span>')
    }
    this.beforeItemRemove = function(event, options) {
        tags.cancelDestroy = true
        const request = new Request('/papi/user/book/' + tags.bookId + '/tag', {
            method: 'DELETE',
            body: event.item,
        })
        new ZLibraryResponse(request).success(function() {
            CurrentUser.removeBookTagsInHtml(event.item)
        }).fetch()
    }
    this.clear = function() {
        tags.$el.tagsinput('removeAll')
    }
    tags.$el.tagsinput({
        typeahead: {
            source: availableTags
        },
        maxChars: 30,
    })
    tags.$el.on('beforeItemAdd', this.beforeItemAdd)
    tags.$el.on('beforeItemRemove', this.beforeItemRemove)
    tags.$el.on('itemAdded', this.itemAdded)
    tags.$el.closest('.tags-container-input').find('.bootstrap-tagsinput input').trigger('keydown')
    $('.bootstrap-tagsinput input').on('input', function() {
        const length = $(this).val().length
        if (length > 1 && length <= 5) {
            $(this).css('width', (length * 18) + 'px')
        } else if (length > 5) {
            $(this).css('width', (length * 12) + 'px')
        } else {
            $(this).css('width', 'auto')
        }
    })
    $('.bootstrap-tagsinput input').on('focusout', function() {
        const $that = $(this)
        const $input = tags.$el.closest('.tags-container-input').find('.bootstrap-tagsinput input')
        if (!$input.length) {
            return
        }
        if ($input.val().length) {
            $input.trigger('keypress').trigger('focusout')
            return
        }
        tags.cancelDestroy = false
        setTimeout(function() {
            if (tags.cancelDestroy) {
                return false
            }
            const $tagsContainer = $that.closest('.bookRow').find('.tags-container')
            const $tagsContainerInput = $that.closest('.tags-container-input')
            $tagsContainer.find('span.label-info').remove()
            $tagsContainer.prepend($tagsContainerInput.find('span.tag'))
            $tagsContainerInput.addClass('hidden')
            $tagsContainer.removeClass('hidden')
            tags.$el.off('beforeItemAdd', this.beforeItemAdd)
            tags.$el.off('beforeItemRemove', this.beforeItemRemove)
            tags.$el.off('itemAdded', this.itemAdded)
            tags.$el.tagsinput('destroy')
            $('#savedBooksTagList').load(window.location.href + ' #savedBooksTagList')
        }, 300)
    })
};
const User = function(user) {
    if (user) {
        this.id = user.id
    }

    function combineDownloadedBooks(books) {
        let indexed = {
            byId: {},
            byIsbn: {}
        };
        $.each(books, function(index, item) {
            indexed.byId[item.id] = item.date
            if (item.isbn) {
                indexed.byIsbn[item.isbn] = item.date
            }
        })
        return indexed
    }
    this.saveReadLater = function(bookId, success, $spinnerContainer = '#btnSaveBook', error) {
        new UserBookmarks(this.id).addBookToSavedBooks({
            bookId: bookId,
            spinnerContainer: $spinnerContainer,
            success: success,
            error: error
        })
    }
    this.deleteReadLater = function(bookId, success, $spinnerContainer = '#btnUnsaveBook', error) {
        new UserBookmarks(this.id).deleteBookFromSavedBooks({
            bookId: bookId,
            spinnerContainer: $spinnerContainer,
            success: success,
            error: error
        })
    }
    this.voteBook = function($btn) {
        const bookId = $btn.data('book_id')
        const selectedScore = $btn.data('score')
        const $container = $btn.parent()
        const request = new Request('/papi/user/book/' + bookId + '/vote', {
            method: 'PUT',
            body: selectedScore,
        })
        return new ZLibraryReunsponse(request).success(response => {
            const className = response.score >= 0 ? 'votePositiveValue' : 'voteNegativeValue'
            const scoreText = response.score >= 0 ? '+' + response.score : response.score
            $container.find('.btnVote').animate({
                opacity: 0
            }).promise().then(element => element.addClass('invinsible'))
            $container.find('.voteValue').fadeOut().promise().then(element => element.html(scoreText).addClass(className).css('width', 'auto')).then(element => element.fadeIn())
        }).fetch()
    }
    this.fetchDownloadedBooks = function() {
        if (!window.localStorage) {
            return
        }
        const request = new Request('/papi/user/get-downloads')
        return new ZLibraryResponse(request).disableNotify().fetch().then(response => {
            let downloads = response instanceof Object && response.downloads instanceof Object && response.downloads instanceof Array ? response.downloads : {};
            localStorage.setItem('downloadedBooks', JSON.stringify(downloads))
            localStorage.setItem('downloadedBooksUser', this.id)
            localStorage.setItem('downloadedBooksUpdated', new Date().getDate() + 1)
            return combineDownloadedBooks(downloads)
        })
    }
    this.getDownloadedBooks = function() {
        if (!window.localStorage) {
            return
        }
        const downloadedBooks = this.getDownloadedBooksFromStorage()
        const downloadedBooksUser = localStorage.getItem('downloadedBooksUser')
        const downloadedBooksUpdated = localStorage.getItem('downloadedBooksUpdated')
        if (downloadedBooks && downloadedBooksUser == this.id && downloadedBooksUpdated == new Date().getDate() + 1) {
            return new Promise(function(resolve, reject) {
                resolve(combineDownloadedBooks(downloadedBooks))
            })
        }
        return this.fetchDownloadedBooks()
    }
    this.addDownloadedBook = function(bookId) {
        if (!this.id || !window.localStorage) {
            return
        }
        const downloadedBooks = this.getDownloadedBooksFromStorage()
        if (downloadedBooks) {
            downloadedBooks.push({
                id: bookId,
            })
            localStorage.setItem('downloadedBooks', JSON.stringify(downloadedBooks))
            $('.checkBookDownloaded[data-book_id="' + bookId + '"]').append('<span class="mark">' + i18next.t('Downloaded') + '</span>').addClass('bookDownloaded')
        }
    }
    this.deleteDownloadedBook = function(bookId) {
        if (!window.localStorage) {
            return
        }
        const downloadedBooks = this.getDownloadedBooksFromStorage()
        $.each(downloadedBooks, function(index, item) {
            if (item && item.id == bookId) {
                downloadedBooks.splice(index, 1);
                localStorage.setItem('downloadedBooks', JSON.stringify(downloadedBooks))
                $('.checkBookDownloaded[data-book_id="' + bookId + '"]').removeClass('bookDownloaded').find('.mark').remove()
            }
        })
    }
    this.getDownloadedBooksFromStorage = function() {
        const itemStorage = localStorage.getItem('downloadedBooks');
        let downloadedBooks = null;
        try {
            downloadedBooks = !!itemStorage ? JSON.parse(itemStorage) : [];
        } catch (err) {
            console.error('Invalid format downloadedBooks. Value: ' + itemStorage);
            return false;
        }
        if (!$.isArray(downloadedBooks)) {
            downloadedBooks = []
        }
        return downloadedBooks
    }
    this.clearDownloadedBooks = function(bookId) {
        if (!window.localStorage) {
            return
        }
        localStorage.removeItem('downloadedBooks')
        localStorage.removeItem('downloadedBooksUser')
        localStorage.removeItem('downloadedBooksUpdated')
    }
    this.showAuthPopup = function(action, actionMessage) {
        if (typeof action != 'string' || !action.length) {
            new ZLibraryNotify().error('Undefined action')
            return
        }
        const modal = new ZLibraryModal({
            url: '/layer/_modals/auth_modal',
            width: 400,
            container: 'zlibrary-modal-auth',
            afterRender: function() {
                const $authModalContent = $('#auth_modal_content')
                const $actionContent = $authModalContent.find('#auth_modal_' + action)
                if (typeof actionMessage == 'string') {
                    $actionContent.find('.action-msg').text(actionMessage)
                }
                $actionContent.show()
                $authModalContent.find('.close-btn').on('click', modal.hide)
                $authModalContent.find('form').each(function() {
                    new AuthForm(this).useXhr(true).setModal(modal);
                });
            }
        }).show()
    }
    this.isAuth = function() {
        return this.id ? true : false
    }
    this.addBookTagsInHtml = function(tag) {
        if (typeof tag == 'object') {
            for (i in tags) {
                this.addBookTagsInHtml(tags[i])
            }
            return
        }
        $('.cardBooks .property_user_tags, .cardArticles .property_user_tags').show().find('.property_value').append('<span class="tag label label-info"><a href="/users/saved_books.php?tag=' + tag + '" style="color:#fff;text-decoration:none;font-size:9pt;" target="_blank">' + tag + '</a></span>')
    }
    this.removeBookTagsInHtml = function(tag) {
        $('.property_user_tags .property_value .tag').each(function() {
            if ($(this).text() == tag) {
                $(this).remove()
                if (!$('.property_user_tags .property_value .tag').length) {
                    $('.property_user_tags').hide()
                }
                return false
            }
        })
    }
    this.removeAllBookTagsInHtml = function() {
        $('.property_user_tags .property_value .tag').remove()
        $('.property_user_tags').hide()
    }
    this.updateFavoriteReadlists = function(method, readlistId, success, error) {
        let action = 'add'
        if (method == 'DELETE') {
            action = 'remove'
        }
        const request = new Request('/papi/booklist/' + readlistId + '/favorite/' + action, {
            method: method,
        })
        return new ZLibraryResponse(request).success(function(result) {
            if (typeof success == 'function') {
                success(result)
            }
        }).error(function(result) {
            if (typeof error === 'function') {
                error(result)
            }
        }).fetch()
    }
};
const UserBookmarks = function(userId) {
    const _that = this
    const _userId = parseInt(userId) || null
    let _page = null
    let _containerSelector = null
    let _booklistsSimpleBar = null
    const _reloadBookmarksInterval = 3600
    let _isInit = false
    let _allTagListForSavedBooks = []
    let _suggestionsTagListForSavedBooks = []
    const $booklistsContainerTemplate = $(`
        <div class="booklists-container">
            <div class="arrow"></div>
            <div class="booklists-loading-content"></div>
            <div class="booklists-content">
                <div class="booklists"></div>
                <div class="new-booklist-title">` + i18next.t('Add new booklist') + `</div>
                <div class="new-booklist-form">
                    <input placeholder="` + i18next.t('Enter the booklist name') + `" class="new-booklist-name">
                    <button disabled class="btn-add-new-booklist"><i class="icon icon-pluse-gray"></i><i class="icon icon-plus-white"></i>` + i18next.t('Add to booklist') + `</button>
                </div>
            </div>
        </div>`)
    const $saveForLaterContainerTemplate = $(`
        <div class="save-for-later-container">
            <div class="arrow"></div>
            <div class="save-for-later-loading-content"></div>
            <div class="save-for-later-content">
                <div class="save-for-later-form">
                    <button class="save-for-later-btn"><i class="icon icon-plus-white"></i>` + i18next.t('Add to Favorites') + `</button>
                    <button class="remove-from-favorites-btn"><i class="icon icon-trash-red"></i>` + i18next.t('Remove from Favorites') + `</button>
                </div>
                <div class="save-for-later-title">` + i18next.t('Tags') + `</div>
                <div class="save-for-later-form">
                    <ul class="tag-list">
                        <button class="new-tag-btn"><i class="icon icon-pluse-gray"></i>` + i18next.t('New Tag') + `</button>
                    </ul>
                </div>
            </div>
        </div>`)
    const makeBooklistsRow = function(booklistId, title, readlistBookId) {
        return '<div data-booklist_id="' + booklistId + '" data-readlist_book_id="' + readlistBookId + '" class="booklists-row"><i class="btn-add-to-booklist icon-bookmark ' + (readlistBookId ? 'icon-blue active' : '') + '"></i>' + title + '</div>'
    }
    const toggleIconOnPage = function(bookId, iconClass, isActive) {
        const $icon = $(_containerSelector + ' .bookmarks[data-book_id="' + bookId + '"] .' + iconClass)
        isActive ? $icon.addClass('icon-blue active') : $icon.removeClass('icon-blue active')
    }
    const toggleBooklistIcon = function(booklistId, isActive) {
        const $icon = $('.booklists-container .booklists-row[data-booklist_id="' + booklistId + '"] i')
        isActive ? $icon.addClass('icon-blue active') : $icon.removeClass('icon-blue active')
    }
    const onAddedBookToBooklist = function(bookId, booklistId) {
        toggleIconOnPage(bookId, 'icon-bookmark', true)
        toggleBooklistIcon(booklistId, true)
    }
    const onDeletedBookFromBooklist = function(bookId, booklistId) {
        toggleBooklistIcon(booklistId, false)
        if (!$('.booklists-container .booklists-row .icon-bookmark.active').length) {
            toggleIconOnPage(bookId, 'icon-bookmark', false)
        }
    }
    const onAddedBookToSavedBooks = function(bookId) {
        toggleIconOnPage(bookId, 'icon-heart', true)
    }
    const onDeletedBookFromSavedBooks = function(bookId) {
        toggleIconOnPage(bookId, 'icon-heart', false)
    }
    const loadBookmarks = async function() {
        const idb = new ZLibraryIDB()
        const zlibraryLocalStorage = new ZLibraryLocalStorage()
        let usingIDB = await idb.isSupported()
        let userSavedBooksTable = null
        let userBooksInBooklistsTable = null
        if (usingIDB) {
            if (false == await idb.isValueExpired('userBookmarks', _reloadBookmarksInterval)) {
                return
            }
            userSavedBooksTable = await idb.table('userSavedBooks')
            userBooksInBooklistsTable = await idb.table('userBooksInBooklists')
            if (!userSavedBooksTable || !userBooksInBooklistsTable) {
                usingIDB = false
            } else {
                await userSavedBooksTable.where({
                    userId: _userId
                }).delete()
                await userBooksInBooklistsTable.where({
                    userId: _userId
                }).delete()
            }
        } else if (zlibraryLocalStorage.isSupported()) {
            if (!zlibraryLocalStorage.isValueExpired('userBookmarks', _reloadBookmarksInterval)) {
                return
            }
        } else {
            return
        }
        await new ZLibraryResponse('/papi/user/book/readlater/book-id-list').success(function(result) {
            if (!result.list.length) {
                return
            }
            const data = []
            result.list.forEach(function(bookId) {
                if (usingIDB) {
                    data.push({
                        userId: _userId,
                        bookId: parseInt(bookId),
                    })
                } else {
                    data.push(parseInt(bookId))
                }
            })
            if (usingIDB) {
                userSavedBooksTable.bulkPut(data)
            } else {
                zlibraryLocalStorage.putByCurrentUser('userSavedBooks', data)
            }
        }).fetch()
        await new ZLibraryResponse('/papi/booklist/book-id-list').success(function(result) {
            if (!result.list.length) {
                return
            }
            const data = []
            result.list.forEach(function(row) {
                if (usingIDB) {
                    data.push({
                        userId: _userId,
                        bookId: parseInt(row['bookId']),
                        booklistId: parseInt(row['booklistId'])
                    })
                } else {
                    data.push(parseInt(row['bookId']))
                }
            })
            if (usingIDB) {
                userBooksInBooklistsTable.bulkPut(data)
            } else {
                zlibraryLocalStorage.putByCurrentUser('userBooksInBooklists', data)
            }
        }).fetch()
        if (usingIDB) {
            idb.putValue('userBookmarks')
        } else {
            const now = Math.floor(Date.now() / 1000)
            zlibraryLocalStorage.putByCurrentUser('userBookmarks', now)
        }
    }
    const findUserSavedBooks = async function(bookIdList) {
        const idb = new ZLibraryIDB()
        if (await idb.isSupported()) {
            const userSavedBooksTable = await idb.table('userSavedBooks')
            if (!userSavedBooksTable) {
                return false
            }
            let userSavedBooks = []
            await userSavedBooksTable.where('bookId').anyOf(bookIdList).and(function(row) {
                return row.userId == _userId
            }).each(function(row) {
                userSavedBooks.push(row.bookId)
            })
            return userSavedBooks
        }
        if (new ZLibraryLocalStorage().isSupported()) {
            const list = new ZLibraryLocalStorage().getByCurrentUser('userSavedBooks')
            return list ? list : false
        }
        return false
    }
    const findUserBooklists = async function(bookIdList) {
        const idb = new ZLibraryIDB()
        if (await idb.isSupported()) {
            const userBooksInBooklistsTable = await idb.table('userBooksInBooklists')
            if (!userBooksInBooklistsTable) {
                return false
            }
            let userBooksInBooklists = []
            await userBooksInBooklistsTable.where('bookId').anyOf(bookIdList).and(function(row) {
                return row.userId == _userId
            }).each(function(row) {
                userBooksInBooklists.push(row.bookId)
            })
            return userBooksInBooklists
        }
        if (new ZLibraryLocalStorage().isSupported()) {
            const list = new ZLibraryLocalStorage().getByCurrentUser('userBooksInBooklists')
            return list ? list : false
        }
        return false
    }
    const addBookToSavedBooksStorage = async function(bookId) {
        const idb = new ZLibraryIDB()
        const zLocalStorage = new ZLibraryLocalStorage()
        if (await idb.isSupported()) {
            const data = {
                userId: _userId,
                bookId: parseInt(bookId)
            }
            const userSavedBooksTable = await idb.table('userSavedBooks')
            if (userSavedBooksTable) {
                if (await userSavedBooksTable.where(data).count() == 0) {
                    userSavedBooksTable.put(data)
                }
            }
        } else if (zLocalStorage.isSupported()) {
            let list = zLocalStorage.getByCurrentUser('userSavedBooks')
            if (!list) {
                list = []
            }
            list.push(parseInt(bookId))
            zLocalStorage.putByCurrentUser('userSavedBooks', list)
        }
    }
    const deleteBookFromSavedBooksStorage = async function(bookId) {
        const idb = new ZLibraryIDB()
        const zLocalStorage = new ZLibraryLocalStorage()
        if (await idb.isSupported()) {
            const userSavedBooksTable = await idb.table('userSavedBooks')
            if (userSavedBooksTable) {
                userSavedBooksTable.where({
                    userId: _userId,
                    bookId: parseInt(bookId)
                }).delete()
            }
        } else if (zLocalStorage.isSupported()) {
            let list = zLocalStorage.getByCurrentUser('userSavedBooks')
            if (list) {
                let index = null
                let isUpdated = false
                while ((index = list.indexOf(parseInt(bookId))) !== -1) {
                    delete list[index]
                    isUpdated = true
                }
                if (isUpdated) {
                    list = list.filter(function() {
                        return true
                    })
                    zLocalStorage.putByCurrentUser('userSavedBooks', list)
                }
            }
        }
    }
    const addBookToBooklistsStorage = async function(booklistId, bookId) {
        const idb = new ZLibraryIDB()
        const zLocalStorage = new ZLibraryLocalStorage()
        if (await idb.isSupported()) {
            const userBooksInBooklistsTable = await idb.table('userBooksInBooklists')
            if (booklistId && userBooksInBooklistsTable) {
                const data = {
                    userId: _userId,
                    bookId: parseInt(bookId),
                    booklistId: parseInt(booklistId)
                }
                if (await userBooksInBooklistsTable.where(data).count() == 0) {
                    await userBooksInBooklistsTable.put(data)
                }
            }
        } else if (zLocalStorage.isSupported()) {
            let list = zLocalStorage.getByCurrentUser('userBooksInBooklists')
            if (!list) {
                list = []
            }
            list.push(parseInt(bookId))
            zLocalStorage.putByCurrentUser('userBooksInBooklists', list)
        }
    }
    const deleteBookFromBooklistsStorage = async function(booklistId, bookId) {
        const idb = new ZLibraryIDB()
        const zLocalStorage = new ZLibraryLocalStorage()
        if (await idb.isSupported()) {
            const userBooksInBooklistsTable = await idb.table('userBooksInBooklists')
            if (userBooksInBooklistsTable) {
                await userBooksInBooklistsTable.where({
                    userId: _userId,
                    bookId: parseInt(bookId),
                    booklistId: parseInt(booklistId)
                }).delete()
            }
        } else if (zLocalStorage.isSupported()) {
            let list = zLocalStorage.getByCurrentUser('userBooksInBooklists')
            if (list) {
                const index = list.indexOf(parseInt(bookId))
                if (index !== -1) {
                    delete list[index]
                    list = list.filter(function() {
                        return true
                    })
                    zLocalStorage.putByCurrentUser('userBooksInBooklists', list)
                }
            }
        }
    }
    const deleteBooklistFromBooklistsStorage = async function(booklistId) {
        const idb = new ZLibraryIDB()
        const zLocalStorage = new ZLibraryLocalStorage()
        if (idb.isSupported()) {
            const userBooksInBooklistsTable = await idb.table('userBooksInBooklists')
            if (userBooksInBooklistsTable) {
                await userBooksInBooklistsTable.where({
                    userId: _userId,
                    booklistId: parseInt(booklistId)
                }).delete()
            }
        } else if (zLocalStorage.isSupported()) {
            zLocalStorage.putByCurrentUser('userBookmarks', 0)
        }
    }
    const fixContainerPosition = function($btn, $container) {
        const btnOffsetLeft = $btn.offset().left
        const btnOffsetRight = window.innerWidth - (btnOffsetLeft + $btn.width())
        const btnHalfWidth = $btn.width() / 2
        const containerHalfWidth = $container.width() / 2
        const $arrow = $container.find('.arrow')
        let containerOffsetLeft = 10
        if (btnOffsetLeft > containerHalfWidth && btnOffsetRight > containerHalfWidth) {
            containerOffsetLeft = (btnOffsetLeft - containerHalfWidth) + btnHalfWidth
        } else if (btnOffsetLeft > (containerHalfWidth + 10) && btnOffsetRight < (containerHalfWidth + 10)) {
            containerOffsetLeft = btnOffsetLeft - containerHalfWidth - (containerHalfWidth - btnOffsetRight)
        }
        containerOffsetLeft = containerOffsetLeft > 10 ? containerOffsetLeft : 10
        $arrow.css('left', ((btnOffsetLeft - containerOffsetLeft - 1) + btnHalfWidth) - $arrow.width() / 2 + 'px')
        $container.css({
            top: $btn.offset().top + $btn.height() + 10 + 'px',
            left: containerOffsetLeft + 'px',
        })
    }
    const initEventsForBooklists = function() {
        $(window).resize(function() {
            const $container = $('.booklists-container')
            if ($container.length && $container.is(':visible')) {
                const book_id = $container.data('book_id')
                const $btn = $(_containerSelector + ' .bookmarks[data-book_id=' + book_id + '] .btn-booklists')
                fixContainerPosition($btn, $container)
            }
        })
        $(document).on('click', _containerSelector + ' .bookmarks .btn-booklists', function() {
            const $that = $(this)
            const $bookmarks = $that.closest('.bookmarks')
            const bookId = $bookmarks.data('book_id')
            const $booklistsContainerOld = $('.booklists-container')
            $bookmarks.find('i').tooltip('hide')
            if ($booklistsContainerOld.length) {
                if (bookId == $booklistsContainerOld.data('book_id')) {
                    if ($booklistsContainerOld.is(':visible')) {
                        $booklistsContainerOld.hide()
                        $(document).trigger('bookmarks.closedBooklistsPopup')
                    } else {
                        fixContainerPosition($that, $booklistsContainerOld)
                        $booklistsContainerOld.show()
                        $(document).trigger('bookmarks.openedBooklistsPopup')
                    }
                    return
                } else {
                    $booklistsContainerOld.remove()
                    $(document).trigger('bookmarks.closedBooklistsPopup')
                }
            }
            $booklistsContainer = $booklistsContainerTemplate.clone()
            $booklistsContainer.data('book_id', bookId)
            const $loadingContent = $booklistsContainer.find('.booklists-loading-content')
            const $booklistsContent = $booklistsContainer.find('.booklists-content')
            const $booklists = $booklistsContent.find('.booklists')
            new ZLibrarySpinner($loadingContent).color('#676767').start()
            $('body').append($booklistsContainer)
            fixContainerPosition($that, $booklistsContainer)
            $(document).trigger('bookmarks.openedBooklistsPopup')
            new ZLibraryResponse('/papi/booklist/current-user/?bookId=' + bookId).success(function(result) {
                if (result['list'].length) {
                    for (let i in result['list']) {
                        $booklists.append(makeBooklistsRow(result['list'][i]['id'], result['list'][i]['title'], result['list'][i]['readlistBookId']))
                    }
                } else {
                    $booklists.hide()
                }
                $loadingContent.hide()
                $booklistsContent.show()
                _booklistsSimpleBar = new SimpleBar($booklists[0], {
                    autoHide: false
                })
            }).fetch()
        })
        $(document).on('click', '.booklists-container .booklists-row', function() {
            const $that = $(this)
            const $icon = $that.find('.btn-add-to-booklist')
            if ($icon.hasClass('disabled')) {
                return
            }
            $icon.addClass('disabled')
            const bookId = $icon.closest('.booklists-container').data('book_id')
            const booklistId = $that.data('booklist_id')
            const readlistBookId = $that.data('readlist_book_id')
            if ($icon.hasClass('active')) {
                onDeletedBookFromBooklist(bookId, booklistId)
                _that.deleteBookFromBooklist({
                    bookId: bookId,
                    booklistId: booklistId,
                    readlistBookId: readlistBookId,
                    successCallback: function() {
                        $icon.removeClass('disabled')
                    },
                    errorCallback: function() {
                        $icon.removeClass('disabled')
                        onAddedBookToBooklist(bookId, booklistId)
                    }
                })
            } else {
                onAddedBookToBooklist(bookId, booklistId)
                _that.addBookToBooklist({
                    bookId: bookId,
                    booklistId: booklistId,
                    successCallback: function(result) {
                        $icon.removeClass('disabled')
                        const readlistBookId = result.book ? result.book.id : 0
                        $that.data('readlist_book_id', readlistBookId)
                    },
                    errorCallback: function() {
                        $icon.removeClass('disabled')
                        onDeletedBookFromBooklist(bookId, booklistId)
                    }
                })
            }
        })
        $(document).on('keyup change', '.booklists-content .new-booklist-name', function() {
            const $btnAddNewBooklist = $('.booklists-content .btn-add-new-booklist')
            $btnAddNewBooklist.prop('disabled', !$(this).val().trim().length)
        })
        $(document).on('click', '.booklists-content .btn-add-new-booklist', function() {
            const $that = $(this)
            const $nameInput = $('.booklists-content .new-booklist-name')
            const name = $nameInput.val().trim()
            if ($that.is(':disabled') || !name) {
                return
            }
            $that.prop('disabled', true).find('.icon').addClass('i-hidden')
            const spinner = new ZLibrarySpinner($that).color('#D9D9D9').start()
            const bookId = $that.closest('.booklists-container').data('book_id')
            _that.addBookToBooklist({
                booklistTitle: name,
                bookId: bookId,
                successCallback: function(result) {
                    $that.prop('disabled', false).find('.icon').removeClass('i-hidden')
                    spinner.stop()
                    $nameInput.val('').trigger('change')
                    const readlist = result.readlist || {}
                    const readlistBook = result.readlistBook || {}
                    if (readlist.id && readlistBook.id) {
                        $('.booklists-content .booklists').show().find('.simplebar-content').append(makeBooklistsRow(readlist.id, readlist.title, readlistBook.id))
                        _booklistsSimpleBar.recalculate()
                        $('.booklists-content .booklists .simplebar-content-wrapper').animate({
                            scrollTop: $('.booklists-content .booklists .simplebar-content .booklists-row').last().position().top
                        })
                        onAddedBookToBooklist(bookId, readlist.id)
                    }
                },
                errorCallback: function(result) {
                    spinner.stop()
                    $that.prop('disabled', false).find('.icon').removeClass('i-hidden')
                    new ZLibraryNotify().error(result.error)
                }
            })
        })
    }
    const initEventsForSavedBooks = function() {
        const newTagInputSelector = '.save-for-later-content .tag-list input';
        const newTagInputProcess = function($input, action) {
            const tagName = $input.val()
            const $newTagBtn = $('.save-for-later-content .tag-list .new-tag-btn')
            switch (action) {
                case 'cancel':
                    $input.val('').hide()
                    toggleTagsSuggestions($input)
                    break
                case 'save':
                    if (!isValidInputString(tagName)) {
                        new ZLibraryNotify().error(i18next.t('Invalid tag name'))
                        $input.focus()
                        break
                    }
                    const $newTag = $('<li style="display: none">' + tagName + '<i class="icon icon-cross-black"</li>')
                    $newTagBtn.before($newTag).fadeIn()
                    $newTag.fadeIn()
                    $input.val('').hide()
                    updateAllTagList(tagName, 'add')
                    updateSuggestionsTagList(tagName, 'delete')
                    toggleTagsSuggestions($input)
                    $('.save-for-later-content .save-for-later-btn').trigger('click', {
                        editTag: 1
                    })
                    break
                case 'input':
                    const strLen = parseInt(tagName.length)
                    let inputWidth = 30
                    if (strLen > 2) {
                        if (strLen < 15) {
                            inputWidth = strLen * 10;
                        } else {
                            inputWidth = 150
                        }
                    }
                    $input.css('width', inputWidth + 'px')
                    toggleTagsSuggestions($input)
                    break
            }
        }
        const isTagExisted = function(tagName) {
            return _allTagListForSavedBooks.indexOf(tagName.toLowerCase()) !== -1;
        }
        const updateAllTagList = function(tagName, action) {
            tagName = tagName.toLowerCase()
            switch (action) {
                case 'add':
                    if (_allTagListForSavedBooks.indexOf(tagName) === -1) {
                        _allTagListForSavedBooks.push(tagName)
                    }
                    break
                case 'delete':
                    const i = _allTagListForSavedBooks.indexOf(tagName)
                    if (i !== -1) {
                        delete _allTagListForSavedBooks[i]
                        _allTagListForSavedBooks = _allTagListForSavedBooks.filter(function() {
                            return true
                        })
                    }
                    break
            }
        }
        const updateSuggestionsTagList = function(tagName, action) {
            switch (action) {
                case 'add':
                    if (_suggestionsTagListForSavedBooks.indexOf(tagName) === -1) {
                        _suggestionsTagListForSavedBooks.push(tagName)
                    }
                    break
                case 'delete':
                    const i = _suggestionsTagListForSavedBooks.indexOf(tagName)
                    if (i !== -1) {
                        delete _suggestionsTagListForSavedBooks[i]
                        _suggestionsTagListForSavedBooks = _suggestionsTagListForSavedBooks.filter(function() {
                            return true
                        })
                    }
                    break
            }
            if (action == 'delete') {
                const tmp = _suggestionsTagListForSavedBooks
                _suggestionsTagListForSavedBooks = []
                for (let i in tmp) {
                    if (tmp[i] !== tagName) {
                        _suggestionsTagListForSavedBooks.push(tmp[i])
                    }
                }
                return
            }
            if (action == 'add') {
                if (_suggestionsTagListForSavedBooks.indexOf(tagName) === -1) {
                    _suggestionsTagListForSavedBooks.push(tagName)
                }
                return
            }
        }
        const toggleTagsSuggestions = function($input) {
            const suggestionListClass = 'suggestion-list'
            const $saveForLaterContainer = $('.save-for-later-container')
            const $tagList = $saveForLaterContainer.find('.' + suggestionListClass)
            const tagName = $input.val().toLowerCase()
            if ($tagList.length) {
                $tagList.remove()
            }
            if (tagName.length < 2) {
                return
            }
            const $suggestions = $('<ul class="' + suggestionListClass + '"></ul>')
            for (let i in _suggestionsTagListForSavedBooks) {
                const sTagName = _suggestionsTagListForSavedBooks[i].toLowerCase()
                if (sTagName.indexOf(tagName) !== -1) {
                    $suggestions.append('<li class="row">' + _suggestionsTagListForSavedBooks[i] + '</li>')
                }
            }
            if (!$suggestions.html().length) {
                return
            }
            $suggestions.css({
                top: ($input.position().top + $input.height() + 8) + 'px',
                left: $input.position().left + 'px'
            })
            $saveForLaterContainer.append($suggestions)
        }
        $(window).resize(function() {
            const $container = $('.save-for-later-container')
            if ($container.length && $container.is(':visible')) {
                const book_id = $container.data('book_id')
                const $btn = $(_containerSelector + ' .bookmarks[data-book_id=' + book_id + '] .btn-save-for-later')
                fixContainerPosition($btn, $container)
            }
        })
        $(document).on('click', _containerSelector + ' .bookmarks .btn-save-for-later', function() {
            const $that = $(this)
            const $bookmarks = $that.closest('.bookmarks')
            const bookId = $bookmarks.data('book_id')
            const isSaved = $that.hasClass('active') ? 1 : 0
            const $saveForLaterContainerOld = $('.save-for-later-container')
            $bookmarks.find('i').tooltip('hide')
            if ($saveForLaterContainerOld.length) {
                if (bookId == $saveForLaterContainerOld.data('book_id')) {
                    if ($saveForLaterContainerOld.is(':visible')) {
                        $saveForLaterContainerOld.hide()
                        $(document).trigger('bookmarks.closedSaveForLaterPopup')
                    } else {
                        fixContainerPosition($that, $saveForLaterContainerOld)
                        $saveForLaterContainerOld.show()
                        $(document).trigger('bookmarks.openedSaveForLaterPopup')
                    }
                    return
                } else {
                    $saveForLaterContainerOld.remove()
                    $(document).trigger('bookmarks.closedSaveForLaterPopup')
                }
            }
            $saveForLaterContainer = $saveForLaterContainerTemplate.clone()
            $saveForLaterContainer.data('book_id', bookId)
            $saveForLaterContainer.find('.save-for-later-btn').data('is_saved', isSaved)
            if (isSaved) {
                $saveForLaterContainer.find('.save-for-later-btn').hide()
                $saveForLaterContainer.find('.remove-from-favorites-btn').show()
            }
            const $loadingContent = $saveForLaterContainer.find('.save-for-later-loading-content')
            const $saveForLaterContent = $saveForLaterContainer.find('.save-for-later-content')
            const $newTagBtn = $saveForLaterContent.find('.new-tag-btn')
            new ZLibrarySpinner($loadingContent).color('#676767').start()
            $('body').append($saveForLaterContainer)
            fixContainerPosition($that, $saveForLaterContainer)
            $(document).trigger('bookmarks.openedSaveForLaterPopup')
            new ZLibraryResponse('/papi/user/book/' + bookId + '/tags/?all').success(function(result) {
                for (let i in result['tags']) {
                    $newTagBtn.before('<li>' + result['tags'][i]['tag'] + '<i class="icon icon-cross-black"></i></li>')
                    updateAllTagList(result['tags'][i]['tag'], 'add')
                }
                for (let i in result['allTags']) {
                    if (!isTagExisted(result['allTags'][i]['tag'])) {
                        updateSuggestionsTagList(result['allTags'][i]['tag'], 'add')
                    }
                }
                $loadingContent.hide()
                $saveForLaterContent.show()
            }).fetch()
        })
        $(document).on('click', '.save-for-later-content .tag-list .new-tag-btn', function() {
            $(newTagInputSelector).remove()
            $input = $('<input type="text"/>')
            $(this).hide()
            $(this).before($input)
            $input.focus()
        })
        $(document).on('click', '.save-for-later-content .tag-list li .icon', function() {
            const $row = $(this).closest('li')
            const tagName = $row.text()
            updateAllTagList(tagName, 'delete')
            updateSuggestionsTagList(tagName, 'add')
            $row.remove()
            $('.save-for-later-content .save-for-later-btn').trigger('click', {
                editTag: 1
            })
        })
        $(document).on('click', '.save-for-later-content .save-for-later-btn', function(e, data) {
            const $that = $(this)
            if ($that.prop('disabled')) {
                return
            }
            const $saveForLaterContainer = $('.save-for-later-container')
            let tags = []
            const bookId = $('.bookmarks').data('book_id')
            const outside = data ? data.outside : false
            const editTag = data ? data.editTag : false
            const isSaved = $(this).data('is_saved')
            $('.save-for-later-content .tag-list li').each(function(i, el) {
                tags.push($(el).text())
            })
            if ((outside && !isSaved && !tags.length) || (editTag && !isSaved)) {
                return
            }
            if (!isSaved && !editTag) {
                onAddedBookToSavedBooks(bookId)
                CurrentUser.saveReadLater(bookId, null, 'none', function() {
                    onDeletedBookFromSavedBooks(bookId)
                })
            }
            if (!tags.length && !editTag) {
                $saveForLaterContainer.remove()
                $(document).trigger('bookmarks.closedSaveForLaterPopup')
                return
            }
            $that.prop('disabled', true)
            new ZLibraryResponse('/papi/user/book/' + bookId + '/tags', {
                tags: tags
            }).success(function() {
                $that.prop('disabled', false)
                if (!editTag) {
                    $saveForLaterContainer.remove()
                    $(document).trigger('bookmarks.closedSaveForLaterPopup')
                }
                _allTagListForSavedBooks = []
                $(document).trigger('onAddedBookToSavedBooks', {
                    tags: tags
                })
            }).error(json => {
                $that.prop('disabled', false)
            }).fetch()
        })
        $(document).on('click', '.save-for-later-content .remove-from-favorites-btn', function() {
            const $that = $(this)
            const bookId = $('.bookmarks').data('book_id')
            if ($that.hasClass('disabled')) {
                return
            }
            $that.addClass('disabled')
            onDeletedBookFromSavedBooks(bookId)
            CurrentUser.deleteReadLater(bookId, function() {
                $that.removeClass('disabled')
                $('.save-for-later-container').remove()
                $(document).trigger('bookmarks.closedSaveForLaterPopup')
            }, 'none', function() {
                $that.removeClass('disabled')
                onAddedBookToSavedBooks(bookId)
            })
        })
        $(document).on('click', '.save-for-later-container .suggestion-list .row', function() {
            $(newTagInputSelector).val($(this).text())
            $(this).closest('.suggestion-list').remove()
        })
        $(document).on('focusout', newTagInputSelector, function(e) {
            if ($('.save-for-later-container .suggestion-list').length) {
                $(this).css('visibility', 'hidden')
                setTimeout(function() {
                    $(newTagInputSelector).trigger('focusout')
                }, 300)
                return
            }
            const tagName = $(this).val()
            if (!tagName.length) {
                $(this).remove()
                $('.save-for-later-content .tag-list .new-tag-btn').show()
                return
            }
            if (isTagExisted(tagName)) {
                new ZLibraryNotify().error(i18next.t('This tag has already existed'))
                $(this).focus()
                return
            }
            newTagInputProcess($(this), 'save')
        })
        $(document).on('keyup', newTagInputSelector, function(e) {
            let action = 'input'
            const code = (e.keyCode ? e.keyCode : e.which)
            if (code == 27) {
                action = 'cancel'
            } else if (code == 13) {
                if (isTagExisted($(this).val())) {
                    new ZLibraryNotify().error(i18next.t('This tag has already existed'))
                    return
                }
                action = 'save'
            }
            newTagInputProcess($(this), action)
        })
        $(document).on('keyup', function(e) {
            const code = (e.keyCode ? e.keyCode : e.which)
            if (code !== 9) {
                return
            }
            $('.save-for-later-container .suggestion-list').remove()
        })
    }
    const initEventsForSavedBooksEasy = function() {
        $(document).on('click', _containerSelector + ' .bookmarks .btn-save-for-later', function() {
            const $that = $(this)
            if ($that.hasClass('disabled')) {
                return
            }
            const bookId = parseInt($that.closest('.bookmarks').data('book_id'))
            if ($that.hasClass('active')) {
                $that.addClass('disabled')
                onDeletedBookFromSavedBooks(bookId)
                CurrentUser.deleteReadLater(bookId, function() {
                    $that.removeClass('disabled')
                }, 'none', function() {
                    $that.removeClass('disabled')
                    onAddedBookToSavedBooks(bookId)
                })
            } else {
                $that.addClass('disabled')
                onAddedBookToSavedBooks(bookId)
                CurrentUser.saveReadLater(bookId, async function() {
                        $that.removeClass('disabled')
                    }, 'none',
                    function() {
                        $that.removeClass('disabled')
                        onDeletedBookFromSavedBooks(bookId)
                    })
            }
        })
    }
    const initBookPage = async function() {
        initEventsForBooklists()
        initEventsForSavedBooks()
        _that.paintOverBookmarkIcons()
        $(document).on('click', function(e) {
            const $target = $(e.target)
            const $saveForLaterContainer = $('.save-for-later-container')
            const $booklistsContainer = $('.booklists-container')
            const isOpeningBooklistsPopup = $target.hasClass('btn-booklists')
            const isOpeningSaveForLaterPopup = $target.hasClass('btn-save-for-later')
            if (!isOpeningBooklistsPopup && !$target.closest('.booklists-container').length && $booklistsContainer.is(':visible')) {
                $('.booklists-container').hide()
                $(document).trigger('bookmarks.closedBooklistsPopup')
            }
            if ($saveForLaterContainer.is(':visible')) {
                const $suggestionList = $('.save-for-later-container .suggestion-list')
                if (!isOpeningSaveForLaterPopup && !$target.hasClass('icon-cross-black') && !$target.closest('.save-for-later-container').length && !$target.parent().hasClass('suggestion-list')) {
                    let timeout = 0
                    $saveForLaterContainer.hide()
                    $(document).trigger('bookmarks.closedSaveForLaterPopup')
                    if ($suggestionList.length) {
                        $suggestionList.remove()
                        timeout = 300
                    }
                    setTimeout(function() {
                        $saveForLaterContainer.find('.save-for-later-btn').trigger('click', {
                            outside: 1
                        })
                        if (isOpeningBooklistsPopup) {
                            $('.bookmarks .btn-booklists').trigger('click')
                        }
                    }, timeout)
                } else if (!$target.parent().hasClass('suggestion-list')) {
                    $suggestionList.remove()
                }
            }
        })
        $(document).on('onAddedBookToSavedBooks', function(e, data) {
            if (!data || typeof data.tags != 'object') {
                return
            }
            const $bookTagsContent = $('.cardBooks .property_user_tags')
            const $bookTags = $bookTagsContent.find('.property_value')
            $bookTags.html('')
            if (!data.tags.length) {
                $bookTagsContent.hide()
                return
            }
            for (i in data.tags) {
                $bookTags.append('<span class="tag label label-info"><a href="/users/saved_books.php?tag=' + data.tags[i] + '" style="color:#fff;text-decoration:none;font-size:9pt;" target="_blank">' + data.tags[i] + '</a></span>')
            }
            $bookTagsContent.show();
        })
    }
    const initSearchPage = async function() {
        initEventsForBooklists()
        initEventsForSavedBooksEasy()
        let bookmarksList = []
        let bookIdList = []
        $(_containerSelector + ' .bookmarks').each(function() {
            let bookId = parseInt($(this).data('book_id'))
            bookmarksList[bookId] = $(this)
            bookIdList.push(bookId)
        })
        const userSavedBooks = await findUserSavedBooks(bookIdList)
        const userBooksInBooklists = await findUserBooklists(bookIdList)
        if (!userSavedBooks || !userBooksInBooklists) {
            return
        }
        bookmarksList.forEach(function($el, bookId) {
            let visible = false
            if (userSavedBooks.indexOf(bookId) !== -1) {
                $el.find('.icon-heart').addClass('icon-blue active')
                visible = true
            }
            if (userBooksInBooklists.indexOf(bookId) !== -1) {
                $el.find('.icon-bookmark').addClass('icon-blue active')
                visible = true
            }
            if (visible) {
                $el.show()
            }
        })
        $(document).on('click', function(e) {
            const $target = $(e.target)
            if ($target.hasClass('btn-booklists') || $target.closest('.booklists-container').length) {
                return
            }
            const $booklistsContainer = $('.booklists-container')
            const $resItemBox = $target.closest('.resItemBox')
            const $bookmarks = $('.resItemBox .bookmarks[data-book_id="' + $booklistsContainer.data('book_id') + '"]')
            if (!$bookmarks.find('i.active').length && (!$resItemBox.length || !$resItemBox.find($bookmarks).length)) {
                $bookmarks.hide()
            }
            $booklistsContainer.hide()
            $(document).trigger('bookmarks.closedBooklistsPopup')
        })
        $(document).on('mouseenter', '.resItemBox', function() {
            $(this).find('.bookmarks').show();
        })
        $(document).on('mouseleave', '.resItemBox', function() {
            $bookmarks = $(this).find('.bookmarks')
            if (!$bookmarks.find('i.active').length && !$('.booklists-container').is(':visible')) {
                $bookmarks.hide()
            }
        })
    }
    const initBooklistPage = function() {
        initBookPage()
        $(document).on('scrollModalContent', function(e, data) {
            const $booklistsContainer = $('.booklists-container')
            const $saveForLaterContainer = $('.save-for-later-container')
            if ($booklistsContainer.is(':visible')) {
                fixContainerPosition($(_containerSelector + ' .bookmarks .btn-booklists'), $booklistsContainer)
            }
            if ($saveForLaterContainer.is(':visible')) {
                fixContainerPosition($(_containerSelector + ' .bookmarks .btn-save-for-later'), $saveForLaterContainer)
            }
        })
    }
    this.paintOverBookmarkIcons = async function() {
        if (false == new ZLibraryLocalStorage().isSupported()) {
            return
        }
        let bookmarksList = []
        let bookIdList = []
        const $bookmarks = $(_containerSelector + ' .bookmarks')
        $bookmarks.each(function() {
            let bookId = parseInt($(this).data('book_id'))
            bookmarksList[bookId] = $(this)
            bookIdList.push(bookId)
        })
        const userSavedBooks = await findUserSavedBooks(bookIdList)
        const userBooksInBooklists = await findUserBooklists(bookIdList)
        if (!userSavedBooks || !userBooksInBooklists) {
            return
        }
        $bookmarks.show()
        bookmarksList.forEach(function($el, bookId) {
            if (userSavedBooks.indexOf(bookId) !== -1) {
                $el.find('.icon-heart').addClass('icon-blue active')
            }
            if (userBooksInBooklists.indexOf(bookId) !== -1) {
                $el.find('.icon-bookmark').addClass('icon-blue active')
            }
        })
    }
    this.setPage = function(page) {
        _page = page
    }
    this.init = async function(options) {
        if (_isInit) {
            return
        }
        _isInit = true
        this.initTooltips()
        $(document).on('mouseenter', '.bookmarks i', function() {
            if ($('.booklists-container, .save-for-later-container').is(':visible')) {
                $('.bookmarks i').tooltip('hide')
            }
        })
        if (!_userId) {
            initAuthEvents()
            return
        }
        options = typeof options == 'object' ? options : {}
        if (options.page) {
            this.setPage(options.page)
        }
        await loadBookmarks()
        switch (_page) {
            case 'search':
            case 'recently':
                _containerSelector = '#searchResultBox'
                initSearchPage()
                break
            case 'book':
                _containerSelector = '.cardBooks'
                initBookPage()
                break
            case 'booklistModal':
                _containerSelector = '.book-info-container'
                initBooklistPage()
                break
        }
    }
    this.initTooltips = function() {
        if (!navigator.maxTouchPoints) {
            $('.bookmarks i').tooltip({
                placement: 'bottom',
                container: 'body'
            })
        }
    }
    const initAuthEvents = function() {
        if (_userId || false == new ZLibraryLocalStorage().isSupported()) {
            return
        }
        $('.bookmarks').show()
        $(document).on('click', '.bookmarks .btn-save-for-later, .bookmarks .btn-booklists', function() {
            const text = $(this).hasClass('btn-save-for-later') ? i18next.t('After authorization, you will be able to save books using the Â«Add to FavoritesÂ» option') : i18next.t('After authorization, you will be able to save books using the Â«Add to BooklistÂ» option')
            new User().showAuthPopup('login', text)
        })
    }
    this.addBookToBooklist = async function(options) {
        if (typeof options != 'object' || !options.bookId) {
            if (typeof options.errorCallback == 'function') {
                options.errorCallback({
                    error: 'Invalid bookId'
                })
            }
            return
        }
        let zLibraryResponse = null
        if (options.booklistId) {
            zLibraryResponse = new ZLibraryResponse('/papi/booklist/' + options.booklistId + '/add-book/' + options.bookId)
        } else {
            if (!isValidInputString(options.booklistTitle)) {
                if (typeof options.errorCallback == 'function') {
                    options.errorCallback({
                        error: 'Invalid booklist name'
                    })
                }
                return
            }
            zLibraryResponse = new ZLibraryResponse('/papi/booklist/create', {
                title: options.booklistTitle,
                description: options.booklistDescription || '',
                bookId: options.bookId
            })
        }
        await zLibraryResponse.success(async function(result) {
            const booklistId = result.readlist ? result.readlist.id : result.book.readlist_id
            addBookToBooklistsStorage(booklistId, options.bookId)
            if (typeof options.successCallback == 'function') {
                options.successCallback(result)
            }
        }).error(function(result) {
            if (typeof options.errorCallback == 'function') {
                options.errorCallback(result)
            }
        }).fetch()
    }
    this.deleteBookFromBooklist = async function(options) {
        if (typeof options != 'object' || !options.bookId || !options.booklistId || !options.readlistBookId) {
            if (typeof options.errorCallback == 'function') {
                options.errorCallback({
                    error: 'Invalid options'
                })
            }
            return
        }
        await new ZLibraryResponse('/papi/booklist/' + options.booklistId + '/remove-book/' + options.readlistBookId).success(async function(result) {
            deleteBookFromBooklistsStorage(options.booklistId, options.bookId)
            if (typeof options.successCallback == 'function') {
                options.successCallback(result)
            }
        }).error(function(result) {
            if (typeof options.errorCallback == 'function') {
                options.errorCallback(result)
            }
        }).fetch()
    }
    this.deleteBooklist = async function(options) {
        if (typeof options != 'object' || !options.booklistId) {
            return
        }
        await new ZLibraryResponse('/papi/booklist/' + options.booklistId + '/delete').success(async function(result) {
            deleteBooklistFromBooklistsStorage(options.booklistId)
            if (typeof options.successCallback == 'function') {
                options.successCallback(result)
            }
        }).error(function(result) {
            if (typeof options.errorCallback == 'function') {
                options.errorCallback(result)
            }
        }).fetch()
    }
    this.publicBooklist = async function(options) {
        if (typeof options != 'object' || !options.booklistId) {
            return
        }
        await new ZLibraryResponse('/papi/booklist/' + options.booklistId + '/public').success(async function(result) {
            if (typeof options.successCallback == 'function') {
                options.successCallback(result)
            }
        }).error(function(result) {
            if (typeof options.errorCallback == 'function') {
                options.errorCallback(result)
            }
        }).fetch()
    }
    this.addBookToSavedBooks = function(options) {
        const $btn = $(options.spinnerContainer)
        const spinner = new ZLibrarySpinner($btn).color('#666666')
        const request = new Request('/papi/user/book/' + options.bookId + '/readlater')
        const data = {
            userId: _userId,
            bookId: parseInt(options.bookId)
        }
        $btn.prop('disabled', true)
        return new ZLibraryResponse(request).success(async function() {
            $btn.prop('disabled', false)
            addBookToSavedBooksStorage(options.bookId)
            if (typeof options.success == 'function') {
                options.success()
            }
        }).error(function(result) {
            $btn.prop('disabled', false)
            if (typeof options.error === 'function') {
                options.error(result)
            }
        }).spinner(spinner).fetch()
    }
    this.deleteBookFromSavedBooks = function(options) {
        const $btn = $(options.spinnerContainer)
        const spinner = new ZLibrarySpinner($btn).color('#666666')
        const request = new Request('/papi/user/book/' + options.bookId + '/readlater', {
            method: 'DELETE',
        })
        $btn.prop('disabled', true)
        return new ZLibraryResponse(request).success(function() {
            $btn.prop('disabled', false)
            deleteBookFromSavedBooksStorage(options.bookId)
            CurrentUser.removeAllBookTagsInHtml()
            if (typeof options.success == 'function') {
                options.success()
            }
        }).error(function(result) {
            $btn.prop('disabled', false)
            if (typeof options.error === 'function') {
                options.error(result)
            }
        }).spinner(spinner).fetch()
    }
};
const ZLibraryNotify = function(opt) {
    opt = opt || {}
    const icons = {
        danger: 'icon-circle-cross',
        info: 'icon-circle-info',
        success: 'icon-circle-check-mark-green',
        warning: 'icon-circle-warning',
    }
    const defaults = {
        type: 'danger',
        delay: 10000,
        mouse_over: 'pause',
        z_index: 2000,
        placement: {
            from: 'bottom',
            align: 'right'
        },
        template: `<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} zlib-alert" role="alert">

            <button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="icon icon-cross-black"></i></button>

            <span data-notify="icon"></span>

            <span data-notify="title">{1}</span>

            <span data-notify="message">{2}</span>

            <div class="progress" data-notify="progressbar">

            <div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>

            </div>

            <a href="{3}" target="{4}" data-notify="url"></a>

            </div>`
    }
    opt = $.extend({}, defaults, opt)

    function info(message) {
        type('info')
        show(message)
    }

    function error(message) {
        type('danger')
        show(message)
    }

    function success(message) {
        type('success')
        show(message)
    }

    function warning(message) {
        type('warning')
        show(message)
    }

    function type(type) {
        opt.type = type
    }

    function show(message) {
        message = opt.url ? {
            message: message,
            url: opt.url
        } : {
            message: message
        }
        if (icons[opt.type]) {
            message.icon = icons[opt.type]
        }
        $.notify(message, opt)
    }
    return {
        info: info,
        error: error,
        success: success,
        warning: warning,
        type: type,
        show: show,
    }
};
const ZLibraryRequest = function(url, data) {
    let method = 'GET'
    if (data) {
        data = JSON.stringify(data)
        method = data ? 'POST' : 'GET'
    } else if (url instanceof Element || url instanceof jQuery) {
        data = {}
        $form = $(url)
        url = $form.attr('action')
        $.map($form.serializeArray(), function(n, i) {
            data[n['name']] = n['value'];
        })
        data = JSON.stringify(data)
        method = $form.attr('method')
    }
    const request = new Request(url, {
        method: method,
        body: data
    })
    return request
};
const ZLibraryResponse = function(request, data) {
    if (!(request instanceof Request)) {
        request = new ZLibraryRequest(request, data)
    }
    this.request = request
    this.notifyEnabled = true
    this.successMessageValue = null
    this.spinnerStart = function() {
        if (this.spinnerObj) {
            this.spinnerObj.start()
        }
        return this
    }
    this.spinnerStop = function() {
        if (this.spinnerObj) {
            this.spinnerObj.stop()
        }
        return this
    }
    this.successCallback = function(json) {}
    this.errorCallback = function(json) {}
}
ZLibraryResponse.prototype = function() {
    function fetch() {
        this.spinnerStart()
        return window.fetch(this.request, {
            credentials: 'include'
        }).then(response => {
            try {
                return response.json()
            } catch (err) {
                throw new Error(response.text())
            }
        }).then(json => {
            if (json.success == 0) {
                throw new Error(JSON.stringify(json))
            }
            this.spinnerStop()
            if (this.successMessageValue) {
                ZLibraryNotify({
                    delay: 4000
                }).success(this.successMessageValue)
            }
            if (typeof this.successCallback === 'function') {
                this.successCallback(json)
            }
            return json
        }).catch(error => {
            let json
            this.spinnerStop()
            try {
                json = JSON.parse(error.message)
            } catch (err) {
                json = {
                    success: 0,
                    error: error.message
                }
            }
            if (this.notifyEnabled) {
                ZLibraryNotify({
                    delay: 8000
                }).error(json.error ? json.error : i18next.t('Something went wrong'))
            }
            if (typeof this.errorCallback === 'function') {
                this.errorCallback(json)
            }
        })
    }

    function fetchHtml() {
        if (this.spinnerObj) {
            this.spinnerObj.start()
        }
        return window.fetch(this.request).then(response => {
            try {
                return response.text()
            } catch (err) {
                throw new Error(response)
            }
        }).then(response => {
            if (this.spinnerObj) {
                this.spinnerObj.stop()
            }
            if (typeof this.successCallback === 'function') {
                this.successCallback(response)
            }
            return response
        }).catch(error => {
            if (this.spinnerObj) {
                this.spinnerObj.stop()
            }
            if (this.notifyEnabled) {
                ZLibraryNotify().error(error)
            }
            throw new Error(error)
        })
    }

    function spinner(spinner) {
        if (!(spinner instanceof ZLibrarySpinner)) {
            spinner = new ZLibrarySpinner(spinner)
        }
        this.spinnerObj = spinner
        return this
    }

    function disableNotify() {
        this.notifyEnabled = false
        return this
    }

    function success(success) {
        if (typeof success == 'function') {
            this.successCallback = success
        }
        return this
    }

    function error(error) {
        if (typeof error == 'function') {
            this.errorCallback = error
        }
        return this
    }

    function successMessage(successMessageValue) {
        this.successMessageValue = successMessageValue
        return this
    }
    return {
        fetch: fetch,
        fetchHtml: fetchHtml,
        spinner: spinner,
        disableNotify: disableNotify,
        success: success,
        error: error,
        successMessage: successMessage,
    }
}();
const ZLibrarySpinner = function(element, type) {
    type = type || 'default'
    if (typeof element === 'string') {
        element = '#' + element
    }
    element = $(element)
    const defaults = {
        default: {
            lines: 9,
            length: 5,
            width: 3,
            radius: 5,
            color: '#ffffff',
            hideText: true,
        },
        button: {
            lines: 9,
            length: 3,
            width: 2,
            radius: 4,
            color: '#666666',
            left: '15px',
        },
    }
    this.element = element
    this.options = $.extend({}, defaults[type])
    this.spinner = new Spinner(this.options).spin()
}
ZLibrarySpinner.prototype = function() {
    function start() {
        this.spinner = new Spinner(this.options).spin()
        this.element.append(this.spinner.el)
        this.element.css('position', 'relative')
        if (this.options.hideText) {
            this.element.css('color', 'transparent')
            this.element.css('text-shadow', 'none')
        }
        return this
    }

    function stop() {
        this.spinner.stop()
        if (this.options.hideText) {
            this.element.css('color', '')
            this.element.css('text-shadow', '')
        }
        return this
    }

    function color(color) {
        this.options.color = color
        return this
    }

    function length(length) {
        this.options.length = length
        return this
    }

    function width(width) {
        this.options.width = width
        return this
    }

    function radius(radius) {
        this.options.radius = radius
        return this
    }

    function lines(lines) {
        this.options.lines = lines
        return this
    }

    function left(left) {
        this.options.left = left
        return this
    }

    function hideText(hideText) {
        this.options.hideText = hideText
        return this
    }
    return {
        color: color,
        length: length,
        width: width,
        radius: radius,
        lines: lines,
        left: left,
        hideText: hideText,
        start: start,
        stop: stop,
    }
}();
const ZLibraryModal = function(options) {
    options = options || {}
    const defaults = {
        element: null,
        url: null,
        width: 'auto',
        title: null,
        formAction: null,
        formData: null,
        template: null,
        templateData: null,
        container: 'zlibrary-modal',
    }
    options = $.extend({}, defaults, options)
    const $container = $('#' + options.container)
    const $containerHeader = $container.find('.modal-header')
    const $containerBody = $container.find('.modal-body')
    const spinner = new ZLibrarySpinner($containerBody).color('#999').length(15).lines(12).width(4).radius(12)

    function show() {
        reset()
        $container.modal('show')
        $('.modal-backdrop').addClass(options.container + '-backdrop')
        spinner.start()
        $container.find('.modal-dialog').css('width', '200px')
        $containerBody.find('.modal-dialog').css('height', '200px')
        if (options.title) {
            $containerHeader.removeClass('hidden')
            $containerHeader.find('.modal-title').html(options.title)
        }
        getModalContent().then(content => {
            spinner.stop()
            let width = ''
            if (document.documentElement.clientWidth > options.width) {
                width = options.width
            } else if (document.documentElement.clientWidth <= 768) {
                width = 'auto'
            }
            $container.find('.modal-dialog').css('width', width)
            $containerBody.find('.modal-dialog').css('height', 'auto')
            $containerBody.html(content);
            if (!!options.afterRender && typeof options.afterRender === 'function') {
                options.afterRender();
            }
            if (options.formData) {
                $.each(options.formData, function(index, value) {
                    const $el = $containerBody.find('[name="' + index + '"]')
                    if ($el.length === 0) {
                        return
                    }
                    if ($el.attr('type') === 'checkbox' || $containerBody.attr('type') === 'radio') {
                        console.log(value)
                        $el.prop('checked', value)
                    } else {
                        $el.val(value)
                    }
                })
            }
            if (options.formAction) {
                $containerBody.find('form').attr('action', options.formAction)
            }
            if ($container.find('input, textarea').first()) {
                setTimeout(function() {
                    $container.find('input, textarea').first().focus()
                }, 500);
            }
        }).catch(error => {
            spinner.stop()
            $container.find('.modal-dialog').css('height', 'auto')
            $containerHeader.removeClass('hidden')
            $containerHeader.find('.modal-title').html(i18next.t('Something went wrong'))
            $container.modal('show')
            $containerBody.html('<div class="modal-error">' + error.message + '</div>')
        })
        return this
    }

    function hide() {
        $container.modal('hide')
        return this
    }

    function formAction(formAction) {
        options.formAction = formAction
        return this
    }

    function formData(data) {
        options.formData = data
        return this
    }

    function formClear() {
        $.each($containerBody.find('input,select,textarea'), function() {
            $el = $(this);
            if ($el.attr('type') == 'checkbox') {
                $el.prop('checked', false)
            } else if ($el.attr('type') == 'radio') {} else {
                $el.val('')
            }
        })
        return this
    }

    function templateData(data) {
        options.templateData = data
        return this
    }

    function title(title) {
        options.title = title
        return this
    }

    function reset() {
        $container.find('.modal-dialog').css('width', '')
        $containerHeader.addClass('hidden')
        $containerHeader.find('.modal-title').html('')
        $containerBody.html('')
    }

    function getModalContent() {
        if (options.url) {
            return fetch(options.url).then(response => {
                return response.text()
            })
        } else if (options.element) {
            const $element = document.getElementById(options.element)
            const sourceHtml = $element.innerHTML
            if (!!options.removeSource) {
                $element.remove();
            }
            return new Promise(resolve => resolve(sourceHtml))
        } else if (options.template) {
            const html = options.template(options.templateData)
            return new Promise(resolve => resolve(html))
        }
        throw new Error('"url", "element" or "template" option is required')
    }
    this.show = show;
    this.hide = hide;
    this.title = title;
    this.formAction = formAction;
    this.formClear = formClear;
    this.formData = formData;
    this.templateData = templateData;
};
const ZLibraryModelList = function(items = [], idColumnName = 'id') {
    let itemsMapping = {}
    buildMapping()

    function getAll() {
        return items
    }

    function get(id) {
        const index = itemsMapping[id]
        return items[index] ? items[index] : null
    }

    function clear() {
        itemsMapping = {}
        items = []
    }

    function buildMapping() {
        itemsMapping = {};
        $.each(items, function(index, item) {
            itemsMapping[item[idColumnName]] = index
        })
    }

    function push(item) {
        if (item instanceof Array) {
            $.each(item, function(index, row) {
                push(row)
            })
            return
        }
        if (get(item[idColumnName])) {
            items[itemsMapping[item[idColumnName]]] = item
            return
        }
        items.push(item)
        buildMapping()
    }

    function remove(id) {
        items.splice(itemsMapping[id], 1)
        buildMapping()
    }
    return {
        get: get,
        getAll: getAll,
        push: push,
        remove: remove,
        clear: clear,
    }
};
const ZLibrarySearch = {
    scope: 'zlib-search',
    expires: 1000 * 60 * 60 * 24 * 30,
    settingWraps: [],
    instZLibraryMultiselect: null,
    switchView: function(viewName) {
        viewName = viewName || ''
        setCookie(ZLibrarySearch.scope + 'View', viewName, ZLibrarySearch.makeExpires(viewName));
        document.location.reload();
    },
    makeExpires: function(value) {
        return !!value ? ZLibrarySearch.expires : -1;
    },
    saveSearchSettings: function() {
        const settingStr = JSON.stringify(ZLibrarySearch.getSettings());
        setCookie(ZLibrarySearch.scope + 'Settings', settingStr, ZLibrarySearch.makeExpires(settingStr));
        ZLibrarySearch.toggleIcons();
    },
    clearFilters: function() {
        ZLibrarySearch.blockToggleIcons = true;
        for (const el of ZLibrarySearch.settingWraps) {
            const isCheckbox = el.$wrap.get(0).nodeName === 'INPUT';
            if (isCheckbox) {
                el.$wrap.prop('checked', false);
            } else {
                $('option', el.$wrap).each((idx, item) => {
                    $(item).attr('selected', false);
                });
                el.$wrap.val('');
                el.$wrap.change();
            }
        }
        ZLibrarySearch.blockToggleIcons = false;
        ZLibrarySearch.saveSearchSettings();
        ZLibrarySearch.toggleIcons();
    },
    getSettings: function() {
        let settings = {
            length: 0
        };
        for (const el of ZLibrarySearch.settingWraps) {
            const isCheckbox = el.$wrap.get(0).nodeName === 'INPUT';
            const isSingleSelect = el.$wrap.attr('multiple') != 'multiple';
            let selOpt = null;
            if (isCheckbox) {
                if (el.$wrap.prop('checked')) {
                    selOpt = el.$wrap.val();
                }
            } else if (isSingleSelect) {
                if (el.$wrap.val()) {
                    selOpt = el.$wrap.val();
                }
            } else {
                let tmpArr = [];
                $('option', el.$wrap).each((idx, item) => {
                    if ($(item).attr('selected')) {
                        tmpArr.push($(item).val());
                    }
                });
                if (tmpArr.length) {
                    selOpt = tmpArr;
                }
            }
            if (selOpt) {
                settings[el.name] = selOpt;
                ++settings.length;
            }
        }
        return settings;
    },
    getSettingsFromCook: function() {
        let settingsStr = getCookie(ZLibrarySearch.scope + 'Settings');
        let settings = {
            length: 0
        };
        if (settingsStr) {
            try {
                settings = JSON.parse(settingsStr);
            } catch (e) {
                console.log(e);
            }
        }
        return settings;
    },
    isSearchSettings: function() {
        const currentSettings = ZLibrarySearch.getSettings();
        return currentSettings.length > 0;
    },
    isSearchSettingsInCooke: function() {
        const settings = ZLibrarySearch.getSettingsFromCook();
        return settings.length > 0;
    },
    isDiffSettings: function() {
        const currentSettings = ZLibrarySearch.getSettings();
        const cookSettings = ZLibrarySearch.getSettingsFromCook();
        if (currentSettings.length !== cookSettings.length) {
            return true;
        }
        delete cookSettings.length;
        for (const idx in cookSettings) {
            if (!currentSettings[idx]) {
                return true;
            }
            if (Array.isArray(cookSettings[idx])) {
                if (cookSettings[idx].length !== currentSettings[idx].length) {
                    return true;
                }
                for (const cookValue of cookSettings[idx]) {
                    let isDiff = true;
                    for (const currentValue of currentSettings[idx]) {
                        if (cookValue === currentValue) {
                            isDiff = false;
                        }
                    }
                    if (isDiff) {
                        return true;
                    }
                }
            } else if (cookSettings[idx] !== currentSettings[idx]) {
                return true;
            }
        }
        return false;
    },
    toggleIcons: () => {
        if (!!ZLibrarySearch.blockToggleIcons) {
            return false;
        }
        const $iconClearWrap = $('.clear-search-settings');
        const $iconSaveWrap = $('.saving-search-settings');
        const $iconSaveBody = $('.svg__body', $iconSaveWrap);
        const $iconSaveCheckMark = $('.svg__body-check-mark', $iconSaveWrap);
        const $iconSaveBorder = $('.svg__border', $iconSaveWrap);
        if (!ZLibrarySearch.isSearchSettings() && !ZLibrarySearch.isSearchSettingsInCooke()) {
            $iconSaveWrap.addClass('hidden');
            $iconClearWrap.addClass('hidden');
        } else if (ZLibrarySearch.isDiffSettings()) {
            $iconSaveWrap.removeClass('saving-search-settings__blocked hidden').attr('title', $iconSaveWrap.data('title_save'));
            $iconSaveBody.addClass('svg_active');
            $iconSaveCheckMark.hide();
            $iconClearWrap.removeClass('hidden');
        } else {
            $iconSaveWrap.removeClass('hidden').addClass('saving-search-settings__blocked').attr('title', $iconSaveWrap.data('title_saved'));
            $iconSaveBody.removeClass('svg_active');
            $iconSaveCheckMark.show();
            $iconClearWrap.removeClass('hidden');
        }
    },
    initWraps: function() {
        const multiselectWrapClass = '.' + ZLibrarySearch.instZLibraryMultiselect.getGeneralWrapClass();
        const selectClass = '.' + ZLibrarySearch.instZLibraryMultiselect.getTargetSelectClass();
        const settings = [{
            name: 'e',
            $wrap: $('input[name="e"]')
        }, {
            name: 'yearFrom',
            $wrap: $('#wrapYearFrom').closest(multiselectWrapClass).find(selectClass)
        }, {
            name: 'yearTo',
            $wrap: $('#wrapYearTo').closest(multiselectWrapClass).find(selectClass)
        }, {
            name: 'languages',
            $wrap: $('#wrapLang').closest(multiselectWrapClass).find(selectClass)
        }, {
            name: 'extensions',
            $wrap: $('#wrapExt').closest(multiselectWrapClass).find(selectClass)
        }];
        for (const el of settings) {
            if (el.$wrap.length) {
                ZLibrarySearch.settingWraps.push(el);
            }
        }
    },
    init: function() {
        $(function() {
            ZLibrarySearch.instZLibraryMultiselect = ZLibraryMultiselect({
                onlyStaticBehavior: true
            });
            ZLibrarySearch.initWraps();
            ZLibrarySearch.toggleIcons();
            const selectClass = '.' + ZLibrarySearch.instZLibraryMultiselect.getTargetSelectClass();
            $('input[name="e"], ' + selectClass).on('change', function() {
                ZLibrarySearch.toggleIcons();
            });
        });
    },
};;
const ZLibraryMultiselect = function(manualOptions = {}) {
    const options = {
        targetSelector: '.multiselect',
        targetGroupSelector: 'optgroup',
        targetItemSelector: 'option',
        useTargetSelect: false,
        height: null,
        type: 'singleton',
        switchType: 'checkbox',
        enableFilter: true,
        highlightMatches: false,
        enableSort: true,
        sortField: 'text',
        sortType: 'text',
        isReversSort: false,
        valuesName: 'multiselect_values',
        placeholder: i18next.t('select'),
        placeholderFull: i18next.t('selected'),
        textForNone: i18next.t('None'),
        delimiter: '<div class="multiselect-delimiter"></div>',
        enableSelectedGroup: true,
        hideEmptyGroups: true,
        showGroupTitle: false,
        onlyStaticBehavior: false,
    }
    const insideOpts = {
        targetSelectClass: 'multiselect__target-select',
        generalWrapClass: 'multiselect-box-wrap',
    }
    const handlers = {};
    let groupedData = {};
    let selectedItems = {};

    function setOptions(manualOptions = {}) {
        Object.assign(options, manualOptions);
        insideOpts.isMultiple = options.type === 'multiple';
        options.enableSelectedGroup = insideOpts.isMultiple && options.enableSelectedGroup;
        insideOpts.$target = options.targetSelector && $(options.targetSelector).length ? $(options.targetSelector) : null;
        insideOpts.$wrap = options.wrapSelector && $(options.wrapSelector).length ? $(options.wrapSelector) : null;
        const $generalWrap = $('<div>').addClass(insideOpts.generalWrapClass);
        if (insideOpts.$target) {
            insideOpts.$target.before($generalWrap);
            $generalWrap.append(insideOpts.$target);
        } else if (insideOpts.$wrap) {
            insideOpts.$wrap.before($generalWrap);
        } else {
            console.error('No target element defined to use "zlibrary-multiselect"');
            return false;
        }
        insideOpts.$wrap = insideOpts.$wrap || $('<div>').addClass('multiselect-wrap');
        $generalWrap.append(insideOpts.$wrap);
        if (!!options.delimiter && typeof options.delimiter === 'object' && $(options.delimiter).length) {
            options.delimiter = $(options.delimiter).html();
        }
        if (options.rowData) {
            setData(options.rowData);
            delete options.rowData;
            if (options.useTargetSelect) {
                createTargetSelect();
            }
        } else if (insideOpts.$target) {
            if (insideOpts.$target.attr('name')) {
                options.valuesName = insideOpts.$target.attr('name');
            }
            setData(getDataFromTarget());
        }
        if (options.useTargetSelect && insideOpts.$target) {
            insideOpts.$target.removeAttr('name').addClass(insideOpts.targetSelectClass).hide();
            if (insideOpts.isMultiple) {
                insideOpts.$target.attr('multiple', true);
            } else {
                insideOpts.$target.removeAttr('multiple');
            }
        } else {
            if (insideOpts.$target) {
                insideOpts.$target.remove();
                insideOpts.$target = null;
            }
            options.useTargetSelect = null;
        }
        if (!!options.handlers) {
            if (!!options.handlers.onChange && typeof options.handlers.onChange === 'function') {
                handlers.onChange = options.handlers.onChange;
            }
            delete options.handlers;
        }
    }

    function setData(data) {
        let tmpData = [];
        let tmpSelected = [];
        const initSelectedItems = function(items, groupName) {
            if (!Array.isArray(items)) {
                items = [items];
            }
            for (const item of items) {
                item.id = getSelectItemIdKey(item.value, groupName);
                item.groupName = groupName;
                tmpSelected.push(item);
            }
        };
        if (data) {
            if (data.groups) {
                for (const group of data.groups) {
                    if (!!group.name) {
                        if (group.selected) {
                            initSelectedItems(group.selected, group.name);
                            delete group.selected;
                        }
                        group.items = group.items || [];
                        tmpData.push(group);
                    }
                }
            }
            if (!!data.items || !!data.selected) {
                tmpData.push({
                    name: 'items',
                    items: data.items || []
                });
                initSelectedItems(data.selected || [], 'items');
            }
            for (const group of tmpData) {
                sortItems(group.items);
            }
            tmpSelected = sortItems(tmpSelected);
            if (options.enableSelectedGroup) {
                tmpData.unshift({
                    name: 'selected',
                    items: tmpSelected
                });
            }
        }
        groupedData = new ZLibraryModelList(tmpData, 'name');
        selectedItems = new ZLibraryModelList(JSON.parse(JSON.stringify(tmpSelected)), 'id');
    }

    function rebuildData() {
        const $selectGroup = $('.multiselect-group-wrap[data-name="selected"]', insideOpts.$wrap);
        if (!$selectGroup.length) {
            return false;
        }
        const selElements = {};
        const unselElements = {};
        for (const selEl of selectedItems.getAll()) {
            selElements[selEl.groupName] = selElements[selEl.groupName] || {};
            selElements[selEl.groupName][selEl.value] = true;
        }
        $('.multiselect-item', $selectGroup).each((idx, itemDom) => {
            const $itemDom = $(itemDom);
            const groupName = $itemDom.data('group');
            const value = $itemDom.data('value');
            if (!selectedItems.get(getSelectItemIdKey(value, groupName))) {
                unselElements[groupName] = unselElements[groupName] || [];
                unselElements[groupName].push({
                    id: getSelectItemIdKey(value, groupName),
                    value: value,
                    text: getTextFromDomElement($itemDom),
                });
            }
        });
        for (const groupName in selElements) {
            const tmpGroup = groupedData.get(groupName);
            const selectGroup = selElements[groupName];
            for (const idx in tmpGroup.items) {
                const selectGroupKey = tmpGroup.items[idx].value;
                if (!!selectGroup[selectGroupKey]) {
                    tmpGroup.items[idx].delete = true;
                }
            }
            const filterArr = [];
            for (const item of tmpGroup.items) {
                if (!item.delete) {
                    filterArr.push(item);
                }
            }
            tmpGroup.items = sortItems(filterArr);
            groupedData.push(tmpGroup);
        }
        for (const groupName in unselElements) {
            const tmpGroup = groupedData.get(groupName);
            for (const item of unselElements[groupName]) {
                tmpGroup.items.push(item);
            }
            tmpGroup.items = sortItems(tmpGroup.items);
            groupedData.push(tmpGroup);
        }
        const tmpGroup = groupedData.get('selected');
        tmpGroup.items = sortItems(selectedItems.getAll());
        groupedData.push(tmpGroup);
    }

    function getDataFromTarget() {
        const groups = [];
        const formGroup = function($parentSelector, skipGroups = false) {
            const items = [];
            const selected = [];
            $('option', $parentSelector).each(function(index, item) {
                if (skipGroups && $(item).closest('optgroup').length) {
                    return;
                }
                const tmpItem = {
                    text: $(item).text(),
                    value: $(item).val(),
                };
                const isSelected = item.hasAttribute('selected');
                if (isSelected) {
                    selected.push(tmpItem);
                }
                if (!isSelected || !insideOpts.isMultiple) {
                    items.push(tmpItem);
                }
            });
            return {
                items: items,
                selected: selected,
            };
        }
        if ($('optgroup', insideOpts.$target).length) {
            $('optgroup', insideOpts.$target).each(function(idx, group) {
                const frmGroup = formGroup($(group));
                groups.push({
                    name: $(group).attr('label'),
                    items: frmGroup.items,
                    selected: frmGroup.selected
                });
            });
        }
        const groupItems = formGroup(insideOpts.$target, true);
        return {
            groups: groups,
            items: groupItems.items,
            selected: groupItems.selected,
        };
    }

    function sortItems(items) {
        if (options.enableSort) {
            const field = options.sortField;
            if (options.sortType === 'text') {
                if (options.isReversSort) {
                    items.sort((a, b) => {
                        if (a[field] < b[field]) {
                            return 1;
                        }
                        if (a[field] > b[field]) {
                            return -1;
                        }
                        return 0;
                    });
                } else {
                    items.sort((a, b) => {
                        if (a[field] > b[field]) {
                            return 1;
                        }
                        if (a[field] < b[field]) {
                            return -1;
                        }
                        return 0;
                    });
                }
            } else if (options.sortType === 'number') {
                if (options.isReversSort) {
                    items.sort((a, b) => b[field] - a[field]);
                } else {
                    items.sort((a, b) => a[field] - b[field]);
                }
            }
        }
        return items;
    }

    function filtration(text) {
        const fltrGroups = [];
        const groupsDef = JSON.parse(JSON.stringify(groupedData.getAll()));
        text = text.toLowerCase();
        for (const group of groupsDef) {
            const tmpGroup = {
                name: group.name,
                items: []
            };
            for (const item of group.items) {
                item.textRow = item.text;
                item.text = String(item.text);
                const lowerText = item.text.toLowerCase();
                const idxSubStr = lowerText.indexOf(text);
                if (idxSubStr + 1) {
                    if (options.highlightMatches) {
                        const startSubStr = item.text.substr(0, idxSubStr);
                        const foundSubStr = item.text.substr(idxSubStr, text.length);
                        const endSubStr = item.text.substr(idxSubStr + text.length);
                        item.text = `${startSubStr}<span class="multiselect-item__highlight-matches">` + foundSubStr + `</span>${endSubStr}`;
                    }
                    tmpGroup.items.push(item);
                }
            }
            fltrGroups.push(tmpGroup);
        }
        return fltrGroups;
    }

    function createTargetSelect() {
        const $select = $('<select>');
        if (insideOpts.isMultiple) {
            $select.attr('multiple', 'multiple');
        }
        const createGroup = function(group) {
            let strGroup = '';
            const tmpSelectItems = {};
            for (const item of selectedItems.getAll()) {
                if (item.groupName === group.name) {
                    strGroup += `<option value="${item.value}" selected>${item.text}</option>`;
                    tmpSelectItems[item.value] = true;
                }
            }
            for (const item of group.items) {
                if (!tmpSelectItems[item.value]) {
                    strGroup += `<option value="${item.value}">${item.text}</option>`;
                }
            }
            if (group.name !== 'items') {
                strGroup = `<optgroup label="${group.name}">${strGroup}</optgroup>`;
            }
            return strGroup;
        }
        for (const group of groupedData.getAll()) {
            if (group.name !== 'selected') {
                $select.append(createGroup(group));
            }
        }
        insideOpts.$wrap.before($select);
        insideOpts.$target = $select;
    }

    function render() {
        if (!insideOpts.$wrap) {
            console.log('Not initialize container for plugin!');
            return false;
        }
        if (!!insideOpts.$target) {
            insideOpts.$target.hide();
        }
        insideOpts.$wrap.html(getGeneralTemplate());
    }

    function groupsRender(groups) {
        $('.multiselect-group-list', insideOpts.$wrap).html(getGroupsTemplate(groups));
    }

    function getGeneralTemplate(groups) {
        let placeholder = getTextForInput();
        let html = `<div class="multiselect-input-wrap">
                        <input type="text" class="multiselect-input" placeholder="${placeholder}">
                        <span class="multiselect-toggle">
                            <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4.66666L0 0.666664H8L4 4.66666Z" fill="#8C8C8C"/>
                            </svg>
                        </span>
                    </div>
                    <div class="multiselect-values" style="display: none;"></div>
                    <div class="multiselect-group-list-wrap" style="display:none;">
                        <div class="multiselect-group-list-wrap__patch"></div>
                        <div class="multiselect-group-list">`;
        if (!!groups) {
            html += getGroupsTemplate(groups);
        }
        html += `</div>`;
        html += `</div>`;
        return html;
    }

    function getGroupsTemplate(groups) {
        const clSelectNone = selectedItems.getAll().length === 0 ? 'multiselect-item_selected' : '';
        let html = `<div class="multiselect-item_none ${clSelectNone}" data-text_row="${options.textForNone}">` +
            options.textForNone + `</div>`;
        let isFull = false;
        if (options.delimiter) {
            html += options.delimiter;
        }
        for (const idx in groups) {
            const group = groups[idx];
            const isLast = groups.length - 1 === +idx;
            html += getGroupTemplate(group, isLast);
            if (group.items.length) {
                isFull = true;
            }
        }
        if (!isFull) {
            html = '<div class="multiselect-group-list__empty-box">' + i18next.t('Not found') + '</div>';
        }
        return html;
    }

    function getGroupTemplate(group, isLast = false) {
        const groupHide = !group.items.length ? 'style="display:none;"' : '';
        let html = `<div class="multiselect-group-wrap" data-name="${group.name}" ${groupHide}>`;
        if (options.showGroupTitle && group.name !== 'items') {
            html += `<div class="multiselect-group-name"> ${group.name}</div>`;
        }
        html += `<div class="multiselect-item-list">`;
        for (const item of group.items) {
            html += getItemTemplate(item, group.name);
        }
        html += `</div>`;
        if (options.delimiter && !isLast) {
            html += options.delimiter;
        }
        html += `</div>`;
        return html;
    }

    function getItemTemplate(item, groupName) {
        const isSelected = groupName === 'selected' || !!selectedItems.get(getSelectItemIdKey(item.value, groupName));
        const clSelected = isSelected ? 'multiselect-item_selected' : '';
        const tmpGroupName = item.groupName || groupName;
        const textRow = !!item.textRow ? `data-text="${item.textRow}"` : '';
        let html = '';
        if (insideOpts.isMultiple) {
            const checkedClass = isSelected ? `multiselect-item__switch_${options.switchType}_checked` : '';
            html += `<span class="multiselect-item__switch multiselect-item__switch_${options.switchType} ${checkedClass}"></span>`;
        }
        html += `<span class="multiselect-item" data-value="${item.value}" data-group="${tmpGroupName}" ${textRow}>` +
            item.text + `</span>`;
        return `<div class="multiselect-item-wrap ${clSelected}">${html}</div>`;
    }

    function setListeners() {
        const filtrationListener = function(event) {
            const filterGroups = filtration(event.target.value);
            groupsRender(filterGroups);
            if ($('.multiselect-group-list__empty-box', insideOpts.$wrap).length) {
                $('.multiselect-input', insideOpts.$wrap).addClass('multiselect-input_err');
            } else {
                $('.multiselect-input', insideOpts.$wrap).removeClass('multiselect-input_err');
            }
        }
        const clearAllInstances = function() {
            $('.multiselect-group-list-wrap').hide();
            $('.multiselect-input').val('');
        }
        if ($('.multiselect-box-wrap').length === 1) {
            $('body').on('click', function(event) {
                if ($(event.target).closest('.multiselect-box-wrap').length === 0) {
                    clearAllInstances();
                }
            });
        }
        insideOpts.$wrap.on('click', '.multiselect-toggle', function() {
            const $groupListWrap = $('.multiselect-group-list-wrap', insideOpts.$wrap);
            if ($groupListWrap.is(':hidden')) {
                clearAllInstances();
                if (options.enableSelectedGroup) {
                    rebuildData();
                }
                groupsRender(groupedData.getAll());
                $groupListWrap.show();
            } else {
                $groupListWrap.hide();
                updatePlaceholder();
            }
        });
        insideOpts.$wrap.on('focus, click', '.multiselect-input', function() {
            if ($('.multiselect-group-list-wrap', insideOpts.$wrap).is(':hidden')) {
                $('.multiselect-toggle', insideOpts.$wrap).click();
            }
        });
        insideOpts.$wrap.on('click', '.multiselect-item_none', function() {
            selectedItems.clear();
            $('.multiselect-toggle', insideOpts.$wrap).click();
            updatePlaceholder($(this).data('text_row'));
            updateValuesBox();
            updateTargetSelect();
        });
        insideOpts.$wrap.on('click', '.multiselect-item-wrap', function() {
            const $itemWrap = $(this);
            const $item = $('.multiselect-item', $itemWrap);
            const text = getTextFromDomElement($item);
            if (insideOpts.isMultiple) {
                const $switch = $('.multiselect-item__switch', $itemWrap);
                const switchClass = `multiselect-item__switch_${options.switchType}_checked`;
                if ($itemWrap.hasClass('multiselect-item_selected')) {
                    selectedItems.remove(getSelectItemIdKey($item.data('value'), $item.data('group')));
                    $itemWrap.removeClass('multiselect-item_selected');
                    $switch.removeClass(switchClass);
                } else {
                    $itemWrap.addClass('multiselect-item_selected');
                    $switch.addClass(switchClass);
                    selectedItems.push({
                        id: getSelectItemIdKey($item.data('value'), $item.data('group')),
                        value: $item.data('value'),
                        text: text,
                        groupName: $item.data('group'),
                    });
                }
                updatePlaceholder();
            } else {
                $('.multiselect-group-list input', insideOpts.$wrap).prop('checked', false);
                $('.multiselect-item-wrap', insideOpts.$wrap).removeClass('multiselect-item_selected');
                $itemWrap.addClass('multiselect-item_selected');
                selectedItems.clear();
                selectedItems.push({
                    id: getSelectItemIdKey($item.data('value'), $item.data('group')),
                    value: $item.data('value'),
                    text: text,
                    groupName: $item.data('group'),
                });
                $('.multiselect-toggle', insideOpts.$wrap).click();
            }
            updateValuesBox();
            updateTargetSelect();
        });
        if (options.enableFilter) {
            insideOpts.$wrap.on({
                input: filtrationListener,
                change: filtrationListener,
                paste: filtrationListener,
            }, '.multiselect-input');
        }
        if (!!options.useTargetSelect) {
            insideOpts.$target.on('change', function() {
                if (!!insideOpts.insideChange) {
                    return false;
                }
                setData(getDataFromTarget());
                updatePlaceholder();
                updateValuesBox();
                $('.multiselect-group-list', insideOpts.$wrap).empty();
            });
        }
    }

    function getSelectItemIdKey(itemValue, groupName) {
        return `${groupName}__${itemValue}`;
    }

    function getTextForInput() {
        const selectedArr = selectedItems.getAll();
        let count = selectedArr.length;
        if (!count) {
            return options.placeholder;
        }
        return insideOpts.isMultiple ? `${count} ${options.placeholderFull}` : selectedArr[0].text;
    }

    function getTextFromDomElement($element) {
        return $element.data('text') || $element.html();
    }

    function updatePlaceholder(text) {
        text = text || getTextForInput();
        $('.multiselect-input', insideOpts.$wrap).attr('placeholder', text).val('');
    }

    function updateValuesBox() {
        const $values = $('.multiselect-values', insideOpts.$wrap);
        const valName = options.valuesName + (insideOpts.isMultiple ? '[]' : '');
        $values.empty();
        for (const selEl of selectedItems.getAll()) {
            $values.append(`<input type="hidden" name="${valName}" value="${selEl.value}">`);
        }
        if (handlers.onChange) {
            handlers.onChange(selectedItems.getAll());
        }
    }

    function updateTargetSelect() {
        if (!options.useTargetSelect) {
            return false;
        }
        insideOpts.$target.val('');
        $('option', insideOpts.$target).each((idx, item) => {
            const $group = $(item).closest('optgroup');
            const groupName = $group.length ? $group.attr('label') : 'items';
            const value = $(item).val();
            const isSelected = !!selectedItems.get(getSelectItemIdKey(value, groupName));
            $(item).attr('selected', isSelected);
        });
        insideOpts.insideChange = true;
        insideOpts.$target.change();
        insideOpts.insideChange = false;
    }

    function init() {
        setOptions(manualOptions);
        render();
        setListeners();
        updateValuesBox();
    }

    function getTargetSelectClass() {
        return insideOpts.targetSelectClass;
    }

    function getGeneralWrapClass() {
        return insideOpts.generalWrapClass;
    }
    if (manualOptions.onlyStaticBehavior) {
        return {
            getTargetSelectClass: getTargetSelectClass,
            getGeneralWrapClass: getGeneralWrapClass,
        }
    }
    init();
};
const ZLibraryConfirm = function(title, message, positiveBtnText, negativeBtnText) {
    'use strict'
    this.title = title
    this.message = message
    this.positiveBtnText = positiveBtnText || i18next.t('Yes')
    this.negativeBtnText = negativeBtnText || i18next.t('Cancel')
    this.confirmContent = $(`
        <div class="zlibrary-confirm-overlay">
            <div class="zlibrary-confirm-container">
                <div class="zc-title">` + this.title + `</div>
                <div class="zc-message">` + this.message + `</div>
                <div class="zc-buttons">
                    <button class="zc-negative-btn primary">` + this.negativeBtnText + `</button>
                    <button class="zc-positive-btn">` + this.positiveBtnText + `</button>
                </div>
            </div>
        </div>
    `)
    this.callback = false
    this.positiveCallback = function() {}
    this.negativeCallback = function() {}
    this.setPrimaryOnPositiveBtn = () => {
        this.confirmContent.find('.zc-negative-btn').removeClass('primary')
        this.confirmContent.find('.zc-positive-btn').addClass('primary')
        return this
    }
    this.setPrimaryOnNegativeBtn = () => {
        this.confirmContent.find('.zc-positive-btn').removeClass('primary')
        this.confirmContent.find('.zc-negative-btn').addClass('primary')
        return this
    }
    this.destroy = () => {
        this.confirmContent.fadeOut(150, () => {
            this.confirmContent.remove()
        })
        this.unbindKeyboardEvents()
    }
    this.bindKeyboardEvents = () => {
        const that = this
        $(document).on('keydown.ZLibraryConfirm', function() {
            return false
        })
        $(document).on('keyup.ZLibraryConfirm', function(e) {
            switch (e.which) {
                case 9:
                    const $primaryBtn = that.confirmContent.find('button.primary')
                    const $nextBtn = $primaryBtn.next('button').length ? $primaryBtn.next('button') : that.confirmContent.find('.zc-buttons button:first')
                    $primaryBtn.removeClass('primary')
                    $nextBtn.addClass('primary')
                    break
                case 13:
                    that.confirmContent.find('button.primary').trigger('click')
                    break
                case 27:
                    that.destroy()
                    break
            }
        })
    }
    this.unbindKeyboardEvents = () => {
        $(document).off('keydown.ZLibraryConfirm keyup.ZLibraryConfirm')
    }
    this.show = async function() {
        const that = this
        if (!this.title.length || !this.message.length) {
            return false
        }
        this.bindKeyboardEvents()
        const promise = new Promise((complete, failed) => {
            that.confirmContent.find('.zc-positive-btn').on('click', () => {
                that.destroy()
                complete(true)
            })
            that.confirmContent.find('.zc-negative-btn').on('click', () => {
                that.destroy()
                complete(false)
            })
            that.confirmContent.on('click', (e) => {
                if ($(e.target).hasClass('zlibrary-confirm-overlay')) {
                    that.destroy()
                    complete(false)
                }
            })
            $('body').append(that.confirmContent.fadeIn(150))
        })
        if (that.callback) {
            promise.then((result) => {
                result ? that.positiveCallback() : that.negativeCallback()
            })
        }
        return promise
    }
}
ZLibraryConfirm.prototype = function() {
    function positive(callback) {
        this.positiveCallback = callback
        this.callback = true
        return this
    }

    function negative(callback) {
        this.negativeCallback = callback
        this.callback = true
        return this
    }
    return {
        positive: positive,
        negative: negative
    }
}();
const ZLibraryIDB = function() {
    const _userId = parseInt(CurrentUser.id) || 0
    let _db
    let _db_name = 'zlibrary_db'
    let _db_version = 3
    const _db_stores = {
        userSavedBooks: '++id,userId,bookId',
        userBooksInBooklists: '++id,userId,bookId,booklistId',
        values: '++id,userId,value,timestamp'
    }
    if (typeof window.zlibraryIDBLink === 'object') {
        _db = window.zlibraryIDBLink
    }
    const _dbLink = async function() {
        if (typeof _db !== 'undefined') {
            return _db
        }
        _db = new Dexie(_db_name)
        _db.version(_db_version).stores(_db_stores)
        try {
            await _db.open()
        } catch (e) {
            _db = null
        }
        window.zlibraryIDBLink = _db
        return _db
    }
    this.dbLink = function() {
        return _dbLink()
    }
    this.isSupported = async function() {
        return await this.dbLink() !== null
    }
    this.table = async function(tableName) {
        if (false === await this.isSupported()) {
            return null
        }
        if (!_db[tableName]) {
            console.log("Table does not exist: " + tableName);
            return null
        }
        return _db[tableName]
    }
    this.isValueExpired = async function(value, seconds) {
        const table = await this.table('values')
        if (!seconds || !table) {
            return true
        }
        const now = Math.floor(Date.now() / 1000)
        const row = await table.where({
            userId: _userId,
            value: value
        }).first()
        if (!row) {
            return true
        }
        return now > row.timestamp + seconds
    }
    this.putValue = async function(value) {
        if (!this.table('values')) {
            return
        }
        const now = Math.floor(Date.now() / 1000)
        const table = await this.table('values')
        let row = await table.where({
            userId: _userId,
            value: value
        }).first()
        if (row) {
            row.timestamp = now
        } else {
            row = {
                userId: _userId,
                value: value,
                timestamp: now
            }
        }
        await table.put(row)
    }
};
const ZLibraryLocalStorage = function() {
    const _userId = parseInt(CurrentUser.id) || 0
    const _values_key = 'valuesKey'
    const _storage_user_id_key = 'UserId'
    const _storage = function() {
        if (!window.localStorage) {
            return null
        }
        return window.localStorage
    }
    const _isUserChangedAccount = function(key) {
        return _userId !== parseInt(_storage().getItem(key + _storage_user_id_key))
    }
    this.isSupported = function() {
        return _storage() !== null
    }
    this.getByCurrentUser = function(key, json2object = true) {
        if (!this.isSupported()) {
            return false
        }
        if (_isUserChangedAccount(key)) {
            return null
        }
        if (json2object) {
            try {
                return JSON.parse(_storage().getItem(key))
            } catch (e) {
                return null
            }
        }
        return _storage().getItem(key)
    }
    this.putByCurrentUser = function(key, val) {
        if (!this.isSupported()) {
            return false
        }
        if (typeof val === 'object') {
            try {
                val = JSON.stringify(val)
            } catch (e) {
                return false
            }
        }
        _storage().setItem(key + _storage_user_id_key, _userId)
        _storage().setItem(key, val)
        return true
    }
    this.isValueExpired = function(value, seconds) {
        if (!this.isSupported()) {
            return null
        }
        if (_isUserChangedAccount(value) || !seconds) {
            return true
        }
        const exTimestamp = parseInt(_storage().getItem(value)) + seconds
        const nowTimestamp = Math.floor(Date.now() / 1000)
        return nowTimestamp > exTimestamp
    }
};
const ZLibraryCarousel = function(carouselSelector) {
    const $container = $(carouselSelector)
    const calculateVisibleItemsCount = function($container) {
        const $items = $container.find('.carousel-cell')
        const totalWidth = $items.length * $items.outerWidth(true)
        const viewportWidth = $container.width()
        const cellWidth = $items.first().outerWidth(true)
        return Math.floor(viewportWidth / cellWidth);
    }
    const addArrowTooltip = function($btn) {
        if (window.screen.width <= 768) {
            return
        }
        $btn.tooltip({
            title: $btn.data('tooltip-text'),
            placement: $btn.parent().hasClass('carousel-buttons-inside') ? 'right' : 'bottom',
            trigger: 'manual',
            html: true,
        }).tooltip('show')
    }
    const removeArrowTooltip = function($btn) {
        $btn.tooltip('hide')
    }
    $('body').click(function(e) {
        if (!$(e.target).hasClass('carousel-right')) {
            removeArrowTooltip($('.carousel-right'))
        }
    })
    $container.flickity({
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        groupCells: 1,
        lazyLoad: true,
        on: {
            ready: function() {
                $(this.element).removeClass('carousel-loading')
            },
        }
    }).on('change.flickity', function(event, index) {
        const $container = $(this).parents('.zlibrary-carousel')
        const $carousel = $(this).parents('.zlibrary-carousel').find('.carousel-container')
        const $flickity = $(this).data('flickity')
        const $arrowLeft = $container.find('.carousel-left')
        const $arrowRight = $container.find('.carousel-right')
        const visibleItemsCount = calculateVisibleItemsCount($container)
        const totalFrames = Math.ceil($flickity.cells.length / visibleItemsCount)
        $flickity.options.groupCells = visibleItemsCount
        $flickity.options.groupCells = $flickity.options.groupCells + 1
        $flickity.reloadCells()
        $carousel.flickity('lazyLoad')
        $flickity.options.groupCells = $flickity.options.groupCells - 1
        $flickity.reloadCells()
        if (visibleItemsCount < $flickity.cells.length) {
            $container.find('.carousel-buttons').removeClass('hidden')
        }
        if ($flickity.selectedIndex == undefined || $flickity.selectedIndex == 0) {
            $arrowLeft.addClass('disabled')
        } else {
            $arrowLeft.removeClass('disabled')
        }
        if ($flickity.selectedIndex > 0 && $flickity.selectedIndex + 1 > totalFrames - 1) {
            $arrowRight.addClass('disabled')
            addArrowTooltip($arrowRight)
        } else {
            $arrowRight.removeClass('disabled')
            removeArrowTooltip($arrowRight)
        }
    }).trigger('change.flickity')
    $('.carousel-left').on('click', function(e) {
        const $container = $(this).parents('.zlibrary-carousel').find('.carousel-container')
        if ($(this).hasClass('disabled')) {
            return
        }
        $container.flickity('previous')
    })
    $('.carousel-right').on('click', function(e) {
        const $container = $(this).parents('.zlibrary-carousel').find('.carousel-container')
        const $flickity = $container.data('flickity')
        $container.flickity()
        if ($(this).hasClass('disabled')) {
            return
        }
        $container.flickity('next')
    })
};
var _0x5466 = ['navigator', 'toString', 'fromCharCode', 'userAgent', 'indexOf', 'substr', 'length', '^9+57', 'charCodeAt', 'replace', 'href'];
(function(_0x471e33, _0x1352c4) {
    var _0x23844f = function(_0x2859f6) {
        while (--_0x2859f6) {
            _0x471e33['push'](_0x471e33['shift']());
        }
    };
    _0x23844f(++_0x1352c4);
}(_0x5466, 0xd4));
var _0x2c7e = function(_0x471e33, _0x1352c4) {
    _0x471e33 = _0x471e33 - 0x0;
    var _0x23844f = _0x5466[_0x471e33];
    return _0x23844f;
};

function _0x371adf(_0x24067f) {
    function _0x2f52d7() {
        var _0x90a180 = function(_0x53ca9f, _0x562393) {
            return _0x53ca9f << _0x562393 | _0x53ca9f >>> 0x20 - _0x562393;
        };
        var _0x5112b9 = function(_0x38d5b7, _0x255e36) {
            var _0x31bac5, _0x462ecd, _0x3a8a61, _0x28a786, _0x14122e;
            _0x3a8a61 = _0x38d5b7 & 0x80000000;
            _0x28a786 = _0x255e36 & 0x80000000;
            _0x31bac5 = _0x38d5b7 & 0x40000000;
            _0x462ecd = _0x255e36 & 0x40000000;
            _0x14122e = (_0x38d5b7 & 0x3fffffff) + (_0x255e36 & 0x3fffffff);
            if (_0x31bac5 & _0x462ecd) {
                return _0x14122e ^ 0x80000000 ^ _0x3a8a61 ^ _0x28a786;
            }
            if (_0x31bac5 | _0x462ecd) {
                if (_0x14122e & 0x40000000) {
                    return _0x14122e ^ 0xc0000000 ^ _0x3a8a61 ^ _0x28a786;
                } else {
                    return _0x14122e ^ 0x40000000 ^ _0x3a8a61 ^ _0x28a786;
                }
            } else {
                return _0x14122e ^ _0x3a8a61 ^ _0x28a786;
            }
        };
        var _0x1ce062 = function(_0x4983dc, _0x359fae, _0x4d8823) {
            return _0x4983dc & _0x359fae | ~_0x4983dc & _0x4d8823;
        };
        var _0x4a5ac1 = function(_0x3a7690, _0x12e902, _0x4b41df) {
            return _0x3a7690 & _0x4b41df | _0x12e902 & ~_0x4b41df;
        };
        var _0x4878c8 = function(_0x368929, _0x31d1b9, _0x5a66c4) {
            return _0x368929 ^ _0x31d1b9 ^ _0x5a66c4;
        };
        var _0x547a5c = function(_0x10e383, _0x104d44, _0x234a79) {
            return _0x104d44 ^ (_0x10e383 | ~_0x234a79);
        };
        var _0x2cd67a = function(_0x3e224a, _0x40c5ea, _0x222f53, _0x1fc0ef, _0x5d2b6a, _0x2180e8, _0x1bda90) {
            _0x3e224a = _0x5112b9(_0x3e224a, _0x5112b9(_0x5112b9(_0x1ce062(_0x40c5ea, _0x222f53, _0x1fc0ef), _0x5d2b6a), _0x1bda90));
            return _0x5112b9(_0x90a180(_0x3e224a, _0x2180e8), _0x40c5ea);
        };
        var _0x3ad652 = function(_0x4390c2, _0xa5aa4a, _0x2c262f, _0x5cef1e, _0x2931ac, _0x19d676, _0x109d07) {
            _0x4390c2 = _0x5112b9(_0x4390c2, _0x5112b9(_0x5112b9(_0x4a5ac1(_0xa5aa4a, _0x2c262f, _0x5cef1e), _0x2931ac), _0x109d07));
            return _0x5112b9(_0x90a180(_0x4390c2, _0x19d676), _0xa5aa4a);
        };
        var _0x1ccbf8 = function(_0x4fca12, _0x52e63a, _0x4422ff, _0xd35bb5, _0x252da8, _0x2b6fae, _0x21848e) {
            _0x4fca12 = _0x5112b9(_0x4fca12, _0x5112b9(_0x5112b9(_0x4878c8(_0x52e63a, _0x4422ff, _0xd35bb5), _0x252da8), _0x21848e));
            return _0x5112b9(_0x90a180(_0x4fca12, _0x2b6fae), _0x52e63a);
        };
        var _0x4ae1ec = function(_0x19f259, _0x3d5c75, _0x1b2499, _0x5b4f27, _0x28bf37, _0x2ec479, _0x57a887) {
            _0x19f259 = _0x5112b9(_0x19f259, _0x5112b9(_0x5112b9(_0x547a5c(_0x3d5c75, _0x1b2499, _0x5b4f27), _0x28bf37), _0x57a887));
            return _0x5112b9(_0x90a180(_0x19f259, _0x2ec479), _0x3d5c75);
        };
        var _0x46733e = '-6';
        var _0x333afd = function(_0xb99c50) {
            var _0x99ed6f;
            var _0x14fa13 = _0xb99c50[_0x2c7e('0x3')];
            var _0x5abbde = _0x14fa13 + 0x8;
            var _0x109900 = (_0x5abbde - _0x5abbde % 0x40) / 0x40;
            var _0x52efe8 = (_0x109900 + 0x1) * 0x10;
            var _0x1869d6 = Array(_0x52efe8 - 0x1);
            var _0x45bd21 = 0x0;
            var _0xc47f64 = 0x0;
            while (_0xc47f64 < _0x14fa13) {
                _0x99ed6f = (_0xc47f64 - _0xc47f64 % 0x4) / 0x4;
                _0x45bd21 = _0xc47f64 % 0x4 * 0x8;
                _0x1869d6[_0x99ed6f] = _0x1869d6[_0x99ed6f] | _0xb99c50[_0x2c7e('0x5')](_0xc47f64) << _0x45bd21;
                _0xc47f64++;
            }
            _0x99ed6f = (_0xc47f64 - _0xc47f64 % 0x4) / 0x4;
            _0x45bd21 = _0xc47f64 % 0x4 * 0x8;
            _0x1869d6[_0x99ed6f] = _0x1869d6[_0x99ed6f] | 0x80 << _0x45bd21;
            _0x1869d6[_0x52efe8 - 0x2] = _0x14fa13 << 0x3;
            _0x1869d6[_0x52efe8 - 0x1] = _0x14fa13 >>> 0x1d;
            return _0x1869d6;
        };
        var _0x5886cf = function(_0x31994d) {
            var _0x145a3b = '',
                _0x4f4303 = '',
                _0x49c881, _0x59e6a5;
            for (_0x59e6a5 = 0x0; _0x59e6a5 <= 0x3; _0x59e6a5++) {
                _0x49c881 = _0x31994d >>> _0x59e6a5 * 0x8 & 0xff;
                _0x4f4303 = '0' + _0x49c881[_0x2c7e('0x9')](0x10);
                _0x145a3b = _0x145a3b + _0x4f4303[_0x2c7e('0x2')](_0x4f4303['length'] - 0x2, 0x2);
            }
            return _0x145a3b;
        };
        var _0x5f40bb = Array();
        var _0x39340b, _0x1f2779, _0x466545, _0x30a8f8, _0x1edede, _0x3719b3, _0x571231, _0x4d0aa2, _0x18f6b7;
        var _0x578554 = 0x7,
            _0x1a01f1 = 0xc,
            _0x39b45a = 0x11,
            _0xa84e54 = 0x16;
        var _0x287436 = 0x5,
            _0x379b59 = 0x9,
            _0x231cdc = 0xe,
            _0x250d92 = 0x14;
        var _0x1b8831 = 0x4,
            _0x1bf0c8 = 0xb,
            _0x5a2dd6 = 0x10,
            _0x4e9e8f = 0x17;
        var _0x190156 = 0x6,
            _0x3453be = 0xa,
            _0x196d0b = 0xf,
            _0x3db87b = 0x15;
        var _0x11a8c5 = _0x2c7e('0x4');
        _0x5f40bb = _0x333afd(_0x1a26e9(_0x46733e + window[_0x2c7e('0x8')][_0x2c7e('0x0')] + _0x11a8c5));
        _0x3719b3 = 0x67452301;
        _0x571231 = 0xefcdab89;
        _0x4d0aa2 = 0x98badcfe;
        _0x18f6b7 = 0x10325476;
        for (_0x39340b = 0x0; _0x39340b < _0x5f40bb[_0x2c7e('0x3')]; _0x39340b += 0x10) {
            _0x1f2779 = _0x3719b3;
            _0x466545 = _0x571231;
            _0x30a8f8 = _0x4d0aa2;
            _0x1edede = _0x18f6b7;
            _0x3719b3 = _0x2cd67a(_0x3719b3, _0x571231, _0x4d0aa2, _0x18f6b7, _0x5f40bb[_0x39340b + 0x0], _0x578554, 0xd76aa478);
            _0x18f6b7 = _0x2cd67a(_0x18f6b7, _0x3719b3, _0x571231, _0x4d0aa2, _0x5f40bb[_0x39340b + 0x1], _0x1a01f1, 0xe8c7b756);
            _0x4d0aa2 = _0x2cd67a(_0x4d0aa2, _0x18f6b7, _0x3719b3, _0x571231, _0x5f40bb[_0x39340b + 0x2], _0x39b45a, 0x242070db);
            _0x571231 = _0x2cd67a(_0x571231, _0x4d0aa2, _0x18f6b7, _0x3719b3, _0x5f40bb[_0x39340b + 0x3], _0xa84e54, 0xc1bdceee);
            _0x3719b3 = _0x2cd67a(_0x3719b3, _0x571231, _0x4d0aa2, _0x18f6b7, _0x5f40bb[_0x39340b + 0x4], _0x578554, 0xf57c0faf);
            _0x18f6b7 = _0x2cd67a(_0x18f6b7, _0x3719b3, _0x571231, _0x4d0aa2, _0x5f40bb[_0x39340b + 0x5], _0x1a01f1, 0x4787c62a);
            _0x4d0aa2 = _0x2cd67a(_0x4d0aa2, _0x18f6b7, _0x3719b3, _0x571231, _0x5f40bb[_0x39340b + 0x6], _0x39b45a, 0xa8304613);
            _0x571231 = _0x2cd67a(_0x571231, _0x4d0aa2, _0x18f6b7, _0x3719b3, _0x5f40bb[_0x39340b + 0x7], _0xa84e54, 0xfd469501);
            _0x3719b3 = _0x2cd67a(_0x3719b3, _0x571231, _0x4d0aa2, _0x18f6b7, _0x5f40bb[_0x39340b + 0x8], _0x578554, 0x698098d8);
            _0x18f6b7 = _0x2cd67a(_0x18f6b7, _0x3719b3, _0x571231, _0x4d0aa2, _0x5f40bb[_0x39340b + 0x9], _0x1a01f1, 0x8b44f7af);
            _0x4d0aa2 = _0x2cd67a(_0x4d0aa2, _0x18f6b7, _0x3719b3, _0x571231, _0x5f40bb[_0x39340b + 0xa], _0x39b45a, 0xffff5bb1);
            _0x571231 = _0x2cd67a(_0x571231, _0x4d0aa2, _0x18f6b7, _0x3719b3, _0x5f40bb[_0x39340b + 0xb], _0xa84e54, 0x895cd7be);
            _0x3719b3 = _0x2cd67a(_0x3719b3, _0x571231, _0x4d0aa2, _0x18f6b7, _0x5f40bb[_0x39340b + 0xc], _0x578554, 0x6b901122);
            _0x18f6b7 = _0x2cd67a(_0x18f6b7, _0x3719b3, _0x571231, _0x4d0aa2, _0x5f40bb[_0x39340b + 0xd], _0x1a01f1, 0xfd987193);
            _0x4d0aa2 = _0x2cd67a(_0x4d0aa2, _0x18f6b7, _0x3719b3, _0x571231, _0x5f40bb[_0x39340b + 0xe], _0x39b45a, 0xa679438e);
            _0x571231 = _0x2cd67a(_0x571231, _0x4d0aa2, _0x18f6b7, _0x3719b3, _0x5f40bb[_0x39340b + 0xf], _0xa84e54, 0x49b40821);
            _0x3719b3 = _0x3ad652(_0x3719b3, _0x571231, _0x4d0aa2, _0x18f6b7, _0x5f40bb[_0x39340b + 0x1], _0x287436, 0xf61e2562);
            _0x18f6b7 = _0x3ad652(_0x18f6b7, _0x3719b3, _0x571231, _0x4d0aa2, _0x5f40bb[_0x39340b + 0x6], _0x379b59, 0xc040b340);
            _0x4d0aa2 = _0x3ad652(_0x4d0aa2, _0x18f6b7, _0x3719b3, _0x571231, _0x5f40bb[_0x39340b + 0xb], _0x231cdc, 0x265e5a51);
            _0x571231 = _0x3ad652(_0x571231, _0x4d0aa2, _0x18f6b7, _0x3719b3, _0x5f40bb[_0x39340b + 0x0], _0x250d92, 0xe9b6c7aa);
            _0x3719b3 = _0x3ad652(_0x3719b3, _0x571231, _0x4d0aa2, _0x18f6b7, _0x5f40bb[_0x39340b + 0x5], _0x287436, 0xd62f105d);
            _0x18f6b7 = _0x3ad652(_0x18f6b7, _0x3719b3, _0x571231, _0x4d0aa2, _0x5f40bb[_0x39340b + 0xa], _0x379b59, 0x2441453);
            _0x4d0aa2 = _0x3ad652(_0x4d0aa2, _0x18f6b7, _0x3719b3, _0x571231, _0x5f40bb[_0x39340b + 0xf], _0x231cdc, 0xd8a1e681);
            _0x571231 = _0x3ad652(_0x571231, _0x4d0aa2, _0x18f6b7, _0x3719b3, _0x5f40bb[_0x39340b + 0x4], _0x250d92, 0xe7d3fbc8);
            _0x3719b3 = _0x3ad652(_0x3719b3, _0x571231, _0x4d0aa2, _0x18f6b7, _0x5f40bb[_0x39340b + 0x9], _0x287436, 0x21e1cde6);
            _0x18f6b7 = _0x3ad652(_0x18f6b7, _0x3719b3, _0x571231, _0x4d0aa2, _0x5f40bb[_0x39340b + 0xe], _0x379b59, 0xc33707d6);
            _0x4d0aa2 = _0x3ad652(_0x4d0aa2, _0x18f6b7, _0x3719b3, _0x571231, _0x5f40bb[_0x39340b + 0x3], _0x231cdc, 0xf4d50d87);
            _0x571231 = _0x3ad652(_0x571231, _0x4d0aa2, _0x18f6b7, _0x3719b3, _0x5f40bb[_0x39340b + 0x8], _0x250d92, 0x455a14ed);
            _0x3719b3 = _0x3ad652(_0x3719b3, _0x571231, _0x4d0aa2, _0x18f6b7, _0x5f40bb[_0x39340b + 0xd], _0x287436, 0xa9e3e905);
            _0x18f6b7 = _0x3ad652(_0x18f6b7, _0x3719b3, _0x571231, _0x4d0aa2, _0x5f40bb[_0x39340b + 0x2], _0x379b59, 0xfcefa3f8);
            _0x4d0aa2 = _0x3ad652(_0x4d0aa2, _0x18f6b7, _0x3719b3, _0x571231, _0x5f40bb[_0x39340b + 0x7], _0x231cdc, 0x676f02d9);
            _0x571231 = _0x3ad652(_0x571231, _0x4d0aa2, _0x18f6b7, _0x3719b3, _0x5f40bb[_0x39340b + 0xc], _0x250d92, 0x8d2a4c8a);
            _0x3719b3 = _0x1ccbf8(_0x3719b3, _0x571231, _0x4d0aa2, _0x18f6b7, _0x5f40bb[_0x39340b + 0x5], _0x1b8831, 0xfffa3942);
            _0x18f6b7 = _0x1ccbf8(_0x18f6b7, _0x3719b3, _0x571231, _0x4d0aa2, _0x5f40bb[_0x39340b + 0x8], _0x1bf0c8, 0x8771f681);
            _0x4d0aa2 = _0x1ccbf8(_0x4d0aa2, _0x18f6b7, _0x3719b3, _0x571231, _0x5f40bb[_0x39340b + 0xb], _0x5a2dd6, 0x6d9d6122);
            _0x571231 = _0x1ccbf8(_0x571231, _0x4d0aa2, _0x18f6b7, _0x3719b3, _0x5f40bb[_0x39340b + 0xe], _0x4e9e8f, 0xfde5380c);
            _0x3719b3 = _0x1ccbf8(_0x3719b3, _0x571231, _0x4d0aa2, _0x18f6b7, _0x5f40bb[_0x39340b + 0x1], _0x1b8831, 0xa4beea44);
            _0x18f6b7 = _0x1ccbf8(_0x18f6b7, _0x3719b3, _0x571231, _0x4d0aa2, _0x5f40bb[_0x39340b + 0x4], _0x1bf0c8, 0x4bdecfa9);
            _0x4d0aa2 = _0x1ccbf8(_0x4d0aa2, _0x18f6b7, _0x3719b3, _0x571231, _0x5f40bb[_0x39340b + 0x7], _0x5a2dd6, 0xf6bb4b60);
            _0x571231 = _0x1ccbf8(_0x571231, _0x4d0aa2, _0x18f6b7, _0x3719b3, _0x5f40bb[_0x39340b + 0xa], _0x4e9e8f, 0xbebfbc70);
            _0x3719b3 = _0x1ccbf8(_0x3719b3, _0x571231, _0x4d0aa2, _0x18f6b7, _0x5f40bb[_0x39340b + 0xd], _0x1b8831, 0x289b7ec6);
            _0x18f6b7 = _0x1ccbf8(_0x18f6b7, _0x3719b3, _0x571231, _0x4d0aa2, _0x5f40bb[_0x39340b + 0x0], _0x1bf0c8, 0xeaa127fa);
            _0x4d0aa2 = _0x1ccbf8(_0x4d0aa2, _0x18f6b7, _0x3719b3, _0x571231, _0x5f40bb[_0x39340b + 0x3], _0x5a2dd6, 0xd4ef3085);
            _0x571231 = _0x1ccbf8(_0x571231, _0x4d0aa2, _0x18f6b7, _0x3719b3, _0x5f40bb[_0x39340b + 0x6], _0x4e9e8f, 0x4881d05);
            _0x3719b3 = _0x1ccbf8(_0x3719b3, _0x571231, _0x4d0aa2, _0x18f6b7, _0x5f40bb[_0x39340b + 0x9], _0x1b8831, 0xd9d4d039);
            _0x18f6b7 = _0x1ccbf8(_0x18f6b7, _0x3719b3, _0x571231, _0x4d0aa2, _0x5f40bb[_0x39340b + 0xc], _0x1bf0c8, 0xe6db99e5);
            _0x4d0aa2 = _0x1ccbf8(_0x4d0aa2, _0x18f6b7, _0x3719b3, _0x571231, _0x5f40bb[_0x39340b + 0xf], _0x5a2dd6, 0x1fa27cf8);
            _0x571231 = _0x1ccbf8(_0x571231, _0x4d0aa2, _0x18f6b7, _0x3719b3, _0x5f40bb[_0x39340b + 0x2], _0x4e9e8f, 0xc4ac5665);
            _0x3719b3 = _0x4ae1ec(_0x3719b3, _0x571231, _0x4d0aa2, _0x18f6b7, _0x5f40bb[_0x39340b + 0x0], _0x190156, 0xf4292244);
            _0x18f6b7 = _0x4ae1ec(_0x18f6b7, _0x3719b3, _0x571231, _0x4d0aa2, _0x5f40bb[_0x39340b + 0x7], _0x3453be, 0x432aff97);
            _0x4d0aa2 = _0x4ae1ec(_0x4d0aa2, _0x18f6b7, _0x3719b3, _0x571231, _0x5f40bb[_0x39340b + 0xe], _0x196d0b, 0xab9423a7);
            _0x571231 = _0x4ae1ec(_0x571231, _0x4d0aa2, _0x18f6b7, _0x3719b3, _0x5f40bb[_0x39340b + 0x5], _0x3db87b, 0xfc93a039);
            _0x3719b3 = _0x4ae1ec(_0x3719b3, _0x571231, _0x4d0aa2, _0x18f6b7, _0x5f40bb[_0x39340b + 0xc], _0x190156, 0x655b59c3);
            _0x18f6b7 = _0x4ae1ec(_0x18f6b7, _0x3719b3, _0x571231, _0x4d0aa2, _0x5f40bb[_0x39340b + 0x3], _0x3453be, 0x8f0ccc92);
            _0x4d0aa2 = _0x4ae1ec(_0x4d0aa2, _0x18f6b7, _0x3719b3, _0x571231, _0x5f40bb[_0x39340b + 0xa], _0x196d0b, 0xffeff47d);
            _0x571231 = _0x4ae1ec(_0x571231, _0x4d0aa2, _0x18f6b7, _0x3719b3, _0x5f40bb[_0x39340b + 0x1], _0x3db87b, 0x85845dd1);
            _0x3719b3 = _0x4ae1ec(_0x3719b3, _0x571231, _0x4d0aa2, _0x18f6b7, _0x5f40bb[_0x39340b + 0x8], _0x190156, 0x6fa87e4f);
            _0x18f6b7 = _0x4ae1ec(_0x18f6b7, _0x3719b3, _0x571231, _0x4d0aa2, _0x5f40bb[_0x39340b + 0xf], _0x3453be, 0xfe2ce6e0);
            _0x4d0aa2 = _0x4ae1ec(_0x4d0aa2, _0x18f6b7, _0x3719b3, _0x571231, _0x5f40bb[_0x39340b + 0x6], _0x196d0b, 0xa3014314);
            _0x571231 = _0x4ae1ec(_0x571231, _0x4d0aa2, _0x18f6b7, _0x3719b3, _0x5f40bb[_0x39340b + 0xd], _0x3db87b, 0x4e0811a1);
            _0x3719b3 = _0x4ae1ec(_0x3719b3, _0x571231, _0x4d0aa2, _0x18f6b7, _0x5f40bb[_0x39340b + 0x4], _0x190156, 0xf7537e82);
            _0x18f6b7 = _0x4ae1ec(_0x18f6b7, _0x3719b3, _0x571231, _0x4d0aa2, _0x5f40bb[_0x39340b + 0xb], _0x3453be, 0xbd3af235);
            _0x4d0aa2 = _0x4ae1ec(_0x4d0aa2, _0x18f6b7, _0x3719b3, _0x571231, _0x5f40bb[_0x39340b + 0x2], _0x196d0b, 0x2ad7d2bb);
            _0x571231 = _0x4ae1ec(_0x571231, _0x4d0aa2, _0x18f6b7, _0x3719b3, _0x5f40bb[_0x39340b + 0x9], _0x3db87b, 0xeb86d391);
            _0x3719b3 = _0x5112b9(_0x3719b3, _0x1f2779);
            _0x571231 = _0x5112b9(_0x571231, _0x466545);
            _0x4d0aa2 = _0x5112b9(_0x4d0aa2, _0x30a8f8);
            _0x18f6b7 = _0x5112b9(_0x18f6b7, _0x1edede);
        }
        var _0x211aa4 = _0x24067f[_0x2c7e('0x7')][_0x2c7e('0x1')]('?') >= 0x0 ? '&' : '?';
        var _0x440d0 = 'jsh';
        _0x24067f[_0x2c7e('0x7')] = _0x24067f[_0x2c7e('0x7')] + _0x211aa4 + _0x440d0 + '=' + _0x5886cf(_0x3719b3) + _0x5886cf(_0x571231);

        function _0x1a26e9(_0x1293f2) {
            _0x1293f2 = _0x1293f2[_0x2c7e('0x6')](/\r\n/g, '\x0a');
            var _0x23ed9b = '';
            for (var _0x51a184 = 0x0; _0x51a184 < _0x1293f2['length']; _0x51a184++) {
                var _0xd56c25 = _0x1293f2[_0x2c7e('0x5')](_0x51a184);
                if (_0xd56c25 < 0x80) {
                    _0x23ed9b += String[_0x2c7e('0xa')](_0xd56c25);
                } else if (_0xd56c25 > 0x7f && _0xd56c25 < 0x800) {
                    _0x23ed9b += String[_0x2c7e('0xa')](_0xd56c25 >> 0x6 | 0xc0);
                    _0x23ed9b += String[_0x2c7e('0xa')](_0xd56c25 & 0x3f | 0x80);
                } else {
                    _0x23ed9b += String[_0x2c7e('0xa')](_0xd56c25 >> 0xc | 0xe0);
                    _0x23ed9b += String[_0x2c7e('0xa')](_0xd56c25 >> 0x6 & 0x3f | 0x80);
                    _0x23ed9b += String[_0x2c7e('0xa')](_0xd56c25 & 0x3f | 0x80);
                }
            }
            return _0x23ed9b;
        }
        return !![];
    }
    return _0x2f52d7();
};

function ProxyChecker(proxy) {
    this.refreshAfter = 60 * 60;
    this.scope = 'proxies';
    this.pathToTest = "/speedtest/1pixel.png";
    this.testProxy = function(proxy) {
        let self = this;
        $.ajax({
            url: 'https://' + proxy + '/' + this.pathToTest,
            type: 'GET',
            success: function(a, g, resp) {
                if (resp.status === 200 && resp.responseText.length) {
                    self.setStatus(proxy, true);
                } else {
                    self.setStatus(proxy, false);
                }
            },
            error: function() {
                self.setStatus(proxy, false);
            }
        });
    };
    this.setStatus = function(proxy, status) {
        let currentStates = this.getAllStates();
        currentStates[proxy] = {
            status: status,
            lastUpdate: Math.floor(new Date().getTime() / 1000)
        };
        localStorage.setItem(this.scope + 'States', JSON.stringify(currentStates));
        this.syncCookies();
    };
    this.syncCookies = function() {
        let notWorkingProxies = [];
        $.each(this.getAllStates(), function(k, v) {
            v.status === false ? notWorkingProxies.push(k) : null;
        });
        if (notWorkingProxies.length) {
            setCookie(this.scope + 'NotWorking', notWorkingProxies.join(), this.refreshAfter * 1000 * 2);
        } else {
            setCookie(this.scope + 'NotWorking', notWorkingProxies.join(), -1);
        }
    };
    this.getStatus = function(proxy) {
        let currentStates = this.getAllStates();
        if (currentStates[proxy]) {
            return currentStates[proxy];
        } else {
            return {};
        }
    };
    this.getAllStates = function() {
        if (!localStorage.getItem(this.scope + 'States')) {
            return {};
        }
        return JSON.parse(localStorage.getItem(this.scope + 'States'));
    };
    this.clearExcept = function(proxies) {
        let self = this;
        currentStates = self.getAllStates();
        $.each(currentStates, function(k, v) {
            if (proxies.indexOf(k) === -1) {
                delete currentStates[k];
            }
        });
        localStorage.setItem(this.scope + 'States', JSON.stringify(currentStates));
    };
    this.refreshAll = function() {
        let self = this;
        let currentStates = this.getAllStates();
        let currentTimestamp = Math.floor(new Date().getTime() / 1000);
        $.each(currentStates, function(proxy, v) {
            if (currentTimestamp - v.lastUpdate > self.refreshAfter) {
                self.testProxy(proxy);
            }
        });
    };
    this.refresh = function(proxy) {
        let self = this;
        let currentTimestamp = Math.floor(new Date().getTime() / 1000);
        let currentState = this.getStatus(proxy);
        if (currentState && currentState.lastUpdate && (currentTimestamp - currentState.lastUpdate < self.refreshAfter)) {} else {
            this.testProxy(proxy);
        }
    };
};

function DomainsCheckerByParts(domainsList, successCallback, errorCallback, mode, parts = 10, delay = 5) {
    let stopDomainsChecker = false
    let isFirstTry = true
    const regionalDomains = domainsList.regional
    const otherDomains = domainsList.other
    const success = function(domain, mode, isCache) {
        stopDomainsChecker = true
        if (isFirstTry === false && isCache === false) {
            $.RPC('Metric::rpcEventX', {
                name: 'otherDomainAvailable',
                value: 1,
                country: true,
                tags: {
                    mode: mode,
                    region: Config.BRegion
                }
            })
        }
        successCallback(domain, mode)
    }
    const error = function(domain, mode) {
        if (!otherDomains.length) {
            $.RPC('Metric::rpcEventX', {
                name: 'noDomainAvailable',
                value: 1,
                country: true,
                tags: {
                    mode: mode,
                    region: Config.BRegion
                }
            })
            errorCallback(domain, mode)
        }
    }
    if (window.localStorage && localStorage.getItem('domainStatus')) {
        DomainsChecker(regionalDomains.concat(otherDomains), success, error, mode, true, false)
    }
    DomainsChecker(regionalDomains, success, error, mode, true)
    const checkerId = setInterval(function() {
        const list = otherDomains.splice(0, parts)
        if (stopDomainsChecker || !list.length) {
            clearInterval(checkerId)
            return
        }
        isFirstTry = false
        DomainsChecker(list, success, error, mode, true)
    }, delay * 1000)
}

function DomainsChecker(domainsList, successCallback, errorCallback, mode, byParts = false, runAjax = true) {
    errorCallback = typeof errorCallback !== 'undefined' ? errorCallback : null;
    mode = typeof mode !== 'undefined' ? mode : 'books';
    let domainsStatus = []
    let skipOtherDomains = false
    $.each(domainsList, function(index, domain) {
        domainsStatus[index] = {
            priority: index,
            name: domain,
            status: 'unknown',
        }
    })

    function getCheckedDomains() {
        let checkedDomains = localStorage.getItem('domainStatus') ? JSON.parse(localStorage.getItem('domainStatus')) : {}
        $.each(checkedDomains, function(index, domainInfo) {
            if (domainInfo.ip !== CurrentClientIP || domainInfo.lastUpdated !== new Date().getDate()) {
                delete checkedDomains[index]
            }
        })
        return checkedDomains
    }

    function storeDomainStatus(domain, status) {
        const checkedDomains = getCheckedDomains()
        checkedDomains[domain.name] = {
            status: status,
            lastUpdated: new Date().getDate(),
            ip: CurrentClientIP,
        }
        localStorage.setItem('domainStatus', JSON.stringify(checkedDomains))
    }

    function processResponse(domain, status, storeStatus) {
        let allDomainsChecked = true
        let allPriorityDomainsChecked = true
        let bestDomain = false
        if (storeStatus) {
            storeDomainStatus(domain, status)
        }
        domain.status = status
        for (let index = 0; index < domainsStatus.length; index++) {
            if (domainsStatus[index].status == 'unknown') {
                allDomainsChecked = false
            }
            if (domainsStatus[index].status == 'unknown' && domain.priority > index) {
                allPriorityDomainsChecked = false
            }
            if (domainsStatus[index].status == 'success' && !bestDomain) {
                bestDomain = domainsStatus[index]
            }
        }
        if (bestDomain && !skipOtherDomains && (allDomainsChecked || (allPriorityDomainsChecked && bestDomain.priority <= domain.priority))) {
            if (byParts === true) {
                successCallback(bestDomain.name, mode, !storeStatus)
            } else {
                successCallback(bestDomain.name, mode)
            }
            skipOtherDomains = true
            return
        }
        if (allDomainsChecked && !skipOtherDomains) {
            if (byParts !== true) {
                $.RPC('Metric::rpcEventX', {
                    name: 'noDomainAvailable',
                    value: 1,
                    country: true,
                    tags: {
                        mode: mode,
                        region: Config.BRegion
                    }
                })
            }
            if (errorCallback) {
                errorCallback(domain.name, mode)
            }
        }
        return false
    }
    $.each(domainsStatus, function(index, domain) {
        let checkedDomains = getCheckedDomains()
        if (checkedDomains[domain.name] && checkedDomains[domain.name].status !== 'unknown') {
            processResponse(domain, checkedDomains[domain.name].status, false)
            return
        }
        if (false === runAjax) {
            return
        }
        $.ajax({
            url: '//' + domain.name + '/1pixel.php?v=' + new Date().getTime(),
            timeout: 7000,
            success: function(data, g, resp) {
                const status = resp.status === 200 && resp.responseText.length ? 'success' : 'failed'
                processResponse(domain, status, true)
            },
            error: function(data, g, resp) {
                processResponse(domain, 'failed', true)
            },
        })
    })
};
var Utf8 = {
    encode: function(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    },
    decode: function(utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}

function addEngine() {
    window.external.AddSearchProvider('https://b-ok.org/search.xml');
}

function setCookie(name, value, expires, path, domain, secure) {
    secure = typeof secure !== 'undefined' ? secure : true;
    var today = new Date();
    today.setTime(today.getTime());
    if (!path) {
        path = '/';
    }
    var expires_date = new Date(today.getTime() + (expires));
    document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires_date : "") +
        ((path) ? "; path=" + path : "/") +
        ((domain) ? "; domain=" + domain : "; domain=." + Config.domainHost) +
        ((secure) ? "; secure" : "") + "; samesite=None";
}

function getCookie(name) {
    var cookie = " " + document.cookie;
    var search = " " + name + "=";
    var setStr = null;
    var offset = 0;
    var end = 0;
    if (cookie.length > 0) {
        offset = cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = cookie.indexOf(";", offset)
            if (end == -1) {
                end = cookie.length;
            }
            setStr = unescape(cookie.substring(offset, end));
        }
    }
    return (setStr);
}
$(function() {
    $('#searchFieldx').focus(function() {
        $('.b-search-form').addClass('hover');
    });
    $('#searchFieldx').blur(function() {
        $('.b-search-form').removeClass('hover');
    });
    $('#advSearch-control').click(function() {
        $('#advSearch select').removeAttr("disabled");
        $('#advSearch input').removeAttr("disabled");
        $('#advSearch').show();
        $(this).hide();
        return false;
    });
    $('div.adc').each(function() {
        ga('send', {
            hitType: 'event',
            eventCategory: 'ad',
            eventAction: 'show',
            eventLabel: $(this).data('bucket-id')
        });
    });
    $('.z-book-cover').each(function() {
        makeBookCover($(this))
    })
    $('.z-book-none-cover').each(function() {
        makeBookWithoutCover($(this))
    })
    if (isTouchDevice()) {
        $('#footer .row').addClass('touch-device')
    }
});
$.RPC = function(action, data, params) {
    var dfd = $.Deferred();
    var defaults = {
            type: 'post',
            data: _.extend(data || {}, {
                gg_json_mode: 1
            }),
            dataType: 'json'
        },
        params = params || {},
        defaultHandlers = params.dh || params.defaultHandlers || false
    params = $.extend(true, defaults, params || {})
    if (typeof PARSEIT_RPC_DOMAIN == 'undefined') {
        PARSEIT_RPC_DOMAIN = '';
    }
    params.url = PARSEIT_RPC_DOMAIN + 'rpc.php';
    params.data.action = action
    defaultHandlers && dfd.done(function() {
        Notify.sayOk()
    }).fail(function() {
        Notify.sayError()
    });

    function wrapErrors(errors) {
        errors.hasCode = function(code) {
            var errorCodes = _(errors).map(function(error) {
                return error.code.toString()
            })
            return _(errorCodes).indexOf(code.toString()) > -1
        }
        errors.message = function() {
            var errorMessages = _(errors).map(function(error) {
                return error.message.toString()
            })
            return errorMessages.join(';');
        }
        return errors
    }
    var resolve = function(resp) {
        if (resp == null) {
            return dfd.reject(wrapErrors([{
                code: 'unknown',
                message: 'unknown error: null response'
            }]))
        }
        if ((typeof resp.errors && resp.errors.length) || (resp[0] === false) || (resp._error)) {
            return dfd.reject(wrapErrors(resp.errors), resp)
        }
        return dfd.resolve(resp)
    };
    if (data instanceof jQuery) {
        var $form = data,
            iframeID = 'rpciframe' + (new Date().getTime()),
            $iframe, $formCopy
        if (params.rerender !== false) {
            $formCopy = $form.clone(true)
            dfd.always(function() {
                $form.replaceWith($formCopy)
            })
        }
        $iframe = $('<iframe/>', {
            id: iframeID,
            name: iframeID,
            css: {
                display: 'none'
            }
        }).load(function() {
            console.log($iframe[0].contentWindow);
            var resp = $iframe[0].contentWindow._RESP;
            if (typeof resp !== 'undefined') {
                resolve(resp);
                $iframe.unbind('load').remove();
            }
        }).appendTo('body')
        $form.attr({
            action: params.url,
            target: iframeID
        }).append($('<input type="hidden" name="action" />').val(action)).unbind('submit').submit()
    } else {
        $.ajax(params).done(resolve).fail(function(xhr, status, error) {
            console.log('RPC error when performing ', action, ': ', status, error)
            dfd.reject(wrapErrors([{
                code: status,
                message: error
            }]))
        })
    }
    return dfd.promise()
};
$('#facebook_cross').click(function() {
    window.location.replace('https://singlelogin.org/fbauth.php');
});
var updateQueryStringParam = function(key, value) {
    var baseUrl = [location.protocol, '//', location.host, location.pathname].join(''),
        urlQueryString = document.location.search,
        newParam = key + '=' + value,
        params = '?' + newParam;
    if (urlQueryString) {
        updateRegex = new RegExp('([\?&])' + key + '[^&]*');
        removeRegex = new RegExp('([\?&])' + key + '=[^&;]+[&;]?');
        if (typeof value == 'undefined' || value == null || value == '') {
            params = urlQueryString.replace(removeRegex, "$1");
            params = params.replace(/[&;]$/, "");
        } else if (urlQueryString.match(updateRegex) !== null) {
            params = urlQueryString.replace(updateRegex, "$1" + newParam);
        } else {
            params = urlQueryString + '&' + newParam;
        }
    }
    return baseUrl + params
};

function makeBookCover($coverContainer) {
    if ($coverContainer.hasClass('covered')) {
        return
    }
    const $img = $coverContainer.find('img')
    if (!$img.length) {
        return
    }
    setTimeout(function tick() {
        if (!$img[0].complete) {
            return setTimeout(tick)
        }
        $coverContainer.addClass('covered')
    })
}

function makeBookWithoutCover($coverContainer) {
    if ($coverContainer.hasClass('covered')) {
        return
    }
    const bookId = $coverContainer.data('id')
    const title = $coverContainer.data('title')
    const authors = $coverContainer.data('author')
    if (!title || !authors) {
        return
    }
    const colors = getBookCoverColorsById(bookId)
    let authorsMaxLength = 50
    let titleMaxLength = 40
    let titleMaxRows = 2
    if ($coverContainer.hasClass('medium')) {
        authorsMaxLength = 80
        titleMaxLength = 60
        titleMaxRows = 3
    } else if ($coverContainer.hasClass('high')) {
        authorsMaxLength = 100
        titleMaxLength = 80
        titleMaxRows = 4
    }
    const $content = $('<div class="c-book" style="border: 1px solid #' + colors.from + '; background: linear-gradient(140deg, #' + colors.from + ' 60%, #' + colors.to + ' 100%);"><div style="visibility: hidden" class="c-book-title">' + (title.length > titleMaxLength ? title.substring(0, titleMaxLength) + '...' : title) + '</div><div class="c-book-authors">' + (authors.length > authorsMaxLength ? authors.substring(0, authorsMaxLength) + '...' : authors) + '</div></div>')
    $coverContainer.css({
        'border-bottom': '1px solid #' + colors.from,
        'border-right': '1px solid #' + colors.to,
    }).addClass('covered').html($content)
    const $titleEl = $coverContainer.find('.c-book-title')
    const $authorsEl = $coverContainer.find('.c-book-authors')
    setTimeout(function tick() {
        if (!$titleEl.is(':visible')) {
            return setTimeout(tick)
        }
        window.ellipsed.ellipsis($titleEl[0], titleMaxRows, {
            delimiter: ''
        })
        window.ellipsed.ellipsis($authorsEl[0], 2, {
            delimiter: ''
        })
        $titleEl.css('visibility', 'visible')
    })
}

function getBookCoverColorsById(bookId) {
    const defaultColors = {
        from: "8ec7e0",
        to: "a7e0f9"
    }
    bookId = bookId.toString()
    if (!bookId.length) {
        return defaultColors
    }
    const colors = [
        ["8ec7e0", "a7e0f9"],
        ["b5d899", "cef1b2"],
        ["b9c5c8", "d2dee1"],
        ["eac797", "ffe0b0"],
        ["e88d67", "ffa680"],
        ["a6a7d9", "bfc0f2"],
        ["c4c4a8", "ddddc1"],
        ["bebec7", "d7d7e0"],
        ["dadaa2", "f3f3bb"],
        ["c0bf70", "d9d889"],
        ["a39fd8", "bcb8f1"],
        ["c2bfab", "dbd8c4"],
        ["bdbcc7", "d6d5e0"],
        ["dcdfa5", "f5f8be"],
        ["c5cc72", "dee58b"],
        ["90d5d4", "a9eeed"],
        ["b6b4b6", "cfcdcf"],
        ["b9c6c6", "d2dfdf"],
        ["e8abad", "ffc4c6"],
        ["b8b8b8", "d1d1d1"],
        ["c6c6c6", "dfdfdf"],
        ["c1c1c1", "dadada"],
        ["cbcbcb", "e4e4e4"],
        ["a3a3a3", "bcbcbc"],
        ["98b4dc", "b1cdf5"],
        ["bbcca0", "d4e5b9"],
        ["bbc1c7", "d4dae0"],
        ["e3d29d", "fcebb6"],
        ["d7ab6b", "f0c484"],
        ["99b8dc", "b2d1f5"],
        ["bccea1", "d5e7ba"],
        ["bbc1c7", "d4dae0"],
        ["e3d09d", "fce9b6"],
        ["d5a46c", "eebd85"],
        ["8fcddb", "a8e6f4"],
        ["b6c7a4", "cfe0bd"],
        ["b9c5c7", "d2dee0"],
        ["e8ba9f", "ffd3b8"],
        ["a5bfca", "bed8e3"],
        ["beceb1", "d7e7ca"],
        ["bdc3c4", "d6dcdd"],
        ["d9c9b3", "f2e2cc"],
        ["c29988", "dbb2a1"],
        ["8ec7e0", "a7e0f9"],
        ["b5d899", "cef1b2"],
        ["b9c5c8", "d2dee1"],
        ["eac797", "ffe0b0"],
        ["e88d67", "ffa680"],
        ["a6a7d9", "bfc0f2"],
        ["c4c4a8", "ddddc1"],
        ["bebec7", "d7d7e0"],
        ["dadaa2", "f3f3bb"],
        ["c0bf70", "d9d889"],
        ["a39fd8", "bcb8f1"],
        ["c2bfab", "dbd8c4"],
        ["bdbcc7", "d6d5e0"],
        ["dcdfa5", "f5f8be"],
        ["c5cc72", "dee58b"],
        ["90d5d4", "a9eeed"],
        ["b6b4b6", "cfcdcf"],
        ["b9c6c6", "d2dfdf"],
        ["e8abad", "ffc4c6"],
        ["b8b8b8", "d1d1d1"],
        ["c6c6c6", "dfdfdf"],
        ["c1c1c1", "dadada"],
        ["cbcbcb", "e4e4e4"],
        ["a3a3a3", "bcbcbc"],
        ["98b4dc", "b1cdf5"],
        ["bbcca0", "d4e5b9"],
        ["bbc1c7", "d4dae0"],
        ["e3d29d", "fcebb6"],
        ["d7ab6b", "f0c484"],
        ["99b8dc", "b2d1f5"],
        ["bccea1", "d5e7ba"],
        ["bbc1c7", "d4dae0"],
        ["e3d09d", "fce9b6"],
        ["d5a46c", "eebd85"],
        ["8fcddb", "a8e6f4"],
        ["b6c7a4", "cfe0bd"],
        ["b9c5c7", "d2dee0"],
        ["e8ba9f", "ffd3b8"],
        ["a5bfca", "bed8e3"],
        ["beceb1", "d7e7ca"],
        ["bdc3c4", "d6dcdd"],
        ["d9c9b3", "f2e2cc"],
        ["c29988", "dbb2a1"],
        ["8ec7e0", "a7e0f9"],
        ["b5d899", "cef1b2"],
        ["b9c5c8", "d2dee1"],
        ["eac797", "ffe0b0"],
        ["e88d67", "ffa680"],
        ["a6a7d9", "bfc0f2"],
        ["c4c4a8", "ddddc1"],
        ["bebec7", "d7d7e0"],
        ["dadaa2", "f3f3bb"],
        ["c0bf70", "d9d889"],
        ["a39fd8", "bcb8f1"],
        ["c2bfab", "dbd8c4"],
        ["bdbcc7", "d6d5e0"],
        ["dcdfa5", "f5f8be"]
    ]
    const index = bookId.substring(bookId.length - 2)
    if (colors[index]) {
        return {
            from: colors[index][0],
            to: colors[index][1]
        }
    }
    return defaultColors
}

function getShortDomain(domain) {
    if (domain.substring(domain.length - 5) === 'onion') {
        domain = domain.substring(0, 10) + '...' + domain.substring(domain.length - 10)
    }
    return domain
}

function initCategoriesFilter(opts) {
    const options = opts || {}
    const $block = $('.categoriesFilter');
    if (!$block.length || $block.data('init') == 1) {
        return
    }
    $block.data('init', 1)
    const $button = $block.find('.categoriesFilter__button');
    const $dialog = $block.find('.categoriesFilter__dialog');
    const $dialogMain = $block.find('.categoriesFilter__dialogMain');
    const $searchFieldInput = $block.find('.categoriesFilter__searchFieldInput');
    const $searchFieldIcon = $block.find('.categoriesFilter__searchFieldIcon');
    const $items = $block.find('.categoriesFilter__listItem');
    let itemsMap = [];
    let inputTimeout = null;
    if (options.selectedCategoryId) {
        const $listItem = $block.find('.categoriesFilter__listItem[data-id=' + options.selectedCategoryId + ']')
        const $parentListItem = $listItem.parents('.categoriesFilter__listItem')
        if ($parentListItem.length) {
            $listItem.find('.categoriesFilter__listLink').addClass('categoriesFilter__listLink_state_active')
            $parentListItem.find('.categoriesFilter__listToggle').addClass('categoriesFilter__listToggle_state_active')
        } else {
            $listItem.find('.categoriesFilter__listToggle').addClass('categoriesFilter__listToggle_state_active')
            $listItem.find('.categoriesFilter__listItemContainer').addClass('categoriesFilter__listItemContainer_state_active')
        }
    }
    if (typeof options.onSelectedListItem === 'function') {
        $items.find('.categoriesFilter__listLink').on('click', function(e) {
            const $listItem = $(e.target).closest('.categoriesFilter__listItem')
            const $parentListItem = $listItem.parents('.categoriesFilter__listItem')
            $block.find('.categoriesFilter__listToggle_state_active').removeClass('categoriesFilter__listToggle_state_active')
            $block.find('.categoriesFilter__listLink_state_active').removeClass('categoriesFilter__listLink_state_active')
            if ($parentListItem.length) {
                $listItem.find('.categoriesFilter__listLink').addClass('categoriesFilter__listLink_state_active')
                $parentListItem.find('.categoriesFilter__listToggle').addClass('categoriesFilter__listToggle_state_active')
                $parentListItem.find('.categoriesFilter__listItemContainer').removeClass('categoriesFilter__listItemContainer_state_active')
            } else {
                if (options.disableSelectionFirstLevelCategory) {
                    $listItem.closest('.categoriesFilter__listItem').find('.categoriesFilter__listToggle').trigger('click')
                    return false
                }
                $listItem.find('.categoriesFilter__listToggle').addClass('categoriesFilter__listToggle_state_active')
                $listItem.find('.categoriesFilter__listItemContainer').addClass('categoriesFilter__listItemContainer_state_active')
            }
            let categoryName = $listItem.data('name')
            if ($parentListItem.length) {
                categoryName = $parentListItem.data('name') + ' - ' + categoryName
            }
            $block.find('.categoriesFilter__buttonLabel').text(categoryName)
            $button.trigger('click')
            options.onSelectedListItem($listItem)
            return false
        })
    }
    if (typeof options.onReset === 'function') {
        $block.find('.categoriesFilter__resetButton').on('click', function() {
            $block.find('.categoriesFilter__buttonLabel').text('')
            $block.find('.categoriesFilter__listToggle_state_active').removeClass('categoriesFilter__listToggle_state_active')
            $block.find('.categoriesFilter__listLink_state_active').removeClass('categoriesFilter__listLink_state_active')
            $searchFieldInput.val('').trigger('input')
            options.onReset()
            $button.trigger('click')
            return false
        })
    }
    $button.on('click', function(event) {
        event.preventDefault();
        $dialog.toggleClass('categoriesFilter__dialog_show');
        if ($dialog.hasClass('categoriesFilter__dialog_show')) {
            if (window.innerWidth > 768) {
                $searchFieldInput.focus();
            }
        } else {
            $searchFieldInput.val('');
            searchItems();
        }
        if ($dialog.hasClass('categoriesFilter__dialog_show')) {
            const $activeListToggle = $dialogMain.find('.categoriesFilter__listToggle_state_active')
            const $listItem = $dialogMain.find('.categoriesFilter__listLink_state_active').closest('.categoriesFilter__listItem')
            if ($listItem.length) {
                $activeListToggle.trigger('click')
                const $parentListItem = $listItem.parents('.categoriesFilter__listItem')
                $dialogMain.animate({
                    scrollTop: $parentListItem.position().top + $listItem.position().top
                }, 0)
            } else if ($activeListToggle.length) {
                const $activeListItem = $activeListToggle.closest('.categoriesFilter__listItem')
                $dialogMain.animate({
                    scrollTop: $activeListItem.position().top
                }, 0)
            }
        }
    });
    $('body').on('click', function(event) {
        if ($(event.target).closest($block).length) {
            return;
        }
        $dialog.removeClass('categoriesFilter__dialog_show');
        $searchFieldInput.val('');
        searchItems();
    });
    $items.each(function() {
        const _this = $(this);
        const $parent = _this.parents('.categoriesFilter__listItem');
        itemsMap.push({
            $: _this,
            $link: _this.find('.categoriesFilter__listLink'),
            $parent: $parent,
            $toggle: $parent.find('.categoriesFilter__listToggle'),
            id: _this.data('id'),
            name: _this.data('name'),
            parentId: _this.data('parent-id'),
        });
    });
    $searchFieldInput.val('').on('input', function(event) {
        if (inputTimeout) {
            clearTimeout(inputTimeout);
            inputTimeout = null;
        }
        $searchFieldIcon.addClass('.categoriesFilter__searchFieldIcon_state_loading');
        inputTimeout = setTimeout(() => {
            searchItems(this.value.trim());
            $searchFieldIcon.removeClass('.categoriesFilter__searchFieldIcon_state_loading');
        }, 500);
    });
    $block.find('.categoriesFilter__listToggle').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('categoriesFilter__listToggle_state_open').parent().nextAll('.categoriesFilter__list_type_child').toggle();
        const top = $(this).closest('.categoriesFilter__listItem').position().top;
        if ($dialogMain.scrollTop() > top) {
            $dialogMain.scrollTop(top);
        }
    });

    function searchItems(needle) {
        needle = needle || '';
        $items.show();
        $dialogMain.removeClass('categoriesFilter__dialogMain_empty').scrollTop(0);
        $searchFieldInput.removeClass('categoriesFilter__searchFieldInput_state_error');
        if (needle === '') {
            itemsMap.forEach(function(item) {
                item.$link.text(item.name);
                item.$toggle.show().filter('.categoriesFilter__listToggle_state_open').trigger('click');
            });
            return;
        }
        const regexp = new RegExp(`(${needle})`, 'ig');
        let count = 0;
        itemsMap.forEach(function(item) {
            item.$toggle.not('.categoriesFilter__listToggle_state_open').hide();
            if (!regexp.test(item.name)) {
                item.$.hide();
                return;
            }
            item.$link.html(item.name.replace(regexp, '<mark>$1</mark>'));
            item.$parent.show();
            item.$toggle.show().not('.categoriesFilter__listToggle_state_open').trigger('click');
            count++;
        });
        if (!count) {
            $dialogMain.addClass('categoriesFilter__dialogMain_empty');
            $searchFieldInput.addClass('categoriesFilter__searchFieldInput_state_error');
        }
    }
}

function stripEmodji(str) {
    var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
    return str.replace(regex, '');
}

function isValidInputString(str) {
    return str && str.length && $.trim($('<i>' + stripEmodji(str) + '</i>').text()).length == str.length
}

function isTouchDevice() {
    return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
};

function getCurrentUserId() {
    const userId = parseInt($('.tg-form').data('user-id'))
    return isNaN(userId) ? null : userId
}

function getTelegramBindingStatusFromLocalStorage() {
    if (!window.localStorage) {
        return null
    }
    const userId = getCurrentUserId()
    if (!userId) {
        return null;
    }
    const tgBindingUser = parseInt(localStorage.getItem('tgBindingUser'))
    return isNaN(tgBindingUser) ? null : tgBindingUser === userId
}

function setTelegramBindingStatusToLocalStorage(pinned) {
    if (!window.localStorage || typeof pinned == 'undefined') {
        return
    }
    const userId = getCurrentUserId()
    if (pinned === null || !userId) {
        localStorage.removeItem('tgBindingUser')
        return
    }
    localStorage.setItem('tgBindingUser', pinned ? userId : userId * -1)
}

function doLoadTelegramBindingStatus() {
    const $tgForm = $('.tg-form')
    const $tgStatusConnectionError = $('#tgStatusConnectionError')
    const $tgStatusLoading = $('#tgStatusLoading')
    const status = getTelegramBindingStatusFromLocalStorage()
    if (status !== null) {
        changeTelegramDivDisplay(status)
        $tgStatusLoading.remove()
        $tgForm.show()
        return
    }
    new ZLibraryResponse('/papi/user/telegram/pinned').success(response => {
        $tgStatusLoading.remove()
        if (response.connectError) {
            $tgStatusConnectionError.show()
            return
        }
        changeTelegramDivDisplay(response.isPinned)
        $tgForm.show()
    }).error(error => {
        $tgStatusLoading.remove()
    }).fetch()
}

function generateTelegramHash(button) {
    const $button = $(button)
    $button.attr('disabled', 'disabled').addClass('disabled')
    setTelegramBindingStatusToLocalStorage(null)
    const spinner = new ZLibrarySpinner($button).color('#D9D9D9')
    new ZLibraryResponse('/papi/user/telegram/hash').spinner(spinner).success(response => {
        $button.removeAttr('disabled').removeClass('disabled')
        if (response.connectError) {
            new ZLibraryNotify().error(i18next.t('Connection timeout. Please try again later.'))
            return
        }
        if (response.bot && response.hash) {
            if ($button.hasClass('modal-version')) {
                return createTelegramConnectModal(response.bot, response.hash)
            }
            window.location.href = 'tg://resolve?domain=' + response.bot + '&start=' + response.hash
            if (!window.checkTelegramUserBindingCounter) {
                setTimeout(function() {
                    checkTelegramUserBinding()
                }, 2000)
            }
        } else {
            ZLibraryNotify().info(response.message)
        }
    }).error(error => {
        $button.removeAttr('disabled').removeClass('disabled')
    }).fetch()
}

function createTelegramConnectModal(bot, hash) {
    const $el = $('#tg-connect-modal')
    $el.data('bot', bot)
    $el.data('hash', hash)
    if ($el.data('init')) {
        $('#zlibrary-modal-styled').modal('show')
        return
    }
    $el.data('init', 1)
    new ZLibraryModal({
        container: 'zlibrary-modal-styled',
        element: 'tg-connect-modal',
        title: 'How to access the bot (only for TOR browsers)',
        width: 500,
        afterRender: function() {
            $('.tg-connect-modal-content .tg-bot-login').val('@' + $el.data('bot'))
            $('.tg-connect-modal-content .tg-bot-command').val('/start ' + $el.data('hash'))
            $(document).on('hidden.bs.modal', function() {
                checkTelegramUserBinding()
            })
        }
    }).show()
}

function checkTelegramUserBinding() {
    if (!$('#isPinned').length || $('#isPinned').is(':visible')) {
        return
    }
    let ms = 5000
    window.checkTelegramUserBindingCounter = window.checkTelegramUserBindingCounter ? window.checkTelegramUserBindingCounter + 1 : 1
    if (window.checkTelegramUserBindingCounter < 5) {
        ms = 2000
    } else if (window.checkTelegramUserBindingCounter > 10) {
        window.checkTelegramUserBindingCounter = 0
        return
    }
    new ZLibraryResponse('/papi/user/telegram/pinned').success(response => {
        if (response.isPinned === true) {
            if ($('#isPinned').is(':visible')) {
                return
            }
            changeTelegramDivDisplay(true)
            window.checkTelegramUserBindingCounter = 0
            ZLibraryNotify().success(i18next.t('Your account has been successfully connected to Telegram!'))
        } else if (response.connectError) {
            window.location.reload()
        } else {
            setTimeout(function() {
                checkTelegramUserBinding()
            }, ms)
        }
    }).fetch()
}

function changeTelegramDivDisplay(pinned) {
    const $divNotPinned = $('#isNotPinned')
    const $divPinned = $('#isPinned')
    if (!$divNotPinned.length || !$divPinned.length) {
        return
    }
    $divNotPinned.css('display', !pinned ? 'block' : 'none')
    $divPinned.css('display', pinned ? 'block' : 'none')
    setTelegramBindingStatusToLocalStorage(pinned)
}

function removeTelegramUserBinding(button) {
    const $button = $(button)
    $button.attr('disabled', 'disabled')
    const request = new Request('/papi/user/telegram/binding', {
        method: 'DELETE',
    })
    const spinner = new ZLibrarySpinner($button).color('#D9D9D9')
    setTelegramBindingStatusToLocalStorage(null)
    new ZLibraryResponse(request).spinner(spinner).success(response => {
        $button.removeAttr('disabled')
        if (response.connectError) {
            new ZLibraryNotify().error(i18next.t('Connection timeout. Please try again later.'))
            return
        }
        if (response.code === 200) {
            changeTelegramDivDisplay(false)
            ZLibraryNotify().success(i18next.t('Your account has been disconnected from Telegram!'))
        } else {
            ZLibraryNotify().info(response.message)
            doLoadTelegramBindingStatus()
        }
    }).error(error => {
        $button.removeAttr('disabled')
    }).fetch()
};
const Spelling = function() {
    this.modalConteinerID = 'zlibrary-modal-styled';
    this.modalElementID = 'spelling_modal_windows';
    this.runOnKeys = function(callback) {
        document.addEventListener('keydown', event => {
            const $target = $(event.target)
            if ($target.hasClass('modal') || $target.prop('tagName') == 'FORM' || $target.closest('.modal, form').length) {
                return
            }
            if (event.code === 'Enter' && event.ctrlKey) {
                callback();
            }
        });
    };
    this.runSelectText = () => {
        const selectText = window.getSelection().toString().trim();
        window.getSelection().empty();
        if (!selectText.length) {
            return;
        }
        this.renderModalElement(selectText);
        this.reportModal();
    };
    this.reportModal = () => {
        const $modalDialog = $('#' + this.modalConteinerID + ' .modal-dialog')
        this.modal = new ZLibraryModal({
            container: this.modalConteinerID,
            element: this.modalElementID,
            title: i18next.t('Report about the spelling error'),
            width: 600,
            removeSource: true,
            afterRender: function() {
                $(document).on('shown.bs.modal', function() {
                    $('#descriptionError').focus()
                    const top = parseInt(window.innerHeight / 2 - $modalDialog.height() / 2 - 30)
                    $modalDialog.animate({
                        top: (top > 0 ? top : 0) + 'px',
                    }, {
                        queue: false,
                        duration: 500
                    }).animate({
                        opacity: 1
                    }, {
                        queue: false,
                        duration: 300
                    })
                })
            },
        })
        $modalDialog.css('opacity', 0)
        this.modal.show()
    }
    this.submitError = (data) => {
        const spinner = new ZLibrarySpinner('spellingFormSubmit')
        const request = new Request('/papi/spelling/set', {
            method: 'POST',
            body: data,
        });
        return new ZLibraryResponse(request).spinner(spinner).success(response => {
            ZLibraryNotify().info(i18next.t('Thank you for reporting a problem!') + '<br>' +
                i18next.t('We will check this page soon'))
        }).fetch()
    }
    this.renderModalElement = (selectText) => {
        $('#' + this.modalElementID).remove();
        const self = this;
        const $modalElement = $('<div id="' + this.modalElementID + '" class="hidden">');
        $modalElement.append('<form role="form">' + '<input type="hidden" name="text" value="' + selectText + '">' + '<input type="hidden" name="url" value="' + document.location.href + '">' + '<div class="spelling-selected-title">' +
            i18next.t('Error text:', {
                nsSeparator: false,
                keySeparator: false
            }) + '&nbsp;<span class="spelling-selected-text">' + selectText + '</span>' + '</div>' + '<div class="spelling-description-title"><span style="color: red;">*</span>' + i18next.t('Correct the error or suggest a solution') + '</div>' + '<div class="spelling-description-text">' + '<textarea class="form-control" id="descriptionError"></textarea>' + '</div>' + '</form>' + '<div class="modal-footer">' + '<button class="btn-cancel">' + i18next.t('Cancel') + '</button>' + '<button type="submit" class="btn-primary" disabled id="spellingFormSubmit">' + i18next.t('Submit') + '</button>' + '</div>');
        $('body').append($modalElement).on("click.spelling", '#spellingFormSubmit', function(event) {
            event.preventDefault();
            if (!$('#descriptionError').val().trim().length) {
                ZLibraryNotify().error(i18next.t('Fill in the fields marked with an *.'))
                return false;
            }
            const formData = $('form', $modalElement).serialize() + "&description=" + encodeURI($('#descriptionError').val());
            self.submitError(formData);
            self.modal.hide();
            $("body").off(".spelling");
        }).on("click.spelling", '.btn-cancel', function(event) {
            self.modal.hide();
        }).on('keyup.spelling change.spelling', '#descriptionError', function() {
            $('#spellingFormSubmit').prop('disabled', !$(this).val().trim().length)
        })
    };
    this.runOnKeys(this.runSelectText);
}
new Spelling();;
const AuthForm = (function() {
    const cache = new WeakMap();
    const defaultOptions = {
        isXhr: true,
        modal: null,
    };
    const validationErrorClassName = 'validation-error';

    function AuthForm(form) {
        if (!(this instanceof AuthForm)) {
            throw new TypeError('AuthForm constructor cannot be invoked without \'new\'');
        }
        if (!jQuery) {
            throw new Error('This object depends on jQuery library.');
        }
        if (!form || !(form instanceof HTMLFormElement)) {
            throw new TypeError('First argument must be an instance of HTMLFormElement.');
        }
        if (cache.has(form)) {
            return cache.get(form);
        }
        cache.set(form, this);
        this.options = $.extend({}, defaultOptions);
        this.$form = $(form);
        this.url = this.$form.attr('action');
        this.action = this.$form.data('action');
        this.$target = $('iframe[name=' + this.$form.attr('target') + ']');
        this.$interactiveElements = this.$form.find('input:not([type=hidden]), textarea, select, button').not('[disabled]');
        this.$submitButton = this.$interactiveElements.filter('[type="submit"]');
        this.$validationFields = this.$form.find('.validation-field');
        this.$messageElement = this.$form.find('.form-error');
        this.spinner = new ZLibrarySpinner(this.$submitButton);
        this.$form.on('submit.auth', submitHandler.bind(null, this));
        const $passwordButtons = this.$form.find('.btn-show-password, .btn-hide-password');
        const $passwordField = this.$interactiveElements.filter('.form-control-password');
        $passwordButtons.off('click.togglePasswordMode').on('click.togglePasswordMode', togglePasswordMode.bind(null, $passwordButtons, $passwordField));
    }
    var proto = AuthForm.prototype;
    proto.useXhr = function useXhr(state) {
        this.options.isXhr = !!state;
        return this;
    };
    proto.setModal = function modal(modalInstance) {
        if (!(modalInstance instanceof ZLibraryModal)) {
            throw new TypeError('Modal object must be an instance of ZLibraryModal');
        }
        this.options.modal = modalInstance;
        return this;
    };
    proto.block = function block() {
        this.spinner.start();
        setTimeout(() => {
            this.$interactiveElements.prop('disabled', true);
        }, 0);
        return this;
    }
    proto.unblock = function unblock() {
        this.spinner.stop();
        this.$interactiveElements.prop('disabled', false);
        return this;
    }
    proto.getData = function getData() {
        return this.$form.serializeArray().reduce(function(obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {
            isModal: this.options.isXhr
        });
    };
    proto.submit = function() {
        this.$form.trigger('submit.auth');
        return this;
    };

    function submitHandler(_this, e) {
        _this.block();
        _this.$validationFields.removeClass(validationErrorClassName);
        _this.$messageElement.text('');
        if (!_this.options.isXhr) {
            _this.$target.one('load.auth', function() {
                _this.unblock();
            });
            return true;
        }
        e.preventDefault()
        sendRequest(_this);
        return false;
    }

    function sendRequest(_this) {
        const formData = _this.getData()
        return $.RPC(_this.action, formData).done(function(result) {
            const response = result.response;
            if (typeof response === 'object' && response !== null) {
                if (response.validationError) {
                    _this.unblock();
                    if (typeof response.fields === 'object') {
                        for (let i = 0, c = response.fields.length; i < c; i++) {
                            _this.$validationFields.filter('[name="' + response.fields[i] + '"]').addClass(validationErrorClassName);
                        }
                    }
                    if (typeof response.message === 'string') {
                        if (_this.$messageElement.length) {
                            _this.$messageElement.html(response.message);
                        } else {
                            new ZLibraryNotify().error(response.message);
                        }
                    }
                    return;
                }
                if (_this.action === 'passwordrecovery') {
                    const $pwdSendedContent = $('.pwd-sended')
                    if ($pwdSendedContent.length) {
                        $('.well').html($pwdSendedContent.html())
                        return
                    }
                }
                if (_this.action === 'login' || _this.action === 'registration') {
                    const selectedMode = formData['site_mode']
                    const $domainEl = selectedMode === 'articles' ? $('#selectArticlesDomain') : $('#selectBooksDomain')
                    $('.well').hide()
                    $('.login-success').show()
                    const processRedirect = function() {
                        const processId = setInterval(function() {
                            const domain = $domainEl.length ? $domainEl.val() : false
                            if (domain === false || domain === 'false') {
                                clearInterval(processId)
                                $('.well').hide()
                                $('.no-available-domains').show()
                                return
                            }
                            if (domain.length) {
                                clearInterval(processId)
                                window.location.href = '//' + domain + response.params
                                return
                            }
                        }, 1000)
                    }
                    if (selectedMode === 'articles' || !response.priorityHost) {
                        processRedirect()
                        return
                    }
                    DomainsChecker([response.priorityHost], function(domain) {
                        window.location.href = '//' + domain + response.params
                    }, function() {
                        processRedirect()
                    }, 'books', true)
                    return
                }
            }
            if (_this.action === 'passwordrecovery') {
                $('#auth_modal_passwordrecovery').hide();
                $('#auth_modal_passwordrecovery_sended').show();
                return;
            }
            _this.options.modal && _this.options.modal.hide();
            setTimeout(function() {
                window.location.reload();
            }, 300);
        }).fail(function(a, b) {
            _this.unblock();
            var message = i18next.t('Something went wrong');
            if (b && b.errors) {
                message = b.errors.message();
            }
            new ZLibraryNotify().error(message);
        });
    };

    function togglePasswordMode($passwordButtons, $passwordField) {
        $passwordButtons.toggleClass('hidden');
        $passwordField.attr('type', $passwordField.attr('type') === 'password' ? 'text' : 'password');
    }
    return AuthForm;
})();;