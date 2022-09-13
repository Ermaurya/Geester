// import React from 'react'
([]).push([
function Prof() {
 

function G(e, n, i) {
    return n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = i, e
}

function H(e, n) {
    if (null == e) return {};
    var i, t, s = function(e, n) {
        if (null == e) return {};
        var i, t, s = {},
            a = Object.keys(e);
        for (t = 0; t < a.length; t++) i = a[t], n.indexOf(i) >= 0 || (s[i] = e[i]);
        return s
    }(e, n);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (t = 0; t < a.length; t++) i = a[t], n.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i])
    }
    return s
}
var Q = function(e) {
        var n = e.children,
            i = e.onClose,
            s = H(e, ["children", "onClose"]);
        return (0, t.jsxs)(A.Z, function(e) {
            for (var n = 1; n < arguments.length; n++) {
                var i = null != arguments[n] ? arguments[n] : {},
                    t = Object.keys(i);
                "function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(i).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable
                })))), t.forEach((function(n) {
                    G(e, n, i[n])
                }))
            }
            return e
        }({
            sx: {
                m: 0,
                p: 2
            }
        }, s, {
            children: [n, i ? (0, t.jsx)(M.Z, {
                "aria-label": "close",
                onClick: i,
                sx: {
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: function(e) {
                        return e.palette.grey[500]
                    }
                },
                children: (0, t.jsx)(L.Z, {})
            }) : null]
        }))
    },
    K = function() {
        var e, n, i, a, c, x, m, f, b, p, g, y, h, j, v, w, k = (0, o.useRouter)(),
            N = (0, s.useState)(""),
            _ = N[0],
            F = N[1],
            E = (0, s.useState)(""),
            C = E[0],
            D = E[1],
            Z = (0, s.useState)(!1),
            B = Z[0],
            T = Z[1],
            S = (0, s.useState)(0),
            O = S[0],
            q = S[1],
            z = (t.Fragment, function() {
                q((function(e) {
                    return e === (null === Y.nt || void 0 === Y.nt ? void 0 : Y.nt.length) - 1 ? 0 : e + 1
                }))
            });
        return (0, s.useEffect)((function() {
            setInterval((function() {
                z()
            }), 5e3)
        }), []), (0, t.jsxs)("div", {
            className: "jsx-6cb83b6570a2d7eb only-web",
            children: [(0, t.jsxs)(u.ZP, {
                container: !0,
                children: [(0, t.jsx)(u.ZP, {
                    xs: 12,
                    sm: 12,
                    md: 3,
                    lg: 3,
                    xl: 3,
                    children: (0, t.jsxs)("div", {
                        className: "jsx-6cb83b6570a2d7eb d-flex flex-col justify-between h-100",
                        children: [(0, t.jsxs)("div", {
                            className: "jsx-6cb83b6570a2d7eb d-flex justify-between",
                            children: [(0, t.jsx)("img", {
                                src: null === (e = Y.nt[0]) || void 0 === e ? void 0 : e.image,
                                style: {
                                    marginTop: "-15px"
                                },
                                onClick: function() {
                                    return q(0)
                                },
                                className: "jsx-6cb83b6570a2d7eb " + ((0 === O ? "bkg-image-active" : "bkg-image") || "")
                            }), (0, t.jsx)("img", {
                                src: null === (n = Y.nt[1]) || void 0 === n ? void 0 : n.image,
                                onClick: function() {
                                    return q(1)
                                },
                                className: "jsx-6cb83b6570a2d7eb " + ((1 === O ? "bkg-image-active" : "bkg-image") || "")
                            })]
                        }), (0, t.jsx)("div", {
                            className: "jsx-6cb83b6570a2d7eb d-flex justify-center",
                            children: (0, t.jsx)("img", {
                                src: null === (i = Y.nt[2]) || void 0 === i ? void 0 : i.image,
                                style: {
                                    marginTop: "-120px"
                                },
                                onClick: function() {
                                    return q(2)
                                },
                                className: "jsx-6cb83b6570a2d7eb " + ((2 === O ? "bkg-image-active" : "bkg-image") || "")
                            })
                        }), (0, t.jsxs)("div", {
                            className: "jsx-6cb83b6570a2d7eb d-flex justify-between",
                            children: [(0, t.jsx)("img", {
                                src: null === (a = Y.nt[3]) || void 0 === a ? void 0 : a.image,
                                style: {
                                    marginTop: "-160px"
                                },
                                onClick: function() {
                                    return q(3)
                                },
                                className: "jsx-6cb83b6570a2d7eb " + ((3 === O ? "bkg-image-active" : "bkg-image") || "")
                            }), (0, t.jsx)("img", {
                                src: null === (c = Y.nt[4]) || void 0 === c ? void 0 : c.image,
                                style: {
                                    marginLeft: "-60px"
                                },
                                onClick: function() {
                                    return q(4)
                                },
                                className: "jsx-6cb83b6570a2d7eb " + ((4 === O ? "bkg-image-active" : "bkg-image") || "")
                            }), (0, t.jsx)("img", {
                                src: null === (x = Y.nt[5]) || void 0 === x ? void 0 : x.image,
                                style: {
                                    marginTop: "-60px"
                                },
                                onClick: function() {
                                    return q(5)
                                },
                                className: "jsx-6cb83b6570a2d7eb " + ((5 === O ? "bkg-image-active" : "bkg-image") || "")
                            })]
                        })]
                    })
                }), (0, t.jsxs)(u.ZP, {
                    xs: 12,
                    sm: 12,
                    md: 6,
                    lg: 6,
                    xl: 6,
                    children: [(0, t.jsxs)("div", {
                        className: "jsx-6cb83b6570a2d7eb d-flex mt-5",
                        children: [(0, t.jsx)("div", {
                            className: "jsx-6cb83b6570a2d7eb d-flex items-center",
                            children: (0, t.jsx)("img", {
                                src: "/images/swiper-left.svg",
                                onClick: function() {
                                    q((function(e) {
                                        return 0 === e ? (null === Y.nt || void 0 === Y.nt ? void 0 : Y.nt.length) - 1 : e - 1
                                    }))
                                },
                                className: "jsx-6cb83b6570a2d7eb cursor-ptr"
                            })
                        }), (0, t.jsxs)("div", {
                            className: "jsx-6cb83b6570a2d7eb testimonials-web-card",
                            children: [(0, t.jsxs)("div", {
                                className: "jsx-6cb83b6570a2d7eb",
                                children: [(0, t.jsx)("div", {
                                    className: "jsx-6cb83b6570a2d7eb",
                                    children: (0, t.jsx)("img", {
                                        src: null === (m = Y.nt[O]) || void 0 === m ? void 0 : m.image,
                                        className: "jsx-6cb83b6570a2d7eb image"
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "jsx-6cb83b6570a2d7eb name",
                                    children: null === (f = Y.nt[O]) || void 0 === f ? void 0 : f.name
                                }), (0, t.jsx)("div", {
                                    className: "jsx-6cb83b6570a2d7eb",
                                    children: (0, t.jsx)("img", {
                                        src: null === (b = Y.nt[O]) || void 0 === b ? void 0 : b.company,
                                        className: "jsx-6cb83b6570a2d7eb company"
                                    })
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "jsx-6cb83b6570a2d7eb",
                                children: [(0, t.jsx)("div", {
                                    className: "jsx-6cb83b6570a2d7eb d-flex justify-end",
                                    children: (null === (p = Y.nt[O]) || void 0 === p ? void 0 : p.youtubeLink) && (0, t.jsxs)("div", {
                                        onClick: function() {
                                            var e, n, i, t, s;
                                            d.n.track("Watched Student Testimonial", {
                                                pageUrl: window.location.href,
                                                studentName: _,
                                                source: (null === (e = k.query) || void 0 === e ? void 0 : e.utm_source) || "",
                                                medium: (null === (n = k.query) || void 0 === n ? void 0 : n.utm_medium) || "",
                                                campaign: (null === (i = k.query) || void 0 === i ? void 0 : i.utm_campaign) || ""
                                            }), F(null === (t = Y.nt[O]) || void 0 === t ? void 0 : t.name), D((null === (s = Y.nt[O]) || void 0 === s ? void 0 : s.youtubeLink) || ""), T(!0)
                                        },
                                        className: "jsx-6cb83b6570a2d7eb youtube",
                                        children: [(0, t.jsx)("img", {
                                            src: "/icons/youtube.svg",
                                            alt: "youtube",
                                            className: "jsx-6cb83b6570a2d7eb"
                                        }), (0, t.jsx)("span", {
                                            className: "jsx-6cb83b6570a2d7eb",
                                            children: "Watch Testimonial"
                                        })]
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "jsx-6cb83b6570a2d7eb",
                                    children: [(0, t.jsx)("p", {
                                        className: "jsx-6cb83b6570a2d7eb text",
                                        children: null === (g = Y.nt[O]) || void 0 === g ? void 0 : g.review
                                    }), (0, t.jsx)("p", {
                                        onClick: function() {
                                            var e;
                                            return k.push({
                                                pathname: W.i.studentReviews.path,
                                                query: {
                                                    name: null === (e = Y.nt[O]) || void 0 === e ? void 0 : e.name
                                                }
                                            })
                                        },
                                        className: "jsx-6cb83b6570a2d7eb read-more",
                                        children: "Read More"
                                    })]
                                })]
                            })]
                        }), (0, t.jsx)("div", {
                            className: "jsx-6cb83b6570a2d7eb d-flex items-center",
                            children: (0, t.jsx)("img", {
                                src: "/images/swiper-right.svg",
                                onClick: z,
                                className: "jsx-6cb83b6570a2d7eb cursor-ptr"
                            })
                        })]
                    }), (0, t.jsx)("div", {
                        className: "jsx-6cb83b6570a2d7eb mt-5",
                        children: (0, t.jsx)(l.Z, {
                            text: "Read More Testimonials",
                            color: "secondary",
                            size: "large",
                            onClick: function() {
                                var e, n, i;
                                d.n.track("Clicked CTA", {
                                    pageUrl: window.location.href,
                                    buttonText: "Read More Testimonials",
                                    section: "Testimonials",
                                    source: (null === k || void 0 === k || null === (e = k.query) || void 0 === e ? void 0 : e.utm_source) || "",
                                    medium: (null === k || void 0 === k || null === (n = k.query) || void 0 === n ? void 0 : n.utm_medium) || "",
                                    campaign: (null === k || void 0 === k || null === (i = k.query) || void 0 === i ? void 0 : i.utm_campaign) || ""
                                }), k.push(W.i.studentReviews.path)
                            }
                        })
                    })]
                }), (0, t.jsx)(u.ZP, {
                    xs: 12,
                    sm: 12,
                    md: 3,
                    lg: 3,
                    xl: 3,
                    children: (0, t.jsxs)("div", {
                        className: "jsx-6cb83b6570a2d7eb d-flex flex-col justify-between h-100",
                        children: [(0, t.jsxs)("div", {
                            className: "jsx-6cb83b6570a2d7eb d-flex justify-between",
                            children: [(0, t.jsx)("img", {
                                src: null === (y = Y.nt[6]) || void 0 === y ? void 0 : y.image,
                                style: {
                                    marginTop: "10px"
                                },
                                onClick: function() {
                                    return q(6)
                                },
                                className: "jsx-6cb83b6570a2d7eb " + ((6 === O ? "bkg-image-active" : "bkg-image") || "")
                            }), (0, t.jsx)("img", {
                                src: null === (h = Y.nt[7]) || void 0 === h ? void 0 : h.image,
                                style: {
                                    marginTop: "40px"
                                },
                                onClick: function() {
                                    return q(7)
                                },
                                className: "jsx-6cb83b6570a2d7eb " + ((7 === O ? "bkg-image-active" : "bkg-image") || "")
                            })]
                        }), (0, t.jsx)("div", {
                            className: "jsx-6cb83b6570a2d7eb d-flex justify-center",
                            children: (0, t.jsx)("img", {
                                src: null === (j = Y.nt[8]) || void 0 === j ? void 0 : j.image,
                                style: {
                                    marginTop: "-120px"
                                },
                                onClick: function() {
                                    return q(8)
                                },
                                className: "jsx-6cb83b6570a2d7eb " + ((8 === O ? "bkg-image-active" : "bkg-image") || "")
                            })
                        }), (0, t.jsxs)("div", {
                            className: "jsx-6cb83b6570a2d7eb d-flex justify-between",
                            children: [(0, t.jsx)("img", {
                                src: null === (v = Y.nt[9]) || void 0 === v ? void 0 : v.image,
                                style: {
                                    marginTop: "-120px"
                                },
                                onClick: function() {
                                    return q(9)
                                },
                                className: "jsx-6cb83b6570a2d7eb " + ((9 === O ? "bkg-image-active" : "bkg-image") || "")
                            }), (0, t.jsx)("img", {
                                src: null === (w = Y.nt[10]) || void 0 === w ? void 0 : w.image,
                                style: {
                                    marginTop: "-60px"
                                },
                                onClick: function() {
                                    return q(10)
                                },
                                className: "jsx-6cb83b6570a2d7eb " + ((10 === O ? "bkg-image-active" : "bkg-image") || "")
                            })]
                        })]
                    })
                })]
            }), (0, t.jsxs)(I.Z, {
                onClose: function() {
                    return T(!1)
                },
                "aria-labelledby": "customized-dialog-title",
                open: B,
                maxWidth: "md",
                fullWidth: !0,
                children: [(0, t.jsx)(Q, {
                    onClose: function() {
                        return T(!1)
                    },
                    children: _
                }), (0, t.jsx)(R.Z, {
                    children: (0, t.jsx)(U.Z, {
                        embedId: C || ""
                    })
                })]
            }), (0, t.jsx)(r.default, {
                id: "6cb83b6570a2d7eb",
                children: ".new-testimonials .bkg-image {opacity:0.4;\nwidth:80px;\nheight:80px;\nborder-radius:50%;\ncursor:pointer}\n.new-testimonials .bkg-image-active {opacity:1;\nwidth:80px;\nheight:80px;\nborder-radius:50%;\ncursor:pointer}\n.new-testimonials .bkg-image:hover {opacity:0.6}\n.testimonials-web-card {background:#ffffff;\nborder:1px solid #e8e9ea;\nmargin:0 20px;\ncolor:#000;\nborder-radius:4px;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\ntext-align:left;\nmin-height:260px}\n.testimonials-web-card >div:first-child {padding:30px;\nborder-right:1px solid #e8e9ea;\nwidth:200px;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-justify-content:center;\njustify-content:center;\nflex-flow:column;\ntext-align:center}\n.testimonials-web-card >div:last-child {padding:30px;\nwidth:100%}\n.testimonials-web-card .image {width:100px;\nheight:100px;\nborder-radius:50%;\nmargin-bottom:12px}\n.testimonials-web-card .youtube {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\ncursor:pointer}\n.testimonials-web-card .youtube span {font-weight:500;\nfont-size:14px;\nline-height:22px;\ncolor:#737c81}\n.testimonials-web-card .youtube img {height:22px;\nmargin-right:10px}\n.testimonials-web-card .name {font-weight:500;\nfont-size:14px;\nline-height:20px;\ncolor:#16252d;\nmargin-bottom:8px}\n.testimonials-web-card .company {height:24px}\n.testimonials-web-card .text {margin-top:20px;\nfont-weight:400;\nfont-size:15px;\nline-height:22px;\ncolor:#16252d;\ndisplay:-webkit-box;\n-webkit-line-clamp:5;\n-webkit-box-orient:vertical;\noverflow:hidden}\n.testimonials-web-card .read-more {color:#737c81;\nfont-weight:500;\ncursor:pointer}"
            })]
        })
    };

function J(e, n, i) {
    return n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = i, e
}

function X(e, n) {
    if (null == e) return {};
    var i, t, s = function(e, n) {
        if (null == e) return {};
        var i, t, s = {},
            a = Object.keys(e);
        for (t = 0; t < a.length; t++) i = a[t], n.indexOf(i) >= 0 || (s[i] = e[i]);
        return s
    }(e, n);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (t = 0; t < a.length; t++) i = a[t], n.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i])
    }
    return s
}

function V(e) {
    return function(e) {
        if (Array.isArray(e)) {
            for (var n = 0, i = new Array(e.length); n < e.length; n++) i[n] = e[n];
            return i
        }
    }(e) || function(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
}
var $ = function(e) {
        var n = e.children,
            i = e.onClose,
            s = X(e, ["children", "onClose"]);
        return (0, t.jsxs)(A.Z, function(e) {
            for (var n = 1; n < arguments.length; n++) {
                var i = null != arguments[n] ? arguments[n] : {},
                    t = Object.keys(i);
                "function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(i).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable
                })))), t.forEach((function(n) {
                    J(e, n, i[n])
                }))
            }
            return e
        }({
            sx: {
                m: 0,
                p: 2
            }
        }, s, {
            children: [n, i ? (0, t.jsx)(M.Z, {
                "aria-label": "close",
                onClick: i,
                sx: {
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: function(e) {
                        return e.palette.grey[500]
                    }
                },
                children: (0, t.jsx)(L.Z, {})
            }) : null]
        }))
    },
    ee = function() {
        var e, n, i, a, c, x = (0, o.useRouter)(),
            m = (0, s.useState)(""),
            u = m[0],
            f = m[1],
            b = (0, s.useState)(""),
            p = b[0],
            g = b[1],
            y = (0, s.useState)(!1),
            h = y[0],
            j = y[1],
            v = (0, s.useState)(0),
            w = v[0],
            k = v[1],
            N = (0, s.useState)(),
            _ = N[0],
            F = N[1],
            E = (0, s.useState)(),
            C = E[0],
            D = E[1],
            Z = function() {
                k((function(e) {
                    return e === (null === Y.nt || void 0 === Y.nt ? void 0 : Y.nt.length) - 1 ? 0 : e + 1
                }))
            };
        return (0, s.useEffect)((function() {
            setInterval((function() {
                Z()
            }), 8e3)
        }), []), (0, s.useEffect)((function() {
            var e = V(Y.nt);
            e.splice(w, 1);
            var n = Math.ceil(e.length / 2),
                i = e.splice(0, n),
                t = e.splice(-n);
            F(i), D(t)
        }), [w]), (0, t.jsxs)("div", {
            className: "jsx-bfc35fd83c03257a only-mobile",
            children: [(0, t.jsxs)("div", {
                className: "jsx-bfc35fd83c03257a mt-1",
                children: [(0, t.jsxs)("div", {
                    className: "jsx-bfc35fd83c03257a image-container",
                    children: [(0, t.jsx)("div", {
                        className: "jsx-bfc35fd83c03257a d-flex",
                        children: null === _ || void 0 === _ ? void 0 : _.map((function(e, n) {
                            return (0, t.jsx)("img", {
                                src: null === e || void 0 === e ? void 0 : e.image,
                                onClick: function() {
                                    k((null === e || void 0 === e ? void 0 : e.index) - 1)
                                },
                                className: "jsx-bfc35fd83c03257a image"
                            }, n)
                        }))
                    }), (0, t.jsx)("div", {
                        className: "jsx-bfc35fd83c03257a",
                        children: (0, t.jsx)("img", {
                            src: null === (e = Y.nt[w]) || void 0 === e ? void 0 : e.image,
                            className: "jsx-bfc35fd83c03257a active-image"
                        })
                    }), (0, t.jsx)("div", {
                        className: "jsx-bfc35fd83c03257a d-flex",
                        children: null === C || void 0 === C ? void 0 : C.map((function(e, n) {
                            return (0, t.jsx)("img", {
                                src: null === e || void 0 === e ? void 0 : e.image,
                                onClick: function() {
                                    k((null === e || void 0 === e ? void 0 : e.index) - 1)
                                },
                                className: "jsx-bfc35fd83c03257a image"
                            }, n)
                        }))
                    })]
                }), (0, t.jsxs)("div", {
                    className: "jsx-bfc35fd83c03257a testimonials-mobile-card",
                    children: [(0, t.jsxs)("div", {
                        className: "jsx-bfc35fd83c03257a",
                        children: [(0, t.jsx)("div", {
                            className: "jsx-bfc35fd83c03257a name",
                            children: null === (n = Y.nt[w]) || void 0 === n ? void 0 : n.name
                        }), (0, t.jsx)("div", {
                            className: "jsx-bfc35fd83c03257a",
                            children: (0, t.jsx)("img", {
                                src: null === (i = Y.nt[w]) || void 0 === i ? void 0 : i.company,
                                className: "jsx-bfc35fd83c03257a company"
                            })
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "jsx-bfc35fd83c03257a",
                        children: [(0, t.jsx)("div", {
                            className: "jsx-bfc35fd83c03257a d-flex justify-start",
                            children: (null === (a = Y.nt[w]) || void 0 === a ? void 0 : a.youtubeLink) && (0, t.jsxs)("div", {
                                onClick: function() {
                                    var e, n, i, t, s;
                                    d.n.track("Watched Student Testimonial", {
                                        pageUrl: window.location.href,
                                        studentName: u,
                                        source: (null === (e = x.query) || void 0 === e ? void 0 : e.utm_source) || "",
                                        medium: (null === (n = x.query) || void 0 === n ? void 0 : n.utm_medium) || "",
                                        campaign: (null === (i = x.query) || void 0 === i ? void 0 : i.utm_campaign) || ""
                                    }), f(null === (t = Y.nt[w]) || void 0 === t ? void 0 : t.name), g((null === (s = Y.nt[w]) || void 0 === s ? void 0 : s.youtubeLink) || ""), j(!0)
                                },
                                className: "jsx-bfc35fd83c03257a youtube",
                                children: [(0, t.jsx)("img", {
                                    src: "/icons/youtube.svg",
                                    alt: "youtube",
                                    className: "jsx-bfc35fd83c03257a"
                                }), (0, t.jsx)("span", {
                                    className: "jsx-bfc35fd83c03257a",
                                    children: "Watch Testimonial"
                                })]
                            })
                        }), (0, t.jsxs)("div", {
                            className: "jsx-bfc35fd83c03257a",
                            children: [(0, t.jsx)("p", {
                                className: "jsx-bfc35fd83c03257a text",
                                children: null === (c = Y.nt[w]) || void 0 === c ? void 0 : c.review
                            }), (0, t.jsx)("p", {
                                onClick: function() {
                                    var e;
                                    return x.push({
                                        pathname: W.i.studentReviews.path,
                                        query: {
                                            name: null === (e = Y.nt[w]) || void 0 === e ? void 0 : e.name
                                        }
                                    })
                                },
                                className: "jsx-bfc35fd83c03257a read-more",
                                children: "Read More"
                            })]
                        })]
                    })]
                }), (0, t.jsxs)("div", {
                    className: "jsx-bfc35fd83c03257a d-flex justify-center items-center mt-3 arrow-icon",
                    children: [(0, t.jsx)("img", {
                        src: "/images/swiper-left.svg",
                        onClick: function() {
                            k((function(e) {
                                return 0 === e ? (null === Y.nt || void 0 === Y.nt ? void 0 : Y.nt.length) - 1 : e - 1
                            }))
                        },
                        className: "jsx-bfc35fd83c03257a cursor-ptr mr-2"
                    }), (0, t.jsx)("img", {
                        src: "/images/swiper-right.svg",
                        onClick: Z,
                        className: "jsx-bfc35fd83c03257a cursor-ptr ml-2"
                    })]
                }), (0, t.jsx)("div", {
                    className: "jsx-bfc35fd83c03257a mt-4",
                    children: (0, t.jsx)(l.Z, {
                        text: "Read More Testimonials",
                        color: "secondary",
                        size: "large",
                        onClick: function() {
                            var e, n, i;
                            d.n.track("Clicked CTA", {
                                pageUrl: window.location.href,
                                buttonText: "Read More Testimonials",
                                section: "Testimonials",
                                source: (null === x || void 0 === x || null === (e = x.query) || void 0 === e ? void 0 : e.utm_source) || "",
                                medium: (null === x || void 0 === x || null === (n = x.query) || void 0 === n ? void 0 : n.utm_medium) || "",
                                campaign: (null === x || void 0 === x || null === (i = x.query) || void 0 === i ? void 0 : i.utm_campaign) || ""
                            }), x.push(W.i.studentReviews.path)
                        }
                    })
                })]
            }), (0, t.jsxs)(I.Z, {
                onClose: function() {
                    return j(!1)
                },
                "aria-labelledby": "customized-dialog-title",
                open: h,
                maxWidth: "md",
                fullWidth: !0,
                children: [(0, t.jsx)($, {
                    onClose: function() {
                        return j(!1)
                    },
                    children: u
                }), (0, t.jsx)(R.Z, {
                    children: (0, t.jsx)(U.Z, {
                        embedId: p || ""
                    })
                })]
            }), (0, t.jsx)(r.default, {
                id: "bfc35fd83c03257a",
                children: ".new-testimonials .bkg-image {opacity:0.4;\nwidth:80px;\nheight:80px;\nborder-radius:50%;\ncursor:pointer}\n.new-testimonials .bkg-image:hover {opacity:0.6}\n.testimonials-mobile-card {background:#ffffff;\nborder:1px solid #e8e9ea;\nmargin:0 20px;\ncolor:#000;\nborder-radius:4px;\ntext-align:left;\nmin-height:260px;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\nflex-flow:column}\n.testimonials-mobile-card >div:first-child {padding:20px;\nborder-bottom:1px solid #e8e9ea;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-justify-content:center;\njustify-content:center;\nflex-flow:column;\ntext-align:center}\n.testimonials-mobile-card >div:last-child {padding:20px}\n.only-mobile .image-container {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-box-pack:justify;\n-webkit-justify-content:space-between;\njustify-content:space-between;\ngap:7px;\nmargin-bottom:18px;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\nmargin-bottom:12px}\n.only-mobile .image-container .image {width:30px;\nheight:30px;\nborder-radius:50%;\nopacity:0.2;\nmargin-left:-5px}\n.only-mobile .image-container .image:first-child {margin-left:0}\n.only-mobile .image-container .active-image {width:60px;\nheight:60px;\nborder-radius:50%}\n.testimonials-mobile-card .youtube {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\ncursor:pointer;\nmargin-bottom:30px}\n.testimonials-mobile-card .youtube span {font-weight:500;\nfont-size:14px;\nline-height:22px;\ncolor:#737c81}\n.testimonials-mobile-card .youtube img {height:22px;\nmargin-right:10px}\n.testimonials-mobile-card .name {font-weight:500;\nfont-size:18px;\nline-height:27px;\ncolor:#16252d;\nmargin-bottom:8px}\n.testimonials-mobile-card .company {height:16px}\n.testimonials-mobile-card .text {margin-top:0px;\nfont-weight:400;\nfont-size:15px;\nline-height:22px;\ncolor:#16252d;\ntext-align:left;\ndisplay:-webkit-box;\n-webkit-line-clamp:5;\n-webkit-box-orient:vertical;\noverflow:hidden}\n.testimonials-mobile-card .read-more {color:#737c81;\nfont-weight:500;\ncursor:pointer;\ntext-align:left}"
            })]
        })
    },
    ne = function() {
        var e = (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("span", {
                className: "primary-text",
                children: "Thousands "
            }), (0, t.jsx)("span", {
                className: "white-text",
                children: "of lives changed"
            })]
        });
        return (0, t.jsxs)("div", {
            className: "jsx-64909cdf6d79ec65 new-testimonials",
            children: [(0, t.jsxs)("div", {
                className: "jsx-64909cdf6d79ec65 new-testimonials p-6 pl-0 pr-0 text-center max-width sm-p-2 sm-pb-3",
                children: [(0, t.jsx)("h2", {
                    className: "jsx-64909cdf6d79ec65 first-content-text text-section--title mt-0",
                    children: e
                }), (0, t.jsx)("h2", {
                    className: "jsx-64909cdf6d79ec65 sub-heading",
                    children: "Hear it from the ones who have been on this journey already"
                }), (0, t.jsx)(K, {}), (0, t.jsx)(ee, {})]
            }), (0, t.jsx)(r.default, {
                id: "64909cdf6d79ec65",
                children: ".new-testimonials {background:#16252d;\ncolor:white}\n.new-testimonials .sub-heading {font-weight:400;\nfont-size:20px;\nline-height:34px;\ncolor:#b9bec0}\n.new-testimonials .only-web {display:block}\n.new-testimonials .only-mobile {display:none}\n@media (max-width:600px) {.new-testimonials .only-web {display:none}\n.new-testimonials .only-mobile {display:block}}"
            })]
        })
    }
}

]);
export default Prof;