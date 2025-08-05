/**
 * 纯JS工具库 => jUtilsBase
 * @update 2025-08-05 19:14:34
 */
(function(t, e) {
    typeof exports === "object" && typeof module !== "undefined" ? e(exports) : typeof define === "function" && define.amd ? define([ "exports" ], e) : (t = typeof globalThis !== "undefined" ? globalThis : t || self, 
    e(t.jUtilsBase = {}));
})(this, (function(t) {
    "use strict";
    var e = typeof document !== "undefined" ? document.currentScript : null;
    function r(t, e, r) {
        if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : r;
        throw new TypeError("Private element is not present on this object");
    }
    function i(t) {
        var e, r, i, a = 2;
        for ("undefined" != typeof Symbol && (r = Symbol.asyncIterator, i = Symbol.iterator); a--; ) {
            if (r && null != (e = t[r])) return e.call(t);
            if (i && null != (e = t[i])) return new n(e.call(t));
            r = "@@asyncIterator", i = "@@iterator";
        }
        throw new TypeError("Object is not async iterable");
    }
    function n(t) {
        function e(t) {
            if (Object(t) !== t) return Promise.reject(new TypeError(t + " is not an object."));
            var e = t.done;
            return Promise.resolve(t.value).then((function(t) {
                return {
                    value: t,
                    done: e
                };
            }));
        }
        return n = function(t) {
            this.s = t, this.n = t.next;
        }, n.prototype = {
            s: null,
            n: null,
            next: function() {
                return e(this.n.apply(this.s, arguments));
            },
            "return": function(t) {
                var r = this.s["return"];
                return void 0 === r ? Promise.resolve({
                    value: t,
                    done: true
                }) : e(r.apply(this.s, arguments));
            },
            "throw": function(t) {
                var r = this.s["return"];
                return void 0 === r ? Promise.reject(t) : e(r.apply(this.s, arguments));
            }
        }, new n(t);
    }
    function a(t, e, r, i, n, a, s) {
        try {
            var o = t[a](s), l = o.value;
        } catch (t) {
            return void r(t);
        }
        o.done ? e(l) : Promise.resolve(l).then(i, n);
    }
    function s(t) {
        return function() {
            var e = this, r = arguments;
            return new Promise((function(i, n) {
                var s = t.apply(e, r);
                function o(t) {
                    a(s, i, n, o, l, "next", t);
                }
                function l(t) {
                    a(s, i, n, o, l, "throw", t);
                }
                o(void 0);
            }));
        };
    }
    function o(t, e) {
        if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
    function l(t, e) {
        return t.get(r(t, e));
    }
    function u(t, e, r) {
        o(t, e), e.set(t, r);
    }
    function h(t, e, i) {
        return t.set(r(t, e), i), i;
    }
    function c(t, e, i) {
        return i(r(t, e));
    }
    function d(t, e) {
        o(t, e), e.add(t);
    }
    function f(t, e) {
        for (var r = 0; r < e.length; r++) {
            var i = e[r];
            i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), 
            Object.defineProperty(t, w(i.key), i);
        }
    }
    function v(t, e, r) {
        return e && f(t.prototype, e), r && f(t, r), Object.defineProperty(t, "prototype", {
            writable: false
        }), t;
    }
    function p(t, e, r) {
        return (e = w(e)) in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
        }) : t[e] = r, t;
    }
    function g(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, m(t, e);
    }
    function m(t, e) {
        return m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e, t;
        }, m(t, e);
    }
    function y(t, e) {
        if ("object" != typeof t || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var i = r.call(t, e);
            if ("object" != typeof i) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
    }
    function w(t) {
        var e = y(t, "string");
        return "symbol" == typeof e ? e : e + "";
    }
    function b(t, e, r) {
        e || (e = []);
        var i = e.length++;
        return Object.defineProperty({}, "_", {
            set: function(n) {
                e[i] = n, t.apply(r, e);
            }
        });
    }
    var A, _, k, x, E, S, M, C, T, R, I, P, L, D, N;
    var O = {
        34: function(t, e, r) {
            var i = r(4901);
            t.exports = function(t) {
                return typeof t == "object" ? t !== null : i(t);
            };
        },
        81: function(t, e, r) {
            var i = r(9565);
            var n = r(9306);
            var a = r(8551);
            var s = r(6823);
            var o = r(851);
            var l = TypeError;
            t.exports = function(t, e) {
                var r = arguments.length < 2 ? o(t) : e;
                if (n(r)) return a(i(r, t));
                throw new l(s(t) + " is not iterable");
            };
        },
        283: function(t, e, r) {
            var i = r(9504);
            var n = r(9039);
            var a = r(4901);
            var s = r(9297);
            var o = r(3724);
            var l = r(350).CONFIGURABLE;
            var u = r(3706);
            var h = r(1181);
            var c = h.enforce;
            var d = h.get;
            var f = String;
            var v = Object.defineProperty;
            var p = i("".slice);
            var g = i("".replace);
            var m = i([].join);
            var y = o && !n((function() {
                return v((function() {}), "length", {
                    value: 8
                }).length !== 8;
            }));
            var w = String(String).split("String");
            var b = t.exports = function(t, e, r) {
                if (p(f(e), 0, 7) === "Symbol(") {
                    e = "[" + g(f(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
                }
                if (r && r.getter) e = "get " + e;
                if (r && r.setter) e = "set " + e;
                if (!s(t, "name") || l && t.name !== e) {
                    if (o) v(t, "name", {
                        value: e,
                        configurable: true
                    }); else t.name = e;
                }
                if (y && r && s(r, "arity") && t.length !== r.arity) {
                    v(t, "length", {
                        value: r.arity
                    });
                }
                try {
                    if (r && s(r, "constructor") && r.constructor) {
                        if (o) v(t, "prototype", {
                            writable: false
                        });
                    } else if (t.prototype) t.prototype = undefined;
                } catch (n) {}
                var i = c(t);
                if (!s(i, "source")) {
                    i.source = m(w, typeof e == "string" ? e : "");
                }
                return t;
            };
            Function.prototype.toString = b((function A() {
                return a(this) && d(this).source || u(this);
            }), "toString");
        },
        350: function(t, e, r) {
            var i = r(3724);
            var n = r(9297);
            var a = Function.prototype;
            var s = i && Object.getOwnPropertyDescriptor;
            var o = n(a, "name");
            var l = o && function h() {}.name === "something";
            var u = o && (!i || i && s(a, "name").configurable);
            t.exports = {
                EXISTS: o,
                PROPER: l,
                CONFIGURABLE: u
            };
        },
        397: function(t, e, r) {
            var i = r(7751);
            t.exports = i("document", "documentElement");
        },
        421: function(t) {
            t.exports = {};
        },
        507: function(t, e, r) {
            var i = r(9565);
            t.exports = function(t, e, r) {
                var n = r ? t : t.iterator;
                var a = t.next;
                var s, o;
                while (!(s = i(a, n)).done) {
                    o = e(s.value);
                    if (o !== undefined) return o;
                }
            };
        },
        531: function(t, e, r) {
            var i = r(6518);
            var n = r(9565);
            var a = r(9306);
            var s = r(8551);
            var o = r(1767);
            var l = r(8646);
            var u = r(9462);
            var h = r(9539);
            var c = r(6395);
            var d = r(684);
            var f = r(4549);
            var v = !c && !d("flatMap", (function() {}));
            var p = !c && !v && f("flatMap", TypeError);
            var g = c || v || p;
            var m = u((function() {
                var t = this.iterator;
                var e = this.mapper;
                var r, i;
                while (true) {
                    if (i = this.inner) try {
                        r = s(n(i.next, i.iterator));
                        if (!r.done) return r.value;
                        this.inner = null;
                    } catch (a) {
                        h(t, "throw", a);
                    }
                    r = s(n(this.next, t));
                    if (this.done = !!r.done) return;
                    try {
                        this.inner = l(e(r.value, this.counter++), false);
                    } catch (a) {
                        h(t, "throw", a);
                    }
                }
            }));
            i({
                target: "Iterator",
                proto: true,
                real: true,
                forced: g
            }, {
                flatMap: function y(t) {
                    s(this);
                    try {
                        a(t);
                    } catch (e) {
                        h(this, "throw", e);
                    }
                    if (p) return n(p, this, t);
                    return new m(o(this), {
                        mapper: t,
                        inner: null
                    });
                }
            });
        },
        616: function(t, e, r) {
            var i = r(9039);
            t.exports = !i((function() {
                var t = function() {}.bind();
                return typeof t != "function" || t.hasOwnProperty("prototype");
            }));
        },
        655: function(t, e, r) {
            var i = r(6955);
            var n = String;
            t.exports = function(t) {
                if (i(t) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
                return n(t);
            };
        },
        679: function(t, e, r) {
            var i = r(1625);
            var n = TypeError;
            t.exports = function(t, e) {
                if (i(e, t)) return t;
                throw new n("Incorrect invocation");
            };
        },
        684: function(t) {
            t.exports = function(t, e) {
                var r = typeof Iterator == "function" && Iterator.prototype[t];
                if (r) try {
                    r.call({
                        next: null
                    }, e).next();
                } catch (i) {
                    return true;
                }
            };
        },
        741: function(t) {
            var e = Math.ceil;
            var r = Math.floor;
            t.exports = Math.trunc || function i(t) {
                var i = +t;
                return (i > 0 ? r : e)(i);
            };
        },
        757: function(t, e, r) {
            var i = r(7751);
            var n = r(4901);
            var a = r(1625);
            var s = r(7040);
            var o = Object;
            t.exports = s ? function(t) {
                return typeof t == "symbol";
            } : function(t) {
                var e = i("Symbol");
                return n(e) && a(e.prototype, o(t));
            };
        },
        851: function(t, e, r) {
            var i = r(6955);
            var n = r(5966);
            var a = r(4117);
            var s = r(6269);
            var o = r(8227);
            var l = o("iterator");
            t.exports = function(t) {
                if (!a(t)) return n(t, l) || n(t, "@@iterator") || s[i(t)];
            };
        },
        944: function(t) {
            var e = TypeError;
            t.exports = function(t) {
                var r = t && t.alphabet;
                if (r === undefined || r === "base64" || r === "base64url") return r || "base64";
                throw new e("Incorrect `alphabet` option");
            };
        },
        1072: function(t, e, r) {
            var i = r(1828);
            var n = r(8727);
            t.exports = Object.keys || function a(t) {
                return i(t, n);
            };
        },
        1103: function(t) {
            t.exports = function(t) {
                try {
                    return {
                        error: false,
                        value: t()
                    };
                } catch (e) {
                    return {
                        error: true,
                        value: e
                    };
                }
            };
        },
        1108: function(t, e, r) {
            var i = r(6955);
            t.exports = function(t) {
                var e = i(t);
                return e === "BigInt64Array" || e === "BigUint64Array";
            };
        },
        1148: function(t, e, r) {
            var i = r(6518);
            var n = r(9565);
            var a = r(2652);
            var s = r(9306);
            var o = r(8551);
            var l = r(1767);
            var u = r(9539);
            var h = r(4549);
            var c = h("every", TypeError);
            i({
                target: "Iterator",
                proto: true,
                real: true,
                forced: c
            }, {
                every: function d(t) {
                    o(this);
                    try {
                        s(t);
                    } catch (i) {
                        u(this, "throw", i);
                    }
                    if (c) return n(c, this, t);
                    var e = l(this);
                    var r = 0;
                    return !a(e, (function(e, i) {
                        if (!t(e, r++)) return i();
                    }), {
                        IS_RECORD: true,
                        INTERRUPTED: true
                    }).stopped;
                }
            });
        },
        1181: function(t, e, r) {
            var i = r(8622);
            var n = r(4576);
            var a = r(34);
            var s = r(6699);
            var o = r(9297);
            var l = r(7629);
            var u = r(6119);
            var h = r(421);
            var c = "Object already initialized";
            var d = n.TypeError;
            var f = n.WeakMap;
            var v, p, g;
            var m = function(t) {
                return g(t) ? p(t) : v(t, {});
            };
            var y = function(t) {
                return function(e) {
                    var r;
                    if (!a(e) || (r = p(e)).type !== t) {
                        throw new d("Incompatible receiver, " + t + " required");
                    }
                    return r;
                };
            };
            if (i || l.state) {
                var w = l.state || (l.state = new f);
                w.get = w.get;
                w.has = w.has;
                w.set = w.set;
                v = function(t, e) {
                    if (w.has(t)) throw new d(c);
                    e.facade = t;
                    w.set(t, e);
                    return e;
                };
                p = function(t) {
                    return w.get(t) || {};
                };
                g = function(t) {
                    return w.has(t);
                };
            } else {
                var b = u("state");
                h[b] = true;
                v = function(t, e) {
                    if (o(t, b)) throw new d(c);
                    e.facade = t;
                    s(t, b, e);
                    return e;
                };
                p = function(t) {
                    return o(t, b) ? t[b] : {};
                };
                g = function(t) {
                    return o(t, b);
                };
            }
            t.exports = {
                set: v,
                get: p,
                has: g,
                enforce: m,
                getterFor: y
            };
        },
        1291: function(t, e, r) {
            var i = r(741);
            t.exports = function(t) {
                var e = +t;
                return e !== e || e === 0 ? 0 : i(e);
            };
        },
        1385: function(t, e, r) {
            var i = r(9539);
            t.exports = function(t, e, r) {
                for (var n = t.length - 1; n >= 0; n--) {
                    if (t[n] === undefined) continue;
                    try {
                        r = i(t[n].iterator, e, r);
                    } catch (a) {
                        e = "throw";
                        r = a;
                    }
                }
                if (e === "throw") throw r;
                return r;
            };
        },
        1548: function(t, e, r) {
            var i = r(4576);
            var n = r(9039);
            var a = r(9519);
            var s = r(4215);
            var o = i.structuredClone;
            t.exports = !!o && !n((function() {
                if (s === "DENO" && a > 92 || s === "NODE" && a > 94 || s === "BROWSER" && a > 97) return false;
                var t = new ArrayBuffer(8);
                var e = o(t, {
                    transfer: [ t ]
                });
                return t.byteLength !== 0 || e.byteLength !== 8;
            }));
        },
        1549: function(t, e, r) {
            var i = r(6518);
            var n = r(4576);
            var a = r(9143);
            var s = r(4154);
            var o = n.Uint8Array;
            var l = !o || !o.prototype.setFromBase64 || !function() {
                var t = new o([ 255, 255, 255, 255, 255 ]);
                try {
                    t.setFromBase64("", null);
                    return;
                } catch (e) {}
                try {
                    t.setFromBase64("MjYyZg===");
                } catch (e) {
                    return t[0] === 50 && t[1] === 54 && t[2] === 50 && t[3] === 255 && t[4] === 255;
                }
            }();
            if (o) i({
                target: "Uint8Array",
                proto: true,
                forced: l
            }, {
                setFromBase64: function u(t) {
                    s(this);
                    var e = a(t, arguments.length > 1 ? arguments[1] : undefined, this, this.length);
                    return {
                        read: e.read,
                        written: e.written
                    };
                }
            });
        },
        1625: function(t, e, r) {
            var i = r(9504);
            t.exports = i({}.isPrototypeOf);
        },
        1689: function(t, e, r) {
            var i = r(6518);
            var n = r(4576);
            var a = r(8745);
            var s = r(7680);
            var o = r(6043);
            var l = r(9306);
            var u = r(1103);
            var h = n.Promise;
            var c = false;
            var d = !h || !h["try"] || u((function() {
                h["try"]((function(t) {
                    c = t === 8;
                }), 8);
            })).error || !c;
            i({
                target: "Promise",
                stat: true,
                forced: d
            }, {
                "try": function(t) {
                    var e = arguments.length > 1 ? s(arguments, 1) : [];
                    var r = o.f(this);
                    var i = u((function() {
                        return a(l(t), undefined, e);
                    }));
                    (i.error ? r.reject : r.resolve)(i.value);
                    return r.promise;
                }
            });
        },
        1698: function(t, e, r) {
            var i = r(6518);
            var n = r(4204);
            var a = r(9835);
            var s = r(4916);
            var o = !s("union") || !a("union");
            i({
                target: "Set",
                proto: true,
                real: true,
                forced: o
            }, {
                union: n
            });
        },
        1701: function(t, e, r) {
            var i = r(6518);
            var n = r(9565);
            var a = r(9306);
            var s = r(8551);
            var o = r(1767);
            var l = r(9462);
            var u = r(6319);
            var h = r(9539);
            var c = r(684);
            var d = r(4549);
            var f = r(6395);
            var v = !f && !c("map", (function() {}));
            var p = !f && !v && d("map", TypeError);
            var g = f || v || p;
            var m = l((function() {
                var t = this.iterator;
                var e = s(n(this.next, t));
                var r = this.done = !!e.done;
                if (!r) return u(t, this.mapper, [ e.value, this.counter++ ], true);
            }));
            i({
                target: "Iterator",
                proto: true,
                real: true,
                forced: g
            }, {
                map: function y(t) {
                    s(this);
                    try {
                        a(t);
                    } catch (e) {
                        h(this, "throw", e);
                    }
                    if (p) return n(p, this, t);
                    return new m(o(this), {
                        mapper: t
                    });
                }
            });
        },
        1767: function(t) {
            t.exports = function(t) {
                return {
                    iterator: t,
                    next: t.next,
                    done: false
                };
            };
        },
        1828: function(t, e, r) {
            var i = r(9504);
            var n = r(9297);
            var a = r(5397);
            var s = r(9617).indexOf;
            var o = r(421);
            var l = i([].push);
            t.exports = function(t, e) {
                var r = a(t);
                var i = 0;
                var u = [];
                var h;
                for (h in r) !n(o, h) && n(r, h) && l(u, h);
                while (e.length > i) if (n(r, h = e[i++])) {
                    ~s(u, h) || l(u, h);
                }
                return u;
            };
        },
        2106: function(t, e, r) {
            var i = r(283);
            var n = r(4913);
            t.exports = function(t, e, r) {
                if (r.get) i(r.get, e, {
                    getter: true
                });
                if (r.set) i(r.set, e, {
                    setter: true
                });
                return n.f(t, e, r);
            };
        },
        2140: function(t, e, r) {
            var i = r(8227);
            var n = i("toStringTag");
            var a = {};
            a[n] = "z";
            t.exports = String(a) === "[object z]";
        },
        2195: function(t, e, r) {
            var i = r(9504);
            var n = i({}.toString);
            var a = i("".slice);
            t.exports = function(t) {
                return a(n(t), 8, -1);
            };
        },
        2211: function(t, e, r) {
            var i = r(9039);
            t.exports = !i((function() {
                function t() {}
                t.prototype.constructor = null;
                return Object.getPrototypeOf(new t) !== t.prototype;
            }));
        },
        2303: function(t, e, r) {
            var i = r(4576);
            var n = r(9504);
            var a = i.Uint8Array;
            var s = i.SyntaxError;
            var o = i.parseInt;
            var l = Math.min;
            var u = /[^\da-f]/i;
            var h = n(u.exec);
            var c = n("".slice);
            t.exports = function(t, e) {
                var r = t.length;
                if (r % 2 !== 0) throw new s("String should be an even number of characters");
                var i = e ? l(e.length, r / 2) : r / 2;
                var n = e || new a(i);
                var d = 0;
                var f = 0;
                while (f < i) {
                    var v = c(t, d, d += 2);
                    if (h(u, v)) throw new s("String should only contain hex characters");
                    n[f++] = o(v, 16);
                }
                return {
                    bytes: n,
                    read: d
                };
            };
        },
        2360: function(t, e, r) {
            var i = r(8551);
            var n = r(6801);
            var a = r(8727);
            var s = r(421);
            var o = r(397);
            var l = r(4055);
            var u = r(6119);
            var h = ">";
            var c = "<";
            var d = "prototype";
            var f = "script";
            var v = u("IE_PROTO");
            var p = function() {};
            var g = function(t) {
                return c + f + h + t + c + "/" + f + h;
            };
            var m = function(t) {
                t.write(g(""));
                t.close();
                var e = t.parentWindow.Object;
                t = null;
                return e;
            };
            var y = function() {
                var t = l("iframe");
                var e = "java" + f + ":";
                var r;
                t.style.display = "none";
                o.appendChild(t);
                t.src = String(e);
                r = t.contentWindow.document;
                r.open();
                r.write(g("document.F=Object"));
                r.close();
                return r.F;
            };
            var w;
            var b = function() {
                try {
                    w = new ActiveXObject("htmlfile");
                } catch (e) {}
                b = typeof document != "undefined" ? document.domain && w ? m(w) : y() : m(w);
                var t = a.length;
                while (t--) delete b[d][a[t]];
                return b();
            };
            s[v] = true;
            t.exports = Object.create || function A(t, e) {
                var r;
                if (t !== null) {
                    p[d] = i(t);
                    r = new p;
                    p[d] = null;
                    r[v] = t;
                } else r = b();
                return e === undefined ? r : n.f(r, e);
            };
        },
        2475: function(t, e, r) {
            var i = r(6518);
            var n = r(8527);
            var a = r(4916);
            var s = !a("isSupersetOf", (function(t) {
                return !t;
            }));
            i({
                target: "Set",
                proto: true,
                real: true,
                forced: s
            }, {
                isSupersetOf: n
            });
        },
        2489: function(t, e, r) {
            var i = r(6518);
            var n = r(9565);
            var a = r(9306);
            var s = r(8551);
            var o = r(1767);
            var l = r(9462);
            var u = r(6319);
            var h = r(6395);
            var c = r(9539);
            var d = r(684);
            var f = r(4549);
            var v = !h && !d("filter", (function() {}));
            var p = !h && !v && f("filter", TypeError);
            var g = h || v || p;
            var m = l((function() {
                var t = this.iterator;
                var e = this.predicate;
                var r = this.next;
                var i, a, o;
                while (true) {
                    i = s(n(r, t));
                    a = this.done = !!i.done;
                    if (a) return;
                    o = i.value;
                    if (u(t, e, [ o, this.counter++ ], true)) return o;
                }
            }));
            i({
                target: "Iterator",
                proto: true,
                real: true,
                forced: g
            }, {
                filter: function y(t) {
                    s(this);
                    try {
                        a(t);
                    } catch (e) {
                        c(this, "throw", e);
                    }
                    if (p) return n(p, this, t);
                    return new m(o(this), {
                        predicate: t
                    });
                }
            });
        },
        2529: function(t) {
            t.exports = function(t, e) {
                return {
                    value: t,
                    done: e
                };
            };
        },
        2603: function(t, e, r) {
            var i = r(655);
            t.exports = function(t, e) {
                return t === undefined ? arguments.length < 2 ? "" : e : i(t);
            };
        },
        2652: function(t, e, r) {
            var i = r(6080);
            var n = r(9565);
            var a = r(8551);
            var s = r(6823);
            var o = r(4209);
            var l = r(6198);
            var u = r(1625);
            var h = r(81);
            var c = r(851);
            var d = r(9539);
            var f = TypeError;
            var v = function(t, e) {
                this.stopped = t;
                this.result = e;
            };
            var p = v.prototype;
            t.exports = function(t, e, r) {
                var g = r && r.that;
                var m = !!(r && r.AS_ENTRIES);
                var y = !!(r && r.IS_RECORD);
                var w = !!(r && r.IS_ITERATOR);
                var b = !!(r && r.INTERRUPTED);
                var A = i(e, g);
                var _, k, x, E, S, M, C;
                var T = function(t) {
                    if (_) d(_, "normal");
                    return new v(true, t);
                };
                var R = function(t) {
                    if (m) {
                        a(t);
                        return b ? A(t[0], t[1], T) : A(t[0], t[1]);
                    }
                    return b ? A(t, T) : A(t);
                };
                if (y) {
                    _ = t.iterator;
                } else if (w) {
                    _ = t;
                } else {
                    k = c(t);
                    if (!k) throw new f(s(t) + " is not iterable");
                    if (o(k)) {
                        for (x = 0, E = l(t); E > x; x++) {
                            S = R(t[x]);
                            if (S && u(p, S)) return S;
                        }
                        return new v(false);
                    }
                    _ = h(t, k);
                }
                M = y ? t.next : _.next;
                while (!(C = n(M, _)).done) {
                    try {
                        S = R(C.value);
                    } catch (I) {
                        d(_, "throw", I);
                    }
                    if (typeof S == "object" && S && u(p, S)) return S;
                }
                return new v(false);
            };
        },
        2777: function(t, e, r) {
            var i = r(9565);
            var n = r(34);
            var a = r(757);
            var s = r(5966);
            var o = r(4270);
            var l = r(8227);
            var u = TypeError;
            var h = l("toPrimitive");
            t.exports = function(t, e) {
                if (!n(t) || a(t)) return t;
                var r = s(t, h);
                var l;
                if (r) {
                    if (e === undefined) e = "default";
                    l = i(r, t, e);
                    if (!n(l) || a(l)) return l;
                    throw new u("Can't convert object to primitive value");
                }
                if (e === undefined) e = "number";
                return o(t, e);
            };
        },
        2787: function(t, e, r) {
            var i = r(9297);
            var n = r(4901);
            var a = r(8981);
            var s = r(6119);
            var o = r(2211);
            var l = s("IE_PROTO");
            var u = Object;
            var h = u.prototype;
            t.exports = o ? u.getPrototypeOf : function(t) {
                var e = a(t);
                if (i(e, l)) return e[l];
                var r = e.constructor;
                if (n(r) && e instanceof r) {
                    return r.prototype;
                }
                return e instanceof u ? h : null;
            };
        },
        2796: function(t, e, r) {
            var i = r(9039);
            var n = r(4901);
            var a = /#|\.prototype\./;
            var s = function(t, e) {
                var r = l[o(t)];
                return r === h ? true : r === u ? false : n(e) ? i(e) : !!e;
            };
            var o = s.normalize = function(t) {
                return String(t).replace(a, ".").toLowerCase();
            };
            var l = s.data = {};
            var u = s.NATIVE = "N";
            var h = s.POLYFILL = "P";
            t.exports = s;
        },
        2804: function(t) {
            var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var r = e + "+/";
            var i = e + "-_";
            var n = function(t) {
                var e = {};
                var r = 0;
                for (;r < 64; r++) e[t.charAt(r)] = r;
                return e;
            };
            t.exports = {
                i2c: r,
                c2i: n(r),
                i2cUrl: i,
                c2iUrl: n(i)
            };
        },
        2812: function(t) {
            var e = TypeError;
            t.exports = function(t, r) {
                if (t < r) throw new e("Not enough arguments");
                return t;
            };
        },
        2839: function(t, e, r) {
            var i = r(4576);
            var n = i.navigator;
            var a = n && n.userAgent;
            t.exports = a ? String(a) : "";
        },
        2967: function(t, e, r) {
            var i = r(6706);
            var n = r(34);
            var a = r(7750);
            var s = r(3506);
            t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var t = false;
                var e = {};
                var r;
                try {
                    r = i(Object.prototype, "__proto__", "set");
                    r(e, []);
                    t = e instanceof Array;
                } catch (o) {}
                return function l(e, i) {
                    a(e);
                    s(i);
                    if (!n(e)) return e;
                    if (t) r(e, i); else e.__proto__ = i;
                    return e;
                };
            }() : undefined);
        },
        3167: function(t, e, r) {
            var i = r(4901);
            var n = r(34);
            var a = r(2967);
            t.exports = function(t, e, r) {
                var s, o;
                if (a && i(s = e.constructor) && s !== r && n(o = s.prototype) && o !== r.prototype) a(t, o);
                return t;
            };
        },
        3238: function(t, e, r) {
            var i = r(4576);
            var n = r(7811);
            var a = r(7394);
            var s = i.DataView;
            t.exports = function(t) {
                if (!n || a(t) !== 0) return false;
                try {
                    new s(t);
                    return false;
                } catch (e) {
                    return true;
                }
            };
        },
        3392: function(t, e, r) {
            var i = r(9504);
            var n = 0;
            var a = Math.random();
            var s = i(1.1.toString);
            t.exports = function(t) {
                return "Symbol(" + (t === undefined ? "" : t) + ")_" + s(++n + a, 36);
            };
        },
        3440: function(t, e, r) {
            var i = r(7080);
            var n = r(4402);
            var a = r(9286);
            var s = r(5170);
            var o = r(3789);
            var l = r(8469);
            var u = r(507);
            var h = n.has;
            var c = n.remove;
            t.exports = function d(t) {
                var e = i(this);
                var r = o(t);
                var n = a(e);
                if (s(e) <= r.size) l(e, (function(t) {
                    if (r.includes(t)) c(n, t);
                })); else u(r.getIterator(), (function(t) {
                    if (h(n, t)) c(n, t);
                }));
                return n;
            };
        },
        3463: function(t) {
            var e = TypeError;
            t.exports = function(t) {
                if (typeof t == "string") return t;
                throw new e("Argument is not a string");
            };
        },
        3506: function(t, e, r) {
            var i = r(3925);
            var n = String;
            var a = TypeError;
            t.exports = function(t) {
                if (i(t)) return t;
                throw new a("Can't set " + n(t) + " as a prototype");
            };
        },
        3579: function(t, e, r) {
            var i = r(6518);
            var n = r(9565);
            var a = r(2652);
            var s = r(9306);
            var o = r(8551);
            var l = r(1767);
            var u = r(9539);
            var h = r(4549);
            var c = h("some", TypeError);
            i({
                target: "Iterator",
                proto: true,
                real: true,
                forced: c
            }, {
                some: function d(t) {
                    o(this);
                    try {
                        s(t);
                    } catch (i) {
                        u(this, "throw", i);
                    }
                    if (c) return n(c, this, t);
                    var e = l(this);
                    var r = 0;
                    return a(e, (function(e, i) {
                        if (t(e, r++)) return i();
                    }), {
                        IS_RECORD: true,
                        INTERRUPTED: true
                    }).stopped;
                }
            });
        },
        3650: function(t, e, r) {
            var i = r(7080);
            var n = r(4402);
            var a = r(9286);
            var s = r(3789);
            var o = r(507);
            var l = n.add;
            var u = n.has;
            var h = n.remove;
            t.exports = function c(t) {
                var e = i(this);
                var r = s(t).getIterator();
                var n = a(e);
                o(r, (function(t) {
                    if (u(e, t)) h(n, t); else l(n, t);
                }));
                return n;
            };
        },
        3706: function(t, e, r) {
            var i = r(9504);
            var n = r(4901);
            var a = r(7629);
            var s = i(Function.toString);
            if (!n(a.inspectSource)) {
                a.inspectSource = function(t) {
                    return s(t);
                };
            }
            t.exports = a.inspectSource;
        },
        3717: function(t, e) {
            e.f = Object.getOwnPropertySymbols;
        },
        3724: function(t, e, r) {
            var i = r(9039);
            t.exports = !i((function() {
                return Object.defineProperty({}, 1, {
                    get: function() {
                        return 7;
                    }
                })[1] !== 7;
            }));
        },
        3789: function(t, e, r) {
            var i = r(9306);
            var n = r(8551);
            var a = r(9565);
            var s = r(1291);
            var o = r(1767);
            var l = "Invalid size";
            var u = RangeError;
            var h = TypeError;
            var c = Math.max;
            var d = function(t, e) {
                this.set = t;
                this.size = c(e, 0);
                this.has = i(t.has);
                this.keys = i(t.keys);
            };
            d.prototype = {
                getIterator: function() {
                    return o(n(a(this.keys, this.set)));
                },
                includes: function(t) {
                    return a(this.has, this.set, t);
                }
            };
            t.exports = function(t) {
                n(t);
                var e = +t.size;
                if (e !== e) throw new h(l);
                var r = s(e);
                if (r < 0) throw new u(l);
                return new d(t, r);
            };
        },
        3838: function(t, e, r) {
            var i = r(7080);
            var n = r(5170);
            var a = r(8469);
            var s = r(3789);
            t.exports = function o(t) {
                var e = i(this);
                var r = s(t);
                if (n(e) > r.size) return false;
                return a(e, (function(t) {
                    if (!r.includes(t)) return false;
                }), true) !== false;
            };
        },
        3853: function(t, e, r) {
            var i = r(6518);
            var n = r(4449);
            var a = r(4916);
            var s = !a("isDisjointFrom", (function(t) {
                return !t;
            }));
            i({
                target: "Set",
                proto: true,
                real: true,
                forced: s
            }, {
                isDisjointFrom: n
            });
        },
        3925: function(t, e, r) {
            var i = r(34);
            t.exports = function(t) {
                return i(t) || t === null;
            };
        },
        3972: function(t, e, r) {
            var i = r(34);
            var n = String;
            var a = TypeError;
            t.exports = function(t) {
                if (t === undefined || i(t)) return t;
                throw new a(n(t) + " is not an object or undefined");
            };
        },
        4055: function(t, e, r) {
            var i = r(4576);
            var n = r(34);
            var a = i.document;
            var s = n(a) && n(a.createElement);
            t.exports = function(t) {
                return s ? a.createElement(t) : {};
            };
        },
        4114: function(t, e, r) {
            var i = r(6518);
            var n = r(8981);
            var a = r(6198);
            var s = r(4527);
            var o = r(6837);
            var l = r(9039);
            var u = l((function() {
                return [].push.call({
                    length: 4294967296
                }, 1) !== 4294967297;
            }));
            var h = function() {
                try {
                    Object.defineProperty([], "length", {
                        writable: false
                    }).push();
                } catch (t) {
                    return t instanceof TypeError;
                }
            };
            var c = u || !h();
            i({
                target: "Array",
                proto: true,
                arity: 1,
                forced: c
            }, {
                push: function d(t) {
                    var e = n(this);
                    var r = a(e);
                    var i = arguments.length;
                    o(r + i);
                    for (var l = 0; l < i; l++) {
                        e[r] = arguments[l];
                        r++;
                    }
                    s(e, r);
                    return r;
                }
            });
        },
        4117: function(t) {
            t.exports = function(t) {
                return t === null || t === undefined;
            };
        },
        4149: function(t) {
            var e = RangeError;
            t.exports = function(t) {
                if (t === t) return t;
                throw new e("NaN is not allowed");
            };
        },
        4154: function(t, e, r) {
            var i = r(6955);
            var n = TypeError;
            t.exports = function(t) {
                if (i(t) === "Uint8Array") return t;
                throw new n("Argument is not an Uint8Array");
            };
        },
        4204: function(t, e, r) {
            var i = r(7080);
            var n = r(4402).add;
            var a = r(9286);
            var s = r(3789);
            var o = r(507);
            t.exports = function l(t) {
                var e = i(this);
                var r = s(t).getIterator();
                var l = a(e);
                o(r, (function(t) {
                    n(l, t);
                }));
                return l;
            };
        },
        4209: function(t, e, r) {
            var i = r(8227);
            var n = r(6269);
            var a = i("iterator");
            var s = Array.prototype;
            t.exports = function(t) {
                return t !== undefined && (n.Array === t || s[a] === t);
            };
        },
        4215: function(t, e, r) {
            var i = r(4576);
            var n = r(2839);
            var a = r(2195);
            var s = function(t) {
                return n.slice(0, t.length) === t;
            };
            t.exports = function() {
                if (s("Bun/")) return "BUN";
                if (s("Cloudflare-Workers")) return "CLOUDFLARE";
                if (s("Deno/")) return "DENO";
                if (s("Node.js/")) return "NODE";
                if (i.Bun && typeof Bun.version == "string") return "BUN";
                if (i.Deno && typeof Deno.version == "object") return "DENO";
                if (a(i.process) === "process") return "NODE";
                if (i.window && i.document) return "BROWSER";
                return "REST";
            }();
        },
        4235: function(t, e, r) {
            var i = r(6518);
            var n = r(9504);
            var a = r(2652);
            var s = RangeError;
            var o = TypeError;
            var l = Infinity;
            var u = NaN;
            var h = Math.abs;
            var c = Math.pow;
            var d = n([].push);
            var f = c(2, 1023);
            var v = c(2, 53) - 1;
            var p = Number.MAX_VALUE;
            var g = c(2, 971);
            var m = {};
            var y = {};
            var w = {};
            var b = {};
            var A = {};
            var _ = function(t, e) {
                var r = t + e;
                var i = e - (r - t);
                return {
                    hi: r,
                    lo: i
                };
            };
            i({
                target: "Math",
                stat: true
            }, {
                sumPrecise: function k(t) {
                    var e = [];
                    var r = 0;
                    var i = b;
                    a(t, (function(t) {
                        if (++r >= v) throw new s("Maximum allowed index exceeded");
                        if (typeof t != "number") throw new o("Value is not a number");
                        if (i !== m) {
                            if (t !== t) i = m; else if (t === l) i = i === y ? m : w; else if (t === -l) i = i === w ? m : y; else if ((t !== 0 || 1 / t === l) && (i === b || i === A)) {
                                i = A;
                                d(e, t);
                            }
                        }
                    }));
                    switch (i) {
                      case m:
                        return u;

                      case y:
                        return -l;

                      case w:
                        return l;

                      case b:
                        return -0;
                    }
                    var n = [];
                    var c = 0;
                    var k, x, E, S, M, C;
                    for (var T = 0; T < e.length; T++) {
                        k = e[T];
                        var R = 0;
                        for (var I = 0; I < n.length; I++) {
                            x = n[I];
                            if (h(k) < h(x)) {
                                C = k;
                                k = x;
                                x = C;
                            }
                            E = _(k, x);
                            S = E.hi;
                            M = E.lo;
                            if (h(S) === l) {
                                var P = S === l ? 1 : -1;
                                c += P;
                                k = k - P * f - P * f;
                                if (h(k) < h(x)) {
                                    C = k;
                                    k = x;
                                    x = C;
                                }
                                E = _(k, x);
                                S = E.hi;
                                M = E.lo;
                            }
                            if (M !== 0) n[R++] = M;
                            k = S;
                        }
                        n.length = R;
                        if (k !== 0) d(n, k);
                    }
                    var L = n.length - 1;
                    S = 0;
                    M = 0;
                    if (c !== 0) {
                        var D = L >= 0 ? n[L] : 0;
                        L--;
                        if (h(c) > 1 || c > 0 && D > 0 || c < 0 && D < 0) {
                            return c > 0 ? l : -l;
                        }
                        E = _(c * f, D / 2);
                        S = E.hi;
                        M = E.lo;
                        M *= 2;
                        if (h(2 * S) === l) {
                            if (S > 0) {
                                return S === f && M === -(g / 2) && L >= 0 && n[L] < 0 ? p : l;
                            }
                            return S === -f && M === g / 2 && L >= 0 && n[L] > 0 ? -p : -l;
                        }
                        if (M !== 0) {
                            n[++L] = M;
                            M = 0;
                        }
                        S *= 2;
                    }
                    while (L >= 0) {
                        E = _(S, n[L--]);
                        S = E.hi;
                        M = E.lo;
                        if (M !== 0) break;
                    }
                    if (L >= 0 && (M < 0 && n[L] < 0 || M > 0 && n[L] > 0)) {
                        x = M * 2;
                        k = S + x;
                        if (x === k - S) S = k;
                    }
                    return S;
                }
            });
        },
        4270: function(t, e, r) {
            var i = r(9565);
            var n = r(4901);
            var a = r(34);
            var s = TypeError;
            t.exports = function(t, e) {
                var r, o;
                if (e === "string" && n(r = t.toString) && !a(o = i(r, t))) return o;
                if (n(r = t.valueOf) && !a(o = i(r, t))) return o;
                if (e !== "string" && n(r = t.toString) && !a(o = i(r, t))) return o;
                throw new s("Can't convert object to primitive value");
            };
        },
        4376: function(t, e, r) {
            var i = r(2195);
            t.exports = Array.isArray || function n(t) {
                return i(t) === "Array";
            };
        },
        4402: function(t, e, r) {
            var i = r(9504);
            var n = Set.prototype;
            t.exports = {
                Set: Set,
                add: i(n.add),
                has: i(n.has),
                remove: i(n["delete"]),
                proto: n
            };
        },
        4449: function(t, e, r) {
            var i = r(7080);
            var n = r(4402).has;
            var a = r(5170);
            var s = r(3789);
            var o = r(8469);
            var l = r(507);
            var u = r(9539);
            t.exports = function h(t) {
                var e = i(this);
                var r = s(t);
                if (a(e) <= r.size) return o(e, (function(t) {
                    if (r.includes(t)) return false;
                }), true) !== false;
                var h = r.getIterator();
                return l(h, (function(t) {
                    if (n(e, t)) return u(h, "normal", false);
                })) !== false;
            };
        },
        4483: function(t, e, r) {
            var i = r(4576);
            var n = r(9429);
            var a = r(1548);
            var s = i.structuredClone;
            var o = i.ArrayBuffer;
            var l = i.MessageChannel;
            var u = false;
            var h, c, d, f;
            if (a) {
                u = function(t) {
                    s(t, {
                        transfer: [ t ]
                    });
                };
            } else if (o) try {
                if (!l) {
                    h = n("worker_threads");
                    if (h) l = h.MessageChannel;
                }
                if (l) {
                    c = new l;
                    d = new o(2);
                    f = function(t) {
                        c.port1.postMessage(null, [ t ]);
                    };
                    if (d.byteLength === 2) {
                        f(d);
                        if (d.byteLength === 0) u = f;
                    }
                }
            } catch (v) {}
            t.exports = u;
        },
        4495: function(t, e, r) {
            var i = r(9519);
            var n = r(9039);
            var a = r(4576);
            var s = a.String;
            t.exports = !!Object.getOwnPropertySymbols && !n((function() {
                var t = Symbol("symbol detection");
                return !s(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && i && i < 41;
            }));
        },
        4527: function(t, e, r) {
            var i = r(3724);
            var n = r(4376);
            var a = TypeError;
            var s = Object.getOwnPropertyDescriptor;
            var o = i && !function() {
                if (this !== undefined) return true;
                try {
                    Object.defineProperty([], "length", {
                        writable: false
                    }).length = 1;
                } catch (t) {
                    return t instanceof TypeError;
                }
            }();
            t.exports = o ? function(t, e) {
                if (n(t) && !s(t, "length").writable) {
                    throw new a("Cannot set read only .length");
                }
                return t.length = e;
            } : function(t, e) {
                return t.length = e;
            };
        },
        4549: function(t, e, r) {
            var i = r(4576);
            t.exports = function(t, e) {
                var r = i.Iterator;
                var n = r && r.prototype;
                var a = n && n[t];
                var s = false;
                if (a) try {
                    a.call({
                        next: function() {
                            return {
                                done: true
                            };
                        },
                        "return": function() {
                            s = true;
                        }
                    }, -1);
                } catch (o) {
                    if (!(o instanceof e)) s = false;
                }
                if (!s) return a;
            };
        },
        4576: function(t) {
            var e = function(t) {
                return t && t.Math === Math && t;
            };
            t.exports = e(typeof globalThis == "object" && globalThis) || e(typeof window == "object" && window) || e(typeof self == "object" && self) || e(typeof global == "object" && global) || e(typeof this == "object" && this) || function() {
                return this;
            }() || Function("return this")();
        },
        4603: function(t, e, r) {
            var i = r(6840);
            var n = r(9504);
            var a = r(655);
            var s = r(2812);
            var o = URLSearchParams;
            var l = o.prototype;
            var u = n(l.append);
            var h = n(l["delete"]);
            var c = n(l.forEach);
            var d = n([].push);
            var f = new o("a=1&a=2&b=3");
            f["delete"]("a", 1);
            f["delete"]("b", undefined);
            if (f + "" !== "a=2") {
                i(l, "delete", (function(t) {
                    var e = arguments.length;
                    var r = e < 2 ? undefined : arguments[1];
                    if (e && r === undefined) return h(this, t);
                    var i = [];
                    c(this, (function(t, e) {
                        d(i, {
                            key: e,
                            value: t
                        });
                    }));
                    s(e, 1);
                    var n = a(t);
                    var o = a(r);
                    var l = 0;
                    var f = 0;
                    var v = false;
                    var p = i.length;
                    var g;
                    while (l < p) {
                        g = i[l++];
                        if (v || g.key === n) {
                            v = true;
                            h(this, g.key);
                        } else f++;
                    }
                    while (f < p) {
                        g = i[f++];
                        if (!(g.key === n && g.value === o)) u(this, g.key, g.value);
                    }
                }), {
                    enumerable: true,
                    unsafe: true
                });
            }
        },
        4628: function(t, e, r) {
            var i = r(6518);
            var n = r(6043);
            i({
                target: "Promise",
                stat: true
            }, {
                withResolvers: function a() {
                    var t = n.f(this);
                    return {
                        promise: t.promise,
                        resolve: t.resolve,
                        reject: t.reject
                    };
                }
            });
        },
        4644: function(t, e, r) {
            var i = r(7811);
            var n = r(3724);
            var a = r(4576);
            var s = r(4901);
            var o = r(34);
            var l = r(9297);
            var u = r(6955);
            var h = r(6823);
            var c = r(6699);
            var d = r(6840);
            var f = r(2106);
            var v = r(1625);
            var p = r(2787);
            var g = r(2967);
            var m = r(8227);
            var y = r(3392);
            var w = r(1181);
            var b = w.enforce;
            var A = w.get;
            var _ = a.Int8Array;
            var k = _ && _.prototype;
            var x = a.Uint8ClampedArray;
            var E = x && x.prototype;
            var S = _ && p(_);
            var M = k && p(k);
            var C = Object.prototype;
            var T = a.TypeError;
            var R = m("toStringTag");
            var I = y("TYPED_ARRAY_TAG");
            var P = "TypedArrayConstructor";
            var L = i && !!g && u(a.opera) !== "Opera";
            var D = false;
            var N, O, F;
            var W = {
                Int8Array: 1,
                Uint8Array: 1,
                Uint8ClampedArray: 1,
                Int16Array: 2,
                Uint16Array: 2,
                Int32Array: 4,
                Uint32Array: 4,
                Float32Array: 4,
                Float64Array: 8
            };
            var B = {
                BigInt64Array: 8,
                BigUint64Array: 8
            };
            var j = function X(t) {
                if (!o(t)) return false;
                var e = u(t);
                return e === "DataView" || l(W, e) || l(B, e);
            };
            var H = function(t) {
                var e = p(t);
                if (!o(e)) return;
                var r = A(e);
                return r && l(r, P) ? r[P] : H(e);
            };
            var U = function(t) {
                if (!o(t)) return false;
                var e = u(t);
                return l(W, e) || l(B, e);
            };
            var z = function(t) {
                if (U(t)) return t;
                throw new T("Target is not a typed array");
            };
            var G = function(t) {
                if (s(t) && (!g || v(S, t))) return t;
                throw new T(h(t) + " is not a typed array constructor");
            };
            var V = function(t, e, r, i) {
                if (!n) return;
                if (r) for (var s in W) {
                    var o = a[s];
                    if (o && l(o.prototype, t)) try {
                        delete o.prototype[t];
                    } catch (u) {
                        try {
                            o.prototype[t] = e;
                        } catch (h) {}
                    }
                }
                if (!M[t] || r) {
                    d(M, t, r ? e : L && k[t] || e, i);
                }
            };
            var q = function(t, e, r) {
                var i, s;
                if (!n) return;
                if (g) {
                    if (r) for (i in W) {
                        s = a[i];
                        if (s && l(s, t)) try {
                            delete s[t];
                        } catch (o) {}
                    }
                    if (!S[t] || r) {
                        try {
                            return d(S, t, r ? e : L && S[t] || e);
                        } catch (o) {}
                    } else return;
                }
                for (i in W) {
                    s = a[i];
                    if (s && (!s[t] || r)) {
                        d(s, t, e);
                    }
                }
            };
            for (N in W) {
                O = a[N];
                F = O && O.prototype;
                if (F) b(F)[P] = O; else L = false;
            }
            for (N in B) {
                O = a[N];
                F = O && O.prototype;
                if (F) b(F)[P] = O;
            }
            if (!L || !s(S) || S === Function.prototype) {
                S = function t() {
                    throw new T("Incorrect invocation");
                };
                if (L) for (N in W) {
                    if (a[N]) g(a[N], S);
                }
            }
            if (!L || !M || M === C) {
                M = S.prototype;
                if (L) for (N in W) {
                    if (a[N]) g(a[N].prototype, M);
                }
            }
            if (L && p(E) !== M) {
                g(E, M);
            }
            if (n && !l(M, R)) {
                D = true;
                f(M, R, {
                    configurable: true,
                    get: function() {
                        return o(this) ? this[I] : undefined;
                    }
                });
                for (N in W) if (a[N]) {
                    c(a[N], I, N);
                }
            }
            t.exports = {
                NATIVE_ARRAY_BUFFER_VIEWS: L,
                TYPED_ARRAY_TAG: D && I,
                aTypedArray: z,
                aTypedArrayConstructor: G,
                exportTypedArrayMethod: V,
                exportTypedArrayStaticMethod: q,
                getTypedArrayConstructor: H,
                isView: j,
                isTypedArray: U,
                TypedArray: S,
                TypedArrayPrototype: M
            };
        },
        4659: function(t, e, r) {
            var i = r(3724);
            var n = r(4913);
            var a = r(6980);
            t.exports = function(t, e, r) {
                if (i) n.f(t, e, a(0, r)); else t[e] = r;
            };
        },
        4901: function(t) {
            var e = typeof document == "object" && document.all;
            t.exports = typeof e == "undefined" && e !== undefined ? function(t) {
                return typeof t == "function" || t === e;
            } : function(t) {
                return typeof t == "function";
            };
        },
        4913: function(t, e, r) {
            var i = r(3724);
            var n = r(5917);
            var a = r(8686);
            var s = r(8551);
            var o = r(6969);
            var l = TypeError;
            var u = Object.defineProperty;
            var h = Object.getOwnPropertyDescriptor;
            var c = "enumerable";
            var d = "configurable";
            var f = "writable";
            e.f = i ? a ? function v(t, e, r) {
                s(t);
                e = o(e);
                s(r);
                if (typeof t === "function" && e === "prototype" && "value" in r && f in r && !r[f]) {
                    var i = h(t, e);
                    if (i && i[f]) {
                        t[e] = r.value;
                        r = {
                            configurable: d in r ? r[d] : i[d],
                            enumerable: c in r ? r[c] : i[c],
                            writable: false
                        };
                    }
                }
                return u(t, e, r);
            } : u : function p(t, e, r) {
                s(t);
                e = o(e);
                s(r);
                if (n) try {
                    return u(t, e, r);
                } catch (i) {}
                if ("get" in r || "set" in r) throw new l("Accessors not supported");
                if ("value" in r) t[e] = r.value;
                return t;
            };
        },
        4916: function(t, e, r) {
            var i = r(7751);
            var n = function(t) {
                return {
                    size: t,
                    has: function() {
                        return false;
                    },
                    keys: function() {
                        return {
                            next: function() {
                                return {
                                    done: true
                                };
                            }
                        };
                    }
                };
            };
            var a = function(t) {
                return {
                    size: t,
                    has: function() {
                        return true;
                    },
                    keys: function() {
                        throw new Error("e");
                    }
                };
            };
            t.exports = function(t, e) {
                var r = i("Set");
                try {
                    (new r)[t](n(0));
                    try {
                        (new r)[t](n(-1));
                        return false;
                    } catch (o) {
                        if (!e) return true;
                        try {
                            (new r)[t](a(-Infinity));
                            return false;
                        } catch (l) {
                            var s = new r;
                            s.add(1);
                            s.add(2);
                            return e(s[t](a(Infinity)));
                        }
                    }
                } catch (l) {
                    return false;
                }
            };
        },
        4979: function(t, e, r) {
            var i = r(6518);
            var n = r(4576);
            var a = r(7751);
            var s = r(6980);
            var o = r(4913).f;
            var l = r(9297);
            var u = r(679);
            var h = r(3167);
            var c = r(2603);
            var d = r(5002);
            var f = r(8574);
            var v = r(3724);
            var p = r(6395);
            var g = "DOMException";
            var m = a("Error");
            var y = a(g);
            var w = function I() {
                u(this, b);
                var t = arguments.length;
                var e = c(t < 1 ? undefined : arguments[0]);
                var r = c(t < 2 ? undefined : arguments[1], "Error");
                var i = new y(e, r);
                var n = new m(e);
                n.name = g;
                o(i, "stack", s(1, f(n.stack, 1)));
                h(i, this, w);
                return i;
            };
            var b = w.prototype = y.prototype;
            var A = "stack" in new m(g);
            var _ = "stack" in new y(1, 2);
            var k = y && v && Object.getOwnPropertyDescriptor(n, g);
            var x = !!k && !(k.writable && k.configurable);
            var E = A && !x && !_;
            i({
                global: true,
                constructor: true,
                forced: p || E
            }, {
                DOMException: E ? w : y
            });
            var S = a(g);
            var M = S.prototype;
            if (M.constructor !== S) {
                if (!p) {
                    o(M, "constructor", s(1, S));
                }
                for (var C in d) if (l(d, C)) {
                    var T = d[C];
                    var R = T.s;
                    if (!l(S, R)) {
                        o(S, R, s(6, T.c));
                    }
                }
            }
        },
        5002: function(t) {
            t.exports = {
                IndexSizeError: {
                    s: "INDEX_SIZE_ERR",
                    c: 1,
                    m: 1
                },
                DOMStringSizeError: {
                    s: "DOMSTRING_SIZE_ERR",
                    c: 2,
                    m: 0
                },
                HierarchyRequestError: {
                    s: "HIERARCHY_REQUEST_ERR",
                    c: 3,
                    m: 1
                },
                WrongDocumentError: {
                    s: "WRONG_DOCUMENT_ERR",
                    c: 4,
                    m: 1
                },
                InvalidCharacterError: {
                    s: "INVALID_CHARACTER_ERR",
                    c: 5,
                    m: 1
                },
                NoDataAllowedError: {
                    s: "NO_DATA_ALLOWED_ERR",
                    c: 6,
                    m: 0
                },
                NoModificationAllowedError: {
                    s: "NO_MODIFICATION_ALLOWED_ERR",
                    c: 7,
                    m: 1
                },
                NotFoundError: {
                    s: "NOT_FOUND_ERR",
                    c: 8,
                    m: 1
                },
                NotSupportedError: {
                    s: "NOT_SUPPORTED_ERR",
                    c: 9,
                    m: 1
                },
                InUseAttributeError: {
                    s: "INUSE_ATTRIBUTE_ERR",
                    c: 10,
                    m: 1
                },
                InvalidStateError: {
                    s: "INVALID_STATE_ERR",
                    c: 11,
                    m: 1
                },
                SyntaxError: {
                    s: "SYNTAX_ERR",
                    c: 12,
                    m: 1
                },
                InvalidModificationError: {
                    s: "INVALID_MODIFICATION_ERR",
                    c: 13,
                    m: 1
                },
                NamespaceError: {
                    s: "NAMESPACE_ERR",
                    c: 14,
                    m: 1
                },
                InvalidAccessError: {
                    s: "INVALID_ACCESS_ERR",
                    c: 15,
                    m: 1
                },
                ValidationError: {
                    s: "VALIDATION_ERR",
                    c: 16,
                    m: 0
                },
                TypeMismatchError: {
                    s: "TYPE_MISMATCH_ERR",
                    c: 17,
                    m: 1
                },
                SecurityError: {
                    s: "SECURITY_ERR",
                    c: 18,
                    m: 1
                },
                NetworkError: {
                    s: "NETWORK_ERR",
                    c: 19,
                    m: 1
                },
                AbortError: {
                    s: "ABORT_ERR",
                    c: 20,
                    m: 1
                },
                URLMismatchError: {
                    s: "URL_MISMATCH_ERR",
                    c: 21,
                    m: 1
                },
                QuotaExceededError: {
                    s: "QUOTA_EXCEEDED_ERR",
                    c: 22,
                    m: 1
                },
                TimeoutError: {
                    s: "TIMEOUT_ERR",
                    c: 23,
                    m: 1
                },
                InvalidNodeTypeError: {
                    s: "INVALID_NODE_TYPE_ERR",
                    c: 24,
                    m: 1
                },
                DataCloneError: {
                    s: "DATA_CLONE_ERR",
                    c: 25,
                    m: 1
                }
            };
        },
        5024: function(t, e, r) {
            var i = r(6518);
            var n = r(3650);
            var a = r(9835);
            var s = r(4916);
            var o = !s("symmetricDifference") || !a("symmetricDifference");
            i({
                target: "Set",
                proto: true,
                real: true,
                forced: o
            }, {
                symmetricDifference: n
            });
        },
        5031: function(t, e, r) {
            var i = r(7751);
            var n = r(9504);
            var a = r(8480);
            var s = r(3717);
            var o = r(8551);
            var l = n([].concat);
            t.exports = i("Reflect", "ownKeys") || function u(t) {
                var e = a.f(o(t));
                var r = s.f;
                return r ? l(e, r(t)) : e;
            };
        },
        5169: function(t, e, r) {
            var i = r(3238);
            var n = TypeError;
            t.exports = function(t) {
                if (i(t)) throw new n("ArrayBuffer is detached");
                return t;
            };
        },
        5170: function(t, e, r) {
            var i = r(6706);
            var n = r(4402);
            t.exports = i(n.proto, "size", "get") || function(t) {
                return t.size;
            };
        },
        5370: function(t, e, r) {
            var i = r(6198);
            t.exports = function(t, e, r) {
                var n = 0;
                var a = arguments.length > 2 ? r : i(e);
                var s = new t(a);
                while (a > n) s[n] = e[n++];
                return s;
            };
        },
        5397: function(t, e, r) {
            var i = r(7055);
            var n = r(7750);
            t.exports = function(t) {
                return i(n(t));
            };
        },
        5610: function(t, e, r) {
            var i = r(1291);
            var n = Math.max;
            var a = Math.min;
            t.exports = function(t, e) {
                var r = i(t);
                return r < 0 ? n(r + e, 0) : a(r, e);
            };
        },
        5623: function(t, e, r) {
            var i = r(6518);
            var n = r(4576);
            var a = r(9504);
            var s = r(4154);
            var o = r(5169);
            var l = a(1.1.toString);
            var u = n.Uint8Array;
            var h = !u || !u.prototype.toHex || !function() {
                try {
                    var t = new u([ 255, 255, 255, 255, 255, 255, 255, 255 ]);
                    return t.toHex() === "ffffffffffffffff";
                } catch (e) {
                    return false;
                }
            }();
            if (u) i({
                target: "Uint8Array",
                proto: true,
                forced: h
            }, {
                toHex: function c() {
                    s(this);
                    o(this.buffer);
                    var t = "";
                    for (var e = 0, r = this.length; e < r; e++) {
                        var i = l(this[e], 16);
                        t += i.length === 1 ? "0" + i : i;
                    }
                    return t;
                }
            });
        },
        5636: function(t, e, r) {
            var i = r(4576);
            var n = r(9504);
            var a = r(6706);
            var s = r(7696);
            var o = r(5169);
            var l = r(7394);
            var u = r(4483);
            var h = r(1548);
            var c = i.structuredClone;
            var d = i.ArrayBuffer;
            var f = i.DataView;
            var v = Math.min;
            var p = d.prototype;
            var g = f.prototype;
            var m = n(p.slice);
            var y = a(p, "resizable", "get");
            var w = a(p, "maxByteLength", "get");
            var b = n(g.getInt8);
            var A = n(g.setInt8);
            t.exports = (h || u) && function(t, e, r) {
                var i = l(t);
                var n = e === undefined ? i : s(e);
                var a = !y || !y(t);
                var p;
                o(t);
                if (h) {
                    t = c(t, {
                        transfer: [ t ]
                    });
                    if (i === n && (r || a)) return t;
                }
                if (i >= n && (!r || a)) {
                    p = m(t, 0, n);
                } else {
                    var g = r && !a && w ? {
                        maxByteLength: w(t)
                    } : undefined;
                    p = new d(n, g);
                    var _ = new f(t);
                    var k = new f(p);
                    var x = v(n, i);
                    for (var E = 0; E < x; E++) A(k, E, b(_, E));
                }
                if (!h) u(t);
                return p;
            };
        },
        5745: function(t, e, r) {
            var i = r(7629);
            t.exports = function(t, e) {
                return i[t] || (i[t] = e || {});
            };
        },
        5781: function(t, e, r) {
            var i = r(6518);
            var n = r(7751);
            var a = r(2812);
            var s = r(655);
            var o = r(7416);
            var l = n("URL");
            i({
                target: "URL",
                stat: true,
                forced: !o
            }, {
                parse: function u(t) {
                    var e = a(arguments.length, 1);
                    var r = s(t);
                    var i = e < 2 || arguments[1] === undefined ? undefined : s(arguments[1]);
                    try {
                        return new l(r, i);
                    } catch (n) {
                        return null;
                    }
                }
            });
        },
        5854: function(t, e, r) {
            var i = r(2777);
            var n = TypeError;
            t.exports = function(t) {
                var e = i(t, "number");
                if (typeof e == "number") throw new n("Can't convert number to bigint");
                return BigInt(e);
            };
        },
        5876: function(t, e, r) {
            var i = r(6518);
            var n = r(3838);
            var a = r(4916);
            var s = !a("isSubsetOf", (function(t) {
                return t;
            }));
            i({
                target: "Set",
                proto: true,
                real: true,
                forced: s
            }, {
                isSubsetOf: n
            });
        },
        5917: function(t, e, r) {
            var i = r(3724);
            var n = r(9039);
            var a = r(4055);
            t.exports = !i && !n((function() {
                return Object.defineProperty(a("div"), "a", {
                    get: function() {
                        return 7;
                    }
                }).a !== 7;
            }));
        },
        5966: function(t, e, r) {
            var i = r(9306);
            var n = r(4117);
            t.exports = function(t, e) {
                var r = t[e];
                return n(r) ? undefined : i(r);
            };
        },
        6043: function(t, e, r) {
            var i = r(9306);
            var n = TypeError;
            var a = function(t) {
                var e, r;
                this.promise = new t((function(t, i) {
                    if (e !== undefined || r !== undefined) throw new n("Bad Promise constructor");
                    e = t;
                    r = i;
                }));
                this.resolve = i(e);
                this.reject = i(r);
            };
            t.exports.f = function(t) {
                return new a(t);
            };
        },
        6080: function(t, e, r) {
            var i = r(7476);
            var n = r(9306);
            var a = r(616);
            var s = i(i.bind);
            t.exports = function(t, e) {
                n(t);
                return e === undefined ? t : a ? s(t, e) : function() {
                    return t.apply(e, arguments);
                };
            };
        },
        6119: function(t, e, r) {
            var i = r(5745);
            var n = r(3392);
            var a = i("keys");
            t.exports = function(t) {
                return a[t] || (a[t] = n(t));
            };
        },
        6193: function(t, e, r) {
            var i = r(4215);
            t.exports = i === "NODE";
        },
        6198: function(t, e, r) {
            var i = r(8014);
            t.exports = function(t) {
                return i(t.length);
            };
        },
        6269: function(t) {
            t.exports = {};
        },
        6279: function(t, e, r) {
            var i = r(6840);
            t.exports = function(t, e, r) {
                for (var n in e) i(t, n, e[n], r);
                return t;
            };
        },
        6319: function(t, e, r) {
            var i = r(8551);
            var n = r(9539);
            t.exports = function(t, e, r, a) {
                try {
                    return a ? e(i(r)[0], r[1]) : e(r);
                } catch (s) {
                    n(t, "throw", s);
                }
            };
        },
        6395: function(t) {
            t.exports = false;
        },
        6518: function(t, e, r) {
            var i = r(4576);
            var n = r(7347).f;
            var a = r(6699);
            var s = r(6840);
            var o = r(9433);
            var l = r(7740);
            var u = r(2796);
            t.exports = function(t, e) {
                var r = t.target;
                var h = t.global;
                var c = t.stat;
                var d, f, v, p, g, m;
                if (h) {
                    f = i;
                } else if (c) {
                    f = i[r] || o(r, {});
                } else {
                    f = i[r] && i[r].prototype;
                }
                if (f) for (v in e) {
                    g = e[v];
                    if (t.dontCallGetSet) {
                        m = n(f, v);
                        p = m && m.value;
                    } else p = f[v];
                    d = u(h ? v : r + (c ? "." : "#") + v, t.forced);
                    if (!d && p !== undefined) {
                        if (typeof g == typeof p) continue;
                        l(g, p);
                    }
                    if (t.sham || p && p.sham) {
                        a(g, "sham", true);
                    }
                    s(f, v, g, t);
                }
            };
        },
        6573: function(t, e, r) {
            var i = r(3724);
            var n = r(2106);
            var a = r(3238);
            var s = ArrayBuffer.prototype;
            if (i && !("detached" in s)) {
                n(s, "detached", {
                    configurable: true,
                    get: function t() {
                        return a(this);
                    }
                });
            }
        },
        6699: function(t, e, r) {
            var i = r(3724);
            var n = r(4913);
            var a = r(6980);
            t.exports = i ? function(t, e, r) {
                return n.f(t, e, a(1, r));
            } : function(t, e, r) {
                t[e] = r;
                return t;
            };
        },
        6706: function(t, e, r) {
            var i = r(9504);
            var n = r(9306);
            t.exports = function(t, e, r) {
                try {
                    return i(n(Object.getOwnPropertyDescriptor(t, e)[r]));
                } catch (a) {}
            };
        },
        6801: function(t, e, r) {
            var i = r(3724);
            var n = r(8686);
            var a = r(4913);
            var s = r(8551);
            var o = r(5397);
            var l = r(1072);
            e.f = i && !n ? Object.defineProperties : function u(t, e) {
                s(t);
                var r = o(e);
                var i = l(e);
                var n = i.length;
                var u = 0;
                var h;
                while (n > u) a.f(t, h = i[u++], r[h]);
                return t;
            };
        },
        6823: function(t) {
            var e = String;
            t.exports = function(t) {
                try {
                    return e(t);
                } catch (r) {
                    return "Object";
                }
            };
        },
        6837: function(t) {
            var e = TypeError;
            var r = 9007199254740991;
            t.exports = function(t) {
                if (t > r) throw e("Maximum allowed index exceeded");
                return t;
            };
        },
        6840: function(t, e, r) {
            var i = r(4901);
            var n = r(4913);
            var a = r(283);
            var s = r(9433);
            t.exports = function(t, e, r, o) {
                if (!o) o = {};
                var l = o.enumerable;
                var u = o.name !== undefined ? o.name : e;
                if (i(r)) a(r, u, o);
                if (o.global) {
                    if (l) t[e] = r; else s(e, r);
                } else {
                    try {
                        if (!o.unsafe) delete t[e]; else if (t[e]) l = true;
                    } catch (h) {}
                    if (l) t[e] = r; else n.f(t, e, {
                        value: r,
                        enumerable: false,
                        configurable: !o.nonConfigurable,
                        writable: !o.nonWritable
                    });
                }
                return t;
            };
        },
        6955: function(t, e, r) {
            var i = r(2140);
            var n = r(4901);
            var a = r(2195);
            var s = r(8227);
            var o = s("toStringTag");
            var l = Object;
            var u = a(function() {
                return arguments;
            }()) === "Arguments";
            var h = function(t, e) {
                try {
                    return t[e];
                } catch (r) {}
            };
            t.exports = i ? a : function(t) {
                var e, r, i;
                return t === undefined ? "Undefined" : t === null ? "Null" : typeof (r = h(e = l(t), o)) == "string" ? r : u ? a(e) : (i = a(e)) === "Object" && n(e.callee) ? "Arguments" : i;
            };
        },
        6969: function(t, e, r) {
            var i = r(2777);
            var n = r(757);
            t.exports = function(t) {
                var e = i(t, "string");
                return n(e) ? e : e + "";
            };
        },
        6980: function(t) {
            t.exports = function(t, e) {
                return {
                    enumerable: !(t & 1),
                    configurable: !(t & 2),
                    writable: !(t & 4),
                    value: e
                };
            };
        },
        7040: function(t, e, r) {
            var i = r(4495);
            t.exports = i && !Symbol.sham && typeof Symbol.iterator == "symbol";
        },
        7055: function(t, e, r) {
            var i = r(9504);
            var n = r(9039);
            var a = r(2195);
            var s = Object;
            var o = i("".split);
            t.exports = n((function() {
                return !s("z").propertyIsEnumerable(0);
            })) ? function(t) {
                return a(t) === "String" ? o(t, "") : s(t);
            } : s;
        },
        7080: function(t, e, r) {
            var i = r(4402).has;
            t.exports = function(t) {
                i(t);
                return t;
            };
        },
        7347: function(t, e, r) {
            var i = r(3724);
            var n = r(9565);
            var a = r(8773);
            var s = r(6980);
            var o = r(5397);
            var l = r(6969);
            var u = r(9297);
            var h = r(5917);
            var c = Object.getOwnPropertyDescriptor;
            e.f = i ? c : function d(t, e) {
                t = o(t);
                e = l(e);
                if (h) try {
                    return c(t, e);
                } catch (r) {}
                if (u(t, e)) return s(!n(a.f, t, e), t[e]);
            };
        },
        7394: function(t, e, r) {
            var i = r(4576);
            var n = r(6706);
            var a = r(2195);
            var s = i.ArrayBuffer;
            var o = i.TypeError;
            t.exports = s && n(s.prototype, "byteLength", "get") || function(t) {
                if (a(t) !== "ArrayBuffer") throw new o("ArrayBuffer expected");
                return t.byteLength;
            };
        },
        7416: function(t, e, r) {
            var i = r(9039);
            var n = r(8227);
            var a = r(3724);
            var s = r(6395);
            var o = n("iterator");
            t.exports = !i((function() {
                var t = new URL("b?a=1&b=2&c=3", "https://a");
                var e = t.searchParams;
                var r = new URLSearchParams("a=1&a=2&b=3");
                var i = "";
                t.pathname = "c%20d";
                e.forEach((function(t, r) {
                    e["delete"]("b");
                    i += r + t;
                }));
                r["delete"]("a", 2);
                r["delete"]("b", undefined);
                return s && (!t.toJSON || !r.has("a", 1) || r.has("a", 2) || !r.has("a", undefined) || r.has("b")) || !e.size && (s || !a) || !e.sort || t.href !== "https://a/c%20d?a=1&c=3" || e.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !e[o] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("https://тест").host !== "xn--e1aybc" || new URL("https://a#б").hash !== "#%D0%B1" || i !== "a1c3" || new URL("https://x", undefined).host !== "x";
            }));
        },
        7476: function(t, e, r) {
            var i = r(2195);
            var n = r(9504);
            t.exports = function(t) {
                if (i(t) === "Function") return n(t);
            };
        },
        7566: function(t, e, r) {
            var i = r(6840);
            var n = r(9504);
            var a = r(655);
            var s = r(2812);
            var o = URLSearchParams;
            var l = o.prototype;
            var u = n(l.getAll);
            var h = n(l.has);
            var c = new o("a=1");
            if (c.has("a", 2) || !c.has("a", undefined)) {
                i(l, "has", (function t(e) {
                    var r = arguments.length;
                    var i = r < 2 ? undefined : arguments[1];
                    if (r && i === undefined) return h(this, e);
                    var n = u(this, e);
                    s(r, 1);
                    var o = a(i);
                    var l = 0;
                    while (l < n.length) {
                        if (n[l++] === o) return true;
                    }
                    return false;
                }), {
                    enumerable: true,
                    unsafe: true
                });
            }
        },
        7629: function(t, e, r) {
            var i = r(6395);
            var n = r(4576);
            var a = r(9433);
            var s = "__core-js_shared__";
            var o = t.exports = n[s] || a(s, {});
            (o.versions || (o.versions = [])).push({
                version: "3.44.0",
                mode: i ? "pure" : "global",
                copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.44.0/LICENSE",
                source: "https://github.com/zloirock/core-js"
            });
        },
        7642: function(t, e, r) {
            var i = r(6518);
            var n = r(3440);
            var a = r(9039);
            var s = r(4916);
            var o = !s("difference", (function(t) {
                return t.size === 0;
            }));
            var l = o || a((function() {
                var t = {
                    size: 1,
                    has: function() {
                        return true;
                    },
                    keys: function() {
                        var t = 0;
                        return {
                            next: function() {
                                var r = t++ > 1;
                                if (e.has(1)) e.clear();
                                return {
                                    done: r,
                                    value: 2
                                };
                            }
                        };
                    }
                };
                var e = new Set([ 1, 2, 3, 4 ]);
                return e.difference(t).size !== 3;
            }));
            i({
                target: "Set",
                proto: true,
                real: true,
                forced: l
            }, {
                difference: n
            });
        },
        7657: function(t, e, r) {
            var i = r(9039);
            var n = r(4901);
            var a = r(34);
            var s = r(2360);
            var o = r(2787);
            var l = r(6840);
            var u = r(8227);
            var h = r(6395);
            var c = u("iterator");
            var d = false;
            var f, v, p;
            if ([].keys) {
                p = [].keys();
                if (!("next" in p)) d = true; else {
                    v = o(o(p));
                    if (v !== Object.prototype) f = v;
                }
            }
            var g = !a(f) || i((function() {
                var t = {};
                return f[c].call(t) !== t;
            }));
            if (g) f = {}; else if (h) f = s(f);
            if (!n(f[c])) {
                l(f, c, (function() {
                    return this;
                }));
            }
            t.exports = {
                IteratorPrototype: f,
                BUGGY_SAFARI_ITERATORS: d
            };
        },
        7680: function(t, e, r) {
            var i = r(9504);
            t.exports = i([].slice);
        },
        7696: function(t, e, r) {
            var i = r(1291);
            var n = r(8014);
            var a = RangeError;
            t.exports = function(t) {
                if (t === undefined) return 0;
                var e = i(t);
                var r = n(e);
                if (e !== r) throw new a("Wrong length or index");
                return r;
            };
        },
        7740: function(t, e, r) {
            var i = r(9297);
            var n = r(5031);
            var a = r(7347);
            var s = r(4913);
            t.exports = function(t, e, r) {
                var o = n(e);
                var l = s.f;
                var u = a.f;
                for (var h = 0; h < o.length; h++) {
                    var c = o[h];
                    if (!i(t, c) && !(r && i(r, c))) {
                        l(t, c, u(e, c));
                    }
                }
            };
        },
        7750: function(t, e, r) {
            var i = r(4117);
            var n = TypeError;
            t.exports = function(t) {
                if (i(t)) throw new n("Can't call method on " + t);
                return t;
            };
        },
        7751: function(t, e, r) {
            var i = r(4576);
            var n = r(4901);
            var a = function(t) {
                return n(t) ? t : undefined;
            };
            t.exports = function(t, e) {
                return arguments.length < 2 ? a(i[t]) : i[t] && i[t][e];
            };
        },
        7811: function(t) {
            t.exports = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined";
        },
        7936: function(t, e, r) {
            var i = r(6518);
            var n = r(5636);
            if (n) i({
                target: "ArrayBuffer",
                proto: true
            }, {
                transferToFixedLength: function a() {
                    return n(this, arguments.length ? arguments[0] : undefined, false);
                }
            });
        },
        8004: function(t, e, r) {
            var i = r(6518);
            var n = r(9039);
            var a = r(8750);
            var s = r(4916);
            var o = !s("intersection", (function(t) {
                return t.size === 2 && t.has(1) && t.has(2);
            })) || n((function() {
                return String(Array.from(new Set([ 1, 2, 3 ]).intersection(new Set([ 3, 2 ])))) !== "3,2";
            }));
            i({
                target: "Set",
                proto: true,
                real: true,
                forced: o
            }, {
                intersection: a
            });
        },
        8014: function(t, e, r) {
            var i = r(1291);
            var n = Math.min;
            t.exports = function(t) {
                var e = i(t);
                return e > 0 ? n(e, 9007199254740991) : 0;
            };
        },
        8100: function(t, e, r) {
            var i = r(6518);
            var n = r(5636);
            if (n) i({
                target: "ArrayBuffer",
                proto: true
            }, {
                transfer: function a() {
                    return n(this, arguments.length ? arguments[0] : undefined, true);
                }
            });
        },
        8111: function(t, e, r) {
            var i = r(6518);
            var n = r(4576);
            var a = r(679);
            var s = r(8551);
            var o = r(4901);
            var l = r(2787);
            var u = r(2106);
            var h = r(4659);
            var c = r(9039);
            var d = r(9297);
            var f = r(8227);
            var v = r(7657).IteratorPrototype;
            var p = r(3724);
            var g = r(6395);
            var m = "constructor";
            var y = "Iterator";
            var w = f("toStringTag");
            var b = TypeError;
            var A = n[y];
            var _ = g || !o(A) || A.prototype !== v || !c((function() {
                A({});
            }));
            var k = function E() {
                a(this, v);
                if (l(this) === v) throw new b("Abstract class Iterator not directly constructable");
            };
            var x = function(t, e) {
                if (p) {
                    u(v, t, {
                        configurable: true,
                        get: function() {
                            return e;
                        },
                        set: function(e) {
                            s(this);
                            if (this === v) throw new b("You can't redefine this property");
                            if (d(this, t)) this[t] = e; else h(this, t, e);
                        }
                    });
                } else v[t] = e;
            };
            if (!d(v, w)) x(w, y);
            if (_ || !d(v, m) || v[m] === Object) {
                x(m, k);
            }
            k.prototype = v;
            i({
                global: true,
                constructor: true,
                forced: _
            }, {
                Iterator: k
            });
        },
        8227: function(t, e, r) {
            var i = r(4576);
            var n = r(5745);
            var a = r(9297);
            var s = r(3392);
            var o = r(4495);
            var l = r(7040);
            var u = i.Symbol;
            var h = n("wks");
            var c = l ? u["for"] || u : u && u.withoutSetter || s;
            t.exports = function(t) {
                if (!a(h, t)) {
                    h[t] = o && a(u, t) ? u[t] : c("Symbol." + t);
                }
                return h[t];
            };
        },
        8235: function(t, e, r) {
            var i = r(9504);
            var n = r(9297);
            var a = SyntaxError;
            var s = parseInt;
            var o = String.fromCharCode;
            var l = i("".charAt);
            var u = i("".slice);
            var h = i(/./.exec);
            var c = {
                '\\"': '"',
                "\\\\": "\\",
                "\\/": "/",
                "\\b": "\b",
                "\\f": "\f",
                "\\n": "\n",
                "\\r": "\r",
                "\\t": "\t"
            };
            var d = /^[\da-f]{4}$/i;
            var f = /^[\u0000-\u001F]$/;
            t.exports = function(t, e) {
                var r = true;
                var i = "";
                while (e < t.length) {
                    var v = l(t, e);
                    if (v === "\\") {
                        var p = u(t, e, e + 2);
                        if (n(c, p)) {
                            i += c[p];
                            e += 2;
                        } else if (p === "\\u") {
                            e += 2;
                            var g = u(t, e, e + 4);
                            if (!h(d, g)) throw new a("Bad Unicode escape at: " + e);
                            i += o(s(g, 16));
                            e += 4;
                        } else throw new a('Unknown escape sequence: "' + p + '"');
                    } else if (v === '"') {
                        r = false;
                        e++;
                        break;
                    } else {
                        if (h(f, v)) throw new a("Bad control character in string literal at: " + e);
                        i += v;
                        e++;
                    }
                }
                if (r) throw new a("Unterminated string at: " + e);
                return {
                    value: i,
                    end: e
                };
            };
        },
        8237: function(t, e, r) {
            var i = r(6518);
            var n = r(2652);
            var a = r(9306);
            var s = r(8551);
            var o = r(1767);
            var l = r(9539);
            var u = r(4549);
            var h = r(8745);
            var c = r(9039);
            var d = TypeError;
            var f = c((function() {
                [].keys().reduce((function() {}), undefined);
            }));
            var v = !f && u("reduce", d);
            i({
                target: "Iterator",
                proto: true,
                real: true,
                forced: f || v
            }, {
                reduce: function p(t) {
                    s(this);
                    try {
                        a(t);
                    } catch (c) {
                        l(this, "throw", c);
                    }
                    var e = arguments.length < 2;
                    var r = e ? undefined : arguments[1];
                    if (v) {
                        return h(v, this, e ? [ t ] : [ t, r ]);
                    }
                    var i = o(this);
                    var u = 0;
                    n(i, (function(i) {
                        if (e) {
                            e = false;
                            r = i;
                        } else {
                            r = t(r, i, u);
                        }
                        u++;
                    }), {
                        IS_RECORD: true
                    });
                    if (e) throw new d("Reduce of empty iterator with no initial value");
                    return r;
                }
            });
        },
        8335: function(t, e, r) {
            var i = r(6518);
            var n = r(3724);
            var a = r(4576);
            var s = r(7751);
            var o = r(9504);
            var l = r(9565);
            var u = r(4901);
            var h = r(34);
            var c = r(4376);
            var d = r(9297);
            var f = r(655);
            var v = r(6198);
            var p = r(4659);
            var g = r(9039);
            var m = r(8235);
            var y = r(4495);
            var w = a.JSON;
            var b = a.Number;
            var A = a.SyntaxError;
            var _ = w && w.parse;
            var k = s("Object", "keys");
            var x = Object.getOwnPropertyDescriptor;
            var E = o("".charAt);
            var S = o("".slice);
            var M = o(/./.exec);
            var C = o([].push);
            var T = /^\d$/;
            var R = /^[1-9]$/;
            var I = /^[\d-]$/;
            var P = /^[\t\n\r ]$/;
            var L = 0;
            var D = 1;
            var N = function(t, e) {
                t = f(t);
                var r = new B(t, 0);
                var i = r.parse();
                var n = i.value;
                var a = r.skip(P, i.end);
                if (a < t.length) {
                    throw new A('Unexpected extra character: "' + E(t, a) + '" after the parsed data at: ' + a);
                }
                return u(e) ? O({
                    "": n
                }, "", e, i) : n;
            };
            var O = function(t, e, r, i) {
                var n = t[e];
                var a = i && n === i.value;
                var s = a && typeof i.source == "string" ? {
                    source: i.source
                } : {};
                var o, u, f, p, g;
                if (h(n)) {
                    var m = c(n);
                    var y = a ? i.nodes : m ? [] : {};
                    if (m) {
                        o = y.length;
                        f = v(n);
                        for (p = 0; p < f; p++) {
                            F(n, p, O(n, "" + p, r, p < o ? y[p] : undefined));
                        }
                    } else {
                        u = k(n);
                        f = v(u);
                        for (p = 0; p < f; p++) {
                            g = u[p];
                            F(n, g, O(n, g, r, d(y, g) ? y[g] : undefined));
                        }
                    }
                }
                return l(r, t, e, n, s);
            };
            var F = function(t, e, r) {
                if (n) {
                    var i = x(t, e);
                    if (i && !i.configurable) return;
                }
                if (r === undefined) delete t[e]; else p(t, e, r);
            };
            var W = function(t, e, r, i) {
                this.value = t;
                this.end = e;
                this.source = r;
                this.nodes = i;
            };
            var B = function(t, e) {
                this.source = t;
                this.index = e;
            };
            B.prototype = {
                fork: function(t) {
                    return new B(this.source, t);
                },
                parse: function() {
                    var t = this.source;
                    var e = this.skip(P, this.index);
                    var r = this.fork(e);
                    var i = E(t, e);
                    if (M(I, i)) return r.number();
                    switch (i) {
                      case "{":
                        return r.object();

                      case "[":
                        return r.array();

                      case '"':
                        return r.string();

                      case "t":
                        return r.keyword(true);

                      case "f":
                        return r.keyword(false);

                      case "n":
                        return r.keyword(null);
                    }
                    throw new A('Unexpected character: "' + i + '" at: ' + e);
                },
                node: function(t, e, r, i, n) {
                    return new W(e, i, t ? null : S(this.source, r, i), n);
                },
                object: function() {
                    var t = this.source;
                    var e = this.index + 1;
                    var r = false;
                    var i = {};
                    var n = {};
                    while (e < t.length) {
                        e = this.until([ '"', "}" ], e);
                        if (E(t, e) === "}" && !r) {
                            e++;
                            break;
                        }
                        var a = this.fork(e).string();
                        var s = a.value;
                        e = a.end;
                        e = this.until([ ":" ], e) + 1;
                        e = this.skip(P, e);
                        a = this.fork(e).parse();
                        p(n, s, a);
                        p(i, s, a.value);
                        e = this.until([ ",", "}" ], a.end);
                        var o = E(t, e);
                        if (o === ",") {
                            r = true;
                            e++;
                        } else if (o === "}") {
                            e++;
                            break;
                        }
                    }
                    return this.node(D, i, this.index, e, n);
                },
                array: function() {
                    var t = this.source;
                    var e = this.index + 1;
                    var r = false;
                    var i = [];
                    var n = [];
                    while (e < t.length) {
                        e = this.skip(P, e);
                        if (E(t, e) === "]" && !r) {
                            e++;
                            break;
                        }
                        var a = this.fork(e).parse();
                        C(n, a);
                        C(i, a.value);
                        e = this.until([ ",", "]" ], a.end);
                        if (E(t, e) === ",") {
                            r = true;
                            e++;
                        } else if (E(t, e) === "]") {
                            e++;
                            break;
                        }
                    }
                    return this.node(D, i, this.index, e, n);
                },
                string: function() {
                    var t = this.index;
                    var e = m(this.source, this.index + 1);
                    return this.node(L, e.value, t, e.end);
                },
                number: function() {
                    var t = this.source;
                    var e = this.index;
                    var r = e;
                    if (E(t, r) === "-") r++;
                    if (E(t, r) === "0") r++; else if (M(R, E(t, r))) r = this.skip(T, r + 1); else throw new A("Failed to parse number at: " + r);
                    if (E(t, r) === ".") r = this.skip(T, r + 1);
                    if (E(t, r) === "e" || E(t, r) === "E") {
                        r++;
                        if (E(t, r) === "+" || E(t, r) === "-") r++;
                        var i = r;
                        r = this.skip(T, r);
                        if (i === r) throw new A("Failed to parse number's exponent value at: " + r);
                    }
                    return this.node(L, b(S(t, e, r)), e, r);
                },
                keyword: function(t) {
                    var e = "" + t;
                    var r = this.index;
                    var i = r + e.length;
                    if (S(this.source, r, i) !== e) throw new A("Failed to parse value at: " + r);
                    return this.node(L, t, r, i);
                },
                skip: function(t, e) {
                    var r = this.source;
                    for (;e < r.length; e++) if (!M(t, E(r, e))) break;
                    return e;
                },
                until: function(t, e) {
                    e = this.skip(P, e);
                    var r = E(this.source, e);
                    for (var i = 0; i < t.length; i++) if (t[i] === r) return e;
                    throw new A('Unexpected character: "' + r + '" at: ' + e);
                }
            };
            var j = g((function() {
                var t = "9007199254740993";
                var e;
                _(t, (function(t, r, i) {
                    e = i.source;
                }));
                return e !== t;
            }));
            var H = y && !g((function() {
                return 1 / _("-0 \t") !== -Infinity;
            }));
            i({
                target: "JSON",
                stat: true,
                forced: j
            }, {
                parse: function U(t, e) {
                    return H && !u(e) ? _(t) : N(t, e);
                }
            });
        },
        8469: function(t, e, r) {
            var i = r(9504);
            var n = r(507);
            var a = r(4402);
            var s = a.Set;
            var o = a.proto;
            var l = i(o.forEach);
            var u = i(o.keys);
            var h = u(new s).next;
            t.exports = function(t, e, r) {
                return r ? n({
                    iterator: u(t),
                    next: h
                }, e) : l(t, e);
            };
        },
        8480: function(t, e, r) {
            var i = r(1828);
            var n = r(8727);
            var a = n.concat("length", "prototype");
            e.f = Object.getOwnPropertyNames || function s(t) {
                return i(t, a);
            };
        },
        8527: function(t, e, r) {
            var i = r(7080);
            var n = r(4402).has;
            var a = r(5170);
            var s = r(3789);
            var o = r(507);
            var l = r(9539);
            t.exports = function u(t) {
                var e = i(this);
                var r = s(t);
                if (a(e) < r.size) return false;
                var u = r.getIterator();
                return o(u, (function(t) {
                    if (!n(e, t)) return l(u, "normal", false);
                })) !== false;
            };
        },
        8551: function(t, e, r) {
            var i = r(34);
            var n = String;
            var a = TypeError;
            t.exports = function(t) {
                if (i(t)) return t;
                throw new a(n(t) + " is not an object");
            };
        },
        8574: function(t, e, r) {
            var i = r(9504);
            var n = Error;
            var a = i("".replace);
            var s = function(t) {
                return String(new n(t).stack);
            }("zxcasd");
            var o = /\n\s*at [^:]*:[^\n]*/;
            var l = o.test(s);
            t.exports = function(t, e) {
                if (l && typeof t == "string" && !n.prepareStackTrace) {
                    while (e--) t = a(t, o, "");
                }
                return t;
            };
        },
        8622: function(t, e, r) {
            var i = r(4576);
            var n = r(4901);
            var a = i.WeakMap;
            t.exports = n(a) && /native code/.test(String(a));
        },
        8646: function(t, e, r) {
            var i = r(9565);
            var n = r(8551);
            var a = r(1767);
            var s = r(851);
            t.exports = function(t, e) {
                if (!e || typeof t !== "string") n(t);
                var r = s(t);
                return a(n(r !== undefined ? i(r, t) : t));
            };
        },
        8686: function(t, e, r) {
            var i = r(3724);
            var n = r(9039);
            t.exports = i && n((function() {
                return Object.defineProperty((function() {}), "prototype", {
                    value: 42,
                    writable: false
                }).prototype !== 42;
            }));
        },
        8721: function(t, e, r) {
            var i = r(3724);
            var n = r(9504);
            var a = r(2106);
            var s = URLSearchParams.prototype;
            var o = n(s.forEach);
            if (i && !("size" in s)) {
                a(s, "size", {
                    get: function t() {
                        var t = 0;
                        o(this, (function() {
                            t++;
                        }));
                        return t;
                    },
                    configurable: true,
                    enumerable: true
                });
            }
        },
        8727: function(t) {
            t.exports = [ "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
        },
        8745: function(t, e, r) {
            var i = r(616);
            var n = Function.prototype;
            var a = n.apply;
            var s = n.call;
            t.exports = typeof Reflect == "object" && Reflect.apply || (i ? s.bind(a) : function() {
                return s.apply(a, arguments);
            });
        },
        8750: function(t, e, r) {
            var i = r(7080);
            var n = r(4402);
            var a = r(5170);
            var s = r(3789);
            var o = r(8469);
            var l = r(507);
            var u = n.Set;
            var h = n.add;
            var c = n.has;
            t.exports = function d(t) {
                var e = i(this);
                var r = s(t);
                var n = new u;
                if (a(e) > r.size) {
                    l(r.getIterator(), (function(t) {
                        if (c(e, t)) h(n, t);
                    }));
                } else {
                    o(e, (function(t) {
                        if (r.includes(t)) h(n, t);
                    }));
                }
                return n;
            };
        },
        8773: function(t, e) {
            var r = {}.propertyIsEnumerable;
            var i = Object.getOwnPropertyDescriptor;
            var n = i && !r.call({
                1: 2
            }, 1);
            e.f = n ? function a(t) {
                var e = i(this, t);
                return !!e && e.enumerable;
            } : r;
        },
        8981: function(t, e, r) {
            var i = r(7750);
            var n = Object;
            t.exports = function(t) {
                return n(i(t));
            };
        },
        9039: function(t) {
            t.exports = function(t) {
                try {
                    return !!t();
                } catch (e) {
                    return true;
                }
            };
        },
        9143: function(t, e, r) {
            var i = r(4576);
            var n = r(9504);
            var a = r(3972);
            var s = r(3463);
            var o = r(9297);
            var l = r(2804);
            var u = r(944);
            var h = r(5169);
            var c = l.c2i;
            var d = l.c2iUrl;
            var f = i.SyntaxError;
            var v = i.TypeError;
            var p = n("".charAt);
            var g = function(t, e) {
                var r = t.length;
                for (;e < r; e++) {
                    var i = p(t, e);
                    if (i !== " " && i !== "\t" && i !== "\n" && i !== "\f" && i !== "\r") break;
                }
                return e;
            };
            var m = function(t, e, r) {
                var i = t.length;
                if (i < 4) {
                    t += i === 2 ? "AA" : "A";
                }
                var n = (e[p(t, 0)] << 18) + (e[p(t, 1)] << 12) + (e[p(t, 2)] << 6) + e[p(t, 3)];
                var a = [ n >> 16 & 255, n >> 8 & 255, n & 255 ];
                if (i === 2) {
                    if (r && a[1] !== 0) {
                        throw new f("Extra bits");
                    }
                    return [ a[0] ];
                }
                if (i === 3) {
                    if (r && a[2] !== 0) {
                        throw new f("Extra bits");
                    }
                    return [ a[0], a[1] ];
                }
                return a;
            };
            var y = function(t, e, r) {
                var i = e.length;
                for (var n = 0; n < i; n++) {
                    t[r + n] = e[n];
                }
                return r + i;
            };
            t.exports = function(t, e, r, i) {
                s(t);
                a(e);
                var n = u(e) === "base64" ? c : d;
                var l = e ? e.lastChunkHandling : undefined;
                if (l === undefined) l = "loose";
                if (l !== "loose" && l !== "strict" && l !== "stop-before-partial") {
                    throw new v("Incorrect `lastChunkHandling` option");
                }
                if (r) h(r.buffer);
                var w = r || [];
                var b = 0;
                var A = 0;
                var _ = "";
                var k = 0;
                if (i) while (true) {
                    k = g(t, k);
                    if (k === t.length) {
                        if (_.length > 0) {
                            if (l === "stop-before-partial") {
                                break;
                            }
                            if (l === "loose") {
                                if (_.length === 1) {
                                    throw new f("Malformed padding: exactly one additional character");
                                }
                                b = y(w, m(_, n, false), b);
                            } else {
                                throw new f("Missing padding");
                            }
                        }
                        A = t.length;
                        break;
                    }
                    var x = p(t, k);
                    ++k;
                    if (x === "=") {
                        if (_.length < 2) {
                            throw new f("Padding is too early");
                        }
                        k = g(t, k);
                        if (_.length === 2) {
                            if (k === t.length) {
                                if (l === "stop-before-partial") {
                                    break;
                                }
                                throw new f("Malformed padding: only one =");
                            }
                            if (p(t, k) === "=") {
                                ++k;
                                k = g(t, k);
                            }
                        }
                        if (k < t.length) {
                            throw new f("Unexpected character after padding");
                        }
                        b = y(w, m(_, n, l === "strict"), b);
                        A = t.length;
                        break;
                    }
                    if (!o(n, x)) {
                        throw new f("Unexpected character");
                    }
                    var E = i - b;
                    if (E === 1 && _.length === 2 || E === 2 && _.length === 3) {
                        break;
                    }
                    _ += x;
                    if (_.length === 4) {
                        b = y(w, m(_, n, false), b);
                        _ = "";
                        A = k;
                        if (b === i) {
                            break;
                        }
                    }
                }
                return {
                    bytes: w,
                    read: A,
                    written: b
                };
            };
        },
        9286: function(t, e, r) {
            var i = r(4402);
            var n = r(8469);
            var a = i.Set;
            var s = i.add;
            t.exports = function(t) {
                var e = new a;
                n(t, (function(t) {
                    s(e, t);
                }));
                return e;
            };
        },
        9297: function(t, e, r) {
            var i = r(9504);
            var n = r(8981);
            var a = i({}.hasOwnProperty);
            t.exports = Object.hasOwn || function s(t, e) {
                return a(n(t), e);
            };
        },
        9306: function(t, e, r) {
            var i = r(4901);
            var n = r(6823);
            var a = TypeError;
            t.exports = function(t) {
                if (i(t)) return t;
                throw new a(n(t) + " is not a function");
            };
        },
        9314: function(t, e, r) {
            var i = r(6518);
            var n = r(9565);
            var a = r(8551);
            var s = r(1767);
            var o = r(4149);
            var l = r(9590);
            var u = r(9539);
            var h = r(9462);
            var c = r(684);
            var d = r(4549);
            var f = r(6395);
            var v = !f && !c("drop", 0);
            var p = !f && !v && d("drop", RangeError);
            var g = f || v || p;
            var m = h((function() {
                var t = this.iterator;
                var e = this.next;
                var r, i;
                while (this.remaining) {
                    this.remaining--;
                    r = a(n(e, t));
                    i = this.done = !!r.done;
                    if (i) return;
                }
                r = a(n(e, t));
                i = this.done = !!r.done;
                if (!i) return r.value;
            }));
            i({
                target: "Iterator",
                proto: true,
                real: true,
                forced: g
            }, {
                drop: function y(t) {
                    a(this);
                    var e;
                    try {
                        e = l(o(+t));
                    } catch (r) {
                        u(this, "throw", r);
                    }
                    if (p) return n(p, this, e);
                    return new m(s(this), {
                        remaining: e
                    });
                }
            });
        },
        9429: function(t, e, r) {
            var i = r(4576);
            var n = r(6193);
            t.exports = function(t) {
                if (n) {
                    try {
                        return i.process.getBuiltinModule(t);
                    } catch (e) {}
                    try {
                        return Function('return require("' + t + '")')();
                    } catch (e) {}
                }
            };
        },
        9432: function(t, e, r) {
            var i = r(6518);
            var n = r(4576);
            var a = r(5370);
            var s = r(9143);
            var o = n.Uint8Array;
            var l = !o || !o.fromBase64 || !function() {
                try {
                    o.fromBase64("", null);
                } catch (t) {
                    return true;
                }
            }();
            if (o) i({
                target: "Uint8Array",
                stat: true,
                forced: l
            }, {
                fromBase64: function u(t) {
                    var e = s(t, arguments.length > 1 ? arguments[1] : undefined, null, 9007199254740991);
                    return a(o, e.bytes);
                }
            });
        },
        9433: function(t, e, r) {
            var i = r(4576);
            var n = Object.defineProperty;
            t.exports = function(t, e) {
                try {
                    n(i, t, {
                        value: e,
                        configurable: true,
                        writable: true
                    });
                } catch (r) {
                    i[t] = e;
                }
                return e;
            };
        },
        9462: function(t, e, r) {
            var i = r(9565);
            var n = r(2360);
            var a = r(6699);
            var s = r(6279);
            var o = r(8227);
            var l = r(1181);
            var u = r(5966);
            var h = r(7657).IteratorPrototype;
            var c = r(2529);
            var d = r(9539);
            var f = r(1385);
            var v = o("toStringTag");
            var p = "IteratorHelper";
            var g = "WrapForValidIterator";
            var m = "normal";
            var y = "throw";
            var w = l.set;
            var b = function(t) {
                var e = l.getterFor(t ? g : p);
                return s(n(h), {
                    next: function r() {
                        var r = e(this);
                        if (t) return r.nextHandler();
                        if (r.done) return c(undefined, true);
                        try {
                            var i = r.nextHandler();
                            return r.returnHandlerResult ? i : c(i, r.done);
                        } catch (n) {
                            r.done = true;
                            throw n;
                        }
                    },
                    "return": function() {
                        var r = e(this);
                        var n = r.iterator;
                        r.done = true;
                        if (t) {
                            var a = u(n, "return");
                            return a ? i(a, n) : c(undefined, true);
                        }
                        if (r.inner) try {
                            d(r.inner.iterator, m);
                        } catch (s) {
                            return d(n, y, s);
                        }
                        if (r.openIters) try {
                            f(r.openIters, m);
                        } catch (s) {
                            return d(n, y, s);
                        }
                        if (n) d(n, m);
                        return c(undefined, true);
                    }
                });
            };
            var A = b(true);
            var _ = b(false);
            a(_, v, "Iterator Helper");
            t.exports = function(t, e, r) {
                var i = function n(i, a) {
                    if (a) {
                        a.iterator = i.iterator;
                        a.next = i.next;
                    } else a = i;
                    a.type = e ? g : p;
                    a.returnHandlerResult = !!r;
                    a.nextHandler = t;
                    a.counter = 0;
                    a.done = false;
                    w(this, a);
                };
                i.prototype = e ? A : _;
                return i;
            };
        },
        9504: function(t, e, r) {
            var i = r(616);
            var n = Function.prototype;
            var a = n.call;
            var s = i && n.bind.bind(a, a);
            t.exports = i ? s : function(t) {
                return function() {
                    return a.apply(t, arguments);
                };
            };
        },
        9519: function(t, e, r) {
            var i = r(4576);
            var n = r(2839);
            var a = i.process;
            var s = i.Deno;
            var o = a && a.versions || s && s.version;
            var l = o && o.v8;
            var u, h;
            if (l) {
                u = l.split(".");
                h = u[0] > 0 && u[0] < 4 ? 1 : +(u[0] + u[1]);
            }
            if (!h && n) {
                u = n.match(/Edge\/(\d+)/);
                if (!u || u[1] >= 74) {
                    u = n.match(/Chrome\/(\d+)/);
                    if (u) h = +u[1];
                }
            }
            t.exports = h;
        },
        9539: function(t, e, r) {
            var i = r(9565);
            var n = r(8551);
            var a = r(5966);
            t.exports = function(t, e, r) {
                var s, o;
                n(t);
                try {
                    s = a(t, "return");
                    if (!s) {
                        if (e === "throw") throw r;
                        return r;
                    }
                    s = i(s, t);
                } catch (l) {
                    o = true;
                    s = l;
                }
                if (e === "throw") throw r;
                if (o) throw s;
                n(s);
                return r;
            };
        },
        9565: function(t, e, r) {
            var i = r(616);
            var n = Function.prototype.call;
            t.exports = i ? n.bind(n) : function() {
                return n.apply(n, arguments);
            };
        },
        9577: function(t, e, r) {
            var i = r(9928);
            var n = r(4644);
            var a = r(1108);
            var s = r(1291);
            var o = r(5854);
            var l = n.aTypedArray;
            var u = n.getTypedArrayConstructor;
            var h = n.exportTypedArrayMethod;
            var c = function() {
                try {
                    new Int8Array(1)["with"](2, {
                        valueOf: function() {
                            throw 8;
                        }
                    });
                } catch (t) {
                    return t === 8;
                }
            }();
            var d = c && function() {
                try {
                    new Int8Array(1)["with"](-.5, 1);
                } catch (t) {
                    return true;
                }
            }();
            h("with", {
                "with": function(t, e) {
                    var r = l(this);
                    var n = s(t);
                    var h = a(r) ? o(e) : +e;
                    return i(r, u(r), n, h);
                }
            }["with"], !c || d);
        },
        9590: function(t, e, r) {
            var i = r(1291);
            var n = RangeError;
            t.exports = function(t) {
                var e = i(t);
                if (e < 0) throw new n("The argument can't be less than 0");
                return e;
            };
        },
        9617: function(t, e, r) {
            var i = r(5397);
            var n = r(5610);
            var a = r(6198);
            var s = function(t) {
                return function(e, r, s) {
                    var o = i(e);
                    var l = a(o);
                    if (l === 0) return !t && -1;
                    var u = n(s, l);
                    var h;
                    if (t && r !== r) while (l > u) {
                        h = o[u++];
                        if (h !== h) return true;
                    } else for (;l > u; u++) {
                        if ((t || u in o) && o[u] === r) return t || u || 0;
                    }
                    return !t && -1;
                };
            };
            t.exports = {
                includes: s(true),
                indexOf: s(false)
            };
        },
        9631: function(t, e, r) {
            var i = r(6518);
            var n = r(4576);
            var a = r(9504);
            var s = r(3972);
            var o = r(4154);
            var l = r(5169);
            var u = r(2804);
            var h = r(944);
            var c = u.i2c;
            var d = u.i2cUrl;
            var f = a("".charAt);
            var v = n.Uint8Array;
            var p = !v || !v.prototype.toBase64 || !function() {
                try {
                    var t = new v;
                    t.toBase64(null);
                } catch (e) {
                    return true;
                }
            }();
            if (v) i({
                target: "Uint8Array",
                proto: true,
                forced: p
            }, {
                toBase64: function g() {
                    var t = o(this);
                    var e = arguments.length ? s(arguments[0]) : undefined;
                    var r = h(e) === "base64" ? c : d;
                    var i = !!e && !!e.omitPadding;
                    l(this.buffer);
                    var n = "";
                    var a = 0;
                    var u = t.length;
                    var v;
                    var p = function(t) {
                        return f(r, v >> 6 * t & 63);
                    };
                    for (;a + 2 < u; a += 3) {
                        v = (t[a] << 16) + (t[a + 1] << 8) + t[a + 2];
                        n += p(3) + p(2) + p(1) + p(0);
                    }
                    if (a + 2 === u) {
                        v = (t[a] << 16) + (t[a + 1] << 8);
                        n += p(3) + p(2) + p(1) + (i ? "" : "=");
                    } else if (a + 1 === u) {
                        v = t[a] << 16;
                        n += p(3) + p(2) + (i ? "" : "==");
                    }
                    return n;
                }
            });
        },
        9797: function(t, e, r) {
            var i = r(6518);
            var n = r(4576);
            var a = r(3463);
            var s = r(4154);
            var o = r(5169);
            var l = r(2303);
            if (n.Uint8Array) i({
                target: "Uint8Array",
                proto: true
            }, {
                setFromHex: function u(t) {
                    s(this);
                    a(t);
                    o(this.buffer);
                    var e = l(t, this).read;
                    return {
                        read: e,
                        written: e / 2
                    };
                }
            });
        },
        9835: function(t) {
            t.exports = function(t) {
                try {
                    var e = new Set;
                    var r = {
                        size: 0,
                        has: function() {
                            return true;
                        },
                        keys: function() {
                            return Object.defineProperty({}, "next", {
                                get: function() {
                                    e.clear();
                                    e.add(4);
                                    return function() {
                                        return {
                                            done: true
                                        };
                                    };
                                }
                            });
                        }
                    };
                    var i = e[t](r);
                    return i.size === 1 && i.values().next().value === 4;
                } catch (n) {
                    return false;
                }
            };
        },
        9928: function(t, e, r) {
            var i = r(6198);
            var n = r(1291);
            var a = RangeError;
            t.exports = function(t, e, r, s) {
                var o = i(t);
                var l = n(r);
                var u = l < 0 ? o + l : l;
                if (u >= o || u < 0) throw new a("Incorrect index");
                var h = new e(o);
                var c = 0;
                for (;c < o; c++) h[c] = c === u ? s : t[c];
                return h;
            };
        }
    };
    var F = {};
    function W(t) {
        var e = F[t];
        if (e !== undefined) {
            return e.exports;
        }
        var r = F[t] = {
            exports: {}
        };
        O[t].call(r.exports, r, r.exports, W);
        return r.exports;
    }
    W(4114);
    W(6573);
    W(8100);
    W(7936);
    W(8111);
    W(8237);
    W(1689);
    W(9577);
    W(4235);
    W(9432);
    W(1549);
    W(9797);
    W(9631);
    W(5623);
    W(4979);
    W(5781);
    var B = typeof process === "object" && process + "" === "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
    var j = [ .001, 0, 0, .001, 0, 0 ];
    var H = 1.35;
    var U = {
        ANY: 1,
        DISPLAY: 2,
        PRINT: 4,
        ANNOTATIONS_FORMS: 16,
        ANNOTATIONS_STORAGE: 32,
        ANNOTATIONS_DISABLE: 64,
        IS_EDITING: 128,
        OPLIST: 256
    };
    var z = {
        DISABLE: 0,
        ENABLE: 1,
        ENABLE_FORMS: 2,
        ENABLE_STORAGE: 3
    };
    var G = "pdfjs_internal_editor_";
    var V = {
        DISABLE: -1,
        NONE: 0,
        FREETEXT: 3,
        HIGHLIGHT: 9,
        STAMP: 13,
        INK: 15,
        SIGNATURE: 101,
        COMMENT: 102
    };
    var q = {
        RESIZE: 1,
        CREATE: 2,
        FREETEXT_SIZE: 11,
        FREETEXT_COLOR: 12,
        FREETEXT_OPACITY: 13,
        INK_COLOR: 21,
        INK_THICKNESS: 22,
        INK_OPACITY: 23,
        HIGHLIGHT_COLOR: 31,
        HIGHLIGHT_THICKNESS: 32,
        HIGHLIGHT_FREE: 33,
        HIGHLIGHT_SHOW_ALL: 34,
        DRAW_STEP: 41
    };
    var X = {
        PRINT: 4,
        MODIFY_CONTENTS: 8,
        COPY: 16,
        MODIFY_ANNOTATIONS: 32,
        FILL_INTERACTIVE_FORMS: 256,
        COPY_FOR_ACCESSIBILITY: 512,
        ASSEMBLE: 1024,
        PRINT_HIGH_QUALITY: 2048
    };
    var Y = {
        FILL: 0,
        STROKE: 1,
        FILL_STROKE: 2,
        INVISIBLE: 3,
        FILL_STROKE_MASK: 3,
        ADD_TO_PATH_FLAG: 4
    };
    var K = {
        GRAYSCALE_1BPP: 1,
        RGB_24BPP: 2,
        RGBA_32BPP: 3
    };
    var Q = {
        TEXT: 1,
        LINK: 2,
        FREETEXT: 3,
        LINE: 4,
        SQUARE: 5,
        CIRCLE: 6,
        POLYGON: 7,
        POLYLINE: 8,
        HIGHLIGHT: 9,
        UNDERLINE: 10,
        SQUIGGLY: 11,
        STRIKEOUT: 12,
        STAMP: 13,
        CARET: 14,
        INK: 15,
        POPUP: 16,
        FILEATTACHMENT: 17,
        SOUND: 18,
        MOVIE: 19,
        WIDGET: 20,
        SCREEN: 21,
        PRINTERMARK: 22,
        TRAPNET: 23,
        WATERMARK: 24,
        THREED: 25,
        REDACT: 26
    };
    var J = {
        SOLID: 1,
        DASHED: 2,
        BEVELED: 3,
        INSET: 4,
        UNDERLINE: 5
    };
    var Z = {
        ERRORS: 0,
        WARNINGS: 1,
        INFOS: 5
    };
    var $ = {
        dependency: 1,
        setLineWidth: 2,
        setLineCap: 3,
        setLineJoin: 4,
        setMiterLimit: 5,
        setDash: 6,
        setRenderingIntent: 7,
        setFlatness: 8,
        setGState: 9,
        save: 10,
        restore: 11,
        transform: 12,
        moveTo: 13,
        lineTo: 14,
        curveTo: 15,
        curveTo2: 16,
        curveTo3: 17,
        closePath: 18,
        rectangle: 19,
        stroke: 20,
        closeStroke: 21,
        fill: 22,
        eoFill: 23,
        fillStroke: 24,
        eoFillStroke: 25,
        closeFillStroke: 26,
        closeEOFillStroke: 27,
        endPath: 28,
        clip: 29,
        eoClip: 30,
        beginText: 31,
        endText: 32,
        setCharSpacing: 33,
        setWordSpacing: 34,
        setHScale: 35,
        setLeading: 36,
        setFont: 37,
        setTextRenderingMode: 38,
        setTextRise: 39,
        moveText: 40,
        setLeadingMoveText: 41,
        setTextMatrix: 42,
        nextLine: 43,
        showText: 44,
        showSpacedText: 45,
        nextLineShowText: 46,
        nextLineSetSpacingShowText: 47,
        setCharWidth: 48,
        setCharWidthAndBounds: 49,
        setStrokeColorSpace: 50,
        setFillColorSpace: 51,
        setStrokeColor: 52,
        setStrokeColorN: 53,
        setFillColor: 54,
        setFillColorN: 55,
        setStrokeGray: 56,
        setFillGray: 57,
        setStrokeRGBColor: 58,
        setFillRGBColor: 59,
        setStrokeCMYKColor: 60,
        setFillCMYKColor: 61,
        shadingFill: 62,
        beginInlineImage: 63,
        beginImageData: 64,
        endInlineImage: 65,
        paintXObject: 66,
        markPoint: 67,
        markPointProps: 68,
        beginMarkedContent: 69,
        beginMarkedContentProps: 70,
        endMarkedContent: 71,
        beginCompat: 72,
        endCompat: 73,
        paintFormXObjectBegin: 74,
        paintFormXObjectEnd: 75,
        beginGroup: 76,
        endGroup: 77,
        beginAnnotation: 80,
        endAnnotation: 81,
        paintImageMaskXObject: 83,
        paintImageMaskXObjectGroup: 84,
        paintImageXObject: 85,
        paintInlineImageXObject: 86,
        paintInlineImageXObjectGroup: 87,
        paintImageXObjectRepeat: 88,
        paintImageMaskXObjectRepeat: 89,
        paintSolidColorImageMask: 90,
        constructPath: 91,
        setStrokeTransparent: 92,
        setFillTransparent: 93,
        rawFillPath: 94
    };
    var tt = {
        moveTo: 0,
        lineTo: 1,
        curveTo: 2,
        closePath: 3
    };
    var et = {
        NEED_PASSWORD: 1,
        INCORRECT_PASSWORD: 2
    };
    var rt = Z.WARNINGS;
    function it(t) {
        if (Number.isInteger(t)) {
            rt = t;
        }
    }
    function nt() {
        return rt;
    }
    function at(t) {
        if (rt >= Z.INFOS) {
            console.log("Info: " + t);
        }
    }
    function st(t) {
        if (rt >= Z.WARNINGS) {
            console.log("Warning: " + t);
        }
    }
    function ot(t) {
        throw new Error(t);
    }
    function lt(t, e) {
        if (!t) {
            ot(e);
        }
    }
    function ut(t) {
        switch (t === null || t === void 0 ? void 0 : t.protocol) {
          case "http:":
          case "https:":
          case "ftp:":
          case "mailto:":
          case "tel:":
            return true;

          default:
            return false;
        }
    }
    function ht(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        if (!t) {
            return null;
        }
        if (r && typeof t === "string") {
            if (r.addDefaultProtocol && t.startsWith("www.")) {
                var i = t.match(/\./g);
                if ((i === null || i === void 0 ? void 0 : i.length) >= 2) {
                    t = "http://" + t;
                }
            }
            if (r.tryConvertEncoding) {
                try {
                    t = Rt(t);
                } catch {}
            }
        }
        var n = e ? URL.parse(t, e) : URL.parse(t);
        return ut(n) ? n : null;
    }
    function ct(t, e) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var i = URL.parse(t);
        if (i) {
            i.hash = e;
            return i.href;
        }
        if (r && ht(t, "http://example.com")) {
            return t.split("#", 1)[0] + ("" + (e ? "#" + e : ""));
        }
        return "";
    }
    function dt(t, e, r) {
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        Object.defineProperty(t, e, {
            value: r,
            enumerable: !i,
            configurable: true,
            writable: false
        });
        return r;
    }
    var ft = function gg() {
        function t(t, e) {
            this.message = t;
            this.name = e;
        }
        t.prototype = new Error;
        t.constructor = t;
        return t;
    }();
    var vt = function(t) {
        function e(e, r) {
            var i;
            i = t.call(this, e, "PasswordException") || this;
            i.code = r;
            return i;
        }
        g(e, t);
        return e;
    }(ft);
    var pt = function(t) {
        function e(e, r) {
            var i;
            i = t.call(this, e, "UnknownErrorException") || this;
            i.details = r;
            return i;
        }
        g(e, t);
        return e;
    }(ft);
    var gt = function(t) {
        function e(e) {
            return t.call(this, e, "InvalidPDFException") || this;
        }
        g(e, t);
        return e;
    }(ft);
    var mt = function(t) {
        function e(e, r, i) {
            var n;
            n = t.call(this, e, "ResponseException") || this;
            n.status = r;
            n.missing = i;
            return n;
        }
        g(e, t);
        return e;
    }(ft);
    var yt = function(t) {
        function e(e) {
            return t.call(this, e, "FormatError") || this;
        }
        g(e, t);
        return e;
    }(ft);
    var wt = function(t) {
        function e(e) {
            return t.call(this, e, "AbortException") || this;
        }
        g(e, t);
        return e;
    }(ft);
    function bt(t) {
        if (typeof t !== "object" || (t === null || t === void 0 ? void 0 : t.length) === undefined) {
            ot("Invalid argument for bytesToString");
        }
        var e = t.length;
        var r = 8192;
        if (e < r) {
            return String.fromCharCode.apply(null, t);
        }
        var i = [];
        for (var n = 0; n < e; n += r) {
            var a = Math.min(n + r, e);
            var s = t.subarray(n, a);
            i.push(String.fromCharCode.apply(null, s));
        }
        return i.join("");
    }
    function At(t) {
        if (typeof t !== "string") {
            ot("Invalid argument for stringToBytes");
        }
        var e = t.length;
        var r = new Uint8Array(e);
        for (var i = 0; i < e; ++i) {
            r[i] = t.charCodeAt(i) & 255;
        }
        return r;
    }
    function _t(t) {
        return String.fromCharCode(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, t & 255);
    }
    function kt() {
        var t = new Uint8Array(4);
        t[0] = 1;
        var e = new Uint32Array(t.buffer, 0, 1);
        return e[0] === 1;
    }
    function xt() {
        try {
            new Function("");
            return true;
        } catch {
            return false;
        }
    }
    var Et = function() {
        function t() {}
        return v(t, null, [ {
            key: "isLittleEndian",
            get: function() {
                return dt(this, "isLittleEndian", kt());
            }
        }, {
            key: "isEvalSupported",
            get: function() {
                return dt(this, "isEvalSupported", xt());
            }
        }, {
            key: "isOffscreenCanvasSupported",
            get: function() {
                return dt(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas !== "undefined");
            }
        }, {
            key: "isImageDecoderSupported",
            get: function() {
                return dt(this, "isImageDecoderSupported", typeof ImageDecoder !== "undefined");
            }
        }, {
            key: "platform",
            get: function() {
                var {platform: t, userAgent: e} = navigator;
                return dt(this, "platform", {
                    isAndroid: e.includes("Android"),
                    isLinux: t.includes("Linux"),
                    isMac: t.includes("Mac"),
                    isWindows: t.includes("Win"),
                    isFirefox: e.includes("Firefox")
                });
            }
        }, {
            key: "isCSSRoundSupported",
            get: function() {
                var t, e;
                return dt(this, "isCSSRoundSupported", (t = globalThis.CSS) === null || t === void 0 ? void 0 : (e = t.supports) === null || e === void 0 ? void 0 : e.call(t, "width: round(1.5px, 1px)"));
            }
        } ]);
    }();
    var St = Array.from(Array(256).keys(), (function(t) {
        return t.toString(16).padStart(2, "0");
    }));
    var Mt = function() {
        function t() {}
        t.makeHexColor = function e(t, r, i) {
            return "#" + St[t] + St[r] + St[i];
        };
        t.scaleMinMax = function i(t, e) {
            var r;
            if (t[0]) {
                if (t[0] < 0) {
                    r = e[0];
                    e[0] = e[2];
                    e[2] = r;
                }
                e[0] *= t[0];
                e[2] *= t[0];
                if (t[3] < 0) {
                    r = e[1];
                    e[1] = e[3];
                    e[3] = r;
                }
                e[1] *= t[3];
                e[3] *= t[3];
            } else {
                r = e[0];
                e[0] = e[1];
                e[1] = r;
                r = e[2];
                e[2] = e[3];
                e[3] = r;
                if (t[1] < 0) {
                    r = e[1];
                    e[1] = e[3];
                    e[3] = r;
                }
                e[1] *= t[1];
                e[3] *= t[1];
                if (t[2] < 0) {
                    r = e[0];
                    e[0] = e[2];
                    e[2] = r;
                }
                e[0] *= t[2];
                e[2] *= t[2];
            }
            e[0] += t[4];
            e[1] += t[5];
            e[2] += t[4];
            e[3] += t[5];
        };
        t.transform = function n(t, e) {
            return [ t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5] ];
        };
        t.applyTransform = function a(t, e) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var i = t[r];
            var n = t[r + 1];
            t[r] = i * e[0] + n * e[2] + e[4];
            t[r + 1] = i * e[1] + n * e[3] + e[5];
        };
        t.applyTransformToBezier = function s(t, e) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var i = e[0];
            var n = e[1];
            var a = e[2];
            var s = e[3];
            var o = e[4];
            var l = e[5];
            for (var u = 0; u < 6; u += 2) {
                var h = t[r + u];
                var c = t[r + u + 1];
                t[r + u] = h * i + c * a + o;
                t[r + u + 1] = h * n + c * s + l;
            }
        };
        t.applyInverseTransform = function o(t, e) {
            var r = t[0];
            var i = t[1];
            var n = e[0] * e[3] - e[1] * e[2];
            t[0] = (r * e[3] - i * e[2] + e[2] * e[5] - e[4] * e[3]) / n;
            t[1] = (-r * e[1] + i * e[0] + e[4] * e[1] - e[5] * e[0]) / n;
        };
        t.axialAlignedBoundingBox = function l(t, e, r) {
            var i = e[0];
            var n = e[1];
            var a = e[2];
            var s = e[3];
            var o = e[4];
            var l = e[5];
            var u = t[0];
            var h = t[1];
            var c = t[2];
            var d = t[3];
            var f = i * u + o;
            var v = f;
            var p = i * c + o;
            var g = p;
            var m = s * h + l;
            var y = m;
            var w = s * d + l;
            var b = w;
            if (n !== 0 || a !== 0) {
                var A = n * u;
                var _ = n * c;
                var k = a * h;
                var x = a * d;
                f += k;
                g += k;
                p += x;
                v += x;
                m += A;
                b += A;
                w += _;
                y += _;
            }
            r[0] = Math.min(r[0], f, p, v, g);
            r[1] = Math.min(r[1], m, w, y, b);
            r[2] = Math.max(r[2], f, p, v, g);
            r[3] = Math.max(r[3], m, w, y, b);
        };
        t.inverseTransform = function u(t) {
            var e = t[0] * t[3] - t[1] * t[2];
            return [ t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e ];
        };
        t.singularValueDecompose2dScale = function h(t, e) {
            var r = t[0];
            var i = t[1];
            var n = t[2];
            var a = t[3];
            var s = r ** 2 + i ** 2;
            var o = r * n + i * a;
            var l = n ** 2 + a ** 2;
            var u = (s + l) / 2;
            var h = Math.sqrt(u ** 2 - (s * l - o ** 2));
            e[0] = Math.sqrt(u + h || 1);
            e[1] = Math.sqrt(u - h || 1);
        };
        t.normalizeRect = function c(t) {
            var e = t.slice(0);
            if (t[0] > t[2]) {
                e[0] = t[2];
                e[2] = t[0];
            }
            if (t[1] > t[3]) {
                e[1] = t[3];
                e[3] = t[1];
            }
            return e;
        };
        t.intersect = function d(t, e) {
            var r = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2]));
            var i = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
            if (r > i) {
                return null;
            }
            var n = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3]));
            var a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
            if (n > a) {
                return null;
            }
            return [ r, n, i, a ];
        };
        t.pointBoundingBox = function f(t, e, r) {
            r[0] = Math.min(r[0], t);
            r[1] = Math.min(r[1], e);
            r[2] = Math.max(r[2], t);
            r[3] = Math.max(r[3], e);
        };
        t.rectBoundingBox = function v(t, e, r, i, n) {
            n[0] = Math.min(n[0], t, r);
            n[1] = Math.min(n[1], e, i);
            n[2] = Math.max(n[2], t, r);
            n[3] = Math.max(n[3], e, i);
        };
        t.bezierBoundingBox = function p(e, i, n, a, s, o, l, u, h) {
            h[0] = Math.min(h[0], e, l);
            h[1] = Math.min(h[1], i, u);
            h[2] = Math.max(h[2], e, l);
            h[3] = Math.max(h[3], i, u);
            r(t, this, Tt).call(this, e, n, s, l, i, a, o, u, 3 * (-e + 3 * (n - s) + l), 6 * (e - 2 * n + s), 3 * (n - e), h);
            r(t, this, Tt).call(this, e, n, s, l, i, a, o, u, 3 * (-i + 3 * (a - o) + u), 6 * (i - 2 * a + o), 3 * (a - i), h);
        };
        return t;
    }();
    A = Mt;
    function Ct(t, e, r, i, n, a, s, o, l, u) {
        if (l <= 0 || l >= 1) {
            return;
        }
        var h = 1 - l;
        var c = l * l;
        var d = c * l;
        var f = h * (h * (h * t + 3 * l * e) + 3 * c * r) + d * i;
        var v = h * (h * (h * n + 3 * l * a) + 3 * c * s) + d * o;
        u[0] = Math.min(u[0], f);
        u[1] = Math.min(u[1], v);
        u[2] = Math.max(u[2], f);
        u[3] = Math.max(u[3], v);
    }
    function Tt(t, e, i, n, a, s, o, l, u, h, c, d) {
        if (Math.abs(u) < 1e-12) {
            if (Math.abs(h) >= 1e-12) {
                r(A, this, Ct).call(this, t, e, i, n, a, s, o, l, -c / h, d);
            }
            return;
        }
        var f = h ** 2 - 4 * c * u;
        if (f < 0) {
            return;
        }
        var v = Math.sqrt(f);
        var p = 2 * u;
        r(A, this, Ct).call(this, t, e, i, n, a, s, o, l, (-h + v) / p, d);
        r(A, this, Ct).call(this, t, e, i, n, a, s, o, l, (-h - v) / p, d);
    }
    function Rt(t) {
        return decodeURIComponent(escape(t));
    }
    var It = null;
    var Pt = null;
    function Lt(t) {
        if (!It) {
            It = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
            Pt = new Map([ [ "ﬅ", "ſt" ] ]);
        }
        return t.replaceAll(It, (function(t, e, r) {
            return e ? e.normalize("NFKC") : Pt.get(r);
        }));
    }
    function Dt() {
        if (typeof crypto.randomUUID === "function") {
            return crypto.randomUUID();
        }
        var t = new Uint8Array(32);
        crypto.getRandomValues(t);
        return bt(t);
    }
    var Nt = "pdfjs_internal_id_";
    function Ot(t, e, r) {
        if (!Array.isArray(r) || r.length < 2) {
            return false;
        }
        var [i, n, ...a] = r;
        if (!t(i) && !Number.isInteger(i)) {
            return false;
        }
        if (!e(n)) {
            return false;
        }
        var s = a.length;
        var o = true;
        switch (n.name) {
          case "XYZ":
            if (s < 2 || s > 3) {
                return false;
            }
            break;

          case "Fit":
          case "FitB":
            return s === 0;

          case "FitH":
          case "FitBH":
          case "FitV":
          case "FitBV":
            if (s > 1) {
                return false;
            }
            break;

          case "FitR":
            if (s !== 4) {
                return false;
            }
            o = false;
            break;

          default:
            return false;
        }
        for (var l of a) {
            if (typeof l === "number" || o && l === null) {
                continue;
            }
            return false;
        }
        return true;
    }
    function Ft(t, e, r) {
        return Math.min(Math.max(t, e), r);
    }
    function Wt(t) {
        if (Uint8Array.prototype.toBase64) {
            return t.toBase64();
        }
        return btoa(bt(t));
    }
    function Bt(t) {
        if (Uint8Array.fromBase64) {
            return Uint8Array.fromBase64(t);
        }
        return At(atob(t));
    }
    if (typeof Math.sumPrecise !== "function") {
        Math.sumPrecise = function(t) {
            return t.reduce((function(t, e) {
                return t + e;
            }), 0);
        };
    }
    if (typeof AbortSignal.any !== "function") {
        AbortSignal.any = function(t) {
            var e = new AbortController;
            var {signal: r} = e;
            for (var i of t) {
                if (i.aborted) {
                    e.abort(i.reason);
                    return r;
                }
            }
            var n = function(t) {
                t.addEventListener("abort", (function() {
                    e.abort(t.reason);
                }), {
                    signal: r
                });
            };
            for (var a of t) {
                n(a);
            }
            return r;
        };
    }
    W(1701);
    W(4628);
    W(7642);
    W(8004);
    W(3853);
    W(5876);
    W(2475);
    W(5024);
    W(1698);
    W(4603);
    W(7566);
    W(8721);
    W(9314);
    W(1148);
    W(3579);
    W(8335);
    var jt = "http://www.w3.org/2000/svg";
    var Ht = function mg() {};
    _ = Ht;
    p(Ht, "CSS", 96);
    p(Ht, "PDF", 72);
    p(Ht, "PDF_TO_CSS_UNITS", _.CSS / _.PDF);
    function Ut(t) {
        return zt.apply(this, arguments);
    }
    function zt() {
        zt = s((function(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "text";
            return function*() {
                if (Jt(t, document.baseURI)) {
                    var r = yield fetch(t);
                    if (!r.ok) {
                        throw new Error(r.statusText);
                    }
                    switch (e) {
                      case "arraybuffer":
                        return r.arrayBuffer();

                      case "blob":
                        return r.blob();

                      case "json":
                        return r.json();
                    }
                    return r.text();
                }
                return new Promise((function(r, i) {
                    var n = new XMLHttpRequest;
                    n.open("GET", t, true);
                    n.responseType = e;
                    n.onreadystatechange = function() {
                        if (n.readyState !== XMLHttpRequest.DONE) {
                            return;
                        }
                        if (n.status === 200 || n.status === 0) {
                            switch (e) {
                              case "arraybuffer":
                              case "blob":
                              case "json":
                                r(n.response);
                                return;
                            }
                            r(n.responseText);
                            return;
                        }
                        i(new Error(n.statusText));
                    };
                    n.send(null);
                }));
            }();
        }));
        return zt.apply(this, arguments);
    }
    var Gt = function() {
        function t(t) {
            var {viewBox: e, userUnit: r, scale: i, rotation: n, offsetX: a = 0, offsetY: s = 0, dontFlip: o = false} = t;
            this.viewBox = e;
            this.userUnit = r;
            this.scale = i;
            this.rotation = n;
            this.offsetX = a;
            this.offsetY = s;
            i *= r;
            var l = (e[2] + e[0]) / 2;
            var u = (e[3] + e[1]) / 2;
            var h, c, d, f;
            n %= 360;
            if (n < 0) {
                n += 360;
            }
            switch (n) {
              case 180:
                h = -1;
                c = 0;
                d = 0;
                f = 1;
                break;

              case 90:
                h = 0;
                c = 1;
                d = 1;
                f = 0;
                break;

              case 270:
                h = 0;
                c = -1;
                d = -1;
                f = 0;
                break;

              case 0:
                h = 1;
                c = 0;
                d = 0;
                f = -1;
                break;

              default:
                throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
            }
            if (o) {
                d = -d;
                f = -f;
            }
            var v, p;
            var g, m;
            if (h === 0) {
                v = Math.abs(u - e[1]) * i + a;
                p = Math.abs(l - e[0]) * i + s;
                g = (e[3] - e[1]) * i;
                m = (e[2] - e[0]) * i;
            } else {
                v = Math.abs(l - e[0]) * i + a;
                p = Math.abs(u - e[1]) * i + s;
                g = (e[2] - e[0]) * i;
                m = (e[3] - e[1]) * i;
            }
            this.transform = [ h * i, c * i, d * i, f * i, v - h * i * l - d * i * u, p - c * i * l - f * i * u ];
            this.width = g;
            this.height = m;
        }
        var e = t.prototype;
        e.clone = function r() {
            var {scale: e = this.scale, rotation: r = this.rotation, offsetX: i = this.offsetX, offsetY: n = this.offsetY, dontFlip: a = false} = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return new t({
                viewBox: this.viewBox.slice(),
                userUnit: this.userUnit,
                scale: e,
                rotation: r,
                offsetX: i,
                offsetY: n,
                dontFlip: a
            });
        };
        e.convertToViewportPoint = function i(t, e) {
            var r = [ t, e ];
            Mt.applyTransform(r, this.transform);
            return r;
        };
        e.convertToViewportRectangle = function n(t) {
            var e = [ t[0], t[1] ];
            Mt.applyTransform(e, this.transform);
            var r = [ t[2], t[3] ];
            Mt.applyTransform(r, this.transform);
            return [ e[0], e[1], r[0], r[1] ];
        };
        e.convertToPdfPoint = function a(t, e) {
            var r = [ t, e ];
            Mt.applyInverseTransform(r, this.transform);
            return r;
        };
        return v(t, [ {
            key: "rawDims",
            get: function() {
                var t = this.viewBox;
                return dt(this, "rawDims", {
                    pageWidth: t[2] - t[0],
                    pageHeight: t[3] - t[1],
                    pageX: t[0],
                    pageY: t[1]
                });
            }
        } ]);
    }();
    var Vt = function(t) {
        function e(e) {
            var r;
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            r = t.call(this, e, "RenderingCancelledException") || this;
            r.extraDelay = i;
            return r;
        }
        g(e, t);
        return e;
    }(ft);
    function qt(t) {
        var e = t.length;
        var r = 0;
        while (r < e && t[r].trim() === "") {
            r++;
        }
        return t.substring(r, r + 5).toLowerCase() === "data:";
    }
    function Xt(t) {
        return typeof t === "string" && /\.pdf$/i.test(t);
    }
    function Yt(t) {
        [t] = t.split(/[#?]/, 1);
        return t.substring(t.lastIndexOf("/") + 1);
    }
    function Kt(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "document.pdf";
        if (typeof t !== "string") {
            return e;
        }
        if (qt(t)) {
            st('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');
            return e;
        }
        var r = function(t) {
            try {
                return new URL(t);
            } catch {
                try {
                    return new URL(decodeURIComponent(t));
                } catch {
                    try {
                        return new URL(t, "https://foo.bar");
                    } catch {
                        try {
                            return new URL(decodeURIComponent(t), "https://foo.bar");
                        } catch {
                            return null;
                        }
                    }
                }
            }
        };
        var i = r(t);
        if (!i) {
            return e;
        }
        var n = function(t) {
            try {
                var e = decodeURIComponent(t);
                if (e.includes("/")) {
                    e = e.split("/").at(-1);
                    if (e.test(/^\.pdf$/i)) {
                        return e;
                    }
                    return t;
                }
                return e;
            } catch {
                return t;
            }
        };
        var a = /\.pdf$/i;
        var s = i.pathname.split("/").at(-1);
        if (a.test(s)) {
            return n(s);
        }
        if (i.searchParams.size > 0) {
            var o = Array.from(i.searchParams.values()).reverse();
            for (var l of o) {
                if (a.test(l)) {
                    return n(l);
                }
            }
            var u = Array.from(i.searchParams.keys()).reverse();
            for (var h of u) {
                if (a.test(h)) {
                    return n(h);
                }
            }
        }
        if (i.hash) {
            var c = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
            var d = c.exec(i.hash);
            if (d) {
                return n(d[0]);
            }
        }
        return e;
    }
    var Qt = function() {
        function t() {
            p(this, "started", Object.create(null));
            p(this, "times", []);
        }
        var e = t.prototype;
        e.time = function r(t) {
            if (t in this.started) {
                st("Timer is already running for " + t);
            }
            this.started[t] = Date.now();
        };
        e.timeEnd = function i(t) {
            if (!(t in this.started)) {
                st("Timer has not been started for " + t);
            }
            this.times.push({
                name: t,
                start: this.started[t],
                end: Date.now()
            });
            delete this.started[t];
        };
        e.toString = function n() {
            var t = [];
            var e = 0;
            for (var {name: r} of this.times) {
                e = Math.max(r.length, e);
            }
            for (var {name: i, start: n, end: a} of this.times) {
                t.push(i.padEnd(e) + " " + (a - n) + "ms\n");
            }
            return t.join("");
        };
        return t;
    }();
    function Jt(t, e) {
        var r = e ? URL.parse(t, e) : URL.parse(t);
        return (r === null || r === void 0 ? void 0 : r.protocol) === "http:" || (r === null || r === void 0 ? void 0 : r.protocol) === "https:";
    }
    function Zt(t) {
        t.preventDefault();
    }
    function $t(t) {
        t.preventDefault();
        t.stopPropagation();
    }
    function te(t) {
        console.log("Deprecated API usage: " + t);
    }
    var ee = function() {
        function t() {}
        t.toDateObject = function e(i) {
            if (i instanceof Date) {
                return i;
            }
            if (!i || typeof i !== "string") {
                return null;
            }
            r(t, this, re)._ || (re._ = r(t, this, new RegExp("^D:" + "(\\d{4})" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "([Z|+|-])?" + "(\\d{2})?" + "'?" + "(\\d{2})?" + "'?")));
            var n = r(t, this, re)._.exec(i);
            if (!n) {
                return null;
            }
            var a = parseInt(n[1], 10);
            var s = parseInt(n[2], 10);
            s = s >= 1 && s <= 12 ? s - 1 : 0;
            var o = parseInt(n[3], 10);
            o = o >= 1 && o <= 31 ? o : 1;
            var l = parseInt(n[4], 10);
            l = l >= 0 && l <= 23 ? l : 0;
            var u = parseInt(n[5], 10);
            u = u >= 0 && u <= 59 ? u : 0;
            var h = parseInt(n[6], 10);
            h = h >= 0 && h <= 59 ? h : 0;
            var c = n[7] || "Z";
            var d = parseInt(n[8], 10);
            d = d >= 0 && d <= 23 ? d : 0;
            var f = parseInt(n[9], 10) || 0;
            f = f >= 0 && f <= 59 ? f : 0;
            if (c === "-") {
                l += d;
                u += f;
            } else if (c === "+") {
                l -= d;
                u -= f;
            }
            return new Date(Date.UTC(a, s, o, l, u, h));
        };
        return t;
    }();
    var re = {
        _: void 0
    };
    function ie(t, e) {
        var {scale: r = 1, rotation: i = 0} = e;
        var {width: n, height: a} = t.attributes.style;
        var s = [ 0, 0, parseInt(n), parseInt(a) ];
        return new Gt({
            viewBox: s,
            userUnit: 1,
            scale: r,
            rotation: i
        });
    }
    function ne(t) {
        if (t.startsWith("#")) {
            var e = parseInt(t.slice(1), 16);
            return [ (e & 16711680) >> 16, (e & 65280) >> 8, e & 255 ];
        }
        if (t.startsWith("rgb(")) {
            return t.slice(4, -1).split(",").map((function(t) {
                return parseInt(t);
            }));
        }
        if (t.startsWith("rgba(")) {
            return t.slice(5, -1).split(",").map((function(t) {
                return parseInt(t);
            })).slice(0, 3);
        }
        st('Not a valid color format: "' + t + '"');
        return [ 0, 0, 0 ];
    }
    function ae(t) {
        var e = document.createElement("span");
        e.style.visibility = "hidden";
        e.style.colorScheme = "only light";
        document.body.append(e);
        for (var r of t.keys()) {
            e.style.color = r;
            var i = window.getComputedStyle(e).color;
            t.set(r, ne(i));
        }
        e.remove();
    }
    function se(t) {
        var {a: e, b: r, c: i, d: n, e: a, f: s} = t.getTransform();
        return [ e, r, i, n, a, s ];
    }
    function oe(t) {
        var {a: e, b: r, c: i, d: n, e: a, f: s} = t.getTransform().invertSelf();
        return [ e, r, i, n, a, s ];
    }
    function le(t, e) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
        if (e instanceof Gt) {
            var {pageWidth: n, pageHeight: a} = e.rawDims;
            var {style: s} = t;
            var o = Et.isCSSRoundSupported;
            var l = "var(--total-scale-factor) * " + n + "px", u = "var(--total-scale-factor) * " + a + "px";
            var h = o ? "round(down, " + l + ", var(--scale-round-x))" : "calc(" + l + ")", c = o ? "round(down, " + u + ", var(--scale-round-y))" : "calc(" + u + ")";
            if (!r || e.rotation % 180 === 0) {
                s.width = h;
                s.height = c;
            } else {
                s.width = c;
                s.height = h;
            }
        }
        if (i) {
            t.setAttribute("data-main-rotation", e.rotation);
        }
    }
    var ue = function() {
        function t() {
            var {pixelRatio: e} = t;
            this.sx = e;
            this.sy = e;
        }
        var e = t.prototype;
        e.limitCanvas = function r(e, i, n, a) {
            var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
            var o = Infinity, l = Infinity, u = Infinity;
            n = t.capPixels(n, s);
            if (n > 0) {
                o = Math.sqrt(n / (e * i));
            }
            if (a !== -1) {
                l = a / e;
                u = a / i;
            }
            var h = Math.min(o, l, u);
            if (this.sx > h || this.sy > h) {
                this.sx = h;
                this.sy = h;
                return true;
            }
            return false;
        };
        t.capPixels = function i(t, e) {
            if (e >= 0) {
                var r = Math.ceil(window.screen.availWidth * window.screen.availHeight * this.pixelRatio ** 2 * (1 + e / 100));
                return t > 0 ? Math.min(t, r) : r;
            }
            return t;
        };
        return v(t, [ {
            key: "scaled",
            get: function() {
                return this.sx !== 1 || this.sy !== 1;
            }
        }, {
            key: "symmetric",
            get: function() {
                return this.sx === this.sy;
            }
        } ], [ {
            key: "pixelRatio",
            get: function() {
                return globalThis.devicePixelRatio || 1;
            }
        } ]);
    }();
    var he = [ "image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon" ];
    var ce = new WeakMap;
    var de = new WeakMap;
    var fe = new WeakMap;
    var ve = new WeakMap;
    var pe = new WeakMap;
    var ge = new WeakMap;
    var me = new WeakMap;
    var ye = new WeakSet;
    var we = function() {
        function t(t) {
            d(this, ye);
            u(this, ce, null);
            u(this, de, null);
            u(this, fe, void 0);
            u(this, ve, null);
            u(this, pe, null);
            u(this, ge, null);
            u(this, me, null);
            h(fe, this, t);
            Ee._ || (Ee._ = Object.freeze({
                freetext: "pdfjs-editor-remove-freetext-button",
                highlight: "pdfjs-editor-remove-highlight-button",
                ink: "pdfjs-editor-remove-ink-button",
                stamp: "pdfjs-editor-remove-stamp-button",
                signature: "pdfjs-editor-remove-signature-button"
            }));
        }
        var e = t.prototype;
        e.render = function i() {
            var t = h(ce, this, document.createElement("div"));
            t.classList.add("editToolbar", "hidden");
            t.setAttribute("role", "toolbar");
            var e = l(fe, this)._uiManager._signal;
            t.addEventListener("contextmenu", Zt, {
                signal: e
            });
            t.addEventListener("pointerdown", be, {
                signal: e
            });
            var r = h(ve, this, document.createElement("div"));
            r.className = "buttons";
            t.append(r);
            var i = l(fe, this).toolbarPosition;
            if (i) {
                var {style: n} = t;
                var a = l(fe, this)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
                n.insetInlineEnd = 100 * a + "%";
                n.top = "calc(" + 100 * i[1] + "% + var(--editor-toolbar-vert-offset))";
            }
            return t;
        };
        e.hide = function n() {
            var t;
            l(ce, this).classList.add("hidden");
            (t = l(de, this)) === null || t === void 0 ? void 0 : t.hideDropdown();
        };
        e.show = function a() {
            var t, e;
            l(ce, this).classList.remove("hidden");
            (t = l(pe, this)) === null || t === void 0 ? void 0 : t.shown();
            (e = l(ge, this)) === null || e === void 0 ? void 0 : e.shown();
        };
        e.addDeleteButton = function o() {
            var {editorType: t, _uiManager: e} = l(fe, this);
            var i = document.createElement("button");
            i.classList.add("basic", "deleteButton");
            i.tabIndex = 0;
            i.setAttribute("data-l10n-id", Ee._[t]);
            r(ye, this, ke).call(this, i);
            i.addEventListener("click", (function(t) {
                e["delete"]();
            }), {
                signal: e._signal
            });
            l(ve, this).append(i);
        };
        e.addAltText = function() {
            var t = s((function*(t) {
                var e = yield t.render();
                r(ye, this, ke).call(this, e);
                l(ve, this).append(e, c(ye, this, xe));
                h(pe, this, t);
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.addComment = function f(t) {
            if (l(ge, this)) {
                return;
            }
            var e = t.render();
            if (!e) {
                return;
            }
            r(ye, this, ke).call(this, e);
            l(ve, this).prepend(e, c(ye, this, xe));
            h(ge, this, t);
            t.toolbar = this;
        };
        e.addColorPicker = function p(t) {
            if (l(de, this)) {
                return;
            }
            h(de, this, t);
            var e = t.renderButton();
            r(ye, this, ke).call(this, e);
            l(ve, this).append(e, c(ye, this, xe));
        };
        e.addEditSignatureButton = function() {
            var t = s((function*(t) {
                var e = h(me, this, yield t.renderEditButton(l(fe, this)));
                r(ye, this, ke).call(this, e);
                l(ve, this).append(e, c(ye, this, xe));
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.addButton = function() {
            var t = s((function*(t, e) {
                switch (t) {
                  case "colorPicker":
                    this.addColorPicker(e);
                    break;

                  case "altText":
                    yield this.addAltText(e);
                    break;

                  case "editSignature":
                    yield this.addEditSignatureButton(e);
                    break;

                  case "delete":
                    this.addDeleteButton();
                    break;

                  case "comment":
                    this.addComment(e);
                    break;
                }
            }));
            function e(e, r) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.updateEditSignatureButton = function g(t) {
            if (l(me, this)) {
                l(me, this).title = t;
            }
        };
        e.remove = function m() {
            var t;
            l(ce, this).remove();
            (t = l(de, this)) === null || t === void 0 ? void 0 : t.destroy();
            h(de, this, null);
        };
        return v(t, [ {
            key: "div",
            get: function() {
                return l(ce, this);
            }
        } ]);
    }();
    function be(t) {
        t.stopPropagation();
    }
    function Ae(t) {
        l(fe, this)._focusEventsAllowed = false;
        $t(t);
    }
    function _e(t) {
        l(fe, this)._focusEventsAllowed = true;
        $t(t);
    }
    function ke(t) {
        var e = l(fe, this)._uiManager._signal;
        t.addEventListener("focusin", r(ye, this, Ae).bind(this), {
            capture: true,
            signal: e
        });
        t.addEventListener("focusout", r(ye, this, _e).bind(this), {
            capture: true,
            signal: e
        });
        t.addEventListener("contextmenu", Zt, {
            signal: e
        });
    }
    function xe(t) {
        var e = document.createElement("div");
        e.className = "divider";
        return e;
    }
    var Ee = {
        _: null
    };
    var Se = new WeakMap;
    var Me = new WeakMap;
    var Ce = new WeakMap;
    var Te = new WeakSet;
    var Re = function() {
        function t(t) {
            d(this, Te);
            u(this, Se, null);
            u(this, Me, null);
            u(this, Ce, void 0);
            h(Ce, this, t);
        }
        var e = t.prototype;
        e.show = function i(t, e, n) {
            var [a, s] = r(Te, this, Pe).call(this, e, n);
            var {style: o} = l(Me, this) || h(Me, this, r(Te, this, Ie).call(this));
            t.append(l(Me, this));
            o.insetInlineEnd = 100 * a + "%";
            o.top = "calc(" + 100 * s + "% + var(--editor-toolbar-vert-offset))";
        };
        e.hide = function n() {
            l(Me, this).remove();
        };
        return t;
    }();
    function Ie() {
        var t = this;
        var e = h(Me, this, document.createElement("div"));
        e.className = "editToolbar";
        e.setAttribute("role", "toolbar");
        e.addEventListener("contextmenu", Zt, {
            signal: l(Ce, this)._signal
        });
        var i = h(Se, this, document.createElement("div"));
        i.className = "buttons";
        e.append(i);
        if (l(Ce, this).hasCommentManager()) {
            r(Te, this, Le).call(this, "commentButton", "pdfjs-comment-floating-button", "pdfjs-comment-floating-button-label", (function() {
                l(Ce, t).commentSelection("floating_button");
            }));
        }
        r(Te, this, Le).call(this, "highlightButton", "pdfjs-highlight-floating-button1", "pdfjs-highlight-floating-button-label", (function() {
            l(Ce, t).highlightSelection("floating_button");
        }));
        return e;
    }
    function Pe(t, e) {
        var r = 0;
        var i = 0;
        for (var n of t) {
            var a = n.y + n.height;
            if (a < r) {
                continue;
            }
            var s = n.x + (e ? n.width : 0);
            if (a > r) {
                i = s;
                r = a;
                continue;
            }
            if (e) {
                if (s > i) {
                    i = s;
                }
            } else if (s < i) {
                i = s;
            }
        }
        return [ e ? 1 - i : i, r ];
    }
    function Le(t, e, r, i) {
        var n = document.createElement("button");
        n.classList.add("basic", t);
        n.tabIndex = 0;
        n.setAttribute("data-l10n-id", e);
        var a = document.createElement("span");
        n.append(a);
        a.className = "visuallyHidden";
        a.setAttribute("data-l10n-id", r);
        var s = l(Ce, this)._signal;
        n.addEventListener("contextmenu", Zt, {
            signal: s
        });
        n.addEventListener("click", i, {
            signal: s
        });
        l(Se, this).append(n);
    }
    function De(t, e, r) {
        for (var i of r) {
            e.addEventListener(i, t[i].bind(t));
        }
    }
    var Ne = new WeakMap;
    var Oe = function() {
        function t() {
            u(this, Ne, 0);
        }
        return v(t, [ {
            key: "id",
            get: function() {
                var t, e;
                return "" + G + (h(Ne, this, (t = l(Ne, this), e = t++, t)), e);
            }
        } ]);
    }();
    var Fe = new WeakMap;
    var We = new WeakMap;
    var Be = new WeakMap;
    var je = new WeakSet;
    var He = function() {
        function t() {
            d(this, je);
            u(this, Fe, Dt());
            u(this, We, 0);
            u(this, Be, null);
        }
        var e = t.prototype;
        e.getFromFile = function() {
            var t = s((function*(t) {
                var {lastModified: e, name: i, size: n, type: a} = t;
                return r(je, this, Ue).call(this, e + "_" + i + "_" + n + "_" + a, t);
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.getFromUrl = function() {
            var t = s((function*(t) {
                return r(je, this, Ue).call(this, t, t);
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.getFromBlob = function() {
            var t = s((function*(t, e) {
                var i = yield e;
                return r(je, this, Ue).call(this, t, i);
            }));
            function e(e, r) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.getFromId = function() {
            var t = s((function*(t) {
                l(Be, this) || h(Be, this, new Map);
                var e = l(Be, this).get(t);
                if (!e) {
                    return null;
                }
                if (e.bitmap) {
                    e.refCounter += 1;
                    return e;
                }
                if (e.file) {
                    return this.getFromFile(e.file);
                }
                if (e.blobPromise) {
                    var {blobPromise: r} = e;
                    delete e.blobPromise;
                    return this.getFromBlob(e.id, r);
                }
                return this.getFromUrl(e.url);
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.getFromCanvas = function i(t, e) {
            var r;
            var i, n;
            l(Be, this) || h(Be, this, new Map);
            var a = l(Be, this).get(t);
            if ((r = a) !== null && r !== void 0 && r.bitmap) {
                a.refCounter += 1;
                return a;
            }
            var s = new OffscreenCanvas(e.width, e.height);
            var o = s.getContext("2d");
            o.drawImage(e, 0, 0);
            a = {
                bitmap: s.transferToImageBitmap(),
                id: "image_" + l(Fe, this) + "_" + (h(We, this, (i = l(We, this), n = i++, i)), 
                n),
                refCounter: 1,
                isSvg: false
            };
            l(Be, this).set(t, a);
            l(Be, this).set(a.id, a);
            return a;
        };
        e.getSvgUrl = function n(t) {
            var e = l(Be, this).get(t);
            if (!(e !== null && e !== void 0 && e.isSvg)) {
                return null;
            }
            return e.svgUrl;
        };
        e.deleteId = function a(t) {
            var e;
            l(Be, this) || h(Be, this, new Map);
            var r = l(Be, this).get(t);
            if (!r) {
                return;
            }
            r.refCounter -= 1;
            if (r.refCounter !== 0) {
                return;
            }
            var {bitmap: i} = r;
            if (!r.url && !r.file) {
                var n = new OffscreenCanvas(i.width, i.height);
                var a = n.getContext("bitmaprenderer");
                a.transferFromImageBitmap(i);
                r.blobPromise = n.convertToBlob();
            }
            (e = i.close) === null || e === void 0 ? void 0 : e.call(i);
            r.bitmap = null;
        };
        e.isValidId = function o(t) {
            return t.startsWith("image_" + l(Fe, this) + "_");
        };
        return v(t, null, [ {
            key: "_isSVGFittingCanvas",
            get: function() {
                var t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>';
                var e = new OffscreenCanvas(1, 3);
                var r = e.getContext("2d", {
                    willReadFrequently: true
                });
                var i = new Image;
                i.src = t;
                var n = i.decode().then((function() {
                    r.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3);
                    return new Uint32Array(r.getImageData(0, 0, 1, 1).data.buffer)[0] === 0;
                }));
                return dt(this, "_isSVGFittingCanvas", n);
            }
        } ]);
    }();
    k = He;
    function Ue(t, e) {
        return ze.apply(this, arguments);
    }
    function ze() {
        ze = s((function*(t, e) {
            var r;
            l(Be, this) || h(Be, this, new Map);
            var i = l(Be, this).get(t);
            if (i === null) {
                return null;
            }
            if ((r = i) !== null && r !== void 0 && r.bitmap) {
                i.refCounter += 1;
                return i;
            }
            try {
                var n, a;
                i ||= {
                    bitmap: null,
                    id: "image_" + l(Fe, this) + "_" + (h(We, this, (n = l(We, this), a = n++, n)), 
                    a),
                    refCounter: 0,
                    isSvg: false
                };
                var o;
                if (typeof e === "string") {
                    i.url = e;
                    o = yield Ut(e, "blob");
                } else if (e instanceof File) {
                    o = i.file = e;
                } else if (e instanceof Blob) {
                    o = e;
                }
                if (o.type === "image/svg+xml") {
                    var u = k._isSVGFittingCanvas;
                    var c = new FileReader;
                    var d = new Image;
                    var f = new Promise((function(t, e) {
                        d.onload = function() {
                            i.bitmap = d;
                            i.isSvg = true;
                            t();
                        };
                        c.onload = s((function*() {
                            var t = i.svgUrl = c.result;
                            d.src = (yield u) ? t + "#svgView(preserveAspectRatio(none))" : t;
                        }));
                        d.onerror = c.onerror = e;
                    }));
                    c.readAsDataURL(o);
                    yield f;
                } else {
                    i.bitmap = yield createImageBitmap(o);
                }
                i.refCounter = 1;
            } catch (v) {
                st(v);
                i = null;
            }
            l(Be, this).set(t, i);
            if (i) {
                l(Be, this).set(i.id, i);
            }
            return i;
        }));
        return ze.apply(this, arguments);
    }
    var Ge = new WeakMap;
    var Ve = new WeakMap;
    var qe = new WeakMap;
    var Xe = new WeakMap;
    var Ye = function() {
        function t() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 128;
            u(this, Ge, []);
            u(this, Ve, false);
            u(this, qe, void 0);
            u(this, Xe, -1);
            h(qe, this, t);
        }
        var e = t.prototype;
        e.add = function r(t) {
            var {cmd: e, undo: r, post: i, mustExec: n, type: a = NaN, overwriteIfSameType: s = false, keepUndo: o = false} = t;
            if (n) {
                e();
            }
            if (l(Ve, this)) {
                return;
            }
            var u = {
                cmd: e,
                undo: r,
                post: i,
                type: a
            };
            if (l(Xe, this) === -1) {
                if (l(Ge, this).length > 0) {
                    l(Ge, this).length = 0;
                }
                h(Xe, this, 0);
                l(Ge, this).push(u);
                return;
            }
            if (s && l(Ge, this)[l(Xe, this)].type === a) {
                if (o) {
                    u.undo = l(Ge, this)[l(Xe, this)].undo;
                }
                l(Ge, this)[l(Xe, this)] = u;
                return;
            }
            var c = l(Xe, this) + 1;
            if (c === l(qe, this)) {
                l(Ge, this).splice(0, 1);
            } else {
                h(Xe, this, c);
                if (c < l(Ge, this).length) {
                    l(Ge, this).splice(c);
                }
            }
            l(Ge, this).push(u);
        };
        e.undo = function i() {
            if (l(Xe, this) === -1) {
                return;
            }
            h(Ve, this, true);
            var {undo: i, post: t} = l(Ge, this)[l(Xe, this)];
            i();
            t === null || t === void 0 ? void 0 : t();
            h(Ve, this, false);
            h(Xe, this, l(Xe, this) - 1);
        };
        e.redo = function n() {
            if (l(Xe, this) < l(Ge, this).length - 1) {
                h(Xe, this, l(Xe, this) + 1);
                h(Ve, this, true);
                var {cmd: t, post: e} = l(Ge, this)[l(Xe, this)];
                t();
                e === null || e === void 0 ? void 0 : e();
                h(Ve, this, false);
            }
        };
        e.hasSomethingToUndo = function a() {
            return l(Xe, this) !== -1;
        };
        e.hasSomethingToRedo = function s() {
            return l(Xe, this) < l(Ge, this).length - 1;
        };
        e.cleanType = function o(t) {
            if (l(Xe, this) === -1) {
                return;
            }
            for (var e = l(Xe, this); e >= 0; e--) {
                if (l(Ge, this)[e].type !== t) {
                    l(Ge, this).splice(e + 1, l(Xe, this) - e);
                    h(Xe, this, e);
                    return;
                }
            }
            l(Ge, this).length = 0;
            h(Xe, this, -1);
        };
        e.destroy = function c() {
            h(Ge, this, null);
        };
        return t;
    }();
    var Ke = new WeakSet;
    var Qe = function() {
        function t(t) {
            d(this, Ke);
            this.buffer = [];
            this.callbacks = new Map;
            this.allKeys = new Set;
            var {isMac: e} = Et.platform;
            for (var [r, i, n = {}] of t) {
                for (var a of r) {
                    var s = a.startsWith("mac+");
                    if (e && s) {
                        this.callbacks.set(a.slice(4), {
                            callback: i,
                            options: n
                        });
                        this.allKeys.add(a.split("+").at(-1));
                    } else if (!e && !s) {
                        this.callbacks.set(a, {
                            callback: i,
                            options: n
                        });
                        this.allKeys.add(a.split("+").at(-1));
                    }
                }
            }
        }
        var e = t.prototype;
        e.exec = function i(t, e) {
            if (!this.allKeys.has(e.key)) {
                return;
            }
            var i = this.callbacks.get(r(Ke, this, Je).call(this, e));
            if (!i) {
                return;
            }
            var {callback: n, options: {bubbles: a = false, args: s = [], checker: o = null}} = i;
            if (o && !o(t, e)) {
                return;
            }
            n.bind.apply(n, [ t ].concat(s, [ e ]))();
            if (!a) {
                $t(e);
            }
        };
        return t;
    }();
    function Je(t) {
        if (t.altKey) {
            this.buffer.push("alt");
        }
        if (t.ctrlKey) {
            this.buffer.push("ctrl");
        }
        if (t.metaKey) {
            this.buffer.push("meta");
        }
        if (t.shiftKey) {
            this.buffer.push("shift");
        }
        this.buffer.push(t.key);
        var e = this.buffer.join("+");
        this.buffer.length = 0;
        return e;
    }
    var Ze = function() {
        function t() {}
        var e = t.prototype;
        e.convert = function r(e) {
            var r = ne(e);
            if (!window.matchMedia("(forced-colors: active)").matches) {
                return r;
            }
            for (var [i, n] of this._colors) {
                if (n.every((function(t, e) {
                    return t === r[e];
                }))) {
                    return t._colorsMapping.get(i);
                }
            }
            return r;
        };
        e.getHexCode = function i(t) {
            var e = this._colors.get(t);
            if (!e) {
                return t;
            }
            return Mt.makeHexColor.apply(Mt, e);
        };
        return v(t, [ {
            key: "_colors",
            get: function() {
                var t = new Map([ [ "CanvasText", null ], [ "Canvas", null ] ]);
                ae(t);
                return dt(this, "_colors", t);
            }
        } ]);
    }();
    p(Ze, "_colorsMapping", new Map([ [ "CanvasText", [ 0, 0, 0 ] ], [ "Canvas", [ 255, 255, 255 ] ] ]));
    var $e = new WeakMap;
    var tr = new WeakMap;
    var er = new WeakMap;
    var rr = new WeakMap;
    var ir = new WeakMap;
    var nr = new WeakMap;
    var ar = new WeakMap;
    var sr = new WeakMap;
    var or = new WeakMap;
    var lr = new WeakMap;
    var ur = new WeakMap;
    var hr = new WeakMap;
    var cr = new WeakMap;
    var dr = new WeakMap;
    var fr = new WeakMap;
    var vr = new WeakMap;
    var pr = new WeakMap;
    var gr = new WeakMap;
    var mr = new WeakMap;
    var yr = new WeakMap;
    var wr = new WeakMap;
    var br = new WeakMap;
    var Ar = new WeakMap;
    var _r = new WeakMap;
    var kr = new WeakMap;
    var xr = new WeakMap;
    var Er = new WeakMap;
    var Sr = new WeakMap;
    var Mr = new WeakMap;
    var Cr = new WeakMap;
    var Tr = new WeakMap;
    var Rr = new WeakMap;
    var Ir = new WeakMap;
    var Pr = new WeakMap;
    var Lr = new WeakMap;
    var Dr = new WeakMap;
    var Nr = new WeakMap;
    var Or = new WeakMap;
    var Fr = new WeakMap;
    var Wr = new WeakMap;
    var Br = new WeakMap;
    var jr = new WeakMap;
    var Hr = new WeakMap;
    var Ur = new WeakMap;
    var zr = new WeakMap;
    var Gr = new WeakMap;
    var Vr = new WeakMap;
    var qr = new WeakSet;
    var Xr = function() {
        function t(t, e, i, n, a, s, o, c, f, v, g, m, y, w, b, A) {
            var _ = this;
            d(this, qr);
            u(this, $e, new AbortController);
            u(this, tr, null);
            u(this, er, new Map);
            u(this, rr, new Map);
            u(this, ir, null);
            u(this, nr, null);
            u(this, ar, null);
            u(this, sr, new Ye);
            u(this, or, null);
            u(this, lr, null);
            u(this, ur, null);
            u(this, hr, 0);
            u(this, cr, new Set);
            u(this, dr, null);
            u(this, fr, null);
            u(this, vr, new Set);
            p(this, "_editorUndoBar", null);
            u(this, pr, false);
            u(this, gr, false);
            u(this, mr, false);
            u(this, yr, null);
            u(this, wr, null);
            u(this, br, null);
            u(this, Ar, null);
            u(this, _r, false);
            u(this, kr, null);
            u(this, xr, new Oe);
            u(this, Er, false);
            u(this, Sr, false);
            u(this, Mr, false);
            u(this, Cr, null);
            u(this, Tr, null);
            u(this, Rr, null);
            u(this, Ir, null);
            u(this, Pr, null);
            u(this, Lr, V.NONE);
            u(this, Dr, new Set);
            u(this, Nr, null);
            u(this, Or, null);
            u(this, Fr, null);
            u(this, Wr, null);
            u(this, Br, {
                isEditing: false,
                isEmpty: true,
                hasSomethingToUndo: false,
                hasSomethingToRedo: false,
                hasSelectedEditor: false,
                hasSelectedText: false
            });
            u(this, jr, [ 0, 0 ]);
            u(this, Hr, null);
            u(this, Ur, null);
            u(this, zr, null);
            u(this, Gr, null);
            u(this, Vr, null);
            var k = this._signal = l($e, this).signal;
            h(Ur, this, t);
            h(zr, this, e);
            h(Gr, this, i);
            h(ir, this, n);
            h(or, this, a);
            h(Or, this, s);
            this._eventBus = o;
            o._on("editingaction", this.onEditingAction.bind(this), {
                signal: k
            });
            o._on("pagechanging", this.onPageChanging.bind(this), {
                signal: k
            });
            o._on("scalechanging", this.onScaleChanging.bind(this), {
                signal: k
            });
            o._on("rotationchanging", this.onRotationChanging.bind(this), {
                signal: k
            });
            o._on("setpreference", this.onSetPreference.bind(this), {
                signal: k
            });
            o._on("switchannotationeditorparams", (function(t) {
                return _.updateParams(t.type, t.value);
            }), {
                signal: k
            });
            window.addEventListener("pointerdown", (function() {
                h(Sr, _, true);
            }), {
                capture: true,
                signal: k
            });
            window.addEventListener("pointerup", (function() {
                h(Sr, _, false);
            }), {
                capture: true,
                signal: k
            });
            r(qr, this, $r).call(this);
            r(qr, this, si).call(this);
            r(qr, this, ri).call(this);
            h(nr, this, c.annotationStorage);
            h(yr, this, c.filterFactory);
            h(Fr, this, f);
            h(Ar, this, v || null);
            h(pr, this, g);
            h(gr, this, m);
            h(mr, this, y);
            h(Pr, this, w || null);
            this.viewParameters = {
                realScale: Ht.PDF_TO_CSS_UNITS,
                rotation: 0
            };
            this.isShiftKeyDown = false;
            this._editorUndoBar = b || null;
            this._supportsPinchToZoom = A !== false;
        }
        var e = t.prototype;
        e.destroy = function i() {
            var t, e, r, i, n, a, s, o, u;
            (t = l(Vr, this)) === null || t === void 0 ? void 0 : t.resolve();
            h(Vr, this, null);
            (e = l($e, this)) === null || e === void 0 ? void 0 : e.abort();
            h($e, this, null);
            this._signal = null;
            for (var c of l(rr, this).values()) {
                c.destroy();
            }
            l(rr, this).clear();
            l(er, this).clear();
            l(vr, this).clear();
            (r = l(Ir, this)) === null || r === void 0 ? void 0 : r.clear();
            h(tr, this, null);
            l(Dr, this).clear();
            l(sr, this).destroy();
            (i = l(ir, this)) === null || i === void 0 ? void 0 : i.destroy();
            (n = l(or, this)) === null || n === void 0 ? void 0 : n.destroy();
            (a = l(Or, this)) === null || a === void 0 ? void 0 : a.destroy();
            (s = l(kr, this)) === null || s === void 0 ? void 0 : s.hide();
            h(kr, this, null);
            (o = l(Rr, this)) === null || o === void 0 ? void 0 : o.destroy();
            h(Rr, this, null);
            if (l(wr, this)) {
                clearTimeout(l(wr, this));
                h(wr, this, null);
            }
            if (l(Hr, this)) {
                clearTimeout(l(Hr, this));
                h(Hr, this, null);
            }
            (u = this._editorUndoBar) === null || u === void 0 ? void 0 : u.destroy();
        };
        e.combinedSignal = function n(t) {
            return AbortSignal.any([ this._signal, t.signal ]);
        };
        e.getNonHCMColor = function a(t) {
            if (!this._highlightColors) {
                return t;
            }
            var e = this.highlightColorNames.get(t);
            return this._highlightColors.get(e) || t;
        };
        e.getNonHCMColorName = function o(t) {
            return this.highlightColorNames.get(t) || t;
        };
        e.setCurrentDrawingSession = function f(t) {
            if (t) {
                this.unselectAll();
                this.disableUserSelect(true);
            } else {
                this.disableUserSelect(false);
            }
            h(ur, this, t);
        };
        e.setMainHighlightColorPicker = function g(t) {
            h(Rr, this, t);
        };
        e.editAltText = function m(t) {
            var e;
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            (e = l(ir, this)) === null || e === void 0 ? void 0 : e.editAltText(this, t, r);
        };
        e.hasCommentManager = function y() {
            return !!l(or, this);
        };
        e.editComment = function w(t, e) {
            var r;
            (r = l(or, this)) === null || r === void 0 ? void 0 : r.open(this, t, e);
        };
        e.getSignature = function b(t) {
            var e;
            (e = l(Or, this)) === null || e === void 0 ? void 0 : e.getSignature({
                uiManager: this,
                editor: t
            });
        };
        e.switchToMode = function A(t, e) {
            this._eventBus.on("annotationeditormodechanged", e, {
                once: true,
                signal: this._signal
            });
            this._eventBus.dispatch("showannotationeditorui", {
                source: this,
                mode: t
            });
        };
        e.setPreference = function _(t, e) {
            this._eventBus.dispatch("setpreference", {
                source: this,
                name: t,
                value: e
            });
        };
        e.onSetPreference = function k(t) {
            var {name: e, value: r} = t;
            switch (e) {
              case "enableNewAltTextWhenAddingImage":
                h(mr, this, r);
                break;
            }
        };
        e.onPageChanging = function x(t) {
            var {pageNumber: e} = t;
            h(hr, this, e - 1);
        };
        e.focusMainContainer = function E() {
            l(Ur, this).focus();
        };
        e.findParent = function S(t, e) {
            for (var r of l(rr, this).values()) {
                var {x: i, y: n, width: a, height: s} = r.div.getBoundingClientRect();
                if (t >= i && t <= i + a && e >= n && e <= n + s) {
                    return r;
                }
            }
            return null;
        };
        e.disableUserSelect = function M() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            l(zr, this).classList.toggle("noUserSelect", t);
        };
        e.addShouldRescale = function C(t) {
            l(vr, this).add(t);
        };
        e.removeShouldRescale = function T(t) {
            l(vr, this)["delete"](t);
        };
        e.onScaleChanging = function R(t) {
            var e;
            var {scale: r} = t;
            this.commitOrRemove();
            this.viewParameters.realScale = r * Ht.PDF_TO_CSS_UNITS;
            for (var i of l(vr, this)) {
                i.onScaleChanging();
            }
            (e = l(ur, this)) === null || e === void 0 ? void 0 : e.onScaleChanging();
        };
        e.onRotationChanging = function I(t) {
            var {pagesRotation: e} = t;
            this.commitOrRemove();
            this.viewParameters.rotation = e;
        };
        e.highlightSelection = function P() {
            var t = this;
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var n = document.getSelection();
            if (!n || n.isCollapsed) {
                return;
            }
            var {anchorNode: a, anchorOffset: s, focusNode: o, focusOffset: u} = n;
            var h = n.toString();
            var c = r(qr, this, Yr).call(this, n);
            var d = c.closest(".textLayer");
            var f = this.getSelectionBoxes(d);
            if (!f) {
                return;
            }
            n.empty();
            var v = r(qr, this, Kr).call(this, d);
            var p = l(Lr, this) === V.NONE;
            var g = function() {
                var r = v === null || v === void 0 ? void 0 : v.createAndAddNewEditor({
                    x: 0,
                    y: 0
                }, false, {
                    methodOfCreation: e,
                    boxes: f,
                    anchorNode: a,
                    anchorOffset: s,
                    focusNode: o,
                    focusOffset: u,
                    text: h
                });
                if (p) {
                    t.showAllEditors("highlight", true, true);
                }
                if (i) {
                    r === null || r === void 0 ? void 0 : r.editComment();
                }
            };
            if (p) {
                this.switchToMode(V.HIGHLIGHT, g);
                return;
            }
            g();
        };
        e.commentSelection = function L() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            this.highlightSelection(t, true);
        };
        e.addToAnnotationStorage = function D(t) {
            if (!t.isEmpty() && l(nr, this) && !l(nr, this).has(t.id)) {
                l(nr, this).setValue(t.id, t);
            }
        };
        e.a11yAlert = function N(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var r = l(Gr, this);
            if (!r) {
                return;
            }
            r.setAttribute("data-l10n-id", t);
            if (e) {
                r.setAttribute("data-l10n-args", JSON.stringify(e));
            } else {
                r.removeAttribute("data-l10n-args");
            }
        };
        e.blur = function O() {
            this.isShiftKeyDown = false;
            if (l(_r, this)) {
                h(_r, this, false);
                r(qr, this, Zr).call(this, "main_toolbar");
            }
            if (!this.hasSelection) {
                return;
            }
            var {activeElement: t} = document;
            for (var e of l(Dr, this)) {
                if (e.div.contains(t)) {
                    h(Tr, this, [ e, t ]);
                    e._focusEventsAllowed = false;
                    break;
                }
            }
        };
        e.focus = function F() {
            if (!l(Tr, this)) {
                return;
            }
            var [t, e] = l(Tr, this);
            h(Tr, this, null);
            e.addEventListener("focusin", (function() {
                t._focusEventsAllowed = true;
            }), {
                once: true,
                signal: this._signal
            });
            e.focus();
        };
        e.addEditListeners = function W() {
            r(qr, this, ri).call(this);
            r(qr, this, ni).call(this);
        };
        e.removeEditListeners = function B() {
            r(qr, this, ii).call(this);
            r(qr, this, ai).call(this);
        };
        e.dragOver = function j(t) {
            for (var {type: e} of t.dataTransfer.items) {
                for (var r of l(fr, this)) {
                    if (r.isHandlingMimeForPasting(e)) {
                        t.dataTransfer.dropEffect = "copy";
                        t.preventDefault();
                        return;
                    }
                }
            }
        };
        e.drop = function H(t) {
            for (var e of t.dataTransfer.items) {
                for (var r of l(fr, this)) {
                    if (r.isHandlingMimeForPasting(e.type)) {
                        r.paste(e, this.currentLayer);
                        t.preventDefault();
                        return;
                    }
                }
            }
        };
        e.copy = function U(t) {
            var e;
            t.preventDefault();
            (e = l(tr, this)) === null || e === void 0 ? void 0 : e.commitOrRemove();
            if (!this.hasSelection) {
                return;
            }
            var r = [];
            for (var i of l(Dr, this)) {
                var n = i.serialize(true);
                if (n) {
                    r.push(n);
                }
            }
            if (r.length === 0) {
                return;
            }
            t.clipboardData.setData("application/pdfjs", JSON.stringify(r));
        };
        e.cut = function z(t) {
            this.copy(t);
            this["delete"]();
        };
        e.paste = function() {
            var t = s((function*(t) {
                var e = this;
                t.preventDefault();
                var {clipboardData: i} = t;
                for (var n of i.items) {
                    for (var a of l(fr, this)) {
                        if (a.isHandlingMimeForPasting(n.type)) {
                            a.paste(n, this.currentLayer);
                            return;
                        }
                    }
                }
                var s = i.getData("application/pdfjs");
                if (!s) {
                    return;
                }
                try {
                    s = JSON.parse(s);
                } catch (v) {
                    st('paste: "' + v.message + '".');
                    return;
                }
                if (!Array.isArray(s)) {
                    return;
                }
                this.unselectAll();
                var o = this.currentLayer;
                try {
                    var u = [];
                    for (var h of s) {
                        var c = yield o.deserialize(h);
                        if (!c) {
                            return;
                        }
                        u.push(c);
                    }
                    var d = function() {
                        for (var t of u) {
                            r(qr, e, di).call(e, t);
                        }
                        r(qr, e, pi).call(e, u);
                    };
                    var f = function() {
                        for (var t of u) {
                            t.remove();
                        }
                    };
                    this.addCommands({
                        cmd: d,
                        undo: f,
                        mustExec: true
                    });
                } catch (v) {
                    st('paste: "' + v.message + '".');
                }
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.keydown = function G(e) {
            if (!this.isShiftKeyDown && e.key === "Shift") {
                this.isShiftKeyDown = true;
            }
            if (l(Lr, this) !== V.NONE && !this.isEditorHandlingKeyboard) {
                t._keyboardManager.exec(this, e);
            }
        };
        e.keyup = function X(t) {
            if (this.isShiftKeyDown && t.key === "Shift") {
                this.isShiftKeyDown = false;
                if (l(_r, this)) {
                    h(_r, this, false);
                    r(qr, this, Zr).call(this, "main_toolbar");
                }
            }
        };
        e.onEditingAction = function Y(t) {
            var {name: e} = t;
            switch (e) {
              case "undo":
              case "redo":
              case "delete":
              case "selectAll":
                this[e]();
                break;

              case "highlightSelection":
                this.highlightSelection("context_menu");
                break;

              case "commentSelection":
                this.commentSelection("context_menu");
                break;
            }
        };
        e.setEditingState = function K(t) {
            if (t) {
                r(qr, this, ti).call(this);
                r(qr, this, ni).call(this);
                r(qr, this, oi).call(this, {
                    isEditing: l(Lr, this) !== V.NONE,
                    isEmpty: r(qr, this, vi).call(this),
                    hasSomethingToUndo: l(sr, this).hasSomethingToUndo(),
                    hasSomethingToRedo: l(sr, this).hasSomethingToRedo(),
                    hasSelectedEditor: false
                });
            } else {
                r(qr, this, ei).call(this);
                r(qr, this, ai).call(this);
                r(qr, this, oi).call(this, {
                    isEditing: false
                });
                this.disableUserSelect(false);
            }
        };
        e.registerEditorTypes = function Q(t) {
            if (l(fr, this)) {
                return;
            }
            h(fr, this, t);
            for (var e of l(fr, this)) {
                r(qr, this, li).call(this, e.defaultPropertiesToUpdate);
            }
        };
        e.getId = function J() {
            return l(xr, this).id;
        };
        e.getLayer = function Z(t) {
            return l(rr, this).get(t);
        };
        e.addLayer = function $(t) {
            l(rr, this).set(t.pageIndex, t);
            if (l(Er, this)) {
                t.enable();
            } else {
                t.disable();
            }
        };
        e.removeLayer = function tt(t) {
            l(rr, this)["delete"](t.pageIndex);
        };
        e.updateMode = function() {
            var t = s((function(t) {
                var e = this;
                var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
                return function*(o) {
                    if (l(Lr, e) === t) {
                        return;
                    }
                    if (l(Vr, e)) {
                        yield l(Vr, e).promise;
                        if (!l(Vr, e)) {
                            return;
                        }
                    }
                    h(Vr, e, Promise.withResolvers());
                    (o = l(ur, e)) === null || o === void 0 ? void 0 : o.commitOrRemove();
                    h(Lr, e, t);
                    if (t === V.NONE) {
                        var u;
                        e.setEditingState(false);
                        r(qr, e, ci).call(e);
                        (u = e._editorUndoBar) === null || u === void 0 ? void 0 : u.hide();
                        l(Vr, e).resolve();
                        return;
                    }
                    if (t === V.SIGNATURE) {
                        var c;
                        yield (c = l(Or, e)) === null || c === void 0 ? void 0 : c.loadSignatures();
                    }
                    e.setEditingState(true);
                    yield r(qr, e, ui).call(e);
                    e.unselectAll();
                    for (var d of l(rr, e).values()) {
                        d.updateMode(t);
                    }
                    if (!i) {
                        if (n) {
                            e.addNewEditorFromKeyboard();
                        }
                        l(Vr, e).resolve();
                        return;
                    }
                    for (var f of l(er, e).values()) {
                        if (f.annotationElementId === i || f.id === i) {
                            e.setSelected(f);
                            if (s) {
                                f.editComment();
                            } else if (a) {
                                f.enterInEditMode();
                            }
                        } else {
                            f.unselect();
                        }
                    }
                    l(Vr, e).resolve();
                }();
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.addNewEditorFromKeyboard = function et() {
            if (this.currentLayer.canCreateNewEmptyEditor()) {
                this.currentLayer.addNewEditor();
            }
        };
        e.updateToolbar = function rt(t) {
            if (t.mode === l(Lr, this)) {
                return;
            }
            this._eventBus.dispatch("switchannotationeditormode", {
                source: this,
                ...t
            });
        };
        e.updateParams = function it(t, e) {
            if (!l(fr, this)) {
                return;
            }
            switch (t) {
              case q.CREATE:
                this.currentLayer.addNewEditor(e);
                return;

              case q.HIGHLIGHT_SHOW_ALL:
                this._eventBus.dispatch("reporttelemetry", {
                    source: this,
                    details: {
                        type: "editing",
                        data: {
                            type: "highlight",
                            action: "toggle_visibility"
                        }
                    }
                });
                (l(Wr, this) || h(Wr, this, new Map)).set(t, e);
                this.showAllEditors("highlight", e);
                break;
            }
            if (this.hasSelection) {
                for (var r of l(Dr, this)) {
                    r.updateParams(t, e);
                }
            } else {
                for (var i of l(fr, this)) {
                    i.updateDefaultParams(t, e);
                }
            }
        };
        e.showAllEditors = function nt(t, e) {
            var i, n;
            for (var a of l(er, this).values()) {
                if (a.editorType === t) {
                    a.show(e);
                }
            }
            var s = (i = (n = l(Wr, this)) === null || n === void 0 ? void 0 : n.get(q.HIGHLIGHT_SHOW_ALL)) !== null && i !== void 0 ? i : true;
            if (s !== e) {
                r(qr, this, li).call(this, [ [ q.HIGHLIGHT_SHOW_ALL, e ] ]);
            }
        };
        e.enableWaiting = function at() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            if (l(Mr, this) === t) {
                return;
            }
            h(Mr, this, t);
            for (var e of l(rr, this).values()) {
                if (t) {
                    e.disableClick();
                } else {
                    e.enableClick();
                }
                e.div.classList.toggle("waiting", t);
            }
        };
        e.getEditors = function ot(t) {
            var e = [];
            for (var r of l(er, this).values()) {
                if (r.pageIndex === t) {
                    e.push(r);
                }
            }
            return e;
        };
        e.getEditor = function lt(t) {
            return l(er, this).get(t);
        };
        e.addEditor = function ut(t) {
            l(er, this).set(t.id, t);
        };
        e.removeEditor = function ht(t) {
            var e = this;
            if (t.div.contains(document.activeElement)) {
                if (l(wr, this)) {
                    clearTimeout(l(wr, this));
                }
                h(wr, this, setTimeout((function() {
                    e.focusMainContainer();
                    h(wr, e, null);
                }), 0));
            }
            l(er, this)["delete"](t.id);
            if (t.annotationElementId) {
                var r;
                (r = l(Ir, this)) === null || r === void 0 ? void 0 : r["delete"](t.annotationElementId);
            }
            this.unselect(t);
            if (!t.annotationElementId || !l(cr, this).has(t.annotationElementId)) {
                var i;
                (i = l(nr, this)) === null || i === void 0 ? void 0 : i.remove(t.id);
            }
        };
        e.addDeletedAnnotationElement = function ct(t) {
            l(cr, this).add(t.annotationElementId);
            this.addChangedExistingAnnotation(t);
            t.deleted = true;
        };
        e.isDeletedAnnotationElement = function ft(t) {
            return l(cr, this).has(t);
        };
        e.removeDeletedAnnotationElement = function vt(t) {
            l(cr, this)["delete"](t.annotationElementId);
            this.removeChangedExistingAnnotation(t);
            t.deleted = false;
        };
        e.setActiveEditor = function pt(t) {
            if (l(tr, this) === t) {
                return;
            }
            h(tr, this, t);
            if (t) {
                r(qr, this, li).call(this, t.propertiesToUpdate);
            }
        };
        e.updateUI = function gt(t) {
            if (c(qr, this, fi) === t) {
                r(qr, this, li).call(this, t.propertiesToUpdate);
            }
        };
        e.updateUIForDefaultProperties = function mt(t) {
            r(qr, this, li).call(this, t.defaultPropertiesToUpdate);
        };
        e.toggleSelected = function yt(t) {
            if (l(Dr, this).has(t)) {
                l(Dr, this)["delete"](t);
                t.unselect();
                r(qr, this, oi).call(this, {
                    hasSelectedEditor: this.hasSelection
                });
                return;
            }
            l(Dr, this).add(t);
            t.select();
            r(qr, this, li).call(this, t.propertiesToUpdate);
            r(qr, this, oi).call(this, {
                hasSelectedEditor: true
            });
        };
        e.setSelected = function wt(t) {
            var e;
            this.updateToolbar({
                mode: t.mode,
                editId: t.id
            });
            (e = l(ur, this)) === null || e === void 0 ? void 0 : e.commitOrRemove();
            for (var i of l(Dr, this)) {
                if (i !== t) {
                    i.unselect();
                }
            }
            l(Dr, this).clear();
            l(Dr, this).add(t);
            t.select();
            r(qr, this, li).call(this, t.propertiesToUpdate);
            r(qr, this, oi).call(this, {
                hasSelectedEditor: true
            });
        };
        e.isSelected = function bt(t) {
            return l(Dr, this).has(t);
        };
        e.unselect = function At(t) {
            t.unselect();
            l(Dr, this)["delete"](t);
            r(qr, this, oi).call(this, {
                hasSelectedEditor: this.hasSelection
            });
        };
        e.undo = function _t() {
            var t;
            l(sr, this).undo();
            r(qr, this, oi).call(this, {
                hasSomethingToUndo: l(sr, this).hasSomethingToUndo(),
                hasSomethingToRedo: true,
                isEmpty: r(qr, this, vi).call(this)
            });
            (t = this._editorUndoBar) === null || t === void 0 ? void 0 : t.hide();
        };
        e.redo = function kt() {
            l(sr, this).redo();
            r(qr, this, oi).call(this, {
                hasSomethingToUndo: true,
                hasSomethingToRedo: l(sr, this).hasSomethingToRedo(),
                isEmpty: r(qr, this, vi).call(this)
            });
        };
        e.addCommands = function xt(t) {
            l(sr, this).add(t);
            r(qr, this, oi).call(this, {
                hasSomethingToUndo: true,
                hasSomethingToRedo: false,
                isEmpty: r(qr, this, vi).call(this)
            });
        };
        e.cleanUndoStack = function Et(t) {
            l(sr, this).cleanType(t);
        };
        e["delete"] = function St() {
            var t, e = this;
            this.commitOrRemove();
            var i = (t = this.currentLayer) === null || t === void 0 ? void 0 : t.endDrawingSession(true);
            if (!this.hasSelection && !i) {
                return;
            }
            var n = i ? [ i ] : [].concat(l(Dr, this));
            var a = function() {
                var t;
                (t = e._editorUndoBar) === null || t === void 0 ? void 0 : t.show(s, n.length === 1 ? n[0].editorType : n.length);
                for (var r of n) {
                    r.remove();
                }
            };
            var s = function() {
                for (var t of n) {
                    r(qr, e, di).call(e, t);
                }
            };
            this.addCommands({
                cmd: a,
                undo: s,
                mustExec: true
            });
        };
        e.commitOrRemove = function Mt() {
            var t;
            (t = l(tr, this)) === null || t === void 0 ? void 0 : t.commitOrRemove();
        };
        e.hasSomethingToControl = function Ct() {
            return l(tr, this) || this.hasSelection;
        };
        e.selectAll = function Tt() {
            for (var t of l(Dr, this)) {
                t.commit();
            }
            r(qr, this, pi).call(this, l(er, this).values());
        };
        e.unselectAll = function Rt() {
            var t;
            if (l(tr, this)) {
                l(tr, this).commitOrRemove();
                if (l(Lr, this) !== V.NONE) {
                    return;
                }
            }
            if ((t = l(ur, this)) !== null && t !== void 0 && t.commitOrRemove()) {
                return;
            }
            if (!this.hasSelection) {
                return;
            }
            for (var e of l(Dr, this)) {
                e.unselect();
            }
            l(Dr, this).clear();
            r(qr, this, oi).call(this, {
                hasSelectedEditor: false
            });
        };
        e.translateSelectedEditors = function It(t, e) {
            var r = this;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            if (!i) {
                this.commitOrRemove();
            }
            if (!this.hasSelection) {
                return;
            }
            l(jr, this)[0] += t;
            l(jr, this)[1] += e;
            var [n, a] = l(jr, this);
            var s = [].concat(l(Dr, this));
            var o = 1e3;
            if (l(Hr, this)) {
                clearTimeout(l(Hr, this));
            }
            h(Hr, this, setTimeout((function() {
                h(Hr, r, null);
                l(jr, r)[0] = l(jr, r)[1] = 0;
                r.addCommands({
                    cmd: function() {
                        for (var t of s) {
                            if (l(er, r).has(t.id)) {
                                t.translateInPage(n, a);
                                t.translationDone();
                            }
                        }
                    },
                    undo: function() {
                        for (var t of s) {
                            if (l(er, r).has(t.id)) {
                                t.translateInPage(-n, -a);
                                t.translationDone();
                            }
                        }
                    },
                    mustExec: false
                });
            }), o));
            for (var u of s) {
                u.translateInPage(t, e);
                u.translationDone();
            }
        };
        e.setUpDragSession = function Pt() {
            if (!this.hasSelection) {
                return;
            }
            this.disableUserSelect(true);
            h(dr, this, new Map);
            for (var t of l(Dr, this)) {
                l(dr, this).set(t, {
                    savedX: t.x,
                    savedY: t.y,
                    savedPageIndex: t.pageIndex,
                    newX: 0,
                    newY: 0,
                    newPageIndex: -1
                });
            }
        };
        e.endDragSession = function Lt() {
            var t = this;
            if (!l(dr, this)) {
                return false;
            }
            this.disableUserSelect(false);
            var e = l(dr, this);
            h(dr, this, null);
            var r = false;
            for (var [{x: i, y: n, pageIndex: a}, s] of e) {
                s.newX = i;
                s.newY = n;
                s.newPageIndex = a;
                r ||= i !== s.savedX || n !== s.savedY || a !== s.savedPageIndex;
            }
            if (!r) {
                return false;
            }
            var o = function(e, r, i, n) {
                if (l(er, t).has(e.id)) {
                    var a = l(rr, t).get(n);
                    if (a) {
                        e._setParentAndPosition(a, r, i);
                    } else {
                        e.pageIndex = n;
                        e.x = r;
                        e.y = i;
                    }
                }
            };
            this.addCommands({
                cmd: function() {
                    for (var [t, {newX: r, newY: i, newPageIndex: n}] of e) {
                        o(t, r, i, n);
                    }
                },
                undo: function() {
                    for (var [t, {savedX: r, savedY: i, savedPageIndex: n}] of e) {
                        o(t, r, i, n);
                    }
                },
                mustExec: true
            });
            return true;
        };
        e.dragSelectedEditors = function Dt(t, e) {
            if (!l(dr, this)) {
                return;
            }
            for (var r of l(dr, this).keys()) {
                r.drag(t, e);
            }
        };
        e.rebuild = function Nt(t) {
            if (t.parent === null) {
                var e = this.getLayer(t.pageIndex);
                if (e) {
                    e.changeParent(t);
                    e.addOrRebuild(t);
                } else {
                    this.addEditor(t);
                    this.addToAnnotationStorage(t);
                    t.rebuild();
                }
            } else {
                t.parent.addOrRebuild(t);
            }
        };
        e.isActive = function Ot(t) {
            return l(tr, this) === t;
        };
        e.getActive = function Ft() {
            return l(tr, this);
        };
        e.getMode = function Wt() {
            return l(Lr, this);
        };
        e.getSelectionBoxes = function Bt(t) {
            if (!t) {
                return null;
            }
            var e = document.getSelection();
            for (var r = 0, i = e.rangeCount; r < i; r++) {
                if (!t.contains(e.getRangeAt(r).commonAncestorContainer)) {
                    return null;
                }
            }
            var {x: n, y: a, width: s, height: o} = t.getBoundingClientRect();
            var l;
            switch (t.getAttribute("data-main-rotation")) {
              case "90":
                l = function(t, e, r, i) {
                    return {
                        x: (e - a) / o,
                        y: 1 - (t + r - n) / s,
                        width: i / o,
                        height: r / s
                    };
                };
                break;

              case "180":
                l = function(t, e, r, i) {
                    return {
                        x: 1 - (t + r - n) / s,
                        y: 1 - (e + i - a) / o,
                        width: r / s,
                        height: i / o
                    };
                };
                break;

              case "270":
                l = function(t, e, r, i) {
                    return {
                        x: 1 - (e + i - a) / o,
                        y: (t - n) / s,
                        width: i / o,
                        height: r / s
                    };
                };
                break;

              default:
                l = function(t, e, r, i) {
                    return {
                        x: (t - n) / s,
                        y: (e - a) / o,
                        width: r / s,
                        height: i / o
                    };
                };
                break;
            }
            var u = [];
            for (var h = 0, c = e.rangeCount; h < c; h++) {
                var d = e.getRangeAt(h);
                if (d.collapsed) {
                    continue;
                }
                for (var {x: f, y: v, width: p, height: g} of d.getClientRects()) {
                    if (p === 0 || g === 0) {
                        continue;
                    }
                    u.push(l(f, v, p, g));
                }
            }
            return u.length === 0 ? null : u;
        };
        e.addChangedExistingAnnotation = function jt(t) {
            var {annotationElementId: e, id: r} = t;
            (l(ar, this) || h(ar, this, new Map)).set(e, r);
        };
        e.removeChangedExistingAnnotation = function Ut(t) {
            var e;
            var {annotationElementId: r} = t;
            (e = l(ar, this)) === null || e === void 0 ? void 0 : e["delete"](r);
        };
        e.renderAnnotationElement = function zt(t) {
            var e;
            var r = (e = l(ar, this)) === null || e === void 0 ? void 0 : e.get(t.data.id);
            if (!r) {
                return;
            }
            var i = l(nr, this).getRawValue(r);
            if (!i) {
                return;
            }
            if (l(Lr, this) === V.NONE && !i.hasBeenModified) {
                return;
            }
            i.renderAnnotationElement(t);
        };
        e.setMissingCanvas = function Gt(t, e, r) {
            var i;
            var n = (i = l(Ir, this)) === null || i === void 0 ? void 0 : i.get(t);
            if (!n) {
                return;
            }
            n.setCanvas(e, r);
            l(Ir, this)["delete"](t);
        };
        e.addMissingCanvas = function Vt(t, e) {
            (l(Ir, this) || h(Ir, this, new Map)).set(t, e);
        };
        return v(t, [ {
            key: "mlManager",
            get: function() {
                return l(Pr, this);
            }
        }, {
            key: "useNewAltTextFlow",
            get: function() {
                return l(gr, this);
            }
        }, {
            key: "useNewAltTextWhenAddingImage",
            get: function() {
                return l(mr, this);
            }
        }, {
            key: "hcmFilter",
            get: function() {
                return dt(this, "hcmFilter", l(Fr, this) ? l(yr, this).addHCMFilter(l(Fr, this).foreground, l(Fr, this).background) : "none");
            }
        }, {
            key: "direction",
            get: function() {
                return dt(this, "direction", getComputedStyle(l(Ur, this)).direction);
            }
        }, {
            key: "_highlightColors",
            get: function() {
                return dt(this, "_highlightColors", l(Ar, this) ? new Map(l(Ar, this).split(",").map((function(t) {
                    t = t.split("=").map((function(t) {
                        return t.trim();
                    }));
                    t[1] = t[1].toUpperCase();
                    return t;
                }))) : null);
            }
        }, {
            key: "highlightColors",
            get: function() {
                var {_highlightColors: t} = this;
                if (!t) {
                    return dt(this, "highlightColors", null);
                }
                var e = new Map;
                var r = !!l(Fr, this);
                for (var [i, n] of t) {
                    var a = i.endsWith("_HCM");
                    if (r && a) {
                        e.set(i.replace("_HCM", ""), n);
                        continue;
                    }
                    if (!r && !a) {
                        e.set(i, n);
                    }
                }
                return dt(this, "highlightColors", e);
            }
        }, {
            key: "highlightColorNames",
            get: function() {
                return dt(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (function(t) {
                    return t.reverse();
                }))) : null);
            }
        }, {
            key: "signatureManager",
            get: function() {
                return l(Or, this);
            }
        }, {
            key: "currentLayer",
            get: function() {
                return l(rr, this).get(l(hr, this));
            }
        }, {
            key: "currentPageIndex",
            get: function() {
                return l(hr, this);
            }
        }, {
            key: "firstSelectedEditor",
            get: function() {
                return l(Dr, this).values().next().value;
            }
        }, {
            key: "hasSelection",
            get: function() {
                return l(Dr, this).size !== 0;
            }
        }, {
            key: "isEnterHandled",
            get: function() {
                return l(Dr, this).size === 1 && this.firstSelectedEditor.isEnterHandled;
            }
        }, {
            key: "isEditorHandlingKeyboard",
            get: function() {
                var t;
                return ((t = this.getActive()) === null || t === void 0 ? void 0 : t.shouldGetKeyboardEvents()) || l(Dr, this).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
            }
        }, {
            key: "imageManager",
            get: function() {
                return dt(this, "imageManager", new He);
            }
        } ], [ {
            key: "_keyboardManager",
            get: function() {
                var e = t.prototype;
                var r = function(t) {
                    return l(Ur, t).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && t.hasSomethingToControl();
                };
                var i = function(t, e) {
                    var {target: r} = e;
                    if (r instanceof HTMLInputElement) {
                        var {type: i} = r;
                        return i !== "text" && i !== "number";
                    }
                    return true;
                };
                var n = this.TRANSLATE_SMALL;
                var a = this.TRANSLATE_BIG;
                return dt(this, "_keyboardManager", new Qe([ [ [ "ctrl+a", "mac+meta+a" ], e.selectAll, {
                    checker: i
                } ], [ [ "ctrl+z", "mac+meta+z" ], e.undo, {
                    checker: i
                } ], [ [ "ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z" ], e.redo, {
                    checker: i
                } ], [ [ "Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete" ], e["delete"], {
                    checker: i
                } ], [ [ "Enter", "mac+Enter" ], e.addNewEditorFromKeyboard, {
                    checker: function(t, e) {
                        var {target: r} = e;
                        return !(r instanceof HTMLButtonElement) && l(Ur, t).contains(r) && !t.isEnterHandled;
                    }
                } ], [ [ " ", "mac+ " ], e.addNewEditorFromKeyboard, {
                    checker: function(t, e) {
                        var {target: r} = e;
                        return !(r instanceof HTMLButtonElement) && l(Ur, t).contains(document.activeElement);
                    }
                } ], [ [ "Escape", "mac+Escape" ], e.unselectAll ], [ [ "ArrowLeft", "mac+ArrowLeft" ], e.translateSelectedEditors, {
                    args: [ -n, 0 ],
                    checker: r
                } ], [ [ "ctrl+ArrowLeft", "mac+shift+ArrowLeft" ], e.translateSelectedEditors, {
                    args: [ -a, 0 ],
                    checker: r
                } ], [ [ "ArrowRight", "mac+ArrowRight" ], e.translateSelectedEditors, {
                    args: [ n, 0 ],
                    checker: r
                } ], [ [ "ctrl+ArrowRight", "mac+shift+ArrowRight" ], e.translateSelectedEditors, {
                    args: [ a, 0 ],
                    checker: r
                } ], [ [ "ArrowUp", "mac+ArrowUp" ], e.translateSelectedEditors, {
                    args: [ 0, -n ],
                    checker: r
                } ], [ [ "ctrl+ArrowUp", "mac+shift+ArrowUp" ], e.translateSelectedEditors, {
                    args: [ 0, -a ],
                    checker: r
                } ], [ [ "ArrowDown", "mac+ArrowDown" ], e.translateSelectedEditors, {
                    args: [ 0, n ],
                    checker: r
                } ], [ [ "ctrl+ArrowDown", "mac+shift+ArrowDown" ], e.translateSelectedEditors, {
                    args: [ 0, a ],
                    checker: r
                } ] ]));
            }
        } ]);
    }();
    function Yr(t) {
        var {anchorNode: e} = t;
        return e.nodeType === Node.TEXT_NODE ? e.parentElement : e;
    }
    function Kr(t) {
        var {currentLayer: e} = this;
        if (e.hasTextLayer(t)) {
            return e;
        }
        for (var r of l(rr, this).values()) {
            if (r.hasTextLayer(t)) {
                return r;
            }
        }
        return null;
    }
    function Qr() {
        var t = document.getSelection();
        if (!t || t.isCollapsed) {
            return;
        }
        var e = r(qr, this, Yr).call(this, t);
        var i = e.closest(".textLayer");
        var n = this.getSelectionBoxes(i);
        if (!n) {
            return;
        }
        l(kr, this) || h(kr, this, new Re(this));
        l(kr, this).show(i, n, this.direction === "ltr");
    }
    function Jr() {
        var t, e = this;
        var i = document.getSelection();
        if (!i || i.isCollapsed) {
            if (l(Nr, this)) {
                var n;
                (n = l(kr, this)) === null || n === void 0 ? void 0 : n.hide();
                h(Nr, this, null);
                r(qr, this, oi).call(this, {
                    hasSelectedText: false
                });
            }
            return;
        }
        var {anchorNode: a} = i;
        if (a === l(Nr, this)) {
            return;
        }
        var s = r(qr, this, Yr).call(this, i);
        var o = s.closest(".textLayer");
        if (!o) {
            if (l(Nr, this)) {
                var u;
                (u = l(kr, this)) === null || u === void 0 ? void 0 : u.hide();
                h(Nr, this, null);
                r(qr, this, oi).call(this, {
                    hasSelectedText: false
                });
            }
            return;
        }
        (t = l(kr, this)) === null || t === void 0 ? void 0 : t.hide();
        h(Nr, this, a);
        r(qr, this, oi).call(this, {
            hasSelectedText: true
        });
        if (l(Lr, this) !== V.HIGHLIGHT && l(Lr, this) !== V.NONE) {
            return;
        }
        if (l(Lr, this) === V.HIGHLIGHT) {
            this.showAllEditors("highlight", true, true);
        }
        h(_r, this, this.isShiftKeyDown);
        if (!this.isShiftKeyDown) {
            var c = l(Lr, this) === V.HIGHLIGHT ? r(qr, this, Kr).call(this, o) : null;
            c === null || c === void 0 ? void 0 : c.toggleDrawing();
            if (l(Sr, this)) {
                var d = new AbortController;
                var f = this.combinedSignal(d);
                var v = function(t) {
                    if (t.type === "pointerup" && t.button !== 0) {
                        return;
                    }
                    d.abort();
                    c === null || c === void 0 ? void 0 : c.toggleDrawing(true);
                    if (t.type === "pointerup") {
                        r(qr, e, Zr).call(e, "main_toolbar");
                    }
                };
                window.addEventListener("pointerup", v, {
                    signal: f
                });
                window.addEventListener("blur", v, {
                    signal: f
                });
            } else {
                c === null || c === void 0 ? void 0 : c.toggleDrawing(true);
                r(qr, this, Zr).call(this, "main_toolbar");
            }
        }
    }
    function Zr() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        if (l(Lr, this) === V.HIGHLIGHT) {
            this.highlightSelection(t);
        } else if (l(pr, this)) {
            r(qr, this, Qr).call(this);
        }
    }
    function $r() {
        document.addEventListener("selectionchange", r(qr, this, Jr).bind(this), {
            signal: this._signal
        });
    }
    function ti() {
        if (l(br, this)) {
            return;
        }
        h(br, this, new AbortController);
        var t = this.combinedSignal(l(br, this));
        window.addEventListener("focus", this.focus.bind(this), {
            signal: t
        });
        window.addEventListener("blur", this.blur.bind(this), {
            signal: t
        });
    }
    function ei() {
        var t;
        (t = l(br, this)) === null || t === void 0 ? void 0 : t.abort();
        h(br, this, null);
    }
    function ri() {
        if (l(Cr, this)) {
            return;
        }
        h(Cr, this, new AbortController);
        var t = this.combinedSignal(l(Cr, this));
        window.addEventListener("keydown", this.keydown.bind(this), {
            signal: t
        });
        window.addEventListener("keyup", this.keyup.bind(this), {
            signal: t
        });
    }
    function ii() {
        var t;
        (t = l(Cr, this)) === null || t === void 0 ? void 0 : t.abort();
        h(Cr, this, null);
    }
    function ni() {
        if (l(lr, this)) {
            return;
        }
        h(lr, this, new AbortController);
        var t = this.combinedSignal(l(lr, this));
        document.addEventListener("copy", this.copy.bind(this), {
            signal: t
        });
        document.addEventListener("cut", this.cut.bind(this), {
            signal: t
        });
        document.addEventListener("paste", this.paste.bind(this), {
            signal: t
        });
    }
    function ai() {
        var t;
        (t = l(lr, this)) === null || t === void 0 ? void 0 : t.abort();
        h(lr, this, null);
    }
    function si() {
        var t = this._signal;
        document.addEventListener("dragover", this.dragOver.bind(this), {
            signal: t
        });
        document.addEventListener("drop", this.drop.bind(this), {
            signal: t
        });
    }
    function oi(t) {
        var e = this;
        var i = Object.entries(t).some((function(t) {
            var [r, i] = t;
            return l(Br, e)[r] !== i;
        }));
        if (i) {
            this._eventBus.dispatch("annotationeditorstateschanged", {
                source: this,
                details: Object.assign(l(Br, this), t)
            });
            if (l(Lr, this) === V.HIGHLIGHT && t.hasSelectedEditor === false) {
                r(qr, this, li).call(this, [ [ q.HIGHLIGHT_FREE, true ] ]);
            }
        }
    }
    function li(t) {
        this._eventBus.dispatch("annotationeditorparamschanged", {
            source: this,
            details: t
        });
    }
    function ui() {
        return hi.apply(this, arguments);
    }
    function hi() {
        hi = s((function*() {
            if (!l(Er, this)) {
                h(Er, this, true);
                var t = [];
                for (var e of l(rr, this).values()) {
                    t.push(e.enable());
                }
                yield Promise.all(t);
                for (var r of l(er, this).values()) {
                    r.enable();
                }
            }
        }));
        return hi.apply(this, arguments);
    }
    function ci() {
        this.unselectAll();
        if (l(Er, this)) {
            h(Er, this, false);
            for (var t of l(rr, this).values()) {
                t.disable();
            }
            for (var e of l(er, this).values()) {
                e.disable();
            }
        }
    }
    function di(t) {
        var e = l(rr, this).get(t.pageIndex);
        if (e) {
            e.addOrRebuild(t);
        } else {
            this.addEditor(t);
            this.addToAnnotationStorage(t);
        }
    }
    function fi(t) {
        var e = null;
        for (e of l(Dr, t)) {}
        return e;
    }
    function vi() {
        if (l(er, this).size === 0) {
            return true;
        }
        if (l(er, this).size === 1) {
            for (var t of l(er, this).values()) {
                return t.isEmpty();
            }
        }
        return false;
    }
    function pi(t) {
        for (var e of l(Dr, this)) {
            e.unselect();
        }
        l(Dr, this).clear();
        for (var i of t) {
            if (i.isEmpty()) {
                continue;
            }
            l(Dr, this).add(i);
            i.select();
        }
        r(qr, this, oi).call(this, {
            hasSelectedEditor: this.hasSelection
        });
    }
    p(Xr, "TRANSLATE_SMALL", 1);
    p(Xr, "TRANSLATE_BIG", 10);
    var gi = new WeakMap;
    var mi = new WeakMap;
    var yi = new WeakMap;
    var wi = new WeakMap;
    var bi = new WeakMap;
    var Ai = new WeakMap;
    var _i = new WeakMap;
    var ki = new WeakMap;
    var xi = new WeakMap;
    var Ei = new WeakMap;
    var Si = new WeakMap;
    var Mi = new WeakMap;
    var Ci = new WeakSet;
    var Ti = function() {
        function t(t) {
            d(this, Ci);
            u(this, gi, null);
            u(this, mi, false);
            u(this, yi, null);
            u(this, wi, null);
            u(this, bi, null);
            u(this, Ai, null);
            u(this, _i, false);
            u(this, ki, null);
            u(this, xi, null);
            u(this, Ei, null);
            u(this, Si, null);
            u(this, Mi, false);
            h(xi, this, t);
            h(Mi, this, t._uiManager.useNewAltTextFlow);
            Li._ || (Li._ = Object.freeze({
                added: "pdfjs-editor-new-alt-text-added-button",
                "added-label": "pdfjs-editor-new-alt-text-added-button-label",
                missing: "pdfjs-editor-new-alt-text-missing-button",
                "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
                review: "pdfjs-editor-new-alt-text-to-review-button",
                "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
            }));
        }
        t.initialize = function i(e) {
            t._l10n ??= e;
        };
        var e = t.prototype;
        e.render = function() {
            var t = s((function*() {
                var t = this;
                var e = h(yi, this, document.createElement("button"));
                e.className = "altText";
                e.tabIndex = "0";
                var i = h(wi, this, document.createElement("span"));
                e.append(i);
                if (l(Mi, this)) {
                    e.classList.add("new");
                    e.setAttribute("data-l10n-id", Li._.missing);
                    i.setAttribute("data-l10n-id", Li._["missing-label"]);
                } else {
                    e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button");
                    i.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label");
                }
                var n = l(xi, this)._uiManager._signal;
                e.addEventListener("contextmenu", Zt, {
                    signal: n
                });
                e.addEventListener("pointerdown", (function(t) {
                    return t.stopPropagation();
                }), {
                    signal: n
                });
                var a = function(e) {
                    e.preventDefault();
                    l(xi, t)._uiManager.editAltText(l(xi, t));
                    if (l(Mi, t)) {
                        l(xi, t)._reportTelemetry({
                            action: "pdfjs.image.alt_text.image_status_label_clicked",
                            data: {
                                label: c(Ci, t, Ri)
                            }
                        });
                    }
                };
                e.addEventListener("click", a, {
                    capture: true,
                    signal: n
                });
                e.addEventListener("keydown", (function(r) {
                    if (r.target === e && r.key === "Enter") {
                        h(_i, t, true);
                        a(r);
                    }
                }), {
                    signal: n
                });
                yield r(Ci, this, Ii).call(this);
                return e;
            }));
            function e() {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.finish = function n() {
            if (!l(yi, this)) {
                return;
            }
            l(yi, this).focus({
                focusVisible: l(_i, this)
            });
            h(_i, this, false);
        };
        e.isEmpty = function a() {
            if (l(Mi, this)) {
                return l(gi, this) === null;
            }
            return !l(gi, this) && !l(mi, this);
        };
        e.hasData = function o() {
            if (l(Mi, this)) {
                return l(gi, this) !== null || !!l(Ei, this);
            }
            return this.isEmpty();
        };
        e.setGuessedText = function() {
            var e = s((function*(e) {
                if (l(gi, this) !== null) {
                    return;
                }
                h(Ei, this, e);
                h(Si, this, yield t._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
                    generatedAltText: e
                }));
                r(Ci, this, Ii).call(this);
            }));
            function i(t) {
                return e.apply(this, arguments);
            }
            return i;
        }();
        e.toggleAltTextBadge = function f() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            if (!l(Mi, this) || l(gi, this)) {
                var e;
                (e = l(ki, this)) === null || e === void 0 ? void 0 : e.remove();
                h(ki, this, null);
                return;
            }
            if (!l(ki, this)) {
                var r = h(ki, this, document.createElement("div"));
                r.className = "noAltTextBadge";
                l(xi, this).div.append(r);
            }
            l(ki, this).classList.toggle("hidden", !t);
        };
        e.serialize = function p(t) {
            var e = l(gi, this);
            if (!t && l(Ei, this) === e) {
                e = l(Si, this);
            }
            return {
                altText: e,
                decorative: l(mi, this),
                guessedText: l(Ei, this),
                textWithDisclaimer: l(Si, this)
            };
        };
        e.toggle = function g() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            if (!l(yi, this)) {
                return;
            }
            if (!t && l(Ai, this)) {
                clearTimeout(l(Ai, this));
                h(Ai, this, null);
            }
            l(yi, this).disabled = !t;
        };
        e.shown = function m() {
            l(xi, this)._reportTelemetry({
                action: "pdfjs.image.alt_text.image_status_label_displayed",
                data: {
                    label: c(Ci, this, Ri)
                }
            });
        };
        e.destroy = function y() {
            var t, e;
            (t = l(yi, this)) === null || t === void 0 ? void 0 : t.remove();
            h(yi, this, null);
            h(wi, this, null);
            h(bi, this, null);
            (e = l(ki, this)) === null || e === void 0 ? void 0 : e.remove();
            h(ki, this, null);
        };
        return v(t, [ {
            key: "guessedText",
            get: function() {
                return l(Ei, this);
            }
        }, {
            key: "data",
            get: function() {
                return {
                    altText: l(gi, this),
                    decorative: l(mi, this)
                };
            },
            set: function(t) {
                var {altText: e, decorative: i, guessedText: n, textWithDisclaimer: a, cancel: s = false} = t;
                if (n) {
                    h(Ei, this, n);
                    h(Si, this, a);
                }
                if (l(gi, this) === e && l(mi, this) === i) {
                    return;
                }
                if (!s) {
                    h(gi, this, e);
                    h(mi, this, i);
                }
                r(Ci, this, Ii).call(this);
            }
        } ]);
    }();
    function Ri(t) {
        return l(gi, t) && "added" || l(gi, t) === null && t.guessedText && "review" || "missing";
    }
    function Ii() {
        return Pi.apply(this, arguments);
    }
    function Pi() {
        Pi = s((function*() {
            var t = this;
            var e = l(yi, this);
            if (!e) {
                return;
            }
            if (l(Mi, this)) {
                var r;
                e.classList.toggle("done", !!l(gi, this));
                e.setAttribute("data-l10n-id", Li._[c(Ci, this, Ri)]);
                (r = l(wi, this)) === null || r === void 0 ? void 0 : r.setAttribute("data-l10n-id", Li._[c(Ci, this, Ri) + "-label"]);
                if (!l(gi, this)) {
                    var i;
                    (i = l(bi, this)) === null || i === void 0 ? void 0 : i.remove();
                    return;
                }
            } else {
                if (!l(gi, this) && !l(mi, this)) {
                    var n;
                    e.classList.remove("done");
                    (n = l(bi, this)) === null || n === void 0 ? void 0 : n.remove();
                    return;
                }
                e.classList.add("done");
                e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
            }
            var a = l(bi, this);
            if (!a) {
                h(bi, this, a = document.createElement("span"));
                a.className = "tooltip";
                a.setAttribute("role", "tooltip");
                a.id = "alt-text-tooltip-" + l(xi, this).id;
                var s = 100;
                var o = l(xi, this)._uiManager._signal;
                o.addEventListener("abort", (function() {
                    clearTimeout(l(Ai, t));
                    h(Ai, t, null);
                }), {
                    once: true
                });
                e.addEventListener("mouseenter", (function() {
                    h(Ai, t, setTimeout((function() {
                        h(Ai, t, null);
                        l(bi, t).classList.add("show");
                        l(xi, t)._reportTelemetry({
                            action: "alt_text_tooltip"
                        });
                    }), s));
                }), {
                    signal: o
                });
                e.addEventListener("mouseleave", (function() {
                    var e;
                    if (l(Ai, t)) {
                        clearTimeout(l(Ai, t));
                        h(Ai, t, null);
                    }
                    (e = l(bi, t)) === null || e === void 0 ? void 0 : e.classList.remove("show");
                }), {
                    signal: o
                });
            }
            if (l(mi, this)) {
                a.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip");
            } else {
                a.removeAttribute("data-l10n-id");
                a.textContent = l(gi, this);
            }
            if (!a.parentNode) {
                e.append(a);
            }
            var u = l(xi, this).getElementForAltText();
            u === null || u === void 0 ? void 0 : u.setAttribute("aria-describedby", a.id);
        }));
        return Pi.apply(this, arguments);
    }
    var Li = {
        _: null
    };
    p(Ti, "_l10n", null);
    var Di = new WeakMap;
    var Ni = new WeakMap;
    var Oi = new WeakMap;
    var Fi = new WeakMap;
    var Wi = new WeakMap;
    var Bi = new WeakMap;
    var ji = new WeakMap;
    var Hi = function() {
        function t(t) {
            u(this, Di, null);
            u(this, Ni, false);
            u(this, Oi, null);
            u(this, Fi, null);
            u(this, Wi, null);
            u(this, Bi, null);
            u(this, ji, false);
            h(Oi, this, t);
            this.toolbar = null;
        }
        var e = t.prototype;
        e.render = function r() {
            var t = this;
            if (!l(Oi, this)._uiManager.hasCommentManager()) {
                return null;
            }
            var e = h(Di, this, document.createElement("button"));
            e.className = "comment";
            e.tabIndex = "0";
            e.setAttribute("data-l10n-id", "pdfjs-editor-edit-comment-button");
            var r = l(Oi, this)._uiManager._signal;
            e.addEventListener("contextmenu", Zt, {
                signal: r
            });
            e.addEventListener("pointerdown", (function(t) {
                return t.stopPropagation();
            }), {
                signal: r
            });
            var i = function(e) {
                e.preventDefault();
                t.edit();
            };
            e.addEventListener("click", i, {
                capture: true,
                signal: r
            });
            e.addEventListener("keydown", (function(r) {
                if (r.target === e && r.key === "Enter") {
                    h(Ni, t, true);
                    i(r);
                }
            }), {
                signal: r
            });
            return e;
        };
        e.edit = function i() {
            var {bottom: t, left: e, right: r} = l(Oi, this).getClientDimensions();
            var i = {
                top: t
            };
            if (l(Oi, this)._uiManager.direction === "ltr") {
                i.right = r;
            } else {
                i.left = e;
            }
            l(Oi, this)._uiManager.editComment(l(Oi, this), i);
        };
        e.finish = function n() {
            if (!l(Di, this)) {
                return;
            }
            l(Di, this).focus({
                focusVisible: l(Ni, this)
            });
            h(Ni, this, false);
        };
        e.isDeleted = function a() {
            return l(ji, this) || l(Wi, this) === "";
        };
        e.hasBeenEdited = function s() {
            return this.isDeleted() || l(Wi, this) !== l(Fi, this);
        };
        e.serialize = function o() {
            return this.data;
        };
        e.setInitialText = function c(t) {
            h(Fi, this, t);
            this.data = t;
        };
        e.toggle = function d() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            if (!l(Di, this)) {
                return;
            }
            l(Di, this).disabled = !t;
        };
        e.shown = function f() {};
        e.destroy = function p() {
            var t;
            (t = l(Di, this)) === null || t === void 0 ? void 0 : t.remove();
            h(Di, this, null);
            h(Wi, this, "");
            h(Bi, this, null);
            h(Oi, this, null);
            h(Ni, this, false);
            h(ji, this, false);
        };
        return v(t, [ {
            key: "data",
            get: function() {
                return {
                    text: l(Wi, this),
                    date: l(Bi, this),
                    deleted: l(ji, this)
                };
            },
            set: function(t) {
                if (t === null) {
                    h(Wi, this, "");
                    h(ji, this, true);
                    return;
                }
                h(Wi, this, t);
                h(Bi, this, new Date);
                h(ji, this, false);
            }
        } ]);
    }();
    var Ui = new WeakMap;
    var zi = new WeakMap;
    var Gi = new WeakMap;
    var Vi = new WeakMap;
    var qi = new WeakMap;
    var Xi = new WeakMap;
    var Yi = new WeakMap;
    var Ki = new WeakMap;
    var Qi = new WeakMap;
    var Ji = new WeakMap;
    var Zi = new WeakMap;
    var $i = new WeakMap;
    var tn = new WeakSet;
    var en = function() {
        function t(t) {
            var {container: e, isPinchingDisabled: i = null, isPinchingStopped: n = null, onPinchStart: a = null, onPinching: s = null, onPinchEnd: o = null, signal: c} = t;
            d(this, tn);
            u(this, Ui, void 0);
            u(this, zi, false);
            u(this, Gi, null);
            u(this, Vi, void 0);
            u(this, qi, void 0);
            u(this, Xi, void 0);
            u(this, Yi, void 0);
            u(this, Ki, null);
            u(this, Qi, void 0);
            u(this, Ji, null);
            u(this, Zi, void 0);
            u(this, $i, null);
            h(Ui, this, e);
            h(Gi, this, n);
            h(Vi, this, i);
            h(qi, this, a);
            h(Xi, this, s);
            h(Yi, this, o);
            h(Zi, this, new AbortController);
            h(Qi, this, AbortSignal.any([ c, l(Zi, this).signal ]));
            e.addEventListener("touchstart", r(tn, this, rn).bind(this), {
                passive: false,
                signal: l(Qi, this)
            });
        }
        var e = t.prototype;
        e.destroy = function i() {
            var t, e;
            (t = l(Zi, this)) === null || t === void 0 ? void 0 : t.abort();
            h(Zi, this, null);
            (e = l(Ki, this)) === null || e === void 0 ? void 0 : e.abort();
            h(Ki, this, null);
        };
        return v(t, [ {
            key: "MIN_TOUCH_DISTANCE_TO_PINCH",
            get: function() {
                return 35 / ue.pixelRatio;
            }
        } ]);
    }();
    x = en;
    function rn(t) {
        var e, i = this, n;
        if ((e = l(Vi, this)) !== null && e !== void 0 && e.call(this)) {
            return;
        }
        if (t.touches.length === 1) {
            if (l(Ki, this)) {
                return;
            }
            var a = h(Ki, this, new AbortController);
            var s = AbortSignal.any([ l(Qi, this), a.signal ]);
            var o = l(Ui, this);
            var u = {
                capture: true,
                signal: s,
                passive: false
            };
            var c = function(t) {
                if (t.pointerType === "touch") {
                    var e;
                    (e = l(Ki, i)) === null || e === void 0 ? void 0 : e.abort();
                    h(Ki, i, null);
                }
            };
            o.addEventListener("pointerdown", (function(t) {
                if (t.pointerType === "touch") {
                    $t(t);
                    c(t);
                }
            }), u);
            o.addEventListener("pointerup", c, u);
            o.addEventListener("pointercancel", c, u);
            return;
        }
        if (!l($i, this)) {
            var d;
            h($i, this, new AbortController);
            var f = AbortSignal.any([ l(Qi, this), l($i, this).signal ]);
            var v = l(Ui, this);
            var p = {
                signal: f,
                capture: false,
                passive: false
            };
            v.addEventListener("touchmove", r(tn, this, nn).bind(this), p);
            var g = r(tn, this, an).bind(this);
            v.addEventListener("touchend", g, p);
            v.addEventListener("touchcancel", g, p);
            p.capture = true;
            v.addEventListener("pointerdown", $t, p);
            v.addEventListener("pointermove", $t, p);
            v.addEventListener("pointercancel", $t, p);
            v.addEventListener("pointerup", $t, p);
            (d = l(qi, this)) === null || d === void 0 ? void 0 : d.call(this);
        }
        $t(t);
        if (t.touches.length !== 2 || (n = l(Gi, this)) !== null && n !== void 0 && n.call(this)) {
            h(Ji, this, null);
            return;
        }
        var [m, y] = t.touches;
        if (m.identifier > y.identifier) {
            [m, y] = [ y, m ];
        }
        h(Ji, this, {
            touch0X: m.screenX,
            touch0Y: m.screenY,
            touch1X: y.screenX,
            touch1Y: y.screenY
        });
    }
    function nn(t) {
        var e;
        if (!l(Ji, this) || t.touches.length !== 2) {
            return;
        }
        $t(t);
        var [r, i] = t.touches;
        if (r.identifier > i.identifier) {
            [r, i] = [ i, r ];
        }
        var {screenX: n, screenY: a} = r;
        var {screenX: s, screenY: o} = i;
        var u = l(Ji, this);
        var {touch0X: c, touch0Y: d, touch1X: f, touch1Y: v} = u;
        var p = f - c;
        var g = v - d;
        var m = s - n;
        var y = o - a;
        var w = Math.hypot(m, y) || 1;
        var b = Math.hypot(p, g) || 1;
        if (!l(zi, this) && Math.abs(b - w) <= x.MIN_TOUCH_DISTANCE_TO_PINCH) {
            return;
        }
        u.touch0X = n;
        u.touch0Y = a;
        u.touch1X = s;
        u.touch1Y = o;
        if (!l(zi, this)) {
            h(zi, this, true);
            return;
        }
        var A = [ (n + s) / 2, (a + o) / 2 ];
        (e = l(Xi, this)) === null || e === void 0 ? void 0 : e.call(this, A, b, w);
    }
    function an(t) {
        if (t.touches.length >= 2) {
            return;
        }
        if (l($i, this)) {
            var e;
            l($i, this).abort();
            h($i, this, null);
            (e = l(Yi, this)) === null || e === void 0 ? void 0 : e.call(this);
        }
        if (!l(Ji, this)) {
            return;
        }
        $t(t);
        h(Ji, this, null);
        h(zi, this, false);
    }
    var sn = new WeakMap;
    var on = new WeakMap;
    var ln = new WeakMap;
    var un = new WeakMap;
    var hn = new WeakMap;
    var cn = new WeakMap;
    var dn = new WeakMap;
    var fn = new WeakMap;
    var vn = new WeakMap;
    var pn = new WeakMap;
    var gn = new WeakMap;
    var mn = new WeakMap;
    var yn = new WeakMap;
    var wn = new WeakMap;
    var bn = new WeakMap;
    var An = new WeakMap;
    var _n = new WeakMap;
    var kn = new WeakMap;
    var xn = new WeakMap;
    var En = new WeakMap;
    var Sn = new WeakMap;
    var Mn = new WeakMap;
    var Cn = new WeakMap;
    var Tn = new WeakMap;
    var Rn = new WeakMap;
    var In = new WeakSet;
    var Pn = function() {
        function t(e) {
            d(this, In);
            u(this, sn, null);
            u(this, on, null);
            u(this, ln, null);
            u(this, un, null);
            u(this, hn, false);
            u(this, cn, null);
            u(this, dn, "");
            u(this, fn, false);
            u(this, vn, null);
            u(this, pn, null);
            u(this, gn, null);
            u(this, mn, null);
            u(this, yn, "");
            u(this, wn, false);
            u(this, bn, null);
            u(this, An, false);
            u(this, _n, false);
            u(this, kn, false);
            u(this, xn, null);
            u(this, En, 0);
            u(this, Sn, 0);
            u(this, Mn, null);
            u(this, Cn, null);
            p(this, "isSelected", false);
            p(this, "_isCopy", false);
            p(this, "_editToolbar", null);
            p(this, "_initialOptions", Object.create(null));
            p(this, "_initialData", null);
            p(this, "_isVisible", true);
            p(this, "_uiManager", null);
            p(this, "_focusEventsAllowed", true);
            u(this, Tn, false);
            u(this, Rn, t._zIndex++);
            this.parent = e.parent;
            this.id = e.id;
            this.width = this.height = null;
            this.pageIndex = e.parent.pageIndex;
            this.name = e.name;
            this.div = null;
            this._uiManager = e.uiManager;
            this.annotationElementId = null;
            this._willKeepAspectRatio = false;
            this._initialOptions.isCentered = e.isCentered;
            this._structTreeParentId = null;
            this.annotationElementId = e.annotationElementId || null;
            var {rotation: r, rawDims: {pageWidth: i, pageHeight: n, pageX: a, pageY: s}} = this.parent.viewport;
            this.rotation = r;
            this.pageRotation = (360 + r - this._uiManager.viewParameters.rotation) % 360;
            this.pageDimensions = [ i, n ];
            this.pageTranslation = [ a, s ];
            var [o, l] = this.parentDimensions;
            this.x = e.x / o;
            this.y = e.y / l;
            this.isAttachedToDOM = false;
            this.deleted = false;
        }
        t.deleteAnnotationElement = function i(t) {
            var e = new Zn({
                id: t.parent.getNextId(),
                parent: t.parent,
                uiManager: t._uiManager
            });
            e.annotationElementId = t.annotationElementId;
            e.deleted = true;
            e._uiManager.addToAnnotationStorage(e);
        };
        t.initialize = function n(e, r) {
            t._l10n ??= e;
            t._l10nResizer ||= Object.freeze({
                topLeft: "pdfjs-editor-resizer-top-left",
                topMiddle: "pdfjs-editor-resizer-top-middle",
                topRight: "pdfjs-editor-resizer-top-right",
                middleRight: "pdfjs-editor-resizer-middle-right",
                bottomRight: "pdfjs-editor-resizer-bottom-right",
                bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
                bottomLeft: "pdfjs-editor-resizer-bottom-left",
                middleLeft: "pdfjs-editor-resizer-middle-left"
            });
            if (t._borderLineWidth !== -1) {
                return;
            }
            var i = getComputedStyle(document.documentElement);
            t._borderLineWidth = parseFloat(i.getPropertyValue("--outline-width")) || 0;
        };
        t.updateDefaultParams = function a(t, e) {};
        t.isHandlingMimeForPasting = function o(t) {
            return false;
        };
        t.paste = function c(t, e) {
            ot("Not implemented");
        };
        var e = t.prototype;
        e.center = function f() {
            var [t, e] = this.pageDimensions;
            switch (this.parentRotation) {
              case 90:
                this.x -= this.height * e / (t * 2);
                this.y += this.width * t / (e * 2);
                break;

              case 180:
                this.x += this.width / 2;
                this.y += this.height / 2;
                break;

              case 270:
                this.x += this.height * e / (t * 2);
                this.y -= this.width * t / (e * 2);
                break;

              default:
                this.x -= this.width / 2;
                this.y -= this.height / 2;
                break;
            }
            this.fixAndSetPosition();
        };
        e.addCommands = function g(t) {
            this._uiManager.addCommands(t);
        };
        e.setInBackground = function m() {
            this.div.style.zIndex = 0;
        };
        e.setInForeground = function y() {
            this.div.style.zIndex = l(Rn, this);
        };
        e.setParent = function w(t) {
            if (t !== null) {
                this.pageIndex = t.pageIndex;
                this.pageDimensions = t.pageDimensions;
            } else {
                r(In, this, Jn).call(this);
            }
            this.parent = t;
        };
        e.focusin = function b(t) {
            if (!this._focusEventsAllowed) {
                return;
            }
            if (!l(wn, this)) {
                this.parent.setSelected(this);
            } else {
                h(wn, this, false);
            }
        };
        e.focusout = function A(t) {
            var e;
            if (!this._focusEventsAllowed) {
                return;
            }
            if (!this.isAttachedToDOM) {
                return;
            }
            var r = t.relatedTarget;
            if (r !== null && r !== void 0 && r.closest("#" + this.id)) {
                return;
            }
            t.preventDefault();
            if (!((e = this.parent) !== null && e !== void 0 && e.isMultipleSelection)) {
                this.commitOrRemove();
            }
        };
        e.commitOrRemove = function _() {
            if (this.isEmpty()) {
                this.remove();
            } else {
                this.commit();
            }
        };
        e.commit = function k() {
            if (!this.isInEditMode()) {
                return;
            }
            this.addToAnnotationStorage();
        };
        e.addToAnnotationStorage = function x() {
            this._uiManager.addToAnnotationStorage(this);
        };
        e.setAt = function E(t, e, r, i) {
            var [n, a] = this.parentDimensions;
            [r, i] = this.screenToPageTranslation(r, i);
            this.x = (t + r) / n;
            this.y = (e + i) / a;
            this.fixAndSetPosition();
        };
        e._moveAfterPaste = function S(t, e) {
            var [r, i] = this.parentDimensions;
            this.setAt(t * r, e * i, this.width * r, this.height * i);
            this._onTranslated();
        };
        e.translate = function M(t, e) {
            r(In, this, Ln).call(this, this.parentDimensions, t, e);
        };
        e.translateInPage = function C(t, e) {
            l(bn, this) || h(bn, this, [ this.x, this.y, this.width, this.height ]);
            r(In, this, Ln).call(this, this.pageDimensions, t, e);
            this.div.scrollIntoView({
                block: "nearest"
            });
        };
        e.translationDone = function T() {
            this._onTranslated(this.x, this.y);
        };
        e.drag = function R(t, e) {
            l(bn, this) || h(bn, this, [ this.x, this.y, this.width, this.height ]);
            var {div: r, parentDimensions: [i, n]} = this;
            this.x += t / i;
            this.y += e / n;
            if (this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
                var {x: a, y: s} = this.div.getBoundingClientRect();
                if (this.parent.findNewParent(this, a, s)) {
                    this.x -= Math.floor(this.x);
                    this.y -= Math.floor(this.y);
                }
            }
            var {x: o, y: u} = this;
            var [c, d] = this.getBaseTranslation();
            o += c;
            u += d;
            var {style: f} = r;
            f.left = (100 * o).toFixed(2) + "%";
            f.top = (100 * u).toFixed(2) + "%";
            this._onTranslating(o, u);
            r.scrollIntoView({
                block: "nearest"
            });
        };
        e._onTranslating = function I(t, e) {};
        e._onTranslated = function P(t, e) {};
        e.getBaseTranslation = function L() {
            var [e, r] = this.parentDimensions;
            var {_borderLineWidth: i} = t;
            var n = i / e;
            var a = i / r;
            switch (this.rotation) {
              case 90:
                return [ -n, a ];

              case 180:
                return [ n, a ];

              case 270:
                return [ n, -a ];

              default:
                return [ -n, -a ];
            }
        };
        e.fixAndSetPosition = function D() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.rotation;
            var {div: {style: e}, pageDimensions: [r, i]} = this;
            var {x: n, y: a, width: s, height: o} = this;
            s *= r;
            o *= i;
            n *= r;
            a *= i;
            if (this._mustFixPosition) {
                switch (t) {
                  case 0:
                    n = Ft(n, 0, r - s);
                    a = Ft(a, 0, i - o);
                    break;

                  case 90:
                    n = Ft(n, 0, r - o);
                    a = Ft(a, s, i);
                    break;

                  case 180:
                    n = Ft(n, s, r);
                    a = Ft(a, o, i);
                    break;

                  case 270:
                    n = Ft(n, o, r);
                    a = Ft(a, 0, i - s);
                    break;
                }
            }
            this.x = n /= r;
            this.y = a /= i;
            var [l, u] = this.getBaseTranslation();
            n += l;
            a += u;
            e.left = (100 * n).toFixed(2) + "%";
            e.top = (100 * a).toFixed(2) + "%";
            this.moveInDOM();
        };
        e.screenToPageTranslation = function N(e, r) {
            return Dn.call(t, e, r, this.parentRotation);
        };
        e.pageTranslationToScreen = function O(e, r) {
            return Dn.call(t, e, r, 360 - this.parentRotation);
        };
        e.setDims = function F(t, e) {
            var [r, i] = this.parentDimensions;
            var {style: n} = this.div;
            n.width = (100 * t / r).toFixed(2) + "%";
            if (!l(fn, this)) {
                n.height = (100 * e / i).toFixed(2) + "%";
            }
        };
        e.fixDims = function W() {
            var {style: t} = this.div;
            var {height: e, width: r} = t;
            var i = r.endsWith("%");
            var n = !l(fn, this) && e.endsWith("%");
            if (i && n) {
                return;
            }
            var [a, s] = this.parentDimensions;
            if (!i) {
                t.width = (100 * parseFloat(r) / a).toFixed(2) + "%";
            }
            if (!l(fn, this) && !n) {
                t.height = (100 * parseFloat(e) / s).toFixed(2) + "%";
            }
        };
        e.getInitialTranslation = function B() {
            return [ 0, 0 ];
        };
        e._onResized = function j() {};
        t._round = function H(t) {
            return Math.round(t * 1e4) / 1e4;
        };
        e._onResizing = function U() {};
        e.altTextFinish = function z() {
            var t;
            (t = l(ln, this)) === null || t === void 0 ? void 0 : t.finish();
        };
        e.addEditToolbar = function() {
            var t = s((function*() {
                if (this._editToolbar || l(_n, this)) {
                    return this._editToolbar;
                }
                this._editToolbar = new we(this);
                this.div.append(this._editToolbar.render());
                this._editToolbar.addButton("comment", this.addCommentButton());
                var {toolbarButtons: t} = this;
                if (t) {
                    for (var [e, r] of t) {
                        yield this._editToolbar.addButton(e, r);
                    }
                }
                this._editToolbar.addButton("delete");
                return this._editToolbar;
            }));
            function e() {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.removeEditToolbar = function G() {
            var t;
            if (!this._editToolbar) {
                return;
            }
            this._editToolbar.remove();
            this._editToolbar = null;
            (t = l(ln, this)) === null || t === void 0 ? void 0 : t.destroy();
        };
        e.addContainer = function V(t) {
            var e;
            var r = (e = this._editToolbar) === null || e === void 0 ? void 0 : e.div;
            if (r) {
                r.before(t);
            } else {
                this.div.append(t);
            }
        };
        e.getClientDimensions = function q() {
            return this.div.getBoundingClientRect();
        };
        e.createAltText = function X() {
            if (!l(ln, this)) {
                Ti.initialize(t._l10n);
                h(ln, this, new Ti(this));
                if (l(sn, this)) {
                    l(ln, this).data = l(sn, this);
                    h(sn, this, null);
                }
            }
            return l(ln, this);
        };
        e.setGuessedAltText = function() {
            var t = s((function*(t) {
                var e;
                yield (e = l(ln, this)) === null || e === void 0 ? void 0 : e.setGuessedText(t);
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.serializeAltText = function Y(t) {
            var e;
            return (e = l(ln, this)) === null || e === void 0 ? void 0 : e.serialize(t);
        };
        e.hasAltText = function K() {
            return !!l(ln, this) && !l(ln, this).isEmpty();
        };
        e.hasAltTextData = function Q() {
            var t, e;
            return (t = (e = l(ln, this)) === null || e === void 0 ? void 0 : e.hasData()) !== null && t !== void 0 ? t : false;
        };
        e.addCommentButton = function J() {
            if (l(un, this)) {
                return l(un, this);
            }
            return h(un, this, new Hi(this));
        };
        e.setCommentData = function Z(t) {
            if (!l(un, this)) {
                h(un, this, new Hi(this));
            }
            l(un, this).setInitialText(t);
        };
        e.editComment = function() {
            var t = s((function*() {
                if (!l(un, this)) {
                    h(un, this, new Hi(this));
                }
                l(un, this).edit();
            }));
            function e() {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.addComment = function $(t) {
            if (this.hasEditedComment) {
                t.popup = {
                    contents: this.comment.text,
                    deleted: this.comment.deleted
                };
            }
        };
        e.render = function tt() {
            var t = this, e;
            var i = this.div = document.createElement("div");
            i.setAttribute("data-editor-rotation", (360 - this.rotation) % 360);
            i.className = this.name;
            i.setAttribute("id", this.id);
            i.tabIndex = l(hn, this) ? -1 : 0;
            i.setAttribute("role", "application");
            if (this.defaultL10nId) {
                i.setAttribute("data-l10n-id", this.defaultL10nId);
            }
            if (!this._isVisible) {
                i.classList.add("hidden");
            }
            this.setInForeground();
            r(In, this, qn).call(this);
            var [n, a] = this.parentDimensions;
            if (this.parentRotation % 180 !== 0) {
                i.style.maxWidth = (100 * a / n).toFixed(2) + "%";
                i.style.maxHeight = (100 * n / a).toFixed(2) + "%";
            }
            var [s, o] = this.getInitialTranslation();
            this.translate(s, o);
            De(this, i, [ "keydown", "pointerdown", "dblclick" ]);
            if (this.isResizable && this._uiManager._supportsPinchToZoom) {
                l(Cn, this) || h(Cn, this, new en({
                    container: i,
                    isPinchingDisabled: function() {
                        return !t.isSelected;
                    },
                    onPinchStart: r(In, this, Hn).bind(this),
                    onPinching: r(In, this, Un).bind(this),
                    onPinchEnd: r(In, this, zn).bind(this),
                    signal: this._uiManager._signal
                }));
            }
            (e = this._uiManager._editorUndoBar) === null || e === void 0 ? void 0 : e.hide();
            return i;
        };
        e.pointerdown = function et(t) {
            var {isMac: e} = Et.platform;
            if (t.button !== 0 || t.ctrlKey && e) {
                t.preventDefault();
                return;
            }
            h(wn, this, true);
            if (this._isDraggable) {
                r(In, this, Vn).call(this, t);
                return;
            }
            r(In, this, Gn).call(this, t);
        };
        e._onStartDragging = function rt() {};
        e._onStopDragging = function it() {};
        e.moveInDOM = function nt() {
            var t = this;
            if (l(xn, this)) {
                clearTimeout(l(xn, this));
            }
            h(xn, this, setTimeout((function() {
                var e;
                h(xn, t, null);
                (e = t.parent) === null || e === void 0 ? void 0 : e.moveEditorInDOM(t);
            }), 0));
        };
        e._setParentAndPosition = function at(t, e, r) {
            t.changeParent(this);
            this.x = e;
            this.y = r;
            this.fixAndSetPosition();
            this._onTranslated();
        };
        e.getRect = function st(t, e) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.rotation;
            var i = this.parentScale;
            var [n, a] = this.pageDimensions;
            var [s, o] = this.pageTranslation;
            var l = t / i;
            var u = e / i;
            var h = this.x * n;
            var c = this.y * a;
            var d = this.width * n;
            var f = this.height * a;
            switch (r) {
              case 0:
                return [ h + l + s, a - c - u - f + o, h + l + d + s, a - c - u + o ];

              case 90:
                return [ h + u + s, a - c + l + o, h + u + f + s, a - c + l + d + o ];

              case 180:
                return [ h - l - d + s, a - c + u + o, h - l + s, a - c + u + f + o ];

              case 270:
                return [ h - u - f + s, a - c - l - d + o, h - u + s, a - c - l + o ];

              default:
                throw new Error("Invalid rotation");
            }
        };
        e.getRectInCurrentCoords = function lt(t, e) {
            var [r, i, n, a] = t;
            var s = n - r;
            var o = a - i;
            switch (this.rotation) {
              case 0:
                return [ r, e - a, s, o ];

              case 90:
                return [ r, e - i, o, s ];

              case 180:
                return [ n, e - i, s, o ];

              case 270:
                return [ n, e - a, o, s ];

              default:
                throw new Error("Invalid rotation");
            }
        };
        e.onceAdded = function ut(t) {};
        e.isEmpty = function ht() {
            return false;
        };
        e.enableEditMode = function ct() {
            if (this.isInEditMode()) {
                return false;
            }
            this.parent.setEditingState(false);
            h(_n, this, true);
            return true;
        };
        e.disableEditMode = function ft() {
            if (!this.isInEditMode()) {
                return false;
            }
            this.parent.setEditingState(true);
            h(_n, this, false);
            return true;
        };
        e.isInEditMode = function vt() {
            return l(_n, this);
        };
        e.shouldGetKeyboardEvents = function pt() {
            return l(kn, this);
        };
        e.needsToBeRebuilt = function gt() {
            return this.div && !this.isAttachedToDOM;
        };
        e.rebuild = function mt() {
            r(In, this, qn).call(this);
        };
        e.rotate = function yt(t) {};
        e.resize = function wt() {};
        e.serializeDeleted = function bt() {
            var t;
            return {
                id: this.annotationElementId,
                deleted: true,
                pageIndex: this.pageIndex,
                popupRef: ((t = this._initialData) === null || t === void 0 ? void 0 : t.popupRef) || ""
            };
        };
        e.serialize = function At() {
            ot("An editor must be serializable");
        };
        t.deserialize = function() {
            var t = s((function*(t, e, r) {
                var i = new this.prototype.constructor({
                    parent: e,
                    id: e.getNextId(),
                    uiManager: r,
                    annotationElementId: t.annotationElementId
                });
                i.rotation = t.rotation;
                h(sn, i, t.accessibilityData);
                i._isCopy = t.isCopy || false;
                var [n, a] = i.pageDimensions;
                var [s, o, l, u] = i.getRectInCurrentCoords(t.rect, a);
                i.x = s / n;
                i.y = o / a;
                i.width = l / n;
                i.height = u / a;
                return i;
            }));
            function e(e, r, i) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.remove = function _t() {
            var t, e;
            (t = l(mn, this)) === null || t === void 0 ? void 0 : t.abort();
            h(mn, this, null);
            if (!this.isEmpty()) {
                this.commit();
            }
            if (this.parent) {
                this.parent.remove(this);
            } else {
                this._uiManager.removeEditor(this);
            }
            if (l(xn, this)) {
                clearTimeout(l(xn, this));
                h(xn, this, null);
            }
            r(In, this, Jn).call(this);
            this.removeEditToolbar();
            if (l(Mn, this)) {
                for (var i of l(Mn, this).values()) {
                    clearTimeout(i);
                }
                h(Mn, this, null);
            }
            this.parent = null;
            (e = l(Cn, this)) === null || e === void 0 ? void 0 : e.destroy();
            h(Cn, this, null);
        };
        e.makeResizable = function kt() {
            if (this.isResizable) {
                r(In, this, On).call(this);
                l(vn, this).classList.remove("hidden");
            }
        };
        e.keydown = function xt(e) {
            if (!this.isResizable || e.target !== this.div || e.key !== "Enter") {
                return;
            }
            this._uiManager.setSelected(this);
            h(gn, this, {
                savedX: this.x,
                savedY: this.y,
                savedWidth: this.width,
                savedHeight: this.height
            });
            var i = l(vn, this).children;
            if (!l(on, this)) {
                h(on, this, Array.from(i));
                var n = r(In, this, Xn).bind(this);
                var a = r(In, this, Yn).bind(this);
                var s = this._uiManager._signal;
                for (var o of l(on, this)) {
                    var u = o.getAttribute("data-resizer-name");
                    o.setAttribute("role", "spinbutton");
                    o.addEventListener("keydown", n, {
                        signal: s
                    });
                    o.addEventListener("blur", a, {
                        signal: s
                    });
                    o.addEventListener("focus", r(In, this, Kn).bind(this, u), {
                        signal: s
                    });
                    o.setAttribute("data-l10n-id", t._l10nResizer[u]);
                }
            }
            var c = l(on, this)[0];
            var d = 0;
            for (var f of i) {
                if (f === c) {
                    break;
                }
                d++;
            }
            var v = (360 - this.rotation + this.parentRotation) % 360 / 90 * (l(on, this).length / 4);
            if (v !== d) {
                if (v < d) {
                    for (var p = 0; p < d - v; p++) {
                        l(vn, this).append(l(vn, this).firstChild);
                    }
                } else if (v > d) {
                    for (var g = 0; g < v - d; g++) {
                        l(vn, this).firstChild.before(l(vn, this).lastChild);
                    }
                }
                var m = 0;
                for (var y of i) {
                    var w = l(on, this)[m++];
                    var b = w.getAttribute("data-resizer-name");
                    y.setAttribute("data-l10n-id", t._l10nResizer[b]);
                }
            }
            r(In, this, Qn).call(this, 0);
            h(kn, this, true);
            l(vn, this).firstChild.focus({
                focusVisible: true
            });
            e.preventDefault();
            e.stopImmediatePropagation();
        };
        e._resizeWithKeyboard = function St(t, e) {
            if (!l(kn, this)) {
                return;
            }
            r(In, this, jn).call(this, l(yn, this), {
                deltaX: t,
                deltaY: e,
                fromKeyboard: true
            });
        };
        e._stopResizingWithKeyboard = function Mt() {
            r(In, this, Jn).call(this);
            this.div.focus();
        };
        e.select = function Ct() {
            var t, e = this, r, i;
            if (this.isSelected && this._editToolbar) {
                return;
            }
            this.isSelected = true;
            this.makeResizable();
            (t = this.div) === null || t === void 0 ? void 0 : t.classList.add("selectedEditor");
            if (!this._editToolbar) {
                this.addEditToolbar().then((function() {
                    var t;
                    if ((t = e.div) !== null && t !== void 0 && t.classList.contains("selectedEditor")) {
                        var r;
                        (r = e._editToolbar) === null || r === void 0 ? void 0 : r.show();
                    }
                }));
                return;
            }
            (r = this._editToolbar) === null || r === void 0 ? void 0 : r.show();
            (i = l(ln, this)) === null || i === void 0 ? void 0 : i.toggleAltTextBadge(false);
        };
        e.unselect = function Tt() {
            var t, e, r, i, n;
            if (!this.isSelected) {
                return;
            }
            this.isSelected = false;
            (t = l(vn, this)) === null || t === void 0 ? void 0 : t.classList.add("hidden");
            (e = this.div) === null || e === void 0 ? void 0 : e.classList.remove("selectedEditor");
            if ((r = this.div) !== null && r !== void 0 && r.contains(document.activeElement)) {
                this._uiManager.currentLayer.div.focus({
                    preventScroll: true
                });
            }
            (i = this._editToolbar) === null || i === void 0 ? void 0 : i.hide();
            (n = l(ln, this)) === null || n === void 0 ? void 0 : n.toggleAltTextBadge(true);
        };
        e.updateParams = function Rt(t, e) {};
        e.disableEditing = function It() {};
        e.enableEditing = function Pt() {};
        e.enterInEditMode = function Lt() {
            if (!this.canChangeContent) {
                return;
            }
            this.enableEditMode();
            this.div.focus();
        };
        e.dblclick = function Dt(t) {
            this.enterInEditMode();
            this.parent.updateToolbar({
                mode: this.constructor._editorType,
                editId: this.id
            });
        };
        e.getElementForAltText = function Nt() {
            return this.div;
        };
        e.setAspectRatio = function Ot(t, e) {
            h(fn, this, true);
            var r = t / e;
            var {style: i} = this.div;
            i.aspectRatio = r;
            i.height = "auto";
        };
        t.canCreateNewEmptyEditor = function Wt() {
            return true;
        };
        e._reportTelemetry = function Bt(e) {
            var r = this;
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (i) {
                l(Mn, this) || h(Mn, this, new Map);
                var {action: n} = e;
                var a = l(Mn, this).get(n);
                if (a) {
                    clearTimeout(a);
                }
                a = setTimeout((function() {
                    r._reportTelemetry(e);
                    l(Mn, r)["delete"](n);
                    if (l(Mn, r).size === 0) {
                        h(Mn, r, null);
                    }
                }), t._telemetryTimeout);
                l(Mn, this).set(n, a);
                return;
            }
            e.type ||= this.editorType;
            this._uiManager._eventBus.dispatch("reporttelemetry", {
                source: this,
                details: {
                    type: "editing",
                    data: e
                }
            });
        };
        e.show = function jt() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._isVisible;
            this.div.classList.toggle("hidden", !t);
            this._isVisible = t;
        };
        e.enable = function Ht() {
            if (this.div) {
                this.div.tabIndex = 0;
            }
            h(hn, this, false);
        };
        e.disable = function Ut() {
            if (this.div) {
                this.div.tabIndex = -1;
            }
            h(hn, this, true);
        };
        e.renderAnnotationElement = function zt(t) {
            var e = t.container.querySelector(".annotationContent");
            if (!e) {
                e = document.createElement("div");
                e.classList.add("annotationContent", this.editorType);
                t.container.prepend(e);
            } else if (e.nodeName === "CANVAS") {
                var r = e;
                e = document.createElement("div");
                e.classList.add("annotationContent", this.editorType);
                r.before(e);
            }
            return e;
        };
        e.resetAnnotationElement = function Gt(t) {
            var {firstChild: e} = t.container;
            if ((e === null || e === void 0 ? void 0 : e.nodeName) === "DIV" && e.classList.contains("annotationContent")) {
                e.remove();
            }
        };
        return v(t, [ {
            key: "editorType",
            get: function() {
                return Object.getPrototypeOf(this).constructor._type;
            }
        }, {
            key: "mode",
            get: function() {
                return Object.getPrototypeOf(this).constructor._editorType;
            }
        }, {
            key: "propertiesToUpdate",
            get: function() {
                return [];
            }
        }, {
            key: "_isDraggable",
            get: function() {
                return l(Tn, this);
            },
            set: function(t) {
                var e;
                h(Tn, this, t);
                (e = this.div) === null || e === void 0 ? void 0 : e.classList.toggle("draggable", t);
            }
        }, {
            key: "isEnterHandled",
            get: function() {
                return true;
            }
        }, {
            key: "currentLayer",
            get: function() {
                return this._uiManager.currentLayer;
            }
        }, {
            key: "_hasBeenMoved",
            get: function() {
                return !!l(bn, this) && (l(bn, this)[0] !== this.x || l(bn, this)[1] !== this.y);
            }
        }, {
            key: "_hasBeenResized",
            get: function() {
                return !!l(bn, this) && (l(bn, this)[2] !== this.width || l(bn, this)[3] !== this.height);
            }
        }, {
            key: "_mustFixPosition",
            get: function() {
                return true;
            }
        }, {
            key: "parentScale",
            get: function() {
                return this._uiManager.viewParameters.realScale;
            }
        }, {
            key: "parentRotation",
            get: function() {
                return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
            }
        }, {
            key: "parentDimensions",
            get: function() {
                var {parentScale: t, pageDimensions: [e, r]} = this;
                return [ e * t, r * t ];
            }
        }, {
            key: "toolbarButtons",
            get: function() {
                return null;
            }
        }, {
            key: "altTextData",
            get: function() {
                var t;
                return (t = l(ln, this)) === null || t === void 0 ? void 0 : t.data;
            },
            set: function(t) {
                if (!l(ln, this)) {
                    return;
                }
                l(ln, this).data = t;
            }
        }, {
            key: "guessedAltText",
            get: function() {
                var t;
                return (t = l(ln, this)) === null || t === void 0 ? void 0 : t.guessedText;
            }
        }, {
            key: "commentColor",
            get: function() {
                return null;
            }
        }, {
            key: "comment",
            get: function() {
                var t = l(un, this);
                return {
                    text: t.data.text,
                    date: t.data.date,
                    deleted: t.isDeleted(),
                    color: this.commentColor
                };
            },
            set: function(t) {
                if (!l(un, this)) {
                    h(un, this, new Hi(this));
                }
                l(un, this).data = t;
            }
        }, {
            key: "hasEditedComment",
            get: function() {
                var t;
                return (t = l(un, this)) === null || t === void 0 ? void 0 : t.hasBeenEdited();
            }
        }, {
            key: "isOnScreen",
            get: function() {
                var {top: t, left: e, bottom: r, right: i} = this.getClientDimensions();
                var {innerHeight: n, innerWidth: a} = window;
                return e < a && i > 0 && t < n && r > 0;
            }
        }, {
            key: "hasBeenModified",
            get: function() {
                return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
            }
        }, {
            key: "isResizable",
            get: function() {
                return false;
            }
        }, {
            key: "toolbarPosition",
            get: function() {
                return null;
            }
        }, {
            key: "canChangeContent",
            get: function() {
                return false;
            }
        }, {
            key: "contentDiv",
            get: function() {
                return this.div;
            }
        }, {
            key: "isEditing",
            get: function() {
                return l(An, this);
            },
            set: function(t) {
                h(An, this, t);
                if (!this.parent) {
                    return;
                }
                if (t) {
                    this.parent.setSelected(this);
                    this.parent.setActiveEditor(this);
                } else {
                    this.parent.setActiveEditor(null);
                }
            }
        }, {
            key: "telemetryInitialData",
            get: function() {
                return {
                    action: "added"
                };
            }
        }, {
            key: "telemetryFinalData",
            get: function() {
                return null;
            }
        } ], [ {
            key: "_resizerKeyboardManager",
            get: function() {
                var e = t.prototype._resizeWithKeyboard;
                var r = Xr.TRANSLATE_SMALL;
                var i = Xr.TRANSLATE_BIG;
                return dt(this, "_resizerKeyboardManager", new Qe([ [ [ "ArrowLeft", "mac+ArrowLeft" ], e, {
                    args: [ -r, 0 ]
                } ], [ [ "ctrl+ArrowLeft", "mac+shift+ArrowLeft" ], e, {
                    args: [ -i, 0 ]
                } ], [ [ "ArrowRight", "mac+ArrowRight" ], e, {
                    args: [ r, 0 ]
                } ], [ [ "ctrl+ArrowRight", "mac+shift+ArrowRight" ], e, {
                    args: [ i, 0 ]
                } ], [ [ "ArrowUp", "mac+ArrowUp" ], e, {
                    args: [ 0, -r ]
                } ], [ [ "ctrl+ArrowUp", "mac+shift+ArrowUp" ], e, {
                    args: [ 0, -i ]
                } ], [ [ "ArrowDown", "mac+ArrowDown" ], e, {
                    args: [ 0, r ]
                } ], [ [ "ctrl+ArrowDown", "mac+shift+ArrowDown" ], e, {
                    args: [ 0, i ]
                } ], [ [ "Escape", "mac+Escape" ], t.prototype._stopResizingWithKeyboard ] ]));
            }
        }, {
            key: "isDrawer",
            get: function() {
                return false;
            }
        }, {
            key: "_defaultLineColor",
            get: function() {
                return dt(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
            }
        }, {
            key: "defaultPropertiesToUpdate",
            get: function() {
                return [];
            }
        }, {
            key: "MIN_SIZE",
            get: function() {
                return 16;
            }
        } ]);
    }();
    E = Pn;
    function Ln(t, e, r) {
        var [i, n] = t;
        [e, r] = this.screenToPageTranslation(e, r);
        this.x += e / i;
        this.y += r / n;
        this._onTranslating(this.x, this.y);
        this.fixAndSetPosition();
    }
    function Dn(t, e, r) {
        switch (r) {
          case 90:
            return [ e, -t ];

          case 180:
            return [ -t, -e ];

          case 270:
            return [ -e, t ];

          default:
            return [ t, e ];
        }
    }
    function Nn(t) {
        switch (t) {
          case 90:
            {
                var [e, r] = this.pageDimensions;
                return [ 0, -e / r, r / e, 0 ];
            }

          case 180:
            return [ -1, 0, 0, -1 ];

          case 270:
            {
                var [i, n] = this.pageDimensions;
                return [ 0, i / n, -n / i, 0 ];
            }

          default:
            return [ 1, 0, 0, 1 ];
        }
    }
    function On() {
        if (l(vn, this)) {
            return;
        }
        h(vn, this, document.createElement("div"));
        l(vn, this).classList.add("resizers");
        var t = this._willKeepAspectRatio ? [ "topLeft", "topRight", "bottomRight", "bottomLeft" ] : [ "topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft" ];
        var e = this._uiManager._signal;
        for (var i of t) {
            var n = document.createElement("div");
            l(vn, this).append(n);
            n.classList.add("resizer", i);
            n.setAttribute("data-resizer-name", i);
            n.addEventListener("pointerdown", r(In, this, Fn).bind(this, i), {
                signal: e
            });
            n.addEventListener("contextmenu", Zt, {
                signal: e
            });
            n.tabIndex = -1;
        }
        this.div.prepend(l(vn, this));
    }
    function Fn(t, e) {
        var i, n = this;
        e.preventDefault();
        var {isMac: a} = Et.platform;
        if (e.button !== 0 || e.ctrlKey && a) {
            return;
        }
        (i = l(ln, this)) === null || i === void 0 ? void 0 : i.toggle(false);
        var s = this._isDraggable;
        this._isDraggable = false;
        h(pn, this, [ e.screenX, e.screenY ]);
        var o = new AbortController;
        var u = this._uiManager.combinedSignal(o);
        this.parent.togglePointerEvents(false);
        window.addEventListener("pointermove", r(In, this, jn).bind(this, t), {
            passive: true,
            capture: true,
            signal: u
        });
        window.addEventListener("touchmove", $t, {
            passive: false,
            signal: u
        });
        window.addEventListener("contextmenu", Zt, {
            signal: u
        });
        h(gn, this, {
            savedX: this.x,
            savedY: this.y,
            savedWidth: this.width,
            savedHeight: this.height
        });
        var c = this.parent.div.style.cursor;
        var d = this.div.style.cursor;
        this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
        var f = function() {
            var t;
            o.abort();
            n.parent.togglePointerEvents(true);
            (t = l(ln, n)) === null || t === void 0 ? void 0 : t.toggle(true);
            n._isDraggable = s;
            n.parent.div.style.cursor = c;
            n.div.style.cursor = d;
            r(In, n, Bn).call(n);
        };
        window.addEventListener("pointerup", f, {
            signal: u
        });
        window.addEventListener("blur", f, {
            signal: u
        });
    }
    function Wn(t, e, r, i) {
        this.width = r;
        this.height = i;
        this.x = t;
        this.y = e;
        var [n, a] = this.parentDimensions;
        this.setDims(n * r, a * i);
        this.fixAndSetPosition();
        this._onResized();
    }
    function Bn() {
        if (!l(gn, this)) {
            return;
        }
        var {savedX: t, savedY: e, savedWidth: i, savedHeight: n} = l(gn, this);
        h(gn, this, null);
        var a = this.x;
        var s = this.y;
        var o = this.width;
        var u = this.height;
        if (a === t && s === e && o === i && u === n) {
            return;
        }
        this.addCommands({
            cmd: r(In, this, Wn).bind(this, a, s, o, u),
            undo: r(In, this, Wn).bind(this, t, e, i, n),
            mustExec: true
        });
    }
    function jn(t, e) {
        var [i, n] = this.parentDimensions;
        var a = this.x;
        var s = this.y;
        var o = this.width;
        var u = this.height;
        var c = E.MIN_SIZE / i;
        var d = E.MIN_SIZE / n;
        var f = r(In, this, Nn).call(this, this.rotation);
        var v = function(t, e) {
            return [ f[0] * t + f[2] * e, f[1] * t + f[3] * e ];
        };
        var p = r(In, this, Nn).call(this, 360 - this.rotation);
        var g = function(t, e) {
            return [ p[0] * t + p[2] * e, p[1] * t + p[3] * e ];
        };
        var m;
        var y;
        var w = false;
        var b = false;
        switch (t) {
          case "topLeft":
            w = true;
            m = function(t, e) {
                return [ 0, 0 ];
            };
            y = function(t, e) {
                return [ t, e ];
            };
            break;

          case "topMiddle":
            m = function(t, e) {
                return [ t / 2, 0 ];
            };
            y = function(t, e) {
                return [ t / 2, e ];
            };
            break;

          case "topRight":
            w = true;
            m = function(t, e) {
                return [ t, 0 ];
            };
            y = function(t, e) {
                return [ 0, e ];
            };
            break;

          case "middleRight":
            b = true;
            m = function(t, e) {
                return [ t, e / 2 ];
            };
            y = function(t, e) {
                return [ 0, e / 2 ];
            };
            break;

          case "bottomRight":
            w = true;
            m = function(t, e) {
                return [ t, e ];
            };
            y = function(t, e) {
                return [ 0, 0 ];
            };
            break;

          case "bottomMiddle":
            m = function(t, e) {
                return [ t / 2, e ];
            };
            y = function(t, e) {
                return [ t / 2, 0 ];
            };
            break;

          case "bottomLeft":
            w = true;
            m = function(t, e) {
                return [ 0, e ];
            };
            y = function(t, e) {
                return [ t, 0 ];
            };
            break;

          case "middleLeft":
            b = true;
            m = function(t, e) {
                return [ 0, e / 2 ];
            };
            y = function(t, e) {
                return [ t, e / 2 ];
            };
            break;
        }
        var A = m(o, u);
        var _ = y(o, u);
        var k = v.apply(void 0, _);
        var x = E._round(a + k[0]);
        var S = E._round(s + k[1]);
        var M = 1;
        var C = 1;
        var T, R;
        if (!e.fromKeyboard) {
            var {screenX: I, screenY: P} = e;
            var [L, D] = l(pn, this);
            [T, R] = this.screenToPageTranslation(I - L, P - D);
            l(pn, this)[0] = I;
            l(pn, this)[1] = P;
        } else {
            ({deltaX: T, deltaY: R} = e);
        }
        [T, R] = g(T / i, R / n);
        if (w) {
            var N = Math.hypot(o, u);
            M = C = Math.max(Math.min(Math.hypot(_[0] - A[0] - T, _[1] - A[1] - R) / N, 1 / o, 1 / u), c / o, d / u);
        } else if (b) {
            M = Ft(Math.abs(_[0] - A[0] - T), c, 1) / o;
        } else {
            C = Ft(Math.abs(_[1] - A[1] - R), d, 1) / u;
        }
        var O = E._round(o * M);
        var F = E._round(u * C);
        k = v.apply(void 0, y(O, F));
        var W = x - k[0];
        var B = S - k[1];
        l(bn, this) || h(bn, this, [ this.x, this.y, this.width, this.height ]);
        this.width = O;
        this.height = F;
        this.x = W;
        this.y = B;
        this.setDims(i * O, n * F);
        this.fixAndSetPosition();
        this._onResizing();
    }
    function Hn() {
        var t;
        h(gn, this, {
            savedX: this.x,
            savedY: this.y,
            savedWidth: this.width,
            savedHeight: this.height
        });
        (t = l(ln, this)) === null || t === void 0 ? void 0 : t.toggle(false);
        this.parent.togglePointerEvents(false);
    }
    function Un(t, e, i) {
        var n = .7;
        var a = n * (i / e) + 1 - n;
        if (a === 1) {
            return;
        }
        var s = r(In, this, Nn).call(this, this.rotation);
        var o = function(t, e) {
            return [ s[0] * t + s[2] * e, s[1] * t + s[3] * e ];
        };
        var [u, c] = this.parentDimensions;
        var d = this.x;
        var f = this.y;
        var v = this.width;
        var p = this.height;
        var g = E.MIN_SIZE / u;
        var m = E.MIN_SIZE / c;
        a = Math.max(Math.min(a, 1 / v, 1 / p), g / v, m / p);
        var y = E._round(v * a);
        var w = E._round(p * a);
        if (y === v && w === p) {
            return;
        }
        l(bn, this) || h(bn, this, [ d, f, v, p ]);
        var b = o(v / 2, p / 2);
        var A = E._round(d + b[0]);
        var _ = E._round(f + b[1]);
        var k = o(y / 2, w / 2);
        this.x = A - k[0];
        this.y = _ - k[1];
        this.width = y;
        this.height = w;
        this.setDims(u * y, c * w);
        this.fixAndSetPosition();
        this._onResizing();
    }
    function zn() {
        var t;
        (t = l(ln, this)) === null || t === void 0 ? void 0 : t.toggle(true);
        this.parent.togglePointerEvents(true);
        r(In, this, Bn).call(this);
    }
    function Gn(t) {
        var {isMac: e} = Et.platform;
        if (t.ctrlKey && !e || t.shiftKey || t.metaKey && e) {
            this.parent.toggleSelected(this);
        } else {
            this.parent.setSelected(this);
        }
    }
    function Vn(t) {
        var e = this;
        var {isSelected: i} = this;
        this._uiManager.setUpDragSession();
        var n = false;
        var a = new AbortController;
        var s = this._uiManager.combinedSignal(a);
        var o = {
            capture: true,
            passive: false,
            signal: s
        };
        var u = function(t) {
            a.abort();
            h(cn, e, null);
            h(wn, e, false);
            if (!e._uiManager.endDragSession()) {
                r(In, e, Gn).call(e, t);
            }
            if (n) {
                e._onStopDragging();
            }
        };
        if (i) {
            h(En, this, t.clientX);
            h(Sn, this, t.clientY);
            h(cn, this, t.pointerId);
            h(dn, this, t.pointerType);
            window.addEventListener("pointermove", (function(t) {
                if (!n) {
                    n = true;
                    e._onStartDragging();
                }
                var {clientX: r, clientY: i, pointerId: a} = t;
                if (a !== l(cn, e)) {
                    $t(t);
                    return;
                }
                var [s, o] = e.screenToPageTranslation(r - l(En, e), i - l(Sn, e));
                h(En, e, r);
                h(Sn, e, i);
                e._uiManager.dragSelectedEditors(s, o);
            }), o);
            window.addEventListener("touchmove", $t, o);
            window.addEventListener("pointerdown", (function(t) {
                if (t.pointerType === l(dn, e)) {
                    if (l(Cn, e) || t.isPrimary) {
                        u(t);
                    }
                }
                $t(t);
            }), o);
        }
        var c = function(t) {
            if (!l(cn, e) || l(cn, e) === t.pointerId) {
                u(t);
                return;
            }
            $t(t);
        };
        window.addEventListener("pointerup", c, {
            signal: s
        });
        window.addEventListener("blur", c, {
            signal: s
        });
    }
    function qn() {
        if (l(mn, this) || !this.div) {
            return;
        }
        h(mn, this, new AbortController);
        var t = this._uiManager.combinedSignal(l(mn, this));
        this.div.addEventListener("focusin", this.focusin.bind(this), {
            signal: t
        });
        this.div.addEventListener("focusout", this.focusout.bind(this), {
            signal: t
        });
    }
    function Xn(t) {
        E._resizerKeyboardManager.exec(this, t);
    }
    function Yn(t) {
        var e;
        if (l(kn, this) && ((e = t.relatedTarget) === null || e === void 0 ? void 0 : e.parentNode) !== l(vn, this)) {
            r(In, this, Jn).call(this);
        }
    }
    function Kn(t) {
        h(yn, this, l(kn, this) ? t : "");
    }
    function Qn(t) {
        if (!l(on, this)) {
            return;
        }
        for (var e of l(on, this)) {
            e.tabIndex = t;
        }
    }
    function Jn() {
        h(kn, this, false);
        r(In, this, Qn).call(this, -1);
        r(In, this, Bn).call(this);
    }
    p(Pn, "_l10n", null);
    p(Pn, "_l10nResizer", null);
    p(Pn, "_borderLineWidth", -1);
    p(Pn, "_colorManager", new Ze);
    p(Pn, "_zIndex", 1);
    p(Pn, "_telemetryTimeout", 1e3);
    var Zn = function(t) {
        function e(e) {
            var r;
            r = t.call(this, e) || this;
            r.annotationElementId = e.annotationElementId;
            r.deleted = true;
            return r;
        }
        g(e, t);
        var r = e.prototype;
        r.serialize = function i() {
            return this.serializeDeleted();
        };
        return e;
    }(Pn);
    var $n = 3285377520;
    var ta = 4294901760;
    var ea = 65535;
    var ra = function() {
        function t(t) {
            this.h1 = t ? t & 4294967295 : $n;
            this.h2 = t ? t & 4294967295 : $n;
        }
        var e = t.prototype;
        e.update = function r(t) {
            var e, r;
            if (typeof t === "string") {
                e = new Uint8Array(t.length * 2);
                r = 0;
                for (var i = 0, n = t.length; i < n; i++) {
                    var a = t.charCodeAt(i);
                    if (a <= 255) {
                        e[r++] = a;
                    } else {
                        e[r++] = a >>> 8;
                        e[r++] = a & 255;
                    }
                }
            } else if (ArrayBuffer.isView(t)) {
                e = t.slice();
                r = e.byteLength;
            } else {
                throw new Error("Invalid data format, must be a string or TypedArray.");
            }
            var s = r >> 2;
            var o = r - s * 4;
            var l = new Uint32Array(e.buffer, 0, s);
            var u = 0, h = 0;
            var c = this.h1, d = this.h2;
            var f = 3432918353, v = 461845907;
            var p = f & ea, g = v & ea;
            for (var m = 0; m < s; m++) {
                if (m & 1) {
                    u = l[m];
                    u = u * f & ta | u * p & ea;
                    u = u << 15 | u >>> 17;
                    u = u * v & ta | u * g & ea;
                    c ^= u;
                    c = c << 13 | c >>> 19;
                    c = c * 5 + 3864292196;
                } else {
                    h = l[m];
                    h = h * f & ta | h * p & ea;
                    h = h << 15 | h >>> 17;
                    h = h * v & ta | h * g & ea;
                    d ^= h;
                    d = d << 13 | d >>> 19;
                    d = d * 5 + 3864292196;
                }
            }
            u = 0;
            switch (o) {
              case 3:
                u ^= e[s * 4 + 2] << 16;

              case 2:
                u ^= e[s * 4 + 1] << 8;

              case 1:
                u ^= e[s * 4];
                u = u * f & ta | u * p & ea;
                u = u << 15 | u >>> 17;
                u = u * v & ta | u * g & ea;
                if (s & 1) {
                    c ^= u;
                } else {
                    d ^= u;
                }
            }
            this.h1 = c;
            this.h2 = d;
        };
        e.hexdigest = function i() {
            var t = this.h1, e = this.h2;
            t ^= e >>> 1;
            t = t * 3981806797 & ta | t * 36045 & ea;
            e = e * 4283543511 & ta | ((e << 16 | t >>> 16) * 2950163797 & ta) >>> 16;
            t ^= e >>> 1;
            t = t * 444984403 & ta | t * 60499 & ea;
            e = e * 3301882366 & ta | ((e << 16 | t >>> 16) * 3120437893 & ta) >>> 16;
            t ^= e >>> 1;
            return (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
        };
        return t;
    }();
    var ia = Object.freeze({
        map: null,
        hash: "",
        transfer: undefined
    });
    var na = new WeakMap;
    var aa = new WeakMap;
    var sa = new WeakMap;
    var oa = new WeakSet;
    var la = function() {
        function t() {
            d(this, oa);
            u(this, na, false);
            u(this, aa, null);
            u(this, sa, new Map);
            this.onSetModified = null;
            this.onResetModified = null;
            this.onAnnotationEditor = null;
        }
        var e = t.prototype;
        e.getValue = function i(t, e) {
            var r = l(sa, this).get(t);
            if (r === undefined) {
                return e;
            }
            return Object.assign(e, r);
        };
        e.getRawValue = function n(t) {
            return l(sa, this).get(t);
        };
        e.remove = function a(t) {
            l(sa, this)["delete"](t);
            if (l(sa, this).size === 0) {
                this.resetModified();
            }
            if (typeof this.onAnnotationEditor === "function") {
                for (var e of l(sa, this).values()) {
                    if (e instanceof Pn) {
                        return;
                    }
                }
                this.onAnnotationEditor(null);
            }
        };
        e.setValue = function s(t, e) {
            var i = l(sa, this).get(t);
            var n = false;
            if (i !== undefined) {
                for (var [a, s] of Object.entries(e)) {
                    if (i[a] !== s) {
                        n = true;
                        i[a] = s;
                    }
                }
            } else {
                n = true;
                l(sa, this).set(t, e);
            }
            if (n) {
                r(oa, this, ua).call(this);
            }
            if (e instanceof Pn && typeof this.onAnnotationEditor === "function") {
                this.onAnnotationEditor(e.constructor._type);
            }
        };
        e.has = function o(t) {
            return l(sa, this).has(t);
        };
        e.resetModified = function c() {
            if (l(na, this)) {
                h(na, this, false);
                if (typeof this.onResetModified === "function") {
                    this.onResetModified();
                }
            }
        };
        e.resetModifiedIds = function f() {
            h(aa, this, null);
        };
        e[Symbol.iterator] = function() {
            return l(sa, this).entries();
        };
        return v(t, [ {
            key: "size",
            get: function() {
                return l(sa, this).size;
            }
        }, {
            key: "print",
            get: function() {
                return new ca(this);
            }
        }, {
            key: "serializable",
            get: function() {
                if (l(sa, this).size === 0) {
                    return ia;
                }
                var t = new Map, e = new ra, r = [];
                var i = Object.create(null);
                var n = false;
                for (var [a, s] of l(sa, this)) {
                    var o = s instanceof Pn ? s.serialize(false, i) : s;
                    if (o) {
                        t.set(a, o);
                        e.update(a + ":" + JSON.stringify(o));
                        n ||= !!o.bitmap;
                    }
                }
                if (n) {
                    for (var u of t.values()) {
                        if (u.bitmap) {
                            r.push(u.bitmap);
                        }
                    }
                }
                return t.size > 0 ? {
                    map: t,
                    hash: e.hexdigest(),
                    transfer: r
                } : ia;
            }
        }, {
            key: "editorStats",
            get: function() {
                var t = null;
                var e = new Map;
                for (var r of l(sa, this).values()) {
                    if (!(r instanceof Pn)) {
                        continue;
                    }
                    var i = r.telemetryFinalData;
                    if (!i) {
                        continue;
                    }
                    var {type: n} = i;
                    if (!e.has(n)) {
                        e.set(n, Object.getPrototypeOf(r).constructor);
                    }
                    t ||= Object.create(null);
                    var a = t[n] ||= new Map;
                    for (var [s, o] of Object.entries(i)) {
                        var u;
                        if (s === "type") {
                            continue;
                        }
                        var h = a.get(s);
                        if (!h) {
                            h = new Map;
                            a.set(s, h);
                        }
                        var c = (u = h.get(o)) !== null && u !== void 0 ? u : 0;
                        h.set(o, c + 1);
                    }
                }
                for (var [d, f] of e) {
                    t[d] = f.computeTelemetryFinalData(t[d]);
                }
                return t;
            }
        }, {
            key: "modifiedIds",
            get: function() {
                if (l(aa, this)) {
                    return l(aa, this);
                }
                var t = [];
                for (var e of l(sa, this).values()) {
                    if (!(e instanceof Pn) || !e.annotationElementId || !e.serialize()) {
                        continue;
                    }
                    t.push(e.annotationElementId);
                }
                return h(aa, this, {
                    ids: new Set(t),
                    hash: t.join(",")
                });
            }
        } ]);
    }();
    function ua() {
        if (!l(na, this)) {
            h(na, this, true);
            if (typeof this.onSetModified === "function") {
                this.onSetModified();
            }
        }
    }
    var ha = new WeakMap;
    var ca = function(t) {
        function e(e) {
            var r;
            r = t.call(this) || this;
            u(r, ha, void 0);
            var {map: i, hash: n, transfer: a} = e.serializable;
            var s = structuredClone(i, a ? {
                transfer: a
            } : null);
            h(ha, r, {
                map: s,
                hash: n,
                transfer: a
            });
            return r;
        }
        g(e, t);
        return v(e, [ {
            key: "print",
            get: function() {
                ot("Should not call PrintAnnotationStorage.print");
            }
        }, {
            key: "serializable",
            get: function() {
                return l(ha, this);
            }
        }, {
            key: "modifiedIds",
            get: function() {
                return dt(this, "modifiedIds", {
                    ids: new Set,
                    hash: ""
                });
            }
        } ]);
    }(la);
    var da = new WeakMap;
    var fa = function() {
        function t(t) {
            var {ownerDocument: e = globalThis.document, styleElement: r = null} = t;
            u(this, da, new Set);
            this._document = e;
            this.nativeFontFaces = new Set;
            this.styleElement = null;
            this.loadingRequests = [];
            this.loadTestFontId = 0;
        }
        var e = t.prototype;
        e.addNativeFontFace = function r(t) {
            this.nativeFontFaces.add(t);
            this._document.fonts.add(t);
        };
        e.removeNativeFontFace = function i(t) {
            this.nativeFontFaces["delete"](t);
            this._document.fonts["delete"](t);
        };
        e.insertRule = function n(t) {
            if (!this.styleElement) {
                this.styleElement = this._document.createElement("style");
                this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement);
            }
            var e = this.styleElement.sheet;
            e.insertRule(t, e.cssRules.length);
        };
        e.clear = function a() {
            for (var t of this.nativeFontFaces) {
                this._document.fonts["delete"](t);
            }
            this.nativeFontFaces.clear();
            l(da, this).clear();
            if (this.styleElement) {
                this.styleElement.remove();
                this.styleElement = null;
            }
        };
        e.loadSystemFont = function() {
            var t = s((function(t) {
                var e = this;
                var {systemFontInfo: r, disableFontFace: i, _inspectFont: n} = t;
                return function*() {
                    if (!r || l(da, e).has(r.loadedName)) {
                        return;
                    }
                    lt(!i, "loadSystemFont shouldn't be called when `disableFontFace` is set.");
                    if (e.isFontLoadingAPISupported) {
                        var {loadedName: t, src: a, style: s} = r;
                        var o = new FontFace(t, a, s);
                        e.addNativeFontFace(o);
                        try {
                            yield o.load();
                            l(da, e).add(t);
                            n === null || n === void 0 ? void 0 : n(r);
                        } catch {
                            st("Cannot load system font: " + r.baseFontName + ", installing it could help to improve PDF rendering.");
                            e.removeNativeFontFace(o);
                        }
                        return;
                    }
                    ot("Not implemented: loadSystemFont without the Font Loading API.");
                }();
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.bind = function() {
            var t = s((function*(t) {
                var e = this;
                if (t.attached || t.missingFile && !t.systemFontInfo) {
                    return;
                }
                t.attached = true;
                if (t.systemFontInfo) {
                    yield this.loadSystemFont(t);
                    return;
                }
                if (this.isFontLoadingAPISupported) {
                    var r = t.createNativeFontFace();
                    if (r) {
                        this.addNativeFontFace(r);
                        try {
                            yield r.loaded;
                        } catch (n) {
                            st("Failed to load font '" + r.family + "': '" + n + "'.");
                            t.disableFontFace = true;
                            throw n;
                        }
                    }
                    return;
                }
                var i = t.createFontFaceRule();
                if (i) {
                    this.insertRule(i);
                    if (this.isSyncFontLoadingSupported) {
                        return;
                    }
                    yield new Promise((function(r) {
                        var i = e._queueLoadingCallback(r);
                        e._prepareFontLoadEvent(t, i);
                    }));
                }
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e._queueLoadingCallback = function o(t) {
            function e() {
                lt(!i.done, "completeRequest() cannot be called twice.");
                i.done = true;
                while (r.length > 0 && r[0].done) {
                    var t = r.shift();
                    setTimeout(t.callback, 0);
                }
            }
            var {loadingRequests: r} = this;
            var i = {
                done: false,
                complete: e,
                callback: t
            };
            r.push(i);
            return i;
        };
        e._prepareFontLoadEvent = function h(t, e) {
            function r(t, e) {
                return t.charCodeAt(e) << 24 | t.charCodeAt(e + 1) << 16 | t.charCodeAt(e + 2) << 8 | t.charCodeAt(e + 3) & 255;
            }
            function i(t, e, r, i) {
                var n = t.substring(0, e);
                var a = t.substring(e + r);
                return n + i + a;
            }
            var n, a;
            var s = this._document.createElement("canvas");
            s.width = 1;
            s.height = 1;
            var o = s.getContext("2d");
            var l = 0;
            function u(t, e) {
                if (++l > 30) {
                    st("Load test font never loaded.");
                    e();
                    return;
                }
                o.font = "30px " + t;
                o.fillText(".", 0, 20);
                var r = o.getImageData(0, 0, 1, 1);
                if (r.data[3] > 0) {
                    e();
                    return;
                }
                setTimeout(u.bind(null, t, e));
            }
            var h = "lt" + Date.now() + this.loadTestFontId++;
            var c = this._loadTestFont;
            var d = 976;
            c = i(c, d, h.length, h);
            var f = 16;
            var v = 1482184792;
            var p = r(c, f);
            for (n = 0, a = h.length - 3; n < a; n += 4) {
                p = p - v + r(h, n) | 0;
            }
            if (n < h.length) {
                p = p - v + r(h + "XXX", n) | 0;
            }
            c = i(c, f, 4, _t(p));
            var g = "url(data:font/opentype;base64," + btoa(c) + ");";
            var m = '@font-face {font-family:"' + h + '";src:' + g + "}";
            this.insertRule(m);
            var y = this._document.createElement("div");
            y.style.visibility = "hidden";
            y.style.width = y.style.height = "10px";
            y.style.position = "absolute";
            y.style.top = y.style.left = "0px";
            for (var w of [ t.loadedName, h ]) {
                var b = this._document.createElement("span");
                b.textContent = "Hi";
                b.style.fontFamily = w;
                y.append(b);
            }
            this._document.body.append(y);
            u(h, (function() {
                y.remove();
                e.complete();
            }));
        };
        return v(t, [ {
            key: "isFontLoadingAPISupported",
            get: function() {
                var t;
                var e = !!((t = this._document) !== null && t !== void 0 && t.fonts);
                return dt(this, "isFontLoadingAPISupported", e);
            }
        }, {
            key: "isSyncFontLoadingSupported",
            get: function() {
                return dt(this, "isSyncFontLoadingSupported", B || Et.platform.isFirefox);
            }
        }, {
            key: "_loadTestFont",
            get: function() {
                var t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQA" + "FQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAA" + "ALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgA" + "AAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1" + "AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD" + "6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACM" + "AooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4D" + "IP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAA" + "AAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUA" + "AQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgAB" + "AAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABY" + "AAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAA" + "AC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAA" + "AAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQAC" + "AQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3" + "Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTj" + "FQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
                return dt(this, "_loadTestFont", t);
            }
        } ]);
    }();
    var va = function() {
        function t(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            this.compiledGlyphs = Object.create(null);
            for (var r in t) {
                this[r] = t[r];
            }
            this._inspectFont = e;
        }
        var e = t.prototype;
        e.createNativeFontFace = function r() {
            var t;
            if (!this.data || this.disableFontFace) {
                return null;
            }
            var e;
            if (!this.cssFontInfo) {
                e = new FontFace(this.loadedName, this.data, {});
            } else {
                var r = {
                    weight: this.cssFontInfo.fontWeight
                };
                if (this.cssFontInfo.italicAngle) {
                    r.style = "oblique " + this.cssFontInfo.italicAngle + "deg";
                }
                e = new FontFace(this.cssFontInfo.fontFamily, this.data, r);
            }
            (t = this._inspectFont) === null || t === void 0 ? void 0 : t.call(this, this);
            return e;
        };
        e.createFontFaceRule = function i() {
            var t;
            if (!this.data || this.disableFontFace) {
                return null;
            }
            var e = "url(data:" + this.mimetype + ";base64," + Wt(this.data) + ");";
            var r;
            if (!this.cssFontInfo) {
                r = '@font-face {font-family:"' + this.loadedName + '";src:' + e + "}";
            } else {
                var i = "font-weight: " + this.cssFontInfo.fontWeight + ";";
                if (this.cssFontInfo.italicAngle) {
                    i += "font-style: oblique " + this.cssFontInfo.italicAngle + "deg;";
                }
                r = '@font-face {font-family:"' + this.cssFontInfo.fontFamily + '";' + i + "src:" + e + "}";
            }
            (t = this._inspectFont) === null || t === void 0 ? void 0 : t.call(this, this, e);
            return r;
        };
        e.getPathGenerator = function n(t, e) {
            if (this.compiledGlyphs[e] !== undefined) {
                return this.compiledGlyphs[e];
            }
            var r = this.loadedName + "_path_" + e;
            var i;
            try {
                i = t.get(r);
            } catch (a) {
                st('getPathGenerator - ignoring character: "' + a + '".');
            }
            var n = new Path2D(i || "");
            if (!this.fontExtraProperties) {
                t["delete"](r);
            }
            return this.compiledGlyphs[e] = n;
        };
        return t;
    }();
    function pa(t) {
        if (t instanceof URL) {
            return t.href;
        }
        if (typeof t === "string") {
            if (B) {
                return t;
            }
            var e = URL.parse(t, window.location);
            if (e) {
                return e.href;
            }
        }
        throw new Error("Invalid PDF url data: " + "either string or URL-object is expected in the url property.");
    }
    function ga(t) {
        if (B && typeof Buffer !== "undefined" && t instanceof Buffer) {
            throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
        }
        if (t instanceof Uint8Array && t.byteLength === t.buffer.byteLength) {
            return t;
        }
        if (typeof t === "string") {
            return At(t);
        }
        if (t instanceof ArrayBuffer || ArrayBuffer.isView(t) || typeof t === "object" && !isNaN(t === null || t === void 0 ? void 0 : t.length)) {
            return new Uint8Array(t);
        }
        throw new Error("Invalid PDF binary data: either TypedArray, " + "string, or array-like object is expected in the data property.");
    }
    function ma(t) {
        if (typeof t !== "string") {
            return null;
        }
        if (t.endsWith("/")) {
            return t;
        }
        throw new Error('Invalid factory url: "' + t + '" must include trailing slash.');
    }
    var ya = function(t) {
        return typeof t === "object" && Number.isInteger(t === null || t === void 0 ? void 0 : t.num) && t.num >= 0 && Number.isInteger(t === null || t === void 0 ? void 0 : t.gen) && t.gen >= 0;
    };
    var wa = function(t) {
        return typeof t === "object" && typeof (t === null || t === void 0 ? void 0 : t.name) === "string";
    };
    var ba = Ot.bind(null, ya, wa);
    var Aa = new WeakMap;
    var _a = new WeakMap;
    var ka = function() {
        function t() {
            u(this, Aa, new Map);
            u(this, _a, Promise.resolve());
        }
        var e = t.prototype;
        e.postMessage = function r(t, e) {
            var r = this;
            var i = {
                data: structuredClone(t, e ? {
                    transfer: e
                } : null)
            };
            l(_a, this).then((function() {
                for (var [t] of l(Aa, r)) {
                    t.call(r, i);
                }
            }));
        };
        e.addEventListener = function i(t, e) {
            var r = this;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var n = null;
            if ((i === null || i === void 0 ? void 0 : i.signal) instanceof AbortSignal) {
                var {signal: a} = i;
                if (a.aborted) {
                    st("LoopbackPort - cannot use an `aborted` signal.");
                    return;
                }
                var s = function() {
                    return r.removeEventListener(t, e);
                };
                n = function() {
                    return a.removeEventListener("abort", s);
                };
                a.addEventListener("abort", s);
            }
            l(Aa, this).set(e, n);
        };
        e.removeEventListener = function n(t, e) {
            var r = l(Aa, this).get(e);
            r === null || r === void 0 ? void 0 : r();
            l(Aa, this)["delete"](e);
        };
        e.terminate = function a() {
            for (var [, t] of l(Aa, this)) {
                t === null || t === void 0 ? void 0 : t();
            }
            l(Aa, this).clear();
        };
        return t;
    }();
    var xa = {
        DATA: 1,
        ERROR: 2
    };
    var Ea = {
        CANCEL: 1,
        CANCEL_COMPLETE: 2,
        CLOSE: 3,
        ENQUEUE: 4,
        ERROR: 5,
        PULL: 6,
        PULL_COMPLETE: 7,
        START_COMPLETE: 8
    };
    function Sa() {}
    function Ma(t) {
        if (t instanceof wt || t instanceof gt || t instanceof vt || t instanceof mt || t instanceof pt) {
            return t;
        }
        if (!(t instanceof Error || typeof t === "object" && t !== null)) {
            ot('wrapReason: Expected "reason" to be a (possibly cloned) Error.');
        }
        switch (t.name) {
          case "AbortException":
            return new wt(t.message);

          case "InvalidPDFException":
            return new gt(t.message);

          case "PasswordException":
            return new vt(t.message, t.code);

          case "ResponseException":
            return new mt(t.message, t.status, t.missing);

          case "UnknownErrorException":
            return new pt(t.message, t.details);
        }
        return new pt(t.message, t.toString());
    }
    var Ca = new WeakMap;
    var Ta = new WeakSet;
    var Ra = function() {
        function t(t, e, i) {
            d(this, Ta);
            u(this, Ca, new AbortController);
            this.sourceName = t;
            this.targetName = e;
            this.comObj = i;
            this.callbackId = 1;
            this.streamId = 1;
            this.streamSinks = Object.create(null);
            this.streamControllers = Object.create(null);
            this.callbackCapabilities = Object.create(null);
            this.actionHandler = Object.create(null);
            i.addEventListener("message", r(Ta, this, Ia).bind(this), {
                signal: l(Ca, this).signal
            });
        }
        var e = t.prototype;
        e.on = function i(t, e) {
            var r = this.actionHandler;
            if (r[t]) {
                throw new Error('There is already an actionName called "' + t + '"');
            }
            r[t] = e;
        };
        e.send = function n(t, e, r) {
            this.comObj.postMessage({
                sourceName: this.sourceName,
                targetName: this.targetName,
                action: t,
                data: e
            }, r);
        };
        e.sendWithPromise = function a(t, e, r) {
            var i = this.callbackId++;
            var n = Promise.withResolvers();
            this.callbackCapabilities[i] = n;
            try {
                this.comObj.postMessage({
                    sourceName: this.sourceName,
                    targetName: this.targetName,
                    action: t,
                    callbackId: i,
                    data: e
                }, r);
            } catch (a) {
                n.reject(a);
            }
            return n.promise;
        };
        e.sendWithStream = function s(t, e, r, i) {
            var n = this;
            var a = this.streamId++, s = this.sourceName, o = this.targetName, l = this.comObj;
            return new ReadableStream({
                start: function(r) {
                    var u = Promise.withResolvers();
                    n.streamControllers[a] = {
                        controller: r,
                        startCall: u,
                        pullCall: null,
                        cancelCall: null,
                        isClosed: false
                    };
                    l.postMessage({
                        sourceName: s,
                        targetName: o,
                        action: t,
                        streamId: a,
                        data: e,
                        desiredSize: r.desiredSize
                    }, i);
                    return u.promise;
                },
                pull: function(t) {
                    var e = Promise.withResolvers();
                    n.streamControllers[a].pullCall = e;
                    l.postMessage({
                        sourceName: s,
                        targetName: o,
                        stream: Ea.PULL,
                        streamId: a,
                        desiredSize: t.desiredSize
                    });
                    return e.promise;
                },
                cancel: function(t) {
                    lt(t instanceof Error, "cancel must have a valid reason");
                    var e = Promise.withResolvers();
                    n.streamControllers[a].cancelCall = e;
                    n.streamControllers[a].isClosed = true;
                    l.postMessage({
                        sourceName: s,
                        targetName: o,
                        stream: Ea.CANCEL,
                        streamId: a,
                        reason: Ma(t)
                    });
                    return e.promise;
                }
            }, r);
        };
        e.destroy = function o() {
            var t;
            (t = l(Ca, this)) === null || t === void 0 ? void 0 : t.abort();
            h(Ca, this, null);
        };
        return t;
    }();
    function Ia(t) {
        var {data: e} = t;
        if (e.targetName !== this.sourceName) {
            return;
        }
        if (e.stream) {
            r(Ta, this, La).call(this, e);
            return;
        }
        if (e.callback) {
            var i = e.callbackId;
            var n = this.callbackCapabilities[i];
            if (!n) {
                throw new Error("Cannot resolve callback " + i);
            }
            delete this.callbackCapabilities[i];
            if (e.callback === xa.DATA) {
                n.resolve(e.data);
            } else if (e.callback === xa.ERROR) {
                n.reject(Ma(e.reason));
            } else {
                throw new Error("Unexpected callback case");
            }
            return;
        }
        var a = this.actionHandler[e.action];
        if (!a) {
            throw new Error("Unknown action from worker: " + e.action);
        }
        if (e.callbackId) {
            var s = this.sourceName, o = e.sourceName, l = this.comObj;
            Promise["try"](a, e.data).then((function(t) {
                l.postMessage({
                    sourceName: s,
                    targetName: o,
                    callback: xa.DATA,
                    callbackId: e.callbackId,
                    data: t
                });
            }), (function(t) {
                l.postMessage({
                    sourceName: s,
                    targetName: o,
                    callback: xa.ERROR,
                    callbackId: e.callbackId,
                    reason: Ma(t)
                });
            }));
            return;
        }
        if (e.streamId) {
            r(Ta, this, Pa).call(this, e);
            return;
        }
        a(e.data);
    }
    function Pa(t) {
        var e = t.streamId, r = this.sourceName, i = t.sourceName, n = this.comObj;
        var a = this, s = this.actionHandler[t.action];
        var o = {
            enqueue: function(t) {
                var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                var s = arguments.length > 2 ? arguments[2] : undefined;
                if (this.isCancelled) {
                    return;
                }
                var o = this.desiredSize;
                this.desiredSize -= a;
                if (o > 0 && this.desiredSize <= 0) {
                    this.sinkCapability = Promise.withResolvers();
                    this.ready = this.sinkCapability.promise;
                }
                n.postMessage({
                    sourceName: r,
                    targetName: i,
                    stream: Ea.ENQUEUE,
                    streamId: e,
                    chunk: t
                }, s);
            },
            close: function() {
                if (this.isCancelled) {
                    return;
                }
                this.isCancelled = true;
                n.postMessage({
                    sourceName: r,
                    targetName: i,
                    stream: Ea.CLOSE,
                    streamId: e
                });
                delete a.streamSinks[e];
            },
            error: function(t) {
                lt(t instanceof Error, "error must have a valid reason");
                if (this.isCancelled) {
                    return;
                }
                this.isCancelled = true;
                n.postMessage({
                    sourceName: r,
                    targetName: i,
                    stream: Ea.ERROR,
                    streamId: e,
                    reason: Ma(t)
                });
            },
            sinkCapability: Promise.withResolvers(),
            onPull: null,
            onCancel: null,
            isCancelled: false,
            desiredSize: t.desiredSize,
            ready: null
        };
        o.sinkCapability.resolve();
        o.ready = o.sinkCapability.promise;
        this.streamSinks[e] = o;
        Promise["try"](s, t.data, o).then((function() {
            n.postMessage({
                sourceName: r,
                targetName: i,
                stream: Ea.START_COMPLETE,
                streamId: e,
                success: true
            });
        }), (function(t) {
            n.postMessage({
                sourceName: r,
                targetName: i,
                stream: Ea.START_COMPLETE,
                streamId: e,
                reason: Ma(t)
            });
        }));
    }
    function La(t) {
        var e = t.streamId, i = this.sourceName, n = t.sourceName, a = this.comObj;
        var s = this.streamControllers[e], o = this.streamSinks[e];
        switch (t.stream) {
          case Ea.START_COMPLETE:
            if (t.success) {
                s.startCall.resolve();
            } else {
                s.startCall.reject(Ma(t.reason));
            }
            break;

          case Ea.PULL_COMPLETE:
            if (t.success) {
                s.pullCall.resolve();
            } else {
                s.pullCall.reject(Ma(t.reason));
            }
            break;

          case Ea.PULL:
            if (!o) {
                a.postMessage({
                    sourceName: i,
                    targetName: n,
                    stream: Ea.PULL_COMPLETE,
                    streamId: e,
                    success: true
                });
                break;
            }
            if (o.desiredSize <= 0 && t.desiredSize > 0) {
                o.sinkCapability.resolve();
            }
            o.desiredSize = t.desiredSize;
            Promise["try"](o.onPull || Sa).then((function() {
                a.postMessage({
                    sourceName: i,
                    targetName: n,
                    stream: Ea.PULL_COMPLETE,
                    streamId: e,
                    success: true
                });
            }), (function(t) {
                a.postMessage({
                    sourceName: i,
                    targetName: n,
                    stream: Ea.PULL_COMPLETE,
                    streamId: e,
                    reason: Ma(t)
                });
            }));
            break;

          case Ea.ENQUEUE:
            lt(s, "enqueue should have stream controller");
            if (s.isClosed) {
                break;
            }
            s.controller.enqueue(t.chunk);
            break;

          case Ea.CLOSE:
            lt(s, "close should have stream controller");
            if (s.isClosed) {
                break;
            }
            s.isClosed = true;
            s.controller.close();
            r(Ta, this, Da).call(this, s, e);
            break;

          case Ea.ERROR:
            lt(s, "error should have stream controller");
            s.controller.error(Ma(t.reason));
            r(Ta, this, Da).call(this, s, e);
            break;

          case Ea.CANCEL_COMPLETE:
            if (t.success) {
                s.cancelCall.resolve();
            } else {
                s.cancelCall.reject(Ma(t.reason));
            }
            r(Ta, this, Da).call(this, s, e);
            break;

          case Ea.CANCEL:
            if (!o) {
                break;
            }
            var l = Ma(t.reason);
            Promise["try"](o.onCancel || Sa, l).then((function() {
                a.postMessage({
                    sourceName: i,
                    targetName: n,
                    stream: Ea.CANCEL_COMPLETE,
                    streamId: e,
                    success: true
                });
            }), (function(t) {
                a.postMessage({
                    sourceName: i,
                    targetName: n,
                    stream: Ea.CANCEL_COMPLETE,
                    streamId: e,
                    reason: Ma(t)
                });
            }));
            o.sinkCapability.reject(l);
            o.isCancelled = true;
            delete this.streamSinks[e];
            break;

          default:
            throw new Error("Unexpected stream case");
        }
    }
    function Da(t, e) {
        return Na.apply(this, arguments);
    }
    function Na() {
        Na = s((function*(t, e) {
            var r, i, n;
            yield Promise.allSettled([ (r = t.startCall) === null || r === void 0 ? void 0 : r.promise, (i = t.pullCall) === null || i === void 0 ? void 0 : i.promise, (n = t.cancelCall) === null || n === void 0 ? void 0 : n.promise ]);
            delete this.streamControllers[e];
        }));
        return Na.apply(this, arguments);
    }
    var Oa = new WeakMap;
    var Fa = function() {
        function t(t) {
            var {enableHWA: e = false} = t;
            u(this, Oa, false);
            h(Oa, this, e);
        }
        var e = t.prototype;
        e.create = function r(t, e) {
            if (t <= 0 || e <= 0) {
                throw new Error("Invalid canvas size");
            }
            var r = this._createCanvas(t, e);
            return {
                canvas: r,
                context: r.getContext("2d", {
                    willReadFrequently: !l(Oa, this)
                })
            };
        };
        e.reset = function i(t, e, r) {
            if (!t.canvas) {
                throw new Error("Canvas is not specified");
            }
            if (e <= 0 || r <= 0) {
                throw new Error("Invalid canvas size");
            }
            t.canvas.width = e;
            t.canvas.height = r;
        };
        e.destroy = function n(t) {
            if (!t.canvas) {
                throw new Error("Canvas is not specified");
            }
            t.canvas.width = 0;
            t.canvas.height = 0;
            t.canvas = null;
            t.context = null;
        };
        e._createCanvas = function a(t, e) {
            ot("Abstract method `_createCanvas` called.");
        };
        return t;
    }();
    var Wa = function(t) {
        function e(e) {
            var r;
            var {ownerDocument: i = globalThis.document, enableHWA: n = false} = e;
            r = t.call(this, {
                enableHWA: n
            }) || this;
            r._document = i;
            return r;
        }
        g(e, t);
        var r = e.prototype;
        r._createCanvas = function i(t, e) {
            var r = this._document.createElement("canvas");
            r.width = t;
            r.height = e;
            return r;
        };
        return e;
    }(Fa);
    var Ba = function() {
        function t(t) {
            var {baseUrl: e = null, isCompressed: r = true} = t;
            this.baseUrl = e;
            this.isCompressed = r;
        }
        var e = t.prototype;
        e.fetch = function() {
            var t = s((function(t) {
                var e = this;
                var {name: r} = t;
                return function*() {
                    if (!e.baseUrl) {
                        throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
                    }
                    if (!r) {
                        throw new Error("CMap name must be specified.");
                    }
                    var t = e.baseUrl + r + (e.isCompressed ? ".bcmap" : "");
                    return e._fetch(t).then((function(t) {
                        return {
                            cMapData: t,
                            isCompressed: e.isCompressed
                        };
                    }))["catch"]((function(r) {
                        throw new Error("Unable to load " + (e.isCompressed ? "binary " : "") + "CMap at: " + t);
                    }));
                }();
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e._fetch = function() {
            var t = s((function*(t) {
                ot("Abstract method `_fetch` called.");
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        return t;
    }();
    var ja = function(t) {
        function e() {
            return t.apply(this, arguments) || this;
        }
        g(e, t);
        var r = e.prototype;
        r._fetch = function() {
            var t = s((function*(t) {
                var e = yield Ut(t, this.isCompressed ? "arraybuffer" : "text");
                return e instanceof ArrayBuffer ? new Uint8Array(e) : At(e);
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        return e;
    }(Ba);
    W(2489);
    var Ha = function() {
        function t() {}
        var e = t.prototype;
        e.addFilter = function r(t) {
            return "none";
        };
        e.addHCMFilter = function i(t, e) {
            return "none";
        };
        e.addAlphaFilter = function n(t) {
            return "none";
        };
        e.addLuminosityFilter = function a(t) {
            return "none";
        };
        e.addHighlightHCMFilter = function s(t, e, r, i, n) {
            return "none";
        };
        e.destroy = function o() {};
        return t;
    }();
    var Ua = new WeakMap;
    var za = new WeakMap;
    var Ga = new WeakMap;
    var Va = new WeakMap;
    var qa = new WeakMap;
    var Xa = new WeakMap;
    var Ya = new WeakMap;
    var Ka = new WeakSet;
    var Qa = function(t) {
        function e(e) {
            var r;
            var {docId: i, ownerDocument: n = globalThis.document} = e;
            r = t.call(this) || this;
            d(r, Ka);
            u(r, Ua, void 0);
            u(r, za, void 0);
            u(r, Ga, void 0);
            u(r, Va, void 0);
            u(r, qa, void 0);
            u(r, Xa, void 0);
            u(r, Ya, 0);
            h(Va, r, i);
            h(qa, r, n);
            return r;
        }
        g(e, t);
        var i = e.prototype;
        i.addFilter = function n(t) {
            var e, i;
            if (!t) {
                return "none";
            }
            var n = c(Ka, this, Ja).get(t);
            if (n) {
                return n;
            }
            var [a, s, o] = r(Ka, this, ts).call(this, t);
            var u = t.length === 1 ? a : "" + a + s + o;
            n = c(Ka, this, Ja).get(u);
            if (n) {
                c(Ka, this, Ja).set(t, n);
                return n;
            }
            var d = "g_" + l(Va, this) + "_transfer_map_" + (h(Ya, this, (e = l(Ya, this), i = e++, 
            e)), i);
            var f = r(Ka, this, es).call(this, d);
            c(Ka, this, Ja).set(t, f);
            c(Ka, this, Ja).set(u, f);
            var v = r(Ka, this, ns).call(this, d);
            r(Ka, this, ss).call(this, a, s, o, v);
            return f;
        };
        i.addHCMFilter = function a(t, e) {
            var i;
            var n = t + "-" + e;
            var a = "base";
            var s = c(Ka, this, Za).get(a);
            if (((i = s) === null || i === void 0 ? void 0 : i.key) === n) {
                return s.url;
            }
            if (s) {
                var o;
                (o = s.filter) === null || o === void 0 ? void 0 : o.remove();
                s.key = n;
                s.url = "none";
                s.filter = null;
            } else {
                s = {
                    key: n,
                    url: "none",
                    filter: null
                };
                c(Ka, this, Za).set(a, s);
            }
            if (!t || !e) {
                return s.url;
            }
            var u = r(Ka, this, ls).call(this, t);
            t = Mt.makeHexColor.apply(Mt, u);
            var h = r(Ka, this, ls).call(this, e);
            e = Mt.makeHexColor.apply(Mt, h);
            c(Ka, this, $a).style.color = "";
            if (t === "#000000" && e === "#ffffff" || t === e) {
                return s.url;
            }
            var d = new Array(256);
            for (var f = 0; f <= 255; f++) {
                var v = f / 255;
                d[f] = v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4;
            }
            var p = d.join(",");
            var g = "g_" + l(Va, this) + "_hcm_filter";
            var m = s.filter = r(Ka, this, ns).call(this, g);
            r(Ka, this, ss).call(this, p, p, p, m);
            r(Ka, this, is).call(this, m);
            var y = function(t, e) {
                var r = u[t] / 255;
                var i = h[t] / 255;
                var n = new Array(e + 1);
                for (var a = 0; a <= e; a++) {
                    n[a] = r + a / e * (i - r);
                }
                return n.join(",");
            };
            r(Ka, this, ss).call(this, y(0, 5), y(1, 5), y(2, 5), m);
            s.url = r(Ka, this, es).call(this, g);
            return s.url;
        };
        i.addAlphaFilter = function s(t) {
            var e, i;
            var n = c(Ka, this, Ja).get(t);
            if (n) {
                return n;
            }
            var [a] = r(Ka, this, ts).call(this, [ t ]);
            var s = "alpha_" + a;
            n = c(Ka, this, Ja).get(s);
            if (n) {
                c(Ka, this, Ja).set(t, n);
                return n;
            }
            var o = "g_" + l(Va, this) + "_alpha_map_" + (h(Ya, this, (e = l(Ya, this), i = e++, 
            e)), i);
            var u = r(Ka, this, es).call(this, o);
            c(Ka, this, Ja).set(t, u);
            c(Ka, this, Ja).set(s, u);
            var d = r(Ka, this, ns).call(this, o);
            r(Ka, this, os).call(this, a, d);
            return u;
        };
        i.addLuminosityFilter = function o(t) {
            var e, i;
            var n = c(Ka, this, Ja).get(t || "luminosity");
            if (n) {
                return n;
            }
            var a, s;
            if (t) {
                [a] = r(Ka, this, ts).call(this, [ t ]);
                s = "luminosity_" + a;
            } else {
                s = "luminosity";
            }
            n = c(Ka, this, Ja).get(s);
            if (n) {
                c(Ka, this, Ja).set(t, n);
                return n;
            }
            var o = "g_" + l(Va, this) + "_luminosity_map_" + (h(Ya, this, (e = l(Ya, this), 
            i = e++, e)), i);
            var u = r(Ka, this, es).call(this, o);
            c(Ka, this, Ja).set(t, u);
            c(Ka, this, Ja).set(s, u);
            var d = r(Ka, this, ns).call(this, o);
            r(Ka, this, rs).call(this, d);
            if (t) {
                r(Ka, this, os).call(this, a, d);
            }
            return u;
        };
        i.addHighlightHCMFilter = function f(t, e, i, n, a) {
            var s;
            var o = e + "-" + i + "-" + n + "-" + a;
            var u = c(Ka, this, Za).get(t);
            if (((s = u) === null || s === void 0 ? void 0 : s.key) === o) {
                return u.url;
            }
            if (u) {
                var h;
                (h = u.filter) === null || h === void 0 ? void 0 : h.remove();
                u.key = o;
                u.url = "none";
                u.filter = null;
            } else {
                u = {
                    key: o,
                    url: "none",
                    filter: null
                };
                c(Ka, this, Za).set(t, u);
            }
            if (!e || !i) {
                return u.url;
            }
            var [d, f] = [ e, i ].map(r(Ka, this, ls).bind(this));
            var v = Math.round(.2126 * d[0] + .7152 * d[1] + .0722 * d[2]);
            var p = Math.round(.2126 * f[0] + .7152 * f[1] + .0722 * f[2]);
            var [g, m] = [ n, a ].map(r(Ka, this, ls).bind(this));
            if (p < v) {
                [v, p, g, m] = [ p, v, m, g ];
            }
            c(Ka, this, $a).style.color = "";
            var y = function(t, e, r) {
                var i = new Array(256);
                var n = (p - v) / r;
                var a = t / 255;
                var s = (e - t) / (255 * r);
                var o = 0;
                for (var l = 0; l <= r; l++) {
                    var u = Math.round(v + l * n);
                    var h = a + l * s;
                    for (var c = o; c <= u; c++) {
                        i[c] = h;
                    }
                    o = u + 1;
                }
                for (var d = o; d < 256; d++) {
                    i[d] = i[o - 1];
                }
                return i.join(",");
            };
            var w = "g_" + l(Va, this) + "_hcm_" + t + "_filter";
            var b = u.filter = r(Ka, this, ns).call(this, w);
            r(Ka, this, is).call(this, b);
            r(Ka, this, ss).call(this, y(g[0], m[0], 5), y(g[1], m[1], 5), y(g[2], m[2], 5), b);
            u.url = r(Ka, this, es).call(this, w);
            return u.url;
        };
        i.destroy = function v() {
            var t, e, r, i;
            var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            if (n && (t = l(Xa, this)) !== null && t !== void 0 && t.size) {
                return;
            }
            (e = l(Ga, this)) === null || e === void 0 ? void 0 : e.parentNode.parentNode.remove();
            h(Ga, this, null);
            (r = l(za, this)) === null || r === void 0 ? void 0 : r.clear();
            h(za, this, null);
            (i = l(Xa, this)) === null || i === void 0 ? void 0 : i.clear();
            h(Xa, this, null);
            h(Ya, this, 0);
        };
        return e;
    }(Ha);
    function Ja(t) {
        return l(za, t) || h(za, t, new Map);
    }
    function Za(t) {
        return l(Xa, t) || h(Xa, t, new Map);
    }
    function $a(t) {
        if (!l(Ga, t)) {
            var e = l(qa, t).createElement("div");
            var {style: r} = e;
            r.visibility = "hidden";
            r.contain = "strict";
            r.width = r.height = 0;
            r.position = "absolute";
            r.top = r.left = 0;
            r.zIndex = -1;
            var i = l(qa, t).createElementNS(jt, "svg");
            i.setAttribute("width", 0);
            i.setAttribute("height", 0);
            h(Ga, t, l(qa, t).createElementNS(jt, "defs"));
            e.append(i);
            i.append(l(Ga, t));
            l(qa, t).body.append(e);
        }
        return l(Ga, t);
    }
    function ts(t) {
        if (t.length === 1) {
            var e = t[0];
            var r = new Array(256);
            for (var i = 0; i < 256; i++) {
                r[i] = e[i] / 255;
            }
            var n = r.join(",");
            return [ n, n, n ];
        }
        var [a, s, o] = t;
        var l = new Array(256);
        var u = new Array(256);
        var h = new Array(256);
        for (var c = 0; c < 256; c++) {
            l[c] = a[c] / 255;
            u[c] = s[c] / 255;
            h[c] = o[c] / 255;
        }
        return [ l.join(","), u.join(","), h.join(",") ];
    }
    function es(t) {
        if (l(Ua, this) === undefined) {
            h(Ua, this, "");
            var e = l(qa, this).URL;
            if (e !== l(qa, this).baseURI) {
                if (qt(e)) {
                    st('#createUrl: ignore "data:"-URL for performance reasons.');
                } else {
                    h(Ua, this, ct(e, ""));
                }
            }
        }
        return "url(" + l(Ua, this) + "#" + t + ")";
    }
    function rs(t) {
        var e = l(qa, this).createElementNS(jt, "feColorMatrix");
        e.setAttribute("type", "matrix");
        e.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0");
        t.append(e);
    }
    function is(t) {
        var e = l(qa, this).createElementNS(jt, "feColorMatrix");
        e.setAttribute("type", "matrix");
        e.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0");
        t.append(e);
    }
    function ns(t) {
        var e = l(qa, this).createElementNS(jt, "filter");
        e.setAttribute("color-interpolation-filters", "sRGB");
        e.setAttribute("id", t);
        c(Ka, this, $a).append(e);
        return e;
    }
    function as(t, e, r) {
        var i = l(qa, this).createElementNS(jt, e);
        i.setAttribute("type", "discrete");
        i.setAttribute("tableValues", r);
        t.append(i);
    }
    function ss(t, e, i, n) {
        var a = l(qa, this).createElementNS(jt, "feComponentTransfer");
        n.append(a);
        r(Ka, this, as).call(this, a, "feFuncR", t);
        r(Ka, this, as).call(this, a, "feFuncG", e);
        r(Ka, this, as).call(this, a, "feFuncB", i);
    }
    function os(t, e) {
        var i = l(qa, this).createElementNS(jt, "feComponentTransfer");
        e.append(i);
        r(Ka, this, as).call(this, i, "feFuncA", t);
    }
    function ls(t) {
        c(Ka, this, $a).style.color = t;
        return ne(getComputedStyle(c(Ka, this, $a)).getPropertyValue("color"));
    }
    var us = function() {
        function t(t) {
            var {baseUrl: e = null} = t;
            this.baseUrl = e;
        }
        var e = t.prototype;
        e.fetch = function() {
            var t = s((function(t) {
                var e = this;
                var {filename: r} = t;
                return function*() {
                    if (!e.baseUrl) {
                        throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
                    }
                    if (!r) {
                        throw new Error("Font filename must be specified.");
                    }
                    var t = "" + e.baseUrl + r;
                    return e._fetch(t)["catch"]((function(e) {
                        throw new Error("Unable to load font data at: " + t);
                    }));
                }();
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e._fetch = function() {
            var t = s((function*(t) {
                ot("Abstract method `_fetch` called.");
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        return t;
    }();
    var hs = function(t) {
        function e() {
            return t.apply(this, arguments) || this;
        }
        g(e, t);
        var r = e.prototype;
        r._fetch = function() {
            var t = s((function*(t) {
                var e = yield Ut(t, "arraybuffer");
                return new Uint8Array(e);
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        return e;
    }(us);
    var cs = function() {
        function t(t) {
            var {baseUrl: e = null} = t;
            this.baseUrl = e;
        }
        var e = t.prototype;
        e.fetch = function() {
            var t = s((function(t) {
                var e = this;
                var {filename: r} = t;
                return function*() {
                    if (!e.baseUrl) {
                        throw new Error("Ensure that the `wasmUrl` API parameter is provided.");
                    }
                    if (!r) {
                        throw new Error("Wasm filename must be specified.");
                    }
                    var t = "" + e.baseUrl + r;
                    return e._fetch(t)["catch"]((function(e) {
                        throw new Error("Unable to load wasm data at: " + t);
                    }));
                }();
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e._fetch = function() {
            var t = s((function*(t) {
                ot("Abstract method `_fetch` called.");
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        return t;
    }();
    var ds = function(t) {
        function e() {
            return t.apply(this, arguments) || this;
        }
        g(e, t);
        var r = e.prototype;
        r._fetch = function() {
            var t = s((function*(t) {
                var e = yield Ut(t, "arraybuffer");
                return new Uint8Array(e);
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        return e;
    }(cs);
    if (B) {
        var fs;
        var vs;
        try {
            var ps = process.getBuiltinModule("module").createRequire(typeof document === "undefined" && typeof location === "undefined" ? require("u" + "rl").pathToFileURL(__filename).href : typeof document === "undefined" ? location.href : e && e.tagName.toUpperCase() === "SCRIPT" && e.src || new URL("index.js", document.baseURI).href);
            try {
                vs = ps("@napi-rs/canvas");
            } catch (pg) {
                st('Cannot load "@napi-rs/canvas" package: "' + pg + '".');
            }
        } catch (pg) {
            st('Cannot access the `require` function: "' + pg + '".');
        }
        if (!globalThis.DOMMatrix) {
            var gs;
            if ((gs = vs) !== null && gs !== void 0 && gs.DOMMatrix) {
                globalThis.DOMMatrix = vs.DOMMatrix;
            } else {
                st("Cannot polyfill `DOMMatrix`, rendering may be broken.");
            }
        }
        if (!globalThis.ImageData) {
            var ms;
            if ((ms = vs) !== null && ms !== void 0 && ms.ImageData) {
                globalThis.ImageData = vs.ImageData;
            } else {
                st("Cannot polyfill `ImageData`, rendering may be broken.");
            }
        }
        if (!globalThis.Path2D) {
            var ys;
            if ((ys = vs) !== null && ys !== void 0 && ys.Path2D) {
                globalThis.Path2D = vs.Path2D;
            } else {
                st("Cannot polyfill `Path2D`, rendering may be broken.");
            }
        }
        if (!((fs = globalThis.navigator) !== null && fs !== void 0 && fs.language)) {
            globalThis.navigator = {
                language: "en-US",
                platform: "",
                userAgent: ""
            };
        }
    }
    function ws(t) {
        return bs.apply(this, arguments);
    }
    function bs() {
        bs = s((function*(t) {
            var e = process.getBuiltinModule("fs");
            var r = yield e.promises.readFile(t);
            return new Uint8Array(r);
        }));
        return bs.apply(this, arguments);
    }
    var As = function(t) {
        function e() {
            return t.apply(this, arguments) || this;
        }
        g(e, t);
        return e;
    }(Ha);
    var _s = function(t) {
        function r() {
            return t.apply(this, arguments) || this;
        }
        g(r, t);
        var i = r.prototype;
        i._createCanvas = function n(t, r) {
            var i = process.getBuiltinModule("module").createRequire(typeof document === "undefined" && typeof location === "undefined" ? require("u" + "rl").pathToFileURL(__filename).href : typeof document === "undefined" ? location.href : e && e.tagName.toUpperCase() === "SCRIPT" && e.src || new URL("index.js", document.baseURI).href);
            var n = i("@napi-rs/canvas");
            return n.createCanvas(t, r);
        };
        return r;
    }(Fa);
    var ks = function(t) {
        function e() {
            return t.apply(this, arguments) || this;
        }
        g(e, t);
        var r = e.prototype;
        r._fetch = function() {
            var t = s((function*(t) {
                return ws(t);
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        return e;
    }(Ba);
    var xs = function(t) {
        function e() {
            return t.apply(this, arguments) || this;
        }
        g(e, t);
        var r = e.prototype;
        r._fetch = function() {
            var t = s((function*(t) {
                return ws(t);
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        return e;
    }(us);
    var Es = function(t) {
        function e() {
            return t.apply(this, arguments) || this;
        }
        g(e, t);
        var r = e.prototype;
        r._fetch = function() {
            var t = s((function*(t) {
                return ws(t);
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        return e;
    }(cs);
    var Ss = {
        FILL: "Fill",
        STROKE: "Stroke",
        SHADING: "Shading"
    };
    function Ms(t, e) {
        if (!e) {
            return;
        }
        var r = e[2] - e[0];
        var i = e[3] - e[1];
        var n = new Path2D;
        n.rect(e[0], e[1], r, i);
        t.clip(n);
    }
    var Cs = function() {
        function t() {}
        var e = t.prototype;
        e.isModifyingCurrentTransform = function r() {
            return false;
        };
        e.getPattern = function i() {
            ot("Abstract method `getPattern` called.");
        };
        return t;
    }();
    var Ts = function(t) {
        function e(e) {
            var r;
            r = t.call(this) || this;
            r._type = e[1];
            r._bbox = e[2];
            r._colorStops = e[3];
            r._p0 = e[4];
            r._p1 = e[5];
            r._r0 = e[6];
            r._r1 = e[7];
            r.matrix = null;
            return r;
        }
        g(e, t);
        var r = e.prototype;
        r._createGradient = function i(t) {
            var e;
            if (this._type === "axial") {
                e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]);
            } else if (this._type === "radial") {
                e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1);
            }
            for (var r of this._colorStops) {
                e.addColorStop(r[0], r[1]);
            }
            return e;
        };
        r.getPattern = function n(t, e, r, i) {
            var n;
            if (i === Ss.STROKE || i === Ss.FILL) {
                var a = e.current.getClippedPathBoundingBox(i, se(t)) || [ 0, 0, 0, 0 ];
                var s = Math.ceil(a[2] - a[0]) || 1;
                var o = Math.ceil(a[3] - a[1]) || 1;
                var l = e.cachedCanvases.getCanvas("pattern", s, o);
                var u = l.context;
                u.clearRect(0, 0, u.canvas.width, u.canvas.height);
                u.beginPath();
                u.rect(0, 0, u.canvas.width, u.canvas.height);
                u.translate(-a[0], -a[1]);
                r = Mt.transform(r, [ 1, 0, 0, 1, a[0], a[1] ]);
                u.transform.apply(u, e.baseTransform);
                if (this.matrix) {
                    u.transform.apply(u, this.matrix);
                }
                Ms(u, this._bbox);
                u.fillStyle = this._createGradient(u);
                u.fill();
                n = t.createPattern(l.canvas, "no-repeat");
                var h = new DOMMatrix(r);
                n.setTransform(h);
            } else {
                Ms(t, this._bbox);
                n = this._createGradient(t);
            }
            return n;
        };
        return e;
    }(Cs);
    function Rs(t, e, r, i, n, a, s, o) {
        var l = e.coords, u = e.colors;
        var h = t.data, c = t.width * 4;
        var d;
        if (l[r + 1] > l[i + 1]) {
            d = r;
            r = i;
            i = d;
            d = a;
            a = s;
            s = d;
        }
        if (l[i + 1] > l[n + 1]) {
            d = i;
            i = n;
            n = d;
            d = s;
            s = o;
            o = d;
        }
        if (l[r + 1] > l[i + 1]) {
            d = r;
            r = i;
            i = d;
            d = a;
            a = s;
            s = d;
        }
        var f = (l[r] + e.offsetX) * e.scaleX;
        var v = (l[r + 1] + e.offsetY) * e.scaleY;
        var p = (l[i] + e.offsetX) * e.scaleX;
        var g = (l[i + 1] + e.offsetY) * e.scaleY;
        var m = (l[n] + e.offsetX) * e.scaleX;
        var y = (l[n + 1] + e.offsetY) * e.scaleY;
        if (v >= y) {
            return;
        }
        var w = u[a], b = u[a + 1], A = u[a + 2];
        var _ = u[s], k = u[s + 1], x = u[s + 2];
        var E = u[o], S = u[o + 1], M = u[o + 2];
        var C = Math.round(v), T = Math.round(y);
        var R, I, P, L;
        var D, N, O, F;
        for (var W = C; W <= T; W++) {
            if (W < g) {
                var B = W < v ? 0 : (v - W) / (v - g);
                R = f - (f - p) * B;
                I = w - (w - _) * B;
                P = b - (b - k) * B;
                L = A - (A - x) * B;
            } else {
                var j = void 0;
                if (W > y) {
                    j = 1;
                } else if (g === y) {
                    j = 0;
                } else {
                    j = (g - W) / (g - y);
                }
                R = p - (p - m) * j;
                I = _ - (_ - E) * j;
                P = k - (k - S) * j;
                L = x - (x - M) * j;
            }
            var H = void 0;
            if (W < v) {
                H = 0;
            } else if (W > y) {
                H = 1;
            } else {
                H = (v - W) / (v - y);
            }
            D = f - (f - m) * H;
            N = w - (w - E) * H;
            O = b - (b - S) * H;
            F = A - (A - M) * H;
            var U = Math.round(Math.min(R, D));
            var z = Math.round(Math.max(R, D));
            var G = c * W + U * 4;
            for (var V = U; V <= z; V++) {
                H = (R - V) / (R - D);
                if (H < 0) {
                    H = 0;
                } else if (H > 1) {
                    H = 1;
                }
                h[G++] = I - (I - N) * H | 0;
                h[G++] = P - (P - O) * H | 0;
                h[G++] = L - (L - F) * H | 0;
                h[G++] = 255;
            }
        }
    }
    function Is(t, e, r) {
        var i = e.coords;
        var n = e.colors;
        var a, s;
        switch (e.type) {
          case "lattice":
            var o = e.verticesPerRow;
            var l = Math.floor(i.length / o) - 1;
            var u = o - 1;
            for (a = 0; a < l; a++) {
                var h = a * o;
                for (var c = 0; c < u; c++, h++) {
                    Rs(t, r, i[h], i[h + 1], i[h + o], n[h], n[h + 1], n[h + o]);
                    Rs(t, r, i[h + o + 1], i[h + 1], i[h + o], n[h + o + 1], n[h + 1], n[h + o]);
                }
            }
            break;

          case "triangles":
            for (a = 0, s = i.length; a < s; a += 3) {
                Rs(t, r, i[a], i[a + 1], i[a + 2], n[a], n[a + 1], n[a + 2]);
            }
            break;

          default:
            throw new Error("illegal figure");
        }
    }
    var Ps = function(t) {
        function e(e) {
            var r;
            r = t.call(this) || this;
            r._coords = e[2];
            r._colors = e[3];
            r._figures = e[4];
            r._bounds = e[5];
            r._bbox = e[6];
            r._background = e[7];
            r.matrix = null;
            return r;
        }
        g(e, t);
        var r = e.prototype;
        r._createMeshCanvas = function i(t, e, r) {
            var i = 1.1;
            var n = 3e3;
            var a = 2;
            var s = Math.floor(this._bounds[0]);
            var o = Math.floor(this._bounds[1]);
            var l = Math.ceil(this._bounds[2]) - s;
            var u = Math.ceil(this._bounds[3]) - o;
            var h = Math.min(Math.ceil(Math.abs(l * t[0] * i)), n);
            var c = Math.min(Math.ceil(Math.abs(u * t[1] * i)), n);
            var d = l / h;
            var f = u / c;
            var v = {
                coords: this._coords,
                colors: this._colors,
                offsetX: -s,
                offsetY: -o,
                scaleX: 1 / d,
                scaleY: 1 / f
            };
            var p = h + a * 2;
            var g = c + a * 2;
            var m = r.getCanvas("mesh", p, g);
            var y = m.context;
            var w = y.createImageData(h, c);
            if (e) {
                var b = w.data;
                for (var A = 0, _ = b.length; A < _; A += 4) {
                    b[A] = e[0];
                    b[A + 1] = e[1];
                    b[A + 2] = e[2];
                    b[A + 3] = 255;
                }
            }
            for (var k of this._figures) {
                Is(w, k, v);
            }
            y.putImageData(w, a, a);
            var x = m.canvas;
            return {
                canvas: x,
                offsetX: s - a * d,
                offsetY: o - a * f,
                scaleX: d,
                scaleY: f
            };
        };
        r.isModifyingCurrentTransform = function n() {
            return true;
        };
        r.getPattern = function a(t, e, r, i) {
            Ms(t, this._bbox);
            var n = new Float32Array(2);
            if (i === Ss.SHADING) {
                Mt.singularValueDecompose2dScale(se(t), n);
            } else if (this.matrix) {
                Mt.singularValueDecompose2dScale(this.matrix, n);
                var [a, s] = n;
                Mt.singularValueDecompose2dScale(e.baseTransform, n);
                n[0] *= a;
                n[1] *= s;
            } else {
                Mt.singularValueDecompose2dScale(e.baseTransform, n);
            }
            var o = this._createMeshCanvas(n, i === Ss.SHADING ? null : this._background, e.cachedCanvases);
            if (i !== Ss.SHADING) {
                t.setTransform.apply(t, e.baseTransform);
                if (this.matrix) {
                    t.transform.apply(t, this.matrix);
                }
            }
            t.translate(o.offsetX, o.offsetY);
            t.scale(o.scaleX, o.scaleY);
            return t.createPattern(o.canvas, "no-repeat");
        };
        return e;
    }(Cs);
    var Ls = function(t) {
        function e() {
            return t.apply(this, arguments) || this;
        }
        g(e, t);
        var r = e.prototype;
        r.getPattern = function i() {
            return "hotpink";
        };
        return e;
    }(Cs);
    function Ds(t) {
        switch (t[0]) {
          case "RadialAxial":
            return new Ts(t);

          case "Mesh":
            return new Ps(t);

          case "Dummy":
            return new Ls;
        }
        throw new Error("Unknown IR type: " + t[0]);
    }
    var Ns = {
        COLORED: 1,
        UNCOLORED: 2
    };
    var Os = function() {
        function t(t, e, r, i) {
            this.color = t[1];
            this.operatorList = t[2];
            this.matrix = t[3];
            this.bbox = t[4];
            this.xstep = t[5];
            this.ystep = t[6];
            this.paintType = t[7];
            this.tilingType = t[8];
            this.ctx = e;
            this.canvasGraphicsFactory = r;
            this.baseTransform = i;
        }
        var e = t.prototype;
        e.createPatternCanvas = function r(t) {
            var {bbox: e, operatorList: r, paintType: i, tilingType: n, color: a, canvasGraphicsFactory: s} = this;
            var {xstep: o, ystep: l} = this;
            o = Math.abs(o);
            l = Math.abs(l);
            at("TilingType: " + n);
            var u = e[0], h = e[1], c = e[2], d = e[3];
            var f = c - u;
            var v = d - h;
            var p = new Float32Array(2);
            Mt.singularValueDecompose2dScale(this.matrix, p);
            var [g, m] = p;
            Mt.singularValueDecompose2dScale(this.baseTransform, p);
            var y = g * p[0];
            var w = m * p[1];
            var b = f, A = v, _ = false, k = false;
            var x = Math.ceil(o * y);
            var E = Math.ceil(l * w);
            var S = Math.ceil(f * y);
            var M = Math.ceil(v * w);
            if (x >= S) {
                b = o;
            } else {
                _ = true;
            }
            if (E >= M) {
                A = l;
            } else {
                k = true;
            }
            var C = this.getSizeAndScale(b, this.ctx.canvas.width, y);
            var T = this.getSizeAndScale(A, this.ctx.canvas.height, w);
            var R = t.cachedCanvases.getCanvas("pattern", C.size, T.size);
            var I = R.context;
            var P = s.createCanvasGraphics(I);
            P.groupLevel = t.groupLevel;
            this.setFillAndStrokeStyleToContext(P, i, a);
            I.translate(-C.scale * u, -T.scale * h);
            P.transform(C.scale, 0, 0, T.scale, 0, 0);
            I.save();
            this.clipBbox(P, u, h, c, d);
            P.baseTransform = se(P.ctx);
            P.executeOperatorList(r);
            P.endDrawing();
            I.restore();
            if (_ || k) {
                var L = R.canvas;
                if (_) {
                    b = o;
                }
                if (k) {
                    A = l;
                }
                var D = this.getSizeAndScale(b, this.ctx.canvas.width, y);
                var N = this.getSizeAndScale(A, this.ctx.canvas.height, w);
                var O = D.size;
                var F = N.size;
                var W = t.cachedCanvases.getCanvas("pattern-workaround", O, F);
                var B = W.context;
                var j = _ ? Math.floor(f / o) : 0;
                var H = k ? Math.floor(v / l) : 0;
                for (var U = 0; U <= j; U++) {
                    for (var z = 0; z <= H; z++) {
                        B.drawImage(L, O * U, F * z, O, F, 0, 0, O, F);
                    }
                }
                return {
                    canvas: W.canvas,
                    scaleX: D.scale,
                    scaleY: N.scale,
                    offsetX: u,
                    offsetY: h
                };
            }
            return {
                canvas: R.canvas,
                scaleX: C.scale,
                scaleY: T.scale,
                offsetX: u,
                offsetY: h
            };
        };
        e.getSizeAndScale = function i(e, r, n) {
            var a = Math.max(t.MAX_PATTERN_SIZE, r);
            var s = Math.ceil(e * n);
            if (s >= a) {
                s = a;
            } else {
                n = s / e;
            }
            return {
                scale: n,
                size: s
            };
        };
        e.clipBbox = function n(t, e, r, i, a) {
            var s = i - e;
            var o = a - r;
            t.ctx.rect(e, r, s, o);
            Mt.axialAlignedBoundingBox([ e, r, i, a ], se(t.ctx), t.current.minMax);
            t.clip();
            t.endPath();
        };
        e.setFillAndStrokeStyleToContext = function a(t, e, r) {
            var i = t.ctx, n = t.current;
            switch (e) {
              case Ns.COLORED:
                var {fillStyle: a, strokeStyle: s} = this.ctx;
                i.fillStyle = n.fillColor = a;
                i.strokeStyle = n.strokeColor = s;
                break;

              case Ns.UNCOLORED:
                i.fillStyle = i.strokeStyle = r;
                n.fillColor = n.strokeColor = r;
                break;

              default:
                throw new yt("Unsupported paint type: " + e);
            }
        };
        e.isModifyingCurrentTransform = function s() {
            return false;
        };
        e.getPattern = function o(t, e, r, i) {
            var n = r;
            if (i !== Ss.SHADING) {
                n = Mt.transform(n, e.baseTransform);
                if (this.matrix) {
                    n = Mt.transform(n, this.matrix);
                }
            }
            var a = this.createPatternCanvas(e);
            var s = new DOMMatrix(n);
            s = s.translate(a.offsetX, a.offsetY);
            s = s.scale(1 / a.scaleX, 1 / a.scaleY);
            var o = t.createPattern(a.canvas, "repeat");
            o.setTransform(s);
            return o;
        };
        return t;
    }();
    p(Os, "MAX_PATTERN_SIZE", 3e3);
    function Fs(t) {
        var {src: e, srcPos: r = 0, dest: i, width: n, height: a, nonBlackColor: s = 4294967295, inverseDecode: o = false} = t;
        var l = Et.isLittleEndian ? 4278190080 : 255;
        var [u, h] = o ? [ s, l ] : [ l, s ];
        var c = n >> 3;
        var d = n & 7;
        var f = e.length;
        i = new Uint32Array(i.buffer);
        var v = 0;
        for (var p = 0; p < a; p++) {
            for (var g = r + c; r < g; r++) {
                var m = r < f ? e[r] : 255;
                i[v++] = m & 128 ? h : u;
                i[v++] = m & 64 ? h : u;
                i[v++] = m & 32 ? h : u;
                i[v++] = m & 16 ? h : u;
                i[v++] = m & 8 ? h : u;
                i[v++] = m & 4 ? h : u;
                i[v++] = m & 2 ? h : u;
                i[v++] = m & 1 ? h : u;
            }
            if (d === 0) {
                continue;
            }
            var y = r < f ? e[r++] : 255;
            for (var w = 0; w < d; w++) {
                i[v++] = y & 1 << 7 - w ? h : u;
            }
        }
        return {
            srcPos: r,
            destPos: v
        };
    }
    var Ws = 16;
    var Bs = 100;
    var js = 15;
    var Hs = 10;
    var Us = 16;
    var zs = new DOMMatrix;
    var Gs = new Float32Array(2);
    var Vs = new Float32Array([ Infinity, Infinity, -Infinity, -Infinity ]);
    function qs(t, e) {
        if (t._removeMirroring) {
            throw new Error("Context is already forwarding operations.");
        }
        t.__originalSave = t.save;
        t.__originalRestore = t.restore;
        t.__originalRotate = t.rotate;
        t.__originalScale = t.scale;
        t.__originalTranslate = t.translate;
        t.__originalTransform = t.transform;
        t.__originalSetTransform = t.setTransform;
        t.__originalResetTransform = t.resetTransform;
        t.__originalClip = t.clip;
        t.__originalMoveTo = t.moveTo;
        t.__originalLineTo = t.lineTo;
        t.__originalBezierCurveTo = t.bezierCurveTo;
        t.__originalRect = t.rect;
        t.__originalClosePath = t.closePath;
        t.__originalBeginPath = t.beginPath;
        t._removeMirroring = function() {
            t.save = t.__originalSave;
            t.restore = t.__originalRestore;
            t.rotate = t.__originalRotate;
            t.scale = t.__originalScale;
            t.translate = t.__originalTranslate;
            t.transform = t.__originalTransform;
            t.setTransform = t.__originalSetTransform;
            t.resetTransform = t.__originalResetTransform;
            t.clip = t.__originalClip;
            t.moveTo = t.__originalMoveTo;
            t.lineTo = t.__originalLineTo;
            t.bezierCurveTo = t.__originalBezierCurveTo;
            t.rect = t.__originalRect;
            t.closePath = t.__originalClosePath;
            t.beginPath = t.__originalBeginPath;
            delete t._removeMirroring;
        };
        t.save = function() {
            e.save();
            this.__originalSave();
        };
        t.restore = function() {
            e.restore();
            this.__originalRestore();
        };
        t.translate = function(t, r) {
            e.translate(t, r);
            this.__originalTranslate(t, r);
        };
        t.scale = function(t, r) {
            e.scale(t, r);
            this.__originalScale(t, r);
        };
        t.transform = function(t, r, i, n, a, s) {
            e.transform(t, r, i, n, a, s);
            this.__originalTransform(t, r, i, n, a, s);
        };
        t.setTransform = function(t, r, i, n, a, s) {
            e.setTransform(t, r, i, n, a, s);
            this.__originalSetTransform(t, r, i, n, a, s);
        };
        t.resetTransform = function() {
            e.resetTransform();
            this.__originalResetTransform();
        };
        t.rotate = function(t) {
            e.rotate(t);
            this.__originalRotate(t);
        };
        t.clip = function(t) {
            e.clip(t);
            this.__originalClip(t);
        };
        t.moveTo = function(t, r) {
            e.moveTo(t, r);
            this.__originalMoveTo(t, r);
        };
        t.lineTo = function(t, r) {
            e.lineTo(t, r);
            this.__originalLineTo(t, r);
        };
        t.bezierCurveTo = function(t, r, i, n, a, s) {
            e.bezierCurveTo(t, r, i, n, a, s);
            this.__originalBezierCurveTo(t, r, i, n, a, s);
        };
        t.rect = function(t, r, i, n) {
            e.rect(t, r, i, n);
            this.__originalRect(t, r, i, n);
        };
        t.closePath = function() {
            e.closePath();
            this.__originalClosePath();
        };
        t.beginPath = function() {
            e.beginPath();
            this.__originalBeginPath();
        };
    }
    var Xs = function() {
        function t(t) {
            this.canvasFactory = t;
            this.cache = Object.create(null);
        }
        var e = t.prototype;
        e.getCanvas = function r(t, e, i) {
            var n;
            if (this.cache[t] !== undefined) {
                n = this.cache[t];
                this.canvasFactory.reset(n, e, i);
            } else {
                n = this.canvasFactory.create(e, i);
                this.cache[t] = n;
            }
            return n;
        };
        e["delete"] = function i(t) {
            delete this.cache[t];
        };
        e.clear = function n() {
            for (var t in this.cache) {
                var e = this.cache[t];
                this.canvasFactory.destroy(e);
                delete this.cache[t];
            }
        };
        return t;
    }();
    function Ys(t, e, r, i, n, a, s, o, l, u) {
        var [h, c, d, f, v, p] = se(t);
        if (c === 0 && d === 0) {
            var g = s * h + v;
            var m = Math.round(g);
            var y = o * f + p;
            var w = Math.round(y);
            var b = (s + l) * h + v;
            var A = Math.abs(Math.round(b) - m) || 1;
            var _ = (o + u) * f + p;
            var k = Math.abs(Math.round(_) - w) || 1;
            t.setTransform(Math.sign(h), 0, 0, Math.sign(f), m, w);
            t.drawImage(e, r, i, n, a, 0, 0, A, k);
            t.setTransform(h, c, d, f, v, p);
            return [ A, k ];
        }
        if (h === 0 && f === 0) {
            var x = o * d + v;
            var E = Math.round(x);
            var S = s * c + p;
            var M = Math.round(S);
            var C = (o + u) * d + v;
            var T = Math.abs(Math.round(C) - E) || 1;
            var R = (s + l) * c + p;
            var I = Math.abs(Math.round(R) - M) || 1;
            t.setTransform(0, Math.sign(c), Math.sign(d), 0, E, M);
            t.drawImage(e, r, i, n, a, 0, 0, I, T);
            t.setTransform(h, c, d, f, v, p);
            return [ I, T ];
        }
        t.drawImage(e, r, i, n, a, s, o, l, u);
        var P = Math.hypot(h, c);
        var L = Math.hypot(d, f);
        return [ P * l, L * u ];
    }
    var Ks = function() {
        function t(t, e) {
            p(this, "alphaIsShape", false);
            p(this, "fontSize", 0);
            p(this, "fontSizeScale", 1);
            p(this, "textMatrix", null);
            p(this, "textMatrixScale", 1);
            p(this, "fontMatrix", j);
            p(this, "leading", 0);
            p(this, "x", 0);
            p(this, "y", 0);
            p(this, "lineX", 0);
            p(this, "lineY", 0);
            p(this, "charSpacing", 0);
            p(this, "wordSpacing", 0);
            p(this, "textHScale", 1);
            p(this, "textRenderingMode", Y.FILL);
            p(this, "textRise", 0);
            p(this, "fillColor", "#000000");
            p(this, "strokeColor", "#000000");
            p(this, "patternFill", false);
            p(this, "patternStroke", false);
            p(this, "fillAlpha", 1);
            p(this, "strokeAlpha", 1);
            p(this, "lineWidth", 1);
            p(this, "activeSMask", null);
            p(this, "transferMaps", "none");
            this.clipBox = new Float32Array([ 0, 0, t, e ]);
            this.minMax = Vs.slice();
        }
        var e = t.prototype;
        e.clone = function r() {
            var r = Object.create(this);
            r.clipBox = this.clipBox.slice();
            r.minMax = this.minMax.slice();
            return r;
        };
        e.getPathBoundingBox = function i() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Ss.FILL;
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var r = this.minMax.slice();
            if (t === Ss.STROKE) {
                if (!e) {
                    ot("Stroke bounding box must include transform.");
                }
                Mt.singularValueDecompose2dScale(e, Gs);
                var i = Gs[0] * this.lineWidth / 2;
                var n = Gs[1] * this.lineWidth / 2;
                r[0] -= i;
                r[1] -= n;
                r[2] += i;
                r[3] += n;
            }
            return r;
        };
        e.updateClipFromPath = function n() {
            var t = Mt.intersect(this.clipBox, this.getPathBoundingBox());
            this.startNewPathAndClipBox(t || [ 0, 0, 0, 0 ]);
        };
        e.isEmptyClip = function a() {
            return this.minMax[0] === Infinity;
        };
        e.startNewPathAndClipBox = function s(t) {
            this.clipBox.set(t, 0);
            this.minMax.set(Vs, 0);
        };
        e.getClippedPathBoundingBox = function o() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Ss.FILL;
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            return Mt.intersect(this.clipBox, this.getPathBoundingBox(t, e));
        };
        return t;
    }();
    function Qs(t, e) {
        if (e instanceof ImageData) {
            t.putImageData(e, 0, 0);
            return;
        }
        var r = e.height, i = e.width;
        var n = r % Us;
        var a = (r - n) / Us;
        var s = n === 0 ? a : a + 1;
        var o = t.createImageData(i, Us);
        var l = 0, u;
        var h = e.data;
        var c = o.data;
        var d, f, v, p;
        if (e.kind === K.GRAYSCALE_1BPP) {
            var g = h.byteLength;
            var m = new Uint32Array(c.buffer, 0, c.byteLength >> 2);
            var y = m.length;
            var w = i + 7 >> 3;
            var b = 4294967295;
            var A = Et.isLittleEndian ? 4278190080 : 255;
            for (d = 0; d < s; d++) {
                v = d < a ? Us : n;
                u = 0;
                for (f = 0; f < v; f++) {
                    var _ = g - l;
                    var k = 0;
                    var x = _ > w ? i : _ * 8 - 7;
                    var E = x & -8;
                    var S = 0;
                    var M = 0;
                    for (;k < E; k += 8) {
                        M = h[l++];
                        m[u++] = M & 128 ? b : A;
                        m[u++] = M & 64 ? b : A;
                        m[u++] = M & 32 ? b : A;
                        m[u++] = M & 16 ? b : A;
                        m[u++] = M & 8 ? b : A;
                        m[u++] = M & 4 ? b : A;
                        m[u++] = M & 2 ? b : A;
                        m[u++] = M & 1 ? b : A;
                    }
                    for (;k < x; k++) {
                        if (S === 0) {
                            M = h[l++];
                            S = 128;
                        }
                        m[u++] = M & S ? b : A;
                        S >>= 1;
                    }
                }
                while (u < y) {
                    m[u++] = 0;
                }
                t.putImageData(o, 0, d * Us);
            }
        } else if (e.kind === K.RGBA_32BPP) {
            f = 0;
            p = i * Us * 4;
            for (d = 0; d < a; d++) {
                c.set(h.subarray(l, l + p));
                l += p;
                t.putImageData(o, 0, f);
                f += Us;
            }
            if (d < s) {
                p = i * n * 4;
                c.set(h.subarray(l, l + p));
                t.putImageData(o, 0, f);
            }
        } else if (e.kind === K.RGB_24BPP) {
            v = Us;
            p = i * v;
            for (d = 0; d < s; d++) {
                if (d >= a) {
                    v = n;
                    p = i * v;
                }
                u = 0;
                for (f = p; f--; ) {
                    c[u++] = h[l++];
                    c[u++] = h[l++];
                    c[u++] = h[l++];
                    c[u++] = 255;
                }
                t.putImageData(o, 0, d * Us);
            }
        } else {
            throw new Error("bad image kind: " + e.kind);
        }
    }
    function Js(t, e) {
        if (e.bitmap) {
            t.drawImage(e.bitmap, 0, 0);
            return;
        }
        var r = e.height, i = e.width;
        var n = r % Us;
        var a = (r - n) / Us;
        var s = n === 0 ? a : a + 1;
        var o = t.createImageData(i, Us);
        var l = 0;
        var u = e.data;
        var h = o.data;
        for (var c = 0; c < s; c++) {
            var d = c < a ? Us : n;
            ({srcPos: l} = Fs({
                src: u,
                srcPos: l,
                dest: h,
                width: i,
                height: d,
                nonBlackColor: 0
            }));
            t.putImageData(o, 0, c * Us);
        }
    }
    function Zs(t, e) {
        var r = [ "strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter" ];
        for (var i of r) {
            if (t[i] !== undefined) {
                e[i] = t[i];
            }
        }
        if (t.setLineDash !== undefined) {
            e.setLineDash(t.getLineDash());
            e.lineDashOffset = t.lineDashOffset;
        }
    }
    function $s(t) {
        t.strokeStyle = t.fillStyle = "#000000";
        t.fillRule = "nonzero";
        t.globalAlpha = 1;
        t.lineWidth = 1;
        t.lineCap = "butt";
        t.lineJoin = "miter";
        t.miterLimit = 10;
        t.globalCompositeOperation = "source-over";
        t.font = "10px sans-serif";
        if (t.setLineDash !== undefined) {
            t.setLineDash([]);
            t.lineDashOffset = 0;
        }
        var {filter: e} = t;
        if (e !== "none" && e !== "") {
            t.filter = "none";
        }
    }
    function to(t, e) {
        if (e) {
            return true;
        }
        Mt.singularValueDecompose2dScale(t, Gs);
        var r = Math.fround(ue.pixelRatio * Ht.PDF_TO_CSS_UNITS);
        return Gs[0] <= r && Gs[1] <= r;
    }
    var eo = [ "butt", "round", "square" ];
    var ro = [ "miter", "round", "bevel" ];
    var io = {};
    var no = {};
    var ao = new WeakSet;
    var so = function() {
        function t(t, e, r, i, n, a, s, o) {
            var {optionalContentConfig: l, markedContentStack: u = null} = a;
            d(this, ao);
            this.ctx = t;
            this.current = new Ks(this.ctx.canvas.width, this.ctx.canvas.height);
            this.stateStack = [];
            this.pendingClip = null;
            this.pendingEOFill = false;
            this.res = null;
            this.xobjs = null;
            this.commonObjs = e;
            this.objs = r;
            this.canvasFactory = i;
            this.filterFactory = n;
            this.groupStack = [];
            this.baseTransform = null;
            this.baseTransformStack = [];
            this.groupLevel = 0;
            this.smaskStack = [];
            this.smaskCounter = 0;
            this.tempSMask = null;
            this.suspendedCtx = null;
            this.contentVisible = true;
            this.markedContentStack = u || [];
            this.optionalContentConfig = l;
            this.cachedCanvases = new Xs(this.canvasFactory);
            this.cachedPatterns = new Map;
            this.annotationCanvasMap = s;
            this.viewportScale = 1;
            this.outputScaleX = 1;
            this.outputScaleY = 1;
            this.pageColors = o;
            this._cachedScaleForStroking = [ -1, 0 ];
            this._cachedGetSinglePixelWidth = null;
            this._cachedBitmapsMap = new Map;
        }
        var e = t.prototype;
        e.getObject = function i(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            if (typeof t === "string") {
                return t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t);
            }
            return e;
        };
        e.beginDrawing = function n(t) {
            var e;
            var {transform: r, viewport: i, transparency: n = false, background: a = null} = t;
            var s = this.ctx.canvas.width;
            var o = this.ctx.canvas.height;
            var l = this.ctx.fillStyle;
            this.ctx.fillStyle = a || "#ffffff";
            this.ctx.fillRect(0, 0, s, o);
            this.ctx.fillStyle = l;
            if (n) {
                var u;
                var h = this.cachedCanvases.getCanvas("transparent", s, o);
                this.compositeCtx = this.ctx;
                this.transparentCanvas = h.canvas;
                this.ctx = h.context;
                this.ctx.save();
                (u = this.ctx).transform.apply(u, se(this.compositeCtx));
            }
            this.ctx.save();
            $s(this.ctx);
            if (r) {
                var c;
                (c = this.ctx).transform.apply(c, r);
                this.outputScaleX = r[0];
                this.outputScaleY = r[0];
            }
            (e = this.ctx).transform.apply(e, i.transform);
            this.viewportScale = i.scale;
            this.baseTransform = se(this.ctx);
        };
        e.executeOperatorList = function a(t, e, r, i) {
            var n = t.argsArray;
            var a = t.fnArray;
            var s = e || 0;
            var o = n.length;
            if (o === s) {
                return s;
            }
            var l = o - s > Hs && typeof r === "function";
            var u = l ? Date.now() + js : 0;
            var h = 0;
            var c = this.commonObjs;
            var d = this.objs;
            var f;
            while (true) {
                if (i !== undefined && s === i.nextBreakPoint) {
                    i.breakIt(s, r);
                    return s;
                }
                f = a[s];
                if (f !== $.dependency) {
                    this[f].apply(this, n[s]);
                } else {
                    for (var v of n[s]) {
                        var p = v.startsWith("g_") ? c : d;
                        if (!p.has(v)) {
                            p.get(v, r);
                            return s;
                        }
                    }
                }
                s++;
                if (s === o) {
                    return s;
                }
                if (l && ++h > Hs) {
                    if (Date.now() > u) {
                        r();
                        return s;
                    }
                    h = 0;
                }
            }
        };
        e.endDrawing = function s() {
            r(ao, this, oo).call(this);
            this.cachedCanvases.clear();
            this.cachedPatterns.clear();
            for (var t of this._cachedBitmapsMap.values()) {
                for (var e of t.values()) {
                    if (typeof HTMLCanvasElement !== "undefined" && e instanceof HTMLCanvasElement) {
                        e.width = e.height = 0;
                    }
                }
                t.clear();
            }
            this._cachedBitmapsMap.clear();
            r(ao, this, lo).call(this);
        };
        e._scaleImage = function o(t, e) {
            var r, i;
            var n = (r = t.width) !== null && r !== void 0 ? r : t.displayWidth;
            var a = (i = t.height) !== null && i !== void 0 ? i : t.displayHeight;
            var s = Math.max(Math.hypot(e[0], e[1]), 1);
            var o = Math.max(Math.hypot(e[2], e[3]), 1);
            var l = n, u = a;
            var h = "prescale1";
            var c, d;
            while (s > 2 && l > 1 || o > 2 && u > 1) {
                var f = l, v = u;
                if (s > 2 && l > 1) {
                    f = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l / 2);
                    s /= l / f;
                }
                if (o > 2 && u > 1) {
                    v = u >= 16384 ? Math.floor(u / 2) - 1 || 1 : Math.ceil(u) / 2;
                    o /= u / v;
                }
                c = this.cachedCanvases.getCanvas(h, f, v);
                d = c.context;
                d.clearRect(0, 0, f, v);
                d.drawImage(t, 0, 0, l, u, 0, 0, f, v);
                t = c.canvas;
                l = f;
                u = v;
                h = h === "prescale1" ? "prescale2" : "prescale1";
            }
            return {
                img: t,
                paintWidth: l,
                paintHeight: u
            };
        };
        e._createMaskCanvas = function l(t) {
            var e = this.ctx;
            var {width: r, height: i} = t;
            var n = this.current.fillColor;
            var a = this.current.patternFill;
            var s = se(e);
            var o, l, u, h;
            if ((t.bitmap || t.data) && t.count > 1) {
                var c = t.bitmap || t.data.buffer;
                l = JSON.stringify(a ? s : [ s.slice(0, 4), n ]);
                o = this._cachedBitmapsMap.get(c);
                if (!o) {
                    o = new Map;
                    this._cachedBitmapsMap.set(c, o);
                }
                var d = o.get(l);
                if (d && !a) {
                    var f = Math.round(Math.min(s[0], s[2]) + s[4]);
                    var v = Math.round(Math.min(s[1], s[3]) + s[5]);
                    return {
                        canvas: d,
                        offsetX: f,
                        offsetY: v
                    };
                }
                u = d;
            }
            if (!u) {
                h = this.cachedCanvases.getCanvas("maskCanvas", r, i);
                Js(h.context, t);
            }
            var p = Mt.transform(s, [ 1 / r, 0, 0, -1 / i, 0, 0 ]);
            p = Mt.transform(p, [ 1, 0, 0, 1, 0, -i ]);
            var g = Vs.slice();
            Mt.axialAlignedBoundingBox([ 0, 0, r, i ], p, g);
            var [m, y, w, b] = g;
            var A = Math.round(w - m) || 1;
            var _ = Math.round(b - y) || 1;
            var k = this.cachedCanvases.getCanvas("fillCanvas", A, _);
            var x = k.context;
            var E = m;
            var S = y;
            x.translate(-E, -S);
            x.transform.apply(x, p);
            if (!u) {
                u = this._scaleImage(h.canvas, oe(x));
                u = u.img;
                if (o && a) {
                    o.set(l, u);
                }
            }
            x.imageSmoothingEnabled = to(se(x), t.interpolate);
            Ys(x, u, 0, 0, u.width, u.height, 0, 0, r, i);
            x.globalCompositeOperation = "source-in";
            var M = Mt.transform(oe(x), [ 1, 0, 0, 1, -E, -S ]);
            x.fillStyle = a ? n.getPattern(e, this, M, Ss.FILL) : n;
            x.fillRect(0, 0, r, i);
            if (o && !a) {
                this.cachedCanvases["delete"]("fillCanvas");
                o.set(l, k.canvas);
            }
            return {
                canvas: k.canvas,
                offsetX: Math.round(E),
                offsetY: Math.round(S)
            };
        };
        e.setLineWidth = function u(t) {
            if (t !== this.current.lineWidth) {
                this._cachedScaleForStroking[0] = -1;
            }
            this.current.lineWidth = t;
            this.ctx.lineWidth = t;
        };
        e.setLineCap = function h(t) {
            this.ctx.lineCap = eo[t];
        };
        e.setLineJoin = function c(t) {
            this.ctx.lineJoin = ro[t];
        };
        e.setMiterLimit = function f(t) {
            this.ctx.miterLimit = t;
        };
        e.setDash = function p(t, e) {
            var r = this.ctx;
            if (r.setLineDash !== undefined) {
                r.setLineDash(t);
                r.lineDashOffset = e;
            }
        };
        e.setRenderingIntent = function g(t) {};
        e.setFlatness = function m(t) {};
        e.setGState = function y(t) {
            for (var [e, r] of t) {
                switch (e) {
                  case "LW":
                    this.setLineWidth(r);
                    break;

                  case "LC":
                    this.setLineCap(r);
                    break;

                  case "LJ":
                    this.setLineJoin(r);
                    break;

                  case "ML":
                    this.setMiterLimit(r);
                    break;

                  case "D":
                    this.setDash(r[0], r[1]);
                    break;

                  case "RI":
                    this.setRenderingIntent(r);
                    break;

                  case "FL":
                    this.setFlatness(r);
                    break;

                  case "Font":
                    this.setFont(r[0], r[1]);
                    break;

                  case "CA":
                    this.current.strokeAlpha = r;
                    break;

                  case "ca":
                    this.ctx.globalAlpha = this.current.fillAlpha = r;
                    break;

                  case "BM":
                    this.ctx.globalCompositeOperation = r;
                    break;

                  case "SMask":
                    this.current.activeSMask = r ? this.tempSMask : null;
                    this.tempSMask = null;
                    this.checkSMaskState();
                    break;

                  case "TR":
                    this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(r);
                    break;
                }
            }
        };
        e.checkSMaskState = function w() {
            var t = this.inSMaskMode;
            if (this.current.activeSMask && !t) {
                this.beginSMaskMode();
            } else if (!this.current.activeSMask && t) {
                this.endSMaskMode();
            }
        };
        e.beginSMaskMode = function b() {
            if (this.inSMaskMode) {
                throw new Error("beginSMaskMode called while already in smask mode");
            }
            var t = this.ctx.canvas.width;
            var e = this.ctx.canvas.height;
            var r = "smaskGroupAt" + this.groupLevel;
            var i = this.cachedCanvases.getCanvas(r, t, e);
            this.suspendedCtx = this.ctx;
            var n = this.ctx = i.context;
            n.setTransform(this.suspendedCtx.getTransform());
            Zs(this.suspendedCtx, n);
            qs(n, this.suspendedCtx);
            this.setGState([ [ "BM", "source-over" ] ]);
        };
        e.endSMaskMode = function A() {
            if (!this.inSMaskMode) {
                throw new Error("endSMaskMode called while not in smask mode");
            }
            this.ctx._removeMirroring();
            Zs(this.ctx, this.suspendedCtx);
            this.ctx = this.suspendedCtx;
            this.suspendedCtx = null;
        };
        e.compose = function _(t) {
            if (!this.current.activeSMask) {
                return;
            }
            if (!t) {
                t = [ 0, 0, this.ctx.canvas.width, this.ctx.canvas.height ];
            } else {
                t[0] = Math.floor(t[0]);
                t[1] = Math.floor(t[1]);
                t[2] = Math.ceil(t[2]);
                t[3] = Math.ceil(t[3]);
            }
            var e = this.current.activeSMask;
            var r = this.suspendedCtx;
            this.composeSMask(r, e, this.ctx, t);
            this.ctx.save();
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
            this.ctx.restore();
        };
        e.composeSMask = function k(t, e, r, i) {
            var n = i[0];
            var a = i[1];
            var s = i[2] - n;
            var o = i[3] - a;
            if (s === 0 || o === 0) {
                return;
            }
            this.genericComposeSMask(e.context, r, s, o, e.subtype, e.backdrop, e.transferMap, n, a, e.offsetX, e.offsetY);
            t.save();
            t.globalAlpha = 1;
            t.globalCompositeOperation = "source-over";
            t.setTransform(1, 0, 0, 1, 0, 0);
            t.drawImage(r.canvas, 0, 0);
            t.restore();
        };
        e.genericComposeSMask = function x(t, e, r, i, n, a, s, o, l, u, h) {
            var c = t.canvas;
            var d = o - u;
            var f = l - h;
            if (a) {
                if (d < 0 || f < 0 || d + r > c.width || f + i > c.height) {
                    var v = this.cachedCanvases.getCanvas("maskExtension", r, i);
                    var p = v.context;
                    p.drawImage(c, -d, -f);
                    p.globalCompositeOperation = "destination-atop";
                    p.fillStyle = a;
                    p.fillRect(0, 0, r, i);
                    p.globalCompositeOperation = "source-over";
                    c = v.canvas;
                    d = f = 0;
                } else {
                    t.save();
                    t.globalAlpha = 1;
                    t.setTransform(1, 0, 0, 1, 0, 0);
                    var g = new Path2D;
                    g.rect(d, f, r, i);
                    t.clip(g);
                    t.globalCompositeOperation = "destination-atop";
                    t.fillStyle = a;
                    t.fillRect(d, f, r, i);
                    t.restore();
                }
            }
            e.save();
            e.globalAlpha = 1;
            e.setTransform(1, 0, 0, 1, 0, 0);
            if (n === "Alpha" && s) {
                e.filter = this.filterFactory.addAlphaFilter(s);
            } else if (n === "Luminosity") {
                e.filter = this.filterFactory.addLuminosityFilter(s);
            }
            var m = new Path2D;
            m.rect(o, l, r, i);
            e.clip(m);
            e.globalCompositeOperation = "destination-in";
            e.drawImage(c, d, f, r, i, o, l, r, i);
            e.restore();
        };
        e.save = function E() {
            if (this.inSMaskMode) {
                Zs(this.ctx, this.suspendedCtx);
            }
            this.ctx.save();
            var t = this.current;
            this.stateStack.push(t);
            this.current = t.clone();
        };
        e.restore = function S() {
            if (this.stateStack.length === 0) {
                if (this.inSMaskMode) {
                    this.endSMaskMode();
                }
                return;
            }
            this.current = this.stateStack.pop();
            this.ctx.restore();
            if (this.inSMaskMode) {
                Zs(this.suspendedCtx, this.ctx);
            }
            this.checkSMaskState();
            this.pendingClip = null;
            this._cachedScaleForStroking[0] = -1;
            this._cachedGetSinglePixelWidth = null;
        };
        e.transform = function M(t, e, r, i, n, a) {
            this.ctx.transform(t, e, r, i, n, a);
            this._cachedScaleForStroking[0] = -1;
            this._cachedGetSinglePixelWidth = null;
        };
        e.constructPath = function C(t, e, r) {
            var [i] = e;
            if (!r) {
                i ||= e[0] = new Path2D;
                this[t](i);
                return;
            }
            if (!(i instanceof Path2D)) {
                var n = e[0] = new Path2D;
                for (var a = 0, s = i.length; a < s; ) {
                    switch (i[a++]) {
                      case tt.moveTo:
                        n.moveTo(i[a++], i[a++]);
                        break;

                      case tt.lineTo:
                        n.lineTo(i[a++], i[a++]);
                        break;

                      case tt.curveTo:
                        n.bezierCurveTo(i[a++], i[a++], i[a++], i[a++], i[a++], i[a++]);
                        break;

                      case tt.closePath:
                        n.closePath();
                        break;

                      default:
                        st("Unrecognized drawing path operator: " + i[a - 1]);
                        break;
                    }
                }
                i = n;
            }
            Mt.axialAlignedBoundingBox(r, se(this.ctx), this.current.minMax);
            this[t](i);
        };
        e.closePath = function T() {
            this.ctx.closePath();
        };
        e.stroke = function R(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var r = this.ctx;
            var i = this.current.strokeColor;
            r.globalAlpha = this.current.strokeAlpha;
            if (this.contentVisible) {
                if (typeof i === "object" && i !== null && i !== void 0 && i.getPattern) {
                    var n = i.isModifyingCurrentTransform() ? r.getTransform() : null;
                    r.save();
                    r.strokeStyle = i.getPattern(r, this, oe(r), Ss.STROKE);
                    if (n) {
                        var a = new Path2D;
                        a.addPath(t, r.getTransform().invertSelf().multiplySelf(n));
                        t = a;
                    }
                    this.rescaleAndStroke(t, false);
                    r.restore();
                } else {
                    this.rescaleAndStroke(t, true);
                }
            }
            if (e) {
                this.consumePath(t, this.current.getClippedPathBoundingBox(Ss.STROKE, se(this.ctx)));
            }
            r.globalAlpha = this.current.fillAlpha;
        };
        e.closeStroke = function I(t) {
            this.stroke(t);
        };
        e.fill = function P(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var r = this.ctx;
            var i = this.current.fillColor;
            var n = this.current.patternFill;
            var a = false;
            if (n) {
                var s = i.isModifyingCurrentTransform() ? r.getTransform() : null;
                r.save();
                r.fillStyle = i.getPattern(r, this, oe(r), Ss.FILL);
                if (s) {
                    var o = new Path2D;
                    o.addPath(t, r.getTransform().invertSelf().multiplySelf(s));
                    t = o;
                }
                a = true;
            }
            var l = this.current.getClippedPathBoundingBox();
            if (this.contentVisible && l !== null) {
                if (this.pendingEOFill) {
                    r.fill(t, "evenodd");
                    this.pendingEOFill = false;
                } else {
                    r.fill(t);
                }
            }
            if (a) {
                r.restore();
            }
            if (e) {
                this.consumePath(t, l);
            }
        };
        e.eoFill = function L(t) {
            this.pendingEOFill = true;
            this.fill(t);
        };
        e.fillStroke = function D(t) {
            this.fill(t, false);
            this.stroke(t, false);
            this.consumePath(t);
        };
        e.eoFillStroke = function N(t) {
            this.pendingEOFill = true;
            this.fillStroke(t);
        };
        e.closeFillStroke = function O(t) {
            this.fillStroke(t);
        };
        e.closeEOFillStroke = function F(t) {
            this.pendingEOFill = true;
            this.fillStroke(t);
        };
        e.endPath = function W(t) {
            this.consumePath(t);
        };
        e.rawFillPath = function B(t) {
            this.ctx.fill(t);
        };
        e.clip = function H() {
            this.pendingClip = io;
        };
        e.eoClip = function U() {
            this.pendingClip = no;
        };
        e.beginText = function z() {
            this.current.textMatrix = null;
            this.current.textMatrixScale = 1;
            this.current.x = this.current.lineX = 0;
            this.current.y = this.current.lineY = 0;
        };
        e.endText = function G() {
            var t = this.pendingTextPaths;
            var e = this.ctx;
            if (t === undefined) {
                return;
            }
            var r = new Path2D;
            var i = e.getTransform().invertSelf();
            for (var {transform: n, x: a, y: s, fontSize: o, path: l} of t) {
                if (!l) {
                    continue;
                }
                r.addPath(l, new DOMMatrix(n).preMultiplySelf(i).translate(a, s).scale(o, -o));
            }
            e.clip(r);
            delete this.pendingTextPaths;
        };
        e.setCharSpacing = function V(t) {
            this.current.charSpacing = t;
        };
        e.setWordSpacing = function q(t) {
            this.current.wordSpacing = t;
        };
        e.setHScale = function X(t) {
            this.current.textHScale = t / 100;
        };
        e.setLeading = function K(t) {
            this.current.leading = -t;
        };
        e.setFont = function Q(t, e) {
            var r;
            var i = this.commonObjs.get(t);
            var n = this.current;
            if (!i) {
                throw new Error("Can't find font for " + t);
            }
            n.fontMatrix = i.fontMatrix || j;
            if (n.fontMatrix[0] === 0 || n.fontMatrix[3] === 0) {
                st("Invalid font matrix for font " + t);
            }
            if (e < 0) {
                e = -e;
                n.fontDirection = -1;
            } else {
                n.fontDirection = 1;
            }
            this.current.font = i;
            this.current.fontSize = e;
            if (i.isType3Font) {
                return;
            }
            var a = i.loadedName || "sans-serif";
            var s = ((r = i.systemFontInfo) === null || r === void 0 ? void 0 : r.css) || '"' + a + '", ' + i.fallbackName;
            var o = "normal";
            if (i.black) {
                o = "900";
            } else if (i.bold) {
                o = "bold";
            }
            var l = i.italic ? "italic" : "normal";
            var u = e;
            if (e < Ws) {
                u = Ws;
            } else if (e > Bs) {
                u = Bs;
            }
            this.current.fontSizeScale = e / u;
            this.ctx.font = l + " " + o + " " + u + "px " + s;
        };
        e.setTextRenderingMode = function J(t) {
            this.current.textRenderingMode = t;
        };
        e.setTextRise = function Z(t) {
            this.current.textRise = t;
        };
        e.moveText = function et(t, e) {
            this.current.x = this.current.lineX += t;
            this.current.y = this.current.lineY += e;
        };
        e.setLeadingMoveText = function rt(t, e) {
            this.setLeading(-e);
            this.moveText(t, e);
        };
        e.setTextMatrix = function it(t) {
            var {current: e} = this;
            e.textMatrix = t;
            e.textMatrixScale = Math.hypot(t[0], t[1]);
            e.x = e.lineX = 0;
            e.y = e.lineY = 0;
        };
        e.nextLine = function nt() {
            this.moveText(0, this.current.leading);
        };
        e.paintChar = function lt(t, e, i, n, a) {
            var s = this.ctx;
            var o = this.current;
            var l = o.font;
            var u = o.textRenderingMode;
            var h = o.fontSize / o.fontSizeScale;
            var c = u & Y.FILL_STROKE_MASK;
            var d = !!(u & Y.ADD_TO_PATH_FLAG);
            var f = o.patternFill && !l.missingFile;
            var v = o.patternStroke && !l.missingFile;
            var p;
            if ((l.disableFontFace || d || f || v) && !l.missingFile) {
                p = l.getPathGenerator(this.commonObjs, t);
            }
            if (p && (l.disableFontFace || f || v)) {
                s.save();
                s.translate(e, i);
                s.scale(h, -h);
                var g;
                if (c === Y.FILL || c === Y.FILL_STROKE) {
                    if (n) {
                        g = s.getTransform();
                        s.setTransform.apply(s, n);
                        s.fill(r(ao, this, uo).call(this, p, g, n));
                    } else {
                        s.fill(p);
                    }
                }
                if (c === Y.STROKE || c === Y.FILL_STROKE) {
                    if (a) {
                        g ||= s.getTransform();
                        s.setTransform.apply(s, a);
                        var {a: m, b: y, c: w, d: b} = g;
                        var A = Mt.inverseTransform(a);
                        var _ = Mt.transform([ m, y, w, b, 0, 0 ], A);
                        Mt.singularValueDecompose2dScale(_, Gs);
                        s.lineWidth *= Math.max(Gs[0], Gs[1]) / h;
                        s.stroke(r(ao, this, uo).call(this, p, g, a));
                    } else {
                        s.lineWidth /= h;
                        s.stroke(p);
                    }
                }
                s.restore();
            } else {
                if (c === Y.FILL || c === Y.FILL_STROKE) {
                    s.fillText(t, e, i);
                }
                if (c === Y.STROKE || c === Y.FILL_STROKE) {
                    s.strokeText(t, e, i);
                }
            }
            if (d) {
                var k = this.pendingTextPaths ||= [];
                k.push({
                    transform: se(s),
                    x: e,
                    y: i,
                    fontSize: h,
                    path: p
                });
            }
        };
        e.showText = function ut(t) {
            var e = this.current;
            var r = e.font;
            if (r.isType3Font) {
                return this.showType3Text(t);
            }
            var i = e.fontSize;
            if (i === 0) {
                return undefined;
            }
            var n = this.ctx;
            var a = e.fontSizeScale;
            var s = e.charSpacing;
            var o = e.wordSpacing;
            var l = e.fontDirection;
            var u = e.textHScale * l;
            var h = t.length;
            var c = r.vertical;
            var d = c ? 1 : -1;
            var f = r.defaultVMetrics;
            var v = i * e.fontMatrix[0];
            var p = e.textRenderingMode === Y.FILL && !r.disableFontFace && !e.patternFill;
            n.save();
            if (e.textMatrix) {
                n.transform.apply(n, e.textMatrix);
            }
            n.translate(e.x, e.y + e.textRise);
            if (l > 0) {
                n.scale(u, -1);
            } else {
                n.scale(u, 1);
            }
            var g, m;
            if (e.patternFill) {
                n.save();
                var y = e.fillColor.getPattern(n, this, oe(n), Ss.FILL);
                g = se(n);
                n.restore();
                n.fillStyle = y;
            }
            if (e.patternStroke) {
                n.save();
                var w = e.strokeColor.getPattern(n, this, oe(n), Ss.STROKE);
                m = se(n);
                n.restore();
                n.strokeStyle = w;
            }
            var b = e.lineWidth;
            var A = e.textMatrixScale;
            if (A === 0 || b === 0) {
                var _ = e.textRenderingMode & Y.FILL_STROKE_MASK;
                if (_ === Y.STROKE || _ === Y.FILL_STROKE) {
                    b = this.getSinglePixelWidth();
                }
            } else {
                b /= A;
            }
            if (a !== 1) {
                n.scale(a, a);
                b /= a;
            }
            n.lineWidth = b;
            if (r.isInvalidPDFjsFont) {
                var k = [];
                var x = 0;
                for (var E of t) {
                    k.push(E.unicode);
                    x += E.width;
                }
                n.fillText(k.join(""), 0, 0);
                e.x += x * v * u;
                n.restore();
                this.compose();
                return undefined;
            }
            var S = 0, M;
            for (M = 0; M < h; ++M) {
                var C = t[M];
                if (typeof C === "number") {
                    S += d * C * i / 1e3;
                    continue;
                }
                var T = false;
                var R = (C.isSpace ? o : 0) + s;
                var I = C.fontChar;
                var P = C.accent;
                var L = void 0, D = void 0;
                var N = C.width;
                if (c) {
                    var O = C.vmetric || f;
                    var F = -(C.vmetric ? O[1] : N * .5) * v;
                    var W = O[2] * v;
                    N = O ? -O[0] : N;
                    L = F / a;
                    D = (S + W) / a;
                } else {
                    L = S / a;
                    D = 0;
                }
                if (r.remeasure && N > 0) {
                    var B = n.measureText(I).width * 1e3 / i * a;
                    if (N < B && this.isFontSubpixelAAEnabled) {
                        var j = N / B;
                        T = true;
                        n.save();
                        n.scale(j, 1);
                        L /= j;
                    } else if (N !== B) {
                        L += (N - B) / 2e3 * i / a;
                    }
                }
                if (this.contentVisible && (C.isInFont || r.missingFile)) {
                    if (p && !P) {
                        n.fillText(I, L, D);
                    } else {
                        this.paintChar(I, L, D, g, m);
                        if (P) {
                            var H = L + i * P.offset.x / a;
                            var U = D - i * P.offset.y / a;
                            this.paintChar(P.fontChar, H, U, g, m);
                        }
                    }
                }
                var z = c ? N * v - R * l : N * v + R * l;
                S += z;
                if (T) {
                    n.restore();
                }
            }
            if (c) {
                e.y -= S;
            } else {
                e.x += S * u;
            }
            n.restore();
            this.compose();
            return undefined;
        };
        e.showType3Text = function ht(t) {
            var e = this.ctx;
            var r = this.current;
            var i = r.font;
            var n = r.fontSize;
            var a = r.fontDirection;
            var s = i.vertical ? 1 : -1;
            var o = r.charSpacing;
            var l = r.wordSpacing;
            var u = r.textHScale * a;
            var h = r.fontMatrix || j;
            var c = t.length;
            var d = r.textRenderingMode === Y.INVISIBLE;
            var f, v, p, g;
            if (d || n === 0) {
                return;
            }
            this._cachedScaleForStroking[0] = -1;
            this._cachedGetSinglePixelWidth = null;
            e.save();
            if (r.textMatrix) {
                e.transform.apply(e, r.textMatrix);
            }
            e.translate(r.x, r.y + r.textRise);
            e.scale(u, a);
            for (f = 0; f < c; ++f) {
                v = t[f];
                if (typeof v === "number") {
                    g = s * v * n / 1e3;
                    this.ctx.translate(g, 0);
                    r.x += g * u;
                    continue;
                }
                var m = (v.isSpace ? l : 0) + o;
                var y = i.charProcOperatorList[v.operatorListId];
                if (!y) {
                    st('Type3 character "' + v.operatorListId + '" is not available.');
                } else if (this.contentVisible) {
                    this.save();
                    e.scale(n, n);
                    e.transform.apply(e, h);
                    this.executeOperatorList(y);
                    this.restore();
                }
                var w = [ v.width, 0 ];
                Mt.applyTransform(w, h);
                p = w[0] * n + m;
                e.translate(p, 0);
                r.x += p * u;
            }
            e.restore();
        };
        e.setCharWidth = function ct(t, e) {};
        e.setCharWidthAndBounds = function ft(t, e, r, i, n, a) {
            var s = new Path2D;
            s.rect(r, i, n - r, a - i);
            this.ctx.clip(s);
            this.endPath();
        };
        e.getColorN_Pattern = function vt(e) {
            var r = this;
            var i;
            if (e[0] === "TilingPattern") {
                var n = this.baseTransform || se(this.ctx);
                var a = {
                    createCanvasGraphics: function(e) {
                        return new t(e, r.commonObjs, r.objs, r.canvasFactory, r.filterFactory, {
                            optionalContentConfig: r.optionalContentConfig,
                            markedContentStack: r.markedContentStack
                        });
                    }
                };
                i = new Os(e, this.ctx, a, n);
            } else {
                i = this._getPattern(e[1], e[2]);
            }
            return i;
        };
        e.setStrokeColorN = function pt() {
            this.current.strokeColor = this.getColorN_Pattern(arguments);
            this.current.patternStroke = true;
        };
        e.setFillColorN = function gt() {
            this.current.fillColor = this.getColorN_Pattern(arguments);
            this.current.patternFill = true;
        };
        e.setStrokeRGBColor = function mt(t) {
            this.ctx.strokeStyle = this.current.strokeColor = t;
            this.current.patternStroke = false;
        };
        e.setStrokeTransparent = function yt() {
            this.ctx.strokeStyle = this.current.strokeColor = "transparent";
            this.current.patternStroke = false;
        };
        e.setFillRGBColor = function wt(t) {
            this.ctx.fillStyle = this.current.fillColor = t;
            this.current.patternFill = false;
        };
        e.setFillTransparent = function bt() {
            this.ctx.fillStyle = this.current.fillColor = "transparent";
            this.current.patternFill = false;
        };
        e._getPattern = function At(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var r;
            if (this.cachedPatterns.has(t)) {
                r = this.cachedPatterns.get(t);
            } else {
                r = Ds(this.getObject(t));
                this.cachedPatterns.set(t, r);
            }
            if (e) {
                r.matrix = e;
            }
            return r;
        };
        e.shadingFill = function _t(t) {
            if (!this.contentVisible) {
                return;
            }
            var e = this.ctx;
            this.save();
            var r = this._getPattern(t);
            e.fillStyle = r.getPattern(e, this, oe(e), Ss.SHADING);
            var i = oe(e);
            if (i) {
                var {width: n, height: a} = e.canvas;
                var s = Vs.slice();
                Mt.axialAlignedBoundingBox([ 0, 0, n, a ], i, s);
                var [o, l, u, h] = s;
                this.ctx.fillRect(o, l, u - o, h - l);
            } else {
                this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
            }
            this.compose(this.current.getClippedPathBoundingBox());
            this.restore();
        };
        e.beginInlineImage = function kt() {
            ot("Should not call beginInlineImage");
        };
        e.beginImageData = function xt() {
            ot("Should not call beginImageData");
        };
        e.paintFormXObjectBegin = function Et(t, e) {
            if (!this.contentVisible) {
                return;
            }
            this.save();
            this.baseTransformStack.push(this.baseTransform);
            if (t) {
                this.transform.apply(this, t);
            }
            this.baseTransform = se(this.ctx);
            if (e) {
                Mt.axialAlignedBoundingBox(e, this.baseTransform, this.current.minMax);
                var [r, i, n, a] = e;
                var s = new Path2D;
                s.rect(r, i, n - r, a - i);
                this.ctx.clip(s);
                this.endPath();
            }
        };
        e.paintFormXObjectEnd = function St() {
            if (!this.contentVisible) {
                return;
            }
            this.restore();
            this.baseTransform = this.baseTransformStack.pop();
        };
        e.beginGroup = function Ct(t) {
            if (!this.contentVisible) {
                return;
            }
            this.save();
            if (this.inSMaskMode) {
                this.endSMaskMode();
                this.current.activeSMask = null;
            }
            var e = this.ctx;
            if (!t.isolated) {
                at("TODO: Support non-isolated groups.");
            }
            if (t.knockout) {
                st("Knockout groups not supported.");
            }
            var r = se(e);
            if (t.matrix) {
                e.transform.apply(e, t.matrix);
            }
            if (!t.bbox) {
                throw new Error("Bounding box is required.");
            }
            var i = Vs.slice();
            Mt.axialAlignedBoundingBox(t.bbox, se(e), i);
            var n = [ 0, 0, e.canvas.width, e.canvas.height ];
            i = Mt.intersect(i, n) || [ 0, 0, 0, 0 ];
            var a = Math.floor(i[0]);
            var s = Math.floor(i[1]);
            var o = Math.max(Math.ceil(i[2]) - a, 1);
            var l = Math.max(Math.ceil(i[3]) - s, 1);
            this.current.startNewPathAndClipBox([ 0, 0, o, l ]);
            var u = "groupAt" + this.groupLevel;
            if (t.smask) {
                u += "_smask_" + this.smaskCounter++ % 2;
            }
            var h = this.cachedCanvases.getCanvas(u, o, l);
            var c = h.context;
            c.translate(-a, -s);
            c.transform.apply(c, r);
            var d = new Path2D;
            var [f, v, p, g] = t.bbox;
            d.rect(f, v, p - f, g - v);
            if (t.matrix) {
                var m = new Path2D;
                m.addPath(d, new DOMMatrix(t.matrix));
                d = m;
            }
            c.clip(d);
            if (t.smask) {
                this.smaskStack.push({
                    canvas: h.canvas,
                    context: c,
                    offsetX: a,
                    offsetY: s,
                    subtype: t.smask.subtype,
                    backdrop: t.smask.backdrop,
                    transferMap: t.smask.transferMap || null,
                    startTransformInverse: null
                });
            } else {
                e.setTransform(1, 0, 0, 1, 0, 0);
                e.translate(a, s);
                e.save();
            }
            Zs(e, c);
            this.ctx = c;
            this.setGState([ [ "BM", "source-over" ], [ "ca", 1 ], [ "CA", 1 ] ]);
            this.groupStack.push(e);
            this.groupLevel++;
        };
        e.endGroup = function Tt(t) {
            if (!this.contentVisible) {
                return;
            }
            this.groupLevel--;
            var e = this.ctx;
            var r = this.groupStack.pop();
            this.ctx = r;
            this.ctx.imageSmoothingEnabled = false;
            if (t.smask) {
                this.tempSMask = this.smaskStack.pop();
                this.restore();
            } else {
                var i;
                this.ctx.restore();
                var n = se(this.ctx);
                this.restore();
                this.ctx.save();
                (i = this.ctx).setTransform.apply(i, n);
                var a = Vs.slice();
                Mt.axialAlignedBoundingBox([ 0, 0, e.canvas.width, e.canvas.height ], n, a);
                this.ctx.drawImage(e.canvas, 0, 0);
                this.ctx.restore();
                this.compose(a);
            }
        };
        e.beginAnnotation = function Rt(t, e, i, n, a) {
            r(ao, this, oo).call(this);
            $s(this.ctx);
            this.ctx.save();
            this.save();
            if (this.baseTransform) {
                var s;
                (s = this.ctx).setTransform.apply(s, this.baseTransform);
            }
            if (e) {
                var o = e[2] - e[0];
                var l = e[3] - e[1];
                if (a && this.annotationCanvasMap) {
                    i = i.slice();
                    i[4] -= e[0];
                    i[5] -= e[1];
                    e = e.slice();
                    e[0] = e[1] = 0;
                    e[2] = o;
                    e[3] = l;
                    Mt.singularValueDecompose2dScale(se(this.ctx), Gs);
                    var {viewportScale: u} = this;
                    var h = Math.ceil(o * this.outputScaleX * u);
                    var c = Math.ceil(l * this.outputScaleY * u);
                    this.annotationCanvas = this.canvasFactory.create(h, c);
                    var {canvas: d, context: f} = this.annotationCanvas;
                    this.annotationCanvasMap.set(t, d);
                    this.annotationCanvas.savedCtx = this.ctx;
                    this.ctx = f;
                    this.ctx.save();
                    this.ctx.setTransform(Gs[0], 0, 0, -Gs[1], 0, l * Gs[1]);
                    $s(this.ctx);
                } else {
                    $s(this.ctx);
                    this.endPath();
                    var v = new Path2D;
                    v.rect(e[0], e[1], o, l);
                    this.ctx.clip(v);
                }
            }
            this.current = new Ks(this.ctx.canvas.width, this.ctx.canvas.height);
            this.transform.apply(this, i);
            this.transform.apply(this, n);
        };
        e.endAnnotation = function It() {
            if (this.annotationCanvas) {
                this.ctx.restore();
                r(ao, this, lo).call(this);
                this.ctx = this.annotationCanvas.savedCtx;
                delete this.annotationCanvas.savedCtx;
                delete this.annotationCanvas;
            }
        };
        e.paintImageMaskXObject = function Pt(t) {
            if (!this.contentVisible) {
                return;
            }
            var e = t.count;
            t = this.getObject(t.data, t);
            t.count = e;
            var r = this.ctx;
            var i = this._createMaskCanvas(t);
            var n = i.canvas;
            r.save();
            r.setTransform(1, 0, 0, 1, 0, 0);
            r.drawImage(n, i.offsetX, i.offsetY);
            r.restore();
            this.compose();
        };
        e.paintImageMaskXObjectRepeat = function Lt(t, e) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var n = arguments.length > 4 ? arguments[4] : undefined;
            var a = arguments.length > 5 ? arguments[5] : undefined;
            if (!this.contentVisible) {
                return;
            }
            t = this.getObject(t.data, t);
            var s = this.ctx;
            s.save();
            var o = se(s);
            s.transform(e, r, i, n, 0, 0);
            var l = this._createMaskCanvas(t);
            s.setTransform(1, 0, 0, 1, l.offsetX - o[4], l.offsetY - o[5]);
            for (var u = 0, h = a.length; u < h; u += 2) {
                var c = Mt.transform(o, [ e, r, i, n, a[u], a[u + 1] ]);
                s.drawImage(l.canvas, c[4], c[5]);
            }
            s.restore();
            this.compose();
        };
        e.paintImageMaskXObjectGroup = function Dt(t) {
            if (!this.contentVisible) {
                return;
            }
            var e = this.ctx;
            var r = this.current.fillColor;
            var i = this.current.patternFill;
            for (var n of t) {
                var {data: a, width: s, height: o, transform: l} = n;
                var u = this.cachedCanvases.getCanvas("maskCanvas", s, o);
                var h = u.context;
                h.save();
                var c = this.getObject(a, n);
                Js(h, c);
                h.globalCompositeOperation = "source-in";
                h.fillStyle = i ? r.getPattern(h, this, oe(e), Ss.FILL) : r;
                h.fillRect(0, 0, s, o);
                h.restore();
                e.save();
                e.transform.apply(e, l);
                e.scale(1, -1);
                Ys(e, u.canvas, 0, 0, s, o, 0, -1, 1, 1);
                e.restore();
            }
            this.compose();
        };
        e.paintImageXObject = function Nt(t) {
            if (!this.contentVisible) {
                return;
            }
            var e = this.getObject(t);
            if (!e) {
                st("Dependent image isn't ready yet");
                return;
            }
            this.paintInlineImageXObject(e);
        };
        e.paintImageXObjectRepeat = function Ot(t, e, r, i) {
            if (!this.contentVisible) {
                return;
            }
            var n = this.getObject(t);
            if (!n) {
                st("Dependent image isn't ready yet");
                return;
            }
            var a = n.width;
            var s = n.height;
            var o = [];
            for (var l = 0, u = i.length; l < u; l += 2) {
                o.push({
                    transform: [ e, 0, 0, r, i[l], i[l + 1] ],
                    x: 0,
                    y: 0,
                    w: a,
                    h: s
                });
            }
            this.paintInlineImageXObjectGroup(n, o);
        };
        e.applyTransferMapsToCanvas = function Ft(t) {
            if (this.current.transferMaps !== "none") {
                t.filter = this.current.transferMaps;
                t.drawImage(t.canvas, 0, 0);
                t.filter = "none";
            }
            return t.canvas;
        };
        e.applyTransferMapsToBitmap = function Wt(t) {
            if (this.current.transferMaps === "none") {
                return t.bitmap;
            }
            var {bitmap: e, width: r, height: i} = t;
            var n = this.cachedCanvases.getCanvas("inlineImage", r, i);
            var a = n.context;
            a.filter = this.current.transferMaps;
            a.drawImage(e, 0, 0);
            a.filter = "none";
            return n.canvas;
        };
        e.paintInlineImageXObject = function Bt(t) {
            if (!this.contentVisible) {
                return;
            }
            var e = t.width;
            var r = t.height;
            var i = this.ctx;
            this.save();
            var {filter: n} = i;
            if (n !== "none" && n !== "") {
                i.filter = "none";
            }
            i.scale(1 / e, -1 / r);
            var a;
            if (t.bitmap) {
                a = this.applyTransferMapsToBitmap(t);
            } else if (typeof HTMLElement === "function" && t instanceof HTMLElement || !t.data) {
                a = t;
            } else {
                var s = this.cachedCanvases.getCanvas("inlineImage", e, r);
                var o = s.context;
                Qs(o, t);
                a = this.applyTransferMapsToCanvas(o);
            }
            var l = this._scaleImage(a, oe(i));
            i.imageSmoothingEnabled = to(se(i), t.interpolate);
            Ys(i, l.img, 0, 0, l.paintWidth, l.paintHeight, 0, -r, e, r);
            this.compose();
            this.restore();
        };
        e.paintInlineImageXObjectGroup = function jt(t, e) {
            if (!this.contentVisible) {
                return;
            }
            var r = this.ctx;
            var i;
            if (t.bitmap) {
                i = t.bitmap;
            } else {
                var n = t.width;
                var a = t.height;
                var s = this.cachedCanvases.getCanvas("inlineImage", n, a);
                var o = s.context;
                Qs(o, t);
                i = this.applyTransferMapsToCanvas(o);
            }
            for (var l of e) {
                r.save();
                r.transform.apply(r, l.transform);
                r.scale(1, -1);
                Ys(r, i, l.x, l.y, l.w, l.h, 0, -1, 1, 1);
                r.restore();
            }
            this.compose();
        };
        e.paintSolidColorImageMask = function Ht() {
            if (!this.contentVisible) {
                return;
            }
            this.ctx.fillRect(0, 0, 1, 1);
            this.compose();
        };
        e.markPoint = function Ut(t) {};
        e.markPointProps = function zt(t, e) {};
        e.beginMarkedContent = function Gt(t) {
            this.markedContentStack.push({
                visible: true
            });
        };
        e.beginMarkedContentProps = function Vt(t, e) {
            if (t === "OC") {
                this.markedContentStack.push({
                    visible: this.optionalContentConfig.isVisible(e)
                });
            } else {
                this.markedContentStack.push({
                    visible: true
                });
            }
            this.contentVisible = this.isContentVisible();
        };
        e.endMarkedContent = function qt() {
            this.markedContentStack.pop();
            this.contentVisible = this.isContentVisible();
        };
        e.beginCompat = function Xt() {};
        e.endCompat = function Yt() {};
        e.consumePath = function Kt(t, e) {
            var r = this.current.isEmptyClip();
            if (this.pendingClip) {
                this.current.updateClipFromPath();
            }
            if (!this.pendingClip) {
                this.compose(e);
            }
            var i = this.ctx;
            if (this.pendingClip) {
                if (!r) {
                    if (this.pendingClip === no) {
                        i.clip(t, "evenodd");
                    } else {
                        i.clip(t);
                    }
                }
                this.pendingClip = null;
            }
            this.current.startNewPathAndClipBox(this.current.clipBox);
        };
        e.getSinglePixelWidth = function Qt() {
            if (!this._cachedGetSinglePixelWidth) {
                var t = se(this.ctx);
                if (t[1] === 0 && t[2] === 0) {
                    this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
                } else {
                    var e = Math.abs(t[0] * t[3] - t[2] * t[1]);
                    var r = Math.hypot(t[0], t[2]);
                    var i = Math.hypot(t[1], t[3]);
                    this._cachedGetSinglePixelWidth = Math.max(r, i) / e;
                }
            }
            return this._cachedGetSinglePixelWidth;
        };
        e.getScaleForStroking = function Jt() {
            if (this._cachedScaleForStroking[0] === -1) {
                var {lineWidth: t} = this.current;
                var {a: e, b: r, c: i, d: n} = this.ctx.getTransform();
                var a, s;
                if (r === 0 && i === 0) {
                    var o = Math.abs(e);
                    var l = Math.abs(n);
                    if (o === l) {
                        if (t === 0) {
                            a = s = 1 / o;
                        } else {
                            var u = o * t;
                            a = s = u < 1 ? 1 / u : 1;
                        }
                    } else if (t === 0) {
                        a = 1 / o;
                        s = 1 / l;
                    } else {
                        var h = o * t;
                        var c = l * t;
                        a = h < 1 ? 1 / h : 1;
                        s = c < 1 ? 1 / c : 1;
                    }
                } else {
                    var d = Math.abs(e * n - r * i);
                    var f = Math.hypot(e, r);
                    var v = Math.hypot(i, n);
                    if (t === 0) {
                        a = v / d;
                        s = f / d;
                    } else {
                        var p = t * d;
                        a = v > p ? v / p : 1;
                        s = f > p ? f / p : 1;
                    }
                }
                this._cachedScaleForStroking[0] = a;
                this._cachedScaleForStroking[1] = s;
            }
            return this._cachedScaleForStroking;
        };
        e.rescaleAndStroke = function Zt(t, e) {
            var {ctx: r, current: {lineWidth: i}} = this;
            var [n, a] = this.getScaleForStroking();
            if (n === a) {
                r.lineWidth = (i || 1) * n;
                r.stroke(t);
                return;
            }
            var s = r.getLineDash();
            if (e) {
                r.save();
            }
            r.scale(n, a);
            zs.a = 1 / n;
            zs.d = 1 / a;
            var o = new Path2D;
            o.addPath(t, zs);
            if (s.length > 0) {
                var l = Math.max(n, a);
                r.setLineDash(s.map((function(t) {
                    return t / l;
                })));
                r.lineDashOffset /= l;
            }
            r.lineWidth = i || 1;
            r.stroke(o);
            if (e) {
                r.restore();
            }
        };
        e.isContentVisible = function $t() {
            for (var t = this.markedContentStack.length - 1; t >= 0; t--) {
                if (!this.markedContentStack[t].visible) {
                    return false;
                }
            }
            return true;
        };
        return v(t, [ {
            key: "inSMaskMode",
            get: function() {
                return !!this.suspendedCtx;
            }
        }, {
            key: "isFontSubpixelAAEnabled",
            get: function() {
                var {context: t} = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
                t.scale(1.5, 1);
                t.fillText("I", 0, 10);
                var e = t.getImageData(0, 0, 10, 10).data;
                var r = false;
                for (var i = 3; i < e.length; i += 4) {
                    if (e[i] > 0 && e[i] < 255) {
                        r = true;
                        break;
                    }
                }
                return dt(this, "isFontSubpixelAAEnabled", r);
            }
        } ]);
    }();
    function oo() {
        while (this.stateStack.length || this.inSMaskMode) {
            this.restore();
        }
        this.current.activeSMask = null;
        this.ctx.restore();
        if (this.transparentCanvas) {
            this.ctx = this.compositeCtx;
            this.ctx.save();
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.drawImage(this.transparentCanvas, 0, 0);
            this.ctx.restore();
            this.transparentCanvas = null;
        }
    }
    function lo() {
        if (this.pageColors) {
            var t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
            if (t !== "none") {
                var e = this.ctx.filter;
                this.ctx.filter = t;
                this.ctx.drawImage(this.ctx.canvas, 0, 0);
                this.ctx.filter = e;
            }
        }
    }
    function uo(t, e, r) {
        var i = new Path2D;
        i.addPath(t, new DOMMatrix(r).invertSelf().multiplySelf(e));
        return i;
    }
    for (var ho in $) {
        if (so.prototype[ho] !== undefined) {
            so.prototype[$[ho]] = so.prototype[ho];
        }
    }
    var co = function() {
        function t() {}
        return v(t, null, [ {
            key: "workerPort",
            get: function() {
                return r(t, this, fo)._;
            },
            set: function(e) {
                if (!(typeof Worker !== "undefined" && e instanceof Worker) && e !== null) {
                    throw new Error("Invalid `workerPort` type.");
                }
                fo._ = r(t, this, e);
            }
        }, {
            key: "workerSrc",
            get: function() {
                return r(t, this, vo)._;
            },
            set: function(e) {
                if (typeof e !== "string") {
                    throw new Error("Invalid `workerSrc` type.");
                }
                vo._ = r(t, this, e);
            }
        } ]);
    }();
    var fo = {
        _: null
    };
    var vo = {
        _: ""
    };
    var po = new WeakMap;
    var go = new WeakMap;
    var mo = function() {
        function t(t) {
            var {parsedData: e, rawData: r} = t;
            u(this, po, void 0);
            u(this, go, void 0);
            h(po, this, e);
            h(go, this, r);
        }
        var e = t.prototype;
        e.getRaw = function r() {
            return l(go, this);
        };
        e.get = function i(t) {
            var e;
            return (e = l(po, this).get(t)) !== null && e !== void 0 ? e : null;
        };
        e[Symbol.iterator] = function() {
            return l(po, this).entries();
        };
        return t;
    }();
    var yo = Symbol("INTERNAL");
    var wo = new WeakMap;
    var bo = new WeakMap;
    var Ao = new WeakMap;
    var _o = new WeakMap;
    var ko = function() {
        function t(t, e) {
            var {name: r, intent: i, usage: n, rbGroups: a} = e;
            u(this, wo, false);
            u(this, bo, false);
            u(this, Ao, false);
            u(this, _o, true);
            h(wo, this, !!(t & U.DISPLAY));
            h(bo, this, !!(t & U.PRINT));
            this.name = r;
            this.intent = i;
            this.usage = n;
            this.rbGroups = a;
        }
        var e = t.prototype;
        e._setVisible = function r(t, e) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            if (t !== yo) {
                ot("Internal method `_setVisible` called.");
            }
            h(Ao, this, r);
            h(_o, this, e);
        };
        return v(t, [ {
            key: "visible",
            get: function() {
                if (l(Ao, this)) {
                    return l(_o, this);
                }
                if (!l(_o, this)) {
                    return false;
                }
                var {print: t, view: e} = this.usage;
                if (l(wo, this)) {
                    return (e === null || e === void 0 ? void 0 : e.viewState) !== "OFF";
                } else if (l(bo, this)) {
                    return (t === null || t === void 0 ? void 0 : t.printState) !== "OFF";
                }
                return true;
            }
        } ]);
    }();
    var xo = new WeakMap;
    var Eo = new WeakMap;
    var So = new WeakMap;
    var Mo = new WeakMap;
    var Co = new WeakSet;
    var To = function() {
        function t(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : U.DISPLAY;
            d(this, Co);
            u(this, xo, null);
            u(this, Eo, new Map);
            u(this, So, null);
            u(this, Mo, null);
            this.renderingIntent = e;
            this.name = null;
            this.creator = null;
            if (t === null) {
                return;
            }
            this.name = t.name;
            this.creator = t.creator;
            h(Mo, this, t.order);
            for (var r of t.groups) {
                l(Eo, this).set(r.id, new ko(e, r));
            }
            if (t.baseState === "OFF") {
                for (var i of l(Eo, this).values()) {
                    i._setVisible(yo, false);
                }
            }
            for (var n of t.on) {
                l(Eo, this).get(n)._setVisible(yo, true);
            }
            for (var a of t.off) {
                l(Eo, this).get(a)._setVisible(yo, false);
            }
            h(So, this, this.getHash());
        }
        var e = t.prototype;
        e.isVisible = function i(t) {
            if (l(Eo, this).size === 0) {
                return true;
            }
            if (!t) {
                at("Optional content group not defined.");
                return true;
            }
            if (t.type === "OCG") {
                if (!l(Eo, this).has(t.id)) {
                    st("Optional content group not found: " + t.id);
                    return true;
                }
                return l(Eo, this).get(t.id).visible;
            } else if (t.type === "OCMD") {
                if (t.expression) {
                    return r(Co, this, Ro).call(this, t.expression);
                }
                if (!t.policy || t.policy === "AnyOn") {
                    for (var e of t.ids) {
                        if (!l(Eo, this).has(e)) {
                            st("Optional content group not found: " + e);
                            return true;
                        }
                        if (l(Eo, this).get(e).visible) {
                            return true;
                        }
                    }
                    return false;
                } else if (t.policy === "AllOn") {
                    for (var i of t.ids) {
                        if (!l(Eo, this).has(i)) {
                            st("Optional content group not found: " + i);
                            return true;
                        }
                        if (!l(Eo, this).get(i).visible) {
                            return false;
                        }
                    }
                    return true;
                } else if (t.policy === "AnyOff") {
                    for (var n of t.ids) {
                        if (!l(Eo, this).has(n)) {
                            st("Optional content group not found: " + n);
                            return true;
                        }
                        if (!l(Eo, this).get(n).visible) {
                            return true;
                        }
                    }
                    return false;
                } else if (t.policy === "AllOff") {
                    for (var a of t.ids) {
                        if (!l(Eo, this).has(a)) {
                            st("Optional content group not found: " + a);
                            return true;
                        }
                        if (l(Eo, this).get(a).visible) {
                            return false;
                        }
                    }
                    return true;
                }
                st("Unknown optional content policy " + t.policy + ".");
                return true;
            }
            st("Unknown group type " + t.type + ".");
            return true;
        };
        e.setVisibility = function n(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var i = l(Eo, this).get(t);
            if (!i) {
                st("Optional content group not found: " + t);
                return;
            }
            if (r && e && i.rbGroups.length) {
                for (var n of i.rbGroups) {
                    for (var a of n) {
                        if (a !== t) {
                            var s;
                            (s = l(Eo, this).get(a)) === null || s === void 0 ? void 0 : s._setVisible(yo, false, true);
                        }
                    }
                }
            }
            i._setVisible(yo, !!e, true);
            h(xo, this, null);
        };
        e.setOCGState = function a(t) {
            var {state: e, preserveRB: r} = t;
            var i;
            for (var n of e) {
                switch (n) {
                  case "ON":
                  case "OFF":
                  case "Toggle":
                    i = n;
                    continue;
                }
                var a = l(Eo, this).get(n);
                if (!a) {
                    continue;
                }
                switch (i) {
                  case "ON":
                    this.setVisibility(n, true, r);
                    break;

                  case "OFF":
                    this.setVisibility(n, false, r);
                    break;

                  case "Toggle":
                    this.setVisibility(n, !a.visible, r);
                    break;
                }
            }
            h(xo, this, null);
        };
        e.getOrder = function s() {
            if (!l(Eo, this).size) {
                return null;
            }
            if (l(Mo, this)) {
                return l(Mo, this).slice();
            }
            return [].concat(l(Eo, this).keys());
        };
        e.getGroup = function o(t) {
            return l(Eo, this).get(t) || null;
        };
        e.getHash = function c() {
            if (l(xo, this) !== null) {
                return l(xo, this);
            }
            var t = new ra;
            for (var [e, r] of l(Eo, this)) {
                t.update(e + ":" + r.visible);
            }
            return h(xo, this, t.hexdigest());
        };
        e[Symbol.iterator] = function() {
            return l(Eo, this).entries();
        };
        return v(t, [ {
            key: "hasInitialVisibility",
            get: function() {
                return l(So, this) === null || this.getHash() === l(So, this);
            }
        } ]);
    }();
    function Ro(t) {
        var e = t.length;
        if (e < 2) {
            return true;
        }
        var i = t[0];
        for (var n = 1; n < e; n++) {
            var a = t[n];
            var s = void 0;
            if (Array.isArray(a)) {
                s = r(Co, this, Ro).call(this, a);
            } else if (l(Eo, this).has(a)) {
                s = l(Eo, this).get(a).visible;
            } else {
                st("Optional content group not found: " + a);
                return true;
            }
            switch (i) {
              case "And":
                if (!s) {
                    return false;
                }
                break;

              case "Or":
                if (s) {
                    return true;
                }
                break;

              case "Not":
                return !s;

              default:
                return true;
            }
        }
        return i === "And";
    }
    var Io = function() {
        function t(t, e) {
            var r = this;
            var {disableRange: i = false, disableStream: n = false} = e;
            lt(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
            var {length: a, initialData: s, progressiveDone: o, contentDispositionFilename: l} = t;
            this._queuedChunks = [];
            this._progressiveDone = o;
            this._contentDispositionFilename = l;
            if ((s === null || s === void 0 ? void 0 : s.length) > 0) {
                var u = s instanceof Uint8Array && s.byteLength === s.buffer.byteLength ? s.buffer : new Uint8Array(s).buffer;
                this._queuedChunks.push(u);
            }
            this._pdfDataRangeTransport = t;
            this._isStreamingSupported = !n;
            this._isRangeSupported = !i;
            this._contentLength = a;
            this._fullRequestReader = null;
            this._rangeReaders = [];
            t.addRangeListener((function(t, e) {
                r._onReceiveData({
                    begin: t,
                    chunk: e
                });
            }));
            t.addProgressListener((function(t, e) {
                r._onProgress({
                    loaded: t,
                    total: e
                });
            }));
            t.addProgressiveReadListener((function(t) {
                r._onReceiveData({
                    chunk: t
                });
            }));
            t.addProgressiveDoneListener((function() {
                r._onProgressiveDone();
            }));
            t.transportReady();
        }
        var e = t.prototype;
        e._onReceiveData = function r(t) {
            var {begin: e, chunk: r} = t;
            var i = r instanceof Uint8Array && r.byteLength === r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
            if (e === undefined) {
                if (this._fullRequestReader) {
                    this._fullRequestReader._enqueue(i);
                } else {
                    this._queuedChunks.push(i);
                }
            } else {
                var n = this._rangeReaders.some((function(t) {
                    if (t._begin !== e) {
                        return false;
                    }
                    t._enqueue(i);
                    return true;
                }));
                lt(n, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
            }
        };
        e._onProgress = function i(t) {
            if (t.total === undefined) {
                var e, r;
                (e = this._rangeReaders[0]) === null || e === void 0 ? void 0 : (r = e.onProgress) === null || r === void 0 ? void 0 : r.call(e, {
                    loaded: t.loaded
                });
            } else {
                var i, n;
                (i = this._fullRequestReader) === null || i === void 0 ? void 0 : (n = i.onProgress) === null || n === void 0 ? void 0 : n.call(i, {
                    loaded: t.loaded,
                    total: t.total
                });
            }
        };
        e._onProgressiveDone = function n() {
            var t;
            (t = this._fullRequestReader) === null || t === void 0 ? void 0 : t.progressiveDone();
            this._progressiveDone = true;
        };
        e._removeRangeReader = function a(t) {
            var e = this._rangeReaders.indexOf(t);
            if (e >= 0) {
                this._rangeReaders.splice(e, 1);
            }
        };
        e.getFullReader = function s() {
            lt(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
            var t = this._queuedChunks;
            this._queuedChunks = null;
            return new Po(this, t, this._progressiveDone, this._contentDispositionFilename);
        };
        e.getRangeReader = function o(t, e) {
            if (e <= this._progressiveDataLength) {
                return null;
            }
            var r = new Lo(this, t, e);
            this._pdfDataRangeTransport.requestDataRange(t, e);
            this._rangeReaders.push(r);
            return r;
        };
        e.cancelAllRequests = function l(t) {
            var e;
            (e = this._fullRequestReader) === null || e === void 0 ? void 0 : e.cancel(t);
            for (var r of this._rangeReaders.slice(0)) {
                r.cancel(t);
            }
            this._pdfDataRangeTransport.abort();
        };
        return v(t, [ {
            key: "_progressiveDataLength",
            get: function() {
                var t, e;
                return (t = (e = this._fullRequestReader) === null || e === void 0 ? void 0 : e._loaded) !== null && t !== void 0 ? t : 0;
            }
        } ]);
    }();
    var Po = function() {
        function t(t, e) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            this._stream = t;
            this._done = r || false;
            this._filename = Xt(i) ? i : null;
            this._queuedChunks = e || [];
            this._loaded = 0;
            for (var n of this._queuedChunks) {
                this._loaded += n.byteLength;
            }
            this._requests = [];
            this._headersReady = Promise.resolve();
            t._fullRequestReader = this;
            this.onProgress = null;
        }
        var e = t.prototype;
        e._enqueue = function r(t) {
            if (this._done) {
                return;
            }
            if (this._requests.length > 0) {
                var e = this._requests.shift();
                e.resolve({
                    value: t,
                    done: false
                });
            } else {
                this._queuedChunks.push(t);
            }
            this._loaded += t.byteLength;
        };
        e.read = function() {
            var t = s((function*() {
                if (this._queuedChunks.length > 0) {
                    var t = this._queuedChunks.shift();
                    return {
                        value: t,
                        done: false
                    };
                }
                if (this._done) {
                    return {
                        value: undefined,
                        done: true
                    };
                }
                var e = Promise.withResolvers();
                this._requests.push(e);
                return e.promise;
            }));
            function e() {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.cancel = function i(t) {
            this._done = true;
            for (var e of this._requests) {
                e.resolve({
                    value: undefined,
                    done: true
                });
            }
            this._requests.length = 0;
        };
        e.progressiveDone = function n() {
            if (this._done) {
                return;
            }
            this._done = true;
        };
        return v(t, [ {
            key: "headersReady",
            get: function() {
                return this._headersReady;
            }
        }, {
            key: "filename",
            get: function() {
                return this._filename;
            }
        }, {
            key: "isRangeSupported",
            get: function() {
                return this._stream._isRangeSupported;
            }
        }, {
            key: "isStreamingSupported",
            get: function() {
                return this._stream._isStreamingSupported;
            }
        }, {
            key: "contentLength",
            get: function() {
                return this._stream._contentLength;
            }
        } ]);
    }();
    var Lo = function() {
        function t(t, e, r) {
            this._stream = t;
            this._begin = e;
            this._end = r;
            this._queuedChunk = null;
            this._requests = [];
            this._done = false;
            this.onProgress = null;
        }
        var e = t.prototype;
        e._enqueue = function r(t) {
            if (this._done) {
                return;
            }
            if (this._requests.length === 0) {
                this._queuedChunk = t;
            } else {
                var e = this._requests.shift();
                e.resolve({
                    value: t,
                    done: false
                });
                for (var r of this._requests) {
                    r.resolve({
                        value: undefined,
                        done: true
                    });
                }
                this._requests.length = 0;
            }
            this._done = true;
            this._stream._removeRangeReader(this);
        };
        e.read = function() {
            var t = s((function*() {
                if (this._queuedChunk) {
                    var t = this._queuedChunk;
                    this._queuedChunk = null;
                    return {
                        value: t,
                        done: false
                    };
                }
                if (this._done) {
                    return {
                        value: undefined,
                        done: true
                    };
                }
                var e = Promise.withResolvers();
                this._requests.push(e);
                return e.promise;
            }));
            function e() {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.cancel = function i(t) {
            this._done = true;
            for (var e of this._requests) {
                e.resolve({
                    value: undefined,
                    done: true
                });
            }
            this._requests.length = 0;
            this._stream._removeRangeReader(this);
        };
        return v(t, [ {
            key: "isStreamingSupported",
            get: function() {
                return false;
            }
        } ]);
    }();
    function Do(t) {
        var e = true;
        var r = s("filename\\*", "i").exec(t);
        if (r) {
            r = r[1];
            var i = h(r);
            i = unescape(i);
            i = c(i);
            i = d(i);
            return l(i);
        }
        r = u(t);
        if (r) {
            var n = d(r);
            return l(n);
        }
        r = s("filename", "i").exec(t);
        if (r) {
            r = r[1];
            var a = h(r);
            a = d(a);
            return l(a);
        }
        function s(t, e) {
            return new RegExp("(?:^|;)\\s*" + t + "\\s*=\\s*" + "(" + '[^";\\s][^;\\s]*' + "|" + '"(?:[^"\\\\]|\\\\"?)+"?' + ")", e);
        }
        function o(t, r) {
            if (t) {
                if (!/^[\x00-\xFF]+$/.test(r)) {
                    return r;
                }
                try {
                    var i = new TextDecoder(t, {
                        fatal: true
                    });
                    var n = At(r);
                    r = i.decode(n);
                    e = false;
                } catch {}
            }
            return r;
        }
        function l(t) {
            if (e && /[\x80-\xff]/.test(t)) {
                t = o("utf-8", t);
                if (e) {
                    t = o("iso-8859-1", t);
                }
            }
            return t;
        }
        function u(t) {
            var e = [];
            var r;
            var i = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
            while ((r = i.exec(t)) !== null) {
                var [, n, a, o] = r;
                n = parseInt(n, 10);
                if (n in e) {
                    if (n === 0) {
                        break;
                    }
                    continue;
                }
                e[n] = [ a, o ];
            }
            var l = [];
            for (var u = 0; u < e.length; ++u) {
                if (!(u in e)) {
                    break;
                }
                var [d, f] = e[u];
                f = h(f);
                if (d) {
                    f = unescape(f);
                    if (u === 0) {
                        f = c(f);
                    }
                }
                l.push(f);
            }
            return l.join("");
        }
        function h(t) {
            if (t.startsWith('"')) {
                var e = t.slice(1).split('\\"');
                for (var r = 0; r < e.length; ++r) {
                    var i = e[r].indexOf('"');
                    if (i !== -1) {
                        e[r] = e[r].slice(0, i);
                        e.length = r + 1;
                    }
                    e[r] = e[r].replaceAll(/\\(.)/g, "$1");
                }
                t = e.join('"');
            }
            return t;
        }
        function c(t) {
            var e = t.indexOf("'");
            if (e === -1) {
                return t;
            }
            var r = t.slice(0, e);
            var i = t.slice(e + 1);
            var n = i.replace(/^[^']*'/, "");
            return o(r, n);
        }
        function d(t) {
            if (!t.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(t)) {
                return t;
            }
            return t.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, (function(t, e, r, i) {
                if (r === "q" || r === "Q") {
                    i = i.replaceAll("_", " ");
                    i = i.replaceAll(/=([0-9a-fA-F]{2})/g, (function(t, e) {
                        return String.fromCharCode(parseInt(e, 16));
                    }));
                    return o(e, i);
                }
                try {
                    i = atob(i);
                } catch {}
                return o(e, i);
            }));
        }
        return "";
    }
    function No(t, e) {
        var r = new Headers;
        if (!t || !e || typeof e !== "object") {
            return r;
        }
        for (var i in e) {
            var n = e[i];
            if (n !== undefined) {
                r.append(i, n);
            }
        }
        return r;
    }
    function Oo(t) {
        var e, r;
        return (e = (r = URL.parse(t)) === null || r === void 0 ? void 0 : r.origin) !== null && e !== void 0 ? e : null;
    }
    function Fo(t) {
        var {responseHeaders: e, isHttp: r, rangeChunkSize: i, disableRange: n} = t;
        var a = {
            allowRangeRequests: false,
            suggestedLength: undefined
        };
        var s = parseInt(e.get("Content-Length"), 10);
        if (!Number.isInteger(s)) {
            return a;
        }
        a.suggestedLength = s;
        if (s <= 2 * i) {
            return a;
        }
        if (n || !r) {
            return a;
        }
        if (e.get("Accept-Ranges") !== "bytes") {
            return a;
        }
        var o = e.get("Content-Encoding") || "identity";
        if (o !== "identity") {
            return a;
        }
        a.allowRangeRequests = true;
        return a;
    }
    function Wo(t) {
        var e = t.get("Content-Disposition");
        if (e) {
            var r = Do(e);
            if (r.includes("%")) {
                try {
                    r = decodeURIComponent(r);
                } catch {}
            }
            if (Xt(r)) {
                return r;
            }
        }
        return null;
    }
    function Bo(t, e) {
        return new mt("Unexpected server response (" + t + ') while retrieving PDF "' + e + '".', t, t === 404 || t === 0 && e.startsWith("file:"));
    }
    function jo(t) {
        return t === 200 || t === 206;
    }
    function Ho(t, e, r) {
        return {
            method: "GET",
            headers: t,
            signal: r.signal,
            mode: "cors",
            credentials: e ? "include" : "same-origin",
            redirect: "follow"
        };
    }
    function Uo(t) {
        if (t instanceof Uint8Array) {
            return t.buffer;
        }
        if (t instanceof ArrayBuffer) {
            return t;
        }
        st("getArrayBuffer - unexpected data format: " + t);
        return new Uint8Array(t).buffer;
    }
    var zo = function() {
        function t(t) {
            p(this, "_responseOrigin", null);
            this.source = t;
            this.isHttp = /^https?:/i.test(t.url);
            this.headers = No(this.isHttp, t.httpHeaders);
            this._fullRequestReader = null;
            this._rangeRequestReaders = [];
        }
        var e = t.prototype;
        e.getFullReader = function r() {
            lt(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once.");
            this._fullRequestReader = new Go(this);
            return this._fullRequestReader;
        };
        e.getRangeReader = function i(t, e) {
            if (e <= this._progressiveDataLength) {
                return null;
            }
            var r = new Vo(this, t, e);
            this._rangeRequestReaders.push(r);
            return r;
        };
        e.cancelAllRequests = function n(t) {
            var e;
            (e = this._fullRequestReader) === null || e === void 0 ? void 0 : e.cancel(t);
            for (var r of this._rangeRequestReaders.slice(0)) {
                r.cancel(t);
            }
        };
        return v(t, [ {
            key: "_progressiveDataLength",
            get: function() {
                var t, e;
                return (t = (e = this._fullRequestReader) === null || e === void 0 ? void 0 : e._loaded) !== null && t !== void 0 ? t : 0;
            }
        } ]);
    }();
    var Go = function() {
        function t(t) {
            var e = this;
            this._stream = t;
            this._reader = null;
            this._loaded = 0;
            this._filename = null;
            var r = t.source;
            this._withCredentials = r.withCredentials || false;
            this._contentLength = r.length;
            this._headersCapability = Promise.withResolvers();
            this._disableRange = r.disableRange || false;
            this._rangeChunkSize = r.rangeChunkSize;
            if (!this._rangeChunkSize && !this._disableRange) {
                this._disableRange = true;
            }
            this._abortController = new AbortController;
            this._isStreamingSupported = !r.disableStream;
            this._isRangeSupported = !r.disableRange;
            var i = new Headers(t.headers);
            var n = r.url;
            fetch(n, Ho(i, this._withCredentials, this._abortController)).then((function(r) {
                t._responseOrigin = Oo(r.url);
                if (!jo(r.status)) {
                    throw Bo(r.status, n);
                }
                e._reader = r.body.getReader();
                e._headersCapability.resolve();
                var i = r.headers;
                var {allowRangeRequests: a, suggestedLength: s} = Fo({
                    responseHeaders: i,
                    isHttp: t.isHttp,
                    rangeChunkSize: e._rangeChunkSize,
                    disableRange: e._disableRange
                });
                e._isRangeSupported = a;
                e._contentLength = s || e._contentLength;
                e._filename = Wo(i);
                if (!e._isStreamingSupported && e._isRangeSupported) {
                    e.cancel(new wt("Streaming is disabled."));
                }
            }))["catch"](this._headersCapability.reject);
            this.onProgress = null;
        }
        var e = t.prototype;
        e.read = function() {
            var t = s((function*() {
                var t;
                yield this._headersCapability.promise;
                var {value: e, done: r} = yield this._reader.read();
                if (r) {
                    return {
                        value: e,
                        done: r
                    };
                }
                this._loaded += e.byteLength;
                (t = this.onProgress) === null || t === void 0 ? void 0 : t.call(this, {
                    loaded: this._loaded,
                    total: this._contentLength
                });
                return {
                    value: Uo(e),
                    done: false
                };
            }));
            function e() {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.cancel = function r(t) {
            var e;
            (e = this._reader) === null || e === void 0 ? void 0 : e.cancel(t);
            this._abortController.abort();
        };
        return v(t, [ {
            key: "headersReady",
            get: function() {
                return this._headersCapability.promise;
            }
        }, {
            key: "filename",
            get: function() {
                return this._filename;
            }
        }, {
            key: "contentLength",
            get: function() {
                return this._contentLength;
            }
        }, {
            key: "isRangeSupported",
            get: function() {
                return this._isRangeSupported;
            }
        }, {
            key: "isStreamingSupported",
            get: function() {
                return this._isStreamingSupported;
            }
        } ]);
    }();
    var Vo = function() {
        function t(t, e, r) {
            var i = this;
            this._stream = t;
            this._reader = null;
            this._loaded = 0;
            var n = t.source;
            this._withCredentials = n.withCredentials || false;
            this._readCapability = Promise.withResolvers();
            this._isStreamingSupported = !n.disableStream;
            this._abortController = new AbortController;
            var a = new Headers(t.headers);
            a.append("Range", "bytes=" + e + "-" + (r - 1));
            var s = n.url;
            fetch(s, Ho(a, this._withCredentials, this._abortController)).then((function(e) {
                var r = Oo(e.url);
                if (r !== t._responseOrigin) {
                    throw new Error('Expected range response-origin "' + r + '" to match "' + t._responseOrigin + '".');
                }
                if (!jo(e.status)) {
                    throw Bo(e.status, s);
                }
                i._readCapability.resolve();
                i._reader = e.body.getReader();
            }))["catch"](this._readCapability.reject);
            this.onProgress = null;
        }
        var e = t.prototype;
        e.read = function() {
            var t = s((function*() {
                var t;
                yield this._readCapability.promise;
                var {value: e, done: r} = yield this._reader.read();
                if (r) {
                    return {
                        value: e,
                        done: r
                    };
                }
                this._loaded += e.byteLength;
                (t = this.onProgress) === null || t === void 0 ? void 0 : t.call(this, {
                    loaded: this._loaded
                });
                return {
                    value: Uo(e),
                    done: false
                };
            }));
            function e() {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.cancel = function r(t) {
            var e;
            (e = this._reader) === null || e === void 0 ? void 0 : e.cancel(t);
            this._abortController.abort();
        };
        return v(t, [ {
            key: "isStreamingSupported",
            get: function() {
                return this._isStreamingSupported;
            }
        } ]);
    }();
    var qo = 200;
    var Xo = 206;
    function Yo(t) {
        var e = t.response;
        if (typeof e !== "string") {
            return e;
        }
        return At(e).buffer;
    }
    var Ko = function() {
        function t(t) {
            var {url: e, httpHeaders: r, withCredentials: i} = t;
            p(this, "_responseOrigin", null);
            this.url = e;
            this.isHttp = /^https?:/i.test(e);
            this.headers = No(this.isHttp, r);
            this.withCredentials = i || false;
            this.currXhrId = 0;
            this.pendingRequests = Object.create(null);
        }
        var e = t.prototype;
        e.request = function r(t) {
            var e = new XMLHttpRequest;
            var r = this.currXhrId++;
            var i = this.pendingRequests[r] = {
                xhr: e
            };
            e.open("GET", this.url);
            e.withCredentials = this.withCredentials;
            for (var [n, a] of this.headers) {
                e.setRequestHeader(n, a);
            }
            if (this.isHttp && "begin" in t && "end" in t) {
                e.setRequestHeader("Range", "bytes=" + t.begin + "-" + (t.end - 1));
                i.expectedStatus = Xo;
            } else {
                i.expectedStatus = qo;
            }
            e.responseType = "arraybuffer";
            lt(t.onError, "Expected `onError` callback to be provided.");
            e.onerror = function() {
                t.onError(e.status);
            };
            e.onreadystatechange = this.onStateChange.bind(this, r);
            e.onprogress = this.onProgress.bind(this, r);
            i.onHeadersReceived = t.onHeadersReceived;
            i.onDone = t.onDone;
            i.onError = t.onError;
            i.onProgress = t.onProgress;
            e.send(null);
            return r;
        };
        e.onProgress = function i(t, e) {
            var r;
            var i = this.pendingRequests[t];
            if (!i) {
                return;
            }
            (r = i.onProgress) === null || r === void 0 ? void 0 : r.call(i, e);
        };
        e.onStateChange = function n(t, e) {
            var r = this.pendingRequests[t];
            if (!r) {
                return;
            }
            var i = r.xhr;
            if (i.readyState >= 2 && r.onHeadersReceived) {
                r.onHeadersReceived();
                delete r.onHeadersReceived;
            }
            if (i.readyState !== 4) {
                return;
            }
            if (!(t in this.pendingRequests)) {
                return;
            }
            delete this.pendingRequests[t];
            if (i.status === 0 && this.isHttp) {
                r.onError(i.status);
                return;
            }
            var n = i.status || qo;
            var a = n === qo && r.expectedStatus === Xo;
            if (!a && n !== r.expectedStatus) {
                r.onError(i.status);
                return;
            }
            var s = Yo(i);
            if (n === Xo) {
                var o = i.getResponseHeader("Content-Range");
                var l = /bytes (\d+)-(\d+)\/(\d+)/.exec(o);
                if (l) {
                    r.onDone({
                        begin: parseInt(l[1], 10),
                        chunk: s
                    });
                } else {
                    st('Missing or invalid "Content-Range" header.');
                    r.onError(0);
                }
            } else if (s) {
                r.onDone({
                    begin: 0,
                    chunk: s
                });
            } else {
                r.onError(i.status);
            }
        };
        e.getRequestXhr = function a(t) {
            return this.pendingRequests[t].xhr;
        };
        e.isPendingRequest = function s(t) {
            return t in this.pendingRequests;
        };
        e.abortRequest = function o(t) {
            var e = this.pendingRequests[t].xhr;
            delete this.pendingRequests[t];
            e.abort();
        };
        return t;
    }();
    var Qo = function() {
        function t(t) {
            this._source = t;
            this._manager = new Ko(t);
            this._rangeChunkSize = t.rangeChunkSize;
            this._fullRequestReader = null;
            this._rangeRequestReaders = [];
        }
        var e = t.prototype;
        e._onRangeRequestReaderClosed = function r(t) {
            var e = this._rangeRequestReaders.indexOf(t);
            if (e >= 0) {
                this._rangeRequestReaders.splice(e, 1);
            }
        };
        e.getFullReader = function i() {
            lt(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once.");
            this._fullRequestReader = new Jo(this._manager, this._source);
            return this._fullRequestReader;
        };
        e.getRangeReader = function n(t, e) {
            var r = new Zo(this._manager, t, e);
            r.onClosed = this._onRangeRequestReaderClosed.bind(this);
            this._rangeRequestReaders.push(r);
            return r;
        };
        e.cancelAllRequests = function a(t) {
            var e;
            (e = this._fullRequestReader) === null || e === void 0 ? void 0 : e.cancel(t);
            for (var r of this._rangeRequestReaders.slice(0)) {
                r.cancel(t);
            }
        };
        return t;
    }();
    var Jo = function() {
        function t(t, e) {
            this._manager = t;
            this._url = e.url;
            this._fullRequestId = t.request({
                onHeadersReceived: this._onHeadersReceived.bind(this),
                onDone: this._onDone.bind(this),
                onError: this._onError.bind(this),
                onProgress: this._onProgress.bind(this)
            });
            this._headersCapability = Promise.withResolvers();
            this._disableRange = e.disableRange || false;
            this._contentLength = e.length;
            this._rangeChunkSize = e.rangeChunkSize;
            if (!this._rangeChunkSize && !this._disableRange) {
                this._disableRange = true;
            }
            this._isStreamingSupported = false;
            this._isRangeSupported = false;
            this._cachedChunks = [];
            this._requests = [];
            this._done = false;
            this._storedError = undefined;
            this._filename = null;
            this.onProgress = null;
        }
        var e = t.prototype;
        e._onHeadersReceived = function r() {
            var t = this._fullRequestId;
            var e = this._manager.getRequestXhr(t);
            this._manager._responseOrigin = Oo(e.responseURL);
            var r = e.getAllResponseHeaders();
            var i = new Headers(r ? r.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((function(t) {
                var [e, ...r] = t.split(": ");
                return [ e, r.join(": ") ];
            })) : []);
            var {allowRangeRequests: n, suggestedLength: a} = Fo({
                responseHeaders: i,
                isHttp: this._manager.isHttp,
                rangeChunkSize: this._rangeChunkSize,
                disableRange: this._disableRange
            });
            if (n) {
                this._isRangeSupported = true;
            }
            this._contentLength = a || this._contentLength;
            this._filename = Wo(i);
            if (this._isRangeSupported) {
                this._manager.abortRequest(t);
            }
            this._headersCapability.resolve();
        };
        e._onDone = function i(t) {
            if (t) {
                if (this._requests.length > 0) {
                    var e = this._requests.shift();
                    e.resolve({
                        value: t.chunk,
                        done: false
                    });
                } else {
                    this._cachedChunks.push(t.chunk);
                }
            }
            this._done = true;
            if (this._cachedChunks.length > 0) {
                return;
            }
            for (var r of this._requests) {
                r.resolve({
                    value: undefined,
                    done: true
                });
            }
            this._requests.length = 0;
        };
        e._onError = function n(t) {
            this._storedError = Bo(t, this._url);
            this._headersCapability.reject(this._storedError);
            for (var e of this._requests) {
                e.reject(this._storedError);
            }
            this._requests.length = 0;
            this._cachedChunks.length = 0;
        };
        e._onProgress = function a(t) {
            var e;
            (e = this.onProgress) === null || e === void 0 ? void 0 : e.call(this, {
                loaded: t.loaded,
                total: t.lengthComputable ? t.total : this._contentLength
            });
        };
        e.read = function() {
            var t = s((function*() {
                yield this._headersCapability.promise;
                if (this._storedError) {
                    throw this._storedError;
                }
                if (this._cachedChunks.length > 0) {
                    var t = this._cachedChunks.shift();
                    return {
                        value: t,
                        done: false
                    };
                }
                if (this._done) {
                    return {
                        value: undefined,
                        done: true
                    };
                }
                var e = Promise.withResolvers();
                this._requests.push(e);
                return e.promise;
            }));
            function e() {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.cancel = function o(t) {
            this._done = true;
            this._headersCapability.reject(t);
            for (var e of this._requests) {
                e.resolve({
                    value: undefined,
                    done: true
                });
            }
            this._requests.length = 0;
            if (this._manager.isPendingRequest(this._fullRequestId)) {
                this._manager.abortRequest(this._fullRequestId);
            }
            this._fullRequestReader = null;
        };
        return v(t, [ {
            key: "filename",
            get: function() {
                return this._filename;
            }
        }, {
            key: "isRangeSupported",
            get: function() {
                return this._isRangeSupported;
            }
        }, {
            key: "isStreamingSupported",
            get: function() {
                return this._isStreamingSupported;
            }
        }, {
            key: "contentLength",
            get: function() {
                return this._contentLength;
            }
        }, {
            key: "headersReady",
            get: function() {
                return this._headersCapability.promise;
            }
        } ]);
    }();
    var Zo = function() {
        function t(t, e, r) {
            this._manager = t;
            this._url = t.url;
            this._requestId = t.request({
                begin: e,
                end: r,
                onHeadersReceived: this._onHeadersReceived.bind(this),
                onDone: this._onDone.bind(this),
                onError: this._onError.bind(this),
                onProgress: this._onProgress.bind(this)
            });
            this._requests = [];
            this._queuedChunk = null;
            this._done = false;
            this._storedError = undefined;
            this.onProgress = null;
            this.onClosed = null;
        }
        var e = t.prototype;
        e._onHeadersReceived = function r() {
            var t;
            var e = Oo((t = this._manager.getRequestXhr(this._requestId)) === null || t === void 0 ? void 0 : t.responseURL);
            if (e !== this._manager._responseOrigin) {
                this._storedError = new Error('Expected range response-origin "' + e + '" to match "' + this._manager._responseOrigin + '".');
                this._onError(0);
            }
        };
        e._close = function i() {
            var t;
            (t = this.onClosed) === null || t === void 0 ? void 0 : t.call(this, this);
        };
        e._onDone = function n(t) {
            var e = t.chunk;
            if (this._requests.length > 0) {
                var r = this._requests.shift();
                r.resolve({
                    value: e,
                    done: false
                });
            } else {
                this._queuedChunk = e;
            }
            this._done = true;
            for (var i of this._requests) {
                i.resolve({
                    value: undefined,
                    done: true
                });
            }
            this._requests.length = 0;
            this._close();
        };
        e._onError = function a(t) {
            this._storedError ??= Bo(t, this._url);
            for (var e of this._requests) {
                e.reject(this._storedError);
            }
            this._requests.length = 0;
            this._queuedChunk = null;
        };
        e._onProgress = function o(t) {
            if (!this.isStreamingSupported) {
                var e;
                (e = this.onProgress) === null || e === void 0 ? void 0 : e.call(this, {
                    loaded: t.loaded
                });
            }
        };
        e.read = function() {
            var t = s((function*() {
                if (this._storedError) {
                    throw this._storedError;
                }
                if (this._queuedChunk !== null) {
                    var t = this._queuedChunk;
                    this._queuedChunk = null;
                    return {
                        value: t,
                        done: false
                    };
                }
                if (this._done) {
                    return {
                        value: undefined,
                        done: true
                    };
                }
                var e = Promise.withResolvers();
                this._requests.push(e);
                return e.promise;
            }));
            function e() {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.cancel = function l(t) {
            this._done = true;
            for (var e of this._requests) {
                e.resolve({
                    value: undefined,
                    done: true
                });
            }
            this._requests.length = 0;
            if (this._manager.isPendingRequest(this._requestId)) {
                this._manager.abortRequest(this._requestId);
            }
            this._close();
        };
        return v(t, [ {
            key: "isStreamingSupported",
            get: function() {
                return false;
            }
        } ]);
    }();
    var $o = /^[a-z][a-z0-9\-+.]+:/i;
    function tl(t) {
        if ($o.test(t)) {
            return new URL(t);
        }
        var e = process.getBuiltinModule("url");
        return new URL(e.pathToFileURL(t));
    }
    var el = function() {
        function t(t) {
            this.source = t;
            this.url = tl(t.url);
            lt(this.url.protocol === "file:", "PDFNodeStream only supports file:// URLs.");
            this._fullRequestReader = null;
            this._rangeRequestReaders = [];
        }
        var e = t.prototype;
        e.getFullReader = function r() {
            lt(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once.");
            this._fullRequestReader = new rl(this);
            return this._fullRequestReader;
        };
        e.getRangeReader = function i(t, e) {
            if (e <= this._progressiveDataLength) {
                return null;
            }
            var r = new il(this, t, e);
            this._rangeRequestReaders.push(r);
            return r;
        };
        e.cancelAllRequests = function n(t) {
            var e;
            (e = this._fullRequestReader) === null || e === void 0 ? void 0 : e.cancel(t);
            for (var r of this._rangeRequestReaders.slice(0)) {
                r.cancel(t);
            }
        };
        return v(t, [ {
            key: "_progressiveDataLength",
            get: function() {
                var t, e;
                return (t = (e = this._fullRequestReader) === null || e === void 0 ? void 0 : e._loaded) !== null && t !== void 0 ? t : 0;
            }
        } ]);
    }();
    var rl = function() {
        function t(t) {
            var e = this;
            this._url = t.url;
            this._done = false;
            this._storedError = null;
            this.onProgress = null;
            var r = t.source;
            this._contentLength = r.length;
            this._loaded = 0;
            this._filename = null;
            this._disableRange = r.disableRange || false;
            this._rangeChunkSize = r.rangeChunkSize;
            if (!this._rangeChunkSize && !this._disableRange) {
                this._disableRange = true;
            }
            this._isStreamingSupported = !r.disableStream;
            this._isRangeSupported = !r.disableRange;
            this._readableStream = null;
            this._readCapability = Promise.withResolvers();
            this._headersCapability = Promise.withResolvers();
            var i = process.getBuiltinModule("fs");
            i.promises.lstat(this._url).then((function(t) {
                e._contentLength = t.size;
                e._setReadableStream(i.createReadStream(e._url));
                e._headersCapability.resolve();
            }), (function(t) {
                if (t.code === "ENOENT") {
                    t = Bo(0, e._url.href);
                }
                e._storedError = t;
                e._headersCapability.reject(t);
            }));
        }
        var e = t.prototype;
        e.read = function() {
            var t = s((function*() {
                var t;
                yield this._readCapability.promise;
                if (this._done) {
                    return {
                        value: undefined,
                        done: true
                    };
                }
                if (this._storedError) {
                    throw this._storedError;
                }
                var e = this._readableStream.read();
                if (e === null) {
                    this._readCapability = Promise.withResolvers();
                    return this.read();
                }
                this._loaded += e.length;
                (t = this.onProgress) === null || t === void 0 ? void 0 : t.call(this, {
                    loaded: this._loaded,
                    total: this._contentLength
                });
                var r = new Uint8Array(e).buffer;
                return {
                    value: r,
                    done: false
                };
            }));
            function e() {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.cancel = function r(t) {
            if (!this._readableStream) {
                this._error(t);
                return;
            }
            this._readableStream.destroy(t);
        };
        e._error = function i(t) {
            this._storedError = t;
            this._readCapability.resolve();
        };
        e._setReadableStream = function n(t) {
            var e = this;
            this._readableStream = t;
            t.on("readable", (function() {
                e._readCapability.resolve();
            }));
            t.on("end", (function() {
                t.destroy();
                e._done = true;
                e._readCapability.resolve();
            }));
            t.on("error", (function(t) {
                e._error(t);
            }));
            if (!this._isStreamingSupported && this._isRangeSupported) {
                this._error(new wt("streaming is disabled"));
            }
            if (this._storedError) {
                this._readableStream.destroy(this._storedError);
            }
        };
        return v(t, [ {
            key: "headersReady",
            get: function() {
                return this._headersCapability.promise;
            }
        }, {
            key: "filename",
            get: function() {
                return this._filename;
            }
        }, {
            key: "contentLength",
            get: function() {
                return this._contentLength;
            }
        }, {
            key: "isRangeSupported",
            get: function() {
                return this._isRangeSupported;
            }
        }, {
            key: "isStreamingSupported",
            get: function() {
                return this._isStreamingSupported;
            }
        } ]);
    }();
    var il = function() {
        function t(t, e, r) {
            this._url = t.url;
            this._done = false;
            this._storedError = null;
            this.onProgress = null;
            this._loaded = 0;
            this._readableStream = null;
            this._readCapability = Promise.withResolvers();
            var i = t.source;
            this._isStreamingSupported = !i.disableStream;
            var n = process.getBuiltinModule("fs");
            this._setReadableStream(n.createReadStream(this._url, {
                start: e,
                end: r - 1
            }));
        }
        var e = t.prototype;
        e.read = function() {
            var t = s((function*() {
                var t;
                yield this._readCapability.promise;
                if (this._done) {
                    return {
                        value: undefined,
                        done: true
                    };
                }
                if (this._storedError) {
                    throw this._storedError;
                }
                var e = this._readableStream.read();
                if (e === null) {
                    this._readCapability = Promise.withResolvers();
                    return this.read();
                }
                this._loaded += e.length;
                (t = this.onProgress) === null || t === void 0 ? void 0 : t.call(this, {
                    loaded: this._loaded
                });
                var r = new Uint8Array(e).buffer;
                return {
                    value: r,
                    done: false
                };
            }));
            function e() {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.cancel = function r(t) {
            if (!this._readableStream) {
                this._error(t);
                return;
            }
            this._readableStream.destroy(t);
        };
        e._error = function i(t) {
            this._storedError = t;
            this._readCapability.resolve();
        };
        e._setReadableStream = function n(t) {
            var e = this;
            this._readableStream = t;
            t.on("readable", (function() {
                e._readCapability.resolve();
            }));
            t.on("end", (function() {
                t.destroy();
                e._done = true;
                e._readCapability.resolve();
            }));
            t.on("error", (function(t) {
                e._error(t);
            }));
            if (this._storedError) {
                this._readableStream.destroy(this._storedError);
            }
        };
        return v(t, [ {
            key: "isStreamingSupported",
            get: function() {
                return this._isStreamingSupported;
            }
        } ]);
    }();
    var nl = Symbol("INITIAL_DATA");
    var al = new WeakMap;
    var sl = new WeakSet;
    var ol = function() {
        function t() {
            d(this, sl);
            u(this, al, Object.create(null));
        }
        var e = t.prototype;
        e.get = function i(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            if (e) {
                var i = r(sl, this, ll).call(this, t);
                i.promise.then((function() {
                    return e(i.data);
                }));
                return null;
            }
            var n = l(al, this)[t];
            if (!n || n.data === nl) {
                throw new Error("Requesting object that isn't resolved yet " + t + ".");
            }
            return n.data;
        };
        e.has = function n(t) {
            var e = l(al, this)[t];
            return !!e && e.data !== nl;
        };
        e["delete"] = function a(t) {
            var e = l(al, this)[t];
            if (!e || e.data === nl) {
                return false;
            }
            delete l(al, this)[t];
            return true;
        };
        e.resolve = function s(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var i = r(sl, this, ll).call(this, t);
            i.data = e;
            i.resolve();
        };
        e.clear = function o() {
            for (var t in l(al, this)) {
                var e;
                var {data: r} = l(al, this)[t];
                r === null || r === void 0 ? void 0 : (e = r.bitmap) === null || e === void 0 ? void 0 : e.close();
            }
            h(al, this, Object.create(null));
        };
        e[Symbol.iterator] = function*() {
            for (var t in l(al, this)) {
                var {data: e} = l(al, this)[t];
                if (e === nl) {
                    continue;
                }
                yield [ t, e ];
            }
        };
        return t;
    }();
    function ll(t) {
        return l(al, this)[t] ||= {
            ...Promise.withResolvers(),
            data: nl
        };
    }
    var ul = 1e5;
    var hl = 30;
    var cl = new WeakMap;
    var dl = new WeakMap;
    var fl = new WeakMap;
    var vl = new WeakMap;
    var pl = new WeakMap;
    var gl = new WeakMap;
    var ml = new WeakMap;
    var yl = new WeakMap;
    var wl = new WeakMap;
    var bl = new WeakMap;
    var Al = new WeakMap;
    var _l = new WeakMap;
    var kl = new WeakMap;
    var xl = new WeakMap;
    var El = new WeakMap;
    var Sl = new WeakMap;
    var Ml = new WeakMap;
    var Cl = new WeakMap;
    var Tl = new WeakSet;
    var Rl = function() {
        function t(e) {
            var r, i = this;
            var {textContentSource: n, container: a, viewport: s} = e;
            d(this, Tl);
            u(this, cl, Promise.withResolvers());
            u(this, dl, null);
            u(this, fl, false);
            u(this, vl, !!((r = globalThis.FontInspector) !== null && r !== void 0 && r.enabled));
            u(this, pl, null);
            u(this, gl, null);
            u(this, ml, 0);
            u(this, yl, 0);
            u(this, wl, null);
            u(this, bl, null);
            u(this, Al, 0);
            u(this, _l, 0);
            u(this, kl, Object.create(null));
            u(this, xl, []);
            u(this, El, null);
            u(this, Sl, []);
            u(this, Ml, new WeakMap);
            u(this, Cl, null);
            if (n instanceof ReadableStream) {
                h(El, this, n);
            } else if (typeof n === "object") {
                h(El, this, new ReadableStream({
                    start: function(t) {
                        t.enqueue(n);
                        t.close();
                    }
                }));
            } else {
                throw new Error('No "textContentSource" parameter specified.');
            }
            h(dl, this, h(bl, this, a));
            h(_l, this, s.scale * ue.pixelRatio);
            h(Al, this, s.rotation);
            h(gl, this, {
                div: null,
                properties: null,
                ctx: null
            });
            var {pageWidth: o, pageHeight: c, pageX: f, pageY: v} = s.rawDims;
            h(Cl, this, [ 1, 0, 0, -1, -f, v + c ]);
            h(yl, this, o);
            h(ml, this, c);
            Ol.call(t);
            le(a, s);
            l(cl, this).promise["finally"]((function() {
                Ul._["delete"](i);
                h(gl, i, null);
                h(kl, i, null);
            }))["catch"]((function() {}));
        }
        var e = t.prototype;
        e.render = function i() {
            var t = this;
            var e = function() {
                l(wl, t).read().then((function(i) {
                    var n;
                    var {value: a, done: s} = i;
                    if (s) {
                        l(cl, t).resolve();
                        return;
                    }
                    (n = l(pl, t)) !== null && n !== void 0 ? n : h(pl, t, a.lang);
                    Object.assign(l(kl, t), a.styles);
                    r(Tl, t, Il).call(t, a.items);
                    e();
                }), l(cl, t).reject);
            };
            h(wl, this, l(El, this).getReader());
            Ul._.add(this);
            e();
            return l(cl, this).promise;
        };
        e.update = function n(e) {
            var {viewport: i, onBefore: n = null} = e;
            var a = i.scale * ue.pixelRatio;
            var s = i.rotation;
            if (s !== l(Al, this)) {
                n === null || n === void 0 ? void 0 : n();
                h(Al, this, s);
                le(l(bl, this), {
                    rotation: s
                });
            }
            if (a !== l(_l, this)) {
                n === null || n === void 0 ? void 0 : n();
                h(_l, this, a);
                var o = {
                    div: null,
                    properties: null,
                    ctx: Dl.call(t, l(pl, this))
                };
                for (var u of l(Sl, this)) {
                    o.properties = l(Ml, this).get(u);
                    o.div = u;
                    r(Tl, this, Ll).call(this, o);
                }
            }
        };
        e.cancel = function a() {
            var t;
            var e = new wt("TextLayer task cancelled.");
            (t = l(wl, this)) === null || t === void 0 ? void 0 : t.cancel(e)["catch"]((function() {}));
            h(wl, this, null);
            l(cl, this).reject(e);
        };
        t.cleanup = function s() {
            if (r(t, this, Ul)._.size > 0) {
                return;
            }
            r(t, this, Wl)._.clear();
            for (var {canvas: e} of r(t, this, Bl)._.values()) {
                e.remove();
            }
            r(t, this, Bl)._.clear();
        };
        return v(t, [ {
            key: "textDivs",
            get: function() {
                return l(Sl, this);
            }
        }, {
            key: "textContentItemsStr",
            get: function() {
                return l(xl, this);
            }
        } ], [ {
            key: "fontFamilyMap",
            get: function() {
                var {isWindows: t, isFirefox: e} = Et.platform;
                return dt(this, "fontFamilyMap", new Map([ [ "sans-serif", (t && e ? "Calibri, " : "") + "sans-serif" ], [ "monospace", (t && e ? "Lucida Console, " : "") + "monospace" ] ]));
            }
        } ]);
    }();
    S = Rl;
    function Il(t) {
        if (l(fl, this)) {
            return;
        }
        l(gl, this).ctx ??= Dl.call(S, l(pl, this));
        var e = l(Sl, this), i = l(xl, this);
        for (var n of t) {
            if (e.length > ul) {
                st("Ignoring additional textDivs for performance reasons.");
                h(fl, this, true);
                return;
            }
            if (n.str === undefined) {
                if (n.type === "beginMarkedContentProps" || n.type === "beginMarkedContent") {
                    var a = l(dl, this);
                    h(dl, this, document.createElement("span"));
                    l(dl, this).classList.add("markedContent");
                    if (n.id) {
                        l(dl, this).setAttribute("id", "" + n.id);
                    }
                    a.append(l(dl, this));
                } else if (n.type === "endMarkedContent") {
                    h(dl, this, l(dl, this).parentNode);
                }
                continue;
            }
            i.push(n.str);
            r(Tl, this, Pl).call(this, n);
        }
    }
    function Pl(t) {
        var e = document.createElement("span");
        var i = {
            angle: 0,
            canvasWidth: 0,
            hasText: t.str !== "",
            hasEOL: t.hasEOL,
            fontSize: 0
        };
        l(Sl, this).push(e);
        var n = Mt.transform(l(Cl, this), t.transform);
        var a = Math.atan2(n[1], n[0]);
        var s = l(kl, this)[t.fontName];
        if (s.vertical) {
            a += Math.PI / 2;
        }
        var o = l(vl, this) && s.fontSubstitution || s.fontFamily;
        o = S.fontFamilyMap.get(o) || o;
        var u = Math.hypot(n[2], n[3]);
        var h = u * Fl.call(S, o, s, l(pl, this));
        var c, d;
        if (a === 0) {
            c = n[4];
            d = n[5] - h;
        } else {
            c = n[4] + h * Math.sin(a);
            d = n[5] - h * Math.cos(a);
        }
        var f = "calc(var(--total-scale-factor) *";
        var v = e.style;
        if (l(dl, this) === l(bl, this)) {
            v.left = (100 * c / l(yl, this)).toFixed(2) + "%";
            v.top = (100 * d / l(ml, this)).toFixed(2) + "%";
        } else {
            v.left = "" + f + c.toFixed(2) + "px)";
            v.top = "" + f + d.toFixed(2) + "px)";
        }
        v.fontSize = "" + f + (Hl._ * u).toFixed(2) + "px)";
        v.fontFamily = o;
        i.fontSize = u;
        e.setAttribute("role", "presentation");
        e.textContent = t.str;
        e.dir = t.dir;
        if (l(vl, this)) {
            e.dataset.fontName = s.fontSubstitutionLoadedName || t.fontName;
        }
        if (a !== 0) {
            i.angle = a * (180 / Math.PI);
        }
        var p = false;
        if (t.str.length > 1) {
            p = true;
        } else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
            var g = Math.abs(t.transform[0]), m = Math.abs(t.transform[3]);
            if (g !== m && Math.max(g, m) / Math.min(g, m) > 1.5) {
                p = true;
            }
        }
        if (p) {
            i.canvasWidth = s.vertical ? t.height : t.width;
        }
        l(Ml, this).set(e, i);
        l(gl, this).div = e;
        l(gl, this).properties = i;
        r(Tl, this, Ll).call(this, l(gl, this));
        if (i.hasText) {
            l(dl, this).append(e);
        }
        if (i.hasEOL) {
            var y = document.createElement("br");
            y.setAttribute("role", "presentation");
            l(dl, this).append(y);
        }
    }
    function Ll(t) {
        var {div: e, properties: r, ctx: i} = t;
        var {style: n} = e;
        var a = "";
        if (Hl._ > 1) {
            a = "scale(" + 1 / Hl._ + ")";
        }
        if (r.canvasWidth !== 0 && r.hasText) {
            var {fontFamily: s} = n;
            var {canvasWidth: o, fontSize: u} = r;
            Nl.call(S, i, u * l(_l, this), s);
            var {width: h} = i.measureText(e.textContent);
            if (h > 0) {
                a = "scaleX(" + o * l(_l, this) / h + ") " + a;
            }
        }
        if (r.angle !== 0) {
            a = "rotate(" + r.angle + "deg) " + a;
        }
        if (a.length > 0) {
            n.transform = a;
        }
    }
    function Dl() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var e = r(S, this, Bl)._.get(t ||= "");
        if (!e) {
            var i = document.createElement("canvas");
            i.className = "hiddenCanvasElement";
            i.lang = t;
            document.body.append(i);
            e = i.getContext("2d", {
                alpha: false,
                willReadFrequently: true
            });
            r(S, this, Bl)._.set(t, e);
            r(S, this, jl)._.set(e, {
                size: 0,
                family: ""
            });
        }
        return e;
    }
    function Nl(t, e, i) {
        var n = r(S, this, jl)._.get(t);
        if (e === n.size && i === n.family) {
            return;
        }
        t.font = e + "px " + i;
        n.size = e;
        n.family = i;
    }
    function Ol() {
        if (r(S, this, Hl)._ !== null) {
            return;
        }
        var t = document.createElement("div");
        t.style.opacity = 0;
        t.style.lineHeight = 1;
        t.style.fontSize = "1px";
        t.style.position = "absolute";
        t.textContent = "X";
        document.body.append(t);
        Hl._ = r(S, this, t.getBoundingClientRect().height);
        t.remove();
    }
    function Fl(t, e, i) {
        var n = r(S, this, Wl)._.get(t);
        if (n) {
            return n;
        }
        var a = r(S, this, Dl).call(this, i);
        a.canvas.width = a.canvas.height = hl;
        r(S, this, Nl).call(this, a, hl, t);
        var s = a.measureText("");
        var o = s.fontBoundingBoxAscent;
        var l = Math.abs(s.fontBoundingBoxDescent);
        a.canvas.width = a.canvas.height = 0;
        var u = .8;
        if (o) {
            u = o / (o + l);
        } else {
            if (Et.platform.isFirefox) {
                st("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference " + "in `about:config` to improve TextLayer rendering.");
            }
            if (e.ascent) {
                u = e.ascent;
            } else if (e.descent) {
                u = 1 + e.descent;
            }
        }
        r(S, this, Wl)._.set(t, u);
        return u;
    }
    var Wl = {
        _: new Map
    };
    var Bl = {
        _: new Map
    };
    var jl = {
        _: new WeakMap
    };
    var Hl = {
        _: null
    };
    var Ul = {
        _: new Set
    };
    var zl = function() {
        function t() {}
        t.textContent = function e(r) {
            var i = [];
            var n = {
                items: i,
                styles: Object.create(null)
            };
            function a(e) {
                var r;
                if (!e) {
                    return;
                }
                var n = null;
                var s = e.name;
                if (s === "#text") {
                    n = e.value;
                } else if (!t.shouldBuildText(s)) {
                    return;
                } else if (e !== null && e !== void 0 && (r = e.attributes) !== null && r !== void 0 && r.textContent) {
                    n = e.attributes.textContent;
                } else if (e.value) {
                    n = e.value;
                }
                if (n !== null) {
                    i.push({
                        str: n
                    });
                }
                if (!e.children) {
                    return;
                }
                for (var o of e.children) {
                    a(o);
                }
            }
            a(r);
            return n;
        };
        t.shouldBuildText = function r(t) {
            return !(t === "textarea" || t === "input" || t === "option" || t === "select");
        };
        return t;
    }();
    var Gl = 100;
    function Vl() {
        var t, e;
        var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (typeof r === "string" || r instanceof URL) {
            r = {
                url: r
            };
        } else if (r instanceof ArrayBuffer || ArrayBuffer.isView(r)) {
            r = {
                data: r
            };
        }
        var i = new ql;
        var {docId: n} = i;
        var a = r.url ? pa(r.url) : null;
        var s = r.data ? ga(r.data) : null;
        var o = r.httpHeaders || null;
        var l = r.withCredentials === true;
        var u = (t = r.password) !== null && t !== void 0 ? t : null;
        var h = r.range instanceof $l ? r.range : null;
        var c = Number.isInteger(r.rangeChunkSize) && r.rangeChunkSize > 0 ? r.rangeChunkSize : 2 ** 16;
        var d = r.worker instanceof hu ? r.worker : null;
        var f = r.verbosity;
        var v = typeof r.docBaseUrl === "string" && !qt(r.docBaseUrl) ? r.docBaseUrl : null;
        var p = ma(r.cMapUrl);
        var g = r.cMapPacked !== false;
        var m = r.CMapReaderFactory || (B ? ks : ja);
        var y = ma(r.iccUrl);
        var w = ma(r.standardFontDataUrl);
        var b = r.StandardFontDataFactory || (B ? xs : hs);
        var A = ma(r.wasmUrl);
        var _ = r.WasmFactory || (B ? Es : ds);
        var k = r.stopAtErrors !== true;
        var x = Number.isInteger(r.maxImageSize) && r.maxImageSize > -1 ? r.maxImageSize : -1;
        var E = r.isEvalSupported !== false;
        var S = typeof r.isOffscreenCanvasSupported === "boolean" ? r.isOffscreenCanvasSupported : !B;
        var M = typeof r.isImageDecoderSupported === "boolean" ? r.isImageDecoderSupported : !B && (Et.platform.isFirefox || !globalThis.chrome);
        var C = Number.isInteger(r.canvasMaxAreaInBytes) ? r.canvasMaxAreaInBytes : -1;
        var T = typeof r.disableFontFace === "boolean" ? r.disableFontFace : B;
        var R = r.fontExtraProperties === true;
        var I = r.enableXfa === true;
        var P = r.ownerDocument || globalThis.document;
        var L = r.disableRange === true;
        var D = r.disableStream === true;
        var N = r.disableAutoFetch === true;
        var O = r.pdfBug === true;
        var F = r.CanvasFactory || (B ? _s : Wa);
        var W = r.FilterFactory || (B ? As : Qa);
        var j = r.enableHWA === true;
        var H = r.useWasm !== false;
        var U = h ? h.length : (e = r.length) !== null && e !== void 0 ? e : NaN;
        var z = typeof r.useSystemFonts === "boolean" ? r.useSystemFonts : !B && !T;
        var G = typeof r.useWorkerFetch === "boolean" ? r.useWorkerFetch : !!(m === ja && b === hs && _ === ds && p && w && A && Jt(p, document.baseURI) && Jt(w, document.baseURI) && Jt(A, document.baseURI));
        var V = null;
        it(f);
        var q = {
            canvasFactory: new F({
                ownerDocument: P,
                enableHWA: j
            }),
            filterFactory: new W({
                docId: n,
                ownerDocument: P
            }),
            cMapReaderFactory: G ? null : new m({
                baseUrl: p,
                isCompressed: g
            }),
            standardFontDataFactory: G ? null : new b({
                baseUrl: w
            }),
            wasmFactory: G ? null : new _({
                baseUrl: A
            })
        };
        if (!d) {
            d = hu.create({
                verbosity: f,
                port: co.workerPort
            });
            i._worker = d;
        }
        var X = {
            docId: n,
            apiVersion: "5.4.78",
            data: s,
            password: u,
            disableAutoFetch: N,
            rangeChunkSize: c,
            length: U,
            docBaseUrl: v,
            enableXfa: I,
            evaluatorOptions: {
                maxImageSize: x,
                disableFontFace: T,
                ignoreErrors: k,
                isEvalSupported: E,
                isOffscreenCanvasSupported: S,
                isImageDecoderSupported: M,
                canvasMaxAreaInBytes: C,
                fontExtraProperties: R,
                useSystemFonts: z,
                useWasm: H,
                useWorkerFetch: G,
                cMapUrl: p,
                iccUrl: y,
                standardFontDataUrl: w,
                wasmUrl: A
            }
        };
        var Y = {
            ownerDocument: P,
            pdfBug: O,
            styleElement: V,
            loadingParams: {
                disableAutoFetch: N,
                enableXfa: I
            }
        };
        d.promise.then((function() {
            if (i.destroyed) {
                throw new Error("Loading aborted");
            }
            if (d.destroyed) {
                throw new Error("Worker was destroyed");
            }
            var t = d.messageHandler.sendWithPromise("GetDocRequest", X, s ? [ s.buffer ] : null);
            var e;
            if (h) {
                e = new Io(h, {
                    disableRange: L,
                    disableStream: D
                });
            } else if (!s) {
                if (!a) {
                    throw new Error("getDocument - no `url` parameter provided.");
                }
                var r = Jt(a) ? zo : B ? el : Qo;
                e = new r({
                    url: a,
                    length: U,
                    httpHeaders: o,
                    withCredentials: l,
                    rangeChunkSize: c,
                    disableRange: L,
                    disableStream: D
                });
            }
            return t.then((function(t) {
                if (i.destroyed) {
                    throw new Error("Loading aborted");
                }
                if (d.destroyed) {
                    throw new Error("Worker was destroyed");
                }
                var r = new Ra(n, t, d.port);
                var a = new Eu(r, i, e, Y, q, j);
                i._transport = a;
                r.send("Ready", null);
            }));
        }))["catch"](i._capability.reject);
        return i;
    }
    var ql = function() {
        function t() {
            p(this, "_capability", Promise.withResolvers());
            p(this, "_transport", null);
            p(this, "_worker", null);
            p(this, "docId", "d" + (Xl._ = (M = Xl._, C = M++, M), C));
            p(this, "destroyed", false);
            p(this, "onPassword", null);
            p(this, "onProgress", null);
        }
        var e = t.prototype;
        e.destroy = function() {
            var t = s((function*() {
                var t;
                this.destroyed = true;
                try {
                    var e, r;
                    if ((e = this._worker) !== null && e !== void 0 && e.port) {
                        this._worker._pendingDestroy = true;
                    }
                    yield (r = this._transport) === null || r === void 0 ? void 0 : r.destroy();
                } catch (pg) {
                    var i;
                    if ((i = this._worker) !== null && i !== void 0 && i.port) {
                        delete this._worker._pendingDestroy;
                    }
                    throw pg;
                }
                this._transport = null;
                (t = this._worker) === null || t === void 0 ? void 0 : t.destroy();
                this._worker = null;
            }));
            function e() {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.getData = function() {
            var t = s((function*() {
                return this._transport.getData();
            }));
            function e() {
                return t.apply(this, arguments);
            }
            return e;
        }();
        return v(t, [ {
            key: "promise",
            get: function() {
                return this._capability.promise;
            }
        } ]);
    }();
    var Xl = {
        _: 0
    };
    var Yl = new WeakMap;
    var Kl = new WeakMap;
    var Ql = new WeakMap;
    var Jl = new WeakMap;
    var Zl = new WeakMap;
    var $l = function() {
        function t(t, e) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            u(this, Yl, Promise.withResolvers());
            u(this, Kl, []);
            u(this, Ql, []);
            u(this, Jl, []);
            u(this, Zl, []);
            this.length = t;
            this.initialData = e;
            this.progressiveDone = r;
            this.contentDispositionFilename = i;
        }
        var e = t.prototype;
        e.addRangeListener = function r(t) {
            l(Zl, this).push(t);
        };
        e.addProgressListener = function i(t) {
            l(Jl, this).push(t);
        };
        e.addProgressiveReadListener = function n(t) {
            l(Ql, this).push(t);
        };
        e.addProgressiveDoneListener = function a(t) {
            l(Kl, this).push(t);
        };
        e.onDataRange = function s(t, e) {
            for (var r of l(Zl, this)) {
                r(t, e);
            }
        };
        e.onDataProgress = function o(t, e) {
            var r = this;
            l(Yl, this).promise.then((function() {
                for (var i of l(Jl, r)) {
                    i(t, e);
                }
            }));
        };
        e.onDataProgressiveRead = function h(t) {
            var e = this;
            l(Yl, this).promise.then((function() {
                for (var r of l(Ql, e)) {
                    r(t);
                }
            }));
        };
        e.onDataProgressiveDone = function c() {
            var t = this;
            l(Yl, this).promise.then((function() {
                for (var e of l(Kl, t)) {
                    e();
                }
            }));
        };
        e.transportReady = function d() {
            l(Yl, this).resolve();
        };
        e.requestDataRange = function f(t, e) {
            ot("Abstract method PDFDataRangeTransport.requestDataRange");
        };
        e.abort = function v() {};
        return t;
    }();
    var tu = function() {
        function t(t, e) {
            this._pdfInfo = t;
            this._transport = e;
        }
        var e = t.prototype;
        e.getPage = function r(t) {
            return this._transport.getPage(t);
        };
        e.getPageIndex = function i(t) {
            return this._transport.getPageIndex(t);
        };
        e.getDestinations = function n() {
            return this._transport.getDestinations();
        };
        e.getDestination = function a(t) {
            return this._transport.getDestination(t);
        };
        e.getPageLabels = function s() {
            return this._transport.getPageLabels();
        };
        e.getPageLayout = function o() {
            return this._transport.getPageLayout();
        };
        e.getPageMode = function l() {
            return this._transport.getPageMode();
        };
        e.getViewerPreferences = function u() {
            return this._transport.getViewerPreferences();
        };
        e.getOpenAction = function h() {
            return this._transport.getOpenAction();
        };
        e.getAttachments = function c() {
            return this._transport.getAttachments();
        };
        e.getJSActions = function d() {
            return this._transport.getDocJSActions();
        };
        e.getOutline = function f() {
            return this._transport.getOutline();
        };
        e.getOptionalContentConfig = function p() {
            var {intent: t = "display"} = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var {renderingIntent: e} = this._transport.getRenderingIntent(t);
            return this._transport.getOptionalContentConfig(e);
        };
        e.getPermissions = function g() {
            return this._transport.getPermissions();
        };
        e.getMetadata = function m() {
            return this._transport.getMetadata();
        };
        e.getMarkInfo = function y() {
            return this._transport.getMarkInfo();
        };
        e.getData = function w() {
            return this._transport.getData();
        };
        e.saveDocument = function b() {
            return this._transport.saveDocument();
        };
        e.getDownloadInfo = function A() {
            return this._transport.downloadInfoCapability.promise;
        };
        e.cleanup = function _() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return this._transport.startCleanup(t || this.isPureXfa);
        };
        e.destroy = function k() {
            return this.loadingTask.destroy();
        };
        e.cachedPageNumber = function x(t) {
            return this._transport.cachedPageNumber(t);
        };
        e.getFieldObjects = function E() {
            return this._transport.getFieldObjects();
        };
        e.hasJSActions = function S() {
            return this._transport.hasJSActions();
        };
        e.getCalculationOrderIds = function M() {
            return this._transport.getCalculationOrderIds();
        };
        return v(t, [ {
            key: "annotationStorage",
            get: function() {
                return this._transport.annotationStorage;
            }
        }, {
            key: "canvasFactory",
            get: function() {
                return this._transport.canvasFactory;
            }
        }, {
            key: "filterFactory",
            get: function() {
                return this._transport.filterFactory;
            }
        }, {
            key: "numPages",
            get: function() {
                return this._pdfInfo.numPages;
            }
        }, {
            key: "fingerprints",
            get: function() {
                return this._pdfInfo.fingerprints;
            }
        }, {
            key: "isPureXfa",
            get: function() {
                return dt(this, "isPureXfa", !!this._transport._htmlForXfa);
            }
        }, {
            key: "allXfaHtml",
            get: function() {
                return this._transport._htmlForXfa;
            }
        }, {
            key: "loadingParams",
            get: function() {
                return this._transport.loadingParams;
            }
        }, {
            key: "loadingTask",
            get: function() {
                return this._transport.loadingTask;
            }
        } ]);
    }();
    var eu = new WeakMap;
    var ru = new WeakSet;
    var iu = function() {
        function t(t, e, r) {
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            d(this, ru);
            u(this, eu, false);
            this._pageIndex = t;
            this._pageInfo = e;
            this._transport = r;
            this._stats = i ? new Qt : null;
            this._pdfBug = i;
            this.commonObjs = r.commonObjs;
            this.objs = new ol;
            this._intentStates = new Map;
            this.destroyed = false;
        }
        var e = t.prototype;
        e.getViewport = function i() {
            var {scale: t, rotation: e = this.rotate, offsetX: r = 0, offsetY: i = 0, dontFlip: n = false} = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return new Gt({
                viewBox: this.view,
                userUnit: this.userUnit,
                scale: t,
                rotation: e,
                offsetX: r,
                offsetY: i,
                dontFlip: n
            });
        };
        e.getAnnotations = function n() {
            var {intent: t = "display"} = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var {renderingIntent: e} = this._transport.getRenderingIntent(t);
            return this._transport.getAnnotations(this._pageIndex, e);
        };
        e.getJSActions = function a() {
            return this._transport.getPageJSActions(this._pageIndex);
        };
        e.getXfa = function() {
            var t = s((function*() {
                var t;
                return ((t = this._transport._htmlForXfa) === null || t === void 0 ? void 0 : t.children[this._pageIndex]) || null;
            }));
            function e() {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.render = function o(t) {
            var e, i = this;
            var {canvasContext: n, canvas: a = n.canvas, viewport: s, intent: o = "display", annotationMode: l = z.ENABLE, transform: u = null, background: c = null, optionalContentConfigPromise: d = null, annotationCanvasMap: f = null, pageColors: v = null, printAnnotationStorage: p = null, isEditing: g = false} = t;
            (e = this._stats) === null || e === void 0 ? void 0 : e.time("Overall");
            var m = this._transport.getRenderingIntent(o, l, p, g);
            var {renderingIntent: y, cacheKey: w} = m;
            h(eu, this, false);
            d ||= this._transport.getOptionalContentConfig(y);
            var b = this._intentStates.get(w);
            if (!b) {
                b = Object.create(null);
                this._intentStates.set(w, b);
            }
            if (b.streamReaderCancelTimeout) {
                clearTimeout(b.streamReaderCancelTimeout);
                b.streamReaderCancelTimeout = null;
            }
            var A = !!(y & U.PRINT);
            if (!b.displayReadyCapability) {
                var _;
                b.displayReadyCapability = Promise.withResolvers();
                b.operatorList = {
                    fnArray: [],
                    argsArray: [],
                    lastChunk: false,
                    separateAnnots: null
                };
                (_ = this._stats) === null || _ === void 0 ? void 0 : _.time("Page Request");
                this._pumpOperatorList(m);
            }
            var k = function(t) {
                b.renderTasks["delete"](x);
                if (A) {
                    h(eu, i, true);
                }
                r(ru, i, nu).call(i);
                if (t) {
                    x.capability.reject(t);
                    i._abortOperatorList({
                        intentState: b,
                        reason: t instanceof Error ? t : new Error(t)
                    });
                } else {
                    x.capability.resolve();
                }
                if (i._stats) {
                    var e;
                    i._stats.timeEnd("Rendering");
                    i._stats.timeEnd("Overall");
                    if ((e = globalThis.Stats) !== null && e !== void 0 && e.enabled) {
                        globalThis.Stats.add(i.pageNumber, i._stats);
                    }
                }
            };
            var x = new Ru({
                callback: k,
                params: {
                    canvas: a,
                    canvasContext: n,
                    viewport: s,
                    transform: u,
                    background: c
                },
                objs: this.objs,
                commonObjs: this.commonObjs,
                annotationCanvasMap: f,
                operatorList: b.operatorList,
                pageIndex: this._pageIndex,
                canvasFactory: this._transport.canvasFactory,
                filterFactory: this._transport.filterFactory,
                useRequestAnimationFrame: !A,
                pdfBug: this._pdfBug,
                pageColors: v,
                enableHWA: this._transport.enableHWA
            });
            (b.renderTasks ||= new Set).add(x);
            var E = x.task;
            Promise.all([ b.displayReadyCapability.promise, d ]).then((function(t) {
                var e;
                var [r, n] = t;
                if (i.destroyed) {
                    k();
                    return;
                }
                (e = i._stats) === null || e === void 0 ? void 0 : e.time("Rendering");
                if (!(n.renderingIntent & y)) {
                    throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` " + "and `PDFDocumentProxy.getOptionalContentConfig` methods.");
                }
                x.initializeGraphics({
                    transparency: r,
                    optionalContentConfig: n
                });
                x.operatorListChanged();
            }))["catch"](k);
            return E;
        };
        e.getOperatorList = function l() {
            var {intent: t = "display", annotationMode: e = z.ENABLE, printAnnotationStorage: r = null, isEditing: i = false} = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            function n() {
                if (s.operatorList.lastChunk) {
                    s.opListReadCapability.resolve(s.operatorList);
                    s.renderTasks["delete"](o);
                }
            }
            var a = this._transport.getRenderingIntent(t, e, r, i, true);
            var s = this._intentStates.get(a.cacheKey);
            if (!s) {
                s = Object.create(null);
                this._intentStates.set(a.cacheKey, s);
            }
            var o;
            if (!s.opListReadCapability) {
                var l;
                o = Object.create(null);
                o.operatorListChanged = n;
                s.opListReadCapability = Promise.withResolvers();
                (s.renderTasks ||= new Set).add(o);
                s.operatorList = {
                    fnArray: [],
                    argsArray: [],
                    lastChunk: false,
                    separateAnnots: null
                };
                (l = this._stats) === null || l === void 0 ? void 0 : l.time("Page Request");
                this._pumpOperatorList(a);
            }
            return s.opListReadCapability.promise;
        };
        e.streamTextContent = function c() {
            var {includeMarkedContent: t = false, disableNormalization: e = false} = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var r = 100;
            return this._transport.messageHandler.sendWithStream("GetTextContent", {
                pageIndex: this._pageIndex,
                includeMarkedContent: t === true,
                disableNormalization: e === true
            }, {
                highWaterMark: r,
                size: function(t) {
                    return t.items.length;
                }
            });
        };
        e.getTextContent = function f() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            if (this._transport._htmlForXfa) {
                return this.getXfa().then((function(t) {
                    return zl.textContent(t);
                }));
            }
            var e = this.streamTextContent(t);
            return new Promise((function(t, r) {
                function i() {
                    n.read().then((function(e) {
                        var r;
                        var {value: n, done: s} = e;
                        if (s) {
                            t(a);
                            return;
                        }
                        a.lang ??= n.lang;
                        Object.assign(a.styles, n.styles);
                        (r = a.items).push.apply(r, n.items);
                        i();
                    }), r);
                }
                var n = e.getReader();
                var a = {
                    items: [],
                    styles: Object.create(null),
                    lang: null
                };
                i();
            }));
        };
        e.getStructTree = function p() {
            return this._transport.getStructTree(this._pageIndex);
        };
        e._destroy = function g() {
            this.destroyed = true;
            var t = [];
            for (var e of this._intentStates.values()) {
                this._abortOperatorList({
                    intentState: e,
                    reason: new Error("Page was destroyed."),
                    force: true
                });
                if (e.opListReadCapability) {
                    continue;
                }
                for (var r of e.renderTasks) {
                    t.push(r.completed);
                    r.cancel();
                }
            }
            this.objs.clear();
            h(eu, this, false);
            return Promise.all(t);
        };
        e.cleanup = function m() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            h(eu, this, true);
            var e = r(ru, this, nu).call(this);
            if (t && e) {
                this._stats &&= new Qt;
            }
            return e;
        };
        e._startRenderPage = function y(t, e) {
            var r, i;
            var n = this._intentStates.get(e);
            if (!n) {
                return;
            }
            (r = this._stats) === null || r === void 0 ? void 0 : r.timeEnd("Page Request");
            (i = n.displayReadyCapability) === null || i === void 0 ? void 0 : i.resolve(t);
        };
        e._renderPageChunk = function w(t, e) {
            for (var i = 0, n = t.length; i < n; i++) {
                e.operatorList.fnArray.push(t.fnArray[i]);
                e.operatorList.argsArray.push(t.argsArray[i]);
            }
            e.operatorList.lastChunk = t.lastChunk;
            e.operatorList.separateAnnots = t.separateAnnots;
            for (var a of e.renderTasks) {
                a.operatorListChanged();
            }
            if (t.lastChunk) {
                r(ru, this, nu).call(this);
            }
        };
        e._pumpOperatorList = function b(t) {
            var e = this;
            var {renderingIntent: i, cacheKey: n, annotationStorageSerializable: a, modifiedIds: s} = t;
            var {map: o, transfer: l} = a;
            var u = this._transport.messageHandler.sendWithStream("GetOperatorList", {
                pageIndex: this._pageIndex,
                intent: i,
                cacheKey: n,
                annotationStorage: o,
                modifiedIds: s
            }, l);
            var h = u.getReader();
            var c = this._intentStates.get(n);
            c.streamReader = h;
            var d = function() {
                h.read().then((function(t) {
                    var {value: r, done: i} = t;
                    if (i) {
                        c.streamReader = null;
                        return;
                    }
                    if (e._transport.destroyed) {
                        return;
                    }
                    e._renderPageChunk(r, c);
                    d();
                }), (function(t) {
                    c.streamReader = null;
                    if (e._transport.destroyed) {
                        return;
                    }
                    if (c.operatorList) {
                        c.operatorList.lastChunk = true;
                        for (var i of c.renderTasks) {
                            i.operatorListChanged();
                        }
                        r(ru, e, nu).call(e);
                    }
                    if (c.displayReadyCapability) {
                        c.displayReadyCapability.reject(t);
                    } else if (c.opListReadCapability) {
                        c.opListReadCapability.reject(t);
                    } else {
                        throw t;
                    }
                }));
            };
            d();
        };
        e._abortOperatorList = function A(t) {
            var e = this;
            var {intentState: r, reason: i, force: n = false} = t;
            if (!r.streamReader) {
                return;
            }
            if (r.streamReaderCancelTimeout) {
                clearTimeout(r.streamReaderCancelTimeout);
                r.streamReaderCancelTimeout = null;
            }
            if (!n) {
                if (r.renderTasks.size > 0) {
                    return;
                }
                if (i instanceof Vt) {
                    var a = Gl;
                    if (i.extraDelay > 0 && i.extraDelay < 1e3) {
                        a += i.extraDelay;
                    }
                    r.streamReaderCancelTimeout = setTimeout((function() {
                        r.streamReaderCancelTimeout = null;
                        e._abortOperatorList({
                            intentState: r,
                            reason: i,
                            force: true
                        });
                    }), a);
                    return;
                }
            }
            r.streamReader.cancel(new wt(i.message))["catch"]((function() {}));
            r.streamReader = null;
            if (this._transport.destroyed) {
                return;
            }
            for (var [s, o] of this._intentStates) {
                if (o === r) {
                    this._intentStates["delete"](s);
                    break;
                }
            }
            this.cleanup();
        };
        return v(t, [ {
            key: "pageNumber",
            get: function() {
                return this._pageIndex + 1;
            }
        }, {
            key: "rotate",
            get: function() {
                return this._pageInfo.rotate;
            }
        }, {
            key: "ref",
            get: function() {
                return this._pageInfo.ref;
            }
        }, {
            key: "userUnit",
            get: function() {
                return this._pageInfo.userUnit;
            }
        }, {
            key: "view",
            get: function() {
                return this._pageInfo.view;
            }
        }, {
            key: "filterFactory",
            get: function() {
                return this._transport.filterFactory;
            }
        }, {
            key: "isPureXfa",
            get: function() {
                return dt(this, "isPureXfa", !!this._transport._htmlForXfa);
            }
        }, {
            key: "stats",
            get: function() {
                return this._stats;
            }
        } ]);
    }();
    function nu() {
        if (!l(eu, this) || this.destroyed) {
            return false;
        }
        for (var {renderTasks: t, operatorList: e} of this._intentStates.values()) {
            if (t.size > 0 || !e.lastChunk) {
                return false;
            }
        }
        this._intentStates.clear();
        this.objs.clear();
        h(eu, this, false);
        return true;
    }
    var au = new WeakMap;
    var su = new WeakMap;
    var ou = new WeakMap;
    var lu = new WeakMap;
    var uu = new WeakSet;
    var hu = function() {
        function t() {
            var {name: t = null, port: e = null, verbosity: i = nt()} = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            d(this, uu);
            u(this, au, Promise.withResolvers());
            u(this, su, null);
            u(this, ou, null);
            u(this, lu, null);
            this.name = t;
            this.destroyed = false;
            this.verbosity = i;
            if (e) {
                if (yu._.has(e)) {
                    throw new Error("Cannot use more than one PDFWorker per port.");
                }
                yu._.set(e, this);
                r(uu, this, du).call(this, e);
            } else {
                r(uu, this, fu).call(this);
            }
        }
        var e = t.prototype;
        e.destroy = function i() {
            var t, e;
            this.destroyed = true;
            (t = l(lu, this)) === null || t === void 0 ? void 0 : t.terminate();
            h(lu, this, null);
            yu._["delete"](l(ou, this));
            h(ou, this, null);
            (e = l(su, this)) === null || e === void 0 ? void 0 : e.destroy();
            h(su, this, null);
        };
        t.create = function n(e) {
            var i = r(t, this, yu)._.get(e === null || e === void 0 ? void 0 : e.port);
            if (i) {
                if (i._pendingDestroy) {
                    throw new Error("PDFWorker.create - the worker is being destroyed.\n" + "Please remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
                }
                return i;
            }
            return new t(e);
        };
        return v(t, [ {
            key: "promise",
            get: function() {
                return l(au, this).promise;
            }
        }, {
            key: "port",
            get: function() {
                return l(ou, this);
            }
        }, {
            key: "messageHandler",
            get: function() {
                return l(su, this);
            }
        } ], [ {
            key: "workerSrc",
            get: function() {
                if (co.workerSrc) {
                    return co.workerSrc;
                }
                throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
            }
        }, {
            key: "_setupFakeWorkerGlobal",
            get: function() {
                var e = this;
                var r = function() {
                    var r = s((function*() {
                        if (c(t, e, pu)) {
                            return c(t, e, pu);
                        }
                        var r = yield import(e.workerSrc);
                        return r.WorkerMessageHandler;
                    }));
                    return function i() {
                        return r.apply(this, arguments);
                    };
                }();
                return dt(this, "_setupFakeWorkerGlobal", r());
            }
        } ]);
    }();
    T = hu;
    function cu() {
        l(au, this).resolve();
        l(su, this).send("configure", {
            verbosity: this.verbosity
        });
    }
    function du(t) {
        h(ou, this, t);
        h(su, this, new Ra("main", "worker", t));
        l(su, this).on("ready", (function() {}));
        r(uu, this, cu).call(this);
    }
    function fu() {
        var t = this;
        if (mu._ || pu()) {
            r(uu, this, vu).call(this);
            return;
        }
        var {workerSrc: e} = T;
        try {
            if (!T._isSameOrigin(window.location, e)) {
                e = T._createCDNWrapper(new URL(e, window.location).href);
            }
            var i = new Worker(e, {
                type: "module"
            });
            var n = new Ra("main", "worker", i);
            var a = function() {
                s.abort();
                n.destroy();
                i.terminate();
                if (t.destroyed) {
                    l(au, t).reject(new Error("Worker was destroyed"));
                } else {
                    r(uu, t, vu).call(t);
                }
            };
            var s = new AbortController;
            i.addEventListener("error", (function() {
                if (!l(lu, t)) {
                    a();
                }
            }), {
                signal: s.signal
            });
            n.on("test", (function(e) {
                s.abort();
                if (t.destroyed || !e) {
                    a();
                    return;
                }
                h(su, t, n);
                h(ou, t, i);
                h(lu, t, i);
                r(uu, t, cu).call(t);
            }));
            n.on("ready", (function(e) {
                s.abort();
                if (t.destroyed) {
                    a();
                    return;
                }
                try {
                    o();
                } catch {
                    r(uu, t, vu).call(t);
                }
            }));
            var o = function() {
                var t = new Uint8Array;
                n.send("test", t, [ t.buffer ]);
            };
            o();
            return;
        } catch {
            at("The worker has been disabled.");
        }
        r(uu, this, vu).call(this);
    }
    function vu() {
        var t = this;
        if (!mu._) {
            st("Setting up fake worker.");
            mu._ = true;
        }
        T._setupFakeWorkerGlobal.then((function(e) {
            var i, n;
            if (t.destroyed) {
                l(au, t).reject(new Error("Worker was destroyed"));
                return;
            }
            var a = new ka;
            h(ou, t, a);
            var s = "fake" + (gu._ = (i = gu._, n = i++, i), n);
            var o = new Ra(s + "_worker", s, a);
            e.setup(o, a);
            h(su, t, new Ra(s, s + "_worker", a));
            r(uu, t, cu).call(t);
        }))["catch"]((function(e) {
            l(au, t).reject(new Error('Setting up fake worker failed: "' + e.message + '".'));
        }));
    }
    function pu(t) {
        try {
            var e;
            return ((e = globalThis.pdfjsWorker) === null || e === void 0 ? void 0 : e.WorkerMessageHandler) || null;
        } catch {
            return null;
        }
    }
    var gu = {
        _: 0
    };
    var mu = {
        _: false
    };
    var yu = {
        _: new WeakMap
    };
    (function() {
        if (B) {
            mu._ = r(T, T, true);
            co.workerSrc ||= "./pdf.worker.mjs";
        }
        T._isSameOrigin = function(t, e) {
            var r = URL.parse(t);
            if (!(r !== null && r !== void 0 && r.origin) || r.origin === "null") {
                return false;
            }
            var i = new URL(e, r);
            return r.origin === i.origin;
        };
        T._createCDNWrapper = function(t) {
            var e = 'await import("' + t + '");';
            return URL.createObjectURL(new Blob([ e ], {
                type: "text/javascript"
            }));
        };
        T.fromPort = function(t) {
            te("`PDFWorker.fromPort` - please use `PDFWorker.create` instead.");
            if (!(t !== null && t !== void 0 && t.port)) {
                throw new Error("PDFWorker.fromPort - invalid method signature.");
            }
            return T.create(t);
        };
    })();
    var wu = new WeakMap;
    var bu = new WeakMap;
    var Au = new WeakMap;
    var _u = new WeakMap;
    var ku = new WeakMap;
    var xu = new WeakSet;
    var Eu = function() {
        function t(t, e, r, i, n, a) {
            d(this, xu);
            u(this, wu, new Map);
            u(this, bu, new Map);
            u(this, Au, new Map);
            u(this, _u, new Map);
            u(this, ku, null);
            this.messageHandler = t;
            this.loadingTask = e;
            this.commonObjs = new ol;
            this.fontLoader = new fa({
                ownerDocument: i.ownerDocument,
                styleElement: i.styleElement
            });
            this.loadingParams = i.loadingParams;
            this._params = i;
            this.canvasFactory = n.canvasFactory;
            this.filterFactory = n.filterFactory;
            this.cMapReaderFactory = n.cMapReaderFactory;
            this.standardFontDataFactory = n.standardFontDataFactory;
            this.wasmFactory = n.wasmFactory;
            this.destroyed = false;
            this.destroyCapability = null;
            this._networkStream = r;
            this._fullReader = null;
            this._lastProgress = null;
            this.downloadInfoCapability = Promise.withResolvers();
            this.enableHWA = a;
            this.setupMessageHandler();
        }
        var e = t.prototype;
        e.getRenderingIntent = function i(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : z.ENABLE;
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
            var a = U.DISPLAY;
            var s = ia;
            switch (t) {
              case "any":
                a = U.ANY;
                break;

              case "display":
                break;

              case "print":
                a = U.PRINT;
                break;

              default:
                st("getRenderingIntent - invalid intent: " + t);
            }
            var o = a & U.PRINT && r instanceof ca ? r : this.annotationStorage;
            switch (e) {
              case z.DISABLE:
                a += U.ANNOTATIONS_DISABLE;
                break;

              case z.ENABLE:
                break;

              case z.ENABLE_FORMS:
                a += U.ANNOTATIONS_FORMS;
                break;

              case z.ENABLE_STORAGE:
                a += U.ANNOTATIONS_STORAGE;
                s = o.serializable;
                break;

              default:
                st("getRenderingIntent - invalid annotationMode: " + e);
            }
            if (i) {
                a += U.IS_EDITING;
            }
            if (n) {
                a += U.OPLIST;
            }
            var {ids: l, hash: u} = o.modifiedIds;
            var h = [ a, s.hash, u ];
            return {
                renderingIntent: a,
                cacheKey: h.join("_"),
                annotationStorageSerializable: s,
                modifiedIds: l
            };
        };
        e.destroy = function n() {
            var t, e = this;
            if (this.destroyCapability) {
                return this.destroyCapability.promise;
            }
            this.destroyed = true;
            this.destroyCapability = Promise.withResolvers();
            (t = l(ku, this)) === null || t === void 0 ? void 0 : t.reject(new Error("Worker was destroyed during onPassword callback"));
            var r = [];
            for (var i of l(bu, this).values()) {
                r.push(i._destroy());
            }
            l(bu, this).clear();
            l(Au, this).clear();
            l(_u, this).clear();
            if (this.hasOwnProperty("annotationStorage")) {
                this.annotationStorage.resetModified();
            }
            var n = this.messageHandler.sendWithPromise("Terminate", null);
            r.push(n);
            Promise.all(r).then((function() {
                var t, r;
                e.commonObjs.clear();
                e.fontLoader.clear();
                l(wu, e).clear();
                e.filterFactory.destroy();
                Rl.cleanup();
                (t = e._networkStream) === null || t === void 0 ? void 0 : t.cancelAllRequests(new wt("Worker was terminated."));
                (r = e.messageHandler) === null || r === void 0 ? void 0 : r.destroy();
                e.messageHandler = null;
                e.destroyCapability.resolve();
            }), this.destroyCapability.reject);
            return this.destroyCapability.promise;
        };
        e.setupMessageHandler = function a() {
            var t = this;
            var {messageHandler: e, loadingTask: r} = this;
            e.on("GetReader", (function(e, r) {
                lt(t._networkStream, "GetReader - no `IPDFStream` instance available.");
                t._fullReader = t._networkStream.getFullReader();
                t._fullReader.onProgress = function(e) {
                    t._lastProgress = {
                        loaded: e.loaded,
                        total: e.total
                    };
                };
                r.onPull = function() {
                    t._fullReader.read().then((function(t) {
                        var {value: e, done: i} = t;
                        if (i) {
                            r.close();
                            return;
                        }
                        lt(e instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer.");
                        r.enqueue(new Uint8Array(e), 1, [ e ]);
                    }))["catch"]((function(t) {
                        r.error(t);
                    }));
                };
                r.onCancel = function(e) {
                    t._fullReader.cancel(e);
                    r.ready["catch"]((function(e) {
                        if (t.destroyed) {
                            return;
                        }
                        throw e;
                    }));
                };
            }));
            e.on("ReaderHeadersReady", function() {
                var e = s((function*(e) {
                    yield t._fullReader.headersReady;
                    var {isStreamingSupported: i, isRangeSupported: n, contentLength: a} = t._fullReader;
                    if (!i || !n) {
                        if (t._lastProgress) {
                            var s;
                            (s = r.onProgress) === null || s === void 0 ? void 0 : s.call(r, t._lastProgress);
                        }
                        t._fullReader.onProgress = function(t) {
                            var e;
                            (e = r.onProgress) === null || e === void 0 ? void 0 : e.call(r, {
                                loaded: t.loaded,
                                total: t.total
                            });
                        };
                    }
                    return {
                        isStreamingSupported: i,
                        isRangeSupported: n,
                        contentLength: a
                    };
                }));
                return function(t) {
                    return e.apply(this, arguments);
                };
            }());
            e.on("GetRangeReader", (function(e, r) {
                lt(t._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
                var i = t._networkStream.getRangeReader(e.begin, e.end);
                if (!i) {
                    r.close();
                    return;
                }
                r.onPull = function() {
                    i.read().then((function(t) {
                        var {value: e, done: i} = t;
                        if (i) {
                            r.close();
                            return;
                        }
                        lt(e instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer.");
                        r.enqueue(new Uint8Array(e), 1, [ e ]);
                    }))["catch"]((function(t) {
                        r.error(t);
                    }));
                };
                r.onCancel = function(e) {
                    i.cancel(e);
                    r.ready["catch"]((function(e) {
                        if (t.destroyed) {
                            return;
                        }
                        throw e;
                    }));
                };
            }));
            e.on("GetDoc", (function(e) {
                var {pdfInfo: i} = e;
                t._numPages = i.numPages;
                t._htmlForXfa = i.htmlForXfa;
                delete i.htmlForXfa;
                r._capability.resolve(new tu(i, t));
            }));
            e.on("DocException", (function(t) {
                r._capability.reject(Ma(t));
            }));
            e.on("PasswordRequest", (function(e) {
                h(ku, t, Promise.withResolvers());
                try {
                    if (!r.onPassword) {
                        throw Ma(e);
                    }
                    var i = function(e) {
                        if (e instanceof Error) {
                            l(ku, t).reject(e);
                        } else {
                            l(ku, t).resolve({
                                password: e
                            });
                        }
                    };
                    r.onPassword(i, e.code);
                } catch (n) {
                    l(ku, t).reject(n);
                }
                return l(ku, t).promise;
            }));
            e.on("DataLoaded", (function(e) {
                var i;
                (i = r.onProgress) === null || i === void 0 ? void 0 : i.call(r, {
                    loaded: e.length,
                    total: e.length
                });
                t.downloadInfoCapability.resolve(e);
            }));
            e.on("StartRenderPage", (function(e) {
                if (t.destroyed) {
                    return;
                }
                var r = l(bu, t).get(e.pageIndex);
                r._startRenderPage(e.transparency, e.cacheKey);
            }));
            e.on("commonobj", (function(r) {
                var i;
                var [n, a, s] = r;
                if (t.destroyed) {
                    return null;
                }
                if (t.commonObjs.has(n)) {
                    return null;
                }
                switch (a) {
                  case "Font":
                    if ("error" in s) {
                        var o = s.error;
                        st("Error during font loading: " + o);
                        t.commonObjs.resolve(n, o);
                        break;
                    }
                    var u = t._params.pdfBug && (i = globalThis.FontInspector) !== null && i !== void 0 && i.enabled ? function(t, e) {
                        return globalThis.FontInspector.fontAdded(t, e);
                    } : null;
                    var h = new va(s, u);
                    t.fontLoader.bind(h)["catch"]((function() {
                        return e.sendWithPromise("FontFallback", {
                            id: n
                        });
                    }))["finally"]((function() {
                        if (!h.fontExtraProperties && h.data) {
                            h.data = null;
                        }
                        t.commonObjs.resolve(n, h);
                    }));
                    break;

                  case "CopyLocalImage":
                    var {imageRef: c} = s;
                    lt(c, "The imageRef must be defined.");
                    for (var d of l(bu, t).values()) {
                        for (var [, f] of d.objs) {
                            if ((f === null || f === void 0 ? void 0 : f.ref) !== c) {
                                continue;
                            }
                            if (!f.dataLen) {
                                return null;
                            }
                            t.commonObjs.resolve(n, structuredClone(f));
                            return f.dataLen;
                        }
                    }
                    break;

                  case "FontPath":
                  case "Image":
                  case "Pattern":
                    t.commonObjs.resolve(n, s);
                    break;

                  default:
                    throw new Error("Got unknown common object type " + a);
                }
                return null;
            }));
            e.on("obj", (function(e) {
                var [r, i, n, a] = e;
                if (t.destroyed) {
                    return;
                }
                var s = l(bu, t).get(i);
                if (s.objs.has(r)) {
                    return;
                }
                if (s._intentStates.size === 0) {
                    var o;
                    a === null || a === void 0 ? void 0 : (o = a.bitmap) === null || o === void 0 ? void 0 : o.close();
                    return;
                }
                switch (n) {
                  case "Image":
                  case "Pattern":
                    s.objs.resolve(r, a);
                    break;

                  default:
                    throw new Error("Got unknown object type " + n);
                }
            }));
            e.on("DocProgress", (function(e) {
                var i;
                if (t.destroyed) {
                    return;
                }
                (i = r.onProgress) === null || i === void 0 ? void 0 : i.call(r, {
                    loaded: e.loaded,
                    total: e.total
                });
            }));
            e.on("FetchBinaryData", function() {
                var e = s((function*(e) {
                    if (t.destroyed) {
                        throw new Error("Worker was destroyed.");
                    }
                    var r = t[e.type];
                    if (!r) {
                        throw new Error(e.type + " not initialized, see the `useWorkerFetch` parameter.");
                    }
                    return r.fetch(e);
                }));
                return function(t) {
                    return e.apply(this, arguments);
                };
            }());
        };
        e.getData = function o() {
            return this.messageHandler.sendWithPromise("GetData", null);
        };
        e.saveDocument = function c() {
            var t, e, r = this;
            if (this.annotationStorage.size <= 0) {
                st("saveDocument called while `annotationStorage` is empty, " + "please use the getData-method instead.");
            }
            var {map: i, transfer: n} = this.annotationStorage.serializable;
            return this.messageHandler.sendWithPromise("SaveDocument", {
                isPureXfa: !!this._htmlForXfa,
                numPages: this._numPages,
                annotationStorage: i,
                filename: (t = (e = this._fullReader) === null || e === void 0 ? void 0 : e.filename) !== null && t !== void 0 ? t : null
            }, n)["finally"]((function() {
                r.annotationStorage.resetModified();
            }));
        };
        e.getPage = function f(t) {
            var e = this;
            if (!Number.isInteger(t) || t <= 0 || t > this._numPages) {
                return Promise.reject(new Error("Invalid page request."));
            }
            var r = t - 1, i = l(Au, this).get(r);
            if (i) {
                return i;
            }
            var n = this.messageHandler.sendWithPromise("GetPage", {
                pageIndex: r
            }).then((function(i) {
                if (e.destroyed) {
                    throw new Error("Transport destroyed");
                }
                if (i.refStr) {
                    l(_u, e).set(i.refStr, t);
                }
                var n = new iu(r, i, e, e._params.pdfBug);
                l(bu, e).set(r, n);
                return n;
            }));
            l(Au, this).set(r, n);
            return n;
        };
        e.getPageIndex = function p(t) {
            if (!ya(t)) {
                return Promise.reject(new Error("Invalid pageIndex request."));
            }
            return this.messageHandler.sendWithPromise("GetPageIndex", {
                num: t.num,
                gen: t.gen
            });
        };
        e.getAnnotations = function g(t, e) {
            return this.messageHandler.sendWithPromise("GetAnnotations", {
                pageIndex: t,
                intent: e
            });
        };
        e.getFieldObjects = function m() {
            return r(xu, this, Su).call(this, "GetFieldObjects");
        };
        e.hasJSActions = function y() {
            return r(xu, this, Su).call(this, "HasJSActions");
        };
        e.getCalculationOrderIds = function w() {
            return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
        };
        e.getDestinations = function b() {
            return this.messageHandler.sendWithPromise("GetDestinations", null);
        };
        e.getDestination = function A(t) {
            if (typeof t !== "string") {
                return Promise.reject(new Error("Invalid destination request."));
            }
            return this.messageHandler.sendWithPromise("GetDestination", {
                id: t
            });
        };
        e.getPageLabels = function _() {
            return this.messageHandler.sendWithPromise("GetPageLabels", null);
        };
        e.getPageLayout = function k() {
            return this.messageHandler.sendWithPromise("GetPageLayout", null);
        };
        e.getPageMode = function x() {
            return this.messageHandler.sendWithPromise("GetPageMode", null);
        };
        e.getViewerPreferences = function E() {
            return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
        };
        e.getOpenAction = function S() {
            return this.messageHandler.sendWithPromise("GetOpenAction", null);
        };
        e.getAttachments = function M() {
            return this.messageHandler.sendWithPromise("GetAttachments", null);
        };
        e.getDocJSActions = function C() {
            return r(xu, this, Su).call(this, "GetDocJSActions");
        };
        e.getPageJSActions = function T(t) {
            return this.messageHandler.sendWithPromise("GetPageJSActions", {
                pageIndex: t
            });
        };
        e.getStructTree = function R(t) {
            return this.messageHandler.sendWithPromise("GetStructTree", {
                pageIndex: t
            });
        };
        e.getOutline = function I() {
            return this.messageHandler.sendWithPromise("GetOutline", null);
        };
        e.getOptionalContentConfig = function P(t) {
            return r(xu, this, Su).call(this, "GetOptionalContentConfig").then((function(e) {
                return new To(e, t);
            }));
        };
        e.getPermissions = function L() {
            return this.messageHandler.sendWithPromise("GetPermissions", null);
        };
        e.getMetadata = function D() {
            var t = this;
            var e = "GetMetadata", r = l(wu, this).get(e);
            if (r) {
                return r;
            }
            var i = this.messageHandler.sendWithPromise(e, null).then((function(e) {
                var r, i, n, a;
                return {
                    info: e[0],
                    metadata: e[1] ? new mo(e[1]) : null,
                    contentDispositionFilename: (r = (i = t._fullReader) === null || i === void 0 ? void 0 : i.filename) !== null && r !== void 0 ? r : null,
                    contentLength: (n = (a = t._fullReader) === null || a === void 0 ? void 0 : a.contentLength) !== null && n !== void 0 ? n : null
                };
            }));
            l(wu, this).set(e, i);
            return i;
        };
        e.getMarkInfo = function N() {
            return this.messageHandler.sendWithPromise("GetMarkInfo", null);
        };
        e.startCleanup = function() {
            var t = s((function() {
                var t = this;
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                return function*() {
                    if (t.destroyed) {
                        return;
                    }
                    yield t.messageHandler.sendWithPromise("Cleanup", null);
                    for (var r of l(bu, t).values()) {
                        var i = r.cleanup();
                        if (!i) {
                            throw new Error("startCleanup: Page " + r.pageNumber + " is currently rendering.");
                        }
                    }
                    t.commonObjs.clear();
                    if (!e) {
                        t.fontLoader.clear();
                    }
                    l(wu, t).clear();
                    t.filterFactory.destroy(true);
                    Rl.cleanup();
                }();
            }));
            function e() {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.cachedPageNumber = function O(t) {
            var e;
            if (!ya(t)) {
                return null;
            }
            var r = t.gen === 0 ? t.num + "R" : t.num + "R" + t.gen;
            return (e = l(_u, this).get(r)) !== null && e !== void 0 ? e : null;
        };
        return v(t, [ {
            key: "annotationStorage",
            get: function() {
                return dt(this, "annotationStorage", new la);
            }
        } ]);
    }();
    function Su(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var r = l(wu, this).get(t);
        if (r) {
            return r;
        }
        var i = this.messageHandler.sendWithPromise(t, e);
        l(wu, this).set(t, i);
        return i;
    }
    var Mu = new WeakMap;
    var Cu = function() {
        function t(t) {
            u(this, Mu, null);
            p(this, "onContinue", null);
            p(this, "onError", null);
            h(Mu, this, t);
        }
        var e = t.prototype;
        e.cancel = function r() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            l(Mu, this).cancel(null, t);
        };
        return v(t, [ {
            key: "promise",
            get: function() {
                return l(Mu, this).capability.promise;
            }
        }, {
            key: "separateAnnots",
            get: function() {
                var {separateAnnots: t} = l(Mu, this).operatorList;
                if (!t) {
                    return false;
                }
                var {annotationCanvasMap: e} = l(Mu, this);
                return t.form || t.canvas && (e === null || e === void 0 ? void 0 : e.size) > 0;
            }
        } ]);
    }();
    var Tu = new WeakMap;
    var Ru = function() {
        function t(t) {
            var {callback: e, params: r, objs: i, commonObjs: n, annotationCanvasMap: a, operatorList: s, pageIndex: o, canvasFactory: l, filterFactory: h, useRequestAnimationFrame: c = false, pdfBug: d = false, pageColors: f = null, enableHWA: v = false} = t;
            u(this, Tu, null);
            this.callback = e;
            this.params = r;
            this.objs = i;
            this.commonObjs = n;
            this.annotationCanvasMap = a;
            this.operatorListIdx = null;
            this.operatorList = s;
            this._pageIndex = o;
            this.canvasFactory = l;
            this.filterFactory = h;
            this._pdfBug = d;
            this.pageColors = f;
            this.running = false;
            this.graphicsReadyCallback = null;
            this.graphicsReady = false;
            this._useRequestAnimationFrame = c === true && typeof window !== "undefined";
            this.cancelled = false;
            this.capability = Promise.withResolvers();
            this.task = new Cu(this);
            this._cancelBound = this.cancel.bind(this);
            this._continueBound = this._continue.bind(this);
            this._scheduleNextBound = this._scheduleNext.bind(this);
            this._nextBound = this._next.bind(this);
            this._canvas = r.canvas;
            this._canvasContext = r.canvas ? null : r.canvasContext;
            this._enableHWA = v;
        }
        var e = t.prototype;
        e.initializeGraphics = function r(t) {
            var e, r;
            var {transparency: i = false, optionalContentConfig: n} = t;
            if (this.cancelled) {
                return;
            }
            if (this._canvas) {
                if (Iu._.has(this._canvas)) {
                    throw new Error("Cannot use the same canvas during multiple render() operations. " + "Use different canvas or ensure previous operations were " + "cancelled or completed.");
                }
                Iu._.add(this._canvas);
            }
            if (this._pdfBug && (e = globalThis.StepperManager) !== null && e !== void 0 && e.enabled) {
                this.stepper = globalThis.StepperManager.create(this._pageIndex);
                this.stepper.init(this.operatorList);
                this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
            }
            var {viewport: a, transform: s, background: o} = this.params;
            var l = this._canvasContext || this._canvas.getContext("2d", {
                alpha: false,
                willReadFrequently: !this._enableHWA
            });
            this.gfx = new so(l, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                optionalContentConfig: n
            }, this.annotationCanvasMap, this.pageColors);
            this.gfx.beginDrawing({
                transform: s,
                viewport: a,
                transparency: i,
                background: o
            });
            this.operatorListIdx = 0;
            this.graphicsReady = true;
            (r = this.graphicsReadyCallback) === null || r === void 0 ? void 0 : r.call(this);
        };
        e.cancel = function i() {
            var t, e, r;
            var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            this.running = false;
            this.cancelled = true;
            (t = this.gfx) === null || t === void 0 ? void 0 : t.endDrawing();
            if (l(Tu, this)) {
                window.cancelAnimationFrame(l(Tu, this));
                h(Tu, this, null);
            }
            Iu._["delete"](this._canvas);
            i ||= new Vt("Rendering cancelled, page " + (this._pageIndex + 1), n);
            this.callback(i);
            (e = (r = this.task).onError) === null || e === void 0 ? void 0 : e.call(r, i);
        };
        e.operatorListChanged = function n() {
            var t;
            if (!this.graphicsReady) {
                this.graphicsReadyCallback ||= this._continueBound;
                return;
            }
            (t = this.stepper) === null || t === void 0 ? void 0 : t.updateOperatorList(this.operatorList);
            if (this.running) {
                return;
            }
            this._continue();
        };
        e._continue = function a() {
            this.running = true;
            if (this.cancelled) {
                return;
            }
            if (this.task.onContinue) {
                this.task.onContinue(this._scheduleNextBound);
            } else {
                this._scheduleNext();
            }
        };
        e._scheduleNext = function o() {
            var t = this;
            if (this._useRequestAnimationFrame) {
                h(Tu, this, window.requestAnimationFrame((function() {
                    h(Tu, t, null);
                    t._nextBound()["catch"](t._cancelBound);
                })));
            } else {
                Promise.resolve().then(this._nextBound)["catch"](this._cancelBound);
            }
        };
        e._next = function() {
            var t = s((function*() {
                if (this.cancelled) {
                    return;
                }
                this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);
                if (this.operatorListIdx === this.operatorList.argsArray.length) {
                    this.running = false;
                    if (this.operatorList.lastChunk) {
                        this.gfx.endDrawing();
                        Iu._["delete"](this._canvas);
                        this.callback();
                    }
                }
            }));
            function e() {
                return t.apply(this, arguments);
            }
            return e;
        }();
        return v(t, [ {
            key: "completed",
            get: function() {
                return this.capability.promise["catch"]((function() {}));
            }
        } ]);
    }();
    var Iu = {
        _: new WeakSet
    };
    var Pu = "5.4.78";
    var Lu = "e9a483014";
    var Du = new WeakMap;
    var Nu = new WeakMap;
    var Ou = new WeakMap;
    var Fu = new WeakMap;
    var Wu = new WeakMap;
    var Bu = new WeakMap;
    var ju = new WeakMap;
    var Hu = new WeakMap;
    var Uu = new WeakMap;
    var zu = new WeakMap;
    var Gu = new WeakSet;
    var Vu = function() {
        function t(t) {
            var e, r;
            var {editor: i = null, uiManager: n = null} = t;
            d(this, Gu);
            u(this, Du, null);
            u(this, Nu, null);
            u(this, Ou, void 0);
            u(this, Fu, null);
            u(this, Wu, false);
            u(this, Bu, false);
            u(this, ju, null);
            u(this, Hu, void 0);
            u(this, Uu, null);
            u(this, zu, null);
            if (i) {
                h(Bu, this, false);
                h(ju, this, i);
            } else {
                h(Bu, this, true);
            }
            h(zu, this, (i === null || i === void 0 ? void 0 : i._uiManager) || n);
            h(Hu, this, l(zu, this)._eventBus);
            h(Ou, this, (i === null || i === void 0 ? void 0 : (e = i.color) === null || e === void 0 ? void 0 : e.toUpperCase()) || ((r = l(zu, this)) === null || r === void 0 ? void 0 : r.highlightColors.values().next().value) || "#FFFF98");
            Zu._ || (Zu._ = Object.freeze({
                blue: "pdfjs-editor-colorpicker-blue",
                green: "pdfjs-editor-colorpicker-green",
                pink: "pdfjs-editor-colorpicker-pink",
                red: "pdfjs-editor-colorpicker-red",
                yellow: "pdfjs-editor-colorpicker-yellow"
            }));
        }
        var e = t.prototype;
        e.renderButton = function i() {
            var t = h(Du, this, document.createElement("button"));
            t.className = "colorPicker";
            t.tabIndex = "0";
            t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button");
            t.ariaHasPopup = "true";
            if (l(ju, this)) {
                t.ariaControls = l(ju, this).id + "_colorpicker_dropdown";
            }
            var e = l(zu, this)._signal;
            t.addEventListener("click", r(Gu, this, Ku).bind(this), {
                signal: e
            });
            t.addEventListener("keydown", r(Gu, this, Yu).bind(this), {
                signal: e
            });
            var i = h(Nu, this, document.createElement("span"));
            i.className = "swatch";
            i.ariaHidden = "true";
            i.style.backgroundColor = l(Ou, this);
            t.append(i);
            return t;
        };
        e.renderMainDropdown = function n() {
            var t = h(Fu, this, r(Gu, this, qu).call(this));
            t.ariaOrientation = "horizontal";
            t.ariaLabelledBy = "highlightColorPickerLabel";
            return t;
        };
        e._colorSelectFromKeyboard = function a(t) {
            if (t.target === l(Du, this)) {
                r(Gu, this, Ku).call(this, t);
                return;
            }
            var e = t.target.getAttribute("data-color");
            if (!e) {
                return;
            }
            r(Gu, this, Xu).call(this, e, t);
        };
        e._moveToNext = function s(t) {
            var e;
            if (!c(Gu, this, Ju)) {
                r(Gu, this, Ku).call(this, t);
                return;
            }
            if (t.target === l(Du, this)) {
                var i;
                (i = l(Fu, this).firstChild) === null || i === void 0 ? void 0 : i.focus();
                return;
            }
            (e = t.target.nextSibling) === null || e === void 0 ? void 0 : e.focus();
        };
        e._moveToPrevious = function o(t) {
            var e, i;
            if (t.target === ((e = l(Fu, this)) === null || e === void 0 ? void 0 : e.firstChild) || t.target === l(Du, this)) {
                if (c(Gu, this, Ju)) {
                    this._hideDropdownFromKeyboard();
                }
                return;
            }
            if (!c(Gu, this, Ju)) {
                r(Gu, this, Ku).call(this, t);
            }
            (i = t.target.previousSibling) === null || i === void 0 ? void 0 : i.focus();
        };
        e._moveToBeginning = function f(t) {
            var e;
            if (!c(Gu, this, Ju)) {
                r(Gu, this, Ku).call(this, t);
                return;
            }
            (e = l(Fu, this).firstChild) === null || e === void 0 ? void 0 : e.focus();
        };
        e._moveToEnd = function p(t) {
            var e;
            if (!c(Gu, this, Ju)) {
                r(Gu, this, Ku).call(this, t);
                return;
            }
            (e = l(Fu, this).lastChild) === null || e === void 0 ? void 0 : e.focus();
        };
        e.hideDropdown = function g() {
            var t, e;
            (t = l(Fu, this)) === null || t === void 0 ? void 0 : t.classList.add("hidden");
            l(Du, this).ariaExpanded = "false";
            (e = l(Uu, this)) === null || e === void 0 ? void 0 : e.abort();
            h(Uu, this, null);
        };
        e._hideDropdownFromKeyboard = function m() {
            if (l(Bu, this)) {
                return;
            }
            if (!c(Gu, this, Ju)) {
                var t;
                (t = l(ju, this)) === null || t === void 0 ? void 0 : t.unselect();
                return;
            }
            this.hideDropdown();
            l(Du, this).focus({
                preventScroll: true,
                focusVisible: l(Wu, this)
            });
        };
        e.updateColor = function y(t) {
            if (l(Nu, this)) {
                l(Nu, this).style.backgroundColor = t;
            }
            if (!l(Fu, this)) {
                return;
            }
            var e = l(zu, this).highlightColors.values();
            for (var r of l(Fu, this).children) {
                r.ariaSelected = e.next().value === t.toUpperCase();
            }
        };
        e.destroy = function w() {
            var t, e;
            (t = l(Du, this)) === null || t === void 0 ? void 0 : t.remove();
            h(Du, this, null);
            h(Nu, this, null);
            (e = l(Fu, this)) === null || e === void 0 ? void 0 : e.remove();
            h(Fu, this, null);
        };
        return v(t, null, [ {
            key: "_keyboardManager",
            get: function() {
                return dt(this, "_keyboardManager", new Qe([ [ [ "Escape", "mac+Escape" ], t.prototype._hideDropdownFromKeyboard ], [ [ " ", "mac+ " ], t.prototype._colorSelectFromKeyboard ], [ [ "ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight" ], t.prototype._moveToNext ], [ [ "ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft" ], t.prototype._moveToPrevious ], [ [ "Home", "mac+Home" ], t.prototype._moveToBeginning ], [ [ "End", "mac+End" ], t.prototype._moveToEnd ] ]));
            }
        } ]);
    }();
    R = Vu;
    function qu() {
        var t = document.createElement("div");
        var e = l(zu, this)._signal;
        t.addEventListener("contextmenu", Zt, {
            signal: e
        });
        t.className = "dropdown";
        t.role = "listbox";
        t.ariaMultiSelectable = "false";
        t.ariaOrientation = "vertical";
        t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
        if (l(ju, this)) {
            t.id = l(ju, this).id + "_colorpicker_dropdown";
        }
        for (var [i, n] of l(zu, this).highlightColors) {
            var a = document.createElement("button");
            a.tabIndex = "0";
            a.role = "option";
            a.setAttribute("data-color", n);
            a.title = i;
            a.setAttribute("data-l10n-id", Zu._[i]);
            var s = document.createElement("span");
            a.append(s);
            s.className = "swatch";
            s.style.backgroundColor = n;
            a.ariaSelected = n === l(Ou, this);
            a.addEventListener("click", r(Gu, this, Xu).bind(this, n), {
                signal: e
            });
            t.append(a);
        }
        t.addEventListener("keydown", r(Gu, this, Yu).bind(this), {
            signal: e
        });
        return t;
    }
    function Xu(t, e) {
        e.stopPropagation();
        l(Hu, this).dispatch("switchannotationeditorparams", {
            source: this,
            type: q.HIGHLIGHT_COLOR,
            value: t
        });
        this.updateColor(t);
    }
    function Yu(t) {
        R._keyboardManager.exec(this, t);
    }
    function Ku(t) {
        if (c(Gu, this, Ju)) {
            this.hideDropdown();
            return;
        }
        h(Wu, this, t.detail === 0);
        if (!l(Uu, this)) {
            h(Uu, this, new AbortController);
            window.addEventListener("pointerdown", r(Gu, this, Qu).bind(this), {
                signal: l(zu, this).combinedSignal(l(Uu, this))
            });
        }
        l(Du, this).ariaExpanded = "true";
        if (l(Fu, this)) {
            l(Fu, this).classList.remove("hidden");
            return;
        }
        var e = h(Fu, this, r(Gu, this, qu).call(this));
        l(Du, this).append(e);
    }
    function Qu(t) {
        var e;
        if ((e = l(Fu, this)) !== null && e !== void 0 && e.contains(t.target)) {
            return;
        }
        this.hideDropdown();
    }
    function Ju(t) {
        return l(Fu, t) && !l(Fu, t).classList.contains("hidden");
    }
    var Zu = {
        _: null
    };
    var $u = new WeakMap;
    var th = new WeakMap;
    var eh = new WeakMap;
    var rh = function() {
        function t(t) {
            u(this, $u, null);
            u(this, th, null);
            u(this, eh, null);
            h(th, this, t);
            h(eh, this, t._uiManager);
            ih._ || (ih._ = Object.freeze({
                freetext: "pdfjs-editor-color-picker-free-text-input",
                ink: "pdfjs-editor-color-picker-ink-input"
            }));
        }
        var e = t.prototype;
        e.renderButton = function r() {
            var t = this;
            if (l($u, this)) {
                return l($u, this);
            }
            var {editorType: e, colorType: r, colorValue: i} = l(th, this);
            var n = h($u, this, document.createElement("input"));
            n.type = "color";
            n.value = i || "#000000";
            n.className = "basicColorPicker";
            n.tabIndex = 0;
            n.setAttribute("data-l10n-id", ih._[e]);
            n.addEventListener("input", (function() {
                l(eh, t).updateParams(r, n.value);
            }), {
                signal: l(eh, this)._signal
            });
            return n;
        };
        e.update = function i(t) {
            if (!l($u, this)) {
                return;
            }
            l($u, this).value = t;
        };
        e.destroy = function n() {
            var t;
            (t = l($u, this)) === null || t === void 0 ? void 0 : t.remove();
            h($u, this, null);
        };
        e.hideDropdown = function a() {};
        return t;
    }();
    var ih = {
        _: null
    };
    W(531);
    function nh(t) {
        return Math.floor(Math.max(0, Math.min(1, t)) * 255).toString(16).padStart(2, "0");
    }
    function ah(t) {
        return Math.max(0, Math.min(255, 255 * t));
    }
    var sh = function() {
        function t() {}
        t.CMYK_G = function e(t) {
            var [e, r, i, n] = t;
            return [ "G", 1 - Math.min(1, .3 * e + .59 * i + .11 * r + n) ];
        };
        t.G_CMYK = function r(t) {
            var [e] = t;
            return [ "CMYK", 0, 0, 0, 1 - e ];
        };
        t.G_RGB = function i(t) {
            var [e] = t;
            return [ "RGB", e, e, e ];
        };
        t.G_rgb = function n(t) {
            var [e] = t;
            e = ah(e);
            return [ e, e, e ];
        };
        t.G_HTML = function a(t) {
            var [e] = t;
            var r = nh(e);
            return "#" + r + r + r;
        };
        t.RGB_G = function s(t) {
            var [e, r, i] = t;
            return [ "G", .3 * e + .59 * r + .11 * i ];
        };
        t.RGB_rgb = function o(t) {
            return t.map(ah);
        };
        t.RGB_HTML = function l(t) {
            return "#" + t.map(nh).join("");
        };
        t.T_HTML = function u() {
            return "#00000000";
        };
        t.T_rgb = function h() {
            return [ null ];
        };
        t.CMYK_RGB = function c(t) {
            var [e, r, i, n] = t;
            return [ "RGB", 1 - Math.min(1, e + n), 1 - Math.min(1, i + n), 1 - Math.min(1, r + n) ];
        };
        t.CMYK_rgb = function d(t) {
            var [e, r, i, n] = t;
            return [ ah(1 - Math.min(1, e + n)), ah(1 - Math.min(1, i + n)), ah(1 - Math.min(1, r + n)) ];
        };
        t.CMYK_HTML = function f(t) {
            var e = this.CMYK_RGB(t).slice(1);
            return this.RGB_HTML(e);
        };
        t.RGB_CMYK = function v(t) {
            var [e, r, i] = t;
            var n = 1 - e;
            var a = 1 - r;
            var s = 1 - i;
            var o = Math.min(n, a, s);
            return [ "CMYK", n, a, s, o ];
        };
        return t;
    }();
    var oh = function() {
        function t() {}
        var e = t.prototype;
        e.create = function r(t, e) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            if (t <= 0 || e <= 0) {
                throw new Error("Invalid SVG dimensions");
            }
            var i = this._createSVG("svg:svg");
            i.setAttribute("version", "1.1");
            if (!r) {
                i.setAttribute("width", t + "px");
                i.setAttribute("height", e + "px");
            }
            i.setAttribute("preserveAspectRatio", "none");
            i.setAttribute("viewBox", "0 0 " + t + " " + e);
            return i;
        };
        e.createElement = function i(t) {
            if (typeof t !== "string") {
                throw new Error("Invalid SVG element type");
            }
            return this._createSVG(t);
        };
        e._createSVG = function n(t) {
            ot("Abstract method `_createSVG` called.");
        };
        return t;
    }();
    var lh = function(t) {
        function e() {
            return t.apply(this, arguments) || this;
        }
        g(e, t);
        var r = e.prototype;
        r._createSVG = function i(t) {
            return document.createElementNS(jt, t);
        };
        return e;
    }(oh);
    var uh = function() {
        function t() {}
        t.setupStorage = function e(t, r, i, n, a) {
            var s = n.getValue(r, {
                value: null
            });
            switch (i.name) {
              case "textarea":
                if (s.value !== null) {
                    t.textContent = s.value;
                }
                if (a === "print") {
                    break;
                }
                t.addEventListener("input", (function(t) {
                    n.setValue(r, {
                        value: t.target.value
                    });
                }));
                break;

              case "input":
                if (i.attributes.type === "radio" || i.attributes.type === "checkbox") {
                    if (s.value === i.attributes.xfaOn) {
                        t.setAttribute("checked", true);
                    } else if (s.value === i.attributes.xfaOff) {
                        t.removeAttribute("checked");
                    }
                    if (a === "print") {
                        break;
                    }
                    t.addEventListener("change", (function(t) {
                        n.setValue(r, {
                            value: t.target.checked ? t.target.getAttribute("xfaOn") : t.target.getAttribute("xfaOff")
                        });
                    }));
                } else {
                    if (s.value !== null) {
                        t.setAttribute("value", s.value);
                    }
                    if (a === "print") {
                        break;
                    }
                    t.addEventListener("input", (function(t) {
                        n.setValue(r, {
                            value: t.target.value
                        });
                    }));
                }
                break;

              case "select":
                if (s.value !== null) {
                    t.setAttribute("value", s.value);
                    for (var o of i.children) {
                        if (o.attributes.value === s.value) {
                            o.attributes.selected = true;
                        } else if (o.attributes.hasOwnProperty("selected")) {
                            delete o.attributes.selected;
                        }
                    }
                }
                t.addEventListener("input", (function(t) {
                    var e = t.target.options;
                    var i = e.selectedIndex === -1 ? "" : e[e.selectedIndex].value;
                    n.setValue(r, {
                        value: i
                    });
                }));
                break;
            }
        };
        t.setAttributes = function r(t) {
            var {html: e, element: r, storage: i = null, intent: n, linkService: a} = t;
            var {attributes: s} = r;
            var o = e instanceof HTMLAnchorElement;
            if (s.type === "radio") {
                s.name = s.name + "-" + n;
            }
            for (var [l, u] of Object.entries(s)) {
                if (u === null || u === undefined) {
                    continue;
                }
                switch (l) {
                  case "class":
                    if (u.length) {
                        e.setAttribute(l, u.join(" "));
                    }
                    break;

                  case "dataId":
                    break;

                  case "id":
                    e.setAttribute("data-element-id", u);
                    break;

                  case "style":
                    Object.assign(e.style, u);
                    break;

                  case "textContent":
                    e.textContent = u;
                    break;

                  default:
                    if (!o || l !== "href" && l !== "newWindow") {
                        e.setAttribute(l, u);
                    }
                }
            }
            if (o) {
                a.addLinkAttributes(e, s.href, s.newWindow);
            }
            if (i && s.dataId) {
                this.setupStorage(e, s.dataId, r, i);
            }
        };
        t.render = function i(t) {
            var e = t.annotationStorage;
            var r = t.linkService;
            var i = t.xfaHtml;
            var n = t.intent || "display";
            var a = document.createElement(i.name);
            if (i.attributes) {
                this.setAttributes({
                    html: a,
                    element: i,
                    intent: n,
                    linkService: r
                });
            }
            var s = n !== "richText";
            var o = t.div;
            o.append(a);
            if (t.viewport) {
                var l = "matrix(" + t.viewport.transform.join(",") + ")";
                o.style.transform = l;
            }
            if (s) {
                o.setAttribute("class", "xfaLayer xfaFont");
            }
            var u = [];
            if (i.children.length === 0) {
                if (i.value) {
                    var h = document.createTextNode(i.value);
                    a.append(h);
                    if (s && zl.shouldBuildText(i.name)) {
                        u.push(h);
                    }
                }
                return {
                    textDivs: u
                };
            }
            var c = [ [ i, -1, a ] ];
            while (c.length > 0) {
                var d, f;
                var [v, p, g] = c.at(-1);
                if (p + 1 === v.children.length) {
                    c.pop();
                    continue;
                }
                var m = v.children[++c.at(-1)[1]];
                if (m === null) {
                    continue;
                }
                var {name: y} = m;
                if (y === "#text") {
                    var w = document.createTextNode(m.value);
                    u.push(w);
                    g.append(w);
                    continue;
                }
                var b = m !== null && m !== void 0 && (d = m.attributes) !== null && d !== void 0 && d.xmlns ? document.createElementNS(m.attributes.xmlns, y) : document.createElement(y);
                g.append(b);
                if (m.attributes) {
                    this.setAttributes({
                        html: b,
                        element: m,
                        storage: e,
                        intent: n,
                        linkService: r
                    });
                }
                if (((f = m.children) === null || f === void 0 ? void 0 : f.length) > 0) {
                    c.push([ m, -1, b ]);
                } else if (m.value) {
                    var A = document.createTextNode(m.value);
                    if (s && zl.shouldBuildText(y)) {
                        u.push(A);
                    }
                    b.append(A);
                }
            }
            for (var _ of o.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) {
                _.setAttribute("readOnly", true);
            }
            return {
                textDivs: u
            };
        };
        t.update = function n(t) {
            var e = "matrix(" + t.viewport.transform.join(",") + ")";
            t.div.style.transform = e;
            t.div.hidden = false;
        };
        return t;
    }();
    var hh = 9;
    var ch = new WeakSet;
    var dh = (new Date).getTimezoneOffset() * 60 * 1e3;
    var fh = function() {
        function t() {}
        t.create = function e(t) {
            var e = t.data.annotationType;
            switch (e) {
              case Q.LINK:
                return new Ah(t);

              case Q.TEXT:
                return new Eh(t);

              case Q.WIDGET:
                var r = t.data.fieldType;
                switch (r) {
                  case "Tx":
                    return new Mh(t);

                  case "Btn":
                    if (t.data.radioButton) {
                        return new Rh(t);
                    } else if (t.data.checkBox) {
                        return new Th(t);
                    }
                    return new Ih(t);

                  case "Ch":
                    return new Ph(t);

                  case "Sig":
                    return new Ch(t);
                }
                return new Sh(t);

              case Q.POPUP:
                return new Lh(t);

              case Q.FREETEXT:
                return new dc(t);

              case Q.LINE:
                return new vc(t);

              case Q.SQUARE:
                return new gc(t);

              case Q.CIRCLE:
                return new yc(t);

              case Q.POLYLINE:
                return new bc(t);

              case Q.CARET:
                return new _c(t);

              case Q.INK:
                return new Sc(t);

              case Q.POLYGON:
                return new Ac(t);

              case Q.HIGHLIGHT:
                return new Cc(t);

              case Q.UNDERLINE:
                return new Tc(t);

              case Q.SQUIGGLY:
                return new Rc(t);

              case Q.STRIKEOUT:
                return new Ic(t);

              case Q.STAMP:
                return new Pc(t);

              case Q.FILEATTACHMENT:
                return new Nc(t);

              default:
                return new yh(t);
            }
        };
        return t;
    }();
    var vh = new WeakMap;
    var ph = new WeakMap;
    var gh = new WeakMap;
    var mh = new WeakSet;
    var yh = function() {
        function t(t) {
            var {isRenderable: e = false, ignoreBorder: r = false, createQuadrilaterals: i = false} = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            d(this, mh);
            u(this, vh, null);
            u(this, ph, false);
            u(this, gh, null);
            this.isRenderable = e;
            this.data = t.data;
            this.layer = t.layer;
            this.linkService = t.linkService;
            this.downloadManager = t.downloadManager;
            this.imageResourcesPath = t.imageResourcesPath;
            this.renderForms = t.renderForms;
            this.svgFactory = t.svgFactory;
            this.annotationStorage = t.annotationStorage;
            this.enableScripting = t.enableScripting;
            this.hasJSActions = t.hasJSActions;
            this._fieldObjects = t.fieldObjects;
            this.parent = t.parent;
            if (e) {
                this.container = this._createContainer(r);
            }
            if (i) {
                this._createQuadrilaterals();
            }
        }
        t._hasPopupData = function i(t) {
            var {contentsObj: e, richText: r} = t;
            return !!(e !== null && e !== void 0 && e.str || r !== null && r !== void 0 && r.str);
        };
        var e = t.prototype;
        e.updateEdited = function n(t) {
            var e;
            if (!this.container) {
                return;
            }
            if (t.rect) {
                l(vh, this) || h(vh, this, {
                    rect: this.data.rect.slice(0)
                });
            }
            var {rect: i, popup: n} = t;
            if (i) {
                r(mh, this, wh).call(this, i);
            }
            var a = ((e = l(gh, this)) === null || e === void 0 ? void 0 : e.popup) || this.popup;
            if (!a && n !== null && n !== void 0 && n.text) {
                this._createPopup(n);
                a = l(gh, this).popup;
            }
            if (!a) {
                return;
            }
            a.updateEdited(t);
            if (n !== null && n !== void 0 && n.deleted) {
                a.remove();
                h(gh, this, null);
                this.popup = null;
            }
        };
        e.resetEdited = function a() {
            var t;
            if (!l(vh, this)) {
                return;
            }
            r(mh, this, wh).call(this, l(vh, this).rect);
            (t = l(gh, this)) === null || t === void 0 ? void 0 : t.popup.resetEdited();
            h(vh, this, null);
        };
        e._createContainer = function s(t) {
            var {data: e, parent: {page: r, viewport: i}} = this;
            var n = document.createElement("section");
            n.setAttribute("data-annotation-id", e.id);
            if (!(this instanceof Sh) && !(this instanceof Ah)) {
                n.tabIndex = 0;
            }
            var {style: a} = n;
            a.zIndex = this.parent.zIndex++;
            if (e.alternativeText) {
                n.title = e.alternativeText;
            }
            if (e.noRotate) {
                n.classList.add("norotate");
            }
            if (!e.rect || this instanceof Lh) {
                var {rotation: s} = e;
                if (!e.hasOwnCanvas && s !== 0) {
                    this.setRotation(s, n);
                }
                return n;
            }
            var {width: o, height: l} = this;
            if (!t && e.borderStyle.width > 0) {
                a.borderWidth = e.borderStyle.width + "px";
                var u = e.borderStyle.horizontalCornerRadius;
                var c = e.borderStyle.verticalCornerRadius;
                if (u > 0 || c > 0) {
                    var d = "calc(" + u + "px * var(--total-scale-factor)) / calc(" + c + "px * var(--total-scale-factor))";
                    a.borderRadius = d;
                } else if (this instanceof Rh) {
                    var f = "calc(" + o + "px * var(--total-scale-factor)) / calc(" + l + "px * var(--total-scale-factor))";
                    a.borderRadius = f;
                }
                switch (e.borderStyle.style) {
                  case J.SOLID:
                    a.borderStyle = "solid";
                    break;

                  case J.DASHED:
                    a.borderStyle = "dashed";
                    break;

                  case J.BEVELED:
                    st("Unimplemented border style: beveled");
                    break;

                  case J.INSET:
                    st("Unimplemented border style: inset");
                    break;

                  case J.UNDERLINE:
                    a.borderBottomStyle = "solid";
                    break;
                }
                var v = e.borderColor || null;
                if (v) {
                    h(ph, this, true);
                    a.borderColor = Mt.makeHexColor(v[0] | 0, v[1] | 0, v[2] | 0);
                } else {
                    a.borderWidth = 0;
                }
            }
            var p = Mt.normalizeRect([ e.rect[0], r.view[3] - e.rect[1] + r.view[1], e.rect[2], r.view[3] - e.rect[3] + r.view[1] ]);
            var {pageWidth: g, pageHeight: m, pageX: y, pageY: w} = i.rawDims;
            a.left = 100 * (p[0] - y) / g + "%";
            a.top = 100 * (p[1] - w) / m + "%";
            var {rotation: b} = e;
            if (e.hasOwnCanvas || b === 0) {
                a.width = 100 * o / g + "%";
                a.height = 100 * l / m + "%";
            } else {
                this.setRotation(b, n);
            }
            return n;
        };
        e.setRotation = function o(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.container;
            if (!this.data.rect) {
                return;
            }
            var {pageWidth: r, pageHeight: i} = this.parent.viewport.rawDims;
            var {width: n, height: a} = this;
            if (t % 180 !== 0) {
                [n, a] = [ a, n ];
            }
            e.style.width = 100 * n / r + "%";
            e.style.height = 100 * a / i + "%";
            e.setAttribute("data-main-rotation", (360 - t) % 360);
        };
        e._dispatchEventFromSandbox = function c(t, e) {
            var r = this._commonActions;
            for (var i of Object.keys(e.detail)) {
                var n = t[i] || r[i];
                n === null || n === void 0 ? void 0 : n(e);
            }
        };
        e._setDefaultPropertiesFromJS = function f(t) {
            if (!this.enableScripting) {
                return;
            }
            var e = this.annotationStorage.getRawValue(this.data.id);
            if (!e) {
                return;
            }
            var r = this._commonActions;
            for (var [i, n] of Object.entries(e)) {
                var a = r[i];
                if (a) {
                    var s = {
                        detail: {
                            [i]: n
                        },
                        target: t
                    };
                    a(s);
                    delete e[i];
                }
            }
        };
        e._createQuadrilaterals = function p() {
            if (!this.container) {
                return;
            }
            var {quadPoints: t} = this.data;
            if (!t) {
                return;
            }
            var [e, r, i, n] = this.data.rect.map((function(t) {
                return Math.fround(t);
            }));
            if (t.length === 8) {
                var [a, s, o, u] = t.subarray(2, 6);
                if (i === a && n === s && e === o && r === u) {
                    return;
                }
            }
            var {style: h} = this.container;
            var c;
            if (l(ph, this)) {
                var {borderColor: d, borderWidth: f} = h;
                h.borderWidth = 0;
                c = [ "url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', '<g fill="transparent" stroke="' + d + '" stroke-width="' + f + '">' ];
                this.container.classList.add("hasBorder");
            }
            var v = i - e;
            var p = n - r;
            var {svgFactory: g} = this;
            var m = g.createElement("svg");
            m.classList.add("quadrilateralsContainer");
            m.setAttribute("width", 0);
            m.setAttribute("height", 0);
            m.role = "none";
            var y = g.createElement("defs");
            m.append(y);
            var w = g.createElement("clipPath");
            var b = "clippath_" + this.data.id;
            w.setAttribute("id", b);
            w.setAttribute("clipPathUnits", "objectBoundingBox");
            y.append(w);
            for (var A = 2, _ = t.length; A < _; A += 8) {
                var k;
                var x = t[A];
                var E = t[A + 1];
                var S = t[A + 2];
                var M = t[A + 3];
                var C = g.createElement("rect");
                var T = (S - e) / v;
                var R = (n - E) / p;
                var I = (x - S) / v;
                var P = (E - M) / p;
                C.setAttribute("x", T);
                C.setAttribute("y", R);
                C.setAttribute("width", I);
                C.setAttribute("height", P);
                w.append(C);
                (k = c) === null || k === void 0 ? void 0 : k.push('<rect vector-effect="non-scaling-stroke" x="' + T + '" y="' + R + '" width="' + I + '" height="' + P + '"/>');
            }
            if (l(ph, this)) {
                c.push("</g></svg>')");
                h.backgroundImage = c.join("");
            }
            this.container.append(m);
            this.container.style.clipPath = "url(#" + b + ")";
        };
        e._createPopup = function g() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var {data: e} = this;
            var r, i;
            if (t) {
                r = {
                    str: t.text
                };
                i = t.date;
            } else {
                r = e.contentsObj;
                i = e.modificationDate;
            }
            var n = h(gh, this, new Lh({
                data: {
                    color: e.color,
                    titleObj: e.titleObj,
                    modificationDate: i,
                    contentsObj: r,
                    richText: e.richText,
                    parentRect: e.rect,
                    borderStyle: 0,
                    id: "popup_" + e.id,
                    rotation: e.rotation,
                    noRotate: true
                },
                linkService: this.linkService,
                parent: this.parent,
                elements: [ this ]
            }));
            this.parent.div.append(n.render());
        };
        e.render = function m() {
            ot("Abstract method `AnnotationElement.render` called");
        };
        e._getElementsByName = function y(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var r = [];
            if (this._fieldObjects) {
                var i = this._fieldObjects[t];
                if (i) {
                    for (var {page: n, id: a, exportValues: s} of i) {
                        if (n === -1) {
                            continue;
                        }
                        if (a === e) {
                            continue;
                        }
                        var o = typeof s === "string" ? s : null;
                        var l = document.querySelector('[data-element-id="' + a + '"]');
                        if (l && !ch.has(l)) {
                            st("_getElementsByName - element not allowed: " + a);
                            continue;
                        }
                        r.push({
                            id: a,
                            exportValue: o,
                            domElement: l
                        });
                    }
                }
                return r;
            }
            for (var u of document.getElementsByName(t)) {
                var {exportValue: h} = u;
                var c = u.getAttribute("data-element-id");
                if (c === e) {
                    continue;
                }
                if (!ch.has(u)) {
                    continue;
                }
                r.push({
                    id: c,
                    exportValue: h,
                    domElement: u
                });
            }
            return r;
        };
        e.show = function w() {
            var t;
            if (this.container) {
                this.container.hidden = false;
            }
            (t = this.popup) === null || t === void 0 ? void 0 : t.maybeShow();
        };
        e.hide = function b() {
            var t;
            if (this.container) {
                this.container.hidden = true;
            }
            (t = this.popup) === null || t === void 0 ? void 0 : t.forceHide();
        };
        e.getElementsToTriggerPopup = function A() {
            return this.container;
        };
        e.addHighlightArea = function _() {
            var t = this.getElementsToTriggerPopup();
            if (Array.isArray(t)) {
                for (var e of t) {
                    e.classList.add("highlightArea");
                }
            } else {
                t.classList.add("highlightArea");
            }
        };
        e._editOnDoubleClick = function k() {
            var t = this;
            if (!this._isEditable) {
                return;
            }
            var {annotationEditorType: e, data: {id: r}} = this;
            this.container.addEventListener("dblclick", (function() {
                var i;
                (i = t.linkService.eventBus) === null || i === void 0 ? void 0 : i.dispatch("switchannotationeditormode", {
                    source: t,
                    mode: e,
                    editId: r,
                    mustEnterInEditMode: true
                });
            }));
        };
        return v(t, [ {
            key: "_isEditable",
            get: function() {
                return this.data.isEditable;
            }
        }, {
            key: "hasPopupData",
            get: function() {
                return t._hasPopupData(this.data);
            }
        }, {
            key: "_commonActions",
            get: function() {
                var t = this;
                var e = function(e, r, i) {
                    var n = i.detail[e];
                    var a = n[0];
                    var s = n.slice(1);
                    i.target.style[r] = sh[a + "_HTML"](s);
                    t.annotationStorage.setValue(t.data.id, {
                        [r]: sh[a + "_rgb"](s)
                    });
                };
                return dt(this, "_commonActions", {
                    display: function(e) {
                        var {display: r} = e.detail;
                        var i = r % 2 === 1;
                        t.container.style.visibility = i ? "hidden" : "visible";
                        t.annotationStorage.setValue(t.data.id, {
                            noView: i,
                            noPrint: r === 1 || r === 2
                        });
                    },
                    print: function(e) {
                        t.annotationStorage.setValue(t.data.id, {
                            noPrint: !e.detail.print
                        });
                    },
                    hidden: function(e) {
                        var {hidden: r} = e.detail;
                        t.container.style.visibility = r ? "hidden" : "visible";
                        t.annotationStorage.setValue(t.data.id, {
                            noPrint: r,
                            noView: r
                        });
                    },
                    focus: function(t) {
                        setTimeout((function() {
                            return t.target.focus({
                                preventScroll: false
                            });
                        }), 0);
                    },
                    userName: function(t) {
                        t.target.title = t.detail.userName;
                    },
                    readonly: function(t) {
                        t.target.disabled = t.detail.readonly;
                    },
                    required: function(e) {
                        t._setRequired(e.target, e.detail.required);
                    },
                    bgColor: function(t) {
                        e("bgColor", "backgroundColor", t);
                    },
                    fillColor: function(t) {
                        e("fillColor", "backgroundColor", t);
                    },
                    fgColor: function(t) {
                        e("fgColor", "color", t);
                    },
                    textColor: function(t) {
                        e("textColor", "color", t);
                    },
                    borderColor: function(t) {
                        e("borderColor", "borderColor", t);
                    },
                    strokeColor: function(t) {
                        e("strokeColor", "borderColor", t);
                    },
                    rotation: function(e) {
                        var r = e.detail.rotation;
                        t.setRotation(r);
                        t.annotationStorage.setValue(t.data.id, {
                            rotation: r
                        });
                    }
                });
            }
        }, {
            key: "hasPopupElement",
            get: function() {
                return !!(l(gh, this) || this.popup || this.data.popupRef);
            }
        }, {
            key: "width",
            get: function() {
                return this.data.rect[2] - this.data.rect[0];
            }
        }, {
            key: "height",
            get: function() {
                return this.data.rect[3] - this.data.rect[1];
            }
        } ]);
    }();
    function wh(t) {
        var {container: {style: e}, data: {rect: r, rotation: i}, parent: {viewport: {rawDims: {pageWidth: n, pageHeight: a, pageX: s, pageY: o}}}} = this;
        r === null || r === void 0 ? void 0 : r.splice.apply(r, [ 0, 4 ].concat(t));
        e.left = 100 * (t[0] - s) / n + "%";
        e.top = 100 * (a - t[3] + o) / a + "%";
        if (i === 0) {
            e.width = 100 * (t[2] - t[0]) / n + "%";
            e.height = 100 * (t[3] - t[1]) / a + "%";
        } else {
            this.setRotation(i);
        }
    }
    var bh = new WeakSet;
    var Ah = function(t) {
        function e(e) {
            var r;
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            r = t.call(this, e, {
                isRenderable: true,
                ignoreBorder: !!(i !== null && i !== void 0 && i.ignoreBorder),
                createQuadrilaterals: true
            }) || this;
            d(r, bh);
            r.isTooltipOnly = e.data.isTooltipOnly;
            return r;
        }
        g(e, t);
        var i = e.prototype;
        i.render = function n() {
            var {data: t, linkService: e} = this;
            var i = document.createElement("a");
            i.setAttribute("data-element-id", t.id);
            var n = false;
            if (t.url) {
                e.addLinkAttributes(i, t.url, t.newWindow);
                n = true;
            } else if (t.action) {
                this._bindNamedAction(i, t.action, t.overlaidText);
                n = true;
            } else if (t.attachment) {
                r(bh, this, kh).call(this, i, t.attachment, t.overlaidText, t.attachmentDest);
                n = true;
            } else if (t.setOCGState) {
                r(bh, this, xh).call(this, i, t.setOCGState, t.overlaidText);
                n = true;
            } else if (t.dest) {
                this._bindLink(i, t.dest, t.overlaidText);
                n = true;
            } else {
                if (t.actions && (t.actions.Action || t.actions["Mouse Up"] || t.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions) {
                    this._bindJSAction(i, t);
                    n = true;
                }
                if (t.resetForm) {
                    this._bindResetFormAction(i, t.resetForm);
                    n = true;
                } else if (this.isTooltipOnly && !n) {
                    this._bindLink(i, "");
                    n = true;
                }
            }
            this.container.classList.add("linkAnnotation");
            if (n) {
                this.container.append(i);
            }
            return this.container;
        };
        i._bindLink = function a(t, e) {
            var i = this;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
            t.href = this.linkService.getDestinationHash(e);
            t.onclick = function() {
                if (e) {
                    i.linkService.goToDestination(e);
                }
                return false;
            };
            if (e || e === "") {
                r(bh, this, _h).call(this);
            }
            if (n) {
                t.title = n;
            }
        };
        i._bindNamedAction = function s(t, e) {
            var i = this;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
            t.href = this.linkService.getAnchorUrl("");
            t.onclick = function() {
                i.linkService.executeNamedAction(e);
                return false;
            };
            if (n) {
                t.title = n;
            }
            r(bh, this, _h).call(this);
        };
        i._bindJSAction = function o(t, e) {
            var i = this;
            t.href = this.linkService.getAnchorUrl("");
            var n = new Map([ [ "Action", "onclick" ], [ "Mouse Up", "onmouseup" ], [ "Mouse Down", "onmousedown" ] ]);
            var a = function(r) {
                var a = n.get(r);
                if (!a) {
                    return 1;
                }
                t[a] = function() {
                    var t;
                    (t = i.linkService.eventBus) === null || t === void 0 ? void 0 : t.dispatch("dispatcheventinsandbox", {
                        source: i,
                        detail: {
                            id: e.id,
                            name: r
                        }
                    });
                    return false;
                };
            };
            for (var s of Object.keys(e.actions)) {
                if (a(s)) continue;
            }
            if (e.overlaidText) {
                t.title = e.overlaidText;
            }
            if (!t.onclick) {
                t.onclick = function() {
                    return false;
                };
            }
            r(bh, this, _h).call(this);
        };
        i._bindResetFormAction = function l(t, e) {
            var i = this;
            var n = t.onclick;
            if (!n) {
                t.href = this.linkService.getAnchorUrl("");
            }
            r(bh, this, _h).call(this);
            if (!this._fieldObjects) {
                st('_bindResetFormAction - "resetForm" action not supported, ' + "ensure that the `fieldObjects` parameter is provided.");
                if (!n) {
                    t.onclick = function() {
                        return false;
                    };
                }
                return;
            }
            t.onclick = function() {
                n === null || n === void 0 ? void 0 : n();
                var {fields: t, refs: r, include: a} = e;
                var s = [];
                if (t.length !== 0 || r.length !== 0) {
                    var o = new Set(r);
                    for (var l of t) {
                        var u = i._fieldObjects[l] || [];
                        for (var {id: h} of u) {
                            o.add(h);
                        }
                    }
                    for (var c of Object.values(i._fieldObjects)) {
                        for (var d of c) {
                            if (o.has(d.id) === a) {
                                s.push(d);
                            }
                        }
                    }
                } else {
                    for (var f of Object.values(i._fieldObjects)) {
                        s.push.apply(s, f);
                    }
                }
                var v = i.annotationStorage;
                var p = [];
                for (var g of s) {
                    var {id: m} = g;
                    p.push(m);
                    switch (g.type) {
                      case "text":
                        {
                            var y = g.defaultValue || "";
                            v.setValue(m, {
                                value: y
                            });
                            break;
                        }

                      case "checkbox":
                      case "radiobutton":
                        {
                            var w = g.defaultValue === g.exportValues;
                            v.setValue(m, {
                                value: w
                            });
                            break;
                        }

                      case "combobox":
                      case "listbox":
                        {
                            var b = g.defaultValue || "";
                            v.setValue(m, {
                                value: b
                            });
                            break;
                        }

                      default:
                        continue;
                    }
                    var A = document.querySelector('[data-element-id="' + m + '"]');
                    if (!A) {
                        continue;
                    } else if (!ch.has(A)) {
                        st("_bindResetFormAction - element not allowed: " + m);
                        continue;
                    }
                    A.dispatchEvent(new Event("resetform"));
                }
                if (i.enableScripting) {
                    var _;
                    (_ = i.linkService.eventBus) === null || _ === void 0 ? void 0 : _.dispatch("dispatcheventinsandbox", {
                        source: i,
                        detail: {
                            id: "app",
                            ids: p,
                            name: "ResetForm"
                        }
                    });
                }
                return false;
            };
        };
        return e;
    }(yh);
    function _h() {
        this.container.setAttribute("data-internal-link", "");
    }
    function kh(t, e) {
        var i = this;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        t.href = this.linkService.getAnchorUrl("");
        if (e.description) {
            t.title = e.description;
        } else if (n) {
            t.title = n;
        }
        t.onclick = function() {
            var t;
            (t = i.downloadManager) === null || t === void 0 ? void 0 : t.openOrDownloadData(e.content, e.filename, a);
            return false;
        };
        r(bh, this, _h).call(this);
    }
    function xh(t, e) {
        var i = this;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        t.href = this.linkService.getAnchorUrl("");
        t.onclick = function() {
            i.linkService.executeSetOCGState(e);
            return false;
        };
        if (n) {
            t.title = n;
        }
        r(bh, this, _h).call(this);
    }
    var Eh = function(t) {
        function e(e) {
            return t.call(this, e, {
                isRenderable: true
            }) || this;
        }
        g(e, t);
        var r = e.prototype;
        r.render = function i() {
            this.container.classList.add("textAnnotation");
            var t = document.createElement("img");
            t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
            t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type");
            t.setAttribute("data-l10n-args", JSON.stringify({
                type: this.data.name
            }));
            if (!this.data.popupRef && this.hasPopupData) {
                this._createPopup();
            }
            this.container.append(t);
            return this.container;
        };
        return e;
    }(yh);
    var Sh = function(t) {
        function e() {
            return t.apply(this, arguments) || this;
        }
        g(e, t);
        var r = e.prototype;
        r.render = function i() {
            return this.container;
        };
        r.showElementAndHideCanvas = function n(t) {
            if (this.data.hasOwnCanvas) {
                var e;
                if (((e = t.previousSibling) === null || e === void 0 ? void 0 : e.nodeName) === "CANVAS") {
                    t.previousSibling.hidden = true;
                }
                t.hidden = false;
            }
        };
        r._getKeyModifier = function a(t) {
            return Et.platform.isMac ? t.metaKey : t.ctrlKey;
        };
        r._setEventListener = function s(t, e, r, i, n) {
            var a = this;
            if (r.includes("mouse")) {
                t.addEventListener(r, (function(t) {
                    var e;
                    (e = a.linkService.eventBus) === null || e === void 0 ? void 0 : e.dispatch("dispatcheventinsandbox", {
                        source: a,
                        detail: {
                            id: a.data.id,
                            name: i,
                            value: n(t),
                            shift: t.shiftKey,
                            modifier: a._getKeyModifier(t)
                        }
                    });
                }));
            } else {
                t.addEventListener(r, (function(t) {
                    var s;
                    if (r === "blur") {
                        if (!e.focused || !t.relatedTarget) {
                            return;
                        }
                        e.focused = false;
                    } else if (r === "focus") {
                        if (e.focused) {
                            return;
                        }
                        e.focused = true;
                    }
                    if (!n) {
                        return;
                    }
                    (s = a.linkService.eventBus) === null || s === void 0 ? void 0 : s.dispatch("dispatcheventinsandbox", {
                        source: a,
                        detail: {
                            id: a.data.id,
                            name: i,
                            value: n(t)
                        }
                    });
                }));
            }
        };
        r._setEventListeners = function o(t, e, r, i) {
            for (var [n, a] of r) {
                var s;
                if (a === "Action" || (s = this.data.actions) !== null && s !== void 0 && s[a]) {
                    var o, l;
                    if (a === "Focus" || a === "Blur") {
                        e ||= {
                            focused: false
                        };
                    }
                    this._setEventListener(t, e, n, a, i);
                    if (a === "Focus" && !((o = this.data.actions) !== null && o !== void 0 && o.Blur)) {
                        this._setEventListener(t, e, "blur", "Blur", null);
                    } else if (a === "Blur" && !((l = this.data.actions) !== null && l !== void 0 && l.Focus)) {
                        this._setEventListener(t, e, "focus", "Focus", null);
                    }
                }
            }
        };
        r._setBackgroundColor = function l(t) {
            var e = this.data.backgroundColor || null;
            t.style.backgroundColor = e === null ? "transparent" : Mt.makeHexColor(e[0], e[1], e[2]);
        };
        r._setTextStyle = function u(t) {
            var e = [ "left", "center", "right" ];
            var {fontColor: r} = this.data.defaultAppearanceData;
            var i = this.data.defaultAppearanceData.fontSize || hh;
            var n = t.style;
            var a;
            var s = 2;
            var o = function(t) {
                return Math.round(10 * t) / 10;
            };
            if (this.data.multiLine) {
                var l = Math.abs(this.data.rect[3] - this.data.rect[1] - s);
                var u = Math.round(l / (H * i)) || 1;
                var h = l / u;
                a = Math.min(i, o(h / H));
            } else {
                var c = Math.abs(this.data.rect[3] - this.data.rect[1] - s);
                a = Math.min(i, o(c / H));
            }
            n.fontSize = "calc(" + a + "px * var(--total-scale-factor))";
            n.color = Mt.makeHexColor(r[0], r[1], r[2]);
            if (this.data.textAlignment !== null) {
                n.textAlign = e[this.data.textAlignment];
            }
        };
        r._setRequired = function h(t, e) {
            if (e) {
                t.setAttribute("required", true);
            } else {
                t.removeAttribute("required");
            }
            t.setAttribute("aria-required", e);
        };
        return e;
    }(yh);
    var Mh = function(t) {
        function e(e) {
            var r = e.renderForms || e.data.hasOwnCanvas || !e.data.hasAppearance && !!e.data.fieldValue;
            return t.call(this, e, {
                isRenderable: r
            }) || this;
        }
        g(e, t);
        var r = e.prototype;
        r.setPropertyOnSiblings = function i(t, e, r, n) {
            var a = this.annotationStorage;
            for (var s of this._getElementsByName(t.name, t.id)) {
                if (s.domElement) {
                    s.domElement[e] = r;
                }
                a.setValue(s.id, {
                    [n]: r
                });
            }
        };
        r.render = function n() {
            var t = this;
            var e = this.annotationStorage;
            var r = this.data.id;
            this.container.classList.add("textWidgetAnnotation");
            var i = null;
            if (this.renderForms) {
                var n;
                var a = e.getValue(r, {
                    value: this.data.fieldValue
                });
                var s = a.value || "";
                var o = e.getValue(r, {
                    charLimit: this.data.maxLen
                }).charLimit;
                if (o && s.length > o) {
                    s = s.slice(0, o);
                }
                var l = a.formattedValue || ((n = this.data.textContent) === null || n === void 0 ? void 0 : n.join("\n")) || null;
                if (l && this.data.comb) {
                    l = l.replaceAll(/\s+/g, "");
                }
                var u = {
                    userValue: s,
                    formattedValue: l,
                    lastCommittedValue: null,
                    commitKey: 1,
                    focused: false
                };
                if (this.data.multiLine) {
                    var h;
                    i = document.createElement("textarea");
                    i.textContent = (h = l) !== null && h !== void 0 ? h : s;
                    if (this.data.doNotScroll) {
                        i.style.overflowY = "hidden";
                    }
                } else {
                    var c;
                    i = document.createElement("input");
                    i.type = this.data.password ? "password" : "text";
                    i.setAttribute("value", (c = l) !== null && c !== void 0 ? c : s);
                    if (this.data.doNotScroll) {
                        i.style.overflowX = "hidden";
                    }
                }
                if (this.data.hasOwnCanvas) {
                    i.hidden = true;
                }
                ch.add(i);
                i.setAttribute("data-element-id", r);
                i.disabled = this.data.readOnly;
                i.name = this.data.fieldName;
                i.tabIndex = 0;
                var {datetimeFormat: d, datetimeType: f, timeStep: v} = this.data;
                var p = !!f && this.enableScripting;
                if (d) {
                    i.title = d;
                }
                this._setRequired(i, this.data.required);
                if (o) {
                    i.maxLength = o;
                }
                i.addEventListener("input", (function(n) {
                    e.setValue(r, {
                        value: n.target.value
                    });
                    t.setPropertyOnSiblings(i, "value", n.target.value, "value");
                    u.formattedValue = null;
                }));
                i.addEventListener("resetform", (function(e) {
                    var r;
                    var n = (r = t.data.defaultFieldValue) !== null && r !== void 0 ? r : "";
                    i.value = u.userValue = n;
                    u.formattedValue = null;
                }));
                var g = function(t) {
                    var {formattedValue: e} = u;
                    if (e !== null && e !== undefined) {
                        t.target.value = e;
                    }
                    t.target.scrollLeft = 0;
                };
                if (this.enableScripting && this.hasJSActions) {
                    var m;
                    i.addEventListener("focus", (function(e) {
                        var r;
                        if (u.focused) {
                            return;
                        }
                        var {target: i} = e;
                        if (p) {
                            i.type = f;
                            if (v) {
                                i.step = v;
                            }
                        }
                        if (u.userValue) {
                            var n = u.userValue;
                            if (p) {
                                if (f === "time") {
                                    var a = new Date(n);
                                    var s = [ a.getHours(), a.getMinutes(), a.getSeconds() ];
                                    i.value = s.map((function(t) {
                                        return t.toString().padStart(2, "0");
                                    })).join(":");
                                } else {
                                    i.value = new Date(n - dh).toISOString().split(f === "date" ? "T" : ".", 1)[0];
                                }
                            } else {
                                i.value = n;
                            }
                        }
                        u.lastCommittedValue = i.value;
                        u.commitKey = 1;
                        if (!((r = t.data.actions) !== null && r !== void 0 && r.Focus)) {
                            u.focused = true;
                        }
                    }));
                    i.addEventListener("updatefromsandbox", (function(i) {
                        t.showElementAndHideCanvas(i.target);
                        var n = {
                            value: function(t) {
                                var i;
                                u.userValue = (i = t.detail.value) !== null && i !== void 0 ? i : "";
                                if (!p) {
                                    e.setValue(r, {
                                        value: u.userValue.toString()
                                    });
                                }
                                t.target.value = u.userValue;
                            },
                            formattedValue: function(t) {
                                var {formattedValue: i} = t.detail;
                                u.formattedValue = i;
                                if (i !== null && i !== undefined && t.target !== document.activeElement) {
                                    t.target.value = i;
                                }
                                var n = {
                                    formattedValue: i
                                };
                                if (p) {
                                    n.value = i;
                                }
                                e.setValue(r, n);
                            },
                            selRange: function(t) {
                                var e;
                                (e = t.target).setSelectionRange.apply(e, t.detail.selRange);
                            },
                            charLimit: function(i) {
                                var n;
                                var {charLimit: a} = i.detail;
                                var {target: s} = i;
                                if (a === 0) {
                                    s.removeAttribute("maxLength");
                                    return;
                                }
                                s.setAttribute("maxLength", a);
                                var o = u.userValue;
                                if (!o || o.length <= a) {
                                    return;
                                }
                                o = o.slice(0, a);
                                s.value = u.userValue = o;
                                e.setValue(r, {
                                    value: o
                                });
                                (n = t.linkService.eventBus) === null || n === void 0 ? void 0 : n.dispatch("dispatcheventinsandbox", {
                                    source: t,
                                    detail: {
                                        id: r,
                                        name: "Keystroke",
                                        value: o,
                                        willCommit: true,
                                        commitKey: 1,
                                        selStart: s.selectionStart,
                                        selEnd: s.selectionEnd
                                    }
                                });
                            }
                        };
                        t._dispatchEventFromSandbox(n, i);
                    }));
                    i.addEventListener("keydown", (function(e) {
                        var i;
                        u.commitKey = 1;
                        var n = -1;
                        if (e.key === "Escape") {
                            n = 0;
                        } else if (e.key === "Enter" && !t.data.multiLine) {
                            n = 2;
                        } else if (e.key === "Tab") {
                            u.commitKey = 3;
                        }
                        if (n === -1) {
                            return;
                        }
                        var {value: a} = e.target;
                        if (u.lastCommittedValue === a) {
                            return;
                        }
                        u.lastCommittedValue = a;
                        u.userValue = a;
                        (i = t.linkService.eventBus) === null || i === void 0 ? void 0 : i.dispatch("dispatcheventinsandbox", {
                            source: t,
                            detail: {
                                id: r,
                                name: "Keystroke",
                                value: a,
                                willCommit: true,
                                commitKey: n,
                                selStart: e.target.selectionStart,
                                selEnd: e.target.selectionEnd
                            }
                        });
                    }));
                    var y = g;
                    g = null;
                    i.addEventListener("blur", (function(e) {
                        var i;
                        if (!u.focused || !e.relatedTarget) {
                            return;
                        }
                        if (!((i = t.data.actions) !== null && i !== void 0 && i.Blur)) {
                            u.focused = false;
                        }
                        var {target: n} = e;
                        var {value: a} = n;
                        if (p) {
                            if (a && f === "time") {
                                var s = a.split(":").map((function(t) {
                                    return parseInt(t, 10);
                                }));
                                a = new Date(2e3, 0, 1, s[0], s[1], s[2] || 0).valueOf();
                                n.step = "";
                            } else {
                                a = new Date(a).valueOf();
                            }
                            n.type = "text";
                        }
                        u.userValue = a;
                        if (u.lastCommittedValue !== a) {
                            var o;
                            (o = t.linkService.eventBus) === null || o === void 0 ? void 0 : o.dispatch("dispatcheventinsandbox", {
                                source: t,
                                detail: {
                                    id: r,
                                    name: "Keystroke",
                                    value: a,
                                    willCommit: true,
                                    commitKey: u.commitKey,
                                    selStart: e.target.selectionStart,
                                    selEnd: e.target.selectionEnd
                                }
                            });
                        }
                        y(e);
                    }));
                    if ((m = this.data.actions) !== null && m !== void 0 && m.Keystroke) {
                        i.addEventListener("beforeinput", (function(e) {
                            var i;
                            u.lastCommittedValue = null;
                            var {data: n, target: a} = e;
                            var {value: s, selectionStart: o, selectionEnd: l} = a;
                            var h = o, c = l;
                            switch (e.inputType) {
                              case "deleteWordBackward":
                                {
                                    var d = s.substring(0, o).match(/\w*[^\w]*$/);
                                    if (d) {
                                        h -= d[0].length;
                                    }
                                    break;
                                }

                              case "deleteWordForward":
                                {
                                    var f = s.substring(o).match(/^[^\w]*\w*/);
                                    if (f) {
                                        c += f[0].length;
                                    }
                                    break;
                                }

                              case "deleteContentBackward":
                                if (o === l) {
                                    h -= 1;
                                }
                                break;

                              case "deleteContentForward":
                                if (o === l) {
                                    c += 1;
                                }
                                break;
                            }
                            e.preventDefault();
                            (i = t.linkService.eventBus) === null || i === void 0 ? void 0 : i.dispatch("dispatcheventinsandbox", {
                                source: t,
                                detail: {
                                    id: r,
                                    name: "Keystroke",
                                    value: s,
                                    change: n || "",
                                    willCommit: false,
                                    selStart: h,
                                    selEnd: c
                                }
                            });
                        }));
                    }
                    this._setEventListeners(i, u, [ [ "focus", "Focus" ], [ "blur", "Blur" ], [ "mousedown", "Mouse Down" ], [ "mouseenter", "Mouse Enter" ], [ "mouseleave", "Mouse Exit" ], [ "mouseup", "Mouse Up" ] ], (function(t) {
                        return t.target.value;
                    }));
                }
                if (g) {
                    i.addEventListener("blur", g);
                }
                if (this.data.comb) {
                    var w = this.data.rect[2] - this.data.rect[0];
                    var b = w / o;
                    i.classList.add("comb");
                    i.style.letterSpacing = "calc(" + b + "px * var(--total-scale-factor) - 1ch)";
                }
            } else {
                i = document.createElement("div");
                i.textContent = this.data.fieldValue;
                i.style.verticalAlign = "middle";
                i.style.display = "table-cell";
                if (this.data.hasOwnCanvas) {
                    i.hidden = true;
                }
            }
            this._setTextStyle(i);
            this._setBackgroundColor(i);
            this._setDefaultPropertiesFromJS(i);
            this.container.append(i);
            return this.container;
        };
        return e;
    }(Sh);
    var Ch = function(t) {
        function e(e) {
            return t.call(this, e, {
                isRenderable: !!e.data.hasOwnCanvas
            }) || this;
        }
        g(e, t);
        return e;
    }(Sh);
    var Th = function(t) {
        function e(e) {
            return t.call(this, e, {
                isRenderable: e.renderForms
            }) || this;
        }
        g(e, t);
        var r = e.prototype;
        r.render = function i() {
            var t = this;
            var e = this.annotationStorage;
            var r = this.data;
            var i = r.id;
            var n = e.getValue(i, {
                value: r.exportValue === r.fieldValue
            }).value;
            if (typeof n === "string") {
                n = n !== "Off";
                e.setValue(i, {
                    value: n
                });
            }
            this.container.classList.add("buttonWidgetAnnotation", "checkBox");
            var a = document.createElement("input");
            ch.add(a);
            a.setAttribute("data-element-id", i);
            a.disabled = r.readOnly;
            this._setRequired(a, this.data.required);
            a.type = "checkbox";
            a.name = r.fieldName;
            if (n) {
                a.setAttribute("checked", true);
            }
            a.setAttribute("exportValue", r.exportValue);
            a.tabIndex = 0;
            a.addEventListener("change", (function(n) {
                var {name: a, checked: s} = n.target;
                for (var o of t._getElementsByName(a, i)) {
                    var l = s && o.exportValue === r.exportValue;
                    if (o.domElement) {
                        o.domElement.checked = l;
                    }
                    e.setValue(o.id, {
                        value: l
                    });
                }
                e.setValue(i, {
                    value: s
                });
            }));
            a.addEventListener("resetform", (function(t) {
                var e = r.defaultFieldValue || "Off";
                t.target.checked = e === r.exportValue;
            }));
            if (this.enableScripting && this.hasJSActions) {
                a.addEventListener("updatefromsandbox", (function(r) {
                    var n = {
                        value: function(t) {
                            t.target.checked = t.detail.value !== "Off";
                            e.setValue(i, {
                                value: t.target.checked
                            });
                        }
                    };
                    t._dispatchEventFromSandbox(n, r);
                }));
                this._setEventListeners(a, null, [ [ "change", "Validate" ], [ "change", "Action" ], [ "focus", "Focus" ], [ "blur", "Blur" ], [ "mousedown", "Mouse Down" ], [ "mouseenter", "Mouse Enter" ], [ "mouseleave", "Mouse Exit" ], [ "mouseup", "Mouse Up" ] ], (function(t) {
                    return t.target.checked;
                }));
            }
            this._setBackgroundColor(a);
            this._setDefaultPropertiesFromJS(a);
            this.container.append(a);
            return this.container;
        };
        return e;
    }(Sh);
    var Rh = function(t) {
        function e(e) {
            return t.call(this, e, {
                isRenderable: e.renderForms
            }) || this;
        }
        g(e, t);
        var r = e.prototype;
        r.render = function i() {
            var t = this;
            this.container.classList.add("buttonWidgetAnnotation", "radioButton");
            var e = this.annotationStorage;
            var r = this.data;
            var i = r.id;
            var n = e.getValue(i, {
                value: r.fieldValue === r.buttonValue
            }).value;
            if (typeof n === "string") {
                n = n !== r.buttonValue;
                e.setValue(i, {
                    value: n
                });
            }
            if (n) {
                for (var a of this._getElementsByName(r.fieldName, i)) {
                    e.setValue(a.id, {
                        value: false
                    });
                }
            }
            var s = document.createElement("input");
            ch.add(s);
            s.setAttribute("data-element-id", i);
            s.disabled = r.readOnly;
            this._setRequired(s, this.data.required);
            s.type = "radio";
            s.name = r.fieldName;
            if (n) {
                s.setAttribute("checked", true);
            }
            s.tabIndex = 0;
            s.addEventListener("change", (function(r) {
                var {name: n, checked: a} = r.target;
                for (var s of t._getElementsByName(n, i)) {
                    e.setValue(s.id, {
                        value: false
                    });
                }
                e.setValue(i, {
                    value: a
                });
            }));
            s.addEventListener("resetform", (function(t) {
                var e = r.defaultFieldValue;
                t.target.checked = e !== null && e !== undefined && e === r.buttonValue;
            }));
            if (this.enableScripting && this.hasJSActions) {
                var o = r.buttonValue;
                s.addEventListener("updatefromsandbox", (function(r) {
                    var n = {
                        value: function(r) {
                            var n = o === r.detail.value;
                            for (var a of t._getElementsByName(r.target.name)) {
                                var s = n && a.id === i;
                                if (a.domElement) {
                                    a.domElement.checked = s;
                                }
                                e.setValue(a.id, {
                                    value: s
                                });
                            }
                        }
                    };
                    t._dispatchEventFromSandbox(n, r);
                }));
                this._setEventListeners(s, null, [ [ "change", "Validate" ], [ "change", "Action" ], [ "focus", "Focus" ], [ "blur", "Blur" ], [ "mousedown", "Mouse Down" ], [ "mouseenter", "Mouse Enter" ], [ "mouseleave", "Mouse Exit" ], [ "mouseup", "Mouse Up" ] ], (function(t) {
                    return t.target.checked;
                }));
            }
            this._setBackgroundColor(s);
            this._setDefaultPropertiesFromJS(s);
            this.container.append(s);
            return this.container;
        };
        return e;
    }(Sh);
    var Ih = function(t) {
        function e(e) {
            return t.call(this, e, {
                ignoreBorder: e.data.hasAppearance
            }) || this;
        }
        g(e, t);
        var r = e.prototype;
        r.render = function i() {
            var e = this;
            var r = t.prototype.render.call(this);
            r.classList.add("buttonWidgetAnnotation", "pushButton");
            var i = r.lastChild;
            if (this.enableScripting && this.hasJSActions && i) {
                this._setDefaultPropertiesFromJS(i);
                i.addEventListener("updatefromsandbox", (function(t) {
                    e._dispatchEventFromSandbox({}, t);
                }));
            }
            return r;
        };
        return e;
    }(Ah);
    var Ph = function(t) {
        function e(e) {
            return t.call(this, e, {
                isRenderable: e.renderForms
            }) || this;
        }
        g(e, t);
        var r = e.prototype;
        r.render = function i() {
            var t = this;
            this.container.classList.add("choiceWidgetAnnotation");
            var e = this.annotationStorage;
            var r = this.data.id;
            var i = e.getValue(r, {
                value: this.data.fieldValue
            });
            var n = document.createElement("select");
            ch.add(n);
            n.setAttribute("data-element-id", r);
            n.disabled = this.data.readOnly;
            this._setRequired(n, this.data.required);
            n.name = this.data.fieldName;
            n.tabIndex = 0;
            var a = this.data.combo && this.data.options.length > 0;
            if (!this.data.combo) {
                n.size = this.data.options.length;
                if (this.data.multiSelect) {
                    n.multiple = true;
                }
            }
            n.addEventListener("resetform", (function(e) {
                var r = t.data.defaultFieldValue;
                for (var i of n.options) {
                    i.selected = i.value === r;
                }
            }));
            for (var s of this.data.options) {
                var o = document.createElement("option");
                o.textContent = s.displayValue;
                o.value = s.exportValue;
                if (i.value.includes(s.exportValue)) {
                    o.setAttribute("selected", true);
                    a = false;
                }
                n.append(o);
            }
            var l = null;
            if (a) {
                var u = document.createElement("option");
                u.value = " ";
                u.setAttribute("hidden", true);
                u.setAttribute("selected", true);
                n.prepend(u);
                l = function() {
                    u.remove();
                    n.removeEventListener("input", l);
                    l = null;
                };
                n.addEventListener("input", l);
            }
            var h = function(t) {
                var e = t ? "value" : "textContent";
                var {options: r, multiple: i} = n;
                if (!i) {
                    return r.selectedIndex === -1 ? null : r[r.selectedIndex][e];
                }
                return Array.prototype.filter.call(r, (function(t) {
                    return t.selected;
                })).map((function(t) {
                    return t[e];
                }));
            };
            var c = h(false);
            var d = function(t) {
                var e = t.target.options;
                return Array.prototype.map.call(e, (function(t) {
                    return {
                        displayValue: t.textContent,
                        exportValue: t.value
                    };
                }));
            };
            if (this.enableScripting && this.hasJSActions) {
                n.addEventListener("updatefromsandbox", (function(i) {
                    var a = {
                        value: function(t) {
                            var i;
                            (i = l) === null || i === void 0 ? void 0 : i();
                            var a = t.detail.value;
                            var s = new Set(Array.isArray(a) ? a : [ a ]);
                            for (var o of n.options) {
                                o.selected = s.has(o.value);
                            }
                            e.setValue(r, {
                                value: h(true)
                            });
                            c = h(false);
                        },
                        multipleSelection: function(t) {
                            n.multiple = true;
                        },
                        remove: function(t) {
                            var i = n.options;
                            var a = t.detail.remove;
                            i[a].selected = false;
                            n.remove(a);
                            if (i.length > 0) {
                                var s = Array.prototype.findIndex.call(i, (function(t) {
                                    return t.selected;
                                }));
                                if (s === -1) {
                                    i[0].selected = true;
                                }
                            }
                            e.setValue(r, {
                                value: h(true),
                                items: d(t)
                            });
                            c = h(false);
                        },
                        clear: function(t) {
                            while (n.length !== 0) {
                                n.remove(0);
                            }
                            e.setValue(r, {
                                value: null,
                                items: []
                            });
                            c = h(false);
                        },
                        insert: function(t) {
                            var {index: i, displayValue: a, exportValue: s} = t.detail.insert;
                            var o = n.children[i];
                            var l = document.createElement("option");
                            l.textContent = a;
                            l.value = s;
                            if (o) {
                                o.before(l);
                            } else {
                                n.append(l);
                            }
                            e.setValue(r, {
                                value: h(true),
                                items: d(t)
                            });
                            c = h(false);
                        },
                        items: function(t) {
                            var {items: i} = t.detail;
                            while (n.length !== 0) {
                                n.remove(0);
                            }
                            for (var a of i) {
                                var {displayValue: s, exportValue: o} = a;
                                var l = document.createElement("option");
                                l.textContent = s;
                                l.value = o;
                                n.append(l);
                            }
                            if (n.options.length > 0) {
                                n.options[0].selected = true;
                            }
                            e.setValue(r, {
                                value: h(true),
                                items: d(t)
                            });
                            c = h(false);
                        },
                        indices: function(t) {
                            var i = new Set(t.detail.indices);
                            for (var n of t.target.options) {
                                n.selected = i.has(n.index);
                            }
                            e.setValue(r, {
                                value: h(true)
                            });
                            c = h(false);
                        },
                        editable: function(t) {
                            t.target.disabled = !t.detail.editable;
                        }
                    };
                    t._dispatchEventFromSandbox(a, i);
                }));
                n.addEventListener("input", (function(i) {
                    var n;
                    var a = h(true);
                    var s = h(false);
                    e.setValue(r, {
                        value: a
                    });
                    i.preventDefault();
                    (n = t.linkService.eventBus) === null || n === void 0 ? void 0 : n.dispatch("dispatcheventinsandbox", {
                        source: t,
                        detail: {
                            id: r,
                            name: "Keystroke",
                            value: c,
                            change: s,
                            changeEx: a,
                            willCommit: false,
                            commitKey: 1,
                            keyDown: false
                        }
                    });
                }));
                this._setEventListeners(n, null, [ [ "focus", "Focus" ], [ "blur", "Blur" ], [ "mousedown", "Mouse Down" ], [ "mouseenter", "Mouse Enter" ], [ "mouseleave", "Mouse Exit" ], [ "mouseup", "Mouse Up" ], [ "input", "Action" ], [ "input", "Validate" ] ], (function(t) {
                    return t.target.value;
                }));
            } else {
                n.addEventListener("input", (function(t) {
                    e.setValue(r, {
                        value: h(true)
                    });
                }));
            }
            if (this.data.combo) {
                this._setTextStyle(n);
            }
            this._setBackgroundColor(n);
            this._setDefaultPropertiesFromJS(n);
            this.container.append(n);
            return this.container;
        };
        return e;
    }(Sh);
    var Lh = function(t) {
        function e(e) {
            var r;
            var {data: i, elements: n} = e;
            r = t.call(this, e, {
                isRenderable: yh._hasPopupData(i)
            }) || this;
            r.elements = n;
            r.popup = null;
            return r;
        }
        g(e, t);
        var r = e.prototype;
        r.render = function i() {
            var {container: t} = this;
            t.classList.add("popupAnnotation");
            t.role = "comment";
            var e = this.popup = new ec({
                container: this.container,
                color: this.data.color,
                titleObj: this.data.titleObj,
                modificationDate: this.data.modificationDate || this.data.creationDate,
                contentsObj: this.data.contentsObj,
                richText: this.data.richText,
                rect: this.data.rect,
                parentRect: this.data.parentRect || null,
                parent: this.parent,
                elements: this.elements,
                open: this.data.open
            });
            var r = [];
            for (var i of this.elements) {
                i.popup = e;
                i.container.ariaHasPopup = "dialog";
                r.push(i.data.id);
                i.addHighlightArea();
            }
            this.container.setAttribute("aria-controls", r.map((function(t) {
                return "" + Nt + t;
            })).join(","));
            return this.container;
        };
        return e;
    }(yh);
    var Dh = new WeakMap;
    var Nh = new WeakMap;
    var Oh = new WeakMap;
    var Fh = new WeakMap;
    var Wh = new WeakMap;
    var Bh = new WeakMap;
    var jh = new WeakMap;
    var Hh = new WeakMap;
    var Uh = new WeakMap;
    var zh = new WeakMap;
    var Gh = new WeakMap;
    var Vh = new WeakMap;
    var qh = new WeakMap;
    var Xh = new WeakMap;
    var Yh = new WeakMap;
    var Kh = new WeakMap;
    var Qh = new WeakMap;
    var Jh = new WeakMap;
    var Zh = new WeakMap;
    var $h = new WeakMap;
    var tc = new WeakSet;
    var ec = function() {
        function t(t) {
            var {container: e, color: i, elements: n, titleObj: a, modificationDate: s, contentsObj: o, richText: c, parent: f, rect: v, parentRect: p, open: g} = t;
            d(this, tc);
            u(this, Dh, r(tc, this, oc).bind(this));
            u(this, Nh, r(tc, this, cc).bind(this));
            u(this, Oh, r(tc, this, hc).bind(this));
            u(this, Fh, r(tc, this, uc).bind(this));
            u(this, Wh, null);
            u(this, Bh, null);
            u(this, jh, null);
            u(this, Hh, null);
            u(this, Uh, null);
            u(this, zh, null);
            u(this, Gh, null);
            u(this, Vh, false);
            u(this, qh, null);
            u(this, Xh, null);
            u(this, Yh, null);
            u(this, Kh, null);
            u(this, Qh, null);
            u(this, Jh, null);
            u(this, Zh, null);
            u(this, $h, false);
            h(Bh, this, e);
            h(Jh, this, a);
            h(jh, this, o);
            h(Qh, this, c);
            h(zh, this, f);
            h(Wh, this, i);
            h(Kh, this, v);
            h(Gh, this, p);
            h(Uh, this, n);
            h(Hh, this, ee.toDateObject(s));
            this.trigger = n.flatMap((function(t) {
                return t.getElementsToTriggerPopup();
            }));
            r(tc, this, rc).call(this);
            l(Bh, this).hidden = true;
            if (g) {
                r(tc, this, uc).call(this);
            }
        }
        var e = t.prototype;
        e.render = function i() {
            var t;
            if (l(qh, this)) {
                return;
            }
            var e = h(qh, this, document.createElement("div"));
            e.className = "popup";
            if (l(Wh, this)) {
                var r = e.style.outlineColor = Mt.makeHexColor.apply(Mt, l(Wh, this));
                e.style.backgroundColor = "color-mix(in srgb, " + r + " 30%, white)";
            }
            var i = document.createElement("span");
            i.className = "header";
            if ((t = l(Jh, this)) !== null && t !== void 0 && t.str) {
                var n = document.createElement("span");
                n.className = "title";
                i.append(n);
                ({dir: n.dir, str: n.textContent} = l(Jh, this));
            }
            e.append(i);
            if (l(Hh, this)) {
                var a = document.createElement("time");
                a.className = "popupDate";
                a.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string");
                a.setAttribute("data-l10n-args", JSON.stringify({
                    dateObj: l(Hh, this).valueOf()
                }));
                a.dateTime = l(Hh, this).toISOString();
                i.append(a);
            }
            var s = c(tc, this, ic);
            if (s) {
                uh.render({
                    xfaHtml: s,
                    intent: "richText",
                    div: e
                });
                e.lastChild.classList.add("richText", "popupContent");
            } else {
                var o = this._formatContents(l(jh, this));
                e.append(o);
            }
            l(Bh, this).append(e);
        };
        e._formatContents = function n(t) {
            var {str: e, dir: r} = t;
            var i = document.createElement("p");
            i.classList.add("popupContent");
            i.dir = r;
            var n = e.split(/(?:\r\n?|\n)/);
            for (var a = 0, s = n.length; a < s; ++a) {
                var o = n[a];
                i.append(document.createTextNode(o));
                if (a < s - 1) {
                    i.append(document.createElement("br"));
                }
            }
            return i;
        };
        e.updateEdited = function a(t) {
            var e;
            var {rect: i, popup: n, deleted: a} = t;
            if (a || n !== null && n !== void 0 && n.deleted) {
                this.remove();
                return;
            }
            r(tc, this, rc).call(this);
            l(Zh, this) || h(Zh, this, {
                contentsObj: l(jh, this),
                richText: l(Qh, this)
            });
            if (i) {
                h(Yh, this, null);
            }
            if (n) {
                h(Qh, this, r(tc, this, sc).call(this, n.text));
                h(Hh, this, ee.toDateObject(n.date));
                h(jh, this, null);
            }
            (e = l(qh, this)) === null || e === void 0 ? void 0 : e.remove();
            h(qh, this, null);
        };
        e.resetEdited = function s() {
            var t;
            if (!l(Zh, this)) {
                return;
            }
            ({contentsObj: b(h, [ jh, this ])._, richText: b(h, [ Qh, this ])._} = l(Zh, this));
            h(Zh, this, null);
            (t = l(qh, this)) === null || t === void 0 ? void 0 : t.remove();
            h(qh, this, null);
            h(Yh, this, null);
        };
        e.remove = function o() {
            var t, e;
            (t = l(Xh, this)) === null || t === void 0 ? void 0 : t.abort();
            h(Xh, this, null);
            (e = l(qh, this)) === null || e === void 0 ? void 0 : e.remove();
            h(qh, this, null);
            h($h, this, false);
            h(Vh, this, false);
            for (var r of this.trigger) {
                r.classList.remove("popupTriggerArea");
            }
        };
        e.forceHide = function f() {
            h($h, this, this.isVisible);
            if (!l($h, this)) {
                return;
            }
            l(Bh, this).hidden = true;
        };
        e.maybeShow = function p() {
            r(tc, this, rc).call(this);
            if (!l($h, this)) {
                return;
            }
            if (!l(qh, this)) {
                r(tc, this, hc).call(this);
            }
            h($h, this, false);
            l(Bh, this).hidden = false;
        };
        return v(t, [ {
            key: "isVisible",
            get: function() {
                return l(Bh, this).hidden === false;
            }
        } ]);
    }();
    function rc() {
        if (l(Xh, this)) {
            return;
        }
        h(Xh, this, new AbortController);
        var {signal: t} = l(Xh, this);
        for (var e of this.trigger) {
            e.addEventListener("click", l(Fh, this), {
                signal: t
            });
            e.addEventListener("mouseenter", l(Oh, this), {
                signal: t
            });
            e.addEventListener("mouseleave", l(Nh, this), {
                signal: t
            });
            e.classList.add("popupTriggerArea");
        }
        for (var r of l(Uh, this)) {
            var i;
            (i = r.container) === null || i === void 0 ? void 0 : i.addEventListener("keydown", l(Dh, this), {
                signal: t
            });
        }
    }
    function ic(t) {
        var e = l(Qh, t);
        var r = l(jh, t);
        if (e !== null && e !== void 0 && e.str && (!(r !== null && r !== void 0 && r.str) || r.str === e.str)) {
            return l(Qh, t).html || null;
        }
        return null;
    }
    function nc(t) {
        var e, r, i;
        return ((e = c(tc, t, ic)) === null || e === void 0 ? void 0 : (r = e.attributes) === null || r === void 0 ? void 0 : (i = r.style) === null || i === void 0 ? void 0 : i.fontSize) || 0;
    }
    function ac(t) {
        var e, r, i;
        return ((e = c(tc, t, ic)) === null || e === void 0 ? void 0 : (r = e.attributes) === null || r === void 0 ? void 0 : (i = r.style) === null || i === void 0 ? void 0 : i.color) || null;
    }
    function sc(t) {
        var e = [];
        var r = {
            str: t,
            html: {
                name: "div",
                attributes: {
                    dir: "auto"
                },
                children: [ {
                    name: "p",
                    children: e
                } ]
            }
        };
        var i = {
            style: {
                color: c(tc, this, ac),
                fontSize: c(tc, this, nc) ? "calc(" + c(tc, this, nc) + "px * var(--total-scale-factor))" : ""
            }
        };
        for (var n of t.split("\n")) {
            e.push({
                name: "span",
                value: n,
                attributes: i
            });
        }
        return r;
    }
    function oc(t) {
        if (t.altKey || t.shiftKey || t.ctrlKey || t.metaKey) {
            return;
        }
        if (t.key === "Enter" || t.key === "Escape" && l(Vh, this)) {
            r(tc, this, uc).call(this);
        }
    }
    function lc() {
        if (l(Yh, this) !== null) {
            return;
        }
        var {page: {view: t}, viewport: {rawDims: {pageWidth: e, pageHeight: r, pageX: i, pageY: n}}} = l(zh, this);
        var a = !!l(Gh, this);
        var s = a ? l(Gh, this) : l(Kh, this);
        for (var o of l(Uh, this)) {
            if (!s || Mt.intersect(o.data.rect, s) !== null) {
                s = o.data.rect;
                a = true;
                break;
            }
        }
        var u = Mt.normalizeRect([ s[0], t[3] - s[1] + t[1], s[2], t[3] - s[3] + t[1] ]);
        var c = 5;
        var d = a ? s[2] - s[0] + c : 0;
        var f = u[0] + d;
        var v = u[1];
        h(Yh, this, [ 100 * (f - i) / e, 100 * (v - n) / r ]);
        var {style: p} = l(Bh, this);
        p.left = l(Yh, this)[0] + "%";
        p.top = l(Yh, this)[1] + "%";
    }
    function uc() {
        h(Vh, this, !l(Vh, this));
        if (l(Vh, this)) {
            r(tc, this, hc).call(this);
            l(Bh, this).addEventListener("click", l(Fh, this));
            l(Bh, this).addEventListener("keydown", l(Dh, this));
        } else {
            r(tc, this, cc).call(this);
            l(Bh, this).removeEventListener("click", l(Fh, this));
            l(Bh, this).removeEventListener("keydown", l(Dh, this));
        }
    }
    function hc() {
        if (!l(qh, this)) {
            this.render();
        }
        if (!this.isVisible) {
            r(tc, this, lc).call(this);
            l(Bh, this).hidden = false;
            l(Bh, this).style.zIndex = parseInt(l(Bh, this).style.zIndex) + 1e3;
        } else if (l(Vh, this)) {
            l(Bh, this).classList.add("focused");
        }
    }
    function cc() {
        l(Bh, this).classList.remove("focused");
        if (l(Vh, this) || !this.isVisible) {
            return;
        }
        l(Bh, this).hidden = true;
        l(Bh, this).style.zIndex = parseInt(l(Bh, this).style.zIndex) - 1e3;
    }
    var dc = function(t) {
        function e(e) {
            var r;
            r = t.call(this, e, {
                isRenderable: true,
                ignoreBorder: true
            }) || this;
            r.textContent = e.data.textContent;
            r.textPosition = e.data.textPosition;
            r.annotationEditorType = V.FREETEXT;
            return r;
        }
        g(e, t);
        var r = e.prototype;
        r.render = function i() {
            this.container.classList.add("freeTextAnnotation");
            if (this.textContent) {
                var t = document.createElement("div");
                t.classList.add("annotationTextContent");
                t.setAttribute("role", "comment");
                for (var e of this.textContent) {
                    var r = document.createElement("span");
                    r.textContent = e;
                    t.append(r);
                }
                this.container.append(t);
            }
            if (!this.data.popupRef && this.hasPopupData) {
                this._createPopup();
            }
            this._editOnDoubleClick();
            return this.container;
        };
        return e;
    }(yh);
    var fc = new WeakMap;
    var vc = function(t) {
        function e(e) {
            var r;
            r = t.call(this, e, {
                isRenderable: true,
                ignoreBorder: true
            }) || this;
            u(r, fc, null);
            return r;
        }
        g(e, t);
        var r = e.prototype;
        r.render = function i() {
            this.container.classList.add("lineAnnotation");
            var {data: t, width: e, height: r} = this;
            var i = this.svgFactory.create(e, r, true);
            var n = h(fc, this, this.svgFactory.createElement("svg:line"));
            n.setAttribute("x1", t.rect[2] - t.lineCoordinates[0]);
            n.setAttribute("y1", t.rect[3] - t.lineCoordinates[1]);
            n.setAttribute("x2", t.rect[2] - t.lineCoordinates[2]);
            n.setAttribute("y2", t.rect[3] - t.lineCoordinates[3]);
            n.setAttribute("stroke-width", t.borderStyle.width || 1);
            n.setAttribute("stroke", "transparent");
            n.setAttribute("fill", "transparent");
            i.append(n);
            this.container.append(i);
            if (!t.popupRef && this.hasPopupData) {
                this._createPopup();
            }
            return this.container;
        };
        r.getElementsToTriggerPopup = function n() {
            return l(fc, this);
        };
        r.addHighlightArea = function a() {
            this.container.classList.add("highlightArea");
        };
        return e;
    }(yh);
    var pc = new WeakMap;
    var gc = function(t) {
        function e(e) {
            var r;
            r = t.call(this, e, {
                isRenderable: true,
                ignoreBorder: true
            }) || this;
            u(r, pc, null);
            return r;
        }
        g(e, t);
        var r = e.prototype;
        r.render = function i() {
            this.container.classList.add("squareAnnotation");
            var {data: t, width: e, height: r} = this;
            var i = this.svgFactory.create(e, r, true);
            var n = t.borderStyle.width;
            var a = h(pc, this, this.svgFactory.createElement("svg:rect"));
            a.setAttribute("x", n / 2);
            a.setAttribute("y", n / 2);
            a.setAttribute("width", e - n);
            a.setAttribute("height", r - n);
            a.setAttribute("stroke-width", n || 1);
            a.setAttribute("stroke", "transparent");
            a.setAttribute("fill", "transparent");
            i.append(a);
            this.container.append(i);
            if (!t.popupRef && this.hasPopupData) {
                this._createPopup();
            }
            return this.container;
        };
        r.getElementsToTriggerPopup = function n() {
            return l(pc, this);
        };
        r.addHighlightArea = function a() {
            this.container.classList.add("highlightArea");
        };
        return e;
    }(yh);
    var mc = new WeakMap;
    var yc = function(t) {
        function e(e) {
            var r;
            r = t.call(this, e, {
                isRenderable: true,
                ignoreBorder: true
            }) || this;
            u(r, mc, null);
            return r;
        }
        g(e, t);
        var r = e.prototype;
        r.render = function i() {
            this.container.classList.add("circleAnnotation");
            var {data: t, width: e, height: r} = this;
            var i = this.svgFactory.create(e, r, true);
            var n = t.borderStyle.width;
            var a = h(mc, this, this.svgFactory.createElement("svg:ellipse"));
            a.setAttribute("cx", e / 2);
            a.setAttribute("cy", r / 2);
            a.setAttribute("rx", e / 2 - n / 2);
            a.setAttribute("ry", r / 2 - n / 2);
            a.setAttribute("stroke-width", n || 1);
            a.setAttribute("stroke", "transparent");
            a.setAttribute("fill", "transparent");
            i.append(a);
            this.container.append(i);
            if (!t.popupRef && this.hasPopupData) {
                this._createPopup();
            }
            return this.container;
        };
        r.getElementsToTriggerPopup = function n() {
            return l(mc, this);
        };
        r.addHighlightArea = function a() {
            this.container.classList.add("highlightArea");
        };
        return e;
    }(yh);
    var wc = new WeakMap;
    var bc = function(t) {
        function e(e) {
            var r;
            r = t.call(this, e, {
                isRenderable: true,
                ignoreBorder: true
            }) || this;
            u(r, wc, null);
            r.containerClassName = "polylineAnnotation";
            r.svgElementName = "svg:polyline";
            return r;
        }
        g(e, t);
        var r = e.prototype;
        r.render = function i() {
            this.container.classList.add(this.containerClassName);
            var {data: {rect: t, vertices: e, borderStyle: r, popupRef: i}, width: n, height: a} = this;
            if (!e) {
                return this.container;
            }
            var s = this.svgFactory.create(n, a, true);
            var o = [];
            for (var l = 0, u = e.length; l < u; l += 2) {
                var c = e[l] - t[0];
                var d = t[3] - e[l + 1];
                o.push(c + "," + d);
            }
            o = o.join(" ");
            var f = h(wc, this, this.svgFactory.createElement(this.svgElementName));
            f.setAttribute("points", o);
            f.setAttribute("stroke-width", r.width || 1);
            f.setAttribute("stroke", "transparent");
            f.setAttribute("fill", "transparent");
            s.append(f);
            this.container.append(s);
            if (!i && this.hasPopupData) {
                this._createPopup();
            }
            return this.container;
        };
        r.getElementsToTriggerPopup = function n() {
            return l(wc, this);
        };
        r.addHighlightArea = function a() {
            this.container.classList.add("highlightArea");
        };
        return e;
    }(yh);
    var Ac = function(t) {
        function e(e) {
            var r;
            r = t.call(this, e) || this;
            r.containerClassName = "polygonAnnotation";
            r.svgElementName = "svg:polygon";
            return r;
        }
        g(e, t);
        return e;
    }(bc);
    var _c = function(t) {
        function e(e) {
            return t.call(this, e, {
                isRenderable: true,
                ignoreBorder: true
            }) || this;
        }
        g(e, t);
        var r = e.prototype;
        r.render = function i() {
            this.container.classList.add("caretAnnotation");
            if (!this.data.popupRef && this.hasPopupData) {
                this._createPopup();
            }
            return this.container;
        };
        return e;
    }(yh);
    var kc = new WeakMap;
    var xc = new WeakMap;
    var Ec = new WeakSet;
    var Sc = function(t) {
        function e(e) {
            var r;
            r = t.call(this, e, {
                isRenderable: true,
                ignoreBorder: true
            }) || this;
            d(r, Ec);
            u(r, kc, null);
            u(r, xc, []);
            r.containerClassName = "inkAnnotation";
            r.svgElementName = "svg:polyline";
            r.annotationEditorType = r.data.it === "InkHighlight" ? V.HIGHLIGHT : V.INK;
            return r;
        }
        g(e, t);
        var i = e.prototype;
        i.render = function n() {
            this.container.classList.add(this.containerClassName);
            var {data: {rect: t, rotation: e, inkLists: i, borderStyle: n, popupRef: a}} = this;
            var {transform: s, width: o, height: u} = r(Ec, this, Mc).call(this, e, t);
            var c = this.svgFactory.create(o, u, true);
            var d = h(kc, this, this.svgFactory.createElement("svg:g"));
            c.append(d);
            d.setAttribute("stroke-width", n.width || 1);
            d.setAttribute("stroke-linecap", "round");
            d.setAttribute("stroke-linejoin", "round");
            d.setAttribute("stroke-miterlimit", 10);
            d.setAttribute("stroke", "transparent");
            d.setAttribute("fill", "transparent");
            d.setAttribute("transform", s);
            for (var f = 0, v = i.length; f < v; f++) {
                var p = this.svgFactory.createElement(this.svgElementName);
                l(xc, this).push(p);
                p.setAttribute("points", i[f].join(","));
                d.append(p);
            }
            if (!a && this.hasPopupData) {
                this._createPopup();
            }
            this.container.append(c);
            this._editOnDoubleClick();
            return this.container;
        };
        i.updateEdited = function a(e) {
            t.prototype.updateEdited.call(this, e);
            var {thickness: i, points: n, rect: a} = e;
            var s = l(kc, this);
            if (i >= 0) {
                s.setAttribute("stroke-width", i || 1);
            }
            if (n) {
                for (var o = 0, u = l(xc, this).length; o < u; o++) {
                    l(xc, this)[o].setAttribute("points", n[o].join(","));
                }
            }
            if (a) {
                var {transform: h, width: c, height: d} = r(Ec, this, Mc).call(this, this.data.rotation, a);
                var f = s.parentElement;
                f.setAttribute("viewBox", "0 0 " + c + " " + d);
                s.setAttribute("transform", h);
            }
        };
        i.getElementsToTriggerPopup = function s() {
            return l(xc, this);
        };
        i.addHighlightArea = function o() {
            this.container.classList.add("highlightArea");
        };
        return e;
    }(yh);
    function Mc(t, e) {
        switch (t) {
          case 90:
            return {
                transform: "rotate(90) translate(" + -e[0] + "," + e[1] + ") scale(1,-1)",
                width: e[3] - e[1],
                height: e[2] - e[0]
            };

          case 180:
            return {
                transform: "rotate(180) translate(" + -e[2] + "," + e[1] + ") scale(1,-1)",
                width: e[2] - e[0],
                height: e[3] - e[1]
            };

          case 270:
            return {
                transform: "rotate(270) translate(" + -e[2] + "," + e[3] + ") scale(1,-1)",
                width: e[3] - e[1],
                height: e[2] - e[0]
            };

          default:
            return {
                transform: "translate(" + -e[0] + "," + e[3] + ") scale(1,-1)",
                width: e[2] - e[0],
                height: e[3] - e[1]
            };
        }
    }
    var Cc = function(t) {
        function e(e) {
            var r;
            r = t.call(this, e, {
                isRenderable: true,
                ignoreBorder: true,
                createQuadrilaterals: true
            }) || this;
            r.annotationEditorType = V.HIGHLIGHT;
            return r;
        }
        g(e, t);
        var r = e.prototype;
        r.render = function i() {
            var {data: {overlaidText: t, popupRef: e}} = this;
            if (!e && this.hasPopupData) {
                this._createPopup();
            }
            this.container.classList.add("highlightAnnotation");
            this._editOnDoubleClick();
            if (t) {
                var r = document.createElement("mark");
                r.classList.add("overlaidText");
                r.textContent = t;
                this.container.append(r);
            }
            return this.container;
        };
        return e;
    }(yh);
    var Tc = function(t) {
        function e(e) {
            return t.call(this, e, {
                isRenderable: true,
                ignoreBorder: true,
                createQuadrilaterals: true
            }) || this;
        }
        g(e, t);
        var r = e.prototype;
        r.render = function i() {
            var {data: {overlaidText: t, popupRef: e}} = this;
            if (!e && this.hasPopupData) {
                this._createPopup();
            }
            this.container.classList.add("underlineAnnotation");
            if (t) {
                var r = document.createElement("u");
                r.classList.add("overlaidText");
                r.textContent = t;
                this.container.append(r);
            }
            return this.container;
        };
        return e;
    }(yh);
    var Rc = function(t) {
        function e(e) {
            return t.call(this, e, {
                isRenderable: true,
                ignoreBorder: true,
                createQuadrilaterals: true
            }) || this;
        }
        g(e, t);
        var r = e.prototype;
        r.render = function i() {
            var {data: {overlaidText: t, popupRef: e}} = this;
            if (!e && this.hasPopupData) {
                this._createPopup();
            }
            this.container.classList.add("squigglyAnnotation");
            if (t) {
                var r = document.createElement("u");
                r.classList.add("overlaidText");
                r.textContent = t;
                this.container.append(r);
            }
            return this.container;
        };
        return e;
    }(yh);
    var Ic = function(t) {
        function e(e) {
            return t.call(this, e, {
                isRenderable: true,
                ignoreBorder: true,
                createQuadrilaterals: true
            }) || this;
        }
        g(e, t);
        var r = e.prototype;
        r.render = function i() {
            var {data: {overlaidText: t, popupRef: e}} = this;
            if (!e && this.hasPopupData) {
                this._createPopup();
            }
            this.container.classList.add("strikeoutAnnotation");
            if (t) {
                var r = document.createElement("s");
                r.classList.add("overlaidText");
                r.textContent = t;
                this.container.append(r);
            }
            return this.container;
        };
        return e;
    }(yh);
    var Pc = function(t) {
        function e(e) {
            var r;
            r = t.call(this, e, {
                isRenderable: true,
                ignoreBorder: true
            }) || this;
            r.annotationEditorType = V.STAMP;
            return r;
        }
        g(e, t);
        var r = e.prototype;
        r.render = function i() {
            this.container.classList.add("stampAnnotation");
            this.container.setAttribute("role", "img");
            if (!this.data.popupRef && this.hasPopupData) {
                this._createPopup();
            }
            this._editOnDoubleClick();
            return this.container;
        };
        return e;
    }(yh);
    var Lc = new WeakMap;
    var Dc = new WeakSet;
    var Nc = function(t) {
        function e(e) {
            var r;
            var i;
            i = t.call(this, e, {
                isRenderable: true
            }) || this;
            d(i, Dc);
            u(i, Lc, null);
            var {file: n} = i.data;
            i.filename = n.filename;
            i.content = n.content;
            (r = i.linkService.eventBus) === null || r === void 0 ? void 0 : r.dispatch("fileattachmentannotation", {
                source: i,
                ...n
            });
            return i;
        }
        g(e, t);
        var i = e.prototype;
        i.render = function n() {
            var t = this;
            this.container.classList.add("fileAttachmentAnnotation");
            var {container: e, data: i} = this;
            var n;
            if (i.hasAppearance || i.fillAlpha === 0) {
                n = document.createElement("div");
            } else {
                n = document.createElement("img");
                n.src = this.imageResourcesPath + "annotation-" + (/paperclip/i.test(i.name) ? "paperclip" : "pushpin") + ".svg";
                if (i.fillAlpha && i.fillAlpha < 1) {
                    n.style = "filter: opacity(" + Math.round(i.fillAlpha * 100) + "%);";
                }
            }
            n.addEventListener("dblclick", r(Dc, this, Oc).bind(this));
            h(Lc, this, n);
            var {isMac: a} = Et.platform;
            e.addEventListener("keydown", (function(e) {
                if (e.key === "Enter" && (a ? e.metaKey : e.ctrlKey)) {
                    r(Dc, t, Oc).call(t);
                }
            }));
            if (!i.popupRef && this.hasPopupData) {
                this._createPopup();
            } else {
                n.classList.add("popupTriggerArea");
            }
            e.append(n);
            return e;
        };
        i.getElementsToTriggerPopup = function a() {
            return l(Lc, this);
        };
        i.addHighlightArea = function s() {
            this.container.classList.add("highlightArea");
        };
        return e;
    }(yh);
    function Oc() {
        var t;
        (t = this.downloadManager) === null || t === void 0 ? void 0 : t.openOrDownloadData(this.content, this.filename);
    }
    var Fc = new WeakMap;
    var Wc = new WeakMap;
    var Bc = new WeakMap;
    var jc = new WeakMap;
    var Hc = new WeakSet;
    var Uc = function() {
        function t(t) {
            var {div: e, accessibilityManager: r, annotationCanvasMap: i, annotationEditorUIManager: n, page: a, viewport: s, structTreeLayer: o} = t;
            d(this, Hc);
            u(this, Fc, null);
            u(this, Wc, null);
            u(this, Bc, new Map);
            u(this, jc, null);
            this.div = e;
            h(Fc, this, r);
            h(Wc, this, i);
            h(jc, this, o || null);
            this.page = a;
            this.viewport = s;
            this.zIndex = 0;
            this._annotationEditorUIManager = n;
        }
        var e = t.prototype;
        e.hasEditableAnnotations = function i() {
            return l(Bc, this).size > 0;
        };
        e.render = function() {
            var t = s((function*(t) {
                var {annotations: e} = t;
                var i = this.div;
                le(i, this.viewport);
                var n = new Map;
                var a = {
                    data: null,
                    layer: i,
                    linkService: t.linkService,
                    downloadManager: t.downloadManager,
                    imageResourcesPath: t.imageResourcesPath || "",
                    renderForms: t.renderForms !== false,
                    svgFactory: new lh,
                    annotationStorage: t.annotationStorage || new la,
                    enableScripting: t.enableScripting === true,
                    hasJSActions: t.hasJSActions,
                    fieldObjects: t.fieldObjects,
                    parent: this,
                    elements: null
                };
                for (var s of e) {
                    if (s.noHTML) {
                        continue;
                    }
                    var o = s.annotationType === Q.POPUP;
                    if (!o) {
                        if (s.rect[2] === s.rect[0] || s.rect[3] === s.rect[1]) {
                            continue;
                        }
                    } else {
                        var u = n.get(s.id);
                        if (!u) {
                            continue;
                        }
                        a.elements = u;
                    }
                    a.data = s;
                    var h = fh.create(a);
                    if (!h.isRenderable) {
                        continue;
                    }
                    if (!o && s.popupRef) {
                        var c = n.get(s.popupRef);
                        if (!c) {
                            n.set(s.popupRef, [ h ]);
                        } else {
                            c.push(h);
                        }
                    }
                    var d = h.render();
                    if (s.hidden) {
                        d.style.visibility = "hidden";
                    }
                    yield r(Hc, this, zc).call(this, d, s.id, a.elements);
                    if (h._isEditable) {
                        var f;
                        l(Bc, this).set(h.data.id, h);
                        (f = this._annotationEditorUIManager) === null || f === void 0 ? void 0 : f.renderAnnotationElement(h);
                    }
                }
                r(Hc, this, Vc).call(this);
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.addLinkAnnotations = function() {
            var e = s((function*(e, i) {
                var n = {
                    data: null,
                    layer: this.div,
                    linkService: i,
                    svgFactory: new lh,
                    parent: this
                };
                for (var a of e) {
                    a.borderStyle ||= t._defaultBorderStyle;
                    n.data = a;
                    var s = fh.create(n);
                    if (!s.isRenderable) {
                        continue;
                    }
                    var o = s.render();
                    yield r(Hc, this, zc).call(this, o, a.id, null);
                }
            }));
            function i(t, r) {
                return e.apply(this, arguments);
            }
            return i;
        }();
        e.update = function n(t) {
            var {viewport: e} = t;
            var i = this.div;
            this.viewport = e;
            le(i, {
                rotation: e.rotation
            });
            r(Hc, this, Vc).call(this);
            i.hidden = false;
        };
        e.getEditableAnnotations = function a() {
            return Array.from(l(Bc, this).values());
        };
        e.getEditableAnnotation = function o(t) {
            return l(Bc, this).get(t);
        };
        return v(t, null, [ {
            key: "_defaultBorderStyle",
            get: function() {
                return dt(this, "_defaultBorderStyle", Object.freeze({
                    width: 1,
                    rawWidth: 1,
                    style: J.SOLID,
                    dashArray: [ 3 ],
                    horizontalCornerRadius: 0,
                    verticalCornerRadius: 0
                }));
            }
        } ]);
    }();
    function zc(t, e, r) {
        return Gc.apply(this, arguments);
    }
    function Gc() {
        Gc = s((function*(t, e, r) {
            var i;
            var n = t.firstChild || t;
            var a = n.id = "" + Nt + e;
            var s = yield (i = l(jc, this)) === null || i === void 0 ? void 0 : i.getAriaAttributes(a);
            if (s) {
                for (var [o, u] of s) {
                    n.setAttribute(o, u);
                }
            }
            if (r) {
                r.at(-1).container.after(t);
            } else {
                var h;
                this.div.append(t);
                (h = l(Fc, this)) === null || h === void 0 ? void 0 : h.moveElementInDOM(this.div, t, n, false);
            }
        }));
        return Gc.apply(this, arguments);
    }
    function Vc() {
        if (!l(Wc, this)) {
            return;
        }
        var t = this.div;
        for (var [e, r] of l(Wc, this)) {
            var i = t.querySelector('[data-annotation-id="' + e + '"]');
            if (!i) {
                continue;
            }
            r.className = "annotationContent";
            var {firstChild: n} = i;
            if (!n) {
                i.append(r);
            } else if (n.nodeName === "CANVAS") {
                n.replaceWith(r);
            } else if (!n.classList.contains("annotationContent")) {
                n.before(r);
            } else {
                n.after(r);
            }
            var a = l(Bc, this).get(e);
            if (!a) {
                continue;
            }
            if (a._hasNoCanvas) {
                var s;
                (s = this._annotationEditorUIManager) === null || s === void 0 ? void 0 : s.setMissingCanvas(e, i.id, r);
                a._hasNoCanvas = false;
            } else {
                a.canvas = r;
            }
        }
        l(Wc, this).clear();
    }
    var qc = /\r\n?|\n/g;
    var Xc = new WeakMap;
    var Yc = new WeakMap;
    var Kc = new WeakMap;
    var Qc = new WeakMap;
    var Jc = new WeakMap;
    var Zc = new WeakSet;
    var $c = function(t) {
        function e(r) {
            var i;
            i = t.call(this, {
                ...r,
                name: "freeTextEditor"
            }) || this;
            d(i, Zc);
            u(i, Xc, void 0);
            u(i, Yc, "");
            u(i, Kc, i.id + "-editor");
            u(i, Qc, null);
            u(i, Jc, void 0);
            p(i, "_colorPicker", null);
            h(Xc, i, r.color || e._defaultColor || Pn._defaultLineColor);
            h(Jc, i, r.fontSize || e._defaultFontSize);
            if (!i.annotationElementId) {
                i._uiManager.a11yAlert("pdfjs-editor-freetext-added-alert");
            }
            return i;
        }
        g(e, t);
        e.initialize = function n(t, e) {
            Pn.initialize(t, e);
            var r = getComputedStyle(document.documentElement);
            this._internalPadding = parseFloat(r.getPropertyValue("--freetext-padding"));
        };
        e.updateDefaultParams = function a(t, r) {
            switch (t) {
              case q.FREETEXT_SIZE:
                e._defaultFontSize = r;
                break;

              case q.FREETEXT_COLOR:
                e._defaultColor = r;
                break;
            }
        };
        var i = e.prototype;
        i.updateParams = function o(t, e) {
            switch (t) {
              case q.FREETEXT_SIZE:
                r(Zc, this, td).call(this, e);
                break;

              case q.FREETEXT_COLOR:
                r(Zc, this, ed).call(this, e);
                break;
            }
        };
        i._translateEmpty = function c(t, e) {
            this._uiManager.translateSelectedEditors(t, e, true);
        };
        i.getInitialTranslation = function f() {
            var t = this.parentScale;
            return [ -e._internalPadding * t, -(e._internalPadding + l(Jc, this)) * t ];
        };
        i.rebuild = function m() {
            if (!this.parent) {
                return;
            }
            t.prototype.rebuild.call(this);
            if (this.div === null) {
                return;
            }
            if (!this.isAttachedToDOM) {
                this.parent.add(this);
            }
        };
        i.enableEditMode = function y() {
            if (!t.prototype.enableEditMode.call(this)) {
                return false;
            }
            this.overlayDiv.classList.remove("enabled");
            this.editorDiv.contentEditable = true;
            this._isDraggable = false;
            this.div.removeAttribute("aria-activedescendant");
            h(Qc, this, new AbortController);
            var e = this._uiManager.combinedSignal(l(Qc, this));
            this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
                signal: e
            });
            this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
                signal: e
            });
            this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
                signal: e
            });
            this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
                signal: e
            });
            this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
                signal: e
            });
            return true;
        };
        i.disableEditMode = function w() {
            var e;
            if (!t.prototype.disableEditMode.call(this)) {
                return false;
            }
            this.overlayDiv.classList.add("enabled");
            this.editorDiv.contentEditable = false;
            this.div.setAttribute("aria-activedescendant", l(Kc, this));
            this._isDraggable = true;
            (e = l(Qc, this)) === null || e === void 0 ? void 0 : e.abort();
            h(Qc, this, null);
            this.div.focus({
                preventScroll: true
            });
            this.isEditing = false;
            this.parent.div.classList.add("freetextEditing");
            return true;
        };
        i.focusin = function b(e) {
            if (!this._focusEventsAllowed) {
                return;
            }
            t.prototype.focusin.call(this, e);
            if (e.target !== this.editorDiv) {
                this.editorDiv.focus();
            }
        };
        i.onceAdded = function A(t) {
            var e;
            if (this.width) {
                return;
            }
            this.enableEditMode();
            if (t) {
                this.editorDiv.focus();
            }
            if ((e = this._initialOptions) !== null && e !== void 0 && e.isCentered) {
                this.center();
            }
            this._initialOptions = null;
        };
        i.isEmpty = function _() {
            return !this.editorDiv || this.editorDiv.innerText.trim() === "";
        };
        i.remove = function k() {
            this.isEditing = false;
            if (this.parent) {
                this.parent.setEditingState(true);
                this.parent.div.classList.add("freetextEditing");
            }
            t.prototype.remove.call(this);
        };
        i.commit = function x() {
            var e = this;
            if (!this.isInEditMode()) {
                return;
            }
            t.prototype.commit.call(this);
            this.disableEditMode();
            var i = l(Yc, this);
            var n = h(Yc, this, r(Zc, this, rd).call(this).trimEnd());
            if (i === n) {
                return;
            }
            var a = function(t) {
                h(Yc, e, t);
                if (!t) {
                    e.remove();
                    return;
                }
                r(Zc, e, ad).call(e);
                e._uiManager.rebuild(e);
                r(Zc, e, id).call(e);
            };
            this.addCommands({
                cmd: function() {
                    a(n);
                },
                undo: function() {
                    a(i);
                },
                mustExec: false
            });
            r(Zc, this, id).call(this);
        };
        i.shouldGetKeyboardEvents = function E() {
            return this.isInEditMode();
        };
        i.enterInEditMode = function S() {
            this.enableEditMode();
            this.editorDiv.focus();
        };
        i.keydown = function M(t) {
            if (t.target === this.div && t.key === "Enter") {
                this.enterInEditMode();
                t.preventDefault();
            }
        };
        i.editorDivKeydown = function C(t) {
            e._keyboardManager.exec(this, t);
        };
        i.editorDivFocus = function T(t) {
            this.isEditing = true;
        };
        i.editorDivBlur = function R(t) {
            this.isEditing = false;
        };
        i.editorDivInput = function I(t) {
            this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
        };
        i.disableEditing = function P() {
            this.editorDiv.setAttribute("role", "comment");
            this.editorDiv.removeAttribute("aria-multiline");
        };
        i.enableEditing = function L() {
            this.editorDiv.setAttribute("role", "textbox");
            this.editorDiv.setAttribute("aria-multiline", true);
        };
        i.render = function D() {
            if (this.div) {
                return this.div;
            }
            var e, i;
            if (this._isCopy || this.annotationElementId) {
                e = this.x;
                i = this.y;
            }
            t.prototype.render.call(this);
            this.editorDiv = document.createElement("div");
            this.editorDiv.className = "internal";
            this.editorDiv.setAttribute("id", l(Kc, this));
            this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2");
            this.editorDiv.setAttribute("data-l10n-attrs", "default-content");
            this.enableEditing();
            this.editorDiv.contentEditable = true;
            var {style: n} = this.editorDiv;
            n.fontSize = "calc(" + l(Jc, this) + "px * var(--total-scale-factor))";
            n.color = l(Xc, this);
            this.div.append(this.editorDiv);
            this.overlayDiv = document.createElement("div");
            this.overlayDiv.classList.add("overlay", "enabled");
            this.div.append(this.overlayDiv);
            if (this._isCopy || this.annotationElementId) {
                var [a, s] = this.parentDimensions;
                if (this.annotationElementId) {
                    var {position: o} = this._initialData;
                    var [u, h] = this.getInitialTranslation();
                    [u, h] = this.pageTranslationToScreen(u, h);
                    var [c, d] = this.pageDimensions;
                    var [f, v] = this.pageTranslation;
                    var p, g;
                    switch (this.rotation) {
                      case 0:
                        p = e + (o[0] - f) / c;
                        g = i + this.height - (o[1] - v) / d;
                        break;

                      case 90:
                        p = e + (o[0] - f) / c;
                        g = i - (o[1] - v) / d;
                        [u, h] = [ h, -u ];
                        break;

                      case 180:
                        p = e - this.width + (o[0] - f) / c;
                        g = i - (o[1] - v) / d;
                        [u, h] = [ -u, -h ];
                        break;

                      case 270:
                        p = e + (o[0] - f - this.height * d) / c;
                        g = i + (o[1] - v - this.width * c) / d;
                        [u, h] = [ -h, u ];
                        break;
                    }
                    this.setAt(p * a, g * s, u, h);
                } else {
                    this._moveAfterPaste(e, i);
                }
                r(Zc, this, ad).call(this);
                this._isDraggable = true;
                this.editorDiv.contentEditable = false;
            } else {
                this._isDraggable = false;
                this.editorDiv.contentEditable = true;
            }
            return this.div;
        };
        i.editorDivPaste = function N(t) {
            var i = t.clipboardData || window.clipboardData;
            var {types: n} = i;
            if (n.length === 1 && n[0] === "text/plain") {
                return;
            }
            t.preventDefault();
            var a = od.call(e, i.getData("text") || "").replaceAll(qc, "\n");
            if (!a) {
                return;
            }
            var s = window.getSelection();
            if (!s.rangeCount) {
                return;
            }
            this.editorDiv.normalize();
            s.deleteFromDocument();
            var o = s.getRangeAt(0);
            if (!a.includes("\n")) {
                o.insertNode(document.createTextNode(a));
                this.editorDiv.normalize();
                s.collapseToStart();
                return;
            }
            var {startContainer: l, startOffset: u} = o;
            var c = [];
            var d = [];
            if (l.nodeType === Node.TEXT_NODE) {
                var f = l.parentElement;
                d.push(l.nodeValue.slice(u).replaceAll(qc, ""));
                if (f !== this.editorDiv) {
                    var v = c;
                    for (var p of this.editorDiv.childNodes) {
                        if (p === f) {
                            v = d;
                            continue;
                        }
                        v.push(nd.call(e, p));
                    }
                }
                c.push(l.nodeValue.slice(0, u).replaceAll(qc, ""));
            } else if (l === this.editorDiv) {
                var g = c;
                var m = 0;
                for (var y of this.editorDiv.childNodes) {
                    if (m++ === u) {
                        g = d;
                    }
                    g.push(nd.call(e, y));
                }
            }
            h(Yc, this, "" + c.join("\n") + a + d.join("\n"));
            r(Zc, this, ad).call(this);
            var w = new Range;
            var b = Math.sumPrecise(c.map((function(t) {
                return t.length;
            })));
            for (var {firstChild: A} of this.editorDiv.childNodes) {
                if (A.nodeType === Node.TEXT_NODE) {
                    var _ = A.nodeValue.length;
                    if (b <= _) {
                        w.setStart(A, b);
                        w.setEnd(A, b);
                        break;
                    }
                    b -= _;
                }
            }
            s.removeAllRanges();
            s.addRange(w);
        };
        e.deserialize = function() {
            var r = s((function*(r, i, n) {
                var a = null;
                if (r instanceof dc) {
                    var {data: {defaultAppearanceData: {fontSize: s, fontColor: o}, rect: l, rotation: u, id: c, popupRef: d, contentsObj: f}, textContent: v, textPosition: p, parent: {page: {pageNumber: g}}} = r;
                    if (!v || v.length === 0) {
                        return null;
                    }
                    a = r = {
                        annotationType: V.FREETEXT,
                        color: Array.from(o),
                        fontSize: s,
                        value: v.join("\n"),
                        position: p,
                        pageIndex: g - 1,
                        rect: l.slice(0),
                        rotation: u,
                        annotationElementId: c,
                        id: c,
                        deleted: false,
                        popupRef: d,
                        comment: (f === null || f === void 0 ? void 0 : f.str) || null
                    };
                }
                var m = yield t.deserialize.call(this, r, i, n);
                h(Jc, m, r.fontSize);
                h(Xc, m, Mt.makeHexColor.apply(Mt, r.color));
                h(Yc, m, od.call(e, r.value));
                m._initialData = a;
                if (r.comment) {
                    m.setCommentData(r.comment);
                }
                return m;
            }));
            function i(t, e, i) {
                return r.apply(this, arguments);
            }
            return i;
        }();
        i.serialize = function O() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            if (this.isEmpty()) {
                return null;
            }
            if (this.deleted) {
                return this.serializeDeleted();
            }
            var i = e._internalPadding * this.parentScale;
            var n = this.getRect(i, i);
            var a = Pn._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : l(Xc, this));
            var s = {
                annotationType: V.FREETEXT,
                color: a,
                fontSize: l(Jc, this),
                value: r(Zc, this, sd).call(this),
                pageIndex: this.pageIndex,
                rect: n,
                rotation: this.rotation,
                structTreeParentId: this._structTreeParentId
            };
            this.addComment(s);
            if (t) {
                s.isCopy = true;
                return s;
            }
            if (this.annotationElementId && !r(Zc, this, ld).call(this, s)) {
                return null;
            }
            s.id = this.annotationElementId;
            return s;
        };
        i.renderAnnotationElement = function F(r) {
            var i = t.prototype.renderAnnotationElement.call(this, r);
            var {style: n} = i;
            n.fontSize = "calc(" + l(Jc, this) + "px * var(--total-scale-factor))";
            n.color = l(Xc, this);
            i.replaceChildren();
            for (var a of l(Yc, this).split("\n")) {
                var s = document.createElement("div");
                s.append(a ? document.createTextNode(a) : document.createElement("br"));
                i.append(s);
            }
            var o = e._internalPadding * this.parentScale;
            var u = {
                rect: this.getRect(o, o)
            };
            u.popup = this.hasEditedComment ? this.comment : {
                text: l(Yc, this)
            };
            r.updateEdited(u);
            return i;
        };
        i.resetAnnotationElement = function W(e) {
            t.prototype.resetAnnotationElement.call(this, e);
            e.resetEdited();
        };
        return v(e, [ {
            key: "propertiesToUpdate",
            get: function() {
                return [ [ q.FREETEXT_SIZE, l(Jc, this) ], [ q.FREETEXT_COLOR, l(Xc, this) ] ];
            }
        }, {
            key: "toolbarButtons",
            get: function() {
                this._colorPicker ||= new rh(this);
                return [ [ "colorPicker", this._colorPicker ] ];
            }
        }, {
            key: "colorType",
            get: function() {
                return q.FREETEXT_COLOR;
            }
        }, {
            key: "colorValue",
            get: function() {
                return l(Xc, this);
            }
        }, {
            key: "canChangeContent",
            get: function() {
                return true;
            }
        }, {
            key: "contentDiv",
            get: function() {
                return this.editorDiv;
            }
        } ], [ {
            key: "_keyboardManager",
            get: function() {
                var t = e.prototype;
                var r = function(t) {
                    return t.isEmpty();
                };
                var i = Xr.TRANSLATE_SMALL;
                var n = Xr.TRANSLATE_BIG;
                return dt(this, "_keyboardManager", new Qe([ [ [ "ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p" ], t.commitOrRemove, {
                    bubbles: true
                } ], [ [ "ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape" ], t.commitOrRemove ], [ [ "ArrowLeft", "mac+ArrowLeft" ], t._translateEmpty, {
                    args: [ -i, 0 ],
                    checker: r
                } ], [ [ "ctrl+ArrowLeft", "mac+shift+ArrowLeft" ], t._translateEmpty, {
                    args: [ -n, 0 ],
                    checker: r
                } ], [ [ "ArrowRight", "mac+ArrowRight" ], t._translateEmpty, {
                    args: [ i, 0 ],
                    checker: r
                } ], [ [ "ctrl+ArrowRight", "mac+shift+ArrowRight" ], t._translateEmpty, {
                    args: [ n, 0 ],
                    checker: r
                } ], [ [ "ArrowUp", "mac+ArrowUp" ], t._translateEmpty, {
                    args: [ 0, -i ],
                    checker: r
                } ], [ [ "ctrl+ArrowUp", "mac+shift+ArrowUp" ], t._translateEmpty, {
                    args: [ 0, -n ],
                    checker: r
                } ], [ [ "ArrowDown", "mac+ArrowDown" ], t._translateEmpty, {
                    args: [ 0, i ],
                    checker: r
                } ], [ [ "ctrl+ArrowDown", "mac+shift+ArrowDown" ], t._translateEmpty, {
                    args: [ 0, n ],
                    checker: r
                } ] ]));
            }
        }, {
            key: "defaultPropertiesToUpdate",
            get: function() {
                return [ [ q.FREETEXT_SIZE, e._defaultFontSize ], [ q.FREETEXT_COLOR, e._defaultColor || Pn._defaultLineColor ] ];
            }
        } ]);
    }(Pn);
    I = $c;
    function td(t) {
        var e = this;
        var i = function(t) {
            e.editorDiv.style.fontSize = "calc(" + t + "px * var(--total-scale-factor))";
            e.translate(0, -(t - l(Jc, e)) * e.parentScale);
            h(Jc, e, t);
            r(Zc, e, id).call(e);
        };
        var n = l(Jc, this);
        this.addCommands({
            cmd: i.bind(this, t),
            undo: i.bind(this, n),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: true,
            type: q.FREETEXT_SIZE,
            overwriteIfSameType: true,
            keepUndo: true
        });
    }
    function ed(t) {
        var e = this;
        var r = function(t) {
            var r;
            h(Xc, e, e.editorDiv.style.color = t);
            (r = e._colorPicker) === null || r === void 0 ? void 0 : r.update(t);
        };
        var i = l(Xc, this);
        this.addCommands({
            cmd: r.bind(this, t),
            undo: r.bind(this, i),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: true,
            type: q.FREETEXT_COLOR,
            overwriteIfSameType: true,
            keepUndo: true
        });
    }
    function rd() {
        var t = [];
        this.editorDiv.normalize();
        var e = null;
        for (var r of this.editorDiv.childNodes) {
            var i;
            if (((i = e) === null || i === void 0 ? void 0 : i.nodeType) === Node.TEXT_NODE && r.nodeName === "BR") {
                continue;
            }
            t.push(nd.call(I, r));
            e = r;
        }
        return t.join("\n");
    }
    function id() {
        var [t, e] = this.parentDimensions;
        var r;
        if (this.isAttachedToDOM) {
            r = this.div.getBoundingClientRect();
        } else {
            var {currentLayer: i, div: n} = this;
            var a = n.style.display;
            var s = n.classList.contains("hidden");
            n.classList.remove("hidden");
            n.style.display = "hidden";
            i.div.append(this.div);
            r = n.getBoundingClientRect();
            n.remove();
            n.style.display = a;
            n.classList.toggle("hidden", s);
        }
        if (this.rotation % 180 === this.parentRotation % 180) {
            this.width = r.width / t;
            this.height = r.height / e;
        } else {
            this.width = r.height / t;
            this.height = r.width / e;
        }
        this.fixAndSetPosition();
    }
    function nd(t) {
        return (t.nodeType === Node.TEXT_NODE ? t.nodeValue : t.innerText).replaceAll(qc, "");
    }
    function ad() {
        this.editorDiv.replaceChildren();
        if (!l(Yc, this)) {
            return;
        }
        for (var t of l(Yc, this).split("\n")) {
            var e = document.createElement("div");
            e.append(t ? document.createTextNode(t) : document.createElement("br"));
            this.editorDiv.append(e);
        }
    }
    function sd() {
        return l(Yc, this).replaceAll(" ", " ");
    }
    function od(t) {
        return t.replaceAll(" ", " ");
    }
    function ld(t) {
        var {value: e, fontSize: r, color: i, pageIndex: n} = this._initialData;
        return this.hasEditedComment || this._hasBeenMoved || t.value !== e || t.fontSize !== r || t.color.some((function(t, e) {
            return t !== i[e];
        })) || t.pageIndex !== n;
    }
    p($c, "_freeTextDefaultContent", "");
    p($c, "_internalPadding", 0);
    p($c, "_defaultColor", null);
    p($c, "_defaultFontSize", 10);
    p($c, "_type", "freetext");
    p($c, "_editorType", V.FREETEXT);
    var ud = function() {
        function t() {}
        var e = t.prototype;
        e.toSVGPath = function r() {
            ot("Abstract method `toSVGPath` must be implemented.");
        };
        e.serialize = function i(t, e) {
            ot("Abstract method `serialize` must be implemented.");
        };
        t._rescale = function n(t, e, r, i, a, s) {
            s ||= new Float32Array(t.length);
            for (var o = 0, l = t.length; o < l; o += 2) {
                s[o] = e + t[o] * i;
                s[o + 1] = r + t[o + 1] * a;
            }
            return s;
        };
        t._rescaleAndSwap = function a(t, e, r, i, n, s) {
            s ||= new Float32Array(t.length);
            for (var o = 0, l = t.length; o < l; o += 2) {
                s[o] = e + t[o + 1] * i;
                s[o + 1] = r + t[o] * n;
            }
            return s;
        };
        t._translate = function s(t, e, r, i) {
            i ||= new Float32Array(t.length);
            for (var n = 0, a = t.length; n < a; n += 2) {
                i[n] = e + t[n];
                i[n + 1] = r + t[n + 1];
            }
            return i;
        };
        t.svgRound = function o(t) {
            return Math.round(t * 1e4);
        };
        t._normalizePoint = function l(t, e, r, i, n) {
            switch (n) {
              case 90:
                return [ 1 - e / r, t / i ];

              case 180:
                return [ 1 - t / r, 1 - e / i ];

              case 270:
                return [ e / r, 1 - t / i ];

              default:
                return [ t / r, e / i ];
            }
        };
        t._normalizePagePoint = function u(t, e, r) {
            switch (r) {
              case 90:
                return [ 1 - e, t ];

              case 180:
                return [ 1 - t, 1 - e ];

              case 270:
                return [ e, 1 - t ];

              default:
                return [ t, e ];
            }
        };
        t.createBezierPoints = function h(t, e, r, i, n, a) {
            return [ (t + 5 * r) / 6, (e + 5 * i) / 6, (5 * r + n) / 6, (5 * i + a) / 6, (r + n) / 2, (i + a) / 2 ];
        };
        return v(t, [ {
            key: "box",
            get: function() {
                ot("Abstract getter `box` must be implemented.");
            }
        } ]);
    }();
    p(ud, "PRECISION", 1e-4);
    var hd = new WeakMap;
    var cd = new WeakMap;
    var dd = new WeakMap;
    var fd = new WeakMap;
    var vd = new WeakMap;
    var pd = new WeakMap;
    var gd = new WeakMap;
    var md = new WeakMap;
    var yd = new WeakMap;
    var wd = new WeakMap;
    var bd = new WeakMap;
    var Ad = new WeakMap;
    var _d = new WeakMap;
    var kd = new WeakSet;
    var xd = function() {
        function t(t, e, r, i, n) {
            var {x: a, y: s} = t;
            var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
            d(this, kd);
            u(this, hd, void 0);
            u(this, cd, []);
            u(this, dd, void 0);
            u(this, fd, void 0);
            u(this, vd, []);
            u(this, pd, new Float32Array(18));
            u(this, gd, void 0);
            u(this, md, void 0);
            u(this, yd, void 0);
            u(this, wd, void 0);
            u(this, bd, void 0);
            u(this, Ad, void 0);
            u(this, _d, []);
            h(hd, this, e);
            h(Ad, this, i * r);
            h(fd, this, n);
            l(pd, this).set([ NaN, NaN, NaN, NaN, a, s ], 6);
            h(dd, this, o);
            h(wd, this, Pd._ * r);
            h(yd, this, Dd._ * r);
            h(bd, this, r);
            l(_d, this).push(a, s);
        }
        var e = t.prototype;
        e.isEmpty = function i() {
            return isNaN(l(pd, this)[8]);
        };
        e.add = function n(t) {
            var e;
            var {x: r, y: i} = t;
            h(gd, this, r);
            h(md, this, i);
            var [n, a, s, o] = l(hd, this);
            var [u, c, d, f] = l(pd, this).subarray(8, 12);
            var v = r - d;
            var p = i - f;
            var g = Math.hypot(v, p);
            if (g < l(yd, this)) {
                return false;
            }
            var m = g - l(wd, this);
            var y = m / g;
            var w = y * v;
            var b = y * p;
            var A = u;
            var _ = c;
            u = d;
            c = f;
            d += w;
            f += b;
            (e = l(_d, this)) === null || e === void 0 ? void 0 : e.push(r, i);
            var k = -b / m;
            var x = w / m;
            var E = k * l(Ad, this);
            var S = x * l(Ad, this);
            l(pd, this).set(l(pd, this).subarray(2, 8), 0);
            l(pd, this).set([ d + E, f + S ], 4);
            l(pd, this).set(l(pd, this).subarray(14, 18), 12);
            l(pd, this).set([ d - E, f - S ], 16);
            if (isNaN(l(pd, this)[6])) {
                if (l(vd, this).length === 0) {
                    l(pd, this).set([ u + E, c + S ], 2);
                    l(vd, this).push(NaN, NaN, NaN, NaN, (u + E - n) / s, (c + S - a) / o);
                    l(pd, this).set([ u - E, c - S ], 14);
                    l(cd, this).push(NaN, NaN, NaN, NaN, (u - E - n) / s, (c - S - a) / o);
                }
                l(pd, this).set([ A, _, u, c, d, f ], 6);
                return !this.isEmpty();
            }
            l(pd, this).set([ A, _, u, c, d, f ], 6);
            var M = Math.abs(Math.atan2(_ - c, A - u) - Math.atan2(b, w));
            if (M < Math.PI / 2) {
                [u, c, d, f] = l(pd, this).subarray(2, 6);
                l(vd, this).push(NaN, NaN, NaN, NaN, ((u + d) / 2 - n) / s, ((c + f) / 2 - a) / o);
                [u, c, A, _] = l(pd, this).subarray(14, 18);
                l(cd, this).push(NaN, NaN, NaN, NaN, ((A + u) / 2 - n) / s, ((_ + c) / 2 - a) / o);
                return true;
            }
            [A, _, u, c, d, f] = l(pd, this).subarray(0, 6);
            l(vd, this).push(((A + 5 * u) / 6 - n) / s, ((_ + 5 * c) / 6 - a) / o, ((5 * u + d) / 6 - n) / s, ((5 * c + f) / 6 - a) / o, ((u + d) / 2 - n) / s, ((c + f) / 2 - a) / o);
            [d, f, u, c, A, _] = l(pd, this).subarray(12, 18);
            l(cd, this).push(((A + 5 * u) / 6 - n) / s, ((_ + 5 * c) / 6 - a) / o, ((5 * u + d) / 6 - n) / s, ((5 * c + f) / 6 - a) / o, ((u + d) / 2 - n) / s, ((c + f) / 2 - a) / o);
            return true;
        };
        e.toSVGPath = function a() {
            if (this.isEmpty()) {
                return "";
            }
            var t = l(vd, this);
            var e = l(cd, this);
            if (isNaN(l(pd, this)[6]) && !this.isEmpty()) {
                return r(kd, this, Sd).call(this);
            }
            var i = [];
            i.push("M" + t[4] + " " + t[5]);
            for (var n = 6; n < t.length; n += 6) {
                if (isNaN(t[n])) {
                    i.push("L" + t[n + 4] + " " + t[n + 5]);
                } else {
                    i.push("C" + t[n] + " " + t[n + 1] + " " + t[n + 2] + " " + t[n + 3] + " " + t[n + 4] + " " + t[n + 5]);
                }
            }
            r(kd, this, Cd).call(this, i);
            for (var a = e.length - 6; a >= 6; a -= 6) {
                if (isNaN(e[a])) {
                    i.push("L" + e[a + 4] + " " + e[a + 5]);
                } else {
                    i.push("C" + e[a] + " " + e[a + 1] + " " + e[a + 2] + " " + e[a + 3] + " " + e[a + 4] + " " + e[a + 5]);
                }
            }
            r(kd, this, Md).call(this, i);
            return i.join(" ");
        };
        e.newFreeDrawOutline = function s(t, e, r, i, n, a) {
            return new zd(t, e, r, i, n, a);
        };
        e.getOutlines = function o() {
            var t, e;
            var i = l(vd, this);
            var n = l(cd, this);
            var a = l(pd, this);
            var [s, o, u, h] = l(hd, this);
            var c = new Float32Array(((t = (e = l(_d, this)) === null || e === void 0 ? void 0 : e.length) !== null && t !== void 0 ? t : 0) + 2);
            for (var d = 0, f = c.length - 2; d < f; d += 2) {
                c[d] = (l(_d, this)[d] - s) / u;
                c[d + 1] = (l(_d, this)[d + 1] - o) / h;
            }
            c[c.length - 2] = (l(gd, this) - s) / u;
            c[c.length - 1] = (l(md, this) - o) / h;
            if (isNaN(a[6]) && !this.isEmpty()) {
                return r(kd, this, Td).call(this, c);
            }
            var v = new Float32Array(l(vd, this).length + 24 + l(cd, this).length);
            var p = i.length;
            for (var g = 0; g < p; g += 2) {
                if (isNaN(i[g])) {
                    v[g] = v[g + 1] = NaN;
                    continue;
                }
                v[g] = i[g];
                v[g + 1] = i[g + 1];
            }
            p = r(kd, this, Id).call(this, v, p);
            for (var m = n.length - 6; m >= 6; m -= 6) {
                for (var y = 0; y < 6; y += 2) {
                    if (isNaN(n[m + y])) {
                        v[p] = v[p + 1] = NaN;
                        p += 2;
                        continue;
                    }
                    v[p] = n[m + y];
                    v[p + 1] = n[m + y + 1];
                    p += 2;
                }
            }
            r(kd, this, Rd).call(this, v, p);
            return this.newFreeDrawOutline(v, c, l(hd, this), l(bd, this), l(dd, this), l(fd, this));
        };
        return t;
    }();
    function Ed() {
        var t = l(pd, this).subarray(4, 6);
        var e = l(pd, this).subarray(16, 18);
        var [r, i, n, a] = l(hd, this);
        return [ (l(gd, this) + (t[0] - e[0]) / 2 - r) / n, (l(md, this) + (t[1] - e[1]) / 2 - i) / a, (l(gd, this) + (e[0] - t[0]) / 2 - r) / n, (l(md, this) + (e[1] - t[1]) / 2 - i) / a ];
    }
    function Sd() {
        var [t, e, i, n] = l(hd, this);
        var [a, s, o, u] = r(kd, this, Ed).call(this);
        return "M" + (l(pd, this)[2] - t) / i + " " + (l(pd, this)[3] - e) / n + " L" + (l(pd, this)[4] - t) / i + " " + (l(pd, this)[5] - e) / n + " L" + a + " " + s + " L" + o + " " + u + " L" + (l(pd, this)[16] - t) / i + " " + (l(pd, this)[17] - e) / n + " L" + (l(pd, this)[14] - t) / i + " " + (l(pd, this)[15] - e) / n + " Z";
    }
    function Md(t) {
        var e = l(cd, this);
        t.push("L" + e[4] + " " + e[5] + " Z");
    }
    function Cd(t) {
        var [e, i, n, a] = l(hd, this);
        var s = l(pd, this).subarray(4, 6);
        var o = l(pd, this).subarray(16, 18);
        var [u, h, c, d] = r(kd, this, Ed).call(this);
        t.push("L" + (s[0] - e) / n + " " + (s[1] - i) / a + " L" + u + " " + h + " L" + c + " " + d + " L" + (o[0] - e) / n + " " + (o[1] - i) / a);
    }
    function Td(t) {
        var e = l(pd, this);
        var [i, n, a, s] = l(hd, this);
        var [o, u, h, c] = r(kd, this, Ed).call(this);
        var d = new Float32Array(36);
        d.set([ NaN, NaN, NaN, NaN, (e[2] - i) / a, (e[3] - n) / s, NaN, NaN, NaN, NaN, (e[4] - i) / a, (e[5] - n) / s, NaN, NaN, NaN, NaN, o, u, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, (e[16] - i) / a, (e[17] - n) / s, NaN, NaN, NaN, NaN, (e[14] - i) / a, (e[15] - n) / s ], 0);
        return this.newFreeDrawOutline(d, t, l(hd, this), l(bd, this), l(dd, this), l(fd, this));
    }
    function Rd(t, e) {
        var r = l(cd, this);
        t.set([ NaN, NaN, NaN, NaN, r[4], r[5] ], e);
        return e += 6;
    }
    function Id(t, e) {
        var i = l(pd, this).subarray(4, 6);
        var n = l(pd, this).subarray(16, 18);
        var [a, s, o, u] = l(hd, this);
        var [h, c, d, f] = r(kd, this, Ed).call(this);
        t.set([ NaN, NaN, NaN, NaN, (i[0] - a) / o, (i[1] - s) / u, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, d, f, NaN, NaN, NaN, NaN, (n[0] - a) / o, (n[1] - s) / u ], e);
        return e += 24;
    }
    var Pd = {
        _: 8
    };
    var Ld = {
        _: 2
    };
    var Dd = {
        _: Pd._ + Ld._
    };
    var Nd = new WeakMap;
    var Od = new WeakMap;
    var Fd = new WeakMap;
    var Wd = new WeakMap;
    var Bd = new WeakMap;
    var jd = new WeakMap;
    var Hd = new WeakMap;
    var Ud = new WeakSet;
    var zd = function(t) {
        function e(e, i, n, a, s, o) {
            var c;
            c = t.call(this) || this;
            d(c, Ud);
            u(c, Nd, void 0);
            u(c, Od, new Float32Array(4));
            u(c, Fd, void 0);
            u(c, Wd, void 0);
            u(c, Bd, void 0);
            u(c, jd, void 0);
            u(c, Hd, void 0);
            h(Hd, c, e);
            h(Bd, c, i);
            h(Nd, c, n);
            h(jd, c, a);
            h(Fd, c, s);
            h(Wd, c, o);
            c.lastPoint = [ NaN, NaN ];
            r(Ud, c, Gd).call(c, o);
            var [f, v, p, g] = l(Od, c);
            for (var m = 0, y = e.length; m < y; m += 2) {
                e[m] = (e[m] - f) / p;
                e[m + 1] = (e[m + 1] - v) / g;
            }
            for (var w = 0, b = i.length; w < b; w += 2) {
                i[w] = (i[w] - f) / p;
                i[w + 1] = (i[w + 1] - v) / g;
            }
            return c;
        }
        g(e, t);
        var i = e.prototype;
        i.toSVGPath = function n() {
            var t = [ "M" + l(Hd, this)[4] + " " + l(Hd, this)[5] ];
            for (var e = 6, r = l(Hd, this).length; e < r; e += 6) {
                if (isNaN(l(Hd, this)[e])) {
                    t.push("L" + l(Hd, this)[e + 4] + " " + l(Hd, this)[e + 5]);
                    continue;
                }
                t.push("C" + l(Hd, this)[e] + " " + l(Hd, this)[e + 1] + " " + l(Hd, this)[e + 2] + " " + l(Hd, this)[e + 3] + " " + l(Hd, this)[e + 4] + " " + l(Hd, this)[e + 5]);
            }
            t.push("Z");
            return t.join(" ");
        };
        i.serialize = function a(t, e) {
            var [r, i, n, a] = t;
            var s = n - r;
            var o = a - i;
            var u;
            var h;
            switch (e) {
              case 0:
                u = ud._rescale(l(Hd, this), r, a, s, -o);
                h = ud._rescale(l(Bd, this), r, a, s, -o);
                break;

              case 90:
                u = ud._rescaleAndSwap(l(Hd, this), r, i, s, o);
                h = ud._rescaleAndSwap(l(Bd, this), r, i, s, o);
                break;

              case 180:
                u = ud._rescale(l(Hd, this), n, i, -s, o);
                h = ud._rescale(l(Bd, this), n, i, -s, o);
                break;

              case 270:
                u = ud._rescaleAndSwap(l(Hd, this), n, a, -s, -o);
                h = ud._rescaleAndSwap(l(Bd, this), n, a, -s, -o);
                break;
            }
            return {
                outline: Array.from(u),
                points: [ Array.from(h) ]
            };
        };
        i.newOutliner = function s(t, e, r, i, n) {
            var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
            return new xd(t, e, r, i, n, a);
        };
        i.getNewOutline = function o(t, e) {
            var [r, i, n, a] = l(Od, this);
            var [s, o, u, h] = l(Nd, this);
            var c = n * u;
            var d = a * h;
            var f = r * u + s;
            var v = i * h + o;
            var p = this.newOutliner({
                x: l(Bd, this)[0] * c + f,
                y: l(Bd, this)[1] * d + v
            }, l(Nd, this), l(jd, this), t, l(Wd, this), e !== null && e !== void 0 ? e : l(Fd, this));
            for (var g = 2; g < l(Bd, this).length; g += 2) {
                p.add({
                    x: l(Bd, this)[g] * c + f,
                    y: l(Bd, this)[g + 1] * d + v
                });
            }
            return p.getOutlines();
        };
        return v(e, [ {
            key: "box",
            get: function() {
                return l(Od, this);
            }
        } ]);
    }(ud);
    function Gd(t) {
        var e = l(Hd, this);
        var r = e[4];
        var i = e[5];
        var n = [ r, i, r, i ];
        var a = r;
        var s = i;
        var o = t ? Math.max : Math.min;
        for (var u = 6, h = e.length; u < h; u += 6) {
            var c = e[u + 4], d = e[u + 5];
            if (isNaN(e[u])) {
                Mt.pointBoundingBox(c, d, n);
                if (s < d) {
                    a = c;
                    s = d;
                } else if (s === d) {
                    a = o(a, c);
                }
            } else {
                var f = [ Infinity, Infinity, -Infinity, -Infinity ];
                Mt.bezierBoundingBox.apply(Mt, [ r, i ].concat(e.slice(u, u + 6), [ f ]));
                Mt.rectBoundingBox.apply(Mt, f.concat([ n ]));
                if (s < f[3]) {
                    a = f[2];
                    s = f[3];
                } else if (s === f[3]) {
                    a = o(a, f[2]);
                }
            }
            r = c;
            i = d;
        }
        var v = l(Od, this);
        v[0] = n[0] - l(Fd, this);
        v[1] = n[1] - l(Fd, this);
        v[2] = n[2] - n[0] + 2 * l(Fd, this);
        v[3] = n[3] - n[1] + 2 * l(Fd, this);
        this.lastPoint = [ a, s ];
    }
    var Vd = new WeakMap;
    var qd = new WeakMap;
    var Xd = new WeakMap;
    var Yd = new WeakMap;
    var Kd = new WeakSet;
    var Qd = function() {
        function t(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
            d(this, Kd);
            u(this, Vd, void 0);
            u(this, qd, void 0);
            u(this, Xd, []);
            u(this, Yd, []);
            var n = [ Infinity, Infinity, -Infinity, -Infinity ];
            var a = 10 ** -4;
            for (var {x: s, y: o, width: c, height: f} of t) {
                var v = Math.floor((s - e) / a) * a;
                var p = Math.ceil((s + c + e) / a) * a;
                var g = Math.floor((o - e) / a) * a;
                var m = Math.ceil((o + f + e) / a) * a;
                var y = [ v, g, m, true ];
                var w = [ p, g, m, false ];
                l(Xd, this).push(y, w);
                Mt.rectBoundingBox(v, g, p, m, n);
            }
            var b = n[2] - n[0] + 2 * r;
            var A = n[3] - n[1] + 2 * r;
            var _ = n[0] - r;
            var k = n[1] - r;
            var x = l(Xd, this).at(i ? -1 : -2);
            var E = [ x[0], x[2] ];
            for (var S of l(Xd, this)) {
                var [M, C, T] = S;
                S[0] = (M - _) / b;
                S[1] = (C - k) / A;
                S[2] = (T - k) / A;
            }
            h(Vd, this, new Float32Array([ _, k, b, A ]));
            h(qd, this, E);
        }
        var e = t.prototype;
        e.getOutlines = function i() {
            l(Xd, this).sort((function(t, e) {
                return t[0] - e[0] || t[1] - e[1] || t[2] - e[2];
            }));
            var t = [];
            for (var e of l(Xd, this)) {
                if (e[3]) {
                    t.push.apply(t, r(Kd, this, ef).call(this, e));
                    r(Kd, this, $d).call(this, e);
                } else {
                    r(Kd, this, tf).call(this, e);
                    t.push.apply(t, r(Kd, this, ef).call(this, e));
                }
            }
            return r(Kd, this, Jd).call(this, t);
        };
        return t;
    }();
    function Jd(t) {
        var e = [];
        var r = new Set;
        for (var i of t) {
            var [n, a, s] = i;
            e.push([ n, a, i ], [ n, s, i ]);
        }
        e.sort((function(t, e) {
            return t[1] - e[1] || t[0] - e[0];
        }));
        for (var o = 0, u = e.length; o < u; o += 2) {
            var h = e[o][2];
            var c = e[o + 1][2];
            h.push(c);
            c.push(h);
            r.add(h);
            r.add(c);
        }
        var d = [];
        var f;
        while (r.size > 0) {
            var v = r.values().next().value;
            var [p, g, m, y, w] = v;
            r["delete"](v);
            var b = p;
            var A = g;
            f = [ p, m ];
            d.push(f);
            while (true) {
                var _ = void 0;
                if (r.has(y)) {
                    _ = y;
                } else if (r.has(w)) {
                    _ = w;
                } else {
                    break;
                }
                r["delete"](_);
                [p, g, m, y, w] = _;
                if (b !== p) {
                    f.push(b, A, p, A === g ? g : m);
                    b = p;
                }
                A = A === g ? m : g;
            }
            f.push(b, A);
        }
        return new af(d, l(Vd, this), l(qd, this));
    }
    function Zd(t) {
        var e = l(Yd, this);
        var r = 0;
        var i = e.length - 1;
        while (r <= i) {
            var n = r + i >> 1;
            var a = e[n][0];
            if (a === t) {
                return n;
            }
            if (a < t) {
                r = n + 1;
            } else {
                i = n - 1;
            }
        }
        return i + 1;
    }
    function $d(t) {
        var [, e, i] = t;
        var n = r(Kd, this, Zd).call(this, e);
        l(Yd, this).splice(n, 0, [ e, i ]);
    }
    function tf(t) {
        var [, e, i] = t;
        var n = r(Kd, this, Zd).call(this, e);
        for (var a = n; a < l(Yd, this).length; a++) {
            var [s, o] = l(Yd, this)[a];
            if (s !== e) {
                break;
            }
            if (s === e && o === i) {
                l(Yd, this).splice(a, 1);
                return;
            }
        }
        for (var u = n - 1; u >= 0; u--) {
            var [h, c] = l(Yd, this)[u];
            if (h !== e) {
                break;
            }
            if (h === e && c === i) {
                l(Yd, this).splice(u, 1);
                return;
            }
        }
    }
    function ef(t) {
        var [e, i, n] = t;
        var a = [ [ e, i, n ] ];
        var s = r(Kd, this, Zd).call(this, n);
        for (var o = 0; o < s; o++) {
            var [u, h] = l(Yd, this)[o];
            for (var c = 0, d = a.length; c < d; c++) {
                var [, f, v] = a[c];
                if (h <= f || v <= u) {
                    continue;
                }
                if (f >= u) {
                    if (v > h) {
                        a[c][1] = h;
                    } else {
                        if (d === 1) {
                            return [];
                        }
                        a.splice(c, 1);
                        c--;
                        d--;
                    }
                    continue;
                }
                a[c][2] = u;
                if (v > h) {
                    a.push([ e, h, v ]);
                }
            }
        }
        return a;
    }
    var rf = new WeakMap;
    var nf = new WeakMap;
    var af = function(t) {
        function e(e, r, i) {
            var n;
            n = t.call(this) || this;
            u(n, rf, void 0);
            u(n, nf, void 0);
            h(nf, n, e);
            h(rf, n, r);
            n.lastPoint = i;
            return n;
        }
        g(e, t);
        var r = e.prototype;
        r.toSVGPath = function i() {
            var t = [];
            for (var e of l(nf, this)) {
                var [r, i] = e;
                t.push("M" + r + " " + i);
                for (var n = 2; n < e.length; n += 2) {
                    var a = e[n];
                    var s = e[n + 1];
                    if (a === r) {
                        t.push("V" + s);
                        i = s;
                    } else if (s === i) {
                        t.push("H" + a);
                        r = a;
                    }
                }
                t.push("Z");
            }
            return t.join(" ");
        };
        r.serialize = function n(t, e) {
            var [r, i, n, a] = t;
            var s = [];
            var o = n - r;
            var u = a - i;
            for (var h of l(nf, this)) {
                var c = new Array(h.length);
                for (var d = 0; d < h.length; d += 2) {
                    c[d] = r + h[d] * o;
                    c[d + 1] = a - h[d + 1] * u;
                }
                s.push(c);
            }
            return s;
        };
        return v(e, [ {
            key: "box",
            get: function() {
                return l(rf, this);
            }
        }, {
            key: "classNamesForOutlining",
            get: function() {
                return [ "highlightOutline" ];
            }
        } ]);
    }(ud);
    var sf = function(t) {
        function e() {
            return t.apply(this, arguments) || this;
        }
        g(e, t);
        var r = e.prototype;
        r.newFreeDrawOutline = function i(t, e, r, n, a, s) {
            return new of(t, e, r, n, a, s);
        };
        return e;
    }(xd);
    var of = function(t) {
        function e() {
            return t.apply(this, arguments) || this;
        }
        g(e, t);
        var r = e.prototype;
        r.newOutliner = function i(t, e, r, n, a) {
            var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
            return new sf(t, e, r, n, a, s);
        };
        return e;
    }(zd);
    var lf = new WeakMap;
    var uf = new WeakMap;
    var hf = new WeakMap;
    var cf = new WeakMap;
    var df = new WeakMap;
    var ff = new WeakMap;
    var vf = new WeakMap;
    var pf = new WeakMap;
    var gf = new WeakMap;
    var mf = new WeakMap;
    var yf = new WeakMap;
    var wf = new WeakMap;
    var bf = new WeakMap;
    var Af = new WeakMap;
    var _f = new WeakMap;
    var kf = new WeakMap;
    var xf = new WeakMap;
    var Ef = new WeakMap;
    var Sf = new WeakSet;
    var Mf = function(t) {
        function e(i) {
            var n;
            n = t.call(this, {
                ...i,
                name: "highlightEditor"
            }) || this;
            d(n, Sf);
            u(n, lf, null);
            u(n, uf, 0);
            u(n, hf, void 0);
            u(n, cf, null);
            u(n, df, null);
            u(n, ff, null);
            u(n, vf, null);
            u(n, pf, 0);
            u(n, gf, null);
            u(n, mf, null);
            u(n, yf, null);
            u(n, wf, false);
            u(n, bf, null);
            u(n, Af, void 0);
            u(n, _f, null);
            u(n, kf, "");
            u(n, xf, void 0);
            u(n, Ef, "");
            n.color = i.color || e._defaultColor;
            h(xf, n, i.thickness || e._defaultThickness);
            h(Af, n, i.opacity || e._defaultOpacity);
            h(hf, n, i.boxes || null);
            h(Ef, n, i.methodOfCreation || "");
            h(kf, n, i.text || "");
            n._isDraggable = false;
            n.defaultL10nId = "pdfjs-editor-highlight-editor";
            if (i.highlightId > -1) {
                h(wf, n, true);
                r(Sf, n, Tf).call(n, i);
                r(Sf, n, Df).call(n);
            } else if (l(hf, n)) {
                h(lf, n, i.anchorNode);
                h(uf, n, i.anchorOffset);
                h(vf, n, i.focusNode);
                h(pf, n, i.focusOffset);
                r(Sf, n, Cf).call(n);
                r(Sf, n, Df).call(n);
                n.rotate(n.rotation);
            }
            if (!n.annotationElementId) {
                n._uiManager.a11yAlert("pdfjs-editor-highlight-added-alert");
            }
            return n;
        }
        g(e, t);
        e.computeTelemetryFinalData = function n(t) {
            return {
                numberOfColors: t.get("color").size
            };
        };
        e.initialize = function a(t, r) {
            var i;
            Pn.initialize(t, r);
            e._defaultColor ||= ((i = r.highlightColors) === null || i === void 0 ? void 0 : i.values().next().value) || "#fff066";
        };
        e.updateDefaultParams = function o(t, r) {
            switch (t) {
              case q.HIGHLIGHT_COLOR:
                e._defaultColor = r;
                break;

              case q.HIGHLIGHT_THICKNESS:
                e._defaultThickness = r;
                break;
            }
        };
        var i = e.prototype;
        i.translateInPage = function c(t, e) {};
        i.updateParams = function f(t, e) {
            switch (t) {
              case q.HIGHLIGHT_COLOR:
                r(Sf, this, Rf).call(this, e);
                break;

              case q.HIGHLIGHT_THICKNESS:
                r(Sf, this, If).call(this, e);
                break;
            }
        };
        i.disableEditing = function p() {
            t.prototype.disableEditing.call(this);
            this.div.classList.toggle("disabled", true);
        };
        i.enableEditing = function m() {
            t.prototype.enableEditing.call(this);
            this.div.classList.toggle("disabled", false);
        };
        i.fixAndSetPosition = function y() {
            return t.prototype.fixAndSetPosition.call(this, r(Sf, this, Wf).call(this));
        };
        i.getBaseTranslation = function w() {
            return [ 0, 0 ];
        };
        i.getRect = function b(e, i) {
            return t.prototype.getRect.call(this, e, i, r(Sf, this, Wf).call(this));
        };
        i.onceAdded = function A(t) {
            if (!this.annotationElementId) {
                this.parent.addUndoableEditor(this);
            }
            if (t) {
                this.div.focus();
            }
        };
        i.remove = function _() {
            r(Sf, this, Lf).call(this);
            this._reportTelemetry({
                action: "deleted"
            });
            t.prototype.remove.call(this);
        };
        i.rebuild = function k() {
            if (!this.parent) {
                return;
            }
            t.prototype.rebuild.call(this);
            if (this.div === null) {
                return;
            }
            r(Sf, this, Df).call(this);
            if (!this.isAttachedToDOM) {
                this.parent.add(this);
            }
        };
        i.setParent = function x(e) {
            var i = false;
            if (this.parent && !e) {
                r(Sf, this, Lf).call(this);
            } else if (e) {
                var n;
                r(Sf, this, Df).call(this, e);
                i = !this.parent && ((n = this.div) === null || n === void 0 ? void 0 : n.classList.contains("selectedEditor"));
            }
            t.prototype.setParent.call(this, e);
            this.show(this._isVisible);
            if (i) {
                this.select();
            }
        };
        i.rotate = function E(t) {
            var {drawLayer: r} = this.parent;
            var i;
            if (l(wf, this)) {
                t = (t - this.rotation + 360) % 360;
                i = Nf.call(e, l(mf, this).box, t);
            } else {
                i = Nf.call(e, [ this.x, this.y, this.width, this.height ], t);
            }
            r.updateProperties(l(yf, this), {
                bbox: i,
                root: {
                    "data-main-rotation": t
                }
            });
            r.updateProperties(l(_f, this), {
                bbox: Nf.call(e, l(ff, this).box, t),
                root: {
                    "data-main-rotation": t
                }
            });
        };
        i.render = function S() {
            if (this.div) {
                return this.div;
            }
            var e = t.prototype.render.call(this);
            if (l(kf, this)) {
                e.setAttribute("aria-label", l(kf, this));
                e.setAttribute("role", "mark");
            }
            if (l(wf, this)) {
                e.classList.add("free");
            } else {
                this.div.addEventListener("keydown", r(Sf, this, Of).bind(this), {
                    signal: this._uiManager._signal
                });
            }
            var i = h(gf, this, document.createElement("div"));
            e.append(i);
            i.setAttribute("aria-hidden", "true");
            i.className = "internal";
            i.style.clipPath = l(cf, this);
            var [n, a] = this.parentDimensions;
            this.setDims(this.width * n, this.height * a);
            De(this, l(gf, this), [ "pointerover", "pointerleave" ]);
            this.enableEditing();
            return e;
        };
        i.pointerover = function M() {
            if (!this.isSelected) {
                var t;
                (t = this.parent) === null || t === void 0 ? void 0 : t.drawLayer.updateProperties(l(_f, this), {
                    rootClass: {
                        hovered: true
                    }
                });
            }
        };
        i.pointerleave = function C() {
            if (!this.isSelected) {
                var t;
                (t = this.parent) === null || t === void 0 ? void 0 : t.drawLayer.updateProperties(l(_f, this), {
                    rootClass: {
                        hovered: false
                    }
                });
            }
        };
        i._moveCaret = function T(t) {
            this.parent.unselect(this);
            switch (t) {
              case 0:
              case 2:
                r(Sf, this, Ff).call(this, true);
                break;

              case 1:
              case 3:
                r(Sf, this, Ff).call(this, false);
                break;
            }
        };
        i.select = function R() {
            var e;
            t.prototype.select.call(this);
            if (!l(_f, this)) {
                return;
            }
            (e = this.parent) === null || e === void 0 ? void 0 : e.drawLayer.updateProperties(l(_f, this), {
                rootClass: {
                    hovered: false,
                    selected: true
                }
            });
        };
        i.unselect = function I() {
            var e;
            t.prototype.unselect.call(this);
            if (!l(_f, this)) {
                return;
            }
            (e = this.parent) === null || e === void 0 ? void 0 : e.drawLayer.updateProperties(l(_f, this), {
                rootClass: {
                    selected: false
                }
            });
            if (!l(wf, this)) {
                r(Sf, this, Ff).call(this, false);
            }
        };
        i.show = function P() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._isVisible;
            t.prototype.show.call(this, e);
            if (this.parent) {
                this.parent.drawLayer.updateProperties(l(yf, this), {
                    rootClass: {
                        hidden: !e
                    }
                });
                this.parent.drawLayer.updateProperties(l(_f, this), {
                    rootClass: {
                        hidden: !e
                    }
                });
            }
        };
        e.startHighlighting = function L(t, i, n) {
            var a = this;
            var {target: s, x: o, y: l} = n;
            var {x: u, y: h, width: c, height: d} = s.getBoundingClientRect();
            var f = new AbortController;
            var v = t.combinedSignal(f);
            var p = function(i) {
                f.abort();
                r(e, a, Uf).call(a, t, i);
            };
            window.addEventListener("blur", p, {
                signal: v
            });
            window.addEventListener("pointerup", p, {
                signal: v
            });
            window.addEventListener("pointerdown", $t, {
                capture: true,
                passive: false,
                signal: v
            });
            window.addEventListener("contextmenu", Zt, {
                signal: v
            });
            s.addEventListener("pointermove", r(e, this, Hf).bind(this, t), {
                signal: v
            });
            this._freeHighlight = new sf({
                x: o,
                y: l
            }, [ u, h, c, d ], t.scale, this._defaultThickness / 2, i, .001);
            ({id: this._freeHighlightId, clipPathId: this._freeHighlightClipId} = t.drawLayer.draw({
                bbox: [ 0, 0, 1, 1 ],
                root: {
                    viewBox: "0 0 1 1",
                    fill: this._defaultColor,
                    "fill-opacity": this._defaultOpacity
                },
                rootClass: {
                    highlight: true,
                    free: true
                },
                path: {
                    d: this._freeHighlight.toSVGPath()
                }
            }, true, true));
        };
        e.deserialize = function() {
            var e = s((function*(e, i, n) {
                var a = null;
                if (e instanceof Cc) {
                    var {data: {quadPoints: s, rect: o, rotation: u, id: c, color: d, opacity: f, popupRef: v, contentsObj: p}, parent: {page: {pageNumber: g}}} = e;
                    a = e = {
                        annotationType: V.HIGHLIGHT,
                        color: Array.from(d),
                        opacity: f,
                        quadPoints: s,
                        boxes: null,
                        pageIndex: g - 1,
                        rect: o.slice(0),
                        rotation: u,
                        annotationElementId: c,
                        id: c,
                        deleted: false,
                        popupRef: v,
                        comment: (p === null || p === void 0 ? void 0 : p.str) || null
                    };
                } else if (e instanceof Sc) {
                    var {data: {inkLists: m, rect: y, rotation: w, id: b, color: A, borderStyle: {rawWidth: _}, popupRef: k, contentsObj: x}, parent: {page: {pageNumber: E}}} = e;
                    a = e = {
                        annotationType: V.HIGHLIGHT,
                        color: Array.from(A),
                        thickness: _,
                        inkLists: m,
                        boxes: null,
                        pageIndex: E - 1,
                        rect: y.slice(0),
                        rotation: w,
                        annotationElementId: b,
                        id: b,
                        deleted: false,
                        popupRef: k,
                        comment: (x === null || x === void 0 ? void 0 : x.str) || null
                    };
                }
                var {color: S, quadPoints: M, inkLists: C, opacity: T} = e;
                var R = yield t.deserialize.call(this, e, i, n);
                R.color = Mt.makeHexColor.apply(Mt, S);
                h(Af, R, T || 1);
                if (C) {
                    h(xf, R, e.thickness);
                }
                R._initialData = a;
                if (e.comment) {
                    R.setCommentData(e.comment);
                }
                var [I, P] = R.pageDimensions;
                var [L, D] = R.pageTranslation;
                if (M) {
                    var N = h(hf, R, []);
                    for (var O = 0; O < M.length; O += 8) {
                        N.push({
                            x: (M[O] - L) / I,
                            y: 1 - (M[O + 1] - D) / P,
                            width: (M[O + 2] - M[O]) / I,
                            height: (M[O + 1] - M[O + 5]) / P
                        });
                    }
                    r(Sf, R, Cf).call(R);
                    r(Sf, R, Df).call(R);
                    R.rotate(R.rotation);
                } else if (C) {
                    h(wf, R, true);
                    var F = C[0];
                    var W = {
                        x: F[0] - L,
                        y: P - (F[1] - D)
                    };
                    var B = new sf(W, [ 0, 0, I, P ], 1, l(xf, R) / 2, true, .001);
                    for (var j = 0, H = F.length; j < H; j += 2) {
                        W.x = F[j] - L;
                        W.y = P - (F[j + 1] - D);
                        B.add(W);
                    }
                    var {id: U, clipPathId: z} = i.drawLayer.draw({
                        bbox: [ 0, 0, 1, 1 ],
                        root: {
                            viewBox: "0 0 1 1",
                            fill: R.color,
                            "fill-opacity": R._defaultOpacity
                        },
                        rootClass: {
                            highlight: true,
                            free: true
                        },
                        path: {
                            d: B.toSVGPath()
                        }
                    }, true, true);
                    r(Sf, R, Tf).call(R, {
                        highlightOutlines: B.getOutlines(),
                        highlightId: U,
                        clipPathId: z
                    });
                    r(Sf, R, Df).call(R);
                    R.rotate(R.parentRotation);
                }
                return R;
            }));
            function i(t, r, i) {
                return e.apply(this, arguments);
            }
            return i;
        }();
        i.serialize = function D() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            if (this.isEmpty() || t) {
                return null;
            }
            if (this.deleted) {
                return this.serializeDeleted();
            }
            var e = this.getRect(0, 0);
            var i = Pn._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
            var n = {
                annotationType: V.HIGHLIGHT,
                color: i,
                opacity: l(Af, this),
                thickness: l(xf, this),
                quadPoints: r(Sf, this, Bf).call(this),
                outlines: r(Sf, this, jf).call(this, e),
                pageIndex: this.pageIndex,
                rect: e,
                rotation: r(Sf, this, Wf).call(this),
                structTreeParentId: this._structTreeParentId
            };
            this.addComment(n);
            if (this.annotationElementId && !r(Sf, this, zf).call(this, n)) {
                return null;
            }
            n.id = this.annotationElementId;
            return n;
        };
        i.renderAnnotationElement = function N(t) {
            var e = {
                rect: this.getRect(0, 0)
            };
            if (this.hasEditedComment) {
                e.popup = this.comment;
            }
            t.updateEdited(e);
            return null;
        };
        e.canCreateNewEmptyEditor = function O() {
            return false;
        };
        return v(e, [ {
            key: "telemetryInitialData",
            get: function() {
                return {
                    action: "added",
                    type: l(wf, this) ? "free_highlight" : "highlight",
                    color: this._uiManager.getNonHCMColorName(this.color),
                    thickness: l(xf, this),
                    methodOfCreation: l(Ef, this)
                };
            }
        }, {
            key: "telemetryFinalData",
            get: function() {
                return {
                    type: "highlight",
                    color: this._uiManager.getNonHCMColorName(this.color)
                };
            }
        }, {
            key: "commentColor",
            get: function() {
                return this.color;
            }
        }, {
            key: "toolbarPosition",
            get: function() {
                return l(bf, this);
            }
        }, {
            key: "propertiesToUpdate",
            get: function() {
                return [ [ q.HIGHLIGHT_COLOR, this.color || e._defaultColor ], [ q.HIGHLIGHT_THICKNESS, l(xf, this) || e._defaultThickness ], [ q.HIGHLIGHT_FREE, l(wf, this) ] ];
            }
        }, {
            key: "toolbarButtons",
            get: function() {
                if (this._uiManager.highlightColors) {
                    var e = h(df, this, new Vu({
                        editor: this
                    }));
                    return [ [ "colorPicker", e ] ];
                }
                return t.prototype.toolbarButtons;
            }
        }, {
            key: "_mustFixPosition",
            get: function() {
                return !l(wf, this);
            }
        } ], [ {
            key: "_keyboardManager",
            get: function() {
                var t = e.prototype;
                return dt(this, "_keyboardManager", new Qe([ [ [ "ArrowLeft", "mac+ArrowLeft" ], t._moveCaret, {
                    args: [ 0 ]
                } ], [ [ "ArrowRight", "mac+ArrowRight" ], t._moveCaret, {
                    args: [ 1 ]
                } ], [ [ "ArrowUp", "mac+ArrowUp" ], t._moveCaret, {
                    args: [ 2 ]
                } ], [ [ "ArrowDown", "mac+ArrowDown" ], t._moveCaret, {
                    args: [ 3 ]
                } ] ]));
            }
        }, {
            key: "defaultPropertiesToUpdate",
            get: function() {
                return [ [ q.HIGHLIGHT_COLOR, e._defaultColor ], [ q.HIGHLIGHT_THICKNESS, e._defaultThickness ] ];
            }
        } ]);
    }(Pn);
    P = Mf;
    function Cf() {
        var t = new Qd(l(hf, this), .001);
        h(mf, this, t.getOutlines());
        [this.x, this.y, this.width, this.height] = l(mf, this).box;
        var e = new Qd(l(hf, this), .0025, .001, this._uiManager.direction === "ltr");
        h(ff, this, e.getOutlines());
        var {lastPoint: r} = l(ff, this);
        h(bf, this, [ (r[0] - this.x) / this.width, (r[1] - this.y) / this.height ]);
    }
    function Tf(t) {
        var {highlightOutlines: e, highlightId: r, clipPathId: i} = t;
        h(mf, this, e);
        var n = 1.5;
        h(ff, this, e.getNewOutline(l(xf, this) / 2 + n, .0025));
        if (r >= 0) {
            h(yf, this, r);
            h(cf, this, i);
            this.parent.drawLayer.finalizeDraw(r, {
                bbox: e.box,
                path: {
                    d: e.toSVGPath()
                }
            });
            h(_f, this, this.parent.drawLayer.drawOutline({
                rootClass: {
                    highlightOutline: true,
                    free: true
                },
                bbox: l(ff, this).box,
                path: {
                    d: l(ff, this).toSVGPath()
                }
            }, true));
        } else if (this.parent) {
            var a = this.parent.viewport.rotation;
            this.parent.drawLayer.updateProperties(l(yf, this), {
                bbox: Nf.call(P, l(mf, this).box, (a - this.rotation + 360) % 360),
                path: {
                    d: e.toSVGPath()
                }
            });
            this.parent.drawLayer.updateProperties(l(_f, this), {
                bbox: Nf.call(P, l(ff, this).box, a),
                path: {
                    d: l(ff, this).toSVGPath()
                }
            });
        }
        var [s, o, u, c] = e.box;
        switch (this.rotation) {
          case 0:
            this.x = s;
            this.y = o;
            this.width = u;
            this.height = c;
            break;

          case 90:
            {
                var [d, f] = this.parentDimensions;
                this.x = o;
                this.y = 1 - s;
                this.width = u * f / d;
                this.height = c * d / f;
                break;
            }

          case 180:
            this.x = 1 - s;
            this.y = 1 - o;
            this.width = u;
            this.height = c;
            break;

          case 270:
            {
                var [v, p] = this.parentDimensions;
                this.x = 1 - o;
                this.y = s;
                this.width = u * p / v;
                this.height = c * v / p;
                break;
            }
        }
        var {lastPoint: g} = l(ff, this);
        h(bf, this, [ (g[0] - s) / u, (g[1] - o) / c ]);
    }
    function Rf(t) {
        var e = this;
        var r = function(t, r) {
            var i, n;
            e.color = t;
            h(Af, e, r);
            (i = e.parent) === null || i === void 0 ? void 0 : i.drawLayer.updateProperties(l(yf, e), {
                root: {
                    fill: t,
                    "fill-opacity": r
                }
            });
            (n = l(df, e)) === null || n === void 0 ? void 0 : n.updateColor(t);
        };
        var i = this.color;
        var n = l(Af, this);
        this.addCommands({
            cmd: r.bind(this, t, P._defaultOpacity),
            undo: r.bind(this, i, n),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: true,
            type: q.HIGHLIGHT_COLOR,
            overwriteIfSameType: true,
            keepUndo: true
        });
        this._reportTelemetry({
            action: "color_changed",
            color: this._uiManager.getNonHCMColorName(t)
        }, true);
    }
    function If(t) {
        var e = this;
        var i = l(xf, this);
        var n = function(t) {
            h(xf, e, t);
            r(Sf, e, Pf).call(e, t);
        };
        this.addCommands({
            cmd: n.bind(this, t),
            undo: n.bind(this, i),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: true,
            type: q.INK_THICKNESS,
            overwriteIfSameType: true,
            keepUndo: true
        });
        this._reportTelemetry({
            action: "thickness_changed",
            thickness: t
        }, true);
    }
    function Pf(t) {
        if (!l(wf, this)) {
            return;
        }
        r(Sf, this, Tf).call(this, {
            highlightOutlines: l(mf, this).getNewOutline(t / 2)
        });
        this.fixAndSetPosition();
        var [e, i] = this.parentDimensions;
        this.setDims(this.width * e, this.height * i);
    }
    function Lf() {
        if (l(yf, this) === null || !this.parent) {
            return;
        }
        this.parent.drawLayer.remove(l(yf, this));
        h(yf, this, null);
        this.parent.drawLayer.remove(l(_f, this));
        h(_f, this, null);
    }
    function Df() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.parent;
        if (l(yf, this) !== null) {
            return;
        }
        ({id: b(h, [ yf, this ])._, clipPathId: b(h, [ cf, this ])._} = t.drawLayer.draw({
            bbox: l(mf, this).box,
            root: {
                viewBox: "0 0 1 1",
                fill: this.color,
                "fill-opacity": l(Af, this)
            },
            rootClass: {
                highlight: true,
                free: l(wf, this)
            },
            path: {
                d: l(mf, this).toSVGPath()
            }
        }, false, true));
        h(_f, this, t.drawLayer.drawOutline({
            rootClass: {
                highlightOutline: true,
                free: l(wf, this)
            },
            bbox: l(ff, this).box,
            path: {
                d: l(ff, this).toSVGPath()
            }
        }, l(wf, this)));
        if (l(gf, this)) {
            l(gf, this).style.clipPath = l(cf, this);
        }
    }
    function Nf(t, e) {
        var [r, i, n, a] = t;
        switch (e) {
          case 90:
            return [ 1 - i - a, r, a, n ];

          case 180:
            return [ 1 - r - n, 1 - i - a, n, a ];

          case 270:
            return [ i, 1 - r - n, a, n ];
        }
        return [ r, i, n, a ];
    }
    function Of(t) {
        P._keyboardManager.exec(this, t);
    }
    function Ff(t) {
        if (!l(lf, this)) {
            return;
        }
        var e = window.getSelection();
        if (t) {
            e.setPosition(l(lf, this), l(uf, this));
        } else {
            e.setPosition(l(vf, this), l(pf, this));
        }
    }
    function Wf() {
        return l(wf, this) ? this.rotation : 0;
    }
    function Bf() {
        if (l(wf, this)) {
            return null;
        }
        var [t, e] = this.pageDimensions;
        var [r, i] = this.pageTranslation;
        var n = l(hf, this);
        var a = new Float32Array(n.length * 8);
        var s = 0;
        for (var {x: o, y: u, width: h, height: c} of n) {
            var d = o * t + r;
            var f = (1 - u) * e + i;
            a[s] = a[s + 4] = d;
            a[s + 1] = a[s + 3] = f;
            a[s + 2] = a[s + 6] = d + h * t;
            a[s + 5] = a[s + 7] = f - c * e;
            s += 8;
        }
        return a;
    }
    function jf(t) {
        return l(mf, this).serialize(t, r(Sf, this, Wf).call(this));
    }
    function Hf(t, e) {
        if (this._freeHighlight.add(e)) {
            t.drawLayer.updateProperties(this._freeHighlightId, {
                path: {
                    d: this._freeHighlight.toSVGPath()
                }
            });
        }
    }
    function Uf(t, e) {
        if (!this._freeHighlight.isEmpty()) {
            t.createAndAddNewEditor(e, false, {
                highlightId: this._freeHighlightId,
                highlightOutlines: this._freeHighlight.getOutlines(),
                clipPathId: this._freeHighlightClipId,
                methodOfCreation: "main_toolbar"
            });
        } else {
            t.drawLayer.remove(this._freeHighlightId);
        }
        this._freeHighlightId = -1;
        this._freeHighlight = null;
        this._freeHighlightClipId = "";
    }
    function zf(t) {
        var {color: e} = this._initialData;
        return this.hasEditedComment || t.color.some((function(t, r) {
            return t !== e[r];
        }));
    }
    p(Mf, "_defaultColor", null);
    p(Mf, "_defaultOpacity", 1);
    p(Mf, "_defaultThickness", 12);
    p(Mf, "_type", "highlight");
    p(Mf, "_editorType", V.HIGHLIGHT);
    p(Mf, "_freeHighlightId", -1);
    p(Mf, "_freeHighlight", null);
    p(Mf, "_freeHighlightClipId", "");
    var Gf = new WeakMap;
    var Vf = function() {
        function t() {
            u(this, Gf, Object.create(null));
        }
        var e = t.prototype;
        e.updateProperty = function r(t, e) {
            this[t] = e;
            this.updateSVGProperty(t, e);
        };
        e.updateProperties = function i(t) {
            if (!t) {
                return;
            }
            for (var [e, r] of Object.entries(t)) {
                if (!e.startsWith("_")) {
                    this.updateProperty(e, r);
                }
            }
        };
        e.updateSVGProperty = function n(t, e) {
            l(Gf, this)[t] = e;
        };
        e.toSVGProperties = function a() {
            var t = l(Gf, this);
            h(Gf, this, Object.create(null));
            return {
                root: t
            };
        };
        e.reset = function s() {
            h(Gf, this, Object.create(null));
        };
        e.updateAll = function o() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
            this.updateProperties(t);
        };
        e.clone = function c() {
            ot("Not implemented");
        };
        return t;
    }();
    var qf = new WeakMap;
    var Xf = new WeakMap;
    var Yf = new WeakSet;
    var Kf = function(t) {
        function e(e) {
            var r;
            r = t.call(this, e) || this;
            d(r, Yf);
            u(r, qf, null);
            u(r, Xf, void 0);
            p(r, "_colorPicker", null);
            p(r, "_drawId", null);
            h(Xf, r, e.mustBeCommitted || false);
            r._addOutlines(e);
            return r;
        }
        g(e, t);
        var i = e.prototype;
        i._addOutlines = function n(t) {
            if (t.drawOutlines) {
                r(Yf, this, Qf).call(this, t);
                r(Yf, this, $f).call(this);
            }
        };
        e._mergeSVGProperties = function a(t, e) {
            var r = new Set(Object.keys(t));
            for (var [i, n] of Object.entries(e)) {
                if (r.has(i)) {
                    Object.assign(t[i], n);
                } else {
                    t[i] = n;
                }
            }
            return t;
        };
        e.getDefaultDrawingOptions = function o(t) {
            ot("Not implemented");
        };
        e.updateDefaultParams = function c(t, e) {
            var r = this.typesMap.get(t);
            if (r) {
                this._defaultDrawingOptions.updateProperty(r, e);
            }
            if (this._currentParent) {
                nv._.updateProperty(r, e);
                this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties());
            }
        };
        i.updateParams = function f(t, e) {
            var r = this.constructor.typesMap.get(t);
            if (r) {
                this._updateProperty(t, r, e);
            }
        };
        i._updateProperty = function m(t, e, i) {
            var n = this;
            var a = this._drawingOptions;
            var s = a[e];
            var o = function(i) {
                var s;
                a.updateProperty(e, i);
                var o = l(qf, n).updateProperty(e, i);
                if (o) {
                    r(Yf, n, rv).call(n, o);
                }
                (s = n.parent) === null || s === void 0 ? void 0 : s.drawLayer.updateProperties(n._drawId, a.toSVGProperties());
                if (t === n.colorType) {
                    var u;
                    (u = n._colorPicker) === null || u === void 0 ? void 0 : u.update(i);
                }
            };
            this.addCommands({
                cmd: o.bind(this, i),
                undo: o.bind(this, s),
                post: this._uiManager.updateUI.bind(this._uiManager, this),
                mustExec: true,
                type: t,
                overwriteIfSameType: true,
                keepUndo: true
            });
        };
        i._onResizing = function y() {
            var t;
            (t = this.parent) === null || t === void 0 ? void 0 : t.drawLayer.updateProperties(this._drawId, e._mergeSVGProperties(l(qf, this).getPathResizingSVGProperties(r(Yf, this, ev).call(this)), {
                bbox: r(Yf, this, iv).call(this)
            }));
        };
        i._onResized = function w() {
            var t;
            (t = this.parent) === null || t === void 0 ? void 0 : t.drawLayer.updateProperties(this._drawId, e._mergeSVGProperties(l(qf, this).getPathResizedSVGProperties(r(Yf, this, ev).call(this)), {
                bbox: r(Yf, this, iv).call(this)
            }));
        };
        i._onTranslating = function b(t, e) {
            var i;
            (i = this.parent) === null || i === void 0 ? void 0 : i.drawLayer.updateProperties(this._drawId, {
                bbox: r(Yf, this, iv).call(this)
            });
        };
        i._onTranslated = function A() {
            var t;
            (t = this.parent) === null || t === void 0 ? void 0 : t.drawLayer.updateProperties(this._drawId, e._mergeSVGProperties(l(qf, this).getPathTranslatedSVGProperties(r(Yf, this, ev).call(this), this.parentDimensions), {
                bbox: r(Yf, this, iv).call(this)
            }));
        };
        i._onStartDragging = function _() {
            var t;
            (t = this.parent) === null || t === void 0 ? void 0 : t.drawLayer.updateProperties(this._drawId, {
                rootClass: {
                    moving: true
                }
            });
        };
        i._onStopDragging = function k() {
            var t;
            (t = this.parent) === null || t === void 0 ? void 0 : t.drawLayer.updateProperties(this._drawId, {
                rootClass: {
                    moving: false
                }
            });
        };
        i.commit = function x() {
            t.prototype.commit.call(this);
            this.disableEditMode();
            this.disableEditing();
        };
        i.disableEditing = function E() {
            t.prototype.disableEditing.call(this);
            this.div.classList.toggle("disabled", true);
        };
        i.enableEditing = function S() {
            t.prototype.enableEditing.call(this);
            this.div.classList.toggle("disabled", false);
        };
        i.getBaseTranslation = function M() {
            return [ 0, 0 ];
        };
        i.onceAdded = function C(t) {
            if (!this.annotationElementId) {
                this.parent.addUndoableEditor(this);
            }
            this._isDraggable = true;
            if (l(Xf, this)) {
                h(Xf, this, false);
                this.commit();
                this.parent.setSelected(this);
                if (t && this.isOnScreen) {
                    this.div.focus();
                }
            }
        };
        i.remove = function T() {
            r(Yf, this, Zf).call(this);
            t.prototype.remove.call(this);
        };
        i.rebuild = function R() {
            if (!this.parent) {
                return;
            }
            t.prototype.rebuild.call(this);
            if (this.div === null) {
                return;
            }
            r(Yf, this, $f).call(this);
            r(Yf, this, rv).call(this, l(qf, this).box);
            if (!this.isAttachedToDOM) {
                this.parent.add(this);
            }
        };
        i.setParent = function I(e) {
            var i = false;
            if (this.parent && !e) {
                this._uiManager.removeShouldRescale(this);
                r(Yf, this, Zf).call(this);
            } else if (e) {
                var n;
                this._uiManager.addShouldRescale(this);
                r(Yf, this, $f).call(this, e);
                i = !this.parent && ((n = this.div) === null || n === void 0 ? void 0 : n.classList.contains("selectedEditor"));
            }
            t.prototype.setParent.call(this, e);
            if (i) {
                this.select();
            }
        };
        i.rotate = function P() {
            if (!this.parent) {
                return;
            }
            this.parent.drawLayer.updateProperties(this._drawId, e._mergeSVGProperties({
                bbox: r(Yf, this, iv).call(this)
            }, l(qf, this).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
        };
        i.onScaleChanging = function L() {
            if (!this.parent) {
                return;
            }
            r(Yf, this, rv).call(this, l(qf, this).updateParentDimensions(this.parentDimensions, this.parent.scale));
        };
        e.onScaleChangingWhenDrawing = function D() {};
        i.render = function N() {
            if (this.div) {
                return this.div;
            }
            var e, r;
            if (this._isCopy) {
                e = this.x;
                r = this.y;
            }
            var i = t.prototype.render.call(this);
            i.classList.add("draw");
            var n = document.createElement("div");
            i.append(n);
            n.setAttribute("aria-hidden", "true");
            n.className = "internal";
            var [a, s] = this.parentDimensions;
            this.setDims(this.width * a, this.height * s);
            this._uiManager.addShouldRescale(this);
            this.disableEditing();
            if (this._isCopy) {
                this._moveAfterPaste(e, r);
            }
            return i;
        };
        e.createDrawerInstance = function O(t, e, r, i, n) {
            ot("Not implemented");
        };
        e.startDrawing = function F(t, e, r, i) {
            var n, a = this, s;
            var {target: o, offsetX: l, offsetY: u, pointerId: h, pointerType: c} = i;
            if (lv._ && lv._ !== c) {
                return;
            }
            var {viewport: {rotation: d}} = t;
            var {width: f, height: v} = o.getBoundingClientRect();
            var p = av._ = new AbortController;
            var g = t.combinedSignal(p);
            ov._ || (ov._ = h);
            (n = lv._) !== null && n !== void 0 ? n : lv._ = c;
            window.addEventListener("pointerup", (function(t) {
                if (ov._ === t.pointerId) {
                    a._endDraw(t);
                } else {
                    var e;
                    (e = uv._) === null || e === void 0 ? void 0 : e["delete"](t.pointerId);
                }
            }), {
                signal: g
            });
            window.addEventListener("pointercancel", (function(t) {
                if (ov._ === t.pointerId) {
                    a._currentParent.endDrawingSession();
                } else {
                    var e;
                    (e = uv._) === null || e === void 0 ? void 0 : e["delete"](t.pointerId);
                }
            }), {
                signal: g
            });
            window.addEventListener("pointerdown", (function(t) {
                if (lv._ !== t.pointerType) {
                    return;
                }
                (uv._ || (uv._ = new Set)).add(t.pointerId);
                if (nv._.isCancellable()) {
                    nv._.removeLastElement();
                    if (nv._.isEmpty()) {
                        a._currentParent.endDrawingSession(true);
                    } else {
                        a._endDraw(null);
                    }
                }
            }), {
                capture: true,
                passive: false,
                signal: g
            });
            window.addEventListener("contextmenu", Zt, {
                signal: g
            });
            o.addEventListener("pointermove", this._drawMove.bind(this), {
                signal: g
            });
            o.addEventListener("touchmove", (function(t) {
                if (t.timeStamp === hv._) {
                    $t(t);
                }
            }), {
                signal: g
            });
            t.toggleDrawing();
            (s = e._editorUndoBar) === null || s === void 0 ? void 0 : s.hide();
            if (nv._) {
                t.drawLayer.updateProperties(this._currentDrawId, nv._.startNew(l, u, f, v, d));
                return;
            }
            e.updateUIForDefaultProperties(this);
            nv._ = this.createDrawerInstance(l, u, f, v, d);
            sv._ = this.getDefaultDrawingOptions();
            this._currentParent = t;
            ({id: this._currentDrawId} = t.drawLayer.draw(this._mergeSVGProperties(sv._.toSVGProperties(), nv._.defaultSVGProperties), true, false));
        };
        e._drawMove = function W(t) {
            var e;
            hv._ = -1;
            if (!nv._) {
                return;
            }
            var {offsetX: r, offsetY: i, pointerId: n} = t;
            if (ov._ !== n) {
                return;
            }
            if (((e = uv._) === null || e === void 0 ? void 0 : e.size) >= 1) {
                this._endDraw(t);
                return;
            }
            this._currentParent.drawLayer.updateProperties(this._currentDrawId, nv._.add(r, i));
            hv._ = t.timeStamp;
            $t(t);
        };
        e._cleanup = function B(t) {
            if (t) {
                this._currentDrawId = -1;
                this._currentParent = null;
                nv._ = null;
                sv._ = null;
                lv._ = null;
                hv._ = NaN;
            }
            if (av._) {
                av._.abort();
                av._ = null;
                ov._ = NaN;
                uv._ = null;
            }
        };
        e._endDraw = function j(t) {
            var e = this._currentParent;
            if (!e) {
                return;
            }
            e.toggleDrawing(true);
            this._cleanup(false);
            if ((t === null || t === void 0 ? void 0 : t.target) === e.div) {
                e.drawLayer.updateProperties(this._currentDrawId, nv._.end(t.offsetX, t.offsetY));
            }
            if (this.supportMultipleDrawings) {
                var r = nv._;
                var i = this._currentDrawId;
                var n = r.getLastElement();
                e.addCommands({
                    cmd: function() {
                        e.drawLayer.updateProperties(i, r.setLastElement(n));
                    },
                    undo: function() {
                        e.drawLayer.updateProperties(i, r.removeLastElement());
                    },
                    mustExec: false,
                    type: q.DRAW_STEP
                });
                return;
            }
            this.endDrawing(false);
        };
        e.endDrawing = function H(t) {
            var e = this._currentParent;
            if (!e) {
                return null;
            }
            e.toggleDrawing(true);
            e.cleanUndoStack(q.DRAW_STEP);
            if (!nv._.isEmpty()) {
                var {pageDimensions: [r, i], scale: n} = e;
                var a = e.createAndAddNewEditor({
                    offsetX: 0,
                    offsetY: 0
                }, false, {
                    drawId: this._currentDrawId,
                    drawOutlines: nv._.getOutlines(r * n, i * n, n, this._INNER_MARGIN),
                    drawingOptions: sv._,
                    mustBeCommitted: !t
                });
                this._cleanup(true);
                return a;
            }
            e.drawLayer.remove(this._currentDrawId);
            this._cleanup(true);
            return null;
        };
        i.createDrawingOptions = function U(t) {};
        e.deserializeDraw = function z(t, e, r, i, n, a) {
            ot("Not implemented");
        };
        e.deserialize = function() {
            var e = s((function*(e, i, n) {
                var {rawDims: {pageWidth: a, pageHeight: s, pageX: o, pageY: l}} = i.viewport;
                var u = this.deserializeDraw(o, l, a, s, this._INNER_MARGIN, e);
                var h = yield t.deserialize.call(this, e, i, n);
                h.createDrawingOptions(e);
                r(Yf, h, Qf).call(h, {
                    drawOutlines: u
                });
                r(Yf, h, $f).call(h);
                h.onScaleChanging();
                h.rotate();
                return h;
            }));
            function i(t, r, i) {
                return e.apply(this, arguments);
            }
            return i;
        }();
        i.serializeDraw = function G(t) {
            var [e, r] = this.pageTranslation;
            var [i, n] = this.pageDimensions;
            return l(qf, this).serialize([ e, r, i, n ], t);
        };
        i.renderAnnotationElement = function V(t) {
            t.updateEdited({
                rect: this.getRect(0, 0)
            });
            return null;
        };
        e.canCreateNewEmptyEditor = function X() {
            return false;
        };
        return v(e, [ {
            key: "propertiesToUpdate",
            get: function() {
                var t = [];
                var {_drawingOptions: e} = this;
                for (var [r, i] of this.constructor.typesMap) {
                    t.push([ r, e[i] ]);
                }
                return t;
            }
        }, {
            key: "isResizable",
            get: function() {
                return true;
            }
        } ], [ {
            key: "typesMap",
            get: function() {
                ot("Not implemented");
            }
        }, {
            key: "isDrawer",
            get: function() {
                return true;
            }
        }, {
            key: "supportMultipleDrawings",
            get: function() {
                return false;
            }
        }, {
            key: "defaultPropertiesToUpdate",
            get: function() {
                var t = [];
                var e = this._defaultDrawingOptions;
                for (var [r, i] of this.typesMap) {
                    t.push([ r, e[i] ]);
                }
                return t;
            }
        } ]);
    }(Pn);
    L = Kf;
    function Qf(t) {
        var {drawOutlines: e, drawId: i, drawingOptions: n} = t;
        h(qf, this, e);
        this._drawingOptions ||= n;
        if (!this.annotationElementId) {
            this._uiManager.a11yAlert("pdfjs-editor-" + this.editorType + "-added-alert");
        }
        if (i >= 0) {
            this._drawId = i;
            this.parent.drawLayer.finalizeDraw(i, e.defaultProperties);
        } else {
            this._drawId = r(Yf, this, Jf).call(this, e, this.parent);
        }
        r(Yf, this, rv).call(this, e.box);
    }
    function Jf(t, e) {
        var {id: r} = e.drawLayer.draw(L._mergeSVGProperties(this._drawingOptions.toSVGProperties(), t.defaultSVGProperties), false, false);
        return r;
    }
    function Zf() {
        if (this._drawId === null || !this.parent) {
            return;
        }
        this.parent.drawLayer.remove(this._drawId);
        this._drawId = null;
        this._drawingOptions.reset();
    }
    function $f() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.parent;
        if (this._drawId !== null && this.parent === t) {
            return;
        }
        if (this._drawId !== null) {
            this.parent.drawLayer.updateParent(this._drawId, t.drawLayer);
            return;
        }
        this._drawingOptions.updateAll();
        this._drawId = r(Yf, this, Jf).call(this, l(qf, this), t);
    }
    function tv(t) {
        var [e, r, i, n] = t;
        var {parentDimensions: [a, s], rotation: o} = this;
        switch (o) {
          case 90:
            return [ r, 1 - e, i * (s / a), n * (a / s) ];

          case 180:
            return [ 1 - e, 1 - r, i, n ];

          case 270:
            return [ 1 - r, e, i * (s / a), n * (a / s) ];

          default:
            return [ e, r, i, n ];
        }
    }
    function ev() {
        var {x: t, y: e, width: r, height: i, parentDimensions: [n, a], rotation: s} = this;
        switch (s) {
          case 90:
            return [ 1 - e, t, r * (n / a), i * (a / n) ];

          case 180:
            return [ 1 - t, 1 - e, r, i ];

          case 270:
            return [ e, 1 - t, r * (n / a), i * (a / n) ];

          default:
            return [ t, e, r, i ];
        }
    }
    function rv(t) {
        [this.x, this.y, this.width, this.height] = r(Yf, this, tv).call(this, t);
        if (this.div) {
            this.fixAndSetPosition();
            var [e, i] = this.parentDimensions;
            this.setDims(this.width * e, this.height * i);
        }
        this._onResized();
    }
    function iv() {
        var {x: t, y: e, width: r, height: i, rotation: n, parentRotation: a, parentDimensions: [s, o]} = this;
        switch ((n * 4 + a) / 90) {
          case 1:
            return [ 1 - e - i, t, i, r ];

          case 2:
            return [ 1 - t - r, 1 - e - i, r, i ];

          case 3:
            return [ e, 1 - t - r, i, r ];

          case 4:
            return [ t, e - r * (s / o), i * (o / s), r * (s / o) ];

          case 5:
            return [ 1 - e, t, r * (s / o), i * (o / s) ];

          case 6:
            return [ 1 - t - i * (o / s), 1 - e, i * (o / s), r * (s / o) ];

          case 7:
            return [ e - r * (s / o), 1 - t - i * (o / s), r * (s / o), i * (o / s) ];

          case 8:
            return [ t - r, e - i, r, i ];

          case 9:
            return [ 1 - e, t - r, i, r ];

          case 10:
            return [ 1 - t, 1 - e, r, i ];

          case 11:
            return [ e - i, 1 - t, i, r ];

          case 12:
            return [ t - i * (o / s), e, i * (o / s), r * (s / o) ];

          case 13:
            return [ 1 - e - r * (s / o), t - i * (o / s), r * (s / o), i * (o / s) ];

          case 14:
            return [ 1 - t, 1 - e - r * (s / o), i * (o / s), r * (s / o) ];

          case 15:
            return [ e, 1 - t, r * (s / o), i * (o / s) ];

          default:
            return [ t, e, r, i ];
        }
    }
    p(Kf, "_currentDrawId", -1);
    p(Kf, "_currentParent", null);
    var nv = {
        _: null
    };
    var av = {
        _: null
    };
    var sv = {
        _: null
    };
    var ov = {
        _: NaN
    };
    var lv = {
        _: null
    };
    var uv = {
        _: null
    };
    var hv = {
        _: NaN
    };
    p(Kf, "_INNER_MARGIN", 3);
    var cv = new WeakMap;
    var dv = new WeakMap;
    var fv = new WeakMap;
    var vv = new WeakMap;
    var pv = new WeakMap;
    var gv = new WeakMap;
    var mv = new WeakMap;
    var yv = new WeakMap;
    var wv = new WeakMap;
    var bv = new WeakMap;
    var Av = new WeakMap;
    var _v = new WeakSet;
    var kv = function() {
        function t(t, e, i, n, a, s) {
            d(this, _v);
            u(this, cv, new Float64Array(6));
            u(this, dv, void 0);
            u(this, fv, void 0);
            u(this, vv, void 0);
            u(this, pv, void 0);
            u(this, gv, void 0);
            u(this, mv, "");
            u(this, yv, 0);
            u(this, wv, new Nv);
            u(this, bv, void 0);
            u(this, Av, void 0);
            h(bv, this, i);
            h(Av, this, n);
            h(vv, this, a);
            h(pv, this, s);
            [t, e] = r(_v, this, xv).call(this, t, e);
            var o = h(dv, this, [ NaN, NaN, NaN, NaN, t, e ]);
            h(gv, this, [ t, e ]);
            h(fv, this, [ {
                line: o,
                points: l(gv, this)
            } ]);
            l(cv, this).set(o, 0);
        }
        var e = t.prototype;
        e.updateProperty = function i(t, e) {
            if (t === "stroke-width") {
                h(pv, this, e);
            }
        };
        e.isEmpty = function n() {
            return !l(fv, this) || l(fv, this).length === 0;
        };
        e.isCancellable = function a() {
            return l(gv, this).length <= 10;
        };
        e.add = function s(t, e) {
            var i;
            [t, e] = r(_v, this, xv).call(this, t, e);
            var [n, a, s, o] = l(cv, this).subarray(2, 6);
            var u = t - s;
            var h = e - o;
            var c = Math.hypot(l(bv, this) * u, l(Av, this) * h);
            if (c <= 2) {
                return null;
            }
            l(gv, this).push(t, e);
            if (isNaN(n)) {
                l(cv, this).set([ s, o, t, e ], 2);
                l(dv, this).push(NaN, NaN, NaN, NaN, t, e);
                return {
                    path: {
                        d: this.toSVGPath()
                    }
                };
            }
            if (isNaN(l(cv, this)[0])) {
                l(dv, this).splice(6, 6);
            }
            l(cv, this).set([ n, a, s, o, t, e ], 0);
            (i = l(dv, this)).push.apply(i, ud.createBezierPoints(n, a, s, o, t, e));
            return {
                path: {
                    d: this.toSVGPath()
                }
            };
        };
        e.end = function o(t, e) {
            var r = this.add(t, e);
            if (r) {
                return r;
            }
            if (l(gv, this).length === 2) {
                return {
                    path: {
                        d: this.toSVGPath()
                    }
                };
            }
            return null;
        };
        e.startNew = function c(t, e, i, n, a) {
            h(bv, this, i);
            h(Av, this, n);
            h(vv, this, a);
            [t, e] = r(_v, this, xv).call(this, t, e);
            var s = h(dv, this, [ NaN, NaN, NaN, NaN, t, e ]);
            h(gv, this, [ t, e ]);
            var o = l(fv, this).at(-1);
            if (o) {
                o.line = new Float32Array(o.line);
                o.points = new Float32Array(o.points);
            }
            l(fv, this).push({
                line: s,
                points: l(gv, this)
            });
            l(cv, this).set(s, 0);
            h(yv, this, 0);
            this.toSVGPath();
            return null;
        };
        e.getLastElement = function f() {
            return l(fv, this).at(-1);
        };
        e.setLastElement = function p(t) {
            if (!l(fv, this)) {
                return l(wv, this).setLastElement(t);
            }
            l(fv, this).push(t);
            h(dv, this, t.line);
            h(gv, this, t.points);
            h(yv, this, 0);
            return {
                path: {
                    d: this.toSVGPath()
                }
            };
        };
        e.removeLastElement = function g() {
            if (!l(fv, this)) {
                return l(wv, this).removeLastElement();
            }
            l(fv, this).pop();
            h(mv, this, "");
            for (var t = 0, e = l(fv, this).length; t < e; t++) {
                var {line: r, points: i} = l(fv, this)[t];
                h(dv, this, r);
                h(gv, this, i);
                h(yv, this, 0);
                this.toSVGPath();
            }
            return {
                path: {
                    d: l(mv, this)
                }
            };
        };
        e.toSVGPath = function m() {
            var t = ud.svgRound(l(dv, this)[4]);
            var e = ud.svgRound(l(dv, this)[5]);
            if (l(gv, this).length === 2) {
                h(mv, this, l(mv, this) + " M " + t + " " + e + " Z");
                return l(mv, this);
            }
            if (l(gv, this).length <= 6) {
                var r = l(mv, this).lastIndexOf("M");
                h(mv, this, l(mv, this).slice(0, r) + " M " + t + " " + e);
                h(yv, this, 6);
            }
            if (l(gv, this).length === 4) {
                var i = ud.svgRound(l(dv, this)[10]);
                var n = ud.svgRound(l(dv, this)[11]);
                h(mv, this, l(mv, this) + " L " + i + " " + n);
                h(yv, this, 12);
                return l(mv, this);
            }
            var a = [];
            if (l(yv, this) === 0) {
                a.push("M " + t + " " + e);
                h(yv, this, 6);
            }
            for (var s = l(yv, this), o = l(dv, this).length; s < o; s += 6) {
                var [u, c, d, f, v, p] = l(dv, this).slice(s, s + 6).map(ud.svgRound);
                a.push("C" + u + " " + c + " " + d + " " + f + " " + v + " " + p);
            }
            h(mv, this, l(mv, this) + a.join(" "));
            h(yv, this, l(dv, this).length);
            return l(mv, this);
        };
        e.getOutlines = function y(t, e, r, i) {
            var n = l(fv, this).at(-1);
            n.line = new Float32Array(n.line);
            n.points = new Float32Array(n.points);
            l(wv, this).build(l(fv, this), t, e, r, l(vv, this), l(pv, this), i);
            h(cv, this, null);
            h(dv, this, null);
            h(fv, this, null);
            h(mv, this, null);
            return l(wv, this);
        };
        return v(t, [ {
            key: "defaultSVGProperties",
            get: function() {
                return {
                    root: {
                        viewBox: "0 0 10000 10000"
                    },
                    rootClass: {
                        draw: true
                    },
                    bbox: [ 0, 0, 1, 1 ]
                };
            }
        } ]);
    }();
    function xv(t, e) {
        return ud._normalizePoint(t, e, l(bv, this), l(Av, this), l(vv, this));
    }
    var Ev = new WeakMap;
    var Sv = new WeakMap;
    var Mv = new WeakMap;
    var Cv = new WeakMap;
    var Tv = new WeakMap;
    var Rv = new WeakMap;
    var Iv = new WeakMap;
    var Pv = new WeakMap;
    var Lv = new WeakMap;
    var Dv = new WeakSet;
    var Nv = function(t) {
        function e() {
            var e;
            for (var r = arguments.length, i = new Array(r), n = 0; n < r; n++) {
                i[n] = arguments[n];
            }
            e = t.call.apply(t, [ this ].concat(i)) || this;
            d(e, Dv);
            u(e, Ev, void 0);
            u(e, Sv, 0);
            u(e, Mv, void 0);
            u(e, Cv, void 0);
            u(e, Tv, void 0);
            u(e, Rv, void 0);
            u(e, Iv, void 0);
            u(e, Pv, void 0);
            u(e, Lv, void 0);
            return e;
        }
        g(e, t);
        var i = e.prototype;
        i.build = function n(t, e, i, a, s, o, l) {
            h(Tv, this, e);
            h(Rv, this, i);
            h(Iv, this, a);
            h(Pv, this, s);
            h(Lv, this, o);
            h(Mv, this, l !== null && l !== void 0 ? l : 0);
            h(Cv, this, t);
            r(Dv, this, Wv).call(this);
        };
        i.setLastElement = function a(t) {
            l(Cv, this).push(t);
            return {
                path: {
                    d: this.toSVGPath()
                }
            };
        };
        i.removeLastElement = function s() {
            l(Cv, this).pop();
            return {
                path: {
                    d: this.toSVGPath()
                }
            };
        };
        i.toSVGPath = function o() {
            var t = [];
            for (var {line: e} of l(Cv, this)) {
                t.push("M" + ud.svgRound(e[4]) + " " + ud.svgRound(e[5]));
                if (e.length === 6) {
                    t.push("Z");
                    continue;
                }
                if (e.length === 12 && isNaN(e[6])) {
                    t.push("L" + ud.svgRound(e[10]) + " " + ud.svgRound(e[11]));
                    continue;
                }
                for (var r = 6, i = e.length; r < i; r += 6) {
                    var [n, a, s, o, u, h] = e.subarray(r, r + 6).map(ud.svgRound);
                    t.push("C" + n + " " + a + " " + s + " " + o + " " + u + " " + h);
                }
            }
            return t.join("");
        };
        i.serialize = function c(t, e) {
            var [i, n, a, s] = t;
            var o = [];
            var u = [];
            var [h, c, d, f] = r(Dv, this, Fv).call(this);
            var v, p, g, m, y, w, b, A, _;
            switch (l(Pv, this)) {
              case 0:
                _ = ud._rescale;
                v = i;
                p = n + s;
                g = a;
                m = -s;
                y = i + h * a;
                w = n + (1 - c - f) * s;
                b = i + (h + d) * a;
                A = n + (1 - c) * s;
                break;

              case 90:
                _ = ud._rescaleAndSwap;
                v = i;
                p = n;
                g = a;
                m = s;
                y = i + c * a;
                w = n + h * s;
                b = i + (c + f) * a;
                A = n + (h + d) * s;
                break;

              case 180:
                _ = ud._rescale;
                v = i + a;
                p = n;
                g = -a;
                m = s;
                y = i + (1 - h - d) * a;
                w = n + c * s;
                b = i + (1 - h) * a;
                A = n + (c + f) * s;
                break;

              case 270:
                _ = ud._rescaleAndSwap;
                v = i + a;
                p = n + s;
                g = -a;
                m = -s;
                y = i + (1 - c - f) * a;
                w = n + (1 - h - d) * s;
                b = i + (1 - c) * a;
                A = n + (1 - h) * s;
                break;
            }
            for (var {line: k, points: x} of l(Cv, this)) {
                o.push(_(k, v, p, g, m, e ? new Array(k.length) : null));
                u.push(_(x, v, p, g, m, e ? new Array(x.length) : null));
            }
            return {
                lines: o,
                points: u,
                rect: [ y, w, b, A ]
            };
        };
        e.deserialize = function f(t, e, r, i, n, a) {
            var {paths: {lines: s, points: o}, rotation: l, thickness: u} = a;
            var h = [];
            var c, d, f, v, p;
            switch (l) {
              case 0:
                p = ud._rescale;
                c = -t / r;
                d = e / i + 1;
                f = 1 / r;
                v = -1 / i;
                break;

              case 90:
                p = ud._rescaleAndSwap;
                c = -e / i;
                d = -t / r;
                f = 1 / i;
                v = 1 / r;
                break;

              case 180:
                p = ud._rescale;
                c = t / r + 1;
                d = -e / i;
                f = -1 / r;
                v = 1 / i;
                break;

              case 270:
                p = ud._rescaleAndSwap;
                c = e / i + 1;
                d = t / r + 1;
                f = -1 / i;
                v = -1 / r;
                break;
            }
            if (!s) {
                s = [];
                for (var g of o) {
                    var m = g.length;
                    if (m === 2) {
                        s.push(new Float32Array([ NaN, NaN, NaN, NaN, g[0], g[1] ]));
                        continue;
                    }
                    if (m === 4) {
                        s.push(new Float32Array([ NaN, NaN, NaN, NaN, g[0], g[1], NaN, NaN, NaN, NaN, g[2], g[3] ]));
                        continue;
                    }
                    var y = new Float32Array(3 * (m - 2));
                    s.push(y);
                    var [w, b, A, _] = g.subarray(0, 4);
                    y.set([ NaN, NaN, NaN, NaN, w, b ], 0);
                    for (var k = 4; k < m; k += 2) {
                        var x = g[k];
                        var E = g[k + 1];
                        y.set(ud.createBezierPoints(w, b, A, _, x, E), (k - 2) * 3);
                        [w, b, A, _] = [ A, _, x, E ];
                    }
                }
            }
            for (var S = 0, M = s.length; S < M; S++) {
                h.push({
                    line: p(s[S].map((function(t) {
                        return t !== null && t !== void 0 ? t : NaN;
                    })), c, d, f, v),
                    points: p(o[S].map((function(t) {
                        return t !== null && t !== void 0 ? t : NaN;
                    })), c, d, f, v)
                });
            }
            var C = new this.prototype.constructor;
            C.build(h, r, i, 1, l, u, n);
            return C;
        };
        i.updateProperty = function p(t, e) {
            if (t === "stroke-width") {
                return r(Dv, this, Bv).call(this, e);
            }
            return null;
        };
        i.updateParentDimensions = function m(t, e) {
            var [i, n] = t;
            var [a, s] = r(Dv, this, Ov).call(this);
            h(Tv, this, i);
            h(Rv, this, n);
            h(Iv, this, e);
            var [o, u] = r(Dv, this, Ov).call(this);
            var c = o - a;
            var d = u - s;
            var f = l(Ev, this);
            f[0] -= c;
            f[1] -= d;
            f[2] += 2 * c;
            f[3] += 2 * d;
            return f;
        };
        i.updateRotation = function y(t) {
            h(Sv, this, t);
            return {
                path: {
                    transform: this.rotationTransform
                }
            };
        };
        i.getPathResizingSVGProperties = function w(t) {
            var [e, i, n, a] = t;
            var [s, o] = r(Dv, this, Ov).call(this);
            var [u, h, c, d] = l(Ev, this);
            if (Math.abs(c - s) <= ud.PRECISION || Math.abs(d - o) <= ud.PRECISION) {
                var f = e + n / 2 - (u + c / 2);
                var v = i + a / 2 - (h + d / 2);
                return {
                    path: {
                        "transform-origin": ud.svgRound(e) + " " + ud.svgRound(i),
                        transform: this.rotationTransform + " translate(" + f + " " + v + ")"
                    }
                };
            }
            var p = (n - 2 * s) / (c - 2 * s);
            var g = (a - 2 * o) / (d - 2 * o);
            var m = c / n;
            var y = d / a;
            return {
                path: {
                    "transform-origin": ud.svgRound(u) + " " + ud.svgRound(h),
                    transform: this.rotationTransform + " scale(" + m + " " + y + ") " + ("translate(" + ud.svgRound(s) + " " + ud.svgRound(o) + ") scale(" + p + " " + g + ") ") + ("translate(" + ud.svgRound(-s) + " " + ud.svgRound(-o) + ")")
                }
            };
        };
        i.getPathResizedSVGProperties = function b(t) {
            var [e, i, n, a] = t;
            var [s, o] = r(Dv, this, Ov).call(this);
            var u = l(Ev, this);
            var [h, c, d, f] = u;
            u[0] = e;
            u[1] = i;
            u[2] = n;
            u[3] = a;
            if (Math.abs(d - s) <= ud.PRECISION || Math.abs(f - o) <= ud.PRECISION) {
                var v = e + n / 2 - (h + d / 2);
                var p = i + a / 2 - (c + f / 2);
                for (var {line: g, points: m} of l(Cv, this)) {
                    ud._translate(g, v, p, g);
                    ud._translate(m, v, p, m);
                }
                return {
                    root: {
                        viewBox: this.viewBox
                    },
                    path: {
                        "transform-origin": ud.svgRound(e) + " " + ud.svgRound(i),
                        transform: this.rotationTransform || null,
                        d: this.toSVGPath()
                    }
                };
            }
            var y = (n - 2 * s) / (d - 2 * s);
            var w = (a - 2 * o) / (f - 2 * o);
            var b = -y * (h + s) + e + s;
            var A = -w * (c + o) + i + o;
            if (y !== 1 || w !== 1 || b !== 0 || A !== 0) {
                for (var {line: _, points: k} of l(Cv, this)) {
                    ud._rescale(_, b, A, y, w, _);
                    ud._rescale(k, b, A, y, w, k);
                }
            }
            return {
                root: {
                    viewBox: this.viewBox
                },
                path: {
                    "transform-origin": ud.svgRound(e) + " " + ud.svgRound(i),
                    transform: this.rotationTransform || null,
                    d: this.toSVGPath()
                }
            };
        };
        i.getPathTranslatedSVGProperties = function A(t, e) {
            var [r, i] = t;
            var [n, a] = e;
            var s = l(Ev, this);
            var o = r - s[0];
            var u = i - s[1];
            if (l(Tv, this) === n && l(Rv, this) === a) {
                for (var {line: c, points: d} of l(Cv, this)) {
                    ud._translate(c, o, u, c);
                    ud._translate(d, o, u, d);
                }
            } else {
                var f = l(Tv, this) / n;
                var v = l(Rv, this) / a;
                h(Tv, this, n);
                h(Rv, this, a);
                for (var {line: p, points: g} of l(Cv, this)) {
                    ud._rescale(p, o, u, f, v, p);
                    ud._rescale(g, o, u, f, v, g);
                }
                s[2] *= f;
                s[3] *= v;
            }
            s[0] = r;
            s[1] = i;
            return {
                root: {
                    viewBox: this.viewBox
                },
                path: {
                    d: this.toSVGPath(),
                    "transform-origin": ud.svgRound(r) + " " + ud.svgRound(i)
                }
            };
        };
        return v(e, [ {
            key: "thickness",
            get: function() {
                return l(Lv, this);
            }
        }, {
            key: "box",
            get: function() {
                return l(Ev, this);
            }
        }, {
            key: "viewBox",
            get: function() {
                return l(Ev, this).map(ud.svgRound).join(" ");
            }
        }, {
            key: "defaultProperties",
            get: function() {
                var [t, e] = l(Ev, this);
                return {
                    root: {
                        viewBox: this.viewBox
                    },
                    path: {
                        "transform-origin": ud.svgRound(t) + " " + ud.svgRound(e)
                    }
                };
            }
        }, {
            key: "rotationTransform",
            get: function() {
                var [, , t, e] = l(Ev, this);
                var r = 0, i = 0, n = 0, a = 0, s = 0, o = 0;
                switch (l(Sv, this)) {
                  case 90:
                    i = e / t;
                    n = -t / e;
                    s = t;
                    break;

                  case 180:
                    r = -1;
                    a = -1;
                    s = t;
                    o = e;
                    break;

                  case 270:
                    i = -e / t;
                    n = t / e;
                    o = e;
                    break;

                  default:
                    return "";
                }
                return "matrix(" + r + " " + i + " " + n + " " + a + " " + ud.svgRound(s) + " " + ud.svgRound(o) + ")";
            }
        }, {
            key: "defaultSVGProperties",
            get: function() {
                var t = l(Ev, this);
                return {
                    root: {
                        viewBox: this.viewBox
                    },
                    rootClass: {
                        draw: true
                    },
                    path: {
                        d: this.toSVGPath(),
                        "transform-origin": ud.svgRound(t[0]) + " " + ud.svgRound(t[1]),
                        transform: this.rotationTransform || null
                    },
                    bbox: t
                };
            }
        } ]);
    }(ud);
    function Ov() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : l(Lv, this);
        var e = l(Mv, this) + t / 2 * l(Iv, this);
        return l(Pv, this) % 180 === 0 ? [ e / l(Tv, this), e / l(Rv, this) ] : [ e / l(Rv, this), e / l(Tv, this) ];
    }
    function Fv() {
        var [t, e, i, n] = l(Ev, this);
        var [a, s] = r(Dv, this, Ov).call(this, 0);
        return [ t + a, e + s, i - 2 * a, n - 2 * s ];
    }
    function Wv() {
        var t = h(Ev, this, new Float32Array([ Infinity, Infinity, -Infinity, -Infinity ]));
        for (var {line: e} of l(Cv, this)) {
            if (e.length <= 12) {
                for (var i = 4, n = e.length; i < n; i += 6) {
                    Mt.pointBoundingBox(e[i], e[i + 1], t);
                }
                continue;
            }
            var a = e[4], s = e[5];
            for (var o = 6, u = e.length; o < u; o += 6) {
                var [c, d, f, v, p, g] = e.subarray(o, o + 6);
                Mt.bezierBoundingBox(a, s, c, d, f, v, p, g, t);
                a = p;
                s = g;
            }
        }
        var [m, y] = r(Dv, this, Ov).call(this);
        t[0] = Ft(t[0] - m, 0, 1);
        t[1] = Ft(t[1] - y, 0, 1);
        t[2] = Ft(t[2] + m, 0, 1);
        t[3] = Ft(t[3] + y, 0, 1);
        t[2] -= t[0];
        t[3] -= t[1];
    }
    function Bv(t) {
        var [e, i] = r(Dv, this, Ov).call(this);
        h(Lv, this, t);
        var [n, a] = r(Dv, this, Ov).call(this);
        var [s, o] = [ n - e, a - i ];
        var u = l(Ev, this);
        u[0] -= s;
        u[1] -= o;
        u[2] += 2 * s;
        u[3] += 2 * o;
        return u;
    }
    var jv = function(t) {
        function e(e) {
            var r;
            r = t.call(this) || this;
            r._viewParameters = e;
            t.prototype.updateProperties.call(r, {
                fill: "none",
                stroke: Pn._defaultLineColor,
                "stroke-opacity": 1,
                "stroke-width": 1,
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-miterlimit": 10
            });
            return r;
        }
        g(e, t);
        var r = e.prototype;
        r.updateSVGProperty = function i(e, r) {
            if (e === "stroke-width") {
                r ??= this["stroke-width"];
                r *= this._viewParameters.realScale;
            }
            t.prototype.updateSVGProperty.call(this, e, r);
        };
        r.clone = function n() {
            var n = new e(this._viewParameters);
            n.updateAll(this);
            return n;
        };
        return e;
    }(Vf);
    var Hv = new WeakSet;
    var Uv = function(t) {
        function e(e) {
            var r;
            r = t.call(this, {
                ...e,
                name: "inkEditor"
            }) || this;
            d(r, Hv);
            r._willKeepAspectRatio = true;
            r.defaultL10nId = "pdfjs-editor-ink-editor";
            return r;
        }
        g(e, t);
        e.initialize = function n(t, e) {
            Pn.initialize(t, e);
            this._defaultDrawingOptions = new jv(e.viewParameters);
        };
        e.getDefaultDrawingOptions = function a(t) {
            var e = this._defaultDrawingOptions.clone();
            e.updateProperties(t);
            return e;
        };
        e.createDrawerInstance = function o(t, e, r, i, n) {
            return new kv(t, e, r, i, n, this._defaultDrawingOptions["stroke-width"]);
        };
        e.deserializeDraw = function l(t, e, r, i, n, a) {
            return Nv.deserialize(t, e, r, i, n, a);
        };
        e.deserialize = function() {
            var e = s((function*(e, r, i) {
                var n = null;
                if (e instanceof Sc) {
                    var {data: {inkLists: a, rect: s, rotation: o, id: l, color: u, opacity: h, borderStyle: {rawWidth: c}, popupRef: d, contentsObj: f}, parent: {page: {pageNumber: v}}} = e;
                    n = e = {
                        annotationType: V.INK,
                        color: Array.from(u),
                        thickness: c,
                        opacity: h,
                        paths: {
                            points: a
                        },
                        boxes: null,
                        pageIndex: v - 1,
                        rect: s.slice(0),
                        rotation: o,
                        annotationElementId: l,
                        id: l,
                        deleted: false,
                        popupRef: d,
                        comment: (f === null || f === void 0 ? void 0 : f.str) || null
                    };
                }
                var p = yield t.deserialize.call(this, e, r, i);
                p._initialData = n;
                if (e.comment) {
                    p.setCommentData(e.comment);
                }
                return p;
            }));
            function r(t, r, i) {
                return e.apply(this, arguments);
            }
            return r;
        }();
        var i = e.prototype;
        i.onScaleChanging = function u() {
            if (!this.parent) {
                return;
            }
            t.prototype.onScaleChanging.call(this);
            var {_drawId: e, _drawingOptions: r, parent: i} = this;
            r.updateSVGProperty("stroke-width");
            i.drawLayer.updateProperties(e, r.toSVGProperties());
        };
        e.onScaleChangingWhenDrawing = function h() {
            var e = this._currentParent;
            if (!e) {
                return;
            }
            t.onScaleChangingWhenDrawing.call(this);
            this._defaultDrawingOptions.updateSVGProperty("stroke-width");
            e.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties());
        };
        i.createDrawingOptions = function c(t) {
            var {color: r, thickness: i, opacity: n} = t;
            this._drawingOptions = e.getDefaultDrawingOptions({
                stroke: Mt.makeHexColor.apply(Mt, r),
                "stroke-width": i,
                "stroke-opacity": n
            });
        };
        i.serialize = function f() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            if (this.isEmpty()) {
                return null;
            }
            if (this.deleted) {
                return this.serializeDeleted();
            }
            var {lines: e, points: i, rect: n} = this.serializeDraw(t);
            var {_drawingOptions: {stroke: a, "stroke-opacity": s, "stroke-width": o}} = this;
            var l = {
                annotationType: V.INK,
                color: Pn._colorManager.convert(a),
                opacity: s,
                thickness: o,
                paths: {
                    lines: e,
                    points: i
                },
                pageIndex: this.pageIndex,
                rect: n,
                rotation: this.rotation,
                structTreeParentId: this._structTreeParentId
            };
            this.addComment(l);
            if (t) {
                l.isCopy = true;
                return l;
            }
            if (this.annotationElementId && !r(Hv, this, zv).call(this, l)) {
                return null;
            }
            l.id = this.annotationElementId;
            return l;
        };
        i.renderAnnotationElement = function p(t) {
            var {points: e, rect: r} = this.serializeDraw(false);
            var i = {
                rect: r,
                thickness: this._drawingOptions["stroke-width"],
                points: e
            };
            if (this.hasEditedComment) {
                i.popup = this.comment;
            }
            t.updateEdited(i);
            return null;
        };
        return v(e, [ {
            key: "toolbarButtons",
            get: function() {
                this._colorPicker ||= new rh(this);
                return [ [ "colorPicker", this._colorPicker ] ];
            }
        }, {
            key: "colorType",
            get: function() {
                return q.INK_COLOR;
            }
        }, {
            key: "colorValue",
            get: function() {
                return this._drawingOptions.stroke;
            }
        } ], [ {
            key: "supportMultipleDrawings",
            get: function() {
                return true;
            }
        }, {
            key: "typesMap",
            get: function() {
                return dt(this, "typesMap", new Map([ [ q.INK_THICKNESS, "stroke-width" ], [ q.INK_COLOR, "stroke" ], [ q.INK_OPACITY, "stroke-opacity" ] ]));
            }
        } ]);
    }(Kf);
    function zv(t) {
        var {color: e, thickness: r, opacity: i, pageIndex: n} = this._initialData;
        return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || t.color.some((function(t, r) {
            return t !== e[r];
        })) || t.thickness !== r || t.opacity !== i || t.pageIndex !== n;
    }
    p(Uv, "_type", "ink");
    p(Uv, "_editorType", V.INK);
    p(Uv, "_defaultDrawingOptions", null);
    var Gv = function(t) {
        function e() {
            return t.apply(this, arguments) || this;
        }
        g(e, t);
        var r = e.prototype;
        r.toSVGPath = function i() {
            var e = t.prototype.toSVGPath.call(this);
            if (!e.endsWith("Z")) {
                e += "Z";
            }
            return e;
        };
        return e;
    }(Nv);
    var Vv = 8;
    var qv = 3;
    var Xv = function() {
        function t() {}
        t.extractContoursFromText = function e(i, n, a, s, o, l) {
            var {fontFamily: u, fontStyle: h, fontWeight: c} = n;
            var d = new OffscreenCanvas(1, 1);
            var f = d.getContext("2d", {
                alpha: false
            });
            var v = 200;
            var p = f.font = h + " " + c + " " + v + "px " + u;
            var {actualBoundingBoxLeft: g, actualBoundingBoxRight: m, actualBoundingBoxAscent: y, actualBoundingBoxDescent: w, fontBoundingBoxAscent: b, fontBoundingBoxDescent: A, width: _} = f.measureText(i);
            var k = 1.5;
            var x = Math.ceil(Math.max(Math.abs(g) + Math.abs(m) || 0, _) * k);
            var E = Math.ceil(Math.max(Math.abs(y) + Math.abs(w) || v, Math.abs(b) + Math.abs(A) || v) * k);
            d = new OffscreenCanvas(x, E);
            f = d.getContext("2d", {
                alpha: true,
                willReadFrequently: true
            });
            f.font = p;
            f.filter = "grayscale(1)";
            f.fillStyle = "white";
            f.fillRect(0, 0, x, E);
            f.fillStyle = "black";
            f.fillText(i, x * (k - 1) / 2, E * (3 - k) / 2);
            var S = r(t, this, rp).call(this, f.getImageData(0, 0, x, E).data);
            var M = r(t, this, ep).call(this, S);
            var C = r(t, this, ip).call(this, M);
            var T = r(t, this, Jv).call(this, S, x, E, C);
            return this.processDrawnLines({
                lines: {
                    curves: T,
                    width: x,
                    height: E
                },
                pageWidth: a,
                pageHeight: s,
                rotation: o,
                innerMargin: l,
                mustSmooth: true,
                areContours: true
            });
        };
        t.process = function n(e, i, a, s, o) {
            var [l, u, h] = r(t, this, np).call(this, e);
            var [c, d] = r(t, this, tp).call(this, l, u, h, Math.hypot(u, h) * r(t, this, ap)._.sigmaSFactor, r(t, this, ap)._.sigmaR, r(t, this, ap)._.kernelSize);
            var f = r(t, this, ip).call(this, d);
            var v = r(t, this, Jv).call(this, c, u, h, f);
            return this.processDrawnLines({
                lines: {
                    curves: v,
                    width: u,
                    height: h
                },
                pageWidth: i,
                pageHeight: a,
                rotation: s,
                innerMargin: o,
                mustSmooth: true,
                areContours: true
            });
        };
        t.processDrawnLines = function a(e) {
            var i;
            var {lines: n, pageWidth: a, pageHeight: s, rotation: o, innerMargin: l, mustSmooth: u, areContours: h} = e;
            if (o % 180 !== 0) {
                [a, s] = [ s, a ];
            }
            var {curves: c, width: d, height: f} = n;
            var v = (i = n.thickness) !== null && i !== void 0 ? i : 0;
            var p = [];
            var g = Math.min(a / d, s / f);
            var m = g / a;
            var y = g / s;
            var w = [];
            for (var {points: b} of c) {
                var A = u ? r(t, this, $v).call(this, b) : b;
                if (!A) {
                    continue;
                }
                w.push(A);
                var _ = A.length;
                var k = new Float32Array(_);
                var x = new Float32Array(3 * (_ === 2 ? 2 : _ - 2));
                p.push({
                    line: x,
                    points: k
                });
                if (_ === 2) {
                    k[0] = A[0] * m;
                    k[1] = A[1] * y;
                    x.set([ NaN, NaN, NaN, NaN, k[0], k[1] ], 0);
                    continue;
                }
                var [E, S, M, C] = A;
                E *= m;
                S *= y;
                M *= m;
                C *= y;
                k.set([ E, S, M, C ], 0);
                x.set([ NaN, NaN, NaN, NaN, E, S ], 0);
                for (var T = 4; T < _; T += 2) {
                    var R = k[T] = A[T] * m;
                    var I = k[T + 1] = A[T + 1] * y;
                    x.set(ud.createBezierPoints(E, S, M, C, R, I), (T - 2) * 3);
                    [E, S, M, C] = [ M, C, R, I ];
                }
            }
            if (p.length === 0) {
                return null;
            }
            var P = h ? new Gv : new Nv;
            P.build(p, a, s, 1, o, h ? 0 : v, l);
            return {
                outline: P,
                newCurves: w,
                areContours: h,
                thickness: v,
                width: d,
                height: f
            };
        };
        t.compressSignature = function() {
            var t = s((function(t) {
                var {outlines: e, areContours: r, thickness: i, width: n, height: a} = t;
                return function*() {
                    var t = Infinity;
                    var s = -Infinity;
                    var o = 0;
                    for (var l of e) {
                        o += l.length;
                        for (var u = 2, h = l.length; u < h; u++) {
                            var c = l[u] - l[u - 2];
                            t = Math.min(t, c);
                            s = Math.max(s, c);
                        }
                    }
                    var d;
                    if (t >= -128 && s <= 127) {
                        d = Int8Array;
                    } else if (t >= -32768 && s <= 32767) {
                        d = Int16Array;
                    } else {
                        d = Int32Array;
                    }
                    var f = e.length;
                    var v = Vv + qv * f;
                    var p = new Uint32Array(v);
                    var g = 0;
                    p[g++] = v * Uint32Array.BYTES_PER_ELEMENT + (o - 2 * f) * d.BYTES_PER_ELEMENT;
                    p[g++] = 0;
                    p[g++] = n;
                    p[g++] = a;
                    p[g++] = r ? 0 : 1;
                    p[g++] = Math.max(0, Math.floor(i !== null && i !== void 0 ? i : 0));
                    p[g++] = f;
                    p[g++] = d.BYTES_PER_ELEMENT;
                    for (var m of e) {
                        p[g++] = m.length - 2;
                        p[g++] = m[0];
                        p[g++] = m[1];
                    }
                    var y = new CompressionStream("deflate-raw");
                    var w = y.writable.getWriter();
                    yield w.ready;
                    w.write(p);
                    var b = d.prototype.constructor;
                    for (var A of e) {
                        var _ = new b(A.length - 2);
                        for (var k = 2, x = A.length; k < x; k++) {
                            _[k - 2] = A[k] - A[k - 2];
                        }
                        w.write(_);
                    }
                    w.close();
                    var E = yield new Response(y.readable).arrayBuffer();
                    var S = new Uint8Array(E);
                    return Wt(S);
                }();
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        t.decompressSignature = function() {
            var t = s((function*(t) {
                try {
                    var e = Bt(t);
                    var {readable: r, writable: n} = new DecompressionStream("deflate-raw");
                    var a = n.getWriter();
                    yield a.ready;
                    a.write(e).then(s((function*() {
                        yield a.ready;
                        yield a.close();
                    })))["catch"]((function() {}));
                    var o = null;
                    var l = 0;
                    var u = false;
                    var h = false;
                    var c;
                    try {
                        for (var d = i(r), f; u = !(f = yield d.next()).done; u = false) {
                            var v = f.value;
                            {
                                o ||= new Uint8Array(new Uint32Array(v.buffer, 0, 4)[0]);
                                o.set(v, l);
                                l += v.length;
                            }
                        }
                    } catch (I) {
                        h = true;
                        c = I;
                    } finally {
                        try {
                            if (u && d["return"] != null) {
                                yield d["return"]();
                            }
                        } finally {
                            if (h) {
                                throw c;
                            }
                        }
                    }
                    var p = new Uint32Array(o.buffer, 0, o.length >> 2);
                    var g = p[1];
                    if (g !== 0) {
                        throw new Error("Invalid version: " + g);
                    }
                    var m = p[2];
                    var y = p[3];
                    var w = p[4] === 0;
                    var b = p[5];
                    var A = p[6];
                    var _ = p[7];
                    var k = [];
                    var x = (Vv + qv * A) * Uint32Array.BYTES_PER_ELEMENT;
                    var E;
                    switch (_) {
                      case Int8Array.BYTES_PER_ELEMENT:
                        E = new Int8Array(o.buffer, x);
                        break;

                      case Int16Array.BYTES_PER_ELEMENT:
                        E = new Int16Array(o.buffer, x);
                        break;

                      case Int32Array.BYTES_PER_ELEMENT:
                        E = new Int32Array(o.buffer, x);
                        break;
                    }
                    l = 0;
                    for (var S = 0; S < A; S++) {
                        var M = p[qv * S + Vv];
                        var C = new Float32Array(M + 2);
                        k.push(C);
                        for (var T = 0; T < qv - 1; T++) {
                            C[T] = p[qv * S + Vv + T + 1];
                        }
                        for (var R = 0; R < M; R++) {
                            C[R + 2] = C[R] + E[l++];
                        }
                    }
                    return {
                        areContours: w,
                        thickness: b,
                        outlines: k,
                        width: m,
                        height: y
                    };
                } catch (P) {
                    st("decompressSignature: " + P);
                    return null;
                }
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        return t;
    }();
    D = Xv;
    function Yv(t, e, r, i) {
        r -= t;
        i -= e;
        if (r === 0) {
            return i > 0 ? 0 : 4;
        }
        if (r === 1) {
            return i + 6;
        }
        return 2 - i;
    }
    function Kv(t, e, i, n, a, s, o) {
        var l = r(D, this, Yv).call(this, i, n, a, s);
        for (var u = 0; u < 8; u++) {
            var h = (-u + l - o + 16) % 8;
            var c = r(D, this, sp)._[2 * h];
            var d = r(D, this, sp)._[2 * h + 1];
            if (t[(i + c) * e + (n + d)] !== 0) {
                return h;
            }
        }
        return -1;
    }
    function Qv(t, e, i, n, a, s, o) {
        var l = r(D, this, Yv).call(this, i, n, a, s);
        for (var u = 0; u < 8; u++) {
            var h = (u + l + o + 16) % 8;
            var c = r(D, this, sp)._[2 * h];
            var d = r(D, this, sp)._[2 * h + 1];
            if (t[(i + c) * e + (n + d)] !== 0) {
                return h;
            }
        }
        return -1;
    }
    function Jv(t, e, i, n) {
        var a = t.length;
        var s = new Int32Array(a);
        for (var o = 0; o < a; o++) {
            s[o] = t[o] <= n ? 1 : 0;
        }
        for (var l = 1; l < i - 1; l++) {
            s[l * e] = s[l * e + e - 1] = 0;
        }
        for (var u = 0; u < e; u++) {
            s[u] = s[e * i - 1 - u] = 0;
        }
        var h = 1;
        var c;
        var d = [];
        for (var f = 1; f < i - 1; f++) {
            c = 1;
            for (var v = 1; v < e - 1; v++) {
                var p = f * e + v;
                var g = s[p];
                if (g === 0) {
                    continue;
                }
                var m = f;
                var y = v;
                if (g === 1 && s[p - 1] === 0) {
                    h += 1;
                    y -= 1;
                } else if (g >= 1 && s[p + 1] === 0) {
                    h += 1;
                    y += 1;
                    if (g > 1) {
                        c = g;
                    }
                } else {
                    if (g !== 1) {
                        c = Math.abs(g);
                    }
                    continue;
                }
                var w = [ v, f ];
                var b = y === v + 1;
                var A = {
                    isHole: b,
                    points: w,
                    id: h,
                    parent: 0
                };
                d.push(A);
                var _ = void 0;
                for (var k of d) {
                    if (k.id === c) {
                        _ = k;
                        break;
                    }
                }
                if (!_) {
                    A.parent = b ? c : 0;
                } else if (_.isHole) {
                    A.parent = b ? _.parent : c;
                } else {
                    A.parent = b ? c : _.parent;
                }
                var x = r(D, this, Kv).call(this, s, e, f, v, m, y, 0);
                if (x === -1) {
                    s[p] = -h;
                    if (s[p] !== 1) {
                        c = Math.abs(s[p]);
                    }
                    continue;
                }
                var E = r(D, this, sp)._[2 * x];
                var S = r(D, this, sp)._[2 * x + 1];
                var M = f + E;
                var C = v + S;
                m = M;
                y = C;
                var T = f;
                var R = v;
                while (true) {
                    var I = r(D, this, Qv).call(this, s, e, T, R, m, y, 1);
                    E = r(D, this, sp)._[2 * I];
                    S = r(D, this, sp)._[2 * I + 1];
                    var P = T + E;
                    var L = R + S;
                    w.push(L, P);
                    var N = T * e + R;
                    if (s[N + 1] === 0) {
                        s[N] = -h;
                    } else if (s[N] === 1) {
                        s[N] = h;
                    }
                    if (P === f && L === v && T === M && R === C) {
                        if (s[p] !== 1) {
                            c = Math.abs(s[p]);
                        }
                        break;
                    } else {
                        m = T;
                        y = R;
                        T = P;
                        R = L;
                    }
                }
            }
        }
        return d;
    }
    function Zv(t, e, i, n) {
        if (i - e <= 4) {
            for (var a = e; a < i - 2; a += 2) {
                n.push(t[a], t[a + 1]);
            }
            return;
        }
        var s = t[e];
        var o = t[e + 1];
        var l = t[i - 4] - s;
        var u = t[i - 3] - o;
        var h = Math.hypot(l, u);
        var c = l / h;
        var d = u / h;
        var f = c * o - d * s;
        var v = u / l;
        var p = 1 / h;
        var g = Math.atan(v);
        var m = Math.cos(g);
        var y = Math.sin(g);
        var w = p * (Math.abs(m) + Math.abs(y));
        var b = p * (1 - w + w ** 2);
        var A = Math.max(Math.atan(Math.abs(y + m) * b), Math.atan(Math.abs(y - m) * b));
        var _ = 0;
        var k = e;
        for (var x = e + 2; x < i - 2; x += 2) {
            var E = Math.abs(f - c * t[x + 1] + d * t[x]);
            if (E > _) {
                k = x;
                _ = E;
            }
        }
        if (_ > (h * A) ** 2) {
            r(D, this, Zv).call(this, t, e, k + 2, n);
            r(D, this, Zv).call(this, t, k, i, n);
        } else {
            n.push(s, o);
        }
    }
    function $v(t) {
        var e = [];
        var i = t.length;
        r(D, this, Zv).call(this, t, 0, i, e);
        e.push(t[i - 2], t[i - 1]);
        return e.length <= 4 ? null : e;
    }
    function tp(t, e, r, i, n, a) {
        var s = new Float32Array(a ** 2);
        var o = -2 * i ** 2;
        var l = a >> 1;
        for (var u = 0; u < a; u++) {
            var h = (u - l) ** 2;
            for (var c = 0; c < a; c++) {
                s[u * a + c] = Math.exp((h + (c - l) ** 2) / o);
            }
        }
        var d = new Float32Array(256);
        var f = -2 * n ** 2;
        for (var v = 0; v < 256; v++) {
            d[v] = Math.exp(v ** 2 / f);
        }
        var p = t.length;
        var g = new Uint8Array(p);
        var m = new Uint32Array(256);
        for (var y = 0; y < r; y++) {
            for (var w = 0; w < e; w++) {
                var b = y * e + w;
                var A = t[b];
                var _ = 0;
                var k = 0;
                for (var x = 0; x < a; x++) {
                    var E = y + x - l;
                    if (E < 0 || E >= r) {
                        continue;
                    }
                    for (var S = 0; S < a; S++) {
                        var M = w + S - l;
                        if (M < 0 || M >= e) {
                            continue;
                        }
                        var C = t[E * e + M];
                        var T = s[x * a + S] * d[Math.abs(C - A)];
                        _ += C * T;
                        k += T;
                    }
                }
                var R = g[b] = Math.round(_ / k);
                m[R]++;
            }
        }
        return [ g, m ];
    }
    function ep(t) {
        var e = new Uint32Array(256);
        for (var r of t) {
            e[r]++;
        }
        return e;
    }
    function rp(t) {
        var e = t.length;
        var r = new Uint8ClampedArray(e >> 2);
        var i = -Infinity;
        var n = Infinity;
        for (var a = 0, s = r.length; a < s; a++) {
            var o = r[a] = t[a << 2];
            i = Math.max(i, o);
            n = Math.min(n, o);
        }
        var l = 255 / (i - n);
        for (var u = 0, h = r.length; u < h; u++) {
            r[u] = (r[u] - n) * l;
        }
        return r;
    }
    function ip(t) {
        var e;
        var r = -Infinity;
        var i = -Infinity;
        var n = t.findIndex((function(t) {
            return t !== 0;
        }));
        var a = n;
        var s = n;
        for (e = n; e < 256; e++) {
            var o = t[e];
            if (o > r) {
                if (e - a > i) {
                    i = e - a;
                    s = e - 1;
                }
                r = o;
                a = e;
            }
        }
        for (e = s - 1; e >= 0; e--) {
            if (t[e] > t[e + 1]) {
                break;
            }
        }
        return e;
    }
    function np(t) {
        var e = t;
        var {width: i, height: n} = t;
        var {maxDim: a} = r(D, this, ap)._;
        var s = i;
        var o = n;
        if (i > a || n > a) {
            var l = i;
            var u = n;
            var h = Math.log2(Math.max(i, n) / a);
            var c = Math.floor(h);
            h = h === c ? c - 1 : c;
            for (var d = 0; d < h; d++) {
                s = Math.ceil(l / 2);
                o = Math.ceil(u / 2);
                var f = new OffscreenCanvas(s, o);
                var v = f.getContext("2d");
                v.drawImage(t, 0, 0, l, u, 0, 0, s, o);
                l = s;
                u = o;
                if (t !== e) {
                    t.close();
                }
                t = f.transferToImageBitmap();
            }
            var p = Math.min(a / s, a / o);
            s = Math.round(s * p);
            o = Math.round(o * p);
        }
        var g = new OffscreenCanvas(s, o);
        var m = g.getContext("2d", {
            willReadFrequently: true
        });
        m.fillStyle = "white";
        m.fillRect(0, 0, s, o);
        m.filter = "grayscale(1)";
        m.drawImage(t, 0, 0, t.width, t.height, 0, 0, s, o);
        var y = m.getImageData(0, 0, s, o).data;
        var w = r(D, this, rp).call(this, y);
        return [ w, s, o ];
    }
    var ap = {
        _: {
            maxDim: 512,
            sigmaSFactor: .02,
            sigmaR: 25,
            kernelSize: 16
        }
    };
    var sp = {
        _: new Int32Array([ 0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1 ])
    };
    var op = function(t) {
        function e() {
            var e;
            e = t.call(this) || this;
            t.prototype.updateProperties.call(e, {
                fill: Pn._defaultLineColor,
                "stroke-width": 0
            });
            return e;
        }
        g(e, t);
        var r = e.prototype;
        r.clone = function i() {
            var i = new e;
            i.updateAll(this);
            return i;
        };
        return e;
    }(Vf);
    var lp = function(t) {
        function e(e) {
            var r;
            r = t.call(this, e) || this;
            t.prototype.updateProperties.call(r, {
                stroke: Pn._defaultLineColor,
                "stroke-width": 1
            });
            return r;
        }
        g(e, t);
        var r = e.prototype;
        r.clone = function i() {
            var i = new e(this._viewParameters);
            i.updateAll(this);
            return i;
        };
        return e;
    }(jv);
    var up = new WeakMap;
    var hp = new WeakMap;
    var cp = new WeakMap;
    var dp = new WeakMap;
    var fp = function(t) {
        function e(e) {
            var r;
            r = t.call(this, {
                ...e,
                mustBeCommitted: true,
                name: "signatureEditor"
            }) || this;
            u(r, up, false);
            u(r, hp, null);
            u(r, cp, null);
            u(r, dp, null);
            r._willKeepAspectRatio = true;
            h(cp, r, e.signatureData || null);
            h(hp, r, null);
            r.defaultL10nId = "pdfjs-editor-signature-editor1";
            return r;
        }
        g(e, t);
        e.initialize = function i(t, e) {
            Pn.initialize(t, e);
            this._defaultDrawingOptions = new op;
            this._defaultDrawnSignatureOptions = new lp(e.viewParameters);
        };
        e.getDefaultDrawingOptions = function n(t) {
            var e = this._defaultDrawingOptions.clone();
            e.updateProperties(t);
            return e;
        };
        e.computeTelemetryFinalData = function a(t) {
            var e, r;
            var i = t.get("hasDescription");
            return {
                hasAltText: (e = i.get(true)) !== null && e !== void 0 ? e : 0,
                hasNoAltText: (r = i.get(false)) !== null && r !== void 0 ? r : 0
            };
        };
        var r = e.prototype;
        r.onScaleChanging = function o() {
            if (this._drawId === null) {
                return;
            }
            t.prototype.onScaleChanging.call(this);
        };
        r.render = function c() {
            if (this.div) {
                return this.div;
            }
            var r, i;
            var {_isCopy: n} = this;
            if (n) {
                this._isCopy = false;
                r = this.x;
                i = this.y;
            }
            t.prototype.render.call(this);
            if (this._drawId === null) {
                if (l(cp, this)) {
                    var {lines: a, mustSmooth: s, areContours: o, description: u, uuid: h, heightInPage: c} = l(cp, this);
                    var {rawDims: {pageWidth: d, pageHeight: f}, rotation: v} = this.parent.viewport;
                    var p = Xv.processDrawnLines({
                        lines: a,
                        pageWidth: d,
                        pageHeight: f,
                        rotation: v,
                        innerMargin: e._INNER_MARGIN,
                        mustSmooth: s,
                        areContours: o
                    });
                    this.addSignature(p, c, u, h);
                } else {
                    this.div.setAttribute("data-l10n-args", JSON.stringify({
                        description: ""
                    }));
                    this.div.hidden = true;
                    this._uiManager.getSignature(this);
                }
            } else {
                this.div.setAttribute("data-l10n-args", JSON.stringify({
                    description: l(hp, this) || ""
                }));
            }
            if (n) {
                this._isCopy = true;
                this._moveAfterPaste(r, i);
            }
            return this.div;
        };
        r.setUuid = function d(t) {
            h(dp, this, t);
            this.addEditToolbar();
        };
        r.getUuid = function f() {
            return l(dp, this);
        };
        r.getSignaturePreview = function p() {
            var {newCurves: t, areContours: e, thickness: r, width: i, height: n} = l(cp, this);
            var a = Math.max(i, n);
            var s = Xv.processDrawnLines({
                lines: {
                    curves: t.map((function(t) {
                        return {
                            points: t
                        };
                    })),
                    thickness: r,
                    width: i,
                    height: n
                },
                pageWidth: a,
                pageHeight: a,
                rotation: 0,
                innerMargin: 0,
                mustSmooth: false,
                areContours: e
            });
            return {
                areContours: e,
                outline: s.outline
            };
        };
        r.addSignature = function m(t, r, i, n) {
            var {x: a, y: s} = this;
            var {outline: o} = h(cp, this, t);
            h(up, this, o instanceof Gv);
            this.description = i;
            var u;
            if (l(up, this)) {
                u = e.getDefaultDrawingOptions();
            } else {
                u = e._defaultDrawnSignatureOptions.clone();
                u.updateProperties({
                    "stroke-width": o.thickness
                });
            }
            this._addOutlines({
                drawOutlines: o,
                drawingOptions: u
            });
            var [c, d] = this.parentDimensions;
            var [, f] = this.pageDimensions;
            var v = r / f;
            v = v >= 1 ? .5 : v;
            this.width *= v / this.height;
            if (this.width >= 1) {
                v *= .9 / this.width;
                this.width = .9;
            }
            this.height = v;
            this.setDims(c * this.width, d * this.height);
            this.x = a;
            this.y = s;
            this.center();
            this._onResized();
            this.onScaleChanging();
            this.rotate();
            this._uiManager.addToAnnotationStorage(this);
            this.setUuid(n);
            this._reportTelemetry({
                action: "pdfjs.signature.inserted",
                data: {
                    hasBeenSaved: !!n,
                    hasDescription: !!i
                }
            });
            this.div.hidden = false;
        };
        r.getFromImage = function y(t) {
            var {rawDims: {pageWidth: r, pageHeight: i}, rotation: n} = this.parent.viewport;
            return Xv.process(t, r, i, n, e._INNER_MARGIN);
        };
        r.getFromText = function w(t, r) {
            var {rawDims: {pageWidth: i, pageHeight: n}, rotation: a} = this.parent.viewport;
            return Xv.extractContoursFromText(t, r, i, n, a, e._INNER_MARGIN);
        };
        r.getDrawnSignature = function b(t) {
            var {rawDims: {pageWidth: r, pageHeight: i}, rotation: n} = this.parent.viewport;
            return Xv.processDrawnLines({
                lines: t,
                pageWidth: r,
                pageHeight: i,
                rotation: n,
                innerMargin: e._INNER_MARGIN,
                mustSmooth: false,
                areContours: false
            });
        };
        r.createDrawingOptions = function A(t) {
            var {areContours: r, thickness: i} = t;
            if (r) {
                this._drawingOptions = e.getDefaultDrawingOptions();
            } else {
                this._drawingOptions = e._defaultDrawnSignatureOptions.clone();
                this._drawingOptions.updateProperties({
                    "stroke-width": i
                });
            }
        };
        r.serialize = function _() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            if (this.isEmpty()) {
                return null;
            }
            var {lines: e, points: r, rect: i} = this.serializeDraw(t);
            var {_drawingOptions: {"stroke-width": n}} = this;
            var a = {
                annotationType: V.SIGNATURE,
                isSignature: true,
                areContours: l(up, this),
                color: [ 0, 0, 0 ],
                thickness: l(up, this) ? 0 : n,
                pageIndex: this.pageIndex,
                rect: i,
                rotation: this.rotation,
                structTreeParentId: this._structTreeParentId
            };
            this.addComment(a);
            if (t) {
                a.paths = {
                    lines: e,
                    points: r
                };
                a.uuid = l(dp, this);
                a.isCopy = true;
            } else {
                a.lines = e;
            }
            if (l(hp, this)) {
                a.accessibilityData = {
                    type: "Figure",
                    alt: l(hp, this)
                };
            }
            return a;
        };
        e.deserializeDraw = function k(t, e, r, i, n, a) {
            if (a.areContours) {
                return Gv.deserialize(t, e, r, i, n, a);
            }
            return Nv.deserialize(t, e, r, i, n, a);
        };
        e.deserialize = function() {
            var e = s((function*(e, r, i) {
                var n;
                var a = yield t.deserialize.call(this, e, r, i);
                h(up, a, e.areContours);
                a.description = ((n = e.accessibilityData) === null || n === void 0 ? void 0 : n.alt) || "";
                h(dp, a, e.uuid);
                return a;
            }));
            function r(t, r, i) {
                return e.apply(this, arguments);
            }
            return r;
        }();
        return v(e, [ {
            key: "telemetryFinalData",
            get: function() {
                return {
                    type: "signature",
                    hasDescription: !!l(hp, this)
                };
            }
        }, {
            key: "isResizable",
            get: function() {
                return true;
            }
        }, {
            key: "description",
            get: function() {
                return l(hp, this);
            },
            set: function(e) {
                h(hp, this, e);
                if (!this.div) {
                    return;
                }
                this.div.setAttribute("data-l10n-args", JSON.stringify({
                    description: e
                }));
                t.prototype.addEditToolbar.call(this).then((function(t) {
                    t === null || t === void 0 ? void 0 : t.updateEditSignatureButton(e);
                }));
            }
        }, {
            key: "toolbarButtons",
            get: function() {
                if (this._uiManager.signatureManager) {
                    return [ [ "editSignature", this._uiManager.signatureManager ] ];
                }
                return t.prototype.toolbarButtons;
            }
        } ], [ {
            key: "supportMultipleDrawings",
            get: function() {
                return false;
            }
        }, {
            key: "typesMap",
            get: function() {
                return dt(this, "typesMap", new Map);
            }
        }, {
            key: "isDrawer",
            get: function() {
                return false;
            }
        } ]);
    }(Kf);
    p(fp, "_type", "signature");
    p(fp, "_editorType", V.SIGNATURE);
    p(fp, "_defaultDrawingOptions", null);
    var vp = new WeakMap;
    var pp = new WeakMap;
    var gp = new WeakMap;
    var mp = new WeakMap;
    var yp = new WeakMap;
    var wp = new WeakMap;
    var bp = new WeakMap;
    var Ap = new WeakMap;
    var _p = new WeakMap;
    var kp = new WeakMap;
    var xp = new WeakMap;
    var Ep = new WeakSet;
    var Sp = function(t) {
        function e(e) {
            var r;
            r = t.call(this, {
                ...e,
                name: "stampEditor"
            }) || this;
            d(r, Ep);
            u(r, vp, null);
            u(r, pp, null);
            u(r, gp, null);
            u(r, mp, null);
            u(r, yp, null);
            u(r, wp, "");
            u(r, bp, null);
            u(r, Ap, false);
            u(r, _p, null);
            u(r, kp, false);
            u(r, xp, false);
            h(mp, r, e.bitmapUrl);
            h(yp, r, e.bitmapFile);
            r.defaultL10nId = "pdfjs-editor-stamp-editor";
            return r;
        }
        g(e, t);
        e.initialize = function n(t, e) {
            Pn.initialize(t, e);
        };
        e.isHandlingMimeForPasting = function a(t) {
            return he.includes(t);
        };
        e.paste = function o(t, e) {
            e.pasteEditor({
                mode: V.STAMP
            }, {
                bitmapFile: t.getAsFile()
            });
        };
        var i = e.prototype;
        i.altTextFinish = function c() {
            if (this._uiManager.useNewAltTextFlow) {
                this.div.hidden = false;
            }
            t.prototype.altTextFinish.call(this);
        };
        e.computeTelemetryFinalData = function f(t) {
            var e, r;
            var i = t.get("hasAltText");
            return {
                hasAltText: (e = i.get(true)) !== null && e !== void 0 ? e : 0,
                hasNoAltText: (r = i.get(false)) !== null && r !== void 0 ? r : 0
            };
        };
        i.mlGuessAltText = function() {
            var t = s((function() {
                var t = this;
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                return function*() {
                    if (t.hasAltTextData()) {
                        return null;
                    }
                    var {mlManager: i} = t._uiManager;
                    if (!i) {
                        throw new Error("No ML.");
                    }
                    if (!(yield i.isEnabledFor("altText"))) {
                        throw new Error("ML isn't enabled for alt text.");
                    }
                    var {data: n, width: a, height: s} = e || t.copyCanvas(null, null, true).imageData;
                    var o = yield i.guess({
                        name: "altText",
                        request: {
                            data: n,
                            width: a,
                            height: s,
                            channels: n.length / (a * s)
                        }
                    });
                    if (!o) {
                        throw new Error("No response from the AI service.");
                    }
                    if (o.error) {
                        throw new Error("Error from the AI service.");
                    }
                    if (o.cancel) {
                        return null;
                    }
                    if (!o.output) {
                        throw new Error("No valid response from the AI service.");
                    }
                    var l = o.output;
                    yield t.setGuessedAltText(l);
                    if (r && !t.hasAltTextData()) {
                        t.altTextData = {
                            alt: l,
                            decorative: false
                        };
                    }
                    return l;
                }();
            }));
            function e() {
                return t.apply(this, arguments);
            }
            return e;
        }();
        i.remove = function p() {
            if (l(pp, this)) {
                var e;
                h(vp, this, null);
                this._uiManager.imageManager.deleteId(l(pp, this));
                (e = l(bp, this)) === null || e === void 0 ? void 0 : e.remove();
                h(bp, this, null);
                if (l(_p, this)) {
                    clearTimeout(l(_p, this));
                    h(_p, this, null);
                }
            }
            t.prototype.remove.call(this);
        };
        i.rebuild = function m() {
            if (!this.parent) {
                if (l(pp, this)) {
                    r(Ep, this, Tp).call(this);
                }
                return;
            }
            t.prototype.rebuild.call(this);
            if (this.div === null) {
                return;
            }
            if (l(pp, this) && l(bp, this) === null) {
                r(Ep, this, Tp).call(this);
            }
            if (!this.isAttachedToDOM) {
                this.parent.add(this);
            }
        };
        i.onceAdded = function y(t) {
            this._isDraggable = true;
            if (t) {
                this.div.focus();
            }
        };
        i.isEmpty = function w() {
            return !(l(gp, this) || l(vp, this) || l(mp, this) || l(yp, this) || l(pp, this) || l(Ap, this));
        };
        i.render = function b() {
            if (this.div) {
                return this.div;
            }
            var e, i;
            if (this._isCopy) {
                e = this.x;
                i = this.y;
            }
            t.prototype.render.call(this);
            this.div.hidden = true;
            this.createAltText();
            if (!l(Ap, this)) {
                if (l(vp, this)) {
                    r(Ep, this, Rp).call(this);
                } else {
                    r(Ep, this, Tp).call(this);
                }
            }
            if (this._isCopy) {
                this._moveAfterPaste(e, i);
            }
            this._uiManager.addShouldRescale(this);
            return this.div;
        };
        i.setCanvas = function A(t, e) {
            var {id: i, bitmap: n} = this._uiManager.imageManager.getFromCanvas(t, e);
            e.remove();
            if (i && this._uiManager.imageManager.isValidId(i)) {
                h(pp, this, i);
                if (n) {
                    h(vp, this, n);
                }
                h(Ap, this, false);
                r(Ep, this, Rp).call(this);
            }
        };
        i._onResized = function _() {
            this.onScaleChanging();
        };
        i.onScaleChanging = function k() {
            var t = this;
            if (!this.parent) {
                return;
            }
            if (l(_p, this) !== null) {
                clearTimeout(l(_p, this));
            }
            var e = 200;
            h(_p, this, setTimeout((function() {
                h(_p, t, null);
                r(Ep, t, Pp).call(t);
            }), e));
        };
        i.copyCanvas = function x(t, e) {
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            if (!t) {
                t = 224;
            }
            var {width: n, height: a} = l(vp, this);
            var s = new ue;
            var o = l(vp, this);
            var u = n, h = a;
            var c = null;
            if (e) {
                var d, f;
                if (n > e || a > e) {
                    var v = Math.min(e / n, e / a);
                    u = Math.floor(n * v);
                    h = Math.floor(a * v);
                }
                c = document.createElement("canvas");
                var p = c.width = Math.ceil(u * s.sx);
                var g = c.height = Math.ceil(h * s.sy);
                if (!l(kp, this)) {
                    o = r(Ep, this, Ip).call(this, p, g);
                }
                var m = c.getContext("2d");
                m.filter = this._uiManager.hcmFilter;
                var y = "white", w = "#cfcfd8";
                if (this._uiManager.hcmFilter !== "none") {
                    w = "black";
                } else if ((d = (f = window).matchMedia) !== null && d !== void 0 && d.call(f, "(prefers-color-scheme: dark)").matches) {
                    y = "#8f8f9d";
                    w = "#42414d";
                }
                var b = 15;
                var A = b * s.sx;
                var _ = b * s.sy;
                var k = new OffscreenCanvas(A * 2, _ * 2);
                var x = k.getContext("2d");
                x.fillStyle = y;
                x.fillRect(0, 0, A * 2, _ * 2);
                x.fillStyle = w;
                x.fillRect(0, 0, A, _);
                x.fillRect(A, _, A, _);
                m.fillStyle = m.createPattern(k, "repeat");
                m.fillRect(0, 0, p, g);
                m.drawImage(o, 0, 0, o.width, o.height, 0, 0, p, g);
            }
            var E = null;
            if (i) {
                var S, M;
                if (s.symmetric && o.width < t && o.height < t) {
                    S = o.width;
                    M = o.height;
                } else {
                    o = l(vp, this);
                    if (n > t || a > t) {
                        var C = Math.min(t / n, t / a);
                        S = Math.floor(n * C);
                        M = Math.floor(a * C);
                        if (!l(kp, this)) {
                            o = r(Ep, this, Ip).call(this, S, M);
                        }
                    }
                }
                var T = new OffscreenCanvas(S, M);
                var R = T.getContext("2d", {
                    willReadFrequently: true
                });
                R.drawImage(o, 0, 0, o.width, o.height, 0, 0, S, M);
                E = {
                    width: S,
                    height: M,
                    data: R.getImageData(0, 0, S, M).data
                };
            }
            return {
                canvas: c,
                width: u,
                height: h,
                imageData: E
            };
        };
        e.deserialize = function() {
            var e = s((function*(e, r, i) {
                var n = null;
                var a = false;
                if (e instanceof Pc) {
                    var s;
                    var {data: {rect: o, rotation: l, id: u, structParent: c, popupRef: d, contentsObj: f}, container: v, parent: {page: {pageNumber: p}}, canvas: g} = e;
                    var m, y;
                    if (g) {
                        delete e.canvas;
                        ({id: m, bitmap: y} = i.imageManager.getFromCanvas(v.id, g));
                        g.remove();
                    } else {
                        a = true;
                        e._hasNoCanvas = true;
                    }
                    var w = ((s = yield r._structTree.getAriaAttributes("" + Nt + u)) === null || s === void 0 ? void 0 : s.get("aria-label")) || "";
                    n = e = {
                        annotationType: V.STAMP,
                        bitmapId: m,
                        bitmap: y,
                        pageIndex: p - 1,
                        rect: o.slice(0),
                        rotation: l,
                        annotationElementId: u,
                        id: u,
                        deleted: false,
                        accessibilityData: {
                            decorative: false,
                            altText: w
                        },
                        isSvg: false,
                        structParent: c,
                        popupRef: d,
                        comment: (f === null || f === void 0 ? void 0 : f.str) || null
                    };
                }
                var b = yield t.deserialize.call(this, e, r, i);
                var {rect: A, bitmap: _, bitmapUrl: k, bitmapId: x, isSvg: E, accessibilityData: S} = e;
                if (a) {
                    i.addMissingCanvas(e.id, b);
                    h(Ap, b, true);
                } else if (x && i.imageManager.isValidId(x)) {
                    h(pp, b, x);
                    if (_) {
                        h(vp, b, _);
                    }
                } else {
                    h(mp, b, k);
                }
                h(kp, b, E);
                var [M, C] = b.pageDimensions;
                b.width = (A[2] - A[0]) / M;
                b.height = (A[3] - A[1]) / C;
                if (S) {
                    b.altTextData = S;
                }
                b._initialData = n;
                if (e.comment) {
                    b.setCommentData(e.comment);
                }
                h(xp, b, !!n);
                return b;
            }));
            function r(t, r, i) {
                return e.apply(this, arguments);
            }
            return r;
        }();
        i.serialize = function E() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            if (this.isEmpty()) {
                return null;
            }
            if (this.deleted) {
                return this.serializeDeleted();
            }
            var i = {
                annotationType: V.STAMP,
                bitmapId: l(pp, this),
                pageIndex: this.pageIndex,
                rect: this.getRect(0, 0),
                rotation: this.rotation,
                isSvg: l(kp, this),
                structTreeParentId: this._structTreeParentId
            };
            this.addComment(i);
            if (t) {
                i.bitmapUrl = r(Ep, this, Lp).call(this, true);
                i.accessibilityData = this.serializeAltText(true);
                i.isCopy = true;
                return i;
            }
            var {decorative: n, altText: a} = this.serializeAltText(false);
            if (!n && a) {
                i.accessibilityData = {
                    type: "Figure",
                    alt: a
                };
            }
            if (this.annotationElementId) {
                var s = r(Ep, this, Dp).call(this, i);
                if (s.isSame) {
                    return null;
                }
                if (s.isSameAltText) {
                    delete i.accessibilityData;
                } else {
                    var o;
                    i.accessibilityData.structParent = (o = this._initialData.structParent) !== null && o !== void 0 ? o : -1;
                }
            }
            i.id = this.annotationElementId;
            if (e === null) {
                return i;
            }
            e.stamps ||= new Map;
            var u = l(kp, this) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
            if (!e.stamps.has(l(pp, this))) {
                e.stamps.set(l(pp, this), {
                    area: u,
                    serialized: i
                });
                i.bitmap = r(Ep, this, Lp).call(this, false);
            } else if (l(kp, this)) {
                var h = e.stamps.get(l(pp, this));
                if (u > h.area) {
                    h.area = u;
                    h.serialized.bitmap.close();
                    h.serialized.bitmap = r(Ep, this, Lp).call(this, false);
                }
            }
            return i;
        };
        i.renderAnnotationElement = function S(t) {
            var e = {
                rect: this.getRect(0, 0)
            };
            if (this.hasEditedComment) {
                e.popup = this.comment;
            }
            t.updateEdited(e);
            return null;
        };
        return v(e, [ {
            key: "telemetryFinalData",
            get: function() {
                var t;
                return {
                    type: "stamp",
                    hasAltText: !!((t = this.altTextData) !== null && t !== void 0 && t.altText)
                };
            }
        }, {
            key: "toolbarButtons",
            get: function() {
                return [ [ "altText", this.createAltText() ] ];
            }
        }, {
            key: "isResizable",
            get: function() {
                return true;
            }
        } ]);
    }(Pn);
    function Mp(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (!t) {
            this.remove();
            return;
        }
        h(vp, this, t.bitmap);
        if (!e) {
            h(pp, this, t.id);
            h(kp, this, t.isSvg);
        }
        if (t.file) {
            h(wp, this, t.file.name);
        }
        r(Ep, this, Rp).call(this);
    }
    function Cp() {
        var t = this;
        h(gp, this, null);
        this._uiManager.enableWaiting(false);
        if (!l(bp, this)) {
            return;
        }
        if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && l(vp, this)) {
            this.addEditToolbar().then((function() {
                t._editToolbar.hide();
                t._uiManager.editAltText(t, true);
            }));
            return;
        }
        if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && l(vp, this)) {
            this._reportTelemetry({
                action: "pdfjs.image.image_added",
                data: {
                    alt_text_modal: false,
                    alt_text_type: "empty"
                }
            });
            try {
                this.mlGuessAltText();
            } catch {}
        }
        this.div.focus();
    }
    function Tp() {
        var t = this;
        if (l(pp, this)) {
            this._uiManager.enableWaiting(true);
            this._uiManager.imageManager.getFromId(l(pp, this)).then((function(e) {
                return r(Ep, t, Mp).call(t, e, true);
            }))["finally"]((function() {
                return r(Ep, t, Cp).call(t);
            }));
            return;
        }
        if (l(mp, this)) {
            var e = l(mp, this);
            h(mp, this, null);
            this._uiManager.enableWaiting(true);
            h(gp, this, this._uiManager.imageManager.getFromUrl(e).then((function(e) {
                return r(Ep, t, Mp).call(t, e);
            }))["finally"]((function() {
                return r(Ep, t, Cp).call(t);
            })));
            return;
        }
        if (l(yp, this)) {
            var i = l(yp, this);
            h(yp, this, null);
            this._uiManager.enableWaiting(true);
            h(gp, this, this._uiManager.imageManager.getFromFile(i).then((function(e) {
                return r(Ep, t, Mp).call(t, e);
            }))["finally"]((function() {
                return r(Ep, t, Cp).call(t);
            })));
            return;
        }
        var n = document.createElement("input");
        n.type = "file";
        n.accept = he.join(",");
        var a = this._uiManager._signal;
        h(gp, this, new Promise((function(e) {
            n.addEventListener("change", s((function*() {
                if (!n.files || n.files.length === 0) {
                    t.remove();
                } else {
                    t._uiManager.enableWaiting(true);
                    var i = yield t._uiManager.imageManager.getFromFile(n.files[0]);
                    t._reportTelemetry({
                        action: "pdfjs.image.image_selected",
                        data: {
                            alt_text_modal: t._uiManager.useNewAltTextFlow
                        }
                    });
                    r(Ep, t, Mp).call(t, i);
                }
                e();
            })), {
                signal: a
            });
            n.addEventListener("cancel", (function() {
                t.remove();
                e();
            }), {
                signal: a
            });
        }))["finally"]((function() {
            return r(Ep, t, Cp).call(t);
        })));
        n.click();
    }
    function Rp() {
        var t;
        var {div: e} = this;
        var {width: i, height: n} = l(vp, this);
        var [a, s] = this.pageDimensions;
        var o = .75;
        if (this.width) {
            i = this.width * a;
            n = this.height * s;
        } else if (i > o * a || n > o * s) {
            var u = Math.min(o * a / i, o * s / n);
            i *= u;
            n *= u;
        }
        var [c, d] = this.parentDimensions;
        this.setDims(i * c / a, n * d / s);
        this._uiManager.enableWaiting(false);
        var f = h(bp, this, document.createElement("canvas"));
        f.setAttribute("role", "img");
        this.addContainer(f);
        this.width = i / a;
        this.height = n / s;
        if ((t = this._initialOptions) !== null && t !== void 0 && t.isCentered) {
            this.center();
        } else {
            this.fixAndSetPosition();
        }
        this._initialOptions = null;
        if (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) {
            e.hidden = false;
        }
        r(Ep, this, Pp).call(this);
        if (!l(xp, this)) {
            this.parent.addUndoableEditor(this);
            h(xp, this, true);
        }
        this._reportTelemetry({
            action: "inserted_image"
        });
        if (l(wp, this)) {
            this.div.setAttribute("aria-description", l(wp, this));
        }
        if (!this.annotationElementId) {
            this._uiManager.a11yAlert("pdfjs-editor-stamp-added-alert");
        }
    }
    function Ip(t, e) {
        var {width: r, height: i} = l(vp, this);
        var n = r;
        var a = i;
        var s = l(vp, this);
        while (n > 2 * t || a > 2 * e) {
            var o = n;
            var u = a;
            if (n > 2 * t) {
                n = n >= 16384 ? Math.floor(n / 2) - 1 : Math.ceil(n / 2);
            }
            if (a > 2 * e) {
                a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2);
            }
            var h = new OffscreenCanvas(n, a);
            var c = h.getContext("2d");
            c.drawImage(s, 0, 0, o, u, 0, 0, n, a);
            s = h.transferToImageBitmap();
        }
        return s;
    }
    function Pp() {
        var [t, e] = this.parentDimensions;
        var {width: i, height: n} = this;
        var a = new ue;
        var s = Math.ceil(i * t * a.sx);
        var o = Math.ceil(n * e * a.sy);
        var u = l(bp, this);
        if (!u || u.width === s && u.height === o) {
            return;
        }
        u.width = s;
        u.height = o;
        var h = l(kp, this) ? l(vp, this) : r(Ep, this, Ip).call(this, s, o);
        var c = u.getContext("2d");
        c.filter = this._uiManager.hcmFilter;
        c.drawImage(h, 0, 0, h.width, h.height, 0, 0, s, o);
    }
    function Lp(t) {
        if (t) {
            if (l(kp, this)) {
                var e = this._uiManager.imageManager.getSvgUrl(l(pp, this));
                if (e) {
                    return e;
                }
            }
            var r = document.createElement("canvas");
            ({width: r.width, height: r.height} = l(vp, this));
            var i = r.getContext("2d");
            i.drawImage(l(vp, this), 0, 0);
            return r.toDataURL();
        }
        if (l(kp, this)) {
            var [n, a] = this.pageDimensions;
            var s = Math.round(this.width * n * Ht.PDF_TO_CSS_UNITS);
            var o = Math.round(this.height * a * Ht.PDF_TO_CSS_UNITS);
            var u = new OffscreenCanvas(s, o);
            var h = u.getContext("2d");
            h.drawImage(l(vp, this), 0, 0, l(vp, this).width, l(vp, this).height, 0, 0, s, o);
            return u.transferToImageBitmap();
        }
        return structuredClone(l(vp, this));
    }
    function Dp(t) {
        var e;
        var {pageIndex: r, accessibilityData: {altText: i}} = this._initialData;
        var n = t.pageIndex === r;
        var a = (((e = t.accessibilityData) === null || e === void 0 ? void 0 : e.alt) || "") === i;
        return {
            isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && n && a,
            isSameAltText: a
        };
    }
    p(Sp, "_type", "stamp");
    p(Sp, "_editorType", V.STAMP);
    var Np = new WeakMap;
    var Op = new WeakMap;
    var Fp = new WeakMap;
    var Wp = new WeakMap;
    var Bp = new WeakMap;
    var jp = new WeakMap;
    var Hp = new WeakMap;
    var Up = new WeakMap;
    var zp = new WeakMap;
    var Gp = new WeakMap;
    var Vp = new WeakMap;
    var qp = new WeakMap;
    var Xp = new WeakMap;
    var Yp = new WeakMap;
    var Kp = new WeakMap;
    var Qp = new WeakMap;
    var Jp = new WeakSet;
    var Zp = function() {
        function t(e) {
            var {uiManager: r, pageIndex: i, div: n, structTreeLayer: a, accessibilityManager: s, annotationLayer: o, drawLayer: c, textLayer: f, viewport: v, l10n: p} = e;
            d(this, Jp);
            u(this, Np, void 0);
            u(this, Op, false);
            u(this, Fp, null);
            u(this, Wp, null);
            u(this, Bp, null);
            u(this, jp, new Map);
            u(this, Hp, false);
            u(this, Up, false);
            u(this, zp, false);
            u(this, Gp, null);
            u(this, Vp, null);
            u(this, qp, null);
            u(this, Xp, null);
            u(this, Yp, null);
            u(this, Kp, -1);
            u(this, Qp, void 0);
            var g = [].concat(ng._.values());
            if (!t._initialized) {
                t._initialized = true;
                for (var m of g) {
                    m.initialize(p, r);
                }
            }
            r.registerEditorTypes(g);
            h(Qp, this, r);
            this.pageIndex = i;
            this.div = n;
            h(Np, this, s);
            h(Fp, this, o);
            this.viewport = v;
            h(qp, this, f);
            this.drawLayer = c;
            this._structTree = a;
            l(Qp, this).addLayer(this);
        }
        var e = t.prototype;
        e.updateToolbar = function i(t) {
            l(Qp, this).updateToolbar(t);
        };
        e.updateMode = function n() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : l(Qp, this).getMode();
            r(Jp, this, ig).call(this);
            switch (t) {
              case V.NONE:
                this.disableTextSelection();
                this.togglePointerEvents(false);
                this.toggleAnnotationLayerPointerEvents(true);
                this.disableClick();
                return;

              case V.INK:
                this.disableTextSelection();
                this.togglePointerEvents(true);
                this.enableClick();
                break;

              case V.HIGHLIGHT:
                this.enableTextSelection();
                this.togglePointerEvents(false);
                this.disableClick();
                break;

              default:
                this.disableTextSelection();
                this.togglePointerEvents(true);
                this.enableClick();
            }
            this.toggleAnnotationLayerPointerEvents(false);
            var {classList: e} = this.div;
            for (var i of ng._.values()) {
                e.toggle(i._type + "Editing", t === i._editorType);
            }
            this.div.hidden = false;
        };
        e.hasTextLayer = function a(t) {
            var e;
            return t === ((e = l(qp, this)) === null || e === void 0 ? void 0 : e.div);
        };
        e.setEditingState = function o(t) {
            l(Qp, this).setEditingState(t);
        };
        e.addCommands = function f(t) {
            l(Qp, this).addCommands(t);
        };
        e.cleanUndoStack = function p(t) {
            l(Qp, this).cleanUndoStack(t);
        };
        e.toggleDrawing = function g() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.div.classList.toggle("drawing", !t);
        };
        e.togglePointerEvents = function m() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.div.classList.toggle("disabled", !t);
        };
        e.toggleAnnotationLayerPointerEvents = function y() {
            var t;
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            (t = l(Fp, this)) === null || t === void 0 ? void 0 : t.div.classList.toggle("disabled", !e);
        };
        e.enable = function() {
            var t = s((function*() {
                var t;
                h(zp, this, true);
                this.div.tabIndex = 0;
                this.togglePointerEvents(true);
                (t = l(Yp, this)) === null || t === void 0 ? void 0 : t.abort();
                h(Yp, this, null);
                var e = new Set;
                for (var r of l(jp, this).values()) {
                    r.enableEditing();
                    r.show(true);
                    if (r.annotationElementId) {
                        l(Qp, this).removeChangedExistingAnnotation(r);
                        e.add(r.annotationElementId);
                    }
                }
                if (!l(Fp, this)) {
                    h(zp, this, false);
                    return;
                }
                var i = l(Fp, this).getEditableAnnotations();
                for (var n of i) {
                    n.hide();
                    if (l(Qp, this).isDeletedAnnotationElement(n.data.id)) {
                        continue;
                    }
                    if (e.has(n.data.id)) {
                        continue;
                    }
                    var a = yield this.deserialize(n);
                    if (!a) {
                        continue;
                    }
                    this.addOrRebuild(a);
                    a.enableEditing();
                }
                h(zp, this, false);
            }));
            function e() {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.disable = function w() {
            var t = this;
            h(Up, this, true);
            this.div.tabIndex = -1;
            this.togglePointerEvents(false);
            if (l(qp, this) && !l(Yp, this)) {
                h(Yp, this, new AbortController);
                var e = l(Qp, this).combinedSignal(l(Yp, this));
                l(qp, this).div.addEventListener("pointerdown", (function(e) {
                    var r = 500;
                    var {clientX: i, clientY: n, timeStamp: a} = e;
                    var s = l(Kp, t);
                    if (a - s > r) {
                        h(Kp, t, a);
                        return;
                    }
                    h(Kp, t, -1);
                    var {classList: o} = t.div;
                    o.toggle("getElements", true);
                    var u = document.elementsFromPoint(i, n);
                    o.toggle("getElements", false);
                    if (!t.div.contains(u[0])) {
                        return;
                    }
                    var c;
                    var d = new RegExp("^" + G + "[0-9]+$");
                    for (var f of u) {
                        if (d.test(f.id)) {
                            c = f.id;
                            break;
                        }
                    }
                    if (!c) {
                        return;
                    }
                    var v = l(jp, t).get(c);
                    if ((v === null || v === void 0 ? void 0 : v.annotationElementId) === null) {
                        e.stopPropagation();
                        e.preventDefault();
                        v.dblclick();
                    }
                }), {
                    signal: e,
                    capture: true
                });
            }
            var i = new Map;
            var n = new Map;
            for (var a of l(jp, this).values()) {
                var s;
                a.disableEditing();
                if (!a.annotationElementId) {
                    continue;
                }
                if (a.serialize() !== null) {
                    i.set(a.annotationElementId, a);
                    continue;
                } else {
                    n.set(a.annotationElementId, a);
                }
                (s = this.getEditableAnnotation(a.annotationElementId)) === null || s === void 0 ? void 0 : s.show();
                a.remove();
            }
            if (l(Fp, this)) {
                var o = l(Fp, this).getEditableAnnotations();
                for (var u of o) {
                    var {id: c} = u.data;
                    if (l(Qp, this).isDeletedAnnotationElement(c)) {
                        u.updateEdited({
                            deleted: true
                        });
                        continue;
                    }
                    var d = n.get(c);
                    if (d) {
                        d.resetAnnotationElement(u);
                        d.show(false);
                        u.show();
                        continue;
                    }
                    d = i.get(c);
                    if (d) {
                        l(Qp, this).addChangedExistingAnnotation(d);
                        if (d.renderAnnotationElement(u)) {
                            d.show(false);
                        }
                    }
                    u.show();
                }
            }
            r(Jp, this, ig).call(this);
            if (this.isEmpty) {
                this.div.hidden = true;
            }
            var {classList: f} = this.div;
            for (var v of ng._.values()) {
                f.remove(v._type + "Editing");
            }
            this.disableTextSelection();
            this.toggleAnnotationLayerPointerEvents(true);
            h(Up, this, false);
        };
        e.getEditableAnnotation = function b(t) {
            var e;
            return ((e = l(Fp, this)) === null || e === void 0 ? void 0 : e.getEditableAnnotation(t)) || null;
        };
        e.setActiveEditor = function A(t) {
            var e = l(Qp, this).getActive();
            if (e === t) {
                return;
            }
            l(Qp, this).setActiveEditor(t);
        };
        e.enableTextSelection = function _() {
            var t;
            this.div.tabIndex = -1;
            if ((t = l(qp, this)) !== null && t !== void 0 && t.div && !l(Xp, this)) {
                h(Xp, this, new AbortController);
                var e = l(Qp, this).combinedSignal(l(Xp, this));
                l(qp, this).div.addEventListener("pointerdown", r(Jp, this, $p).bind(this), {
                    signal: e
                });
                l(qp, this).div.classList.add("highlighting");
            }
        };
        e.disableTextSelection = function k() {
            var t;
            this.div.tabIndex = 0;
            if ((t = l(qp, this)) !== null && t !== void 0 && t.div && l(Xp, this)) {
                l(Xp, this).abort();
                h(Xp, this, null);
                l(qp, this).div.classList.remove("highlighting");
            }
        };
        e.enableClick = function x() {
            if (l(Wp, this)) {
                return;
            }
            h(Wp, this, new AbortController);
            var t = l(Qp, this).combinedSignal(l(Wp, this));
            this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
                signal: t
            });
            var e = this.pointerup.bind(this);
            this.div.addEventListener("pointerup", e, {
                signal: t
            });
            this.div.addEventListener("pointercancel", e, {
                signal: t
            });
        };
        e.disableClick = function E() {
            var t;
            (t = l(Wp, this)) === null || t === void 0 ? void 0 : t.abort();
            h(Wp, this, null);
        };
        e.attach = function S(t) {
            l(jp, this).set(t.id, t);
            var {annotationElementId: e} = t;
            if (e && l(Qp, this).isDeletedAnnotationElement(e)) {
                l(Qp, this).removeDeletedAnnotationElement(t);
            }
        };
        e.detach = function M(t) {
            var e;
            l(jp, this)["delete"](t.id);
            (e = l(Np, this)) === null || e === void 0 ? void 0 : e.removePointerInTextLayer(t.contentDiv);
            if (!l(Up, this) && t.annotationElementId) {
                l(Qp, this).addDeletedAnnotationElement(t);
            }
        };
        e.remove = function C(t) {
            this.detach(t);
            l(Qp, this).removeEditor(t);
            t.div.remove();
            t.isAttachedToDOM = false;
        };
        e.changeParent = function T(t) {
            var e;
            if (t.parent === this) {
                return;
            }
            if (t.parent && t.annotationElementId) {
                l(Qp, this).addDeletedAnnotationElement(t.annotationElementId);
                Pn.deleteAnnotationElement(t);
                t.annotationElementId = null;
            }
            this.attach(t);
            (e = t.parent) === null || e === void 0 ? void 0 : e.detach(t);
            t.setParent(this);
            if (t.div && t.isAttachedToDOM) {
                t.div.remove();
                this.div.append(t.div);
            }
        };
        e.add = function R(t) {
            if (t.parent === this && t.isAttachedToDOM) {
                return;
            }
            this.changeParent(t);
            l(Qp, this).addEditor(t);
            this.attach(t);
            if (!t.isAttachedToDOM) {
                var e = t.render();
                this.div.append(e);
                t.isAttachedToDOM = true;
            }
            t.fixAndSetPosition();
            t.onceAdded(!l(zp, this));
            l(Qp, this).addToAnnotationStorage(t);
            t._reportTelemetry(t.telemetryInitialData);
        };
        e.moveEditorInDOM = function I(t) {
            var e = this, r;
            if (!t.isAttachedToDOM) {
                return;
            }
            var {activeElement: i} = document;
            if (t.div.contains(i) && !l(Bp, this)) {
                t._focusEventsAllowed = false;
                h(Bp, this, setTimeout((function() {
                    h(Bp, e, null);
                    if (!t.div.contains(document.activeElement)) {
                        t.div.addEventListener("focusin", (function() {
                            t._focusEventsAllowed = true;
                        }), {
                            once: true,
                            signal: l(Qp, e)._signal
                        });
                        i.focus();
                    } else {
                        t._focusEventsAllowed = true;
                    }
                }), 0));
            }
            t._structTreeParentId = (r = l(Np, this)) === null || r === void 0 ? void 0 : r.moveElementInDOM(this.div, t.div, t.contentDiv, true);
        };
        e.addOrRebuild = function P(t) {
            if (t.needsToBeRebuilt()) {
                t.parent ||= this;
                t.rebuild();
                t.show();
            } else {
                this.add(t);
            }
        };
        e.addUndoableEditor = function L(t) {
            var e = function() {
                return t._uiManager.rebuild(t);
            };
            var r = function() {
                t.remove();
            };
            this.addCommands({
                cmd: e,
                undo: r,
                mustExec: false
            });
        };
        e.getNextId = function D() {
            return l(Qp, this).getId();
        };
        e.combinedSignal = function N(t) {
            return l(Qp, this).combinedSignal(t);
        };
        e.canCreateNewEmptyEditor = function O() {
            var t;
            return (t = c(Jp, this, tg)) === null || t === void 0 ? void 0 : t.canCreateNewEmptyEditor();
        };
        e.pasteEditor = function() {
            var t = s((function*(t, e) {
                this.updateToolbar(t);
                yield l(Qp, this).updateMode(t.mode);
                var {offsetX: i, offsetY: n} = r(Jp, this, rg).call(this);
                var a = this.getNextId();
                var s = r(Jp, this, eg).call(this, {
                    parent: this,
                    id: a,
                    x: i,
                    y: n,
                    uiManager: l(Qp, this),
                    isCentered: true,
                    ...e
                });
                if (s) {
                    this.add(s);
                }
            }));
            function e(e, r) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.deserialize = function() {
            var t = s((function*(t) {
                var e, r;
                return (yield (e = ng._.get((r = t.annotationType) !== null && r !== void 0 ? r : t.annotationEditorType)) === null || e === void 0 ? void 0 : e.deserialize(t, this, l(Qp, this))) || null;
            }));
            function e(e) {
                return t.apply(this, arguments);
            }
            return e;
        }();
        e.createAndAddNewEditor = function F(t, e) {
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var n = this.getNextId();
            var a = r(Jp, this, eg).call(this, {
                parent: this,
                id: n,
                x: t.offsetX,
                y: t.offsetY,
                uiManager: l(Qp, this),
                isCentered: e,
                ...i
            });
            if (a) {
                this.add(a);
            }
            return a;
        };
        e.addNewEditor = function W() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.createAndAddNewEditor(r(Jp, this, rg).call(this), true, t);
        };
        e.setSelected = function B(t) {
            l(Qp, this).setSelected(t);
        };
        e.toggleSelected = function j(t) {
            l(Qp, this).toggleSelected(t);
        };
        e.unselect = function H(t) {
            l(Qp, this).unselect(t);
        };
        e.pointerup = function U(t) {
            var e;
            var {isMac: r} = Et.platform;
            if (t.button !== 0 || t.ctrlKey && r) {
                return;
            }
            if (t.target !== this.div) {
                return;
            }
            if (!l(Hp, this)) {
                return;
            }
            h(Hp, this, false);
            if ((e = c(Jp, this, tg)) !== null && e !== void 0 && e.isDrawer && c(Jp, this, tg).supportMultipleDrawings) {
                return;
            }
            if (!l(Op, this)) {
                h(Op, this, true);
                return;
            }
            var i = l(Qp, this).getMode();
            if (i === V.STAMP || i === V.SIGNATURE) {
                l(Qp, this).unselectAll();
                return;
            }
            this.createAndAddNewEditor(t, false);
        };
        e.pointerdown = function z(t) {
            var e;
            if (l(Qp, this).getMode() === V.HIGHLIGHT) {
                this.enableTextSelection();
            }
            if (l(Hp, this)) {
                h(Hp, this, false);
                return;
            }
            var {isMac: r} = Et.platform;
            if (t.button !== 0 || t.ctrlKey && r) {
                return;
            }
            if (t.target !== this.div) {
                return;
            }
            h(Hp, this, true);
            if ((e = c(Jp, this, tg)) !== null && e !== void 0 && e.isDrawer) {
                this.startDrawingSession(t);
                return;
            }
            var i = l(Qp, this).getActive();
            h(Op, this, !i || i.isEmpty());
        };
        e.startDrawingSession = function q(t) {
            var e = this;
            this.div.focus({
                preventScroll: true
            });
            if (l(Gp, this)) {
                c(Jp, this, tg).startDrawing(this, l(Qp, this), false, t);
                return;
            }
            l(Qp, this).setCurrentDrawingSession(this);
            h(Gp, this, new AbortController);
            var r = l(Qp, this).combinedSignal(l(Gp, this));
            this.div.addEventListener("blur", (function(t) {
                var {relatedTarget: r} = t;
                if (r && !e.div.contains(r)) {
                    h(Vp, e, null);
                    e.commitOrRemove();
                }
            }), {
                signal: r
            });
            c(Jp, this, tg).startDrawing(this, l(Qp, this), false, t);
        };
        e.pause = function X(t) {
            var e = this;
            if (t) {
                var {activeElement: r} = document;
                if (this.div.contains(r)) {
                    h(Vp, this, r);
                }
                return;
            }
            if (l(Vp, this)) {
                setTimeout((function() {
                    var t;
                    (t = l(Vp, e)) === null || t === void 0 ? void 0 : t.focus();
                    h(Vp, e, null);
                }), 0);
            }
        };
        e.endDrawingSession = function Y() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            if (!l(Gp, this)) {
                return null;
            }
            l(Qp, this).setCurrentDrawingSession(null);
            l(Gp, this).abort();
            h(Gp, this, null);
            h(Vp, this, null);
            return c(Jp, this, tg).endDrawing(t);
        };
        e.findNewParent = function K(t, e, r) {
            var i = l(Qp, this).findParent(e, r);
            if (i === null || i === this) {
                return false;
            }
            i.changeParent(t);
            return true;
        };
        e.commitOrRemove = function Q() {
            if (l(Gp, this)) {
                this.endDrawingSession();
                return true;
            }
            return false;
        };
        e.onScaleChanging = function J() {
            if (!l(Gp, this)) {
                return;
            }
            c(Jp, this, tg).onScaleChangingWhenDrawing(this);
        };
        e.destroy = function Z() {
            var t;
            this.commitOrRemove();
            if (((t = l(Qp, this).getActive()) === null || t === void 0 ? void 0 : t.parent) === this) {
                l(Qp, this).commitOrRemove();
                l(Qp, this).setActiveEditor(null);
            }
            if (l(Bp, this)) {
                clearTimeout(l(Bp, this));
                h(Bp, this, null);
            }
            for (var e of l(jp, this).values()) {
                var r;
                (r = l(Np, this)) === null || r === void 0 ? void 0 : r.removePointerInTextLayer(e.contentDiv);
                e.setParent(null);
                e.isAttachedToDOM = false;
                e.div.remove();
            }
            this.div = null;
            l(jp, this).clear();
            l(Qp, this).removeLayer(this);
        };
        e.render = function $(t) {
            var {viewport: e} = t;
            this.viewport = e;
            le(this.div, e);
            for (var r of l(Qp, this).getEditors(this.pageIndex)) {
                this.add(r);
                r.rebuild();
            }
            this.updateMode();
        };
        e.update = function tt(t) {
            var {viewport: e} = t;
            l(Qp, this).commitOrRemove();
            r(Jp, this, ig).call(this);
            var i = this.viewport.rotation;
            var n = e.rotation;
            this.viewport = e;
            le(this.div, {
                rotation: n
            });
            if (i !== n) {
                for (var a of l(jp, this).values()) {
                    a.rotate(n);
                }
            }
        };
        return v(t, [ {
            key: "isEmpty",
            get: function() {
                return l(jp, this).size === 0;
            }
        }, {
            key: "isInvisible",
            get: function() {
                return this.isEmpty && l(Qp, this).getMode() === V.NONE;
            }
        }, {
            key: "pageDimensions",
            get: function() {
                var {pageWidth: t, pageHeight: e} = this.viewport.rawDims;
                return [ t, e ];
            }
        }, {
            key: "scale",
            get: function() {
                return l(Qp, this).viewParameters.realScale;
            }
        } ]);
    }();
    function $p(t) {
        var e = this;
        l(Qp, this).unselectAll();
        var {target: r} = t;
        if (r === l(qp, this).div || (r.getAttribute("role") === "img" || r.classList.contains("endOfContent")) && l(qp, this).div.contains(r)) {
            var {isMac: i} = Et.platform;
            if (t.button !== 0 || t.ctrlKey && i) {
                return;
            }
            l(Qp, this).showAllEditors("highlight", true, true);
            l(qp, this).div.classList.add("free");
            this.toggleDrawing();
            Mf.startHighlighting(this, l(Qp, this).direction === "ltr", {
                target: l(qp, this).div,
                x: t.x,
                y: t.y
            });
            l(qp, this).div.addEventListener("pointerup", (function() {
                l(qp, e).div.classList.remove("free");
                e.toggleDrawing(true);
            }), {
                once: true,
                signal: l(Qp, this)._signal
            });
            t.preventDefault();
        }
    }
    function tg(t) {
        return ng._.get(l(Qp, t).getMode());
    }
    function eg(t) {
        var e = c(Jp, this, tg);
        return e ? new e.prototype.constructor(t) : null;
    }
    function rg() {
        var {x: t, y: e, width: r, height: i} = this.div.getBoundingClientRect();
        var n = Math.max(0, t);
        var a = Math.max(0, e);
        var s = Math.min(window.innerWidth, t + r);
        var o = Math.min(window.innerHeight, e + i);
        var l = (n + s) / 2 - t;
        var u = (a + o) / 2 - e;
        var [h, c] = this.viewport.rotation % 180 === 0 ? [ l, u ] : [ u, l ];
        return {
            offsetX: h,
            offsetY: c
        };
    }
    function ig() {
        for (var t of l(jp, this).values()) {
            if (t.isEmpty()) {
                t.remove();
            }
        }
    }
    p(Zp, "_initialized", false);
    var ng = {
        _: new Map([ $c, Uv, Sp, Mf, fp ].map((function(t) {
            return [ t._editorType, t ];
        })))
    };
    var ag = new WeakMap;
    var sg = new WeakMap;
    var og = new WeakMap;
    var lg = new WeakSet;
    var ug = function() {
        function t(t) {
            var {pageIndex: e} = t;
            d(this, lg);
            u(this, ag, null);
            u(this, sg, new Map);
            u(this, og, new Map);
            this.pageIndex = e;
        }
        var e = t.prototype;
        e.setParent = function i(t) {
            if (!l(ag, this)) {
                h(ag, this, t);
                return;
            }
            if (l(ag, this) !== t) {
                if (l(sg, this).size > 0) {
                    for (var e of l(sg, this).values()) {
                        e.remove();
                        t.append(e);
                    }
                }
                h(ag, this, t);
            }
        };
        e.draw = function n(e) {
            var i, n;
            var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var o = (vg._ = (i = vg._, n = i++, i), n);
            var u = r(lg, this, cg).call(this);
            var h = t._svgFactory.createElement("defs");
            u.append(h);
            var c = t._svgFactory.createElement("path");
            h.append(c);
            var d = "path_p" + this.pageIndex + "_" + o;
            c.setAttribute("id", d);
            c.setAttribute("vector-effect", "non-scaling-stroke");
            if (a) {
                l(og, this).set(o, c);
            }
            var f = s ? r(lg, this, dg).call(this, h, d) : null;
            var v = t._svgFactory.createElement("use");
            u.append(v);
            v.setAttribute("href", "#" + d);
            this.updateProperties(u, e);
            l(sg, this).set(o, u);
            return {
                id: o,
                clipPathId: "url(#" + f + ")"
            };
        };
        e.drawOutline = function a(e, i) {
            var n, a;
            var s = (vg._ = (n = vg._, a = n++, n), a);
            var o = r(lg, this, cg).call(this);
            var u = t._svgFactory.createElement("defs");
            o.append(u);
            var h = t._svgFactory.createElement("path");
            u.append(h);
            var c = "path_p" + this.pageIndex + "_" + s;
            h.setAttribute("id", c);
            h.setAttribute("vector-effect", "non-scaling-stroke");
            var d;
            if (i) {
                var f = t._svgFactory.createElement("mask");
                u.append(f);
                d = "mask_p" + this.pageIndex + "_" + s;
                f.setAttribute("id", d);
                f.setAttribute("maskUnits", "objectBoundingBox");
                var v = t._svgFactory.createElement("rect");
                f.append(v);
                v.setAttribute("width", "1");
                v.setAttribute("height", "1");
                v.setAttribute("fill", "white");
                var p = t._svgFactory.createElement("use");
                f.append(p);
                p.setAttribute("href", "#" + c);
                p.setAttribute("stroke", "none");
                p.setAttribute("fill", "black");
                p.setAttribute("fill-rule", "nonzero");
                p.classList.add("mask");
            }
            var g = t._svgFactory.createElement("use");
            o.append(g);
            g.setAttribute("href", "#" + c);
            if (d) {
                g.setAttribute("mask", "url(#" + d + ")");
            }
            var m = g.cloneNode();
            o.append(m);
            g.classList.add("mainOutline");
            m.classList.add("secondaryOutline");
            this.updateProperties(o, e);
            l(sg, this).set(s, o);
            return s;
        };
        e.finalizeDraw = function s(t, e) {
            l(og, this)["delete"](t);
            this.updateProperties(t, e);
        };
        e.updateProperties = function o(e, i) {
            if (!i) {
                return;
            }
            var {root: n, bbox: a, rootClass: s, path: o} = i;
            var u = typeof e === "number" ? l(sg, this).get(e) : e;
            if (!u) {
                return;
            }
            if (n) {
                r(lg, this, fg).call(this, u, n);
            }
            if (a) {
                hg.call(t, u, a);
            }
            if (s) {
                var {classList: h} = u;
                for (var [c, d] of Object.entries(s)) {
                    h.toggle(c, d);
                }
            }
            if (o) {
                var f = u.firstChild;
                var v = f.firstChild;
                r(lg, this, fg).call(this, v, o);
            }
        };
        e.updateParent = function c(t, e) {
            if (e === this) {
                return;
            }
            var r = l(sg, this).get(t);
            if (!r) {
                return;
            }
            l(ag, e).append(r);
            l(sg, this)["delete"](t);
            l(sg, e).set(t, r);
        };
        e.remove = function f(t) {
            l(og, this)["delete"](t);
            if (l(ag, this) === null) {
                return;
            }
            l(sg, this).get(t).remove();
            l(sg, this)["delete"](t);
        };
        e.destroy = function p() {
            h(ag, this, null);
            for (var t of l(sg, this).values()) {
                t.remove();
            }
            l(sg, this).clear();
            l(og, this).clear();
        };
        return v(t, null, [ {
            key: "_svgFactory",
            get: function() {
                return dt(this, "_svgFactory", new lh);
            }
        } ]);
    }();
    N = ug;
    function hg(t, e) {
        var [r, i, n, a] = e;
        var {style: s} = t;
        s.top = 100 * i + "%";
        s.left = 100 * r + "%";
        s.width = 100 * n + "%";
        s.height = 100 * a + "%";
    }
    function cg() {
        var t = N._svgFactory.create(1, 1, true);
        l(ag, this).append(t);
        t.setAttribute("aria-hidden", true);
        return t;
    }
    function dg(t, e) {
        var r = N._svgFactory.createElement("clipPath");
        t.append(r);
        var i = "clip_" + e;
        r.setAttribute("id", i);
        r.setAttribute("clipPathUnits", "objectBoundingBox");
        var n = N._svgFactory.createElement("use");
        r.append(n);
        n.setAttribute("href", "#" + e);
        n.classList.add("clip");
        return i;
    }
    function fg(t, e) {
        for (var [r, i] of Object.entries(e)) {
            if (i === null) {
                t.removeAttribute(r);
            } else {
                t.setAttribute(r, i);
            }
        }
    }
    var vg = {
        _: 0
    };
    {
        globalThis._pdfjsTestingUtils = {
            HighlightOutliner: Qd
        };
    }
    globalThis.pdfjsLib = {
        AbortException: wt,
        AnnotationEditorLayer: Zp,
        AnnotationEditorParamsType: q,
        AnnotationEditorType: V,
        AnnotationEditorUIManager: Xr,
        AnnotationLayer: Uc,
        AnnotationMode: z,
        AnnotationType: Q,
        build: Lu,
        ColorPicker: Vu,
        createValidAbsoluteUrl: ht,
        DOMSVGFactory: lh,
        DrawLayer: ug,
        FeatureTest: Et,
        fetchData: Ut,
        getDocument: Vl,
        getFilenameFromUrl: Yt,
        getPdfFilenameFromUrl: Kt,
        getRGB: ne,
        getUuid: Dt,
        getXfaPageViewport: ie,
        GlobalWorkerOptions: co,
        ImageKind: K,
        InvalidPDFException: gt,
        isDataScheme: qt,
        isPdfFile: Xt,
        isValidExplicitDest: ba,
        MathClamp: Ft,
        noContextMenu: Zt,
        normalizeUnicode: Lt,
        OPS: $,
        OutputScale: ue,
        PasswordResponses: et,
        PDFDataRangeTransport: $l,
        PDFDateString: ee,
        PDFWorker: hu,
        PermissionFlag: X,
        PixelsPerInch: Ht,
        RenderingCancelledException: Vt,
        ResponseException: mt,
        setLayerDimensions: le,
        shadow: dt,
        SignatureExtractor: Xv,
        stopEvent: $t,
        SupportedImageMimeTypes: he,
        TextLayer: Rl,
        TouchManager: en,
        updateUrlHash: ct,
        Util: Mt,
        VerbosityLevel: Z,
        version: Pu,
        XfaLayer: uh
    };
    t.AbortException = wt;
    t.AnnotationEditorLayer = Zp;
    t.AnnotationEditorParamsType = q;
    t.AnnotationEditorType = V;
    t.AnnotationEditorUIManager = Xr;
    t.AnnotationLayer = Uc;
    t.AnnotationMode = z;
    t.AnnotationType = Q;
    t.ColorPicker = Vu;
    t.DOMSVGFactory = lh;
    t.DrawLayer = ug;
    t.FeatureTest = Et;
    t.GlobalWorkerOptions = co;
    t.ImageKind = K;
    t.InvalidPDFException = gt;
    t.MathClamp = Ft;
    t.OPS = $;
    t.OutputScale = ue;
    t.PDFDataRangeTransport = $l;
    t.PDFDateString = ee;
    t.PDFWorker = hu;
    t.PasswordResponses = et;
    t.PermissionFlag = X;
    t.PixelsPerInch = Ht;
    t.RenderingCancelledException = Vt;
    t.ResponseException = mt;
    t.SignatureExtractor = Xv;
    t.SupportedImageMimeTypes = he;
    t.TextLayer = Rl;
    t.TouchManager = en;
    t.Util = Mt;
    t.VerbosityLevel = Z;
    t.XfaLayer = uh;
    t.build = Lu;
    t.createValidAbsoluteUrl = ht;
    t.fetchData = Ut;
    t.getDocument = Vl;
    t.getFilenameFromUrl = Yt;
    t.getPdfFilenameFromUrl = Kt;
    t.getRGB = ne;
    t.getUuid = Dt;
    t.getXfaPageViewport = ie;
    t.isDataScheme = qt;
    t.isPdfFile = Xt;
    t.isValidExplicitDest = ba;
    t.noContextMenu = Zt;
    t.normalizeUnicode = Lt;
    t.setLayerDimensions = le;
    t.shadow = dt;
    t.stopEvent = $t;
    t.updateUrlHash = ct;
    t.version = Pu;
}));
