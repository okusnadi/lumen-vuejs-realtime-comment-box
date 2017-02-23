/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#bs/jq-2.2.4/dt-1.10.13/b-1.2.4/b-colvis-1.2.4/b-print-1.2.4/fc-3.2.2/fh-3.1.2/kt-2.2.0/r-2.1.0/rr-1.2.0/se-1.2.0
 *
 * Included libraries:
 *   jQuery 2.2.4, DataTables 1.10.13, Buttons 1.2.4, Column visibility 1.2.4, Print view 1.2.4, FixedColumns 3.2.2, FixedHeader 3.1.2, KeyTable 2.2.0, Responsive 2.1.0, RowReorder 1.2.0, Select 1.2.0
 */

/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
! function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
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
        n = function(a, b) { return new n.fn.init(a, b) },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) { return b.toUpperCase() };
    n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function() { return e.call(this) }, get: function(a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this) }, pushStack: function(a) { var b = n.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b }, each: function(a) { return n.each(this, a) }, map: function(a) { return this.pushStack(n.map(this, function(b, c) { return a.call(b, c, b) })) }, slice: function() { return this.pushStack(e.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(a) { var b = this.length,
                c = +a + (0 > a ? b : 0); return this.pushStack(c >= 0 && b > c ? [this[c]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function() { var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(a) { throw new Error(a) }, noop: function() {}, isFunction: function(a) { return "function" === n.type(a) }, isArray: Array.isArray, isWindow: function(a) { return null != a && a === a.window }, isNumeric: function(a) { var b = a && a.toString(); return !n.isArray(a) && b - parseFloat(b) + 1 >= 0 }, isPlainObject: function(a) { var b; if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1; if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1; for (b in a); return void 0 === b || k.call(a, b) }, isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 }, type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a }, globalEval: function(a) { var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a)) }, camelCase: function(a) { return a.replace(p, "ms-").replace(q, r) }, nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function(a, b) { var c, d = 0; if (s(a)) { for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break; return a }, trim: function(a) { return null == a ? "" : (a + "").replace(o, "") }, makeArray: function(a, b) { var c = b || []; return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c }, inArray: function(a, b, c) { return null == b ? -1 : h.call(b, a, c) }, merge: function(a, b) { for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d]; return a.length = e, a }, grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function(a, b, c) { var d, e, g = 0,
                h = []; if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e); return f.apply([], h) }, guid: 1, proxy: function(a, b) { var c, d, f; return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function() { return a.apply(b || this, d.concat(e.call(arguments))) }, f.guid = a.guid = a.guid || n.guid++, f) : void 0 }, now: Date.now, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) { i["[object " + b + "]"] = b.toLowerCase() });

    function s(a) { var b = !!a && "length" in a && a.length,
            c = n.type(a); return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a }
    var t = function(a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) { return a === b && (l = !0), 0 },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) { for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1 },
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
            W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
            da = function() { m() }; try { H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType } catch (ea) { H = { apply: E.length ? function(a, b) { G.apply(a, I.call(b)) } : function(a, b) { var c = a.length,
                        d = 0; while (a[c++] = b[d++]);
                    a.length = c - 1 } } }

        function fa(a, b, d, e) { var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9; if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d; if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) { if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) { if (9 === x) { if (!(j = b.getElementById(f))) return d; if (j.id === f) return d.push(j), d } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d } else { if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d; if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) { if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']"; while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b } if (s) try { return H.apply(d, w.querySelectorAll(s)), d } catch (y) {} finally { k === u && b.removeAttribute("id") } } } return i(a.replace(Q, "$1"), b, d, e) }

        function ga() { var a = [];

            function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b }

        function ha(a) { return a[u] = !0, a }

        function ia(a) { var b = n.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function ja(a, b) { var c = a.split("|"),
                e = c.length; while (e--) d.attrHandle[c[e]] = b }

        function ka(a, b) { var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C); if (d) return d; if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1 }

        function la(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

        function ma(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

        function na(a) { return ha(function(b) { return b = +b, ha(function(c, d) { var e, f = a([], c.length, b),
                        g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) }

        function oa(a) { return a && "undefined" != typeof a.getElementsByTagName && a }
        c = fa.support = {}, f = fa.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, m = fa.setDocument = function(a) { var b, e, g = a ? a.ownerDocument || a : v; return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ia(function(a) { return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) { return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length }), c.getById ? (d.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c ? [c] : [] } }, d.filter.ID = function(a) { var b = a.replace(ba, ca); return function(a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function(a) { var b = a.replace(ba, ca); return function(a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function(a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) { var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function(a, b) { return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0 }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ia(function(a) { var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:") })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) { c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) { var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function(a, b) { if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1 }, B = b ? function(a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) { if (a === b) return l = !0, 0; var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b]; if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0; if (e === f) return ka(a, b);
                c = a; while (c = c.parentNode) g.unshift(c);
                c = b; while (c = c.parentNode) h.unshift(c); while (g[d] === h[d]) d++; return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0 }, n) : n }, fa.matches = function(a, b) { return fa(a, null, null, b) }, fa.matchesSelector = function(a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
            return fa(b, n, null, [a]).length > 0 }, fa.contains = function(a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, fa.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, fa.uniqueSort = function(a) { var b, d = [],
                e = 0,
                f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return k = null, a }, e = fa.getText = function(a) { var b, c = "",
                d = 0,
                f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else
                while (b = a[d++]) c += e(b); return c }, d = fa.selectors = { cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(a) { return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function(a) { var b = a.replace(ba, ca).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function(a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) }, ATTR: function(a, b, c) { return function(d) { var e = fa.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } }, CHILD: function(a, b, c, d, e) { var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b; return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1; if (q) { if (f) { while (p) { m = b; while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n]; while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) { k[a] = [w, n, t]; break } } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0 } } }, PSEUDO: function(a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) { var d, f = e(a, b),
                            g = f.length; while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]) }) : function(a) { return e(a, 0, c) }) : e } }, pseudos: { not: ha(function(a) { var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1")); return d[u] ? ha(function(a, b, c, e) { var f, g = d(a, null, e, []),
                            h = a.length; while (h--)(f = g[h]) && (a[h] = !(b[h] = f)) }) : function(a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() } }), has: ha(function(a) { return function(b) { return fa(a, b).length > 0 } }), contains: ha(function(a) { return a = a.replace(ba, ca),
                        function(b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: ha(function(a) { return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) { var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1 } }), target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function(a) { return a === o }, focus: function(a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function(a) { return a.disabled === !1 }, disabled: function(a) { return a.disabled === !0 }, checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function(a) { for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0 }, parent: function(a) { return !d.pseudos.empty(a) }, header: function(a) { return Y.test(a.nodeName) }, input: function(a) { return X.test(a.nodeName) }, button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: na(function() { return [0] }), last: na(function(a, b) { return [b - 1] }), eq: na(function(a, b, c) { return [0 > c ? c + b : c] }), even: na(function(a, b) { for (var c = 0; b > c; c += 2) a.push(c); return a }), odd: na(function(a, b) { for (var c = 1; b > c; c += 2) a.push(c); return a }), lt: na(function(a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d); return a }), gt: na(function(a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = la(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter; while (h) { c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? fa.error(a) : z(a, i).slice(0) };

        function qa(a) { for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value; return d }

        function ra(a, b, c) { var d = b.dir,
                e = c && "parentNode" === d,
                f = x++; return b.first ? function(b, c, f) { while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f) } : function(b, c, g) { var h, i, j, k = [w, f]; if (g) { while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0 } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) { if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2]; if (i[d] = k, k[2] = a(b, c, g)) return !0 } } }

        function sa(a) { return a.length > 1 ? function(b, c, d) { var e = a.length; while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0 } : a[0] }

        function ta(a, b, c) { for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c); return c }

        function ua(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g }

        function va(a, b, c, d, e, f) { return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) { var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = ua(r, n), d(j, [], h, i), k = j.length; while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i) }
                        k = r.length; while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r) }) }

        function wa(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) { return a === b }, h, !0), l = ra(function(a) { return J(b, a) > -1 }, h, !0), m = [function(a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a)) }
                    m.push(c) }
            return sa(m) }

        function xa(a, b) { var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) { var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length; for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) { if (e && l) { o = 0, g || l.ownerDocument === n || (m(l), h = !p); while (q = a[o++])
                                if (q(l, g || n, h)) { i.push(l); break }
                            k && (w = y) }
                        c && ((l = !q && l) && r--, f && t.push(l)) } if (r += s, c && s !== r) { o = 0; while (q = b[o++]) q(t, u, g, h); if (f) { if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u) }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i) } return k && (w = y, j = v), t }; return c ? ha(f) : f } return h = fa.compile = function(a, b) { var c, d = [],
                e = [],
                f = A[a + " "]; if (!f) { b || (b = g(a)), c = b.length; while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a } return f }, i = fa.select = function(a, b, e, f) { var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a); if (e = e || [], 1 === o.length) { if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) { if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length) }
                i = W.needsContext.test(a) ? 0 : j.length; while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) { if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e; break } } } return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) { return 1 & a.compareDocumentPosition(n.createElement("div")) }), ia(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ja("type|href|height|width", function(a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ia(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ja("value", function(a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), ia(function(a) { return null == a.getAttribute("disabled") }) || ja(K, function(a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), fa }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) { var d = [],
                e = void 0 !== c; while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) { if (e && n(a).is(c)) break;
                    d.push(a) }
            return d },
        v = function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) { if (n.isFunction(b)) return n.grep(a, function(a, d) { return !!b.call(a, d, a) !== c }); if (b.nodeType) return n.grep(a, function(a) { return a === b !== c }); if ("string" == typeof b) { if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a) } return n.grep(a, function(a) { return h.call(b, a) > -1 !== c }) }
    n.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) { return 1 === a.nodeType })) }, n.fn.extend({ find: function(a) { var b, c = this.length,
                d = [],
                e = this; if ("string" != typeof a) return this.pushStack(n(a).filter(function() { for (b = 0; c > b; b++)
                    if (n.contains(e[b], this)) return !0 })); for (b = 0; c > b; b++) n.find(a, e[b], d); return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d }, filter: function(a) { return this.pushStack(z(this, a || [], !1)) }, not: function(a) { return this.pushStack(z(this, a || [], !0)) }, is: function(a) { return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length } });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) { var e, f; if (!a) return this; if (c = c || A, "string" == typeof a) { if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a); if (e[1]) { if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]); return this } return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this } return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this)) };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = { children: !0, contents: !0, next: !0, prev: !0 };
    n.fn.extend({ has: function(a) { var b = n(a, this),
                c = b.length; return this.filter(function() { for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0 }) }, closest: function(a, b) { for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) { f.push(c); break }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f) }, index: function(a) { return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(a, b) { return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b)))) }, addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } });

    function F(a, b) { while ((a = a[b]) && 1 !== a.nodeType); return a }
    n.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return u(a, "parentNode") }, parentsUntil: function(a, b, c) { return u(a, "parentNode", c) }, next: function(a) { return F(a, "nextSibling") }, prev: function(a) { return F(a, "previousSibling") }, nextAll: function(a) { return u(a, "nextSibling") }, prevAll: function(a) { return u(a, "previousSibling") }, nextUntil: function(a, b, c) { return u(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return u(a, "previousSibling", c) }, siblings: function(a) { return v((a.parentNode || {}).firstChild, a) }, children: function(a) { return v(a.firstChild) }, contents: function(a) { return a.contentDocument || n.merge([], a.childNodes) } }, function(a, b) { n.fn[a] = function(c, d) { var e = n.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e) } });
    var G = /\S+/g;

    function H(a) { var b = {}; return n.each(a.match(G) || [], function(a, c) { b[c] = !0 }), b }
    n.Callbacks = function(a) { a = "string" == typeof a ? H(a) : n.extend({}, a); var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() { for (e = a.once, d = b = !0; g.length; h = -1) { c = g.shift(); while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1) }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "") },
            j = { add: function() { return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) { n.each(b, function(b, c) { n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c) }) }(arguments), c && !b && i()), this }, remove: function() { return n.each(arguments, function(a, b) { var c; while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h-- }), this }, has: function(a) { return a ? n.inArray(a, f) > -1 : f.length > 0 }, empty: function() { return f && (f = []), this }, disable: function() { return e = g = [], f = c = "", this }, disabled: function() { return !f }, lock: function() { return e = g = [], c || (f = c = ""), this }, locked: function() { return !!e }, fireWith: function(a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this }, fire: function() { return j.fireWith(this, arguments), this }, fired: function() { return !!d } }; return j }, n.extend({ Deferred: function(a) { var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = { state: function() { return c }, always: function() { return e.done(arguments).fail(arguments), this }, then: function() { var a = arguments; return n.Deferred(function(c) { n.each(b, function(b, f) { var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() { var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments) }) }), a = null }).promise() }, promise: function(a) { return null != a ? n.extend(a, d) : d } },
                e = {}; return d.pipe = d.then, n.each(b, function(a, f) { var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function(a) { var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) { return function(d) { b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } },
                i, j, k; if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f; return f || g.resolveWith(k, c), g.promise() } });
    var I;
    n.fn.ready = function(a) { return n.ready.promise().done(a), this }, n.extend({ isReady: !1, readyWait: 1, holdReady: function(a) { a ? n.readyWait++ : n.ready(!0) }, ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready")))) } });

    function J() { d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready() }
    n.ready.promise = function(b) { return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b) }, n.ready.promise();
    var K = function(a, b, c, d, e, f, g) { var h = 0,
                i = a.length,
                j = null == c; if ("object" === n.type(c)) { e = !0; for (h in c) K(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(n(a), c) })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f },
        L = function(a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType };

    function M() { this.expando = n.expando + M.uid++ }
    M.uid = 1, M.prototype = { register: function(a, b) { var c = b || {}; return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, { value: c, writable: !0, configurable: !0 }), a[this.expando] }, cache: function(a) { if (!L(a)) return {}; var b = a[this.expando]; return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b }, set: function(a, b, c) { var d, e = this.cache(a); if ("string" == typeof b) e[b] = c;
            else
                for (d in b) e[d] = b[d]; return e }, get: function(a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b] }, access: function(a, b, c) { var d; return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b) }, remove: function(a, b) { var c, d, e, f = a[this.expando]; if (void 0 !== f) { if (void 0 === b) this.register(a);
                else { n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length; while (c--) delete f[d[c]] }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]) } }, hasData: function(a) { var b = a[this.expando]; return void 0 !== b && !n.isEmptyObject(b) } };
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
    n.extend({ hasData: function(a) { return O.hasData(a) || N.hasData(a) }, data: function(a, b, c) { return O.access(a, b, c) }, removeData: function(a, b) { O.remove(a, b) }, _data: function(a, b, c) { return N.access(a, b, c) }, _removeData: function(a, b) { N.remove(a, b) } }), n.fn.extend({ data: function(a, b) { var c, d, e, f = this[0],
                g = f && f.attributes; if (void 0 === a) { if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) { c = g.length; while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0) } return e } return "object" == typeof a ? this.each(function() { O.set(this, a) }) : K(this, function(b) { var c, d; if (f && void 0 === b) { if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c; if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c; if (c = R(f, d, void 0), void 0 !== c) return c } else d = n.camelCase(a), this.each(function() { var c = O.get(this, d);
                    O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b) }) }, null, b, arguments.length > 1, null, !0) }, removeData: function(a) { return this.each(function() { O.remove(this, a) }) } }), n.extend({ queue: function(a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0 }, dequeue: function(a, b) { b = b || "fx"; var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() { n.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function(a, b) { var c = b + "queueHooks"; return N.get(a, c) || N.access(a, c, { empty: n.Callbacks("once memory").add(function() { N.remove(a, [b + "queue", c]) }) }) } }), n.fn.extend({ queue: function(a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() { var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a) }) }, dequeue: function(a) { return this.each(function() { n.dequeue(this, a) }) }, clearQueue: function(a) { return this.queue(a || "fx", []) }, promise: function(a, b) { var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {--d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) { return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a) };

    function W(a, b, c, d) { var e, f = 1,
            g = 20,
            h = d ? function() { return d.cur() } : function() { return n.css(a, b, "") },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b)); if (k && k[3] !== j) { j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g) } return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e }
    var X = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        Z = /^$|\/(?:java|ecma)script/i,
        $ = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;

    function _(a, b) { var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : []; return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c }

    function aa(a, b) { for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval")) }
    var ba = /<|&#?\w+;/;

    function ca(a, b, c, d, e) { for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
            if (f = a[o], f || 0 === f)
                if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
                else if (ba.test(f)) { g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0]; while (k--) g = g.lastChild;
            n.merge(m, g.childNodes), g = l.firstChild, g.textContent = "" } else m.push(b.createTextNode(f));
        l.textContent = "", o = 0; while (f = m[o++])
            if (d && n.inArray(f, d) > -1) e && e.push(f);
            else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) { k = 0; while (f = g[k++]) Z.test(f.type || "") && c.push(f) } return l }! function() { var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue }();
    var da = /^key/,
        ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        fa = /^([^.]*)(?:\.(.+)|)/;

    function ga() { return !0 }

    function ha() { return !1 }

    function ia() { try { return d.activeElement } catch (a) {} }

    function ja(a, b, c, d, e, f) { var g, h; if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) ja(a, h, c, d, b[h], f); return a } if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;
        else if (!e) return a; return 1 === f && (g = e, e = function(a) { return n().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() { n.event.add(this, b, e, d, c) }) }
    n.event = { global: {}, add: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a); if (r) { c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) { return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(G) || [""], j = b.length; while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0) } }, remove: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a); if (r && (i = r.events)) { b = (b || "").match(G) || [""], j = b.length; while (j--)
                    if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) { l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]) } else
                        for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events") } }, dispatch: function(a) { a = n.event.fix(a); var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (N.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {}; if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = n.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, c = 0; while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result } }, handlers: function(a, b) { var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target; if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) { for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({ elem: i, handlers: d }) }
            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(a, b) { var c, e, f, g = b.button; return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a } }, fix: function(a) { if (a[n.expando]) return a; var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length; while (b--) c = e[b], a[c] = g[c]; return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a }, special: { load: { noBubble: !0 }, focus: { trigger: function() { return this !== ia() && this.focus ? (this.focus(), !1) : void 0 }, delegateType: "focusin" }, blur: { trigger: function() { return this === ia() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0 }, _default: function(a) { return n.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } } }, n.removeEvent = function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c) }, n.Event = function(a, b) { return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b) }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: ha, isPropagationStopped: ha, isImmediatePropagationStopped: ha, isSimulated: !1, preventDefault: function() { var a = this.originalEvent;
            this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault() }, stopPropagation: function() { var a = this.originalEvent;
            this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation() }, stopImmediatePropagation: function() { var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation() } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) { n.event.special[a] = { delegateType: b, bindType: b, handle: function(a) { var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj; return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), n.fn.extend({ on: function(a, b, c, d) { return ja(this, a, b, c, d) }, one: function(a, b, c, d) { return ja(this, a, b, c, d, 1) }, off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function() { n.event.remove(this, a, c, b) }) } });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        la = /<script|<style|<link/i,
        ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
        na = /^true\/(.*)/,
        oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function pa(a, b) { return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a }

    function qa(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a }

    function ra(a) { var b = na.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function sa(a, b) { var c, d, e, f, g, h, i, j; if (1 === b.nodeType) { if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) { delete g.handle, g.events = {}; for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]) }
            O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i)) } }

    function ta(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) }

    function ua(a, b, c, d) { b = f.apply([], b); var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q); if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function(e) { var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d) }); if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) { for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m); if (i)
                for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, ""))) } return a }

    function va(a, b, c) { for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d)); return a }
    n.extend({ htmlPrefilter: function(a) { return a.replace(ka, "<$1></$2>") }, clone: function(a, b, c) { var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a); if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]); if (b)
                if (c)
                    for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);
                else sa(a, h);
            return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h }, cleanData: function(a) { for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (L(c)) { if (b = c[N.expando]) { if (b.events)
                            for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                        c[N.expando] = void 0 }
                    c[O.expando] && (c[O.expando] = void 0) } } }), n.fn.extend({ domManip: ua, detach: function(a) { return va(this, a, !0) }, remove: function(a) { return va(this, a) }, text: function(a) { return K(this, function(a) { return void 0 === a ? n.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a) }) }, null, a, arguments.length) }, append: function() { return ua(this, arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = pa(this, a);
                    b.appendChild(a) } }) }, prepend: function() { return ua(this, arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = pa(this, a);
                    b.insertBefore(a, b.firstChild) } }) }, before: function() { return ua(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function() { return ua(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, empty: function() { for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = ""); return this }, clone: function(a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() { return n.clone(this, a, b) }) }, html: function(a) { return K(this, function(a) { var b = this[0] || {},
                    c = 0,
                    d = this.length; if (void 0 === a && 1 === b.nodeType) return b.innerHTML; if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) { a = n.htmlPrefilter(a); try { for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
                        b = 0 } catch (e) {} }
                b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function() { var a = []; return ua(this, arguments, function(b) { var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this)) }, a) } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { n.fn[a] = function(a) { for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get()); return this.pushStack(d) } });
    var wa, xa = { HTML: "block", BODY: "block" };

    function ya(a, b) { var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display"); return c.detach(), d }

    function za(a) { var b = d,
            c = xa[a]; return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c }
    var Aa = /^margin/,
        Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ca = function(b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) },
        Da = function(a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e },
        Ea = d.documentElement;
    ! function() { var b, c, e, f, g = d.createElement("div"),
            h = d.createElement("div"); if (h.style) { h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);

            function i() { h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g); var d = a.getComputedStyle(h);
                b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g) }
            n.extend(l, { pixelPosition: function() { return i(), b }, boxSizingReliable: function() { return null == c && i(), c }, pixelMarginRight: function() { return null == c && i(), e }, reliableMarginLeft: function() { return null == c && i(), f }, reliableMarginRight: function() { var b, c = h.appendChild(d.createElement("div")); return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b } }) } }();

    function Fa(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g }

    function Ga(a, b) { return { get: function() { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } }
    var Ha = /^(none|table(?!-c[ea]).+)/,
        Ia = { position: "absolute", visibility: "hidden", display: "block" },
        Ja = { letterSpacing: "0", fontWeight: "400" },
        Ka = ["Webkit", "O", "Moz", "ms"],
        La = d.createElement("div").style;

    function Ma(a) { if (a in La) return a; var b = a[0].toUpperCase() + a.slice(1),
            c = Ka.length; while (c--)
            if (a = Ka[c] + b, a in La) return a }

    function Na(a, b, c) { var d = T.exec(b); return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b }

    function Oa(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e))); return g }

    function Pa(a, b, c) { var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ca(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f); if (0 >= e || null == e) { if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0 } return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px" }

    function Qa(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display")))); for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a }
    n.extend({ cssHooks: { opacity: { get: function(a, b) { if (b) { var c = Fa(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function(a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = n.camelCase(b),
                    i = a.style; return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0) } }, css: function(a, b, c, d) { var e, f, g, h = n.camelCase(b); return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e } }), n.each(["height", "width"], function(a, b) { n.cssHooks[b] = { get: function(a, c, d) { return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() { return Pa(a, b, d) }) : Pa(a, b, d) : void 0 }, set: function(a, c, d) { var e, f = d && Ca(a),
                    g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f); return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g) } } }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) { return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, { marginLeft: 0 }, function() { return a.getBoundingClientRect().left })) + "px" : void 0 }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) { return b ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"]) : void 0 }), n.each({ margin: "", padding: "", border: "Width" }, function(a, b) { n.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Aa.test(a) || (n.cssHooks[a + b].set = Na) }), n.fn.extend({ css: function(a, b) { return K(this, function(a, b, c) { var d, e, f = {},
                    g = 0; if (n.isArray(b)) { for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d); return f } return void 0 !== c ? n.style(a, b, c) : n.css(a, b) }, a, b, arguments.length > 1) }, show: function() { return Qa(this, !0) }, hide: function() { return Qa(this) }, toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { V(this) ? n(this).show() : n(this).hide() }) } });

    function Ra(a, b, c, d, e) { return new Ra.prototype.init(a, b, c, d, e) }
    n.Tween = Ra, Ra.prototype = { constructor: Ra, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px") }, cur: function() { var a = Ra.propHooks[this.prop]; return a && a.get ? a.get(this) : Ra.propHooks._default.get(this) }, run: function(a) { var b, c = Ra.propHooks[this.prop]; return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this } }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = { _default: { get: function(a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function(a) { n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit) } } }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, n.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, n.fx = Ra.prototype.init, n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/,
        Va = /queueHooks$/;

    function Wa() { return a.setTimeout(function() { Sa = void 0 }), Sa = n.now() }

    function Xa(a, b) { var c, d = 0,
            e = { height: a }; for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a; return b && (e.opacity = e.width = a), e }

    function Ya(a, b, c) { for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d }

    function Za(a, b, c) { var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && V(a),
            q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() { h.unqueued || i() }), h.unqueued++, l.always(function() { l.always(function() { h.unqueued--, n.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2] })); for (d in b)
            if (e = b[d], Ua.exec(e)) { if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) { if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0 }
                m[d] = q && q[d] || n.style(a, d) } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
        else { q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() { n(a).hide() }), l.done(function() { var b;
                N.remove(a, "fxshow"); for (b in m) n.style(a, b, m[b]) }); for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0)) } }

    function $a(a, b) { var c, d, e, f, g; for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e }

    function _a(a, b, c) { var d, e, f = 0,
            g = _a.prefilters.length,
            h = n.Deferred().always(function() { delete i.elem }),
            i = function() { if (e) return !1; for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) },
            j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Sa || Wa(), duration: c.duration, tweens: [], createTween: function(b, c) { var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function(b) { var c = 0,
                        d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; d > c; c++) j.tweens[c].run(1); return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this } }),
            k = j.props; for ($a(k, j.opts.specialEasing); g > f; f++)
            if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) }
    n.Animation = n.extend(_a, { tweeners: { "*": [function(a, b) { var c = this.createTween(a, b); return W(c.elem, a, T.exec(b), c), c }] }, tweener: function(a, b) { n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G); for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b) }, prefilters: [Za], prefilter: function(a, b) { b ? _a.prefilters.unshift(a) : _a.prefilters.push(a) } }), n.speed = function(a, b, c) { var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b }; return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() { n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue) }, d }, n.fn.extend({ fadeTo: function(a, b, c, d) { return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function(a, b, c, d) { var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() { var b = _a(this, n.extend({}, a), f);
                        (e || N.get(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function(a, b, c) { var d = function(a) { var b = a.stop;
                    delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() { var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = N.get(this); if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]); for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));!b && c || n.dequeue(this, a) }) }, finish: function(a) { return a !== !1 && (a = a || "fx"), this.each(function() { var b, c = N.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0; for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish }) } }), n.each(["toggle", "show", "hide"], function(a, b) { var c = n.fn[b];
            n.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e) } }), n.each({ slideDown: Xa("show"), slideUp: Xa("hide"), slideToggle: Xa("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { n.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), n.timers = [], n.fx.tick = function() { var a, b = 0,
                c = n.timers; for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || n.fx.stop(), Sa = void 0 }, n.fx.timer = function(a) { n.timers.push(a), a() ? n.fx.start() : n.timers.pop() }, n.fx.interval = 13, n.fx.start = function() { Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval)) }, n.fx.stop = function() { a.clearInterval(Ta), Ta = null }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function(b, c) { return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) { var e = a.setTimeout(c, b);
                d.stop = function() { a.clearTimeout(e) } }) },
        function() { var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({ attr: function(a, b) { return K(this, n.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { n.removeAttr(this, a) }) } }), n.extend({ attr: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d)) }, attrHooks: { type: { set: function(a, b) { if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }, removeAttr: function(a, b) { var c, d, e = 0,
                f = b && b.match(G); if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c) } }), ab = { set: function(a, b, c) { return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c } }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) { var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) { var e, f; return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e } });
    var cb = /^(?:input|select|textarea|button)$/i,
        db = /^(?:a|area)$/i;
    n.fn.extend({ prop: function(a, b) { return K(this, n.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return this.each(function() { delete this[n.propFix[a] || a] }) } }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]),
                void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: { tabIndex: { get: function(a) { var b = n.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1 } } },
        propFix: { "for": "htmlFor", "class": "className" }
    }), l.optSelected || (n.propHooks.selected = { get: function(a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null }, set: function(a) { var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex) } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { n.propFix[this.toLowerCase()] = this });
    var eb = /[\t\r\n\f]/g;

    function fb(a) { return a.getAttribute && a.getAttribute("class") || "" }
    n.fn.extend({ addClass: function(a) { var b, c, d, e, f, g, h, i = 0; if (n.isFunction(a)) return this.each(function(b) { n(this).addClass(a.call(this, b, fb(this))) }); if ("string" == typeof a && a) { b = a.match(G) || []; while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) { g = 0; while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h) } } return this }, removeClass: function(a) { var b, c, d, e, f, g, h, i = 0; if (n.isFunction(a)) return this.each(function(b) { n(this).removeClass(a.call(this, b, fb(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof a && a) { b = a.match(G) || []; while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) { g = 0; while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h) } } return this }, toggleClass: function(a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) { n(this).toggleClass(a.call(this, c, fb(this), b), b) }) : this.each(function() { var b, d, e, f; if ("string" === c) { d = 0, e = n(this), f = a.match(G) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || "")) }) }, hasClass: function(a) { var b, c, d = 0;
            b = " " + a + " "; while (c = this[d++])
                if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
            return !1 } });
    var gb = /\r/g,
        hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({ val: function(a) { var b, c, d, e = this[0]; { if (arguments.length) return d = n.isFunction(a), this.each(function(c) { var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) { return null == a ? "" : a + "" })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c) } } }), n.extend({ valHooks: { option: { get: function(a) { var b = n.find.attr(a, "value"); return null != b ? b : n.trim(n.text(a)).replace(hb, " ") } }, select: { get: function(a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) { if (b = n(c).val(), f) return b;
                            g.push(b) }
                    return g }, set: function(a, b) { var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length; while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0); return c || (a.selectedIndex = -1), f } } } }), n.each(["radio", "checkbox"], function() { n.valHooks[this] = { set: function(a, b) { return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0 } }, l.checkOn || (n.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, { trigger: function(b, c, e, f) { var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : []; if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) { if (!f && !o.noBubble && !n.isWindow(e)) { for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a) }
                g = 0; while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault()); return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result } }, simulate: function(a, b, c) { var d = n.extend(new n.Event, c, { type: a, isSimulated: !0 });
            n.event.trigger(d, null, b) } }), n.fn.extend({ trigger: function(a, b) { return this.each(function() { n.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) { var c = this[0]; return c ? n.event.trigger(a, b, c, !0) : void 0 } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { n.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), n.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) } }), l.focusin = "onfocusin" in a, l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function(a, b) { var c = function(a) { n.event.simulate(b, a.target, n.event.fix(a)) };
        n.event.special[b] = { setup: function() { var d = this.ownerDocument || this,
                    e = N.access(d, b);
                e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1) }, teardown: function() { var d = this.ownerDocument || this,
                    e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b)) } } });
    var jb = a.location,
        kb = n.now(),
        lb = /\?/;
    n.parseJSON = function(a) { return JSON.parse(a + "") }, n.parseXML = function(b) { var c; if (!b || "string" != typeof b) return null; try { c = (new a.DOMParser).parseFromString(b, "text/xml") } catch (d) { c = void 0 } return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c };
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

    function wb(a) { return function(b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0,
                f = b.toLowerCase().match(G) || []; if (n.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } }

    function xb(a, b, c, d) { var e = {},
            f = a === tb;

        function g(h) { var i; return e[h] = !0, n.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") }

    function yb(a, b) { var c, d, e = n.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && n.extend(!0, a, d), a }

    function zb(a, b, c) { var d, e, f, g, h = a.contents,
            i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type")); if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) { i.unshift(e); break }
        if (i[0] in c) f = i[0];
        else { for (e in c) { if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break }
                g || (g = e) }
            f = f || g } return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0 }

    function Ab(a, b, c, d) { var e, f, g, h, i, j = {},
            k = a.dataTypes.slice(); if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift(); while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } }
    n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: jb.href, type: "GET", isLocal: pb.test(jb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": ub, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(a, b) { return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a) }, ajaxPrefilter: wb(sb), ajaxTransport: wb(tb), ajax: function(b, c) { "object" == typeof b && (c = b, b = void 0), c = c || {}; var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c),
                o = m.context || m,
                p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
                q = n.Deferred(),
                r = n.Callbacks("once memory"),
                s = m.statusCode || {},
                t = {},
                u = {},
                v = 0,
                w = "canceled",
                x = { readyState: 0, getResponseHeader: function(a) { var b; if (2 === v) { if (!h) { h = {}; while (b = ob.exec(g)) h[b[1].toLowerCase()] = b[2] }
                            b = h[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function() { return 2 === v ? g : null }, setRequestHeader: function(a, b) { var c = a.toLowerCase(); return v || (a = u[c] = u[c] || a, t[a] = b), this }, overrideMimeType: function(a) { return v || (m.mimeType = a), this }, statusCode: function(a) { var b; if (a)
                            if (2 > v)
                                for (b in a) s[b] = [s[b], a[b]];
                            else x.always(a[x.status]);
                        return this }, abort: function(a) { var b = a || w; return e && e.abort(b), z(0, b), this } }; if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) { j = d.createElement("a"); try { j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host } catch (y) { m.crossDomain = !0 } } if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;
            k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]); for (l in m.headers) x.setRequestHeader(l, m.headers[l]); if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
            w = "abort"; for (l in { success: 1, error: 1, complete: 1 }) x[l](m[l]); if (e = xb(tb, m, c, x)) { if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() { x.abort("timeout") }, m.timeout)); try { v = 1, e.send(t, z) } catch (y) { if (!(2 > v)) throw y;
                    z(-1, y) } } else z(-1, "No Transport");

            function z(b, c, d, h) { var j, l, t, u, w, y = c;
                2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop"))) } return x }, getJSON: function(a, b, c) { return n.get(a, b, c, "json") }, getScript: function(a, b) { return n.get(a, void 0, b, "script") } }), n.each(["get", "post"], function(a, b) { n[b] = function(a, c, d, e) { return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a)) } }), n._evalUrl = function(a) { return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, n.fn.extend({ wrapAll: function(a) { var b; return n.isFunction(a) ? this.each(function(b) { n(this).wrapAll(a.call(this, b)) }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() { var a = this; while (a.firstElementChild) a = a.firstElementChild; return a }).append(this)), this) }, wrapInner: function(a) { return n.isFunction(a) ? this.each(function(b) { n(this).wrapInner(a.call(this, b)) }) : this.each(function() { var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function(a) { var b = n.isFunction(a); return this.each(function(c) { n(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function() { return this.parent().each(function() { n.nodeName(this, "body") || n(this).replaceWith(this.childNodes) }).end() } }), n.expr.filters.hidden = function(a) { return !n.expr.filters.visible(a) }, n.expr.filters.visible = function(a) { return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0 };
    var Bb = /%20/g,
        Cb = /\[\]$/,
        Db = /\r?\n/g,
        Eb = /^(?:submit|button|image|reset|file)$/i,
        Fb = /^(?:input|select|textarea|keygen)/i;

    function Gb(a, b, c, d) { var e; if (n.isArray(b)) n.each(b, function(b, e) { c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Gb(a + "[" + e + "]", b[e], c, d) }
    n.param = function(a, b) { var c, d = [],
            e = function(a, b) { b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) Gb(c, a[c], b, e); return d.join("&").replace(Bb, "+") }, n.fn.extend({ serialize: function() { return n.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = n.prop(this, "elements"); return a ? n.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a)) }).map(function(a, b) { var c = n(this).val(); return null == c ? null : n.isArray(c) ? n.map(c, function(a) { return { name: b.name, value: a.replace(Db, "\r\n") } }) : { name: b.name, value: c.replace(Db, "\r\n") } }).get() } }), n.ajaxSettings.xhr = function() { try { return new a.XMLHttpRequest } catch (b) {} };
    var Hb = { 0: 200, 1223: 204 },
        Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function(b) { var c, d; return l.cors || Ib && !b.crossDomain ? { send: function(e, f) { var g, h = b.xhr(); if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"); for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) { return function() { c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders())) } }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() { 4 === h.readyState && a.setTimeout(function() { c && d() }) }, c = c("abort"); try { h.send(b.hasContent && b.data || null) } catch (i) { if (c) throw i } }, abort: function() { c && c() } } : void 0 }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a) { return n.globalEval(a), a } } }), n.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), n.ajaxTransport("script", function(a) { if (a.crossDomain) { var b, c; return { send: function(e, f) { b = n("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function(a) { b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type) }), d.head.appendChild(b[0]) }, abort: function() { c && c() } } } });
    var Jb = [],
        Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = Jb.pop() || n.expando + "_" + kb++; return this[a] = !0, a } }), n.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || n.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), n.parseHTML = function(a, b, c) { if (!a || "string" != typeof a) return null; "boolean" == typeof b && (c = b, b = !1), b = b || d; var e = x.exec(a),
            f = !c && []; return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes)) };
    var Lb = n.fn.load;
    n.fn.load = function(a, b, c) { if ("string" != typeof a && Lb) return Lb.apply(this, arguments); var d, e, f, g = this,
            h = a.indexOf(" "); return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function(a) { f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a) }).always(c && function(a, b) { g.each(function() { c.apply(this, f || [a.responseText, b, a]) }) }), this }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { n.fn[b] = function(a) { return this.on(b, a) } }), n.expr.filters.animated = function(a) { return n.grep(n.timers, function(b) { return a === b.elem }).length };

    function Mb(a) { return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView }
    n.offset = { setOffset: function(a, b, c) { var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, n.fn.extend({ offset: function(a) { if (arguments.length) return void 0 === a ? this : this.each(function(b) { n.offset.setOffset(this, a, b) }); var b, c, d = this[0],
                e = { top: 0, left: 0 },
                f = d && d.ownerDocument; if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e }, position: function() { if (this[0]) { var a, b, c = this[0],
                    d = { top: 0, left: 0 }; return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { var a = this.offsetParent; while (a && "static" === n.css(a, "position")) a = a.offsetParent; return a || Ea }) } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) { var c = "pageYOffset" === b;
        n.fn[a] = function(d) { return K(this, function(a, d, e) { var f = Mb(a); return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e) }, a, d, arguments.length) } }), n.each(["top", "left"], function(a, b) { n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) { return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0 }) }), n.each({ Height: "height", Width: "width" }, function(a, b) { n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) { n.fn[d] = function(d, e) { var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border"); return K(this, function(b, c, d) { var e; return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g) }, b, f ? d : void 0, f, null) } }) }), n.fn.extend({ bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) }, size: function() { return this.length } }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return n });
    var Nb = a.jQuery,
        Ob = a.$;
    return n.noConflict = function(b) { return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n }, b || (a.jQuery = a.$ = n), n
});


/*!
 DataTables 1.10.13
 Â©2008-2016 SpryMedia Ltd - datatables.net/license
*/
(function(h) { "function" === typeof define && define.amd ? define(["jquery"], function(E) { return h(E, window, document) }) : "object" === typeof exports ? module.exports = function(E, H) { E || (E = window);
        H || (H = "undefined" !== typeof window ? require("jquery") : require("jquery")(E)); return h(H, E, E.document) } : h(jQuery, window, document) })(function(h, E, H, k) {
    function Y(a) {
        var b, c, d = {};
        h.each(a, function(e) {
            if ((b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")) c = e.replace(b[0], b[2].toLowerCase()),
                d[c] = e, "o" === b[1] && Y(a[e])
        });
        a._hungarianMap = d
    }

    function J(a, b, c) { a._hungarianMap || Y(a); var d;
        h.each(b, function(e) { d = a._hungarianMap[e]; if (d !== k && (c || b[d] === k)) "o" === d.charAt(0) ? (b[d] || (b[d] = {}), h.extend(!0, b[d], b[e]), J(a[d], b[d], c)) : b[d] = b[e] }) }

    function Fa(a) {
        var b = m.defaults.oLanguage,
            c = a.sZeroRecords;
        !a.sEmptyTable && (c && "No data available in table" === b.sEmptyTable) && F(a, a, "sZeroRecords", "sEmptyTable");
        !a.sLoadingRecords && (c && "Loading..." === b.sLoadingRecords) && F(a, a, "sZeroRecords", "sLoadingRecords");
        a.sInfoThousands && (a.sThousands = a.sInfoThousands);
        (a = a.sDecimal) && fb(a)
    }

    function gb(a) {
        A(a, "ordering", "bSort");
        A(a, "orderMulti", "bSortMulti");
        A(a, "orderClasses", "bSortClasses");
        A(a, "orderCellsTop", "bSortCellsTop");
        A(a, "order", "aaSorting");
        A(a, "orderFixed", "aaSortingFixed");
        A(a, "paging", "bPaginate");
        A(a, "pagingType", "sPaginationType");
        A(a, "pageLength", "iDisplayLength");
        A(a, "searching", "bFilter");
        "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
        "boolean" === typeof a.scrollX && (a.scrollX =
            a.scrollX ? "100%" : "");
        if (a = a.aoSearchCols)
            for (var b = 0, c = a.length; b < c; b++) a[b] && J(m.models.oSearch, a[b])
    }

    function hb(a) { A(a, "orderable", "bSortable");
        A(a, "orderData", "aDataSort");
        A(a, "orderSequence", "asSorting");
        A(a, "orderDataType", "sortDataType"); var b = a.aDataSort;
        b && !h.isArray(b) && (a.aDataSort = [b]) }

    function ib(a) {
        if (!m.__browser) {
            var b = {};
            m.__browser = b;
            var c = h("<div/>").css({ position: "fixed", top: 0, left: -1 * h(E).scrollLeft(), height: 1, width: 1, overflow: "hidden" }).append(h("<div/>").css({
                    position: "absolute",
                    top: 1,
                    left: 1,
                    width: 100,
                    overflow: "scroll"
                }).append(h("<div/>").css({ width: "100%", height: 10 }))).appendTo("body"),
                d = c.children(),
                e = d.children();
            b.barWidth = d[0].offsetWidth - d[0].clientWidth;
            b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
            b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
            b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
            c.remove()
        }
        h.extend(a.oBrowser, m.__browser);
        a.oScroll.iBarWidth = m.__browser.barWidth
    }

    function jb(a, b, c, d, e, f) {
        var g, j = !1;
        c !== k && (g = c, j = !0);
        for (; d !==
            e;) a.hasOwnProperty(d) && (g = j ? b(g, a[d], d, a) : a[d], j = !0, d += f);
        return g
    }

    function Ga(a, b) { var c = m.defaults.column,
            d = a.aoColumns.length,
            c = h.extend({}, m.models.oColumn, c, { nTh: b ? b : H.createElement("th"), sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "", aDataSort: c.aDataSort ? c.aDataSort : [d], mData: c.mData ? c.mData : d, idx: d });
        a.aoColumns.push(c);
        c = a.aoPreSearchCols;
        c[d] = h.extend({}, m.models.oSearch, c[d]);
        la(a, d, h(b).data()) }

    function la(a, b, c) {
        var b = a.aoColumns[b],
            d = a.oClasses,
            e = h(b.nTh);
        if (!b.sWidthOrig) {
            b.sWidthOrig =
                e.attr("width") || null;
            var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
            f && (b.sWidthOrig = f[1])
        }
        c !== k && null !== c && (hb(c), J(m.defaults.column, c), c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), h.extend(b, c), F(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== k && (b.aDataSort = [c.iDataSort]), F(b, c, "aDataSort"));
        var g = b.mData,
            j = R(g),
            i = b.mRender ? R(b.mRender) : null,
            c = function(a) { return "string" === typeof a && -1 !== a.indexOf("@") };
        b._bAttrSrc = h.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
        b._setter = null;
        b.fnGetData = function(a, b, c) { var d = j(a, b, k, c); return i && b ? i(d, b, a, c) : d };
        b.fnSetData = function(a, b, c) { return S(g)(a, b, c) };
        "number" !== typeof g && (a._rowReadObject = !0);
        a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));
        a = -1 !== h.inArray("asc", b.asSorting);
        c = -1 !== h.inArray("desc", b.asSorting);
        !b.bSortable || !a && !c ? (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "") : a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI =
            d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI)
    }

    function Z(a) { if (!1 !== a.oFeatures.bAutoWidth) { var b = a.aoColumns;
            Ha(a); for (var c = 0, d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth }
        b = a.oScroll;
        ("" !== b.sY || "" !== b.sX) && ma(a);
        s(a, null, "column-sizing", [a]) }

    function $(a, b) { var c = na(a, "bVisible"); return "number" === typeof c[b] ? c[b] : null }

    function aa(a, b) {
        var c = na(a, "bVisible"),
            c = h.inArray(b,
                c);
        return -1 !== c ? c : null
    }

    function ba(a) { var b = 0;
        h.each(a.aoColumns, function(a, d) { d.bVisible && "none" !== h(d.nTh).css("display") && b++ }); return b }

    function na(a, b) { var c = [];
        h.map(a.aoColumns, function(a, e) { a[b] && c.push(e) }); return c }

    function Ia(a) {
        var b = a.aoColumns,
            c = a.aoData,
            d = m.ext.type.detect,
            e, f, g, j, i, h, l, q, r;
        e = 0;
        for (f = b.length; e < f; e++)
            if (l = b[e], r = [], !l.sType && l._sManualType) l.sType = l._sManualType;
            else if (!l.sType) {
            g = 0;
            for (j = d.length; g < j; g++) {
                i = 0;
                for (h = c.length; i < h; i++) {
                    r[i] === k && (r[i] = B(a, i, e, "type"));
                    q = d[g](r[i], a);
                    if (!q && g !== d.length - 1) break;
                    if ("html" === q) break
                }
                if (q) { l.sType = q; break }
            }
            l.sType || (l.sType = "string")
        }
    }

    function kb(a, b, c, d) {
        var e, f, g, j, i, n, l = a.aoColumns;
        if (b)
            for (e = b.length - 1; 0 <= e; e--) {
                n = b[e];
                var q = n.targets !== k ? n.targets : n.aTargets;
                h.isArray(q) || (q = [q]);
                f = 0;
                for (g = q.length; f < g; f++)
                    if ("number" === typeof q[f] && 0 <= q[f]) { for (; l.length <= q[f];) Ga(a);
                        d(q[f], n) } else if ("number" === typeof q[f] && 0 > q[f]) d(l.length + q[f], n);
                else if ("string" === typeof q[f]) {
                    j = 0;
                    for (i = l.length; j < i; j++)("_all" == q[f] || h(l[j].nTh).hasClass(q[f])) &&
                        d(j, n)
                }
            }
        if (c) { e = 0; for (a = c.length; e < a; e++) d(e, c[e]) }
    }

    function N(a, b, c, d) { var e = a.aoData.length,
            f = h.extend(!0, {}, m.models.oRow, { src: c ? "dom" : "data", idx: e });
        f._aData = b;
        a.aoData.push(f); for (var g = a.aoColumns, j = 0, i = g.length; j < i; j++) g[j].sType = null;
        a.aiDisplayMaster.push(e);
        b = a.rowIdFn(b);
        b !== k && (a.aIds[b] = f);
        (c || !a.oFeatures.bDeferRender) && Ja(a, e, c, d); return e }

    function oa(a, b) { var c;
        b instanceof h || (b = h(b)); return b.map(function(b, e) { c = Ka(a, e); return N(a, c.data, e, c.cells) }) }

    function B(a, b, c, d) {
        var e = a.iDraw,
            f = a.aoColumns[c],
            g = a.aoData[b]._aData,
            j = f.sDefaultContent,
            i = f.fnGetData(g, d, { settings: a, row: b, col: c });
        if (i === k) return a.iDrawError != e && null === j && (K(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = e), j;
        if ((i === g || null === i) && null !== j && d !== k) i = j;
        else if ("function" === typeof i) return i.call(g);
        return null === i && "display" == d ? "" : i
    }

    function lb(a, b, c, d) { a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, { settings: a, row: b, col: c }) }

    function La(a) { return h.map(a.match(/(\\.|[^\.])+/g) || [""], function(a) { return a.replace(/\\\./g, ".") }) }

    function R(a) {
        if (h.isPlainObject(a)) { var b = {};
            h.each(a, function(a, c) { c && (b[a] = R(c)) }); return function(a, c, f, g) { var j = b[c] || b._; return j !== k ? j(a, c, f, g) : a } }
        if (null === a) return function(a) { return a };
        if ("function" === typeof a) return function(b, c, f, g) { return a(b, c, f, g) };
        if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
            var c = function(a, b, f) {
                var g, j;
                if ("" !== f) {
                    j = La(f);
                    for (var i = 0, n = j.length; i < n; i++) { f = j[i].match(ca);
                        g = j[i].match(V); if (f) { j[i] = j[i].replace(ca, ""); "" !== j[i] && (a = a[j[i]]);
                            g = [];
                            j.splice(0, i + 1);
                            j = j.join("."); if (h.isArray(a)) { i = 0; for (n = a.length; i < n; i++) g.push(c(a[i], b, j)) }
                            a = f[0].substring(1, f[0].length - 1);
                            a = "" === a ? g : g.join(a); break } else if (g) { j[i] = j[i].replace(V, "");
                            a = a[j[i]](); continue } if (null === a || a[j[i]] === k) return k;
                        a = a[j[i]] }
                }
                return a
            };
            return function(b, e) { return c(b, e, a) }
        }
        return function(b) { return b[a] }
    }

    function S(a) {
        if (h.isPlainObject(a)) return S(a._);
        if (null === a) return function() {};
        if ("function" === typeof a) return function(b, d, e) { a(b, "set", d, e) };
        if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
            var b = function(a, d, e) {
                var e = La(e),
                    f;
                f = e[e.length - 1];
                for (var g, j, i = 0, n = e.length - 1; i < n; i++) {
                    g = e[i].match(ca);
                    j = e[i].match(V);
                    if (g) { e[i] = e[i].replace(ca, "");
                        a[e[i]] = [];
                        f = e.slice();
                        f.splice(0, i + 1);
                        g = f.join("."); if (h.isArray(d)) { j = 0; for (n = d.length; j < n; j++) f = {}, b(f, d[j], g), a[e[i]].push(f) } else a[e[i]] = d; return }
                    j && (e[i] = e[i].replace(V,
                        ""), a = a[e[i]](d));
                    if (null === a[e[i]] || a[e[i]] === k) a[e[i]] = {};
                    a = a[e[i]]
                }
                if (f.match(V)) a[f.replace(V, "")](d);
                else a[f.replace(ca, "")] = d
            };
            return function(c, d) { return b(c, d, a) }
        }
        return function(b, d) { b[a] = d }
    }

    function Ma(a) { return D(a.aoData, "_aData") }

    function pa(a) { a.aoData.length = 0;
        a.aiDisplayMaster.length = 0;
        a.aiDisplay.length = 0;
        a.aIds = {} }

    function qa(a, b, c) { for (var d = -1, e = 0, f = a.length; e < f; e++) a[e] == b ? d = e : a[e] > b && a[e]--; - 1 != d && c === k && a.splice(d, 1) }

    function da(a, b, c, d) {
        var e = a.aoData[b],
            f, g = function(c, d) {
                for (; c.childNodes.length;) c.removeChild(c.firstChild);
                c.innerHTML = B(a, b, d, "display")
            };
        if ("dom" === c || (!c || "auto" === c) && "dom" === e.src) e._aData = Ka(a, e, d, d === k ? k : e._aData).data;
        else { var j = e.anCells; if (j)
                if (d !== k) g(j[d], d);
                else { c = 0; for (f = j.length; c < f; c++) g(j[c], c) } }
        e._aSortData = null;
        e._aFilterData = null;
        g = a.aoColumns;
        if (d !== k) g[d].sType = null;
        else { c = 0; for (f = g.length; c < f; c++) g[c].sType = null;
            Na(a, e) }
    }

    function Ka(a, b, c, d) {
        var e = [],
            f = b.firstChild,
            g, j, i = 0,
            n, l = a.aoColumns,
            q = a._rowReadObject,
            d = d !== k ? d : q ? {} : [],
            r = function(a, b) {
                if ("string" === typeof a) {
                    var c = a.indexOf("@"); -
                    1 !== c && (c = a.substring(c + 1), S(a)(d, b.getAttribute(c)))
                }
            },
            m = function(a) { if (c === k || c === i) j = l[i], n = h.trim(a.innerHTML), j && j._bAttrSrc ? (S(j.mData._)(d, n), r(j.mData.sort, a), r(j.mData.type, a), r(j.mData.filter, a)) : q ? (j._setter || (j._setter = S(j.mData)), j._setter(d, n)) : d[i] = n;
                i++ };
        if (f)
            for (; f;) { g = f.nodeName.toUpperCase(); if ("TD" == g || "TH" == g) m(f), e.push(f);
                f = f.nextSibling } else { e = b.anCells;
                f = 0; for (g = e.length; f < g; f++) m(e[f]) }
        if (b = b.firstChild ? b : b.nTr)(b = b.getAttribute("id")) && S(a.rowId)(d, b);
        return { data: d, cells: e }
    }

    function Ja(a, b, c, d) {
        var e = a.aoData[b],
            f = e._aData,
            g = [],
            j, i, n, l, q;
        if (null === e.nTr) {
            j = c || H.createElement("tr");
            e.nTr = j;
            e.anCells = g;
            j._DT_RowIndex = b;
            Na(a, e);
            l = 0;
            for (q = a.aoColumns.length; l < q; l++) {
                n = a.aoColumns[l];
                i = c ? d[l] : H.createElement(n.sCellType);
                i._DT_CellIndex = { row: b, column: l };
                g.push(i);
                if ((!c || n.mRender || n.mData !== l) && (!h.isPlainObject(n.mData) || n.mData._ !== l + ".display")) i.innerHTML = B(a, b, l, "display");
                n.sClass && (i.className += " " + n.sClass);
                n.bVisible && !c ? j.appendChild(i) : !n.bVisible && c && i.parentNode.removeChild(i);
                n.fnCreatedCell && n.fnCreatedCell.call(a.oInstance, i, B(a, b, l), f, b, l)
            }
            s(a, "aoRowCreatedCallback", null, [j, f, b])
        }
        e.nTr.setAttribute("role", "row")
    }

    function Na(a, b) { var c = b.nTr,
            d = b._aData; if (c) { var e = a.rowIdFn(d);
            e && (c.id = e);
            d.DT_RowClass && (e = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? sa(b.__rowc.concat(e)) : e, h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
            d.DT_RowAttr && h(c).attr(d.DT_RowAttr);
            d.DT_RowData && h(c).data(d.DT_RowData) } }

    function mb(a) {
        var b, c, d, e, f, g = a.nTHead,
            j = a.nTFoot,
            i = 0 ===
            h("th, td", g).length,
            n = a.oClasses,
            l = a.aoColumns;
        i && (e = h("<tr/>").appendTo(g));
        b = 0;
        for (c = l.length; b < c; b++) f = l[b], d = h(f.nTh).addClass(f.sClass), i && d.appendTo(e), a.oFeatures.bSort && (d.addClass(f.sSortingClass), !1 !== f.bSortable && (d.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), Oa(a, f.nTh, b))), f.sTitle != d[0].innerHTML && d.html(f.sTitle), Pa(a, "header")(a, d, f, n);
        i && ea(a.aoHeader, g);
        h(g).find(">tr").attr("role", "row");
        h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);
        h(j).find(">tr>th, >tr>td").addClass(n.sFooterTH);
        if (null !== j) { a = a.aoFooter[0];
            b = 0; for (c = a.length; b < c; b++) f = l[b], f.nTf = a[b].cell, f.sClass && h(f.nTf).addClass(f.sClass) }
    }

    function fa(a, b, c) {
        var d, e, f, g = [],
            j = [],
            i = a.aoColumns.length,
            n;
        if (b) {
            c === k && (c = !1);
            d = 0;
            for (e = b.length; d < e; d++) { g[d] = b[d].slice();
                g[d].nTr = b[d].nTr; for (f = i - 1; 0 <= f; f--) !a.aoColumns[f].bVisible && !c && g[d].splice(f, 1);
                j.push([]) }
            d = 0;
            for (e = g.length; d < e; d++) {
                if (a = g[d].nTr)
                    for (; f = a.firstChild;) a.removeChild(f);
                f = 0;
                for (b = g[d].length; f < b; f++)
                    if (n = i = 1, j[d][f] === k) {
                        a.appendChild(g[d][f].cell);
                        for (j[d][f] = 1; g[d + i] !== k && g[d][f].cell == g[d + i][f].cell;) j[d + i][f] = 1, i++;
                        for (; g[d][f + n] !== k && g[d][f].cell == g[d][f + n].cell;) { for (c = 0; c < i; c++) j[d + c][f + n] = 1;
                            n++ }
                        h(g[d][f].cell).attr("rowspan", i).attr("colspan", n)
                    }
            }
        }
    }

    function O(a) {
        var b = s(a, "aoPreDrawCallback", "preDraw", [a]);
        if (-1 !== h.inArray(!1, b)) C(a, !1);
        else {
            var b = [],
                c = 0,
                d = a.asStripeClasses,
                e = d.length,
                f = a.oLanguage,
                g = a.iInitDisplayStart,
                j = "ssp" == y(a),
                i = a.aiDisplay;
            a.bDrawing = !0;
            g !== k && -1 !== g && (a._iDisplayStart = j ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1);
            var g = a._iDisplayStart,
                n = a.fnDisplayEnd();
            if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, C(a, !1);
            else if (j) { if (!a.bDestroying && !nb(a)) return } else a.iDraw++;
            if (0 !== i.length) { f = j ? a.aoData.length : n; for (j = j ? 0 : g; j < f; j++) { var l = i[j],
                        q = a.aoData[l];
                    null === q.nTr && Ja(a, l);
                    l = q.nTr; if (0 !== e) { var r = d[c % e];
                        q._sRowStripe != r && (h(l).removeClass(q._sRowStripe).addClass(r), q._sRowStripe = r) }
                    s(a, "aoRowCallback", null, [l, q._aData, c, j]);
                    b.push(l);
                    c++ } } else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == y(a) ? c = f.sLoadingRecords :
                f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = h("<tr/>", { "class": e ? d[0] : "" }).append(h("<td />", { valign: "top", colSpan: ba(a), "class": a.oClasses.sRowEmpty }).html(c))[0];
            s(a, "aoHeaderCallback", "header", [h(a.nTHead).children("tr")[0], Ma(a), g, n, i]);
            s(a, "aoFooterCallback", "footer", [h(a.nTFoot).children("tr")[0], Ma(a), g, n, i]);
            d = h(a.nTBody);
            d.children().detach();
            d.append(h(b));
            s(a, "aoDrawCallback", "draw", [a]);
            a.bSorted = !1;
            a.bFiltered = !1;
            a.bDrawing = !1
        }
    }

    function T(a, b) {
        var c = a.oFeatures,
            d = c.bFilter;
        c.bSort && ob(a);
        d ? ga(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
        !0 !== b && (a._iDisplayStart = 0);
        a._drawHold = b;
        O(a);
        a._drawHold = !1
    }

    function pb(a) {
        var b = a.oClasses,
            c = h(a.nTable),
            c = h("<div/>").insertBefore(c),
            d = a.oFeatures,
            e = h("<div/>", { id: a.sTableId + "_wrapper", "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter) });
        a.nHolding = c[0];
        a.nTableWrapper = e[0];
        a.nTableReinsertBefore = a.nTable.nextSibling;
        for (var f = a.sDom.split(""), g, j, i, n, l, q, k = 0; k < f.length; k++) {
            g = null;
            j = f[k];
            if ("<" == j) {
                i = h("<div/>")[0];
                n = f[k + 1];
                if ("'" == n || '"' == n) { l = ""; for (q = 2; f[k + q] != n;) l += f[k + q], q++; "H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter); - 1 != l.indexOf(".") ? (n = l.split("."), i.id = n[0].substr(1, n[0].length - 1), i.className = n[1]) : "#" == l.charAt(0) ? i.id = l.substr(1, l.length - 1) : i.className = l;
                    k += q }
                e.append(i);
                e = h(i)
            } else if (">" == j) e = e.parent();
            else if ("l" == j && d.bPaginate && d.bLengthChange) g = qb(a);
            else if ("f" == j && d.bFilter) g = rb(a);
            else if ("r" == j && d.bProcessing) g = sb(a);
            else if ("t" == j) g = tb(a);
            else if ("i" == j && d.bInfo) g = ub(a);
            else if ("p" ==
                j && d.bPaginate) g = vb(a);
            else if (0 !== m.ext.feature.length) { i = m.ext.feature;
                q = 0; for (n = i.length; q < n; q++)
                    if (j == i[q].cFeature) { g = i[q].fnInit(a); break } }
            g && (i = a.aanFeatures, i[j] || (i[j] = []), i[j].push(g), e.append(g))
        }
        c.replaceWith(e);
        a.nHolding = null
    }

    function ea(a, b) {
        var c = h(b).children("tr"),
            d, e, f, g, j, i, n, l, q, k;
        a.splice(0, a.length);
        f = 0;
        for (i = c.length; f < i; f++) a.push([]);
        f = 0;
        for (i = c.length; f < i; f++) {
            d = c[f];
            for (e = d.firstChild; e;) {
                if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) {
                    l = 1 * e.getAttribute("colspan");
                    q = 1 * e.getAttribute("rowspan");
                    l = !l || 0 === l || 1 === l ? 1 : l;
                    q = !q || 0 === q || 1 === q ? 1 : q;
                    g = 0;
                    for (j = a[f]; j[g];) g++;
                    n = g;
                    k = 1 === l ? !0 : !1;
                    for (j = 0; j < l; j++)
                        for (g = 0; g < q; g++) a[f + g][n + j] = { cell: e, unique: k }, a[f + g].nTr = d
                }
                e = e.nextSibling
            }
        }
    }

    function ta(a, b, c) { var d = [];
        c || (c = a.aoHeader, b && (c = [], ea(c, b))); for (var b = 0, e = c.length; b < e; b++)
            for (var f = 0, g = c[b].length; f < g; f++)
                if (c[b][f].unique && (!d[f] || !a.bSortCellsTop)) d[f] = c[b][f].cell;
        return d }

    function ua(a, b, c) {
        s(a, "aoServerParams", "serverParams", [b]);
        if (b && h.isArray(b)) {
            var d = {},
                e = /(.*?)\[\]$/;
            h.each(b, function(a, b) { var c = b.name.match(e);
                c ? (c = c[0], d[c] || (d[c] = []), d[c].push(b.value)) : d[b.name] = b.value });
            b = d
        }
        var f, g = a.ajax,
            j = a.oInstance,
            i = function(b) { s(a, null, "xhr", [a, b, a.jqXHR]);
                c(b) };
        if (h.isPlainObject(g) && g.data) { f = g.data; var n = h.isFunction(f) ? f(b, a) : f,
                b = h.isFunction(f) && n ? n : h.extend(!0, b, n);
            delete g.data }
        n = {
            data: b,
            success: function(b) { var c = b.error || b.sError;
                c && K(a, 0, c);
                a.json = b;
                i(b) },
            dataType: "json",
            cache: !1,
            type: a.sServerMethod,
            error: function(b, c) {
                var d = s(a, null, "xhr", [a, null, a.jqXHR]); - 1 === h.inArray(!0, d) && ("parsererror" == c ? K(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && K(a, 0, "Ajax error", 7));
                C(a, !1)
            }
        };
        a.oAjaxData = b;
        s(a, null, "preXhr", [a, b]);
        a.fnServerData ? a.fnServerData.call(j, a.sAjaxSource, h.map(b, function(a, b) { return { name: b, value: a } }), i, a) : a.sAjaxSource || "string" === typeof g ? a.jqXHR = h.ajax(h.extend(n, { url: g || a.sAjaxSource })) : h.isFunction(g) ? a.jqXHR = g.call(j, b, i, a) : (a.jqXHR = h.ajax(h.extend(n, g)), g.data = f)
    }

    function nb(a) {
        return a.bAjaxDataGet ? (a.iDraw++, C(a, !0), ua(a, wb(a), function(b) { xb(a, b) }), !1) : !0
    }

    function wb(a) {
        var b = a.aoColumns,
            c = b.length,
            d = a.oFeatures,
            e = a.oPreviousSearch,
            f = a.aoPreSearchCols,
            g, j = [],
            i, n, l, k = W(a);
        g = a._iDisplayStart;
        i = !1 !== d.bPaginate ? a._iDisplayLength : -1;
        var r = function(a, b) { j.push({ name: a, value: b }) };
        r("sEcho", a.iDraw);
        r("iColumns", c);
        r("sColumns", D(b, "sName").join(","));
        r("iDisplayStart", g);
        r("iDisplayLength", i);
        var ra = { draw: a.iDraw, columns: [], order: [], start: g, length: i, search: { value: e.sSearch, regex: e.bRegex } };
        for (g = 0; g < c; g++) n = b[g],
            l = f[g], i = "function" == typeof n.mData ? "function" : n.mData, ra.columns.push({ data: i, name: n.sName, searchable: n.bSearchable, orderable: n.bSortable, search: { value: l.sSearch, regex: l.bRegex } }), r("mDataProp_" + g, i), d.bFilter && (r("sSearch_" + g, l.sSearch), r("bRegex_" + g, l.bRegex), r("bSearchable_" + g, n.bSearchable)), d.bSort && r("bSortable_" + g, n.bSortable);
        d.bFilter && (r("sSearch", e.sSearch), r("bRegex", e.bRegex));
        d.bSort && (h.each(k, function(a, b) {
            ra.order.push({ column: b.col, dir: b.dir });
            r("iSortCol_" + a, b.col);
            r("sSortDir_" +
                a, b.dir)
        }), r("iSortingCols", k.length));
        b = m.ext.legacy.ajax;
        return null === b ? a.sAjaxSource ? j : ra : b ? j : ra
    }

    function xb(a, b) {
        var c = va(a, b),
            d = b.sEcho !== k ? b.sEcho : b.draw,
            e = b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal,
            f = b.iTotalDisplayRecords !== k ? b.iTotalDisplayRecords : b.recordsFiltered;
        if (d) { if (1 * d < a.iDraw) return;
            a.iDraw = 1 * d }
        pa(a);
        a._iRecordsTotal = parseInt(e, 10);
        a._iRecordsDisplay = parseInt(f, 10);
        d = 0;
        for (e = c.length; d < e; d++) N(a, c[d]);
        a.aiDisplay = a.aiDisplayMaster.slice();
        a.bAjaxDataGet = !1;
        O(a);
        a._bInitComplete ||
            wa(a, b);
        a.bAjaxDataGet = !0;
        C(a, !1)
    }

    function va(a, b) { var c = h.isPlainObject(a.ajax) && a.ajax.dataSrc !== k ? a.ajax.dataSrc : a.sAjaxDataProp; return "data" === c ? b.aaData || b[c] : "" !== c ? R(c)(b) : b }

    function rb(a) {
        var b = a.oClasses,
            c = a.sTableId,
            d = a.oLanguage,
            e = a.oPreviousSearch,
            f = a.aanFeatures,
            g = '<input type="search" class="' + b.sFilterInput + '"/>',
            j = d.sSearch,
            j = j.match(/_INPUT_/) ? j.replace("_INPUT_", g) : j + g,
            b = h("<div/>", { id: !f.f ? c + "_filter" : null, "class": b.sFilter }).append(h("<label/>").append(j)),
            f = function() {
                var b = !this.value ?
                    "" : this.value;
                b != e.sSearch && (ga(a, { sSearch: b, bRegex: e.bRegex, bSmart: e.bSmart, bCaseInsensitive: e.bCaseInsensitive }), a._iDisplayStart = 0, O(a))
            },
            g = null !== a.searchDelay ? a.searchDelay : "ssp" === y(a) ? 400 : 0,
            i = h("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", g ? Qa(f, g) : f).on("keypress.DT", function(a) { if (13 == a.keyCode) return !1 }).attr("aria-controls", c);
        h(a.nTable).on("search.dt.DT", function(b, c) { if (a === c) try { i[0] !== H.activeElement && i.val(e.sSearch) } catch (d) {} });
        return b[0]
    }

    function ga(a, b, c) { var d = a.oPreviousSearch,
            e = a.aoPreSearchCols,
            f = function(a) { d.sSearch = a.sSearch;
                d.bRegex = a.bRegex;
                d.bSmart = a.bSmart;
                d.bCaseInsensitive = a.bCaseInsensitive };
        Ia(a); if ("ssp" != y(a)) { yb(a, b.sSearch, c, b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive);
            f(b); for (b = 0; b < e.length; b++) zb(a, e[b].sSearch, b, e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex, e[b].bSmart, e[b].bCaseInsensitive);
            Ab(a) } else f(b);
        a.bFiltered = !0;
        s(a, null, "search", [a]) }

    function Ab(a) {
        for (var b =
                m.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length; f < g; f++) { for (var j = [], i = 0, n = c.length; i < n; i++) e = c[i], d = a.aoData[e], b[f](a, d._aFilterData, e, d._aData, i) && j.push(e);
            c.length = 0;
            h.merge(c, j) }
    }

    function zb(a, b, c, d, e, f) { if ("" !== b) { for (var g = [], j = a.aiDisplay, d = Ra(b, d, e, f), e = 0; e < j.length; e++) b = a.aoData[j[e]]._aFilterData[c], d.test(b) && g.push(j[e]);
            a.aiDisplay = g } }

    function yb(a, b, c, d, e, f) {
        var d = Ra(b, d, e, f),
            f = a.oPreviousSearch.sSearch,
            g = a.aiDisplayMaster,
            j, e = [];
        0 !== m.ext.search.length && (c = !0);
        j = Bb(a);
        if (0 >= b.length) a.aiDisplay =
            g.slice();
        else { if (j || c || f.length > b.length || 0 !== b.indexOf(f) || a.bSorted) a.aiDisplay = g.slice();
            b = a.aiDisplay; for (c = 0; c < b.length; c++) d.test(a.aoData[b[c]]._sFilterRow) && e.push(b[c]);
            a.aiDisplay = e }
    }

    function Ra(a, b, c, d) { a = b ? a : Sa(a);
        c && (a = "^(?=.*?" + h.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function(a) { if ('"' === a.charAt(0)) var b = a.match(/^"(.*)"$/),
                a = b ? b[1] : a; return a.replace('"', "") }).join(")(?=.*?") + ").*$"); return RegExp(a, d ? "i" : "") }

    function Bb(a) {
        var b = a.aoColumns,
            c, d, e, f, g, j, i, h, l = m.ext.type.search;
        c = !1;
        d = 0;
        for (f = a.aoData.length; d < f; d++)
            if (h = a.aoData[d], !h._aFilterData) { j = [];
                e = 0; for (g = b.length; e < g; e++) c = b[e], c.bSearchable ? (i = B(a, d, e, "filter"), l[c.sType] && (i = l[c.sType](i)), null === i && (i = ""), "string" !== typeof i && i.toString && (i = i.toString())) : i = "", i.indexOf && -1 !== i.indexOf("&") && (xa.innerHTML = i, i = $b ? xa.textContent : xa.innerText), i.replace && (i = i.replace(/[\r\n]/g, "")), j.push(i);
                h._aFilterData = j;
                h._sFilterRow = j.join("  ");
                c = !0 }
        return c
    }

    function Cb(a) {
        return {
            search: a.sSearch,
            smart: a.bSmart,
            regex: a.bRegex,
            caseInsensitive: a.bCaseInsensitive
        }
    }

    function Db(a) { return { sSearch: a.search, bSmart: a.smart, bRegex: a.regex, bCaseInsensitive: a.caseInsensitive } }

    function ub(a) { var b = a.sTableId,
            c = a.aanFeatures.i,
            d = h("<div/>", { "class": a.oClasses.sInfo, id: !c ? b + "_info" : null });
        c || (a.aoDrawCallback.push({ fn: Eb, sName: "information" }), d.attr("role", "status").attr("aria-live", "polite"), h(a.nTable).attr("aria-describedby", b + "_info")); return d[0] }

    function Eb(a) {
        var b = a.aanFeatures.i;
        if (0 !== b.length) {
            var c = a.oLanguage,
                d = a._iDisplayStart +
                1,
                e = a.fnDisplayEnd(),
                f = a.fnRecordsTotal(),
                g = a.fnRecordsDisplay(),
                j = g ? c.sInfo : c.sInfoEmpty;
            g !== f && (j += " " + c.sInfoFiltered);
            j += c.sInfoPostFix;
            j = Fb(a, j);
            c = c.fnInfoCallback;
            null !== c && (j = c.call(a.oInstance, a, d, e, f, g, j));
            h(b).html(j)
        }
    }

    function Fb(a, b) {
        var c = a.fnFormatNumber,
            d = a._iDisplayStart + 1,
            e = a._iDisplayLength,
            f = a.fnRecordsDisplay(),
            g = -1 === e;
        return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a,
            f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)))
    }

    function ha(a) {
        var b, c, d = a.iInitDisplayStart,
            e = a.aoColumns,
            f;
        c = a.oFeatures;
        var g = a.bDeferLoading;
        if (a.bInitialised) {
            pb(a);
            mb(a);
            fa(a, a.aoHeader);
            fa(a, a.aoFooter);
            C(a, !0);
            c.bAutoWidth && Ha(a);
            b = 0;
            for (c = e.length; b < c; b++) f = e[b], f.sWidth && (f.nTh.style.width = v(f.sWidth));
            s(a, null, "preInit", [a]);
            T(a);
            e = y(a);
            if ("ssp" != e || g) "ajax" == e ? ua(a, [], function(c) {
                var f = va(a, c);
                for (b = 0; b < f.length; b++) N(a, f[b]);
                a.iInitDisplayStart =
                    d;
                T(a);
                C(a, !1);
                wa(a, c)
            }, a) : (C(a, !1), wa(a))
        } else setTimeout(function() { ha(a) }, 200)
    }

    function wa(a, b) { a._bInitComplete = !0;
        (b || a.oInit.aaData) && Z(a);
        s(a, null, "plugin-init", [a, b]);
        s(a, "aoInitComplete", "init", [a, b]) }

    function Ta(a, b) { var c = parseInt(b, 10);
        a._iDisplayLength = c;
        Ua(a);
        s(a, null, "length", [a, c]) }

    function qb(a) {
        for (var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, e = h.isArray(d[0]), f = e ? d[0] : d, d = e ? d[1] : d, e = h("<select/>", { name: c + "_length", "aria-controls": c, "class": b.sLengthSelect }), g = 0, j = f.length; g < j; g++) e[0][g] =
            new Option(d[g], f[g]);
        var i = h("<div><label/></div>").addClass(b.sLength);
        a.aanFeatures.l || (i[0].id = c + "_length");
        i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
        h("select", i).val(a._iDisplayLength).on("change.DT", function() { Ta(a, h(this).val());
            O(a) });
        h(a.nTable).on("length.dt.DT", function(b, c, d) { a === c && h("select", i).val(d) });
        return i[0]
    }

    function vb(a) {
        var b = a.sPaginationType,
            c = m.ext.pager[b],
            d = "function" === typeof c,
            e = function(a) { O(a) },
            b = h("<div/>").addClass(a.oClasses.sPaging +
                b)[0],
            f = a.aanFeatures;
        d || c.fnInit(a, b, e);
        f.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({ fn: function(a) { if (d) { var b = a._iDisplayStart,
                        i = a._iDisplayLength,
                        h = a.fnRecordsDisplay(),
                        l = -1 === i,
                        b = l ? 0 : Math.ceil(b / i),
                        i = l ? 1 : Math.ceil(h / i),
                        h = c(b, i),
                        k, l = 0; for (k = f.p.length; l < k; l++) Pa(a, "pageButton")(a, f.p[l], l, h, b, i) } else c.fnUpdate(a, e) }, sName: "pagination" }));
        return b
    }

    function Va(a, b, c) {
        var d = a._iDisplayStart,
            e = a._iDisplayLength,
            f = a.fnRecordsDisplay();
        0 === f || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > f &&
            (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : K(a, 0, "Unknown paging action: " + b, 5);
        b = a._iDisplayStart !== d;
        a._iDisplayStart = d;
        b && (s(a, null, "page", [a]), c && O(a));
        return b
    }

    function sb(a) { return h("<div/>", { id: !a.aanFeatures.r ? a.sTableId + "_processing" : null, "class": a.oClasses.sProcessing }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0] }

    function C(a, b) {
        a.oFeatures.bProcessing && h(a.aanFeatures.r).css("display", b ? "block" : "none");
        s(a, null, "processing", [a, b])
    }

    function tb(a) {
        var b = h(a.nTable);
        b.attr("role", "grid");
        var c = a.oScroll;
        if ("" === c.sX && "" === c.sY) return a.nTable;
        var d = c.sX,
            e = c.sY,
            f = a.oClasses,
            g = b.children("caption"),
            j = g.length ? g[0]._captionSide : null,
            i = h(b[0].cloneNode(!1)),
            n = h(b[0].cloneNode(!1)),
            l = b.children("tfoot");
        l.length || (l = null);
        i = h("<div/>", { "class": f.sScrollWrapper }).append(h("<div/>", { "class": f.sScrollHead }).css({ overflow: "hidden", position: "relative", border: 0, width: d ? !d ? null : v(d) : "100%" }).append(h("<div/>", { "class": f.sScrollHeadInner }).css({ "box-sizing": "content-box", width: c.sXInner || "100%" }).append(i.removeAttr("id").css("margin-left", 0).append("top" === j ? g : null).append(b.children("thead"))))).append(h("<div/>", { "class": f.sScrollBody }).css({ position: "relative", overflow: "auto", width: !d ? null : v(d) }).append(b));
        l && i.append(h("<div/>", { "class": f.sScrollFoot }).css({ overflow: "hidden", border: 0, width: d ? !d ? null : v(d) : "100%" }).append(h("<div/>", { "class": f.sScrollFootInner }).append(n.removeAttr("id").css("margin-left",
            0).append("bottom" === j ? g : null).append(b.children("tfoot")))));
        var b = i.children(),
            k = b[0],
            f = b[1],
            r = l ? b[2] : null;
        if (d) h(f).on("scroll.DT", function() { var a = this.scrollLeft;
            k.scrollLeft = a;
            l && (r.scrollLeft = a) });
        h(f).css(e && c.bCollapse ? "max-height" : "height", e);
        a.nScrollHead = k;
        a.nScrollBody = f;
        a.nScrollFoot = r;
        a.aoDrawCallback.push({ fn: ma, sName: "scrolling" });
        return i[0]
    }

    function ma(a) {
        var b = a.oScroll,
            c = b.sX,
            d = b.sXInner,
            e = b.sY,
            b = b.iBarWidth,
            f = h(a.nScrollHead),
            g = f[0].style,
            j = f.children("div"),
            i = j[0].style,
            n = j.children("table"),
            j = a.nScrollBody,
            l = h(j),
            q = j.style,
            r = h(a.nScrollFoot).children("div"),
            m = r.children("table"),
            p = h(a.nTHead),
            o = h(a.nTable),
            u = o[0],
            s = u.style,
            t = a.nTFoot ? h(a.nTFoot) : null,
            x = a.oBrowser,
            U = x.bScrollOversize,
            ac = D(a.aoColumns, "nTh"),
            P, L, Q, w, Wa = [],
            y = [],
            z = [],
            A = [],
            B, C = function(a) { a = a.style;
                a.paddingTop = "0";
                a.paddingBottom = "0";
                a.borderTopWidth = "0";
                a.borderBottomWidth = "0";
                a.height = 0 };
        L = j.scrollHeight > j.clientHeight;
        if (a.scrollBarVis !== L && a.scrollBarVis !== k) a.scrollBarVis = L, Z(a);
        else {
            a.scrollBarVis = L;
            o.children("thead, tfoot").remove();
            t && (Q = t.clone().prependTo(o), P = t.find("tr"), Q = Q.find("tr"));
            w = p.clone().prependTo(o);
            p = p.find("tr");
            L = w.find("tr");
            w.find("th, td").removeAttr("tabindex");
            c || (q.width = "100%", f[0].style.width = "100%");
            h.each(ta(a, w), function(b, c) { B = $(a, b);
                c.style.width = a.aoColumns[B].sWidth });
            t && I(function(a) { a.style.width = "" }, Q);
            f = o.outerWidth();
            if ("" === c) { s.width = "100%"; if (U && (o.find("tbody").height() > j.offsetHeight || "scroll" == l.css("overflow-y"))) s.width = v(o.outerWidth() - b);
                f = o.outerWidth() } else "" !== d && (s.width =
                v(d), f = o.outerWidth());
            I(C, L);
            I(function(a) { z.push(a.innerHTML);
                Wa.push(v(h(a).css("width"))) }, L);
            I(function(a, b) { if (h.inArray(a, ac) !== -1) a.style.width = Wa[b] }, p);
            h(L).height(0);
            t && (I(C, Q), I(function(a) { A.push(a.innerHTML);
                y.push(v(h(a).css("width"))) }, Q), I(function(a, b) { a.style.width = y[b] }, P), h(Q).height(0));
            I(function(a, b) { a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + z[b] + "</div>";
                a.style.width = Wa[b] }, L);
            t && I(function(a, b) {
                a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' +
                    A[b] + "</div>";
                a.style.width = y[b]
            }, Q);
            if (o.outerWidth() < f) { P = j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y") ? f + b : f; if (U && (j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y"))) s.width = v(P - b);
                ("" === c || "" !== d) && K(a, 1, "Possible column misalignment", 6) } else P = "100%";
            q.width = v(P);
            g.width = v(P);
            t && (a.nScrollFoot.style.width = v(P));
            !e && U && (q.height = v(u.offsetHeight + b));
            c = o.outerWidth();
            n[0].style.width = v(c);
            i.width = v(c);
            d = o.height() > j.clientHeight || "scroll" == l.css("overflow-y");
            e = "padding" +
                (x.bScrollbarLeft ? "Left" : "Right");
            i[e] = d ? b + "px" : "0px";
            t && (m[0].style.width = v(c), r[0].style.width = v(c), r[0].style[e] = d ? b + "px" : "0px");
            o.children("colgroup").insertBefore(o.children("thead"));
            l.scroll();
            if ((a.bSorted || a.bFiltered) && !a._drawHold) j.scrollTop = 0
        }
    }

    function I(a, b, c) { for (var d = 0, e = 0, f = b.length, g, j; e < f;) { g = b[e].firstChild; for (j = c ? c[e].firstChild : null; g;) 1 === g.nodeType && (c ? a(g, j, d) : a(g, d), d++), g = g.nextSibling, j = c ? j.nextSibling : null;
            e++ } }

    function Ha(a) {
        var b = a.nTable,
            c = a.aoColumns,
            d = a.oScroll,
            e = d.sY,
            f = d.sX,
            g = d.sXInner,
            j = c.length,
            i = na(a, "bVisible"),
            n = h("th", a.nTHead),
            l = b.getAttribute("width"),
            k = b.parentNode,
            r = !1,
            m, p, o = a.oBrowser,
            d = o.bScrollOversize;
        (m = b.style.width) && -1 !== m.indexOf("%") && (l = m);
        for (m = 0; m < i.length; m++) p = c[i[m]], null !== p.sWidth && (p.sWidth = Gb(p.sWidthOrig, k), r = !0);
        if (d || !r && !f && !e && j == ba(a) && j == n.length)
            for (m = 0; m < j; m++) i = $(a, m), null !== i && (c[i].sWidth = v(n.eq(m).width()));
        else {
            j = h(b).clone().css("visibility", "hidden").removeAttr("id");
            j.find("tbody tr").remove();
            var u = h("<tr/>").appendTo(j.find("tbody"));
            j.find("thead, tfoot").remove();
            j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());
            j.find("tfoot th, tfoot td").css("width", "");
            n = ta(a, j.find("thead")[0]);
            for (m = 0; m < i.length; m++) p = c[i[m]], n[m].style.width = null !== p.sWidthOrig && "" !== p.sWidthOrig ? v(p.sWidthOrig) : "", p.sWidthOrig && f && h(n[m]).append(h("<div/>").css({ width: p.sWidthOrig, margin: 0, padding: 0, border: 0, height: 1 }));
            if (a.aoData.length)
                for (m = 0; m < i.length; m++) r = i[m], p = c[r], h(Hb(a, r)).clone(!1).append(p.sContentPadding).appendTo(u);
            h("[name]",
                j).removeAttr("name");
            p = h("<div/>").css(f || e ? { position: "absolute", top: 0, left: 0, height: 1, right: 0, overflow: "hidden" } : {}).append(j).appendTo(k);
            f && g ? j.width(g) : f ? (j.css("width", "auto"), j.removeAttr("width"), j.width() < k.clientWidth && l && j.width(k.clientWidth)) : e ? j.width(k.clientWidth) : l && j.width(l);
            for (m = e = 0; m < i.length; m++) k = h(n[m]), g = k.outerWidth() - k.width(), k = o.bBounding ? Math.ceil(n[m].getBoundingClientRect().width) : k.outerWidth(), e += k, c[i[m]].sWidth = v(k - g);
            b.style.width = v(e);
            p.remove()
        }
        l && (b.style.width =
            v(l));
        if ((l || f) && !a._reszEvt) b = function() { h(E).on("resize.DT-" + a.sInstance, Qa(function() { Z(a) })) }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0
    }

    function Gb(a, b) { if (!a) return 0; var c = h("<div/>").css("width", v(a)).appendTo(b || H.body),
            d = c[0].offsetWidth;
        c.remove(); return d }

    function Hb(a, b) { var c = Ib(a, b); if (0 > c) return null; var d = a.aoData[c]; return !d.nTr ? h("<td/>").html(B(a, c, b, "display"))[0] : d.anCells[b] }

    function Ib(a, b) {
        for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++) c = B(a, f, b, "display") + "", c = c.replace(bc,
            ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, e = f);
        return e
    }

    function v(a) { return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a }

    function W(a) {
        var b, c, d = [],
            e = a.aoColumns,
            f, g, j, i;
        b = a.aaSortingFixed;
        c = h.isPlainObject(b);
        var n = [];
        f = function(a) { a.length && !h.isArray(a[0]) ? n.push(a) : h.merge(n, a) };
        h.isArray(b) && f(b);
        c && b.pre && f(b.pre);
        f(a.aaSorting);
        c && b.post && f(b.post);
        for (a = 0; a < n.length; a++) {
            i = n[a][0];
            f = e[i].aDataSort;
            b = 0;
            for (c = f.length; b < c; b++) g = f[b], j = e[g].sType ||
                "string", n[a]._idx === k && (n[a]._idx = h.inArray(n[a][1], e[g].asSorting)), d.push({ src: i, col: g, dir: n[a][1], index: n[a]._idx, type: j, formatter: m.ext.type.order[j + "-pre"] })
        }
        return d
    }

    function ob(a) {
        var b, c, d = [],
            e = m.ext.type.order,
            f = a.aoData,
            g = 0,
            j, i = a.aiDisplayMaster,
            h;
        Ia(a);
        h = W(a);
        b = 0;
        for (c = h.length; b < c; b++) j = h[b], j.formatter && g++, Jb(a, j.col);
        if ("ssp" != y(a) && 0 !== h.length) {
            b = 0;
            for (c = i.length; b < c; b++) d[i[b]] = b;
            g === h.length ? i.sort(function(a, b) {
                var c, e, g, j, i = h.length,
                    k = f[a]._aSortData,
                    m = f[b]._aSortData;
                for (g =
                    0; g < i; g++)
                    if (j = h[g], c = k[j.col], e = m[j.col], c = c < e ? -1 : c > e ? 1 : 0, 0 !== c) return "asc" === j.dir ? c : -c;
                c = d[a];
                e = d[b];
                return c < e ? -1 : c > e ? 1 : 0
            }) : i.sort(function(a, b) { var c, g, j, i, k = h.length,
                    m = f[a]._aSortData,
                    p = f[b]._aSortData; for (j = 0; j < k; j++)
                    if (i = h[j], c = m[i.col], g = p[i.col], i = e[i.type + "-" + i.dir] || e["string-" + i.dir], c = i(c, g), 0 !== c) return c;
                c = d[a];
                g = d[b]; return c < g ? -1 : c > g ? 1 : 0 })
        }
        a.bSorted = !0
    }

    function Kb(a) {
        for (var b, c, d = a.aoColumns, e = W(a), a = a.oLanguage.oAria, f = 0, g = d.length; f < g; f++) {
            c = d[f];
            var j = c.asSorting;
            b = c.sTitle.replace(/<.*?>/g,
                "");
            var i = c.nTh;
            i.removeAttribute("aria-sort");
            c.bSortable && (0 < e.length && e[0].col == f ? (i.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending" : "descending"), c = j[e[0].index + 1] || j[0]) : c = j[0], b += "asc" === c ? a.sSortAscending : a.sSortDescending);
            i.setAttribute("aria-label", b)
        }
    }

    function Xa(a, b, c, d) {
        var e = a.aaSorting,
            f = a.aoColumns[b].asSorting,
            g = function(a, b) { var c = a._idx;
                c === k && (c = h.inArray(a[1], f)); return c + 1 < f.length ? c + 1 : b ? null : 0 };
        "number" === typeof e[0] && (e = a.aaSorting = [e]);
        c && a.oFeatures.bSortMulti ? (c = h.inArray(b,
            D(e, "0")), -1 !== c ? (b = g(e[c], !0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], e[c]._idx = b)) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = f[b], e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0);
        T(a);
        "function" == typeof d && d(a)
    }

    function Oa(a, b, c, d) { var e = a.aoColumns[c];
        Ya(b, {}, function(b) {!1 !== e.bSortable && (a.oFeatures.bProcessing ? (C(a, !0), setTimeout(function() { Xa(a, c, b.shiftKey, d); "ssp" !== y(a) && C(a, !1) }, 0)) : Xa(a, c, b.shiftKey, d)) }) }

    function ya(a) { var b = a.aLastSort,
            c = a.oClasses.sSortColumn,
            d = W(a),
            e = a.oFeatures,
            f, g; if (e.bSort && e.bSortClasses) { e = 0; for (f = b.length; e < f; e++) g = b[e].src, h(D(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
            e = 0; for (f = d.length; e < f; e++) g = d[e].src, h(D(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3)) }
        a.aLastSort = d }

    function Jb(a, b) {
        var c = a.aoColumns[b],
            d = m.ext.order[c.sSortDataType],
            e;
        d && (e = d.call(a.oInstance, a, b, aa(a, b)));
        for (var f, g = m.ext.type.order[c.sType + "-pre"], j = 0, i = a.aoData.length; j < i; j++)
            if (c = a.aoData[j],
                c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) f = d ? e[j] : B(a, j, b, "sort"), c._aSortData[b] = g ? g(f) : f
    }

    function za(a) {
        if (a.oFeatures.bStateSave && !a.bDestroying) {
            var b = { time: +new Date, start: a._iDisplayStart, length: a._iDisplayLength, order: h.extend(!0, [], a.aaSorting), search: Cb(a.oPreviousSearch), columns: h.map(a.aoColumns, function(b, d) { return { visible: b.bVisible, search: Cb(a.aoPreSearchCols[d]) } }) };
            s(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
            a.oSavedState = b;
            a.fnStateSaveCallback.call(a.oInstance, a,
                b)
        }
    }

    function Lb(a, b, c) {
        var d, e, f = a.aoColumns,
            b = function(b) {
                if (b && b.time) {
                    var i = s(a, "aoStateLoadParams", "stateLoadParams", [a, g]);
                    if (-1 === h.inArray(!1, i) && (i = a.iStateDuration, !(0 < i && b.time < +new Date - 1E3 * i) && !(b.columns && f.length !== b.columns.length))) {
                        a.oLoadedState = h.extend(!0, {}, g);
                        b.start !== k && (a._iDisplayStart = b.start, a.iInitDisplayStart = b.start);
                        b.length !== k && (a._iDisplayLength = b.length);
                        b.order !== k && (a.aaSorting = [], h.each(b.order, function(b, c) { a.aaSorting.push(c[0] >= f.length ? [0, c[1]] : c) }));
                        b.search !==
                            k && h.extend(a.oPreviousSearch, Db(b.search));
                        if (b.columns) { d = 0; for (e = b.columns.length; d < e; d++) i = b.columns[d], i.visible !== k && (f[d].bVisible = i.visible), i.search !== k && h.extend(a.aoPreSearchCols[d], Db(i.search)) }
                        s(a, "aoStateLoaded", "stateLoaded", [a, g])
                    }
                }
                c()
            };
        if (a.oFeatures.bStateSave) { var g = a.fnStateLoadCallback.call(a.oInstance, a, b);
            g !== k && b(g) } else c()
    }

    function Aa(a) { var b = m.settings,
            a = h.inArray(a, D(b, "nTable")); return -1 !== a ? b[a] : null }

    function K(a, b, c, d) {
        c = "DataTables warning: " + (a ? "table id=" + a.sTableId +
            " - " : "") + c;
        d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d);
        if (b) E.console && console.log && console.log(c);
        else if (b = m.ext, b = b.sErrMode || b.errMode, a && s(a, null, "error", [a, d, c]), "alert" == b) alert(c);
        else { if ("throw" == b) throw Error(c); "function" == typeof b && b(a, d, c) }
    }

    function F(a, b, c, d) { h.isArray(c) ? h.each(c, function(c, d) { h.isArray(d) ? F(a, b, d[0], d[1]) : F(a, b, d) }) : (d === k && (d = c), b[c] !== k && (a[d] = b[c])) }

    function Mb(a, b, c) {
        var d, e;
        for (e in b) b.hasOwnProperty(e) && (d = b[e],
            h.isPlainObject(d) ? (h.isPlainObject(a[e]) || (a[e] = {}), h.extend(!0, a[e], d)) : a[e] = c && "data" !== e && "aaData" !== e && h.isArray(d) ? d.slice() : d);
        return a
    }

    function Ya(a, b, c) { h(a).on("click.DT", b, function(b) { a.blur();
            c(b) }).on("keypress.DT", b, function(a) { 13 === a.which && (a.preventDefault(), c(a)) }).on("selectstart.DT", function() { return !1 }) }

    function z(a, b, c, d) { c && a[b].push({ fn: c, sName: d }) }

    function s(a, b, c, d) {
        var e = [];
        b && (e = h.map(a[b].slice().reverse(), function(b) { return b.fn.apply(a.oInstance, d) }));
        null !== c && (b = h.Event(c +
            ".dt"), h(a.nTable).trigger(b, d), e.push(b.result));
        return e
    }

    function Ua(a) { var b = a._iDisplayStart,
            c = a.fnDisplayEnd(),
            d = a._iDisplayLength;
        b >= c && (b = c - d);
        b -= b % d; if (-1 === d || 0 > b) b = 0;
        a._iDisplayStart = b }

    function Pa(a, b) { var c = a.renderer,
            d = m.ext.renderer[b]; return h.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" === typeof c ? d[c] || d._ : d._ }

    function y(a) { return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom" }

    function ia(a, b) {
        var c = [],
            c = Nb.numbers_length,
            d = Math.floor(c / 2);
        b <= c ? c = X(0, b) : a <= d ? (c = X(0,
            c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - d ? c = X(b - (c - 2), b) : (c = X(a - d + 2, a + d - 1), c.push("ellipsis"), c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0));
        c.DT_el = "span";
        return c
    }

    function fb(a) { h.each({ num: function(b) { return Ba(b, a) }, "num-fmt": function(b) { return Ba(b, a, Za) }, "html-num": function(b) { return Ba(b, a, Ca) }, "html-num-fmt": function(b) { return Ba(b, a, Ca, Za) } }, function(b, c) { x.type.order[b + a + "-pre"] = c;
            b.match(/^html\-/) && (x.type.search[b + a] = x.type.search.html) }) }

    function Ob(a) {
        return function() {
            var b = [Aa(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
            return m.ext.internal[a].apply(this, b)
        }
    }
    var m = function(a) {
            this.$ = function(a, b) { return this.api(!0).$(a, b) };
            this._ = function(a, b) { return this.api(!0).rows(a, b).data() };
            this.api = function(a) { return a ? new u(Aa(this[x.iApiIndex])) : new u(this) };
            this.fnAddData = function(a, b) { var c = this.api(!0),
                    d = h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);
                (b === k || b) && c.draw(); return d.flatten().toArray() };
            this.fnAdjustColumnSizing =
                function(a) { var b = this.api(!0).columns.adjust(),
                        c = b.settings()[0],
                        d = c.oScroll;
                    a === k || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && ma(c) };
            this.fnClearTable = function(a) { var b = this.api(!0).clear();
                (a === k || a) && b.draw() };
            this.fnClose = function(a) { this.api(!0).row(a).child.hide() };
            this.fnDeleteRow = function(a, b, c) { var d = this.api(!0),
                    a = d.rows(a),
                    e = a.settings()[0],
                    h = e.aoData[a[0][0]];
                a.remove();
                b && b.call(this, e, h);
                (c === k || c) && d.draw(); return h };
            this.fnDestroy = function(a) { this.api(!0).destroy(a) };
            this.fnDraw = function(a) { this.api(!0).draw(a) };
            this.fnFilter = function(a, b, c, d, e, h) { e = this.api(!0);
                null === b || b === k ? e.search(a, c, d, h) : e.column(b).search(a, c, d, h);
                e.draw() };
            this.fnGetData = function(a, b) { var c = this.api(!0); if (a !== k) { var d = a.nodeName ? a.nodeName.toLowerCase() : ""; return b !== k || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null } return c.data().toArray() };
            this.fnGetNodes = function(a) { var b = this.api(!0); return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray() };
            this.fnGetPosition = function(a) {
                var b = this.api(!0),
                    c = a.nodeName.toUpperCase();
                return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null
            };
            this.fnIsOpen = function(a) { return this.api(!0).row(a).child.isShown() };
            this.fnOpen = function(a, b, c) { return this.api(!0).row(a).child(b, c).show().child()[0] };
            this.fnPageChange = function(a, b) { var c = this.api(!0).page(a);
                (b === k || b) && c.draw(!1) };
            this.fnSetColumnVis = function(a, b, c) { a = this.api(!0).column(a).visible(b);
                (c === k || c) && a.columns.adjust().draw() };
            this.fnSettings = function() { return Aa(this[x.iApiIndex]) };
            this.fnSort = function(a) { this.api(!0).order(a).draw() };
            this.fnSortListener = function(a, b, c) { this.api(!0).order.listener(a, b, c) };
            this.fnUpdate = function(a, b, c, d, e) { var h = this.api(!0);
                c === k || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);
                (e === k || e) && h.columns.adjust();
                (d === k || d) && h.draw(); return 0 };
            this.fnVersionCheck = x.fnVersionCheck;
            var b = this,
                c = a === k,
                d = this.length;
            c && (a = {});
            this.oApi = this.internal = x.internal;
            for (var e in m.ext.internal) e && (this[e] = Ob(e));
            this.each(function() {
                var e = {},
                    g = 1 < d ? Mb(e, a, !0) :
                    a,
                    j = 0,
                    i, e = this.getAttribute("id"),
                    n = !1,
                    l = m.defaults,
                    q = h(this);
                if ("table" != this.nodeName.toLowerCase()) K(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                else {
                    gb(l);
                    hb(l.column);
                    J(l, l, !0);
                    J(l.column, l.column, !0);
                    J(l, h.extend(g, q.data()));
                    var r = m.settings,
                        j = 0;
                    for (i = r.length; j < i; j++) {
                        var p = r[j];
                        if (p.nTable == this || p.nTHead.parentNode == this || p.nTFoot && p.nTFoot.parentNode == this) {
                            var u = g.bRetrieve !== k ? g.bRetrieve : l.bRetrieve;
                            if (c || u) return p.oInstance;
                            if (g.bDestroy !== k ? g.bDestroy : l.bDestroy) {
                                p.oInstance.fnDestroy();
                                break
                            } else { K(p, 0, "Cannot reinitialise DataTable", 3); return }
                        }
                        if (p.sTableId == this.id) { r.splice(j, 1); break }
                    }
                    if (null === e || "" === e) this.id = e = "DataTables_Table_" + m.ext._unique++;
                    var o = h.extend(!0, {}, m.models.oSettings, { sDestroyWidth: q[0].style.width, sInstance: e, sTableId: e });
                    o.nTable = this;
                    o.oApi = b.internal;
                    o.oInit = g;
                    r.push(o);
                    o.oInstance = 1 === b.length ? b : q.dataTable();
                    gb(g);
                    g.oLanguage && Fa(g.oLanguage);
                    g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = h.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
                    g = Mb(h.extend(!0, {}, l), g);
                    F(o.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
                    F(o, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
                        ["oSearch", "oPreviousSearch"],
                        ["aoSearchCols", "aoPreSearchCols"],
                        ["iDisplayLength", "_iDisplayLength"],
                        ["bJQueryUI", "bJUI"]
                    ]);
                    F(o.oScroll, g, [
                        ["sScrollX", "sX"],
                        ["sScrollXInner", "sXInner"],
                        ["sScrollY", "sY"],
                        ["bScrollCollapse", "bCollapse"]
                    ]);
                    F(o.oLanguage, g, "fnInfoCallback");
                    z(o, "aoDrawCallback", g.fnDrawCallback, "user");
                    z(o, "aoServerParams", g.fnServerParams, "user");
                    z(o, "aoStateSaveParams", g.fnStateSaveParams, "user");
                    z(o, "aoStateLoadParams", g.fnStateLoadParams, "user");
                    z(o, "aoStateLoaded", g.fnStateLoaded,
                        "user");
                    z(o, "aoRowCallback", g.fnRowCallback, "user");
                    z(o, "aoRowCreatedCallback", g.fnCreatedRow, "user");
                    z(o, "aoHeaderCallback", g.fnHeaderCallback, "user");
                    z(o, "aoFooterCallback", g.fnFooterCallback, "user");
                    z(o, "aoInitComplete", g.fnInitComplete, "user");
                    z(o, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
                    o.rowIdFn = R(g.rowId);
                    ib(o);
                    var t = o.oClasses;
                    g.bJQueryUI ? (h.extend(t, m.ext.oJUIClasses, g.oClasses), g.sDom === l.sDom && "lfrtip" === l.sDom && (o.sDom = '<"H"lfr>t<"F"ip>'), o.renderer) ? h.isPlainObject(o.renderer) &&
                        !o.renderer.header && (o.renderer.header = "jqueryui") : o.renderer = "jqueryui" : h.extend(t, m.ext.classes, g.oClasses);
                    q.addClass(t.sTable);
                    o.iInitDisplayStart === k && (o.iInitDisplayStart = g.iDisplayStart, o._iDisplayStart = g.iDisplayStart);
                    null !== g.iDeferLoading && (o.bDeferLoading = !0, e = h.isArray(g.iDeferLoading), o._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading, o._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading);
                    var v = o.oLanguage;
                    h.extend(!0, v, g.oLanguage);
                    v.sUrl && (h.ajax({
                        dataType: "json",
                        url: v.sUrl,
                        success: function(a) {
                            Fa(a);
                            J(l.oLanguage, a);
                            h.extend(true, v, a);
                            ha(o)
                        },
                        error: function() { ha(o) }
                    }), n = !0);
                    null === g.asStripeClasses && (o.asStripeClasses = [t.sStripeOdd, t.sStripeEven]);
                    var e = o.asStripeClasses,
                        x = q.children("tbody").find("tr").eq(0); - 1 !== h.inArray(!0, h.map(e, function(a) { return x.hasClass(a) })) && (h("tbody tr", this).removeClass(e.join(" ")), o.asDestroyStripes = e.slice());
                    e = [];
                    r = this.getElementsByTagName("thead");
                    0 !== r.length && (ea(o.aoHeader, r[0]), e = ta(o));
                    if (null === g.aoColumns) { r = [];
                        j = 0; for (i = e.length; j < i; j++) r.push(null) } else r =
                        g.aoColumns;
                    j = 0;
                    for (i = r.length; j < i; j++) Ga(o, e ? e[j] : null);
                    kb(o, g.aoColumnDefs, r, function(a, b) { la(o, a, b) });
                    if (x.length) { var w = function(a, b) { return a.getAttribute("data-" + b) !== null ? b : null };
                        h(x[0]).children("th, td").each(function(a, b) { var c = o.aoColumns[a]; if (c.mData === a) { var d = w(b, "sort") || w(b, "order"),
                                    e = w(b, "filter") || w(b, "search"); if (d !== null || e !== null) { c.mData = { _: a + ".display", sort: d !== null ? a + ".@data-" + d : k, type: d !== null ? a + ".@data-" + d : k, filter: e !== null ? a + ".@data-" + e : k };
                                    la(o, a) } } }) }
                    var U = o.oFeatures,
                        e = function() {
                            if (g.aaSorting === k) { var a = o.aaSorting;
                                j = 0; for (i = a.length; j < i; j++) a[j][1] = o.aoColumns[j].asSorting[0] }
                            ya(o);
                            U.bSort && z(o, "aoDrawCallback", function() { if (o.bSorted) { var a = W(o),
                                        b = {};
                                    h.each(a, function(a, c) { b[c.src] = c.dir });
                                    s(o, null, "order", [o, a, b]);
                                    Kb(o) } });
                            z(o, "aoDrawCallback", function() {
                                (o.bSorted || y(o) === "ssp" || U.bDeferRender) && ya(o) }, "sc");
                            var a = q.children("caption").each(function() { this._captionSide = h(this).css("caption-side") }),
                                b = q.children("thead");
                            b.length === 0 && (b = h("<thead/>").appendTo(q));
                            o.nTHead = b[0];
                            b = q.children("tbody");
                            b.length === 0 && (b = h("<tbody/>").appendTo(q));
                            o.nTBody = b[0];
                            b = q.children("tfoot");
                            if (b.length === 0 && a.length > 0 && (o.oScroll.sX !== "" || o.oScroll.sY !== "")) b = h("<tfoot/>").appendTo(q);
                            if (b.length === 0 || b.children().length === 0) q.addClass(t.sNoFooter);
                            else if (b.length > 0) { o.nTFoot = b[0];
                                ea(o.aoFooter, o.nTFoot) }
                            if (g.aaData)
                                for (j = 0; j < g.aaData.length; j++) N(o, g.aaData[j]);
                            else(o.bDeferLoading || y(o) == "dom") && oa(o, h(o.nTBody).children("tr"));
                            o.aiDisplay = o.aiDisplayMaster.slice();
                            o.bInitialised = true;
                            n === false && ha(o)
                        };
                    g.bStateSave ? (U.bStateSave = !0, z(o, "aoDrawCallback", za, "state_save"), Lb(o, g, e)) : e()
                }
            });
            b = null;
            return this
        },
        x, u, p, t, $a = {},
        Pb = /[\r\n]/g,
        Ca = /<.*?>/g,
        cc = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
        dc = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"),
        Za = /[',$Â£â‚¬Â¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
        M = function(a) { return !a || !0 === a || "-" === a ? !0 : !1 },
        Qb = function(a) {
            var b = parseInt(a, 10);
            return !isNaN(b) &&
                isFinite(a) ? b : null
        },
        Rb = function(a, b) { $a[b] || ($a[b] = RegExp(Sa(b), "g")); return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace($a[b], ".") : a },
        ab = function(a, b, c) { var d = "string" === typeof a; if (M(a)) return !0;
            b && d && (a = Rb(a, b));
            c && d && (a = a.replace(Za, "")); return !isNaN(parseFloat(a)) && isFinite(a) },
        Sb = function(a, b, c) { return M(a) ? !0 : !(M(a) || "string" === typeof a) ? null : ab(a.replace(Ca, ""), b, c) ? !0 : null },
        D = function(a, b, c) {
            var d = [],
                e = 0,
                f = a.length;
            if (c !== k)
                for (; e < f; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
            else
                for (; e <
                    f; e++) a[e] && d.push(a[e][b]);
            return d
        },
        ja = function(a, b, c, d) { var e = [],
                f = 0,
                g = b.length; if (d !== k)
                for (; f < g; f++) a[b[f]][c] && e.push(a[b[f]][c][d]);
            else
                for (; f < g; f++) e.push(a[b[f]][c]); return e },
        X = function(a, b) { var c = [],
                d;
            b === k ? (b = 0, d = a) : (d = b, b = a); for (var e = b; e < d; e++) c.push(e); return c },
        Tb = function(a) { for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]); return b },
        sa = function(a) { var b = [],
                c, d, e = a.length,
                f, g = 0;
            d = 0;
            a: for (; d < e; d++) { c = a[d]; for (f = 0; f < g; f++)
                    if (b[f] === c) continue a;
                b.push(c);
                g++ }
            return b };
    m.util = { throttle: function(a, b) { var c = b !== k ? b : 200,
                d, e; return function() { var b = this,
                    g = +new Date,
                    h = arguments;
                d && g < d + c ? (clearTimeout(e), e = setTimeout(function() { d = k;
                    a.apply(b, h) }, c)) : (d = g, a.apply(b, h)) } }, escapeRegex: function(a) { return a.replace(dc, "\\$1") } };
    var A = function(a, b, c) { a[b] !== k && (a[c] = a[b]) },
        ca = /\[.*?\]$/,
        V = /\(\)$/,
        Sa = m.util.escapeRegex,
        xa = h("<div>")[0],
        $b = xa.textContent !== k,
        bc = /<.*?>/g,
        Qa = m.util.throttle,
        Ub = [],
        w = Array.prototype,
        ec = function(a) {
            var b, c, d = m.settings,
                e = h.map(d, function(a) { return a.nTable });
            if (a) { if (a.nTable && a.oApi) return [a]; if (a.nodeName && "table" === a.nodeName.toLowerCase()) return b = h.inArray(a, e), -1 !== b ? [d[b]] : null; if (a && "function" === typeof a.settings) return a.settings().toArray(); "string" === typeof a ? c = h(a) : a instanceof h && (c = a) } else return [];
            if (c) return c.map(function() { b = h.inArray(this, e); return -1 !== b ? d[b] : null }).toArray()
        };
    u = function(a, b) {
        if (!(this instanceof u)) return new u(a, b);
        var c = [],
            d = function(a) {
                (a = ec(a)) && (c = c.concat(a)) };
        if (h.isArray(a))
            for (var e = 0, f = a.length; e < f; e++) d(a[e]);
        else d(a);
        this.context = sa(c);
        b && h.merge(this, b);
        this.selector = { rows: null, cols: null, opts: null };
        u.extend(this, this, Ub)
    };
    m.Api = u;
    h.extend(u.prototype, {
        any: function() { return 0 !== this.count() },
        concat: w.concat,
        context: [],
        count: function() { return this.flatten().length },
        each: function(a) { for (var b = 0, c = this.length; b < c; b++) a.call(this, this[b], b, this); return this },
        eq: function(a) { var b = this.context; return b.length > a ? new u(b[a], this[a]) : null },
        filter: function(a) {
            var b = [];
            if (w.filter) b = w.filter.call(this, a, this);
            else
                for (var c = 0, d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]);
            return new u(this.context, b)
        },
        flatten: function() { var a = []; return new u(this.context, a.concat.apply(a, this.toArray())) },
        join: w.join,
        indexOf: w.indexOf || function(a, b) { for (var c = b || 0, d = this.length; c < d; c++)
                if (this[c] === a) return c;
            return -1 },
        iterator: function(a, b, c, d) {
            var e = [],
                f, g, h, i, n, l = this.context,
                m, p, t = this.selector;
            "string" === typeof a && (d = c, c = b, b = a, a = !1);
            g = 0;
            for (h = l.length; g < h; g++) {
                var s = new u(l[g]);
                if ("table" === b) f =
                    c.call(s, l[g], g), f !== k && e.push(f);
                else if ("columns" === b || "rows" === b) f = c.call(s, l[g], this[g], g), f !== k && e.push(f);
                else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) { p = this[g]; "column-rows" === b && (m = Da(l[g], t.opts));
                    i = 0; for (n = p.length; i < n; i++) f = p[i], f = "cell" === b ? c.call(s, l[g], f.row, f.column, g, i) : c.call(s, l[g], f, g, i, m), f !== k && e.push(f) }
            }
            return e.length || d ? (a = new u(l, a ? e.concat.apply([], e) : e), b = a.selector, b.rows = t.rows, b.cols = t.cols, b.opts = t.opts, a) : this
        },
        lastIndexOf: w.lastIndexOf || function(a,
            b) { return this.indexOf.apply(this.toArray.reverse(), arguments) },
        length: 0,
        map: function(a) { var b = []; if (w.map) b = w.map.call(this, a, this);
            else
                for (var c = 0, d = this.length; c < d; c++) b.push(a.call(this, this[c], c)); return new u(this.context, b) },
        pluck: function(a) { return this.map(function(b) { return b[a] }) },
        pop: w.pop,
        push: w.push,
        reduce: w.reduce || function(a, b) { return jb(this, a, b, 0, this.length, 1) },
        reduceRight: w.reduceRight || function(a, b) { return jb(this, a, b, this.length - 1, -1, -1) },
        reverse: w.reverse,
        selector: null,
        shift: w.shift,
        sort: w.sort,
        splice: w.splice,
        toArray: function() { return w.slice.call(this) },
        to$: function() { return h(this) },
        toJQuery: function() { return h(this) },
        unique: function() { return new u(this.context, sa(this)) },
        unshift: w.unshift
    });
    u.extend = function(a, b, c) {
        if (c.length && b && (b instanceof u || b.__dt_wrapper)) {
            var d, e, f, g = function(a, b, c) { return function() { var d = b.apply(a, arguments);
                    u.extend(d, d, c.methodExt); return d } };
            d = 0;
            for (e = c.length; d < e; d++) f = c[d], b[f.name] = "function" === typeof f.val ? g(a, f.val, f) : h.isPlainObject(f.val) ? {} : f.val, b[f.name].__dt_wrapper = !0, u.extend(a, b[f.name], f.propExt)
        }
    };
    u.register = p = function(a, b) { if (h.isArray(a))
            for (var c = 0, d = a.length; c < d; c++) u.register(a[c], b);
        else
            for (var e = a.split("."), f = Ub, g, j, c = 0, d = e.length; c < d; c++) { g = (j = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c]; var i;
                a: { i = 0; for (var n = f.length; i < n; i++)
                        if (f[i].name === g) { i = f[i]; break a }
                    i = null }
                i || (i = { name: g, val: {}, methodExt: [], propExt: [] }, f.push(i));
                c === d - 1 ? i.val = b : f = j ? i.methodExt : i.propExt } };
    u.registerPlural = t = function(a, b, c) {
        u.register(a,
            c);
        u.register(b, function() { var a = c.apply(this, arguments); return a === this ? this : a instanceof u ? a.length ? h.isArray(a[0]) ? new u(a.context, a[0]) : a[0] : k : a })
    };
    p("tables()", function(a) { var b; if (a) { b = u; var c = this.context; if ("number" === typeof a) a = [c[a]];
            else var d = h.map(c, function(a) { return a.nTable }),
                a = h(d).filter(a).map(function() { var a = h.inArray(this, d); return c[a] }).toArray();
            b = new b(a) } else b = this; return b });
    p("table()", function(a) { var a = this.tables(a),
            b = a.context; return b.length ? new u(b[0]) : a });
    t("tables().nodes()",
        "table().node()",
        function() { return this.iterator("table", function(a) { return a.nTable }, 1) });
    t("tables().body()", "table().body()", function() { return this.iterator("table", function(a) { return a.nTBody }, 1) });
    t("tables().header()", "table().header()", function() { return this.iterator("table", function(a) { return a.nTHead }, 1) });
    t("tables().footer()", "table().footer()", function() { return this.iterator("table", function(a) { return a.nTFoot }, 1) });
    t("tables().containers()", "table().container()", function() {
        return this.iterator("table",
            function(a) { return a.nTableWrapper }, 1)
    });
    p("draw()", function(a) { return this.iterator("table", function(b) { "page" === a ? O(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), T(b, !1 === a)) }) });
    p("page()", function(a) { return a === k ? this.page.info().page : this.iterator("table", function(b) { Va(b, a) }) });
    p("page.info()", function() {
        if (0 === this.context.length) return k;
        var a = this.context[0],
            b = a._iDisplayStart,
            c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
            d = a.fnRecordsDisplay(),
            e = -1 === c;
        return {
            page: e ? 0 : Math.floor(b / c),
            pages: e ? 1 : Math.ceil(d / c),
            start: b,
            end: a.fnDisplayEnd(),
            length: c,
            recordsTotal: a.fnRecordsTotal(),
            recordsDisplay: d,
            serverSide: "ssp" === y(a)
        }
    });
    p("page.len()", function(a) { return a === k ? 0 !== this.context.length ? this.context[0]._iDisplayLength : k : this.iterator("table", function(b) { Ta(b, a) }) });
    var Vb = function(a, b, c) {
        if (c) { var d = new u(a);
            d.one("draw", function() { c(d.ajax.json()) }) }
        if ("ssp" == y(a)) T(a, b);
        else {
            C(a, !0);
            var e = a.jqXHR;
            e && 4 !== e.readyState && e.abort();
            ua(a, [], function(c) {
                pa(a);
                for (var c = va(a, c), d = 0, e = c.length; d <
                    e; d++) N(a, c[d]);
                T(a, b);
                C(a, !1)
            })
        }
    };
    p("ajax.json()", function() { var a = this.context; if (0 < a.length) return a[0].json });
    p("ajax.params()", function() { var a = this.context; if (0 < a.length) return a[0].oAjaxData });
    p("ajax.reload()", function(a, b) { return this.iterator("table", function(c) { Vb(c, !1 === b, a) }) });
    p("ajax.url()", function(a) {
        var b = this.context;
        if (a === k) { if (0 === b.length) return k;
            b = b[0]; return b.ajax ? h.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource }
        return this.iterator("table", function(b) {
            h.isPlainObject(b.ajax) ?
                b.ajax.url = a : b.ajax = a
        })
    });
    p("ajax.url().load()", function(a, b) { return this.iterator("table", function(c) { Vb(c, !1 === b, a) }) });
    var bb = function(a, b, c, d, e) { var f = [],
                g, j, i, n, l, m;
            i = typeof b; if (!b || "string" === i || "function" === i || b.length === k) b = [b];
            i = 0; for (n = b.length; i < n; i++) { j = b[i] && b[i].split && !b[i].match(/[\[\(:]/) ? b[i].split(",") : [b[i]];
                l = 0; for (m = j.length; l < m; l++)(g = c("string" === typeof j[l] ? h.trim(j[l]) : j[l])) && g.length && (f = f.concat(g)) }
            a = x.selector[a]; if (a.length) { i = 0; for (n = a.length; i < n; i++) f = a[i](d, e, f) } return sa(f) },
        cb = function(a) { a || (a = {});
            a.filter && a.search === k && (a.search = a.filter); return h.extend({ search: "none", order: "current", page: "all" }, a) },
        db = function(a) { for (var b = 0, c = a.length; b < c; b++)
                if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
            a.length = 0; return a },
        Da = function(a, b) {
            var c, d, e, f = [],
                g = a.aiDisplay;
            c = a.aiDisplayMaster;
            var j = b.search;
            d = b.order;
            e = b.page;
            if ("ssp" == y(a)) return "removed" === j ? [] : X(0, c.length);
            if ("current" == e) { c = a._iDisplayStart; for (d = a.fnDisplayEnd(); c < d; c++) f.push(g[c]) } else if ("current" ==
                d || "applied" == d) f = "none" == j ? c.slice() : "applied" == j ? g.slice() : h.map(c, function(a) { return -1 === h.inArray(a, g) ? a : null });
            else if ("index" == d || "original" == d) { c = 0; for (d = a.aoData.length; c < d; c++) "none" == j ? f.push(c) : (e = h.inArray(c, g), (-1 === e && "removed" == j || 0 <= e && "applied" == j) && f.push(c)) }
            return f
        };
    p("rows()", function(a, b) {
        a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
        var b = cb(b),
            c = this.iterator("table", function(c) {
                var e = b,
                    f;
                return bb("row", a, function(a) {
                        var b = Qb(a);
                        if (b !== null && !e) return [b];
                        f || (f = Da(c, e));
                        if (b !==
                            null && h.inArray(b, f) !== -1) return [b];
                        if (a === null || a === k || a === "") return f;
                        if (typeof a === "function") return h.map(f, function(b) { var e = c.aoData[b]; return a(b, e._aData, e.nTr) ? b : null });
                        b = Tb(ja(c.aoData, f, "nTr"));
                        if (a.nodeName) { if (a._DT_RowIndex !== k) return [a._DT_RowIndex]; if (a._DT_CellIndex) return [a._DT_CellIndex.row];
                            b = h(a).closest("*[data-dt-row]"); return b.length ? [b.data("dt-row")] : [] }
                        if (typeof a === "string" && a.charAt(0) === "#") { var i = c.aIds[a.replace(/^#/, "")]; if (i !== k) return [i.idx] }
                        return h(b).filter(a).map(function() { return this._DT_RowIndex }).toArray()
                    },
                    c, e)
            }, 1);
        c.selector.rows = a;
        c.selector.opts = b;
        return c
    });
    p("rows().nodes()", function() { return this.iterator("row", function(a, b) { return a.aoData[b].nTr || k }, 1) });
    p("rows().data()", function() { return this.iterator(!0, "rows", function(a, b) { return ja(a.aoData, b, "_aData") }, 1) });
    t("rows().cache()", "row().cache()", function(a) { return this.iterator("row", function(b, c) { var d = b.aoData[c]; return "search" === a ? d._aFilterData : d._aSortData }, 1) });
    t("rows().invalidate()", "row().invalidate()", function(a) {
        return this.iterator("row",
            function(b, c) { da(b, c, a) })
    });
    t("rows().indexes()", "row().index()", function() { return this.iterator("row", function(a, b) { return b }, 1) });
    t("rows().ids()", "row().id()", function(a) { for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
            for (var f = 0, g = this[d].length; f < g; f++) { var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
                b.push((!0 === a ? "#" : "") + h) }
        return new u(c, b) });
    t("rows().remove()", "row().remove()", function() {
        var a = this;
        this.iterator("row", function(b, c, d) {
            var e = b.aoData,
                f = e[c],
                g, h, i, n, l;
            e.splice(c, 1);
            g = 0;
            for (h = e.length; g < h; g++)
                if (i = e[g], l = i.anCells, null !== i.nTr && (i.nTr._DT_RowIndex = g), null !== l) { i = 0; for (n = l.length; i < n; i++) l[i]._DT_CellIndex.row = g }
            qa(b.aiDisplayMaster, c);
            qa(b.aiDisplay, c);
            qa(a[d], c, !1);
            Ua(b);
            c = b.rowIdFn(f._aData);
            c !== k && delete b.aIds[c]
        });
        this.iterator("table", function(a) { for (var c = 0, d = a.aoData.length; c < d; c++) a.aoData[c].idx = c });
        return this
    });
    p("rows.add()", function(a) {
        var b = this.iterator("table", function(b) {
                var c, f, g, h = [];
                f = 0;
                for (g = a.length; f < g; f++) c = a[f], c.nodeName && "TR" === c.nodeName.toUpperCase() ?
                    h.push(oa(b, c)[0]) : h.push(N(b, c));
                return h
            }, 1),
            c = this.rows(-1);
        c.pop();
        h.merge(c, b);
        return c
    });
    p("row()", function(a, b) { return db(this.rows(a, b)) });
    p("row().data()", function(a) { var b = this.context; if (a === k) return b.length && this.length ? b[0].aoData[this[0]]._aData : k;
        b[0].aoData[this[0]]._aData = a;
        da(b[0], this[0], "data"); return this });
    p("row().node()", function() { var a = this.context; return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null });
    p("row.add()", function(a) {
        a instanceof h && a.length && (a = a[0]);
        var b = this.iterator("table", function(b) { return a.nodeName && "TR" === a.nodeName.toUpperCase() ? oa(b, a)[0] : N(b, a) });
        return this.row(b[0])
    });
    var eb = function(a, b) { var c = a.context; if (c.length && (c = c[0].aoData[b !== k ? b : a[0]]) && c._details) c._details.remove(), c._detailsShow = k, c._details = k },
        Wb = function(a, b) {
            var c = a.context;
            if (c.length && a.length) {
                var d = c[0].aoData[a[0]];
                if (d._details) {
                    (d._detailsShow = b) ? d._details.insertAfter(d.nTr): d._details.detach();
                    var e = c[0],
                        f = new u(e),
                        g = e.aoData;
                    f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
                    0 < D(g, "_details").length && (f.on("draw.dt.DT_details", function(a, b) { e === b && f.rows({ page: "current" }).eq(0).each(function(a) { a = g[a];
                            a._detailsShow && a._details.insertAfter(a.nTr) }) }), f.on("column-visibility.dt.DT_details", function(a, b) { if (e === b)
                            for (var c, d = ba(b), f = 0, h = g.length; f < h; f++) c = g[f], c._details && c._details.children("td[colspan]").attr("colspan", d) }), f.on("destroy.dt.DT_details", function(a, b) { if (e === b)
                            for (var c = 0, d = g.length; c < d; c++) g[c]._details && eb(f, c) }))
                }
            }
        };
    p("row().child()", function(a, b) {
        var c =
            this.context;
        if (a === k) return c.length && this.length ? c[0].aoData[this[0]]._details : k;
        if (!0 === a) this.child.show();
        else if (!1 === a) eb(this);
        else if (c.length && this.length) {
            var d = c[0],
                c = c[0].aoData[this[0]],
                e = [],
                f = function(a, b) { if (h.isArray(a) || a instanceof h)
                        for (var c = 0, k = a.length; c < k; c++) f(a[c], b);
                    else a.nodeName && "tr" === a.nodeName.toLowerCase() ? e.push(a) : (c = h("<tr><td/></tr>").addClass(b), h("td", c).addClass(b).html(a)[0].colSpan = ba(d), e.push(c[0])) };
            f(a, b);
            c._details && c._details.detach();
            c._details = h(e);
            c._detailsShow && c._details.insertAfter(c.nTr)
        }
        return this
    });
    p(["row().child.show()", "row().child().show()"], function() { Wb(this, !0); return this });
    p(["row().child.hide()", "row().child().hide()"], function() { Wb(this, !1); return this });
    p(["row().child.remove()", "row().child().remove()"], function() { eb(this); return this });
    p("row().child.isShown()", function() { var a = this.context; return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1 });
    var fc = /^([^:]+):(name|visIdx|visible)$/,
        Xb = function(a, b,
            c, d, e) { for (var c = [], d = 0, f = e.length; d < f; d++) c.push(B(a, e[d], b)); return c };
    p("columns()", function(a, b) {
        a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
        var b = cb(b),
            c = this.iterator("table", function(c) {
                    var e = a,
                        f = b,
                        g = c.aoColumns,
                        j = D(g, "sName"),
                        i = D(g, "nTh");
                    return bb("column", e, function(a) {
                        var b = Qb(a);
                        if (a === "") return X(g.length);
                        if (b !== null) return [b >= 0 ? b : g.length + b];
                        if (typeof a === "function") { var e = Da(c, f); return h.map(g, function(b, f) { return a(f, Xb(c, f, 0, 0, e), i[f]) ? f : null }) }
                        var k = typeof a === "string" ? a.match(fc) :
                            "";
                        if (k) switch (k[2]) {
                            case "visIdx":
                            case "visible":
                                b = parseInt(k[1], 10); if (b < 0) { var m = h.map(g, function(a, b) { return a.bVisible ? b : null }); return [m[m.length + b]] } return [$(c, b)];
                            case "name":
                                return h.map(j, function(a, b) { return a === k[1] ? b : null });
                            default:
                                return [] }
                        if (a.nodeName && a._DT_CellIndex) return [a._DT_CellIndex.column];
                        b = h(i).filter(a).map(function() { return h.inArray(this, i) }).toArray();
                        if (b.length || !a.nodeName) return b;
                        b = h(a).closest("*[data-dt-column]");
                        return b.length ? [b.data("dt-column")] : []
                    }, c, f)
                },
                1);
        c.selector.cols = a;
        c.selector.opts = b;
        return c
    });
    t("columns().header()", "column().header()", function() { return this.iterator("column", function(a, b) { return a.aoColumns[b].nTh }, 1) });
    t("columns().footer()", "column().footer()", function() { return this.iterator("column", function(a, b) { return a.aoColumns[b].nTf }, 1) });
    t("columns().data()", "column().data()", function() { return this.iterator("column-rows", Xb, 1) });
    t("columns().dataSrc()", "column().dataSrc()", function() {
        return this.iterator("column", function(a, b) { return a.aoColumns[b].mData },
            1)
    });
    t("columns().cache()", "column().cache()", function(a) { return this.iterator("column-rows", function(b, c, d, e, f) { return ja(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c) }, 1) });
    t("columns().nodes()", "column().nodes()", function() { return this.iterator("column-rows", function(a, b, c, d, e) { return ja(a.aoData, e, "anCells", b) }, 1) });
    t("columns().visible()", "column().visible()", function(a, b) {
        var c = this.iterator("column", function(b, c) {
            if (a === k) return b.aoColumns[c].bVisible;
            var f = b.aoColumns,
                g = f[c],
                j = b.aoData,
                i, n, l;
            if (a !== k && g.bVisible !== a) { if (a) { var m = h.inArray(!0, D(f, "bVisible"), c + 1);
                    i = 0; for (n = j.length; i < n; i++) l = j[i].nTr, f = j[i].anCells, l && l.insertBefore(f[c], f[m] || null) } else h(D(b.aoData, "anCells", c)).detach();
                g.bVisible = a;
                fa(b, b.aoHeader);
                fa(b, b.aoFooter);
                za(b) }
        });
        a !== k && (this.iterator("column", function(c, e) { s(c, null, "column-visibility", [c, e, a, b]) }), (b === k || b) && this.columns.adjust());
        return c
    });
    t("columns().indexes()", "column().index()", function(a) {
        return this.iterator("column", function(b, c) {
            return "visible" ===
                a ? aa(b, c) : c
        }, 1)
    });
    p("columns.adjust()", function() { return this.iterator("table", function(a) { Z(a) }, 1) });
    p("column.index()", function(a, b) { if (0 !== this.context.length) { var c = this.context[0]; if ("fromVisible" === a || "toData" === a) return $(c, b); if ("fromData" === a || "toVisible" === a) return aa(c, b) } });
    p("column()", function(a, b) { return db(this.columns(a, b)) });
    p("cells()", function(a, b, c) {
        h.isPlainObject(a) && (a.row === k ? (c = a, a = null) : (c = b, b = null));
        h.isPlainObject(b) && (c = b, b = null);
        if (null === b || b === k) return this.iterator("table",
            function(b) {
                var d = a,
                    e = cb(c),
                    f = b.aoData,
                    g = Da(b, e),
                    i = Tb(ja(f, g, "anCells")),
                    j = h([].concat.apply([], i)),
                    l, n = b.aoColumns.length,
                    m, p, t, u, s, v;
                return bb("cell", d, function(a) {
                    var c = typeof a === "function";
                    if (a === null || a === k || c) { m = [];
                        p = 0; for (t = g.length; p < t; p++) { l = g[p]; for (u = 0; u < n; u++) { s = { row: l, column: u }; if (c) { v = f[l];
                                    a(s, B(b, l, u), v.anCells ? v.anCells[u] : null) && m.push(s) } else m.push(s) } } return m }
                    if (h.isPlainObject(a)) return [a];
                    c = j.filter(a).map(function(a, b) { return { row: b._DT_CellIndex.row, column: b._DT_CellIndex.column } }).toArray();
                    if (c.length || !a.nodeName) return c;
                    v = h(a).closest("*[data-dt-row]");
                    return v.length ? [{ row: v.data("dt-row"), column: v.data("dt-column") }] : []
                }, b, e)
            });
        var d = this.columns(b, c),
            e = this.rows(a, c),
            f, g, j, i, n, l = this.iterator("table", function(a, b) { f = [];
                g = 0; for (j = e[b].length; g < j; g++) { i = 0; for (n = d[b].length; i < n; i++) f.push({ row: e[b][g], column: d[b][i] }) } return f }, 1);
        h.extend(l.selector, { cols: b, rows: a, opts: c });
        return l
    });
    t("cells().nodes()", "cell().node()", function() {
        return this.iterator("cell", function(a, b, c) {
            return (a =
                a.aoData[b]) && a.anCells ? a.anCells[c] : k
        }, 1)
    });
    p("cells().data()", function() { return this.iterator("cell", function(a, b, c) { return B(a, b, c) }, 1) });
    t("cells().cache()", "cell().cache()", function(a) { a = "search" === a ? "_aFilterData" : "_aSortData"; return this.iterator("cell", function(b, c, d) { return b.aoData[c][a][d] }, 1) });
    t("cells().render()", "cell().render()", function(a) { return this.iterator("cell", function(b, c, d) { return B(b, c, d, a) }, 1) });
    t("cells().indexes()", "cell().index()", function() {
        return this.iterator("cell",
            function(a, b, c) { return { row: b, column: c, columnVisible: aa(a, c) } }, 1)
    });
    t("cells().invalidate()", "cell().invalidate()", function(a) { return this.iterator("cell", function(b, c, d) { da(b, c, a, d) }) });
    p("cell()", function(a, b, c) { return db(this.cells(a, b, c)) });
    p("cell().data()", function(a) { var b = this.context,
            c = this[0]; if (a === k) return b.length && c.length ? B(b[0], c[0].row, c[0].column) : k;
        lb(b[0], c[0].row, c[0].column, a);
        da(b[0], c[0].row, "data", c[0].column); return this });
    p("order()", function(a, b) {
        var c = this.context;
        if (a ===
            k) return 0 !== c.length ? c[0].aaSorting : k;
        "number" === typeof a ? a = [
            [a, b]
        ] : a.length && !h.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));
        return this.iterator("table", function(b) { b.aaSorting = a.slice() })
    });
    p("order.listener()", function(a, b, c) { return this.iterator("table", function(d) { Oa(d, a, b, c) }) });
    p("order.fixed()", function(a) { if (!a) { var b = this.context,
                b = b.length ? b[0].aaSortingFixed : k; return h.isArray(b) ? { pre: b } : b } return this.iterator("table", function(b) { b.aaSortingFixed = h.extend(!0, {}, a) }) });
    p(["columns().order()",
        "column().order()"
    ], function(a) { var b = this; return this.iterator("table", function(c, d) { var e = [];
            h.each(b[d], function(b, c) { e.push([c, a]) });
            c.aaSorting = e }) });
    p("search()", function(a, b, c, d) { var e = this.context; return a === k ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : k : this.iterator("table", function(e) { e.oFeatures.bFilter && ga(e, h.extend({}, e.oPreviousSearch, { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), 1) }) });
    t("columns().search()", "column().search()", function(a,
        b, c, d) { return this.iterator("column", function(e, f) { var g = e.aoPreSearchCols; if (a === k) return g[f].sSearch;
            e.oFeatures.bFilter && (h.extend(g[f], { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), ga(e, e.oPreviousSearch, 1)) }) });
    p("state()", function() { return this.context.length ? this.context[0].oSavedState : null });
    p("state.clear()", function() { return this.iterator("table", function(a) { a.fnStateSaveCallback.call(a.oInstance, a, {}) }) });
    p("state.loaded()", function() {
        return this.context.length ?
            this.context[0].oLoadedState : null
    });
    p("state.save()", function() { return this.iterator("table", function(a) { za(a) }) });
    m.versionCheck = m.fnVersionCheck = function(a) { for (var b = m.version.split("."), a = a.split("."), c, d, e = 0, f = a.length; e < f; e++)
            if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d;
        return !0 };
    m.isDataTable = m.fnIsDataTable = function(a) {
        var b = h(a).get(0),
            c = !1;
        if (a instanceof m.Api) return !0;
        h.each(m.settings, function(a, e) {
            var f = e.nScrollHead ? h("table", e.nScrollHead)[0] : null,
                g = e.nScrollFoot ?
                h("table", e.nScrollFoot)[0] : null;
            if (e.nTable === b || f === b || g === b) c = !0
        });
        return c
    };
    m.tables = m.fnTables = function(a) { var b = !1;
        h.isPlainObject(a) && (b = a.api, a = a.visible); var c = h.map(m.settings, function(b) { if (!a || a && h(b.nTable).is(":visible")) return b.nTable }); return b ? new u(c) : c };
    m.camelToHungarian = J;
    p("$()", function(a, b) { var c = this.rows(b).nodes(),
            c = h(c); return h([].concat(c.filter(a).toArray(), c.find(a).toArray())) });
    h.each(["on", "one", "off"], function(a, b) {
        p(b + "()", function() {
            var a = Array.prototype.slice.call(arguments);
            a[0] = h.map(a[0].split(/\s/), function(a) { return !a.match(/\.dt\b/) ? a + ".dt" : a }).join(" ");
            var d = h(this.tables().nodes());
            d[b].apply(d, a);
            return this
        })
    });
    p("clear()", function() { return this.iterator("table", function(a) { pa(a) }) });
    p("settings()", function() { return new u(this.context, this.context) });
    p("init()", function() { var a = this.context; return a.length ? a[0].oInit : null });
    p("data()", function() { return this.iterator("table", function(a) { return D(a.aoData, "_aData") }).flatten() });
    p("destroy()", function(a) {
        a = a ||
            !1;
        return this.iterator("table", function(b) {
            var c = b.nTableWrapper.parentNode,
                d = b.oClasses,
                e = b.nTable,
                f = b.nTBody,
                g = b.nTHead,
                j = b.nTFoot,
                i = h(e),
                f = h(f),
                k = h(b.nTableWrapper),
                l = h.map(b.aoData, function(a) { return a.nTr }),
                p;
            b.bDestroying = !0;
            s(b, "aoDestroyCallback", "destroy", [b]);
            a || (new u(b)).columns().visible(!0);
            k.off(".DT").find(":not(tbody *)").off(".DT");
            h(E).off(".DT-" + b.sInstance);
            e != g.parentNode && (i.children("thead").detach(), i.append(g));
            j && e != j.parentNode && (i.children("tfoot").detach(), i.append(j));
            b.aaSorting = [];
            b.aaSortingFixed = [];
            ya(b);
            h(l).removeClass(b.asStripeClasses.join(" "));
            h("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);
            b.bJUI && (h("th span." + d.sSortIcon + ", td span." + d.sSortIcon, g).detach(), h("th, td", g).each(function() { var a = h("div." + d.sSortJUIWrapper, this);
                h(this).append(a.contents());
                a.detach() }));
            f.children().detach();
            f.append(l);
            g = a ? "remove" : "detach";
            i[g]();
            k[g]();
            !a && c && (c.insertBefore(e, b.nTableReinsertBefore), i.css("width",
                b.sDestroyWidth).removeClass(d.sTable), (p = b.asDestroyStripes.length) && f.children().each(function(a) { h(this).addClass(b.asDestroyStripes[a % p]) }));
            c = h.inArray(b, m.settings); - 1 !== c && m.settings.splice(c, 1)
        })
    });
    h.each(["column", "row", "cell"], function(a, b) { p(b + "s().every()", function(a) { var d = this.selector.opts,
                e = this; return this.iterator(b, function(f, g, h, i, m) { a.call(e[b](g, "cell" === b ? h : d, "cell" === b ? d : k), g, h, i, m) }) }) });
    p("i18n()", function(a, b, c) {
        var d = this.context[0],
            a = R(a)(d.oLanguage);
        a === k && (a = b);
        c !==
            k && h.isPlainObject(a) && (a = a[c] !== k ? a[c] : a._);
        return a.replace("%d", c)
    });
    m.version = "1.10.13";
    m.settings = [];
    m.models = {};
    m.models.oSearch = { bCaseInsensitive: !0, sSearch: "", bRegex: !1, bSmart: !0 };
    m.models.oRow = { nTr: null, anCells: null, _aData: [], _aSortData: null, _aFilterData: null, _sFilterRow: null, _sRowStripe: "", src: null, idx: -1 };
    m.models.oColumn = {
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
    };
    m.defaults = {
        aaData: null,
        aaSorting: [
            [0, "asc"]
        ],
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
        bJQueryUI: !1,
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
        fnFormatNumber: function(a) { return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands) },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnServerData: null,
        fnServerParams: null,
        fnStateLoadCallback: function(a) {
            try {
                return JSON.parse((-1 === a.iStateDuration ?
                    sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname))
            } catch (b) {}
        },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function(a, b) { try {
                (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b)) } catch (c) {} },
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
            oPaginate: { sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous" },
            sEmptyTable: "No data available in table",
            sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
            sInfoEmpty: "Showing 0 to 0 of 0 entries",
            sInfoFiltered: "(filtered from _MAX_ total entries)",
            sInfoPostFix: "",
            sDecimal: "",
            sThousands: ",",
            sLengthMenu: "Show _MENU_ entries",
            sLoadingRecords: "Loading...",
            sProcessing: "Processing...",
            sSearch: "Search:",
            sSearchPlaceholder: "",
            sUrl: "",
            sZeroRecords: "No matching records found"
        },
        oSearch: h.extend({}, m.models.oSearch),
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
    };
    Y(m.defaults);
    m.defaults.column = {
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
    };
    Y(m.defaults.column);
    m.models.oSettings = {
        oFeatures: { bAutoWidth: null, bDeferRender: null, bFilter: null, bInfo: null, bLengthChange: null, bPaginate: null, bProcessing: null, bServerSide: null, bSort: null, bSortMulti: null, bSortClasses: null, bStateSave: null },
        oScroll: { bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null },
        oLanguage: { fnInfoCallback: null },
        oBrowser: { bScrollOversize: !1, bScrollbarLeft: !1, bBounding: !1, barWidth: 0 },
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
        bAjaxDataGet: !0,
        jqXHR: null,
        json: k,
        oAjaxData: k,
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
        bJUI: null,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function() { return "ssp" == y(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length },
        fnRecordsDisplay: function() { return "ssp" == y(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length },
        fnDisplayEnd: function() { var a = this._iDisplayLength,
                b = this._iDisplayStart,
                c = b + a,
                d = this.aiDisplay.length,
                e = this.oFeatures,
                f = e.bPaginate; return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null
    };
    m.ext = x = { buttons: {}, classes: {}, build: "bs/jq-2.2.4/dt-1.10.13/b-1.2.4/b-colvis-1.2.4/b-print-1.2.4/fc-3.2.2/fh-3.1.2/kt-2.2.0/r-2.1.0/rr-1.2.0/se-1.2.0", errMode: "alert", feature: [], search: [], selector: { cell: [], column: [], row: [] }, internal: {}, legacy: { ajax: null }, pager: {}, renderer: { pageButton: {}, header: {} }, order: {}, type: { detect: [], search: {}, order: {} }, _unique: 0, fnVersionCheck: m.fnVersionCheck, iApiIndex: 0, oJUIClasses: {}, sVersion: m.version };
    h.extend(x, {
        afnFiltering: x.search,
        aTypes: x.type.detect,
        ofnSearch: x.type.search,
        oSort: x.type.order,
        afnSortData: x.order,
        aoFeatures: x.feature,
        oApi: x.internal,
        oStdClasses: x.classes,
        oPagination: x.pager
    });
    h.extend(m.ext.classes, {
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
        sSortableAsc: "sorting_asc_disabled",
        sSortableDesc: "sorting_desc_disabled",
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
    });
    var Ea = "",
        Ea = "",
        G = Ea + "ui-state-default",
        ka = Ea + "css_right ui-icon ui-icon-",
        Yb = Ea + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
    h.extend(m.ext.oJUIClasses, m.ext.classes, {
        sPageButton: "fg-button ui-button " + G,
        sPageButtonActive: "ui-state-disabled",
        sPageButtonDisabled: "ui-state-disabled",
        sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
        sSortAsc: G + " sorting_asc",
        sSortDesc: G + " sorting_desc",
        sSortable: G + " sorting",
        sSortableAsc: G + " sorting_asc_disabled",
        sSortableDesc: G + " sorting_desc_disabled",
        sSortableNone: G + " sorting_disabled",
        sSortJUIAsc: ka + "triangle-1-n",
        sSortJUIDesc: ka + "triangle-1-s",
        sSortJUI: ka + "carat-2-n-s",
        sSortJUIAscAllowed: ka + "carat-1-n",
        sSortJUIDescAllowed: ka + "carat-1-s",
        sSortJUIWrapper: "DataTables_sort_wrapper",
        sSortIcon: "DataTables_sort_icon",
        sScrollHead: "dataTables_scrollHead " + G,
        sScrollFoot: "dataTables_scrollFoot " + G,
        sHeaderTH: G,
        sFooterTH: G,
        sJUIHeader: Yb +
            " ui-corner-tl ui-corner-tr",
        sJUIFooter: Yb + " ui-corner-bl ui-corner-br"
    });
    var Nb = m.ext.pager;
    h.extend(Nb, { simple: function() { return ["previous", "next"] }, full: function() { return ["first", "previous", "next", "last"] }, numbers: function(a, b) { return [ia(a, b)] }, simple_numbers: function(a, b) { return ["previous", ia(a, b), "next"] }, full_numbers: function(a, b) { return ["first", "previous", ia(a, b), "next", "last"] }, first_last_numbers: function(a, b) { return ["first", ia(a, b), "last"] }, _numbers: ia, numbers_length: 7 });
    h.extend(!0, m.ext.renderer, {
        pageButton: {
            _: function(a, b, c, d, e, f) {
                var g = a.oClasses,
                    j = a.oLanguage.oPaginate,
                    i = a.oLanguage.oAria.paginate || {},
                    m, l, p = 0,
                    r = function(b, d) {
                        var k, t, u, s, v = function(b) { Va(a, b.data.action, true) };
                        k = 0;
                        for (t = d.length; k < t; k++) {
                            s = d[k];
                            if (h.isArray(s)) { u = h("<" + (s.DT_el || "div") + "/>").appendTo(b);
                                r(u, s) } else {
                                m = null;
                                l = "";
                                switch (s) {
                                    case "ellipsis":
                                        b.append('<span class="ellipsis">&#x2026;</span>');
                                        break;
                                    case "first":
                                        m = j.sFirst;
                                        l = s + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                                        break;
                                    case "previous":
                                        m = j.sPrevious;
                                        l = s + (e > 0 ? "" : " " +
                                            g.sPageButtonDisabled);
                                        break;
                                    case "next":
                                        m = j.sNext;
                                        l = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                                        break;
                                    case "last":
                                        m = j.sLast;
                                        l = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                                        break;
                                    default:
                                        m = s + 1;
                                        l = e === s ? g.sPageButtonActive : ""
                                }
                                if (m !== null) { u = h("<a>", { "class": g.sPageButton + " " + l, "aria-controls": a.sTableId, "aria-label": i[s], "data-dt-idx": p, tabindex: a.iTabIndex, id: c === 0 && typeof s === "string" ? a.sTableId + "_" + s : null }).html(m).appendTo(b);
                                    Ya(u, { action: s }, v);
                                    p++ }
                            }
                        }
                    },
                    t;
                try { t = h(b).find(H.activeElement).data("dt-idx") } catch (u) {}
                r(h(b).empty(),
                    d);
                t !== k && h(b).find("[data-dt-idx=" + t + "]").focus()
            }
        }
    });
    h.extend(m.ext.type.detect, [function(a, b) { var c = b.oLanguage.sDecimal; return ab(a, c) ? "num" + c : null }, function(a) { if (a && !(a instanceof Date) && !cc.test(a)) return null; var b = Date.parse(a); return null !== b && !isNaN(b) || M(a) ? "date" : null }, function(a, b) { var c = b.oLanguage.sDecimal; return ab(a, c, !0) ? "num-fmt" + c : null }, function(a, b) { var c = b.oLanguage.sDecimal; return Sb(a, c) ? "html-num" + c : null }, function(a, b) {
        var c = b.oLanguage.sDecimal;
        return Sb(a, c, !0) ? "html-num-fmt" +
            c : null
    }, function(a) { return M(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null }]);
    h.extend(m.ext.type.search, { html: function(a) { return M(a) ? a : "string" === typeof a ? a.replace(Pb, " ").replace(Ca, "") : "" }, string: function(a) { return M(a) ? a : "string" === typeof a ? a.replace(Pb, " ") : a } });
    var Ba = function(a, b, c, d) { if (0 !== a && (!a || "-" === a)) return -Infinity;
        b && (a = Rb(a, b));
        a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, ""))); return 1 * a };
    h.extend(x.type.order, {
        "date-pre": function(a) { return Date.parse(a) || -Infinity },
        "html-pre": function(a) { return M(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + "" },
        "string-pre": function(a) { return M(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString() },
        "string-asc": function(a, b) { return a < b ? -1 : a > b ? 1 : 0 },
        "string-desc": function(a, b) { return a < b ? 1 : a > b ? -1 : 0 }
    });
    fb("");
    h.extend(!0, m.ext.renderer, {
        header: {
            _: function(a, b, c, d) {
                h(a.nTable).on("order.dt.DT", function(e, f, g, h) {
                    if (a === f) {
                        e = c.idx;
                        b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass(h[e] ==
                            "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass)
                    }
                })
            },
            jqueryui: function(a, b, c, d) {
                h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
                h(a.nTable).on("order.dt.DT", function(e, f, g, h) {
                    if (a === f) {
                        e = c.idx;
                        b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass);
                        b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " +
                            d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass(h[e] == "asc" ? d.sSortJUIAsc : h[e] == "desc" ? d.sSortJUIDesc : c.sSortingClassJUI)
                    }
                })
            }
        }
    });
    var Zb = function(a) { return "string" === typeof a ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a };
    m.render = {
        number: function(a, b, c, d, e) {
            return {
                display: function(f) {
                    if ("number" !== typeof f && "string" !== typeof f) return f;
                    var g = 0 > f ? "-" : "",
                        h = parseFloat(f);
                    if (isNaN(h)) return Zb(f);
                    h = h.toFixed(c);
                    f = Math.abs(h);
                    h = parseInt(f, 10);
                    f = c ? b + (f - h).toFixed(c).substring(2) :
                        "";
                    return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || "")
                }
            }
        },
        text: function() { return { display: Zb } }
    };
    h.extend(m.ext.internal, {
        _fnExternApiFunc: Ob,
        _fnBuildAjax: ua,
        _fnAjaxUpdate: nb,
        _fnAjaxParameters: wb,
        _fnAjaxUpdateDraw: xb,
        _fnAjaxDataSrc: va,
        _fnAddColumn: Ga,
        _fnColumnOptions: la,
        _fnAdjustColumnSizing: Z,
        _fnVisibleToColumnIndex: $,
        _fnColumnIndexToVisible: aa,
        _fnVisbleColumns: ba,
        _fnGetColumns: na,
        _fnColumnTypes: Ia,
        _fnApplyColumnDefs: kb,
        _fnHungarianMap: Y,
        _fnCamelToHungarian: J,
        _fnLanguageCompat: Fa,
        _fnBrowserDetect: ib,
        _fnAddData: N,
        _fnAddTr: oa,
        _fnNodeToDataIndex: function(a, b) { return b._DT_RowIndex !== k ? b._DT_RowIndex : null },
        _fnNodeToColumnIndex: function(a, b, c) { return h.inArray(c, a.aoData[b].anCells) },
        _fnGetCellData: B,
        _fnSetCellData: lb,
        _fnSplitObjNotation: La,
        _fnGetObjectDataFn: R,
        _fnSetObjectDataFn: S,
        _fnGetDataMaster: Ma,
        _fnClearTable: pa,
        _fnDeleteIndex: qa,
        _fnInvalidate: da,
        _fnGetRowElements: Ka,
        _fnCreateTr: Ja,
        _fnBuildHead: mb,
        _fnDrawHead: fa,
        _fnDraw: O,
        _fnReDraw: T,
        _fnAddOptionsHtml: pb,
        _fnDetectHeader: ea,
        _fnGetUniqueThs: ta,
        _fnFeatureHtmlFilter: rb,
        _fnFilterComplete: ga,
        _fnFilterCustom: Ab,
        _fnFilterColumn: zb,
        _fnFilter: yb,
        _fnFilterCreateSearch: Ra,
        _fnEscapeRegex: Sa,
        _fnFilterData: Bb,
        _fnFeatureHtmlInfo: ub,
        _fnUpdateInfo: Eb,
        _fnInfoMacros: Fb,
        _fnInitialise: ha,
        _fnInitComplete: wa,
        _fnLengthChange: Ta,
        _fnFeatureHtmlLength: qb,
        _fnFeatureHtmlPaginate: vb,
        _fnPageChange: Va,
        _fnFeatureHtmlProcessing: sb,
        _fnProcessingDisplay: C,
        _fnFeatureHtmlTable: tb,
        _fnScrollDraw: ma,
        _fnApplyToChildren: I,
        _fnCalculateColumnWidths: Ha,
        _fnThrottle: Qa,
        _fnConvertToWidth: Gb,
        _fnGetWidestNode: Hb,
        _fnGetMaxLenString: Ib,
        _fnStringToCss: v,
        _fnSortFlatten: W,
        _fnSort: ob,
        _fnSortAria: Kb,
        _fnSortListener: Xa,
        _fnSortAttachListener: Oa,
        _fnSortingClasses: ya,
        _fnSortData: Jb,
        _fnSaveState: za,
        _fnLoadState: Lb,
        _fnSettingsFromNode: Aa,
        _fnLog: K,
        _fnMap: F,
        _fnBindAction: Ya,
        _fnCallbackReg: z,
        _fnCallbackFire: s,
        _fnLengthOverflow: Ua,
        _fnRenderer: Pa,
        _fnDataSource: y,
        _fnRowAttributes: Na,
        _fnCalculateEnd: function() {}
    });
    h.fn.dataTable = m;
    m.$ = h;
    h.fn.dataTableSettings = m.settings;
    h.fn.dataTableExt =
        m.ext;
    h.fn.DataTable = function(a) { return h(this).dataTable(a).api() };
    h.each(m, function(a, b) { h.fn.DataTable[a] = b });
    return h.fn.dataTable
});


/*!
 DataTables Bootstrap 3 integration
 Â©2011-2015 SpryMedia Ltd - datatables.net/license
*/
(function(b) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function(a) { return b(a, window, document) }) : "object" === typeof exports ? module.exports = function(a, d) { a || (a = window); if (!d || !d.fn.dataTable) d = require("datatables.net")(a, d).$; return b(d, a, a.document) } : b(jQuery, window, document) })(function(b, a, d, m) {
    var f = b.fn.dataTable;
    b.extend(!0, f.defaults, { dom: "<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>", renderer: "bootstrap" });
    b.extend(f.ext.classes, { sWrapper: "dataTables_wrapper form-inline dt-bootstrap", sFilterInput: "form-control input-sm", sLengthSelect: "form-control input-sm", sProcessing: "dataTables_processing panel panel-default" });
    f.ext.renderer.pageButton.bootstrap = function(a, h, r, s, j, n) {
        var o = new f.Api(a),
            t = a.oClasses,
            k = a.oLanguage.oPaginate,
            u = a.oLanguage.oAria.paginate || {},
            e, g, p = 0,
            q = function(d, f) {
                var l, h, i, c, m = function(a) { a.preventDefault();!b(a.currentTarget).hasClass("disabled") && o.page() != a.data.action && o.page(a.data.action).draw("page") };
                l = 0;
                for (h = f.length; l < h; l++)
                    if (c = f[l], b.isArray(c)) q(d, c);
                    else {
                        g = e = "";
                        switch (c) {
                            case "ellipsis":
                                e = "&#x2026;";
                                g = "disabled"; break;
                            case "first":
                                e = k.sFirst;
                                g = c + (0 < j ? "" : " disabled"); break;
                            case "previous":
                                e = k.sPrevious;
                                g = c + (0 < j ? "" : " disabled"); break;
                            case "next":
                                e = k.sNext;
                                g = c + (j < n - 1 ? "" : " disabled"); break;
                            case "last":
                                e = k.sLast;
                                g = c + (j < n - 1 ? "" : " disabled"); break;
                            default:
                                e = c + 1, g = j === c ? "active" : "" }
                        e && (i = b("<li>", { "class": t.sPageButton + " " + g, id: 0 === r && "string" === typeof c ? a.sTableId + "_" + c : null }).append(b("<a>", {
                            href: "#",
                            "aria-controls": a.sTableId,
                            "aria-label": u[c],
                            "data-dt-idx": p,
                            tabindex: a.iTabIndex
                        }).html(e)).appendTo(d), a.oApi._fnBindAction(i, { action: c }, m), p++)
                    }
            },
            i;
        try { i = b(h).find(d.activeElement).data("dt-idx") } catch (v) {}
        q(b(h).empty().html('<ul class="pagination"/>').children("ul"), s);
        i !== m && b(h).find("[data-dt-idx=" + i + "]").focus()
    };
    return f
});


/*!
 Buttons for DataTables 1.2.4
 Â©2016 SpryMedia Ltd - datatables.net/license
*/
(function(d) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function(n) { return d(n, window, document) }) : "object" === typeof exports ? module.exports = function(n, o) { n || (n = window); if (!o || !o.fn.dataTable) o = require("datatables.net")(n, o).$; return d(o, n, n.document) } : d(jQuery, window, document) })(function(d, n, o, m) {
    var i = d.fn.dataTable,
        u = 0,
        v = 0,
        j = i.ext.buttons,
        l = function(a, b) {
            !0 === b && (b = {});
            d.isArray(b) && (b = { buttons: b });
            this.c = d.extend(!0, {}, l.defaults, b);
            b.buttons && (this.c.buttons = b.buttons);
            this.s = { dt: new i.Api(a), buttons: [], listenKeys: "", namespace: "dtb" + u++ };
            this.dom = { container: d("<" + this.c.dom.container.tag + "/>").addClass(this.c.dom.container.className) };
            this._constructor()
        };
    d.extend(l.prototype, {
        action: function(a, b) { var c = this._nodeToButton(a); if (b === m) return c.conf.action;
            c.conf.action = b; return this },
        active: function(a, b) { var c = this._nodeToButton(a),
                e = this.c.dom.button.active,
                c = d(c.node); if (b === m) return c.hasClass(e);
            c.toggleClass(e, b === m ? !0 : b); return this },
        add: function(a, b) {
            var c =
                this.s.buttons;
            if ("string" === typeof b) { for (var e = b.split("-"), c = this.s, d = 0, h = e.length - 1; d < h; d++) c = c.buttons[1 * e[d]];
                c = c.buttons;
                b = 1 * e[e.length - 1] }
            this._expandButton(c, a, !1, b);
            this._draw();
            return this
        },
        container: function() { return this.dom.container },
        disable: function(a) { a = this._nodeToButton(a);
            d(a.node).addClass(this.c.dom.button.disabled); return this },
        destroy: function() {
            d("body").off("keyup." + this.s.namespace);
            var a = this.s.buttons.slice(),
                b, c;
            b = 0;
            for (c = a.length; b < c; b++) this.remove(a[b].node);
            this.dom.container.remove();
            a = this.s.dt.settings()[0];
            b = 0;
            for (c = a.length; b < c; b++)
                if (a.inst === this) { a.splice(b, 1); break }
            return this
        },
        enable: function(a, b) { if (!1 === b) return this.disable(a); var c = this._nodeToButton(a);
            d(c.node).removeClass(this.c.dom.button.disabled); return this },
        name: function() { return this.c.name },
        node: function(a) { a = this._nodeToButton(a); return d(a.node) },
        remove: function(a) {
            var b = this._nodeToButton(a),
                c = this._nodeToHost(a),
                e = this.s.dt;
            if (b.buttons.length)
                for (var g = b.buttons.length - 1; 0 <= g; g--) this.remove(b.buttons[g].node);
            b.conf.destroy && b.conf.destroy.call(e.button(a), e, d(a), b.conf);
            this._removeKey(b.conf);
            d(b.node).remove();
            a = d.inArray(b, c);
            c.splice(a, 1);
            return this
        },
        text: function(a, b) { var c = this._nodeToButton(a),
                e = this.c.dom.collection.buttonLiner,
                e = c.inCollection && e && e.tag ? e.tag : this.c.dom.buttonLiner.tag,
                g = this.s.dt,
                h = d(c.node),
                f = function(a) { return "function" === typeof a ? a(g, h, c.conf) : a }; if (b === m) return f(c.conf.text);
            c.conf.text = b;
            e ? h.children(e).html(f(b)) : h.html(f(b)); return this },
        _constructor: function() {
            var a =
                this,
                b = this.s.dt,
                c = b.settings()[0],
                e = this.c.buttons;
            c._buttons || (c._buttons = []);
            c._buttons.push({ inst: this, name: this.c.name });
            for (var c = 0, g = e.length; c < g; c++) this.add(e[c]);
            b.on("destroy", function() { a.destroy() });
            d("body").on("keyup." + this.s.namespace, function(b) { if (!o.activeElement || o.activeElement === o.body) { var c = String.fromCharCode(b.keyCode).toLowerCase();
                    a.s.listenKeys.toLowerCase().indexOf(c) !== -1 && a._keypress(c, b) } })
        },
        _addKey: function(a) {
            a.key && (this.s.listenKeys += d.isPlainObject(a.key) ? a.key.key :
                a.key)
        },
        _draw: function(a, b) { a || (a = this.dom.container, b = this.s.buttons);
            a.children().detach(); for (var c = 0, e = b.length; c < e; c++) a.append(b[c].inserter), b[c].buttons && b[c].buttons.length && this._draw(b[c].collection, b[c].buttons) },
        _expandButton: function(a, b, c, e) {
            for (var g = this.s.dt, h = 0, b = !d.isArray(b) ? [b] : b, f = 0, r = b.length; f < r; f++) {
                var k = this._resolveExtends(b[f]);
                if (k)
                    if (d.isArray(k)) this._expandButton(a, k, c, e);
                    else {
                        var p = this._buildButton(k, c);
                        if (p) {
                            e !== m ? (a.splice(e, 0, p), e++) : a.push(p);
                            if (p.conf.buttons) {
                                var s =
                                    this.c.dom.collection;
                                p.collection = d("<" + s.tag + "/>").addClass(s.className);
                                p.conf._collection = p.collection;
                                this._expandButton(p.buttons, p.conf.buttons, !0, e)
                            }
                            k.init && k.init.call(g.button(p.node), g, d(p.node), k);
                            h++
                        }
                    }
            }
        },
        _buildButton: function(a, b) {
            var c = this.c.dom.button,
                e = this.c.dom.buttonLiner,
                g = this.c.dom.collection,
                h = this.s.dt,
                f = function(b) { return "function" === typeof b ? b(h, k, a) : b };
            b && g.button && (c = g.button);
            b && g.buttonLiner && (e = g.buttonLiner);
            if (a.available && !a.available(h, a)) return !1;
            var r = function(a,
                    b, c, e) { e.action.call(b.button(c), a, b, c, e);
                    d(b.table().node()).triggerHandler("buttons-action.dt", [b.button(c), b, c, e]) },
                k = d("<" + c.tag + "/>").addClass(c.className).attr("tabindex", this.s.dt.settings()[0].iTabIndex).attr("aria-controls", this.s.dt.table().node().id).on("click.dtb", function(b) { b.preventDefault();!k.hasClass(c.disabled) && a.action && r(b, h, k, a);
                    k.blur() }).on("keyup.dtb", function(b) { b.keyCode === 13 && !k.hasClass(c.disabled) && a.action && r(b, h, k, a) });
            "a" === c.tag.toLowerCase() && k.attr("href", "#");
            e.tag ? (g = d("<" + e.tag + "/>").html(f(a.text)).addClass(e.className), "a" === e.tag.toLowerCase() && g.attr("href", "#"), k.append(g)) : k.html(f(a.text));
            !1 === a.enabled && k.addClass(c.disabled);
            a.className && k.addClass(a.className);
            a.titleAttr && k.attr("title", a.titleAttr);
            a.namespace || (a.namespace = ".dt-button-" + v++);
            e = (e = this.c.dom.buttonContainer) && e.tag ? d("<" + e.tag + "/>").addClass(e.className).append(k) : k;
            this._addKey(a);
            return { conf: a, node: k.get(0), inserter: e, buttons: [], inCollection: b, collection: null }
        },
        _nodeToButton: function(a,
            b) { b || (b = this.s.buttons); for (var c = 0, e = b.length; c < e; c++) { if (b[c].node === a) return b[c]; if (b[c].buttons.length) { var d = this._nodeToButton(a, b[c].buttons); if (d) return d } } },
        _nodeToHost: function(a, b) { b || (b = this.s.buttons); for (var c = 0, e = b.length; c < e; c++) { if (b[c].node === a) return b; if (b[c].buttons.length) { var d = this._nodeToHost(a, b[c].buttons); if (d) return d } } },
        _keypress: function(a, b) {
            var c = function(e) {
                for (var g = 0, h = e.length; g < h; g++) {
                    var f = e[g].conf,
                        r = e[g].node;
                    if (f.key)
                        if (f.key === a) d(r).click();
                        else if (d.isPlainObject(f.key) &&
                        f.key.key === a && (!f.key.shiftKey || b.shiftKey))
                        if (!f.key.altKey || b.altKey)
                            if (!f.key.ctrlKey || b.ctrlKey)(!f.key.metaKey || b.metaKey) && d(r).click();
                    e[g].buttons.length && c(e[g].buttons)
                }
            };
            c(this.s.buttons)
        },
        _removeKey: function(a) { if (a.key) { var b = d.isPlainObject(a.key) ? a.key.key : a.key,
                    a = this.s.listenKeys.split(""),
                    b = d.inArray(b, a);
                a.splice(b, 1);
                this.s.listenKeys = a.join("") } },
        _resolveExtends: function(a) {
            for (var b = this.s.dt, c, e, g = function(c) {
                    for (var e = 0; !d.isPlainObject(c) && !d.isArray(c);) {
                        if (c === m) return;
                        if ("function" === typeof c) { if (c = c(b, a), !c) return !1 } else if ("string" === typeof c) { if (!j[c]) throw "Unknown button type: " + c;
                            c = j[c] }
                        e++;
                        if (30 < e) throw "Buttons: Too many iterations";
                    }
                    return d.isArray(c) ? c : d.extend({}, c)
                }, a = g(a); a && a.extend;) {
                if (!j[a.extend]) throw "Cannot extend unknown button type: " + a.extend;
                var h = g(j[a.extend]);
                if (d.isArray(h)) return h;
                if (!h) return !1;
                c = h.className;
                a = d.extend({}, h, a);
                c && a.className !== c && (a.className = c + " " + a.className);
                var f = a.postfixButtons;
                if (f) {
                    a.buttons || (a.buttons = []);
                    c = 0;
                    for (e = f.length; c < e; c++) a.buttons.push(f[c]);
                    a.postfixButtons = null
                }
                if (f = a.prefixButtons) { a.buttons || (a.buttons = []);
                    c = 0; for (e = f.length; c < e; c++) a.buttons.splice(c, 0, f[c]);
                    a.prefixButtons = null }
                a.extend = h.extend
            }
            return a
        }
    });
    l.background = function(a, b, c) { c === m && (c = 400);
        a ? d("<div/>").addClass(b).css("display", "none").appendTo("body").fadeIn(c) : d("body > div." + b).fadeOut(c, function() { d(this).removeClass(b).remove() }) };
    l.instanceSelector = function(a, b) {
        if (!a) return d.map(b, function(a) { return a.inst });
        var c = [],
            e = d.map(b, function(a) { return a.name }),
            g = function(a) { if (d.isArray(a))
                    for (var f = 0, r = a.length; f < r; f++) g(a[f]);
                else "string" === typeof a ? -1 !== a.indexOf(",") ? g(a.split(",")) : (a = d.inArray(d.trim(a), e), -1 !== a && c.push(b[a].inst)) : "number" === typeof a && c.push(b[a].inst) };
        g(a);
        return c
    };
    l.buttonSelector = function(a, b) {
        for (var c = [], e = function(a, b, c) { for (var d, g, f = 0, h = b.length; f < h; f++)
                    if (d = b[f]) g = c !== m ? c + f : f + "", a.push({ node: d.node, name: d.conf.name, idx: g }), d.buttons && e(a, d.buttons, g + "-") }, g = function(a, b) {
                var f,
                    h, i = [];
                e(i, b.s.buttons);
                f = d.map(i, function(a) { return a.node });
                if (d.isArray(a) || a instanceof d) { f = 0; for (h = a.length; f < h; f++) g(a[f], b) } else if (null === a || a === m || "*" === a) { f = 0; for (h = i.length; f < h; f++) c.push({ inst: b, node: i[f].node }) } else if ("number" === typeof a) c.push({ inst: b, node: b.s.buttons[a].node });
                else if ("string" === typeof a)
                    if (-1 !== a.indexOf(",")) { i = a.split(",");
                        f = 0; for (h = i.length; f < h; f++) g(d.trim(i[f]), b) } else if (a.match(/^\d+(\-\d+)*$/)) f = d.map(i, function(a) { return a.idx }), c.push({
                    inst: b,
                    node: i[d.inArray(a,
                        f)].node
                });
                else if (-1 !== a.indexOf(":name")) { var j = a.replace(":name", "");
                    f = 0; for (h = i.length; f < h; f++) i[f].name === j && c.push({ inst: b, node: i[f].node }) } else d(f).filter(a).each(function() { c.push({ inst: b, node: this }) });
                else "object" === typeof a && a.nodeName && (i = d.inArray(a, f), -1 !== i && c.push({ inst: b, node: f[i] }))
            }, h = 0, f = a.length; h < f; h++) g(b, a[h]);
        return c
    };
    l.defaults = {
        buttons: ["copy", "excel", "csv", "pdf", "print"],
        name: "main",
        tabIndex: 0,
        dom: {
            container: { tag: "div", className: "dt-buttons" },
            collection: { tag: "div", className: "dt-button-collection" },
            button: { tag: "a", className: "dt-button", active: "active", disabled: "disabled" },
            buttonLiner: { tag: "span", className: "" }
        }
    };
    l.version = "1.2.4";
    d.extend(j, {
        collection: {
            text: function(a) { return a.i18n("buttons.collection", "Collection") },
            className: "buttons-collection",
            action: function(a, b, c, e) {
                var a = c.offset(),
                    g = d(b.table().container()),
                    h = !1;
                d("div.dt-button-background").length && (h = d(".dt-button-collection").offset(), d("body").trigger("click.dtb-collection"));
                e._collection.addClass(e.collectionLayout).css("display",
                    "none").appendTo("body").fadeIn(e.fade);
                var f = e._collection.css("position");
                h && "absolute" === f ? e._collection.css({ top: h.top, left: h.left }) : "absolute" === f ? (e._collection.css({ top: a.top + c.outerHeight(), left: a.left }), c = a.left + e._collection.outerWidth(), g = g.offset().left + g.width(), c > g && e._collection.css("left", a.left - (c - g))) : (a = e._collection.height() / 2, a > d(n).height() / 2 && (a = d(n).height() / 2), e._collection.css("marginTop", -1 * a));
                e.background && l.background(!0, e.backgroundClassName, e.fade);
                setTimeout(function() {
                    d("div.dt-button-background").on("click.dtb-collection",
                        function() {});
                    d("body").on("click.dtb-collection", function(a) { var c = d.fn.addBack ? "addBack" : "andSelf"; if (!d(a.target).parents()[c]().filter(e._collection).length) { e._collection.fadeOut(e.fade, function() { e._collection.detach() });
                            d("div.dt-button-background").off("click.dtb-collection");
                            l.background(false, e.backgroundClassName, e.fade);
                            d("body").off("click.dtb-collection");
                            b.off("buttons-action.b-internal") } })
                }, 10);
                if (e.autoClose) b.on("buttons-action.b-internal", function() { d("div.dt-button-background").click() })
            },
            background: !0,
            collectionLayout: "",
            backgroundClassName: "dt-button-background",
            autoClose: !1,
            fade: 400
        },
        copy: function(a, b) { if (j.copyHtml5) return "copyHtml5"; if (j.copyFlash && j.copyFlash.available(a, b)) return "copyFlash" },
        csv: function(a, b) { if (j.csvHtml5 && j.csvHtml5.available(a, b)) return "csvHtml5"; if (j.csvFlash && j.csvFlash.available(a, b)) return "csvFlash" },
        excel: function(a, b) { if (j.excelHtml5 && j.excelHtml5.available(a, b)) return "excelHtml5"; if (j.excelFlash && j.excelFlash.available(a, b)) return "excelFlash" },
        pdf: function(a,
            b) { if (j.pdfHtml5 && j.pdfHtml5.available(a, b)) return "pdfHtml5"; if (j.pdfFlash && j.pdfFlash.available(a, b)) return "pdfFlash" },
        pageLength: function(a) {
            var a = a.settings()[0].aLengthMenu,
                b = d.isArray(a[0]) ? a[0] : a,
                c = d.isArray(a[0]) ? a[1] : a,
                e = function(a) { return a.i18n("buttons.pageLength", { "-1": "Show all rows", _: "Show %d rows" }, a.page.len()) };
            return {
                extend: "collection",
                text: e,
                className: "buttons-page-length",
                autoClose: !0,
                buttons: d.map(b, function(a, b) {
                    return {
                        text: c[b],
                        className: "button-page-length",
                        action: function(b,
                            c) { c.page.len(a).draw() },
                        init: function(b, c, e) { var d = this,
                                c = function() { d.active(b.page.len() === a) };
                            b.on("length.dt" + e.namespace, c);
                            c() },
                        destroy: function(a, b, c) { a.off("length.dt" + c.namespace) }
                    }
                }),
                init: function(a, b, c) { var d = this;
                    a.on("length.dt" + c.namespace, function() { d.text(e(a)) }) },
                destroy: function(a, b, c) { a.off("length.dt" + c.namespace) }
            }
        }
    });
    i.Api.register("buttons()", function(a, b) {
        b === m && (b = a, a = m);
        this.selector.buttonGroup = a;
        var c = this.iterator(!0, "table", function(c) {
            if (c._buttons) return l.buttonSelector(l.instanceSelector(a,
                c._buttons), b)
        }, !0);
        c._groupSelector = a;
        return c
    });
    i.Api.register("button()", function(a, b) { var c = this.buttons(a, b);
        1 < c.length && c.splice(1, c.length); return c });
    i.Api.registerPlural("buttons().active()", "button().active()", function(a) { return a === m ? this.map(function(a) { return a.inst.active(a.node) }) : this.each(function(b) { b.inst.active(b.node, a) }) });
    i.Api.registerPlural("buttons().action()", "button().action()", function(a) {
        return a === m ? this.map(function(a) { return a.inst.action(a.node) }) : this.each(function(b) {
            b.inst.action(b.node,
                a)
        })
    });
    i.Api.register(["buttons().enable()", "button().enable()"], function(a) { return this.each(function(b) { b.inst.enable(b.node, a) }) });
    i.Api.register(["buttons().disable()", "button().disable()"], function() { return this.each(function(a) { a.inst.disable(a.node) }) });
    i.Api.registerPlural("buttons().nodes()", "button().node()", function() { var a = d();
        d(this.each(function(b) { a = a.add(b.inst.node(b.node)) })); return a });
    i.Api.registerPlural("buttons().text()", "button().text()", function(a) {
        return a === m ? this.map(function(a) { return a.inst.text(a.node) }) :
            this.each(function(b) { b.inst.text(b.node, a) })
    });
    i.Api.registerPlural("buttons().trigger()", "button().trigger()", function() { return this.each(function(a) { a.inst.node(a.node).trigger("click") }) });
    i.Api.registerPlural("buttons().containers()", "buttons().container()", function() { var a = d(),
            b = this._groupSelector;
        this.iterator(!0, "table", function(c) { if (c._buttons)
                for (var c = l.instanceSelector(b, c._buttons), d = 0, g = c.length; d < g; d++) a = a.add(c[d].container()) }); return a });
    i.Api.register("button().add()", function(a,
        b) { var c = this.context;
        c.length && (c = l.instanceSelector(this._groupSelector, c[0]._buttons), c.length && c[0].add(b, a)); return this.button(this._groupSelector, a) });
    i.Api.register("buttons().destroy()", function() { this.pluck("inst").unique().each(function(a) { a.destroy() }); return this });
    i.Api.registerPlural("buttons().remove()", "buttons().remove()", function() { this.each(function(a) { a.inst.remove(a.node) }); return this });
    var q;
    i.Api.register("buttons.info()", function(a, b, c) {
        var e = this;
        if (!1 === a) return d("#datatables_buttons_info").fadeOut(function() { d(this).remove() }),
            clearTimeout(q), q = null, this;
        q && clearTimeout(q);
        d("#datatables_buttons_info").length && d("#datatables_buttons_info").remove();
        d('<div id="datatables_buttons_info" class="dt-button-info"/>').html(a ? "<h2>" + a + "</h2>" : "").append(d("<div/>")["string" === typeof b ? "html" : "append"](b)).css("display", "none").appendTo("body").fadeIn();
        c !== m && 0 !== c && (q = setTimeout(function() { e.buttons.info(!1) }, c));
        return this
    });
    i.Api.register("buttons.exportData()", function(a) {
        if (this.context.length) {
            for (var b = new i.Api(this.context[0]),
                    c = d.extend(!0, {}, { rows: null, columns: "", modifier: { search: "applied", order: "applied" }, orthogonal: "display", stripHtml: !0, stripNewlines: !0, decodeEntities: !0, trim: !0, format: { header: function(a) { return e(a) }, footer: function(a) { return e(a) }, body: function(a) { return e(a) } } }, a), e = function(a) { if ("string" !== typeof a) return a;
                        c.stripHtml && (a = a.replace(/<[^>]*>/g, ""));
                        c.trim && (a = a.replace(/^\s+|\s+$/g, ""));
                        c.stripNewlines && (a = a.replace(/\n/g, " "));
                        c.decodeEntities && (t.innerHTML = a, a = t.value); return a }, a = b.columns(c.columns).indexes().map(function(a) {
                        var d =
                            b.column(a).header();
                        return c.format.header(d.innerHTML, a, d)
                    }).toArray(), g = b.table().footer() ? b.columns(c.columns).indexes().map(function(a) { var d = b.column(a).footer(); return c.format.footer(d ? d.innerHTML : "", a, d) }).toArray() : null, h = b.rows(c.rows, c.modifier).indexes().toArray(), f = b.cells(h, c.columns), h = f.render(c.orthogonal).toArray(), f = f.nodes().toArray(), j = a.length, k = 0 < j ? h.length / j : 0, l = Array(k), m = 0, n = 0; n < k; n++) { for (var o = Array(j), q = 0; q < j; q++) o[q] = c.format.body(h[m], n, q, f[m]), m++;
                l[n] = o }
            return {
                header: a,
                footer: g,
                body: l
            }
        }
    });
    var t = d("<textarea/>")[0];
    d.fn.dataTable.Buttons = l;
    d.fn.DataTable.Buttons = l;
    d(o).on("init.dt plugin-init.dt", function(a, b) { if ("dt" === a.namespace) { var c = b.oInit.buttons || i.defaults.buttons;
            c && !b._buttons && (new l(b, c)).container() } });
    i.ext.feature.push({ fnInit: function(a) { var a = new i.Api(a),
                b = a.init().buttons || i.defaults.buttons; return (new l(a, b)).container() }, cFeature: "B" });
    return l
});


/*!
 Bootstrap integration for DataTables' Buttons
 Â©2016 SpryMedia Ltd - datatables.net/license
*/
(function(c) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs", "datatables.net-buttons"], function(a) { return c(a, window, document) }) : "object" === typeof exports ? module.exports = function(a, b) { a || (a = window); if (!b || !b.fn.dataTable) b = require("datatables.net-bs")(a, b).$;
        b.fn.dataTable.Buttons || require("datatables.net-buttons")(a, b); return c(b, a, a.document) } : c(jQuery, window, document) })(function(c) {
    var a = c.fn.dataTable;
    c.extend(!0, a.Buttons.defaults, {
        dom: {
            container: { className: "dt-buttons btn-group" },
            button: { className: "btn btn-default" },
            collection: { tag: "ul", className: "dt-button-collection dropdown-menu", button: { tag: "li", className: "dt-button" }, buttonLiner: { tag: "a", className: "" } }
        }
    });
    a.ext.buttons.collection.text = function(a) { return a.i18n("buttons.collection", 'Collection <span class="caret"/>') };
    return a.Buttons
});


(function(g) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net", "datatables.net-buttons"], function(d) { return g(d, window, document) }) : "object" === typeof exports ? module.exports = function(d, e) { d || (d = window); if (!e || !e.fn.dataTable) e = require("datatables.net")(d, e).$;
        e.fn.dataTable.Buttons || require("datatables.net-buttons")(d, e); return g(e, d, d.document) } : g(jQuery, window, document) })(function(g, d, e, h) {
    d = g.fn.dataTable;
    g.extend(d.ext.buttons, {
        colvis: function(a, b) {
            return {
                extend: "collection",
                text: function(a) { return a.i18n("buttons.colvis", "Column visibility") },
                className: "buttons-colvis",
                buttons: [{ extend: "columnsToggle", columns: b.columns }]
            }
        },
        columnsToggle: function(a, b) { return a.columns(b.columns).indexes().map(function(a) { return { extend: "columnToggle", columns: a } }).toArray() },
        columnToggle: function(a, b) { return { extend: "columnVisibility", columns: b.columns } },
        columnsVisibility: function(a, b) { return a.columns(b.columns).indexes().map(function(a) { return { extend: "columnVisibility", columns: a, visibility: b.visibility } }).toArray() },
        columnVisibility: {
            columns: h,
            text: function(a, b, c) { return c._columnText(a, c.columns) },
            className: "buttons-columnVisibility",
            action: function(a, b, c, f) { a = b.columns(f.columns);
                b = a.visible();
                a.visible(f.visibility !== h ? f.visibility : !(b.length && b[0])) },
            init: function(a, b, c) {
                var f = this;
                a.on("column-visibility.dt" + c.namespace, function(b, d) { d.bDestroying || f.active(a.column(c.columns).visible()) }).on("column-reorder.dt" + c.namespace, function(b, d, e) {
                    1 === a.columns(c.columns).count() && ("number" === typeof c.columns &&
                        (c.columns = e.mapping[c.columns]), b = a.column(c.columns), f.text(c._columnText(a, c.columns)), f.active(b.visible()))
                });
                this.active(a.column(c.columns).visible())
            },
            destroy: function(a, b, c) { a.off("column-visibility.dt" + c.namespace).off("column-reorder.dt" + c.namespace) },
            _columnText: function(a, b) { var c = a.column(b).index(); return a.settings()[0].aoColumns[c].sTitle.replace(/\n/g, " ").replace(/<.*?>/g, "").replace(/^\s+|\s+$/g, "") }
        },
        colvisRestore: {
            className: "buttons-colvisRestore",
            text: function(a) {
                return a.i18n("buttons.colvisRestore",
                    "Restore visibility")
            },
            init: function(a, b, c) { c._visOriginal = a.columns().indexes().map(function(b) { return a.column(b).visible() }).toArray() },
            action: function(a, b, c, d) { b.columns().every(function(a) { a = b.colReorder && b.colReorder.transpose ? b.colReorder.transpose(a, "toOriginal") : a;
                    this.visible(d._visOriginal[a]) }) }
        },
        colvisGroup: { className: "buttons-colvisGroup", action: function(a, b, c, d) { b.columns(d.show).visible(!0, !1);
                b.columns(d.hide).visible(!1, !1);
                b.columns.adjust() }, show: [], hide: [] }
    });
    return d.Buttons
});


(function(e) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net", "datatables.net-buttons"], function(f) { return e(f, window, document) }) : "object" === typeof exports ? module.exports = function(f, c) { f || (f = window); if (!c || !c.fn.dataTable) c = require("datatables.net")(f, c).$;
        c.fn.dataTable.Buttons || require("datatables.net-buttons")(f, c); return e(c, f, f.document) } : e(jQuery, window, document) })(function(e, f, c) {
    var i = e.fn.dataTable,
        h = c.createElement("a");
    i.ext.buttons.print = {
        className: "buttons-print",
        text: function(b) { return b.i18n("buttons.print", "Print") },
        action: function(b, c, i, d) {
            var a = c.buttons.exportData(d.exportOptions),
                k = function(b, a) { for (var c = "<tr>", d = 0, e = b.length; d < e; d++) c += "<" + a + ">" + b[d] + "</" + a + ">"; return c + "</tr>" },
                b = '<table class="' + c.table().node().className + '">';
            d.header && (b += "<thead>" + k(a.header, "th") + "</thead>");
            for (var b = b + "<tbody>", l = 0, m = a.body.length; l < m; l++) b += k(a.body[l], "td");
            b += "</tbody>";
            d.footer && a.footer && (b += "<tfoot>" + k(a.footer, "th") + "</tfoot>");
            var g = f.open("", ""),
                a = d.title;
            "function" === typeof a && (a = a()); - 1 !== a.indexOf("*") && (a = a.replace("*", e("title").text()));
            g.document.close();
            var j = "<title>" + a + "</title>";
            e("style, link").each(function() { var c = j,
                    b = e(this).clone()[0],
                    a; "link" === b.nodeName.toLowerCase() && (h.href = b.href, a = h.host, -1 === a.indexOf("/") && 0 !== h.pathname.indexOf("/") && (a += "/"), b.href = h.protocol + "//" + a + h.pathname + h.search);
                j = c + b.outerHTML });
            try { g.document.head.innerHTML = j } catch (n) { e(g.document.head).html(j) }
            g.document.body.innerHTML = "<h1>" + a + "</h1><div>" +
                ("function" === typeof d.message ? d.message(c, i, d) : d.message) + "</div>" + b;
            e(g.document.body).addClass("dt-print-view");
            d.customize && d.customize(g);
            setTimeout(function() { d.autoPrint && (g.print(), g.close()) }, 250)
        },
        title: "*",
        message: "",
        exportOptions: {},
        header: !0,
        footer: !1,
        autoPrint: !0,
        customize: null
    };
    return i.Buttons
});


/*!
 FixedColumns 3.2.2
 Â©2010-2016 SpryMedia Ltd - datatables.net/license
*/
(function(d) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function(q) { return d(q, window, document) }) : "object" === typeof exports ? module.exports = function(q, r) { q || (q = window); if (!r || !r.fn.dataTable) r = require("datatables.net")(q, r).$; return d(r, q, q.document) } : d(jQuery, window, document) })(function(d, q, r, t) {
    var s = d.fn.dataTable,
        u, m = function(a, b) {
            var c = this;
            if (this instanceof m) {
                if (b === t || !0 === b) b = {};
                var e = d.fn.dataTable.camelToHungarian;
                e && (e(m.defaults, m.defaults, !0), e(m.defaults,
                    b));
                e = (new d.fn.dataTable.Api(a)).settings()[0];
                this.s = { dt: e, iTableColumns: e.aoColumns.length, aiOuterWidths: [], aiInnerWidths: [], rtl: "rtl" === d(e.nTable).css("direction") };
                this.dom = { scroller: null, header: null, body: null, footer: null, grid: { wrapper: null, dt: null, left: { wrapper: null, head: null, body: null, foot: null }, right: { wrapper: null, head: null, body: null, foot: null } }, clone: { left: { header: null, body: null, footer: null }, right: { header: null, body: null, footer: null } } };
                if (e._oFixedColumns) throw "FixedColumns already initialised on this table";
                e._oFixedColumns = this;
                e._bInitComplete ? this._fnConstruct(b) : e.oApi._fnCallbackReg(e, "aoInitComplete", function() { c._fnConstruct(b) }, "FixedColumns")
            } else alert("FixedColumns warning: FixedColumns must be initialised with the 'new' keyword.")
        };
    d.extend(m.prototype, {
        fnUpdate: function() { this._fnDraw(!0) },
        fnRedrawLayout: function() { this._fnColCalc();
            this._fnGridLayout();
            this.fnUpdate() },
        fnRecalculateHeight: function(a) { delete a._DTTC_iHeight;
            a.style.height = "auto" },
        fnSetRowHeight: function(a, b) {
            a.style.height =
                b + "px"
        },
        fnGetPosition: function(a) { var b = this.s.dt.oInstance; if (d(a).parents(".DTFC_Cloned").length) { if ("tr" === a.nodeName.toLowerCase()) return a = d(a).index(), b.fnGetPosition(d("tr", this.s.dt.nTBody)[a]); var c = d(a).index(),
                    a = d(a.parentNode).index(); return [b.fnGetPosition(d("tr", this.s.dt.nTBody)[a]), c, b.oApi._fnVisibleToColumnIndex(this.s.dt, c)] } return b.fnGetPosition(a) },
        _fnConstruct: function(a) {
            var b = this;
            if ("function" != typeof this.s.dt.oInstance.fnVersionCheck || !0 !== this.s.dt.oInstance.fnVersionCheck("1.8.0")) alert("FixedColumns " +
                m.VERSION + " required DataTables 1.8.0 or later. Please upgrade your DataTables installation");
            else if ("" === this.s.dt.oScroll.sX) this.s.dt.oInstance.oApi._fnLog(this.s.dt, 1, "FixedColumns is not needed (no x-scrolling in DataTables enabled), so no action will be taken. Use 'FixedHeader' for column fixing when scrolling is not enabled");
            else {
                this.s = d.extend(!0, this.s, m.defaults, a);
                a = this.s.dt.oClasses;
                this.dom.grid.dt = d(this.s.dt.nTable).parents("div." + a.sScrollWrapper)[0];
                this.dom.scroller = d("div." +
                    a.sScrollBody, this.dom.grid.dt)[0];
                this._fnColCalc();
                this._fnGridSetup();
                var c, e = !1;
                d(this.s.dt.nTableWrapper).on("mousedown.DTFC", function() { e = !0;
                    d(r).one("mouseup", function() { e = !1 }) });
                d(this.dom.scroller).on("mouseover.DTFC touchstart.DTFC", function() { e || (c = "main") }).on("scroll.DTFC", function(a) {!c && a.originalEvent && (c = "main"); if ("main" === c && (0 < b.s.iLeftColumns && (b.dom.grid.left.liner.scrollTop = b.dom.scroller.scrollTop), 0 < b.s.iRightColumns)) b.dom.grid.right.liner.scrollTop = b.dom.scroller.scrollTop });
                var f = "onwheel" in r.createElement("div") ? "wheel.DTFC" : "mousewheel.DTFC";
                if (0 < b.s.iLeftColumns) d(b.dom.grid.left.liner).on("mouseover.DTFC touchstart.DTFC", function() { e || (c = "left") }).on("scroll.DTFC", function(a) {!c && a.originalEvent && (c = "left"); "left" === c && (b.dom.scroller.scrollTop = b.dom.grid.left.liner.scrollTop, 0 < b.s.iRightColumns && (b.dom.grid.right.liner.scrollTop = b.dom.grid.left.liner.scrollTop)) }).on(f, function(a) { b.dom.scroller.scrollLeft -= "wheel" === a.type ? -a.originalEvent.deltaX : a.originalEvent.wheelDeltaX });
                if (0 < b.s.iRightColumns) d(b.dom.grid.right.liner).on("mouseover.DTFC touchstart.DTFC", function() { e || (c = "right") }).on("scroll.DTFC", function(a) {!c && a.originalEvent && (c = "right"); "right" === c && (b.dom.scroller.scrollTop = b.dom.grid.right.liner.scrollTop, 0 < b.s.iLeftColumns && (b.dom.grid.left.liner.scrollTop = b.dom.grid.right.liner.scrollTop)) }).on(f, function(a) { b.dom.scroller.scrollLeft -= "wheel" === a.type ? -a.originalEvent.deltaX : a.originalEvent.wheelDeltaX });
                d(q).on("resize.DTFC", function() { b._fnGridLayout.call(b) });
                var g = !0,
                    h = d(this.s.dt.nTable);
                h.on("draw.dt.DTFC", function() { b._fnColCalc();
                    b._fnDraw.call(b, g);
                    g = !1 }).on("column-sizing.dt.DTFC", function() { b._fnColCalc();
                    b._fnGridLayout(b) }).on("column-visibility.dt.DTFC", function(a, c, d, e, f) { if (f === t || f) b._fnColCalc(), b._fnGridLayout(b), b._fnDraw(!0) }).on("select.dt.DTFC deselect.dt.DTFC", function(a) { "dt" === a.namespace && b._fnDraw(!1) }).on("destroy.dt.DTFC", function() {
                    h.off(".DTFC");
                    d(b.dom.scroller).off(".DTFC");
                    d(q).off(".DTFC");
                    d(b.s.dt.nTableWrapper).off(".DTFC");
                    d(b.dom.grid.left.liner).off(".DTFC " + f);
                    d(b.dom.grid.left.wrapper).remove();
                    d(b.dom.grid.right.liner).off(".DTFC " + f);
                    d(b.dom.grid.right.wrapper).remove()
                });
                this._fnGridLayout();
                this.s.dt.oInstance.fnDraw(!1)
            }
        },
        _fnColCalc: function() {
            var a = this,
                b = 0,
                c = 0;
            this.s.aiInnerWidths = [];
            this.s.aiOuterWidths = [];
            d.each(this.s.dt.aoColumns, function(e, f) {
                var g = d(f.nTh),
                    h;
                if (g.filter(":visible").length) {
                    var i = g.outerWidth();
                    0 === a.s.aiOuterWidths.length && (h = d(a.s.dt.nTable).css("border-left-width"), i += "string" ===
                        typeof h ? 1 : parseInt(h, 10));
                    a.s.aiOuterWidths.length === a.s.dt.aoColumns.length - 1 && (h = d(a.s.dt.nTable).css("border-right-width"), i += "string" === typeof h ? 1 : parseInt(h, 10));
                    a.s.aiOuterWidths.push(i);
                    a.s.aiInnerWidths.push(g.width());
                    e < a.s.iLeftColumns && (b += i);
                    a.s.iTableColumns - a.s.iRightColumns <= e && (c += i)
                } else a.s.aiInnerWidths.push(0), a.s.aiOuterWidths.push(0)
            });
            this.s.iLeftWidth = b;
            this.s.iRightWidth = c
        },
        _fnGridSetup: function() {
            var a = this._fnDTOverflow(),
                b;
            this.dom.body = this.s.dt.nTable;
            this.dom.header =
                this.s.dt.nTHead.parentNode;
            this.dom.header.parentNode.parentNode.style.position = "relative";
            var c = d('<div class="DTFC_ScrollWrapper" style="position:relative; clear:both;"><div class="DTFC_LeftWrapper" style="position:absolute; top:0; left:0;"><div class="DTFC_LeftHeadWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div><div class="DTFC_LeftBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;"><div class="DTFC_LeftBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div></div><div class="DTFC_LeftFootWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div></div><div class="DTFC_RightWrapper" style="position:absolute; top:0; right:0;"><div class="DTFC_RightHeadWrapper" style="position:relative; top:0; left:0;"><div class="DTFC_RightHeadBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div></div><div class="DTFC_RightBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;"><div class="DTFC_RightBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div></div><div class="DTFC_RightFootWrapper" style="position:relative; top:0; left:0;"><div class="DTFC_RightFootBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div></div></div></div>')[0],
                e = c.childNodes[0],
                f = c.childNodes[1];
            this.dom.grid.dt.parentNode.insertBefore(c, this.dom.grid.dt);
            c.appendChild(this.dom.grid.dt);
            this.dom.grid.wrapper = c;
            0 < this.s.iLeftColumns && (this.dom.grid.left.wrapper = e, this.dom.grid.left.head = e.childNodes[0], this.dom.grid.left.body = e.childNodes[1], this.dom.grid.left.liner = d("div.DTFC_LeftBodyLiner", c)[0], c.appendChild(e));
            0 < this.s.iRightColumns && (this.dom.grid.right.wrapper = f, this.dom.grid.right.head = f.childNodes[0], this.dom.grid.right.body = f.childNodes[1], this.dom.grid.right.liner =
                d("div.DTFC_RightBodyLiner", c)[0], f.style.right = a.bar + "px", b = d("div.DTFC_RightHeadBlocker", c)[0], b.style.width = a.bar + "px", b.style.right = -a.bar + "px", this.dom.grid.right.headBlock = b, b = d("div.DTFC_RightFootBlocker", c)[0], b.style.width = a.bar + "px", b.style.right = -a.bar + "px", this.dom.grid.right.footBlock = b, c.appendChild(f));
            if (this.s.dt.nTFoot && (this.dom.footer = this.s.dt.nTFoot.parentNode, 0 < this.s.iLeftColumns && (this.dom.grid.left.foot = e.childNodes[2]), 0 < this.s.iRightColumns)) this.dom.grid.right.foot = f.childNodes[2];
            this.s.rtl && d("div.DTFC_RightHeadBlocker", c).css({ left: -a.bar + "px", right: "" })
        },
        _fnGridLayout: function() {
            var a = this,
                b = this.dom.grid;
            d(b.wrapper).width();
            var c = d(this.s.dt.nTable.parentNode).outerHeight(),
                e = d(this.s.dt.nTable.parentNode.parentNode).outerHeight(),
                f = this._fnDTOverflow(),
                g = this.s.iLeftWidth,
                h = this.s.iRightWidth,
                i = "rtl" === d(this.dom.body).css("direction"),
                j = function(b, c) {
                    f.bar ? a._firefoxScrollError() ? 34 < d(b).height() && (b.style.width = c + f.bar + "px") : b.style.width = c + f.bar + "px" : (b.style.width =
                        c + 20 + "px", b.style.paddingRight = "20px", b.style.boxSizing = "border-box")
                };
            f.x && (c -= f.bar);
            b.wrapper.style.height = e + "px";
            0 < this.s.iLeftColumns && (e = b.left.wrapper, e.style.width = g + "px", e.style.height = "1px", i ? (e.style.left = "", e.style.right = 0) : (e.style.left = 0, e.style.right = ""), b.left.body.style.height = c + "px", b.left.foot && (b.left.foot.style.top = (f.x ? f.bar : 0) + "px"), j(b.left.liner, g), b.left.liner.style.height = c + "px");
            0 < this.s.iRightColumns && (e = b.right.wrapper, e.style.width = h + "px", e.style.height = "1px", this.s.rtl ?
                (e.style.left = f.y ? f.bar + "px" : 0, e.style.right = "") : (e.style.left = "", e.style.right = f.y ? f.bar + "px" : 0), b.right.body.style.height = c + "px", b.right.foot && (b.right.foot.style.top = (f.x ? f.bar : 0) + "px"), j(b.right.liner, h), b.right.liner.style.height = c + "px", b.right.headBlock.style.display = f.y ? "block" : "none", b.right.footBlock.style.display = f.y ? "block" : "none")
        },
        _fnDTOverflow: function() {
            var a = this.s.dt.nTable,
                b = a.parentNode,
                c = { x: !1, y: !1, bar: this.s.dt.oScroll.iBarWidth };
            a.offsetWidth > b.clientWidth && (c.x = !0);
            a.offsetHeight >
                b.clientHeight && (c.y = !0);
            return c
        },
        _fnDraw: function(a) { this._fnGridLayout();
            this._fnCloneLeft(a);
            this._fnCloneRight(a);
            null !== this.s.fnDrawCallback && this.s.fnDrawCallback.call(this, this.dom.clone.left, this.dom.clone.right);
            d(this).trigger("draw.dtfc", { leftClone: this.dom.clone.left, rightClone: this.dom.clone.right }) },
        _fnCloneRight: function(a) {
            if (!(0 >= this.s.iRightColumns)) {
                var b, c = [];
                for (b = this.s.iTableColumns - this.s.iRightColumns; b < this.s.iTableColumns; b++) this.s.dt.aoColumns[b].bVisible && c.push(b);
                this._fnClone(this.dom.clone.right, this.dom.grid.right, c, a)
            }
        },
        _fnCloneLeft: function(a) { if (!(0 >= this.s.iLeftColumns)) { var b, c = []; for (b = 0; b < this.s.iLeftColumns; b++) this.s.dt.aoColumns[b].bVisible && c.push(b);
                this._fnClone(this.dom.clone.left, this.dom.grid.left, c, a) } },
        _fnCopyLayout: function(a, b, c) {
            for (var e = [], f = [], g = [], h = 0, i = a.length; h < i; h++) {
                var j = [];
                j.nTr = d(a[h].nTr).clone(c, !1)[0];
                for (var l = 0, o = this.s.iTableColumns; l < o; l++)
                    if (-1 !== d.inArray(l, b)) {
                        var p = d.inArray(a[h][l].cell, g); - 1 === p ? (p = d(a[h][l].cell).clone(c, !1)[0], f.push(p), g.push(a[h][l].cell), j.push({ cell: p, unique: a[h][l].unique })) : j.push({ cell: f[p], unique: a[h][l].unique })
                    }
                e.push(j)
            }
            return e
        },
        _fnClone: function(a, b, c, e) {
            var f = this,
                g, h, i, j, l, o, p, n, m, k = this.s.dt;
            if (e) {
                d(a.header).remove();
                a.header = d(this.dom.header).clone(!0, !1)[0];
                a.header.className += " DTFC_Cloned";
                a.header.style.width = "100%";
                b.head.appendChild(a.header);
                n = this._fnCopyLayout(k.aoHeader, c, !0);
                j = d(">thead", a.header);
                j.empty();
                g = 0;
                for (h = n.length; g < h; g++) j[0].appendChild(n[g].nTr);
                k.oApi._fnDrawHead(k,
                    n, !0)
            } else { n = this._fnCopyLayout(k.aoHeader, c, !1);
                m = [];
                k.oApi._fnDetectHeader(m, d(">thead", a.header)[0]);
                g = 0; for (h = n.length; g < h; g++) { i = 0; for (j = n[g].length; i < j; i++) m[g][i].cell.className = n[g][i].cell.className, d("span.DataTables_sort_icon", m[g][i].cell).each(function() { this.className = d("span.DataTables_sort_icon", n[g][i].cell)[0].className }) } }
            this._fnEqualiseHeights("thead", this.dom.header, a.header);
            "auto" == this.s.sHeightMatch && d(">tbody>tr", f.dom.body).css("height", "auto");
            null !== a.body && (d(a.body).remove(),
                a.body = null);
            a.body = d(this.dom.body).clone(!0)[0];
            a.body.className += " DTFC_Cloned";
            a.body.style.paddingBottom = k.oScroll.iBarWidth + "px";
            a.body.style.marginBottom = 2 * k.oScroll.iBarWidth + "px";
            null !== a.body.getAttribute("id") && a.body.removeAttribute("id");
            d(">thead>tr", a.body).empty();
            d(">tfoot", a.body).remove();
            var q = d("tbody", a.body)[0];
            d(q).empty();
            if (0 < k.aiDisplay.length) {
                h = d(">thead>tr", a.body)[0];
                for (p = 0; p < c.length; p++) l = c[p], o = d(k.aoColumns[l].nTh).clone(!0)[0], o.innerHTML = "", j = o.style, j.paddingTop =
                    "0", j.paddingBottom = "0", j.borderTopWidth = "0", j.borderBottomWidth = "0", j.height = 0, j.width = f.s.aiInnerWidths[l] + "px", h.appendChild(o);
                d(">tbody>tr", f.dom.body).each(function(a) {
                    var a = f.s.dt.oFeatures.bServerSide === false ? f.s.dt.aiDisplay[f.s.dt._iDisplayStart + a] : a,
                        b = f.s.dt.aoData[a].anCells || d(this).children("td, th"),
                        e = this.cloneNode(false);
                    e.removeAttribute("id");
                    e.setAttribute("data-dt-row", a);
                    for (p = 0; p < c.length; p++) {
                        l = c[p];
                        if (b.length > 0) {
                            o = d(b[l]).clone(true, true)[0];
                            o.setAttribute("data-dt-row",
                                a);
                            o.setAttribute("data-dt-column", p);
                            e.appendChild(o)
                        }
                    }
                    q.appendChild(e)
                })
            } else d(">tbody>tr", f.dom.body).each(function() { o = this.cloneNode(true);
                o.className = o.className + " DTFC_NoData";
                d("td", o).html("");
                q.appendChild(o) });
            a.body.style.width = "100%";
            a.body.style.margin = "0";
            a.body.style.padding = "0";
            k.oScroller !== t && (h = k.oScroller.dom.force, b.forcer ? b.forcer.style.height = h.style.height : (b.forcer = h.cloneNode(!0), b.liner.appendChild(b.forcer)));
            b.liner.appendChild(a.body);
            this._fnEqualiseHeights("tbody",
                f.dom.body, a.body);
            if (null !== k.nTFoot) {
                if (e) { null !== a.footer && a.footer.parentNode.removeChild(a.footer);
                    a.footer = d(this.dom.footer).clone(!0, !0)[0];
                    a.footer.className += " DTFC_Cloned";
                    a.footer.style.width = "100%";
                    b.foot.appendChild(a.footer);
                    n = this._fnCopyLayout(k.aoFooter, c, !0);
                    b = d(">tfoot", a.footer);
                    b.empty();
                    g = 0; for (h = n.length; g < h; g++) b[0].appendChild(n[g].nTr);
                    k.oApi._fnDrawHead(k, n, !0) } else {
                    n = this._fnCopyLayout(k.aoFooter, c, !1);
                    b = [];
                    k.oApi._fnDetectHeader(b, d(">tfoot", a.footer)[0]);
                    g = 0;
                    for (h = n.length; g <
                        h; g++) { i = 0; for (j = n[g].length; i < j; i++) b[g][i].cell.className = n[g][i].cell.className }
                }
                this._fnEqualiseHeights("tfoot", this.dom.footer, a.footer)
            }
            b = k.oApi._fnGetUniqueThs(k, d(">thead", a.header)[0]);
            d(b).each(function(a) { l = c[a];
                this.style.width = f.s.aiInnerWidths[l] + "px" });
            null !== f.s.dt.nTFoot && (b = k.oApi._fnGetUniqueThs(k, d(">tfoot", a.footer)[0]), d(b).each(function(a) { l = c[a];
                this.style.width = f.s.aiInnerWidths[l] + "px" }))
        },
        _fnGetTrNodes: function(a) {
            for (var b = [], c = 0, d = a.childNodes.length; c < d; c++) "TR" == a.childNodes[c].nodeName.toUpperCase() &&
                b.push(a.childNodes[c]);
            return b
        },
        _fnEqualiseHeights: function(a, b, c) {
            if (!("none" == this.s.sHeightMatch && "thead" !== a && "tfoot" !== a)) {
                var e, f, g = b.getElementsByTagName(a)[0],
                    c = c.getElementsByTagName(a)[0],
                    a = d(">" + a + ">tr:eq(0)", b).children(":first");
                a.outerHeight();
                a.height();
                for (var g = this._fnGetTrNodes(g), b = this._fnGetTrNodes(c), h = [], c = 0, a = b.length; c < a; c++) e = g[c].offsetHeight, f = b[c].offsetHeight, e = f > e ? f : e, "semiauto" == this.s.sHeightMatch && (g[c]._DTTC_iHeight = e), h.push(e);
                c = 0;
                for (a = b.length; c < a; c++) b[c].style.height =
                    h[c] + "px", g[c].style.height = h[c] + "px"
            }
        },
        _firefoxScrollError: function() { if (u === t) { var a = d("<div/>").css({ position: "absolute", top: 0, left: 0, height: 10, width: 50, overflow: "scroll" }).appendTo("body");
                u = a[0].clientWidth === a[0].offsetWidth && 0 !== this._fnDTOverflow().bar;
                a.remove() } return u }
    });
    m.defaults = { iLeftColumns: 1, iRightColumns: 0, fnDrawCallback: null, sHeightMatch: "semiauto" };
    m.version = "3.2.2";
    s.Api.register("fixedColumns()", function() { return this });
    s.Api.register("fixedColumns().update()", function() {
        return this.iterator("table",
            function(a) { a._oFixedColumns && a._oFixedColumns.fnUpdate() })
    });
    s.Api.register("fixedColumns().relayout()", function() { return this.iterator("table", function(a) { a._oFixedColumns && a._oFixedColumns.fnRedrawLayout() }) });
    s.Api.register("rows().recalcHeight()", function() { return this.iterator("row", function(a, b) { a._oFixedColumns && a._oFixedColumns.fnRecalculateHeight(this.row(b).node()) }) });
    s.Api.register("fixedColumns().rowIndex()", function(a) {
        a = d(a);
        return a.parents(".DTFC_Cloned").length ? this.rows({ page: "current" }).indexes()[a.index()] :
            this.row(a).index()
    });
    s.Api.register("fixedColumns().cellIndex()", function(a) { a = d(a); if (a.parents(".DTFC_Cloned").length) { var b = a.parent().index(),
                b = this.rows({ page: "current" }).indexes()[b],
                a = a.parents(".DTFC_LeftWrapper").length ? a.index() : this.columns().flatten().length - this.context[0]._oFixedColumns.s.iRightColumns + a.index(); return { row: b, column: this.column.index("toData", a), columnVisible: a } } return this.cell(a).index() });
    d(r).on("init.dt.fixedColumns", function(a, b) {
        if ("dt" === a.namespace) {
            var c = b.oInit.fixedColumns,
                e = s.defaults.fixedColumns;
            if (c || e) e = d.extend({}, c, e), !1 !== c && new m(b, e)
        }
    });
    d.fn.dataTable.FixedColumns = m;
    return d.fn.DataTable.FixedColumns = m
});


/*!
 FixedHeader 3.1.2
 Â©2009-2016 SpryMedia Ltd - datatables.net/license
*/
(function(d) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function(g) { return d(g, window, document) }) : "object" === typeof exports ? module.exports = function(g, h) { g || (g = window); if (!h || !h.fn.dataTable) h = require("datatables.net")(g, h).$; return d(h, g, g.document) } : d(jQuery, window, document) })(function(d, g, h, k) {
    var j = d.fn.dataTable,
        l = 0,
        i = function(b, a) {
            if (!(this instanceof i)) throw "FixedHeader must be initialised with the 'new' keyword.";
            !0 === a && (a = {});
            b = new j.Api(b);
            this.c = d.extend(!0, {}, i.defaults, a);
            this.s = { dt: b, position: { theadTop: 0, tbodyTop: 0, tfootTop: 0, tfootBottom: 0, width: 0, left: 0, tfootHeight: 0, theadHeight: 0, windowHeight: d(g).height(), visible: !0 }, headerMode: null, footerMode: null, autoWidth: b.settings()[0].oFeatures.bAutoWidth, namespace: ".dtfc" + l++, scrollLeft: { header: -1, footer: -1 }, enable: !0 };
            this.dom = {
                floatingHeader: null,
                thead: d(b.table().header()),
                tbody: d(b.table().body()),
                tfoot: d(b.table().footer()),
                header: { host: null, floating: null, placeholder: null },
                footer: {
                    host: null,
                    floating: null,
                    placeholder: null
                }
            };
            this.dom.header.host = this.dom.thead.parent();
            this.dom.footer.host = this.dom.tfoot.parent();
            var e = b.settings()[0];
            if (e._fixedHeader) throw "FixedHeader already initialised on table " + e.nTable.id;
            e._fixedHeader = this;
            this._constructor()
        };
    d.extend(i.prototype, {
        enable: function(b) { this.s.enable = b;
            this.c.header && this._modeChange("in-place", "header", !0);
            this.c.footer && this.dom.tfoot.length && this._modeChange("in-place", "footer", !0);
            this.update() },
        headerOffset: function(b) {
            b !== k && (this.c.headerOffset =
                b, this.update());
            return this.c.headerOffset
        },
        footerOffset: function(b) { b !== k && (this.c.footerOffset = b, this.update()); return this.c.footerOffset },
        update: function() { this._positions();
            this._scroll(!0) },
        _constructor: function() {
            var b = this,
                a = this.s.dt;
            d(g).on("scroll" + this.s.namespace, function() { b._scroll() }).on("resize" + this.s.namespace, function() { b.s.position.windowHeight = d(g).height();
                b.update() });
            var e = d(".fh-fixedHeader");
            !this.c.headerOffset && e.length && (this.c.headerOffset = e.outerHeight());
            e = d(".fh-fixedFooter");
            !this.c.footerOffset && e.length && (this.c.footerOffset = e.outerHeight());
            a.on("column-reorder.dt.dtfc column-visibility.dt.dtfc draw.dt.dtfc column-sizing.dt.dtfc", function() { b.update() });
            a.on("destroy.dtfc", function() { a.off(".dtfc");
                d(g).off(b.s.namespace) });
            this._positions();
            this._scroll()
        },
        _clone: function(b, a) {
            var e = this.s.dt,
                c = this.dom[b],
                f = "header" === b ? this.dom.thead : this.dom.tfoot;
            !a && c.floating ? c.floating.removeClass("fixedHeader-floating fixedHeader-locked") : (c.floating && (c.placeholder.remove(),
                this._unsize(b), c.floating.children().detach(), c.floating.remove()), c.floating = d(e.table().node().cloneNode(!1)).css("table-layout", "fixed").removeAttr("id").append(f).appendTo("body"), c.placeholder = f.clone(!1), c.host.prepend(c.placeholder), this._matchWidths(c.placeholder, c.floating))
        },
        _matchWidths: function(b, a) {
            var e = function(a) { return d(a, b).map(function() { return d(this).width() }).toArray() },
                c = function(b, c) { d(b, a).each(function(a) { d(this).css({ width: c[a], minWidth: c[a] }) }) },
                f = e("th"),
                e = e("td");
            c("th",
                f);
            c("td", e)
        },
        _unsize: function(b) { var a = this.dom[b].floating;
            a && ("footer" === b || "header" === b && !this.s.autoWidth) ? d("th, td", a).css({ width: "", minWidth: "" }) : a && "header" === b && d("th, td", a).css("min-width", "") },
        _horizontal: function(b, a) { var e = this.dom[b],
                c = this.s.position,
                d = this.s.scrollLeft;
            e.floating && d[b] !== a && (e.floating.css("left", c.left - a), d[b] = a) },
        _modeChange: function(b, a, e) {
            var c = this.dom[a],
                f = this.s.position,
                g = d.contains(this.dom["footer" === a ? "tfoot" : "thead"][0], h.activeElement) ? h.activeElement :
                null;
            if ("in-place" === b) { if (c.placeholder && (c.placeholder.remove(), c.placeholder = null), this._unsize(a), "header" === a ? c.host.prepend(this.dom.thead) : c.host.append(this.dom.tfoot), c.floating) c.floating.remove(), c.floating = null } else "in" === b ? (this._clone(a, e), c.floating.addClass("fixedHeader-floating").css("header" === a ? "top" : "bottom", this.c[a + "Offset"]).css("left", f.left + "px").css("width", f.width + "px"), "footer" === a && c.floating.css("top", "")) : "below" === b ? (this._clone(a, e), c.floating.addClass("fixedHeader-locked").css("top",
                f.tfootTop - f.theadHeight).css("left", f.left + "px").css("width", f.width + "px")) : "above" === b && (this._clone(a, e), c.floating.addClass("fixedHeader-locked").css("top", f.tbodyTop).css("left", f.left + "px").css("width", f.width + "px"));
            g && g !== h.activeElement && g.focus();
            this.s.scrollLeft.header = -1;
            this.s.scrollLeft.footer = -1;
            this.s[a + "Mode"] = b
        },
        _positions: function() {
            var b = this.s.dt.table(),
                a = this.s.position,
                e = this.dom,
                b = d(b.node()),
                c = b.children("thead"),
                f = b.children("tfoot"),
                e = e.tbody;
            a.visible = b.is(":visible");
            a.width = b.outerWidth();
            a.left = b.offset().left;
            a.theadTop = c.offset().top;
            a.tbodyTop = e.offset().top;
            a.theadHeight = a.tbodyTop - a.theadTop;
            f.length ? (a.tfootTop = f.offset().top, a.tfootBottom = a.tfootTop + f.outerHeight(), a.tfootHeight = a.tfootBottom - a.tfootTop) : (a.tfootTop = a.tbodyTop + e.outerHeight(), a.tfootBottom = a.tfootTop, a.tfootHeight = a.tfootTop)
        },
        _scroll: function(b) {
            var a = d(h).scrollTop(),
                e = d(h).scrollLeft(),
                c = this.s.position,
                f;
            if (this.s.enable && (this.c.header && (f = !c.visible || a <= c.theadTop - this.c.headerOffset ?
                    "in-place" : a <= c.tfootTop - c.theadHeight - this.c.headerOffset ? "in" : "below", (b || f !== this.s.headerMode) && this._modeChange(f, "header", b), this._horizontal("header", e)), this.c.footer && this.dom.tfoot.length)) a = !c.visible || a + c.windowHeight >= c.tfootBottom + this.c.footerOffset ? "in-place" : c.windowHeight + a > c.tbodyTop + c.tfootHeight + this.c.footerOffset ? "in" : "above", (b || a !== this.s.footerMode) && this._modeChange(a, "footer", b), this._horizontal("footer", e)
        }
    });
    i.version = "3.1.2";
    i.defaults = {
        header: !0,
        footer: !1,
        headerOffset: 0,
        footerOffset: 0
    };
    d.fn.dataTable.FixedHeader = i;
    d.fn.DataTable.FixedHeader = i;
    d(h).on("init.dt.dtfh", function(b, a) { if ("dt" === b.namespace) { var e = a.oInit.fixedHeader,
                c = j.defaults.fixedHeader; if ((e || c) && !a._fixedHeader) c = d.extend({}, c, e), !1 !== e && new i(a, c) } });
    j.Api.register("fixedHeader()", function() {});
    j.Api.register("fixedHeader.adjust()", function() { return this.iterator("table", function(b) {
            (b = b._fixedHeader) && b.update() }) });
    j.Api.register("fixedHeader.enable()", function(b) {
        return this.iterator("table",
            function(a) {
                (a = a._fixedHeader) && a.enable(b !== k ? b : !0) })
    });
    j.Api.register("fixedHeader.disable()", function() { return this.iterator("table", function(b) {
            (b = b._fixedHeader) && b.enable(!1) }) });
    d.each(["header", "footer"], function(b, a) { j.Api.register("fixedHeader." + a + "Offset()", function(b) { var c = this.context; return b === k ? c.length && c[0]._fixedHeader ? c[0]._fixedHeader[a + "Offset"]() : k : this.iterator("table", function(c) { if (c = c._fixedHeader) c[a + "Offset"](b) }) }) });
    return i
});


/*!
 KeyTable 2.2.0
 Â©2009-2016 SpryMedia Ltd - datatables.net/license
*/
(function(e) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function(m) { return e(m, window, document) }) : "object" === typeof exports ? module.exports = function(m, k) { m || (m = window); if (!k || !k.fn.dataTable) k = require("datatables.net")(m, k).$; return e(k, m, m.document) } : e(jQuery, window, document) })(function(e, m, k, o) {
    var l = e.fn.dataTable,
        n = function(a, b) {
            if (!l.versionCheck || !l.versionCheck("1.10.8")) throw "KeyTable requires DataTables 1.10.8 or newer";
            this.c = e.extend(!0, {}, l.defaults.keyTable,
                n.defaults, b);
            this.s = { dt: new l.Api(a), enable: !0, focusDraw: !1, waitingForDraw: !1, lastFocus: null };
            this.dom = {};
            var c = this.s.dt.settings()[0],
                d = c.keytable;
            if (d) return d;
            c.keytable = this;
            this._constructor()
        };
    e.extend(n.prototype, {
        blur: function() { this._blur() },
        enable: function(a) { this.s.enable = a },
        focus: function(a, b) { this._focus(this.s.dt.cell(a, b)) },
        focused: function(a) { if (!this.s.lastFocus) return !1; var b = this.s.lastFocus.cell.index(); return a.row === b.row && a.column === b.column },
        _constructor: function() {
            this._tabInput();
            var a = this,
                b = this.s.dt,
                c = e(b.table().node());
            "static" === c.css("position") && c.css("position", "relative");
            e(b.table().body()).on("click.keyTable", "th, td", function(c) { if (!1 !== a.s.enable) { var d = b.cell(this);
                    d.any() && a._focus(d, null, !1, c) } });
            e(k).on("keydown.keyTable", function(b) { a._key(b) });
            if (this.c.blurable) e(k).on("mousedown.keyTable", function(c) {
                e(c.target).parents(".dataTables_filter").length && a._blur();
                e(c.target).parents().filter(b.table().container()).length || e(c.target).parents("div.DTE").length ||
                    e(c.target).parents().filter(".DTFC_Cloned").length || a._blur()
            });
            if (this.c.editor) b.on("key.keyTable", function(b, c, d, e, j) { a._editor(d, j) });
            if (b.settings()[0].oFeatures.bStateSave) b.on("stateSaveParams.keyTable", function(b, c, d) { d.keyTable = a.s.lastFocus ? a.s.lastFocus.cell.index() : null });
            b.on("draw.keyTable", function(c) { if (!a.s.focusDraw && a.s.lastFocus) { var d = a.s.lastFocus.relative,
                        e = b.page.info(),
                        g = d.row + e.start;
                    g >= e.recordsDisplay && (g = e.recordsDisplay - 1);
                    a._focus(g, d.column, !0, c) } });
            b.on("destroy.keyTable",
                function() { b.off(".keyTable");
                    e(b.table().body()).off("click.keyTable", "th, td");
                    e(k.body).off("keydown.keyTable").off("click.keyTable") });
            var d = b.state.loaded();
            if (d && d.keyTable) b.one("init", function() { var a = b.cell(d.keyTable);
                a.any() && a.focus() });
            else this.c.focus && b.cell(this.c.focus).focus()
        },
        _blur: function() {
            if (this.s.enable && this.s.lastFocus) {
                var a = this.s.lastFocus.cell;
                e(a.node()).removeClass(this.c.className);
                this.s.lastFocus = null;
                this._updateFixedColumns(a.index().column);
                this._emitEvent("key-blur", [this.s.dt, a])
            }
        },
        _columns: function() { var a = this.s.dt,
                b = a.columns(this.c.columns).indexes(),
                c = [];
            a.columns(":visible").every(function(a) {-1 !== b.indexOf(a) && c.push(a) }); return c },
        _editor: function(a, b) {
            var c = this.s.dt,
                d = this.c.editor;
            16 !== a && (b.stopPropagation(), 13 === a && b.preventDefault(), d.inline(this.s.lastFocus.cell.index()), e("div.DTE input, div.DTE textarea").select(), c.keys.enable(this.c.editorKeys), c.one("key-blur.editor", function() { d.displayed() && d.submit() }), d.one("close", function() {
                c.keys.enable(!0);
                c.off("key-blur.editor")
            }))
        },
        _emitEvent: function(a, b) { this.s.dt.iterator("table", function(c) { e(c.nTable).triggerHandler(a, b) }) },
        _focus: function(a, b, c, d) {
            var i = this,
                h = this.s.dt,
                f = h.page.info(),
                g = this.s.lastFocus;
            d || (d = null);
            if (this.s.enable) {
                if ("number" !== typeof a) { var j = a.index(),
                        b = j.column,
                        a = h.rows({ filter: "applied", order: "applied" }).indexes().indexOf(j.row);
                    f.serverSide && (a += f.start) }
                if (-1 !== f.length && (a < f.start || a >= f.start + f.length)) this.s.focusDraw = !0, this.s.waitingForDraw = !0, h.one("draw", function() {
                    i.s.focusDraw = !1;
                    i.s.waitingForDraw = !1;
                    i._focus(a, b)
                }).page(Math.floor(a / f.length)).draw(!1);
                else if (-1 !== e.inArray(b, this._columns())) {
                    f.serverSide && (a -= f.start);
                    f = h.cell(":eq(" + a + ")", b, { search: "applied" });
                    if (g) { if (g.node === f.node()) return;
                        this._blur() }
                    g = e(f.node());
                    g.addClass(this.c.className);
                    this._updateFixedColumns(b);
                    if (c === o || !0 === c) this._scroll(e(m), e(k.body), g, "offset"), c = h.table().body().parentNode, c !== h.table().header().parentNode && (c = e(c.parentNode), this._scroll(c, c, g, "position"));
                    this.s.lastFocus = { cell: f, node: f.node(), relative: { row: h.rows({ page: "current" }).indexes().indexOf(f.index().row), column: f.index().column } };
                    this._emitEvent("key-focus", [this.s.dt, f, d || null]);
                    h.state.save()
                }
            }
        },
        _key: function(a) {
            if (this.s.waitingForDraw) a.preventDefault();
            else {
                var b = this.s.enable,
                    c = !0 === b || "navigation-only" === b;
                if (b && !(0 === a.keyCode || a.ctrlKey || a.metaKey || a.altKey) && this.s.lastFocus) {
                    var d = this.s.dt;
                    if (!(this.c.keys && -1 === e.inArray(a.keyCode, this.c.keys))) switch (a.keyCode) {
                        case 9:
                            this._shift(a, a.shiftKey ?
                                "left" : "right", !0);
                            break;
                        case 27:
                            this.s.blurable && !0 === b && this._blur();
                            break;
                        case 33:
                        case 34:
                            c && (a.preventDefault(), d.page(33 === a.keyCode ? "previous" : "next").draw(!1));
                            break;
                        case 35:
                        case 36:
                            c && (a.preventDefault(), b = d.cells({ page: "current" }).indexes(), c = this._columns(), this._focus(d.cell(b[35 === a.keyCode ? b.length - 1 : c[0]]), null, !0, a));
                            break;
                        case 37:
                            c && this._shift(a, "left");
                            break;
                        case 38:
                            c && this._shift(a, "up");
                            break;
                        case 39:
                            c && this._shift(a, "right");
                            break;
                        case 40:
                            c && this._shift(a, "down");
                            break;
                        default:
                            !0 ===
                                b && this._emitEvent("key", [d, a.keyCode, this.s.lastFocus.cell, a])
                    }
                }
            }
        },
        _scroll: function(a, b, c, d) { var d = c[d](),
                e = c.outerHeight(),
                c = c.outerWidth(),
                h = b.scrollTop(),
                f = b.scrollLeft(),
                g = a.height(),
                a = a.width();
            d.top < h && b.scrollTop(d.top);
            d.left < f && b.scrollLeft(d.left);
            d.top + e > h + g && e < g && b.scrollTop(d.top + e - g);
            d.left + c > f + a && c < a && b.scrollLeft(d.left + c - a) },
        _shift: function(a, b, c) {
            var d = this.s.dt,
                i = d.page.info(),
                h = i.recordsDisplay,
                f = this.s.lastFocus.cell,
                g = this._columns();
            if (f) {
                var j = d.rows({ filter: "applied", order: "applied" }).indexes().indexOf(f.index().row);
                i.serverSide && (j += i.start);
                d = d.columns(g).indexes().indexOf(f.index().column);
                i = g[d];
                "right" === b ? d >= g.length - 1 ? (j++, i = g[0]) : i = g[d + 1] : "left" === b ? 0 === d ? (j--, i = g[g.length - 1]) : i = g[d - 1] : "up" === b ? j-- : "down" === b && j++;
                0 <= j && j < h && -1 !== e.inArray(i, g) ? (a.preventDefault(), this._focus(j, i, !0, a)) : !c || !this.c.blurable ? a.preventDefault() : this._blur()
            }
        },
        _tabInput: function() {
            var a = this,
                b = this.s.dt,
                c = null !== this.c.tabIndex ? this.c.tabIndex : b.settings()[0].iTabIndex;
            if (-1 != c) e('<div><input type="text" tabindex="' + c + '"/></div>').css({
                position: "absolute",
                height: 1,
                width: 0,
                overflow: "hidden"
            }).insertBefore(b.table().node()).children().on("focus", function(c) { a._focus(b.cell(":eq(0)", "0:visible", { page: "current" }), null, !0, c) })
        },
        _updateFixedColumns: function(a) { var b = this.s.dt,
                c = b.settings()[0]; if (c._oFixedColumns) { var d = c.aoColumns.length - c._oFixedColumns.s.iRightColumns;
                (a < c._oFixedColumns.s.iLeftColumns || a > d) && b.fixedColumns().update() } }
    });
    n.defaults = {
        blurable: !0,
        className: "focus",
        columns: "",
        editor: null,
        editorKeys: "navigation-only",
        focus: null,
        keys: null,
        tabIndex: null
    };
    n.version = "2.2.0";
    e.fn.dataTable.KeyTable = n;
    e.fn.DataTable.KeyTable = n;
    l.Api.register("cell.blur()", function() { return this.iterator("table", function(a) { a.keytable && a.keytable.blur() }) });
    l.Api.register("cell().focus()", function() { return this.iterator("cell", function(a, b, c) { a.keytable && a.keytable.focus(b, c) }) });
    l.Api.register("keys.disable()", function() { return this.iterator("table", function(a) { a.keytable && a.keytable.enable(!1) }) });
    l.Api.register("keys.enable()", function(a) {
        return this.iterator("table",
            function(b) { b.keytable && b.keytable.enable(a === o ? !0 : a) })
    });
    l.ext.selector.cell.push(function(a, b, c) { var b = b.focused,
            a = a.keytable,
            d = []; if (!a || b === o) return c; for (var e = 0, h = c.length; e < h; e++)(!0 === b && a.focused(c[e]) || !1 === b && !a.focused(c[e])) && d.push(c[e]); return d });
    e(k).on("preInit.dt.dtk", function(a, b) { if ("dt" === a.namespace) { var c = b.oInit.keys,
                d = l.defaults.keys; if (c || d) d = e.extend({}, d, c), !1 !== c && new n(b, d) } });
    return n
});


/*!
 Responsive 2.1.0
 2014-2016 SpryMedia Ltd - datatables.net/license
*/
(function(c) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function(l) { return c(l, window, document) }) : "object" === typeof exports ? module.exports = function(l, k) { l || (l = window); if (!k || !k.fn.dataTable) k = require("datatables.net")(l, k).$; return c(k, l, l.document) } : c(jQuery, window, document) })(function(c, l, k, p) {
    var m = c.fn.dataTable,
        j = function(a, b) {
            if (!m.versionCheck || !m.versionCheck("1.10.3")) throw "DataTables Responsive requires DataTables 1.10.3 or newer";
            this.s = {
                dt: new m.Api(a),
                columns: [],
                current: []
            };
            this.s.dt.settings()[0].responsive || (b && "string" === typeof b.details ? b.details = { type: b.details } : b && !1 === b.details ? b.details = { type: !1 } : b && !0 === b.details && (b.details = { type: "inline" }), this.c = c.extend(!0, {}, j.defaults, m.defaults.responsive, b), a.responsive = this, this._constructor())
        };
    c.extend(j.prototype, {
        _constructor: function() {
            var a = this,
                b = this.s.dt,
                d = b.settings()[0],
                e = c(l).width();
            b.settings()[0]._responsive = this;
            c(l).on("resize.dtr orientationchange.dtr", m.util.throttle(function() {
                var b =
                    c(l).width();
                b !== e && (a._resize(), e = b)
            }));
            d.oApi._fnCallbackReg(d, "aoRowCreatedCallback", function(e) {-1 !== c.inArray(!1, a.s.current) && c("td, th", e).each(function(e) { e = b.column.index("toData", e);!1 === a.s.current[e] && c(this).css("display", "none") }) });
            b.on("destroy.dtr", function() { b.off(".dtr");
                c(b.table().body()).off(".dtr");
                c(l).off("resize.dtr orientationchange.dtr");
                c.each(a.s.current, function(b, e) {!1 === e && a._setColumnVis(b, !0) }) });
            this.c.breakpoints.sort(function(a, b) {
                return a.width < b.width ? 1 : a.width >
                    b.width ? -1 : 0
            });
            this._classLogic();
            this._resizeAuto();
            d = this.c.details;
            !1 !== d.type && (a._detailsInit(), b.on("column-visibility.dtr", function() { a._classLogic();
                a._resizeAuto();
                a._resize() }), b.on("draw.dtr", function() { a._redrawChildren() }), c(b.table().node()).addClass("dtr-" + d.type));
            b.on("column-reorder.dtr", function() { a._classLogic();
                a._resizeAuto();
                a._resize() });
            b.on("column-sizing.dtr", function() { a._resizeAuto();
                a._resize() });
            b.on("init.dtr", function() {
                a._resizeAuto();
                a._resize();
                c.inArray(false,
                    a.s.current) && b.columns.adjust()
            });
            this._resize()
        },
        _columnsVisiblity: function(a) {
            var b = this.s.dt,
                d = this.s.columns,
                e, f, g = d.map(function(a, b) { return { columnIdx: b, priority: a.priority } }).sort(function(a, b) { return a.priority !== b.priority ? a.priority - b.priority : a.columnIdx - b.columnIdx }),
                h = c.map(d, function(b) { return b.auto && null === b.minWidth ? !1 : !0 === b.auto ? "-" : -1 !== c.inArray(a, b.includeIn) }),
                n = 0;
            e = 0;
            for (f = h.length; e < f; e++) !0 === h[e] && (n += d[e].minWidth);
            e = b.settings()[0].oScroll;
            e = e.sY || e.sX ? e.iBarWidth : 0;
            b =
                b.table().container().offsetWidth - e - n;
            e = 0;
            for (f = h.length; e < f; e++) d[e].control && (b -= d[e].minWidth);
            n = !1;
            e = 0;
            for (f = g.length; e < f; e++) { var i = g[e].columnIdx; "-" === h[i] && (!d[i].control && d[i].minWidth) && (n || 0 > b - d[i].minWidth ? (n = !0, h[i] = !1) : h[i] = !0, b -= d[i].minWidth) }
            g = !1;
            e = 0;
            for (f = d.length; e < f; e++)
                if (!d[e].control && !d[e].never && !h[e]) { g = !0; break }
            e = 0;
            for (f = d.length; e < f; e++) d[e].control && (h[e] = g); - 1 === c.inArray(!0, h) && (h[0] = !0);
            return h
        },
        _classLogic: function() {
            var a = this,
                b = this.c.breakpoints,
                d = this.s.dt,
                e =
                d.columns().eq(0).map(function(a) { var b = this.column(a),
                        e = b.header().className,
                        a = d.settings()[0].aoColumns[a].responsivePriority;
                    a === p && (b = c(b.header()).data("priority"), a = b !== p ? 1 * b : 1E4); return { className: e, includeIn: [], auto: !1, control: !1, never: e.match(/\bnever\b/) ? !0 : !1, priority: a } }),
                f = function(a, b) { var d = e[a].includeIn; - 1 === c.inArray(b, d) && d.push(b) },
                g = function(c, d, i, g) {
                    if (i)
                        if ("max-" === i) { g = a._find(d).width;
                            d = 0; for (i = b.length; d < i; d++) b[d].width <= g && f(c, b[d].name) } else if ("min-" === i) {
                        g = a._find(d).width;
                        d = 0;
                        for (i = b.length; d < i; d++) b[d].width >= g && f(c, b[d].name)
                    } else { if ("not-" === i) { d = 0; for (i = b.length; d < i; d++) - 1 === b[d].name.indexOf(g) && f(c, b[d].name) } } else e[c].includeIn.push(d)
                };
            e.each(function(a, e) {
                for (var d = a.className.split(" "), f = !1, j = 0, l = d.length; j < l; j++) {
                    var k = c.trim(d[j]);
                    if ("all" === k) { f = !0;
                        a.includeIn = c.map(b, function(a) { return a.name }); return }
                    if ("none" === k || a.never) { f = !0; return }
                    if ("control" === k) { f = !0;
                        a.control = !0; return }
                    c.each(b, function(a, b) {
                        var d = b.name.split("-"),
                            c = k.match(RegExp("(min\\-|max\\-|not\\-)?(" +
                                d[0] + ")(\\-[_a-zA-Z0-9])?"));
                        c && (f = !0, c[2] === d[0] && c[3] === "-" + d[1] ? g(e, b.name, c[1], c[2] + c[3]) : c[2] === d[0] && !c[3] && g(e, b.name, c[1], c[2]))
                    })
                }
                f || (a.auto = !0)
            });
            this.s.columns = e
        },
        _detailsDisplay: function(a, b) { var d = this,
                e = this.s.dt,
                f = this.c.details; if (f && !1 !== f.type) { var g = f.display(a, b, function() { return f.renderer(e, a[0], d._detailsObj(a[0])) });
                (!0 === g || !1 === g) && c(e.table().node()).triggerHandler("responsive-display.dt", [e, a, g, b]) } },
        _detailsInit: function() {
            var a = this,
                b = this.s.dt,
                d = this.c.details;
            "inline" ===
            d.type && (d.target = "td:first-child, th:first-child");
            b.on("draw.dtr", function() { a._tabIndexes() });
            a._tabIndexes();
            c(b.table().body()).on("keyup.dtr", "td, th", function(a) { a.keyCode === 13 && c(this).data("dtr-keyboard") && c(this).click() });
            var e = d.target;
            c(b.table().body()).on("click.dtr mousedown.dtr mouseup.dtr", "string" === typeof e ? e : "td, th", function(d) {
                if (c(b.table().node()).hasClass("collapsed") && b.row(c(this).closest("tr")).length) {
                    if (typeof e === "number") {
                        var g = e < 0 ? b.columns().eq(0).length + e : e;
                        if (b.cell(this).index().column !==
                            g) return
                    }
                    g = b.row(c(this).closest("tr"));
                    d.type === "click" ? a._detailsDisplay(g, false) : d.type === "mousedown" ? c(this).css("outline", "none") : d.type === "mouseup" && c(this).blur().css("outline", "")
                }
            })
        },
        _detailsObj: function(a) { var b = this,
                d = this.s.dt; return c.map(this.s.columns, function(e, c) { if (!e.never && !e.control) return { title: d.settings()[0].aoColumns[c].sTitle, data: d.cell(a, c).render(b.c.orthogonal), hidden: d.column(c).visible() && !b.s.current[c], columnIndex: c, rowIndex: a } }) },
        _find: function(a) {
            for (var b = this.c.breakpoints,
                    d = 0, c = b.length; d < c; d++)
                if (b[d].name === a) return b[d]
        },
        _redrawChildren: function() { var a = this,
                b = this.s.dt;
            b.rows({ page: "current" }).iterator("row", function(c, e) { b.row(e);
                a._detailsDisplay(b.row(e), !0) }) },
        _resize: function() {
            var a = this,
                b = this.s.dt,
                d = c(l).width(),
                e = this.c.breakpoints,
                f = e[0].name,
                g = this.s.columns,
                h, j = this.s.current.slice();
            for (h = e.length - 1; 0 <= h; h--)
                if (d <= e[h].width) { f = e[h].name; break }
            var i = this._columnsVisiblity(f);
            this.s.current = i;
            e = !1;
            h = 0;
            for (d = g.length; h < d; h++)
                if (!1 === i[h] && !g[h].never &&
                    !g[h].control) { e = !0; break }
            c(b.table().node()).toggleClass("collapsed", e);
            var k = !1;
            b.columns().eq(0).each(function(b, c) { i[c] !== j[c] && (k = !0, a._setColumnVis(b, i[c])) });
            k && (this._redrawChildren(), c(b.table().node()).trigger("responsive-resize.dt", [b, this.s.current]))
        },
        _resizeAuto: function() {
            var a = this.s.dt,
                b = this.s.columns;
            if (this.c.auto && -1 !== c.inArray(!0, c.map(b, function(a) { return a.auto }))) {
                a.table().node();
                var d = a.table().node().cloneNode(!1),
                    e = c(a.table().header().cloneNode(!1)).appendTo(d),
                    f = c(a.table().body()).clone(!1, !1).empty().appendTo(d),
                    g = a.columns().header().filter(function(b) { return a.column(b).visible() }).to$().clone(!1).css("display", "table-cell");
                c(f).append(c(a.rows({ page: "current" }).nodes()).clone(!1)).find("th, td").css("display", "");
                if (f = a.table().footer()) { var f = c(f.cloneNode(!1)).appendTo(d),
                        h = a.columns().footer().filter(function(b) { return a.column(b).visible() }).to$().clone(!1).css("display", "table-cell");
                    c("<tr/>").append(h).appendTo(f) }
                c("<tr/>").append(g).appendTo(e);
                "inline" === this.c.details.type &&
                    c(d).addClass("dtr-inline collapsed");
                c(d).find("[name]").removeAttr("name");
                d = c("<div/>").css({ width: 1, height: 1, overflow: "hidden" }).append(d);
                d.insertBefore(a.table().node());
                g.each(function(c) { c = a.column.index("fromVisible", c);
                    b[c].minWidth = this.offsetWidth || 0 });
                d.remove()
            }
        },
        _setColumnVis: function(a, b) { var d = this.s.dt,
                e = b ? "" : "none";
            c(d.column(a).header()).css("display", e);
            c(d.column(a).footer()).css("display", e);
            d.column(a).nodes().to$().css("display", e) },
        _tabIndexes: function() {
            var a = this.s.dt,
                b = a.cells({ page: "current" }).nodes().to$(),
                d = a.settings()[0],
                e = this.c.details.target;
            b.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]");
            c("number" === typeof e ? ":eq(" + e + ")" : e, a.rows({ page: "current" }).nodes()).attr("tabIndex", d.iTabIndex).data("dtr-keyboard", 1)
        }
    });
    j.breakpoints = [{ name: "desktop", width: Infinity }, { name: "tablet-l", width: 1024 }, { name: "tablet-p", width: 768 }, { name: "mobile-l", width: 480 }, { name: "mobile-p", width: 320 }];
    j.display = {
        childRow: function(a, b, d) {
            if (b) {
                if (c(a.node()).hasClass("parent")) return a.child(d(),
                    "child").show(), !0
            } else { if (a.child.isShown()) return a.child(!1), c(a.node()).removeClass("parent"), !1;
                a.child(d(), "child").show();
                c(a.node()).addClass("parent"); return !0 }
        },
        childRowImmediate: function(a, b, d) { if (!b && a.child.isShown() || !a.responsive.hasHidden()) return a.child(!1), c(a.node()).removeClass("parent"), !1;
            a.child(d(), "child").show();
            c(a.node()).addClass("parent"); return !0 },
        modal: function(a) {
            return function(b, d, e) {
                if (d) c("div.dtr-modal-content").empty().append(e());
                else {
                    var f = function() {
                            g.remove();
                            c(k).off("keypress.dtr")
                        },
                        g = c('<div class="dtr-modal"/>').append(c('<div class="dtr-modal-display"/>').append(c('<div class="dtr-modal-content"/>').append(e())).append(c('<div class="dtr-modal-close">&times;</div>').click(function() { f() }))).append(c('<div class="dtr-modal-background"/>').click(function() { f() })).appendTo("body");
                    c(k).on("keyup.dtr", function(a) { 27 === a.keyCode && (a.stopPropagation(), f()) })
                }
                a && a.header && c("div.dtr-modal-content").prepend("<h2>" + a.header(b) + "</h2>")
            }
        }
    };
    j.renderer = {
        listHidden: function() {
            return function(a,
                b, d) { return (a = c.map(d, function(a) { return a.hidden ? '<li data-dtr-index="' + a.columnIndex + '" data-dt-row="' + a.rowIndex + '" data-dt-column="' + a.columnIndex + '"><span class="dtr-title">' + a.title + '</span> <span class="dtr-data">' + a.data + "</span></li>" : "" }).join("")) ? c('<ul data-dtr-index="' + b + '"/>').append(a) : !1 }
        },
        tableAll: function(a) {
            a = c.extend({ tableClass: "" }, a);
            return function(b, d, e) {
                b = c.map(e, function(a) {
                    return '<tr data-dt-row="' + a.rowIndex + '" data-dt-column="' + a.columnIndex + '"><td>' + a.title + ":</td> <td>" +
                        a.data + "</td></tr>"
                }).join("");
                return c('<table class="' + a.tableClass + '" width="100%"/>').append(b)
            }
        }
    };
    j.defaults = { breakpoints: j.breakpoints, auto: !0, details: { display: j.display.childRow, renderer: j.renderer.listHidden(), target: 0, type: "inline" }, orthogonal: "display" };
    var o = c.fn.dataTable.Api;
    o.register("responsive()", function() { return this });
    o.register("responsive.index()", function(a) { a = c(a); return { column: a.data("dtr-index"), row: a.parent().data("dtr-index") } });
    o.register("responsive.rebuild()", function() {
        return this.iterator("table",
            function(a) { a._responsive && a._responsive._classLogic() })
    });
    o.register("responsive.recalc()", function() { return this.iterator("table", function(a) { a._responsive && (a._responsive._resizeAuto(), a._responsive._resize()) }) });
    o.register("responsive.hasHidden()", function() { var a = this.context[0]; return a._responsive ? -1 !== c.inArray(!1, a._responsive.s.current) : !1 });
    j.version = "2.1.0";
    c.fn.dataTable.Responsive = j;
    c.fn.DataTable.Responsive = j;
    c(k).on("preInit.dt.dtr", function(a, b) {
        if ("dt" === a.namespace && (c(b.nTable).hasClass("responsive") ||
                c(b.nTable).hasClass("dt-responsive") || b.oInit.responsive || m.defaults.responsive)) { var d = b.oInit.responsive;!1 !== d && new j(b, c.isPlainObject(d) ? d : {}) }
    });
    return j
});


/*!
 Bootstrap integration for DataTables' Responsive
 Â©2015-2016 SpryMedia Ltd - datatables.net/license
*/
(function(c) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs", "datatables.net-responsive"], function(a) { return c(a, window, document) }) : "object" === typeof exports ? module.exports = function(a, b) { a || (a = window); if (!b || !b.fn.dataTable) b = require("datatables.net-bs")(a, b).$;
        b.fn.dataTable.Responsive || require("datatables.net-responsive")(a, b); return c(b, a, a.document) } : c(jQuery, window, document) })(function(c) {
    var a = c.fn.dataTable,
        b = a.Responsive.display,
        g = b.modal,
        d = c('<div class="modal fade dtr-bs-modal" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"/></div></div></div>');
    b.modal = function(a) { return function(b, e, f) { c.fn.modal ? e || (a && a.header && d.find("div.modal-header").empty().append('<h4 class="modal-title">' + a.header(b) + "</h4>"), d.find("div.modal-body").empty().append(f()), d.appendTo("body").modal()) : g(b, e, f) } };
    return a.Responsive
});


/*!
 RowReorder 1.2.0
 2015-2016 SpryMedia Ltd - datatables.net/license
*/
(function(e) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function(f) { return e(f, window, document) }) : "object" === typeof exports ? module.exports = function(f, g) { f || (f = window); if (!g || !g.fn.dataTable) g = require("datatables.net")(f, g).$; return e(g, f, f.document) } : e(jQuery, window, document) })(function(e, f, g, n) {
    var l = e.fn.dataTable,
        j = function(c, b) {
            if (!l.versionCheck || !l.versionCheck("1.10.8")) throw "DataTables RowReorder requires DataTables 1.10.8 or newer";
            this.c = e.extend(!0, {}, l.defaults.rowReorder,
                j.defaults, b);
            this.s = { bodyTop: null, dt: new l.Api(c), getDataFn: l.ext.oApi._fnGetObjectDataFn(this.c.dataSrc), middles: null, scroll: {}, scrollInterval: null, setDataFn: l.ext.oApi._fnSetObjectDataFn(this.c.dataSrc), start: { top: 0, left: 0, offsetTop: 0, offsetLeft: 0, nodes: [] }, windowHeight: 0 };
            this.dom = { clone: null, dtScroll: e("div.dataTables_scrollBody", this.s.dt.table().container()) };
            var a = this.s.dt.settings()[0],
                d = a.rowreorder;
            if (d) return d;
            a.rowreorder = this;
            this._constructor()
        };
    e.extend(j.prototype, {
        _constructor: function() {
            var c =
                this,
                b = this.s.dt,
                a = e(b.table().node());
            "static" === a.css("position") && a.css("position", "relative");
            e(b.table().container()).on("mousedown.rowReorder touchstart.rowReorder", this.c.selector, function(a) { if (c.c.enabled) { var h = e(this).closest("tr"); if (b.row(h).any()) return c._mouseDown(a, h), !1 } });
            b.on("destroy.rowReorder", function() { e(b.table().container()).off(".rowReorder");
                b.off(".rowReorder") })
        },
        _cachePositions: function() {
            var c = this.s.dt,
                b = e(c.table().node()).find("thead").outerHeight(),
                a = e.unique(c.rows({ page: "current" }).nodes().toArray()),
                d = e.map(a, function(a) { return e(a).position().top - b }),
                a = e.map(d, function(a, b) { return d.length < b - 1 ? (a + d[b + 1]) / 2 : (a + a + e(c.row(":last-child").node()).outerHeight()) / 2 });
            this.s.middles = a;
            this.s.bodyTop = e(c.table().body()).offset().top;
            this.s.windowHeight = e(f).height()
        },
        _clone: function(c) {
            var b = e(this.s.dt.table().node().cloneNode(!1)).addClass("dt-rowReorder-float").append("<tbody/>").append(c.clone(!1)),
                a = c.outerWidth(),
                d = c.outerHeight(),
                h = c.children().map(function() { return e(this).width() });
            b.width(a).height(d).find("tr").children().each(function(a) {
                this.style.width =
                    h[a] + "px"
            });
            b.appendTo("body");
            this.dom.clone = b
        },
        _clonePosition: function(c) { var b = this.s.start,
                a = this._eventToPage(c, "Y") - b.top,
                c = this._eventToPage(c, "X") - b.left,
                d = this.c.snapX;
            this.dom.clone.css({ top: a + b.offsetTop, left: !0 === d ? b.offsetLeft : "number" === typeof d ? b.offsetLeft + d : c + b.offsetLeft }) },
        _emitEvent: function(c, b) { this.s.dt.iterator("table", function(a) { e(a.nTable).triggerHandler(c + ".dt", b) }) },
        _eventToPage: function(c, b) {
            return -1 !== c.type.indexOf("touch") ? c.originalEvent.touches[0]["page" + b] : c["page" +
                b]
        },
        _mouseDown: function(c, b) {
            var a = this,
                d = this.s.dt,
                h = this.s.start,
                k = b.offset();
            h.top = this._eventToPage(c, "Y");
            h.left = this._eventToPage(c, "X");
            h.offsetTop = k.top;
            h.offsetLeft = k.left;
            h.nodes = e.unique(d.rows({ page: "current" }).nodes().toArray());
            this._cachePositions();
            this._clone(b);
            this._clonePosition(c);
            this.dom.target = b;
            b.addClass("dt-rowReorder-moving");
            e(g).on("mouseup.rowReorder touchend.rowReorder", function(b) { a._mouseUp(b) }).on("mousemove.rowReorder touchmove.rowReorder", function(b) { a._mouseMove(b) });
            e(f).width() === e(g).width() && e(g.body).addClass("dt-rowReorder-noOverflow");
            d = this.dom.dtScroll;
            this.s.scroll = { windowHeight: e(f).height(), windowWidth: e(f).width(), dtTop: d.length ? d.offset().top : null, dtLeft: d.length ? d.offset().left : null, dtHeight: d.length ? d.outerHeight() : null, dtWidth: d.length ? d.outerWidth() : null }
        },
        _mouseMove: function(c) {
            this._clonePosition(c);
            for (var b = this._eventToPage(c, "Y") - this.s.bodyTop, a = this.s.middles, d = null, h = this.s.dt, k = h.table().body(), i = 0, g = a.length; i < g; i++)
                if (b < a[i]) {
                    d = i;
                    break
                }
            null === d && (d = a.length);
            if (null === this.s.lastInsert || this.s.lastInsert !== d) 0 === d ? this.dom.target.prependTo(k) : (b = e.unique(h.rows({ page: "current" }).nodes().toArray()), d > this.s.lastInsert ? this.dom.target.insertAfter(b[d - 1]) : this.dom.target.insertBefore(b[d])), this._cachePositions(), this.s.lastInsert = d;
            this._shiftScroll(c)
        },
        _mouseUp: function() {
            var c = this,
                b = this.s.dt,
                a, d, h = this.c.dataSrc;
            this.dom.clone.remove();
            this.dom.clone = null;
            this.dom.target.removeClass("dt-rowReorder-moving");
            e(g).off(".rowReorder");
            e(g.body).removeClass("dt-rowReorder-noOverflow");
            clearInterval(this.s.scrollInterval);
            this.s.scrollInterval = null;
            var k = this.s.start.nodes,
                i = e.unique(b.rows({ page: "current" }).nodes().toArray()),
                f = {},
                j = [],
                l = [],
                m = this.s.getDataFn,
                n = this.s.setDataFn;
            a = 0;
            for (d = k.length; a < d; a++)
                if (k[a] !== i[a]) { var o = b.row(i[a]).id(),
                        q = b.row(i[a]).data(),
                        p = b.row(k[a]).data();
                    o && (f[o] = m(p));
                    j.push({ node: i[a], oldData: m(q), newData: m(p), newPosition: a, oldPosition: e.inArray(i[a], k) });
                    l.push(i[a]) }
            k = [j, {
                dataSrc: h,
                nodes: l,
                values: f,
                triggerRow: b.row(this.dom.target)
            }];
            this._emitEvent("row-reorder", k);
            this.c.editor && (this.c.enabled = !1, this.c.editor.edit(l, !1, e.extend({ submit: "changed" }, this.c.formOptions)).multiSet(h, f).one("submitComplete", function() { c.c.enabled = !0 }).submit());
            if (this.c.update) { a = 0; for (d = j.length; a < d; a++) f = b.row(j[a].node).data(), n(f, j[a].newData), b.columns().every(function() { this.dataSrc() === h && b.cell(j[a].node, this.index()).invalidate("data") });
                this._emitEvent("row-reordered", k);
                b.draw(!1) }
        },
        _shiftScroll: function(c) {
            var b =
                this,
                a = this.s.scroll,
                d = !1,
                e = c.pageY - g.body.scrollTop,
                f, i;
            65 > e ? f = -5 : e > a.windowHeight - 65 && (f = 5);
            null !== a.dtTop && c.pageY < a.dtTop + 65 ? i = -5 : null !== a.dtTop && c.pageY > a.dtTop + a.dtHeight - 65 && (i = 5);
            f || i ? (a.windowVert = f, a.dtVert = i, d = !0) : this.s.scrollInterval && (clearInterval(this.s.scrollInterval), this.s.scrollInterval = null);
            !this.s.scrollInterval && d && (this.s.scrollInterval = setInterval(function() {
                if (a.windowVert) g.body.scrollTop = g.body.scrollTop + a.windowVert;
                if (a.dtVert) {
                    var c = b.dom.dtScroll[0];
                    if (a.dtVert) c.scrollTop =
                        c.scrollTop + a.dtVert
                }
            }, 20))
        }
    });
    j.defaults = { dataSrc: 0, editor: null, enabled: !0, formOptions: {}, selector: "td:first-child", snapX: !1, update: !0 };
    var m = e.fn.dataTable.Api;
    m.register("rowReorder()", function() { return this });
    m.register("rowReorder.enable()", function(c) { c === n && (c = !0); return this.iterator("table", function(b) { b.rowreorder && (b.rowreorder.c.enabled = c) }) });
    m.register("rowReorder.disable()", function() { return this.iterator("table", function(c) { c.rowreorder && (c.rowreorder.c.enabled = !1) }) });
    j.version = "1.2.0";
    e.fn.dataTable.RowReorder = j;
    e.fn.DataTable.RowReorder = j;
    e(g).on("init.dt.dtr", function(c, b) { if ("dt" === c.namespace) { var a = b.oInit.rowReorder,
                d = l.defaults.rowReorder; if (a || d) d = e.extend({}, a, d), !1 !== a && new j(b, d) } });
    return j
});


/*!
 Select for DataTables 1.2.0
 2015-2016 SpryMedia Ltd - datatables.net/license/mit
*/
(function(e) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function(i) { return e(i, window, document) }) : "object" === typeof exports ? module.exports = function(i, l) { i || (i = window); if (!l || !l.fn.dataTable) l = require("datatables.net")(i, l).$; return e(l, i, i.document) } : e(jQuery, window, document) })(function(e, i, l, h) {
    function t(b, a, c) {
        var d;
        d = function(c, a) { if (c > a) var d = a,
                a = c,
                c = d; var f = !1; return b.columns(":visible").indexes().filter(function(b) { b === c && (f = !0); return b === a ? (f = !1, !0) : f }) };
        var f =
            function(c, a) { var d = b.rows({ search: "applied" }).indexes(); if (d.indexOf(c) > d.indexOf(a)) var f = a,
                    a = c,
                    c = f; var e = !1; return d.filter(function(b) { b === c && (e = !0); return b === a ? (e = !1, !0) : e }) };
        !b.cells({ selected: !0 }).any() && !c ? (d = d(0, a.column), c = f(0, a.row)) : (d = d(c.column, a.column), c = f(c.row, a.row));
        c = b.cells(c, d).flatten();
        b.cells(a, { selected: !0 }).any() ? b.cells(c).deselect() : b.cells(c).select()
    }

    function r(b) {
        var a = b.settings()[0]._select.selector;
        e(b.table().body()).off("mousedown.dtSelect", a).off("mouseup.dtSelect",
            a).off("click.dtSelect", a);
        e("body").off("click.dtSelect")
    }

    function v(b) {
        var a = e(b.table().body()),
            c = b.settings()[0],
            d = c._select.selector;
        a.on("mousedown.dtSelect", d, function(c) { if (c.shiftKey || c.metaKey || c.ctrlKey) a.css("-moz-user-select", "none").one("selectstart.dtSelect", d, function() { return !1 }) }).on("mouseup.dtSelect", d, function() { a.css("-moz-user-select", "") }).on("click.dtSelect", d, function(c) {
            var a = b.select.items();
            if (!i.getSelection || !i.getSelection().toString()) {
                var d = b.settings()[0];
                if (e(c.target).closest("div.dataTables_wrapper")[0] ==
                    b.table().container()) { var g = b.cell(e(c.target).closest("td, th")); if (g.any()) { var h = e.Event("user-select.dt");
                        k(b, h, [a, g, c]);
                        h.isDefaultPrevented() || (h = g.index(), "row" === a ? (a = h.row, s(c, b, d, "row", a)) : "column" === a ? (a = g.index().column, s(c, b, d, "column", a)) : "cell" === a && (a = g.index(), s(c, b, d, "cell", a)), d._select_lastCell = h) } }
            }
        });
        e("body").on("click.dtSelect", function(a) { c._select.blurable && !e(a.target).parents().filter(b.table().container()).length && (e(a.target).parents("div.DTE").length || p(c, !0)) })
    }

    function k(b,
        a, c, d) { if (!d || b.flatten().length) "string" === typeof a && (a += ".dt"), c.unshift(b), e(b.table().node()).triggerHandler(a, c) }

    function w(b) {
        var a = b.settings()[0];
        if (a._select.info && a.aanFeatures.i) {
            var c = e('<span class="select-info"/>'),
                d = function(a, d) { c.append(e('<span class="select-item"/>').append(b.i18n("select." + a + "s", { _: "%d " + a + "s selected", "0": "", 1: "1 " + a + " selected" }, d))) };
            d("row", b.rows({ selected: !0 }).flatten().length);
            d("column", b.columns({ selected: !0 }).flatten().length);
            d("cell", b.cells({ selected: !0 }).flatten().length);
            e.each(a.aanFeatures.i, function(a, b) { var b = e(b),
                    d = b.children("span.select-info");
                d.length && d.remove(); "" !== c.text() && b.append(c) })
        }
    }

    function x(b, a, c, d) { var f = b[a + "s"]({ search: "applied" }).indexes(),
            d = e.inArray(d, f),
            m = e.inArray(c, f); if (!b[a + "s"]({ selected: !0 }).any() && -1 === d) f.splice(e.inArray(c, f) + 1, f.length);
        else { if (d > m) var j = m,
                m = d,
                d = j;
            f.splice(m + 1, f.length);
            f.splice(0, d) }
        b[a](c, { selected: !0 }).any() ? (f.splice(e.inArray(c, f), 1), b[a + "s"](f).deselect()) : b[a + "s"](f).select() }

    function p(b, a) {
        if (a || "single" ===
            b._select.style) { var c = new g.Api(b);
            c.rows({ selected: !0 }).deselect();
            c.columns({ selected: !0 }).deselect();
            c.cells({ selected: !0 }).deselect() }
    }

    function s(b, a, c, d, f) {
        var e = a.select.style(),
            j = a[d](f, { selected: !0 }).any();
        "os" === e ? b.ctrlKey || b.metaKey ? a[d](f).select(!j) : b.shiftKey ? "cell" === d ? t(a, f, c._select_lastCell || null) : x(a, d, f, c._select_lastCell ? c._select_lastCell[d] : null) : (b = a[d + "s"]({ selected: !0 }), j && 1 === b.flatten().length ? a[d](f).deselect() : (b.deselect(), a[d](f).select())) : "multi+shift" == e ? b.shiftKey ?
            "cell" === d ? t(a, f, c._select_lastCell || null) : x(a, d, f, c._select_lastCell ? c._select_lastCell[d] : null) : a[d](f).select(!j) : a[d](f).select(!j)
    }

    function q(b, a) { return function(c) { return c.i18n("buttons." + b, a) } }
    var g = e.fn.dataTable;
    g.select = {};
    g.select.version = "1.2.0";
    g.select.init = function(b) {
        var a = b.settings()[0],
            c = a.oInit.select,
            d = g.defaults.select,
            c = c === h ? d : c,
            d = "row",
            f = "api",
            m = !1,
            j = !0,
            u = "td, th",
            i = "selected";
        a._select = {};
        if (!0 === c) f = "os";
        else if ("string" === typeof c) f = c;
        else if (e.isPlainObject(c) && (c.blurable !==
                h && (m = c.blurable), c.info !== h && (j = c.info), c.items !== h && (d = c.items), c.style !== h && (f = c.style), c.selector !== h && (u = c.selector), c.className !== h)) i = c.className;
        b.select.selector(u);
        b.select.items(d);
        b.select.style(f);
        b.select.blurable(m);
        b.select.info(j);
        a._select.className = i;
        e.fn.dataTable.ext.order["select-checkbox"] = function(a, c) {
            return this.api().column(c, { order: "index" }).nodes().map(function(c) {
                return "row" === a._select.items ? e(c).parent().hasClass(a._select.className) : "cell" === a._select.items ? e(c).hasClass(a._select.className) :
                    !1
            })
        };
        e(b.table().node()).hasClass("selectable") && b.select.style("os")
    };
    e.each([{ type: "row", prop: "aoData" }, { type: "column", prop: "aoColumns" }], function(b, a) { g.ext.selector[a.type].push(function(c, b, f) { var b = b.selected,
                e, j = []; if (b === h) return f; for (var g = 0, i = f.length; g < i; g++) e = c[a.prop][f[g]], (!0 === b && !0 === e._select_selected || !1 === b && !e._select_selected) && j.push(f[g]); return j }) });
    g.ext.selector.cell.push(function(b, a, c) {
        var a = a.selected,
            d, f = [];
        if (a === h) return c;
        for (var e = 0, g = c.length; e < g; e++) d = b.aoData[c[e].row],
            (!0 === a && d._selected_cells && !0 === d._selected_cells[c[e].column] || !1 === a && (!d._selected_cells || !d._selected_cells[c[e].column])) && f.push(c[e]);
        return f
    });
    var n = g.Api.register,
        o = g.Api.registerPlural;
    n("select()", function() { return this.iterator("table", function(b) { g.select.init(new g.Api(b)) }) });
    n("select.blurable()", function(b) { return b === h ? this.context[0]._select.blurable : this.iterator("table", function(a) { a._select.blurable = b }) });
    n("select.info()", function(b) {
        return w === h ? this.context[0]._select.info :
            this.iterator("table", function(a) { a._select.info = b })
    });
    n("select.items()", function(b) { return b === h ? this.context[0]._select.items : this.iterator("table", function(a) { a._select.items = b;
            k(new g.Api(a), "selectItems", [b]) }) });
    n("select.style()", function(b) {
        return b === h ? this.context[0]._select.style : this.iterator("table", function(a) {
            a._select.style = b;
            if (!a._select_init) {
                var c = new g.Api(a);
                a.aoRowCreatedCallback.push({
                    fn: function(c, b, d) {
                        b = a.aoData[d];
                        b._select_selected && e(c).addClass(a._select.className);
                        c = 0;
                        for (d = a.aoColumns.length; c < d; c++)(a.aoColumns[c]._select_selected || b._selected_cells && b._selected_cells[c]) && e(b.anCells[c]).addClass(a._select.className)
                    },
                    sName: "select-deferRender"
                });
                c.on("preXhr.dt.dtSelect", function() {
                    var a = c.rows({ selected: !0 }).ids(!0).filter(function(c) { return c !== h }),
                        b = c.cells({ selected: !0 }).eq(0).map(function(a) { var b = c.row(a.row).id(!0); return b ? { row: b, column: a.column } : h }).filter(function(c) { return c !== h });
                    c.one("draw.dt.dtSelect", function() {
                        c.rows(a).select();
                        b.any() &&
                            b.each(function(a) { c.cells(a.row, a.column).select() })
                    })
                });
                c.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt", function() { w(c) });
                c.on("destroy.dtSelect", function() { r(c);
                    c.off(".dtSelect") })
            }
            var d = new g.Api(a);
            r(d);
            "api" !== b && v(d);
            k(new g.Api(a), "selectStyle", [b])
        })
    });
    n("select.selector()", function(b) { return b === h ? this.context[0]._select.selector : this.iterator("table", function(a) { r(new g.Api(a));
            a._select.selector = b; "api" !== a._select.style && v(new g.Api(a)) }) });
    o("rows().select()",
        "row().select()",
        function(b) { var a = this; if (!1 === b) return this.deselect();
            this.iterator("row", function(c, a) { p(c);
                c.aoData[a]._select_selected = !0;
                e(c.aoData[a].nTr).addClass(c._select.className) });
            this.iterator("table", function(c, b) { k(a, "select", ["row", a[b]], !0) }); return this });
    o("columns().select()", "column().select()", function(b) {
        var a = this;
        if (!1 === b) return this.deselect();
        this.iterator("column", function(a, b) {
            p(a);
            a.aoColumns[b]._select_selected = !0;
            var f = (new g.Api(a)).column(b);
            e(f.header()).addClass(a._select.className);
            e(f.footer()).addClass(a._select.className);
            f.nodes().to$().addClass(a._select.className)
        });
        this.iterator("table", function(c, b) { k(a, "select", ["column", a[b]], !0) });
        return this
    });
    o("cells().select()", "cell().select()", function(b) {
        var a = this;
        if (!1 === b) return this.deselect();
        this.iterator("cell", function(a, b, f) { p(a);
            b = a.aoData[b];
            b._selected_cells === h && (b._selected_cells = []);
            b._selected_cells[f] = !0;
            b.anCells && e(b.anCells[f]).addClass(a._select.className) });
        this.iterator("table", function(b, d) {
            k(a, "select", ["cell", a[d]], !0)
        });
        return this
    });
    o("rows().deselect()", "row().deselect()", function() { var b = this;
        this.iterator("row", function(a, b) { a.aoData[b]._select_selected = !1;
            e(a.aoData[b].nTr).removeClass(a._select.className) });
        this.iterator("table", function(a, c) { k(b, "deselect", ["row", b[c]], !0) }); return this });
    o("columns().deselect()", "column().deselect()", function() {
        var b = this;
        this.iterator("column", function(a, b) {
            a.aoColumns[b]._select_selected = !1;
            var d = new g.Api(a),
                f = d.column(b);
            e(f.header()).removeClass(a._select.className);
            e(f.footer()).removeClass(a._select.className);
            d.cells(null, b).indexes().each(function(b) { var c = a.aoData[b.row],
                    d = c._selected_cells;
                c.anCells && (!d || !d[b.column]) && e(c.anCells[b.column]).removeClass(a._select.className) })
        });
        this.iterator("table", function(a, c) { k(b, "deselect", ["column", b[c]], !0) });
        return this
    });
    o("cells().deselect()", "cell().deselect()", function() {
        var b = this;
        this.iterator("cell", function(a, b, d) { b = a.aoData[b];
            b._selected_cells[d] = !1;
            b.anCells && !a.aoColumns[d]._select_selected && e(b.anCells[d]).removeClass(a._select.className) });
        this.iterator("table", function(a, c) { k(b, "deselect", ["cell", b[c]], !0) });
        return this
    });
    e.extend(g.ext.buttons, {
        selected: { text: q("selected", "Selected"), className: "buttons-selected", init: function(b) { var a = this;
                b.on("draw.dt.DT select.dt.DT deselect.dt.DT", function() { var b = a.rows({ selected: !0 }).any() || a.columns({ selected: !0 }).any() || a.cells({ selected: !0 }).any();
                    a.enable(b) });
                this.disable() } },
        selectedSingle: {
            text: q("selectedSingle", "Selected single"),
            className: "buttons-selected-single",
            init: function(b) {
                var a =
                    this;
                b.on("draw.dt.DT select.dt.DT deselect.dt.DT", function() { var c = b.rows({ selected: !0 }).flatten().length + b.columns({ selected: !0 }).flatten().length + b.cells({ selected: !0 }).flatten().length;
                    a.enable(1 === c) });
                this.disable()
            }
        },
        selectAll: { text: q("selectAll", "Select all"), className: "buttons-select-all", action: function() { this[this.select.items() + "s"]().select() } },
        selectNone: {
            text: q("selectNone", "Deselect all"),
            className: "buttons-select-none",
            action: function() { p(this.settings()[0], !0) },
            init: function(b) {
                var a =
                    this;
                b.on("draw.dt.DT select.dt.DT deselect.dt.DT", function() { var c = b.rows({ selected: !0 }).flatten().length + b.columns({ selected: !0 }).flatten().length + b.cells({ selected: !0 }).flatten().length;
                    a.enable(0 < c) });
                this.disable()
            }
        }
    });
    e.each(["Row", "Column", "Cell"], function(b, a) {
        var c = a.toLowerCase();
        g.ext.buttons["select" + a + "s"] = {
            text: q("select" + a + "s", "Select " + c + "s"),
            className: "buttons-select-" + c + "s",
            action: function() { this.select.items(c) },
            init: function(a) {
                var b = this;
                a.on("selectItems.dt.DT", function(a, d,
                    e) { b.active(e === c) })
            }
        }
    });
    e(l).on("preInit.dt.dtSelect", function(b, a) { "dt" === b.namespace && g.select.init(new g.Api(a)) });
    return g.select
});