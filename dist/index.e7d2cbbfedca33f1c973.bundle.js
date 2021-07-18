!function(e) {
    function t(t) {
        for (var n, s, o = t[0], c = t[1], m = t[2], u = 0, p = []; u < o.length; u++) s = o[u], 
        Object.prototype.hasOwnProperty.call(r, s) && r[s] && p.push(r[s][0]), r[s] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
        for (i && i(t); p.length; ) p.shift()();
        return l.push.apply(l, m || []), a();
    }
    function a() {
        for (var e, t = 0; t < l.length; t++) {
            for (var a = l[t], n = !0, o = 1; o < a.length; o++) {
                var c = a[o];
                0 !== r[c] && (n = !1);
            }
            n && (l.splice(t--, 1), e = s(s.s = a[0]));
        }
        return e;
    }
    var n = {}, r = {
        0: 0
    }, l = [];
    function s(t) {
        if (n[t]) return n[t].exports;
        var a = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, s), a.l = !0, a.exports;
    }
    s.m = e, s.c = n, s.d = function(e, t, a) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        });
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (s.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var n in e) s.d(a, n, function(t) {
            return e[t];
        }.bind(null, n));
        return a;
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return s.d(t, "a", t), t;
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, s.p = "";
    var c = (o = window.webpackJsonp = window.webpackJsonp || []).push.bind(o);
    o.push = t;
    for (var o = o.slice(), m = 0; m < o.length; m++) t(o[m]);
    var i = c;
    l.push([ 455, 1 ]), a();
}({
    455: function(e, d, a) {
        "use strict";
        a.r(d), a(192), a(429);
        function E(e) {
            e ? (F.defaults.headers.common.Authorization = "Bearer " + e, localStorage.setItem("token", e)) : (delete F.defaults.headers.common.Authorization, 
            localStorage.removeItem("token"));
        }
        var n = a(0), r = a.n(n), R = a(97), s = a.n(R), k = a(129), S = a.n(k), m = a(4), i = a(17), u = a(130), p = a(3), f = a(63), d = a(190), R = a(191), g = [];
        function b() {
            return (b = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = arguments[t];
                    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
            }).apply(this, arguments);
        }
        var v = {
            token: localStorage.getItem("token"),
            isAuthenticated: null,
            loading: !0,
            user: null
        };
        function h() {
            return (h = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = arguments[t];
                    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
            }).apply(this, arguments);
        }
        var N = {
            posts: null,
            post: null,
            loading: !0,
            error: {}
        };
        function y() {
            return (y = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = arguments[t];
                    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
            }).apply(this, arguments);
        }
        var w = {
            profileUserData: null,
            profileStats: null,
            profilePosts: null,
            profiles: [],
            followingList: null,
            followersList: null,
            loading: !0,
            error: {}
        }, k = Object(f.combineReducers)({
            alert: function(e, t) {
                void 0 === e && (e = g);
                var a = t.type, n = t.payload;
                switch (a) {
                  case "SET_ALERT":
                    return [].concat(e, [ n ]);

                  case "REMOVE_ALERT":
                    return e.filter(function(e) {
                        return e.id !== n;
                    });

                  default:
                    return e;
                }
            },
            auth: function(e, t) {
                void 0 === e && (e = v);
                var a = t.type, n = t.payload;
                switch (a) {
                  case "USER_LOADED":
                  case "REGISTER_SUCCESS":
                  case "LOGIN_SUCCESS":
                    return b({}, e, n, {
                        isAuthenticated: !0,
                        loading: !1
                    });

                  case "REGISTER_FAIL":
                  case "AUTH_ERROR":
                  case "LOGIN_FAILURE":
                  case "LOGOUT":
                  case "ACCOUNT_DELETED":
                    return b({}, e, {
                        token: null,
                        isAuthenticated: !1,
                        loading: !1,
                        user: null
                    });

                  default:
                    return e;
                }
            },
            post: function(e, t) {
                void 0 === e && (e = N);
                var a = t.type, n = t.payload;
                switch (a) {
                  case "GET_ALL_POSTS":
                    return h({}, e, {
                        posts: n,
                        loading: !1
                    });

                  case "GET_POST_BY_ID":
                    return h({}, e, {
                        post: n,
                        loading: !1
                    });

                  case "CREATE_POST":
                    return h({}, e, {
                        posts: [ n ].concat(e.posts),
                        loading: !1
                    });

                  case "UPDATE_POST":
                    return h({}, e, {
                        post: {
                            postData: n,
                            postComments: [].concat(e.post.postComments),
                            postLikes: [].concat(e.post.postLikes)
                        },
                        loading: !1
                    });

                  case "CLEAR_POST":
                    return h({}, e, {
                        post: null
                    });

                  case "CLEAR_FEED_POSTS":
                    return h({}, e, {
                        posts: null
                    });

                  case "LIKE_POST":
                    return h({}, e, {
                        post: {
                            postData: h({}, e.post.postData),
                            postComments: [].concat(e.post.postComments),
                            postLikes: [ n ].concat(e.post.postLikes)
                        },
                        loading: !1
                    });

                  case "LIKE_FEED_POST":
                    var s = e.posts.findIndex(function(e) {
                        return e.id === n.postId;
                    });
                    return e.posts[s].postLikes.push(n.postLike), h({}, e, {
                        loading: !1
                    });

                  case "UNLIKE_POST":
                    return h({}, e, {
                        post: {
                            postData: h({}, e.post.postData),
                            postComments: [].concat(e.post.postComments),
                            postLikes: e.post.postLikes.filter(function(e) {
                                return e.user_id !== n.userId;
                            })
                        },
                        loading: !1
                    });

                  case "UNLIKE_FEED_POST":
                    var l = e.posts.findIndex(function(e) {
                        return e.id === n.postId;
                    }), s = e.posts[l].postLikes.filter(function(e) {
                        return e.user_id !== n.userId;
                    });
                    return e.posts[l].postLikes = s, h({}, e, {
                        loading: !1
                    });

                  case "LIKE_COMMENT":
                    var c = e.post.postComments.findIndex(function(e) {
                        return e.id === n.commentId;
                    });
                    return e.post.postComments[c].commentLikes.push(n.likeComment), h({}, e, {
                        loading: !1
                    });

                  case "UNLIKE_COMMENT":
                    var c = e.post.postComments.findIndex(function(e) {
                        return e.id === n.commentId;
                    }), i = e.post.postComments[c].commentLikes.filter(function(e) {
                        return e.user_id !== n.userId;
                    });
                    return e.post.postComments[c].commentLikes = i, h({}, e, {
                        loading: !1
                    });

                  case "ADD_COMMENT":
                    return h({}, e, {
                        post: {
                            postData: h({}, e.post.postData),
                            postComments: [ n ].concat(e.post.postComments),
                            postLikes: [].concat(e.post.postLikes)
                        },
                        loading: !1
                    });

                  case "UPDATE_COMMENT":
                    return e.post.postComments.map(function(e) {
                        return e.id === n.commentId ? n.updatedPostComment : e;
                    }), h({}, e, {
                        loading: !1
                    });

                  case "DELETE_COMMENT":
                    i = e.post.postComments.filter(function(e) {
                        return e.id !== n.commentId;
                    });
                    return e.post.postComments = i, h({}, e, {
                        loading: !1
                    });

                  case "DELETE_FEED_POST":
                    return h({}, e, {
                        posts: e.posts.filter(function(e) {
                            return e.id !== n;
                        }),
                        loading: !1
                    });

                  case "DELETE_POST":
                    return h({}, e, {
                        loading: !1
                    });

                  case "POST_ERROR":
                  case "LIKE_ERROR":
                  case "COMMENT_ERROR":
                    return h({}, e, {
                        error: n,
                        loading: !1
                    });

                  default:
                    return e;
                }
            },
            profile: function(e, t) {
                void 0 === e && (e = w);
                var a = t.type, n = t.payload;
                switch (a) {
                  case "GET_PROFILES":
                    return y({}, e, {
                        profiles: n,
                        loading: !1
                    });

                  case "GET_PROFILE":
                  case "UPDATE_PROFILE":
                    return y({}, e, {
                        profileUserData: n.myUserData,
                        profileStats: {
                            profileDetails: n.myProfileInfo,
                            profileSocials: n.mySocialsInfo,
                            followers: n.profileFollowers,
                            following: n.profileFollowing
                        },
                        profilePosts: n.profilePosts,
                        followingList: null,
                        followersList: null,
                        loading: !1
                    });

                  case "FOLLOW_PROFILE":
                    return y({}, e, {
                        profileStats: {
                            profileDetails: y({}, e.profileStats.profileDetails),
                            profileSocials: y({}, e.profileStats.profileSocials),
                            followers: [].concat(e.profileStats.followers, n.followUser),
                            following: [].concat(e.profileStats.following)
                        },
                        loading: !1
                    });

                  case "UNFOLLOW_PROFILE":
                    return y({}, e, {
                        profileStats: {
                            profileDetails: y({}, e.profileStats.profileDetails),
                            profileSocials: y({}, e.profileStats.profileSocials),
                            followers: [].concat(e.profileStats.followers.filter(function(e) {
                                return e.follower_id !== n.followUser;
                            })),
                            following: [].concat(e.profileStats.following)
                        },
                        loading: !1
                    });

                  case "CLEAR_PROFILE":
                    return y({}, e, {
                        profileUserData: null,
                        profileStats: null,
                        profilePosts: null
                    });

                  case "ACCOUNT_DELETED":
                    return y({}, e, {
                        profileUserData: null,
                        profileStats: null,
                        profilePosts: null,
                        loading: !1
                    });

                  case "PROFILE_ERROR":
                    return y({}, e, {
                        error: n,
                        loading: !1
                    });

                  case "FOLLOWING_PROFILE_LIST":
                    return y({}, e, {
                        followingList: n.following,
                        loading: !1
                    });

                  case "FOLLOWERS_PROFILE_LIST":
                    return y({}, e, {
                        followersList: n.followers,
                        loading: !1
                    });

                  default:
                    return e;
                }
            }
        }), R = [ R.a ], C = Object(f.createStore)(k, {}, Object(d.composeWithDevTools)(f.applyMiddleware.apply(void 0, R))), x = C.getState();
        C.subscribe(function() {
            var e;
            x !== (x = C.getState()).auth.token && (e = x.auth.token, E(e));
        });
        var L = C, S = S.a.create({
            baseURL: "https://squadupsocial.herokuapp.com/api",
            credentials: "include"
        });
        S.interceptors.request.use(function(e) {
            var t = localStorage.getItem("token");
            return t && (e.headers.Authorization = "Bearer " + t), e;
        }, function(e) {
            return Promise.reject(e);
        });
        function T(e, t, a) {
            return void 0 === a && (a = 5e3), function(n) {
                var r = Object(P.a)();
                n({
                    type: "SET_ALERT",
                    payload: {
                        msg: e,
                        alertType: t,
                        id: r
                    }
                }), setTimeout(function() {
                    return n({
                        type: "REMOVE_ALERT",
                        payload: r
                    });
                }, a);
            };
        }
        var F = S, P = a(457);
        function q(e, t, a, n, r, l, s) {
            try {
                var o = e[l](s), c = o.value;
            } catch (e) {
                return a(e), 0;
            }
            o.done ? t(c) : Promise.resolve(c).then(n, r);
        }
        function G(e) {
            return function() {
                var t = this, a = arguments;
                return new Promise(function(n, r) {
                    var l = e.apply(t, a);
                    function s(e) {
                        q(l, n, r, s, o, "next", e);
                    }
                    function o(e) {
                        q(l, n, r, s, o, "throw", e);
                    }
                    s(void 0);
                });
            };
        }
        function z() {
            return e = G(regeneratorRuntime.mark(function e(t) {
                var a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, F.get("/auth");

                      case 3:
                        a = e.sent, t({
                            type: "USER_LOADED",
                            payload: a.data.data
                        }), e.next = 10;
                        break;

                      case 7:
                        e.prev = 7, e.t0 = e.catch(0), t({
                            type: "AUTH_ERROR"
                        });

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 0, 7 ] ]);
            })), function(t) {
                return e.apply(this, arguments);
            };
            var e;
        }
        function B(e) {
            return t = G(regeneratorRuntime.mark(function t(a) {
                var n, l;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, t.next = 3, function(c) {
                            var t = c.firstName, a = c.lastName, n = c.username, r = c.tagName, l = c.email, s = c.password, o = c.avatar, c = new FormData();
                            return c.append("firstName", t), c.append("lastName", a), c.append("username", n), 
                            c.append("tagName", r), c.append("email", l), c.append("password", s), o && c.append("avatar", o), 
                            c;
                        }(e);

                      case 3:
                        return n = t.sent, t.next = 6, F.post("/users", n);

                      case 6:
                        l = t.sent, a({
                            type: "REGISTER_SUCCESS",
                            payload: l.data.data
                        }), a(z()), a(T("Successfully registered. Welcome.", "success")), t.next = 17;
                        break;

                      case 12:
                        t.prev = 12, t.t0 = t.catch(0), (l = t.t0.response.data.errors) && l.forEach(function(e) {
                            return a(T(e.msg, "danger"));
                        }), a({
                            type: "REGISTER_FAIL"
                        });

                      case 17:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 0, 12 ] ]);
            })), function(e) {
                return t.apply(this, arguments);
            };
            var t;
        }
        function Y() {
            var e = Object(p.b)(), t = Object(i.g)(), l = (c = Object(p.c)(function(e) {
                return e.auth;
            })).isAuthenticated, _ = (c.loading, localStorage.getItem("theme"));
            _ || localStorage.setItem("theme", "light");
            var E = Object(n.useState)(_), c = E[0], f = E[1];
            function d(e) {
                f(e), localStorage.setItem("theme", e);
            }
            return Object(n.useEffect)(function() {
                var e = localStorage.getItem("theme");
                e && f(e);
            }, []), _ = r.a.createElement(n.Fragment, null, r.a.createElement("li", {
                className: "nav__item"
            }, r.a.createElement(m.b, {
                to: "/feed",
                className: "nav__link"
            }, "Feed")), r.a.createElement("li", {
                className: "nav__item"
            }, r.a.createElement(m.b, {
                to: "/dashboard",
                className: "nav__link"
            }, "Dashboard")), r.a.createElement("li", {
                className: "nav__item"
            }, r.a.createElement("a", {
                className: "nav__link",
                onClick: function() {
                    e(function(e) {
                        return t = G(regeneratorRuntime.mark(function t(a) {
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return a({
                                        type: "CLEAR_PROFILE"
                                    }), a({
                                        type: "CLEAR_FEED_POSTS"
                                    }), a({
                                        type: "LOGOUT"
                                    }), e.push("/"), a(T("Logout successful.", "success")), t.next = 7, F.post("/auth/logout");

                                  case 7:
                                    t.sent;

                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        })), function(e) {
                            return t.apply(this, arguments);
                        };
                        var t;
                    }(t));
                }
            }, "Logout"))), E = r.a.createElement(n.Fragment, null, r.a.createElement("li", {
                className: "nav__item"
            }, r.a.createElement(m.b, {
                to: "/register",
                className: "nav__link"
            }, "Sign Up")), r.a.createElement("li", {
                className: "nav__item"
            }, r.a.createElement(m.b, {
                to: "/login",
                className: "nav__link"
            }, "Login"))), r.a.createElement(u.b, null, r.a.createElement("header", {
                className: "nav__header"
            }, r.a.createElement(u.a, null, r.a.createElement("html", {
                className: c
            })), r.a.createElement("div", {
                className: "nav__logo"
            }, r.a.createElement("h1", null, r.a.createElement(m.b, {
                to: "/",
                className: "logo"
            }, "SquadUp"))), r.a.createElement("div", {
                tabIndex: "0",
                className: "burger"
            }, r.a.createElement("i", {
                className: "fas fa-bars"
            }), r.a.createElement("div", {
                className: "nav-container row"
            }, r.a.createElement("nav", {
                className: "nav"
            }, r.a.createElement("ul", {
                className: "nav__item-list"
            }, r.a.createElement("li", {
                className: "nav__item"
            }, r.a.createElement(m.b, {
                to: "/profiles",
                className: "nav__link"
            }, "Members")), r.a.createElement(n.Fragment, null, l ? _ : E))))), r.a.createElement("input", {
                type: "checkbox",
                id: "theme-toggle",
                className: "theme-toggler"
            }), r.a.createElement("label", {
                htmlFor: "theme-toggle",
                className: "theme-selection"
            }, r.a.createElement("span", {
                className: "fas fa-caret-down"
            })), r.a.createElement("div", {
                className: "theme theme-container"
            }, r.a.createElement("ul", {
                className: "theme__item-list dropdown"
            }, r.a.createElement("li", {
                className: "theme__item active",
                onClick: function() {
                    return d("light");
                }
            }, r.a.createElement("div", {
                className: "theme__link light"
            })), r.a.createElement("li", {
                className: "theme__item active",
                onClick: function() {
                    return d("dark");
                }
            }, r.a.createElement("div", {
                className: "theme__link dark"
            })), r.a.createElement("li", {
                className: "theme__item active",
                onClick: function() {
                    return d("purple-prime");
                }
            }, r.a.createElement("div", {
                className: "theme__link purple-prime"
            })), r.a.createElement("li", {
                className: "theme__item active",
                onClick: function() {
                    return d("bee");
                }
            }, r.a.createElement("div", {
                className: "theme__link bee"
            })), r.a.createElement("li", {
                className: "theme__item active",
                onClick: function() {
                    return d("redcomet");
                }
            }, r.a.createElement("div", {
                className: "theme__link redcomet"
            }))))));
        }
        function W() {
            return Object(p.c)(function(e) {
                return e.auth;
            }).isAuthenticated && i.a, r.a.createElement("main", null, r.a.createElement("section", {
                className: "hero hero-background"
            }, r.a.createElement("div", {
                className: "hero__content"
            }, r.a.createElement("div", {
                className: "hero__sidebar"
            }, r.a.createElement("div", {
                className: "hero__title"
            }, r.a.createElement("h2", null, "SquadUp with Friends"), r.a.createElement("p", null, "Create a community centered around you."), r.a.createElement("div", {
                className: "hero__buttons"
            }, r.a.createElement(m.b, {
                to: "/register",
                className: "btn btn-primary btn-overlay"
            }, "Sign Up"), r.a.createElement(m.b, {
                to: "/login",
                className: "btn btn-secondary btn-overlay"
            }, "Login")))))));
        }
        function V() {
            var e = Object(p.c)(function(e) {
                return e.alert;
            });
            return r.a.createElement("div", {
                className: "alert-wrapper"
            }, e.map(function(e) {
                return r.a.createElement("div", {
                    key: e.id,
                    className: "alert alert-" + e.alertType
                }, e.msg);
            }));
        }
        function H(e, t, a, n, r, l, s) {
            try {
                var o = e[l](s), c = o.value;
            } catch (e) {
                return a(e), 0;
            }
            o.done ? t(c) : Promise.resolve(c).then(n, r);
        }
        function J() {
            return (J = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = arguments[t];
                    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
            }).apply(this, arguments);
        }
        function Z() {
            var e = Object(p.b)(), a = (b = Object(p.c)(function(e) {
                return e.auth;
            })).isAuthenticated, s = (v = (b.loading, Object(n.useState)({
                firstName: "",
                lastName: "",
                username: "",
                tagName: "",
                email: "",
                password: "",
                password2: "",
                avatar: null
            })))[0], o = v[1], c = s.firstName, u = s.lastName, f = s.username, d = s.tagName, _ = s.email, E = s.password, g = s.password2, b = (s.avatar, 
            function(e) {
                var t;
                o(J({}, s, ((t = {})[e.target.name] = e.target.value, t)));
            }), v = function() {
                var t, a = (t = regeneratorRuntime.mark(function t(a) {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            a.preventDefault(), e(E !== g ? T("Passwords do not match", "danger") : B(s));

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }), function() {
                    var e = this, a = arguments;
                    return new Promise(function(n, r) {
                        var l = t.apply(e, a);
                        function s(e) {
                            H(l, n, r, s, o, "next", e);
                        }
                        function o(e) {
                            H(l, n, r, s, o, "throw", e);
                        }
                        s(void 0);
                    });
                });
                return function(e) {
                    return a.apply(this, arguments);
                };
            }();
            return a ? r.a.createElement(i.a, {
                to: "/feed"
            }) : r.a.createElement("section", {
                className: "form-page-wrapper"
            }, r.a.createElement("h1", {
                className: "section-header"
            }, "Sign Up"), r.a.createElement("p", null, r.a.createElement("i", {
                className: "fas fa-user"
            }), " Create Your Account"), r.a.createElement("div", {
                className: "form-container"
            }, r.a.createElement("form", {
                className: "form",
                onSubmit: v
            }, r.a.createElement("div", {
                className: "form__header"
            }, r.a.createElement("small", {
                className: ""
            }, "Red labels are ", r.a.createElement("span", {
                className: "req-color"
            }, "required"), ". Avatar image optional.")), r.a.createElement("div", {
                className: "form__inner-container"
            }, r.a.createElement("div", {
                className: "form__section"
            }, r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                name: "username",
                value: f,
                onChange: b,
                placeholder: "White Owl-01 ",
                "aria-required": "true",
                required: !0
            }), r.a.createElement("label", {
                htmlFor: "username",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Username"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                name: "tagName",
                value: d,
                onChange: b,
                placeholder: "yellow canary11 (@yellow_canary11) ",
                "aria-required": "true",
                required: !0
            }), r.a.createElement("label", {
                htmlFor: "TagName",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Tag Name"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "email",
                name: "email",
                value: _,
                onChange: b,
                placeholder: "myemail123@mail.com ",
                "aria-required": "true",
                required: !0
            }), r.a.createElement("label", {
                htmlFor: "email",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "E-Mail Address"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "password",
                name: "password",
                value: E,
                onChange: b,
                placeholder: "Must be 6 or more characters. ",
                "aria-required": "true",
                required: !0
            }), r.a.createElement("label", {
                htmlFor: "password",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Password"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "password",
                name: "password2",
                value: g,
                onChange: b,
                placeholder: "Repeat password to confirm. ",
                "aria-required": "true",
                required: !0
            }), r.a.createElement("label", {
                htmlFor: "password2",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Confirm Password")))), r.a.createElement("div", {
                className: "form__section section-two"
            }, r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                name: "firstName",
                value: c,
                onChange: b,
                placeholder: " "
            }), r.a.createElement("label", {
                htmlFor: "firstName",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "First Name", r.a.createElement("span", {
                className: "form__label-desc"
            }, " (Optional)")))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                name: "lastName",
                value: u,
                onChange: b,
                placeholder: " "
            }), r.a.createElement("label", {
                htmlFor: "lastName",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Last Name", r.a.createElement("span", {
                className: "form__label-desc"
            }, " (Optional)")))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "file",
                accept: ".jpeg, .jpg, .png, .gif",
                name: "avatar",
                className: "file-btn-input file-slim",
                onChange: function(e) {
                    var t;
                    o(J({}, s, ((t = {})[e.target.name] = e.target.files[0], t)));
                },
                placeholder: "Example: https://imgur.com/example.png "
            }), r.a.createElement("label", {
                htmlFor: "avatar",
                className: "form file-btn-label file-slim"
            }, "Avatar")))), r.a.createElement("div", {
                className: "form__footer"
            }, r.a.createElement("input", {
                type: "submit",
                className: "btn btn-primary btn-full-width form__submit",
                value: "Register"
            }), r.a.createElement("p", null, "Already have an account?", " ", r.a.createElement(m.b, {
                to: "/login"
            }, r.a.createElement("span", {
                className: "form form__link"
            }, "Login.")))))));
        }
        function Q(e, t, a, n, r, l, s) {
            try {
                var o = e[l](s), c = o.value;
            } catch (e) {
                return a(e), 0;
            }
            o.done ? t(c) : Promise.resolve(c).then(n, r);
        }
        function X() {
            return (X = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = arguments[t];
                    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
            }).apply(this, arguments);
        }
        function $() {
            var e = Object(p.b)(), a = (f = Object(p.c)(function(e) {
                return e.auth;
            })).isAuthenticated, s = (d = (f.loading, Object(n.useState)({
                email: "",
                password: ""
            })))[0], o = d[1], c = s.email, u = s.password, f = function(e) {
                var t;
                o(X({}, s, ((t = {})[e.target.name] = e.target.value, t)));
            }, d = function() {
                var t, a = (t = regeneratorRuntime.mark(function t(a) {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            a.preventDefault(), e(function(e) {
                                return t = G(regeneratorRuntime.mark(function t(a) {
                                    var r;
                                    return regeneratorRuntime.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                          case 0:
                                            return t.prev = 0, t.next = 3, F.post("/auth", e);

                                          case 3:
                                            r = t.sent, a({
                                                type: "LOGIN_SUCCESS",
                                                payload: r.data.data
                                            }), a(z()), a(T("Welcome!", "success")), t.next = 14;
                                            break;

                                          case 9:
                                            t.prev = 9, t.t0 = t.catch(0), (r = t.t0.response.data.errors) && r.forEach(function(e) {
                                                return a(T(e.msg, "danger"));
                                            }), a({
                                                type: "LOGIN_FAILURE"
                                            });

                                          case 14:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t, null, [ [ 0, 9 ] ]);
                                })), function(e) {
                                    return t.apply(this, arguments);
                                };
                                var t;
                            }({
                                email: c,
                                password: u
                            }));

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }), function() {
                    var e = this, a = arguments;
                    return new Promise(function(n, r) {
                        var l = t.apply(e, a);
                        function s(e) {
                            Q(l, n, r, s, o, "next", e);
                        }
                        function o(e) {
                            Q(l, n, r, s, o, "throw", e);
                        }
                        s(void 0);
                    });
                });
                return function(e) {
                    return a.apply(this, arguments);
                };
            }();
            return a ? r.a.createElement(i.a, {
                to: "/feed"
            }) : r.a.createElement("section", {
                className: "form-page-wrapper"
            }, r.a.createElement("h1", {
                className: "section-header"
            }, "Log In"), r.a.createElement("p", null, r.a.createElement("i", {
                className: "fas fa-user"
            }), " Sign into your Account"), r.a.createElement("div", {
                className: "form-container"
            }, r.a.createElement("form", {
                className: "form",
                onSubmit: d
            }, r.a.createElement("div", {
                className: "form__header"
            }, r.a.createElement("small", {
                className: ""
            }, "Red labels are ", r.a.createElement("span", {
                className: "req-color"
            }, "required"), ".")), r.a.createElement("div", {
                className: "form__inner-container"
            }, r.a.createElement("div", {
                className: "form__section"
            }, r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "email",
                name: "email",
                value: c,
                onChange: f,
                placeholder: "myemail123@mail.com ",
                "aria-required": "true",
                required: !0
            }), r.a.createElement("label", {
                htmlFor: "email",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "E-Mail Address"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "password",
                name: "password",
                value: u,
                onChange: f,
                placeholder: "Must be 6 or more characters. ",
                "aria-required": "true",
                required: !0
            }), r.a.createElement("label", {
                htmlFor: "password",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Password"))))), r.a.createElement("div", {
                className: "form__footer"
            }, r.a.createElement("input", {
                type: "submit",
                className: "btn btn-primary btn-full-width form__submit",
                value: "Login"
            }), r.a.createElement("p", null, "Don't have an account?", " ", r.a.createElement(m.b, {
                to: "/register"
            }, r.a.createElement("span", {
                className: "form form__link"
            }, "Create one.")))))));
        }
        function te(l) {
            var a = (s = l.profile).id, n = s.username, l = s.tag_name, s = s.user_avatar;
            return r.a.createElement("div", {
                className: "profiles__profile"
            }, r.a.createElement("img", {
                className: "profiles__profile-img",
                src: s,
                alt: "user avatar image"
            }), r.a.createElement("div", {
                className: "profiles__profile-info"
            }, r.a.createElement("h2", null, n), r.a.createElement("small", {
                className: "profiles__profile-tag-name"
            }, l), r.a.createElement(m.b, {
                className: "btn btn-primary profiles__profile-btn",
                to: "/profile/" + a
            }, "View Profile")));
        }
        var ee = (a.p, function() {
            return r.a.createElement("section", {
                id: "spinner",
                className: "spinner-page-wrapper"
            }, r.a.createElement("div", {
                className: "spinner"
            }, r.a.createElement("span", {
                style: {
                    "--i": 1
                }
            }), r.a.createElement("span", {
                style: {
                    "--i": 2
                }
            }), r.a.createElement("span", {
                style: {
                    "--i": 3
                }
            }), r.a.createElement("span", {
                style: {
                    "--i": 4
                }
            }), r.a.createElement("span", {
                style: {
                    "--i": 5
                }
            }), r.a.createElement("span", {
                style: {
                    "--i": 6
                }
            }), r.a.createElement("span", {
                style: {
                    "--i": 7
                }
            }), r.a.createElement("span", {
                style: {
                    "--i": 8
                }
            }), r.a.createElement("span", {
                style: {
                    "--i": 9
                }
            }), r.a.createElement("span", {
                style: {
                    "--i": 10
                }
            }), r.a.createElement("span", {
                style: {
                    "--i": 11
                }
            }), r.a.createElement("span", {
                style: {
                    "--i": 12
                }
            }), r.a.createElement("span", {
                style: {
                    "--i": 13
                }
            }), r.a.createElement("span", {
                style: {
                    "--i": 14
                }
            }), r.a.createElement("span", {
                style: {
                    "--i": 15
                }
            }), r.a.createElement("span", {
                style: {
                    "--i": 16
                }
            }), r.a.createElement("span", {
                style: {
                    "--i": 17
                }
            }), r.a.createElement("span", {
                style: {
                    "--i": 18
                }
            }), r.a.createElement("span", {
                style: {
                    "--i": 19
                }
            }), r.a.createElement("span", {
                style: {
                    "--i": 20
                }
            })));
        });
        function ae(e, t, a, n, r, l, s) {
            try {
                var o = e[l](s), c = o.value;
            } catch (e) {
                return a(e), 0;
            }
            o.done ? t(c) : Promise.resolve(c).then(n, r);
        }
        function ne(e) {
            return function() {
                var t = this, a = arguments;
                return new Promise(function(n, r) {
                    var l = e.apply(t, a);
                    function s(e) {
                        ae(l, n, r, s, o, "next", e);
                    }
                    function o(e) {
                        ae(l, n, r, s, o, "throw", e);
                    }
                    s(void 0);
                });
            };
        }
        function re() {
            return e = ne(regeneratorRuntime.mark(function e(t) {
                var a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t({
                            type: "CLEAR_PROFILE"
                        }), e.prev = 1, e.next = 4, F.get("/profile/me");

                      case 4:
                        (a = e.sent).data.data, t({
                            type: "GET_PROFILE",
                            payload: a.data.data
                        }), e.next = 12;
                        break;

                      case 9:
                        e.prev = 9, e.t0 = e.catch(1), t({
                            type: "PROFILE_ERROR",
                            payload: {
                                msg: e.t0.response.statusText,
                                status: e.t0.response.status
                            }
                        });

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 1, 9 ] ]);
            })), function(t) {
                return e.apply(this, arguments);
            };
            var e;
        }
        function le() {
            var e = Object(p.b)(), a = (l = Object(p.c)(function(e) {
                return e.profile;
            })).profiles, l = l.loading;
            return Object(n.useEffect)(function() {
                e(function() {
                    var e = ne(regeneratorRuntime.mark(function e(t) {
                        var a;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t({
                                    type: "CLEAR_PROFILE"
                                }), e.prev = 1, e.next = 4, F.get("/profile");

                              case 4:
                                a = e.sent, t({
                                    type: "GET_PROFILES",
                                    payload: a.data.data.profiles
                                }), e.next = 11;
                                break;

                              case 8:
                                e.prev = 8, e.t0 = e.catch(1), t({
                                    type: "PROFILE_ERROR",
                                    payload: {
                                        msg: e.t0.response.statusText,
                                        status: e.t0.response.status
                                    }
                                });

                              case 11:
                              case "end":
                                return e.stop();
                            }
                        }, e, null, [ [ 1, 8 ] ]);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }());
            }, [ e ]), r.a.createElement(n.Fragment, null, l ? r.a.createElement(ee, null) : r.a.createElement("section", {
                className: "profiles-page-wrapper"
            }, r.a.createElement("h1", null, "Members"), r.a.createElement("p", null, "List of all current users."), r.a.createElement("div", {
                className: "profiles"
            }, 0 < a.length ? a.map(function(e) {
                return r.a.createElement(te, {
                    key: e.id,
                    profile: e
                });
            }) : r.a.createElement("h4", null, "No profiles found..."))));
        }
        function se(E) {
            var a = E.isAuth, l = E.user, o = ((g = E.details).id, g.company), c = g.status, m = g.interests, u = g.bio, f = E.followers, d = E.following, t = 0 < (null == (g = null == f ? void 0 : f.filter(function(e) {
                return e.follower_id === (null == l ? void 0 : l.id);
            })) ? void 0 : g.length), g = (E = Object(n.useState)(t))[0], b = E[1], v = Object(i.h)().user_id, h = Object(p.b)();
            return r.a.createElement(n.Fragment, null, r.a.createElement("div", {
                className: "profile__follow-details"
            }, r.a.createElement("div", {
                className: "profile__followers-info"
            }, r.a.createElement("div", {
                className: "profile__follow-num"
            }, f ? r.a.createElement("div", {
                className: "profile__follow"
            }, r.a.createElement("span", {
                className: "profile__follow-number"
            }, f.length), " followers") : r.a.createElement("div", {
                className: "profile__follow"
            }, r.a.createElement("span", {
                className: "profile__follow-number"
            }, "No"), " followers"), d ? r.a.createElement("div", {
                className: "profile__follow"
            }, r.a.createElement("span", {
                className: "profile__follow-number"
            }, d.length), " following") : r.a.createElement("div", {
                className: "profile__follow"
            }, r.a.createElement("span", {
                className: "profile__follow-number"
            }, "0"), " following")), r.a.createElement("div", {
                className: "profile__follow-stat"
            }, !a && null === l || l.id === v ? r.a.createElement(n.Fragment, null, r.a.createElement("div", null)) : g ? r.a.createElement("button", {
                onClick: function() {
                    var e;
                    h((e = v, function() {
                        var t = ne(regeneratorRuntime.mark(function t(a) {
                            var n;
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.prev = 0, t.next = 3, F.delete("/profile/unfollow/" + e);

                                  case 3:
                                    n = t.sent, a({
                                        type: "UNFOLLOW_PROFILE",
                                        payload: n.data.data
                                    }), a(T("Unfollowed profile.", "success")), t.next = 12;
                                    break;

                                  case 8:
                                    t.prev = 8, t.t0 = t.catch(0), a({
                                        type: "PROFILE_ERROR",
                                        payload: {
                                            msg: t.t0.response.statusText,
                                            status: t.t0.response.status
                                        }
                                    }), a(T("Failed to unfollow profile.", "danger"));

                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 0, 8 ] ]);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }())), b(!t);
                },
                className: "btn btn-primary btn-capsule"
            }, "Unfollow") : r.a.createElement("button", {
                onClick: function() {
                    var e;
                    h((e = v, function() {
                        var t = ne(regeneratorRuntime.mark(function t(a) {
                            var n;
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.prev = 0, t.next = 3, F.get("/profile/follow/" + e);

                                  case 3:
                                    n = t.sent, a({
                                        type: "FOLLOW_PROFILE",
                                        payload: n.data.data
                                    }), a(T("Following profile.", "success")), t.next = 12;
                                    break;

                                  case 8:
                                    t.prev = 8, t.t0 = t.catch(0), a({
                                        type: "PROFILE_ERROR",
                                        payload: {
                                            msg: t.t0.response.statusText,
                                            status: t.t0.response.status
                                        }
                                    }), a(T("Failed to follow profile.", "danger"));

                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 0, 8 ] ]);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }())), b(!t);
                },
                className: "btn btn-primary btn-capsule"
            }, "Follow")))), r.a.createElement("div", {
                className: "profile__details"
            }, r.a.createElement("div", {
                className: "profile__detail"
            }, "Company: ", o), r.a.createElement("div", {
                className: "profile__detail"
            }, "Current Status: ", c), r.a.createElement("p", {
                className: "profile__detail"
            }, "About Me: ", u), r.a.createElement("div", {
                className: "profile__detail profile__interests"
            }, "Interests:", m && m.map(function(e, t) {
                return r.a.createElement("div", {
                    key: t,
                    className: "profile__interest"
                }, r.a.createElement("div", {
                    className: "profile__info-block"
                }, e));
            }))));
        }
        function oe(m) {
            var a = (i = m.socials).youtube_url, n = i.facebook_url, l = i.twitter_url, s = i.instagram_url, o = i.linkedin_url, c = i.twitch_url, m = i.pinterest_url, i = i.reddit_url;
            return r.a.createElement("div", {
                className: "profile__socials-wrapper"
            }, r.a.createElement("div", {
                className: "profile__socials"
            }, a && r.a.createElement("a", {
                className: "profile__social",
                href: a,
                target: "_blank",
                rel: "noopener noreferrer"
            }, r.a.createElement("i", {
                className: "fab fa-youtube fa-2x"
            })), n && r.a.createElement("a", {
                className: "profile__social",
                href: n,
                target: "_blank",
                rel: "noopener noreferrer"
            }, r.a.createElement("i", {
                className: "fab fa-facebook fa-2x"
            })), l && r.a.createElement("a", {
                className: "profile__social",
                href: l,
                target: "_blank",
                rel: "noopener noreferrer"
            }, r.a.createElement("i", {
                className: "fab fa-twitter fa-2x"
            })), s && r.a.createElement("a", {
                className: "profile__social",
                href: s,
                target: "_blank",
                rel: "noopener noreferrer"
            }, r.a.createElement("i", {
                className: "fab fa-instagram fa-2x"
            })), o && r.a.createElement("a", {
                className: "profile__social",
                href: o,
                target: "_blank",
                rel: "noopener noreferrer"
            }, r.a.createElement("i", {
                className: "fab fa-linkedin fa-2x"
            })), c && r.a.createElement("a", {
                className: "profile__social",
                href: c,
                target: "_blank",
                rel: "noopener noreferrer"
            }, r.a.createElement("i", {
                className: "fab fa-twitch fa-2x"
            })), m && r.a.createElement("a", {
                className: "profile__social",
                href: m,
                target: "_blank",
                rel: "noopener noreferrer"
            }, r.a.createElement("i", {
                className: "fab fa-pinterest fa-2x"
            })), i && r.a.createElement("a", {
                className: "profile__social",
                href: i,
                target: "_blank",
                rel: "noopener noreferrer"
            }, r.a.createElement("i", {
                className: "fab fa-reddit fa-2x"
            }))));
        }
        function ce(a) {
            var t = a.post, a = a.userData;
            return t && r.a.createElement("div", {
                className: "post__post-wrapper"
            }, r.a.createElement("div", {
                className: "post__post"
            }, r.a.createElement("div", {
                className: "post__post-header"
            }, r.a.createElement("img", {
                className: "post__post-avatar",
                src: a.user_avatar,
                alt: "user avatar"
            }), r.a.createElement("div", {
                className: "post__post-name"
            }, r.a.createElement("h3", {
                className: "post__post-username"
            }, a.username), r.a.createElement("h5", {
                className: "post__post-tag-name"
            }, a.tag_name))), r.a.createElement("h4", {
                className: "post__post-title"
            }, t.title), r.a.createElement("div", {
                className: "post__image-container"
            }, t.image_url && r.a.createElement("img", {
                className: "post__post-image",
                src: t.image_url
            })), r.a.createElement("p", {
                className: "post__post-description"
            }, t.description), r.a.createElement("div", {
                className: "post__post-stats"
            }, r.a.createElement("div", {
                className: "post__stat-sec"
            }, r.a.createElement("button", {
                className: "btn btn-secondary post__thumb-btn",
                type: "button"
            }, r.a.createElement("i", {
                className: "fas fa-thumbs-up post__thumb-up"
            }), t.postlikes && r.a.createElement("span", null, t.postlikes)), r.a.createElement(m.b, {
                to: "/post/" + t.id,
                className: "btn btn-secondary post__thumb-btn post__thumb-btn--sec"
            }, r.a.createElement("span", {
                className: "post__comment"
            }, "View Post /", r.a.createElement("span", {
                className: "post__comment-count"
            }, t.postcomments), " Comments"))))));
        }
        function me() {
            var e = Object(i.h)().user_id, t = Object(p.b)(), d = Object(p.c)(function(e) {
                return e.auth;
            }), l = Object(p.c)(function(e) {
                return e.profile;
            }), s = d.isAuthenticated, o = d.user, c = d.loading, u = l.profileUserData, f = l.profileStats, d = l.profilePosts;
            return Object(n.useEffect)(function() {
                t(function(e) {
                    return t = ne(regeneratorRuntime.mark(function t(a) {
                        var n;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.prev = 0, t.next = 3, F.get("/profile/user/" + e);

                              case 3:
                                n = t.sent, a({
                                    type: "GET_PROFILE",
                                    payload: n.data.data
                                }), t.next = 11;
                                break;

                              case 7:
                                t.prev = 7, t.t0 = t.catch(0), a({
                                    type: "PROFILE_ERROR",
                                    payload: {
                                        msg: t.t0.response.statusText,
                                        status: t.t0.response.status
                                    }
                                }), a(T("Failed to get profile.", "danger"));

                              case 11:
                              case "end":
                                return t.stop();
                            }
                        }, t, null, [ [ 0, 7 ] ]);
                    })), function(e) {
                        return t.apply(this, arguments);
                    };
                    var t;
                }(e));
            }, [ t, e ]), r.a.createElement(n.Fragment, null, c ? r.a.createElement(ee, null) : null === l ? r.a.createElement("div", {
                className: "profile-page-wrapper profile"
            }, r.a.createElement("p", null, "No profile information found.")) : r.a.createElement("div", {
                className: "profile-page-wrapper profile"
            }, r.a.createElement("div", {
                className: "profile__header-image"
            }, null === f ? r.a.createElement("img", {
                className: "profile__profile-bg-image",
                src: "",
                alt: "profile-image"
            }) : f.profileDetails ? r.a.createElement("img", {
                className: "profile__profile-bg-image",
                src: f.profileDetails.background_image,
                alt: "profile image"
            }) : r.a.createElement("img", {
                src: "",
                alt: "profile-image"
            })), r.a.createElement("div", {
                className: "profile__content-header"
            }, null === u ? r.a.createElement("div", null, "No user data found.") : r.a.createElement(n.Fragment, null, r.a.createElement("div", {
                className: "profile__avatar-position"
            }, r.a.createElement("img", {
                className: "profile__profile-img",
                src: u.user_avatar,
                alt: "user avatar"
            })), r.a.createElement("div", {
                className: "profile__header"
            }, r.a.createElement("h2", null, u.username), r.a.createElement("h5", {
                className: "profile__profile-tag-name"
            }, u.tag_name))), r.a.createElement("div", {
                className: "profile__header-buttons"
            }, r.a.createElement(m.b, {
                to: "/profiles",
                className: "profile__header-button btn btn-secondary"
            }, "Back to Profiles"), s && !1 === c && o.id === e && f && f.profileDetails && r.a.createElement(m.b, {
                to: "/edit-profile",
                className: "profile__header-button btn btn-secondary"
            }, "Edit Your Profile"))), null === f ? r.a.createElement("div", {
                className: "profile__content"
            }, r.a.createElement("div", {
                className: "profile__follow-details"
            }, "No profile information found.")) : f.profileSocials && f.profileDetails ? r.a.createElement(n.Fragment, null, r.a.createElement("div", {
                className: "profile__content"
            }, r.a.createElement(se, {
                isAuth: s,
                user: o,
                details: f.profileDetails,
                followers: f.followers,
                following: f.following,
                followersCount: f.followersCount,
                followingCount: f.followingCount
            })), r.a.createElement(oe, {
                socials: f.profileSocials
            })) : r.a.createElement(n.Fragment, null, r.a.createElement("div", null, "User has not provided further profile details.")), r.a.createElement("h3", {
                className: "profile__posts-header"
            }, "Profile Posts"), r.a.createElement("div", {
                className: "profile__exp"
            }, d && 0 < d.length ? r.a.createElement(n.Fragment, null, d.map(function(e) {
                return r.a.createElement(ce, {
                    key: e.id,
                    post: e,
                    userData: u
                });
            })) : r.a.createElement(n.Fragment, null, r.a.createElement("h4", null, "User has made no posts.")))));
        }
        function ie(e) {
            return r.a.createElement("section", {
                className: "not-found-wrapper"
            }, r.a.createElement("h1", null, r.a.createElement("i", {
                className: "fas fa-exclamation-triangle"
            }), " ", "Page Not Found!"), r.a.createElement("div", {
                className: "not-found-card"
            }, r.a.createElement("div", {
                className: "not-found-content"
            }, r.a.createElement("p", {
                className: "not-found-text"
            }, "Sorry, this page does not exist!"), r.a.createElement(m.b, {
                to: "/dashboard",
                className: "btn btn-secondary not-found-btn"
            }, "Back to Dashboard"))));
        }
        function ue() {
            return (ue = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = arguments[t];
                    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
            }).apply(this, arguments);
        }
        function fe() {
            var e = Object(p.b)(), t = Object(i.g)(), a = Object(n.useRef)(), s = (I = Object(n.useState)(pe))[0], o = I[1], u = (D = Object(n.useState)(!1))[0], f = D[1], d = s.address, _ = s.address2, E = s.city, g = s.state, b = s.country, v = s.zipcode, h = s.gender, N = s.birthday, y = s.company, w = s.status, O = s.interests, k = s.bio, R = (s.background_image, 
            s.youtube), C = s.facebook, x = s.twitter, L = s.instagram, S = s.linkedin, P = s.twitch, j = s.pinterest, I = s.reddit, D = function(e) {
                var t;
                return o(ue({}, s, ((t = {})[e.target.name] = e.target.value, t)));
            };
            return r.a.createElement("section", {
                className: "form-page-wrapper"
            }, r.a.createElement("h2", null, "Create Profile"), r.a.createElement("p", null, r.a.createElement("i", {
                className: "fas fa-user"
            }), " Providing information makes your profile stand out from the others."), r.a.createElement("div", {
                className: "form-container"
            }, r.a.createElement("form", {
                className: "form",
                onSubmit: function(a) {
                    a.preventDefault(), e(function(e, t, a) {
                        return void 0 === a && (a = !1), n = ne(regeneratorRuntime.mark(function n(r) {
                            var o;
                            return regeneratorRuntime.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.prev = 0, n.next = 3, function(e) {
                                        var t = new FormData();
                                        return e.address && t.append("address", e.address), e.address2 && t.append("address2", e.address2), 
                                        e.city && t.append("city", e.city), e.state && t.append("state", e.state), e.country && t.append("country", e.country), 
                                        e.zipcode && t.append("zipcode", e.zipcode), e.gender && t.append("gender", e.gender), 
                                        t.append("birthday", e.birthday), e.company && t.append("company", e.company), e.status && t.append("status", e.status), 
                                        e.interests && t.append("interests", e.interests), e.bio && t.append("bio", e.bio), 
                                        e.background_image && t.append("background_image", e.background_image), e.youtube && t.append("youtube", e.youtube), 
                                        e.facebook && t.append("facebook", e.facebook), e.twitter && t.append("twitter", e.twitter), 
                                        e.instagram && t.append("instagram", e.instagram), e.linkedin && t.append("linkedin", e.linkedin), 
                                        e.twitch && t.append("twitch", e.twitch), e.pinterest && t.append("pinterest", e.pinterest), 
                                        e.reddit && t.append("reddit", e.reddit), t;
                                    }(e);

                                  case 3:
                                    return o = n.sent, n.next = 6, F.post("/profile", o);

                                  case 6:
                                    o = n.sent, o = o.data, r({
                                        type: "GET_PROFILE",
                                        payload: o.data
                                    }), r(T("User profile created.", "success")), a || t.push("/dashboard"), n.next = 17;
                                    break;

                                  case 13:
                                    n.prev = 13, n.t0 = n.catch(0), r({
                                        type: "PROFILE_ERROR",
                                        payload: {
                                            msg: n.t0.response.statusText,
                                            status: n.t0.response.status
                                        }
                                    }), r(T("Failed to create profile.", "danger"));

                                  case 17:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, null, [ [ 0, 13 ] ]);
                        })), function(e) {
                            return n.apply(this, arguments);
                        };
                        var n;
                    }(s, t));
                }
            }, r.a.createElement("small", {
                className: "form__header"
            }, "Red labels are ", r.a.createElement("span", {
                className: "req-color"
            }, "required"), "."), r.a.createElement("div", {
                className: "form__group bio-input"
            }, r.a.createElement("label", {
                htmlFor: "bio",
                className: "form__alt-label"
            }, r.a.createElement("span", {
                className: "form__label-name--above"
            }, "Bio")), r.a.createElement("textarea", {
                placeholder: "A short bio of yourself!",
                name: "bio",
                value: k,
                rows: "5",
                onChange: D
            })), r.a.createElement("div", {
                className: "form__inner-container"
            }, r.a.createElement("div", {
                className: "form__section"
            }, r.a.createElement("div", {
                className: "form__group background-img-mrg-sm"
            }, r.a.createElement("input", {
                type: "file",
                accept: ".jpeg, .jpg, .png, .gif",
                placeholder: ".jpeg, .jpg, .png, .gif files only",
                name: "background_image",
                className: "file-btn-input file-slim",
                onChange: function(e) {
                    var t;
                    o(ue({}, s, ((t = {})[e.target.name] = e.target.files[0], t)));
                },
                ref: a
            }), r.a.createElement("label", {
                htmlFor: "background_image",
                className: "form file-btn-label file-slim"
            }, "Profile")), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                "aria-required": "true",
                required: !0,
                type: "date",
                name: "birthday",
                value: N,
                onChange: D,
                placeholder: " "
            }), r.a.createElement("label", {
                htmlFor: "birthday",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Birthday"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                name: "address",
                value: d,
                onChange: D,
                placeholder: "1234 N. Abby Street"
            }), r.a.createElement("label", {
                htmlFor: "address",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Address"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                name: "address2",
                value: _,
                onChange: D,
                placeholder: "1111 S. Peach Ave."
            }), r.a.createElement("label", {
                htmlFor: "address2",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Address 2"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                name: "city",
                value: E,
                onChange: D,
                placeholder: "Jackson"
            }), r.a.createElement("label", {
                htmlFor: "city",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "City"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                name: "state",
                value: g,
                onChange: D,
                placeholder: "Mississippi"
            }), r.a.createElement("label", {
                htmlFor: "state",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "State"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                name: "country",
                value: b,
                onChange: D,
                placeholder: "United States"
            }), r.a.createElement("label", {
                htmlFor: "country",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Country"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                name: "zipcode",
                value: v,
                onChange: D,
                placeholder: "12345"
            }), r.a.createElement("label", {
                htmlFor: "zipcode",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Zip Code"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                name: "company",
                value: y,
                onChange: D,
                placeholder: "Workplace Co. Ltd."
            }), r.a.createElement("label", {
                htmlFor: "company",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Company"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "Biking, Fishing, Mountain Climbing, Swimming, Competitive Boxing",
                name: "interests",
                value: O,
                onChange: D
            }), r.a.createElement("label", {
                htmlFor: "interests",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Interests"))), r.a.createElement("div", {
                className: "form__group select-spacer"
            }, r.a.createElement("select", {
                name: "gender",
                value: h,
                onChange: D
            }, r.a.createElement("option", null, " Select Gender"), r.a.createElement("option", {
                value: "Female"
            }, "Female"), r.a.createElement("option", {
                value: "Male"
            }, "Male"), r.a.createElement("option", {
                value: "Other"
            }, "Other"), r.a.createElement("option", {
                value: "Prefer not to say"
            }, "Prefer not to say"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("select", {
                name: "status",
                value: w,
                onChange: D
            }, r.a.createElement("option", null, " Select Status"), r.a.createElement("option", {
                value: "Happy"
            }, "Feeling Happy"), r.a.createElement("option", {
                value: "Sad"
            }, "Feeling Sad"), r.a.createElement("option", {
                value: "Sleepy"
            }, "Feeling Sleepy"), r.a.createElement("option", {
                value: "Angry"
            }, "Feeling Angry"), r.a.createElement("option", {
                value: "Relaxing"
            }, "Relaxing"), r.a.createElement("option", {
                value: "Vacation"
            }, "On a Vacation"), r.a.createElement("option", {
                value: "College"
            }, "Attending College / University"), r.a.createElement("option", {
                value: "Study"
            }, "Studying for a test / something important"), r.a.createElement("option", {
                value: "Instructor"
            }, "I'm a Teacher"), r.a.createElement("option", {
                value: "Intern"
            }, "Interning"), r.a.createElement("option", {
                value: "Other"
            }, "Other")))), r.a.createElement("div", {
                className: "form__section section-two"
            }, r.a.createElement("div", {
                className: "form__toggle-btn"
            }, r.a.createElement("button", {
                type: "button",
                className: "btn btn-secondary btn-full-width",
                onClick: function() {
                    return f(!u);
                }
            }, "Add Social Network Links ", r.a.createElement("span", null, "(Optional)"))), u && r.a.createElement(n.Fragment, null, r.a.createElement("div", {
                className: "form__group social-input"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "YouTube URL",
                name: "youtube",
                value: R,
                onChange: D
            }), r.a.createElement("label", {
                htmlFor: "youtube",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Youtube URL"))), r.a.createElement("div", {
                className: "form__group social-input"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "Facebook URL",
                name: "facebook",
                value: C,
                onChange: D
            }), r.a.createElement("label", {
                htmlFor: "facebook",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Facebook URL"))), r.a.createElement("div", {
                className: "form__group social-input"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "Twitter URL",
                name: "twitter",
                value: x,
                onChange: D
            }), r.a.createElement("label", {
                htmlFor: "twitter",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Twitter URL"))), r.a.createElement("div", {
                className: "form__group social-input"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "Instagram URL",
                name: "instagram",
                value: L,
                onChange: D
            }), r.a.createElement("label", {
                htmlFor: "instagram",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Instagram URL"))), r.a.createElement("div", {
                className: "form__group social-input"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "Linkedin URL",
                name: "linkedin",
                value: S,
                onChange: D
            }), r.a.createElement("label", {
                htmlFor: "linkedin",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Linkedin URL"))), r.a.createElement("div", {
                className: "form__group social-input"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "Twitch URL",
                name: "twitch",
                value: P,
                onChange: D
            }), r.a.createElement("label", {
                htmlFor: "twitch",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Twitch URL"))), r.a.createElement("div", {
                className: "form__group social-input"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "Pinterest URL",
                name: "pinterest",
                value: j,
                onChange: D
            }), r.a.createElement("label", {
                htmlFor: "pinterest",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Pinterest URL"))), r.a.createElement("div", {
                className: "form__group social-input"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "Reddit URL",
                name: "reddit",
                value: I,
                onChange: D
            }), r.a.createElement("label", {
                htmlFor: "reddit",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Reddit URL")))))), r.a.createElement("div", {
                className: "form__footer"
            }, r.a.createElement("input", {
                type: "submit",
                className: "btn btn-primary btn-full-width form__submit",
                value: "Create Profile"
            }), r.a.createElement("div", {
                className: "form__toggle-btn"
            }, r.a.createElement(m.b, {
                className: "btn btn-secondary no-side-margin form__toggle-btn",
                to: "/dashboard"
            }, "Go Back"))))));
        }
        function de(d) {
            var t = d.user.id, a = d.followers, l = d.followings, s = Object(p.b)(), o = Object(i.g)(), u = (_ = Object(n.useState)(!0))[0], f = _[1], _ = (d = Object(n.useState)(!1))[0], E = d[1];
            return r.a.createElement(n.Fragment, null, _ && r.a.createElement("div", {
                className: "dashboard__delete-wrapper"
            }, r.a.createElement("h2", null, "Are you Sure?"), r.a.createElement("p", null, "You are attempting to delete your profile and account. This action CANNOT be undone!"), r.a.createElement("div", {
                className: "dashboard__btn-sec"
            }, r.a.createElement("button", {
                className: "btn btn-secondary dashboard__btn-one",
                onClick: function() {
                    E(!1);
                }
            }, "Do Not Delete"), r.a.createElement("button", {
                className: "btn btn-primary dashboard__btn-two",
                onClick: function() {
                    var e, t;
                    E(!1), s((e = o, t = ne(regeneratorRuntime.mark(function t(a) {
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return a({
                                    type: "CLEAR_PROFILE"
                                }), a({
                                    type: "CLEAR_POST"
                                }), a({
                                    type: "CLEAR_FEED_POSTS"
                                }), t.prev = 3, t.next = 6, F.delete("/profile");

                              case 6:
                                t.sent, a({
                                    type: "DELETE_PROFILE"
                                }), a({
                                    type: "ACCOUNT_DELETED"
                                }), e.push("/"), a(T("Your account has been deleted.", "success")), t.next = 17;
                                break;

                              case 13:
                                t.prev = 13, t.t0 = t.catch(3), a({
                                    type: "PROFILE_ERROR",
                                    payload: {
                                        msg: t.t0.response.statusText,
                                        status: t.t0.response.status
                                    }
                                }), a(T("Failed to delete account.", "danger"));

                              case 17:
                              case "end":
                                return t.stop();
                            }
                        }, t, null, [ [ 3, 13 ] ]);
                    })), function(e) {
                        return t.apply(this, arguments);
                    }));
                }
            }, "Delete My Account"))), r.a.createElement("div", {
                className: "dashboard__buttons"
            }, r.a.createElement(m.b, {
                to: "/edit-profile",
                className: "btn btn-secondary dashboard__button"
            }, r.a.createElement("i", {
                className: "fas fa-user-circle text-primary"
            }), " Edit Profile"), r.a.createElement(m.b, {
                to: "/profile/" + t,
                className: "btn btn-primary dashboard__button"
            }, "My Profile"), u ? r.a.createElement("button", {
                className: "btn btn-secondary dashboard__button",
                onClick: function(e) {
                    return f(!u);
                },
                type: "button"
            }, r.a.createElement("i", {
                className: "fas fa-user-friends text-primary"
            }), " Show Following") : r.a.createElement("button", {
                className: "btn btn-secondary dashboard__button",
                onClick: function(e) {
                    return f(!u);
                },
                type: "button"
            }, r.a.createElement("i", {
                className: "fas fa-user-friends text-primary"
            }), " Show Followers"), r.a.createElement("button", {
                className: "btn btn-secondary dashboard__button",
                onClick: function() {
                    E(!0);
                }
            }, r.a.createElement("i", {
                className: "fas fa-user-friends text-primary"
            }), " Delete Profile & Account")), u ? r.a.createElement("h2", {
                className: "dash-header"
            }, "Your Followers") : r.a.createElement("h2", {
                className: "dash-header"
            }, "People You Are Following"), r.a.createElement("section", {
                className: "profiles-page-wrapper dash-follows"
            }, r.a.createElement("div", {
                className: "profiles dash-profiles"
            }, u ? r.a.createElement(n.Fragment, null, a && 0 < a.length ? a.map(function(e, t) {
                return r.a.createElement("div", {
                    className: "profiles__profile",
                    key: t
                }, r.a.createElement("img", {
                    className: "profiles__profile-img",
                    src: e.user_avatar,
                    alt: "user avatar image"
                }), r.a.createElement("div", {
                    className: "profiles__profile-info"
                }, r.a.createElement("h2", null, e.username), r.a.createElement("small", {
                    className: "profiles__profile-tag-name"
                }, e.tag_name), r.a.createElement(m.b, {
                    className: "btn btn-primary profiles__profile-btn",
                    to: "/profile/" + e.id
                }, "View Profile")));
            }) : r.a.createElement("h4", null, "You have no followers...")) : r.a.createElement(n.Fragment, null, l && 0 < l.length ? l.map(function(e, t) {
                return r.a.createElement("div", {
                    className: "profiles__profile dash-follow",
                    key: t
                }, r.a.createElement("img", {
                    className: "profiles__profile-img",
                    src: e.user_avatar,
                    alt: "user avatar image"
                }), r.a.createElement("div", {
                    className: "profiles__profile-info"
                }, r.a.createElement("h2", null, e.username), r.a.createElement("small", {
                    className: "profiles__profile-tag-name"
                }, e.tag_name), r.a.createElement(m.b, {
                    className: "btn btn-primary profiles__profile-btn",
                    to: "/profile/" + e.id
                }, "View Profile")));
            }) : r.a.createElement("h4", null, "You are currently following no one...")))));
        }
        function _e() {
            var e = Object(p.b)(), c = Object(p.c)(function(e) {
                return e.auth;
            }), i = Object(p.c)(function(e) {
                return e.profile;
            }), l = c.isAuthenticated, s = c.user, o = i.profileUserData, c = i.profileStats, i = i.loading;
            return Object(n.useEffect)(function() {
                e(re());
            }, [ e ]), r.a.createElement("section", {
                className: "dashboard-page-wrapper"
            }, r.a.createElement("h1", null, "Dashboard"), r.a.createElement("h2", null, r.a.createElement("i", {
                className: "fas fa-user"
            }), " Welcome, ", s && s.username), null !== o ? r.a.createElement("div", {
                className: "dashboard"
            }, !i && l && s && r.a.createElement(de, {
                user: s,
                followers: c.followers,
                followings: c.following
            })) : r.a.createElement("div", {
                className: "dashboard"
            }, r.a.createElement("div", {
                className: "dashboard__content-default"
            }, r.a.createElement("div", null, r.a.createElement("p", null, "You have not setup a profile. Create one here.")), r.a.createElement(m.b, {
                to: "/create-profile",
                className: "btn btn-primary dashboard__btn"
            }, "Create My Profile"))));
        }
        var pe = {
            address: "",
            address2: "",
            city: "",
            state: "",
            country: "",
            zipcode: "",
            gender: "",
            birthday: "",
            company: "",
            status: "",
            interests: "",
            bio: "",
            background_image: "",
            youtube: "",
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: "",
            twitch: "",
            pinterest: "",
            reddit: ""
        };
        function Ee() {
            return (Ee = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = arguments[t];
                    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
            }).apply(this, arguments);
        }
        function be() {
            var e = Object(p.b)(), t = Object(i.g)(), l = (B = Object(p.c)(function(e) {
                return e.profile;
            })).profileUserData, s = B.profileStats, o = B.loading, u = (K = Object(n.useState)(ge))[0], f = K[1], _ = (Y = Object(n.useState)(!1))[0], E = Y[1];
            Object(n.useEffect)(function() {
                e(re()), f({
                    f_name: o || !l ? "" : l.f_name,
                    l_name: o || !l ? "" : l.l_name,
                    username: o || !l ? "" : l.username,
                    tag_name: o || !l ? "" : l.tag_name,
                    user_email: o || !l ? "" : l.user_email,
                    user_avatar: o || !l ? "" : l.user_avatar,
                    address: o || !s ? "" : s.profileDetails.address,
                    address2: o || !s ? "" : s.profileDetails.address_2,
                    city: o || !s ? "" : s.profileDetails.city,
                    state: o || !s ? "" : s.profileDetails.state,
                    country: o || !s ? "" : s.profileDetails.country,
                    zipcode: o || !s ? "" : s.profileDetails.zipcode,
                    gender: o || !s ? "" : s.profileDetails.gender,
                    birthday: o || !s ? "" : s.profileDetails.birth_date,
                    company: o || !s ? "" : s.profileDetails.company,
                    status: o || !s ? "" : s.profileDetails.status,
                    interests: o || !s || 0 === s.profileDetails.interests.length ? "" : s.profileDetails.interests.join(", "),
                    bio: o || !s ? "" : s.profileDetails.bio,
                    background_image: o || !s ? "" : s.profileDetails.background_image,
                    youtube: o || !s.profileSocials.youtube_url ? "" : s.profileSocials.youtube_url,
                    facebook: o || !s.profileSocials.facebook_url ? "" : s.profileSocials.facebook_url,
                    twitter: o || !s.profileSocials.twitter_url ? "" : s.profileSocials.twitter_url,
                    instagram: o || !s.profileSocials.instagram_url ? "" : s.profileSocials.instagram_url,
                    linkedin: o || !s.profileSocials.linkedin_url ? "" : s.profileSocials.linkedin_url,
                    twitch: o || !s.profileSocials.twitch_url ? "" : s.profileSocials.twitch_url,
                    pinterest: o || !s.profileSocials.pinterest_url ? "" : s.profileSocials.pinterest_url,
                    reddit: o || !s.profileSocials.reddit_url ? "" : s.profileSocials.reddit_url
                });
            }, [ o, e ]);
            var g = u.f_name, b = u.l_name, v = u.username, h = u.tag_name, N = u.user_email, y = (u.user_avatar, 
            u.address), w = u.address2, O = u.city, k = u.state, R = u.country, C = u.zipcode, x = u.gender, L = u.birthday, S = u.company, P = u.status, j = u.interests, I = u.bio, D = (u.background_image, 
            u.youtube), U = u.facebook, A = u.twitter, q = u.instagram, G = u.linkedin, z = u.twitch, B = u.pinterest, K = u.reddit, Y = function(e) {
                var t;
                return f(Ee({}, u, ((t = {})[e.target.name] = e.target.value, t)));
            };
            return r.a.createElement("section", {
                className: "form-page-wrapper"
            }, r.a.createElement("h2", null, "Edit Your User Data and Profile"), r.a.createElement("p", null, r.a.createElement("i", {
                className: "fas fa-user"
            }), " Make edits to your personal data."), r.a.createElement("div", {
                className: "form-container"
            }, r.a.createElement("form", {
                className: "form",
                onSubmit: function(a) {
                    a.preventDefault(), e(function(e, t, a) {
                        return void 0 === a && (a = !1), n = ne(regeneratorRuntime.mark(function n(r) {
                            var s;
                            return regeneratorRuntime.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.prev = 0, n.next = 3, function(e) {
                                        var t = new FormData();
                                        return e.f_name && t.append("f_name", e.f_name), e.l_name && t.append("l_name", e.l_name), 
                                        e.username && t.append("username", e.username), e.tag_name && t.append("tag_name", e.tag_name), 
                                        e.user_email && t.append("user_email", e.user_email), e.user_avatar && t.append("user_avatar", e.user_avatar), 
                                        e.address && t.append("address", e.address), e.address2 && t.append("address2", e.address2), 
                                        e.city && t.append("city", e.city), e.state && t.append("state", e.state), e.country && t.append("country", e.country), 
                                        e.zipcode && t.append("zipcode", e.zipcode), e.gender && t.append("gender", e.gender), 
                                        t.append("birthday", e.birthday), e.company && t.append("company", e.company), e.status && t.append("status", e.status), 
                                        e.interests && t.append("interests", e.interests), e.bio && t.append("bio", e.bio), 
                                        e.background_image && t.append("background_image", e.background_image), e.youtube && t.append("youtube", e.youtube), 
                                        e.facebook && t.append("facebook", e.facebook), e.twitter && t.append("twitter", e.twitter), 
                                        e.instagram && t.append("instagram", e.instagram), e.linkedin && t.append("linkedin", e.linkedin), 
                                        e.twitch && t.append("twitch", e.twitch), e.pinterest && t.append("pinterest", e.pinterest), 
                                        e.reddit && t.append("reddit", e.reddit), t;
                                    }(e);

                                  case 3:
                                    return s = n.sent, n.next = 6, F.put("/profile/me", s);

                                  case 6:
                                    s = n.sent, r({
                                        type: "UPDATE_PROFILE",
                                        payload: s.data.data
                                    }), r(T("Profile Updated.", "success")), a && t.push("/dashboard"), n.next = 17;
                                    break;

                                  case 13:
                                    n.prev = 13, n.t0 = n.catch(0), r({
                                        type: "PROFILE_ERROR",
                                        payload: {
                                            msg: n.t0.response.statusText,
                                            status: n.t0.response.status
                                        }
                                    }), r(T("Failed to update profile.", "danger"));

                                  case 17:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, null, [ [ 0, 13 ] ]);
                        })), function(e) {
                            return n.apply(this, arguments);
                        };
                        var n;
                    }(u, t, !0));
                }
            }, r.a.createElement("div", {
                className: "form__header"
            }, r.a.createElement("small", {
                className: ""
            }, "Red labels are ", r.a.createElement("span", {
                className: "req-color"
            }, "required"), ". Profile Header image is recommended.")), r.a.createElement("div", {
                className: "form__inner-container"
            }, r.a.createElement("div", {
                className: "form__section"
            }, r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "BestGamer11",
                name: "username",
                value: v,
                onChange: Y,
                "aria-required": "true",
                required: !0
            }), r.a.createElement("label", {
                htmlFor: "username",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Username"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "BestGamer11",
                name: "tag_name",
                value: h,
                onChange: Y,
                "aria-required": "true",
                required: !0
            }), r.a.createElement("label", {
                htmlFor: "tag_name",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Tag Name"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "bestgamer11@mail.com",
                name: "user_email",
                value: N,
                onChange: Y,
                "aria-required": "true",
                required: !0
            }), r.a.createElement("label", {
                htmlFor: "user_email",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Email")))), r.a.createElement("div", {
                className: "form__section section-two"
            }, r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "Lastname",
                name: "l_name",
                value: b,
                onChange: Y
            }), r.a.createElement("label", {
                htmlFor: "l_name",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Last Name"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "Firstname",
                name: "f_name",
                value: g,
                onChange: Y
            }), r.a.createElement("label", {
                htmlFor: "f_name",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "First Name"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "file",
                accept: ".jpeg, .jpg, .png, .gif",
                placeholder: ".jpeg, .jpg, .png, .gif files only",
                name: "user_avatar",
                className: "file-btn-input file-slim",
                onChange: function(e) {
                    var t;
                    f(Ee({}, u, ((t = {})[e.target.name] = e.target.files[0], t)));
                }
            }), r.a.createElement("label", {
                htmlFor: "user_avatar",
                className: "form file-btn-label file-slim"
            }, "Avatar")))), r.a.createElement("div", {
                className: "form__group bio-input"
            }, r.a.createElement("label", {
                htmlFor: "bio",
                className: "form__alt-label"
            }, r.a.createElement("span", {
                className: "form__label-name--above"
            }, "Bio")), r.a.createElement("textarea", {
                placeholder: "A short bio of yourself!",
                name: "bio",
                value: I,
                rows: "5",
                onChange: Y
            })), r.a.createElement("div", {
                className: "form__inner-container"
            }, r.a.createElement("div", {
                className: "form__section"
            }, r.a.createElement("div", {
                className: "form__group background-img-mrg-sm"
            }, r.a.createElement("input", {
                type: "file",
                accept: ".jpeg, .jpg, .png, .gif",
                placeholder: ".jpeg, .jpg, .png, .gif files only",
                name: "background_image",
                className: "file-btn-input file-slim",
                onChange: function(e) {
                    var t;
                    f(Ee({}, u, ((t = {})[e.target.name] = e.target.files[0], t)));
                }
            }), r.a.createElement("label", {
                htmlFor: "background_image",
                className: "form file-btn-label file-slim"
            }, "Header")), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                "aria-required": "true",
                required: !0,
                type: "date",
                name: "birthday",
                value: L,
                onChange: Y,
                placeholder: " "
            }), r.a.createElement("label", {
                htmlFor: "birthday",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Birthday"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                name: "address",
                value: y,
                onChange: Y,
                placeholder: "1234 N. Abby Street"
            }), r.a.createElement("label", {
                htmlFor: "address",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Address"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                name: "address2",
                value: w,
                onChange: Y,
                placeholder: "1111 S. Peach Ave."
            }), r.a.createElement("label", {
                htmlFor: "address2",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Address 2"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                name: "city",
                value: O,
                onChange: Y,
                placeholder: "Jackson"
            }), r.a.createElement("label", {
                htmlFor: "city",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "City"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                name: "state",
                value: k,
                onChange: Y,
                placeholder: "Mississippi"
            }), r.a.createElement("label", {
                htmlFor: "state",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "State"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                name: "country",
                value: R,
                onChange: Y,
                placeholder: "United States"
            }), r.a.createElement("label", {
                htmlFor: "country",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Country"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                name: "zipcode",
                value: C,
                onChange: Y,
                placeholder: "12345"
            }), r.a.createElement("label", {
                htmlFor: "zipcode",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Zip Code"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                name: "company",
                value: S,
                onChange: Y,
                placeholder: "Workplace Co. Ltd."
            }), r.a.createElement("label", {
                htmlFor: "company",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Company"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "Biking, Fishing, Mountain Climbing, Swimming, Competitive Boxing",
                name: "interests",
                value: j,
                onChange: Y
            }), r.a.createElement("label", {
                htmlFor: "interests",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Interests"))), r.a.createElement("div", {
                className: "form__group select-spacer"
            }, r.a.createElement("select", {
                name: "gender",
                value: x,
                onChange: Y
            }, r.a.createElement("option", null, " Select Gender"), r.a.createElement("option", {
                value: "Female"
            }, "Female"), r.a.createElement("option", {
                value: "Male"
            }, "Male"), r.a.createElement("option", {
                value: "Other"
            }, "Other"), r.a.createElement("option", {
                value: "Prefer not to say"
            }, "Prefer not to say"))), r.a.createElement("div", {
                className: "form__group"
            }, r.a.createElement("select", {
                name: "status",
                value: P,
                onChange: Y
            }, r.a.createElement("option", null, " Select Status"), r.a.createElement("option", {
                value: "Happy"
            }, "Feeling Happy"), r.a.createElement("option", {
                value: "Sad"
            }, "Feeling Sad"), r.a.createElement("option", {
                value: "Sleepy"
            }, "Feeling Sleepy"), r.a.createElement("option", {
                value: "Angry"
            }, "Feeling Angry"), r.a.createElement("option", {
                value: "Relaxing"
            }, "Relaxing"), r.a.createElement("option", {
                value: "Vacation"
            }, "On a Vacation"), r.a.createElement("option", {
                value: "College"
            }, "Attending College / University"), r.a.createElement("option", {
                value: "Study"
            }, "Studying for a test / something important"), r.a.createElement("option", {
                value: "Instructor"
            }, "I'm a Teacher"), r.a.createElement("option", {
                value: "Intern"
            }, "Interning"), r.a.createElement("option", {
                value: "Other"
            }, "Other")))), r.a.createElement("div", {
                className: "form__section section-two"
            }, r.a.createElement("div", {
                className: "form__toggle-btn"
            }, r.a.createElement("button", {
                type: "button",
                className: "btn btn-secondary btn-full-width",
                onClick: function() {
                    return E(!_);
                }
            }, "Add Social Network Links ", r.a.createElement("span", null, "(Optional)"))), _ && r.a.createElement(n.Fragment, null, r.a.createElement("div", {
                className: "form__group social-input"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "YouTube URL",
                name: "youtube",
                value: D,
                onChange: Y
            }), r.a.createElement("label", {
                htmlFor: "youtube",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Youtube URL"))), r.a.createElement("div", {
                className: "form__group social-input"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "Facebook URL",
                name: "facebook",
                value: U,
                onChange: Y
            }), r.a.createElement("label", {
                htmlFor: "facebook",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Facebook URL"))), r.a.createElement("div", {
                className: "form__group social-input"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "Twitter URL",
                name: "twitter",
                value: A,
                onChange: Y
            }), r.a.createElement("label", {
                htmlFor: "twitter",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Twitter URL"))), r.a.createElement("div", {
                className: "form__group social-input"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "Instagram URL",
                name: "instagram",
                value: q,
                onChange: Y
            }), r.a.createElement("label", {
                htmlFor: "instagram",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Instagram URL"))), r.a.createElement("div", {
                className: "form__group social-input"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "Linkedin URL",
                name: "linkedin",
                value: G,
                onChange: Y
            }), r.a.createElement("label", {
                htmlFor: "linkedin",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Linkedin URL"))), r.a.createElement("div", {
                className: "form__group social-input"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "Twitch URL",
                name: "twitch",
                value: z,
                onChange: Y
            }), r.a.createElement("label", {
                htmlFor: "twitch",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Twitch URL"))), r.a.createElement("div", {
                className: "form__group social-input"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "Pinterest URL",
                name: "pinterest",
                value: B,
                onChange: Y
            }), r.a.createElement("label", {
                htmlFor: "pinterest",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Pinterest URL"))), r.a.createElement("div", {
                className: "form__group social-input"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "Reddit URL",
                name: "reddit",
                value: K,
                onChange: Y
            }), r.a.createElement("label", {
                htmlFor: "reddit",
                className: "form__label"
            }, r.a.createElement("span", {
                className: "form__label-name"
            }, "Reddit URL")))))), r.a.createElement("div", {
                className: "form__footer"
            }, r.a.createElement("input", {
                type: "submit",
                className: "btn btn-primary btn-full-width form__submit",
                value: "Update Profile"
            }), r.a.createElement("div", {
                className: "form__toggle-btn"
            }, r.a.createElement(m.b, {
                className: "btn btn-secondary form__toggle-btn",
                to: "/dashboard"
            }, "Go Back"))))));
        }
        var ge = {
            f_name: "",
            l_name: "",
            username: "",
            tag_name: "",
            user_email: "",
            user_avatar: "",
            address: "",
            address2: "",
            city: "",
            state: "",
            country: "",
            zipcode: "",
            gender: "",
            birthday: "",
            company: "",
            status: "",
            interests: "",
            bio: "",
            background_image: "",
            youtube: "",
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: "",
            twitch: "",
            pinterest: "",
            reddit: ""
        };
        function ve() {
            return (ve = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = arguments[t];
                    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
            }).apply(this, arguments);
        }
        function he(e, t, a, n, r, l, s) {
            try {
                var o = e[l](s), c = o.value;
            } catch (e) {
                return a(e), 0;
            }
            o.done ? t(c) : Promise.resolve(c).then(n, r);
        }
        function Ne(e) {
            return function() {
                var t = this, a = arguments;
                return new Promise(function(n, r) {
                    var l = e.apply(t, a);
                    function s(e) {
                        he(l, n, r, s, o, "next", e);
                    }
                    function o(e) {
                        he(l, n, r, s, o, "throw", e);
                    }
                    s(void 0);
                });
            };
        }
        function ye(e) {
            return t = Ne(regeneratorRuntime.mark(function t(a) {
                var n;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, t.next = 3, F.get("/posts/" + e);

                      case 3:
                        n = t.sent, a({
                            type: "GET_POST_BY_ID",
                            payload: n.data.data
                        }), t.next = 10;
                        break;

                      case 7:
                        t.prev = 7, t.t0 = t.catch(0), a({
                            type: "POST_ERROR",
                            payload: {
                                msg: t.t0.response.statusText,
                                status: t.t0.response.status
                            }
                        });

                      case 10:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 0, 7 ] ]);
            })), function(e) {
                return t.apply(this, arguments);
            };
            var t;
        }
        function we(l) {
            var t = l.post, a = Object(p.b)(), l = ((l = Object(p.c)(function(e) {
                return e.auth;
            })).isAuthenticated, l.user);
            return r.a.createElement("div", {
                className: "post__post-wrapper"
            }, r.a.createElement("div", {
                className: "post__post"
            }, r.a.createElement("div", {
                className: "post__post-header"
            }, r.a.createElement(m.b, {
                to: "/profile/" + t.user_id
            }, r.a.createElement("img", {
                className: "post__post-avatar",
                src: t.user_avatar,
                alt: "user avatar"
            })), r.a.createElement("div", {
                className: "post__post-name"
            }, r.a.createElement("h3", {
                className: "post__post-username"
            }, t.username), r.a.createElement("h5", {
                className: "post__post-tag-name"
            }, t.tag_name))), r.a.createElement("h4", {
                className: "post__post-title"
            }, t.title), r.a.createElement("div", {
                className: "post__image-container"
            }, t.image_url && r.a.createElement("img", {
                className: "post__post-image",
                src: t.image_url
            })), r.a.createElement("p", {
                className: "post__post-description"
            }, t.description), t && r.a.createElement("div", {
                className: "post__post-stats"
            }, r.a.createElement("div", {
                className: "post__stat-sec-one"
            }, r.a.createElement("div", {
                className: "like-unlike-sec"
            }, r.a.createElement("button", {
                className: "btn btn-secondary post__feed-thumb-btn",
                onClick: function(e) {
                    return a((n = t.id, function() {
                        var e = Ne(regeneratorRuntime.mark(function e(t) {
                            var a;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.prev = 0, e.next = 3, F.put("/posts/like/" + n);

                                  case 3:
                                    a = e.sent, t({
                                        type: "LIKE_FEED_POST",
                                        payload: {
                                            postLike: ve({}, a.data.data.postLike),
                                            postId: n
                                        }
                                    }), t(T("Post liked.", "success")), e.next = 12;
                                    break;

                                  case 8:
                                    e.prev = 8, e.t0 = e.catch(0), t({
                                        type: "LIKE_ERROR",
                                        payload: {
                                            msg: e.t0.response.statusText,
                                            status: e.t0.response.status
                                        }
                                    }), t(T("Could not like post.", "danger"));

                                  case 12:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, null, [ [ 0, 8 ] ]);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()));
                    var n;
                },
                type: "button"
            }, r.a.createElement("div", {
                className: "post__like-num"
            }, r.a.createElement("i", {
                className: "fas fa-thumbs-up post__thumb-up"
            }), r.a.createElement("span", null, 0 < t.postLikes.length && r.a.createElement("span", {
                className: "like-number"
            }, t.postLikes.length)))), r.a.createElement("button", {
                className: "btn btn-secondary post__feed-thumb-btn post__thumb-down",
                onClick: function(e) {
                    return a((n = t.id, function() {
                        var e = Ne(regeneratorRuntime.mark(function e(t) {
                            var a;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.prev = 0, e.next = 3, F.delete("/posts/unlike/" + n);

                                  case 3:
                                    a = e.sent, t({
                                        type: "UNLIKE_FEED_POST",
                                        payload: {
                                            userId: a.data.data.userId,
                                            postId: n
                                        }
                                    }), t(T("Post unliked.", "success")), e.next = 12;
                                    break;

                                  case 8:
                                    e.prev = 8, e.t0 = e.catch(0), t({
                                        type: "LIKE_ERROR",
                                        payload: {
                                            msg: e.t0.response.statusText,
                                            status: e.t0.response.status
                                        }
                                    }), t(T("Could not unlike post.", "danger"));

                                  case 12:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, null, [ [ 0, 8 ] ]);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()));
                    var n;
                },
                type: "button"
            }, r.a.createElement("i", {
                className: "fas fa-thumbs-down"
            }))), r.a.createElement(m.b, {
                to: "/post/" + t.id,
                className: "btn btn-secondary post__comment-btn"
            }, r.a.createElement("span", {
                className: "post__comment"
            }, "View Post /", r.a.createElement("span", {
                className: "post__comment-count"
            }, t.postComments.length), " Comments"))), l && l.id === t.user_id && r.a.createElement("div", {
                className: "post__stat-sec-two"
            }, r.a.createElement("button", {
                className: "btn btn-danger no-margin",
                onClick: function(e) {
                    return a((n = t.id, function() {
                        var e = Ne(regeneratorRuntime.mark(function e(t) {
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.prev = 0, e.next = 3, F.delete("/posts/delete/" + n);

                                  case 3:
                                    t({
                                        type: "CLEAR_POST"
                                    }), t({
                                        type: "DELETE_FEED_POST",
                                        payload: n
                                    }), t(T("Post deleted.", "success")), e.next = 12;
                                    break;

                                  case 8:
                                    e.prev = 8, e.t0 = e.catch(0), t({
                                        type: "POST_ERROR",
                                        payload: {
                                            msg: e.t0.response.statusText,
                                            status: e.t0.response.status
                                        }
                                    }), t(T("Failed to delete post.", "danger"));

                                  case 12:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, null, [ [ 0, 8 ] ]);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()));
                    var n;
                },
                type: "button"
            }, r.a.createElement("i", {
                className: "fas fa-times"
            })))), r.a.createElement("p", {
                className: "post__date"
            }, t.created_at)));
        }
        function Oe() {
            return (Oe = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = arguments[t];
                    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
            }).apply(this, arguments);
        }
        function Re() {
            var e = Object(p.b)(), a = (m = Object(n.useState)(ke))[0], l = m[1], s = a.title, o = a.description, c = (a.image_url, 
            Object(n.useRef)()), m = function(e) {
                var t;
                return l(Oe({}, a, ((t = {})[e.target.name] = e.target.value, t)));
            };
            return r.a.createElement("div", {
                className: "post__form-section"
            }, r.a.createElement("form", {
                className: "form post__form",
                onSubmit: function(t) {
                    t.preventDefault(), e(function(e) {
                        return t = Ne(regeneratorRuntime.mark(function t(a) {
                            var r;
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.prev = 0, t.next = 3, function(r) {
                                        var t = r.title, a = r.image_url, n = r.description, r = new FormData();
                                        return t && r.append("title", t), r.append("description", n), a && r.append("image_url", a), 
                                        r;
                                    }(e);

                                  case 3:
                                    return r = t.sent, t.next = 6, F.post("/posts", r);

                                  case 6:
                                    r = t.sent, a({
                                        type: "CREATE_POST",
                                        payload: r.data.data.newPost
                                    }), a(T("Post created.", "success")), t.next = 15;
                                    break;

                                  case 11:
                                    t.prev = 11, t.t0 = t.catch(0), a({
                                        type: "POST_ERROR",
                                        payload: {
                                            msg: t.t0.response.statusText,
                                            status: t.t0.response.status
                                        }
                                    }), a(T("Could not create post.", "danger"));

                                  case 15:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 0, 11 ] ]);
                        })), function(e) {
                            return t.apply(this, arguments);
                        };
                        var t;
                    }(a)), c.current.value = "", l({
                        title: "",
                        description: "",
                        image_url: ""
                    });
                }
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "Post Title (Optional)",
                className: "post__form-title",
                name: "title",
                onChange: m,
                value: s
            }), r.a.createElement("div", {
                className: "post__group"
            }, r.a.createElement("input", {
                type: "file",
                accept: ".jpeg, .jpg, .png, .gif",
                placeholder: ".jpeg, .jpg, .gif, .png formats only",
                className: "post__form-title post__form-image file-btn-input",
                name: "image_url",
                onChange: function(e) {
                    var t;
                    l(Oe({}, a, ((t = {})[e.target.name] = e.target.files[0], t)));
                },
                ref: c
            }), r.a.createElement("label", {
                htmlFor: "image_url",
                className: "post__form file-btn-label"
            }, "Image")), r.a.createElement("div", {
                className: "post__group"
            }, r.a.createElement("textarea", {
                name: "description",
                cols: "30",
                rows: "5",
                placeholder: "Create a post",
                onChange: m,
                value: o,
                required: !0
            }), r.a.createElement("input", {
                type: "submit",
                className: "btn btn-primary post__form-btn",
                value: "Create Post"
            }))));
        }
        function Ce() {
            var e = Object(p.b)(), a = (l = Object(p.c)(function(e) {
                return e.post;
            })).posts, l = l.loading;
            return Object(n.useEffect)(function() {
                e(function() {
                    var e = Ne(regeneratorRuntime.mark(function e(t) {
                        var a;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t({
                                    type: "CLEAR_POST"
                                }), e.prev = 1, e.next = 4, F.get("/posts");

                              case 4:
                                a = e.sent, t({
                                    type: "GET_ALL_POSTS",
                                    payload: a.data.data.posts
                                }), e.next = 11;
                                break;

                              case 8:
                                e.prev = 8, e.t0 = e.catch(1), t({
                                    type: "POST_ERROR",
                                    payload: {
                                        msg: e.t0.response.statusText,
                                        status: e.t0.response.status
                                    }
                                });

                              case 11:
                              case "end":
                                return e.stop();
                            }
                        }, e, null, [ [ 1, 8 ] ]);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }());
            }, [ e ]), l ? r.a.createElement(ee, null) : r.a.createElement("section", {
                className: "posts-page-wrapper"
            }, r.a.createElement("div", {
                className: "post"
            }, r.a.createElement(Re, null)), r.a.createElement("div", {
                className: "post__feed"
            }, a && 0 < a.length ? r.a.createElement(n.Fragment, null, a && a.map(function(e, t) {
                return r.a.createElement(we, {
                    post: e,
                    key: t
                });
            })) : r.a.createElement("div", null, "No posts found. Follow profiles in order to start seeing posts in your feed.")));
        }
        var ke = {
            title: "",
            description: "",
            image_url: ""
        };
        function xe() {
            return (xe = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = arguments[t];
                    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
            }).apply(this, arguments);
        }
        function Se(m) {
            var t = m.postId, a = Object(p.b)(), s = (u = Object(n.useState)(Le))[0], o = u[1], c = s.title, m = s.description, i = (s.image_url, 
            Object(n.useRef)()), u = function(e) {
                var t;
                return o(xe({}, s, ((t = {})[e.target.name] = e.target.value, t)));
            };
            return r.a.createElement("div", {
                className: "post comments__comment-form"
            }, r.a.createElement("div", {
                className: "post__form-section"
            }, r.a.createElement("form", {
                className: "form post__form",
                onSubmit: function(e) {
                    e.preventDefault(), a(function(e, t) {
                        return a = Ne(regeneratorRuntime.mark(function a(n) {
                            var l;
                            return regeneratorRuntime.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    return a.prev = 0, a.next = 3, function(r) {
                                        var t = r.title, a = r.image_url, n = r.description, r = new FormData();
                                        return t && r.append("title", t), r.append("description", n), a && r.append("image_url", a), 
                                        r;
                                    }(t);

                                  case 3:
                                    return l = a.sent, a.next = 6, F.post("/posts/comment/" + e, l);

                                  case 6:
                                    l = a.sent, n({
                                        type: "ADD_COMMENT",
                                        payload: l.data.data.postComment
                                    }), n(T("Comment created.", "success")), a.next = 15;
                                    break;

                                  case 11:
                                    a.prev = 11, a.t0 = a.catch(0), n({
                                        type: "COMMENT_ERROR",
                                        payload: {
                                            msg: a.t0.response.statusText,
                                            status: a.t0.response.status
                                        }
                                    }), n(T("Could not create comment.", "danger"));

                                  case 15:
                                  case "end":
                                    return a.stop();
                                }
                            }, a, null, [ [ 0, 11 ] ]);
                        })), function(e) {
                            return a.apply(this, arguments);
                        };
                        var a;
                    }(t, s)), i.current.value = "", o({
                        title: "",
                        description: "",
                        image_url: ""
                    });
                }
            }, r.a.createElement("h3", null, "Leave a Comment"), r.a.createElement("div", {
                className: "post__group"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "Comment Title (Optional)",
                className: "post__form-title",
                name: "title",
                onChange: u,
                value: c
            })), r.a.createElement("div", {
                className: "post__group"
            }, r.a.createElement("input", {
                type: "file",
                accept: ".jpeg, .jpg, .gif, .png",
                placeholder: ".jpeg, .jpg, .gif, .png formats only",
                className: "post__form-title file-btn-input",
                name: "image_url",
                onChange: function(e) {
                    var t;
                    o(xe({}, s, ((t = {})[e.target.name] = e.target.files[0], t)));
                },
                ref: i
            }), r.a.createElement("label", {
                htmlFor: "image_url",
                className: "post__form file-btn-label"
            }, "Image")), r.a.createElement("div", {
                className: ""
            }, r.a.createElement("textarea", {
                name: "description",
                cols: "30",
                rows: "5",
                placeholder: "Create a comment",
                onChange: u,
                value: m,
                required: !0
            })), r.a.createElement("input", {
                type: "submit",
                className: "btn btn-primary post__form-btn",
                value: "Create Comment"
            }))));
        }
        function Fe(a) {
            var t = a.comment, a = (a.postId, a.post, a.isAuth), n = Object(i.h)().post_id, l = Object(p.b)();
            return r.a.createElement("div", {
                className: "comment__comment-wrapper"
            }, r.a.createElement("div", {
                className: "comment__comment"
            }, r.a.createElement("div", {
                className: "comment__comment-header"
            }, r.a.createElement(m.b, {
                to: "/profile/" + t.user_id
            }, r.a.createElement("img", {
                className: "comment__comment-avatar",
                src: t.user_avatar,
                alt: "user avatar"
            })), r.a.createElement("div", {
                className: "comment__comment-name"
            }, r.a.createElement("h3", {
                className: "comment__comment-username"
            }, t.username), r.a.createElement("h5", {
                className: "comment__comment-tag-name"
            }, t.tag_name))), r.a.createElement("h4", {
                className: "comment__comment-title"
            }, t.title), r.a.createElement("div", {
                className: "comment__image-container"
            }, t.image_url && r.a.createElement("img", {
                className: "comment__comment-image",
                src: t.image_url
            })), r.a.createElement("p", {
                className: "comment__comment-description"
            }, t.description), r.a.createElement("div", {
                className: "comment__comment-stats"
            }, r.a.createElement("div", {
                className: "comment__stat-sec-one"
            }, r.a.createElement("button", {
                className: "btn btn-secondary comment__thumb-btn",
                onClick: function(e) {
                    return l((a = t.id, function() {
                        var e = Ne(regeneratorRuntime.mark(function e(t) {
                            var n;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.prev = 0, e.next = 3, F.put("/posts/comment/like/" + a);

                                  case 3:
                                    n = e.sent, t({
                                        type: "LIKE_COMMENT",
                                        payload: {
                                            likeComment: n.data.data.likeComment,
                                            commentId: a
                                        }
                                    }), t(T("Comment liked.", "success")), e.next = 12;
                                    break;

                                  case 8:
                                    e.prev = 8, e.t0 = e.catch(0), t({
                                        type: "LIKE_ERROR",
                                        payload: {
                                            msg: e.t0.response.statusText,
                                            status: e.t0.response.status
                                        }
                                    }), t(T("Could not like comment.", "danger"));

                                  case 12:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, null, [ [ 0, 8 ] ]);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()));
                    var a;
                },
                type: "button"
            }, r.a.createElement("i", {
                className: "fas fa-thumbs-up comment__thumb-up"
            }), " ", 0 < t.commentLikes.length && r.a.createElement("span", null, t.commentLikes.length)), r.a.createElement("button", {
                className: "btn btn-secondary comment__thumb-btn",
                onClick: function(e) {
                    return l((a = t.id, function() {
                        var e = Ne(regeneratorRuntime.mark(function e(t) {
                            var n;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.prev = 0, e.next = 3, F.delete("/posts/comment/unlike/" + a);

                                  case 3:
                                    n = e.sent, t({
                                        type: "UNLIKE_COMMENT",
                                        payload: {
                                            userId: n.data.data.userId,
                                            commentId: a
                                        }
                                    }), t(T("Comment unliked.", "success")), e.next = 12;
                                    break;

                                  case 8:
                                    e.prev = 8, e.t0 = e.catch(0), t({
                                        type: "LIKE_ERROR",
                                        payload: {
                                            msg: e.t0.response.statusText,
                                            status: e.t0.response.status
                                        }
                                    }), t(T("Could not unlike comment.", "danger"));

                                  case 12:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, null, [ [ 0, 8 ] ]);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()));
                    var a;
                },
                type: "button"
            }, r.a.createElement("i", {
                className: "fas fa-thumbs-down"
            }))), r.a.createElement("div", {
                className: "comment__stat-sec-two"
            }, a && a.user.id === t.user_id && r.a.createElement("button", {
                className: "btn btn-danger comment__delete-comment",
                onClick: function(e) {
                    return l(function(e, t) {
                        return a = Ne(regeneratorRuntime.mark(function a(n) {
                            return regeneratorRuntime.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    return a.prev = 0, a.next = 3, F.delete("/posts/delete/comment/" + e + "/" + t);

                                  case 3:
                                    a.sent, n({
                                        type: "DELETE_COMMENT",
                                        payload: {
                                            postId: e,
                                            commentId: t
                                        }
                                    }), n(T("Comment removed.", "success")), a.next = 12;
                                    break;

                                  case 8:
                                    a.prev = 8, a.t0 = a.catch(0), n({
                                        type: "COMMENT_ERROR",
                                        payload: {
                                            msg: a.t0.response.statusText,
                                            status: a.t0.response.status
                                        }
                                    }), n(T("Comment created.", "danger"));

                                  case 12:
                                  case "end":
                                    return a.stop();
                                }
                            }, a, null, [ [ 0, 8 ] ]);
                        })), function(e) {
                            return a.apply(this, arguments);
                        };
                        var a;
                    }(n, t.id));
                },
                type: "button"
            }, r.a.createElement("i", {
                className: "fas fa-times"
            }))))));
        }
        var Le = {
            title: "",
            description: "",
            image_url: ""
        };
        function Pe() {
            return (Pe = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = arguments[t];
                    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
            }).apply(this, arguments);
        }
        function je() {
            var e = Object(i.h)().post_id, t = Object(p.b)(), l = (f = (Object(i.g)(), Object(p.c)(function(e) {
                return e.post;
            }))).post, s = f.loading, c = (d = Object(n.useState)(Te))[0], m = d[1];
            Object(n.useEffect)(function() {
                t(ye(e)), m({
                    title: s || !l ? "" : l.postData.title,
                    description: s || !l ? "" : l.postData.description,
                    image_url: s || !l ? "" : l.postData.image_url
                });
            }, [ t, e, s ]);
            var u = Object(n.useRef)(), f = c.title, d = c.description, _ = (c.image_url, function(e) {
                var t;
                return m(Pe({}, c, ((t = {})[e.target.name] = e.target.value, t)));
            });
            return s && !l ? r.a.createElement(ee, null) : null === l ? r.a.createElement("div", null, "nothing found") : r.a.createElement("div", {
                className: "post post__form-section"
            }, r.a.createElement("form", {
                className: "form post__form",
                onSubmit: function(a) {
                    a.preventDefault(), t(function(e, t) {
                        return function() {
                            var a = Ne(regeneratorRuntime.mark(function a(n) {
                                var l;
                                return regeneratorRuntime.wrap(function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                      case 0:
                                        return a.prev = 0, a.next = 3, function(r) {
                                            var t = r.title, a = r.image_url, n = r.description, r = new FormData();
                                            return t && r.append("title", t), r.append("description", n), a && r.append("image_url", a), 
                                            r;
                                        }(t);

                                      case 3:
                                        return l = a.sent, a.next = 6, F.put("/posts/" + e, l);

                                      case 6:
                                        l = a.sent, n({
                                            type: "UPDATE_POST",
                                            payload: l.data.data.updatePost
                                        }), n(T("Post updated.", "success")), a.next = 15;
                                        break;

                                      case 11:
                                        a.prev = 11, a.t0 = a.catch(0), n({
                                            type: "POST_ERROR",
                                            payload: {
                                                msg: a.t0.response.statusText,
                                                status: a.t0.response.status
                                            }
                                        }), n(T("Failed to update post.", "danger"));

                                      case 15:
                                      case "end":
                                        return a.stop();
                                    }
                                }, a, null, [ [ 0, 11 ] ]);
                            }));
                            return function(e) {
                                return a.apply(this, arguments);
                            };
                        }();
                    }(e, c)), u.current.value = "";
                }
            }, r.a.createElement("h3", null, "Edit Post"), r.a.createElement("div", {
                className: "post__group"
            }, r.a.createElement("input", {
                type: "text",
                placeholder: "Post Title (Optional)",
                className: "post__form-title",
                name: "title",
                onChange: function(e) {
                    return _(e);
                },
                value: f
            })), r.a.createElement("div", {
                className: "post__group"
            }, r.a.createElement("input", {
                type: "file",
                accept: ".jpeg, .jpg, .png, .gif",
                placeholder: ".jpeg, .jpg, .png, .gif formats only",
                className: "post__form-title file-btn-input",
                name: "image_url",
                onChange: function(e) {
                    var t;
                    m(Pe({}, c, ((t = {})[e.target.name] = e.target.files[0], t)));
                },
                ref: u
            }), r.a.createElement("label", {
                htmlFor: "image_url",
                className: "post__form file-btn-label"
            }, "Image")), r.a.createElement("div", {
                className: ""
            }, r.a.createElement("textarea", {
                name: "description",
                cols: "30",
                rows: "5",
                placeholder: "Create a post",
                onChange: function(e) {
                    return _(e);
                },
                value: d,
                required: !0
            })), r.a.createElement("input", {
                type: "submit",
                className: "btn btn-primary post__form-btn",
                value: "Submit Post Edit"
            })));
        }
        function Ie() {
            var e = Object(i.h)().post_id, t = Object(i.g)(), a = Object(p.b)(), l = Object(p.c)(function(e) {
                return e.auth;
            }), f = Object(p.c)(function(e) {
                return e.post;
            }), o = (l.isAuthenticated, l.user), c = f.post, u = f.loading, d = (f = Object(n.useState)(!1))[0], _ = f[1];
            return Object(n.useEffect)(function() {
                a(ye(e));
            }, [ a, e ]), r.a.createElement("section", null, u || null === c ? r.a.createElement(ee, null) : c && c.postData ? r.a.createElement(n.Fragment, null, r.a.createElement("div", {
                className: "post__post-wrapper post-indiv"
            }, r.a.createElement("div", {
                className: "post__post"
            }, r.a.createElement("div", {
                className: "post__post-header"
            }, r.a.createElement(m.b, {
                to: "/profile/" + c.postData.user_id
            }, r.a.createElement("img", {
                className: "post__post-avatar",
                src: c.postData.user_avatar,
                alt: "user avatar"
            })), r.a.createElement("div", {
                className: "post__post-name"
            }, r.a.createElement("h3", {
                className: "post__post-username"
            }, c.postData.username), r.a.createElement("h5", {
                className: "post__post-tag-name"
            }, c.postData.tag_name))), c.postData.title && r.a.createElement("h4", {
                className: "post__post-title"
            }, c.postData.title), r.a.createElement("div", {
                className: "post__image-container"
            }, c.postData.image_url && r.a.createElement("img", {
                className: "post__post-image",
                src: c.postData.image_url
            })), r.a.createElement("p", {
                className: "post__post-description"
            }, c.postData.description), l && r.a.createElement("div", {
                className: "post__post-stats post__indiv-view"
            }, r.a.createElement("div", {
                className: "post__stat-sec-one post__indiv-sec-one"
            }, r.a.createElement("button", {
                className: "btn btn-secondary post__thumb-btn post__indiv-thumb",
                onClick: function(e) {
                    return a((t = c.postData.id, function() {
                        var e = Ne(regeneratorRuntime.mark(function e(a) {
                            var n;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.prev = 0, e.next = 3, F.put("/posts/like/" + t);

                                  case 3:
                                    n = e.sent, a({
                                        type: "LIKE_POST",
                                        payload: n.data.data.postLike
                                    }), a(T("Post liked.", "success")), e.next = 12;
                                    break;

                                  case 8:
                                    e.prev = 8, e.t0 = e.catch(0), a({
                                        type: "LIKE_ERROR",
                                        payload: {
                                            msg: e.t0.response.statusText,
                                            status: e.t0.response.status
                                        }
                                    }), a(T("Could not like post.", "danger"));

                                  case 12:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, null, [ [ 0, 8 ] ]);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()));
                    var t;
                },
                type: "button"
            }, r.a.createElement("i", {
                className: "fas fa-thumbs-up post__thumb-up"
            }), r.a.createElement("span", null, 0 < c.postLikes.length && r.a.createElement("span", null, c.postLikes.length))), r.a.createElement("button", {
                className: "btn btn-secondary post__thumb-btn post__indiv-thumb",
                onClick: function(e) {
                    return a((t = c.postData.id, function() {
                        var e = Ne(regeneratorRuntime.mark(function e(a) {
                            var n;
                            return regeneratorRuntime.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.prev = 0, e.next = 3, F.delete("/posts/unlike/" + t);

                                  case 3:
                                    n = e.sent, a({
                                        type: "UNLIKE_POST",
                                        payload: {
                                            userId: n.data.data.userId,
                                            postId: t
                                        }
                                    }), a(T("Post unliked.", "success")), e.next = 12;
                                    break;

                                  case 8:
                                    e.prev = 8, e.t0 = e.catch(0), a({
                                        type: "LIKE_ERROR",
                                        payload: {
                                            msg: e.t0.response.statusText,
                                            status: e.t0.response.status
                                        }
                                    }), a(T("Could not unlike post.", "danger"));

                                  case 12:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, null, [ [ 0, 8 ] ]);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()));
                    var t;
                },
                type: "button"
            }, r.a.createElement("i", {
                className: "fas fa-thumbs-down"
            }))), o && o.id === c.postData.user_id && r.a.createElement("div", {
                className: "post__stat-sec-two post__indiv-sec-two"
            }, d ? r.a.createElement("button", {
                className: "btn btn-secondary post__post-edit",
                onClick: function(e) {
                    return _(!d);
                },
                type: "button"
            }, r.a.createElement("i", {
                className: ""
            }), " Comment") : r.a.createElement("button", {
                className: "btn btn-secondary post__edit-btn",
                onClick: function(e) {
                    return _(!d);
                },
                type: "button"
            }, r.a.createElement("i", {
                className: ""
            }), " Edit Post"), r.a.createElement("button", {
                className: "btn btn-danger post__delete-post",
                onClick: function(e) {
                    return a(function(e, t) {
                        return a = Ne(regeneratorRuntime.mark(function a(n) {
                            return regeneratorRuntime.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    return a.prev = 0, a.next = 3, F.delete("/posts/delete/" + e);

                                  case 3:
                                    n({
                                        type: "CLEAR_POST"
                                    }), n({
                                        type: "DELETE_POST"
                                    }), n(T("Post deleted.", "success")), t.push("/feed"), a.next = 13;
                                    break;

                                  case 9:
                                    a.prev = 9, a.t0 = a.catch(0), n({
                                        type: "POST_ERROR",
                                        payload: {
                                            msg: a.t0.response.statusText,
                                            status: a.t0.response.status
                                        }
                                    }), n(T("Failed to delete post.", "danger"));

                                  case 13:
                                  case "end":
                                    return a.stop();
                                }
                            }, a, null, [ [ 0, 9 ] ]);
                        })), function(e) {
                            return a.apply(this, arguments);
                        };
                        var a;
                    }(c.postData.id, t));
                },
                type: "button"
            }, r.a.createElement("i", {
                className: "fas fa-times"
            })))), r.a.createElement("p", {
                className: "post__date"
            }, c.postData.created_at))), r.a.createElement("div", {
                className: "comments comments-wrapper"
            }, d ? r.a.createElement("div", {
                className: "editform"
            }, r.a.createElement(je, null)) : r.a.createElement("div", {
                className: "comment"
            }, r.a.createElement(Se, {
                postId: c.postData.id
            })), r.a.createElement("div", {
                className: "comment__feed"
            }, r.a.createElement("div", {
                className: "comment__count"
            }, "Total Comments:", " ", c.postComments.length), c && c.postComments.map(function(t, a) {
                return r.a.createElement(Fe, {
                    comment: t,
                    key: a,
                    postId: e,
                    isAuth: l
                });
            })))) : r.a.createElement("div", {
                className: "post__post-wrapper"
            }, r.a.createElement("p", null, "No post found. Possibly deleted by the original poster or server error has occurred.")));
        }
        var Te = {
            title: "",
            description: "",
            image_url: ""
        }, De = [ "component" ];
        function Ue() {
            return (Ue = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, a = arguments[t];
                    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
            }).apply(this, arguments);
        }
        function Ae(n) {
            var t = n.component, a = function(e, t) {
                if (null == e) return {};
                for (var a, r = {}, l = Object.keys(e), n = 0; n < l.length; n++) a = l[n], 0 <= t.indexOf(a) || (r[a] = e[a]);
                return r;
            }(n, De), l = (n = (Object(p.b)(), Object(p.c)(function(e) {
                return e.auth;
            }))).isAuthenticated, s = (n.user, n.loading);
            return r.a.createElement(i.b, Ue({}, a, {
                render: function(e) {
                    return s ? r.a.createElement(ee, null) : l ? r.a.createElement(t, e) : r.a.createElement(i.a, {
                        to: "/"
                    });
                }
            }));
        }
        function Me() {
            return r.a.createElement("main", {
                className: "container"
            }, r.a.createElement(V, null), r.a.createElement(i.d, null, r.a.createElement(i.b, {
                exact: !0,
                path: "/register",
                component: Z
            }), r.a.createElement(i.b, {
                exact: !0,
                path: "/login",
                component: $
            }), r.a.createElement(i.b, {
                exact: !0,
                path: "/profiles",
                component: le
            }), r.a.createElement(i.b, {
                exact: !0,
                path: "/profile/:user_id",
                component: me
            }), r.a.createElement(Ae, {
                exact: !0,
                path: "/create-profile",
                component: fe
            }), r.a.createElement(Ae, {
                exact: !0,
                path: "/dashboard",
                component: _e
            }), r.a.createElement(Ae, {
                exact: !0,
                path: "/edit-profile",
                component: be
            }), r.a.createElement(Ae, {
                exact: !0,
                path: "/feed",
                component: Ce
            }), r.a.createElement(Ae, {
                exact: !0,
                path: "/post/:post_id",
                component: Ie
            }), r.a.createElement(i.b, {
                component: ie
            })));
        }
        s.a.render(r.a.createElement(r.a.StrictMode, null, r.a.createElement(function() {
            return Object(n.useEffect)(function() {
                localStorage.token && E(localStorage.token), L.dispatch(z()), window.addEventListener("storage", function() {
                    localStorage.token || L.dispatch({
                        type: LOGOUT
                    });
                });
            }, []), r.a.createElement(p.a, {
                store: L
            }, r.a.createElement(m.a, null, r.a.createElement(n.Fragment, null, r.a.createElement(Y, null), r.a.createElement(i.d, null, r.a.createElement(i.b, {
                exact: !0,
                path: "/",
                component: W
            }), r.a.createElement(i.b, {
                component: Me
            })))));
        }, null)), document.getElementById("root"));
    }
});